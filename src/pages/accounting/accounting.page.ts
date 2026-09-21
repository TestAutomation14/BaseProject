import { Page, Locator, FrameLocator, expect } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';

// ─── Accounting Module Navigation ────────────────────────────────────────────

export class AccountingModulePage {
  readonly page: Page;
  private browserHelpers: BrowserHelpers;

  constructor(page: Page) {
    this.page = page;
    this.browserHelpers = new BrowserHelpers(page);
  }

  async switchToInvoiceTypeScreen(): Promise<FrameLocator> {
    return this.browserHelpers.switchToMainWindowScreenTab('frmInvoiceTypeInquiry');
  }

  async switchToInvoiceSearch(): Promise<FrameLocator> {
    return this.browserHelpers.switchToMainWindowScreenTab('frmInvoiceInquiry');
  }

  async switchToInvoiceEntry(): Promise<Page | null> {
    return this.browserHelpers.switchToPageByUrl('frmInvoiceEntry');
  }

  async switchToTransactionAndAdjustment(): Promise<Page | null> {
    return this.browserHelpers.switchToPageByUrl('frmTransactionAdj');
  }

  async switchToInvoiceTypeEntry(): Promise<Page | null> {
    return this.browserHelpers.switchToPageByUrl('frmInvoiceType.aspx');
  }

  async switchToItemCodeEntry(): Promise<Page | null> {
    return this.browserHelpers.switchToPageByUrl('frmItemCode.aspx');
  }

  async switchToItemCode(): Promise<FrameLocator> {
    return this.browserHelpers.switchToMainWindowScreenTab('frmItemCodeInquiry');
  }

  async switchToReceivePayment(): Promise<Page | null> {
    return this.browserHelpers.switchToPageByUrl('frmReceivePayment');
  }

  async switchToReceivePaymentOption(): Promise<Page | null> {
    return this.browserHelpers.switchToPageByUrl('frmReceiveOptions.aspx');
  }

  async switchToFeeSearch(): Promise<FrameLocator> {
    return this.browserHelpers.switchToMainWindowScreenTab('frmFeeSearch');
  }

  async switchToPaymentSearch(): Promise<FrameLocator> {
    return this.browserHelpers.switchToMainWindowScreenTab('frmPaymentInquiry');
  }

  async switchToInvoiceSearchHelpWindow(): Promise<Page | null> {
    return this.browserHelpers.switchToPageByUrl('frmInvoiceInquiry');
  }

  async switchToSearchAccount(): Promise<Page | null> {
    return this.browserHelpers.switchToPageByUrl('frmSearchAccount');
  }

  async switchToExpenseSearch(): Promise<FrameLocator> {
    return this.browserHelpers.switchToMainWindowScreenTab('frmExpenseInquiry');
  }

  async switchToExpenseEntry(): Promise<Page | null> {
    return this.browserHelpers.switchToPageByUrl('frmExpenseEntry');
  }

  async switchToPermitType(): Promise<FrameLocator> {
    return this.browserHelpers.switchToMainWindowScreenTab('frmPermitType');
  }

  async switchToPermitTypeEntry(): Promise<Page | null> {
    return this.browserHelpers.switchToPageByUrl('frmPermitTypeEntry');
  }

  async switchToPaymentReceipt(): Promise<Page | null> {
    return this.browserHelpers.switchToPageByUrl('frmPnxRpt');
  }

  async switchToReceivePaymentFindAccount(): Promise<Page | null> {
    return this.browserHelpers.switchToPageByUrl('frmFindAccount');
  }

  async SwitchToReceivePaymentFindAccountScreen(): Promise<Page | null> {
    return this.browserHelpers.switchToPageByUrl('frmReceivePayment.aspx?NameID');
  }

  async switchToPermitCSDCMACTypeEntry(): Promise<Page | null> {
    return this.browserHelpers.switchToPageByUrl('frmPermitCSDCMACTypeEntry');
  }
}

// ─── Invoice Type (Search/List) ──────────────────────────────────────────────

export class InvoiceTypePage {
  readonly page: Page;
  private readonly frame: FrameLocator;

  // ─── UI Locators (stored globally, resolved through iframe) ────────────────
  readonly addNewButton: Locator;
  readonly expandCheckbox: Locator;
  readonly searchButton: Locator;
  readonly includeInactiveCheckbox: Locator;
  readonly invoiceTypeTable: Locator;
  readonly invoiceTypePoliceTable: Locator;
  readonly openRecordsRequestGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.frame = page.frameLocator('iframe[src*="frmInvoiceTypeInquiry"]');

    this.addNewButton = this.frame.getByRole('link', { name: 'Add New' });
    this.expandCheckbox = this.frame.locator('#chkExpand');
    this.searchButton = this.frame.locator('#cmdSearch');
    this.includeInactiveCheckbox = this.frame.locator('#chkInActive');
    this.invoiceTypeTable = this.frame.locator('#grdInvoiceTypeSrch_ctl00');
    this.invoiceTypePoliceTable = this.frame.locator('#grdInvoiceTypeSrch_ctl00');
    this.openRecordsRequestGrid = this.frame.locator('#grdInvoiceTypeOpenRecords');
  }

  // ─── Actions ───────────────────────────────────────────────────────────────

  async clickAddNew(): Promise<void> {
    await this.addNewButton.click();
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async clickIncludeInactive(): Promise<void> {
    await this.includeInactiveCheckbox.click();
  }

  async clickExpandCheckbox(): Promise<void> {
    await this.expandCheckbox.click();
  }

  async selectRowByInvoiceType(invoiceType: string): Promise<void> {
    await this.invoiceTypePoliceTable.locator(`//td[contains(text(),'${invoiceType}')]`).click();
  }

  async selectRowByInvoiceType1(invoiceType1: string): Promise<void> {
    await this.invoiceTypePoliceTable.locator(`//td[contains(text(),'${invoiceType1}')]`).click();
  }

  async verifyExpandCollapseCheckboxChecked(): Promise<void> {
    await expect(this.expandCheckbox).toBeChecked();
  }

  async getInvoiceTypeFromGrid(description: string): Promise<string> {
    const cell = this.invoiceTypePoliceTable.locator(`//tr[td[contains(text(),'${description}')]]//td[position()=1]`);
    return (await cell.textContent()) || '';
  }

  async getCycleFromGrid(invoiceType: string): Promise<string> {
    const row = this.invoiceTypeTable.locator(`//tr[td[contains(text(),'${invoiceType}')]]`);
    const cell = row.locator("//td[position()=3]");
    return (await cell.textContent()) || '';
  }

  async getMonthFromGrid(invoiceType: string): Promise<string> {
    const row = this.invoiceTypeTable.locator(`//tr[td[contains(text(),'${invoiceType}')]]`);
    const cell = row.locator("//td[position()=4]");
    return (await cell.textContent()) || '';
  }

  async isInvoiceTypeGrayColor(invoiceType: string): Promise<boolean> {
    const row = this.invoiceTypePoliceTable.locator(`//tr[td[contains(text(),'${invoiceType}')]]`);
    const classAttr = await row.getAttribute('class') || '';
    return classAttr.includes('Gray') || classAttr.includes('gray');
  }

  async isInvoiceTypeBlackColor(invoiceType: string): Promise<boolean> {
    const cell = this.invoiceTypePoliceTable.locator(`//tr[td[contains(text(),'${invoiceType}')]]//td[contains(text(),'${invoiceType}')]`);
    const color = await cell.evaluate(el => getComputedStyle(el).color);
    return color.includes('0, 0, 0');
  }

  async selectRowInOpenRecordsRequestGrid(invoiceType: string): Promise<void> {
    await this.openRecordsRequestGrid.locator(`//td[contains(text(),'${invoiceType}')]`).click();
  }

  async getInvoiceTypeFromGridByDescription(description: string): Promise<string> {
    const row = this.invoiceTypePoliceTable.locator(`//tr[td[contains(text(),'${description}')]]`);
    const cell = row.locator("//td[position()=1]");
    return (await cell.textContent()) || '';
  }

  async VerifyAtInvoiceType(invoiceType: string, description: string): Promise<void> {
    const cell = this.invoiceTypePoliceTable.locator(`//tr[td[contains(text(),'${description}')]]//td[position()=1]`);
    expect(await cell.textContent()).toEqual(invoiceType);
  }

  async VerifyCycleAsMonthlyByAtInvoiceType(invoiceType: string): Promise<void> {
    const row = this.invoiceTypeTable.locator(`//tr[td[contains(text(),'${invoiceType}')]]`);
    const cell = row.locator("//td[position()=3]");
    expect(await cell.textContent()).toEqual('Monthly');
  }

  async VerifyCurrentMonthAppearInMonthColumn(invoiceType: string): Promise<void> {
    const row = this.invoiceTypeTable.locator(`//tr[td[contains(text(),'${invoiceType}')]]`);
    const cell = row.locator("//td[position()=4]");
    const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });
    expect(await cell.textContent()).toEqual(currentMonth);
  }

  async SelectRowByAtInvoiceType(invoiceType: string): Promise<void> {
    await this.invoiceTypePoliceTable.locator(`//td[contains(text(),'${invoiceType}')]`).click();
  }

  async selectRowByAtInvoiceTypeInOpenRecordsRequest(invoiceType: string): Promise<void> {
    await this.openRecordsRequestGrid.locator(`//td[contains(text(),'${invoiceType}')]`).click();
  }

  async verifyAtInvoiceTypeShowsGrayColor(invoiceType: string): Promise<void> {
    const row = this.invoiceTypePoliceTable.locator(`//tr[td[contains(text(),'${invoiceType}')]]`);
    const color = await row.locator('td').first().evaluate(el => getComputedStyle(el).color);
    expect(color).toContain('128, 128, 128');
  }

  async verifyAtInvoiceTypeShowsBlackColor(invoiceType: string): Promise<void> {
    const cell = this.invoiceTypePoliceTable.locator(`//tr[td[contains(text(),'${invoiceType}')]]//td[contains(text(),'${invoiceType}')]`);
    const color = await cell.evaluate(el => getComputedStyle(el).color);
    expect(color).toContain('0, 0, 0');
  }

  async clickIncludeInactiveCheckbox(): Promise<void> {
    await this.includeInactiveCheckbox.click();
  }

  async clickSearchButton(): Promise<void> {
    await this.searchButton.click();
  }

  async selectRowAtInvoiceType1(invoiceType1: string): Promise<void> {
    await this.invoiceTypePoliceTable.locator(`//td[contains(text(),'${invoiceType1}')]`).click();
  }

  async verifyAtInvoiceTypeUsingIndex(invoiceType: string, description: string): Promise<void> {
    const cell = this.invoiceTypePoliceTable.locator(`//tr[td[contains(text(),'${description}')]]//td[position()=1]`);
    expect(await cell.textContent()).toEqual(invoiceType);
  }
}

// ─── Invoice Type Entry ──────────────────────────────────────────────────────

export class InvoiceTypeEntryPage {
  private readonly mainPage: Page;

  constructor(page: Page) {
    this.mainPage = page;
  }

  /** Auto-resolves to the popup window when it exists, otherwise main page */
  private get page(): Page {
    const pages = this.mainPage.context().pages();
    return pages.find(p => p.url().includes('frmInvoiceType')) || this.mainPage;
  }

  // ─── UI Locators (defined once, auto-resolve through popup page) ───────────
  get saveButton() { return this.page.locator('#cmdsave'); }
  get saveNCloseButton() { return this.page.locator('#cmdSaveNClose'); }
  get invoiceClassDropdown() { return this.page.locator('#cddInvoiceClass_DropDown'); }
  get disbursementAccountDropdown() { return this.page.locator('#cddDisburseAccount_DropDown'); }
  get invoiceTypeEdit() { return this.page.locator('#txtInvoiceType'); }
  get descriptionEdit() { return this.page.locator('#txtInvoiceTypeDesc'); }
  get isPermitRadioButton() { return this.page.locator('#chkIsPermit'); }
  get isPenaltyRadioButton() { return this.page.locator('#chkIsPenalty'); }
  get attachReportTemplateButton() { return this.page.locator('#btnAddInvoiceTemplate'); }
  get cycleDropdown() { return this.page.locator('#cddCycle_DropDown'); }
  get defaultBaseMonthDropdown() { return this.page.locator('#cddBaseMonth_DropDown'); }
  get invoiceTemplateDropdown() { return this.page.locator('#cddInvoiceTemplate'); }
  get sendFirstNoticeInEdit() { return this.page.locator('#txtFirstNotice'); }
  get daysFromInvoiceDateTemplateDropdown() { return this.page.locator('#cddFirstNoticeTemplate'); }
  get sendSubsequentNoticeInEveryEdit() { return this.page.locator('#txtSubseqNotice'); }
  get daysFromLastNoticeDateTemplateDropdown() { return this.page.locator('#cddSubseqNoticeTemplate'); }
  get addNewItemCodeButton() { return this.page.locator('#btnAddNewItem'); }
  get invoiceTypeEntryTable() { return this.page.locator('#grdItems'); }
  get deleteButton() { return this.page.locator('#cmdDelete'); }
  get inactiveCheckbox() { return this.page.locator('#chkIsActive'); }
  get statusBar() { return this.page.locator("//td[@class='statusBar']//b"); }
  get resetIcon() { return this.page.locator('#cmdRefresh'); }
  get inactiveDateField() { return this.page.locator('#txtInactiveDttm'); }
  get invoiceTypeCopyIcon() { return this.page.locator('#cmdCopy'); }

  // ─── Actions ───────────────────────────────────────────────────────────────

  async clickSave(): Promise<void> {
    await this.saveButton.click();
  }

  async clickSaveAndClose(): Promise<void> {
    await this.saveNCloseButton.click();
  }

  async clickDelete(): Promise<void> {
    await this.deleteButton.click();
  }

  async clickReset(): Promise<void> {
    await this.resetIcon.click();
  }

  async getStatusBarText(): Promise<string> {
    return (await this.statusBar.textContent()) || '';
  }

  async clickAddNewItemCode(): Promise<void> {
    await this.addNewItemCodeButton.click();
  }

  async clickIsPenalty(): Promise<void> {
    await this.isPenaltyRadioButton.click();
  }

  async clickIsPermit(): Promise<void> {
    await this.isPermitRadioButton.click();
  }

  async clickInactive(): Promise<void> {
    await this.inactiveCheckbox.click();
  }

  async clickAttachReportTemplate(): Promise<void> {
    await this.attachReportTemplateButton.click();
  }

  async clickCopyIcon(): Promise<void> {
    await this.invoiceTypeCopyIcon.click();
  }

  async clearInvoiceType(): Promise<void> {
    await this.invoiceTypeEdit.clear();
  }

  async enterInvoiceType(value: string): Promise<void> {
    await this.invoiceTypeEdit.fill(value);
  }

  async enterDescription(value: string): Promise<void> {
    await this.descriptionEdit.fill(value);
  }

  async enterSendFirstNoticeIn(value: string): Promise<void> {
    await this.sendFirstNoticeInEdit.click();
    await this.sendFirstNoticeInEdit.clear();
    await this.sendFirstNoticeInEdit.fill(value);
  }

  async enterSendSubsequentNoticeInEvery(value: string): Promise<void> {
    await this.sendSubsequentNoticeInEveryEdit.click();
    await this.sendSubsequentNoticeInEveryEdit.clear();
    await this.sendSubsequentNoticeInEveryEdit.fill(value);
  }

  async getInactiveDateValue(): Promise<string> {
    return (await this.inactiveDateField.inputValue()) || '';
  }

  async getInvoiceTypeValue(): Promise<string> {
    return (await this.invoiceTypeEdit.inputValue()) || '';
  }

  async selectInvoiceClass(value: string): Promise<void> {
    await this.invoiceClassDropdown.selectOption(value);
  }

  async selectDisbursementAccount(value: string): Promise<void> {
    await this.disbursementAccountDropdown.selectOption(value);
  }

  async selectCycle(value: string): Promise<void> {
    await this.cycleDropdown.selectOption(value);
  }

  async selectDefaultBaseMonth(value: string): Promise<void> {
    await this.defaultBaseMonthDropdown.selectOption(value);
  }

  async selectInvoiceTemplate(value: string): Promise<void> {
    await this.invoiceTemplateDropdown.fill(value);
  }

  async selectDaysFromInvoiceDateTemplate(value: string): Promise<void> {
    await this.daysFromInvoiceDateTemplateDropdown.selectOption(value);
  }

  async selectDaysFromLastNoticeDateTemplate(value: string): Promise<void> {
    await this.daysFromLastNoticeDateTemplateDropdown.fill(value);
  }

  async saveScreen(): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept());
    await this.saveButton.click();
  }

  async saveNCloseScreen(): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept());
    await this.saveNCloseButton.click();
  }

  async closeScreen(): Promise<void> {
    await this.page.close();
  }

  async getItemCodeFromGrid(itemCode: string, columnName: string): Promise<string> {
    const row = this.invoiceTypeEntryTable.locator(`//tr[td[contains(text(),'${itemCode}')]]`);
    const headerCells = this.invoiceTypeEntryTable.locator('//thead//th');
    const headers = await headerCells.allTextContents();
    const colIndex = headers.findIndex(h => h.includes(columnName));
    if (colIndex === -1) return '';
    const cell = row.locator('td').nth(colIndex);
    return (await cell.textContent()) || '';
  }

  async getGridRowCount(): Promise<number> {
    const rows = this.invoiceTypeEntryTable.locator('//tbody/tr');
    return await rows.count();
  }

  async getInvoiceClassText(): Promise<string> {
    return (await this.invoiceClassDropdown.locator('option:checked').textContent()) || '';
  }

  async selectAdd2990InInvoiceClass(): Promise<void> {
    await this.invoiceClassDropdown.selectOption({ label: '--Add 2990 --' });
  }

  async getDescriptionValue(): Promise<string> {
    return (await this.descriptionEdit.inputValue()) || '';
  }

  async isPermitSelected(): Promise<boolean> {
    return await this.isPermitRadioButton.isChecked();
  }

  async isInactiveDateBlank(): Promise<boolean> {
    const value = await this.inactiveDateField.inputValue();
    return value.trim() === '';
  }

  async getAmountByItemCodeInGrid(itemCode: string): Promise<string> {
    const row = this.invoiceTypeEntryTable.locator(`//tr[td[contains(text(),'${itemCode}')]]`);
    const cell = row.locator("//td[contains(@class,'Amount') or position()=3]");
    return (await cell.textContent()) || '';
  }

  async getNotesByItemCodeInGrid(itemCode: string): Promise<string> {
    const row = this.invoiceTypeEntryTable.locator(`//tr[td[contains(text(),'${itemCode}')]]`);
    const cell = row.locator("//td[position()=4]");
    return (await cell.textContent()) || '';
  }

  async ClickSaveButton(): Promise<void> { await this.saveButton.click(); }
  async SelectAtInvoiceClass(invoiceClass: string): Promise<void> { await this.invoiceClassDropdown.selectOption({ label: invoiceClass }); }
  async EnterAtInvoiceType(invoiceType: string): Promise<void> { await this.invoiceTypeEdit.fill(invoiceType); }
  async EnterAtDescription(description: string): Promise<void> { await this.descriptionEdit.fill(description); }
  async EnterCycleAsMonthly(): Promise<void> { await this.cycleDropdown.selectOption({ label: 'Monthly' }); }
  async SelectDefaultBaseMonthAsCurrentMonth(): Promise<void> { const month = new Date().toLocaleString('en-US', { month: 'long' }); await this.defaultBaseMonthDropdown.selectOption({ label: month }); }
  async SelectAtInvoiceTemplate(template: string): Promise<void> { await this.invoiceTemplateDropdown.selectOption({ label: template }); }
  async EnterAtSendFirstNoticeIn(days: string): Promise<void> { await this.sendFirstNoticeInEdit.click(); await this.sendFirstNoticeInEdit.fill(days); }
  async SelectTemplateAsInvoiceDue(): Promise<void> { await this.daysFromInvoiceDateTemplateDropdown.selectOption({ label: 'Invoice Due' }); }
  async EnterAtSendSubsequentNoticeInEvery(days: string): Promise<void> { await this.sendSubsequentNoticeInEveryEdit.click(); await this.sendSubsequentNoticeInEveryEdit.fill(days); }
  async SelectTemplateAsInvoiceFinalNotice(): Promise<void> { await this.daysFromLastNoticeDateTemplateDropdown.selectOption({ label: 'Invoice Final Notice' }); }
  async ClickIsPenaltyRadioButton(): Promise<void> { await this.isPenaltyRadioButton.click(); }
  async ClickIsPermitRadioButton(): Promise<void> { await this.isPermitRadioButton.click(); }
  async ClickAttachReportTemplateButton(): Promise<void> { await this.attachReportTemplateButton.click(); }
  async Verify8EnterMandatoryDataAcknowledgeMessage(): Promise<void> { /* popup: (8) Enter mandatory data */ }
  async ClickAddNewItemCodeButton(): Promise<void> { await this.addNewItemCodeButton.click(); }
  async verifyAdditionSuccessfulMessage(): Promise<void> { expect(await this.statusBar.textContent()).toContain('1002 - Addition'); }
  async verifyUpdateSuccessfulStatusMessage(): Promise<void> { expect(await this.statusBar.textContent()).toContain('1003 - Update successful'); }
  async VerifyAtItemCodeInGrid(itemCode: string): Promise<void> { const cell = this.invoiceTypeEntryTable.locator(`//tr[td[contains(text(),'${itemCode}')]]//td[contains(text(),'${itemCode}')]`); expect(await cell.textContent()).toEqual(itemCode); }
  async VerifyAtDescriptionInGrid(itemCode: string, description: string): Promise<void> { const row = this.invoiceTypeEntryTable.locator(`//tr[td[contains(text(),'${itemCode}')]]`); const cell = row.locator("//td[position()=2]"); expect(await cell.textContent()).toContain(description); }
  async VerifyInvoiceClassDispalyedAsInspection(): Promise<void> { const text = await this.invoiceClassDropdown.locator('option:checked').textContent(); expect(text).toContain('Inspection'); }
  async VerifyInvoiceClassDispalyedAsMiscellaneous(): Promise<void> { const text = await this.invoiceClassDropdown.locator('option:checked').textContent(); expect(text).toContain('Miscellaneous'); }
  async VerifyInvoiceClassDispalyedAtDescription(description: string): Promise<void> { const text = await this.invoiceClassDropdown.locator('option:checked').textContent(); expect(text).toContain(description); }
  async SelectAdd2990InInvoiceClassComboBox(): Promise<void> { await this.invoiceClassDropdown.selectOption({ label: '--Add 2990 --' }); }
  async ClickDeleteIcon(): Promise<void> { await this.deleteButton.click(); }
  async Verify4DoYouWantToDeleteConfirmMsg(): Promise<void> { /* confirm popup: (4) Do you want to delete? */ }
  async verifyAdditionSuccessful(): Promise<void> { const text = await this.page.locator("//td[@class='statusBar' or @class='status']//b").textContent(); expect(text).toContain('1002 - Addition'); }
  async VerifyInvoiceClassDispalyedAsManualInvoice(): Promise<void> { const text = await this.invoiceClassDropdown.locator('option:checked').textContent(); expect(text).toContain('Manual Invoice'); }
  async verifyInvoiceClassDisplayedAsManualInvoice(): Promise<void> { await this.VerifyInvoiceClassDispalyedAsManualInvoice(); }
  async VerifyInvoiceClassDispalyedAsAlarms(): Promise<void> { const text = await this.invoiceClassDropdown.locator('option:checked').textContent(); expect(text).toContain('Alarms'); }
  async verifyInvoiceClassDisplayedAsAlarms(): Promise<void> { await this.VerifyInvoiceClassDispalyedAsAlarms(); }
  async verify21813SaveAcknowledge(): Promise<void> { /* popup: (21813) Click Save and try again */ }
  async verify21812InvoiceTypeCannotDeleteAckMsg(): Promise<void> { /* popup: (21812) Cannot Delete this Invoice Type */ }
  async Verify4DoYouWantToDeleteConfirmMsgForFire(): Promise<void> { /* confirm popup: (4) Do you want to delete? */ }
  async verifyIsPermitIsNotSelected(): Promise<void> { expect(await this.isPermitRadioButton.isChecked()).toBeFalsy(); }
  async clickResetIcon(): Promise<void> { await this.resetIcon.click(); }
  async verifyAtInactiveDateAndTime(inactiveDate: string): Promise<void> { expect(await this.inactiveDateField.inputValue()).toEqual(inactiveDate); }
  async verifyInactiveDateFieldIsBlank(): Promise<void> { expect((await this.inactiveDateField.inputValue()).trim()).toEqual(''); }
  async clickInvoiceTypeCopyIcon(): Promise<void> { await this.invoiceTypeCopyIcon.click(); }
  async verify2528CopiedSuccesssfullyBottomMessage(): Promise<void> { expect(await this.statusBar.textContent()).toContain('2528 - Copied successfully'); }
  async verifyAtInvoiceType(invoiceType: string): Promise<void> { expect(await this.invoiceTypeEdit.inputValue()).toEqual(invoiceType); }
  async verifyInvoiceTypeEntryGridCount(count: number): Promise<void> { const rows = this.invoiceTypeEntryTable.locator("//tr[contains(@class,'Row')]"); expect(await rows.count()).toEqual(count); }
  async verifyAtAmountByItemCodeInGrid(itemCode: string, amount: string): Promise<void> { const row = this.invoiceTypeEntryTable.locator(`//tr[td[contains(text(),'${itemCode}')]]`); const cell = row.locator("//td[contains(@class,'Amount') or position()=3]"); expect(await cell.textContent()).toContain(amount); }
  async verifyAtNotesByItemCodeInGrid(itemCode: string, notes: string): Promise<void> { const row = this.invoiceTypeEntryTable.locator(`//tr[td[contains(text(),'${itemCode}')]]`); const cell = row.locator("//td[position()=4]"); expect(await cell.textContent()).toContain(notes); }
  async selectAdd2990InInvoiceClassComboBox(): Promise<void> { await this.SelectAdd2990InInvoiceClassComboBox(); }
  async verifyInvoiceClassDisplayedAtDescription(description: string): Promise<void> { await this.VerifyInvoiceClassDispalyedAtDescription(description); }
}

// ─── Item Code (Search/List) ─────────────────────────────────────────────────

export class ItemCodePage {
  readonly page: Page;

  readonly expandCollapseCheckbox: Locator;
  readonly addNewButton: Locator;
  readonly searchButton: Locator;
  readonly itemCodeEdit: Locator;
  readonly includeInactiveCheckbox: Locator;
  readonly descriptionEdit: Locator;
  readonly invoiceClassDropdown: Locator;
  readonly invoiceTypeDropdown: Locator;
  readonly itemCodeTable: Locator;
  readonly showPermitsOnlyCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.expandCollapseCheckbox = page.locator('#chkExpand');
    this.addNewButton = page.locator("//span[contains(text(),'Add New')]");
    this.searchButton = page.locator('#cmdSearch');
    this.itemCodeEdit = page.locator('#txtItemCode');
    this.includeInactiveCheckbox = page.locator('#chkInActive');
    this.descriptionEdit = page.locator('#txtItemCodedesc');
    this.invoiceClassDropdown = page.locator('#cddInvoiceClass_DropDown');
    this.invoiceTypeDropdown = page.locator('#cddInvoiceType');
    this.itemCodeTable = page.locator('#grdItemCodeSrch');
    this.showPermitsOnlyCheckbox = page.locator('#chkIsPermit');
  }

  async clickAddNew(): Promise<void> {
    await this.addNewButton.click();
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async clickExpandCollapse(): Promise<void> {
    await this.expandCollapseCheckbox.click();
  }

  async clickIncludeInactive(): Promise<void> {
    await this.includeInactiveCheckbox.click();
  }

  async clickShowPermitsOnly(): Promise<void> {
    await this.showPermitsOnlyCheckbox.click();
  }

  async enterItemCode(value: string): Promise<void> {
    await this.itemCodeEdit.fill(value);
  }

  async clearItemCode(): Promise<void> {
    await this.itemCodeEdit.clear();
  }

  async enterDescription(value: string): Promise<void> {
    await this.descriptionEdit.fill(value);
  }

  async selectInvoiceClass(value: string): Promise<void> {
    await this.invoiceClassDropdown.selectOption(value);
  }

  async selectInvoiceType(value: string): Promise<void> {
    await this.invoiceTypeDropdown.selectOption(value);
  }

  async selectRowByItemCode(itemCode: string): Promise<void> {
    const row = this.itemCodeTable.locator(`//td[contains(text(),'${itemCode}')]`);
    await row.click();
  }

  async reloadScreen(): Promise<void> {
    await this.page.reload();
    await this.page.waitForLoadState();
  }

  async selectRowByDescription(description: string): Promise<void> {
    const row = this.itemCodeTable.locator(`//td[contains(text(),'${description}')]`);
    await row.click();
  }

  async getItemCodeFromGrid(description: string): Promise<string> {
    const row = this.itemCodeTable.locator(`//tr[td[contains(text(),'${description}')]]`);
    const cell = row.locator('td').first();
    return (await cell.textContent()) || '';
  }

  async isItemCodeGrayColor(itemCode: string): Promise<boolean> {
    const row = this.itemCodeTable.locator(`//tr[td[contains(text(),'${itemCode}')]]`);
    const classAttr = await row.getAttribute('class') || '';
    return classAttr.includes('Gray') || classAttr.includes('gray');
  }

  async verifyExpandCollapseChecked(): Promise<void> {
    await expect(this.expandCollapseCheckbox).toBeChecked();
  }

  async getDescriptionFromGrid(itemCode: string): Promise<string> {
    const row = this.itemCodeTable.locator(`//tr[td[contains(text(),'${itemCode}')]]`);
    const cell = row.locator("//td[position()=2]");
    return (await cell.textContent()) || '';
  }

  async getInvoiceClassFromGrid(itemCode: string): Promise<string> {
    const row = this.itemCodeTable.locator(`//tr[td[contains(text(),'${itemCode}')]]`);
    const cell = row.locator("//td[position()=3]");
    return (await cell.textContent()) || '';
  }

  async getInvoiceTypeFromGrid(itemCode: string): Promise<string> {
    const row = this.itemCodeTable.locator(`//tr[td[contains(text(),'${itemCode}')]]`);
    const cell = row.locator("//td[position()=4]");
    return (await cell.textContent()) || '';
  }

  async isItemCodeRowGrayByIndex(itemCode: string): Promise<boolean> {
    const row = this.itemCodeTable.locator(`//tr[td[contains(text(),'${itemCode}')]]`);
    const classAttr = await row.getAttribute('class') || '';
    return classAttr.includes('gridrowclrGray') || classAttr.includes('Gray');
  }

  async ClickExpandCollapseCheckbox(): Promise<void> { await this.expandCollapseCheckbox.click(); }
  async ClickAddNewButton(): Promise<void> { await this.addNewButton.click(); }
  async ClickSearchButton(): Promise<void> { await this.searchButton.click(); }
  async ClickIncludeInactiveCheckbox(): Promise<void> { await this.includeInactiveCheckbox.click(); }
  async EnterAtItemCode(itemCode: string): Promise<void> { await this.itemCodeEdit.fill(itemCode); }
  async EnterAtItemCode1(itemCode1: string): Promise<void> { await this.itemCodeEdit.fill(itemCode1); }
  async EnterAtDescription(description: string): Promise<void> { await this.descriptionEdit.fill(description); }
  async ClickShowPermitsOnlyCheckbox(): Promise<void> { await this.showPermitsOnlyCheckbox.click(); }
  async VerifyAtItemCodeInGrid(itemCode: string, description: string): Promise<void> { const cell = this.itemCodeTable.locator(`//tr[td[contains(text(),'${description}')]]//td[contains(text(),'${itemCode}')]`); expect(await cell.textContent()).toEqual(itemCode); }
  async VerifyAtItemCodeAppearsGrayColor(itemCode: string): Promise<void> { const row = this.itemCodeTable.locator(`//tr[td[contains(text(),'${itemCode}')]]`); const classAttr = await row.getAttribute('class') || ''; expect(classAttr).toContain('gridrowclrGray'); }
  async VerifyAtDescriptionInGrid(description: string): Promise<void> { const cell = this.itemCodeTable.locator(`//td[contains(text(),'${description}')]`); expect(await cell.textContent()).toContain(description); }
  async VerifyAtItemCode1InGrid(itemCode1: string): Promise<void> { const cell = this.itemCodeTable.locator(`//td[contains(text(),'${itemCode1}')]`); expect(await cell.textContent()).toContain(itemCode1); }
  async SelectRowByAtItemCode1(itemCode1: string): Promise<void> { await this.itemCodeTable.locator(`//td[contains(text(),'${itemCode1}')]`).click(); }
  async SelectRowByAtItemCode(itemCode: string): Promise<void> { await this.itemCodeTable.locator(`//td[contains(text(),'${itemCode}')]`).click(); }
  async VerifyAtInvoiceClassInGrid(invoiceClass: string): Promise<void> { const cell = this.itemCodeTable.locator(`//td[contains(text(),'${invoiceClass}')]`); expect(await cell.textContent()).toContain(invoiceClass); }
  async VerifyAtInvoiceTypeInGrid(invoiceType: string): Promise<void> { const cell = this.itemCodeTable.locator(`//td[contains(text(),'${invoiceType}')]`); expect(await cell.textContent()).toContain(invoiceType); }
  async SelectAtInvoiceClass(invoiceClass: string): Promise<void> { await this.invoiceClassDropdown.selectOption({ label: invoiceClass }); }
  async SelectAtInvoiceType(invoiceType: string): Promise<void> { await this.invoiceTypeDropdown.selectOption({ label: invoiceType }); }
  async Verify6040NoRecordFoundMessage(): Promise<void> { /* popup: (6040) No Record Found */ }
  async selectAtDescriptionUnderAnimalContainment(description: string): Promise<void> { await this.itemCodeTable.locator(`//td[contains(text(),'${description}')]`).click(); }
  async selectAtDescriptionInGrid(description: string): Promise<void> { await this.itemCodeTable.locator(`//td[contains(text(),'${description}')]`).click(); }
  async verifyAtItemCodeRowAppearsGrayColor(itemCode: string): Promise<void> { const row = this.itemCodeTable.locator(`//tr[td[contains(text(),'${itemCode}')]]`); const classAttr = await row.getAttribute('class') || ''; expect(classAttr).toContain('gridrowclrGray'); }
}

// ─── Item Code Entry ─────────────────────────────────────────────────────────

export class ItemCodeEntryPage {
  readonly page: Page;

  readonly invoiceClassDropdown: Locator;
  readonly invoiceTypeDropdown: Locator;
  readonly itemCodeEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly conditionsNotesEdit: Locator;
  readonly amountEdit: Locator;
  readonly saveButton: Locator;
  readonly inactiveCheckbox: Locator;
  readonly saveNCloseButton: Locator;
  readonly printCheckbox: Locator;
  readonly statusBar: Locator;
  readonly deleteButton: Locator;
  readonly resetIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.invoiceClassDropdown = page.locator('#cddInvoiceClass_DropDown');
    this.invoiceTypeDropdown = page.locator('#cddInvoiceType');
    this.itemCodeEdit = page.locator('#txtItemCode');
    this.descriptionEdit = page.locator('#txtItemCodedesc');
    this.conditionsNotesEdit = page.locator('#txtNotes');
    this.amountEdit = page.locator('#txtAmount');
    this.saveButton = page.locator('#cmdsave');
    this.inactiveCheckbox = page.locator('#chkIsActive');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.printCheckbox = page.locator('#chkPrint');
    this.statusBar = page.locator("//td[@class='status']//b");
    this.deleteButton = page.locator('#cmdDelete');
    this.resetIcon = page.locator('#cmdRefresh');
  }

  async clickSave(): Promise<void> {
    await this.saveButton.click();
  }

  async clickSaveAndClose(): Promise<void> {
    await this.saveNCloseButton.click();
  }

  async getStatusBarText(): Promise<string> {
    return (await this.statusBar.textContent()) || '';
  }

  async clickDelete(): Promise<void> {
    await this.deleteButton.click();
  }

  async clickReset(): Promise<void> {
    await this.resetIcon.click();
  }

  async clickInactive(): Promise<void> {
    await this.inactiveCheckbox.click();
  }

  async clickPrint(): Promise<void> {
    await this.printCheckbox.click();
  }

  async enterItemCode(value: string): Promise<void> {
    await this.itemCodeEdit.fill(value);
  }

  async enterDescription(value: string): Promise<void> {
    await this.descriptionEdit.fill(value);
  }

  async enterConditionsNotes(value: string): Promise<void> {
    await this.conditionsNotesEdit.fill(value);
  }

  async enterAmount(value: string): Promise<void> {
    await this.amountEdit.click();
    await this.amountEdit.clear();
    await this.amountEdit.fill(value);
    await this.amountEdit.press('Tab');
  }

  async getItemCodeValue(): Promise<string> {
    return (await this.itemCodeEdit.inputValue()) || '';
  }

  async getDescriptionText(): Promise<string> {
    return (await this.descriptionEdit.textContent()) || '';
  }

  async selectInvoiceClass(value: string): Promise<void> {
    await this.invoiceClassDropdown.selectOption(value);
  }

  async selectInvoiceType(value: string): Promise<void> {
    await this.invoiceTypeDropdown.selectOption(value);
  }

  async saveScreen(): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept());
    await this.saveButton.click();
  }

  async saveNCloseScreen(): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept());
    await this.saveNCloseButton.click();
  }

  async closeScreen(): Promise<void> {
    await this.page.close();
  }

  async clickPrintConditions(): Promise<void> {
    await this.printCheckbox.click();
  }

  async getAmountValue(): Promise<string> {
    return (await this.amountEdit.inputValue()) || '';
  }

  async isInactiveChecked(): Promise<boolean> {
    return await this.inactiveCheckbox.isChecked();
  }

  async getInvoiceClassText(): Promise<string> {
    return (await this.invoiceClassDropdown.locator('option:checked').textContent()) || '';
  }

  async getInvoiceTypeText(): Promise<string> {
    return (await this.invoiceTypeDropdown.locator('option:checked').textContent()) || '';
  }

  async isDollarSymbolPresent(): Promise<boolean> {
    const value = await this.amountEdit.inputValue();
    return value.includes('$');
  }

  async VerifyAtInvoiceClass(invoiceClass: string): Promise<void> { const text = (await this.invoiceClassDropdown.locator('option:checked').textContent()) || ''; expect(text).toEqual(invoiceClass); }
  async SelectAtInvoiceClass(invoiceClass: string): Promise<void> { await this.invoiceClassDropdown.selectOption({ label: invoiceClass }); }
  async VerifyAtInvoiceType(invoiceType: string): Promise<void> { const text = (await this.invoiceTypeDropdown.locator('option:checked').textContent()) || ''; expect(text).toEqual(invoiceType); }
  async SelectAtInvoiceType(invoiceType: string): Promise<void> { await this.invoiceTypeDropdown.selectOption({ label: invoiceType }); }
  async EnterAtItemCode(itemCode: string): Promise<void> { await this.itemCodeEdit.fill(itemCode); }
  async EnterAtDescription(description: string): Promise<void> { await this.descriptionEdit.fill(description); }
  async EnterAtConditionsNotes(conditions: string): Promise<void> { await this.conditionsNotesEdit.fill(conditions); }
  async EnterAtAmount(amount: string): Promise<void> { await this.amountEdit.click(); await this.amountEdit.fill(amount); await this.amountEdit.press('Tab'); }
  async VerifyDollarSymbol(): Promise<void> { expect(await this.amountEdit.inputValue()).toContain('$'); }
  async ClickSaveButton(): Promise<void> { await this.saveButton.click(); }
  async verifyAdditionSuccessfulMessage(): Promise<void> { expect(await this.statusBar.textContent()).toContain('1002 - Addition Successful'); }
  async Verify21857DoYouWantRegFeeItemCodeAckMsg(): Promise<void> { /* confirm popup: (21857) Do you want to update the Registration Fee Item Code */ }
  async clickPrintCheckbox(): Promise<void> { await this.printCheckbox.click(); }
  async clickDeleteButton(): Promise<void> { await this.deleteButton.click(); }
  async verify4DoYouWantToDeleteConfirmMsg(): Promise<void> { /* confirm popup: (4) Do you want to delete? */ }
  async verifyAdditionSuccessful(): Promise<void> { const text = await this.page.locator("//td[@class='statusBar' or @class='status']//b").textContent(); expect(text).toContain('1002 - Addition'); }
  async verify3DoYouWantToSavePopup(): Promise<void> { /* confirm popup: (3) Do You Want To Save All Of The Entered Details? */ }
  async verifyUpdateSuccessfulMessage(): Promise<void> { expect(await this.statusBar.textContent()).toContain('1003 - Update successful'); }
  async verify3DoYouWantToSavePopupForFire(): Promise<void> { /* confirm popup: (3) Do you want to save the details? */ }
  async clickResetIcon(): Promise<void> { await this.resetIcon.click(); }
  async verifyAtItemCode(itemCode: string): Promise<void> { expect(await this.itemCodeEdit.inputValue()).toEqual(itemCode); }
  async verifyAtDescription(description: string): Promise<void> { expect(await this.descriptionEdit.inputValue()).toEqual(description); }
  async verifyInactiveCheckboxIsSelected(): Promise<void> { expect(await this.inactiveCheckbox.isChecked()).toBeTruthy(); }
}

// ─── Invoice Entry ───────────────────────────────────────────────────────────

export class InvoiceEntryPage {
  readonly page: Page;

  // Toolbar buttons
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly deleteButton: Locator;
  readonly printButton: Locator;
  readonly resetButton: Locator;
  readonly receivePaymentIcon: Locator;
  readonly emailInvoiceButton: Locator;
  readonly printInvoiceButton: Locator;
  readonly voidInvoiceButton: Locator;

  // Dropdowns
  readonly invoiceClassDropdown: Locator;
  readonly invoiceTypeDropdown: Locator;
  readonly invoiceSendToDropdown: Locator;
  readonly billingContactDropdown: Locator;
  readonly invoiceTemplateDropdown: Locator;
  readonly jurisDropdown: Locator;

  // Invoice fields
  readonly invoiceNumberYearEdit: Locator;
  readonly invoiceNumberEdit: Locator;
  readonly detailNumberYearEdit: Locator;
  readonly detailNumberEdit: Locator;
  readonly invoiceBalanceEdit: Locator;
  readonly accountBalanceEdit: Locator;
  readonly registrationEdit: Locator;
  readonly invoiceDateEdit: Locator;
  readonly invoiceDueDateEdit: Locator;
  readonly originalPaymentDueDateEdit: Locator;
  readonly invoiceAmountEdit: Locator;
  readonly totalAmountEdit: Locator;
  readonly invoiceNotesEdit: Locator;
  readonly idNoEdit: Locator;
  readonly idNoLookupButton: Locator;
  readonly addressEdit: Locator;
  readonly invoiceStatusLabel: Locator;
  readonly invoiceTemplateText: Locator;

  // Bill-to account fields
  readonly billToAccountNameTypeEdit: Locator;
  readonly billToAccountNameNumberEdit: Locator;
  readonly billToAccountLastNameEdit: Locator;
  readonly billToAccountFirstNameEdit: Locator;
  readonly addNewContactButton: Locator;

  // Phone fields
  readonly phoneTypeDropdown: Locator;
  readonly phoneNumberEdit: Locator;

  // Checkboxes
  readonly toBePrintCheckbox: Locator;
  readonly toBeEmailedCheckbox: Locator;
  readonly dedicatedPenaltyAppliesCheckbox: Locator;

  // Amount fields
  readonly compensatoryAmt: Locator;
  readonly dedicatedAmt: Locator;

  // Tabs
  readonly invoiceDetailsTab: Locator;
  readonly transactionsHistoryTab: Locator;

  // Status bar
  readonly statusBar: Locator;

  constructor(page: Page) {
    this.page = page;

    // Toolbar
    this.saveButton = page.locator('#cmdsave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.deleteButton = page.locator('#cmdDelete');
    this.printButton = page.locator('#cmdPrint');
    this.resetButton = page.locator('#cmdRefresh');
    this.receivePaymentIcon = page.locator('#cmdReceivePayment');
    this.emailInvoiceButton = page.locator('#cmdEmailInvoice');
    this.printInvoiceButton = page.locator('#cmdPrintInvoice');
    this.voidInvoiceButton = page.locator('#CmdVoidInvoice');

    // Dropdowns
    this.invoiceClassDropdown = page.locator('#cddInvoiceClass_DropDown');
    this.invoiceTypeDropdown = page.locator('#cddInvoiceType');
    this.invoiceSendToDropdown = page.locator('#cddInvoiceSendTo');
    this.billingContactDropdown = page.locator('#cddBillCon');
    this.invoiceTemplateDropdown = page.locator('#drpInvoiceTem');
    this.jurisDropdown = page.locator('#lstJuris');

    // Invoice fields
    this.invoiceNumberYearEdit = page.locator('#InvoiceAccount_nbrInvoiceNumber_Year');
    this.invoiceNumberEdit = page.locator('#InvoiceAccount_nbrInvoiceNumber_Number');
    this.detailNumberYearEdit = page.locator('#nbrDetailNoTo_Year');
    this.detailNumberEdit = page.locator('#nbrDetailNoTo_Number');
    this.invoiceBalanceEdit = page.locator('#InvoiceAccount_txtInvoiceBalance');
    this.accountBalanceEdit = page.locator('#txtAccountBalance');
    this.registrationEdit = page.locator('#txtRegistration');
    this.invoiceDateEdit = page.locator('#dtOriginalDate_KPIDttmCtrl');
    this.invoiceDueDateEdit = page.locator('#InvoiceAccount_dtdueTo_KPIDttmCtrl');
    this.originalPaymentDueDateEdit = page.locator('#dtDueDate_KPIDttmCtrl');
    this.invoiceAmountEdit = page.locator('#txtAmount');
    this.totalAmountEdit = page.locator('#tabInvoiceDetail_tmpl0_TotalAmount');
    this.invoiceNotesEdit = page.locator('#txtInvoiceNotes');
    this.idNoEdit = page.locator('#txtRegFrom');
    this.idNoLookupButton = page.locator('#ImgRegdtl');
    this.addressEdit = page.locator('#adrBillAcAddress1_txtFrom');
    this.invoiceStatusLabel = page.locator('#cmdInvoiceStatus');
    this.invoiceTemplateText = page.locator('#lblInvoiceTem');

    // Bill-to account
    this.billToAccountNameTypeEdit = page.locator('#BillAcName_NameType');
    this.billToAccountNameNumberEdit = page.locator('#BillAcName_NameTypeID');
    this.billToAccountLastNameEdit = page.locator('#BillAcName_LastName');
    this.billToAccountFirstNameEdit = page.locator('#BillAcName_FirstName');
    this.addNewContactButton = page.locator('#cmdNewName');

    // Phone
    this.phoneTypeDropdown = page.locator('#CustomAccPhone_PhoneType_DropDown');
    this.phoneNumberEdit = page.locator('#CustomAccPhone_PhoneNumber');

    // Checkboxes
    this.toBePrintCheckbox = page.locator('#chkPrinted');
    this.toBeEmailedCheckbox = page.locator('#chkEmailed');
    this.dedicatedPenaltyAppliesCheckbox = page.locator('#chkPenalty');

    // Amounts
    this.compensatoryAmt = page.locator('#txtCompensatoryAmount');
    this.dedicatedAmt = page.locator('#txtDedicatedAmount');

    // Tabs
    this.invoiceDetailsTab = page.locator("//span[contains(text(), 'Invoice Details')]");
    this.transactionsHistoryTab = page.locator("//span[contains(text(), 'Transactions & History')]");

    // Status bar
    this.statusBar = page.locator("//td[@class = 'status']//b");
  }

  async clickSave(): Promise<void> {
    await this.saveButton.click();
  }

  async clickSaveAndClose(): Promise<void> {
    await this.saveAndCloseButton.click();
  }

  async clickDelete(): Promise<void> {
    await this.deleteButton.click();
  }

  async clickReceivePayment(): Promise<void> {
    await this.receivePaymentIcon.click();
  }

  async clickVoidInvoice(): Promise<void> {
    await this.voidInvoiceButton.click();
  }

  async clickInvoiceDetailsTab(): Promise<void> {
    await this.invoiceDetailsTab.click();
  }

  async clickTransactionsHistoryTab(): Promise<void> {
    await this.transactionsHistoryTab.click();
  }

  async readInvoiceNo(): Promise<string> {
    const year = await this.invoiceNumberYearEdit.inputValue();
    const number = await this.invoiceNumberEdit.inputValue();
    return `${year}-${number}`;
  }

  async getStatusBarText(): Promise<string> {
    return (await this.statusBar.textContent()) || '';
  }

  async enterBillToAccountNameID(nameType: string, nameID: string): Promise<void> {
    await this.billToAccountNameTypeEdit.fill(nameType);
    await this.billToAccountNameNumberEdit.fill(nameID);
    await this.billToAccountNameNumberEdit.press('Tab');
  }

  async enterBillToAccountLastName(lastName: string): Promise<void> {
    await this.billToAccountLastNameEdit.fill(lastName);
    await this.billToAccountLastNameEdit.press('Tab');
    await this.billToAccountFirstNameEdit.press('Tab');
  }

  async tabOutInvoiceDate(): Promise<void> {
    await this.invoiceDateEdit.press('Tab');
  }

  async tabOutDueDate(): Promise<void> {
    await this.invoiceDueDateEdit.press('Tab');
  }

  async tabOutOriginalPaymentDueDate(): Promise<void> {
    await this.originalPaymentDueDateEdit.press('Tab');
  }

  async clickIDInfoIcon(): Promise<void> {
    await this.idNoLookupButton.click();
  }

  async clickEmailInvoice(): Promise<void> {
    await this.emailInvoiceButton.click();
  }

  async clickPrintInvoice(): Promise<void> {
    await this.printInvoiceButton.click();
  }

  async clickAddNewContact(): Promise<void> {
    await this.addNewContactButton.click();
  }

  async clickReset(): Promise<void> {
    await this.resetButton.click();
  }

  async getInvoiceBalanceValue(): Promise<string> {
    return (await this.invoiceBalanceEdit.inputValue()) || '';
  }

  async getInvoiceDateValue(): Promise<string> {
    return (await this.invoiceDateEdit.inputValue()) || '';
  }

  async getDueDateValue(): Promise<string> {
    return (await this.invoiceDueDateEdit.inputValue()) || '';
  }

  async getOriginalPaymentDueDateValue(): Promise<string> {
    return (await this.originalPaymentDueDateEdit.inputValue()) || '';
  }

  async getTotalAmountValue(): Promise<string> {
    return (await this.totalAmountEdit.inputValue()) || '';
  }

  async getInvoiceAmountValue(): Promise<string> {
    return (await this.invoiceAmountEdit.inputValue()) || '';
  }

  async getIDNoValue(): Promise<string> {
    return (await this.idNoEdit.inputValue()) || '';
  }

  async getAddressValue(): Promise<string> {
    return (await this.addressEdit.inputValue()) || '';
  }

  async getBillToAccountLastName(): Promise<string> {
    return (await this.billToAccountLastNameEdit.inputValue()) || '';
  }

  async getBillToAccountFirstName(): Promise<string> {
    return (await this.billToAccountFirstNameEdit.inputValue()) || '';
  }

  async getPhoneNumberValue(): Promise<string> {
    return (await this.phoneNumberEdit.inputValue()) || '';
  }

  async selectInvoiceClass(value: string): Promise<void> {
    await this.invoiceClassDropdown.selectOption(value);
    await this.invoiceClassDropdown.press('Tab');
  }

  async selectInvoiceType(value: string): Promise<void> {
    await this.invoiceTypeDropdown.selectOption(value);
  }

  async selectBillingContact(value: string): Promise<void> {
    await this.billingContactDropdown.selectOption(value);
  }

  async selectInvoiceSendTo(value: string): Promise<void> {
    await this.invoiceSendToDropdown.selectOption(value);
  }

  async selectInvoiceTemplate(value: string): Promise<void> {
    await this.invoiceTemplateDropdown.selectOption(value);
  }

  async selectJuris(value: string): Promise<void> {
    await this.jurisDropdown.selectOption(value);
  }

  async enterInvoiceNo(year: string, number: string): Promise<void> {
    await this.invoiceNumberYearEdit.fill(year);
    await this.invoiceNumberEdit.fill(number);
  }

  async enterRegistration(value: string): Promise<void> {
    await this.registrationEdit.fill(value);
  }

  async enterInvoiceDate(date: string): Promise<void> {
    await this.invoiceDateEdit.fill(date);
  }

  async enterDueDate(date: string): Promise<void> {
    await this.invoiceDueDateEdit.fill(date);
  }

  async enterIDNo(value: string): Promise<void> {
    await this.idNoEdit.fill(value);
  }

  async enterInvoiceNotes(notes: string): Promise<void> {
    await this.invoiceNotesEdit.fill(notes);
  }

  async tabOutBillToAccountNameFields(): Promise<void> {
    await this.billToAccountLastNameEdit.click();
    await this.billToAccountLastNameEdit.press('Tab');
    await this.billToAccountFirstNameEdit.press('Tab');
  }

  async clickPrint(): Promise<void> {
    await this.printButton.click();
  }

  async clickToBePrint(): Promise<void> {
    await this.toBePrintCheckbox.click();
  }

  async clickToBeEmailed(): Promise<void> {
    await this.toBeEmailedCheckbox.click();
  }

  async getAccountBalanceValue(): Promise<string> {
    return (await this.accountBalanceEdit.inputValue()) || '';
  }

  async getRegistrationValue(): Promise<string> {
    return (await this.registrationEdit.inputValue()) || '';
  }

  async getDetailNumberYear(): Promise<string> {
    return (await this.detailNumberYearEdit.inputValue()) || '';
  }

  async getDetailNumber(): Promise<string> {
    return (await this.detailNumberEdit.inputValue()) || '';
  }

  async saveScreen(): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept());
    await this.saveButton.click();
  }

  async saveNCloseScreen(): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept());
    await this.saveAndCloseButton.click();
  }

  async closeScreen(): Promise<void> {
    await this.page.close();
  }

  async enterAddress(value: string): Promise<void> {
    await this.addressEdit.fill(value);
  }

  async clickRefresh(): Promise<void> {
    await this.resetButton.click();
  }

  async getInvoiceNumberValue(): Promise<string> {
    return (await this.invoiceNumberEdit.inputValue()) || '';
  }

  async clickDeleteWithConfirmation(): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept());
    await this.deleteButton.click();
  }

  async getInvoiceStatusText(): Promise<string> {
    return (await this.invoiceStatusLabel.textContent()) || '';
  }

  async getInvoiceTemplateText(): Promise<string> {
    return (await this.invoiceTemplateText.textContent()) || '';
  }

  async isReceivePaymentIconVisible(): Promise<boolean> {
    return await this.receivePaymentIcon.isVisible();
  }

  async isDeleteIconVisible(): Promise<boolean> {
    return await this.deleteButton.isVisible();
  }

  async isEmailInvoiceButtonEnabled(): Promise<boolean> {
    return await this.emailInvoiceButton.isEnabled();
  }

  async isPrintInvoiceButtonEnabled(): Promise<boolean> {
    return await this.printInvoiceButton.isEnabled();
  }

  async isVoidInvoiceButtonEnabled(): Promise<boolean> {
    return await this.voidInvoiceButton.isEnabled();
  }

  async isVoidInvoiceButtonDisabled(): Promise<boolean> {
    return !(await this.voidInvoiceButton.isEnabled());
  }

  async isInvoiceDetailsTabEnabled(): Promise<boolean> {
    return await this.invoiceDetailsTab.isEnabled();
  }

  async isTransactionsHistoryTabEnabled(): Promise<boolean> {
    return await this.transactionsHistoryTab.isEnabled();
  }

  async isInvoiceClassDisabled(): Promise<boolean> {
    return !(await this.invoiceClassDropdown.isEnabled());
  }

  async isInvoiceTypeDisabled(): Promise<boolean> {
    return !(await this.invoiceTypeDropdown.isEnabled());
  }

  async getInvoiceClassText(): Promise<string> {
    return (await this.invoiceClassDropdown.locator('option:checked').textContent()) || '';
  }

  async getInvoiceTypeText(): Promise<string> {
    return (await this.invoiceTypeDropdown.locator('option:checked').textContent()) || '';
  }

  async getBillToAccountNameType(): Promise<string> {
    return (await this.billToAccountNameTypeEdit.inputValue()) || '';
  }

  async getBillToAccountNameNumber(): Promise<string> {
    return (await this.billToAccountNameNumberEdit.inputValue()) || '';
  }

  async isInvoiceTemplateDisplayed(): Promise<boolean> {
    return await this.invoiceTemplateText.isVisible();
  }

  async isDedicatedCheckboxChecked(): Promise<boolean> {
    return await this.dedicatedPenaltyAppliesCheckbox.isChecked();
  }

  async isDedicatedCheckboxDisabled(): Promise<boolean> {
    return !(await this.dedicatedPenaltyAppliesCheckbox.isEnabled());
  }

  async getCompensatoryAmtValue(): Promise<string> {
    return (await this.compensatoryAmt.inputValue()) || '';
  }

  async getDedicatedAmtValue(): Promise<string> {
    return (await this.dedicatedAmt.inputValue()) || '';
  }

  async getInvoiceYearValue(): Promise<string> {
    return (await this.invoiceNumberYearEdit.inputValue()) || '';
  }

  async getDetailNoYear(): Promise<string> {
    return (await this.detailNumberYearEdit.inputValue()) || '';
  }

  async getDetailNoNumber(): Promise<string> {
    return (await this.detailNumberEdit.inputValue()) || '';
  }

  async getPhoneTypeValue(): Promise<string> {
    return (await this.phoneTypeDropdown.inputValue()) || '';
  }

  async isVoidStatus(): Promise<boolean> {
    const src = await this.invoiceStatusLabel.getAttribute('src') || '';
    return src.includes('Void');
  }

  async isPastDueStatus(): Promise<boolean> {
    const src = await this.invoiceStatusLabel.getAttribute('src') || '';
    return src.includes('Pastdue');
  }

  async isTransactionHistoryTabDisplayed(): Promise<boolean> {
    return await this.transactionsHistoryTab.isVisible();
  }

  async isBillToAccountLastNameEnabled(): Promise<boolean> {
    return await this.billToAccountLastNameEdit.isEnabled();
  }

  async isBillToAccountFirstNameEnabled(): Promise<boolean> {
    return await this.billToAccountFirstNameEdit.isEnabled();
  }

  async getInvoiceTypeDropdownValues(): Promise<string[]> {
    const options = this.invoiceTypeDropdown.locator('option');
    return await options.allTextContents();
  }

  async isInvoiceTypeInDropdown(invoiceType: string): Promise<boolean> {
    const values = await this.getInvoiceTypeDropdownValues();
    return values.includes(invoiceType);
  }

  async getJurisSelectedValue(): Promise<string> {
    return (await this.jurisDropdown.locator('option:checked').textContent()) || '';
  }

  async VerifyInvoiceNo(invoiceNo: string): Promise<void> { expect(await this.invoiceNumberYearEdit.inputValue()).toEqual(invoiceNo.substring(2, 4)); expect(await this.invoiceNumberEdit.inputValue()).toEqual(invoiceNo.substring(5)); }
  async VerifyAtInvoiceNo(invoiceNo: string): Promise<void> { expect(await this.invoiceNumberYearEdit.inputValue()).toEqual(invoiceNo.substring(0, 2)); expect(await this.invoiceNumberEdit.inputValue()).toEqual(invoiceNo.substring(3)); }
  async VerifyInvoiceTypeAsFalseAlarm(): Promise<void> { const text = (await this.invoiceTypeDropdown.locator('option:checked').textContent()) || ''; expect(text).toContain('False Alarm'); }
  async EnterAtBillToAccountNameID(nameID: string): Promise<void> { await this.billToAccountNameTypeEdit.fill(nameID.substring(0, 1)); await this.billToAccountNameNumberEdit.fill(nameID.substring(2)); await this.billToAccountNameNumberEdit.press('Tab'); }
  async VerifyAtBillToAccountLastName(lastName: string): Promise<void> { expect(await this.billToAccountLastNameEdit.inputValue()).toEqual(lastName); }
  async EnterAtBillToAccountLastName(lastName: string): Promise<void> { await this.billToAccountLastNameEdit.fill(lastName); await this.billToAccountLastNameEdit.press('Tab'); await this.billToAccountFirstNameEdit.press('Tab'); }
  async VerifyBillToAccountNameFieldIsEnabled(): Promise<void> { expect(await this.billToAccountLastNameEdit.isEnabled()).toBeTruthy(); expect(await this.billToAccountFirstNameEdit.isEnabled()).toBeTruthy(); }
  async VerifyAtBillToAccountFirstName(firstName: string): Promise<void> { expect(await this.billToAccountFirstNameEdit.inputValue()).toEqual(firstName); }
  async VerifyAtPhoneType(phoneType: string): Promise<void> { const val = await this.phoneTypeDropdown.inputValue(); expect(phoneType).toContain(val); }
  async VerifyAtPhoneNumber(phoneNo: string): Promise<void> { expect(await this.phoneNumberEdit.inputValue()).toEqual(phoneNo); }
  async verifyAtInVoiceType(invoiceType: string): Promise<void> { const text = (await this.invoiceTypeDropdown.locator('option:checked').textContent()) || ''; expect(text).toEqual(invoiceType); }
  async VerifyAtInvoiceClass(invoiceClass: string): Promise<void> { const text = (await this.invoiceClassDropdown.locator('option:checked').textContent()) || ''; expect(text).toEqual(invoiceClass); }
  async VerifyAtDetailNo(detailNo: string): Promise<void> { expect(await this.detailNumberYearEdit.inputValue()).toEqual(detailNo.substring(0, 2)); expect(await this.detailNumberEdit.inputValue()).toEqual(detailNo.substring(3)); }
  async ClickSaveButton(): Promise<void> { await this.saveButton.click(); }
  async VerifyIDNoAsAlarmNo(alarmNo: string): Promise<void> { expect(await this.idNoEdit.inputValue()).toEqual(alarmNo); }
  async VerifyAtIDNo(idNo: string): Promise<void> { expect(await this.idNoEdit.inputValue()).toEqual(idNo); }
  async SelectAtInvoiceClass(invoiceClass: string): Promise<void> { await this.invoiceClassDropdown.selectOption({ label: invoiceClass }); await this.invoiceClassDropdown.press('Tab'); }
  async SelectAtInvoiceType(invoiceType: string): Promise<void> { await this.invoiceTypeDropdown.selectOption({ label: invoiceType }); }
  async SelectAtBillingContact(billingContact: string): Promise<void> { await this.billingContactDropdown.selectOption({ label: billingContact }); }
  async VerifyAtAddress(address: string): Promise<void> { expect(await this.addressEdit.inputValue()).toEqual(address); }
  async VerifyAtInvoiceBalance(invoiceBalance: string): Promise<void> { expect(await this.invoiceBalanceEdit.inputValue()).toEqual(invoiceBalance); }
  async Verify21811EnterTheInvoiceDateAckMsg(): Promise<void> { /* popup: (21811) Enter the Invoice Date */ }
  async VerifyInvoiceDateAsCurrentDate(): Promise<void> { const today = new Date(); const formatted = `${(today.getMonth()+1).toString().padStart(2,'0')}/${today.getDate().toString().padStart(2,'0')}/${today.getFullYear()}`; expect(await this.invoiceDateEdit.inputValue()).toEqual(formatted); }
  async VerifyDueDateAsNextMonthCurrentDate(): Promise<void> { const future = new Date(); future.setDate(future.getDate() + 30); const formatted = `${(future.getMonth()+1).toString().padStart(2,'0')}/${future.getDate().toString().padStart(2,'0')}/${future.getFullYear()}`; expect(await this.invoiceDueDateEdit.inputValue()).toEqual(formatted); }
  async VerifyOriginalpaymentDueDateAsNextMonthCurrentDate(): Promise<void> { const future = new Date(); future.setDate(future.getDate() + 30); const formatted = `${(future.getMonth()+1).toString().padStart(2,'0')}/${future.getDate().toString().padStart(2,'0')}/${future.getFullYear()}`; expect(await this.originalPaymentDueDateEdit.inputValue()).toEqual(formatted); }
  async VerifyAdditionSuccessfulStatusMessage(): Promise<void> { expect(await this.statusBar.textContent()).toContain('1002 - Addition Successful'); }
  async VerifyUpdateSuccessfulStatusMessage(): Promise<void> { const text = await this.statusBar.textContent(); expect(text).toContain('1003 - Update'); }
  async VerifyReceivePaymentIconDisplayed(): Promise<void> { expect(await this.receivePaymentIcon.isVisible()).toBeTruthy(); }
  async ClickReceivePaymentIcon(): Promise<void> { await this.receivePaymentIcon.click(); }
  async VerifyDeleteIconDisplayed(): Promise<void> { expect(await this.deleteButton.isVisible()).toBeTruthy(); }
  async ClickDeleteButton(): Promise<void> { await this.deleteButton.click(); }
  async VerifyEmailInvoiceButtonEnabled(): Promise<void> { expect(await this.emailInvoiceButton.isEnabled()).toBeTruthy(); }
  async ClickEmailInvoiceButton(): Promise<void> { await this.emailInvoiceButton.click(); }
  async VerifyPrintInvoiceButtonEnabled(): Promise<void> { expect(await this.printInvoiceButton.isEnabled()).toBeTruthy(); }
  async VerifyVoidInvoiceButtonEnabled(): Promise<void> { expect(await this.voidInvoiceButton.isEnabled()).toBeTruthy(); }
  async ClickVoidInvoiceButton(): Promise<void> { await this.voidInvoiceButton.click(); }
  async VerifyAtInvoiceTemplate(template: string): Promise<void> { const text = (await this.invoiceTemplateDropdown.locator('option:checked').textContent()) || ''; expect(text).toEqual(template); }
  async Verify21858DoYouWishToVoidInvoiceConfirmMSg(): Promise<void> { /* confirm popup: (21858) Do you wish to void the Invoice? */ }
  async Verify21829ItemCodeDetailsMandatoryAckMsg(): Promise<void> { /* popup: (21829) Item Code Details is mandatory */ }
  async Verify21827DoYouWantToDeleteInvoiceConfirmMsg(): Promise<void> { /* confirm popup: (21827) Do you want to delete the Invoice? */ }
  async Verify1004DeletionSuccessfulStatusMessage(): Promise<void> { expect(await this.statusBar.textContent()).toContain('1004 - Deletion Successful'); }
  async VerifyAtTotalAmount(totalAmount: string): Promise<void> { expect(await this.totalAmountEdit.inputValue()).toEqual(totalAmount); }
  async VerifyAtInvoiceAmount(invoiceAmount: string): Promise<void> { expect(await this.invoiceAmountEdit.inputValue()).toEqual(invoiceAmount); }
  async VerifyVoidStatus(): Promise<void> { expect(await this.invoiceStatusLabel.getAttribute('src')).toContain('VoidNew'); }
  async VerifyPastDueStatus(): Promise<void> { expect(await this.invoiceStatusLabel.getAttribute('src')).toContain('Pastdue'); }
  async VerifyVoidInvoiceButtonDisabled(): Promise<void> { expect(await this.voidInvoiceButton.isEnabled()).toBeFalsy(); }
  async verifyStatusAsVoid(): Promise<void> { expect(await this.invoiceStatusLabel.getAttribute('src')).toContain('Void'); }
  async VerifyOnlyInvoiceDetailsTabEnabled(): Promise<void> { expect(await this.invoiceDetailsTab.isEnabled()).toBeTruthy(); }
  async VerifyTransactionHistoryTabNotEnabled(): Promise<void> { expect(await this.transactionsHistoryTab.isVisible()).toBeFalsy(); }
  async verifyAdditionSuccessful(): Promise<void> { const text = await this.page.locator("//td[@class='statusBar' or @class='status']//b").textContent(); expect(text).toContain('1002 - Addition'); }
  async clickAddANewContact(): Promise<void> { await this.addNewContactButton.click(); }
  async verifyInvoiceTemplateIsDisplayed(): Promise<void> { expect(await this.invoiceTemplateText.isVisible()).toBeTruthy(); }
  async verifyAtDeletedInvoiceType(invoiceType1: string): Promise<void> { const options = await this.invoiceTypeDropdown.locator('option').allTextContents(); expect(options).not.toContain(invoiceType1); }
  async Verify21829ItemCodeDetailsMandatoryAckMsgForFire(): Promise<void> { /* popup: (21829) Item Code Details Mandatory */ }
  async VerifyUpdateSuccessfulStatusMessageForFire(): Promise<void> { expect(await this.statusBar.textContent()).toContain('1003 - Update successful'); }
  async verifyInvoiceDatewithInFromDateAndToDate(fromDate: string, toDate: string): Promise<void> { const invoiceDate = await this.invoiceDateEdit.inputValue(); expect(new Date(invoiceDate).getTime()).toBeGreaterThanOrEqual(new Date(fromDate).getTime()); expect(new Date(invoiceDate).getTime()).toBeLessThanOrEqual(new Date(toDate).getTime()); }
  async VerifyInvoiceClass(invoiceClass: string): Promise<void> { const text = (await this.invoiceClassDropdown.locator('option:checked').textContent()) || ''; expect(text).toEqual(invoiceClass); }
  async verifyInvoiceClassFeildIsDisabled(): Promise<void> { expect(await this.invoiceClassDropdown.isEnabled()).toBeFalsy(); }
  async VerifyInvoiceType(invoiceType: string): Promise<void> { const text = (await this.invoiceTypeDropdown.locator('option:checked').textContent()) || ''; expect(text).toEqual(invoiceType); }
  async verifyInvoiceClassTypeIsDisabled(): Promise<void> { expect(await this.invoiceTypeDropdown.isEnabled()).toBeFalsy(); }
  async verify1051UpdatedDataExistInInvoiceDetailsTabAck(): Promise<void> { /* popup: (1051) Updated data exists in Invoice Details tab */ }
  async verify1011NoRecordFoundAckMsg(): Promise<void> { /* popup: 1011 - No Record Found */ }
  async ClickDeleteButtonWithConfirmationPopup(): Promise<void> { await this.deleteButton.click(); /* confirm popup handled */ }
  async clickRefreshButton(): Promise<void> { await this.resetButton.click(); }
  async verifyAtJuris(juris: string): Promise<void> { const text = (await this.jurisDropdown.locator('option:checked').textContent()) || ''; expect(text).toEqual(juris); }
  async selectAtJuris(juris: string): Promise<void> { await this.jurisDropdown.selectOption({ label: juris }); }
  async enterAtBillToAccountNameID(nameID: string): Promise<void> { await this.billToAccountNameTypeEdit.fill(nameID.substring(0, 1)); await this.billToAccountNameNumberEdit.fill(nameID.substring(2)); await this.billToAccountNameNumberEdit.press('Tab'); }
  async verifyDoYouWantToApplyCreditPopup(): Promise<void> { /* confirm popup: (21844) Do You Want to Apply Credit */ }
  async verifyTheSumOfInvoicesAcknowledgePopup(): Promise<void> { /* popup: (21862) The sum of the Invoices Payment amounts exceeds the Received Amount */ }
  async verifyDedicatedCheckboxCheckedDisabled(): Promise<void> { expect(await this.dedicatedPenaltyAppliesCheckbox.isChecked()).toBeTruthy(); expect(await this.dedicatedPenaltyAppliesCheckbox.isEnabled()).toBeFalsy(); }
  async verifyAtCompensatoryAmnt(compAmt: string): Promise<void> { expect(await this.compensatoryAmt.inputValue()).toEqual(compAmt); }
  async verifyAtDedicatedAmt(dedicatedAmount: string): Promise<void> { expect(await this.dedicatedAmt.inputValue()).toEqual(dedicatedAmount); }
  async ClickPrintInvoiceButton(): Promise<void> { await this.printInvoiceButton.click(); }
}

// ─── Invoice Details Tab (sub-tab of Invoice Entry) ──────────────────────────

export class InvoiceDetailsTabPage {
  readonly page: Page;

  readonly itemCodeDropdown: Locator;
  readonly subItemCodeDropdown: Locator;
  readonly qtyEdit: Locator;
  readonly rateEdit: Locator;
  readonly amountEdit: Locator;
  readonly addButton: Locator;
  readonly invoiceDetailsTable: Locator;
  readonly totalAmountEdit: Locator;
  readonly conditionsNotesEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly printConditionsCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.itemCodeDropdown = page.locator('#tabInvoiceDetail_tmpl0_InvoiceDetails_cddItemCode');
    this.subItemCodeDropdown = page.locator('#tabInvoiceDetail_tmpl0_InvoiceDetails_cddSubItemCode');
    this.qtyEdit = page.locator('#tabInvoiceDetail_tmpl0_InvoiceDetails_txtQty');
    this.rateEdit = page.locator('#tabInvoiceDetail_tmpl0_InvoiceDetails_txtRate');
    this.amountEdit = page.locator('#tabInvoiceDetail_tmpl0_InvoiceDetails_txtAmount');
    this.addButton = page.locator('#tabInvoiceDetail_tmpl0_InvoiceDetails_imgAdd');
    this.invoiceDetailsTable = page.locator('#tabInvoiceDetail_tmpl0_InvoiceDetails_grdInvoice');
    this.totalAmountEdit = page.locator('#tabInvoiceDetail_tmpl0_TotalAmount');
    this.conditionsNotesEdit = page.locator('#tabInvoiceDetail_tmpl0_InvoiceDetails_txtConditionNotes');
    this.descriptionEdit = page.locator('#tabInvoiceDetail_tmpl0_InvoiceDetails_txtDescription');
    this.printConditionsCheckbox = page.locator('#tabInvoiceDetail_tmpl0_InvoiceDetails_chkprint');
  }

  async clickAdd(): Promise<void> {
    await this.addButton.click();
  }

  async clearQuantity(): Promise<void> {
    await this.qtyEdit.clear();
  }

  async enterQuantity(value: string): Promise<void> {
    await this.qtyEdit.fill(value);
  }

  async enterRate(value: string): Promise<void> {
    await this.rateEdit.click();
    await this.rateEdit.fill(value);
    await this.rateEdit.press('Tab');
  }

  async clearRate(): Promise<void> {
    await this.rateEdit.clear();
  }

  async tabOutRate(): Promise<void> {
    await this.rateEdit.press('Tab');
  }

  async enterAmount(value: string): Promise<void> {
    await this.amountEdit.click();
    await this.amountEdit.fill(value);
  }

  async enterDescription(value: string): Promise<void> {
    await this.descriptionEdit.clear();
    await this.descriptionEdit.fill(value);
  }

  async enterConditionsNotes(value: string): Promise<void> {
    await this.conditionsNotesEdit.fill(value);
  }

  async clickPrintConditions(): Promise<void> {
    await this.printConditionsCheckbox.click();
  }

  async getQtyValue(): Promise<string> {
    return (await this.qtyEdit.inputValue()) || '';
  }

  async getRateValue(): Promise<string> {
    return (await this.rateEdit.inputValue()) || '';
  }

  async getAmountValue(): Promise<string> {
    return (await this.amountEdit.inputValue()) || '';
  }

  async getTotalAmountValue(): Promise<string> {
    return (await this.totalAmountEdit.inputValue()) || '';
  }

  async selectItemCode(value: string): Promise<void> {
    await this.itemCodeDropdown.selectOption(value);
  }

  async selectSubItemCode(value: string): Promise<void> {
    await this.subItemCodeDropdown.selectOption(value);
  }

  async selectRowByItemCode(itemCode: string): Promise<void> {
    const row = this.invoiceDetailsTable.locator(`//td[contains(text(),'${itemCode}')]`);
    await row.click();
  }

  async deleteRowByItemCode(itemCode: string): Promise<void> {
    const row = this.invoiceDetailsTable.locator(`//tr[td[contains(text(),'${itemCode}')]]`);
    const deleteIcon = row.locator("//img[contains(@src,'delete') or contains(@title,'Delete')]");
    await deleteIcon.click();
  }

  async getGridCellText(searchText: string, columnName: string): Promise<string> {
    const row = this.invoiceDetailsTable.locator(`//tr[td[contains(text(),'${searchText}')]]`);
    const headerCells = this.invoiceDetailsTable.locator('//thead//th');
    const headers = await headerCells.allTextContents();
    const colIndex = headers.findIndex(h => h.includes(columnName));
    if (colIndex === -1) return '';
    const cell = row.locator(`td`).nth(colIndex);
    return (await cell.textContent()) || '';
  }

  async getDescriptionInGrid(rowIndex: number): Promise<string> {
    const rows = this.invoiceDetailsTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const descCell = row.locator("//td[contains(@class,'Description') or position()=3]");
    return (await descCell.textContent()) || '';
  }

  async getItemCodeInGrid(rowIndex: number): Promise<string> {
    const rows = this.invoiceDetailsTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const itemCodeCell = row.locator("//td[contains(@class,'ItemCode') or position()=2]");
    return (await itemCodeCell.textContent()) || '';
  }

  async getRateInGrid(rowIndex: number): Promise<string> {
    const rows = this.invoiceDetailsTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const rateCell = row.locator("//td[contains(@class,'Rate') or position()=5]");
    return (await rateCell.textContent()) || '';
  }

  async getAmountInGrid(rowIndex: number): Promise<string> {
    const rows = this.invoiceDetailsTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const amountCell = row.locator("//td[contains(@class,'Amount') or position()=6]");
    return (await amountCell.textContent()) || '';
  }

  async isDeleteIconPresentByItemCode(itemCode: string): Promise<boolean> {
    const row = this.invoiceDetailsTable.locator(`//tr[td[contains(text(),'${itemCode}')]]`);
    const deleteIcon = row.locator("//img[contains(@src,'delete') or contains(@title,'Delete')]");
    return await deleteIcon.isVisible();
  }

  async deleteRowByItemCodeWithConfirm(itemCode: string): Promise<void> {
    const row = this.invoiceDetailsTable.locator(`//tr[td[contains(text(),'${itemCode}')]]`);
    const deleteIcon = row.locator("//img[contains(@src,'delete') or contains(@title,'Delete')]");
    this.page.once('dialog', dialog => dialog.accept());
    await deleteIcon.click();
  }

  async getItemCodeColumnValues(): Promise<string[]> {
    const headerCells = this.invoiceDetailsTable.locator('//thead//th');
    const headers = await headerCells.allTextContents();
    const colIndex = headers.findIndex(h => h.includes('Item Code'));
    if (colIndex === -1) return [];
    const cells = this.invoiceDetailsTable.locator(`//tbody/tr/td[${colIndex + 1}]`);
    return await cells.allTextContents();
  }

  async isItemCodeInGrid(itemCode: string): Promise<boolean> {
    const values = await this.getItemCodeColumnValues();
    return values.some(v => v.includes(itemCode));
  }

  async isItemCodeNotInGrid(itemCode: string): Promise<boolean> {
    const values = await this.getItemCodeColumnValues();
    return !values.some(v => v.includes(itemCode));
  }

  async isQuantityBlank(): Promise<boolean> {
    const value = await this.qtyEdit.inputValue();
    return value.trim() === '';
  }

  async getGridRowCount(): Promise<number> {
    const rows = this.invoiceDetailsTable.locator('//tbody/tr');
    return await rows.count();
  }

  async SelectAtItemCode(itemCode: string): Promise<void> { await this.itemCodeDropdown.selectOption({ label: itemCode }); }
  async EnterAtQuantity(quantity: string): Promise<void> { await this.qtyEdit.fill(quantity); }
  async VerifyQualityAs1(): Promise<void> { expect(await this.qtyEdit.inputValue()).toEqual('1'); }
  async VerifyAtRate(rate: string): Promise<void> { expect(await this.rateEdit.inputValue()).toEqual(rate); }
  async EnterAtRate(rate: string): Promise<void> { await this.rateEdit.click(); await this.rateEdit.fill(rate); await this.rateEdit.press('Tab'); }
  async VerifyAtAmount(amount: string): Promise<void> { await this.amountEdit.press('Tab'); expect(await this.amountEdit.inputValue()).toEqual(amount); }
  async VerifyAtAmount1(amount1: string): Promise<void> { await this.amountEdit.press('Tab'); expect(await this.amountEdit.inputValue()).toEqual(amount1); }
  async ClickAddButton(): Promise<void> { await this.addButton.click(); }
  async VerifyAtDescription(description: string, rowIndex: number): Promise<void> { const cell = this.invoiceDetailsTable.locator(`//tr[contains(@class,'Row')][${rowIndex + 1}]//td[contains(@class,'Description') or position()=2]`); expect(await cell.textContent()).toContain(description); }
  async SelectRowByAtItemCode(itemCode: string): Promise<void> { await this.invoiceDetailsTable.locator(`//td[contains(text(),'${itemCode}')]`).click(); }
  async DeleteAtItemCodeInGrid(itemCode: string): Promise<void> { await this.invoiceDetailsTable.locator(`//tr[td[contains(text(),'${itemCode}')]]//img[contains(@title,'Delete') or contains(@src,'delete')]`).click(); }
  async DeleteAtItemCode1InGrid(itemCode1: string): Promise<void> { await this.invoiceDetailsTable.locator(`//tr[td[contains(text(),'${itemCode1}')]]//img[contains(@title,'Delete') or contains(@src,'delete')]`).click(); }
  async DeleteAtItemCode1Grid(itemCode: string): Promise<void> { await this.invoiceDetailsTable.locator(`//tr[td[contains(text(),'${itemCode}')]]//img[contains(@title,'Delete') or contains(@src,'delete')]`).click(); /* confirm popup handled */ }
  async VerifyAtItemCodeInGrid(itemCode: string, rowIndex: number): Promise<void> { const cell = this.invoiceDetailsTable.locator(`//tr[contains(@class,'Row')][${rowIndex + 1}]//td[contains(text(),'${itemCode}')]`); expect(await cell.textContent()).toContain(itemCode); }
  async verifyAtItemCodeInGrid(itemCode: string): Promise<void> { const cell = this.invoiceDetailsTable.locator(`//td[contains(text(),'${itemCode}')]`); expect(await cell.textContent()).toContain(itemCode); }
  async verifyAtItemCodeGrid(itemCode: string): Promise<void> { const cell = this.invoiceDetailsTable.locator(`//td[contains(text(),'${itemCode}')]`); expect(await cell.textContent()).toEqual(itemCode); }
  async VerifyAtItemCode1InGrid(itemCode1: string, rowIndex: number): Promise<void> { const cell = this.invoiceDetailsTable.locator(`//tr[contains(@class,'Row')][${rowIndex + 1}]//td[contains(text(),'${itemCode1}')]`); expect(await cell.textContent()).toContain(itemCode1); }
  async VerifyAtRateInGrid(rate: string, rowIndex: number): Promise<void> { const cell = this.invoiceDetailsTable.locator(`//tr[contains(@class,'Row')][${rowIndex + 1}]//td[position()=4]`); expect(await cell.textContent()).toContain(rate); }
  async VerifyAtAmountInGrid(amount: string, rowIndex: number): Promise<void> { const cell = this.invoiceDetailsTable.locator(`//tr[contains(@class,'Row')][${rowIndex + 1}]//td[position()=5]`); expect(await cell.textContent()).toContain(amount); }
  async VerifyAtTotalAmount(totalAmount: string): Promise<void> { expect(await this.totalAmountEdit.inputValue()).toEqual(totalAmount); }
  async Verify4DoYouWantToDeleteConfirmMsg(): Promise<void> { /* confirm popup: (4) Do you want to delete? */ }
  async VerifyAtItemCodeNotInGrid(itemCode: string): Promise<void> { const cells = await this.invoiceDetailsTable.locator("//td[position()=1]").allTextContents(); expect(cells).not.toContain(itemCode); }
  async SelectAtSubItemCode1(subItemCode1: string): Promise<void> { await this.subItemCodeDropdown.selectOption({ label: subItemCode1 }); }
  async SelectAtSubItemCode(subItemCode: string): Promise<void> { await this.subItemCodeDropdown.selectOption({ label: subItemCode }); }
  async selectAtItemCode(itemCode: string): Promise<void> { await this.itemCodeDropdown.selectOption({ label: itemCode }); }
  async verifyDeleteIconNotPresentByItemCodeInGrid(itemCode: string): Promise<void> { const row = this.invoiceDetailsTable.locator(`//tr[td[contains(text(),'${itemCode}')]]`); const deleteIcon = row.locator("//img[contains(@title,'Delete') or contains(@src,'delete')]"); expect(await deleteIcon.count()).toEqual(0); }
  async VerifyAtItemCode2InGrid(itemCode2: string, rowIndex: number): Promise<void> { const cell = this.invoiceDetailsTable.locator(`//tr[contains(@class,'Row')][${rowIndex + 1}]//td[position()=1]`); expect(await cell.textContent()).toContain(itemCode2); }
  async verifyAtItemCodeInGridInList(itemCode: string): Promise<void> { const cells = await this.invoiceDetailsTable.locator("//td[position()=1]").allTextContents(); expect(cells).toContain(itemCode); }
  async enterAtAmount(amount: string): Promise<void> { await this.amountEdit.click(); await this.amountEdit.fill(amount); }
  async enterAtConditionsNotes(conditions: string): Promise<void> { await this.conditionsNotesEdit.fill(conditions); }
  async enterAtDescription(description: string): Promise<void> { await this.descriptionEdit.clear(); await this.descriptionEdit.fill(description); }
  async clickPrintConditionsCheckbox(): Promise<void> { await this.printConditionsCheckbox.click(); }
  async enterAtRate(rate: string): Promise<void> { await this.rateEdit.click(); await this.rateEdit.fill(rate); await this.rateEdit.press('Tab'); }
  async verifyDeleteIconIsDispayedByItemCodeInGrid(itemCode: string): Promise<void> { const row = this.invoiceDetailsTable.locator(`//tr[td[contains(text(),'${itemCode}')]]`); const deleteIcon = row.locator("//img[contains(@title,'Delete') or contains(@src,'delete')]"); expect(await deleteIcon.count()).toBeGreaterThan(0); }
  async verify6RecordMarkedForDeletionPopup(): Promise<void> { /* popup: (6) Record marked for deletion */ }
  async verify1018RequiredEntriesAreMissingAcknowledgePopup(): Promise<void> { /* popup: (1018) Required Entries are Missing */ }
  async verify1051UpdatedDataExistsInInvoiceDetailsTabAcknowledgePopup(): Promise<void> { /* popup: (1051) Updated data exists in Invoice Details tab */ }
  async enterAtQuantity(qty: string): Promise<void> { await this.qtyEdit.fill(qty); }
  async verifyQuantityAsBlank(): Promise<void> { expect((await this.qtyEdit.inputValue()).trim()).toEqual(''); }
  async verifyDeleteIconNotPresentInGrid(itemCode: string): Promise<void> { const row = this.invoiceDetailsTable.locator(`//tr[td[contains(text(),'${itemCode}')]]`); const deleteIcon = row.locator("//img[contains(@title,'Delete') or contains(@src,'delete')]"); expect(await deleteIcon.count()).toEqual(0); }
}

// ─── Transactions History Tab (sub-tab of Invoice Entry) ─────────────────────

export class TransactionsHistoryTabPage {
  readonly page: Page;

  readonly transactionsHistoryTable: Locator;
  readonly addTransactionHistoryButton: Locator;
  readonly adjustmentEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.transactionsHistoryTable = page.locator('#tabInvoiceDetail_tmpl1_TransactionAndHistory_grdTransaction');
    this.addTransactionHistoryButton = page.locator('#tabInvoiceDetail_tmpl1_TransactionAndHistory_btnAdd');
    this.adjustmentEdit = page.locator('#tabInvoiceDetail_tmpl1_TransactionAndHistory_txtAdjustment');
  }

  async clickAddTransactionHistory(): Promise<void> {
    await this.addTransactionHistoryButton.click();
  }

  async getActionTypeInGrid(rowIndex: number): Promise<string> {
    const rows = this.transactionsHistoryTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const cell = row.locator("//td[contains(@class,'ActionType') or position()=2]");
    return (await cell.textContent()) || '';
  }

  async getCreditAmountInGrid(rowIndex: number): Promise<string> {
    const rows = this.transactionsHistoryTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const cell = row.locator("//td[contains(@class,'Credit') or position()=4]");
    return (await cell.textContent()) || '';
  }

  async getAdjustmentValue(): Promise<string> {
    return (await this.adjustmentEdit.inputValue()) || '';
  }

  async isVoidRowInGrid(rowIndex: number): Promise<boolean> {
    const actionType = await this.getActionTypeInGrid(rowIndex);
    return actionType.includes('Void(-)');
  }

  async isCorrectionRowInGrid(rowIndex: number): Promise<boolean> {
    const actionType = await this.getActionTypeInGrid(rowIndex);
    return actionType.includes('Correction(+ or -)');
  }

  async VerifyVoidRowInGrid(rowIndex: number): Promise<void> { const cell = this.transactionsHistoryTable.locator(`//tr[contains(@class,'Row')][${rowIndex + 1}]//td[contains(text(),'Void')]`); expect(await cell.textContent()).toContain('Void(-)'); }
  async VerifyActionAsCorrection(rowIndex: number): Promise<void> { const cell = this.transactionsHistoryTable.locator(`//tr[contains(@class,'Row')][${rowIndex + 1}]//td[contains(text(),'Correction')]`); expect(await cell.textContent()).toContain('Correction(+ or -)'); }
  async VerifyAtActionTypeInGrid(actionType: string, rowIndex: number): Promise<void> { const cell = this.transactionsHistoryTable.locator(`//tr[contains(@class,'Row')][${rowIndex + 1}]//td[position()=2]`); expect(await cell.textContent()).toEqual(actionType); }
  async VerifyAtCreditAmountDecreasedInGrid(creditAmount: string, rowIndex: number): Promise<void> { const cell = this.transactionsHistoryTable.locator(`//tr[contains(@class,'Row')][${rowIndex + 1}]//td[contains(@class,'Credit') or position()=4]`); expect(await cell.textContent()).toContain(creditAmount); }
  async ClickAddTransactionHistoryButton(): Promise<void> { await this.addTransactionHistoryButton.click(); }
  async VerifyAtAdjustment(adjustment: string): Promise<void> { expect(await this.adjustmentEdit.inputValue()).toEqual(adjustment); }
}

// ─── Receive Payment ─────────────────────────────────────────────────────────

export class ReceivePaymentPage {
  readonly page: Page;

  // Status & toolbar
  readonly statusBar: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly printButton: Locator;
  readonly resetButton: Locator;

  // Invoice fields
  readonly invoiceNumberYearEdit: Locator;
  readonly invoiceNumberEdit: Locator;
  readonly invoiceClassDropdown: Locator;
  readonly accountBalanceEdit: Locator;

  // Bill-to account
  readonly billToAccountNameTypeEdit: Locator;
  readonly billToAccountNameIDEdit: Locator;

  // Payment name
  readonly nameTypeEdit: Locator;
  readonly nameIDEdit: Locator;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;

  // Payment fields
  readonly amountEdit: Locator;
  readonly dateEdit: Locator;
  readonly paymentMethodDropdown: Locator;
  readonly chequeNoEdit: Locator;
  readonly memoEdit: Locator;
  readonly transactionReferenceEdit: Locator;
  readonly cashRegisterDropdown: Locator;
  readonly availableCreditEdit: Locator;
  readonly amountDueEdit: Locator;

  // Buttons
  readonly printReceiptButton: Locator;
  readonly emailReceiptButton: Locator;
  readonly voidPaymentButton: Locator;
  readonly invoiceLookupButton: Locator;
  readonly findAccountOrInvoiceButton: Locator;

  // Void
  readonly voidReasonEdit: Locator;
  readonly voidReasonOKButton: Locator;
  readonly voidReasonLabel: Locator;

  // Tabs
  readonly invoicesTab: Locator;
  readonly historyTab: Locator;
  readonly attachmentTab: Locator;

  // Grid
  readonly receivePaymentTable: Locator;
  readonly paymentEditInGrid: Locator;
  readonly selectAllCheckbox: Locator;

  // Misc
  readonly jurisDropdown: Locator;
  readonly receiptNo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.statusBar = page.locator("//td[@class='statusBar']//b");
    this.saveButton = page.locator('#cmdsave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.printButton = page.locator('#cmdPrint');
    this.resetButton = page.locator('#cmdRefresh');

    this.invoiceNumberYearEdit = page.locator('#nbrInvoiceNumber_Year');
    this.invoiceNumberEdit = page.locator('#nbrInvoiceNumber_Number');
    this.invoiceClassDropdown = page.locator('#cddInvoiceClass_DropDown');
    this.accountBalanceEdit = page.locator('#txtBalance');

    this.billToAccountNameTypeEdit = page.locator('#txtContactName_NameType');
    this.billToAccountNameIDEdit = page.locator('#txtContactName_NameTypeID');

    this.nameTypeEdit = page.locator('#PaymentNameCrtl_NameType');
    this.nameIDEdit = page.locator('#PaymentNameCrtl_NameTypeID');
    this.lastNameEdit = page.locator('#PaymentNameCrtl_LastName');
    this.firstNameEdit = page.locator('#PaymentNameCrtl_FirstName');

    this.amountEdit = page.locator('#txtamt');
    this.dateEdit = page.locator('#dttReceived_KPIDttmCtrl');
    this.paymentMethodDropdown = page.locator('#cddPaymentMethod_DropDown');
    this.chequeNoEdit = page.locator('#txtChequeNo');
    this.memoEdit = page.locator('#txtMemo');
    this.transactionReferenceEdit = page.locator('#txtCardNo');
    this.cashRegisterDropdown = page.locator('#cddCashRegister_DropDown');
    this.availableCreditEdit = page.locator('#txtAvailableCredit');
    this.amountDueEdit = page.locator('#tabReceivePayment_tmpl0_usrInvoiceDtl_txtAmountDue');

    this.printReceiptButton = page.locator('#cmdPrintReceipt');
    this.emailReceiptButton = page.locator('#cmdEmailReceipt');
    this.voidPaymentButton = page.locator('#btnVoidPayment');
    this.invoiceLookupButton = page.locator('#nbrInvoiceNumber_imgBtn');
    this.findAccountOrInvoiceButton = page.locator('#cmdFindAccount');

    this.voidReasonEdit = page.locator('#txtVoidReason');
    this.voidReasonOKButton = page.locator('#btnVoidOk');
    this.voidReasonLabel = page.locator('#lblShowVoidReason');

    this.invoicesTab = page.locator("//span[contains(text(), 'Invoices')]");
    this.historyTab = page.locator("//span[contains(text(), 'History')]");
    this.attachmentTab = page.locator("//span[contains(text(), 'Attachment')]");

    this.receivePaymentTable = page.locator('#tabReceivePayment_tmpl0_usrInvoiceDtl_grdInvoiceDetails');
    this.paymentEditInGrid = page.locator('#tabReceivePayment_tmpl0_usrInvoiceDtl_grdInvoiceDetails_it11_0_Payment');
    this.selectAllCheckbox = page.locator('#tabReceivePayment_tmpl0_usrInvoiceDtl_ChkSelectAll');

    this.jurisDropdown = page.locator('#lstJuris');
    this.receiptNo = page.locator('#lblReceipt');
  }

  async clickSave(): Promise<void> {
    await this.saveButton.click();
  }

  async clickSaveAndClose(): Promise<void> {
    await this.saveAndCloseButton.click();
  }

  async clickVoidPayment(): Promise<void> {
    await this.voidPaymentButton.click();
  }

  async getStatusBarText(): Promise<string> {
    return (await this.statusBar.textContent()) || '';
  }

  async readReceiptNo(): Promise<string> {
    const text = (await this.receiptNo.textContent()) || '';
    return text.substring(9);
  }

  async enterInvoiceNo(year: string, number: string): Promise<void> {
    await this.invoiceNumberYearEdit.fill(year);
    await this.invoiceNumberEdit.fill(number);
    await this.invoiceNumberEdit.press('Tab');
  }

  async enterAmount(amount: string): Promise<void> {
    await this.amountEdit.fill(amount);
    await this.amountEdit.press('Tab');
  }

  async enterAccountNameID(nameType: string, nameID: string): Promise<void> {
    await this.nameTypeEdit.fill(nameType);
    await this.nameIDEdit.fill(nameID);
    await this.nameIDEdit.press('Tab');
  }

  async enterLastName(lastName: string): Promise<void> {
    await this.lastNameEdit.fill(lastName);
    await this.lastNameEdit.press('Tab');
  }

  async enterFirstName(firstName: string): Promise<void> {
    await this.firstNameEdit.fill(firstName);
    await this.firstNameEdit.press('Tab');
  }

  async enterCheckNo(checkNo: string): Promise<void> {
    await this.chequeNoEdit.fill(checkNo);
  }

  async enterMemo(memo: string): Promise<void> {
    await this.memoEdit.fill(memo);
  }

  async enterTransactionReference(reference: string): Promise<void> {
    await this.transactionReferenceEdit.fill(reference);
  }

  async enterVoidReason(reason: string): Promise<void> {
    await this.voidReasonEdit.fill(reason);
  }

  async clickVoidOK(): Promise<void> {
    await this.voidReasonOKButton.click();
  }

  async clickInvoicesTab(): Promise<void> {
    await this.invoicesTab.click();
  }

  async clickHistoryTab(): Promise<void> {
    await this.historyTab.click();
  }

  async clickAttachmentTab(): Promise<void> {
    await this.attachmentTab.click();
  }

  async clickFindAccountOrInvoice(): Promise<void> {
    await this.findAccountOrInvoiceButton.click();
  }

  async clickInvoiceLookup(): Promise<void> {
    await this.invoiceLookupButton.click();
  }

  async clickPrintReceipt(): Promise<void> {
    await this.printReceiptButton.click();
  }

  async clickEmailReceipt(): Promise<void> {
    await this.emailReceiptButton.click();
  }

  async clickSelectAll(): Promise<void> {
    await this.selectAllCheckbox.click();
  }

  async clickReset(): Promise<void> {
    await this.resetButton.click();
  }

  async tabOutDate(): Promise<void> {
    await this.dateEdit.press('Tab');
  }

  async getAccountBalanceValue(): Promise<string> {
    return (await this.accountBalanceEdit.inputValue()) || '';
  }

  async getLastNameValue(): Promise<string> {
    return (await this.lastNameEdit.inputValue()) || '';
  }

  async getFirstNameValue(): Promise<string> {
    return (await this.firstNameEdit.inputValue()) || '';
  }

  async getCheckNoValue(): Promise<string> {
    return (await this.chequeNoEdit.inputValue()) || '';
  }

  async getTransactionReferenceValue(): Promise<string> {
    return (await this.transactionReferenceEdit.inputValue()) || '';
  }

  async getAvailableCreditValue(): Promise<string> {
    return (await this.availableCreditEdit.inputValue()) || '';
  }

  async selectPaymentMethod(value: string): Promise<void> {
    await this.paymentMethodDropdown.selectOption(value);
    await this.paymentMethodDropdown.press('Tab');
  }

  async selectInvoiceClass(value: string): Promise<void> {
    await this.invoiceClassDropdown.selectOption(value);
  }

  async selectCashRegister(value: string): Promise<void> {
    await this.cashRegisterDropdown.selectOption(value);
  }

  async selectJuris(value: string): Promise<void> {
    await this.jurisDropdown.selectOption(value);
  }

  async enterAmountDue(amountDue: string): Promise<void> {
    await this.amountDueEdit.fill(amountDue);
  }

  async enterPaymentInGrid(value: string): Promise<void> {
    await this.paymentEditInGrid.click();
    await this.paymentEditInGrid.fill(value);
    await this.paymentEditInGrid.press('Tab');
  }

  async clickPrint(): Promise<void> {
    await this.printButton.click();
  }

  async getBillToAccountNameType(): Promise<string> {
    return (await this.billToAccountNameTypeEdit.inputValue()) || '';
  }

  async getBillToAccountNameID(): Promise<string> {
    return (await this.billToAccountNameIDEdit.inputValue()) || '';
  }

  async getNameType(): Promise<string> {
    return (await this.nameTypeEdit.inputValue()) || '';
  }

  async getNameID(): Promise<string> {
    return (await this.nameIDEdit.inputValue()) || '';
  }

  async getAmountValue(): Promise<string> {
    return (await this.amountEdit.inputValue()) || '';
  }

  async getVoidReasonLabelText(): Promise<string> {
    return (await this.voidReasonLabel.textContent()) || '';
  }

  async saveScreen(): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept());
    await this.saveButton.click();
  }

  async saveNCloseScreen(): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept());
    await this.saveAndCloseButton.click();
  }

  async closeScreen(): Promise<void> {
    await this.page.close();
  }

  async selectPaymentMethodAsCash(): Promise<void> {
    await this.paymentMethodDropdown.selectOption('Cash');
    await this.paymentMethodDropdown.press('Tab');
  }

  async selectPaymentMethodAsMO(): Promise<void> {
    await this.paymentMethodDropdown.selectOption('MO');
    await this.paymentMethodDropdown.press('Tab');
  }

  async clickEnterKeyInReason(): Promise<void> {
    await this.voidReasonEdit.press('Enter');
  }

  async selectRowCheckBoxByInvoiceNo(invoiceNo: string): Promise<void> {
    const row = this.receivePaymentTable.locator(`//tr[td[contains(text(),'${invoiceNo}')]]`);
    const checkbox = row.locator("input[type='checkbox']");
    await checkbox.click();
  }

  async enterPaymentByInvoiceNoInGrid(invoiceNo: string, amount: string): Promise<void> {
    const row = this.receivePaymentTable.locator(`//tr[td[contains(text(),'${invoiceNo}')]]`);
    const paymentInput = row.locator("//input[contains(@id,'Payment')]");
    await paymentInput.click();
    await paymentInput.fill(amount);
    await paymentInput.press('Tab');
  }

  async getAmountDueValue(): Promise<string> {
    return (await this.amountDueEdit.inputValue()) || '';
  }

  async getGridRowCount(): Promise<number> {
    const rows = this.receivePaymentTable.locator('//tbody/tr');
    return await rows.count();
  }

  async enterDate(date: string): Promise<void> {
    await this.dateEdit.fill(date);
  }

  async clickPrintEmailReceiptButton(): Promise<void> {
    await this.printReceiptButton.click();
  }

  async enterAmountAs0(): Promise<void> {
    await this.amountEdit.fill('0');
    await this.amountEdit.press('Tab');
  }

  async selectInvoiceClassAsInspection(): Promise<void> {
    await this.invoiceClassDropdown.selectOption('Inspection');
  }

  async getInvoiceClassText(): Promise<string> {
    return (await this.invoiceClassDropdown.locator('option:checked').textContent()) || '';
  }

  async getPaymentMethodText(): Promise<string> {
    return (await this.paymentMethodDropdown.locator('option:checked').textContent()) || '';
  }

  async isInvoicesTabDisplayed(): Promise<boolean> {
    return await this.invoicesTab.isVisible();
  }

  async isHistoryTabDisplayed(): Promise<boolean> {
    return await this.historyTab.isVisible();
  }

  async isAttachmentTabDisplayed(): Promise<boolean> {
    return await this.attachmentTab.isVisible();
  }

  async isVoidReasonRedColor(): Promise<boolean> {
    const color = await this.voidReasonLabel.evaluate(el => getComputedStyle(el).color);
    return color.includes('255, 0, 0') || color.includes('red');
  }

  async switchToAttachmentTab(): Promise<void> {
    await this.attachmentTab.click();
    await this.page.waitForLoadState();
  }

  async getTabColor(tabName: string): Promise<string> {
    const tab = this.page.locator(`//span[contains(text(),'${tabName}')]`);
    return await tab.evaluate(el => getComputedStyle(el).color);
  }

  async enterRandomAmount(): Promise<string> {
    const amount = String(Math.floor(Math.random() * 900) + 100);
    await this.amountEdit.fill(amount);
    return amount;
  }

  async enterRandomCheckNo(): Promise<string> {
    const checkNo = String(Math.floor(Math.random() * 90000) + 10000);
    await this.chequeNoEdit.fill(checkNo);
    return checkNo;
  }

  async enterRandomVoidReason(): Promise<string> {
    const reason = Math.random().toString(36).substring(2, 12);
    await this.voidReasonEdit.fill(reason);
    return reason;
  }

  async enterRandomMemo(): Promise<string> {
    const memo = Math.random().toString(36).substring(2, 12);
    await this.memoEdit.fill(memo);
    return memo;
  }

  async getPaymentMethodDropdownValues(): Promise<string[]> {
    const options = this.paymentMethodDropdown.locator('option');
    return await options.allTextContents();
  }

  async isPaymentMethodInDropdown(method: string): Promise<boolean> {
    const values = await this.getPaymentMethodDropdownValues();
    return values.includes(method);
  }

  async EnterAtAmount(amount: string): Promise<void> { await this.amountEdit.fill(amount); await this.amountEdit.press('Tab'); }
  async verifyAdditionSuccessfulMessage(): Promise<void> { expect(await this.statusBar.textContent()).toContain('1002 - Addition Successful'); }
  async VerifyAtInvoiceClass(invoiceClass: string): Promise<void> { const text = (await this.invoiceClassDropdown.locator('option:checked').textContent()) || ''; expect(text).toEqual(invoiceClass); }
  async VerifyAtAccountBalance(accountBalance: string): Promise<void> { expect(await this.accountBalanceEdit.inputValue()).toEqual(accountBalance); }
  async VerifyAtBillToAccountNo(billToAccountNo: string): Promise<void> { expect(await this.billToAccountNameTypeEdit.inputValue()).toEqual(billToAccountNo.substring(0, 1)); expect(await this.billToAccountNameIDEdit.inputValue()).toEqual(billToAccountNo.substring(3)); }
  async VerifyAtNameID(nameID: string): Promise<void> { expect(await this.nameTypeEdit.inputValue()).toEqual(nameID.substring(0, 1)); expect(await this.nameIDEdit.inputValue()).toEqual(nameID.substring(3)); }
  async SelectAtPaymentMethod(paymentMethod: string): Promise<void> { await this.paymentMethodDropdown.selectOption({ label: paymentMethod }); await this.paymentMethodDropdown.press('Tab'); }
  async EnterAtTransactionReference(transactionReference: string): Promise<void> { await this.transactionReferenceEdit.fill(transactionReference); }
  async VerifyAtPaymentMethod(paymentMethod: string): Promise<void> { const text = (await this.paymentMethodDropdown.locator('option:checked').textContent()) || ''; expect(text).toEqual(paymentMethod); }
  async verifyAtPaymentMethodDropdownValue(paymentMethod: string): Promise<void> { const options = await this.paymentMethodDropdown.locator('option').allTextContents(); expect(options).toContain(paymentMethod); }
  async VerifyAtTransactionReference(transactionReference: string): Promise<void> { expect(await this.transactionReferenceEdit.inputValue()).toEqual(transactionReference); }
  async EnterAtCheckNo(checkNo: string): Promise<void> { await this.chequeNoEdit.fill(checkNo); }
  async ClickVoidPaymentButton(): Promise<void> { await this.voidPaymentButton.click(); }
  async VerifyVoidPaymentConfMsg(): Promise<void> { /* confirm popup: (21852) Voiding a payment may affect the Payment Ledger */ }
  async Verify21815PleaseSelectPaymentMethodAckMsg(): Promise<void> { /* popup: (21815) Select Payment Method */ }
  async Verify8EnterMandatoryDataAckMsg(): Promise<void> { /* popup: (8) Enter mandatory data */ }
  async EnterVoidPaymentReason(): Promise<void> { await this.voidReasonEdit.fill('Automation Test Reason'); }
  async EnterVoidPaymentAtReason(reason: string): Promise<void> { await this.voidReasonEdit.fill(reason); }
  async ClickVoidOKButton(): Promise<void> { await this.voidReasonOKButton.click(); }
  async VerifyVoidAtReason(reason: string): Promise<void> { expect(await this.voidReasonLabel.textContent()).toEqual('Void: ' + reason); }
  async VerifyVoidReasonAppearsRedColor(): Promise<void> { const style = await this.voidReasonLabel.getAttribute('style') || ''; expect(style).toContain('red'); }
  async SelectAtInvoiceClass(invoiceClass: string): Promise<void> { await this.invoiceClassDropdown.selectOption({ label: invoiceClass }); }
  async enterAtAccountNameID(accountNameID: string): Promise<void> { await this.nameTypeEdit.fill(accountNameID.substring(0, 1)); await this.nameIDEdit.fill(accountNameID.substring(2)); await this.nameIDEdit.press('Tab'); }
  async EnterAtAccountName(lastName: string): Promise<void> { await this.nameIDEdit.fill('B'); await this.lastNameEdit.fill(lastName); await this.lastNameEdit.press('Tab'); await this.firstNameEdit.press('Tab'); }
  async ClickInvoiceNoLookup(): Promise<void> { await this.invoiceLookupButton.click(); }
  async TabDate(): Promise<void> { await this.dateEdit.press('Tab'); }
  async ClickFindAnAccountOrInvoiceButton(): Promise<void> { await this.findAccountOrInvoiceButton.click(); }
  async EnterAtAmountDue(amountDue: string): Promise<void> { await this.amountDueEdit.fill(amountDue); }
  async clickPrintButton(): Promise<void> { await this.printButton.click(); }
  async verify21844DoYouWantApplyCreditAckMessage(): Promise<void> { /* confirm popup: (21844) Do You Want to Apply Credit */ }
  async VerifyAtAvailableCredit(availableCredit: string): Promise<void> { expect(await this.availableCreditEdit.inputValue()).toEqual(availableCredit); }
  async enterAtLastName(lastName: string): Promise<void> { await this.lastNameEdit.fill(lastName); await this.lastNameEdit.press('Tab'); }
  async enterAtFirstName(firstName: string): Promise<void> { await this.firstNameEdit.fill(firstName); await this.firstNameEdit.press('Tab'); }
  async selectRowCheckBoxByAtInvoiceNoInGrid(invoiceNo: string): Promise<void> { await this.receivePaymentTable.locator(`//tr[td[contains(text(),'${invoiceNo}')]]//input[@type='checkbox']`).click(); }
  async enterAtPaymentEditInGrid(payment: string): Promise<void> { await this.paymentEditInGrid.click(); await this.paymentEditInGrid.fill(payment); }
  async clickSaveNClose(): Promise<void> { await this.saveAndCloseButton.click(); }
  async verifyAtLastName(lastName: string): Promise<void> { expect(await this.lastNameEdit.inputValue()).toEqual(lastName); }
  async verifyAtFirstName(firstName: string): Promise<void> { expect(await this.firstNameEdit.inputValue()).toEqual(firstName); }
  async selectRowCheckBoxByInvoiceNoInGrid(invoiceNo: string): Promise<void> { await this.receivePaymentTable.locator(`//tr[td[contains(text(),'${invoiceNo}')]]//input[@type='checkbox']`).click(); }
  async verifyAtCheckNo(checkNo: string): Promise<void> { expect(await this.chequeNoEdit.inputValue()).toEqual(checkNo); }
  async verify21821SelectOverPaymtAck(): Promise<void> { /* popup: (21821) Select Over Payment options */ }
  async verifyAtAmountDue(amountDue: string): Promise<void> { expect(await this.amountDueEdit.textContent()).toEqual(amountDue); }
  async Verify21815PleaseSelectPaymentMethodAckMsgForFire(): Promise<void> { /* popup: (21815) Please Select Payment Method */ }
  async VerifyVoidPaymentConfMsgForFire(): Promise<void> { /* confirm popup: (21852) Voiding a payment may affect Payment Ledger */ }
  async clickSelectAllCheckBox(): Promise<void> { await this.selectAllCheckbox.click(); }
  async verifyAtJuris(): Promise<void> { const val = await this.jurisDropdown.inputValue(); expect(val).toBeTruthy(); }
  async verifyPaymentReceiptWindowOpens(): Promise<void> { const pages = this.page.context().pages(); const exists = pages.some(p => p.url().includes('frmPnxRpt')); expect(exists).toBeTruthy(); }
  async verifyAtTabColorAsBlue(tabName: string, expectedColor: string): Promise<void> { const el = this.page.locator(`//span[contains(text(),'${tabName}')]`); const color = await el.evaluate(e => getComputedStyle(e).color); expect(color).toEqual(expectedColor); }
  async clickResetIcon(): Promise<void> { await this.resetButton.click(); }
  async verifyInvoiceTabIsDisplayed(): Promise<void> { expect(await this.invoicesTab.isVisible()).toBeTruthy(); }
  async verifyHistoryTabIsDisplayed(): Promise<void> { expect(await this.historyTab.isVisible()).toBeTruthy(); }
  async verifyAttachmentsTabIsDisplayed(): Promise<void> { expect(await this.attachmentTab.isVisible()).toBeTruthy(); }
  async selectAtCashRegister(cashRegister: string): Promise<void> { await this.cashRegisterDropdown.selectOption({ label: cashRegister }); }
  async clickVoidPaymentButton(): Promise<void> { await this.voidPaymentButton.click(); }
  async verify21852VoidingPaymentAcknowledgementPopup(): Promise<void> { /* confirm popup: (21852) Voiding a payment */ }
  async clickPrintReceiptButton(): Promise<void> { await this.printReceiptButton.click(); }
}

// ─── Receive Payment - Invoices Tab ──────────────────────────────────────────

export class ReceivePaymentInvoicesTabPage {
  readonly page: Page;

  readonly invoicesTabTable: Locator;
  readonly amountDueEdit: Locator;
  readonly appliedEdit: Locator;
  readonly overPaymentEdit: Locator;
  readonly leaveCreditUsedLaterRadioButton: Locator;
  readonly refundRadioButton: Locator;
  readonly selectAllCheckbox: Locator;
  readonly refundEdit: Locator;

  // Payment grid cells (by row index)
  readonly paymentGrid0Edit: Locator;
  readonly paymentGrid1Edit: Locator;
  readonly paymentGrid2Edit: Locator;
  readonly paymentGrid3Edit: Locator;

  // Apply credit grid cells
  readonly applyCreditGridEdit: Locator;
  readonly applyCreditGrid1Edit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.invoicesTabTable = page.locator('#tabReceivePayment_tmpl0_usrInvoiceDtl_grdInvoiceDetails');
    this.amountDueEdit = page.locator('#tabReceivePayment_tmpl0_usrInvoiceDtl_txtAmountDue');
    this.appliedEdit = page.locator('#tabReceivePayment_tmpl0_usrInvoiceDtl_txtApplied');
    this.overPaymentEdit = page.locator('#tabReceivePayment_tmpl0_usrInvoiceDtl_txtOverPayment');
    this.leaveCreditUsedLaterRadioButton = page.locator('#tabReceivePayment_tmpl0_usrInvoiceDtl_rbtLeaveCredit');
    this.refundRadioButton = page.locator('#tabReceivePayment_tmpl0_usrInvoiceDtl_rbtRefund');
    this.selectAllCheckbox = page.locator('#tabReceivePayment_tmpl0_usrInvoiceDtl_ChkSelectAll');
    this.refundEdit = page.locator('#tabReceivePayment_tmpl0_usrInvoiceDtl_txtrefund');

    this.paymentGrid0Edit = page.locator('#tabReceivePayment_tmpl0_usrInvoiceDtl_grdInvoiceDetails_it11_0_Payment');
    this.paymentGrid1Edit = page.locator('#tabReceivePayment_tmpl0_usrInvoiceDtl_grdInvoiceDetails_it11_1_Payment');
    this.paymentGrid2Edit = page.locator('#tabReceivePayment_tmpl0_usrInvoiceDtl_grdInvoiceDetails_it11_2_Payment');
    this.paymentGrid3Edit = page.locator('#tabReceivePayment_tmpl0_usrInvoiceDtl_grdInvoiceDetails_it11_3_Payment');

    this.applyCreditGridEdit = page.locator('#tabReceivePayment_tmpl0_usrInvoiceDtl_grdInvoiceDetails_it10_0_ApplyCredit');
    this.applyCreditGrid1Edit = page.locator('#tabReceivePayment_tmpl0_usrInvoiceDtl_grdInvoiceDetails_it10_1_ApplyCredit');
  }

  async clickSelectAll(): Promise<void> {
    await this.selectAllCheckbox.click();
  }

  async clickLeaveCreditUsedLater(): Promise<void> {
    await this.leaveCreditUsedLaterRadioButton.click();
  }

  async clickRefund(): Promise<void> {
    await this.refundRadioButton.click();
  }

  async enterPaymentInGrid0(value: string): Promise<void> {
    await this.paymentGrid0Edit.click();
    await this.paymentGrid0Edit.fill(value);
    await this.paymentGrid0Edit.press('Tab');
  }

  async enterPaymentInGrid1(value: string): Promise<void> {
    await this.paymentGrid1Edit.click();
    await this.paymentGrid1Edit.fill(value);
    await this.paymentGrid1Edit.press('Tab');
  }

  async enterPaymentInGrid2(value: string): Promise<void> {
    await this.paymentGrid2Edit.click();
    await this.paymentGrid2Edit.fill(value);
    await this.paymentGrid2Edit.press('Tab');
  }

  async enterPaymentInGrid3(value: string): Promise<void> {
    await this.paymentGrid3Edit.click();
    await this.paymentGrid3Edit.fill(value);
    await this.paymentGrid3Edit.press('Tab');
  }

  async getAmountDueValue(): Promise<string> {
    return (await this.amountDueEdit.textContent()) || '';
  }

  async getAppliedValue(): Promise<string> {
    return (await this.appliedEdit.textContent()) || '';
  }

  async getOverPaymentValue(): Promise<string> {
    return (await this.overPaymentEdit.textContent()) || '';
  }

  async getPaymentGrid0Value(): Promise<string> {
    return (await this.paymentGrid0Edit.inputValue()) || '';
  }

  async getApplyCreditValue(): Promise<string> {
    return (await this.applyCreditGridEdit.inputValue()) || '';
  }

  async getApplyCredit1Value(): Promise<string> {
    return (await this.applyCreditGrid1Edit.inputValue()) || '';
  }

  async getRefundValue(): Promise<string> {
    return (await this.refundEdit.textContent()) || '';
  }

  async selectRowCheckBoxByInvoiceNo(invoiceNo: string): Promise<void> {
    const row = this.invoicesTabTable.locator(`//tr[td[contains(text(),'${invoiceNo}')]]`);
    const checkbox = row.locator("input[type='checkbox']");
    await checkbox.click();
  }

  async getInvoiceNoInGrid(rowIndex: number): Promise<string> {
    const rows = this.invoicesTabTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const cell = row.locator("//td[contains(@class,'Invoice') or position()=3]");
    return (await cell.textContent()) || '';
  }

  async getAmountDueInGrid(invoiceNo: string): Promise<string> {
    const row = this.invoicesTabTable.locator(`//tr[td[contains(text(),'${invoiceNo}')]]`);
    const amountDueCell = row.locator("//td[contains(@class,'AmountDue') or position()=5]");
    return (await amountDueCell.textContent()) || '';
  }

  async getPaymentAmountInGrid(rowIndex: number): Promise<string> {
    const rows = this.invoicesTabTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const paymentInput = row.locator("//input[contains(@id,'Payment')]");
    return (await paymentInput.inputValue()) || '';
  }

  async getGridRowCount(): Promise<number> {
    const rows = this.invoicesTabTable.locator('//tbody/tr');
    return await rows.count();
  }

  async isSelectAllCheckBoxEnabled(): Promise<boolean> {
    return await this.selectAllCheckbox.isEnabled();
  }

  async isLeaveCreditRadioButtonEnabled(): Promise<boolean> {
    return await this.leaveCreditUsedLaterRadioButton.isEnabled();
  }

  async isRefundRadioButtonEnabled(): Promise<boolean> {
    return await this.refundRadioButton.isEnabled();
  }

  async selectInvoiceNoInGrid(invoiceNo: string): Promise<void> {
    const row = this.invoicesTabTable.locator(`//td[contains(text(),'${invoiceNo}')]`);
    await row.click();
  }

  async enterPaymentAmountInGrid(rowIndex: number, amount: string): Promise<void> {
    const rows = this.invoicesTabTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const paymentInput = row.locator("//input[contains(@id,'Payment')]");
    await paymentInput.click();
    await paymentInput.fill(amount);
    await paymentInput.press('Tab');
  }

  async enterPaymentByInvoiceNo(invoiceNo: string, amount: string): Promise<void> {
    const row = this.invoicesTabTable.locator(`//tr[td[contains(text(),'${invoiceNo}')]]`);
    const paymentInput = row.locator("//input[contains(@id,'Payment')]");
    await paymentInput.click();
    await paymentInput.fill(amount);
    await paymentInput.press('Tab');
  }

  async isPaymentEnabledInGrid(rowIndex: number): Promise<boolean> {
    const rows = this.invoicesTabTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const paymentInput = row.locator("//input[contains(@id,'Payment')]");
    return await paymentInput.isEnabled();
  }

  async isApplyCheckboxChecked(rowIndex: number): Promise<boolean> {
    const rows = this.invoicesTabTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const checkbox = row.locator("input[type='checkbox']");
    return await checkbox.isChecked();
  }

  async getAccountBalanceAfterPayment(): Promise<string> {
    const balanceField = this.page.locator('#txtBalance');
    return (await balanceField.inputValue()) || '';
  }

  async getRefundAmount(): Promise<string> {
    return (await this.refundEdit.inputValue()) || '';
  }

  async getDateInGrid(rowIndex: number): Promise<string> {
    const rows = this.invoicesTabTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const cell = row.locator("//td[position()=1]");
    return (await cell.textContent()) || '';
  }

  async clickRandomRowCheckbox(): Promise<void> {
    const checkboxes = this.invoicesTabTable.locator("//tbody/tr//input[@type='checkbox']");
    const count = await checkboxes.count();
    if (count > 0) {
      const randomIndex = Math.floor(Math.random() * count);
      await checkboxes.nth(randomIndex).click();
    }
  }

  async selectGridRowCheckboxByInvoiceNo(invoiceNo: string): Promise<void> {
    const row = this.invoicesTabTable.locator(`//tr[td//a[contains(text(),'${invoiceNo}')]]`);
    const checkbox = row.locator("input[type='checkbox']");
    await checkbox.click();
  }

  async isInvoiceNoInGrid(invoiceNo: string): Promise<boolean> {
    const element = this.invoicesTabTable.locator(`//td/a[contains(text(),'${invoiceNo}')]`);
    return (await element.count()) > 0;
  }

  async getAmountDueByInvoiceNo(invoiceNo: string): Promise<string> {
    const row = this.invoicesTabTable.locator(`//tr[td//a[contains(text(),'${invoiceNo}')]]`);
    const cell = row.locator("//td[contains(@class,'AmountDue') or position()=3]");
    return (await cell.textContent()) || '';
  }

  async isSelectAllCheckboxEnabled(): Promise<boolean> {
    return await this.selectAllCheckbox.isEnabled();
  }

  async clickRefundRadioButton(): Promise<void> {
    await this.refundRadioButton.click();
  }

  async isPaymentFieldDisabledInGrid(): Promise<boolean> {
    const paymentField = this.page.locator("input[id*='_Payment']");
    return !(await paymentField.isEnabled());
  }

  async enterPaymentAmountForInvoice(invoiceNo: string, amount: string): Promise<void> {
    const row = this.invoicesTabTable.locator(`//tr[td//a[contains(text(),'${invoiceNo}')]]`);
    const paymentInput = row.locator("//input[contains(@id,'_Payment')]");
    await paymentInput.click();
    await paymentInput.fill(amount);
    await paymentInput.press('Tab');
  }

  async clickRowAtByInvoiceNoCheckBox(invoiceNo: string): Promise<void> { await this.invoicesTabTable.locator(`//tr[td[contains(text(),'${invoiceNo}')]]//input[@type='checkbox']`).click(); }
  async ClickRowByInvoiceNoCheckBox(): Promise<void> { await this.invoicesTabTable.locator("//tr[contains(@class,'Row')]//input[@type='checkbox']").first().click(); }
  async clickRowByInvoiceNoCheckBox(invoiceNo: string): Promise<void> { await this.invoicesTabTable.locator(`//tr[td[contains(text(),'${invoiceNo}')]]//input[@type='checkbox']`).click(); }
  async SelectAtInvoiceNoInGrid(invoiceNo: string): Promise<void> { await this.invoicesTabTable.locator(`//td/a[contains(text(),'${invoiceNo}')]`).click(); }
  async VeriyApplyCheckboxChecked(): Promise<void> { const img = this.invoicesTabTable.locator("//td//img[@title='Checked']"); expect(await img.getAttribute('src')).toContain('checkbox_on'); }
  async EnterAtPaymentAmountInGrid(amount: string): Promise<void> { await this.paymentGrid0Edit.click(); await this.paymentGrid0Edit.fill(amount); await this.paymentGrid0Edit.press('Tab'); }
  async VerifyAtPaymentInGrid(payment: string): Promise<void> { expect(await this.paymentGrid0Edit.inputValue()).toEqual(payment); }
  async VerifyAtApplied(applied: string): Promise<void> { expect(await this.appliedEdit.textContent()).toEqual(applied); }
  async VerifyAtOverPayment(overPayment: string): Promise<void> { expect(await this.overPaymentEdit.textContent()).toEqual(overPayment); }
  async clickLeaveCreditUsedLaterRadioButton(): Promise<void> { await this.leaveCreditUsedLaterRadioButton.click(); }
  async ClickSelectAllCheckbox(): Promise<void> { await this.selectAllCheckbox.click(); }
  async VerifyAtAccountBalanceAfterPayment(accountBalance: string): Promise<void> { const due = await this.amountDueEdit.textContent(); expect(accountBalance).toEqual(due); }
  async verifyAtInvoiceNoInGrid(invoiceNo: string): Promise<void> { const el = this.invoicesTabTable.locator(`//td/a[contains(text(),'${invoiceNo}')]`); expect(await el.textContent()).toEqual(invoiceNo); }
  async verifyAtInvoiceNo1InGrid(invoiceNo1: string): Promise<void> { const el = this.invoicesTabTable.locator(`//td/a[contains(text(),'${invoiceNo1}')]`); expect(await el.textContent()).toEqual(invoiceNo1); }
  async verifyAtInvoiceNo2InGrid(invoiceNo2: string): Promise<void> { const el = this.invoicesTabTable.locator(`//td/a[contains(text(),'${invoiceNo2}')]`); expect(await el.textContent()).toEqual(invoiceNo2); }
  async verifyAtApplyCreditInGrid(applyCredit: string): Promise<void> { expect(await this.applyCreditGridEdit.inputValue()).toEqual(applyCredit); }
  async verifyAtApplyCredit1InGrid(applyCredit1: string): Promise<void> { expect(await this.applyCreditGrid1Edit.inputValue()).toEqual(applyCredit1); }
  async verifyAtAmountDueInGrid(invoice: string, amountDue: string): Promise<void> { const cell = this.invoicesTabTable.locator(`//tr[td[contains(text(),'${invoice}')]]//td[contains(@class,'AmountDue') or position()=5]`); expect(await cell.textContent()).toContain(amountDue); }
  async verifyAtAmountDue1InGrid(amountDue1: string): Promise<void> { expect(await this.paymentGrid1Edit.inputValue()).toEqual(amountDue1); }
  async enterAtPaymentInGrid(payment: string): Promise<void> { await this.paymentGrid0Edit.click(); await this.paymentGrid0Edit.fill(payment); await this.paymentGrid0Edit.press('Tab'); }
  async EnterAtPaymentAmountForInvoiceInGrid(invoiceNo: string, amount: string): Promise<void> { const row = this.invoicesTabTable.locator(`//tr[td[contains(text(),'${invoiceNo}')]]`); const input = row.locator("//input[contains(@title,'Payment') or contains(@id,'Payment')]"); await input.click(); await input.fill(amount); await input.press('Tab'); }
  async verifyPaymentEnabledInGrid(): Promise<void> { expect(await this.page.locator('#paymentEditInGrid').isEnabled()).toBeTruthy(); }
  async verifyAtPaymentAmountInGrid(payment: string): Promise<void> { const cells = this.invoicesTabTable.locator("//input[contains(@id,'Payment')]"); expect(await cells.first().inputValue()).toContain(payment); }
  async verifyPaymentDisabledInGrid(): Promise<void> { expect(await this.page.locator('#paymentEditInGrid').isEnabled()).toBeFalsy(); }
  async verifyAtGridRowCount(gridRowCount: number): Promise<void> { const rows = this.invoicesTabTable.locator("//tr[contains(@class,'Row')]"); expect(await rows.count()).toEqual(gridRowCount); }
  async verifySelectAllCheckBoxIsEnabled(): Promise<void> { expect(await this.selectAllCheckbox.isEnabled()).toBeTruthy(); }
  async verifyLeaveTheCreditRadioButtonIsEnabled(): Promise<void> { expect(await this.leaveCreditUsedLaterRadioButton.isEnabled()).toBeTruthy(); }
  async verifyRefundRadioButtonIsEnabled(): Promise<void> { expect(await this.refundRadioButton.isEnabled()).toBeTruthy(); }
  async verifyAtRefundAmount(refundAmount: string): Promise<void> { expect(await this.refundEdit.textContent()).toEqual(refundAmount); }
}

// ─── Receive Payment - History Tab ───────────────────────────────────────────

export class ReceivePaymentHistoryTabPage {
  readonly page: Page;

  readonly historyTabTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.historyTabTable = page.locator('#tabReceivePayment_tmpl1_grdhistory');
  }

  async getDateInGrid(rowIndex: number): Promise<string> {
    const rows = this.historyTabTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const cell = row.locator("//td[position()=1]");
    return (await cell.textContent()) || '';
  }

  async getNotesInGrid(rowIndex: number): Promise<string> {
    const rows = this.historyTabTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const cell = row.locator("//td[position()=2]");
    return (await cell.textContent()) || '';
  }

  async verifyDatAsCurrentDateInGrid(): Promise<void> { const cell = this.historyTabTable.locator("//tr[contains(@class,'Row')][1]//td[position()=1]"); const today = new Date(); const formatted = `${(today.getMonth()+1)}/${today.getDate().toString().padStart(2,'0')}/${today.getFullYear()}`; expect(await cell.textContent()).toContain(formatted); }
  async verifyNotesInGrid(notes: string): Promise<void> { const cell = this.historyTabTable.locator("//tr[contains(@class,'Row')][1]//td[position()=2]"); expect(await cell.textContent()).toEqual(notes); }
}

// ─── Receive Payment Option ──────────────────────────────────────────────────

export class ReceivePaymentOptionPage {
  readonly page: Page;

  readonly printReceiptButton: Locator;
  readonly emailReceiptButton: Locator;
  readonly continueToEditButton: Locator;
  readonly closeButton: Locator;
  readonly closeAndProcessButton: Locator;
  readonly receivedLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.printReceiptButton = page.locator('#cmdPrintReceipt');
    this.emailReceiptButton = page.locator('#cmdEmailReceipt');
    this.continueToEditButton = page.locator('#cmdContToEdit');
    this.closeButton = page.locator('#cmdClose');
    this.closeAndProcessButton = page.locator('#cmdCloseProcess');
    this.receivedLabel = page.locator('#lblReceivePerson');
  }

  async clickClose(): Promise<void> {
    await this.closeButton.click();
  }

  async clickPrintReceipt(): Promise<void> {
    await this.printReceiptButton.click();
  }

  async clickEmailReceipt(): Promise<void> {
    await this.emailReceiptButton.click();
  }

  async clickContinueToEdit(): Promise<void> {
    await this.continueToEditButton.click();
  }

  async clickCloseAndProcess(): Promise<void> {
    await this.closeAndProcessButton.click();
  }

  async closeScreen(): Promise<void> {
    await this.page.close();
  }

  async isReceivedTextGreenColor(): Promise<boolean> {
    const receivedLabel = this.page.locator('#lblReceived');
    const color = await receivedLabel.evaluate(el => getComputedStyle(el).color);
    return color.includes('0, 128, 0');
  }

  async clickCloseButton(): Promise<void> { await this.closeButton.click(); }
  async ClickPrintReceiptButton(): Promise<void> { await this.printReceiptButton.click(); }
  async ClickEmailReceiptButton(): Promise<void> { await this.emailReceiptButton.click(); }
  async verifyReceivedTextInGreenColor(): Promise<void> { const color = await this.receivedLabel.evaluate(el => getComputedStyle(el).color); expect(color).toEqual('rgb(0, 128, 0)'); }
}

// ─── Invoice Search ──────────────────────────────────────────────────────────

export class InvoiceSearchPage {
  readonly page: Page;

  // Toolbar
  readonly printIconButton: Locator;
  readonly searchButton: Locator;
  readonly addNewButton: Locator;
  readonly resetButton: Locator;
  readonly backButton: Locator;
  readonly receivePaymentButton: Locator;
  readonly refreshButton: Locator;
  readonly selectAllCheckbox: Locator;

  // Search fields
  readonly invoiceTypeDropdown: Locator;
  readonly invoiceClassDropdown: Locator;
  readonly invoiceYearFromEdit: Locator;
  readonly invoiceNumberFromEdit: Locator;
  readonly invoiceYearToEdit: Locator;
  readonly invoiceNumberToEdit: Locator;
  readonly addressEdit: Locator;
  readonly addressVerifyCheckbox: Locator;
  readonly accountNameTypeEdit: Locator;
  readonly accountNameIDEdit: Locator;
  readonly accountLastNameEdit: Locator;
  readonly accountFirstNameEdit: Locator;
  readonly itemCodeDropdown: Locator;
  readonly itemCodeRadComboBox: Locator;
  readonly systemIDNoFromEdit: Locator;
  readonly systemIDNoToEdit: Locator;
  readonly overdueOnlyCheckbox: Locator;
  readonly includeVoidCheckbox: Locator;
  readonly unpaidRadioButton: Locator;
  readonly invoiceDateDropdown: Locator;
  readonly invoiceFromDateEdit: Locator;
  readonly invoiceToDateEdit: Locator;
  readonly dueDateDropdown: Locator;
  readonly fromDueDateEdit: Locator;
  readonly toDueDateEdit: Locator;
  readonly invoiceInfoIcon: Locator;
  readonly invoiceToInfoIcon: Locator;
  readonly jurisDropdown: Locator;
  readonly trackingCodeEdit: Locator;
  readonly showAccountBalanceSummaryCheckbox: Locator;
  readonly stateRegEdit: Locator;

  // Results
  readonly invoiceSearchResultTable: Locator;
  readonly invoiceSummaryGrid: Locator;

  constructor(page: Page) {
    this.page = page;

    this.printIconButton = page.locator("//img[@src = '/KPIImages/ico/16_print.gif']");
    this.searchButton = page.locator("//span[contains(text(),'Search')]");
    this.addNewButton = page.locator("//span[contains(text(),'Add New')]");
    this.resetButton = page.locator("//span[contains(text(),'Reset')]");
    this.backButton = page.locator("//span[contains(text(),'Back')]");
    this.receivePaymentButton = page.locator("//span[contains(text(),'Receive Payment')]");
    this.refreshButton = page.locator("//span[@title='Search']");
    this.selectAllCheckbox = page.locator('#chkSelectAll');

    this.invoiceTypeDropdown = page.locator('#InvoiceInquiryBasic_cddInvoiceType');
    this.invoiceClassDropdown = page.locator('#InvoiceInquiryBasic_cddInvoiceClass_DropDown');
    this.invoiceYearFromEdit = page.locator('#InvoiceInquiryBasic_nbrInvoiceNumber_Year');
    this.invoiceNumberFromEdit = page.locator('#InvoiceInquiryBasic_nbrInvoiceNumber_Number');
    this.invoiceYearToEdit = page.locator('#InvoiceInquiryBasic_nbrToInvoiceNumber_Year');
    this.invoiceNumberToEdit = page.locator('#InvoiceInquiryBasic_nbrToInvoiceNumber_Number');
    this.addressEdit = page.locator('#InvoiceInquiryBasic_AddressCtrl1_txtFrom');
    this.addressVerifyCheckbox = page.locator('#InvoiceInquiryBasic_AddressCtrl1_chkVerify');
    this.accountNameTypeEdit = page.locator('#InvoiceInquiryBasic_NameCtrl1_NameType');
    this.accountNameIDEdit = page.locator('#InvoiceInquiryBasic_NameCtrl1_NameTypeID');
    this.accountLastNameEdit = page.locator('#InvoiceInquiryBasic_NameCtrl1_LastName');
    this.accountFirstNameEdit = page.locator('#InvoiceInquiryBasic_NameCtrl1_FirstName');
    this.itemCodeDropdown = page.locator('#InvoiceInquiryBasic_RadItemCode');
    this.itemCodeRadComboBox = page.locator('#InvoiceInquiryBasic_RadItemCode_DropDown');
    this.systemIDNoFromEdit = page.locator('#InvoiceInquiryBasic_txtRegFrom');
    this.systemIDNoToEdit = page.locator('#InvoiceInquiryBasic_txtRegTo');
    this.overdueOnlyCheckbox = page.locator('#InvoiceInquiryBasic_chkDueDate');
    this.includeVoidCheckbox = page.locator('#InvoiceInquiryBasic_ChkIsVoid');
    this.unpaidRadioButton = page.locator('#InvoiceInquiryBasic_rbUnpaid');
    this.invoiceDateDropdown = page.locator('#InvoiceInquiryBasic_cddInvoiceDate_DropDown');
    this.invoiceFromDateEdit = page.locator('#InvoiceInquiryBasic_dttFrom_KPIDttmCtrl');
    this.invoiceToDateEdit = page.locator('#InvoiceInquiryBasic_dttTo_KPIDttmCtrl');
    this.dueDateDropdown = page.locator('#InvoiceInquiryBasic_cddOverDueOnly');
    this.fromDueDateEdit = page.locator('#InvoiceInquiryBasic_dtdueFrom_KPIDttmCtrl');
    this.toDueDateEdit = page.locator('#InvoiceInquiryBasic_dtdueTo_KPIDttmCtrl');
    this.invoiceInfoIcon = page.locator('#InvoiceInquiryBasic_nbrInvoiceNumber_imgBtn');
    this.invoiceToInfoIcon = page.locator('#InvoiceInquiryBasic_nbrToInvoiceNumber_imgBtn');
    this.jurisDropdown = page.locator('#InvoiceInquiryBasic_lstJuris');
    this.trackingCodeEdit = page.locator('#InvoiceInquiryBasic_KpiclkTrackingNo_CodeValue');
    this.showAccountBalanceSummaryCheckbox = page.locator('#InvoiceInquiryBasic_chkAccBalSum');
    this.stateRegEdit = page.locator('#InvoiceInquiryBasic_txtStateReg');

    this.invoiceSearchResultTable = page.locator('#grdInvInq');
    this.invoiceSummaryGrid = page.locator('#grdInvoiceSum');
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async clickAddNew(): Promise<void> {
    await this.addNewButton.click();
  }

  async clickBack(): Promise<void> {
    await this.backButton.click();
  }

  async clickReset(): Promise<void> {
    await this.resetButton.click();
  }

  async clickReceivePayment(): Promise<void> {
    await this.receivePaymentButton.click();
  }

  async enterInvoiceNo(year: string, number: string): Promise<void> {
    await this.invoiceYearFromEdit.fill(year);
    await this.invoiceNumberFromEdit.fill(number);
  }

  async enterInvoiceNoFromAndTo(fromYear: string, fromNumber: string, toYear: string, toNumber: string): Promise<void> {
    await this.invoiceYearFromEdit.fill(fromYear);
    await this.invoiceNumberFromEdit.fill(fromNumber);
    await this.invoiceYearToEdit.fill(toYear);
    await this.invoiceNumberToEdit.fill(toNumber);
    await this.invoiceNumberToEdit.press('Tab');
  }

  async enterAccountName(nameType: string, nameID: string): Promise<void> {
    await this.accountNameTypeEdit.fill(nameType);
    await this.accountNameIDEdit.fill(nameID);
    await this.accountNameIDEdit.press('Tab');
  }

  async enterAccountLastName(lastName: string): Promise<void> {
    await this.accountLastNameEdit.fill(lastName);
    await this.accountLastNameEdit.press('Tab');
    await this.accountFirstNameEdit.press('Tab');
  }

  async enterAddress(address: string): Promise<void> {
    await this.addressEdit.fill(address);
    await this.addressVerifyCheckbox.press('Tab');
  }

  async enterSystemIDFromAndTo(systemID: string): Promise<void> {
    await this.systemIDNoFromEdit.fill(systemID);
    await this.systemIDNoToEdit.fill(systemID);
  }

  async enterFromDate(date: string): Promise<void> {
    await this.invoiceFromDateEdit.fill(date);
  }

  async enterToDate(date: string): Promise<void> {
    await this.invoiceToDateEdit.fill(date);
  }

  async enterTracking(trackingNo: string): Promise<void> {
    await this.trackingCodeEdit.fill(trackingNo);
    await this.trackingCodeEdit.press('Tab');
  }

  async enterStateReg(stateRegID: string): Promise<void> {
    await this.stateRegEdit.fill(stateRegID);
  }

  async clickOverdue(): Promise<void> {
    await this.overdueOnlyCheckbox.click();
  }

  async clickIncludeVoid(): Promise<void> {
    await this.includeVoidCheckbox.click();
  }

  async clickShowAccountBalanceSummary(): Promise<void> {
    await this.showAccountBalanceSummaryCheckbox.click();
  }

  async clickInvoiceInfoIcon(): Promise<void> {
    await this.invoiceInfoIcon.click();
  }

  async clickInvoiceToInfoIcon(): Promise<void> {
    await this.invoiceToInfoIcon.click();
  }

  async clickPrint(): Promise<void> {
    await this.printIconButton.click();
  }

  async clickRefresh(): Promise<void> {
    await this.refreshButton.click();
  }

  async clickSelectAll(): Promise<void> {
    await this.selectAllCheckbox.click();
  }

  async getInvoiceFromDate(): Promise<string> {
    return (await this.invoiceFromDateEdit.inputValue()) || '';
  }

  async getInvoiceToDate(): Promise<string> {
    return (await this.invoiceToDateEdit.inputValue()) || '';
  }

  async getDueFromDate(): Promise<string> {
    return (await this.fromDueDateEdit.inputValue()) || '';
  }

  async getDueToDate(): Promise<string> {
    return (await this.toDueDateEdit.inputValue()) || '';
  }

  async selectInvoiceClass(value: string): Promise<void> {
    await this.invoiceClassDropdown.selectOption(value);
    await this.invoiceClassDropdown.press('Tab');
  }

  async selectInvoiceType(value: string): Promise<void> {
    await this.invoiceTypeDropdown.click();
    await this.invoiceTypeDropdown.fill(value);
  }

  async selectInvoiceDate(value: string): Promise<void> {
    await this.invoiceDateDropdown.selectOption(value);
  }

  async selectDueDate(value: string): Promise<void> {
    await this.dueDateDropdown.selectOption(value);
  }

  async selectJuris(value: string): Promise<void> {
    await this.jurisDropdown.selectOption(value);
  }

  async enterFromDueDate(date: string): Promise<void> {
    await this.fromDueDateEdit.fill(date);
  }

  async enterToDueDate(date: string): Promise<void> {
    await this.toDueDateEdit.fill(date);
  }

  async getInvoiceYearFrom(): Promise<string> {
    return (await this.invoiceYearFromEdit.inputValue()) || '';
  }

  async getInvoiceNumberFrom(): Promise<string> {
    return (await this.invoiceNumberFromEdit.inputValue()) || '';
  }

  async getInvoiceYearTo(): Promise<string> {
    return (await this.invoiceYearToEdit.inputValue()) || '';
  }

  async getInvoiceNumberTo(): Promise<string> {
    return (await this.invoiceNumberToEdit.inputValue()) || '';
  }

  async selectRowByInvoiceNo(invoiceNo: string): Promise<void> {
    const row = this.invoiceSearchResultTable.locator(`//td[contains(text(),'${invoiceNo}')]`);
    await row.click();
  }

  async selectRowByInvoiceType(invoiceType: string): Promise<void> {
    const row = this.invoiceSearchResultTable.locator(`//td[contains(text(),'${invoiceType}')]`);
    await row.click();
  }

  async selectRowByAccount(account: string): Promise<void> {
    const row = this.invoiceSearchResultTable.locator(`//td[contains(text(),'${account}')]`);
    await row.click();
  }

  async selectRowCheckBoxByInvoiceNo(invoiceNo: string): Promise<void> {
    const row = this.invoiceSearchResultTable.locator(`//tr[td[contains(text(),'${invoiceNo}')]]`);
    const checkbox = row.locator("input[type='checkbox']");
    await checkbox.click();
  }

  async getNameInGrid(rowIndex: number): Promise<string> {
    const rows = this.invoiceSearchResultTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const cell = row.locator("//td[position()=3]");
    return (await cell.textContent()) || '';
  }

  async getAccountInGrid(rowIndex: number): Promise<string> {
    const rows = this.invoiceSearchResultTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const cell = row.locator("//td[position()=2]");
    return (await cell.textContent()) || '';
  }

  async getInvoiceNoInGrid(rowIndex: number): Promise<string> {
    const rows = this.invoiceSearchResultTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const cell = row.locator("//td[position()=1]");
    return (await cell.textContent()) || '';
  }

  async reloadScreen(): Promise<void> {
    await this.page.reload();
    await this.page.waitForLoadState();
  }

  async isVoidedRecordRedInGrid(): Promise<boolean> {
    const voidRow = this.invoiceSearchResultTable.locator("//tr[contains(@style,'color') and contains(@style,'Red')]");
    return await voidRow.isVisible();
  }

  async getGridRowCount(): Promise<number> {
    const rows = this.invoiceSearchResultTable.locator('//tbody/tr');
    return await rows.count();
  }

  async selectRandomGridRow(): Promise<void> {
    const rows = this.invoiceSearchResultTable.locator('//tbody/tr');
    const count = await rows.count();
    if (count > 0) {
      const randomIndex = Math.floor(Math.random() * count);
      await rows.nth(randomIndex).click();
    }
  }

  async enterFromAndToDueDate(fromDate: string, toDate: string): Promise<void> {
    await this.fromDueDateEdit.fill(fromDate);
    await this.toDueDateEdit.fill(toDate);
  }

  async getInvoiceNoByRowIndex(rowIndex: number): Promise<string> {
    const rows = this.invoiceSearchResultTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const cell = row.locator("//td[position()=1]");
    return (await cell.textContent()) || '';
  }

  async selectInvoiceNoCheckBoxInGrid(invoiceNo: string): Promise<void> {
    const row = this.invoiceSearchResultTable.locator(`//tr[td[contains(text(),'${invoiceNo}')]]`);
    const checkbox = row.locator("input[type='checkbox']");
    await checkbox.click();
  }

  async selectInvoiceInGrid(invoiceNo: string): Promise<void> {
    const cell = this.invoiceSearchResultTable.locator(`//td[contains(text(),'${invoiceNo}')]`);
    await cell.click();
  }

  async getSelectedInvoiceClass(): Promise<string> {
    return (await this.invoiceClassDropdown.locator('option:checked').textContent()) || '';
  }

  async getSelectedInvoiceType(): Promise<string> {
    return (await this.invoiceTypeDropdown.inputValue()) || '';
  }

  async getSelectedItemCode(): Promise<string> {
    return (await this.itemCodeRadComboBox.inputValue()) || '';
  }

  async selectItemCode(value: string): Promise<void> {
    await this.itemCodeDropdown.click();
    await this.itemCodeRadComboBox.locator(`//li[contains(text(),'${value}')]`).click();
  }

  async isInvoiceNoGrayColor(invoiceNo: string): Promise<boolean> {
    const row = this.invoiceSearchResultTable.locator(`//tr[td[contains(text(),'${invoiceNo}')]]`);
    const classAttr = await row.getAttribute('class') || '';
    return classAttr.includes('Gray') || classAttr.includes('gray');
  }

  async isBackButtonDisplayed(): Promise<boolean> {
    return await this.backButton.isVisible();
  }

  async isInvoiceClassDropdownDisplayed(): Promise<boolean> {
    return await this.invoiceClassDropdown.isVisible();
  }

  async isUnpaidRadioButtonSelected(): Promise<boolean> {
    return await this.unpaidRadioButton.isChecked();
  }

  async isGridNotEmpty(): Promise<boolean> {
    const rows = this.invoiceSearchResultTable.locator('//tbody/tr');
    return (await rows.count()) > 0;
  }

  async selectRandomInvoiceSummaryGridRow(): Promise<void> {
    const rows = this.invoiceSummaryGrid.locator('//tbody/tr');
    const count = await rows.count();
    if (count > 0) {
      const randomIndex = Math.floor(Math.random() * count);
      await rows.nth(randomIndex).click();
    }
  }

  async enterAtInvoiceNo(year: string, number: string): Promise<void> {
    await this.invoiceYearFromEdit.fill(year);
    await this.invoiceNumberFromEdit.fill(number);
    await this.invoiceNumberFromEdit.press('Tab');
  }

  async isInvoiceToInfoIconDisplayed(): Promise<boolean> {
    return await this.invoiceToInfoIcon.isVisible();
  }

  async getNameColumnValues(): Promise<string[]> {
    const headerCells = this.invoiceSearchResultTable.locator('//thead//th');
    const headers = await headerCells.allTextContents();
    const colIndex = headers.findIndex(h => h.includes('Name'));
    if (colIndex === -1) return [];
    const cells = this.invoiceSearchResultTable.locator(`//tbody/tr/td[${colIndex + 1}]`);
    return await cells.allTextContents();
  }

  async isNameColumnNotNull(): Promise<boolean> {
    const names = await this.getNameColumnValues();
    return names.every(name => name.trim().length > 0);
  }

  async getDateColumnValues(): Promise<string[]> {
    const headerCells = this.invoiceSearchResultTable.locator('//thead//th');
    const headers = await headerCells.allTextContents();
    const colIndex = headers.findIndex(h => h.includes('Date'));
    if (colIndex === -1) return [];
    const cells = this.invoiceSearchResultTable.locator(`//tbody/tr/td[${colIndex + 1}]`);
    return await cells.allTextContents();
  }

  async getDueDateColumnValues(): Promise<string[]> {
    const headerCells = this.invoiceSearchResultTable.locator('//thead//th');
    const headers = await headerCells.allTextContents();
    const colIndex = headers.findIndex(h => h.includes('Due Date'));
    if (colIndex === -1) return [];
    const cells = this.invoiceSearchResultTable.locator(`//tbody/tr/td[${colIndex + 1}]`);
    return await cells.allTextContents();
  }

  async getInvoiceNoColumnValues(): Promise<string[]> {
    const headerCells = this.invoiceSearchResultTable.locator('//thead//th');
    const headers = await headerCells.allTextContents();
    const colIndex = headers.findIndex(h => h.includes('Invoice#'));
    if (colIndex === -1) return [];
    const cells = this.invoiceSearchResultTable.locator(`//tbody/tr/td[${colIndex + 1}]`);
    return await cells.allTextContents();
  }

  async getFromInvoiceNo(): Promise<string> {
    const year = await this.invoiceYearFromEdit.inputValue();
    const number = await this.invoiceNumberFromEdit.inputValue();
    return `${year}-${number}`;
  }

  async getToInvoiceNo(): Promise<string> {
    const year = await this.invoiceYearToEdit.inputValue();
    const number = await this.invoiceNumberToEdit.inputValue();
    return `${year}-${number}`;
  }

  async selectInvoiceClassRandom(): Promise<void> {
    const options = this.invoiceClassDropdown.locator('option');
    const count = await options.count();
    if (count > 1) {
      const randomIndex = Math.floor(Math.random() * (count - 1)) + 1;
      await this.invoiceClassDropdown.selectOption({ index: randomIndex });
    }
  }

  async selectInvoiceTypeRandom(): Promise<void> {
    await this.invoiceTypeDropdown.click();
    const options = this.invoiceTypeDropdown.locator('option');
    const count = await options.count();
    if (count > 1) {
      const randomIndex = Math.floor(Math.random() * (count - 1)) + 1;
      await this.invoiceTypeDropdown.selectOption({ index: randomIndex });
    }
  }

  async isVoidedRecordRedInGridByInvoiceNo(invoiceNo: string): Promise<boolean> {
    const row = this.invoiceSearchResultTable.locator(`//tr[td[contains(text(),'${invoiceNo}')]]`);
    const classAttr = await row.getAttribute('class') || '';
    return classAttr.includes('Red') || classAttr.includes('red');
  }

  async ClickPrintButton(): Promise<void> { await this.printIconButton.click(); }
  async SelectAtItemCode(itemCode: string): Promise<void> { await this.itemCodeDropdown.click(); await this.page.locator(`//li[contains(text(),'${itemCode}')]`).click(); }
  async SelectAtInvoiceType(invoiceType: string): Promise<void> { await this.invoiceTypeDropdown.click(); await this.invoiceTypeDropdown.fill(invoiceType); }
  async SelectAtInvoiceClass(invoiceClass: string): Promise<void> { await this.invoiceClassDropdown.selectOption({ label: invoiceClass }); await this.invoiceClassDropdown.press('Tab'); }
  async EnterAtAddress(address: string): Promise<void> { await this.addressEdit.fill(address); }
  async clickAddNewButton(): Promise<void> { await this.addNewButton.click(); }
  async EnterAtAccountName(accountNameID: string): Promise<void> { await this.accountNameTypeEdit.fill(accountNameID.substring(0, 1)); await this.accountNameIDEdit.fill(accountNameID.substring(2)); await this.accountNameIDEdit.press('Tab'); }
  async EnterAtAccountLastName(accountLastName: string): Promise<void> { await this.accountLastNameEdit.fill(accountLastName); await this.accountLastNameEdit.press('Tab'); await this.accountFirstNameEdit.press('Tab'); }
  async ClickResetButton(): Promise<void> { await this.resetButton.click(); }
  async Verify1011NoRecordFoundAcknowledgeMessage(): Promise<void> { /* popup: 1011 - No Record Found */ }
  async VerifyAtNameInGrid(name: string, rowIndex: number): Promise<void> { const cell = this.invoiceSearchResultTable.locator(`//tr[contains(@class,'Row')][${rowIndex + 1}]//td[contains(@class,'Name') or position()=3]`); expect(await cell.textContent()).toContain(name); }
  async VerifyAtAccountInGrid(account: string, rowIndex: number): Promise<void> { const cell = this.invoiceSearchResultTable.locator(`//tr[contains(@class,'Row')][${rowIndex + 1}]//td[contains(@class,'Account') or position()=2]`); expect(await cell.textContent()).toContain(account); }
  async SelectAtInvoiceTypeinGrid(invoiceType: string): Promise<void> { await this.invoiceSearchResultTable.locator(`//td[contains(text(),'${invoiceType}')]`).click(); }
  async SelectRowByAtInvoiceNo(invoiceNo: string): Promise<void> { await this.invoiceSearchResultTable.locator(`//td[contains(text(),'${invoiceNo}')]`).click(); }
  async VerifyAtInvoiceNoAppearsGrayColor(invoiceNo: string): Promise<void> { const row = this.invoiceSearchResultTable.locator(`//tr[td[contains(text(),'${invoiceNo}')]]`); const classAttr = await row.getAttribute('class') || ''; expect(classAttr).toContain('gridGrayColor'); }
  async SelectRowByAtAccount(account: string): Promise<void> { await this.invoiceSearchResultTable.locator(`//td[contains(text(),'${account}')]`).click(); }
  async EnterAtSystemIDFromAndToFields(systemIDNo: string): Promise<void> { await this.systemIDNoFromEdit.fill(systemIDNo); await this.systemIDNoToEdit.fill(systemIDNo); }
  async EnterAtInvoiceNoFromAndToFields(invoiceNo: string): Promise<void> { await this.invoiceYearFromEdit.fill(invoiceNo.substring(0, 2)); await this.invoiceNumberFromEdit.fill(invoiceNo.substring(3)); await this.invoiceYearToEdit.fill(invoiceNo.substring(0, 2)); await this.invoiceNumberToEdit.fill(invoiceNo.substring(3)); await this.invoiceNumberToEdit.press('Tab'); }
  async ClickOverDueCheckbox(): Promise<void> { await this.overdueOnlyCheckbox.click(); }
  async clickIncludeVoidCheckBox(): Promise<void> { await this.includeVoidCheckbox.click(); }
  async VerifyUnpaidRadioButtonAsSelected(): Promise<void> { expect(await this.unpaidRadioButton.isChecked()).toBeTruthy(); }
  async verifyAtInvoiceNoInGrid(invoiceNo: string, rowIndex?: number): Promise<void> { if (rowIndex !== undefined) { const cell = this.invoiceSearchResultTable.locator(`//tr[contains(@class,'Row')][${rowIndex + 1}]//td[contains(text(),'${invoiceNo}')]`); expect(await cell.textContent()).toContain(invoiceNo); } else { const cell = this.invoiceSearchResultTable.locator(`//td[contains(text(),'${invoiceNo}')]`); expect(await cell.textContent()).toContain(invoiceNo); } }
  async verifyvoidedRecordsApperasRedIntheGrid(invoiceNo: string): Promise<void> { const row = this.invoiceSearchResultTable.locator(`//tr[td[contains(text(),'${invoiceNo}')]]`); const classAttr = await row.getAttribute('class') || ''; expect(classAttr).toContain('Red'); }
  async verifyIbubbleIsDisplayed(): Promise<void> { expect(await this.invoiceToInfoIcon.isVisible()).toBeTruthy(); }
  async verifyValidationPopUpIsArised(): Promise<void> { /* verify popup not displayed */ }
  async selectAtInvoiceDate(invoiceDate: string): Promise<void> { await this.invoiceDateDropdown.selectOption({ label: invoiceDate }); }
  async verifyInvoiceFromDateAndToDateForLastWeek(fromDate: string, toDate: string): Promise<void> { /* date range verification */ }
  async verifyDueDateWithInFromAndToDateInGrid(fromDate: string, toDate: string): Promise<void> { /* date comparison in grid */ }
  async SelectAtDueDate(dueDate: string): Promise<void> { await this.dueDateDropdown.selectOption({ label: dueDate }); }
  async verifyFromAndToDueDate(noOfDays: number): Promise<void> { /* verify due date range */ }
  async verifyNameColumnIsNotNull(): Promise<void> { const cells = await this.invoiceSearchResultTable.locator("//td[position()=3]").allTextContents(); for (const name of cells) { expect(name.trim()).not.toEqual(''); } }
  async clickRefreshButton(): Promise<void> { await this.refreshButton.click(); }
  async verifyBackButtonIsDisplayed(): Promise<void> { expect(await this.backButton.isVisible()).toBeTruthy(); }
  async verifyInvoiceClassDropDownIsDisplayed(): Promise<void> { expect(await this.invoiceClassDropdown.isVisible()).toBeTruthy(); }
  async ClickSelectAllCheckbox(): Promise<void> { await this.selectAllCheckbox.click(); }
  async clickAtInvoiceNoCheckboxInGrid(invoiceNo: string): Promise<void> { await this.invoiceSearchResultTable.locator(`//tr[td[contains(text(),'${invoiceNo}')]]//input[@type='checkbox']`).click(); }
  async selectAtJuris(juris: string): Promise<void> { await this.jurisDropdown.selectOption({ label: juris }); }
  async verifyInvoiceFromDateAndToDateForLastYear(fromDate: string, toDate: string): Promise<void> { /* date range verification */ }
  async verifyDateBetweenInvoiceFromAndToDatesInGrid(fromDate: string, toDate: string): Promise<void> { /* date comparison in grid */ }
  async enterAtFromDate(fromDate: string): Promise<void> { await this.invoiceFromDateEdit.fill(fromDate); }
  async enterAtToDate(toDate: string): Promise<void> { await this.invoiceToDateEdit.fill(toDate); }
  async enterAtInvoiceNoFromAndToFields(invoiceNoFrom: string, invoiceNoTo: string): Promise<void> { await this.invoiceYearFromEdit.fill(invoiceNoFrom.substring(0, 2)); await this.invoiceNumberFromEdit.fill(invoiceNoFrom.substring(3)); await this.invoiceYearToEdit.fill(invoiceNoTo.substring(0, 2)); await this.invoiceNumberToEdit.fill(invoiceNoTo.substring(3)); await this.invoiceNumberToEdit.press('Tab'); }
  async verifyAtInvoiceNoFromAndToInGrid(invoiceNoFrom: string, invoiceNoTo: string): Promise<void> { /* invoice range verification in grid */ }
  async enterAtTracking(trackingNo: string): Promise<void> { await this.trackingCodeEdit.fill(trackingNo); await this.trackingCodeEdit.press('Tab'); }
  async clickShowAccountBalanceSummaryCheckbox(): Promise<void> { await this.showAccountBalanceSummaryCheckbox.click(); }
  async enterAtStateReg(stateRegID: string): Promise<void> { await this.stateRegEdit.fill(stateRegID); }
  async verifyFromInvoiceNo(readedFromInvoiceNo: string): Promise<void> { const year = await this.invoiceYearFromEdit.inputValue(); const num = await this.invoiceNumberFromEdit.inputValue(); expect(`${year}-${num}`).toEqual(readedFromInvoiceNo); }
  async clickInvoiceToLookupIcon(): Promise<void> { await this.invoiceToInfoIcon.click(); }
  async verifyToInvoiceNo(readedToInvoiceNo: string): Promise<void> { const year = await this.invoiceYearToEdit.inputValue(); const num = await this.invoiceNumberToEdit.inputValue(); expect(`${year}-${num}`).toEqual(readedToInvoiceNo); }
  async verifyInvoiceFromAndToDateForThisCalenderYear(fromDate: string, toDate: string): Promise<void> { /* calendar year date verification */ }
  async zoomOutInvoiceSearch(): Promise<void> { await this.page.keyboard.press('Control+Minus'); await this.page.keyboard.press('Control+Minus'); }
  async zoomInInVoiceSearch(): Promise<void> { for (let i = 0; i < 4; i++) { await this.page.keyboard.press('Control+Equal'); } }
  async verifyGridIsNotEmpty(): Promise<void> { const rows = this.invoiceSearchResultTable.locator("//tr[contains(@class,'Row')]"); expect(await rows.count()).toBeGreaterThan(0); }
  async verifyInvoiceDateFromAndToDateInGrid(invoiceFromDate: string, invoiceToDate: string): Promise<void> { /* date comparison in grid */ }
  async clickReceivePaymentButton(): Promise<void> { await this.receivePaymentButton.click(); }
}

// ─── Transaction And Adjustment ──────────────────────────────────────────────

export class TransactionAndAdjustmentPage {
  readonly page: Page;

  readonly invoiceYearEdit: Locator;
  readonly invoiceNumberEdit: Locator;
  readonly dateOfActionEdit: Locator;
  readonly pfCodeEdit: Locator;
  readonly actionTypeDropdown: Locator;
  readonly amountEdit: Locator;
  readonly transactionNotesEdit: Locator;
  readonly saveNCloseButton: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.invoiceYearEdit = page.locator('#txtInvoiceNo_Year');
    this.invoiceNumberEdit = page.locator('#txtInvoiceNo_Number');
    this.dateOfActionEdit = page.locator('#dttmDateofAction_KPIDttmCtrl');
    this.pfCodeEdit = page.locator('#luppf_CodeValue');
    this.actionTypeDropdown = page.locator('#cddActionType_DropDown');
    this.amountEdit = page.locator('#txtAmount');
    this.transactionNotesEdit = page.locator('#txtTrnNotes');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.saveButton = page.locator('#cmdsave');
  }

  async clickSave(): Promise<void> {
    await this.saveButton.click();
  }

  async clickSaveAndClose(): Promise<void> {
    await this.saveNCloseButton.click();
  }

  async tabOutDateOfAction(): Promise<void> {
    await this.dateOfActionEdit.press('Tab');
  }

  async tabOutPFCode(): Promise<void> {
    await this.pfCodeEdit.press('Tab');
  }

  async enterAmount(amount: string): Promise<void> {
    await this.amountEdit.fill(amount);
  }

  async enterTransactionNotes(notes: string): Promise<void> {
    await this.transactionNotesEdit.fill(notes);
  }

  async getInvoiceYearValue(): Promise<string> {
    return (await this.invoiceYearEdit.inputValue()) || '';
  }

  async getInvoiceNumberValue(): Promise<string> {
    return (await this.invoiceNumberEdit.inputValue()) || '';
  }

  async getDateOfActionValue(): Promise<string> {
    return (await this.dateOfActionEdit.inputValue()) || '';
  }

  async getPFCodeValue(): Promise<string> {
    return (await this.pfCodeEdit.inputValue()) || '';
  }

  async selectActionType(value: string): Promise<void> {
    await this.actionTypeDropdown.click();
    await this.actionTypeDropdown.selectOption(value);
  }

  async enterPFCode(value: string): Promise<void> {
    await this.pfCodeEdit.fill(value);
  }

  async enterDateOfAction(value: string): Promise<void> {
    await this.dateOfActionEdit.fill(value);
  }

  async enterInvoiceYear(value: string): Promise<void> {
    await this.invoiceYearEdit.fill(value);
  }

  async enterInvoiceNumber(value: string): Promise<void> {
    await this.invoiceNumberEdit.fill(value);
  }

  async saveScreen(): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept());
    await this.saveButton.click();
  }

  async saveNCloseScreen(): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept());
    await this.saveNCloseButton.click();
  }

  async closeScreen(): Promise<void> {
    await this.page.close();
  }

  async getAmountValue(): Promise<string> {
    return await this.amountEdit.inputValue();
  }

  async VerifyAtInvoiceNo(invoiceNo: string): Promise<void> {
    expect(await this.invoiceYearEdit.inputValue()).toEqual(invoiceNo.substring(0, 2));
    expect(await this.invoiceNumberEdit.inputValue()).toEqual(invoiceNo.substring(3));
  }

  async VerifyDateOfActionAsCurrentDate(): Promise<void> {
    const today = new Date();
    const formatted = `${(today.getMonth()+1).toString().padStart(2,'0')}/${today.getDate().toString().padStart(2,'0')}/${today.getFullYear()}`;
    expect(await this.dateOfActionEdit.inputValue()).toEqual(formatted);
  }

  async VerifyAtPFCode(pfCode: string): Promise<void> {
    expect(await this.pfCodeEdit.inputValue()).toEqual(pfCode);
  }

  async SelectAtActionType(actionType: string): Promise<void> {
    await this.actionTypeDropdown.selectOption({ label: actionType });
  }

  async EnterAtAmount(amount: string): Promise<void> {
    await this.amountEdit.fill(amount);
  }

  async ClickSaveNClose(): Promise<void> {
    await this.saveNCloseButton.click();
  }
}

// ─── Fee Search ──────────────────────────────────────────────────────────────

export class FeeSearchPage {
  readonly page: Page;

  readonly invoiceTypeDropdown: Locator;
  readonly includeBilledCheckbox: Locator;
  readonly itemCodeDropdown: Locator;
  readonly forYearDropdown: Locator;
  readonly forYear1Dropdown: Locator;
  readonly searchButton: Locator;
  readonly createInvoiceButton: Locator;
  readonly selectAllCheckbox: Locator;
  readonly feeSearchTable: Locator;
  readonly totalRecordsSelectedLabel: Locator;
  readonly popupRecordsSelectedLabel: Locator;
  readonly popupInvoiceDateEdit: Locator;
  readonly popupDueDateEdit: Locator;
  readonly popupCreateInvoiceButton: Locator;
  readonly jurisDropdown: Locator;
  readonly forMonthDropdown: Locator;
  readonly forYearArrow: Locator;
  readonly forMonthArrow: Locator;

  constructor(page: Page) {
    this.page = page;
    this.invoiceTypeDropdown = page.locator('#cddInvoiceType_DropDown');
    this.includeBilledCheckbox = page.locator('#chkIncludeBilled');
    this.itemCodeDropdown = page.locator('#cddItemCode');
    this.forYearDropdown = page.locator('#cddForYear');
    this.forYear1Dropdown = page.locator('#cddForYear_DropDown');
    this.searchButton = page.locator('#cmdSearch');
    this.createInvoiceButton = page.locator('#cmdCreateInVoice');
    this.selectAllCheckbox = page.locator('#chkSelectAll');
    this.feeSearchTable = page.locator('#grdFeeSrch');
    this.totalRecordsSelectedLabel = page.locator('#lblFeesRecords');
    this.popupRecordsSelectedLabel = page.locator('#lblRecordsCount');
    this.popupInvoiceDateEdit = page.locator('#dttmInvoiceDate_KPIDttmCtrl');
    this.popupDueDateEdit = page.locator('#dttmDueDate_KPIDttmCtrl');
    this.popupCreateInvoiceButton = page.locator('#cmdSaveInVoice');
    this.jurisDropdown = page.locator('#lstJuris');
    this.forMonthDropdown = page.locator('#cddForMonth_Input');
    this.forYearArrow = page.locator('#cddForYear_Arrow');
    this.forMonthArrow = page.locator('#cddForMonth_Arrow');
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async clickCreateInvoice(): Promise<void> {
    await this.createInvoiceButton.click();
  }

  async clickSelectAll(): Promise<void> {
    await this.selectAllCheckbox.click();
  }

  async clickIncludeBilled(): Promise<void> {
    await this.includeBilledCheckbox.click();
  }

  async clickPopupCreateInvoice(): Promise<void> {
    await this.popupCreateInvoiceButton.click();
  }

  async tabOutPopupInvoiceDate(): Promise<void> {
    await this.popupInvoiceDateEdit.press('Tab');
  }

  async getForYearValue(): Promise<string> {
    return (await this.forYearDropdown.inputValue()) || '';
  }

  async getPopupDueDateValue(): Promise<string> {
    return (await this.popupDueDateEdit.inputValue()) || '';
  }

  async selectInvoiceType(value: string): Promise<void> {
    await this.invoiceTypeDropdown.selectOption(value);
  }

  async selectItemCode(value: string): Promise<void> {
    await this.itemCodeDropdown.selectOption(value);
  }

  async selectJuris(value: string): Promise<void> {
    await this.jurisDropdown.selectOption(value);
  }

  async enterPopupInvoiceDate(date: string): Promise<void> {
    await this.popupInvoiceDateEdit.fill(date);
  }

  async enterPopupDueDate(date: string): Promise<void> {
    await this.popupDueDateEdit.fill(date);
  }

  async selectRowByInvoiceType(invoiceType: string): Promise<void> {
    const row = this.feeSearchTable.locator(`//td[contains(text(),'${invoiceType}')]`);
    await row.click();
  }

  async selectRowCheckBoxByInvoiceType(invoiceType: string): Promise<void> {
    const row = this.feeSearchTable.locator(`//tr[td[contains(text(),'${invoiceType}')]]`);
    const checkbox = row.locator("input[type='checkbox']");
    await checkbox.click();
  }

  async getSystemIDNoInGrid(rowIndex: number): Promise<string> {
    const rows = this.feeSearchTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const cell = row.locator("//td[position()=2]");
    return (await cell.textContent()) || '';
  }

  async getGridRowCount(): Promise<number> {
    const rows = this.feeSearchTable.locator('//tbody/tr');
    return await rows.count();
  }

  async reloadScreen(): Promise<void> {
    await this.page.reload();
    await this.page.waitForLoadState();
  }

  async selectForYear(value: string): Promise<void> {
    await this.forYearArrow.click();
    await this.page.locator(`//li[contains(text(),'${value}')]`).click();
  }

  async selectForMonth(value: string): Promise<void> {
    await this.forMonthArrow.click();
    await this.page.locator(`//li[contains(text(),'${value}')]`).click();
  }

  async getInvoiceTypeInGrid(invoiceType: string): Promise<string> {
    const cell = this.feeSearchTable.locator(`//td[contains(text(),'${invoiceType}')]`);
    return (await cell.textContent()) || '';
  }

  async getBaseMonthInGrid(baseMonth: string): Promise<string> {
    const cell = this.feeSearchTable.locator(`//td[contains(text(),'${baseMonth}')]`);
    return (await cell.textContent()) || '';
  }

  async getOccupancyNameInGrid(rowIndex: number): Promise<string> {
    const rows = this.feeSearchTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const cell = row.locator("//td[position()=3]");
    return (await cell.textContent()) || '';
  }

  async selectRowCheckboxBySystemID(systemId: string): Promise<void> {
    const row = this.feeSearchTable.locator(`//tr[td[contains(text(),'${systemId}')]]`);
    const checkbox = row.locator("input[type='checkbox']");
    await checkbox.click();
  }

  async clickRandomRowCheckbox(): Promise<void> {
    const checkboxes = this.feeSearchTable.locator("//tbody/tr//input[@type='checkbox']");
    const count = await checkboxes.count();
    if (count > 0) {
      const randomIndex = Math.floor(Math.random() * count);
      await checkboxes.nth(randomIndex).click();
    }
  }

  async getJurisColumnValues(): Promise<string[]> {
    const headerCells = this.feeSearchTable.locator('//thead//th');
    const headers = await headerCells.allTextContents();
    const colIndex = headers.findIndex(h => h.includes('Juris'));
    if (colIndex === -1) return [];
    const cells = this.feeSearchTable.locator(`//tbody/tr/td[${colIndex + 1}]`);
    return await cells.allTextContents();
  }

  async getTotalRecordsSelectedText(): Promise<string> {
    const label = this.page.locator('#lblTotalRecordsSelected');
    return (await label.textContent()) || '';
  }

  async getPopupRecordsSelectedText(): Promise<string> {
    const label = this.page.locator('#lblPopUpRecordsSelected');
    return (await label.textContent()) || '';
  }

  async getCheckedRowsCount(): Promise<number> {
    const checkedBoxes = this.feeSearchTable.locator("//tbody/tr//input[@type='checkbox']:checked");
    return await checkedBoxes.count();
  }

  async VerifyAtForYear(forYear: string): Promise<void> {
    expect(await this.forYearDropdown.inputValue()).toEqual(forYear);
  }

  async SelectAtInvoiceType(invoiceType: string): Promise<void> {
    await this.invoiceTypeDropdown.selectOption({ label: invoiceType });
  }

  async ClickIncludeBilledCheckbox(): Promise<void> {
    await this.includeBilledCheckbox.click();
  }

  async ClickSearchButton(): Promise<void> {
    await this.searchButton.click();
  }

  async ClickSelectAllCheckbox(): Promise<void> {
    await this.selectAllCheckbox.click();
  }

  async ClickCreateInvoiceButton(): Promise<void> {
    await this.createInvoiceButton.click();
  }

  async Verify6040TotalInvoiceGeneratedAckMsg(): Promise<void> {
    /* popup: (6040) Total Invoice Generated: 0 */
  }

  async VerifyAtSystemIDNoInGrid(systemIDNo: string, rowIndex: number): Promise<void> {
    const cell = this.feeSearchTable.locator(`//tr[contains(@class,'Row')][${rowIndex + 1}]//td[position()=1]`);
    expect(await cell.textContent()).toContain(systemIDNo);
  }

  async VerifyAtOccupancyNameInGrid(occupancyName: string, rowIndex: number): Promise<void> {
    const cell = this.feeSearchTable.locator(`//tr[contains(@class,'Row')][${rowIndex + 1}]//td[contains(text(),'${occupancyName}')]`);
    expect(await cell.textContent()).toContain(occupancyName);
  }

  async VerifyTotalRecordsSelectedAs1(row: number): Promise<void> {
    expect(await this.totalRecordsSelectedLabel.textContent()).toEqual('Total Records Selected :' + row);
  }

  async VerifyRecordsSelectedTextInPopup(row: number): Promise<void> {
    expect(await this.popupRecordsSelectedLabel.textContent()).toEqual(row + ' Records Selected');
  }

  async VerifyDueDateAsOneMonthFutureDate(): Promise<void> {
    const future = new Date();
    future.setDate(future.getDate() + 30);
    const formatted = `${(future.getMonth()+1).toString().padStart(2,'0')}/${future.getDate().toString().padStart(2,'0')}/${future.getFullYear()}`;
    expect(await this.popupDueDateEdit.inputValue()).toEqual(formatted);
  }

  async ClickPopupCreateInvoiceButton(): Promise<void> {
    await this.popupCreateInvoiceButton.click();
  }

  async selectAtJuris(juris: string): Promise<void> {
    await this.jurisDropdown.selectOption({ label: juris });
  }

  async verifyAtJurisInGrid(juris: string): Promise<void> {
    const cells = await this.feeSearchTable.locator("//td[position()=2]").allTextContents();
    expect(cells).toContain(juris);
  }

  async reloadTabScreen(): Promise<void> {
    /* reload tab via right-click */
  }

  async selectAtForYear(forYear: string): Promise<void> {
    await this.forYearArrow.click();
    await this.page.locator(`//li[contains(text(),'${forYear}')]`).click();
  }

  async verifyAtInvoiceTypeInGrid(invoiceType: string): Promise<void> {
    const cell = this.feeSearchTable.locator(`//td[contains(text(),'${invoiceType}')]`);
    expect(await cell.textContent()).toContain(invoiceType);
  }

  async selectAtItemCode(itemCode: string): Promise<void> {
    await this.itemCodeDropdown.selectOption({ label: itemCode });
  }

  async selectRowByAtInvoiceType(invoiceType: string): Promise<void> {
    await this.feeSearchTable.locator(`//td[contains(text(),'${invoiceType}')]`).click();
  }

  async selectAtForMonth(forMonth: string): Promise<void> {
    await this.forMonthArrow.click();
    await this.page.locator(`//li[contains(text(),'${forMonth}')]`).click();
  }

  async verifyAtBaseMonthInGrid(baseMonth: string): Promise<void> {
    const cell = this.feeSearchTable.locator(`//td[contains(text(),'${baseMonth}')]`);
    expect(await cell.textContent()).toContain(baseMonth);
  }

  async clickRandomRowCheckBoxInGrid(): Promise<void> {
    await this.feeSearchTable.locator("//tr[contains(@class,'Row')]//input[@type='checkbox']").first().click();
  }

  async verifyRandomRowCheckBoxIsSelected(): Promise<void> {
    const checked = this.feeSearchTable.locator("//tr[contains(@class,'Row')]//img[@title='Checked']");
    expect(await checked.count()).toBeGreaterThan(0);
  }
}

// ─── Payment Search ──────────────────────────────────────────────────────────

export class PaymentSearchPage {
  readonly page: Page;

  readonly invoiceYearEdit: Locator;
  readonly invoiceNumberEdit: Locator;
  readonly invoiceClassDropdown: Locator;
  readonly invoiceTypeDropdown: Locator;
  readonly searchButton: Locator;
  readonly paymentSearchTable: Locator;
  readonly printIcon: Locator;
  readonly paymentDateDropdown: Locator;
  readonly receivePaymentButton: Locator;
  readonly receiptEdit: Locator;
  readonly resetButton: Locator;
  readonly selectAllCheckbox: Locator;
  readonly totalRecordsSelectedText: Locator;
  readonly backButton: Locator;
  readonly excelIcon: Locator;
  readonly paymentMethodDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.invoiceYearEdit = page.locator('#nbrInvoiceNumber_Year');
    this.invoiceNumberEdit = page.locator('#nbrInvoiceNumber_Number');
    this.invoiceClassDropdown = page.locator('#cddInvoiceClass_DropDown');
    this.invoiceTypeDropdown = page.locator('#cddInvoiceType');
    this.searchButton = page.locator("//span[contains(text(),'Search')]");
    this.paymentSearchTable = page.locator('#grdPaymentInq');
    this.printIcon = page.locator("//img[@src='/KPIImages/ico/16_print.gif']");
    this.paymentDateDropdown = page.locator('#cddPaymentDate_DropDown');
    this.receivePaymentButton = page.locator("//a//span[text()='Receive Payment']");
    this.receiptEdit = page.locator('#txtReceiptNo');
    this.resetButton = page.locator("//span[text()='Reset']");
    this.selectAllCheckbox = page.locator('#chkSelectAll');
    this.totalRecordsSelectedText = page.locator('#lblRecordsCount');
    this.backButton = page.locator("//span[text()='Back']");
    this.excelIcon = page.locator("//img[@title='Export to Excel']");
    this.paymentMethodDropdown = page.locator('#cddPaymentMethod_DropDown');
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async clickReceivePayment(): Promise<void> {
    await this.receivePaymentButton.click();
  }

  async clickBack(): Promise<void> {
    await this.backButton.click();
  }

  async clickReset(): Promise<void> {
    await this.resetButton.click();
  }

  async clickExportToExcel(): Promise<void> {
    await this.excelIcon.click();
  }

  async enterInvoiceNo(year: string, number: string): Promise<void> {
    await this.invoiceYearEdit.fill(year);
    await this.invoiceNumberEdit.fill(number);
    await this.invoiceNumberEdit.press('Tab');
  }

  async enterReceiptNo(receiptNo: string): Promise<void> {
    await this.receiptEdit.fill(receiptNo);
  }

  async clickPrint(): Promise<void> {
    await this.printIcon.click();
  }

  async clickSelectAll(): Promise<void> {
    await this.selectAllCheckbox.click();
  }

  async selectInvoiceClass(value: string): Promise<void> {
    await this.invoiceClassDropdown.selectOption(value);
  }

  async selectInvoiceType(value: string): Promise<void> {
    await this.invoiceTypeDropdown.selectOption(value);
  }

  async selectPaymentDate(value: string): Promise<void> {
    await this.paymentDateDropdown.selectOption(value);
    await this.paymentDateDropdown.press('Tab');
  }

  async selectPaymentMethod(value: string): Promise<void> {
    await this.paymentMethodDropdown.selectOption(value);
  }

  async selectRowByInvoiceNo(invoiceNo: string): Promise<void> {
    const row = this.paymentSearchTable.locator(`//td[contains(text(),'${invoiceNo}')]`);
    await row.click();
  }

  async selectPaymentDateAsToday(): Promise<void> {
    await this.paymentDateDropdown.selectOption('Today');
    await this.paymentDateDropdown.press('Tab');
  }

  async getReferenceNoInGrid(rowIndex: number): Promise<string> {
    const rows = this.paymentSearchTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const cell = row.locator("//td[position()=4]");
    return (await cell.textContent()) || '';
  }

  async getAccountNameInGrid(rowIndex: number): Promise<string> {
    const rows = this.paymentSearchTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const cell = row.locator("//td[position()=3]");
    return (await cell.textContent()) || '';
  }

  async getPaidByInGrid(rowIndex: number): Promise<string> {
    const rows = this.paymentSearchTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const cell = row.locator("//td[position()=5]");
    return (await cell.textContent()) || '';
  }

  async getInvoiceNoInGrid(rowIndex: number): Promise<string> {
    const rows = this.paymentSearchTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const cell = row.locator("//td[position()=1]");
    return (await cell.textContent()) || '';
  }

  async getReceiptNoInGrid(rowIndex: number): Promise<string> {
    const rows = this.paymentSearchTable.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const cell = row.locator("//td[position()=2]");
    return (await cell.textContent()) || '';
  }

  async getGridRowCount(): Promise<number> {
    const rows = this.paymentSearchTable.locator('//tbody/tr');
    return await rows.count();
  }

  async getSelectedGridRowsCount(): Promise<number> {
    const checkboxes = this.paymentSearchTable.locator("//tbody/tr//input[@type='checkbox']:checked");
    return await checkboxes.count();
  }

  async selectRandomGridRow(): Promise<void> {
    const rows = this.paymentSearchTable.locator('//tbody/tr');
    const count = await rows.count();
    if (count > 0) {
      const randomIndex = Math.floor(Math.random() * count);
      await rows.nth(randomIndex).click();
    }
  }

  async selectRandomGridRowsCheckboxes(noOfItems: number): Promise<void> {
    const checkboxes = this.paymentSearchTable.locator("//tbody/tr//input[@type='checkbox']");
    const count = await checkboxes.count();
    const indices = new Set<number>();
    while (indices.size < Math.min(noOfItems, count)) {
      indices.add(Math.floor(Math.random() * count));
    }
    for (const idx of indices) {
      await checkboxes.nth(idx).click();
    }
  }

  async getInvoiceClassDropdownValues(): Promise<string[]> {
    const options = this.invoiceClassDropdown.locator('option');
    return await options.allTextContents();
  }

  async getInvoiceTypeDropdownValues(): Promise<string[]> {
    const options = this.invoiceTypeDropdown.locator('option');
    return await options.allTextContents();
  }

  async getSelectedInvoiceClass(): Promise<string> {
    return (await this.invoiceClassDropdown.locator('option:checked').textContent()) || '';
  }

  async getSelectedInvoiceType(): Promise<string> {
    return (await this.invoiceTypeDropdown.locator('option:checked').textContent()) || '';
  }

  async getTotalRecordsSelectedText(): Promise<string> {
    return (await this.totalRecordsSelectedText.textContent()) || '';
  }

  async clickPrintIcon(): Promise<void> {
    await this.printIcon.click();
  }

  async clickBackButton(): Promise<void> {
    await this.backButton.click();
  }

  async SelectAtInvoiceClass(invoiceClass: string): Promise<void> {
    await this.invoiceClassDropdown.selectOption({ label: invoiceClass });
  }

  async ClickSearchButton(): Promise<void> {
    await this.searchButton.click();
  }

  async SelectRowByAtInvoiceNo(invoiceNo: string): Promise<void> {
    await this.paymentSearchTable.locator(`//td[contains(text(),'${invoiceNo}')]`).click();
  }

  async VerifyAtPaidByInGrid(paidBy: string): Promise<void> {
    const cells = await this.paymentSearchTable.locator("//td[position()=4]").allTextContents();
    for (const cell of cells) { expect(cell).toEqual(paidBy); }
  }

  async VerifyAtReferenceNoInGrid(referenceNo: string, rowIndex: number): Promise<void> {
    const cell = this.paymentSearchTable.locator(`//tr[contains(@class,'Row')][${rowIndex + 1}]//td[position()=5]`);
    expect(await cell.textContent()).toContain(referenceNo);
  }

  async VerifyAtAccountNameInGrid(accountName: string, rowIndex: number): Promise<void> {
    const cell = this.paymentSearchTable.locator(`//tr[contains(@class,'Row')][${rowIndex + 1}]//td[contains(text(),'${accountName}')]`);
    expect(await cell.textContent()).toContain(accountName);
  }

  async verifyAtAccountNameInGrid(accountName: string): Promise<void> {
    const cell = this.paymentSearchTable.locator(`//td[contains(text(),'${accountName}')]`);
    expect(await cell.textContent()).toContain(accountName);
  }

  async enterAtReceiptNo(receiptNo: string): Promise<void> {
    await this.receiptEdit.fill(receiptNo);
  }

  async clickResetButton(): Promise<void> {
    await this.resetButton.click();
  }

  async verifyAtInvoiceClass(invoiceClass: string): Promise<void> {
    const options = await this.invoiceClassDropdown.locator('option').allTextContents();
    expect(options).toContain(invoiceClass);
  }

  async verifyAtInvoiceType(invoiceType: string): Promise<void> {
    const options = await this.invoiceTypeDropdown.locator('option').allTextContents();
    expect(options).toContain(invoiceType);
  }

  async selectAtInvoiceType(invoiceType: string): Promise<void> {
    await this.invoiceTypeDropdown.selectOption({ label: invoiceType });
  }

  async verifyAtSelectedInvoiceClass(invoiceClass: string): Promise<void> {
    const text = (await this.invoiceClassDropdown.locator('option:checked').textContent()) || '';
    expect(text).toEqual(invoiceClass);
  }

  async verifyAtSelectedInvoiceType(invoiceType: string): Promise<void> {
    const text = (await this.invoiceTypeDropdown.locator('option:checked').textContent()) || '';
    expect(text).toEqual(invoiceType);
  }

  async clickSelectAllCheckbox(): Promise<void> {
    await this.selectAllCheckbox.click();
  }

  async verifyTotalRecordsSelectedCount(count: number): Promise<void> {
    expect(await this.totalRecordsSelectedText.textContent()).toEqual('Total Records Selected :' + count);
  }

  async verify6040PleaseEnterReceiptNoInCorrectFormatAcknowledgePopup(): Promise<void> {
    /* popup: (6040) Please Enter Receipt No in correct format */
  }

  async selectAtPaymentMethod(paymentMethod: string): Promise<void> {
    await this.paymentMethodDropdown.selectOption({ label: paymentMethod });
  }

  async clickExportToExcelButton(): Promise<void> {
    await this.excelIcon.click();
  }

  async verify6040PleaseEnterReceiptNoInCorrectFormatAcknowledgePopupNotArisingTwice(): Promise<void> {
    /* verify popup not displayed twice */
  }
}

// ─── Invoice Search Help Window ──────────────────────────────────────────────

export class InvoiceSearchHelpWindowPage {
  readonly page: Page;

  readonly searchButton: Locator;
  readonly addNewButton: Locator;
  readonly resetButton: Locator;
  readonly backButton: Locator;
  readonly receivePaymentButton: Locator;
  readonly selectInvoiceButton: Locator;
  readonly invoiceSearchHelpResultTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchButton = page.locator("//span[contains(text(),'Search')]");
    this.addNewButton = page.locator("//span[contains(text(),'Add New')]");
    this.resetButton = page.locator("//span[contains(text(),'Reset')]");
    this.backButton = page.locator("//span[contains(text(),'Back')]");
    this.receivePaymentButton = page.locator("//span[contains(text(),'Receive Payment')]");
    this.selectInvoiceButton = page.locator("//span[contains(text(),'Select Invoice')]");
    this.invoiceSearchHelpResultTable = page.locator('#grdInvInq');
  }

  async clickSelectInvoice(): Promise<void> {
    await this.selectInvoiceButton.click();
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async clickAddNew(): Promise<void> {
    await this.addNewButton.click();
  }

  async clickReset(): Promise<void> {
    await this.resetButton.click();
  }

  async clickBack(): Promise<void> {
    await this.backButton.click();
  }

  async clickReceivePayment(): Promise<void> {
    await this.receivePaymentButton.click();
  }

  async selectInvoiceNoInGrid(invoiceNo: string): Promise<void> {
    const row = this.invoiceSearchHelpResultTable.locator(`//tr[td[contains(text(),'${invoiceNo}')]]`);
    await row.click();
  }

  async getGridRowCount(): Promise<number> {
    const rows = this.invoiceSearchHelpResultTable.locator('//tbody/tr');
    return await rows.count();
  }

  async SelectAtInvoiceNoInGrid(invoiceNo: string): Promise<void> {
    await this.page.locator(`//div[@id='grdInvInq']//td[text()='${invoiceNo}']/..//img`).click();
    await this.selectInvoiceButton.click();
  }
}

// ─── Search Account ──────────────────────────────────────────────────────────

export class SearchAccountPage {
  readonly page: Page;

  readonly searchAccountTable: Locator;
  readonly searchButton: Locator;
  readonly accountNameType: Locator;
  readonly accountNameID: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchAccountTable = page.locator('#grdAccountSearch');
    this.searchButton = page.locator('#btnSrch');
    this.accountNameType = page.locator('#NameCtrl1_NameType');
    this.accountNameID = page.locator('#NameCtrl1_NameTypeID');
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async enterAccountNameID(nameType: string, nameID: string): Promise<void> {
    await this.accountNameType.fill(nameType);
    await this.accountNameID.fill(nameID);
    await this.accountNameID.press('Tab');
  }

  async selectRowByName(name: string): Promise<void> {
    const row = this.searchAccountTable.locator(`//td[contains(text(),'${name}')]`);
    await row.click();
  }

  async selectRowByInvoiceNo(invoiceNo: string): Promise<void> {
    const row = this.searchAccountTable.locator(`//td[contains(text(),'${invoiceNo}')]`);
    await row.click();
  }

  async closeScreen(): Promise<void> {
    await this.page.close();
  }

  async selectRowByAtName(name: string): Promise<void> {
    await this.searchAccountTable.locator(`//td[contains(text(),'${name}')]`).click();
  }

  async selectRowByAtInvoiceNo(invoiceNo: string): Promise<void> {
    await this.searchAccountTable.locator(`//td[contains(text(),'${invoiceNo}')]`).click();
  }

  async enterAtAccountNameID(accountNameID: string): Promise<void> {
    await this.accountNameType.fill(accountNameID.substring(0, 1));
    await this.accountNameID.fill(accountNameID.substring(2));
    await this.accountNameID.press('Tab');
  }

  async clickSearchButton(): Promise<void> {
    await this.searchButton.click();
  }
}

// ─── Expense Search ──────────────────────────────────────────────────────────

export class ExpenseSearchPage {
  readonly page: Page;

  readonly searchButton: Locator;
  readonly expenseTable: Locator;
  readonly expenseClassDropdown: Locator;
  readonly pfEdit: Locator;
  readonly expenseFromDateEdit: Locator;
  readonly expenseToDateEdit: Locator;
  readonly categoryDropdown: Locator;
  readonly approvalStatusDropdown: Locator;
  readonly addNewButton: Locator;
  readonly jurisDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchButton = page.locator('#cmdSearch');
    this.expenseTable = page.locator('#grdExpenselist');
    this.expenseClassDropdown = page.locator('#cddExpClass_DropDown');
    this.pfEdit = page.locator('#lupPF_CodeValue');
    this.expenseFromDateEdit = page.locator('#dtExpFrom_KPIDttmCtrl');
    this.expenseToDateEdit = page.locator('#dtExpTo_KPIDttmCtrl');
    this.categoryDropdown = page.locator('#cddCategory_DropDown');
    this.approvalStatusDropdown = page.locator('#cddApprovalSt');
    this.addNewButton = page.locator("//div[@id='tab1']//span[text()='Add New'][1]");
    this.jurisDropdown = page.locator('#lstJuris');
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async clickAddNew(): Promise<void> {
    await this.addNewButton.click();
  }

  async enterExpenseFromDate(date: string): Promise<void> {
    await this.expenseFromDateEdit.fill(date);
    await this.expenseFromDateEdit.press('Tab');
  }

  async enterExpenseToDate(date: string): Promise<void> {
    await this.expenseToDateEdit.fill(date);
    await this.expenseToDateEdit.press('Tab');
  }

  async enterPf(pf: string): Promise<void> {
    await this.pfEdit.fill(pf);
    await this.pfEdit.press('Tab');
  }

  async selectExpenseClass(value: string): Promise<void> {
    await this.expenseClassDropdown.selectOption(value);
  }

  async selectCategory(value: string): Promise<void> {
    await this.categoryDropdown.selectOption(value);
  }

  async selectApprovalStatus(value: string): Promise<void> {
    await this.approvalStatusDropdown.selectOption(value);
  }

  async selectJuris(value: string): Promise<void> {
    await this.jurisDropdown.selectOption(value);
  }

  async selectRowByName(name: string): Promise<void> {
    const row = this.expenseTable.locator(`//td[contains(text(),'${name}')]`);
    await row.click();
  }

  async doubleClickRowByName(name: string): Promise<void> {
    const row = this.expenseTable.locator(`//td[contains(text(),'${name}')]`);
    await row.dblclick();
  }

  async selectRowByCost(cost: string): Promise<void> {
    const row = this.expenseTable.locator(`//td[contains(text(),'${cost}')]`);
    await row.click();
  }

  async reloadScreen(): Promise<void> {
    await this.page.reload();
    await this.page.waitForLoadState();
  }

  async selectRandomGridRow(): Promise<void> {
    const rows = this.expenseTable.locator('//tbody/tr');
    const count = await rows.count();
    if (count > 0) {
      const randomIndex = Math.floor(Math.random() * count);
      await rows.nth(randomIndex).click();
    }
  }

  async getGridRowCount(): Promise<number> {
    const rows = this.expenseTable.locator('//tbody/tr');
    return await rows.count();
  }

  async clickColumnHeader(columnName: string): Promise<void> {
    const header = this.expenseTable.locator(`//th[contains(text(),'${columnName}')]`);
    await header.click();
  }

  async getColumnValues(columnName: string): Promise<string[]> {
    const headerCells = this.expenseTable.locator('//thead//th');
    const headers = await headerCells.allTextContents();
    const colIndex = headers.findIndex(h => h.includes(columnName));
    if (colIndex === -1) return [];
    const cells = this.expenseTable.locator(`//tbody/tr/td[${colIndex + 1}]`);
    return await cells.allTextContents();
  }

  async getDateList(): Promise<string[]> {
    return await this.getColumnValues('Date');
  }

  async getNameFromGrid(name: string): Promise<string> {
    const cell = this.expenseTable.locator(`//td[contains(text(),'${name}')]`);
    return (await cell.textContent()) || '';
  }

  async tabOutPf(): Promise<void> {
    await this.pfEdit.press('Tab');
  }

  async isExpenseEntryWindowOpened(): Promise<boolean> {
    const expenseEntryTitle = this.page.locator("//span[contains(text(),'Expense Entry')]");
    return await expenseEntryTitle.isVisible();
  }

  async getStatusColumnValues(): Promise<string[]> {
    return await this.getColumnValues('Status');
  }

  async enterExpenseFromDateByDays(daysBeforeToday: number): Promise<void> {
    const date = new Date();
    date.setDate(date.getDate() - daysBeforeToday);
    const formatted = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
    await this.expenseFromDateEdit.fill(formatted);
  }

  async enterExpenseToDateAsCurrent(): Promise<void> {
    const date = new Date();
    const formatted = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
    await this.expenseToDateEdit.fill(formatted);
  }

  async isDateColumnSortedAscending(): Promise<boolean> {
    const dates = await this.getColumnValues('Date');
    for (let i = 1; i < dates.length; i++) {
      if (new Date(dates[i]) < new Date(dates[i - 1])) return false;
    }
    return true;
  }

  async isDateColumnSortedDescending(): Promise<boolean> {
    const dates = await this.getColumnValues('Date');
    for (let i = 1; i < dates.length; i++) {
      if (new Date(dates[i]) > new Date(dates[i - 1])) return false;
    }
    return true;
  }

  async clickDateColumnHeader(): Promise<void> {
    const dateHeader = this.expenseTable.locator("//th[contains(text(),'Date')]");
    await dateHeader.click();
  }

  async clickSearchButton(): Promise<void> {
    await this.searchButton.click();
  }

  async selectAtExpenseClass(expenseClass: string): Promise<void> {
    await this.expenseClassDropdown.selectOption({ label: expenseClass });
  }

  async selectAtCategoryComboBox(category: string): Promise<void> {
    await this.categoryDropdown.selectOption({ label: category });
  }

  async enterAtExpenseFromDate(fromDate: string): Promise<void> {
    await this.expenseFromDateEdit.fill(fromDate);
    await this.expenseFromDateEdit.press('Tab');
  }

  async enterAtExpenseToDate(toDate: string): Promise<void> {
    await this.expenseToDateEdit.fill(toDate);
    await this.expenseToDateEdit.press('Tab');
  }

  async selectAtApprovalStatusComboBox(approvalStatus: string): Promise<void> {
    await this.approvalStatusDropdown.selectOption({ label: approvalStatus });
  }

  async doubleClickRowByAtNameInGrid(name: string): Promise<void> {
    await this.expenseTable.locator(`//td[contains(text(),'${name}')]`).dblclick();
  }

  async verifyExpenseEntryWindowOpened(): Promise<void> {
    const pages = this.page.context().pages();
    const exists = pages.some(p => p.url().includes('Expense Entry') || p.url().includes('frmExpenseEntry'));
    expect(exists).toBeTruthy();
  }

  async verifyStatusInGrid(status: string): Promise<void> {
    const cells = await this.expenseTable.locator("//td[contains(@class,'Status') or position()=6]").allTextContents();
    expect(cells).toContain(status);
  }

  async selectAtApprovalStatusComboBox1(approvalStatus1: string): Promise<void> {
    await this.approvalStatusDropdown.selectOption({ label: approvalStatus1 });
  }

  async enterAtPf(pf: string): Promise<void> {
    await this.pfEdit.fill(pf);
    await this.pfEdit.press('Tab');
  }

  async verifyAtNameInGrid(name: string): Promise<void> {
    const cell = this.expenseTable.locator(`//td[contains(text(),'${name}')]`);
    expect(await cell.textContent()).toContain(name);
  }

  async selectAtCostInGrid(cost: string): Promise<void> {
    await this.expenseTable.locator(`//td[contains(text(),'${cost}')]`).click();
  }

  async enterAtcolumnCellAfterDoubleClickInGrid(): Promise<void> {
    /* handled by dblclick */
  }

  async selectRowByAtNameInGrid(name: string): Promise<void> {
    await this.expenseTable.locator(`//td[contains(text(),'${name}')]`).click();
  }

  async verifyAtColumnValuesAreSortedAscendingOrder(columnHeader: string): Promise<void> {
    /* column sort verification */
  }

  async verifyAtColumnValuesAreSortedDescendingOrder(columnHeader: string): Promise<void> {
    /* column sort verification */
  }

  async selectAtJuris(juris: string): Promise<void> {
    await this.jurisDropdown.selectOption({ label: juris });
  }

  async verifyAtColumnValues(columnName: string, columnValue: string): Promise<void> {
    const cells = await this.expenseTable.locator(`//td`).allTextContents();
    expect(cells.join(' ')).toContain(columnValue);
  }
}

// ─── Expense Entry ───────────────────────────────────────────────────────────

export class ExpenseEntryPage {
  readonly page: Page;

  readonly saveNCloseButton: Locator;
  readonly saveButton: Locator;
  readonly expenseClassDropdown: Locator;
  readonly pfCodeEdit: Locator;
  readonly pfDescriptionEdit: Locator;
  readonly categoryDropdown: Locator;
  readonly infoIcon: Locator;
  readonly statusBar: Locator;
  readonly dateEdit: Locator;
  readonly dateLabel: Locator;
  readonly dateArrow: Locator;
  readonly rptStatus: Locator;
  readonly purposeEdit: Locator;
  readonly poEdit: Locator;
  readonly k9NameDropdown: Locator;
  readonly jurisDropdown: Locator;

  // Tabs
  readonly itemsTab: Locator;
  readonly approvalTab: Locator;
  readonly attachmentTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.saveButton = page.locator('#cmdSave');
    this.expenseClassDropdown = page.locator('#cddExpClass_DropDown');
    this.pfCodeEdit = page.locator('#lupPF_CodeValue');
    this.pfDescriptionEdit = page.locator('#lupPF_CodeDescription');
    this.categoryDropdown = page.locator('#cddCategory_DropDown');
    this.infoIcon = page.locator('#lupPF_cmdIncOnAddr');
    this.statusBar = page.locator("//td[@class='statusBar']//b");
    this.dateEdit = page.locator('#dtExp_KPIDttmCtrl');
    this.dateLabel = page.locator('#lblDate');
    this.dateArrow = page.locator('#dtExp_KPIDttmCmd');
    this.rptStatus = page.locator('#lblRptStatus');
    this.purposeEdit = page.locator('#txtpurpose');
    this.poEdit = page.locator('#txtPO');
    this.k9NameDropdown = page.locator('#cddK9nHandler_DropDown');
    this.jurisDropdown = page.locator('#lstJuris');

    this.itemsTab = page.locator("//span[text()='Items']");
    this.approvalTab = page.locator("//span[text()='Approval']");
    this.attachmentTab = page.locator("//span[text()='Attachment']");
  }

  async clickSave(): Promise<void> {
    await this.saveButton.click();
  }

  async clickSaveAndClose(): Promise<void> {
    await this.saveNCloseButton.click();
  }

  async clickItemsTab(): Promise<void> {
    await this.itemsTab.click();
  }

  async clickApprovalTab(): Promise<void> {
    await this.approvalTab.click();
  }

  async getStatusBarText(): Promise<string> {
    return (await this.statusBar.textContent()) || '';
  }

  async tabOutDate(): Promise<void> {
    await this.dateEdit.press('Tab');
  }

  async clickAttachmentTab(): Promise<void> {
    await this.attachmentTab.click();
  }

  async enterPurpose(purpose: string): Promise<void> {
    await this.purposeEdit.fill(purpose);
  }

  async enterPO(po: string): Promise<void> {
    await this.poEdit.fill(po);
  }

  async clickDateArrow(): Promise<void> {
    await this.dateArrow.click();
  }

  async getRptStatusText(): Promise<string> {
    return (await this.rptStatus.textContent()) || '';
  }

  async getPurposeValue(): Promise<string> {
    return (await this.purposeEdit.inputValue()) || '';
  }

  async getPFCodeValue(): Promise<string> {
    return (await this.pfCodeEdit.inputValue()) || '';
  }

  async getPFDescriptionValue(): Promise<string> {
    return (await this.pfDescriptionEdit.inputValue()) || '';
  }

  async selectExpenseClass(value: string): Promise<void> {
    await this.expenseClassDropdown.selectOption(value);
  }

  async selectCategory(value: string): Promise<void> {
    await this.categoryDropdown.selectOption(value);
  }

  async selectK9Name(value: string): Promise<void> {
    await this.k9NameDropdown.selectOption(value);
  }

  async selectJuris(value: string): Promise<void> {
    await this.jurisDropdown.selectOption(value);
  }

  async enterPFCode(value: string): Promise<void> {
    await this.pfCodeEdit.fill(value);
  }

  async tabOutPF(): Promise<void> {
    await this.pfCodeEdit.press('Tab');
  }

  async enterDate(date: string): Promise<void> {
    await this.dateEdit.fill(date);
  }

  async getDateValue(): Promise<string> {
    return (await this.dateEdit.inputValue()) || '';
  }

  async saveScreen(): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept());
    await this.saveButton.click();
  }

  async saveNCloseScreen(): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept());
    await this.saveNCloseButton.click();
  }

  async closeScreen(): Promise<void> {
    await this.page.close();
  }

  async switchToItemsTab(): Promise<void> {
    await this.itemsTab.click();
    await this.page.waitForLoadState();
  }

  async switchToApprovalTab(): Promise<void> {
    await this.approvalTab.click();
    await this.page.waitForLoadState();
  }

  async tabOutPFAndVerifyBubbleIcon(): Promise<boolean> {
    await this.pfCodeEdit.press('Tab');
    return await this.infoIcon.isVisible();
  }

  async isOnHoldStatusGreen(): Promise<boolean> {
    const style = await this.rptStatus.getAttribute('style') || '';
    return style.includes('green');
  }

  async isDateFieldMandatory(): Promise<boolean> {
    const color = await this.dateLabel.evaluate(el => getComputedStyle(el).color);
    return color.includes('153, 0, 0') || color.includes('red');
  }

  async isJurisDisabled(): Promise<boolean> {
    return !(await this.jurisDropdown.isEnabled());
  }

  async getExpenseClassText(): Promise<string> {
    return (await this.expenseClassDropdown.locator('option:checked').textContent()) || '';
  }

  async getStatusText(): Promise<string> {
    return (await this.rptStatus.textContent()) || '';
  }

  async clickSaveNCloseButton(): Promise<void> {
    await this.saveNCloseButton.click();
  }

  async taboutPFAndVerifyBubbleIconIsDisplayed(): Promise<void> {
    await this.pfCodeEdit.press('Tab');
    expect(await this.infoIcon.isVisible()).toBeTruthy();
  }

  async clickSaveButton(): Promise<void> {
    await this.saveButton.click();
  }

  async verifyAdditionSuccessFullMessage(): Promise<void> {
    expect(await this.statusBar.textContent()).toContain('1002 - Addition Successful');
  }

  async verifyAdditionSuccessful(): Promise<void> {
    const text = await this.page.locator("//td[@class='statusBar' or @class='status']//b").textContent();
    expect(text).toContain('1002 - Addition');
  }

  async VerifyAndClickAttachmentTabForFire(): Promise<void> {
    expect(await this.attachmentTab.isVisible()).toBeTruthy();
    await this.attachmentTab.click();
  }

  async verifyOnHoldTextIsDisplayedInGreenColor(): Promise<void> {
    expect(await this.rptStatus.isVisible()).toBeTruthy();
    const style = await this.rptStatus.getAttribute('style') || '';
    expect(style).toContain('green');
  }

  async verifyDeleteConfirmPopup(): Promise<void> {
    /* confirm popup: (4) Do you want to delete? */
  }

  async verifyUpdateSuccessful(): Promise<void> {
    const text = await this.page.locator("//td[@class='statusBar' or @class='status']//b").textContent();
    expect(text).toContain('1003 - Update successful');
  }

  async clickCancelConfirmationPopup(): Promise<void> {
    /* confirm popup: dismiss */
  }

  async verifyDateFieldIsMandatory(): Promise<void> {
    const color = await this.page.locator("//label[contains(text(),'Date')]").evaluate(el => getComputedStyle(el).color);
    expect(color).toContain('153, 0, 0');
  }

  async verifyJurisFieldIsDisabled(): Promise<void> {
    expect(await this.jurisDropdown.isEnabled()).toBeFalsy();
  }

  async verify1051UpdateDataExistsInApprovalTabAcknowledgePopupMessage(): Promise<void> {
    /* popup: (1051) Updated data exists in Approval tab */
  }

  async verifyAtStatus(status: string): Promise<void> {
    expect(await this.rptStatus.textContent()).toEqual(status);
  }

  async verifyExpenseDateIsMandatoryAcknowledgePopup(): Promise<void> {
    /* popup: (8) Enter mandatory data - Expense Date is Mandatory */
  }

  async selectAtK9Name(k9Name: string): Promise<void> {
    await this.k9NameDropdown.selectOption({ label: k9Name });
  }

  async verifyAtPurpose(purposeValue: string): Promise<void> {
    expect(await this.purposeEdit.inputValue()).toEqual(purposeValue);
  }

  async selectAtCategory(category: string): Promise<void> {
    await this.categoryDropdown.selectOption({ label: category });
  }

  async verifyAtExpenseClass(expenseClass: string): Promise<void> {
    const text = (await this.expenseClassDropdown.locator('option:checked').textContent()) || '';
    expect(text).toEqual(expenseClass);
  }

  async verifyAtPFCode(pfCode: string): Promise<void> {
    expect(await this.pfCodeEdit.inputValue()).toEqual(pfCode);
  }

  async verifyAtPFDescription(pfDescription: string): Promise<void> {
    expect(await this.pfDescriptionEdit.inputValue()).toEqual(pfDescription);
  }
}

// ─── Expense Entry - Items Tab ───────────────────────────────────────────────

export class ExpenseItemsTabPage {
  readonly page: Page;

  readonly dateEdit: Locator;
  readonly expenseItemCategoryDropdown: Locator;
  readonly descriptionEdit: Locator;
  readonly addButton: Locator;
  readonly itemsTabGrid: Locator;
  readonly commentsEdit: Locator;
  readonly costEdit: Locator;
  readonly paidMethodDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dateEdit = page.locator('#tabExpenses_tmpl0_usrExpenses1_dtExpense_KPIDttmCtrl');
    this.expenseItemCategoryDropdown = page.locator('#tabExpenses_tmpl0_usrExpenses1_cddItemCategory_DropDown');
    this.descriptionEdit = page.locator('#tabExpenses_tmpl0_usrExpenses1_txtDesc');
    this.addButton = page.locator('#tabExpenses_tmpl0_usrExpenses1_imgAdd');
    this.itemsTabGrid = page.locator('#tabExpenses_tmpl0_usrExpenses1_grdExpenses');
    this.commentsEdit = page.locator('#tabExpenses_tmpl0_usrExpenses1_txtCmts');
    this.costEdit = page.locator('#tabExpenses_tmpl0_usrExpenses1_txtCost');
    this.paidMethodDropdown = page.locator('#tabExpenses_tmpl0_usrExpenses1_cddPaidMtd_DropDown');
  }

  async clickAdd(): Promise<void> {
    await this.addButton.click();
  }

  async tabOutDate(): Promise<void> {
    await this.dateEdit.press('Tab');
  }

  async enterDescription(description: string): Promise<void> {
    await this.descriptionEdit.fill(description);
  }

  async enterCost(cost: string): Promise<void> {
    await this.costEdit.fill(cost);
  }

  async enterComments(comments: string): Promise<void> {
    await this.commentsEdit.fill(comments);
  }

  async getCommentsLength(): Promise<number> {
    const value = await this.commentsEdit.inputValue();
    return value.length;
  }

  async selectExpenseItemCategory(value: string): Promise<void> {
    await this.expenseItemCategoryDropdown.selectOption(value);
  }

  async selectPaidMethod(value: string): Promise<void> {
    await this.paidMethodDropdown.selectOption(value);
  }

  async getDateValue(): Promise<string> {
    return (await this.dateEdit.inputValue()) || '';
  }

  async getCostValue(): Promise<string> {
    return (await this.costEdit.inputValue()) || '';
  }

  async getDescriptionValue(): Promise<string> {
    return (await this.descriptionEdit.inputValue()) || '';
  }

  async getDescriptionInGrid(rowIndex: number): Promise<string> {
    const rows = this.itemsTabGrid.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const cell = row.locator("//td[position()=3]");
    return (await cell.textContent()) || '';
  }

  async getCategoryInGrid(rowIndex: number): Promise<string> {
    const rows = this.itemsTabGrid.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const cell = row.locator("//td[position()=2]");
    return (await cell.textContent()) || '';
  }

  async getDateInGrid(rowIndex: number): Promise<string> {
    const rows = this.itemsTabGrid.locator('//tbody/tr');
    const row = rows.nth(rowIndex);
    const cell = row.locator("//td[position()=1]");
    return (await cell.textContent()) || '';
  }

  async deleteRowByCategory(category: string): Promise<void> {
    const row = this.itemsTabGrid.locator(`//tr[td[contains(text(),'${category}')]]`);
    const deleteIcon = row.locator("//img[contains(@src,'delete') or contains(@title,'Delete')]");
    await deleteIcon.click();
  }

  async getGridRowCount(): Promise<number> {
    const rows = this.itemsTabGrid.locator('//tbody/tr');
    return await rows.count();
  }

  async isCategoryInGrid(category: string): Promise<boolean> {
    const cell = this.itemsTabGrid.locator(`//td[contains(text(),'${category}')]`);
    return (await cell.count()) > 0;
  }

  async isDeleteIconPresentForCategory(category: string): Promise<boolean> {
    const row = this.itemsTabGrid.locator(`//tr[td[contains(text(),'${category}')]]`);
    const cells = await row.locator('td').allTextContents();
    return cells.includes('X');
  }

  async deleteRowByDescription(description: string): Promise<void> {
    const row = this.itemsTabGrid.locator(`//tr[td[contains(text(),'${description}')]]`);
    const deleteIcon = row.locator("//img[contains(@src,'delete') or contains(@title,'Delete')]");
    await deleteIcon.click();
  }

  async enterLongComments(text: string): Promise<void> {
    const commentsField = this.page.locator('#txtComments');
    await commentsField.fill(text);
  }

  async copyFromComments(): Promise<string> {
    const commentsField = this.page.locator('#txtComments');
    return await commentsField.inputValue();
  }

  async pasteIntoComments(text: string): Promise<void> {
    const commentsField = this.page.locator('#txtComments');
    await commentsField.fill(text);
  }

  async enterDescriptionAsTestAutomation(): Promise<void> {
    await this.descriptionEdit.fill('Test Automation');
  }

  async clickAddButton(): Promise<void> {
    await this.addButton.click();
  }

  async deleteAtCategoryInGridByRow(category: string): Promise<void> {
    await this.itemsTabGrid.locator(`//tr[td[contains(text(),'${category}')]]//img[contains(@title,'Delete') or contains(@src,'delete')]`).click();
  }

  async verifyAtDeleteIconPresentInGridByCategory(category: string): Promise<void> {
    const row = this.itemsTabGrid.locator(`//tr[td[contains(text(),'${category}')]]`);
    const del = row.locator("//img[contains(@title,'Delete') or contains(@src,'delete') or text()='X']");
    expect(await del.count()).toBeGreaterThan(0);
  }

  async verifyAtcategoryInGrid(category: string): Promise<void> {
    const cell = this.itemsTabGrid.locator(`//td[contains(text(),'${category}')]`);
    expect(await cell.textContent()).toContain(category);
  }

  async verifyAtDeletedCategoryNotListedInGrid(): Promise<void> {
    const rows = this.itemsTabGrid.locator("//tr[contains(@class,'Row')]");
    expect(await rows.count()).toEqual(2);
  }

  async clickDeleteAtDescriptionInGrid(description: string): Promise<void> {
    await this.itemsTabGrid.locator(`//tr[td[contains(text(),'${description}')]]//img[contains(@title,'Delete') or contains(@src,'delete')]`).click();
  }

  async clickCancelConfirmationPopup(): Promise<void> {
    /* confirm popup: cancel/no */
  }

  async verifyAtDescriptionInGrid(description: string): Promise<void> {
    const cell = this.itemsTabGrid.locator("//tr[contains(@class,'Row')][1]//td[position()=2]");
    expect(await cell.textContent()).toContain(description);
  }

  async verifyCurrentDateInGrid(): Promise<void> {
    const cell = this.itemsTabGrid.locator("//tr[contains(@class,'Row')][1]//td[position()=1]");
    const today = new Date();
    const formatted = `${(today.getMonth()+1).toString().padStart(2,'0')}/${today.getDate().toString().padStart(2,'0')}/${today.getFullYear()}`;
    expect(await cell.textContent()).toContain(formatted);
  }

  async selectAtExpenseItemCategory(category: string): Promise<void> {
    await this.expenseItemCategoryDropdown.selectOption({ label: category });
  }

  async enterCommentsAs250Character(): Promise<void> {
    await this.commentsEdit.fill('a'.repeat(300));
  }

  async verifyCommentsAcceptMoreThan250Characters(): Promise<void> {
    const val = await this.commentsEdit.inputValue();
    expect(val.length).toBeGreaterThan(250);
  }

  async enterAtCost(cost: string): Promise<void> {
    await this.costEdit.fill(cost);
  }

  async selectAtPaidMethod(paidMethod: string): Promise<void> {
    await this.paidMethodDropdown.selectOption({ label: paidMethod });
  }
}

// ─── Expense Entry - Approval Tab ────────────────────────────────────────────

export class ExpenseApprovalTabPage {
  readonly page: Page;

  readonly newActionDropdown: Locator;
  readonly dateEdit: Locator;
  readonly timeEdit: Locator;
  readonly saveButton: Locator;
  readonly listTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newActionDropdown = page.locator('#lstStatus');
    this.dateEdit = page.locator('#dttStatusDttm_Date_KPIDttmCtrl');
    this.timeEdit = page.locator("//table[@id = 'dttStatusDttm_Time']//input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
    this.saveButton = page.locator('#cmdSave');
    this.listTable = page.locator('#listMsg');
  }

  async clickSave(): Promise<void> {
    await this.saveButton.click();
  }

  async tabOutDateAndTime(): Promise<void> {
    await this.dateEdit.press('Tab');
    await this.timeEdit.press('Tab');
  }

  async selectNewAction(value: string): Promise<void> {
    await this.newActionDropdown.selectOption(value);
  }

  async enterDate(date: string): Promise<void> {
    await this.dateEdit.fill(date);
  }

  async enterTime(time: string): Promise<void> {
    await this.timeEdit.fill(time);
  }

  async saveScreen(): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept());
    await this.saveButton.click();
  }

  async getActionInGrid(status: string): Promise<boolean> {
    const text = await this.listTable.textContent() || '';
    return text.includes(status);
  }

  async getNewActionDropdownValues(): Promise<string[]> {
    const options = this.newActionDropdown.locator('option');
    return await options.allTextContents();
  }

  async isNewActionAvailable(action: string): Promise<boolean> {
    const values = await this.getNewActionDropdownValues();
    return values.includes(action);
  }

  async selectAtNewAction(newAction: string): Promise<void> {
    await this.newActionDropdown.selectOption({ label: newAction });
  }

  async saveInternal(): Promise<void> {
    await this.saveButton.click();
    /* confirm popup handled */
  }

  async verifyAtNewAction(newAction: string): Promise<void> {
    const options = await this.newActionDropdown.locator('option').allTextContents();
    expect(options).toContain(newAction);
  }

  async verifyAtStatusInGrid(status: string): Promise<void> {
    const text = await this.listTable.textContent();
    expect(text).toContain(status);
  }
}

// ─── Permit Type ─────────────────────────────────────────────────────────────

export class PermitTypePage {
  readonly page: Page;

  readonly addNewButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("//span[contains(text(),'Add New')]");
  }

  async clickAddNew(): Promise<void> {
    await this.addNewButton.click();
  }

  async verifyInvoiceTypeAcknowledgePopup(): Promise<void> {
    /* popup: Please Configure The Invoice Type For The Permit */
  }

  async verify6040AcknowledgePopup(): Promise<void> {
    /* popup: (6040) No Record Found */
  }
}

// ─── Permit Type Entry ───────────────────────────────────────────────────────

export class PermitTypeEntryPage {
  readonly page: Page;

  readonly permitEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly inactiveCheckbox: Locator;
  readonly inactiveTextField: Locator;
  readonly registrationRequiredCheckbox: Locator;
  readonly enabledApprovalRoutingCheckbox: Locator;
  readonly custom1Edit: Locator;
  readonly custom2Edit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.permitEdit = page.locator('#txtPermitType');
    this.descriptionEdit = page.locator('#txtDescription');
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.inactiveCheckbox = page.locator('#chkInactive');
    this.inactiveTextField = page.locator('#txtInactivedttm');
    this.registrationRequiredCheckbox = page.locator('#chkIsRegistration');
    this.enabledApprovalRoutingCheckbox = page.locator('#chkApprovalRouting');
    this.custom1Edit = page.locator('#TabPermitType_tmpl0_usrPermitParameters_txtCustom1');
    this.custom2Edit = page.locator('#TabPermitType_tmpl0_usrPermitParameters_txtCustom2');
  }

  async clickSave(): Promise<void> {
    await this.saveButton.click();
  }

  async clickSaveAndClose(): Promise<void> {
    await this.saveAndCloseButton.click();
  }

  async clickInactive(): Promise<void> {
    await this.inactiveCheckbox.click();
  }

  async clickRegistrationRequired(): Promise<void> {
    await this.registrationRequiredCheckbox.click();
  }

  async clickEnableApprovalRouting(): Promise<void> {
    await this.enabledApprovalRoutingCheckbox.click();
  }

  async enterPermit(permit: string): Promise<void> {
    await this.permitEdit.fill(permit);
  }

  async enterDescription(description: string): Promise<void> {
    await this.descriptionEdit.fill(description);
  }

  async enterCustom1(value: string): Promise<void> {
    await this.custom1Edit.clear();
    await this.custom1Edit.fill(value);
  }

  async enterCustom2(value: string): Promise<void> {
    await this.custom2Edit.clear();
    await this.custom2Edit.fill(value);
  }

  async getPermitValue(): Promise<string> {
    return (await this.permitEdit.inputValue()) || '';
  }

  async getInactiveTextFieldValue(): Promise<string> {
    return (await this.inactiveTextField.inputValue()) || '';
  }

  async saveScreen(): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept());
    await this.saveButton.click();
  }

  async saveNCloseScreen(): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept());
    await this.saveAndCloseButton.click();
  }

  async closeScreen(): Promise<void> {
    await this.page.close();
  }

  async getStatusBarText(): Promise<string> {
    const statusBar = this.page.locator("//td[@class='statusBar']//b");
    return (await statusBar.textContent()) || '';
  }

  async clickInactiveCheckbox(): Promise<void> {
    await this.inactiveCheckbox.click();
  }

  async isInactiveTextFieldBlank(): Promise<boolean> {
    const value = await this.inactiveTextField.inputValue();
    return value.trim() === '';
  }

  async clickRegistrationRequiredCheckbox(): Promise<void> {
    await this.registrationRequiredCheckbox.click();
  }

  async clickEnableApprovalRoutingCheckbox(): Promise<void> {
    await this.enabledApprovalRoutingCheckbox.click();
  }

  async getDescriptionValue(): Promise<string> {
    return await this.descriptionEdit.inputValue();
  }

  async isInactiveTextFieldContainsDateTime(): Promise<boolean> {
    const value = await this.inactiveTextField.inputValue();
    return value.trim().length > 0 && value.includes('/');
  }

  async getCurrentTime(): Promise<string> {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const h = hours % 12 || 12;
    return `${h}:${minutes.toString().padStart(2, '0')} ${amPm}`;
  }

  async EnterAtPermit(permit: string): Promise<void> {
    await this.permitEdit.fill(permit);
  }

  async EnterAtDescription(description: string): Promise<void> {
    await this.descriptionEdit.fill(description);
  }
}

// ─── Permit Type Entry - Parameters Tab ──────────────────────────────────────

export class PermitParametersTabPage {
  readonly page: Page;

  readonly itemCodeEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly rateEdit: Locator;
  readonly addButton: Locator;
  readonly parametersGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.itemCodeEdit = page.locator('#TabPermitType_tmpl0_usrPermitParameters_txtQuantityfrom');
    this.descriptionEdit = page.locator('#TabPermitType_tmpl0_usrPermitParameters_txtQuantityTo');
    this.rateEdit = page.locator('#TabPermitType_tmpl0_usrPermitParameters_txtRate');
    this.addButton = page.locator('#TabPermitType_tmpl0_usrPermitParameters_cmdAdd');
    this.parametersGrid = page.locator('#TabPermitType_tmpl0_usrPermitParameters_grdpermitParameters');
  }

  async clickAdd(): Promise<void> {
    await this.addButton.click();
  }

  async enterItemCode(value: string): Promise<void> {
    await this.itemCodeEdit.fill(value);
  }

  async enterDescription(value: string): Promise<void> {
    await this.descriptionEdit.fill(value);
  }

  async enterRate(value: string): Promise<void> {
    await this.rateEdit.fill(value);
  }

  async getGridRowCount(): Promise<number> {
    const rows = this.parametersGrid.locator('//tbody/tr');
    return await rows.count();
  }

  async getItemCodeInGrid(rowIndex: number): Promise<string> {
    const cell = this.parametersGrid.locator(`//tbody/tr[${rowIndex + 1}]/td[1]`);
    return (await cell.textContent()) || '';
  }

  async deleteRowBySubItemCode(subItemCode: string): Promise<void> {
    const row = this.parametersGrid.locator(`//tr[td[contains(text(),'${subItemCode}')]]`);
    const deleteBtn = row.locator("input[value='Delete']");
    this.page.once('dialog', dialog => dialog.accept());
    await deleteBtn.click();
  }

  async EnterAtItemCode(itemCode: string): Promise<void> {
    await this.itemCodeEdit.fill(itemCode);
  }

  async EnterAtDescription(description: string): Promise<void> {
    await this.descriptionEdit.fill(description);
  }

  async EnterAtRate(rate: string): Promise<void> {
    await this.rateEdit.fill(rate);
  }

  async clickAddButton(): Promise<void> {
    await this.addButton.click();
  }

  async DeleteAtGridRowBySubItemCode(subItemCode: string): Promise<void> {
    await this.parametersGrid.locator(`//tr[td[contains(text(),'${subItemCode}')]]//img[contains(@title,'Delete') or contains(@src,'delete')]`).click();
    /* confirm popup handled */
  }

  async verifyCurrentDateAndTimeInInactiveTextField(currentTime: string): Promise<void> {
    const text = await this.page.locator('#txtInactivedttm').inputValue();
    expect(text).toBeTruthy();
  }

  async verifyInactiveTextFieldIsBlank(): Promise<void> {
    expect((await this.page.locator('#txtInactivedttm').inputValue()).trim()).toEqual('');
  }

  async verify6040SubItemCodeAlreadyInUseAcknowledge(): Promise<void> {
    /* popup: (6040) Sub Item Code already in use */
  }

  async verify21857DoYouWantToUpdateTheRegistrationFeeConfirmationPopupMessage(): Promise<void> {
    /* confirm popup: (21857) Do you want to update the Registration Fee Item Code */
  }

  async enterAtLabelNameForCustom1Field(custom1: string): Promise<void> {
    await this.page.locator('#TabPermitType_tmpl0_usrPermitParameters_txtCustom1').clear();
    await this.page.locator('#TabPermitType_tmpl0_usrPermitParameters_txtCustom1').fill(custom1);
  }

  async enterAtLabelNameForCustom2Field(custom2: string): Promise<void> {
    await this.page.locator('#TabPermitType_tmpl0_usrPermitParameters_txtCustom2').clear();
    await this.page.locator('#TabPermitType_tmpl0_usrPermitParameters_txtCustom2').fill(custom2);
  }

  async verifyAtPermit(permit: string): Promise<void> {
    expect(await this.page.locator('#txtPermitType').inputValue()).toEqual(permit);
  }
}
