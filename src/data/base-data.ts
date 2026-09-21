import { TestDataReader } from './test-data-reader';

/**
 * BaseData - Global singleton that replicates the static BaseData.java pattern.
 * 
 * Page objects call BaseData.getNamesModuleValue("LastName") to get
 * the test-data value for the currently active test ID.
 * 
 * The active TestDataReader is set by withTestContext() at the start of each test.
 */
class BaseDataSingleton {
  private _reader: TestDataReader | null = null;

  /**
   * Called by withTestContext to bind the current test's data reader.
   */
  setReader(reader: TestDataReader): void {
    this._reader = reader;
  }

  private get reader(): TestDataReader {
    if (!this._reader) {
      throw new Error('BaseData: No TestDataReader set. Call withTestContext() first.');
    }
    return this._reader;
  }

  getNamesModuleValue(columnName: string): string {
    return this.reader.getValue('Names', this.reader.testId, columnName);
  }

   getTestValue(columnName: string): string {
    return this.reader.getValue(this.reader.moduleName, this.reader.testId, columnName);
  }

   getModuleValue(moduleName: string, columnName: string): string {
     return this.reader.getValue(moduleName, this.reader.testId, columnName);
   }

  getGeoModuleValue(columnName: string): string {
    return this.reader.getValue('Geo', this.reader.testId, columnName);
  }

  getSettingsModuleValue(columnName: string): string {
    return this.reader.getValue('Settings', this.reader.testId, columnName);
  }

  getActivityModuleValue(columnName: string): string {
    return this.reader.getValue('Activity', this.reader.testId, columnName);
  }

  getAdmissionModuleValue(columnName: string): string {
    return this.reader.getValue('Admission', this.reader.testId, columnName);
  }

  getPersonnelModuleValue(columnName: string): string {
    return this.reader.getValue('Personnel', this.reader.testId, columnName);
  }

  getVehicleModuleValue(columnName: string): string {
    return this.reader.getValue('Vehicle', this.reader.testId, columnName);
  }

  getHomeModuleValue(columnName: string): string {
    return this.reader.getValue('Home', this.reader.testId, columnName);
  }

  getInventoryModuleValue(columnName: string): string {
    return this.reader.getValue('Inventory', this.reader.testId, columnName);
  }

  getTrainingModuleValue(columnName: string): string {
    return this.reader.getValue('Training', this.reader.testId, columnName);
  }

  getHelpdeskModuleValue(columnName: string): string {
    return this.reader.getValue('Helpdesk', this.reader.testId, columnName);
  }

  getLoginModuleValue(columnName: string): string {
    return this.reader.getValue('Login', this.reader.testId, columnName);
  }

  getAccountingModuleValue(columnName: string): string {
    return this.reader.getValue('Accounting', this.reader.testId, columnName);
  }

  getCADModuleValue(columnName: string): string {
    return this.reader.getValue('Cad', this.reader.testId, columnName);
  }

  getSchedulingModuleValue(columnName: string): string {
    return this.reader.getValue('Scheduling', this.reader.testId, columnName);
  }
}

export const BaseData = new BaseDataSingleton();
