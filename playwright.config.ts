import { defineConfig, devices } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import os from 'os';
import { randomUUID } from 'crypto';
import dotenv from 'dotenv';
import { Properties } from "./src/config/Properties";

dotenv.config({ path: path.resolve(__dirname, '.env') });

const ENV = process.env.ENV || 'test';
Properties.load(ENV);

const machineName = process.env.MACHINE_NAME || os.hostname();

// ✅ Correct base path
const basePath =
  Properties.get("REPORT_BASE_PATH");
if (!basePath) {
  throw new Error("❌ REPORT_BASE_PATH is not configured");
}

console.log("📁 Base Report Path:", basePath);

const rawDir = path.join(basePath, 'raw');
fs.mkdirSync(rawDir, { recursive: true });

/**
 * Generate a fresh run ID for every Playwright config load.
 * This is required for VS Code plugin runs because the same terminal/session may
 * otherwise reuse a stale PW_RUN_STAMP from a previous invocation.
 */
const generateRunStamp = () => {
  const timestamp = Date.now();
  const uuid = randomUUID().split('-')[0]; // first part of UUID (8 chars)
  const runStamp = `${timestamp}-${process.pid}-${uuid}`;
  process.env.PW_RUN_STAMP = runStamp;
  return runStamp;
};

const getResultsJsonPath = () => {
  const runStamp = generateRunStamp();
  const filePath = path.join(rawDir, `${machineName}-${runStamp}-results.json`);
  console.log(`📄 Results file: ${path.basename(filePath)}`);
  return filePath;
};

const RESULTS_JSON = getResultsJsonPath();

const IS_CI = !!process.env.CI;
const HEADED = process.env.HEADED === 'true' && !IS_CI;
const WORKERS = Number(process.env.PW_WORKERS || (IS_CI ? '2' : '9'));
const projectArgumentIndex = process.argv.findIndex(argument => argument === '--project');
const projectArgument = projectArgumentIndex >= 0
  ? process.argv[projectArgumentIndex + 1]
  : process.argv.find(argument => argument.startsWith('--project='))?.split('=')[1];
const selectedProject = projectArgument || process.env.PW_SELECTED_PROJECT;
if (projectArgument) {
  process.env.PW_SELECTED_PROJECT = projectArgument;
}

// ✅ Trace configuration from properties
const TRACE_ENABLED = Properties.get("TRACE_ENABLED") === "true";
const TRACE_ON_FAILURE_ONLY = Properties.get("TRACE_ON_FAILURE_ONLY") === "true";

let traceConfig: 'on' | 'off' | 'retain-on-failure' | 'retain-on-error' = 'off';
if (TRACE_ENABLED) {
  traceConfig = TRACE_ON_FAILURE_ONLY ? 'retain-on-failure' : 'on';
}

export default defineConfig({
  testDir: './tests',

  reporter: [
    ['list'],
    
// 1️⃣ JSON reporter (data source for ALL custom reports)
    ['json', { outputFile: RESULTS_JSON }],

    // 2️⃣ Custom Suite Runtime Reporter (auto suite reports)
    ['./src/report/runtime/SuiteRuntimeReporter.ts'],
  ],

  timeout: 600000,  // 10 minutes – long E2E flows need enough time
    expect: {
    timeout: 30_000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: WORKERS,
  // workers: process.env.CI ? 1 : 4,
  // reporter: [
  //   ['html', { open: 'never' }],
  //   ['list'],
  // ],
  use: {
    baseURL: process.env.BASE_URL,
     trace: traceConfig,
    screenshot: 'only-on-failure',
    actionTimeout: 60000,
    navigationTimeout: 60000,
  },
  projects: selectedProject
    ? [
        {
          name: 'chrome',
          use: {
            browserName: 'chromium',
            channel: 'chrome',
            viewport: { width: 1920, height: 1080 },
        headless: false,
        launchOptions: {
          slowMo: HEADED ? 150 : 0,
          args: ['--disable-popup-blocking'],
          }
        }
        },
        {
          name: 'firefox',
          use: {
            browserName: 'firefox',
            headless: false
          }
        },
         {
          name: 'webkit',
          use: {
            browserName: 'webkit',
            headless: false
          }
        }
      ]
    : [
        {
          name: 'chrome',
          use: {
             browserName: 'chromium',
            channel: 'chrome',
            viewport: { width: 1920, height: 1080 },
        headless: false,
        launchOptions: {
          slowMo: HEADED ? 150 : 0,
          args: ['--disable-popup-blocking'],
          }
        }
      }
      ],
    
  //   {
  //     name: 'chromium',
  //     use: {
  //       ...devices['Desktop Chrome'],
  //       viewport: { width: 1920, height: 1080 },
  //       headless: false,
  //       launchOptions: {
  //         slowMo: HEADED ? 150 : 0,
  //         args: ['--disable-popup-blocking'],
  //       },
  //     },
  //   },
  //   // {
  //   //   name: 'firefox',
  //   //   use: { ...devices['Desktop Firefox'] },
  //   // },
  //   // {
  //   //   name: 'webkit',
  //   //   use: { ...devices['Desktop Safari'] },
  //   // },
  // ],
});
