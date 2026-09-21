import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env'), override: true });

export const config = {
  // Application
  product: process.env.PRODUCT || 'Police',
  version: process.env.VERSION || '2024_140',
  baseUrl: process.env.BASE_URL || '',
  newUrl: process.env.NEW_URL || '',

  // Credentials
  username: process.env.USERNAME || '',
  password: process.env.PASSWORD || '',
  database: process.env.DATABASE || '',

  // Smoke Test Credentials
  smokeUsername: process.env.SMOKE_USERNAME || '',
  smokePassword: process.env.SMOKE_PASSWORD || '',
  smokeDatabase: process.env.SMOKE_DATABASE || '',

  // Paths
  testDataFilePath: process.env.TEST_DATA_FILE_PATH || './test-data/',
  reportsPath: process.env.REPORTS_PATH || './playwright-report/',
  downloadPath: process.env.DOWNLOAD_PATH || './downloads/',
  fileUploadPath: process.env.FILE_UPLOAD_PATH || './test-data/uploads/',
} as const;

export type AppConfig = typeof config;
