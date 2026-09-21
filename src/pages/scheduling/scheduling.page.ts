// @ts-nocheck
import { Page, Locator, FrameLocator } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { AcknowledgePage, ConfirmPage } from '../popup.page';

export class SchedulingPage {
  private page: Page;
  private browserHelpers: BrowserHelpers;

  constructor(page: Page) {
    this.page = page;
    this.browserHelpers = new BrowserHelpers(page);
  }

  async switchToTimeReport() {
    return this.browserHelpers.switchToMainWindowScreenTab('Time Report');
  }

  async switchToTradeSwapEntry() {
    return this.browserHelpers.switchToPageByTitle('Trade Swap');
  }

  async switchToTimeEntryScreen() {
    return this.browserHelpers.switchToPageByTitle('Time Entry');
  }

  async switchToTimeSearch() {
    return this.browserHelpers.switchToMainWindowScreenTab('Scheduler/frmTimeSearch');
  }

  async switchToCalenderScreen() {
    return this.browserHelpers.switchToPageByTitle('frmRADSchedulerKendo');
  }

  async switchToTradeSwapSearchScreen() {
    return this.browserHelpers.switchToMainWindowScreenTab('Scheduler/frmTradeSwapSrch');
  }

  async switchToEventCodeEntryScreen() {
    return this.browserHelpers.switchToPageByTitle('Event Code Entry');
  }

  async switchToEventCode() {
    return this.browserHelpers.switchToMainWindowScreenTab('Scheduler/frmEventNameSrch');
  }

  async switchToEventResourcesEntryScreen() {
    return this.browserHelpers.switchToPageByTitle('EventResourcesEntry');
  }

  async switchToEventResources() {
    return this.browserHelpers.switchToMainWindowScreenTab('Scheduler/frmResourceNameSrch');
  }

  async switchToScheduleSettings() {
    return this.browserHelpers.switchToMainWindowScreenTab('Scheduler/frmScheduleSrch');
  }

  async switchToTourEntryScreen() {
    return this.browserHelpers.switchToPageByTitle('Tour Entry');
  }

  async switchToRotationCodeEntryScreen() {
    return this.browserHelpers.switchToPageByTitle('Rotation Code Entry');
  }

  async switchToGroupEntryScreen() {
    return this.browserHelpers.switchToPageByTitle('Group Entry');
  }

  async switchToCalendarScreen() {
    return this.browserHelpers.switchToPageByTitle('Calendar');
  }

  async switchToTimeCategory() {
    return this.browserHelpers.switchToMainWindowScreenTab('Scheduler/frmAccumulatorSrch');
  }

  async switchToTimeCategoryEntryScreen() {
    return this.browserHelpers.switchToPageByTitle('Time Category Entry');
  }

  async switchToTimeTypeEntryScreen() {
    return this.browserHelpers.switchToPageByTitle('Time Type Entry');
  }

  async switchToWorkSheetWindow() {
    return this.browserHelpers.switchToPageByTitle('Work Sheet');
  }

  async switchToRosterWindow() {
    return this.browserHelpers.switchToPageByUrl('frmRosterFire.aspx');
  }

  async switchToJobGradeScreen() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmJobGradeSrch');
  }

  async switchToJobGradeEntry() {
    return this.browserHelpers.switchToPageByUrl('JobGradeEntry.aspx');
  }

  async switchToHolidaysScreen() {
    return this.browserHelpers.switchToPageByTitle('Holidays');
  }

  async switchToCarryOverAndAccrualEntry() {
    return this.browserHelpers.switchToPageByUrl('frmGradeAccumulatorEntry.aspx');
  }

  async switchToCalenderScheduledViewFrame() {
    // switchToFrame("frmScheduleView.aspx?")
  }

}

export class TimeSearchPage {
  readonly page: Page;
  readonly searchButton: Locator;
  readonly addNewButton: Locator;
  readonly addApprovalButton: Locator;
  readonly timeCategoryComboBox: Locator;
  readonly timeTypeComboBox: Locator;
  readonly pFCodeEdit: Locator;
  readonly timeSheetRadioButton: Locator;
  readonly approvedRadioButton: Locator;
  readonly notApprovedRadioButton: Locator;
  readonly timeSearchResultGrid: Locator;
  readonly dateClearButton: Locator;
  readonly divisionTextView: Locator;
  readonly divisionComboBox: Locator;
  readonly sectionTextView: Locator;
  readonly sectionComboBox: Locator;
  readonly teamTextView: Locator;
  readonly teamComboBox: Locator;
  readonly groupTextView: Locator;
  readonly groupComboBox: Locator;
  readonly timeCategoryDropdownArrow: Locator;
  readonly timeCategoryRadDropdownTray: Locator;
  readonly timeTypeDropdownArrow: Locator;
  readonly timeTypeRadDropdownTray: Locator;
  readonly earningCodeDropdownArrow: Locator;
  readonly earningCodeRadDropdownTray: Locator;
  readonly approvalStatusDropDown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchButton = page.locator("//span[contains(text(),\'Search\')]");
    this.addNewButton = page.locator("//span[text()=\'Add New\']");
    this.addApprovalButton = page.locator("//span[contains(text(),\'Add Approval\')");
    this.timeCategoryComboBox = page.locator('#cddTimeAccumulator');
    this.timeTypeComboBox = page.locator('#cddTimeReasonCode');
    this.pFCodeEdit = page.locator('#lupOffPFID_CodeValue');
    this.timeSheetRadioButton = page.locator('#rbTimeSheet');
    this.approvedRadioButton = page.locator('#rbTSApproved');
    this.notApprovedRadioButton = page.locator('#rbTSNotApproved');
    this.timeSearchResultGrid = page.locator('#grdTimeSearch');
    this.dateClearButton = page.locator('#imgClearDate');
    this.divisionTextView = page.locator('#lblDivision');
    this.divisionComboBox = page.locator('#cddDivision_DropDown');
    this.sectionTextView = page.locator('#lblSection');
    this.sectionComboBox = page.locator('#cddSection_DropDown');
    this.teamTextView = page.locator('#lblTeam');
    this.teamComboBox = page.locator('#cddTeam_DropDown');
    this.groupTextView = page.locator('#lblWorkgroup');
    this.groupComboBox = page.locator('#cddWorkgroup_DropDown');
    this.timeCategoryDropdownArrow = page.locator('#cddTimeAccumulator_Arrow');
    this.timeCategoryRadDropdownTray = page.locator("//div[@id=\'cddTimeAccumulator_DropDown\']");
    this.timeTypeDropdownArrow = page.locator('#cddTimeReasonCode_Arrow');
    this.timeTypeRadDropdownTray = page.locator('#cddTimeReasonCode_DropDown');
    this.earningCodeDropdownArrow = page.locator('#cddEarningCode_Arrow');
    this.earningCodeRadDropdownTray = page.locator('#cddEarningCode_DropDown');
    this.approvalStatusDropDown = page.locator('#cddStatus');
  }

  async clickSearchButton(): Promise<void> {
    // uIMapScheduling.timeSearch.uISearchButton.click();
  }

  async clickTimeSheetRadioButton(): Promise<void> {
    // uIMapScheduling.timeSearch.uITimeSheetRadioButton.click();
    // Playback.waitForControlReady();
    // Playback.threadWait();
  }

  async clickApprovedRadioButton(): Promise<void> {
    // uIMapScheduling.timeSearch.uIApprovedRadioButton.click();
  }

  async enterAtPFCode(): Promise<void> {
    // uIMapScheduling.timeSearch.uIPFCodeEdit.sendKeys(BaseData.getSchedulingModuleValue("PFCode"));
    // uIMapScheduling.timeSearch.uIPFCodeEdit.sendKeys(Keys.TAB);
  }

  async clickDateClearButton(): Promise<void> {
    // uIMapScheduling.timeSearch.uIDateClearButton.click();
  }

  async clickDivisionText(): Promise<void> {
    // uIMapScheduling.timeSearch.uIDivisionTextView.click();
  }

  async clickTeamText(): Promise<void> {
    // uIMapScheduling.timeSearch.uITeamTextView.click();
  }

  async clickSectionText(): Promise<void> {
    // uIMapScheduling.timeSearch.uISectionTextView.click();
  }

  async clickGroupText(): Promise<void> {
    // uIMapScheduling.timeSearch.uIGroupTextView.click();
  }

  async verifyAtTimeCategory(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("TimeCategory"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapScheduling.timeSearch.uITimeSearchResultGrid, "Time Category", rowIndex));
  }

  async verifyAtTimeType(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("TimeType"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapScheduling.timeSearch.uITimeSearchResultGrid, "Time Type", rowIndex));
  }

  async selectAtPFCodeInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapScheduling.timeSearch.uITimeSearchResultGrid, BaseData.getSchedulingModuleValue("PFCode"));
  }

  async verifyDivisionFieldHide(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // Boolean.parseBoolean(uIMapScheduling.timeSearch.uIDivisionComboBox.getAttribute("disabled")));
  }

  async verifySectionFieldHide(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // Boolean.parseBoolean(uIMapScheduling.timeSearch.uISectionComboBox.getAttribute("disabled")));
  }

  async verifyTeamFieldHide(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // Boolean.parseBoolean(uIMapScheduling.timeSearch.uITeamComboBox.getAttribute("disabled")));
  }

  async verifyGroupFieldHide(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // Boolean.parseBoolean(uIMapScheduling.timeSearch.uIGroupComboBox.getAttribute("disabled")));
  }

  async verifyTimeCategoryDropdownAsRadicalDropdown(): Promise<void> {
    // uIMapScheduling.timeSearch.uITimeCategoryDropdownArrow.click();
    // String attribute = uIMapScheduling.timeSearch.uITimeCategoryRadDropdownTray.getAttribute("class");
    // verify.ExpectedValueIsTrue(attribute.contains("RadComboBoxDropDown"));
    // uIMapScheduling.timeSearch.uITimeCategoryDropdownArrow.click();
  }

  async verifyTimeTypeDropdownAsRadicalDropdown(): Promise<void> {
    // uIMapScheduling.timeSearch.uITimeTypeDropdownArrow.click();
    // String attribute = uIMapScheduling.timeSearch.uITimeTypeRadDropdownTray.getAttribute("class");
    // verify.ExpectedValueIsTrue(attribute.contains("RadComboBoxDropDown"));
    // uIMapScheduling.timeSearch.uITimeTypeDropdownArrow.click();
  }

  async verifyEarningCodeDropdownAsRadicalDropdown(): Promise<void> {
    // uIMapScheduling.timeSearch.uIEarningCodeDropdownArrow.click();
    // String attribute = uIMapScheduling.timeSearch.uIEarningCodeRadDropdownTray.getAttribute("class");
    // verify.ExpectedValueIsTrue(attribute.contains("RadComboBoxDropDown"));
    // uIMapScheduling.timeSearch.uIEarningCodeDropdownArrow.click();
  }

  async selectTimeCategoryAsCheckAll(): Promise<void> {
    // uIMapScheduling.timeSearch.uITimeCategoryDropdownArrow.click();
    // Playback.pageLoadThreadWait();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelectWithInput(
    // uIMapScheduling.timeSearch.uITimeCategoryRadDropdownTray, "Check All");
    // uIMapScheduling.timeSearch.uITimeCategoryDropdownArrow.click();
  }

  async selectTimeTypeAsCheckAll(): Promise<void> {
    // uIMapScheduling.timeSearch.uITimeTypeDropdownArrow.click();
    // Playback.pageLoadThreadWait();
    // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(
    // uIMapScheduling.timeSearch.uITimeTypeRadDropdownTray, "Check All");
    // uIMapScheduling.timeSearch.uITimeTypeDropdownArrow.click();
  }

  async selectEarningCodeAsCheckAll(): Promise<void> {
    // uIMapScheduling.timeSearch.uIEarningCodeDropdownArrow.click();
    // Playback.pageLoadThreadWait();
    // Playback.pageLoadThreadWait();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelectWithInput(
    // uIMapScheduling.timeSearch.uIEarningCodeRadDropdownTray, "Check All");
    // uIMapScheduling.timeSearch.uIEarningCodeDropdownArrow.click();
  }

  async clickAddNewButton(): Promise<void> {
    // uIMapScheduling.timeSearch.uIAddNewButton.click();
  }

  async selectAtApprovalStatus(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption
    // (uIMapScheduling.timeSearch.uIApprovalStatusDropDown,BaseData.getSchedulingModuleValue("ApprovalStatus"));
  }

}

export class TimeEntryPage {
  readonly page: Page;
  readonly requestYearEdit: Locator;
  readonly requestNumberEdit: Locator;
  readonly pFCodeEdit: Locator;
  readonly entryDateEdit: Locator;
  readonly entryTimeEdit: Locator;
  readonly pFNumberEdit: Locator;
  readonly timeCategoryComboBox: Locator;
  readonly timeTypeComboBox: Locator;
  readonly requestedForDateEdit: Locator;
  readonly requestForTimeEdit: Locator;
  readonly requestedToDateEdit: Locator;
  readonly requestedToTimeEdit: Locator;
  readonly timeResetButton: Locator;
  readonly hoursEdit: Locator;
  readonly calculatedHoursEdit: Locator;
  readonly requestedRadioButton: Locator;
  readonly earnedRadioButton: Locator;
  readonly notesEdit: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly calendarTab: Locator;
  readonly otherTab: Locator;
  readonly tradesSwapsLink: Locator;
  readonly approvalTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.requestYearEdit = page.locator('#nbrRequest_Year');
    this.requestNumberEdit = page.locator('#nbrRequest_Number');
    this.pFCodeEdit = page.locator('#lupPF_CodeValue');
    this.entryDateEdit = page.locator('#dttmEntryDateTime_Date_KPIDttmCtrl');
    this.entryTimeEdit = page.locator("//table[@ID=\'dttmEntryDateTime_Time\'//input");
    this.pFNumberEdit = page.locator('#lupPF_CodeValue');
    this.timeCategoryComboBox = page.locator('#cddTimeAccumulator');
    this.timeTypeComboBox = page.locator('#cddTimeReasonCode');
    this.requestedForDateEdit = page.locator("//*[@id=\'dttmFrom_Date_KPIDttmCtrl\']");
    this.requestForTimeEdit = page.locator("(//input[@class = \'textboxdatetime igte_BlueThemeEditInContainer\'])[2]");
    this.requestedToDateEdit = page.locator('#dttmTo_Date_KPIDttmCtrl');
    this.requestedToTimeEdit = page.locator("//table[@ID=\'dttmToTime_Time\'//input");
    this.timeResetButton = page.locator('#imgClearDate');
    this.hoursEdit = page.locator('#dttmHours');
    this.calculatedHoursEdit = page.locator('#dttmCalHours');
    this.requestedRadioButton = page.locator('#rdoRequested');
    this.earnedRadioButton = page.locator('#rdoEarned');
    this.notesEdit = page.locator('#txtNotes');
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.calendarTab = page.locator("//span[contains(text(),\'Calendar\')");
    this.otherTab = page.locator("//span[contains(text(),\'Other\')");
    this.tradesSwapsLink = page.locator("//span[text()=\'Trades/Swaps \']");
    this.approvalTab = page.locator("//span[text()=\'Approval\']");
  }

  async enterAtPF(): Promise<void> {
    // uIMapScheduling.timeEntry.uIPFCodeEdit.sendKeys(BaseData.getSchedulingModuleValue("PFCode"));
    // uIMapScheduling.timeEntry.uIPFCodeEdit.sendKeys(Keys.TAB);
  }

  async changeAtPF(): Promise<void> {
    // uIMapScheduling.timeEntry.uIPFCodeEdit.clear();
    // uIMapScheduling.timeEntry.uIPFCodeEdit.sendKeys(BaseData.getSchedulingModuleValue("PF1"));
    // uIMapScheduling.timeEntry.uIPFCodeEdit.sendKeys(Keys.TAB);
  }

  async selectAtTimeCategory(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapScheduling.timeEntry.uITimeCategoryComboBox,
    // BaseData.getSchedulingModuleValue("TimeCategory"));
    // uIMapScheduling.timeEntry.uITimeCategoryComboBox.sendKeys(Keys.TAB);
  }

  async selectTimeCategoryAsVaccation(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapScheduling.timeEntry.uITimeCategoryComboBox,
    // 2);
    // uIMapScheduling.timeEntry.uITimeCategoryComboBox.sendKeys(Keys.TAB);
  }

  async selectAtTimeType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapScheduling.timeEntry.uITimeTypeComboBox,
    // BaseData.getSchedulingModuleValue("TimeType"));
  }

  async enterRequestedForDate(): Promise<void> {
    // uIMapScheduling.timeEntry.uIRequestedForDateEdit.sendKeys(Keys.TAB);
  }

  async enterRequestedForTime(): Promise<void> {
    // uIMapScheduling.timeEntry.uIRequestForTimeEdit.click();
    // uIMapScheduling.timeEntry.uIRequestForTimeEdit.sendKeys("0800");
  }

  async enterRequestedToDate(): Promise<void> {
    // uIMapScheduling.timeEntry.uIRequestedToDateEdit.sendKeys(Randomized.getFutureDate(1));
    // // uIMapScheduling.timeEntry.uIRequestedToDateEdit.sendKeys(Keys.TAB);
    // // uIMapScheduling.timeEntry.uIPeriodToTimeEdit.sendKeys(Keys.TAB);
  }

  async enterHours(): Promise<void> {
    // uIMapScheduling.timeEntry.uIHoursEdit.click();
    // uIMapScheduling.timeEntry.uIHoursEdit.sendKeys("8");
    // uIMapScheduling.timeEntry.uIHoursEdit.sendKeys(Keys.TAB);
  }

  async enterNotes(): Promise<void> {
    // uIMapScheduling.timeEntry.uINotesEdit.sendKeys(Randomized.randomString(50));
  }

  async closeScreen(): Promise<void> {
    // uIMapScheduling.timeEntry.driver.close();
  }

  async saveScreen(): Promise<void> {
    // uIMapScheduling.timeEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async clickSave(): Promise<void> {
    // uIMapScheduling.timeEntry.uISaveButton.click();
  }

  async veifyAtTimeCategory(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("TimeCategory"),
    // objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapScheduling.timeEntry.uITimeCategoryComboBox));
  }

  async veifyAtTimeType(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("TimeType"),
    // objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapScheduling.timeEntry.uITimeTypeComboBox));
  }

  async verifyAtPFCode(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("PFCode"),
    // uIMapScheduling.timeEntry.uIPFCodeEdit.getAttribute("value"));
  }

  async verifyTimeResonCodeShow(): Promise<void> {
    // verify.ExpectedValueIsFalse(objectIdentification.manualIdentify
    // .getDropDownOptionsCount(uIMapScheduling.timeEntry.uITimeTypeComboBox) == 2);
  }

  async switchToCalenderTab(): Promise<void> {
    // uIMapScheduling.timeEntry.uICalendarTab.click();
    // Playback.gridLoadThreadWait();
    // objectIdentification.windowHandle.switchToFrame("frmPnxScheduler");
  }

  async clickTimeTypeDropdown(): Promise<void> {
    // uIMapScheduling.timeEntry.uITimeTypeComboBox.click();
  }

  async verifyAtTimeTypeNotListed(): Promise<void> {
    // List<String> timeTypes = objectIdentification.manualIdentify
    // .getDropDownValues(uIMapScheduling.timeEntry.uITimeTypeComboBox);
    // System.out.println(timeTypes);
    // verify.ExpectedValueIsTrue(!timeTypes.contains(BaseData.getSchedulingModuleValue("TimeType")));
  }

  async clickTradesSwapsLink(): Promise<void> {
    // uIMapScheduling.timeEntry.uITradesSwapsLink.click();
  }

  async verifyValuesListedInTimeCategory(): Promise<void> {
    // List<String> dropDownValues = objectIdentification.manualIdentify
    // .getDropDownValues(uIMapScheduling.timeEntry.uITimeCategoryComboBox);
    // verify.ExpectedValueIsFalse(dropDownValues.isEmpty());
  }

  async verifyNoRecordFoundPopupNotAvailable(): Promise<void> {
    // popup.acknowledge.verifyAcknowledgeWindowNotOpened("No Record Found");
  }

  async verifyApprovalTabIsEnabled(): Promise<void> {
    // boolean controlExist = objectIdentification.manualIdentify.controlExist
    // (uIMapScheduling.timeEntry.uIApprovalTab);
    // verify.ExpectedValueIsFalse(controlExist);
  }

}

export class CalenderTabPage {
  readonly page: Page;
  readonly showFullCalendarButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.showFullCalendarButton = page.locator('#btnFullCalendar');
  }

  async clickShowFullCalenderButton(): Promise<void> {
    // uIMapScheduling.timeEntry.calenderTab.uIShowFullCalendarButton.click();
    // Playback.waitForControlReady();
  }

}

export class CalendarPage {
  readonly page: Page;
  readonly showMyCalendarCheckbox: Locator;
  readonly selectActivityrecordfromClander: Locator;
  readonly showMyCalenderButton: Locator;
  readonly searchAppointmentsButton: Locator;
  readonly clickCurrentDate: Locator;
  readonly addressTextfromAgenda: Locator;
  readonly agendaButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.showMyCalendarCheckbox = page.locator('#chkShowMyCalndr');
    this.selectActivityrecordfromClander = page.locator("//table[@class=\'k-scheduler-layout k-scheduler-monthview\' //div[contains(text(),\'CAD Activity\')");
    this.showMyCalenderButton = page.locator("(//a[contains(text(),\'Show My Calendar\')])");
    this.searchAppointmentsButton = page.locator("(//a[contains(text(),\'Search Appointments\')])");
    this.clickCurrentDate = page.locator("//td[@class=\'k-today\']");
    this.addressTextfromAgenda = page.locator("//table[@class=\'k-scheduler-layout k-scheduler-agendaview k-scheduler-agenda k-scrollbar-h\']//div");
    this.agendaButton = page.locator("//li[(@class=\'k-state-default k-view-agenda k-state-selected\')]/a[text()=\'Agenda\']");
  }

  async selectShowMyCalendarCheckbox(): Promise<void> {
    // uIMapScheduling.calendar.uIShowMyCalendarCheckbox.click();
    // Playback.controlReadyThreadWait();
  }

  async selectActivityEntryFromCalendar(): Promise<void> {
    // uIMapScheduling.calendar.uISelectActivityrecordfromClander.click();
    // uIMapScheduling.calendar.uISelectActivityrecordfromClander.click();
    // uIMapScheduling.calendar.uISelectActivityrecordfromClander.click();
    // Playback.pageLoadThreadWait();
  }

  async clickSearchAppointments(): Promise<void> {
    // uIMapScheduling.calendar.uISearchAppointmentsButton.click();
    // Playback.controlReadyThreadWait();
  }

  async doubleClickInCalendarByCurrentDate(): Promise<void> {
    // Actions actions = new Actions(Playback.driver);
    // WebElement elementLocator = uIMapScheduling.calendar.uIClickCurrentDate;
    // actions.doubleClick(elementLocator).perform();
  }

  async verifyAtAddressInAgendaView(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapScheduling.calendar.uIAddressTextfromAgenda.getText()
    // .contains(BaseData.getSchedulingModuleValue("Address")));
  }

  async clickAgendaButton(): Promise<void> {
    // uIMapScheduling.calendar.uIAgendaButton.click();
  }

  async verifyScheduleOnDateNotPresentInCalender(): Promise<void> {
    // WebElement element = Playback.driver.findElement(By.xpath("//div[@class='k-scheduler-content']//table"));
    // try {
    // element.findElement(By.tagName(".//tr"));
    // } catch (Exception e) {
    // Assert.assertFalse(element.isDisplayed());
  }

  async verifySearchAppointmentsIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapScheduling.calendar.uISearchAppointmentsButton.isDisplayed());
  }

  async close(): Promise<void> {
    // Playback.driver.close();
  }

  async verifyErrorAcknowledgePopupNotAvailable(): Promise<void> {
    // boolean Displayed = objectIdentification.windowHandle.windowExist("Acknowledge");
    // Playback.pageLoadThreadWait();
    // if (Displayed == true) {
    // String Message = uIMapPopup.acknowledgeWindow.uIErrorInfoTextEdit.getText();
    // System.out.println(Message);
    // verify.ExpectedValueIsFalse(Message.contains("Validation") || Message.contains("Error"));
  }

  async verifyAtPFInGrid(jsonIndex: number): Promise<void> {
    // boolean found = false;
    // List<WebElement> listOfNames = Playback.driver
    // .findElements(By.xpath("//div[@class='rsTopWrap']//table/tbody/tr/th/div[@class='rsMainHeader']"));
    // for (int i = 0; i < listOfNames.size(); i++) {
    // String text = listOfNames.get(i).getText();
    // if (text.contains(BaseData.getSchedulingModuleValue("PFName" + jsonIndex))) {
    // found = true;
    // break;
    // verify.ExpectedValueIsTrue(found, "Name does not exist in the grid --->");
  }

}

export class AppointmentsPopupPage {
  readonly page: Page;
  readonly subjectCodeEdit: Locator;
  readonly startTime: Locator;
  readonly endTime: Locator;
  readonly resourceComboBox: Locator;
  readonly eventTypeAndResourceComboBoxOptions: Locator;
  readonly eventTypeComboBox: Locator;
  readonly saveButton: Locator;
  readonly divisionDropdownArrow: Locator;
  readonly divisionDropdownTray: Locator;
  readonly sectionDropdownArrow: Locator;
  readonly sectionDropDownTray: Locator;
  readonly squadDropdownArrow: Locator;
  readonly squadDropdownTray: Locator;
  readonly cancelButton: Locator;
  readonly resourceDropdownArrow: Locator;
  readonly resourceDropdownTray: Locator;
  readonly eventTypeDropdownArrow: Locator;
  readonly eventTypeDropdownTray: Locator;
  readonly shiftDropdown: Locator;
  readonly groupDropdown: Locator;
  readonly scheduleViewRadioButton: Locator;
  readonly showButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.subjectCodeEdit = page.locator("//input[@name=\'title\']");
    this.startTime = page.locator('#txtFromDate');
    this.endTime = page.locator('#txtEndDate');
    this.resourceComboBox = page.locator('#resourcesContainer');
    this.eventTypeAndResourceComboBoxOptions = page.locator('#roomId');
    this.eventTypeComboBox = page.locator('#eventContainer');
    this.saveButton = page.locator("//div//a[text()=\'Save\']");
    this.divisionDropdownArrow = page.locator('#cddDivision_Arrow');
    this.divisionDropdownTray = page.locator('#cddDivision_DropDown');
    this.sectionDropdownArrow = page.locator('#cddSection_Arrow');
    this.sectionDropDownTray = page.locator('#cddSection_DropDown');
    this.squadDropdownArrow = page.locator('#cddSquad_Arrow');
    this.squadDropdownTray = page.locator('#cddSquad_DropDown');
    this.cancelButton = page.locator('#cmdCancel');
    this.resourceDropdownArrow = page.locator('#cddPFCode_Arrow');
    this.resourceDropdownTray = page.locator('#cddPFCode_DropDown');
    this.eventTypeDropdownArrow = page.locator('#cddEvent_Arrow');
    this.eventTypeDropdownTray = page.locator('#cddEvent_DropDown');
    this.shiftDropdown = page.locator('#cddOldShift_DropDown');
    this.groupDropdown = page.locator('#cddOldGroup_DropDown');
    this.scheduleViewRadioButton = page.locator('#rbSchView');
    this.showButton = page.locator('#cmdSearch');
  }

  async enterAtSubject(): Promise<void> {
    // uIMapScheduling.calendar.appointmentsPopup.uISubjectCodeEdit
    // .sendKeys(BaseData.getSchedulingModuleValue("Subject"));
    // uIMapScheduling.calendar.appointmentsPopup.uISubjectCodeEdit.sendKeys(Keys.TAB);
  }

  async enterStartTime(): Promise<void> {
    // uIMapScheduling.calendar.appointmentsPopup.uIStartTime.sendKeys(Randomized.getCurrentDate());
    // uIMapScheduling.calendar.appointmentsPopup.uIStartTime.sendKeys(Keys.TAB);
  }

  async enterAtEndTime(): Promise<void> {
    // uIMapScheduling.calendar.appointmentsPopup.uIEndTime.sendKeys(BaseData.getSchedulingModuleValue("EndTime"));
    // uIMapScheduling.calendar.appointmentsPopup.uIEndTime.sendKeys(Keys.TAB);
  }

  async verifyStartTimeasCurrentDate(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // String dd = uIMapScheduling.calendar.appointmentsPopup.uIStartTime.getAttribute("value");
    // System.out.println(dd);
    // verify.ExpectedValueIsTrue(uIMapScheduling.calendar.appointmentsPopup.uIStartTime.getAttribute("value")
    // .contains(Randomized.getCurrentDate("M/d/yyyy")));
  }

  async verifyStartTimeAsCurrentDate(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // String dd = uIMapScheduling.calendar.appointmentsPopup.uIStartTime.getAttribute("value");
    // System.out.println(dd);
    // verify.ExpectedValueIsTrue(uIMapScheduling.calendar.appointmentsPopup.uIStartTime.getAttribute("value")
    // .contains(Randomized.getCurrentDate("MM/dd/yyyy")));
  }

  async selectAtEventType(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // Playback.controlReadyThreadWait();
    // uIMapScheduling.calendar.appointmentsPopup.uIEventTypeComboBox.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelectCalender(
    // uIMapScheduling.calendar.appointmentsPopup.uIEventTypeAndResourceComboBoxOptions,
    // BaseData.getSchedulingModuleValue("EventType"));
    // //	    	uIMapScheduling.calendar.appointmentsPopup.uIEventTypeComboBox.sendKeys(Keys.TAB);
  }

  async selectAtResource(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // Playback.controlReadyThreadWait();
    // uIMapScheduling.calendar.appointmentsPopup.uIResourceComboBox.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelectCalender(
    // uIMapScheduling.calendar.appointmentsPopup.uIEventTypeAndResourceComboBoxOptions,
    // BaseData.getSchedulingModuleValue("Resource"));
    // //	    	uIMapScheduling.calendar.appointmentsPopup.uIResourceComboBox.sendKeys(Keys.TAB);
  }

  async save(): Promise<void> {
    // uIMapScheduling.calendar.appointmentsPopup.uISaveButton.click();
  }

  async verifyAppointmentSavedSuccessfully(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // popup.confirm.yesWithExpectedMessage("Appointment saved successfully");
  }

  async verifyAtInactivatedNameNotAvailableInResource(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // Playback.controlReadyThreadWait();
    // uIMapScheduling.calendar.appointmentsPopup.uIResourceComboBox.click();
    // List<WebElement> options = objectIdentification.manualIdentify.getRadControlDropDownValuesCalender(
    // uIMapScheduling.calendar.appointmentsPopup.uIEventTypeAndResourceComboBoxOptions);
    // for (WebElement resource : options) {
    // if (resource.getText().contains(BaseData.getSchedulingModuleValue("InactivatedPF"))) {
    // verify.ExpectedValueIsTrue(false);
    // } else {
    // verify.ExpectedValueIsTrue(true);
  }

  async verifyDivisionDropdownAsRadicalDropdown(): Promise<void> {
    // uIMapScheduling.calendar.appointmentsPopup.uIDivisionDropdownArrow.click();
    // String attribute = uIMapScheduling.calendar.appointmentsPopup.uIDivisionDropdownTray.getAttribute("class");
    // verify.ExpectedValueIsTrue(attribute.contains("RadComboBoxDropDown"));
    // uIMapScheduling.calendar.appointmentsPopup.uIDivisionDropdownArrow.click();
  }

  async verifySectionDropdownAsRadicalDropdown(): Promise<void> {
    // uIMapScheduling.calendar.appointmentsPopup.uISectionDropdownArrow.click();
    // String attribute = uIMapScheduling.calendar.appointmentsPopup.uISectionDropDownTray.getAttribute("class");
    // verify.ExpectedValueIsTrue(attribute.contains("RadComboBoxDropDown"));
    // uIMapScheduling.calendar.appointmentsPopup.uISectionDropdownArrow.click();
  }

  async verifySquadDropdownAsRadicalDropdown(): Promise<void> {
    // uIMapScheduling.calendar.appointmentsPopup.uISquadDropdownArrow.click();
    // String attribute = uIMapScheduling.calendar.appointmentsPopup.uISquadDropdownTray.getAttribute("class");
    // verify.ExpectedValueIsTrue(attribute.contains("RadComboBoxDropDown"));
    // uIMapScheduling.calendar.appointmentsPopup.uISquadDropdownArrow.click();
  }

  async verifyResourceDropdownAsRadicalDropdown(): Promise<void> {
    // uIMapScheduling.calendar.appointmentsPopup.uIResourceDropdownArrow.click();
    // String attribute = uIMapScheduling.calendar.appointmentsPopup.uIResourceDropdownTray.getAttribute("class");
    // verify.ExpectedValueIsTrue(attribute.contains("RadComboBoxDropDown"));
    // uIMapScheduling.calendar.appointmentsPopup.uIResourceDropdownArrow.click();
  }

  async verifyEventTypeDropdownAsRadicalDropdown(): Promise<void> {
    // uIMapScheduling.calendar.appointmentsPopup.uIEventTypeDropdownArrow.click();
    // String attribute = uIMapScheduling.calendar.appointmentsPopup.uIEventTypeDropdownTray.getAttribute("class");
    // verify.ExpectedValueIsTrue(attribute.contains("RadComboBoxDropDown"));
    // uIMapScheduling.calendar.appointmentsPopup.uIEventTypeDropdownArrow.click();
  }

  async selectDivisionAsCheckAll(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // uIMapScheduling.calendar.appointmentsPopup.uIDivisionDropdownArrow.click();
    // Playback.pageLoadThreadWait();
    // Playback.driver.findElement(By.xpath("(//div//label[contains(text(),'Check All')])[1]")).click();
    // // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(uIMapScheduling.calendar.appointmentsPopup.uIDivisionDropdownTray,
    // // "Check All");
    // Playback.pageLoadThreadWait();
    // uIMapScheduling.calendar.appointmentsPopup.uIDivisionDropdownArrow.click();
  }

  async selectSectionAsCheckAll(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // uIMapScheduling.calendar.appointmentsPopup.uISectionDropdownArrow.click();
    // Playback.pageLoadThreadWait();
    // // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(uIMapScheduling.calendar.appointmentsPopup.uISectionDropDownTray,
    // // "Check All");
    // Playback.driver.findElement(By.xpath("(//div//label[contains(text(),'Check All')])[4]")).click();
    // // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(uIMapScheduling.calendar.appointmentsPopup.uISectionDropDownTray,
    // // "Check All");
    // uIMapScheduling.calendar.appointmentsPopup.uISectionDropdownArrow.click();
  }

  async selectSquadAsCheckAll(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // uIMapScheduling.calendar.appointmentsPopup.uISquadDropdownArrow.click();
    // Playback.pageLoadThreadWait();
    // Playback.driver.findElement(By.xpath("(//div//label[contains(text(),'Check All')])[3]")).click();
    // // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(uIMapScheduling.calendar.appointmentsPopup.uISquadDropdownTray,
    // // "Check All");
    // uIMapScheduling.calendar.appointmentsPopup.uISquadDropdownArrow.click();
  }

  async selectResourceAsCheckAll(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // uIMapScheduling.calendar.appointmentsPopup.uIResourceDropdownArrow.click();
    // Playback.pageLoadThreadWait();
    // Playback.driver.findElement(By.xpath("(//div//label[contains(text(),'Check All')])[2]")).click();
    // // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(uIMapScheduling.calendar.appointmentsPopup.uIResourceDropdownTray,
    // // "Check All");
    // uIMapScheduling.calendar.appointmentsPopup.uIResourceDropdownArrow.click();
  }

  async selectEventTypeAsCheckAll(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // uIMapScheduling.calendar.appointmentsPopup.uIEventTypeDropdownArrow.click();
    // Playback.pageLoadThreadWait();
    // Playback.driver.findElement(By.xpath("(//div//label[contains(text(),'Check All')])[1]")).click();
    // // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(uIMapScheduling.calendar.appointmentsPopup.uIEventTypeDropdownTray,
    // // "Check All");
    // uIMapScheduling.calendar.appointmentsPopup.uIEventTypeDropdownArrow.click();
  }

  async clickCancel(): Promise<void> {
    // uIMapScheduling.calendar.appointmentsPopup.uICancelButton.click();
  }

  async selectAtShift(jsonIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapScheduling.calendar.appointmentsPopup.uIShiftDropdown,
    // BaseData.getSchedulingModuleValue("Shift" + jsonIndex));
  }

  async selectAtGroup(jsonIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapScheduling.calendar.appointmentsPopup.uIGroupDropdown,
    // BaseData.getSchedulingModuleValue("Group" + jsonIndex));
  }

  async clickScheduleView(): Promise<void> {
    // uIMapScheduling.calendar.appointmentsPopup.uIScheduleViewRadioButton.click();
  }

  async clickShowButton(): Promise<void> {
    // uIMapScheduling.calendar.appointmentsPopup.uIShowButton.click();
  }

}

export class TradeSwapSearchPage {
  readonly page: Page;
  readonly searchButton: Locator;
  readonly addNewButton: Locator;
  readonly divisionTextView: Locator;
  readonly divisionComboBox: Locator;
  readonly sectionTextView: Locator;
  readonly sectionComboBox: Locator;
  readonly teamTextView: Locator;
  readonly teamComboBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchButton = page.locator("//span[contains(text(),\'Search\')");
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')");
    this.divisionTextView = page.locator('#lblDivision');
    this.divisionComboBox = page.locator('#cddDivision_DropDown');
    this.sectionTextView = page.locator('#lblSection');
    this.sectionComboBox = page.locator('#cddSection_DropDown');
    this.teamTextView = page.locator('#lblTeam');
    this.teamComboBox = page.locator('#cddTeam_DropDown');
  }

  async clickDivisionText(): Promise<void> {
    // uIMapScheduling.tradeSwapSearch.uIDivisionTextView.click();
  }

  async clickTeamText(): Promise<void> {
    // uIMapScheduling.tradeSwapSearch.uITeamTextView.click();
  }

  async clickSectionText(): Promise<void> {
    // uIMapScheduling.tradeSwapSearch.uISectionTextView.click();
  }

  async verifyDivisionFieldHide(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // Boolean.parseBoolean(uIMapScheduling.tradeSwapSearch.uIDivisionComboBox.getAttribute("disabled")));
  }

  async verifySectionFieldHide(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // Boolean.parseBoolean(uIMapScheduling.tradeSwapSearch.uISectionComboBox.getAttribute("disabled")));
  }

  async verifyTeamFieldHide(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // Boolean.parseBoolean(uIMapScheduling.tradeSwapSearch.uITeamComboBox.getAttribute("disabled")));
  }

}

export class EventCodePage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly searchButton: Locator;
  readonly eventCodeResultGrid: Locator;
  readonly eventCodeEdit: Locator;
  readonly eventNameEdit: Locator;
  readonly customNameEdit: Locator;
  readonly includeInactiveBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.searchButton = page.locator('#cmdSearch');
    this.eventCodeResultGrid = page.locator('#grdEvtSrch');
    this.eventCodeEdit = page.locator('#txtEventCode');
    this.eventNameEdit = page.locator('#txtEventName');
    this.customNameEdit = page.locator('#txtCustomName');
    this.includeInactiveBox = page.locator('#chkIsActive');
  }

  async enterAtCustomName(): Promise<void> {
    // uIMapScheduling.eventCode.uICustomNameEdit.sendKeys(BaseData.getSchedulingModuleValue("CustomName"));
  }

  async clickSearchButton(): Promise<void> {
    // uIMapScheduling.eventCode.uISearchButton.click();
    // Playback.controlReadyThreadWait();
  }

  async clickAddNew(): Promise<void> {
    // uIMapScheduling.eventCode.uIAddNewButton.click();
    // Playback.controlReadyThreadWait();
  }

  async clickCustomNameInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapScheduling.eventCode.uIEventCodeResultGrid, BaseData.getSchedulingModuleValue("CustomName"));
    // Playback.controlReadyThreadWait();
  }

  async verifyAtEventCodeUsingCustomName(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("EventCode"),
    // objectIdentification.manualIdentify.getGridCell(uIMapScheduling.eventCode.uIEventCodeResultGrid,
    // BaseData.getSchedulingModuleValue("CustomName"), "Event Code").getText());
  }

  async verifyAtEventNameUsingCustomName(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("EventName"),
    // objectIdentification.manualIdentify.getGridCell(uIMapScheduling.eventCode.uIEventCodeResultGrid,
    // BaseData.getSchedulingModuleValue("CustomName"), "Event Name").getText());
  }

  async verifyAtEventColorUsingCustomName(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("CustomTheme"),
    // objectIdentification.manualIdentify.getGridCell(uIMapScheduling.eventCode.uIEventCodeResultGrid,
    // BaseData.getSchedulingModuleValue("CustomName"), "Custom Theme").getText());
  }

  async clickIncludeInactiveCheckbox(): Promise<void> {
    // uIMapScheduling.eventCode.uIIncludeInactiveBox.click();
  }

  async verifyRowColorInActive(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridTableRow(uIMapScheduling.eventCode.uIEventCodeResultGrid, rowIndex).getAttribute("class")
    // .contains("grdEvtSrch_row_Color"));
  }

  async enterAtEventCode(): Promise<void> {
    // uIMapScheduling.eventCode.uIEventCodeEdit.sendKeys(BaseData.getSchedulingModuleValue("EventCode"));
  }

  async selectAtEventCodeInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapScheduling.eventCode.uIEventCodeResultGrid, BaseData.getSchedulingModuleValue("EventCode"));
  }

  async verifyEventCodeGridIsNotEmpty(): Promise<void> {
    // int gridTableRowsCount = objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapScheduling.eventCode.uIEventCodeResultGrid);
    // verify.ExpectedValueIsTrue(gridTableRowsCount > 0, "Grid is Empty --> ");
  }

  async doubleClickRandomRowAndVerifyNonEditableInGrid(): Promise<void> {
    // List<WebElement> Displayedcell = new ArrayList<WebElement>();
    // List<WebElement> rowsCollection = objectIdentification.manualIdentify
    // .getGridTableRowsCollection(uIMapScheduling.eventCode.uIEventCodeResultGrid);
    // for (WebElement row : rowsCollection) {
    // if (row.getAttribute("class").contains("igg_BlueThemeActiveRow")) {
    // List<WebElement> cells = row.findElements(By.tagName("td"));
    // for (WebElement cell : cells) {
    // if (cell.isDisplayed() == true) {
    // Displayedcell.add(cell);
    // int size = Displayedcell.size();
    // System.out.println(size);
    // for (WebElement c : Displayedcell) {
    // Playback.actionDriver.doubleClick(c).build().perform();
    // try {
    // Playback.pageLoadThreadWait();
    // switchToEventCodeEntryScreen();
    // eventCodeEntry.close();
    // switchToEventCodeEntryScreen();
    // eventCodeEntry.close();
    // switchToEventCode();
    // } catch (Exception e) {
    // System.out.println(e);
    // try {
    // switchToEventCode();
    // c.sendKeys("12345");
    // String text = c.getText();
    // verify.ExpectedValueIsFalse(text.contains("12345"));
    // } catch (Exception e) {
    // System.out.println("Element is non Editable");
  }

  async verifySameWindowOpenedTwice(): Promise<void> {
    // objectIdentification.windowHandle.verifySameScreenOpenedTwice("Event Code Entry");
  }

  async selectRandomRow(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow(uIMapScheduling.eventCode.uIEventCodeResultGrid);
  }

}

export class EventCodeEntryPage {
  readonly page: Page;
  readonly eventCodeEdit: Locator;
  readonly eventNameEdit: Locator;
  readonly customNameEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly customThemeComboBox: Locator;
  readonly sortSeqNoEdit: Locator;
  readonly inactiveBox: Locator;
  readonly inactiveDateEdit: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.eventCodeEdit = page.locator('#txtEventCode');
    this.eventNameEdit = page.locator('#txtEventName');
    this.customNameEdit = page.locator('#txtCustomName');
    this.descriptionEdit = page.locator('#txtDescription');
    this.customThemeComboBox = page.locator('#CDDCustomTheme_DropDown');
    this.sortSeqNoEdit = page.locator('#txtSortSeqNo');
    this.inactiveBox = page.locator('#chkIsActive');
    this.inactiveDateEdit = page.locator('#txtInActiveDttm');
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']//b");
  }

  async clickSave(): Promise<void> {
    // uIMapScheduling.eventCodeEntry.uISaveButton.click();
    // Playback.controlReadyThreadWait();
  }

  async save(): Promise<void> {
    // uIMapScheduling.eventCodeEntry.uISaveButton.click();
    // Playback.controlReadyThreadWait();
    // popup.confirm.yes();
  }

  async verifyEventCodeAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(30033) Enter Event Code.");
  }

  async enterAtEventCode(): Promise<void> {
    // uIMapScheduling.eventCodeEntry.uIEventCodeEdit.sendKeys(BaseData.getSchedulingModuleValue("EventCode"));
  }

  async enterAtEventName(): Promise<void> {
    // uIMapScheduling.eventCodeEntry.uIEventNameEdit.sendKeys(BaseData.getSchedulingModuleValue("EventName"));
  }

  async enterAtCustomName(): Promise<void> {
    // uIMapScheduling.eventCodeEntry.uICustomNameEdit.clear();
    // Playback.controlReadyThreadWait();
    // uIMapScheduling.eventCodeEntry.uICustomNameEdit.sendKeys(BaseData.getSchedulingModuleValue("CustomName"));
  }

  async selectAtCustomColor(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapScheduling.eventCodeEntry.uICustomThemeComboBox,
    // BaseData.getSchedulingModuleValue("Customcolor"));
    // uIMapScheduling.eventCodeEntry.uICustomThemeComboBox.sendKeys(Keys.TAB);
  }

  async enterDescription(): Promise<void> {
    // uIMapScheduling.eventCodeEntry.uIDescriptionEdit.sendKeys(Randomized.randomString(15));
  }

  async clickInactiveCheckbox(): Promise<void> {
    // uIMapScheduling.eventCodeEntry.uIInactiveBox.click();
    // Playback.controlReadyThreadWait();
  }

  async verifyInactiveDateAsCurrentDate(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapScheduling.eventCodeEntry.uIInactiveDateEdit.getAttribute("value")
    // .contains(Randomized.getCurrentDate()));
  }

  async verifyAdditionSuccessfullMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapScheduling.eventCodeEntry.uIBottomLeftSideStatusBar.getText(),
    // "1002 - Addition Successful");
  }

  async close(): Promise<void> {
    // uIMapScheduling.eventCodeEntry.driver.close();
  }

  async verifyUpdatesuccessfullMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapScheduling.eventCodeEntry.uIBottomLeftSideStatusBar.getText(),
    // "1003 - Update Successful");
  }

  async enterEventCode(): Promise<void> {
    // uIMapScheduling.eventCodeEntry.uIEventCodeEdit.sendKeys(Randomized.randomNameGenerate());
  }

  async enterEventName(): Promise<void> {
    // uIMapScheduling.eventCodeEntry.uIEventNameEdit.sendKeys(randomized.randomNameGenerate());
  }

}

export class EventResourcesPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly searchButton: Locator;
  readonly eventResourcesResultGrid: Locator;
  readonly pFCodeEdit: Locator;
  readonly resourceNameEdit: Locator;
  readonly displayNameEdit: Locator;
  readonly includeInactiveBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("//span[text()=\'Add New\']");
    this.searchButton = page.locator('#cmdSearch');
    this.eventResourcesResultGrid = page.locator('#grdResSrch');
    this.pFCodeEdit = page.locator('#lupPFCode_CodeValue');
    this.resourceNameEdit = page.locator('#txtResourceName');
    this.displayNameEdit = page.locator('#txtDisplayName');
    this.includeInactiveBox = page.locator('#chkInActive');
  }

  async clickSearchButton(): Promise<void> {
    // uIMapScheduling.eventResources.uISearchButton.click();
    // Playback.controlReadyThreadWait();
  }

  async clickAddNew(): Promise<void> {
    // uIMapScheduling.eventResources.uIAddNewButton.click();
    // Playback.controlReadyThreadWait();
  }

  async clickResourceNameInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapScheduling.eventResources.uIEventResourcesResultGrid,
    // BaseData.getSchedulingModuleValue("ResourceName"));
    // Playback.controlReadyThreadWait();
  }

  async clickIncludeInactiveCheckbox(): Promise<void> {
    // uIMapScheduling.eventResources.uIIncludeInactiveBox.click();
  }

  async enterAtResourceName(): Promise<void> {
    // uIMapScheduling.eventResources.uIResourceNameEdit
    // .sendKeys(BaseData.getSchedulingModuleValue("ResourceName"));
  }

  async verifyAtPFCodeUsingResourceName(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("PFCode"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapScheduling.eventResources.uIEventResourcesResultGrid,
    // BaseData.getSchedulingModuleValue("ResourceName"), "PF Code")
    // .getText());
  }

  async verifyAtDisplayNameUsingResourceName(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("DisplayName"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapScheduling.eventResources.uIEventResourcesResultGrid,
    // BaseData.getSchedulingModuleValue("ResourceName"), "Display Name")
    // .getText());
  }

  async verifyAtPFCodeInGrid(rowCount: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("PFCode"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapScheduling.eventResources.uIEventResourcesResultGrid, "PF Code", rowCount));
  }

  async clearResourceName(): Promise<void> {
    // uIMapScheduling.eventResources.uIResourceNameEdit.clear();
    // Playback.controlReadyThreadWait();
  }

  async verifyRowColorInActive(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridTableRow(uIMapScheduling.eventResources.uIEventResourcesResultGrid, rowIndex)
    // .getAttribute("class").contains("InActive"));
  }

  async enterAtPFCode(): Promise<void> {
    // uIMapScheduling.eventResources.uIPFCodeEdit.sendKeys(BaseData.getSchedulingModuleValue("PFCode"));
    // uIMapScheduling.eventResources.uIPFCodeEdit.sendKeys(Keys.TAB);
  }

  async verifyEventResourcesGridIsNotEmpty(): Promise<void> {
    // int gridTableRowsCount = objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapScheduling.eventResources.uIEventResourcesResultGrid);
    // verify.ExpectedValueIsTrue(gridTableRowsCount > 0, "Grid is Empty --> ");
  }

  async doubleClickRandomRowAndVerifyNonEditableInGrid(): Promise<void> {
    // List<WebElement> Displayedcell = new ArrayList<WebElement>();
    // List<WebElement> rowsCollection = objectIdentification.manualIdentify
    // .getGridTableRowsCollection(uIMapScheduling.eventResources.uIEventResourcesResultGrid);
    // for (WebElement row : rowsCollection) {
    // if (row.getAttribute("class").contains("igg_BlueThemeActiveRow")) {
    // List<WebElement> cells = row.findElements(By.tagName("td"));
    // for (WebElement cell : cells) {
    // if (cell.isDisplayed() == true) {
    // Displayedcell.add(cell);
    // int size = Displayedcell.size();
    // System.out.println(size);
    // for (WebElement c : Displayedcell) {
    // Playback.actionDriver.doubleClick(c).build().perform();
    // try {
    // Playback.pageLoadThreadWait();
    // switchToEventResourcesEntryScreen();
    // eventResourcesEntry.close();
    // switchToEventResourcesEntryScreen();
    // eventResourcesEntry.close();
    // switchToEventResources();
    // } catch (Exception e) {
    // System.out.println(e);
    // try {
    // switchToEventResources();
    // c.sendKeys("12345");
    // String text = c.getText();
    // verify.ExpectedValueIsFalse(text.contains("12345"));
    // } catch (Error e) {
    // System.out.println("Element is non Editable");
  }

  async verifySameWindowOpenTwice(): Promise<void> {
    // objectIdentification.windowHandle.verifySameScreenOpenedTwice("Event Resource Entry");
  }

  async selectRandomRow(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow(uIMapScheduling.eventResources.uIEventResourcesResultGrid);
  }

}

export class EventResourcesEntryPage {
  readonly page: Page;
  readonly pFCodeEdit: Locator;
  readonly resourceNameEdit: Locator;
  readonly displayNameEdit: Locator;
  readonly inactiveBox: Locator;
  readonly inactiveDateEdit: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly pFCodeLookpICon: Locator;
  readonly refreshButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pFCodeEdit = page.locator('#lupPFCode_CodeValue');
    this.resourceNameEdit = page.locator('#txtResource');
    this.displayNameEdit = page.locator('#txtDisplayName');
    this.inactiveBox = page.locator('#chkIsActive');
    this.inactiveDateEdit = page.locator('#txtInActiveDttm');
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']//b");
    this.pFCodeLookpICon = page.locator('#lupPFCode_imgBtn');
    this.refreshButton = page.locator('#cmdRefresh');
  }

  async enterAtPFCode(): Promise<void> {
    // uIMapScheduling.eventResourcesEntry.uIPFCodeEdit.sendKeys(BaseData.getSchedulingModuleValue("PFCode"));
    // uIMapScheduling.eventResourcesEntry.uIPFCodeEdit.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async verifyResourcesNameFieldDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapScheduling.eventResourcesEntry.uIResourceNameEdit.getAttribute("class")
    // .contains("textboxInactive"), "Verify Resource Name Field inactive");
  }

  async enterAtResourcesName(): Promise<void> {
    // uIMapScheduling.eventResourcesEntry.uIResourceNameEdit
    // .sendKeys(BaseData.getSchedulingModuleValue("ResourceName"));
    // uIMapScheduling.eventResourcesEntry.uIResourceNameEdit.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async verifyPFCodeFieldDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapScheduling.eventResourcesEntry.uIPFCodeEdit.getAttribute("class").contains("textboxInactive"),
    // "Verify PF Code Field inactive");
  }

  async enterAtDisplayName(): Promise<void> {
    // uIMapScheduling.eventResourcesEntry.uIDisplayNameEdit.clear();
    // uIMapScheduling.eventResourcesEntry.uIDisplayNameEdit
    // .sendKeys(BaseData.getSchedulingModuleValue("DisplayName"));
  }

  async clickSave(): Promise<void> {
    // uIMapScheduling.eventResourcesEntry.uISaveButton.click();
    // Playback.controlReadyThreadWait();
  }

  async save(): Promise<void> {
    // uIMapScheduling.eventResourcesEntry.uISaveButton.click();
    // Playback.controlReadyThreadWait();
    // popup.confirm.yes();
  }

  async verify8EnterMandatoryDataAckMsg(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // popup.acknowledge.okWithExpectedMessage("(8) Enter mandatory data");
  }

  async clickInactiveCheckbox(): Promise<void> {
    // uIMapScheduling.eventResourcesEntry.uIInactiveBox.click();
    // Playback.controlReadyThreadWait();
  }

  async verifyInactiveDateAsCurrentDate(): Promise<void> {
    // System.out.println(uIMapScheduling.eventResourcesEntry.uIInactiveDateEdit.getAttribute("value"));
    // verify.ExpectedValueIsTrue(uIMapScheduling.eventResourcesEntry.uIInactiveDateEdit.getAttribute("value")
    // .contains(Randomized.getCurrentDate("MM/dd/yyyy")));
  }

  async verifyAdditionSuccessfullMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapScheduling.eventResourcesEntry.uIBottomLeftSideStatusBar.getText());
  }

  async close(): Promise<void> {
    // uIMapScheduling.eventResourcesEntry.driver.close();
  }

  async clearPFCode(): Promise<void> {
    // uIMapScheduling.eventResourcesEntry.uIPFCodeEdit.clear();
    // uIMapScheduling.eventResourcesEntry.uIPFCodeEdit.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async clearResourceName(): Promise<void> {
    // uIMapScheduling.eventResourcesEntry.uIResourceNameEdit.clear();
    // uIMapScheduling.eventResourcesEntry.uIResourceNameEdit.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async verifyUpdatesuccessFullMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapScheduling.eventResourcesEntry.uIBottomLeftSideStatusBar.getText(),
    // "1003 - Update Successful");
    // System.out.println(uIMapScheduling.eventResourcesEntry.uIBottomLeftSideStatusBar.getText());
  }

  async selectPfCode(): Promise<void> {
    // uIMapScheduling.eventResourcesEntry.uIPFCodeLookpICon.click();
    // popup.switchToCodedSearch();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async verifyDisplayNameIsNotNull(): Promise<void> {
    // verify.ExpectedValueIsFalse(
    // uIMapScheduling.eventResourcesEntry.uIDisplayNameEdit.getAttribute("value").isEmpty());
  }

  async clickRefresh(): Promise<void> {
    // uIMapScheduling.eventResourcesEntry.uIRefreshButton.click();
  }

  async enterResourcesName(): Promise<void> {
    // uIMapScheduling.eventResourcesEntry.uIResourceNameEdit.sendKeys(randomized.randomNameGenerate());
    // uIMapScheduling.eventResourcesEntry.uIResourceNameEdit.sendKeys(Keys.TAB);
  }

  async verifyAtDisplayName(): Promise<void> {
    // String DisplayName = uIMapScheduling.eventResourcesEntry.uIDisplayNameEdit.getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("DisplayName"), DisplayName);
  }

}

export class ScheduleSettingsPage {
  readonly page: Page;
  readonly tourTab: Locator;
  readonly rotationTab: Locator;
  readonly groupTab: Locator;
  readonly jurisComboBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tourTab = page.locator("//span[contains(text(),\'Tour (Shift Hours)\')]");
    this.rotationTab = page.locator("//span[contains(text(),\'Rotation\')]");
    this.groupTab = page.locator("//span[contains(text(),\'Group\')]");
    this.jurisComboBox = page.locator('#lstJuris');
  }

  async clickTourShiftHoursTab(): Promise<void> {
    // uIMapScheduling.scheduleSettings.uITourTab.click();
    // Playback.controlReadyThreadWait();
  }

  async clickRotationTab(): Promise<void> {
    // uIMapScheduling.scheduleSettings.uIRotationTab.click();
    // Playback.controlReadyThreadWait();
  }

  async clickGroupTab(): Promise<void> {
    // uIMapScheduling.scheduleSettings.uIGroupTab.click();
    // Playback.controlReadyThreadWait();
  }

  async verifyJurisDropDownIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapScheduling.scheduleSettings.uIJurisComboBox.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed, "--> Dropdown was not selected");
  }

  async verifyTourTabIsDisplayed(): Promise<void> {
    // String text = uIMapScheduling.scheduleSettings.uITourTab.getText();
    // verify.ExpectedPropertyValueIsEqual("Tour (Shift Hours)", text);
  }

  async verifyRotationTabIsDisplayed(): Promise<void> {
    // String text = uIMapScheduling.scheduleSettings.uIRotationTab.getText();
    // verify.ExpectedPropertyValueIsEqual("Rotation", text);
  }

  async verifyGroupTabIsDisplayed(): Promise<void> {
    // String text = uIMapScheduling.scheduleSettings.uIGroupTab.getText();
    // verify.ExpectedPropertyValueIsEqual("Group", text);
  }

  async verifyAtTabIsOpened(i: number): Promise<void> {
    // String text = Playback.driver
    // .findElement(By.xpath(
    // "//span[@mkr='head']//span[@class='igtab_BlueThemeTHCenter igtab_BlueThemeTHCenterSel']"))
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("TabName" + i), text);
  }

  async verifyAtColumnName(JsonkeyIndex: number): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridHeaderTableRow(uIMapScheduling.scheduleSettings.scheduleSettingsTourTab.uITourCodeResultGrid).getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSchedulingModuleValue("ColumnName" + JsonkeyIndex)));
  }

}

export class ScheduleSettingsTourTabPage {
  readonly page: Page;
  readonly refreshButton: Locator;
  readonly addTourCodeButton: Locator;
  readonly tourCodeResultGrid: Locator;
  readonly includeInactiveBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.refreshButton = page.locator('#tabSchedule_tmpl0_usrTourCode_cmdSearch');
    this.addTourCodeButton = page.locator('#tabSchedule_tmpl0_usrTourCode_cmdTour');
    this.tourCodeResultGrid = page.locator('#tabSchedule_tmpl0_usrTourCode_grdTourCode');
    this.includeInactiveBox = page.locator('#tabSchedule_tmpl0_usrTourCode_chkIsActive');
  }

  async clickRefresh(): Promise<void> {
    // uIMapScheduling.scheduleSettings.scheduleSettingsTourTab.uIRefreshButton.click();
    // Playback.controlReadyThreadWait();
  }

  async clickAddTourCodeButton(): Promise<void> {
    // uIMapScheduling.scheduleSettings.scheduleSettingsTourTab.uIAddTourCodeButton.click();
    // Playback.controlReadyThreadWait();
  }

  async clickIncludeInactiveCheckbox(): Promise<void> {
    // uIMapScheduling.scheduleSettings.scheduleSettingsTourTab.uIIncludeInactiveBox.click();
  }

  async verifyAtDescriptionUsingCode(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("Description"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapScheduling.scheduleSettings.scheduleSettingsTourTab.uITourCodeResultGrid,
    // BaseData.getSchedulingModuleValue("Code"), "Description")
    // .getText());
  }

  async verifyTimeFromCurrentDateUsingCode(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentTime("HH:mm"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapScheduling.scheduleSettings.scheduleSettingsTourTab.uITourCodeResultGrid,
    // BaseData.getSchedulingModuleValue("Code"), "Time From")
    // .getText());
  }

  async verifyTimeToFutureDateUsingCode(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getFutureTimeByHours(4, "HH:mm"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapScheduling.scheduleSettings.scheduleSettingsTourTab.uITourCodeResultGrid,
    // BaseData.getSchedulingModuleValue("Code"), "Time To")
    // .getText());
  }

  async verifyInactiveRowColorUsingCode1(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(
    // uIMapScheduling.scheduleSettings.scheduleSettingsTourTab.uITourCodeResultGrid,
    // BaseData.getSchedulingModuleValue("Code1"))
    // .getAttribute("class").contains(" grdReadOnly"));
  }

  async selectAtCode1InGridRow(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapScheduling.scheduleSettings.scheduleSettingsTourTab.uITourCodeResultGrid,
    // BaseData.getSchedulingModuleValue("Code1"));
    // Playback.controlReadyThreadWait();
  }

  async verifyTimeToFutureDateUsingCode(futureTime: string): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(futureTime,
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapScheduling.scheduleSettings.scheduleSettingsTourTab.uITourCodeResultGrid,
    // BaseData.getSchedulingModuleValue("Code"), "Time To")
    // .getText());
  }

  async verifyTimeFromCurrentDateUsingCode(FromTime: string): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(FromTime,
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapScheduling.scheduleSettings.scheduleSettingsTourTab.uITourCodeResultGrid,
    // BaseData.getSchedulingModuleValue("Code"), "Time From")
    // .getText());
  }

  async selectAtTourCodeInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapScheduling.scheduleSettings.scheduleSettingsTourTab.uITourCodeResultGrid,
    // BaseData.getSchedulingModuleValue("Description"));
  }

  async verifyTheGridIsNotEditable(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow(uIMapScheduling.scheduleSettings.scheduleSettingsTourTab.uITourCodeResultGrid);
    // objectIdentification.windowHandle.switchToWindow("Tour Entry");
    // Playback.driver.close();
    // objectIdentification.windowHandle.switchToMainWindow();
    // objectIdentification.windowHandle.switchToMainWindowScreenTab("Schedule Settings");
    // uIMapScheduling.scheduleSettings.uITourTab.click();
    // List<WebElement> Displayedcell = new ArrayList<WebElement>();
    // List<WebElement> rowsCollection = objectIdentification.manualIdentify
    // .getGridTableRowsCollection(uIMapScheduling.scheduleSettings.scheduleSettingsTourTab.uITourCodeResultGrid);
    // for (WebElement row : rowsCollection) {
    // if (row.getAttribute("class").contains("igg_BlueThemeActiveRow")) {
    // List<WebElement> cells = row.findElements(By.tagName("td"));
    // for (WebElement cell : cells) {
    // if (cell.isDisplayed() == true) {
    // Displayedcell.add(cell);
    // for (WebElement c : Displayedcell) {
    // Playback.actionDriver.doubleClick(c).build().perform();
    // objectIdentification.windowHandle.switchToWindow("Tour Entry");
    // Playback.driver.close();
    // objectIdentification.windowHandle.switchToWindow("Tour Entry");
    // Playback.driver.close();
    // objectIdentification.windowHandle.switchToMainWindow();
    // objectIdentification.windowHandle.switchToMainWindowScreenTab("Schedule Settings");
    // uIMapScheduling.scheduleSettings.uITourTab.click();
    // try {
    // c.sendKeys("12345");
    // String text = c.getText();
    // verify.ExpectedValueIsTrue(text.contains("12345"));
    // } catch (Error e) {
    // System.out.println("Element is non Editable");
  }

  async verifyRefreshButtonIsDisplayedAndEnabled(): Promise<void> {
    // boolean displayed = uIMapScheduling.scheduleSettings.scheduleSettingsTourTab.uIRefreshButton.isDisplayed();
    // boolean enabled = uIMapScheduling.scheduleSettings.scheduleSettingsTourTab.uIRefreshButton.isEnabled();
    // verify.ExpectedValueIsTrue(enabled&&displayed);
  }

  async verifyInactiveCheckBoxIsDisplayedAndEnabled(): Promise<void> {
    // boolean displayed = uIMapScheduling.scheduleSettings.scheduleSettingsTourTab.uIIncludeInactiveBox.isDisplayed();
    // boolean enabled = uIMapScheduling.scheduleSettings.scheduleSettingsTourTab.uIIncludeInactiveBox.isEnabled();
    // verify.ExpectedValueIsTrue(enabled&&displayed);
  }

  async verifyAddTourCodeButtonIsDisplayedAndEnabled(): Promise<void> {
    // boolean displayed = uIMapScheduling.scheduleSettings.scheduleSettingsTourTab.uIAddTourCodeButton.isDisplayed();
    // boolean enabled = uIMapScheduling.scheduleSettings.scheduleSettingsTourTab.uIAddTourCodeButton.isEnabled();
    // verify.ExpectedValueIsTrue(enabled&&displayed);
  }

}

export class ScheduleSettingsRotationTabPage {
  readonly page: Page;
  readonly refreshButton: Locator;
  readonly addRotationCodeButton: Locator;
  readonly rotationResultGrid: Locator;
  readonly includeInactiveBox: Locator;
  readonly rotationDefinationLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.refreshButton = page.locator('#tabSchedule_tmpl1_usrRotation_cmdSearch');
    this.addRotationCodeButton = page.locator('#tabSchedule_tmpl1_usrRotation_cmdRotation');
    this.rotationResultGrid = page.locator('#tabSchedule_tmpl1_usrRotation_grdRotation');
    this.includeInactiveBox = page.locator('#tabSchedule_tmpl1_usrRotation_chkIsActive');
    this.rotationDefinationLabel = page.locator('#tabSchedule_tmpl1_usrRotation_lblJuris');
  }

  async clickRefresh(): Promise<void> {
    // uIMapScheduling.scheduleSettings.scheduleSettingsRotationTab.uIRefreshButton.click();
    // Playback.controlReadyThreadWait();
  }

  async clickAddRotationCodeButton(): Promise<void> {
    // uIMapScheduling.scheduleSettings.scheduleSettingsRotationTab.uIAddRotationCodeButton.click();
    // Playback.controlReadyThreadWait();
  }

  async clickIncludeInactiveCheckbox(): Promise<void> {
    // uIMapScheduling.scheduleSettings.scheduleSettingsRotationTab.uIIncludeInactiveBox.click();
  }

  async verifyAtDescriptionUsingCode(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("Description"),
    // objectIdentification.manualIdentify.getGridCell(
    // uIMapScheduling.scheduleSettings.scheduleSettingsRotationTab.uIRotationResultGrid,
    // BaseData.getSchedulingModuleValue("Code"), "Description").getText());
  }

  async verifyInactiveRowColorUsingCode1(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(
    // uIMapScheduling.scheduleSettings.scheduleSettingsRotationTab.uIRotationResultGrid,
    // BaseData.getSchedulingModuleValue("Code1"))
    // .getAttribute("class").contains(" grdReadOnly"));
  }

  async selectAtCode1InGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapScheduling.scheduleSettings.scheduleSettingsRotationTab.uIRotationResultGrid,
    // BaseData.getSchedulingModuleValue("Code1"));
    // Playback.controlReadyThreadWait();
  }

  async verifyTheGridIsNotEditable(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow(uIMapScheduling.scheduleSettings.scheduleSettingsRotationTab.uIRotationResultGrid);
    // objectIdentification.windowHandle.switchToWindow(" Rotation Code Entry - 1511");
    // Playback.driver.close();
    // objectIdentification.windowHandle.switchToMainWindow();
    // objectIdentification.windowHandle.switchToMainWindowScreenTab("Schedule Settings");
    // List<WebElement> Displayedcell = new ArrayList<WebElement>();
    // List<WebElement> rowsCollection = objectIdentification.manualIdentify
    // .getGridTableRowsCollection(uIMapScheduling.scheduleSettings.scheduleSettingsRotationTab.uIRotationResultGrid);
    // for (WebElement row : rowsCollection) {
    // if (row.getAttribute("class").contains("igg_BlueThemeActiveRow")) {
    // List<WebElement> cells = row.findElements(By.tagName("td"));
    // for (WebElement cell : cells) {
    // if (cell.isDisplayed() == true) {
    // Displayedcell.add(cell);
    // for (WebElement c : Displayedcell) {
    // Playback.actionDriver.doubleClick(c).build().perform();
    // objectIdentification.windowHandle.switchToWindow("Rotation Code Entry");
    // Playback.driver.close();
    // objectIdentification.windowHandle.switchToMainWindow();
    // objectIdentification.windowHandle.switchToMainWindowScreenTab("Schedule Settings");
    // uIMapScheduling.scheduleSettings.uIRotationTab.click();
    // try {
    // c.sendKeys("12345");
    // String text = c.getText();
    // verify.ExpectedValueIsTrue(text.contains("12345"));
    // } catch (Error e) {
    // System.out.println("Element is non Editable");
  }

  async verifyAtRoationDefinitionLabel(): Promise<void> {
    // String attribute = uIMapScheduling.scheduleSettings.scheduleSettingsRotationTab.uIRotationDefinationLabel.getText();
    // verify.ExpectedPropertyValueIsEqual(attribute, BaseData.getSchedulingModuleValue("RotationDefinationLabelText"));
  }

  async verifyAtDescriptionUsingCode(JsonkeyIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("Description"+JsonkeyIndex),
    // objectIdentification.manualIdentify.getGridCell(
    // uIMapScheduling.scheduleSettings.scheduleSettingsRotationTab.uIRotationResultGrid,
    // BaseData.getSchedulingModuleValue("Code"+JsonkeyIndex), "Description").getText());
  }

}

export class ScheduleSettingsGroupTabPage {
  readonly page: Page;
  readonly refreshButton: Locator;
  readonly addGroupCodeButton: Locator;
  readonly groupResultGrid: Locator;
  readonly includeInactiveBox: Locator;
  readonly personnelBatchUpdateButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.refreshButton = page.locator('#tabSchedule_tmpl2_usrWorkGroups_cmdSearch');
    this.addGroupCodeButton = page.locator('#tabSchedule_tmpl2_usrWorkGroups_cmdWorkGroup');
    this.groupResultGrid = page.locator("//div[@id=\'tabSchedule_tmpl2_usrWorkGroups_grdWorkGroup\']");
    this.includeInactiveBox = page.locator('#tabSchedule_tmpl2_usrWorkGroups_chkIsActive');
    this.personnelBatchUpdateButton = page.locator('#tabSchedule_tmpl2_usrWorkGroups_cmdBatchUpdate');
  }

  async clickRefresh(): Promise<void> {
    // uIMapScheduling.scheduleSettings.scheduleSettingsGroupTab.uIRefreshButton.click();
    // Playback.controlReadyThreadWait();
  }

  async clickAddGroupCodeButton(): Promise<void> {
    // uIMapScheduling.scheduleSettings.scheduleSettingsGroupTab.uIAddGroupCodeButton.click();
    // Playback.controlReadyThreadWait();
  }

  async clickIncludeInactiveCheckbox(): Promise<void> {
    // uIMapScheduling.scheduleSettings.scheduleSettingsGroupTab.uIIncludeInactiveBox.click();
  }

  async verifyAtDescriptionUsingGroup(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("Description"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapScheduling.scheduleSettings.scheduleSettingsGroupTab.uIGroupResultGrid,
    // BaseData.getSchedulingModuleValue("Group"), "Description")
    // .getText());
  }

  async verifyAtShiftUsingGroup(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("Shift"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapScheduling.scheduleSettings.scheduleSettingsGroupTab.uIGroupResultGrid,
    // BaseData.getSchedulingModuleValue("Group"), "Shift")
    // .getText());
  }

  async verifyAtRotationUsingGroup(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("Rotation"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapScheduling.scheduleSettings.scheduleSettingsGroupTab.uIGroupResultGrid,
    // BaseData.getSchedulingModuleValue("Group"), "Rotation")
    // .getText());
  }

  async verifyAtDisplayNameUsingGroup(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("DisplayName"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapScheduling.scheduleSettings.scheduleSettingsGroupTab.uIGroupResultGrid,
    // BaseData.getSchedulingModuleValue("Group"), "Display Name")
    // .getText());
  }

  async verifyInactiveRowColorUsingGroup1(): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(
    // uIMapScheduling.scheduleSettings.scheduleSettingsGroupTab.uIGroupResultGrid,
    // BaseData.getSchedulingModuleValue("Group1"))
    // .getAttribute("class").contains(" grdReadOnly"));
  }

  async selectAtGroup1InGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapScheduling.scheduleSettings.scheduleSettingsGroupTab.uIGroupResultGrid,
    // BaseData.getSchedulingModuleValue("Group1"));
    // Playback.controlReadyThreadWait();
  }

  async selectRowByAtGroup(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapScheduling.scheduleSettings.scheduleSettingsGroupTab.uIGroupResultGrid,
    // BaseData.getSchedulingModuleValue("Group"));
  }

  async verifyAtColumnName(ColumnName: string): Promise<void> {
    // String text = Playback.driver.findElement(By.xpath(
    // "//div[@id='tabSchedule_tmpl2_usrWorkGroups_grdWorkGroup']//table//tbody//tr[contains(@class,'ThemeHeader')]"))
    // .getText();
    // boolean contains = text.contains(ColumnName);
    // verify.ExpectedValueIsTrue(contains);
  }

  async verifyAtColumnNameIsNotPresent(ColumnName: string): Promise<void> {
    // String text = Playback.driver.findElement(By.xpath(
    // "//div[@id='tabSchedule_tmpl2_usrWorkGroups_grdWorkGroup']//table//tbody//tr[contains(@class,'ThemeHeader')]"))
    // .getText();
    // boolean contains = text.contains(ColumnName);
    // verify.ExpectedValueIsFalse(contains);
  }

  async verifyTheGridIsNotEditable(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow(uIMapScheduling.scheduleSettings.scheduleSettingsGroupTab.uIGroupResultGrid);
    // objectIdentification.windowHandle.switchToWindow("Group Entry");
    // Playback.driver.close();
    // objectIdentification.windowHandle.switchToMainWindow();
    // objectIdentification.windowHandle.switchToMainWindowScreenTab("Schedule Settings");
    // uIMapScheduling.scheduleSettings.uIGroupTab.click();
    // List<WebElement> Displayedcell = new ArrayList<WebElement>();
    // List<WebElement> rowsCollection = objectIdentification.manualIdentify
    // .getGridTableRowsCollection(uIMapScheduling.scheduleSettings.scheduleSettingsGroupTab.uIGroupResultGrid);
    // for (WebElement row : rowsCollection) {
    // if (row.getAttribute("class").contains("igg_BlueThemeActiveRow")) {
    // List<WebElement> cells = row.findElements(By.tagName("td"));
    // for (WebElement cell : cells) {
    // if (cell.isDisplayed() == true) {
    // Displayedcell.add(cell);
    // for (WebElement c : Displayedcell) {
    // Playback.actionDriver.doubleClick(c).build().perform();
    // objectIdentification.windowHandle.switchToWindow("Group Entry");
    // Playback.driver.close();
    // objectIdentification.windowHandle.switchToMainWindow();
    // objectIdentification.windowHandle.switchToMainWindowScreenTab("Schedule Settings");
    // uIMapScheduling.scheduleSettings.uIGroupTab.click();
    // try {
    // c.sendKeys("12345");
    // String text = c.getText();
    // verify.ExpectedValueIsTrue(text.contains("12345"));
    // } catch (Error e) {
    // System.out.println("Element is non Editable");
  }

  async verifyInactiveCheckBoxIsDisplayedAndEnabled(): Promise<void> {
    // boolean enabled = uIMapScheduling.scheduleSettings.scheduleSettingsGroupTab.uIIncludeInactiveBox.isEnabled();
    // boolean Displayed = uIMapScheduling.scheduleSettings.scheduleSettingsGroupTab.uIIncludeInactiveBox.isDisplayed();
    // verify.ExpectedValueIsTrue(enabled&&Displayed);
  }

  async verifyRefreshIsDisplayedAndEnabled(): Promise<void> {
    // boolean enabled = uIMapScheduling.scheduleSettings.scheduleSettingsGroupTab.uIRefreshButton.isEnabled();
    // boolean Displayed = uIMapScheduling.scheduleSettings.scheduleSettingsGroupTab.uIRefreshButton.isDisplayed();
    // verify.ExpectedValueIsTrue(enabled&&Displayed);
  }

  async verifyPersonnelBatchUpdateIsDisplayedAndEnabled(): Promise<void> {
    // boolean enabled = uIMapScheduling.scheduleSettings.scheduleSettingsGroupTab.uIPersonnelBatchUpdateButton.isEnabled();
    // boolean Displayed = uIMapScheduling.scheduleSettings.scheduleSettingsGroupTab.uIPersonnelBatchUpdateButton.isDisplayed();
    // verify.ExpectedValueIsTrue(enabled&&Displayed);
  }

  async verifyAddGroupCodeIsDisplayedAndEnabled(): Promise<void> {
    // boolean enabled = uIMapScheduling.scheduleSettings.scheduleSettingsGroupTab.uIAddGroupCodeButton.isEnabled();
    // boolean Displayed = uIMapScheduling.scheduleSettings.scheduleSettingsGroupTab.uIAddGroupCodeButton.isDisplayed();
    // verify.ExpectedValueIsTrue(enabled&&Displayed);
  }

}

export class TourEntryPage {
  readonly page: Page;
  readonly tourCodeEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly notesEdit: Locator;
  readonly inactiveCheckBox: Locator;
  readonly inactiveDateEdit: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly displaySeqEdit: Locator;
  readonly timeFromEdit: Locator;
  readonly timeToEdit: Locator;
  readonly jurisComboBox: Locator;
  readonly printIcon: Locator;
  readonly saveAndAddNewIcon: Locator;
  readonly refreshIcon: Locator;
  readonly tourDefinesLabel: Locator;
  readonly displayColorDropDown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tourCodeEdit = page.locator('#txtTourCode');
    this.descriptionEdit = page.locator('#txtDescription');
    this.notesEdit = page.locator('#txtNotes');
    this.inactiveCheckBox = page.locator('#chkInactive');
    this.inactiveDateEdit = page.locator('#txtInactive');
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']//b");
    this.displaySeqEdit = page.locator('#txtDispseq');
    this.timeFromEdit = page.locator("//table[@ID = \'txtTimeFrom_Time\']//input");
    this.timeToEdit = page.locator("//table[@ID = \'txtTimeTo_Time\']//input");
    this.jurisComboBox = page.locator('#lstJuris');
    this.printIcon = page.locator('#cmdPrint');
    this.saveAndAddNewIcon = page.locator('#cmdSaveNAddNew');
    this.refreshIcon = page.locator('#cmdRefresh');
    this.tourDefinesLabel = page.locator('#KPILabel1');
    this.displayColorDropDown = page.locator('#cddScheduleColor_DropDown');
  }

  async verifyTourCodeAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(3032) Enter Tour Code.");
    // Playback.controlReadyThreadWait();
  }

  async enterAtTourCode(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapScheduling.tourEntry.uITourCodeEdit.sendKeys(BaseData.getSchedulingModuleValue("TourCode"));
  }

  async enterAtDescription(): Promise<void> {
    // uIMapScheduling.tourEntry.uIDescriptionEdit.clear();
    // uIMapScheduling.tourEntry.uIDescriptionEdit.sendKeys(BaseData.getSchedulingModuleValue("Description"));
  }

  async tabTimeFromAndRead(): Promise<string> {
    // uIMapScheduling.tourEntry.uITimeFromEdit.sendKeys(Keys.TAB);
    // String FromTime = uIMapScheduling.tourEntry.uITimeFromEdit.getAttribute("value");
    // return FromTime;
  }

  async enterTimeToAsFutureTimeandRead(): Promise<string> {
    // String futureTime = Randomized.getFutureTimeByHours(4, "HH:mm");
    // uIMapScheduling.tourEntry.uITimeToEdit.sendKeys(futureTime);
    // return futureTime;
  }

  async enterNotes(StringLength: number): Promise<void> {
    // uIMapScheduling.tourEntry.uINotesEdit.sendKeys(Randomized.randomString(StringLength));
  }

  async verifyAdditionSuccessFullMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapScheduling.tourEntry.uIBottomLeftSideStatusBar.getText());
  }

  async clickInactiveCheckbox(): Promise<void> {
    // uIMapScheduling.tourEntry.uIInactiveCheckBox.click();
  }

  async verifyInactiveDateAsCurrentDate(): Promise<void> {
    // verify.ExpectedValueIsTrue(Randomized.getCurrentDate("MM/dd/yyyy").contains(uIMapScheduling.tourEntry.uIInactiveDateEdit.getAttribute("value")));
  }

  async clickSave(): Promise<void> {
    // uIMapScheduling.tourEntry.uISaveButton.click();
  }

  async saveScreen(): Promise<void> {
    // uIMapScheduling.tourEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async closeSCreen(): Promise<void> {
    // uIMapScheduling.tourEntry.driver.close();
  }

  async verifyUpdateSuccessFullMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1003 - Update Successful",
    // uIMapScheduling.tourEntry.uIBottomLeftSideStatusBar.getText());
  }

  async enterTourCode(): Promise<void> {
    // uIMapScheduling.tourEntry.uITourCodeEdit.sendKeys(randomized.randomNameGenerate());
  }

  async enterDescription(): Promise<void> {
    // uIMapScheduling.tourEntry.uIDescriptionEdit.sendKeys(Randomized.randomString(5));
  }

  async selectAtJuris(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapScheduling.tourEntry.uIJurisComboBox,
    // "PX - ProPhoenix");
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapScheduling.tourEntry.uIPrintIcon.click();
  }

  async verifyEnteredTourCodeIsNotVanishing(): Promise<void> {
    // String val = uIMapScheduling.tourEntry.uITourCodeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("TourCode"), val);
  }

  async verifyEnteredDescriptionIsNotVanishing(): Promise<void> {
    // String val = uIMapScheduling.tourEntry.uIDescriptionEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("Description"), val);
  }

  async verifySaveIconIsEnabledAndDisplayed(): Promise<void> {
    // boolean displayed = uIMapScheduling.tourEntry.uISaveButton.isDisplayed();
    // boolean enabled = uIMapScheduling.tourEntry.uISaveButton.isEnabled();
    // verify.ExpectedValueIsTrue(displayed&&enabled);
  }

  async verifySaveAndCloseIconIsEnabledAndDisplayed(): Promise<void> {
    // boolean displayed = uIMapScheduling.tourEntry.uISaveAndCloseButton.isDisplayed();
    // boolean enabled = uIMapScheduling.tourEntry.uISaveAndCloseButton.isEnabled();
    // verify.ExpectedValueIsTrue(displayed&&enabled);
  }

  async verifySaveAndAddNewIconIsEnabledAndDisplayed(): Promise<void> {
    // boolean displayed = uIMapScheduling.tourEntry.uISaveAndAddNewIcon.isDisplayed();
    // boolean enabled = uIMapScheduling.tourEntry.uISaveAndAddNewIcon.isEnabled();
    // verify.ExpectedValueIsTrue(displayed&&enabled);
  }

  async verifyPrintIconIsEnabledAndDisplayed(): Promise<void> {
    // boolean displayed = uIMapScheduling.tourEntry.uIPrintIcon.isDisplayed();
    // boolean enabled = uIMapScheduling.tourEntry.uIPrintIcon.isEnabled();
    // verify.ExpectedValueIsTrue(displayed&&enabled);
  }

  async verifyRefreshIconIsEnabledAndDisplayed(): Promise<void> {
    // boolean displayed = uIMapScheduling.tourEntry.uIrefreshIcon.isDisplayed();
    // boolean enabled = uIMapScheduling.tourEntry.uIrefreshIcon.isEnabled();
    // verify.ExpectedValueIsTrue(displayed&&enabled);
  }

  async enterAtTourCode(JsonKeyIndex: number): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapScheduling.tourEntry.uITourCodeEdit.clear();
    // uIMapScheduling.tourEntry.uITourCodeEdit.sendKeys(BaseData.getSchedulingModuleValue("TourCode"+JsonKeyIndex));
  }

  async verifyAtTourCodeLength(): Promise<void> {
    // String maxlength = uIMapScheduling.tourEntry.uITourCodeEdit.getAttribute("maxlength");
    // verify.ExpectedIntergerValueIsEqualToActual(uIMapScheduling.tourEntry.uITourCodeEdit.getAttribute("value").length(), Integer.parseInt(maxlength));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("TourCodeLength"), maxlength);
  }

  async verifySpecialCharactersAllowingInTourCodeField(): Promise<void> {
    // uIMapScheduling.tourEntry.uITourCodeEdit.clear();
    // String specialChars = BaseData.getPersonnelModuleValue("specialChars");
    // for (char ch : specialChars.toCharArray()) {
    // uIMapScheduling.tourEntry.uITourCodeEdit.clear();
    // uIMapScheduling.tourEntry.uITourCodeEdit.sendKeys(String.valueOf(ch));
    // String text = uIMapScheduling.tourEntry.uITourCodeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(String.valueOf(ch), text);
    // System.out.println("Entering: " + ch);
  }

  async verifySpecialCharactersAllowingInDescriptionField(): Promise<void> {
    // uIMapScheduling.tourEntry.uIDescriptionEdit.clear();
    // String specialChars = BaseData.getPersonnelModuleValue("specialChars");
    // for (char ch : specialChars.toCharArray()) {
    // uIMapScheduling.tourEntry.uIDescriptionEdit.clear();
    // uIMapScheduling.tourEntry.uIDescriptionEdit.sendKeys(String.valueOf(ch));
    // String text = uIMapScheduling.tourEntry.uIDescriptionEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(String.valueOf(ch), text);
    // System.out.println("Entering: " + ch);
  }

  async enterDescription(stringLength: number): Promise<void> {
    // uIMapScheduling.tourEntry.uIDescriptionEdit.sendKeys(Randomized.randomString(stringLength));
  }

  async verifyAtDescriptionLength(): Promise<void> {
    // String maxlength = uIMapScheduling.tourEntry.uIDescriptionEdit.getAttribute("maxlength");
    // verify.ExpectedIntergerValueIsEqualToActual(uIMapScheduling.tourEntry.uIDescriptionEdit.getAttribute("value").length(),Integer.parseInt(maxlength));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("DescriptionLength"), maxlength);
  }

  async enterTimeFromAsCurrentTime(): Promise<void> {
    // String futureTime = Randomized.getCurrentTime("HH:mm");
    // uIMapScheduling.tourEntry.uITimeFromEdit.click();
    // uIMapScheduling.tourEntry.uITimeFromEdit.clear();
    // uIMapScheduling.tourEntry.uITimeFromEdit.sendKeys(futureTime);
  }

  async verifySpecialCharactersAllowingInNotesField(): Promise<void> {
    // uIMapScheduling.tourEntry.uINotesEdit.clear();
    // String specialChars = BaseData.getPersonnelModuleValue("specialChars");
    // for (char ch : specialChars.toCharArray()) {
    // uIMapScheduling.tourEntry.uINotesEdit.clear();
    // uIMapScheduling.tourEntry.uINotesEdit.sendKeys(String.valueOf(ch));
    // String text = uIMapScheduling.tourEntry.uINotesEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(String.valueOf(ch), text);
  }

  async verifySpecialCharactersNotAllowingInDisplaySortSeqField(): Promise<void> {
    // uIMapScheduling.tourEntry.uIDisplaySeqEdit.clear();
    // String specialChars = BaseData.getPersonnelModuleValue("SortSeqspecialChars");
    // for (char ch : specialChars.toCharArray()) {
    // uIMapScheduling.tourEntry.uIDisplaySeqEdit.clear();
    // uIMapScheduling.tourEntry.uIDisplaySeqEdit.sendKeys(String.valueOf(ch));
    // String text = uIMapScheduling.tourEntry.uIDisplaySeqEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(text.isBlank());
  }

  async enterAtNotes(): Promise<void> {
    // uIMapScheduling.tourEntry.uINotesEdit.clear();
    // uIMapScheduling.tourEntry.uIDescriptionEdit.sendKeys(BaseData.getSchedulingModuleValue("Notes"));
  }

  async verifyAtNotesLength(): Promise<void> {
    // String maxlength = uIMapScheduling.tourEntry.uINotesEdit.getAttribute("onkeyup");
    // verify.ExpectedValueIsTrue(maxlength.contains(BaseData.getSchedulingModuleValue("NotesLength")));
    // verify.ExpectedValueIsTrue(maxlength.contains(String.valueOf(uIMapScheduling.tourEntry.uINotesEdit.getAttribute("value").length())));
  }

  async enterAtDisplaySortSeq(): Promise<void> {
    // uIMapScheduling.tourEntry.uIDisplaySeqEdit.sendKeys(BaseData.getSchedulingModuleValue("DisplaySortSeq"));
  }

  async verifyAtDisplaySeqLength(): Promise<void> {
    // String maxlength = uIMapScheduling.tourEntry.uIDisplaySeqEdit.getAttribute("maxlength");
    // verify.ExpectedIntergerValueIsEqualToActual(uIMapScheduling.tourEntry.uIDisplaySeqEdit.getAttribute("value").length(),Integer.parseInt(maxlength));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("DisplaySeqLength"), maxlength);
  }

  async verifyInactiveDateIsDisabled(): Promise<void> {
    // String attribute = uIMapScheduling.tourEntry.uIInactiveDateEdit.getAttribute("readonly");
    // verify.ExpectedValueIsTrue(Boolean.valueOf(attribute));
  }

  async verifyAtTourDefinesLabel(): Promise<void> {
    // String attribute = uIMapScheduling.tourEntry.uITourDefinesLabel.getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("TourDefinesLabel"), attribute);
  }

  async enterAtTimeFrom(): Promise<void> {
    // uIMapScheduling.tourEntry.uITimeFromEdit.click();
    // uIMapScheduling.tourEntry.uITimeFromEdit.clear();
    // uIMapScheduling.tourEntry.uITimeFromEdit.sendKeys(BaseData.getSchedulingModuleValue("TimeFrom"));
  }

  async enterAtTimeTo(): Promise<void> {
    // uIMapScheduling.tourEntry.uITimeToEdit.click();
    // uIMapScheduling.tourEntry.uITimeToEdit.clear();
    // uIMapScheduling.tourEntry.uITimeToEdit.sendKeys(BaseData.getSchedulingModuleValue("TimeTo"));
  }

  async selectAtDisplayColor(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapScheduling.tourEntry.uIDisplayColorDropDown, BaseData.getSchedulingModuleValue("DisplayColor"));
  }

}

export class RotationCodeEntryPage {
  readonly page: Page;
  readonly rotationCodeEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly scheduleMinEdit: Locator;
  readonly inactiveCheckBox: Locator;
  readonly inactiveDateEdit: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly tourComboBox: Locator;
  readonly notesEdit: Locator;
  readonly onDutyRadioCheckBox: Locator;
  readonly offDutyRadioCheckBox: Locator;
  readonly daysNoEdit: Locator;
  readonly rotationCodeResultGrid: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly updateButton: Locator;
  readonly saveAndNewButton: Locator;
  readonly saveAndCloseIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rotationCodeEdit = page.locator('#txtRotation');
    this.descriptionEdit = page.locator('#txtDescription');
    this.scheduleMinEdit = page.locator('#txtScheduleMin');
    this.inactiveCheckBox = page.locator('#chkInactive');
    this.inactiveDateEdit = page.locator('#txtInactive');
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']//b");
    this.tourComboBox = page.locator('#cddTour');
    this.notesEdit = page.locator('#txtNotes');
    this.onDutyRadioCheckBox = page.locator('#rbtOnDuty');
    this.offDutyRadioCheckBox = page.locator('#rbtOffDuty');
    this.daysNoEdit = page.locator('#txtDay');
    this.rotationCodeResultGrid = page.locator('#grdRotation');
    this.addButton = page.locator('#cmdAdd');
    this.clearButton = page.locator('#cmdClear');
    this.updateButton = page.locator('#cmdAdd');
    this.saveAndNewButton = page.locator('#cmdSaveNAddNew');
    this.saveAndCloseIcon = page.locator('#cmdSaveNClose');
  }

  async verifyRotationCodeAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(3032) Enter Rotation Code.");
    // Playback.controlReadyThreadWait();
  }

  async enterAtRotationCode(): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uIRotationCodeEdit.clear();
    // uIMapScheduling.rotationCodeEntry.uIRotationCodeEdit
    // .sendKeys(BaseData.getSchedulingModuleValue("RotationCode"));
  }

  async enterAtDescription(): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uIDescriptionEdit.clear();
    // uIMapScheduling.rotationCodeEntry.uIDescriptionEdit
    // .sendKeys(BaseData.getSchedulingModuleValue("Description"));
  }

  async clickInactiveCheckbox(): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uIInactiveCheckBox.click();
  }

  async verifyInactiveDateAsCurrentDate(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapScheduling.rotationCodeEntry.uIInactiveDateEdit.getAttribute("value").contains(Randomized.getCurrentDate("MM/dd/yyyy")));
  }

  async clickOnDutyRadioCheckbox(): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uIOnDutyRadioCheckBox.click();
  }

  async clickOffDutyRadioCheckbox(): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uIOffDutyRadioCheckBox.click();
  }

  async selectAtTour(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapScheduling.rotationCodeEntry.uITourComboBox,
    // BaseData.getSchedulingModuleValue("Tour"));
  }

  async enterAtDayNo(): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uIDaysNoEdit.clear();
    // uIMapScheduling.rotationCodeEntry.uIDaysNoEdit.sendKeys(BaseData.getSchedulingModuleValue("DayNo"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uIAddButton.click();
    // Playback.controlReadyThreadWait();
  }

  async verifyadditionalSuccessfullMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapScheduling.rotationCodeEntry.uIBottomLeftSideStatusBar.getText());
  }

  async clickSave(): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uISaveButton.click();
  }

  async saveScreen(): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async closeSCreen(): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.driver.close();
  }

  async enterNotes(StringLength: number): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uINotesEdit.clear();
    // uIMapScheduling.rotationCodeEntry.uINotesEdit.sendKeys(Randomized.randomString(StringLength));
  }

  async selectAtTour1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapScheduling.rotationCodeEntry.uITourComboBox,
    // BaseData.getSchedulingModuleValue("Tour1"));
  }

  async verifyAtTour1AddedToGrid(rowIndex: number): Promise<void> {
    // Playback.controlReadyThreadWait();
    // verify.ExpectedValueIsTrue(BaseData.getSchedulingModuleValue("Tour1")
    // .contains(objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapScheduling.rotationCodeEntry.uIRotationCodeResultGrid, "Tour", rowIndex)));
  }

  async verifyUpdateSuccessfullMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1003 - Update Successful",
    // uIMapScheduling.rotationCodeEntry.uIBottomLeftSideStatusBar.getText());
  }

  async enterRotationCode(IntegerLength: number): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uIRotationCodeEdit.clear();
    // uIMapScheduling.rotationCodeEntry.uIRotationCodeEdit.sendKeys(Randomized.randomNumberString(IntegerLength));
  }

  async enterDescription(StringLength: number): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uIDescriptionEdit.clear();
    // uIMapScheduling.rotationCodeEntry.uIDescriptionEdit.sendKeys(Randomized.randomString(StringLength));
  }

  async selectTour(): Promise<string> {
    // objectIdentification.randomIdentify.selectDropDownOption(uIMapScheduling.rotationCodeEntry.uITourComboBox);
    // String SelectedTour = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapScheduling.rotationCodeEntry.uITourComboBox);
    // System.out.println(SelectedTour);
    // return SelectedTour;
  }

  async enterDayNo(DayNoLength: number): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uIDaysNoEdit.clear();
    // uIMapScheduling.rotationCodeEntry.uIDaysNoEdit.sendKeys(Randomized.enterRandomNumbers(DayNoLength));
  }

  async verifyTourInGridForRandomByReasonCode(SeletedTour: string): Promise<void> {
    // String Tour = objectIdentification.manualIdentify
    // .getGridCell(uIMapScheduling.rotationCodeEntry.uIRotationCodeResultGrid, "On Duty", "Tour")
    // .getText();
    // System.out.println(Tour);
    // verify.ExpectedPropertyValueIsEqual(SeletedTour, Tour);
  }

  async clickUpdateButton(): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uIUpdateButton.click();
  }

  async selectAtTourInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapScheduling.rotationCodeEntry.uIRotationCodeResultGrid,
    // BaseData.getSchedulingModuleValue("Tour1"));
  }

  async verifyAtTourInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridCell(uIMapScheduling.rotationCodeEntry.uIRotationCodeResultGrid,
    // BaseData.getSchedulingModuleValue("Tour"), "Tour")
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("Tour"), text);
  }

  async verifyReasonCodeAsOffDutyInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridCell(uIMapScheduling.rotationCodeEntry.uIRotationCodeResultGrid,
    // BaseData.getSchedulingModuleValue("Tour"), "Reason Code")
    // .getText();
    // verify.ExpectedPropertyValueIsEqual("Off Duty", text);
  }

  async verifyRotationCodeIsDisplayedAndEnabled(): Promise<void> {
    // boolean displayed = uIMapScheduling.rotationCodeEntry.uIRotationCodeEdit.isDisplayed();
    // boolean enabled = uIMapScheduling.rotationCodeEntry.uIRotationCodeEdit.isEnabled();
    // verify.ExpectedValueIsTrue(displayed&&enabled);
  }

  async verifyDescriptionIsDisplayedAndEnabled(): Promise<void> {
    // boolean displayed = uIMapScheduling.rotationCodeEntry.uIDescriptionEdit.isDisplayed();
    // boolean enabled = uIMapScheduling.rotationCodeEntry.uIDescriptionEdit.isEnabled();
    // verify.ExpectedValueIsTrue(displayed&&enabled);
  }

  async verifyScheduleMinIsDisplayedAndEnabled(): Promise<void> {
    // boolean displayed = uIMapScheduling.rotationCodeEntry.uIScheduleMinEdit.isDisplayed();
    // boolean enabled = uIMapScheduling.rotationCodeEntry.uIScheduleMinEdit.isEnabled();
    // verify.ExpectedValueIsTrue(displayed&&enabled);
  }

  async verifyNotesIsDisplayedAndEnabled(): Promise<void> {
    // boolean displayed = uIMapScheduling.rotationCodeEntry.uINotesEdit.isDisplayed();
    // boolean enabled = uIMapScheduling.rotationCodeEntry.uINotesEdit.isEnabled();
    // verify.ExpectedValueIsTrue(displayed&&enabled);
  }

  async verifyDayIsDisplayedAndEnabled(): Promise<void> {
    // boolean displayed = uIMapScheduling.rotationCodeEntry.uIDaysNoEdit.isDisplayed();
    // boolean enabled = uIMapScheduling.rotationCodeEntry.uIDaysNoEdit.isEnabled();
    // verify.ExpectedValueIsTrue(displayed&&enabled);
  }

  async verifyTourIsDisplayedAndEnabled(): Promise<void> {
    // boolean displayed = uIMapScheduling.rotationCodeEntry.uITourComboBox.isDisplayed();
    // boolean enabled = uIMapScheduling.rotationCodeEntry.uITourComboBox.isEnabled();
    // verify.ExpectedValueIsTrue(displayed&&enabled);
  }

  async verifyInActiveCheckBoxIsDisplayedAndEnabled(): Promise<void> {
    // boolean displayed = uIMapScheduling.rotationCodeEntry.uIInactiveCheckBox.isDisplayed();
    // boolean enabled = uIMapScheduling.rotationCodeEntry.uIInactiveCheckBox.isEnabled();
    // verify.ExpectedValueIsTrue(displayed&&enabled);
  }

  async verifyInActiveDateIsDisplayedAndDisabled(): Promise<void> {
    // boolean displayed = uIMapScheduling.rotationCodeEntry.uIInactiveDateEdit.isDisplayed();
    // String enabled = uIMapScheduling.rotationCodeEntry.uIInactiveDateEdit.getAttribute("readonly");
    // verify.ExpectedValueIsTrue(displayed&&Boolean.valueOf(enabled));
  }

  async verifyOnDutyIsDisplayedAndDisabled(): Promise<void> {
    // boolean displayed = uIMapScheduling.rotationCodeEntry.uIOnDutyRadioCheckBox.isDisplayed();
    // boolean enabled = uIMapScheduling.rotationCodeEntry.uIOnDutyRadioCheckBox.isEnabled();
    // verify.ExpectedValueIsTrue(displayed&&enabled);
  }

  async verifyOffDutyIsDisplayedAndDisabled(): Promise<void> {
    // boolean displayed = uIMapScheduling.rotationCodeEntry.uIOffDutyRadioCheckBox.isDisplayed();
    // boolean enabled = uIMapScheduling.rotationCodeEntry.uIOffDutyRadioCheckBox.isEnabled();
    // verify.ExpectedValueIsTrue(displayed&&enabled);
  }

  async verifyAtColumnName(JsonkeyIndex: number): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridHeaderTableRow(uIMapScheduling.rotationCodeEntry.uIRotationCodeResultGrid).getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSchedulingModuleValue("ColumnName" + JsonkeyIndex)));
  }

  async verifySpecialCharactersAllowingInRotationCodeField(): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uIRotationCodeEdit.clear();
    // String specialChars = BaseData.getPersonnelModuleValue("specialChars");
    // for (char ch : specialChars.toCharArray()) {
    // uIMapScheduling.rotationCodeEntry.uIRotationCodeEdit.clear();
    // uIMapScheduling.rotationCodeEntry.uIRotationCodeEdit.sendKeys(String.valueOf(ch));
    // String text = uIMapScheduling.rotationCodeEntry.uIRotationCodeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(String.valueOf(ch), text);
    // System.out.println("Entering: " + ch);
  }

  async verifySpecialCharactersAllowingInDescriptionField(): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uIDescriptionEdit.clear();
    // String specialChars = BaseData.getPersonnelModuleValue("specialChars");
    // for (char ch : specialChars.toCharArray()) {
    // uIMapScheduling.rotationCodeEntry.uIDescriptionEdit.clear();
    // uIMapScheduling.rotationCodeEntry.uIDescriptionEdit.sendKeys(String.valueOf(ch));
    // String text = uIMapScheduling.rotationCodeEntry.uIDescriptionEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(String.valueOf(ch), text);
    // System.out.println("Entering: " + ch);
  }

  async verifySpecialCharactersAllowingInNotesField(): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uINotesEdit.clear();
    // String specialChars = BaseData.getPersonnelModuleValue("specialChars");
    // for (char ch : specialChars.toCharArray()) {
    // uIMapScheduling.rotationCodeEntry.uINotesEdit.clear();
    // uIMapScheduling.rotationCodeEntry.uINotesEdit.sendKeys(String.valueOf(ch));
    // String text = uIMapScheduling.rotationCodeEntry.uINotesEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(String.valueOf(ch), text);
    // System.out.println("Entering: " + ch);
  }

  async verifySpecialCharactersAndAlphabetsNotAllowingInDayField(): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uIDaysNoEdit.clear();
    // String specialChars = BaseData.getPersonnelModuleValue("specialCharsAndAlpha");
    // for (char ch : specialChars.toCharArray()) {
    // uIMapScheduling.rotationCodeEntry.uIDaysNoEdit.clear();
    // uIMapScheduling.rotationCodeEntry.uIDaysNoEdit.sendKeys(String.valueOf(ch));
    // String text = uIMapScheduling.rotationCodeEntry.uIDaysNoEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(text.isBlank());
    // System.out.println("Entering: " + ch);
  }

  async verifySpecialCharactersAndAlphabetsNotAllowingInScheduleMinField(): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uIScheduleMinEdit.clear();
    // String specialChars = BaseData.getPersonnelModuleValue("specialCharsAndAlpha");
    // for (char ch : specialChars.toCharArray()) {
    // uIMapScheduling.rotationCodeEntry.uIScheduleMinEdit.clear();
    // uIMapScheduling.rotationCodeEntry.uIScheduleMinEdit.sendKeys(String.valueOf(ch));
    // String text = uIMapScheduling.rotationCodeEntry.uIScheduleMinEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(text.isBlank());
    // System.out.println("Entering: " + ch);
  }

  async verifyInactiveDateIsBlank(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapScheduling.rotationCodeEntry.uIInactiveDateEdit.getAttribute("value").isBlank());
  }

  async verifyAtNotesLength(): Promise<void> {
    // String maxlength = uIMapScheduling.rotationCodeEntry.uINotesEdit.getAttribute("onkeyup");
    // verify.ExpectedValueIsTrue(maxlength.contains(BaseData.getSchedulingModuleValue("NotesLength")));
    // verify.ExpectedValueIsTrue(maxlength.contains(String.valueOf(uIMapScheduling.rotationCodeEntry.uINotesEdit.getAttribute("value").length())));
  }

  async verifyAtDescriptionLength(): Promise<void> {
    // String maxlength = uIMapScheduling.rotationCodeEntry.uIDescriptionEdit.getAttribute("maxlength");
    // verify.ExpectedPropertyValueIsEqual(maxlength, BaseData.getSchedulingModuleValue("DescriptionLength"));
    // verify.ExpectedPropertyValueIsEqual(maxlength, String.valueOf(uIMapScheduling.rotationCodeEntry.uIDescriptionEdit.getAttribute("value").length()));
  }

  async verifyAtDayNoLength(): Promise<void> {
    // String maxlength = uIMapScheduling.rotationCodeEntry.uIDaysNoEdit.getAttribute("maxlength");
    // verify.ExpectedPropertyValueIsEqual(maxlength, BaseData.getSchedulingModuleValue("DaysNoLength"));
    // verify.ExpectedPropertyValueIsEqual(maxlength, String.valueOf(uIMapScheduling.rotationCodeEntry.uIDaysNoEdit.getAttribute("value").length()));
  }

  async verifyAtRotationCodeLength(): Promise<void> {
    // String maxlength = uIMapScheduling.rotationCodeEntry.uIRotationCodeEdit.getAttribute("maxlength");
    // verify.ExpectedPropertyValueIsEqual(maxlength, BaseData.getSchedulingModuleValue("RotationCodeLength"));
    // verify.ExpectedPropertyValueIsEqual(maxlength, String.valueOf(uIMapScheduling.rotationCodeEntry.uIRotationCodeEdit.getAttribute("value").length()));
  }

  async verifyAtReasonCodeByTour(JsonKeyIndex: number): Promise<void> {
    // String ReasonCode = objectIdentification.manualIdentify.getGridCell(uIMapScheduling.rotationCodeEntry.uIRotationCodeResultGrid, BaseData.getSchedulingModuleValue("Tour"+JsonKeyIndex), "Reason Code").getText();
    // verify.ExpectedPropertyValueIsEqual(ReasonCode, BaseData.getSchedulingModuleValue("ReasonCode"+JsonKeyIndex));
  }

  async verifyAtTimeFromByTour(JsonKeyIndex: number): Promise<void> {
    // String ReasonCode = objectIdentification.manualIdentify.getGridCell(uIMapScheduling.rotationCodeEntry.uIRotationCodeResultGrid, BaseData.getSchedulingModuleValue("Tour"+JsonKeyIndex), "Time From").getText();
    // verify.ExpectedPropertyValueIsEqual(ReasonCode, BaseData.getSchedulingModuleValue("TimeFrom"+JsonKeyIndex));
  }

  async verifyAtTimeToByTour(JsonKeyIndex: number): Promise<void> {
    // String ReasonCode = objectIdentification.manualIdentify.getGridCell(uIMapScheduling.rotationCodeEntry.uIRotationCodeResultGrid, BaseData.getSchedulingModuleValue("Tour"+JsonKeyIndex), "Time To").getText();
    // verify.ExpectedPropertyValueIsEqual(ReasonCode, BaseData.getSchedulingModuleValue("TimeTo"+JsonKeyIndex));
  }

  async saveAndNew(): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uISaveAndNewButton.click();
    // popup.confirm.yes();
  }

  async saveAndClose(): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uISaveAndCloseIcon.click();
    // popup.confirm.yes();
  }

  async verifyRotationCodeIsBlank(): Promise<void> {
    // boolean blank = uIMapScheduling.rotationCodeEntry.uIRotationCodeEdit.getAttribute("value").isBlank();
    // verify.ExpectedValueIsTrue(blank);
  }

  async verifyDescriptionIsBlank(): Promise<void> {
    // boolean blank = uIMapScheduling.rotationCodeEntry.uIDescriptionEdit.getAttribute("value").isBlank();
    // verify.ExpectedValueIsTrue(blank);
  }

  async verifyAtScheduleMin(JsonkeyIndex: number): Promise<void> {
    // String ScheduleMin = uIMapScheduling.rotationCodeEntry.uIScheduleMinEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(ScheduleMin, BaseData.getSchedulingModuleValue("ScheduleMin"+JsonkeyIndex));
  }

  async verifyNotesIsBlank(): Promise<void> {
    // boolean blank = uIMapScheduling.rotationCodeEntry.uINotesEdit.getAttribute("value").isBlank();
    // verify.ExpectedValueIsTrue(blank);
  }

  async verifyAtDay(JsonkeyIndex: number): Promise<void> {
    // String Day = uIMapScheduling.rotationCodeEntry.uIDaysNoEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(Day, BaseData.getSchedulingModuleValue("DayNo"+JsonkeyIndex));
  }

  async verifyAtTour(JsonKeyIndex: number): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapScheduling.rotationCodeEntry.uITourComboBox);
    // verify.ExpectedPropertyValueIsEqual(dropDownSelectedItem, BaseData.getSchedulingModuleValue("Tour"+JsonKeyIndex));
  }

  async verifyOnDutyIsNotSelected(): Promise<void> {
    // boolean blank = uIMapScheduling.rotationCodeEntry.uIOnDutyRadioCheckBox.isSelected();
    // verify.ExpectedValueIsFalse(blank);
  }

  async verifyOffDutyIsNotSelected(): Promise<void> {
    // boolean blank = uIMapScheduling.rotationCodeEntry.uIOffDutyRadioCheckBox.isSelected();
    // verify.ExpectedValueIsFalse(blank);
  }

  async verifyInActiveCheckBoxIsNotSelected(): Promise<void> {
    // boolean blank = uIMapScheduling.rotationCodeEntry.uIInactiveCheckBox.isSelected();
    // verify.ExpectedValueIsFalse(blank);
  }

  async verifyAtGridRowCount(): Promise<void> {
    // int gridTableRowsCount = objectIdentification.manualIdentify.getGridTableRowsCount(uIMapScheduling.rotationCodeEntry.uIRotationCodeResultGrid);
    // verify.ExpectedIntergerValueIsEqualToActual(gridTableRowsCount, Integer.valueOf(BaseData.getSchedulingModuleValue("RowCount")));
  }

  async enterAtRotationCode(JsonKeyIndex: number): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uIRotationCodeEdit.clear();
    // uIMapScheduling.rotationCodeEntry.uIRotationCodeEdit
    // .sendKeys(BaseData.getSchedulingModuleValue("RotationCode"+JsonKeyIndex));
  }

  async enterAtDescription(JsonKeyIndex: number): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uIDescriptionEdit.clear();
    // uIMapScheduling.rotationCodeEntry.uIDescriptionEdit
    // .sendKeys(BaseData.getSchedulingModuleValue("Description"+JsonKeyIndex));
  }

  async enterAtDayNo(JsonKeyIndex: number): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uIDaysNoEdit.clear();
    // uIMapScheduling.rotationCodeEntry.uIDaysNoEdit.sendKeys(BaseData.getSchedulingModuleValue("DayNo"+JsonKeyIndex));
  }

  async enterAtScheduleMin(JsonkeyIndex: number): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uIScheduleMinEdit.clear();
    // uIMapScheduling.rotationCodeEntry.uIScheduleMinEdit.sendKeys(BaseData.getSchedulingModuleValue("ScheduleMin"+JsonkeyIndex));
  }

  async enterDaysInRotation(): Promise<void> {
    // uIMapScheduling.rotationCodeEntry.uIDaysNoEdit.sendKeys(BaseData.getSchedulingModuleValue("DaysInRotation"));
    // uIMapScheduling.rotationCodeEntry.uIDaysNoEdit.sendKeys(Keys.TAB);
  }

  async clickRowByDayAndSelectTourCodeInContextMenu(JsonKeyIndex: number): Promise<void> {
    // String JsonValue = BaseData.getSchedulingModuleValue("Day"+JsonKeyIndex);
    // objectIdentification.manualIdentify.selectGridRowByCellInnerTextWithoutContains(uIMapScheduling.rotationCodeEntry.uIRotationCodeResultGrid,
    // JsonValue);
    // WebElement HighlightedRow = uIMapScheduling.rotationCodeEntry.uIRotationCodeResultGrid.findElement(By.xpath("//tr[contains(@class,'state-selected')]//td[text()='"+JsonValue+"']"));
    // Playback.popupThreadWait();
    // Playback.actionDriver.contextClick(HighlightedRow).build().perform();
    // WebElement element = Playback.driver.findElement(By.xpath("//div/ul//li//span[contains(text(),'Pnx  - Phoenix (08:42 - 22:42)')]"));
    // Playback.popupThreadWait();
    // //Playback.actionDriver.doubleClick(findElement).build().perform();
    // JavascriptExecutor js = (JavascriptExecutor) Playback.driver;
    // //			js.executeScript("arguments[0].click();", element);
    // js.executeScript(
    // "arguments[0].dispatchEvent(new MouseEvent('mousedown', {bubbles:true}));" +
    // "arguments[0].dispatchEvent(new MouseEvent('mouseup', {bubbles:true}));" +
    // "arguments[0].dispatchEvent(new MouseEvent('click', {bubbles:true}));",
    // element
    // );
    // //Playback.popupThreadWait();
  }

}

export class GroupEntryPage {
  readonly page: Page;
  readonly groupCodeEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly startDateEdit: Locator;
  readonly inactiveCheckBox: Locator;
  readonly inactiveDateEdit: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly shiftComboBox: Locator;
  readonly shiftTypeComboBox: Locator;
  readonly scheduleColorComboBox: Locator;
  readonly rotationComboBox: Locator;
  readonly notesEdit: Locator;
  readonly calenderDisplayLabelEdit: Locator;
  readonly deleteIcon: Locator;
  readonly saveAndAddNewIcon: Locator;
  readonly printIcon: Locator;
  readonly refreshIcon: Locator;
  readonly displayLabelScheduleViewEdit: Locator;
  readonly displaySorSeqEdit: Locator;
  readonly whiteRadioButton: Locator;
  readonly scheduleMinEdit: Locator;
  readonly defualtTotalHoursWorkedEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.groupCodeEdit = page.locator('#txtWorkgroupCode');
    this.descriptionEdit = page.locator('#txtDescription');
    this.startDateEdit = page.locator('#dtStart_KPIDttmCtrl');
    this.inactiveCheckBox = page.locator('#chkInactive');
    this.inactiveDateEdit = page.locator('#txtInactive');
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']//b");
    this.shiftComboBox = page.locator('#cddShift_DropDown');
    this.shiftTypeComboBox = page.locator('#cddShiftType_DropDown');
    this.scheduleColorComboBox = page.locator('#cddScheduleColor_DropDown');
    this.rotationComboBox = page.locator('#cddRotation');
    this.notesEdit = page.locator('#txtNotes');
    this.calenderDisplayLabelEdit = page.locator('#txtCalDisplay');
    this.deleteIcon = page.locator('#cmdDelete');
    this.saveAndAddNewIcon = page.locator('#cmdSaveNAddNew');
    this.printIcon = page.locator('#cmdPrint');
    this.refreshIcon = page.locator('#cmdRefresh');
    this.displayLabelScheduleViewEdit = page.locator('#txtSchDisplay');
    this.displaySorSeqEdit = page.locator('#txtDispseq');
    this.whiteRadioButton = page.locator('#chkWhite');
    this.scheduleMinEdit = page.locator('#txtScheduleMin');
    this.defualtTotalHoursWorkedEdit = page.locator('#dttmHours');
  }

  async verifyGroupCodeAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(3032) Enter Group Code.");
    // Playback.controlReadyThreadWait();
  }

  async enterAtGroupCode(JsonKeyIndex: number): Promise<void> {
    // if(JsonKeyIndex==0) {
    // uIMapScheduling.groupEntry.uIGroupCodeEdit.clear();
    // uIMapScheduling.groupEntry.uIGroupCodeEdit.sendKeys(BaseData.getSchedulingModuleValue("GroupCode"));
    // else {
    // uIMapScheduling.groupEntry.uIGroupCodeEdit.clear();
    // uIMapScheduling.groupEntry.uIGroupCodeEdit.sendKeys(BaseData.getSchedulingModuleValue("GroupCode"+JsonKeyIndex));
  }

  async enterAtDescription(JsonKeyIndex: number): Promise<void> {
    // if(JsonKeyIndex==0) {
    // uIMapScheduling.groupEntry.uIDescriptionEdit.clear();
    // uIMapScheduling.groupEntry.uIDescriptionEdit.sendKeys(BaseData.getSchedulingModuleValue("Description"));
    // else {
    // uIMapScheduling.groupEntry.uIDescriptionEdit.clear();
    // uIMapScheduling.groupEntry.uIDescriptionEdit.sendKeys(BaseData.getSchedulingModuleValue("Description"+JsonKeyIndex));
  }

  async clickInactiveCheckbox(): Promise<void> {
    // uIMapScheduling.groupEntry.uIInactiveCheckBox.click();
  }

  async verifyInactiveDateAsCurrentDate(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapScheduling.groupEntry.uIInactiveDateEdit.getAttribute("value").contains(Randomized.getCurrentDate()
    // ));
  }

  async selectAtShift(JsonKeyIndex: number): Promise<void> {
    // if(JsonKeyIndex==0) {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapScheduling.groupEntry.uIShiftComboBox,
    // BaseData.getSchedulingModuleValue("Shift"));
    // else {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapScheduling.groupEntry.uIShiftComboBox,
    // BaseData.getSchedulingModuleValue("Shift"+JsonKeyIndex));
  }

  async selectAtRotationCode(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapScheduling.groupEntry.uIRotationComboBox,
    // BaseData.getSchedulingModuleValue("RotationCode"));
  }

  async tabStartDate(): Promise<void> {
    // uIMapScheduling.groupEntry.uIStartDateEdit.sendKeys(Keys.TAB);
  }

  async selectScheduleColor(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapScheduling.groupEntry.uIScheduleColorComboBox);
  }

  async enterNotes(): Promise<void> {
    // uIMapScheduling.groupEntry.uINotesEdit.sendKeys(Randomized.randomString(50));
  }

  async verifyadditionalSuccessfullMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapScheduling.groupEntry.uIBottomLeftSideStatusBar.getText());
  }

  async enterAtCalenderDisplayLabel(JsonKeyIndex: number): Promise<void> {
    // if(JsonKeyIndex==0) {
    // uIMapScheduling.groupEntry.uICalenderDisplayLabelEdit
    // .sendKeys(BaseData.getSchedulingModuleValue("CalenderDisplayLabel"));
    // else {
    // uIMapScheduling.groupEntry.uICalenderDisplayLabelEdit
    // .sendKeys(BaseData.getSchedulingModuleValue("CalenderDisplayLabel"+JsonKeyIndex));
  }

  async clickSave(): Promise<void> {
    // uIMapScheduling.groupEntry.uISaveButton.click();
  }

  async saveScreen(): Promise<void> {
    // uIMapScheduling.groupEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async closeScreen(): Promise<void> {
    // uIMapScheduling.groupEntry.driver.close();
  }

  async verifyAtShift(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("Shift"),
    // objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapScheduling.groupEntry.uIShiftComboBox));
  }

  async verifyAtShiftType(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("ShiftType"),
    // objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapScheduling.groupEntry.uIShiftTypeComboBox));
  }

  async verifyUpdateSuccessfullMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1003 - Update Successful",
    // uIMapScheduling.groupEntry.uIBottomLeftSideStatusBar.getText());
  }

  async enterGroupCode(): Promise<void> {
    // uIMapScheduling.groupEntry.uIGroupCodeEdit.sendKeys(Randomized.enterRandomNumbers(3));
  }

  async enterDescription(): Promise<void> {
    // uIMapScheduling.groupEntry.uIDescriptionEdit.sendKeys(Randomized.randomNameGenerate());
  }

  async selectShift(): Promise<void> {
    // objectIdentification.randomIdentify.selectDropDownOption(uIMapScheduling.groupEntry.uIShiftComboBox);
  }

  async selectRotationCode(): Promise<void> {
    // objectIdentification.randomIdentify.selectDropDownOption(uIMapScheduling.groupEntry.uIRotationComboBox);
  }

  async enterCalenderDisplayLabel(): Promise<void> {
    // uIMapScheduling.groupEntry.uICalenderDisplayLabelEdit.sendKeys(Randomized.randomString(4));
  }

  async selectShiftType(): Promise<void> {
    // objectIdentification.randomIdentify.selectDropDownOption(uIMapScheduling.groupEntry.uIShiftTypeComboBox);
  }

  async verifyErrorAcknowledgePopupNotAvailable(): Promise<void> {
    // boolean Displayed = objectIdentification.windowHandle.windowExist("Acknowledge");
    // Playback.pageLoadThreadWait();
    // if (Displayed == true) {
    // String Message = uIMapPopup.acknowledgeWindow.uIErrorInfoTextEdit.getText();
    // System.out.println(Message);
    // verify.ExpectedValueIsFalse(Message.contains("Validation") || Message.contains("Error"));
  }

  async verifyCalenderDisplayLabelLength(): Promise<void> {
    // String caldisplay = uIMapScheduling.groupEntry.uICalenderDisplayLabelEdit.getDomProperty("value");
    // String maxlength = uIMapScheduling.groupEntry.uICalenderDisplayLabelEdit.getAttribute("maxlength");
    // verify.ExpectedIntergerValueIsEqualToActual(6, caldisplay.length());
    // verify.ExpectedIntergerValueIsEqualToActual(6, Integer.parseInt(maxlength));
  }

  async verifyDeleteIconIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapScheduling.groupEntry.uIDeleteIcon.isEnabled());
  }

  async verifyTheSaveIconIsDisplayedAndEnabled(): Promise<void> {
    // WebElement saveIcon = new WebDriverWait(Playback.driver, Duration.ofSeconds(10))
    // .until(ExpectedConditions.elementToBeClickable(uIMapScheduling.groupEntry.uISaveButton));
    // verify.ExpectedValueIsTrue(saveIcon.isDisplayed(),"The Icon is Not Displayed");
    // verify.ExpectedValueIsTrue(saveIcon.isEnabled(),"The Icon is Not Enabled");
  }

  async verifyTheSaveAndCloseIconIsDisplayedAndEnabled(): Promise<void> {
    // WebElement SaveAndCloseButton = new WebDriverWait(Playback.driver, Duration.ofSeconds(10))
    // .until(ExpectedConditions.elementToBeClickable(uIMapScheduling.groupEntry.uISaveAndCloseButton));
    // verify.ExpectedValueIsTrue(SaveAndCloseButton.isDisplayed(),"The Icon is Not Displayed");
    // verify.ExpectedValueIsTrue(SaveAndCloseButton.isEnabled(),"The Icon is Not Enabled");
  }

  async verifyTheSaveAndAddNewIconIsDisplayedAndEnabled(): Promise<void> {
    // WebElement SaveAndAddNewIcon = new WebDriverWait(Playback.driver, Duration.ofSeconds(10))
    // .until(ExpectedConditions.elementToBeClickable(uIMapScheduling.groupEntry.uISaveAndAddNewIcon));
    // verify.ExpectedValueIsTrue(SaveAndAddNewIcon.isDisplayed(),"The Icon is Not Displayed");
    // verify.ExpectedValueIsTrue(SaveAndAddNewIcon.isEnabled(),"The Icon is Not Enabled");
  }

  async verifyThePrintIconIsDisplayedAndEnabled(): Promise<void> {
    // WebElement PrintIcon = new WebDriverWait(Playback.driver, Duration.ofSeconds(10))
    // .until(ExpectedConditions.elementToBeClickable(uIMapScheduling.groupEntry.uIPrintIcon));
    // verify.ExpectedValueIsTrue(PrintIcon.isDisplayed(),"The Icon is Not Displayed");
    // verify.ExpectedValueIsTrue(PrintIcon.isEnabled(),"The Icon is Not Enabled");
  }

  async verifyTheRefreshIconIsDisplayedAndEnabled(): Promise<void> {
    // WebElement RefreshIcon = new WebDriverWait(Playback.driver, Duration.ofSeconds(10))
    // .until(ExpectedConditions.elementToBeClickable(uIMapScheduling.groupEntry.uIRefreshIcon));
    // verify.ExpectedValueIsTrue(RefreshIcon.isDisplayed(),"The Icon is Not Displayed");
    // verify.ExpectedValueIsTrue(RefreshIcon.isEnabled(),"The Icon is Not Enabled");
  }

  async verifyAtGroupLength(): Promise<void> {
    // String maxlength = uIMapScheduling.groupEntry.uIGroupCodeEdit.getAttribute("maxlength");
    // int length = uIMapScheduling.groupEntry.uIGroupCodeEdit.getAttribute("value").length();
    // verify.ExpectedIntergerValueIsEqualToActual(length, Integer.parseInt(maxlength));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("GroupLengthValue"), maxlength);
  }

  async enterRandomDescription(StringLength: number): Promise<void> {
    // uIMapScheduling.groupEntry.uIDescriptionEdit.sendKeys(Randomized.randomString(StringLength));
  }

  async verifyAtDescriptionLength(): Promise<void> {
    // String maxlength = uIMapScheduling.groupEntry.uIDescriptionEdit.getAttribute("maxlength");
    // int value = uIMapScheduling.groupEntry.uIDescriptionEdit.getAttribute("value").length();
    // verify.ExpectedIntergerValueIsEqualToActual(value, Integer.parseInt(maxlength));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("DescriptionLength"), maxlength);
  }

  async verifyAtDescription(JsonKeyIndex: number): Promise<void> {
    // uIMapScheduling.groupEntry.uIGroupCodeEdit.sendKeys(BaseData.getSchedulingModuleValue("Description"+JsonKeyIndex));
  }

  async verifySpecialCharactersAllowingInGroupField(): Promise<void> {
    // uIMapScheduling.groupEntry.uIGroupCodeEdit.clear();
    // String specialChars = BaseData.getPersonnelModuleValue("specialChars");
    // for (char ch : specialChars.toCharArray()) {
    // uIMapScheduling.groupEntry.uIGroupCodeEdit.clear();
    // uIMapScheduling.groupEntry.uIGroupCodeEdit.sendKeys(String.valueOf(ch));
    // String text = uIMapScheduling.groupEntry.uIGroupCodeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(String.valueOf(ch), text);
    // System.out.println("Entering: " + ch);
  }

  async verifyAtGroupCode(JsonKeyIndex: number): Promise<void> {
    // String text = uIMapScheduling.groupEntry.uIGroupCodeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("GroupCode"+JsonKeyIndex), text);
  }

  async verifySpecialCharactersAllowingInDescriptionField(): Promise<void> {
    // uIMapScheduling.groupEntry.uIDescriptionEdit.clear();
    // String specialChars = BaseData.getPersonnelModuleValue("specialChars");
    // for (char ch : specialChars.toCharArray()) {
    // uIMapScheduling.groupEntry.uIDescriptionEdit.clear();
    // uIMapScheduling.groupEntry.uIDescriptionEdit.sendKeys(String.valueOf(ch));
    // String text = uIMapScheduling.groupEntry.uIDescriptionEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(String.valueOf(ch), text);
    // System.out.println("Entering: " + ch);
  }

  async verifySpecialCharactersNotAllowingInCalenderViewField(): Promise<void> {
    // uIMapScheduling.groupEntry.uICalenderDisplayLabelEdit.clear();
    // String specialChars = BaseData.getPersonnelModuleValue("CalenderViewspecialChars");
    // for (char ch : specialChars.toCharArray()) {
    // uIMapScheduling.groupEntry.uICalenderDisplayLabelEdit.clear();
    // uIMapScheduling.groupEntry.uICalenderDisplayLabelEdit.sendKeys(String.valueOf(ch));
    // String text = uIMapScheduling.groupEntry.uICalenderDisplayLabelEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(text.isBlank());
    // System.out.println("Entering: " + ch);
  }

  async verifyAtDisplayLabelForScheduleViewFieldLength(): Promise<void> {
    // String maxlength = uIMapScheduling.groupEntry.uIDisplayLabelScheduleViewEdit.getAttribute("maxlength");
    // int value = uIMapScheduling.groupEntry.uIDisplayLabelScheduleViewEdit.getAttribute("value").length();
    // verify.ExpectedIntergerValueIsEqualToActual(value, Integer.parseInt(maxlength));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("ScheduleViewFieldLength"), maxlength);
  }

  async verifySpecialCharactersAllowingInScheduleViewField(): Promise<void> {
    // uIMapScheduling.groupEntry.uIDisplayLabelScheduleViewEdit.clear();
    // String specialChars = BaseData.getPersonnelModuleValue("ScheduleViewspecialChars");
    // for (char ch : specialChars.toCharArray()) {
    // uIMapScheduling.groupEntry.uIDisplayLabelScheduleViewEdit.clear();
    // uIMapScheduling.groupEntry.uIDisplayLabelScheduleViewEdit.sendKeys(String.valueOf(ch));
    // String text = uIMapScheduling.groupEntry.uIDisplayLabelScheduleViewEdit.getAttribute("value");
    // System.out.println("ScheduleViewspecialChars--Entering: " + ch);
    // verify.ExpectedPropertyValueIsEqual(String.valueOf(ch), text);
  }

  async enterAtDisplayeLabelForScheduleView(JsonKeyIndex: number): Promise<void> {
    // uIMapScheduling.groupEntry.uIDisplayLabelScheduleViewEdit.clear();
    // uIMapScheduling.groupEntry.uIDisplayLabelScheduleViewEdit.sendKeys(BaseData.getSchedulingModuleValue("ScheduleView"+JsonKeyIndex));
  }

  async enterAtDisplaySortSeq(JsonKeyIndex: number): Promise<void> {
    // uIMapScheduling.groupEntry.uIDisplaySorSeqEdit.clear();
    // uIMapScheduling.groupEntry.uIDisplaySorSeqEdit.sendKeys(BaseData.getSchedulingModuleValue("DisplaySorSeq"+JsonKeyIndex));
  }

  async verifyAtDisplaySortSeqFieldLength(): Promise<void> {
    // String maxlength = uIMapScheduling.groupEntry.uIDisplaySorSeqEdit.getAttribute("maxlength");
    // int value = uIMapScheduling.groupEntry.uIDisplaySorSeqEdit.getAttribute("value").length();
    // verify.ExpectedIntergerValueIsEqualToActual(value, Integer.parseInt(maxlength));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("DisplaySortLength"), maxlength);
  }

  async verifySpecialCharactersNotAllowingInDisplaySortSeqField(): Promise<void> {
    // uIMapScheduling.groupEntry.uIDisplaySorSeqEdit.clear();
    // String specialChars = BaseData.getPersonnelModuleValue("DisplaySortSeqspecialChars");
    // for (char ch : specialChars.toCharArray()) {
    // uIMapScheduling.groupEntry.uIDisplaySorSeqEdit.clear();
    // uIMapScheduling.groupEntry.uIDisplaySorSeqEdit.sendKeys(String.valueOf(ch));
    // String text = uIMapScheduling.groupEntry.uIDisplaySorSeqEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(text.isBlank());
    // System.out.println("Entering: " + ch);
  }

  async selectAtBackGroundColor(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapScheduling.groupEntry.uIScheduleColorComboBox, BaseData.getSchedulingModuleValue("BackGroundColor"));
  }

  async clickWhiteRadioButton(): Promise<void> {
    // uIMapScheduling.groupEntry.uIWhiteRadioButton.click();
  }

  async enterAtScheduleMin(JsonKeyIndex: number): Promise<void> {
    // uIMapScheduling.groupEntry.uIScheduleMinEdit.sendKeys(BaseData.getSchedulingModuleValue("ScheduleMin"+JsonKeyIndex));
  }

  async verifySpecialCharactersNotAllowingInScheduleMinField(): Promise<void> {
    // uIMapScheduling.groupEntry.uIScheduleMinEdit.clear();
    // String specialChars = BaseData.getPersonnelModuleValue("ScheduleMinspecialChars");
    // for (char ch : specialChars.toCharArray()) {
    // uIMapScheduling.groupEntry.uIScheduleMinEdit.clear();
    // uIMapScheduling.groupEntry.uIScheduleMinEdit.sendKeys(String.valueOf(ch));
    // String text = uIMapScheduling.groupEntry.uIScheduleMinEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(text.isBlank());
    // System.out.println("Entering: " + ch);
  }

  async verifyAtScheduleMinFieldLength(): Promise<void> {
    // String maxlength = uIMapScheduling.groupEntry.uIScheduleMinEdit.getAttribute("maxlength");
    // int value = uIMapScheduling.groupEntry.uIScheduleMinEdit.getAttribute("value").length();
    // verify.ExpectedIntergerValueIsEqualToActual(value, Integer.parseInt(maxlength));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("ScheduleMinFieldLength"), maxlength);
  }

  async enterAtDefaultTotalHoursWorked(JsonkeyIndex: number): Promise<void> {
    // uIMapScheduling.groupEntry.uIDefualtTotalHoursWorkedEdit.sendKeys(BaseData.getSchedulingModuleValue("DefualtTotalHoursWorked"+JsonkeyIndex));
  }

  async verifyAtDefualtTotalHoursWorkedFieldLength(): Promise<void> {
    // String maxlength = uIMapScheduling.groupEntry.uIDefualtTotalHoursWorkedEdit.getAttribute("maxlength");
    // int value = uIMapScheduling.groupEntry.uIDefualtTotalHoursWorkedEdit.getAttribute("value").length();
    // verify.ExpectedIntergerValueIsEqualToActual(value, Integer.parseInt(maxlength));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("DefualtTotalHoursWorkedFieldLength"), maxlength);
  }

  async verifySpecialCharactersNotAllowingInDefualtTotalHoursWorkedField(): Promise<void> {
    // uIMapScheduling.groupEntry.uIDefualtTotalHoursWorkedEdit.clear();
    // String specialChars = BaseData.getPersonnelModuleValue("DefualtTotalHoursWorkedspecialChars");
    // for (char ch : specialChars.toCharArray()) {
    // uIMapScheduling.groupEntry.uIDefualtTotalHoursWorkedEdit.clear();
    // uIMapScheduling.groupEntry.uIDefualtTotalHoursWorkedEdit.sendKeys(String.valueOf(ch));
    // String text = uIMapScheduling.groupEntry.uIDefualtTotalHoursWorkedEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(text.isBlank());
    // System.out.println("Entering: " + ch);
  }

  async enterRandomNotes(): Promise<void> {
    // uIMapScheduling.groupEntry.uINotesEdit.sendKeys(Randomized.randomString(260));
  }

  async verifyAtNotesFieldLength(): Promise<void> {
    // String maxlength = uIMapScheduling.groupEntry.uINotesEdit.getAttribute("onkeydown");
    // int value = uIMapScheduling.groupEntry.uINotesEdit.getAttribute("value").length();
    // verify.ExpectedValueIsTrue(maxlength.contains(String.valueOf(value)));
    // verify.ExpectedValueIsTrue(maxlength.contains(BaseData.getSchedulingModuleValue("NotesFieldLength")));
  }

  async verifySpecialCharactersAllowingInNotesField(): Promise<void> {
    // uIMapScheduling.groupEntry.uINotesEdit.clear();
    // String specialChars = BaseData.getPersonnelModuleValue("specialChars");
    // for (char ch : specialChars.toCharArray()) {
    // uIMapScheduling.groupEntry.uINotesEdit.clear();
    // uIMapScheduling.groupEntry.uINotesEdit.sendKeys(String.valueOf(ch));
    // String text = uIMapScheduling.groupEntry.uINotesEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(String.valueOf(ch), text);
    // System.out.println("Entering: " + ch);
  }

  async verifyInactiveDateFieldIsDisabled(): Promise<void> {
    // String attribute = uIMapScheduling.groupEntry.uIInactiveDateEdit.getAttribute("readonly");
    // verify.ExpectedValueIsTrue(Boolean.valueOf(attribute));
  }

  async saveAndClose(): Promise<void> {
    // uIMapScheduling.groupEntry.uISaveAndCloseButton.click();
    // popup.confirm.yes();
  }

}

export class TimeCategoryPage {
  readonly page: Page;
  readonly expandAllCheckBox: Locator;
  readonly includeInactiveCheckBox: Locator;
  readonly addTimeCategoryButton: Locator;
  readonly addTimeTypeButton: Locator;
  readonly timeCategoryResultGrid: Locator;
  readonly refreshIconButton: Locator;
  readonly timeCategoryControlResultGrid: Locator;
  readonly printIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.expandAllCheckBox = page.locator('#chkExpandAll');
    this.includeInactiveCheckBox = page.locator('#chkIsActive');
    this.addTimeCategoryButton = page.locator('#cmdAddAcc');
    this.addTimeTypeButton = page.locator('#cmdAddReason');
    this.timeCategoryResultGrid = page.locator('#grdAccumulator');
    this.refreshIconButton = page.locator('#cmdSearch');
    this.timeCategoryControlResultGrid = page.locator('#grdAccumulator_ctl00');
    this.printIcon = page.locator('#cmdPrint');
  }

  async clickAddTimeCategoryButton(): Promise<void> {
    // uIMapScheduling.timeCategory.uIAddTimeCategoryButton.click();
    // Playback.controlReadyThreadWait();
  }

  async clickAddTimeTypeButton(): Promise<void> {
    // uIMapScheduling.timeCategory.uIAddTimeTypeButton.click();
    // Playback.controlReadyThreadWait();
  }

  async clickExpandAllCheckBox(): Promise<void> {
    // uIMapScheduling.timeCategory.uIExpandAllCheckBox.click();
    // Playback.controlReadyThreadWait();
  }

  async clickIncludeInactiveCheckBox(): Promise<void> {
    // uIMapScheduling.timeCategory.uIIncludeInactiveCheckBox.click();
    // Playback.threadWait();
    // Playback.threadWait(5000);
  }

  async clickAtTimeCategoryInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapScheduling.timeCategory.uITimeCategoryResultGrid,
    // BaseData.getSchedulingModuleValue("TimeCategory"));
    // Playback.controlReadyThreadWait();
  }

  async clickAtTimeTypeInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapScheduling.timeCategory.uITimeCategoryResultGrid,
    // BaseData.getSchedulingModuleValue("TimeType"));
    // Playback.controlReadyThreadWait();
  }

  async clickRefresh(): Promise<void> {
    // uIMapScheduling.timeCategory.uIRefreshIconButton.click();
    // Playback.controlReadyThreadWait();
  }

  async verifyAtTimeCategoryInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("TimeCategory"),
    // objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapScheduling.timeCategory.uITimeCategoryResultGrid,
    // BaseData.getSchedulingModuleValue("TimeCategory"))
    // .getText());
  }

  async clickAtTimeCategory1InGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapScheduling.timeCategory.uITimeCategoryResultGrid,
    // BaseData.getSchedulingModuleValue("TimeCategory1"));
    // Playback.controlReadyThreadWait();
  }

  async verifyAtTimeCategory1InactiveRowColor(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapScheduling.timeCategory.uITimeCategoryResultGrid,
    // BaseData.getSchedulingModuleValue("TimeCategory1"))
    // .getAttribute("class").contains("grdrowclrgray"));
  }

  async verifyAtTimeTypeInGrid(): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapScheduling.timeCategory.uITimeCategoryResultGrid,
    // BaseData.getSchedulingModuleValue("TimeType"))
    // .getText().contains(BaseData.getSchedulingModuleValue("TimeType")));
  }

  async clickAtTimeType1InGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapScheduling.timeCategory.uITimeCategoryResultGrid,
    // BaseData.getSchedulingModuleValue("TimeType1"));
    // Playback.controlReadyThreadWait();
  }

  async verifyAtTimeType1InactiveRowColor(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapScheduling.timeCategory.uITimeCategoryResultGrid,
    // BaseData.getSchedulingModuleValue("TimeType1"))
    // .getAttribute("class").contains("grdrowclrgray"));
  }

  async verifyAtTimeCategoryNotAvailableInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsNotEqual(BaseData.getSchedulingModuleValue("TimeCategory"),
    // objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapScheduling.timeCategory.uITimeCategoryResultGrid,
    // BaseData.getSchedulingModuleValue("TimeCategory"))
    // .getText());
  }

  async verifyExpandAllCheckBoxIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapScheduling.timeCategory.uIExpandAllCheckBox.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed, "Expand All is not Displayed --> ");
  }

  async verifyIncludeInactiveCheckboxIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapScheduling.timeCategory.uIIncludeInactiveCheckBox.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed, "Include Inactive is not Displayed --> ");
  }

  async verifyAddTimeCategoryButtonIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapScheduling.timeCategory.uIAddTimeCategoryButton.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed, "Add Time Category Button is not Displayed --> ");
  }

  async verifyAddTimeTypeButtonIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapScheduling.timeCategory.uIAddTimeTypeButton.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed, "Add Time Type Button is not Displayed --> ");
  }

  async verifyRefreshIconIsDispalyed(): Promise<void> {
    // boolean displayed = uIMapScheduling.timeCategory.uIRefreshIconButton.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed, "Refresh Icon is not Displayed --> ");
  }

  async verifyPrintIconIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapScheduling.timeCategory.uIPrintIcon.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed, "Print Icon is not Displayed --> ");
  }

  async verifyExpandAllCheckBoxIsSelected(): Promise<void> {
    // boolean displayed = uIMapScheduling.timeCategory.uIExpandAllCheckBox.isSelected();
    // verify.ExpectedValueIsTrue(displayed, "Expand All is not selected --> ");
  }

  async verifySubHeadersInGrid(): Promise<void> {
    // List<WebElement> elements = uIMapScheduling.timeCategory.uITimeCategoryResultGrid
    // .findElements(By.xpath(".//tr[@class='ig_HGridHeader igg_HGridHeader']"));
    // String columnValues = "Time Type Description Multiplication Factor Notes";
    // for (int i = 1; i < elements.size(); i++) {
    // objectIdentification.manualIdentify.scrollIntoView(elements.get(i));
    // String text = elements.get(i).getText();
    // verify.ExpectedPropertyValueIsEqual(columnValues, text);
  }

  async verifyInactiveRecordColorAsGreyByTimeTypeInGrid(): Promise<void> {
    // Playback.threadWait();
    // String cssValue = objectIdentification.manualIdentify
    // .getGridCell(uIMapScheduling.timeCategory.uITimeCategoryResultGrid,
    // BaseData.getSchedulingModuleValue("TimeType"))
    // .getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual("rgba(128, 128, 128, 1)", cssValue);
  }

  async verifyTimecategoryGridIsExpand(): Promise<void> {
    // boolean displayed = Playback.driver
    // .findElement(By.xpath("//td[@class='ighg_HGridExpansionColumn']//img[@alt='Collapse Row']"))
    // .isDisplayed();
    // verify.ExpectedValueIsTrue(displayed, "Grid is not Expanded --> ");
  }

  async verifyTimecategoryGridIsCollapsed(): Promise<void> {
    // boolean displayed = Playback.driver
    // .findElement(By.xpath("//td[@class='ighg_HGridExpansionColumn']//img[@alt='Expand Row']"))
    // .isDisplayed();
    // verify.ExpectedValueIsTrue(displayed, "Grid is not Collapsed --> ");
  }

  async verifyTimeCategoryGridIsNotEmpty(): Promise<void> {
    // int gridTableRowsCount = objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapScheduling.timeCategory.uITimeCategoryResultGrid);
    // verify.ExpectedValueIsTrue(gridTableRowsCount > 0, "Grid is Empty ---> ");
  }

  async doubleClickItemInGrid(i: number): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapScheduling.timeCategory.uITimeCategoryResultGrid,
    // BaseData.getSchedulingModuleValue("TimeCategory" + i));
    // Actions action = new Actions(Playback.driver);
    // action.doubleClick(gridCell).build().perform();
    // gridCell.sendKeys("Tour");
    // String text = gridCell.getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("TimeCategory" + i), text);
  }

  async verifySameWindowOpenedTwice(): Promise<void> {
    // objectIdentification.windowHandle.verifySameScreenOpenedTwice("Time Category Entry");
  }

  async selectRandomRow(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow(uIMapScheduling.timeCategory.uITimeCategoryResultGrid);;
  }

  async randomDoubleClickGridRowAndVerifyNotEditable(i: number): Promise<void> {
    // WebElement randomGridRow = uIMapScheduling.timeCategory.uITimeCategoryResultGrid
    // .findElement(By.xpath(".//td[text()='" + BaseData.getSchedulingModuleValue("TimeCategory" + i)
    // + "']//parent::tr//following-sibling::tr[@type='rowIsland'][1]"));
    // List<WebElement> rows = randomGridRow.findElements(By.xpath(".//div[contains(@id,'grdAccumulator')]//table[@role='grid']//tr[@role='row']"));
    // WebElement randomRow = rows.get(Randomized.getRandomNumber(rows.size()));
    // objectIdentification.manualIdentify.scrollIntoView(randomRow);
    // List<WebElement> cells = randomRow.findElements(By.xpath(".//td[@type='cell']"));
    // for (WebElement webElement : cells) {
    // Playback.actionDriver.doubleClick(webElement).build().perform();
    // try {
    // Playback.pageLoadThreadWait();
    // switchToTimeTypeEntryScreen();
    // timeTypeEntry.close();
    // switchToTimeTypeEntryScreen();
    // timeTypeEntry.close();
    // switchToTimeCategory();
    // } catch (Exception e) {
    // System.out.println(e);
    // try {
    // switchToTimeCategory();
    // webElement.sendKeys("12345");
    // String text = webElement.getText();
    // verify.ExpectedValueIsFalse(text.contains("12345"));
    // } catch (ElementNotInteractableException e) {
    // System.out.println("Element is non Editable");
  }

}

export class TimeCategoryEntryPage {
  readonly page: Page;
  readonly timeCategoryCodeEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly notesEdit: Locator;
  readonly inactiveCheckBox: Locator;
  readonly inactiveDateEdit: Locator;
  readonly scheduleColorComboBox: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly warningMessageTextView: Locator;
  readonly yesButton: Locator;
  readonly noButton: Locator;
  readonly jurisDropdown: Locator;
  readonly deleteIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.timeCategoryCodeEdit = page.locator('#txtAccumulator');
    this.descriptionEdit = page.locator('#txtDescription');
    this.notesEdit = page.locator('#txtNotes');
    this.inactiveCheckBox = page.locator('#chkInactive');
    this.inactiveDateEdit = page.locator('#txtInactive');
    this.scheduleColorComboBox = page.locator('#cddScheduleColor_DropDown');
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']//b");
    this.warningMessageTextView = page.locator("//div[@class = \'modal-body\']");
    this.yesButton = page.locator("//button[contains(text(),\'Yes\')]");
    this.noButton = page.locator("//button[contains(text(),\'No\')]");
    this.jurisDropdown = page.locator('#lstJuris');
    this.deleteIcon = page.locator('#cmdDelete');
  }

  async clickSave(): Promise<void> {
    // uIMapScheduling.timeCategoryEntry.uISaveButton.click();
    // Playback.controlReadyThreadWait();
  }

  async save(): Promise<void> {
    // uIMapScheduling.timeCategoryEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verifyTimeCategoryCodeAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(30033) Enter Accumulator Code");
  }

  async enterAtTimeCategoryCode(): Promise<void> {
    // uIMapScheduling.timeCategoryEntry.uITimeCategoryCodeEdit
    // .sendKeys(BaseData.getSchedulingModuleValue("TimeCategoryCode"));
  }

  async enterAtDescription(): Promise<void> {
    // uIMapScheduling.timeCategoryEntry.uIDescriptionEdit
    // .sendKeys(BaseData.getSchedulingModuleValue("Description"));
  }

  async enterNotes(): Promise<void> {
    // uIMapScheduling.timeCategoryEntry.uINotesEdit.sendKeys(Randomized.randomString(25));
  }

  async selectAtScheduleColor(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapScheduling.timeCategoryEntry.uIScheduleColorComboBox,
    // BaseData.getSchedulingModuleValue("ScheduleColor"));
    // uIMapScheduling.timeCategoryEntry.uIScheduleColorComboBox.sendKeys(Keys.TAB);
  }

  async verifyAdditionSuccessFullMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapScheduling.timeCategoryEntry.uIBottomLeftSideStatusBar.getText(),
    // "1002 - Addition Successful");
  }

  async clickInactiveCheckbox(): Promise<void> {
    // uIMapScheduling.timeCategoryEntry.uIInactiveCheckBox.click();
    // Playback.controlReadyThreadWait();
  }

  async verifyWarningConfirmMessage(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // verify.ExpectedValueIsTrue(
    // uIMapScheduling.timeCategoryEntry.uIWarningMessageTextView.getText().contains("WARNING"));
    // verify.ExpectedValueIsTrue(uIMapScheduling.timeCategoryEntry.uIWarningMessageTextView.getText().contains(
    // "If you Inactivate this Accumulator, the automatic accrual configuration for this Accumulator will be lost"));
    // verify.ExpectedValueIsTrue(uIMapScheduling.timeCategoryEntry.uIWarningMessageTextView.getText()
    // .contains("Do You Want To Proceed ?"));
  }

  async clickYes(): Promise<void> {
    // uIMapScheduling.timeCategoryEntry.uIYesButton.click();
    // Playback.controlReadyThreadWait();
  }

  async verifyInactiveDateAsCurrentDate(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate("M/d/yyyy"),
    // uIMapScheduling.timeCategoryEntry.uIInactiveDateEdit.getAttribute("value"));
  }

  async closeScreen(): Promise<void> {
    // uIMapScheduling.timeCategoryEntry.driver.close();
  }

  async verifyUpdateSuccessFullMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapScheduling.timeCategoryEntry.uIBottomLeftSideStatusBar.getText(),
    // "1003 - Update Successful");
  }

  async enterTimeCategoryCode(): Promise<void> {
    // uIMapScheduling.timeCategoryEntry.uITimeCategoryCodeEdit
    // .sendKeys("AutoRandomTest" + randomized.randomNumberString(2));
  }

  async enterDescription(): Promise<void> {
    // uIMapScheduling.timeCategoryEntry.uIDescriptionEdit.sendKeys(randomized.randomNameGenerate());
  }

  async selectScheduleColor(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapScheduling.timeCategoryEntry.uIScheduleColorComboBox);
  }

  async selectAtJuris(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapScheduling.timeCategoryEntry.uIJurisDropdown,
    // BaseData.getSchedulingModuleValue("Juris"));
  }

  async verifyAtJuris(): Promise<void> {
    // String juris = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapScheduling.timeCategoryEntry.uIJurisDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("Juris"), juris);
  }

  async verifyJurisFieldIsDisabled(): Promise<void> {
    // System.out.println(uIMapScheduling.timeCategoryEntry.uIJurisDropdown.isEnabled());
    // verify.ExpectedValueIsFalse(uIMapScheduling.timeCategoryEntry.uIJurisDropdown.isEnabled());
  }

  async verify3219WarningMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(3219)**WARNING**");
    // popup.acknowledge.okWithExpectedMessage(
    // "If you Inactivate this Accumulator, the automatic accrual configuration for this Accumulator will be lost .");
    // popup.acknowledge.okWithExpectedMessage("Do You Want To Proceed ?");
  }

  async saveNClose(): Promise<void> {
    // uIMapScheduling.timeCategoryEntry.uISaveAndCloseButton.click();
  }

  async verifyDeleteIconIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapScheduling.timeCategoryEntry.uIDeleteIcon.isEnabled());
  }

}

export class TimeTypeEntryPage {
  readonly page: Page;
  readonly timeTypeCodeEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly notesEdit: Locator;
  readonly inactiveCheckBox: Locator;
  readonly inactiveDateEdit: Locator;
  readonly timeCategoryComboBox: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly multiplicationEdit: Locator;
  readonly accountingSeqEdit: Locator;
  readonly reportableComboBox: Locator;
  readonly codePermissionComboBox: Locator;
  readonly timeTypeCodeLabel: Locator;
  readonly descriptionLabel: Locator;
  readonly timeCategoryLabel: Locator;
  readonly multiplicationLabel: Locator;
  readonly notesLabel: Locator;
  readonly displaySortOrderLabel: Locator;
  readonly accountingSeq: Locator;
  readonly reportableLabel: Locator;
  readonly codeUsedToIdentifyLabel: Locator;
  readonly codePermissionLabel: Locator;
  readonly custom1Label: Locator;
  readonly custom2Label: Locator;
  readonly inactiveLabel: Locator;
  readonly custom1Edit: Locator;
  readonly custom2Edit: Locator;
  readonly codeUsedToIdentifyDropdown: Locator;
  readonly displaySortOrderEdit: Locator;
  readonly codeUsedToIdentifyComboBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.timeTypeCodeEdit = page.locator('#txtTimeReason');
    this.descriptionEdit = page.locator('#txtDescription');
    this.notesEdit = page.locator('#txtNotes');
    this.inactiveCheckBox = page.locator('#chkInactive');
    this.inactiveDateEdit = page.locator('#txtInactive');
    this.timeCategoryComboBox = page.locator('#cddTimeAccumulator');
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']//b");
    this.multiplicationEdit = page.locator('#txtMultiplication');
    this.accountingSeqEdit = page.locator('#txtAccountingSeq');
    this.reportableComboBox = page.locator('#cddReportable_DropDown');
    this.codePermissionComboBox = page.locator('#cddCodeUsage_DropDown');
    this.timeTypeCodeLabel = page.locator('#lblTimeReason');
    this.descriptionLabel = page.locator('#lblDescription');
    this.timeCategoryLabel = page.locator('#lblTimeAccumulator');
    this.multiplicationLabel = page.locator('#lblMultiplication');
    this.notesLabel = page.locator('#lblNotes');
    this.displaySortOrderLabel = page.locator('#lblDispseq');
    this.accountingSeq = page.locator('#lblAccountingSeq');
    this.reportableLabel = page.locator('#lblReportable');
    this.codeUsedToIdentifyLabel = page.locator('#lblReasonCodeType');
    this.codePermissionLabel = page.locator('#lblCodeUsage');
    this.custom1Label = page.locator('#lblCustom1');
    this.custom2Label = page.locator('#lblCustom2');
    this.inactiveLabel = page.locator('#lblInactive');
    this.custom1Edit = page.locator('#txtCustom1');
    this.custom2Edit = page.locator('#txtCustom2');
    this.codeUsedToIdentifyDropdown = page.locator('#cddReasonCodeType_DropDown');
    this.displaySortOrderEdit = page.locator('#txtDispseq');
    this.codeUsedToIdentifyComboBox = page.locator('#cddReasonCodeType_DropDown');
  }

  async clickSave(): Promise<void> {
    // uIMapScheduling.timeTypeEntry.uISaveButton.click();
    // Playback.controlReadyThreadWait();
  }

  async save(): Promise<void> {
    // uIMapScheduling.timeTypeEntry.uISaveButton.click();
    // Playback.controlReadyThreadWait();
    // popup.confirm.yes();
  }

  async close(): Promise<void> {
    // uIMapScheduling.timeTypeEntry.driver.close();
  }

  async verifyTimeTypeCodeAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(30033) Enter Time Reason Code");
  }

  async enterAtTimeTypeCode(): Promise<void> {
    // uIMapScheduling.timeTypeEntry.uITimeTypeCodeEdit
    // .sendKeys(BaseData.getSchedulingModuleValue("TimeTypeCode"));
  }

  async enterAtDescription(): Promise<void> {
    // uIMapScheduling.timeTypeEntry.uIDescriptionEdit.sendKeys(BaseData.getSchedulingModuleValue("Description"));
  }

  async enterNotes(): Promise<void> {
    // uIMapScheduling.timeCategoryEntry.uINotesEdit.sendKeys(Randomized.randomString(25));
  }

  async selectAtTimeCategory(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapScheduling.timeTypeEntry.uITimeCategoryComboBox,
    // BaseData.getSchedulingModuleValue("TimeCategory"));
    // uIMapScheduling.timeTypeEntry.uITimeCategoryComboBox.sendKeys(Keys.TAB);
  }

  async verifyAdditionSuccessFullMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapScheduling.timeTypeEntry.uIBottomLeftSideStatusBar.getText(),
    // "1002 - Addition Successful");
  }

  async enterAtMultiplicationFactor(): Promise<void> {
    // uIMapScheduling.timeTypeEntry.uIMultiplicationEdit
    // .sendKeys(BaseData.getSchedulingModuleValue("MultiplicationFactor"));
  }

  async selectReportable(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapScheduling.timeTypeEntry.uIReportableComboBox);
  }

  async selectCodePermission(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapScheduling.timeTypeEntry.uICodePermissionComboBox);
  }

  async verifyInactiveDate(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate("M/d/yyyy"),
    // uIMapScheduling.timeTypeEntry.uIInactiveDateEdit.getAttribute("value"));
  }

  async clickInactiveCheckbox(): Promise<void> {
    // uIMapScheduling.timeTypeEntry.uIInactiveCheckBox.click();
    // Playback.controlReadyThreadWait();
  }

  async verifyTimeCategoryAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(30033) Enter Time Accumulator");
  }

  async verifyUpdateSuccessFullMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapScheduling.timeTypeEntry.uIBottomLeftSideStatusBar.getText(),
    // "1003 - Update Successful");
  }

  async enterTimeTypeCode(): Promise<void> {
    // uIMapScheduling.timeTypeEntry.uITimeTypeCodeEdit.sendKeys("Ti" + randomized.randomNumberString(2));
  }

  async enterDescription(): Promise<void> {
    // uIMapScheduling.timeTypeEntry.uIDescriptionEdit.sendKeys(randomized.randomNameGenerate());
  }

  async selectTimeCategory(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapScheduling.timeTypeEntry.uITimeCategoryComboBox);
  }

  async enterMultiplicationFactor(): Promise<void> {
    // uIMapScheduling.timeTypeEntry.uIMultiplicationEdit.sendKeys(randomized.enterRandomNumbers(1));
  }

  async verifyAtTimeTypeCode(): Promise<void> {
    // String timeTypeCode = uIMapScheduling.timeTypeEntry.uITimeTypeCodeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("TimeTypeCode"), timeTypeCode);
  }

  async verifyAtTimeCategory(): Promise<void> {
    // String timeCategory = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapScheduling.timeTypeEntry.uITimeCategoryComboBox);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("TimeCategory"), timeCategory);
  }

  async saveAndClose(): Promise<void> {
    // uIMapScheduling.timeTypeEntry.uISaveAndCloseButton.click();
    // Playback.controlReadyThreadWait();
  }

  async verifyValuesListedInTimeCategory(): Promise<void> {
    // List<String> dropDownValues = objectIdentification.manualIdentify
    // .getDropDownValues(uIMapScheduling.timeTypeEntry.uITimeCategoryComboBox);
    // verify.ExpectedValueIsFalse(dropDownValues.isEmpty());
  }

  async verifyTimeTypeCodeIsMandatory(): Promise<void> {
    // String cssValue = uIMapScheduling.timeTypeEntry.uITimeTypeCodeLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual("rgba(153, 0, 0, 1)", cssValue);
  }

  async verifyDescriptionIsMandatory(): Promise<void> {
    // String cssValue = uIMapScheduling.timeTypeEntry.uIDescriptionLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual("rgba(153, 0, 0, 1)", cssValue);
  }

  async verifyTimeCategoryIsMandatory(): Promise<void> {
    // String cssValue = uIMapScheduling.timeTypeEntry.uITimeCategoryLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual("rgba(153, 0, 0, 1)", cssValue);
  }

  async verifyMultiplicationFactorIsMandatory(): Promise<void> {
    // String cssValue = uIMapScheduling.timeTypeEntry.uIMultiplicationLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual("rgba(153, 0, 0, 1)", cssValue);
  }

  async verifyNotesIsNonMandatory(): Promise<void> {
    // String cssValue = uIMapScheduling.timeTypeEntry.uINotesLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual("rgba(0, 0, 0, 1)", cssValue);
  }

  async verifyDisPlaySortOrderIsNonMandatory(): Promise<void> {
    // String cssValue = uIMapScheduling.timeTypeEntry.uIDisplaySortOrderLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual("rgba(0, 0, 0, 1)", cssValue);
  }

  async verifyAccountingSeqIsNonMandatory(): Promise<void> {
    // String cssValue = uIMapScheduling.timeTypeEntry.uIAccountingSeq.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual("rgba(0, 0, 0, 1)", cssValue);
  }

  async verifyReportableIsNonMandatory(): Promise<void> {
    // String cssValue = uIMapScheduling.timeTypeEntry.uIReportableLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual("rgba(0, 0, 0, 1)", cssValue);
  }

  async verifyCodeUsedToIdentifyIsNonMandatory(): Promise<void> {
    // String cssValue = uIMapScheduling.timeTypeEntry.uICodeUsedToIdentifyLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual("rgba(0, 0, 0, 1)", cssValue);
  }

  async verifyCodePermissionIsNonMandatory(): Promise<void> {
    // String cssValue = uIMapScheduling.timeTypeEntry.uICodePermissionLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual("rgba(0, 0, 0, 1)", cssValue);
  }

  async verifyCustom1IsNonMandatory(): Promise<void> {
    // String cssValue = uIMapScheduling.timeTypeEntry.uICustom1Label.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual("rgba(0, 0, 0, 1)", cssValue);
  }

  async verifyCustom2IsNonMandatory(): Promise<void> {
    // String cssValue = uIMapScheduling.timeTypeEntry.uICustom2Label.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual("rgba(0, 0, 0, 1)", cssValue);
  }

  async verifyInactiveIsNonMandatory(): Promise<void> {
    // String cssValue = uIMapScheduling.timeTypeEntry.uIInactiveLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual("rgba(0, 0, 0, 1)", cssValue);
  }

  async verifyAtTimeTypeCode(jsonIndex: number): Promise<void> {
    // String timeTypeCode = uIMapScheduling.timeTypeEntry.uITimeTypeCodeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("TimeTypeCode" + jsonIndex), timeTypeCode);
  }

  async enterRandomDescription(lengthOfString: number, jsonIndex: number): Promise<void> {
    // String randomAlphanumericSpecialCharsPasswordString = BaseData.getSchedulingModuleValue("Description"+jsonIndex)
    // + randomized.randomAlphanumericSpecialCharsPasswordString(lengthOfString);
    // uIMapScheduling.timeTypeEntry.uIDescriptionEdit.sendKeys(randomAlphanumericSpecialCharsPasswordString);
  }

  async verifyAtDescription(jsonIndex: number): Promise<void> {
    // String attribute = uIMapScheduling.timeTypeEntry.uIDescriptionEdit.getAttribute("value");
    // boolean contains = attribute.contains(BaseData.getSchedulingModuleValue("Description"+jsonIndex));
    // verify.ExpectedValueIsTrue(contains, "-->Value is not present");
  }

  async verifyLengthAtDescription(lengthOfString: number): Promise<void> {
    // String attribute = uIMapScheduling.timeTypeEntry.uIDescriptionEdit.getAttribute("value");
    // int length = attribute.length();
    // verify.ExpectedIntergerValueIsEqualToActual(length, lengthOfString);
  }

  async enterRandomNotes(lengthOfString: number): Promise<void> {
    // String randomAlphanumericSpecialCharsPasswordString = BaseData.getSchedulingModuleValue("Notes")
    // + randomized.randomAlphanumericSpecialCharsPasswordString(lengthOfString);
    // uIMapScheduling.timeTypeEntry.uINotesEdit.sendKeys(randomAlphanumericSpecialCharsPasswordString);
  }

  async verifyAtNotes(): Promise<void> {
    // String attribute = uIMapScheduling.timeTypeEntry.uINotesEdit.getAttribute("value");
    // boolean contains = attribute.contains(BaseData.getSchedulingModuleValue("Notes"));
    // verify.ExpectedValueIsTrue(contains, "-->Value is not present");
  }

  async enterRandomMultiplicationFactor(lengthOfString: number): Promise<void> {
    // String enterRandomNumbers = BaseData.getSchedulingModuleValue("String")
    // + BaseData.getSchedulingModuleValue("SpecialChar")
    // + BaseData.getSchedulingModuleValue("MultiplicationFactor") + randomized.enterRandomNumbers(lengthOfString);
    // uIMapScheduling.timeTypeEntry.uIMultiplicationEdit.sendKeys(enterRandomNumbers);
  }

  async verifyAtNotesLength(lengthOfString: number): Promise<void> {
    // String attribute = uIMapScheduling.timeTypeEntry.uINotesEdit.getAttribute("value");
    // int length = attribute.length();
    // verify.ExpectedIntergerValueIsEqualToActual(length, lengthOfString);
  }

  async enterRandomTimeTypeCode(lengthOfString: number, jsonIndex: number): Promise<void> {
    // String randomAlphanumericSpecialCharsPasswordString = BaseData.getSchedulingModuleValue("TimeTypeCode"+jsonIndex)
    // + randomized.randomAlphanumericSpecialCharsPasswordString(lengthOfString);
    // uIMapScheduling.timeTypeEntry.uITimeTypeCodeEdit.sendKeys(randomAlphanumericSpecialCharsPasswordString);
  }

  async verifyAtTimeType(jsonIndex: number): Promise<void> {
    // String attribute = uIMapScheduling.timeTypeEntry.uITimeTypeCodeEdit.getAttribute("value");
    // boolean contains = attribute.contains(BaseData.getSchedulingModuleValue("TimeTypeCode"+jsonIndex));
    // verify.ExpectedValueIsTrue(contains, "-->Value is not present");
  }

  async verifyAtLengthTimeTypeCode(length: number): Promise<void> {
    // String attribute = uIMapScheduling.timeTypeEntry.uITimeTypeCodeEdit.getAttribute("value");
    // int lengthofString = attribute.length();
    // verify.ExpectedIntergerValueIsEqualToActual(lengthofString, length);
  }

  async verifyAtLengthMultiplicationFactor(length: number): Promise<void> {
    // String attribute = uIMapScheduling.timeTypeEntry.uIMultiplicationEdit.getAttribute("value");
    // int lengthofString = attribute.length();
    // verify.ExpectedIntergerValueIsEqualToActual(lengthofString, length);
  }

  async verifyAtMultiplicationFactor(): Promise<void> {
    // String attribute = uIMapScheduling.timeTypeEntry.uIMultiplicationEdit.getAttribute("value");
    // boolean contains = attribute.contains(BaseData.getSchedulingModuleValue("String"));
    // boolean contains1 = attribute.contains(BaseData.getSchedulingModuleValue("SpecialChar"));
    // boolean contains2 = attribute.contains(BaseData.getSchedulingModuleValue("MultiplicationFactor"));
    // verify.ExpectedValueIsFalse(contains, "--->String Present");
    // verify.ExpectedValueIsFalse(contains1, "--->SpecialChar Present");
    // verify.ExpectedValueIsTrue(contains2, "--->Value is not present");
  }

  async enterAtRandomCustom1(length: number): Promise<void> {
    // String randomAlphanumericSpecialCharsPasswordString = BaseData.getSchedulingModuleValue("Custom1")
    // + randomized.randomAlphanumericSpecialCharsPasswordString(length);
    // uIMapScheduling.timeTypeEntry.uICustom1Edit.sendKeys(randomAlphanumericSpecialCharsPasswordString);
  }

  async verifyAtLengthCustom1(length: number): Promise<void> {
    // String attribute = uIMapScheduling.timeTypeEntry.uICustom1Edit.getAttribute("value");
    // int lengthofString = attribute.length();
    // verify.ExpectedIntergerValueIsEqualToActual(lengthofString, length);
  }

  async verifyAtCustom1(): Promise<void> {
    // String attribute = uIMapScheduling.timeTypeEntry.uICustom1Edit.getAttribute("value");
    // boolean contains = attribute.contains(BaseData.getSchedulingModuleValue("Custom1"));
    // verify.ExpectedValueIsTrue(contains, "-->Value is not present");
  }

  async enterAtRandomCustom2(lengthOfString: number): Promise<void> {
    // String randomAlphanumericSpecialCharsPasswordString = BaseData.getSchedulingModuleValue("Custom2")
    // + randomized.randomAlphanumericSpecialCharsPasswordString(lengthOfString);
    // uIMapScheduling.timeTypeEntry.uICustom2Edit.sendKeys(randomAlphanumericSpecialCharsPasswordString);
  }

  async verifyAtLengthCustom2(length: number): Promise<void> {
    // String attribute = uIMapScheduling.timeTypeEntry.uICustom2Edit.getAttribute("value");
    // int lengthofString = attribute.length();
    // verify.ExpectedIntergerValueIsEqualToActual(lengthofString, length);
  }

  async verifyAtCustom2(): Promise<void> {
    // String attribute = uIMapScheduling.timeTypeEntry.uICustom2Edit.getAttribute("value");
    // boolean contains = attribute.contains(BaseData.getSchedulingModuleValue("Custom1"));
    // verify.ExpectedValueIsTrue(contains, "-->Value is not present");
  }

  async verifyInactiveDateIsBlank(): Promise<void> {
    // String attribute = uIMapScheduling.timeTypeEntry.uIInactiveDateEdit.getAttribute("value");
    // System.out.println(attribute);
    // verify.ExpectedValueIsTrue(attribute.isBlank(), "Inactive Textbox is not blank --->");
  }

  async clickNoInSavePopup(): Promise<void> {
    // popup.confirm.noWithExpectedMessage("(3) Do You Want To Save All Of The Entered Details?");
  }

  async verifyInactiveDateAndTimeAsCurrentDateTime(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate("M/d/yyyy") + " " + Randomized.getCurrentTime("HH:mm"),
    // uIMapScheduling.timeTypeEntry.uIInactiveDateEdit.getAttribute("value"));
  }

  async verifyAtReportable(jsonIndex: number): Promise<void> {
    // String value = BaseData.getSchedulingModuleValue("Reportable"+jsonIndex);
    // verify.ExpectedValueIsTrue(
    // objectIdentification.manualIdentify
    // .getDropDownValues(uIMapScheduling.timeTypeEntry.uIReportableComboBox).contains(value),
    // "Value is not present in the Dropdown --->");
  }

  async selectAtReportable(jsonIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapScheduling.timeTypeEntry.uIReportableComboBox,
    // BaseData.getSchedulingModuleValue("Reportable"+jsonIndex));
  }

  async verifyAtCodeUsedToIdentify(jsonIndex: number): Promise<void> {
    // String value = BaseData.getSchedulingModuleValue("CodeUsedToIdentify" + jsonIndex);
    // verify.ExpectedValueIsTrue(
    // objectIdentification.manualIdentify
    // .getDropDownValues(uIMapScheduling.timeTypeEntry.uICodeUsedToIdentifyComboBox).contains(value),
    // "value is not present in the Dropdown --->");
  }

  async selectAtCodeUsedToIdentify(jsonIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapScheduling.timeTypeEntry.uICodeUsedToIdentifyComboBox,
    // BaseData.getSchedulingModuleValue("CodeUsedToIdentify" + jsonIndex));
  }

  async verifyAtCodePermission(jsonIndex: number): Promise<void> {
    // String value = BaseData.getSchedulingModuleValue("CodePermission" + jsonIndex);
    // verify.ExpectedValueIsTrue(
    // objectIdentification.manualIdentify
    // .getDropDownValues(uIMapScheduling.timeTypeEntry.uICodePermissionComboBox).contains(value),
    // "value is not present in the Dropdown --->");
  }

  async selectAtCodePermission(jsonIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapScheduling.timeTypeEntry.uICodePermissionComboBox,
    // BaseData.getSchedulingModuleValue("CodePermission" + jsonIndex));
  }

  async enterRandomDisplaySortOrder(length: number): Promise<void> {
    // String enterRandomNumbers = BaseData.getSchedulingModuleValue("String")
    // + BaseData.getSchedulingModuleValue("SpecialChar")
    // + BaseData.getSchedulingModuleValue("DisplaySortOrder") + randomized.enterRandomNumbers(length);
    // uIMapScheduling.timeTypeEntry.uIDisplaySortOrderEdit.sendKeys(enterRandomNumbers);
  }

  async verifyAtLengthRandomDisplaySortOrder(length: number): Promise<void> {
    // String attribute = uIMapScheduling.timeTypeEntry.uIDisplaySortOrderEdit.getAttribute("value");
    // int lengthOfString = attribute.length();
    // verify.ExpectedIntergerValueIsEqualToActual(lengthOfString, length);
  }

  async verifyAtDisplaySortOrder(): Promise<void> {
    // String attribute = uIMapScheduling.timeTypeEntry.uIDisplaySortOrderEdit.getAttribute("value");
    // boolean contains = attribute.contains(BaseData.getSchedulingModuleValue("String"));
    // boolean contains1 = attribute.contains(BaseData.getSchedulingModuleValue("SpecialChar"));
    // boolean contains2 = attribute.contains(BaseData.getSchedulingModuleValue("DisplaySortOrder"));
    // verify.ExpectedValueIsFalse(contains, "--->String Present");
    // verify.ExpectedValueIsFalse(contains1, "--->SpecialChar Present");
    // verify.ExpectedValueIsTrue(contains2, "--->Value is not present");
  }

  async enterAtRandomAccountSeq(length: number): Promise<void> {
    // String enterRandomNumbers = BaseData.getSchedulingModuleValue("String")
    // + BaseData.getSchedulingModuleValue("SpecialChar")
    // + BaseData.getSchedulingModuleValue("Account") + randomized.enterRandomNumbers(length);
    // uIMapScheduling.timeTypeEntry.uIAccountingSeqEdit.sendKeys(enterRandomNumbers);
  }

  async verifyAtLengthAccountSeq(length: number): Promise<void> {
    // String attribute = uIMapScheduling.timeTypeEntry.uIAccountingSeqEdit.getAttribute("value");
    // int lengthOfString = attribute.length();
    // verify.ExpectedIntergerValueIsEqualToActual(lengthOfString, length);
  }

  async verifyAtAccountSeq(): Promise<void> {
    // String attribute = uIMapScheduling.timeTypeEntry.uIAccountingSeqEdit.getAttribute("value");
    // boolean contains = attribute.contains(BaseData.getSchedulingModuleValue("String"));
    // boolean contains1 = attribute.contains(BaseData.getSchedulingModuleValue("SpecialChar"));
    // boolean contains2 = attribute.contains(BaseData.getSchedulingModuleValue("Account"));
    // verify.ExpectedValueIsFalse(contains, "--->String Present");
    // verify.ExpectedValueIsFalse(contains1, "--->SpecialChar Present");
    // verify.ExpectedValueIsTrue(contains2, "--->Value is not present");
  }

}

export class WorkSheetPage {
  readonly page: Page;
  readonly rosterButton: Locator;
  readonly jurisComboBox: Locator;
  readonly refreshButton: Locator;
  readonly showCertificationsCheckBox: Locator;
  readonly searchButton: Locator;
  readonly divisionComboBox: Locator;
  readonly workSheetResultGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rosterButton = page.locator("//span[text()=\'Roster\']");
    this.jurisComboBox = page.locator('#lstJuris');
    this.refreshButton = page.locator("//input[contains(@src,\'refresh.gif\')]");
    this.showCertificationsCheckBox = page.locator('#chkShowCertifications');
    this.searchButton = page.locator('#btnSearch');
    this.divisionComboBox = page.locator('#cddDivision_DropDown');
    this.workSheetResultGrid = page.locator("//div[@id='grid']");
  }

  async clickRosterButton(): Promise<void> {
    // uIMapScheduling.workSheet.uIRosterButton.click();
  }

  async selectAtJurisDropdown(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapScheduling.workSheet.uIJurisComboBox,
    // BaseData.getSchedulingModuleValue("Juris"));
  }

  async selectAtDivisionDropdown(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapScheduling.workSheet.uIDivisionComboBox,
    // BaseData.getSchedulingModuleValue("Division"));
  }

  async clickRefreshButton(): Promise<void> {
    // uIMapScheduling.workSheet.uIRefreshButton.click();
  }

  async clickShowCertificationsCheckBox(): Promise<void> {
    // uIMapScheduling.workSheet.uIShowCertificationsCheckBox.click();
  }

  async clickSearchButton(): Promise<void> {
    // uIMapScheduling.workSheet.uISearchButton.click();
  }

  async verifyAtJurisDropdown(): Promise<void> {
    // String selectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapScheduling.workSheet.uIJurisComboBox);
    // verify.ExpectedPropertyValueIsEqual(selectedItem, BaseData.getSchedulingModuleValue("Juris"));
  }

  async verifyErrorAcknowledgePopupNotAvailable(): Promise<void> {
    // boolean windowExist = objectIdentification.windowHandle.windowExist("Acknowledge");
    // if (windowExist == true) {
    // String Message = uIMapPopup.acknowledgeWindow.uIErrorInfoTextEdit.getText();
    // System.out.println(Message);
    // verify.ExpectedValueIsFalse(Message.contains("Validation") || Message.contains("Error"));
  }

}

export class RosterWindowPage {
  readonly page: Page;
  readonly jurisComboBox: Locator;
  readonly workSheetButton: Locator;
  readonly refreshButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.jurisComboBox = page.locator('#lstJuris');
    this.workSheetButton = page.locator("//span[text()=\'Work Sheet\']");
    this.refreshButton = page.locator("//input[contains(@src,\'refresh.gif\')]");
  }

  async selectAtJurisDropdown(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapScheduling.rosterWindow.uIJurisComboBox,
    // BaseData.getSchedulingModuleValue("Juris"));
  }

  async verifyAtJurisDropdown(): Promise<void> {
    // String selectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapScheduling.rosterWindow.uIJurisComboBox);
    // verify.ExpectedPropertyValueIsEqual(selectedItem, BaseData.getSchedulingModuleValue("Juris"));
  }

  async clickWorkSheetButton(): Promise<void> {
    // uIMapScheduling.rosterWindow.uIWorkSheetButton.click();
  }

  async clickRefreshButton(): Promise<void> {
    // uIMapScheduling.rosterWindow.uIRefreshButton.click();
  }

}

export class JobGradePage {
  readonly page: Page;
  readonly addJobGradeButton: Locator;
  readonly jobGradeTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addJobGradeButton = page.locator('#cmdAddJob');
    this.jobGradeTable = page.locator('#grdJobGrade');
  }

  async clickAddJobGradeButton(): Promise<void> {
    // uIMapScheduling.jobGrade.uIAddJobGradeButton.click();
  }

  async selectRowByAtJobGrade(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapScheduling.jobGrade.uIJobGradeTable,
    // BaseData.getSchedulingModuleValue("JobGrade"));
  }

  async verifyJobGradeIsNotDisplayed(): Promise<void> {
    // try {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapScheduling.jobGrade.uIJobGradeTable, BaseData.getSchedulingModuleValue("JobGrade"));
    // System.out.println("Element Displayed");
    // } catch (NoSuchElementException e) {
    // e.printStackTrace();
    // System.out.println("Element Not Displayed");
  }

}

export class JobGradeEntryPage {
  readonly page: Page;
  readonly jobGradeCodeEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly effectiveFromDate: Locator;
  readonly effectiveToDate: Locator;
  readonly saveNCloseButton: Locator;
  readonly saveButton: Locator;
  readonly copyFromJobGradeDropDown: Locator;
  readonly hotFixWorksCarryOverAndAccrualButton: Locator;
  readonly vacationCarryOverAndAccrualButton: Locator;
  readonly jobGradeEntryGrid: Locator;
  readonly expandAllCheckBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.jobGradeCodeEdit = page.locator('#txtJobGradeCode');
    this.descriptionEdit = page.locator('#txtDescription');
    this.effectiveFromDate = page.locator("//input[@id=\'dtmDateFrom_KPIDttmCtrl\']");
    this.effectiveToDate = page.locator("//input[@id=\'dtmDateTo_KPIDttmCtrl\']");
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.saveButton = page.locator('#cmdSave');
    this.copyFromJobGradeDropDown = page.locator('#cddCopyFromJobGrade');
    this.hotFixWorksCarryOverAndAccrualButton = page.locator('#grdAccumulator_ctl00_it6_0_btnCarryOver');
    this.vacationCarryOverAndAccrualButton = page.locator('#grdAccumulator_ctl00_it6_1_btnCarryOver');
    this.jobGradeEntryGrid = page.locator('#grdAccumulator_ctl00');
    this.expandAllCheckBox = page.locator('#chkExpandAll');
  }

  async enterAtJobGradeCode(): Promise<void> {
    // uIMapScheduling.jobGradeEntry.uIJobGradeCodeEdit
    // .sendKeys(BaseData.getSchedulingModuleValue("JobGradeCode"));
  }

  async enterAtDescription(): Promise<void> {
    // uIMapScheduling.jobGradeEntry.uIDescriptionEdit.sendKeys(BaseData.getSchedulingModuleValue("Description"));
  }

  async enterEffectiveFromDateAs1MonthBeforeCurrentDate(): Promise<void> {
    // uIMapScheduling.jobGradeEntry.uIEffectiveFromDate.sendKeys(Randomized.getPreviousDateByMonth(1));
  }

  async enterAtEffectiveToDateAsCurrentDate(): Promise<void> {
    // uIMapScheduling.jobGradeEntry.uIEffectiveToDate.sendKeys(Randomized.getCurrentDate());
  }

  async enterAtEffectiveToDateAs10DaysBeforeCurrentDate(): Promise<void> {
    // while (!uIMapScheduling.jobGradeEntry.uIEffectiveToDate.getAttribute("value").isEmpty()) {
    // uIMapScheduling.jobGradeEntry.uIEffectiveToDate.click();
    // uIMapScheduling.jobGradeEntry.uIEffectiveToDate.sendKeys(Keys.BACK_SPACE);
    // uIMapScheduling.jobGradeEntry.uIEffectiveToDate.sendKeys(Randomized.getPreviousDate(10, "MM/dd/yyyy"));
    // uIMapScheduling.jobGradeEntry.uIEffectiveToDate.sendKeys(Keys.TAB);
    // System.out.println(Randomized.getPreviousDate(10, "MM/dd/yyyy"));
  }

  async saveNClose(): Promise<void> {
    // uIMapScheduling.jobGradeEntry.uISaveNCloseButton.click();
    // popup.confirm.yes();
  }

  async save(): Promise<void> {
    // uIMapScheduling.jobGradeEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async tabEffectiveFromAndToDate(): Promise<void> {
    // uIMapScheduling.jobGradeEntry.uIEffectiveFromDate.sendKeys(Keys.TAB);
    // uIMapScheduling.jobGradeEntry.uIEffectiveToDate.sendKeys(Keys.TAB);
  }

  async selectAtCopyFromJobGrade(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapScheduling.jobGradeEntry.uICopyFromJobGradeDropDown,
    // BaseData.getSchedulingModuleValue("JobGrade"));
  }

  async clickHotfixWorkscarryOverButton(): Promise<void> {
    // uIMapScheduling.jobGradeEntry.uIHotFixWorksCarryOverAndAccrualButton.click();
  }

  async clickVacationCarryOverButton(): Promise<void> {
    // uIMapScheduling.jobGradeEntry.uIVacationCarryOverAndAccrualButton.click();
  }

  async enterAtJobGradeCode1(): Promise<void> {
    // uIMapScheduling.jobGradeEntry.uIJobGradeCodeEdit
    // .sendKeys(BaseData.getSchedulingModuleValue("JobGradeCode1"));
  }

  async clickAtTimeType(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
    // uIMapScheduling.jobGradeEntry.uIJobGradeEntryGrid, BaseData.getSchedulingModuleValue("TimeType"));
  }

  async enterAtMintimeInterval(): Promise<void> {
    // WebElement gridRowTextFieldByCellInnerText = objectIdentification.manualIdentify
    // .getGridRowTextFieldByCellInnerText(uIMapScheduling.jobGradeEntry.uIJobGradeEntryGrid,
    // BaseData.getSchedulingModuleValue("TimeType"), "txtMinTime");
    // gridRowTextFieldByCellInnerText.sendKeys(BaseData.getSchedulingModuleValue("txtMinTime"));
  }

  async verifyMintimeIntervalLengthAs4(): Promise<void> {
    // WebElement gridRowTextFieldByCellInnerText = objectIdentification.manualIdentify
    // .getGridRowTextFieldByCellInnerText(uIMapScheduling.jobGradeEntry.uIJobGradeEntryGrid,
    // BaseData.getSchedulingModuleValue("TimeType"), "txtMinTime");
    // String domProperty = gridRowTextFieldByCellInnerText.getDomProperty("value");
    // int length = domProperty.length();
    // verify.ExpectedIntergerValueIsEqualToActual(4, length);
  }

  async enterAtMintimeForCalledIn(): Promise<void> {
    // WebElement gridRowTextFieldByCellInnerText = objectIdentification.manualIdentify
    // .getGridRowTextFieldByCellInnerText(uIMapScheduling.jobGradeEntry.uIJobGradeEntryGrid,
    // BaseData.getSchedulingModuleValue("TimeType"), "txtMaxTime");
    // gridRowTextFieldByCellInnerText.sendKeys(BaseData.getSchedulingModuleValue("txtMaxTime"));
  }

  async verifyMintimeForCalledInlLengthAs4(): Promise<void> {
    // WebElement gridRowTextFieldByCellInnerText = objectIdentification.manualIdentify
    // .getGridRowTextFieldByCellInnerText(uIMapScheduling.jobGradeEntry.uIJobGradeEntryGrid,
    // BaseData.getSchedulingModuleValue("TimeType"), "txtMaxTime");
    // String domProperty = gridRowTextFieldByCellInnerText.getDomProperty("value");
    // int length = domProperty.length();
    // verify.ExpectedIntergerValueIsEqualToActual(4, length);
  }

  async verifyExpandAllCheckBoxIsChecked(): Promise<void> {
    // boolean selected = uIMapScheduling.jobGradeEntry.uIExpandAllCheckBox.isSelected();
    // verify.ExpectedValueIsTrue(selected);
  }

  async verifyTheAllRowsAreExpanded(): Promise<void> {
    // List<WebElement> findElements = uIMapScheduling.jobGradeEntry.uIJobGradeEntryGrid.findElements(By.xpath("//td[contains(@class,'ExpansionColumn')]//img"));
    // findElements.forEach(value->{
    // String attribute = value.getAttribute("title");
    // verify.ExpectedPropertyValueIsEqual(attribute, "Collapse Row");
    // });
  }

  async verifyTheAllRowsAreNotExpanded(): Promise<void> {
    // List<WebElement> findElements = uIMapScheduling.jobGradeEntry.uIJobGradeEntryGrid.findElements(By.xpath("//td[contains(@class,'ExpansionColumn')]//img"));
    // findElements.forEach(value->{
    // String attribute = value.getAttribute("title");
    // verify.ExpectedPropertyValueIsEqual(attribute, "Expand Row");
    // });
  }

  async clickExpandAllCheckBox(): Promise<void> {
    // uIMapScheduling.jobGradeEntry.uIExpandAllCheckBox.click();
  }

}

export class CarryOverAccrualEntryPage {
  readonly page: Page;
  readonly canHoursBeCarriedOverToNextYearYesRadioButton: Locator;
  readonly carryOverFieldTimeTypeDropDown: Locator;
  readonly applyFiscalPeriodYesRadioButton: Locator;
  readonly fiscalPeriodSectionBaseMonthDropDown: Locator;
  readonly fiscalPeriodSectionDayDropDown: Locator;
  readonly saveButton: Locator;
  readonly allowAutomaticAccrualForThisCategory: Locator;
  readonly accrueByDropDown: Locator;
  readonly carryOverAccrualEntryGrid: Locator;
  readonly maximumHoursCarryOverEdit: Locator;
  readonly annualMaxHoursCapEdit: Locator;
  readonly lifetimeMaxHoursCapEdit: Locator;
  readonly bottomLeftSideStatusBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.canHoursBeCarriedOverToNextYearYesRadioButton = page.locator('#rdoYes');
    this.carryOverFieldTimeTypeDropDown = page.locator('#cddTimeReasonCode');
    this.applyFiscalPeriodYesRadioButton = page.locator('#rdoFiscalYes');
    this.fiscalPeriodSectionBaseMonthDropDown = page.locator('#cddBaseMonth_DropDown');
    this.fiscalPeriodSectionDayDropDown = page.locator('#cddDay');
    this.saveButton = page.locator('#cmdSave');
    this.allowAutomaticAccrualForThisCategory = page.locator('#rdoYes1');
    this.accrueByDropDown = page.locator('#cddAccrueby_DropDown');
    this.carryOverAccrualEntryGrid = page.locator('#grdAccumulator');
    this.maximumHoursCarryOverEdit = page.locator('#txtMaximumhoursCarryOver');
    this.annualMaxHoursCapEdit = page.locator('#txtMaximumhoursCap');
    this.lifetimeMaxHoursCapEdit = page.locator('#txtLifetimeMaximumhoursCap');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']//b");
  }

  async clickYesToCanHoursBeCarriedOverToNextYear(): Promise<void> {
    // uIMapScheduling.carryOverAccrualEntry.uICanHoursBeCarriedOverToNextYearYesRadioButton.click();
  }

  async selectAtTimeTypeCode(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapScheduling.carryOverAccrualEntry.uICarryOverFieldTimeTypeDropDown,
    // BaseData.getSchedulingModuleValue("TimeTypeCode" + i));
  }

  async clickYesToApplyFiscalPeriod(): Promise<void> {
    // uIMapScheduling.carryOverAccrualEntry.uIApplyFiscalPeriodYesRadioButton.click();
  }

  async selectAtBaseMonth(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapScheduling.carryOverAccrualEntry.uIFiscalPeriodSectionBaseMonthDropDown,
    // BaseData.getSchedulingModuleValue("BaseMonth"));
  }

  async selectAtDay(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapScheduling.carryOverAccrualEntry.uIFiscalPeriodSectionDayDropDown,
    // BaseData.getSchedulingModuleValue("Day"));
  }

  async save(): Promise<void> {
    // uIMapScheduling.carryOverAccrualEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verifyEnterTimeReasonAcknowledgeMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedContainMessage("(30033)Enter Time Reason Code.");
  }

  async verifyEnterBaseDayAcknowledgeMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(30033)Enter Base Day");
  }

  async clickSave(): Promise<void> {
    // uIMapScheduling.carryOverAccrualEntry.uISaveButton.click();
  }

  async clickYesToAllowAutomaticAccrualForThisCategory(): Promise<void> {
    // uIMapScheduling.carryOverAccrualEntry.uiAllowAutomaticAccrualForThisCategory.click();
  }

  async selectAtAccrueBy(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapScheduling.carryOverAccrualEntry.uIAccrueByDropDown,
    // BaseData.getSchedulingModuleValue("AccrueBy" + i));
  }

  async verifyAtAccrueHoursByLevelInGrid(i: number): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridCell(uIMapScheduling.carryOverAccrualEntry.uICarryOverAccrualEntryGrid,
    // BaseData.getSchedulingModuleValue("Level"), "Accrue Hours")
    // .getText();
    // System.out.println(text);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("AccrueHours" + i), text);
  }

  async enterAtMaximumHoursCarryOver(): Promise<void> {
    // uIMapScheduling.carryOverAccrualEntry.uIMaximumHoursCarryOverEdit
    // .sendKeys(BaseData.getSchedulingModuleValue("MaximumHoursCarryOver"));
  }

  async verifyAtMaximumHoursCarryOver(): Promise<void> {
    // String MaximumHoursCarryOver = uIMapScheduling.carryOverAccrualEntry.uIMaximumHoursCarryOverEdit
    // .getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSchedulingModuleValue("MaximumHoursCarryOver"),
    // MaximumHoursCarryOver);
  }

  async enterAtMaximumHoursCarryOver(i: number): Promise<void> {
    // uIMapScheduling.carryOverAccrualEntry.uIMaximumHoursCarryOverEdit
    // .sendKeys(BaseData.getSchedulingModuleValue("MaximumHoursCarryOver" + i));
    // uIMapScheduling.carryOverAccrualEntry.uIMaximumHoursCarryOverEdit.sendKeys(Keys.TAB);
  }

  async enterAtAnnualMaximumHoursCap(i: number): Promise<void> {
    // uIMapScheduling.carryOverAccrualEntry.uIAnnualMaxHoursCapEdit
    // .sendKeys(BaseData.getSchedulingModuleValue("AnnualMaxHoursCap" + i));
  }

  async enterAtLifetimeMaxHoursCap(i: number): Promise<void> {
    // uIMapScheduling.carryOverAccrualEntry.uILifetimeMaxHoursCapEdit
    // .sendKeys(BaseData.getSchedulingModuleValue("LifetimeMaxHoursCap" + i));
  }

  async verify1146AcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1146) Integer value should have only 4 digits");
  }

  async verifyAnnualMaximumHoursCapIsBlank(): Promise<void> {
    // String getannualmax = uIMapScheduling.carryOverAccrualEntry.uIAnnualMaxHoursCapEdit.getDomProperty("value");
    // verify.ExpectedValueIsTrue(getannualmax.isBlank());
  }

  async verifyMaximumHoursCarryOverIsBlank(): Promise<void> {
    // String getmaxhrs = uIMapScheduling.carryOverAccrualEntry.uIMaximumHoursCarryOverEdit
    // .getDomProperty("value");
    // verify.ExpectedValueIsTrue(getmaxhrs.isBlank());
  }

  async verifyLifetimeMaximumHoursCapIsBlank(): Promise<void> {
    // String getLifetimehrs = uIMapScheduling.carryOverAccrualEntry.uILifetimeMaxHoursCapEdit
    // .getDomProperty("value");
    // verify.ExpectedValueIsTrue(getLifetimehrs.isBlank());
  }

  async verifyUpdateSuccessfulBottomMsg(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(
    // uIMapScheduling.carryOverAccrualEntry.uIBottomLeftSideStatusBar.getText(),
    // "1003 - Update Successful");
  }

}

export class HolidayPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly holidayDate: Locator;
  readonly descriptionEdit: Locator;
  readonly autoApplyLeaveCheckBox: Locator;
  readonly addButton: Locator;
  readonly holidayGrid: Locator;
  readonly workGroupInput: Locator;
  readonly workGroupRadDropDown: Locator;
  readonly jobGradeInput: Locator;
  readonly jobGradeRadDropDown: Locator;
  readonly timeCategoryDropDown: Locator;
  readonly timeReasonDropDown: Locator;
  readonly bottomMessage: Locator;
  readonly autoApplyLeave: Locator;
  readonly timeTypeLabel: Locator;
  readonly timeTypeDropDown: Locator;
  readonly workGroupArrow: Locator;
  readonly jobGradeArrow: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdSave');
    this.holidayDate = page.locator('#dttmHoliday_KPIDttmCtrl');
    this.descriptionEdit = page.locator('#txtDescription');
    this.autoApplyLeaveCheckBox = page.locator('#chkAutoApply');
    this.addButton = page.locator('#imgAdd');
    this.holidayGrid = page.locator("//div[@id=\'grdHoliday\']");
    this.workGroupInput = page.locator('#cddWorkgroup_Input');
    this.workGroupRadDropDown = page.locator('#cddWorkgroup_DropDown');
    this.jobGradeInput = page.locator('#cddJobGrade_Input');
    this.jobGradeRadDropDown = page.locator('#cddJobGrade_DropDown');
    this.timeCategoryDropDown = page.locator('#cddAccumulator');
    this.timeReasonDropDown = page.locator('#cddTimeReason');
    this.bottomMessage = page.locator("//td[@class=\'statusBar\']//b");
    this.autoApplyLeave = page.locator('#chkAutoApply');
    this.timeTypeLabel = page.locator('#lblTimeReason');
    this.timeTypeDropDown = page.locator('#cddTimeReason');
    this.workGroupArrow = page.locator('#cddWorkgroup_Arrow');
    this.jobGradeArrow = page.locator('#cddJobGrade_Arrow');
  }

  async enterHolidayDateasFutreDate(): Promise<number> {
    // int number = Integer.parseInt(randomized.enterRandomNumbers(1));
    // uIMapScheduling.holiday.uIHolidayDate.sendKeys(randomized.getFutureDate(number));
    // return number;
  }

  async enterDescription(): Promise<string> {
    // String Name = randomized.randomNameGenerate();
    // uIMapScheduling.holiday.uIDescriptionEdit.sendKeys(Name);
    // return Name;
  }

  async saveScreen(): Promise<void> {
    // uIMapScheduling.holiday.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verifyAdditionSuccessFullMessage(): Promise<void> {
    // int Count = objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapScheduling.holiday.uIHolidayGrid);
    // System.out.println(Count);
    // if (Count <= 1) {
    // System.out.println("if");
    // verify.ExpectedPropertyValueIsEqual(uIMapScheduling.holiday.uIBottomMessage.getText(),
    // "1002 - Addition Successful");
    // } else {
    // System.out.println("else");
    // verify.ExpectedPropertyValueIsEqual(uIMapScheduling.holiday.uIBottomMessage.getText(),
    // "1003 - Update Successful");
  }

  async clickAdd(): Promise<void> {
    // uIMapScheduling.holiday.uIAddButton.click();
  }

  async verifyDateByDescriptionInGrid(number: number, Description: string): Promise<void> {
    // String Date = objectIdentification.manualIdentify
    // .getGridCell(uIMapScheduling.holiday.uIHolidayGrid, Description, "Holiday Date").getText();
    // verify.ExpectedPropertyValueIsEqual(randomized.getFutureDate(number), Date);
  }

  async clickGridRowByHolidayDate(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapScheduling.holiday.uIHolidayGrid,
    // BaseData.getSchedulingModuleValue("HolidayDate"));
  }

  async clickAutoApplyLeaveCheckbox(): Promise<void> {
    // uIMapScheduling.holiday.uIAutoApplyLeave.click();
  }

  async verifyTimeTypeLabelIsDisplayed(): Promise<void> {
    // uIMapScheduling.holiday.uITimeTypeLabel.isDisplayed();
  }

  async selectAtWorkGroups(): Promise<void> {
    // uIMapScheduling.holiday.uIWorkGroupArrow.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelectWithInput(
    // uIMapScheduling.holiday.uIWorkGroupRadDropDown, BaseData.getSchedulingModuleValue("Workgroup"));
    // uIMapScheduling.holiday.uIWorkGroupArrow.click();
  }

  async selectAtJobGrades(): Promise<void> {
    // uIMapScheduling.holiday.uIJobGradeArrow.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelectWithInput(
    // uIMapScheduling.holiday.uIJobGradeRadDropDown, BaseData.getSchedulingModuleValue("JobGrade"));
    // uIMapScheduling.holiday.uIJobGradeArrow.click();
  }

  async selectAtTimeCategory(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapScheduling.holiday.uITimeCategoryDropDown,
    // BaseData.getSchedulingModuleValue("TimeCategory"));
  }

  async selectAtTimeType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapScheduling.holiday.uITimeTypeDropDown,
    // BaseData.getSchedulingModuleValue("TimeType"));
  }

  async verifyAtTimeTypeInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapScheduling.holiday.uIHolidayGrid, BaseData.getSchedulingModuleValue("TimeType")).getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSchedulingModuleValue("TimeType")));
  }

  async verifyTheGridColumnCellIsNotEditableInRandomRow(): Promise<void> {
    // String text= null;
    // List<WebElement> Displayedcell = new ArrayList<WebElement>();
    // objectIdentification.randomIdentify.selectRandomGridRow();
    // List<WebElement> rowsCollection = objectIdentification.manualIdentify
    // .getGridTableRowsCollection(uIMapScheduling.holiday.uIHolidayGrid);
    // for (WebElement row : rowsCollection) {
    // if (row.getAttribute("class").contains("igg_BlueThemeActiveRow")) {
    // List<WebElement> cells = row.findElements(By.tagName("td"));
    // for (WebElement cell : cells)
    // if (cell.isDisplayed() == true) {
    // Displayedcell.add(cell);
    // for (int i = 0; i <= Displayedcell.size()-1; i++) {
    // WebElement c = Displayedcell.get(i);
    // if(i>=Displayedcell.size()-1) {
    // Playback.actionDriver.doubleClick(c).sendKeys("12345").build().perform();
    // try {
    // objectIdentification.windowHandle.switchToWindow("Holidays");
    // text = c.getDomAttribute("innerText");
    // verify.ExpectedPropertyValueIsEqual(text, "12345");
    // System.out.println("Element is Editable");
    // } catch (Exception e) {
    // e.printStackTrace();
    // System.out.println("Element is non Editable");
    // } catch (Error e) {
    // System.out.println("Erro is non Editable" + "--------ERROR");
    // verify.ExpectedValueIsTrue(uIMapScheduling.holiday.uISaveButton.isDisplayed());
  }

  async deleteAtGreyedOutPastHolidayByDescriptionInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerTextWithoutContains(uIMapScheduling.holiday.uIHolidayGrid, BaseData.getSchedulingModuleValue("PastHoliday"));
  }

  async verifyDeleteConfirmationIsNotArised(): Promise<void> {
    // boolean alertsPresentConditions = objectIdentification.windowHandle.alertsPresentConditions();
    // verify.ExpectedValueIsFalse(alertsPresentConditions);
  }

  async deleteAtHolidayByDescriptionInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerTextWithoutContains(uIMapScheduling.holiday.uIHolidayGrid, BaseData.getSchedulingModuleValue("HolidayDescription"));
  }

  async verifyDeleteConfirmationIsArised(): Promise<void> {
    // boolean alertsPresentConditions = objectIdentification.windowHandle.alertsPresentConditions();
    // verify.ExpectedValueIsTrue(alertsPresentConditions);
    // popup.confirm.yesWithExpectedMessage("(4) Do you really want to delete?");
  }

  async verifyAtDescriptionIsNotPresentInGrid(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapScheduling.holiday.uIHolidayGrid, "Description");
    // boolean contains = gridTableColumnValues.contains(BaseData.getSchedulingModuleValue("HolidayDescription"));
    // verify.ExpectedValueIsFalse(contains);
  }

}

export class TradeSwapEntryPage {
  readonly page: Page;
  readonly calenderTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.calenderTab = page.locator("//span[text()=\'Calendar\']");
  }

  async switchToCalenderTab(): Promise<void> {
    // uIMapScheduling.tradeSwapEntry.uICalenderTab.click();
    // objectIdentification.windowHandle.switchToFrame("frmScheduleView.aspx?");
  }

  async close(): Promise<void> {
    // Playback.driver.close();
  }

}

export class CalenderTab2Page {
  readonly page: Page;
  readonly showFullCalenderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.showFullCalenderButton = page.locator('#btnFullCalendar');
  }

  async clickShowFullCalenderButton(): Promise<void> {
    // uIMapScheduling.tradeSwapEntry.calenderTab.uIShowFullCalenderButton.click();
    // Playback.waitForControlReady();
  }

}

export class TimeReportPage {
  readonly page: Page;
  readonly addNewButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator('#cmdAddNew');
  }

  async clickAddNewButton(): Promise<void> {
    // uIMapScheduling.timeReport.uIAddNewButton.click();
  }

  async switchToCalenderScheduledViewFrame(): Promise<void> {
    // objectIdentification.windowHandle.switchToFrame("frmScheduleView.aspx?");
  }

}

