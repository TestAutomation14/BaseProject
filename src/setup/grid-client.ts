import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { Properties } from '../config/Properties';

/**
 * Multi-node grid client with proactive capacity checking.
 *
 * Each machine has a known max of MAX_WORKERS_PER_NODE containers.
 * Before attempting to create a session, the client checks /api/workers
 * on the target node to count active sessions. If already at max, it
 * skips that node and tries the next one — no need to wait for Docker to fail.
 *
 * Configure nodes in test.properties:
 *   GRID_NODES=http://chpnx913:4445,http://chpnx914:4445,...
 *   GRID_MAX_WORKERS_PER_NODE=8   (or GRID_LOCAL_MAX_SESSIONS_PER_NODE)
 *
 * Worker assignment: round-robin across nodes, with proactive capacity skip
 * and reactive failover as a safety net.
 */

function getMaxWorkersPerNode(): number {
  const configured = Number(
    getSetting('GRID_MAX_WORKERS_PER_NODE') ||
    getSetting('GRID_LOCAL_MAX_SESSIONS_PER_NODE')
  );
  if (Number.isFinite(configured) && configured > 0) {
    return configured;
  }
  return 8;
}

const MAX_WORKERS_PER_NODE = getMaxWorkersPerNode();
// Slots reserved exclusively for sequential/priority runs (--workers=1 or GRID_PRIORITY=true)
// Non-priority runs treat capacity as MAX_WORKERS_PER_NODE - GRID_RESERVED_SLOTS
const RESERVED_SLOTS = Number(getSetting('GRID_RESERVED_SLOTS') || 0);

function getSetting(key: string): string | undefined {
  const environmentValue = process.env[key];
  if (environmentValue !== undefined && environmentValue !== '') {
    return environmentValue;
  }

  const propertyValue = Properties.get(key);
  return propertyValue !== '' ? propertyValue : undefined;
}

function getRequestedWorkerCount(): number | undefined {
  const argvWorkers = process.argv.find(arg => arg.startsWith('--workers='));
  if (argvWorkers) {
    const parsed = Number(argvWorkers.split('=')[1]);
    if (Number.isFinite(parsed) && parsed > 0) return parsed;
  }

  const workersFlagIndex = process.argv.indexOf('--workers');
  if (workersFlagIndex >= 0 && process.argv[workersFlagIndex + 1]) {
    const parsed = Number(process.argv[workersFlagIndex + 1]);
    if (Number.isFinite(parsed) && parsed > 0) return parsed;
  }

  const fromEnv = Number(process.env.GRID_WORKERS || process.env.PW_WORKERS || 0);
  if (fromEnv > 0) return fromEnv;

  return undefined;
}

function getEffectiveMax(): number {
  const requestedWorkers = getRequestedWorkerCount();
  const isPriority = process.env.GRID_PRIORITY === 'true' ||
    (requestedWorkers !== undefined && requestedWorkers === 1);

  // Keep the valid <=8-worker path out of the retry loop. Only use wait/skip logic
  // when the run is actually asking for more than the node can hold, or when a
  // reserved-slot priority mode is active.
  if (requestedWorkers !== undefined && requestedWorkers <= MAX_WORKERS_PER_NODE) {
    return MAX_WORKERS_PER_NODE;
  }

  // If the exact requested worker count is unknown, default to the true node limit so
  // a normal 8-slot run is not treated as a false "all nodes full" condition.
  if (requestedWorkers === undefined) {
    return MAX_WORKERS_PER_NODE;
  }

  return isPriority ? MAX_WORKERS_PER_NODE : Math.max(1, MAX_WORKERS_PER_NODE - RESERVED_SLOTS);
}

function normalizeBrowserName(value?: string): 'chromium' | 'firefox' | 'webkit' | undefined {
  const normalized = (value ?? '').trim().toLowerCase();
  if (!normalized) return undefined;

  if (normalized === 'chrome' || normalized === 'google-chrome' || normalized === 'msedge' || normalized === 'edge' || normalized === 'chromium' || normalized === 'chromium-browser') {
    return 'chromium';
  }
  if (normalized === 'firefox') return 'firefox';
  if (normalized === 'webkit') return 'webkit';
  return undefined;
}

function getGridNodes(): string[] {
  const GRID_PORT = getSetting('GRID_PORT') || '4445';

  const normalise = (entry: string): string => {
    const trimmed = entry.trim();
    if (!trimmed) return '';
    // Already a full URL — use as-is
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed;
    // Machine name or IP only — add protocol and port
    return `http://${trimmed}:${GRID_PORT}`;
  };

  const nodeList = getSetting('GRID_NODES');
  if (nodeList) {
    return nodeList.split(',').map(normalise).filter(Boolean);
  }

  // Legacy single-node fallback
  const single = getSetting('GRID_CONTROLLER_URL') ||
    `http://${getSetting('GRID_HOST') || '127.0.0.1'}:${GRID_PORT}`;
  return [single];
}

// ── Node health cache ────────────────────────────────────────────────────────
// Each Playwright worker is a separate process — no shared memory.
// We use a short TTL so each worker re-fetches frequently, and rely on
// optimistic local increments to reduce contention within a single worker.
type NodeHealth = {
  url: string;
  online: boolean;
  activeCount: number;
  checkedAt: number;
};

const nodeHealthCache = new Map<string, NodeHealth>();
const CACHE_TTL_MS = 10000; // re-check every 10 seconds

async function checkNodeHealth(url: string): Promise<NodeHealth> {
  try {
    const res = await fetch(`${url}/api/workers`, {
      signal: AbortSignal.timeout(10000)
    });
    if (!res.ok) {
      return { url, online: false, activeCount: MAX_WORKERS_PER_NODE + 1, checkedAt: Date.now() };
    }
    const workers = await res.json() as unknown[];
    const activeCount = Array.isArray(workers) ? workers.length : 0;
    return { url, online: true, activeCount, checkedAt: Date.now() };
  } catch {
    return { url, online: false, activeCount: MAX_WORKERS_PER_NODE + 1, checkedAt: Date.now() };
  }
}

async function getNodeHealth(url: string): Promise<NodeHealth> {
  const cached = nodeHealthCache.get(url);
  if (cached && Date.now() - cached.checkedAt < CACHE_TTL_MS) return cached;
  const fresh = await checkNodeHealth(url);
  nodeHealthCache.set(url, fresh);
  return fresh;
}

// ────────────────────────────────────────────────────────────────────────────

/**
 * Remove containers left over from a previous run on all nodes.
 * Only removes containers that have been running longer than STALE_THRESHOLD_MS
 * (default 2 hours) — avoids killing containers from a concurrent active run.
 */
const STALE_THRESHOLD_MS = Number(process.env.GRID_STALE_THRESHOLD_MS || 2 * 60 * 60 * 1000); // 2 hours

async function cleanupStaleContainers(nodes: string[]): Promise<void> {
  const now = Date.now();
  for (const url of nodes) {
    try {
      const res = await fetch(`${url}/api/workers`, { signal: AbortSignal.timeout(3000) });
      if (!res.ok) continue;
      const workers = await res.json() as Array<{
        workerIndex: number;
        container: string;
        startedAt?: string;
        status?: string;
      }>;
      if (!Array.isArray(workers) || workers.length === 0) continue;

      const stale = workers.filter(w => {
        if (!w.startedAt) return true; // no timestamp means this is likely stale/abandoned
        const age = now - new Date(w.startedAt).getTime();
        return age > STALE_THRESHOLD_MS;
      });

      if (stale.length === 0) {
        if (process.env.DEBUG_GRID === 'true') {
          console.log(`ℹ ${url}: ${workers.length} container(s) running — all recent, skipping cleanup`);
        }
        continue;
      }

      console.log(`🧹 ${url}: removing ${stale.length} stale container(s) (>${STALE_THRESHOLD_MS / 3600000}h old)...`);
      for (const w of stale) {
        try {
          await fetch(`${url}/session/${w.workerIndex}?container=${encodeURIComponent(w.container)}`, {
            method: 'DELETE',
            signal: AbortSignal.timeout(5000)
          });
        } catch { /* ignore individual cleanup errors */ }
      }
    } catch { /* node unreachable — skip */ }
  }
}

let cleanupDone = false;

// Track which node each workerIndex session was created on
const sessionNodeMap = new Map<number, string>();
const sessionContainerMap = new Map<number, string>();
const sessionLeaseMap = new Map<number, string>();
const leaseHeartbeatTimers = new Map<string, NodeJS.Timeout>();
const LEASE_HEARTBEAT_MS = 10_000;
const LEASE_STALE_MS = 60_000;

function getLeaseDirectory(controllerUrl: string): string {
  const controllerId = Buffer.from(controllerUrl).toString('base64url');
  return path.join(os.tmpdir(), 'playwright-grid-leases', controllerId);
}

function isProcessRunning(pid: number): boolean {
  try {
    process.kill(pid, 0);
    return true;
  } catch (error: unknown) {
    return (error as NodeJS.ErrnoException).code === 'EPERM';
  }
}

async function reclaimStaleLease(leasePath: string): Promise<void> {
  const ownerPath = path.join(leasePath, 'owner.json');
  try {
    const content = await fs.readFile(ownerPath, 'utf8');
    const owner = JSON.parse(content) as { pid?: unknown; acquiredAt?: unknown; heartbeatAt?: unknown };
    const heartbeatAt = typeof owner.heartbeatAt === 'number'
      ? owner.heartbeatAt
      : typeof owner.acquiredAt === 'number' ? owner.acquiredAt : 0;
    const heartbeatExpired = heartbeatAt <= 0 || Date.now() - heartbeatAt > LEASE_STALE_MS;
    const ownerProcessStopped = typeof owner.pid === 'number' &&
      Number.isInteger(owner.pid) &&
      !isProcessRunning(owner.pid);
    if (ownerProcessStopped || heartbeatExpired) {
      await renameAndDeleteLease(leasePath);
    }
  } catch (error: unknown) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code === 'ENOENT' || code === 'ENOTDIR') {
      const stats = await fs.stat(leasePath).catch(() => undefined);
      if (stats && Date.now() - stats.birthtimeMs > 30_000) {
        await renameAndDeleteLease(leasePath);
      }
      return;
    }
    // Another worker may be writing or reclaiming this slot. Leave it in
    // place and let the allocator try the next slot instead of failing setup.
    if (code === 'EPERM' || code === 'EBUSY' || error instanceof SyntaxError) return;
  }
}

async function renameAndDeleteLease(leasePath: string): Promise<void> {
  const reclaimedLeasePath = `${leasePath}.reclaim-${process.pid}-${Date.now()}`;
  try {
    await fs.rename(leasePath, reclaimedLeasePath);
  } catch (error: unknown) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code === 'ENOENT' || code === 'EPERM' || code === 'EBUSY') {
      return;
    }
    return;
  }
  try {
    await fs.rm(reclaimedLeasePath, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
  } catch {
    // Ignore cleanup error on reclaimed directory
  }
}

async function acquireSessionLease(controllerUrl: string): Promise<string | undefined> {
  const maxSessions = Number(getSetting('GRID_LOCAL_MAX_SESSIONS_PER_NODE') || MAX_WORKERS_PER_NODE);
  if (!Number.isInteger(maxSessions) || maxSessions < 1) {
    throw new Error('GRID_LOCAL_MAX_SESSIONS_PER_NODE must be a positive integer');
  }

  const leaseDirectory = getLeaseDirectory(controllerUrl);
  try {
    await fs.mkdir(leaseDirectory, { recursive: true });
  } catch {
    // Directory might already exist
  }

  for (let slot = 0; slot < maxSessions; slot++) {
    const leasePath = path.join(leaseDirectory, String(slot));
    try {
      await fs.mkdir(leasePath);
      await startLeaseHeartbeat(leasePath);
      return leasePath;
    } catch {
      await reclaimStaleLease(leasePath).catch(() => {});
      try {
        await fs.mkdir(leasePath);
        await startLeaseHeartbeat(leasePath);
        return leasePath;
      } catch {
        // Slot is held by another worker or in conflict; continue to next slot
        continue;
      }
    }
  }

  return undefined;
}

async function startLeaseHeartbeat(leasePath: string): Promise<void> {
  const ownerPath = path.join(leasePath, 'owner.json');
  const acquiredAt = Date.now();
  await fs.writeFile(ownerPath, JSON.stringify({
    pid: process.pid,
    acquiredAt,
    heartbeatAt: acquiredAt
  }), 'utf8');

  const timer = setInterval(() => {
    fs.writeFile(ownerPath, JSON.stringify({
      pid: process.pid,
      acquiredAt,
      heartbeatAt: Date.now()
    }), 'utf8').catch(() => {});
  }, LEASE_HEARTBEAT_MS);
  timer.unref();
  leaseHeartbeatTimers.set(leasePath, timer);
}

async function releaseSessionLease(leasePath: string | undefined): Promise<void> {
  if (leasePath) {
    const heartbeatTimer = leaseHeartbeatTimers.get(leasePath);
    if (heartbeatTimer) {
      clearInterval(heartbeatTimer);
      leaseHeartbeatTimers.delete(leasePath);
    }
    try {
      await fs.rm(leasePath, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 });
    } catch (error: unknown) {
      const code = (error as NodeJS.ErrnoException).code;
      if (code !== 'ENOENT' && code !== 'EPERM' && code !== 'EBUSY' && code !== 'ENOTEMPTY') {
        throw error;
      }
    }
  }
}

function getRetryDelayMs(workerIndex: number, retryIntervalMs: number): number {
  const jitterMs = Number(getSetting('GRID_RETRY_JITTER_MS') || 1000);
  if (!Number.isFinite(jitterMs) || jitterMs <= 0) {
    return retryIntervalMs;
  }

  const seed = Math.abs((process.pid * 31) + (workerIndex * 17));
  return retryIntervalMs + (seed % (Math.floor(jitterMs) + 1));
}

function isCapacityError(status: number, body: string): boolean {
  if (status === 503 || status === 429) return true;
  const lower = body.toLowerCase();
  return lower.includes('capacity') ||
    lower.includes('no available') ||
    lower.includes('max workers') ||
    lower.includes('limit') ||
    lower.includes('cannot allocate') ||
    lower.includes('out of memory') ||
    lower.includes('no space left') ||
    lower.includes('cannot start');
}

export async function createRemoteBrowser(
  workerIndex: number,
  testName?: string,
  requestedBrowser?: 'chromium' | 'firefox' | 'webkit'
) {
  const nodes = getGridNodes();

  // Only worker zero performs startup cleanup. Each Playwright worker is a separate
  // process, so allowing every worker to sweep would overload the grid controller.
  if (workerIndex === 0 && !cleanupDone) {
    cleanupDone = true;
    // Do not delete every session here: each Playwright worker is a separate
    // process, so unconditional cleanup can terminate sessions created by a
    // concurrent worker. Only remove sessions proven to be stale.
    await cleanupStaleContainers(nodes);
    nodeHealthCache.clear();
  }

  // Stagger only to spread initial requests slightly — controller enforces the hard limit via 503
  const STAGGER_MS = Number(getSetting('GRID_WORKER_STAGGER_MS') || 250);
  const staggerDelay = (workerIndex % MAX_WORKERS_PER_NODE) * STAGGER_MS;
  if (staggerDelay > 0) {
    await new Promise<void>(resolve => setTimeout(resolve, staggerDelay));
  }

  const RETRY_INTERVAL_MS = Number(getSetting('GRID_RETRY_INTERVAL_MS') || 10000);
  const MAX_WAIT_MS = Number(getSetting('GRID_MAX_WAIT_MS') || 5 * 60 * 1000);
  const waitIndefinitely = !Number.isFinite(MAX_WAIT_MS) || MAX_WAIT_MS <= 0;
  const effectiveMax = getEffectiveMax();
  let startedAt = Date.now();
  let waitingForReachableNode = false;
  const requestedWorkers = getRequestedWorkerCount();

  while (waitIndefinitely || Date.now() - startedAt < MAX_WAIT_MS) {
    let lastError: Error | null = null;

    const startIndex = workerIndex % nodes.length;
    const orderedNodes = [
      ...nodes.slice(startIndex),
      ...nodes.slice(0, startIndex)
    ];

    const healthChecks = await Promise.all(orderedNodes.map(getNodeHealth));
    const onlineNodes = orderedNodes.filter((_, index) => healthChecks[index].online);
    if (onlineNodes.length === 0) {
      const isSequentialRun = requestedWorkers === 1;
      if (isSequentialRun) {
        throw new Error(`Worker ${workerIndex}: no reachable grid node available (${orderedNodes.join(', ')})`);
      }
      const waited = Math.round((Date.now() - startedAt) / 1000);
      const retryDelayMs = getRetryDelayMs(workerIndex, RETRY_INTERVAL_MS);
      console.log(`⏳ Worker ${workerIndex}: no reachable node, waiting ${retryDelayMs / 1000}s... (${waited}s elapsed)`);
      waitingForReachableNode = true;
      nodeHealthCache.clear();
      await new Promise<void>(resolve => setTimeout(resolve, retryDelayMs));
      continue;
    }

    if (waitingForReachableNode) {
      startedAt = Date.now();
      waitingForReachableNode = false;
      console.log(`✅ Worker ${workerIndex}: grid node reachable; resetting slot wait timer.`);
    }

    for (const controllerUrl of orderedNodes) {
      const health = await getNodeHealth(controllerUrl);

      if (!health.online) {
        lastError = new Error(`${controllerUrl}: offline`);
        continue;
      }

      const nodeIsAtLimit = health.activeCount >= MAX_WORKERS_PER_NODE;
      const requestedExceedsNodeLimit = requestedWorkers !== undefined && requestedWorkers > MAX_WORKERS_PER_NODE;
      const isReservedLimitReached = effectiveMax < MAX_WORKERS_PER_NODE && health.activeCount >= effectiveMax;

      if (process.env.DEBUG_GRID === 'true') {
        console.log(`[grid-debug] worker=${workerIndex} requested=${requestedWorkers ?? 'n/a'} effectiveMax=${effectiveMax} active=${health.activeCount} maxPerNode=${MAX_WORKERS_PER_NODE} nodeAtLimit=${nodeIsAtLimit} reservedReached=${isReservedLimitReached} exceedNodeLimit=${requestedExceedsNodeLimit}`);
      }

      if (isReservedLimitReached) {
        lastError = new Error(`${controllerUrl}: reserved capacity limit reached (${health.activeCount}/${effectiveMax})`);
        continue;
      }

      // The health response is advisory and may be stale while another worker
      // is stopping. Always attempt the request for normal runs and let the
      // controller make the authoritative capacity decision.
      if (requestedExceedsNodeLimit && health.activeCount > MAX_WORKERS_PER_NODE) {
        lastError = new Error(`${controllerUrl}: at capacity (${health.activeCount}/${effectiveMax})`);
        continue;
      }

      const leasePath = await acquireSessionLease(controllerUrl);
      if (!leasePath) {
        lastError = new Error(`${controllerUrl}: local session limit reached`);
        continue;
      }

      // Always attempt session creation - let the server decide.
      // The health check is best-effort only; actual capacity is enforced by the server
      const sessionTimeoutMs = Number(process.env.GRID_SESSION_TIMEOUT_MS || 60000);
      const browser = requestedBrowser ||
        normalizeBrowserName(getSetting('GRID_BROWSER') || getSetting('BROWSER') || 'chromium') || 'chromium';
      let response: Response;
      let body: string;
      try {
        response = await fetch(`${controllerUrl}/session`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            workerIndex,
            testName,
            headless: process.env.REMOTE_HEADLESS === 'true',
            browser
          }),
          signal: AbortSignal.timeout(sessionTimeoutMs)
        });
        body = await response.text();
      } catch (error) {
        await releaseSessionLease(leasePath);
        throw error;
      }

      if (!response.ok) {
        await releaseSessionLease(leasePath);
        // When server returns error, invalidate cache and allow retry for capacity errors
        if (isCapacityError(response.status, body) || response.status >= 500) {
          nodeHealthCache.delete(controllerUrl);
          if (process.env.DEBUG_GRID === 'true') {
            console.log(`[grid-debug] worker=${workerIndex}: capacity error detected. Server response: ${body.substring(0, 100)}`);
          }
          lastError = new Error(`${controllerUrl}: ${body}`);
          continue;
        }
        // Non-capacity errors: throw immediately
        throw new Error(body);
      }

      const result = JSON.parse(body) as {
        workerIndex: number;
        container: string;
        containerId: string;
        recordingId: string;
        wsEndpoint: string;
        noVncUrl: string;
        browser: 'chromium' | 'firefox' | 'webkit';
      };
      if (requestedBrowser && result.browser && result.browser !== requestedBrowser) {
        throw new Error(
          `Grid returned browser "${result.browser}" but "${requestedBrowser}" was requested. ` +
          'Verify that the deployed grid controller supports the browser field in POST /session.'
        );
      }

      // Optimistically bump cached count
      nodeHealthCache.set(controllerUrl, {
        ...health,
        activeCount: health.activeCount + 1,
        checkedAt: Date.now()
      });

      sessionNodeMap.set(workerIndex, controllerUrl);
      sessionContainerMap.set(workerIndex, result.container);
      sessionLeaseMap.set(workerIndex, leasePath);

      // Fetch real count after session created for accurate display
      const realHealth = await checkNodeHealth(controllerUrl);
      const used = realHealth.activeCount;
      const free = Math.max(0, MAX_WORKERS_PER_NODE - used);
      const bar = used <= MAX_WORKERS_PER_NODE
        ? '█'.repeat(used) + '░'.repeat(MAX_WORKERS_PER_NODE - used)
        : '█'.repeat(MAX_WORKERS_PER_NODE) + '⚠';
      const overMsg = used > MAX_WORKERS_PER_NODE ? ` ⚠ OVER LIMIT by ${used - MAX_WORKERS_PER_NODE}` : '';
      console.log(`🌐 Worker ${workerIndex} → ${controllerUrl}  [${bar}]  ${used} used / ${free} free${overMsg}`);
      return result;
    }

    // All nodes were full or temporarily rejected the request. Retry for all cases:
    // - Over-capacity requests need to wait for slots to free
    // - At-limit requests may need to wait for stale sessions to be reclaimed
    const waited = Math.round((Date.now() - startedAt) / 1000);
    const retryDelayMs = getRetryDelayMs(workerIndex, RETRY_INTERVAL_MS);
    console.log(`⏳ Worker ${workerIndex}: all nodes full, waiting ${retryDelayMs / 1000}s... (${waited}s elapsed)`);
    nodeHealthCache.clear();
    await new Promise<void>(resolve => setTimeout(resolve, retryDelayMs));
  }

  throw new Error(`Worker ${workerIndex}: no grid slot available after ${MAX_WAIT_MS / 1000}s`);
}

export async function deleteRemoteBrowser(
  workerIndex: number,
  testName?: string,
  status?: string,
  controllerUrlOverride?: string,
  containerOverride?: string
) {
  const controllerUrl = controllerUrlOverride ||
    sessionNodeMap.get(workerIndex) ||
    getSetting('GRID_CONTROLLER_URL') ||
    `http://${getSetting('GRID_HOST') || '127.0.0.1'}:${getSetting('GRID_PORT') || '4445'}`;

  sessionNodeMap.delete(workerIndex);
  const container = containerOverride || sessionContainerMap.get(workerIndex);
  sessionContainerMap.delete(workerIndex);
  const leasePath = sessionLeaseMap.get(workerIndex);
  sessionLeaseMap.delete(workerIndex);

  // Decrement cached count so freed slot is visible to other workers immediately
  const cached = nodeHealthCache.get(controllerUrl);
  if (cached) {
    nodeHealthCache.set(controllerUrl, {
      ...cached,
      activeCount: Math.max(0, cached.activeCount - 1),
      checkedAt: Date.now()
    });
  }

  try {
    const params = new URLSearchParams();
    if (testName) params.set('testName', testName);
    if (status) params.set('status', status);
    if (container) params.set('container', container);
    const query = params.toString();
    const response = await fetch(`${controllerUrl}/session/${workerIndex}${query ? `?${query}` : ''}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        testName,
        status,
        container,
      }),
      signal: AbortSignal.timeout(10000)
    });

    if (!response.ok) {
      const text = await response.text();
      // If the session is already gone, treat cleanup as success to avoid hangs.
      if (text.includes('already-stopped') || response.status === 404) {
        return;
      }
      throw new Error(text);
    }
  } finally {
    await releaseSessionLease(leasePath);
  }
}

export async function uploadVideo(workerIndex: number, videoPath: string, testName = 'playwright-test', status = 'unknown') {
  const controllerUrl = sessionNodeMap.get(workerIndex) ||
    getSetting('GRID_CONTROLLER_URL') ||
    `http://${getSetting('GRID_HOST') || '127.0.0.1'}:${getSetting('GRID_PORT') || '4445'}`;

  const video = await fs.readFile(videoPath);
  const response = await fetch(
    `${controllerUrl}/api/videos/${workerIndex}?testName=${encodeURIComponent(testName)}&status=${encodeURIComponent(status)}`,
    {
      method: 'POST',
      headers: { 'content-type': 'video/webm' },
      body: video
    }
  );

  if (!response.ok) {
    throw new Error(`Video upload failed: ${response.status} ${await response.text()}`);
  }

  return await response.json() as { workerIndex: number; videoUrl: string };
}