import { Page, Locator, expect } from '@playwright/test';

// ─── BI Module (Window/Tab Navigation) ──────────────────────────────────────

export class BIModule {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async switchToMasterSearch(): Promise<void> { await this.page.locator("//span[text()='Master Search']").click(); }
  async switchToDashBoardConfig(): Promise<void> { await this.page.locator("//span[text()='DashBoard Config']").click(); }
  async switchToDashBoardEntry(): Promise<void> { await this.page.locator("//a[text()='DashBoard Entry']").click(); }
  async switchToMasterSearchEntry(): Promise<void> { await this.page.locator("//a[text()='Master Search Entry']").click(); }
  async switchToDashBoardEntryForFire(): Promise<void> { await this.page.locator("//a[text()='Shared Codes']").click(); }
  async switchToStatisticalReport(): Promise<void> { await this.page.locator("//span[text()='Statistical Report']").click(); }
  async switchToStatisticalReportEntry(): Promise<void> { await this.page.locator("//a[text()='Statistical Report Entry']").click(); }
  async switchToGISAnalysis(): Promise<void> { await this.page.locator("//a[contains(@href,'GISAnalysisEntryHERE')]").click(); }
  async switchToMyDashboard(): Promise<void> { await this.page.locator("//span[text()='My DashBoard']").click(); }
}

// ─── Master Search Page ─────────────────────────────────────────────────────

export class MasterSearchPage {
  readonly page: Page;
  readonly reportNameEdit: Locator;
  readonly queryBuilderButton: Locator;
  readonly queryBuilderCaseButton: Locator;
  readonly queryBuilderLink: Locator;
  readonly searchButton: Locator;
  readonly resultTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.reportNameEdit = page.locator('#txtRptName');
    this.queryBuilderButton = page.locator("//span[contains(text(),'Query Builder')]");
    this.queryBuilderCaseButton = page.locator("//span[contains(text(),'Case')]");
    this.queryBuilderLink = page.locator("//span[text()='Query Builder']");
    this.searchButton = page.locator('#cmdSearch');
    this.resultTable = page.locator('#grdReportMasterSrch');
  }

  async enterReportName(name: string): Promise<void> { await this.reportNameEdit.clear(); await this.reportNameEdit.fill(name); }
  async mouseHoverOnQueryBuilder(): Promise<void> { await this.queryBuilderButton.hover(); }
  async selectCaseFromQueryBuilder(): Promise<void> { await this.queryBuilderCaseButton.click(); }
  async verifyAtReportName(rowIndex: number, expectedName: string): Promise<void> {
    const cell = this.resultTable.locator(`//tr[contains(@class,'Row')][${rowIndex}]//td[contains(@aria-describedby,'ReportName')]`);
    expect(await cell.textContent()).toContain(expectedName);
  }
  async clickAtRowByReportName(reportName: string): Promise<void> {
    await this.resultTable.locator(`//td[contains(text(),'${reportName}')]`).click();
  }
  async clickSearch(): Promise<void> { await this.searchButton.click(); }
  async clickSearchButton(): Promise<void> { await this.searchButton.click(); }
  async verifyNoRecordFoundAcknowledge(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('1011 - No Record Found'); await dialog.accept(); });
  }
  async verifyNoRecordFoundAcknowlege(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('1011 - No Record Found'); await dialog.accept(); });
  }
  async clickQueryBuilderLink(): Promise<void> { await this.queryBuilderLink.click(); }
}

// ─── Master Search Entry Page ───────────────────────────────────────────────

export class MasterSearchEntryPage {
  readonly page: Page;
  readonly reportNameEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly periodTab: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly deleteButton: Locator;
  readonly printButton: Locator;
  readonly statusBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.reportNameEdit = page.locator('#txtRptName');
    this.descriptionEdit = page.locator('#txtdescription');
    this.periodTab = page.locator("//span[contains(text(),'Period')]");
    this.saveButton = page.locator('#cmdsave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.deleteButton = page.locator('#cmdDelete');
    this.printButton = page.locator('#cmdPrint');
    this.statusBar = page.locator("//td[@class='statusBar']/b");
  }

  async enterReportName(name: string): Promise<void> { await this.reportNameEdit.fill(name); }
  async enterAtDescription(desc: string): Promise<void> { await this.descriptionEdit.fill(desc); }
  async enterDescription(desc: string): Promise<void> { await this.descriptionEdit.fill(desc); }
  async clickOnPeriodTab(): Promise<void> { await this.periodTab.click(); }
  async clickDeleteIcon(): Promise<void> {
    await this.deleteButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }
  async clickPrintIcon(): Promise<void> { await this.printButton.click(); }
  async save(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.saveButton.click();
  }
  async saveAndClose(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.saveNCloseButton.click();
  }
  async verifyNoRecordFoundAcknowledge(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('1011 - No Record Found'); await dialog.accept(); });
  }
  async verifyNoRecordFoundAcknowlege(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('1011 - No Record Found'); await dialog.accept(); });
  }
  async getStatusBarText(): Promise<string> { return (await this.statusBar.textContent()) || ''; }
}

// ─── Master Search Entry Period Tab ─────────────────────────────────────────

export class MasterSearchEntryPeriodTabPage {
  readonly page: Page;
  readonly dateRangeDropdown: Locator;
  readonly dateFromEdit: Locator;
  readonly dateToEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dateRangeDropdown = page.locator('#tabCubeConfig_usrCtrlPeriod_cddDateRange_DropDown');
    this.dateFromEdit = page.locator('#tabCubeConfig_usrCtrlPeriod_dttmFrmRange_KPIDttmCtrl');
    this.dateToEdit = page.locator('#tabCubeConfig_usrCtrlPeriod_dttmToRange_KPIDttmCtrl');
  }

  async selectAtDateRange(dateRange: string): Promise<void> { await this.dateRangeDropdown.selectOption({ label: dateRange }); }
  async enterAtFromDate(fromDate: string): Promise<void> { await this.dateFromEdit.fill(fromDate); }
  async enterAtToDate(toDate: string): Promise<void> { await this.dateToEdit.fill(toDate); }
}

// ─── DashBoard Config Page ──────────────────────────────────────────────────

export class DashBoardConfigPage {
  readonly page: Page;
  readonly searchButton: Locator;
  readonly addNewButton: Locator;
  readonly dashBoardGrid: Locator;
  readonly dashBoardNameEdit: Locator;
  readonly inactiveCheckBox: Locator;
  readonly dashBoardTypeDropdown: Locator;
  readonly dashBoardCategoryDropdown: Locator;
  readonly jurisDropdown: Locator;
  readonly powerBIReportServerLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchButton = page.locator('#cmdSearch');
    this.addNewButton = page.locator("//span[text()='Add New']");
    this.dashBoardGrid = page.locator('#grdDashBoardSrch');
    this.dashBoardNameEdit = page.locator('#lupDashboardname');
    this.inactiveCheckBox = page.locator('#chkInActive');
    this.dashBoardTypeDropdown = page.locator('#cboReportType_DropDown');
    this.dashBoardCategoryDropdown = page.locator('#cboDashboardCategory_DropDown');
    this.jurisDropdown = page.locator('#lstJuris');
    this.powerBIReportServerLink = page.locator('#lnkBIServer');
  }

  async clickSearch(): Promise<void> { await this.searchButton.click(); }
  async clickAddNew(): Promise<void> { await this.addNewButton.click(); }
  async selectRandomValueInGrid(): Promise<void> {
    const rows = this.dashBoardGrid.locator("//tr[contains(@class,'Row')]");
    const count = await rows.count();
    if (count > 0) { await rows.nth(Math.floor(Math.random() * count)).click(); }
  }
  async enterAtDashBoardName(name: string): Promise<void> { await this.dashBoardNameEdit.fill(name); }
  async verifyAtRowAsGreyOut(dashBoardName: string): Promise<void> {
    const row = this.dashBoardGrid.locator(`//td[contains(text(),'${dashBoardName}')]/parent::tr`);
    const color = await row.evaluate(el => getComputedStyle(el).color);
    expect(color).not.toBe('rgba(0, 0, 0, 1)');
  }
  async clickInactiveCheckBox(): Promise<void> { await this.inactiveCheckBox.click(); }
  async selectAtDashBoardNameInGrid(name: string): Promise<void> {
    await this.dashBoardGrid.locator(`//td[contains(text(),'${name}')]`).click();
  }
  async selectAtDashBoardType(dashBoardType: string): Promise<void> { await this.dashBoardTypeDropdown.selectOption({ label: dashBoardType }); }
  async doubleClickAtDashBoardInGrid(name: string): Promise<void> {
    await this.dashBoardGrid.locator(`//td[contains(text(),'${name}')]`).dblclick();
  }
  async clickPowerBIReportServerLink(): Promise<void> { await this.powerBIReportServerLink.click(); }
  async selectAtDashBoardCategory(category: string): Promise<void> { await this.dashBoardCategoryDropdown.selectOption({ label: category }); }
  async verifyColumnSortingAsAscending(columnName: string): Promise<void> {
    const values = await this.dashBoardGrid.locator(`//td[contains(@aria-describedby,'${columnName}')]`).allTextContents();
    const sorted = [...values].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    expect(values).toEqual(sorted);
  }
  async verifyColumnSortingAsDescending(columnName: string): Promise<void> {
    const values = await this.dashBoardGrid.locator(`//td[contains(@aria-describedby,'${columnName}')]`).allTextContents();
    const sorted = [...values].sort((a, b) => b.localeCompare(a, undefined, { sensitivity: 'base' }));
    expect(values).toEqual(sorted);
  }
  async verifyAtJurisInAscendingOrder(): Promise<void> { await this.verifyColumnSortingAsAscending('Juris'); }
  async verifyAtDashboardCodeInAscendingOrder(): Promise<void> { await this.verifyColumnSortingAsAscending('DashboardCode'); }
  async verifyAtDashboardNameInAscendingOrder(): Promise<void> { await this.verifyColumnSortingAsAscending('DashboardName'); }
  async verifyAtDashboardTypeInAscendingOrder(): Promise<void> { await this.verifyColumnSortingAsAscending('DashboardType'); }
  async verifyAtDashBoardCategoryInAscendingOrder(): Promise<void> { await this.verifyColumnSortingAsAscending('DashBoardCategory'); }
  async verifyAtFromInAscendingOrder(): Promise<void> { await this.verifyColumnSortingAsAscending('From'); }
  async verifyAtToInAscendingOrder(): Promise<void> { await this.verifyColumnSortingAsAscending('To'); }
  async verifyAtSortOrderInAscendingOrder(): Promise<void> { await this.verifyColumnSortingAsAscending('SortOrder'); }
  async verifyAtJurisInDescendingOrder(): Promise<void> { await this.verifyColumnSortingAsDescending('Juris'); }
  async verifyAtDashboardCodeInDescendingOrder(): Promise<void> { await this.verifyColumnSortingAsDescending('DashboardCode'); }
  async verifyAtDashboardNameInDescendingOrder(): Promise<void> { await this.verifyColumnSortingAsDescending('DashboardName'); }
  async verifyAtDashboardTypeInDescendingOrder(): Promise<void> { await this.verifyColumnSortingAsDescending('DashboardType'); }
  async verifyAtDashBoardCategoryInDescendingOrder(): Promise<void> { await this.verifyColumnSortingAsDescending('DashBoardCategory'); }
  async verifyAtFromInDescendingOrder(): Promise<void> { await this.verifyColumnSortingAsDescending('From'); }
  async verifyAtToInDescendingOrder(): Promise<void> { await this.verifyColumnSortingAsDescending('To'); }
  async verifyAtSortOrderInDescendingOrder(): Promise<void> { await this.verifyColumnSortingAsDescending('SortOrder'); }
  async verify1011NoRecordFoundAckMsg(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('1011 - No Record Found'); await dialog.accept(); });
  }
  async verifyAtJuris(expectedJuris: string): Promise<void> {
    const selected = await this.jurisDropdown.locator('option:checked').textContent();
    expect(selected).toContain(expectedJuris);
  }
  async selectAtJuris(juris: string): Promise<void> { await this.jurisDropdown.selectOption({ label: juris }); }
  async selectAtDashBoardTypeInGrid(dashBoardType: string): Promise<void> {
    await this.dashBoardGrid.locator(`//td[contains(text(),'${dashBoardType}')]`).click();
  }
  async selectAtDashBoardCategoryInGrid(category: string): Promise<void> {
    await this.dashBoardGrid.locator(`//td[contains(text(),'${category}')]`).click();
  }
  async verifyAtDashBoardCodeNotFound(dashboardCode: string): Promise<void> {
    const values = await this.dashBoardGrid.locator("//td[contains(@aria-describedby,'DashboardCode')]").allTextContents();
    expect(values).not.toContain(dashboardCode);
  }
  async randomDoubleClickOnAllColumn(): Promise<void> {
    const activeRow = this.dashBoardGrid.locator("//tr[contains(@class,'ActiveRow')]");
    const cells = activeRow.locator('td');
    const count = await cells.count();
    for (let i = 0; i < count; i++) {
      const cell = cells.nth(i);
      if (await cell.isVisible()) {
        await cell.dblclick();
      }
    }
  }
  async switchToPowerBIReportServerWindow(): Promise<void> {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.powerBIReportServerLink.click(),
    ]);
    await newPage.waitForLoadState();
  }
}

// ─── DashBoard Entry Page ───────────────────────────────────────────────────

export class DashBoardEntryPage {
  readonly page: Page;
  readonly dashBoardNameEdit: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly inActiveCheckBox: Locator;
  readonly inActiveDateAndTime: Locator;
  readonly mainTab: Locator;
  readonly distributedToTab: Locator;
  readonly displayScreenTab: Locator;
  readonly qaFormTab: Locator;
  readonly versionEdit: Locator;
  readonly bottomStatus: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashBoardNameEdit = page.locator('#txtDashboardName');
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.inActiveCheckBox = page.locator('#chkIsActive');
    this.inActiveDateAndTime = page.locator('#txtInActiveDttm');
    this.mainTab = page.locator("//span[text()='Main']");
    this.distributedToTab = page.locator("//span[text()='Distributed To']");
    this.displayScreenTab = page.locator("//span[text()='Display Screen']");
    this.qaFormTab = page.locator("//span[contains(text(),'Qa Form')]");
    this.versionEdit = page.locator('#txtVersion');
    this.bottomStatus = page.locator("//td[@class='statusBar']//b");
  }

  async verifyQaFormTabIsNotAvailable(): Promise<void> { expect(await this.qaFormTab.count()).toBe(0); }
  async enterDashBoardNameAsAutomation(): Promise<void> { await this.dashBoardNameEdit.fill('AutomationTest'); }
  async clickSave(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.saveButton.click();
  }
  async verifyAdditionSuccessful(): Promise<void> {
    const text = await this.bottomStatus.textContent();
    expect(text).toContain('1002 - Addition Successful');
  }
  async verifyAddtionalSuccessFull(): Promise<void> {
    const text = await this.bottomStatus.textContent();
    expect(text).toContain('1002 - Addition Successful');
  }
  async clickInActiveCheckBox(): Promise<void> { await this.inActiveCheckBox.click(); }
  async verifyInactiveDateAndTime(): Promise<void> {
    const value = await this.inActiveDateAndTime.inputValue();
    const today = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    expect(value).toContain(today);
  }
  async saveAndCloseScreen(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.saveAndCloseButton.click();
  }
  async enterAtDashBoardName(name: string): Promise<void> { await this.dashBoardNameEdit.fill(name); }
  async clickMainTab(): Promise<void> { await this.mainTab.click(); }
  async clickDistributedToTab(): Promise<void> { await this.distributedToTab.click(); }
  async clickIDistributedToTab(): Promise<void> { await this.distributedToTab.click(); }
  async verifyCodedWindowExists(): Promise<void> {
    const pages = this.page.context().pages();
    const found = pages.some(p => p.url().includes('/Setup/frmCoded.aspx'));
    expect(found).toBe(true);
  }
  async clickDisplayScreenTab(): Promise<void> { await this.displayScreenTab.click(); }
  async verifyTabColorAsBlue(tabName: string): Promise<void> {
    const tab = this.page.locator(`//span[contains(text(), '${tabName}')]`);
    const color = await tab.evaluate(el => getComputedStyle(el).color);
    expect(color).toBe('rgba(0, 0, 255, 1)');
  }
  async enterAtVersion(version: string): Promise<void> { await this.versionEdit.fill(version); }
  async copyVersion(): Promise<void> {
    await this.versionEdit.click();
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Control+C');
  }
  async closeScreen(): Promise<void> { await this.page.close(); }
  async saveScreen(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.saveButton.click();
  }
}

// ─── DashBoard Entry Main Tab ───────────────────────────────────────────────

export class DashBoardEntryMainTabPage {
  readonly page: Page;
  readonly dashBoardTypeDropdown: Locator;
  readonly configuredDashBoardNameDropdown: Locator;
  readonly secondsEdit: Locator;
  readonly sortSeqEdit: Locator;
  readonly addButton: Locator;
  readonly selectButton: Locator;
  readonly jobNameDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashBoardTypeDropdown = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_cboReportType_DropDown');
    this.configuredDashBoardNameDropdown = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_cboDashboardName');
    this.secondsEdit = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_txtseconds');
    this.sortSeqEdit = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_txtsortseq');
    this.addButton = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_imgMobileReportPathAdd');
    this.selectButton = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_uploadfileTextBox0');
    this.jobNameDropdown = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_ddjobname');
  }

  async selectAtDashboardType(dashboardType: string): Promise<void> {
    await this.dashBoardTypeDropdown.selectOption({ label: dashboardType });
    await this.dashBoardTypeDropdown.press('Tab');
  }
  async selectAtDasboardType(dashboardType: string): Promise<void> {
    await this.dashBoardTypeDropdown.selectOption({ label: dashboardType });
    await this.dashBoardTypeDropdown.press('Tab');
  }
  async selectAtDashBoardConfiguredDashBoardName(name: string): Promise<void> { await this.configuredDashBoardNameDropdown.selectOption({ label: name }); }
  async enterSecondsAs1(): Promise<void> { await this.secondsEdit.fill('1'); }
  async enterSortSeqAs1(): Promise<void> { await this.sortSeqEdit.fill('1'); }
  async clickAddButton(): Promise<void> { await this.addButton.click(); }
  async clickSelectButton(): Promise<void> { await this.selectButton.click(); }
  async selectAtJobName(jobName: string): Promise<void> { await this.jobNameDropdown.selectOption({ label: jobName }); }
  async pasteAlphabetInSecondsField(): Promise<void> {
    await this.secondsEdit.click();
    await this.page.keyboard.press('Control+V');
  }
  async PastAlphabetInSecondsField(): Promise<void> {
    await this.secondsEdit.click();
    await this.page.keyboard.press('Control+V');
  }
  async pasteAlphabetInSortSeqField(): Promise<void> {
    await this.sortSeqEdit.click();
    await this.page.keyboard.press('Control+V');
  }
  async PastAlphabetInSortSeqField(): Promise<void> {
    await this.sortSeqEdit.click();
    await this.page.keyboard.press('Control+V');
  }
  async verifySecondsFieldIsEmpty(): Promise<void> {
    const value = await this.secondsEdit.inputValue();
    expect(value.trim()).toBe('');
  }
  async verifySortSeqFieldIsEmpty(): Promise<void> {
    const value = await this.sortSeqEdit.inputValue();
    expect(value.trim()).toBe('');
  }
}

// ─── DashBoard Entry Distributed To Tab ─────────────────────────────────────

export class DashBoardEntryDistributedToTabPage {
  readonly page: Page;
  readonly divisionDropdown: Locator;
  readonly distributeReportToEdit: Locator;
  readonly addButton: Locator;
  readonly sectionDropdown: Locator;
  readonly squadDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.divisionDropdown = page.locator('#tabDashboard_tmpl1_usrBIDistributedPF_cddDivision_DropDown');
    this.distributeReportToEdit = page.locator('#tabDashboard_tmpl1_usrBIDistributedPF_lupPFNbr_CodeValue');
    this.addButton = page.locator('#tabDashboard_tmpl1_usrBIDistributedPF_imgAdd');
    this.sectionDropdown = page.locator('#tabDashboard_tmpl1_usrBIDistributedPF_cddSection_DropDown');
    this.squadDropdown = page.locator('#tabDashboard_tmpl1_usrBIDistributedPF_cddSquad_DropDown');
  }

  async selectAtDivision(division: string): Promise<void> { await this.divisionDropdown.selectOption({ label: division }); }
  async enterAtDistributeReportTo(value: string): Promise<void> {
    await this.distributeReportToEdit.fill(value);
    await this.distributeReportToEdit.press('Tab');
  }
  async clickAddButton(): Promise<void> { await this.addButton.click(); }
  async selectAtSection(section: string): Promise<void> { await this.sectionDropdown.selectOption({ label: section }); }
  async selectAtSquad(squad: string): Promise<void> { await this.squadDropdown.selectOption({ label: squad }); }
}

// ─── DashBoard Entry Display Screen Tab ─────────────────────────────────────

export class DashBoardEntryDisplayScreenTabPage {
  readonly page: Page;
  readonly displayScreenIDEdit: Locator;
  readonly addButton: Locator;
  readonly displayScreenGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.displayScreenIDEdit = page.locator('#tabDashboard_tmpl2_ursDisplayScreen_lupDisScreenID_CodeValue');
    this.addButton = page.locator('#tabDashboard_tmpl2_ursDisplayScreen_cmdAdd');
    this.displayScreenGrid = page.locator('#tabDashboard_tmpl2_ursDisplayScreen_grdBIDisplayScreen');
  }

  async enterAtDisplayScreenID(screenId: string): Promise<void> {
    await this.displayScreenIDEdit.fill(screenId);
    await this.displayScreenIDEdit.press('Tab');
  }
  async clickAddButton(): Promise<void> { await this.addButton.click(); }
  async verifyAtScreenIdInGrid(expectedScreenId: string): Promise<void> {
    const cell = this.displayScreenGrid.locator(`//td[contains(text(),'${expectedScreenId}')]`);
    expect(await cell.count()).toBeGreaterThan(0);
  }
}

// ─── Statistical Report Page ────────────────────────────────────────────────

export class StatisticalReportPage {
  readonly page: Page;
  readonly buildNewReportButton: Locator;
  readonly searchButton: Locator;
  readonly addNewButton: Locator;
  readonly resultTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buildNewReportButton = page.locator("//span[contains(text(),'Build New Report')]");
    this.searchButton = page.locator("//span[text()='Search']");
    this.addNewButton = page.locator("//span[contains(text(),'Add New')]");
    this.resultTable = page.locator('#grdStatisticalReport');
  }

  async clickBuildNewReport(): Promise<void> { await this.buildNewReportButton.click(); }
  async clickSearch(): Promise<void> { await this.searchButton.click(); }
  async clickAddNew(): Promise<void> { await this.addNewButton.click(); }
}

// ─── Statistical Report Entry Page ──────────────────────────────────────────

export class StatisticalReportEntryPage {
  readonly page: Page;
  readonly reportNameEdit: Locator;
  readonly dateRangeDropdown: Locator;
  readonly addMoreItemsButton: Locator;
  readonly categoryTitleEdit: Locator;
  readonly nameEdit: Locator;
  readonly criteriaNotesEdit: Locator;
  readonly dataSourceDropdown: Locator;
  readonly addItemsSaveButton: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.reportNameEdit = page.locator('#txtRptName');
    this.dateRangeDropdown = page.locator('#cddDateRange');
    this.addMoreItemsButton = page.locator('#cmdAddItems');
    this.categoryTitleEdit = page.locator('#txtCategory_Input');
    this.nameEdit = page.locator('#txtName');
    this.criteriaNotesEdit = page.locator('#txtCriteria');
    this.dataSourceDropdown = page.locator('#ddlDataSource');
    this.addItemsSaveButton = page.locator('#btnItemSave');
    this.saveButton = page.locator('#cmdSave');
  }

  async enterAtReportName(reportName: string): Promise<void> { await this.reportNameEdit.fill(reportName); }
  async selectAtDateRange(dateRange: string): Promise<void> { await this.dateRangeDropdown.selectOption({ label: dateRange }); }
  async clickAddMoreItems(): Promise<void> { await this.addMoreItemsButton.click(); }
  async enterAtCategoryTitle(title: string): Promise<void> { await this.categoryTitleEdit.fill(title); }
  async enterAtName(name: string): Promise<void> { await this.nameEdit.fill(name); }
  async enterAtCriteriaNotes(notes: string): Promise<void> { await this.criteriaNotesEdit.fill(notes); }
  async selectAtDataSource(dataSource: string): Promise<void> { await this.dataSourceDropdown.selectOption({ label: dataSource }); }
  async clickAddItemSave(): Promise<void> { await this.addItemsSaveButton.click(); }
  async save(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.saveButton.click();
  }
}

// ─── GIS Analysis Page ──────────────────────────────────────────────────────

export class GisAnalysisPage {
  readonly page: Page;
  readonly circleButton: Locator;
  readonly mapPanel: Locator;
  readonly dateFromEdit: Locator;
  readonly accidentCheckbox: Locator;
  readonly applyButton: Locator;
  readonly showAccidentList: Locator;
  readonly caseCallCheckbox: Locator;
  readonly showIncidentList: Locator;
  readonly mgtCFSClassCheckbox: Locator;
  readonly mgtCFSClassDropdown: Locator;
  readonly incApplyButton: Locator;
  readonly printMapButton: Locator;
  readonly bufferProximityCircleButton: Locator;
  readonly radiusEdit: Locator;
  readonly analyzeButton: Locator;
  readonly showAddressList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.circleButton = page.locator('#btnCircle');
    this.mapPanel = page.locator('#MapPanel');
    this.dateFromEdit = page.locator('#dttGenFrom_Date_KPIDttmCtrl');
    this.accidentCheckbox = page.locator('#chkAccident');
    this.applyButton = page.locator("//input[@name='btnAcctPanelApply']");
    this.showAccidentList = page.locator("//div[contains(text(),'Show Accident List')]");
    this.caseCallCheckbox = page.locator('#chkIncident');
    this.showIncidentList = page.locator("//div[contains(text(),'Show Incident List')]");
    this.mgtCFSClassCheckbox = page.locator('#KPIRadioButton4');
    this.mgtCFSClassDropdown = page.locator('#ddlIncMgtCFS');
    this.incApplyButton = page.locator("//input[@name='btnIncPanelApply']");
    this.printMapButton = page.locator('#inputprntMap');
    this.bufferProximityCircleButton = page.locator('#btnBuffer');
    this.radiusEdit = page.locator('#txtRadius');
    this.analyzeButton = page.locator('#btnBufferAnalyze');
    this.showAddressList = page.locator("//div[contains(text(),'Show Address List')]");
  }

  async drawCircle(): Promise<void> {
    await this.circleButton.click();
    const box = await this.mapPanel.boundingBox();
    if (box) {
      await this.page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await this.page.mouse.down();
      await this.page.mouse.move(box.x + box.width / 2 + 700, box.y + box.height / 2);
      await this.page.mouse.up();
    }
  }
  async enterAtFromDate(fromDate: string): Promise<void> {
    await this.dateFromEdit.click();
    await this.dateFromEdit.fill('');
    await this.dateFromEdit.fill(fromDate);
  }
  async clickAccidentCheckbox(): Promise<void> { await this.accidentCheckbox.click(); }
  async clickApplyButton(): Promise<void> { await this.applyButton.click(); }
  async rightClickInsideCircle(): Promise<void> {
    const box = await this.mapPanel.boundingBox();
    if (box) {
      await this.page.mouse.click(box.x + box.width / 2 - 20, box.y + box.height / 2 + 20, { button: 'right' });
    }
  }
  async selectShowAccidentList(): Promise<void> { await this.showAccidentList.click(); }
  async clickCaseOrCallCheckbox(): Promise<void> { await this.caseCallCheckbox.click(); }
  async selectShowIncidentList(): Promise<void> { await this.showIncidentList.click(); }
  async clickMgtCFSClass(): Promise<void> { await this.mgtCFSClassCheckbox.click(); }
  async selectMgtCFSClass(values: string[]): Promise<void> {
    await this.mgtCFSClassDropdown.click();
    for (const value of values) {
      await this.page.locator('#ddlIncMgtCFS_DropDown').locator(`//li[contains(text(),'${value}')]`).click();
    }
  }
  async clickApplyButtonForInc(): Promise<void> { await this.incApplyButton.click(); }
  async clickPrintMap(): Promise<void> { await this.printMapButton.click(); }
  async selectPDF(): Promise<void> {
    await this.page.emulateMedia({ media: 'print' });
    await this.page.pdf({ path: 'map-print.pdf' });
  }
  async close(): Promise<void> { await this.page.close(); }
  async verifyMapWindowIsExist(windowTitle: string, containsURL: string): Promise<void> {
    const pages = this.page.context().pages();
    const found = pages.some(p => p.url().includes(containsURL) || p.url().includes(windowTitle));
    expect(found).toBe(true);
  }
  async clickBufferProximityCircle(): Promise<void> { await this.bufferProximityCircleButton.click(); }
  async enterAtRadius(radius: string): Promise<void> { await this.radiusEdit.fill(radius); }
  async clickInsideMap(): Promise<void> {
    const box = await this.mapPanel.boundingBox();
    if (box) {
      await this.page.mouse.click(box.x + box.width / 2 - 20, box.y + box.height / 2 + 20);
    }
  }
  async clickAnalyzeButton(): Promise<void> { await this.analyzeButton.click(); }
  async clickShowAddressList(): Promise<void> { await this.showAddressList.click(); }
}

// ─── My Dashboard Page ──────────────────────────────────────────────────────

export class MyDashboardPage {
  readonly page: Page;
  readonly realtimeText: Locator;
  readonly powerBIButton: Locator;
  readonly innerPowerBIButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.realtimeText = page.locator("//div[@id='innertab']//a[contains(text(),'Real')]");
    this.powerBIButton = page.locator("//a[contains(text(),'Power BI - Desktop')]");
    this.innerPowerBIButton = page.locator("//a[text()='Power BI Desktop']");
  }

  async verifyRealTimeDashboardText(): Promise<void> {
    const text = await this.realtimeText.textContent();
    expect(text).toBe('Real Time Dashboard');
  }
  async clickPowerBI(): Promise<void> { await this.powerBIButton.click(); }
  async clickInnerPowerBITab(): Promise<void> { await this.innerPowerBIButton.click(); }
  async switchToInnerPowerBiTab(): Promise<void> {
    const frame = this.page.frameLocator("//a[text()='Power BI Desktop']");
    await frame.locator('body').waitFor();
  }
  async verifyAtMyDashboardName(name: string): Promise<void> {
    const element = this.page.locator(`//div[starts-with(@id,'loadURL') and contains(normalize-space(.),'${name}')]`);
    expect(await element.textContent()).toContain(name);
  }
}

// ─── Power BI Page ──────────────────────────────────────────────────────────

export class PowerBIPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async downloadFile(): Promise<void> {
    await this.page.locator("//div[contains(text(),'Reports')]").click();
  }
  async verifyFileNotFound(): Promise<void> {
    const text = await this.page.locator("//div[@class='content-container']").textContent();
    expect(text).toContain('404 - File or directory not found.');
  }
  async verifyDownloadPowerBILinkTextIsDisplayed(): Promise<void> {
    const link = this.page.locator("//a[text()='Download Power BI Desktop Client']");
    expect(await link.isVisible()).toBe(true);
  }
}
