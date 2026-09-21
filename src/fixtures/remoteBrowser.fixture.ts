import { test as base, type Browser, type BrowserContext, type Page } from '@playwright/test';
import { chromium, firefox, webkit } from 'playwright';
import { promises as fs } from 'fs';
import { createRemoteBrowser } from '../setup/grid-client';
import { collectPerformanceMetrics, installPerformanceObservers, type PerformanceMetrics } from '../report/generator/PerformanceMetrics';
import { Properties } from '../config/Properties';

export type RemoteBrowserFixtures = {
  remoteContext: BrowserContext;
  remotePage: Page;
};

const browserTypes = { chromium, firefox, webkit };
type BrowserName = keyof typeof browserTypes;

function normalizeBrowserName(value?: string): BrowserName | undefined {
  const normalized = (value ?? '').trim().toLowerCase();
  if (!normalized) return undefined;

  if (normalized === 'chrome' || normalized === 'google-chrome' || normalized === 'msedge' || normalized === 'edge' || normalized === 'chromium' || normalized === 'chromium-browser') {
    return 'chromium';
  }
  if (normalized === 'firefox') return 'firefox';
  if (normalized === 'webkit') return 'webkit';
  return undefined;
}

function getBrowserName(): BrowserName {
  const configured = normalizeBrowserName(process.env.GRID_BROWSER || process.env.BROWSER || 'chromium');
  if (configured) return configured;
  throw new Error(`Unsupported browser "${process.env.GRID_BROWSER || process.env.BROWSER || 'chromium'}". Use chromium, firefox, or webkit.`);
}

function getProjectBrowserName(projectName: string, configuredBrowser?: string): BrowserName | undefined {
  return normalizeBrowserName(projectName) || normalizeBrowserName(configuredBrowser);
}

export const test = base.extend<RemoteBrowserFixtures>({
  remoteContext: async ({ remotePage }, use) => {
    await use(remotePage.context());
  },
  remotePage: async ({}, use, testInfo) => {
    const workerIndex = testInfo.workerIndex;
    const readSetting = (...values: Array<string | undefined>) => {
      const selected = values.find(value => value !== undefined && value !== null && value !== '');
      return selected;
    };
    const configRemoteEnabled = Properties.get('REMOTE_GRID_ENABLED');
    const configUseRemote = Properties.get('USE_REMOTE_GRID');
    const explicitRemoteSetting = readSetting(
      process.env.REMOTE_GRID_ENABLED,
      process.env.USE_REMOTE_GRID,
      configRemoteEnabled,
      configUseRemote,
    ) ?? 'true';
    const useRemoteGrid = explicitRemoteSetting !== 'false';
    const configuredGridWaitMs = Number(
      process.env.GRID_MAX_WAIT_MS ||
      Properties.get('GRID_MAX_WAIT_MS') ||
      180_000
    );
    const remoteStartupGraceMs = Number(
      process.env.REMOTE_BROWSER_STARTUP_GRACE_MS ||
      (Number.isFinite(configuredGridWaitMs) && configuredGridWaitMs > 0 ? configuredGridWaitMs : 24 * 60 * 60 * 1000)
    );
    if (useRemoteGrid && Number.isFinite(remoteStartupGraceMs) && remoteStartupGraceMs > 0) {
      testInfo.setTimeout(testInfo.timeout + remoteStartupGraceMs);
    }

    let session: { container?: string; recordingId?: string; wsEndpoint?: string; noVncUrl?: string } | undefined;
    let browser: Browser | undefined;
    let context: BrowserContext | undefined;
    let page: Page | undefined;
    let testBodyFailed = false;
    const dashboardTestName = testInfo.title;
    const browserName =
      getProjectBrowserName(testInfo.project.name, testInfo.project.use.browserName) ||
      getBrowserName();
    console.log(`[RemoteBrowser] Playwright project "${testInfo.project.name}" requested browser "${browserName}".`);
    const browserType = browserTypes[browserName];

    const getActualTestStatus = (): 'passed' | 'failed' | 'timedOut' | 'skipped' | 'interrupted' => {
      if (testBodyFailed || testInfo.error || (testInfo.errors && testInfo.errors.length > 0)) {
        return 'failed';
      }
      if (testInfo.status === 'timedOut') return 'timedOut';
      if (testInfo.status === 'failed') return 'failed';
      if (testInfo.status === 'skipped') return 'skipped';
      if (testInfo.status === 'interrupted') return 'interrupted';
      return 'passed';
    };

    try {
      if (useRemoteGrid) {
        session = await createRemoteBrowser(workerIndex, dashboardTestName, browserName);
        console.log(`Worker ${workerIndex} -> ${session.container}`);
        console.log(`Remote endpoint: ${session.wsEndpoint}`);
        console.log(`Live browser view: ${session.noVncUrl}`);
        const videoHost = session.noVncUrl
          ? new URL(session.noVncUrl).hostname
          : session.wsEndpoint
            ? new URL(session.wsEndpoint).hostname
            : undefined;
        if (videoHost) {
          testInfo.annotations.push({
            type: 'video-host',
            description: videoHost
          });
          const videoHostPath = testInfo.outputPath('video-host.txt');
          await fs.writeFile(videoHostPath, videoHost, 'utf8');
          await testInfo.attach('video-report-host', {
            path: videoHostPath,
            contentType: 'text/plain'
          });
        }
        const videoTestNamePath = testInfo.outputPath('video-report-test-name.txt');
        await fs.writeFile(videoTestNamePath, dashboardTestName, 'utf8');
        await testInfo.attach('video-report-test-name', {
          path: videoTestNamePath,
          contentType: 'text/plain'
        });
        const sessionInfoPath = testInfo.outputPath('remote-session-info.json');
        const controllerUrl = session.wsEndpoint
          ? `http://${new URL(session.wsEndpoint).hostname}:4445`
          : undefined;
        await fs.writeFile(sessionInfoPath, JSON.stringify({
          controllerUrl,
          container: session.container,
        }), 'utf8');
        await testInfo.attach('remote-session-info', {
          path: sessionInfoPath,
          contentType: 'application/json'
        });
        browser = await browserType.connect(session.wsEndpoint);
      } else {
        const headed = !process.env.CI && (
          process.env.HEADED === 'true' ||
          testInfo.project.use.headless === false
        );
        console.log(`[RemoteBrowser] Remote execution disabled; launching local ${browserName}${headed ? ' headed' : ''}.`);
        browser = await browserType.launch({ headless: !headed });
      }
    } catch (error) {
      throw new Error(`[RemoteBrowser] Browser startup failed for worker ${workerIndex}: ${error instanceof Error ? error.message : String(error)}`);
    }

    try {
      const contextOptions: Parameters<typeof browser.newContext>[0] = {
        viewport: { width: 1920, height: 1080 }
      };

      context = await browser.newContext(contextOptions);
      page = await context.newPage();
      const workerLabel = `User ${workerIndex + 1}`;
      const PERF_ENABLED = Properties.get('PERFORMANCE_REPORT_ENABLED') === 'true';
      const screenMetrics: PerformanceMetrics[] = [];
      const pendingScreenMetrics: Promise<void>[] = [];
      const registeredPages = new WeakSet<Page>();
      const capturedPages = new WeakSet<Page>();
      const capturedUrls = new Set<string>();
      const mergeSnapshot = (candidate: PerformanceMetrics) => {
        const existingIndex = screenMetrics.findIndex(snapshot => snapshot.url === candidate.url);
        if (existingIndex < 0) {
          screenMetrics.push(candidate);
          capturedUrls.add(candidate.url);
          return screenMetrics.length - 1;
        }

        const existing = screenMetrics[existingIndex];
        existing.navigation = {
          ttfb: existing.navigation.ttfb || candidate.navigation.ttfb,
          domContentLoaded: existing.navigation.domContentLoaded || candidate.navigation.domContentLoaded,
          load: existing.navigation.load || candidate.navigation.load,
          domInteractive: existing.navigation.domInteractive || candidate.navigation.domInteractive,
          transferSize: existing.navigation.transferSize || candidate.navigation.transferSize
        };
        existing.webVitals = {
          fcp: existing.webVitals.fcp ?? candidate.webVitals.fcp,
          lcp: existing.webVitals.lcp ?? candidate.webVitals.lcp,
          cls: Math.max(existing.webVitals.cls, candidate.webVitals.cls),
          inp: existing.webVitals.inp ?? candidate.webVitals.inp
        };
        existing.resourceCount = Math.max(existing.resourceCount, candidate.resourceCount);
        return existingIndex;
      };
      const waitForResourcesToSettle = async (trackedPage: Page) => {
        await trackedPage.evaluate(async () => {
          let previousCount = performance.getEntriesByType('resource').length;
          let stableChecks = 0;
          const deadline = performance.now() + 3000;
          while (stableChecks < 2 && performance.now() < deadline) {
            await new Promise<void>(resolve => setTimeout(resolve, 250));
            const currentCount = performance.getEntriesByType('resource').length;
            if (currentCount === previousCount) {
              stableChecks++;
            } else {
              previousCount = currentCount;
              stableChecks = 0;
            }
          }
        });
      };

      const registerPage = async (trackedPage: Page) => {
        if (!PERF_ENABLED) return;
        if (registeredPages.has(trackedPage)) return;
        registeredPages.add(trackedPage);
        await installPerformanceObservers(trackedPage);

        const captureLoadedPage = async () => {
          const snapshot = await trackedPage.evaluate(() => {
            const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
            const paintEntries = performance.getEntriesByType('paint');
            const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
            const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
            const lcpEntry = lcpEntries[lcpEntries.length - 1];
            const eventEntries = performance.getEntriesByType('event');
            const inpEntry = eventEntries
              .filter(entry => entry.duration >= 16)
              .reduce((longest, entry) => entry.duration > (longest?.duration ?? 0) ? entry : longest, undefined as PerformanceEntry | undefined);
            const w = window as Window & { __pwVitals?: {
              fcp: number|null;
              lcp: number|null;
              cls: number;
              inp: number|null;
              clsSessionValue: number;
              clsSessionStart: number|null;
              clsSessionLast: number|null;
            } };
            let previousSnapshot: PerformanceMetrics | null = null;
            try {
              const storedSnapshot = sessionStorage.getItem('__pwPreviousPerformanceMetrics');
              if (storedSnapshot) {
                try {
                  previousSnapshot = JSON.parse(storedSnapshot) as PerformanceMetrics;
                } finally {
                  sessionStorage.removeItem('__pwPreviousPerformanceMetrics');
                }
              }
            } catch {
              // Storage is unavailable for error pages and other opaque documents.
            }
            return {
              snapshot: {
                url: location.href,
                capturedAt: new Date().toISOString(),
                navigation: {
                  ttfb: nav?.responseStart ?? 0,
                  domContentLoaded: nav?.domContentLoadedEventEnd || 0,
                  load: nav?.loadEventEnd || 0,
                  domInteractive: nav?.domInteractive ?? 0,
                  transferSize: nav?.transferSize ?? 0,
                },
                webVitals: {
                  fcp: w.__pwVitals?.fcp ?? fcpEntry?.startTime ?? null,
                  lcp: w.__pwVitals?.lcp ?? lcpEntry?.startTime ?? null,
                  cls: w.__pwVitals?.cls ?? 0,
                  inp: w.__pwVitals?.inp ?? inpEntry?.duration ?? null,
                },
                resourceCount: performance.getEntriesByType('resource').length,
              },
              previousSnapshot
            };
          });
          const snapshots = snapshot.previousSnapshot
            ? [snapshot.previousSnapshot, snapshot.snapshot]
            : [snapshot.snapshot];
          for (const candidate of snapshots) {
            if (candidate.url === 'about:blank') continue;
            mergeSnapshot(candidate);
          }
          if (snapshot.snapshot.url === 'about:blank') return;
          const capturedUrl = snapshot.snapshot.url;
          const snapshotIndex = screenMetrics.findIndex(candidate => candidate.url === capturedUrl);
          capturedPages.add(trackedPage);

          // LCP can be finalized after the load event when late text, images,
          // or iframe content become the largest painted element.
          await waitForResourcesToSettle(trackedPage).catch(() => {});
          let updatedMetrics: {
            webVitals: PerformanceMetrics['webVitals'];
            resourceCount: number;
          } | null = null;
          if (trackedPage.url() === capturedUrl) {
            try {
              updatedMetrics = await trackedPage.evaluate(() => {
            const w = window as Window & { __pwVitals?: {
              fcp: number|null;
              lcp: number|null;
              cls: number;
              inp: number|null;
              clsSessionValue: number;
              clsSessionStart: number|null;
              clsSessionLast: number|null;
            } };
            const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
            const lcpEntry = lcpEntries[lcpEntries.length - 1];
            const eventEntries = performance.getEntriesByType('event');
            const inpEntry = eventEntries
              .filter(entry => entry.duration >= 16)
              .reduce((longest, entry) => entry.duration > (longest?.duration ?? 0) ? entry : longest, undefined as PerformanceEntry | undefined);
            return {
              webVitals: w.__pwVitals
                ? {
                  ...w.__pwVitals,
                  lcp: w.__pwVitals.lcp ?? lcpEntry?.startTime ?? null,
                  inp: w.__pwVitals.inp ?? inpEntry?.duration ?? null
                }
                : {
                  fcp: null,
                  lcp: lcpEntry?.startTime ?? null,
                  cls: 0,
                  inp: inpEntry?.duration ?? null
                },
              resourceCount: performance.getEntriesByType('resource').length
            };
              });
            } catch (error) {
              const message = error instanceof Error ? error.message : String(error);
              if (!message.includes('Execution context was destroyed')) {
                console.warn(`[Performance] Could not enrich metrics for ${capturedUrl}: ${message}`);
              }
            }
          }
          if (updatedMetrics && snapshotIndex >= 0) {
            const existingVitals = screenMetrics[snapshotIndex].webVitals;
            screenMetrics[snapshotIndex].webVitals = {
              fcp: existingVitals.fcp ?? updatedMetrics.webVitals.fcp,
              lcp: existingVitals.lcp ?? updatedMetrics.webVitals.lcp,
              cls: Math.max(existingVitals.cls, updatedMetrics.webVitals.cls),
              inp: existingVitals.inp ?? updatedMetrics.webVitals.inp
            };
            screenMetrics[snapshotIndex].resourceCount = Math.max(
              screenMetrics[snapshotIndex].resourceCount,
              updatedMetrics.resourceCount
            );
          }
        };

        trackedPage.on('load', () => {
          const capture = captureLoadedPage().catch(error => {
            console.warn(`[Performance] Could not capture loaded page ${trackedPage.url()}:`, error);
          });
          pendingScreenMetrics.push(capture);
        });
        trackedPage.on('domcontentloaded', () => {
          const capture = captureLoadedPage().catch(error => {
            console.warn(`[Performance] Could not capture DOMContentLoaded page ${trackedPage.url()}:`, error);
          });
          pendingScreenMetrics.push(capture);
        });

        // Reset __pwVitals before each new navigation so vitals are scoped per page load
        trackedPage.on('framenavigated', (frame) => {
          if (frame === trackedPage.mainFrame()) {
            trackedPage.evaluate(() => {
              const w = window as Window & { __pwVitals?: {
                fcp: number|null;
                lcp: number|null;
                cls: number;
                inp: number|null;
                clsSessionValue: number;
                clsSessionStart: number|null;
                clsSessionLast: number|null;
              } };
              if (w.__pwVitals) {
                w.__pwVitals.fcp = null;
                w.__pwVitals.lcp = null;
                w.__pwVitals.cls = 0;
                w.__pwVitals.inp = null;
                w.__pwVitals.clsSessionValue = 0;
                w.__pwVitals.clsSessionStart = null;
                w.__pwVitals.clsSessionLast = null;
              }
            }).catch(() => {});
          }
        });
      };

      await registerPage(page);
      context.on('page', trackedPage => {
        if (!PERF_ENABLED) return;
        const capturePopupMetrics = async () => {
          await registerPage(trackedPage);
          await trackedPage.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
        };
        pendingScreenMetrics.push(capturePopupMetrics());
      });

      try {
        await use(page);
      } catch (error) {
        testBodyFailed = true;
        throw error;
      }
      try {
        if (!PERF_ENABLED) return;
        const actualStatus = getActualTestStatus();
        // The test may finish immediately after an action that starts a
        // navigation. Let the resulting document expose its timing and paint
        // entries before collecting the final snapshot.
        await page.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
        await waitForResourcesToSettle(page).catch(() => {});
        // Wait for captures scheduled by load events, including popup pages
        // registered while the test was running.
        let pendingCount = 0;
        while (pendingCount < pendingScreenMetrics.length) {
          const pendingBatch = pendingScreenMetrics.slice(pendingCount);
          pendingCount = pendingScreenMetrics.length;
          await Promise.all(pendingBatch);
        }

        // Capture a final fallback only when the page never emitted a usable
        // load capture, such as an interrupted navigation.
        const metrics = await collectPerformanceMetrics(page);
        const metricsPath = testInfo.outputPath('performance-metrics.json');
        if (metrics.url !== 'about:blank' && !capturedPages.has(page)) {
          screenMetrics.push(metrics);
        }
        const screens = screenMetrics.length > 0
          ? screenMetrics
          : metrics.url === 'about:blank' ? [] : [metrics];
        await fs.writeFile(metricsPath, JSON.stringify({
          testTitle: testInfo.title,
          status: actualStatus,
          testDurationMs: testInfo.duration,
          user: workerLabel,
          runStamp: process.env.PW_RUN_STAMP,
          screens,
        }, null, 2), 'utf8');
        await testInfo.attach('performance-metrics.json', {
          path: metricsPath,
          contentType: 'application/json',
        });
        console.log(`[Performance] ${testInfo.title}: ${screens.length} screens captured, last FCP=${metrics.webVitals.fcp ?? 'N/A'}ms, LCP=${metrics.webVitals.lcp ?? 'N/A'}ms`);
      } catch (error) {
        console.warn(`[Performance] Could not collect metrics for ${testInfo.title}:`, error);
      }
    } finally {
      // Playwright can publish an assertion failure immediately after fixture
      // teardown starts. Yield briefly so testInfo exposes that final error
      // before the remote recording is finalized.
      await new Promise<void>(resolve => setTimeout(resolve, 100));
      await page?.close().catch(() => {});
      await context?.close().catch(() => {});
      await browser?.close().catch(() => {});

      // The session is finalized by SuiteRuntimeReporter.onTestEnd after
      // Playwright has committed the authoritative TestResult status.
    }
  }
});

export { expect } from '@playwright/test';
