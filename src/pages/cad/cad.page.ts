import { Page, Locator, expect } from '@playwright/test';

// ─── CAD Module (Window/Tab Navigation) ─────────────────────────────────────

export class CADModule {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async switchToCCSearchScreenTab(): Promise<void> { await this.page.locator("//span[text()='CC Search']").click(); }
  async switchToLORSearch(): Promise<void> { await this.page.locator("//span[text()='LOR Search']").click(); }
  async switchToLOREntry(): Promise<void> { await this.page.locator("//a[text()='LOR']").click(); }
  async switchToNPASearch(): Promise<void> { await this.page.locator("//span[text()='NPA Search']").click(); }
  async switchToNPAEntry(): Promise<void> { await this.page.locator("//a[text()='NPA Entry']").click(); }
  async switchToTriggerSearch(): Promise<void> { await this.page.locator("//span[text()='Trigger Search']").click(); }
  async switchToTriggerEntry(): Promise<void> { await this.page.locator("//a[text()='Trigger Search']").click(); }
  async switchToZetronToneSearch(): Promise<void> { await this.page.locator("//span[text()='Zetron Tone Search']").click(); }
  async switchToCADToneEntry(): Promise<void> { await this.page.locator("//a[text()='CAD Tone Entry']").click(); }
}

// ─── CC Search Page ─────────────────────────────────────────────────────────

export class CCSearchPage {
  readonly page: Page;
  readonly sysCCRadioButton: Locator;
  readonly systemCommandCodeEdit: Locator;
  readonly searchButton: Locator;
  readonly resultTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sysCCRadioButton = page.locator('#radSysCC');
    this.systemCommandCodeEdit = page.locator('#txtSysCommand');
    this.searchButton = page.locator("//span[contains(text(),'Search')]");
    this.resultTable = page.locator('#grdCommandCode');
  }

  async clickSysCCRadioButton(): Promise<void> { await this.sysCCRadioButton.click(); }
  async enterAtSystemCommand(command: string): Promise<void> {
    await this.systemCommandCodeEdit.fill(command);
    await this.systemCommandCodeEdit.press('Tab');
  }
  async clickSearch(): Promise<void> { await this.searchButton.click(); }
  async clickAtSystemCommandCodeInGrid(code: string): Promise<void> {
    await this.resultTable.locator(`//td[contains(text(),'${code}')]`).click();
  }
  async verifyAtSystemCommandCodeInGrid(expectedCode: string): Promise<void> {
    const cells = this.resultTable.locator("//td[contains(@aria-describedby,'SystemCommandCode')]");
    const values = await cells.allTextContents();
    for (const value of values) {
      expect(value).toContain(expectedCode);
    }
  }
}

// ─── LOR Search Page ────────────────────────────────────────────────────────

export class LORSearchPage {
  readonly page: Page;
  readonly sysCCRadioButton: Locator;
  readonly systemCommandCodeEdit: Locator;
  readonly addNewButton: Locator;
  readonly searchButton: Locator;
  readonly resultTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sysCCRadioButton = page.locator('#radSysCC');
    this.systemCommandCodeEdit = page.locator('#txtSysCommand');
    this.addNewButton = page.locator("//span[contains(text(),'Add New')]");
    this.searchButton = page.locator("//span[contains(text(),'Search')]");
    this.resultTable = page.locator('#grdLOR');
  }

  async clickSysCCRadioButton(): Promise<void> { await this.sysCCRadioButton.click(); }
  async enterAtSystemCommand(command: string): Promise<void> {
    await this.systemCommandCodeEdit.fill(command);
    await this.systemCommandCodeEdit.press('Tab');
  }
  async clickSearch(): Promise<void> { await this.searchButton.click(); }
  async clickAtSystemCommandCodeInGrid(code: string): Promise<void> {
    await this.resultTable.locator(`//td[contains(text(),'${code}')]`).click();
  }
  async verifyAtSystemCommandCodeInGrid(expectedCode: string): Promise<void> {
    const cells = this.resultTable.locator("//td[contains(@aria-describedby,'SystemCommandCode')]");
    const values = await cells.allTextContents();
    for (const value of values) {
      expect(value).toContain(expectedCode);
    }
  }
  async clickAddNew(): Promise<void> { await this.addNewButton.click(); }
}

// ─── LOR Entry Page ─────────────────────────────────────────────────────────

export class LOREntryPage {
  readonly page: Page;
  readonly lorNameEdit: Locator;
  readonly scheduleNameEdit: Locator;
  readonly primeMaxUnitEdit: Locator;
  readonly firstBackupMaxUnitEdit: Locator;
  readonly secondBackupMaxUnitEdit: Locator;
  readonly priorityDropdown: Locator;
  readonly primeManDropdown: Locator;
  readonly firstBackupManDropdown: Locator;
  readonly secondBackupManDropdown: Locator;
  readonly firstBackupRequiredDropdown: Locator;
  readonly secondBackupRequiredDropdown: Locator;
  readonly primeLevelDropdown: Locator;
  readonly firstBackupLevelDropdown: Locator;
  readonly secondBackupLevelDropdown: Locator;
  readonly primeTypeDropdown: Locator;
  readonly firstBackupTypeDropdown: Locator;
  readonly secondBackupTypeDropdown: Locator;
  readonly primeAddButton: Locator;
  readonly firstBackupAddButton: Locator;
  readonly secondBackupAddButton: Locator;
  readonly primeTable: Locator;
  readonly firstBackupTable: Locator;
  readonly secondBackupTable: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly statusBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.lorNameEdit = page.locator('#txtLorName');
    this.scheduleNameEdit = page.locator('#txtScdlName');
    this.primeMaxUnitEdit = page.locator('#txtPrimeMaxunits');
    this.firstBackupMaxUnitEdit = page.locator('#txtfirstBackupMaxunits');
    this.secondBackupMaxUnitEdit = page.locator('#txtSecBackupMaxunits');
    this.priorityDropdown = page.locator('#cddPriority_DropDown');
    this.primeManDropdown = page.locator('#cddMan_DropDown');
    this.firstBackupManDropdown = page.locator('#cddManBK1_DropDown');
    this.secondBackupManDropdown = page.locator('#cddManBK2_DropDown');
    this.firstBackupRequiredDropdown = page.locator('#cddReqBK1_DropDown');
    this.secondBackupRequiredDropdown = page.locator('#cddReqBK2_DropDown');
    this.primeLevelDropdown = page.locator('#cddLevel_DropDown');
    this.firstBackupLevelDropdown = page.locator('#cddLevelBK1_DropDown');
    this.secondBackupLevelDropdown = page.locator('#cddLevelBK2_DropDown');
    this.primeTypeDropdown = page.locator('#cddType_DropDown');
    this.firstBackupTypeDropdown = page.locator('#cddTypeBK1_DropDown');
    this.secondBackupTypeDropdown = page.locator('#cddTypeBK2_DropDown');
    this.primeAddButton = page.locator('#imgAddPrime');
    this.firstBackupAddButton = page.locator('#imgAddBK1');
    this.secondBackupAddButton = page.locator('#imgAddBK2');
    this.primeTable = page.locator('#grdPrime');
    this.firstBackupTable = page.locator('#grdBackup1');
    this.secondBackupTable = page.locator('#grdBackup2');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.statusBar = page.locator("//td[@class='statusBar']/b");
  }

  async enterAtPrimeMaxUnit(maxUnits: string): Promise<void> { await this.primeMaxUnitEdit.fill(maxUnits); }
  async enterAtFirstBackupMaxUnit(maxUnits: string): Promise<void> { await this.firstBackupMaxUnitEdit.fill(maxUnits); }
  async enterAtSecondBackupMaxUnit(maxUnits: string): Promise<void> { await this.secondBackupMaxUnitEdit.fill(maxUnits); }
  async enterAtScheduleName(scheduleName: string): Promise<void> { await this.scheduleNameEdit.fill(scheduleName); }
  async selectAtPriority(priority: string): Promise<void> { await this.priorityDropdown.selectOption({ label: priority }); }
  async selectAtPrimeMan(man: string): Promise<void> { await this.primeManDropdown.selectOption({ label: man }); }
  async selectAtFirstBackupMan(man: string): Promise<void> { await this.firstBackupManDropdown.selectOption({ label: man }); }
  async selectAtSecondBackupMan(man: string): Promise<void> { await this.secondBackupManDropdown.selectOption({ label: man }); }
  async selectAtFirstBackupRequired(required: string): Promise<void> { await this.firstBackupRequiredDropdown.selectOption({ label: required }); }
  async selectAtSecondBackupRequired(required: string): Promise<void> { await this.secondBackupRequiredDropdown.selectOption({ label: required }); }
  async selectAtPrimeLevel(level: string): Promise<void> { await this.primeLevelDropdown.selectOption({ label: level }); }
  async selectAtFirstBackupLevel(level: string): Promise<void> { await this.firstBackupLevelDropdown.selectOption({ label: level }); }
  async selectAtSecondBackupLevel(level: string): Promise<void> { await this.secondBackupLevelDropdown.selectOption({ label: level }); }
  async clickPrimeAddButton(): Promise<void> { await this.primeAddButton.click(); }
  async clickFirstBackupAddButton(): Promise<void> { await this.firstBackupAddButton.click(); }
  async clickSecondBackupAddButton(): Promise<void> { await this.secondBackupAddButton.click(); }
  async selectAtPrimeType(type: string): Promise<void> { await this.primeTypeDropdown.selectOption({ label: type }); }
  async selectAtFirstBackupType(type: string): Promise<void> { await this.firstBackupTypeDropdown.selectOption({ label: type }); }
  async selectAtSecondBackupType(type: string): Promise<void> { await this.secondBackupTypeDropdown.selectOption({ label: type }); }
  async verifyPrimeTypeInGrid(expectedType: string): Promise<void> {
    const cell = this.primeTable.locator("//td[contains(@aria-describedby,'Type')]").first();
    expect(await cell.textContent()).toContain(expectedType);
  }
  async verifyFirstBackupRequiredInGrid(expectedRequired: string): Promise<void> {
    const cell = this.firstBackupTable.locator("//td[contains(@aria-describedby,'Type')]").first();
    expect(await cell.textContent()).toContain(expectedRequired);
  }
  async verifySecondBackupRequiredInGrid(expectedRequired: string): Promise<void> {
    const cell = this.secondBackupTable.locator("//td[contains(@aria-describedby,'Type')]").first();
    expect(await cell.textContent()).toContain(expectedRequired);
  }
  async enterLORName(lorName: string): Promise<void> { await this.lorNameEdit.fill(lorName); }
  async enterScheduleName(scheduleName: string): Promise<void> { await this.scheduleNameEdit.fill(scheduleName); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickSaveAndClose(): Promise<void> { await this.saveNCloseButton.click(); }
  async getStatusBarText(): Promise<string> { return (await this.statusBar.textContent()) || ''; }
}

// ─── NPA Search Page ────────────────────────────────────────────────────────

export class NPASearchPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("//span[text()='Add New']");
    this.searchButton = page.locator("//span[text()='Search']");
  }

  async clickAddNew(): Promise<void> { await this.addNewButton.click(); }
  async clickSearch(): Promise<void> { await this.searchButton.click(); }
}

// ─── NPA Entry Page ─────────────────────────────────────────────────────────

export class NPAEntryPage {
  readonly page: Page;
  readonly npaCardEdit: Locator;
  readonly tableNameEdit: Locator;
  readonly addButton: Locator;
  readonly orderEdit: Locator;
  readonly levelOneTable: Locator;
  readonly patrolAreaLookupButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.npaCardEdit = page.locator('#txtNpaCard');
    this.tableNameEdit = page.locator('#txtTableName');
    this.addButton = page.locator('#tabGcNpa_tmpl0_UsrLevel1_imgAdd');
    this.orderEdit = page.locator('#tabGcNpa_tmpl0_UsrLevel1_txtOrder');
    this.levelOneTable = page.locator('#tabGcNpa_tmpl0_UsrLevel1_grdGcNpa');
    this.patrolAreaLookupButton = page.locator('#tabGcNpa_tmpl0_UsrLevel1_lupPatrolAreaTable_imgBtn');
  }

  async enterAtNPACard(npaCard: string): Promise<void> { await this.npaCardEdit.fill(npaCard); }
  async enterAtTableName(tableName: string): Promise<void> { await this.tableNameEdit.fill(tableName); }
  async clickAddButton(): Promise<void> { await this.addButton.click(); }
  async enterAtOrder(order: string): Promise<void> { await this.orderEdit.fill(order); }
  async enterAreaName(): Promise<void> { await this.patrolAreaLookupButton.click(); }
  async verifyAtOrderInGrid(expectedOrder: string): Promise<void> {
    const cell = this.levelOneTable.locator("//td[contains(@aria-describedby,'Order')]").first();
    expect(await cell.textContent()).toContain(expectedOrder);
  }
}

// ─── Trigger Search Page ────────────────────────────────────────────────────

export class TriggerSearchPage {
  readonly page: Page;
  readonly addNewButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("//span[text()='Add New']");
  }

  async clickAddNew(): Promise<void> { await this.addNewButton.click(); }
}

// ─── Trigger Entry Page ─────────────────────────────────────────────────────

export class TriggerEntryPage {
  readonly page: Page;
  readonly unitSlotNoEdit: Locator;
  readonly triggerNameEdit: Locator;
  readonly triggerDescrEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.unitSlotNoEdit = page.locator('#txtTriggerNo');
    this.triggerNameEdit = page.locator('#txtTriggerName');
    this.triggerDescrEdit = page.locator('#txtTrigDescr');
  }

  async enterAtUnitSlotNo(slotNo: string): Promise<void> { await this.unitSlotNoEdit.fill(slotNo); }
  async enterAtTriggerName(name: string): Promise<void> { await this.triggerNameEdit.fill(name); }
  async enterAtTriggerDescr(descr: string): Promise<void> { await this.triggerDescrEdit.fill(descr); }
}

// ─── Zetron Tone Search Page ────────────────────────────────────────────────

export class ZetronToneSearchPage {
  readonly page: Page;
  readonly addNewButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("//span[text()='Add New']");
  }

  async clickAddNew(): Promise<void> { await this.addNewButton.click(); }
}

// ─── CAD Tone Entry Page ────────────────────────────────────────────────────

export class CADToneEntryPage {
  readonly page: Page;
  readonly fireStationEdit: Locator;
  readonly toneCodeEdit: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fireStationEdit = page.locator('#lupFireStation_CodeValue');
    this.toneCodeEdit = page.locator('#KPItxtToneCode');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
  }

  async enterAtFireStation(fireStation: string): Promise<void> {
    await this.fireStationEdit.click();
    await this.fireStationEdit.fill(fireStation);
    await this.fireStationEdit.press('Tab');
  }
  async enterAtToneCode(toneCode: string): Promise<void> { await this.toneCodeEdit.fill(toneCode); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickSaveAndClose(): Promise<void> { await this.saveNCloseButton.click(); }
}
