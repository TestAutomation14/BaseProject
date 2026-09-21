import { TestDataReader } from '../data/test-data-reader';
import { config } from '../config/environment';

// ── Type ─────────────────────────────────────────────────────────────────────

export type TestDataFixture = {
  testData: TestDataReader;
};

// ── Definitions ──────────────────────────────────────────────────────────────

export const testDataFixtureDefs = {
  testData: async ({}: any, use: (v: TestDataReader) => Promise<void>) => {
    await use(new TestDataReader(config.testDataFilePath));
  },
};
