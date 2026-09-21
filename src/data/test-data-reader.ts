import * as fs from 'fs';
import * as path from 'path';

/**
 * Test Data Reader - migrated from BaseData.java
 *
 * Reads JSON test data files per module and provides access by testID + columnName.
 * Pattern: BaseData.getGeoModuleValue("columnName") → testData.geo("columnName")
 */
export class TestDataReader {
  private basePath: string;
  private cache: Map<string, Record<string, any>> = new Map();
  private _testId: string = '';
  private _moduleName: string = '';

  constructor(basePath: string) {
    this.basePath = basePath;
  }

  /**
   * Static factory method to create a TestDataReader with default basePath
   */
  static loadData(moduleName: string): TestDataReader {
    const basePath = path.resolve(__dirname, '../../test-data');
    const reader = new TestDataReader(basePath);
    reader._moduleName = moduleName;
    return reader;
  }

  // ─── Test Context (replaces ITestContext attributes) ───────────────────────

  get testId(): string {
    return this._testId;
  }

  get moduleName(): string {
    return this._moduleName;
  }

  /**
   * Set the test context (equivalent to testContext.setAttribute("testID", ...) + setAttribute("moduleName", ...))
   */
  setTestContext(testId: string, moduleName: string): void {
    this._testId = testId;
    this._moduleName = moduleName;
  }

  /**
   * Set only the test ID, preserving the existing module name.
   */
  setTestId(testId: string): void {
    this._testId = testId;
  }

  // ─── Generic Data Access ───────────────────────────────────────────────────

  /**
   * Read all test data for a specific module and test ID
   */
  getModuleData(moduleName: string, testId: string): Record<string, string> {
    const moduleData = this.loadModuleFile(moduleName);
    return moduleData[testId] || {};
  }

  /**
   * Get a specific column value for a module/testId combination
   */
  getValue(moduleName: string, testId: string, columnName: string): string {
    const testData = this.getModuleData(moduleName, testId);
    return testData[columnName] || '';
  }

  /**
   * Get value using the current test context (testId + moduleName already set)
   * Equivalent to: BaseData.getTestContextData("columnName")
   */
  getContextValue(columnName: string): string {
    return this.getValue(this._moduleName, this._testId, columnName);
  }

  /**
   * Get all data for the current test context
   */
  getContextData(): Record<string, string> {
    return this.getModuleData(this._moduleName, this._testId);
  }

  // ─── Module-Specific Getters (replaces BaseData.get*ModuleValue) ───────────

  /** Equivalent to BaseData.getGeoModuleValue(columnName) */
  geo(columnName: string): string {
    return this.getValue('Geo', this._testId, columnName);
  }

  /** Equivalent to BaseData.getNamesModuleValue(columnName) */
  names(columnName: string): string {
    return this.getValue('Names', this._testId, columnName);
  }

  /** Equivalent to BaseData.getInventoryModuleValue(columnName) */
  inventory(columnName: string): string {
    return this.getValue('Inventory', this._testId, columnName);
  }

  /** Equivalent to BaseData.getSchedulingModuleValue(columnName) */
  scheduling(columnName: string): string {
    return this.getValue('Scheduling', this._testId, columnName);
  }

  /** Equivalent to BaseData.getSettingsModuleValue(columnName) */
  settings(columnName: string): string {
    return this.getValue('Settings', this._testId, columnName);
  }

  /** Equivalent to BaseData.getTrainingModuleValue(columnName) */
  training(columnName: string): string {
    return this.getValue('Training', this._testId, columnName);
  }

  /** Equivalent to BaseData.getVehicleModuleValue(columnName) */
  vehicle(columnName: string): string {
    return this.getValue('Vehicle', this._testId, columnName);
  }

  /** Equivalent to BaseData.getHomeModuleValue(columnName) */
  home(columnName: string): string {
    return this.getValue('Home', this._testId, columnName);
  }

  /** Equivalent to BaseData.getLoginModuleValue(columnName) */
  login(columnName: string): string {
    return this.getValue('Login', this._testId, columnName);
  }

  /** Equivalent to BaseData.getAccountingModuleValue(columnName) */
  accounting(columnName: string): string {
    return this.getValue('Accounting', this._testId, columnName);
  }

  /** Equivalent to BaseData.getActivityModuleValue(columnName) */
  activity(columnName: string): string {
    return this.getValue('Activity', this._testId, columnName);
  }

  /** Equivalent to BaseData.getAdmissionModuleValue(columnName) */
  admission(columnName: string): string {
    return this.getValue('Admission', this._testId, columnName);
  }

  /** Equivalent to BaseData.getCADModuleValue(columnName) */
  cad(columnName: string): string {
    return this.getValue('CAD', this._testId, columnName);
  }

  /** Equivalent to BaseData.getPersonnelModuleValue(columnName) */
  personnel(columnName: string): string {
    return this.getValue('Personnel', this._testId, columnName);
  }

  /** Equivalent to BaseData.getHelpdeskModuleValue(columnName) */
  helpdesk(columnName: string): string {
    return this.getValue('Helpdesk', this._testId, columnName);
  }

  /** Equivalent to BaseData.getBIModuleValue(columnName) */
  bi(columnName: string): string {
    return this.getValue('BI', this._testId, columnName);
  }

  /** Equivalent to BaseData.getBaseSmokeModuleValue(columnName) */
  baseSmoke(columnName: string): string {
    return this.getValue('BaseSmokeTest', this._testId, columnName);
  }

  /** Equivalent to BaseData.getCitizenServicesModuleValue(columnName) */
  citizenServices(columnName: string): string {
    return this.getValue('CitizenServices', this._testId, columnName);
  }

  /** Equivalent to BaseData.getDocumentManagementModuleValue(columnName) */
  documentMgmt(columnName: string): string {
    return this.getValue('DocumentMgmt', this._testId, columnName);
  }

  /** Equivalent to BaseData.getDetailWorkModuleValue(columnName) */
  detailWork(columnName: string): string {
    return this.getValue('DetailWork', this._testId, columnName);
  }

  /** Equivalent to BaseData.getFacilityManagementModuleValue(columnName) */
  facilityManagement(columnName: string): string {
    return this.getValue('FacilityManagement', this._testId, columnName);
  }

  /** Equivalent to BaseData.getTowModuleValue(columnName) */
  tow(columnName: string): string {
    return this.getValue('Tow', this._testId, columnName);
  }

  /** Equivalent to BaseData.getQAModuleValue(columnName) */
  qa(columnName: string): string {
    return this.getValue('QA', this._testId, columnName);
  }

  // ─── Cross-Module Data Access ──────────────────────────────────────────────

  /**
   * Get value from a different module than the current context module.
   * Useful when a test needs data from multiple modules.
   */
  fromModule(moduleName: string, columnName: string): string {
    return this.getValue(moduleName, this._testId, columnName);
  }

  /**
   * Get value from a different module with a specific testId (not the current context testId).
   */
  fromModuleWithId(moduleName: string, testId: string, columnName: string): string {
    return this.getValue(moduleName, testId, columnName);
  }

  // ─── JSON Write Operations (replaces BaseData.writeJson) ───────────────────

  /**
   * Write/update a value in a module's JSON data file.
   * Equivalent to BaseData.writeJson(moduleName, testID, columnName, value)
   */
  writeValue(moduleName: string, testId: string, columnName: string, value: string): void {
    const filePath = path.resolve(this.basePath, `${moduleName}.json`);
    let data: Record<string, any> = {};

    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      data = JSON.parse(content);
    }

    if (!data[testId]) {
      data[testId] = {};
    }
    data[testId][columnName] = value;

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');

    // Invalidate cache for this module
    this.cache.delete(moduleName);
  }

  /**
   * Write value using the current test context
   */
  writeContextValue(columnName: string, value: string): void {
    this.writeValue(this._moduleName, this._testId, columnName, value);
  }

  // ─── Data Utilities ────────────────────────────────────────────────────────

  /**
   * Get all test IDs available for a module
   */
  getTestIds(moduleName: string): string[] {
    const moduleData = this.loadModuleFile(moduleName);
    return Object.keys(moduleData);
  }

  /**
   * Check if a test ID exists in a module
   */
  hasTestId(moduleName: string, testId: string): boolean {
    const moduleData = this.loadModuleFile(moduleName);
    return testId in moduleData;
  }

  /**
   * Get all column names for a specific testId in a module
   */
  getColumns(moduleName: string, testId: string): string[] {
    const testData = this.getModuleData(moduleName, testId);
    return Object.keys(testData);
  }

  // ─── Internal ──────────────────────────────────────────────────────────────

  private loadModuleFile(moduleName: string): Record<string, any> {
    if (this.cache.has(moduleName)) {
      return this.cache.get(moduleName)!;
    }

    const filePath = path.resolve(this.basePath, `${moduleName}.json`);
    if (!fs.existsSync(filePath)) {
      console.warn(`Test data file not found: ${filePath}`);
      return {};
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(content);
    this.cache.set(moduleName, data);
    return data;
  }

  /**
   * Clear the cache (useful between test suites)
   */
  clearCache(): void {
    this.cache.clear();
  }

  /**
   * Reload a specific module's data from disk
   */
  reloadModule(moduleName: string): void {
    this.cache.delete(moduleName);
    this.loadModuleFile(moduleName);
  }
}
