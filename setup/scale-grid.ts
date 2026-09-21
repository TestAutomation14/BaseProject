import { execSync } from 'child_process';

export interface RemoteBrowserSession {
  container: string;
  wsEndpoint: string;
  noVncUrl: string;
}

export async function createRemoteBrowser(workerIndex: number, testTitle: string): Promise<RemoteBrowserSession> {
  const port = 5300 + workerIndex;
  const wsEndpoint = process.env.REMOTE_GRID_URL || `ws://127.0.0.1:${port}/playwright`;
  const containerName = `playwright-worker-${workerIndex}`;
  const noVncUrl = process.env.NOVNC_URL || `http://127.0.0.1:${6080 + workerIndex}`;

  return {
    container: containerName,
    wsEndpoint,
    noVncUrl
  };
}

export async function deleteRemoteBrowser(workerIndex: number, testTitle: string, status?: string): Promise<void> {
  console.log(`Cleaning up remote browser worker ${workerIndex} for test "${testTitle}" (status: ${status || 'unknown'})`);
}

export function scaleGrid(workers: number = 4): void {
  console.log(`Creating ${workers} Playwright browser containers...`);
  try {
    execSync(
      `curl -s -X POST http://127.0.0.1:4445/scale -H "Content-Type: application/json" -d "{\\"workers\\":${workers}}"`,
      { stdio: 'inherit' }
    );
  } catch (error) {
    console.warn('Failed to scale grid:', error);
  }
}

if (require.main === module) {
  const workers = Number(process.argv[2] || 4);
  scaleGrid(workers);
}
