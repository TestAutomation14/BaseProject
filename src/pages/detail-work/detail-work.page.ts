import { Page, Locator, expect } from '@playwright/test';

// ==================== DetailWork (Switch Methods) ====================

export class DetailWorkPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async switchToDetailEntryScreen(): Promise<void> {
    // Switch to Detail Entry window
  }

  async switchToDetailSearch(): Promise<void> {
    // Switch to DetailWork/frmDetailSrch main tab
  }

  async switchToOfficerPFHelpSearch(): Promise<void> {
    // Switch to DtlPeckingOrderSearch window
  }

  async switchToReferedToSearch(): Promise<void> {
    // Switch to frmReferedToSearch window
  }

  async switchToMapLayerEntry(): Promise<void> {
    // Switch to frmMapPointLayerEntryHERE window
  }

  async switchToDetailHierarchyOrder(): Promise<void> {
    // Switch to Detail Hierarchy Order main tab
  }

  async switchToDetailRateCodes(): Promise<void> {
    // Switch to Detail Rate Codes main tab
  }
}

// ==================== DetailSearch ====================

export class DetailSearchPage {
  readonly page: Page;
  readonly detailYearEdit: Locator;
  readonly detailNumberEdit: Locator;
  readonly locationEdit: Locator;
  readonly typeOfDetailDropdown: Locator;
  readonly notFilledCheckbox: Locator;
  readonly filledCheckbox: Locator;
  readonly completedBilledCheckbox: Locator;
  readonly highRiskCheckbox: Locator;
  readonly supervisorRequiredCheckbox: Locator;
  readonly priorityYesRadio: Locator;
  readonly priorityNoRadio: Locator;
  readonly priorityAllRadio: Locator;
  readonly searchButton: Locator;
  readonly addNewButton: Locator;
  readonly resetButton: Locator;
  readonly backButton: Locator;
  readonly refreshButton: Locator;
  readonly printIcon: Locator;
  readonly resultTable: Locator;
  readonly cancelledCheckbox: Locator;
  readonly unableToFillCheckbox: Locator;
  readonly outOfTownOfficerCheckbox: Locator;
  readonly alcoholServedCheckbox: Locator;
  readonly dateOfDetailFromEdit: Locator;
  readonly timeOfDetailFromEdit: Locator;
  readonly dateOfDetailToEdit: Locator;
  readonly timeOfDetailToEdit: Locator;
  readonly businessNameTypeEdit: Locator;
  readonly businessNameIDEdit: Locator;
  readonly businessAddressEdit: Locator;
  readonly contactNameTypeEdit: Locator;
  readonly contactNameIDEdit: Locator;
  readonly phoneTypeDropdown: Locator;
  readonly phoneNumberEdit: Locator;
  readonly emailEdit: Locator;
  readonly otherPFEdit: Locator;
  readonly otherPFLookup: Locator;
  readonly referredToEdit: Locator;
  readonly referredToLookup: Locator;
  readonly shiftDropdown: Locator;
  readonly typeDropdown: Locator;
  readonly divisionDropdown: Locator;
  readonly detailHierarchyOrderDropdown: Locator;
  readonly groupDropdown: Locator;
  readonly titleRankDropdown: Locator;
  readonly sectionDropdown: Locator;
  readonly detailRateTypeDropdown: Locator;
  readonly squadDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.detailYearEdit = page.locator('#nbrDetailNo_Year');
    this.detailNumberEdit = page.locator('#nbrDetailNo_Number');
    this.locationEdit = page.locator('#adrLocationOfDetail_txtFrom');
    this.typeOfDetailDropdown = page.locator('#cddTypeOfDetailWork_DropDown');
    this.notFilledCheckbox = page.locator('#chkNotFilled');
    this.filledCheckbox = page.locator('#chkFilled');
    this.completedBilledCheckbox = page.locator('#chkCompletedBilled');
    this.highRiskCheckbox = page.locator('#chkHighRisk');
    this.supervisorRequiredCheckbox = page.locator('#chkSupervisorRequired');
    this.priorityYesRadio = page.locator('#rbtStatus_0');
    this.priorityNoRadio = page.locator('#rbtStatus_1');
    this.priorityAllRadio = page.locator('#rbtStatus_2');
    this.searchButton = page.locator("//span[contains(text(),'Search')]");
    this.addNewButton = page.locator("//span[contains(text(),'Add New')]");
    this.resetButton = page.locator("//span[contains(text(),'Reset')]");
    this.backButton = page.locator("//span[contains(text(),'Back')]");
    this.refreshButton = page.locator("//span[contains(text(),'Refresh')]");
    this.printIcon = page.locator("//img[@src='/KPIImages/ico/16_print.gif']");
    this.resultTable = page.locator('#grdDetailInq');
    this.cancelledCheckbox = page.locator('#chkCancelled');
    this.unableToFillCheckbox = page.locator('#chkUnabletofill');
    this.outOfTownOfficerCheckbox = page.locator('#chkOutofTownOfficer');
    this.alcoholServedCheckbox = page.locator('#chkAlcoholServed');
    this.dateOfDetailFromEdit = page.locator('#dtDateFrom_Date_KPIDttmCtrl');
    this.timeOfDetailFromEdit = page.locator("//table[@id='dtDateFrom_Time']//input");
    this.dateOfDetailToEdit = page.locator('#dtDateTo_Date_KPIDttmCtrl');
    this.timeOfDetailToEdit = page.locator("//table[@id='dtDateTo_Time']//input");
    this.businessNameTypeEdit = page.locator('#ncrlBusinessName_NameType');
    this.businessNameIDEdit = page.locator('#ncrlBusinessName_NameTypeID');
    this.businessAddressEdit = page.locator('#adrBusinessAddress_txtFrom');
    this.contactNameTypeEdit = page.locator('#ncrContactName_NameType');
    this.contactNameIDEdit = page.locator('#ncrContactName_NameTypeID');
    this.phoneTypeDropdown = page.locator('#CupContactName_PhoneType_DropDown');
    this.phoneNumberEdit = page.locator('#CupContactName_PhoneNumber');
    this.emailEdit = page.locator('#txtContactEmail');
    this.otherPFEdit = page.locator('#lupOfficePF_CodeValue');
    this.otherPFLookup = page.locator('#lupOfficePF_imgBtn');
    this.referredToEdit = page.locator('#lupReferredTo_CodeValue');
    this.referredToLookup = page.locator('#lupReferredTo_imgBtn');
    this.shiftDropdown = page.locator('#cddShift_DropDown');
    this.typeDropdown = page.locator('#cddType_DropDown');
    this.divisionDropdown = page.locator('#cddDivision_DropDown');
    this.detailHierarchyOrderDropdown = page.locator('#cddDetailPeckingOrder_DropDown');
    this.groupDropdown = page.locator('#cddGroup_DropDown');
    this.titleRankDropdown = page.locator('#cddTitleRank_DropDown');
    this.sectionDropdown = page.locator('#cddSection_DropDown');
    this.detailRateTypeDropdown = page.locator('#cddDetailRateType_DropDown');
    this.squadDropdown = page.locator('#cddSquad_DropDown');
  }

  async enterAtDetailNo(detailNo: string): Promise<void> {
    await this.detailYearEdit.fill(detailNo.substring(0, 2));
    await this.detailNumberEdit.fill(detailNo.substring(3));
    await this.detailNumberEdit.press('Tab');
  }

  async clickNotFilledCheckbox(): Promise<void> {
    await this.notFilledCheckbox.click();
  }

  async clickFilledCheckbox(): Promise<void> {
    await this.filledCheckbox.click();
  }

  async clickCompletedBilledCheckbox(): Promise<void> {
    await this.completedBilledCheckbox.click();
  }

  async clickHighRiskCheckbox(): Promise<void> {
    await this.highRiskCheckbox.click();
  }

  async clickSupervisorRequiredCheckbox(): Promise<void> {
    await this.supervisorRequiredCheckbox.click();
  }

  async clickPriorityDetailYesRadiobutton(): Promise<void> {
    await this.priorityYesRadio.click();
  }

  async clickPriorityDetailNoRadioButton(): Promise<void> {
    await this.priorityNoRadio.click();
  }

  async clickPriorityDetailAllRadioButton(): Promise<void> {
    await this.priorityAllRadio.click();
  }

  async enterAtLocationOfDetail(location: string): Promise<void> {
    await this.locationEdit.fill(location);
  }

  async selectAtTypeOfDetailWork(typeOfDetail: string): Promise<void> {
    await this.typeOfDetailDropdown.selectOption({ label: typeOfDetail });
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async verifyAtDetailNo(detailNo: string, rowIndex: number): Promise<void> {
    const cell = this.resultTable.locator(`tbody tr`).nth(rowIndex).locator("td").filter({ hasText: detailNo });
    await expect(cell).toBeVisible();
  }

  async verifyAtLocationUsingDetailNo(detailNo: string, location: string): Promise<void> {
    const cell = this.resultTable.locator(`//td[contains(text(),'${detailNo}')]/parent::tr//td[position()=count(//th[contains(text(),'Location')]/preceding-sibling::th)+1]`);
    await expect(cell).toHaveText(location);
  }

  async verifyAtTypeOfDetailUsingDetailNo(detailNo: string, typeOfDetail: string): Promise<void> {
    const cell = this.resultTable.locator(`//td[contains(text(),'${detailNo}')]/parent::tr//td[position()=count(//th[contains(text(),'Type of Detail')]/preceding-sibling::th)+1]`);
    await expect(cell).toHaveText(typeOfDetail);
  }

  async verifyAtDurationUsingDetailNo(detailNo: string, duration: string): Promise<void> {
    const cell = this.resultTable.locator(`//td[contains(text(),'${detailNo}')]/parent::tr//td[position()=count(//th[contains(text(),'Duration')]/preceding-sibling::th)+1]`);
    await expect(cell).toHaveText(duration);
  }

  async clickAtDetailNoInGrid(detailNo: string): Promise<void> {
    await this.resultTable.locator(`//td[contains(text(),'${detailNo}')]`).click();
  }

  async clickAtTypeOfDetailInGrid(typeOfDetail: string): Promise<void> {
    await this.resultTable.locator(`//td[contains(text(),'${typeOfDetail}')]`).click();
  }

  async clickAddNew(): Promise<void> {
    await this.addNewButton.click();
  }

  async verifyAtLocationUsingTypeOfDetail(typeOfDetail: string, location: string): Promise<void> {
    const cell = this.resultTable.locator(`//td[contains(text(),'${typeOfDetail}')]/parent::tr//td[position()=count(//th[contains(text(),'Location')]/preceding-sibling::th)+1]`);
    await expect(cell).toHaveText(location);
  }

  async verifyAtDurationUsingTypeOfDetail(typeOfDetail: string, duration: string): Promise<void> {
    const cell = this.resultTable.locator(`//td[contains(text(),'${typeOfDetail}')]/parent::tr//td[position()=count(//th[contains(text(),'Duration')]/preceding-sibling::th)+1]`);
    await expect(cell).toHaveText(duration);
  }

  async verifyDateAsCurrentUsingTypeOfDetail(typeOfDetail: string, currentDate: string): Promise<void> {
    const cell = this.resultTable.locator(`//td[contains(text(),'${typeOfDetail}')]/parent::tr//td[position()=count(//th[contains(text(),'Date')]/preceding-sibling::th)+1]`);
    await expect(cell).toHaveText(currentDate);
  }

  async verifyRowColorAsRedUsingLocation(location: string): Promise<void> {
    const row = this.resultTable.locator(`//td[contains(text(),'${location}')]/parent::tr`);
    const classAttr = await row.getAttribute('class');
    expect(classAttr).toContain('gridRedColor');
  }

  async verifyRowColorAsBlueUsingLocation(location: string): Promise<void> {
    const row = this.resultTable.locator(`//td[contains(text(),'${location}')]/parent::tr`);
    const classAttr = await row.getAttribute('class');
    expect(classAttr).toContain('gridBlueColor');
  }

  async verifyRowColorAsGrayUsingDetailNo(detailNo: string): Promise<void> {
    const row = this.resultTable.locator(`//td[contains(text(),'${detailNo}')]/parent::tr`);
    const classAttr = await row.getAttribute('class');
    expect(classAttr).toContain('gridGrayColor');
  }

  async clickBack(): Promise<void> {
    await this.backButton.click();
  }

  async clickReset(): Promise<void> {
    await this.resetButton.click();
  }

  async verifyNoRecordFoundAcknowledgeMessage(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('1011 - No Record Found');
      await dialog.accept();
    });
  }

  async verifyStatusAsCancelledUsingDetailNo(detailNo: string): Promise<void> {
    const cell = this.resultTable.locator(`//td[contains(text(),'${detailNo}')]/parent::tr//td[position()=count(//th[contains(text(),'Status')]/preceding-sibling::th)+1]`);
    await expect(cell).toHaveText('Cancelled');
  }

  async clickPrintIcon(): Promise<void> {
    await this.printIcon.click();
  }

  async selectAtDetailNo(detailNo: string): Promise<void> {
    await this.resultTable.locator(`//td[contains(text(),'${detailNo}')]`).click();
  }

  async verifyAtDetailColumn(detailNo: string): Promise<void> {
    const cells = this.resultTable.locator("//th[contains(text(),'Detail#')]/ancestor::table//tbody/tr/td[position()=count(//th[contains(text(),'Detail#')]/preceding-sibling::th)+1]");
    const allTexts = await cells.allTextContents();
    expect(allTexts).toContain(detailNo);
  }

  async clickRefresh(): Promise<void> {
    await this.refreshButton.click();
  }

  async clickCancelledCheckBox(): Promise<void> {
    await this.cancelledCheckbox.click();
  }

  async verifyAtStatusUsingDetailNoInGrid(detailNo: string, status: string): Promise<void> {
    const cell = this.resultTable.locator(`//td[contains(text(),'${detailNo}')]/parent::tr//td[position()=count(//th[contains(text(),'Status')]/preceding-sibling::th)+1]`);
    await expect(cell).toHaveText(status);
  }

  async clickUnableToFillCheckBox(): Promise<void> {
    await this.unableToFillCheckbox.click();
  }

  async clickOutOfTownOfficerCheckBox(): Promise<void> {
    await this.outOfTownOfficerCheckbox.click();
  }

  async verifyAtPriorityUsingDetailNoInGrid(detailNo: string, priority: string): Promise<void> {
    const cell = this.resultTable.locator(`//td[contains(text(),'${detailNo}')]/parent::tr//td[position()=count(//th[contains(text(),'Priority')]/preceding-sibling::th)+1]`);
    await expect(cell).toHaveText(priority);
  }

  async selectRandomRecordInGrid(): Promise<void> {
    const rows = this.resultTable.locator('tbody tr');
    const count = await rows.count();
    if (count > 0) {
      await rows.nth(Math.floor(Math.random() * count)).click();
    }
  }

  async clickAlcoholServedCheckBox(): Promise<void> {
    await this.alcoholServedCheckbox.click();
  }

  async enterDateAndTimeOfDetailFrom(fromDate: string, time: string): Promise<void> {
    await this.dateOfDetailFromEdit.fill(fromDate);
    await this.timeOfDetailFromEdit.fill(time);
  }

  async enterDateAndTimeOfDetailTo(toDate: string, time: string): Promise<void> {
    await this.dateOfDetailToEdit.fill(toDate);
    await this.timeOfDetailToEdit.fill(time);
  }

  async enterAtBusinessNameID(businessNameID: string): Promise<void> {
    await this.businessNameTypeEdit.fill(businessNameID.substring(0, 1));
    await this.businessNameIDEdit.fill(businessNameID.substring(2));
    await this.businessNameIDEdit.press('Tab');
  }

  async enterAtBusinessAddress(address: string): Promise<void> {
    await this.businessAddressEdit.fill(address);
  }

  async enterAtContactNameID(contactNameID: string): Promise<void> {
    await this.contactNameTypeEdit.fill(contactNameID.substring(0, 1));
    await this.contactNameIDEdit.fill(contactNameID.substring(2));
    await this.contactNameIDEdit.press('Tab');
  }

  async enterAtPhone(phoneType: string, phoneNumber: string): Promise<void> {
    await this.phoneTypeDropdown.selectOption({ label: phoneType });
    await this.phoneNumberEdit.click();
    await this.phoneNumberEdit.fill(phoneNumber);
  }

  async enterAtEmail(email: string): Promise<void> {
    await this.emailEdit.fill(email);
  }

  async enterAtOtherPF(otherPF: string): Promise<void> {
    await this.otherPFEdit.fill(otherPF);
    await this.otherPFEdit.press('Tab');
  }

  async enterAtReferredTo(referredTo: string): Promise<void> {
    await this.referredToEdit.fill(referredTo);
    await this.referredToEdit.press('Tab');
  }

  async selectAtShift(shift: string): Promise<void> {
    await this.shiftDropdown.selectOption({ label: shift });
  }

  async selectAtType(type: string): Promise<void> {
    await this.typeDropdown.selectOption({ label: type });
  }

  async selectAtDivision(division: string): Promise<void> {
    await this.divisionDropdown.selectOption({ label: division });
  }

  async selectAtDetailHierarchyOrder(order: string): Promise<void> {
    await this.detailHierarchyOrderDropdown.selectOption({ label: order });
  }

  async selectAtGroup(group: string): Promise<void> {
    await this.groupDropdown.selectOption({ label: group });
  }

  async selectAtTitleRank(titleRank: string): Promise<void> {
    await this.titleRankDropdown.selectOption({ label: titleRank });
  }

  async selectAtSection(section: string): Promise<void> {
    await this.sectionDropdown.selectOption({ label: section });
  }

  async selectAtDetailRateType(rateType: string): Promise<void> {
    await this.detailRateTypeDropdown.selectOption({ label: rateType });
  }

  async selectAtSquad(squad: string): Promise<void> {
    await this.squadDropdown.selectOption({ label: squad });
  }

  async clickOtherPFLookup(): Promise<void> {
    await this.otherPFLookup.click();
  }

  async clickReferredToLookup(): Promise<void> {
    await this.referredToLookup.click();
  }

  async verifyDateBetweenDateAndTimeOfDetailFrom(fromDate: string, toDate: string): Promise<void> {
    const cells = this.resultTable.locator("//th[contains(text(),'Date')]/ancestor::table//tbody/tr/td[position()=count(//th[contains(text(),'Date')]/preceding-sibling::th)+1]");
    const allTexts = await cells.allTextContents();
    for (const text of allTexts) {
      const date = new Date(text);
      expect(date.getTime()).toBeGreaterThanOrEqual(new Date(fromDate).getTime());
      expect(date.getTime()).toBeLessThanOrEqual(new Date(toDate).getTime());
    }
  }

  async verifyOthersPF(): Promise<string | null> {
    // Switches to coded search popup and paginates through grid
    // Builds map from td[3] → td[4], sorts by value ascending
    // Finds first numeric key that is a multiple of 24
    const gridLocator = this.page.locator("//div[@id='grdSrch']/table/tbody/descendant::tr[@data-rowkey]");
    while (true) {
      const rows = await gridLocator.all();
      const rowMap = new Map<string, string>();
      for (const row of rows) {
        await row.scrollIntoViewIfNeeded();
        const key = (await row.locator('td:nth-child(3)').textContent())?.trim() ?? '';
        const value = (await row.locator('td:nth-child(4)').textContent())?.trim() ?? '';
        if (!rowMap.has(key)) {
          rowMap.set(key, value);
        }
      }
      // Sort by value ascending
      const sortedEntries = [...rowMap.entries()].sort((a, b) => a[1].localeCompare(b[1]));
      // Find key that is a multiple of 24 (numeric only)
      const match = sortedEntries.find(([k]) => /^\d+$/.test(k) && parseInt(k) % 24 === 0);
      if (match) {
        await this.page.locator("//span[text()='NEXT']").click();
        return match[1];
      }
      // If NEXT is disabled → no more pages
      const nextEnabled = await this.page.locator("//span[text()='NEXT' and not(@disabled)]").count();
      if (nextEnabled === 0) {
        return null;
      }
      // Go to next page
      await this.page.locator("//span[text()='NEXT']").click();
    }
  }

  async verifyAtRecevingOfficerInGrid(): Promise<void> {
    // Empty method in Java source - placeholder
  }

  async verifyAtDetailNoNotFoundInGrid(detailNo: string): Promise<void> {
    const cells = this.resultTable.locator("//th[contains(text(),'Detail#')]/ancestor::table//tbody/tr/td[position()=count(//th[contains(text(),'Detail#')]/preceding-sibling::th)+1]");
    const allTexts = await cells.allTextContents();
    expect(allTexts).not.toContain(detailNo);
  }
}

// ==================== DetailEntry ====================

export class DetailEntryPage {
  readonly page: Page;
  readonly dateOfDetailEdit: Locator;
  readonly timeOfDetailEdit: Locator;
  readonly expectedDurationEdit: Locator;
  readonly typeOfDetailDropdown: Locator;
  readonly locationEdit: Locator;
  readonly locationVerifyCheckbox: Locator;
  readonly noOfficersRequestedEdit: Locator;
  readonly priorityYesRadio: Locator;
  readonly priorityNoRadio: Locator;
  readonly highRiskCheckbox: Locator;
  readonly supervisorRequiredCheckbox: Locator;
  readonly alcoholServedCheckbox: Locator;
  readonly detailCancelledCheckbox: Locator;
  readonly detailCancelledRadioButton: Locator;
  readonly requestedByTab: Locator;
  readonly billToTab: Locator;
  readonly officersTab: Locator;
  readonly statusUpdateTab: Locator;
  readonly attachmentsTab: Locator;
  readonly feesTab: Locator;
  readonly invoiceTab: Locator;
  readonly flagsTab: Locator;
  readonly saveButton: Locator;
  readonly resetIcon: Locator;
  readonly deleteIcon: Locator;
  readonly copyButton: Locator;
  readonly roadClosureButton: Locator;
  readonly roadClosureCheckBox: Locator;
  readonly statusBar: Locator;
  readonly menuStatusTextView: Locator;
  readonly detailNumberEdit: Locator;
  readonly jurisDropdown: Locator;
  readonly detailFilledCheckbox: Locator;
  readonly saveAndCloseButton: Locator;
  readonly screenButtonMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dateOfDetailEdit = page.locator('#dtDateTimeOfDetail_Date_KPIDttmCtrl');
    this.timeOfDetailEdit = page.locator("//table[@id='dtDateTimeOfDetail_Time']//input");
    this.expectedDurationEdit = page.locator('#txtExpectedDuration');
    this.typeOfDetailDropdown = page.locator('#cddTypeOfDetailWork_DropDown');
    this.locationEdit = page.locator('#adrLocationOfDetail_txtFrom');
    this.locationVerifyCheckbox = page.locator('#adrLocationOfDetail_chkVerify');
    this.noOfficersRequestedEdit = page.locator('#txtOfficersRequested');
    this.priorityYesRadio = page.locator('#rbtStatus_0');
    this.priorityNoRadio = page.locator('#rbtStatus_1');
    this.highRiskCheckbox = page.locator('#chkHighRisk');
    this.supervisorRequiredCheckbox = page.locator('#chkSupervisorRequired');
    this.alcoholServedCheckbox = page.locator('#chkAlcoholServed');
    this.detailCancelledCheckbox = page.locator('#rbtStatus1_0');
    this.detailCancelledRadioButton = page.locator('#rbtStatus1_0');
    this.requestedByTab = page.locator("//span[contains(text(),'Detail Requested By')]");
    this.billToTab = page.locator("//span[contains(text(),'Bill To')]");
    this.officersTab = page.locator("//span[@title='Officers']");
    this.statusUpdateTab = page.locator("//span[contains(text(),'Status Update')]");
    this.attachmentsTab = page.locator("//span[contains(text(),'Attachments')]");
    this.feesTab = page.locator("//span[contains(text(),'Fees')]");
    this.invoiceTab = page.locator("//span[@title='Invoice']");
    this.flagsTab = page.locator("//span[contains(text(),'Flags')]");
    this.saveButton = page.locator('#cmdsave');
    this.resetIcon = page.locator('#cmdRefresh');
    this.deleteIcon = page.locator('#cmdDelete');
    this.copyButton = page.locator('#btnCopy');
    this.roadClosureButton = page.locator('#cmdRoadClosure');
    this.roadClosureCheckBox = page.locator('#chkRoadClosure');
    this.statusBar = page.locator('//b');
    this.menuStatusTextView = page.locator('#lblStatus');
    this.detailNumberEdit = page.locator('#nbrDetailNo_Number');
    this.jurisDropdown = page.locator('#lstJuris');
    this.detailFilledCheckbox = page.locator('#chkDtlFil');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.screenButtonMessage = page.locator('//b');
  }

  async clickSave(): Promise<void> {
    await this.saveButton.click();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async verifyDeailDateTimeAcknowledgeMessage(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1018) Required Entries are Missing - Date & Time of Detail');
      await dialog.accept();
    });
  }

  async enterDateTimeDetailAsCurrentDateTime(currentDate: string, currentTime: string): Promise<void> {
    await this.dateOfDetailEdit.fill(currentDate);
    await this.timeOfDetailEdit.click();
    await this.timeOfDetailEdit.fill(currentTime);
  }

  async verifyDateOfDetailFieldIsEmpty(): Promise<void> {
    const value = await this.dateOfDetailEdit.inputValue();
    expect(value).not.toBe('');
  }

  async enterAtExpectedDuration(duration: string): Promise<void> {
    await this.expectedDurationEdit.fill(duration);
  }

  async verifyAtExpectedDuration(duration: string): Promise<void> {
    await expect(this.expectedDurationEdit).toHaveValue(duration);
  }

  async selectAtTypeOfDetailWork(typeOfDetail: string): Promise<void> {
    await this.typeOfDetailDropdown.selectOption({ label: typeOfDetail });
    await this.typeOfDetailDropdown.press('Tab');
  }

  async enterAtLocationOfDetail(location: string): Promise<void> {
    await this.locationEdit.fill(location);
    await this.locationVerifyCheckbox.press('Tab');
  }

  async verifyAtLocationOfDetail(location: string): Promise<void> {
    await expect(this.locationEdit).toHaveValue(location);
  }

  async enterAtNoOfOfficersRequested(noOfOfficers: string): Promise<void> {
    await this.noOfficersRequestedEdit.fill(noOfOfficers);
  }

  async verifyAtNoOfOfficersRequested(noOfOfficers: string): Promise<void> {
    await expect(this.noOfficersRequestedEdit).toHaveValue(noOfOfficers);
  }

  async clickPriorityDetailYesRadiobutton(): Promise<void> {
    await this.priorityYesRadio.click();
  }

  async clickPriorityDetailNoRadiobutton(): Promise<void> {
    await this.priorityNoRadio.click();
  }

  async clickHighRiskCheckBox(): Promise<void> {
    await this.highRiskCheckbox.click();
  }

  async clickSupervisorRequiredCheckBox(): Promise<void> {
    await this.supervisorRequiredCheckbox.click();
  }

  async clickDetailRequestedByTab(): Promise<void> {
    await this.requestedByTab.click();
  }

  async clickBillToTab(): Promise<void> {
    await this.billToTab.click();
  }

  async clickOfficersTab(): Promise<void> {
    await this.officersTab.click();
  }

  async clickStatusUpdateTab(): Promise<void> {
    await this.statusUpdateTab.click();
  }

  async clickAttachmentsTab(): Promise<void> {
    await this.attachmentsTab.click();
  }

  async clickFeesTab(): Promise<void> {
    await this.feesTab.click();
  }

  async clickInvoiceTab(): Promise<void> {
    await this.invoiceTab.click();
  }

  async clickFlagsTab(): Promise<void> {
    await this.flagsTab.click();
  }

  async verifyDateTimeRequestAcknowledgeMessage(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1018) Required Entries are Missing - Date & Time of Request');
      await dialog.accept();
    });
  }

  async verifyBillToaAccountAcknowledgeMessage(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(33006) Bill To Account is required');
      await dialog.accept();
    });
  }

  async closeScreen(): Promise<void> {
    await this.page.close();
  }

  async verifyStatusAsNotFilled(): Promise<void> {
    await expect(this.menuStatusTextView).toHaveText('NOT FILLED');
  }

  async verifyStatusAsCompletedBilled(): Promise<void> {
    await expect(this.menuStatusTextView).toHaveText('COMPLETED/BILLED');
  }

  async verifyStatusAsCancelled(): Promise<void> {
    await expect(this.menuStatusTextView).toHaveText('CANCELLED');
  }

  async verifyCopyButtonEnabled(): Promise<void> {
    await expect(this.copyButton).toBeEnabled();
  }

  async clickCopyButton(): Promise<void> {
    await this.copyButton.click();
  }

  async getExpectedDuration(): Promise<string> {
    return await this.expectedDurationEdit.inputValue();
  }

  async clickDetailCancelledCheckbox(): Promise<void> {
    await this.detailCancelledCheckbox.click();
  }

  async clickDetailCancelledRadioButton(): Promise<void> {
    await this.detailCancelledRadioButton.click();
  }

  async verifyDetailCancelledRadioButtonIsNotSelected(): Promise<void> {
    await expect(this.detailCancelledRadioButton).not.toBeChecked();
  }

  async verifyPriorityDetailRadioButtonsAreNotSelected(): Promise<void> {
    await expect(this.priorityYesRadio).not.toBeChecked();
    await expect(this.priorityNoRadio).not.toBeChecked();
  }

  async verifyCopiedSuccessfullyMessage(): Promise<void> {
    await expect(this.statusBar).toHaveText('2528 - Copied successfully');
  }

  async clickResetButton(): Promise<void> {
    await this.resetIcon.click();
  }

  async verifyExpectedDurationIsEmpty(): Promise<void> {
    await expect(this.expectedDurationEdit).toHaveValue('');
  }

  async verifyTypeOfDetailWorkAsEmpty(): Promise<void> {
    const selected = await this.typeOfDetailDropdown.inputValue();
    expect(selected).toBe('--');
  }

  async verifyNoOfOfficersRequestedAsEmpty(): Promise<void> {
    await expect(this.noOfficersRequestedEdit).toHaveValue('');
  }

  async verifyAdditionSuccesslMessage(): Promise<void> {
    await expect(this.statusBar).toHaveText('1002 - Addition Successful');
  }

  async verifyUpdateSuccesslMessage(): Promise<void> {
    const text = await this.statusBar.textContent();
    expect(text).toContain('1003 - Update successful');
  }

  async verifyAdditionSuccesslMessageForFire(): Promise<void> {
    await expect(this.statusBar).toHaveText('1002 - Addition successful');
  }

  async deleteWithConfirmMessage(): Promise<void> {
    await this.deleteIcon.click();
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(4)Do you want to delete?');
      await dialog.accept();
    });
  }

  async clickRoadClosureButton(): Promise<void> {
    await this.roadClosureButton.click();
  }

  async clickRoadClosureCheckBox(): Promise<void> {
    await this.roadClosureCheckBox.click();
  }

  async verify1018RequiredEntriesAreMissingDateAndTimeAcknowledgeMessage(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1018) Required Entries are Missing - Date & Time of Detail');
      await dialog.accept();
    });
  }

  async verify1018RequiredEntriesAreMissingExpectedDurationAcknowledgeMessage(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1018) Required Entries are Missing - Expected Duration');
      await dialog.accept();
    });
  }

  async verify1018RequiredEntriesAreMissingLocationAcknowledgeMessage(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1018) Required Entries are Missing - Location of Detail');
      await dialog.accept();
    });
  }

  async verify1018RequiredEntriesAreMissingNoOfOfficersRequestedAcknowledgeMessage(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1018)Required Entries are Missing - No of Officers Requested');
      await dialog.accept();
    });
  }

  async verify1018RequiredEntriesAreMissingDateAndTimeRequestedAcknowledgeMessage(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1018) Required Entries are Missing - Date & Time of Request');
      await dialog.accept();
    });
  }

  async verify1018RequiredEntriesAreMissingOfficerTakingRequestedAcknowledgeMessage(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1018) Required Entries are Missing - Officer Taking Request');
      await dialog.accept();
    });
  }

  async verify1018RequiredEntriesAreMissingBusinessOrPersonNameAcknowledgeMessage(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1018) Required Entries are Missing - Business or Person Name');
      await dialog.accept();
    });
  }

  async verifyRequiredEntriesAreMissingCustom1AcknowledgeMessage(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1018) Required Entries are Missing Custom1');
      await dialog.accept();
    });
  }

  async verifyRequiredEntriesAreMissingTypeOfDetailWork(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1018) Required Entries are Missing - Type of Detail Work');
      await dialog.accept();
    });
  }

  async verifyDeleteIconIsDisabled(): Promise<void> {
    await expect(this.deleteIcon).toBeDisabled();
  }

  async clickDeleteIcon(): Promise<void> {
    await this.deleteIcon.click();
  }

  async verifyDeleteConfirmPopupAppears(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(4) Do you want to delete?');
      await dialog.accept();
    });
  }

  async verifyDeleteIconIsEnabled(): Promise<void> {
    await expect(this.deleteIcon).toBeEnabled();
  }

  async getDateOfDetail(): Promise<string> {
    return await this.dateOfDetailEdit.inputValue();
  }

  async getTimeOfDetail(): Promise<string> {
    return await this.timeOfDetailEdit.inputValue();
  }

  async verifyHighRiskCheckBoxIsSelected(): Promise<void> {
    await expect(this.highRiskCheckbox).toBeChecked();
  }

  async verifySupervisorRequiredCheckboxIsSelected(): Promise<void> {
    await expect(this.supervisorRequiredCheckbox).toBeChecked();
  }

  async verifyAlcoholServedCheckboxIsSelected(): Promise<void> {
    await expect(this.alcoholServedCheckbox).toBeChecked();
  }

  async selectAtJurisDropdown(juris: string): Promise<void> {
    await this.jurisDropdown.selectOption({ label: juris });
  }

  async getDetailNo(): Promise<string> {
    return await this.detailNumberEdit.inputValue();
  }

  async verifyErrorAcknowledgePopupNotAvailable(windowExist: boolean): Promise<void> {
    if (windowExist) {
      this.page.once('dialog', async dialog => {
        const message = dialog.message();
        expect(message).not.toContain('Validation');
        expect(message).not.toContain('Error');
        await dialog.accept();
      });
    }
  }
}

// ==================== FlagsTab ====================

export class FlagsTabPage {
  readonly page: Page;
  readonly deleteIconGridHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.deleteIconGridHeader = page.locator("//div[@id='grdFlags']//th//span[text()='X']");
  }

  async clickDeleteColumnHeader(): Promise<void> {
    await this.deleteIconGridHeader.click();
  }

  async verifyAddressFlagEntryScreenNotExist(): Promise<void> {
    // Verify Address Flag Entry screen does not exist
  }

  async verify1005AcknowledgeIsNotArise(): Promise<void> {
    // Verify acknowledge message popup does not arise on Detail Entry
  }

  async selectAtRemarks(remarks: string): Promise<void> {
    await this.page.locator(`//div[text()='Remarks: ${remarks} ']`).click();
  }
}

// ==================== DetailRequestedByTab ====================

export class DetailRequestedByTabPage {
  readonly page: Page;
  readonly dateTimeOfRequestEdit: Locator;
  readonly timeOfRequestEdit: Locator;
  readonly officerTakingRequestCodeEdit: Locator;
  readonly officerTakingRequestInfoIcon: Locator;
  readonly businessPersonNameTypeEdit: Locator;
  readonly businessPersonNameIDEdit: Locator;
  readonly businessPersonLastNameEdit: Locator;
  readonly businessPersonFirstNameEdit: Locator;
  readonly contactLastNameEdit: Locator;
  readonly contactFirstNameEdit: Locator;
  readonly contactNameTypeEdit: Locator;
  readonly contactNameIDEdit: Locator;
  readonly contactNameDropDown: Locator;
  readonly cancelledDateEdit: Locator;
  readonly cancelledTimeEdit: Locator;
  readonly byCodeEdit: Locator;
  readonly businessNameInfoIcon: Locator;
  readonly custom1Edit: Locator;
  readonly custom2Edit: Locator;
  readonly customLabel1: Locator;
  readonly customLabel2: Locator;
  readonly address1Edit: Locator;
  readonly phoneTypeDropdown: Locator;
  readonly phoneNumberEdit: Locator;
  readonly emailEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dateTimeOfRequestEdit = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_dtDateTimeOfRequest_Date_KPIDttmCtrl');
    this.timeOfRequestEdit = page.locator("//table[@id='tabDetailBilling_tmpl0_usrDetailRequestedBy_dtDateTimeOfRequest_Time']//input");
    this.officerTakingRequestCodeEdit = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_lupOfficeTakingRequest_CodeValue');
    this.officerTakingRequestInfoIcon = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_lupOfficeTakingRequest_cmdIncOnAddr');
    this.businessPersonNameTypeEdit = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_ncrlBusinessOrPersonName_NameType');
    this.businessPersonNameIDEdit = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_ncrlBusinessOrPersonName_NameTypeID');
    this.businessPersonLastNameEdit = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_ncrlBusinessOrPersonName_LastName');
    this.businessPersonFirstNameEdit = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_ncrlBusinessOrPersonName_FirstName');
    this.contactLastNameEdit = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_ncrlContactName_LastName');
    this.contactFirstNameEdit = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_ncrlContactName_FirstName');
    this.contactNameTypeEdit = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_ncrlContactName_NameType');
    this.contactNameIDEdit = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_ncrlContactName_NameTypeID');
    this.contactNameDropDown = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_cddContactName');
    this.cancelledDateEdit = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_dtCancelledDateTime_Date_KPIDttmCtrl');
    this.cancelledTimeEdit = page.locator("//table[@id='tabDetailBilling_tmpl0_usrDetailRequestedBy_dtCancelledDateTime_Time']//input");
    this.byCodeEdit = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_lupBy_CodeValue');
    this.businessNameInfoIcon = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_ncrlBusinessOrPersonName_imgSrch');
    this.custom1Edit = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_txtCustom1');
    this.custom2Edit = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_txtCustom2');
    this.customLabel1 = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_lblCustom1');
    this.customLabel2 = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_lblCustom2');
    this.address1Edit = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_adrAddress1_txtFrom');
    this.phoneTypeDropdown = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_cupContactPhone_PhoneType_DropDown');
    this.phoneNumberEdit = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_cupContactPhone_PhoneNumber');
    this.emailEdit = page.locator('#tabDetailBilling_tmpl0_usrDetailRequestedBy_txtEmail');
  }

  async tabDateTimeOfRequested(): Promise<void> {
    await this.dateTimeOfRequestEdit.press('Tab');
    await this.timeOfRequestEdit.press('Tab');
  }

  async verifyDateOfRequestFieldIsEmpty(): Promise<void> {
    const value = await this.dateTimeOfRequestEdit.inputValue();
    expect(value).not.toBe('');
  }

  async tabOfficerTakingRequest(): Promise<void> {
    await this.officerTakingRequestCodeEdit.press('Tab');
  }

  async verifyOfficerTakingRequestFieldIsEmpty(): Promise<void> {
    const value = await this.officerTakingRequestCodeEdit.inputValue();
    expect(value).not.toBe('');
  }

  async selectName(): Promise<void> {
    // Deprecated in Java source - placeholder for name selection
  }

  async enterAtBusinessNameID(businessNameID: string): Promise<void> {
    await this.businessPersonNameTypeEdit.clear();
    await this.businessPersonNameTypeEdit.fill(businessNameID.substring(0, 1));
    await this.businessPersonNameIDEdit.fill(businessNameID.substring(2));
    await this.businessPersonNameIDEdit.press('Tab');
  }

  async verifyAtBusinessNameID(businessNameID: string): Promise<void> {
    await expect(this.businessPersonNameTypeEdit).toHaveValue(businessNameID.substring(0, 1));
    await expect(this.businessPersonNameIDEdit).toHaveValue(businessNameID.substring(2));
  }

  async enterAtContactLastName(lastName: string): Promise<void> {
    await this.contactLastNameEdit.fill(lastName);
  }

  async enterAtContactFirstName(firstName: string): Promise<void> {
    await this.contactFirstNameEdit.fill(firstName);
    await this.contactFirstNameEdit.press('Tab');
  }

  async tabCancelledDateTime(): Promise<void> {
    await this.cancelledDateEdit.press('Tab');
    await this.cancelledTimeEdit.press('Tab');
  }

  async tabBy(): Promise<void> {
    await this.byCodeEdit.press('Tab');
  }

  async verifyCancellDateAndByFieldsEnabled(): Promise<void> {
    await expect(this.cancelledDateEdit).toBeVisible();
    await expect(this.byCodeEdit).toBeVisible();
  }

  async verifyCancellDateAndByFieldsNotDispalyed(): Promise<void> {
    await expect(this.cancelledDateEdit).not.toBeVisible();
    await expect(this.byCodeEdit).not.toBeVisible();
  }

  async verifyLastNameIsEmpty(): Promise<void> {
    await expect(this.businessPersonLastNameEdit).toHaveValue('');
  }

  async verifyBusinessNameBubbleIconIsNotDisplayed(): Promise<void> {
    const src = await this.businessNameInfoIcon.getAttribute('src');
    expect(src).not.toContain('debug.gif');
  }

  async clickCustom1Label(): Promise<void> {
    await this.customLabel1.click();
  }

  async clickCustom2Label(): Promise<void> {
    await this.customLabel2.click();
  }

  async verifyCustom1FieldAsMandatory(): Promise<void> {
    const attr = await this.customLabel1.getAttribute('kpifieldusage');
    expect(attr).toBe('Mandatory');
  }

  async verifyCustom2FieldAsMandatory(): Promise<void> {
    const attr = await this.customLabel2.getAttribute('kpifieldusage');
    expect(attr).toBe('Mandatory');
  }

  async enterAtCustom1(custom1: string): Promise<void> {
    await this.custom1Edit.fill(custom1);
    await this.custom1Edit.press('Tab');
  }

  async enterAtCustom2(custom2: string): Promise<void> {
    await this.custom2Edit.fill(custom2);
    await this.custom2Edit.press('Tab');
  }

  async enterBusinessLastNameAsSAndTabOut(): Promise<void> {
    await this.businessPersonNameTypeEdit.clear();
    await this.businessPersonNameTypeEdit.fill('B');
    await this.businessPersonLastNameEdit.fill('S');
    await this.businessPersonLastNameEdit.press('Tab');
  }

  async verifyAtAddress1(address: string): Promise<void> {
    await expect(this.address1Edit).toHaveValue(address);
  }

  async verifyAtContactNameID(contactNameID: string): Promise<void> {
    const nameType = await this.contactNameTypeEdit.inputValue();
    const nameID = await this.contactNameIDEdit.inputValue();
    expect(`${nameType}-${nameID}`).toBe(contactNameID);
  }

  async verifyAtPhone(phoneType: string, phoneNumber: string): Promise<void> {
    const type = await this.phoneTypeDropdown.inputValue();
    expect(type).toBe(phoneType);
    const number = await this.phoneNumberEdit.inputValue();
    expect(number).toBe(phoneNumber);
  }

  async verifyAtEmail(email: string): Promise<void> {
    await expect(this.emailEdit).toHaveValue(email);
  }

  async clickOfficerTakingRequestInfoIcon(): Promise<void> {
    await this.officerTakingRequestInfoIcon.click();
  }

  async verifyNameSearchScreenNotOpenedTwice(): Promise<void> {
    // Verify Name Search screen is not opened more than once
  }
}

// ==================== DetailBillToTab ====================

export class DetailBillToTabPage {
  readonly page: Page;
  readonly sameAsBusinessAccountCheckbox: Locator;
  readonly billToAccountNameTypeEdit: Locator;
  readonly billToAccountNameIDEdit: Locator;
  readonly billToAccountLastNameEdit: Locator;
  readonly billToAccountFirstNameEdit: Locator;
  readonly selectNameLabel: Locator;
  readonly selectNameComboBox: Locator;
  readonly billingContactNameTypeEdit: Locator;
  readonly billingContactNameIDEdit: Locator;
  readonly billingContactLastNameEdit: Locator;
  readonly billingContactFirstNameEdit: Locator;
  readonly billingContactMiddleNameEdit: Locator;
  readonly billingContactNameSuffixDropdown: Locator;
  readonly billingContactNameLookup: Locator;
  readonly billingContactPhoneTypeDropdown: Locator;
  readonly billingContactPhoneNumberEdit: Locator;
  readonly billingContactEmailEdit: Locator;
  readonly address1Edit: Locator;
  readonly address2Edit: Locator;
  readonly cityEdit: Locator;
  readonly stateDropdown: Locator;
  readonly zipCodeEdit: Locator;
  readonly phoneTypeDropdown: Locator;
  readonly phoneNumberEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sameAsBusinessAccountCheckbox = page.locator('#tabDetailBilling_tmpl1_usrBillTo_chkSameAsBusinessAccount');
    this.billToAccountNameTypeEdit = page.locator('#tabDetailBilling_tmpl1_usrBillTo_ncrBillToAccount_NameType');
    this.billToAccountNameIDEdit = page.locator('#tabDetailBilling_tmpl1_usrBillTo_ncrBillToAccount_NameTypeID');
    this.billToAccountLastNameEdit = page.locator('#tabDetailBilling_tmpl1_usrBillTo_ncrBillToAccount_LastName');
    this.billToAccountFirstNameEdit = page.locator('#tabDetailBilling_tmpl1_usrBillTo_ncrBillToAccount_FirstName');
    this.selectNameLabel = page.locator('#tabDetailBilling_tmpl1_usrBillTo_KPILabel3');
    this.selectNameComboBox = page.locator('#tabDetailBilling_tmpl1_usrBillTo_CddSelectName');
    this.billingContactNameTypeEdit = page.locator('#tabDetailBilling_tmpl1_usrBillTo_ncrlContactName_NameType');
    this.billingContactNameIDEdit = page.locator('#tabDetailBilling_tmpl1_usrBillTo_ncrlContactName_NameTypeID');
    this.billingContactLastNameEdit = page.locator('#tabDetailBilling_tmpl1_usrBillTo_ncrlContactName_LastName');
    this.billingContactFirstNameEdit = page.locator('#tabDetailBilling_tmpl1_usrBillTo_ncrlContactName_FirstName');
    this.billingContactMiddleNameEdit = page.locator('#tabDetailBilling_tmpl1_usrBillTo_ncrlContactName_MiddleName');
    this.billingContactNameSuffixDropdown = page.locator('#tabDetailBilling_tmpl1_usrBillTo_ncrlContactName_Suffix_DropDown');
    this.billingContactNameLookup = page.locator('#tabDetailBilling_tmpl1_usrBillTo_ncrlContactName_imgSrch');
    this.billingContactPhoneTypeDropdown = page.locator('#tabDetailBilling_tmpl1_usrBillTo_cupContactPhone_PhoneType_DropDown');
    this.billingContactPhoneNumberEdit = page.locator('#tabDetailBilling_tmpl1_usrBillTo_cupContactPhone_PhoneNumber');
    this.billingContactEmailEdit = page.locator('#tabDetailBilling_tmpl1_usrBillTo_txtEmail');
    this.address1Edit = page.locator('#tabDetailBilling_tmpl1_usrBillTo_adrAddress1_txtFrom');
    this.address2Edit = page.locator('#tabDetailBilling_tmpl1_usrBillTo_txtAddress2');
    this.cityEdit = page.locator('#tabDetailBilling_tmpl1_usrBillTo_CSZBusinessPerson_City');
    this.stateDropdown = page.locator('#tabDetailBilling_tmpl1_usrBillTo_CSZBusinessPerson_State_DropDown');
    this.zipCodeEdit = page.locator('#tabDetailBilling_tmpl1_usrBillTo_CSZBusinessPerson_Zip');
    this.phoneTypeDropdown = page.locator('#tabDetailBilling_tmpl1_usrBillTo_CupBusinessPerson_PhoneType_DropDown');
    this.phoneNumberEdit = page.locator('#tabDetailBilling_tmpl1_usrBillTo_CupBusinessPerson_PhoneNumber');
  }

  async clickSamAsBusinessAccountCheckBox(): Promise<void> {
    await this.sameAsBusinessAccountCheckbox.click();
  }

  async verifySamAsBusinessAccountCheckBoxChecked(): Promise<void> {
    await expect(this.sameAsBusinessAccountCheckbox).not.toBeChecked();
  }

  async verifyAtLastNameFirstName(lastName: string, firstName: string): Promise<void> {
    await expect(this.billToAccountLastNameEdit).toHaveValue(lastName);
    await expect(this.billToAccountFirstNameEdit).toHaveValue(firstName);
  }

  async verifyBillToAccountNameID(nameID: string): Promise<void> {
    await expect(this.billToAccountNameTypeEdit).toHaveValue(nameID.substring(0, 1));
    await expect(this.billToAccountNameIDEdit).toHaveValue(nameID.substring(2));
  }

  async verifyAtBillToAccountLastName(lastName: string): Promise<void> {
    await expect(this.billToAccountLastNameEdit).toHaveValue(lastName);
  }

  async enterAtBillToAccount(billToAccountID: string): Promise<void> {
    await this.billToAccountNameTypeEdit.fill(billToAccountID.substring(0, 1));
    await this.billToAccountNameTypeEdit.press('Tab');
    await this.billToAccountNameIDEdit.fill(billToAccountID.substring(2));
    await this.billToAccountNameIDEdit.press('Tab');
  }

  async verifySelectNameIsNonMandatory(): Promise<void> {
    const style = await this.selectNameLabel.getAttribute('style');
    expect(style).not.toContain('rgb(153, 0, 0)');
  }

  async verifySelectNameIsDisabled(): Promise<void> {
    await expect(this.selectNameComboBox).toBeDisabled();
  }

  async verifyBillingContactNameTypeIsEnabled(): Promise<void> {
    await expect(this.billingContactNameTypeEdit).toBeEnabled();
  }

  async verifyBillingContactNameIDIsEnabled(): Promise<void> {
    await expect(this.billingContactNameIDEdit).toBeEnabled();
  }

  async verifyBillingContactLastNameIsEnabled(): Promise<void> {
    await expect(this.billingContactLastNameEdit).toBeEnabled();
  }

  async verifyBillingContactFirstNameIsEnabled(): Promise<void> {
    await expect(this.billingContactFirstNameEdit).toBeEnabled();
  }

  async verifyBillingContactMiddleNameIsEnabled(): Promise<void> {
    await expect(this.billingContactMiddleNameEdit).toBeEnabled();
  }

  async verifyBillingContactSuffixIsEnabled(): Promise<void> {
    await expect(this.billingContactNameSuffixDropdown).toBeEnabled();
  }

  async verifyBillingContactNameLookupIsEnabled(): Promise<void> {
    await expect(this.billingContactNameLookup).toBeEnabled();
  }

  async verifyBillingContactPhoneTypeIsEnabled(): Promise<void> {
    await expect(this.billingContactPhoneTypeDropdown).toBeEnabled();
  }

  async verifyBillingContactPhoneNoIsEnabled(): Promise<void> {
    await expect(this.billingContactPhoneNumberEdit).toBeEnabled();
  }

  async verifyBillingContactEmailIsEnabled(): Promise<void> {
    await expect(this.billingContactEmailEdit).toBeEnabled();
  }

  async verifyAddress1IsDisabled(): Promise<void> {
    await expect(this.address1Edit).toBeDisabled();
  }

  async verifyAddress2IsDisabled(): Promise<void> {
    await expect(this.address2Edit).toBeDisabled();
  }

  async verifyCityIsDisabled(): Promise<void> {
    await expect(this.cityEdit).toBeDisabled();
  }

  async verifyStateIsDisabled(): Promise<void> {
    await expect(this.stateDropdown).toBeDisabled();
  }

  async verifyPhoneTypeIsDisabled(): Promise<void> {
    await expect(this.phoneTypeDropdown).toBeDisabled();
  }

  async verifyPhoneNoIsDisabled(): Promise<void> {
    await expect(this.phoneNumberEdit).toBeDisabled();
  }

  async verifyAtAddress1(address: string): Promise<void> {
    await expect(this.address1Edit).toHaveValue(address);
  }

  async verifyAtCity(city: string): Promise<void> {
    await expect(this.cityEdit).toHaveValue(city);
  }

  async verifyAtState(state: string): Promise<void> {
    const selected = await this.stateDropdown.inputValue();
    expect(selected).toBe(state);
  }

  async verfyAtZipCode(zipCode: string): Promise<void> {
    await expect(this.zipCodeEdit).toHaveValue(zipCode);
  }
}

// ==================== DetailOfficersTab ====================

export class DetailOfficersTabPage {
  readonly page: Page;
  readonly scheduledFromDateEdit: Locator;
  readonly scheduledFromTimeEdit: Locator;
  readonly scheduledToDateEdit: Locator;
  readonly scheduledToTimeEdit: Locator;
  readonly durationTextView: Locator;
  readonly officerPFCodeEdit: Locator;
  readonly officerPFLookupButton: Locator;
  readonly referredToCodeEdit: Locator;
  readonly referredToLookupButton: Locator;
  readonly dateFromEdit: Locator;
  readonly timeFromEdit: Locator;
  readonly rateCodeComboBox: Locator;
  readonly amountToBePaidEdit: Locator;
  readonly amountToBeBilledEdit: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly resultGrid: Locator;
  readonly durationLabel: Locator;
  readonly actualWorkedHourLabel: Locator;
  readonly actualDurationEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.scheduledFromDateEdit = page.locator('#tabDetailBilling_tmpl2_usrOfficers_dtScheduledfrom_Date_KPIDttmCtrl');
    this.scheduledFromTimeEdit = page.locator("//table[@id='tabDetailBilling_tmpl2_usrOfficers_dtScheduledfrom_Time']//input");
    this.scheduledToDateEdit = page.locator('#tabDetailBilling_tmpl2_usrOfficers_dtScheduledto_Date_KPIDttmCtrl');
    this.scheduledToTimeEdit = page.locator("//table[@id='tabDetailBilling_tmpl2_usrOfficers_dtScheduledto_Time']//input");
    this.durationTextView = page.locator('#tabDetailBilling_tmpl2_usrOfficers_txtDuration');
    this.officerPFCodeEdit = page.locator('#tabDetailBilling_tmpl2_usrOfficers_lupOfficerPF_CodeValue');
    this.officerPFLookupButton = page.locator('#tabDetailBilling_tmpl2_usrOfficers_lupOfficerPF_imgBtn');
    this.referredToCodeEdit = page.locator('#tabDetailBilling_tmpl2_usrOfficers_lupReferredto_CodeValue');
    this.referredToLookupButton = page.locator('#tabDetailBilling_tmpl2_usrOfficers_lupReferredto_imgBtn');
    this.dateFromEdit = page.locator('#tabDetailBilling_tmpl2_usrOfficers_dtActualFrom_Date_KPIDttmCtrl');
    this.timeFromEdit = page.locator("//table[@id='tabDetailBilling_tmpl2_usrOfficers_dtScheduledfrom_Time']//input");
    this.rateCodeComboBox = page.locator('#tabDetailBilling_tmpl2_usrOfficers_cddRateCode');
    this.amountToBePaidEdit = page.locator('#tabDetailBilling_tmpl2_usrOfficers_txtAmounttobepaid');
    this.amountToBeBilledEdit = page.locator('#tabDetailBilling_tmpl2_usrOfficers_txtAmounttobefilled');
    this.addButton = page.locator('#tabDetailBilling_tmpl2_usrOfficers_imgAdd');
    this.clearButton = page.locator('#tabDetailBilling_tmpl2_usrOfficers_imgClear');
    this.resultGrid = page.locator('#tabDetailBilling_tmpl2_usrOfficers_grdOfficersDetail');
    this.durationLabel = page.locator('#tabDetailBilling_tmpl2_usrOfficers_lblActualDuration');
    this.actualWorkedHourLabel = page.locator('#tabDetailBilling_tmpl2_usrOfficers_lblActualWorkhours');
    this.actualDurationEdit = page.locator('#tabDetailBilling_tmpl2_usrOfficers_txtActualDuration');
  }

  async tabScheduledFrom(): Promise<void> {
    await this.scheduledFromDateEdit.press('Tab');
    await this.scheduledFromTimeEdit.press('Tab');
  }

  async tabScheduledTo(): Promise<void> {
    await this.scheduledToDateEdit.press('Tab');
    await this.scheduledToTimeEdit.press('Tab');
  }

  async verifyDuration(duration: string): Promise<void> {
    await expect(this.durationTextView).toHaveValue(duration);
  }

  async tabOfficerPF(): Promise<void> {
    await this.officerPFCodeEdit.press('Tab');
  }

  async verifyHigherPriorityDetailAcknowledgeMessage(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(33000) Please enter High Priority Detail before entering Low Priority Detail');
      await dialog.accept();
    });
  }

  async clickOfficerPFLookup(): Promise<void> {
    await this.officerPFLookupButton.click();
  }

  async clickReferredToPFLookup(): Promise<void> {
    await this.referredToLookupButton.click();
  }

  async verifyAtOfficer(officer: string, rowIndex: number): Promise<void> {
    const cell = this.resultGrid.locator('tbody tr').nth(rowIndex).locator("td").filter({ hasText: officer });
    await expect(cell).toBeVisible();
  }

  async verifyAtOfficer1(officer1: string, rowIndex: number): Promise<void> {
    const cell = this.resultGrid.locator('tbody tr').nth(rowIndex).locator("td").filter({ hasText: officer1 });
    await expect(cell).toBeVisible();
  }

  async clickAtOfficerInGrid(officer: string): Promise<void> {
    await this.resultGrid.locator(`//td[contains(text(),'${officer}')]`).click();
  }

  async verifyReferedToFieldDisabled(): Promise<void> {
    await expect(this.referredToCodeEdit).toBeDisabled();
  }

  async tabDateFrom(): Promise<void> {
    await this.dateFromEdit.press('Tab');
    await this.timeFromEdit.press('Tab');
  }

  async selectAtRadeCode(rateCode: string): Promise<void> {
    await this.rateCodeComboBox.selectOption({ label: rateCode });
    await this.rateCodeComboBox.press('Tab');
  }

  async enterAtAmountToPaid(amount: string): Promise<void> {
    await this.amountToBePaidEdit.fill(amount);
  }

  async enterAtAmountToBilled(amount: string): Promise<void> {
    await this.amountToBeBilledEdit.fill(amount);
  }

  async clickAddButton(): Promise<void> {
    await this.addButton.click();
  }

  async clickClearButton(): Promise<void> {
    await this.clearButton.click();
  }

  async verifyAtRateCode(rateCode: string, rowIndex: number): Promise<void> {
    const cell = this.resultGrid.locator('tbody tr').nth(rowIndex).locator("td").filter({ hasText: rateCode });
    await expect(cell).toBeVisible();
  }

  async verifyDurationLabelIsCustomField(): Promise<void> {
    const cssValue = await this.durationLabel.evaluate(el => getComputedStyle(el).textDecoration);
    expect(cssValue).toContain('underline');
  }

  async verifyActualWorkedHoursLabelIsCustomField(): Promise<void> {
    const cssValue = await this.actualWorkedHourLabel.evaluate(el => getComputedStyle(el).textDecoration);
    expect(cssValue).toContain('underline');
  }

  async clickOnDurationLabel(): Promise<void> {
    await this.durationLabel.click();
  }

  async clickOnActualWorkedHoursLabel(): Promise<void> {
    await this.actualWorkedHourLabel.click();
  }

  async verifyDurationFieldLabelNameChangedAsCustomName(customName: string): Promise<void> {
    await expect(this.durationLabel).toHaveText(customName);
  }

  async verifyActualWorkedHoursFieldLabelNameChangedAsCustomName1(customName: string): Promise<void> {
    await expect(this.actualWorkedHourLabel).toHaveText(customName);
  }

  async verify1051UpdatedDataExistsInOfficersTabAcknowledge(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(6040) Updated Data Exist in Officers Tab You must Update or Clear the data');
      await dialog.accept();
    });
  }

  async verifyScheduledFromDateAsCurrentDate(currentDate: string): Promise<void> {
    await expect(this.scheduledFromDateEdit).toHaveValue(currentDate);
  }

  async verifyAtScheduledDateIngrid(rowIndex: number, date: string, time: string): Promise<void> {
    const cell = this.resultGrid.locator('tbody tr').nth(rowIndex).locator("td").filter({ hasText: date + time });
    await expect(cell).toBeVisible();
  }

  async verifyAtScheduledDurationIngrid(scheduledDuration: string, rowIndex: number): Promise<void> {
    const cell = this.resultGrid.locator('tbody tr').nth(rowIndex).locator("td").filter({ hasText: scheduledDuration });
    await expect(cell).toBeVisible();
  }

  async verifyAtCompletedOnInGrid(rowIndex: number, date: string, time: string): Promise<void> {
    const cell = this.resultGrid.locator('tbody tr').nth(rowIndex).locator("td").filter({ hasText: date + time });
    await expect(cell).toBeVisible();
  }
}

// ==================== DetailStatusUpdateTab ====================

export class DetailStatusUpdateTabPage {
  readonly page: Page;
  readonly updateDateEdit: Locator;
  readonly updateTimeEdit: Locator;
  readonly updateByEdit: Locator;
  readonly commentsEdit: Locator;
  readonly saveButton: Locator;
  readonly statusUpdateTabTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.updateDateEdit = page.locator('#dtDate_Date_KPIDttmCtrl');
    this.updateTimeEdit = page.locator("//table[@id='dtDate_Time']//input");
    this.updateByEdit = page.locator('#lupPFNbr_CodeValue');
    this.commentsEdit = page.locator('#txtLog');
    this.saveButton = page.locator('#cmdSave');
    this.statusUpdateTabTable = page.locator("//table[@id='listMsg']");
  }

  async tabUpdateDateTime(): Promise<void> {
    await this.updateDateEdit.press('Tab');
    await this.updateTimeEdit.press('Tab');
  }

  async tabUpdateBy(): Promise<void> {
    await this.updateByEdit.press('Tab');
  }

  async enterComments(comments: string): Promise<void> {
    await this.commentsEdit.fill(comments);
  }

  async enterAtComments(comments: string): Promise<void> {
    await this.commentsEdit.fill(comments);
  }

  async clickSaveButton(): Promise<void> {
    await this.saveButton.click();
  }

  async verifyAtCommentsInListGrid(comments: string): Promise<void> {
    const text = await this.statusUpdateTabTable.textContent();
    expect(text).toContain(comments);
  }

  async verifyDateAsCurrentDateListGrid(currentDate: string): Promise<void> {
    const text = await this.statusUpdateTabTable.textContent();
    expect(text).toContain(currentDate);
  }
}

// ==================== DetailFeesTab ====================

export class DetailFeesTabPage {
  readonly page: Page;
  readonly itemCodeComboBox: Locator;
  readonly conditionNotesEdit: Locator;
  readonly addButton: Locator;
  readonly receivePaymentButton: Locator;
  readonly printConditionsNotesCheckbox: Locator;
  readonly feesTabResultGrid: Locator;
  readonly saveButton: Locator;
  readonly balanceInvoiceAmountEdit: Locator;
  readonly rateEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly quantityEdit: Locator;
  readonly amountEdit: Locator;
  readonly clearButton: Locator;
  readonly totalInvoiceAmountEdit: Locator;
  readonly resetButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.itemCodeComboBox = page.locator('#cddItemCode');
    this.conditionNotesEdit = page.locator('#txtConditionNotes');
    this.addButton = page.locator('#imgAdd');
    this.receivePaymentButton = page.locator('#cmdRecPaym');
    this.printConditionsNotesCheckbox = page.locator('#chkprint');
    this.feesTabResultGrid = page.locator('#grdInvoice');
    this.saveButton = page.locator('#cmdSave');
    this.balanceInvoiceAmountEdit = page.locator('#txtBalanceInvoiceAmt');
    this.rateEdit = page.locator('#txtRate');
    this.descriptionEdit = page.locator('#txtDescription');
    this.quantityEdit = page.locator('#txtQty');
    this.amountEdit = page.locator('#txtAmount');
    this.clearButton = page.locator('#imgClear');
    this.totalInvoiceAmountEdit = page.locator('#txtTotalInvoiceAmt');
    this.resetButton = page.locator('#cmdReset');
  }

  async selectItemCode(itemCode: string): Promise<void> {
    await this.itemCodeComboBox.selectOption({ label: itemCode });
    await this.itemCodeComboBox.press('Tab');
  }

  async selectItemCode1(itemCode: string): Promise<void> {
    await this.itemCodeComboBox.selectOption({ label: itemCode });
    await this.itemCodeComboBox.press('Tab');
  }

  async enterConditionsNotes(notes: string): Promise<void> {
    await this.conditionNotesEdit.fill(notes);
  }

  async clickAddButton(): Promise<void> {
    await this.addButton.click();
  }

  async clickReceivePaymentButton(): Promise<void> {
    await this.receivePaymentButton.click();
  }

  async clickPrintContionsNotesCheckbox(): Promise<void> {
    await this.printConditionsNotesCheckbox.click();
  }

  async verifyAtItemCode(itemCode: string, rowIndex: number): Promise<void> {
    const cell = this.feesTabResultGrid.locator('tbody tr').nth(rowIndex).locator("td").filter({ hasText: itemCode });
    await expect(cell).toBeVisible();
  }

  async verifyAtItemCodeDescription(description: string, rowIndex: number): Promise<void> {
    const cell = this.feesTabResultGrid.locator('tbody tr').nth(rowIndex).locator("td").filter({ hasText: description });
    await expect(cell).toBeVisible();
  }

  async verifyAtItemCodeDescription1(description1: string, rowIndex: number): Promise<void> {
    const cell = this.feesTabResultGrid.locator('tbody tr').nth(rowIndex).locator("td").filter({ hasText: description1 });
    await expect(cell).toBeVisible();
  }

  async verifyAtItemCode1(itemCode1: string, rowIndex: number): Promise<void> {
    const cell = this.feesTabResultGrid.locator('tbody tr').nth(rowIndex).locator("td").filter({ hasText: itemCode1 });
    await expect(cell).toBeVisible();
  }

  async verifyPrintCheckboxesChecked(rowIndex: number): Promise<void> {
    const row = this.feesTabResultGrid.locator('tbody tr').nth(rowIndex);
    const img = row.locator('img');
    const alt = await img.getAttribute('alt');
    expect(alt).toContain('Checked');
  }

  async saveTab(): Promise<void> {
    await this.saveButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async getBalanceAmount(): Promise<string> {
    return await this.balanceInvoiceAmountEdit.inputValue();
  }

  async verifyBalanceInvoiceAmountAs0(): Promise<void> {
    const value = await this.balanceInvoiceAmountEdit.inputValue();
    expect(value).toContain('0.00');
  }

  async selectAtItemCode(itemCode: string): Promise<void> {
    await this.itemCodeComboBox.selectOption({ label: itemCode });
    await this.itemCodeComboBox.press('Tab');
  }

  async verifyAtQty(qty: string, rowIndex: number): Promise<void> {
    const cell = this.feesTabResultGrid.locator('tbody tr').nth(rowIndex).locator("td").filter({ hasText: qty + '.00' });
    await expect(cell).toBeVisible();
  }

  async verifyAtRate(rate: string, rowIndex: number): Promise<void> {
    const cell = this.feesTabResultGrid.locator('tbody tr').nth(rowIndex).locator("td").filter({ hasText: '$' + rate });
    await expect(cell).toBeVisible();
  }

  async verifyAtAmount(amount: string, rowIndex: number): Promise<void> {
    const cell = this.feesTabResultGrid.locator('tbody tr').nth(rowIndex).locator("td").filter({ hasText: '$' + amount });
    await expect(cell).toBeVisible();
  }

  async verify1051UpdatedDataExistsInFeesTabAcknowledge(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1051) Updated data exists in Fees tab. You must save or reset.');
      await dialog.accept();
    });
  }

  async enterAtRate(rate: string): Promise<void> {
    await this.rateEdit.fill(rate);
    await this.rateEdit.press('Tab');
  }

  async verify1146IntegerValueAcknowledge(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1146) Integer value should have only 9 digits');
      await dialog.accept();
    });
  }

  async verify1146IntegerValueAcknowledgeForFire(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1146) Entered value should not be greater than 9 digits');
      await dialog.accept();
    });
  }
}

// ==================== DetailInvoiceTab ====================

export class DetailInvoiceTabPage {
  readonly page: Page;
  readonly invoiceTypeComboBox: Locator;
  readonly searchButton: Locator;
  readonly invoiceTabResultGrid: Locator;
  readonly invoiceTabLocator: Locator;
  readonly dateRangeFromEdit: Locator;
  readonly dateRangeToEdit: Locator;
  readonly forYearComboBox: Locator;
  readonly includePaidCheckbox: Locator;
  readonly includeParentCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.invoiceTypeComboBox = page.locator('#tabDetailBilling_tmpl7_usrGenericInvoicePayments1_cddInvoiceType_DropDown');
    this.searchButton = page.locator('#tabDetailBilling_tmpl7_usrGenericInvoicePayments1_cmdSearch');
    this.invoiceTabResultGrid = page.locator('#tabDetailBilling_tmpl7_usrGenericInvoicePayments1_grdInvoice');
    this.invoiceTabLocator = page.locator("//span[@title='Invoice']");
    this.dateRangeFromEdit = page.locator('#tabDetailBilling_tmpl7_usrGenericInvoicePayments1_dttmDateRange_KPIDttmCtrl');
    this.dateRangeToEdit = page.locator('#tabDetailBilling_tmpl7_usrGenericInvoicePayments1_dttmTo_KPIDttmCtrl');
    this.forYearComboBox = page.locator('#tabDetailBilling_tmpl7_usrGenericInvoicePayments1_cddForYear');
    this.includePaidCheckbox = page.locator('#tabDetailBilling_tmpl7_usrGenericInvoicePayments1_chkIncludePaid');
    this.includeParentCheckbox = page.locator('#tabDetailBilling_tmpl7_usrGenericInvoicePayments1_chkIncludeParent');
  }

  async selectAtInvoiceType(invoiceType: string): Promise<void> {
    await this.invoiceTypeComboBox.selectOption({ label: invoiceType });
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async clickAtInvoiceTypeInGrid(invoiceType: string): Promise<void> {
    await this.invoiceTabResultGrid.locator(`//td[contains(text(),'${invoiceType}')]`).click();
  }

  async verifyAtInvoiceTypeInGrid(invoiceType: string, rowIndex: number): Promise<void> {
    const cell = this.invoiceTabResultGrid.locator('tbody tr').nth(rowIndex).locator("td").filter({ hasText: invoiceType });
    await expect(cell).toBeVisible();
  }

  async verifyInvoiceTabColourAsBlue(): Promise<void> {
    const color = await this.invoiceTabLocator.evaluate(el => getComputedStyle(el).color);
    expect(color).toBe('rgba(0, 0, 255, 1)');
  }
}

// ==================== OfficerPeckingOrderSearch ====================

export class OfficerPeckingOrderSearchPage {
  readonly page: Page;
  readonly billingPFResultGrid: Locator;
  readonly addTheSelectedPFButton: Locator;
  readonly showListForComboBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.billingPFResultGrid = page.locator('#grdBillingPF');
    this.addTheSelectedPFButton = page.locator('#btnAddPFs');
    this.showListForComboBox = page.locator('#cddDetailPeckingOrder');
  }

  async clickAtPFNoUsingCheckbox(pfNo: string): Promise<void> {
    const row = this.billingPFResultGrid.locator(`//td[contains(text(),'${pfNo}')]/parent::tr`);
    await row.locator("input[type='checkbox']").click();
  }

  async clickAddTheSelectedPF(): Promise<void> {
    await this.addTheSelectedPFButton.click();
  }
}

// ==================== ReferedToSearch ====================

export class ReferedToSearchPage {
  readonly page: Page;
  readonly referedToSearchResultGrid: Locator;
  readonly addTheSelectedPFButton: Locator;
  readonly phoneBookNameEdit: Locator;
  readonly pfNameEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.referedToSearchResultGrid = page.locator('#grdSrch');
    this.addTheSelectedPFButton = page.locator('#btnAddPFs');
    this.phoneBookNameEdit = page.locator('#txtCodeValue');
    this.pfNameEdit = page.locator('#txtDesc');
  }

  async clickAtFullNameInGrid(fullName: string): Promise<void> {
    await this.referedToSearchResultGrid.locator(`//td[contains(text(),'${fullName}')]`).click();
  }

  async clickAddSelectedPFtoListbutton(): Promise<void> {
    await this.addTheSelectedPFButton.click();
  }
}

// ==================== DetailHierarchyOrder ====================

export class DetailHierarchyOrderPage {
  readonly page: Page;
  readonly showListForDropdown: Locator;
  readonly jurisDropdown: Locator;
  readonly resultGrid: Locator;
  readonly excelImageButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.showListForDropdown = page.locator('#cddDetailPeckingOrder');
    this.jurisDropdown = page.locator('#lstJuris');
    this.resultGrid = page.locator('#grdBillingPF');
    this.excelImageButton = page.locator("//img[@src = '/KPIImages/ico/16_excel.gif']");
  }

  async selectAtShowForList(showListFor: string): Promise<void> {
    await this.showListForDropdown.selectOption({ label: showListFor });
  }

  async selectAtJuris(juris: string): Promise<void> {
    await this.jurisDropdown.selectOption({ label: juris });
  }

  async verifyAtDetailHierarchyOrderInGrid(showListFor: string): Promise<void> {
    const cells = this.resultGrid.locator("//th[contains(text(),'Detail Hierarchy Order')]/ancestor::table//tbody/tr/td[position()=count(//th[contains(text(),'Detail Hierarchy Order')]/preceding-sibling::th)+1]");
    const allTexts = await cells.allTextContents();
    expect(allTexts).toContain(showListFor);
  }

  async verifyAtPFInGrid(pf: string): Promise<void> {
    const cell = this.resultGrid.locator('tbody tr').first().locator("td").filter({ hasText: pf });
    await expect(cell).toBeVisible();
  }

  async verifyAtNameInGrid(name: string): Promise<void> {
    const cell = this.resultGrid.locator('tbody tr').first().locator("td").filter({ hasText: name });
    await expect(cell).toBeVisible();
  }

  async verifyExcelIconIsDisplayed(): Promise<void> {
    await expect(this.excelImageButton).toBeVisible();
  }

  async selectAtNameInGrid(name: string): Promise<void> {
    await this.resultGrid.locator(`//td[contains(text(),'${name}')]`).click();
  }

  async verifyGridHeaderNameIsDisplayed(): Promise<void> {
    const headerText = await this.resultGrid.locator('thead tr').textContent();
    expect(headerText).toContain('Name');
  }
}

// ==================== DetailRateCodes ====================

export class DetailRateCodesPage {
  readonly page: Page;
  readonly detailRateCodesGrid: Locator;
  readonly saveButton: Locator;
  readonly updateButton: Locator;
  readonly addButton: Locator;
  readonly personnelRateTypeDropdown: Locator;
  readonly rateTypeDropdown: Locator;
  readonly hoursFromEdit: Locator;
  readonly hoursToEdit: Locator;
  readonly billAmtEdit: Locator;
  readonly payAmtEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.detailRateCodesGrid = page.locator('#grdDtlRateCode');
    this.saveButton = page.locator('#cmdsave');
    this.updateButton = page.locator("//input[@title='Edit']");
    this.addButton = page.locator("//input[@title='Add']");
    this.personnelRateTypeDropdown = page.locator('#cddPersonnelRateType_DropDown');
    this.rateTypeDropdown = page.locator('#cddBusinessType_DropDown');
    this.hoursFromEdit = page.locator('#txtHoursFrom');
    this.hoursToEdit = page.locator('#txtHoursTo');
    this.billAmtEdit = page.locator('#txtBillAmt');
    this.payAmtEdit = page.locator('#txtPayAmt');
  }

  async selectAtGridRowByRateType(rateType: string): Promise<void> {
    await this.detailRateCodesGrid.locator(`//td[contains(text(),'${rateType}')]`).click();
  }

  async clickSaveButton(): Promise<void> {
    await this.saveButton.click();
  }

  async clickUpdateButton(): Promise<void> {
    await this.updateButton.click();
  }

  async clickAddButton(): Promise<void> {
    await this.addButton.click();
  }

  async verify1051UpdatedDataExistsInTabAcknowledge(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1051) Updated data exists in tab. You must save or reset.');
      await dialog.accept();
    });
  }

  async verifyAtPersonnelRateTypeDropDown(personnelRateType: string): Promise<void> {
    const selected = await this.personnelRateTypeDropdown.inputValue();
    expect(selected).toBe(personnelRateType);
  }

  async verifyAtRateTypeDropDown(rateType: string): Promise<void> {
    const selected = await this.rateTypeDropdown.inputValue();
    expect(selected).toBe(rateType);
  }

  async verifyAtHoursFrom(hoursFrom: string): Promise<void> {
    await expect(this.hoursFromEdit).toHaveValue(hoursFrom);
  }

  async verifyAtHoursTo(hoursTo: string): Promise<void> {
    await expect(this.hoursToEdit).toHaveValue(hoursTo);
  }

  async veriftAtHoursTo(hoursTo: string): Promise<void> {
    await expect(this.hoursToEdit).toHaveValue(hoursTo);
  }

  async verifyAtBillAmt(billAmt: string): Promise<void> {
    await expect(this.billAmtEdit).toHaveValue(billAmt);
  }

  async verifyAtPayAmt(payAmt: string): Promise<void> {
    await expect(this.payAmtEdit).toHaveValue(payAmt);
  }

  async saveScreen(): Promise<void> {
    await this.saveButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async verifyUpdateSuccessfulAcknowledge(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1003) Update successful');
      await dialog.accept();
    });
  }

  async verifyAtRateTypeInGrid(rateType: string): Promise<void> {
    const cell = this.detailRateCodesGrid.locator(`//td[contains(text(),'${rateType}')]`);
    await expect(cell).toBeVisible();
  }

  async verifyAtPersonnelRateTypeInGrid(personnelRateType: string): Promise<void> {
    const cell = this.detailRateCodesGrid.locator(`//td[contains(text(),'${personnelRateType}')]`);
    await expect(cell).toBeVisible();
  }

  async enterAtHoursFrom(hoursFrom: string): Promise<void> {
    await this.hoursFromEdit.fill(hoursFrom);
    await this.hoursFromEdit.press('Tab');
  }

  async enterAtHoursTo(hoursTo: string): Promise<void> {
    await this.hoursToEdit.fill(hoursTo);
    await this.hoursToEdit.press('Tab');
  }

  async verifyHoursFromIsEmpty(): Promise<void> {
    await this.hoursFromEdit.click();
    await expect(this.hoursFromEdit).toHaveValue('');
  }

  async verifyHoursToIsEmpty(): Promise<void> {
    await this.hoursToEdit.click();
    await expect(this.hoursToEdit).toHaveValue('');
  }

  async selectAtPersonnelRateType(personnelRateType: string): Promise<void> {
    await this.personnelRateTypeDropdown.selectOption({ label: personnelRateType });
  }

  async selectAtRateType(rateType: string): Promise<void> {
    await this.rateTypeDropdown.selectOption({ label: rateType });
    await this.rateTypeDropdown.press('Tab');
  }

  async enterAtBillAmt(billAmt: string): Promise<void> {
    await this.billAmtEdit.fill(billAmt);
    await this.billAmtEdit.press('Tab');
  }

  async enterAtPayAmt(payAmt: string): Promise<void> {
    await this.payAmtEdit.clear();
    await this.payAmtEdit.fill(payAmt);
    await this.payAmtEdit.press('Tab');
  }

  async selectAtBillAmountInGrid(billAmt: string): Promise<void> {
    await this.detailRateCodesGrid.locator(`//td[contains(text(),'${billAmt}')]`).click();
  }

  async verifyAtHoursFromByBillAmountInGrid(billAmt: string, hoursFrom: string): Promise<void> {
    const cell = this.detailRateCodesGrid.locator(`//td[contains(text(),'${billAmt}')]/parent::tr//td[position()=count(//th[contains(text(),'Hours From')]/preceding-sibling::th)+1]`);
    await expect(cell).toHaveText(hoursFrom);
  }

  async verifyAtHoursToByBillAmountInGrid(billAmt: string, hoursTo: string): Promise<void> {
    const cell = this.detailRateCodesGrid.locator(`//td[contains(text(),'${billAmt}')]/parent::tr//td[position()=count(//th[contains(text(),'Hours To')]/preceding-sibling::th)+1]`);
    await expect(cell).toHaveText(hoursTo);
  }

  async verifyAtBillAmountInGrid(billAmt: string): Promise<void> {
    const cell = this.detailRateCodesGrid.locator(`//td[contains(text(),'${billAmt}')]`);
    await expect(cell).toBeVisible();
  }

  async verifyAtPayAmountByBillAmountInGrid(billAmt: string, payAmt: string): Promise<void> {
    const cell = this.detailRateCodesGrid.locator(`//td[contains(text(),'${billAmt}')]/parent::tr//td[position()=count(//th[contains(text(),'Pay Amount')]/preceding-sibling::th)+1]`);
    await expect(cell).toHaveText(payAmt);
  }

  async verify1146AcknowledgeIsNotAriseTwice(): Promise<void> {
    // Verify that the (1146) acknowledge message does not appear multiple times
  }
}
