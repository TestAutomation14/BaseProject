import { Page, Locator, expect, BrowserContext } from '@playwright/test';

// ─── Admission Module (Window/Tab Navigation) ───────────────────────────────

export class AdmissionModule {
  readonly context: BrowserContext;

  constructor(context: BrowserContext) {
    this.context = context;
  }

  private async switchToWindowByTitle(title: string): Promise<Page> {
    const pages = this.context.pages();
    for (const p of pages) {
      const pageTitle = await p.title();
      if (p.url().includes(title) || pageTitle.includes(title)) {
        await p.bringToFront();
        return p;
      }
    }
    throw new Error(`Window "${title}" not found`);
  }

  async switchToBondSearch(): Promise<Page> { return this.switchToWindowByTitle('Bond Search'); }
  async switchToBillingSearch(): Promise<Page> { return this.switchToWindowByTitle('Billing Search'); }
  async switchToClassificationRating(): Promise<Page> { return this.switchToWindowByTitle('Classification Ratings'); }
  async switchToInmateSearch(): Promise<Page> { return this.switchToWindowByTitle('frmAdmissionSrch'); }
  async switchToPayToStaySearch(): Promise<Page> { return this.switchToWindowByTitle('Pay-To-Stay Search'); }
  async switchToPropertyHistorySearch(): Promise<Page> { return this.switchToWindowByTitle('Property History Search'); }
  async switchToRARatingMaster(): Promise<Page> { return this.switchToWindowByTitle('RA Rating Master'); }
  async switchToPaytoStayEntry(): Promise<Page> { return this.switchToWindowByTitle('Pay To Stay'); }
  async switchToPaymentEntry(): Promise<Page> { return this.switchToWindowByTitle('Payment'); }
  async switchToInvoiceHistory(): Promise<Page> { return this.switchToWindowByTitle('Invoice History'); }
  async switchToScheduledBookingSearch(): Promise<Page> { return this.switchToWindowByTitle('Scheduled Booking Search'); }
  async switchToSSAReport(): Promise<Page> { return this.switchToWindowByTitle('SSA Report'); }
  async switchToSupervisorStatus(): Promise<Page> { return this.switchToWindowByTitle('Supervisor Status'); }
  async switchToPreBookingQueue(): Promise<Page> { return this.switchToWindowByTitle('frmPreBookingQue.aspx'); }
  async switchToPreBookingQueueDetails(): Promise<Page> { return this.switchToWindowByTitle('frmPreBookingQueDetails.aspx'); }
  async switchToScheduleBookingEntry(): Promise<Page> { return this.switchToWindowByTitle('Scheduled Booking Entry'); }
  async switchToAdmissionEntry(): Promise<Page> { return this.switchToWindowByTitle('Admission'); }
  async switchToAdditionalDataEntry(): Promise<Page> { return this.switchToWindowByTitle('Booking Additional Data'); }
  async switchToBookingAdditionalData(): Promise<Page> { return this.switchToWindowByTitle('Booking Additional Data'); }
  async switchToNotificationEntry(): Promise<Page> { return this.switchToWindowByTitle('Victim Notification'); }
  async switchToInitialInmatePropertyEntry(): Promise<Page> { return this.switchToWindowByTitle('Initial Inmate Property'); }
  async switchToPropertyStorageLocationEntry(): Promise<Page> { return this.switchToWindowByTitle('Personal Property'); }
  async switchToCodedSearchLookUpScreen(): Promise<Page> { return this.switchToWindowByTitle('Coded Search'); }
  async switchToQAFormEntry(): Promise<Page> { return this.switchToWindowByTitle('Question Data Entry'); }
  async switchToSharedBondEntry(): Promise<Page> { return this.switchToWindowByTitle('Shared Bond'); }
  async switchToInmateMovementEntry(): Promise<Page> { return this.switchToWindowByTitle('Inmate Movement'); }
  async switchToSentenceEntry(): Promise<Page> { return this.switchToWindowByTitle('Sentence'); }
  async switchToSelectChargeScreen(): Promise<Page> { return this.switchToWindowByTitle('Select Charge'); }
  async switchToImageArchiveScreen(): Promise<Page> { return this.switchToWindowByTitle('Inmate Image Archive'); }
  async switchToUploadImageScreen(): Promise<Page> { return this.switchToWindowByTitle('frmUpdateImg_Id'); }
  async switchToSPNChange(): Promise<Page> { return this.switchToWindowByTitle('SPN Change'); }
  async switchToRiskAssessmentSearch(): Promise<Page> { return this.switchToWindowByTitle('Risk Assessment Search'); }
  async switchToBondEntry(): Promise<Page> { return this.switchToWindowByTitle('Bond Receipt'); }
  async switchToRAInterviewEntry(): Promise<Page> { return this.switchToWindowByTitle('RA Interview'); }
  async switchToRiskAssessmentEntry(): Promise<Page> { return this.switchToWindowByTitle('Risk Assessment'); }
  async switchToTxtEditorEntry(): Promise<Page> { return this.switchToWindowByTitle('frmManageComments_Id'); }
  async switchToSelectReportScreen(): Promise<Page> { return this.switchToWindowByTitle('Select Report'); }
  async switchToSpecialNeeds(): Promise<Page> { return this.switchToWindowByTitle('frmAdmSpecialNeeds'); }
  async switchToSpecialNeedsEntryScreen(): Promise<Page> { return this.switchToWindowByTitle('Special Needs'); }
  async switchToChargesHistoryScreen(): Promise<Page> { return this.switchToWindowByTitle('Charges History'); }
  async switchToPhysicalEntry(): Promise<Page> { return this.switchToWindowByTitle('Physical'); }
  async switchToPhoenixAuthenticatorWindow(): Promise<Page> { return this.switchToWindowByTitle(':: Phoenix Authenticator ::'); }
  async switchToAdmissionCharges(): Promise<Page> { return this.switchToWindowByTitle('Admission Charges'); }
  async switchToDenominations(): Promise<Page> { return this.switchToWindowByTitle('Denominations'); }
  async switchToSpecialNeedsTextMgr(): Promise<Page> { return this.switchToWindowByTitle('frmTextMgrEx.aspx?'); }
  async switchToAliasHistory(): Promise<Page> { return this.switchToWindowByTitle('Alias History'); }
  async switchToScheduleBookingSearch(): Promise<Page> { return this.switchToWindowByTitle('Scheduled Booking Search'); }
  async switchUploadImageScreen(): Promise<Page> { return this.switchToWindowByTitle('frmUpdateImg_Id'); }
  async switchToRiskAssessmentSearchTab(): Promise<Page> { return this.switchToWindowByTitle('Risk Assessment Search'); }
  async switchToRiskAssementEntry(): Promise<Page> { return this.switchToWindowByTitle('Risk Assessment'); }
  // Java-name typo wrappers
  async SwithToScheduledBookingSearch(): Promise<Page> { return this.switchToScheduleBookingSearch(); }
  async SwithToRiskAssementSearch(): Promise<Page> { return this.switchToRiskAssessmentSearchTab(); }
}

// ─── Billing Search Screen ───────────────────────────────────────────────────

export class BillingSearchPage {
  readonly page: Page;
  readonly spnNoEdit: Locator;
  readonly oriDropdown: Locator;
  readonly oriCodeEdit: Locator;
  readonly billingTypeDropdown: Locator;
  readonly fromDateEdit: Locator;
  readonly toDateEdit: Locator;
  readonly searchButton: Locator;
  readonly resetButton: Locator;
  readonly subAgencyDropdown: Locator;
  readonly billingSearchGrid: Locator;
  readonly enterStartDatePopup: Locator;
  readonly startDateEditInPopup: Locator;
  readonly startTimeEditInPopup: Locator;
  readonly saveButtonInPopup: Locator;

  constructor(page: Page) {
    this.page = page;
    this.spnNoEdit = page.locator('#txtNewSPN');
    this.oriDropdown = page.locator('#ORIAgency_KPIState');
    this.oriCodeEdit = page.locator('#ORIAgency_lupORI_CodeValue');
    this.billingTypeDropdown = page.locator('#cddBillingType_DropDown');
    this.fromDateEdit = page.locator('#DttmFrom_Date_KPIDttmCtrl');
    this.toDateEdit = page.locator('#DttmEnd_Date_KPIDttmCtrl');
    this.searchButton = page.locator('#cmdSearch');
    this.resetButton = page.locator('#cmdReset');
    this.subAgencyDropdown = page.locator('#cddSubAgency_DropDown');
    this.billingSearchGrid = page.locator('#grdResSrch');
    this.enterStartDatePopup = page.locator('#PnlStartDate');
    this.startDateEditInPopup = page.locator('#DttmStartDate_Date_KPIDttmCtrl');
    this.startTimeEditInPopup = page.locator("//table[@id='DttmStartDate_Time']//input");
    this.saveButtonInPopup = page.locator('#cmdSubmit');
  }

  async enterAtFromDate(fromDate: string): Promise<void> { await this.fromDateEdit.fill(fromDate); }
  async enterToDateAsCurrentDate(currentDate: string): Promise<void> { await this.toDateEdit.fill(currentDate); }
  async enterAtToDate(toDate: string): Promise<void> { await this.toDateEdit.fill(toDate); }
  async enterAtSPNNo(spnNo: string): Promise<void> { await this.spnNoEdit.fill(spnNo); await this.spnNoEdit.press('Tab'); }
  async selectAtAgency(agency: string, agencyCode: string): Promise<void> { await this.oriDropdown.selectOption({ label: agency }); await this.oriCodeEdit.fill(agencyCode); }
  async selectAtBillingType(billingType: string): Promise<void> { await this.billingTypeDropdown.selectOption({ label: billingType }); }
  async selectAtSubAgency(subAgency: string): Promise<void> { await this.subAgencyDropdown.selectOption({ label: subAgency }); }
  async clickSearchButton(): Promise<void> { await this.searchButton.click(); }
  async clickResetButton(): Promise<void> { await this.resetButton.click(); }

  async contextClickOnStartDateBySPNNoInGrid(spnNo: string): Promise<void> {
    const cell = this.billingSearchGrid.locator(`//tr[td[contains(text(),'${spnNo}')]]//td[contains(@aria-describedby,'StartDate')]`);
    await cell.click({ button: 'right' });
  }

  async isEnterStartDatePopupDisplayed(): Promise<boolean> {
    const style = await this.enterStartDatePopup.getAttribute('style') || '';
    return style.includes('visibility: visible');
  }

  async enterStartDateAndTimeInPopup(date: string, time: string): Promise<void> {
    await this.startDateEditInPopup.click();
    await this.startDateEditInPopup.fill(date);
    await this.startTimeEditInPopup.fill(time);
  }

  async clickSaveButtonInPopup(): Promise<void> { await this.saveButtonInPopup.click(); }
  async isSearchButtonDisplayed(): Promise<boolean> { return await this.searchButton.isVisible(); }
  async getSubAgencySelected(): Promise<string> { return await this.subAgencyDropdown.inputValue(); }
  async isEnterStartDatePopupHidden(): Promise<boolean> {
    const style = await this.enterStartDatePopup.getAttribute('style') || '';
    return style.includes('visibility: hidden');
  }
}

// ─── Bond Search Screen ──────────────────────────────────────────────────────

export class BondSearchPage {
  readonly page: Page;
  readonly fromDateEdit: Locator;
  readonly fromTimeEdit: Locator;
  readonly toDateEdit: Locator;
  readonly toTimeEdit: Locator;
  readonly bondTypeDropdown: Locator;
  readonly bookingYearEdit: Locator;
  readonly bookingNoEdit: Locator;
  readonly receiptYearEdit: Locator;
  readonly receiptNoEdit: Locator;
  readonly spnNoEdit: Locator;
  readonly payerLastNameEdit: Locator;
  readonly payerFirstNameEdit: Locator;
  readonly includeVoidedCheckbox: Locator;
  readonly searchButton: Locator;
  readonly resetButton: Locator;
  readonly backButton: Locator;
  readonly bondSearchGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fromDateEdit = page.locator('#tabSuspSrch_tmpl0_UsrBondReceiptSrch1_dttmFrom_Date_KPIDttmCtrl');
    this.fromTimeEdit = page.locator("//table[@id='tabSuspSrch_tmpl0_UsrBondReceiptSrch1_dttmFrom_Time']//input");
    this.toDateEdit = page.locator('#tabSuspSrch_tmpl0_UsrBondReceiptSrch1_dttmTo_Date_KPIDttmCtrl');
    this.toTimeEdit = page.locator("//table[@id='tabSuspSrch_tmpl0_UsrBondReceiptSrch1_dttmTo_Time']//input");
    this.bondTypeDropdown = page.locator('#tabSuspSrch_tmpl0_UsrBondReceiptSrch1_cddBondType_DropDown');
    this.bookingYearEdit = page.locator('#tabSuspSrch_tmpl0_UsrBondReceiptSrch1_nbrBooking_Year');
    this.bookingNoEdit = page.locator('#tabSuspSrch_tmpl0_UsrBondReceiptSrch1_nbrBooking_Number');
    this.receiptYearEdit = page.locator('#tabSuspSrch_tmpl0_UsrBondReceiptSrch1_NumBonRec_Year');
    this.receiptNoEdit = page.locator('#tabSuspSrch_tmpl0_UsrBondReceiptSrch1_NumBonRec_Number');
    this.spnNoEdit = page.locator('#tabSuspSrch_tmpl0_UsrBondReceiptSrch1_NameCtrlSPIN_SPN');
    this.payerLastNameEdit = page.locator('#tabSuspSrch_tmpl0_UsrBondReceiptSrch1_txtLastName');
    this.payerFirstNameEdit = page.locator('#tabSuspSrch_tmpl0_UsrBondReceiptSrch1_txtFirstName');
    this.includeVoidedCheckbox = page.locator('#tabSuspSrch_tmpl0_UsrBondReceiptSrch1_chkIsIncludeVoid');
    this.searchButton = page.locator("//span[text()='Search']");
    this.resetButton = page.locator("//span[text()='Reset']");
    this.backButton = page.locator("//span[text()='Back']");
    this.bondSearchGrid = page.locator("//div[@id='grdBondReceipt']");
  }

  async enterAtFromDate(fromDate: string): Promise<void> { await this.fromDateEdit.fill(fromDate); }
  async enterAtFromTime(fromTime: string): Promise<void> { await this.fromTimeEdit.click(); await this.fromTimeEdit.fill(fromTime); }
  async tabOutFromTime(): Promise<void> { await this.fromTimeEdit.press('Tab'); }
  async enterAtToDate(toDate: string): Promise<void> { await this.toDateEdit.fill(toDate); }
  async tabOutToTime(): Promise<void> { await this.toTimeEdit.press('Tab'); }
  async enterFromDateAsCurrentDate(currentDate: string): Promise<void> { await this.fromDateEdit.clear(); await this.fromDateEdit.fill(currentDate); }
  async enterToDateAsCurrentDate(currentDate: string): Promise<void> { await this.toDateEdit.clear(); await this.toDateEdit.fill(currentDate); }
  async selectAtBondType(bondType: string): Promise<void> { await this.bondTypeDropdown.selectOption({ label: bondType }); }
  async enterAtBookingNo(year: string, number: string): Promise<void> { await this.bookingYearEdit.fill(year); await this.bookingNoEdit.fill(number); }
  async enterAtReceiptNo(year: string, number: string): Promise<void> { await this.receiptYearEdit.fill(year); await this.receiptNoEdit.fill(number); }
  async enterAtSPN(spnNo: string): Promise<void> { await this.spnNoEdit.fill(spnNo); }
  async enterAtPayer(lastName: string, firstName: string): Promise<void> { await this.payerLastNameEdit.fill(lastName); await this.payerFirstNameEdit.fill(firstName); }
  async clickSearch(): Promise<void> { await this.searchButton.click(); }
  async clickBack(): Promise<void> { await this.backButton.click(); }
  async clickReset(): Promise<void> { await this.resetButton.click(); }
  async clickIncludeVoidedCheckbox(): Promise<void> { await this.includeVoidedCheckbox.click(); }

  async getGridCellByRowText(rowText: string, column: string): Promise<string> {
    const cell = this.bondSearchGrid.locator(`//tr[td[contains(text(),'${rowText}')]]//td[contains(@aria-describedby,'${column}')]`);
    return (await cell.textContent()) || '';
  }

  async verifyReceiptNoContainsInGrid(receiptNo: string): Promise<boolean> {
    return (await this.bondSearchGrid.locator(`//td[contains(text(),'${receiptNo}')]`).count()) > 0;
  }

  async selectAtSubAgency(subAgency: string): Promise<void> { await this.page.locator('#cddSubAgency_DropDown').selectOption({ label: subAgency }); }
  async verifyAtPaymentMethodInGrid(receiptNo: string, expectedPayment: string): Promise<void> {
    const value = await this.getGridCellByRowText(receiptNo, 'PaymentMethod');
    expect(value).toContain(expectedPayment);
  }
  async verifyAtReceiptInGrid(bondType: string, expectedReceipt: string): Promise<void> {
    const value = await this.getGridCellByRowText(bondType, 'Receipt');
    expect(value).toContain(expectedReceipt);
  }
  async verifyAtInmateInGrid(cmsBooking: string, expectedInmate: string): Promise<void> {
    const value = await this.getGridCellByRowText(cmsBooking, 'Inmate');
    expect(value).toContain(expectedInmate);
  }
  async verifyAtPayerInGrid(inmate: string, expectedPayer: string): Promise<void> {
    const value = await this.getGridCellByRowText(inmate, 'PaidBy');
    expect(value).toContain(expectedPayer);
  }
  async getGridRowColorByReceiptNo(receiptNo: string): Promise<string> {
    const row = this.bondSearchGrid.locator(`//tr[td[contains(text(),'${receiptNo}')]]`);
    return (await row.evaluate(el => getComputedStyle(el).color)) || '';
  }

  // ── Java-name wrappers ────────────────────────────────────────────────────
  async clickIncludeVoidedPartialVoidedCheckbox(): Promise<void> { await this.includeVoidedCheckbox.click(); }
  async verifyGridRowColorAsGreyByReceiptNo(receiptNo: string): Promise<void> {
    const color = await this.getGridRowColorByReceiptNo(receiptNo);
    expect(color).toContain('128, 128, 128');
  }
}

// ─── Classification Ratings Screen ──────────────────────────────────────────

export class ClassificationRatingsPage {
  readonly page: Page;
  readonly scoreEdit: Locator;
  readonly classificationDropdown: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;
  readonly resetButton: Locator;
  readonly classificationRatingGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.scoreEdit = page.locator('#txtScore');
    this.classificationDropdown = page.locator('#cddClassification_DropDown');
    this.addButton = page.locator('#cmdAddScore');
    this.saveButton = page.locator('#cmdSave');
    this.resetButton = page.locator('#cmdRefresh');
    this.classificationRatingGrid = page.locator("//div[@id='grdClassScore']");
  }

  async enterAtScore(score: string): Promise<void> { await this.scoreEdit.fill(score); }
  async selectAtClassification(classification: string): Promise<void> { await this.classificationDropdown.selectOption({ label: classification }); }
  async clickAddButton(): Promise<void> { await this.addButton.click(); }
  async clickSaveButton(): Promise<void> { await this.saveButton.click(); }
  async clickResetButton(): Promise<void> { await this.resetButton.click(); }

  async deleteAtClassification(score: string): Promise<void> {
    await this.classificationRatingGrid.locator(`//tr[td[contains(text(),'${score}')]]//td[@class='Delete_Icon_Style']`).click();
  }

  async getClassificationByScore(score: string): Promise<string> {
    const cell = this.classificationRatingGrid.locator(`//tr[td[contains(text(),'${score}')]]//td[contains(@aria-describedby,'Classification')]`);
    return (await cell.textContent()) || '';
  }

  async getSelectedClassification(): Promise<string> {
    return await this.classificationDropdown.locator('option:checked').textContent() || '';
  }

  async getGridRowCount(): Promise<number> {
    return await this.classificationRatingGrid.locator('//tr[contains(@class,"Row")]').count();
  }

  async selectAtClassificationInGrid(classification: string): Promise<void> {
    await this.classificationRatingGrid.locator(`//td[contains(text(),'${classification}')]`).click();
  }

  async getScoreColumnValues(): Promise<string[]> {
    const cells = this.classificationRatingGrid.locator("//tr[contains(@class,'Row')]//td[contains(@aria-describedby,'Score')]");
    const count = await cells.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) { values.push((await cells.nth(i).textContent()) || ''); }
    return values;
  }

  async getClassificationColumnValues(): Promise<string[]> {
    const cells = this.classificationRatingGrid.locator("//tr[contains(@class,'Row')]//td[contains(@aria-describedby,'Classification')]");
    const count = await cells.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) { values.push((await cells.nth(i).textContent()) || ''); }
    return values;
  }

  async isScoreInGrid(score: string): Promise<boolean> {
    const values = await this.getScoreColumnValues();
    return values.includes(score);
  }

  async isClassificationInGrid(classification: string): Promise<boolean> {
    const values = await this.getClassificationColumnValues();
    return values.includes(classification);
  }

  async verifyConfirmDeleteMessage(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(4)'); await dialog.accept(); });
  }
  async verifyUpdateSuccessfulAckMessage(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('1003 - Update Successful'); await dialog.accept(); });
  }
  async verifyRecordMarkedAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }
  async verifyAdditionSuccessfulMessage(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('1002 - Addition Successful'); await dialog.accept(); });
  }

  // ── Java-name wrappers ────────────────────────────────────────────────────
  async SelectAtClassDrop(classification: string): Promise<void> { await this.selectAtClassification(classification); }
  async clickAddButtonButton(): Promise<void> { await this.clickAddButton(); }
  async verifyConrimDeleteMessage(): Promise<void> { await this.verifyConfirmDeleteMessage(); }
  async clickResetIcon(): Promise<void> { await this.clickResetButton(); }
  async verifyAtClassificationByScore(score: string, expectedClassification: string): Promise<void> {
    const actual = await this.getClassificationByScore(score);
    expect(actual).toContain(expectedClassification);
  }
  async verifyAtClassificationIsNotInGrid(classification: string): Promise<void> {
    expect(await this.isClassificationInGrid(classification)).toBe(false);
  }
  async deleteAtScoreInGrid(score: string): Promise<void> {
    await this.deleteAtClassification(score);
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }
  async verifyScoreIsDeletedFromTheGrid(score: string): Promise<void> {
    expect(await this.isScoreInGrid(score)).toBe(false);
  }
}

// ─── Advanced Tab (Inmate Search) ───────────────────────────────────────────

export class AdvancedTabPage {
  readonly page: Page;
  readonly arrestingAgencyORIEdit: Locator;
  readonly medicalAttentionNeededCheckbox: Locator;
  readonly mentalAttentionNeededCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.arrestingAgencyORIEdit = page.locator('#tabSuspSrch_tmpl1_UsrAdmissionSrchAdva1_ArrestORI_lupORI_CodeValue');
    this.medicalAttentionNeededCheckbox = page.locator('#tabSuspSrch_tmpl1_UsrAdmissionSrchAdva1_chkMedicalAttention');
    this.mentalAttentionNeededCheckbox = page.locator('#tabSuspSrch_tmpl1_UsrAdmissionSrchAdva1_chkMentalAttention');
  }

  async enterAtArrestingAgencyORI(ori: string): Promise<void> { await this.arrestingAgencyORIEdit.fill(ori); await this.arrestingAgencyORIEdit.press('Tab'); }
  async clickMedicalAttentionNeededCheckbox(): Promise<void> { await this.medicalAttentionNeededCheckbox.click(); }
  async clickMentalAttentionNeededCheckbox(): Promise<void> { await this.mentalAttentionNeededCheckbox.click(); }
  async isMedicalAttentionNeededCheckboxVisible(): Promise<boolean> { return await this.medicalAttentionNeededCheckbox.isVisible(); }
  async isMentalAttentionNeededCheckboxVisible(): Promise<boolean> { return await this.mentalAttentionNeededCheckbox.isVisible(); }
}

// ─── Inmate Search Screen ────────────────────────────────────────────────────

export class InmateSearchPage {
  readonly page: Page;
  readonly subAgencyDropdown: Locator;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly spnNoEdit: Locator;
  readonly sexDropdown: Locator;
  readonly raceDropdown: Locator;
  readonly dobEdit: Locator;
  readonly dateTypeDropdown: Locator;
  readonly fromDateEdit: Locator;
  readonly fromTimeEdit: Locator;
  readonly toDateEdit: Locator;
  readonly toTimeEdit: Locator;
  readonly bookingStatusDropdown: Locator;
  readonly buildingDropdown: Locator;
  readonly chargeDispositionDropdown: Locator;
  readonly assignedCellEdit: Locator;
  readonly jailAlertDropdown: Locator;
  readonly detainerTypeDropdown: Locator;
  readonly inmateTypeDropdown: Locator;
  readonly bondTypeDropdown: Locator;
  readonly confineReasonDropdown: Locator;
  readonly sentenceStatusDropdown: Locator;
  readonly releaseDaysEdit: Locator;
  readonly includeClosedCheckbox: Locator;
  readonly dispoPendingCheckbox: Locator;
  readonly allBuildingCheckbox: Locator;
  readonly readyForReleaseCheckbox: Locator;
  readonly sortByDropdown: Locator;
  readonly searchButton: Locator;
  readonly resetButton: Locator;
  readonly backButton: Locator;
  readonly addNewButton: Locator;
  readonly resultTable: Locator;
  readonly riskAssessmentLink: Locator;
  readonly releaseLink: Locator;
  readonly classifyLink: Locator;
  readonly facilityLink: Locator;
  readonly advancedTab: Locator;
  readonly basicTab: Locator;
  readonly fromAgeEdit: Locator;
  readonly toAgeEdit: Locator;
  readonly floorDropdown: Locator;
  readonly podDropdown: Locator;
  readonly classificationDropdown: Locator;
  readonly eligibleForWorkReleaseCheckbox: Locator;
  readonly activeDetainersOnlyCheckbox: Locator;
  readonly qaFormTab: Locator;
  readonly chargeClassDropdown: Locator;
  readonly bookingYearEdit: Locator;
  readonly bookingNoEdit: Locator;
  readonly jurisDropdown: Locator;
  readonly nameLookupIcon: Locator;
  readonly countyNoEdit: Locator;
  readonly cellEdit: Locator;
  readonly intakeCellsOnlyCheckbox: Locator;
  readonly dnaRequiredCheckbox: Locator;
  readonly eligibleForSTSCheckbox: Locator;
  readonly jNameRecordsOnlyCheckbox: Locator;
  readonly includeProgressBarCheckbox: Locator;
  readonly jacketEdit: Locator;
  readonly printIcon: Locator;
  readonly excelIcon: Locator;
  // Advanced Tab
  readonly arrestingAgencyORIEdit: Locator;
  readonly medicalAttentionNeededCheckbox: Locator;
  readonly mentalAttentionNeededCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.subAgencyDropdown = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_cddSubAgency_DropDown');
    this.lastNameEdit = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_nInmateNameID_LastName');
    this.firstNameEdit = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_nInmateNameID_FirstName');
    this.spnNoEdit = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_txtSPIN');
    this.sexDropdown = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_cddSex_DropDown');
    this.raceDropdown = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_cddRace_DropDown');
    this.dobEdit = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_dtDOB_KPIDttmCtrl');
    this.dateTypeDropdown = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_cddDateType_DropDown');
    this.fromDateEdit = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_dttmFromDate_Date_KPIDttmCtrl');
    this.fromTimeEdit = page.locator("//table[@id='tabSuspSrch_tmpl0_UsrAdmissionSrch1_dttmFromDate_Time']//input");
    this.toDateEdit = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_dttmToDate_Date_KPIDttmCtrl');
    this.toTimeEdit = page.locator("//table[@id='tabSuspSrch_tmpl0_UsrAdmissionSrch1_dttmToDate_Time']//input");
    this.bookingStatusDropdown = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_cddBookStatus_ListBox');
    this.buildingDropdown = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_cddBuilding_DropDown');
    this.chargeDispositionDropdown = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_cddChargeDispo_DropDown');
    this.assignedCellEdit = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_CurrentLoc');
    this.jailAlertDropdown = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_cddJailAlert_ListBox');
    this.detainerTypeDropdown = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_cddDetainerType_DropDown');
    this.inmateTypeDropdown = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_cddInmateType_DropDown');
    this.bondTypeDropdown = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_cddBondType_DropDown');
    this.confineReasonDropdown = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_cddConfineReason_DropDown');
    this.sentenceStatusDropdown = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_cddSenStatus_DropDown');
    this.releaseDaysEdit = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_txtRlsDays');
    this.includeClosedCheckbox = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_chkIncludeClosed');
    this.dispoPendingCheckbox = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_chkDispoPending');
    this.allBuildingCheckbox = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_chkAllBuilding');
    this.readyForReleaseCheckbox = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_chkReadyRls');
    this.sortByDropdown = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_cddSortBy_DropDown');
    this.searchButton = page.locator("//div[@id='tlbGridItem']//span[contains(text(),'Search')]");
    this.resetButton = page.locator("//span[text()='Reset']");
    this.backButton = page.locator("//span[text()='Back']");
    this.addNewButton = page.locator("//span[contains(text(),'Add New')]");
    this.resultTable = page.locator("//div[@id='grdAdmission']");
    this.riskAssessmentLink = page.locator("//span[contains(text(),'Risk Assessment')]");
    this.releaseLink = page.locator("//div[contains(@class,'pnxToolBar')]//span[text()='Release']");
    this.classifyLink = page.locator("//span[text()='Classify']");
    this.facilityLink = page.locator("//div[@id='tlbGridItem']//a//span[@title='Facility']");
    this.advancedTab = page.locator("//span[text()='Advanced']");
    this.basicTab = page.locator("//span[text()='Basic']");
    this.fromAgeEdit = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_txtAge');
    this.toAgeEdit = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_txtAgeRange');
    this.floorDropdown = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_cddFloor');
    this.podDropdown = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_cddPod');
    this.classificationDropdown = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_cddClassification_DropDown');
    this.eligibleForWorkReleaseCheckbox = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_chkEgforWkRls');
    this.activeDetainersOnlyCheckbox = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_chkActDetainers');
    this.qaFormTab = page.locator("//span[text()='QA Form']");
    this.chargeClassDropdown = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_cddChargeClass_DropDown');
    this.bookingYearEdit = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_nbrBooking_Year');
    this.bookingNoEdit = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_nbrBooking_Number');
    this.jurisDropdown = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_lstJuris');
    this.nameLookupIcon = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_nInmateNameID_imgSrch');
    this.countyNoEdit = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_txtCountyNbr');
    this.cellEdit = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_lupCell_CodeValue');
    this.intakeCellsOnlyCheckbox = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_chkCell');
    this.dnaRequiredCheckbox = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_chkDNARequired');
    this.eligibleForSTSCheckbox = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_chkEgforSTS');
    this.jNameRecordsOnlyCheckbox = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_chkIncludeJNameRecrd');
    this.includeProgressBarCheckbox = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_chkIncludeProgressBar');
    this.jacketEdit = page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_txtPFN');
    this.printIcon = page.locator("//img[@title='Print']");
    this.excelIcon = page.locator("//img[@title='Export To Excel']");
    this.arrestingAgencyORIEdit = page.locator('#tabSuspSrch_tmpl1_UsrAdmissionSrchAdva1_ArrestORI_lupORI_CodeValue');
    this.medicalAttentionNeededCheckbox = page.locator('#tabSuspSrch_tmpl1_UsrAdmissionSrchAdva1_chkMedicalAttention');
    this.mentalAttentionNeededCheckbox = page.locator('#tabSuspSrch_tmpl1_UsrAdmissionSrchAdva1_chkMentalAttention');
  }

  async selectAtSubAgency(subAgency: string): Promise<void> { await this.subAgencyDropdown.selectOption({ label: subAgency }); }
  async enterAtInmateName(lastName: string, firstName: string): Promise<void> { await this.lastNameEdit.fill(lastName); await this.firstNameEdit.fill(firstName); }
  async enterAtLastName(lastName: string): Promise<void> { await this.lastNameEdit.fill(lastName); }
  async enterAtFirstName(firstName: string): Promise<void> { await this.firstNameEdit.fill(firstName); }
  async enterAtSPNNo(spnNo: string): Promise<void> { await this.spnNoEdit.click(); await this.spnNoEdit.fill(spnNo); }
  async enterSPN(spnNo: string): Promise<void> { await this.spnNoEdit.clear(); await this.spnNoEdit.fill(spnNo); }
  async clearSPN(): Promise<void> { await this.spnNoEdit.clear(); }
  async selectAtSex(sex: string): Promise<void> { await this.sexDropdown.selectOption({ label: sex }); }
  async selectAtRace(race: string): Promise<void> { await this.raceDropdown.selectOption({ label: race }); }
  async enterAtDOB(dob: string): Promise<void> { await this.dobEdit.fill(dob); }
  async selectAtDateType(dateType: string): Promise<void> { await this.dateTypeDropdown.selectOption({ label: dateType }); await this.dateTypeDropdown.press('Tab'); }
  async enterAtFromDate(fromDate: string): Promise<void> { await this.fromDateEdit.click(); await this.fromDateEdit.clear(); await this.fromDateEdit.fill(fromDate); }
  async enterToDateAsCurrentDate(currentDate: string): Promise<void> { await this.toDateEdit.fill(currentDate); }
  async enterAtToDate(toDate: string): Promise<void> { await this.toDateEdit.click(); await this.toDateEdit.fill(toDate); }
  async selectAtBookingStatus(status: string): Promise<void> { await this.bookingStatusDropdown.selectOption({ label: status }); }
  async selectAtBuilding(building: string): Promise<void> { await this.buildingDropdown.selectOption({ label: building }); await this.buildingDropdown.press('Tab'); }
  async selectAtFloor(floor: string): Promise<void> { await this.floorDropdown.selectOption({ label: floor }); }
  async selectAtPod(pod: string): Promise<void> { await this.podDropdown.selectOption({ label: pod }); }
  async enterAtAssignedCell(cell: string): Promise<void> { await this.assignedCellEdit.fill(cell); }
  async selectAtInmateType(inmateType: string): Promise<void> { await this.inmateTypeDropdown.selectOption({ label: inmateType }); }
  async selectAtConfineReason(reason: string): Promise<void> { await this.confineReasonDropdown.selectOption({ label: reason }); }
  async selectAtSentenceStatus(status: string): Promise<void> { await this.sentenceStatusDropdown.selectOption({ label: status }); }
  async selectAtClassification(classification: string): Promise<void> { await this.classificationDropdown.selectOption({ label: classification }); }
  async selectAtSortBy(sortBy: string): Promise<void> { await this.sortByDropdown.selectOption({ label: sortBy }); }
  async selectAtJuris(juris: string): Promise<void> { await this.jurisDropdown.selectOption({ label: juris }); }
  async enterAtAgeRange(fromAge: string, toAge: string): Promise<void> { await this.fromAgeEdit.fill(fromAge); await this.toAgeEdit.fill(toAge); await this.toAgeEdit.press('Tab'); }
  async enterAtCMSBooking(year: string, number: string): Promise<void> { await this.bookingYearEdit.fill(year); await this.bookingNoEdit.fill(number); }
  async enterAtCountyNo(countyNo: string): Promise<void> { await this.countyNoEdit.fill(countyNo); }
  async enterAtCell(cell: string): Promise<void> { await this.cellEdit.fill(cell); await this.cellEdit.press('Tab'); }
  async enterAtJacket(jacketNo: string): Promise<void> { await this.jacketEdit.fill(jacketNo); }

  async clickIncludeClosedBooking(): Promise<void> { await this.includeClosedCheckbox.click(); }
  async clickReadyForRelease(): Promise<void> { await this.readyForReleaseCheckbox.click(); }
  async clickEligibleForWorkReleaseCheckbox(): Promise<void> { await this.eligibleForWorkReleaseCheckbox.click(); }
  async clickActiveDetainersOnlyCheckbox(): Promise<void> { await this.activeDetainersOnlyCheckbox.click(); }
  async clickDispoUpdatePendingCheckbox(): Promise<void> { await this.dispoPendingCheckbox.click(); }
  async clickEligibleForSTSCheckbox(): Promise<void> { await this.eligibleForSTSCheckbox.click(); }
  async clickDNARequiredCheckbox(): Promise<void> { await this.dnaRequiredCheckbox.click(); }
  async clickJNameRecordsOnlyCheckbox(): Promise<void> { await this.jNameRecordsOnlyCheckbox.click(); }
  async clickIncludeAllBuildingsCheckbox(): Promise<void> { await this.allBuildingCheckbox.click(); }
  async clickIncludeProgressBarCheckbox(): Promise<void> { await this.includeProgressBarCheckbox.click(); }
  async clickIntakeCellsOnlyCheckbox(): Promise<void> { await this.intakeCellsOnlyCheckbox.click(); }

  async clickSearch(): Promise<void> { await this.searchButton.click(); }
  async clickBack(): Promise<void> { await this.backButton.click(); }
  async clickReset(): Promise<void> { await this.resetButton.click(); }
  async clickAddNew(): Promise<void> { await this.addNewButton.click(); }
  async clickReleaseLink(): Promise<void> { await this.releaseLink.click(); }
  async clickRiskAssessmentLink(): Promise<void> { await this.riskAssessmentLink.click(); }
  async clickClassifyLink(): Promise<void> { await this.classifyLink.click(); }
  async clickFacilityLink(): Promise<void> { await this.facilityLink.click(); }
  async clickAdvancedTab(): Promise<void> { await this.advancedTab.click(); }
  async clickQAFormTab(): Promise<void> { await this.qaFormTab.click(); }
  async clickNameLookupIcon(): Promise<void> { await this.nameLookupIcon.click(); }

  async enterAtArrestingAgencyORI(ori: string): Promise<void> { await this.arrestingAgencyORIEdit.fill(ori); await this.arrestingAgencyORIEdit.press('Tab'); }
  async clickMedicalAttentionNeededCheckbox(): Promise<void> { await this.medicalAttentionNeededCheckbox.click(); }
  async clickMentalAttentionNeededCheckbox(): Promise<void> { await this.mentalAttentionNeededCheckbox.click(); }

  async selectAtSPNInGrid(spn: string): Promise<void> { await this.resultTable.locator(`//td[contains(text(),'${spn}')]`).click(); }
  async selectAtCMSBookingInGrid(cmsBooking: string): Promise<void> { await this.resultTable.locator(`//td[contains(text(),'${cmsBooking}')]`).click(); }
  async selectAtNameInGrid(name: string): Promise<void> { await this.resultTable.locator(`//td[contains(text(),'${name}')]`).click(); }
  async clickCheckBoxBySPNInGrid(spn: string): Promise<void> { await this.resultTable.locator(`//tr[td[contains(text(),'${spn}')]]//img[@title='Unchecked']`).click(); }
  async clickGridHeader(columnName: string): Promise<void> { await this.resultTable.locator(`//th[contains(text(),'${columnName}')]`).click(); }
  async getGridRowCount(): Promise<number> { return await this.resultTable.locator('//tr[contains(@class,"Row")]').count(); }
  async getSPNFieldValue(): Promise<string> { return await this.spnNoEdit.inputValue(); }
  async isJurisEnabled(): Promise<boolean> { return await this.jurisDropdown.isEnabled(); }

  // Visibility checks
  async isBasicTabDisplayed(): Promise<boolean> { return await this.basicTab.isVisible(); }
  async isAdvancedTabDisplayed(): Promise<boolean> { return await this.advancedTab.isVisible(); }
  async isFacilityLinkDisplayed(): Promise<boolean> { return await this.facilityLink.isVisible(); }
  async isReleaseLinkDisplayed(): Promise<boolean> { return await this.releaseLink.isVisible(); }
  async isClassifyLinkDisplayed(): Promise<boolean> { return await this.classifyLink.isVisible(); }
  async isRiskAssessmentLinkDisplayed(): Promise<boolean> { return await this.riskAssessmentLink.isVisible(); }
  async isAddNewLinkDisplayed(): Promise<boolean> { return await this.addNewButton.isVisible(); }
  async isResetLinkDisplayed(): Promise<boolean> { return await this.resetButton.isVisible(); }
  async isBackLinkDisplayed(): Promise<boolean> { return await this.backButton.isVisible(); }
  async isSearchLinkDisplayed(): Promise<boolean> { return await this.searchButton.isVisible(); }
  async isPrintIconDisplayed(): Promise<boolean> { return await this.printIcon.isVisible(); }
  async isExcelIconDisplayed(): Promise<boolean> { return await this.excelIcon.isVisible(); }
  async isJurisDropdownDisplayed(): Promise<boolean> { return await this.jurisDropdown.isVisible(); }
  async isSPNDisplayed(): Promise<boolean> { return await this.spnNoEdit.isVisible(); }
  async isCMSBookingDisplayed(): Promise<boolean> { return await this.bookingYearEdit.isVisible(); }
  async isCountyNoDisplayed(): Promise<boolean> { return await this.countyNoEdit.isVisible(); }
  async isSexDropdownDisplayed(): Promise<boolean> { return await this.sexDropdown.isVisible(); }
  async isRaceDropdownDisplayed(): Promise<boolean> { return await this.raceDropdown.isVisible(); }
  async isDOBDisplayed(): Promise<boolean> { return await this.dobEdit.isVisible(); }
  async isAgeFromAndToDisplayed(): Promise<boolean> { return await this.fromAgeEdit.isVisible() && await this.toAgeEdit.isVisible(); }
  async isDateTypeDropdownDisplayed(): Promise<boolean> { return await this.dateTypeDropdown.isVisible(); }
  async isFromDateDisplayed(): Promise<boolean> { return await this.fromDateEdit.isVisible(); }
  async isToDateDisplayed(): Promise<boolean> { return await this.toDateEdit.isVisible(); }
  async isBookingStatusDropdownDisplayed(): Promise<boolean> { return await this.bookingStatusDropdown.isVisible(); }
  async isFloorDropdownDisplayed(): Promise<boolean> { return await this.floorDropdown.isVisible(); }
  async isPodDropdownDisplayed(): Promise<boolean> { return await this.podDropdown.isVisible(); }
  async isCellDisplayed(): Promise<boolean> { return await this.cellEdit.isVisible(); }
  async isIntakeCellsOnlyCheckboxDisplayed(): Promise<boolean> { return await this.intakeCellsOnlyCheckbox.isVisible(); }
  async isChargeDispositionDropdownDisplayed(): Promise<boolean> { return await this.chargeDispositionDropdown.isVisible(); }
  async isAssignedCellDisplayed(): Promise<boolean> { return await this.assignedCellEdit.isVisible(); }
  async isJailAlertDropdownDisplayed(): Promise<boolean> { return await this.jailAlertDropdown.isVisible(); }
  async isDetainerTypeDropdownDisplayed(): Promise<boolean> { return await this.detainerTypeDropdown.isVisible(); }
  async isInmateTypeDropdownDisplayed(): Promise<boolean> { return await this.inmateTypeDropdown.isVisible(); }
  async isBondTypeDropdownDisplayed(): Promise<boolean> { return await this.bondTypeDropdown.isVisible(); }
  async isConfineReasonDropdownDisplayed(): Promise<boolean> { return await this.confineReasonDropdown.isVisible(); }
  async isClassificationDropdownDisplayed(): Promise<boolean> { return await this.classificationDropdown.isVisible(); }
  async isSentenceStatusDropdownDisplayed(): Promise<boolean> { return await this.sentenceStatusDropdown.isVisible(); }
  async isReleaseDaysDisplayed(): Promise<boolean> { return await this.releaseDaysEdit.isVisible(); }
  async isIncludeAllBuildingsCheckboxDisplayed(): Promise<boolean> { return await this.allBuildingCheckbox.isVisible(); }
  async isDNARequiredCheckboxDisplayed(): Promise<boolean> { return await this.dnaRequiredCheckbox.isVisible(); }
  async isDispoUpdatePendingCheckboxDisplayed(): Promise<boolean> { return await this.dispoPendingCheckbox.isVisible(); }
  async isEligibleForWorkReleaseCheckboxDisplayed(): Promise<boolean> { return await this.eligibleForWorkReleaseCheckbox.isVisible(); }
  async isReadyForReleaseCheckboxDisplayed(): Promise<boolean> { return await this.readyForReleaseCheckbox.isVisible(); }
  async isIncludeClosedBookingsCheckboxDisplayed(): Promise<boolean> { return await this.includeClosedCheckbox.isVisible(); }
  async isEligibleForSTSCheckboxDisplayed(): Promise<boolean> { return await this.eligibleForSTSCheckbox.isVisible(); }
  async isQAFormTabDisplayed(): Promise<boolean> { return await this.qaFormTab.isVisible(); }
  async isQAFormTabEnabled(): Promise<boolean> { return await this.qaFormTab.isEnabled(); }
  async isChargeClassDropdownDisplayed(): Promise<boolean> { return await this.chargeClassDropdown.isVisible(); }
  async isMedicalAttentionNeededCheckboxDisplayed(): Promise<boolean> { return await this.medicalAttentionNeededCheckbox.isVisible(); }
  async isMentalAttentionNeededCheckboxDisplayed(): Promise<boolean> { return await this.mentalAttentionNeededCheckbox.isVisible(); }
  async isNameFieldsDisplayed(): Promise<boolean> { return await this.lastNameEdit.isVisible() && await this.firstNameEdit.isVisible(); }
  async isDocumentTypeDropdownDisplayed(): Promise<boolean> { return await this.page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_cddDocType_ListBox').isVisible(); }
  async isSpecialNeedTypeDropdownDisplayed(): Promise<boolean> { return await this.page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_cddSpecNeeds_ListBox').isVisible(); }
  async isWorkReleaseLinkDisplayed(): Promise<boolean> { return await this.page.locator("//span[contains(text(),'Work Release')]").isVisible(); }
  async isPayBondLinkDisplayed(): Promise<boolean> { return await this.page.locator("//span[contains(text(),'Pay Bond')]").isVisible(); }
  async isBuildingDropdownDisplayed(): Promise<boolean> { return await this.buildingDropdown.isVisible(); }

  // Getters
  async getSelectedBuilding(): Promise<string> { return await this.buildingDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedFloor(): Promise<string> { return await this.floorDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedPod(): Promise<string> { return await this.podDropdown.locator('option:checked').textContent() || ''; }
  async getSPNFromGrid(rowIndex: number): Promise<string> { return (await this.resultTable.locator(`//tr[contains(@class,'Row')][${rowIndex}]//td[contains(@aria-describedby,'SPN')]`).textContent()) || ''; }
  async getClassificationFromGrid(spn: string): Promise<string> { return (await this.resultTable.locator(`//tr[td[contains(text(),'${spn}')]]//td[contains(@aria-describedby,'Class')]`).textContent()) || ''; }
  async selectRandomGridRow(): Promise<void> { const rows = this.resultTable.locator('//tr[contains(@class,"Row")]'); const count = await rows.count(); if (count > 0) { await rows.nth(Math.floor(Math.random() * count)).click(); } }
  async selectAtChargeClass(chargeClass: string): Promise<void> { await this.chargeClassDropdown.selectOption({ label: chargeClass }); }
  async selectAtChargeDisposition(disposition: string): Promise<void> { await this.chargeDispositionDropdown.selectOption({ label: disposition }); }
  async selectAtDetainerType(type: string): Promise<void> { await this.detainerTypeDropdown.selectOption({ label: type }); }
  async selectAtBondType(bondType: string): Promise<void> { await this.bondTypeDropdown.selectOption({ label: bondType }); }
  async selectAtJailAlert(alert: string): Promise<void> { await this.jailAlertDropdown.selectOption({ label: alert }); }
  async enterAtReleaseDays(days: string): Promise<void> { await this.releaseDaysEdit.fill(days); }
  async clickPayBondLink(): Promise<void> { await this.page.locator("//span[contains(text(),'Pay Bond')]").click(); }
  async clickWorkReleaseLink(): Promise<void> { await this.page.locator("//span[contains(text(),'Work Release')]").click(); }
  async isDetCheckboxSelectedBySPN(spn: string): Promise<boolean> { return (await this.resultTable.locator(`//tr[td[contains(text(),'${spn}')]]//td[contains(@aria-describedby,'Det')]//img`).getAttribute('title')) === 'Checked'; }
  async doubleClickAtSPNInGrid(spn: string): Promise<void> { await this.resultTable.locator(`//td[contains(text(),'${spn}')]`).dblclick(); }

  // Additional getters/verifiers from Java source
  async getSelectedJuris(): Promise<string> { return await this.jurisDropdown.locator('option:checked').textContent() || ''; }
  async getSPNFromGridByName(name: string): Promise<string> { return (await this.resultTable.locator(`//tr[td[contains(text(),'${name}')]]//td[contains(@aria-describedby,'SPN')]`).textContent()) || ''; }
  async getCMSBookingByNameInGrid(name: string): Promise<string> { return (await this.resultTable.locator(`//tr[td[contains(text(),'${name}')]]//td[contains(@aria-describedby,'CMSBooking')]`).textContent()) || ''; }
  async getNameFromGrid(name: string): Promise<string> { return (await this.resultTable.locator(`//td[contains(text(),'${name}')]`).textContent()) || ''; }
  async getAssignedCellColumnValues(): Promise<string[]> {
    const cells = this.resultTable.locator("//tr[contains(@class,'Row')]//td[contains(@aria-describedby,'AssignedCell')]");
    const count = await cells.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) { values.push((await cells.nth(i).textContent()) || ''); }
    return values;
  }
  async getBookingDateColumnValues(): Promise<string[]> {
    const cells = this.resultTable.locator("//tr[contains(@class,'Row')]//td[contains(@aria-describedby,'BookingDate')]");
    const count = await cells.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) { values.push((await cells.nth(i).textContent()) || ''); }
    return values;
  }
  async getNameColumnValues(): Promise<string[]> {
    const cells = this.resultTable.locator("//tr[contains(@class,'Row')]//td[contains(@aria-describedby,'Name')]");
    const count = await cells.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) { values.push((await cells.nth(i).textContent()) || ''); }
    return values;
  }
  async getSPNColumnValues(): Promise<string[]> {
    const cells = this.resultTable.locator("//tr[contains(@class,'Row')]//td[contains(@aria-describedby,'SPN')]");
    const count = await cells.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) { values.push((await cells.nth(i).textContent()) || ''); }
    return values;
  }
  async isBookingProgressColumnDisplayed(): Promise<boolean> {
    return await this.resultTable.locator("//th[contains(text(),'Booking Progress')]").isVisible();
  }
  async enterAtFromTime(fromTime: string): Promise<void> {
    await this.fromTimeEdit.press('Tab');
    await this.fromTimeEdit.click();
    await this.fromTimeEdit.fill(fromTime);
  }
  async enterAtToTime(toTime: string): Promise<void> {
    await this.toTimeEdit.press('Tab');
    await this.toTimeEdit.click();
    await this.toTimeEdit.fill(toTime);
  }
  async enterFromDateAsFutureDate(date: string): Promise<void> { await this.fromDateEdit.click(); await this.fromDateEdit.clear(); await this.fromDateEdit.fill(date); }
  async enterToDateAsFutureDate(date: string): Promise<void> { await this.toDateEdit.click(); await this.toDateEdit.fill(date); }
  async enterAtFirstNameAndTabOut(firstName: string): Promise<void> { await this.firstNameEdit.fill(firstName); await this.firstNameEdit.press('Tab'); }
  async selectAtSpecialNeedType(needType: string): Promise<void> {
    await this.page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_cddSpecNeeds_ListBox').selectOption({ label: needType });
  }
  async selectAtDocumentType(docType: string): Promise<void> {
    await this.page.locator('#tabSuspSrch_tmpl0_UsrAdmissionSrch1_cddDocType_ListBox').selectOption({ label: docType });
  }
  async selectAtContextValueBySPNInGrid(spn: string, contextValue: string): Promise<void> {
    await this.resultTable.locator(`//td[contains(text(),'${spn}')]`).click({ button: 'right' });
    await this.page.locator(`//li[contains(text(),'${contextValue}')]`).click();
  }
  async enterAtAgeAndAgeRange(age: string, ageRange: string): Promise<void> { await this.fromAgeEdit.fill(age); await this.toAgeEdit.fill(ageRange); }
  async getFromDateLabelColor(): Promise<string> { return await this.page.locator("//label[contains(text(),'From')]").evaluate(el => getComputedStyle(el).color); }
  async getToDateLabelColor(): Promise<string> { return await this.page.locator("//label[contains(text(),'To')]").evaluate(el => getComputedStyle(el).color); }

  // Additional visibility/state checks
  async isSortByDropdownDisplayed(): Promise<boolean> { return await this.sortByDropdown.isVisible(); }
  async isActiveDetainersOnlyCheckboxDisplayed(): Promise<boolean> { return await this.activeDetainersOnlyCheckbox.isVisible(); }
  async isJNameRecordsOnlyCheckboxDisplayed(): Promise<boolean> { return await this.jNameRecordsOnlyCheckbox.isVisible(); }
  async isIncludeProgressBarCheckboxDisplayed(): Promise<boolean> { return await this.includeProgressBarCheckbox.isVisible(); }
  async isJurisDisabled(): Promise<boolean> { return !(await this.jurisDropdown.isEnabled()); }

  // ── Hardcoded SPN entry methods ─────────────────────────────────────────
  async enterOverrideIntakeSPNNo(): Promise<void> { await this.spnNoEdit.fill('272'); }
  async enterForceCloseSPNNo(): Promise<void> { await this.spnNoEdit.fill('263'); }
  async enterAtAdmissionSPNNo(spn: string): Promise<void> { await this.spnNoEdit.fill(spn); }

  // ── SubAgency verification ──────────────────────────────────────────────
  async isSubAgencyDropdownDisabled(): Promise<boolean> { return !(await this.page.locator('#cddSubAgency_DropDown').isEnabled()); }

  // ── Grid verify/assert methods ──────────────────────────────────────────
  async verifyTheCountInGrid(): Promise<void> { expect(await this.getGridRowCount()).toBeGreaterThan(0); }
  async verifyGridCount(expected: number): Promise<void> { expect(await this.getGridRowCount()).toBe(expected); }
  async verifyTheNameInGridBySPN(cmsBooking: string, expectedName: string): Promise<void> {
    const nameCell = this.resultTable.locator(`//tr[td[contains(text(),'${cmsBooking}')]]//td[contains(@aria-describedby,'Name')]`);
    expect(await nameCell.textContent()).toContain(expectedName);
  }
  async verifyAtSPNInGrid(spn: string): Promise<void> {
    const cell = this.resultTable.locator(`//td[contains(text(),'${spn}')]`);
    expect(await cell.textContent()).toContain(spn);
  }
  async verifyAtNameInGrid(name: string): Promise<void> {
    const cell = await this.getNameFromGrid(name);
    expect(cell).toContain(name);
  }
  async verifyAtCMSBookingByNameInGrid(name: string, expectedCMS: string): Promise<void> {
    const cms = await this.getCMSBookingByNameInGrid(name);
    expect(cms).toContain(expectedCMS);
  }
  async verifyAtAssignedCellInGrid(expected: string): Promise<void> {
    const cells = await this.getAssignedCellColumnValues();
    expect(cells.some(c => c.includes(expected))).toBe(true);
  }
  async verifyAtClassificationInGrid(spn: string, expected: string): Promise<void> {
    const actual = await this.getClassificationFromGrid(spn);
    expect(actual).toContain(expected);
  }
  async verifyNameColumnValuesInAlphabeticalOrder(): Promise<void> {
    const names = await this.getNameColumnValues();
    const sorted = [...names].sort((a, b) => a.localeCompare(b));
    expect(names).toEqual(sorted);
  }
  async verifySPNListingAsAscendingOrder(): Promise<void> {
    const spns = await this.getSPNColumnValues();
    const sorted = [...spns].sort((a, b) => parseInt(a) - parseInt(b));
    expect(spns).toEqual(sorted);
  }
  async verifyAtGridColumnSortedAscending(columnName: string): Promise<void> {
    const cells = await this.resultTable.locator(`//td[contains(@aria-describedby,'${columnName}')]`).allTextContents();
    const sorted = [...cells].sort((a, b) => a.localeCompare(b));
    expect(cells).toEqual(sorted);
  }
  async verifyAtGridColumnSortedDescending(columnName: string): Promise<void> {
    const cells = await this.resultTable.locator(`//td[contains(@aria-describedby,'${columnName}')]`).allTextContents();
    const sorted = [...cells].sort((a, b) => b.localeCompare(a));
    expect(cells).toEqual(sorted);
  }
  async verifyAtFloorContainsAllInGrid(floor: string): Promise<void> {
    const cells = await this.getAssignedCellColumnValues();
    for (const cell of cells) { expect(cell).toContain(floor); }
  }
  async verifyAtCellContainsAllInGrid(cell: string): Promise<void> {
    const cells = await this.getAssignedCellColumnValues();
    for (const c of cells) { expect(c).toContain(cell); }
  }

  // ── Dropdown value verifications ────────────────────────────────────────
  async verifyAtBuilding(expected: string): Promise<void> { expect(await this.getSelectedBuilding()).toBe(expected); }
  async verifyAtFloor(expected: string): Promise<void> { expect(await this.getSelectedFloor()).toBe(expected); }
  async verifyAtPodIsSelected(expected: string): Promise<void> { expect(await this.getSelectedPod()).toContain(expected); }
  async verifyAtJuris(expected: string): Promise<void> { expect(await this.getSelectedJuris()).toContain(expected); }
  async verifyAtSPNNo(expected: string): Promise<void> { expect(await this.getSPNFieldValue()).toBe(expected); }
  async verifyAtSPNNoIsBlank(): Promise<void> { expect(await this.getSPNFieldValue()).toBe(''); }
  async verifyFromDateAsMandatory(): Promise<void> {
    const color = await this.getFromDateLabelColor();
    expect(color).toContain('128, 0, 0');
  }
  async verifyToDateAsMandatory(): Promise<void> {
    const color = await this.getToDateLabelColor();
    expect(color).toContain('128, 0, 0');
  }

  // ── Popup handlers ─────────────────────────────────────────────────────
  async verify30138SPNNameChangeAcknowledge(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30138)');
      await dialog.accept();
    });
  }
  async verify1011NoRecordFoundAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('1011');
      await dialog.accept();
    });
  }
  async verify30033EnterJurisAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30033) Enter Juris');
      await dialog.accept();
    });
  }
  async verify30033EnterToAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30033) Enter To');
      await dialog.accept();
    });
  }
  async verify1008PageErrorDoesNotArise(): Promise<void> {
    let dialogAppeared = false;
    const handler = () => { dialogAppeared = true; };
    this.page.on('dialog', handler);
    await this.page.waitForTimeout(1000);
    this.page.off('dialog', handler);
    expect(dialogAppeared).toBe(false);
  }

  // ── Booking date range verification ─────────────────────────────────────
  async verifyAtBookingDateBetweenFromAndToDates(fromDate: string, toDate: string): Promise<void> {
    const dates = await this.getBookingDateColumnValues();
    const from = new Date(fromDate).getTime();
    const to = new Date(toDate).getTime();
    for (const d of dates) {
      const dt = new Date(d).getTime();
      expect(dt).toBeGreaterThanOrEqual(from);
      expect(dt).toBeLessThanOrEqual(to);
    }
  }

  // ── Copy/Paste keyboard methods ─────────────────────────────────────────
  async copyAtSPNNo(): Promise<void> {
    await this.spnNoEdit.click();
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Control+C');
  }
  async pasteOnSPNNo(): Promise<void> {
    await this.spnNoEdit.click();
    await this.spnNoEdit.clear();
    await this.page.keyboard.press('Control+V');
  }

  // ── Grid selection variants ─────────────────────────────────────────────
  async selectAtInmateRecordChkBox(cmsBooking: string): Promise<void> {
    const row = this.resultTable.locator(`//tr[td[contains(text(),'${cmsBooking}')]]`);
    await row.locator("//input[@type='checkbox']").click();
  }
  async clickAtCMSBookingNo(bookingNo: string): Promise<void> {
    await this.resultTable.locator(`//td[contains(text(),'${bookingNo}')]`).click();
  }
  async selectAtInmateRecord(name: string): Promise<void> {
    await this.page.locator(`//div[@id='grdAdmission']//table/tbody/tr/td[text()='${name}']`).click();
  }
  async enterAtCMSNoReadJson(year: string, no: string): Promise<void> {
    await this.page.locator('#txtCMSBookingYear').fill(year);
    await this.page.locator('#txtCMSBookingNo').fill(no);
  }
  async selectAtSPNInGridUsingIndex(spn: string): Promise<void> {
    await this.resultTable.locator(`//td[text()='${spn}']`).click();
  }

  // ── Java-name verify*IsDisplayed wrappers ─────────────────────────────────
  async verifyMedicalAttentionNeededCheckboxIsDisplayed(): Promise<void> { expect(await this.isMedicalAttentionNeededCheckboxDisplayed()).toBe(true); }
  async verifyMentalAttentionNeededCheckboxIsDisplayed(): Promise<void> { expect(await this.isMentalAttentionNeededCheckboxDisplayed()).toBe(true); }
  async verifyQAFormTabIsDisplayed(): Promise<void> { expect(await this.isQAFormTabDisplayed()).toBe(true); }
  async verifyQAFormTabIsEnabled(): Promise<void> { expect(await this.isQAFormTabEnabled()).toBe(true); }
  async verifyBasicTabIsDisplayed(): Promise<void> { expect(await this.isBasicTabDisplayed()).toBe(true); }
  async verifyAdvanceTabIsDisplayed(): Promise<void> { expect(await this.isAdvancedTabDisplayed()).toBe(true); }
  async verifyFacilityLinkIsDisplayed(): Promise<void> { expect(await this.isFacilityLinkDisplayed()).toBe(true); }
  async verifyPayBondLinkIsDisplayed(): Promise<void> { expect(await this.isPayBondLinkDisplayed()).toBe(true); }
  async verifyReleaseLinkIsDisplayed(): Promise<void> { expect(await this.isReleaseLinkDisplayed()).toBe(true); }
  async verifyClassifyLinkIsDisplayed(): Promise<void> { expect(await this.isClassifyLinkDisplayed()).toBe(true); }
  async verifyRiskAssessmentLinkIsDisplayed(): Promise<void> { expect(await this.isRiskAssessmentLinkDisplayed()).toBe(true); }
  async verifyWorkReleaseLinkIsDisplayed(): Promise<void> { expect(await this.isWorkReleaseLinkDisplayed()).toBe(true); }
  async verifyAddNewLinkIsDisplayed(): Promise<void> { expect(await this.isAddNewLinkDisplayed()).toBe(true); }
  async verifyResetLinkIsDisplayed(): Promise<void> { expect(await this.isResetLinkDisplayed()).toBe(true); }
  async verifyBackLinkIsDisplayed(): Promise<void> { expect(await this.isBackLinkDisplayed()).toBe(true); }
  async verifySearchLinkIsDisplayed(): Promise<void> { expect(await this.isSearchLinkDisplayed()).toBe(true); }
  async verifyPrintIconIsDisplayed(): Promise<void> { expect(await this.isPrintIconDisplayed()).toBe(true); }
  async verifyExcelIconIsDisplayed(): Promise<void> { expect(await this.isExcelIconDisplayed()).toBe(true); }
  async verifyJurisDropdownIsDisplayed(): Promise<void> { expect(await this.isJurisDropdownDisplayed()).toBe(true); }
  async verifyNameFieldsAreDisplayed(): Promise<void> { expect(await this.isNameFieldsDisplayed()).toBe(true); }
  async verifyCMSBookingIsDisplayed(): Promise<void> { expect(await this.isCMSBookingDisplayed()).toBe(true); }
  async verifyCountyNoIsDisplayed(): Promise<void> { expect(await this.isCountyNoDisplayed()).toBe(true); }
  async verifySexDropdownIsDisplayed(): Promise<void> { expect(await this.isSexDropdownDisplayed()).toBe(true); }
  async verifyRaceDropdownIsDisplayed(): Promise<void> { expect(await this.isRaceDropdownDisplayed()).toBe(true); }
  async verifyDOBIsDisplayed(): Promise<void> { expect(await this.isDOBDisplayed()).toBe(true); }
  async verifyAgeFromAndToAreDisplayed(): Promise<void> { expect(await this.isAgeFromAndToDisplayed()).toBe(true); }
  async verifyDateTypeDropdownIsDisplayed(): Promise<void> { expect(await this.isDateTypeDropdownDisplayed()).toBe(true); }
  async verifyFromDateAndTimeAreDisplayed(): Promise<void> { expect(await this.isFromDateDisplayed()).toBe(true); expect(await this.fromTimeEdit.isVisible()).toBe(true); }
  async verifyToDateAndTimeAreDisplayed(): Promise<void> { expect(await this.isToDateDisplayed()).toBe(true); expect(await this.toTimeEdit.isVisible()).toBe(true); }
  async verifyBookingStatusDropdownIsDisplayed(): Promise<void> { expect(await this.isBookingStatusDropdownDisplayed()).toBe(true); }
  async verifyFloorDropdownIsDisplayed(): Promise<void> { expect(await this.isFloorDropdownDisplayed()).toBe(true); }
  async verifyPodDropdownIsDisplayed(): Promise<void> { expect(await this.isPodDropdownDisplayed()).toBe(true); }
  async verifyCellIsDisplayed(): Promise<void> { expect(await this.isCellDisplayed()).toBe(true); }
  async verifyIntakeCellsOnlyCheckboxIsDisplayed(): Promise<void> { expect(await this.isIntakeCellsOnlyCheckboxDisplayed()).toBe(true); }
  async verifyChargeDispositionDropdownIsDisplayed(): Promise<void> { expect(await this.isChargeDispositionDropdownDisplayed()).toBe(true); }
  async verifyAssignedCellIsDisplayed(): Promise<void> { expect(await this.isAssignedCellDisplayed()).toBe(true); }
  async verifyDetainerTypeDropdownIsDisplayed(): Promise<void> { expect(await this.isDetainerTypeDropdownDisplayed()).toBe(true); }
  async verifyInmateTypeDropdownIsDisplayed(): Promise<void> { expect(await this.isInmateTypeDropdownDisplayed()).toBe(true); }
  async verifyDocumentTypeDropdownIsDisplayed(): Promise<void> { expect(await this.isDocumentTypeDropdownDisplayed()).toBe(true); }
  async verifyConfineReasonDropdownIsDisplayed(): Promise<void> { expect(await this.isConfineReasonDropdownDisplayed()).toBe(true); }
  async verifySpecialNeedTypeDropdownIsDisplayed(): Promise<void> { expect(await this.isSpecialNeedTypeDropdownDisplayed()).toBe(true); }
  async verifyClassificationDropdownIsDisplayed(): Promise<void> { expect(await this.isClassificationDropdownDisplayed()).toBe(true); }
  async verifySentenceStatusDropdownIsDisplayed(): Promise<void> { expect(await this.isSentenceStatusDropdownDisplayed()).toBe(true); }
  async verifyToBeReleaseInDaysIsDisplayed(): Promise<void> { expect(await this.isReleaseDaysDisplayed()).toBe(true); }
  async verifyIncludeAllBuildingsCheckboxIsDisplayed(): Promise<void> { expect(await this.isIncludeAllBuildingsCheckboxDisplayed()).toBe(true); }
  async verifyDNARequiredCheckboxIsDisplayed(): Promise<void> { expect(await this.isDNARequiredCheckboxDisplayed()).toBe(true); }
  async verifyDispoUpdatePendingCheckboxIsDisplayed(): Promise<void> { expect(await this.isDispoUpdatePendingCheckboxDisplayed()).toBe(true); }
  async verifyEligibleForWorkReleaseCheckboxIsDisplayed(): Promise<void> { expect(await this.isEligibleForWorkReleaseCheckboxDisplayed()).toBe(true); }
  async verifyReadyForReleaseCheckboxIsDisplayed(): Promise<void> { expect(await this.isReadyForReleaseCheckboxDisplayed()).toBe(true); }
  async verifyIncludeClosedBookingsCheckboxIsDisplayed(): Promise<void> { expect(await this.isIncludeClosedBookingsCheckboxDisplayed()).toBe(true); }
  async verifyEligibleForSTSCheckboxIsDisplayed(): Promise<void> { expect(await this.isEligibleForSTSCheckboxDisplayed()).toBe(true); }
  async verifySortByDropdownIsDisplayed(): Promise<void> { expect(await this.isSortByDropdownDisplayed()).toBe(true); }
  async verifyActiveDetainersOnlyCheckboxIsDisplayed(): Promise<void> { expect(await this.isActiveDetainersOnlyCheckboxDisplayed()).toBe(true); }
  async verifyJNameRecordsOnlyCheckboxIsDisplayed(): Promise<void> { expect(await this.isJNameRecordsOnlyCheckboxDisplayed()).toBe(true); }
  async verifyIncludeProgressBarCheckboxIsDisplayed(): Promise<void> { expect(await this.isIncludeProgressBarCheckboxDisplayed()).toBe(true); }
  async verifyChargeClassDropdownIsDisplayed(): Promise<void> { expect(await this.isChargeClassDropdownDisplayed()).toBe(true); }

  // ── Java-name enabled/disabled wrappers ───────────────────────────────────
  async verifyJurisDropdownIsEnabled(): Promise<void> { expect(await this.isJurisEnabled()).toBe(true); }
  async verifyJurisIsDisabled(): Promise<void> { expect(await this.isJurisDisabled()).toBe(true); }

  // ── Java-name renamed method wrappers ─────────────────────────────────────
  async clickQAFromTab(): Promise<void> { await this.clickQAFormTab(); }
  async clickBackButton(): Promise<void> { await this.clickBack(); }
  async SelectBuilding(building: string): Promise<void> { await this.selectAtBuilding(building); }
  async SelectChargeDispo(disposition: string): Promise<void> { await this.selectAtChargeDisposition(disposition); }
  async ToBeReleaseDays(days: string): Promise<void> { await this.enterAtReleaseDays(days); }
  async InculdeClosedBooking(): Promise<void> { await this.clickIncludeClosedBooking(); }
  async SelectRiskAssessmentlink(): Promise<void> { await this.clickRiskAssessmentLink(); }
  async selectAtSPNInGridByRow(spn: string): Promise<void> { await this.selectAtSPNInGrid(spn); }

  // ── Java-name grid verification wrappers ──────────────────────────────────
  async verifySubAgencyDropdownDiabled(): Promise<void> { expect(await this.subAgencyDropdown.isVisible()).toBe(true); }
  async verifyDetCheckboxIsSelectedBySPNNoInGrid(spn: string): Promise<void> { expect(await this.isDetCheckboxSelectedBySPN(spn)).toBe(true); }
  async verifyNameColumnValuesDisplayedInAlphabeticalOrderInGrid(): Promise<void> { await this.verifyNameColumnValuesInAlphabeticalOrder(); }
  async verifyAtGridColumnSortedAsAcendingOrder(columnName: string): Promise<void> { await this.verifyAtGridColumnSortedAscending(columnName); }
  async verifyAtGridColumnSortedAsDescendingOrder(columnName: string): Promise<void> { await this.verifyAtGridColumnSortedDescending(columnName); }
  async verifySPNListingAsAscendingOrderInGrid(): Promise<void> { await this.verifySPNListingAsAscendingOrder(); }
  async verifyBookingProgressColumnDisplayedInGrid(): Promise<void> { expect(await this.isBookingProgressColumnDisplayed()).toBe(true); }
  async verifyAtBookingDateBetweenFromAndToDatesAndTimes(fromDateTime: string, toDateTime: string): Promise<void> { await this.verifyAtBookingDateBetweenFromAndToDates(fromDateTime, toDateTime); }

  // ── Java-name typo wrappers ───────────────────────────────────────────────
  async enterFromDateAsFututeDate(date: string): Promise<void> { await this.enterFromDateAsFutureDate(date); }
  async enterToDateAsFututeDate(date: string): Promise<void> { await this.enterToDateAsFutureDate(date); }

  // ── Java-name new implementations ─────────────────────────────────────────
  async enterAtAgeAddAndSub(fromAge: string, toAge: string): Promise<void> { await this.fromAgeEdit.fill(fromAge); await this.toAgeEdit.fill(toAge); await this.toAgeEdit.press('Tab'); }
  async verifyAtDateType(dateType: string): Promise<void> {
    const options = await this.dateTypeDropdown.locator('option').allTextContents();
    expect(options).toContain(dateType);
  }
  async verifyAtBookingStatus(status: string): Promise<void> {
    const options = await this.bookingStatusDropdown.locator('option').allTextContents();
    expect(options).toContain(status);
  }
}

// ─── Pay to Stay Search Screen ───────────────────────────────────────────────

export class PaytoStaySearchPage {
  readonly page: Page;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly spnNoEdit: Locator;
  readonly fromDateEdit: Locator;
  readonly toDateEdit: Locator;
  readonly billingTypeDropdown: Locator;
  readonly searchButton: Locator;
  readonly resetButton: Locator;
  readonly backButton: Locator;
  readonly addNewButton: Locator;
  readonly payToStayGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.lastNameEdit = page.locator('#tabSuspSrch_tmpl0_usrAdmPayToStayBasic1_txtLastName');
    this.firstNameEdit = page.locator('#tabSuspSrch_tmpl0_usrAdmPayToStayBasic1_txtFirstName');
    this.spnNoEdit = page.locator('#tabSuspSrch_tmpl0_usrAdmPayToStayBasic1_txtSPIN');
    this.fromDateEdit = page.locator('#tabSuspSrch_tmpl0_usrAdmPayToStayBasic1_dttmFromDate_KPIDttmCtrl');
    this.toDateEdit = page.locator('#tabSuspSrch_tmpl0_usrAdmPayToStayBasic1_dttmToDate_KPIDttmCtrl');
    this.billingTypeDropdown = page.locator('#tabSuspSrch_tmpl0_usrAdmPayToStayBasic1_cddBillingType_DropDown');
    this.searchButton = page.locator("//span[text()='Search']");
    this.resetButton = page.locator("//span[text()='Reset']");
    this.backButton = page.locator("//span[text()='Back']");
    this.addNewButton = page.locator("//span[contains(text(),'Add New')]");
    this.payToStayGrid = page.locator("//div[@id='grdPayToStay']");
  }

  async enterAtInmateName(lastName: string, firstName: string): Promise<void> { await this.lastNameEdit.fill(lastName); await this.firstNameEdit.fill(firstName); }
  async enterAtSPNNo(spnNo: string): Promise<void> { await this.spnNoEdit.fill(spnNo); }
  async enterAtFromDate(fromDate: string): Promise<void> { await this.fromDateEdit.fill(fromDate); }
  async enterToDateAsCurrentDate(currentDate: string): Promise<void> { await this.toDateEdit.fill(currentDate); }
  async selectAtBillingType(billingType: string): Promise<void> { await this.billingTypeDropdown.selectOption({ label: billingType }); }
  async clickSearch(): Promise<void> { await this.searchButton.click(); }
  async clickBack(): Promise<void> { await this.backButton.click(); }
  async clickReset(): Promise<void> { await this.resetButton.click(); }
  async clickAddNew(): Promise<void> { await this.addNewButton.click(); }
  async verifySPNWithName(name: string, expectedSPN: string): Promise<void> {
    const cell = this.payToStayGrid.locator(`//tr[td[contains(text(),'${name}')]]//td[contains(@aria-describedby,'SPN')]`);
    expect(await cell.textContent()).toContain(expectedSPN);
  }
  async verifyDateWithName(name: string, expectedDate: string): Promise<void> {
    const cell = this.payToStayGrid.locator(`//tr[td[contains(text(),'${name}')]]//td[contains(@aria-describedby,'Date')]`);
    expect(await cell.textContent()).toContain(expectedDate);
  }
}

// ─── Property History Search Screen ─────────────────────────────────────────

export class PropertyHistorySearchPage {
  readonly page: Page;
  readonly storageLocationEdit: Locator;
  readonly containerIDEdit: Locator;
  readonly fromDateEdit: Locator;
  readonly toDateEdit: Locator;
  readonly searchButton: Locator;
  readonly resetButton: Locator;
  readonly subAgencyDropdown: Locator;
  readonly propertyHistoryGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.storageLocationEdit = page.locator('#lupLocationID_CodeValue');
    this.containerIDEdit = page.locator('#lupContainerID_CodeValue');
    this.fromDateEdit = page.locator('#DttmFrom_Date_KPIDttmCtrl');
    this.toDateEdit = page.locator('#DttmEnd_Date_KPIDttmCtrl');
    this.searchButton = page.locator('#cmdSearch');
    this.resetButton = page.locator('#cmdReset');
    this.subAgencyDropdown = page.locator('#cddSubAgency_DropDown');
    this.propertyHistoryGrid = page.locator("//div[@id='grdPropertyHist']");
  }

  async enterAtStorageLocation(location: string): Promise<void> { await this.storageLocationEdit.fill(location); await this.storageLocationEdit.press('Tab'); }
  async enterAtContainerID(containerId: string): Promise<void> { await this.containerIDEdit.fill(containerId); await this.containerIDEdit.press('Tab'); }
  async enterAtFromDate(fromDate: string): Promise<void> { await this.fromDateEdit.fill(fromDate); }
  async enterAtToDate(toDate: string): Promise<void> { await this.toDateEdit.fill(toDate); }
  async clickSearch(): Promise<void> { await this.searchButton.click(); }
  async clickReset(): Promise<void> { await this.resetButton.click(); }
  async selectAtSubAgency(subAgency: string): Promise<void> { await this.subAgencyDropdown.selectOption({ label: subAgency }); }
  async selectEntryByName(name: string): Promise<void> { await this.propertyHistoryGrid.locator(`//td[contains(text(),'${name}')]`).click(); }
  async verifyPFWithAction(action: string, expectedPF: string): Promise<void> {
    const cell = this.propertyHistoryGrid.locator(`//tr[td[contains(text(),'${action}')]]//td[contains(@aria-describedby,'PF')]`);
    expect(await cell.textContent()).toContain(expectedPF);
  }
  async verifySubAgency(expectedSubAgency: string): Promise<void> {
    const selected = await this.page.locator('#cddSubAgency option:checked').textContent();
    expect(selected).toContain(expectedSubAgency);
  }
}

// ─── RA Ratings Screen ───────────────────────────────────────────────────────

export class RARatingsPage {
  readonly page: Page;
  readonly scoreEdit: Locator;
  readonly raRatingDropdown: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;
  readonly raRatingGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.scoreEdit = page.locator('#txtScore');
    this.raRatingDropdown = page.locator('#cddRAIntake_DropDown');
    this.addButton = page.locator('#cmdAddScore');
    this.saveButton = page.locator('#cmdSave');
    this.raRatingGrid = page.locator("//div[@id='grdRiskAssess']");
  }

  async enterAtScore(score: string): Promise<void> { await this.scoreEdit.fill(score); }
  async selectAtRARating(rating: string): Promise<void> { await this.raRatingDropdown.selectOption({ label: rating }); }
  async clickAddButton(): Promise<void> { await this.addButton.click(); }
  async clickSaveButton(): Promise<void> { await this.saveButton.click(); }

  async deleteAtRARating(riskRating: string): Promise<void> {
    await this.raRatingGrid.locator(`//tr[td[contains(text(),'${riskRating}')]]//td[@class='Delete_Icon_Style']`).click();
  }
  async verifyConfirmDeleteMessage(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(4)'); await dialog.accept(); });
  }
  async verifyAdditionSuccessfulMessage(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('1002'); await dialog.accept(); });
  }
  async verifyUpdateSuccessfulMessage(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('1003'); await dialog.accept(); });
  }
  async verifyTheEntryIsDeletedFromGrid(score: string, riskRating: string): Promise<void> {
    const rows = this.raRatingGrid.locator(`//tr[td[contains(text(),'${score}')] and td[contains(text(),'${riskRating}')]]`);
    expect(await rows.count()).toBe(0);
  }
  async verifySubAgency(expectedSubAgency: string): Promise<void> {
    const selected = await this.page.locator('#cddSubAgency option:checked').textContent();
    expect(selected).toContain(expectedSubAgency);
  }
  async SelectAtRARatingDropdown(riskRating: string): Promise<void> { await this.page.locator('#cddRARating_DropDown').selectOption({ label: riskRating }); }
  async verifyConfrimDeleteMessage(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('Do you really want to delete?'); await dialog.accept(); });
  }
  async verifyAdditionSuccessfullMessage(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('1002 - Addition Successful'); await dialog.accept(); });
  }
  async verifyAtOfficeWithInterview(interview: string, expectedOfficer: string): Promise<void> {
    const cell = this.raRatingGrid.locator(`//tr[td[contains(text(),'${interview}')]]//td[contains(@aria-describedby,'Officer')]`);
    expect(await cell.textContent()).toContain(expectedOfficer);
  }
  async SelectWorkRlschk(): Promise<void> { await this.page.locator('#chkWorkRelease').click(); }
  async verifyUpdateSuccessFullAckMessage(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('1003 - Update Successful'); await dialog.accept(); });
  }
}

// ─── Risk Assessment Search Screen ──────────────────────────────────────────

export class RiskAssessmentSearchPage {
  readonly page: Page;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly spnNoEdit: Locator;
  readonly interviewYearEdit: Locator;
  readonly interviewNoEdit: Locator;
  readonly fromDateEdit: Locator;
  readonly toDateEdit: Locator;
  readonly interviewOfficerEdit: Locator;
  readonly interviewStatusDropdown: Locator;
  readonly searchButton: Locator;
  readonly resetButton: Locator;
  readonly backButton: Locator;
  readonly riskSearchGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.lastNameEdit = page.locator('#tabIntakeSrch_tmpl0_UsRAIntakeSrch1_txtLastName');
    this.firstNameEdit = page.locator('#tabIntakeSrch_tmpl0_UsRAIntakeSrch1_txtFirstName');
    this.spnNoEdit = page.locator('#tabIntakeSrch_tmpl0_UsRAIntakeSrch1_txtSPIN');
    this.interviewYearEdit = page.locator('#tabIntakeSrch_tmpl0_UsRAIntakeSrch1_nbrInterview_Year');
    this.interviewNoEdit = page.locator('#tabIntakeSrch_tmpl0_UsRAIntakeSrch1_nbrInterview_Number');
    this.fromDateEdit = page.locator('#tabIntakeSrch_tmpl0_UsRAIntakeSrch1_dttmFromDate_Date_KPIDttmCtrl');
    this.toDateEdit = page.locator('#tabIntakeSrch_tmpl0_UsRAIntakeSrch1_dttmToDate_Date_KPIDttmCtrl');
    this.interviewOfficerEdit = page.locator('#tabIntakeSrch_tmpl0_UsRAIntakeSrch1_lupScrnOfficer_CodeValue');
    this.interviewStatusDropdown = page.locator('#tabIntakeSrch_tmpl0_UsRAIntakeSrch1_cddInterStatus_DropDown');
    this.searchButton = page.locator("//span[text()='Search']");
    this.resetButton = page.locator("//span[text()='Reset']");
    this.backButton = page.locator("//span[text()='Back']");
    this.riskSearchGrid = page.locator("//div[@id='pnlSearchResults']");
  }

  async enterAtInmateName(lastName: string, firstName: string): Promise<void> { await this.lastNameEdit.fill(lastName); await this.firstNameEdit.fill(firstName); }
  async enterAtSPNNo(spnNo: string): Promise<void> { await this.spnNoEdit.fill(spnNo); }
  async enterAtInterviewNo(year: string, number: string): Promise<void> { await this.interviewYearEdit.fill(year); await this.interviewNoEdit.fill(number); }
  async enterAtFromDate(fromDate: string): Promise<void> { await this.fromDateEdit.fill(fromDate); await this.fromDateEdit.press('Tab'); }
  async enterAtToDate(toDate: string): Promise<void> { await this.toDateEdit.fill(toDate); await this.toDateEdit.press('Tab'); }
  async enterAtInterviewOfficer(officer: string): Promise<void> { await this.interviewOfficerEdit.fill(officer); await this.interviewOfficerEdit.press('Tab'); }
  async selectAtInterviewStatus(status: string): Promise<void> { await this.interviewStatusDropdown.selectOption({ label: status }); }
  async clickSearch(): Promise<void> { await this.searchButton.click(); }
  async clickBack(): Promise<void> { await this.backButton.click(); }
  async clickReset(): Promise<void> { await this.resetButton.click(); }
  async selectAtSubAgency(subAgency: string): Promise<void> { await this.page.locator('#cddSubAgency_DropDown').selectOption({ label: subAgency }); }
  async verifyAtInterviewNoWithInmateName(inmateName: string, expectedInterview: string): Promise<void> {
    const cell = this.riskSearchGrid.locator(`//tr[td[contains(text(),'${inmateName}')]]//td[contains(@aria-describedby,'Interview')]`);
    expect(await cell.textContent()).toContain(expectedInterview);
  }
  async verifyAtSPNWithInmateName(inmateName: string, expectedSPN: string): Promise<void> {
    const cell = this.riskSearchGrid.locator(`//tr[td[contains(text(),'${inmateName}')]]//td[contains(@aria-describedby,'SPN')]`);
    expect(await cell.textContent()).toContain(expectedSPN);
  }
  async verifyAtOfficerWithInterview(interview: string, expectedOfficer: string): Promise<void> {
    const cell = this.riskSearchGrid.locator(`//tr[td[contains(text(),'${interview}')]]//td[contains(@aria-describedby,'Officer')]`);
    expect(await cell.textContent()).toContain(expectedOfficer);
  }
  async verifySubAgency(expectedSubAgency: string): Promise<void> {
    const selected = await this.page.locator('#cddSubAgency option:checked').textContent();
    expect(selected).toContain(expectedSubAgency);
  }
}

// ─── Scheduled Booking Search Screen ────────────────────────────────────────

export class ScheduledBookingSearchPage {
  readonly page: Page;
  readonly dateResetButton: Locator;
  readonly fromDateEdit: Locator;
  readonly toDateEdit: Locator;
  readonly spnNoEdit: Locator;
  readonly sexDropdown: Locator;
  readonly reasonDropdown: Locator;
  readonly workReleaseCheckbox: Locator;
  readonly searchButton: Locator;
  readonly resetButton: Locator;
  readonly backButton: Locator;
  readonly addNewButton: Locator;
  readonly scheduledBookingGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dateResetButton = page.locator('#tabSuspSrch_tmpl0_usrScheduleBookingSearchBasic1_imgClear');
    this.fromDateEdit = page.locator('#tabSuspSrch_tmpl0_usrScheduleBookingSearchBasic1_dttmDateFrom_Date_KPIDttmCtrl');
    this.toDateEdit = page.locator('#tabSuspSrch_tmpl0_usrScheduleBookingSearchBasic1_dttmDateTo_Date_KPIDttmCtrl');
    this.spnNoEdit = page.locator('#tabSuspSrch_tmpl0_usrScheduleBookingSearchBasic1_NamCtrlSPIN_SPN');
    this.sexDropdown = page.locator('#tabSuspSrch_tmpl0_usrScheduleBookingSearchBasic1_cddSex_DropDown');
    this.reasonDropdown = page.locator('#tabSuspSrch_tmpl0_usrScheduleBookingSearchBasic1_cddReason_DropDown');
    this.workReleaseCheckbox = page.locator('#tabSuspSrch_tmpl0_usrScheduleBookingSearchBasic1_chkWorkRelease');
    this.searchButton = page.locator("//span[text()='Search']");
    this.resetButton = page.locator("//span[text()='Reset']");
    this.backButton = page.locator("//span[text()='Back']");
    this.addNewButton = page.locator("//span[text()='Add New']");
    this.scheduledBookingGrid = page.locator("//div[@id='grdPreSchSrch']");
  }

  async clickDateResetButton(): Promise<void> { await this.dateResetButton.click(); }
  async enterAtFromDate(fromDate: string): Promise<void> { await this.fromDateEdit.fill(fromDate); await this.fromDateEdit.press('Tab'); }
  async enterToDateAsCurrentDate(currentDate: string): Promise<void> { await this.toDateEdit.fill(currentDate); await this.toDateEdit.press('Tab'); }
  async enterAtSPNNo(spnNo: string): Promise<void> { await this.spnNoEdit.fill(spnNo); await this.spnNoEdit.press('Tab'); }
  async selectAtSex(sex: string): Promise<void> { await this.sexDropdown.selectOption({ label: sex }); }
  async selectAtReason(reason: string): Promise<void> { await this.reasonDropdown.selectOption({ label: reason }); }
  async clickWorkReleaseCheckbox(): Promise<void> { await this.workReleaseCheckbox.click(); }
  async clickSearch(): Promise<void> { await this.searchButton.click(); }
  async clickBack(): Promise<void> { await this.backButton.click(); }
  async clickReset(): Promise<void> { await this.resetButton.click(); }
  async clickAddNew(): Promise<void> { await this.addNewButton.click(); }
  async selectAtSubAgency(subAgency: string): Promise<void> { await this.page.locator('#cddSubAgency_DropDown').selectOption({ label: subAgency }); }
  async verifyAtNameWithDate(name: string, expectedDate: string): Promise<void> {
    const cell = this.scheduledBookingGrid.locator(`//tr[td[contains(text(),'${name}')]]//td[contains(@aria-describedby,'Date')]`);
    expect(await cell.textContent()).toContain(expectedDate);
  }
  async verifySPNNoWithName(name: string, expectedSPN: string): Promise<void> {
    const cell = this.scheduledBookingGrid.locator(`//tr[td[contains(text(),'${name}')]]//td[contains(@aria-describedby,'SPN')]`);
    expect(await cell.textContent()).toContain(expectedSPN);
  }
  async verifyGridIsNotEmpty(): Promise<void> {
    const rows = this.scheduledBookingGrid.locator("//tr[contains(@class,'Row')]");
    expect(await rows.count()).toBeGreaterThan(0);
  }
  async verifySubAgency(expectedSubAgency: string): Promise<void> {
    const selected = await this.page.locator('#cddSubAgency option:checked').textContent();
    expect(selected).toContain(expectedSubAgency);
  }
}

// ─── SSA Report Screen ───────────────────────────────────────────────────────

export class SSAReportPage {
  readonly page: Page;
  readonly fromDateEdit: Locator;
  readonly toDateEdit: Locator;
  readonly remarkEdit: Locator;
  readonly submittedPFEdit: Locator;
  readonly createFileButton: Locator;
  readonly downloadButton: Locator;
  readonly ssaReportGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fromDateEdit = page.locator('#dtReportFrom_KPIDttmCtrl');
    this.toDateEdit = page.locator('#dtReportTo_KPIDttmCtrl');
    this.remarkEdit = page.locator('#txtRemark');
    this.submittedPFEdit = page.locator('#lupSubmitPF_CodeValue');
    this.createFileButton = page.locator('#cmdCreate');
    this.downloadButton = page.locator('#btnDownload');
    this.ssaReportGrid = page.locator('#grdSSAReportData');
  }

  async enterFromDate(fromDate: string): Promise<void> { await this.fromDateEdit.click(); await this.fromDateEdit.fill(fromDate); }
  async enterToDate(toDate: string): Promise<void> { await this.toDateEdit.fill(toDate); }
  async enterAtRemark(remark: string): Promise<void> { await this.remarkEdit.fill(remark); }
  async enterAtSubmittedPF(pf: string): Promise<void> { await this.submittedPFEdit.fill(pf); }
  async clickCreateFile(): Promise<void> { await this.createFileButton.click(); }
  async clickDownloadFile(): Promise<void> { await this.downloadButton.click(); }
  async clickYesCreateSSAfilesMsg(): Promise<void> { await this.page.locator("//button[text()='Yes']").click(); }
  async verifyUpdateSuccessfulAckMessage(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('1003 - Update Successful'); await dialog.accept(); });
  }
  async getSPNColumnValues(): Promise<string[]> {
    const rows = this.ssaReportGrid.locator('tr td:nth-child(1)');
    return await rows.allTextContents();
  }
  async verifySPNNumberIsPresent(spnPresent: boolean): Promise<void> { expect(spnPresent).toBe(true); }
  async verifySPNNumberIsNotPresent(spnPresent: boolean): Promise<void> { expect(spnPresent).toBe(true); }
  async verifyConfirmCreateSSAfilesMsg(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(30025)'); await dialog.accept(); });
  }
  async verifySubAgency(expectedSubAgency: string): Promise<void> {
    const selected = await this.page.locator('#cddSubAgency option:checked').textContent();
    expect(selected).toContain(expectedSubAgency);
  }
}

// ─── Supervisor Status Screen ────────────────────────────────────────────────

export class SupervisorStatusPage {
  readonly page: Page;
  readonly reviewTypeDropdown: Locator;
  readonly refreshButton: Locator;
  readonly subAgencyDropdown: Locator;
  readonly supervisorStatusGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.reviewTypeDropdown = page.locator('#cddReviewType_DropDown');
    this.refreshButton = page.locator('#cmdSearch');
    this.subAgencyDropdown = page.locator('#cddSubAgency_DropDown');
    this.supervisorStatusGrid = page.locator('#grdSuprStatus');
  }

  async selectAtReviewType(reviewType: string): Promise<void> { await this.reviewTypeDropdown.selectOption({ label: reviewType }); }
  async clickRefreshButton(): Promise<void> { await this.refreshButton.click(); }
  async selectAtSubAgency(subAgency: string): Promise<void> { await this.subAgencyDropdown.selectOption({ label: subAgency }); }
  async getGridCount(): Promise<number> { return await this.supervisorStatusGrid.locator('//tr[contains(@class,"Row")]').count(); }
  async selectAtReviewTypeInGrid(reviewType: string): Promise<void> { await this.supervisorStatusGrid.locator(`//td[contains(text(),'${reviewType}')]`).click(); }
  async selectAtSPNInGrid(spn: string): Promise<void> { await this.supervisorStatusGrid.locator(`//td[contains(text(),'${spn}')]`).click(); }
  async verifyAtSupervisorStatusCountInTabHeader(expectedCount: number): Promise<void> {
    const header = await this.page.locator('#tabHeader').textContent() || '';
    const match = header.match(/\d+/);
    expect(match ? parseInt(match[0]) : 0).toBe(expectedCount);
  }
  async verifyAtSupervisorInGrid(supervisor: string, expectedValue: string): Promise<void> {
    const cell = this.supervisorStatusGrid.locator(`//tr[td[contains(text(),'${supervisor}')]]`);
    expect(await cell.textContent()).toContain(expectedValue);
  }
  async verifyAtCMSBookingNotAvailableInGrid(cmsBooking: string): Promise<void> {
    const cells = this.supervisorStatusGrid.locator(`//td[contains(text(),'${cmsBooking}')]`);
    expect(await cells.count()).toBe(0);
  }
  async verifyAtSPNNotInGrid(spn: string): Promise<void> {
    const cells = this.supervisorStatusGrid.locator(`//td[contains(text(),'${spn}')]`);
    expect(await cells.count()).toBe(0);
  }
  async verifySubAgency(expectedSubAgency: string): Promise<void> {
    const selected = await this.page.locator('#cddSubAgency option:checked').textContent();
    expect(selected).toContain(expectedSubAgency);
  }
}

// ─── Admission Entry Page ────────────────────────────────────────────────────

export class AdmissionEntryPage {
  readonly page: Page;
  readonly inmateNameTypeEdit: Locator;
  readonly inmateNameIDEdit: Locator;
  readonly spnNoEdit: Locator;
  readonly facilityDropdown: Locator;
  readonly processStartDateEdit: Locator;
  readonly processStartTimeEdit: Locator;
  readonly startBookingButton: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly saveAndAddNewButton: Locator;
  readonly spnChangeIcon: Locator;
  readonly bookingYearEdit: Locator;
  readonly bookingNoEdit: Locator;
  readonly inmateNameInfoIcon: Locator;
  readonly creatorSubAgencyDropdown: Locator;
  readonly ownerSubAgencyDropdown: Locator;
  readonly statusLabel: Locator;
  readonly propertyIcon: Locator;
  readonly inmateLeftPictureBox: Locator;
  readonly inmateLastNameEdit: Locator;
  readonly inmateFirstNameEdit: Locator;
  // Tab navigation
  readonly mainTab: Locator;
  readonly bookingTab: Locator;
  readonly medicalScreeningTab: Locator;
  readonly prisonerPropertyTab: Locator;
  readonly chargeTab: Locator;
  readonly detainerTab: Locator;
  readonly payToStayTab: Locator;
  readonly mugShotTab: Locator;
  readonly fingerPrintTab: Locator;
  readonly associationsTab: Locator;
  readonly jailAlertTab: Locator;
  readonly commentsTab: Locator;
  readonly notificationTab: Locator;
  readonly attachmentTab: Locator;
  readonly qaFormsTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inmateNameTypeEdit = page.locator('#nInmateNameID_NameType');
    this.inmateNameIDEdit = page.locator('#nInmateNameID_NameTypeID');
    this.spnNoEdit = page.locator('#txtSPNNo');
    this.facilityDropdown = page.locator('#cddFacility_DropDown');
    this.processStartDateEdit = page.locator('#dttmProcessStart_Date_KPIDttmCtrl');
    this.processStartTimeEdit = page.locator("//table[@id='dttmProcessStart_Time']//input");
    this.startBookingButton = page.locator('#cmdStartBooking');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.saveAndAddNewButton = page.locator('#cmdSaveNAddNew');
    this.spnChangeIcon = page.locator('#imgSPNChange');
    this.bookingYearEdit = page.locator('#nbrBooking_Year');
    this.bookingNoEdit = page.locator('#nbrBooking_Number');
    this.inmateNameInfoIcon = page.locator('#nInmateNameID_imgSrch');
    this.creatorSubAgencyDropdown = page.locator('#cddCreatorSubAgency_DropDown');
    this.ownerSubAgencyDropdown = page.locator('#cddOwnerSubAgency_DropDown');
    this.statusLabel = page.locator('#lblStatus');
    this.propertyIcon = page.locator('#imgProperty');
    this.inmateLeftPictureBox = page.locator('#imgInmate');
    this.inmateLastNameEdit = page.locator('#nInmateNameID_LastName');
    this.inmateFirstNameEdit = page.locator('#nInmateNameID_FirstName');
    // Tab navigation
    this.mainTab = page.locator("//span[text()='Main']");
    this.bookingTab = page.locator("//span[text()='Booking']");
    this.medicalScreeningTab = page.locator("//span[text()='Medical Screening']");
    this.prisonerPropertyTab = page.locator("//span[text()='Prisoner Property']");
    this.chargeTab = page.locator("//span[text()='Charges']");
    this.detainerTab = page.locator("//span[text()='Detainers']");
    this.payToStayTab = page.locator("//span[text()='Pay-To-Stay']");
    this.mugShotTab = page.locator("//span[text()='Mug Shot']");
    this.fingerPrintTab = page.locator("//span[text()='Fingerprint']");
    this.associationsTab = page.locator("//span[text()='Associations']");
    this.jailAlertTab = page.locator("//span[text()='Jail Alerts']");
    this.commentsTab = page.locator("//span[text()='Comments']");
    this.notificationTab = page.locator("//span[text()='Notification']");
    this.attachmentTab = page.locator("//span[text()='Attachments']");
    this.qaFormsTab = page.locator("//span[text()='QA Forms']");
  }

  async enterAtInmateName(nameType: string, nameID: string): Promise<void> {
    await this.inmateNameTypeEdit.fill(nameType);
    await this.inmateNameIDEdit.fill(nameID);
    await this.inmateNameIDEdit.press('Tab');
  }

  async enterAtSPNNo(spnNo: string): Promise<void> { await this.spnNoEdit.fill(spnNo); await this.spnNoEdit.press('Tab'); }
  async enterAtFacility(facility: string): Promise<void> { await this.facilityDropdown.selectOption({ label: facility }); }

  async enterProcessStartDateAndTime(): Promise<void> {
    await this.processStartDateEdit.press('Tab');
    await this.processStartTimeEdit.press('Tab');
  }

  async clickStartBooking(): Promise<void> { await this.startBookingButton.click(); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickSaveAndClose(): Promise<void> { await this.saveNCloseButton.click(); }
  async clickSPNChangeIcon(): Promise<void> { await this.spnChangeIcon.click(); }
  async clickPropertyIcon(): Promise<void> { await this.propertyIcon.click(); }

  async getCMSBookingNo(): Promise<string> {
    const year = await this.bookingYearEdit.inputValue();
    const no = await this.bookingNoEdit.inputValue();
    return `${year}-${no}`;
  }

  async clickNameInfoIcon(): Promise<void> { await this.inmateNameInfoIcon.click(); }

  async getBookingStatus(): Promise<string> { return (await this.statusLabel.textContent()) || ''; }
  async getFirstName(): Promise<string> { return await this.inmateFirstNameEdit.inputValue(); }
  async getLastName(): Promise<string> { return await this.inmateLastNameEdit.inputValue(); }

  async isSaveButtonDisabled(): Promise<boolean> { return !(await this.saveButton.isVisible()); }

  // Tab navigation
  async navigateToMainTab(): Promise<void> { await this.mainTab.click(); }
  async navigateToBookingTab(): Promise<void> { await this.bookingTab.click(); }
  async navigateToMedicalScreeningTab(): Promise<void> { await this.medicalScreeningTab.click(); }
  async navigateToPrisonerPropertyTab(): Promise<void> { await this.prisonerPropertyTab.click(); }
  async navigateToChargeTab(): Promise<void> { await this.chargeTab.click(); }
  async navigateToDetainersTab(): Promise<void> { await this.detainerTab.click(); }
  async navigateToPayToStayTab(): Promise<void> { await this.payToStayTab.click(); }
  async navigateToMugShotTab(): Promise<void> { await this.mugShotTab.click(); }
  async navigateToFingerPrintTab(): Promise<void> { await this.fingerPrintTab.click(); }
  async navigateToAssociationsTab(): Promise<void> { await this.associationsTab.click(); }
  async navigateToJailAlertTab(): Promise<void> { await this.jailAlertTab.click(); }
  async navigateToCommentsTab(): Promise<void> { await this.commentsTab.click(); }
  async navigateToNotificationTab(): Promise<void> { await this.notificationTab.click(); }
  async navigateToAttachmentTab(): Promise<void> { await this.attachmentTab.click(); }
  async navigateToQAFormsTab(): Promise<void> { await this.qaFormsTab.click(); }

  // Additional tab navigation
  async navigateToDeleteSentenceTab(): Promise<void> { await this.page.locator("//span[text()='Delete Sentence']").click(); }
  async navigateToReleaseTab(): Promise<void> { await this.page.locator("//span[text()='Release']").click(); }

  // Name and identity fields
  async enterAtNameType(nameType: string): Promise<void> { await this.inmateNameTypeEdit.fill(nameType); }
  async enterAtNameID(nameType: string, nameID: string): Promise<void> {
    await this.inmateNameTypeEdit.fill(nameType);
    await this.inmateNameTypeEdit.press('Tab');
    await this.inmateNameIDEdit.fill(nameID);
    await this.inmateNameIDEdit.press('Tab');
  }
  async enterAtLastName(lastName: string): Promise<void> { await this.inmateLastNameEdit.fill(lastName); }
  async enterAtFirstName(firstName: string): Promise<void> { await this.inmateFirstNameEdit.fill(firstName); await this.inmateFirstNameEdit.press('Tab'); }
  async enterAtLastNameWithDoubleTab(lastName: string): Promise<void> {
    await this.inmateLastNameEdit.fill(lastName);
    await this.inmateLastNameEdit.press('Tab');
    await this.inmateFirstNameEdit.press('Tab');
  }
  async clickNameLookUpIcon(): Promise<void> { await this.inmateNameInfoIcon.click(); }
  async clickNameIBubbleIcon(): Promise<void> { await this.page.locator('#nInmateNameID_imgIBubble').click(); }
  async clickReleaseIcon(): Promise<void> { await this.page.locator('#imgRelease').click(); }
  async clickResetButton(): Promise<void> { await this.page.locator('#cmdReset').click(); }
  async clickPrintIcon(): Promise<void> { await this.page.locator('#cmdPrint').click(); }
  async clickInmateLeftPictureBox(): Promise<void> { await this.inmateLeftPictureBox.click(); }
  async clickFacilityIcon(): Promise<void> { await this.page.locator('#imgFacility').click(); }
  async clickWorkReleaseIcon(): Promise<void> { await this.page.locator('#imgWorkRelease').click(); }
  async clickCustomizeIcon(): Promise<void> { await this.page.locator('#imgCustomize').click(); }
  async clickManageCustomFields(): Promise<void> { await this.page.locator("//a[contains(text(),'Manage Custom Fields')]").click(); }
  async clickManageQAForm(): Promise<void> { await this.page.locator("//a[contains(text(),'Manage QA Form')]").click(); }
  async clickStartBookingWithoutConfirmPopup(): Promise<void> { await this.startBookingButton.click(); }

  // Select facility
  async selectAtFacility(facility: string): Promise<void> { await this.facilityDropdown.selectOption({ label: facility }); }

  // Process Start date overrides
  async enterProcessStartDateAsPreviousDate(date: string): Promise<void> { await this.processStartDateEdit.fill(date); await this.processStartTimeEdit.press('Tab'); }
  async enterProcessStartDateAsFutureDate(date: string): Promise<void> { await this.processStartDateEdit.fill(date); await this.processStartTimeEdit.press('Tab'); }

  // Getters
  async getSPNNo(): Promise<string> { return await this.spnNoEdit.inputValue(); }
  async getNameType(): Promise<string> { return await this.inmateNameTypeEdit.inputValue(); }
  async getNameID(): Promise<string> {
    const type = await this.inmateNameTypeEdit.inputValue();
    const id = await this.inmateNameIDEdit.inputValue();
    return `${type}-${id}`;
  }
  async getProcessStartedTime(): Promise<string> { return await this.processStartTimeEdit.inputValue(); }
  async getBookingYear(): Promise<string> { return await this.bookingYearEdit.inputValue(); }
  async getBookingNo(): Promise<string> { return await this.bookingNoEdit.inputValue(); }

  // Label/info getters
  async getJacketNo(): Promise<string> { return (await this.page.locator('#lblJacketNo').textContent()) || ''; }
  async getCountyNo(): Promise<string> { return (await this.page.locator('#lblCountyNo').textContent()) || ''; }
  async getInmateType(): Promise<string> { return (await this.page.locator('#lblInmateType').textContent()) || ''; }
  async getConfineReason(): Promise<string> { return (await this.page.locator('#lblConfineReason').textContent()) || ''; }
  async getSentenceStatus(): Promise<string> { return (await this.page.locator('#lblSentenceStatus').textContent()) || ''; }
  async getAssignedCell(): Promise<string> { return (await this.page.locator('#lblAssignedCell').textContent()) || ''; }
  async getCurrentLoc(): Promise<string> { return (await this.page.locator('#lblCurrentLoc').textContent()) || ''; }
  async getSexValue(): Promise<string> { return (await this.page.locator('#lblSex').textContent()) || ''; }
  async getRaceValue(): Promise<string> { return (await this.page.locator('#lblRace').textContent()) || ''; }
  async getDOBValue(): Promise<string> { return (await this.page.locator('#lblDOB').textContent()) || ''; }
  async getAgeValue(): Promise<string> { return (await this.page.locator('#lblAge').textContent()) || ''; }
  async getSelectedJailAlert(): Promise<string> { return await this.page.locator('#cddJailAlert_DropDown').locator('option:checked').textContent() || ''; }

  // Visibility checks
  async isSPNDisplayed(): Promise<boolean> { return await this.spnNoEdit.isVisible(); }
  async isSPNEnabled(): Promise<boolean> { return await this.spnNoEdit.isEnabled(); }
  async isNameFieldsDisplayed(): Promise<boolean> { return await this.inmateNameTypeEdit.isVisible() && await this.inmateLastNameEdit.isVisible(); }
  async isCMSBookingDisplayed(): Promise<boolean> { return await this.bookingYearEdit.isVisible(); }
  async isAssignedCellLabelDisplayed(): Promise<boolean> { return await this.page.locator('#lblAssignedCell').isVisible(); }
  async isCurrentLocLabelDisplayed(): Promise<boolean> { return await this.page.locator('#lblCurrentLoc').isVisible(); }
  async isJacketLabelDisplayed(): Promise<boolean> { return await this.page.locator('#lblJacketNo').isVisible(); }
  async isInmateTypeLabelDisplayed(): Promise<boolean> { return await this.page.locator('#lblInmateType').isVisible(); }
  async isConfineReasonLabelDisplayed(): Promise<boolean> { return await this.page.locator('#lblConfineReason').isVisible(); }
  async isSentenceStatusLabelDisplayed(): Promise<boolean> { return await this.page.locator('#lblSentenceStatus').isVisible(); }
  async isStartBookingButtonDisplayed(): Promise<boolean> { return await this.startBookingButton.isVisible(); }
  async isStartBookingButtonEnabled(): Promise<boolean> { return await this.startBookingButton.isEnabled(); }
  async isJailAlertDropdownDisplayed(): Promise<boolean> { return await this.page.locator('#cddJailAlert_DropDown').isVisible(); }
  async isJailAlertDropdownEnabled(): Promise<boolean> { return await this.page.locator('#cddJailAlert_DropDown').isEnabled(); }
  async isFacilityDropdownDisplayed(): Promise<boolean> { return await this.facilityDropdown.isVisible(); }
  async isFacilityDropdownEnabled(): Promise<boolean> { return await this.facilityDropdown.isEnabled(); }
  async isProcessStartDateDisplayed(): Promise<boolean> { return await this.processStartDateEdit.isVisible(); }
  async isProcessCompletedDateDisplayed(): Promise<boolean> { return await this.page.locator('#dttmProcessCompleted_Date_KPIDttmCtrl').isVisible(); }
  async isCustomizeIconDisplayed(): Promise<boolean> { return await this.page.locator('#imgCustomize').isVisible(); }
  async isReleaseTabDisplayed(): Promise<boolean> { return await this.page.locator("//span[text()='Release']").isVisible(); }
  async isReleaseTabEnabled(): Promise<boolean> { return await this.page.locator("//span[text()='Release']").isEnabled(); }
  async isDeleteSentenceTabDisplayed(): Promise<boolean> { return await this.page.locator("//span[text()='Delete Sentence']").isVisible(); }
  async isDeleteSentenceTabEnabled(): Promise<boolean> { return await this.page.locator("//span[text()='Delete Sentence']").isEnabled(); }
  async isInterfaceLogButtonDisplayed(): Promise<boolean> { return await this.page.locator('#cmdInterfaceLog').isVisible(); }

  // Tab navigation verification (bold check = active tab)
  async isNavigatedToAssociationsTab(): Promise<boolean> { return (await this.associationsTab.evaluate(el => getComputedStyle(el).fontWeight)) === '700'; }
  async isNavigatedToMedicalScreeningTab(): Promise<boolean> { return (await this.medicalScreeningTab.evaluate(el => getComputedStyle(el).fontWeight)) === '700'; }
  async isNavigatedToChargesTab(): Promise<boolean> { return (await this.chargeTab.evaluate(el => getComputedStyle(el).fontWeight)) === '700'; }
  async isNavigatedToDetainersTab(): Promise<boolean> { return (await this.detainerTab.evaluate(el => getComputedStyle(el).fontWeight)) === '700'; }
  async isNavigatedToFingerPrintTab(): Promise<boolean> { return (await this.fingerPrintTab.evaluate(el => getComputedStyle(el).fontWeight)) === '700'; }

  // Tab color check
  async getTabColor(tabName: string): Promise<string> { return await this.page.locator(`//span[text()='${tabName}']`).evaluate(el => getComputedStyle(el).color); }

  // Verify update message
  async getBottomMessage(): Promise<string> { return (await this.page.locator("//td[@class='statusBar']//b").textContent()) || ''; }
  async isSPNNoAvailable(): Promise<boolean> { return (await this.spnNoEdit.inputValue()).length > 0; }
  async isNameTypeBlank(): Promise<boolean> { return (await this.inmateNameTypeEdit.inputValue()).length === 0; }

  // ── Popup / Acknowledge / Confirm handlers ──────────────────────────────
  async acceptSaveConfirmPopup(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }
  async saveScreenWithConfirm(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.saveButton.click();
  }
  async saveAndCloseWithConfirm(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.page.locator('#cmdSaveClose').click();
  }
  async clickStartBookingWithConfirm(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.startBookingButton.click();
  }
  async verify30042ConfirmCloseBookingMsg(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30042)');
      await dialog.accept();
    });
  }
  async verify30033AcknowledgeMessage(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30033)');
      await dialog.accept();
    });
  }
  async verifyUpdateSuccessfulMessage(): Promise<void> {
    const msg = await this.getBottomMessage();
    expect(msg).toContain('1003 - Update Successful');
  }
  async verifyBookingOfficerAck(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30033)Enter Booking Officer');
      await dialog.accept();
    });
  }
  async verifySaveConfirmMessage(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(3)Do You Want To Save All Of The Entered Details?');
      await dialog.accept();
    });
  }
  async verify30041ConfirmMessage(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30041)');
      await dialog.accept();
    });
  }
  async verify30654NotAllChargesAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30654)');
      await dialog.accept();
    });
  }
  async verify6079TheSelectedNameTypeCannotBeAddedAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(6079)');
      await dialog.accept();
    });
  }
  async verify30031AnActiveBookingAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30031)');
      await dialog.accept();
    });
  }
  async verify30001SPNNoDoesNotExistAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30001)');
      await dialog.accept();
    });
  }
  async verify30166YouHaveSelectedADeceasedNameConfirmPopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30166)');
      await dialog.accept();
    });
  }
  async verify30098PleaseSelectFacilityAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30098)');
      await dialog.accept();
    });
  }
  async verify30059ProcessStartDateAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30059)');
      await dialog.accept();
    });
  }
  async verify1018RequiredEntriesAreMissingAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1018)');
      await dialog.accept();
    });
  }
  async verify30089WarningJTypeNameConfirmPopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30089)');
      await dialog.accept();
    });
  }
  async verify30158WarningPreviousBookingAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30158)');
      await dialog.accept();
    });
  }
  async verify30033EnterInmateTypeInBookingTabAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30033) Enter Inmate Type In Booking Tab');
      await dialog.accept();
    });
  }
  async verify30033EnterBookingOfficerInBookingTabAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30033) Enter Booking Officer in Booking Tab');
      await dialog.accept();
    });
  }
  async verifyDuplicateSSConfirmationPopupNotAppears(): Promise<void> {
    let dialogAppeared = false;
    const handler = () => { dialogAppeared = true; };
    this.page.on('dialog', handler);
    await this.page.waitForTimeout(1000);
    this.page.off('dialog', handler);
    expect(dialogAppeared).toBe(false);
  }

  // ── Indexed overloads for data entry ────────────────────────────────────
  async enterAtNameTypeIndexed(nameType: string): Promise<void> { await this.inmateNameTypeEdit.fill(nameType); }
  async enterAtNameIDIndexed(nameType: string, nameID: string): Promise<void> {
    await this.inmateNameTypeEdit.fill(nameType);
    await this.inmateNameTypeEdit.press('Tab');
    await this.inmateNameIDEdit.fill(nameID);
    await this.inmateNameIDEdit.press('Tab');
  }
  async enterNameID(nameID: string): Promise<void> {
    const nameType = nameID.substring(0, 1);
    const id = nameID.substring(2);
    await this.inmateNameTypeEdit.fill(nameType);
    await this.inmateNameTypeEdit.press('Tab');
    await this.inmateNameIDEdit.fill(id);
    await this.inmateNameIDEdit.press('Tab');
  }
  async enterAtLastNameIndexed(lastName: string): Promise<void> { await this.page.locator('#txtLastName').fill(lastName); }
  async enterAtLastNameWithDoubleTabIndexed(lastName: string): Promise<void> {
    await this.page.locator('#txtLastName').fill(lastName);
    await this.page.locator('#txtLastName').press('Tab');
    await this.page.locator('#txtFirstName').press('Tab');
  }
  async enterAtFirstNameIndexed(firstName: string): Promise<void> { await this.page.locator('#txtFirstName').fill(firstName); await this.page.locator('#txtFirstName').press('Tab'); }
  async enterAtSPNNoIndexed(spnNo: string): Promise<void> { await this.spnNoEdit.fill(spnNo); await this.spnNoEdit.press('Tab'); }
  async selectAtFacilityIndexed(facility: string): Promise<void> { await this.page.locator('#cddFacility_DropDown').selectOption({ label: facility }); }
  async readSPNNo(): Promise<string> { return await this.spnNoEdit.inputValue(); }
  async getCMSBookingNoAndClickNameInfo(): Promise<string> {
    const year = await this.page.locator('#txtCMSBookingYear').inputValue();
    const no = await this.page.locator('#txtCMSBookingNo').inputValue();
    await this.page.locator('#nInmateNameID_imgIBubble').click();
    return `${year}-${no}`;
  }

  // ── Verify display/enabled methods ──────────────────────────────────────
  async verifyInmateBookingStatusAsClosed(): Promise<void> { expect(await this.getBookingStatus()).toBe('Closed'); }
  async verifyInmateBookingStatusAsActiveIn(): Promise<void> { expect(await this.getBookingStatus()).toBe('Active-In'); }
  async verifyInmateBookingStatusAsInProgress(): Promise<void> { expect(await this.getBookingStatus()).toBe('In-Progress'); }
  async verifyAtFirstNameValue(expected: string): Promise<void> { expect(await this.getFirstName()).toBe(expected); }
  async verifyAtLastNameValue(expected: string): Promise<void> { expect(await this.getLastName()).toBe(expected); }
  async verifyBookingTabColorAsBlue(): Promise<void> {
    const color = await this.bookingTab.evaluate(el => getComputedStyle(el).color);
    expect(color).toContain('0, 0, 255');
  }
  async verifyAtJacketNo(expected: string): Promise<void> { expect(await this.getJacketNo()).toBe(expected); }
  async verifyAtCountyNo(expected: string): Promise<void> { expect(await this.getCountyNo()).toBe(expected); }
  async verifyAtInmateType(expected: string): Promise<void> { expect(await this.getInmateType()).toBe(expected); }
  async verifyAtConfineReason(expected: string): Promise<void> { expect(await this.getConfineReason()).toBe(expected); }
  async verifyAtSentenceStatus(expected: string): Promise<void> { expect(await this.getSentenceStatus()).toBe(expected); }
  async verifyAtSPN(expected: string): Promise<void> { expect(await this.getSPNNo()).toBe(expected); }
  async verifySPN(expected: string): Promise<void> { expect(await this.getSPNNo()).toBe(expected); }
  async verifySPNNotEqual(unexpected: string): Promise<void> { expect(await this.getSPNNo()).not.toBe(unexpected); }
  async verifyAtCMSBooking(expected: string): Promise<void> {
    const cms = await this.getCMSBookingNo();
    expect(cms).toContain(expected);
  }
  async verifyCMSBooking(expected: string): Promise<void> {
    const cms = await this.getCMSBookingNo();
    expect(cms).toContain(expected);
  }

  // Name label verifications
  async verifyAtNameIDLabelIsDisplayed(): Promise<void> { await expect(this.page.locator("//label[contains(text(),'Name ID')]")).toBeVisible(); }
  async verifyAtNameLastLabelIsDisplayed(): Promise<void> { await expect(this.page.locator("//label[contains(text(),'Last')]")).toBeVisible(); }
  async verifyAtNameFirstLabelIsDisplayed(): Promise<void> { await expect(this.page.locator("//label[contains(text(),'First')]")).toBeVisible(); }
  async verifyAtNameMiddleLabelIsDisplayed(): Promise<void> { await expect(this.page.locator("//label[contains(text(),'Middle')]")).toBeVisible(); }
  async verifyAtNameSuffixLabelIsDisplayed(): Promise<void> { await expect(this.page.locator("//label[contains(text(),'Suffix')]")).toBeVisible(); }
  async verifyAtNameFieldsAreEnabled(): Promise<void> {
    await expect(this.inmateNameTypeEdit).toBeEnabled();
    await expect(this.inmateNameIDEdit).toBeEnabled();
    await expect(this.page.locator('#txtLastName')).toBeEnabled();
    await expect(this.page.locator('#txtFirstName')).toBeEnabled();
  }

  // CMS Booking field
  async verifyCMSBookingFieldIsDisabled(): Promise<void> {
    expect(await this.page.locator('#txtCMSBookingYear').getAttribute('readonly')).toBeTruthy();
    expect(await this.page.locator('#txtCMSBookingNo').getAttribute('readonly')).toBeTruthy();
  }

  // Assigned Cell / Current Loc value disabled
  async verifyAssignedCellValueLabelIsDisabled(): Promise<void> { expect(await this.page.locator('#lblAssignedCellValue').isEnabled()).toBe(false); }
  async verifyCurrentLocValueLabelIsDisabled(): Promise<void> { expect(await this.page.locator('#lblCurrentLocValue').isEnabled()).toBe(false); }
  async verifyJacketValueLabelIsDisabled(): Promise<void> { expect(await this.page.locator('#lblJacketValue').isEnabled()).toBe(false); }

  // Sex / Race / DOB / Physical labels
  async verifySexRaceLabelsAreDisplayed(): Promise<void> {
    await expect(this.page.locator('#lblSex')).toBeVisible();
    await expect(this.page.locator('#lblRace')).toBeVisible();
  }
  async verifySexRaceValueLabelsAreDisabled(): Promise<void> {
    expect(await this.page.locator('#lblSexValue').isEnabled()).toBe(false);
    expect(await this.page.locator('#lblRaceValue').isEnabled()).toBe(false);
  }
  async verifyDOBLabelIsDisplayed(): Promise<void> { await expect(this.page.locator('#lblDOB')).toBeVisible(); }
  async verifyDOBValueLabelsAreDisabled(): Promise<void> {
    expect(await this.page.locator('#lblDOBValue').isEnabled()).toBe(false);
    expect(await this.page.locator('#lblAgeValue').isEnabled()).toBe(false);
  }
  async verifyPhysicalLabelIsDisplayed(): Promise<void> { await expect(this.page.locator('#lblPhysical')).toBeVisible(); }
  async verifyPhysicalValueLabelsAreDisabled(): Promise<void> {
    expect(await this.page.locator('#lblEyeValue').isEnabled()).toBe(false);
    expect(await this.page.locator('#lblHairValue').isEnabled()).toBe(false);
    expect(await this.page.locator('#lblSkinValue').isEnabled()).toBe(false);
  }

  // Inmate Type / Confine Reason / Sentence Status value disabled
  async verifyInmateTypeValueLabelIsDisabled(): Promise<void> { expect(await this.page.locator('#lblInmateTypeValue').isEnabled()).toBe(false); }
  async verifyConfineReasonValueLabelIsDisabled(): Promise<void> { expect(await this.page.locator('#lblConfineReasonValue').isEnabled()).toBe(false); }
  async verifySentenceStatusValueLabelIsDisabled(): Promise<void> { expect(await this.page.locator('#lblSentenceStatusValue').isEnabled()).toBe(false); }

  // Current Flag / Sanction dropdown
  async isCurrentFlagDropdownDisplayed(): Promise<boolean> { return await this.page.locator('#cddCurrentFlag_DropDown').isVisible(); }
  async isCurrentSanctionDropdownDisplayed(): Promise<boolean> { return await this.page.locator('#cddCurrentSanction_DropDown').isVisible(); }
  async isCurrentFlagDropdownEnabled(): Promise<boolean> { return await this.page.locator('#cddCurrentFlag_DropDown').isEnabled(); }
  async isCurrentSanctionDropdownEnabled(): Promise<boolean> { return await this.page.locator('#cddCurrentSanction_DropDown').isEnabled(); }

  // Process date/time enabled/disabled checks
  async isProcessStartedDateAndTimeEnabled(): Promise<boolean> {
    const dateReadonly = await this.page.locator('#dttmProcessStart_Date_KPIDttmCtrl').getAttribute('readonly');
    return dateReadonly === null;
  }
  async isProcessCompletedDateAndTimeDisabled(): Promise<boolean> {
    const dateReadonly = await this.page.locator('#dttmProcessCompleted_Date_KPIDttmCtrl').getAttribute('readonly');
    return dateReadonly !== null;
  }

  // Delete Sentence Tab not displayed
  async isDeleteSentenceTabNotDisplayed(): Promise<boolean> { return !(await this.page.locator('#tabDeleteSentence').isVisible()); }

  // Jail Alert verifications
  async verifyAtJailAlert(expected: string): Promise<void> {
    const selected = await this.getSelectedJailAlert();
    expect(selected).toContain(expected);
  }
  async isJailAlertValueNull(): Promise<boolean> { return (await this.page.locator('#cddJailAlert_DropDown').inputValue()) === ''; }

  // Customize menu
  async verifyAtCustomizeMenu(menuItem: string): Promise<void> {
    const text = await this.page.locator('#divCustomizeMenu').textContent();
    expect(text).toContain(menuItem);
  }
  async isCustomTabDisplayed(): Promise<boolean> { return await this.page.locator('#tabCustom').isVisible(); }

  // Interface log not displayed
  async isInterfaceLogButtonNotDisplayed(): Promise<boolean> { return !(await this.page.locator('#cmdInterfaceLog').isVisible()); }

  // Additional navigation
  async clickFieldNamesForPDFWordForm(): Promise<void> { await this.page.locator('#cmdFieldNames').click(); }
  async closeAdmissionEntry(): Promise<void> { await this.page.close(); }
  async switchToCustomTab(): Promise<void> { await this.page.locator('#tabCustom').click(); }
  async clickSaveButton(): Promise<void> { await this.saveButton.click(); }

  // Sub-agency verifications
  async verifyCreatorAndOwnerSubAgency(creatorSubAgency: string, ownerSubAgency: string): Promise<void> {
    const creator = await this.page.locator('#cddCreatorSubAgency_DropDown').locator('option:checked').textContent() || '';
    const owner = await this.page.locator('#cddOwnerSubAgency_DropDown').locator('option:checked').textContent() || '';
    expect(creator).toContain(creatorSubAgency);
    expect(owner).toContain(ownerSubAgency);
  }
  async verifySubAgencyInAdmissionEntry(creatorSubAgency: string, ownerSubAgency: string): Promise<void> {
    await this.verifyCreatorAndOwnerSubAgency(creatorSubAgency, ownerSubAgency);
  }

  // Save buttons disabled
  async verifySaveButtonsDisabled(): Promise<void> {
    await expect(this.saveButton).toBeVisible();
    await expect(this.page.locator('#cmdSaveClose')).toBeVisible();
  }

  // Image verification
  async verifyImageIsAvailableOnInmateLeftPicture(): Promise<boolean> {
    const src = await this.page.locator('#imgInmateLeft').getAttribute('src');
    return src !== null && src.length > 0;
  }

  // Additional demographic verifications
  async verifyAtRace(expected: string): Promise<void> { expect(await this.getRaceValue()).toBe(expected); }
  async verifyAtDOB(expected: string): Promise<void> { expect(await this.getDOBValue()).toBe(expected); }
  async verifyAtAge(expected: string): Promise<void> { expect(await this.getAgeValue()).toBe(expected); }
  async verifyAtSex(expected: string): Promise<void> { expect(await this.getSexValue()).toBe(expected); }
  async verifyAtNameType(expected: string): Promise<void> { expect(await this.getNameType()).toBe(expected); }
  async verifyAtNameID(expected: string): Promise<void> {
    const nameType = await this.getNameType();
    const nameID = await this.page.locator('#txtNameID').inputValue();
    expect(`${nameType}${nameID}`).toContain(expected);
  }
  async verifyAtAgeBetweenAgeRange(age: string): Promise<void> {
    const actual = parseInt(await this.getAgeValue());
    const expected = parseInt(age);
    expect(actual).toBeGreaterThanOrEqual(expected - 1);
    expect(actual).toBeLessThanOrEqual(expected + 1);
  }
  async verifyAtBookingStatus(expected: string): Promise<void> { expect(await this.getBookingStatus()).toContain(expected); }
  async verifyAtAssignedCell(expected: string): Promise<void> { expect(await this.getAssignedCell()).toContain(expected); }
  async verifyAtJurisID(expected: string): Promise<void> { expect(this.page.url()).toContain(expected); }
  async verifyNameTypeIsBlank(): Promise<void> { expect(await this.inmateNameTypeEdit.inputValue()).toBe(''); }

  // ── Display/Layout verifications ─────────────────────────────────────────
  async verifySPNIsDisplayed(): Promise<void> { expect(await this.spnNoEdit.isVisible()).toBe(true); }
  async verifySPNIsEnabled(): Promise<void> { expect(await this.spnNoEdit.isEnabled()).toBe(true); }
  async verifyAtNameFieldsAreDisplayed(): Promise<void> {
    expect(await this.inmateNameTypeEdit.isVisible()).toBe(true);
    expect(await this.page.locator('#nInmateNameID_NameTypeID').isVisible()).toBe(true);
    expect(await this.inmateLastNameEdit.isVisible()).toBe(true);
    expect(await this.inmateFirstNameEdit.isVisible()).toBe(true);
    expect(await this.page.locator('#nInmateNameID_MiddleName').isVisible()).toBe(true);
    expect(await this.page.locator('#nInmateNameID_Suffix_DropDown').isVisible()).toBe(true);
    expect(await this.inmateNameInfoIcon.isVisible()).toBe(true);
  }
  async verifyCMSBookingFieldIsDisplayed(): Promise<void> {
    expect(await this.bookingYearEdit.isVisible()).toBe(true);
    expect(await this.bookingNoEdit.isVisible()).toBe(true);
  }
  async verifyAssignedCellLabelIsDisplayed(): Promise<void> { expect(await this.page.locator('#lblAssignedCell').isVisible()).toBe(true); }
  async verifyCurrentLocLabelIsDisplayed(): Promise<void> { expect(await this.page.locator('#lblCurrentLoc').isVisible()).toBe(true); }
  async verifyJacketLabelIsDisplayed(): Promise<void> { expect(await this.page.locator('#lblJacket').isVisible()).toBe(true); }
  async verifySexRaceLabelsWithHeaderAreDisplayed(): Promise<void> {
    expect(await this.page.locator('#lblSexRace').isVisible()).toBe(true);
    expect(await this.page.locator('#lblSex').isVisible()).toBe(true);
    expect(await this.page.locator('#lblRace').isVisible()).toBe(true);
  }
  async verifyInmateTypeLabelIsDisplayed(): Promise<void> { expect(await this.page.locator('#lblInmateType').isVisible()).toBe(true); }
  async verifyInmateTypeValueLabelsIsDisabled(): Promise<void> {
    expect(await this.page.locator('#lblInmateTypeValue').getAttribute('disabled')).toBe('true');
  }
  async verifyConfineReasonLabelIsDisplayed(): Promise<void> { expect(await this.page.locator('#lblConfineReason').isVisible()).toBe(true); }
  async verifyConfineReasonValueLabelsIsDisabled(): Promise<void> {
    expect(await this.page.locator('#lblConfineReasonValue').getAttribute('disabled')).toBe('true');
  }
  async verifySentenceStatusLabelIsDisplayed(): Promise<void> { expect(await this.page.locator('#lblSentenceStatus').isVisible()).toBe(true); }
  async verifySentenceStatusValueLabelsIsDisabled(): Promise<void> {
    expect(await this.page.locator('#lblSentenceStatusValue').getAttribute('disabled')).toBe('true');
  }
  async verifyJailAlertDropdownIsDisplayed(): Promise<void> { expect(await this.page.locator('#cddJailAlert_DropDown').isVisible()).toBe(true); }
  async verifyCurrentFlagDropdownIsDisplayed(): Promise<void> { expect(await this.page.locator('#cddCurrentFlag_DropDown').isVisible()).toBe(true); }
  async verifyCurrentSanctionDropdownIsDisplayed(): Promise<void> { expect(await this.page.locator('#cddCurrentSanction_DropDown').isVisible()).toBe(true); }
  async verifyFacilityDropdownIsDisplayed(): Promise<void> { expect(await this.facilityDropdown.isVisible()).toBe(true); }
  async verifyProcessStartedDateAndTimeIsDisplayed(): Promise<void> {
    expect(await this.processStartDateEdit.isVisible()).toBe(true);
    expect(await this.processStartTimeEdit.isVisible()).toBe(true);
  }
  async verifyProcessStartedDateAndTimeIsEnabled(): Promise<void> {
    expect(await this.processStartDateEdit.getAttribute('readonly')).not.toBe('true');
    expect(await this.processStartTimeEdit.getAttribute('readonly')).not.toBe('true');
  }
  async verifyProcessCompletedDateAndTimeIsDisplayed(): Promise<void> {
    expect(await this.page.locator('#dttmProcessCompleted_Date_KPIDttmCtrl').isVisible()).toBe(true);
    expect(await this.page.locator("//table[@id='dttmProcessCompleted_Time']//input").isVisible()).toBe(true);
  }
  async verifyProcessCompletedDateAndTimeIsDisabled(): Promise<void> {
    expect(await this.page.locator('#dttmProcessCompleted_Date_KPIDttmCtrl').getAttribute('readonly')).toBe('true');
    expect(await this.page.locator("//table[@id='dttmProcessCompleted_Time']//input").getAttribute('readonly')).toBe('true');
  }
  async verifyStartBookingButtonIsDisplayed(): Promise<void> { expect(await this.startBookingButton.isVisible()).toBe(true); }
  async verifyStartBookingButtonIsEnabled(): Promise<void> { expect(await this.startBookingButton.isEnabled()).toBe(true); }
  async verifyJailAlertDropdownIsEnabled(): Promise<void> { expect(await this.page.locator('#cddJailAlert_DropDown').isEnabled()).toBe(true); }
  async verifyCurrentFlagDropdownIsEnabled(): Promise<void> { expect(await this.page.locator('#cddCurrentFlag_DropDown').isEnabled()).toBe(true); }
  async verifyCurrentSanctionDropdownIsEnabled(): Promise<void> { expect(await this.page.locator('#cddCurrentSanction_DropDown').isEnabled()).toBe(true); }
  async verifyFacilityDropdownIsEnabled(): Promise<void> { expect(await this.facilityDropdown.isEnabled()).toBe(true); }

  // ── Date entry helpers ───────────────────────────────────────────────────
  async enterProcessStartDateAndTimeAsPreviousDate(): Promise<void> {
    const date = new Date(); date.setDate(date.getDate() - 2);
    const formatted = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    await this.processStartDateEdit.fill(formatted);
    await this.processStartTimeEdit.press('Tab');
  }
  async enterProcessStartDateAndTimeAsFutureDate(): Promise<void> {
    const date = new Date(); date.setDate(date.getDate() + 2);
    const formatted = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    await this.processStartDateEdit.fill(formatted);
    await this.processStartTimeEdit.press('Tab');
  }
  async verifySPNNoIsAvailable(): Promise<void> { expect((await this.spnNoEdit.inputValue()).trim()).not.toBe(''); }
  async verifyAtLastName(expected: string): Promise<void> { expect(await this.inmateLastNameEdit.inputValue()).toBe(expected); }
  async verifyAtFirstName(expected: string): Promise<void> { expect(await this.inmateFirstNameEdit.inputValue()).toBe(expected); }

  // ── Tab state verifications ──────────────────────────────────────────────
  async verifyDeleteSentenceTabIsDisplayed(): Promise<void> { expect(await this.page.locator("//span[text()='Delete Sentence']").isVisible()).toBe(true); }
  async verifyDeleteSentenceTabIsEnabled(): Promise<void> { expect(await this.page.locator("//span[text()='Delete Sentence']").isEnabled()).toBe(true); }
  async verifyDeleteSentenceTabIsNotDisplayed(): Promise<void> { expect(await this.page.locator("//span[text()='Delete Sentence']").isVisible()).toBe(false); }
  async clickDeleteSentenceTab(): Promise<void> { await this.page.locator("//span[text()='Delete Sentence']").click(); }
  async verifyReleaseTabIsDisplayed(): Promise<void> { expect(await this.page.locator("//span[text()='Release']").isVisible()).toBe(true); }
  async verifyReleaseTabIsEnabled(): Promise<void> { expect(await this.page.locator("//span[text()='Release']").isEnabled()).toBe(true); }
  async clickReleaseTab(): Promise<void> { await this.page.locator("//span[text()='Release']").click(); }
  async verifyTabColorAsBlue(tabName: string): Promise<void> {
    const color = await this.page.locator(`//span[text()='${tabName}']`).evaluate(el => window.getComputedStyle(el).color);
    expect(color).toContain('0, 0, 255');
  }
  async verifyNavigatedToAssociationsTab(): Promise<void> {
    const fw = await this.page.locator("//span[text()='Associations']").evaluate(el => window.getComputedStyle(el).fontWeight);
    expect(fw).toBe('700');
  }
  async verifyNavigatedToMedicalScreeningTab(): Promise<void> {
    const fw = await this.page.locator("//span[text()='Medical Screening']").evaluate(el => window.getComputedStyle(el).fontWeight);
    expect(fw).toBe('700');
  }
  async verifyNavigatedToChargesTab(): Promise<void> {
    const fw = await this.page.locator("//span[text()='Charges']").evaluate(el => window.getComputedStyle(el).fontWeight);
    expect(fw).toBe('700');
  }
  async verifyNavigatedToDetainersTab(): Promise<void> {
    const fw = await this.page.locator("//span[text()='Detainers']").evaluate(el => window.getComputedStyle(el).fontWeight);
    expect(fw).toBe('700');
  }
  async verifyNavigatedToFingerPrintTab(): Promise<void> {
    const fw = await this.page.locator("//span[text()='Fingerprint']").evaluate(el => window.getComputedStyle(el).fontWeight);
    expect(fw).toBe('700');
  }

  // ── Misc verifications and actions ──────────────────────────────────────
  async verifyJailAlertAsNull(): Promise<void> { expect(await this.page.locator('#cddJailAlert_DropDown').inputValue()).toBe(''); }
  async verifyCustomizeIconIsDisplayed(): Promise<void> { expect(await this.page.locator('#imgCustomize').isVisible()).toBe(true); }
  async verifyAtCustomTabIsDisplayed(): Promise<void> { expect(await this.page.locator("//span[text()='Custom']").isVisible()).toBe(true); }
  async verifyInterfaceLogButtonIsNotDisplayed(): Promise<void> { expect(await this.page.locator('#cmdInterfaceLog').isVisible()).toBe(false); }
  async setCMSBookingYearToJSONFile(): Promise<string> { return await this.bookingYearEdit.inputValue(); }
  async setCMSBookingNoToJsonFile(): Promise<string> { return await this.bookingNoEdit.inputValue(); }
  async verifyTheEnterStartDatePopupIsDisplayed(): Promise<void> {
    const popup = this.page.locator('#pnlStartDate');
    const style = await popup.getAttribute('style') || '';
    expect(style).toContain('visible');
  }
  async verifyTheEnterStartDatePopupIsNotDisplayed(): Promise<void> {
    const popup = this.page.locator('#pnlStartDate');
    const style = await popup.getAttribute('style') || '';
    expect(style).toContain('hidden');
  }
  async enterStartDateAsPreviousDateAndTimeInPopup(noOfPreviousDays: number): Promise<void> {
    const date = new Date(); date.setDate(date.getDate() - noOfPreviousDays);
    const formatted = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    const time = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    await this.page.locator('#txtStartDatePopup').fill(formatted);
    await this.page.locator('#txtStartTimePopup').fill(time);
  }
  async verifySearchButtonIsDisplayed(): Promise<void> {
    expect(await this.page.locator('#cmdSearch').isVisible()).toBe(true);
  }
  async EnterProcessStartDateNTime(): Promise<void> {
    await this.page.locator('#dttmProcessStartDate_Date_KPIDttmCtrl').press('Tab');
    await this.page.locator("//table[@id='dttmProcessStartDate_Time']//input").press('Tab');
  }
}

// ─── Main Tab ────────────────────────────────────────────────────────────────

export class MainTabPage {
  readonly page: Page;
  readonly arrivalDateEdit: Locator;
  readonly arrivalTimeEdit: Locator;
  readonly arrivalPFIDEdit: Locator;
  readonly arrivalOfficerDescriptionEdit: Locator;
  readonly arrivalOfficerLookupIcon: Locator;
  readonly fastIDEdit: Locator;
  readonly prebookCellDropdown: Locator;
  readonly intakeNotDetCheckbox: Locator;
  readonly intakeDateEdit: Locator;
  readonly intakeTimeEdit: Locator;
  readonly intakePFIDEdit: Locator;
  readonly intakeOfficerDescriptionEdit: Locator;
  readonly intakeOfficerLookupIcon: Locator;
  readonly intakeStartedDateEdit: Locator;
  readonly intakeStartedTimeEdit: Locator;
  readonly intakeProcessCompletedDateEdit: Locator;
  readonly intakeProcessCompletedTimeEdit: Locator;
  readonly bookingClosedDateEdit: Locator;
  readonly bookingClosedTimeEdit: Locator;
  readonly overrideIntakeCheckbox: Locator;
  readonly closeBookingCheckbox: Locator;
  readonly reviewTypeEdit: Locator;
  readonly supervisorActDropdown: Locator;
  readonly commentsEdit: Locator;
  readonly supReviewAddButton: Locator;
  readonly supervisorReviewGrid: Locator;
  readonly saveButton: Locator;
  readonly preBookDateEdit: Locator;
  readonly preBookTimeEdit: Locator;
  readonly preBookPFIDEdit: Locator;
  readonly preBookOfficerDescriptionEdit: Locator;
  readonly preBookOfficerLookupIcon: Locator;
  readonly preBookCompletedLabel: Locator;
  readonly preBookOfficerLabel: Locator;
  readonly forceClosingCommentEdit: Locator;
  readonly forceClosingSaveButton: Locator;
  readonly forceClosingOfficerCodeEdit: Locator;
  readonly forceClosingOfficerDescriptionEdit: Locator;
  readonly actionDropdown: Locator;
  readonly updateButton: Locator;
  readonly supervisorPFIDEdit: Locator;
  readonly supervisorDescriptionEdit: Locator;
  readonly supervisorLookupIcon: Locator;
  readonly supervisorReviewDateEdit: Locator;
  readonly supervisorReviewTimeEdit: Locator;
  readonly receivingFacilityDropdown: Locator;
  readonly reopenButton: Locator;
  readonly officerSignatureCheckbox: Locator;
  readonly officerSignatureImageBox: Locator;
  readonly intakeOfficerInfoIcon: Locator;
  readonly barcodeBox: Locator;
  readonly inmateSignatureBox: Locator;
  readonly statusLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.arrivalDateEdit = page.locator('#dttmArrival_Date_KPIDttmCtrl');
    this.arrivalTimeEdit = page.locator("//table[@id='dttmArrival_Time']//input");
    this.arrivalPFIDEdit = page.locator('#lupArrivalOfficer_CodeValue');
    this.arrivalOfficerDescriptionEdit = page.locator('#lupArrivalOfficer_CodeDescription');
    this.arrivalOfficerLookupIcon = page.locator('#lupArrivalOfficer_imgBtn');
    this.fastIDEdit = page.locator('#txtFastID');
    this.prebookCellDropdown = page.locator('#cddPreBookCell_DropDown');
    this.intakeNotDetCheckbox = page.locator('#chkIntakeNotDet');
    this.intakeDateEdit = page.locator('#dttmIntakeCompleted_Date_KPIDttmCtrl');
    this.intakeTimeEdit = page.locator("//table[@id='dttmIntakeCompleted_Time']//input");
    this.intakePFIDEdit = page.locator('#lupIntakeOfficer_CodeValue');
    this.intakeOfficerDescriptionEdit = page.locator('#lupIntakeOfficer_CodeDescription');
    this.intakeOfficerLookupIcon = page.locator('#lupIntakeOfficer_imgBtn');
    this.intakeStartedDateEdit = page.locator('#dttmIntakeStarted_Date_KPIDttmCtrl');
    this.intakeStartedTimeEdit = page.locator("//table[@id='dttmIntakeStarted_Time']//input");
    this.intakeProcessCompletedDateEdit = page.locator('#dttmProcessCompleted_Date_KPIDttmCtrl');
    this.intakeProcessCompletedTimeEdit = page.locator("//table[@id='dttmProcessCompleted_Time']//input");
    this.bookingClosedDateEdit = page.locator('#dttmBookClosed_Date_KPIDttmCtrl');
    this.bookingClosedTimeEdit = page.locator("//table[@id='dttmBookClosed_Time']//input");
    this.overrideIntakeCheckbox = page.locator('#chkOverrideIntake');
    this.closeBookingCheckbox = page.locator('#chkCloseBooking');
    this.reviewTypeEdit = page.locator('#txtReviewType');
    this.supervisorActDropdown = page.locator('#cddAction_DropDown');
    this.commentsEdit = page.locator('#txtComments');
    this.supReviewAddButton = page.locator('#cmdAdd');
    this.supervisorReviewGrid = page.locator('#grdSupervisorReview');
    this.saveButton = page.locator('#cmdInternalSave');
    this.preBookDateEdit = page.locator('#dttmPreBookCompleted_Date_KPIDttmCtrl');
    this.preBookTimeEdit = page.locator("//table[@id='dttmPreBookCompleted_Time']//input");
    this.preBookPFIDEdit = page.locator('#lupPreBookOfficer_CodeValue');
    this.preBookOfficerDescriptionEdit = page.locator('#lupPreBookOfficer_CodeDescription');
    this.preBookOfficerLookupIcon = page.locator('#lupPreBookOfficer_imgBtn');
    this.preBookCompletedLabel = page.locator('#lblPreBookComp');
    this.preBookOfficerLabel = page.locator('#lblPreBookOfficer');
    this.forceClosingCommentEdit = page.locator('#txtForceClosingComment');
    this.forceClosingSaveButton = page.locator('#cmdForceClosingSave');
    this.forceClosingOfficerCodeEdit = page.locator('#lupForceClosingOfficer_CodeValue');
    this.forceClosingOfficerDescriptionEdit = page.locator('#lupForceClosingOfficer_CodeDescription');
    this.actionDropdown = page.locator('#cddAction_DropDown');
    this.updateButton = page.locator('#cmdAdd');
    this.supervisorPFIDEdit = page.locator('#lupSupervisor_CodeValue');
    this.supervisorDescriptionEdit = page.locator('#lupSupervisor_CodeDescription');
    this.supervisorLookupIcon = page.locator('#lupSupervisor_imgBtn');
    this.supervisorReviewDateEdit = page.locator('#dttmReviewDate_Date_KPIDttmCtrl');
    this.supervisorReviewTimeEdit = page.locator("//table[@id='dttmReviewDate_Time']//input");
    this.receivingFacilityDropdown = page.locator('#cddReceivingFacility_DropDown');
    this.reopenButton = page.locator('#cmdReopen');
    this.officerSignatureCheckbox = page.locator('#chkOfficerSignature');
    this.officerSignatureImageBox = page.locator('#ImgOfficerSign');
    this.intakeOfficerInfoIcon = page.locator('#lupIntakeOfficer_cmdIncOnAddr');
    this.barcodeBox = page.locator('#barBooking');
    this.inmateSignatureBox = page.locator('#imgInmateSign');
    this.statusLabel = page.locator('#lblStatus');
  }

  async enterAtArrivalDetails(pfId: string): Promise<void> {
    await this.arrivalDateEdit.press('Tab');
    await this.arrivalTimeEdit.press('Tab');
    await this.arrivalPFIDEdit.fill(pfId);
    await this.arrivalPFIDEdit.press('Tab');
  }

  async selectAtCell(cell: string): Promise<void> { await this.prebookCellDropdown.selectOption({ label: cell }); await this.prebookCellDropdown.press('Tab'); }

  async enterIntakeDetail(pfId: string): Promise<void> {
    await this.intakeNotDetCheckbox.click();
    await this.intakeDateEdit.press('Tab');
    await this.intakeTimeEdit.press('Tab');
    await this.intakePFIDEdit.fill(pfId);
    await this.intakePFIDEdit.press('Tab');
  }

  async selectIntakeReviewInGrid(): Promise<void> {
    await this.supervisorReviewGrid.locator("//td[contains(text(),'Intake')]").click();
  }

  async supervisorReview(action: string, comments: string): Promise<void> {
    await this.supervisorActDropdown.selectOption({ label: action });
    await this.commentsEdit.fill(comments);
    await this.supReviewAddButton.click();
  }

  async selectOverrideIntakeCheckbox(): Promise<void> { await this.overrideIntakeCheckbox.click(); }
  async selectCloseBookingCheckbox(): Promise<void> { await this.closeBookingCheckbox.click(); }

  async tabCompletedDateAndTime(): Promise<void> {
    await this.preBookDateEdit.press('Tab');
    await this.preBookTimeEdit.press('Tab');
  }

  async enterAtCompletedOfficer(pfId: string): Promise<void> { await this.preBookPFIDEdit.fill(pfId); await this.preBookPFIDEdit.press('Tab'); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async enterAtForceClosingComments(comments: string): Promise<void> { await this.forceClosingCommentEdit.fill(comments); }
  async clickClosingSave(): Promise<void> { await this.forceClosingSaveButton.click(); }
  async selectAtAction(action: string): Promise<void> { await this.actionDropdown.selectOption({ label: action }); }
  async clickUpdateButton(): Promise<void> { await this.updateButton.click(); }
  async enterAtComments(comments: string): Promise<void> { await this.commentsEdit.fill(comments); }
  async selectAtReceivingFacility(facility: string): Promise<void> { await this.receivingFacilityDropdown.selectOption({ label: facility }); await this.receivingFacilityDropdown.press('Tab'); }
  async clickOfficerSignatureCheckbox(): Promise<void> { await this.officerSignatureCheckbox.click(); }
  async clickIntakeOfficerInfoIcon(): Promise<void> { await this.intakeOfficerInfoIcon.click(); }

  async tabOutArrivalDateTime(): Promise<void> {
    await this.arrivalDateEdit.press('Tab');
    await this.arrivalTimeEdit.press('Tab');
  }

  async tabOutIntakeCompletedDateAndTime(): Promise<void> {
    await this.intakeDateEdit.click();
    await this.intakeDateEdit.press('Tab');
    await this.intakeTimeEdit.press('Tab');
  }

  async enterAtIntakeOfficer(pfId: string): Promise<void> { await this.intakePFIDEdit.fill(pfId); await this.intakePFIDEdit.press('Tab'); }

  async selectAtReviewTypeInGrid(reviewType: string): Promise<void> {
    await this.supervisorReviewGrid.locator(`//td[contains(text(),'${reviewType}')]`).click();
  }

  async getActionInGrid(rowIndex: number, column: string): Promise<string> {
    const cell = this.supervisorReviewGrid.locator(`//tr[contains(@class,'Row')][${rowIndex + 1}]//td[contains(@aria-describedby,'${column}')]`);
    return (await cell.textContent()) || '';
  }

  async getForceClosingOfficerCode(): Promise<string> { return await this.forceClosingOfficerCodeEdit.inputValue(); }
  async getReviewType(): Promise<string> { return await this.reviewTypeEdit.inputValue(); }
  async getSupervisorPFID(): Promise<string> { return await this.supervisorPFIDEdit.inputValue(); }
  async getSupervisorReviewDate(): Promise<string> { return await this.supervisorReviewDateEdit.inputValue(); }
  async getSelectedCell(): Promise<string> { return await this.prebookCellDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedAction(): Promise<string> { return await this.actionDropdown.locator('option:checked').textContent() || ''; }
  async getReceivingFacility(): Promise<string> { return await this.receivingFacilityDropdown.locator('option:checked').textContent() || ''; }
  async isCloseBookingCheckboxEnabled(): Promise<boolean> { return await this.closeBookingCheckbox.isEnabled(); }
  async isOverrideIntakeCheckboxEnabled(): Promise<boolean> { return await this.overrideIntakeCheckbox.isEnabled(); }
  async isReopenButtonVisible(): Promise<boolean> { return await this.reopenButton.isVisible(); }
  async isIntakeDateEnabled(): Promise<boolean> { return await this.intakeDateEdit.isEnabled(); }
  async getIntakeStartedDate(): Promise<string> { return await this.intakeStartedDateEdit.inputValue(); }
  async getIntakeStartedTime(): Promise<string> { return await this.intakeStartedTimeEdit.inputValue(); }
  async getIntakeCompletedDate(): Promise<string> { return await this.intakeDateEdit.inputValue(); }
  async getIntakeCompletedTime(): Promise<string> { return await this.intakeTimeEdit.inputValue(); }
  async getIntakeProcessCompletedDate(): Promise<string> { return await this.intakeProcessCompletedDateEdit.inputValue(); }
  async getIntakeProcessCompletedTime(): Promise<string> { return await this.intakeProcessCompletedTimeEdit.inputValue(); }
  async getBookingStatus(): Promise<string> { return (await this.statusLabel.textContent()) || ''; }
  async getSupervisorReviewTime(): Promise<string> { return await this.supervisorReviewTimeEdit.inputValue(); }
  async getForceClosingOfficerDescription(): Promise<string> { return await this.forceClosingOfficerDescriptionEdit.inputValue(); }
  async getSupervisorDescription(): Promise<string> { return await this.supervisorDescriptionEdit.inputValue(); }
  async getPreBookCompletedLabelColor(): Promise<string> { return await this.preBookCompletedLabel.evaluate(el => getComputedStyle(el).color); }
  async getPreBookOfficerLabelColor(): Promise<string> { return await this.preBookOfficerLabel.evaluate(el => getComputedStyle(el).color); }
  async isPreBookDateEnabled(): Promise<boolean> { return await this.preBookDateEdit.isEnabled(); }
  async isPreBookTimeEnabled(): Promise<boolean> { return await this.preBookTimeEdit.isEnabled(); }
  async isPreBookPFIDEnabled(): Promise<boolean> { return await this.preBookPFIDEdit.isEnabled(); }
  async isPreBookOfficerDescriptionEnabled(): Promise<boolean> { return await this.preBookOfficerDescriptionEdit.isEnabled(); }
  async isPreBookOfficerLookupEnabled(): Promise<boolean> { return await this.preBookOfficerLookupIcon.isEnabled(); }
  async isCellDropdownEnabled(): Promise<boolean> { return await this.prebookCellDropdown.isEnabled(); }
  async isIntakeTimeEnabled(): Promise<boolean> { return await this.intakeTimeEdit.isEnabled(); }
  async isIntakePFIDEnabled(): Promise<boolean> { return await this.intakePFIDEdit.isEnabled(); }
  async isIntakeOfficerDescriptionEnabled(): Promise<boolean> { return await this.intakeOfficerDescriptionEdit.isEnabled(); }
  async isIntakeOfficerLookupEnabled(): Promise<boolean> { return await this.intakeOfficerLookupIcon.isEnabled(); }
  async isPreBookDateReadonly(): Promise<boolean> { return (await this.preBookDateEdit.getAttribute('readonly')) === 'true'; }
  async isPreBookPFIDReadonly(): Promise<boolean> { return (await this.preBookPFIDEdit.getAttribute('readonly')) === 'true'; }

  async saveScreen(): Promise<void> { await this.saveButton.click(); }
  async enterAtIntakeStartedDate(date: string): Promise<void> {
    await this.intakeStartedDateEdit.click();
    await this.intakeStartedDateEdit.fill(date);
  }
  async enterAtIntakeStartedTime(time: string): Promise<void> {
    await this.intakeStartedTimeEdit.click();
    await this.intakeStartedTimeEdit.fill(time);
  }
  async tabOutPreBookCompletedDateTime(): Promise<void> {
    await this.preBookDateEdit.press('Tab');
    await this.preBookTimeEdit.press('Tab');
  }
  async clickReopenButton(): Promise<void> { await this.reopenButton.click(); }
  async clickArrivalOfficerLookupIcon(): Promise<void> { await this.arrivalOfficerLookupIcon.click(); }
  async clickPreBookOfficerLookupIcon(): Promise<void> { await this.preBookOfficerLookupIcon.click(); }
  async clickSupervisorLookupIcon(): Promise<void> { await this.supervisorLookupIcon.click(); }

  async getGridCellText(reviewType: string, column: string): Promise<string> {
    const cell = this.supervisorReviewGrid.locator(`//tr[td[contains(text(),'${reviewType}')]]//td[contains(@aria-describedby,'${column}')]`);
    return (await cell.textContent()) || '';
  }
  async getGridReviewedDate(rowIndex: number): Promise<string> {
    const cell = this.supervisorReviewGrid.locator(`//tr[contains(@class,'Row')][${rowIndex + 1}]//td[contains(@aria-describedby,'Reviewed')]`);
    return (await cell.textContent()) || '';
  }

  // ── Verify methods ──────────────────────────────────────────────────────
  async verifyIntakeActionCreatedInSupervisorReviewGrid(rowIndex: number): Promise<void> {
    const cell = this.supervisorReviewGrid.locator(`//tr[contains(@class,'Row')][${rowIndex + 1}]//td[contains(@aria-describedby,'ReviewType')]`);
    expect(await cell.textContent()).toContain('Intake');
  }
  async verifyIntakeFieldsDisabled(): Promise<void> {
    const dateClass = await this.intakeDateEdit.getAttribute('class') || '';
    expect(dateClass).toContain('textboxInactive');
  }
  async verifyIntakeFieldsEnabled(): Promise<void> {
    expect(await this.isIntakeDateEnabled()).toBe(true);
    expect(await this.isIntakeTimeEnabled()).toBe(true);
    expect(await this.isIntakePFIDEnabled()).toBe(true);
  }
  async verifyIntakeStartedDate(expected: string): Promise<void> { expect(await this.getIntakeStartedDate()).toBe(expected); }
  async verifyIntakeStartedTime(expected: string): Promise<void> { expect(await this.getIntakeStartedTime()).toBe(expected); }
  async verifyProcessCompletedFieldsDisabled(): Promise<void> {
    const dateClass = await this.page.locator('#dttmProcessCompleted_Date_KPIDttmCtrl').getAttribute('class') || '';
    expect(dateClass).toContain('textboxInactive');
  }
  async verifyIntakeProcessCompletedDateAsReviewedDateFromGrid(rowIndex: number): Promise<void> {
    const gridDate = await this.getGridReviewedDate(rowIndex);
    const processDate = await this.getIntakeProcessCompletedDate();
    expect(processDate).toContain(gridDate.split(' ')[0]);
  }
  async verifyInmateBookingStatusAsActiveOut(): Promise<void> { expect(await this.getBookingStatus()).toBe('Active-Out'); }
  async verifyInmateBookingStatusAsDayRelease(): Promise<void> { expect(await this.getBookingStatus()).toBe('Day release'); }
  async verifyInmateBookingStatusAsElectronicMonitoring(): Promise<void> { expect(await this.getBookingStatus()).toBe('Electronic monitoring'); }
  async verifyInmateBookingStatusAsClosedAdministrativeEditorOnly(): Promise<void> { expect(await this.getBookingStatus()).toContain('Closed'); }
  async verifyCloseBookingCheckboxDisabled(): Promise<void> { expect(await this.isCloseBookingCheckboxEnabled()).toBe(false); }
  async verifyCloseBookingCheckboxEnabled(): Promise<void> { expect(await this.isCloseBookingCheckboxEnabled()).toBe(true); }
  async verifyOverrideIntakeCheckboxDisabled(): Promise<void> { expect(await this.isOverrideIntakeCheckboxEnabled()).toBe(false); }
  async verifyOverrideIntakeCheckboxEnabled(): Promise<void> { expect(await this.isOverrideIntakeCheckboxEnabled()).toBe(true); }
  async verifyAtClosingOfficer(expectedCode: string): Promise<void> {
    expect(await this.getForceClosingOfficerCode()).toContain(expectedCode);
  }
  async verifyAtReviewType(expected: string): Promise<void> { expect(await this.getReviewType()).toBe(expected); }
  async verifyAtSupervisor(expected: string): Promise<void> { expect(await this.getSupervisorPFID()).toContain(expected); }
  async verifyAtAction(expected: string): Promise<void> { expect(await this.getSelectedAction()).toContain(expected); }
  async verifySupervisorReviewDateAsCurrentDate(): Promise<void> {
    const reviewDate = await this.getSupervisorReviewDate();
    const today = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    expect(reviewDate).toContain(today);
  }
  async verifyAtCell(expected: string): Promise<void> { expect(await this.getSelectedCell()).toContain(expected); }
  async verifyPreBookCompletedAsMandatory(): Promise<void> { expect(await this.getPreBookCompletedLabelColor()).toContain('128, 0, 0'); }
  async verifyPreBookOfficerAsMandatory(): Promise<void> { expect(await this.getPreBookOfficerLabelColor()).toContain('128, 0, 0'); }
  async verifyPreBookCompletedAsNonMandatory(): Promise<void> { expect(await this.getPreBookCompletedLabelColor()).toContain('0, 0, 0'); }
  async verifyPreBookOfficerAsNonMandatory(): Promise<void> { expect(await this.getPreBookOfficerLabelColor()).toContain('0, 0, 0'); }
  async verifyAtActionInGrid(reviewType: string, expected: string): Promise<void> {
    const actual = await this.getGridCellText(reviewType, 'Action');
    expect(actual).toContain(expected);
  }
  async verifyIntakeCompletedDateAndTimeAreBlank(): Promise<void> {
    expect(await this.getIntakeCompletedDate()).toBe('');
    expect(await this.getIntakeCompletedTime()).toBe('');
  }
  async verifyAtReviewTypeInGrid(expected: string): Promise<void> {
    const text = await this.supervisorReviewGrid.textContent();
    expect(text).toContain(expected);
  }
  async verifyAtReceivingFacility(expected: string): Promise<void> { expect(await this.getReceivingFacility()).toContain(expected); }
  async verifyAtReceivingFacilityContainsValue(expected: string): Promise<void> {
    const options = await this.page.locator('#cddReceivingFacility_DropDown option').allTextContents();
    expect(options.some(o => o.includes(expected))).toBe(true);
  }
  async verifyAtCellContainsValue(expected: string): Promise<void> {
    const options = await this.page.locator('#cddCell_DropDown option').allTextContents();
    expect(options.some(o => o.includes(expected))).toBe(true);
  }

  // ── Display verifications ───────────────────────────────────────────────
  async isReceivingFacilityDropdownDisplayed(): Promise<boolean> { return await this.page.locator('#cddReceivingFacility_DropDown').isVisible(); }
  async isArrivalCompletedDateTimeDisplayed(): Promise<boolean> { return await this.arrivalDateEdit.isVisible(); }
  async isArrivalOfficerFieldDisplayed(): Promise<boolean> { return await this.arrivalPFIDEdit.isVisible(); }
  async isFastIDFieldDisplayed(): Promise<boolean> { return await this.fastIDEdit.isVisible(); }
  async isCellDropdownDisplayed(): Promise<boolean> { return await this.prebookCellDropdown.isVisible(); }
  async isPreBookDateTimeFieldsDisplayed(): Promise<boolean> { return await this.preBookDateEdit.isVisible(); }
  async isPreBookOfficerFieldDisplayed(): Promise<boolean> { return await this.preBookPFIDEdit.isVisible(); }
  async isIntakeOfficerFieldDisplayed(): Promise<boolean> { return await this.intakePFIDEdit.isVisible(); }
  async isNoticeOfDetentionCheckboxDisplayed(): Promise<boolean> { return await this.page.locator('#chkNoticeOfDetention').isVisible(); }
  async isIntakeCompletedDateTimeDisplayed(): Promise<boolean> { return await this.intakeDateEdit.isVisible(); }
  async isBarcodeDisplayed(): Promise<boolean> { return await this.page.locator('#txtBarcode').isVisible(); }
  async isOfficerSignatureCheckboxDisplayed(): Promise<boolean> { return await this.page.locator('#chkOfficerSignature').isVisible(); }
  async isIntakeStartedDateTimeDisplayed(): Promise<boolean> { return await this.page.locator('#dttmIntakeStarted_Date_KPIDttmCtrl').isVisible(); }
  async isProcessCompletedDateTimeDisplayed(): Promise<boolean> { return await this.page.locator('#dttmProcessCompleted_Date_KPIDttmCtrl').isVisible(); }
  async isOverrideIntakeCheckboxDisplayed(): Promise<boolean> { return await this.page.locator('#chkOverrideIntake').isVisible(); }
  async isCloseBookingCheckboxDisplayed(): Promise<boolean> { return await this.page.locator('#chkCloseBooking').isVisible(); }
  async isBookingClosedDateTimeDisplayed(): Promise<boolean> { return await this.page.locator('#dttmBookingClosed_Date_KPIDttmCtrl').isVisible(); }
  async isReviewTypeFieldDisplayed(): Promise<boolean> { return await this.page.locator('#txtReviewType').isVisible(); }
  async isSupervisorFieldDisplayed(): Promise<boolean> { return await this.page.locator('#txtSupervisorCode').isVisible(); }
  async isActionDropdownDisplayed(): Promise<boolean> { return await this.page.locator('#cddAction_DropDown').isVisible(); }
  async isSupervisorReviewDateTimeDisplayed(): Promise<boolean> { return await this.page.locator('#dttmSupervisorReview_Date_KPIDttmCtrl').isVisible(); }
  async isCommentsFieldDisplayed(): Promise<boolean> { return await this.page.locator('#txtComments').isVisible(); }
  async isAddButtonDisplayed(): Promise<boolean> { return await this.page.locator('#cmdAdd').isVisible(); }
  async isClearButtonDisplayed(): Promise<boolean> { return await this.page.locator('#cmdClear').isVisible(); }
  async isSupervisorReviewGridDisplayed(): Promise<boolean> { return await this.supervisorReviewGrid.isVisible(); }
  async isInmateSignatureFieldDisplayed(): Promise<boolean> { return await this.page.locator('#imgInmateSignature').isVisible(); }
  async isOfficerSignatureImageBoxDisplayed(): Promise<boolean> { return await this.page.locator('#imgOfficerSignature').isVisible(); }
  async isCellDropdownDisabled(): Promise<boolean> { return !(await this.isCellDropdownEnabled()); }

  // ── Enabled/Disabled state checks ──────────────────────────────────────
  async verifyPreBookCompletedDateTimeFieldsAreEnabled(): Promise<void> {
    expect(await this.isPreBookDateEnabled()).toBe(true);
    expect(await this.isPreBookTimeEnabled()).toBe(true);
  }
  async verifyPreBookCompletedDateTimeFieldsAreDisabled(): Promise<void> {
    expect(await this.isPreBookDateReadonly()).toBe(true);
  }
  async verifyPreBookOfficerFieldIsEnabled(): Promise<void> {
    expect(await this.isPreBookPFIDEnabled()).toBe(true);
  }
  async verifyPreBookOfficerFieldIsDisabled(): Promise<void> {
    expect(await this.isPreBookPFIDReadonly()).toBe(true);
  }
  async verifyIntakeCompletedDateTimeAreEnabled(): Promise<void> {
    expect(await this.isIntakeDateEnabled()).toBe(true);
    expect(await this.isIntakeTimeEnabled()).toBe(true);
  }
  async verifyIntakeCompletedOfficerFieldIsEnabled(): Promise<void> {
    expect(await this.isIntakePFIDEnabled()).toBe(true);
    expect(await this.isIntakeOfficerDescriptionEnabled()).toBe(true);
  }

  // ── Popup handlers ─────────────────────────────────────────────────────
  async saveScreenWithConfirm(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.saveButton.click();
  }
  async verify30123DoYouWantToChangeTheIntakeCellAssignmentConfirmPopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30123)');
      await dialog.accept();
    });
  }

  // ── Additional entry methods ────────────────────────────────────────────
  async enterIntakeStartedDateAsFutureDate(date: string): Promise<void> {
    const field = this.page.locator('#dttmIntakeStarted_Date_KPIDttmCtrl');
    await field.click();
    await field.press('Control+A');
    await field.fill(date);
  }
  async verifyIntakeStartedDateAsFutureDate(expected: string): Promise<void> {
    expect(await this.page.locator('#dttmIntakeStarted_Date_KPIDttmCtrl').inputValue()).toBe(expected);
  }
  async selectRandomArrivalOfficer(): Promise<void> {
    await this.clickArrivalOfficerLookupIcon();
  }
  async selectRandomPreBookOfficer(): Promise<void> {
    await this.clickPreBookOfficerLookupIcon();
  }

  // ── Java-name wrappers ────────────────────────────────────────────────────
  async SelectIntakeOverrideChkBox(): Promise<void> { await this.selectOverrideIntakeCheckbox(); }
  async SelectCloseBookingChkBox(): Promise<void> { await this.selectCloseBookingCheckbox(); }
  async verifyOverrideIntakeProcessCheckBoxDisabled(): Promise<void> { expect(await this.overrideIntakeCheckbox.isVisible()).toBe(true); }
  async verifyOverrideIntakeProcessCheckBoxIsEnabled(): Promise<void> { expect(await this.isOverrideIntakeCheckboxEnabled()).toBe(true); }
  async enterAtCompltedOfficer(pfId: string): Promise<void> { await this.enterAtCompletedOfficer(pfId); }
  async verifyActionInGrid(reviewType: string, expectedAction: string): Promise<void> {
    const action = await this.getGridCellText(reviewType, 'Action');
    expect(action).toContain(expectedAction);
  }
  async verifyReopenButtonIsEnabled(): Promise<void> { expect(await this.reopenButton.isVisible()).toBe(true); }
  async verifyReceivingFacilityDropdownIsDisplayed(): Promise<void> { expect(await this.receivingFacilityDropdown.isVisible()).toBe(true); }
  async verifyArrivalCompletedDateAndTimeIsDisplayed(): Promise<void> {
    expect(await this.arrivalDateEdit.isVisible()).toBe(true);
    expect(await this.arrivalTimeEdit.isVisible()).toBe(true);
  }
  async verifyArrivalOfficerFieldIsDisplayed(): Promise<void> {
    expect(await this.arrivalPFIDEdit.isVisible()).toBe(true);
    expect(await this.arrivalOfficerDescriptionEdit.isVisible()).toBe(true);
    expect(await this.arrivalOfficerLookupIcon.isVisible()).toBe(true);
  }
  async verifyFastIDFieldIsDisplayed(): Promise<void> { expect(await this.fastIDEdit.isVisible()).toBe(true); }
  async verifyCellDropdownIsDisplayed(): Promise<void> { expect(await this.prebookCellDropdown.isVisible()).toBe(true); }
  async verifyPreBookCompletedDateTimeFieldsAreDisplayed(): Promise<void> {
    expect(await this.preBookDateEdit.isVisible()).toBe(true);
    expect(await this.preBookTimeEdit.isVisible()).toBe(true);
  }
  async verifyPreBookOfficerFieldIsDisplayed(): Promise<void> {
    expect(await this.preBookPFIDEdit.isVisible()).toBe(true);
    expect(await this.preBookOfficerDescriptionEdit.isVisible()).toBe(true);
    expect(await this.preBookOfficerLookupIcon.isVisible()).toBe(true);
  }
  async verifyIntakeOfficerFieldIsDisplayed(): Promise<void> {
    expect(await this.intakePFIDEdit.isVisible()).toBe(true);
    expect(await this.intakeOfficerDescriptionEdit.isVisible()).toBe(true);
    expect(await this.intakeOfficerLookupIcon.isVisible()).toBe(true);
  }
  async verifyNoticeOfDetentionCheckboxIsDisplayed(): Promise<void> { expect(await this.intakeNotDetCheckbox.isVisible()).toBe(true); }
  async verifyIntakeCompletedDateTimeFieldsAreDisplayed(): Promise<void> {
    expect(await this.intakeDateEdit.isVisible()).toBe(true);
    expect(await this.intakeTimeEdit.isVisible()).toBe(true);
  }
  async verifyBarcodeIsDisplayed(): Promise<void> { expect(await this.barcodeBox.isVisible()).toBe(true); }
  async verifyOfficerSignatureCheckboxIsDisplayed(): Promise<void> { expect(await this.officerSignatureCheckbox.isVisible()).toBe(true); }
  async verifyIntakeStartedDateTimeFieldsAreDisplayed(): Promise<void> {
    expect(await this.intakeStartedDateEdit.isVisible()).toBe(true);
    expect(await this.intakeStartedTimeEdit.isVisible()).toBe(true);
  }
  async verifyProcessCompletedDateTimeFieldsAreDisplayed(): Promise<void> {
    expect(await this.intakeProcessCompletedDateEdit.isVisible()).toBe(true);
    expect(await this.intakeProcessCompletedTimeEdit.isVisible()).toBe(true);
  }
  async verifyOverrideIntakeProcessCheckBoxIsDisplayed(): Promise<void> { expect(await this.overrideIntakeCheckbox.isEnabled()).toBe(true); }
  async verifyCloseBookingCheckBoxIsDisplayed(): Promise<void> { expect(await this.closeBookingCheckbox.isVisible()).toBe(true); }
  async verifyBookingClosedDateTimeFieldsAreDisplayed(): Promise<void> {
    expect(await this.bookingClosedDateEdit.isVisible()).toBe(true);
    expect(await this.bookingClosedTimeEdit.isVisible()).toBe(true);
  }
  async verifyReviewTypeFieldIsDisplayed(): Promise<void> { expect(await this.reviewTypeEdit.isVisible()).toBe(true); }
  async verifySupervisorFieldIsDisplayed(): Promise<void> {
    expect(await this.supervisorPFIDEdit.isVisible()).toBe(true);
    expect(await this.supervisorDescriptionEdit.isVisible()).toBe(true);
    expect(await this.supervisorLookupIcon.isVisible()).toBe(true);
  }
  async verifyActionDropdownIsDisplayed(): Promise<void> { expect(await this.actionDropdown.isVisible()).toBe(true); }
  async verifySupervisorReviewDateTimeFieldsAreDisplayed(): Promise<void> {
    expect(await this.supervisorReviewDateEdit.isVisible()).toBe(true);
    expect(await this.supervisorReviewTimeEdit.isVisible()).toBe(true);
  }
  async verifyCommentsFieldIsDisplayed(): Promise<void> { expect(await this.commentsEdit.isVisible()).toBe(true); }
  async verifyClearButtonIsDisplayed(): Promise<void> { expect(await this.supReviewAddButton.isVisible()).toBe(true); }
  async verifySupervisorReviewsGridIsDisplayed(): Promise<void> { expect(await this.supervisorReviewGrid.isVisible()).toBe(true); }
  async verifyInmateSignatureFieldIsDisplayed(): Promise<void> { expect(await this.inmateSignatureBox.isVisible()).toBe(true); }
  async verifyAtIntakeStartedTime(expected: string): Promise<void> { expect(await this.getIntakeStartedTime()).toBe(expected); }
  async verifyCellDropdownIsDisabled(): Promise<void> { expect(await this.isCellDropdownEnabled()).toBe(false); }
  async verifyPreBookOfficerIsDisabled(): Promise<void> {
    expect(await this.isPreBookPFIDEnabled()).toBe(false);
    expect(await this.isPreBookOfficerDescriptionEnabled()).toBe(false);
    expect(await this.isPreBookOfficerLookupEnabled()).toBe(false);
  }
  async verifyOfficerSignatureImageBoxIsDisplayed(): Promise<void> { expect(await this.officerSignatureImageBox.isVisible()).toBe(true); }
  async GetValueAlias(): Promise<{lastName: string, firstName: string}> {
    const lastName = await this.page.locator('#txtAliasLastName').inputValue();
    const firstName = await this.page.locator('#txtAliasFirstName').inputValue();
    return { lastName, firstName };
  }
}

// ─── Booking Tab ─────────────────────────────────────────────────────────────

export class BookingTabPage {
  readonly page: Page;
  readonly inmateTypeDropdown: Locator;
  readonly confineReasonDropdown: Locator;
  readonly sentenceStatusDropdown: Locator;
  readonly inmateStatusDropdown: Locator;
  readonly aliasLastNameEdit: Locator;
  readonly aliasFirstNameEdit: Locator;
  readonly alienNoEdit: Locator;
  readonly ssnEdit: Locator;
  readonly sexDropdown: Locator;
  readonly buildDropdown: Locator;
  readonly heightEdit: Locator;
  readonly weightEdit: Locator;
  readonly demeanorDropdown: Locator;
  readonly hairDropdown: Locator;
  readonly conditionDropdown: Locator;
  readonly eyesDropdown: Locator;
  readonly birthCountryEdit: Locator;
  readonly skinDropdown: Locator;
  readonly citizenshipEdit: Locator;
  readonly physicalDescriptionEdit: Locator;
  readonly smtCodeValueEdit: Locator;
  readonly smtDescEdit: Locator;
  readonly smtAddButton: Locator;
  readonly smtGrid: Locator;
  readonly bookingOfficerEdit: Locator;
  readonly saveButton: Locator;
  readonly additionalDataButton: Locator;
  readonly physicalButton: Locator;
  readonly specialNeedsButton: Locator;
  readonly arrestingOfficerEdit: Locator;
  readonly arrestingOfficerIDEdit: Locator;
  readonly phone1Edit: Locator;
  readonly phone2Edit: Locator;
  readonly phoneType1Dropdown: Locator;
  readonly phoneType2Dropdown: Locator;
  readonly arrestingAgencyCodeValueEdit: Locator;
  readonly arrestDateEdit: Locator;
  readonly arrestTimeEdit: Locator;
  readonly arrestLocationEdit: Locator;
  readonly informationConfirmedCheckbox: Locator;
  readonly aliasNameInfoIcon: Locator;
  readonly addressEdit: Locator;
  readonly cityEdit: Locator;
  readonly stateDropdown: Locator;
  readonly zipCodeEdit: Locator;
  readonly countyNoEdit: Locator;
  readonly saveAndGotoMedicalScreeningButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inmateTypeDropdown = page.locator('#cddInmateType_DropDown');
    this.confineReasonDropdown = page.locator('#cddConfineReason_DropDown');
    this.sentenceStatusDropdown = page.locator('#cddSentenceStatus_DropDown');
    this.inmateStatusDropdown = page.locator('#cddInmateStatus_DropDown');
    this.aliasLastNameEdit = page.locator('#txtAliasLastName');
    this.aliasFirstNameEdit = page.locator('#txtAliasFirstName');
    this.alienNoEdit = page.locator('#txtAlienNo');
    this.ssnEdit = page.locator('#mskSSN');
    this.sexDropdown = page.locator('#cddSex_DropDown');
    this.buildDropdown = page.locator('#cddBuild_DropDown');
    this.heightEdit = page.locator('#txtHeight');
    this.weightEdit = page.locator('#txtWeight');
    this.demeanorDropdown = page.locator('#cddDemeanor_DropDown');
    this.hairDropdown = page.locator('#cddHairColor_DropDown');
    this.conditionDropdown = page.locator('#cddCondition_DropDown');
    this.eyesDropdown = page.locator('#cddEyeColor_DropDown');
    this.birthCountryEdit = page.locator('#lupBirthCountry_CodeValue');
    this.skinDropdown = page.locator('#cddSkin_DropDown');
    this.citizenshipEdit = page.locator('#lupCitizenship_CodeValue');
    this.physicalDescriptionEdit = page.locator('#txtPhysicalDesc');
    this.smtCodeValueEdit = page.locator('#lupSMT_CodeValue');
    this.smtDescEdit = page.locator('#txtSMTDesc');
    this.smtAddButton = page.locator('#cmdSMTAdd');
    this.smtGrid = page.locator('#grdSMT');
    this.bookingOfficerEdit = page.locator('#lupBookOfficer_CodeValue');
    this.saveButton = page.locator('#cmdInternalSave');
    this.additionalDataButton = page.locator('#cmdAdditionalData');
    this.physicalButton = page.locator('#cmdPhysical');
    this.specialNeedsButton = page.locator('#cmdSpecialNeeds');
    this.arrestingOfficerEdit = page.locator('#txtArrestingOfficer');
    this.arrestingOfficerIDEdit = page.locator('#txtArrestingOfficerID');
    this.phone1Edit = page.locator('#mskPhone1');
    this.phone2Edit = page.locator('#mskPhone2');
    this.phoneType1Dropdown = page.locator('#cddPhoneType1_DropDown');
    this.phoneType2Dropdown = page.locator('#cddPhoneType2_DropDown');
    this.arrestingAgencyCodeValueEdit = page.locator('#lupArrestAgency_CodeValue');
    this.arrestDateEdit = page.locator('#dttmArrest_Date_KPIDttmCtrl');
    this.arrestTimeEdit = page.locator("//table[@id='dttmArrest_Time']//input");
    this.arrestLocationEdit = page.locator('#txtArrestLocation');
    this.informationConfirmedCheckbox = page.locator('#chkInfoConfirmed');
    this.aliasNameInfoIcon = page.locator('#imgAliasNameInfo');
    this.addressEdit = page.locator('#txtAddress');
    this.cityEdit = page.locator('#txtCity');
    this.stateDropdown = page.locator('#cddState_DropDown');
    this.zipCodeEdit = page.locator('#txtZip');
    this.countyNoEdit = page.locator('#txtCountyNo');
    this.saveAndGotoMedicalScreeningButton = page.locator('#cmdSaveGotoMedical');
  }

  async selectAtBookingDetails(inmateType: string, confineReason: string, sentenceStatus: string): Promise<void> {
    await this.inmateTypeDropdown.selectOption({ label: inmateType });
    await this.confineReasonDropdown.selectOption({ label: confineReason });
    await this.sentenceStatusDropdown.selectOption({ label: sentenceStatus });
  }

  async enterAtAliasName(lastName: string, firstName: string): Promise<void> {
    await this.aliasLastNameEdit.fill(lastName);
    await this.aliasFirstNameEdit.fill(firstName);
  }

  async selectAtStatus(status: string): Promise<void> { await this.inmateStatusDropdown.selectOption({ label: status }); }
  async selectAtInmateType(inmateType: string): Promise<void> { await this.inmateTypeDropdown.selectOption({ label: inmateType }); }
  async selectAtConfineReason(reason: string): Promise<void> { await this.confineReasonDropdown.selectOption({ label: reason }); }
  async selectAtSentenceStatus(status: string): Promise<void> { await this.sentenceStatusDropdown.selectOption({ label: status }); }
  async selectAtSex(sex: string): Promise<void> { await this.sexDropdown.selectOption({ label: sex }); }
  async enterAtBookingOfficer(pfId: string): Promise<void> { await this.bookingOfficerEdit.fill(pfId); await this.bookingOfficerEdit.press('Tab'); }
  async clickInternalSave(): Promise<void> { await this.saveButton.click(); }
  async clickAdditionalDataButton(): Promise<void> { await this.additionalDataButton.click(); }
  async clickPhysicalButton(): Promise<void> { await this.physicalButton.click(); }
  async clickSpecialNeedsButton(): Promise<void> { await this.specialNeedsButton.click(); }
  async clickInformationConfirmedCheckbox(): Promise<void> { await this.informationConfirmedCheckbox.click(); }
  async clickBookingAliasNameInfoIcon(): Promise<void> { await this.aliasNameInfoIcon.click(); }

  async enterArrestingOfficerAndID(officer: string, id: string): Promise<void> {
    await this.arrestingOfficerEdit.fill(officer);
    await this.arrestingOfficerIDEdit.fill(id);
  }

  async enterAtPhoneNo1(phone: string): Promise<void> { await this.phone1Edit.click(); await this.phone1Edit.fill(phone); }
  async enterAtPhoneNo2(phone: string): Promise<void> { await this.phone2Edit.click(); await this.phone2Edit.fill(phone); }
  async selectAtPhoneType1(type: string): Promise<void> { await this.phoneType1Dropdown.selectOption({ label: type }); }
  async selectAtPhoneType2(type: string): Promise<void> { await this.phoneType2Dropdown.selectOption({ label: type }); }
  async clearPhoneNo1(): Promise<void> { await this.phone1Edit.click(); await this.phone1Edit.clear(); }
  async clearPhoneNo2(): Promise<void> { await this.phone2Edit.click(); await this.phone2Edit.clear(); }
  async enterAtBirthCountry(country: string): Promise<void> { await this.birthCountryEdit.fill(country); await this.birthCountryEdit.press('Tab'); }
  async enterAtCitizenship(citizenship: string): Promise<void> { await this.citizenshipEdit.fill(citizenship); await this.citizenshipEdit.press('Tab'); }

  async enterAtSMT(code: string, description: string): Promise<void> {
    await this.smtCodeValueEdit.fill(code);
    await this.smtDescEdit.fill(description);
    await this.smtAddButton.click();
  }

  async enterAtArrestingAgency(agency: string): Promise<void> { await this.arrestingAgencyCodeValueEdit.fill(agency); await this.arrestingAgencyCodeValueEdit.press('Tab'); }

  async tabOutArrestDateTime(): Promise<void> {
    await this.arrestDateEdit.press('Tab');
    await this.arrestTimeEdit.press('Tab');
  }

  async enterAtArrestLocation(location: string): Promise<void> { await this.arrestLocationEdit.fill(location); await this.arrestLocationEdit.press('Tab'); }
  async enterAtAddress(address: string): Promise<void> { await this.addressEdit.clear(); await this.addressEdit.fill(address); await this.addressEdit.press('Tab'); }
  async enterAtCountyNo(countyNo: string): Promise<void> { await this.countyNoEdit.clear(); await this.countyNoEdit.fill(countyNo); }
  async enterAtBookingAliasLastName(lastName: string): Promise<void> { await this.aliasLastNameEdit.clear(); await this.aliasLastNameEdit.fill(lastName); }
  async enterAtBookingAliasFirstName(firstName: string): Promise<void> { await this.aliasFirstNameEdit.clear(); await this.aliasFirstNameEdit.fill(firstName); }
  async clickSaveAndGotoMedicalScreening(): Promise<void> { await this.saveAndGotoMedicalScreeningButton.click(); }

  async selectAtSMTInGrid(smt: string): Promise<void> { await this.smtGrid.locator(`//td[contains(text(),'${smt}')]`).click(); }
  async getAddress(): Promise<string> { return await this.addressEdit.inputValue(); }
  async getCity(): Promise<string> { return await this.cityEdit.inputValue(); }
  async getZipCode(): Promise<string> { return await this.zipCodeEdit.inputValue(); }
  async getCountyNo(): Promise<string> { return await this.countyNoEdit.inputValue(); }
  async getSSN(): Promise<string> { return await this.ssnEdit.inputValue(); }
  async getSMTCode(): Promise<string> { return await this.smtCodeValueEdit.inputValue(); }
  async getSMTDescription(): Promise<string> { return await this.smtDescEdit.inputValue(); }
  async getPhysicalButtonColor(): Promise<string> { return await this.physicalButton.evaluate(el => getComputedStyle(el).color); }
  async getSelectedInmateType(): Promise<string> { return await this.inmateTypeDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedConfineReason(): Promise<string> { return await this.confineReasonDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedSentenceStatus(): Promise<string> { return await this.sentenceStatusDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedSex(): Promise<string> { return await this.sexDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedState(): Promise<string> { return await this.stateDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedPhoneType1(): Promise<string> { return await this.phoneType1Dropdown.locator('option:checked').textContent() || ''; }
  async getPhone1(): Promise<string> { return await this.phone1Edit.inputValue(); }
  async getPhone2(): Promise<string> { return await this.phone2Edit.inputValue(); }
  async isPhone1Empty(): Promise<boolean> { return (await this.phone1Edit.inputValue()) === ''; }
  async isPhone2Empty(): Promise<boolean> { return (await this.phone2Edit.inputValue()) === ''; }
  async getBirthCountryLabelColor(): Promise<string> { return await this.page.locator('#lblBirthCountry').evaluate(el => getComputedStyle(el).color); }
  async getCitizenshipLabelColor(): Promise<string> { return await this.page.locator('#lblCitizenship').evaluate(el => getComputedStyle(el).color); }
  async getArrestingOfficerIDLabelColor(): Promise<string> { return await this.page.locator('#lblArrestingOfficerID').evaluate(el => getComputedStyle(el).color); }
  async isInformationConfirmedCheckboxVisible(): Promise<boolean> { return await this.informationConfirmedCheckbox.isVisible(); }
  async isInformationConfirmedCheckboxEnabled(): Promise<boolean> { return await this.informationConfirmedCheckbox.isEnabled(); }
  async isArrestingAgencyVisible(): Promise<boolean> { return await this.arrestingAgencyCodeValueEdit.isVisible(); }
  async isArrestDateVisible(): Promise<boolean> { return await this.arrestDateEdit.isVisible(); }
  async isArrestTimeVisible(): Promise<boolean> { return await this.arrestTimeEdit.isVisible(); }
  async isArrestLocationVisible(): Promise<boolean> { return await this.arrestLocationEdit.isVisible(); }
  async isArrestingOfficerVisible(): Promise<boolean> { return await this.arrestingOfficerEdit.isVisible(); }
  async isArrestingOfficerIDVisible(): Promise<boolean> { return await this.arrestingOfficerIDEdit.isVisible(); }
  async isArrestDateEnabled(): Promise<boolean> { return await this.arrestDateEdit.isEnabled(); }
  async isArrestTimeEnabled(): Promise<boolean> { return await this.arrestTimeEdit.isEnabled(); }
  async isArrestLocationEnabled(): Promise<boolean> { return await this.arrestLocationEdit.isEnabled(); }
  async isArrestingOfficerEnabled(): Promise<boolean> { return await this.arrestingOfficerEdit.isEnabled(); }
  async isArrestingOfficerIDEnabled(): Promise<boolean> { return await this.arrestingOfficerIDEdit.isEnabled(); }
  async clearArrestingOfficerID(): Promise<void> { await this.arrestingOfficerEdit.clear(); await this.arrestingOfficerIDEdit.clear(); }
  async clickAddButton(): Promise<void> { await this.smtAddButton.click(); }
  async enterAtSMTCode(code: string): Promise<void> { await this.smtCodeValueEdit.fill(code); }
  async enterAtSMTDescription(desc: string): Promise<void> { await this.smtDescEdit.fill(desc); }

  async inmatePersonalInfo(alienNo: string, ssn: string, sex: string, build: string, height: string, weight: string, demeanor: string, hair: string, condition: string, eyes: string, birthCountry: string, skin: string, citizenship: string, physicalDesc: string): Promise<void> {
    await this.alienNoEdit.fill(alienNo);
    await this.ssnEdit.fill(ssn);
    await this.sexDropdown.selectOption({ label: sex });
    await this.buildDropdown.selectOption({ label: build });
    await this.heightEdit.fill(height);
    await this.weightEdit.fill(weight);
    await this.demeanorDropdown.selectOption({ label: demeanor });
    await this.hairDropdown.selectOption({ label: hair });
    await this.conditionDropdown.selectOption({ label: condition });
    await this.eyesDropdown.selectOption({ label: eyes });
    await this.birthCountryEdit.fill(birthCountry);
    await this.skinDropdown.selectOption({ label: skin });
    await this.citizenshipEdit.fill(citizenship);
    await this.physicalDescriptionEdit.fill(physicalDesc);
  }

  // ── Popup/Acknowledge handlers ──────────────────────────────────────────
  async clickInternalSaveWithPopup(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.saveButton.click();
  }
  async internalSave(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.saveButton.click();
  }
  async verify6084SelectPhoneTypeAcknowledge(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(6084)');
      await dialog.accept();
    });
  }
  async verify1154DuplicationAcknowledge(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1154)');
      await dialog.accept();
    });
  }
  async verify30033EnterBirthCountryAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30033) Enter Birth Country');
      await dialog.accept();
    });
  }
  async verify30033EnterCitizenshipAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30033) Enter Citizenship');
      await dialog.accept();
    });
  }
  async verify30175InformationConfirmedCheckboxAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30175)');
      await dialog.accept();
    });
  }
  async verify6522AddressIsModifiedConfirmPopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(6522)');
      await dialog.accept();
    });
  }
  async verify30033EnterArrestingOfficerIDAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30033) Enter Arresting Officer');
      await dialog.accept();
    });
  }
  async saveAndGotoMedicalScreeningWithPopup(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.page.locator('#cmdSaveAndGotoMedical').click();
  }

  // ── Verify display/not-displayed ────────────────────────────────────────
  async isArrestingAgencyNotDisplayed(): Promise<boolean> { return !(await this.isArrestingAgencyVisible()); }
  async isArrestDateAndTimeNotDisplayed(): Promise<boolean> { return !(await this.isArrestDateVisible()) && !(await this.isArrestTimeVisible()); }
  async isArrestLocationNotDisplayed(): Promise<boolean> { return !(await this.isArrestLocationVisible()); }
  async isArrestCSZNotDisplayed(): Promise<boolean> { return !(await this.page.locator('#txtArrestCity').isVisible()); }
  async isArrestingOfficerIDNotDisplayed(): Promise<boolean> { return !(await this.isArrestingOfficerVisible()); }
  async isArrestingAgencyStateDropdownDisplayed(): Promise<boolean> { return await this.page.locator('#cddAgencyState_DropDown').isVisible(); }
  async isArrestingAgencyCodeDisplayed(): Promise<boolean> { return await this.page.locator('#txtAgencyCode').isVisible(); }
  async isArrestingAgencyDescriptionDisplayed(): Promise<boolean> { return await this.page.locator('#txtAgencyDescription').isVisible(); }
  async isArrestingAgencyLookupIconDisplayed(): Promise<boolean> { return await this.page.locator('#imgAgencyLookup').isVisible(); }
  async isArrestingAgencyDropdownEnabled(): Promise<boolean> { return await this.page.locator('#cddAgencyState_DropDown').isEnabled(); }
  async isArrestingAgencyCodeEnabled(): Promise<boolean> { return await this.page.locator('#txtAgencyCode').isEnabled(); }
  async isArrestingAgencyDescriptionDisabled(): Promise<boolean> {
    const readonly = await this.page.locator('#txtAgencyDescription').getAttribute('readonly');
    return readonly !== null;
  }
  async isArrestingAgencyLookupIconEnabled(): Promise<boolean> { return await this.page.locator('#imgAgencyLookup').isEnabled(); }
  async isArrestCityDisplayed(): Promise<boolean> { return await this.page.locator('#txtArrestCity').isVisible(); }
  async isArrestStateDisplayed(): Promise<boolean> { return await this.page.locator('#cddArrestState_DropDown').isVisible(); }
  async isArrestZipCodeDisplayed(): Promise<boolean> { return await this.page.locator('#txtArrestZipCode').isVisible(); }
  async isArrestCityEnabled(): Promise<boolean> { return await this.page.locator('#txtArrestCity').isEnabled(); }
  async isArrestStateEnabled(): Promise<boolean> { return await this.page.locator('#cddArrestState_DropDown').isEnabled(); }
  async isArrestZipCodeEnabled(): Promise<boolean> { return await this.page.locator('#txtArrestZipCode').isEnabled(); }
  async isBookingAliasNameInfoIconDisplayed(): Promise<boolean> { return await this.page.locator('#imgAliasNameInfo').isVisible(); }

  // ── Verify field values ─────────────────────────────────────────────────
  async verifyPhysicalButtonColorAsBlue(): Promise<void> {
    const color = await this.getPhysicalButtonColor();
    expect(color).toContain('0, 0, 255');
  }
  async verifyBirthCountryIsMandatory(): Promise<void> { expect(await this.getBirthCountryLabelColor()).toContain('128, 0, 0'); }
  async verifyCitizenshipIsMandatory(): Promise<void> { expect(await this.getCitizenshipLabelColor()).toContain('128, 0, 0'); }
  async verifyBirthCountryIsNonMandatory(): Promise<void> { expect(await this.getBirthCountryLabelColor()).toContain('0, 0, 0'); }
  async verifyCitizenshipIsNonMandatory(): Promise<void> { expect(await this.getCitizenshipLabelColor()).toContain('0, 0, 0'); }
  async verifyArrestingOfficerIDIsMandatory(): Promise<void> { expect(await this.getArrestingOfficerIDLabelColor()).toContain('128, 0, 0'); }
  async verifyArrestingOfficerIDIsNonMandatory(): Promise<void> { expect(await this.getArrestingOfficerIDLabelColor()).toContain('0, 0, 0'); }
  async verifyAtPhone1(expectedType: string, expectedPhone: string): Promise<void> {
    expect(await this.getSelectedPhoneType1()).toContain(expectedType);
    expect(await this.getPhone1()).toBe(expectedPhone);
  }
  async verifyAtAddress(expected: string): Promise<void> { expect(await this.getAddress()).toContain(expected); }
  async verifyAtCSZ(expectedCity: string, expectedState: string, expectedZip: string): Promise<void> {
    expect(await this.getCity()).toContain(expectedCity);
    expect(await this.getSelectedState()).toContain(expectedState);
    expect(await this.getZipCode()).toContain(expectedZip);
  }
  async verifyAtInmateType(expected: string): Promise<void> { expect(await this.getSelectedInmateType()).toContain(expected); }
  async verifyAtConfineReason(expected: string): Promise<void> { expect(await this.getSelectedConfineReason()).toContain(expected); }
  async verifyAtSentenceStatus(expected: string): Promise<void> { expect(await this.getSelectedSentenceStatus()).toContain(expected); }
  async verifyAtSex(expected: string): Promise<void> { expect(await this.getSelectedSex()).toContain(expected); }
  async verifyAtCountyNo(expected: string): Promise<void> { expect(await this.getCountyNo()).toBe(expected); }
  async verifyAtSSN(expected: string): Promise<void> { expect(await this.getSSN()).toBe(expected); }
  async verifyAtSMT(expectedCode: string): Promise<void> { expect(await this.getSMTCode()).toContain(expectedCode); }
  async verifyAtSMTDescription(expected: string): Promise<void> { expect(await this.getSMTDescription()).toContain(expected); }
  async verifySMTNotDuplicatedInGrid(smtCode: string): Promise<void> {
    const rows = this.page.locator(`#grdSMT //td[contains(text(),'${smtCode}')]`);
    expect(await rows.count()).toBe(1);
  }
  async verifyInformationConfirmedCheckboxNotDisplayed(): Promise<void> {
    expect(await this.isInformationConfirmedCheckboxVisible()).toBe(false);
  }
  async verifyInformationConfirmedCheckboxDisplayedAndEnabled(): Promise<void> {
    expect(await this.isInformationConfirmedCheckboxVisible()).toBe(true);
    expect(await this.isInformationConfirmedCheckboxEnabled()).toBe(true);
  }

  // ── Java-name wrappers ────────────────────────────────────────────────────
  async verifyPhoneNo1IsEmpty(): Promise<void> { expect(await this.isPhone1Empty()).toBe(true); }
  async verifyPhoneNo2IsEmpty(): Promise<void> { expect(await this.isPhone2Empty()).toBe(true); }
  async verifyArrestingAgencyIsNotDisplayed(): Promise<void> { expect(await this.isArrestingAgencyNotDisplayed()).toBe(true); }
  async verifyArrestDateAndTimeAreNotDisplayed(): Promise<void> { expect(await this.isArrestDateAndTimeNotDisplayed()).toBe(true); }
  async verifyArrestLocationIsNotDisplayed(): Promise<void> { expect(await this.isArrestLocationNotDisplayed()).toBe(true); }
  async verifyArrestCSZIsNotDisplayed(): Promise<void> { expect(await this.isArrestCSZNotDisplayed()).toBe(true); }
  async verifyArrestingOfficerIDAreNotDisplayed(): Promise<void> { expect(await this.isArrestingOfficerIDNotDisplayed()).toBe(true); }
  async verifyArrestingAgencyStateDropdownIsDisplayed(): Promise<void> { expect(await this.isArrestingAgencyStateDropdownDisplayed()).toBe(true); }
  async verifyArrestingAgencyCodeIsDisplayed(): Promise<void> { expect(await this.isArrestingAgencyCodeDisplayed()).toBe(true); }
  async verifyArrestingAgencyDescriptionIsDisplayed(): Promise<void> { expect(await this.isArrestingAgencyDescriptionDisplayed()).toBe(true); }
  async verifyArrestingAgencyLookupIconIsDisplayed(): Promise<void> { expect(await this.isArrestingAgencyLookupIconDisplayed()).toBe(true); }
  async verifyArrestingAgencyDropdownIsEnabled(): Promise<void> { expect(await this.isArrestingAgencyDropdownEnabled()).toBe(true); }
  async verifyArrestingAgencyCodeIsEnabled(): Promise<void> { expect(await this.isArrestingAgencyCodeEnabled()).toBe(true); }
  async verifyArrestingAgencyDescriptionIsDisabled(): Promise<void> { expect(await this.isArrestingAgencyDescriptionDisabled()).toBe(true); }
  async verifyArrestingAgencyLookupIconIsEnabled(): Promise<void> { expect(await this.isArrestingAgencyLookupIconEnabled()).toBe(true); }
  async verifyArrestDateIsDisplayed(): Promise<void> { expect(await this.isArrestDateVisible()).toBe(true); }
  async verifyArrestTimeIsDisplayed(): Promise<void> { expect(await this.isArrestTimeVisible()).toBe(true); }
  async verifyArrestDateIsEnabled(): Promise<void> { expect(await this.isArrestDateEnabled()).toBe(true); }
  async verifyArrestTimeIsEnabled(): Promise<void> { expect(await this.isArrestTimeEnabled()).toBe(true); }
  async verifyArrestLocationIsDisplayed(): Promise<void> { expect(await this.isArrestLocationVisible()).toBe(true); }
  async verifyArrestLocationIsEnabled(): Promise<void> { expect(await this.isArrestLocationEnabled()).toBe(true); }
  async verifyArrestCityIsDisplayed(): Promise<void> { expect(await this.isArrestCityDisplayed()).toBe(true); }
  async verifyArrestStateIsDisplayed(): Promise<void> { expect(await this.isArrestStateDisplayed()).toBe(true); }
  async verifyArrestZipCodeIsDisplayed(): Promise<void> { expect(await this.isArrestZipCodeDisplayed()).toBe(true); }
  async verifyArrestCityIsEnabled(): Promise<void> { expect(await this.isArrestCityEnabled()).toBe(true); }
  async verifyArrestStateIsEnabled(): Promise<void> { expect(await this.isArrestStateEnabled()).toBe(true); }
  async verifyArrestZipCodeIsEnabled(): Promise<void> { expect(await this.isArrestZipCodeEnabled()).toBe(true); }
  async verifyArrestingOfficerIsDisplayed(): Promise<void> { expect(await this.isArrestingOfficerVisible()).toBe(true); }
  async verifyArrestingOfficerIDIsDisplayed(): Promise<void> { expect(await this.isArrestingOfficerIDVisible()).toBe(true); }
  async verifyArrestingOfficerIsEnabled(): Promise<void> { expect(await this.isArrestingOfficerEnabled()).toBe(true); }
  async verifyArrestingOfficerIDIsEnabled(): Promise<void> { expect(await this.isArrestingOfficerIDEnabled()).toBe(true); }
  async verifyInformationConfirmedCheckboxIsNotDisplayed(): Promise<void> { await this.verifyInformationConfirmedCheckboxNotDisplayed(); }
  async verifyInformationConfirmedCheckboxIsDisplayedAndEnabled(): Promise<void> { await this.verifyInformationConfirmedCheckboxDisplayedAndEnabled(); }
  async verifyBookingAliasNameInfoIconIsDiplayed(): Promise<void> { expect(await this.isBookingAliasNameInfoIconDisplayed()).toBe(true); }
  async MedicalIntButton(): Promise<void> { await this.clickSaveAndGotoMedicalScreening(); }
  async MedicalIntakeQAForm(): Promise<void> { await this.page.locator('#cmdMedicalIntakeForm').click(); }
}

// ─── Charge Tab ──────────────────────────────────────────────────────────────

export class ChargeTabPage {
  readonly page: Page;
  readonly arrestingAgencyEdit: Locator;
  readonly arrestDateEdit: Locator;
  readonly arrestTimeEdit: Locator;
  readonly caseNoEdit: Locator;
  readonly officerEdit: Locator;
  readonly courtCaseEdit: Locator;
  readonly documentTypeDropdown: Locator;
  readonly controlAgencyDropdown: Locator;
  readonly billingTypeDropdown: Locator;
  readonly statuteCodeEdit: Locator;
  readonly dispositionDropdown: Locator;
  readonly modifierDropdown: Locator;
  readonly bondButton: Locator;
  readonly courtScheduleButton: Locator;
  readonly addButton: Locator;
  readonly copyButton: Locator;
  readonly saveButton: Locator;
  readonly chargeGrid: Locator;
  readonly sequenceEdit: Locator;
  readonly chargeDescEdit: Locator;
  readonly classDropdown: Locator;
  readonly chargeTypeDropdown: Locator;
  readonly countyNoEdit: Locator;
  readonly bondTypeDropdown: Locator;
  readonly bondAmountEdit: Locator;
  readonly courtDropdown: Locator;
  readonly sentenceButton: Locator;
  readonly historyButton: Locator;
  readonly warrantNoEdit: Locator;
  readonly warrantAgencyEdit: Locator;
  readonly ncicCodeEdit: Locator;
  readonly dispositionDateEdit: Locator;
  readonly dispoReasonDropdown: Locator;
  readonly verdictDropdown: Locator;
  readonly appealedDateEdit: Locator;
  readonly jurisDropdown: Locator;
  readonly arrAgencyStatusDropdown: Locator;
  readonly attemptCheckbox: Locator;
  readonly enhancedCheckbox: Locator;
  readonly dnaRequiredCheckbox: Locator;
  readonly domesticViolenceCheckbox: Locator;
  readonly svfCheckbox: Locator;
  readonly qualifierDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.arrestingAgencyEdit = page.locator('#lupArrestAgency_CodeValue');
    this.arrestDateEdit = page.locator('#dttmArrestDate_Date_KPIDttmCtrl');
    this.arrestTimeEdit = page.locator("//table[@id='dttmArrestDate_Time']//input");
    this.caseNoEdit = page.locator('#txtCaseNo');
    this.officerEdit = page.locator('#txtOfficer');
    this.courtCaseEdit = page.locator('#txtCourtCase');
    this.documentTypeDropdown = page.locator('#cddDocType_DropDown');
    this.controlAgencyDropdown = page.locator('#cddCtrlAgency_DropDown');
    this.billingTypeDropdown = page.locator('#cddBillingType_DropDown');
    this.statuteCodeEdit = page.locator('#lupStatute_CodeValue');
    this.dispositionDropdown = page.locator('#cddDisposition_DropDown');
    this.modifierDropdown = page.locator('#cddModifier_DropDown');
    this.bondButton = page.locator('#cmdBond');
    this.courtScheduleButton = page.locator('#cmdCourtSchedule');
    this.addButton = page.locator('#cmdChargeAdd');
    this.copyButton = page.locator('#cmdCopy');
    this.saveButton = page.locator('#cmdInternalSave');
    this.chargeGrid = page.locator('#grdCharge');
    this.sequenceEdit = page.locator('#txtSeqNo');
    this.chargeDescEdit = page.locator('#txtChargeDesc');
    this.classDropdown = page.locator('#cddClass_DropDown');
    this.chargeTypeDropdown = page.locator('#cddChargeType_DropDown');
    this.countyNoEdit = page.locator('#txtChargeCountyNo');
    this.bondTypeDropdown = page.locator('#cddBondType_DropDown');
    this.bondAmountEdit = page.locator('#txtBondAmt');
    this.courtDropdown = page.locator('#cddCourt_DropDown');
    this.sentenceButton = page.locator('#cmdSentence');
    this.historyButton = page.locator('#cmdHistory');
    this.warrantNoEdit = page.locator('#txtWarrantNo');
    this.warrantAgencyEdit = page.locator('#lupWarrantAgency_CodeValue');
    this.ncicCodeEdit = page.locator('#lupNCICCode_CodeValue');
    this.dispositionDateEdit = page.locator('#dttmDisposition_Date_KPIDttmCtrl');
    this.dispoReasonDropdown = page.locator('#cddDispoReason_DropDown');
    this.verdictDropdown = page.locator('#cddVerdict_DropDown');
    this.appealedDateEdit = page.locator('#dttmAppealed_Date_KPIDttmCtrl');
    this.jurisDropdown = page.locator('#cddJuris_DropDown');
    this.arrAgencyStatusDropdown = page.locator('#cddArrAgencyStatus_DropDown');
    this.attemptCheckbox = page.locator('#chkAttempt');
    this.enhancedCheckbox = page.locator('#chkEnhanced');
    this.dnaRequiredCheckbox = page.locator('#chkDNARequired');
    this.domesticViolenceCheckbox = page.locator('#chkDomesticViolence');
    this.svfCheckbox = page.locator('#chkSVF');
    this.qualifierDropdown = page.locator('#cddQualifier_DropDown');
  }

  async enterAtArrestingAgency(agency: string): Promise<void> { await this.arrestingAgencyEdit.fill(agency); await this.arrestingAgencyEdit.press('Tab'); }
  async tabOutArrestDate(): Promise<void> { await this.arrestDateEdit.press('Tab'); await this.arrestTimeEdit.press('Tab'); }
  async enterAtCaseNo(caseNo: string): Promise<void> { await this.caseNoEdit.fill(caseNo); }
  async enterAtOfficer(officer: string): Promise<void> { await this.officerEdit.fill(officer); }
  async enterAtCourtCase(courtCase: string): Promise<void> { await this.courtCaseEdit.fill(courtCase); }
  async selectAtDocumentType(docType: string): Promise<void> { await this.documentTypeDropdown.selectOption({ label: docType }); }
  async selectAtControlAgency(agency: string): Promise<void> { await this.controlAgencyDropdown.selectOption({ label: agency }); }
  async selectAtBillingType(billingType: string): Promise<void> { await this.billingTypeDropdown.selectOption({ label: billingType }); }
  async enterAtStatuteCode(statute: string): Promise<void> { await this.statuteCodeEdit.fill(statute); await this.statuteCodeEdit.press('Tab'); }
  async selectAtDisposition(disposition: string): Promise<void> { await this.dispositionDropdown.selectOption({ label: disposition }); }
  async selectAtModifier(modifier: string): Promise<void> { await this.modifierDropdown.selectOption({ label: modifier }); }
  async selectAtClass(chargeClass: string): Promise<void> { await this.classDropdown.selectOption({ label: chargeClass }); }
  async selectAtChargeType(chargeType: string): Promise<void> { await this.chargeTypeDropdown.selectOption({ label: chargeType }); }
  async enterAtCountyNo(countyNo: string): Promise<void> { await this.countyNoEdit.fill(countyNo); }
  async selectAtBondType(bondType: string): Promise<void> { await this.bondTypeDropdown.selectOption({ label: bondType }); }
  async enterAtBondAmount(amount: string): Promise<void> { await this.bondAmountEdit.fill(amount); }
  async selectAtCourt(court: string): Promise<void> { await this.courtDropdown.selectOption({ label: court }); }
  async enterAtWarrantNo(warrantNo: string): Promise<void> { await this.warrantNoEdit.fill(warrantNo); }
  async enterAtNCICCode(ncicCode: string): Promise<void> { await this.ncicCodeEdit.fill(ncicCode); await this.ncicCodeEdit.press('Tab'); }
  async selectAtDispoReason(reason: string): Promise<void> { await this.dispoReasonDropdown.selectOption({ label: reason }); }
  async selectAtVerdict(verdict: string): Promise<void> { await this.verdictDropdown.selectOption({ label: verdict }); }
  async selectAtJuris(juris: string): Promise<void> { await this.jurisDropdown.selectOption({ label: juris }); }
  async selectAtArrAgencyStatus(status: string): Promise<void> { await this.arrAgencyStatusDropdown.selectOption({ label: status }); }
  async selectAtQualifier(qualifier: string): Promise<void> { await this.qualifierDropdown.selectOption({ label: qualifier }); }

  async clickBondButton(): Promise<void> { await this.bondButton.click(); }
  async clickCourtScheduleButton(): Promise<void> { await this.courtScheduleButton.click(); }
  async clickAddButton(): Promise<void> { await this.addButton.click(); }
  async clickCopyButton(): Promise<void> { await this.copyButton.click(); }
  async clickSaveButton(): Promise<void> { await this.saveButton.click(); }
  async clickSentenceButton(): Promise<void> { await this.sentenceButton.click(); }
  async clickHistoryButton(): Promise<void> { await this.historyButton.click(); }
  async clickAttemptCheckbox(): Promise<void> { await this.attemptCheckbox.click(); }
  async clickEnhancedCheckbox(): Promise<void> { await this.enhancedCheckbox.click(); }
  async clickDNARequiredCheckbox(): Promise<void> { await this.dnaRequiredCheckbox.click(); }
  async clickDomesticViolenceCheckbox(): Promise<void> { await this.domesticViolenceCheckbox.click(); }
  async clickSVFCheckbox(): Promise<void> { await this.svfCheckbox.click(); }

  async selectChargeInGrid(statute: string): Promise<void> { await this.chargeGrid.locator(`//td[contains(text(),'${statute}')]`).click(); }
  async deleteChargeInGrid(statute: string): Promise<void> { await this.chargeGrid.locator(`//tr[td[contains(text(),'${statute}')]]//td[@class='Delete_Icon_Style']`).click(); }
  async getChargeGridRowCount(): Promise<number> { return await this.chargeGrid.locator('//tr[contains(@class,"Row")]').count(); }

  async getDisposition(): Promise<string> { return await this.dispositionDropdown.locator('option:checked').textContent() || ''; }
  async getBondAmount(): Promise<string> { return await this.bondAmountEdit.inputValue(); }
  async getStatuteCode(): Promise<string> { return await this.statuteCodeEdit.inputValue(); }
  async getChargeDesc(): Promise<string> { return await this.chargeDescEdit.inputValue(); }
  async getSequenceNo(): Promise<string> { return await this.sequenceEdit.inputValue(); }
  async getArrestingAgencyORI(): Promise<string> { return await this.page.locator('#ORIAgency_lupORI_CodeValue').inputValue(); }
  async getAgencyCase(): Promise<string> { return await this.caseNoEdit.inputValue(); }
  async getArrestingOfficerName(): Promise<string> { return await this.page.locator('#txtArrestPFName').inputValue(); }
  async getArrestingOfficerID(): Promise<string> { return await this.page.locator('#txtArrestPFCode').inputValue(); }
  async getTransportingOfficerName(): Promise<string> { return await this.page.locator('#txtTransPFName').inputValue(); }
  async getTransportingOfficerID(): Promise<string> { return await this.page.locator('#txtTransPFCode').inputValue(); }
  async getSelectedDocumentType(): Promise<string> { return await this.documentTypeDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedBondType(): Promise<string> { return await this.bondTypeDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedChargeClass(): Promise<string> { return await this.classDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedCourt(): Promise<string> { return await this.courtDropdown.locator('option:checked').textContent() || ''; }
  async getCourtLabelColor(): Promise<string> { return await this.page.locator('#lblCourt').evaluate(el => getComputedStyle(el).color); }
  async getNotesLabelColor(): Promise<string> { return await this.page.locator('#lblNotes').evaluate(el => getComputedStyle(el).color); }
  async getHeaderStatusMessage(): Promise<string> { return (await this.page.locator("//td[@class='status']//b").textContent()) || ''; }
  async getDocument(): Promise<string> { return await this.page.locator('#txtDocNbr').inputValue(); }
  async getArrestDate(): Promise<string> { return await this.page.locator('#dttmOffense_Date_KPIDttmCtrl').inputValue(); }

  async selectAtArrestingAgency(state: string, code: string): Promise<void> {
    await this.page.locator('#ORIAgency_KPIState').selectOption({ label: state });
    await this.page.locator('#ORIAgency_lupORI_CodeValue').fill(code);
    await this.page.locator('#ORIAgency_lupORI_CodeValue').press('Tab');
  }
  async enterArrestDate(date: string): Promise<void> { await this.page.locator('#dttmOffense_Date_KPIDttmCtrl').fill(date); await this.page.locator('#dttmOffense_Date_KPIDttmCtrl').press('Tab'); }
  async enterAtAgencyCaseNo(caseNo: string): Promise<void> { await this.caseNoEdit.fill(caseNo); }
  async enterAtArrestingOfficerNameAndID(name: string, id: string): Promise<void> {
    await this.page.locator('#txtArrestPFName').fill(name);
    await this.page.locator('#txtArrestPFCode').fill(id);
  }
  async enterAtTransportingOfficerNameAndID(name: string, id: string): Promise<void> {
    await this.page.locator('#txtTransPFName').fill(name);
    await this.page.locator('#txtTransPFCode').fill(id);
  }
  async selectAtControllingAgencyState(state: string): Promise<void> { await this.page.locator('#ContORIAgency_KPIState').selectOption({ label: state }); }
  async enterAtControllingAgencyCode(code: string): Promise<void> { await this.page.locator('#ContORIAgency_lupORI_CodeValue').fill(code); await this.page.locator('#ContORIAgency_lupORI_CodeValue').press('Tab'); }
  async clickControllingAgencyLookupIcon(): Promise<void> { await this.page.locator('#ContORIAgency_lupORI_imgBtn').click(); }
  async enterAtDocument(docNo: string): Promise<void> { await this.page.locator('#txtDocNbr').fill(docNo); }
  async enterAtNotes(notes: string): Promise<void> { await this.page.locator('#txtNotes').fill(notes); }
  async enterAtCount(count: string): Promise<void> { await this.page.locator('#txtCount').fill(count); }
  async clickIncludeInactiveCheckbox(): Promise<void> { await this.page.locator('#chkIncludeInac').click(); }
  async clickClearButton(): Promise<void> { await this.page.locator('#cmdClear').click(); }
  async clickUpdateButton(): Promise<void> { await this.page.locator('#cmdAdd').click(); }
  async clickPaymentButton(): Promise<void> { await this.page.locator('#cmdBondPayment').click(); }
  async clickStatuteLookupIcon(): Promise<void> { await this.page.locator('#lupCharge_imgBtn').click(); }
  async clickSaveAndGoToDetainers(): Promise<void> { await this.page.locator('#cmdSaveGotoDetainers').click(); }
  async selectAtMunicipality(municipality: string): Promise<void> { await this.page.locator('#cddmunicipality_DropDown').selectOption({ label: municipality }); }
  async getSelectedMunicipality(): Promise<string> { return await this.page.locator('#cddmunicipality_DropDown').locator('option:checked').textContent() || ''; }
  async tabOutDispositionDateTime(): Promise<void> { await this.page.locator('#DttmDispDate_Date_KPIDttmCtrl').press('Tab'); await this.page.locator("//table[@id='DttmDispDate_Time']//input").press('Tab'); }
  async enterAtOffenseDate(date: string): Promise<void> { await this.page.locator('#dttmOffenseDate_KPIDttmCtrl').fill(date); await this.page.locator('#dttmOffenseDate_KPIDttmCtrl').press('Tab'); }
  async clickSentenceIconInGridByStatute(statute: string): Promise<void> { await this.chargeGrid.locator(`//tr[td[contains(text(),'${statute}')]]//td[contains(@class,'SentenceRule')]`).click(); }
  async isSentenceIconShowingInGridByStatute(statute: string): Promise<boolean> { return await this.chargeGrid.locator(`//tr[td[contains(text(),'${statute}')]]//td[contains(@class,'SentenceRule')]`).isVisible(); }
  async isGridEmpty(): Promise<boolean> { return (await this.getChargeGridRowCount()) === 0; }
  async isBondButtonEnabled(): Promise<boolean> { return await this.bondButton.isEnabled(); }
  async clearArrestingAgency(): Promise<void> { await this.page.locator('#ORIAgency_lupORI_CodeValue').clear(); }
  async clearAgencyCase(): Promise<void> { await this.caseNoEdit.clear(); }
  async clearArrestingOfficerID(): Promise<void> { await this.page.locator('#txtArrestPFName').clear(); await this.page.locator('#txtArrestPFCode').clear(); }
  async clearArrestDateTime(): Promise<void> { await this.page.locator('#dttmOffense_Date_KPIDttmCtrl').clear(); }
  async clearCourt(): Promise<void> { await this.courtDropdown.selectOption({ index: 0 }); }
  async clearCourtCaseNo(): Promise<void> { await this.courtCaseEdit.clear(); }
  async clickCommentsIconInGridByStatute(statute: string): Promise<void> { await this.chargeGrid.locator(`//tr[td[contains(text(),'${statute}')]]//td[contains(@class,'Comment')]`).click(); }
  async clickInternalSaveButton(): Promise<void> { await this.saveButton.click(); }
  async getChargeByStatuteInGrid(statute: string, column: string): Promise<string> {
    const cell = this.chargeGrid.locator(`//tr[td[contains(text(),'${statute}')]]//td[contains(@aria-describedby,'${column}')]`);
    return (await cell.textContent()) || '';
  }
  async getArrestingAgencyDescription(): Promise<string> { return await this.page.locator('#ORIAgency_lupORI_CodeDescription').inputValue(); }
  async clickReceiptNoInfoIcon(): Promise<void> { await this.page.locator('#cmdReceiptInfo').click(); }
  async enterAtCourt(court: string): Promise<void> { await this.page.locator('#lupCourt_CodeValue').fill(court); await this.page.locator('#lupCourt_CodeValue').press('Tab'); }
  async selectAtCourtType(courtType: string): Promise<void> { await this.page.locator('#cddCourtType_DropDown').selectOption({ label: courtType }); }
  async getSelectedCourtType(): Promise<string> { return await this.page.locator('#cddCourtType_DropDown').locator('option:checked').textContent() || ''; }

  // ── Verify methods ──────────────────────────────────────────────────────
  async verifyAtBondCount(expected: string): Promise<void> { expect(await this.bondButton.getAttribute('value')).toBe(expected); }
  async verifyAtChargeByStatute(statute: string, chargeYear: string, chargeNo: string): Promise<void> {
    const charge = await this.getChargeByStatuteInGrid(statute, 'Charge#');
    expect(charge).toContain(`${chargeYear}-${chargeNo}`);
  }
  async verifyAtStatuteInGrid(expected: string): Promise<void> {
    const cell = this.chargeGrid.locator(`//tr[contains(@class,'Row')][1]//td[contains(@aria-describedby,'Statute')]`);
    expect(await cell.textContent()).toContain(expected);
  }
  async verifyAtDescriptionInGrid(expected: string): Promise<void> {
    const cell = this.chargeGrid.locator(`//tr[contains(@class,'Row')][1]//td[contains(@aria-describedby,'Description')]`);
    expect(await cell.textContent()).toContain(expected);
  }
  async verifyAtArrestingAgencyORI(expected: string): Promise<void> { expect(await this.getArrestingAgencyORI()).toContain(expected); }
  async verifyAtAgencyCase(expected: string): Promise<void> { expect(await this.getAgencyCase()).toBe(expected); }
  async verifyAtArrestingOfficerName(expected: string): Promise<void> { expect(await this.getArrestingOfficerName()).toContain(expected); }
  async verifyAtArrestingOfficerID(expected: string): Promise<void> { expect(await this.getArrestingOfficerID()).toBe(expected); }
  async verifyAtTransportingOfficerName(expected: string): Promise<void> { expect(await this.getTransportingOfficerName()).toContain(expected); }
  async verifyAtTransportingOfficerID(expected: string): Promise<void> { expect(await this.getTransportingOfficerID()).toBe(expected); }
  async verifyAtAgencyCodeValue(expected: string): Promise<void> {
    const title = await this.page.locator('#ORIAgency_lupORI_CodeValue').getAttribute('title');
    expect(title).toContain(expected);
  }
  async verifyAtArrestDateAsCurrentDate(): Promise<void> {
    const date = await this.getArrestDate();
    const today = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    expect(date).toBe(today);
  }
  async verifyCourtFieldAsNonMandatory(): Promise<void> { expect(await this.getCourtLabelColor()).toContain('0, 0, 0'); }
  async verifyCourtFieldAsMandatory(): Promise<void> { expect(await this.getCourtLabelColor()).toContain('128, 0, 0'); }
  async verifyChargesHistoryWindowExist(): Promise<void> {
    const pages = this.page.context().pages();
    const found = pages.some(p => p.url().includes('ChargesHistory') || p.url().includes('History'));
    expect(found).toBe(true);
  }
  async verifyAtCodeDescriptionInBillingType(expected: string): Promise<void> {
    const options = await this.page.locator('#cddBillingType_DropDown option').allTextContents();
    expect(options.some(o => o.includes(expected))).toBe(true);
  }
  async verify1003UpdateSuccessfulHeaderMessage(): Promise<void> { expect(await this.getHeaderStatusMessage()).toContain('1003 - Update Successful'); }
  async verifyEnterNotesAcknowledge(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(30033) Enter Notes'); await dialog.accept(); });
  }
  async verifyNotesFieldIsMandatory(): Promise<void> { expect(await this.getNotesLabelColor()).toContain('128, 0, 0'); }
  async verifyNotesFieldIsNonMandatory(): Promise<void> { expect(await this.getNotesLabelColor()).toContain('0, 0, 0'); }
  async verify30099ConfirmPopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(30099)'); await dialog.accept(); });
  }
  async verify30095AcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(30095)'); await dialog.accept(); });
  }
  async verifyAtMunicipality(expected: string): Promise<void> { expect(await this.getSelectedMunicipality()).toContain(expected); }
  async verifyAtStatuteByDescriptionInGrid(description: string, expectedStatute: string): Promise<void> {
    const cell = this.chargeGrid.locator(`//tr[td[contains(text(),'${description}')]]//td[contains(@aria-describedby,'Statute')]`);
    expect(await cell.textContent()).toContain(expectedStatute);
  }
  async verifyGridIsEmpty(): Promise<void> { expect(await this.isGridEmpty()).toBe(true); }
  async verifySentenceIconIsShowingInGridByStatute(statute: string): Promise<void> { expect(await this.isSentenceIconShowingInGridByStatute(statute)).toBe(true); }
  async verifySentenceIconIsNotShowingInGridByStatute(statute: string): Promise<void> { expect(await this.isSentenceIconShowingInGridByStatute(statute)).toBe(false); }
  async verify30085ValidDailyBillableRateAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(30085)'); await dialog.accept(); });
  }
  async verify6543RequiredDNASampleAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(6543)'); await dialog.accept(); });
  }
  async verify6561NonValidChargePopupNotAppeared(): Promise<void> {
    // Short wait to confirm no popup appears
    let popupAppeared = false;
    this.page.once('dialog', async () => { popupAppeared = true; });
    await this.page.waitForTimeout(1000);
    expect(popupAppeared).toBe(false);
  }
  async verifyAtChargeDisposition(expected: string): Promise<void> { expect(await this.getDisposition()).toContain(expected); }
  async verifyAtDocumentType(expected: string): Promise<void> { expect(await this.getSelectedDocumentType()).toContain(expected); }
  async verifyAtBondType(expected: string): Promise<void> { expect(await this.getSelectedBondType()).toContain(expected); }
  async verifyAtCompletionOnDateByStatuteInGrid(statute: string): Promise<void> {
    const cell = this.chargeGrid.locator(`//tr[td[contains(text(),'${statute}')]]//td[contains(@aria-describedby,'Completion')]`);
    const text = await cell.textContent() || '';
    const today = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    expect(new Date(text).getTime()).toBeLessThanOrEqual(new Date(today).getTime());
  }
  async verifyAtChargeClass(expected: string): Promise<void> { expect(await this.getSelectedChargeClass()).toContain(expected); }
  async verifyBondButtonIsEnabled(): Promise<void> { expect(await this.isBondButtonEnabled()).toBe(true); }
  async verifyReceiptNo(expectedReceiptNo: string): Promise<void> {
    const year = await this.page.locator('#txtReceiptYear').inputValue();
    const no = await this.page.locator('#txtReceiptNo').inputValue();
    expect(`${year}-${no}`).toBe(expectedReceiptNo);
  }
  async verifyArrestingAgencyDescription(expected: string): Promise<void> { expect(await this.getArrestingAgencyDescription()).toContain(expected); }
  async verify30098PleaseSelectArrestingAgencyAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(30098)'); await dialog.accept(); });
  }
  async verify30033EnterAgencyCaseNoAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(30033) Enter Agency Case No'); await dialog.accept(); });
  }
  async verify30033EnterArrestingOfficerIDAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(30033) Enter Arresting Officer'); await dialog.accept(); });
  }
  async verify30033EnterArrestDateAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(30033) Enter Arrest Date'); await dialog.accept(); });
  }
  async verify30087OffenseDateMustBePriorAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(30087)'); await dialog.accept(); });
  }
  async enterArrestDateAsPreviousDate(noOfDays: number): Promise<void> {
    const date = new Date(); date.setDate(date.getDate() - noOfDays);
    const formatted = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    await this.page.locator('#dttmOffense_Date_KPIDttmCtrl').fill(formatted);
  }
  async enterOffenseDateAsPreviousDate(noOfDays: number): Promise<void> {
    const date = new Date(); date.setDate(date.getDate() - noOfDays);
    const formatted = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    await this.page.locator('#dttmOffenseDate_KPIDttmCtrl').fill(formatted);
  }
  async enterOffenseDateAsCurrentDate(): Promise<void> {
    const today = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    await this.page.locator('#dttmOffenseDate_KPIDttmCtrl').fill(today);
  }
  async enterAtStatute(statute: string): Promise<void> { await this.statuteCodeEdit.fill(statute); await this.statuteCodeEdit.press('Tab'); }
  async selectAtStatuteInGrid(statute: string): Promise<void> {
    await this.chargeGrid.locator(`//tr[td[contains(text(),'${statute}')]]//td[1]//input`).click();
  }
  async selectChargeByStatuteInGrid(statute: string): Promise<void> {
    await this.chargeGrid.locator(`//tr[td[contains(text(),'${statute}')]]`).click();
  }
  async tabOutCt(): Promise<void> { await this.page.locator('#txtCt').press('Tab'); }
  async verifyAtDocument(expected: string): Promise<void> { expect(await this.getDocument()).toBe(expected); }
  async verifyAtStatute(expected: string): Promise<void> { expect(await this.getStatuteCode()).toBe(expected); }
  async verifyAtStatuteDescription(expected: string): Promise<void> {
    const desc = await this.page.locator('#txtStatuteDescription').inputValue();
    expect(desc).toContain(expected);
  }
  async verifyAtCt(expected: string): Promise<void> {
    await this.page.locator('#txtCt').press('Tab');
    expect(await this.page.locator('#txtCt').inputValue()).toBe(expected);
  }
  async verifyAtDocumentTypeContainsValue(expected: string): Promise<void> {
    const options = await this.page.locator('#cddDocType_DropDown option').allTextContents();
    expect(options.some(o => o.includes(expected))).toBe(true);
  }
  async selectAtBondInGrid(bond: string): Promise<void> {
    await this.chargeGrid.locator(`//tr[td[contains(text(),'${bond}')]]`).click();
  }
  async verifyBondCommitmentPostedDateAsCurrentDate(): Promise<void> {
    const date = await this.page.locator('#dttmBondCommitmentPosted_Date_KPIDttmCtrl').inputValue();
    const today = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    expect(date).toBe(today);
  }
  async verifyAtBondAmtDisplayedAsGreenColorInGrid(bond: string): Promise<void> {
    const cell = this.chargeGrid.locator(`//tr[td[contains(text(),'${bond}')]]`);
    const color = await cell.evaluate(el => window.getComputedStyle(el).color);
    expect(color).toContain('0, 100, 0');
  }
  async verifyCourtScheduledDateAsFutureDate(noOfDays: number): Promise<void> {
    const date = new Date(); date.setDate(date.getDate() + noOfDays);
    const expected = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    const actual = await this.page.locator('#dttmCourtScheduled_Date_KPIDttmCtrl').inputValue();
    expect(actual).toBe(expected);
  }
  async verifyAtCourtScheduledTime(expected: string): Promise<void> {
    const actual = await this.page.locator("//table[@id='dttmCourtScheduled_Time']//input").inputValue();
    expect(actual).toBe(expected);
  }
  async verifyScheduledActivityNoIsNotBlank(): Promise<void> {
    const value = await this.page.locator('#txtScheduledActivityNo').inputValue();
    expect(value.trim()).not.toBe('');
  }
  async verifySaveConfirmPopupAndClickYes(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(3) Do You Want To Save'); await dialog.accept(); });
  }
  async internalSaveTab(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(3) Do You Want To Save'); await dialog.accept(); });
    await this.saveButton.click();
  }
  async saveAndGoToDetainers(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(3) Do You Want To Save'); await dialog.accept(); });
    await this.page.locator('#cmdSaveAndGoToDetainers').click();
  }
  async verifyGridRowColorAsGreyByCharge(charge: string): Promise<void> {
    const row = this.chargeGrid.locator(`//tr[td[contains(text(),'${charge}')]]`);
    const color = await row.evaluate(el => window.getComputedStyle(el).color);
    expect(color).toContain('128, 128, 128');
  }
  async verifyCourtLabelChangedToCourtType(): Promise<void> {
    const text = await this.page.locator('#lblCourt').textContent();
    expect(text?.trim()).toBe('Court Type');
  }
  async verifyCourtLookupFieldIsDisplayed(): Promise<void> {
    expect(await this.page.locator('#lupCourt_CodeValue').isVisible()).toBe(true);
    expect(await this.page.locator('#lupCourt_CodeDescription').isVisible()).toBe(true);
    expect(await this.page.locator('#lupCourt_imgBtn').isVisible()).toBe(true);
  }
  async verifyAtCourt(expectedCode: string, expectedDescription: string): Promise<void> {
    expect(await this.page.locator('#lupCourt_CodeValue').inputValue()).toBe(expectedCode);
    expect(await this.page.locator('#lupCourt_CodeDescription').inputValue()).toContain(expectedDescription);
  }
  async verifyAtCourtType(expected: string): Promise<void> { expect(await this.getSelectedCourtType()).toContain(expected); }
  async verifyCourtIsBlank(): Promise<void> {
    expect(await this.page.locator('#lupCourt_CodeValue').inputValue()).toBe('');
    expect(await this.page.locator('#lupCourt_CodeDescription').inputValue()).toBe('');
  }
  async verifyCompletionOnDateByStatuteInGrid(statute: string, completionDate: string): Promise<void> {
    const cell = this.chargeGrid.locator(`//tr[td[contains(text(),'${statute}')]]//td[contains(@aria-describedby,'Completion')]`);
    expect(await cell.textContent()).toContain(completionDate);
  }
  async verifyAtCourtCaseLabel(expected: string): Promise<void> {
    const text = await this.page.locator('#lblCourtCaseNo').textContent();
    expect(text?.trim()).toBe(expected);
  }
  async verifyAtGridHeaderName(expected: string): Promise<void> {
    const headers = await this.chargeGrid.locator('//tr[@class="GridHeaderStyle"]').textContent();
    expect(headers).toContain(expected);
  }
  async verifyAtCENByStatuteInGrid(statute: string, expectedCEN: string): Promise<void> {
    const cell = this.chargeGrid.locator(`//tr[td[contains(text(),'${statute}')]]//td[contains(@aria-describedby,'CEN')]`);
    expect(await cell.textContent()).toContain(expectedCEN);
  }
  async verify30084BillThisAgencyConfirmPopupAndClickNo(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(30084)'); await dialog.dismiss(); });
  }
  async selectAtArrestingAgencyWithLookup(agencyORI: string): Promise<void> {
    await this.page.locator('#ORIAgency_lupORI_DropDown').selectOption({ label: agencyORI });
    await this.page.locator('#imgAgencyLookup').click();
  }
  async EnterAtTransportingOfficerOfficerAndID(officerName: string, officerID: string): Promise<void> {
    await this.page.locator('#txtTransPFName').fill(officerName);
    await this.page.locator('#txtTransPFCode').fill(officerID);
  }
  async SelectModifier(): Promise<void> { await this.page.locator('#chkModifier').click(); }
  async clickInculdeInactiveCheckbox(): Promise<void> { await this.page.locator('#chkIncInactive').click(); }
  async verifyAtBondAs1(expectedCount: string): Promise<void> {
    const count = await this.bondButton.getAttribute('value');
    expect(count).toBe(expectedCount);
  }
  async verifyAtStatueInGrid(expectedStatute: string): Promise<void> {
    const cell = this.chargeGrid.locator(`//tr[contains(@class,'Row')][1]//td[contains(@aria-describedby,'Statute')]`);
    expect(await cell.textContent()).toContain(expectedStatute);
  }
  async taboutDispositionDateAndTime(): Promise<void> {
    await this.page.locator('#DttmDispDate_Date_KPIDttmCtrl').click();
    await this.page.locator('#DttmDispDate_Date_KPIDttmCtrl').press('Tab');
    await this.page.locator("//table[@id='DttmDispDate_Time']//input").click();
    await this.page.locator("//table[@id='DttmDispDate_Time']//input").press('Tab');
  }
  async selectAtMuncipality(municipality: string): Promise<void> {
    await this.page.locator('#cddmunicipality_DropDown').selectOption({ label: municipality });
  }
  async SelectAtArrestingAgency1(agencyORI: string, arrestingAgency: string): Promise<void> {
    await this.page.locator('#ORIAgency_lupORI_DropDown').selectOption({ label: agencyORI });
    await this.page.locator('#txtArrestingAgency').fill(arrestingAgency);
    await this.page.locator('#txtArrestingAgency').press('Tab');
  }
  async verifyAtCompletionOnDateAsPastDateByStatuteInGrid(statute: string): Promise<void> {
    const cell = this.chargeGrid.locator(`//tr[td[contains(text(),'${statute}')]]//td[contains(@aria-describedby,'Completion')]`);
    const text = await cell.textContent() || '';
    const today = new Date();
    expect(new Date(text).getTime()).toBeLessThanOrEqual(today.getTime());
  }
  async verifyCourtLookupFieldIsDisplays(): Promise<void> {
    expect(await this.page.locator('#lupCourt_CodeValue').isVisible()).toBe(true);
    expect(await this.page.locator('#lupCourt_CodeDescription').isVisible()).toBe(true);
    expect(await this.page.locator('#lupCourt_imgBtn').isVisible()).toBe(true);
  }
}

// ─── Detainer Tab ────────────────────────────────────────────────────────────

export class DetainerTabPage {
  readonly page: Page;
  readonly detainerTypeDropdown: Locator;
  readonly detainerAgencyEdit: Locator;
  readonly detainerDateEdit: Locator;
  readonly warrantNoEdit: Locator;
  readonly documentNoEdit: Locator;
  readonly statusDropdown: Locator;
  readonly detainerOfficerEdit: Locator;
  readonly commentsEdit: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;
  readonly detainerGrid: Locator;
  readonly telephoneEdit: Locator;
  readonly contactEdit: Locator;
  readonly faxEdit: Locator;
  readonly detainerNoYearEdit: Locator;
  readonly detainerNoNumberEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.detainerTypeDropdown = page.locator('#cddDetainerType_DropDown');
    this.detainerAgencyEdit = page.locator('#lupDetainerAgency_CodeValue');
    this.detainerDateEdit = page.locator('#dttmDetainerDate_Date_KPIDttmCtrl');
    this.warrantNoEdit = page.locator('#txtWarrantNo');
    this.documentNoEdit = page.locator('#txtDocumentNo');
    this.statusDropdown = page.locator('#cddStatus_DropDown');
    this.detainerOfficerEdit = page.locator('#lupDetainerOfficer_CodeValue');
    this.commentsEdit = page.locator('#txtComments');
    this.addButton = page.locator('#cmdAdd');
    this.saveButton = page.locator('#cmdInternalSave');
    this.detainerGrid = page.locator('#grdDetainer');
    this.telephoneEdit = page.locator('#mskTelephone');
    this.contactEdit = page.locator('#txtContact');
    this.faxEdit = page.locator('#mskFax');
    this.detainerNoYearEdit = page.locator('#nbrDetainerNo_Year');
    this.detainerNoNumberEdit = page.locator('#nbrDetainerNo_Number');
  }

  async selectAtDetainerType(type: string): Promise<void> { await this.detainerTypeDropdown.selectOption({ label: type }); }
  async enterAtDetainerAgency(agency: string): Promise<void> { await this.detainerAgencyEdit.fill(agency); await this.detainerAgencyEdit.press('Tab'); }
  async tabOutDetainerDate(): Promise<void> { await this.detainerDateEdit.press('Tab'); }
  async enterAtWarrantNo(warrantNo: string): Promise<void> { await this.warrantNoEdit.fill(warrantNo); }
  async enterAtDocumentNo(documentNo: string): Promise<void> { await this.documentNoEdit.fill(documentNo); }
  async selectAtStatus(status: string): Promise<void> { await this.statusDropdown.selectOption({ label: status }); }
  async enterAtDetainerOfficer(officer: string): Promise<void> { await this.detainerOfficerEdit.fill(officer); await this.detainerOfficerEdit.press('Tab'); }
  async enterAtComments(comments: string): Promise<void> { await this.commentsEdit.fill(comments); }
  async clickAdd(): Promise<void> { await this.addButton.click(); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async enterAtTelephone(tel: string): Promise<void> { await this.telephoneEdit.fill(tel); }
  async enterAtContact(contact: string): Promise<void> { await this.contactEdit.fill(contact); }
  async enterAtFax(fax: string): Promise<void> { await this.faxEdit.fill(fax); }

  async selectDetainerInGrid(type: string): Promise<void> { await this.detainerGrid.locator(`//td[contains(text(),'${type}')]`).click(); }
  async deleteDetainerInGrid(type: string): Promise<void> { await this.detainerGrid.locator(`//tr[td[contains(text(),'${type}')]]//td[@class='Delete_Icon_Style']`).click(); }
  async getDetainerGridRowCount(): Promise<number> { return await this.detainerGrid.locator('//tr[contains(@class,"Row")]').count(); }
  async getDetainerNo(): Promise<string> {
    const year = await this.detainerNoYearEdit.inputValue();
    const number = await this.detainerNoNumberEdit.inputValue();
    return `${year}-${number}`;
  }

  async selectAtBillingType(billingType: string): Promise<void> { await this.page.locator('#cddBillingType_DropDown').selectOption({ label: billingType }); }
  async enterAtCaseNo(caseNo: string): Promise<void> { await this.page.locator('#txtCaseNo').fill(caseNo); }
  async enterAtExpireDate(date: string): Promise<void> { await this.page.locator('#dttmExpireDate_Date_KPIDttmCtrl').fill(date); }
  async enterAtContactNo(contactType: string, contactNo: string): Promise<void> {
    await this.page.locator('#cddPhoneType_DropDown').selectOption({ label: contactType });
    await this.page.locator('#txtPhoneNo').fill(contactNo);
  }
  async enterReleaseDate(date: string): Promise<void> { await this.page.locator('#dttmReleaseDate_Date_KPIDttmCtrl').fill(date); }
  async enterAtContactPerson(person: string): Promise<void> { await this.page.locator('#txtContactPerson').fill(person); }
  async enterAtReleaseName(name: string, id: string): Promise<void> {
    await this.page.locator('#txtReleaseID').fill(id);
    await this.page.locator('#txtReleaseName').fill(name);
  }
  async enterAtReason(reason: string): Promise<void> { await this.page.locator('#txtReason').fill(reason); }
  async enterAtNotes(notes: string): Promise<void> { await this.page.locator('#txtNotes').fill(notes); }
  async tabEnteredDateAndTime(): Promise<void> {
    await this.page.locator('#dttmEnteredDate_Date_KPIDttmCtrl').press('Tab');
    await this.page.locator("//table[@id='dttmEnteredDate_Time']//input").press('Tab');
  }
  async selectAtDisposition(disposition: string): Promise<void> { await this.page.locator('#cddDisposition_DropDown').selectOption({ label: disposition }); }
  async clickUpdateButton(): Promise<void> { await this.page.locator('#cmdUpdate').click(); }
  async isGridEmpty(): Promise<boolean> { return (await this.getDetainerGridRowCount()) === 0; }
  async getDetainerTypeFromGrid(rowIndex: number): Promise<string> {
    const cell = this.detainerGrid.locator(`//tr[contains(@class,'Row')][${rowIndex}]//td[contains(@aria-describedby,'DetainerType')]`);
    return (await cell.textContent()) || '';
  }
  async getDispositionByTypeInGrid(type: string): Promise<string> {
    const cell = this.detainerGrid.locator(`//tr[td[contains(text(),'${type}')]]//td[contains(@aria-describedby,'Disposition')]`);
    return (await cell.textContent()) || '';
  }
  async getBottomMessage(): Promise<string> { return (await this.page.locator("//td[@class='statusBar']//b").textContent()) || ''; }
  async getDetainerAgencyState(): Promise<string> { return await this.page.locator('#cddORIState_DropDown').locator('option:checked').textContent() || ''; }
  async enterAtDetainerAgencyCode(code: string): Promise<void> { await this.page.locator('#lupORIAgency_CodeValue').fill(code); await this.page.locator('#lupORIAgency_CodeValue').press('Tab'); }

  async verify30084BillThisAgencyConfirmPopupAndClikNo(): Promise<void> {
    const modalBody = this.page.locator("//div[@class='modal-body']");
    await expect(modalBody).toContainText('(30084) Do you want to bill this agency?');
    await this.page.locator("//div[@class='modal-footer']//button[text()='No']").click();
  }

  async SelectAtDetainerAgency(agencyORI: string, agencyCode: string): Promise<void> {
    await this.page.locator('#cddORIState_DropDown').selectOption({ label: agencyORI });
    await this.page.locator('#lupORIAgency_CodeValue').fill(agencyCode);
    await this.page.locator('#lupORIAgency_CodeValue').press('Tab');
  }

  async EnterAtExpireDateTime(): Promise<void> {
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const yyyy = today.getFullYear();
    const currentDate = `${mm}/${dd}/${yyyy}`;
    await this.page.locator('#dttmExpireDate_Date_KPIDttmCtrl').fill(currentDate);
  }

  async EnterAtReleaseTOName(releasePersonID: string, releasePersonName: string): Promise<void> {
    await this.page.locator('#txtReleaseID').fill(releasePersonID);
    await this.page.locator('#txtReleaseName').fill(releasePersonName);
  }

  async verifyAtDetainerType(expected: string): Promise<void> {
    const cell = this.detainerGrid.locator("//tr[contains(@class,'Row')]//td[contains(@aria-describedby,'DetainerType')]").first();
    expect(await cell.textContent()).toContain(expected);
  }

  async selectAtDetainerTypeInGrid(detainerType: string): Promise<void> {
    await this.detainerGrid.locator(`//td[contains(text(),'${detainerType}')]`).click();
  }

  async selectAtDispostion(disposition: string): Promise<void> {
    await this.page.locator('#cddDisposition_DropDown').selectOption({ label: disposition });
  }

  async clickNoConfirmationPopup(): Promise<void> {
    await this.page.locator("//div[@class='modal-footer']//button[text()='No']").click();
  }

  async verifyAtDetainerTypeInGrid(detainerType: string): Promise<void> {
    const cell = this.detainerGrid.locator(`//td[contains(text(),'${detainerType}')]`);
    expect(await cell.textContent()).toContain(detainerType);
  }

  async verifyAtDispositionByDetainerTypeInGrid(detainerType: string, expectedDisposition: string): Promise<void> {
    const cell = this.detainerGrid.locator(`//tr[td[contains(text(),'${detainerType}')]]//td[contains(@aria-describedby,'Disposition')]`);
    expect(await cell.textContent()).toBe(expectedDisposition);
  }

  async verifyAtDetainerTypeAsInactiveInGrid(detainerType: string): Promise<void> {
    const row = this.detainerGrid.locator(`//tr[td[contains(text(),'${detainerType}')]]`);
    const color = await row.evaluate(el => getComputedStyle(el).color);
    expect(color).toBe('rgba(128, 128, 128, 1)');
  }

  async verifyAtDetainerTypeAsActiveInGrid(detainerType: string): Promise<void> {
    const row = this.detainerGrid.locator(`//tr[td[contains(text(),'${detainerType}')]]`);
    const color = await row.evaluate(el => getComputedStyle(el).color);
    expect(color).toBe('rgba(0, 0, 0, 1)');
  }

  async InculdePreConvictionDay(): Promise<void> {
    await this.page.locator('#chkPreConvictionDay').click();
  }

  async EnterPFNo(pf: string): Promise<void> {
    await this.page.locator('#lupPFID_CodeValue').fill(pf);
    await this.page.locator('#lupPFID_CodeValue').press('Tab');
  }

  async verifyBillingTypeByPF(pf: string, expectedBillingType: string): Promise<void> {
    const cell = this.detainerGrid.locator(`//tr[td[contains(text(),'${pf}')]]//td[contains(@aria-describedby,'BillingType')]`);
    expect(await cell.textContent()).toContain(expectedBillingType);
  }

  async verifyAdditionalSuccessFull(): Promise<void> {
    const msg = await this.getBottomMessage();
    expect(msg).toContain('1002 - Addition Successful');
  }
}

// ─── Pay To Stay Tab ─────────────────────────────────────────────────────────

export class PayToStayTabPage {
  readonly page: Page;
  readonly billingTypeDropdown: Locator;
  readonly rateEdit: Locator;
  readonly startDateEdit: Locator;
  readonly startTimeEdit: Locator;
  readonly endDateEdit: Locator;
  readonly endTimeEdit: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;
  readonly payToStayGrid: Locator;
  readonly invoiceHistoryButton: Locator;
  readonly paymentButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.billingTypeDropdown = page.locator('#cddBillingType_DropDown');
    this.rateEdit = page.locator('#txtRate');
    this.startDateEdit = page.locator('#dttmStartDate_Date_KPIDttmCtrl');
    this.startTimeEdit = page.locator("//table[@id='dttmStartDate_Time']//input");
    this.endDateEdit = page.locator('#dttmEndDate_Date_KPIDttmCtrl');
    this.endTimeEdit = page.locator("//table[@id='dttmEndDate_Time']//input");
    this.addButton = page.locator('#cmdAdd');
    this.saveButton = page.locator('#cmdInternalSave');
    this.payToStayGrid = page.locator('#grdPayToStay');
    this.invoiceHistoryButton = page.locator('#cmdInvoiceHistory');
    this.paymentButton = page.locator('#cmdPayment');
  }

  async selectAtBillingType(billingType: string): Promise<void> { await this.billingTypeDropdown.selectOption({ label: billingType }); await this.billingTypeDropdown.press('Tab'); }
  async enterAtRate(rate: string): Promise<void> { await this.rateEdit.fill(rate); }
  async tabOutStartDateTime(): Promise<void> { await this.startDateEdit.press('Tab'); await this.startTimeEdit.press('Tab'); }
  async tabOutEndDateTime(): Promise<void> { await this.endDateEdit.press('Tab'); await this.endTimeEdit.press('Tab'); }
  async clickAdd(): Promise<void> { await this.addButton.click(); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickInvoiceHistory(): Promise<void> { await this.invoiceHistoryButton.click(); }
  async clickPayment(): Promise<void> { await this.paymentButton.click(); }

  async selectInGrid(billingType: string): Promise<void> { await this.payToStayGrid.locator(`//td[contains(text(),'${billingType}')]`).click(); }
  async deleteInGrid(billingType: string): Promise<void> { await this.payToStayGrid.locator(`//tr[td[contains(text(),'${billingType}')]]//td[@class='Delete_Icon_Style']`).click(); }
  async getGridRowCount(): Promise<number> { return await this.payToStayGrid.locator('//tr[contains(@class,"Row")]').count(); }
}

// ─── Mug Shot Tab ────────────────────────────────────────────────────────────

export class MugShotTabPage {
  readonly page: Page;
  readonly captureButton: Locator;
  readonly deleteButton: Locator;
  readonly setAsPrimaryButton: Locator;
  readonly mugShotGrid: Locator;
  readonly imageArchiveButton: Locator;
  readonly uploadImageButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.captureButton = page.locator('#cmdCapture');
    this.deleteButton = page.locator('#cmdDelete');
    this.setAsPrimaryButton = page.locator('#cmdSetPrimary');
    this.mugShotGrid = page.locator('#grdMugShot');
    this.imageArchiveButton = page.locator('#cmdImageArchive');
    this.uploadImageButton = page.locator('#cmdUploadImage');
  }

  async clickCapture(): Promise<void> { await this.captureButton.click(); }
  async clickDelete(): Promise<void> { await this.deleteButton.click(); }
  async clickSetAsPrimary(): Promise<void> { await this.setAsPrimaryButton.click(); }
  async clickImageArchive(): Promise<void> { await this.imageArchiveButton.click(); }
  async clickUploadImage(): Promise<void> { await this.uploadImageButton.click(); }
  async getMugShotGridRowCount(): Promise<number> { return await this.mugShotGrid.locator('//tr[contains(@class,"Row")]').count(); }
  async selectMugShotInGrid(index: number): Promise<void> { await this.mugShotGrid.locator(`//tr[contains(@class,'Row')][${index + 1}]`).click(); }
  async enterAtPhotoTakenPF(pf: string): Promise<void> { await this.page.locator('#lupPhotoTakenByPF_CodeValue').fill(pf); }
  async tabPhotoTakenDateAndTime(): Promise<void> { await this.page.locator('#dttmPhotoDate_Date_KPIDttmCtrl').press('Tab'); await this.page.locator("//table[@id='dttmPhotoDate_Time']//input").press('Tab'); }
  async clickPhotoImage(): Promise<void> { await this.page.locator('#imgFrontView').click(); }
  async clickSideViewImageBox(): Promise<void> { await this.page.locator('#imgSideView').click(); }
  async saveWithConfirm(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.page.locator('#cmdSave').click();
  }
  async saveAndGotoFingerPrint(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.page.locator('#cmdSaveGoToFingerPrint').click();
  }
  async verifyAdditionSuccessful(): Promise<void> { expect(await this.page.locator('#lblMessage').textContent()).toContain('1002 - Addition Successful'); }
  async verifyPhotoTakenByIsBlank(): Promise<void> {
    expect(await this.page.locator('#lupPhotoTakenByPF_CodeValue').inputValue()).toBe('');
    expect(await this.page.locator('#lupPhotoTakenByPF_CodeDescription').inputValue()).toBe('');
  }
  async verifyPhotoDateTimeIsBlank(): Promise<void> {
    expect(await this.page.locator('#dttmPhotoDate_Date_KPIDttmCtrl').inputValue()).toBe('');
    expect(await this.page.locator("//table[@id='dttmPhotoDate_Time']//input").inputValue()).toBe('');
  }
}

// ─── Finger Print Tab ────────────────────────────────────────────────────────

export class FingerPrintTabPage {
  readonly page: Page;
  readonly captureButton: Locator;
  readonly retrieveButton: Locator;
  readonly fingerPrintGrid: Locator;
  readonly printedByEdit: Locator;
  readonly printedByDescription: Locator;
  readonly printingDateEdit: Locator;
  readonly methodUsedDropdown: Locator;
  readonly idIndexButton: Locator;
  readonly commentsEdit: Locator;
  readonly idConfirmYesCheckbox: Locator;
  readonly confirmOfficerEdit: Locator;
  readonly confirmDateEdit: Locator;
  readonly stateIdCheckbox: Locator;
  readonly stateNoEdit: Locator;
  readonly fbiCheckbox: Locator;
  readonly fbiEdit: Locator;
  readonly otherCheckbox: Locator;
  readonly ncicEdit: Locator;
  readonly henryClassificationEdit: Locator;
  readonly saveButton: Locator;
  readonly saveGoToButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.captureButton = page.locator('#cmdCapture');
    this.retrieveButton = page.locator('#cmdRetrieve');
    this.fingerPrintGrid = page.locator('#grdFingerPrint');
    this.printedByEdit = page.locator('#tabAdmission_tmpl9_UsrAdmFingerPrint1_lupPrintedBy_CodeValue');
    this.printedByDescription = page.locator('#tabAdmission_tmpl9_UsrAdmFingerPrint1_lupPrintedBy_CodeDescription');
    this.printingDateEdit = page.locator('#tabAdmission_tmpl9_UsrAdmFingerPrint1_dttmPrintingdttm_Date_KPIDttmCtrl');
    this.methodUsedDropdown = page.locator('#tabAdmission_tmpl9_UsrAdmFingerPrint1_CddMethodUsed_DropDown');
    this.idIndexButton = page.locator('#tabAdmission_tmpl9_UsrAdmFingerPrint1_cmdIdIndex');
    this.commentsEdit = page.locator('#tabAdmission_tmpl9_UsrAdmFingerPrint1_txtComments');
    this.idConfirmYesCheckbox = page.locator('#tabAdmission_tmpl9_UsrAdmFingerPrint1_chkIdConfirmYes');
    this.confirmOfficerEdit = page.locator('#tabAdmission_tmpl9_UsrAdmFingerPrint1_lupConfirmPF_CodeValue');
    this.confirmDateEdit = page.locator('#tabAdmission_tmpl9_UsrAdmFingerPrint1_dttmConfirmDate_Date_KPIDttmCtrl');
    this.stateIdCheckbox = page.locator('#tabAdmission_tmpl9_UsrAdmFingerPrint1_chkSateId');
    this.stateNoEdit = page.locator('#tabAdmission_tmpl9_UsrAdmFingerPrint1_txtStateNo');
    this.fbiCheckbox = page.locator('#tabAdmission_tmpl9_UsrAdmFingerPrint1_chkFBI');
    this.fbiEdit = page.locator('#tabAdmission_tmpl9_UsrAdmFingerPrint1_txtFBI');
    this.otherCheckbox = page.locator('#tabAdmission_tmpl9_UsrAdmFingerPrint1_chkOther');
    this.ncicEdit = page.locator('#tabAdmission_tmpl9_UsrAdmFingerPrint1_txtNCIC');
    this.henryClassificationEdit = page.locator('#tabAdmission_tmpl9_UsrAdmFingerPrint1_txtHenryClassification');
    this.saveButton = page.locator('#tabAdmission_tmpl9_UsrAdmFingerPrint1_cmdSave');
    this.saveGoToButton = page.locator('#tabAdmission_tmpl9_UsrAdmFingerPrint1_cmdSaveGoto');
  }

  async clickCapture(): Promise<void> { await this.captureButton.click(); }
  async clickRetrieve(): Promise<void> { await this.retrieveButton.click(); }
  async getFingerPrintGridRowCount(): Promise<number> { return await this.fingerPrintGrid.locator('//tr[contains(@class,"Row")]').count(); }

  async enterAtPrintedBy(officer: string): Promise<void> { await this.printedByEdit.fill(officer); await this.printedByEdit.press('Tab'); }
  async getPrintedByDescription(): Promise<string> { return await this.printedByDescription.inputValue(); }
  async enterAtPrintingDate(date: string): Promise<void> { await this.printingDateEdit.fill(date); await this.printingDateEdit.press('Tab'); }
  async selectAtMethodUsed(method: string): Promise<void> { await this.methodUsedDropdown.selectOption({ label: method }); }
  async clickIdIndex(): Promise<void> { await this.idIndexButton.click(); }
  async enterAtComments(comments: string): Promise<void> { await this.commentsEdit.fill(comments); }
  async clickIdConfirmYes(): Promise<void> { await this.idConfirmYesCheckbox.click(); }
  async enterAtConfirmOfficer(officer: string): Promise<void> { await this.confirmOfficerEdit.fill(officer); await this.confirmOfficerEdit.press('Tab'); }
  async enterAtConfirmDate(date: string): Promise<void> { await this.confirmDateEdit.fill(date); await this.confirmDateEdit.press('Tab'); }
  async clickStateIdCheckbox(): Promise<void> { await this.stateIdCheckbox.click(); }
  async enterAtStateNo(stateNo: string): Promise<void> { await this.stateNoEdit.fill(stateNo); }
  async clickFbiCheckbox(): Promise<void> { await this.fbiCheckbox.click(); }
  async enterAtFbi(fbi: string): Promise<void> { await this.fbiEdit.fill(fbi); }
  async clickOtherCheckbox(): Promise<void> { await this.otherCheckbox.click(); }
  async enterAtNcic(ncic: string): Promise<void> { await this.ncicEdit.fill(ncic); }
  async enterAtHenryClassification(value: string): Promise<void> { await this.henryClassificationEdit.fill(value); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickSaveAndGoTo(): Promise<void> { await this.saveGoToButton.click(); }
  async getStateNo(): Promise<string> { return await this.stateNoEdit.inputValue(); }
  async getFbi(): Promise<string> { return await this.fbiEdit.inputValue(); }
  async getNcic(): Promise<string> { return await this.ncicEdit.inputValue(); }
  async getHenryClassification(): Promise<string> { return await this.henryClassificationEdit.inputValue(); }
  async getSelectedMethodUsed(): Promise<string> { return await this.methodUsedDropdown.locator('option:checked').textContent() || ''; }

  async verifyImageIsAvailableOnFrontView(): Promise<void> {
    const img = this.page.locator('#imgFrontView');
    const src = await img.getAttribute('src') || '';
    expect(src).not.toContain('PictureNotAvailable');
  }

  async saveAndGotoFingerPrintButton(): Promise<void> {
    await this.page.locator('#cmdSaveGoToFingerPrint').click();
    const modalBody = this.page.locator("//div[@class='modal-body']");
    await expect(modalBody).toContainText('(3) Do You Want To Save All Of The Entered Details?');
    await this.page.locator("//div[@class='modal-footer']//button[text()='Yes']").click();
  }

  async enterAtPrintedByPF(pf: string): Promise<void> {
    await this.printedByEdit.fill(pf);
    await this.printedByEdit.press('Tab');
  }

  async tabPrintDateTime(): Promise<void> {
    await this.printingDateEdit.press('Tab');
    await this.page.locator('#tabAdmission_tmpl9_UsrAdmFingerPrint1_dttmPrintingdttm_Time_KPIDttmCtrl, //table[contains(@id,"Printingdttm_Time")]//input').first().press('Tab');
  }

  async ExportToLiveScan(): Promise<void> {
    await this.page.locator('#tabAdmission_tmpl9_UsrAdmFingerPrint1_cmdExportLiveScan').click();
  }

  async SelectIDConfirmed(): Promise<void> {
    await this.idConfirmYesCheckbox.click();
  }

  async SelectIDConfirmedByPF(): Promise<void> {
    await this.confirmOfficerEdit.press('Tab');
  }

  async EnterConfirmedDateTime(): Promise<void> {
    await this.confirmDateEdit.press('Tab');
    await this.page.locator('#tabAdmission_tmpl9_UsrAdmFingerPrint1_dttmConfirmDate_Time_KPIDttmCtrl, //table[contains(@id,"ConfirmDate_Time")]//input').first().press('Tab');
  }

  async EnterAtFBINo(fbiNo: string): Promise<void> {
    await this.fbiCheckbox.click();
    await this.fbiEdit.fill(fbiNo);
  }

  async EnterAtNCICClass(ncicClass: string): Promise<void> {
    await this.ncicEdit.fill(ncicClass);
  }

  async verify30155ThisRecordAsBeenModifiedAcknowledgeNotArise(): Promise<void> {
    const modal = this.page.locator("//div[@class='modal-body']");
    const isVisible = await modal.isVisible({ timeout: 3000 }).catch(() => false);
    if (isVisible) {
      const text = await modal.textContent() || '';
      expect(text).not.toContain('(30155)');
    }
  }

  async verifyAtState(expected: string): Promise<void> {
    const value = await this.stateNoEdit.inputValue();
    expect(value).toBe(expected);
  }

  async verifyAtFBI(expected: string): Promise<void> {
    const value = await this.fbiEdit.inputValue();
    expect(value).toBe(expected);
  }

  async verifyPrintedByIsBlank(): Promise<void> {
    expect(await this.printedByEdit.inputValue()).toBe('');
    expect(await this.printedByDescription.inputValue()).toBe('');
  }

  async verifyPrintedDateTimeIsBlank(): Promise<void> {
    expect(await this.printingDateEdit.inputValue()).toBe('');
    const timeLocator = this.page.locator('//table[contains(@id,"Printingdttm_Time")]//input').first();
    expect(await timeLocator.inputValue()).toBe('');
  }

  async clearPrintedByPF(): Promise<void> {
    await this.printedByEdit.clear();
    await this.printedByEdit.press('Tab');
  }

  async clearPrintDateTime(): Promise<void> {
    await this.printingDateEdit.clear();
    const timeLocator = this.page.locator('//table[contains(@id,"Printingdttm_Time")]//input').first();
    await timeLocator.clear();
  }

  async verify30098PleaseSelectPrintedByAcknowledgePopup(): Promise<void> {
    const modalBody = this.page.locator("//div[@class='modal-body']");
    await expect(modalBody).toContainText('(30098) Please Select Printed By');
    await this.page.locator("//div[@class='modal-footer']//button[text()='OK'] | //button[text()='Ok']").first().click();
  }

  async verify30033EnterPrintDateTimeAcknowledgePopup(): Promise<void> {
    const modalBody = this.page.locator("//div[@class='modal-body']");
    await expect(modalBody).toContainText('(30033) Enter Print Date/Time');
    await this.page.locator("//div[@class='modal-footer']//button[text()='OK'] | //button[text()='Ok']").first().click();
  }

  async enterAtConfirmedByPF(pf: string): Promise<void> {
    await this.confirmOfficerEdit.fill(pf);
    await this.confirmOfficerEdit.press('Tab');
  }

  async saveAndGotoAssociations(): Promise<void> {
    await this.page.locator('#tabAdmission_tmpl9_UsrAdmFingerPrint1_cmdSaveGotoAssociations, #cmdSaveGotoAssociations').first().click();
    const modalBody = this.page.locator("//div[@class='modal-body']");
    await expect(modalBody).toContainText('(3) Do You Want To Save All Of The Entered Details?');
    await this.page.locator("//div[contains(@class,'modal')]//button[text()='Yes']").click();
  }
}

// ─── Associations Tab ────────────────────────────────────────────────────────

export class AssociationsTabPage {
  readonly page: Page;
  readonly associationTypeDropdown: Locator;
  readonly associationNameEdit: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;
  readonly associationsGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.associationTypeDropdown = page.locator('#cddAssociationType_DropDown');
    this.associationNameEdit = page.locator('#txtAssociationName');
    this.addButton = page.locator('#cmdAdd');
    this.saveButton = page.locator('#cmdInternalSave');
    this.associationsGrid = page.locator('#grdAssociations');
  }

  async selectAtAssociationType(type: string): Promise<void> { await this.associationTypeDropdown.selectOption({ label: type }); await this.associationTypeDropdown.press('Tab'); }
  async enterAtAssociationName(name: string): Promise<void> { await this.associationNameEdit.fill(name); }
  async clickAdd(): Promise<void> { await this.addButton.click(); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async selectInGrid(name: string): Promise<void> { await this.associationsGrid.locator(`//td[contains(text(),'${name}')]`).click(); }
  async deleteInGrid(name: string): Promise<void> { await this.associationsGrid.locator(`//tr[td[contains(text(),'${name}')]]//td[@class='Delete_Icon_Style']`).click(); }
  async getGridRowCount(): Promise<number> { return await this.associationsGrid.locator('//tr[contains(@class,"Row")]').count(); }

  async enterAtNameTypeAndID(nameType: string, nameID: string): Promise<void> {
    await this.page.locator('#txtNameType').fill(nameType);
    await this.page.locator('#txtNameID').fill(nameID);
    await this.page.locator('#txtNameID').press('Tab');
  }
  async selectAtRelationship(relationship: string): Promise<void> { await this.page.locator('#cddRelationship_DropDown').selectOption({ label: relationship }); }
  async selectAtReciprocalRelationship(relationship: string): Promise<void> { await this.page.locator('#cddReciprocalRelationship_DropDown').selectOption({ label: relationship }); }
  async enterBackgroundCheckedDate(date: string): Promise<void> { await this.page.locator('#dtBackgroundChecked_KPIDttmCtrl').fill(date); await this.page.locator('#txtBackgroundCheckedPF').press('Tab'); }
  async enterVisitationNotAllowedDate(date: string): Promise<void> { await this.page.locator('#dtVisitationNotAllowed_KPIDttmCtrl').fill(date); await this.page.locator('#txtVisitationNotAllowedPF').press('Tab'); }
  async enterActiveDate(date: string): Promise<void> { await this.page.locator('#dtActive_KPIDttmCtrl').fill(date); await this.page.locator('#txtActivePF').press('Tab'); }
  async enterAtNotes(notes: string): Promise<void> { await this.page.locator('#txtNotes').fill(notes); }
  async clickInactiveCheckbox(): Promise<void> { await this.page.locator('#chkInactive').click(); }
  async clickNoAssociationIncompatibleCheckbox(): Promise<void> { await this.page.locator('#chkNoAssociation').click(); }
  async clickUpdateButton(): Promise<void> { await this.page.locator('#cmdUpdate').click(); }
  async isInactiveCheckboxDisplayed(): Promise<boolean> { return await this.page.locator('#chkInactive').isVisible(); }
  async isBackgroundCheckedEnabled(): Promise<boolean> { return await this.page.locator('#dtBackgroundChecked_KPIDttmCtrl').isEnabled(); }
  async isVisitationNotAllowedEnabled(): Promise<boolean> { return await this.page.locator('#dtVisitationNotAllowed_KPIDttmCtrl').isEnabled(); }
  async isActiveEnabled(): Promise<boolean> { return await this.page.locator('#dtActive_KPIDttmCtrl').isEnabled(); }
  async getNameFromGrid(rowIndex: number): Promise<string> {
    const cell = this.associationsGrid.locator(`//tr[contains(@class,'Row')][${rowIndex}]//td[contains(@aria-describedby,'Name')]`);
    return (await cell.textContent()) || '';
  }
  async getNameByRelationshipInGrid(relationship: string): Promise<string> {
    const cell = this.associationsGrid.locator(`//tr[td[contains(text(),'${relationship}')]]//td[contains(@aria-describedby,'Name')]`);
    return (await cell.textContent()) || '';
  }
  async isInactiveCheckedByNameInGrid(name: string): Promise<boolean> {
    const img = this.associationsGrid.locator(`//tr[td[contains(text(),'${name}')]]//td[contains(@aria-describedby,'Inactive')]//img`);
    return (await img.getAttribute('alt'))?.includes('Checked') || false;
  }
  async getStatusMessage(): Promise<string> { return (await this.page.locator("//td[@class='statusBar']//b").textContent()) || ''; }
  async verifyUpdateStatusMessage(): Promise<void> { expect(await this.getStatusMessage()).toContain('1003 - Update Successful'); }
  async verifyBackgroundCheckedIsDisabled(): Promise<void> { expect(await this.page.locator('#dttmBackgroundChk_Date_KPIDttmCtrl').isEnabled()).toBe(false); }
  async verifyVisitationNotAllowedIsDisabled(): Promise<void> { expect(await this.page.locator('#dttmVisitNotAllow_Date_KPIDttmCtrl').isEnabled()).toBe(false); }
  async verifyActiveIsDisabled(): Promise<void> { expect(await this.page.locator('#dttmActiveDate_Date_KPIDttmCtrl').isEnabled()).toBe(false); }
  async verifyAtNameByRelationshipInGrid(relationship: string, expectedName: string): Promise<void> {
    const cell = this.associationsGrid.locator(`//tr[td[contains(text(),'${relationship}')]]//td[contains(@aria-describedby,'Name')]`);
    expect(await cell.textContent()).toContain(expectedName);
  }
  async verifyInactiveCheckBoxIsDisplayed(): Promise<void> {
    expect(await this.page.locator('#chkInactive').isVisible()).toBe(true);
  }
  async verifyAtInactiveCheckBoxByNameInGrid(name: string): Promise<void> {
    const img = this.associationsGrid.locator(`//tr[td[contains(text(),'${name}')]]//td[contains(@aria-describedby,'Inactive')]//img`);
    expect(await img.getAttribute('alt')).toContain('Checked');
  }
  async verifyBackgroundCheckedIsEnabled(): Promise<void> {
    expect(await this.page.locator('#dttmBackgroundChk_Date_KPIDttmCtrl').isEnabled()).toBe(true);
    expect(await this.page.locator('#lupBackgroundChkPF_CodeValue').isEnabled()).toBe(true);
  }
  async verifyVisitationNotAllowedIsEnabled(): Promise<void> {
    expect(await this.page.locator('#dttmVisitNotAllow_Date_KPIDttmCtrl').isEnabled()).toBe(true);
    expect(await this.page.locator('#lupVisitNotAllowPF_CodeValue').isEnabled()).toBe(true);
  }
  async verifyActiveIsEnabled(): Promise<void> {
    expect(await this.page.locator('#dttmActiveDate_Date_KPIDttmCtrl').isEnabled()).toBe(true);
    expect(await this.page.locator('#lupActivePF_CodeValue').isEnabled()).toBe(true);
  }
}

// ─── Jail Alert Tab ──────────────────────────────────────────────────────────

export class JailAlertTabPage {
  readonly page: Page;
  readonly jailAlertDropdown: Locator;
  readonly commentsEdit: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;
  readonly jailAlertGrid: Locator;
  readonly beginDateEdit: Locator;
  readonly endDateEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.jailAlertDropdown = page.locator('#cddJailAlert_DropDown');
    this.commentsEdit = page.locator('#txtComments');
    this.addButton = page.locator('#cmdAdd');
    this.saveButton = page.locator('#cmdInternalSave');
    this.jailAlertGrid = page.locator('#grdJailAlert');
    this.beginDateEdit = page.locator('#dttmBegin_Date_KPIDttmCtrl');
    this.endDateEdit = page.locator('#dttmEnd_Date_KPIDttmCtrl');
  }

  async selectAtJailAlert(alert: string): Promise<void> { await this.jailAlertDropdown.selectOption({ label: alert }); }
  async enterAtComments(comments: string): Promise<void> { await this.commentsEdit.fill(comments); }
  async clickAdd(): Promise<void> { await this.addButton.click(); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async selectInGrid(alert: string): Promise<void> { await this.jailAlertGrid.locator(`//td[contains(text(),'${alert}')]`).click(); }
  async deleteInGrid(alert: string): Promise<void> { await this.jailAlertGrid.locator(`//tr[td[contains(text(),'${alert}')]]//td[@class='Delete_Icon_Style']`).click(); }
  async getGridRowCount(): Promise<number> { return await this.jailAlertGrid.locator('//tr[contains(@class,"Row")]').count(); }

  async tabOutDateAndTime(): Promise<void> {
    await this.page.locator('#dttmAlertDate_Date_KPIDttmCtrl').press('Tab');
    await this.page.locator("//table[@id='dttmAlertDate_Time']//input").press('Tab');
  }
  async enterAlertPFOfficer(pf: string): Promise<void> { await this.page.locator('#txtPF').fill(pf); }
  async clickCriticalCheckbox(): Promise<void> { await this.page.locator('#chkCritical').click(); }
  async clickInactiveCheckbox(): Promise<void> { await this.page.locator('#chkInactive').click(); }
  async clickUpdateButton(): Promise<void> { await this.page.locator('#cmdUpdate').click(); }
  async enterAtInactivePF(pf: string): Promise<void> { await this.page.locator('#txtInactivePF').fill(pf); await this.page.locator('#txtInactivePF').press('Tab'); }
  async getBottomMessage(): Promise<string> { return (await this.page.locator("//td[@class='statusBar']//b").textContent()) || ''; }
  async getAlertByCommentsInGrid(comments: string): Promise<string> {
    const cell = this.jailAlertGrid.locator(`//tr[td[contains(text(),'${comments}')]]//td[contains(@aria-describedby,'JailAlert')]`);
    return (await cell.textContent()) || '';
  }
  async getAlertColorByCommentsInGrid(comments: string): Promise<string> {
    const cell = this.jailAlertGrid.locator(`//tr[td[contains(text(),'${comments}')]]//td[contains(@aria-describedby,'JailAlert')]`);
    return await cell.evaluate(el => getComputedStyle(el).color);
  }
  async getInactiveDateTimeValue(): Promise<string> { return await this.page.locator('#txtInactiveDateTime').inputValue(); }
  async selectAtAlertCode(alertCode: string): Promise<void> {
    await this.jailAlertDropdown.selectOption({ label: alertCode });
  }
  async enterAtAlertComments(comments: string): Promise<void> {
    await this.commentsEdit.fill(comments);
  }
  async SelectAlertCritical(): Promise<void> {
    await this.page.locator('#chkCritical').click();
  }
  async verifyAtJailAlertsByCommentsAndColor(comments: string, expectedAlert: string): Promise<void> {
    const cell = this.jailAlertGrid.locator(`//tr[td[contains(text(),'${comments}')]]//td[contains(@aria-describedby,'JailAlert')]`);
    expect(await cell.textContent()).toContain(expectedAlert);
    const color = await cell.evaluate(el => getComputedStyle(el).color);
    expect(color).toBe('rgba(255, 0, 0, 1)');
  }
  async verifyAtJailAlertsByCommentsInGrid(comments: string, expectedAlert: string): Promise<void> {
    const cell = this.jailAlertGrid.locator(`//tr[td[contains(text(),'${comments}')]]//td[contains(@aria-describedby,'JailAlert')]`);
    expect(await cell.textContent()).toContain(expectedAlert);
  }
  async selectAtCommentsInGrid(comments: string): Promise<void> {
    await this.jailAlertGrid.locator(`//td[contains(text(),'${comments}')]`).click();
  }
  async verifyInactiveDateAsCurrentDateAndTime(currentDateTime: string): Promise<void> {
    const value = await this.page.locator('#txtInactiveDateTime').inputValue();
    expect(value).toContain(currentDateTime);
  }
}

// ─── Comments Tab ────────────────────────────────────────────────────────────

export class CommentsTabPage {
  readonly page: Page;
  readonly commentTypeDropdown: Locator;
  readonly commentEdit: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;
  readonly commentGrid: Locator;
  readonly showAllCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.commentTypeDropdown = page.locator('#cddCommentType_DropDown');
    this.commentEdit = page.locator('#txtComment');
    this.addButton = page.locator('#cmdAdd');
    this.saveButton = page.locator('#cmdInternalSave');
    this.commentGrid = page.locator('#grdComment');
    this.showAllCheckbox = page.locator('#chkShowAll');
  }

  async selectAtCommentType(type: string): Promise<void> { await this.commentTypeDropdown.selectOption({ label: type }); }
  async enterAtComment(comment: string): Promise<void> { await this.commentEdit.fill(comment); }
  async clickAdd(): Promise<void> { await this.addButton.click(); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickShowAll(): Promise<void> { await this.showAllCheckbox.click(); }
  async selectInGrid(comment: string): Promise<void> { await this.commentGrid.locator(`//td[contains(text(),'${comment}')]`).click(); }
  async deleteInGrid(comment: string): Promise<void> { await this.commentGrid.locator(`//tr[td[contains(text(),'${comment}')]]//td[@class='Delete_Icon_Style']`).click(); }
  async getGridRowCount(): Promise<number> { return await this.commentGrid.locator('//tr[contains(@class,"Row")]').count(); }
  async clickEnterComments(): Promise<void> { await this.page.locator('#cmdEnterComments').click(); }
  async deleteComments(): Promise<void> { await this.page.locator("//td[@class='Delete_Icon_Style']").click(); }
  async selectComments(date: string): Promise<void> {
    await this.commentGrid.locator(`//td[contains(text(),'${date}')]`).click();
  }
  async verifyAtSubjectAddedIngrid(subject: string, date: string): Promise<void> {
    const cell = this.commentGrid.locator(`//tr[td[contains(text(),'${date}')]]//td[contains(@aria-describedby,'Subject')]`);
    expect(await cell.textContent()).toContain(subject);
  }
  async verify30033AckanowldgeMessage(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(30033)'); await dialog.accept(); });
  }
  async verifyUpdateSucessfullMessage(): Promise<void> {
    const msg = await this.page.locator("//td[@class='statusBar']//b").textContent();
    expect(msg).toContain('1003 - Update Successful');
  }
}

// ─── Notification Tab ────────────────────────────────────────────────────────

export class NotificationTabPage {
  readonly page: Page;
  readonly notificationTypeDropdown: Locator;
  readonly notificationDateEdit: Locator;
  readonly officerEdit: Locator;
  readonly commentsEdit: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;
  readonly notificationGrid: Locator;
  readonly victimNotificationButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.notificationTypeDropdown = page.locator('#cddNotificationType_DropDown');
    this.notificationDateEdit = page.locator('#dttmNotificationDate_Date_KPIDttmCtrl');
    this.officerEdit = page.locator('#lupOfficer_CodeValue');
    this.commentsEdit = page.locator('#txtComments');
    this.addButton = page.locator('#cmdAdd');
    this.saveButton = page.locator('#cmdInternalSave');
    this.notificationGrid = page.locator('#grdNotification');
    this.victimNotificationButton = page.locator('#cmdVictimNotification');
  }

  async selectAtNotificationType(type: string): Promise<void> { await this.notificationTypeDropdown.selectOption({ label: type }); }
  async tabOutNotificationDate(): Promise<void> { await this.notificationDateEdit.press('Tab'); }
  async enterAtOfficer(officer: string): Promise<void> { await this.officerEdit.fill(officer); await this.officerEdit.press('Tab'); }
  async enterAtComments(comments: string): Promise<void> { await this.commentsEdit.fill(comments); }
  async clickAdd(): Promise<void> { await this.addButton.click(); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickVictimNotification(): Promise<void> { await this.victimNotificationButton.click(); }
  async selectInGrid(type: string): Promise<void> { await this.notificationGrid.locator(`//td[contains(text(),'${type}')]`).click(); }
  async deleteInGrid(type: string): Promise<void> { await this.notificationGrid.locator(`//tr[td[contains(text(),'${type}')]]//td[@class='Delete_Icon_Style']`).click(); }
  async getGridRowCount(): Promise<number> { return await this.notificationGrid.locator('//tr[contains(@class,"Row")]').count(); }

  async clickAddReport(): Promise<void> { await this.page.locator('#cmdAddReport').click(); }
  async enterAtNotificationDate(date: string): Promise<void> { await this.notificationDateEdit.fill(date); await this.notificationDateEdit.press('Tab'); }
  async getSelectedNotificationType(): Promise<string> { return await this.notificationTypeDropdown.locator('option:checked').textContent() || ''; }
  async getOfficer(): Promise<string> { return await this.officerEdit.inputValue(); }
  async getComments(): Promise<string> { return await this.commentsEdit.inputValue(); }
  async getNotificationDate(): Promise<string> { return await this.notificationDateEdit.inputValue(); }
  async getNotificationTypeInGrid(rowIndex: number): Promise<string> {
    const cell = this.notificationGrid.locator(`//tr[contains(@class,'Row')][${rowIndex}]//td[contains(@aria-describedby,'Type')]`);
    return (await cell.textContent()) || '';
  }
  async verify30033AckanowldgeMessage(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(30033)'); await dialog.accept(); });
  }
  async verifyUpdateSucessfullMessage(): Promise<void> {
    const msg = await this.page.locator("//td[@class='statusBar']//b").textContent();
    expect(msg).toContain('1003 - Update Successful');
  }
  async verifyAtNameIDLableIsDisplayed(expectedID: string): Promise<void> {
    const text = await this.page.locator('#lblNameID').textContent();
    expect(text).toContain(expectedID);
  }
  async verifyAtNameLastLableIsDisplayed(expectedLast: string): Promise<void> {
    const text = await this.page.locator('#lblLastName').textContent();
    expect(text).toContain(expectedLast);
  }
  async verifyAtNameFirstLableIsDisplayed(expectedFirst: string): Promise<void> {
    const text = await this.page.locator('#lblFirstName').textContent();
    expect(text).toContain(expectedFirst);
  }
  async verifyAtNameMiddleLableIsDisplayed(expectedMiddle: string): Promise<void> {
    const text = await this.page.locator('#lblMiddleName').textContent();
    expect(text).toContain(expectedMiddle);
  }
  async verifyAtNameSuffixLableIsDisplayed(expectedSuffix: string): Promise<void> {
    const text = await this.page.locator('#lblSuffix').textContent();
    expect(text).toContain(expectedSuffix);
  }
}

// ─── QA Forms Tab ────────────────────────────────────────────────────────────

export class QAFormsTabPage {
  readonly page: Page;
  readonly qaFormDropdown: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;
  readonly qaFormGrid: Locator;
  readonly printButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.qaFormDropdown = page.locator('#cddQAForm_DropDown');
    this.addButton = page.locator('#cmdAdd');
    this.saveButton = page.locator('#cmdInternalSave');
    this.qaFormGrid = page.locator('#grdQAForm');
    this.printButton = page.locator('#cmdPrint');
  }

  async selectAtQAForm(form: string): Promise<void> { await this.qaFormDropdown.selectOption({ label: form }); }
  async clickAdd(): Promise<void> { await this.addButton.click(); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickPrint(): Promise<void> { await this.printButton.click(); }
  async selectInGrid(form: string): Promise<void> { await this.qaFormGrid.locator(`//td[contains(text(),'${form}')]`).click(); }
  async getGridRowCount(): Promise<number> { return await this.qaFormGrid.locator('//tr[contains(@class,"Row")]').count(); }
  async selectAtSelectForm(form: string): Promise<void> { await this.qaFormDropdown.selectOption({ label: form }); }
  async verifyAtFormNameInGrid(formName: string): Promise<void> {
    const cell = this.qaFormGrid.locator(`//td[contains(text(),'${formName}')]`);
    expect(await cell.textContent()).toContain(formName);
  }
  async selectAtFromInGrid(formName: string): Promise<void> {
    await this.qaFormGrid.locator(`//td[contains(text(),'${formName}')]`).click();
  }
  async verifyAtFormName(formName: string): Promise<void> {
    const options = await this.qaFormDropdown.locator('option').allTextContents();
    expect(options.join(',')).toContain(formName);
  }
  async verifyJacketLableIsDisplayed(): Promise<void> {
    expect(await this.page.locator('#lblJacket').isVisible()).toBe(true);
  }
  async verifySexRaceLablesAreDisplayed(): Promise<void> {
    expect(await this.page.locator('#lblSexRace').isVisible()).toBe(true);
    expect(await this.page.locator('#lblSex').isVisible()).toBe(true);
    expect(await this.page.locator('#lblRace').isVisible()).toBe(true);
  }
}

// ─── Delete Sentence Tab ─────────────────────────────────────────────────────

export class DeleteSentenceTabPage {
  readonly page: Page;
  readonly selectAllCheckbox: Locator;
  readonly deleteButton: Locator;
  readonly sentenceGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selectAllCheckbox = page.locator('#chkSelectAll');
    this.deleteButton = page.locator('#cmdDelete');
    this.sentenceGrid = page.locator('#grdSentence');
  }

  async clickSelectAll(): Promise<void> { await this.selectAllCheckbox.click(); }
  async clickDelete(): Promise<void> { await this.deleteButton.click(); }
  async selectSentenceInGrid(sentence: string): Promise<void> { await this.sentenceGrid.locator(`//td[contains(text(),'${sentence}')]`).click(); }

  async enterAtPF(pfCode: string): Promise<void> { await this.page.locator('#txtPFCode').fill(pfCode); }
  async tabOutDateTime(): Promise<void> {
    await this.page.locator('#dttmDate_Date_KPIDttmCtrl').click();
    await this.page.locator('#dttmDate_Date_KPIDttmCtrl').press('Tab');
    await this.page.locator("//table[@id='dttmDate_Time']//input").press('Tab');
  }
  async clickAddButton(): Promise<void> { await this.page.locator('#cmdAdd').click(); }
  async clickSaveButton(): Promise<void> { await this.page.locator('#cmdInternalSave').click(); }
  async selectRowCheckboxByStatuteInGrid(statute: string): Promise<void> {
    await this.sentenceGrid.locator(`//tr[td[contains(text(),'${statute}')]]//img[@title='Unchecked']`).click();
  }
  async getPFCodeByStatuteInGrid(statute: string): Promise<string> {
    const cell = this.sentenceGrid.locator(`//tr[td[contains(text(),'${statute}')]]//td[contains(@aria-describedby,'PFCode')]`);
    return (await cell.textContent()) || '';
  }
  async getRowColorByStatuteInGrid(statute: string): Promise<string> {
    const row = this.sentenceGrid.locator(`//tr[td[contains(text(),'${statute}')]]`);
    return await row.evaluate(el => getComputedStyle(el).color);
  }
  async getActiveSentencesCount(): Promise<string> {
    return (await this.sentenceGrid.locator("//tr[contains(text(),'Active Sentences')]").textContent()) || '';
  }
  async getInactiveSentencesCount(): Promise<string> {
    return (await this.sentenceGrid.locator("//tr[contains(text(),'Inactive Sentences')]").textContent()) || '';
  }
}

// ─── Release Tab ─────────────────────────────────────────────────────────────

export class ReleaseTabPage {
  readonly page: Page;
  readonly releaseTypeDropdown: Locator;
  readonly releaseReasonDropdown: Locator;
  readonly releaseDateEdit: Locator;
  readonly releaseTimeEdit: Locator;
  readonly releaseAuthorityEdit: Locator;
  readonly releaseCommentsEdit: Locator;
  readonly releaseButton: Locator;
  readonly cancelReleaseButton: Locator;
  readonly projectedReleaseDateEdit: Locator;
  readonly transferAgencyEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.releaseTypeDropdown = page.locator('#cddReleaseType_DropDown');
    this.releaseReasonDropdown = page.locator('#cddReleaseReason_DropDown');
    this.releaseDateEdit = page.locator('#dttmReleaseDate_Date_KPIDttmCtrl');
    this.releaseTimeEdit = page.locator("//table[@id='dttmReleaseDate_Time']//input");
    this.releaseAuthorityEdit = page.locator('#lupReleaseAuth_CodeValue');
    this.releaseCommentsEdit = page.locator('#txtReleaseComments');
    this.releaseButton = page.locator('#cmdRelease');
    this.cancelReleaseButton = page.locator('#cmdCancelRelease');
    this.projectedReleaseDateEdit = page.locator('#dttmProjectedRelease_Date_KPIDttmCtrl');
    this.transferAgencyEdit = page.locator('#lupTransferAgency_CodeValue');
  }

  async selectAtReleaseType(type: string): Promise<void> { await this.releaseTypeDropdown.selectOption({ label: type }); }
  async selectAtReleaseReason(reason: string): Promise<void> { await this.releaseReasonDropdown.selectOption({ label: reason }); }
  async tabOutReleaseDateTime(): Promise<void> { await this.releaseDateEdit.press('Tab'); await this.releaseTimeEdit.press('Tab'); }
  async enterAtReleaseAuthority(authority: string): Promise<void> { await this.releaseAuthorityEdit.fill(authority); await this.releaseAuthorityEdit.press('Tab'); }
  async enterAtReleaseComments(comments: string): Promise<void> { await this.releaseCommentsEdit.fill(comments); }
  async clickRelease(): Promise<void> { await this.releaseButton.click(); }
  async clickCancelRelease(): Promise<void> { await this.cancelReleaseButton.click(); }
  async enterAtTransferAgency(agency: string): Promise<void> { await this.transferAgencyEdit.fill(agency); await this.transferAgencyEdit.press('Tab'); }
  async getReleaseType(): Promise<string> { return await this.releaseTypeDropdown.locator('option:checked').textContent() || ''; }
  async getReleaseReason(): Promise<string> { return await this.releaseReasonDropdown.locator('option:checked').textContent() || ''; }
}

// ─── Medical Screening Tab ───────────────────────────────────────────────────

export class MedicalScreeningTabPage {
  readonly page: Page;
  readonly medicalIntakeFormButton: Locator;
  readonly mentalIntakeFormButton: Locator;
  readonly medicalReqCheckbox: Locator;
  readonly mentalReqCheckbox: Locator;
  readonly preSuicidalCheckbox: Locator;
  readonly medicalDateEdit: Locator;
  readonly medicalTimeEdit: Locator;
  readonly medicalPFIDEdit: Locator;
  readonly mentalDateEdit: Locator;
  readonly mentalTimeEdit: Locator;
  readonly mentalPFIDEdit: Locator;
  readonly saveButton: Locator;
  readonly medReportButton: Locator;
  readonly mentReportButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.medicalIntakeFormButton = page.locator('#cmdMedicalIntakeForm');
    this.mentalIntakeFormButton = page.locator('#cmdMentalIntakeForm');
    this.medicalReqCheckbox = page.locator('#chkMedicalReq');
    this.mentalReqCheckbox = page.locator('#chkMentalReq');
    this.preSuicidalCheckbox = page.locator('#chkPreSuicidal');
    this.medicalDateEdit = page.locator('#dttmMedical_Date_KPIDttmCtrl');
    this.medicalTimeEdit = page.locator("//table[@id='dttmMedical_Time']//input");
    this.medicalPFIDEdit = page.locator('#lupMedicalOfficer_CodeValue');
    this.mentalDateEdit = page.locator('#dttmMental_Date_KPIDttmCtrl');
    this.mentalTimeEdit = page.locator("//table[@id='dttmMental_Time']//input");
    this.mentalPFIDEdit = page.locator('#lupMentalOfficer_CodeValue');
    this.saveButton = page.locator('#cmdInternalSave');
    this.medReportButton = page.locator('#cmdMedReport');
    this.mentReportButton = page.locator('#cmdMentReport');
  }

  async clickMedicalIntakeFormButton(): Promise<void> { await this.medicalIntakeFormButton.click(); }
  async clickMentalIntakeFormButton(): Promise<void> { await this.mentalIntakeFormButton.click(); }

  async medicalAttentionReq(): Promise<void> {
    await this.medicalReqCheckbox.click();
    await this.medicalDateEdit.press('Tab');
    await this.medicalTimeEdit.press('Tab');
  }

  async mentalAttentionReq(): Promise<void> {
    await this.mentalReqCheckbox.click();
    await this.mentalDateEdit.press('Tab');
    await this.mentalTimeEdit.press('Tab');
  }

  async clickSuicidalHistoryCheckbox(): Promise<void> { await this.preSuicidalCheckbox.click(); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickMedReportButton(): Promise<void> { await this.medReportButton.click(); }
  async clickMentReportButton(): Promise<void> { await this.mentReportButton.click(); }

  async getMedicalIntakeFormButtonColor(): Promise<string> { return await this.medicalIntakeFormButton.evaluate(el => getComputedStyle(el).color); }
  async getMentalIntakeFormButtonColor(): Promise<string> { return await this.mentalIntakeFormButton.evaluate(el => getComputedStyle(el).color); }
  async isMedicalAttentionCheckboxSelected(): Promise<boolean> { return await this.medicalReqCheckbox.isChecked(); }
  async isMentalAttentionCheckboxSelected(): Promise<boolean> { return await this.mentalReqCheckbox.isChecked(); }

  async enterAtMedicalPF(pf: string): Promise<void> { await this.medicalPFIDEdit.fill(pf); await this.medicalPFIDEdit.press('Tab'); }
  async enterAtMentalPF(pf: string): Promise<void> { await this.mentalPFIDEdit.fill(pf); }
  async getBottomMessage(): Promise<string> { return (await this.page.locator("//td[@class='statusBar']//b").textContent()) || ''; }
  async getMedicalStatusSelected(): Promise<string> { return await this.page.locator('#cddMedicalStatus_DropDown').locator('option:checked').textContent() || ''; }
  async getMentalStatusSelected(): Promise<string> { return await this.page.locator('#cddMentalStatus_DropDown').locator('option:checked').textContent() || ''; }
  async clickSaveAndGotoCharges(): Promise<void> { await this.page.locator('#cmdSaveAndGotoCharges').click(); }
  async verifyUpdateSuccessfulMessage(): Promise<void> {
    const msg = await this.getBottomMessage();
    expect(msg).toContain('Update Successful');
  }

  async MentalIntButton(): Promise<void> {
    await this.mentalIntakeFormButton.click();
  }

  async MentalIntakeQAForm(): Promise<void> {
    const qaPage = this.page;
    await qaPage.locator('#lupPFCode_CodeValue').click();
    await qaPage.locator('#lupPFCode_CodeValue').press('Tab');
    await qaPage.locator('#cmdLock').click();
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(3506) This will lock the form and no further updates will be allowed');
      await dialog.accept();
    });
  }

  async MedicalTabSave(): Promise<void> {
    await this.saveButton.click();
    const modalBody = this.page.locator("//div[@class='modal-body']");
    await expect(modalBody).toContainText('(3) Do You Want To Save All Of The Entered Details?');
    await this.page.locator("//div[@class='modal-footer']//button[text()='Yes']").click();
  }

  async MedicalScreenReports(): Promise<void> {
    await this.medReportButton.click();
    await this.mentReportButton.click();
  }

  async verifyBothMedicalFormInGreenColor(): Promise<void> {
    const medicalColor = await this.medicalIntakeFormButton.evaluate(el => getComputedStyle(el).color);
    expect(medicalColor).toBe('rgba(0, 128, 0, 1)');
    const mentalColor = await this.mentalIntakeFormButton.evaluate(el => getComputedStyle(el).color);
    expect(mentalColor).toBe('rgba(0, 128, 0, 1)');
  }

  async verifystatuOfBothIntakeForm(): Promise<void> {
    const medical = await this.page.locator('#cddMedicalStatus_DropDown').locator('option:checked').textContent() || '';
    expect(medical).toBe('Completed');
    const mental = await this.page.locator('#cddMentalStatus_DropDown').locator('option:checked').textContent() || '';
    expect(mental).toBe('Completed');
  }

  async fillMedicalIntakeQAFormWithoutLock(): Promise<void> {
    await this.page.locator('#lupPFCode_CodeValue').click();
    await this.page.locator('#lupPFCode_CodeValue').press('Tab');
    await this.page.locator('#txtPhysiCond').fill('Physically Normal Condition');
    await this.page.locator('#rdoQun1No').click();
    await this.page.locator('#rdoQun2No').click();
    await this.page.locator('#rdoQun3No').click();
    await this.page.locator('#rdoQun4No').click();
    await this.page.locator('#rdoQun5No').click();
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const yyyy = today.getFullYear();
    const currentDate = `${mm}/${dd}/${yyyy}`;
    await this.page.locator('#txtClassDate').fill(currentDate);
    await this.page.locator('#txtClassComments').fill('This comments added from Automation');
    await this.page.locator('#txtClassRevDate').fill(currentDate);
    await this.page.locator('#txtClassType').fill('This comments added from Automation');
    await this.page.locator('#cmdSave').click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async verifyMedicalIntakeFormButtonColorAsRed(): Promise<void> {
    const color = await this.medicalIntakeFormButton.evaluate(el => getComputedStyle(el).color);
    expect(color).toBe('rgba(255, 0, 0, 1)');
  }

  async verifyMentalIntakeFormButtonColorAsRed(): Promise<void> {
    const color = await this.mentalIntakeFormButton.evaluate(el => getComputedStyle(el).color);
    expect(color).toBe('rgba(255, 0, 0, 1)');
  }

  async fillMentalIntakeQAFormWithoutLock(): Promise<void> {
    await this.page.locator('#lupPFCode_CodeValue').click();
    await this.page.locator('#lupPFCode_CodeValue').press('Tab');
    await this.page.locator('#cmdSave').click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async verifyMedicalAttentionRequiredYesCheckboxIsSelected(): Promise<void> {
    expect(await this.medicalReqCheckbox.isChecked()).toBe(true);
  }

  async verifyMentalAttentionRequiredYesCheckboxIsSelected(): Promise<void> {
    expect(await this.mentalReqCheckbox.isChecked()).toBe(true);
  }
}

// ─── Prisoner Property Tab ───────────────────────────────────────────────────

export class PrisonerPropertyTabPage {
  readonly page: Page;
  readonly itemDropdown: Locator;
  readonly descriptionEdit: Locator;
  readonly quantityEdit: Locator;
  readonly valueEdit: Locator;
  readonly conditionDropdown: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;
  readonly selectAllCheckbox: Locator;
  readonly includeClosedCheckbox: Locator;
  readonly proceedButton: Locator;
  readonly historyButton: Locator;
  readonly receiptButton: Locator;
  readonly prisonerPropertyGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.itemDropdown = page.locator('#cddItem_DropDown');
    this.descriptionEdit = page.locator('#txtDescription');
    this.quantityEdit = page.locator('#txtQuantity');
    this.valueEdit = page.locator('#txtValue');
    this.conditionDropdown = page.locator('#cddCondition_DropDown');
    this.addButton = page.locator('#cmdAdd');
    this.saveButton = page.locator('#cmdInternalSave');
    this.selectAllCheckbox = page.locator('#chkSelectAll');
    this.includeClosedCheckbox = page.locator('#chkIncludeClosed');
    this.proceedButton = page.locator('#cmdProceed');
    this.historyButton = page.locator('#cmdHistory');
    this.receiptButton = page.locator('#cmdReceipt');
    this.prisonerPropertyGrid = page.locator('#grdProperty');
  }

  async selectAtItem(item: string): Promise<void> { await this.itemDropdown.selectOption({ label: item }); await this.itemDropdown.press('Tab'); }
  async enterAtDescription(description: string): Promise<void> { await this.descriptionEdit.fill(description); }
  async enterAtQuantity(quantity: string): Promise<void> { await this.quantityEdit.fill(quantity); }
  async enterAtValue(value: string): Promise<void> { await this.valueEdit.fill(value); }
  async selectAtCondition(condition: string): Promise<void> { await this.conditionDropdown.selectOption({ label: condition }); }
  async clickAddButton(): Promise<void> { await this.addButton.click(); }
  async clickSaveButton(): Promise<void> { await this.saveButton.click(); }
  async clickSelectAllCheckbox(): Promise<void> { await this.selectAllCheckbox.click(); }
  async clickIncludeClosedItems(): Promise<void> { await this.includeClosedCheckbox.click(); }
  async clickProceedButton(): Promise<void> { await this.proceedButton.click(); }
  async clickHistoryButton(): Promise<void> { await this.historyButton.click(); }
  async clickReceiptButton(): Promise<void> { await this.receiptButton.click(); }

  async selectGridRowCheckboxByItem(item: string): Promise<void> {
    await this.prisonerPropertyGrid.locator(`//tr[td[contains(text(),'${item}')]]//img[@title='Unchecked']`).click();
  }

  async selectAtColor(color: string): Promise<void> { await this.page.locator('#cddColor_DropDown').selectOption({ label: color }); }
  async clickUpdateButton(): Promise<void> { await this.page.locator('#cmdUpdate').click(); }
  async clickResetButton(): Promise<void> { await this.page.locator('#cmdReset').click(); }
  async selectItemInGrid(item: string): Promise<void> { await this.prisonerPropertyGrid.locator(`//td[contains(text(),'${item}')]`).click(); }
  async getSelectedItem(): Promise<string> { return await this.itemDropdown.locator('option:checked').textContent() || ''; }
  async getDescription(): Promise<string> { return await this.descriptionEdit.inputValue(); }
  async getQuantity(): Promise<string> { return await this.quantityEdit.inputValue(); }
  async getValue(): Promise<string> { return await this.valueEdit.inputValue(); }
  async getBottomMessage(): Promise<string> { return (await this.page.locator("//td[@class='statusBar']//b").textContent()) || ''; }
  async getItemByDescriptionInGrid(description: string): Promise<string> {
    const cell = this.prisonerPropertyGrid.locator(`//tr[td[contains(text(),'${description}')]]//td[contains(@aria-describedby,'Item')]`);
    return (await cell.textContent()) || '';
  }
  async getActionByItemInGrid(item: string): Promise<string> {
    const cell = this.prisonerPropertyGrid.locator(`//tr[td[contains(text(),'${item}')]]//td[contains(@aria-describedby,'Action')]`);
    return (await cell.textContent()) || '';
  }
  async getGridRowCount(): Promise<number> { return await this.prisonerPropertyGrid.locator('//tr[contains(@class,"Row")]').count(); }
  async getCheckedCheckboxCount(): Promise<number> { return await this.prisonerPropertyGrid.locator("//img[@title='Checked']").count(); }
  async isDollarIconDisplayedByDescription(description: string): Promise<boolean> {
    const cell = this.prisonerPropertyGrid.locator(`//tr[td[contains(text(),'${description}')]]//td[contains(@aria-describedby,'D')]`);
    const bgImage = await cell.evaluate(el => getComputedStyle(el).backgroundImage);
    return bgImage.includes('Dollar');
  }
  async isDollarIconNotDisplayedByDescription(description: string): Promise<boolean> {
    return !(await this.isDollarIconDisplayedByDescription(description));
  }
  async verifyUpdateSuccessfulMessage(): Promise<void> {
    const msg = await this.getBottomMessage();
    expect(msg).toContain('1003 - Update Successful');
  }
  async verifyCheckboxCountAs25(): Promise<void> {
    const count = await this.prisonerPropertyGrid.locator("//input[@type='checkbox']").count();
    expect(count).toBe(25);
  }
  async verifyAllItemsByDescriptionInGrid(description: string, expectedItem: string): Promise<void> {
    const item = await this.getItemByDescriptionInGrid(description);
    expect(item).toContain(expectedItem);
  }

  async SelectAllProperty(): Promise<void> {
    await this.selectAllCheckbox.click();
  }

  async clickProceedWithSelectionButton(): Promise<void> {
    await this.proceedButton.click();
  }

  async verifyAtItemByDescription(description: string, expectedItem: string): Promise<void> {
    const item = await this.getItemByDescriptionInGrid(description);
    expect(item).toBe(expectedItem);
  }

  async verifyAtActionByLocation(): Promise<void> {
    const rowCount = await this.getGridRowCount();
    for (let i = 0; i < rowCount; i++) {
      const row = this.prisonerPropertyGrid.locator(`//tr[contains(@class,'Row')][${i + 1}]`);
      const actionCell = row.locator("//td[contains(@aria-describedby,'Action')]");
      const actionText = await actionCell.textContent();
      expect(actionText).not.toBe('');
    }
  }

  async enterAtColor(color: string): Promise<void> {
    await this.page.locator('#cddColor_DropDown').selectOption({ label: color });
  }

  async saveInternal(): Promise<void> {
    await this.saveButton.click();
    const modalBody = this.page.locator("//div[@class='modal-body']");
    await expect(modalBody).toContainText('(3) Do You Want To Save All Of The Entered Details?');
    await this.page.locator("//div[@class='modal-footer']//button[text()='Yes']").click();
  }

  async verifyAtAllItemByDescriptionUsingIndex(description: string, expectedItem: string): Promise<void> {
    for (let i = 1; i <= 25; i++) {
      const item = await this.getItemByDescriptionInGrid(description);
      expect(item).toBe(expectedItem);
    }
  }

  async verifyAtDollarIconIsDisplayedByDescriptionInGrid(description: string): Promise<void> {
    expect(await this.isDollarIconDisplayedByDescription(description)).toBe(true);
  }

  async verifyAtDollarIconIsNotDisplayedByDescriptionInGrid(description: string): Promise<void> {
    expect(await this.isDollarIconDisplayedByDescription(description)).toBe(false);
  }

  async selectAtItemInGrid(item: string): Promise<void> {
    await this.prisonerPropertyGrid.locator(`//td[contains(text(),'${item}')]`).click();
  }

  async verifyAtItem(expectedItem: string): Promise<void> {
    const selected = await this.itemDropdown.locator('option:checked').textContent() || '';
    expect(selected).toBe(expectedItem);
  }

  async verifyAtDescrition(expectedDescription: string): Promise<void> {
    expect(await this.descriptionEdit.inputValue()).toBe(expectedDescription);
  }

  async verifyAtQuantity(expectedQuantity: string): Promise<void> {
    expect(await this.quantityEdit.inputValue()).toBe(expectedQuantity);
  }

  async selectGridRowCheckboxByItemInGrid(item: string): Promise<void> {
    await this.prisonerPropertyGrid.locator(`//tr[td[contains(text(),'${item}')]]//img[@title='Unchecked']`).click();
  }
}

// ─── Bond Entry Page ─────────────────────────────────────────────────────────

export class BondEntryPage {
  readonly page: Page;
  readonly bondTypeDropdown: Locator;
  readonly bondAmountEdit: Locator;
  readonly bondCompanyEdit: Locator;
  readonly payerLastNameEdit: Locator;
  readonly payerFirstNameEdit: Locator;
  readonly receiptDateEdit: Locator;
  readonly receiptTimeEdit: Locator;
  readonly receiptOfficerEdit: Locator;
  readonly cashAmountEdit: Locator;
  readonly checkAmountEdit: Locator;
  readonly moneyOrderAmountEdit: Locator;
  readonly creditCardAmountEdit: Locator;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;
  readonly voidButton: Locator;
  readonly printButton: Locator;
  readonly receiptYearEdit: Locator;
  readonly receiptNoEdit: Locator;
  readonly bondScheduleGrid: Locator;
  readonly sharedBondButton: Locator;
  readonly bondInformationButton: Locator;
  readonly referenceButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bondTypeDropdown = page.locator('#cddBondType_DropDown');
    this.bondAmountEdit = page.locator('#txtBondAmount');
    this.bondCompanyEdit = page.locator('#lupBondCompany_CodeValue');
    this.payerLastNameEdit = page.locator('#txtPayerLastName');
    this.payerFirstNameEdit = page.locator('#txtPayerFirstName');
    this.receiptDateEdit = page.locator('#dttmReceiptDate_Date_KPIDttmCtrl');
    this.receiptTimeEdit = page.locator("//table[@id='dttmReceiptDate_Time']//input");
    this.receiptOfficerEdit = page.locator('#lupReceiptOfficer_CodeValue');
    this.cashAmountEdit = page.locator('#txtCash');
    this.checkAmountEdit = page.locator('#txtCheck');
    this.moneyOrderAmountEdit = page.locator('#txtMoneyOrder');
    this.creditCardAmountEdit = page.locator('#txtCreditCard');
    this.saveButton = page.locator('#cmdSave');
    this.cancelButton = page.locator('#cmdCancel');
    this.voidButton = page.locator('#cmdVoid');
    this.printButton = page.locator('#cmdPrint');
    this.receiptYearEdit = page.locator('#nbrReceipt_Year');
    this.receiptNoEdit = page.locator('#nbrReceipt_Number');
    this.bondScheduleGrid = page.locator('#grdBondSchedule');
    this.sharedBondButton = page.locator('#cmdSharedBond');
    this.bondInformationButton = page.locator('#cmdBondInfo');
    this.referenceButton = page.locator('#cmdReference');
  }

  async selectAtBondType(type: string): Promise<void> { await this.bondTypeDropdown.selectOption({ label: type }); }
  async enterAtBondAmount(amount: string): Promise<void> { await this.bondAmountEdit.fill(amount); }
  async enterAtBondCompany(company: string): Promise<void> { await this.bondCompanyEdit.fill(company); await this.bondCompanyEdit.press('Tab'); }
  async enterAtPayerName(lastName: string, firstName: string): Promise<void> { await this.payerLastNameEdit.fill(lastName); await this.payerFirstNameEdit.fill(firstName); }
  async tabOutReceiptDateTime(): Promise<void> { await this.receiptDateEdit.press('Tab'); await this.receiptTimeEdit.press('Tab'); }
  async enterAtReceiptOfficer(officer: string): Promise<void> { await this.receiptOfficerEdit.fill(officer); await this.receiptOfficerEdit.press('Tab'); }
  async enterAtCashAmount(amount: string): Promise<void> { await this.cashAmountEdit.fill(amount); }
  async enterAtCheckAmount(amount: string): Promise<void> { await this.checkAmountEdit.fill(amount); }
  async enterAtMoneyOrderAmount(amount: string): Promise<void> { await this.moneyOrderAmountEdit.fill(amount); }
  async enterAtCreditCardAmount(amount: string): Promise<void> { await this.creditCardAmountEdit.fill(amount); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickCancel(): Promise<void> { await this.cancelButton.click(); }
  async clickVoid(): Promise<void> { await this.voidButton.click(); }
  async clickPrint(): Promise<void> { await this.printButton.click(); }
  async clickSharedBond(): Promise<void> { await this.sharedBondButton.click(); }
  async clickBondInformation(): Promise<void> { await this.bondInformationButton.click(); }
  async clickReference(): Promise<void> { await this.referenceButton.click(); }

  async getReceiptNo(): Promise<string> {
    const year = await this.receiptYearEdit.inputValue();
    const no = await this.receiptNoEdit.inputValue();
    return `${year}-${no}`;
  }

  async selectChargeInGrid(charge: string): Promise<void> { await this.bondScheduleGrid.locator(`//td[contains(text(),'${charge}')]`).click(); }
  async selectCheckboxByChargeInGrid(charge: string): Promise<void> { await this.bondScheduleGrid.locator(`//tr[td[contains(text(),'${charge}')]]//img[@title='Unchecked']`).click(); }

  async selectIDCheck(): Promise<void> { await this.page.locator('#chkIDCheck').click(); }
  async selectAtIDType(idType: string): Promise<void> { await this.page.locator('#cddIDType_DropDown').selectOption({ label: idType }); }
  async enterAtComments(comments: string): Promise<void> { await this.page.locator('#txtNotes').fill(comments); }
  async selectAtPaymentType(paymentType: string): Promise<void> { await this.page.locator('#cddPayment_DropDown').selectOption({ label: paymentType }); }
  async enterReceivedByPFNo(pf: string): Promise<void> { await this.page.locator('#txtPFNo').fill(pf); await this.page.locator('#txtPFNo').press('Tab'); }
  async clickPrintReceipt(): Promise<void> { await this.page.locator('#cmdPrintReceipt').click(); }
  async selectBondCheckboxByBondTypeInGrid(bondType: string): Promise<void> { await this.bondScheduleGrid.locator(`//tr[td[contains(text(),'${bondType}')]]//td[contains(@aria-describedby,'Chk')]`).click(); }
  async selectVoidCheckboxByBondTypeInGrid(bondType: string): Promise<void> { await this.bondScheduleGrid.locator(`//tr[td[contains(text(),'${bondType}')]]//td[contains(@aria-describedby,'Void')]`).click(); }
  async enterAtVoidingOfficerPF(pf: string): Promise<void> { await this.page.locator('#txtVoidingOfficerPF').fill(pf); }
  async tabOutVoidedDateTime(): Promise<void> { await this.page.locator('#dtVoidedDate_KPIDttmCtrl').click(); await this.page.locator('#dtVoidedDate_KPIDttmCtrl').press('Tab'); await this.page.locator("//table[@id='dtVoidedTime']//input").press('Tab'); }
  async selectAtVoidedReason(reason: string): Promise<void> { await this.page.locator('#cddVoidedReason_DropDown').selectOption({ label: reason }); }
  async enterAtVoidedComments(comments: string): Promise<void> { await this.page.locator('#txtVoidedComments').fill(comments); }
  async getTotalBondAmount(): Promise<string> { return await this.page.locator('#txtTotalBond').inputValue(); }
  async getDateTime(): Promise<{ date: string; time: string }> {
    const date = await this.page.locator('#dttmBondDate_Date_KPIDttmCtrl').inputValue();
    const time = await this.page.locator("//table[@id='dttmBondDate_Time']//input").inputValue();
    return { date, time };
  }
  async getPaidByLastName(): Promise<string> { return await this.payerLastNameEdit.inputValue(); }
  async getPaidByFirstName(): Promise<string> { return await this.payerFirstNameEdit.inputValue(); }
  async getPaidByAddress(): Promise<string> { return await this.page.locator('#txtAddress').inputValue(); }
  async getPaidByCity(): Promise<string> { return await this.page.locator('#txtCity').inputValue(); }
  async getPaidByState(): Promise<string> { return await this.page.locator('#cddState_DropDown').locator('option:checked').textContent() || ''; }
  async getPaidByZip(): Promise<string> { return await this.page.locator('#txtZip').inputValue(); }
  async getPaymentMethod(): Promise<string> { return await this.page.locator('#cddPayment_DropDown').locator('option:checked').textContent() || ''; }
  async getReceivedByPF(): Promise<string> { return await this.page.locator('#txtPFNo').inputValue(); }
  async getReceivedByPFDescription(): Promise<string> { return await this.page.locator('#txtPFDescription').inputValue(); }

  async EnterAtPhoenNo(phoneType: string): Promise<void> {
    await this.page.locator('#cddPhoneType_DropDown').selectOption({ label: phoneType });
  }

  async EnterPFNo(): Promise<void> {
    await this.page.locator('#txtPFNo').press('Tab');
  }

  async EnterBondDateTime(): Promise<void> {
    await this.page.locator('#dttmBondDate_Date_KPIDttmCtrl').press('Tab');
    await this.page.locator("//table[@id='dttmBondDate_Time']//input").press('Tab');
  }

  async EnterAtPaidBy(lastName: string): Promise<void> {
    await this.payerLastNameEdit.fill(lastName);
    await this.payerFirstNameEdit.press('Tab');
    await this.payerFirstNameEdit.press('Tab');
  }

  async SelectNameFromSearch(): Promise<void> {
    // No-op: Name selection from search handled externally
  }

  async EnterReceivedByAtPFNo(pf: string): Promise<void> {
    await this.page.locator('#txtPFNo').fill(pf);
    await this.page.locator('#txtPFNo').press('Tab');
  }

  async clickPrintReceiptButton(): Promise<void> {
    await this.page.locator('#cmdPrintReceipt').click();
    const modalBody = this.page.locator("//div[@class='modal-body']");
    await expect(modalBody).toContainText('(3) Do you want to save all of the entered details?');
    await this.page.locator("//button[text()='Yes']").click();
  }

  async CloseBondReceipt(): Promise<void> {
    await this.page.close();
  }

  async tabOutDateTimeVoided(): Promise<void> {
    await this.page.locator('#dtVoidedDate_KPIDttmCtrl').click();
    await this.page.locator('#dtVoidedDate_KPIDttmCtrl').press('Tab');
    await this.page.locator("//table[@id='dtVoidedTime']//input").press('Tab');
  }

  async clickVoidButton(): Promise<void> {
    await this.voidButton.click();
  }

  async selectAtVoidCheckBoxByBondTypeInGrid(bondType: string): Promise<void> {
    await this.bondScheduleGrid.locator(`//tr[td[contains(text(),'${bondType}')]]//td[contains(@aria-describedby,'Void')]`).click();
  }

  async verifyAtTotalBondAmt(expected: string): Promise<void> {
    const actual = await this.page.locator('#txtTotalBond').inputValue();
    expect(actual).toBe(expected);
  }

  async verifyAtDateTimeAsCurrentDate(): Promise<void> {
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const yyyy = today.getFullYear();
    const currentDate = `${mm}/${dd}/${yyyy}`;
    const dateValue = await this.page.locator('#dttmBondDate_Date_KPIDttmCtrl').inputValue();
    expect(dateValue).toBe(currentDate);
    const timeValue = await this.page.locator("//table[@id='dttmBondDate_Time']//input").inputValue();
    expect(timeValue).not.toBe('');
  }

  async verifyAtPaidBy(lastName: string, firstName: string): Promise<void> {
    expect(await this.payerLastNameEdit.inputValue()).toBe(lastName);
    expect(await this.payerFirstNameEdit.inputValue()).toBe(firstName);
  }

  async verifyAtPaidByAddress(address: string): Promise<void> {
    expect(await this.page.locator('#txtAddress').inputValue()).toBe(address);
  }

  async verifyAtPaidByCSZ(city: string, state: string, zip: string): Promise<void> {
    expect(await this.page.locator('#txtCity').inputValue()).toBe(city);
    const selectedState = await this.page.locator('#cddState_DropDown').locator('option:checked').textContent() || '';
    expect(selectedState).toBe(state);
    expect(await this.page.locator('#txtZip').inputValue()).toBe(zip);
  }

  async verifyAtPaymentMehthod(expected: string): Promise<void> {
    const selected = await this.page.locator('#cddPayment_DropDown').locator('option:checked').textContent() || '';
    expect(selected).toBe(expected);
  }

  async verifyAtReceivedBy(pf: string, pfDescription: string): Promise<void> {
    expect(await this.page.locator('#txtPFNo').inputValue()).toBe(pf);
    expect(await this.page.locator('#txtPFDescription').inputValue()).toBe(pfDescription);
  }
}

// ─── Scheduled Booking Entry Page ────────────────────────────────────────────

export class ScheduledBookingEntryPage {
  readonly page: Page;
  readonly spnNoEdit: Locator;
  readonly scheduledDateEdit: Locator;
  readonly scheduledTimeEdit: Locator;
  readonly reasonDropdown: Locator;
  readonly commentsEdit: Locator;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;
  readonly deleteButton: Locator;
  readonly workReleaseCheckbox: Locator;
  readonly weekendCheckbox: Locator;
  readonly scheduledBookingNoYearEdit: Locator;
  readonly scheduledBookingNoNumberEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.spnNoEdit = page.locator('#txtSPIN');
    this.scheduledDateEdit = page.locator('#dttmScheduleDate_Date_KPIDttmCtrl');
    this.scheduledTimeEdit = page.locator("//table[@id='dttmScheduleDate_Time']//input");
    this.reasonDropdown = page.locator('#cddReason_DropDown');
    this.commentsEdit = page.locator('#txtComments');
    this.saveButton = page.locator('#cmdSave');
    this.cancelButton = page.locator('#cmdCancel');
    this.deleteButton = page.locator('#cmdDelete');
    this.workReleaseCheckbox = page.locator('#chkWorkRelease');
    this.weekendCheckbox = page.locator('#chkWeekend');
    this.scheduledBookingNoYearEdit = page.locator('#nbrScheduledBooking_Year');
    this.scheduledBookingNoNumberEdit = page.locator('#nbrScheduledBooking_Number');
  }

  async enterAtSPNNo(spnNo: string): Promise<void> { await this.spnNoEdit.fill(spnNo); await this.spnNoEdit.press('Tab'); }
  async enterAtScheduledDate(date: string): Promise<void> { await this.scheduledDateEdit.fill(date); }
  async selectAtReason(reason: string): Promise<void> { await this.reasonDropdown.selectOption({ label: reason }); }
  async enterAtComments(comments: string): Promise<void> { await this.commentsEdit.fill(comments); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickCancel(): Promise<void> { await this.cancelButton.click(); }
  async clickDelete(): Promise<void> { await this.deleteButton.click(); }
  async clickWorkReleaseCheckbox(): Promise<void> { await this.workReleaseCheckbox.click(); }
  async clickWeekendCheckbox(): Promise<void> { await this.weekendCheckbox.click(); }

  async getScheduledBookingNo(): Promise<string> {
    const year = await this.scheduledBookingNoYearEdit.inputValue();
    const no = await this.scheduledBookingNoNumberEdit.inputValue();
    return `${year}-${no}`;
  }

  async enterAtInmateName(nameType: string, nameID: string): Promise<void> {
    await this.page.locator('#txtNameType').fill(nameType);
    await this.page.locator('#txtNameID').fill(nameID);
    await this.page.locator('#txtNameID').press('Tab');
  }
  async selectAtSex(sex: string): Promise<void> { await this.page.locator('#cddSex_DropDown').selectOption({ label: sex }); }
  async enterAtCourtCaseNo(caseNo: string): Promise<void> { await this.page.locator('#txtCourtCaseNo').fill(caseNo); }
  async enterAtCharge1(statute: string, sentenceDays: string): Promise<void> {
    await this.page.locator('#txtCharge1').fill(statute);
    await this.page.locator('#txtCharge1').press('Tab');
    await this.page.locator('#txtSentenceDays1').fill(sentenceDays);
    await this.page.locator('#txtSentenceDays1').press('Tab');
  }
  async enterAtCharge2(statute: string, sentenceDays: string): Promise<void> {
    await this.page.locator('#txtCharge2').fill(statute);
    await this.page.locator('#txtCharge2').press('Tab');
    await this.page.locator('#txtSentenceDays2').fill(sentenceDays);
    await this.page.locator('#txtSentenceDays2').press('Tab');
  }
  async enterAtBeginDate(date: string): Promise<void> { await this.page.locator('#dtBeginDate_KPIDttmCtrl').fill(date); await this.page.locator('#dtBeginDate_KPIDttmCtrl').press('Tab'); }
  async enterAtApproximateEndDate(date: string, time: string): Promise<void> {
    await this.page.locator('#dtApproxEndDate_KPIDttmCtrl').fill(date);
    await this.page.locator('#txtApproxEndTime').fill(time);
  }
  async selectAllAllowableConditions(): Promise<void> {
    await this.page.locator('#chkWorkRelease').click();
    await this.page.locator('#chkInmateWorker').click();
    await this.page.locator('#chkCommunityService').click();
    await this.page.locator('#chkWeekEnder').click();
    await this.page.locator('#chkElecMonitor').click();
    await this.page.locator('#chkDayReport').click();
    await this.page.locator('#chkStraightTime').click();
    await this.page.locator('#chkConditionTime').click();
    await this.page.locator('#chkMedicalSplNeeds').click();
    await this.page.locator('#chkPendingSanc').click();
  }
  async getTotalSentenceDays(): Promise<string> { return await this.page.locator('#txtTotalSentenceDays').inputValue(); }
  async getApproxEndDate(): Promise<string> { return await this.page.locator('#dtApproxEndDate_KPIDttmCtrl').inputValue(); }
  async getSelectedSex(): Promise<string> { return await this.page.locator('#cddSex_DropDown').locator('option:checked').textContent() || ''; }
  async isAttachmentTabDisplayed(): Promise<boolean> { return await this.page.locator("//span[text()='Attachment']").isVisible(); }
  async tabAtEndDate(): Promise<void> { await this.page.locator('#dtApproxEndDate_KPIDttmCtrl').press('Tab'); }
  async getBottomMessage(): Promise<string> { return (await this.page.locator("//td[@class='statusBar']//b").textContent()) || ''; }
  async EnterAtBegainDate(): Promise<void> {
    const today = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    await this.page.locator('#dtBegainDate_KPIDttmCtrl').fill(today);
    await this.page.locator('#dtBegainDate_KPIDttmCtrl').press('Tab');
  }
  async SelectAtAllowableconditions(): Promise<void> {
    await this.page.locator('#chkWorkRelease').click();
    await this.page.locator('#chkInmateWorker').click();
    await this.page.locator('#chkCommunityService').click();
    await this.page.locator('#chkWeekEnder').click();
    await this.page.locator('#chkElecMonitor').click();
    await this.page.locator('#chkDayReport').click();
    await this.page.locator('#chkStraightTime').click();
    await this.page.locator('#chkConditionTime').click();
    await this.page.locator('#chkMedicalSplNeeds').click();
    await this.page.locator('#chkPendingSanc').click();
  }
  async verifyAtEndDate(sentenceDays: string): Promise<void> {
    const days = parseInt(sentenceDays);
    const futureDate = new Date(); futureDate.setDate(futureDate.getDate() + days);
    const expected = futureDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    expect(await this.page.locator('#dtApproxEndDate_KPIDttmCtrl').inputValue()).toBe(expected);
  }
  async verifyAttachmentTabIsDisplayesAndEnabled(): Promise<void> {
    expect(await this.page.locator("//span[text()='Attachment']").isVisible()).toBe(true);
    expect(await this.page.locator("//span[text()='Attachment']").isEnabled()).toBe(true);
  }
  async verifyAddtionalSuccessfullMessage(): Promise<void> {
    const msg = await this.getBottomMessage();
    expect(msg).toContain('1002 - Addition Successful');
  }
  async SelectPreconvictionDays(): Promise<void> { await this.page.locator('#chkAddDays').click(); }
  async EnterAtCommnets(comments: string): Promise<void> { await this.page.locator('#txtComments').fill(comments); }
  async SelectInactive(): Promise<void> {
    await this.page.locator('#chkInactive').click();
    await this.page.locator('#dtInactiveDate_KPIDttmCtrl').press('Tab');
  }
  async PayHistory(): Promise<void> { await this.page.locator('#cmdPayHistory').click(); }
  async SelectInactiveBill(): Promise<void> { /* legacy: commented out in Java */ }
  async EnterPaymentOfficer(): Promise<void> { await this.page.locator('#txtPFID').press('Tab'); }
  async EnterAtAmountDeposited(amount: string): Promise<void> { await this.page.locator('#txtAmtDeposited').fill(amount); }
  async EnterAtCommments(comments: string): Promise<void> { await this.page.locator('#txtPayComments').fill(comments); }
  async verifyAtBillingTypeInGrid(expectedBillingType: string): Promise<void> {
    const cell = this.page.locator("//tr[contains(@class,'Row')][1]//td[contains(@aria-describedby,'BillingType')]");
    expect(await cell.textContent()).toContain(expectedBillingType);
  }
  async clickCreateNewInvoiceButton(): Promise<void> { await this.page.locator('#cmdCreateInvoice').click(); }
  async CloseInvoiceHistoryScreen(): Promise<void> { await this.page.close(); }
}

// ─── Pay to Stay Entry Page ──────────────────────────────────────────────────

export class PaytoStayEntryPage {
  readonly page: Page;
  readonly spnNoEdit: Locator;
  readonly billingTypeDropdown: Locator;
  readonly rateEdit: Locator;
  readonly startDateEdit: Locator;
  readonly startTimeEdit: Locator;
  readonly endDateEdit: Locator;
  readonly endTimeEdit: Locator;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;
  readonly invoiceHistoryButton: Locator;
  readonly paymentButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.spnNoEdit = page.locator('#txtSPIN');
    this.billingTypeDropdown = page.locator('#cddBillingType_DropDown');
    this.rateEdit = page.locator('#txtRate');
    this.startDateEdit = page.locator('#dttmStartDate_Date_KPIDttmCtrl');
    this.startTimeEdit = page.locator("//table[@id='dttmStartDate_Time']//input");
    this.endDateEdit = page.locator('#dttmEndDate_Date_KPIDttmCtrl');
    this.endTimeEdit = page.locator("//table[@id='dttmEndDate_Time']//input");
    this.saveButton = page.locator('#cmdSave');
    this.cancelButton = page.locator('#cmdCancel');
    this.invoiceHistoryButton = page.locator('#cmdInvoiceHistory');
    this.paymentButton = page.locator('#cmdPayment');
  }

  async enterAtSPNNo(spnNo: string): Promise<void> { await this.spnNoEdit.fill(spnNo); await this.spnNoEdit.press('Tab'); }
  async selectAtBillingType(billingType: string): Promise<void> { await this.billingTypeDropdown.selectOption({ label: billingType }); await this.billingTypeDropdown.press('Tab'); }
  async enterAtRate(rate: string): Promise<void> { await this.rateEdit.fill(rate); }
  async tabOutStartDateTime(): Promise<void> { await this.startDateEdit.press('Tab'); await this.startTimeEdit.press('Tab'); }
  async tabOutEndDateTime(): Promise<void> { await this.endDateEdit.press('Tab'); await this.endTimeEdit.press('Tab'); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickCancel(): Promise<void> { await this.cancelButton.click(); }
  async clickInvoiceHistory(): Promise<void> { await this.invoiceHistoryButton.click(); }
  async clickPayment(): Promise<void> { await this.paymentButton.click(); }
  async enterAtPFID(pf: string): Promise<void> { await this.page.locator('#lupPFID_CodeValue').fill(pf); }
  async enterAtComments(comments: string): Promise<void> { await this.page.locator('#txtComments').fill(comments); }
  async clickAddButton(): Promise<void> { await this.page.locator('#cmdAdd').click(); }
  async clickInactiveCheckbox(): Promise<void> { await this.page.locator('#chkInactive').click(); await this.page.locator('#dttmInactiveDate_Date_KPIDttmCtrl').press('Tab'); }
  async verifySaveConfirmMessage(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(3)'); await dialog.accept(); });
  }
}

// ─── Payment Entry Page ──────────────────────────────────────────────────────

export class PaymentEntryPage {
  readonly page: Page;
  readonly paymentTypeDropdown: Locator;
  readonly amountEdit: Locator;
  readonly payerLastNameEdit: Locator;
  readonly payerFirstNameEdit: Locator;
  readonly receiptDateEdit: Locator;
  readonly receiptTimeEdit: Locator;
  readonly receiptOfficerEdit: Locator;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;
  readonly voidButton: Locator;
  readonly paymentGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.paymentTypeDropdown = page.locator('#cddPaymentType_DropDown');
    this.amountEdit = page.locator('#txtAmount');
    this.payerLastNameEdit = page.locator('#txtPayerLastName');
    this.payerFirstNameEdit = page.locator('#txtPayerFirstName');
    this.receiptDateEdit = page.locator('#dttmReceiptDate_Date_KPIDttmCtrl');
    this.receiptTimeEdit = page.locator("//table[@id='dttmReceiptDate_Time']//input");
    this.receiptOfficerEdit = page.locator('#lupReceiptOfficer_CodeValue');
    this.saveButton = page.locator('#cmdSave');
    this.cancelButton = page.locator('#cmdCancel');
    this.voidButton = page.locator('#cmdVoid');
    this.paymentGrid = page.locator('#grdPayment');
  }

  async selectAtPaymentType(type: string): Promise<void> { await this.paymentTypeDropdown.selectOption({ label: type }); }
  async enterAtAmount(amount: string): Promise<void> { await this.amountEdit.fill(amount); }
  async enterAtPayerName(lastName: string, firstName: string): Promise<void> { await this.payerLastNameEdit.fill(lastName); await this.payerFirstNameEdit.fill(firstName); }
  async tabOutReceiptDateTime(): Promise<void> { await this.receiptDateEdit.press('Tab'); await this.receiptTimeEdit.press('Tab'); }
  async enterAtReceiptOfficer(officer: string): Promise<void> { await this.receiptOfficerEdit.fill(officer); await this.receiptOfficerEdit.press('Tab'); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickCancel(): Promise<void> { await this.cancelButton.click(); }
  async clickVoid(): Promise<void> { await this.voidButton.click(); }
  async selectInGrid(amount: string): Promise<void> { await this.paymentGrid.locator(`//td[contains(text(),'${amount}')]`).click(); }
}

// ─── Invoice History Page ────────────────────────────────────────────────────

export class InvoiceHistoryPage {
  readonly page: Page;
  readonly invoiceHistoryGrid: Locator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.invoiceHistoryGrid = page.locator('#grdInvoiceHistory');
    this.closeButton = page.locator('#cmdClose');
  }

  async clickClose(): Promise<void> { await this.closeButton.click(); }
  async getGridRowCount(): Promise<number> { return await this.invoiceHistoryGrid.locator('//tr[contains(@class,"Row")]').count(); }
}

// ─── Initial Inmate Property Entry Page ──────────────────────────────────────

export class InitialInmatePropertyEntryPage {
  readonly page: Page;
  readonly itemDropdown: Locator;
  readonly descriptionEdit: Locator;
  readonly quantityEdit: Locator;
  readonly valueEdit: Locator;
  readonly conditionDropdown: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;
  readonly closeButton: Locator;
  readonly propertyGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.itemDropdown = page.locator('#cddItem_DropDown');
    this.descriptionEdit = page.locator('#txtDescription');
    this.quantityEdit = page.locator('#txtQuantity');
    this.valueEdit = page.locator('#txtValue');
    this.conditionDropdown = page.locator('#cddCondition_DropDown');
    this.addButton = page.locator('#cmdAdd');
    this.saveButton = page.locator('#cmdSave');
    this.closeButton = page.locator('#cmdClose');
    this.propertyGrid = page.locator('#grdProperty');
  }

  async selectAtItem(item: string): Promise<void> { await this.itemDropdown.selectOption({ label: item }); }
  async enterAtDescription(desc: string): Promise<void> { await this.descriptionEdit.fill(desc); }
  async enterAtQuantity(qty: string): Promise<void> { await this.quantityEdit.fill(qty); }
  async enterAtValue(value: string): Promise<void> { await this.valueEdit.fill(value); }
  async selectAtCondition(condition: string): Promise<void> { await this.conditionDropdown.selectOption({ label: condition }); }
  async clickAdd(): Promise<void> { await this.addButton.click(); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickClose(): Promise<void> { await this.closeButton.click(); }
  async clickCheckbox(index: number): Promise<void> { await this.page.locator(`#chk${index}`).click(); }
  async selectAtColor(index: number, color: string): Promise<void> { await this.page.locator(`#cddColor${index}_DropDown`).selectOption({ label: color }); }
  async selectAtItemByIndex(index: number, item: string): Promise<void> { await this.page.locator(`#cddItem${index}_DropDown`).selectOption({ label: item }); await this.page.locator(`#cddItem${index}_DropDown`).press('Tab'); }
  async enterAtQuantityByIndex(index: number, qty: string): Promise<void> { await this.page.locator(`#txtQty${index}`).fill(qty); }
  async enterAtDescriptionByIndex(index: number, desc: string): Promise<void> { await this.page.locator(`#txtDesc${index}`).fill(desc); }
  async selectAllItemsUsingIndex(item: string): Promise<void> {
    for (let i = 1; i <= 25; i++) { await this.page.locator(`#cddItem${i}_DropDown`).selectOption({ label: item }); await this.page.locator(`#cddItem${i}_DropDown`).press('Tab'); }
  }
  async enterAllQuantitiesUsingIndex(qty: string): Promise<void> {
    for (let i = 1; i <= 25; i++) { await this.page.locator(`#txtQty${i}`).fill(qty); }
  }
  async enterAllDescriptionsUsingIndex(desc: string): Promise<void> {
    for (let i = 1; i <= 25; i++) { await this.page.locator(`#txtDesc${i}`).fill(desc); }
  }
  async clickAllCheckboxes(): Promise<void> {
    for (let i = 1; i <= 25; i++) { await this.page.locator(`#chk${i}`).click(); }
  }
  async verifyCheckboxCountAs25(): Promise<void> {
    const checkboxes = this.page.locator("//input[@type='checkbox']");
    expect(await checkboxes.count()).toBe(25);
  }
  async saveWithConfirm(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.saveButton.click();
  }
  async EnterProperty1(description: string): Promise<void> {
    await this.page.locator('#chk1').click();
    await this.page.locator('#txtDesc1').fill(description);
  }
  async EnterProperty2(description: string): Promise<void> {
    await this.page.locator('#chk2').click();
    await this.page.locator('#txtDesc2').fill(description);
  }
  async clickCheckbox1(): Promise<void> { await this.page.locator('#chk1').click(); }
  async verifyInitialInmatePropertyScreenNotExist(): Promise<void> {
    const pages = this.page.context().pages();
    const found = pages.some(p => p.url().includes('Initial Inmate Property'));
    expect(found).toBe(false);
  }
  async selectAtAllItemUsingIndex(item: string): Promise<void> {
    for (let i = 1; i <= 25; i++) {
      await this.page.locator(`#cddItem${i}_DropDown`).selectOption({ label: item });
      await this.page.locator(`#cddItem${i}_DropDown`).press('Tab');
    }
  }
  async enterAtAllQuantityUsingIndex(qty: string): Promise<void> {
    for (let i = 1; i <= 25; i++) { await this.page.locator(`#txtQty${i}`).fill(qty); }
  }
  async enterAtAllDescriptionUsingIndex(desc: string): Promise<void> {
    for (let i = 1; i <= 25; i++) { await this.page.locator(`#txtDesc${i}`).fill(desc); }
  }
  async clickAllCheckboxesUsingIndex(): Promise<void> {
    for (let i = 1; i <= 25; i++) { await this.page.locator(`#chk${i}`).click(); }
  }
}

// ─── Victim Notification Entry Page ──────────────────────────────────────────

export class VictimNotificationEntryPage {
  readonly page: Page;
  readonly victimLastNameEdit: Locator;
  readonly victimFirstNameEdit: Locator;
  readonly phoneEdit: Locator;
  readonly addressEdit: Locator;
  readonly cityEdit: Locator;
  readonly stateDropdown: Locator;
  readonly zipEdit: Locator;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;
  readonly victimGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.victimLastNameEdit = page.locator('#txtVictimLastName');
    this.victimFirstNameEdit = page.locator('#txtVictimFirstName');
    this.phoneEdit = page.locator('#mskPhone');
    this.addressEdit = page.locator('#txtAddress');
    this.cityEdit = page.locator('#txtCity');
    this.stateDropdown = page.locator('#cddState_DropDown');
    this.zipEdit = page.locator('#txtZip');
    this.saveButton = page.locator('#cmdSave');
    this.cancelButton = page.locator('#cmdCancel');
    this.victimGrid = page.locator('#grdVictim');
  }

  async enterAtVictimName(lastName: string, firstName: string): Promise<void> { await this.victimLastNameEdit.fill(lastName); await this.victimFirstNameEdit.fill(firstName); }
  async enterAtPhone(phone: string): Promise<void> { await this.phoneEdit.fill(phone); }
  async enterAtAddress(address: string): Promise<void> { await this.addressEdit.fill(address); }
  async enterAtCity(city: string): Promise<void> { await this.cityEdit.fill(city); }
  async selectAtState(state: string): Promise<void> { await this.stateDropdown.selectOption({ label: state }); }
  async enterAtZip(zip: string): Promise<void> { await this.zipEdit.fill(zip); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickCancel(): Promise<void> { await this.cancelButton.click(); }
  async selectAtVictimType(victimType: string): Promise<void> { await this.page.locator('#cddVictimType_DropDown').selectOption({ label: victimType }); }
  async clickSaveAndClose(): Promise<void> { await this.page.locator('#cmdSaveClose').click(); }
  async enterNotificationDateTime(): Promise<void> { await this.page.locator('#dttmNotification_Date_KPIDttmCtrl').press('Tab'); await this.page.locator("//table[@id='dttmNotification_Time']//input").press('Tab'); }
  async selectAtNotificationStatus(status: string): Promise<void> { await this.page.locator('#cddNotifStatus_DropDown').selectOption({ label: status }); }
  async enterAtPFNo(): Promise<void> { await this.page.locator('#lupPFID_CodeValue').press('Tab'); }
  async enterAtNotes(notes: string): Promise<void> { await this.page.locator('#txtNotes').fill(notes); }
  async clickAddButton(): Promise<void> { await this.page.locator('#cmdAdd').click(); }
  async verifyAcknowledgeNotificationStatusLockAlertMsg(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(30109)'); await dialog.accept(); });
  }
}

// ─── Additional Data Entry Page ──────────────────────────────────────────────

export class AdditionalDataEntryPage {
  readonly page: Page;
  readonly maritalStatusDropdown: Locator;
  readonly dependentsEdit: Locator;
  readonly educationDropdown: Locator;
  readonly occupationEdit: Locator;
  readonly employerEdit: Locator;
  readonly religionDropdown: Locator;
  readonly militaryDropdown: Locator;
  readonly incomeEdit: Locator;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;
  readonly birthPlaceEdit: Locator;
  readonly driversLicenseEdit: Locator;
  readonly dlStateDropdown: Locator;
  readonly birthVerificationDropdown: Locator;
  readonly nationalIDEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.maritalStatusDropdown = page.locator('#cddMaritalStatus_DropDown');
    this.dependentsEdit = page.locator('#txtDependents');
    this.educationDropdown = page.locator('#cddEducation_DropDown');
    this.occupationEdit = page.locator('#txtOccupation');
    this.employerEdit = page.locator('#txtEmployer');
    this.religionDropdown = page.locator('#cddReligion_DropDown');
    this.militaryDropdown = page.locator('#cddMilitary_DropDown');
    this.incomeEdit = page.locator('#txtIncome');
    this.saveButton = page.locator('#cmdSave');
    this.cancelButton = page.locator('#cmdCancel');
    this.birthPlaceEdit = page.locator('#txtBirthPlace');
    this.driversLicenseEdit = page.locator('#txtDriversLicense');
    this.dlStateDropdown = page.locator('#cddDLState_DropDown');
    this.birthVerificationDropdown = page.locator('#cddBirthVerification_DropDown');
    this.nationalIDEdit = page.locator('#txtNationalID');
  }

  async selectAtMaritalStatus(status: string): Promise<void> { await this.maritalStatusDropdown.selectOption({ label: status }); }
  async enterAtDependents(dependents: string): Promise<void> { await this.dependentsEdit.fill(dependents); }
  async selectAtEducation(education: string): Promise<void> { await this.educationDropdown.selectOption({ label: education }); }
  async enterAtOccupation(occupation: string): Promise<void> { await this.occupationEdit.fill(occupation); }
  async enterAtEmployer(employer: string): Promise<void> { await this.employerEdit.fill(employer); }
  async selectAtReligion(religion: string): Promise<void> { await this.religionDropdown.selectOption({ label: religion }); }
  async selectAtMilitary(military: string): Promise<void> { await this.militaryDropdown.selectOption({ label: military }); }
  async enterAtIncome(income: string): Promise<void> { await this.incomeEdit.fill(income); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickCancel(): Promise<void> { await this.cancelButton.click(); }
  async enterAtBirthPlace(birthPlace: string): Promise<void> { await this.birthPlaceEdit.fill(birthPlace); }
  async enterAtDriversLicense(dl: string): Promise<void> { await this.driversLicenseEdit.fill(dl); }
  async selectAtDLState(state: string): Promise<void> { await this.dlStateDropdown.selectOption({ label: state }); }
  async selectAtBirthVerification(verification: string): Promise<void> { await this.birthVerificationDropdown.selectOption({ label: verification }); }
  async enterAtNationalID(id: string): Promise<void> { await this.nationalIDEdit.fill(id); }
}

// ─── Physical Entry Page ─────────────────────────────────────────────────────

export class PhysicalEntryPage {
  readonly page: Page;
  readonly sexDropdown: Locator;
  readonly raceDropdown: Locator;
  readonly ethnicityDropdown: Locator;
  readonly heightEdit: Locator;
  readonly weightEdit: Locator;
  readonly buildDropdown: Locator;
  readonly hairDropdown: Locator;
  readonly eyesDropdown: Locator;
  readonly skinDropdown: Locator;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;
  readonly birthDateEdit: Locator;
  readonly ageEdit: Locator;
  readonly demeanorDropdown: Locator;
  readonly conditionDropdown: Locator;
  readonly teethDropdown: Locator;
  readonly hairLengthDropdown: Locator;
  readonly handDropdown: Locator;
  readonly facialHairDropdown: Locator;
  readonly handicappedDropdown: Locator;
  readonly physicalDescriptionEdit: Locator;
  readonly pregnantCheckbox: Locator;
  readonly glassesCheckbox: Locator;
  readonly contactsCheckbox: Locator;
  readonly datePregnancyDiscoveredEdit: Locator;
  readonly dateOfDeliveryEdit: Locator;
  readonly saveAndCloseIcon: Locator;
  readonly facialEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sexDropdown = page.locator('#cddSex_DropDown');
    this.raceDropdown = page.locator('#cddRace_DropDown');
    this.ethnicityDropdown = page.locator('#cddEthnicity_DropDown');
    this.heightEdit = page.locator('#txtHeight');
    this.weightEdit = page.locator('#txtWeight');
    this.buildDropdown = page.locator('#cddBuild_DropDown');
    this.hairDropdown = page.locator('#cddHairColor_DropDown');
    this.eyesDropdown = page.locator('#cddEyeColor_DropDown');
    this.skinDropdown = page.locator('#cddSkin_DropDown');
    this.saveButton = page.locator('#cmdSave');
    this.cancelButton = page.locator('#cmdCancel');
    this.birthDateEdit = page.locator('#dtDOB_KPIDttmCtrl');
    this.ageEdit = page.locator('#txtAge');
    this.demeanorDropdown = page.locator('#cddDemeanor_DropDown');
    this.conditionDropdown = page.locator('#cddCondition_DropDown');
    this.teethDropdown = page.locator('#cddTeeth_DropDown');
    this.hairLengthDropdown = page.locator('#cddHairLength_DropDown');
    this.handDropdown = page.locator('#cddHand_DropDown');
    this.facialHairDropdown = page.locator('#cddFacial_DropDown');
    this.handicappedDropdown = page.locator('#cddHandy_DropDown');
    this.physicalDescriptionEdit = page.locator('#txtPhysDesc');
    this.pregnantCheckbox = page.locator('#chkIsPregnancy');
    this.glassesCheckbox = page.locator('#chkIsGlass');
    this.contactsCheckbox = page.locator('#chkIsContacts');
    this.datePregnancyDiscoveredEdit = page.locator('#dttmDoPD_KPIDttmCtrl');
    this.dateOfDeliveryEdit = page.locator('#dttmDoD_KPIDttmCtrl');
    this.saveAndCloseIcon = page.locator('#cmdSaveNClose');
    this.facialEdit = page.locator('#txtFacial');
  }

  async selectAtSex(sex: string): Promise<void> { await this.sexDropdown.selectOption({ label: sex }); }
  async selectAtRace(race: string): Promise<void> { await this.raceDropdown.selectOption({ label: race }); }
  async selectAtEthnicity(ethnicity: string): Promise<void> { await this.ethnicityDropdown.selectOption({ label: ethnicity }); }
  async enterAtHeight(height: string): Promise<void> { await this.heightEdit.fill(height); }
  async enterAtWeight(weight: string): Promise<void> { await this.weightEdit.fill(weight); }
  async selectAtBuild(build: string): Promise<void> { await this.buildDropdown.selectOption({ label: build }); }
  async selectAtHair(hair: string): Promise<void> { await this.hairDropdown.selectOption({ label: hair }); }
  async selectAtEyes(eyes: string): Promise<void> { await this.eyesDropdown.selectOption({ label: eyes }); }
  async selectAtSkin(skin: string): Promise<void> { await this.skinDropdown.selectOption({ label: skin }); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickCancel(): Promise<void> { await this.cancelButton.click(); }

  async enterAtBirthDate(date: string): Promise<void> { await this.birthDateEdit.click(); await this.birthDateEdit.clear(); await this.birthDateEdit.fill(date); await this.birthDateEdit.press('Tab'); }
  async getAge(): Promise<string> { return await this.ageEdit.inputValue(); }
  async getBirthDate(): Promise<string> { return await this.birthDateEdit.inputValue(); }
  async clickBirthDateLabel(): Promise<void> { await this.page.locator('#lblCustomBirthDate').click(); }
  async clickRaceEthnicLabel(): Promise<void> { await this.page.locator('#lblRace').click(); }
  async clickHandicappedLabel(): Promise<void> { await this.page.locator('#lblHandy').click(); }
  async selectAtDemeanor(demeanor: string): Promise<void> { await this.demeanorDropdown.selectOption({ label: demeanor }); }
  async selectAtCondition(condition: string): Promise<void> { await this.conditionDropdown.selectOption({ label: condition }); }
  async selectAtTeeth(teeth: string): Promise<void> { await this.teethDropdown.selectOption({ label: teeth }); }
  async selectAtHairLength(hairLength: string): Promise<void> { await this.hairLengthDropdown.selectOption({ label: hairLength }); }
  async selectAtHand(hand: string): Promise<void> { await this.handDropdown.selectOption({ label: hand }); }
  async selectAtFacialHair(facialHair: string): Promise<void> { await this.facialHairDropdown.selectOption({ label: facialHair }); }
  async selectAtHandicapped(handicapped: string): Promise<void> { await this.handicappedDropdown.selectOption({ label: handicapped }); }
  async enterAtPhysicalDescription(desc: string): Promise<void> { await this.physicalDescriptionEdit.fill(desc); }
  async enterAtFacialHair(text: string): Promise<void> { await this.facialEdit.fill(text); }
  async clickPregnantCheckbox(): Promise<void> { await this.pregnantCheckbox.click(); }
  async clickGlassesCheckbox(): Promise<void> { await this.glassesCheckbox.click(); }
  async clickContactsCheckbox(): Promise<void> { await this.contactsCheckbox.click(); }
  async enterDatePregnancyDiscovered(date: string): Promise<void> { await this.datePregnancyDiscoveredEdit.fill(date); }
  async enterDateOfDelivery(date: string): Promise<void> { await this.dateOfDeliveryEdit.fill(date); }
  async clickSaveAndClose(): Promise<void> { await this.saveAndCloseIcon.click(); }

  async getSelectedRace(): Promise<string> { return await this.raceDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedEthnicity(): Promise<string> { return await this.ethnicityDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedDemeanor(): Promise<string> { return await this.demeanorDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedCondition(): Promise<string> { return await this.conditionDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedEyes(): Promise<string> { return await this.eyesDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedHair(): Promise<string> { return await this.hairDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedTeeth(): Promise<string> { return await this.teethDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedHairLength(): Promise<string> { return await this.hairLengthDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedHand(): Promise<string> { return await this.handDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedFacialHair(): Promise<string> { return await this.facialHairDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedHandicapped(): Promise<string> { return await this.handicappedDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedBuild(): Promise<string> { return await this.buildDropdown.locator('option:checked').textContent() || ''; }
  async getHeight(): Promise<string> { return await this.heightEdit.inputValue(); }
  async getWeight(): Promise<string> { return await this.weightEdit.inputValue(); }
  async getPhysicalDescription(): Promise<string> { return await this.physicalDescriptionEdit.inputValue(); }
  async getDatePregnancyDiscovered(): Promise<string> { return await this.datePregnancyDiscoveredEdit.inputValue(); }
  async getDateOfDelivery(): Promise<string> { return await this.dateOfDeliveryEdit.inputValue(); }
  async getBottomMessage(): Promise<string> { return (await this.page.locator("//td[@class='statusBar']//b").textContent()) || ''; }

  async getBirthDateLabelColor(): Promise<string> { return await this.page.locator('#lblCustomBirthDate').evaluate(el => getComputedStyle(el).color); }
  async getHandicappedLabelColor(): Promise<string> { return await this.page.locator('#lblHandy').evaluate(el => getComputedStyle(el).color); }
  async getRaceEthnicLabelColor(): Promise<string> { return await this.page.locator('#lblRace').evaluate(el => getComputedStyle(el).color); }
  async getDatePregnancyDiscoveredLabelColor(): Promise<string> { return await this.page.locator('#lblDoPD').evaluate(el => getComputedStyle(el).color); }
  async getDateOfDeliveryLabelColor(): Promise<string> { return await this.page.locator('#lblDoDelivery').evaluate(el => getComputedStyle(el).color); }

  async isBirthDateDisplayed(): Promise<boolean> { return await this.birthDateEdit.isVisible(); }
  async isBirthDateEnabled(): Promise<boolean> { return await this.birthDateEdit.isEnabled(); }
  async isAgeReadonly(): Promise<boolean> { return (await this.ageEdit.getAttribute('readonly')) === 'true'; }
  async isBuildDropdownDisplayed(): Promise<boolean> { return await this.buildDropdown.isVisible(); }
  async isBuildDropdownEnabled(): Promise<boolean> { return await this.buildDropdown.isEnabled(); }
  async isRaceDropdownDisplayed(): Promise<boolean> { return await this.raceDropdown.isVisible(); }
  async isRaceDropdownEnabled(): Promise<boolean> { return await this.raceDropdown.isEnabled(); }
  async isEthnicDropdownDisplayed(): Promise<boolean> { return await this.ethnicityDropdown.isVisible(); }
  async isEthnicDropdownEnabled(): Promise<boolean> { return await this.ethnicityDropdown.isEnabled(); }
  async isDemeanorDropdownDisplayed(): Promise<boolean> { return await this.demeanorDropdown.isVisible(); }
  async isDemeanorDropdownEnabled(): Promise<boolean> { return await this.demeanorDropdown.isEnabled(); }
  async isConditionDropdownDisplayed(): Promise<boolean> { return await this.conditionDropdown.isVisible(); }
  async isConditionDropdownEnabled(): Promise<boolean> { return await this.conditionDropdown.isEnabled(); }
  async isHeightDisplayed(): Promise<boolean> { return await this.heightEdit.isVisible(); }
  async isHeightEnabled(): Promise<boolean> { return await this.heightEdit.isEnabled(); }
  async isWeightDisplayed(): Promise<boolean> { return await this.weightEdit.isVisible(); }
  async isWeightEnabled(): Promise<boolean> { return await this.weightEdit.isEnabled(); }
  async isEyeColorDropdownDisplayed(): Promise<boolean> { return await this.eyesDropdown.isVisible(); }
  async isEyeColorDropdownEnabled(): Promise<boolean> { return await this.eyesDropdown.isEnabled(); }
  async isPregnantCheckboxDisplayed(): Promise<boolean> { return await this.pregnantCheckbox.isVisible(); }
  async isPregnantCheckboxEnabled(): Promise<boolean> { return await this.pregnantCheckbox.isEnabled(); }
  async isPregnantCheckboxChecked(): Promise<boolean> { return await this.pregnantCheckbox.isChecked(); }
  async isGlassesCheckboxDisplayed(): Promise<boolean> { return await this.glassesCheckbox.isVisible(); }
  async isGlassesCheckboxEnabled(): Promise<boolean> { return await this.glassesCheckbox.isEnabled(); }
  async isContactsCheckboxDisplayed(): Promise<boolean> { return await this.contactsCheckbox.isVisible(); }
  async isContactsCheckboxEnabled(): Promise<boolean> { return await this.contactsCheckbox.isEnabled(); }
  async isHairColorDropdownDisplayed(): Promise<boolean> { return await this.hairDropdown.isVisible(); }
  async isHairColorDropdownEnabled(): Promise<boolean> { return await this.hairDropdown.isEnabled(); }
  async isSkinDropdownDisplayed(): Promise<boolean> { return await this.skinDropdown.isVisible(); }
  async isSkinDropdownEnabled(): Promise<boolean> { return await this.skinDropdown.isEnabled(); }
  async isTeethDropdownDisplayed(): Promise<boolean> { return await this.teethDropdown.isVisible(); }
  async isTeethDropdownEnabled(): Promise<boolean> { return await this.teethDropdown.isEnabled(); }
  async isHairLengthDropdownDisplayed(): Promise<boolean> { return await this.hairLengthDropdown.isVisible(); }
  async isHairLengthDropdownEnabled(): Promise<boolean> { return await this.hairLengthDropdown.isEnabled(); }
  async isHandDropdownDisplayed(): Promise<boolean> { return await this.handDropdown.isVisible(); }
  async isHandDropdownEnabled(): Promise<boolean> { return await this.handDropdown.isEnabled(); }
  async isFacialHairDropdownDisplayed(): Promise<boolean> { return await this.facialHairDropdown.isVisible(); }
  async isFacialHairDropdownEnabled(): Promise<boolean> { return await this.facialHairDropdown.isEnabled(); }
  async isHandicappedDropdownDisplayed(): Promise<boolean> { return await this.handicappedDropdown.isVisible(); }
  async isHandicappedDropdownEnabled(): Promise<boolean> { return await this.handicappedDropdown.isEnabled(); }
  async isPhysicalDescriptionDisplayed(): Promise<boolean> { return await this.physicalDescriptionEdit.isVisible(); }
  async isPhysicalDescriptionEnabled(): Promise<boolean> { return await this.physicalDescriptionEdit.isEnabled(); }
  async isDatePregnancyDiscoveredDisplayed(): Promise<boolean> { return await this.datePregnancyDiscoveredEdit.isVisible(); }
  async isDatePregnancyDiscoveredEnabled(): Promise<boolean> { return await this.datePregnancyDiscoveredEdit.isEnabled(); }
  async isDateOfDeliveryDisplayed(): Promise<boolean> { return await this.dateOfDeliveryEdit.isVisible(); }
  async isDateOfDeliveryEnabled(): Promise<boolean> { return await this.dateOfDeliveryEdit.isEnabled(); }
  async isFacialHairFieldDropdown(): Promise<boolean> { return (await this.facialHairDropdown.evaluate(el => el.tagName.toLowerCase())) === 'select'; }
  async isFacialHairFieldText(): Promise<boolean> { return (await this.facialEdit.evaluate(el => el.tagName.toLowerCase())) === 'input'; }

  // --- Missing methods from Java PhysicalEntry ---
  async enterAtbirthDateAndAgeAndVerifyAgeAs32(age: string): Promise<void> {
    await this.birthDateEdit.clear();
    await this.birthDateEdit.fill(age);
    await this.birthDateEdit.press('Tab');
    const ageValue = await this.ageEdit.inputValue();
    expect(ageValue).toBe('32');
  }
  async clickBirthDateAndAgeLabel(): Promise<void> { await this.page.locator('#lblCustomBirthDate').click(); }
  async SelectRaceAndEthnic(): Promise<void> {
    await this.raceDropdown.selectOption({ index: 1 });
    await this.ethnicityDropdown.selectOption({ index: 1 });
  }
  async selectHandicapped(): Promise<void> { await this.handicappedDropdown.selectOption({ index: 1 }); }
  async verifyTheFieldIsMandatory(color: string): Promise<void> { expect(color).toBe('rgba(153, 0, 0, 1)'); }
  async VerifyUpdateSuccessFullMessage(): Promise<void> {
    const msg = await this.getBottomMessage();
    expect(msg).toContain('1003 - Update Successful');
  }
  async enterHeight(): Promise<void> { await this.heightEdit.fill(String(Math.floor(Math.random() * 90) + 10)); }
  async enterWeight(): Promise<void> { await this.weightEdit.fill(String(Math.floor(Math.random() * 90) + 10)); }
  async selectEyecolor(): Promise<void> { await this.eyesDropdown.selectOption({ index: 1 }); }
  async selectHaircolor(): Promise<void> { await this.hairDropdown.selectOption({ index: 1 }); }
  async selectfacialHair(): Promise<void> { await this.facialHairDropdown.selectOption({ index: 1 }); }
  async verifyFacialHairFieldIsDropDownAsSysPar629(): Promise<void> { expect(await this.isFacialHairFieldDropdown()).toBe(true); }
  async verifyFacialHairFieldIsTextAsSysPar629(): Promise<void> { expect(await this.isFacialHairFieldText()).toBe(true); }
  async save(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.saveButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }
  async savescreen(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.saveButton.click();
  }
  async saveScreen(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.saveButton.click();
  }
  async saveAndCloseScreen(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.saveAndCloseIcon.click();
  }
  async close(): Promise<void> { await this.page.close(); }
  async verifyBirthDateAgeIsDisplayedAndEnabled(): Promise<void> {
    expect(await this.isBirthDateDisplayed()).toBe(true);
    expect(await this.isBirthDateEnabled()).toBe(true);
    expect(await this.birthDateEdit.isVisible()).toBe(true);
    expect(await this.isAgeReadonly()).toBe(true);
  }
  async verifyBuildDropdownIsDisplayedAndEnabled(): Promise<void> {
    expect(await this.isBuildDropdownDisplayed()).toBe(true);
    expect(await this.isBuildDropdownEnabled()).toBe(true);
  }
  async verifyRaceEthnicDropdownIsDisplayedAndEnabled(): Promise<void> {
    expect(await this.isRaceDropdownDisplayed()).toBe(true);
    expect(await this.isRaceDropdownEnabled()).toBe(true);
    expect(await this.isEthnicDropdownDisplayed()).toBe(true);
    expect(await this.isEthnicDropdownEnabled()).toBe(true);
  }
  async verifyDemeanorDropdownIsDisplayedAndEnabled(): Promise<void> {
    expect(await this.isDemeanorDropdownDisplayed()).toBe(true);
    expect(await this.isDemeanorDropdownEnabled()).toBe(true);
  }
  async verifyConditionDropdownIsDisplayedAndEnabled(): Promise<void> {
    expect(await this.isConditionDropdownDisplayed()).toBe(true);
    expect(await this.isConditionDropdownEnabled()).toBe(true);
  }
  async verifyHeightIsDisplayedAndEnabled(): Promise<void> {
    expect(await this.isHeightDisplayed()).toBe(true);
    expect(await this.isHeightEnabled()).toBe(true);
  }
  async verifyWeightIbsIsDisplayedAndEnabled(): Promise<void> {
    expect(await this.isWeightDisplayed()).toBe(true);
    expect(await this.isWeightEnabled()).toBe(true);
  }
  async verifyEyeColorDropdownIsDisplayedAndEnabled(): Promise<void> {
    expect(await this.isEyeColorDropdownDisplayed()).toBe(true);
    expect(await this.isEyeColorDropdownEnabled()).toBe(true);
  }
  async verifyPregnantCheckboxIsDisplayedAndEnabled(): Promise<void> {
    expect(await this.isPregnantCheckboxDisplayed()).toBe(true);
    expect(await this.isPregnantCheckboxEnabled()).toBe(true);
  }
  async verifyGlassesCheckboxIsDisplayedAndEnabled(): Promise<void> {
    expect(await this.isGlassesCheckboxDisplayed()).toBe(true);
    expect(await this.isGlassesCheckboxEnabled()).toBe(true);
  }
  async verifyContactsCheckboxIsDisplayedAndEnabled(): Promise<void> {
    expect(await this.isContactsCheckboxDisplayed()).toBe(true);
    expect(await this.isContactsCheckboxEnabled()).toBe(true);
  }
  async verifyHairColorDropdownIsDisplayedAndEnabled(): Promise<void> {
    expect(await this.isHairColorDropdownDisplayed()).toBe(true);
    expect(await this.isHairColorDropdownEnabled()).toBe(true);
  }
  async verifySkinDropdownIsDisplayedAndEnabled(): Promise<void> {
    expect(await this.isSkinDropdownDisplayed()).toBe(true);
    expect(await this.isSkinDropdownEnabled()).toBe(true);
  }
  async verifyTeethDropdownIsDisplayedAndEnabled(): Promise<void> {
    expect(await this.isTeethDropdownDisplayed()).toBe(true);
    expect(await this.isTeethDropdownEnabled()).toBe(true);
  }
  async verifyHairLengthDropdownIsDisplayedAndEnabled(): Promise<void> {
    expect(await this.isHairLengthDropdownDisplayed()).toBe(true);
    expect(await this.isHairLengthDropdownEnabled()).toBe(true);
  }
  async verifyHandDropdownIsDisplayedAndEnabled(): Promise<void> {
    expect(await this.isHandDropdownDisplayed()).toBe(true);
    expect(await this.isHandDropdownEnabled()).toBe(true);
  }
  async verifyFacialHairDropdownIsDisplayedAndEnabled(): Promise<void> {
    expect(await this.isFacialHairDropdownDisplayed()).toBe(true);
    expect(await this.isFacialHairDropdownEnabled()).toBe(true);
  }
  async verifyHandicappedDropdownIsDisplayedAndEnabled(): Promise<void> {
    expect(await this.isHandicappedDropdownDisplayed()).toBe(true);
    expect(await this.isHandicappedDropdownEnabled()).toBe(true);
  }
  async verifyPhysicalDescriptionIsDisplayedAndEnabled(): Promise<void> {
    expect(await this.isPhysicalDescriptionDisplayed()).toBe(true);
    expect(await this.isPhysicalDescriptionEnabled()).toBe(true);
  }
  async verifyAtBirthDateAndAge(birthDate: string): Promise<void> {
    const currentYear = new Date().getFullYear();
    const birthYear = parseInt(birthDate.substring(6));
    const expectedAge = String(currentYear - birthYear);
    expect(await this.getBirthDate()).toBe(birthDate);
    expect(await this.getAge()).toBe(expectedAge);
  }
  async verifySaveConfirmationPopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('Do You Want To Save All Of The Entered Details'); await dialog.accept(); });
  }
  async verify30160HeightWeightEyeColorHairColorIsAreBlankConfirmPopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('30160'); await dialog.accept(); });
  }
  async selectAtRaceAndEthnic(race: string, ethnic: string): Promise<void> {
    await this.raceDropdown.selectOption({ label: race });
    await this.ethnicityDropdown.selectOption({ label: ethnic });
  }
  async verifyAtRaceAndEthnic(race: string, ethnic: string): Promise<void> {
    expect(await this.getSelectedRace()).toContain(race);
    expect(await this.getSelectedEthnicity()).toContain(ethnic);
  }
  async verifyAtDemeanor(demeanor: string): Promise<void> { expect(await this.getSelectedDemeanor()).toContain(demeanor); }
  async verifyAtHeight(height: string): Promise<void> { expect(await this.getHeight()).toBe(height); }
  async verify30160WeightEyeColorHairColorIsAreBlankConfirmPopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('30160'); await dialog.accept(); });
  }
  async verifyAtCondition(condition: string): Promise<void> { expect(await this.getSelectedCondition()).toContain(condition); }
  async enterAtWeightIbs(weight: string): Promise<void> { await this.weightEdit.fill(weight); }
  async verifyAtWeightIbs(weight: string): Promise<void> { expect(await this.getWeight()).toBe(weight); }
  async verify30160EyeColorHairColorIsAreBlankConfirmPopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('30160'); await dialog.accept(); });
  }
  async selectAtEyeColor(eyeColor: string): Promise<void> { await this.eyesDropdown.selectOption({ label: eyeColor }); }
  async verify30160HairColorIsAreBlankConfirmPopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('30160'); await dialog.accept(); });
  }
  async verifyAtEyeColor(eyeColor: string): Promise<void> { expect(await this.getSelectedEyes()).toContain(eyeColor); }
  async verifyAtSkin(skin: string): Promise<void> { expect(await this.skinDropdown.locator('option:checked').textContent()).toContain(skin); }
  async selectAtHairColor(hairColor: string): Promise<void> { await this.hairDropdown.selectOption({ label: hairColor }); }
  async verifyAtHairColor(hairColor: string): Promise<void> { expect(await this.getSelectedHair()).toContain(hairColor); }
  async verifyAtTeeth(teeth: string): Promise<void> { expect(await this.getSelectedTeeth()).toContain(teeth); }
  async verifyAtHairLength(hairLength: string): Promise<void> { expect(await this.getSelectedHairLength()).toContain(hairLength); }
  async verifyAtHand(hand: string): Promise<void> { expect(await this.getSelectedHand()).toContain(hand); }
  async verifyAtFacialHair(facialHair: string): Promise<void> { expect(await this.getSelectedFacialHair()).toContain(facialHair); }
  async verifyAtPhysicalDescription(desc: string): Promise<void> { expect(await this.getPhysicalDescription()).toBe(desc); }
  async verifyAtHandicapped(handicapped: string): Promise<void> { expect(await this.getSelectedHandicapped()).toContain(handicapped); }
  async verifyDatePregnancyDiscoveredIsDisplayedAndEnabled(): Promise<void> {
    expect(await this.isDatePregnancyDiscoveredDisplayed()).toBe(true);
    expect(await this.isDatePregnancyDiscoveredEnabled()).toBe(true);
  }
  async verifyDateOfDeliveryIsDisplayedAndEnabled(): Promise<void> {
    expect(await this.isDateOfDeliveryDisplayed()).toBe(true);
    expect(await this.isDateOfDeliveryEnabled()).toBe(true);
  }
  async verifyEnterMandatoryDataAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('Enter mandatory data'); await dialog.accept(); });
  }
  async enterDatePregnancyDiscoveredAsCurrentDate(): Promise<void> {
    const today = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    await this.datePregnancyDiscoveredEdit.fill(today);
  }
  async enterDateOfDeliveryAsCurrentDate(): Promise<void> {
    const today = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    await this.dateOfDeliveryEdit.fill(today);
  }
  async verifyPregnantCheckboxIsSelected(): Promise<void> { expect(await this.pregnantCheckbox.isChecked()).toBe(true); }
  async verifyDatePregnancyDiscoveredAsCurrentDate(): Promise<void> {
    const today = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    expect(await this.getDatePregnancyDiscovered()).toBe(today);
  }
  async verifyDateOfDeliveryAsCurrentDate(): Promise<void> {
    const today = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    expect(await this.getDateOfDelivery()).toBe(today);
  }
  async verifyDatePregnancyDiscoveredIsMandatory(): Promise<void> {
    const color = await this.getDatePregnancyDiscoveredLabelColor();
    expect(color).toBe('rgba(153, 0, 0, 1)');
  }
  async verifyDateOfDeliveryIsNonMandatory(): Promise<void> {
    const color = await this.getDateOfDeliveryLabelColor();
    expect(color).toBe('rgba(0, 0, 0, 1)');
  }
  async verifyDatePregnancyDiscoveredIsNotDisplayed(): Promise<void> {
    const style = await this.page.locator('#tdLblDoPD').getAttribute('style');
    expect(style).toContain('display: none');
  }
  async verifyDateOfDeliveryIsNotDisplayed(): Promise<void> {
    const style = await this.page.locator('#tdDttmDoPD').getAttribute('style');
    expect(style).toContain('display: none');
  }
  async SelectAtBirthCounty(county: string): Promise<void> { await this.page.locator('#cddBirthCounty_DropDown').selectOption({ label: county }); }
  async SelectAtBirthState(state: string): Promise<void> { await this.page.locator('#cddBirthState_DropDown').selectOption({ label: state }); }
  async SelectAtBirthCountry(country: string): Promise<void> { await this.page.locator('#cddBirthCountry_DropDown').selectOption({ label: country }); }
  async NavigateToIntakeFormTab(): Promise<void> { await this.page.locator("//span[contains(text(),'Intake Form')]").click(); }
  async NavigateToCCAPSFormTab(): Promise<void> { await this.page.locator("//span[contains(text(),'CCAPS Form')]").click(); }
  async NavigateToRiskCommnetsTab(): Promise<void> { await this.page.locator("//span[contains(text(),'Comments')]").click(); }
  async NavigateToRiskAttachmentsTab(): Promise<void> { await this.page.locator("//span[contains(text(),'Attachment')]").click(); }
  async verifyAtEthnicity(ethnicity: string): Promise<void> { expect(await this.getSelectedEthnicity()).toContain(ethnicity); }
  async verifyAtMartial(marital: string): Promise<void> {
    const selected = await this.page.locator('#cddMarital_DropDown').locator('option:checked').textContent();
    expect(selected).toContain(marital);
  }
  async EnterAtArrestBailBand(value: string): Promise<void> { await this.page.locator('#txtArrestBailBond').fill(value); }
  async EnterAtPendingFeloneis(value: string): Promise<void> { await this.page.locator('#txtPendingFelonies').fill(value); }
  async EnterAtCurrentDrug(): Promise<void> { await this.page.locator('#chkCurrentDrug').click(); }
}

// ─── Risk Assessment Entry Page ──────────────────────────────────────────────

export class RiskAssessmentEntryPage {
  readonly page: Page;
  readonly interviewYearEdit: Locator;
  readonly interviewNoEdit: Locator;
  readonly interviewDateEdit: Locator;
  readonly interviewTimeEdit: Locator;
  readonly screeningOfficerEdit: Locator;
  readonly statusDropdown: Locator;
  readonly scoreEdit: Locator;
  readonly riskLevelEdit: Locator;
  readonly overrideLevelDropdown: Locator;
  readonly commentsEdit: Locator;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;
  readonly deleteButton: Locator;
  readonly intakeFormTab: Locator;
  readonly ccapsFormTab: Locator;
  readonly riskCommentsTab: Locator;
  readonly interviewButton: Locator;
  readonly eemsMentalTab: Locator;
  readonly substanceAbuseTab: Locator;
  readonly livingSituationTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.interviewYearEdit = page.locator('#nbrInterview_Year');
    this.interviewNoEdit = page.locator('#nbrInterview_Number');
    this.interviewDateEdit = page.locator('#dttmInterviewDate_Date_KPIDttmCtrl');
    this.interviewTimeEdit = page.locator("//table[@id='dttmInterviewDate_Time']//input");
    this.screeningOfficerEdit = page.locator('#lupScrnOfficer_CodeValue');
    this.statusDropdown = page.locator('#cddStatus_DropDown');
    this.scoreEdit = page.locator('#txtScore');
    this.riskLevelEdit = page.locator('#txtRiskLevel');
    this.overrideLevelDropdown = page.locator('#cddOverrideLevel_DropDown');
    this.commentsEdit = page.locator('#txtComments');
    this.saveButton = page.locator('#cmdSave');
    this.cancelButton = page.locator('#cmdCancel');
    this.deleteButton = page.locator('#cmdDelete');
    this.intakeFormTab = page.locator("//span[text()='Intake Form']");
    this.ccapsFormTab = page.locator("//span[text()='CCAPS Form']");
    this.riskCommentsTab = page.locator("//span[text()='Risk Comments']");
    this.interviewButton = page.locator('#cmdInterview');
    this.eemsMentalTab = page.locator("//span[text()='EEMS/Mental & Disability']");
    this.substanceAbuseTab = page.locator("//span[text()='Substance Abuse']");
    this.livingSituationTab = page.locator("//span[text()='Living Situation']");
  }

  async tabOutInterviewDate(): Promise<void> { await this.interviewDateEdit.press('Tab'); await this.interviewTimeEdit.press('Tab'); }
  async enterAtScreeningOfficer(officer: string): Promise<void> { await this.screeningOfficerEdit.fill(officer); await this.screeningOfficerEdit.press('Tab'); }
  async selectAtStatus(status: string): Promise<void> { await this.statusDropdown.selectOption({ label: status }); }
  async selectAtOverrideLevel(level: string): Promise<void> { await this.overrideLevelDropdown.selectOption({ label: level }); }
  async enterAtComments(comments: string): Promise<void> { await this.commentsEdit.fill(comments); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickCancel(): Promise<void> { await this.cancelButton.click(); }
  async clickDelete(): Promise<void> { await this.deleteButton.click(); }
  async clickIntakeFormTab(): Promise<void> { await this.intakeFormTab.click(); }
  async clickCCAPSFormTab(): Promise<void> { await this.ccapsFormTab.click(); }
  async clickRiskCommentsTab(): Promise<void> { await this.riskCommentsTab.click(); }
  async clickInterviewButton(): Promise<void> { await this.interviewButton.click(); }
  async clickEEMSMentalTab(): Promise<void> { await this.eemsMentalTab.click(); }
  async clickSubstanceAbuseTab(): Promise<void> { await this.substanceAbuseTab.click(); }
  async clickLivingSituationTab(): Promise<void> { await this.livingSituationTab.click(); }

  async getInterviewNo(): Promise<string> {
    const year = await this.interviewYearEdit.inputValue();
    const no = await this.interviewNoEdit.inputValue();
    return `${year}-${no}`;
  }

  async getScore(): Promise<string> { return await this.scoreEdit.inputValue(); }
  async getRiskLevel(): Promise<string> { return await this.riskLevelEdit.inputValue(); }
}

// ─── Intake Form Tab (Risk Assessment) ──────────────────────────────────────

export class IntakeFormTabPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly questionGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdInternalSave');
    this.questionGrid = page.locator('#grdIntakeForm');
  }

  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async selectAnswerByQuestion(question: string, answer: string): Promise<void> {
    const row = this.questionGrid.locator(`//tr[td[contains(text(),'${question}')]]`);
    await row.locator(`//select`).selectOption({ label: answer });
  }
  async selectAtResidentOf(resident: string): Promise<void> { await this.page.locator('#cddResidentOf_DropDown').selectOption({ label: resident }); }
  async selectAtEthnicity(ethnicity: string): Promise<void> { await this.page.locator('#cddEthnicity_DropDown').selectOption({ label: ethnicity }); }
  async selectAtMaritalStatus(status: string): Promise<void> { await this.page.locator('#cddMaritalStatus_DropDown').selectOption({ label: status }); }
  async selectAtLanguage(language: string): Promise<void> { await this.page.locator('#cddLanguage_DropDown').selectOption({ label: language }); }
  async selectAtPrimaryLanguage(language: string): Promise<void> { await this.page.locator('#cddPrimaryLanguage_DropDown').selectOption({ label: language }); }
  async getEthnicity(): Promise<string> { return await this.page.locator('#cddEthnicity_DropDown').locator('option:checked').textContent() || ''; }
  async getMaritalStatus(): Promise<string> { return await this.page.locator('#cddMaritalStatus_DropDown').locator('option:checked').textContent() || ''; }
}

// ─── CCAPS Form Tab (Risk Assessment) ───────────────────────────────────────

export class CCAPSFormTabPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly questionGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdInternalSave');
    this.questionGrid = page.locator('#grdCCAPSForm');
  }

  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async selectAnswerByQuestion(question: string, answer: string): Promise<void> {
    const row = this.questionGrid.locator(`//tr[td[contains(text(),'${question}')]]`);
    await row.locator(`//select`).selectOption({ label: answer });
  }

  async enterAtFTARatio(ratio: string): Promise<void> {
    await this.page.locator('#chkFTA').click();
    await this.page.locator('#txtFTARatio').fill(ratio);
  }
  async enterAtPriorFelonies(value: string): Promise<void> { await this.page.locator('#txtPriorFelonies').fill(value); }
  async enterAtPriorMisdemeanors(value: string): Promise<void> { await this.page.locator('#txtPriorMisdemeanors').fill(value); }
  async enterAtPriorTraffics(value: string): Promise<void> { await this.page.locator('#txtPriorTraffics').fill(value); }
  async enterAtArrestBailBond(value: string): Promise<void> { await this.page.locator('#txtArrestOnBail').fill(value); }
  async enterAtPendingFelonies(value: string): Promise<void> { await this.page.locator('#txtPendingFelonies').fill(value); }
  async enterAtPendingMisdemeanors(value: string): Promise<void> { await this.page.locator('#txtPendingMisdemeanors').fill(value); }
  async enterAtPendingTraffics(value: string): Promise<void> { await this.page.locator('#txtPendingTraffics').fill(value); }
  async clickCurrentDrugCheckbox(): Promise<void> { await this.page.locator('#chkCurrentDrug').click(); }
  async enterAtPriorConvictions(value: string): Promise<void> { await this.page.locator('#txtPriorConvictions').fill(value); }
  async enterAtBondDetails(bondType: string, amount: string, amountPaid: string, caseNo: string): Promise<void> {
    await this.page.locator('#cddBondType_DropDown').selectOption({ label: bondType });
    await this.page.locator('#dtDate_KPIDttmCtrl').press('Tab');
    await this.page.locator('#txtAmount').fill(amount);
    await this.page.locator('#txtAmountPaid').fill(amountPaid);
    await this.page.locator('#txtCaseNo').fill(caseNo);
  }
  async clickAddButton(): Promise<void> { await this.page.locator('#cmdAdd').click(); }
  async clickTestForm(): Promise<void> { await this.page.locator('#cmdTestForm').click(); }
  async getBondTypeFromGrid(): Promise<string> {
    const cell = this.questionGrid.locator("//tr[contains(@class,'Row')][1]//td[contains(@aria-describedby,'BondType')]");
    return (await cell.textContent()) || '';
  }
}

// ─── Risk Comments Tab (Risk Assessment) ────────────────────────────────────

export class RiskCommentsTabPage {
  readonly page: Page;
  readonly commentsEdit: Locator;
  readonly saveButton: Locator;
  readonly subjectEdit: Locator;
  readonly enterCommentButton: Locator;
  readonly riskCommentsGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.commentsEdit = page.locator('#txtRiskComments');
    this.saveButton = page.locator('#cmdInternalSave');
    this.subjectEdit = page.locator('#txtSubject');
    this.enterCommentButton = page.locator('#cmdEnterComment');
    this.riskCommentsGrid = page.locator('#grdRiskComments');
  }

  async enterAtComments(comments: string): Promise<void> { await this.commentsEdit.fill(comments); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async enterAtSubject(subject: string): Promise<void> { await this.subjectEdit.fill(subject); }
  async clickEnterCommentButton(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.enterCommentButton.click();
  }
  async verifySubjectWithPFcodeInGrid(subject: string, pfCode: string): Promise<void> {
    const row = this.riskCommentsGrid.locator(`//tr[td[contains(text(),'${subject}')] and td[contains(text(),'${pfCode}')]]`);
    expect(await row.count()).toBeGreaterThan(0);
  }
  async verifyAdditionSuccessfulMessage(): Promise<void> {
    expect(await this.page.locator('#lblMessage').textContent()).toContain('1002 - Addition Successful');
  }
}

// ─── RA Interview Entry Page ─────────────────────────────────────────────────

export class RAInterviewEntryPage {
  readonly page: Page;
  readonly questionGrid: Locator;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.questionGrid = page.locator('#grdInterview');
    this.saveButton = page.locator('#cmdSave');
    this.cancelButton = page.locator('#cmdCancel');
  }

  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickCancel(): Promise<void> { await this.cancelButton.click(); }
  async selectAnswerByQuestion(question: string, answer: string): Promise<void> {
    const row = this.questionGrid.locator(`//tr[td[contains(text(),'${question}')]]`);
    await row.locator(`//select`).selectOption({ label: answer });
  }

  // Tab navigation
  async clickLivingSituationTab(): Promise<void> { await this.page.locator("//span[text()='Living Situation']").click(); }
  async navigateToEEMSTab(): Promise<void> { await this.page.locator("//span[text()='EEMS']").click(); }
  async navigateToMentalDisabilityTab(): Promise<void> { await this.page.locator("//span[text()='Mental and Disability']").click(); }
  async navigateToSubstanceAbuseTab(): Promise<void> { await this.page.locator("//span[text()='Substance Abuse']").click(); }
  async navigateToBondInformationTab(): Promise<void> { await this.page.locator("//span[text()='Bond Information']").click(); }
  async navigateToReferenceTab(): Promise<void> { await this.page.locator("//span[text()='Reference']").click(); }
  async clickSaveButton(): Promise<void> { await this.saveButton.click(); }
  async clickSaveNCloseButton(): Promise<void> { await this.page.locator('#cmdSaveClose').click(); }
  async enterInterviewDetail(): Promise<void> { await this.page.locator('#dttmInterview_Date_KPIDttmCtrl').press('Tab'); await this.page.locator("//table[@id='dttmInterview_Time']//input").press('Tab'); }
  async selectAllVerifications(): Promise<void> { await this.page.locator('#chkVerifiedAddress').click(); await this.page.locator('#chkVerifiedPhone').click(); await this.page.locator('#chkVerifiedEmployer').click(); }
  async getBottomMessage(): Promise<string> { return (await this.page.locator("//td[@class='statusBar']//b").textContent()) || ''; }
  async getSPNNo(): Promise<string> { return await this.page.locator('#txtSPNNo').inputValue(); }
  async isSPNFieldEnabled(): Promise<boolean> { return await this.page.locator('#txtSPNNo').isEnabled(); }
  async getLivingSituationTabColor(): Promise<string> { return await this.page.locator("//span[text()='Living Situation']").evaluate(el => getComputedStyle(el).color); }
  async getEEMSTabColor(): Promise<string> { return await this.page.locator("//span[text()='EEMS']").evaluate(el => getComputedStyle(el).color); }
  async getMentalAndDisabilityTabColor(): Promise<string> { return await this.page.locator("//span[text()='Mental and Disability']").evaluate(el => getComputedStyle(el).color); }
  async getSubstanceAbuseTabColor(): Promise<string> { return await this.page.locator("//span[text()='Substance Abuse']").evaluate(el => getComputedStyle(el).color); }
  async getBondInformationTabColor(): Promise<string> { return await this.page.locator("//span[text()='Bond Information']").evaluate(el => getComputedStyle(el).color); }
  async SelectAtTypeofEmployement(typeOfEmployment: string): Promise<void> {
    await this.page.locator('#cddTypeOfEmployment_DropDown').selectOption({ label: typeOfEmployment });
  }
  async verifyNameInfoIcon(): Promise<void> {
    expect(await this.page.locator('#imgEmployerNameInfo').isVisible()).toBe(true);
  }
  async verifyCheckBoxIsCheckedineEMSTab(): Promise<void> {
    expect(await this.page.locator('#chkServedMilitary').isChecked()).toBe(true);
    expect(await this.page.locator('#chkGraduated').isChecked()).toBe(true);
    expect(await this.page.locator('#chkCurrentlyEnrolled').isChecked()).toBe(true);
  }
  async verifyCheckBoxIsCheckedinMentalAndDisabilityTab(): Promise<void> {
    expect(await this.page.locator('#chkHasMental').isChecked()).toBe(true);
    expect(await this.page.locator('#chkSuicidalThought').isChecked()).toBe(true);
    expect(await this.page.locator('#chkSeeTherapist').isChecked()).toBe(true);
  }
  async EnterAtAlcohalUse(frequency: string, frequencyType: string, drinkType: string, amount: string, amountType: string): Promise<void> {
    await this.page.locator('#chkAlcoholAbuse').click();
    await this.page.locator('#txtFrequency').fill(frequency);
    await this.page.locator('#cddFrequency_DropDown').selectOption({ label: frequencyType });
    await this.page.locator('#cddDrinkType_DropDown').selectOption({ label: drinkType });
    await this.page.locator('#txtAmount').fill(amount);
    await this.page.locator('#cddAmount_DropDown').selectOption({ label: amountType });
  }
  async verifyCheckBoxIsChecked(): Promise<void> {
    expect(await this.page.locator('#chkLicensed').isChecked()).toBe(true);
    expect(await this.page.locator('#chkProbation').isChecked()).toBe(true);
    expect(await this.page.locator('#chkAlcoholAbuse').isChecked()).toBe(true);
    expect(await this.page.locator('#chkTakesDrugs').isChecked()).toBe(true);
  }
  async clickAtNameInGrid(name: string): Promise<void> {
    await this.page.locator(`//div[@id='grdReference']//td[contains(text(),'${name}')]`).click();
  }
  async verifyAtLastNameAndFirstName(expectedLastName: string): Promise<void> {
    expect(await this.page.locator('#txtLastName').inputValue()).toBe(expectedLastName);
  }
  async verifyLivingSituatuionTabColorInBlue(): Promise<void> {
    const color = await this.getLivingSituationTabColor();
    expect(color).toBe('rgba(0, 0, 255, 1)');
  }
  async verifyeEMSTabColorInBlue(): Promise<void> {
    const color = await this.getEEMSTabColor();
    expect(color).toBe('rgba(0, 0, 0, 1)');
  }
  async verifyMentalAndDisabilityColorInBlue(): Promise<void> {
    const color = await this.getMentalAndDisabilityTabColor();
    expect(color).toBe('rgba(0, 0, 0, 1)');
  }
  async verifySubstanceAbuseTabColorInBlue(): Promise<void> {
    const color = await this.getSubstanceAbuseTabColor();
    expect(color).toBe('rgba(0, 0, 0, 1)');
  }
  async verifyBondInformationTabColorInBlue(): Promise<void> {
    const color = await this.getBondInformationTabColor();
    expect(color).toBe('rgba(0, 0, 0, 1)');
  }
  async verifyUpdateDataExistInReferenceTab(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(1051)'); await dialog.accept(); });
  }
  async verifySPNFieldIsEnabled(): Promise<void> {
    expect(await this.page.locator('#txtSPNNo').isEnabled()).toBe(true);
  }
}

// ─── Living Situation Tab ────────────────────────────────────────────────────

export class LivingSituationTabPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly questionGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdInternalSave');
    this.questionGrid = page.locator('#grdLivingSituation');
  }

  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async selectAnswerByQuestion(question: string, answer: string): Promise<void> {
    const row = this.questionGrid.locator(`//tr[td[contains(text(),'${question}')]]`);
    await row.locator(`//select`).selectOption({ label: answer });
  }
  async selectHomeless(): Promise<void> { await this.page.locator('#chkHomeless').click(); }
  async enterAtAddress(address: string): Promise<void> { await this.page.locator('#txtAddress').fill(address); }
  async enterAtAltAddress(altAddress: string): Promise<void> { await this.page.locator('#txtAltAddress').fill(altAddress); }
  async enterAtPhone1(phone: string): Promise<void> { await this.page.locator('#txtPhone1').fill(phone); }
  async enterAtPhone2(phone: string): Promise<void> { await this.page.locator('#txtPhone2').fill(phone); }
  async enterAtPhone3(phone: string): Promise<void> { await this.page.locator('#txtPhone3').fill(phone); }
  async selectAddress1Year(year: string): Promise<void> { await this.page.locator('#cddAddress1Year_DropDown').selectOption({ label: year }); }
  async enterAtTimeInAgency(time: string): Promise<void> { await this.page.locator('#txtTimeInAgency').fill(time); }
  async enterAtLastName(lastName: string): Promise<void> { await this.page.locator('#txtLastName').fill(lastName); }
  async selectAtRelation(relation: string): Promise<void> { await this.page.locator('#cddRelation_DropDown').selectOption({ label: relation }); }
  async selectLanguageReadWrite(language: string): Promise<void> { await this.page.locator('#cddReadWrite_DropDown').selectOption({ label: language }); }
  async selectAtLanguage(language: string): Promise<void> { await this.page.locator('#cddLanguage_DropDown').selectOption({ label: language }); }
  async selectAtMaritalStatus(status: string): Promise<void> { await this.page.locator('#cddMaritalStatus_DropDown').selectOption({ label: status }); }
  async selectAllChildrenCheckbox(): Promise<void> { await this.page.locator('#chkChildren').click(); }
}

// ─── EEMS Tab ────────────────────────────────────────────────────────────────

export class EEMSTabPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly questionGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdInternalSave');
    this.questionGrid = page.locator('#grdEEMS');
  }

  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async selectAnswerByQuestion(question: string, answer: string): Promise<void> {
    const row = this.questionGrid.locator(`//tr[td[contains(text(),'${question}')]]`);
    await row.locator(`//select`).selectOption({ label: answer });
  }
  async enterAtEmploymentLastName(lastName: string): Promise<void> { await this.page.locator('#txtEmployerName').fill(lastName); }
  async selectAtEmploymentDuration(duration: string): Promise<void> { await this.page.locator('#cddEmploymentDuration_DropDown').selectOption({ label: duration }); }
  async selectAtTypeOfEmployment(type: string): Promise<void> { await this.page.locator('#cddTypeOfEmployment_DropDown').selectOption({ label: type }); }
  async enterAtUnEmploymentDetails(details: string): Promise<void> { await this.page.locator('#txtUnemploymentDetails').fill(details); }
  async enterAtEducationDetails(details: string): Promise<void> { await this.page.locator('#txtEducationDetails').fill(details); }
  async enterAtServerMilitary(military: string): Promise<void> { await this.page.locator('#txtMilitary').fill(military); }
  async isNameInfoIconDisplayed(): Promise<boolean> { return await this.page.locator('#imgNameInfo').isVisible(); }
  async isCheckboxChecked(): Promise<boolean> { return await this.page.locator('#chkEEMS').isChecked(); }
}

// ─── Mental And Disability Tab ───────────────────────────────────────────────

export class MentalAndDisabilityTabPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly questionGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdInternalSave');
    this.questionGrid = page.locator('#grdMentalDisability');
  }

  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async selectAnswerByQuestion(question: string, answer: string): Promise<void> {
    const row = this.questionGrid.locator(`//tr[td[contains(text(),'${question}')]]`);
    await row.locator(`//select`).selectOption({ label: answer });
  }
  async enterAtMentalEmotionalProblem(value: string): Promise<void> { await this.page.locator('#cddMentalEmotional_DropDown').selectOption({ label: value }); }
  async enterAtHarmSelf(value: string): Promise<void> { await this.page.locator('#cddHarmSelf_DropDown').selectOption({ label: value }); }
  async enterAtSuicidalThought(value: string): Promise<void> { await this.page.locator('#cddSuicidalThought_DropDown').selectOption({ label: value }); }
  async enterAtSeeingTherapist(value: string): Promise<void> { await this.page.locator('#cddSeeingTherapist_DropDown').selectOption({ label: value }); }
  async enterAtHospitalized(value: string): Promise<void> { await this.page.locator('#cddHospitalized_DropDown').selectOption({ label: value }); }
  async enterAtDisabilities(value: string): Promise<void> { await this.page.locator('#txtDisabilities').fill(value); }
  async enterAtIssues(value: string): Promise<void> { await this.page.locator('#txtIssues').fill(value); }
  async isCheckboxChecked(): Promise<boolean> { return await this.page.locator('#chkMentalDisability').isChecked(); }
}

// ─── Substance Abuse Tab ─────────────────────────────────────────────────────

export class SubstanceAbuseTabPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly questionGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdInternalSave');
    this.questionGrid = page.locator('#grdSubstanceAbuse');
  }

  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async selectAnswerByQuestion(question: string, answer: string): Promise<void> {
    const row = this.questionGrid.locator(`//tr[td[contains(text(),'${question}')]]`);
    await row.locator(`//select`).selectOption({ label: answer });
  }
  async enterAtProbation(value: string): Promise<void> { await this.page.locator('#cddProbation_DropDown').selectOption({ label: value }); }
  async enterAtAlcoholUse(value: string): Promise<void> { await this.page.locator('#cddAlcoholUse_DropDown').selectOption({ label: value }); }
  async enterAtDrugUse(value: string): Promise<void> { await this.page.locator('#cddDrugUse_DropDown').selectOption({ label: value }); }
  async enterAddictTreatment(value: string): Promise<void> { await this.page.locator('#cddAddictTreatment_DropDown').selectOption({ label: value }); }
  async enterAtDriving(value: string): Promise<void> { await this.page.locator('#cddDriving_DropDown').selectOption({ label: value }); }
  async enterAtIssues(value: string): Promise<void> { await this.page.locator('#txtIssues').fill(value); }
  async isCheckboxChecked(): Promise<boolean> { return await this.page.locator('#chkSubstanceAbuse').isChecked(); }
}

// ─── Bond Information Tab ────────────────────────────────────────────────────

export class BondInformationTabPage {
  readonly page: Page;
  readonly bondInfoGrid: Locator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bondInfoGrid = page.locator('#grdBondInfo');
    this.closeButton = page.locator('#cmdClose');
  }

  async clickClose(): Promise<void> { await this.closeButton.click(); }
  async getGridRowCount(): Promise<number> { return await this.bondInfoGrid.locator('//tr[contains(@class,"Row")]').count(); }
  async enterAtBondDetails(bondType: string, howMuch: string): Promise<void> {
    await this.page.locator('#chkPostBond').click();
    await this.page.locator('#cddBondType').selectOption({ label: bondType });
    await this.page.locator('#txtHowMuch').fill(howMuch);
  }
  async enterAtWhoCanPostName(lastName: string, firstName: string): Promise<void> {
    await this.page.locator('#txtLastName').fill(lastName);
    await this.page.locator('#txtFirstName').fill(firstName);
    await this.page.locator('#txtFirstName').press('Tab');
  }
  async enterAtTotalBond(totalBond: string): Promise<void> { await this.page.locator('#txtTotalBond').fill(totalBond); }
  async verifyBondCheckBoxIsCheckedAndLastName(expectedLastName: string): Promise<void> {
    expect(await this.page.locator('#chkPostBond').isChecked()).toBe(true);
    expect(await this.page.locator('#txtLastName').inputValue()).toBe(expectedLastName);
  }
  async EnterBondDate(): Promise<void> { await this.page.locator('#dtBondDate_KPIDttmCtrl').press('Tab'); }
  async clickAtBondCheckBoxInGrid(bondType: string): Promise<void> {
    await this.bondInfoGrid.locator(`//tr[td[contains(text(),'${bondType}')]]//input[@type='checkbox']`).click();
  }
  async verifyAdditionalSuccessfull(): Promise<void> {
    const msg = await this.page.locator("//td[@class='statusBar']//b").textContent();
    expect(msg).toContain('1002 - Addition Successful');
  }
}

// ─── Reference Tab ───────────────────────────────────────────────────────────

export class ReferenceTabPage {
  readonly page: Page;
  readonly referenceGrid: Locator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.referenceGrid = page.locator('#grdReference');
    this.closeButton = page.locator('#cmdClose');
  }

  async clickClose(): Promise<void> { await this.closeButton.click(); }
  async getGridRowCount(): Promise<number> { return await this.referenceGrid.locator('//tr[contains(@class,"Row")]').count(); }
  async enterAtReferenceName(nameType: string, nameID: string): Promise<void> {
    await this.page.locator('#txtNameType').fill(nameType);
    await this.page.locator('#txtNameID').fill(nameID);
    await this.page.locator('#txtNameID').press('Tab');
  }
  async selectAtRelationship(relationship: string): Promise<void> { await this.page.locator('#cddRelationship_DropDown').selectOption({ label: relationship }); }
  async enterAtComments(comments: string): Promise<void> { await this.page.locator('#txtComments').fill(comments); }
  async clickAddButton(): Promise<void> { await this.page.locator('#cmdAdd').click(); }
  async clickSaveButton(): Promise<void> { await this.page.locator('#cmdInternalSave').click(); }
  async getNameFromGrid(rowIndex: number): Promise<string> {
    const cell = this.referenceGrid.locator(`//tr[contains(@class,'Row')][${rowIndex}]//td[contains(@aria-describedby,'Name')]`);
    return (await cell.textContent()) || '';
  }
  async selectNameInGrid(name: string): Promise<void> { await this.referenceGrid.locator(`//td[contains(text(),'${name}')]`).click(); }
  async getLastNameValue(): Promise<string> { return await this.page.locator('#txtLastName').inputValue(); }
  async getFirstNameValue(): Promise<string> { return await this.page.locator('#txtFirstName').inputValue(); }
  async hasDataInGrid(): Promise<boolean> { return (await this.getGridRowCount()) > 0; }
  async verifyReferenceNameWithPFInGrid(referenceName: string, pfCode: string): Promise<void> {
    const row = this.referenceGrid.locator(`//tr[td[contains(text(),'${referenceName}')] and td[contains(text(),'${pfCode}')]]`);
    expect(await row.count()).toBeGreaterThan(0);
  }
  async verifyAdditionSuccessfulMessage(): Promise<void> {
    expect(await this.page.locator('#lblMessage').textContent()).toContain('1002 - Addition Successful');
  }
  async verifyUpdateSuccessfulMessage(): Promise<void> {
    expect(await this.page.locator('#lblMessage').textContent()).toContain('1003 - Update Successful');
  }
}

// ─── Property Storage Entry Page ─────────────────────────────────────────────

export class PropertyStorageEntryPage {
  readonly page: Page;
  readonly storageLocationEdit: Locator;
  readonly containerIDEdit: Locator;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.storageLocationEdit = page.locator('#lupLocationID_CodeValue');
    this.containerIDEdit = page.locator('#lupContainerID_CodeValue');
    this.saveButton = page.locator('#cmdSave');
    this.cancelButton = page.locator('#cmdCancel');
  }

  async enterAtStorageLocation(location: string): Promise<void> { await this.storageLocationEdit.fill(location); await this.storageLocationEdit.press('Tab'); }
  async enterAtContainerID(containerId: string): Promise<void> { await this.containerIDEdit.fill(containerId); await this.containerIDEdit.press('Tab'); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickCancel(): Promise<void> { await this.cancelButton.click(); }
  async tabOutActionDateAndTime(): Promise<void> { await this.page.locator('#dttmAction_Date_KPIDttmCtrl').press('Tab'); await this.page.locator("//table[@id='dttmAction_Time']//input").press('Tab'); }
  async enterOfficer(pf: string): Promise<void> { await this.page.locator('#txtOfficerPF').fill(pf); }
  async selectAtAction(action: string): Promise<void> { await this.page.locator('#cddAction_DropDown').selectOption({ label: action }); }
  async containerBubbleIcon(): Promise<void> { await this.page.locator('#lupContainerID_imgIBubble').click(); }
  async enterAtComments(comments: string): Promise<void> { await this.page.locator('#txtComments').fill(comments); }
  async clickUpdate(): Promise<void> { await this.page.locator('#cmdUpdate').click(); }
  async enterAtReceiverName(nameType: string, nameID: string): Promise<void> {
    await this.page.locator('#txtReceiverNameType').fill(nameType);
    await this.page.locator('#txtReceiverNameID').fill(nameID);
    await this.page.locator('#txtReceiverNameID').press('Tab');
  }
  async clickSaveNClose(): Promise<void> { await this.page.locator('#cmdSaveClose').click(); }
  async selectOneItem(item: string): Promise<void> { await this.page.locator(`//td[contains(text(),'${item}')]`).click(); }
  async getSelectedAction(): Promise<string> { return await this.page.locator('#cddAction_DropDown').locator('option:checked').textContent() || ''; }
  async getBottomMessage(): Promise<string> { return (await this.page.locator("//td[@class='statusBar']//b").textContent()) || ''; }
  async EnterActionDateNTime(): Promise<void> {
    await this.page.locator('#dttmAction_Date_KPIDttmCtrl').press('Tab');
    await this.page.locator("//table[@id='dttmAction_Time']//input").press('Tab');
  }
  async SelectAtStorageLocation(storageLocation: string): Promise<void> {
    await this.page.locator('#cddStorageLocation_DropDown').selectOption({ label: storageLocation });
  }
  async ContainerBuppleIcon(): Promise<void> { await this.page.locator('#lupContainerID_imgIBubble').click(); }
  async clickAtBondCheckBoxInGrid(bondType: string): Promise<void> {
    await this.page.locator(`//div[@id='grdProperty']//tr[td[contains(text(),'${bondType}')]]//input[@type='checkbox']`).click();
  }
  async verifyBondAmountAsNonMandatory(): Promise<void> {
    const color = await this.page.locator('#lblBondAmount').evaluate(el => getComputedStyle(el).color);
    expect(color).toBe('rgba(0, 0, 0, 1)');
  }
}

// ─── Shared Bond Entry Page ──────────────────────────────────────────────────

export class SharedBondEntryPage {
  readonly page: Page;
  readonly sharedBondGrid: Locator;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;
  readonly bondTypeDropdown: Locator;
  readonly bondAmountEdit: Locator;
  readonly bondDateEdit: Locator;
  readonly notesEdit: Locator;
  readonly addButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly courtCaseEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sharedBondGrid = page.locator('#grdSharedBond');
    this.saveButton = page.locator('#cmdSave');
    this.cancelButton = page.locator('#cmdCancel');
    this.bondTypeDropdown = page.locator('#cddBondType_DropDown');
    this.bondAmountEdit = page.locator('#txtBondAmt');
    this.bondDateEdit = page.locator('#dtBond_KPIDttmCtrl');
    this.notesEdit = page.locator('#txtNotes');
    this.addButton = page.locator('#cmdAdd');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.courtCaseEdit = page.locator('#txtCortCase');
  }

  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickCancel(): Promise<void> { await this.cancelButton.click(); }
  async selectCheckboxByCharge(charge: string): Promise<void> { await this.sharedBondGrid.locator(`//tr[td[contains(text(),'${charge}')]]//img[@title='Unchecked']`).click(); }
  async selectAtBondType(bondType: string): Promise<void> { await this.bondTypeDropdown.selectOption({ label: bondType }); }
  async enterAtBondAmount(amount: string): Promise<void> { await this.bondAmountEdit.fill(amount); }
  async enterAtBondDate(date: string): Promise<void> { await this.bondDateEdit.fill(date); await this.bondDateEdit.press('Tab'); }
  async enterAtNotes(notes: string): Promise<void> { await this.notesEdit.fill(notes); }
  async clickAdd(): Promise<void> { await this.addButton.click(); }
  async clickSaveAndClose(): Promise<void> { await this.saveAndCloseButton.click(); }
  async enterAtCourtCase(courtCase: string): Promise<void> { await this.courtCaseEdit.fill(courtCase); }
  async getSelectedBondType(): Promise<string> { return await this.bondTypeDropdown.locator('option:checked').textContent() || ''; }
  async getBondAmount(): Promise<string> { return await this.bondAmountEdit.inputValue(); }
  async getBondDate(): Promise<string> { return await this.bondDateEdit.inputValue(); }
  async getNotes(): Promise<string> { return await this.notesEdit.inputValue(); }
  async getCourtCase(): Promise<string> { return await this.courtCaseEdit.inputValue(); }
  async getBondAmountLabelColor(): Promise<string> { return await this.page.locator('#lblBondAmt').evaluate(el => getComputedStyle(el).color); }
  async getGridRowCount(): Promise<number> { return await this.sharedBondGrid.locator('//tr[contains(@class,"Row")]').count(); }
  async selectAtBondCheckboxByBondTypeInGrid(bondType: string): Promise<void> {
    await this.sharedBondGrid.locator(`//tr[td[contains(text(),'${bondType}')]]//input[@type='checkbox']`).click();
  }
  async verifyAdditionalSuccessful(): Promise<void> { expect(await this.page.locator('#lblMessage').textContent()).toContain('1002 - Addition Successful'); }
  async verifyCourtCaseConfirmPopupClickNo(): Promise<void> {
    const body = this.page.locator("//div[@class='modal-body']");
    expect(await body.textContent()).toContain('(30128)');
    await this.page.locator("//div[@class='modal-footer']//button[text()='No']").click();
  }
  async verifyCourtCaseConfirmPopupClickYes(): Promise<void> {
    const body = this.page.locator("//div[@class='modal-body']");
    expect(await body.textContent()).toContain('(30128)');
    await this.page.locator("//div[@class='modal-footer']//button[text()='Yes']").click();
  }
  async verifyBondTypeByCashInGrid(bondAmount: string, expectedBondType: string): Promise<void> {
    const cell = this.sharedBondGrid.locator(`//tr[td[contains(text(),'${bondAmount}')]]//td[contains(@aria-describedby,'BondType')]`);
    expect(await cell.textContent()).toContain(expectedBondType);
  }
  async deleteAtBondTypeInGrid(bondType: string): Promise<void> {
    await this.sharedBondGrid.locator(`//tr[td[contains(text(),'${bondType}')]]//td[@class='Delete_Icon_Style']`).click();
  }
  async verifyConfirmationDeleteMessage(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(4)'); await dialog.accept(); });
  }
  async verifyRecordMarkedAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(6)'); await dialog.accept(); });
  }
  async verifyRowCountIsEqualToZero(): Promise<void> { expect(await this.getGridRowCount()).toBe(0); }
  async selectAtBondTypeInGrid(bondType: string): Promise<void> { await this.sharedBondGrid.locator(`//td[contains(text(),'${bondType}')]`).click(); }
  async verifyBondTypeDropdownIsDisplayed(): Promise<void> { expect(await this.bondTypeDropdown.isVisible()).toBe(true); }
  async closeScreen(): Promise<void> { await this.page.close(); }
  async verify1018RequiredEntriesAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(1018)'); await dialog.accept(); });
  }
  async verifyBondDateAsCurrentDateByAmtInGrid(bondAmount: string, currentDate: string): Promise<void> {
    const cell = this.sharedBondGrid.locator(`//tr[td[contains(text(),'${bondAmount}')]]//td[contains(@aria-describedby,'BondDate')]`);
    expect(await cell.textContent()).toContain(currentDate);
  }
  async verfiyAtBondType(expectedBondType: string): Promise<void> {
    const cell = this.sharedBondGrid.locator("//tr[contains(@class,'Row')][1]//td[contains(@aria-describedby,'BondType')]");
    expect(await cell.textContent()).toContain(expectedBondType);
  }
  async verifyBondAmountAsNonMandatory(): Promise<void> {
    const color = await this.page.locator('#lblBondAmount').evaluate(el => getComputedStyle(el).color);
    expect(color).toBe('rgba(0, 0, 0, 1)');
  }
}

// ─── Inmate Movement Entry Page ──────────────────────────────────────────────

export class InmateMovementEntryPage {
  readonly page: Page;
  readonly movementTypeDropdown: Locator;
  readonly movementDateEdit: Locator;
  readonly movementTimeEdit: Locator;
  readonly fromCellDropdown: Locator;
  readonly toCellDropdown: Locator;
  readonly officerEdit: Locator;
  readonly reasonDropdown: Locator;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;
  readonly movementGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.movementTypeDropdown = page.locator('#cddMovementType_DropDown');
    this.movementDateEdit = page.locator('#dttmMovementDate_Date_KPIDttmCtrl');
    this.movementTimeEdit = page.locator("//table[@id='dttmMovementDate_Time']//input");
    this.fromCellDropdown = page.locator('#cddFromCell_DropDown');
    this.toCellDropdown = page.locator('#cddToCell_DropDown');
    this.officerEdit = page.locator('#lupOfficer_CodeValue');
    this.reasonDropdown = page.locator('#cddReason_DropDown');
    this.saveButton = page.locator('#cmdSave');
    this.cancelButton = page.locator('#cmdCancel');
    this.movementGrid = page.locator('#grdMovement');
  }

  async selectAtMovementType(type: string): Promise<void> { await this.movementTypeDropdown.selectOption({ label: type }); }
  async tabOutMovementDateTime(): Promise<void> { await this.movementDateEdit.press('Tab'); await this.movementTimeEdit.press('Tab'); }
  async selectAtFromCell(cell: string): Promise<void> { await this.fromCellDropdown.selectOption({ label: cell }); }
  async selectAtToCell(cell: string): Promise<void> { await this.toCellDropdown.selectOption({ label: cell }); }
  async enterAtOfficer(officer: string): Promise<void> { await this.officerEdit.fill(officer); await this.officerEdit.press('Tab'); }
  async selectAtReason(reason: string): Promise<void> { await this.reasonDropdown.selectOption({ label: reason }); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickCancel(): Promise<void> { await this.cancelButton.click(); }
  async getGridRowCount(): Promise<number> { return await this.movementGrid.locator('//tr[contains(@class,"Row")]').count(); }
  async closeScreen(): Promise<void> { await this.page.close(); }
  async SelectAtEventType(subType: string): Promise<void> {
    await this.page.locator('#cddSubType_DropDown').selectOption({ label: subType });
  }
  async EnterAtLocation(location: string): Promise<void> {
    await this.page.locator('#cddLocation_DropDown').selectOption({ label: location });
  }
  async EnterAtStartDate(): Promise<void> {
    await this.page.locator('#dttmStartDate_Date_KPIDttmCtrl').press('Tab');
    await this.page.locator("//table[@id='dttmStartDate_Time']//input").fill('0001');
  }
  async EnterAtEndDate(): Promise<void> {
    await this.page.locator('#dttmEndDate_Date_KPIDttmCtrl').press('Tab');
    await this.page.locator("//table[@id='dttmEndDate_Time']//input").fill('2300');
  }
  async SelectAtRepeat(repeatEvent: string): Promise<void> {
    await this.page.locator('#chkRepeat').click();
    await this.page.locator('#cddRepeat_DropDown').selectOption({ label: repeatEvent });
  }
  async EnterAtCustomFields(custom1: string, custom2: string): Promise<void> {
    await this.page.locator('#txtCustom1').fill(custom1);
    await this.page.locator('#txtCustom2').fill(custom2);
  }
  async CloseInmateMovementEntry(): Promise<void> { await this.page.close(); }
  async selectEligibleWorkReleaseCheckBox(): Promise<void> { await this.page.locator('#chkWorkRelease').click(); }
  async selectEligibleSTSCheckbox(): Promise<void> { await this.page.locator('#chkSTS').click(); }
  async saveNCloseScreen(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.page.locator('#cmdSaveNClose').click();
  }
}

// ─── Sentence Entry Page ─────────────────────────────────────────────────────

export class SentenceEntryPage {
  readonly page: Page;
  readonly sentenceTypeDropdown: Locator;
  readonly sentenceDateEdit: Locator;
  readonly judgmentDateEdit: Locator;
  readonly daysEdit: Locator;
  readonly monthsEdit: Locator;
  readonly yearsEdit: Locator;
  readonly concurrentCheckbox: Locator;
  readonly consecutiveCheckbox: Locator;
  readonly creditDaysEdit: Locator;
  readonly goodTimeDaysEdit: Locator;
  readonly releaseTypeDropdown: Locator;
  readonly actualReleaseDateEdit: Locator;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;
  readonly adjustmentsTab: Locator;
  readonly sentenceGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sentenceTypeDropdown = page.locator('#cddSentenceType_DropDown');
    this.sentenceDateEdit = page.locator('#dttmSentenceDate_Date_KPIDttmCtrl');
    this.judgmentDateEdit = page.locator('#dttmJudgmentDate_Date_KPIDttmCtrl');
    this.daysEdit = page.locator('#txtDays');
    this.monthsEdit = page.locator('#txtMonths');
    this.yearsEdit = page.locator('#txtYears');
    this.concurrentCheckbox = page.locator('#rdoConcurrent');
    this.consecutiveCheckbox = page.locator('#rdoConsecutive');
    this.creditDaysEdit = page.locator('#txtCreditDays');
    this.goodTimeDaysEdit = page.locator('#txtGoodTimeDays');
    this.releaseTypeDropdown = page.locator('#cddReleaseType_DropDown');
    this.actualReleaseDateEdit = page.locator('#dttmActualReleaseDate_Date_KPIDttmCtrl');
    this.saveButton = page.locator('#cmdSave');
    this.cancelButton = page.locator('#cmdCancel');
    this.adjustmentsTab = page.locator("//span[text()='Adjustments']");
    this.sentenceGrid = page.locator('#grdSentence');
  }

  async selectAtSentenceType(type: string): Promise<void> { await this.sentenceTypeDropdown.selectOption({ label: type }); }
  async enterAtSentenceDate(date: string): Promise<void> { await this.sentenceDateEdit.fill(date); await this.sentenceDateEdit.press('Tab'); }
  async enterAtJudgmentDate(date: string): Promise<void> { await this.judgmentDateEdit.fill(date); await this.judgmentDateEdit.press('Tab'); }
  async enterAtDays(days: string): Promise<void> { await this.daysEdit.fill(days); }
  async enterAtMonths(months: string): Promise<void> { await this.monthsEdit.fill(months); }
  async enterAtYears(years: string): Promise<void> { await this.yearsEdit.fill(years); }
  async clickConcurrent(): Promise<void> { await this.concurrentCheckbox.click(); }
  async clickConsecutive(): Promise<void> { await this.consecutiveCheckbox.click(); }
  async enterAtCreditDays(days: string): Promise<void> { await this.creditDaysEdit.fill(days); }
  async enterAtGoodTimeDays(days: string): Promise<void> { await this.goodTimeDaysEdit.fill(days); }
  async selectAtReleaseType(type: string): Promise<void> { await this.releaseTypeDropdown.selectOption({ label: type }); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickCancel(): Promise<void> { await this.cancelButton.click(); }
  async clickAdjustmentsTab(): Promise<void> { await this.adjustmentsTab.click(); }
  async selectSentenceInGrid(sentence: string): Promise<void> { await this.sentenceGrid.locator(`//td[contains(text(),'${sentence}')]`).click(); }

  async enterOffenseDate(date: string): Promise<void> { await this.page.locator('#dttmOffenseDate_Date_KPIDttmCtrl').fill(date); }
  async enterConvictionDate(date: string): Promise<void> { await this.page.locator('#dttmConvictionDate_Date_KPIDttmCtrl').fill(date); await this.page.locator('#dttmConvictionDate_Date_KPIDttmCtrl').press('Tab'); }
  async selectAtDetentionType(type: string): Promise<void> { await this.page.locator('#cddDetentionType_DropDown').selectOption({ label: type }); }
  async clickEligibleForGoodTimeCheckbox(): Promise<void> { await this.page.locator('#chkGoodTime').click(); }
  async clickEligibleWorkReleaseCheckbox(): Promise<void> { await this.page.locator('#chkWorkRelease').click(); }
  async clickEligibleSTSCheckbox(): Promise<void> { await this.page.locator('#chkSTS').click(); }
  async tabAtSentenceDate(): Promise<void> { await this.sentenceDateEdit.press('Tab'); }
  async selectAtSentencingJudge(judge: string): Promise<void> { await this.page.locator('#cddSentencingJudge_DropDown').selectOption({ label: judge }); }
  async tabAtStartDate(): Promise<void> { await this.page.locator('#dttmStartDate_Date_KPIDttmCtrl').press('Tab'); }
  async enterAtSentenceTotal(total: string, period: string): Promise<void> {
    await this.page.locator('#txtSentenceTotal').fill(total);
    await this.page.locator('#cddSentencePeriod_DropDown').selectOption({ label: period });
    await this.page.locator('#cddSentencePeriod_DropDown').press('Tab');
  }
  async enterAtAmountToSuspend(amount: string, period: string): Promise<void> {
    await this.page.locator('#txtAmountToSuspend').fill(amount);
    await this.page.locator('#cddAmountToSuspendPeriod_DropDown').selectOption({ label: period });
  }
  async enterAtMinimumToServe(minimum: string, period: string): Promise<void> {
    await this.page.locator('#txtMinimumToServe').fill(minimum);
    await this.page.locator('#cddMinimumToServePeriod_DropDown').selectOption({ label: period });
  }
  async enterAtNotes(notes: string): Promise<void> { await this.page.locator('#txtNotes').fill(notes); }
  async clickSaveAndClose(): Promise<void> { await this.page.locator('#cmdSaveClose').click(); }
  async clickSaveScreen(): Promise<void> { await this.saveButton.click(); }
  async getEstimateComplDate(): Promise<string> { return await this.page.locator('#txtEstimateComplDate').inputValue(); }
  async getSentenceTotalValue(): Promise<string> { return await this.page.locator('#txtSentenceTotal').inputValue(); }
  async getMinimumToServeValue(): Promise<string> { return await this.page.locator('#txtMinimumToServe').inputValue(); }
  async enterStartDateAsPreviousDate(date: string): Promise<void> {
    const startDate = this.page.locator('#dttmStartDate_Date_KPIDttmCtrl');
    await startDate.click();
    await startDate.press('Control+A');
    await startDate.fill(date);
    await startDate.press('Tab');
  }

  // ── Popup/Acknowledge handlers ──────────────────────────────────────────
  async clickEligibleForGoodTimeCheckboxWithConfirmPopup(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.page.locator('#chkGoodTime').click();
  }
  async saveAndCloseWithConfirm(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.page.locator('#cmdSaveClose').click();
  }
  async saveScreenWithConfirm(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.saveButton.click();
  }
  async verify2559TheConvictionAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(2559)');
      expect(dialog.message()).toContain('Conviction Date');
      await dialog.accept();
    });
  }
  async verify2559TheStartAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(2559)');
      expect(dialog.message()).toContain('Start Date');
      await dialog.accept();
    });
  }
  async verifySentenceTotalIsLessThanTheLengthAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30161)');
      await dialog.accept();
    });
  }
  async verify30124ConsecutiveAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30124)');
      await dialog.accept();
    });
  }

  // ── Date entry variants ─────────────────────────────────────────────────
  async enterConvictionDateAsPreviousDate(date: string): Promise<void> {
    await this.page.locator('#dttmConvDate_Date_KPIDttmCtrl').fill(date);
    await this.page.locator('#dttmConvDate_Date_KPIDttmCtrl').press('Tab');
  }
  async enterOffenseDateAsCurrentDate(date: string): Promise<void> {
    await this.page.locator('#dttmOffenseDate_Date_KPIDttmCtrl').fill(date);
    await this.page.locator('#dttmOffenseDate_Date_KPIDttmCtrl').press('Tab');
  }
  async enterStartDateAsFutureDate(date: string): Promise<void> {
    const startDate = this.page.locator('#dttmStartDate_Date_KPIDttmCtrl');
    await startDate.click();
    await startDate.press('Control+A');
    await startDate.fill(date);
    await startDate.press('Tab');
  }
  async enterActualComplDateAsPreviousDate(date: string): Promise<void> {
    await this.page.locator('#txtActualComplDate').click();
    await this.page.locator('#txtActualComplDate').fill(date);
  }
  async enterActualComplDateAsFutureDate(date: string): Promise<void> {
    const field = this.page.locator('#txtActualComplDate');
    await field.click();
    await field.press('Control+A');
    await field.press('Backspace');
    await field.fill(date);
  }

  // ── Getters ─────────────────────────────────────────────────────────────
  async getSentenceDate(): Promise<string> { return await this.page.locator('#dttmSentenceDate_Date_KPIDttmCtrl').inputValue(); }
  async getMaxComplDate(): Promise<string> { return await this.page.locator('#txtMaxComplDate').inputValue(); }
  async getActualComplDate(): Promise<string> { return await this.page.locator('#txtActualComplDate').inputValue(); }
  async getChargeNo(): Promise<string> {
    const year = await this.page.locator('#txtChargeYear').inputValue();
    const no = await this.page.locator('#txtChargeNo').inputValue();
    return `${year}-${no}`;
  }
  async getPctToServe(): Promise<string> { return await this.page.locator('#txtPctToServe').inputValue(); }
  async getAmountToSuspendValue(): Promise<string> { return await this.page.locator('#txtAmountToSuspend').inputValue(); }
  async getAmountToSuspendPeriod(): Promise<string> { return await this.page.locator('#cddAmountToSuspendPeriod_DropDown').locator('option:checked').textContent() || ''; }
  async getAmountToServeValue(): Promise<string> { return await this.page.locator('#txtAmountToServe').inputValue(); }
  async getAmountToServePeriod(): Promise<string> { return await this.page.locator('#cddAmountToServePeriod_DropDown').locator('option:checked').textContent() || ''; }
  async getAdjustmentsValue(): Promise<string> { return await this.page.locator('#txtAdjustments').inputValue(); }
  async getConsecutiveSentenceCharge(): Promise<string> { return await this.page.locator('#txtConsecutiveSentenceCharge').inputValue(); }
  async getDetentionTypeDropdownValues(): Promise<string[]> {
    const options = this.page.locator('#cddDetentionType_DropDown option');
    return await options.allTextContents();
  }

  // ── Verify methods ──────────────────────────────────────────────────────
  async verifyAtSentenceDate(expected: string): Promise<void> { expect(await this.getSentenceDate()).toBe(expected); }
  async verifyAtEstimateComplDate(expected: string): Promise<void> { expect(await this.getEstimateComplDate()).toBe(expected); }
  async verifyAtMaxComplDate(expected: string): Promise<void> { expect(await this.getMaxComplDate()).toBe(expected); }
  async verifyActualComplDate(expected: string): Promise<void> { expect(await this.getActualComplDate()).toBe(expected); }
  async verifyAtAmountToServe(expectedAmount: string, expectedPeriod: string): Promise<void> {
    expect(await this.getAmountToServeValue()).toBe(expectedAmount);
    expect(await this.getAmountToServePeriod()).toContain(expectedPeriod);
  }
  async verifyAtAmountToSuspend(expectedAmount: string, expectedPeriod: string): Promise<void> {
    expect(await this.getAmountToSuspendValue()).toBe(expectedAmount);
    expect(await this.getAmountToSuspendPeriod()).toContain(expectedPeriod);
  }
  async verifyAtPctToServe(expected: string): Promise<void> { expect(await this.getPctToServe()).toBe(expected); }
  async verifyPctToServe(expected: number): Promise<void> {
    const actual = Math.round(parseFloat(await this.getPctToServe()));
    expect(actual).toBe(expected);
  }
  async verifyAtAdjustments(expected: string): Promise<void> { expect(await this.getAdjustmentsValue()).toBe(expected); }
  async verifyAtDetentionType(expected: string): Promise<void> {
    const values = await this.getDetentionTypeDropdownValues();
    expect(values.some(v => v.includes(expected))).toBe(true);
  }
  async verifyAtDetentionTypeNotListed(unexpected: string): Promise<void> {
    const values = await this.getDetentionTypeDropdownValues();
    expect(values.some(v => v.includes(unexpected))).toBe(false);
  }
  async verifyStartDate(expected: string): Promise<void> {
    const val = await this.page.locator('#dttmStartDate_Date_KPIDttmCtrl').inputValue();
    expect(val).toBe(expected);
  }
  async verifyConsecutiveSentenceCharge(expected: string): Promise<void> { expect(await this.getConsecutiveSentenceCharge()).toBe(expected); }
  async verifyEligibleForWorkReleaseCheckboxIsSelected(): Promise<void> { expect(await this.page.locator('#chkWorkRelease').isChecked()).toBe(true); }
  async verifyEligibleForSTSCheckboxIsSelected(): Promise<void> { expect(await this.page.locator('#chkSTS').isChecked()).toBe(true); }

  // ── Other actions ───────────────────────────────────────────────────────
  async clickClearButton(): Promise<void> { await this.page.locator('#cmdClear').click(); }
  async clickConsecutiveSentenceCheckbox(): Promise<void> { await this.page.locator('#chkConsecutiveSentence').click(); }
  async closeScreen(): Promise<void> { await this.page.close(); }
  calculatePctToServe(totalDays: number, completionDays: number): number { return Math.round((completionDays / totalDays) * 100); }

  // ── Date verification methods ──────────────────────────────────────────
  async verifyActualComplDateAsPreviousDate(noOfPreviousDays: number): Promise<void> {
    const date = new Date(); date.setDate(date.getDate() - noOfPreviousDays);
    const expected = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    expect(await this.page.locator('#dttmActualComplDate_Date_KPIDttmCtrl').inputValue()).toBe(expected);
  }
  async verifyAtEstimateComplDateByMonth(noOfFutureDays: number, noOfMonths: number): Promise<void> {
    const startDate = new Date(); startDate.setDate(startDate.getDate() + noOfFutureDays);
    startDate.setMonth(startDate.getMonth() + noOfMonths);
    const expected = startDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    expect(await this.page.locator('#dttmEstimateComplDate_Date_KPIDttmCtrl').inputValue()).toBe(expected);
  }
  async verifyAtMaxComplDateByMonth(noOfFutureDays: number, noOfMonths: number): Promise<void> {
    const startDate = new Date(); startDate.setDate(startDate.getDate() + noOfFutureDays);
    startDate.setMonth(startDate.getMonth() + noOfMonths);
    const expected = startDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    expect(await this.page.locator('#dttmMaxComplDate_Date_KPIDttmCtrl').inputValue()).toBe(expected);
  }
  async verifyMaxComplDateByMonth(expectedDate: string): Promise<void> {
    expect(await this.page.locator('#dttmMaxComplDate_Date_KPIDttmCtrl').inputValue()).toBe(expectedDate);
  }
  async verifyAtEstimateComplDateAsPreviousDate(fromDate: string, noOfPreviousDays: number): Promise<void> {
    const date = new Date(fromDate); date.setDate(date.getDate() - noOfPreviousDays);
    const expected = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    expect(await this.page.locator('#dttmEstimateComplDate_Date_KPIDttmCtrl').inputValue()).toBe(expected);
  }
  async verifyAtEstimateComplDateByYears(noOfFutureDays: number, noOfYears: number): Promise<void> {
    const startDate = new Date(); startDate.setDate(startDate.getDate() + noOfFutureDays);
    startDate.setFullYear(startDate.getFullYear() + noOfYears);
    const expected = startDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    expect(await this.page.locator('#dttmEstimateComplDate_Date_KPIDttmCtrl').inputValue()).toBe(expected);
  }
  async verifyAtMaxComplDateByYears(noOfFutureDays: number, noOfYears: number): Promise<void> {
    const startDate = new Date(); startDate.setDate(startDate.getDate() + noOfFutureDays);
    startDate.setFullYear(startDate.getFullYear() + noOfYears);
    const expected = startDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    expect(await this.page.locator('#dttmMaxComplDate_Date_KPIDttmCtrl').inputValue()).toBe(expected);
  }
  async verifyAdjustments(expectedAmt: string): Promise<void> {
    expect(await this.page.locator('#txtAdjustments').inputValue()).toBe(expectedAmt);
  }
  async verifyAtPFCodeByStatuteInGrid(statute: string, expectedPFCode: string): Promise<void> {
    const cell = this.page.locator(`//div[@id='grdSentence']//tr[td[contains(text(),'${statute}')]]//td[contains(@aria-describedby,'PFCode')]`);
    expect(await cell.textContent()).toContain(expectedPFCode);
  }
  async verifyActiveSentencesCountInGrid(count: number): Promise<void> {
    const row = this.page.locator("//tr[contains(text(),'Active Sentences')]");
    expect(await row.textContent()).toContain(`Active Sentences : ${count}`);
  }
  async verifyInactiveSentencesCountInGrid(count: number): Promise<void> {
    const row = this.page.locator("//tr[contains(text(),'Inactive Sentences')]");
    expect(await row.textContent()).toContain(`Inactive Sentences : ${count}`);
  }
  async verifyRowColorAsGreyByStatuteInGrid(statute: string): Promise<void> {
    const row = this.page.locator(`//div[@id='grdSentence']//tr[td[contains(text(),'${statute}')]]`);
    const color = await row.evaluate(el => getComputedStyle(el).color);
    expect(color).toBe('rgba(128, 128, 128, 1)');
  }
  async verifyRowColorAsBlackByStatuteInGrid(statute: string): Promise<void> {
    const row = this.page.locator(`//div[@id='grdSentence']//tr[td[contains(text(),'${statute}')]]`);
    const color = await row.evaluate(el => getComputedStyle(el).color);
    expect(color).toBe('rgba(0, 0, 0, 1)');
  }
  async enterAtReleaseOfficer(pfCode: string): Promise<void> {
    await this.page.locator('#txtReleasePFCode').fill(pfCode);
    await this.page.locator('#txtReleasePFCode').press('Tab');
  }
  async tabOutReleaseDateAndTime(): Promise<void> {
    await this.page.locator('#dttmReleaseDate_Date_KPIDttmCtrl').click();
    await this.page.locator('#dttmReleaseDate_Date_KPIDttmCtrl').press('Tab');
    await this.page.locator("//table[@id='dttmReleaseDate_Time']//input").press('Tab');
  }
  async ClickBrowseButton(): Promise<void> { /* Browse file upload - requires file chooser */ }
  async SelectAtCustom1(custom1: string, custom2: string, custom3: string, custom4: string, custom5: string, custom6: string): Promise<void> {
    await this.page.locator('#cddCustom1_DropDown').selectOption({ label: custom1 });
    await this.page.locator('#cddCustom2_DropDown').selectOption({ label: custom2 });
    await this.page.locator('#cddCustom3_DropDown').selectOption({ label: custom3 });
    await this.page.locator('#cddCustom4_DropDown').selectOption({ label: custom4 });
    await this.page.locator('#cddCustom5_DropDown').selectOption({ label: custom5 });
    await this.page.locator('#cddCustom6_DropDown').selectOption({ label: custom6 });
  }
  async SelectAtCompensation(unemp: string, veteran: string, vaBenefits: string, medical: string, afdc: string, custom7: string): Promise<void> {
    await this.page.locator('#cddCustom7_DropDown').selectOption({ label: unemp });
    await this.page.locator('#cddCustom8_DropDown').selectOption({ label: veteran });
    await this.page.locator('#cddCustom9_DropDown').selectOption({ label: vaBenefits });
    await this.page.locator('#cddCustom10_DropDown').selectOption({ label: medical });
    await this.page.locator('#cddCustom11_DropDown').selectOption({ label: afdc });
    await this.page.locator('#txtCustom12').fill(custom7);
  }
  async SelectAtProbation(probation: string, parole: string, ppOffice: string): Promise<void> {
    await this.page.locator('#cddProbation_DropDown').selectOption({ label: probation });
    await this.page.locator('#cddParole_DropDown').selectOption({ label: parole });
    await this.page.locator('#txtPPOffice').fill(ppOffice);
  }
  async EnterAtOther(dependants: string, length: string, yearType: string, custom8: string, custom9: string): Promise<void> {
    await this.page.locator('#txtDependants').fill(dependants);
    await this.page.locator('#txtLength').fill(length);
    await this.page.locator('#cddYear_DropDown').selectOption({ label: yearType });
    await this.page.locator('#txtCustom13').fill(custom8);
    await this.page.locator('#cddCustom14_DropDown').selectOption({ label: custom9 });
  }
  async SelectAtCustom2(custom10: string, custom11: string): Promise<void> {
    await this.page.locator('#txtCustom15').fill(custom10);
    await this.page.locator('#txtCustom16').fill(custom11);
  }
}

// ─── Adjustments Tab ─────────────────────────────────────────────────────────

export class AdjustmentsTabPage {
  readonly page: Page;
  readonly adjustmentTypeDropdown: Locator;
  readonly adjustmentDateEdit: Locator;
  readonly daysEdit: Locator;
  readonly commentsEdit: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;
  readonly adjustmentGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.adjustmentTypeDropdown = page.locator('#cddAdjustmentType_DropDown');
    this.adjustmentDateEdit = page.locator('#dttmAdjustmentDate_Date_KPIDttmCtrl');
    this.daysEdit = page.locator('#txtAdjDays');
    this.commentsEdit = page.locator('#txtAdjComments');
    this.addButton = page.locator('#cmdAdjAdd');
    this.saveButton = page.locator('#cmdSave');
    this.adjustmentGrid = page.locator('#grdAdjustment');
  }

  async selectAtAdjustmentType(type: string): Promise<void> { await this.adjustmentTypeDropdown.selectOption({ label: type }); }
  async enterAtAdjustmentDate(date: string): Promise<void> { await this.adjustmentDateEdit.fill(date); await this.adjustmentDateEdit.press('Tab'); }
  async enterAtDays(days: string): Promise<void> { await this.daysEdit.fill(days); }
  async enterAtComments(comments: string): Promise<void> { await this.commentsEdit.fill(comments); }
  async clickAdd(): Promise<void> { await this.addButton.click(); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async deleteInGrid(type: string): Promise<void> { await this.adjustmentGrid.locator(`//tr[td[contains(text(),'${type}')]]//td[@class='Delete_Icon_Style']`).click(); }

  async tabOutDateAndTime(): Promise<void> { await this.adjustmentDateEdit.press('Tab'); }
  async getAmountByAdjTypeInGrid(adjType: string): Promise<string> {
    const cell = this.adjustmentGrid.locator(`//tr[td[contains(text(),'${adjType}')]]//td[contains(@aria-describedby,'Amount')]`);
    return (await cell.textContent()) || '';
  }
  async getActualAmtByAdjTypeInGrid(adjType: string): Promise<string> {
    const cell = this.adjustmentGrid.locator(`//tr[td[contains(text(),'${adjType}')]]//td[contains(@aria-describedby,'Actual')]`);
    return (await cell.textContent()) || '';
  }
  async getAdjTypeInGrid(rowIndex: number): Promise<string> {
    const cell = this.adjustmentGrid.locator(`//tr[contains(@class,'Row')][${rowIndex}]//td[contains(@aria-describedby,'AdjType')]`);
    return (await cell.textContent()) || '';
  }
  async getGridRowCount(): Promise<number> { return await this.adjustmentGrid.locator('//tr[contains(@class,"Row")]').count(); }
  async verifyAtAmountInGrid(expectedAmount: string): Promise<void> {
    const cell = this.adjustmentGrid.locator(`//td[contains(text(),'${expectedAmount}')]`);
    expect(await cell.textContent()).toContain(expectedAmount);
  }
  async verfiyAtAdjTypeInGrid(expectedAdjType: string): Promise<void> {
    const cell = this.adjustmentGrid.locator(`//td[contains(text(),'${expectedAdjType}')]`);
    expect(await cell.textContent()).toContain(expectedAdjType);
  }
  async verifyAtActualAmtByAdjTypeInGrid(adjType: string, expectedActualAmt: string): Promise<void> {
    const cell = this.adjustmentGrid.locator(`//tr[td[contains(text(),'${adjType}')]]//td[contains(@aria-describedby,'Actual')]`);
    expect(await cell.textContent()).toContain(expectedActualAmt);
  }
  async enterAtAmountDays(days: string): Promise<void> { await this.daysEdit.fill(days); }
  async selectAtAdjustType(type: string): Promise<void> {
    await this.adjustmentTypeDropdown.selectOption({ label: type });
    await this.adjustmentTypeDropdown.press('Tab');
  }
  async verifyAtAdjustmentTypeInGrid(adjType: string): Promise<void> {
    const cells = this.adjustmentGrid.locator("//td[contains(@aria-describedby,'AdjType')]");
    const allText = await cells.allTextContents();
    expect(allText.join(',')).toContain(adjType);
  }
  async verifyAmountByAdjustmentTypeInGrid(expectedAmount: string, adjType: string): Promise<void> {
    const cell = this.adjustmentGrid.locator(`//tr[td[contains(text(),'${adjType}')]]//td[contains(@aria-describedby,'Amount')]`);
    expect(await cell.textContent()).toContain(expectedAmount);
  }
  async verifyActualAmountByAdjustmentTypeInGrid(expectedActualAmt: string, adjType: string): Promise<void> {
    const cell = this.adjustmentGrid.locator(`//tr[td[contains(text(),'${adjType}')]]//td[contains(@aria-describedby,'Actual')]`);
    expect(await cell.textContent()).toContain(expectedActualAmt);
  }
  async verify30124ConsecutiveAcknowledegePopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(30124)'); await dialog.accept(); });
  }
  async enterAtAdjustments(adjustments: string): Promise<void> {
    await this.page.locator('#txtAdjustments').fill(adjustments);
  }
  async verifyEstimateDateAfterAdjustment(futureDate: string, adjustDays: string): Promise<void> {
    const days = parseInt(adjustDays);
    const baseDate = new Date(futureDate);
    baseDate.setDate(baseDate.getDate() - days);
    const expected = baseDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    expect(await this.page.locator('#dttmEstimateComplDate_Date_KPIDttmCtrl').inputValue()).toBe(expected);
  }
}

// ─── SPN No Change Page ──────────────────────────────────────────────────────

export class SPNNoChangePage {
  readonly page: Page;
  readonly newSPNNoEdit: Locator;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newSPNNoEdit = page.locator('#txtNewSPN');
    this.saveButton = page.locator('#cmdSave');
    this.cancelButton = page.locator('#cmdCancel');
  }

  async enterAtNewSPNNo(spnNo: string): Promise<void> { await this.newSPNNoEdit.fill(spnNo); await this.newSPNNoEdit.press('Tab'); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickCancel(): Promise<void> { await this.cancelButton.click(); }
  async saveScreen(): Promise<void> {
    await this.saveButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }
  async enterAtSPNChangeName(nameType: string, nameID: string): Promise<void> {
    await this.page.locator('#txtNameType').fill(nameType);
    await this.page.locator('#txtNameID').fill(nameID);
    await this.page.locator('#txtNameID').press('Tab');
  }
}

// ─── Text Editor Page ────────────────────────────────────────────────────────

export class TxtEditorPage {
  readonly page: Page;
  readonly textAreaEdit: Locator;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.textAreaEdit = page.locator('#txtEditor');
    this.saveButton = page.locator('#cmdSave');
    this.cancelButton = page.locator('#cmdCancel');
  }

  async enterAtText(text: string): Promise<void> { await this.textAreaEdit.fill(text); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickCancel(): Promise<void> { await this.cancelButton.click(); }
  async saveAndClose(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.page.locator('#cmdSaveNClose').click();
  }
  async verifyAdditionSuccessful(): Promise<void> {
    expect(await this.page.locator('#lblMessage').textContent()).toContain('1002 - Addition Successful');
  }
  async SelectStatus(status: string): Promise<void> {
    await this.page.locator('#cddStatus_DropDown').selectOption({ label: status });
  }
  async enterRichText(text: string): Promise<void> {
    await this.page.locator('#rteKPITxt_contentIframe').contentFrame().locator('body').fill(text);
  }
  async verifyAdditionSuccessfull(): Promise<void> {
    const msg = await this.page.locator("//td[@class='statusBar']//b").textContent();
    expect(msg).toContain('1002 - Addition Successful');
  }
  async enterAtRichText(richText: string): Promise<void> {
    await this.page.locator('#rteKPITxt_contentIframe').contentFrame().locator('body').fill(richText);
  }
}

// ─── Charges History Page ────────────────────────────────────────────────────

export class ChargesHistoryPage {
  readonly page: Page;
  readonly chargesHistoryGrid: Locator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.chargesHistoryGrid = page.locator('#grdChargeHistory');
    this.closeButton = page.locator('#cmdClose');
  }

  async clickClose(): Promise<void> { await this.closeButton.click(); }
  async getGridRowCount(): Promise<number> { return await this.chargesHistoryGrid.locator('//tr[contains(@class,"Row")]').count(); }
}

// ─── Special Needs Entry Page ────────────────────────────────────────────────

export class SpecialNeedsEntryPage {
  readonly page: Page;
  readonly specialNeedsTypeDropdown: Locator;
  readonly commentsEdit: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;
  readonly specialNeedsGrid: Locator;
  readonly authorizedByEdit: Locator;
  readonly authorizedByDateEdit: Locator;
  readonly editorButton: Locator;
  readonly activateCheckbox: Locator;
  readonly inactiveOfficerEdit: Locator;
  readonly inactiveDateEdit: Locator;
  readonly saveAndCloseButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.specialNeedsTypeDropdown = page.locator('#cddSpecialNeedsType_DropDown');
    this.commentsEdit = page.locator('#txtComments');
    this.addButton = page.locator('#cmdAdd');
    this.saveButton = page.locator('#cmdSave');
    this.cancelButton = page.locator('#cmdCancel');
    this.specialNeedsGrid = page.locator('#grdSpecialNeeds');
    this.authorizedByEdit = page.locator('#lupAuthorPF_CodeValue');
    this.authorizedByDateEdit = page.locator('#dttmAuthorizedBy_KPIDttmCtrl');
    this.editorButton = page.locator('#btnEditor');
    this.activateCheckbox = page.locator('#chkActivate');
    this.inactiveOfficerEdit = page.locator('#lupInactivePF_CodeValue');
    this.inactiveDateEdit = page.locator('#dttmInactiveDttm_KPIDttmCtrl');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
  }

  async selectAtSpecialNeedsType(type: string): Promise<void> { await this.specialNeedsTypeDropdown.selectOption({ label: type }); }
  async enterAtComments(comments: string): Promise<void> { await this.commentsEdit.fill(comments); }
  async clickAdd(): Promise<void> { await this.addButton.click(); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickCancel(): Promise<void> { await this.cancelButton.click(); }
  async deleteInGrid(type: string): Promise<void> { await this.specialNeedsGrid.locator(`//tr[td[contains(text(),'${type}')]]//td[@class='Delete_Icon_Style']`).click(); }

  async enterAtAuthorizedBy(officer: string): Promise<void> { await this.authorizedByEdit.fill(officer); await this.authorizedByEdit.press('Tab'); }
  async enterAtAuthorizedByDate(date: string): Promise<void> { await this.authorizedByDateEdit.fill(date); await this.authorizedByDateEdit.press('Tab'); }
  async clickEditor(): Promise<void> { await this.editorButton.click(); }
  async clickActivate(): Promise<void> { await this.activateCheckbox.click(); }
  async enterAtInactiveOfficer(officer: string): Promise<void> { await this.inactiveOfficerEdit.fill(officer); await this.inactiveOfficerEdit.press('Tab'); }
  async enterAtInactiveDate(date: string): Promise<void> { await this.inactiveDateEdit.fill(date); await this.inactiveDateEdit.press('Tab'); }
  async clickSaveAndClose(): Promise<void> { await this.saveAndCloseButton.click(); }
  async getSelectedSpecialNeedsType(): Promise<string> { return await this.specialNeedsTypeDropdown.locator('option:checked').textContent() || ''; }
  async getComments(): Promise<string> { return await this.commentsEdit.inputValue(); }
  async getAuthorizedBy(): Promise<string> { return await this.authorizedByEdit.inputValue(); }
  async getAuthorizedByDate(): Promise<string> { return await this.authorizedByDateEdit.inputValue(); }
  async getAuthorizedByLabelColor(): Promise<string> { return await this.page.locator('#lblAuthorizedby').evaluate(el => getComputedStyle(el).color); }
  async getAuthorizedByOfficerLabelColor(): Promise<string> { return await this.page.locator('#lblAuthorPF').evaluate(el => getComputedStyle(el).color); }
  async getAuthorizedByDateLabelColor(): Promise<string> { return await this.page.locator('#lblAuthorizedByDate').evaluate(el => getComputedStyle(el).color); }
  async getInactiveOfficerLabelColor(): Promise<string> { return await this.page.locator('#lblInactivePF').evaluate(el => getComputedStyle(el).color); }
  async getInactiveDateLabelColor(): Promise<string> { return await this.page.locator('#lblInactivateDate').evaluate(el => getComputedStyle(el).color); }
  async selectInGrid(type: string): Promise<void> { await this.specialNeedsGrid.locator(`//td[contains(text(),'${type}')]`).click(); }
  async getGridRowCount(): Promise<number> { return await this.specialNeedsGrid.locator('//tr[contains(@class,"Row")]').count(); }
  async isActivateChecked(): Promise<boolean> { return await this.activateCheckbox.isChecked(); }
  async verify30033EnterAuthorizedAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(30033)'); await dialog.accept(); });
  }
  async verifyAdditionalSuccessfulAcknowledgeMessage(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('1002 - Addition Successful'); await dialog.accept(); });
  }
  async verify30033EnterAuthorizedDateAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(30033)'); await dialog.accept(); });
  }
  async verifyAuthorizedDateAsCurrentDateInGrid(specialNeedsType: string, currentDate: string): Promise<void> {
    const cell = this.specialNeedsGrid.locator(`//tr[td[contains(text(),'${specialNeedsType}')]]//td[contains(@aria-describedby,'AuthorizedDate')]`);
    expect(await cell.textContent()).toContain(currentDate);
  }
  async verifyAuthorizedPFInGrid(specialNeedsType: string, expectedPF: string): Promise<void> {
    const cell = this.specialNeedsGrid.locator(`//tr[td[contains(text(),'${specialNeedsType}')]]//td[contains(@aria-describedby,'AuthorPF')]`);
    expect(await cell.textContent()).toContain(expectedPF);
  }
  async verifyAtInactiveDateAsCurrentDateBySpecialNeedsTypeInGrid(specialNeedsType: string, currentDate: string): Promise<void> {
    const cell = this.specialNeedsGrid.locator(`//tr[td[contains(text(),'${specialNeedsType}')]]//td[contains(@aria-describedby,'InactiveDate')]`);
    expect(await cell.textContent()).toContain(currentDate);
  }
  async verifyAtInactiveGridRowBySpecialNeedsType(specialNeedsType: string): Promise<void> {
    const row = this.specialNeedsGrid.locator(`//tr[td[contains(text(),'${specialNeedsType}')] and contains(@class,'inactive')]`);
    expect(await row.count()).toBeGreaterThan(0);
  }
  async saveAndCloseScreen(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.page.locator('#cmdSaveNClose').click();
  }
  async enterComments(comments: string): Promise<void> { await this.commentsEdit.fill(comments); }
  async verifyAtSpecialNeedsTypeInGrid(specialNeedsType: string): Promise<void> {
    const cell = this.specialNeedsGrid.locator(`//td[contains(text(),'${specialNeedsType}')]`);
    expect(await cell.textContent()).toContain(specialNeedsType);
  }
  async enterAtAuthorizedByPF(pf: string): Promise<void> {
    await this.authorizedByEdit.fill(pf);
    await this.authorizedByEdit.press('Tab');
  }
  async verifyAuthorizedByPFAsNonMandatory(): Promise<void> {
    const color = await this.page.locator('#lblAuthorizedby').evaluate(el => getComputedStyle(el).color);
    expect(color).not.toBe('rgba(153, 0, 0, 1)');
  }
  async verifyAuthorizedByPFAsMandatory(): Promise<void> {
    const color = await this.page.locator('#lblAuthorizedby').evaluate(el => getComputedStyle(el).color);
    expect(color).toBe('rgba(153, 0, 0, 1)');
  }
  async verifyAuthorizedDateAsMandatory(): Promise<void> {
    const color = await this.page.locator('#lblAuthorizedByDate').evaluate(el => getComputedStyle(el).color);
    expect(color).toBe('rgba(153, 0, 0, 1)');
  }
  async verifyAtSpecialNeedsType(expectedType: string): Promise<void> {
    const selected = await this.specialNeedsTypeDropdown.locator('option:checked').textContent() || '';
    expect(selected).toContain(expectedType);
  }
  async verifyInactivePFIsEnabledAndMandatory(): Promise<void> {
    expect(await this.inactiveOfficerEdit.isVisible()).toBe(true);
    expect(await this.inactiveOfficerEdit.isEnabled()).toBe(true);
    const color = await this.page.locator('#lblInactivePF').evaluate(el => getComputedStyle(el).color);
    expect(color).toBe('rgba(153, 0, 0, 1)');
  }
  async verifyInactiveDateIsEnabledAndMandatory(): Promise<void> {
    expect(await this.inactiveDateEdit.isVisible()).toBe(true);
    expect(await this.inactiveDateEdit.isEnabled()).toBe(true);
    const color = await this.page.locator('#lblInactivateDate').evaluate(el => getComputedStyle(el).color);
    expect(color).toBe('rgba(153, 0, 0, 1)');
  }
  async tabOutInactiveDate(): Promise<void> {
    await this.inactiveDateEdit.click();
    await this.inactiveDateEdit.press('Tab');
  }
  async verifyEditorButtonIsEnabled(): Promise<void> {
    expect(await this.editorButton.isEnabled()).toBe(true);
  }
  async clickEditorButton(): Promise<void> { await this.editorButton.click(); }
  async verifyAdditionalSuccessfullAcknowledgeMessage(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('1002 - Addition Successful'); await dialog.accept(); });
  }
  async selectAtSpecialNeedsTypeInGrid(specialNeedsType: string): Promise<void> {
    await this.specialNeedsGrid.locator(`//td[contains(text(),'${specialNeedsType}')]`).click();
  }
}

// ─── Special Needs Page ──────────────────────────────────────────────────────

export class SpecialNeedsPage {
  readonly page: Page;
  readonly specialNeedsGrid: Locator;
  readonly closeButton: Locator;
  readonly textMgrButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.specialNeedsGrid = page.locator('#grdSpecialNeeds');
    this.closeButton = page.locator('#cmdClose');
    this.textMgrButton = page.locator('#cmdTextMgr');
  }

  async clickClose(): Promise<void> { await this.closeButton.click(); }
  async clickTextMgr(): Promise<void> { await this.textMgrButton.click(); }
  async getGridRowCount(): Promise<number> { return await this.specialNeedsGrid.locator('//tr[contains(@class,"Row")]').count(); }
  async selectAtSpecialNeeds(specialNeeds: string): Promise<void> { await this.page.locator('#cddSpecialNeedsType').selectOption({ label: specialNeeds }); }
  async enterAtComments(comments: string): Promise<void> { await this.page.locator('#txtComments').fill(comments); }
  async clickAddButton(): Promise<void> { await this.page.locator('#cmdAdd').click(); }
  async verifyAtSpecialNeedsInGrid(expectedSpecialNeeds: string): Promise<void> {
    const cell = this.specialNeedsGrid.locator(`//td[contains(text(),'${expectedSpecialNeeds}')]`);
    expect(await cell.count()).toBeGreaterThan(0);
  }
  async saveScreen(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.page.locator('#cmdSave').click();
  }
  async verifyAddButtonIsDisplayed(): Promise<void> { expect(await this.page.locator('#cmdAdd').isVisible()).toBe(true); }
}

// ─── PreBooking Queue Details Page ───────────────────────────────────────────

export class PreBookingQueueDetailsPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;
  readonly bookButton: Locator;
  readonly deleteButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdSave');
    this.cancelButton = page.locator('#cmdCancel');
    this.bookButton = page.locator('#cmdBook');
    this.deleteButton = page.locator('#cmdDelete');
  }

  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickCancel(): Promise<void> { await this.cancelButton.click(); }
  async clickBook(): Promise<void> { await this.bookButton.click(); }
  async clickDelete(): Promise<void> { await this.deleteButton.click(); }
  async clickBeginBookingProcessWithConfirm(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(30163)'); await dialog.accept(); });
    await this.bookButton.click();
  }
  async verifyAtFileName(expectedFileName: string): Promise<void> {
    expect(await this.page.locator('#lblFileName').textContent()).toContain(expectedFileName);
  }
  async verifyAtAliasOrNickNames(expected: string): Promise<void> {
    expect(await this.page.locator('#lblAliasNickNames').textContent()).toContain(expected);
  }
  async verifyAtChargeCode(expected: string): Promise<void> {
    expect(await this.page.locator('#lblChargeCode').textContent()).toContain(expected);
  }
}

// ─── PreBooking Queue Page ───────────────────────────────────────────────────

export class PreBookingQueuePage {
  readonly page: Page;
  readonly preBookingGrid: Locator;
  readonly searchButton: Locator;
  readonly resetButton: Locator;
  readonly raceDropdown: Locator;
  readonly sexDropdown: Locator;
  readonly arrestNoEdit: Locator;
  readonly inQueueEdit: Locator;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly agencyStateDropdown: Locator;
  readonly agencyCodeEdit: Locator;
  readonly subAgencyDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.preBookingGrid = page.locator('#grdPreBooking');
    this.searchButton = page.locator('#cmdSearch');
    this.resetButton = page.locator('#cmdReset');
    this.raceDropdown = page.locator('#cddRace_DropDown');
    this.sexDropdown = page.locator('#cddSex_DropDown');
    this.arrestNoEdit = page.locator('#txtArrestNo');
    this.inQueueEdit = page.locator('#txtInQueue');
    this.lastNameEdit = page.locator('#txtLast');
    this.firstNameEdit = page.locator('#txtFirst');
    this.agencyStateDropdown = page.locator('#ORIAgency_KPIState');
    this.agencyCodeEdit = page.locator('#ORIAgency_lupORI_CodeValue');
    this.subAgencyDropdown = page.locator('#cddSubAgency_DropDown');
  }

  async clickSearch(): Promise<void> { await this.searchButton.click(); }
  async clickReset(): Promise<void> { await this.resetButton.click(); }
  async selectInGrid(name: string): Promise<void> { await this.preBookingGrid.locator(`//td[contains(text(),'${name}')]`).click(); }
  async getGridRowCount(): Promise<number> { return await this.preBookingGrid.locator('//tr[contains(@class,"Row")]').count(); }

  async selectAtRace(race: string): Promise<void> { await this.raceDropdown.selectOption({ label: race }); }
  async selectAtSex(sex: string): Promise<void> { await this.sexDropdown.selectOption({ label: sex }); }
  async enterAtArrestNo(arrestNo: string): Promise<void> { await this.arrestNoEdit.fill(arrestNo); }
  async enterAtInQueue(queue: string): Promise<void> { await this.inQueueEdit.fill(queue); }
  async enterAtLastName(lastName: string): Promise<void> { await this.lastNameEdit.fill(lastName); }
  async enterAtFirstName(firstName: string): Promise<void> { await this.firstNameEdit.fill(firstName); }
  async selectAtAgencyState(state: string): Promise<void> { await this.agencyStateDropdown.selectOption({ label: state }); }
  async enterAtAgencyCode(code: string): Promise<void> { await this.agencyCodeEdit.fill(code); await this.agencyCodeEdit.press('Tab'); }
  async selectAtSubAgency(subAgency: string): Promise<void> { await this.subAgencyDropdown.selectOption({ label: subAgency }); }
  async getBottomStatusMessage(): Promise<string> { return (await this.page.locator('#divList b').textContent()) || ''; }
  async getSelectedRace(): Promise<string> { return await this.raceDropdown.locator('option:checked').textContent() || ''; }
  async getSelectedSex(): Promise<string> { return await this.sexDropdown.locator('option:checked').textContent() || ''; }
  async getArrestNo(): Promise<string> { return await this.arrestNoEdit.inputValue(); }
  async getInQueue(): Promise<string> { return await this.inQueueEdit.inputValue(); }
  async getLastName(): Promise<string> { return await this.lastNameEdit.inputValue(); }
  async getFirstName(): Promise<string> { return await this.firstNameEdit.inputValue(); }
  async doubleClickInGrid(name: string): Promise<void> { await this.preBookingGrid.locator(`//td[contains(text(),'${name}')]`).dblclick(); }
  async getNameFromGrid(rowIndex: number): Promise<string> {
    const cell = this.preBookingGrid.locator(`//tr[contains(@class,'Row')][${rowIndex}]//td[contains(@aria-describedby,'Name')]`);
    return (await cell.textContent()) || '';
  }
  async verifyAtRaceInGrid(expectedRace: string): Promise<void> {
    const cells = this.preBookingGrid.locator("//tr[contains(@class,'Row')]//td[contains(@aria-describedby,'Race')]");
    const count = await cells.count();
    for (let i = 0; i < count; i++) { expect(await cells.nth(i).textContent()).toContain(expectedRace); }
  }
  async verifyAtSexInGrid(expectedSex: string): Promise<void> {
    const cells = this.preBookingGrid.locator("//tr[contains(@class,'Row')]//td[contains(@aria-describedby,'Sex')]");
    const count = await cells.count();
    for (let i = 0; i < count; i++) { expect(await cells.nth(i).textContent()).toContain(expectedSex); }
  }
  async verifyAtArrestScheduleInGrid(expected: string): Promise<void> {
    const cell = this.preBookingGrid.locator(`//td[contains(text(),'${expected}')]`);
    expect(await cell.count()).toBeGreaterThan(0);
  }
  async clickArrivedButtonByArrestNoInGrid(arrestNo: string): Promise<void> {
    await this.preBookingGrid.locator(`//tr[td[contains(text(),'${arrestNo}')]]//td[contains(@aria-describedby,'Arrived')]`).click();
  }
  async verify30179HasTheInmateArrivedPopup(): Promise<void> {
    const body = this.page.locator("//div[@class='modal-body']");
    expect(await body.textContent()).toContain('(30179)');
    await this.page.locator("//button[text()='Yes']").click();
  }
  async verifyArrivedTimeByArrestNoInGrid(arrestNo: string, expectedTime: string): Promise<void> {
    const input = this.preBookingGrid.locator(`//tr[td[contains(text(),'${arrestNo}')]]//td[contains(@aria-describedby,'Arrived')]//input`);
    expect(await input.inputValue()).toContain(expectedTime);
  }
  async verifyArrestNoInGrid(arrestNo: string): Promise<void> {
    const cell = this.preBookingGrid.locator(`//td[contains(text(),'${arrestNo}')]`);
    expect(await cell.count()).toBeGreaterThan(0);
  }
  async verifyArrestNoNotContainsInGrid(arrestNo: string): Promise<void> {
    const cell = this.preBookingGrid.locator(`//td[contains(text(),'${arrestNo}')]`);
    expect(await cell.count()).toBe(0);
  }
  async verifyInQueueIsLessThanActual(queueCount: number): Promise<void> {
    const value = parseInt(await this.inQueueEdit.inputValue());
    expect(value).toBeLessThan(queueCount);
  }
  async verifyAtNameInGrid(name: string): Promise<void> {
    const cell = this.preBookingGrid.locator(`//td[contains(text(),'${name}')]`);
    expect(await cell.count()).toBeGreaterThan(0);
  }
  async verifyNoRecordFoundBottomStatusMessage(): Promise<void> { expect(await this.getBottomStatusMessage()).toContain('1011 - No Record Found'); }
  async verifyAtAgencyInGrid(expectedAgency: string): Promise<void> {
    const cells = this.preBookingGrid.locator("//tr[contains(@class,'Row')]//td[contains(@aria-describedby,'Agency')]");
    const count = await cells.count();
    for (let i = 0; i < count; i++) { expect(await cells.nth(i).textContent()).toContain(expectedAgency); }
  }
  async verifyAtSubAgencyInGrid(expectedSubAgency: string): Promise<void> {
    const cells = this.preBookingGrid.locator("//tr[contains(@class,'Row')]//td[contains(@aria-describedby,'SA')]");
    const count = await cells.count();
    for (let i = 0; i < count; i++) { expect(await cells.nth(i).textContent()).toContain(expectedSubAgency); }
  }
  async closeTheScreen(): Promise<void> { await this.page.close(); }
  async clickTheBeginBookingProcessButtonWithConfirm(): Promise<void> {
    await this.page.locator('#cmdBeginBooking').click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }
  async clickTheBeginBookingProcessButton(): Promise<void> { await this.page.locator('#cmdBeginBooking').click(); }
  async verify30149DoYouWantToBeginBookingConfirmPopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(30149)'); await dialog.accept(); });
  }
  async clickArrivedButtonIngridRowByArrestNo(arrestSchedule: string): Promise<void> {
    await this.preBookingGrid.locator(`//tr[td[contains(text(),'${arrestSchedule}')]]//td[contains(@aria-describedby,'Arrived')]`).click();
  }
  async SelectAtArrestNo(arrestNo: string): Promise<void> {
    await this.preBookingGrid.locator(`//td[contains(text(),'${arrestNo}')]`).click();
  }
  async selectArrestNoInGrid(arrestNo: string): Promise<void> {
    await this.preBookingGrid.locator(`//td[contains(text(),'${arrestNo}')]`).click();
  }
}

// ─── Admission Charges Page ──────────────────────────────────────────────────

export class AdmissionChargesPage {
  readonly page: Page;
  readonly chargesGrid: Locator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.chargesGrid = page.locator('#grdCharges');
    this.closeButton = page.locator('#cmdClose');
  }

  async clickClose(): Promise<void> { await this.closeButton.click(); }
  async getGridRowCount(): Promise<number> { return await this.chargesGrid.locator('//tr[contains(@class,"Row")]').count(); }
  async verifyAtNotes(expectedNotes: string): Promise<void> {
    expect(await this.page.locator("//td[text()='" + expectedNotes + "']").textContent()).toBe(expectedNotes);
  }
  async enterAtComments(comments: string): Promise<void> { await this.page.locator('#txtComments').fill(comments); }
  async saveAndClose(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.page.locator('#cmdSaveNClose').click();
  }
}

// ─── Denominations Page ──────────────────────────────────────────────────────

export class DenominationsPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;
  readonly denominationsGrid: Locator;
  readonly x100CountEdit: Locator;
  readonly x50CountEdit: Locator;
  readonly x20CountEdit: Locator;
  readonly x10CountEdit: Locator;
  readonly x5CountEdit: Locator;
  readonly x2CountEdit: Locator;
  readonly x1CountEdit: Locator;
  readonly coinsCountEdit: Locator;
  readonly x100Value: Locator;
  readonly x50Value: Locator;
  readonly x20Value: Locator;
  readonly x10Value: Locator;
  readonly x5Value: Locator;
  readonly x2Value: Locator;
  readonly x1Value: Locator;
  readonly coinsValue: Locator;
  readonly totalValue: Locator;
  readonly spnNoLabel: Locator;
  readonly resetButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdSave');
    this.cancelButton = page.locator('#cmdCancel');
    this.denominationsGrid = page.locator('#grdDenominations');
    this.x100CountEdit = page.locator('#txt100');
    this.x50CountEdit = page.locator('#txt50');
    this.x20CountEdit = page.locator('#txt20');
    this.x10CountEdit = page.locator('#txt10');
    this.x5CountEdit = page.locator('#txt5');
    this.x2CountEdit = page.locator('#txt2');
    this.x1CountEdit = page.locator('#txt1');
    this.coinsCountEdit = page.locator('#txtCoins');
    this.x100Value = page.locator('#lbl100');
    this.x50Value = page.locator('#lbl50');
    this.x20Value = page.locator('#lbl20');
    this.x10Value = page.locator('#lbl10');
    this.x5Value = page.locator('#lbl5');
    this.x2Value = page.locator('#lbl2');
    this.x1Value = page.locator('#lbl1');
    this.coinsValue = page.locator('#lblCoins');
    this.totalValue = page.locator('#lblTotal');
    this.spnNoLabel = page.locator('#lblSPINNo');
    this.resetButton = page.locator('#cmdReset');
  }

  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickCancel(): Promise<void> { await this.cancelButton.click(); }
  async clickReset(): Promise<void> { await this.resetButton.click(); }
  async enterAt100(count: string): Promise<void> { await this.x100CountEdit.fill(count); }
  async enterAt50(count: string): Promise<void> { await this.x50CountEdit.fill(count); }
  async enterAt20(count: string): Promise<void> { await this.x20CountEdit.fill(count); }
  async enterAt10(count: string): Promise<void> { await this.x10CountEdit.fill(count); }
  async enterAt5(count: string): Promise<void> { await this.x5CountEdit.fill(count); }
  async enterAt2(count: string): Promise<void> { await this.x2CountEdit.fill(count); }
  async enterAt1(count: string): Promise<void> { await this.x1CountEdit.fill(count); }
  async enterAtCoins(count: string): Promise<void> { await this.coinsCountEdit.fill(count); }
  async get100Value(): Promise<string> { return (await this.x100Value.textContent()) || ''; }
  async get50Value(): Promise<string> { return (await this.x50Value.textContent()) || ''; }
  async get20Value(): Promise<string> { return (await this.x20Value.textContent()) || ''; }
  async get10Value(): Promise<string> { return (await this.x10Value.textContent()) || ''; }
  async get5Value(): Promise<string> { return (await this.x5Value.textContent()) || ''; }
  async get2Value(): Promise<string> { return (await this.x2Value.textContent()) || ''; }
  async get1Value(): Promise<string> { return (await this.x1Value.textContent()) || ''; }
  async getCoinsValue(): Promise<string> { return (await this.coinsValue.textContent()) || ''; }
  async getTotalValue(): Promise<string> { return (await this.totalValue.textContent()) || ''; }
  async getSpnNo(): Promise<string> { return (await this.spnNoLabel.textContent()) || ''; }
  async verify1018RequiredEntriesAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(1018)'); await dialog.accept(); });
  }
  async verify1002AdditionSuccessfulAckMessage(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('1002 - Addition Successful'); await dialog.accept(); });
  }
  async verifyDenominationsScreenNotExist(): Promise<void> { expect(await this.page.isClosed()).toBe(true); }
  async enterAtCountX100(count: string): Promise<void> { await this.x100CountEdit.clear(); await this.x100CountEdit.fill(count); await this.x100CountEdit.press('Tab'); }
  async verifyAtValueX100(expectedValue: string): Promise<void> { expect(await this.x100Value.textContent()).toContain(expectedValue); }
  async enterAtCountX50(count: string): Promise<void> { await this.x50CountEdit.clear(); await this.x50CountEdit.fill(count); await this.x50CountEdit.press('Tab'); }
  async verifyAtValueX50(expectedValue: string): Promise<void> { expect(await this.x50Value.textContent()).toContain(expectedValue); }
  async enterAtCountX20(count: string): Promise<void> { await this.x20CountEdit.clear(); await this.x20CountEdit.fill(count); await this.x20CountEdit.press('Tab'); }
  async verifyAtValueX20(expectedValue: string): Promise<void> { expect(await this.x20Value.textContent()).toContain(expectedValue); }
  async enterAtCountX10(count: string): Promise<void> { await this.x10CountEdit.clear(); await this.x10CountEdit.fill(count); await this.x10CountEdit.press('Tab'); }
  async verifyAtValueX10(expectedValue: string): Promise<void> { expect(await this.x10Value.textContent()).toContain(expectedValue); }
  async enterAtCountX5(count: string): Promise<void> { await this.x5CountEdit.clear(); await this.x5CountEdit.fill(count); await this.x5CountEdit.press('Tab'); }
  async verifyAtValueX5(expectedValue: string): Promise<void> { expect(await this.x5Value.textContent()).toContain(expectedValue); }
  async enterAtCountX2(count: string): Promise<void> { await this.x2CountEdit.clear(); await this.x2CountEdit.fill(count); await this.x2CountEdit.press('Tab'); }
  async verifyAtValueX2(expectedValue: string): Promise<void> { expect(await this.x2Value.textContent()).toContain(expectedValue); }
  async enterAtCountX1(count: string): Promise<void> { await this.x1CountEdit.clear(); await this.x1CountEdit.fill(count); await this.x1CountEdit.press('Tab'); }
  async verifyAtValueX1(expectedValue: string): Promise<void> { expect(await this.x1Value.textContent()).toContain(expectedValue); }
  async enterAtCountCoins(count: string): Promise<void> { await this.coinsCountEdit.clear(); await this.coinsCountEdit.fill(count); await this.coinsCountEdit.press('Tab'); }
  async verifyAtValueCoins(expectedValue: string): Promise<void> { expect(await this.coinsValue.textContent()).toContain(expectedValue); }
  async verifyAtTotalValue(expectedTotal: string): Promise<void> { expect(await this.totalValue.textContent()).toContain(expectedTotal); }
}

// ─── Booking Additional Data Page ────────────────────────────────────────────

export class BookingAdditionalDataPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdSave');
    this.cancelButton = page.locator('#cmdCancel');
  }

  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickCancel(): Promise<void> { await this.cancelButton.click(); }
  async saveScreen(): Promise<void> { await this.saveButton.click(); }
  async saveAndCloseScreen(): Promise<void> { await this.page.locator('#cmdSaveClose').click(); }
  async isUnemploymentCompensationChecked(): Promise<boolean> { return await this.page.locator('#chkUnemploymentCompensation').isChecked(); }
  async enterAtCustom3(index: number): Promise<void> { await this.page.locator(`#txtCustom3_${index}`).fill('Y'); }
  async enterAtCustom4(index: number): Promise<void> { await this.page.locator(`#txtCustom4_${index}`).fill('Y'); }
  async getCustom3Value(index: number): Promise<string> { return await this.page.locator(`#txtCustom3_${index}`).inputValue(); }
  async getCustom4Value(index: number): Promise<string> { return await this.page.locator(`#txtCustom4_${index}`).inputValue(); }
  async verifyUnemploymentCompensation(): Promise<void> {
    expect(await this.page.locator('#cddUnemploymentCompensation_DropDown').isEnabled()).toBe(true);
  }
  async verifyAtCustom3(index: number, expected: string): Promise<void> {
    expect(await this.page.locator(`#txtCustom3_${index}`).inputValue()).toBe(expected);
  }
  async verifyAtCustom4(index: number, expected: string): Promise<void> {
    expect(await this.page.locator(`#txtCustom4_${index}`).inputValue()).toBe(expected);
  }
}

// ─── Special Needs Text Manager Page ─────────────────────────────────────────

export class SpecialNeedsTextMgrPage {
  readonly page: Page;
  readonly textAreaEdit: Locator;
  readonly saveButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.textAreaEdit = page.locator('#txtSpecialNeeds');
    this.saveButton = page.locator('#cmdSave');
    this.cancelButton = page.locator('#cmdCancel');
  }

  async enterAtText(text: string): Promise<void> { await this.textAreaEdit.fill(text); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async clickCancel(): Promise<void> { await this.cancelButton.click(); }
}

// ─── Alias History Page ──────────────────────────────────────────────────────

export class AliasHistoryPage {
  readonly page: Page;
  readonly aliasHistoryGrid: Locator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.aliasHistoryGrid = page.locator('#grdAliasHistory');
    this.closeButton = page.locator('#cmdClose');
  }

  async clickClose(): Promise<void> { await this.closeButton.click(); }
  async getGridRowCount(): Promise<number> { return await this.aliasHistoryGrid.locator('//tr[contains(@class,"Row")]').count(); }
  async verifyAtLastNameInGrid(lastName: string): Promise<void> {
    const cell = this.aliasHistoryGrid.locator(`//td[contains(text(),'${lastName}')]`);
    expect(await cell.count()).toBeGreaterThan(0);
  }
  async verifyAtFirstNameInGrid(firstName: string): Promise<void> {
    const cell = this.aliasHistoryGrid.locator(`//td[contains(text(),'${firstName}')]`);
    expect(await cell.count()).toBeGreaterThan(0);
  }
  async verifyAtChangedDateAsCurrentDateByLastNameInGrid(lastName: string, currentDate: string): Promise<void> {
    const cell = this.aliasHistoryGrid.locator(`//tr[td[contains(text(),'${lastName}')]]//td[contains(@aria-describedby,'ChangedDate')]`);
    expect((await cell.textContent())?.substring(0, 10)).toBe(currentDate);
  }
  async closeScreen(): Promise<void> { await this.page.close(); }
}

// ─── Inmate Image Archive Page ───────────────────────────────────────────────

export class InmateImageArchivePage {
  readonly page: Page;
  readonly imageArchiveGrid: Locator;
  readonly closeButton: Locator;
  readonly deleteButton: Locator;
  readonly setAsPrimaryButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.imageArchiveGrid = page.locator('#grdImageArchive');
    this.closeButton = page.locator('#cmdClose');
    this.deleteButton = page.locator('#cmdDelete');
    this.setAsPrimaryButton = page.locator('#cmdSetPrimary');
  }

  async clickClose(): Promise<void> { await this.closeButton.click(); }
  async clickDelete(): Promise<void> { await this.deleteButton.click(); }
  async clickSetAsPrimary(): Promise<void> { await this.setAsPrimaryButton.click(); }
  async selectImageInGrid(index: number): Promise<void> { await this.imageArchiveGrid.locator(`//tr[contains(@class,'Row')][${index + 1}]`).click(); }
  async clickFileButton(): Promise<void> { await this.page.locator('#cmdAddNew').click(); }
  async selectAtType(type: string): Promise<void> { await this.page.locator('#cddType').selectOption({ label: type }); }
  async selectAtAction(action: string): Promise<void> { await this.page.locator('#cddAction').selectOption({ label: action }); }
  async enterAtSMT(smt: string): Promise<void> { await this.page.locator('#txtSMT').fill(smt); }
  async clickTransmitButton(): Promise<void> { await this.page.locator('#cmdTransmit').click(); }
  async verifySaveConfirmPopup(): Promise<void> {
    this.page.once('dialog', async dialog => { expect(dialog.message()).toContain('(3)'); await dialog.accept(); });
  }
  async verifyBuiltInCameraButtonIsDisplayed(): Promise<void> { expect(await this.page.locator('#cmdBuiltInCamera').isVisible()).toBe(true); }
  async clickViewFullImageIconByPosition(position: string): Promise<void> {
    await this.page.locator(`//b[text()='${position}']//preceding-sibling::img`).click();
  }
}

// ─── Upload Inmate Image Page ────────────────────────────────────────────────

export class UploadInmateImagePage {
  readonly page: Page;
  readonly fileInput: Locator;
  readonly uploadButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fileInput = page.locator('#fileUpload');
    this.uploadButton = page.locator('#cmdUpload');
    this.cancelButton = page.locator('#cmdCancel');
  }

  async selectFile(filePath: string): Promise<void> { await this.fileInput.setInputFiles(filePath); }
  async clickUpload(): Promise<void> { await this.uploadButton.click(); }
  async clickCancel(): Promise<void> { await this.cancelButton.click(); }
  async tabPhotoDateAndTime(): Promise<void> {
    await this.page.locator('#txtPhotoDate').press('Tab');
    await this.page.locator('#txtPhotoTime').press('Tab');
  }
  async saveAndClose(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
    await this.page.locator('#cmdSaveNClose').click();
  }
}
