// @ts-nocheck
import { Page, Locator, FrameLocator } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { AcknowledgePage, ConfirmPage } from '../popup.page';

export class TrainingPage {
  private page: Page;
  private browserHelpers: BrowserHelpers;

  constructor(page: Page) {
    this.page = page;
    this.browserHelpers = new BrowserHelpers(page);
  }

  async Reset(): Promise<void> {
    // uIMapTraining = null;
  }

  async switchToFacilityCode() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmFacilitySrch');
  }

  async switchToGuestSearch() {
    return this.browserHelpers.switchToMainWindowScreenTab('FRPersonnel/frmGuestSrch');
  }

  async switchToInstructorSearch() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmInstructorSrch');
  }

  async switchToCourseSearch() {
    return this.browserHelpers.switchToMainWindowScreenTab('FRPersonnel/frmCourseSrch');
  }

  async switchToClassSearch() {
    return this.browserHelpers.switchToMainWindowScreenTab('FRPersonnel/frmClassInquiry');
  }

  async switchToTrainingSearch() {
    return this.browserHelpers.switchToMainWindowScreenTab('FRPersonnel/frmTrainingSrch');
  }

  async switchToCertificationSearch() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmCertificationSrch');
  }

  async switchToFacilityEntry() {
    return this.browserHelpers.switchToPageByTitle('Facility Code Entry');
  }

  async switchToGuestEntry() {
    return this.browserHelpers.switchToPageByTitle('Guest Entry');
  }

  async switchToInstructorEntry() {
    return this.browserHelpers.switchToPageByTitle('Instructor Entry');
  }

  async switchToCourseEntry() {
    return this.browserHelpers.switchToPageByTitle('Course Entry');
  }

  async switchToClassEntry() {
    return this.browserHelpers.switchToPageByTitle('Training Class Entry');
  }

  async switchToTrainingEntry() {
    return this.browserHelpers.switchToPageByTitle('Training Entry');
  }

  async switchToCertificationEntry() {
    return this.browserHelpers.switchToPageByTitle('Certification Entry');
  }

  async switchToCertificationManualEntry() {
    return this.browserHelpers.switchToPageByTitle('Certification Manual Entry');
  }

  async switchToTrainingClassEntry() {
    return this.browserHelpers.switchToPageByTitle('Training Class Entry');
  }

  async switchToTrainingScheduleEntry() {
    return this.browserHelpers.switchToPageByUrl('frmTrainingSchedule');
  }

  async switchToMultiPFWindow() {
    return this.browserHelpers.switchToPageByUrl('frmAddMultiPF');
  }

}

export class RequestTabPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickAcceptCheckBox(): Promise<void> {
    // List<WebElement> gridTableColumnCells = objectIdentification.manualIdentify.getGridTableColumnCells(uIMapTraining.trainingClassEntry.classEntryRequestTab.uIGridTable, "Accept");
    // for(WebElement cellValue:gridTableColumnCells) {
    // int idxvalue = Integer.parseInt(cellValue.getAttribute("idx"));;
    // int gridColumnIndex = objectIdentification.manualIdentify.getGridColumnIndex(uIMapTraining.trainingClassEntry.classEntryRequestTab.uIGridTable, "Accept");
    // if(idxvalue==gridColumnIndex) {
    // cellValue.findElement(By.tagName("img")).click();
    // break;
  }

  async verifyAcceptCheckboxIsChecked(): Promise<void> {
    // String attribute = Playback.driver.findElement(By.xpath("(//div[@id='tabUnit_tmpl1_usrTrainingRequest_grdStudentsRequest']//tr//td//img)[1]")).getAttribute("title");
    // verify.ExpectedPropertyValueIsEqual("Checked", attribute);
  }

}

export class ClassEntryRequestTabPage {
  readonly page: Page;
  readonly gridTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.gridTable = page.locator('#tabUnit_tmpl1_usrTrainingRequest_grdStudentsRequest');
  }
}

export class FacilityCodePage {
  readonly page: Page;
  readonly codeNoTxtbox: Locator;
  readonly cSZCityTxtbox: Locator;
  readonly cSZStateDropdown: Locator;
  readonly cSZZipLookUp: Locator;
  readonly nametxtbox: Locator;
  readonly includeInactiveCheckBox: Locator;
  readonly addNewLink: Locator;
  readonly resetLink: Locator;
  readonly searchLink: Locator;
  readonly resultTable: Locator;
  readonly excelLink: Locator;
  readonly jurisDropdown: Locator;
  readonly printIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.codeNoTxtbox = page.locator('#txtFacilityCode');
    this.cSZCityTxtbox = page.locator('#cstCSZ_City');
    this.cSZStateDropdown = page.locator('#cstCSZ_State_DropDown');
    this.cSZZipLookUp = page.locator('#cstCSZ_Zip');
    this.nametxtbox = page.locator('#txtFacilityName');
    this.includeInactiveCheckBox = page.locator('#chkIsActive');
    this.addNewLink = page.locator("//span[contains(text(),\'Add New\')]");
    this.resetLink = page.locator("//span[contains(text(),\'Reset\')]");
    this.searchLink = page.locator("//span[contains(text(),\'Search\')]");
    this.resultTable = page.locator('#grdFacility');
    this.excelLink = page.locator("//img[@title=\'Excel\']");
    this.jurisDropdown = page.locator('#lstJuris');
    this.printIcon = page.locator("//img[@title=\'Print\']");
  }

  async enterAtCodeNo(): Promise<void> {
    // uIMapTraining.facilityCode.UICodeNoTxtbox.sendKeys(BaseData.getTrainingModuleValue("CodeNo"));
  }

  async enterAtCSZ(): Promise<void> {
    // uIMapTraining.facilityCode.UICSZCityTxtbox.sendKeys(BaseData.getTrainingModuleValue("CSZ"));
    // uIMapTraining.facilityCode.UICSZCityTxtbox.sendKeys(Keys.TAB);
    // //			uIMapTraining.facilityCode.UICSZStateDropdown.sendKeys(BaseData.getTrainingModuleValue(""));
    // //			uIMapTraining.facilityCode.UICSZZipLookUp.sendKeys(BaseData.getTrainingModuleValue(""));
  }

  async enterAtName(): Promise<void> {
    // uIMapTraining.facilityCode.UINametxtbox.sendKeys(BaseData.getTrainingModuleValue("Name"));
  }

  async selectInculdeInactiveCheckbox(): Promise<void> {
    // uIMapTraining.facilityCode.UIIncludeInactiveCheckBox.click();
  }

  async clickAddNewLink(): Promise<void> {
    // uIMapTraining.facilityCode.UIAddNewLink.click();
  }

  async clickSearchLink(): Promise<void> {
    // uIMapTraining.facilityCode.UISearchLink.click();
  }

  async clickResetLink(): Promise<void> {
    // uIMapTraining.facilityCode.UIResetLink.click();
  }

  async verifyExcelFileIsDownloaded(): Promise<void> {
    // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat(".xlsx");
  }

  async clickExcelIcon(): Promise<void> {
    // uIMapTraining.facilityCode.uIExcelLink.click();
  }

  async verifyJurisAsPx(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("PX - ProPhoenix",objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapTraining.facilityCode.uIJurisDropdown));
  }

  async verifySelectReportScreenOpens(): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.windowHandle.windowExist("Select Report"));
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapTraining.facilityCode.uIPrintIcon.click();
  }

  async verifyAtCodeNo(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("CodeNo"), uIMapTraining.facilityCode.UICodeNoTxtbox.getAttribute("value"));
  }

  async verifyAtCSZ(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("CSZ"), uIMapTraining.facilityCode.UICSZCityTxtbox.getAttribute("value"));
  }

  async verifyAtName(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Name"), uIMapTraining.facilityCode.UINametxtbox.getAttribute("value"));
  }

  async verifyNoDataPresentAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(7) No data present");
  }

  async verifyNoRecordFoundAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
  }

}

export class GuestSearchPage {
  readonly page: Page;
  readonly sSNoTxtbox: Locator;
  readonly agencyTxtbox: Locator;
  readonly lastNameTxtbox: Locator;
  readonly firstNameTxtbox: Locator;
  readonly addNewLink: Locator;
  readonly resetLink: Locator;
  readonly searchLink: Locator;
  readonly resultTable: Locator;
  readonly printIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sSNoTxtbox = page.locator('#mskSSNo');
    this.agencyTxtbox = page.locator('#lupORINbr_CodeValue');
    this.lastNameTxtbox = page.locator('#txtLastName');
    this.firstNameTxtbox = page.locator('#txtFirstName');
    this.addNewLink = page.locator("//span[contains(text(),\'Add New\')]");
    this.resetLink = page.locator("//span[contains(text(),\'Reset\')]");
    this.searchLink = page.locator("//span[contains(text(),\'Search\')]");
    this.resultTable = page.locator('#grdGuest');
    this.printIcon = page.locator("//img[@src=\'/KPIImages/ico/16_print.gif\']");
  }

  async enterAtSSNo(): Promise<void> {
    // uIMapTraining.guestSearch.UISSNoTxtbox.click();
    // uIMapTraining.guestSearch.UISSNoTxtbox.sendKeys(BaseData.getTrainingModuleValue("SSNo"));
    // uIMapTraining.guestSearch.UISSNoTxtbox.sendKeys(Keys.TAB);
  }

  async enterAtAgency(): Promise<void> {
    // uIMapTraining.guestSearch.UIAgencyTxtbox.sendKeys(BaseData.getTrainingModuleValue("Agency"));
  }

  async enterAtName(): Promise<void> {
    // uIMapTraining.guestSearch.UILastNameTxtbox.sendKeys(BaseData.getTrainingModuleValue(""));
    // uIMapTraining.guestSearch.UIFirstNameTxtbox.sendKeys(BaseData.getTrainingModuleValue(""));
  }

  async clickAddNewLink(): Promise<void> {
    // uIMapTraining.guestSearch.UIAddNewLink.click();
  }

  async clickSearchLink(): Promise<void> {
    // uIMapTraining.guestSearch.UISearchLink.click();
  }

  async clickResetLink(): Promise<void> {
    // uIMapTraining.guestSearch.UIResetLink.click();
  }

  async enterAtLastName(): Promise<void> {
    // uIMapTraining.guestSearch.UILastNameTxtbox.sendKeys(BaseData.getTrainingModuleValue("LastName"));
  }

  async enterAtFirstName(): Promise<void> {
    // uIMapTraining.guestSearch.UIFirstNameTxtbox.sendKeys(BaseData.getTrainingModuleValue("FirstName"));
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapTraining.guestSearch.uIPrintIcon.click();
  }

  async verifyAtSSNo(): Promise<void> {
    // String SSNo = BaseData.getTrainingModuleValue("SSNo");
    // String formatted = SSNo.substring(0, 3) + "-" +
    // SSNo.substring(3, 5) + "-" +SSNo.substring(5, 9);
    // verify.ExpectedPropertyValueIsEqual(formatted,uIMapTraining.guestSearch.UISSNoTxtbox.getAttribute("value"));
  }

  async verifyAtAgency(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Agency"),uIMapTraining.guestSearch.UIAgencyTxtbox.getAttribute("value"));
  }

  async verifyAtLastName(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("LastName"),uIMapTraining.guestSearch.UILastNameTxtbox.getAttribute("value"));
  }

  async verifyAtFirstName(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("FirstName"),uIMapTraining.guestSearch.UIFirstNameTxtbox.getAttribute("value"));
  }

}

export class InstructorSearchPage {
  readonly page: Page;
  readonly employeePFNoTxtbox: Locator;
  readonly instructorIDNoTxtbox: Locator;
  readonly lastNameTxtbox: Locator;
  readonly firstNameTxtbox: Locator;
  readonly agencyORITxtbox: Locator;
  readonly trainingCategoryDropdown: Locator;
  readonly trainingTypeDropdown: Locator;
  readonly periodFromDateTxtbox: Locator;
  readonly periodToDateTxtbox: Locator;
  readonly certificationDropdown: Locator;
  readonly recertifyDateTxtbox: Locator;
  readonly recertifyTodayCheckbox: Locator;
  readonly includeInactiveCheckbox: Locator;
  readonly addNewLink: Locator;
  readonly resetLink: Locator;
  readonly searchLink: Locator;
  readonly backLink: Locator;
  readonly resultTable: Locator;
  readonly jurisDropDown: Locator;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly instructorNameRadioButton: Locator;
  readonly iDResultGrid: Locator;
  readonly instructorNameGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.employeePFNoTxtbox = page.locator('#lupPFID_CodeValue');
    this.instructorIDNoTxtbox = page.locator('#txtInstructorNo');
    this.lastNameTxtbox = page.locator('#txtLastName');
    this.firstNameTxtbox = page.locator('#txtFirstName');
    this.agencyORITxtbox = page.locator('#lupORINbr_CodeValue');
    this.trainingCategoryDropdown = page.locator('#cddTrainingCategory_DropDown');
    this.trainingTypeDropdown = page.locator('#cddTrainingType_DropDown');
    this.periodFromDateTxtbox = page.locator('#dtcPeriodFromDttm_KPIDttmCtrl');
    this.periodToDateTxtbox = page.locator('#dtcToDttm_KPIDttmCtrl');
    this.certificationDropdown = page.locator('#cddCertification_DropDown');
    this.recertifyDateTxtbox = page.locator('#RecertificatedByDttm_KPIDttmCtrl');
    this.recertifyTodayCheckbox = page.locator('#ChkToday');
    this.includeInactiveCheckbox = page.locator('#ChkIsActive');
    this.addNewLink = page.locator("//span[contains(text(),\'Add New\')]");
    this.resetLink = page.locator("//span[contains(text(),\'Reset\')]");
    this.searchLink = page.locator("//span[contains(text(),\'Search\')]");
    this.backLink = page.locator("//span[contains(text(),\'Back\')]");
    this.resultTable = page.locator('#grdIDresult');
    this.jurisDropDown = page.locator('#lstJuris');
    this.lastNameEdit = page.locator('#txtLastName');
    this.firstNameEdit = page.locator('#txtFirstName');
    this.instructorNameRadioButton = page.locator('#ChkGroupByList_1');
    this.iDResultGrid = page.locator('#pnlIDResult');
    this.instructorNameGrid = page.locator('#pnlResults2');
  }

  async enterAtEmployeePFNo(): Promise<void> {
    // uIMapTraining.instructorSearch.UIEmployeePFNoTxtbox.sendKeys(BaseData.getTrainingModuleValue("EmployeePF"));
    // uIMapTraining.instructorSearch.UIEmployeePFNoTxtbox.sendKeys(Keys.TAB);
  }

  async enterAtInstructorIDNo(): Promise<void> {
    // uIMapTraining.instructorSearch.UIInstructorIDNoTxtbox.sendKeys(BaseData.getTrainingModuleValue("InstructorID"));
  }

  async enterAtName(): Promise<void> {
    // uIMapTraining.instructorSearch.UILastNameTxtbox.sendKeys(BaseData.getTrainingModuleValue("LastName"));
    // uIMapTraining.instructorSearch.UIFirstNameTxtbox.sendKeys(BaseData.getTrainingModuleValue("FirstName"));
  }

  async enterAtAgencyORI(): Promise<void> {
    // uIMapTraining.instructorSearch.UIAgencyORITxtbox.sendKeys(BaseData.getTrainingModuleValue("AgencyORI"));
  }

  async selectAtTrainingCategory(): Promise<void> {
    // uIMapTraining.instructorSearch.UITrainingCategoryDropdown.sendKeys(BaseData.getTrainingModuleValue("TrainingCategory"));
  }

  async selectAtTrainingType(): Promise<void> {
    // uIMapTraining.instructorSearch.UITrainingTypeDropdown.sendKeys(BaseData.getTrainingModuleValue("TrainingType"));
  }

  async enterAtPeriodFromAndToDate(): Promise<void> {
    // uIMapTraining.instructorSearch.UIPeriodFromDateTxtbox.sendKeys(BaseData.getTrainingModuleValue("PeriodFrom"));
    // uIMapTraining.instructorSearch.UIPeriodToDateTxtbox.sendKeys(BaseData.getTrainingModuleValue("PeriodTo"));
  }

  async selectAtCertification(): Promise<void> {
    // uIMapTraining.instructorSearch.UICertificationDropdown.sendKeys(BaseData.getTrainingModuleValue("Certification"));
  }

  async enterAtRecertifyBy(): Promise<void> {
    // uIMapTraining.instructorSearch.UIRecertifyDateTxtbox.sendKeys(BaseData.getTrainingModuleValue(""));
  }

  async selectRecertifyByTodayCheckbox(): Promise<void> {
    // uIMapTraining.instructorSearch.UIRecertifyTodayCheckbox.click();
  }

  async selectInculdeInactiveCheckbox(): Promise<void> {
    // uIMapTraining.instructorSearch.UIIncludeInactiveCheckbox.click();
  }

  async clickAddNewLink(): Promise<void> {
    // uIMapTraining.instructorSearch.UIAddNewLink.click();
  }

  async clickSearchLink(): Promise<void> {
    // uIMapTraining.instructorSearch.UISearchLink.click();
  }

  async clickBackLink(): Promise<void> {
    // uIMapTraining.instructorSearch.UIBackLink.click();
  }

  async clickResetLink(): Promise<void> {
    // uIMapTraining.instructorSearch.UIResetLink.click();
  }

  async selectAtNameInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapTraining.instructorSearch.UIResultTable,BaseData.getTrainingModuleValue("Name"));
  }

  async clickIncludeInactiveCheckbox(): Promise<void> {
    // uIMapTraining.instructorSearch.UIIncludeInactiveCheckbox.click();
  }

  async verifyAtRowAsGreyOut(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(uIMapTraining.instructorSearch.UIResultTable, BaseData.getTrainingModuleValue("Name"));
    // String Color =  gridRowByCellInnerText.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(Color, "rgba(128, 128, 128, 1)");
  }

  async selectRandomGridRow(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow(uIMapTraining.instructorSearch.UIResultTable);
  }

  async selectAtJuris(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption
    // (uIMapTraining.instructorSearch.uIJurisDropDown,BaseData.getTrainingModuleValue("Juris"));
  }

  async verifyAtNameInGrid(i: number): Promise<void> {
    // WebElement Name = objectIdentification.manualIdentify.getGridCell(uIMapTraining.instructorSearch.UIResultTable, BaseData.getTrainingModuleValue("Name" + i));
    // verify.ExpectedValueIsTrue(Name.getText().contains(BaseData.getTrainingModuleValue("Name" + i)));
  }

  async verifyAtIDNoInGrid(i: number): Promise<void> {
    // WebElement ID = objectIdentification.manualIdentify.getGridCell(uIMapTraining.instructorSearch.UIResultTable, BaseData.getTrainingModuleValue("IDNo" + i));
    // verify.ExpectedValueIsTrue(ID.getText().contains(BaseData.getTrainingModuleValue("IDNo" + i)));
  }

  async verifyAtPFGuestInGrid(i: number): Promise<void> {
    // WebElement PFGuest = objectIdentification.manualIdentify.getGridCell(uIMapTraining.instructorSearch.UIResultTable, BaseData.getTrainingModuleValue("PFGuest" + i));
    // verify.ExpectedValueIsTrue(PFGuest.getText().contains(BaseData.getTrainingModuleValue("PFGuest" + i)));
  }

  async enterAtLastName(): Promise<void> {
    // uIMapTraining.instructorSearch.uILastNameEdit.sendKeys(BaseData.getTrainingModuleValue("LastName"));
    // uIMapTraining.instructorSearch.uILastNameEdit.sendKeys(Keys.TAB);
  }

  async enterAtFirstName(): Promise<void> {
    // uIMapTraining.instructorSearch.uIFirstNameEdit.sendKeys(BaseData.getTrainingModuleValue("FirstName"));
    // uIMapTraining.instructorSearch.uIFirstNameEdit.sendKeys(Keys.TAB);
  }

  async clickInstructorNameRadioButton(): Promise<void> {
    // uIMapTraining.instructorSearch.uIInstructorNameRadioButton.click();
  }

  async maximizeTheScreenUsingRobotClass(): Promise<void> {
    // Robot robot = new Robot();
    // robot.keyPress(KeyEvent.VK_F11);
    // robot.keyRelease(KeyEvent.VK_F11);
  }

  async verifyTwoTablesNotDisplayed(): Promise<void> {
    // boolean controlExist = objectIdentification.manualIdentify.controlExist(uIMapTraining.instructorSearch.uIIDResultGrid);
    // verify.ExpectedValueIsFalse(controlExist);
  }

}

export class CourseSearchPage {
  readonly page: Page;
  readonly courseSystemIDTxtbox: Locator;
  readonly trainingCategoryDropdown: Locator;
  readonly trainingTypeDropdown: Locator;
  readonly courseNoTxtbox: Locator;
  readonly courseTitleTxtbox: Locator;
  readonly qualificationPeriodDropdown: Locator;
  readonly includeInactiveCheckbox: Locator;
  readonly addNewLink: Locator;
  readonly resetLink: Locator;
  readonly searchLink: Locator;
  readonly backLink: Locator;
  readonly resultTable: Locator;
  readonly expandArrowButton: Locator;
  readonly jurisDropDown: Locator;
  readonly includeInactiveCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.courseSystemIDTxtbox = page.locator('#txtCourseNo');
    this.trainingCategoryDropdown = page.locator('#cddTrainCategory_DropDown');
    this.trainingTypeDropdown = page.locator('#cddTrainType_DropDown');
    this.courseNoTxtbox = page.locator('#lupCourseNbr_CodeValue');
    this.courseTitleTxtbox = page.locator('#txtCourseName');
    this.qualificationPeriodDropdown = page.locator('#CddQualificationperiod_DropDown');
    this.includeInactiveCheckbox = page.locator('#ChkIsActive');
    this.addNewLink = page.locator("//span[contains(text(),\'Add New\')]");
    this.resetLink = page.locator("//span[contains(text(),\'Reset\')]");
    this.searchLink = page.locator("//span[contains(text(),\'Search\')]");
    this.backLink = page.locator("//span[contains(text(),\'Back\')]");
    this.resultTable = page.locator('#grdCourse');
    this.expandArrowButton = page.locator("//td//img[contains(@src,\'ighg_Expand\')]");
    this.jurisDropDown = page.locator("lstJuris");
    this.includeInactiveCheckbox = page.locator('#ChkIsActive');
  }

  async enterAtCourseSystemID(): Promise<void> {
    // uIMapTraining.courseSearch.UICourseSystemIDTxtbox.sendKeys(BaseData.getTrainingModuleValue("CourseSystemID"));
  }

  async selectAtTrainingCategory(): Promise<void> {
    // uIMapTraining.courseSearch.UITrainingCategoryDropdown.sendKeys(BaseData.getTrainingModuleValue("TrainingCategory"));
  }

  async selectAtTrainingType(): Promise<void> {
    // uIMapTraining.courseSearch.UITrainingTypeDropdown.sendKeys(BaseData.getTrainingModuleValue("TrainingType"));
  }

  async enterAtCourseNo(): Promise<void> {
    // uIMapTraining.courseSearch.UICourseNoTxtbox.sendKeys(BaseData.getTrainingModuleValue("CourseNo"));
  }

  async enterAtCourseTitle(): Promise<void> {
    // uIMapTraining.courseSearch.UICourseTitleTxtbox.sendKeys(BaseData.getTrainingModuleValue("CourseTitle"));
  }

  async selectAtQualificationPeriod(): Promise<void> {
    // uIMapTraining.courseSearch.UIQualificationPeriodDropdown.sendKeys(BaseData.getTrainingModuleValue("selectAtQualificationPeriod"));
  }

  async selectInculdeInactiveCheckbox(): Promise<void> {
    // uIMapTraining.courseSearch.UIIncludeInactiveCheckbox.click();
  }

  async clickAddNewLink(): Promise<void> {
    // uIMapTraining.courseSearch.UIAddNewLink.click();
  }

  async clickSearchLink(): Promise<void> {
    // uIMapTraining.courseSearch.UISearchLink.click();
  }

  async clickBackLink(): Promise<void> {
    // uIMapTraining.courseSearch.UIBackLink.click();
  }

  async clickResetLink(): Promise<void> {
    // uIMapTraining.courseSearch.UIResetLink.click();
  }

  async clickExpandRowArrow(): Promise<void> {
    // uIMapTraining.courseSearch.uIExpandArrowButton.click();
  }

  async selectRowByAtCourseID(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapTraining.courseSearch.UIResultTable
    // , BaseData.getTrainingModuleValue("CourseSystemID"));
  }

  async selectGridExpandRowByAt(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridExpandRowBycellInnerText(uIMapTraining.courseSearch.UIResultTable,
    // BaseData.getTrainingModuleValue("CourseSystemID"));
  }

  async selectAtJuris(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption
    // (uIMapTraining.courseSearch.uIJurisDropDown,BaseData.getTrainingModuleValue("Juris"));
  }

  async selectAtCourseIDInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapTraining.courseSearch.UIResultTable, BaseData.getTrainingModuleValue("CourseID"));
  }

  async checkIncludeInactiveCheckbox(): Promise<void> {
    // uIMapTraining.courseSearch.uIIncludeInactiveCheckbox.click();
  }

  async verifyGridCountAsZero(): Promise<void> {
    // int gridTableRowsCount = objectIdentification.manualIdentify.getGridTableRowsCount(uIMapTraining.courseSearch.UIResultTable);
    // verify.ExpectedIntergerValueIsEqualToActual(gridTableRowsCount, 0);
  }

  async verifyNoRecordFoundAcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
  }

  async verifyAtCourseIsNotInGrid(jsonIndex: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapTraining.courseSearch.UIResultTable.findElement(
    // By.xpath(".//td[text()='" + BaseData.getTrainingModuleValue("TrainingType" + jsonIndex)
    // + "']//parent::tr[1]//following-sibling::tr[1]")),
    // "Course#");
    // for (String gridTableColumnValue : gridTableColumnValues) {
    // verify.ExpectedValueIsFalse(gridTableColumnValue.contains(BaseData.getTrainingModuleValue("Course"+jsonIndex)), gridTableColumnValue+ "Course is not present --->");
  }

  async verifyAtCategoryInGrid(): Promise<void> {
    // String category = objectIdentification.manualIdentify.getGridCell(uIMapTraining.courseSearch.UIResultTable, BaseData.getTrainingModuleValue("Category")).getText();
    // verify.ExpectedPropertyValueIsEqual(category, BaseData.getTrainingModuleValue("Category"));
  }

}

export class ClassSearchPage {
  readonly page: Page;
  readonly trainingFromDateTxtbox: Locator;
  readonly trainingToDateTxtbox: Locator;
  readonly trainingCategoryDropdown: Locator;
  readonly trainingTypeDropdown: Locator;
  readonly courseNoTxtbox: Locator;
  readonly courseTitleTxtbox: Locator;
  readonly employeePFNoTxtbox: Locator;
  readonly agencyTxtbox: Locator;
  readonly nameDropdown: Locator;
  readonly methodOfInstructionDropdown: Locator;
  readonly facilityCodeTxtbox: Locator;
  readonly instructorTxtbox: Locator;
  readonly showCancelledClassesCheckbox: Locator;
  readonly addNewLink: Locator;
  readonly resetLink: Locator;
  readonly searchLink: Locator;
  readonly backLink: Locator;
  readonly resultTable: Locator;
  readonly nameDropdownList: Locator;
  readonly nameDropdownInput: Locator;
  readonly nameDropdownArrow: Locator;
  readonly jurisDropdown: Locator;
  readonly trainingFacilityEdit: Locator;
  readonly locationName: Locator;
  readonly printIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.trainingFromDateTxtbox = page.locator('#dtStartDttm_KPIDttmCtrl');
    this.trainingToDateTxtbox = page.locator('#dtEndDttm_KPIDttmCtrl');
    this.trainingCategoryDropdown = page.locator('#cddTrainingCategory_DropDown');
    this.trainingTypeDropdown = page.locator('#cddTrainingType_DropDown');
    this.courseNoTxtbox = page.locator('#lupPFID_CodeValue');
    this.courseTitleTxtbox = page.locator('#txtCourseTitle');
    this.employeePFNoTxtbox = page.locator('#lupEmployee_CodeValue');
    this.agencyTxtbox = page.locator('#lupAgency_CodeValue');
    this.nameDropdown = page.locator('#cddSelectName_Input');
    this.methodOfInstructionDropdown = page.locator('#cddMethodInstruction_DropDown');
    this.facilityCodeTxtbox = page.locator('#lupFacility_CodeValue');
    this.instructorTxtbox = page.locator('#lupInstructor_CodeValue');
    this.showCancelledClassesCheckbox = page.locator('#ChkShowCancelledClasses');
    this.addNewLink = page.locator("//span[contains(text(),\'Add New\')]");
    this.resetLink = page.locator("//span[contains(text(),\'Reset\')]");
    this.searchLink = page.locator("//span[contains(text(),\'Search\')]");
    this.backLink = page.locator("//span[contains(text(),\'Back\')]");
    this.resultTable = page.locator('#grdClassSrch');
    this.nameDropdownList = page.locator('#cddSelectName_DropDown');
    this.nameDropdownInput = page.locator('#cddSelectName_Input');
    this.nameDropdownArrow = page.locator('#cddSelectName_Arrow');
    this.jurisDropdown = page.locator('#lstCreatorJuris');
    this.trainingFacilityEdit = page.locator('#lupTrainingFacility_CodeValue');
    this.locationName = page.locator('#txtLocationName');
    this.printIcon = page.locator("//img[@title=\'Print\']");
  }

  async selectAtTrainingDate(): Promise<void> {
    // uIMapTraining.classSearch.UITrainingFromDateTxtbox.sendKeys(BaseData.getTrainingModuleValue(""));
    // uIMapTraining.classSearch.UITrainingToDateTxtbox.sendKeys(BaseData.getTrainingModuleValue(""));
  }

  async selectAtTrainingCategory(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTraining.classSearch.UITrainingCategoryDropdown, BaseData.getTrainingModuleValue("TrainingCategory"));
  }

  async selectAtTrainingType(): Promise<void> {
    // //			uIMapTraining.classSearch.UITrainingTypeDropdown.click();
    // //			Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTraining.classSearch.UITrainingTypeDropdown, BaseData.getTrainingModuleValue("TrainingType"));
    // //			uIMapTraining.classSearch.UITrainingTypeDropdown.sendKeys(BaseData.getTrainingModuleValue("TrainingType"));
  }

  async enterAtCourse(): Promise<void> {
    // uIMapTraining.classSearch.UICourseNoTxtbox.sendKeys(BaseData.getTrainingModuleValue("Course"));
    // uIMapTraining.classSearch.UICourseNoTxtbox.sendKeys(Keys.TAB);
  }

  async enterAtCourseTitle(): Promise<void> {
    // uIMapTraining.classSearch.UICourseTitleTxtbox.sendKeys(BaseData.getTrainingModuleValue("CourseTitle"));
  }

  async enterAtEmployeePFNo(): Promise<void> {
    // uIMapTraining.classSearch.UIEmployeePFNoTxtbox.sendKeys(BaseData.getTrainingModuleValue("EmployeePF"));
  }

  async enterAtAgency(): Promise<void> {
    // uIMapTraining.classSearch.UIAgencyTxtbox.sendKeys(BaseData.getTrainingModuleValue("Agency"));
    // Playback.controlReadyThreadWait();
  }

  async selectAtMethodOfInstrcution(): Promise<void> {
    // uIMapTraining.classSearch.UIMethodOfInstructionDropdown.sendKeys(BaseData.getTrainingModuleValue("MethodOfInstruction"));
  }

  async enterAtFacilty(): Promise<void> {
    // uIMapTraining.classSearch.UIFacilityCodeTxtbox.sendKeys(BaseData.getTrainingModuleValue(""));
  }

  async enterAtInstructor(): Promise<void> {
    // uIMapTraining.classSearch.UIInstructorTxtbox.sendKeys(BaseData.getTrainingModuleValue("Instructor"));
  }

  async selectShowCancelledClassesCheckbox(): Promise<void> {
    // uIMapTraining.classSearch.UIShowCancelledClassesCheckbox.click();
  }

  async clickAddNewLink(): Promise<void> {
    // uIMapTraining.classSearch.UIAddNewLink.click();
  }

  async clickSearchLink(): Promise<void> {
    // uIMapTraining.classSearch.UISearchLink.click();
  }

  async clickBackLink(): Promise<void> {
    // uIMapTraining.classSearch.UIBackLink.click();
  }

  async clickResetLink(): Promise<void> {
    // uIMapTraining.classSearch.UIResetLink.click();
  }

  async verifyClassNoInGrid(classno: string): Promise<void> {
    // String GridClassNumber = objectIdentification.manualIdentify
    // .getGridCell(uIMapTraining.classSearch.UIResultTable, "Class No#", 0).getText();
    // verify.ExpectedPropertyValueIsEqual(GridClassNumber, classno);
  }

  async selectAtClassNoInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapTraining.classSearch.UIResultTable,
    // BaseData.getTrainingModuleValue("ClassNo"));
  }

  async selectAtName(): Promise<void> {
    // uIMapTraining.classSearch.uINameDropdownArrow.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect(uIMapTraining.classSearch.uINameDropdownList, BaseData.getTrainingModuleValue("AgencyName"));
    // Playback.controlReadyThreadWait();
    // uIMapTraining.classSearch.uINameDropdownArrow.click();
  }

  async verifyNoRecordFoundAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
  }

  async verifyAtName(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Name"),uIMapTraining.classSearch.uINameDropdownInput.getAttribute("value"));
  }

  async selectJurisAsBC(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTraining.classSearch.uIJurisDropdown, "BC - Brown County Police Department");
  }

  async verifyAtJurisColumnAsBC(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapTraining.classSearch.UIResultTable, "Juris");
    // for(String value:gridTableColumnValues) {
    // verify.ExpectedValueIsTrue(value.equals("BC"));
  }

  async enterAtTrainingDateFrom(): Promise<void> {
    // uIMapTraining.classSearch.UITrainingFromDateTxtbox.sendKeys(BaseData.getTrainingModuleValue("TrainingFromDate"));
  }

  async enterAtTrainingDateTo(): Promise<void> {
    // uIMapTraining.classSearch.UITrainingToDateTxtbox.sendKeys(BaseData.getTrainingModuleValue("TrainingToDate"));
  }

  async selectRandomGridRow(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow(uIMapTraining.classSearch.UIResultTable);
  }

  async verifyAtTypeColumnInGrid(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapTraining.classSearch.UIResultTable, "Type");
    // for(String value:gridTableColumnValues) {
    // verify.ExpectedValueIsTrue(value.equals(BaseData.getTrainingModuleValue("TrainingType")));
  }

  async verifyAtCourseTitleColumnInGrid(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapTraining.classSearch.UIResultTable, "Course Title");
    // for(String value:gridTableColumnValues) {
    // verify.ExpectedValueIsTrue(value.equals(BaseData.getTrainingModuleValue("CourseTitle")));
  }

  async verifyTrainingDatesFromColumn(): Promise<void> {
    // List<String> FromDate = new ArrayList<String>();
    // //			Randomized.verifyTheDatesGreaterOrEqualFromDate(objectIdentification.manualIdentify.getGridTableColumnValues(uIMapTraining.classSearch.UIResultTable, "Date From"), BaseData.getTrainingModuleValue("TrainingFromDate"));
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapTraining.classSearch.UIResultTable, "Date From");
    // for(String value:gridTableColumnValues) {
    // String substring = value.substring(0, 8);
    // FromDate.add(substring);
    // Randomized.verifyTheDatesGreaterOrEqualFromDate(FromDate, BaseData.getTrainingModuleValue("TrainingFrom"));
  }

  async verifyTrainingDatesToColumn(): Promise<void> {
    // List<String> ToDate = new ArrayList<String>();
    // //	Randomized.verifyTheDatesGreaterOrEqualFromDate(objectIdentification.manualIdentify.getGridTableColumnValues(uIMapTraining.classSearch.UIResultTable, "Date To"), BaseData.getTrainingModuleValue("TrainingToDate"));
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapTraining.classSearch.UIResultTable, "Date To");
    // for(String value:gridTableColumnValues) {
    // if(!value.isBlank()) {
    // String substring = value.substring(0, 8);
    // ToDate.add(substring);
    // Randomized.verifyTheDatesLessOrEqualToDate(ToDate, BaseData.getTrainingModuleValue("TrainingTo"));
  }

  async enterAtTrainingFacility(): Promise<void> {
    // uIMapTraining.classSearch.uITrainingFacilityEdit.sendKeys(BaseData.getTrainingModuleValue("TrainingFacility"));
  }

  async verifyAtFacilityNameColumnInGrid(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapTraining.classSearch.UIResultTable, "Facility Name");
    // for(String value:gridTableColumnValues) {
    // verify.ExpectedValueIsTrue(value.equals(BaseData.getTrainingModuleValue("FacilityName")));
  }

  async verifyAtInstructorColumnInGrid(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapTraining.classSearch.UIResultTable, "Instructor");
    // for(String value:gridTableColumnValues) {
    // verify.ExpectedValueIsTrue(value.equals(BaseData.getTrainingModuleValue("InstructorName")));
  }

  async enterAtLocationName(): Promise<void> {
    // uIMapTraining.classSearch.uILocationName.sendKeys(BaseData.getTrainingModuleValue("LocationName"));
  }

  async reloadScreen(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.reloadScreen("Class Search");
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapTraining.classSearch.uIPrintIcon.click();
  }

}

export class TrainingSearchPage {
  readonly page: Page;
  readonly employeePFNoTxtbox: Locator;
  readonly agencyTxtbox: Locator;
  readonly statusDropdown: Locator;
  readonly showOnlyPFsWithOutTrainingCheckbox: Locator;
  readonly nameDropdown: Locator;
  readonly divisionDropdown: Locator;
  readonly sectionDropdown: Locator;
  readonly stationDropdown: Locator;
  readonly unitTxtbox: Locator;
  readonly shiftDropdown: Locator;
  readonly teamDropdown: Locator;
  readonly trainingCategoryDropdown: Locator;
  readonly trainingTypeDropdown: Locator;
  readonly courseNoTxtbox: Locator;
  readonly courseTitleTxtbox: Locator;
  readonly trainingFromDateTxtbox: Locator;
  readonly trainingToDateTxtbox: Locator;
  readonly requalifyByDateTxtbox: Locator;
  readonly requalifyByTodayCheckbox: Locator;
  readonly trainingWhileOnDutyRadiobox: Locator;
  readonly trainingWhileOffDutyRadiobox: Locator;
  readonly trainingWhileAllRadiobox: Locator;
  readonly resultDropdown: Locator;
  readonly certificationDropdown: Locator;
  readonly methodOfInstructionDropdown: Locator;
  readonly facilityCodeTxtbox: Locator;
  readonly instructorTxtbox: Locator;
  readonly addNewLink: Locator;
  readonly resetLink: Locator;
  readonly searchLink: Locator;
  readonly backLink: Locator;
  readonly resultTable: Locator;
  readonly refreshButton: Locator;
  readonly jurisDropdown: Locator;
  readonly typeDropdown: Locator;
  readonly badgeEdit: Locator;
  readonly dateFromEdit: Locator;
  readonly reQualifyByEdit: Locator;
  readonly onDutyRadioButton: Locator;
  readonly offDutyRadioButton: Locator;
  readonly dateToEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.employeePFNoTxtbox = page.locator('#lupInstructor_CodeValue');
    this.agencyTxtbox = page.locator('#lupAgency_CodeValue');
    this.statusDropdown = page.locator('#cddStatus_DropDown');
    this.showOnlyPFsWithOutTrainingCheckbox = page.locator('#chkPFOnly');
    this.nameDropdown = page.locator('#cddSelectName_Input');
    this.divisionDropdown = page.locator('#cddDivision_DropDown');
    this.sectionDropdown = page.locator('#cddSection_DropDown');
    this.stationDropdown = page.locator('#cddStation_DropDown');
    this.unitTxtbox = page.locator('#lupUnit_CodeValue');
    this.shiftDropdown = page.locator('#cddShift_DropDown');
    this.teamDropdown = page.locator('#cddTeam_DropDown');
    this.trainingCategoryDropdown = page.locator('#cddTrainingCategory_DropDown');
    this.trainingTypeDropdown = page.locator('#cddTrainingType_DropDown');
    this.courseNoTxtbox = page.locator('#lupCourseID_CodeValue');
    this.courseTitleTxtbox = page.locator('#txtCourseTitle');
    this.trainingFromDateTxtbox = page.locator('#dtFrom_KPIDttmCtrl');
    this.trainingToDateTxtbox = page.locator('#dtTo_KPIDttmCtrl');
    this.requalifyByDateTxtbox = page.locator('#dtRecertification_KPIDttmCtrl');
    this.requalifyByTodayCheckbox = page.locator('#chkToday');
    this.trainingWhileOnDutyRadiobox = page.locator('#rbOnDuty');
    this.trainingWhileOffDutyRadiobox = page.locator('#rbOffDuty');
    this.trainingWhileAllRadiobox = page.locator('#rbAll');
    this.resultDropdown = page.locator('#cddResult_DropDown');
    this.certificationDropdown = page.locator('#cddCertification_DropDown');
    this.methodOfInstructionDropdown = page.locator('#cddMethodofInstruction_DropDown');
    this.facilityCodeTxtbox = page.locator('#lupTrainingFacility_CodeValue');
    this.instructorTxtbox = page.locator('#lupInstructorInTab_CodeValue');
    this.addNewLink = page.locator("//span[contains(text(),\'Add New\')]");
    this.resetLink = page.locator("//span[contains(text(),\'Reset\')]");
    this.searchLink = page.locator("//span[contains(text(),\'Search\')]");
    this.backLink = page.locator("//span[contains(text(),\'Back\')]");
    this.resultTable = page.locator('#grdTrainingSrch');
    this.refreshButton = page.locator("//span[text()=\'Refresh\']");
    this.jurisDropdown = page.locator('#lstJuris');
    this.typeDropdown = page.locator('#cddType_DropDown');
    this.badgeEdit = page.locator('#txtBadge');
    this.dateFromEdit = page.locator('#dtFrom_KPIDttmCtrl');
    this.reQualifyByEdit = page.locator('#dtRecertification_KPIDttmCtrl');
    this.onDutyRadioButton = page.locator('#rbOnDuty');
    this.offDutyRadioButton = page.locator('#rbOffDuty');
    this.dateToEdit = page.locator('#dtTo_KPIDttmCtrl');
  }

  async enterAtEmployeePFNo(): Promise<void> {
    // uIMapTraining.trainingSearch.uIEmployeePFNoTxtbox.sendKeys(BaseData.getTrainingModuleValue("EmployeePF"));
    // uIMapTraining.trainingSearch.uIEmployeePFNoTxtbox.sendKeys(Keys.TAB);
  }

  async enterAtAgency(): Promise<void> {
    // uIMapTraining.trainingSearch.uIAgencyTxtbox.sendKeys(BaseData.getTrainingModuleValue("Agency"));
    // uIMapTraining.trainingSearch.uIAgencyTxtbox.sendKeys(Keys.TAB);
  }

  async selectAtStatus(i: number): Promise<void> {
    // uIMapTraining.trainingSearch.uIStatusDropdown.sendKeys(BaseData.getTrainingModuleValue("Status" + i));
  }

  async selectShowOnlyPFWithOutTrainingCheckbox(): Promise<void> {
    // uIMapTraining.trainingSearch.uIShowOnlyPFsWithOutTrainingCheckbox.click();
  }

  async selectAtDivision(): Promise<void> {
    // uIMapTraining.trainingSearch.uIDivisionDropdown.sendKeys(BaseData.getTrainingModuleValue("Division"));
  }

  async selectAtSection(): Promise<void> {
    // uIMapTraining.trainingSearch.uISectionDropdown.sendKeys(BaseData.getTrainingModuleValue("Section"));
  }

  async selectAtStation(): Promise<void> {
    // uIMapTraining.trainingSearch.uIStationDropdown.sendKeys(BaseData.getTrainingModuleValue("Station"));
  }

  async enterAtUnit(): Promise<void> {
    // uIMapTraining.trainingSearch.uIUnitTxtbox.sendKeys(BaseData.getTrainingModuleValue(""));
  }

  async selectAtShift(i: number): Promise<void> {
    // uIMapTraining.trainingSearch.uIShiftDropdown.sendKeys(BaseData.getTrainingModuleValue("Shift" + i));
  }

  async selectAtTeam(): Promise<void> {
    // uIMapTraining.trainingSearch.uITeamDropdown.sendKeys(BaseData.getTrainingModuleValue("Team"));
  }

  async selectAtTrainingCategory(): Promise<void> {
    // uIMapTraining.trainingSearch.uITrainingCategoryDropdown.sendKeys(BaseData.getTrainingModuleValue("TrainingCategory"));
  }

  async selectAtTrainingType(): Promise<void> {
    // uIMapTraining.trainingSearch.uITrainingTypeDropdown.sendKeys(BaseData.getTrainingModuleValue("TrainingType"));
  }

  async enterAtCourseNo(): Promise<void> {
    // uIMapTraining.trainingSearch.uICourseNoTxtbox.sendKeys(BaseData.getTrainingModuleValue("CourseNo"));
    // uIMapTraining.trainingSearch.uICourseNoTxtbox.sendKeys(Keys.TAB);
  }

  async enterAtCourseTitle(): Promise<void> {
    // uIMapTraining.trainingSearch.uICourseTitleTxtbox.sendKeys(BaseData.getTrainingModuleValue("CourseTitle"));
  }

  async enterAtTrainingDate(): Promise<void> {
    // uIMapTraining.trainingSearch.uITrainingFromDateTxtbox.sendKeys(BaseData.getTrainingModuleValue(""));
    // uIMapTraining.trainingSearch.uITrainingToDateTxtbox.sendKeys(BaseData.getTrainingModuleValue(""));
  }

  async enterAtRecertifyBy(): Promise<void> {
    // uIMapTraining.trainingSearch.uIRequalifyByDateTxtbox.sendKeys(BaseData.getTrainingModuleValue(""));
  }

  async selectRecertifyByTodayCheckbox(): Promise<void> {
    // uIMapTraining.trainingSearch.uIRequalifyByTodayCheckbox.click();
  }

  async selectTrainingWhileOnDuty(): Promise<void> {
    // uIMapTraining.trainingSearch.uITrainingWhileOnDutyRadiobox.sendKeys(BaseData.getTrainingModuleValue(""));
  }

  async selectTrainingWhileOffDuty(): Promise<void> {
    // uIMapTraining.trainingSearch.uITrainingWhileOffDutyRadiobox.sendKeys(BaseData.getTrainingModuleValue(""));
  }

  async selectTrainingWhileAll(): Promise<void> {
    // uIMapTraining.trainingSearch.uITrainingWhileAllRadiobox.sendKeys(BaseData.getTrainingModuleValue(""));
  }

  async selectAtResult(): Promise<void> {
    // uIMapTraining.trainingSearch.uIResultDropdown.sendKeys(BaseData.getTrainingModuleValue("Result"));
  }

  async selectAtCertification(): Promise<void> {
    // uIMapTraining.trainingSearch.uICertificationDropdown.sendKeys(BaseData.getTrainingModuleValue("Certification"));
  }

  async selectAtMethodOfInstruction(): Promise<void> {
    // uIMapTraining.trainingSearch.uIMethodOfInstructionDropdown.sendKeys(BaseData.getTrainingModuleValue("MethodOfInstruction"));
  }

  async enterAtTrainingFacility(): Promise<void> {
    // uIMapTraining.classSearch.uITrainingFacilityEdit.sendKeys(BaseData.getTrainingModuleValue("TrainingFacility"));
    // uIMapTraining.classSearch.uITrainingFacilityEdit.sendKeys(Keys.TAB);
  }

  async enterAtInstructor(): Promise<void> {
    // uIMapTraining.trainingSearch.uIInstructorTxtbox.sendKeys(BaseData.getTrainingModuleValue("Instructor"));
    // uIMapTraining.trainingSearch.uIInstructorTxtbox.sendKeys(Keys.TAB);
  }

  async clickAddNewLink(): Promise<void> {
    // uIMapTraining.trainingSearch.uIAddNewLink.click();
  }

  async clickSearchLink(): Promise<void> {
    // uIMapTraining.trainingSearch.uISearchLink.click();
  }

  async clickBackLink(): Promise<void> {
    // uIMapTraining.trainingSearch.uIBackLink.click();
  }

  async clickResetLink(): Promise<void> {
    // uIMapTraining.trainingSearch.uIResetLink.click();
  }

  async verifyAtCeritificationwithName(): Promise<void> {
    // String Certification  = 	objectIdentification.manualIdentify.getGridCell(uIMapTraining.trainingSearch.uIResultTable, BaseData.getTrainingModuleValue("Name"), "Certification").getText();
    // verify.ExpectedPropertyValueIsEqual(Certification, BaseData.getTrainingModuleValue("Certification"));
  }

  async verifyAtCeritificationAsNullwithName(): Promise<void> {
    // String Certification  = 	objectIdentification.manualIdentify.getGridCell(uIMapTraining.trainingSearch.uIResultTable, BaseData.getTrainingModuleValue("Name"), "Certification").getText();
    // verify.ExpectedPropertyValueIsEqual(Certification, "");
  }

  async clickRefreshButton(): Promise<void> {
    // uIMapTraining.trainingSearch.uIRefreshButton.click();
  }

  async selectAtNameInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText
    // (uIMapTraining.trainingSearch.uIResultTable,BaseData.getTrainingModuleValue("Name"));
  }

  async getGridColumnValues(columnValue: string): Promise<string[]> {
    // List<String> columnValues = objectIdentification.manualIdentify.
    // getGridTableColumnValues(uIMapTraining.trainingSearch.uIResultTable , columnValue);
    // return columnValues;
  }

  async verifyAtDateColumnValuesAreSortedDescending(date: string[], DateFormat: string): Promise<void> {
    // Randomized.datesSortingAsDescendingOrder(date, DateFormat);
  }

  async verifyCurrentDateByNameInGrid(): Promise<void> {
    // String date = objectIdentification.manualIdentify.getGridCell(uIMapTraining.trainingSearch.uIResultTable ,
    // BaseData.getTrainingModuleValue("EmployeePF1"), "Date").getText();
    // String currentDate = Randomized.getCurrentDate("MM/dd/yy");
    // verify.ExpectedValueIsTrue(date.contains(currentDate));
  }

  async verifyAtTitleInGrid(): Promise<void> {
    // String title = objectIdentification.manualIdentify
    // .getGridCell(uIMapTraining.trainingSearch.uIResultTable,
    // BaseData.getTrainingModuleValue("Title"), "Title").getText();
    // verify.ExpectedPropertyValueIsEqual(title, BaseData.getTrainingModuleValue("Title"));
  }

  async selectAtTrainingCategoryInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText
    // (uIMapTraining.trainingSearch.uIResultTable,BaseData.getTrainingModuleValue("TrainingCategory"));
  }

  async selectRandomGridRow(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow(uIMapTraining.trainingSearch.uIResultTable);
  }

  async selectAtJuris(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTraining.trainingSearch.uIJurisDropdown, BaseData.getTrainingModuleValue("Juris"));
  }

  async verifyAtJurisInGrid(i: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapTraining.trainingSearch.uIResultTable, "Juris");
    // verify.ExpectedValueIsTrue(gridTableColumnValues.contains(BaseData.getTrainingModuleValue("Juris" + i)));
  }

  async selectAtType(): Promise<void> {
    // uIMapTraining.trainingSearch.uITypeDropdown.sendKeys(BaseData.getTrainingModuleValue("Type"));
  }

  async selectAtTitleRank(): Promise<void> {
    // uIMapTraining.trainingSearch.uITypeDropdown.sendKeys(BaseData.getTrainingModuleValue("TitleRank"));
  }

  async enterAtBadge(): Promise<void> {
    // uIMapTraining.trainingSearch.uIBadgeEdit.sendKeys(BaseData.getTrainingModuleValue("Badge"));
  }

  async enterAtFromDate(): Promise<void> {
    // uIMapTraining.trainingSearch.uIDateFromEdit.sendKeys(BaseData.getTrainingModuleValue("FromDate"));
    // uIMapTraining.trainingSearch.uIDateFromEdit.sendKeys(Keys.TAB);
  }

  async enterAtToDate(): Promise<void> {
    // uIMapTraining.trainingSearch.uIDateToEdit.sendKeys(BaseData.getTrainingModuleValue("ToDate"));
    // uIMapTraining.trainingSearch.uIDateToEdit.sendKeys(Keys.TAB);
  }

  async enterAtReQualifyBy(): Promise<void> {
    // uIMapTraining.trainingSearch.uIReQualifyByEdit.sendKeys(BaseData.getTrainingModuleValue("RequalifyBy"));
    // uIMapTraining.trainingSearch.uIReQualifyByEdit.sendKeys(Keys.TAB);
  }

  async clickOnDutyRadioButton(): Promise<void> {
    // uIMapTraining.trainingSearch.uIOnDutyRadioButton.click();
  }

  async clickOffDutyRadioButton(): Promise<void> {
    // uIMapTraining.trainingSearch.uIOffDutyRadioButton.click();
  }

}

export class CertificationSearchPage {
  readonly page: Page;
  readonly employeePFNoTxtbox: Locator;
  readonly certificationDropdown: Locator;
  readonly showOnlyPFNoWithoutCertifcationCheckBox: Locator;
  readonly recertificationByDateTxtbox: Locator;
  readonly recertificationByTodayCheckbox: Locator;
  readonly effectiveFromDateTxtbox: Locator;
  readonly groupByNoneRadioButton: Locator;
  readonly groupByPFNoRadioButton: Locator;
  readonly groupByCertificationRadioButton: Locator;
  readonly showOnlyActiveCheckbox: Locator;
  readonly searchButton: Locator;
  readonly addNewLink: Locator;
  readonly resetLink: Locator;
  readonly resultTable: Locator;
  readonly employeePFInfoIcon: Locator;
  readonly certificationDropDownArrow: Locator;
  readonly certificationRadControlDropDown: Locator;
  readonly certificationRadioButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.employeePFNoTxtbox = page.locator('#lupEmployeePF_CodeValue');
    this.certificationDropdown = page.locator('#cddCertification_Input');
    this.showOnlyPFNoWithoutCertifcationCheckBox = page.locator('#chkPFWOCert');
    this.recertificationByDateTxtbox = page.locator('#dtReCertify_KPIDttmCtrl');
    this.recertificationByTodayCheckbox = page.locator('#chkToday');
    this.effectiveFromDateTxtbox = page.locator('#dtEffectiveFrom_KPIDttmCtrl');
    this.groupByNoneRadioButton = page.locator('#ChkGroupByList_0');
    this.groupByPFNoRadioButton = page.locator('#ChkGroupByList_1');
    this.groupByCertificationRadioButton = page.locator('#ChkGroupByList_2');
    this.showOnlyActiveCheckbox = page.locator('#chkActive');
    this.searchButton = page.locator('#cmdSearch');
    this.addNewLink = page.locator("//span[contains(text(),\'Add New\')");
    this.resetLink = page.locator("//span[(text()=\'Reset\')]");
    this.resultTable = page.locator('#grdCertifications1');
    this.employeePFInfoIcon = page.locator('#lupEmployeePF_cmdIncOnAddr');
    this.certificationDropDownArrow = page.locator('#cddCertification_Arrow');
    this.certificationRadControlDropDown = page.locator('#cddCertification_DropDown');
    this.certificationRadioButton = page.locator('#ChkGroupByList_2');
  }

  async clickAddNew(): Promise<void> {
    // uIMapFRPersonnel.certificationSearchWindow.uIAddNewButton.click();
  }

  async verifyAtPF(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("PF"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapFRPersonnel.certificationSearchWindow.uICertificationSearchTable, "PF", rowIndex));
  }

  async verifyAtCertification(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Certification").substring(5),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapFRPersonnel.certificationSearchWindow.uICertificationSearchTable, "Certification",
    // rowIndex));
  }

  async verifyAtCEUsEarned(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("EarnedCEU"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapFRPersonnel.certificationSearchWindow.uICertificationSearchTable, "CEUs Earned",
    // rowIndex));
  }

  async verifyAtHoursEarned(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("EarnedHours"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapFRPersonnel.certificationSearchWindow.uICertificationSearchTable, "Hours Earned",
    // rowIndex));
  }

  async enterAtEmployeePF(): Promise<void> {
    // uIMapTraining.certificationSearch.UIEmployeePFNoTxtbox.clear();
    // uIMapTraining.certificationSearch.UIEmployeePFNoTxtbox.sendKeys(BaseData.getTrainingModuleValue("PFCode"));
  }

  async clickSearch(): Promise<void> {
    // uIMapTraining.certificationSearch.UISearchButton.click();
  }

  async clickEmpolyeePFIcon(): Promise<void> {
    // uIMapTraining.certificationSearch.uIEmployeePFInfoIcon.click();
  }

  async verifyAtCertificationInGrid(count: number): Promise<void> {
    // String PF = objectIdentification.manualIdentify.getGridCell(uIMapTraining.certificationSearch.UIResultTable, BaseData.getTrainingModuleValue("certification"+count), "PF").getText();
    // verify.ExpectedPropertyValueIsEqual(PF, BaseData.getTrainingModuleValue("PF"));
  }

  async verifyGridCountAsZero(): Promise<void> {
    // int count = 	objectIdentification.manualIdentify.getGridTableRowsCount(uIMapTraining.certificationSearch.UIResultTable);
    // verify.ExpectedIntergerValueIsEqualToActual(count, 0);
  }

  async verifyAtCountInGrid(RowCount: number): Promise<void> {
    // int count = 	objectIdentification.manualIdentify.getGridTableRowsCount(uIMapTraining.certificationSearch.UIResultTable);
    // verify.ExpectedIntergerValueIsEqualToActual(count, RowCount);
  }

  async verifyNoRecordfoundAck(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
  }

  async clickResetButton(): Promise<void> {
    // uIMapTraining.certificationSearch.UIResetLink.click();
  }

  async selectAtTwoCertificationValues(): Promise<void> {
    // uIMapTraining.certificationSearch.uICertificationDropDownArrow.click();
    // String[] Certification = (String[]) BaseData.getTrainingModuleObject("CertificationValues");
    // objectIdentification.manualIdentify.selectAtRadControlDropDownCheckBoxes
    // (uIMapTraining.certificationSearch.uICertificationRadControlDropDown,Certification);
    // uIMapTraining.certificationSearch.uICertificationDropDownArrow.click();
  }

  async clickCertificationRadioButton(): Promise<void> {
    // uIMapTraining.certificationSearch.uICertificationRadioButton.click();
  }

  async verifyAtCertificationInGridByRow(i: number): Promise<void> {
    // String Certification = objectIdentification.manualIdentify.getGridCell(
    // uIMapFRPersonnel.certificationSearchWindow.uICertificationSearchTable,BaseData.getTrainingModuleValue("Certification"+i)).getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Certification"+i),Certification);
  }

  async selectAtPFInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText
    // (uIMapTraining.certificationSearch.UIResultTable,BaseData.getTrainingModuleValue("PF"));
  }

  async verifyGridCountIsNotZero(): Promise<void> {
    // int count = objectIdentification.manualIdentify.getGridTableRowsCount(uIMapTraining.certificationSearch.UIResultTable);
    // verify.ExpectedIntergerValueIsNotEqualToActual(0, count);
  }

  async selectAtPFInGrid(jsonIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText
    // (uIMapTraining.certificationSearch.UIResultTable,BaseData.getTrainingModuleValue("PF"+jsonIndex));
  }

}

export class FacilityEntryPage {
  readonly page: Page;
  readonly facilityIDTxtbox: Locator;
  readonly nameTxtbox: Locator;
  readonly addressTxtbox: Locator;
  readonly cSZCityTxtbox: Locator;
  readonly cSZStateDropdown: Locator;
  readonly cSZZipLookUp: Locator;
  readonly countrytxtbox: Locator;
  readonly phoneNoType1Dropdown: Locator;
  readonly phoneNo1txtbox: Locator;
  readonly phoneExt1txtbox: Locator;
  readonly phoneNoType2Dropdown: Locator;
  readonly phoneNo2txtbox: Locator;
  readonly phoneExt2txtbox: Locator;
  readonly emailtxtbox: Locator;
  readonly notestxtbox: Locator;
  readonly inactiveCheckBox: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly saveandAddnewButton: Locator;
  readonly printButton: Locator;
  readonly refreshButton: Locator;
  readonly bottomMessage: Locator;
  readonly inactiveDateField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.facilityIDTxtbox = page.locator('#txtFacilityCode');
    this.nameTxtbox = page.locator('#txtFacilityName');
    this.addressTxtbox = page.locator('#txtAddress');
    this.cSZCityTxtbox = page.locator('#cstCSZ_City');
    this.cSZStateDropdown = page.locator('#cstCSZ_State_DropDown');
    this.cSZZipLookUp = page.locator('#cstCSZ_Zip');
    this.countrytxtbox = page.locator("lupCounty_CodeValue");
    this.phoneNoType1Dropdown = page.locator('#cstPhone1_PhoneType_DropDown');
    this.phoneNo1txtbox = page.locator("//input[@id=\'cstPhone1_PhoneNumber\']");
    this.phoneExt1txtbox = page.locator('#txtExt1');
    this.phoneNoType2Dropdown = page.locator('#cstPhone2_PhoneType_DropDown');
    this.phoneNo2txtbox = page.locator("//input[@id=\'cstPhone2_PhoneNumber\']");
    this.phoneExt2txtbox = page.locator('#txtExt2');
    this.emailtxtbox = page.locator('#txtEmail');
    this.notestxtbox = page.locator('#txtNotes');
    this.inactiveCheckBox = page.locator('#chkIsActive');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.saveandAddnewButton = page.locator('#cmdSaveNAddNew');
    this.printButton = page.locator('#cmdPrint');
    this.refreshButton = page.locator('#cmdRefresh');
    this.bottomMessage = page.locator("//td[@class=\'status\']//b");
    this.inactiveDateField = page.locator('#txtInactiveDttm');
  }

  async enterFacilityId(): Promise<void> {
    // uIMapTraining.facilityEntry.uIFacilityIDTxtbox.sendKeys(randomized.enterRandomNumbers(2));
  }

  async enterName(): Promise<void> {
    // uIMapTraining.facilityEntry.uINameTxtbox.sendKeys(randomized.randomNameGenerate());
  }

  async verifyAdditionSuccesFullMessage(): Promise<void> {
    // try {
    // verify.ExpectedPropertyValueIsEqual(uIMapTraining.facilityEntry.uIBottomMessage.getText(),
    // "1002 - Addition Successful");
    // } catch (AssertionError e) {
    // verify.ExpectedPropertyValueIsEqual(uIMapTraining.facilityEntry.uIBottomMessage.getText(),
    // "1002 - Addition successful");
  }

  async clickSave(): Promise<void> {
    // uIMapTraining.facilityEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async enterAtFacilityID(): Promise<void> {
    // uIMapTraining.facilityEntry.uIFacilityIDTxtbox.sendKeys(BaseData.getTrainingModuleValue("FacilityID"));
  }

  async enterAtName(): Promise<void> {
    // uIMapTraining.facilityEntry.uINameTxtbox.sendKeys(BaseData.getTrainingModuleValue("Name"));
  }

  async enterAtAddress(): Promise<void> {
    // uIMapTraining.facilityEntry.uIAddressTxtbox.sendKeys(BaseData.getTrainingModuleValue("Address"));
  }

  async enterAtCSZ(): Promise<void> {
    // uIMapTraining.facilityEntry.uICSZCityTxtbox.sendKeys(BaseData.getTrainingModuleValue("CSZ"));
    // uIMapTraining.facilityEntry.uICSZCityTxtbox.sendKeys(Keys.TAB);
  }

  async selectAtPhoneType1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTraining.facilityEntry.uIPhoneNoType1Dropdown, BaseData.getTrainingModuleValue("PhoneType1"));
    // uIMapTraining.facilityEntry.uIPhoneNoType1Dropdown.sendKeys(Keys.TAB);
  }

  async enterAtPhoneNo1(): Promise<void> {
    // uIMapTraining.facilityEntry.uIPhoneNo1txtbox.sendKeys(BaseData.getTrainingModuleValue("PhoneNo1"));
    // Playback.controlReadyThreadWait();
  }

  async selectAtPhoneType2(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTraining.facilityEntry.uIPhoneNoType2Dropdown, BaseData.getTrainingModuleValue("PhoneType2"));
    // uIMapTraining.facilityEntry.uIPhoneNoType2Dropdown.sendKeys(Keys.TAB);
  }

  async enterAtPhoneNo2(): Promise<void> {
    // uIMapTraining.facilityEntry.uIPhoneNo2txtbox.sendKeys(BaseData.getTrainingModuleValue("PhoneNo2"));
    // Playback.controlReadyThreadWait();
  }

  async enterAtEmail(): Promise<void> {
    // uIMapTraining.facilityEntry.uIEmailtxtbox.sendKeys(BaseData.getTrainingModuleValue("Email"));
  }

  async enterAtNotes(): Promise<void> {
    // uIMapTraining.facilityEntry.uINotestxtbox.sendKeys(BaseData.getTrainingModuleValue("Notes"));
  }

  async verifyAtFacilityID(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("FacilityID"),uIMapTraining.facilityEntry.uIFacilityIDTxtbox.getAttribute("value"));
  }

  async verifyAtName(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Name"),uIMapTraining.facilityEntry.uINameTxtbox.getAttribute("value"));
  }

  async clickInactiveCheckbox(): Promise<void> {
    // uIMapTraining.facilityEntry.uIInactiveCheckBox.click();
  }

  async verifyInactiveDateAsCurrentDate(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTraining.facilityEntry.uIInactiveDateField.getAttribute("value")
    // .contains(Randomized.getCurrentDate()));
  }

  async verifyInactiveDateAsNull(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTraining.facilityEntry.uIInactiveDateField.getAttribute("value").isBlank());
  }

}

export class GuestEntryPage {
  readonly page: Page;
  readonly lastNameTxtbox: Locator;
  readonly firstNameTxtbox: Locator;
  readonly addressTxtbox: Locator;
  readonly cSZCityTxtbox: Locator;
  readonly cSZStateDropdown: Locator;
  readonly cSZZipLookUp: Locator;
  readonly countrytxtbox: Locator;
  readonly phoneNoType1Dropdown: Locator;
  readonly phoneNo1txtbox: Locator;
  readonly phoneExt1txtbox: Locator;
  readonly phoneNoType2Dropdown: Locator;
  readonly phoneNo2txtbox: Locator;
  readonly phoneExt2txtbox: Locator;
  readonly emailtxtbox: Locator;
  readonly notestxtbox: Locator;
  readonly studentsSSNotxtbox: Locator;
  readonly agencyORItxtbox: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly saveandAddnewButton: Locator;
  readonly printButton: Locator;
  readonly refreshButton: Locator;
  readonly bottomMessage: Locator;
  readonly guestIDYear: Locator;
  readonly guestIDNumber: Locator;
  readonly agencyAddress: Locator;
  readonly agencyPhoneNo: Locator;
  readonly agencyORIDescription: Locator;
  readonly faxNoTextBox: Locator;
  readonly agencyEmailTextBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.lastNameTxtbox = page.locator('#cstName_LastName');
    this.firstNameTxtbox = page.locator('#cstName_FirstName');
    this.addressTxtbox = page.locator('#txtAddress');
    this.cSZCityTxtbox = page.locator('#cstCSZ_City');
    this.cSZStateDropdown = page.locator('#cstCSZ_State_DropDown');
    this.cSZZipLookUp = page.locator('#cstCSZ_Zip');
    this.countrytxtbox = page.locator('#lupCounty_CodeValue');
    this.phoneNoType1Dropdown = page.locator('#cstPhone1_PhoneType_DropDown');
    this.phoneNo1txtbox = page.locator('#cstPhone1_PhoneNumber');
    this.phoneExt1txtbox = page.locator('#txtExt1');
    this.phoneNoType2Dropdown = page.locator('#cstPhone2_PhoneType_DropDown');
    this.phoneNo2txtbox = page.locator('#cstPhone2_PhoneNumber');
    this.phoneExt2txtbox = page.locator('#txtExt2');
    this.emailtxtbox = page.locator('#txtEmail');
    this.notestxtbox = page.locator('#txtNotes');
    this.studentsSSNotxtbox = page.locator("//input[@id=\'mskSSNo\']");
    this.agencyORItxtbox = page.locator('#lupORINbr_CodeValue');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.saveandAddnewButton = page.locator('#cmdSaveNAddNew');
    this.printButton = page.locator('#cmdPrint');
    this.refreshButton = page.locator('#cmdRefresh');
    this.bottomMessage = page.locator("//td[@class=\'status\']//b");
    this.guestIDYear = page.locator('#numFromStudentNo_Year');
    this.guestIDNumber = page.locator("//input[@id=\'numFromStudentNo_Number\']");
    this.agencyAddress = page.locator('#txtORIAddr');
    this.agencyPhoneNo = page.locator('#txtORIPhone_PhoneNumber');
    this.agencyORIDescription = page.locator('#lupORINbr_CodeDescription');
    this.faxNoTextBox = page.locator('#txtORIFax_PhoneNumber');
    this.agencyEmailTextBox = page.locator('#txtORIEmail');
  }

  async enterLastNameAndFirstName(): Promise<void> {
    // uIMapTraining.guestEntry.UIFirstNameTxtbox.sendKeys(BaseData.getTrainingModuleValue("FirstName"));
    // uIMapTraining.guestEntry.UIFirstNameTxtbox.sendKeys(Keys.TAB);
    // uIMapTraining.guestEntry.UILastNameTxtbox.sendKeys(BaseData.getTrainingModuleValue("LastName"));
    // uIMapTraining.guestEntry.UILastNameTxtbox.sendKeys(Keys.TAB);
  }

  async saveScreen(): Promise<void> {
    // uIMapTraining.guestEntry.UISaveButton.click();
    // popup.confirm.yes();
  }

  async verifyAdditionalSuccessfullMessage(): Promise<void> {
    // try {
    // verify.ExpectedPropertyValueIsEqual(uIMapTraining.guestEntry.uIBottomMessage.getText(),
    // "1002 - Addition Successful");
    // } catch (AssertionError e) {
    // verify.ExpectedPropertyValueIsEqual(uIMapTraining.guestEntry.uIBottomMessage.getText(),
    // "1002 - Addition successful");
  }

  async verifyGuestIDIsNotNull(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapTraining.guestEntry.uIGuestIDYear.getAttribute("value").isEmpty());
    // verify.ExpectedValueIsFalse(uIMapTraining.guestEntry.uIGuestIDNumber.getAttribute("value").isEmpty());
  }

  async enterAtAddress(): Promise<void> {
    // uIMapTraining.guestEntry.UIAddressTxtbox.sendKeys(BaseData.getTrainingModuleValue("Address"));
  }

  async enterAtCSZ(): Promise<void> {
    // uIMapTraining.guestEntry.UICSZCityTxtbox.sendKeys(BaseData.getTrainingModuleValue("CSZ"));
  }

  async enterAtCounty(): Promise<void> {
    // uIMapTraining.guestEntry.UICountrytxtbox.sendKeys(BaseData.getTrainingModuleValue("County"));
  }

  async selectAtPhoneType1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapTraining.guestEntry.UIPhoneNoType1Dropdown,
    // BaseData.getTrainingModuleValue("PhoneType1"));
  }

  async selectAtPhoneType2(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapTraining.guestEntry.UIPhoneNoType2Dropdown,
    // BaseData.getTrainingModuleValue("PhoneType2"));
  }

  async enterAtPhoneNumber1(): Promise<void> {
    // uIMapTraining.guestEntry.UIPhoneNo1txtbox.click();
    // uIMapTraining.guestEntry.UIPhoneNo1txtbox.sendKeys(BaseData.getTrainingModuleValue("PhoneNo1"));
    // uIMapTraining.guestEntry.UIPhoneNo1txtbox.sendKeys(Keys.TAB);
  }

  async enterAtPhoneNumber2(): Promise<void> {
    // uIMapTraining.guestEntry.UIPhoneNo2txtbox.click();
    // uIMapTraining.guestEntry.UIPhoneNo2txtbox.sendKeys(BaseData.getTrainingModuleValue("PhoneNo2"));
    // uIMapTraining.guestEntry.UIPhoneNo2txtbox.sendKeys(Keys.TAB);
  }

  async enterAtEmail(): Promise<void> {
    // uIMapTraining.guestEntry.UIEmailtxtbox.sendKeys(BaseData.getTrainingModuleValue("Email"));
  }

  async enterAtNotes(): Promise<void> {
    // uIMapTraining.guestEntry.UINotestxtbox.sendKeys(BaseData.getTrainingModuleValue("Notes"));
  }

  async enterAtStudentSSNo(): Promise<void> {
    // uIMapTraining.guestEntry.UIStudentsSSNotxtbox.click();
    // uIMapTraining.guestEntry.UIStudentsSSNotxtbox.sendKeys(BaseData.getTrainingModuleValue("StudentSSNo"));
    // uIMapTraining.guestEntry.UIStudentsSSNotxtbox.sendKeys(Keys.TAB);
  }

  async enterAtAgencyORI(): Promise<void> {
    // uIMapTraining.guestEntry.UIAgencyORItxtbox.sendKeys(BaseData.getTrainingModuleValue("AgencyORI"));
    // uIMapTraining.guestEntry.UIAgencyORItxtbox.sendKeys(Keys.TAB);
  }

  async verifyAgencyAddressIsAutoPopulated(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapTraining.guestEntry.uIAgencyAddress.getAttribute("value").isBlank());
  }

  async verifyAgencyPhoneNoIsAutoPopulated(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapTraining.guestEntry.uIAgencyPhoneNo.getAttribute("value").isBlank());
  }

  async clickSave(): Promise<void> {
    // uIMapTraining.guestEntry.UISaveButton.click();
  }

  async verify6071InvalidPhoneNumberAcknowledgePopAppears(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(6071) Invalid phone number");
  }

  async enterAtPhoneNumber(i: number): Promise<void> {
    // uIMapTraining.guestEntry.UIPhoneNo1txtbox.click();
    // uIMapTraining.guestEntry.UIPhoneNo1txtbox.sendKeys(BaseData.getTrainingModuleValue("PhoneNo" + i));
    // uIMapTraining.guestEntry.UIPhoneNo1txtbox.sendKeys(Keys.TAB);
  }

  async verifyAtLastName(jsonIndex: number): Promise<void> {
    // String lastName = uIMapTraining.guestEntry.UILastNameTxtbox.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("LastName"+jsonIndex), lastName);
  }

  async verifyAtFirstName(jsonIndex: number): Promise<void> {
    // String firstName = uIMapTraining.guestEntry.UIFirstNameTxtbox.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("FirstName"+jsonIndex), firstName);
  }

  async verifyAtAgencyORIDescription(): Promise<void> {
    // String ORIDescription = uIMapTraining.guestEntry.uIAgencyORIDescription.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("ORIDescription"), ORIDescription);
  }

  async verifyAtAddress(jsonIndex: number): Promise<void> {
    // String address = uIMapTraining.guestEntry.uIAgencyAddress.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Address"+jsonIndex), address);
  }

  async verifyAtPhoneNo(jsonIndex: number): Promise<void> {
    // String phoneNo = uIMapTraining.guestEntry.uIAgencyPhoneNo.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("PhoneNo" + jsonIndex), phoneNo);
  }

  async verifyAtFaxNo(jsonIndex: number): Promise<void> {
    // String phoneNo = uIMapTraining.guestEntry.uIFaxNoTextBox.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("FaxNo" + jsonIndex), phoneNo);
  }

  async verifyAtEmail(jsonIndex: number): Promise<void> {
    // String Email = uIMapTraining.guestEntry.uIAgencyEmailTextBox.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Email" + jsonIndex), Email);
  }

}

export class InstructorEntryPage {
  readonly page: Page;
  readonly employeePFNoTxtbox: Locator;
  readonly agencyTxtbox: Locator;
  readonly agencyNameDropdown: Locator;
  readonly notestxtbox: Locator;
  readonly custom1txtbox: Locator;
  readonly custom2txtbox: Locator;
  readonly certificationDropdown: Locator;
  readonly costPerHourtxtbox: Locator;
  readonly expiresDatetxtbox: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly inactiveCheckbox: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly saveandAddnewButton: Locator;
  readonly printButton: Locator;
  readonly refreshButton: Locator;
  readonly employyePfLookUpButton: Locator;
  readonly certificationGrid: Locator;
  readonly bottomMessage: Locator;
  readonly instructorNo: Locator;
  readonly signatureField: Locator;
  readonly inactiveDateTime: Locator;
  readonly jurisDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.employeePFNoTxtbox = page.locator('#lupPFID_CodeValue');
    this.agencyTxtbox = page.locator('#lupORINbr_CodeValue');
    this.agencyNameDropdown = page.locator('#ddlNameList');
    this.notestxtbox = page.locator('#txtNotes');
    this.custom1txtbox = page.locator('#txtCustom1');
    this.custom2txtbox = page.locator('#txtCustom2');
    this.certificationDropdown = page.locator('#cddCertificate_DropDown');
    this.costPerHourtxtbox = page.locator('#txtCurrencyCostPerHr');
    this.expiresDatetxtbox = page.locator('#dtExpiryDttm_KPIDttmCtrl');
    this.addButton = page.locator('#imgAdd');
    this.clearButton = page.locator('#imgClear');
    this.inactiveCheckbox = page.locator('#chkIsActive');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.saveandAddnewButton = page.locator('#cmdSaveNAddNew');
    this.printButton = page.locator('#cmdPrint');
    this.refreshButton = page.locator('#cmdRefresh');
    this.employyePfLookUpButton = page.locator('#lupPFID_imgBtn');
    this.certificationGrid = page.locator("//div[@id=\'grdCertificates\']");
    this.bottomMessage = page.locator("//td[@class=\'status\']//b");
    this.instructorNo = page.locator("txtInstructorNo");
    this.signatureField = page.locator('#imgPFSign');
    this.inactiveDateTime = page.locator('#txtInactiveDttm');
    this.jurisDropdown = page.locator('#lstJuris');
  }

  async selectRandomEmployeePF(): Promise<void> {
    // uIMapTraining.instructorEntry.uIEmployyePfLookUpButton.click();
    // popup.switchToCodedSearch();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async selectCertification(): Promise<string> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapTraining.instructorEntry.UICertificationDropdown);
    // String Certification = objectIdentification.manualIdentify
    // .getDropDwonSelectedItem(uIMapTraining.instructorEntry.UICertificationDropdown);
    // System.out.println(Certification);
    // return Certification;
  }

  async selectAtCertification(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption
    // (uIMapTraining.instructorEntry.UICertificationDropdown, BaseData.getTrainingModuleValue("Certification"));
  }

  async saveScreen(): Promise<void> {
    // uIMapTraining.instructorEntry.UISaveButton.click();
    // popup.confirm.yes();
  }

  async clickSave(): Promise<void> {
    // uIMapTraining.instructorEntry.UISaveButton.click();
  }

  async clickAdd(): Promise<void> {
    // uIMapTraining.instructorEntry.UIAddButton.click();
  }

  async clickClear(): Promise<void> {
    // uIMapTraining.instructorEntry.UIClearButton.click();
  }

  async verifycertificationInGrid(Certification: string): Promise<void> {
    // String CertificationByDate = objectIdentification.manualIdentify
    // .getGridCell(uIMapTraining.instructorEntry.uICertificationGrid,
    // randomized.getCurrentDate("M/dd/yyyy"), "Certification")
    // .getText();
    // System.out.println(CertificationByDate);
    // verify.ExpectedValueIsTrue(Certification.contains(CertificationByDate));
  }

  async verifyAdditionalSuccessFullMessage(): Promise<void> {
    // try {
    // verify.ExpectedPropertyValueIsEqual(uIMapTraining.instructorEntry.uIBottomMessage.getText(),
    // "1002 - Addition Successful");
    // } catch (AssertionError e) {
    // verify.ExpectedPropertyValueIsEqual(uIMapTraining.instructorEntry.uIBottomMessage.getText(),
    // "1002 - Addition successful");
  }

  async enterExpireDateAsCurrentDate(): Promise<void> {
    // uIMapTraining.instructorEntry.UIExpiresDatetxtbox.sendKeys(randomized.getCurrentDate());
    // uIMapTraining.instructorEntry.UIExpiresDatetxtbox.sendKeys(Keys.TAB);
  }

  async verifyInstructorID(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapTraining.instructorEntry.uIInstructorNo.getAttribute("value").isEmpty());
  }

  async enterCostPerHour(): Promise<void> {
    // uIMapTraining.instructorEntry.UICostPerHourtxtbox.sendKeys(randomized.enterRandomNumbers(3));
    // uIMapTraining.instructorEntry.UICostPerHourtxtbox.sendKeys(Keys.TAB);
  }

  async enterEmployeePFNo(): Promise<void> {
    // uIMapTraining.instructorEntry.UIEmployeePFNoTxtbox.sendKeys("FRMS");
    // uIMapTraining.instructorEntry.UIEmployeePFNoTxtbox.sendKeys(Keys.TAB);
  }

  async enterAtEmployeePFNo(): Promise<void> {
    // uIMapTraining.instructorEntry.UIEmployeePFNoTxtbox.sendKeys(BaseData.getTrainingModuleValue("EmployeePF"));
    // uIMapTraining.instructorEntry.UIEmployeePFNoTxtbox.sendKeys(Keys.TAB);
  }

  async enterExpireDateAsFutureDate(): Promise<void> {
    // uIMapTraining.instructorEntry.UIExpiresDatetxtbox.sendKeys(randomized.getFutureDate(2));
    // uIMapTraining.instructorEntry.UIExpiresDatetxtbox.sendKeys(Keys.TAB);
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapTraining.instructorEntry.UIprintButton.click();
  }

  async verifyAtEmployeePF(): Promise<void> {
    // String attribute = uIMapTraining.instructorEntry.UIEmployeePFNoTxtbox.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute,BaseData.getTrainingModuleValue("EmployeePF"));
  }

  async verifyAtCertificationInTheGrid(): Promise<void> {
    // String name = objectIdentification.manualIdentify
    // .getGridCell(uIMapTraining.instructorEntry.uICertificationGrid,
    // BaseData.getTrainingModuleValue("Certification"), "Certification")
    // .getText();
    // System.out.println(name);
    // verify.ExpectedPropertyValueIsEqual(name,BaseData.getTrainingModuleValue("Certification"));
  }

  async verifyRowByAtCost(): Promise<void> {
    // String name = objectIdentification.manualIdentify
    // .getGridCell(uIMapTraining.instructorEntry.uICertificationGrid,
    // BaseData.getTrainingModuleValue("Cost"), "Cost Per Hour")
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(name,BaseData.getTrainingModuleValue("Cost"));
  }

  async enterAtCostPerHour(): Promise<void> {
    // uIMapTraining.instructorEntry.UICostPerHourtxtbox.sendKeys(BaseData.getTrainingModuleValue("Cost"));
    // uIMapTraining.instructorEntry.UICostPerHourtxtbox.sendKeys(Keys.TAB);
  }

  async verify6071UpdatedDataExistAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedContainMessage(
    // "(6071) Updated data exist in Certifications. You Must Save or Reset");
  }

  async selectAtCertificationInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapTraining.instructorEntry.uICertificationGrid,
    // BaseData.getTrainingModuleValue("Certification"));
  }

  async VerifyUpdateSucessfullMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapFRPersonnel.trainingClassEntryWindow.uIBottomStatusLabel.getText(),
    // "1003 - Update Successful");
  }

  async clickSignatureField(): Promise<void> {
    // uIMapTraining.instructorEntry.uISignatureField.click();
  }

  async verifyAtCretificationInGrid(): Promise<void> {
    // String Certificat = objectIdentification.manualIdentify.getGridCell
    // (uIMapTraining.instructorEntry.uICertificationGrid,BaseData.getTrainingModuleValue("Certificat")).getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Certificat"),Certificat);
  }

  async verifySignatureFieldIsEnabled(): Promise<void> {
    // boolean enabled = uIMapTraining.instructorEntry.uISignatureField.isEnabled();
    // verify.ExpectedValueIsTrue(enabled);
  }

  async clickInactiveCheckbox(): Promise<void> {
    // uIMapTraining.instructorEntry.UIInactiveCheckbox.click();
  }

  async verifyInactiveDateAsCurrentDate(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // String datetime = uIMapTraining.instructorEntry.uIInactiveDateTime.getAttribute("value");
    // verify.ExpectedValueIsTrue(datetime.contains(Randomized.getCurrentDate("MM/dd/yy").substring(0, 8)));
  }

  async close(): Promise<void> {
    // uIMapTraining.instructorEntry.driver.close();
  }

  async verifyAtJuris(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Juris"),
    // objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapTraining.instructorEntry.uIJurisDropdown));
  }

}

export class CourseEntryPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly saveandAddnewButton: Locator;
  readonly printButton: Locator;
  readonly refreshButton: Locator;
  readonly deleteButton: Locator;
  readonly trainingCategoryDropdown: Locator;
  readonly trainingTypeDropdown: Locator;
  readonly courseTitleTxtbox: Locator;
  readonly courseNoTxtbox: Locator;
  readonly requalificationPeriodDropdown: Locator;
  readonly inactiveCheckboxbox: Locator;
  readonly bottomMessage: Locator;
  readonly courseSystemIDEdit: Locator;
  readonly jurisDropDown: Locator;
  readonly inactiveDateAndTimeEdit: Locator;
  readonly instructorNotesTab: Locator;
  readonly juris: Locator;
  readonly courseDescriptionTab: Locator;
  readonly notesforStudentsTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.saveandAddnewButton = page.locator('#cmdSaveNAddNew');
    this.printButton = page.locator('#cmdPrint');
    this.refreshButton = page.locator('#cmdRefresh');
    this.deleteButton = page.locator('#cmdDelete');
    this.trainingCategoryDropdown = page.locator('#cddTrainingCategory_DropDown');
    this.trainingTypeDropdown = page.locator('#cddTrainingType_DropDown');
    this.courseTitleTxtbox = page.locator('#txtCourseName');
    this.courseNoTxtbox = page.locator('#txtCourseNo');
    this.requalificationPeriodDropdown = page.locator('#dttmTrainingSchedule_Date_KPIDttmCtrl');
    this.inactiveCheckboxbox = page.locator('#txtRemaining');
    this.bottomMessage = page.locator("//td[@class=\'status\']//b");
    this.courseSystemIDEdit = page.locator('#txtCourseNbr');
    this.jurisDropDown = page.locator("lstJuris");
    this.inactiveDateAndTimeEdit = page.locator('#txtInactiveDttm');
    this.instructorNotesTab = page.locator("//span[text()=\'Instructor Notes\']");
    this.juris = page.locator('#lstJuris');
    this.courseDescriptionTab = page.locator("//span[contains(text(),\'Course Description\')]");
    this.notesforStudentsTab = page.locator("//span[contains(text(),\'Notes For Students\')]");
  }

  async navigatetoCourseDescriptionTab(): Promise<void> {
    // uIMapTraining.courseEntry.courseDescriptionTab.uICourseDescriptionTab.click();
  }

  async navigatetoNotesForStudentsTab(): Promise<void> {
    // uIMapTraining.courseEntry.notesForStudentsTab.UINavigatetoNotesForStudentsTab.click();
  }

  async navigatetoCEUsTab(): Promise<void> {
    // uIMapTraining.courseEntry.courseCEUsTab.UINavigatetoCEUsTab.click();
  }

  async navigatetoOtherSettingsTab(): Promise<void> {
    // uIMapTraining.courseEntry.otherSettingsTab.UINavigatetoOtherSettingsTab.click();
  }

  async selectTrainingCategory(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapTraining.courseEntry.UITrainingCategoryDropdown);
  }

  async selectTrainingType(): Promise<void> {
    // uIMapTraining.courseEntry.UITrainingTypeDropdown.click();
    // objectIdentification.randomIdentify.selectDropDownOption(uIMapTraining.courseEntry.UITrainingTypeDropdown);
  }

  async enterCourseTitle(): Promise<void> {
    // uIMapTraining.courseEntry.UICourseTitleTxtbox.sendKeys("AutoTest" + randomized.randomString(2));
  }

  async entercourse(): Promise<void> {
    // uIMapTraining.courseEntry.UICourseNoTxtbox.sendKeys("20" + randomized.enterRandomNumbers(2));
  }

  async saveScreen(): Promise<void> {
    // uIMapTraining.courseEntry.UISaveButton.click();
    // popup.confirm.yes();
  }

  async verifyAdditionalSuccessFullMessage(): Promise<void> {
    // try {
    // verify.ExpectedPropertyValueIsEqual(uIMapTraining.courseEntry.uIBottomMessage.getText(),
    // "1002 - Addition Successful");
    // } catch (AssertionError e) {
    // verify.ExpectedPropertyValueIsEqual(uIMapTraining.courseEntry.uIBottomMessage.getText(),
    // "1002 - Addition successful");
  }

  async verifyCouseSystemID(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTraining.courseEntry.uICourseSystemIDEdit.getAttribute("value") != null);
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapTraining.courseEntry.UIprintButton.click();
  }

  async verifySelectReportWindowExists(): Promise<void> {
    // boolean windowExist = objectIdentification.windowHandle.windowExist("Select Report");
    // verify.ExpectedValueIsTrue(windowExist);
  }

  async selectAtTrainingCategory(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTraining.courseEntry.UITrainingCategoryDropdown, BaseData.getTrainingModuleValue("TrainingCategory"));
    // Playback.controlReadyThreadWait();
  }

  async selectAtTrainingType(): Promise<void> {
    // uIMapTraining.courseEntry.UITrainingTypeDropdown.click();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTraining.courseEntry.UITrainingTypeDropdown, BaseData.getTrainingModuleValue("TrainingType"));
    // Playback.controlReadyThreadWait();
  }

  async enterAtCourseTitle(): Promise<void> {
    // uIMapTraining.courseEntry.UICourseTitleTxtbox.sendKeys(BaseData.getTrainingModuleValue("CourseTitle"));
  }

  async enterAtCourse(): Promise<void> {
    // uIMapTraining.courseEntry.UICourseNoTxtbox.sendKeys(BaseData.getTrainingModuleValue("Course#"));
  }

  async saveNdCloseScreen(): Promise<void> {
    // uIMapTraining.courseEntry.UISaveNCloseButton.click();
    // popup.confirm.yes();
  }

  async verifyAtJuris(): Promise<void> {
    // String Juris = objectIdentification.manualIdentify.getDropDownSelectedItem
    // (uIMapTraining.courseEntry.uIJurisDropDown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Juris"), Juris);
  }

  async verifyAtTrainingCategory(): Promise<void> {
    // String TrainingCategory =objectIdentification.manualIdentify.getDropDownSelectedItem
    // (uIMapTraining.courseEntry.UITrainingCategoryDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("TrainingCategory"), TrainingCategory);
  }

  async verifyAtTrainingType(): Promise<void> {
    // String TrainingType =objectIdentification.manualIdentify.getDropDownSelectedItem
    // (uIMapTraining.courseEntry.UITrainingTypeDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("TrainingType"), TrainingType);
  }

  async verifyAtCourse(): Promise<void> {
    // String Course = uIMapTraining.courseEntry.UICourseNoTxtbox.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Course"), Course);
  }

  async verifyAtCourseTitle(): Promise<void> {
    // String CourseTitle = uIMapTraining.courseEntry.UICourseTitleTxtbox.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("CourseTitle"), CourseTitle);
  }

  async verifyAtRequalificationPeriod(): Promise<void> {
    // String RequalificationPeriod =objectIdentification.manualIdentify.getDropDownSelectedItem
    // (uIMapTraining.courseEntry.UIRequalificationPeriodDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("RequalificationPeriod"), RequalificationPeriod);
  }

  async verifyInactiveCheckBoxIsChecked(): Promise<void> {
    // boolean selected = uIMapTraining.courseEntry.UIInactiveCheckboxbox.isSelected();
    // verify.ExpectedValueIsTrue(selected);
  }

  async verifyInactiveDateAndTime(): Promise<void> {
    // String currentDate = randomized.getCurrentDate();
    // String currentTime = randomized.getCurrentTime().substring(0, 4);
    // String DateAndTime = uIMapTraining.courseEntry.uIInactiveDateAndTimeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(currentDate+" "+currentTime, DateAndTime);
  }

  async checkInactiveCheckBox(): Promise<void> {
    // uIMapTraining.courseEntry.UIInactiveCheckboxbox.click();
  }

  async clickSave(): Promise<void> {
    // uIMapTraining.courseEntry.UISaveButton.click();
  }

  async verifyUpdatedDataExistAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1051) Updated data exists in the Instructor Notes tab. You must save or reset.");
  }

  async switchToInstructorNotesTab(): Promise<void> {
    // uIMapTraining.courseEntry.uIInstructorNotesTab.click();
    // objectIdentification.windowHandle.switchToFrame("Home/frmLogHistory.aspx?");
  }

  async verifyJurisAsPX(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("PX - ProPhoenix",objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapTraining.courseEntry.uIJuris));
  }

  async clickRefreshIcon(): Promise<void> {
    // uIMapTraining.courseEntry.UIRefreshButton.click();
  }

  async clickDeleteButtonWithConfirmPopup(): Promise<void> {
    // uIMapTraining.courseEntry.uIDeleteButton.click();
    // popup.confirm.yes();
    // Playback.popupThreadWait();
  }

  async verify18DeletedSuccessfullyPopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(18) Deleted successfully");
  }

  async verifyErrorDoesNotArise(): Promise<void> {
    // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal("Course Entry");
  }

  async verifyNoRecordFoundAcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
  }

  async verifyNoRecordFoundAcknowledgePopupNotArise(): Promise<void> {
    // popup.acknowledge.verifyAcknowledgeWindowNotOpened("1011 - No Record Found");
  }

  async verifyCourseDescriptionTabIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTraining.courseEntry.uICourseDescriptionTab.isEnabled(), "Course Description tab is not enabled --> ");
  }

  async verifyNotesForStudentsTabIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTraining.courseEntry.uINotesforStudentsTab.isEnabled(), "Notes For Students tab is not enabled --> ");
  }

  async verifyCourseDescriptionTabTextInBold(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("700",
    // uIMapTraining.courseEntry.uICourseDescriptionTab.getCssValue("font-weight"),
    // "Course Description Text Not In Bold Color --> ");
  }

  async verifyNotesForStudentsTabTextInBold(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("700",
    // uIMapTraining.courseEntry.uINotesforStudentsTab.getCssValue("font-weight"),
    // "Notes For Students Tab Text Not In Bold Color --> ");
  }

}

export class CourseDescriptionTabPage {
  readonly page: Page;
  readonly navigatetoInstructorsTab: Locator;
  readonly templateDropdown: Locator;
  readonly loadbutton: Locator;
  readonly addNewButton: Locator;
  readonly editorControl: Locator;
  readonly textEdit: Locator;
  readonly convertToUppercaseIcon: Locator;
  readonly convertToLowercaseIcon: Locator;
  readonly courseDescriptionTab: Locator;
  readonly commentsRichTextEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigatetoInstructorsTab = page.locator("//div[@id=\'tabCourseCode\'//span[contains(text(),\'Course Description\')");
    this.templateDropdown = page.locator('#tabCourseCode_tmpl0_usrCourseDescription_cddTemplate');
    this.loadbutton = page.locator('#tabCourseCode_tmpl0_usrCourseDescription_btnLoad');
    this.addNewButton = page.locator('#tabCourseCode_tmpl0_usrCourseDescription_btnAddNew');
    this.editorControl = page.locator('#tabCourseCode_tmpl0_usrCourseDescription_KPIRadCourseDescription_contentIframe');
    this.textEdit = page.locator("//body");
    this.convertToUppercaseIcon = page.locator("//span[@class=\'ConvertToUpper\']");
    this.convertToLowercaseIcon = page.locator("//span[@class=\'ConvertToLower\']");
    this.courseDescriptionTab = page.locator("//span[contains(text(),\'Course Description\')]");
    this.commentsRichTextEdit = page.locator("//iframe[@id=\'tabCourseCode_tmpl0_usrCourseDescription_KPIRadCourseDescription_contentIframe\']");
  }

  async selectAllText(): Promise<void> {
    // WebElement frame = Playback.driver.findElement(
    // By.xpath("//iframe[@id='tabCourseCode_tmpl0_usrCourseDescription_KPIRadCourseDescription_contentIframe']"));
    // Playback.driver.switchTo().frame(frame);
    // uIMapTraining.courseEntry.courseDescriptionTab.uITextEdit.click();
    // Actions actions = new Actions(Playback.driver);
    // actions.click(uIMapTraining.courseEntry.courseDescriptionTab.uITextEdit).keyDown(Keys.CONTROL).sendKeys("a")
    // .sendKeys("a").keyUp(Keys.CONTROL).perform();
  }

  async clickConvertToUppercaseIcon(): Promise<void> {
    // uIMapTraining.courseEntry.courseDescriptionTab.uIConvertToUppercaseIcon.click();
  }

  async clickConvertToLowercaseIcon(): Promise<void> {
    // uIMapTraining.courseEntry.courseDescriptionTab.uIConvertToLowercaseIcon.click();
  }

  async clickAddNew(): Promise<void> {
    // uIMapTraining.courseEntry.courseDescriptionTab.uIAddNewButton.click();
  }

  async selectAtTemplate(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTraining.courseEntry.courseDescriptionTab.UITemplateDropdown, BaseData.getTrainingModuleValue("Template"));
  }

  async verifyAtTemplateDropdown(): Promise<void> {
    // String dropDwonSelectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapTraining.courseEntry.courseDescriptionTab.UITemplateDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Template"), dropDwonSelectedItem);
  }

  async clickLoadButton(): Promise<void> {
    // uIMapTraining.courseEntry.courseDescriptionTab.UILoadbutton.click();
  }

  async verifyAtEnteredText(): Promise<void> {
    // objectIdentification.windowHandle.switchToFrame(uIMapTraining.courseEntry.courseDescriptionTab.uICommentsRichTextEdit);
    // String text = uIMapTraining.courseEntry.courseDescriptionTab.uITextEdit.getText();
    // System.out.println(text);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Text"), text);
  }

}

export class NotesForStudentsTabPage {
  readonly page: Page;
  readonly navigatetoNotesForStudentsTab: Locator;
  readonly templateDropdown: Locator;
  readonly loadbutton: Locator;
  readonly addnewButton: Locator;
  readonly editorControl: Locator;
  readonly commentsRichTextEdit: Locator;
  readonly textEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigatetoNotesForStudentsTab = page.locator("//span[contains(text(),\'Notes For Students\')]");
    this.templateDropdown = page.locator('#tabCourseCode_tmpl1_usrNotesForStudents_cddTemplate');
    this.loadbutton = page.locator('#tabCourseCode_tmpl1_usrNotesForStudents_btnLoad');
    this.addnewButton = page.locator('#tabCourseCode_tmpl1_usrNotesForStudents_btnAddNew');
    this.editorControl = page.locator('#tabCourseCode_tmpl1_usrNotesForStudents_KPIRadNotesForStudents_contentIframe');
    this.commentsRichTextEdit = page.locator("//iframe[@id=\'tabCourseCode_tmpl1_usrNotesForStudents_KPIRadNotesForStudents_contentIframe\']");
    this.textEdit = page.locator("//body");
  }

  async selectAtTemplate(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTraining.courseEntry.notesForStudentsTab.UITemplateDropdown, BaseData.getTrainingModuleValue("Template"));
  }

  async verifyAtTemplateDropdown(): Promise<void> {
    // String dropDwonSelectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapTraining.courseEntry.notesForStudentsTab.UITemplateDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Template"), dropDwonSelectedItem);
  }

  async clickLoadButton(): Promise<void> {
    // uIMapTraining.courseEntry.notesForStudentsTab.UILoadbutton.click();
  }

  async verifyAtEnteredText(): Promise<void> {
    // objectIdentification.windowHandle.switchToFrame(uIMapTraining.courseEntry.notesForStudentsTab.uICommentsRichTextEdit);
    // String text = uIMapTraining.courseEntry.notesForStudentsTab.uITextEdit.getText();
    // System.out.println(text);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Text"), text);
  }

}

export class InstructorNotesTabPage {
  readonly page: Page;
  readonly updateDateTextbox: Locator;
  readonly updateTimeTextbox: Locator;
  readonly updatedByTxtbox: Locator;
  readonly duratioNoTxtbox: Locator;
  readonly durationTypeDropdown: Locator;
  readonly commentsTextbox: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.updateDateTextbox = page.locator('#dtDate_Date_KPIDttmCtrl');
    this.updateTimeTextbox = page.locator("//table[@id =\'dtDate_Time\']//input");
    this.updatedByTxtbox = page.locator('#lupPFNbr_CodeValue');
    this.duratioNoTxtbox = page.locator('#txtDuration');
    this.durationTypeDropdown = page.locator('#cddDurationType_DropDown');
    this.commentsTextbox = page.locator('#txtLog');
    this.saveButton = page.locator('#cmdSave');
  }

  async taboutUpdatedDateAndTime(): Promise<void> {
    // uIMapTraining.courseEntry.instructorNotesTab.uIUpdateDateTextbox.sendKeys(Keys.TAB);
    // uIMapTraining.courseEntry.instructorNotesTab.uIUpdateTimeTextbox.sendKeys(Keys.TAB);
  }

  async taboutUpdatedByPF(): Promise<void> {
    // uIMapTraining.courseEntry.instructorNotesTab.uIUpdatedByTxtbox.sendKeys(Keys.TAB);
  }

  async enterAtComments(): Promise<void> {
    // uIMapTraining.courseEntry.instructorNotesTab.uICommentsTextbox.sendKeys(BaseData.getTrainingModuleValue("Comments"));
  }

  async clickSave(): Promise<void> {
    // uIMapTraining.courseEntry.instructorNotesTab.uISaveButton.click();
  }

}

export class CourseCEUsTabPage {
  readonly page: Page;
  readonly navigatetoCEUsTab: Locator;
  readonly certificationDropdown: Locator;
  readonly applyCredittoallCheckbox: Locator;
  readonly earnedCEUsTxtbox: Locator;
  readonly creditedHoursTxtbox: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly cEUsgridTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigatetoCEUsTab = page.locator("//span[text()=\'CEUs\']");
    this.certificationDropdown = page.locator('#tabCourseCode_tmpl5_usrCourseCEU_cddCertification_DropDown');
    this.applyCredittoallCheckbox = page.locator('#tabCourseCode_tmpl5_usrCourseCEU_chkApplyToAllStudents');
    this.earnedCEUsTxtbox = page.locator('#tabCourseCode_tmpl5_usrCourseCEU_txtCEUsEarned');
    this.creditedHoursTxtbox = page.locator('#tabCourseCode_tmpl5_usrCourseCEU_txtHoursCredited');
    this.addButton = page.locator('#tabCourseCode_tmpl5_usrCourseCEU_imgAdd');
    this.clearButton = page.locator('#tabCourseCode_tmpl5_usrCourseCEU_imgClear');
    this.cEUsgridTable = page.locator('#tabCourseCode_tmpl5_usrCourseCEU_grdCourseCEUs');
  }

  async selectAtCertification(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTraining.courseEntry.courseCEUsTab.UICertificationDropdown,
    // BaseData.getTrainingModuleValue("Certification"));
  }

  async enterAtCEUsEarned(): Promise<void> {
    // uIMapTraining.courseEntry.courseCEUsTab.UIEarnedCEUsTxtbox.sendKeys(BaseData.getTrainingModuleValue("CEUsEarned"));
  }

  async enterAtHoursCredited(): Promise<void> {
    // uIMapTraining.courseEntry.courseCEUsTab.UICreditedHoursTxtbox.sendKeys(BaseData.getTrainingModuleValue("HoursCredited"));
  }

  async clickAdd(): Promise<void> {
    // uIMapTraining.courseEntry.courseCEUsTab.UIAddButton.click();
  }

  async verifyGridRowByAtCertificate(): Promise<void> {
    // String name = objectIdentification.manualIdentify
    // .getGridCell(uIMapTraining.courseEntry.courseCEUsTab.UICEUsgridTable,
    // BaseData.getTrainingModuleValue("Certification"), "Certificate")
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(name,BaseData.getTrainingModuleValue("Certification"));
  }

  async deleteAtRecordByCertification(): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerTextWithoutContains
    // (uIMapTraining.courseEntry.courseCEUsTab.UICEUsgridTable,BaseData.getTrainingModuleValue("Certificate"));
    // popup.confirm.acceptPopup();
  }

  async selectAtCertificationInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapTraining.courseEntry.courseCEUsTab.UICEUsgridTable,
    // BaseData.getTrainingModuleValue("Certification"));
  }

}

export class OtherSettingsTabPage {
  readonly page: Page;
  readonly navigatetoOtherSettingsTab: Locator;
  readonly costperEmployeeTxtbox: Locator;
  readonly costperGuestTxtbox: Locator;
  readonly enrollmentCheckbox: Locator;
  readonly completionCheckbox: Locator;
  readonly course1Dropdown: Locator;
  readonly course2Dropdown: Locator;
  readonly course3Dropdown: Locator;
  readonly course4Dropdown: Locator;
  readonly addSpecialSkillDropdown: Locator;
  readonly satisfyRequalificationDropdown: Locator;
  readonly evaluationMandatoryRadioButton: Locator;
  readonly evaluationOptionalRadioButton: Locator;
  readonly evaluationNARadioButton: Locator;
  readonly passScoreGreaterThanTxtbox: Locator;
  readonly maintainOnlineTestFormButton: Locator;
  readonly templateDropdown: Locator;
  readonly text1Txtbox: Locator;
  readonly text2Txtbox: Locator;
  readonly text3Txtbox: Locator;
  readonly text4Txtbox: Locator;
  readonly text5Txtbox: Locator;
  readonly previewButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigatetoOtherSettingsTab = page.locator("//div[@id=\'tabCourseCode\'//span[contains(text(),\'Other Settings\')");
    this.costperEmployeeTxtbox = page.locator('#tabCourseCode_tmpl4_usrOtherSettings_txtCostPerEmployee');
    this.costperGuestTxtbox = page.locator('#tabCourseCode_tmpl4_usrOtherSettings_txtCostPerGuest');
    this.enrollmentCheckbox = page.locator('#tabCourseCode_tmpl4_usrOtherSettings_chkEnroll');
    this.completionCheckbox = page.locator('#tabCourseCode_tmpl4_usrOtherSettings_chkCompletion');
    this.course1Dropdown = page.locator('#tabCourseCode_tmpl4_usrOtherSettings_cddCourse1_DropDown');
    this.course2Dropdown = page.locator('#tabCourseCode_tmpl4_usrOtherSettings_cddCourse2_DropDown');
    this.course3Dropdown = page.locator('#tabCourseCode_tmpl4_usrOtherSettings_cddCourse3_DropDown');
    this.course4Dropdown = page.locator('#tabCourseCode_tmpl4_usrOtherSettings_cddCourse4_DropDown');
    this.addSpecialSkillDropdown = page.locator('#tabCourseCode_tmpl4_usrOtherSettings_cddSpecialSkills_DropDown');
    this.satisfyRequalificationDropdown = page.locator('#tabCourseCode_tmpl4_usrOtherSettings_cddRequalCourse_DropDown');
    this.evaluationMandatoryRadioButton = page.locator('#tabCourseCode_tmpl4_usrOtherSettings_rbMandatory');
    this.evaluationOptionalRadioButton = page.locator('#tabCourseCode_tmpl4_usrOtherSettings_rbOptional');
    this.evaluationNARadioButton = page.locator('#tabCourseCode_tmpl4_usrOtherSettings_rbNA');
    this.passScoreGreaterThanTxtbox = page.locator('#tabCourseCode_tmpl4_usrOtherSettings_txtScore');
    this.maintainOnlineTestFormButton = page.locator('#tabCourseCode_tmpl4_usrOtherSettings_cmdMaitainOnlineTestForm');
    this.templateDropdown = page.locator('#tabCourseCode_tmpl4_usrOtherSettings_cddCertificateTemplate');
    this.text1Txtbox = page.locator('#tabCourseCode_tmpl4_usrOtherSettings_txtText1');
    this.text2Txtbox = page.locator('#tabCourseCode_tmpl4_usrOtherSettings_txtText2');
    this.text3Txtbox = page.locator('#tabCourseCode_tmpl4_usrOtherSettings_txtText3');
    this.text4Txtbox = page.locator('#tabCourseCode_tmpl4_usrOtherSettings_txtText4');
    this.text5Txtbox = page.locator('#tabCourseCode_tmpl4_usrOtherSettings_txtText5');
    this.previewButton = page.locator('#tabCourseCode_tmpl4_usrOtherSettings_cmdPreview');
  }

}

export class CourseEntryAttachmentTabPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

}

export class ClassEntryPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly saveandAddnewButton: Locator;
  readonly printButton: Locator;
  readonly refreshButton: Locator;
  readonly deleteIcon: Locator;
  readonly activityLogButton: Locator;
  readonly entryDateTxtbox: Locator;
  readonly noOfSutendtsTxtbox: Locator;
  readonly noOfSlotsRemainingTxtbox: Locator;
  readonly trainingCategoryDropdown: Locator;
  readonly trainingTypeDropdown: Locator;
  readonly courseNoTxtbox: Locator;
  readonly courseTitleTxtbox: Locator;
  readonly trainingFromDateTxtbox: Locator;
  readonly trainingFromTimeTxtbox: Locator;
  readonly trainingToDateTxtbox: Locator;
  readonly trainingToTimeTxtbox: Locator;
  readonly courseHoursTxtbox: Locator;
  readonly multidayScheduleButton: Locator;
  readonly duplicatedButton: Locator;
  readonly signUpButton: Locator;
  readonly publishToButton: Locator;
  readonly cancelTheClassButton: Locator;
  readonly showInCalendarCheckbox: Locator;
  readonly doNotPublishCheckbox: Locator;
  readonly employeesOnlyCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.saveandAddnewButton = page.locator('#cmdSaveNAddNew');
    this.printButton = page.locator('#cmdPrint');
    this.refreshButton = page.locator('#cmdRefresh');
    this.deleteIcon = page.locator('#cmdDelete');
    this.activityLogButton = page.locator('#cmdActivity');
    this.entryDateTxtbox = page.locator('#dtEntryDate_KPIDttmCtrl');
    this.noOfSutendtsTxtbox = page.locator('#txtNoStudents');
    this.noOfSlotsRemainingTxtbox = page.locator('#txtRemaining');
    this.trainingCategoryDropdown = page.locator('#cddTrainingCategory_DropDown');
    this.trainingTypeDropdown = page.locator('#cddTrainingType_DropDown');
    this.courseNoTxtbox = page.locator('#lupCourseID_CodeValue');
    this.courseTitleTxtbox = page.locator('#txtTitle');
    this.trainingFromDateTxtbox = page.locator('#dttmTrainingSchedule_Date_KPIDttmCtrl');
    this.trainingFromTimeTxtbox = page.locator("//table[@id=\'dttmTrainingSchedule_Time\'//input");
    this.trainingToDateTxtbox = page.locator('#dttmTo_Date_KPIDttmCtrl');
    this.trainingToTimeTxtbox = page.locator("//table[@id=\'dttmTo_Time\'//input");
    this.courseHoursTxtbox = page.locator('#txtCourseHours');
    this.multidayScheduleButton = page.locator('#cmdTrainingSchedule');
    this.duplicatedButton = page.locator('#cmdDuplicate');
    this.signUpButton = page.locator('#BtnSignUp');
    this.publishToButton = page.locator('#cmdPublishTo');
    this.cancelTheClassButton = page.locator('#cmdCancelClass');
    this.showInCalendarCheckbox = page.locator('#ChkShwSchCal');
    this.doNotPublishCheckbox = page.locator('#chkPublish');
    this.employeesOnlyCheckbox = page.locator('#chkEmployees');
  }

  async switchToTrainingDetailTab(): Promise<void> {
    // uIMapFRPersonnel.trainingClassEntryWindow.uITrainingDetailTab.click();
  }

  async switchToRequestTab(): Promise<void> {
    // uIMapFRPersonnel.trainingClassEntryWindow.uIRequestTab.click();
  }

  async selectTrainingCategoryAsPolice(): Promise<void> {
    // uIMapFRPersonnel.trainingClassEntryWindow.uITrainingCategoryComboBox.sendKeys("Police");
  }

  async selectTrainingTypeAsSeleniumTraining(): Promise<void> {
    // uIMapFRPersonnel.trainingClassEntryWindow.uITrainingTypeComboBox.sendKeys("Selenium Training");
  }

  async enterEntryDate(): Promise<void> {
    // uIMapFRPersonnel.trainingClassEntryWindow.uIEntryDateEdit.click();
    // uIMapFRPersonnel.trainingClassEntryWindow.uIEntryDateEdit.sendKeys(Keys.TAB);
  }

  async enterNoOfStudentsAs1(): Promise<void> {
    // uIMapFRPersonnel.trainingClassEntryWindow.uINoOfStudentEdit.sendKeys("1");
  }

  async enterCourseNoAs1000(): Promise<void> {
    // uIMapFRPersonnel.trainingClassEntryWindow.uICourseNoEdit.sendKeys("1000");
    // uIMapFRPersonnel.trainingClassEntryWindow.uICourseNoEdit.sendKeys(Keys.TAB);
  }

  async enterTrainingScheduleDate(): Promise<void> {
    // uIMapFRPersonnel.trainingClassEntryWindow.uIEnterTrainingScheduleDateEdit.click();
    // uIMapFRPersonnel.trainingClassEntryWindow.uIEnterTrainingScheduleDateEdit.sendKeys(Keys.TAB);
  }

  async enterTrainingScheduleTime(): Promise<void> {
    // uIMapFRPersonnel.trainingClassEntryWindow.uIEnterTrainingScheduleTimeEdit
    // .sendKeys(Randomized.getCurrentTime("HH:mm"));
  }

  async enterToDate(): Promise<void> {
    // uIMapFRPersonnel.trainingClassEntryWindow.uIEnterToDateEdit.sendKeys(Randomized.getCurrentDate());
    // uIMapFRPersonnel.trainingClassEntryWindow.uIEnterToDateEdit.sendKeys(Keys.TAB);
  }

  async enterToTime(): Promise<void> {
    // uIMapFRPersonnel.trainingClassEntryWindow.uIEnterToTimeEdit
    // .sendKeys(Randomized.getFutureTimeByHours(2, "HH:mm"));
  }

  async save(): Promise<void> {
    // uIMapFRPersonnel.trainingClassEntryWindow.uISaveButton.click();
    // popup.confirm.yes();
    // Playback.popupThreadWait();
  }

  async closeTrainingClassEntryScreen(): Promise<void> {
    // uIMapFRPersonnel.trainingClassEntryWindow.driver.close();
  }

  async clickSignUpButton(): Promise<void> {
    // uIMapFRPersonnel.trainingClassEntryWindow.uISignUpButton.click();
  }

  async VerifyAddtionSucessfullMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapFRPersonnel.trainingClassEntryWindow.uIBottomStatusLabel.getText(),
    // "1002 - Addition Successful");
  }

  async VerifyUpdateSucessfullMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapFRPersonnel.trainingClassEntryWindow.uIBottomStatusLabel.getText(),
    // "1003 - Update Successful");
  }

  async readClassNo(): Promise<string> {
    // String Year = uIMapFRPersonnel.trainingClassEntryWindow.uIClassYear.getAttribute("value");
    // String Number = uIMapFRPersonnel.trainingClassEntryWindow.uIClassNumber.getAttribute("value");
    // String ClassNumber = Year + "-" + Number;
    // return ClassNumber;
  }

  async verifyAtTrainingCategory(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("TrainingCategory"),objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapFRPersonnel.trainingClassEntryWindow.uITrainingCategoryComboBox));
  }

  async verifyAtCourse(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Course"),uIMapTraining.trainingClassEntry.uICourseNoTxtbox.getAttribute("value"));
  }

  async switchToCourseDescriptionTab(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uICourseDescriptionTab.click();
  }

  async verifyJurisAsPX(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("PX - ProPhoenix",objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapTraining.trainingClassEntry.uIJuris));
  }

  async switchToNotesForStudentsTab(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uINotesforStudentsTab.click();
  }

  async saveNdClose(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uISaveNCloseButton.click();
    // popup.confirm.yes();
  }

  async switchToStudentsTab(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uIStudentsTab.click();
  }

}

export class ClassEntryStudentsTabPage {
  readonly page: Page;
  readonly navigatetoStudentsTab: Locator;
  readonly employeePFNoTxtbox: Locator;
  readonly agencytxtbox: Locator;
  readonly nameDropdown: Locator;
  readonly addNewButton: Locator;
  readonly addMultipleEmployeesButton: Locator;
  readonly printTrainingCertificateButton: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly enableOnlineTestCheckbox: Locator;
  readonly selectAllCheckbox: Locator;
  readonly resultDropdown: Locator;
  readonly scoreTxtbox: Locator;
  readonly notesTxtbox: Locator;
  readonly applyButton: Locator;
  readonly notificationIcon: Locator;
  readonly gridTable: Locator;
  readonly employeePFNoTxtbox: Locator;
  readonly agencytxtbox: Locator;
  readonly nameDropdown: Locator;
  readonly addNewButton: Locator;
  readonly addMultipleEmployeesButton: Locator;
  readonly printTrainingCertificateButton: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly enableOnlineTestCheckbox: Locator;
  readonly selectAllCheckbox: Locator;
  readonly resultDropdown: Locator;
  readonly scoreTxtbox: Locator;
  readonly notesTxtbox: Locator;
  readonly applyButton: Locator;
  readonly notificationIcon: Locator;
  readonly gridTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigatetoStudentsTab = page.locator("//div[@id=\'tabUnit\'//span[contains(text(),\'Students\')");
    this.employeePFNoTxtbox = page.locator('#tabUnit_tmpl0_usrClassStudents_lupPF_CodeValue');
    this.agencytxtbox = page.locator('#tabUnit_tmpl0_usrClassStudents_lupORINbr_CodeValue');
    this.nameDropdown = page.locator('#tabUnit_tmpl0_usrClassStudents_cddSelectName_Input');
    this.addNewButton = page.locator('#tabUnit_tmpl0_usrClassStudents_cmdAddNew');
    this.addMultipleEmployeesButton = page.locator('#tabUnit_tmpl0_usrClassStudents_cmdAddEmployee');
    this.printTrainingCertificateButton = page.locator('#tabUnit_tmpl0_usrClassStudents_cmdPrintCertificate');
    this.addButton = page.locator('#tabUnit_tmpl0_usrClassStudents_imgAdd');
    this.clearButton = page.locator('#tabUnit_tmpl0_usrClassStudents_imgClear');
    this.enableOnlineTestCheckbox = page.locator('#tabUnit_tmpl0_usrClassStudents_lblOnlineTest');
    this.selectAllCheckbox = page.locator('#tabUnit_tmpl0_usrClassStudents_chkSelectAll');
    this.resultDropdown = page.locator('#tabUnit_tmpl0_usrClassStudents_cddResult_DropDown');
    this.scoreTxtbox = page.locator('#tabUnit_tmpl0_usrClassStudents_txtScore');
    this.notesTxtbox = page.locator('#tabUnit_tmpl0_usrClassStudents_txtNotes');
    this.applyButton = page.locator('#tabUnit_tmpl0_usrClassStudents_cmdApply');
    this.notificationIcon = page.locator('#tabUnit_tmpl0_usrClassStudents_cmdEmail');
    this.gridTable = page.locator('#tabUnit_tmpl0_usrClassStudents_grdStudentEnrolled');
    this.employeePFNoTxtbox = page.locator('#tabUnit_tmpl0_usrClassStudents_lupPF_CodeValue');
    this.agencytxtbox = page.locator('#tabUnit_tmpl0_usrClassStudents_lupORINbr_CodeValue');
    this.nameDropdown = page.locator('#tabUnit_tmpl0_usrClassStudents_cddSelectName_Input');
    this.addNewButton = page.locator('#tabUnit_tmpl0_usrClassStudents_cmdAddNew');
    this.addMultipleEmployeesButton = page.locator('#tabUnit_tmpl0_usrClassStudents_cmdAddEmployee');
    this.printTrainingCertificateButton = page.locator('#tabUnit_tmpl0_usrClassStudents_cmdPrintCertificate');
    this.addButton = page.locator('#tabUnit_tmpl0_usrClassStudents_imgAdd');
    this.clearButton = page.locator('#tabUnit_tmpl0_usrClassStudents_imgClear');
    this.enableOnlineTestCheckbox = page.locator('#tabUnit_tmpl0_usrClassStudents_lblOnlineTest');
    this.selectAllCheckbox = page.locator('#tabUnit_tmpl0_usrClassStudents_chkSelectAll');
    this.resultDropdown = page.locator('#tabUnit_tmpl0_usrClassStudents_cddResult_DropDown');
    this.scoreTxtbox = page.locator('#tabUnit_tmpl0_usrClassStudents_txtScore');
    this.notesTxtbox = page.locator('#tabUnit_tmpl0_usrClassStudents_txtNotes');
    this.applyButton = page.locator('#tabUnit_tmpl0_usrClassStudents_cmdApply');
    this.notificationIcon = page.locator('#tabUnit_tmpl0_usrClassStudents_cmdEmail');
    this.gridTable = page.locator('#tabUnit_tmpl0_usrClassStudents_grdStudentEnrolled');
  }

  async enterAtEmployeePF(): Promise<void> {
    // uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIEmployeePFNoTxtbox
    // .sendKeys(BaseData.getTrainingModuleValue("EmployeePF"));
  }

  async clickAddMultipleEmployees(): Promise<void> {
    // uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIAddMultipleEmployeesButton.click();
  }

  async selectAtPFCodeCheckBoxInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
    // uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIGridTable,
    // BaseData.getTrainingModuleValue("PFCode"));
  }

  async selectAtPFCode1CheckBoxInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
    // uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIGridTable,
    // BaseData.getTrainingModuleValue("PFCode1"));
  }

  async selectResultAsPass(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIResultDropdown, "Pass");
  }

  async enterAtScore(): Promise<void> {
    // uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIScoreTxtbox
    // .sendKeys(BaseData.getTrainingModuleValue("Score"));
  }

  async enterNotes(): Promise<void> {
    // uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIScoreTxtbox
    // .sendKeys(Randomized.randomAlphanumeric(20));
  }

  async clickApplyButton(): Promise<void> {
    // uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIApplyButton.click();
  }

  async verifyAtPFCodeInGrid(i: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIGridTable, "PF Code");
    // verify.ExpectedValueIsTrue(gridTableColumnValues.contains(BaseData.getTrainingModuleValue("PFCode" + i)),
    // "PF not available in grid -- > " + BaseData.getTrainingModuleValue("PFCode" + i));
  }

  async deleteAtRowByPFCode(): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerText
    // (uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIGridTable,BaseData.getTrainingModuleValue("PFCode"));
  }

  async clickGridHeaderByColumnName(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridHeaderColumnName
    // (uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIGridTable,BaseData.getTrainingModuleValue("ColumnName"));
  }

  async verifyAtPFCodeInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("EmployeePF"),objectIdentification.manualIdentify.getGridCell(uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIGridTable, BaseData.getTrainingModuleValue("EmployeePF"), "PF Code").getText());
  }

  async verifyAtPFCodeByNameInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("PFCode"),objectIdentification.manualIdentify.getGridCell(uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIGridTable, BaseData.getTrainingModuleValue("Name"), "PF Code").getText());
  }

  async verifyAtNameInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Name"),objectIdentification.manualIdentify.getGridCell(uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIGridTable, BaseData.getTrainingModuleValue("Name"), "Name").getText());
  }

  async selectAtPFCodeInGrid(): Promise<void> {
    // Playback.threadWait();
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIGridTable, BaseData.getTrainingModuleValue("PFCode"));
  }

  async clickAtEmailIconByNameInGrid(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIGridTable, BaseData.getTrainingModuleValue("Name"), "Name");
    // System.out.println(gridCell.getLocation());
    // gridCell.findElement(By.xpath("./..//td[contains(@title, 'Email')]")).click();
    // //verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Name"),objectIdentification.manualIdentify.getGridCell(uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIGridTable, BaseData.getTrainingModuleValue("Name"), "Name").getText());
  }

  async clickAddButton(): Promise<void> {
    // uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIAddButton.click();
  }

  async clickSelectAllCheckbox(): Promise<void> {
    // uIMapTraining.trainingClassEntry.classEntryStudentsTab.uISelectAllCheckbox.click();
  }

  async enterNotesMoreThan1024(): Promise<void> {
    // uIMapTraining.trainingClassEntry.classEntryStudentsTab.uINotesTxtbox
    // .sendKeys(Randomized.randomAlphanumeric(1030));
  }

  async verifyNotesCountAs1024(): Promise<void> {
    // String text  = uIMapTraining.trainingClassEntry.classEntryStudentsTab.uINotesTxtbox.getAttribute("value");
    // int count = text.length();
    // verify.ExpectedIntergerValueIsEqualToActual(count, 1024);
  }

  async verifyAtColumnValuesInGrid(jsonIndexValue: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIGridTable, BaseData.getTrainingModuleValue("ColumnName" + jsonIndexValue));
    // for(String  Value:gridTableColumnValues) {
    // verify.ExpectedPropertyValueIsEqual(Value,BaseData.getTrainingModuleValue("ColumnValue" + jsonIndexValue));
  }

  async verifyAtColumnValuesCountLessThan1024InGrid(jsonIndexValue: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIGridTable, BaseData.getTrainingModuleValue("ColumnName" + jsonIndexValue));
    // for (String cellValue : gridTableColumnValues) {
    // int actualCharCount = cellValue.length();
    // verify.ExpectedIntergerValueIsEqualToActual(actualCharCount, 1024);
  }

  async selectAtResult(jsonIndexValue: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIResultDropdown, BaseData.getTrainingModuleValue("Result" + jsonIndexValue));
  }

  async verifyScoreLessThanEqualTo6Digit(): Promise<void> {
    // String attribute = uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIScoreTxtbox.getAttribute("value");
    // int length = attribute.length();
    // verify.ExpectedValueIsTrue(length>=6);
  }

  async enterAtNotes(jsonIndexValue: number): Promise<void> {
    // uIMapTraining.trainingClassEntry.classEntryStudentsTab.uINotesTxtbox.sendKeys(BaseData.getTrainingModuleValue("Notes" + jsonIndexValue));
    // uIMapTraining.trainingClassEntry.classEntryStudentsTab.uINotesTxtbox.sendKeys(Keys.TAB);
  }

  async enterAtScore(jsonIndexValue: number): Promise<void> {
    // uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIScoreTxtbox
    // .sendKeys(BaseData.getTrainingModuleValue("Score" + jsonIndexValue));
  }

  async doubleClickRandomScoreByPFCodeInGrid(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIGridTable,
    // BaseData.getTrainingModuleValue("PFCode"), "Score");
    // objectIdentification.actionBuilder.DoubleClick(gridCell);
    // Playback.controlReadyThreadWait();
    // Playback.actionDriver.sendKeys(Keys.BACK_SPACE).build().perform();
    // Playback.controlReadyThreadWait();
    // Playback.actionDriver.sendKeys(Randomized.enterRandomNumbers(8)).build().perform();
    // Playback.controlReadyThreadWait();
    // Playback.actionDriver.sendKeys(Keys.TAB).build().perform();
  }

  async doubleClickRandomNotesByPFCodeInGrid(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(uIMapTraining.trainingClassEntry.classEntryStudentsTab.uIGridTable,
    // BaseData.getTrainingModuleValue("PFCode"), "Notes");
    // objectIdentification.actionBuilder.DoubleClick(gridCell);
    // Playback.actionDriver.sendKeys(Keys.BACK_SPACE).build().perform();
    // Playback.controlReadyThreadWait();
    // Playback.actionDriver.sendKeys(Randomized.randomAlphanumeric(1030)).build().perform();
    // Playback.controlReadyThreadWait();
    // Playback.actionDriver.sendKeys(Keys.TAB).build().perform();
  }

  async verify6071ScoreColumnOnlyAllow6DigitsAcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(6071) Score column only allow 6 digits.");
  }

  async verify6071NotesColumnOnlyAllow1024CharactersAcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(6071) Notes column only allow 1024 characters.");
  }

}

export class ClassEntryTrainingDetailTabPage {
  readonly page: Page;
  readonly navigatetoTrainingDetailTab: Locator;
  readonly methodOfInstructionDropdown: Locator;
  readonly facilityCodeTxtbox: Locator;
  readonly costPerEmployeeTxtbox: Locator;
  readonly costPerGuestTxtbox: Locator;
  readonly classCostTxtbox: Locator;
  readonly notesTxtbox: Locator;
  readonly qualificationPeriodDropdown: Locator;
  readonly requalifyByDateTxtbox: Locator;
  readonly enrollmentCheckbox: Locator;
  readonly completionCheckbox: Locator;
  readonly course1Dropdown: Locator;
  readonly course2Dropdown: Locator;
  readonly course3Dropdown: Locator;
  readonly course4Dropdown: Locator;
  readonly trainingFacilityEdit: Locator;
  readonly trainingFacilityLookupButton: Locator;
  readonly methodofInstructionComboBox: Locator;
  readonly costPerEmployeeEdit: Locator;
  readonly costPerGuestEdit: Locator;
  readonly notesEdit: Locator;
  readonly qualificationPeriodComboBox: Locator;
  readonly reQualifyByDateEdit: Locator;
  readonly enrollmentCheckBox: Locator;
  readonly methodOfInstructionDropdown: Locator;
  readonly facilityCodeTxtbox: Locator;
  readonly costPerEmployeeTxtbox: Locator;
  readonly costPerGuestTxtbox: Locator;
  readonly classCostTxtbox: Locator;
  readonly notesTxtbox: Locator;
  readonly qualificationPeriodDropdown: Locator;
  readonly requalifyByDateTxtbox: Locator;
  readonly enrollmentCheckbox: Locator;
  readonly completionCheckbox: Locator;
  readonly course1Dropdown: Locator;
  readonly course2Dropdown: Locator;
  readonly course3Dropdown: Locator;
  readonly course4Dropdown: Locator;
  readonly trainingFacilityEdit: Locator;
  readonly trainingFacilityLookupButton: Locator;
  readonly methodofInstructionComboBox: Locator;
  readonly costPerEmployeeEdit: Locator;
  readonly costPerGuestEdit: Locator;
  readonly notesEdit: Locator;
  readonly qualificationPeriodComboBox: Locator;
  readonly reQualifyByDateEdit: Locator;
  readonly enrollmentCheckBox: Locator;
  readonly locationName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigatetoTrainingDetailTab = page.locator("//div[@id=\'tabUnit\'//span[contains(text(),\'Training Detail\')");
    this.methodOfInstructionDropdown = page.locator('#tabUnit_tmpl2_usrTrainingDetails_cddMethodofInstruction_DropDown');
    this.facilityCodeTxtbox = page.locator('#tabUnit_tmpl2_usrTrainingDetails_lupTrainingFacility_CodeValue');
    this.costPerEmployeeTxtbox = page.locator('#tabUnit_tmpl2_usrTrainingDetails_curCostEmployee');
    this.costPerGuestTxtbox = page.locator('#tabUnit_tmpl2_usrTrainingDetails_curCostGuest');
    this.classCostTxtbox = page.locator('#tabUnit_tmpl2_usrTrainingDetails_curClassCost');
    this.notesTxtbox = page.locator('#tabUnit_tmpl2_usrTrainingDetails_txtNotes');
    this.qualificationPeriodDropdown = page.locator('#tabUnit_tmpl2_usrTrainingDetails_cddQualificationPeriod_DropDown');
    this.requalifyByDateTxtbox = page.locator('#tabUnit_tmpl2_usrTrainingDetails_txtReQualifyBy_KPIDttmCtrl');
    this.enrollmentCheckbox = page.locator('#tabUnit_tmpl2_usrTrainingDetails_chkEnrollment');
    this.completionCheckbox = page.locator('#tabUnit_tmpl2_usrTrainingDetails_chkCompletion');
    this.course1Dropdown = page.locator('#tabUnit_tmpl2_usrTrainingDetails_cddCourse1_DropDown');
    this.course2Dropdown = page.locator('#tabUnit_tmpl2_usrTrainingDetails_cddCourse2_DropDown');
    this.course3Dropdown = page.locator('#tabUnit_tmpl2_usrTrainingDetails_cddCourse3_DropDown');
    this.course4Dropdown = page.locator('#tabUnit_tmpl2_usrTrainingDetails_cddCourse4_DropDown');
    this.trainingFacilityEdit = page.locator('#tabUnit_tmpl2_usrTrainingDetails_lupTrainingFacility_CodeValue');
    this.trainingFacilityLookupButton = page.locator('#tabUnit_tmpl2_usrTrainingDetails_lupTrainingFacility_imgBtn');
    this.methodofInstructionComboBox = page.locator('#tabUnit_tmpl2_usrTrainingDetails_cddMethodofInstruction_DropDown');
    this.costPerEmployeeEdit = page.locator('#tabUnit_tmpl2_usrTrainingDetails_curCostEmployee');
    this.costPerGuestEdit = page.locator('#tabUnit_tmpl2_usrTrainingDetails_curCostGuest');
    this.notesEdit = page.locator('#tabUnit_tmpl2_usrTrainingDetails_txtNotes');
    this.qualificationPeriodComboBox = page.locator('#tabUnit_tmpl2_usrTrainingDetails_cddQualificationPeriod_DropDown');
    this.reQualifyByDateEdit = page.locator('#tabUnit_tmpl2_usrTrainingDetails_txtReQualifyBy_KPIDttmCtrl');
    this.enrollmentCheckBox = page.locator('#tabUnit_tmpl2_usrTrainingDetails_chkEnrollment');
    this.methodOfInstructionDropdown = page.locator('#tabUnit_tmpl2_usrTrainingDetails_cddMethodofInstruction_DropDown');
    this.facilityCodeTxtbox = page.locator('#tabUnit_tmpl2_usrTrainingDetails_lupTrainingFacility_CodeValue');
    this.costPerEmployeeTxtbox = page.locator('#tabUnit_tmpl2_usrTrainingDetails_curCostEmployee');
    this.costPerGuestTxtbox = page.locator('#tabUnit_tmpl2_usrTrainingDetails_curCostGuest');
    this.classCostTxtbox = page.locator('#tabUnit_tmpl2_usrTrainingDetails_curClassCost');
    this.notesTxtbox = page.locator('#tabUnit_tmpl2_usrTrainingDetails_txtNotes');
    this.qualificationPeriodDropdown = page.locator('#tabUnit_tmpl2_usrTrainingDetails_cddQualificationPeriod_DropDown');
    this.requalifyByDateTxtbox = page.locator('#tabUnit_tmpl2_usrTrainingDetails_txtReQualifyBy_KPIDttmCtrl');
    this.enrollmentCheckbox = page.locator('#tabUnit_tmpl2_usrTrainingDetails_chkEnrollment');
    this.completionCheckbox = page.locator('#tabUnit_tmpl2_usrTrainingDetails_chkCompletion');
    this.course1Dropdown = page.locator('#tabUnit_tmpl2_usrTrainingDetails_cddCourse1_DropDown');
    this.course2Dropdown = page.locator('#tabUnit_tmpl2_usrTrainingDetails_cddCourse2_DropDown');
    this.course3Dropdown = page.locator('#tabUnit_tmpl2_usrTrainingDetails_cddCourse3_DropDown');
    this.course4Dropdown = page.locator('#tabUnit_tmpl2_usrTrainingDetails_cddCourse4_DropDown');
    this.trainingFacilityEdit = page.locator('#tabUnit_tmpl2_usrTrainingDetails_lupTrainingFacility_CodeValue');
    this.trainingFacilityLookupButton = page.locator('#tabUnit_tmpl2_usrTrainingDetails_lupTrainingFacility_imgBtn');
    this.methodofInstructionComboBox = page.locator('#tabUnit_tmpl2_usrTrainingDetails_cddMethodofInstruction_DropDown');
    this.costPerEmployeeEdit = page.locator('#tabUnit_tmpl2_usrTrainingDetails_curCostEmployee');
    this.costPerGuestEdit = page.locator('#tabUnit_tmpl2_usrTrainingDetails_curCostGuest');
    this.notesEdit = page.locator('#tabUnit_tmpl2_usrTrainingDetails_txtNotes');
    this.qualificationPeriodComboBox = page.locator('#tabUnit_tmpl2_usrTrainingDetails_cddQualificationPeriod_DropDown');
    this.reQualifyByDateEdit = page.locator('#tabUnit_tmpl2_usrTrainingDetails_txtReQualifyBy_KPIDttmCtrl');
    this.enrollmentCheckBox = page.locator('#tabUnit_tmpl2_usrTrainingDetails_chkEnrollment');
    this.locationName = page.locator('#tabUnit_tmpl2_usrTrainingDetails_txtLocationName');
  }

  async selectQualificationPeriodAsNone(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapTraining.trainingClassEntry.classEntryTrainingDetailTab.uIQualificationPeriodComboBox, 1);
  }

  async enterRequalifyByAsTomorrowDate(): Promise<void> {
    // uIMapTraining.trainingClassEntry.classEntryTrainingDetailTab.uIReQualifyByDateEdit
    // .sendKeys(Randomized.getFutureDate(1));
  }

  async verifyAtMethodOfInstruction(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("MethodOfInstruction"),objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapTraining.trainingClassEntry.classEntryTrainingDetailTab.uIMethodOfInstructionDropdown));
  }

  async verifyAtLocationName(): Promise<void> {
    // uIMapTraining.trainingClassEntry.classEntryTrainingDetailTab.uILocationName.getAttribute("value");
  }

}

export class ClassEntryInstructorsTabPage {
  readonly page: Page;
  readonly navigatetoInstructorsTab: Locator;
  readonly trainingFromDateTxtbox: Locator;
  readonly trainingToDateTxtbox: Locator;
  readonly instrcutorTxtbox: Locator;
  readonly certificationDropdown: Locator;
  readonly positionDropdown: Locator;
  readonly certificationExpiresDateTxtbox: Locator;
  readonly trainingHoursTxtbox: Locator;
  readonly commentsTxtbox: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly gridTable: Locator;
  readonly trainingFromDateTxtbox: Locator;
  readonly trainingToDateTxtbox: Locator;
  readonly instructorEdit: Locator;
  readonly certificationDropdown: Locator;
  readonly positionDropdown: Locator;
  readonly certificationExpiresDateTxtbox: Locator;
  readonly trainingHoursTxtbox: Locator;
  readonly commentsTxtbox: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly gridTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigatetoInstructorsTab = page.locator("//div[@id=\'tabUnit\'//span[contains(text(),\'Instructors\')");
    this.trainingFromDateTxtbox = page.locator('#tabUnit_tmpl3_usrInstructor_dtFromDate_KPIDttmCtrl');
    this.trainingToDateTxtbox = page.locator('#tabUnit_tmpl3_usrInstructor_dtToDate_KPIDttmCtrl');
    this.instrcutorTxtbox = page.locator('#tabUnit_tmpl3_usrInstructor_lupInstructor_CodeValue');
    this.certificationDropdown = page.locator('#tabUnit_tmpl3_usrInstructor_cddSubject_DropDown');
    this.positionDropdown = page.locator('#tabUnit_tmpl3_usrInstructor_cddPosition_DropDown');
    this.certificationExpiresDateTxtbox = page.locator('#tabUnit_tmpl3_usrInstructor_dtExpiryDttm_KPIDttmCtrl');
    this.trainingHoursTxtbox = page.locator('#tabUnit_tmpl3_usrInstructor_txtTrainHours');
    this.commentsTxtbox = page.locator('#tabUnit_tmpl3_usrInstructor_txtComments');
    this.addButton = page.locator('#tabUnit_tmpl3_usrInstructor_imgAdd');
    this.clearButton = page.locator('#tabUnit_tmpl3_usrInstructor_imgClear');
    this.gridTable = page.locator('#tabUnit_tmpl3_usrInstructor_grdInstructors');
    this.trainingFromDateTxtbox = page.locator('#tabUnit_tmpl3_usrInstructor_dtFromDate_KPIDttmCtrl');
    this.trainingToDateTxtbox = page.locator('#tabUnit_tmpl3_usrInstructor_dtToDate_KPIDttmCtrl');
    this.instructorEdit = page.locator('#tabUnit_tmpl3_usrInstructor_lupInstructor_CodeValue');
    this.certificationDropdown = page.locator('#tabUnit_tmpl3_usrInstructor_cddSubject_DropDown');
    this.positionDropdown = page.locator('#tabUnit_tmpl3_usrInstructor_cddPosition_DropDown');
    this.certificationExpiresDateTxtbox = page.locator('#tabUnit_tmpl3_usrInstructor_dtExpiryDttm_KPIDttmCtrl');
    this.trainingHoursTxtbox = page.locator('#tabUnit_tmpl3_usrInstructor_txtTrainHours');
    this.commentsTxtbox = page.locator('#tabUnit_tmpl3_usrInstructor_txtComments');
    this.addButton = page.locator('#tabUnit_tmpl3_usrInstructor_imgAdd');
    this.clearButton = page.locator('#tabUnit_tmpl3_usrInstructor_imgClear');
    this.gridTable = page.locator('#tabUnit_tmpl3_usrInstructor_grdInstructors');
  }

  async selectAtInstructorPF(): Promise<void> {
    // uIMapTraining.trainingClassEntry.classEntryInstructorsTab.uIInstructorEdit
    // .sendKeys(BaseData.getTrainingModuleValue("Instructor"));
    // uIMapTraining.trainingClassEntry.classEntryInstructorsTab.uIInstructorEdit.sendKeys(Keys.TAB);
  }

  async selectAtCertificationComboBox(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapTraining.trainingClassEntry.classEntryInstructorsTab.uICertificationDropdown,
    // BaseData.getTrainingModuleValue("Certification"));
    // uIMapTraining.trainingClassEntry.classEntryInstructorsTab.uICertificationDropdown.sendKeys(Keys.TAB);
  }

  async selectAtpositionComboBox(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapTraining.trainingClassEntry.classEntryInstructorsTab.uIPositionDropdown,
    // BaseData.getTrainingModuleValue("Position"));
    // uIMapTraining.trainingClassEntry.classEntryInstructorsTab.uIPositionDropdown.sendKeys(Keys.TAB);
  }

  async enterAtTrainingHours(): Promise<void> {
    // uIMapTraining.trainingClassEntry.classEntryInstructorsTab.uITrainingHoursTxtbox
    // .sendKeys(BaseData.getTrainingModuleValue("TrainingHours"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapTraining.trainingClassEntry.classEntryInstructorsTab.uIAddButton.click();
  }

  async verifyAtCertificationInGrid(): Promise<void> {
    // String certification = objectIdentification.manualIdentify.getGridCell(uIMapTraining.trainingClassEntry.classEntryInstructorsTab.uIGridTable,BaseData.getTrainingModuleValue("CertificationInGrid"), "Certification").getText();
    // verify.ExpectedPropertyValueIsEqual(certification, BaseData.getTrainingModuleValue("CertificationInGrid"));
  }

  async deleteAtRowByName(): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerTextWithoutContains
    // (uIMapTraining.trainingClassEntry.classEntryInstructorsTab.uIGridTable,BaseData.getTrainingModuleValue("Name"));
  }

  async clickGridHeaderByColumnName(): Promise<void> {
    // String[] split = uIMapTraining.trainingClassEntry.classEntryInstructorsTab.uIGridTable.getAttribute("id").split("_");
    // objectIdentification.manualIdentify.selectAtGridHeaderColumnName
    // (uIMapTraining.trainingClassEntry.classEntryInstructorsTab.uIGridTable,split[3],"Name");
  }

  async verifyAtNameInGrid(i: number): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridCell(uIMapTraining.trainingClassEntry.classEntryInstructorsTab.uIGridTable,
    // BaseData.getTrainingModuleValue("Name" + i), "Name")
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Name"+i), text);
  }

  async verifyAtPositionInGrid(i: number): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridCell(uIMapTraining.trainingClassEntry.classEntryInstructorsTab.uIGridTable,
    // BaseData.getTrainingModuleValue("Position" + i), "Position")
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Position"+i), text);
  }

  async verifyAtHoursInGrid(i: number): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridCell(uIMapTraining.trainingClassEntry.classEntryInstructorsTab.uIGridTable,
    // BaseData.getTrainingModuleValue("Hours" + i), "Hours")
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Hours"+i), text);
  }

  async verifyAtCertificationInGrid(i: number): Promise<void> {
    // String certification = objectIdentification.manualIdentify
    // .getGridCell(uIMapTraining.trainingClassEntry.classEntryInstructorsTab.uIGridTable,
    // BaseData.getTrainingModuleValue("Certification"+i), "Certification")
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Certification"+i), certification);
  }

  async verifyErrorPopupNotArises(): Promise<void> {
    // popup.acknowledge.verifyAcknowledgeWindowNotOpened("Error posting XML request");
  }

}

export class ClassEntryCourseDescriptionTabPage {
  readonly page: Page;
  readonly navigatetoInstructorsTab: Locator;
  readonly templateDropdown: Locator;
  readonly loadbutton: Locator;
  readonly addnewButton: Locator;
  readonly editorControl: Locator;
  readonly templateDropdown: Locator;
  readonly loadbutton: Locator;
  readonly addnewButton: Locator;
  readonly editorControl: Locator;
  readonly convertToUppercaseIcon: Locator;
  readonly textEdit: Locator;
  readonly convertToLowercaseIcon: Locator;
  readonly templateDropDown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigatetoInstructorsTab = page.locator("//div[@id=\'tabUnit\'//span[contains(text(),\'Course Description\')");
    this.templateDropdown = page.locator('#tabUnit_tmpl3_usrInstructor_dtFromDate_KPIDttmCtrl');
    this.loadbutton = page.locator('#tabUnit_tmpl3_usrInstructor_dtToDate_KPIDttmCtrl');
    this.addnewButton = page.locator('#tabUnit_tmpl3_usrInstructor_lupInstructor_CodeValue');
    this.editorControl = page.locator('#tabUnit_tmpl5_usrCourseDescription_KPIRadCourseDescription_contentIframe');
    this.templateDropdown = page.locator('#tabUnit_tmpl3_usrInstructor_dtFromDate_KPIDttmCtrl');
    this.loadbutton = page.locator('#tabCourseCode_tmpl0_usrCourseDescription_btnLoad');
    this.addnewButton = page.locator('#tabUnit_tmpl3_usrInstructor_lupInstructor_CodeValue');
    this.editorControl = page.locator('#tabUnit_tmpl5_usrCourseDescription_KPIRadCourseDescription_contentIframe');
    this.convertToUppercaseIcon = page.locator("//span[@class=\'ConvertToUpper\']");
    this.textEdit = page.locator("//body");
    this.convertToLowercaseIcon = page.locator("//span[@class=\'ConvertToLower\']");
    this.templateDropDown = page.locator('#tabCourseCode_tmpl0_usrCourseDescription_cddTemplate');
  }

  async clickConvertToUppercaseIcon(): Promise<void> {
    // uIMapTraining.trainingClassEntry.classEntryCourseDescriptionTab.uIConvertToUppercaseIcon.click();
  }

  async clickConvertToLowercaseIcon(): Promise<void> {
    // uIMapTraining.trainingClassEntry.classEntryCourseDescriptionTab.uIConvertToLowercaseIcon.click();
  }

  async selectAllText(): Promise<void> {
    // WebElement frame = Playback.driver.findElement(
    // By.xpath("//iframe[@id='tabUnit_tmpl5_usrCourseDescription_KPIRadCourseDescription_contentIframe']"));
    // Playback.driver.switchTo().frame(frame);
    // uIMapTraining.trainingClassEntry.classEntryCourseDescriptionTab.uITextEdit.click();
    // Actions actions = new Actions(Playback.driver);
    // actions.click(uIMapTraining.trainingClassEntry.classEntryCourseDescriptionTab.uITextEdit).keyDown(Keys.CONTROL).sendKeys("a")
    // .sendKeys("a").keyUp(Keys.CONTROL).perform();
  }

}

export class ClassEntryNotesForStudentsTabPage {
  readonly page: Page;
  readonly navigatetoNotesforStudentsTab: Locator;
  readonly templateDropdown: Locator;
  readonly loadbutton: Locator;
  readonly addnewButton: Locator;
  readonly editorControl: Locator;
  readonly templateDropdown: Locator;
  readonly loadbutton: Locator;
  readonly addnewButton: Locator;
  readonly editorControl: Locator;
  readonly convertToUppercaseIcon: Locator;
  readonly textEdit: Locator;
  readonly convertToLowercaseIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigatetoNotesforStudentsTab = page.locator("//div[@id=\'tabUnit\'//span[contains(text(),\'Notes For Students\')");
    this.templateDropdown = page.locator('#tabUnit_tmpl6_NotesStudent_cddTemplate');
    this.loadbutton = page.locator('#tabUnit_tmpl6_NotesStudent_btnLoad');
    this.addnewButton = page.locator('#tabUnit_tmpl6_NotesStudent_btnAddNew');
    this.editorControl = page.locator('#tabUnit_tmpl6_NotesStudent_KPIRadNotesForStudents_contentIframe');
    this.templateDropdown = page.locator('#tabUnit_tmpl6_NotesStudent_cddTemplate');
    this.loadbutton = page.locator('#tabUnit_tmpl6_NotesStudent_btnLoad');
    this.addnewButton = page.locator('#tabUnit_tmpl6_NotesStudent_btnAddNew');
    this.editorControl = page.locator('#tabUnit_tmpl6_NotesStudent_KPIRadNotesForStudents_contentIframe');
    this.convertToUppercaseIcon = page.locator("(//span[@class=\'ConvertToUpper\'])[2]");
    this.textEdit = page.locator("//body");
    this.convertToLowercaseIcon = page.locator("(//span[@class=\'ConvertToLower\'])[2]");
  }

  async clickConvertToUppercaseIcon(): Promise<void> {
    // uIMapTraining.trainingClassEntry.classEntryNotesForStudentsTab.uIConvertToUppercaseIcon.click();
  }

  async clickConvertToLowercaseIcon(): Promise<void> {
    // uIMapTraining.trainingClassEntry.classEntryNotesForStudentsTab.uIConvertToLowercaseIcon.click();
  }

  async selectAllText(): Promise<void> {
    // WebElement frame = Playback.driver.findElement(
    // By.xpath("//iframe[@id='tabUnit_tmpl6_NotesStudent_KPIRadNotesForStudents_contentIframe']"));
    // Playback.driver.switchTo().frame(frame);
    // uIMapTraining.trainingClassEntry.classEntryNotesForStudentsTab.uITextEdit.click();
    // Actions actions = new Actions(Playback.driver);
    // actions.click(uIMapTraining.trainingClassEntry.classEntryCourseDescriptionTab.uITextEdit).keyDown(Keys.CONTROL).sendKeys("a")
    // .sendKeys("a").keyUp(Keys.CONTROL).perform();
  }

}

export class ClassEntryInstructorNotesTabPage {
  readonly page: Page;
  readonly navigatetoInstructorNotesTab: Locator;
  readonly updateDateTextbox: Locator;
  readonly updateTimeTextbox: Locator;
  readonly updatedByTxtbox: Locator;
  readonly duratioNoTxtbox: Locator;
  readonly durationTypeDropdown: Locator;
  readonly commentsTextbox: Locator;
  readonly saveButton: Locator;
  readonly updateDateTextbox: Locator;
  readonly updateTimeTextbox: Locator;
  readonly updatedByTxtbox: Locator;
  readonly duratioNoTxtbox: Locator;
  readonly durationTypeDropdown: Locator;
  readonly commentsTextbox: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigatetoInstructorNotesTab = page.locator("//div[@id=\'tabUnit\'//span[contains(text(),\'Instructor Notes\')");
    this.updateDateTextbox = page.locator('#dtDate_Date_KPIDttmCtrl');
    this.updateTimeTextbox = page.locator("//table[@id = \'dtDate_Time\' //input");
    this.updatedByTxtbox = page.locator('#lupPFNbr_CodeValue');
    this.duratioNoTxtbox = page.locator('#txtDuration');
    this.durationTypeDropdown = page.locator('#cddDurationType_DropDown');
    this.commentsTextbox = page.locator('#txtLog');
    this.saveButton = page.locator('#cmdSave');
    this.updateDateTextbox = page.locator('#dtDate_Date_KPIDttmCtrl');
    this.updateTimeTextbox = page.locator("//table[@id = \'dtDate_Time\' //input");
    this.updatedByTxtbox = page.locator('#lupPFNbr_CodeValue');
    this.duratioNoTxtbox = page.locator('#txtDuration');
    this.durationTypeDropdown = page.locator('#cddDurationType_DropDown');
    this.commentsTextbox = page.locator('#txtLog');
    this.saveButton = page.locator('#cmdSave');
  }

  async verifyInstructorFieldIsBlank(): Promise<void> {
    // boolean blank = uIMapTraining.trainingClassEntry.classEntryInstructorsTab.uIInstructorEdit.getText().isBlank();
    // verify.ExpectedValueIsTrue(blank);
  }

}

export class ClassEntryEvaluationsTabPage {
  readonly page: Page;
  readonly navigatetoEvaluationsTab: Locator;
  readonly gridTable: Locator;
  readonly gridTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigatetoEvaluationsTab = page.locator("//div[@id=\'tabUnit\'//span[contains(text(),\'Evaluations\')");
    this.gridTable = page.locator('#tabUnit_tmpl8_usrEvaluations_grdEvaluations');
    this.gridTable = page.locator('#tabUnit_tmpl8_usrEvaluations_grdEvaluations');
  }

}

export class ClassEntryCEUsTabPage {
  readonly page: Page;
  readonly navigatetoCEUsTab: Locator;
  readonly gridTable: Locator;
  readonly gridTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigatetoCEUsTab = page.locator("//div[@id=\'tabUnit\'//span[contains(text(),\'CEUs\')");
    this.gridTable = page.locator('#tabUnit_tmpl9_usrClassCEU_grdClassCEU');
    this.gridTable = page.locator('#tabUnit_tmpl9_usrClassCEU_grdClassCEU');
  }

}

export class ClassEntryAttachmentTabPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

}

export class TrainingEntryPage {
  readonly page: Page;
  readonly employeePFNoTxtbox: Locator;
  readonly agencyTxtbox: Locator;
  readonly nameDropdown: Locator;
  readonly statusDropdown: Locator;
  readonly trainingCategoryDropdown: Locator;
  readonly trainingTypeDropdown: Locator;
  readonly courseNoTxtbox: Locator;
  readonly courseTitleTxtbox: Locator;
  readonly trainingFromDateTxtbox: Locator;
  readonly trainingFromTimeTxtbox: Locator;
  readonly trainingToDateTxtbox: Locator;
  readonly trainingToTimeTxtbox: Locator;
  readonly courseHoursTxtbox: Locator;
  readonly multidayScheduleButton: Locator;
  readonly takeTheTestByButton: Locator;
  readonly completeEvaluationButton: Locator;
  readonly certificationImageIcon: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly saveandAddnewButton: Locator;
  readonly printButton: Locator;
  readonly refreshButton: Locator;
  readonly deleteIcon: Locator;
  readonly activityLogButton: Locator;
  readonly employeePfLookUpIcon: Locator;
  readonly bottomMessage: Locator;
  readonly trainingNo: Locator;
  readonly fromTimeUpArrow: Locator;
  readonly fromTimeDownArrow: Locator;
  readonly localCourseLookupIcon: Locator;
  readonly trainingTypeTreeViewHelpIcon: Locator;
  readonly navigatetoAttachmentTab: Locator;
  readonly navigatetoAdditionalPFTab: Locator;
  readonly navigatetoTrainingDetailTab: Locator;
  readonly navigatetoInstructorsTab: Locator;
  readonly navigatetoCEUsTab: Locator;
  readonly navigateToQAFormsTab: Locator;
  readonly jurisDropDown: Locator;
  readonly localCourseEdit: Locator;
  readonly capImage: Locator;
  readonly employeePFInfoIcon: Locator;
  readonly agencyDescriptionEdit: Locator;
  readonly employeePFDescriptionEdit: Locator;
  readonly fromTimeUpArrowForFire: Locator;
  readonly fromTimeDownArrowForFire: Locator;

  constructor(page: Page) {
    this.page = page;
    this.employeePFNoTxtbox = page.locator('#lupPFID_CodeValue');
    this.agencyTxtbox = page.locator('#lupORINbr_CodeValue');
    this.nameDropdown = page.locator('#ddlNameList');
    this.statusDropdown = page.locator('#cddStatus_DropDown');
    this.trainingCategoryDropdown = page.locator('#cddTrainingCategory_DropDown');
    this.trainingTypeDropdown = page.locator('#cddTrainingType_DropDown');
    this.courseNoTxtbox = page.locator('#lupCourseID_CodeValue');
    this.courseTitleTxtbox = page.locator('#txtTitle');
    this.trainingFromDateTxtbox = page.locator('#dtFrom_Date_KPIDttmCtrl');
    this.trainingFromTimeTxtbox = page.locator("//table[@id=\'dtFrom_Time\']//input");
    this.trainingToDateTxtbox = page.locator('#dtTo_Date_KPIDttmCtrl');
    this.trainingToTimeTxtbox = page.locator("//table[@id=\'dtTo_Time\']//input");
    this.courseHoursTxtbox = page.locator('#txtCourseHours');
    this.multidayScheduleButton = page.locator('#cmdTrainingSchedule');
    this.takeTheTestByButton = page.locator('#cmdTest');
    this.completeEvaluationButton = page.locator('#cmdEvaluation');
    this.certificationImageIcon = page.locator('#imgFrontView');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.saveandAddnewButton = page.locator('#cmdSaveNAddNew');
    this.printButton = page.locator('#cmdPrint');
    this.refreshButton = page.locator('#cmdRefresh');
    this.deleteIcon = page.locator('#cmdDelete');
    this.activityLogButton = page.locator('#cmdActivity');
    this.employeePfLookUpIcon = page.locator('#lupPFID_imgBtn');
    this.bottomMessage = page.locator("//td[@class=\'statusBar\']//b");
    this.trainingNo = page.locator('#txtTrainingNbr');
    this.fromTimeUpArrow = page.locator("//table[@id=\'dtFrom_Time\']//img[@class=\'igte_BlueThemeButtonImg\'and @alt=\'Spin Up\']");
    this.fromTimeDownArrow = page.locator("//table[@id=\'dtFrom_Time\']//img[@class=\'igte_BlueThemeButtonImg\'and @alt=\'Spin Down\']");
    this.localCourseLookupIcon = page.locator('#lupCourseID_imgBtn');
    this.trainingTypeTreeViewHelpIcon = page.locator('#ImgTreeSrc');
    this.navigatetoAttachmentTab = page.locator("//span[text()=\'Attachment\']");
    this.navigatetoAdditionalPFTab = page.locator("//span[text()=\'Additional PF\']");
    this.navigatetoTrainingDetailTab = page.locator("//span[text()=\'Training Detail\']");
    this.navigatetoInstructorsTab = page.locator("//span[text()=\'Instructors\']");
    this.navigatetoCEUsTab = page.locator("//span[text()=\'CEUs\']");
    this.navigateToQAFormsTab = page.locator("//span[text()=\'QA Forms\']");
    this.jurisDropDown = page.locator('#lstJuris');
    this.localCourseEdit = page.locator('#lupCourseID_CodeValue');
    this.capImage = page.locator('#imgFrontView');
    this.employeePFInfoIcon = page.locator('#lupPFID_cmdIncOnAddr');
    this.agencyDescriptionEdit = page.locator('#lupORINbr_CodeDescription');
    this.employeePFDescriptionEdit = page.locator('#lupPFID_CodeDescription');
    this.fromTimeUpArrowForFire = page.locator("//table[@id=\'dtFrom_Time\']//img[@class=\'igte_RedThemeButtonImg\'and @alt=\'Spin Up\']");
    this.fromTimeDownArrowForFire = page.locator("//table[@id=\'dtFrom_Time\']//img[@class=\'igte_RedThemeButtonImg\'and @alt=\'Spin Down\']");
  }

  async navigatetoTrainingDetailTab(): Promise<void> {
    // uIMapTraining.trainingEntry.uINavigatetoTrainingDetailTab.click();
  }

  async navigatetoInstructorsTab(): Promise<void> {
    // uIMapTraining.trainingEntry.UINavigatetoInstructorsTab.click();
  }

  async navigatetoAdditionalPFTab(): Promise<void> {
    // uIMapTraining.trainingEntry.UINavigatetoAdditionalPFTab.click();
  }

  async navigatetoCEUsTab(): Promise<void> {
    // uIMapTraining.trainingEntry.uINavigatetoCEUsTab.click();
  }

  async selectEmployeePf(): Promise<void> {
    // uIMapTraining.trainingEntry.uIEmployeePfLookUpIcon.click();
    // popup.switchToCodedSearch();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async selectTrainingCategory(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapTraining.trainingEntry.uITrainingCategoryDropdown);
  }

  async selectTrainingType(): Promise<void> {
    // uIMapTraining.trainingEntry.uITrainingTypeDropdown.click();
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapTraining.trainingEntry.uITrainingTypeDropdown);
  }

  async enterCourseTitle(): Promise<void> {
    // uIMapTraining.trainingEntry.uICourseTitleTxtbox.click();
    // uIMapTraining.trainingEntry.uICourseTitleTxtbox.sendKeys("Automation Test");
    // // uIMapTraining.trainingEntry.uICourseTitleTxtbox.sendKeys(randomized.getCurrentMonthFullName());
  }

  async tabFromDate(): Promise<void> {
    // uIMapTraining.trainingEntry.uITrainingFromDateTxtbox.click();
    // uIMapTraining.trainingEntry.uITrainingFromDateTxtbox.sendKeys(Keys.TAB);
    // Playback.gridLoadThreadWait();
  }

  async enterCourse(): Promise<void> {
    // uIMapTraining.trainingEntry.uICourseHoursTxtbox.sendKeys(randomized.randomNumberString(1));
    // uIMapTraining.trainingEntry.uICourseHoursTxtbox.sendKeys(Keys.TAB);
  }

  async saveScreen(): Promise<void> {
    // uIMapTraining.trainingEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verifyAdditionSuccessFullMessage(): Promise<void> {
    // try {
    // verify.ExpectedPropertyValueIsEqual(uIMapTraining.trainingEntry.uIBottomMessage.getText(),
    // "1002 - Addition Successful");
    // } catch (AssertionError e) {
    // verify.ExpectedPropertyValueIsEqual(uIMapTraining.trainingEntry.uIBottomMessage.getText(),
    // "1002 - Addition successful");
  }

  async verifyTrainingNoINotNull(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapTraining.trainingEntry.uITrainingNo.getAttribute("value").isEmpty());
  }

  async enterEmployeePFNo(): Promise<void> {
    // uIMapTraining.trainingEntry.uIEmployeePFNoTxtbox.sendKeys("FRMS");
    // uIMapTraining.trainingEntry.uIEmployeePFNoTxtbox.sendKeys(Keys.TAB);
  }

  async enterToDateAsFutureDate(): Promise<void> {
    // uIMapTraining.trainingEntry.uITrainingToDateTxtbox.sendKeys(randomized.getFutureDate(2));
    // uIMapTraining.trainingEntry.uITrainingToDateTxtbox.sendKeys(Keys.TAB);
  }

  async clickMultiScheduleButton(): Promise<void> {
    // uIMapTraining.trainingEntry.uIMultidayScheduleButton.click();
  }

  async verifyCourseHours(readTotalHours: string): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapTraining.trainingEntry.uICourseHoursTxtbox.getAttribute("value").contains(readTotalHours));
  }

  async verifyCourseDate(readStartDate: string, readEndDate: string): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(readStartDate,
    // uIMapTraining.trainingEntry.uITrainingFromDateTxtbox.getAttribute("value"));
    // verify.ExpectedPropertyValueIsEqual(readEndDate,
    // uIMapTraining.trainingEntry.uITrainingToDateTxtbox.getAttribute("value"));
  }

  async selectAtTrainingCategory(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapTraining.trainingEntry.uITrainingCategoryDropdown,
    // BaseData.getTrainingModuleValue("TrainingCategory"));
    // uIMapTraining.trainingEntry.uITrainingCategoryDropdown.sendKeys(Keys.TAB);
  }

  async selectAtTrainingType(): Promise<void> {
    // Playback.threadWait();
    // Playback.threadWait();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTraining.trainingEntry.uITrainingTypeDropdown,
    // BaseData.getTrainingModuleValue("TrainingType"));
    // uIMapTraining.trainingEntry.uITrainingTypeDropdown.sendKeys(Keys.TAB);
    // Playback.threadWait();
  }

  async enterToDateAsCurrentDate(): Promise<void> {
    // uIMapTraining.trainingEntry.uITrainingToDateTxtbox.click();
    // uIMapTraining.trainingEntry.uITrainingToDateTxtbox.sendKeys(Randomized.getCurrentDate());
    // Playback.controlReadyThreadWait();
  }

  async enterToTimeAs3HoursFromCurrentTime(): Promise<void> {
    // uIMapTraining.trainingEntry.uITrainingToTimeTxtbox.click();
    // uIMapTraining.trainingEntry.uITrainingToTimeTxtbox.sendKeys(Randomized.getFutureTimeByHours(3, "HH:mm"));
    // uIMapTraining.trainingEntry.uITrainingToTimeTxtbox.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async enterFromTimeAsCurrentTime(): Promise<void> {
    // uIMapTraining.trainingEntry.uITrainingFromTimeTxtbox.click();
    // uIMapTraining.trainingEntry.uITrainingFromTimeTxtbox.clear();
    // uIMapTraining.trainingEntry.uIFromTimeUpArrow.click();
    // uIMapTraining.trainingEntry.uIFromTimeDownArrow.click();
    // Playback.controlReadyThreadWait();
  }

  async clickLocalCourseLookupIcon(): Promise<void> {
    // uIMapTraining.trainingEntry.uILocalCourseLookupIcon.click();
  }

  async verifyAtTrainingCategory(): Promise<void> {
    // String Text = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapTraining.trainingEntry.uITrainingCategoryDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("TrainingCategory"), Text);
  }

  async verifyAtTrainingType(): Promise<void> {
    // String Text = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapTraining.trainingEntry.uITrainingTypeDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("TrainingType"), Text);
  }

  async verifyAtCourseTitle(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("CourseTitle"),uIMapTraining.trainingEntry.uICourseTitleTxtbox.getAttribute("value"));
  }

  async enterAtCourseHours(): Promise<void> {
    // uIMapTraining.trainingEntry.uICourseHoursTxtbox.sendKeys(BaseData.getTrainingModuleValue("CourseHours"));
    // uIMapTraining.trainingEntry.uICourseHoursTxtbox.sendKeys(Keys.TAB);
  }

  async verifyUpdateSuccessFullMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1003 - Update Successful", uIMapTraining.trainingEntry.uIBottomMessage.getText());
  }

  async selectAtTrainingCategory(count: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapTraining.trainingEntry.uITrainingCategoryDropdown,
    // BaseData.getTrainingModuleValue("TrainingCategory"+count));
  }

  async enterAtCourseTitle(): Promise<void> {
    // uIMapTraining.trainingEntry.uICourseTitleTxtbox.clear();
    // uIMapTraining.trainingEntry.uICourseTitleTxtbox.click();
    // uIMapTraining.trainingEntry.uICourseTitleTxtbox.sendKeys(BaseData.getTrainingModuleValue("CourseTitle"));
  }

  async enterAtEmployeePf(): Promise<void> {
    // uIMapTraining.trainingEntry.uIEmployeePFNoTxtbox.sendKeys(BaseData.getTrainingModuleValue("EmployeePF"));
    // uIMapTraining.trainingEntry.uIEmployeePFNoTxtbox.sendKeys(Keys.TAB);
  }

  async selectAtEmployeePf(): Promise<void> {
    // uIMapTraining.trainingEntry.uIEmployeePfLookUpIcon.click();
    // popup.switchToCodedSearch();
    // popup.kPICodedLookup.selectAtPFCode();
  }

  async verifyAtAgency(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Agency"),uIMapTraining.trainingEntry.uIAgencyTxtbox.getAttribute("value"));
  }

  async navigateToAttachmentTab(): Promise<void> {
    // uIMapTraining.trainingEntry.UINavigatetoAttachmentTab.click();
    // objectIdentification.windowHandle.switchToFrame("frmTxtAttachMgrEx.aspx?");
  }

  async verifyTabColorAsBlue(i: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("rgba(0, 0, 255, 1)", uIMapTraining.trainingEntry.driver
    // .findElement(By.xpath("//span[text()='" + BaseData.getTrainingModuleValue("TabName"+i) + "']")).getCssValue("color"));
  }

  async navigateToQAFormsTab(): Promise<void> {
    // uIMapTraining.trainingEntry.uINavigateToQAFormsTab.click();
  }

  async verifyAtJuris(): Promise<void> {
    // String Juris = objectIdentification.manualIdentify.getDropDownSelectedItem
    // (uIMapTraining.trainingEntry.uIJurisDropDown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Juris"), Juris);
  }

  async verifyAtEmployeePF(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("EmployeePF"),
    // uIMapTraining.trainingEntry.uIEmployeePFNoTxtbox.getAttribute("value"));
  }

  async verifyAtLocalCourse(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("LocalCourse"),
    // uIMapTraining.trainingEntry.uILocalCourseEdit.getAttribute("value"));
  }

  async verifyAtStatus(i: number): Promise<void> {
    // String dropDwonSelectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapTraining.trainingEntry.uIStatusDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Status" + i), dropDwonSelectedItem);
  }

  async enterAtAgency(): Promise<void> {
    // uIMapTraining.trainingEntry.uIAgencyTxtbox.sendKeys(BaseData.getTrainingModuleValue("Agency"));
    // uIMapTraining.trainingEntry.uIAgencyTxtbox.sendKeys(Keys.TAB);
  }

  async enterAtLocalCourse(): Promise<void> {
    // uIMapTraining.trainingEntry.uILocalCourseEdit.sendKeys(BaseData.getTrainingModuleValue("LocalCourse"));
    // uIMapTraining.trainingEntry.uILocalCourseEdit.sendKeys(Keys.TAB);
  }

  async verifyFromDateAsCurrentDate(): Promise<void> {
    // String attribute = uIMapTraining.trainingEntry.uITrainingFromDateTxtbox.getAttribute("value");
    // String currentDate = Randomized.getCurrentDate();
    // verify.ExpectedPropertyValueIsEqual(attribute, currentDate);
  }

  async verifyToDateAsFutureDate(): Promise<void> {
    // String attribute = uIMapTraining.trainingEntry.uITrainingToDateTxtbox.getAttribute("value");
    // String futureDate = Randomized.getFutureDate(2);
    // verify.ExpectedPropertyValueIsEqual(attribute, futureDate);
  }

  async verifyAtCourseHours(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("CourseHours"),
    // uIMapTraining.trainingEntry.uICourseHoursTxtbox.getAttribute("value"));
  }

}

export class TrainingDetailTabPage {
  readonly page: Page;
  readonly otherSchoolNoTxtbox: Locator;
  readonly methodOfInstructionDropdown: Locator;
  readonly facilityCodeTxtbox: Locator;
  readonly locationTxtbox: Locator;
  readonly costTxtbox: Locator;
  readonly mealsAndOtherCostsTxtbox: Locator;
  readonly methodOfPaymentDropdown: Locator;
  readonly costCenterDropdown: Locator;
  readonly enableOnlineTestCheckbox: Locator;
  readonly evaluationMandatoryRadioButton: Locator;
  readonly evaluationOptionalRadioButton: Locator;
  readonly evaluationNARadioButton: Locator;
  readonly resultDropdown: Locator;
  readonly scoreTxtbox: Locator;
  readonly updateAllPFRecordsCheckbox: Locator;
  readonly trainingWhileOnDutyRadioButton: Locator;
  readonly trainingWhileOffDutyRadioButton: Locator;
  readonly notesTxtbox: Locator;
  readonly qualificationPeriodDropdown: Locator;
  readonly requalifyByDateTxtbox: Locator;
  readonly trainingFacilityValueEdit: Locator;
  readonly costEdit: Locator;
  readonly addressEdit: Locator;
  readonly mealsAndOtherCostsedit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.otherSchoolNoTxtbox = page.locator('#lupPFID_CodeValue');
    this.methodOfInstructionDropdown = page.locator('#tabTrainEntry_tmpl0_TrainingDetail1_cddMethodofInstruction_DropDown');
    this.facilityCodeTxtbox = page.locator('#lupPFID_CodeValue');
    this.locationTxtbox = page.locator('#lupPFID_CodeValue');
    this.costTxtbox = page.locator('#lupPFID_CodeValue');
    this.mealsAndOtherCostsTxtbox = page.locator('#lupPFID_CodeValue');
    this.methodOfPaymentDropdown = page.locator('#tabTrainEntry_tmpl0_TrainingDetail1_cddMethodOfPayment_DropDown');
    this.costCenterDropdown = page.locator('#tabTrainEntry_tmpl0_TrainingDetail1_cddCostCenter_DropDown');
    this.enableOnlineTestCheckbox = page.locator('#cddStatus_DropDown');
    this.evaluationMandatoryRadioButton = page.locator('#tabTrainEntry_tmpl0_TrainingDetail1_rbMandatory');
    this.evaluationOptionalRadioButton = page.locator('#tabTrainEntry_tmpl0_TrainingDetail1_rbOptional');
    this.evaluationNARadioButton = page.locator('#cddStatus_DropDown');
    this.resultDropdown = page.locator('#tabTrainEntry_tmpl0_TrainingDetail1_cddResult_DropDown');
    this.scoreTxtbox = page.locator('#tabTrainEntry_tmpl0_TrainingDetail1_txtScore');
    this.updateAllPFRecordsCheckbox = page.locator('#cddStatus_DropDown');
    this.trainingWhileOnDutyRadioButton = page.locator('#tabTrainEntry_tmpl0_TrainingDetail1_rbOnDuty');
    this.trainingWhileOffDutyRadioButton = page.locator('#tabTrainEntry_tmpl0_TrainingDetail1_rbOffDuty');
    this.notesTxtbox = page.locator('#tabTrainEntry_tmpl0_TrainingDetail1_txtNotes');
    this.qualificationPeriodDropdown = page.locator('#tabTrainEntry_tmpl0_TrainingDetail1_cddQualificationPeriod_DropDown');
    this.requalifyByDateTxtbox = page.locator('#tabTrainEntry_tmpl0_TrainingDetail1_txtReQualifyBy_KPIDttmCtrl');
    this.trainingFacilityValueEdit = page.locator('#tabTrainEntry_tmpl0_TrainingDetail1_lupTrainingFacility_CodeValue');
    this.costEdit = page.locator('#tabTrainEntry_tmpl0_TrainingDetail1_curCost');
    this.addressEdit = page.locator('#tabTrainEntry_tmpl0_TrainingDetail1_txtAddressCtrl_txtFrom');
    this.mealsAndOtherCostsedit = page.locator('#tabTrainEntry_tmpl0_TrainingDetail1_curOtherCost');
  }

  async selectAtResult(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTraining.trainingEntry.trainingDetailTab.uIResultDropdown, BaseData.getTrainingModuleValue("Result"));
  }

  async enterAtScore(): Promise<void> {
    // uIMapTraining.trainingEntry.trainingDetailTab.uIScoreTxtbox.sendKeys(BaseData.getTrainingModuleValue("Score"));
  }

  async selectAtResult1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTraining.trainingEntry.trainingDetailTab.uIResultDropdown, BaseData.getTrainingModuleValue("Result1"));
  }

  async selectAtMethodOfInstruction(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTraining.trainingEntry.trainingDetailTab.uIMethodOfInstructionDropdown, BaseData.getTrainingModuleValue("MethodOfInstruction"));
  }

  async enterAtLocationName(): Promise<void> {
    // uIMapTraining.trainingEntry.trainingDetailTab.uILocationTxtbox.clear();
    // uIMapTraining.trainingEntry.trainingDetailTab.uILocationTxtbox.sendKeys(BaseData.getTrainingModuleValue("Location"));
  }

  async enterAtRequalify(): Promise<void> {
    // uIMapTraining.trainingEntry.trainingDetailTab.uIRequalifyByDateTxtbox.clear();
    // uIMapTraining.trainingEntry.trainingDetailTab.uIRequalifyByDateTxtbox.click();
    // uIMapTraining.trainingEntry.trainingDetailTab.uIRequalifyByDateTxtbox.sendKeys(BaseData.getPersonnelModuleValue("Requalify"));
  }

  async verifyAtMethodOfInstruction(): Promise<void> {
    // String dropDwonSelectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapTraining.trainingEntry.trainingDetailTab.uIMethodOfInstructionDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("MethodOfInstruction"), dropDwonSelectedItem);
  }

  async enterAtTrainingFacility(): Promise<void> {
    // uIMapTraining.trainingEntry.trainingDetailTab.uITrainingFacilityValueEdit.sendKeys(BaseData.getTrainingModuleValue("TrainingFacility"));
  }

  async enterAtAddress(): Promise<void> {
    // uIMapTraining.trainingEntry.trainingDetailTab.uIAddressEdit.sendKeys(BaseData.getTrainingModuleValue("Address"));
  }

  async enterAtMealsAndOtherCosts(): Promise<void> {
    // uIMapTraining.trainingEntry.trainingDetailTab.uIMealsAndOtherCostsedit.sendKeys(BaseData.getTrainingModuleValue("MealsAndOtherCosts"));
    // uIMapTraining.trainingEntry.trainingDetailTab.uIMealsAndOtherCostsedit.sendKeys(Keys.TAB);
  }

  async enterAtCost(): Promise<void> {
    // uIMapTraining.trainingEntry.trainingDetailTab.uICostEdit.sendKeys(BaseData.getTrainingModuleValue("Cost"));
    // uIMapTraining.trainingEntry.trainingDetailTab.uICostEdit.sendKeys(Keys.TAB);
  }

  async selectAtMethodOfPayment(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTraining.trainingEntry.trainingDetailTab.uIMethodOfPaymentDropdown, BaseData.getTrainingModuleValue("MethodOfPayment"));
  }

  async selectAtCostCenter(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTraining.trainingEntry.trainingDetailTab.uICostCenterDropdown, BaseData.getTrainingModuleValue("CostCenter"));
  }

  async clickEvaluationMandatoryRadioButton(): Promise<void> {
    // uIMapTraining.trainingEntry.trainingDetailTab.uIEvaluationMandatoryRadioButton.click();
  }

  async verifyEvaluationMandatoryRadioButtonIsChecked(): Promise<void> {
    // boolean selected = uIMapTraining.trainingEntry.trainingDetailTab.uIEvaluationMandatoryRadioButton.isSelected();
    // verify.ExpectedValueIsTrue(selected);
  }

  async clickEvaluationOptionRadioButton(): Promise<void> {
    // uIMapTraining.trainingEntry.trainingDetailTab.uIEvaluationOptionalRadioButton.click();
  }

  async verifyEvaluationOptionRadioButtonIsChecked(): Promise<void> {
    // boolean selected = uIMapTraining.trainingEntry.trainingDetailTab.uIEvaluationOptionalRadioButton.isSelected();
    // verify.ExpectedValueIsTrue(selected);
  }

  async clickTrainingOnDutyRadioButton(): Promise<void> {
    // uIMapTraining.trainingEntry.trainingDetailTab.uITrainingWhileOnDutyRadioButton.click();
  }

  async verifyTrainingOnDutyRadioButtonIsChecked(): Promise<void> {
    // boolean selected = uIMapTraining.trainingEntry.trainingDetailTab.uITrainingWhileOnDutyRadioButton.isSelected();
    // verify.ExpectedValueIsTrue(selected);
  }

  async verifyAtResult(): Promise<void> {
    // String dropDwonSelectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapTraining.trainingEntry.trainingDetailTab.uIResultDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Result"), dropDwonSelectedItem);
  }

  async verifyAtScore(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Score"),
    // uIMapTraining.trainingEntry.trainingDetailTab.uIScoreTxtbox.getAttribute("value"));
  }

  async verifyAtTrainingFacility(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("TrainingFacility"),
    // uIMapTraining.trainingEntry.trainingDetailTab.uITrainingFacilityValueEdit.getAttribute("value"));
  }

  async verifyAtCost(i: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Cost" + i),
    // uIMapTraining.trainingEntry.trainingDetailTab.uICostEdit.getAttribute("value"));
  }

  async verifyAtAddress(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Address"),
    // uIMapTraining.trainingEntry.trainingDetailTab.uIAddressEdit.getAttribute("value"));
  }

  async verifyAtMealsAndOtherCosts(i: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("MealsAndOtherCosts" + i),
    // uIMapTraining.trainingEntry.trainingDetailTab.uIMealsAndOtherCostsedit.getAttribute("value"));
  }

  async verifyAtMethodOfPayment(): Promise<void> {
    // String dropDwonSelectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapTraining.trainingEntry.trainingDetailTab.uIMethodOfPaymentDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("MethodOfPayment"), dropDwonSelectedItem);
  }

  async verifyAtCostCenter(): Promise<void> {
    // String dropDwonSelectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapTraining.trainingEntry.trainingDetailTab.uICostCenterDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("CostCenter"), dropDwonSelectedItem);
  }

  async enterAtNotes(): Promise<void> {
    // uIMapTraining.trainingEntry.trainingDetailTab.uINotesTxtbox.sendKeys(BaseData.getTrainingModuleValue("Notes"));
  }

  async verifyAtNotes(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Notes"),
    // uIMapTraining.trainingEntry.trainingDetailTab.uINotesTxtbox.getAttribute("value"));
  }

  async selectAtQualificationPeriod(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapTraining.trainingEntry.trainingDetailTab.uIQualificationPeriodDropdown, BaseData.getTrainingModuleValue("QualificationPeriod"));
    // uIMapTraining.trainingEntry.trainingDetailTab.uIQualificationPeriodDropdown.sendKeys(Keys.TAB);
  }

  async verifyReQualityByAsMonthFromToDate(toDate: string, noOfMonths: number): Promise<void> {
    // String futureDateByMonth = Randomized.getFutureDateByMonth(toDate, noOfMonths, "MM/dd/yyyy");
    // verify.ExpectedPropertyValueIsEqual(futureDateByMonth, uIMapTraining.trainingEntry.trainingDetailTab.uIRequalifyByDateTxtbox.getAttribute("value"));
  }

  async verifyAtQualificationPeriod(): Promise<void> {
    // String dropDwonSelectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapTraining.trainingEntry.trainingDetailTab.uIQualificationPeriodDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("QualificationPeriod"), dropDwonSelectedItem);
  }

  async verifyAtReQualifyBy(): Promise<void> {
    // String attribute = uIMapTraining.trainingEntry.trainingDetailTab.uIRequalifyByDateTxtbox.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute, BaseData.getTrainingModuleValue("RequalifyBy"));
  }

  async verifyTrainingOffDutyRadioButtonIsChecked(): Promise<void> {
    // boolean selected = uIMapTraining.trainingEntry.trainingDetailTab.uITrainingWhileOffDutyRadioButton.isSelected();
    // verify.ExpectedValueIsTrue(selected);
  }

}

export class CEUsTabPage {
  readonly page: Page;
  readonly certificationDropdown: Locator;
  readonly applyCredittoallCheckbox: Locator;
  readonly earnedCEUsTxtbox: Locator;
  readonly creditedHoursTxtbox: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly cEUsgridTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.certificationDropdown = page.locator('#tabTrainEntry_tmpl4_usrTrainingCEU_cddCertification_DropDown');
    this.applyCredittoallCheckbox = page.locator('#tabTrainEntry_tmpl4_usrTrainingCEU_chkApplyToAllStudents');
    this.earnedCEUsTxtbox = page.locator('#tabTrainEntry_tmpl4_usrTrainingCEU_txtCEUEarn');
    this.creditedHoursTxtbox = page.locator('#tabTrainEntry_tmpl4_usrTrainingCEU_txtHrsCredit');
    this.addButton = page.locator('#tabTrainEntry_tmpl4_usrTrainingCEU_imgAdd');
    this.clearButton = page.locator('#tabTrainEntry_tmpl4_usrTrainingCEU_imgClear');
    this.cEUsgridTable = page.locator('#tabTrainEntry_tmpl4_usrTrainingCEU_grdCEUs');
  }

  async selectAtCertification(count: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption
    // (uIMapTraining.trainingEntry.cEUsTab.uICertificationDropdown, BaseData.getTrainingModuleValue("Certification"+count));
  }

  async enterAtEarnedCEUs(): Promise<void> {
    // uIMapTraining.trainingEntry.cEUsTab.uIEarnedCEUsTxtbox.sendKeys(BaseData.getTrainingModuleValue("EarnedCEUs"));
  }

  async enterAtCreditedHours(): Promise<void> {
    // uIMapTraining.trainingEntry.cEUsTab.uICreditedHoursTxtbox.sendKeys(BaseData.getTrainingModuleValue("CreditedHours"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapTraining.trainingEntry.cEUsTab.uIAddButton.click();
  }

  async verifyAtCertificationInGrid(count: number): Promise<void> {
    // String Certification = objectIdentification.manualIdentify.getGridCell(uIMapTraining.trainingEntry.cEUsTab.uICEUsgridTable, BaseData.getTrainingModuleValue("Certification"+count)).getText();
    // verify.ExpectedPropertyValueIsEqual(Certification, BaseData.getTrainingModuleValue("Certification"+count));
  }

  async deleteAtRecordByCertification(): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerTextWithoutContains
    // (uIMapTraining.trainingEntry.cEUsTab.uICEUsgridTable,BaseData.getTrainingModuleValue("Certification"));
    // popup.confirm.acceptPopup();
  }

  async verifyRecordMarkedAcknowledge(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(6) Record marked for deletion");
  }

  async selectAtCertificationInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText
    // (uIMapTraining.trainingEntry.cEUsTab.uICEUsgridTable,BaseData.getTrainingModuleValue("Certification"));
  }

  async verifyAtCertification(i: number): Promise<void> {
    // String Text = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapTraining.trainingEntry.cEUsTab.uICertificationDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Certification" + i), Text);
  }

  async verifyAtEarnedCEUs(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("EarnedCEUs"),
    // uIMapTraining.trainingEntry.cEUsTab.uIEarnedCEUsTxtbox.getAttribute("value"));
  }

  async verifyAtCreditedHours(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("CreditedHours"),
    // uIMapTraining.trainingEntry.cEUsTab.uICreditedHoursTxtbox.getAttribute("value"));
  }

}

export class InstructorsTabPage {
  readonly page: Page;
  readonly navigatetoInstructorsTab: Locator;
  readonly trainingFromDateTxtbox: Locator;
  readonly trainingToDateTxtbox: Locator;
  readonly instrcutorTxtbox: Locator;
  readonly certificationDropdown: Locator;
  readonly positionDropdown: Locator;
  readonly certificationExpiresDateTxtbox: Locator;
  readonly trainingHoursTxtbox: Locator;
  readonly commentsTxtbox: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly certificationLabel: Locator;
  readonly positionLabel: Locator;
  readonly trainingDateFrom: Locator;
  readonly trainingDateTo: Locator;
  readonly certificationDropDown: Locator;
  readonly positionDropDown: Locator;
  readonly trainingHoursEdit: Locator;
  readonly addButton: Locator;
  readonly instructorsGrid: Locator;
  readonly clearButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigatetoInstructorsTab = page.locator("//span[text()=\'Instructors\']");
    this.trainingFromDateTxtbox = page.locator('#tabTrainEntry_tmpl2_usrInstructor_dtFromDate_KPIDttmCtrl');
    this.trainingToDateTxtbox = page.locator('#tabTrainEntry_tmpl2_usrInstructor_dtToDate_KPIDttmCtrl');
    this.instrcutorTxtbox = page.locator('#tabTrainEntry_tmpl2_usrInstructor_lupInstructor_CodeValue');
    this.certificationDropdown = page.locator('#tabTrainEntry_tmpl2_usrInstructor_cddSubject_DropDown');
    this.positionDropdown = page.locator('#tabTrainEntry_tmpl2_usrInstructor_cddPosition_DropDown');
    this.certificationExpiresDateTxtbox = page.locator('#tabTrainEntry_tmpl2_usrInstructor_dtExpiryDttm_KPIDttmCtrl');
    this.trainingHoursTxtbox = page.locator('#tabTrainEntry_tmpl2_usrInstructor_txtTrainHours');
    this.commentsTxtbox = page.locator('#tabTrainEntry_tmpl2_usrInstructor_txtComments');
    this.addButton = page.locator('#tabTrainEntry_tmpl2_usrInstructor_imgAdd');
    this.clearButton = page.locator('#tabTrainEntry_tmpl2_usrInstructor_imgClear');
    this.certificationLabel = page.locator('#tabTrainEntry_tmpl2_usrInstructor_lblSubject');
    this.positionLabel = page.locator('#tabTrainEntry_tmpl2_usrInstructor_lblPosition');
    this.trainingDateFrom = page.locator('#tabTrainEntry_tmpl2_usrInstructor_dtFromDate_KPIDttmCtrl');
    this.trainingDateTo = page.locator('#tabTrainEntry_tmpl2_usrInstructor_dtToDate_KPIDttmCtrl');
    this.certificationDropDown = page.locator('#tabTrainEntry_tmpl2_usrInstructor_cddSubject_DropDown');
    this.positionDropDown = page.locator('#tabTrainEntry_tmpl2_usrInstructor_cddPosition_DropDown');
    this.trainingHoursEdit = page.locator('#tabTrainEntry_tmpl2_usrInstructor_txtTrainHours');
    this.addButton = page.locator('#tabTrainEntry_tmpl2_usrInstructor_imgAdd');
    this.instructorsGrid = page.locator('#tabTrainEntry_tmpl2_usrInstructor_grdInstructors');
    this.clearButton = page.locator('#tabTrainEntry_tmpl2_usrInstructor_imgClear');
  }

  async enterAtInstructor(i: number): Promise<void> {
    // uIMapTraining.trainingEntry.instructorsTab.UIInstrcutorTxtbox.sendKeys(BaseData.getTrainingModuleValue("Instructor"+i));
    // uIMapTraining.trainingEntry.instructorsTab.UIInstrcutorTxtbox.sendKeys(Keys.TAB);
  }

  async verifyCertificationLabelIsMandatory(): Promise<void> {
    // String cssValue = uIMapTraining.trainingEntry.instructorsTab.uICertificationLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("color"), cssValue);
  }

  async verifyPositionLabelIsMandatory(): Promise<void> {
    // String cssValue = uIMapTraining.trainingEntry.instructorsTab.uIPositionLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("color"), cssValue);
  }

  async enterAtTrainingDateFrom(): Promise<void> {
    // uIMapTraining.trainingEntry.instructorsTab.uITrainingDateFrom.sendKeys(Randomized.getCurrentDate());
  }

  async enterAtTrainingDateTo(): Promise<void> {
    // uIMapTraining.trainingEntry.instructorsTab.uITrainingDateTo.sendKeys(Randomized.getFutureDate(3));
  }

  async selectAtCertification(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption
    // (uIMapTraining.trainingEntry.instructorsTab.uICertificationDropDown,BaseData.getTrainingModuleValue("Certification"));
  }

  async selectAtPosition(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapTraining.trainingEntry.instructorsTab.uIPositionDropDown,BaseData.getTrainingModuleValue("Position"));
  }

  async enterAtTrainingHours(): Promise<void> {
    // uIMapTraining.trainingEntry.instructorsTab.uITrainingHoursEdit.sendKeys(BaseData.getTrainingModuleValue("TrainingHours"));
    // uIMapTraining.trainingEntry.instructorsTab.uITrainingHoursEdit.sendKeys(Keys.TAB);
  }

  async clickAddButton(): Promise<void> {
    // uIMapTraining.trainingEntry.instructorsTab.uIAddButton.click();
  }

  async verifyAtFromDateInGrid(): Promise<void> {
    // String FromDate = objectIdentification.manualIdentify.getGridCell
    // (uIMapTraining.trainingEntry.instructorsTab.uIInstructorsGrid,randomized.getFutureDate(3)).getText();
    // verify.ExpectedPropertyValueIsEqual(randomized.getFutureDate(3), FromDate);
  }

  async verifyAtToDateInGrid(): Promise<void> {
    // String ToDate = objectIdentification.manualIdentify.getGridCell
    // (uIMapTraining.trainingEntry.instructorsTab.uIInstructorsGrid,randomized.getFutureDate(3)).getText();
    // verify.ExpectedPropertyValueIsEqual(randomized.getFutureDate(3), ToDate);
  }

  async clickClearButton(): Promise<void> {
    // uIMapTraining.trainingEntry.instructorsTab.uIClearButton.click();
  }

  async verifyTrainingDateFromIsEmpty(): Promise<void> {
    // boolean DateFrom = uIMapTraining.trainingEntry.instructorsTab.uITrainingDateFrom.getAttribute("value").isEmpty();
    // verify.ExpectedValueIsTrue(DateFrom);
  }

  async verifyTrainingDateToIsEmpty(): Promise<void> {
    // boolean DateTo = uIMapTraining.trainingEntry.instructorsTab.uITrainingDateTo.getAttribute("value").isEmpty();
    // verify.ExpectedValueIsTrue(DateTo);
  }

  async verifyCertificationLabelIsNonMandatory(): Promise<void> {
    // String cssValue = uIMapTraining.trainingEntry.instructorsTab.uICertificationLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("color1"), cssValue);
  }

  async verifyPositionLabelIsNonMandatory(): Promise<void> {
    // String cssValue = uIMapTraining.trainingEntry.instructorsTab.uIPositionLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("color1"), cssValue);
  }

  async enterAtInstructor(): Promise<void> {
    // uIMapTraining.trainingEntry.instructorsTab.UIInstrcutorTxtbox.sendKeys(BaseData.getTrainingModuleValue("Instructor"));
    // uIMapTraining.trainingEntry.instructorsTab.UIInstrcutorTxtbox.sendKeys(Keys.TAB);
  }

  async clearInstructor(): Promise<void> {
    // uIMapTraining.trainingEntry.instructorsTab.UIInstrcutorTxtbox.click();
    // uIMapTraining.trainingEntry.instructorsTab.UIInstrcutorTxtbox.clear();
  }

  async verifyTrainingDateFromAsCurrentDate(): Promise<void> {
    // String attribute = uIMapTraining.trainingEntry.instructorsTab.uITrainingDateFrom.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute, Randomized.getCurrentDate());
  }

  async verifyTrainingDateToAsFutureDate(): Promise<void> {
    // String attribute = uIMapTraining.trainingEntry.instructorsTab.uITrainingDateTo.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute, Randomized.getFutureDate(2));
  }

  async verifyAtInstructor(i: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Instructor" + i),
    // uIMapTraining.trainingEntry.instructorsTab.UIInstrcutorTxtbox.getAttribute("value"));
  }

  async verifyAtCertification(): Promise<void> {
    // String Text = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapTraining.trainingEntry.instructorsTab.uICertificationDropDown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Certification"), Text);
  }

  async verifyAtPosition(): Promise<void> {
    // String Text = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapTraining.trainingEntry.instructorsTab.uIPositionDropDown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Position"), Text);
  }

  async verifyAtTrainingHours(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("TrainingHours"),
    // uIMapTraining.trainingEntry.instructorsTab.uITrainingHoursEdit.getAttribute("value"));
  }

  async verifyAtIDInGrid(): Promise<void> {
    // String ID = objectIdentification.manualIdentify.getGridCell(uIMapTraining.trainingEntry.instructorsTab.uIInstructorsGrid, BaseData.getTrainingModuleValue("ID")).getText();
    // verify.ExpectedPropertyValueIsEqual(ID, BaseData.getTrainingModuleValue("ID"));
  }

  async verifyAtNameInGrid(): Promise<void> {
    // String name = objectIdentification.manualIdentify.getGridCell(uIMapTraining.trainingEntry.instructorsTab.uIInstructorsGrid, BaseData.getTrainingModuleValue("Name")).getText();
    // verify.ExpectedPropertyValueIsEqual(name, BaseData.getTrainingModuleValue("Name"));
  }

  async clickTrainingTypeTreeViewHelpIcon(): Promise<void> {
    // uIMapTraining.trainingEntry.uITrainingTypeTreeViewHelpIcon.click();
  }

}

export class AdditionalPFTabPage {
  readonly page: Page;
  readonly employeePFNoTxtbox: Locator;
  readonly agencytxtbox: Locator;
  readonly nameDropdown: Locator;
  readonly addNewButton: Locator;
  readonly addMultipleEmployeesButton: Locator;
  readonly printTrainingCertificateButton: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly deleteIcon: Locator;
  readonly employeePFLookupIcon: Locator;
  readonly additionPFTabGrid: Locator;
  readonly agencyEdit: Locator;
  readonly nameDropdownArrow: Locator;
  readonly nameDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.employeePFNoTxtbox = page.locator('#tabTrainEntry_tmpl1_AdditionalPF_lupInstructor_CodeValue');
    this.agencytxtbox = page.locator('#tabTrainEntry_tmpl1_AdditionalPF_lupORINbr_CodeValue');
    this.nameDropdown = page.locator('#tabTrainEntry_tmpl1_AdditionalPF_cddSelectName_Input');
    this.addNewButton = page.locator('#tabTrainEntry_tmpl1_AdditionalPF_cmdAddNew');
    this.addMultipleEmployeesButton = page.locator('#tabTrainEntry_tmpl1_AdditionalPF_cmdAdd');
    this.printTrainingCertificateButton = page.locator('#tabTrainEntry_tmpl1_AdditionalPF_cmdPrintCertificate');
    this.addButton = page.locator('#tabTrainEntry_tmpl1_AdditionalPF_imgAdd');
    this.clearButton = page.locator('#tabTrainEntry_tmpl1_AdditionalPF_imgClear');
    this.deleteIcon = page.locator("//div[@id=\'tabTrainEntry_tmpl1_AdditionalPF_grdAdditionalPF\'//td[@class=\'Delete_Icon_Style\'");
    this.employeePFLookupIcon = page.locator('#tabTrainEntry_tmpl1_AdditionalPF_lupInstructor_imgBtn');
    this.additionPFTabGrid = page.locator('#tabTrainEntry_tmpl1_AdditionalPF_grdAdditionalPF');
    this.agencyEdit = page.locator('#tabTrainEntry_tmpl1_AdditionalPF_lupORINbr_CodeValue');
    this.nameDropdownArrow = page.locator('#tabTrainEntry_tmpl1_AdditionalPF_cddSelectName_Arrow');
    this.nameDropdown = page.locator('#tabTrainEntry_tmpl1_AdditionalPF_cddSelectName_DropDown');
  }

  async enterAtPF(): Promise<void> {
    // uIMapTraining.trainingEntry.additionalPFTab.UIEmployeePFNoTxtbox.sendKeys(BaseData.getTrainingModuleValue("PFCode"));
    // uIMapTraining.trainingEntry.additionalPFTab.UIEmployeePFNoTxtbox.sendKeys(Keys.TAB);
  }

  async clickAddButton(): Promise<void> {
    // uIMapTraining.trainingEntry.additionalPFTab.UIAddButton.click();
  }

  async clickEmployeePFLookupIcon(): Promise<void> {
    // uIMapTraining.trainingEntry.additionalPFTab.uIEmployeePFLookupIcon.click();
  }

  async verifyAtEmployeePF(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("PFCode"),
    // uIMapTraining.trainingEntry.additionalPFTab.UIEmployeePFNoTxtbox.getAttribute("value"));
  }

  async verifyAtNameInGrid(i: number): Promise<void> {
    // WebElement Name = objectIdentification.manualIdentify.getGridCell(uIMapTraining.trainingEntry.additionalPFTab.uIAdditionPFTabGrid, BaseData.getTrainingModuleValue("Name" + i));
    // verify.ExpectedValueIsTrue(Name.getText().contains(BaseData.getTrainingModuleValue("Name" + i)));
  }

  async clickAddMultipleEmployeesButton(): Promise<void> {
    // uIMapTraining.trainingEntry.additionalPFTab.uIAddMultipleEmployeesButton.click();
  }

  async verifyAddMultiPFScreenExist(): Promise<void> {
    // boolean windowExist = objectIdentification.windowHandle.windowExistsWithURL("/Home/frmAddMultiPF.aspx");
    // verify.ExpectedValueIsTrue(windowExist);
  }

  async enterAtAgency(): Promise<void> {
    // uIMapTraining.trainingEntry.additionalPFTab.uIAgencyEdit.sendKeys(BaseData.getTrainingModuleValue("Agency"));
    // uIMapTraining.trainingEntry.additionalPFTab.uIAgencyEdit.sendKeys(Keys.TAB);
  }

  async verifyAtAgency(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("Agency"),
    // uIMapTraining.trainingEntry.additionalPFTab.uIAgencyEdit.getAttribute("value"));
  }

  async selectAtAgencyName(): Promise<void> {
    // uIMapTraining.trainingEntry.additionalPFTab.uINameDropdownArrow.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect( uIMapTraining.trainingEntry.additionalPFTab.uINameDropdown,
    // BaseData.getTrainingModuleValue("AgencyName"));
    // uIMapTraining.trainingEntry.additionalPFTab.uINameDropdownArrow.click();
  }

  async verifyAtPFInGrid(i: number): Promise<void> {
    // WebElement PF = objectIdentification.manualIdentify.getGridCell(uIMapTraining.trainingEntry.additionalPFTab.uIAdditionPFTabGrid, BaseData.getTrainingModuleValue("PF" + i));
    // verify.ExpectedValueIsTrue(PF.getText().contains(BaseData.getTrainingModuleValue("PF" + i)));
  }

}

export class AttachmentTabPage {
  readonly page: Page;
  readonly addFilesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addFilesButton = page.locator('#cmdAddFile');
  }

}

export class QAFormsTabPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async closeScreen(): Promise<void> {
    // Playback.driver.close();
  }

  async clickResetIcon(): Promise<void> {
    // uIMapTraining.trainingEntry.uIRefreshButton.click();
  }

  async verifyCapImageWithGreenTick(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapTraining.trainingEntry.uICapImage.getAttribute("src").contains("GraduationCapCheck64.png"),
    // "Graduation Cap is shown as Delete Image --> ");
  }

  async getToDate(): Promise<string> {
    // String Date = uIMapTraining.trainingEntry.uITrainingToDateTxtbox.getAttribute("value");
    // return Date ;
  }

  async saveAndCloseScreen(): Promise<void> {
    // uIMapTraining.trainingEntry.uISaveNCloseButton.click();
    // popup.confirm.yes();
  }

  async clickEmployeePFInfoIcon(): Promise<void> {
    // uIMapTraining.trainingEntry.uIEmployeePFInfoIcon.click();
  }

  async verifyAtFromDate(): Promise<void> {
    // String attribute = uIMapTraining.trainingEntry.uITrainingFromDateTxtbox.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute, BaseData.getTrainingModuleValue("FromDate"));
  }

  async verifyAtToDate(): Promise<void> {
    // String attribute = uIMapTraining.trainingEntry.uITrainingToDateTxtbox.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute, BaseData.getTrainingModuleValue("ToDate"));
  }

  async verifyAtAgencyDescription(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(
    // BaseData.getTrainingModuleValue("AgencyDescription"),uIMapTraining.trainingEntry.uIAgencyDescriptionEdit.getAttribute("value"));
  }

  async verifyAtEmployeePFDescription(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("EmployeePFDescription"),
    // uIMapTraining.trainingEntry.uIEmployeePFDescriptionEdit.getAttribute("value"));
  }

  async enterFromTimeAsCurrentTimeForFire(): Promise<void> {
    // uIMapTraining.trainingEntry.uITrainingFromTimeTxtbox.click();
    // uIMapTraining.trainingEntry.uITrainingFromTimeTxtbox.clear();
    // uIMapTraining.trainingEntry.uIFromTimeUpArrowForFire.click();
    // uIMapTraining.trainingEntry.uIFromTimeDownArrowForFire.click();
    // Playback.controlReadyThreadWait();
  }

}

export class CertificationEntryPage {
  readonly page: Page;
  readonly pFNoTxtbox: Locator;
  readonly certificationDropdown: Locator;
  readonly addManualEntryButton: Locator;
  readonly inculdeExpiredEntries: Locator;
  readonly gridTable: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pFNoTxtbox = page.locator('#lupPF_CodeValue');
    this.certificationDropdown = page.locator('#cddCertification_DropDown');
    this.addManualEntryButton = page.locator('#cmdAddManualEntry');
    this.inculdeExpiredEntries = page.locator('#chkExpiredEntries');
    this.gridTable = page.locator('#grdCertification');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'status\']/b");
  }

  async enterAtPFNo(): Promise<void> {
    // uIMapTraining.certificationEntry.uIPFNoTxtbox.sendKeys(BaseData.getTrainingModuleValue("PFNo"));
    // uIMapTraining.certificationEntry.uIPFNoTxtbox.sendKeys(Keys.TAB);
  }

  async selectAtCertification(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapTraining.certificationEntry.uICertificationDropdown,
    // BaseData.getTrainingModuleValue("Certification"));
  }

  async save(): Promise<void> {
    // uIMapTraining.certificationEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async saveNClose(): Promise<void> {
    // uIMapTraining.certificationEntry.uISaveNCloseButton.click();
    // popup.confirm.yes();
  }

  async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTraining.certificationEntry.uIBottomLeftSideStatusBar.getText()
    // .contains("1002 - Addition successful"));
  }

  async selectAtEarnedViaInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText
    // (uIMapTraining.certificationEntry.uIgridTable,BaseData.getTrainingModuleValue("EarnedVia"));
  }

  async deleteAtCellByColumnName(): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerText
    // (uIMapTraining.certificationEntry.uIgridTable,BaseData.getTrainingModuleValue("EarnedVia"));
  }

  async clickGridHeaderByColumnName(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridHeaderColumnName
    // (uIMapTraining.certificationEntry.uIgridTable,"Earned Via" );
  }

  async verifyPopUpDoesNotArise(): Promise<void> {
    // boolean checkAlertIsPresentOrNot = popup.confirm.checkAlertIsPresentOrNot();
    // verify.ExpectedValueIsFalse(checkAlertIsPresentOrNot);
  }

  async clickAddAManualEntry(): Promise<void> {
    // uIMapTraining.certificationEntry.uIAddManualEntryButton.click();
  }

  async verifyAtEarnedViaByEarnedCEUs(): Promise<void> {
    // String EarnedVia = objectIdentification.manualIdentify.getGridCell(uIMapTraining.certificationEntry.uIgridTable, BaseData.getPersonnelModuleValue("EarnedCEUs"), "Earned Via").getText();
    // verify.ExpectedPropertyValueIsEqual(EarnedVia, BaseData.getPersonnelModuleValue("EarnedVia"));
  }

  async close(): Promise<void> {
    // Playback.driver.close();
  }

}

export class CertificationManualEntryPage {
  readonly page: Page;
  readonly pFNoTxtbox: Locator;
  readonly certificationDropdown: Locator;
  readonly instructorCheckbox: Locator;
  readonly addMultiplePFButton: Locator;
  readonly earnedCEUsTxtbox: Locator;
  readonly earnedHoursTxtbox: Locator;
  readonly effectiveFromDateTxtbox: Locator;
  readonly recertificationByDateTxtbox: Locator;
  readonly reasonTxtbox: Locator;
  readonly certificationORLicenseNoTxtbox: Locator;
  readonly eMSLicenseLevelDropdown: Locator;
  readonly enteredByTxtbox: Locator;
  readonly enteredDateTxtbox: Locator;
  readonly deleteIcon: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly saveandAddnewButton: Locator;
  readonly printButton: Locator;
  readonly refreshButton: Locator;
  readonly attachmentsTab: Locator;
  readonly printIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pFNoTxtbox = page.locator('#lupPF_CodeValue');
    this.certificationDropdown = page.locator('#cddCertification_DropDown');
    this.instructorCheckbox = page.locator('#chkInstructor');
    this.addMultiplePFButton = page.locator('#cmdAddMulPF');
    this.earnedCEUsTxtbox = page.locator('#txtEarnedCEU');
    this.earnedHoursTxtbox = page.locator('#txtEarnedHour');
    this.effectiveFromDateTxtbox = page.locator('#dtEffectiveFrom_KPIDttmCtrl');
    this.recertificationByDateTxtbox = page.locator('#dtRecertificationBy_KPIDttmCtrl');
    this.reasonTxtbox = page.locator('#txtReason');
    this.certificationORLicenseNoTxtbox = page.locator('#txtLicense');
    this.eMSLicenseLevelDropdown = page.locator('#cddLicenseLvl_DropDown');
    this.enteredByTxtbox = page.locator('#lupEnteredBy_CodeValue');
    this.enteredDateTxtbox = page.locator('#dtEnteredDate_KPIDttmCtrl');
    this.deleteIcon = page.locator('#cmdDelete');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.saveandAddnewButton = page.locator('#cmdSaveNAddNew');
    this.printButton = page.locator('#cmdPrint');
    this.refreshButton = page.locator('#cmdRefresh');
    this.attachmentsTab = page.locator("//span[contains(text(),\'Attachments\')]");
    this.printIcon = page.locator('#cmdPrint');
  }

  async enterAtPFCode(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uIPFNumberEdit
    // .sendKeys(BaseData.getTrainingModuleValue("PFCode"));
    // uIMapFRPersonnel.certificationManualEntryWindow.uIPFNumberEdit.sendKeys(Keys.TAB);
    // if(objectIdentification.windowHandle.windowExist("Coded Search")) {
    // popup.switchToCodedSearch();
    // popup.kPICodedLookup.selectAtPFCode();
  }

  async selectAsCertification(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uICertificationComboBox
    // .sendKeys("01 - Selenium Certification");
  }

  async selectAtCertification(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption
    // (uIMapFRPersonnel.certificationManualEntryWindow.uICertificationComboBox, BaseData.getTrainingModuleValue("Certification"));
    // uIMapFRPersonnel.certificationManualEntryWindow.uICertificationComboBox.sendKeys(Keys.TAB);
  }

  async enterEarnedCEUsAsFive(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uIEarnedCEUsEdit.sendKeys("5");
  }

  async enterEarnedHoursAsOneHour(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uIEarnedHourEdit.sendKeys("1");
  }

  async enterEffectiveFromAsCurrentDate(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uIEffectiveFromDateEdit.clear();
    // uIMapFRPersonnel.certificationManualEntryWindow.uIEffectiveFromDateEdit
    // .sendKeys(Randomized.getCurrentDate());
  }

  async enterRecertificaitonByAs1DayFutureFromCurrentDate(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uIRecertificationByDateEdit
    // .sendKeys(Randomized.getFutureDate(1));
  }

  async verifyRecertificaitonByAsOneMonthFromCurrentDate(): Promise<void> {
    // String oneMonth = uIMapFRPersonnel.certificationManualEntryWindow.uIRecertificationByDateEdit.getAttribute("value");
    // System.out.println(Randomized.getFutureDate(30));
    // if(oneMonth.equals(Randomized.getFutureDate(30))) {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getFutureDate(30),
    // uIMapFRPersonnel.certificationManualEntryWindow.uIRecertificationByDateEdit.getAttribute("value"));
    // else {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getFutureDate(31),
    // uIMapFRPersonnel.certificationManualEntryWindow.uIRecertificationByDateEdit.getAttribute("value"));
  }

  async verifyRecertificationByFieldDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapFRPersonnel.certificationManualEntryWindow.uIRecertificationByDateEdit
    // .getAttribute("class").contains("textboxInactive"));
  }

  async ClickInstructorCheckbox(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uIInstructorCheckbox.click();
  }

  async ClickIsEMSCheckbox(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uIIsEMSCheckbox.click();
  }

  async enterReason(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uIReasonEdit.sendKeys("To Test For Automation purpose");
  }

  async enterAtEnteredBy(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uIEnteredByValueEdit
    // .sendKeys(BaseData.getTrainingModuleValue("UserName"));
    // uIMapFRPersonnel.certificationManualEntryWindow.uIEnteredByValueEdit.sendKeys(Keys.TAB);
  }

  async save(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uISaveButton.click();
    // popup.confirm.yes();
  }

  async closeCertificationManualEntryScreen(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.driver.close();
  }

  async VerifyEarnedCEUFieldMandatory(): Promise<void> {
    // String cssValue = uIMapFRPersonnel.certificationManualEntryWindow.uIEarnedCEUsLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual("rgba(255, 0, 0, 1)", cssValue);
  }

  async VerifyEarnedHoursFieldMandatory(): Promise<void> {
    // String cssValue = uIMapFRPersonnel.certificationManualEntryWindow.uIEarnedHourLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual("rgba(255, 0, 0, 1)", cssValue);
  }

  async EnterAtEarnedCEU(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uIEarnedCEUsEdit.clear();
    // uIMapFRPersonnel.certificationManualEntryWindow.uIEarnedCEUsEdit
    // .sendKeys(BaseData.getTrainingModuleValue("EarnedCEU"));
  }

  async EnterAtEarnedHours(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uIEarnedHourEdit.clear();
    // uIMapFRPersonnel.certificationManualEntryWindow.uIEarnedHourEdit
    // .sendKeys(BaseData.getTrainingModuleValue("EarnedHours"));
  }

  async SelectOtherJobRole(): Promise<void> {
    // objectIdentification.randomIdentify.selectRadControlDropDownValueSelect(
    // uIMapFRPersonnel.certificationManualEntryWindow.uIOtherJobRolesCombobox);
  }

  async SelectPrimaryJobRole(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapFRPersonnel.certificationManualEntryWindow.uIPrimaryEMSRoleCombobox);
  }

  async SelectAgencyEMSPracticeLevel(): Promise<void> {
    // objectIdentification.randomIdentify.selectDropDownOption(
    // uIMapFRPersonnel.certificationManualEntryWindow.uIAgencyEMSPracticeLevelCombobox);
  }

  async TabOutAgencyEMSPracticeLevelDate(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uIAgencyEMSPracticeLevelDateEdit.sendKeys(Keys.TAB);
  }

  async ClickAddButton(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uIAddButton.click();
  }

  async TabOutEnteredDate(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uIEnteredDateEdit.sendKeys(Keys.TAB);
  }

  async InternalSave(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uIInternalSaveButton.click();
    // popup.confirm.yes();
  }

  async ClickMainTab(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uIMainTab.click();
    // Playback.controlReadyThreadWait();
  }

  async verifyMainTabIsNotEnabled(): Promise<void> {
    // boolean displayed = uIMapFRPersonnel.certificationManualEntryWindow.uIMainTab.isDisplayed();
    // verify.ExpectedValueIsFalse(displayed, "Main tab is Displayed --->");
  }

  async verifyMainTabIsEnabled(): Promise<void> {
    // boolean displayed = uIMapFRPersonnel.certificationManualEntryWindow.uIMainTab.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed, "Main tab is not Displayed --->");
  }

  async VerifyUpdateSuccessfulAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(6071) Update Successful");
  }

  async verifyAdditionSuccessFullMessage(): Promise<void> {
    // String Status = uIMapFRPersonnel.certificationManualEntryWindow.uIBottomStatus.getText();
    // verify.ExpectedPropertyValueIsEqual(Status, "1002 - Addition Successful");
  }

  async verifyUpdateSuccessFullMessage(): Promise<void> {
    // String Status = uIMapFRPersonnel.certificationManualEntryWindow.uIBottomStatus.getText();
    // verify.ExpectedPropertyValueIsEqual(Status, "1003 - Update Successful");
  }

  async enterPFCodeAndSelectRandom(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uIPFLookupButton.click();
    // popup.switchToCodedSearch();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async selectCertification(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapFRPersonnel.certificationManualEntryWindow.uICertificationComboBox);
  }

  async clickAddMultiplePF(): Promise<void> {
    // uIMapTraining.certificationManualEntry.UIAddMultiplePFButton.click();
  }

  async switchToAttachmentTab(): Promise<void> {
    // uIMapTraining.certificationManualEntry.uIAttachmentsTab.click();
    // Playback.threadWait(3000);
    // objectIdentification.windowHandle.switchToFrame("frmTxtAttachMgrEx.aspx");
    // Playback.waitForPageLoad();
  }

  async selectAtCertification(count: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption
    // (uIMapFRPersonnel.certificationManualEntryWindow.uICertificationComboBox, BaseData.getTrainingModuleValue("Certification"+count));
    // uIMapFRPersonnel.certificationManualEntryWindow.uICertificationComboBox.sendKeys(Keys.TAB);
  }

  async verifyTabColor(TabName: string, keyindex: number): Promise<void> {
    // String cssValue = Playback.driver.findElement(By.xpath("//span[text()='"+TabName+"']")).getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(cssValue, BaseData.getCitizenServicesModuleValue("color"+keyindex));
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapTraining.certificationManualEntry.uIPrintIcon.click();
  }

  async clicksave(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uISaveButton.click();
  }

  async verifyUpdatedDataExistAcknowldegePopUp(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1051) Updated data exists in the Main tab. You must save or reset.");
  }

  async enterAtCertificationOrLicense(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uICertificationOrLicenseNoEdit.clear();
    // uIMapFRPersonnel.certificationManualEntryWindow.uICertificationOrLicenseNoEdit.sendKeys(BaseData.getTrainingModuleValue("CertificationOrLicenseNo"));
  }

  async enterAtReason(): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uIReasonEdit.clear();
    // uIMapFRPersonnel.certificationManualEntryWindow.uIReasonEdit.sendKeys(BaseData.getTrainingModuleValue("Reason"));
  }

  async verifyAtPFCode(): Promise<void> {
    // String attribute = uIMapFRPersonnel.certificationManualEntryWindow.uIPFNumberEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute, BaseData.getTrainingModuleValue("PFCode"));
  }

  async verifyAtCertification(): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(
    // uIMapFRPersonnel.certificationManualEntryWindow.uICertificationComboBox);
    // verify.ExpectedPropertyValueIsEqual(dropDownSelectedItem, BaseData.getTrainingModuleValue("Certification"));
  }

  async verifyAtEarnedCEU(): Promise<void> {
    // String attribute = uIMapFRPersonnel.certificationManualEntryWindow.uIEarnedCEUsEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute, BaseData.getTrainingModuleValue("EarnedCEU"));
  }

  async verifyAtEarnedHours(): Promise<void> {
    // String attribute = uIMapFRPersonnel.certificationManualEntryWindow.uIEarnedHourEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute, BaseData.getTrainingModuleValue("EarnedHours"));
  }

  async verifyAtReason(): Promise<void> {
    // String attribute = uIMapFRPersonnel.certificationManualEntryWindow.uIReasonEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute, BaseData.getTrainingModuleValue("Reason"));
  }

  async verifyAtCertificationOrLicense(): Promise<void> {
    // String attribute = uIMapFRPersonnel.certificationManualEntryWindow.uICertificationOrLicenseNoEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute, BaseData.getTrainingModuleValue("CertificationOrLicenseNo"));
  }

  async verifyAtEnteredBy(): Promise<void> {
    // String attribute = uIMapFRPersonnel.certificationManualEntryWindow.uIEnteredByValueEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute, BaseData.getTrainingModuleValue("EnteredBy"));
  }

  async verifyEnteredDateAsCurrentDate(): Promise<void> {
    // String attribute = uIMapFRPersonnel.certificationManualEntryWindow.uIEnteredDateEdit.getAttribute("value");
    // String currentDate = Randomized.getCurrentDate();
    // verify.ExpectedPropertyValueIsEqual(attribute, currentDate);
  }

  async entereAtEffectiveFrom(NoOfDays: number): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uIEffectiveFromDateEdit.clear();
    // uIMapFRPersonnel.certificationManualEntryWindow.uIEffectiveFromDateEdit.click();
    // uIMapFRPersonnel.certificationManualEntryWindow.uIEffectiveFromDateEdit.sendKeys(Randomized.getFutureDate(NoOfDays));
    // uIMapFRPersonnel.certificationManualEntryWindow.uIEffectiveFromDateEdit.sendKeys(Keys.TAB);
  }

  async verifyRecertificaitonByAsOneMonthAfterFromEffectiveFrom(date: string): Promise<void> {
    // String recertificationDate = uIMapFRPersonnel.certificationManualEntryWindow.uIRecertificationByDateEdit.getAttribute("value");
    // int[] daysOfMonth = {28,29,30,31};
    // String expectedMatch = null;
    // for (int i : daysOfMonth) {
    // String futureDate = randomized.getFutureDate1(date, i);
    // System.out.println(futureDate);
    // if (recertificationDate.equals(futureDate)) {
    // expectedMatch = futureDate;
    // break;
    // }System.out.println(expectedMatch);
    // verify.ExpectedPropertyValueIsEqual(expectedMatch, recertificationDate);
    // //			int[] daysOfMonth = {28,29,30,31};
    // //			String expectedMatch = null;
    // //			for (int i : daysOfMonth) {
    // //				String previousDate = randomized.getPreviousDate(noOfDays, "MM/dd/yyyy");
    // //				String futureDate = randomized.getFutureDate1(previousDate, i);
    // //				System.out.println(futureDate);
    // //				if (recertificationDate.equals(futureDate)) {
    // //					expectedMatch = futureDate;
    // //					break;
    // //				}
    // //			}System.out.println(expectedMatch);
    // //			verify.ExpectedPropertyValueIsEqual(expectedMatch, recertificationDate);
  }

  async verify1051UpdatedDataExistsInTheMainTab(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1051) Updated data exists in the Main tab. You must save or reset.");
  }

  async verifyEffectiveFrom(date: string): Promise<void> {
    // //String previousDate = randomized.getPreviousDate(noOfDays, "MM/dd/yyyy");
    // String attribute = uIMapFRPersonnel.certificationManualEntryWindow.uIEffectiveFromDateEdit
    // .getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(date, attribute, "Mismatch in effective from --->");
  }

  async enterEffectiveFrom(date: string): Promise<void> {
    // uIMapFRPersonnel.certificationManualEntryWindow.uIEffectiveFromDateEdit.clear();
    // uIMapFRPersonnel.certificationManualEntryWindow.uIEffectiveFromDateEdit
    // .sendKeys(date);
  }

}

export class TrainingClassEntryPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly saveandAddnewButton: Locator;
  readonly printButton: Locator;
  readonly refreshButton: Locator;
  readonly deleteIcon: Locator;
  readonly activityLogButton: Locator;
  readonly entryDateTxtbox: Locator;
  readonly noOfSutendtsTxtbox: Locator;
  readonly noOfSlotsRemainingTxtbox: Locator;
  readonly trainingCategoryComboBox: Locator;
  readonly trainingTypeComboBox: Locator;
  readonly courseNoTxtbox: Locator;
  readonly courseTitleTxtbox: Locator;
  readonly trainingFromDateTxtbox: Locator;
  readonly trainingFromTimeTxtbox: Locator;
  readonly trainingToDateTxtbox: Locator;
  readonly trainingToTimeTxtbox: Locator;
  readonly courseHoursTxtbox: Locator;
  readonly multidayScheduleButton: Locator;
  readonly duplicatedButton: Locator;
  readonly signUpButton: Locator;
  readonly publishToButton: Locator;
  readonly cancelTheClassButton: Locator;
  readonly showInCalendarCheckbox: Locator;
  readonly doNotPublishCheckbox: Locator;
  readonly employeesOnlyCheckbox: Locator;
  readonly jurisComboBox: Locator;
  readonly noOfStudents: Locator;
  readonly studentsTab: Locator;
  readonly trainingDetailTab: Locator;
  readonly instructorsTab: Locator;
  readonly courseDescriptionTab: Locator;
  readonly notesforStudentsTab: Locator;
  readonly evaluationsTab: Locator;
  readonly cEUsTab: Locator;
  readonly instructorNotesTab: Locator;
  readonly attachmentTab: Locator;
  readonly courseLookUpIcon: Locator;
  readonly bottomMessage: Locator;
  readonly classYear: Locator;
  readonly classNumber: Locator;
  readonly juris: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.saveandAddnewButton = page.locator('#cmdSaveNAddNew');
    this.printButton = page.locator('#cmdPrint');
    this.refreshButton = page.locator('#cmdRefresh');
    this.deleteIcon = page.locator('#cmdDelete');
    this.activityLogButton = page.locator('#cmdActivity');
    this.entryDateTxtbox = page.locator('#dtEntryDate_KPIDttmCtrl');
    this.noOfSutendtsTxtbox = page.locator('#txtNoStudents');
    this.noOfSlotsRemainingTxtbox = page.locator('#txtRemaining');
    this.trainingCategoryComboBox = page.locator('#cddTrainingCategory_DropDown');
    this.trainingTypeComboBox = page.locator('#cddTrainingType_DropDown');
    this.courseNoTxtbox = page.locator('#lupCourseID_CodeValue');
    this.courseTitleTxtbox = page.locator('#txtTitle');
    this.trainingFromDateTxtbox = page.locator('#dttmTrainingSchedule_Date_KPIDttmCtrl');
    this.trainingFromTimeTxtbox = page.locator("//table[@id=\'dttmTrainingSchedule_Time\']//input");
    this.trainingToDateTxtbox = page.locator('#dttmTo_Date_KPIDttmCtrl');
    this.trainingToTimeTxtbox = page.locator("//table[@id=\'dttmTo_Time\']//input");
    this.courseHoursTxtbox = page.locator('#txtCourseHours');
    this.multidayScheduleButton = page.locator('#cmdTrainingSchedule');
    this.duplicatedButton = page.locator('#cmdDuplicate');
    this.signUpButton = page.locator('#BtnSignUp');
    this.publishToButton = page.locator('#cmdPublishTo');
    this.cancelTheClassButton = page.locator('#cmdCancelClass');
    this.showInCalendarCheckbox = page.locator('#ChkShwSchCal');
    this.doNotPublishCheckbox = page.locator('#chkPublish');
    this.employeesOnlyCheckbox = page.locator('#chkEmployees');
    this.jurisComboBox = page.locator('#lstJuris');
    this.noOfStudents = page.locator('#txtNoStudents');
    this.studentsTab = page.locator("//span[text()=\'Students\']");
    this.trainingDetailTab = page.locator("//span[text()=\'Training Detail\']");
    this.instructorsTab = page.locator("//span[text()=\'Instructors\']");
    this.courseDescriptionTab = page.locator("//span[contains(text(),\'Course Description\')]");
    this.notesforStudentsTab = page.locator("//span[contains(text(),\'Notes For Students\')]");
    this.evaluationsTab = page.locator("//div[@id=\'tabUnit\'//span[contains(text(),\'Evaluations\')]");
    this.cEUsTab = page.locator("//div[@id=\'tabUnit\'//span[contains(text(),\'CEUs\')]");
    this.instructorNotesTab = page.locator("//div[@id=\'tabUnit\'//span[contains(text(),\'Instructor Notes\')]");
    this.attachmentTab = page.locator("//div[@id=\'tabUnit\'//span[contains(text(),\'Attachment\')]");
    this.courseLookUpIcon = page.locator('#lupCourseID_imgBtn');
    this.bottomMessage = page.locator("//td[@class=\'status\']//b");
    this.classYear = page.locator('#KPINumberCtrl1_Year');
    this.classNumber = page.locator("//input[@id=\'KPINumberCtrl1_Number\']");
    this.juris = page.locator('#lstJuris');
  }

  async closeScreen(): Promise<void> {
    // uIMapTraining.trainingClassEntry.driver.close();
  }

  async clickStudentTab(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uIStudentsTab.click();
  }

  async clickTrainingDetailTab(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uITrainingDetailTab.click();
  }

  async clickInstructorsTab(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uIInstructorsTab.click();
    // Playback.threadWait();
    // Playback.threadWait();
  }

  async clickCourseDescriptionTab(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uICourseDescriptionTab.click();
  }

  async clickNotesForStudentsTab(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uINotesforStudentsTab.click();
  }

  async clickInstructorNotesTab(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uIInstructorNotesTab.click();
    // objectIdentification.windowHandle.switchToFrame("frmLogHistory");
  }

  async clickEvaluationsTab(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uIEvaluationsTab.click();
  }

  async clickCEUsTab(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uICEUsTab.click();
  }

  async clickAttachmentTab(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uIAttachmentTab.click();
    // objectIdentification.windowHandle.switchToFrame("frmTxtAttachMgrEx");
  }

  async verifyAtJurisComboBox(): Promise<void> {
    // String selectedItem = objectIdentification.manualIdentify
    // .getDropDwonSelectedItem(uIMapTraining.trainingClassEntry.uIJurisComboBox);
    // verify.ExpectedPropertyValueIsEqual(selectedItem, BaseData.getTrainingModuleValue("Juris"));
  }

  async selectAtTrainingCategoryComboBox(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapTraining.trainingClassEntry.uITrainingCategoryComboBox,
    // BaseData.getTrainingModuleValue("TrainingCategory"));
  }

  async selectAtTrainingTypeComboBox(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapTraining.trainingClassEntry.uITrainingTypeComboBox,
    // BaseData.getTrainingModuleValue("TrainingType"));
  }

  async enterAtNoOfStudents(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uINoOfStudents.sendKeys(BaseData.getTrainingModuleValue("NoOfStudents"));
  }

  async clickDoNotPublishCheckBox(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uIDoNotPublishCheckbox.click();
  }

  async clickEmployeesOnlyCheckBox(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uIEmployeesOnlyCheckbox.click();
  }

  async enterFromDateAndToDateAsCurrentDate(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uITrainingFromDateTxtbox.sendKeys(Randomized.getCurrentDate());
    // uIMapTraining.trainingClassEntry.uITrainingFromTimeTxtbox.sendKeys(Keys.TAB);
    // uIMapTraining.trainingClassEntry.uITrainingToDateTxtbox.sendKeys(Randomized.getCurrentDate());
    // uIMapTraining.trainingClassEntry.uITrainingToTimeTxtbox.sendKeys(Keys.TAB);
  }

  async clickMultiScheduleButton(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uIMultidayScheduleButton.click();
  }

  async verifyActivityLogButtonIsDisabled(): Promise<void> {
    // String attribute = uIMapTraining.trainingClassEntry.uIActivityLogButton.getAttribute("disabled");
    // System.out.println(attribute);
    // verify.ExpectedValueIsTrue(attribute.contains("true"));
  }

  async verifyActivityLogButtonIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTraining.trainingClassEntry.uIActivityLogButton.isEnabled());
  }

  async clickActivityLogButton(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uIActivityLogButton.click();
  }

  async saveNCloseScreen(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uISaveNCloseButton.click();
    // if (Playback.browserType.equals("Chrome")) {
    // popup.confirm.yes();
    // else {
    // popup.switchToConfirm();
    // popup.confirm.yes();
  }

  async save(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async selectTrainingCategoryAsPolice(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapTraining.trainingClassEntry.uITrainingCategoryComboBox, "Police");
  }

  async selectTrainingTypeAsSeleniumTraining(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapTraining.trainingClassEntry.uITrainingTypeComboBox, "Selenium Training");
  }

  async enterEntryDate(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uIEntryDateTxtbox.sendKeys(Keys.TAB);
  }

  async enterNoOfStudentsAs1(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uINoOfStudents.sendKeys("1");
    // uIMapTraining.trainingClassEntry.uINoOfStudents.sendKeys(Keys.TAB);
  }

  async enterCourseNoAs1000(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uICourseNoTxtbox.sendKeys("1000");
    // uIMapTraining.trainingClassEntry.uICourseNoTxtbox.sendKeys(Keys.TAB);
  }

  async enterTrainingScheduleDate(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uITrainingFromDateTxtbox.sendKeys(Keys.TAB);
  }

  async enterTrainingScheduleTime(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uITrainingFromTimeTxtbox.sendKeys(Keys.TAB);
  }

  async enterToDate(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uITrainingToDateTxtbox.sendKeys(Keys.TAB);
  }

  async enterToTime(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uITrainingToTimeTxtbox.sendKeys(Keys.TAB);
  }

  async enterAtCourseNo(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uICourseNoTxtbox.sendKeys(BaseData.getTrainingModuleValue("Course"));
    // uIMapTraining.trainingClassEntry.uICourseNoTxtbox.sendKeys(Keys.TAB);
  }

  async clickourseLookUpIconAndSelectRandom(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uICourseLookUpIcon.click();
    // popup.switchToCodedSearch();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async EnterCourseHoursAs2(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uICourseHoursTxtbox.sendKeys("2");
  }

  async verifyAdditionalSuccessFullMessage(): Promise<void> {
    // try {
    // verify.ExpectedPropertyValueIsEqual(uIMapTraining.trainingClassEntry.uIBottomMessage.getText(),
    // "1002 - Addition Successful");
    // } catch (Exception e) {
    // verify.ExpectedPropertyValueIsEqual(uIMapTraining.trainingClassEntry.uIBottomMessage.getText(),
    // "1002 - Addition successful");
  }

  async verifyClassIDIsNotNull(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTraining.trainingClassEntry.uIClassYear != null);
    // verify.ExpectedValueIsTrue(uIMapTraining.trainingClassEntry.uIClassNumber != null);
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uIprintButton.click();
  }

  async clickSave(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uISaveButton.click();
  }

  async verifyPopUpDoesNotArise(): Promise<void> {
    // boolean checkAlertIsPresentOrNot = popup.confirm.checkAlertIsPresentOrNot();
    // verify.ExpectedValueIsFalse(checkAlertIsPresentOrNot);
  }

  async tabScheduleFromDate(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uITrainingFromDateTxtbox.sendKeys(Keys.TAB);
  }

  async enterAtScheduleToDate(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uITrainingToDateTxtbox.sendKeys(BaseData.getTrainingModuleValue("ToDate"));
    // uIMapTraining.trainingClassEntry.uITrainingToDateTxtbox.sendKeys(Keys.TAB);
  }

  async clickPublishToButton(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uIPublishToButton.click();
  }

  async verifyDoNotPublishCheckBoxIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapTraining.trainingClassEntry.uIDoNotPublishCheckbox.isEnabled());
  }

  async verifyPublishToTextInGreenColor(): Promise<void> {
    // System.out.println(uIMapTraining.trainingClassEntry.uIPublishToButton.getCssValue("color"));
    // verify.ExpectedPropertyValueIsEqual("rgba(0, 128, 0, 1)", uIMapTraining.trainingClassEntry.uIPublishToButton.getCssValue("color"));
  }

  async verifyDoNotPublishCheckBoxIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTraining.trainingClassEntry.uIDoNotPublishCheckbox.isEnabled());
  }

  async verifyPublishToTextInBlackColor(): Promise<void> {
    // System.out.println(uIMapTraining.trainingClassEntry.uIPublishToButton.getCssValue("color"));
    // verify.ExpectedPropertyValueIsEqual("rgba(0, 0, 0, 1)", uIMapTraining.trainingClassEntry.uIPublishToButton.getCssValue("color"));
  }

  async clickSignUpButton(): Promise<void> {
    // uIMapTraining.trainingClassEntry.uISignUpButton.click();
  }

  async verifyAtNoOfStudents(): Promise<void> {
    // String attribute = uIMapTraining.trainingClassEntry.uINoOfStudents.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute, BaseData.getTrainingModuleValue("NoOfStudents"));
  }

  async verifyAtCourseNo(): Promise<void> {
    // String attribute = uIMapTraining.trainingClassEntry.uICourseNoTxtbox.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute, BaseData.getTrainingModuleValue("CourseNo"));
  }

  async verifyCourseHours(readTotalHours: string): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapTraining.trainingClassEntry.uICourseHoursTxtbox.getAttribute("value").contains(readTotalHours));
  }

  async verifyFromDateAndToDateAsCurrentDate(): Promise<void> {
    // String attribute = uIMapTraining.trainingClassEntry.uITrainingFromDateTxtbox.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute, Randomized.getCurrentDate());
    // String attribute2 = uIMapTraining.trainingClassEntry.uITrainingToDateTxtbox.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute2, Randomized.getCurrentDate());
  }

  async verifyAtTrainingCategory(): Promise<void> {
    // String trainingCategory = objectIdentification.manualIdentify.getDropDownSelectedItem
    // (uIMapTraining.trainingClassEntry.uITrainingCategoryComboBox);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("TrainingCategory"), trainingCategory);
  }

  async verifyAtTrainingType(i: number): Promise<void> {
    // String trainingType = objectIdentification.manualIdentify.getDropDownSelectedItem
    // (uIMapTraining.trainingClassEntry.uITrainingTypeComboBox);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTrainingModuleValue("TrainingType" + i), trainingType);
  }

}

export class TrainingScheduleEntryPage {
  readonly page: Page;
  readonly trainingStartDateEdit: Locator;
  readonly trainingEndDateEdit: Locator;
  readonly classHoursFromEdit: Locator;
  readonly classHoursToEdit: Locator;
  readonly addButton: Locator;
  readonly saveNClose: Locator;
  readonly save: Locator;
  readonly totalHours: Locator;
  readonly bottomMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.trainingStartDateEdit = page.locator('#dtStartDttm_KPIDttmCtrl');
    this.trainingEndDateEdit = page.locator('#dtStartDttm_KPIDttmCtrl');
    this.classHoursFromEdit = page.locator("//input[@class=\'igte_BlueThemeEditInContainer\'and@tabindex=\'502\']");
    this.classHoursToEdit = page.locator("//input[@class=\'igte_BlueThemeEditInContainer\'and@tabindex=\'503\']");
    this.addButton = page.locator('#imgAdd');
    this.saveNClose = page.locator('#cmdSaveNClose');
    this.save = page.locator('#cmdSave');
    this.totalHours = page.locator('#kpiTotHrs');
    this.bottomMessage = page.locator("//td[@class=\'status\']//b");
  }

  async tabOutTrainingStartAndEndDate(): Promise<void> {
    // uIMapTraining.trainingScheduleEntry.uITrainingStartDateEdit.sendKeys(Keys.TAB);
    // uIMapTraining.trainingScheduleEntry.uITrainingEndDateEdit.sendKeys(Keys.TAB);
  }

  async enterClassHoursFromAndToFields(): Promise<void> {
    // uIMapTraining.trainingScheduleEntry.uIClassHoursFromEdit.sendKeys(Keys.TAB);
    // uIMapTraining.trainingScheduleEntry.uIClassHoursToEdit
    // .sendKeys(Randomized.getFutureTimeByHours(2, "HH:MM"));
    // uIMapTraining.trainingScheduleEntry.uIClassHoursToEdit.sendKeys(Keys.TAB);
  }

  async clickAddButton(): Promise<void> {
    // uIMapTraining.trainingScheduleEntry.uIAddButton.click();
  }

  async saveNClose(): Promise<void> {
    // uIMapTraining.trainingScheduleEntry.uISaveNClose.click();
    // popup.confirm.yes();
  }

  async save(): Promise<void> {
    // uIMapTraining.trainingScheduleEntry.uISave.click();
    // popup.confirm.yes();
  }

  async verifyAdditionSuccesfulStatusMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapTraining.trainingScheduleEntry.uIBottomMessage.getText(),
    // "1002 - Addition Successful");
  }

  async readTotalHours(): Promise<string> {
    // System.out.println("get value" + uIMapTraining.trainingScheduleEntry.uITotalHours.getAttribute("value"));
    // String totalHours = uIMapTraining.trainingScheduleEntry.uITotalHours.getAttribute("value");
    // return totalHours;
  }

  async readStartDate(): Promise<string> {
    // String startDate = uIMapTraining.trainingScheduleEntry.uITrainingStartDateEdit.getAttribute("value");
    // System.out.println(startDate);
    // return startDate;
  }

  async readEndDate(): Promise<string> {
    // String endDate = uIMapTraining.trainingScheduleEntry.uITrainingEndDateEdit.getAttribute("value");
    // System.out.println(endDate);
    // return endDate;
  }

}

export class MultiPFWindowPage {
  readonly page: Page;
  readonly selectPFRadOpenComboBox: Locator;
  readonly addSelectedPFToList: Locator;
  readonly selectAllCheckBox: Locator;
  readonly publishButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selectPFRadOpenComboBox = page.locator('#RadMultiplePFTreeView');
    this.addSelectedPFToList = page.locator('#btnAddPFs');
    this.selectAllCheckBox = page.locator('#chkSelectAll');
    this.publishButton = page.locator('#btnAddPFs');
  }

  async clickselectAllCheckBox(): Promise<void> {
    // uIMapTraining.multiPFWindow.uISelectAllCheckBox.click();
  }

  async clickAddSelectedPFToList(): Promise<void> {
    // uIMapTraining.multiPFWindow.uIAddSelectedPFToList.click();
  }

  async clickAtPFByName(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // String PFName = BaseData.getActivityModuleValue("AutoPFName");
    // WebElement PFCheckBox = Playback.driver
    // .findElement(By.xpath("//div[@id='RadMultiplePFTreeView']// span[contains(text(),'" + PFName
    // + "')]/preceding-sibling::span[@class='rtUnchecked']"));
    // PFCheckBox.click();
  }

  async clickPublishButton(): Promise<void> {
    // uIMapTraining.multiPFWindow.uIPublishButton.click();
  }

  async clickAtCheckedPFByName(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // String PFName = BaseData.getActivityModuleValue("AutoPFName");
    // WebElement PFCheckBox = Playback.driver
    // .findElement(By.xpath("//div[@id='RadMultiplePFTreeView']// span[contains(text(),'" + PFName
    // + "')]/preceding-sibling::span[@class='rtChecked']"));
    // PFCheckBox.click();
  }

}

