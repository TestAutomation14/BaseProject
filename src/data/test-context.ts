import { TestDataReader } from './test-data-reader';
import { config } from '../config/environment';
import { BaseData } from './base-data';

/**
 * TestContext - Replicates the ITestContext pattern from TestNG.
 *
 * In the original Java framework:
 *   testContext.setAttribute("testID", "112850");
 *   testContext.setAttribute("moduleName", "Geo");
 *   Playback.testContext = testContext;
 *   BaseData.getGeoModuleValue("StreetName");
 *
 * In Playwright TypeScript:
 *   const ctx = createTestContext("112850", "Geo");
 *   ctx.data.geo("StreetName");
 */
export function createTestContext(testId: string, moduleName: string) {
  const dataReader = new TestDataReader(config.testDataFilePath);
  dataReader.setTestContext(testId, moduleName);

  return {
    testId,
    moduleName,
    data: dataReader,
  };
}

/**
 * Decorator-style helper for use within Playwright test blocks.
 * Sets up the test context on an existing TestDataReader instance.
 *
 * Usage in tests:
 *   test('CreateNewStreet_112850', async ({ testData }) => {
 *     withTestContext(testData, '112850', 'Geo');
 *     const streetName = testData.geo('StreetName');
 *   });
 *
 * Also supports callback pattern:
 *   await withTestContext(testData, '74484', async () => {
 *     // test steps
 *   });
 */
export function withTestContext(
  dataReader: TestDataReader,
  testId: string,
  moduleNameOrCallback: string | (() => Promise<void>)
): void | Promise<void> {
  if (typeof moduleNameOrCallback === 'function') {
    dataReader.setTestId(testId);
    BaseData.setReader(dataReader);
    return moduleNameOrCallback();
  }
  dataReader.setTestContext(testId, moduleNameOrCallback);
  BaseData.setReader(dataReader);
}
