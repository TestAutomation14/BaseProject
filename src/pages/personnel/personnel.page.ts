// @ts-nocheck
import { Page, Locator, FrameLocator } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { AcknowledgePage, ConfirmPage } from '../popup.page';

export class PersonnelPage {
  private page: Page;
  private browserHelpers: BrowserHelpers;

  constructor(page: Page) {
    this.page = page;
    this.browserHelpers = new BrowserHelpers(page);
  }

  async switchToPersonnelSearch() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmPersonnelSrch');
  }

  async switchToPersonnelEntry() {
    return this.browserHelpers.switchToPageByTitle('Personnel Entry');
  }

  async switchToPersonnelEntryURL() {
    return this.browserHelpers.switchToPageByUrl('frmPersonnel.aspx');
  }

  async switchToPerformanceReview() {
    return this.browserHelpers.switchToMainWindowScreenTab('Personnel/frmEvaluationSrch');
  }

  async switchToPerformanceReviewEntry() {
    return this.browserHelpers.switchToPageByTitle('Performance Review Entry');
  }

  async switchToAssignmentHistoryScreen() {
    return this.browserHelpers.switchToPageByUrl('frmAssignmentHistory');
  }

  async switchToPersonnelLockDetailsScreen() {
    return this.browserHelpers.switchToPageByUrl('frmPersonnelLockDetails');
  }

  async switchToBatchUpdateSearch() {
    return this.browserHelpers.switchToMainWindowScreenTab('Personnel/frmBatchUpdateSrch');
  }

  async switchToBatchUpdateEntry() {
    return this.browserHelpers.switchToPageByTitle('Batch Update');
  }

  async switchToInjuryRptSearch() {
    return this.browserHelpers.switchToMainWindowScreenTab('Personnel/frmInjurySrch');
  }

  async switchToMedHistorySearch() {
    return this.browserHelpers.switchToMainWindowScreenTab('Personnel/frmMedicalHistSrch');
  }

  async switchToWorkHistorySearch() {
    return this.browserHelpers.switchToMainWindowScreenTab('Personnel/frmPersonnelcmtSrch');
  }

  async switchToAllowanceCode() {
    return this.browserHelpers.switchToMainWindowScreenTab('FRPersonnel/frmPFAllowCodeSrch.aspx');
  }

  async switchToAllowanceCodeEntry() {
    return this.browserHelpers.switchToPageByTitle('Allowance Code Entry');
  }

  async switchToWorkHistoryEntry() {
    return this.browserHelpers.switchToPageByTitle('Work History Entry');
  }

  async switchToUserParamScreen() {
    return this.browserHelpers.switchToPageByUrl('frmPersonnel.aspx?hdnType=UserParam&hdnMode=CHG');
  }

  async switchToSupervisorSearch() {
    return this.browserHelpers.switchToMainWindowScreenTab('Setup/frmPersonnelSrch');
  }

  async switchToInjuryReportEntry() {
    return this.browserHelpers.switchToPageByTitle('Injury Rpt Entry');
  }

  async switchToMedicalHistoryEntry() {
    return this.browserHelpers.switchToPageByTitle('Medical History Entry');
  }

  async switchToOrganizationChart() {
    return this.browserHelpers.switchToMainWindowScreenTab('Organization Chart');
  }

  async switchToReportsDue() {
    return this.browserHelpers.switchToPageByTitle('Reports Due');
  }

  async switchToMultiJurisRoles() {
    return this.browserHelpers.switchToPageByTitle('MultiJuris Roles');
  }

  async switchToInjuryRptEntryApprovalScreen() {
    return this.browserHelpers.switchToPageByUrl('Home/frmPnxApprovalRequest.aspx');
  }

  async switchToWorkHistoryApprovalEntry() {
    return this.browserHelpers.switchToPageByUrl('Home/frmPnxApprovalRequest.aspx');
  }

  async switchToInjuryReportEntryUsingURL() {
    return this.browserHelpers.switchToPageByUrl('frmInjuryEntry');
  }

}

export class PersonnelSearchPage {
  readonly page: Page;
  readonly pFSubAgency: Locator;
  readonly searchButton: Locator;
  readonly productHelpIcon: Locator;
  readonly resetButton: Locator;
  readonly addNewButton: Locator;
  readonly refreshButton: Locator;
  readonly backButton: Locator;
  readonly unlockButton: Locator;
  readonly pFCodeEdit: Locator;
  readonly pFDesEdit: Locator;
  readonly divisionComboBox: Locator;
  readonly jurisComboBox: Locator;
  readonly sectionComboBox: Locator;
  readonly loginUserNameEdit: Locator;
  readonly fireCheckBox: Locator;
  readonly personnelResultTable: Locator;
  readonly nextIcon: Locator;
  readonly prevIcon: Locator;
  readonly mJRolesButton: Locator;
  readonly groupTextView: Locator;
  readonly groupComboBox: Locator;
  readonly divisionLabel: Locator;
  readonly teamTextView: Locator;
  readonly teamComboBox: Locator;
  readonly sectionTextView: Locator;
  readonly squadComboBox: Locator;
  readonly squadTextView: Locator;
  readonly printIconButton: Locator;
  readonly pFInfoIcon: Locator;
  readonly isLockedCheckBox: Locator;
  readonly supervisorPFCodeEdit: Locator;
  readonly supervisorPFDesEdit: Locator;
  readonly hiredDateFromEdit: Locator;
  readonly hiredDateToEdit: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly sortBy: Locator;
  readonly type: Locator;
  readonly title: Locator;
  readonly dateFrom: Locator;
  readonly dateTo: Locator;
  readonly workHistoryCategory: Locator;
  readonly rFIDTag: Locator;
  readonly email: Locator;
  readonly excelIcon: Locator;
  readonly badgeField: Locator;
  readonly checkBoxsHeaderPart: Locator;
  readonly pfCodeHeaderPart: Locator;
  readonly pfNameHeaderPart: Locator;
  readonly hideTheColumnButton: Locator;
  readonly columnDisplaySettingsIcon: Locator;
  readonly includeInactiveCheckbox: Locator;
  readonly pFLookUpIcon: Locator;
  readonly shiftDropDown: Locator;
  readonly detailHierarchyOrderDropDown: Locator;
  readonly detailRateDropDown: Locator;
  readonly jobGradeDropDown: Locator;
  readonly nextReviewDueInDropDown: Locator;
  readonly nextReviewDueInDateEdit: Locator;
  readonly performamceEvaluationCheckBox: Locator;
  readonly securityDropDown: Locator;
  readonly specialSkillDropDown: Locator;
  readonly employeeNumberEdit: Locator;
  readonly qAFormData: Locator;
  readonly medicalHistoryCodeDropDown: Locator;
  readonly byDateEdit: Locator;
  readonly nextButton: Locator;
  readonly prevButton: Locator;
  readonly supervisorLookUpIcon: Locator;
  readonly shiftDropDownArrow: Locator;
  readonly raceDropDownInputForFire: Locator;
  readonly raceDropDownForFire: Locator;
  readonly ethnicityDropDownForFire: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pFSubAgency = page.locator('#cddSubAgency_DropDown');
    this.searchButton = page.locator("//span[contains(text(),\'Search\')]");
    this.productHelpIcon = page.locator("//div[@id=\'divKPIHelp\']//img[contains(@onClick,\'KPILoadHelp(1211)\')]");
    this.resetButton = page.locator("//span[contains(text(),\'Reset\')]");
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.refreshButton = page.locator("//span[contains(text(),\'Refresh\')]");
    this.backButton = page.locator("//span[contains(text(),\'Back\')]");
    this.unlockButton = page.locator("//span[contains(text(),\'Unlock\')]");
    this.pFCodeEdit = page.locator('#lupOffPFID_CodeValue');
    this.pFDesEdit = page.locator('#lupOffPFID_CodeDescription');
    this.divisionComboBox = page.locator('#cddDivision_DropDown');
    this.jurisComboBox = page.locator('#lstJuris');
    this.sectionComboBox = page.locator('#cddSection_DropDown');
    this.loginUserNameEdit = page.locator('#txtLoginUserName');
    this.fireCheckBox = page.locator('#chkShowFire');
    this.personnelResultTable = page.locator("//div[@id=\'grdPersonnel\']");
    this.nextIcon = page.locator('#grdPersonnel_ctl01_lnkbtnNext');
    this.prevIcon = page.locator('#grdPersonnel_ctl01_lnkbtnPrev');
    this.mJRolesButton = page.locator("//span[contains(text(),\'MJ Roles\')]");
    this.groupTextView = page.locator('#lblWorkgroup');
    this.groupComboBox = page.locator('#cddWorkgroup_DropDown');
    this.divisionLabel = page.locator('#lblDivision');
    this.teamTextView = page.locator('#lblTeam');
    this.teamComboBox = page.locator('#cddTeam_DropDown');
    this.sectionTextView = page.locator('#lblSection');
    this.squadComboBox = page.locator('#cddSquad_DropDown');
    this.squadTextView = page.locator('#lblSquad');
    this.printIconButton = page.locator("//img[@src = \'/KPIImages/ico/16_print.gif\']");
    this.pFInfoIcon = page.locator('#lupOffPFID_cmdIncOnAddr');
    this.isLockedCheckBox = page.locator('#chkLocked');
    this.supervisorPFCodeEdit = page.locator('#lupSupervisor_CodeValue');
    this.supervisorPFDesEdit = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_lupSupervisor_CodeDescription');
    this.hiredDateFromEdit = page.locator('#dtcHiredFrom_KPIDttmCtrl');
    this.hiredDateToEdit = page.locator('#dtcHiredTo_KPIDttmCtrl');
    this.firstName = page.locator('#txtFirstName');
    this.lastName = page.locator('#txtLastName');
    this.sortBy = page.locator('#cddOrderBy');
    this.type = page.locator('#cddType_DropDown');
    this.title = page.locator('#cddTitleRank_DropDown');
    this.dateFrom = page.locator('#dtcFromDate_KPIDttmCtrl');
    this.dateTo = page.locator('#dtcToDate_KPIDttmCtrl');
    this.workHistoryCategory = page.locator('#cddWorkHistroy_DropDown');
    this.rFIDTag = page.locator('#txtPFRFID');
    this.email = page.locator('#txtEmail');
    this.excelIcon = page.locator("//img[@src = \'/KPIImages/ico/16_excel.gif\']");
    this.badgeField = page.locator('#txtBadgeNo');
    this.checkBoxsHeaderPart = page.locator("//th[@key=\'chkSelect\']");
    this.pfCodeHeaderPart = page.locator("//span[text()=\'PF Code\']");
    this.pfNameHeaderPart = page.locator("//span[text()=\'PF Name\']");
    this.hideTheColumnButton = page.locator('#divhide');
    this.columnDisplaySettingsIcon = page.locator("//a[@class=\'igdm_BlueThemeMenuItemHorizontalRootLink \']//img[contains(@src,\'Phoenix/Settings_16.png\')]");
    this.includeInactiveCheckbox = page.locator('#chkIsActive');
    this.pFLookUpIcon = page.locator('#lupOffPFID_imgBtn');
    this.shiftDropDown = page.locator('#cddShift_DropDown');
    this.detailHierarchyOrderDropDown = page.locator('#cddDetailPeckingOrder_DropDown');
    this.detailRateDropDown = page.locator('#cddDetailRateType_DropDown');
    this.jobGradeDropDown = page.locator('#cddJobGrade');
    this.nextReviewDueInDropDown = page.locator('#cddNextReviewDuein_DropDown');
    this.nextReviewDueInDateEdit = page.locator('#dtmORBy_KPIDttmCtrl');
    this.performamceEvaluationCheckBox = page.locator('#chkPerformance');
    this.securityDropDown = page.locator('#cddSecurityRoles_DropDown');
    this.specialSkillDropDown = page.locator('#cddSpecialSkills_DropDown');
    this.employeeNumberEdit = page.locator('#txtEmployeeNo');
    this.qAFormData = page.locator('#txtQAFormData');
    this.medicalHistoryCodeDropDown = page.locator('#cddMedicalHistory_DropDown');
    this.byDateEdit = page.locator('#dtmORBy_KPIDttmCtrl');
    this.nextButton = page.locator('#grdAllowanceSrch_ctl00_lnkbtnNext');
    this.prevButton = page.locator('#grdAllowanceSrch_ctl00_lnkbtnPrev');
    this.supervisorLookUpIcon = page.locator('#lupSupervisor_imgBtn');
    this.shiftDropDownArrow = page.locator('#cddShift_Arrow');
    this.raceDropDownInputForFire = page.locator('#radRace_Input');
    this.raceDropDownForFire = page.locator('#radRace_DropDown');
    this.ethnicityDropDownForFire = page.locator('#cddHispanic_DropDown');
  }

  async selectSubAgnecyDropdown(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIPFSubAgency.sendKeys(BaseData.getPersonnelModuleValue("SubAgency"));
  }

  async enterAtPF(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIPFCodeEdit.sendKeys(BaseData.getPersonnelModuleValue("PFCode"));
    // uIMapPersonnel.personnelSearch.uIPFCodeEdit.sendKeys(Keys.TAB);
    // uIMapPersonnel.personnelSearch.uIPFCodeEdit.sendKeys(Keys.TAB);
  }

  async enterAtPFNo(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIPFCodeEdit.sendKeys(BaseData.getPersonnelModuleValue("PFNo"));
    // uIMapPersonnel.personnelSearch.uIPFCodeEdit.sendKeys(Keys.TAB);
  }

  async clickSearchButton(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uISearchButton.click();
  }

  async clickProductHelpIcon(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIProductHelpIcon.click();
  }

  async clickAddNewButton(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIAddNewButton.click();
  }

  async verifyActiveDivision(columnValues: string[]): Promise<void> {
    // List<String> dropdownList = objectIdentification.manualIdentify
    // .getDropDownValues(uIMapPersonnel.personnelSearch.uIDivisionComboBox);
    // verify.ExpectedListValueIsTrue(columnValues, dropdownList);
  }

  async clickResetButton(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIResetButton.click();
  }

  async clickRefreshButton(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIRefreshButton.click();
    // Playback.pageLoadThreadWait();
  }

  async enterAtLoginUserName(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uILoginUserNameEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("LoginUserName"));
  }

  async selectAsDivision(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelSearch.uIDivisionComboBox,
    // "Administration");
  }

  async selectAsSection(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelSearch.uISectionComboBox,
    // "Community Support");
  }

  async selectAtDivision(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelSearch.uIDivisionComboBox,
    // BaseData.getPersonnelModuleValue("Division"));
  }

  async selectAtJuris(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelSearch.uIJurisComboBox,
    // BaseData.getPersonnelModuleValue("Juris"));
  }

  async selectJurisAsProphoenix(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelSearch.uIJurisComboBox,
    // "PX - ProPhoenix");
  }

  async selectAtSection(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelSearch.uISectionComboBox,
    // BaseData.getPersonnelModuleValue("Section"));
  }

  async verifyAtPFCodeInGrid(rowIndex: number): Promise<void> {
    // String PFCode = objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapPersonnel.personnelSearch.uIPersonnelResultTable, "PF Code", rowIndex);
    // verify.ExpectedValueIsTrue(PFCode.contains(BaseData.getPersonnelModuleValue("PFCode")));
  }

  async verifyAtPFNameInGrid(rowIndex: number): Promise<void> {
    // String PFCode = objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapPersonnel.personnelSearch.uIPersonnelResultTable, "PF Name", rowIndex);
    // verify.ExpectedValueIsTrue(PFCode.contains(BaseData.getPersonnelModuleValue("PFName")));
  }

  async selectRowAtPFCode(): Promise<void> {
    // Playback.threadWait();
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapPersonnel.personnelSearch.uIPersonnelResultTable, BaseData.getPersonnelModuleValue("PFCode"));
    // Playback.threadWait();
    // Playback.threadWait();
  }

  async selectRowByPFCodeAsAUTO(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectGridRowByCellInnerText(uIMapPersonnel.personnelSearch.uIPersonnelResultTable, "AUTO");
  }

  async selectRowAtName(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapPersonnel.personnelSearch.uIPersonnelResultTable, BaseData.getPersonnelModuleValue("Name"));
  }

  async clickFireCheckBox(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIFireCheckBox.click();
  }

  async clickGroupTextView(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIGroupTextView.click();
  }

  async clickDivisionLabel(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIDivisionLabel.click();
  }

  async clickTeamTextView(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uITeamTextView.click();
  }

  async clickSquadTextView(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uISquadTextView.click();
  }

  async clickSectionTextView(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uISectionTextView.click();
  }

  async verifyAtSection(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Section"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapPersonnel.personnelSearch.uIPersonnelResultTable, "Sections", rowIndex));
  }

  async verifyNextIconDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelSearch.uINextIcon.isDisplayed());
  }

  async verifyAtDivision(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Division"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapPersonnel.personnelSearch.uIPersonnelResultTable, "Division", rowIndex));
  }

  async verifyAtBadge(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Badge"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapPersonnel.personnelSearch.uIPersonnelResultTable, "Badge", rowIndex));
  }

  async verifyAtTitleRank(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("TitleRank"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapPersonnel.personnelSearch.uIPersonnelResultTable, "Title", rowIndex));
  }

  async verifyMJRolesDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapPersonnel.personnelSearch.uIMJRolesButton.isEnabled());
  }

  async verifyMJRolesDisabledinRightClick(): Promise<void> {
    // WebElement MJRoles = objectIdentification.manualIdentify.getContextMenuItemInTheGridRow(
    // uIMapPersonnel.personnelSearch.uIPersonnelResultTable, BaseData.getPersonnelModuleValue("PFCode"),
    // "MJ Roles");
    // verify.ExpectedValueIsTrue(MJRoles.getAttribute("unselectable").toString().contains("on"));
  }

  async verifyAcknowledgeMessage(): Promise<void> {
    // if (Playback.browserType.equals("Chrome")) {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
    // } else
    // popup.acknowledge.okWithExpectedMessage(" 1011 - No Record Found");
    // Playback.controlReadyThreadWait();
  }

  async verifyAsSection(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("Community Support", objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapPersonnel.personnelSearch.uISectionComboBox));
  }

  async verifyAsDivision(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("Administration", objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapPersonnel.personnelSearch.uIDivisionComboBox));
  }

  async verifySectionFieldHide(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // Boolean.parseBoolean(uIMapPersonnel.personnelSearch.uISectionComboBox.getAttribute("disabled")));
  }

  async verifySquadHide(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // Boolean.parseBoolean(uIMapPersonnel.personnelSearch.uISquadComboBox.getAttribute("disabled")));
  }

  async verifyTeamHide(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // Boolean.parseBoolean(uIMapPersonnel.personnelSearch.uITeamComboBox.getAttribute("disabled")));
  }

  async verifyGroupHide(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // Boolean.parseBoolean(uIMapPersonnel.personnelSearch.uIGroupComboBox.getAttribute("disabled")));
  }

  async verifyDivisionHide(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // Boolean.parseBoolean(uIMapPersonnel.personnelSearch.uIDivisionComboBox.getAttribute("disabled")));
  }

  async clickPrintButton(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIPrintIconButton.click();
  }

  async selectRowAtPFName(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapPersonnel.personnelSearch.uIPersonnelResultTable, BaseData.getPersonnelModuleValue("PFName"));
  }

  async clickPFInfoIcon(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIPFInfoIcon.click();
    // Playback.pageLoadThreadWait();
  }

  async clickLockedCheckBox(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIIsLockedCheckBox.click();
  }

  async enterAtSupervisorPFCode(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uISupervisorPFCodeEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("SupervisorPF"));
    // uIMapPersonnel.personnelSearch.uISupervisorPFCodeEdit.sendKeys(Keys.TAB);
  }

  async verifyAtSupervisorWithInActive(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("##" + BaseData.getPersonnelModuleValue("Supervisor"),
    // uIMapPersonnel.personnelSearch.uISupervisorPFDesEdit.getAttribute("value"));
  }

  async enterAtSupervisorPFCode1(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uISupervisorPFCodeEdit.clear();
    // Playback.controlReadyThreadWait();
    // uIMapPersonnel.personnelSearch.uISupervisorPFCodeEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("SupervisorPF1"));
    // uIMapPersonnel.personnelSearch.uISupervisorPFCodeEdit.sendKeys(Keys.TAB);
  }

  async verifyAtSupervisor1WithActive(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Supervisor1"),
    // uIMapPersonnel.personnelSearch.uISupervisorPFDesEdit.getAttribute("value"));
  }

  async verifyPFValidateInfoIconDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelSearch.uIPFInfoIcon.isDisplayed());
  }

  async verifyNoRecordFoundAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
    // //			if (Playback.browserType.equals("Chrome")) {
    // //				popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
    // //			} else
    // //				popup.acknowledge.okWithExpectedMessage(" 1011 - No Record Found");
    // //			Playback.controlReadyThreadWait();
  }

  async selectRowInGrid(rowIndex: number): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectGridTableRow(uIMapPersonnel.personnelSearch.uIPersonnelResultTable, rowIndex);
  }

  async verifyFromHiredDateIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelSearch.uIHiredDateFromEdit.isDisplayed());
  }

  async verifyToHiredDateIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelSearch.uIHiredDateToEdit.isDisplayed());
  }

  async enterAtFromHiredDate(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIHiredDateFromEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("FromHiredDate"));
    // uIMapPersonnel.personnelSearch.uIHiredDateFromEdit.sendKeys(Keys.TAB);
  }

  async enterToHiredDateAsCurrentDate(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIHiredDateToEdit.sendKeys(Randomized.getCurrentDate());
    // uIMapPersonnel.personnelSearch.uIHiredDateToEdit.sendKeys(Keys.TAB);
  }

  async verifyAtPFNameInGrid(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapPersonnel.personnelSearch.uIPersonnelResultTable, BaseData.getPersonnelModuleValue("PFName"));
    // verify.ExpectedValueIsTrue(
    // gridRowByCellInnerText.getText().contains(BaseData.getPersonnelModuleValue("PFName")));
  }

  async clickBackButton(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIBackButton.click();
  }

  async enterAtFirstName(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIFirstName.sendKeys(BaseData.getPersonnelModuleValue("FirstName"));
  }

  async enterAtLastName(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uILastName.sendKeys(BaseData.getPersonnelModuleValue("LastName"));
  }

  async selectAtSortBy(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelSearch.uISortBy,
    // BaseData.getPersonnelModuleValue("SortBy"));
  }

  async selectAtType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelSearch.uIType,
    // BaseData.getPersonnelModuleValue("Type"));
  }

  async selectAtTitle(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelSearch.uITitle,
    // BaseData.getPersonnelModuleValue("Title"));
  }

  async enterAtDateFrom(i: number): Promise<void> {
    // if (i == 0) {
    // uIMapPersonnel.personnelSearch.uIDateFrom.sendKeys(BaseData.getPersonnelModuleValue("DateFrom"));
    // } else {
    // uIMapPersonnel.personnelSearch.uIDateFrom.sendKeys(BaseData.getPersonnelModuleValue("DateFrom" + i));
  }

  async enterAtDateTo(i: number): Promise<void> {
    // if (i == 0) {
    // uIMapPersonnel.personnelSearch.uIDateTo.sendKeys(BaseData.getPersonnelModuleValue("DateTo"));
    // } else {
    // uIMapPersonnel.personnelSearch.uIDateTo.sendKeys(BaseData.getPersonnelModuleValue("DateTo" + i));
  }

  async selectAtWorkHistoryCode(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelSearch.uIWorkHistoryCategory,
    // BaseData.getPersonnelModuleValue("WorkHistoryCat"));
  }

  async enterAtRFIDTag(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIRFIDTag.sendKeys(BaseData.getPersonnelModuleValue("RFIDTag"));
  }

  async verifyPersonnelEntryScreenExist(): Promise<void> {
    // objectIdentification.windowHandle.windowExist("Personnel Entry");
  }

  async verifySelectReportScreenExist(): Promise<void> {
    // objectIdentification.windowHandle.windowExist("Select Report");
  }

  async clickExportToExcelIcon(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIExcelIcon.click();
  }

  async verifyDocumentDownloaded(): Promise<void> {
    // objectIdentification.filesHandle.verifyRecentDownloadedFileFormat(".xlsx");
  }

  async enterAtEmail(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIEmail.sendKeys(BaseData.getPersonnelModuleValue("Email"));
  }

  async selectRandomRow(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectRandomGridRow(uIMapPersonnel.personnelSearch.uIPersonnelResultTable);
  }

  async enterAtBadge(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIBadgeField.sendKeys(BaseData.getPersonnelModuleValue("Badge"));
  }

  async verifyAtBadgefield(): Promise<void> {
    // String Text = uIMapPersonnel.personnelSearch.uIBadgeField.getAttribute("value");
    // System.out.println(Text);
    // verify.ExpectedValueIsFalse(Text.contains(BaseData.getPersonnelModuleValue("Badge")));
  }

  async RandomdoubleClickOnAllColumn(): Promise<void> {
    // String text= null;
    // List<WebElement> Displayedcell = new ArrayList<WebElement>();
    // List<WebElement> rowsCollection = objectIdentification.manualIdentify
    // .getGridTableRowsCollection(uIMapPersonnel.personnelSearch.uIPersonnelResultTable);
    // for (WebElement row : rowsCollection) {
    // if (row.getAttribute("class").contains("igg_BlueThemeActiveRow")) {
    // List<WebElement> cells = row.findElements(By.tagName("td"));
    // for (WebElement cell : cells)
    // if (cell.isDisplayed() == true) {
    // Displayedcell.add(cell);
    // for (int i = 0; i <= Displayedcell.size(); i++) {
    // WebElement c = Displayedcell.get(i);
    // if(i>=6) {
    // Playback.actionDriver.doubleClick(c).sendKeys("12345").build().perform();
    // boolean res = objectIdentification.windowHandle.windowExist("Personnel Entry");
    // if (res == true) {
    // objectIdentification.windowHandle.switchToWindow("Personnel Entry");
    // uIMapPersonnel.personnelEntry.uISaveAndCloseButton.click();
    // popup.confirm.yes();
    // objectIdentification.windowHandle.switchToWindow("Personnel Entry");
    // uIMapPersonnel.personnelEntry.uISaveAndCloseButton.click();
    // popup.confirm.yes();
    // } else
    // objectIdentification.windowHandle.switchToMainWindowScreenTab("Personnel Search");
    // try {
    // objectIdentification.windowHandle.switchToMainWindowScreenTab("Personnel Search");
    // text = c.getDomAttribute("innerText");
    // verify.ExpectedPropertyValueIsEqual(text, "12345");
    // System.out.println("Element is Editable");
    // } catch (Exception e) {
    // e.printStackTrace();
    // System.out.println("Element is non Editable");
    // } catch (Error e) {
    // System.out.println("Erro is non Editable" + "--------ERROR");
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelSearch.uIBackButton.isDisplayed());
  }

  async MouseOverBackButton(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // Playback.actionDriver.moveToElement(uIMapPersonnel.personnelSearch.uIBackButton).build().perform();
  }

  async MouseOverUnlockButton(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // Playback.actionDriver.moveToElement(uIMapPersonnel.personnelSearch.uIUnlockButton).build().perform();
  }

  async MouseOverMJRolesButton(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // Playback.actionDriver.moveToElement(uIMapPersonnel.personnelSearch.uIMJRolesButton).build().perform();
  }

  async MouseOverAddNewButton(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // Playback.actionDriver.moveToElement(uIMapPersonnel.personnelSearch.uIAddNewButton).build().perform();
  }

  async MouseOverResetButton(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // Playback.actionDriver.moveToElement(uIMapPersonnel.personnelSearch.uIResetButton).build().perform();
  }

  async MouseOverSearchButton(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // Playback.actionDriver.moveToElement(uIMapPersonnel.personnelSearch.uISearchButton).build().perform();
  }

  async verifyAtBackToolTip(): Promise<void> {
    // String text = uIMapPersonnel.personnelSearch.uIBackButton.getAttribute("title");
    // System.out.println(text);
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getPersonnelModuleValue("Back")));
  }

  async verifyAtUnlockToolTip(): Promise<void> {
    // String text = uIMapPersonnel.personnelSearch.uIUnlockButton.getAttribute("title");
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getPersonnelModuleValue("Unlock")));
  }

  async verifyAtMJRolesToolTip(): Promise<void> {
    // String text = uIMapPersonnel.personnelSearch.uIMJRolesButton.getAttribute("title");
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getPersonnelModuleValue("MJRoles")));
  }

  async verifyAtAddNewToolTip(): Promise<void> {
    // String text = uIMapPersonnel.personnelSearch.uIAddNewButton.getAttribute("title");
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getPersonnelModuleValue("AddNew")));
  }

  async verifyAtResetToolTip(): Promise<void> {
    // String text = uIMapPersonnel.personnelSearch.uIResetButton.getAttribute("title");
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getPersonnelModuleValue("Reset")));
  }

  async verifyAtSearchToolTip(): Promise<void> {
    // String text = uIMapPersonnel.personnelSearch.uISearchButton.getAttribute("title");
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getPersonnelModuleValue("Search")));
  }

  async verifyAcknowledgeWindowExist(): Promise<void> {
    // boolean b =objectIdentification.windowHandle.windowExist("Acknowledge");
    // if (objectIdentification.windowHandle.windowExist("Acknowledge"))
    // objectIdentification.windowHandle.switchToWindow("Acknowledge");
    // System.out.println(uIMapPopup.acknowledgeWindow.uIErrorInfoTextEdit.getText());
    // Playback.controlReadyThreadWait();
    // verify.ExpectedValueIsFalse(b);
    // verify.ExpectedValueIsFalse(b);
  }

  async clickCheckBoxsHeaderPart(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uICheckBoxsHeaderPart.click();
  }

  async verifyAtColumnValuesAreSortedAscending(ColumnValue: string): Promise<void> {
    // objectIdentification.manualIdentify.selectGridHeaderColumnNameWithSpan(uIMapPersonnel.personnelSearch.uIPersonnelResultTable,ColumnValue);
    // List<String>Aftersort  = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapPersonnel.personnelSearch.uIPersonnelResultTable,ColumnValue);
    // System.out.println(Aftersort+"---------verifyAtColumnValuesAreSortedAscending");
    // int size = 	Aftersort.size();
    // for(int i=0 ; i<size ; i++) {
    // List<String>sorted = ListColumnvalues.stream().sorted(String.CASE_INSENSITIVE_ORDER).collect(Collectors.toList());
    // System.out.println(sorted+"---------verifyAtColumnValuesAreSortedAscending");
    // String sortedvalue = sorted.get(i);
    // verify.ExpectedPropertyValueIsEqual(sortedvalue, Aftersort.get(i));
  }

  async getGridColumnValues(columnValue: string): Promise<void> {
    // List<String> columnValues = objectIdentification.manualIdentify.
    // getGridTableColumnValues(uIMapPersonnel.personnelSearch.uIPersonnelResultTable,columnValue);
    // return columnValues;
  }

  async verifyAtColumnValuesAreSortedDescending(ColumnValue: string): Promise<void> {
    // objectIdentification.manualIdentify.selectGridHeaderColumnNameWithSpan(uIMapPersonnel.personnelSearch.uIPersonnelResultTable,ColumnValue);
    // List<String>Aftersort  = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapPersonnel.personnelSearch.uIPersonnelResultTable,ColumnValue);
    // int size = 	Aftersort.size();
    // for(int i=0 ; i<size ; i++) {
    // List<String>sorted = ListColumnvalues.stream().sorted(String.CASE_INSENSITIVE_ORDER.reversed()).collect(Collectors.toList());
    // String sortedvalue = sorted.get(i);
    // verify.ExpectedPropertyValueIsEqual(sortedvalue, Aftersort.get(i));
  }

  async clickPfCodeHeaderPart(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIPfCodeHeaderPart.click();
  }

  async clickPfNameHeaderPart(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIPfNameHeaderPart.click();
  }

  async moveTheColumn(): Promise<void> {
    // WebElement uIPfCodeHeaderPart = uIMapPersonnel.personnelSearch.uIPfCodeHeaderPart;
    // WebElement uIPfNameHeaderPart = uIMapPersonnel.personnelSearch.uIPfNameHeaderPart;
    // WebElement findElement = Playback.driver.findElement(By.xpath("//span[text()='Title']"));
    // //			builder.click(uIPfCodeHeaderPart).build().perform();
    // //			builder.clickAndHold(uIPfCodeHeaderPart).build();
    // //			builder.clickAndHold(uIPfCodeHeaderPart).moveToElement(uIPfNameHeaderPart).release(uIPfNameHeaderPart).build().perform();
    // //			builder.moveToElement(uIPfCodeHeaderPart).clickAndHold().moveByOffset(600, 30).release().perform();
    // //			builder.dragAndDrop(uIPfCodeHeaderPart, uIPfNameHeaderPart).build().perform();
    // //			Robot robot = new Robot();
    // //			robot.mouseMove(uIPfCodeHeaderPart.getLocation().getX() + (uIPfCodeHeaderPart.getSize().getWidth()/2), uIPfCodeHeaderPart.getLocation().getY() + (uIPfCodeHeaderPart.getSize().getHeight()/2));
    // //			robot.mousePress(InputEvent.BUTTON1_MASK);
    // //			robot.mouseMove(uIPfNameHeaderPart.getLocation().getX() + (uIPfNameHeaderPart.getSize().getWidth()/2), uIPfNameHeaderPart.getLocation().getY() + (uIPfNameHeaderPart.getSize().getHeight()/2));
    // //			//robot.mouseMove(0, 10);
    // //			robot.mouseRelease(InputEvent.BUTTON1_MASK);
    // //			Thread.sleep(3000);
    // //			Thread.sleep(3000);
    // //	System.out.println(uIPfCodeHeaderPart.getRect().getX());
    // //	System.out.println(uIPfCodeHeaderPart.getRect().getY());
    // //System.out.println(findElement.getRect().getX());
    // System.out.println(findElement.getRect().getY());
    // //			Playback.actionDriver.clickAndHold(uIPfCodeHeaderPart).build().perform();
    // //			Playback.actionDriver.dragAndDrop(uIPfCodeHeaderPart, findElement).build().perform();
    // //			Playback.actionDriver
    // //		    .moveToElement(uIPfCodeHeaderPart)
    // //		    .clickAndHold()
    // //		    .pause(Duration.ofMillis(5000))
    // //		    .moveToElement(findElement)
    // //		    .pause(Duration.ofMillis(5000))
    // //		    .release()
    // //		    .build()
    // //		    .perform();
    // //Playback.actionDriver.contextClick(findElement).build().perform();
    // Playback.actionDriver.moveToElement(uIPfCodeHeaderPart)
    // .clickAndHold()
    // .pause(Duration.ofMillis(500))  // allow JS to catch up
    // .moveByOffset(549, 39)             // tiny nudge to trigger dragstart
    // .pause(Duration.ofMillis(500))
    // .moveToElement(findElement)
    // .pause(Duration.ofMillis(500))
    // .release()
    // .build()
    // .perform();
    // JavascriptExecutor js = (JavascriptExecutor) Playback.driver;
    // String script = "function simulateDragDrop(source, target) {"
    // + "var dataTransfer = new DataTransfer();"
    // + "var dragStartEvent = new DragEvent('dragstart', {dataTransfer: dataTransfer});"
    // + "source.dispatchEvent(dragStartEvent);"
    // + "var dragEnterEvent = new DragEvent('dragenter', {dataTransfer: dataTransfer});"
  }

  async verifyAtGroup(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Section"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapPersonnel.personnelSearch.uIPersonnelResultTable, "Group", rowIndex));
  }

  async verifyDivisionColumnValueAsNull(): Promise<void> {
    // String ColumnValue = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelSearch.uIPersonnelResultTable,
    // BaseData.getPersonnelModuleValue("PFCode"), "Division").getText();
    // System.out.println(ColumnValue);
    // verify.ExpectedPropertyValueIsEqual(ColumnValue,  "");
  }

  async verifySectionColumnvalueAsNull(): Promise<void> {
    // String ColumnValue = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelSearch.uIPersonnelResultTable,
    // BaseData.getPersonnelModuleValue("PFCode"), "Sections").getText();
    // System.out.println(ColumnValue);
    // verify.ExpectedPropertyValueIsEqual(ColumnValue,  "");
  }

  async selectGridRowCheckboxByPFCode(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
    // uIMapPersonnel.personnelSearch.uIPersonnelResultTable, BaseData.getPersonnelModuleValue("PFCode"));
  }

  async clickMJRolesButton(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIMJRolesButton.click();
  }

  async hideAtColumnByGridHeader(): Promise<void> {
    // WebElement gridHeaderColumnCell = objectIdentification.manualIdentify.getGridHeaderCellWithSpan(
    // uIMapPersonnel.personnelSearch.uIPersonnelResultTable,
    // BaseData.getPersonnelModuleValue("HideColumnHeader"));
    // objectIdentification.actionBuilder.ContextClick(gridHeaderColumnCell);
    // WebElement hideButton = uIMapPersonnel.personnelSearch.uIHideTheColumnButton
    // .findElement(By.xpath("//div[contains(@style,'display: block')]"));
    // Playback.WaitForElementPresent(hideButton);
    // uIMapPersonnel.personnelSearch.uIHideTheColumnButton.click();
    // Playback.controlReadyThreadWait();
  }

  async dragAndDropByGridHeader(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // //			WebElement sourceHeader = objectIdentification.manualIdentify.getGridHeaderCellWithSpan(
    // //					uIMapPersonnel.personnelSearch.uIPersonnelResultTable,
    // //					BaseData.getPersonnelModuleValue("SourceColumnHeader"));
    // WebDriverWait wait = new WebDriverWait(Playback.driver, Duration.ofSeconds(10));
    // //			WebElement sourceHeaderCell = sourceHeader.findElement(By.xpath(".//parent::th"));
    // WebElement sourceElement = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@id='grdPersonnel']//table/tbody/tr[contains(@class,'Header')]//th//span[text()='PF Code']//parent::th")));  // Adjust the locator
    // objectIdentification.manualIdentify.highlighElement(sourceElement);
    // WebElement targetHeader = objectIdentification.manualIdentify.getGridHeaderCellWithSpan(
    // uIMapPersonnel.personnelSearch.uIPersonnelResultTable,
    // BaseData.getPersonnelModuleValue("TargetColumnHeader"));
    // WebElement targetHeaderCell = targetHeader.findElement(By.xpath(".//parent::th"));
    // objectIdentification.manualIdentify.highlighElement(targetHeaderCell);
    // Playback.controlReadyThreadWait();
    // objectIdentification.actionBuilder.dragAndDropBySourceAndTargetElement(sourceElement, targetHeaderCell);
    // Playback.controlReadyThreadWait();
  }

  async verifyAtGridHeaderColumnHidden(): Promise<void> {
    // WebElement gridHeaderColumnCell = objectIdentification.manualIdentify.getGridHeaderCellWithSpan(
    // uIMapPersonnel.personnelSearch.uIPersonnelResultTable,
    // BaseData.getPersonnelModuleValue("HideColumnHeader"));
    // WebElement element = gridHeaderColumnCell.findElement(By.xpath(".//parent::th"));
    // verify.ExpectedValueIsTrue(element.getAttribute("style").contains("width: 0px"),
    // "Column still displayed --> ");
  }

  async clickColumnDisplaySettings(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIColumnDisplaySettingsIcon.click();
    // Playback.controlReadyThreadWait();
  }

  async clickIncludeInactiveCheckbox(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIIncludeInactiveCheckbox.click();
  }

  async verifyAtGridRowAsGrayColorByPFCode(): Promise<void> {
    // WebElement gridRow = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapPersonnel.personnelSearch.uIPersonnelResultTable, BaseData.getPersonnelModuleValue("PFCode"));
    // verify.ExpectedPropertyValueIsEqual("rgba(128, 128, 128, 1)", gridRow.getCssValue("color"));
  }

  async verifyGridHeaderColumnSettingsAsDefault(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // WebElement gridHeaderTableRow = objectIdentification.manualIdentify.getGridHeaderTableRow(uIMapPersonnel.personnelSearch.uIPersonnelResultTable);
    // List<WebElement> elements = gridHeaderTableRow.findElements(By.xpath(".//th[not(@style='width: 0px;')]"));
    // String[] columnheaders = {"chkSelect", "KPIJurisAlias", "PFCode", "FullName", "Rank", "BadgeNo", "Division", "Sections", "WorkGroup", "Shift"};
    // for(int i = 0; i < elements.size(); i++) {
    // verify.ExpectedPropertyValueIsEqual(columnheaders[i], elements.get(i).getAttribute("key"));
  }

  async clearPF(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIPFCodeEdit.clear();
  }

  async verifyCheckboxIsSelectedByPFCode(): Promise<void> {
    // int rowIndex = objectIdentification.manualIdentify.getRowIndexByCelltext(
    // uIMapPersonnel.personnelSearch.uIPersonnelResultTable, BaseData.getPersonnelModuleValue("PFCode"));
    // verify.ExpectedPropertyValueIsEqual("Checked",objectIdentification.manualIdentify
    // .getGridRowCheckBoxByIndex(uIMapPersonnel.personnelSearch.uIPersonnelResultTable, rowIndex)
    // .getAttribute("title"), "Checkbox is not selected --> ");
  }

  async verifyMJRolesIsEnabled(): Promise<void> {
    // WebElement element = uIMapPersonnel.personnelSearch.uIMJRolesButton
    // .findElement(By.xpath(".//ancestor::li[@title='MJ Roles']"));
    // verify.ExpectedValueIsFalse(element.getAttribute("class").contains("RootDisabled"),
    // "MJ Roles option is enabled --> ");
  }

  async verifyAtFromDate(i: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("DateFrom" + i),
    // uIMapPersonnel.personnelSearch.uIDateFrom.getAttribute("value"));
  }

  async verifyAtToDate(i: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("DateTo" + i),
    // uIMapPersonnel.personnelSearch.uIDateTo.getAttribute("value"));
  }

  async verifyDateIsFormattedIncorrectlyAcknowledgePopupNotExist(): Promise<void> {
    // boolean windowExist = objectIdentification.windowHandle.windowExist("Acknowledge");
    // if (windowExist == true) {
    // popup.switchToAcknowledge();
    // verify.ExpectedValueIsNotIsFalse(
    // uIMapPopup.acknowledgeWindow.uIErrorInfoTextEdit.getText()
    // .contains("The date is formatted incorrectly or is out of range"),
    // "The date is formatted incorrectly or is out of range popup appears --> ");
  }

  async verify6071AcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(6071) Start Date or From Date must be earlier than End Date");
  }

  async enterAtDateFromAsCurrentDate(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIDateFrom.sendKeys(Randomized.getCurrentDate());
  }

  async enterAtDateToAsPreviousDate(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIDateTo.sendKeys(Randomized.getPreviousDate(1, "MM/dd/yyyy"));
  }

  async verifyAtColumnName(ColumnName: string): Promise<void> {
    // String gridHeaderTableRow = objectIdentification.manualIdentify.getGridHeaderTableRow(uIMapPersonnel.personnelSearch.uIPersonnelResultTable).getText();
    // boolean contains = gridHeaderTableRow.contains(ColumnName);
    // verify.ExpectedValueIsTrue(contains);
  }

  async clickPFLookUpICon(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIPFLookUpIcon.click();
  }

  async closeExcelScreen(): Promise<void> {
    // Set<String> windowHandles = Playback.driver.getWindowHandles();
    // List<String> windowStrings = new ArrayList<>(windowHandles);
    // String string = windowStrings.get(1);
    // Playback.driver.switchTo().window(string);
    // Playback.driver.close();
  }

  async verifyAddNewIsDisabled(): Promise<void> {
    // //verify.ExpectedValueIsFalse(enabled);
  }

  async verifyAddNewIsEnabled(): Promise<void> {
    // boolean enabled = uIMapPersonnel.personnelSearch.uIAddNewButton.isEnabled();
    // verify.ExpectedValueIsTrue(enabled);
  }

  async verifyAtPFCodeInGridWithPFName(JsonIndex: number): Promise<void> {
    // String PfCode = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelSearch.uIPersonnelResultTable, BaseData.getPersonnelModuleValue("PFName"+JsonIndex), "PF Code").getText();
    // verify.ExpectedPropertyValueIsEqual(PfCode, BaseData.getPersonnelModuleValue("PFCode"+JsonIndex));
  }

  async clickColumnHeaderwithName(JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridHeaderColumnNameWithSpan(uIMapPersonnel.personnelSearch.uIPersonnelResultTable, BaseData.getPersonnelModuleValue("ColumnName"+JsonKeyIndex));
  }

  async verifyAtDateColumnValuesAreSortedDescending(hireDate: string[], DateFormat: string): Promise<void> {
    // Randomized.datesSortingAsDescendingOrder(hireDate, DateFormat);
  }

  async verifyAtDateColumnValuesAreSortedAscending(hireDate: string[], DateFormat: string): Promise<void> {
    // Randomized.verifyDatesSortingAsAscendingOrder(hireDate, DateFormat);
  }

  async selectAtShift(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelSearch.uIShiftDropDown, BaseData.getPersonnelModuleValue("Shift"));
  }

  async selectAtGroup(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelSearch.uIGroupComboBox, BaseData.getPersonnelModuleValue("Group"));
  }

  async verifyAtShiftWithPFCode(): Promise<void> {
    // String Shift = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelSearch.uIPersonnelResultTable, BaseData.getPersonnelModuleValue("PFCode"), "Shift").getText();
    // verify.ExpectedPropertyValueIsEqual(Shift, BaseData.getPersonnelModuleValue("Shift"));
  }

  async verifyAtGroupWithPFCode(): Promise<void> {
    // String Group = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelSearch.uIPersonnelResultTable, BaseData.getPersonnelModuleValue("PFCode"), "Group").getText();
    // verify.ExpectedPropertyValueIsEqual(Group, BaseData.getPersonnelModuleValue("Group"));
  }

  async verifyAtDivisionWithPFCode(): Promise<void> {
    // String Division = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelSearch.uIPersonnelResultTable, BaseData.getPersonnelModuleValue("PFCode"), "Division").getText();
    // verify.ExpectedPropertyValueIsEqual(Division, BaseData.getPersonnelModuleValue("Division"));
  }

  async verifyAtSectionWithPFCode(): Promise<void> {
    // String Section = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelSearch.uIPersonnelResultTable, BaseData.getPersonnelModuleValue("PFCode"), "Sections").getText();
    // verify.ExpectedPropertyValueIsEqual(Section, BaseData.getPersonnelModuleValue("Section"));
  }

  async verifyAtBadgeWithPFCode(): Promise<void> {
    // String Badge = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelSearch.uIPersonnelResultTable, BaseData.getPersonnelModuleValue("PFcode"), "Badge").getText();
    // verify.ExpectedPropertyValueIsEqual(Badge, BaseData.getPersonnelModuleValue("Badge"));
  }

  async verifyAtTitleWithPFCode(): Promise<void> {
    // String Title = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelSearch.uIPersonnelResultTable, BaseData.getPersonnelModuleValue("PFcode"), "Title").getText();
    // verify.ExpectedPropertyValueIsEqual(Title, BaseData.getPersonnelModuleValue("Title"));
  }

  async selectAtTeam(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelSearch.uITeamComboBox, BaseData.getPersonnelModuleValue("Team"));
  }

  async selectAtDetailHierarchyOrder(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelSearch.uIDetailHierarchyOrderDropDown, BaseData.getPersonnelModuleValue("DetailHierarchyOrder"));
  }

  async selectAtDetailRateType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelSearch.uIDetailRateDropDown, BaseData.getPersonnelModuleValue("DetailRateType"));
  }

  async selectAtJobGradeDropDown(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelSearch.uIJobGradeDropDown, BaseData.getPersonnelModuleValue("JobGrade"));
  }

  async SelectAtNextReviewDueInMonth(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelSearch.uINextReviewDueInDropDown, BaseData.getPersonnelModuleValue("NextReviewDueIn"));
  }

  async enterAtNextReviewDueInDate(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uINextReviewDueInDateEdit.sendKeys(BaseData.getPersonnelModuleValue("NextReviewDueInDate"));
  }

  async selectAtSquad(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelSearch.uISquadComboBox, BaseData.getPersonnelModuleValue("Squad"));
  }

  async selectAtWorkHistoryCategory(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelSearch.uIWorkHistoryCategory, BaseData.getPersonnelModuleValue("HistoryCategory"));
  }

  async clickPerformanceEvaluationCheckBox(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIPerformamceEvaluationCheckBox.click();
  }

  async selectAtSecurityRoles(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelSearch.uISecurityDropDown, BaseData.getPersonnelModuleValue("Security"));
  }

  async selectAtSpecialSkill(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelSearch.uISpecialSkillDropDown, BaseData.getPersonnelModuleValue("SpecialSkill"));
  }

  async enterAtEmployeeNumber(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIEmployeeNumberEdit.sendKeys(BaseData.getPersonnelModuleValue("EmployeeNumber"));
  }

  async enterAtQAFormData(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIQAFormData.sendKeys(BaseData.getPersonnelModuleValue("QAFormData"));
  }

  async selectAtMedicalHistoryCode(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelSearch.uIMedicalHistoryCodeDropDown, BaseData.getPersonnelModuleValue("MedicalHistoryCode"));
  }

  async verifyAtDivisionLabel(JsonKeyIndex: number): Promise<void> {
    // String DivisionLabel = uIMapPersonnel.personnelSearch.uIDivisionLabel.getText();
    // verify.ExpectedPropertyValueIsEqual(DivisionLabel, BaseData.getPersonnelModuleValue("DivisionLabel"+JsonKeyIndex));
  }

  async verifyAtDivisionLabelColor(JsonKeyIndex: number): Promise<void> {
    // String DivisionLabel = uIMapPersonnel.personnelSearch.uIDivisionLabel.getAttribute("style");
    // verify.ExpectedValueIsTrue(DivisionLabel.contains( BaseData.getPersonnelModuleValue("DivisionLabelColor"+JsonKeyIndex)));
  }

  async getGridColumnValuesInAllPages(JsonKeyIndex: number): Promise<void> {
    // List<String> AllColumnValues = new ArrayList<>();
    // boolean value = true;
    // while (value) {
    // try {
    // if (Playback.driver.findElement(By.id("grdPersonnel_ctl01_lnkbtnNext")).isDisplayed()) {
    // List<String> gridTableColumnValues1 = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapPersonnel.personnelSearch.uIPersonnelResultTable,
    // BaseData.getSettingsModuleValue("columnName" + JsonKeyIndex));
    // for(String columnvalue : gridTableColumnValues1 ) {
    // //if(!(columnvalue.isBlank())) {
    // AllColumnValues.add(columnvalue);
    // //}
    // Playback.driver.findElement(By.id("grdPersonnel_ctl01_lnkbtnNext")).click();
    // } catch (Exception e) {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapPersonnel.personnelSearch.uIPersonnelResultTable,
    // BaseData.getSettingsModuleValue("columnName" + JsonKeyIndex));
    // for(String columnvalue : gridTableColumnValues ) {
    // //if(!(columnvalue.isBlank())) {
    // AllColumnValues.add(columnvalue);
    // //}
    // value = false;
    // break;
    // return AllColumnValues;
  }

  async removeSpaceRemoveList(ColumnValueWithSpace: string): Promise<void> {
    // ColumnValueWithSpace.removeIf(item -> item.trim().isEmpty());
    // return ColumnValueWithSpace;
  }

  async enterAtNextReviewDueInDate(NextReviewDueInDate: string): Promise<void> {
    // uIMapPersonnel.personnelSearch.uINextReviewDueInDateEdit.sendKeys(NextReviewDueInDate);
  }

  async clickUnLockLink(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIUnlockButton.click();
    // popup.confirm.yesWithExpectedMessage("(1783) Do you want to unlock the user's credential?");
  }

  async verifyAtPFCodeIsNotPresentInTheGrid(): Promise<void> {
    // for(String Name : Columname) {
    // verify.ExpectedPropertyValueIsNotEqual(Name,BaseData.getPersonnelModuleValue("PFCode"));
  }

  async enterAtBy(JsonKeyIndex: number): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIByDateEdit.click();
    // uIMapPersonnel.personnelSearch.uIByDateEdit.clear();
    // uIMapPersonnel.personnelSearch.uIByDateEdit.sendKeys(BaseData.getPersonnelModuleValue("By"+JsonKeyIndex));
    // uIMapPersonnel.personnelSearch.uIByDateEdit.sendKeys(Keys.TAB);
  }

  async verifyAtByDateAsCurrentDate(): Promise<void> {
    // String by1 = 	uIMapPersonnel.personnelSearch.uIByDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual( Randomized.getCurrentDate(),by1);
  }

  async verifyByDateAsPreviousDateFromCurrentDate(NoOfdays: number): Promise<void> {
    // String byDate = 	uIMapPersonnel.personnelSearch.uIByDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(byDate, Randomized.getPreviousDate(NoOfdays,"MM/dd/yyyy"));
  }

  async verifyByDateAsFutureDateFromCurrentDate(NoOfdays: number): Promise<void> {
    // String byDate = 	uIMapPersonnel.personnelSearch.uIByDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(byDate, Randomized.getFutureDate(NoOfdays,"MM/dd/yyyy"));
  }

  async verifyAtFutureMonthByCurrentDate(NoOfdays: number): Promise<void> {
    // String byDate = 	uIMapPersonnel.personnelSearch.uIByDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(byDate, Randomized.getFutureDateByMonth(NoOfdays));
  }

  async verifyAtPreviousMonthByCurrentDate(NoOfdays: number): Promise<void> {
    // String byDate = 	uIMapPersonnel.personnelSearch.uIByDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(byDate, Randomized.getPreviousDateByMonth(NoOfdays));
  }

  async verifyAtPreviouYearDateByCurrentDate(NoOfdays: number): Promise<void> {
    // String byDate = 	uIMapPersonnel.personnelSearch.uIByDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(byDate, Randomized.getPreviousYearByNoOfYears(NoOfdays,"MM/dd/yyyy"));
  }

  async verifyAtFutureYearDateByCurrentDate(NoOfdays: number): Promise<void> {
    // String byDate = 	uIMapPersonnel.personnelSearch.uIByDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(byDate, Randomized.getFutureYearByNoOfYears(NoOfdays,"MM/dd/yyyy"));
  }

  async verifyAtFirstDayOfTheWeekByCurrentDate(): Promise<void> {
    // String byDate = 	uIMapPersonnel.personnelSearch.uIByDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(byDate, Randomized.getStartdateofweek(Randomized.getCurrentDate(),"MM/dd/yyyy"));
  }

  async verifyAtLastDayOfTheWeekByCurrentDate(): Promise<void> {
    // String byDate = 	uIMapPersonnel.personnelSearch.uIByDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(byDate, Randomized.getLastDayOfCurrentWeek("MM/dd/yyyy"));
  }

  async verifyAtFirstDayOfTheMonth(): Promise<void> {
    // String byDate = 	uIMapPersonnel.personnelSearch.uIByDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(byDate, Randomized.getFirstDayOfCurrentMonth("MM/dd/yyyy"));
  }

  async verifyAtLastDayOfTheMonth(): Promise<void> {
    // String byDate = 	uIMapPersonnel.personnelSearch.uIByDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(byDate, Randomized.getLastDayOfCurrentMonth("MM/dd/yyyy"));
  }

  async verifyAtFirstDayOfTheYear(): Promise<void> {
    // String byDate = 	uIMapPersonnel.personnelSearch.uIByDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(byDate, Randomized.getfirstDayOfYear());
  }

  async verifyAtLastDayOfTheYear(): Promise<void> {
    // String byDate = 	uIMapPersonnel.personnelSearch.uIByDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(byDate, Randomized.getLastDayOfYear());
  }

  async clickAltPlusDownArrowInByDate(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIByDateEdit.sendKeys(Keys.ALT,Keys.ARROW_DOWN);
  }

  async verifyTheCalenderScreenIsOpened(): Promise<void> {
    // Set<String> windowHandles = Playback.driver.getWindowHandles();
    // List<String> list = new ArrayList<>(windowHandles);
    // int l = list.size();
    // verify.ExpectedIntergerValueIsEqualToActual(l,2);
  }

  async verifyAtShiftRadDropDownValueCount(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIShiftDropDownArrow.click();
    // List<WebElement> findElements =uIMapPersonnel.personnelSearch.uIShiftDropDown.findElements(By.xpath("//li//label//input"));
    // List<WebElement> findElements1 = new ArrayList<>();
    // findElements.stream().forEach(Ele->{
    // boolean displayed = Ele.isDisplayed();
    // if(displayed==true) {
    // findElements1.add(Ele);
    // });
    // int size1 = findElements1.size();
    // verify.ExpectedValueIsTrue(findElements1.size()>10);
    // uIMapPersonnel.personnelSearch.uIShiftDropDownArrow.click();
  }

  async verifySearchBarIsPresentInShiftRadDropDown(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIShiftDropDownArrow.click();
    // uIMapPersonnel.personnelSearch.uIShiftDropDown.findElement(By.xpath("//div[@id='cddShift_DropDown']//input[@class='rcbSearchBox']")).sendKeys("Day");
    // List<WebElement> findElements = Playback.driver.findElements(By.xpath("//div[@id='cddShift_DropDown']//li"));
    // int i=0;
    // int i1 = 0;
    // ArrayList<String> value = new ArrayList<String>();
    // for(WebElement v : findElements) {
    // System.out.println(v.getAttribute("style"));
    // System.out.println(v.getAttribute("title"));
    // String attribute = v.getAttribute("style");
    // if(attribute.isEmpty()==true) {
    // i++;
    // else {
    // i1++;
    // value.add(v.getAttribute("title"));
    // value.remove("--Inq 1010 --");
    // int size = value.size();
    // verify.ExpectedIntergerValueIsEqualToActual(size-i, i1);
  }

  async selectAtRace(JsonkeyIndex: number): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIRaceDropDownInputForFire.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect(uIMapPersonnel.personnelSearch.uIRaceDropDownForFire, BaseData.getPersonnelModuleValue("Race"+JsonkeyIndex));
  }

  async selectAtEthnicity(JsonkeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelSearch.uIEthnicityDropDownForFire, BaseData.getPersonnelModuleValue("Ethnicity"+JsonkeyIndex));
  }

  async verifyAtGridRowAsBlackColorByPFCode(JsonKeyIndex: number): Promise<void> {
    // WebElement gridRow = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapPersonnel.personnelSearch.uIPersonnelResultTable, BaseData.getPersonnelModuleValue("PFCode"));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("RowColor"+JsonKeyIndex), gridRow.getCssValue("color"));
  }

}

export class PersonnelEntryPage {
  readonly page: Page;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly pFCodeEdit: Locator;
  readonly employeeNumberEdit: Locator;
  readonly lockedCheckBox: Locator;
  readonly fireCheckBox: Locator;
  readonly mainTab: Locator;
  readonly assignmentTab: Locator;
  readonly preferencesTab: Locator;
  readonly workRecordTab: Locator;
  readonly securityTab: Locator;
  readonly timeTab: Locator;
  readonly trainingTab: Locator;
  readonly allowanceTab: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly aLCButton: Locator;
  readonly customizeButton: Locator;
  readonly saveAndNewButton: Locator;
  readonly lockedInfoButton: Locator;
  readonly refreshIcon: Locator;
  readonly lockedButton: Locator;
  readonly aLCIconButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly subAgencyDropdown: Locator;
  readonly suffixDropdown: Locator;
  readonly inactiveCheckBox: Locator;
  readonly phone1Dropdown: Locator;
  readonly phone2Dropdown: Locator;
  readonly emergencyDataTab: Locator;
  readonly attachmentTab: Locator;
  readonly printIcon: Locator;
  readonly pictureIcon: Locator;
  readonly inventoryTab: Locator;
  readonly qAFormsTab: Locator;
  readonly manageCustomFieldsMenuLink: Locator;
  readonly rFIDTab: Locator;
  readonly badgeEdit: Locator;
  readonly jurisDropDown: Locator;
  readonly aboutMeTab: Locator;
  readonly middleNameEdit: Locator;
  readonly addressEdit: Locator;
  readonly cSZCityEdit: Locator;
  readonly cSZStateDropDown: Locator;
  readonly zipEdit: Locator;
  readonly cSZLookUpIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.lastNameEdit = page.locator('#cstName_LastName');
    this.firstNameEdit = page.locator('#cstName_FirstName');
    this.pFCodeEdit = page.locator('#txtPFCode');
    this.employeeNumberEdit = page.locator('#txtEmployeeNumber');
    this.lockedCheckBox = page.locator('#chkIsLocked');
    this.fireCheckBox = page.locator('#chkIsFire');
    this.mainTab = page.locator("//span[contains(text(),\'Main\')]");
    this.assignmentTab = page.locator("//span[contains(text(),\'Assignment\')]");
    this.preferencesTab = page.locator("//span[contains(text(),\'Preferences\')]");
    this.workRecordTab = page.locator("//span[contains(text(),\'Work Record\')]");
    this.securityTab = page.locator("//span[contains(text(),\'Security\')]");
    this.timeTab = page.locator("//span[contains(text(),\'Time\')]");
    this.trainingTab = page.locator("(//span[contains(text(),\'Training\')])[1]");
    this.allowanceTab = page.locator("//span[contains(text(),\'Allowance\')]");
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.aLCButton = page.locator('#cmdALC');
    this.customizeButton = page.locator("//li[@title = \'Customize\']");
    this.saveAndNewButton = page.locator('#cmdSaveNAddNew');
    this.lockedInfoButton = page.locator('#cmdLockInfo');
    this.refreshIcon = page.locator('#cmdRefresh');
    this.lockedButton = page.locator('#cmdAccLocked');
    this.aLCIconButton = page.locator('#cmdALC');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.subAgencyDropdown = page.locator('#cddSubAgency_DropDown');
    this.suffixDropdown = page.locator('#cstName_Suffix_DropDown');
    this.inactiveCheckBox = page.locator('#chkIsActive');
    this.phone1Dropdown = page.locator('#cstPhone1_PhoneType_DropDown');
    this.phone2Dropdown = page.locator('#cstPhone2_PhoneType_DropDown');
    this.emergencyDataTab = page.locator("//span[contains(text(),\'Emergency Data\')]");
    this.attachmentTab = page.locator("//span[contains(text(),\'Attachment\')]");
    this.printIcon = page.locator('#cmdPrint');
    this.pictureIcon = page.locator('#imgPersonnel');
    this.inventoryTab = page.locator("//span[contains(text(),\'Inventory\')]");
    this.qAFormsTab = page.locator("//span[text()=\'QA Forms\']");
    this.manageCustomFieldsMenuLink = page.locator("//span[contains(text(), \'Manage Custom Fields\')]");
    this.rFIDTab = page.locator("//span[text()=\'RFID\']");
    this.badgeEdit = page.locator('#txtBadge');
    this.jurisDropDown = page.locator('#lstJuris');
    this.aboutMeTab = page.locator("//span[contains(text(),\'About Me\')]");
    this.middleNameEdit = page.locator('#cstName_MiddleName');
    this.addressEdit = page.locator('#txtAddress');
    this.cSZCityEdit = page.locator('#cstCSZ_City');
    this.cSZStateDropDown = page.locator('#cstCSZ_State_DropDown');
    this.zipEdit = page.locator('#cstCSZ_Zip');
    this.cSZLookUpIcon = page.locator("//input[contains(@src,\'lookupOn\')]");
  }

  async clickAssignmentTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIAssignmentTab.click();
  }

  async switchToWorkRecordTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIWorkRecordTab.click();
    // Playback.controlReadyThreadWait();
    // objectIdentification.windowHandle.switchToFrame("frmPersonnelWorkRecord");
  }

  async switchToEmergencyDataTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIEmergencyDataTab.click();
  }

  async switchToAttachmentTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIAttachmentTab.click();
    // objectIdentification.windowHandle.switchToFrame("frmTxtAttachMgrEx");
  }

  async switchToTrainingTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uITrainingTab.click();
    // Playback.threadWait();
    // Playback.threadWait();
  }

  async SwitchToCustomTab(): Promise<void> {
    // String personnelModuleValue = BaseData.getPersonnelModuleValue("TabName");
    // Playback.driver.findElement(By.xpath("//span[text()='"+personnelModuleValue+"']")).click();
    // WebElement findElement = Playback.driver.findElement(By.xpath("(//iframe[contains(@src,'frmCustomTabNew')])[2]"));
    // Playback.driver.switchTo().frame(findElement);
  }

  async verifyTimeTabEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.uITimeTab.isDisplayed());
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.uITimeTab.isEnabled());
  }

  async verifySubAgencyDropdownEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.uISubAgencyDropdown.isEnabled());
  }

  async selectAtSubAgency(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uISubAgencyDropdown.sendKeys(BaseData.getPersonnelModuleValue("SubAgency"));
  }

  async verifySubAgency(LoggedinSubAgnecy: string): Promise<void> {
    // LoggedinSubAgnecy = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapPersonnel.personnelEntry.uISubAgencyDropdown);
    // // Console.WriteLine("Logged In SubAgnecy: ",
    // // objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapPersonnel.personnelEntry.uISubAgencyDropdown.getAttribute("value")));
    // Playback.setTestContextAttribute("LoggedinSubAgnecy", LoggedinSubAgnecy);
  }

  async save(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async saveNClose(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uISaveAndCloseButton.click();
    // popup.confirm.yes();
  }

  async clickSaveButton(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async close(): Promise<void> {
    // uIMapPersonnel.personnelEntry.driver.close();
  }

  async enterAtPFCode(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIPFCodeEdit.sendKeys(BaseData.getPersonnelModuleValue("PFCode"));
    // uIMapPersonnel.personnelEntry.uIPFCodeEdit.sendKeys(Keys.TAB);
  }

  async enterAtLastName(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uILastNameEdit.sendKeys(BaseData.getPersonnelModuleValue("LastName"));
    // uIMapPersonnel.personnelEntry.uILastNameEdit.sendKeys(Keys.TAB);
  }

  async enterAtFirstName(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIFirstNameEdit.sendKeys(BaseData.getPersonnelModuleValue("FirstName"));
    // uIMapPersonnel.personnelEntry.uIFirstNameEdit.sendKeys(Keys.TAB);
  }

  async clickLockedInfoIcon(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uILockedInfoButton.click();
  }

  async clickRefreshIcon(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIRefreshIcon.click();
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIPrintIcon.click();
  }

  async clickMainTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIMainTab.click();
  }

  async verifyLockedbuttonDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.uILockedButton.isDisplayed());
  }

  async verifyLockedCheckBoxChecked(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.uILockedCheckBox.isSelected());
  }

  async verifyALCAndCustomIconDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.uISaveButton.getAttribute("class").contains("DisabledImgMnuItem"));
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.uISaveAndCloseButton.getAttribute("class")
    // .contains("DisabledImgMnuItem"));
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.uISaveAndNewButton.getAttribute("class")
    // .contains("DisabledImgMnuItem"));
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.uIALCButton.getAttribute("class").contains("DisabledImgMnuItem"));
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.uICustomizeButton.getAttribute("unselectable").contains("on"));
  }

  async verifyAtPFCode(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("PFCode"),
    // uIMapPersonnel.personnelEntry.uIPFCodeEdit.getAttribute("value"));
  }

  async switchToPreferenceTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIPreferencesTab.click();
  }

  async switchToSecurityTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uISecurityTab.click();
  }

  async switchToTimeTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uITimeTab.click();
    // objectIdentification.windowHandle.switchToFrame("frmPFTimeReport");
  }

  async verifyRequiredAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1018) Required Entries are Missing");
  }

  async verifyUpdateSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapPersonnel.personnelEntry.uIBottomLeftSideStatusBar.getText(),
    // "1003 - Update Successful");
  }

  async clickALCIcon(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIALCIconButton.click();
  }

  async clickPictureIcon(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIPictureIcon.click();
  }

  async switchToAllowanceTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIAllowanceTab.click();
    // Playback.controlReadyThreadWait();
    // objectIdentification.windowHandle.switchToFrame("frmAllowance");
  }

  async verifyUpadteAllowanceTabAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge
    // .okWithExpectedMessage("(1051) Updated data exists in the Allowance Tab. You must save or reset.");
  }

  async verifyEmailExistsAcknowledgemessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1779) Email ID already exists");
  }

  async clickLockedCheckbox(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uILockedCheckBox.click();
  }

  async verifyPFCodeExistAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1027) PF Code Exist");
  }

  async verifyConfirmationReusePFCodeMessage(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // popup.confirm.yesWithExpectedMessage("(1782) Do you want to reuse the inactive PF Code?");
  }

  async clickInactiveCheckBox(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIInactiveCheckBox.click();
  }

  async verifyPFValidateInfoIconDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelSearch.uIPFInfoIcon.isDisplayed());
  }

  async verifyNoRecordFoundAcknowledgeMessage(): Promise<void> {
    // if (Playback.browserType.equals("Chrome")) {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
    // } else
    // popup.acknowledge.okWithExpectedMessage(" 1011 - No Record Found");
    // Playback.controlReadyThreadWait();
  }

  async verifyAtPhone1(): Promise<void> {
    // String dropDwonSelectedItem = objectIdentification.manualIdentify
    // .getDropDwonSelectedItem(uIMapPersonnel.personnelEntry.uIPhone1Dropdown); //
    // // String text = uIMapPersonnel.personnelEntry.uIPhone1Dropdown.getText();
    // verify.ExpectedValueIsTrue(dropDwonSelectedItem.contains(BaseData.getPersonnelModuleValue("PhoneType")));
  }

  async enterAtPFCode1(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIPFCodeEdit.sendKeys(BaseData.getPersonnelModuleValue("PFCode1"));
    // uIMapPersonnel.personnelEntry.uIPFCodeEdit.sendKeys(Keys.TAB);
  }

  async verifyAdditionSuccessfulAcknowledgeMessage(): Promise<void> {
    // String text = uIMapPersonnel.personnelEntry.uIBottomLeftSideStatusBar.getText();
    // verify.ExpectedPropertyValueIsEqual(text, "1002 - Addition successful");
  }

  async switchToInventoryTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIInventoryTab.click();
    // Playback.controlReadyThreadWait();
    // objectIdentification.windowHandle.switchToFrame("frmPersonnelInv.aspx");
  }

  async verifyBottomStatusMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapPersonnel.personnelEntry.uIBottomLeftSideStatusBar.getText());
  }

  async verifyInactiveCodeAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1119) Warning â€“ Inactive code selected");
    // Playback.controlReadyThreadWait();
  }

  async verifyQAFormsTabEnabled(): Promise<void> {
    // boolean displayed = uIMapPersonnel.personnelEntry.uIQAFormsTab.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async NavigateToQAFormsTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIQAFormsTab.click();
    // Playback.controlReadyThreadWait();
    // WebElement qAFormTabFrame = Playback.driver
    // .findElement(By.xpath("(//iframe[contains(@src,'frmQuestionnaire.aspx?')])[2]"));
    // objectIdentification.windowHandle.switchToFrame(qAFormTabFrame);
  }

  async selectEmailType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail1ComboBox,
    // BaseData.getPersonnelModuleValue("EmailType"));
  }

  async enterAtEmailId(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail1EditText
    // .sendKeys(BaseData.getPersonnelModuleValue("Email"));
  }

  async verifyAccessDeniedPopupArises(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(39) Access denied for Screen ID 5058");
  }

  async clickQAFormsTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIQAFormsTab.click();
  }

  async verifyUpdateSuccessfulStatusMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1003 - Update Successful",
    // uIMapPersonnel.personnelEntry.uIBottomLeftSideStatusBar.getText());
  }

  async clickCustomizeIcon(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uICustomizeButton.click();
  }

  async clickManageCustomFields(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIManageCustomFieldsMenuLink.click();
  }

  async NavigateToQAFormsTab1(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // // Below Frame Element was use after added the form in the QA Forms grid.
    // WebElement qAFormsTabFrame = Playback.driver
    // .findElement(By.xpath("(//iframe[contains(@src,'frmQuestionnaire.aspx?')])[2]"));
    // objectIdentification.windowHandle.switchToFrame(qAFormsTabFrame);
  }

  async verifyValidationPopUpIsArised(windowExist: boolean): Promise<void> {
    // Playback.pageLoadThreadWait();
    // if (windowExist == true) {
    // String Message = uIMapPopup.acknowledgeWindow.uIErrorInfoTextEdit.getText();
    // verify.ExpectedValueIsFalse(Message.contains("Validation") || Message.contains("Error"));
  }

  async verifyScrollBarNotPresent(): Promise<void> {
    // String execScript = "return document.documentElement.scrollHeight>document.documentElement.clientHeight;";
    // JavascriptExecutor scrollBarPresent = (JavascriptExecutor) Playback.driver;
    // Boolean test = (Boolean) (scrollBarPresent.executeScript(execScript));
    // if (test == true) {
    // System.out.print("Scrollbar is present.");
    // } else {
    // System.out.print("Scrollbar is not present.");
    // verify.ExpectedValueIsFalse(test);
  }

  async verify1014NotAValidEmailAddressAcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1014) Not a valid Email Address");
  }

  async clickSave(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uISaveButton.click();
  }

  async verifyALCIconIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.uIALCButton.isDisplayed(),
    // "ALC icon is not Displayed in Personnel Entry screen --> ");
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.uIALCButton.isEnabled(),
    // "ALC icon is not Enabled in Personnel Entry screen --> ");
  }

  async verifyDeletePopupAndClickCancel(): Promise<void> {
    // popup.confirm.noWithContainsMessage("(4) Do you really want to delete?");
  }

  async verifyDeletePopupNotAppear(): Promise<void> {
    // boolean checkAlertIsPresentOrNot = popup.confirm.checkAlertIsPresentOrNot();
    // if (checkAlertIsPresentOrNot) {
    // String alertPopupText = Playback.driver.switchTo().alert().getText();
    // verify.ExpectedPropertyValueIsNotEqual("(4) Do you really want to delete?", alertPopupText);
    // verify.ExpectedValueIsFalse(checkAlertIsPresentOrNot, "Alert popup appear --> " + alertPopupText);
    // } else {
    // verify.ExpectedValueIsFalse(checkAlertIsPresentOrNot);
  }

  async verifyPFCodeMaximumDigitsAs9(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("9",
    // Integer.toString(uIMapPersonnel.personnelEntry.uIPFCodeEdit.getAttribute("value").length()),
    // "PF Code should accept maximum 9 digits only --> ");
  }

}

export class PersonnelEntryMainTabPage {
  readonly page: Page;
  readonly email1ComboBox: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly custom1TextView: Locator;
  readonly custom1EditText: Locator;
  readonly custom2TextView: Locator;
  readonly custom2EditText: Locator;
  readonly custom3TextView: Locator;
  readonly custom3EditText: Locator;
  readonly custom4TextView: Locator;
  readonly custom4EditText: Locator;
  readonly email1EditText: Locator;
  readonly email2ComboBox: Locator;
  readonly email2EditText: Locator;
  readonly hireDateEditText: Locator;
  readonly serviceYearEditText: Locator;
  readonly serviceMonthsEditText: Locator;
  readonly serviceDaysEditText: Locator;
  readonly additionalYearsEditText: Locator;
  readonly additionalMonthsEditText: Locator;
  readonly additionalDateEditText: Locator;
  readonly phoneNoTypeDropDown: Locator;
  readonly phoneNoEdit: Locator;
  readonly phoneNoAddButton: Locator;
  readonly phoneNoTable: Locator;
  readonly addButton: Locator;
  readonly clickHereToSignImage: Locator;
  readonly signatureImage: Locator;
  readonly clearSignatureButton: Locator;
  readonly sSNoEdit: Locator;
  readonly heightEdit: Locator;
  readonly carrierComboBox: Locator;
  readonly extnEdit: Locator;
  readonly sortEdit: Locator;
  readonly rcvTxtCheckbox: Locator;
  readonly email3Edit: Locator;
  readonly email3TypeDropdown: Locator;
  readonly maskToggleButton: Locator;
  readonly probationEndedEdit: Locator;
  readonly terminatedDateEdit: Locator;
  readonly seniorityEdit: Locator;
  readonly weightEdit: Locator;
  readonly eyesDropDown: Locator;
  readonly hairDropDown: Locator;
  readonly sexDropDown: Locator;
  readonly raceDropDown: Locator;
  readonly ethincityDropDown: Locator;
  readonly birthDateEdit: Locator;
  readonly ageEdit: Locator;
  readonly birthPlaceEdit: Locator;
  readonly dLStateEdit: Locator;
  readonly maritalStatusDropDown: Locator;
  readonly stateDropDown: Locator;
  readonly raceDropDownForFire: Locator;
  readonly raceDropDownInputForFire: Locator;
  readonly clearButton: Locator;
  readonly sexDropdown: Locator;
  readonly raceDropdown: Locator;
  readonly ethnicityDropdown: Locator;
  readonly maritialStatusDropdown: Locator;
  readonly radioIDEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email1ComboBox = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_cddEmailType1_DropDown');
    this.bottomLeftSideStatusBar = page.locator("//div[@id=\'tab0\']//td[@class = \'statusBar\']/b");
    this.custom1TextView = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_lblCustom1');
    this.custom1EditText = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_txtCustom1');
    this.custom2TextView = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_lblCustom2');
    this.custom2EditText = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_txtCustom2');
    this.custom3TextView = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_lblCustom3');
    this.custom3EditText = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_txtCustom3');
    this.custom4TextView = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_lblCustom4');
    this.custom4EditText = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_txtCustom4');
    this.email1EditText = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_txtEmail1');
    this.email2ComboBox = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_cddEmailType2_DropDown');
    this.email2EditText = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_txtEmail2');
    this.hireDateEditText = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_dtcHireDate_KPIDttmCtrl');
    this.serviceYearEditText = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_txtServiceYears');
    this.serviceMonthsEditText = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_txtServiceMonths');
    this.serviceDaysEditText = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_txtServiceDays');
    this.additionalYearsEditText = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_txtAdditionalYears');
    this.additionalMonthsEditText = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_txtAdditionalMonths');
    this.additionalDateEditText = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_txtAdditionalDate');
    this.phoneNoTypeDropDown = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_cstPhone_PhoneType_DropDown');
    this.phoneNoEdit = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_cstPhone_PhoneNumber');
    this.phoneNoAddButton = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_imgAddPhone');
    this.phoneNoTable = page.locator("//div[@id=\'tabPersonnel_tmpl0_UsrPersonnelMain1_grdTelephone\']");
    this.addButton = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_imgAddPhone');
    this.clickHereToSignImage = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_imgSign');
    this.signatureImage = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_imgSign');
    this.clearSignatureButton = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_cmdClearSign');
    this.sSNoEdit = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_mskSSNo');
    this.heightEdit = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_txtHeight');
    this.carrierComboBox = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_cddPD_DropDown');
    this.extnEdit = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_txtExtn');
    this.sortEdit = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_txtSort');
    this.rcvTxtCheckbox = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_chkReceiveTxt');
    this.email3Edit = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_txtEmail3');
    this.email3TypeDropdown = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_cddEmailType3_DropDown');
    this.maskToggleButton = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_imgMaskToggle');
    this.probationEndedEdit = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_dtcProbationEnded_KPIDttmCtrl');
    this.terminatedDateEdit = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_dtcTerminatedDate_KPIDttmCtrl');
    this.seniorityEdit = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_txtSeniority');
    this.weightEdit = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_txtWeight');
    this.eyesDropDown = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_cddEyes_DropDown');
    this.hairDropDown = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_cddHair_DropDown');
    this.sexDropDown = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_cddSex_DropDown');
    this.raceDropDown = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_cddRace_DropDown');
    this.ethincityDropDown = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_cddHispanic_DropDown');
    this.birthDateEdit = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_dtcBirthDate_KPIDttmCtrl');
    this.ageEdit = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_txtAge');
    this.birthPlaceEdit = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_txtBirthPlace');
    this.dLStateEdit = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_txtDLState');
    this.maritalStatusDropDown = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_cddMaritalStatus_DropDown');
    this.stateDropDown = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_cddDLState_DropDown');
    this.raceDropDownForFire = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_radRace_DropDown');
    this.raceDropDownInputForFire = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_radRace_Input');
    this.clearButton = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_imgClearPhone');
    this.sexDropdown = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_cddSex_DropDown');
    this.raceDropdown = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_cddRace_DropDown');
    this.ethnicityDropdown = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_cddHispanic_DropDown');
    this.maritialStatusDropdown = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_cddMaritalStatus_DropDown');
    this.radioIDEdit = page.locator('#tabPersonnel_tmpl0_UsrPersonnelMain1_txtRadio');
  }

  async clickCustom1TextView(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom1TextView.click();
  }

  async clickCustom2TextView(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom2TextView.click();
  }

  async clickCustom3TextView(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom3TextView.click();
  }

  async clickCustom4TextView(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom4TextView.click();
  }

  async verifyCustom4FieldHide(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom4EditText
    // .getAttribute("class").contains("textboxInactive"));
  }

  async verifyCustom3FieldHide(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom3EditText
    // .getAttribute("class").contains("textboxInactive"));
  }

  async verifyCustom2FieldHide(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom2EditText
    // .getAttribute("class").contains("textboxInactive"));
  }

  async verifyCustom1FieldHide(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom1EditText
    // .getAttribute("class").contains("textboxInactive"));
  }

  async verifyCustom1AsMandatory(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom1TextView
    // .getAttribute("kpifieldusage").contains("Mandatory"));
  }

  async verifyCustom2AsMandatory(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom2TextView
    // .getAttribute("kpifieldusage").contains("Mandatory"));
  }

  async verifyCustom3AsMandatory(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom3TextView
    // .getAttribute("kpifieldusage").contains("Mandatory"));
  }

  async verifyCustom4AsMandatory(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom4TextView
    // .getAttribute("kpifieldusage").contains("Mandatory"));
  }

  async selectEMail1(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail1ComboBox);
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail1ComboBox.sendKeys(Keys.TAB);
  }

  async enterAtEmail1(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail1EditText.click();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail1EditText.clear();
    // Playback.controlReadyThreadWait();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail1EditText.click();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail1EditText
    // .sendKeys(BaseData.getPersonnelModuleValue("Email1"));
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail1EditText.sendKeys(Keys.TAB);
  }

  async enterEmail1Asrajas(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail1EditText.sendKeys("rajas@prophoenix.com");
  }

  async enterAtHiredDate(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIHireDateEditText
    // .sendKeys(BaseData.getPersonnelModuleValue("hiredDate"));
  }

  async verifyServiceYearsDisabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("textboxInactive",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIServiceYearEditText.getAttribute("class"));
    // verify.ExpectedPropertyValueIsEqual("textboxInactive",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIServiceMonthsEditText.getAttribute("class"));
    // verify.ExpectedPropertyValueIsEqual("textboxInactive",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIServiceDaysEditText.getAttribute("class"));
  }

  async verifyAdditionalYearsEnabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("textbox",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIAdditionalYearsEditText
    // .getAttribute("class"));
    // verify.ExpectedPropertyValueIsEqual("textbox",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIAdditionalMonthsEditText
    // .getAttribute("class"));
    // verify.ExpectedPropertyValueIsEqual("textbox",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIAdditionalDateEditText.getAttribute("class"));
  }

  async enterAdditionalYearsAs4(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIAdditionalYearsEditText.sendKeys("4");
  }

  async enterAdditionalMonthsAs3(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIAdditionalMonthsEditText.sendKeys("3");
  }

  async enterAdditionalDateAs25(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIAdditionalDateEditText.sendKeys("25");
  }

  async enterHiredDateAsPreviousYear(): Promise<void> {
    // System.out.println(Randomized.getPreviousYearByNoOfYears(2, "MM/dd/yyyy"));
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIHireDateEditText.click();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIHireDateEditText.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIHireDateEditText.click();
    // Playback.controlReadyThreadWait();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIHireDateEditText
    // .sendKeys(Randomized.getPreviousYearByNoOfYears(2, "MM/dd/yyyy"));
    // Playback.controlReadyThreadWait();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIHireDateEditText.sendKeys(Keys.TAB);
  }

  async veifySearviceYearAs2(): Promise<void> {
    // System.out.println(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIServiceYearEditText.getAttribute("value"));
    // verify.ExpectedPropertyValueIsEqual("2",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIServiceYearEditText.getAttribute("value"));
  }

  async selectAtPhoneType(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoTypeDropDown,
    // BaseData.getPersonnelModuleValue("PhoneType"));
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoTypeDropDown.sendKeys(Keys.TAB);
  }

  async enterAtPhoneNumber(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoEdit.click();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoEdit.click();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("PhoneNumber"));
  }

  async enterAtPhoneNumber1(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoEdit.click();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoEdit.click();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("PhoneNumber1"));
  }

  async clickPhoneNoAddButton(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoAddButton.click();
  }

  async verifyAtPhoneNoInGrid(rowIndex: number): Promise<void> {
    // Playback.controlReadyThreadWait();
    // String phnNo = objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoTable, "Phone#", rowIndex);
    // phnNo = phnNo.replaceAll("[() -]", "");
    // System.out.println(phnNo);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("PhoneNo"), phnNo);
  }

  async verifyAtPhoneNo1InGrid(rowIndex: number): Promise<void> {
    // Playback.controlReadyThreadWait();
    // String phnNo = objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoTable, "Phone#", rowIndex);
    // phnNo = phnNo.replaceAll("[() -]", "");
    // System.out.println(phnNo);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("PhoneNo1"), phnNo);
  }

  async verifyAtPhoneNoTypeByPhoneNoInGrid(JsonKeyIndex: number): Promise<void> {
    // Playback.controlReadyThreadWait();
    // String PhoneType = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoTable, BaseData.getPersonnelModuleValue("PhoneNo"), "Phone Type").getText();
    // verify.ExpectedPropertyValueIsEqual(PhoneType, BaseData.getPersonnelModuleValue("phnType"+JsonKeyIndex));
  }

  async enterPhoneNo(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoEdit
    // .sendKeys(Randomized.enterRandomNumbers(10));
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoEdit.sendKeys(Keys.TAB);
  }

  async clickAddButton(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIAddButton.click();
  }

  async verifyAddedPhoneTypeValueIsDisplayed(): Promise<void> {
    // List<String> dropDownValues = objectIdentification.manualIdentify
    // .getDropDownValues(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoTypeDropDown);
    // for (String value : dropDownValues) {
    // if (value.contains(BaseData.getPersonnelModuleValue("PhoneType"))) {
    // verify.ExpectedPropertyValueIsEqual(value, BaseData.getPersonnelModuleValue("PhoneType"));
  }

  async clickClickHereToSignImage(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIClickHereToSignImage.click();
  }

  async deleteAtPhoneNumberInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoTable,
    // BaseData.getPersonnelModuleValue("PhoneNo"));
  }

  async verifyRowCountIsZeroInGrid(): Promise<void> {
    // int rowCount = objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoTable);
    // verify.ExpectedIntergerValueIsEqualToActual(rowCount, 0);
  }

  async clickSignatureImage(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uISignatureImage.click();
  }

  async clickClearSignatureButton(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIClearSignatureButton.click();
  }

  async readPhoneNo(): Promise<string> {
    // String attribute = uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoEdit.getAttribute("value");
    // System.out.println(attribute);
    // return attribute;
  }

  async selectRowByAtPhoneTypeInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoTable,
    // BaseData.getPersonnelModuleValue("PhoneType"));
  }

  async enterAtSSNo(i: number): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uISSNoEdit.click();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uISSNoEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("SSNo" + i));
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uISSNoEdit.sendKeys(Keys.TAB);
  }

  async verifySSNoFieldIsNull(): Promise<void> {
    // System.out.println(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uISSNoEdit.getAttribute("title"));
    // verify.ExpectedPropertyValueIsEqual("   -  -    ",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uISSNoEdit.getAttribute("title"));
  }

  async verifyAtSSNo(i: number): Promise<void> {
    // String sSNo = BaseData.getPersonnelModuleValue("SSNo" + i).substring(0, 3) + "-"
    // + BaseData.getPersonnelModuleValue("SSNo" + i).substring(3, 5) + "-"
    // + BaseData.getPersonnelModuleValue("SSNo" + i).substring(5);
    // verify.ExpectedPropertyValueIsEqual(sSNo,
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uISSNoEdit.getAttribute("value"));//need to change as not equal
  }

  async enterAtHeight(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIHeightEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIHeightEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("Height"));
  }

  async verifyAtHeight(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Height"),
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIHeightEdit.getAttribute("value"));
  }

  async selectAtEMail1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail1ComboBox, BaseData.getPersonnelModuleValue("Email1ComboBox"));
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail1ComboBox.sendKeys(Keys.TAB);
  }

  async selectAtCarrier(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICarrierComboBox, BaseData.getPersonnelModuleValue("Carrier"));
  }

  async enterAtExtn(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIExtnEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIExtnEdit.sendKeys(BaseData.getPersonnelModuleValue("Extn"));
  }

  async enterAtSortWithAlphabet(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIExtnEdit.sendKeys("AB");
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIExtnEdit.sendKeys(Keys.TAB);
  }

  async verifySortFieldNotAcceptAlphabet(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uISortEdit.getAttribute("value").isEmpty());
  }

  async enterAtExtnWithAlphabet(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uISortEdit.sendKeys("AB");
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uISortEdit.sendKeys(Keys.TAB);
  }

  async verifyExtnFieldNotAcceptAlphabet(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIExtnEdit.getAttribute("value").equals("Extn"));
  }

  async clickRcvTxtCheckbox(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIRcvTxtCheckbox.click();
  }

  async verifyAtSortNumberInGridAs1(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // String Sort = objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoTable, "Sort", 0);
    // verify.ExpectedPropertyValueIsEqual("1", Sort);
  }

  async selectAtEmail3Type(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail3TypeDropdown,
    // BaseData.getPersonnelModuleValue("Email3Type"));
  }

  async enterAtEmail3(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail3Edit
    // .sendKeys(BaseData.getPersonnelModuleValue("Email3Text"));
  }

  async verifyMaskToggleButtonIsDisplayedAndEnabled(): Promise<void> {
    // boolean displayed = uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIMaskToggleButton.isDisplayed();
    // boolean Enabled = uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIMaskToggleButton.isEnabled();
    // verify.ExpectedValueIsTrue(displayed);
    // verify.ExpectedValueIsTrue(Enabled);
  }

  async clickMaskToggleButton(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIMaskToggleButton.click();
  }

  async verifyAdditionalYearsIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIAdditionalYearsEditText.getAttribute("class").contains("textboxInactive"),
    // "Additional Years is Enabled -->");
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIAdditionalMonthsEditText.getAttribute("class").contains("textboxInactive"),
    // "Additional Months is Enabled -->");
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIAdditionalDateEditText.getAttribute("class").contains("textboxInactive"),
    // "Additional Date is Enabled -->");
  }

  async verifyHiredDateIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIHireDateEditText.getAttribute("class").contains("textboxInactive"),
    // "Hired Date is Enabled -->");
  }

  async verifySeniorityIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uISeniorityEdit.getAttribute("class").contains("textboxInactive"),
    // "Seniority is Enabled -->");
  }

  async verifyProbationEndedIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIProbationEndedEdit.getAttribute("class").contains("textboxInactive"),
    // "Probation Ended is Enabled -->");
  }

  async verifyTerminatedDateIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uITerminatedDateEdit.getAttribute("class").contains("textboxInactive"),
    // "Terminated Date is Enabled -->");
  }

  async verifyAtYearsOfService(): Promise<void> {
    // int[] Yearservice = Randomized.verifyAtDifferenceBetweenFromAndToDate(Randomized.getCurrentDate("dd/MM/yyyy"), BaseData.getPersonnelModuleValue("HiredDate"));
    // System.out.println(Yearservice);
    // System.out.println(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIServiceYearEditText.getText());
    // System.out.println(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIServiceYearEditText.getAttribute("value"));
    // System.out.println(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIServiceYearEditText.getAttribute("value"));
    // verify.ExpectedPropertyValueIsEqual(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIServiceYearEditText.getAttribute("value"),Integer.toString(Yearservice[0]));
    // verify.ExpectedPropertyValueIsEqual(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIServiceMonthsEditText.getAttribute("value"),Integer.toString(Yearservice[1]));
    // verify.ExpectedPropertyValueIsEqual(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIServiceDaysEditText.getAttribute("value"),Integer.toString(Yearservice[2]));
  }

  async verifyAtCarrierbyPhoneNoInGrid(): Promise<void> {
    // String Carrier = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoTable, BaseData.getPersonnelModuleValue("PhoneNo"), "Carrier").getText();
    // verify.ExpectedPropertyValueIsEqual(Carrier, BaseData.getPersonnelModuleValue("Carrier"));
  }

  async verifyExtnByPhoneNoInGrid(): Promise<void> {
    // String Extn = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoTable, BaseData.getPersonnelModuleValue("PhoneNo"), "Extn").getText();
    // verify.ExpectedPropertyValueIsEqual(Extn, BaseData.getPersonnelModuleValue("Extn"));
  }

  async enterAtWeight(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIWeightEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIWeightEdit.sendKeys(BaseData.getPersonnelModuleValue("Weight"));
  }

  async selectAtEyes(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEyesDropDown, BaseData.getPersonnelModuleValue("Eyes"));
  }

  async selectAtHair(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIHairDropDown, BaseData.getPersonnelModuleValue("Hair"));
  }

  async verifyAtEmail(): Promise<void> {
    // String Email = uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail1EditText.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(Email, BaseData.getPersonnelModuleValue("Email"));
  }

  async verifyAtHiredDate(): Promise<void> {
    // String HiredDate =	uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIHireDateEditText.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(HiredDate, BaseData.getPersonnelModuleValue("HiredDate"));
  }

  async enterAtEmail2(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail2EditText.click();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail2EditText.clear();
    // Playback.controlReadyThreadWait();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail2EditText.click();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail2EditText
    // .sendKeys(BaseData.getPersonnelModuleValue("Email2"));
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail2EditText.sendKeys(Keys.TAB);
  }

  async selectAtEMail2(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail2ComboBox, BaseData.getPersonnelModuleValue("Email2ComboBox"));
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail1ComboBox.sendKeys(Keys.TAB);
  }

  async selectAtSex(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uISexDropDown, BaseData.getPersonnelModuleValue("Sex"));
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uISexDropDown.sendKeys(Keys.TAB);
  }

  async selectAtRace(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIRaceDropDown, BaseData.getPersonnelModuleValue("Race"));
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIRaceDropDown.sendKeys(Keys.TAB);
  }

  async selectAtEtnicity(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEthincityDropDown, BaseData.getPersonnelModuleValue("Ethincity"));
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEthincityDropDown.sendKeys(Keys.TAB);
  }

  async selectAtMaritalStatus(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIMaritalStatusDropDown, BaseData.getPersonnelModuleValue("MaritalStatus"));
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIMaritalStatusDropDown.sendKeys(Keys.TAB);
  }

  async enterAtBirthDate(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIBirthDateEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIBirthDateEdit.sendKeys(BaseData.getPersonnelModuleValue("BirthDate"));
  }

  async enterAtBirthPlace(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIBirthPlaceEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIBirthPlaceEdit.sendKeys(BaseData.getPersonnelModuleValue("BirthPlace"));
  }

  async enterAtProbation(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIProbationEndedEdit.sendKeys(BaseData.getPersonnelModuleValue("Probation"));
  }

  async enterAtTermination(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uITerminatedDateEdit.sendKeys(BaseData.getPersonnelModuleValue("TerminatedDate"));
  }

  async EnterAtDL(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIDLStateEdit.sendKeys(BaseData.getPersonnelModuleValue("DL"));
  }

  async SelectAtDLState(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIStateDropDown, BaseData.getPersonnelModuleValue("State"));
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIStateDropDown.sendKeys(Keys.TAB);
  }

  async enterAtCustom1(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom1EditText.sendKeys(BaseData.getPersonnelModuleValue("Custom1"));
  }

  async enterAtCustom2(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom2EditText.sendKeys(BaseData.getPersonnelModuleValue("Custom2"));
  }

  async enterAtCustom3(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom3EditText.sendKeys(BaseData.getPersonnelModuleValue("Custom3"));
  }

  async enterAtCustom4(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom4EditText.sendKeys(BaseData.getPersonnelModuleValue("Custom4"));
  }

  async enterAtSeniority(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uISeniorityEdit.sendKeys(BaseData.getPersonnelModuleValue("Seniority"));
  }

  async selectAtRaceForFire(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIRaceDropDownInputForFire.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIRaceDropDownForFire, BaseData.getPersonnelModuleValue("Race"));
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIRaceDropDownInputForFire.click();
  }

  async verifyEmail1IsDisabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail1EditText.getAttribute("readonly"),
    // "Email 1 edit field is not disabled --> ");
  }

  async verifyEmail2IsDisabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail2EditText.getAttribute("readonly"),
    // "Email 2 edit field is not disabled --> ");
  }

  async verifyEmail3IsDisabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail3Edit.getAttribute("readonly"),
    // "Email 3 edit field is not disabled --> ");
  }

  async verifyPhoneFieldsAreDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoTypeDropDown.isEnabled(),
    // "Phone Type Dropdown is not disabled --> ");
    // verify.ExpectedPropertyValueIsEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoEdit.getAttribute("readonly"),
    // "Phone No edit field is not disabled --> ");
    // verify.ExpectedValueIsFalse(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICarrierComboBox.isEnabled(),
    // "Phone Carrier Dropdown is not disabled --> ");
  }

  async verifyExtnIsDisabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIExtnEdit.getAttribute("readonly"),
    // "Extn edit field is not disabled --> ");
  }

  async verifySortIsDisabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uISortEdit.getAttribute("readonly"),
    // "Sort edit field is not disabled --> ");
  }

  async verifyAddButtonIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIAddButton.isEnabled(),
    // "Add button is not disabled --> ");
  }

  async verifyClearButtonIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIClearButton.isEnabled(),
    // "Clear button is not disabled --> ");
  }

  async verifySexDropdownIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uISexDropdown.isEnabled(),
    // "Sex Dropdown is not disabled --> ");
  }

  async verifyHeightIsDisabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIHeightEdit.getAttribute("readonly"),
    // "Height is not disabled --> ");
  }

  async verifyRaceDropdownIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIRaceDropdown.isEnabled(),
    // "Race Dropdown is not disabled --> ");
  }

  async verifyEthnicityDropdownIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEthnicityDropdown.isEnabled(),
    // "Ethnicity Dropdown is not disabled --> ");
  }

  async verifyWeightIsDisabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIWeightEdit.getAttribute("readonly"),
    // "Weight is not disabled --> ");
  }

  async verifyBirthDateIsDisabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIBirthDateEdit.getAttribute("readonly"),
    // "Birth Date is not disabled --> ");
  }

  async verifyEyesDropdownIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEyesDropDown.isEnabled(),
    // "Eyes Droddown is not disabled --> ");
  }

  async verifyBirthPlaceIsDisabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIBirthPlaceEdit.getAttribute("readonly"),
    // "Birth Place is not disabled --> ");
  }

  async verifyHairDropdownIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIHairDropDown.isEnabled(),
    // "Hair Dropdown is not disabled --> ");
  }

  async verifyMaritialStatusDropdownIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIMaritialStatusDropdown.isEnabled(),
    // "Maritial Status Dropdown is not disabled --> ");
  }

  async verifyCustom1IsDisabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom1EditText.getAttribute("readonly"),
    // "Custom1 is not disabled --> ");
  }

  async verifyCustom2IsDisabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom2EditText.getAttribute("readonly"),
    // "Custom2 is not disabled --> ");
  }

  async verifyCustom3IsDisabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom3EditText.getAttribute("readonly"),
    // "Custom3 is not disabled --> ");
  }

  async verifyCustom4IsDisabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom4EditText.getAttribute("readonly"),
    // "Custom4 is not disabled --> ");
  }

  async verifyEmail1IsEnabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsNotEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail1EditText.getAttribute("readonly"),
    // "Email 1 edit field is disabled --> ");
  }

  async verifyEmail2IsEnabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsNotEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail2EditText.getAttribute("readonly"),
    // "Email 2 edit field is disabled --> ");
  }

  async verifyEmail3IsEnabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsNotEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail3Edit.getAttribute("readonly"),
    // "Email 3 edit field is disabled --> ");
  }

  async verifyPhoneFieldsAreEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoTypeDropDown.isEnabled(),
    // "Phone Type Dropdown is disabled --> ");
    // verify.ExpectedPropertyValueIsNotEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoEdit.getAttribute("readonly"),
    // "Phone No edit field is disabled --> ");
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICarrierComboBox.isEnabled(),
    // "Phone Carrier Dropdown is disabled --> ");
  }

  async verifyExtnIsEnabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsNotEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIExtnEdit.getAttribute("readonly"),
    // "Extn edit field is disabled --> ");
  }

  async verifySortIsEnabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsNotEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uISortEdit.getAttribute("readonly"),
    // "Sort edit field is disabled --> ");
  }

  async verifyAddButtonIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIAddButton.isEnabled(),
    // "Add button is disabled --> ");
  }

  async verifyClearButtonIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIClearButton.isEnabled(),
    // "Clear button is disabled --> ");
  }

  async verifySexDropdownIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uISexDropdown.isEnabled(),
    // "Sex Dropdown is disabled --> ");
  }

  async verifyHeightIsEnabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsNotEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIHeightEdit.getAttribute("readonly"),
    // "Height is disabled --> ");
  }

  async verifyRaceDropdownIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIRaceDropdown.isEnabled(),
    // "Race Dropdown is disabled --> ");
  }

  async verifyEthnicityDropdownIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEthnicityDropdown.isEnabled(),
    // "Ethnicity Dropdown is disabled --> ");
  }

  async verifyWeightIsEnabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsNotEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIWeightEdit.getAttribute("readonly"),
    // "Weight is disabled --> ");
  }

  async verifyBirthDateIsEnabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsNotEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIBirthDateEdit.getAttribute("readonly"),
    // "Birth Date is disabled --> ");
  }

  async verifyEyesDropdownIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEyesDropDown.isEnabled(),
    // "Eyes Droddown is disabled --> ");
  }

  async verifyBirthPlaceIsEnabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsNotEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIBirthPlaceEdit.getAttribute("readonly"),
    // "Birth Place is disabled --> ");
  }

  async verifyHairDropdownIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIHairDropDown.isEnabled(),
    // "Hair Dropdown is disabled --> ");
  }

  async verifyMaritialStatusDropdownIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIMaritialStatusDropdown.isEnabled(),
    // "Maritial Status Dropdown is disabled --> ");
  }

  async verifyCustom1IsEnabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsNotEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom1EditText.getAttribute("readonly"),
    // "Custom1 is disabled --> ");
  }

  async verifyCustom2IsEnabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsNotEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom2EditText.getAttribute("readonly"),
    // "Custom2 is disabled --> ");
  }

  async verifyCustom3IsEnabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsNotEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom3EditText.getAttribute("readonly"),
    // "Custom3 is disabled --> ");
  }

  async verifyCustom4IsEnabled(): Promise<void> {
    // verify.ExpectedPropertyValueIsNotEqual("true",
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom4EditText.getAttribute("readonly"),
    // "Custom4 is disabled --> ");
  }

  async verifyCodeValueDescriptionIsDisplayedFirstInHairDropdown(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIHairDropDown, 1);
    // String text = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIHairDropDown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getHomeModuleValue("CodeValueDescription"), text);
  }

  async verifyAtCustom1(): Promise<void> {
    // String Custom2 = uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom1EditText.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(Custom2, BaseData.getPersonnelModuleValue("Custom2"));
  }

  async verifyRCVTxtIsCheckedByPhoneNo(): Promise<void> {
    // WebElement Extn = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoTable, BaseData.getPersonnelModuleValue("PhoneNo"), "Rcv Txt");
    // String selected = Extn.findElement(By.xpath(".//img")).getAttribute("title");
    // verify.ExpectedPropertyValueIsEqual(selected,"Checked");
  }

  async verifyAtCustom1LabelColor(jsonKeyIndex: number): Promise<void> {
    // String Color = uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom1TextView.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(Color, BaseData.getPersonnelModuleValue("Custom1color"+jsonKeyIndex));
  }

  async verifyAtCustom2LabelColor(jsonKeyIndex: number): Promise<void> {
    // String Color = uIMapPersonnel.personnelEntry.personnelEntryMainTab.uICustom2TextView.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(Color, BaseData.getPersonnelModuleValue("Custom2color"+jsonKeyIndex));
  }

  async verify1018RequiredEntriesAreMissingCustom1(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1018) Required Entries are Missing Custom1");
  }

  async verify1018RequiredEntriesAreMissingCustom2(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1018) Required Entries are Missing Custom2");
  }

  async enterAtEmail2(JsonKeyIndex: number): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail2EditText.click();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail2EditText.clear();
    // Playback.controlReadyThreadWait();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail2EditText.click();
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail2EditText
    // .sendKeys(BaseData.getPersonnelModuleValue("Email2"+JsonKeyIndex));
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail2EditText.sendKeys(Keys.TAB);
  }

  async verifyAtEmail2(): Promise<void> {
    // String Email = uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail2EditText.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(Email, BaseData.getPersonnelModuleValue("Email2"));
  }

  async verifyAtTextInSignatutrField(JSONKEYINDEX: number, screeshotName: string): Promise<void> {
    // int randomNumber = Randomized.getRandomNumber(100);
    // String ScreenShotName = screeshotName+randomNumber;
    // Playback.takeScreenShotForParticularElement(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uISignatureImage,ScreenShotName);
    // File imageFile = new File(PropertiesFile.readPropertiesFile("ReportsPath")+"\\RequestedScreenShots\\"+ ScreenShotName +".jpg");
    // String imageText = objectIdentification.manualIdentify.getTextFromSignature(imageFile);
    // verify.ExpectedPropertyValueIsEqual( BaseData.getPersonnelModuleValue("SignatureArea"+JSONKEYINDEX),imageText);
  }

  async selectAtEthnicityForFire(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEthincityDropDown, BaseData.getPersonnelModuleValue("Ethnicity"));
  }

  async verifyAtRaceForFire(): Promise<void> {
    // String attribute = uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIRaceDropDownInputForFire.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute, BaseData.getPersonnelModuleValue("Race"));
  }

  async verifyAtEthnicityForFire(): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEthincityDropDown);
    // verify.ExpectedPropertyValueIsEqual(dropDownSelectedItem, BaseData.getPersonnelModuleValue("Ethnicity"));
  }

  async verifyAtEmail3(): Promise<void> {
    // String Email = uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail3Edit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(Email, BaseData.getPersonnelModuleValue("Email3"));
  }

  async verifyAtEmail1type(JsonKeyIndex: number): Promise<void> {
    // String Email1 = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail1ComboBox);
    // verify.ExpectedPropertyValueIsEqual(Email1, BaseData.getPersonnelModuleValue("Email1"+JsonKeyIndex));
  }

  async verifyAtEmail2type(JsonKeyIndex: number): Promise<void> {
    // String Email12 = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail2ComboBox);
    // verify.ExpectedPropertyValueIsEqual(Email12, BaseData.getPersonnelModuleValue("Email2"+JsonKeyIndex));
  }

  async verifyAtEmail3type(JsonKeyIndex: number): Promise<void> {
    // String Email3 = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail3TypeDropdown);
    // verify.ExpectedPropertyValueIsEqual(Email3, BaseData.getPersonnelModuleValue("Email3"+JsonKeyIndex));
  }

  async verifyAtWeight(JsonKeyIndex: number): Promise<void> {
    // String Weight = uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIWeightEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(Weight, BaseData.getPersonnelModuleValue("Weight"+JsonKeyIndex));
  }

  async verifyAtRace(JsonKeyIndex: number): Promise<void> {
    // String Race = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIRaceDropdown);
    // verify.ExpectedPropertyValueIsEqual(Race, BaseData.getPersonnelModuleValue("Race"+JsonKeyIndex));
  }

  async verifyAtEthnicity(JsonKeyIndex: number): Promise<void> {
    // String Ethnicity = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEthnicityDropdown);
    // verify.ExpectedPropertyValueIsEqual(Ethnicity, BaseData.getPersonnelModuleValue("Ethnicity"+JsonKeyIndex));
  }

  async verifyAtBirthDate(JsonKeyIndex: number): Promise<void> {
    // String BirthDate = uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIBirthDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BirthDate, BaseData.getPersonnelModuleValue("BirthDate"+JsonKeyIndex));
  }

  async verifyAtBirthPlace(JsonKeyIndex: number): Promise<void> {
    // String BirthPlace = uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIBirthPlaceEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BirthPlace, BaseData.getPersonnelModuleValue("BirthPlace"+JsonKeyIndex));
  }

  async verifyAtEyes(JsonKeyIndex: number): Promise<void> {
    // String Eyes = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEyesDropDown);
    // verify.ExpectedPropertyValueIsEqual(Eyes, BaseData.getPersonnelModuleValue("Eyes"+JsonKeyIndex));
  }

  async verifyAtMaritalStatus(JsonKeyIndex: number): Promise<void> {
    // String MaritalStatus = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIMaritalStatusDropDown);
    // verify.ExpectedPropertyValueIsEqual(MaritalStatus, BaseData.getPersonnelModuleValue("MaritalStatus"+JsonKeyIndex));
  }

  async clearEmail1(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail1EditText.clear();
  }

  async clearEmail2(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail2EditText.clear();
  }

  async clearEmail3(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEmail3Edit.clear();
  }

  async selectAtEthnicity(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIEthincityDropDown, BaseData.getPersonnelModuleValue("Ethnicity"));
  }

  async selectAtMartialStatus(JsonkeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIMaritalStatusDropDown, BaseData.getPersonnelModuleValue("MaritalStatus"+JsonkeyIndex));
  }

  async selectAtPhoneType(JsonKeyindex: number): Promise<void> {
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoTypeDropDown,
    // BaseData.getPersonnelModuleValue("PhoneType"+JsonKeyindex));
    // uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIPhoneNoTypeDropDown.sendKeys(Keys.TAB);
  }

  async verifyAtHair(JsonKeyIndex: number): Promise<void> {
    // String hair = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIHairDropDown);
    // verify.ExpectedPropertyValueIsEqual(hair, BaseData.getPersonnelModuleValue("hair"+JsonKeyIndex));
  }

  async verifyRadioIDIsBlank(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryMainTab.uIRadioIDEdit.getText().isBlank());
  }

}

export class PersonnelEntryAssignmentTabPage {
  readonly page: Page;
  readonly assignmentDateEdit: Locator;
  readonly nextReviewDueInComboBox: Locator;
  readonly jobGradeComboBox: Locator;
  readonly divisionComboBox: Locator;
  readonly sectionComboBox: Locator;
  readonly viewAssignmentHistoryButton: Locator;
  readonly supervisorCodeEdit: Locator;
  readonly supervisorCodeDescription: Locator;
  readonly supervisorLookUpIcon: Locator;
  readonly supervisorInfoButton: Locator;
  readonly groupTextView: Locator;
  readonly groupComboBox: Locator;
  readonly divisionTextView: Locator;
  readonly teamTextView: Locator;
  readonly teamComboBox: Locator;
  readonly sectionTextView: Locator;
  readonly squadComboBox: Locator;
  readonly squadTextView: Locator;
  readonly typeComboBox: Locator;
  readonly titleRankComboBox: Locator;
  readonly badgeEdit: Locator;
  readonly effectiveTimeEdit: Locator;
  readonly effectiveDateLabel: Locator;
  readonly effectiveTime1Edit: Locator;
  readonly promotionSeniorityEdit: Locator;
  readonly nextReviewDateEdit: Locator;
  readonly unitCodeEdit: Locator;
  readonly unitDescriptionEdit: Locator;
  readonly shiftDropdown: Locator;
  readonly sectionTreeViewIcon: Locator;
  readonly detailHierarchyOrderComboBox: Locator;
  readonly detailRateType: Locator;
  readonly detailHierarchyOrder: Locator;
  readonly specialPayDropDown: Locator;
  readonly specialPayGrid: Locator;
  readonly addButton: Locator;
  readonly stationDropDown: Locator;
  readonly positionEdit: Locator;
  readonly costCenterDropDown: Locator;
  readonly earningCodeDropDown: Locator;
  readonly positionLookUpIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.assignmentDateEdit = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_dttmAssignmentDate_KPIDttmCtrl');
    this.nextReviewDueInComboBox = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_cddReviewdue_DropDown');
    this.jobGradeComboBox = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_cddJobGrade');
    this.divisionComboBox = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_cddDivision_DropDown');
    this.sectionComboBox = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_cddSection_DropDown');
    this.viewAssignmentHistoryButton = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_cmdAssignment');
    this.supervisorCodeEdit = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_lupSupervisor_CodeValue');
    this.supervisorCodeDescription = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_lupSupervisor_CodeDescription');
    this.supervisorLookUpIcon = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_lupSupervisor_imgBtn');
    this.supervisorInfoButton = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_lupSupervisor_cmdIncOnAddr');
    this.groupTextView = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_lblWorkgroup');
    this.groupComboBox = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_cddWorkgroup_DropDown');
    this.divisionTextView = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_lblDivision');
    this.teamTextView = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_lblTeam');
    this.teamComboBox = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_cddTeam_DropDown');
    this.sectionTextView = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_lblSection');
    this.squadComboBox = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_cddSquad_DropDown');
    this.squadTextView = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_lblSquad');
    this.typeComboBox = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_cddType_DropDown');
    this.titleRankComboBox = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_cddRank_DropDown');
    this.badgeEdit = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_txtBadge');
    this.effectiveTimeEdit = page.locator("//table[@id=\'tabPersonnel_tmpl1_UsrPersonnelAssignment1_dttmAssignmentTime_Time\']//input");
    this.effectiveDateLabel = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_lblAssignmentDate');
    this.effectiveTime1Edit = page.locator("//table[@id=\'tabPersonnel_tmpl1_UsrPersonnelAssignment1_dttmAssignmentTime_Time\']//input[@class=\'igte_BlueThemeEditInContainer\']");
    this.promotionSeniorityEdit = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_txtPromotionSeniority');
    this.nextReviewDateEdit = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_dttmReviewdue_KPIDttmCtrl');
    this.unitCodeEdit = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_lupUnit_CodeValue');
    this.unitDescriptionEdit = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_lupUnit_CodeDescription');
    this.shiftDropdown = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_cddShift_DropDown');
    this.sectionTreeViewIcon = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_imgDivision');
    this.detailHierarchyOrderComboBox = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_cddDetailPeckingOrder_DropDown');
    this.detailRateType = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_cddDetailRateType_DropDown');
    this.detailHierarchyOrder = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_cddDetailPeckingOrder_DropDown');
    this.specialPayDropDown = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_cddSpecialPay_DropDown');
    this.specialPayGrid = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_grdSpecialPay');
    this.addButton = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_imgAddSpecial');
    this.stationDropDown = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_cddStation_DropDown');
    this.positionEdit = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_lupPosition_CodeValue');
    this.costCenterDropDown = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_cddCostCenter_DropDown');
    this.earningCodeDropDown = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_cddEarningCode_DropDown');
    this.positionLookUpIcon = page.locator('#tabPersonnel_tmpl1_UsrPersonnelAssignment1_lupPosition_imgBtn');
  }

  async enterAssignmentDateAs30DaysPastFromCurrentDate(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIAssignmentDateEdit.clear();
    // String futureDate = Randomized.getPreviousDateByMonth(1);
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIAssignmentDateEdit.sendKeys(futureDate);
  }

  async selectNextReviewDueInAsOneMonth(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uINextReviewDueInComboBox.sendKeys("1 Month");
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uINextReviewDueInComboBox.sendKeys(Keys.TAB);
  }

  async selectJobGradeAsJobGrade1(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIJobGradeComboBox.sendKeys("Job Grade 1");
  }

  async tabOutAssignmentDate(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIAssignmentDateEdit.sendKeys(Keys.TAB);
  }

  async enterAssignmentDateAsCurrentDate(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIAssignmentDateEdit
    // .sendKeys(Randomized.getCurrentDate());
  }

  async selectAtDivision(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIDivisionComboBox,
    // BaseData.getPersonnelModuleValue("Division"));
  }

  async selectAtDivision1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIDivisionComboBox,
    // BaseData.getPersonnelModuleValue("Division1"));
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIDivisionComboBox.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async selectAtSection(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISectionComboBox,
    // BaseData.getPersonnelModuleValue("Section"));
  }

  async selectAtSection1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISectionComboBox,
    // BaseData.getPersonnelModuleValue("Section1"));
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISectionComboBox.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async clickViewAssignmentHistoryButton(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIViewAssignmentHistoryButton.click();
  }

  async clickDivisionLabel(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIDivisionTextView.click();
  }

  async clickSectionLabel(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISectionTextView.click();
  }

  async clickSquadLabel(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISquadTextView.click();
  }

  async clickTeamTextView(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uITeamTextView.click();
  }

  async clickGroupTextView(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIGroupTextView.click();
  }

  async verifyAtSupervisorDescription(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("SupervisorDescription"),
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISupervisorCodeDescription
    // .getAttribute("value"));
  }

  async verifyExistingwindowCount(): Promise<void> {
    // verify.ExpectedValueIsTrue(Playback.driver.getWindowHandles().size() == 3);
  }

  async clickSupervisorIcon(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISupervisorInfoButton.click();
  }

  async verifyAssignmentDateAsCurrentDate(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate(),
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIAssignmentDateEdit
    // .getAttribute("value"));
  }

  async verifyAtDivision(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Division"),
    // objectIdentification.manualIdentify.getDropDownSelectedItem(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIDivisionComboBox));
  }

  async verifyAtSection(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Section"),
    // objectIdentification.manualIdentify.getDropDownSelectedItem(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISectionComboBox));
  }

  async verifyDivisionAcknowledgeMessage(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapPopup.acknowledgeWindow.uIErrorInfoTextEdit.getText().contains("(3230) Warning"));
    // verify.ExpectedValueIsTrue(uIMapPopup.acknowledgeWindow.uIErrorInfoTextEdit.getText()
    // .contains("Cannot assign multiple divisions to a single section/battalion. Please re-enter."));
    // popup.acknowledge.ok();
  }

  async verifySectionAcknowledgeMessage(): Promise<void> {
    // // popup.acknowledge.okWithExpectedMessage("(3230) Warning - Cannot assign
    // // multiple divisions to a single section/battalion. Please re-enter.");
    // verify.ExpectedValueIsTrue(
    // uIMapPopup.acknowledgeWindow.uIErrorInfoTextEdit.getText().contains("(3230) Warning"));
    // verify.ExpectedValueIsTrue(uIMapPopup.acknowledgeWindow.uIErrorInfoTextEdit.getText()
    // .contains("Cannot assign multiple divisions to a single section/battalion. Please re-enter."));
    // popup.acknowledge.ok();
  }

  async verifySectionCount(sectionCount: number): Promise<void> {
    // verify.ExpectedIntergerValueIsEqualToActual(objectIdentification.manualIdentify.getDropDownOptionsCount(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISectionComboBox), sectionCount);
  }

  async verifyGroupAsMandatory(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIGroupTextView
    // .getAttribute("kpifieldusage").contains("Mandatory"));
  }

  async verifySectionAsMandatory(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISectionTextView
    // .getAttribute("kpifieldusage").contains("Mandatory"));
  }

  async verifySquadAsMandatory(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISquadTextView
    // .getAttribute("kpifieldusage").contains("Mandatory"));
  }

  async verifyTeamAsMandatory(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uITeamTextView
    // .getAttribute("kpifieldusage").contains("Mandatory"));
  }

  async verifyDivisionAsMandatory(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIDivisionTextView
    // .getAttribute("kpifieldusage").contains("Mandatory"));
  }

  async verifySectionFieldHide(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // Boolean.parseBoolean(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISectionComboBox
    // .getAttribute("disabled")));
  }

  async verifySquadHide(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // Boolean.parseBoolean(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISquadComboBox
    // .getAttribute("disabled")));
  }

  async verifyTeamHide(): Promise<void> {
    // verify.ExpectedValueIsTrue(Boolean.parseBoolean(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uITeamComboBox.getAttribute("disabled")));
  }

  async verifyGroupHide(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // Boolean.parseBoolean(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIGroupComboBox
    // .getAttribute("disabled")));
  }

  async verifyDivisionHide(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // Boolean.parseBoolean(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIDivisionComboBox
    // .getAttribute("disabled")));
  }

  async selectTypeAsADD1105(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uITypeComboBox, "--Add 1105 --");
  }

  async selectTitleAsADD2016(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uITitleRankComboBox, "--Add 2016 --");
  }

  async selectDivisionAsADD2001(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIDivisionComboBox, "--Add 2001 --");
  }

  async selectSectionAsADD2006(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISectionComboBox, "--Add 2006 --");
  }

  async selectSquadAsADD3026(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISquadComboBox, "--Add 3026 --");
  }

  async selectTeamAsADD3021(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uITeamComboBox, "--Add 3021 --");
  }

  async enterAtBadge(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIBadgeEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("Badge"));
  }

  async selectAtType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uITypeComboBox,
    // BaseData.getPersonnelModuleValue("Type"));
  }

  async selectAtTitleRank(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uITitleRankComboBox,
    // BaseData.getPersonnelModuleValue("TitleRank"));
  }

  async enterAtSupervisor(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISupervisorCodeEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISupervisorCodeEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("SupervisorPF"));
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISupervisorCodeEdit.sendKeys(Keys.TAB);
  }

  async verifyEffectiveDateFieldInactive(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIAssignmentDateEdit
    // .getAttribute("class").contains("textboxInactive"));
  }

  async verifyEffectiveDateFieldMandatory(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIEffectiveDateLabel
    // .getAttribute("class").contains("Mandatory"));
  }

  async enterEffectiveTimeAsCurrentTime(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIEffectiveTimeEdit.click();
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIEffectiveTimeEdit
    // .sendKeys(Randomized.getCurrentTime("HH:mm"));
    // Playback.controlReadyThreadWait();
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIEffectiveTimeEdit.sendKeys(Keys.TAB);
  }

  async GetEffectiveTime(effectiveTime: string): Promise<void> {
    // effectiveTime = uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIEffectiveTime1Edit
    // .getAttribute("alt").toString();
    // ;
    // Playback.setTestContextAttribute("effectiveTime", effectiveTime);
    // // Console.WriteLine(effectiveTime);
  }

  async verifyPromotionSeniorityDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIPromotionSeniorityEdit.isDisplayed());
  }

  async enterAtPromotionSeniority(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIPromotionSeniorityEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIPromotionSeniorityEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("PromotionSeniority"));
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIPromotionSeniorityEdit.sendKeys(Keys.TAB);
  }

  async verifyAtPromotionSeniority(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("PromotionSeniority"),
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIPromotionSeniorityEdit
    // .getAttribute("value"));
  }

  async selectAtSquad(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISquadComboBox,
    // BaseData.getPersonnelModuleValue("Squad"));
  }

  async tabOutEffectiveDateTime(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIAssignmentDateEdit.sendKeys(Keys.TAB);
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIEffectiveTimeEdit.sendKeys(Keys.TAB);
  }

  async verifyAtSupervisorwithInActive(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("##" + BaseData.getPersonnelModuleValue("Supervisor"),
    // uIMapPersonnel.personnelSearch.uISupervisorPFDesEdit.getAttribute("value"));
  }

  async enterAtSupervisor1(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISupervisorCodeEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("SupervisorPF1"));
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISupervisorCodeEdit.sendKeys(Keys.TAB);
  }

  async verifyAtSupervisor1(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Supervisor1"),
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISupervisorCodeDescription
    // .getAttribute("value"));
  }

  async clickSupervisorLookUpIcon(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISupervisorLookUpIcon.click();
  }

  async selectAtJobGrade(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIJobGradeComboBox
    // .sendKeys(BaseData.getSchedulingModuleValue("JobGrade"));
  }

  async verifyJobGradeContainsInactiveValue(): Promise<void> {
    // String selectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIJobGradeComboBox);
    // verify.ExpectedValueIsTrue(selectedItem.contains("#"));
  }

  async verifyJobGradeContainsNoValue(): Promise<void> {
    // String selectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIJobGradeComboBox);
    // verify.ExpectedValueIsTrue(selectedItem.contains("--"));
  }

  async selectJobGradeWithInactiveJobCode(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIJobGradeComboBox,
    // BaseData.getSchedulingModuleValue("InactiveJobCode"));
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIJobGradeComboBox.sendKeys(Keys.TAB);
  }

  async verifyInactiveCodeSelectedAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1119) Warning: Inactive code selected");
  }

  async tabOutNextReviewDateIn(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uINextReviewDateEdit.sendKeys(Keys.TAB);
  }

  async verifyNextReviewDate(): Promise<void> {
    // for (int Z = 1; Z <= 12; Z++) {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uINextReviewDueInComboBox, Z);
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uINextReviewDueInComboBox.sendKeys(Keys.TAB);
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uINextReviewDateEdit.click();
    // String nextRevieeDate1 = uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uINextReviewDateEdit
    // .getAttribute("value");
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uINextReviewDateEdit.sendKeys(Keys.TAB);
    // String nextRevieeDate = uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uINextReviewDateEdit
    // .getAttribute("value");
    // String futureDateByMonth = Randomized.getFutureDateByMonth(Z);
    // verify.ExpectedPropertyValueIsEqual(nextRevieeDate1, futureDateByMonth);
    // verify.ExpectedPropertyValueIsEqual(nextRevieeDate, futureDateByMonth);
  }

  async verifyAtType(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getHomeModuleValue("Type"),
    // objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uITypeComboBox));
  }

  async enterAtEffctiveDateAsFutureDate(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIAssignmentDateEdit.click();
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIAssignmentDateEdit.sendKeys(Randomized.getFutureDate(4));
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIAssignmentDateEdit.sendKeys(Keys.TAB);
  }

  async verifyAtShift(JsonKeyIndex: number): Promise<void> {
    // if(JsonKeyIndex==0) {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Shift"),
    // objectIdentification.manualIdentify.getDropDownSelectedItem(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIShiftDropdown));
    // else{
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Shift"+JsonKeyIndex),
    // objectIdentification.manualIdentify.getDropDownSelectedItem(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIShiftDropdown));
  }

  async verifyAtUnit(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Unit"),
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIUnitCodeEdit.getAttribute("value"));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("UnitDescription"),
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIUnitDescriptionEdit.getAttribute("value"));
  }

  async clickSectionTreeViewIcon(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISectionTreeViewIcon.click();
  }

  async verifyToolTipOnEffectiveDateLabel(): Promise<void> {
    // String title = uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIEffectiveDateLabel.getAttribute("title");
    // verify.ExpectedPropertyValueIsEqual(title, "Update the Assignment date to record any change in the assignment history.");
  }

  async verifyAtSquad(): Promise<void> {
    // String dropDwonSelectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISquadComboBox);
    // verify.ExpectedPropertyValueIsEqual(dropDwonSelectedItem, BaseData.getPersonnelModuleValue("Squad"));
  }

  async verifyAtTeam(): Promise<void> {
    // String dropDwonSelectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uITeamComboBox);
    // verify.ExpectedPropertyValueIsEqual(dropDwonSelectedItem, BaseData.getPersonnelModuleValue("Team"));
  }

  async SelectAtTeam(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uITeamComboBox, BaseData.getPersonnelModuleValue("Team"));
  }

  async selectAtDetailHierarchyOrder(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIDetailHierarchyOrder, BaseData.getPersonnelModuleValue("DetailHierarchyOrder"));
  }

  async selectAtDetailRateType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIDetailRateType, BaseData.getPersonnelModuleValue("DetailRateType"));
  }

  async selectAtGroup(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIGroupComboBox, BaseData.getPersonnelModuleValue("Group"));
  }

  async verifyAtDetailHierarchyOrder(): Promise<void> {
    // String dropDwonSelectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIDetailHierarchyOrder);
    // verify.ExpectedPropertyValueIsEqual(dropDwonSelectedItem, BaseData.getPersonnelModuleValue("DetailHierarchyOrder"));
  }

  async verifyAtJobGrade(): Promise<void> {
    // String dropDwonSelectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIJobGradeComboBox);
    // verify.ExpectedPropertyValueIsEqual(dropDwonSelectedItem, BaseData.getPersonnelModuleValue("JobGrade"));
  }

  async verifyAtNextReviewDueMonth(): Promise<void> {
    // String NextReviewDueInComboBox = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uINextReviewDueInComboBox);
    // verify.ExpectedPropertyValueIsEqual(NextReviewDueInComboBox, BaseData.getPersonnelModuleValue("NextReviewDueIn"));
  }

  async verifyAtNextReviewDueDate(ReviewDate: string): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(ReviewDate,
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uINextReviewDateEdit
    // .getAttribute("value"));
  }

  async verifyAtTitle(): Promise<void> {
    // String TitleRank = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uITitleRankComboBox);
    // verify.ExpectedPropertyValueIsEqual(TitleRank, BaseData.getPersonnelModuleValue("Title"));
  }

  async verifyAtBadge(): Promise<void> {
    // String Badge = uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIBadgeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(Badge, BaseData.getPersonnelModuleValue("Badge"));
  }

  async verifyAtSupervisor(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Supervisor"),
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISupervisorCodeEdit
    // .getAttribute("value"));
  }

  async verifySquadDropDownIsNotDisplayed(): Promise<void> {
    // boolean controlExist = objectIdentification.manualIdentify.controlExist(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISquadComboBox);
    // verify.ExpectedValueIsFalse(controlExist);
  }

  async verifySquadDropDownIsDisplayedAndEnabled(): Promise<void> {
    // boolean displayed = uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISquadComboBox.isDisplayed();
    // boolean enabled = uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISquadComboBox.isEnabled();
    // verify.ExpectedValueIsTrue(displayed);
    // verify.ExpectedValueIsTrue(enabled);
  }

  async verifySpecialPayDropDownIsNotDisplayed(): Promise<void> {
    // boolean controlExist = objectIdentification.manualIdentify.controlExist(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISpecialPayDropDown);
    // verify.ExpectedValueIsFalse(controlExist);
  }

  async verifySpecialPayGridIsNotDisplayed(): Promise<void> {
    // boolean controlExist = objectIdentification.manualIdentify.controlExist(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISpecialPayGrid);
    // verify.ExpectedValueIsFalse(controlExist);
  }

  async verifySpecialPayDropDownIsDisplayedAndEnabled(): Promise<void> {
    // boolean displayed = uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISpecialPayDropDown.isDisplayed();
    // boolean enabled = uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISpecialPayDropDown.isEnabled();
    // verify.ExpectedValueIsTrue(displayed);
    // verify.ExpectedValueIsTrue(enabled);
  }

  async verifySpecialPayGridIsDisplayedAndEnabled(): Promise<void> {
    // boolean displayed = uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISpecialPayGrid.isDisplayed();
    // boolean enabled = uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISpecialPayGrid.isEnabled();
    // verify.ExpectedValueIsTrue(displayed);
    // verify.ExpectedValueIsTrue(enabled);
  }

  async verifyDetailHierarchyOrder(): Promise<void> {
    // String DetailHierarchyOrder = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIDetailHierarchyOrderComboBox );
    // verify.ExpectedPropertyValueIsEqual(DetailHierarchyOrder, BaseData.getPersonnelModuleValue("DetailHierarchyOrder"));
  }

  async verifyAtGroup(): Promise<void> {
    // String Group = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIGroupComboBox);
    // verify.ExpectedPropertyValueIsEqual(Group, BaseData.getPersonnelModuleValue("Group"));
  }

  async verifyAtTitleRank(): Promise<void> {
    // String TitleRank = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uITitleRankComboBox);
    // verify.ExpectedPropertyValueIsEqual(TitleRank, BaseData.getPersonnelModuleValue("TitleRank"));
  }

  async verifyAtDetailRateType(): Promise<void> {
    // String DetailRateType = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIDetailRateType);
    // verify.ExpectedPropertyValueIsEqual(DetailRateType, BaseData.getPersonnelModuleValue("DetailRateType"));
  }

  async selectAtSpecialPay(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISpecialPayDropDown,  BaseData.getPersonnelModuleValue("SpecialPay"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIAddButton.click();
  }

  async verifyAtSpecialPayInGrid(): Promise<void> {
    // String specialpay = 	objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISpecialPayGrid, BaseData.getPersonnelModuleValue("SpecialPay")).getText();
    // verify.ExpectedPropertyValueIsEqual(specialpay, BaseData.getPersonnelModuleValue("SpecialPay"));
  }

  async enterAtUnit(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIUnitCodeEdit.sendKeys(BaseData.getPersonnelModuleValue("Unit"));
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIUnitCodeEdit.sendKeys(Keys.TAB);
  }

  async selectAtStation(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIStationDropDown,  BaseData.getPersonnelModuleValue("Station"));
  }

  async selectAtCostCenter(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uICostCenterDropDown,  BaseData.getPersonnelModuleValue("CostCenter"));
  }

  async selectAtEarningCode(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIEarningCodeDropDown,  BaseData.getPersonnelModuleValue("EarningCode"));
  }

  async enterAtPosition(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIPositionEdit.sendKeys(BaseData.getPersonnelModuleValue("Position"));
  }

  async enterAtNextReviewDateIn(NextReviewDate: string): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uINextReviewDateEdit.click();
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uINextReviewDateEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uINextReviewDateEdit.sendKeys(NextReviewDate);
  }

  async verifyAtDivision(JsonKeyIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Division"+JsonKeyIndex),
    // objectIdentification.manualIdentify.getDropDownSelectedItem(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIDivisionComboBox));
  }

  async verifyAtSection(JsonKeyIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Section"+JsonKeyIndex),
    // objectIdentification.manualIdentify.getDropDownSelectedItem(
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISectionComboBox));
  }

  async verifyAtSquad(JsonKeyIndex: number): Promise<void> {
    // String dropDwonSelectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uISquadComboBox);
    // verify.ExpectedPropertyValueIsEqual(dropDwonSelectedItem, BaseData.getPersonnelModuleValue("Squad"+JsonKeyIndex));
  }

  async verifyAtTeam(JsonKeyIndex: number): Promise<void> {
    // String dropDwonSelectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uITeamComboBox);
    // verify.ExpectedPropertyValueIsEqual(dropDwonSelectedItem, BaseData.getPersonnelModuleValue("Team"+JsonKeyIndex));
  }

  async verifyAtGroup(JsonKeyIndex: number): Promise<void> {
    // String Group = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIGroupComboBox);
    // verify.ExpectedPropertyValueIsEqual(Group, BaseData.getPersonnelModuleValue("Group"+JsonKeyIndex));
  }

  async verifyAtPromotionSeniority(JsonKeyIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("PromotionSeniority"+JsonKeyIndex),
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIPromotionSeniorityEdit
    // .getAttribute("value"));
  }

  async verifyAtDetailHierarchyOrder(JsonKeyIndex: number): Promise<void> {
    // String dropDwonSelectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIDetailHierarchyOrder);
    // verify.ExpectedPropertyValueIsEqual(dropDwonSelectedItem, BaseData.getPersonnelModuleValue("DetailHierarchyOrder"+JsonKeyIndex));
  }

  async verifyAtDetailRateType(JsonKeyIndex: number): Promise<void> {
    // String DetailRateType = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIDetailRateType);
    // verify.ExpectedPropertyValueIsEqual(DetailRateType, BaseData.getPersonnelModuleValue("DetailRateType"+JsonKeyIndex));
  }

  async verifyAtJobGrade(JsonKeyIndex: number): Promise<void> {
    // String dropDwonSelectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIJobGradeComboBox);
    // verify.ExpectedPropertyValueIsEqual(dropDwonSelectedItem, BaseData.getPersonnelModuleValue("JobGrade"+JsonKeyIndex));
  }

  async verifyAtNextReviewDueMonth(JsonKeyIndex: number): Promise<void> {
    // String NextReviewDueInComboBox = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uINextReviewDueInComboBox);
    // verify.ExpectedPropertyValueIsEqual(NextReviewDueInComboBox, BaseData.getPersonnelModuleValue("NextReviewDueIn"+JsonKeyIndex));
  }

  async clickPositionLookUpIcon(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIPositionLookUpIcon.click();
  }

  async verifyAtPosition(i: number): Promise<void> {
    // String text = uIMapPersonnel.personnelEntry.personnelEntryAssignmentTab.uIPositionEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Position"+i), text);
  }

  async verifyattachmentTabcolorAsBlue(): Promise<void> {
    // System.out.println(uIMapPersonnel.personnelEntry.uIAttachmentTab.getCssValue("color"));
    // verify.ExpectedPropertyValueIsEqual(uIMapPersonnel.personnelEntry.uIAttachmentTab.getCssValue("color"), "rgba(0, 0, 255, 1)");
  }

  async clickRFIDTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIRFIDTab.click();
  }

  async verify1020PleaseSaveAcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1020)Please save the entry and proceed.");
  }

}

export class RFIDTabPage {
  readonly page: Page;
  readonly rFIDTagEdit: Locator;
  readonly notesEdit: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly rFIDGrid: Locator;
  readonly inActiveCheckBox: Locator;
  readonly inActiveDateEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rFIDTagEdit = page.locator('#tabPersonnel_tmpl5_UsrPFRFID1_txtRFIDTag');
    this.notesEdit = page.locator('#tabPersonnel_tmpl5_UsrPFRFID1_txtNotes');
    this.addButton = page.locator('#tabPersonnel_tmpl5_UsrPFRFID1_cmdAddPFRFID');
    this.clearButton = page.locator('#tabPersonnel_tmpl5_UsrPFRFID1_cmdClearPFRFID');
    this.rFIDGrid = page.locator('#tabPersonnel_tmpl5_UsrPFRFID1_grdPFRFID');
    this.inActiveCheckBox = page.locator('#tabPersonnel_tmpl5_UsrPFRFID1_chkInactive');
    this.inActiveDateEdit = page.locator('#tabPersonnel_tmpl5_UsrPFRFID1_txtInactive');
  }

  async enterAtRFIDTag(): Promise<void> {
    // uIMapPersonnel.personnelEntry.rFIDTab.uIRFIDTagEdit.sendKeys(BaseData.getPersonnelModuleValue("RFIDTag"));
  }

  async enterAtNotes(): Promise<void> {
    // uIMapPersonnel.personnelEntry.rFIDTab.uINotesEdit.sendKeys(BaseData.getPersonnelModuleValue("Notes"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapPersonnel.personnelEntry.rFIDTab.uIAddButton.click();
  }

  async verifyAtRFIDTagInGrid(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapPersonnel.personnelEntry.rFIDTab.uIRFIDGrid, BaseData.getPersonnelModuleValue("RFIDTag"),
    // "RFID Tag");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("RFIDTag"), gridCell.getText());
  }

  async deleteAtRFIDInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerTextExactRow(uIMapPersonnel.personnelEntry.rFIDTab.uIRFIDGrid, BaseData.getPersonnelModuleValue("RFIDTag"));
    // popup.confirm.yes();
  }

  async verifyGridCountIsZero(): Promise<void> {
    // int gridTableRowsCount = objectIdentification.manualIdentify.getGridTableRowsCount(uIMapPersonnel.personnelEntry.rFIDTab.uIRFIDGrid);
    // verify.ExpectedIntergerValueIsEqualToActual(gridTableRowsCount, 0);
  }

  async verifyAddButtonIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.rFIDTab.uIAddButton.isDisplayed()==true);
  }

  async enterAtRFIDTag(JsonKeyIndex: number): Promise<void> {
    // uIMapPersonnel.personnelEntry.rFIDTab.uIRFIDTagEdit.sendKeys(BaseData.getPersonnelModuleValue("RFID"+JsonKeyIndex));
  }

  async enterAtNotes(JsonKeyIndex: number): Promise<void> {
    // uIMapPersonnel.personnelEntry.rFIDTab.uINotesEdit.sendKeys(BaseData.getPersonnelModuleValue("Notes"+JsonKeyIndex));
  }

  async clickInActiveCheckBox(): Promise<void> {
    // uIMapPersonnel.personnelEntry.rFIDTab.uIInActiveCheckBox.click();
  }

  async VerifyInActiveDateAsCurrentDate(): Promise<void> {
    // String InactiveDate = uIMapPersonnel.personnelEntry.rFIDTab.uIInActiveDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(InactiveDate, Randomized.getCurrentDate());
  }

  async VerifyAtRFIDByNotesInGrid(JsonKeyIndex: number): Promise<void> {
    // String RFID = objectIdentification.manualIdentify.getGridCell( uIMapPersonnel.personnelEntry.rFIDTab.uIRFIDGrid, BaseData.getPersonnelModuleValue("Notes"+JsonKeyIndex), "RFID Tag").getText();
    // verify.ExpectedPropertyValueIsEqual(RFID, BaseData.getPersonnelModuleValue("RFID"+JsonKeyIndex));
  }

  async VerifyAtInActiveRowColorByRFID(JsonKeyIndex: number): Promise<void> {
    // String cssValue = objectIdentification.manualIdentify.getGridRowByCellInnerText(uIMapPersonnel.personnelEntry.rFIDTab.uIRFIDGrid, BaseData.getPersonnelModuleValue("RFID"+JsonKeyIndex)).getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(cssValue, BaseData.getPersonnelModuleValue("InactiveGreyColor"));
  }

  async verify1060InvalidSSNoAcknowledgePoPUp(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1060) Invalid SS No");
  }

  async verify2531EnterPFcodeAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(2531) Enter PF Code");
  }

  async verify1031LastNameIsMandatoryAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1031) Last Name is mandatory");
  }

  async verify1032FirstNameIsMandatoryAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1032) First Name is mandatory");
  }

  async verifyLastNameIsDisabled(): Promise<void> {
    // String attribute = uIMapPersonnel.personnelEntry.uILastNameEdit.getAttribute("class");
    // System.out.println(attribute);
    // verify.ExpectedPropertyValueIsEqual(attribute, "textboxInactive");
  }

  async verifyFirstNameIsDisabled(): Promise<void> {
    // String attribute = uIMapPersonnel.personnelEntry.uIFirstNameEdit.getAttribute("class");
    // System.out.println(attribute);
    // verify.ExpectedPropertyValueIsEqual(attribute, "textboxInactive");
  }

  async verifyPFCodeIsDisabled(): Promise<void> {
    // String attribute = uIMapPersonnel.personnelEntry.uIPFCodeEdit.getAttribute("class");
    // System.out.println(attribute);
    // verify.ExpectedPropertyValueIsEqual(attribute, "textboxInactive");
  }

  async clickLockedButton(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uILockedButton.click();
  }

  async verifyLockedCheckBoxIsUnChecked(): Promise<void> {
    // boolean selected = uIMapPersonnel.personnelEntry.uIPFCodeEdit.isSelected();
    // verify.ExpectedValueIsFalse(selected);
  }

  async verifyLockedbuttonIsNotDisplayed(): Promise<void> {
    // boolean controlExist = objectIdentification.manualIdentify.controlExist(uIMapPersonnel.personnelEntry.uILockedButton);
    // verify.ExpectedValueIsFalse(controlExist);
  }

  async verify3230AcknlowledgePopUp(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(3230) Warning â€“ Cannot assign multiple divisions to a single section/battalion. Please re-enter.");
  }

  async verifyAtEmployeeNumber(): Promise<void> {
    // String EmployeeNumber = uIMapPersonnel.personnelEntry.uIEmployeeNumberEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(EmployeeNumber, BaseData.getPersonnelModuleValue("EmployeeNumber"));
  }

  async verifySaveIconIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapPersonnel.personnelEntry.uISaveButton.isEnabled(),
    // "Save icon is enabled --> ");
  }

  async verifySaveIconIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.uISaveButton.isEnabled(),
    // "Save icon is disabled --> ");
  }

  async verifyAtBadge(): Promise<void> {
    // String Badge = uIMapPersonnel.personnelEntry.uIBadgeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(Badge, BaseData.getPersonnelModuleValue("Badge"));
  }

  async verify6071PasswordHasBeenUsedPreviouslyPopUpAcknowledgeNotArising(): Promise<void> {
    // popup.acknowledge.verifyAcknowledgeWindowNotOpened("(6071) The password has been used previously and cannot be used again at this "
    // + "time based on the number set in System Parameter (4337)");
  }

  async verifySaveConfirmPopUpIsArisedAndAccept(): Promise<void> {
    // boolean alertsPresentConditions = objectIdentification.windowHandle.alertsPresentConditions();
    // if(alertsPresentConditions == true) {
    // popup.confirm.yesWithExpectedMessage("(3) Do You Want To Save All Of The Entered Details?");
  }

  async selectAtjuris(Jsonkeyindex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.uIJurisDropDown, BaseData.getPersonnelModuleValue("Juris"+Jsonkeyindex));
    // uIMapPersonnel.personnelEntry.uIJurisDropDown.sendKeys(Keys.TAB);
  }

  async verifySaveConfirmPopUpIsArisedAndDismiss(): Promise<void> {
    // boolean alertsPresentConditions = objectIdentification.windowHandle.alertsPresentConditions();
    // if(alertsPresentConditions == true) {
    // popup.confirm.noWithExpectedMessage("(3) Do You Want To Save All Of The Entered Details?");
  }

  async verifyAtTabIsDisplayedAndEnabledByTabName(): Promise<void> {
    // boolean displayed = Playback.driver.findElement(By.xpath("//span[text()='"+BaseData.getNamesModuleValue("TabName")+"']")).isDisplayed();
    // boolean enabled = Playback.driver.findElement(By.xpath("//span[text()='"+BaseData.getNamesModuleValue("TabName")+"']")).isEnabled();
    // verify.ExpectedValueIsTrue(displayed);
    // verify.ExpectedValueIsTrue(enabled);
  }

  async verifySecurityTabIsNotDisplayedAndEnabled(): Promise<void> {
    // boolean controlExist = objectIdentification.manualIdentify.controlExist(uIMapPersonnel.personnelEntry.uISecurityTab);
    // verify.ExpectedValueIsFalse(controlExist);
  }

  async clearPFCode(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIPFCodeEdit.click();
    // uIMapPersonnel.personnelEntry.uIPFCodeEdit.clear();
  }

  async saveAndNew(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uISaveAndNewButton.click();
    // popup.confirm.yes();
  }

  async verifyAtJuris(JsonKeyIndex: number): Promise<void> {
    // String dropDwonSelectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapPersonnel.personnelEntry.uIJurisDropDown);
    // verify.ExpectedPropertyValueIsEqual(dropDwonSelectedItem, BaseData.getPersonnelModuleValue("Juris"+JsonKeyIndex));
  }

  async clickAboutMeTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIAboutMeTab.click();
  }

}

export class AboutMeTabPage {
  readonly page: Page;
  readonly aboutMeEdit: Locator;
  readonly hobbiesEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.aboutMeEdit = page.locator('#tabPersonnel_tmpl13_userAboutMe1_txtAboutMe');
    this.hobbiesEdit = page.locator('#tabPersonnel_tmpl13_userAboutMe1_txtHobbies');
  }

  async enterAboutMe(): Promise<void> {
    // uIMapPersonnel.personnelEntry.aboutMeTab.uIAboutMeEdit.click();
    // uIMapPersonnel.personnelEntry.aboutMeTab.uIAboutMeEdit.sendKeys(Randomized.randomString(1000));
  }

  async enterHobbies(): Promise<void> {
    // uIMapPersonnel.personnelEntry.aboutMeTab.uIHobbiesEdit.click();
    // uIMapPersonnel.personnelEntry.aboutMeTab.uIHobbiesEdit.sendKeys(Randomized.randomString(1000));
  }

  async verifyAboutMeIsNotNull(): Promise<void> {
    // verify.ExpectedValueIsTrue(!(uIMapPersonnel.personnelEntry.aboutMeTab.uIAboutMeEdit.getText().isBlank()));
  }

  async verifyHobbiesIsNotNull(): Promise<void> {
    // verify.ExpectedValueIsTrue(!(uIMapPersonnel.personnelEntry.aboutMeTab.uIHobbiesEdit.getText().isBlank()));
  }

  async clickSaveAndClose(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uISaveAndCloseButton.click();
  }

  async verify6040DataExistInRoleAssignMentAcknowledge(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(6040) Data exists in Role Assignment,You must Add or Clear");
  }

  async enterAtLastName(JsonkeyIndex: number): Promise<void> {
    // uIMapPersonnel.personnelEntry.uILastNameEdit.sendKeys(BaseData.getPersonnelModuleValue("LastName"+JsonkeyIndex));
    // uIMapPersonnel.personnelEntry.uILastNameEdit.sendKeys(Keys.TAB);
  }

  async enterAtFirstName(JsonkeyIndex: number): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIFirstNameEdit.sendKeys(BaseData.getPersonnelModuleValue("FirstName"+JsonkeyIndex));
    // uIMapPersonnel.personnelEntry.uIFirstNameEdit.sendKeys(Keys.TAB);
  }

  async verifyFireCheckBoxIsSelected(): Promise<void> {
    // boolean selected = uIMapPersonnel.personnelEntry.uIFireCheckBox.isSelected();
    // verify.ExpectedValueIsTrue(selected);
  }

  async verifyFireCheckBoxIsDisabled(): Promise<void> {
    // boolean enabled = uIMapPersonnel.personnelEntry.uIFireCheckBox.isEnabled();
    // verify.ExpectedValueIsFalse(enabled);
  }

  async verifySaveAndCloseIconIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapPersonnel.personnelEntry.uISaveAndCloseButton.isEnabled(),
    // "Save icon is enabled --> ");
  }

  async verifySaveAndNewIconIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapPersonnel.personnelEntry.uISaveAndNewButton.isEnabled(),
    // "Save icon is enabled --> ");
  }

  async verifyUserNameAlreadyExist(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1013) User Name already exists");
  }

  async verifyAtLastName(JsonKeyIndex: number): Promise<void> {
    // String LastName = uIMapPersonnel.personnelEntry.uILastNameEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(LastName, BaseData.getPersonnelModuleValue("LastName"+JsonKeyIndex));
  }

  async verifyAtFirstName(JsonKeyIndex: number): Promise<void> {
    // String FirstName = uIMapPersonnel.personnelEntry.uIFirstNameEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(FirstName, BaseData.getPersonnelModuleValue("FirstName"+JsonKeyIndex));
  }

  async verifyAtMiddleName(JsonKeyIndex: number): Promise<void> {
    // String MiddleName = uIMapPersonnel.personnelEntry.uIMiddleNameEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(MiddleName, BaseData.getPersonnelModuleValue("MiddleName"+JsonKeyIndex));
  }

  async verifyAtSuffix(JsonKeyIndex: number): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapPersonnel.personnelEntry.uISuffixDropdown);
    // verify.ExpectedPropertyValueIsEqual(dropDownSelectedItem, BaseData.getPersonnelModuleValue("Suffix"+JsonKeyIndex));
  }

  async verifyAtAddress(JsonKeyIndex: number): Promise<void> {
    // String Address = uIMapPersonnel.personnelEntry.uIAddressEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(Address, BaseData.getPersonnelModuleValue("Address"+JsonKeyIndex));
  }

  async enterAtAddress(JsonKeyIndex: number): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIAddressEdit.sendKeys(BaseData.getPersonnelModuleValue("Address"+JsonKeyIndex));
  }

  async enterAtCity(JsonKeyIndex: number): Promise<void> {
    // uIMapPersonnel.personnelEntry.uICSZCityEdit.sendKeys(BaseData.getPersonnelModuleValue("City"+JsonKeyIndex));
  }

  async verifyAtCity(JsonKeyIndex: number): Promise<void> {
    // String city = uIMapPersonnel.personnelEntry.uICSZCityEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(city, BaseData.getPersonnelModuleValue("City"+JsonKeyIndex));
  }

  async enterAtZip(JsonKeyIndex: number): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIZipEdit.sendKeys(BaseData.getPersonnelModuleValue("Zip"+JsonKeyIndex));
  }

  async verifyAtzip(JsonKeyIndex: number): Promise<void> {
    // String zip = uIMapPersonnel.personnelEntry.uIZipEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(zip, BaseData.getPersonnelModuleValue("Zip"+JsonKeyIndex));
  }

  async selectAtState(JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.uICSZStateDropDown, BaseData.getPersonnelModuleValue("State"+JsonKeyIndex));
  }

  async verifyAtState(JsonKeyIndex: number): Promise<void> {
    // String State = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapPersonnel.personnelEntry.uICSZStateDropDown);
    // verify.ExpectedPropertyValueIsEqual(State,  BaseData.getPersonnelModuleValue("State"+JsonKeyIndex));
  }

  async clearLastName(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uILastNameEdit.clear();
  }

  async clearFirstName(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIFirstNameEdit.clear();
  }

  async clearMiddleName(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIMiddleNameEdit.clear();
  }

  async clearAddress(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIAddressEdit.clear();
  }

  async clearEmployeeNumber(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIEmployeeNumberEdit.clear();
  }

  async enterAtEmployeeNumber(JsonKeyIndex: number): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIEmployeeNumberEdit.clear();
    // uIMapPersonnel.personnelEntry.uIEmployeeNumberEdit.sendKeys(BaseData.getPersonnelModuleValue("EmployeeNumber"+JsonKeyIndex));
  }

  async enterAtBadge(JsonKeyIndex: number): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIBadgeEdit.clear();
    // uIMapPersonnel.personnelEntry.uIBadgeEdit.sendKeys(BaseData.getPersonnelModuleValue("Badge"+JsonKeyIndex));
  }

  async selectAtCSZ(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uICSZLookUpIcon.click();
    // popup.switchToCodedSearch();
    // popup.kPICodedLookup.clickClearIcon();
    // popup.kPICodedLookup.selectAtDescription();
  }

  async enterAtMiddleName(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIMiddleNameEdit.sendKeys(BaseData.getPersonnelModuleValue("MiddleName"));
  }

  async selectAtSuffix(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.uISuffixDropdown, BaseData.getPersonnelModuleValue("Suffix"));
  }

  async verifyDeletePopupAndClickOk(): Promise<void> {
    // popup.confirm.yesWithContainsMessage("(4) Do you really want to delete?");
  }

}

export class AssignmentHistoryScreenPage {
  readonly page: Page;
  readonly pFCodeEdit: Locator;
  readonly assignmentHistoryTable: Locator;
  readonly whatsNewLogo: Locator;
  readonly printIcon: Locator;
  readonly dataTypeInputRadDropDown: Locator;
  readonly dataTypeRadDropDown: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pFCodeEdit = page.locator('#lupPF_CodeValue');
    this.assignmentHistoryTable = page.locator('#grdAssignmentHst');
    this.whatsNewLogo = page.locator('#imgWhatsNew');
    this.printIcon = page.locator('#cmdPrint');
    this.dataTypeInputRadDropDown = page.locator('#cddType_Input');
    this.dataTypeRadDropDown = page.locator('#cddType_DropDown');
    this.searchButton = page.locator('#CmdSearch');
  }

  async verifyAtPFCode(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("PFCode"),
    // uIMapPersonnel.assignmentHistoryScreen.uIPFCodeEdit.getAttribute("value"));
  }

  async clickChangedToColumnName(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridHeaderColumnName(
    // uIMapPersonnel.assignmentHistoryScreen.uIAssignmentHistoryTable, "Changed To");
  }

  async verifyAscendingOrder(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Section"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapPersonnel.assignmentHistoryScreen.uIAssignmentHistoryTable, "Changed To", rowIndex));
  }

  async verifyDescendingOrder(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("03/22/2018", objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapPersonnel.assignmentHistoryScreen.uIAssignmentHistoryTable, "Changed To", rowIndex));
  }

  async closeScreen(): Promise<void> {
    // uIMapPersonnel.assignmentHistoryScreen.driver.close();
  }

  async verifyEffectiveDate(): Promise<void> {
    // // verify.ExpectedPropertyValueIsEqual(Randomized.GetCurrentDate("MM/dd/yy") + "
    // // " + Randomized.GetCurrentTime("HH:MM"),
    // // objectIdentification.manualIdentify.GetGridCellInnerText
    // // (uIMapPersonnel.assignmentHistoryScreen.uIAssignmentHistoryTable, "Effective
    // // Date", rowIndex));
    // Playback.controlReadyThreadWait();
    // List<String> officerValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapPersonnel.assignmentHistoryScreen.uIAssignmentHistoryTable, "Effective Date");
    // for(String date:officerValues) {
    // verify.ExpectedValueIsTrue(date
    // .contains(Randomized.getCurrentDate("MM/dd/yy")));
  }

  async verifyAtPFNo(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("PFNo"),
    // uIMapPersonnel.assignmentHistoryScreen.uIPFCodeEdit.getAttribute("value"));
  }

  async verifyChangedToDateInGrid(): Promise<void> {
    // String date = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.assignmentHistoryScreen.uIAssignmentHistoryTable, "AssignDttm","Changed To").getText();
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate(), date);
  }

  async verifyAtChangedToPFTypeInGrid(): Promise<void> {
    // String pFType = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.assignmentHistoryScreen.uIAssignmentHistoryTable, "PFType","Changed To").getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Type"), pFType);
  }

  async VerifyAtChangedToRankInGrid(): Promise<void> {
    // String rank = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.assignmentHistoryScreen.uIAssignmentHistoryTable, "Rank","Changed To").getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("TitleRank"), rank);
  }

  async VerifyAtChangedToDivisionInGrid(): Promise<void> {
    // String division = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.assignmentHistoryScreen.uIAssignmentHistoryTable, "Division","Changed To").getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Division"), division);
  }

  async VerifyAtChangedToSectionsInGrid(): Promise<void> {
    // String section = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.assignmentHistoryScreen.uIAssignmentHistoryTable, "Sections","Changed To").getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Section"), section);
  }

  async verifyWHATSNEWLogoIsAppeared(): Promise<void> {
    // boolean displayed = uIMapPersonnel.assignmentHistoryScreen.uIWhatsNewLogo.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapPersonnel.assignmentHistoryScreen.uIPrintIcon.click();
  }

  async verifyAtChangedFromByChnagedTo(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.assignmentHistoryScreen.uIAssignmentHistoryTable, BaseData.getPersonnelModuleValue("ChangedTo"), "Changed From").getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getPersonnelModuleValue("ChangedFrom"));
  }

  async getEffectiveTimeByChangedFrom(): Promise<string> {
    // String ChangedFromEffectiveTime = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.assignmentHistoryScreen.uIAssignmentHistoryTable, BaseData.getPersonnelModuleValue("ChangedFrom"), "Effective Date").getText();
    // String[] split = ChangedFromEffectiveTime.split(" ");
    // return split[1];
  }

  async getEffectiveTimeByChangedTo(): Promise<string> {
    // String ChangedToEffectiveTime = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.assignmentHistoryScreen.uIAssignmentHistoryTable, BaseData.getPersonnelModuleValue("ChangedTo"), "Effective Date").getText();
    // String[] split = ChangedToEffectiveTime.split(" ");
    // return split[1];
  }

  async verifyTheTimedifferenceBetweenTwoEffectiveTime(ChangedFromEffectiveTime: string, ChangedToEffectiveTime: string): Promise<void> {
    // int getTheTimeDifferenceBetweenTwoTime = Randomized.GetTheTimeDifferenceBetweenTwoTime(ChangedFromEffectiveTime,ChangedToEffectiveTime);
    // verify.ExpectedValueIsTrue(getTheTimeDifferenceBetweenTwoTime>=1);
  }

  async VerifyAtDataTypeByChangedToInGrid(i: number): Promise<void> {
    // String DataType = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.assignmentHistoryScreen.uIAssignmentHistoryTable, BaseData.getPersonnelModuleValue("ChangedTo"+i),"Data Type").getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("DataType"+i), DataType);
  }

  async getEffectiveDate(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapPersonnel.assignmentHistoryScreen.uIAssignmentHistoryTable, BaseData.getPersonnelModuleValue("EffectiveDate"));
    // List<String> dates = gridTableColumnValues.stream()
    // .map(dateTime -> dateTime.split(" ")[0])
    // .collect(Collectors.toList());
    // return dates;
  }

  async selectAtDataType(JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect(uIMapPersonnel.assignmentHistoryScreen.uIDataTypeRadDropDown, BaseData.getPersonnelModuleValue("DataType"+JsonKeyIndex));
  }

  async clickDataTypeDropDown(): Promise<void> {
    // uIMapPersonnel.assignmentHistoryScreen.uIDataTypeInputRadDropDown.click();
  }

  async verifyAtDataTypeInGridInGrid(JsonKeyIndex: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapPersonnel.assignmentHistoryScreen.uIAssignmentHistoryTable, BaseData.getPersonnelModuleValue("ColumnName"));
    // for(String values: gridTableColumnValues) {
    // verify.ExpectedPropertyValueIsEqual(values, BaseData.getPersonnelModuleValue("DataType"+JsonKeyIndex));
  }

  async clickSearch(): Promise<void> {
    // uIMapPersonnel.assignmentHistoryScreen.uISearchButton.click();
  }

  async verifyAtEffectiveDateWithChangedTo(JsonKeyIndex: number): Promise<void> {
    // String DataType = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.assignmentHistoryScreen.uIAssignmentHistoryTable, BaseData.getPersonnelModuleValue("ChangedTo"+JsonKeyIndex),"Effective Date").getText();
    // verify.ExpectedPropertyValueIsEqual(Randomized.getFutureDate(4,"MM/dd/yy"), DataType.substring(0, 8));
  }

  async verifyAtEffectiveDateWithChangedTo(JsonKeyIndex: number, Date: string): Promise<void> {
    // String DataType = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.assignmentHistoryScreen.uIAssignmentHistoryTable, BaseData.getPersonnelModuleValue("ChangedTo"+JsonKeyIndex),"Effective Date").getText();
    // verify.ExpectedPropertyValueIsEqual(Date, DataType.substring(0, 8));
  }

}

export class PersonnelLockDetailsScreenPage {
  readonly page: Page;
  readonly lockDetailsResultTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.lockDetailsResultTable = page.locator('#grdLockDetails');
  }

  async verifyAtChangePassword(JsonIndex: number): Promise<void> {
    // ArrayList<String > val = new ArrayList<>();
    // String personnelModuleValue = BaseData.getPersonnelModuleValue("EnteredPassword"+JsonIndex);
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapPersonnel.personnelLockDetailsScreen.uILockDetailsResultTable, "Entered Password");
    // for(String  value :gridTableColumnValues) {
    // String attribute = Playback.driver.findElement(By.xpath("//td[text()='"+value+"']")).getAttribute("title");
    // val.add(attribute);
    // verify.ExpectedValueIsTrue(val.contains(personnelModuleValue));
  }

}

export class PersonnelEntryWorkRecordTabPage {
  readonly page: Page;
  readonly workHistoryTab: Locator;
  readonly injuryReportTab: Locator;
  readonly workRecordResultTable: Locator;
  readonly medicalHistoryTab: Locator;
  readonly performanceEvaluationsTab: Locator;
  readonly cADQAEvaluationsTab: Locator;
  readonly meaningfulReviewTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.workHistoryTab = page.locator("//span[contains(text(),\'Work History\')]");
    this.injuryReportTab = page.locator("//span[contains(text(),\'Injury Report\')]");
    this.workRecordResultTable = page.locator('#tabWorkRecord_tmpl2_usrPersonnelInjury1_grdInjury_eppool');
    this.medicalHistoryTab = page.locator("//span[contains(text(),\'Medical History\')]");
    this.performanceEvaluationsTab = page.locator("//span[contains(text(),\'Performance Evaluations\')]");
    this.cADQAEvaluationsTab = page.locator("//span[contains(text(),\'CAD QA Evaluations\')]");
    this.meaningfulReviewTab = page.locator("//span[contains(text(),\'Meaningful Review\')]");
  }

  async clickWorkHistoryTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.uIWorkHistoryTab.click();
    // Playback.controlReadyThreadWait();
  }

  async clickInjuryReportTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.uIInjuryReportTab.click();
    // Playback.controlReadyThreadWait();
  }

  async clickAddNewButton(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.workHistoryTab.uIAddNewButton.click();
  }

  async clickMedicalHistoryTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.uIMedicalHistoryTab.click();
    // Playback.controlReadyThreadWait();
  }

  async verifyCADQAEvaluationsTabIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.uICADQAEvaluationsTab.isDisplayed());
  }

  async clickCADQAEvaluationsTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.uICADQAEvaluationsTab.click();
  }

  async clickMeaningfulReviewTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.uIMeaningfulReviewTab.click();
  }

  async clickPerformanceEvaluationsTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.uIPerformanceEvaluationsTab.click();
  }

}

export class CADQAEvaluationsTabPage {
  readonly page: Page;
  readonly cADQAEvaluationTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cADQAEvaluationTable = page.locator('#tabWorkRecord_tmpl6_usrCADQAEvaluations_grdPersonnelEvaluation');
  }

  async verifyAtEvaluationFormInGrid(): Promise<void> {
    // List<String> forms = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.cADQAEvaluationsTab.uICADQAEvaluationTable, "Evaluation Form");
    // verify.ExpectedValueIsTrue(forms.contains(BaseData.getPersonnelModuleValue("EvaluationForm")));
  }

  async selectAtEvaluationFormInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.cADQAEvaluationsTab.uICADQAEvaluationTable, BaseData.getPersonnelModuleValue("EvaluationForm"));
  }

}

export class MeaningfulReviewTabPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly meaningfulReviewGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator('#tabWorkRecord_tmpl5_usrMeaningfulReview_cmdAddnew');
    this.meaningfulReviewGrid = page.locator('#tabWorkRecord_tmpl5_usrMeaningfulReview_grdMeaningfulReviewSrch');
  }

  async clickAddNewButton(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.meaningfulReviewTab.uIAddNewButton.click();
  }

  async verifyAtReviewTypeByUOF(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.meaningfulReviewTab.uIMeaningfulReviewGrid,
    // BaseData.getPersonnelModuleValue("UOFNo"), "Review Type").getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getPersonnelModuleValue("ReviewType"));
  }

  async verifyAtUOFByCaseNo(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.meaningfulReviewTab.uIMeaningfulReviewGrid,
    // BaseData.getPersonnelModuleValue("CaseNo"), "UOF#").getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getPersonnelModuleValue("UOFNo"));
  }

}

export class PerformanceEvaluationTabPage {
  readonly page: Page;
  readonly perfomanceEvaluationsGrid: Locator;
  readonly addNew: Locator;

  constructor(page: Page) {
    this.page = page;
    this.perfomanceEvaluationsGrid = page.locator('#tabWorkRecord_tmpl4_usrPersonnelEvaluation1_grdPerformanceReviewSrch');
    this.addNew = page.locator('#tabWorkRecord_tmpl4_usrPersonnelEvaluation1_cmdComments');
  }

  async verifyAtPurpose(): Promise<void> {
    // String  Purpose = objectIdentification.manualIdentify.getGridRowByCellInnerText(uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.performanceEvaluationTab.uIPerfomanceEvaluationsGrid, BaseData.getPersonnelModuleValue("Purpose")).getText();
    // verify.ExpectedValueIsTrue(Purpose.contains(BaseData.getPersonnelModuleValue("Purpose")));
  }

  async clickAddNew(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.performanceEvaluationTab.uIAddNew.click();
  }

  async verifyAtRowCount(): Promise<void> {
    // String count =  BaseData.getPersonnelModuleValue("count");
    // int dropDownOptionsCount = objectIdentification.manualIdentify.getGridTableRowsCount(uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.performanceEvaluationTab.uIPerfomanceEvaluationsGrid);
    // verify.ExpectedIntergerValueIsEqualToActual(dropDownOptionsCount, Integer.parseInt(count));
  }

  async clickAtPurposeIngrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.performanceEvaluationTab.uIPerfomanceEvaluationsGrid, BaseData.getPersonnelModuleValue("Purpose"));
  }

}

export class InjuryReportTabPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly injuryReportTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator('#tabWorkRecord_tmpl2_usrPersonnelInjury1_cmdComments');
    this.injuryReportTable = page.locator('#tabWorkRecord_tmpl2_usrPersonnelInjury1_grdInjury');
  }

  async clickAddNewButton(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.injuryReportTab.uIAddNewButton.click();
  }

  async verifyAtInjuryTypeInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("InjuryType"),
    // objectIdentification.manualIdentify.getGridCell(
    // uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.injuryReportTab.uIInjuryReportTable,
    // "Injury Type", rowIndex).getText());
  }

  async verifyAtNatureInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Nature"),
    // objectIdentification.manualIdentify.getGridCell(
    // uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.injuryReportTab.uIInjuryReportTable,
    // "Nature", rowIndex).getText());
  }

  async selectRowByAtNature(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.injuryReportTab.uIInjuryReportTable,
    // BaseData.getPersonnelModuleValue("Nature"));
  }

  async selectRowByIndex(index: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridTableRow(
    // uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.injuryReportTab.uIInjuryReportTable,
    // index);
    // //			objectIdentification.manualIdentify. selectGridRowByCellInnerText(
    // //					uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.injuryReportTab.uIInjuryReportTable,
    // //					BaseData.getPersonnelModuleValue("InjuryType"), index);
  }

  async verifyRowCountAsZero(): Promise<void> {
    // int rowsCount = objectIdentification.manualIdentify.getGridTableRowsCount(
    // uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.injuryReportTab.uIInjuryReportTable);
    // verify.ExpectedIntergerValueIsEqualToActual(rowsCount, 0);
  }

}

export class WorkHistoryTabPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly workHistoryTabTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator('#tabWorkRecord_tmpl0_usrPersonnelComments1_cmdComments');
    this.workHistoryTabTable = page.locator('#tabWorkRecord_tmpl0_usrPersonnelComments1_grdPersonnelcmtSrch');
  }

  async clickAddNew(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.workHistoryTab.uIAddNewButton.click();
  }

  async clickAtCategoryInGrid(rowIndex: number): Promise<void> {
    // // objectIdentification.manualIdentify.SelectGridRowByCellInnerText(uIMapPersonnel.personnelEntry.
    // // PersonnelEntryWorkRecordTab.workHistoryTab.uIWorkHistoryTabTable,
    // // BaseData.getPersonnelModuleValue("Category"));
    // objectIdentification.manualIdentify.selectGridTableRow(
    // uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.workHistoryTab.uIWorkHistoryTabTable,
    // rowIndex);
  }

  async selectRowByIndex(rowIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridTableRow(
    // uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.workHistoryTab.uIWorkHistoryTabTable,
    // rowIndex);
  }

  async verifyRowCountAsZero(): Promise<void> {
    // int rowsCount = objectIdentification.manualIdentify.getGridTableRowsCount(
    // uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.workHistoryTab.uIWorkHistoryTabTable);
    // verify.ExpectedIntergerValueIsEqualToActual(rowsCount, 0);
  }

  async verifyAddNewButtonIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.workHistoryTab.uIAddNewButton
    // .isDisplayed()); // changed by Abi
  }

  async verifyAtPeriodFromByCategory(): Promise<void> {
    // String PeriodFrom = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.workHistoryTab.uIWorkHistoryTabTable, BaseData.getPersonnelModuleValue("Category"), "Period From").getText();
    // verify.ExpectedPropertyValueIsEqual(PeriodFrom, BaseData.getPersonnelModuleValue("PeriodFrom"));
  }

  async verifyAtPeriodToByCategory(): Promise<void> {
    // String PeriodTo = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.workHistoryTab.uIWorkHistoryTabTable, BaseData.getPersonnelModuleValue("Category"), "Period To").getText();
    // verify.ExpectedPropertyValueIsEqual(PeriodTo, BaseData.getPersonnelModuleValue("PeriodTo"));
  }

  async verifyAtCodeWithCategory(): Promise<void> {
    // String Code = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.workHistoryTab.uIWorkHistoryTabTable, BaseData.getPersonnelModuleValue("Category"), "Code").getText();
    // verify.ExpectedPropertyValueIsEqual(Code, BaseData.getPersonnelModuleValue("Code"));
  }

  async verifyAtSubjectByCode(): Promise<void> {
    // String Subject = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.workHistoryTab.uIWorkHistoryTabTable, BaseData.getPersonnelModuleValue("Category"), "Subject").getText();
    // verify.ExpectedPropertyValueIsEqual(Subject, BaseData.getPersonnelModuleValue("Subject"));
  }

  async verifyAtPeriodFromByCategoryCurrentDate(): Promise<void> {
    // String PeriodFrom = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.workHistoryTab.uIWorkHistoryTabTable, BaseData.getPersonnelModuleValue("Category"), "Period From").getText();
    // verify.ExpectedPropertyValueIsEqual(PeriodFrom, Randomized.getCurrentDate());
  }

  async verifyAtPeriodToByCategoryCurrentDate(): Promise<void> {
    // String PeriodTo = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.workHistoryTab.uIWorkHistoryTabTable, BaseData.getPersonnelModuleValue("Category"), "Period To").getText();
    // verify.ExpectedPropertyValueIsEqual(PeriodTo,Randomized.getCurrentDate());
  }

}

export class MedicalHistoryTabPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly medicalHistoryTabTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator('#tabWorkRecord_tmpl3_usrPersonnelMedicalHist1_cmdComments');
    this.medicalHistoryTabTable = page.locator('#tabWorkRecord_tmpl3_usrPersonnelMedicalHist1_grdMedicalHist');
  }

  async clickAtMedicalCode(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.medicalHistoryTab.uIMedicalHistoryTabTable,
    // BaseData.getPersonnelModuleValue("MedicalCode"));
  }

  async verifyAtMedicalCodeWithNotes(): Promise<void> {
    // String MedicalCode = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.medicalHistoryTab.uIMedicalHistoryTabTable, BaseData.getPersonnelModuleValue("Notes"), "Medical Code").getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("MedicalCode"),MedicalCode );
  }

  async clickAddNew(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.medicalHistoryTab.uIAddNewButton.click();
  }

  async verifyAtRowCount(): Promise<void> {
    // String count =  BaseData.getPersonnelModuleValue("count");
    // int dropDownOptionsCount = objectIdentification.manualIdentify.getGridTableRowsCount(uIMapPersonnel.personnelEntry.personnelEntryWorkRecordTab.medicalHistoryTab.uIMedicalHistoryTabTable);
    // verify.ExpectedIntergerValueIsEqualToActual(dropDownOptionsCount, Integer.parseInt(count));
  }

}

export class PersonnelEntryPreferencesTabPage {
  readonly page: Page;
  readonly logoutAcknowledgeRequirdComBoBox: Locator;
  readonly showPFImageComBoBox: Locator;
  readonly homeLinkAndWhiteBoardDisplayedComBoBox: Locator;
  readonly generateConfirmationMessageComBoBox: Locator;
  readonly defaultActivityModeComBoBox: Locator;
  readonly defaultJurisDropDown: Locator;
  readonly debugCheckBox: Locator;
  readonly proQAMedicalDeFaultCFSForDisciplineLaunchingEdit: Locator;
  readonly internalSave: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutAcknowledgeRequirdComBoBox = page.locator('#tabPersonnel_tmpl12_UsrPreference1_param_10_Dyn_DropDown');
    this.showPFImageComBoBox = page.locator('#tabPersonnel_tmpl12_UsrPreference1_param_201_Dyn_DropDown');
    this.homeLinkAndWhiteBoardDisplayedComBoBox = page.locator('#tabPersonnel_tmpl12_UsrPreference1_param_64_Dyn_DropDown');
    this.generateConfirmationMessageComBoBox = page.locator('#tabPersonnel_tmpl12_UsrPreference1_param_20_Dyn_DropDown');
    this.defaultActivityModeComBoBox = page.locator('#tabPersonnel_tmpl12_UsrPreference1_param_62_Dyn_DropDown');
    this.defaultJurisDropDown = page.locator('#tabPersonnel_tmpl12_UsrPreference1_lstJuris');
    this.debugCheckBox = page.locator('#tabPersonnel_tmpl12_UsrPreference1_chkIsDebug');
    this.proQAMedicalDeFaultCFSForDisciplineLaunchingEdit = page.locator('#tabPersonnel_tmpl12_UsrPreference1_param_2619_Dyn');
    this.internalSave = page.locator('#tabPersonnel_tmpl12_UsrPreference1_cmdSave');
  }

  async selectLogOutAcknowledgeAsTrue(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryPreferencesTab.uILogoutAcknowledgeRequirdComBoBox,
    // "True");
  }

  async selectShowLoginPFAsTrue(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryPreferencesTab.uIShowPFImageComBoBox, "True");
  }

  async selectHomeLinkAndWhiteBoardAsBoth(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryPreferencesTab.uIHomeLinkAndWhiteBoardDisplayedComBoBox,
    // "Both");
  }

  async selectLogOutAcknowledgeAsFalse(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryPreferencesTab.uILogoutAcknowledgeRequirdComBoBox,
    // "False");
  }

  async selectShowLoginPFAsFalse(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryPreferencesTab.uIShowPFImageComBoBox, "False");
  }

  async selectConfirmationMessageInScreenAsTrue(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryPreferencesTab.uIGenerateConfirmationMessageComBoBox,
    // "True");
  }

  async setDefaultQuickActivityModeForPoliceRMS(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryPreferencesTab.uIDefaultActivityModeComBoBox,
    // "Police RMS");
  }

  async selectConfirmationMessageInScreenAsFalse(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryPreferencesTab.uIGenerateConfirmationMessageComBoBox,
    // "False");
  }

  async verifyDefaultJurisIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntryPreferencesTab.uIDefaultJurisDropDown.isDisplayed());
  }

  async clickDebugCheckBox(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryPreferencesTab.uIDebugCheckBox.click();
  }

  async selectAtDefaultJuris(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryPreferencesTab.uIDefaultJurisDropDown,
    // BaseData.getEmploymentApplicantsModuleValue("Juris1"));
  }

  async selectAtDefaultJurisAsPX(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryPreferencesTab.uIDefaultJurisDropDown,
    // "PX - ProPhoenix");
  }

  async verifyDebugCheckBoxIsCheked(): Promise<void> {
    // boolean selected = uIMapPersonnel.personnelEntry.personnelEntryPreferencesTab.uIDebugCheckBox.isSelected();
    // verify.ExpectedValueIsTrue(selected);
  }

  async enterAtProQAMedicalDeFaultCFSForDisciplineLaunching(jsonKeyIndex: number): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryPreferencesTab.uIProQAMedicalDeFaultCFSForDisciplineLaunchingEdit.click();
    // uIMapPersonnel.personnelEntry.personnelEntryPreferencesTab.uIProQAMedicalDeFaultCFSForDisciplineLaunchingEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryPreferencesTab.uIProQAMedicalDeFaultCFSForDisciplineLaunchingEdit.sendKeys(BaseData.getPersonnelModuleValue("ProQAMedicalDeFaultCFSForDisciplineLaunching"+jsonKeyIndex));
  }

  async verifyAtProQAMedicalDeFaultCFSForDisciplineLaunching(jsonKeyIndex: number): Promise<void> {
    // String ProQAMedicalDeFaultCFSForDisciplineLaunching = uIMapPersonnel.personnelEntry.personnelEntryPreferencesTab.uIProQAMedicalDeFaultCFSForDisciplineLaunchingEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(ProQAMedicalDeFaultCFSForDisciplineLaunching, BaseData.getPersonnelModuleValue("ProQAMedicalDeFaultCFSForDisciplineLaunching"+jsonKeyIndex));
  }

  async verifySaveIconIsNotDisplayed(): Promise<void> {
    // boolean windowExist = objectIdentification.windowHandle.windowExist("uIMapPersonnel.personnelEntry.personnelEntryPreferencesTab.uIInternalSave");
    // verify.ExpectedValueIsFalse(windowExist);
  }

  async verifySaveIconIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryPreferencesTab.uIInternalSave.isDisplayed());
  }

  async selectAtDefaultQuickActivityMode(jsonIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryPreferencesTab.uIDefaultActivityModeComBoBox, BaseData.getPersonnelModuleValue("QuickActivityMode"+jsonIndex));
  }

}

export class PersonnelEntrySecurityTabPage {
  readonly page: Page;
  readonly loginUserNameEdit: Locator;
  readonly enterPasswordEdit: Locator;
  readonly confirmPasswordEdit: Locator;
  readonly saveSendEmailCheckBox: Locator;
  readonly expireDateEdit: Locator;
  readonly roleAssignmentComBoBox: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly securityTabResultTable: Locator;
  readonly resetPasswordButton: Locator;
  readonly temperoryPasswordLabel: Locator;
  readonly interalSaveButton: Locator;
  readonly allowDispatchCheckBox: Locator;
  readonly usernameMustMatchWindowsLoginLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginUserNameEdit = page.locator('#tabPersonnel_tmpl3_UsrPersonnelSecurity1_txtUserName');
    this.enterPasswordEdit = page.locator('#tabPersonnel_tmpl3_UsrPersonnelSecurity1_txtPassword');
    this.confirmPasswordEdit = page.locator('#tabPersonnel_tmpl3_UsrPersonnelSecurity1_txtPassword2');
    this.saveSendEmailCheckBox = page.locator('#tabPersonnel_tmpl3_UsrPersonnelSecurity1_chksendDtl');
    this.expireDateEdit = page.locator('#tabPersonnel_tmpl3_UsrPersonnelSecurity1_dtcExpDate_KPIDttmCtrl');
    this.roleAssignmentComBoBox = page.locator('#tabPersonnel_tmpl3_UsrPersonnelSecurity1_cddRoles_DropDown');
    this.addButton = page.locator('#tabPersonnel_tmpl3_UsrPersonnelSecurity1_imgAddRole');
    this.clearButton = page.locator('#tabPersonnel_tmpl3_UsrPersonnelSecurity1_imgClearRole');
    this.securityTabResultTable = page.locator('#tabPersonnel_tmpl3_UsrPersonnelSecurity1_grdRoles');
    this.resetPasswordButton = page.locator('#tabPersonnel_tmpl3_UsrPersonnelSecurity1_btnReset');
    this.temperoryPasswordLabel = page.locator('#tabPersonnel_tmpl3_UsrPersonnelSecurity1_lbltmppwd');
    this.interalSaveButton = page.locator('#tabPersonnel_tmpl3_UsrPersonnelSecurity1_cmdSave');
    this.allowDispatchCheckBox = page.locator('#tabPersonnel_tmpl3_UsrPersonnelSecurity1_chkIsInterface');
    this.usernameMustMatchWindowsLoginLabel = page.locator('#tabPersonnel_tmpl3_UsrPersonnelSecurity1_KPILabel9');
  }

  async selectRoleAssignment(): Promise<void> {
    // objectIdentification.randomIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIRoleAssignmentComBoBox);
  }

  async clickAddButton(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIAddButton.click();
  }

  async enterAtUserName(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uILoginUserNameEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("UserName"));
  }

  async enterPasswordAsSpace(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIEnterPasswordEdit.sendKeys(Keys.SPACE);
  }

  async enterAtPasswordWithSpace(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIEnterPasswordEdit
    // .sendKeys(Keys.SPACE + BaseData.getPersonnelModuleValue("Password") + Keys.SPACE);
    // verify.ExpectedValueIsFalse(uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIEnterPasswordEdit
    // .getAttribute("value").contains(" "), "Space Value Occurs in the Password Field");
  }

  async enterReenterAtPasswordWithSpace(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIConfirmPasswordEdit
    // .sendKeys(Keys.SPACE + BaseData.getPersonnelModuleValue("Password") + Keys.SPACE);
    // verify.ExpectedValueIsFalse(uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIConfirmPasswordEdit
    // .getAttribute("value").contains(" "), "Space Value Occurs in the Password Field");
  }

  async verifyPasswordEmpty(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIEnterPasswordEdit
    // .getAttribute("value") == "");
  }

  async verifyPasswordNotallowdSpace(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Password"),
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIEnterPasswordEdit.getAttribute("value"));
  }

  async verifyReenterPasswordNotAllowedSpace(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Password"),
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIConfirmPasswordEdit
    // .getAttribute("value"));
  }

  async selectRoleAsLocalAdmin(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIRoleAssignmentComBoBox, "Local Admin");
  }

  async selectRoleAssignmentAsWarrantAdmin(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIRoleAssignmentComBoBox, "Warrant Admin");
  }

  async verifyAtUserName(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("UserName"),
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uILoginUserNameEdit.getAttribute("value"));
  }

  async enterAtPassword(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIEnterPasswordEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("Password"));
  }

  async enterReenterAtPassword(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIConfirmPasswordEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("Password"));
  }

  async enterAtPassword2(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIEnterPasswordEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("Password2"));
  }

  async enterReenterAtPassword2(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIConfirmPasswordEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("Password2"));
  }

  async verifyPasswordFieldDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIEnterPasswordEdit.isDisplayed());
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIEnterPasswordEdit.isEnabled());
  }

  async selectAtRoleAssignment(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIRoleAssignmentComBoBox,
    // BaseData.getPersonnelModuleValue("RoleAssignment"));
  }

  async verifyUserNameFieldDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uILoginUserNameEdit.isDisplayed());
  }

  async clickResetPassword(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIResetPasswordButton.click();
  }

  async verifyResetButtonIsEnabled(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIResetPasswordButton.isEnabled();
  }

  async GetTemporaryPassword(): Promise<string> {
    // String Password = uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uITemperoryPasswordLabel
    // .getText();
    // String LastIndexPswrd = Password.substring(Password.lastIndexOf(":") + 1);
    // String TrimmedPassword = LastIndexPswrd.trim();
    // System.out.println(TrimmedPassword + "-------Trimmed");
    // return TrimmedPassword;
  }

  async verifyRoleNameInGrid(RowIndex: number): Promise<void> {
    // String Role = objectIdentification.manualIdentify
    // .getGridCell(uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uISecurityTabResultTable,
    // "Role Name", RowIndex)
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Role"), Role);
  }

  async clickInternalSave(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIInteralSaveButton.click();
  }

  async clickAllowDispatchcheckBox(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIAllowDispatchCheckBox.click();
  }

  async verifyAtRoleNameInGrid(): Promise<void> {
    // String RoleName = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uISecurityTabResultTable, BaseData.getPersonnelModuleValue("RoleName")).getText();
    // verify.ExpectedPropertyValueIsEqual(RoleName, BaseData.getPersonnelModuleValue("RoleName"));
  }

  async enterAtUserName1(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uILoginUserNameEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("UserName1"));
  }

  async selectAtRoleNameInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uISecurityTabResultTable,
    // BaseData.getPersonnelModuleValue("RoleName"));
  }

  async clickDeleteAtRoleNameInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uISecurityTabResultTable,
    // BaseData.getPersonnelModuleValue("RoleName"));
  }

  async clickDeleteColumnHeaderInGrid(): Promise<void> {
    // //				objectIdentification.manualIdentify.selectGridHeaderColumnNameWithSpan(
    // //						uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uISecurityTabResultTable, "X");
    // try {
    // WebElement uIThemeHeader = uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uISecurityTabResultTable
    // .findElement(By
    // .xpath("//table/tbody/tr[contains(@class,'Header')]//..//th//span[text()='X']"));
    // uIThemeHeader.click();
    // }catch(Exception e) {
    // System.out.println("Column Header clicked");
  }

  async selectAtRoleNameInGrid(index: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uISecurityTabResultTable,
    // BaseData.getPersonnelModuleValue("RoleName"+index));
  }

  async enterAtExpireDateAsPastDate(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIExpireDateEdit.sendKeys(Randomized.getPreviousDate(5, "MM/dd/yyyy"));
  }

  async enterAtExpireDate(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIExpireDateEdit.sendKeys(Randomized.getFutureDate(10));
  }

  async verifyPasswordFieldIsDisabled(): Promise<void> {
    // String attribute = uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIEnterPasswordEdit.getAttribute("readonly");
    // System.out.println(attribute);
  }

  async verifyUsernameMustMatchWindowsLoginLabel(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIUsernameMustMatchWindowsLoginLabel.getText(),
    // "(User name must match your windows login)");
  }

  async verifyAtUserName(JsonKeyIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("UserName"+JsonKeyIndex),
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uILoginUserNameEdit.getAttribute("value"));
  }

  async verifyReEnterPasswordFieldIsDisaplyedAndEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIConfirmPasswordEdit.isDisplayed());
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIConfirmPasswordEdit.isEnabled());
  }

  async verifyUserNameIsDisabled(): Promise<void> {
    // String attribute = uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uILoginUserNameEdit.getAttribute("readonly");
    // System.out.println(attribute);
    // //verify.ExpectedValueIsFalse();
  }

  async verifySortOrderInRoleAssignment(): Promise<void> {
    // List<String> UnSortedDropdown = objectIdentification.manualIdentify.getDropDownValues(uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIRoleAssignmentComBoBox);
    // List<String> Sorted = UnSortedDropdown.stream().sorted(String.CASE_INSENSITIVE_ORDER)
    // .collect(Collectors.toList());
    // List<String> UnSorted = objectIdentification.manualIdentify.getDropDownValues(uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIRoleAssignmentComBoBox);
    // for(int i=0 ; i<Sorted.size() ; i++) {
    // String sortedvalue = Sorted.get(i);
    // verify.ExpectedPropertyValueIsEqual(sortedvalue, UnSorted.get(i));
  }

  async clearUserName(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uILoginUserNameEdit.clear();
  }

  async verifySaveButtonIsEnabled(): Promise<void> {
    // boolean enabled = uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIInteralSaveButton.isEnabled();
    // verify.ExpectedValueIsTrue(enabled);
  }

  async enterAtPassword(JsonKeyIndex: number): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIEnterPasswordEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("Password"+JsonKeyIndex));
  }

  async enterReenterAtPassword(JsonKeyIndex: number): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uIConfirmPasswordEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("Password"+JsonKeyIndex));
  }

  async verifyAtRoleNameNotInGrid(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapPersonnel.personnelEntry.personnelEntrySecurityTab.uISecurityTabResultTable, "Role Name");
    // verify.ExpectedValueIsFalse(gridTableColumnValues.contains(BaseData.getPersonnelModuleValue("RoleName")));
  }

}

export class PersonnelEntryTimeTabPage {
  readonly page: Page;
  readonly expandAllCheckBox: Locator;
  readonly forYearComBoBox: Locator;
  readonly addNewButton: Locator;
  readonly timeTabResultTable: Locator;
  readonly timeTabHGridResultTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.expandAllCheckBox = page.locator('#chkExpandAll');
    this.forYearComBoBox = page.locator('#cddForTheYear');
    this.addNewButton = page.locator('#cmdAddNew');
    this.timeTabResultTable = page.locator('#grdPFDetails');
    this.timeTabHGridResultTable = page.locator("//div[@id=\'grdPFDetails\']//div[@id = \'grdPFDetails_ctl00\']//tbody[contains(@class, \'ig_HGridItem igg_HGridItem\')]");
  }

  async clickExpandCheckBox(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryTimeTab.uIExpandAllCheckBox.click();
  }

  async clickAddNewButton(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryTimeTab.uIAddNewButton.click();
  }

  async verifyYearAsCurrentYear(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentYear(), objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryTimeTab.uIForYearComBoBox));
  }

  async verifyAccumYear(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryTimeTab.uITimeTabHGridResultTable
    // .getText().contains(Randomized.getCurrentYear()));
  }

  async verifyAddButtonIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntryTimeTab.uIAddNewButton.isDisplayed());
  }

}

export class PersonnelEntryTrainingTabPage {
  readonly page: Page;
  readonly specialSkillsTab: Locator;
  readonly certificationTab: Locator;
  readonly trainingTab: Locator;
  readonly fTOTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.specialSkillsTab = page.locator("//div[@id=\'tabPersonnel_tmpl4_usrPerTrainControls1_tabPerTrain\']//span[text()=\'Special Skills\']");
    this.certificationTab = page.locator("//div[@id=\'tabPersonnel_tmpl4_usrPerTrainControls1_tabPerTrain\']//span[text()=\'Certification\']");
    this.trainingTab = page.locator("//div[@id=\'tabPersonnel_tmpl4_usrPerTrainControls1_tabPerTrain\']//span[text()=\'Training\']");
    this.fTOTab = page.locator("//div[@id=\'tabPersonnel_tmpl4_usrPerTrainControls1_tabPerTrain\']//span[text()=\'FTO\']");
  }

  async switchToSpecialSkillsTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.uISpecialSkillsTab.click();
  }

  async clickcerificationTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.uICertificationTab.click();
  }

  async clickTrainingTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.uITrainingTab.click();
  }

  async switchToFTOTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.uIFTOTab.click();
    // objectIdentification.windowHandle.switchToFrame("frmTraineeSrch");
  }

}

export class CertificationTabPage {
  readonly page: Page;
  readonly certificationGrid: Locator;
  readonly enterCertificationButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.certificationGrid = page.locator("//div[@id=\'tabPersonnel_tmpl4_usrPerTrainControls1_tabPerTrain_tmpl1_usrCertification1_grdCertification\']");
    this.enterCertificationButton = page.locator('#tabPersonnel_tmpl4_usrPerTrainControls1_tabPerTrain_tmpl1_usrCertification1_cmdCertification');
  }

  async verifyAtCountInGridAsZero(): Promise<void> {
    // int count = objectIdentification.manualIdentify.getGridTableRowsCount(uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.certificationTab.uICertificationGrid);
    // verify.ExpectedIntergerValueIsEqualToActual(count, 0);
  }

  async verifyAtCountInGrid(rowcount: number): Promise<void> {
    // int count = objectIdentification.manualIdentify.getGridTableRowsCount(uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.certificationTab.uICertificationGrid);
    // verify.ExpectedIntergerValueIsEqualToActual(count, rowcount);
  }

  async verifyAtCertificationByCertORLicInGrid(): Promise<void> {
    // String Certification = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.certificationTab.uICertificationGrid, BaseData.getPersonnelModuleValue("CertificationOrLicenseNo"), "Certification").getText();
    // verify.ExpectedPropertyValueIsEqual(Certification, BaseData.getPersonnelModuleValue("CertificationInGrid"));
  }

  async verifyAtCEUsEarnedbyHoursEarnedInGrid(): Promise<void> {
    // String CEUsEarned = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.certificationTab.uICertificationGrid, BaseData.getPersonnelModuleValue("EarnedHoursInGrid"), "CEUs Earned").getText();
    // verify.ExpectedPropertyValueIsEqual(CEUsEarned, BaseData.getPersonnelModuleValue("EarnedCEUs"));
  }

  async verifyAtRectifyByWithEffectiveFromInGrid(): Promise<void> {
    // String Recertify = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.certificationTab.uICertificationGrid, Randomized.getCurrentDate("MM/dd/yyyy"), "Recertify By").getText();
    // verify.ExpectedPropertyValueIsEqual(Recertify, Randomized.getFutureDate(Randomized.getCurrentMonthTotalDays(), "MM/dd/yy"));
  }

  async clickEnterCertificationButton(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.certificationTab.uIEnterCertificationButton.click();
  }

  async selectAtCertificationInGrid(JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(	uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.certificationTab.uICertificationGrid, BaseData.getPersonnelModuleValue("Certification"+JsonKeyIndex));
  }

}

export class SpecialSkillsTabPage {
  readonly page: Page;
  readonly skillsComboBox: Locator;
  readonly effectiveFromDateEdit: Locator;
  readonly addButton: Locator;
  readonly skillsTabTable: Locator;
  readonly inactiveCheckBox: Locator;
  readonly inactiveDateEdit: Locator;
  readonly clearButton: Locator;
  readonly includeInactiveCheckBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.skillsComboBox = page.locator('#tabPersonnel_tmpl4_usrPerTrainControls1_tabPerTrain_tmpl2_usrSpecialSkills1_cddSkills_DropDown');
    this.effectiveFromDateEdit = page.locator('#tabPersonnel_tmpl4_usrPerTrainControls1_tabPerTrain_tmpl2_usrSpecialSkills1_dtEffective_KPIDttmCtrl');
    this.addButton = page.locator('#tabPersonnel_tmpl4_usrPerTrainControls1_tabPerTrain_tmpl2_usrSpecialSkills1_cmdAdd');
    this.skillsTabTable = page.locator('#tabPersonnel_tmpl4_usrPerTrainControls1_tabPerTrain_tmpl2_usrSpecialSkills1_grdSkills');
    this.inactiveCheckBox = page.locator('#tabPersonnel_tmpl4_usrPerTrainControls1_tabPerTrain_tmpl2_usrSpecialSkills1_chkExpired');
    this.inactiveDateEdit = page.locator('#tabPersonnel_tmpl4_usrPerTrainControls1_tabPerTrain_tmpl2_usrSpecialSkills1_txtInActiveDttm');
    this.clearButton = page.locator('#tabPersonnel_tmpl4_usrPerTrainControls1_tabPerTrain_tmpl2_usrSpecialSkills1_cmdClear');
    this.includeInactiveCheckBox = page.locator('#tabPersonnel_tmpl4_usrPerTrainControls1_tabPerTrain_tmpl2_usrSpecialSkills1_chkIsExpired');
  }

  async selectAtSkills(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uISkillsComboBox
    // .sendKeys(BaseData.getPersonnelModuleValue("Skills"));
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uISkillsComboBox
    // .sendKeys(Keys.TAB);
  }

  async enterEffectiveDateAsCurrentDate(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uIEffectiveFromDateEdit
    // .sendKeys(Randomized.getCurrentDate());
  }

  async clickAddButton(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uIAddButton.click();
    // Playback.controlReadyThreadWait();
  }

  async verifyAtSkills(): Promise<void> {
    // WebElement row = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uISkillsTabTable,
    // BaseData.getPersonnelModuleValue("Skills"));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Skills"),
    // objectIdentification.manualIdentify.getGridCell(
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uISkillsTabTable,
    // row, "Skills").getText());
  }

  async selectAtSkills1(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uISkillsComboBox
    // .sendKeys(BaseData.getPersonnelModuleValue("Skills1"));
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uISkillsComboBox
    // .sendKeys(Keys.TAB);
  }

  async selectAtSkills2(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uISkillsComboBox
    // .sendKeys(BaseData.getPersonnelModuleValue("Skills2"));
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uISkillsComboBox
    // .sendKeys(Keys.TAB);
  }

  async enterEffectiveDateAsPreviousDate(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uIEffectiveFromDateEdit
    // .sendKeys(Randomized.getPreviousDate(5, "MM/dd/yyyy"));
  }

  async clickAtSkillsInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uISkillsTabTable,
    // BaseData.getPersonnelModuleValue("Skills"));
  }

  async clickInactiveCheckBox(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uIInactiveCheckBox.click();
  }

  async verifyCurrentDate(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uIInactiveDateEdit
    // .getAttribute("value"),
    // Randomized.getCurrentDate());
  }

  async clickUpdateButton(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uIAddButton.click();
    // Playback.controlReadyThreadWait();
  }

  async verifyCurrentDateInGrid(rowIndex: number): Promise<void> {
    // Playback.threadWait();
    // Playback.threadWait();
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate(),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uISkillsTabTable,
    // "Inactive", rowIndex));
  }

  async enterEffectiveDateAsFutureDate(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uIEffectiveFromDateEdit
    // .sendKeys(Randomized.getFutureDate(5));
  }

  async DeleteAtSkills(): Promise<void> {
    // objectIdentification.manualIdentify.deleteSelectedGridRowByCellInnerText(
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uISkillsTabTable,
    // BaseData.getPersonnelModuleValue("Skills"));
    // popup.confirm.yes();
    // Playback.controlReadyThreadWait();
  }

  async verifyRemainingSkillsPresent(): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify.getGridTableRowsCount(
    // "tabPersonnel_tmpl4_usrPerTrainControls1_tabPerTrain_tmpl2_usrSpecialSkills1_grdSkills") == 2);
  }

  async clickClearButton(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uIClearButton.click();
    // Playback.controlReadyThreadWait();
  }

  async verifySkillsFieldIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uISkillsComboBox
    // .isDisplayed());
  }

  async verifyAtInActiveRowBySkill(): Promise<void> {
    // String cssValue = objectIdentification.manualIdentify.getGridRowByCellInnerText(uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uISkillsTabTable, BaseData.getPersonnelModuleValue("Skills")).getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(cssValue, "rgba(128, 128, 128, 1)");
  }

  async clickIncludeInactiveCheckBox(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uIIncludeInactiveCheckBox.click();
  }

  async verifyAtInactiveDateASCurrentDate(): Promise<void> {
    // String InactiveDate = uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uIInactiveDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(InactiveDate, Randomized.getCurrentDate());
  }

  async verifyAtInactiveDateBySkillInGrid(): Promise<void> {
    // String IactiveDateInGrid = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uISkillsTabTable, BaseData.getPersonnelModuleValue("Skill"), "Inactive").getText();
    // verify.ExpectedPropertyValueIsEqual(IactiveDateInGrid, Randomized.getCurrentDate());
  }

  async verifyAtInActiveRowColorBySkill(JsonKeyIndex: number): Promise<void> {
    // String Iactivecolor = objectIdentification.manualIdentify.getGridRowByCellInnerText(uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uISkillsTabTable, BaseData.getPersonnelModuleValue("Skill"+JsonKeyIndex)).getCssValue("color");
    // System.out.println(Iactivecolor);
    // verify.ExpectedPropertyValueIsEqual(Iactivecolor, BaseData.getPersonnelModuleValue("InactiveGreyColor"));
  }

  async verifyAtSkills(JsonkeyIndex: number): Promise<void> {
    // WebElement row = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uISkillsTabTable,
    // BaseData.getPersonnelModuleValue("Skills"+JsonkeyIndex));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Skills"+JsonkeyIndex),
    // objectIdentification.manualIdentify.getGridCell(
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.specialSkillsTab.uISkillsTabTable,
    // row, "Skills").getText());
  }

}

export class InnerTrainingTabPage {
  readonly page: Page;
  readonly enterTrainingButton: Locator;
  readonly innerTrainingTabTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.enterTrainingButton = page.locator('#tabPersonnel_tmpl4_usrPerTrainControls1_tabPerTrain_tmpl0_usrTraining1_cmdTraining');
    this.innerTrainingTabTable = page.locator("//div[@id=\'tabPersonnel_tmpl4_usrPerTrainControls1_tabPerTrain_tmpl0_usrTraining1_grdTraining\']");
  }

  async clickEnterTrainingButton(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.innerTrainingTab.uIEnterTrainingButton.click();
  }

  async verifyAtTrainingTypeInGrid(): Promise<void> {
    // String innerText = objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.innerTrainingTab.uIInnerTrainingTabTable,
    // "Training Type", 0);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("TrainingType"),innerText );
  }

  async verifyRowIndexWithTitle(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.innerTrainingTab.uIInnerTrainingTabTable, BaseData.getPersonnelModuleValue("Title"));
    // String attribute = gridRowByCellInnerText.getAttribute("idx");
    // verify.ExpectedPropertyValueIsEqual(attribute, BaseData.getPersonnelModuleValue("TrainingRowIndex"));
  }

  async verifyAtTitleByLocation(JsonKeyIndex: number): Promise<void> {
    // String Title = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.innerTrainingTab.uIInnerTrainingTabTable, BaseData.getPersonnelModuleValue("Location"+JsonKeyIndex), "Title").getText();
    // verify.ExpectedPropertyValueIsEqual(Title, BaseData.getPersonnelModuleValue("Title"+JsonKeyIndex));
  }

  async verifyAtReusltByCourse(JsonKeyIndex: number): Promise<void> {
    // String Title = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.innerTrainingTab.uIInnerTrainingTabTable, BaseData.getPersonnelModuleValue("course"+JsonKeyIndex), "Result").getText();
    // verify.ExpectedPropertyValueIsEqual(Title, BaseData.getPersonnelModuleValue("Result"+JsonKeyIndex));
  }

  async verifyAtReQualifyByHours(JsonKeyIndex: number): Promise<void> {
    // String Title = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.innerTrainingTab.uIInnerTrainingTabTable, BaseData.getPersonnelModuleValue("Hours"+JsonKeyIndex), "Requalify By").getText();
    // verify.ExpectedPropertyValueIsEqual(Title, BaseData.getPersonnelModuleValue("RequalifyBy"+JsonKeyIndex));
  }

  async selectAtTitleInGrid(JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.innerTrainingTab.uIInnerTrainingTabTable,  BaseData.getPersonnelModuleValue("Title"+JsonKeyIndex));
  }

}

export class FTOTabPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly fTOGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator('#btnTask');
    this.fTOGrid = page.locator('#grdTraineeSrch');
  }

  async clickAddNew(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.fTOTab.uIAddNewButton.click();
  }

  async verifyAtTraineePFByFTOPFInGrid(): Promise<void> {
    // String TraineePF =objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryTrainingTab.fTOTab.uIFTOGrid, BaseData.getPersonnelModuleValue("FTOPF"), "Trainee Name").getText();
    // verify.ExpectedPropertyValueIsEqual(TraineePF, BaseData.getPersonnelModuleValue("TraineePF"));
  }

}

export class PersonnelEntryInventoryTabPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly inventoryGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator('#cmdAdd');
    this.inventoryGrid = page.locator('#grdPersonInv');
  }

  async clickAddNew(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryInventoryTab.uIAddNewButton.click();
  }

  async verifyAddNewButtonIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntryInventoryTab.uIAddNewButton.isDisplayed());
  }

  async verifyAtTypeByInventory(): Promise<void> {
    // String Type = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryInventoryTab.uIInventoryGrid, BaseData.getPersonnelModuleValue("Invnetory"), "Type").getText();
    // verify.ExpectedPropertyValueIsEqual(Type, BaseData.getPersonnelModuleValue("Type"));
  }

  async verifyAtMakeByIssueQty(): Promise<void> {
    // String Make = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryInventoryTab.uIInventoryGrid, BaseData.getPersonnelModuleValue("IssueQty"), "Make").getText();
    // verify.ExpectedPropertyValueIsEqual(Make, BaseData.getPersonnelModuleValue("Make"));
  }

}

export class PersonnelEntryEmergencyDataTabPage {
  readonly page: Page;
  readonly orderNoEdit: Locator;
  readonly contactNameEdit: Locator;
  readonly phoneEdit: Locator;
  readonly carrierDropDown: Locator;
  readonly addButton: Locator;
  readonly emergencyDataTabGrid: Locator;
  readonly medicalAlertEdit: Locator;
  readonly rcvTxtCheckBox: Locator;
  readonly relationShipDropDown: Locator;
  readonly notesEdit: Locator;
  readonly allergiesEdit: Locator;
  readonly medicationEdit: Locator;
  readonly bloodTypeDropDown: Locator;
  readonly hospitalPreferenceEdit: Locator;
  readonly familyPhysicianEdit: Locator;
  readonly physicianPhoneEdit: Locator;
  readonly contactLensCheckBox: Locator;
  readonly denturesCheckBox: Locator;
  readonly lastTetanusShotDateEdit: Locator;
  readonly lastPhysicalDateEdit: Locator;
  readonly lastHepatitisShotDateEdit: Locator;
  readonly lastHepatitisShotToDateEdit: Locator;
  readonly insurancePlanEdit: Locator;
  readonly religionEdit: Locator;
  readonly religiousLeaderEdit: Locator;
  readonly miscellanousDataEdit: Locator;
  readonly organDonorEdit: Locator;
  readonly barCodeEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.orderNoEdit = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_txtOrder');
    this.contactNameEdit = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_txtContactName');
    this.phoneEdit = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_txtPhone');
    this.carrierDropDown = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_cddCarrier_DropDown');
    this.addButton = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_cmdAdd');
    this.emergencyDataTabGrid = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_grdEmergency');
    this.medicalAlertEdit = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_txtMadicalAlert');
    this.rcvTxtCheckBox = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_chkReceiveTxt');
    this.relationShipDropDown = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_cddRelationship_DropDown');
    this.notesEdit = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_txtNotes');
    this.allergiesEdit = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_txtAllergies');
    this.medicationEdit = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_txtMedications');
    this.bloodTypeDropDown = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_cddBloodType_DropDown');
    this.hospitalPreferenceEdit = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_txtHospitalPreference');
    this.familyPhysicianEdit = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_txtFamilyphy');
    this.physicianPhoneEdit = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_txtPhonephy');
    this.contactLensCheckBox = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_chkContacts');
    this.denturesCheckBox = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_chkDentures');
    this.lastTetanusShotDateEdit = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_dttmLastTetanus_KPIDttmCtrl');
    this.lastPhysicalDateEdit = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_dttmLastphy_KPIDttmCtrl');
    this.lastHepatitisShotDateEdit = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_dtmLasthepatitis1_KPIDttmCtrl');
    this.lastHepatitisShotToDateEdit = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_dtmLasthepatitis2_KPIDttmCtrl');
    this.insurancePlanEdit = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_txtInsurancePlan');
    this.religionEdit = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_txtReligion');
    this.religiousLeaderEdit = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_txtReligiousLeader');
    this.miscellanousDataEdit = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_txtMiscellaneous');
    this.organDonorEdit = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_txtOrganDonor');
    this.barCodeEdit = page.locator('#tabPersonnel_tmpl2_UsrPersonnelEmgData1_txtBarCode');
  }

  async verifyOrderNoFieldIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIOrderNoEdit.isDisplayed());
  }

  async enterAtOrder(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIOrderNoEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIOrderNoEdit.sendKeys(BaseData.getPersonnelModuleValue("OrderNo"));
  }

  async enterAtContactName(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIContactNameEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIContactNameEdit.sendKeys(BaseData.getPersonnelModuleValue("ContactName"));
  }

  async enterAtPhone(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIPhoneEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIPhoneEdit.click();
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIPhoneEdit.sendKeys(BaseData.getPersonnelModuleValue("Phone"));
  }

  async selectAtCarrier(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uICarrierDropDown,
    // BaseData.getPersonnelModuleValue("Carrier"));
  }

  async clickAdd(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIAddButton.click();
  }

  async DeleteAtOrderByContactName(): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerTextExactRow(uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIEmergencyDataTabGrid, BaseData.getPersonnelModuleValue("ContactName"));
  }

  async clickAtColumnHeader(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridHeaderColumnName(uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIEmergencyDataTabGrid, BaseData.getPersonnelModuleValue("ColumnName"));
  }

  async selectAtContactNameInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIEmergencyDataTabGrid, BaseData.getPersonnelModuleValue("ContactName"));
  }

  async verifySaveConfirmPopUpIsNotArised(): Promise<void> {
    // boolean checkAlertIsPresentOrNot = popup.confirm.checkAlertIsPresentOrNot();
    // verify.ExpectedValueIsFalse(checkAlertIsPresentOrNot);
  }

  async verifySpecialCharatersAreNotAllowedInContactName(): Promise<void> {
    // String text = uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIContactNameEdit.getText();
    // verify.ExpectedValueIsTrue(text.isEmpty());
  }

  async enterSpecialCharatersInContactName(SpecialCharacter: string): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIContactNameEdit.sendKeys(SpecialCharacter);
  }

  async EnterAtMedicalAlert(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIMedicalAlertEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIMedicalAlertEdit.sendKeys(BaseData.getPersonnelModuleValue("MedicalAlert"));
  }

  async copyTextFromMedicalLAlert(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIMedicalAlertEdit.sendKeys(Keys.CONTROL + "A");
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIMedicalAlertEdit.sendKeys(Keys.CONTROL + "C");
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIMedicalAlertEdit.sendKeys(Keys.CONTROL + "X");
  }

  async pasteInContactName(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIContactNameEdit.sendKeys(Keys.CONTROL + "V");
  }

  async clickRcvTxtCheckBox(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIRcvTxtCheckBox.click();
  }

  async selectAtRelationShip(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIRelationShipDropDown,
    // BaseData.getPersonnelModuleValue("RelationShip"));
  }

  async enterAtNotes(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uINotesEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uINotesEdit.sendKeys(BaseData.getPersonnelModuleValue("Notes"));
  }

  async verifyAtPhoneByContactNameInGrid(JsonKeyIndex: number): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIEmergencyDataTabGrid, BaseData.getPersonnelModuleValue("ContactName"+JsonKeyIndex), "Phone#").getText();
    // verify.ExpectedPropertyValueIsEqual( BaseData.getPersonnelModuleValue("Phone"+JsonKeyIndex),text);
  }

  async enterAtAllergies(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIAllergiesEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIAllergiesEdit.sendKeys(BaseData.getPersonnelModuleValue("Allergies"));
  }

  async enterAtMedications(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIMedicationEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIMedicationEdit.sendKeys(BaseData.getPersonnelModuleValue("Medications"));
  }

  async enterAtHospitalPreferences(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIHospitalPreferenceEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIHospitalPreferenceEdit.sendKeys(BaseData.getPersonnelModuleValue("HospitalPreferences"));
  }

  async enterAtFamilyphysician(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIFamilyPhysicianEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIFamilyPhysicianEdit.sendKeys(BaseData.getPersonnelModuleValue("FamilyPhysician"));
  }

  async enterAtFamilyphysicianPhone(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIPhysicianPhoneEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIPhysicianPhoneEdit.click();
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIPhysicianPhoneEdit.sendKeys(BaseData.getPersonnelModuleValue("PhysicianPhone"));
  }

  async selectAtBloodType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIBloodTypeDropDown,
    // BaseData.getPersonnelModuleValue("BloodType"));
  }

  async clickcontactLensCheckBox(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIContactLensCheckBox.click();
  }

  async clickDenturesCheckBox(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIDenturesCheckBox.click();
  }

  async enterAtLastTetanusShot(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uILastTetanusShotDateEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uILastTetanusShotDateEdit.sendKeys(BaseData.getPersonnelModuleValue("LastTetanusShot"));
  }

  async enterAtLastPhysical(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uILastPhysicalDateEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uILastPhysicalDateEdit.sendKeys(BaseData.getPersonnelModuleValue("LastPhysical"));
  }

  async enterAtLastHepatitisShot(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uILastHepatitisShotDateEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uILastHepatitisShotDateEdit.sendKeys(BaseData.getPersonnelModuleValue("LastHepatitisShot"));
  }

  async enterAtLastToHepatitisShot(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uILastHepatitisShotToDateEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uILastHepatitisShotToDateEdit.sendKeys(BaseData.getPersonnelModuleValue("LastToHepatitisShot"));
  }

  async enterAtInsurancePlan(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIInsurancePlanEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIInsurancePlanEdit.sendKeys(BaseData.getPersonnelModuleValue("InsurancePlan"));
  }

  async enterAtReligion(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIReligionEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIReligionEdit.sendKeys(BaseData.getPersonnelModuleValue("Religion"));
  }

  async enterAtReligiousLeader(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIReligiousLeaderEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIReligiousLeaderEdit.sendKeys(BaseData.getPersonnelModuleValue("ReligiousLeader"));
  }

  async enterAtMiscellanoues(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIMiscellanousDataEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIMiscellanousDataEdit.sendKeys(BaseData.getPersonnelModuleValue("Miscellanoues"));
  }

  async enterAtOrganDonor(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIOrganDonorEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIOrganDonorEdit.sendKeys(BaseData.getPersonnelModuleValue("OrganDonor"));
  }

  async enterAtBarcode(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIBarCodeEdit.clear();
    // uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIBarCodeEdit.sendKeys(BaseData.getPersonnelModuleValue("Barcode"));
  }

  async verifyAtBarcode(): Promise<void> {
    // String BarCode = uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIBarCodeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BarCode, BaseData.getPersonnelModuleValue("Barcode"));
  }

  async selectAtCarrier(JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uICarrierDropDown,
    // BaseData.getPersonnelModuleValue("Carrier"+JsonKeyIndex));
  }

  async verifyAtCarrierByContactNameInGrid(JsonKeyIndex: number): Promise<void> {
    // String Carrier = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIEmergencyDataTabGrid, BaseData.getPersonnelModuleValue("ContactName"+JsonKeyIndex), "Carrier").getText();
    // verify.ExpectedPropertyValueIsEqual(Carrier,  BaseData.getPersonnelModuleValue("Carrier"+JsonKeyIndex));
  }

  async selectAtContactNameInGrid(JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIEmergencyDataTabGrid, BaseData.getPersonnelModuleValue("ContactName"+JsonKeyIndex));
  }

  async verifyAtMedicalAlert(): Promise<void> {
    // String text = uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIMedicalAlertEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getPersonnelModuleValue("MedicalAlert"));
  }

  async verifyAtAllergies(): Promise<void> {
    // String Allergies = uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIAllergiesEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(Allergies, BaseData.getPersonnelModuleValue("Allergies"));
  }

  async verifyAtmedications(): Promise<void> {
    // String Medication = uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIMedicationEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(Medication, BaseData.getPersonnelModuleValue("Medication"));
  }

  async verifyAtHospitalPreference(): Promise<void> {
    // String HospitalPreference = uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIHospitalPreferenceEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(HospitalPreference, BaseData.getPersonnelModuleValue("HospitalPreference"));
  }

  async verifyAtFamilyPhysician(): Promise<void> {
    // String FamilyPhysician = uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIFamilyPhysicianEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(FamilyPhysician, BaseData.getPersonnelModuleValue("FamilyPhysician"));
  }

  async verifyAtFamilyPhysicianPhoneNo(): Promise<void> {
    // String FamilyPhysician = uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIPhysicianPhoneEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(FamilyPhysician, BaseData.getPersonnelModuleValue("FamilyPhysicianPhoneNo"));
  }

  async verifyAtBloodType(): Promise<void> {
    // String BloodType = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIBloodTypeDropDown);
    // verify.ExpectedPropertyValueIsEqual(BloodType, BaseData.getPersonnelModuleValue("BloodType"));
  }

  async verifyAtLastTetanusShot(): Promise<void> {
    // String LastTetanusShot = uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uILastTetanusShotDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(LastTetanusShot, BaseData.getPersonnelModuleValue("LastTetanusShot"));
  }

  async verifyAtLastPhysical(): Promise<void> {
    // String LastPhysicalDate = uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uILastPhysicalDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(LastPhysicalDate, BaseData.getPersonnelModuleValue("LastPhysicalDate"));
  }

  async verifyAtLastHaptitsShotDate(): Promise<void> {
    // String LastHepatitisShotDate = uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uILastHepatitisShotDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(LastHepatitisShotDate, BaseData.getPersonnelModuleValue("LastHepatitisShotDate"));
  }

  async verifyAtLastHaptitsShotToDate(): Promise<void> {
    // String LastHepatitisShotToDate = uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uILastHepatitisShotToDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(LastHepatitisShotToDate, BaseData.getPersonnelModuleValue("LastHepatitisShotToDate"));
  }

  async verifyAtInsurancePlan(): Promise<void> {
    // String InsurancePlan = uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIInsurancePlanEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(InsurancePlan, BaseData.getPersonnelModuleValue("InsurancePlan"));
  }

  async verifyAtReligion(): Promise<void> {
    // String Religion = uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIReligionEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(Religion, BaseData.getPersonnelModuleValue("Religion"));
  }

  async verifyAtReligiousLeader(): Promise<void> {
    // String ReligiousLeader = uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIReligiousLeaderEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(ReligiousLeader, BaseData.getPersonnelModuleValue("ReligiousLeader"));
  }

  async verifyAtMiscellaneous(): Promise<void> {
    // String Miscellaneous = uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIMiscellanousDataEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(Miscellaneous, BaseData.getPersonnelModuleValue("Miscellaneous"));
  }

  async verifyAtOrganDonor(): Promise<void> {
    // String OrganDonor = uIMapPersonnel.personnelEntry.personnelEntryEmergencyDataTab.uIOrganDonorEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(OrganDonor, BaseData.getPersonnelModuleValue("OrganDonor"));
  }

}

export class PersonnelEntryAllowanceTabPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly resetButton: Locator;
  readonly allowanceComboBox: Locator;
  readonly yearComboBox: Locator;
  readonly dateEdit: Locator;
  readonly typeComboBox: Locator;
  readonly itemComboBox: Locator;
  readonly makeCodeEdit: Locator;
  readonly makeLookupButton: Locator;
  readonly vendorCodeEdit: Locator;
  readonly vendorLookupButton: Locator;
  readonly invoiceNoEdit: Locator;
  readonly amountEdit: Locator;
  readonly commentEdit: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly allowanceTabTable: Locator;
  readonly transacationDateEdit: Locator;
  readonly allowanceAmtEdit: Locator;
  readonly balanceEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdSave');
    this.resetButton = page.locator('#cmdRefresh');
    this.allowanceComboBox = page.locator('#cddAllowCode_DropDown');
    this.yearComboBox = page.locator('#DDYear');
    this.dateEdit = page.locator('#dtAllowDttm_KPIDttmCtrl');
    this.typeComboBox = page.locator('#lstAllowType_DropDown');
    this.itemComboBox = page.locator('#DDAllowItem');
    this.makeCodeEdit = page.locator('#lupAllowMake_CodeValue');
    this.makeLookupButton = page.locator('#lupAllowMake_imgBtn');
    this.vendorCodeEdit = page.locator('#lupVendor_CodeValue');
    this.vendorLookupButton = page.locator('#lupVendor_imgBtn');
    this.invoiceNoEdit = page.locator('#txtInvoiceNbr');
    this.amountEdit = page.locator('#txtAmount');
    this.commentEdit = page.locator('#txtComment');
    this.addButton = page.locator('#imgAddAllowance');
    this.clearButton = page.locator('#imgClearAllowance');
    this.allowanceTabTable = page.locator('#grdAllowance');
    this.transacationDateEdit = page.locator('#dtAllowDttm_KPIDttmCtrl');
    this.allowanceAmtEdit = page.locator('#curTotal');
    this.balanceEdit = page.locator('#curBalance');
  }

  async selectAtAllowance(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIAllowanceComboBox,
    // BaseData.getPersonnelModuleValue("Allowance"));
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIAllowanceComboBox.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async selectYearAsCurrentYear(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIYearComboBox,
    // Randomized.getCurrentYear());
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIYearComboBox.sendKeys(Keys.TAB);
  }

  async enterDateAsCurrentDate(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIDateEdit.click();
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIDateEdit.sendKeys(Randomized.getCurrentDate());
  }

  async selectType(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uITypeComboBox);
  }

  async selectItem(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIItemComboBox);
  }

  async enterAtAmount(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIAmountEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("Amount"));
  }

  async enterAtAmount1(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIAmountEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("Amount1"));
  }

  async enterComment(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uICommentEdit
    // .sendKeys("Automation Testing Purpose");
  }

  async selectMake(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIMakeLookupButton.click();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async selectVendor(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIVendorLookupButton.click();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async clickAddButton(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIAddButton.click();
  }

  async saveInternalTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verifyAllowanceDateAsCurrentDate(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate(),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIAllowanceTabTable, "AllowDttm",
    // rowIndex));
  }

  async verifyAtAmountInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Amount"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIAllowanceTabTable, "Amount",
    // rowIndex));
  }

  async DeleteAtRowByAmount(): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerTextExactRow(
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIAllowanceTabTable,
    // BaseData.getPersonnelModuleValue("Amount"));
    // popup.confirm.yes();
  }

  async verifyRowCountInGridAsZero(): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify.getGridTableRowsCount(
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIAllowanceTabTable) == 0);
  }

  async verifyAddButtonIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIAddButton.isDisplayed());
  }

  async verifyAtYear(): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIYearComboBox);
    // verify.ExpectedPropertyValueIsEqual(dropDownSelectedItem, BaseData.getPersonnelModuleValue("Year"));
  }

  async enterAtTranscationDate(JsonKeyIndex: number): Promise<void> {
    // if(JsonKeyIndex==0) {
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uItransacationDateEdit.sendKeys(BaseData.getPersonnelModuleValue("TranscationDate"));
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uItransacationDateEdit.sendKeys(Keys.TAB);
    // else {
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uItransacationDateEdit.sendKeys(BaseData.getPersonnelModuleValue("TranscationDate"+JsonKeyIndex));
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uItransacationDateEdit.sendKeys(Keys.TAB);
  }

  async selectAtType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uITypeComboBox, BaseData.getPersonnelModuleValue("Type"));
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uITypeComboBox.sendKeys(Keys.TAB);
  }

  async selectAtItem(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIItemComboBox, BaseData.getPersonnelModuleValue("Item"));
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIItemComboBox.sendKeys(Keys.TAB);
  }

  async tabOutTypeDropDown(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uITypeComboBox.sendKeys(Keys.TAB);
  }

  async selectAtYear(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIYearComboBox, BaseData.getPersonnelModuleValue("Allownaceyear"));
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIYearComboBox.sendKeys(Keys.TAB);
  }

  async verify3016TransactionDateRangeAcknowledgePopUp(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(3016) Transaction Date should be within this range From 06/10/2025 To 06/09/2026");
  }

  async enterAtInvoice(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIInvoiceNoEdit.sendKeys(BaseData.getPersonnelModuleValue("Invoice"));
  }

  async verifyAtAllowanceTypeByAmount(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIAllowanceTabTable, BaseData.getPersonnelModuleValue("AllowanceAmount"), "Allow Type Desc").getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getPersonnelModuleValue("AllowanceType"));
  }

  async verifyAtAllowanceAmt(): Promise<void> {
    // String attribute = uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIAllowanceAmtEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute, BaseData.getPersonnelModuleValue("AllowanceAmt"));
  }

  async verifyAtBalance(JsonKeyIndex: number): Promise<void> {
    // String attribute = uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIBalanceEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute, BaseData.getPersonnelModuleValue("Balance"+JsonKeyIndex));
  }

  async verifyAmountValueCannotBeLargerThanTheAllowanceAmountValueAcknowledgeIsNotAppear(): Promise<void> {
    // popup.acknowledge.verifyAcknowledgeWindowNotOpened("The Amount value cannot be larger than the Allowance Amt value.");
    // objectIdentification.smokeTest.checkAckExist();
  }

  async verifyAtValueInYear(): Promise<void> {
    // List<String> dropDownValues = objectIdentification.manualIdentify.getDropDownValues(uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIYearComboBox);
    // verify.ExpectedValueIsTrue(dropDownValues.contains(BaseData.getPersonnelModuleValue("Allownaceyear")));
  }

  async verifyAtAllowanceTypeByAmount(JSONKeyIndex: number): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryAllowanceTab.uIAllowanceTabTable, BaseData.getPersonnelModuleValue("AllowanceAmount"+JSONKeyIndex), "Allow Type Desc").getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getPersonnelModuleValue("AllowanceType"+JSONKeyIndex));
  }

}

export class PersonnelEntryQAFormsTabPage {
  readonly page: Page;
  readonly qaFormsResultGrid: Locator;
  readonly refreshButton: Locator;
  readonly emailIcon: Locator;
  readonly fillFormButton: Locator;
  readonly selectFormDropDown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.qaFormsResultGrid = page.locator('#grdQAForms');
    this.refreshButton = page.locator('#cmdrefresh');
    this.emailIcon = page.locator("//input[contains(@id,\'GrdQAFormsEmail\')]");
    this.fillFormButton = page.locator('#cmdTakeTest');
    this.selectFormDropDown = page.locator('#cddForm_DropDown');
  }

  async selectAtFormNameInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText
    // (uIMapPersonnel.personnelEntry.personnelEntryQAFormsTab.uIQaFormsResultGrid, BaseData.getTestContextData("FormName"));
  }

  async selectAtSelectForm(): Promise<void> {
    // uIMapQA.questionnarie.uISelectFormComboBox.click();
    // Playback.threadWait();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapQA.questionnarie.uISelectFormComboBox,
    // BaseData.getPersonnelModuleValue("SelectForm"));
  }

  async verifyAtPFNoBasedOnFormNameInGrid(): Promise<void> {
    // String pfNo = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryQAFormsTab.uIQaFormsResultGrid, BaseData.getTestContextData("FormName"), "PF#").getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTestContextData("PFCode"), pfNo);
  }

  async verifyAtPFNameBasedOnFormNameInGrid(): Promise<void> {
    // String pfNo = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryQAFormsTab.uIQaFormsResultGrid, BaseData.getTestContextData("FormName"), "PF Name").getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTestContextData("PFName"), pfNo);
  }

  async clickRefreshButton(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryQAFormsTab.uIRefreshButton.click();
  }

  async clickFillForm(): Promise<void> {
    // uIMapPersonnel.personnelEntry.personnelEntryQAFormsTab.uIFillFormButton.click();
  }

  async verifyDateAsCurrentDateListGrid(): Promise<void> {
    // String gridCellInnerText = objectIdentification.manualIdentify.getGridCellInnerText
    // (uIMapPersonnel.personnelEntry.personnelEntryQAFormsTab.uIQaFormsResultGrid, "Entered On", 0);
    // verify.ExpectedValueIsTrue(uIMapPersonnel.personnelEntry.personnelEntryQAFormsTab.uIQaFormsResultGrid
    // .getText().contains(Randomized.getCurrentDate().substring(0, 6)+""+Randomized.getCurrentDate().substring(8)), "Verify Added Comments Date shows in grid");
  }

  async verifyDateAsCurrentTimeListGrid(): Promise<void> {
    // String gridCellInnerText = objectIdentification.manualIdentify.getGridCellInnerText(uIMapPersonnel.personnelEntry.personnelEntryQAFormsTab.uIQaFormsResultGrid, "Entered On", 0).substring(9);
    // System.out.println(gridCellInnerText);
    // verify.ExpectedValueIsTrue(gridCellInnerText.contains(Randomized.getCurrentTime().substring(0, 5)), "Verify Added Comments time shows in grid");
  }

  async verifyAtFormNameContainsInSelectForm(i: number): Promise<void> {
    // List<String> dropDownValues = objectIdentification.manualIdentify
    // .getDropDownValues(uIMapQA.questionnarie.uISelectFormComboBox);
    // verify.ExpectedValueIsTrue(dropDownValues.contains(BaseData.getPersonnelModuleValue("FormName" + i)),
    // BaseData.getPersonnelModuleValue("FormName" + i) + " is not contains in Select Form Dropdown -->");
  }

  async verifyAtFormNameInGrid(i: number): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelEntry.personnelEntryQAFormsTab.uIQaFormsResultGrid,
    // BaseData.getPersonnelModuleValue("FormName" + i), "Form Name").getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("FormName" + i), text);
  }

  async selectAtSelectForm(JsoneKeyIndex: number): Promise<void> {
    // uIMapQA.questionnarie.uISelectFormComboBox.click();
    // Playback.threadWait();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapQA.questionnarie.uISelectFormComboBox,
    // BaseData.getPersonnelModuleValue("SelectForm"+JsoneKeyIndex));
  }

  async verifyAtFormName(): Promise<void> {
    // List<String> dropDownValues = objectIdentification.manualIdentify.getDropDownValues
    // (uIMapPersonnel.personnelEntry.personnelEntryQAFormsTab.uISelectFormDropDown);
    // verify.ExpectedValueIsTrue(dropDownValues.contains(BaseData.getPersonnelModuleValue("SelectForm")));
  }

  async verifyAtFormName(i: number): Promise<void> {
    // List<String> dropDownValues = objectIdentification.manualIdentify.getDropDownValues
    // (uIMapPersonnel.personnelEntry.personnelEntryQAFormsTab.uISelectFormDropDown);
    // System.out.println(dropDownValues);
    // verify.ExpectedValueIsTrue(dropDownValues.contains(BaseData.getPersonnelModuleValue("SelectForm"+i)));
  }

}

export class PerformanceReviewPage {
  readonly page: Page;
  readonly pFCodeEdit: Locator;
  readonly pFDesEdit: Locator;
  readonly pFSearchImageButton: Locator;
  readonly searchButton: Locator;
  readonly addNewButton: Locator;
  readonly backButton: Locator;
  readonly resetButton: Locator;
  readonly performanceReviewTable: Locator;
  readonly nextIcon: Locator;
  readonly prevIcon: Locator;
  readonly groupTextView: Locator;
  readonly groupComboBox: Locator;
  readonly divisionTextView: Locator;
  readonly divisionComboBox: Locator;
  readonly teamTextView: Locator;
  readonly teamComboBox: Locator;
  readonly sectionTextView: Locator;
  readonly sectionComboBox: Locator;
  readonly treeIcon: Locator;
  readonly performanceReviewGrid: Locator;
  readonly shiftDropDown: Locator;
  readonly excelIcon: Locator;
  readonly scoreFromEdit: Locator;
  readonly scoreToEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly shiftDropDownArrow: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pFCodeEdit = page.locator('#lupPF_CodeValue');
    this.pFDesEdit = page.locator('#lupPF_CodeDescription');
    this.pFSearchImageButton = page.locator('#lupPF_imgBtn');
    this.searchButton = page.locator("//span[contains(text(),\'Search\')]");
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.backButton = page.locator("//span[contains(text(),\'Back\')]");
    this.resetButton = page.locator("//span[contains(text(),\'Reset\')]");
    this.performanceReviewTable = page.locator('#grdPerformanceReviewSrch');
    this.nextIcon = page.locator('#grdPerformanceReviewSrch_ctl00_lnkbtnNext');
    this.prevIcon = page.locator('#grdPerformanceReviewSrch_ctl00_lnkbtnPrev');
    this.groupTextView = page.locator('#lblWorkgroup');
    this.groupComboBox = page.locator('#cddWorkgroup_DropDown');
    this.divisionTextView = page.locator('#lblDivision');
    this.divisionComboBox = page.locator('#cddDivision_DropDown');
    this.teamTextView = page.locator('#lblTeam');
    this.teamComboBox = page.locator('#cddTeam_DropDown');
    this.sectionTextView = page.locator('#lblSection');
    this.sectionComboBox = page.locator('#cddSection_DropDown');
    this.treeIcon = page.locator('#imgDivision');
    this.performanceReviewGrid = page.locator('#pnlPerformanceReviewSrchRslts');
    this.shiftDropDown = page.locator('#cddShift_DropDown');
    this.excelIcon = page.locator("//img[@title='Export to Excel']");
    this.scoreFromEdit = page.locator('#txtScoreFrom');
    this.scoreToEdit = page.locator('#txtScoreTo');
    this.firstNameEdit = page.locator('#txtFirstName');
    this.shiftDropDownArrow = page.locator('#cddShift_Arrow');
  }

  async enterAtPFCode(): Promise<void> {
    // uIMapPersonnel.performanceReview.uIPFCodeEdit.sendKeys(BaseData.getPersonnelModuleValue("PFCode"));
  }

  async clickSearchButton(): Promise<void> {
    // uIMapPersonnel.performanceReview.uISearchButton.click();
  }

  async selectRowAtPFCode(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapPersonnel.performanceReview.uIPerformanceReviewTable,
    // BaseData.getPersonnelModuleValue("PFCode"));
  }

  async clickAtPFCode(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapPersonnel.performanceReview.uIPerformanceReviewTable,
    // BaseData.getPersonnelModuleValue("PFCode"));
  }

  async verifyNextIconDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.performanceReview.uINextIcon.isDisplayed());
  }

  async verifyAtPFCode(): Promise<void> {
    // WebElement temp = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapPersonnel.performanceReview.uIPerformanceReviewTable,
    // BaseData.getPersonnelModuleValue("PFCode"));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("PFCode"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapPersonnel.performanceReview.uIPerformanceReviewTable, temp, "PF Code")
    // .getText());
  }

  async verifyAtPFName(): Promise<void> {
    // WebElement test = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapPersonnel.performanceReview.uIPerformanceReviewTable,
    // BaseData.getPersonnelModuleValue("PFName"));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("PFName"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapPersonnel.performanceReview.uIPerformanceReviewTable, test, "PF Name")
    // .getText());
  }

  async clickAddNew(): Promise<void> {
    // uIMapPersonnel.performanceReview.uIAddNewButton.click();
  }

  async clickBackButton(): Promise<void> {
    // uIMapPersonnel.performanceReview.uIBackButton.click();
  }

  async clickRestButton(): Promise<void> {
    // uIMapPersonnel.performanceReview.uIResetButton.click();
  }

  async selectAtDivision(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.performanceReview.uIDivisionComboBox, BaseData.getPersonnelModuleValue("Division"));
  }

  async verifyTreeIconDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.performanceReview.uITreeIcon.isDisplayed());
  }

  async verifyAssociatedSectionCount(optionCount: number): Promise<void> {
    // verify.ExpectedIntergerValueIsEqualToActual(optionCount, objectIdentification.manualIdentify
    // .getDropDownOptionsCount(uIMapPersonnel.performanceReview.uISectionComboBox));
  }

  async verifySectionCount(optionCount: number): Promise<void> {
    // verify.ExpectedIntergerValueIsEqualToActual(optionCount, objectIdentification.manualIdentify
    // .getDropDownOptionsCount(uIMapPersonnel.performanceReview.uISectionComboBox));
  }

  async selectAtSection(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.performanceReview.uISectionComboBox,
    // BaseData.getPersonnelModuleValue("Section"));
  }

  async verifyAtAssociatedSectionCount(): Promise<void> {
    // verify.ExpectedIntergerValueIsEqualToActual(
    // Integer.parseInt(BaseData.getPersonnelModuleValue("AssociatedSectionValue")),
    // objectIdentification.manualIdentify
    // .getDropDownOptionsCount(uIMapPersonnel.performanceReview.uISectionComboBox));
  }

  async selectRandomRowInGrid(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow(uIMapPersonnel.performanceReview.uIPerformanceReviewGrid);
  }

  async selectShift(): Promise<void> {
    // uIMapPersonnel.performanceReview.uIShiftDropDownArrow.click();
    // objectIdentification.randomIdentify.selectRadControlDropDownValueSelect(uIMapPersonnel.performanceReview.uIShiftDropDown);
    // uIMapPersonnel.performanceReview.uIShiftDropDownArrow.click();
  }

  async clickExcelIcon(): Promise<void> {
    // uIMapPersonnel.performanceReview.uIExcelIcon.click();
  }

  async enterAtFromScore(JsonKeyIndex: number): Promise<void> {
    // uIMapPersonnel.performanceReview.uIScoreFromEdit.sendKeys(BaseData.getPersonnelModuleValue("FromScoreValue"+JsonKeyIndex));
  }

  async enterAtToScore(JsonKeyIndex: number): Promise<void> {
    // uIMapPersonnel.performanceReview.uIScoreToEdit.sendKeys(BaseData.getPersonnelModuleValue("ToScoreValue"+JsonKeyIndex));
  }

  async verifyToScoreAsNull(): Promise<void> {
    // String text = uIMapPersonnel.performanceReview.uIScoreToEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(text.isBlank());
  }

  async verifyFromScoreAsNull(): Promise<void> {
    // String text = uIMapPersonnel.performanceReview.uIScoreFromEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(text.isBlank());
  }

  async verifyAtAllSpecialCharactersInFromScore(): Promise<void> {
    // uIMapPersonnel.performanceReview.uIScoreFromEdit.clear();
    // String specialChars = BaseData.getPersonnelModuleValue("specialChars");
    // for (char ch : specialChars.toCharArray()) {
    // uIMapPersonnel.performanceReview.uIScoreFromEdit.sendKeys(String.valueOf(ch));
    // String text = uIMapPersonnel.performanceReview.uIScoreFromEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(text.isBlank());
    // System.out.println("Entering: " + ch);
  }

  async verifyAtAllSpecialCharactersInToScore(): Promise<void> {
    // uIMapPersonnel.performanceReview.uIScoreToEdit.clear();
    // String specialChars = BaseData.getPersonnelModuleValue("specialChars");
    // for (char ch : specialChars.toCharArray()) {
    // uIMapPersonnel.performanceReview.uIScoreToEdit.sendKeys(String.valueOf(ch));
    // String text = uIMapPersonnel.performanceReview.uIScoreToEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(text.isBlank());
    // System.out.println("Entering: " + ch);
  }

  async enterAtFirstName(): Promise<void> {
    // uIMapPersonnel.performanceReview.uIFirstNameEdit.sendKeys(BaseData.getPersonnelModuleValue("FirstName"));
  }

  async copyFirstName(): Promise<void> {
    // uIMapPersonnel.performanceReview.uIFirstNameEdit.click();
    // uIMapPersonnel.performanceReview.uIFirstNameEdit.sendKeys(Keys.CONTROL + "A");
    // uIMapPersonnel.performanceReview.uIFirstNameEdit.sendKeys(Keys.CONTROL + "C");
  }

  async pasteScoreFrom(): Promise<void> {
    // uIMapPersonnel.performanceReview.uIScoreFromEdit.click();
    // uIMapPersonnel.performanceReview.uIScoreFromEdit.sendKeys(Keys.CONTROL + "V");
  }

  async pasteScoreTo(): Promise<void> {
    // uIMapPersonnel.performanceReview.uIScoreToEdit.click();
    // uIMapPersonnel.performanceReview.uIScoreToEdit.sendKeys(Keys.CONTROL + "V");
  }

  async verifyAtToScore(): Promise<void> {
    // String text = uIMapPersonnel.performanceReview.uIScoreToEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("ToScore"), text);
  }

  async verifyAtFromScore(): Promise<void> {
    // String text = uIMapPersonnel.performanceReview.uIScoreFromEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("ScoreFrom"), text);
  }

}

export class PerformanceReviewEntryPage {
  readonly page: Page;
  readonly supervisorReportTab: Locator;
  readonly approvalTab: Locator;
  readonly attachmentsTab: Locator;
  readonly nextReviewDueInDateEdit: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly forPFEdit: Locator;
  readonly evaluationFromDateEdit: Locator;
  readonly evaluationFromTimeEdit: Locator;
  readonly evaluationFromTimeEditFire: Locator;
  readonly evaluationToDateEdit: Locator;
  readonly evaluationToTimeEdit: Locator;
  readonly evaluationToTimeEditFire: Locator;
  readonly purposeEdit: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly printIcon: Locator;
  readonly resetIcon: Locator;
  readonly qAFormTab: Locator;
  readonly deleteIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.supervisorReportTab = page.locator("//span[contains(text(),\'Supervisor Report\')]");
    this.approvalTab = page.locator("//span[contains(text(),\'Approval\')]");
    this.attachmentsTab = page.locator("//span[contains(text(),\'Attachments\')]");
    this.nextReviewDueInDateEdit = page.locator('#tabReview_tmpl2_usrApproval_dttmNextReviewDueIn_Date_KPIDttmCtrl');
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.forPFEdit = page.locator('#lupForPF_CodeValue');
    this.evaluationFromDateEdit = page.locator('#dtcEvaluationFrom_Date_KPIDttmCtrl');
    this.evaluationFromTimeEdit = page.locator("(//table[@id = \'dtcEvaluationFrom_Time\'] //input[@class=\'textboxdatetime igte_BlueThemeEditInContainer\'])");
    this.evaluationFromTimeEditFire = page.locator("(//table[@id = \'dtcEvaluationFrom_Time\'] //input[@class=\'textboxdatetime igte_RedThemeEditInContainer\'])");
    this.evaluationToDateEdit = page.locator('#dtcTo_Date_KPIDttmCtrl');
    this.evaluationToTimeEdit = page.locator("(//table[@id = \'dtcTo_Time\'] //input[@class=\'textboxdatetime igte_BlueThemeEditInContainer\'])");
    this.evaluationToTimeEditFire = page.locator("(//table[@id = \'dtcTo_Time\'] //input[@class=\'textboxdatetime igte_RedThemeEditInContainer\'])");
    this.purposeEdit = page.locator('#txtPurpose');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.printIcon = page.locator('#cmdPrint');
    this.resetIcon = page.locator('#cmdRefresh');
    this.qAFormTab = page.locator("//span[text()=\'QA Forms\']");
    this.deleteIcon = page.locator('#cmdDelete');
  }

  async clickApprovalTab(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.uIApprovalTab.click();
    // Playback.controlReadyThreadWait();
  }

  async clickAttachmentsTab(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.uIAttachmentsTab.click();
  }

  async enterNextReviewDueAs2DaysFutureFromCurrentDate(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.uINextReviewDueInDateEdit.clear();
    // uIMapPersonnel.performanceReviewEntry.uINextReviewDueInDateEdit.sendKeys(Randomized.getFutureDate(2));
  }

  async save(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async clickSaveButton(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.uISaveButton.click();
  }

  async closeTheScreen(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.driver.close();
  }

  async verifyAtPFCodeInForPF(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("PFCode"),
    // uIMapPersonnel.performanceReviewEntry.uIForPFEdit.getAttribute("value"));
  }

  async switchToSupervisorReportTab(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.uISupervisorReportTab.click();
    // objectIdentification.windowHandle.switchToFrame("frmTextMgrEx");
  }

  async verifyAckMessageEvaluationPeriod(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(30033) Enter Evaluation Period From.");
  }

  async verifyAckMessageEnterPurpose(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(30033) Enter Purpose");
  }

  async enterEvaluationDateFromAndTo(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.uIEvaluationFromDateEdit.sendKeys(Keys.TAB);
    // uIMapPersonnel.performanceReviewEntry.uIEvaluationFromTimeEdit.sendKeys(Keys.TAB);
    // uIMapPersonnel.performanceReviewEntry.uIEvaluationToDateEdit.sendKeys(Keys.TAB);
    // uIMapPersonnel.performanceReviewEntry.uIEvaluationToTimeEdit.sendKeys(Keys.TAB);
  }

  async enterEvaluationDateFromAndToFire(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.uIEvaluationFromDateEdit.sendKeys(Keys.TAB);
    // uIMapPersonnel.performanceReviewEntry.uIEvaluationFromTimeEditFire.sendKeys(Keys.TAB);
    // uIMapPersonnel.performanceReviewEntry.uIEvaluationToDateEdit.sendKeys(Keys.TAB);
    // uIMapPersonnel.performanceReviewEntry.uIEvaluationToTimeEditFire.sendKeys(Keys.TAB);
  }

  async enterPurpose(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.uIPurposeEdit.sendKeys(Randomized.randomString(10));
  }

  async VerifyUpdateSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(
    // uIMapPersonnel.performanceReviewEntry.uIBottomLeftSideStatusBar.getText(),
    // "1003 - Update Successful");
  }

  async tabOutForPFNo(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.uIForPFEdit.sendKeys(Keys.TAB);
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapPersonnel.performanceReviewEntry.uIBottomLeftSideStatusBar.getText());
  }

  async verifyTabsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.performanceReviewEntry.uISupervisorReportTab.isEnabled());
    // verify.ExpectedValueIsTrue(uIMapPersonnel.performanceReviewEntry.uIAttachmentsTab.isEnabled());
    // verify.ExpectedValueIsTrue(uIMapPersonnel.performanceReviewEntry.uIApprovalTab.isEnabled());
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.uIPrintIcon.click();
  }

  async VerifySelectReportScreenOpened(): Promise<void> {
    // String uIVerifyPDF = uIMapHome.selectReport.uIPDFRadioButton.getAttribute("checked");
    // verify.ExpectedValueIsTrue(uIVerifyPDF.contains("true"));
  }

  async verifyUpdatedDataExistAcknowledgeMsg(): Promise<void> {
    // popup.acknowledge
    // .okWithExpectedMessage("(1051) Updated data exists in Transport tab. You must save or reset.");
  }

  async readEvaluationFromDate(): Promise<string> {
    // String fromDate = uIMapPersonnel.performanceReviewEntry.uIEvaluationFromDateEdit.getAttribute("value");
    // System.out.println(fromDate);
    // return fromDate;
  }

  async enterEvaluationToDateAs1MonthBeforeFromDate(fromDate: string): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.uIEvaluationToDateEdit.click();
    // uIMapPersonnel.performanceReviewEntry.uIEvaluationToDateEdit.sendKeys(Keys.CONTROL+"A");
    // uIMapPersonnel.performanceReviewEntry.uIEvaluationToDateEdit.sendKeys(Keys.DELETE);
    // System.out.println(Randomized.getPreviousDate(fromDate, "MM/dd/yyyy", 30));
    // uIMapPersonnel.performanceReviewEntry.uIEvaluationToDateEdit.sendKeys(Randomized.getPreviousDate(fromDate, "MM/dd/yyyy", 30));
  }

  async verify9511AckMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(9511)Period End Date must be later than Period From Date");
  }

  async enterEvaluationToDateAs1DayBeforeFromDate(fromDate: string): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.uIEvaluationToDateEdit.click();
    // uIMapPersonnel.performanceReviewEntry.uIEvaluationToDateEdit.sendKeys(Keys.CONTROL+"A");
    // uIMapPersonnel.performanceReviewEntry.uIEvaluationToDateEdit.sendKeys(Keys.DELETE);
    // System.out.println(Randomized.getPreviousDate(fromDate, "MM/dd/yyyy", 1));
    // uIMapPersonnel.performanceReviewEntry.uIEvaluationToDateEdit.sendKeys(Randomized.getPreviousDate(fromDate, "MM/dd/yyyy", 1));
  }

  async clickResetButton(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.uIResetIcon.click();
  }

  async enterAtPurpose(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.uIPurposeEdit.sendKeys(BaseData.getPersonnelModuleValue("Purpose"));
  }

  async verifyEvaluationPeriodFromAndToNotNull(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // !uIMapPersonnel.performanceReviewEntry.uIEvaluationFromDateEdit.getAttribute("value").isBlank(),
    // "Evaluation Period From Date is not contains value");
    // verify.ExpectedValueIsTrue(
    // !uIMapPersonnel.performanceReviewEntry.uIEvaluationFromTimeEdit.getAttribute("value").isBlank(),
    // "Evaluation Period From Time is not contains value");
    // verify.ExpectedValueIsTrue(
    // !uIMapPersonnel.performanceReviewEntry.uIEvaluationToDateEdit.getAttribute("value").isBlank(),
    // "Evaluation Period To Date is not contains value");
    // verify.ExpectedValueIsTrue(
    // !uIMapPersonnel.performanceReviewEntry.uIEvaluationToTimeEdit.getAttribute("value").isBlank(),
    // "Evaluation Period To Time is not contains value");
  }

  async verifyAtPurpose(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Purpose"),
    // uIMapPersonnel.performanceReviewEntry.uIPurposeEdit.getAttribute("value"));
  }

  async clickQAFormTab(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.uIQAFormTab.click();
  }

}

export class QAFormTabPage {
  readonly page: Page;
  readonly selectFormDropdown: Locator;
  readonly qAFromGrid: Locator;
  readonly selectForm: Locator;
  readonly fillFormButton: Locator;
  readonly qAformTabGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selectFormDropdown = page.locator('#cddForm_DropDown');
    this.qAFromGrid = page.locator('#grdQAForms');
    this.selectForm = page.locator('#cddForm_DropDown');
    this.fillFormButton = page.locator('#cmdTakeTest');
    this.qAformTabGrid = page.locator('#grdQAForms');
  }

  async selectAtForm(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption
    // (uIMapPersonnel.performanceReviewEntry.qAFormTab.uISelectFormDropdown,BaseData.getPersonnelModuleValue("Form"));
  }

  async verifyAtPfInGrid(): Promise<void> {
    // String Pf = objectIdentification.manualIdentify.getGridCell
    // (uIMapPersonnel.performanceReviewEntry.qAFormTab.uIQAFromGrid,BaseData.getPersonnelModuleValue("PF")).getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("PF"), Pf);
  }

  async verifyAtFormName(): Promise<void> {
    // String FormName = objectIdentification.manualIdentify.getGridCell
    // (uIMapPersonnel.performanceReviewEntry.qAFormTab.uIQAFromGrid,BaseData.getPersonnelModuleValue("FormName")).getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("FormName"),FormName);
  }

  async verifyDeleteIconIsDisplayedAndEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.performanceReviewEntry.uIDeleteIcon.isDisplayed());
    // verify.ExpectedValueIsTrue(uIMapPersonnel.performanceReviewEntry.uIDeleteIcon.isEnabled());
  }

  async clickDeleteIcon(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.uIDeleteIcon.click();
  }

  async verifyDeleteConfirmationPopUpIsNotPresent(): Promise<void> {
    // boolean alertsPresentConditions = objectIdentification.windowHandle.alertsPresentConditions();
    // verify.ExpectedValueIsFalse(alertsPresentConditions);
  }

  async verifyDeleteConfirmationandDisMiss(): Promise<void> {
    // popup.confirm.noWithContainsMessage("(4) Do you really want to delete?");
  }

  async verifyDeleteConfirmationandAccept(): Promise<void> {
    // popup.confirm.yesWithContainsMessage("(4) Do you really want to delete?");
  }

  async saveAndClose(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.uISaveAndCloseButton.click();
    // popup.confirm.yesWithExpectedMessage("(3) Do You Want To Save All Of The Entered Details?");
  }

}

export class SupervisorReportTabPage {
  readonly page: Page;
  readonly textEdit: Locator;
  readonly internalSave: Locator;

  constructor(page: Page) {
    this.page = page;
    this.textEdit = page.locator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
    this.internalSave = page.locator('#cmdInternalSave');
  }

  async enterAtText(): Promise<void> {
    // Playback.waitForControlReady();
    // Actions actions = new Actions(Playback.driver);
    // actions.moveToElement(uIMapPersonnel.performanceReviewEntry.supervisorReportTab.uITextEdit).click();
    // actions.sendKeys(BaseData.getPersonnelModuleValue("Text")).build().perform();
    // Playback.waitForControlReady();
  }

  async enterComments(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.supervisorReportTab.uITextEdit.sendKeys(Keys.ENTER);
    // uIMapPersonnel.performanceReviewEntry.supervisorReportTab.uITextEdit.sendKeys(Randomized.randomString(20));
  }

  async verifyAtText(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Text"),
    // uIMapPersonnel.performanceReviewEntry.supervisorReportTab.uITextEdit.getText());
  }

  async clickInternalSave(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.supervisorReportTab.uIInternalSave.click();
    // popup.confirm.yes();
  }

}

export class ApprovalTabPage {
  readonly page: Page;
  readonly actionDropDown: Locator;
  readonly supervisorPFCodeEdit: Locator;
  readonly supervisorPFInfoIcon: Locator;
  readonly dateEdit: Locator;
  readonly timeEdit: Locator;
  readonly saveTime: Locator;
  readonly approvalGrid: Locator;
  readonly internalSave: Locator;
  readonly raterPFLookUPButton: Locator;
  readonly reviewAssignedPFLookUPButton: Locator;
  readonly divisionComboBox: Locator;
  readonly sectionComboBox: Locator;
  readonly raterDateEdit: Locator;
  readonly raterTimeEdit: Locator;
  readonly squadCombobox: Locator;
  readonly reviewerPFLookUPButton: Locator;
  readonly nextReviewDueInDateEdit: Locator;
  readonly enableSignCheckBox: Locator;
  readonly raterSignCheckBox: Locator;
  readonly reviewerDateEdit: Locator;
  readonly declareCheckBox: Locator;
  readonly agreeSignCheckBox: Locator;
  readonly employeeDateEdit: Locator;
  readonly treeSymbolEdit: Locator;
  readonly reviewAssignedPFCodeEdit: Locator;
  readonly raterPFEdit: Locator;
  readonly raterSignImage: Locator;
  readonly raterTimeEditForFire: Locator;
  readonly newActionDropDown: Locator;
  readonly saveButton: Locator;
  readonly approvalTable: Locator;
  readonly dateEdit: Locator;
  readonly timeEdit: Locator;
  readonly authorizeAndSignCheckBox: Locator;
  readonly signImage: Locator;
  readonly rejectionCodeDropDown: Locator;
  readonly saveButton: Locator;
  readonly resetButton: Locator;
  readonly newActionComboBox: Locator;
  readonly dateEdit: Locator;
  readonly timeEdit: Locator;
  readonly notesEdit: Locator;
  readonly divisionComboBox: Locator;
  readonly sectionComboBox: Locator;
  readonly approvalGrid: Locator;
  readonly rejectionCodeDropDown: Locator;
  readonly rejectionCount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.actionDropDown = page.locator('#lstStatus');
    this.supervisorPFCodeEdit = page.locator('#lupSupervisor_CodeValue');
    this.supervisorPFInfoIcon = page.locator('#lupSupervisor_cmdIncOnAddr');
    this.dateEdit = page.locator('#dttStatusDttm_Date_KPIDttmCtrl');
    this.timeEdit = page.locator('#dttStatusDttm_Time');
    this.saveTime = page.locator('#cmdSave');
    this.approvalGrid = page.locator("//table[@id=\'listMsg\']");
    this.internalSave = page.locator('#cmdSave');
    this.raterPFLookUPButton = page.locator('#tabReview_tmpl2_usrApproval_lupRaterPF_imgBtn');
    this.reviewAssignedPFLookUPButton = page.locator('#tabReview_tmpl2_usrApproval_lupAssignPF_imgBtn');
    this.divisionComboBox = page.locator('#tabReview_tmpl2_usrApproval_cddDivision_DropDown');
    this.sectionComboBox = page.locator('#tabReview_tmpl2_usrApproval_cddSection_DropDown');
    this.raterDateEdit = page.locator('#tabReview_tmpl2_usrApproval_dttRaterDttm_Date_KPIDttmCtrl');
    this.raterTimeEdit = page.locator("(//table[@id = \'tabReview_tmpl2_usrApproval_dttRaterDttm_Time\'] //input[@class=\'textboxdatetime igte_BlueThemeEditInContainer\'])");
    this.squadCombobox = page.locator('#tabReview_tmpl2_usrApproval_cddSquad_DropDown');
    this.reviewerPFLookUPButton = page.locator('#tabReview_tmpl2_usrApproval_lupReviewerPF_imgBtn');
    this.nextReviewDueInDateEdit = page.locator('#tabReview_tmpl2_usrApproval_dttmNextReviewDueIn_Date_KPIDttmCtrl');
    this.enableSignCheckBox = page.locator('#tabReview_tmpl2_usrApproval_imgReviewer_chkIsEnableSign');
    this.raterSignCheckBox = page.locator('#tabReview_tmpl2_usrApproval_imgRaterSign_chkIsEnableSign');
    this.reviewerDateEdit = page.locator('#tabReview_tmpl2_usrApproval_dttmReviewerDate_Date_KPIDttmCtrl');
    this.declareCheckBox = page.locator('#tabReview_tmpl2_usrApproval_chkSign');
    this.agreeSignCheckBox = page.locator('#tabReview_tmpl2_usrApproval_imgAgree_chkIsEnableSign');
    this.employeeDateEdit = page.locator('#tabReview_tmpl2_usrApproval_dttmEmployeeRatedDate_Date_KPIDttmCtrl');
    this.treeSymbolEdit = page.locator('#tabReview_tmpl2_usrApproval_imgDivision');
    this.reviewAssignedPFCodeEdit = page.locator('#tabReview_tmpl2_usrApproval_lupAssignPF_CodeValue');
    this.raterPFEdit = page.locator('#tabReview_tmpl2_usrApproval_lupRaterPF_CodeValue');
    this.raterSignImage = page.locator('#tabReview$tmpl2$usrApproval$imgRaterSign$imgSign');
    this.raterTimeEditForFire = page.locator("(//table[@id=\'tabReview_tmpl2_usrApproval_dttRaterDttm_Time\']//input[@class=\'textboxdatetime igte_RedThemeEditInContainer\'])");
    this.newActionDropDown = page.locator('#lstStatus');
    this.saveButton = page.locator('#cmdSave');
    this.approvalTable = page.locator('#listMsg');
    this.dateEdit = page.locator('#dttStatusDttm_Date_KPIDttmCtrl');
    this.timeEdit = page.locator("//table[@id=\'dttStatusDttm_Time\']//input");
    this.authorizeAndSignCheckBox = page.locator('#imgPFSign_chkIsEnableSign');
    this.signImage = page.locator('#imgPFSign_imgSign');
    this.rejectionCodeDropDown = page.locator('#cddRejCode_DropDown');
    this.saveButton = page.locator('#cmdSave');
    this.resetButton = page.locator('#cmdReset');
    this.newActionComboBox = page.locator('#lstStatus');
    this.dateEdit = page.locator('#dttStatusDttm_Date_KPIDttmCtrl');
    this.timeEdit = page.locator("//table[@id=\'dttStatusDttm_Time\']//input");
    this.notesEdit = page.locator('#txtComments');
    this.divisionComboBox = page.locator('#cddDivision_DropDown');
    this.sectionComboBox = page.locator('#cddSection_DropDown');
    this.approvalGrid = page.locator("//table[@id=\'listMsg\']");
    this.rejectionCodeDropDown = page.locator('#cddRejCode_DropDown');
    this.rejectionCount = page.locator('#lblrejcountvalue');
  }

  async enterRaterPF(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uIRaterPFLookUPButton.click();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async enterReviewAssignedPF(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uIReviewAssignedPFLookUPButton.click();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async verifyDivisionDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // !uIMapPersonnel.performanceReviewEntry.approvalTab.uIDivisionComboBox.isEnabled());
  }

  async verifySectionDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // !uIMapPersonnel.performanceReviewEntry.approvalTab.uISectionComboBox.isEnabled());
  }

  async verifySectionFieldEnabled(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // verify.ExpectedValueIsTrue(uIMapPersonnel.performanceReviewEntry.approvalTab.uISectionComboBox.isEnabled());
  }

  async verifyTreeSymbloPresent(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uITreeSymbolEdit.isDisplayed());
  }

  async taboutRaterDate(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uIRaterDateEdit.sendKeys(Keys.TAB);
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uIRaterTimeEdit.sendKeys(Keys.TAB);
  }

  async selectSquad(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapPersonnel.performanceReviewEntry.approvalTab.uISquadCombobox);
  }

  async enterReviewerPF(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uIReviewerPFLookUPButton.click();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async enterNextReviewDate(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uINextReviewDueInDateEdit.sendKeys(Keys.TAB);
  }

  async clickEnableSignCheckBox(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uIEnableSignCheckBox.click();
  }

  async clickRaterSignCheckBox(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uIRaterSignCheckBox.click();
  }

  async enterReviewerDate(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uIReviewerDateEdit.sendKeys(Keys.TAB);
  }

  async clickDeclarationCheckBox(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uIDeclareCheckBox.click();
  }

  async clickAgreeCheckBox(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uIAgreeSignCheckBox.click();
  }

  async enterEmployeeDate(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uIEmployeeDateEdit.sendKeys(Keys.TAB);
  }

  async selectAtDivision(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uIDivisionComboBox,
    // BaseData.getPersonnelModuleValue("Division"));
  }

  async selectAtSection(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uISectionComboBox,
    // BaseData.getPersonnelModuleValue("Section"));
  }

  async verifySectionCountValue(): Promise<void> {
    // verify.ExpectedValueIsTrue(String
    // .valueOf(objectIdentification.manualIdentify.getDropDownOptionsCount(
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uISectionComboBox))
    // .contains(BaseData.getPersonnelModuleValue("AllSectionValues")));
  }

  async verifyAssociatedSectionCountValue(): Promise<void> {
    // verify.ExpectedValueIsTrue(String
    // .valueOf(objectIdentification.manualIdentify.getDropDownOptionsCount(
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uISectionComboBox))
    // .contains(BaseData.getPersonnelModuleValue("AssociatedSectionValue")));
  }

  async enterAtReviewAssignedPF(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uIReviewAssignedPFCodeEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("PFCode"));
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uIReviewAssignedPFCodeEdit.sendKeys(Keys.TAB);
  }

  async clearReviewAssignedPF(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uIReviewAssignedPFCodeEdit.clear();
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uIReviewAssignedPFCodeEdit.sendKeys(Keys.TAB);
  }

  async enterAtRaterPF(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uIRaterPFEdit.sendKeys(BaseData.getPersonnelModuleValue("RaterPF"));
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uIRaterPFEdit.sendKeys(Keys.TAB);
  }

  async taboutRaterDateForFire(): Promise<void> {
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uIRaterDateEdit.sendKeys(Keys.TAB);
    // uIMapPersonnel.performanceReviewEntry.approvalTab.uIRaterTimeEditForFire.sendKeys(Keys.TAB);
  }

}

export class PersonnelBatchUpdatePage {
  readonly page: Page;
  readonly searchButton: Locator;
  readonly backButton: Locator;
  readonly resetButton: Locator;
  readonly pFCodeEdit: Locator;
  readonly pFDesEdit: Locator;
  readonly divisionComboBox: Locator;
  readonly sectionComboBox: Locator;
  readonly loginUserNameEdit: Locator;
  readonly batchUpdateResultTable: Locator;
  readonly proceedButton: Locator;
  readonly groupTextView: Locator;
  readonly groupComboBox: Locator;
  readonly divisionTextView: Locator;
  readonly teamTextView: Locator;
  readonly teamComboBox: Locator;
  readonly sectionTextView: Locator;
  readonly includeInactiveCheckBox: Locator;
  readonly firstNameEdit: Locator;
  readonly lastNameEdit: Locator;
  readonly sortByDropDown: Locator;
  readonly shiftDropDown: Locator;
  readonly titleRankDropDown: Locator;
  readonly typeDropDown: Locator;
  readonly squadDropDown: Locator;
  readonly nextReviewDueInDropDown: Locator;
  readonly jobGradeDropDown: Locator;
  readonly supervisorEdit: Locator;
  readonly jurisDropDown: Locator;
  readonly nextReviewDueInDateEdit: Locator;
  readonly securityRolesDropDown: Locator;
  readonly specialSkillDropDown: Locator;
  readonly nextButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchButton = page.locator("//span[contains(text(),\'Search\')]");
    this.backButton = page.locator("//span[contains(text(),\'Back\')]");
    this.resetButton = page.locator("//span[contains(text(),\'Reset\')]");
    this.pFCodeEdit = page.locator('#lupOffPFID_CodeValue');
    this.pFDesEdit = page.locator('#lupOffPFID_CodeDescription');
    this.divisionComboBox = page.locator('#cddDivision_DropDown');
    this.sectionComboBox = page.locator('#cddSection_DropDown');
    this.loginUserNameEdit = page.locator('#txtLoginUserName');
    this.batchUpdateResultTable = page.locator('#grdPersonnel');
    this.proceedButton = page.locator("//span[contains(text(),\'Proceed\')]");
    this.groupTextView = page.locator('#lblWorkgroup');
    this.groupComboBox = page.locator('#cddWorkgroup_DropDown');
    this.divisionTextView = page.locator('#lblDivision');
    this.teamTextView = page.locator('#lblTeam');
    this.teamComboBox = page.locator('#cddTeam_DropDown');
    this.sectionTextView = page.locator('#lblSection');
    this.includeInactiveCheckBox = page.locator('#chkIsActive');
    this.firstNameEdit = page.locator('#txtFirstName');
    this.lastNameEdit = page.locator('#txtLastName');
    this.sortByDropDown = page.locator('#cddOrderBy');
    this.shiftDropDown = page.locator('#cddShift_DropDown');
    this.titleRankDropDown = page.locator('#cddTitleRank_DropDown');
    this.typeDropDown = page.locator('#cddType_DropDown');
    this.squadDropDown = page.locator('#cddSquad_DropDown');
    this.nextReviewDueInDropDown = page.locator('#cddNextReviewDuein_DropDown');
    this.jobGradeDropDown = page.locator('#cddJobGrade');
    this.supervisorEdit = page.locator('#lupSupervisor_CodeValue');
    this.jurisDropDown = page.locator('#lstJuris');
    this.nextReviewDueInDateEdit = page.locator('#dtmORBy_KPIDttmCtrl');
    this.securityRolesDropDown = page.locator('#cddSecurityRoles_DropDown');
    this.specialSkillDropDown = page.locator('#cddSpecialSkills_DropDown');
    this.nextButton = page.locator("//a[text()=\'NEXT\']");
  }

  async enterAtLoginUserName(): Promise<void> {
    // uIMapPersonnel.personnelBatchUpdate.uILoginUserNameEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("LoginUserName"));
  }

  async selectCheckBoxAtPFCodeGrid(JsonkEyIndex: number): Promise<void> {
    // if(JsonkEyIndex==0) {
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
    // uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable,
    // BaseData.getPersonnelModuleValue("PFCode"));
    // else {
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
    // uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable,
    // BaseData.getPersonnelModuleValue("PFCode"+JsonkEyIndex));
  }

  async clickSearchButton(): Promise<void> {
    // uIMapPersonnel.personnelBatchUpdate.uISearchButton.click();
  }

  async clickBackButton(): Promise<void> {
    // uIMapPersonnel.personnelBatchUpdate.uIBackButton.click();
    // Playback.controlReadyThreadWait();
  }

  async clickResetButton(): Promise<void> {
    // uIMapPersonnel.personnelBatchUpdate.uIResetButton.click();
    // Playback.controlReadyThreadWait();
  }

  async clickProceedButton(): Promise<void> {
    // uIMapPersonnel.personnelBatchUpdate.uIProceedButton.click();
  }

  async closeScreen(): Promise<void> {
    // uIMapPersonnel.personnelBatchUpdate.driver.close();
  }

  async enterAtPFCode(): Promise<void> {
    // uIMapPersonnel.personnelBatchUpdate.uIPFCodeEdit.sendKeys(BaseData.getPersonnelModuleValue("PFCode"));
    // uIMapPersonnel.personnelBatchUpdate.uIPFCodeEdit.sendKeys(Keys.TAB);
  }

  async verifyAtDivision(JsonKeyIndex: number): Promise<void> {
    // WebElement div = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable,
    // BaseData.getPersonnelModuleValue("PFCode"+JsonKeyIndex));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Division"+JsonKeyIndex),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable, div, "Division")
    // .getText());
  }

  async verifyAtShiftInGrid(): Promise<void> {
    // WebElement shift = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable,
    // BaseData.getPersonnelModuleValue("PFCode"));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Shift"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable, shift, "Shift")
    // .getText());
  }

  async verifySectionFieldIsEmpty(): Promise<void> {
    // WebElement sec = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable,
    // BaseData.getPersonnelModuleValue("PFCode"));
    // verify.ExpectedPropertyValueIsEqual("",
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable, sec, "Sections")
    // .getText());
  }

  async verifyAtSection(JsonKeyIndex: number): Promise<void> {
    // WebElement Asec = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable,
    // BaseData.getPersonnelModuleValue("PFCode"+JsonKeyIndex));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Section"+JsonKeyIndex),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable, Asec, "Section")
    // .getText());
  }

  async verifyAssignmentDate(EffectiveTime: string, JsonKeyIndex: number): Promise<void> {
    // String EffectiveDate=Randomized.getCurrentDate("MM/dd/yy");
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable, BaseData.getPersonnelModuleValue("PFName"+JsonKeyIndex), "Assignment Date").getText();
    // verify.ExpectedPropertyValueIsEqual(text, EffectiveDate+" "+EffectiveTime);
  }

  async selectAtPFCodeInGrid(JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable,
    // BaseData.getPersonnelModuleValue("PFCode"+JsonKeyIndex));
    // Playback.controlReadyThreadWait();
    // Playback.controlReadyThreadWait();
  }

  async doubleClickAtPFCodeInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.doubleClickGridRowByCellInnerText(
    // uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable,
    // BaseData.getPersonnelModuleValue("PFCode"));
  }

  async RandomdoubleClickOnAllColumn(): Promise<void> {
    // List<WebElement> Displayedcell = new ArrayList<WebElement>();
    // List<WebElement> rowsCollection = objectIdentification.manualIdentify
    // .getGridTableRowsCollection(uIMapPersonnel.personnelSearch.uIPersonnelResultTable);
    // for (WebElement row : rowsCollection) {
    // if (row.getAttribute("class").contains("igg_BlueThemeActiveRow")) {
    // List<WebElement> cells = row.findElements(By.tagName("td"));
    // for (WebElement cell : cells) {
    // if (cell.isDisplayed() == true) {
    // Displayedcell.add(cell);
    // for (WebElement c : Displayedcell) {
    // Playback.actionDriver.doubleClick(c).build().perform();
    // objectIdentification.windowHandle.switchToWindow("Personnel Entry");
    // Playback.driver.close();
    // objectIdentification.windowHandle.switchToWindow("Personnel Entry");
    // Playback.driver.close();
    // objectIdentification.windowHandle.switchToMainWindow();
    // objectIdentification.windowHandle.switchToMainWindowScreenTab("Personnel Search");
    // try {
    // c.sendKeys("12345");
    // String text = c.getText();
    // verify.ExpectedValueIsTrue(text.contains("12345"));
    // } catch (Error e) {
    // System.out.println("Element is non Editable");
  }

  async verifyAtColumnName(ColumnName: string): Promise<void> {
    // String gridHeaderTableRow = objectIdentification.manualIdentify.getGridHeaderTableRow(uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable).getText();
    // boolean contains = gridHeaderTableRow.contains(ColumnName);
    // verify.ExpectedValueIsTrue(contains);
  }

  async verifyAtShiftByPFName(JsonKeyIndex: number): Promise<void> {
    // String Shift = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable, BaseData.getPersonnelModuleValue("PFName"+JsonKeyIndex),"Shift").getText();
    // verify.ExpectedPropertyValueIsEqual(Shift, BaseData.getPersonnelModuleValue("Shift"+JsonKeyIndex));
  }

  async getGridColumnValues(JsonKeyIndex: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable,
    // BaseData.getPersonnelModuleValue("ColumnValue"+JsonKeyIndex));
    // return gridTableColumnValues;
  }

  async verifyAtColumnValuesAreSortedDescending(BeforeSortColumnValue: string[], JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedDescendingWithCaseInsensitive(uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable, JsonKeyIndex, BeforeSortColumnValue);
  }

  async getInactiveColumnValues(JsonKeyIndex: number): Promise<void> {
    // List<WebElement> findElements = Playback.driver.findElements(By.xpath("//div[@id='grdPersonnel']//tr//td//img[contains(@src,'ig_checkbox')]"));
    // List<String> actualStates = new ArrayList<>();
    // for (WebElement checkbox : findElements) {
    // if(checkbox.isDisplayed()==true) {
    // actualStates.add(checkbox.getAttribute("title"));
    // System.out.println(checkbox.getAttribute("src")+"--------");
    // String attribute = checkbox.getAttribute("src");
    // attribute.split(attribute, JsonKeyIndex);
    // // System.out.println(checkbox.isSelected());
    // return actualStates;
  }

  async verifyInactiveColumnSortAsAscendingOrder(actualStates: string[]): Promise<void> {
    // List<String> expectedAscending = new ArrayList<>(actualStates);
    // Collections.sort(expectedAscending);
    // verify.ExpectedValueIsTrue(expectedAscending.equals(actualStates));
  }

  async verifyInactiveColumnSortAsdescendingOrder(actualStates: string[], JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridHeaderColumnName(uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable,BaseData.getPersonnelModuleValue("ColumnValue" + JsonKeyIndex));
    // List<String>Aftersort  = getInactiveColumnValues(8);
    // int size = 	Aftersort.size();
    // for(int i=0 ; i<size ; i++) {
    // List<String>sorted = actualStates.stream().sorted(Comparator.reverseOrder()).collect(Collectors.toList());
    // String sortedvalue = sorted.get(i);
    // System.out.println(sortedvalue+"-----------"+Aftersort.get(i));
    // verify.ExpectedPropertyValueIsEqual(sortedvalue, Aftersort.get(i));
  }

  async getAssignmentDateColumnValues(JsonKeyIndex: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable,
    // BaseData.getPersonnelModuleValue("ColumnValue" + JsonKeyIndex));
    // List<String> dates = gridTableColumnValues.stream().map(dateTime -> dateTime.split(" ")[0])
    // .collect(Collectors.toList());
    // dates.removeIf(String::isEmpty);
    // return dates;
  }

  async datesSortingAsDescendingOrder(actualStates: string[], JsonKeyIndex: number): Promise<void> {
    // objectIdentification.windowHandle.switchToMainWindow();
    // switchToBatchUpdateSearch();
    // Playback.driver.findElement(By.xpath("(//div[@id='grdPersonnel']//th[text()='Assignment Date'])[2]")).click();
    // Randomized.verifyDatesSortingAsAscendingOrder(getAssignmentDateColumnValues(7), "MM/dd/yyyy");
  }

  async datesSortingAsAscendingOrder(actualStates: string[], JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridHeaderColumnNameWithoutContains(uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable, BaseData.getPersonnelModuleValue("ColumnValue"+JsonKeyIndex));
    // Randomized.verifyDatesSortingAsAscendingOrder(actualStates, "MM/dd/yyyy");
  }

  async verifyAtJobGradeByPFName(JsonKey: number): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable, BaseData.getPersonnelModuleValue("PFName"+JsonKey), "Job Grade").getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getPersonnelModuleValue("JobGrade"+JsonKey));
  }

  async clickInActiveCheckBox(): Promise<void> {
    // uIMapPersonnel.personnelBatchUpdate.uIIncludeInactiveCheckBox.click();
  }

  async verifyAtInactiveRowcolorByPFCode(): Promise<void> {
    // String cssValue = objectIdentification.manualIdentify.getGridRowByCellInnerText(uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable, BaseData.getPersonnelModuleValue("PFCode")).getCssValue("color");
    // System.out.println(cssValue);
    // verify.ExpectedPropertyValueIsEqual(cssValue, "rgba(128, 128, 128, 1)");
  }

  async enterAtFirstName(): Promise<void> {
    // uIMapPersonnel.personnelBatchUpdate.uIFirstNameEdit.sendKeys(BaseData.getPersonnelModuleValue("FirstName"));
  }

  async enterAtLastName(): Promise<void> {
    // uIMapPersonnel.personnelBatchUpdate.uILastNameEdit.sendKeys(BaseData.getPersonnelModuleValue("LastName"));
  }

  async selectAtSortBy(JsonKeyIndex: number): Promise<void> {
    // if(JsonKeyIndex==0) {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelBatchUpdate.uISortByDropDown, BaseData.getPersonnelModuleValue("SortBy"));
    // else {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelBatchUpdate.uISortByDropDown, BaseData.getPersonnelModuleValue("SortBy"+JsonKeyIndex));
  }

  async selectAtGroup(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelBatchUpdate.uIGroupComboBox, BaseData.getPersonnelModuleValue("Group"));
  }

  async selectAtDivision(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelBatchUpdate.uIDivisionComboBox, BaseData.getPersonnelModuleValue("Division"));
  }

  async selectAtSection(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelBatchUpdate.uISectionComboBox, BaseData.getPersonnelModuleValue("Section"));
  }

  async selectAtTeam(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelBatchUpdate.uITeamComboBox, BaseData.getPersonnelModuleValue("Team"));
  }

  async selectAtShift(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelBatchUpdate.uIShiftDropDown, BaseData.getPersonnelModuleValue("Shift"));
  }

  async selectAtType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelBatchUpdate.uITypeDropDown, BaseData.getPersonnelModuleValue("Type"));
  }

  async selectAtTitleRank(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelBatchUpdate.uITitleRankDropDown, BaseData.getPersonnelModuleValue("TitleRank"));
  }

  async selectAtSquad(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelBatchUpdate.uISquadDropDown, BaseData.getPersonnelModuleValue("Squad"));
  }

  async selectAtJobGrade(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelBatchUpdate.uIJobGradeDropDown, BaseData.getPersonnelModuleValue("JobGrade"));
  }

  async selectAtNextReviewDueIn(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelBatchUpdate.uINextReviewDueInDropDown, BaseData.getPersonnelModuleValue("NextReviewDueIn"));
  }

  async enterAtSupervisor(): Promise<void> {
    // uIMapPersonnel.personnelBatchUpdate.uISupervisorEdit.sendKeys(BaseData.getPersonnelModuleValue("Supervisor"));
    // uIMapPersonnel.personnelBatchUpdate.uISupervisorEdit.sendKeys(Keys.TAB);
  }

  async verifyAtTitleRankByPFName(JsonKey: number): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable, BaseData.getPersonnelModuleValue("PFName"+JsonKey), "Title/Rank").getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getPersonnelModuleValue("TitleRank"+JsonKey));
  }

  async verifyAtGroupByPFName(JsonKey: number): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable, BaseData.getPersonnelModuleValue("PFName"+JsonKey), "Group").getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getPersonnelModuleValue("Group"+JsonKey));
  }

  async verifyAtSupervisorByPFName(JsonKey: number): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable, BaseData.getPersonnelModuleValue("PFName"+JsonKey), "Supervisor").getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getPersonnelModuleValue("Supervisor"+JsonKey));
  }

  async selectAtJuris(JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelBatchUpdate.uIJurisDropDown,BaseData.getPersonnelModuleValue("Juris"+JsonKeyIndex));
  }

  async verifyAtColumnValuesAreSortedAscending(BeforeSortColumnValue: string[], JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedAscendingWithCaseInsensitive(uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable, JsonKeyIndex, BeforeSortColumnValue);
  }

  async enterAtNextReviewDate(): Promise<void> {
    // uIMapPersonnel.personnelBatchUpdate.uINextReviewDueInDateEdit.sendKeys(BaseData.getPersonnelModuleValue("NextReviewDate"));
  }

  async selectAtSecurityRoles(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelBatchUpdate.uISecurityRolesDropDown, BaseData.getPersonnelModuleValue("SecurityRoles"));
  }

  async selectAtSpecialSkills(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.personnelBatchUpdate.uISpecialSkillDropDown, BaseData.getPersonnelModuleValue("SpecialSkill"));
  }

  async clickHeaderColumnByName(JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridHeaderColumnNameWithoutContains(uIMapPersonnel.personnelBatchUpdate.uIBatchUpdateResultTable, BaseData.getPersonnelModuleValue("ColumnValue"+JsonKeyIndex));
  }

  async verifyTheFirstNameSortedOrder(UnsortedList: string[], sortedList: string[]): Promise<void> {
    // // Sort by first name (part after the comma)
    // UnsortedList.sort(Comparator.comparing(s -> s.split(",")[1].trim().toLowerCase()));
    // int size = UnsortedList.size();
    // for(int i=0 ; i>=size ; i++) {
    // verify.ExpectedPropertyValueIsEqual(sortedList.get(i), UnsortedList.get(i));
  }

  async verifyAtColumnValues(JsonKeyIndex: number, ColumnName: string): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapPersonnel.personnelSearch.uIPersonnelResultTable, BaseData.getPersonnelModuleValue("columnvalueName"+JsonKeyIndex));
    // for(String value:gridTableColumnValues) {
    // verify.ExpectedPropertyValueIsEqual(value, ColumnName);
  }

}

export class BatchUpdateEntryPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly assignmentDateEdit: Locator;
  readonly nextReviewDueInComboBox: Locator;
  readonly nextReviewDueInDateEdit: Locator;
  readonly typeDropDown: Locator;
  readonly divisionComboBox: Locator;
  readonly sectionComboBox: Locator;
  readonly workGroupComboBox: Locator;
  readonly effectiveTimeEdit: Locator;
  readonly effectiveDateLabel: Locator;
  readonly promotionSeniorityEdit: Locator;
  readonly shiftDropDown: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly printIcon: Locator;
  readonly titleRankDropDown: Locator;
  readonly teamDropDown: Locator;
  readonly detailRateTypeDropDown: Locator;
  readonly seniorityDropDown: Locator;
  readonly jobGradeDropDown: Locator;
  readonly refreshButton: Locator;
  readonly squadDropDown: Locator;
  readonly detailHierarchyOderDropDown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.assignmentDateEdit = page.locator('#dttmAssignmentDate_KPIDttmCtrl');
    this.nextReviewDueInComboBox = page.locator('#cddReviewdue_DropDown');
    this.nextReviewDueInDateEdit = page.locator('#dttmReviewdue_KPIDttmCtrl');
    this.typeDropDown = page.locator('#cddType_DropDown');
    this.divisionComboBox = page.locator('#cddDivision_DropDown');
    this.sectionComboBox = page.locator('#cddSection_DropDown');
    this.workGroupComboBox = page.locator('#cddWorkgroup_DropDown');
    this.effectiveTimeEdit = page.locator("//table[@id=\'dttmAssignmentTime_Time\']//input");
    this.effectiveDateLabel = page.locator('#lblAssignmentDate');
    this.promotionSeniorityEdit = page.locator('#txtPromotionSeniority');
    this.shiftDropDown = page.locator('#cddShift_DropDown');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.printIcon = page.locator('#cmdPrint');
    this.titleRankDropDown = page.locator('#cddRank_DropDown');
    this.teamDropDown = page.locator('#cddTeam_DropDown');
    this.detailRateTypeDropDown = page.locator('#cddDetailRateType_DropDown');
    this.seniorityDropDown = page.locator('#txtSeniority');
    this.jobGradeDropDown = page.locator('#cddJobGrade');
    this.refreshButton = page.locator('#cmdRefresh');
    this.squadDropDown = page.locator('#cddSquad_DropDown');
    this.detailHierarchyOderDropDown = page.locator('#cddDetailPeckingOrder_DropDown');
  }

  async enterAssignmentDate(): Promise<void> {
    // uIMapPersonnel.batchUpdateEntry.uIAssignmentDateEdit.click();
    // uIMapPersonnel.batchUpdateEntry.uIAssignmentDateEdit.sendKeys(Keys.TAB);
  }

  async closeScreen(): Promise<void> {
    // uIMapPersonnel.batchUpdateEntry.driver.close();
  }

  async selectNextReviewDueInAs1Month(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapPersonnel.batchUpdateEntry.uINextReviewDueInComboBox, "1 Month");
    // Playback.controlReadyThreadWait();
    // uIMapPersonnel.batchUpdateEntry.uINextReviewDueInComboBox.sendKeys(Keys.TAB);
  }

  async verifyNextReviewDueInAs1MonthFuture(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getFutureDateByMonth(1),
    // uIMapPersonnel.batchUpdateEntry.uINextReviewDueInDateEdit.getAttribute("value"));
  }

  async selectAtDivision(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.batchUpdateEntry.uIDivisionComboBox,
    // BaseData.getPersonnelModuleValue("Division"));
  }

  async clickSaveNClose(): Promise<void> {
    // uIMapPersonnel.batchUpdateEntry.uISaveAndCloseButton.click();
    // // popup.confirm.yes();
  }

  async enterEffectiveTimeAsCurrentTime(): Promise<void> {
    // uIMapPersonnel.batchUpdateEntry.uIEffectiveTimeEdit.click();
    // uIMapPersonnel.batchUpdateEntry.uIEffectiveTimeEdit.sendKeys(Randomized.getCurrentTime("HH:mm"));
    // uIMapPersonnel.batchUpdateEntry.uIEffectiveTimeEdit.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async selectAtSection(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.batchUpdateEntry.uISectionComboBox,
    // BaseData.getPersonnelModuleValue("Section"));
    // uIMapPersonnel.batchUpdateEntry.uISectionComboBox.sendKeys(Keys.TAB);
  }

  async verifyEffectiveDateFieldMandatory(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapPersonnel.batchUpdateEntry.uIEffectiveDateLabel.getAttribute("class").contains("Mandatory"));
  }

  async saveScreen(): Promise<void> {
    // uIMapPersonnel.batchUpdateEntry.uISaveButton.click();
    // Playback.controlReadyThreadWait();
    // popup.confirm.yes();
  }

  async clickSave(): Promise<void> {
    // uIMapPersonnel.batchUpdateEntry.uISaveButton.click();
    // Playback.controlReadyThreadWait();
  }

  async GetEffectiveTime(): Promise<string> {
    // String EffectiveTime = uIMapPersonnel.batchUpdateEntry.uIEffectiveTimeEdit.getAttribute("title");
    // return EffectiveTime;
  }

  async verifyEffectiveDateAsCurrentDate(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate(),
    // uIMapPersonnel.batchUpdateEntry.uIAssignmentDateEdit.getAttribute("value"));
  }

  async verifyEffectiveTime(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentTime("HH:MM"),
    // uIMapPersonnel.batchUpdateEntry.uIEffectiveTimeEdit.getAttribute("title"));
  }

  async verifyPromotionSeniorityDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.batchUpdateEntry.uIPromotionSeniorityEdit.isDisplayed());
  }

  async enterAtPromotionSeniority(): Promise<void> {
    // uIMapPersonnel.batchUpdateEntry.uIPromotionSeniorityEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("PromotionSeniority"));
    // uIMapPersonnel.batchUpdateEntry.uIPromotionSeniorityEdit.sendKeys(Keys.TAB);
  }

  async selectAtShift(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.batchUpdateEntry.uIShiftDropDown,
    // BaseData.getPersonnelModuleValue("Shift"));
  }

  async verifyUpdateSuccessfulStatusMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(
    // uIMapPersonnel.batchUpdateEntry.uIBottomLeftSideStatusBar.getText(),
    // "1003 - Update Successful");
  }

  async verifyAtShift(JsonKeyIndex: number): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapPersonnel.batchUpdateEntry.uIShiftDropDown);
    // verify.ExpectedPropertyValueIsEqual(dropDownSelectedItem, BaseData.getPersonnelModuleValue("Shift"+JsonKeyIndex));
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapPersonnel.batchUpdateEntry.uIPrintIcon.click();
  }

  async verifySelectReportScreenOpens(): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.windowHandle.windowExist("Select Report"));
  }

  async tabOutEffectiveDate(): Promise<void> {
    // uIMapPersonnel.batchUpdateEntry.uIAssignmentDateEdit.sendKeys(Keys.TAB);
  }

  async selectAtType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.batchUpdateEntry.uITypeDropDown, BaseData.getPersonnelModuleValue("Type"));
  }

  async selectAtTitleRank(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.batchUpdateEntry.uITitleRankDropDown, BaseData.getPersonnelModuleValue("TitleRank"));
  }

  async selectAtGroup(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.batchUpdateEntry.uIWorkGroupComboBox, BaseData.getPersonnelModuleValue("WorkGroup"));
  }

  async selectAtTeam(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.batchUpdateEntry.uITeamDropDown, BaseData.getPersonnelModuleValue("Team"));
  }

  async selectAtDetailRateType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.batchUpdateEntry.uIDetailRateTypeDropDown, BaseData.getPersonnelModuleValue("DetailRateType"));
  }

  async enterAtSeniority(): Promise<void> {
    // uIMapPersonnel.batchUpdateEntry.uISeniorityDropDown.sendKeys(BaseData.getPersonnelModuleValue("Seniority"));
  }

  async SelectAtJobGrade(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.batchUpdateEntry.uIJobGradeDropDown, BaseData.getPersonnelModuleValue("JobGrade"));
  }

  async SelectAtSquad(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.batchUpdateEntry.uISquadDropDown, BaseData.getPersonnelModuleValue("Squad"));
  }

  async SelectAtDetailHierarchyOrder(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.batchUpdateEntry.uIDetailHierarchyOderDropDown, BaseData.getPersonnelModuleValue("DetailHierarchyOrder"));
  }

  async clickRefreshButton(): Promise<void> {
    // uIMapPersonnel.batchUpdateEntry.uIRefreshButton.click();
  }

  async verifyAtDivision(JsonKeyIndex: number): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapPersonnel.batchUpdateEntry.uIDivisionComboBox);
    // verify.ExpectedPropertyValueIsEqual(dropDownSelectedItem, BaseData.getPersonnelModuleValue("Division"+JsonKeyIndex));
  }

  async selectAtShift(JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.batchUpdateEntry.uIShiftDropDown,
    // BaseData.getPersonnelModuleValue("Shift"+JsonKeyIndex));
  }

  async selectAtDivision(jsonkeyindex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.batchUpdateEntry.uIDivisionComboBox,
    // BaseData.getPersonnelModuleValue("Division"+jsonkeyindex));
  }

  async verify3230AcknlowledgePopUp(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(3230) Warning â€“ Cannot assign multiple divisions to a single section/battalion. Please re-enter.");
  }

  async selectAtNextReviewDue(jsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.batchUpdateEntry.uINextReviewDueInComboBox,
    // BaseData.getPersonnelModuleValue("NextReviewDueIn" + jsonKeyIndex));
    // Playback.controlReadyThreadWait();
    // uIMapPersonnel.batchUpdateEntry.uINextReviewDueInComboBox.sendKeys(Keys.TAB);
  }

}

export class WorkHistorySearchPage {
  readonly page: Page;
  readonly nextIcon: Locator;
  readonly workHistorySearchResultTable: Locator;
  readonly searchButton: Locator;
  readonly prevIcon: Locator;
  readonly divisionTextView: Locator;
  readonly divisionDropDown: Locator;
  readonly teamTextView: Locator;
  readonly teamDropDown: Locator;
  readonly sectionTextView: Locator;
  readonly sectionDropDown: Locator;
  readonly addNewButton: Locator;
  readonly reference: Locator;
  readonly printIconButton: Locator;
  readonly squadDropDown: Locator;
  readonly enterdByPFEdit: Locator;
  readonly commentDateEdit: Locator;
  readonly commentTimeEdit: Locator;
  readonly dispositionDropDown: Locator;
  readonly categoryDropDown: Locator;
  readonly subCategoryDropDown: Locator;
  readonly shiftDropDown: Locator;
  readonly supervisorEdit: Locator;
  readonly backButton: Locator;
  readonly resetButton: Locator;
  readonly forPFInfoIcon: Locator;
  readonly commentToDate: Locator;
  readonly commentToTimeEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nextIcon = page.locator('#grdPersonnelcmtSrch_ctl00_lnkbtnNext');
    this.workHistorySearchResultTable = page.locator('#grdPersonnelcmtSrch');
    this.searchButton = page.locator("//span[contains(text(),\'Search\')]");
    this.prevIcon = page.locator('#grdPersonnelcmtSrch_ctl00_lnkbtnPrev');
    this.divisionTextView = page.locator('#lblDivision');
    this.divisionDropDown = page.locator('#cddDivision_DropDown');
    this.teamTextView = page.locator('#lblTeam');
    this.teamDropDown = page.locator('#cddTeam_DropDown');
    this.sectionTextView = page.locator('#lblSection');
    this.sectionDropDown = page.locator('#cddSection_DropDown');
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.reference = page.locator('#txtReference');
    this.printIconButton = page.locator("//img[@src = \'/KPIImages/ico/16_print.gif\']");
    this.squadDropDown = page.locator('#cddSquad_DropDown');
    this.enterdByPFEdit = page.locator('#lupEntbyPF_CodeValue');
    this.commentDateEdit = page.locator('#dttmCommentDate_Date_KPIDttmCtrl');
    this.commentTimeEdit = page.locator("//table[@id=\'dttmCommentDate_Time\']//input");
    this.dispositionDropDown = page.locator('#cddDisposition_DropDown');
    this.categoryDropDown = page.locator('#cddCategory_DropDown');
    this.subCategoryDropDown = page.locator('#cddSubCategory');
    this.shiftDropDown = page.locator('#cddShift_DropDown');
    this.supervisorEdit = page.locator('#lupSupervisor_CodeValue');
    this.backButton = page.locator("//span[text()=\'Back\']");
    this.resetButton = page.locator("//span[text()=\'Reset\']");
    this.forPFInfoIcon = page.locator('#lupForPF_cmdIncOnAddr');
    this.commentToDate = page.locator('#dttmTo_Date_KPIDttmCtrl');
    this.commentToTimeEdit = page.locator("//table[@id=\'dttmTo_Time\']//input");
  }

  async clickSearchButton(): Promise<void> {
    // uIMapPersonnel.workHistorySearch.uISearchButton.click();
  }

  async verifyNextIconDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.workHistorySearch.uINextIcon.isDisplayed());
  }

  async clickAddNew(): Promise<void> {
    // uIMapPersonnel.workHistorySearch.uIAddNewButton.click();
  }

  async enterAtReference(): Promise<void> {
    // uIMapPersonnel.workHistorySearch.uIReference.sendKeys(BaseData.getPersonnelModuleValue("Reference"));
    // uIMapPersonnel.workHistorySearch.uIReference.sendKeys(Keys.TAB);
  }

  async verifyAtReferenceField(): Promise<void> {
    // String Text = uIMapPersonnel.workHistorySearch.uIReference.getAttribute("value");
    // verify.ExpectedValueIsFalse(Text.contains(BaseData.getPersonnelModuleValue("Reference")));
  }

  async enterAtReference1(): Promise<void> {
    // uIMapPersonnel.workHistorySearch.uIReference.sendKeys(BaseData.getPersonnelModuleValue("Reference1"));
    // uIMapPersonnel.workHistorySearch.uIReference.sendKeys(Keys.TAB);
  }

  async verifyAtReferenceField1(): Promise<void> {
    // String Text = uIMapPersonnel.workHistorySearch.uIReference.getAttribute("value");
    // System.out.println(Text);
    // verify.ExpectedPropertyValueIsEqual(Text, BaseData.getPersonnelModuleValue("Reference2"));
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapPersonnel.workHistorySearch.uIPrintIconButton.click();
    // Playback.controlReadyThreadWait();
  }

  async selectAtPFCodeInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapPersonnel.workHistorySearch.uIWorkHistorySearchResultTable, BaseData.getPersonnelModuleValue("PFCode"));
  }

  async selectAtPFNameInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerTextWithoutContains(uIMapPersonnel.workHistorySearch.uIWorkHistorySearchResultTable, BaseData.getPersonnelModuleValue("PFName"));
  }

  async selectAtDivision(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.workHistorySearch.uIDivisionDropDown,BaseData.getPersonnelModuleValue("Division"));
  }

  async selectAtSection(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.workHistorySearch.uISectionDropDown,
    // BaseData.getPersonnelModuleValue("Section"));
  }

  async selectAtTeam(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.workHistorySearch.uITeamDropDown,
    // BaseData.getPersonnelModuleValue("Team"));
  }

  async selectAtSquad(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.workHistorySearch.uISquadDropDown,
    // BaseData.getPersonnelModuleValue("Squad"));
  }

  async selectAtShift(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.workHistorySearch.uIShiftDropDown,
    // BaseData.getPersonnelModuleValue("Shift"));
  }

  async enterAtEnteredByPF(): Promise<void> {
    // uIMapPersonnel.workHistorySearch.uIEnterdByPFEdit.sendKeys(BaseData.getPersonnelModuleValue("EnteredByPF"));
    // uIMapPersonnel.workHistorySearch.uIEnterdByPFEdit.sendKeys(Keys.TAB);
  }

  async enterAtCommentDate(): Promise<void> {
    // uIMapPersonnel.workHistorySearch.uICommentDateEdit.click();
    // uIMapPersonnel.workHistorySearch.uICommentDateEdit.sendKeys(BaseData.getPersonnelModuleValue("CommentDate"));
  }

  async enterAtCommentTime(): Promise<void> {
    // uIMapPersonnel.workHistorySearch.uICommentTimeEdit.click();
    // uIMapPersonnel.workHistorySearch.uICommentTimeEdit.sendKeys(BaseData.getPersonnelModuleValue("CommentTime"));
  }

  async selectAtCategory(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.workHistorySearch.uICategoryDropDown,
    // BaseData.getPersonnelModuleValue("Category"));
    // uIMapPersonnel.workHistorySearch.uICategoryDropDown.sendKeys(Keys.TAB);
  }

  async selectAtSubCategory(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.workHistorySearch.uISubCategoryDropDown,
    // BaseData.getPersonnelModuleValue("SubCategory"));
  }

  async EnterAtSupervisor(): Promise<void> {
    // uIMapPersonnel.workHistorySearch.uISupervisorEdit.sendKeys(BaseData.getPersonnelModuleValue("Supervisior"));
  }

  async selectAtDisposition(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.workHistorySearch.uIDispositionDropDown,
    // BaseData.getPersonnelModuleValue("Disposition"));
  }

  async verifyAtPFCodeByPFName(): Promise<void> {
    // String PFCode = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.workHistorySearch.uIWorkHistorySearchResultTable, BaseData.getPersonnelModuleValue("PFName"), "PF Code").getText();
    // verify.ExpectedPropertyValueIsEqual(PFCode, BaseData.getPersonnelModuleValue("PFCode"));
  }

  async clickBackButton(): Promise<void> {
    // uIMapPersonnel.workHistorySearch.uIBackButton.click();
  }

  async clickResetButton(): Promise<void> {
    // uIMapPersonnel.workHistorySearch.uIResetButton.click();
  }

  async verifyAtEnteredByPFByPFName(): Promise<void> {
    // String EnteredByPF = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.workHistorySearch.uIWorkHistorySearchResultTable, BaseData.getPersonnelModuleValue("PFName"), "Entered By PF").getText();
    // verify.ExpectedPropertyValueIsEqual(EnteredByPF, BaseData.getPersonnelModuleValue("EnteredByPF"));
  }

  async selectAtSubjectInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerTextWithoutContains(uIMapPersonnel.workHistorySearch.uIWorkHistorySearchResultTable, BaseData.getPersonnelModuleValue("Subject"));
  }

  async verifyAtPeriodFromDatesAreWithInRange(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapPersonnel.workHistorySearch.uIWorkHistorySearchResultTable, BaseData.getPersonnelModuleValue("Fromcolumnvalue"));
    // Randomized.verifyTheDatesGreaterOrEqualFromDateWithTwoFormats(gridTableColumnValues, BaseData.getPersonnelModuleValue("FromDate"));
  }

  async verifyAtPeriodToDatesAreWithInRange(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapPersonnel.workHistorySearch.uIWorkHistorySearchResultTable, BaseData.getPersonnelModuleValue("Tocolumnvalue"));
    // Randomized.verifyTheDatesLessOrEqualToDate(gridTableColumnValues, Randomized.getCurrentDate());
  }

  async enterToCommentDateAsCurrentDate(): Promise<void> {
    // uIMapPersonnel.workHistorySearch.uICommentToDate.sendKeys(Randomized.getCurrentDate());
  }

  async enterToCommentTimeAsCurrentTime(): Promise<void> {
    // uIMapPersonnel.workHistorySearch.uICommentToTimeEdit.click();
    // uIMapPersonnel.workHistorySearch.uICommentToTimeEdit.sendKeys(Randomized.getCurrentTime());
  }

  async enterAtToCommentDate(): Promise<void> {
    // uIMapPersonnel.workHistorySearch.uICommentToDate.sendKeys(BaseData.getPersonnelModuleValue("ToCommentDate"));
  }

  async enterAtToCommentTime(): Promise<void> {
    // uIMapPersonnel.workHistorySearch.uICommentToTimeEdit.click();
    // uIMapPersonnel.workHistorySearch.uICommentToTimeEdit.sendKeys(BaseData.getPersonnelModuleValue("ToCommentTime"));
  }

}

export class InjuryRptSearchPage {
  readonly page: Page;
  readonly nextIcon: Locator;
  readonly injuryRptSearchResultTable: Locator;
  readonly searchButton: Locator;
  readonly prevIcon: Locator;
  readonly divisionTextView: Locator;
  readonly divisionComboBox: Locator;
  readonly teamTextView: Locator;
  readonly teamComboBox: Locator;
  readonly sectionTextView: Locator;
  readonly sectionComboBox: Locator;
  readonly addNewButton: Locator;
  readonly refEditField: Locator;
  readonly backButton: Locator;
  readonly resetButton: Locator;
  readonly jurisDropDown: Locator;
  readonly pfCodeValueEditField: Locator;
  readonly squadDropDown: Locator;
  readonly injuryOccuredDateEdit: Locator;
  readonly typeOFInjuryDropDown: Locator;
  readonly activityAtTimeOfInjuryDropDown: Locator;
  readonly injuryOccuredTimeEdit: Locator;
  readonly printIcon: Locator;
  readonly shiftDropDown: Locator;
  readonly excelIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nextIcon = page.locator('#grdInjury_ctl00_lnkbtnNext');
    this.injuryRptSearchResultTable = page.locator('#grdInjury');
    this.searchButton = page.locator("//span[contains(text(),\'Search\')]");
    this.prevIcon = page.locator('#grdInjury_ctl00_lnkbtnPrev');
    this.divisionTextView = page.locator('#lblDivision');
    this.divisionComboBox = page.locator('#cddDivision_DropDown');
    this.teamTextView = page.locator('#lblTeam');
    this.teamComboBox = page.locator('#cddTeam_DropDown');
    this.sectionTextView = page.locator('#lblSection');
    this.sectionComboBox = page.locator('#cddSection_DropDown');
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.refEditField = page.locator('#txtRefCall');
    this.backButton = page.locator("//span[contains(text(),\'Back\')]");
    this.resetButton = page.locator("//span[contains(text(),\'Reset\')]");
    this.jurisDropDown = page.locator('#lstJuris');
    this.pfCodeValueEditField = page.locator('#lupPF_CodeValue');
    this.squadDropDown = page.locator('#cddSquad_DropDown');
    this.injuryOccuredDateEdit = page.locator('#dttmInjuryOccurredDate_Date_KPIDttmCtrl');
    this.typeOFInjuryDropDown = page.locator('#cddTypeofInjury_DropDown');
    this.activityAtTimeOfInjuryDropDown = page.locator('#cddActivity_DropDown');
    this.injuryOccuredTimeEdit = page.locator("//table[@id=\'dttmInjuryOccurredDate_Time\']//input");
    this.printIcon = page.locator("img[title=\'Print\']");
    this.shiftDropDown = page.locator('#cddShift_DropDown');
    this.excelIcon = page.locator("img[title=\'Export to Excel\']");
  }

  async clickSearchButton(): Promise<void> {
    // uIMapPersonnel.injuryRptSearch.uISearchButton.click();
  }

  async verifyNextIconDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.injuryRptSearch.uINextIcon.isDisplayed());
  }

  async clickAddNew(): Promise<void> {
    // uIMapPersonnel.injuryRptSearch.uIAddNewButton.click();
  }

  async clickBack(): Promise<void> {
    // uIMapPersonnel.injuryRptSearch.uIBackButton.click();
  }

  async clickReset(): Promise<void> {
    // uIMapPersonnel.injuryRptSearch.uIResetButton.click();
  }

  async selectAtPFCodeInGrid(JsonKeyIndex: number): Promise<void> {
    // if(JsonKeyIndex==0) {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapPersonnel.injuryRptSearch.uIInjuryRptSearchResultTable,BaseData.getPersonnelModuleValue("PFCode") );
    // else {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapPersonnel.injuryRptSearch.uIInjuryRptSearchResultTable,BaseData.getPersonnelModuleValue("PFCode"+JsonKeyIndex) );
  }

  async enterAtRef(): Promise<void> {
    // uIMapPersonnel.injuryRptSearch.uIRefEditField.click();
    // uIMapPersonnel.injuryRptSearch.uIRefEditField.sendKeys(BaseData.getPersonnelModuleValue("Ref"));
  }

  async enterAtPf(): Promise<void> {
    // uIMapPersonnel.injuryRptSearch.uIPfCodeValueEditField.sendKeys(BaseData.getPersonnelModuleValue("PFCode"));
    // uIMapPersonnel.injuryRptSearch.uIPfCodeValueEditField.sendKeys(Keys.TAB);
  }

  async verifyAtRef(): Promise<void> {
    // String txt = uIMapPersonnel.injuryRptSearch.uIRefEditField.getAttribute("value");
    // System.out.println(txt);
    // verify.ExpectedPropertyValueIsNotEqual(BaseData.getPersonnelModuleValue("Ref"),txt);
  }

  async selectAtDivision(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.injuryRptSearch.uIDivisionComboBox,
    // BaseData.getPersonnelModuleValue("Division"));
  }

  async verifyAtDivisionByPFCodeInGrid(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapPersonnel.injuryRptSearch.uIInjuryRptSearchResultTable,
    // BaseData.getPersonnelModuleValue("PFCode"), "Division");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Division"), gridCell.getText());
  }

  async verifyNoRecordFoundMessageAcknowledge(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
  }

  async verifyRecordcountIsNotNull(): Promise<void> {
    // int gridTableRowsCount = objectIdentification.manualIdentify.getGridTableRowsCount(	uIMapPersonnel.injuryRptSearch.uIInjuryRptSearchResultTable);
    // verify.ExpectedValueIsTrue(gridTableRowsCount>0);
  }

  async selectAtJuris(jsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.injuryRptSearch.uIJurisDropDown,BaseData.getPersonnelModuleValue("Juris"+jsonKeyIndex));}
  }

  async verifyJurisColumnAsNull(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapPersonnel.injuryRptSearch.uIInjuryRptSearchResultTable, "Juris");
    // for(String values : gridTableColumnValues) {
    // verify.ExpectedValueIsTrue(values.isBlank());
  }

  async verifyAllJurisAreLisited(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapPersonnel.injuryRptSearch.uIInjuryRptSearchResultTable, "Juris");
    // boolean contains = gridTableColumnValues.contains("");
    // boolean contains1 = gridTableColumnValues.contains("BC");
    // verify.ExpectedValueIsTrue(contains);
    // verify.ExpectedValueIsTrue(contains1);
  }

  async selectAtSection(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.injuryRptSearch.uISectionComboBox, BaseData.getPersonnelModuleValue("Section"));
  }

  async selectAtsquad(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.injuryRptSearch.uISquadDropDown, BaseData.getPersonnelModuleValue("Squad"));
  }

  async selectAtTypeOfInjury(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.injuryRptSearch.uITypeOFInjuryDropDown, BaseData.getPersonnelModuleValue("TypeOFInjury"));
  }

  async selectAtActivityAtTimeOfInjury(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.injuryRptSearch.uIActivityAtTimeOfInjuryDropDown, BaseData.getPersonnelModuleValue("ActivityAtTimeOfInjury"));
  }

  async selectAtTeam(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.injuryRptSearch.uITeamComboBox, BaseData.getPersonnelModuleValue("Team"));
  }

  async enterAtInjuryOccuredDateAndTime(): Promise<void> {
    // uIMapPersonnel.injuryRptSearch.uIInjuryOccuredDateEdit.sendKeys(BaseData.getPersonnelModuleValue("InjuryOccuredDate"));
    // uIMapPersonnel.injuryRptSearch.uIInjuryOccuredTimeEdit.sendKeys(BaseData.getPersonnelModuleValue("InjuryOccuredTime"));
  }

  async selectAtShift(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.injuryRptSearch.uIShiftDropDown, BaseData.getPersonnelModuleValue("Shift"));
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapPersonnel.injuryRptSearch.uIPrintIcon.click();
  }

  async clickExcelIcon(): Promise<void> {
    // uIMapPersonnel.injuryRptSearch.uIExcelIcon.click();
  }

  async getColumnHeaderName(): Promise<void> {
    // WebElement gridHeaderTableRow = objectIdentification.manualIdentify.getGridHeaderTableRow(uIMapPersonnel.injuryRptSearch.uIInjuryRptSearchResultTable);
    // List<WebElement> findElements = gridHeaderTableRow.findElements(By.xpath(".//th"));
    // List<String> value = new ArrayList<String>();
    // for(WebElement Elements:findElements) {
    // if(!(Elements.getText()==null)&&!(Elements.getText()=="")) {
    // value.add(Elements.getText());
    // return value;
  }

  async verifyAtJurisColumn(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapPersonnel.injuryRptSearch.uIInjuryRptSearchResultTable, "Juris");
    // for(String values : gridTableColumnValues) {
    // verify.ExpectedValueIsTrue(values.contains(BaseData.getPersonnelModuleValue("OtherJuris"))||values.isBlank());
  }

}

export class MedHistorySearchPage {
  readonly page: Page;
  readonly nextIcon: Locator;
  readonly medHistorySearchResultTable: Locator;
  readonly searchButton: Locator;
  readonly prevIcon: Locator;
  readonly divisionTextView: Locator;
  readonly divisionComboBox: Locator;
  readonly teamTextView: Locator;
  readonly teamComboBox: Locator;
  readonly sectionTextView: Locator;
  readonly sectionComboBox: Locator;
  readonly addNewButton: Locator;
  readonly backButton: Locator;
  readonly enteredByPFEdit: Locator;
  readonly pFEdit: Locator;
  readonly resetButton: Locator;
  readonly squadDropDown: Locator;
  readonly dateEdit: Locator;
  readonly timeEdit: Locator;
  readonly medicalCode: Locator;
  readonly shiftDropDown: Locator;
  readonly printIcon: Locator;
  readonly excelIcon: Locator;
  readonly historyToDateEdit: Locator;
  readonly historyToTimeEdit: Locator;
  readonly jurisDropDown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nextIcon = page.locator('#grdMedicalHist_ctl00_lnkbtnNext');
    this.medHistorySearchResultTable = page.locator('#grdMedicalHist');
    this.searchButton = page.locator("//span[contains(text(),\'Search\')]");
    this.prevIcon = page.locator('#grdMedicalHist_ctl00_lnkbtnPrev');
    this.divisionTextView = page.locator('#lblDivision');
    this.divisionComboBox = page.locator('#cddDivision_DropDown');
    this.teamTextView = page.locator('#lblTeam');
    this.teamComboBox = page.locator('#cddTeam_DropDown');
    this.sectionTextView = page.locator('#lblSection');
    this.sectionComboBox = page.locator('#cddSection_DropDown');
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.backButton = page.locator("//span[text()=\'Back\']");
    this.enteredByPFEdit = page.locator('#lupEnteredBy_CodeValue');
    this.pFEdit = page.locator('#lupPF_CodeValue');
    this.resetButton = page.locator("//span[text()=\'Reset\']");
    this.squadDropDown = page.locator('#cddSquad_DropDown');
    this.dateEdit = page.locator('#dttmDate_Date_KPIDttmCtrl');
    this.timeEdit = page.locator("//table[@id=\'dttmDate_Time\']//input");
    this.medicalCode = page.locator('#cddMedicalCode_DropDown');
    this.shiftDropDown = page.locator('#cddShift_DropDown');
    this.printIcon = page.locator("img[title=\'Print\']");
    this.excelIcon = page.locator("img[title=\'Export to Excel\']");
    this.historyToDateEdit = page.locator('#dttmTo_Date_KPIDttmCtrl');
    this.historyToTimeEdit = page.locator("//table[@id=\'dttmTo_Time\']//input");
    this.jurisDropDown = page.locator('#lstJuris');
  }

  async clickSearchButton(): Promise<void> {
    // uIMapPersonnel.medHistorySearch.uISearchButton.click();
  }

  async verifyNextIconDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.medHistorySearch.uINextIcon.isDisplayed());
  }

  async clickAddNew(): Promise<void> {
    // uIMapPersonnel.medHistorySearch.uIAddNewButton.click();
  }

  async selectRandomRowInGrid(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow(uIMapPersonnel.medHistorySearch.uIMedHistorySearchResultTable);
  }

  async verifyAtPFCodeIsNotInGrid(): Promise<void> {
    // List<WebElement> pFCodes = objectIdentification.manualIdentify.getGridTableColumnCells(uIMapPersonnel.medHistorySearch.uIMedHistorySearchResultTable, "PF Code");
    // for(WebElement pFCode:pFCodes) {
    // verify.ExpectedPropertyValueIsNotEqual(BaseData.getPersonnelModuleValue("PFCode"),pFCode.getText());
  }

  async clickBackbutton(): Promise<void> {
    // uIMapPersonnel.medHistorySearch.uIBackButton.click();
  }

  async enterAtEnteredBy(): Promise<void> {
    // uIMapPersonnel.medHistorySearch.uIEnteredByPFEdit.sendKeys(BaseData.getPersonnelModuleValue("EnteredBy"));
  }

  async selectAtNotesInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapPersonnel.medHistorySearch.uIMedHistorySearchResultTable, BaseData.getPersonnelModuleValue("Notes"));
  }

  async verifyNoRecordFoundAcknowledgePopUp(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
  }

  async enterAtPF(): Promise<void> {
    // uIMapPersonnel.medHistorySearch.uIPFEdit.sendKeys(BaseData.getPersonnelModuleValue("PF"));
  }

  async verifyPFCodeWithPFName(): Promise<void> {
    // String PFCode = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.medHistorySearch.uIMedHistorySearchResultTable, BaseData.getPersonnelModuleValue("PFName"), "PF Code").getText();
    // verify.ExpectedPropertyValueIsEqual(PFCode, BaseData.getPersonnelModuleValue("PFCode"));
  }

  async clickResetButton(): Promise<void> {
    // uIMapPersonnel.medHistorySearch.uIResetButton.click();
  }

  async selectAtSquad(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.medHistorySearch.uISquadDropDown, BaseData.getPersonnelModuleValue("Squad"));
  }

  async selectAtDivision(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.medHistorySearch.uIDivisionComboBox, BaseData.getPersonnelModuleValue("Division"));
  }

  async selectAtSection(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.medHistorySearch.uISectionComboBox, BaseData.getPersonnelModuleValue("Section"));
  }

  async selectAtTeam(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.medHistorySearch.uITeamComboBox, BaseData.getPersonnelModuleValue("Team"));
  }

  async selectAtShift(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.medHistorySearch.uIShiftDropDown, BaseData.getPersonnelModuleValue("Shift"));
  }

  async EnterAtHistoryDateAndTime(): Promise<void> {
    // uIMapPersonnel.medHistorySearch.uIDateEdit.click();
    // uIMapPersonnel.medHistorySearch.uIDateEdit.sendKeys(BaseData.getPersonnelModuleValue("Date"));
    // uIMapPersonnel.medHistorySearch.uITimeEdit.click();
    // uIMapPersonnel.medHistorySearch.uITimeEdit.sendKeys(BaseData.getPersonnelModuleValue("Time"));
  }

  async selectAtMedicalCode(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.medHistorySearch.uIMedicalCode, BaseData.getPersonnelModuleValue("Medicalcode"));
  }

  async verifyAtMedicalCodeWithPFcode(): Promise<void> {
    // String gridCell = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.medHistorySearch.uIMedHistorySearchResultTable, BaseData.getPersonnelModuleValue("PFCode"), "Medical Code").getText();
    // verify.ExpectedPropertyValueIsEqual(gridCell, BaseData.getPersonnelModuleValue("Medicalcode"));
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapPersonnel.medHistorySearch.uIPrintIcon.click();
  }

  async clickExcelIcon(): Promise<void> {
    // uIMapPersonnel.medHistorySearch.uIExcelIcon.click();
  }

  async getHeaderColumn(): Promise<void> {
    // WebElement gridHeaderTableRow = objectIdentification.manualIdentify.getGridHeaderTableRow(uIMapPersonnel.medHistorySearch.uIMedHistorySearchResultTable);
    // List<WebElement> findElements = gridHeaderTableRow.findElements(By.xpath(".//th"));
    // List<String> value = new ArrayList<String>();
    // for(WebElement Elements:findElements) {
    // if(!(Elements.getText()==null)&&!(Elements.getText()=="")) {
    // value.add(Elements.getText());
    // return value;
  }

  async enterAtHistoryToDateAndTime(): Promise<void> {
    // uIMapPersonnel.medHistorySearch.uIHistoryToDateEdit.click();
    // uIMapPersonnel.medHistorySearch.uIHistoryToDateEdit.sendKeys(BaseData.getPersonnelModuleValue("ToDate"));
    // uIMapPersonnel.medHistorySearch.uIHistoryToTimeEdit.click();
    // uIMapPersonnel.medHistorySearch.uIHistoryToTimeEdit.sendKeys(BaseData.getPersonnelModuleValue("ToTime"));
  }

  async selectAtJuris(JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.medHistorySearch.uIJurisDropDown, BaseData.getPersonnelModuleValue("Juris"+JsonKeyIndex));
  }

  async verifyRowCountIsNotZero(): Promise<void> {
    // int gridTableRowsCount = objectIdentification.manualIdentify.getGridTableRowsCount(uIMapPersonnel.medHistorySearch.uIMedHistorySearchResultTable);
    // verify.ExpectedValueIsTrue(!(gridTableRowsCount==0));
  }

  async verifyTheJurisColumnValueIsNull(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapPersonnel.medHistorySearch.uIMedHistorySearchResultTable, BaseData.getPersonnelModuleValue("ColumnNameJuris"));
    // boolean allMatch = gridTableColumnValues.stream()
    // .allMatch(s -> s == null || s.trim().isEmpty());
    // verify.ExpectedValueIsTrue(allMatch);
  }

  async verifyAtJuris(JsonKeyIndex: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapPersonnel.medHistorySearch.uIMedHistorySearchResultTable, BaseData.getPersonnelModuleValue("ColumnNameJuris"));
    // verify.ExpectedValueIsTrue(gridTableColumnValues.contains(BaseData.getPersonnelModuleValue("ColumnJuris"+JsonKeyIndex)));
  }

  async verifyPFCodeWithPFName(JsonKeyIndex: number): Promise<void> {
    // String PFCode = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.medHistorySearch.uIMedHistorySearchResultTable, BaseData.getPersonnelModuleValue("PFName"+JsonKeyIndex), "PF Code").getText();
    // verify.ExpectedPropertyValueIsEqual(PFCode, BaseData.getPersonnelModuleValue("PFCode"+JsonKeyIndex));
  }

}

export class AllowanceCodePage {
  readonly page: Page;
  readonly allowanceCodeComboBox: Locator;
  readonly yearComboBox: Locator;
  readonly searchButton: Locator;
  readonly includeInActiveCheckBox: Locator;
  readonly addNewButton: Locator;
  readonly allowanceCodeResultTable: Locator;
  readonly clearButton: Locator;
  readonly excelIcon: Locator;
  readonly allowanceFrom: Locator;
  readonly allowanceTo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allowanceCodeComboBox = page.locator('#cddAllowanceCode_DropDown');
    this.yearComboBox = page.locator('#cddAllowanceYear_DropDown');
    this.searchButton = page.locator('#cmdSearch');
    this.includeInActiveCheckBox = page.locator('#chkInActive');
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.allowanceCodeResultTable = page.locator('#grdAllowanceSrch');
    this.clearButton = page.locator('#imgClearAllowanceStatic');
    this.excelIcon = page.locator("//img[@title = \'Export to Excel\']");
    this.allowanceFrom = page.locator('#dtAllowanceFrom_KPIDttmCtrl');
    this.allowanceTo = page.locator('#dtAllowanceTo_KPIDttmCtrl');
  }

  async selectAtAllowanceCode(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.allowanceCode.uIAllowanceCodeComboBox,
    // BaseData.getPersonnelModuleValue("AllowanceCode"));
  }

  async selectAtYear(JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.allowanceCode.uIYearComboBox,
    // BaseData.getPersonnelModuleValue("Year"+JsonKeyIndex));
  }

  async clickSearchButton(): Promise<void> {
    // uIMapPersonnel.allowanceCode.uISearchButton.click();
  }

  async clickInactiveCheckBox(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapPersonnel.allowanceCode.uIIncludeInActiveCheckBox.click();
  }

  async verifyAtAllowanceCodeGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("AllowanceCode").substring(5),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable, "Code", rowIndex));
  }

  async verifyAtAllowanceCodeGrid(): Promise<void> {
    // List<String> gridCellValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,BaseData.getPersonnelModuleValue("ColumnName"));
    // System.out.println(BaseData.getPersonnelModuleValue("AllowanceCode").substring(5));
    // for(String Values:gridCellValues) {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("AllowanceCode").substring(5),Values);
  }

  async verifyAtYearGrid(i: number): Promise<void> {
    // List<String> gridCellValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,BaseData.getPersonnelModuleValue("ColumnName"+i));
    // System.out.println(BaseData.getPersonnelModuleValue("Year"));
    // for(String Values:gridCellValues) {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Year"),Values);
  }

  async verifyRowColorAsGraycolorWithAmount(JSonKeyIndex: number): Promise<void> {
    // String cssValue = objectIdentification.manualIdentify.getGridRowByCellInnerText(uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable, BaseData.getPersonnelModuleValue("Amount"+JSonKeyIndex)).getCssValue("color");
    // System.out.println(cssValue);
    // verify.ExpectedPropertyValueIsEqual("rgba(128, 128, 128, 1)", cssValue);
  }

  async clickAtAllowanceCodeInGrid(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,
    // BaseData.getPersonnelModuleValue("AllowanceCode").substring(5));
  }

  async clickAddNew(): Promise<void> {
    // uIMapPersonnel.allowanceCode.uIAddNewButton.click();
  }

  async selectCurrentYearInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,Randomized.getCurrentYear());
  }

  async clickGridHeader(gridHeader: string): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectGridHeaderColumnNameWithoutContains(uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable, gridHeader);
  }

  async verifyGridIsEmpty(): Promise<void> {
    // verify.ExpectedIntergerValueIsEqualToActual(0, objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable), "Grid contains data -->");
  }

  async clickExcelIcon(): Promise<void> {
    // uIMapPersonnel.allowanceCode.uIExcelIcon.click();
  }

  async getColumnValuesByColumnName(JsonkeyIndex: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable, BaseData.getPersonnelModuleValue("columnName"+JsonkeyIndex));
    // return gridTableColumnValues;
  }

  async verifyDataListedInGrid(): Promise<void> {
    // int gridTableRowsCount = objectIdentification.manualIdentify.getGridTableRowsCount(uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable);
    // verify.ExpectedIntergerValueIsNotEqualToActual(Integer.parseInt(BaseData.getPersonnelModuleValue("Count")) , gridTableRowsCount);
  }

  async verifyAtColumnValuesAreSortedAscendingOrder(i: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedAscendingCaseInsensitive(
    // uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i),
    // objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i)));
  }

  async verifyAtColumnValuesAreSortedDescendingOrder(i: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedDescendingCaseInsensitive(
    // uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i),
    // objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i)));
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIPrintIconButton.click();
  }

  async clickNextButton(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uINextButton.click();
  }

  async verifyPrevButtonIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapPersonnel.personnelSearch.uIPrevButton.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async clickPrevButton(): Promise<void> {
    // uIMapPersonnel.personnelSearch.uIPrevButton.click();
  }

  async verifyNextButtonIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapPersonnel.personnelSearch.uINextButton.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verifyInActiveRecordInGrid(): Promise<void> {
    // String cssValue = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,
    // BaseData.getPersonnelModuleValue("Amount")).getCssValue("color");
    // System.out.println(cssValue);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Color"), cssValue);
  }

  async verifyAtInactiveCheckBoxInGrid(): Promise<void> {
    // WebElement InactiveCheckBox = objectIdentification.manualIdentify
    // .getGridCell(uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,BaseData.GetAdmissionModuleValue("Amount"), "Inactive")
    // .findElement(By.tagName("img"));
    // verify.ExpectedValueIsTrue(InactiveCheckBox.getAttribute("alt").contains("Checked"));
  }

  async verifyAtInActiveDateInGrid(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues
    // (uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,BaseData.getPersonnelModuleValue("ColumanName"));
    // //			for(boolean values:(() gridTableColumnValues).getCssValue("color")) {
    // //				if(values) {
    // //					verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Color"), cssValue);
    // //				}
    // uIMapPersonnel.allowanceCode.uIAllowanceFrom.click();
    // uIMapPersonnel.allowanceCode.uIAllowanceFrom.sendKeys(BaseData.getPersonnelModuleValue("AllowanceFrom"));
    // uIMapPersonnel.allowanceCode.uIAllowanceFrom.click();
    // uIMapPersonnel.allowanceCode.uIAllowanceTo.sendKeys(Randomized.getCurrentDate("MM/dd/yyyy"));
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,BaseData.getPersonnelModuleValue("ColumnName"+i));
    // Randomized.verifyTheDatesBetweenFromAndToDates(gridTableColumnValues, BaseData.getPersonnelModuleValue("AllowanceFrom"), Randomized.getCurrentDate("MM/dd/yyyy"));
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,BaseData.getPersonnelModuleValue("ColumnName"+i));
    // Randomized.verifyTheDatesBetweenFromAndToDates(gridTableColumnValues, BaseData.getPersonnelModuleValue("AllowanceFrom"), Randomized.getCurrentDate("MM/dd/yyyy"));
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues
    // (uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,BaseData.getPersonnelModuleValue("ColumnHeader"+i));
    // Randomized.verifyDatesSortingAsAscendingOrder(gridTableColumnValues,"MM/dd/yyyy");
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues
    // (uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,BaseData.getPersonnelModuleValue("ColumnHeader"+i));
    // Randomized.verifyDatesSortingAsDescendingOrder(gridTableColumnValues,"MM/dd/yyyy");
    // objectIdentification.manualIdentify.selectGridHeaderColumnName(uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable, header);
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedAscendingForIntegers(
    // uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i),
    // objectIdentification.manualIdentify.getGridTableColumnValues(
  }

  async enterAtAllowanceFrom(): Promise<void> {
    // uIMapPersonnel.allowanceCode.uIAllowanceFrom.click();
    // uIMapPersonnel.allowanceCode.uIAllowanceFrom.sendKeys(BaseData.getPersonnelModuleValue("AllowanceFrom"));
  }

  async enterAllowanceTo(): Promise<void> {
    // uIMapPersonnel.allowanceCode.uIAllowanceFrom.click();
    // uIMapPersonnel.allowanceCode.uIAllowanceTo.sendKeys(Randomized.getCurrentDate("MM/dd/yyyy"));
  }

  async verifyAtYearBetweenAllowanceFrom(i: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,BaseData.getPersonnelModuleValue("ColumnName"+i));
    // Randomized.verifyTheDatesBetweenFromAndToDates(gridTableColumnValues, BaseData.getPersonnelModuleValue("AllowanceFrom"), Randomized.getCurrentDate("MM/dd/yyyy"));
  }

  async verifyAtYearBetweenAllowanceTo(i: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,BaseData.getPersonnelModuleValue("ColumnName"+i));
    // Randomized.verifyTheDatesBetweenFromAndToDates(gridTableColumnValues, BaseData.getPersonnelModuleValue("AllowanceFrom"), Randomized.getCurrentDate("MM/dd/yyyy"));
  }

  async verifyAtColumnValuesAreSortedAscendingOrderForDate(i: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues
    // (uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,BaseData.getPersonnelModuleValue("ColumnHeader"+i));
    // Randomized.verifyDatesSortingAsAscendingOrder(gridTableColumnValues,"MM/dd/yyyy");
  }

  async verifyAtColumnValuesAreSortedDescendingOrderForDate(i: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues
    // (uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,BaseData.getPersonnelModuleValue("ColumnHeader"+i));
    // Randomized.verifyDatesSortingAsDescendingOrder(gridTableColumnValues,"MM/dd/yyyy");
  }

  async clickHeaderInGrid(header: string): Promise<void> {
    // objectIdentification.manualIdentify.selectGridHeaderColumnName(uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable, header);
  }

  async verifyAtColumnValuesAreSortedAscendingOrderForInteger(i: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedAscendingForIntegers(
    // uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i),
    // objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i)));
  }

  async verifyAtColumnValuesAreSortedDescendingOrderForInteger(i: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedDescendingForIntegers(
    // uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i),
    // objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapPersonnel.allowanceCode.uIAllowanceCodeResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i)));
  }

  async selectYearAsCurrentYear(): Promise<void> {
    // String currentYear = Randomized.getCurrentYear();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.allowanceCode.uIYearComboBox,
    // currentYear+" - "+currentYear);
  }

}

export class AllowanceCodeEntryPage {
  readonly page: Page;
  readonly allowanceCodeComboBox: Locator;
  readonly yearComboBox: Locator;
  readonly amountEdit: Locator;
  readonly dateFromEdit: Locator;
  readonly dateToEdit: Locator;
  readonly inActiveCheckBox: Locator;
  readonly inActiveDateTextEdit: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly allowanceCodeEntryResultTable: Locator;
  readonly saveButton: Locator;
  readonly saveCloseButton: Locator;
  readonly resetButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly printIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allowanceCodeComboBox = page.locator('#cddAllowanceCode_DropDown');
    this.yearComboBox = page.locator('#cddAllowanceYear_DropDown');
    this.amountEdit = page.locator('#curAllowAmt');
    this.dateFromEdit = page.locator('#dtAllowanceFrom_KPIDttmCtrl');
    this.dateToEdit = page.locator('#dtAllowanceTo_KPIDttmCtrl');
    this.inActiveCheckBox = page.locator('#chkInActive');
    this.inActiveDateTextEdit = page.locator('#txtInActiveDttm');
    this.addButton = page.locator('#imgAddAllowanceStatic');
    this.clearButton = page.locator('#imgClearAllowanceStatic');
    this.allowanceCodeEntryResultTable = page.locator('#grdAllowanceStatic');
    this.saveButton = page.locator('#cmdSave');
    this.saveCloseButton = page.locator('#cmdSaveNClose');
    this.resetButton = page.locator('#cmdRefresh');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.printIcon = page.locator('#cmdPrint');
  }

  async selectAtAmountInGrid(JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapPersonnel.allowanceCodeEntry.uIAllowanceCodeEntryResultTable,
    // BaseData.getPersonnelModuleValue("Amount"+JsonKeyIndex));
  }

  async verifyInActiveDateInGridAsCurrentDate(JsonKeyIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate(), objectIdentification.manualIdentify.getGridCell(
    // uIMapPersonnel.allowanceCodeEntry.uIAllowanceCodeEntryResultTable, BaseData.getPersonnelModuleValue("Amount"+JsonKeyIndex),"Inactive Date").getText());
  }

  async verifyInactiveCheckBoxCheckedGrid(rowIndex: number): Promise<void> {
    // WebElement InactiveIsChecked = objectIdentification.manualIdentify
    // .getGridCell(uIMapPersonnel.allowanceCodeEntry.uIAllowanceCodeEntryResultTable, "Inactive",
    // rowIndex)
    // .findElement(By.tagName("img"));
    // verify.ExpectedValueIsTrue(InactiveIsChecked.getAttribute("alt").contains("Checked"));
  }

  async verifyInactiveCheckBoxChecked(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.allowanceCodeEntry.uIInActiveCheckBox.isSelected());
  }

  async verifyInactiveDate(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate(),
    // uIMapPersonnel.allowanceCodeEntry.uIInActiveDateTextEdit.getAttribute("value"));
  }

  async clickUpdateButton(): Promise<void> {
    // uIMapPersonnel.allowanceCodeEntry.uIAddButton.click();
  }

  async closeScreen(): Promise<void> {
    // uIMapPersonnel.allowanceCodeEntry.driver.close();
  }

  async saveScreen(): Promise<void> {
    // uIMapPersonnel.allowanceCodeEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async selectCode(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapPersonnel.allowanceCodeEntry.uIAllowanceCodeComboBox);
    // uIMapPersonnel.allowanceCodeEntry.uIAllowanceCodeComboBox.sendKeys(Keys.TAB);
  }

  async selectYear(): Promise<void> {
    // objectIdentification.randomIdentify.selectDropDownOption(uIMapPersonnel.allowanceCodeEntry.uIYearComboBox);
    // uIMapPersonnel.allowanceCodeEntry.uIYearComboBox.sendKeys(Keys.TAB);
  }

  async selectAtYear(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.allowanceCodeEntry.uIYearComboBox,
    // BaseData.getPersonnelModuleValue("Year"));
    // uIMapPersonnel.allowanceCodeEntry.uIYearComboBox.sendKeys(Keys.TAB);
  }

  async enterAmount(): Promise<void> {
    // uIMapPersonnel.allowanceCodeEntry.uIAmountEdit.sendKeys(Randomized.enterRandomNumbers(3));
    // uIMapPersonnel.allowanceCodeEntry.uIAmountEdit.sendKeys(Keys.TAB);
  }

  async enterAtAmount(): Promise<void> {
    // uIMapPersonnel.allowanceCodeEntry.uIAmountEdit.sendKeys(BaseData.getPersonnelModuleValue("Amount"));
    // uIMapPersonnel.allowanceCodeEntry.uIAmountEdit.sendKeys(Keys.TAB);
  }

  async tabFromDate(): Promise<void> {
    // uIMapPersonnel.allowanceCodeEntry.uIDateFromEdit.sendKeys(Keys.TAB);
  }

  async enterAtFromDate(): Promise<void> {
    // uIMapPersonnel.allowanceCodeEntry.uIDateFromEdit.sendKeys(BaseData.getPersonnelModuleValue("FromDate"));
    // uIMapPersonnel.allowanceCodeEntry.uIDateFromEdit.sendKeys(Keys.TAB);
  }

  async tabToDate(): Promise<void> {
    // uIMapPersonnel.allowanceCodeEntry.uIDateToEdit.sendKeys(Keys.TAB);
  }

  async clickAddButton(): Promise<void> {
    // uIMapPersonnel.allowanceCodeEntry.uIAddButton.click();
  }

  async clickClearButton(): Promise<void> {
    // uIMapPersonnel.allowanceCodeEntry.uIClearButton.click();
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapPersonnel.allowanceCodeEntry.uIBottomLeftSideStatusBar.getText());
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapPersonnel.allowanceCodeEntry.uIPrintIcon.click();
  }

  async verifyAtAmountInGrid(rowIndex: number): Promise<void> {
    // String Amnt = objectIdentification.manualIdentify
    // .getGridCell(uIMapPersonnel.allowanceCodeEntry.uIAllowanceCodeEntryResultTable,BaseData.getPersonnelModuleValue("AmountWithZero0")).getText();
    // verify.ExpectedValueIsTrue(Amnt.contains(BaseData.getPersonnelModuleValue("AmountWithZero0")));
  }

  async verifyCurrentAllowYearByAmountInGrid(JsonKeyIndex: number): Promise<void> {
    // String Amnt = objectIdentification.manualIdentify
    // .getGridCell(uIMapPersonnel.allowanceCodeEntry.uIAllowanceCodeEntryResultTable, BaseData.getPersonnelModuleValue("AmountWithZero"+JsonKeyIndex), "Allow Year").getText();
    // verify.ExpectedPropertyValueIsEqual(Amnt, Randomized.getCurrentYear());
  }

  async clickInActiveCheckBox(): Promise<void> {
    // uIMapPersonnel.allowanceCodeEntry.uIInActiveCheckBox.click();
  }

  async verifyRowColorAsGraycolorWithAmount(JSonKeyIndex: number): Promise<void> {
    // String cssValue = objectIdentification.manualIdentify.getGridRowByCellInnerText(uIMapPersonnel.allowanceCodeEntry.uIAllowanceCodeEntryResultTable, BaseData.getPersonnelModuleValue("Amount"+JSonKeyIndex)).getCssValue("color");
    // System.out.println(cssValue);
    // verify.ExpectedPropertyValueIsEqual("rgba(128, 128, 128, 1)", cssValue);
  }

  async selectAtCode(JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapPersonnel.allowanceCodeEntry.uIAllowanceCodeComboBox,BaseData.getPersonnelModuleValue("Code"+JsonKeyIndex));
    // uIMapPersonnel.allowanceCodeEntry.uIAllowanceCodeComboBox.sendKeys(Keys.TAB);
  }

  async verifyAtCodeByFromDate(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.allowanceCodeEntry.uIAllowanceCodeEntryResultTable, BaseData.getPersonnelModuleValue("FromDate"), "Code").getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getPersonnelModuleValue("Code"));
  }

  async verifyAtToDateByFromDate(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.allowanceCodeEntry.uIAllowanceCodeEntryResultTable, BaseData.getPersonnelModuleValue("FromDate"), "To").getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getPersonnelModuleValue("ToDate"));
  }

  async verifyAtAmountByFromDate(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.allowanceCodeEntry.uIAllowanceCodeEntryResultTable, BaseData.getPersonnelModuleValue("FromDate"), "Amount").getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getPersonnelModuleValue("AmountIngrid"));
  }

  async verifyAtAllowYearByFromDate(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.allowanceCodeEntry.uIAllowanceCodeEntryResultTable, BaseData.getPersonnelModuleValue("FromDate"), "Allow Year").getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getPersonnelModuleValue("AllowYear"));
  }

  async selectAtYearByCurrentYear(): Promise<void> {
    // String currentYear = Randomized.getCurrentYear();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.allowanceCodeEntry.uIYearComboBox,
    // currentYear+" - "+currentYear	);
    // uIMapPersonnel.allowanceCodeEntry.uIYearComboBox.sendKeys(Keys.TAB);
  }

}

export class WorkHistoryEntryPage {
  readonly page: Page;
  readonly pFCodeEdit: Locator;
  readonly forPeriodFromDateEdit: Locator;
  readonly forPeriodFromTimeEdit: Locator;
  readonly forPeriodToDateEdit: Locator;
  readonly forPeriodToTimeEdit: Locator;
  readonly selectPFCodeEdit: Locator;
  readonly enteredDateEdit: Locator;
  readonly enteredTimeEdit: Locator;
  readonly categoryComboBox: Locator;
  readonly subCategoryComboBox: Locator;
  readonly subjectEdit: Locator;
  readonly commentsTab: Locator;
  readonly dispositionTab: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly approvalStatusTextView: Locator;
  readonly deleteButton: Locator;
  readonly enteredByEdit: Locator;
  readonly enteredByDescription: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly approvalTab: Locator;
  readonly resetIcon: Locator;
  readonly referenceEdit: Locator;
  readonly categoryTreeViewIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pFCodeEdit = page.locator('#lupForPF_CodeValue');
    this.forPeriodFromDateEdit = page.locator('#dttmForPeriodFrom_Date_KPIDttmCtrl');
    this.forPeriodFromTimeEdit = page.locator("//table[@id=\'dttmForPeriodFrom_Time\']//input");
    this.forPeriodToDateEdit = page.locator('#dttmTo_Date_KPIDttmCtrl');
    this.forPeriodToTimeEdit = page.locator("//table[@id=\'dttmTo_Time\']//input");
    this.selectPFCodeEdit = page.locator('#lupEnteredBy_CodeValue');
    this.enteredDateEdit = page.locator('#dttmEnteredDate_Date_KPIDttmCtrl');
    this.enteredTimeEdit = page.locator("//table[@id=\'dttmEnteredDate_Time\']//input");
    this.categoryComboBox = page.locator('#cddCategory_DropDown');
    this.subCategoryComboBox = page.locator('#cddSubCategory');
    this.subjectEdit = page.locator('#txtSubject');
    this.commentsTab = page.locator("//span[contains(text(),\'Comments\')]");
    this.dispositionTab = page.locator("//span[contains(text(),\'Disposition\')]");
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.approvalStatusTextView = page.locator('#lblApprovalStatus');
    this.deleteButton = page.locator('#cmdDelete');
    this.enteredByEdit = page.locator('#lupEnteredBy_CodeValue');
    this.enteredByDescription = page.locator('#lupEnteredBy_CodeDescription');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.approvalTab = page.locator("//span[text()=\'Approval\']");
    this.resetIcon = page.locator('#cmdRefresh');
    this.referenceEdit = page.locator('#txtRef');
    this.categoryTreeViewIcon = page.locator('#imgCategoryTview');
  }

  async enterSubject(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.uISubjectEdit.sendKeys(Randomized.randomString(250));
    // // PlayBack.TakeScreenshot(PersonnelScripts.PersonnelTestContext,
    // // "PersonnelModule_135772_1");
  }

  async clickDispositionTab(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.uIDispositionTab.click();
  }

  async saveScreen(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async closeScreen(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.driver.close();
  }

  async verifyStatusAsOnHold(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("On Hold",
    // uIMapPersonnel.workHistoryEntry.uIApprovalStatusTextView.getText());
  }

  async clickDeleteIcon(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.uIDeleteButton.click();
    // Playback.controlReadyThreadWait();
  }

  async verifyConfirmationDeleteMessage(): Promise<void> {
    // popup.confirm.yesWithExpectedMessage("(4) Do you really want to delete?");
  }

  async verifyStatusAsApproved(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("Approved",
    // uIMapPersonnel.workHistoryEntry.uIApprovalStatusTextView.getText());
  }

  async verifyDeleteIconIsDisabled(): Promise<void> {
    // String status = uIMapPersonnel.workHistoryEntry.uIDeleteButton.getAttribute("disabled");
    // System.out.println(status);
    // verify.ExpectedValueIsTrue(status.contains("false"));// Actually to be change as TRUE
  }

  async verifyConfirmationDeleteMessageAsNo(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // popup.confirm.noWithExpectedMessage("(4) Do you really want to delete?");
    // //			if (Playback.browserType.equals("Chrome")) {
    // //				popup.confirm.noWithExpectedMessage("(4)     Do you really want to delete?");
    // //			} else {
    // //				popup.switchToConfirm();
    // //				Playback.controlReadyThreadWait();
    // //				popup.confirm.noWithExpectedMessage("(4) Do you really want to delete?");
    // //			}
  }

  async tabOutPFNo(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.uIPFCodeEdit.sendKeys(Keys.TAB);
  }

  async tabOutForPeriodFromDateAndTime(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.uIForPeriodFromDateEdit.sendKeys(Keys.TAB);
    // uIMapPersonnel.workHistoryEntry.uIForPeriodFromTimeEdit.sendKeys(Keys.TAB);
  }

  async tabOutForPeriodToDateAndTime(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.uIForPeriodToDateEdit.sendKeys(Keys.TAB);
    // uIMapPersonnel.workHistoryEntry.uIForPeriodToTimeEdit.sendKeys(Keys.TAB);
  }

  async tabOutEnteredBy(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.uIEnteredByEdit.click();
    // uIMapPersonnel.workHistoryEntry.uIEnteredByEdit.sendKeys(Keys.TAB);
  }

  async tabOutEnteredDateAndTime(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.uIEnteredDateEdit.sendKeys(Keys.TAB);
    // uIMapPersonnel.workHistoryEntry.uIEnteredTimeEdit.sendKeys(Keys.TAB);
  }

  async selectCategory(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapPersonnel.workHistoryEntry.uICategoryComboBox);
    // uIMapPersonnel.workHistoryEntry.uICategoryComboBox.sendKeys(Keys.TAB);
  }

  async selectAtCategory(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.workHistoryEntry.uICategoryComboBox,
    // BaseData.getPersonnelModuleValue("Category"));
    // uIMapPersonnel.workHistoryEntry.uICategoryComboBox.sendKeys(Keys.TAB);
  }

  async selectASubtCategory(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.workHistoryEntry.uISubCategoryComboBox,
    // BaseData.getPersonnelModuleValue("SubCategory"));
    // uIMapPersonnel.workHistoryEntry.uISubCategoryComboBox.sendKeys(Keys.TAB);
  }

  async enterAtSubject(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.uISubjectEdit.sendKeys(BaseData.getPersonnelModuleValue("Subject"));
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapPersonnel.workHistoryEntry.uIBottomLeftSideStatusBar.getText());
  }

  async clickApprovalTab(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.uIApprovalTab.click();
    // objectIdentification.windowHandle.switchToFrame("frmPnxGlobalApproval.aspx");
  }

  async verifUpdateSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1003 - Update Successful",
    // uIMapPersonnel.workHistoryEntry.uIBottomLeftSideStatusBar.getText());
  }

  async verifyAtStatus(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Status"),
    // uIMapPersonnel.workHistoryEntry.uIApprovalStatusTextView.getText());
  }

  async verifyAtCategory(ExpectedVerification: boolean): Promise<void> {
    // Select s = new Select(Playback.driver.findElement(By.id("cddCategory_DropDown")));
    // List<WebElement> dropdown = s.getOptions();
    // for (WebElement value : dropdown) {
    // System.out.println(value.getText());
    // String DropDownText = value.getText();
    // if (ExpectedVerification == true) {
    // if (DropDownText.equals(BaseData.getSettingsModuleValue("Description"))) {
    // System.out.println(DropDownText);
    // verify.ExpectedPropertyValueIsEqual(DropDownText,
    // BaseData.getSettingsModuleValue("Description"));
    // if (ExpectedVerification == false) {
    // if (DropDownText.equals(BaseData.getSettingsModuleValue("Description"))) {
    // verify.ExpectedValueIsFalse(
    // DropDownText.contains(BaseData.getSettingsModuleValue("Description")));
  }

  async clickCommentsTab(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.uICommentsTab.click();
  }

  async clickResetIcon(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.uIResetIcon.click();
  }

}

export class WorkHistoryEntryDispositionTabPage {
  readonly page: Page;
  readonly supervisorPFCodeEdit: Locator;
  readonly dispositionComboBox: Locator;
  readonly dispositionDateEdit: Locator;
  readonly forPeriodFromTimeEdit: Locator;
  readonly remarksEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.supervisorPFCodeEdit = page.locator('#tabComments_tmpl2_UsrDisposition1_lupSupervisor_CodeValue');
    this.dispositionComboBox = page.locator('#tabComments_tmpl2_UsrDisposition1_cddDisposition_DropDown');
    this.dispositionDateEdit = page.locator('#tabComments_tmpl2_UsrDisposition1_dttmDispositionDate_Date_KPIDttmCtrl');
    this.forPeriodFromTimeEdit = page.locator("//table[@id=\'tabComments_tmpl2_UsrDisposition1_dttmDispositionDate_Time\']//input");
    this.remarksEdit = page.locator('#tabComments_tmpl2_UsrDisposition1_txtRemarks');
  }

  async enterRemarks(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.workHistoryEntryDispositionTab.uIRemarksEdit
    // .sendKeys(Randomized.randomString(250));
    // // PlayBack.TakeScreenshot(PersonnelScripts.PersonnelTestContext,
    // // "PersonnelModule_135772_2");
  }

  async verifyAtSupervisor(): Promise<void> {
    // String SupervisorPFCode =  uIMapPersonnel.workHistoryEntry.workHistoryEntryDispositionTab.uISupervisorPFCodeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(SupervisorPFCode, BaseData.getPersonnelModuleValue("SupervisorPFCode"));
  }

  async verifyAtDisposition(): Promise<void> {
    // String Disposition =objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapPersonnel.workHistoryEntry.workHistoryEntryDispositionTab.uIDispositionComboBox);
    // verify.ExpectedPropertyValueIsEqual(Disposition, BaseData.getPersonnelModuleValue("Disposition"));
  }

}

export class ApprovalTabWHEPage {
  readonly page: Page;
  readonly actionDropDown: Locator;
  readonly supervisorPFCodeEdit: Locator;
  readonly supervisorPFInfoIcon: Locator;
  readonly dateEdit: Locator;
  readonly timeEdit: Locator;
  readonly saveTime: Locator;
  readonly approvalGrid: Locator;
  readonly internalSave: Locator;
  readonly raterPFLookUPButton: Locator;
  readonly reviewAssignedPFLookUPButton: Locator;
  readonly divisionComboBox: Locator;
  readonly sectionComboBox: Locator;
  readonly raterDateEdit: Locator;
  readonly raterTimeEdit: Locator;
  readonly squadCombobox: Locator;
  readonly reviewerPFLookUPButton: Locator;
  readonly nextReviewDueInDateEdit: Locator;
  readonly enableSignCheckBox: Locator;
  readonly raterSignCheckBox: Locator;
  readonly reviewerDateEdit: Locator;
  readonly declareCheckBox: Locator;
  readonly agreeSignCheckBox: Locator;
  readonly employeeDateEdit: Locator;
  readonly treeSymbolEdit: Locator;
  readonly reviewAssignedPFCodeEdit: Locator;
  readonly raterPFEdit: Locator;
  readonly raterSignImage: Locator;
  readonly raterTimeEditForFire: Locator;
  readonly newActionDropDown: Locator;
  readonly saveButton: Locator;
  readonly approvalTable: Locator;
  readonly dateEdit: Locator;
  readonly timeEdit: Locator;
  readonly authorizeAndSignCheckBox: Locator;
  readonly signImage: Locator;
  readonly rejectionCodeDropDown: Locator;
  readonly saveButton: Locator;
  readonly resetButton: Locator;
  readonly newActionComboBox: Locator;
  readonly dateEdit: Locator;
  readonly timeEdit: Locator;
  readonly notesEdit: Locator;
  readonly divisionComboBox: Locator;
  readonly sectionComboBox: Locator;
  readonly approvalGrid: Locator;
  readonly rejectionCodeDropDown: Locator;
  readonly rejectionCount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.actionDropDown = page.locator('#lstStatus');
    this.supervisorPFCodeEdit = page.locator('#lupSupervisor_CodeValue');
    this.supervisorPFInfoIcon = page.locator('#lupSupervisor_cmdIncOnAddr');
    this.dateEdit = page.locator('#dttStatusDttm_Date_KPIDttmCtrl');
    this.timeEdit = page.locator('#dttStatusDttm_Time');
    this.saveTime = page.locator('#cmdSave');
    this.approvalGrid = page.locator("//table[@id=\'listMsg\']");
    this.internalSave = page.locator('#cmdSave');
    this.raterPFLookUPButton = page.locator('#tabReview_tmpl2_usrApproval_lupRaterPF_imgBtn');
    this.reviewAssignedPFLookUPButton = page.locator('#tabReview_tmpl2_usrApproval_lupAssignPF_imgBtn');
    this.divisionComboBox = page.locator('#tabReview_tmpl2_usrApproval_cddDivision_DropDown');
    this.sectionComboBox = page.locator('#tabReview_tmpl2_usrApproval_cddSection_DropDown');
    this.raterDateEdit = page.locator('#tabReview_tmpl2_usrApproval_dttRaterDttm_Date_KPIDttmCtrl');
    this.raterTimeEdit = page.locator("(//table[@id = \'tabReview_tmpl2_usrApproval_dttRaterDttm_Time\'] //input[@class=\'textboxdatetime igte_BlueThemeEditInContainer\'])");
    this.squadCombobox = page.locator('#tabReview_tmpl2_usrApproval_cddSquad_DropDown');
    this.reviewerPFLookUPButton = page.locator('#tabReview_tmpl2_usrApproval_lupReviewerPF_imgBtn');
    this.nextReviewDueInDateEdit = page.locator('#tabReview_tmpl2_usrApproval_dttmNextReviewDueIn_Date_KPIDttmCtrl');
    this.enableSignCheckBox = page.locator('#tabReview_tmpl2_usrApproval_imgReviewer_chkIsEnableSign');
    this.raterSignCheckBox = page.locator('#tabReview_tmpl2_usrApproval_imgRaterSign_chkIsEnableSign');
    this.reviewerDateEdit = page.locator('#tabReview_tmpl2_usrApproval_dttmReviewerDate_Date_KPIDttmCtrl');
    this.declareCheckBox = page.locator('#tabReview_tmpl2_usrApproval_chkSign');
    this.agreeSignCheckBox = page.locator('#tabReview_tmpl2_usrApproval_imgAgree_chkIsEnableSign');
    this.employeeDateEdit = page.locator('#tabReview_tmpl2_usrApproval_dttmEmployeeRatedDate_Date_KPIDttmCtrl');
    this.treeSymbolEdit = page.locator('#tabReview_tmpl2_usrApproval_imgDivision');
    this.reviewAssignedPFCodeEdit = page.locator('#tabReview_tmpl2_usrApproval_lupAssignPF_CodeValue');
    this.raterPFEdit = page.locator('#tabReview_tmpl2_usrApproval_lupRaterPF_CodeValue');
    this.raterSignImage = page.locator('#tabReview$tmpl2$usrApproval$imgRaterSign$imgSign');
    this.raterTimeEditForFire = page.locator("(//table[@id=\'tabReview_tmpl2_usrApproval_dttRaterDttm_Time\']//input[@class=\'textboxdatetime igte_RedThemeEditInContainer\'])");
    this.newActionDropDown = page.locator('#lstStatus');
    this.saveButton = page.locator('#cmdSave');
    this.approvalTable = page.locator('#listMsg');
    this.dateEdit = page.locator('#dttStatusDttm_Date_KPIDttmCtrl');
    this.timeEdit = page.locator("//table[@id=\'dttStatusDttm_Time\']//input");
    this.authorizeAndSignCheckBox = page.locator('#imgPFSign_chkIsEnableSign');
    this.signImage = page.locator('#imgPFSign_imgSign');
    this.rejectionCodeDropDown = page.locator('#cddRejCode_DropDown');
    this.saveButton = page.locator('#cmdSave');
    this.resetButton = page.locator('#cmdReset');
    this.newActionComboBox = page.locator('#lstStatus');
    this.dateEdit = page.locator('#dttStatusDttm_Date_KPIDttmCtrl');
    this.timeEdit = page.locator("//table[@id=\'dttStatusDttm_Time\']//input");
    this.notesEdit = page.locator('#txtComments');
    this.divisionComboBox = page.locator('#cddDivision_DropDown');
    this.sectionComboBox = page.locator('#cddSection_DropDown');
    this.approvalGrid = page.locator("//table[@id=\'listMsg\']");
    this.rejectionCodeDropDown = page.locator('#cddRejCode_DropDown');
    this.rejectionCount = page.locator('#lblrejcountvalue');
  }

  async selectAtAction(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.workHistoryEntry.approvalTab.uIActionDropDown, BaseData.getPersonnelModuleValue("Action"));
  }

  async tabDateAndTime(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.approvalTab.uIDateEdit.click();
    // uIMapPersonnel.workHistoryEntry.approvalTab.uIDateEdit.sendKeys(Keys.TAB);
    // //uIMapPersonnel.workHistoryEntry.approvalTab.uItimeEdit.sendKeys(Keys.TAB);//hidded by mani kandan due element not intrectable exception
  }

  async EnterAtSupervisor(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.approvalTab.uISupervisorPFCodeEdit.sendKeys(BaseData.getPersonnelModuleValue("Supervisor"));
  }

  async verifyAtStatusInGrid(): Promise<void> {
    // String status  = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.workHistoryEntry.approvalTab.uIApprovalGrid, BaseData.getPersonnelModuleValue("Status")).getText();
    // verify.ExpectedPropertyValueIsEqual(status, BaseData.getPersonnelModuleValue("Status"));
  }

  async clickSupervisorInfoIcon(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.approvalTab.uISupervisorPFInfoIcon.click();
  }

  async SaveScreen(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.approvalTab.uIInternalSave.click();
    // popup.confirm.yes();
  }

}

export class CommentsTabPage {
  readonly page: Page;
  readonly richTextEdit: Locator;
  readonly convertToLowerCaseIcon: Locator;
  readonly convertToUpperCaseIcon: Locator;
  readonly selectAllIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.richTextEdit = page.locator("//body");
    this.convertToLowerCaseIcon = page.locator("//span[@class=\'ConvertToLower\']");
    this.convertToUpperCaseIcon = page.locator("//span[@class=\'ConvertToUpper\']");
    this.selectAllIcon = page.locator("//span[@class=\'SelectAll\']");
  }

  async enterAtComments(i: number): Promise<void> {
    // objectIdentification.windowHandle
    // .switchToFrameUsingID("tabComments_tmpl0_usrComments1_rteKPITxt_contentIframe");
    // uIMapPersonnel.workHistoryEntry.commentsTab.uIRichTextEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("Comments" + i));
  }

  async verifyAtComments(i: number): Promise<void> {
    // objectIdentification.windowHandle
    // .switchToFrameUsingID("tabComments_tmpl0_usrComments1_rteKPITxt_contentIframe");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Comments" + i),
    // uIMapPersonnel.workHistoryEntry.commentsTab.uIRichTextEdit.getText());
  }

  async clickConvertToUpperCaseIcon(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.commentsTab.uIConvertToUpperCaseIcon.click();
  }

  async clickConvertToLowerCaseIcon(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.commentsTab.uIConvertToLowerCaseIcon.click();
  }

  async clickSelectAllIcon(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.commentsTab.uISelectAllIcon.click();
  }

  async verifyCommentsAsNull(): Promise<void> {
    // objectIdentification.windowHandle
    // .switchToFrameUsingID("tabComments_tmpl0_usrComments1_rteKPITxt_contentIframe");
    // String text = uIMapPersonnel.workHistoryEntry.commentsTab.uIRichTextEdit.getText();
    // verify.ExpectedValueIsTrue(text.isBlank(), "Text exist --> " + text);
  }

  async verifyTabColorAsBlue(TabName: string): Promise<void> {
    // String TabColor = Playback.driver.findElement(By.xpath("//span[text()='"+TabName+"']")).getCssValue("color");
    // System.out.println(TabColor);
    // verify.ExpectedPropertyValueIsEqual(TabColor, "rgba(0, 0, 255, 1)");
  }

  async verifyAtEnteredByPF(): Promise<void> {
    // String EnteredByPF = uIMapPersonnel.workHistoryEntry.uIEnteredByEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(EnteredByPF, BaseData.getPersonnelModuleValue("EnteredByPF"));
  }

  async verifyAtEnteredByPFDescription(): Promise<void> {
    // String EnteredByDescription = uIMapPersonnel.workHistoryEntry.uIEnteredByDescription.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(EnteredByDescription, BaseData.getPersonnelModuleValue("EnteredByPFDescription"));
  }

  async verifyAtForPeriodFromDate(): Promise<void> {
    // String ForPeriodFromDate = uIMapPersonnel.workHistoryEntry.uIForPeriodFromDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(ForPeriodFromDate, BaseData.getPersonnelModuleValue("ForPeriodFromDate"));
  }

  async verifyAtForPeriodFromTime(): Promise<void> {
    // String ForPeriodFromTimeEdit = uIMapPersonnel.workHistoryEntry.uIForPeriodFromTimeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(ForPeriodFromTimeEdit, BaseData.getPersonnelModuleValue("ForPeriodFromTime"));
  }

  async verifyAtForPeriodToDate(): Promise<void> {
    // String ForPeriodToDate = uIMapPersonnel.workHistoryEntry.uIForPeriodToDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(ForPeriodToDate, BaseData.getPersonnelModuleValue("ForPeriodToDate"));
  }

  async verifyAtForPeriodToTime(): Promise<void> {
    // String ForPeriodToTimeEdit = uIMapPersonnel.workHistoryEntry.uIForPeriodToTimeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(ForPeriodToTimeEdit, BaseData.getPersonnelModuleValue("ForPeriodToTime"));
  }

  async verifyAtCategory(): Promise<void> {
    // String Category = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapPersonnel.workHistoryEntry.uICategoryComboBox);
    // verify.ExpectedPropertyValueIsEqual(Category, BaseData.getPersonnelModuleValue("Category"));
  }

  async verifyAtSubCategory(): Promise<void> {
    // String SubCategoryComboBox = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapPersonnel.workHistoryEntry.uISubCategoryComboBox);
    // verify.ExpectedPropertyValueIsEqual(SubCategoryComboBox, BaseData.getPersonnelModuleValue("SubCategory"));
  }

  async verifyAtReference(): Promise<void> {
    // String Reference = uIMapPersonnel.workHistoryEntry.uIReferenceEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(Reference, BaseData.getPersonnelModuleValue("Reference"));
  }

  async clickPFInfoIcon(): Promise<void> {
    // uIMapPersonnel.workHistorySearch.uIForPFInfoIcon.click();
  }

  async enterAtEnteredByPF(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.uIEnteredByEdit.click();
    // uIMapPersonnel.workHistoryEntry.uIEnteredByEdit.clear();
    // uIMapPersonnel.workHistoryEntry.uIEnteredByEdit.sendKeys(BaseData.getPersonnelModuleValue("EnteredBy"));
  }

  async verifyAtSubject(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapPersonnel.workHistoryEntry.uISubjectEdit.getText(), BaseData.getPersonnelModuleValue("Subject"));
  }

  async getPeriodToTime(): Promise<string> {
    // String getPeriodToTime =uIMapPersonnel.workHistoryEntry.uIForPeriodToTimeEdit.getAttribute("value");
    // return getPeriodToTime;
  }

  async getPeriodFromTime(): Promise<string> {
    // String getPeriodFromTime =uIMapPersonnel.workHistoryEntry.uIForPeriodFromTimeEdit.getAttribute("value");
    // return getPeriodFromTime;
  }

  async verifyAtForPeriodFromTime(PeriodFromTime: string): Promise<void> {
    // String ForPeriodFromTimeEdit = uIMapPersonnel.workHistoryEntry.uIForPeriodFromTimeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(ForPeriodFromTimeEdit,PeriodFromTime);
  }

  async verifyAtForPeriodToTime(PeriodToTime: string): Promise<void> {
    // String ForPeriodFromTimeEdit = uIMapPersonnel.workHistoryEntry.uIForPeriodToTimeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(ForPeriodFromTimeEdit, PeriodToTime);
  }

  async enterAtRef(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.uIReferenceEdit.sendKeys(BaseData.getPersonnelModuleValue("Ref"));
  }

  async verifyAtStatus(JsonKeyIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Status"+JsonKeyIndex),
    // uIMapPersonnel.workHistoryEntry.uIApprovalStatusTextView.getText());
  }

  async saveAndClose(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.uISaveAndCloseButton.click();
    // popup.confirm.yesWithExpectedMessage("(3) Do You Want To Save All Of The Entered Details?");
  }

  async verifyTheDeleteConfirmationPopUpIsNotPresent(): Promise<void> {
    // boolean alertsPresentConditions = objectIdentification.windowHandle.alertsPresentConditions();
    // verify.ExpectedValueIsFalse(alertsPresentConditions);
  }

  async clickTreeViewIcon(): Promise<void> {
    // uIMapPersonnel.workHistoryEntry.uICategoryTreeViewIcon.click();
  }

  async selectAtCategoryInTreeView(): Promise<void> {
    // popup.switchToTreeViewHelp();
    // popup.treeViewHelp.treeViewLoopValueSelectBasedOnContent(BaseData.getPersonnelModuleValue("mainContent"), BaseData.getPersonnelModuleValue("subContent"));
  }

}

export class SupervisorSearchPage {
  readonly page: Page;
  readonly searchButton: Locator;
  readonly resetButton: Locator;
  readonly backButton: Locator;
  readonly pFCodeEdit: Locator;
  readonly pFDesEdit: Locator;
  readonly supervisorCodeEdit: Locator;
  readonly supervisorInfoButton: Locator;
  readonly loginUserNameEdit: Locator;
  readonly supervisorResultTable: Locator;
  readonly groupTextView: Locator;
  readonly groupComboBox: Locator;
  readonly divisionTextView: Locator;
  readonly divisionComboBox: Locator;
  readonly teamTextView: Locator;
  readonly teamComboBox: Locator;
  readonly sectionTextView: Locator;
  readonly sectionComboBox: Locator;
  readonly showAllCheckBox: Locator;
  readonly settingsIcon: Locator;
  readonly badgeField: Locator;
  readonly supervisorLookUpButton: Locator;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly sortOrderDropDown: Locator;
  readonly shiftDropdown: Locator;
  readonly typeDropdown: Locator;
  readonly detailHierarchyOrderDropDown: Locator;
  readonly titleRankDropDown: Locator;
  readonly detailRateTypeDropDown: Locator;
  readonly squadDropDown: Locator;
  readonly jobGradeDropDown: Locator;
  readonly nextReviewDueInDropDown: Locator;
  readonly byDateEdit: Locator;
  readonly shiftRadDropDownInput: Locator;
  readonly shiftRadDropDownArrow: Locator;
  readonly groupRadDropDownArrow: Locator;
  readonly groupRadDropDownInput: Locator;
  readonly typeRadDropDownArrow: Locator;
  readonly typeRadDropDownInput: Locator;
  readonly detailHierachyOrderArrow: Locator;
  readonly detailHierachyOrderInput: Locator;
  readonly titleOrRankArrow: Locator;
  readonly titleOrRankInput: Locator;
  readonly detailRateTypeInput: Locator;
  readonly detailRateTypeArrow: Locator;
  readonly squadArrow: Locator;
  readonly squadInput: Locator;
  readonly teamArrow: Locator;
  readonly teamInput: Locator;
  readonly workHistoryArrow: Locator;
  readonly workHistoryInput: Locator;
  readonly medicalHistoryCodeArrow: Locator;
  readonly medicalHistoryCodeInput: Locator;
  readonly securityRolesArrow: Locator;
  readonly securityRoleInput: Locator;
  readonly specialSkillsArrow: Locator;
  readonly specialSkillInput: Locator;
  readonly workHistoryCategoryDropDown: Locator;
  readonly medicalHistroyDropDown: Locator;
  readonly securityRolesDropDown: Locator;
  readonly specialSkillsDropDown: Locator;
  readonly supervisorDescriptionEdit: Locator;
  readonly squadLabel: Locator;
  readonly medicalHistroyDropDownInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchButton = page.locator("//span[contains(text(),\'Search\')]");
    this.resetButton = page.locator("//span[contains(text(),\'Reset\')]");
    this.backButton = page.locator("//span[contains(text(),\'Back\')]");
    this.pFCodeEdit = page.locator('#lupOffPFID_CodeValue');
    this.pFDesEdit = page.locator('#lupOffPFID_CodeDescription');
    this.supervisorCodeEdit = page.locator('#lupSupervisor_CodeValue');
    this.supervisorInfoButton = page.locator('#lupSupervisor_cmdIncOnAddr');
    this.loginUserNameEdit = page.locator('#txtLoginUserName');
    this.supervisorResultTable = page.locator('#grdPersonnel');
    this.groupTextView = page.locator('#lblWorkgroup');
    this.groupComboBox = page.locator('#cddWorkgroup_DropDown');
    this.divisionTextView = page.locator('#lblDivision');
    this.divisionComboBox = page.locator('#cddDivision_DropDown');
    this.teamTextView = page.locator('#lblTeam');
    this.teamComboBox = page.locator('#cddTeam_DropDown');
    this.sectionTextView = page.locator('#lblSection');
    this.sectionComboBox = page.locator('#cddSection_DropDown');
    this.showAllCheckBox = page.locator('#chkShowAll');
    this.settingsIcon = page.locator("//a[@class=\'igdm_BlueThemeMenuItemHorizontalRootLink \']//img[contains(@src,\'Phoenix/Settings_16.png\')]");
    this.badgeField = page.locator('#txtBadgeNo');
    this.supervisorLookUpButton = page.locator('#lupSupervisor_imgBtn');
    this.lastNameEdit = page.locator('#txtLastName');
    this.firstNameEdit = page.locator('#txtFirstName');
    this.sortOrderDropDown = page.locator('#cddOrderBy');
    this.shiftDropdown = page.locator('#cddShift_DropDown');
    this.typeDropdown = page.locator('#cddType_DropDown');
    this.detailHierarchyOrderDropDown = page.locator('#cddDetailPeckingOrder_DropDown');
    this.titleRankDropDown = page.locator('#cddTitleRank_DropDown');
    this.detailRateTypeDropDown = page.locator('#cddDetailRateType_DropDown');
    this.squadDropDown = page.locator('#cddSquad_DropDown');
    this.jobGradeDropDown = page.locator('#cddJobGrade');
    this.nextReviewDueInDropDown = page.locator('#cddNextReviewDuein_DropDown');
    this.byDateEdit = page.locator('#dtmORBy_KPIDttmCtrl');
    this.shiftRadDropDownInput = page.locator('#cddShift_Input');
    this.shiftRadDropDownArrow = page.locator('#cddShift_Arrow');
    this.groupRadDropDownArrow = page.locator('#cddWorkgroup_Arrow');
    this.groupRadDropDownInput = page.locator('#cddWorkgroup_Input');
    this.typeRadDropDownArrow = page.locator('#cddType_Arrow');
    this.typeRadDropDownInput = page.locator('#cddType_Input');
    this.detailHierachyOrderArrow = page.locator('#cddDetailPeckingOrder_Arrow');
    this.detailHierachyOrderInput = page.locator('#cddDetailPeckingOrder_Input');
    this.titleOrRankArrow = page.locator('#cddTitleRank_Arrow');
    this.titleOrRankInput = page.locator('#cddTitleRank_Input');
    this.detailRateTypeInput = page.locator('#cddDetailRateType_Input');
    this.detailRateTypeArrow = page.locator('#cddDetailRateType_Arrow');
    this.squadArrow = page.locator('#cddSquad_Arrow');
    this.squadInput = page.locator('#cddSquad_Input');
    this.teamArrow = page.locator('#cddTeam_Arrow');
    this.teamInput = page.locator('#cddTeam_Input');
    this.workHistoryArrow = page.locator('#cddWorkHistroy_Arrow');
    this.workHistoryInput = page.locator('#cddWorkHistroy_Input');
    this.medicalHistoryCodeArrow = page.locator('#cddMedicalHistory_Arrow');
    this.medicalHistoryCodeInput = page.locator('#cddMedicalHistory_Input');
    this.securityRolesArrow = page.locator('#cddSecurityRoles_Arrow');
    this.securityRoleInput = page.locator('#cddSecurityRoles_Input');
    this.specialSkillsArrow = page.locator('#cddSpecialSkills_Arrow');
    this.specialSkillInput = page.locator('#cddSpecialSkills_Input');
    this.workHistoryCategoryDropDown = page.locator('#cddWorkHistroy_DropDown');
    this.medicalHistroyDropDown = page.locator('#cddMedicalHistory_DropDown');
    this.securityRolesDropDown = page.locator('#cddSecurityRoles_DropDown');
    this.specialSkillsDropDown = page.locator('#cddSpecialSkills_DropDown');
    this.supervisorDescriptionEdit = page.locator('#lupSupervisor_CodeDescription');
    this.squadLabel = page.locator('#lblSquad');
    this.medicalHistroyDropDownInput = page.locator('#cddMedicalHistory_Input');
  }

  async clickSupervisorInfoicon(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uISupervisorInfoButton.click();
  }

  async clickSearch(): Promise<void> {
    // Playback.setFocus();
    // uIMapPersonnel.supervisorSearch.uISearchButton.click();
  }

  async selectRowAtPFCode(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapPersonnel.supervisorSearch.uISupervisorResultTable,
    // BaseData.getPersonnelModuleValue("PFCode"));
  }

  async verifySupervisorColumnNotPresent(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridHeaderTableRow(uIMapPersonnel.supervisorSearch.uISupervisorResultTable).getText();
    // System.out.println(text);
    // verify.ExpectedValueIsFalse(text.contains("Supervisor"));
  }

  async clickBackButton(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uIBackButton.click();
  }

  async clickShowAllCheckbox(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uIShowAllCheckBox.click();
  }

  async verifyAtSupervisor(): Promise<void> {
    // WebElement supervisor = objectIdentification.manualIdentify.getGridCell(
    // uIMapPersonnel.supervisorSearch.uISupervisorResultTable,
    // BaseData.getPersonnelModuleValue("PFCode1"), "Supervisor");
    // System.out.println(supervisor);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Supervisor"), supervisor.getText());
  }

  async verifyColumnDisplayIconIsNotDisplayed(): Promise<void> {
    // boolean displayed = uIMapPersonnel.supervisorSearch.uISettingsIcon.isDisplayed();
    // verify.ExpectedValueIsFalse(displayed);
  }

  async enterAtBadge(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uIBadgeField.sendKeys(BaseData.getPersonnelModuleValue("Badge"));
  }

  async verifyAtBadgefield(): Promise<void> {
    // String Text = uIMapPersonnel.personnelSearch.uIBadgeField.getAttribute("value");
    // System.out.println(Text);
    // verify.ExpectedValueIsFalse(Text.contains(BaseData.getPersonnelModuleValue("Badge")));
  }

  async verifySupervisorLookUpIconIsDisabled(): Promise<void> {
    // String enabled = uIMapPersonnel.personnelSearch.uISupervisorLookUpIcon.getAttribute("class");
    // verify.ExpectedPropertyValueIsEqual(enabled,"lookuplensinactive");
  }

  async enterAtPF(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uIPFCodeEdit.sendKeys(BaseData.getPersonnelModuleValue("PF"));
  }

  async enterAtFirtName(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uIFirstNameEdit.sendKeys(BaseData.getPersonnelModuleValue("FirstName"));
  }

  async enterAtLastName(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uILastNameEdit.sendKeys(BaseData.getPersonnelModuleValue("LastName"));
  }

  async selectAtSortOrder(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.supervisorSearch.uISortOrderDropDown, BaseData.getPersonnelModuleValue("SortOrder"));
  }

  async verifyAtPFNameWithPFCode(): Promise<void> {
    // String PFName = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.supervisorSearch.uISupervisorResultTable, BaseData.getPersonnelModuleValue("PFCode"), "PF Name").getText();
    // verify.ExpectedPropertyValueIsEqual(PFName, BaseData.getPersonnelModuleValue("PFName"));
  }

  async selectAtDivision(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.supervisorSearch.uIDivisionComboBox,
    // BaseData.getPersonnelModuleValue("Division"));
  }

  async selectAtSection(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.supervisorSearch.uISectionComboBox,
    // BaseData.getPersonnelModuleValue("Section"));
  }

  async selectAtShift(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.supervisorSearch.uIShiftDropdown,
    // BaseData.getPersonnelModuleValue("Shift"));
  }

  async selectAtType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.supervisorSearch.uITypeDropdown,
    // BaseData.getPersonnelModuleValue("Type"));
  }

  async selectAtGroup(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.supervisorSearch.uIGroupComboBox,
    // BaseData.getPersonnelModuleValue("Group"));
  }

  async selectAtDetailhierarchyOrder(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.supervisorSearch.uIDetailHierarchyOrderDropDown,
    // BaseData.getPersonnelModuleValue("DetailHierarchyOrder"));
  }

  async selectAtTitleRank(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.supervisorSearch.uITitleRankDropDown,
    // BaseData.getPersonnelModuleValue("TitleRank"));
  }

  async selectAtDetailRateType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.supervisorSearch.uIDetailRateTypeDropDown,
    // BaseData.getPersonnelModuleValue("DetailRateType"));
  }

  async selectAtTeam(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.supervisorSearch.uITeamComboBox,
    // BaseData.getPersonnelModuleValue("Team"));
  }

  async selectAtBadge(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uIBadgeField.sendKeys(BaseData.getPersonnelModuleValue("Badge"));
  }

  async selectAtSquad(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.supervisorSearch.uISquadDropDown,
    // BaseData.getPersonnelModuleValue("Squad"));
  }

  async selectAtJobGrade(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.supervisorSearch.uIjobGradeDropDown,
    // BaseData.getPersonnelModuleValue("JobGrade"));
  }

  async selectAtNextReviewDueIn(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.supervisorSearch.uINextReviewDueInDropDown,
    // BaseData.getPersonnelModuleValue("NextReviewDueIn"));
  }

  async verifyAtShiftWithPFCode(): Promise<void> {
    // String Shift = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.supervisorSearch.uISupervisorResultTable, BaseData.getPersonnelModuleValue("PFCode"), "Shift").getText();
    // verify.ExpectedPropertyValueIsEqual(Shift, BaseData.getPersonnelModuleValue("Shift"));
  }

  async verifyAtGroupWithPFCode(): Promise<void> {
    // String Shift = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.supervisorSearch.uISupervisorResultTable, BaseData.getPersonnelModuleValue("PFCode"), "Group").getText();
    // verify.ExpectedPropertyValueIsEqual(Shift, BaseData.getPersonnelModuleValue("Group"));
  }

  async verifyAtTitleWithPFCode(): Promise<void> {
    // String Shift = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.supervisorSearch.uISupervisorResultTable, BaseData.getPersonnelModuleValue("PFCode"), "Title").getText();
    // verify.ExpectedPropertyValueIsEqual(Shift, BaseData.getPersonnelModuleValue("Title"));
  }

  async verifyAtSectionWithPFCode(): Promise<void> {
    // String Shift = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.supervisorSearch.uISupervisorResultTable, BaseData.getPersonnelModuleValue("PFCode"), "Sections").getText();
    // verify.ExpectedPropertyValueIsEqual(Shift, BaseData.getPersonnelModuleValue("Section"));
  }

  async verifyAtDivisionWithPFCode(): Promise<void> {
    // String Shift = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.supervisorSearch.uISupervisorResultTable, BaseData.getPersonnelModuleValue("PFCode"), "Division").getText();
    // verify.ExpectedPropertyValueIsEqual(Shift, BaseData.getPersonnelModuleValue("Division"));
  }

  async verifyAtBadgeWithPFCode(): Promise<void> {
    // String Shift = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.supervisorSearch.uISupervisorResultTable, BaseData.getPersonnelModuleValue("PFCode"), "Badge").getText();
    // verify.ExpectedPropertyValueIsEqual(Shift, BaseData.getPersonnelModuleValue("Badge"));
  }

  async verifyAtJobGradeWithPFCode(): Promise<void> {
    // String Shift = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.supervisorSearch.uISupervisorResultTable, BaseData.getPersonnelModuleValue("PFCode"), "Job Grade").getText();
    // verify.ExpectedPropertyValueIsEqual(Shift, BaseData.getPersonnelModuleValue("JobGrade"));
  }

  async enterAtBy(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uIByDateEdit.sendKeys(BaseData.getPersonnelModuleValue("By"));
  }

  async clickResetButton(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uIResetButton.click();
  }

  async verifySupervisorColumnIsPresent(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridHeaderTableRow(uIMapPersonnel.supervisorSearch.uISupervisorResultTable).getText();
    // System.out.println(text);
    // verify.ExpectedValueIsTrue(text.contains("Supervisor"));
  }

  async clickGroupLabel(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uIGroupTextView.click();
  }

  async selectAtCheckAllInShiftRadDropDown(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uIShiftRadDropDownArrow.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(uIMapPersonnel.supervisorSearch.uIShiftDropdown, BaseData.getPersonnelModuleValue("CheckAllShift"));
    // uIMapPersonnel.supervisorSearch.uIShiftRadDropDownArrow.click();
  }

  async verifyAtSelectedOptionInShiftDropDown(): Promise<void> {
    // String attribute = 	uIMapPersonnel.supervisorSearch.uIShiftRadDropDownInput.getAttribute("value");
    // System.out.println(attribute+"+-----------CheckAllShift");
  }

  async selectAtCheckAllInGroupRadDropDown(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uIGroupRadDropDownArrow.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(uIMapPersonnel.supervisorSearch.uIGroupComboBox, BaseData.getPersonnelModuleValue("CheckAllGroup"));
    // uIMapPersonnel.supervisorSearch.uIGroupRadDropDownArrow.click();
  }

  async verifyAtSelectedOptionInGroupDropDown(): Promise<void> {
    // String attribute = 	uIMapPersonnel.supervisorSearch.uIGroupRadDropDownInput.getAttribute("value");
    // System.out.println(attribute+"+-----------CheckAllGroup");
  }

  async selectAtCheckAllInTypeRadDropDown(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uITypeRadDropDownArrow.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(uIMapPersonnel.supervisorSearch.uITypeDropdown, BaseData.getPersonnelModuleValue("CheckAllType"));
    // uIMapPersonnel.supervisorSearch.uITypeRadDropDownArrow.click();
  }

  async verifyAtSelectedOptionInTypeDropDown(JsonKeyIndex: number): Promise<void> {
    // String Type = 	uIMapPersonnel.supervisorSearch.uITypeRadDropDownInput.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(Type, BaseData.getPersonnelModuleValue("TypeInput"+JsonKeyIndex));
  }

  async selectAtCheckAllInDetailHierarchyOrderRadDropDown(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uIDetailHierachyOrderArrow.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(uIMapPersonnel.supervisorSearch.uIDetailHierarchyOrderDropDown, BaseData.getPersonnelModuleValue("CheckAllDetailHierarchyOrder"));
    // uIMapPersonnel.supervisorSearch.uIDetailHierachyOrderArrow.click();
  }

  async verifyAtSelectedOptionInDetailHierarchyOrderRadDropDown(JsonKeyIndex: number): Promise<void> {
    // String DetailHierarchyOrder = uIMapPersonnel.supervisorSearch.uIDetailHierachyOrderInput.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(DetailHierarchyOrder, BaseData.getPersonnelModuleValue("DetailHierarchyOrder"+JsonKeyIndex));
  }

  async selectAtCheckAllInTitleOrRankDropDown(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uITitleOrRankArrow.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(uIMapPersonnel.supervisorSearch.uITitleRankDropDown, BaseData.getPersonnelModuleValue("CheckAllTitleRank"));
    // uIMapPersonnel.supervisorSearch.uITitleOrRankArrow.click();
  }

  async verifyAtSelectedOptionInTitleOrRankRadDropDown(JsonKeyIndex: number): Promise<void> {
    // String TitleOrRank = uIMapPersonnel.supervisorSearch.uITitleOrRankInput.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(TitleOrRank, BaseData.getPersonnelModuleValue("TitleOrRank"+JsonKeyIndex));
  }

  async selectAtCheckAllInDetailRateTypeRadDropDown(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uIDetailRateTypeArrow.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(uIMapPersonnel.supervisorSearch.uIDetailRateTypeDropDown, BaseData.getPersonnelModuleValue("CheckAllDetailRateType"));
    // uIMapPersonnel.supervisorSearch.uIDetailRateTypeArrow.click();
  }

  async verifyAtSelectedOptionInDetailRateTypeRadDropDown(JsonKeyIndex: number): Promise<void> {
    // String DetailRateType = uIMapPersonnel.supervisorSearch.uIDetailRateTypeInput.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(DetailRateType, BaseData.getPersonnelModuleValue("DetailRateType"+JsonKeyIndex));
  }

  async selectAtCheckAllInSquadRadDropDown(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uISquadArrow.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(uIMapPersonnel.supervisorSearch.uISquadDropDown, BaseData.getPersonnelModuleValue("CheckAllSquad"));
    // uIMapPersonnel.supervisorSearch.uISquadArrow.click();
  }

  async verifyAtSelectedOptionInSquadRadDropDown(JsonKeyIndex: number): Promise<void> {
    // String Squad = uIMapPersonnel.supervisorSearch.uISquadInput.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(Squad, BaseData.getPersonnelModuleValue("Squad"+JsonKeyIndex));
  }

  async selectAtCheckAllInTeamRadDropDown(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uITeamArrow.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(uIMapPersonnel.supervisorSearch.uITeamComboBox, BaseData.getPersonnelModuleValue("CheckAllTeam"));
    // uIMapPersonnel.supervisorSearch.uITeamArrow.click();
  }

  async verifyAtSelectedOptionInTeamRadDropDown(JsonKeyIndex: number): Promise<void> {
    // String Team = uIMapPersonnel.supervisorSearch.uITeamInput.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(Team, BaseData.getPersonnelModuleValue("Team"+JsonKeyIndex));
  }

  async selectAtCheckAllInWorkHistoryCategoryRadDropDown(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uIWorkHistoryArrow.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(uIMapPersonnel.supervisorSearch.uIWorkHistoryCategoryDropDown, BaseData.getPersonnelModuleValue("CheckAllWorkHistiryCategory"));
    // uIMapPersonnel.supervisorSearch.uIWorkHistoryArrow.click();
  }

  async verifyAtSelectedOptionInWorkHistoryRadDropDown(JsonKeyIndex: number): Promise<void> {
    // String WorkHistory = uIMapPersonnel.supervisorSearch.uIWorkHistoryInput.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(WorkHistory, BaseData.getPersonnelModuleValue("WorkHistory"+JsonKeyIndex));
  }

  async selectAtCheckAllInMedicalHistoryCodeRadDropDown(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uIMedicalHistoryCodeArrow.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(uIMapPersonnel.supervisorSearch.uIMedicalHistroyDropDown, BaseData.getPersonnelModuleValue("CheckAllMecialHistory"));
    // uIMapPersonnel.supervisorSearch.uIMedicalHistoryCodeArrow.click();
  }

  async verifyAtSelectedOptionInMedicalHistoryRadDropDown(JsonKeyIndex: number): Promise<void> {
    // String MedicalHistory = uIMapPersonnel.supervisorSearch.uIMedicalHistroyDropDownInput.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(MedicalHistory, BaseData.getPersonnelModuleValue("MedicalHistory"+JsonKeyIndex));
  }

  async selectAtCheckAllInSecurityRolesRadDropDown(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uISecurityRolesArrow.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(uIMapPersonnel.supervisorSearch.uISecurityRolesDropDown, BaseData.getPersonnelModuleValue("CheckAllSecurity"));
    // uIMapPersonnel.supervisorSearch.uISecurityRolesArrow.click();
  }

  async verifyAtSelectedOptionInSecurityRadDropDown(JsonKeyIndex: number): Promise<void> {
    // String Security = uIMapPersonnel.supervisorSearch.uISecurityRoleInput.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(Security, BaseData.getPersonnelModuleValue("Security"+JsonKeyIndex));
  }

  async selectAtCheckAllInSpecialSkillsRadDropDown(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uISpecialSkillsArrow.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(uIMapPersonnel.supervisorSearch.uISpecialSkillsDropDown, BaseData.getPersonnelModuleValue("CheckAllSpecialSkills"));
    // uIMapPersonnel.supervisorSearch.uISpecialSkillsArrow.click();
  }

  async verifyAtSelectedOptionInSpecialSkillsRadDropDown(JsonKeyIndex: number): Promise<void> {
    // String SpecialSkills = uIMapPersonnel.supervisorSearch.uISpecialSkillInput.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(SpecialSkills, BaseData.getPersonnelModuleValue("SpecialSkills"+JsonKeyIndex));
  }

  async verifyAtSupervisorCodeField(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("SupervisorCode"),uIMapPersonnel.supervisorSearch.uISupervisorCodeEdit.getAttribute("value"));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("SupervisorDescription"),uIMapPersonnel.supervisorSearch.uISupervisorDescriptionEdit.getAttribute("value"));
  }

  async verifyAtSupervisorCodeIsDisabled(): Promise<void> {
    // String enabled = uIMapPersonnel.supervisorSearch.uISupervisorCodeEdit.getAttribute("readonly");
    // verify.ExpectedPropertyValueIsEqual(enabled, "true");
  }

  async verifyAtSupervisorCodeDescriptionIsDisabled(): Promise<void> {
    // String enabled = uIMapPersonnel.supervisorSearch.uISupervisorCodeEdit.getAttribute("readonly");
    // verify.ExpectedPropertyValueIsEqual(enabled, "true");
  }

  async verifyAtSortBy(): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem( uIMapPersonnel.supervisorSearch.uISortOrderDropDown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("SortBy"), dropDownSelectedItem);
  }

  async verifyAtGroupIsDisabled(): Promise<void> {
    // boolean enabled = uIMapPersonnel.supervisorSearch.uIGroupRadDropDownInput.isEnabled();
    // verify.ExpectedValueIsFalse(enabled, "GroupRadDropDownInput is enabled it should not be");
  }

  async verifyAtDivisionIsDisabled(): Promise<void> {
    // boolean enabled = uIMapPersonnel.supervisorSearch.uIDivisionComboBox.isEnabled();
    // verify.ExpectedValueIsFalse(enabled, "uIDivisionComboBox is enabled it should not be");
  }

  async verifyAtSectionIsDisabled(): Promise<void> {
    // boolean enabled = uIMapPersonnel.supervisorSearch.uISectionComboBox.isEnabled();
    // verify.ExpectedValueIsFalse(enabled, "uISectionComboBox is enabled it should not be");
  }

  async verifyAtSquadIsDisabled(): Promise<void> {
    // boolean enabled = uIMapPersonnel.supervisorSearch.uISquadInput.isEnabled();
    // verify.ExpectedValueIsFalse(enabled, "uISquadInput is enabled it should not be");
  }

  async verifyAtTeamIsDisabled(): Promise<void> {
    // boolean enabled = uIMapPersonnel.supervisorSearch.uITeamInput.isEnabled();
    // verify.ExpectedValueIsFalse(enabled, "uISquadInput is enabled it should not be");
  }

  async verifyAtGroupIsEnabled(): Promise<void> {
    // boolean enabled = uIMapPersonnel.supervisorSearch.uIGroupRadDropDownInput.isEnabled();
    // verify.ExpectedValueIsTrue(enabled, "GroupRadDropDownInput should be enabled ");
  }

  async verifyAtDivisionIsEnabled(): Promise<void> {
    // boolean enabled = uIMapPersonnel.supervisorSearch.uIDivisionComboBox.isEnabled();
    // verify.ExpectedValueIsTrue(enabled, "uIDivisionComboBox should be enabled ");
  }

  async verifyAtSectionIsEnabled(): Promise<void> {
    // boolean enabled = uIMapPersonnel.supervisorSearch.uISectionComboBox.isEnabled();
    // verify.ExpectedValueIsTrue(enabled, "uISectionComboBox should be enabled ");
  }

  async verifyAtSquadIsEnabled(): Promise<void> {
    // boolean enabled = uIMapPersonnel.supervisorSearch.uISquadInput.isEnabled();
    // verify.ExpectedValueIsTrue(enabled, "uISquadInput should be enabled ");
  }

  async verifyAtTeamIsEnabled(): Promise<void> {
    // boolean enabled = uIMapPersonnel.supervisorSearch.uITeamInput.isEnabled();
    // verify.ExpectedValueIsTrue(enabled, "uISquadInput should be enabled ");
  }

  async clickDivisionLabel(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uIDivisionTextView.click();
  }

  async clickSectionLabel(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uISectionTextView.click();
  }

  async clickSquadLabel(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uISquadLabel.click();
  }

  async clickTeamLabel(): Promise<void> {
    // uIMapPersonnel.supervisorSearch.uITeamTextView.click();
  }

}

export class InjuryReportEntryPage {
  readonly page: Page;
  readonly dateOfInjuryEdit: Locator;
  readonly timeOfInjuryEdit: Locator;
  readonly typeOfInjuryComboBox: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly statusLabel: Locator;
  readonly deleteButton: Locator;
  readonly pFNoEdit: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly injuryDetailTab: Locator;
  readonly injuryApprovalTab: Locator;
  readonly printIcon: Locator;
  readonly resetIcon: Locator;
  readonly pFInfoIcon: Locator;
  readonly pFSearchIcon: Locator;
  readonly qAFormsTab: Locator;
  readonly jurisDropDown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dateOfInjuryEdit = page.locator('#dttmEntryDateInjury_Date_KPIDttmCtrl');
    this.timeOfInjuryEdit = page.locator("//table[@id=\'dttmEntryDateInjury_Time\']//input");
    this.typeOfInjuryComboBox = page.locator('#cddTypeofInjury_DropDown');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.statusLabel = page.locator('#lblApprovalStatus');
    this.deleteButton = page.locator('#cmdDelete');
    this.pFNoEdit = page.locator('#lupPF_CodeValue');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.injuryDetailTab = page.locator("//span[contains(text(),\'Injury Detail\')]");
    this.injuryApprovalTab = page.locator("//span[text()=\'Approval\']");
    this.printIcon = page.locator('#cmdPrint');
    this.resetIcon = page.locator('#cmdRefresh');
    this.pFInfoIcon = page.locator('#lupPF_cmdIncOnAddr');
    this.pFSearchIcon = page.locator('#lupPF_imgBtn');
    this.qAFormsTab = page.locator("//span[text()=\'QA Forms\']");
    this.jurisDropDown = page.locator('#lstJuris');
  }

  async tabOutDateOfInjury(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.uIDateOfInjuryEdit.sendKeys(Keys.TAB);
  }

  async selectAtTypeOfInjury(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.injuryReportEntry.uITypeOfInjuryComboBox,
    // BaseData.getPersonnelModuleValue("TypeOfInjury"));
  }

  async saveNClose(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.uISaveNCloseButton.click();
    // popup.confirm.yes();
  }

  async close(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.driver.close();
  }

  async verifyStatusAsApproved(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("Approved", uIMapPersonnel.injuryReportEntry.uIStatusLabel.getText());
  }

  async verifyDeleteIconIsDisabled(): Promise<void> {
    // String status = uIMapPersonnel.injuryReportEntry.uIDeleteButton.getAttribute("disabled");
    // verify.ExpectedValueIsTrue(status.contains("false"));// Actually to be change as TRUE
  }

  async clickDeleteIcon(): Promise<void> {
    // try {
    // uIMapPersonnel.injuryReportEntry.uIDeleteButton.click();
    // } catch (Exception e) {
    // Playback.actionDriver.click(uIMapPersonnel.injuryReportEntry.uIDeleteButton).build().perform();
  }

  async verifyConfirmationDeleteMessageAsNo(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // popup.confirm.noWithExpectedMessage("(4)Do you really want to delete?");
    // //			if (Playback.browserType.equals("Chrome")) {
    // //				popup.confirm.noWithExpectedMessage("(4)     Do you really want to delete?");
    // //			} else {
    // //				popup.switchToConfirm();
    // //				Playback.controlReadyThreadWait();
    // //				popup.confirm.noWithExpectedMessage("(4) Do you really want to delete?");
    // //			}
  }

  async verifyConfirmationDeleteMessageAsYes(): Promise<void> {
    // popup.confirm.yesWithExpectedMessage("(4) Do you really want to delete?");
  }

  async tabOutPFNo(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.uIPFNoEdit.sendKeys(Keys.TAB);
  }

  async tabOutTimeOfInjury(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.uITimeOfInjuryEdit.sendKeys(Keys.TAB);
  }

  async selectTypeOfInjury(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapPersonnel.injuryReportEntry.uITypeOfInjuryComboBox);
    // uIMapPersonnel.injuryReportEntry.uITypeOfInjuryComboBox.sendKeys(Keys.TAB);
  }

  async save(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapPersonnel.injuryReportEntry.uIBottomLeftSideStatusBar.getText());
  }

  async clickAttachmentsTab(): Promise<void> {
    // uIMapPersonnel.personnelEntry.uIAttachmentTab.click();
    // objectIdentification.windowHandle.switchToFrame("frmTxtAttachMgrEx.aspx");
  }

  async clickInjuryDetailTab(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.uIInjuryDetailTab.click();
  }

  async verifyDeleteIconIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.injuryReportEntry.uIDeleteButton.isEnabled(),
    // "Delete icon is Disabled --> ");
  }

  async switchApprovalTab(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.uIInjuryApprovalTab.click();
    // objectIdentification.windowHandle.switchToFrame("frmPnxGlobalApproval");
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.uIPrintIcon.click();
  }

  async clickResetIcon(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.uIResetIcon.click();
  }

  async verifyStatusAsOnHold(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("On Hold", uIMapPersonnel.injuryReportEntry.uIStatusLabel.getText());
  }

  async clickPFInfoIcon(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.uIPFInfoIcon.click();
  }

  async selectAtPFCode(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.uIPFSearchIcon.click();
    // popup.switchToCodedSearch();
    // popup.kPICodedLookup.enterAtCode();
    // popup.kPICodedLookup.clickSearchIcon();
    // popup.kPICodedLookup.selectAtPFCode();
  }

  async verifyStatusAsSubmitted(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("Submitted", uIMapPersonnel.injuryReportEntry.uIStatusLabel.getText());
  }

  async switchToQAFormTab(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.uIQAFormsTab.click();
    // objectIdentification.windowHandle.switchToFrame("QA/frmQuestionnaire");
  }

  async verifyTabcolorAsBlue(TabName: string): Promise<void> {
    // String cssValue = Playback.driver.findElement(By.xpath("//span[text()='"+TabName+"']")).getCssValue("color");
    // System.out.println(cssValue);
    // verify.ExpectedPropertyValueIsEqual(cssValue, "rgba(0, 0, 255, 1)");
  }

  async verifyStatusAsRejected(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("Rejected", uIMapPersonnel.injuryReportEntry.uIStatusLabel.getText());
  }

}

export class InjuryDetailTabPage {
  readonly page: Page;
  readonly refEdit: Locator;
  readonly unitEdit: Locator;
  readonly howOccuredEdit: Locator;
  readonly natureAndExtentOfInjuryEdit: Locator;
  readonly locationOfIncidentEdit: Locator;
  readonly timeLostDueToInjuryEdit: Locator;
  readonly treatmentDetailsEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.refEdit = page.locator('#tabInjury_tmpl0_usrInjuryDetail1_txtRefCall');
    this.unitEdit = page.locator('#tabInjury_tmpl0_usrInjuryDetail1_lupUnit_CodeValue');
    this.howOccuredEdit = page.locator('#tabInjury_tmpl0_usrInjuryDetail1_txtOccured');
    this.natureAndExtentOfInjuryEdit = page.locator('#tabInjury_tmpl0_usrInjuryDetail1_txtExtendInjury');
    this.locationOfIncidentEdit = page.locator('#tabInjury_tmpl0_usrInjuryDetail1_txtPlaceofInjury');
    this.timeLostDueToInjuryEdit = page.locator('#tabInjury_tmpl0_usrInjuryDetail1_txtTimelost');
    this.treatmentDetailsEdit = page.locator('#tabInjury_tmpl0_usrInjuryDetail1_txtTreatmentDetails');
  }

  async enterAtRef(JsonkeyIndex: number): Promise<void> {
    // if(JsonkeyIndex==0) {
    // uIMapPersonnel.injuryReportEntry.injuryDetailTab.uIRefEdit.click();
    // uIMapPersonnel.injuryReportEntry.injuryDetailTab.uIRefEdit.sendKeys(BaseData.getPersonnelModuleValue("Ref"));
    // else {
    // uIMapPersonnel.injuryReportEntry.injuryDetailTab.uIRefEdit.click();
    // uIMapPersonnel.injuryReportEntry.injuryDetailTab.uIRefEdit.sendKeys(BaseData.getPersonnelModuleValue("Ref"+JsonkeyIndex));
  }

  async verifyAtRefIsNotequal(): Promise<void> {
    // String txt =uIMapPersonnel.injuryReportEntry.injuryDetailTab.uIRefEdit.getAttribute("value");
    // System.out.println(txt);
    // verify.ExpectedPropertyValueIsNotEqual(BaseData.getPersonnelModuleValue("Ref"),txt);
  }

  async enterAtUnit(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.injuryDetailTab.uIUnitEdit.sendKeys(BaseData.getPersonnelModuleValue("Unit"));
  }

  async enterAtNatureAndExtentOFInjury(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.injuryDetailTab.uINatureAndExtentOfInjuryEdit.sendKeys(BaseData.getPersonnelModuleValue("NatureAndExtentOfInjury"));
  }

  async enterAtLocationOfIncident(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.injuryDetailTab.uILocationOfIncidentEdit.sendKeys(BaseData.getPersonnelModuleValue("LocationOfIncident"));
  }

  async enterAtTimeLostDueToInjury(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.injuryDetailTab.uITimeLostDueToInjuryEdit.sendKeys(BaseData.getPersonnelModuleValue("TimeLostDueToInjury"));
  }

  async enterAtTreatmentDetails(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.injuryDetailTab.uITreatmentDetailsEdit.sendKeys(BaseData.getPersonnelModuleValue("TreatmentDetails"));
  }

  async enterAtHowOccured(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.injuryDetailTab.uIHowOccuredEdit.sendKeys(BaseData.getPersonnelModuleValue("HowOccured"));
  }

  async verifyAtRef(): Promise<void> {
    // String txt =uIMapPersonnel.injuryReportEntry.injuryDetailTab.uIRefEdit.getAttribute("value");
    // System.out.println(txt);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Ref"),txt);
  }

  async verifyTabColorAsBlue(TabName: string): Promise<void> {
    // String TabColor = Playback.driver.findElement(By.xpath("//span[text()='"+TabName+"']")).getCssValue("color");
    // System.out.println(TabColor);
    // verify.ExpectedPropertyValueIsEqual(TabColor, "rgba(0, 0, 255, 1)");
    // ;
  }

}

export class ApprovalTabIREPage {
  readonly page: Page;
  readonly actionDropDown: Locator;
  readonly supervisorPFCodeEdit: Locator;
  readonly supervisorPFInfoIcon: Locator;
  readonly dateEdit: Locator;
  readonly timeEdit: Locator;
  readonly saveTime: Locator;
  readonly approvalGrid: Locator;
  readonly internalSave: Locator;
  readonly raterPFLookUPButton: Locator;
  readonly reviewAssignedPFLookUPButton: Locator;
  readonly divisionComboBox: Locator;
  readonly sectionComboBox: Locator;
  readonly raterDateEdit: Locator;
  readonly raterTimeEdit: Locator;
  readonly squadCombobox: Locator;
  readonly reviewerPFLookUPButton: Locator;
  readonly nextReviewDueInDateEdit: Locator;
  readonly enableSignCheckBox: Locator;
  readonly raterSignCheckBox: Locator;
  readonly reviewerDateEdit: Locator;
  readonly declareCheckBox: Locator;
  readonly agreeSignCheckBox: Locator;
  readonly employeeDateEdit: Locator;
  readonly treeSymbolEdit: Locator;
  readonly reviewAssignedPFCodeEdit: Locator;
  readonly raterPFEdit: Locator;
  readonly raterSignImage: Locator;
  readonly raterTimeEditForFire: Locator;
  readonly newActionDropDown: Locator;
  readonly saveButton: Locator;
  readonly approvalTable: Locator;
  readonly dateEdit: Locator;
  readonly timeEdit: Locator;
  readonly authorizeAndSignCheckBox: Locator;
  readonly signImage: Locator;
  readonly rejectionCodeDropDown: Locator;
  readonly saveButton: Locator;
  readonly resetButton: Locator;
  readonly newActionComboBox: Locator;
  readonly dateEdit: Locator;
  readonly timeEdit: Locator;
  readonly notesEdit: Locator;
  readonly divisionComboBox: Locator;
  readonly sectionComboBox: Locator;
  readonly approvalGrid: Locator;
  readonly rejectionCodeDropDown: Locator;
  readonly rejectionCount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.actionDropDown = page.locator('#lstStatus');
    this.supervisorPFCodeEdit = page.locator('#lupSupervisor_CodeValue');
    this.supervisorPFInfoIcon = page.locator('#lupSupervisor_cmdIncOnAddr');
    this.dateEdit = page.locator('#dttStatusDttm_Date_KPIDttmCtrl');
    this.timeEdit = page.locator('#dttStatusDttm_Time');
    this.saveTime = page.locator('#cmdSave');
    this.approvalGrid = page.locator("//table[@id=\'listMsg\']");
    this.internalSave = page.locator('#cmdSave');
    this.raterPFLookUPButton = page.locator('#tabReview_tmpl2_usrApproval_lupRaterPF_imgBtn');
    this.reviewAssignedPFLookUPButton = page.locator('#tabReview_tmpl2_usrApproval_lupAssignPF_imgBtn');
    this.divisionComboBox = page.locator('#tabReview_tmpl2_usrApproval_cddDivision_DropDown');
    this.sectionComboBox = page.locator('#tabReview_tmpl2_usrApproval_cddSection_DropDown');
    this.raterDateEdit = page.locator('#tabReview_tmpl2_usrApproval_dttRaterDttm_Date_KPIDttmCtrl');
    this.raterTimeEdit = page.locator("(//table[@id = \'tabReview_tmpl2_usrApproval_dttRaterDttm_Time\'] //input[@class=\'textboxdatetime igte_BlueThemeEditInContainer\'])");
    this.squadCombobox = page.locator('#tabReview_tmpl2_usrApproval_cddSquad_DropDown');
    this.reviewerPFLookUPButton = page.locator('#tabReview_tmpl2_usrApproval_lupReviewerPF_imgBtn');
    this.nextReviewDueInDateEdit = page.locator('#tabReview_tmpl2_usrApproval_dttmNextReviewDueIn_Date_KPIDttmCtrl');
    this.enableSignCheckBox = page.locator('#tabReview_tmpl2_usrApproval_imgReviewer_chkIsEnableSign');
    this.raterSignCheckBox = page.locator('#tabReview_tmpl2_usrApproval_imgRaterSign_chkIsEnableSign');
    this.reviewerDateEdit = page.locator('#tabReview_tmpl2_usrApproval_dttmReviewerDate_Date_KPIDttmCtrl');
    this.declareCheckBox = page.locator('#tabReview_tmpl2_usrApproval_chkSign');
    this.agreeSignCheckBox = page.locator('#tabReview_tmpl2_usrApproval_imgAgree_chkIsEnableSign');
    this.employeeDateEdit = page.locator('#tabReview_tmpl2_usrApproval_dttmEmployeeRatedDate_Date_KPIDttmCtrl');
    this.treeSymbolEdit = page.locator('#tabReview_tmpl2_usrApproval_imgDivision');
    this.reviewAssignedPFCodeEdit = page.locator('#tabReview_tmpl2_usrApproval_lupAssignPF_CodeValue');
    this.raterPFEdit = page.locator('#tabReview_tmpl2_usrApproval_lupRaterPF_CodeValue');
    this.raterSignImage = page.locator('#tabReview$tmpl2$usrApproval$imgRaterSign$imgSign');
    this.raterTimeEditForFire = page.locator("(//table[@id=\'tabReview_tmpl2_usrApproval_dttRaterDttm_Time\']//input[@class=\'textboxdatetime igte_RedThemeEditInContainer\'])");
    this.newActionDropDown = page.locator('#lstStatus');
    this.saveButton = page.locator('#cmdSave');
    this.approvalTable = page.locator('#listMsg');
    this.dateEdit = page.locator('#dttStatusDttm_Date_KPIDttmCtrl');
    this.timeEdit = page.locator("//table[@id=\'dttStatusDttm_Time\']//input");
    this.authorizeAndSignCheckBox = page.locator('#imgPFSign_chkIsEnableSign');
    this.signImage = page.locator('#imgPFSign_imgSign');
    this.rejectionCodeDropDown = page.locator('#cddRejCode_DropDown');
    this.saveButton = page.locator('#cmdSave');
    this.resetButton = page.locator('#cmdReset');
    this.newActionComboBox = page.locator('#lstStatus');
    this.dateEdit = page.locator('#dttStatusDttm_Date_KPIDttmCtrl');
    this.timeEdit = page.locator("//table[@id=\'dttStatusDttm_Time\']//input");
    this.notesEdit = page.locator('#txtComments');
    this.divisionComboBox = page.locator('#cddDivision_DropDown');
    this.sectionComboBox = page.locator('#cddSection_DropDown');
    this.approvalGrid = page.locator("//table[@id=\'listMsg\']");
    this.rejectionCodeDropDown = page.locator('#cddRejCode_DropDown');
    this.rejectionCount = page.locator('#lblrejcountvalue');
  }

  async save(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.approvalTab.uISaveButton.click();
    // popup.confirm.yes();
  }

  async selectAtNewAction(JsonKeyIndex: number): Promise<void> {
    // if(JsonKeyIndex==0) {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.injuryReportEntry.approvalTab.uINewActionDropDown, BaseData.getPersonnelModuleValue("NewAction"));
    // else {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.injuryReportEntry.approvalTab.uINewActionDropDown, BaseData.getPersonnelModuleValue("NewAction"+JsonKeyIndex));
  }

  async tabOutDateAndTime(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.approvalTab.uIDateEdit.sendKeys(Keys.TAB);
    // uIMapPersonnel.injuryReportEntry.approvalTab.uITimeEdit.sendKeys(Keys.TAB);
  }

  async clickAuthorizeAndSignCheckbox(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.approvalTab.uIAuthorizeAndSignCheckBox.click();
  }

  async verifySignImageIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.injuryReportEntry.approvalTab.uISignImage.isDisplayed());
  }

  async selectAtRejectionCode(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.injuryReportEntry.approvalTab.uIRejectionCodeDropDown, BaseData.getPersonnelModuleValue("RejectionCode"));
  }

}

export class QaFormTab2Page {
  readonly page: Page;
  readonly selectFormDropdown: Locator;
  readonly qAFromGrid: Locator;
  readonly selectForm: Locator;
  readonly fillFormButton: Locator;
  readonly qAformTabGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selectFormDropdown = page.locator('#cddForm_DropDown');
    this.qAFromGrid = page.locator('#grdQAForms');
    this.selectForm = page.locator('#cddForm_DropDown');
    this.fillFormButton = page.locator('#cmdTakeTest');
    this.qAformTabGrid = page.locator('#grdQAForms');
  }

  async selectAtForm(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.injuryReportEntry.qaFormTab.uISelectForm, BaseData.getPersonnelModuleValue("Form"));
  }

  async clickFillForm(): Promise<void> {
    // uIMapPersonnel.injuryReportEntry.qaFormTab.uIFillFormButton.click();
  }

  async verifyAtFormInGrid(): Promise<void> {
    // String FormaName = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.injuryReportEntry.qaFormTab.uIQAformTabGrid,  BaseData.getPersonnelModuleValue("FormName")).getText();
    // verify.ExpectedPropertyValueIsEqual(FormaName,  BaseData.getPersonnelModuleValue("FormName"));
  }

  async verifyAtJuris(JsonkeyIndex: number): Promise<void> {
    // String dropDwonSelectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapPersonnel.injuryReportEntry.uIJurisDropDown);
    // verify.ExpectedPropertyValueIsEqual(dropDwonSelectedItem, BaseData.getPersonnelModuleValue("EntryJuris"+JsonkeyIndex));
  }

  async verifyAtTypeOfInjury(): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapPersonnel.injuryReportEntry.uITypeOfInjuryComboBox);
    // verify.ExpectedPropertyValueIsEqual(dropDownSelectedItem, BaseData.getPersonnelModuleValue("TypeOfInjury"));
  }

}

export class MedicalHistoryEntryPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly deleteButton: Locator;
  readonly pFNoEdit: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly dateOfEvent: Locator;
  readonly timeOfEvent: Locator;
  readonly medicalCodeDropdown: Locator;
  readonly enteredByEdit: Locator;
  readonly enteredDateEdit: Locator;
  readonly enteredTime: Locator;
  readonly notesEdit: Locator;
  readonly pFNoInfoIcon: Locator;
  readonly enteredByInfoIcon: Locator;
  readonly refreshIcon: Locator;
  readonly enteredByDescription: Locator;
  readonly jurisDropDown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.deleteButton = page.locator('#cmdDelete');
    this.pFNoEdit = page.locator('#lupPF_CodeValue');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.dateOfEvent = page.locator('#dttmDateEvent_Date_KPIDttmCtrl');
    this.timeOfEvent = page.locator("//table[@id=\'dttmDateEvent_Time\']//input");
    this.medicalCodeDropdown = page.locator('#cddMedicalCode_DropDown');
    this.enteredByEdit = page.locator('#lupEnteredBy_CodeValue');
    this.enteredDateEdit = page.locator('#dttmEnteredDate_Date_KPIDttmCtrl');
    this.enteredTime = page.locator("//table[@id=\'dttmEnteredDate_Time\']//input");
    this.notesEdit = page.locator('#txtComment');
    this.pFNoInfoIcon = page.locator('#lupPF_cmdIncOnAddr');
    this.enteredByInfoIcon = page.locator('#lupEnteredBy_cmdIncOnAddr');
    this.refreshIcon = page.locator('#cmdRefresh');
    this.enteredByDescription = page.locator('#lupEnteredBy_CodeDescription');
    this.jurisDropDown = page.locator('#lstJuris');
  }

  async saveNClose(): Promise<void> {
    // uIMapPersonnel.medicalHistoryEntry.uISaveNCloseButton.click();
    // popup.confirm.yes();
  }

  async save(): Promise<void> {
    // uIMapPersonnel.medicalHistoryEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async clickDeleteIcon(): Promise<void> {
    // uIMapPersonnel.medicalHistoryEntry.uIDeleteButton.click();
    // Playback.controlReadyThreadWait();
  }

  async verifyConfirmationDeleteMessage(): Promise<void> {
    // popup.confirm.yesWithExpectedMessage("(4) Do you really want to delete?");
  }

  async tabOutPFNo(): Promise<void> {
    // uIMapPersonnel.medicalHistoryEntry.uIPFNoEdit.sendKeys(Keys.TAB);
  }

  async tabOutDateOfEvent(): Promise<void> {
    // uIMapPersonnel.medicalHistoryEntry.uIDateOfEvent.sendKeys(Keys.TAB);
  }

  async tabOutTimeOfEvent(): Promise<void> {
    // uIMapPersonnel.medicalHistoryEntry.uITimeOfEvent.sendKeys(Keys.TAB);
  }

  async tabOutEnteredByDate(): Promise<void> {
    // uIMapPersonnel.medicalHistoryEntry.uIEnteredDateEdit.sendKeys(Keys.TAB);
  }

  async tabOutEnteredByTime(): Promise<void> {
    // uIMapPersonnel.medicalHistoryEntry.uIEnteredTime.sendKeys(Keys.TAB);
  }

  async selectMediCode(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapPersonnel.medicalHistoryEntry.uIMedicalCodeDropdown);
    // uIMapPersonnel.medicalHistoryEntry.uIMedicalCodeDropdown.sendKeys(Keys.TAB);
  }

  async enteredByAsAUTPOL(): Promise<void> {
    // uIMapPersonnel.medicalHistoryEntry.uIEnteredByEdit.sendKeys("AUTPOL");
    // uIMapPersonnel.medicalHistoryEntry.uIEnteredByEdit.sendKeys(Keys.TAB);
  }

  async enteredByAsFRMS(): Promise<void> {
    // uIMapPersonnel.medicalHistoryEntry.uIEnteredByEdit.sendKeys("FRMS");
    // uIMapPersonnel.medicalHistoryEntry.uIEnteredByEdit.sendKeys(Keys.TAB);
  }

  async enterNotes(): Promise<void> {
    // uIMapPersonnel.medicalHistoryEntry.uINotesEdit.click();
    // uIMapPersonnel.medicalHistoryEntry.uINotesEdit.sendKeys(Randomized.randomString(20));
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapPersonnel.medicalHistoryEntry.uIBottomLeftSideStatusBar.getText());
  }

  async clearPFNo(): Promise<void> {
    // uIMapPersonnel.medicalHistoryEntry.uIPFNoEdit.clear();
  }

  async verifyPFInfoIconIsNotDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.medicalHistoryEntry.uIPFNoInfoIcon.isDisplayed());
  }

  async closeTheScreen(): Promise<void> {
    // Playback.driver.close();
  }

  async tabOutEnteredByField(): Promise<void> {
    // uIMapPersonnel.medicalHistoryEntry.uIEnteredByEdit.sendKeys(Keys.TAB);
  }

  async verifyEnteredByInfoIconIsNotDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.medicalHistoryEntry.uIEnteredByInfoIcon.isDisplayed());
  }

  async verifyDeleteIconIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapPersonnel.medicalHistoryEntry.uIDeleteButton.isEnabled());
  }

  async enterAtPFNo(): Promise<void> {
    // uIMapPersonnel.medicalHistoryEntry.uIPFNoEdit.sendKeys(BaseData.getPersonnelModuleValue("PFCode"));
    // uIMapPersonnel.medicalHistoryEntry.uIPFNoEdit.sendKeys(Keys.TAB);
  }

  async clicksave(): Promise<void> {
    // uIMapPersonnel.medicalHistoryEntry.uISaveButton.click();
  }

  async verifyAtEnterPFIdAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(30033) Enter PF ID.");
  }

  async verifyAtEnterDateOFEventAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(30033) Enter Date of Event.");
  }

  async verifyAtEnterEnteredByAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(30033) Enter Entered By.");
  }

  async verifyAtEnterEnteredDateAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(30033) Enter Entered Date.");
  }

  async verifyAtEnterMedicalCodeAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(30033) Enter Medical Code.");
  }

  async verifyAtEnterNotesAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(30033) Enter Notes.");
  }

  async enterAtEnteredBy(): Promise<void> {
    // uIMapPersonnel.medicalHistoryEntry.uIEnteredByEdit.sendKeys(BaseData.getPersonnelModuleValue("EnteredBy"));
    // uIMapPersonnel.medicalHistoryEntry.uIEnteredByEdit.sendKeys(Keys.TAB);
  }

  async enterAtNotes(JsonKeyIndex: number): Promise<void> {
    // uIMapPersonnel.medicalHistoryEntry.uINotesEdit.click();
    // uIMapPersonnel.medicalHistoryEntry.uINotesEdit.sendKeys(BaseData.getPersonnelModuleValue("Notes"+JsonKeyIndex));
  }

  async verifyAtNotes(JsonKeyIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapPersonnel.medicalHistoryEntry.uINotesEdit.getText(), BaseData.getPersonnelModuleValue("Notes"+JsonKeyIndex));
  }

  async clickRefreshIcon(): Promise<void> {
    // uIMapPersonnel.medicalHistoryEntry.uIRefreshIcon.click();
  }

  async clickPFInfoIcon(): Promise<void> {
    // uIMapPersonnel.medicalHistoryEntry.uIPFNoInfoIcon.click();
  }

  async verifyAtEnteredByPFAndDescription(): Promise<void> {
    // String text = uIMapPersonnel.medicalHistoryEntry.uIEnteredByEdit.getAttribute("value");
    // String Description = 	uIMapPersonnel.medicalHistoryEntry.uIEnteredByDescription.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual( BaseData.getPersonnelModuleValue("EnteredByPF"),text);
    // verify.ExpectedPropertyValueIsEqual(Description, BaseData.getPersonnelModuleValue("EnteredByPFDescription"));
  }

  async selectAtMedicalCode(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapPersonnel.medicalHistoryEntry.uIMedicalCodeDropdown,BaseData.getPersonnelModuleValue("MedicalCode"));
  }

  async verifyAtJuris(Jsonkeyindex: number): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapPersonnel.medicalHistoryEntry.uIJurisDropDown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("ColumnJuris"+Jsonkeyindex),dropDownSelectedItem);
  }

  async verifyConfirmationDeleteMessageAndDismiss(): Promise<void> {
    // popup.confirm.noWithExpectedMessage("(4) Do you really want to delete?");
  }

  async verifyConfirmationDeletePopUpIsNotPresent(): Promise<void> {
    // boolean alertsPresentConditions = objectIdentification.windowHandle.alertsPresentConditions();
    // verify.ExpectedValueIsFalse(alertsPresentConditions);
  }

  async reset(): Promise<void> {
    // uIMapPersonnel = null;
  }

  async switchToMeaningfulReviewSearch(): Promise<void> {
    // objectIdentification.windowHandle.switchToMainWindowScreenTab("Personnel/frmMeaningfulReviewSrch");
  }

}

export class MeaningfulReviewSearchPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly excelIcon: Locator;
  readonly searchButton: Locator;
  readonly searchResultTable: Locator;
  readonly backButton: Locator;
  readonly pfEdit: Locator;
  readonly resetButton: Locator;
  readonly caseYearEdit: Locator;
  readonly caseNumberEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.excelIcon = page.locator("//a//img[@src=\'/KPIImages/ico/16_excel.gif\']");
    this.searchButton = page.locator("//a//span[text()=\'Search\']");
    this.searchResultTable = page.locator('#grdPFReview');
    this.backButton = page.locator("//a//span[text()=\'Back\']");
    this.pfEdit = page.locator('#tabMeaningfulReviewSrch_tmpl0_usrMeaningfulReviewSrchBasic_lupOffPFID_CodeValue');
    this.resetButton = page.locator("//a//span[text()=\'Reset\']");
    this.caseYearEdit = page.locator('#tabMeaningfulReviewSrch_tmpl0_usrMeaningfulReviewSrchBasic_nbrCaseNo_Year');
    this.caseNumberEdit = page.locator('#tabMeaningfulReviewSrch_tmpl0_usrMeaningfulReviewSrchBasic_nbrCaseNo_Number');
  }

  async clickAddNewButton(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewSearch.uIAddNewButton.click();
  }

  async clickExportToExcelIcon(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewSearch.uIExcelIcon.click();
  }

  async clickSearch(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewSearch.uISearchButton.click();
  }

  async verifyRecordsListed(): Promise<void> {
    // int gridTableRowsCount = objectIdentification.manualIdentify.
    // getGridTableRowsCount(uIMapPersonnel.meaningfulReviewSearch.uISearchResultTable);
    // System.out.println(gridTableRowsCount);
    // verify.ExpectedValueIsTrue(gridTableRowsCount>0);
  }

  async clickBack(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewSearch.uIBackButton.click();
  }

  async enterAtPf(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewSearch.uIPfEdit.sendKeys(BaseData.getPersonnelModuleValue("PF"));
    // uIMapPersonnel.meaningfulReviewSearch.uIPfEdit.sendKeys(Keys.TAB);
  }

  async clickReset(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewSearch.uIResetButton.click();
  }

  async verifyPfFieldIsEmpty(): Promise<void> {
    // boolean empty = uIMapPersonnel.meaningfulReviewSearch.uIPfEdit.getAttribute("value").isEmpty();
    // verify.ExpectedValueIsTrue(empty);
  }

  async enterAtCaseNo(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewSearch.uICaseYearEdit.click();
    // uIMapPersonnel.meaningfulReviewSearch.uICaseYearEdit.sendKeys(BaseData.getPersonnelModuleValue("CaseNo").substring(0, 2));
    // uIMapPersonnel.meaningfulReviewSearch.uICaseNumberEdit.click();
    // uIMapPersonnel.meaningfulReviewSearch.uICaseNumberEdit.sendKeys(BaseData.getPersonnelModuleValue("CaseNo").substring(3));
  }

  async verifyNoRecordFoundAcknowledge(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
  }

  async verifyAtCaseWithPFName(): Promise<void> {
    // String Case = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.meaningfulReviewSearch.uISearchResultTable, BaseData.getPersonnelModuleValue("PFName"), "Case#").getText();
    // verify.ExpectedPropertyValueIsEqual(Case, BaseData.getPersonnelModuleValue("CaseNo"));
  }

  async clickAtCaseNoInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapPersonnel.meaningfulReviewSearch.uISearchResultTable, BaseData.getPersonnelModuleValue("CaseNo"));
  }

  async switchToMeaningfulReviewEntry(): Promise<void> {
    // objectIdentification.windowHandle.switchToWindow("Meaningful Review Entry");
  }

}

export class MeaningfulReviewEntryPage {
  readonly page: Page;
  readonly pFCodeEdit: Locator;
  readonly caseYearEdit: Locator;
  readonly caseNumberEdit: Locator;
  readonly saveButton: Locator;
  readonly mainTab: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly qAFormsTab: Locator;
  readonly attachmnentsTab: Locator;
  readonly approvalTab: Locator;
  readonly meaningfulReviewEntryStatusText: Locator;
  readonly saveAndCloseButton: Locator;
  readonly refreshButton: Locator;
  readonly uOFYearEdit: Locator;
  readonly uOFNumberEdit: Locator;
  readonly uOFApprovedByEdit: Locator;
  readonly useOfForcePortalCaseEdit: Locator;
  readonly incidentDateEdit: Locator;
  readonly incidentTimeEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pFCodeEdit = page.locator('#lupForPF_CodeValue');
    this.caseYearEdit = page.locator('#nbrCaseNo_Year');
    this.caseNumberEdit = page.locator('#nbrCaseNo_Number');
    this.saveButton = page.locator('#cmdSave');
    this.mainTab = page.locator("//span[contains(text(),\'Main\')]");
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.qAFormsTab = page.locator("//span[contains(text(),\'QA Forms\')]");
    this.attachmnentsTab = page.locator("//span[contains(text(),\'Attachments\')]");
    this.approvalTab = page.locator("//span[contains(text(),\'Approval\')]");
    this.meaningfulReviewEntryStatusText = page.locator('#lblApprovalStatus');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.refreshButton = page.locator('#cmdRefresh');
    this.uOFYearEdit = page.locator('#nbrUOFNo_Year');
    this.uOFNumberEdit = page.locator('#nbrUOFNo_Number');
    this.uOFApprovedByEdit = page.locator('#txtApproveby');
    this.useOfForcePortalCaseEdit = page.locator('#txtPortalCase');
    this.incidentDateEdit = page.locator('#dtIncDateTime_Date_KPIDttmCtrl');
    this.incidentTimeEdit = page.locator("//table[@id=\'dtIncDateTime_Time\']//input");
  }

  async EnterAtPF(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.uIPFCodeEdit.sendKeys(BaseData.getPersonnelModuleValue("PFCode"));
    // uIMapPersonnel.meaningfulReviewEntry.uIPFCodeEdit.sendKeys(Keys.TAB);
  }

  async EnterAtCaseNo(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.uICaseYearEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("CaseNo").substring(0, 2));
    // uIMapPersonnel.meaningfulReviewEntry.uICaseNumberEdit
    // .sendKeys(BaseData.getPersonnelModuleValue("CaseNo").substring(3));
    // uIMapPersonnel.meaningfulReviewEntry.uICaseNumberEdit.sendKeys(Keys.TAB);
  }

  async saveScreen(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.uISaveButton.click();
    // Playback.controlReadyThreadWait();
    // popup.confirm.yes();
  }

  async clickMainTab(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.uIMainTab.click();
  }

  async switchToQAFormsTab(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.uIQAFormsTab.click();
    // objectIdentification.windowHandle.switchToFrame("frmQuestionnaire.aspx?");
  }

  async switchToAttachmentsTab(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.uIAttachmnentsTab.click();
    // objectIdentification.windowHandle.switchToFrame("frmTxtAttachMgrEx.aspx?");
  }

  async switchToApprovalTab(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.uIApprovalTab.click();
    // objectIdentification.windowHandle.switchToFrame("frmPnxGlobalApproval.aspx?");
  }

  async enterAtUOFNo(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.uIUOFYearEdit.sendKeys(BaseData.getPersonnelModuleValue("UOFNo").subSequence(0, 3));
    // uIMapPersonnel.meaningfulReviewEntry.uIUOFNumberEdit.sendKeys(BaseData.getPersonnelModuleValue("UOFNo").substring(4));
  }

  async enterAtUOFApprovedBy(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.uIUOFApprovedByEdit.sendKeys(BaseData.getPersonnelModuleValue("UOFApprovedBy"));
  }

  async enterAtUseOfForcePortalCase(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.uIUseOfForcePortalCaseEdit.sendKeys(BaseData.getPersonnelModuleValue("UseOfForcePortalCase"));
  }

  async tabOutTheDateAndTimeOfIncident(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.uIIncidentDateEdit.sendKeys(Keys.TAB);
    // uIMapPersonnel.meaningfulReviewEntry.uIIncidentTimeEdit.sendKeys(Keys.TAB);
  }

}

export class ApprovalTabMREPage {
  readonly page: Page;
  readonly actionDropDown: Locator;
  readonly supervisorPFCodeEdit: Locator;
  readonly supervisorPFInfoIcon: Locator;
  readonly dateEdit: Locator;
  readonly timeEdit: Locator;
  readonly saveTime: Locator;
  readonly approvalGrid: Locator;
  readonly internalSave: Locator;
  readonly raterPFLookUPButton: Locator;
  readonly reviewAssignedPFLookUPButton: Locator;
  readonly divisionComboBox: Locator;
  readonly sectionComboBox: Locator;
  readonly raterDateEdit: Locator;
  readonly raterTimeEdit: Locator;
  readonly squadCombobox: Locator;
  readonly reviewerPFLookUPButton: Locator;
  readonly nextReviewDueInDateEdit: Locator;
  readonly enableSignCheckBox: Locator;
  readonly raterSignCheckBox: Locator;
  readonly reviewerDateEdit: Locator;
  readonly declareCheckBox: Locator;
  readonly agreeSignCheckBox: Locator;
  readonly employeeDateEdit: Locator;
  readonly treeSymbolEdit: Locator;
  readonly reviewAssignedPFCodeEdit: Locator;
  readonly raterPFEdit: Locator;
  readonly raterSignImage: Locator;
  readonly raterTimeEditForFire: Locator;
  readonly newActionDropDown: Locator;
  readonly saveButton: Locator;
  readonly approvalTable: Locator;
  readonly dateEdit: Locator;
  readonly timeEdit: Locator;
  readonly authorizeAndSignCheckBox: Locator;
  readonly signImage: Locator;
  readonly rejectionCodeDropDown: Locator;
  readonly saveButton: Locator;
  readonly resetButton: Locator;
  readonly newActionComboBox: Locator;
  readonly dateEdit: Locator;
  readonly timeEdit: Locator;
  readonly notesEdit: Locator;
  readonly divisionComboBox: Locator;
  readonly sectionComboBox: Locator;
  readonly approvalGrid: Locator;
  readonly rejectionCodeDropDown: Locator;
  readonly rejectionCount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.actionDropDown = page.locator('#lstStatus');
    this.supervisorPFCodeEdit = page.locator('#lupSupervisor_CodeValue');
    this.supervisorPFInfoIcon = page.locator('#lupSupervisor_cmdIncOnAddr');
    this.dateEdit = page.locator('#dttStatusDttm_Date_KPIDttmCtrl');
    this.timeEdit = page.locator('#dttStatusDttm_Time');
    this.saveTime = page.locator('#cmdSave');
    this.approvalGrid = page.locator("//table[@id=\'listMsg\']");
    this.internalSave = page.locator('#cmdSave');
    this.raterPFLookUPButton = page.locator('#tabReview_tmpl2_usrApproval_lupRaterPF_imgBtn');
    this.reviewAssignedPFLookUPButton = page.locator('#tabReview_tmpl2_usrApproval_lupAssignPF_imgBtn');
    this.divisionComboBox = page.locator('#tabReview_tmpl2_usrApproval_cddDivision_DropDown');
    this.sectionComboBox = page.locator('#tabReview_tmpl2_usrApproval_cddSection_DropDown');
    this.raterDateEdit = page.locator('#tabReview_tmpl2_usrApproval_dttRaterDttm_Date_KPIDttmCtrl');
    this.raterTimeEdit = page.locator("(//table[@id = \'tabReview_tmpl2_usrApproval_dttRaterDttm_Time\'] //input[@class=\'textboxdatetime igte_BlueThemeEditInContainer\'])");
    this.squadCombobox = page.locator('#tabReview_tmpl2_usrApproval_cddSquad_DropDown');
    this.reviewerPFLookUPButton = page.locator('#tabReview_tmpl2_usrApproval_lupReviewerPF_imgBtn');
    this.nextReviewDueInDateEdit = page.locator('#tabReview_tmpl2_usrApproval_dttmNextReviewDueIn_Date_KPIDttmCtrl');
    this.enableSignCheckBox = page.locator('#tabReview_tmpl2_usrApproval_imgReviewer_chkIsEnableSign');
    this.raterSignCheckBox = page.locator('#tabReview_tmpl2_usrApproval_imgRaterSign_chkIsEnableSign');
    this.reviewerDateEdit = page.locator('#tabReview_tmpl2_usrApproval_dttmReviewerDate_Date_KPIDttmCtrl');
    this.declareCheckBox = page.locator('#tabReview_tmpl2_usrApproval_chkSign');
    this.agreeSignCheckBox = page.locator('#tabReview_tmpl2_usrApproval_imgAgree_chkIsEnableSign');
    this.employeeDateEdit = page.locator('#tabReview_tmpl2_usrApproval_dttmEmployeeRatedDate_Date_KPIDttmCtrl');
    this.treeSymbolEdit = page.locator('#tabReview_tmpl2_usrApproval_imgDivision');
    this.reviewAssignedPFCodeEdit = page.locator('#tabReview_tmpl2_usrApproval_lupAssignPF_CodeValue');
    this.raterPFEdit = page.locator('#tabReview_tmpl2_usrApproval_lupRaterPF_CodeValue');
    this.raterSignImage = page.locator('#tabReview$tmpl2$usrApproval$imgRaterSign$imgSign');
    this.raterTimeEditForFire = page.locator("(//table[@id=\'tabReview_tmpl2_usrApproval_dttRaterDttm_Time\']//input[@class=\'textboxdatetime igte_RedThemeEditInContainer\'])");
    this.newActionDropDown = page.locator('#lstStatus');
    this.saveButton = page.locator('#cmdSave');
    this.approvalTable = page.locator('#listMsg');
    this.dateEdit = page.locator('#dttStatusDttm_Date_KPIDttmCtrl');
    this.timeEdit = page.locator("//table[@id=\'dttStatusDttm_Time\']//input");
    this.authorizeAndSignCheckBox = page.locator('#imgPFSign_chkIsEnableSign');
    this.signImage = page.locator('#imgPFSign_imgSign');
    this.rejectionCodeDropDown = page.locator('#cddRejCode_DropDown');
    this.saveButton = page.locator('#cmdSave');
    this.resetButton = page.locator('#cmdReset');
    this.newActionComboBox = page.locator('#lstStatus');
    this.dateEdit = page.locator('#dttStatusDttm_Date_KPIDttmCtrl');
    this.timeEdit = page.locator("//table[@id=\'dttStatusDttm_Time\']//input");
    this.notesEdit = page.locator('#txtComments');
    this.divisionComboBox = page.locator('#cddDivision_DropDown');
    this.sectionComboBox = page.locator('#cddSection_DropDown');
    this.approvalGrid = page.locator("//table[@id=\'listMsg\']");
    this.rejectionCodeDropDown = page.locator('#cddRejCode_DropDown');
    this.rejectionCount = page.locator('#lblrejcountvalue');
  }

  async SaveInternalTab(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.approvalTab.uISaveButton.click();
    // popup.confirm.yes();
  }

  async SelectAtNewAction(JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.meaningfulReviewEntry.approvalTab.uINewActionComboBox,
    // BaseData.getNamesModuleValue("NewAction"+JsonKeyIndex));
    // uIMapPersonnel.meaningfulReviewEntry.approvalTab.uINewActionComboBox.sendKeys(Keys.TAB);
  }

  async TabDateTime(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.approvalTab.uIDateEdit.sendKeys(Keys.TAB);
    // uIMapPersonnel.meaningfulReviewEntry.approvalTab.uITimeEdit.sendKeys(Keys.TAB);
  }

  async SelectAtDivision(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.meaningfulReviewEntry.approvalTab.uIDivisionComboBox,
    // BaseData.getNamesModuleValue("Division"));
    // uIMapPersonnel.meaningfulReviewEntry.approvalTab.uIDivisionComboBox.sendKeys(Keys.TAB);
  }

  async SelectAtSection(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.meaningfulReviewEntry.approvalTab.uISectionComboBox,
    // BaseData.getNamesModuleValue("Section"));
    // uIMapPersonnel.meaningfulReviewEntry.approvalTab.uISectionComboBox.sendKeys(Keys.TAB);
  }

  async selectActionAsSendForApproval(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.meaningfulReviewEntry.approvalTab.uINewActionComboBox, "Send for Approval");
  }

  async selectActionAsApprove(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapPersonnel.meaningfulReviewEntry.approvalTab.uINewActionComboBox, "Approve");
  }

  async selectActionAsLock(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapPersonnel.meaningfulReviewEntry.approvalTab.uINewActionComboBox, "Lock");
  }

  async verifystatusInGrid(index: number): Promise<void> {
    // String Status = BaseData.getNamesModuleValue("Status" + index);
    // String StatusInGrid =uIMapPersonnel.meaningfulReviewEntry.approvalTab.uIApprovalGrid
    // .findElement(By.xpath("//td[contains(text(),'" + Status + "')]")).getText();
    // System.out.println(StatusInGrid);
    // verify.ExpectedPropertyValueIsEqual(Status, StatusInGrid);
  }

  async selectAtAction(i: number): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.approvalTab.uINewActionComboBox.click();
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.meaningfulReviewEntry.approvalTab.uINewActionComboBox,
    // BaseData.getPersonnelModuleValue("Action" + i));
    // //				String dropDwonSelectedItem = objectIdentification.manualIdentify
    // //						.getDropDwonSelectedItem(uIMapPersonnel.meaningfulReviewEntry.approvalTab.uINewActionComboBox);
  }

  async selectAtRejectionCode(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapPersonnel.meaningfulReviewEntry.approvalTab.uIRejectionCodeDropDown,
    // BaseData.getNamesModuleValue("RejectionCode"));
  }

  async verifyRejectionCountAs1(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1",
    // uIMapPersonnel.meaningfulReviewEntry.approvalTab.uIRejectionCount.getText());
  }

}

export class QAFormsTabPage {
  readonly page: Page;
  readonly selectFormComboBox: Locator;
  readonly fillFormButton: Locator;
  readonly refreshButton: Locator;
  readonly resultTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selectFormComboBox = page.locator('#cddForm_DropDown');
    this.fillFormButton = page.locator('#cmdTakeTest');
    this.refreshButton = page.locator('#cmdrefresh');
    this.resultTable = page.locator('#grdQAForms');
  }

  async selectAtFormNameInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText
    // (uIMapPersonnel.meaningfulReviewEntry.qAFormsTab.uIResultTable, BaseData.getTestContextData("FormName"));
  }

  async selectAtSelectForm(): Promise<void> {
    // uIMapQA.questionnarie.uISelectFormComboBox.click();
    // Playback.threadWait();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.meaningfulReviewEntry.qAFormsTab.uISelectFormComboBox,
    // BaseData.getPersonnelModuleValue("SelectForm"));
  }

  async verifyAtPFNoInGrid(): Promise<void> {
    // String pfNo=	objectIdentification.manualIdentify.getGridCellInnerText(uIMapPersonnel.meaningfulReviewEntry.qAFormsTab.uIResultTable, "PF#", 0);
    // //	String pfNo = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.meaningfulReviewEntry.qAFormsTab.uIResultTable, BaseData.getPersonnelModuleValue("FormName"), "PF#").getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("PFCode"), pfNo);
  }

  async verifyAtPFNameBasedOnFormNameInGrid(): Promise<void> {
    // String pfNo = objectIdentification.manualIdentify.getGridCell(uIMapPersonnel.meaningfulReviewEntry.qAFormsTab.uIResultTable, BaseData.getTestContextData("FormName"), "PF Name").getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTestContextData("PFName"), pfNo);
  }

  async clickRefreshButton(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.qAFormsTab.uIRefreshButton.click();
  }

  async clickFillForm(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.qAFormsTab.uIFillFormButton.click();
  }

}

export class MainTabPage {
  readonly page: Page;
  readonly commentsEdit: Locator;
  readonly reviewTypeDropDown: Locator;
  readonly reviewTypeDropDownArrow: Locator;
  readonly reviewTypeDropDownValue: Locator;
  readonly reviewOfAvailableMaterialInput: Locator;
  readonly reviewOfAvailableMaterialDropdown: Locator;
  readonly reviewOfAvailableMaterialDropdownArrow: Locator;
  readonly recommendationFromReviewInput: Locator;
  readonly recommendationFromReviewDropDown: Locator;
  readonly recommendationFromRevieDropDownwArrow: Locator;
  readonly commentEdit: Locator;
  readonly resultedInDeatOrSeriouslyInjuryCheckBox: Locator;
  readonly forceUtilizedInaNonDiscriminatoryFashionDropdown: Locator;
  readonly useOfForceReportWasCompletedByEveryOfficerDropdown: Locator;
  readonly forceUsedAppropriteAmountOfForceDropdown: Locator;
  readonly custom2Dropdown: Locator;
  readonly officerAttemptedDeEscalationDuringTheIncidentDropdown: Locator;
  readonly incidentReviewedWithOfficerInvolovedDropdown: Locator;
  readonly custom1Dropdown: Locator;
  readonly custom3Dropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.commentsEdit = page.locator('#tabReview_tmpl0_usrMeaningfulReviewBasic_txtComment');
    this.reviewTypeDropDown = page.locator('#tabReview_tmpl0_usrMeaningfulReviewBasic_cddReviewType_Input');
    this.reviewTypeDropDownArrow = page.locator('#tabReview_tmpl0_usrMeaningfulReviewBasic_cddReviewType_Arrow');
    this.reviewTypeDropDownValue = page.locator('#tabReview_tmpl0_usrMeaningfulReviewBasic_cddReviewType_DropDown');
    this.reviewOfAvailableMaterialInput = page.locator('#tabReview_tmpl0_usrMeaningfulReviewBasic_cddMaterial_Input');
    this.reviewOfAvailableMaterialDropdown = page.locator('#tabReview_tmpl0_usrMeaningfulReviewBasic_cddMaterial_DropDown');
    this.reviewOfAvailableMaterialDropdownArrow = page.locator('#tabReview_tmpl0_usrMeaningfulReviewBasic_cddMaterial_Arrow');
    this.recommendationFromReviewInput = page.locator('#tabReview_tmpl0_usrMeaningfulReviewBasic_cddRecommandation_Input');
    this.recommendationFromReviewDropDown = page.locator('#tabReview_tmpl0_usrMeaningfulReviewBasic_cddRecommandation_DropDown');
    this.recommendationFromRevieDropDownwArrow = page.locator('#tabReview_tmpl0_usrMeaningfulReviewBasic_cddRecommandation_Arrow');
    this.commentEdit = page.locator('#tabReview_tmpl0_usrMeaningfulReviewBasic_txtComment');
    this.resultedInDeatOrSeriouslyInjuryCheckBox = page.locator('#tabReview_tmpl0_usrMeaningfulReviewBasic_chkInjuryResult');
    this.forceUtilizedInaNonDiscriminatoryFashionDropdown = page.locator('#tabReview_tmpl0_usrMeaningfulReviewBasic_cddForceUtilized_DropDown');
    this.useOfForceReportWasCompletedByEveryOfficerDropdown = page.locator('#tabReview_tmpl0_usrMeaningfulReviewBasic_cddForceComplete_DropDown');
    this.forceUsedAppropriteAmountOfForceDropdown = page.locator('#tabReview_tmpl0_usrMeaningfulReviewBasic_cddForceUsed_DropDown');
    this.custom2Dropdown = page.locator('#tabReview_tmpl0_usrMeaningfulReviewBasic_cddCustom2_DropDown');
    this.officerAttemptedDeEscalationDuringTheIncidentDropdown = page.locator('#tabReview_tmpl0_usrMeaningfulReviewBasic_cddOfficerAttempt_DropDown');
    this.incidentReviewedWithOfficerInvolovedDropdown = page.locator('#tabReview_tmpl0_usrMeaningfulReviewBasic_cddIncReviewed_DropDown');
    this.custom1Dropdown = page.locator('#tabReview_tmpl0_usrMeaningfulReviewBasic_cddCustom1_DropDown');
    this.custom3Dropdown = page.locator('#tabReview_tmpl0_usrMeaningfulReviewBasic_cddCustom3_DropDown');
  }

  async EnterComments(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.mainTab.uICommentsEdit.sendKeys(Randomized.randomString(1000));
  }

  async SelectAtReviewType(JsonKeyIndex: number): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.mainTab.uIReviewTypeDropDown.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect(uIMapPersonnel.meaningfulReviewEntry.mainTab.uIReviewTypeDropDownValue, BaseData.getPersonnelModuleValue("ReviewType"+JsonKeyIndex));
  }

  async verifyReviewTypeIsNotDisplayed(): Promise<void> {
    // Boolean displayed = false;
    // try{
    // boolean ReviewTypeDropDownvalue =uIMapPersonnel.meaningfulReviewEntry.mainTab.uIReviewTypeDropDownValue.isDisplayed();
    // displayed = true;
    // catch (Exception e) {
    // verify.ExpectedValueIsFalse(displayed);
  }

  async clickAtCustomLabelWithName(JsonKeyIndex: number): Promise<void> {
    // String LableName = BaseData.getPersonnelModuleValue("LabelName"+JsonKeyIndex);
    // Playback.driver.findElement(By.xpath("//span[text()='"+LableName+"']")).click();
  }

  async verifyAtLabelColorWithName(labelJsonKeyIndex: number, labelcolorJsonKeyIndex: number): Promise<void> {
    // String LabelName = BaseData.getPersonnelModuleValue("LabelName"+labelJsonKeyIndex);
    // String Labelcolor = Playback.driver.findElement(By.xpath("//span[text()='"+LabelName+"']")).getCssValue("color");
    // System.out.println("JsonKeyIndex-------------"+labelJsonKeyIndex+"-----"+Labelcolor+"-----"+LabelName);
    // verify.ExpectedPropertyValueIsEqual(Labelcolor, BaseData.getPersonnelModuleValue("Labelcolor"+labelcolorJsonKeyIndex));
  }

  async selectAtReviewType(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.mainTab.uIReviewTypeDropDown.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect(uIMapPersonnel.meaningfulReviewEntry.mainTab.uIReviewTypeDropDownValue, BaseData.getPersonnelModuleValue("ReviewType"));
    // uIMapPersonnel.meaningfulReviewEntry.mainTab.uIReviewTypeDropDownArrow.click();
  }

  async selectAtReviewOfAvailableMaterial(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.mainTab.uIReviewOfAvailableMaterialInput.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect(uIMapPersonnel.meaningfulReviewEntry.mainTab.uIReviewOfAvailableMaterialDropdown, BaseData.getPersonnelModuleValue("ReviewOfAvailableMaterial"));
    // uIMapPersonnel.meaningfulReviewEntry.mainTab.uIReviewOfAvailableMaterialDropdownArrow.click();
  }

  async selectAtRecommendationFromReview(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.mainTab.uIRecommendationFromReviewInput.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect(uIMapPersonnel.meaningfulReviewEntry.mainTab.uIRecommendationFromReviewDropDown, BaseData.getPersonnelModuleValue("RecommendationFromReview"));
    // uIMapPersonnel.meaningfulReviewEntry.mainTab.uIRecommendationFromRevieDropDownwArrow.click();
  }

  async clickResultedDeathOrSeriousInjury(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.mainTab.uIResultedInDeatOrSeriouslyInjuryCheckBox.click();
  }

  async selectAtForceUtilizedInaNonDiscriminatoryFashion(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.meaningfulReviewEntry.mainTab.uIForceUtilizedInaNonDiscriminatoryFashionDropdown, BaseData.getPersonnelModuleValue("ForceUtilizedInaNonDiscriminatoryFashion"));
  }

  async selectAtUseOfForceReportWasCompletedByEveryOfficer(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.meaningfulReviewEntry.mainTab.uIUseOfForceReportWasCompletedByEveryOfficerDropdown, BaseData.getPersonnelModuleValue("UseOfForceReportWasCompletedByEveryOfficer"));
  }

  async selectAtOfficerAttemptedDeEscalationDuringTheIncident(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.meaningfulReviewEntry.mainTab.uIOfficerAttemptedDeEscalationDuringTheIncidentDropdown, BaseData.getPersonnelModuleValue("OfficerAttemptedDeEscalationDuringTheIncident"));
  }

  async selectAtIncidentReviewedWithOfficerInvoloved(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.meaningfulReviewEntry.mainTab.uIIncidentReviewedWithOfficerInvolovedDropdown, BaseData.getPersonnelModuleValue("IncidentReviewedWithOfficerInvoloved"));
  }

  async selectAtCustom1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.meaningfulReviewEntry.mainTab.uICustom1Dropdown, BaseData.getPersonnelModuleValue("Custom1"));
  }

  async selectAtCustom3(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.meaningfulReviewEntry.mainTab.uICustom3Dropdown, BaseData.getPersonnelModuleValue("Custom3"));
  }

  async selectAtCustom2(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.meaningfulReviewEntry.mainTab.uICustom2Dropdown, BaseData.getPersonnelModuleValue("Custom2"));
  }

  async verifyUpdateSuccessfulStatusMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(
    // uIMapPersonnel.meaningfulReviewEntry.uIBottomLeftSideStatusBar.getText(),
    // "1003 - Update Successful");
  }

  async VerifyStatusAsSubmitted(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("Submitted", uIMapPersonnel.meaningfulReviewEntry.uIMeaningfulReviewEntryStatusText.getText());
  }

  async VerifyStatusAsApproved(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("Approved", uIMapPersonnel.meaningfulReviewEntry.uIMeaningfulReviewEntryStatusText.getText());
  }

  async clicksave(): Promise<void> {
    // uIMapPersonnel.meaningfulReviewEntry.uISaveButton.click();
  }

  async DismissConfirmPopUp(): Promise<void> {
    // popup.confirm.no();
  }

  async close(): Promise<void> {
    // Playback.driver.close();
  }

  async verifyAtStatus(JsonKeyIndex: number): Promise<void> {
    // String Status = 	uIMapPersonnel.meaningfulReviewEntry.uIMeaningfulReviewEntryStatusText.getText();
    // verify.ExpectedPropertyValueIsEqual(Status, BaseData.getPersonnelModuleValue("Status"+JsonKeyIndex));
  }

  async verifyTabsAreDisplayed(JsonKeyIndex: number): Promise<void> {
    // String ColumnName = BaseData.getPersonnelModuleValue("ColumnName"+JsonKeyIndex);
    // boolean displayed = Playback.driver.findElement(By.xpath("//span[text()='"+ColumnName+"']")).isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verifySaveIconIsDisabled(): Promise<void> {
    // boolean enabled = uIMapPersonnel.meaningfulReviewEntry.uISaveButton.isEnabled();
    // verify.ExpectedValueIsFalse(enabled);
  }

  async verifySaveAndCloseIconIsDisabled(): Promise<void> {
    // boolean enabled = uIMapPersonnel.meaningfulReviewEntry.uISaveAndCloseButton.isEnabled();
    // verify.ExpectedValueIsFalse(enabled);
  }

  async verifyResetIconIsDisabled(): Promise<void> {
    // boolean enabled = uIMapPersonnel.meaningfulReviewEntry.uIRefreshButton.isEnabled();
    // verify.ExpectedValueIsFalse(enabled);
  }

  async verify1018MissingReviewTypeAcknowledgePopUp(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1018) Required Entries are Missing Review Type");
  }

  async verify1018MissingReviewOfAvailableMaterialsAcknowledgePopUp(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1018) Required Entries are Missing Review of Available Materials");
  }

  async verify1018MissingRecommendationFromReviewAcknowledgePopUp(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1018) Required Entries are Missing Recommendation from Review");
  }

  async switchToProductHelp(): Promise<void> {
    // objectIdentification.windowHandle.switchToWindowUsingURL("frmPnxHlpMgr.aspx");
  }

}

export class ProductHelpPage {
  readonly page: Page;
  readonly maintainDocumentIcon: Locator;
  readonly uploadNewDocumentIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.maintainDocumentIcon = page.locator('#imgDocRepos');
    this.uploadNewDocumentIcon = page.locator('#imgDocRepos_Add');
  }

  async clickMaintainDocumentIcon(): Promise<void> {
    // uIMapPersonnel.productHelp.uIMaintainDocumentIcon.click();
  }

}

export class OrganizationChartPage {
  readonly page: Page;
  readonly jurisDropDown: Locator;
  readonly searchEmployeesField: Locator;
  readonly employeeNameListTable: Locator;
  readonly jurisText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.jurisDropDown = page.locator('#lstJuris');
    this.searchEmployeesField = page.locator('#tbAvailableFilter');
    this.employeeNameListTable = page.locator('#RadListBox1');
    this.jurisText = page.locator("//span[@id=\'lblJuris\' and contains(@Style,\'font-weight:bold\')]");
  }

  async verifyAtJuris(): Promise<void> {
    // String SelectedItem = objectIdentification.manualIdentify.
    // getDropDwonSelectedItem(uIMapPersonnel.organizationChart.uIJurisDropDown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("Juris"), SelectedItem);
  }

  async verifyImageLoaded(): Promise<void> {
    // List<WebElement> ImgList = Playback.driver.findElements(By.xpath("//ul//li//div//div//img"));
    // for(WebElement Img:ImgList) {
    // String attribute = Img.getAttribute("src");
    // verify.ExpectedValueIsTrue(attribute.contains("frmHandle"));
  }

  async verifySearchEmployeesFieldsIsEnabled(): Promise<void> {
    // boolean enabled = uIMapPersonnel.organizationChart.uISearchEmployeesField.isEnabled();
    // verify.ExpectedValueIsTrue(enabled);
  }

  async enterAtEmployeeName(): Promise<void> {
    // uIMapPersonnel.organizationChart.uISearchEmployeesField.
    // sendKeys(BaseData.getPersonnelModuleValue("EmployeeName"));
  }

  async verifyAtEmployeeNameListed(): Promise<void> {
    // List<WebElement> radControlDropDownElements = objectIdentification.manualIdentify.
    // getRadListValues(uIMapPersonnel.organizationChart.uIEmployeeNameListTable);
    // for (WebElement values : radControlDropDownElements) {
    // String text = values.getText();
    // System.out.println(text);
    // verify.ExpectedValueIsTrue(text.equalsIgnoreCase((BaseData.getPersonnelModuleValue("EmployeeName"))));
  }

  async reloadOrganizationChartScreen(): Promise<void> {
    // objectIdentification.manualIdentify.reloadScreen("Organization Cha");
  }

  async switchToOrganizationChartFrame(): Promise<void> {
    // objectIdentification.windowHandle.switchToFrame("frmOrganizationChart.aspx");
  }

  async verifyJurisTextDisplayed(): Promise<void> {
    // boolean displayed = uIMapPersonnel.organizationChart.uIJurisText.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

}

export class ReportsDuePage {
  readonly page: Page;
  readonly jurisDropDown: Locator;
  readonly statusDropdown: Locator;
  readonly itemTypeDropdown: Locator;
  readonly reportsDueGrid: Locator;
  readonly showMyItemsOnlyCheckbox: Locator;
  readonly refreshButton: Locator;
  readonly excelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.jurisDropDown = page.locator('#lstJuris');
    this.statusDropdown = page.locator('#lstReportStatus');
    this.itemTypeDropdown = page.locator('#cddRepositoryID');
    this.reportsDueGrid = page.locator('#grdApprovalstatus');
    this.showMyItemsOnlyCheckbox = page.locator('#chkMyItem');
    this.refreshButton = page.locator('#cmdRefresh');
    this.excelButton = page.locator("//img[@title=\'Export to Excel\']");
  }

  async selectAtItemType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.reportsDue.uIItemTypeDropdown,
    // BaseData.getPersonnelModuleValue("ItemType"));
  }

  async selectAtStatus(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.reportsDue.uIStatusDropdown,
    // BaseData.getPersonnelModuleValue("Status" + i));
  }

  async clickRefreshButton(): Promise<void> {
    // uIMapPersonnel.reportsDue.uIRefreshButton.click();
  }

  async verifyAtItemTypeInGridByStatus(noOfStatus: number): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapPersonnel.reportsDue.uIReportsDueGrid, BaseData.getPersonnelModuleValue("Status" + noOfStatus),
    // "Item Type");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getPersonnelModuleValue("ItemTypeInGrid"), gridCell.getText());
  }

  async verifyApprovedReportNotShowingInGrid(): Promise<void> {
    // if (objectIdentification.manualIdentify.controlExist(uIMapPersonnel.reportsDue.uIReportsDueGrid)) {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapPersonnel.reportsDue.uIReportsDueGrid, "Status");
    // for (String value : gridTableColumnValues) {
    // verify.ExpectedPropertyValueIsNotEqual("Approved", value,
    // "Approved reports should not show under the grid -- > ");
    // } else {
    // verify.ExpectedPropertyValueIsEqual("No Data To Display",
    // Playback.driver.findElement(By.xpath("//span[@id='lblDisplayTExt']")).getText());
  }

  async verifyAtColummnValues(JsonkeyIndex: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapPersonnel.reportsDue.uIReportsDueGrid, BaseData.getPersonnelModuleValue("ColumnName"+JsonkeyIndex));
    // for(String value : gridTableColumnValues) {
    // verify.ExpectedPropertyValueIsEqual(value, BaseData.getPersonnelModuleValue("ColumnValue"+JsonkeyIndex));
  }

  async clickShowMyItemsOnly(): Promise<void> {
    // uIMapPersonnel.reportsDue.uIShowMyItemsOnlyCheckbox.click();
  }

  async close(): Promise<void> {
    // Playback.driver.close();
  }

  async selectAtJuris(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.reportsDue.uIJurisDropDown,
    // BaseData.getPersonnelModuleValue("Juris"));
  }

  async selectAtItemType(JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.reportsDue.uIItemTypeDropdown,
    // BaseData.getPersonnelModuleValue("ItemType"+JsonKeyIndex));
  }

  async clickExcelIcon(): Promise<void> {
    // uIMapPersonnel.reportsDue.uIExcelButton.click();
  }

  async getRowByIndex(): Promise<void> {
    // List<String> gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowCellsValues(uIMapPersonnel.reportsDue.uIReportsDueGrid,0);
    // return gridRowByCellInnerText;
  }

}

export class MultiJurisRolesPage {
  readonly page: Page;
  readonly mutiJurisRolesGrid: Locator;
  readonly rolesAllowedDropdown: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;
  readonly statusBar: Locator;
  readonly jurisDropDown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mutiJurisRolesGrid = page.locator('#grdMJRoles');
    this.rolesAllowedDropdown = page.locator('#cddRoles_DropDown');
    this.addButton = page.locator('#imgAddRole');
    this.saveButton = page.locator('#cmdSave');
    this.statusBar = page.locator("//td[@class=\'statusBar\']//b");
    this.jurisDropDown = page.locator('#lstJuris');
  }

  async selectAtRolesAllowed(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.multiJurisRoles.uIRolesAllowedDropdown,
    // BaseData.getHomeModuleValue("RolesAllowed"));
  }

  async verifyAtRoleNameInGrid(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapPersonnel.multiJurisRoles.uIMutiJurisRolesGrid, "Role Name");
    // verify.ExpectedValueIsTrue(gridTableColumnValues.contains(BaseData.getHomeModuleValue("RoleName")),
    // "Role Name doesn't contains in grid (" + BaseData.getHomeModuleValue("RoleName") + ") --> ");
  }

  async clickAddButton(): Promise<void> {
    // uIMapPersonnel.multiJurisRoles.uIAddButton.click();
  }

  async save(): Promise<void> {
    // uIMapPersonnel.multiJurisRoles.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verifyUpdateSuccessfulStatusMessageNotAppear(): Promise<void> {
    // boolean controlExist = objectIdentification.manualIdentify
    // .controlExist(uIMapPersonnel.multiJurisRoles.uIStatusBar);
    // if (controlExist) {
    // String statusBarText = uIMapPersonnel.multiJurisRoles.uIStatusBar.getText();
    // verify.ExpectedPropertyValueIsNotEqual("1003 - Update Successful", statusBarText);
    // verify.ExpectedValueIsFalse(controlExist, "Status Message Appear --> " + statusBarText);
  }

  async selectAtJuris(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.multiJurisRoles.uIJurisDropDown, BaseData.getHomeModuleValue("Juris"));
  }

  async close(): Promise<void> {
    // Playback.driver.close();
  }

}

export class InjuryRptEntryApprovalPage {
  readonly page: Page;
  readonly approveNowRadioButton: Locator;
  readonly sendForApprovalNowRadioButton: Locator;
  readonly holdAndSendItForApprovalLaterRadioButton: Locator;
  readonly superviorEdit: Locator;
  readonly clearButton: Locator;
  readonly divisionDropDown: Locator;
  readonly sectionDropDown: Locator;
  readonly squadDropDown: Locator;
  readonly saveAndClose: Locator;

  constructor(page: Page) {
    this.page = page;
    this.approveNowRadioButton = page.locator('#rbApprovalNow');
    this.sendForApprovalNowRadioButton = page.locator('#rbSendApproval');
    this.holdAndSendItForApprovalLaterRadioButton = page.locator('#rbHold');
    this.superviorEdit = page.locator('#lupSupervisor_CodeValue');
    this.clearButton = page.locator('#cmdClear');
    this.divisionDropDown = page.locator('#cddDivision_DropDown');
    this.sectionDropDown = page.locator('#cddSection_DropDown');
    this.squadDropDown = page.locator('#cddSquad_DropDown');
    this.saveAndClose = page.locator('#cmdSaveNClose');
  }

  async clickApproveNowRadioButton(): Promise<void> {
    // uIMapPersonnel.injuryRptEntryApproval.uIApproveNowRadioButton.click();
  }

  async clickSendForApprovalNowRadioButton(): Promise<void> {
    // uIMapPersonnel.injuryRptEntryApproval.uISendForApprovalNowRadioButton.click();
  }

  async clickHoldAndSendItForApprovalLaterRadioButton(): Promise<void> {
    // uIMapPersonnel.injuryRptEntryApproval.uIHoldAndSendItForApprovalLaterRadioButton.click();
  }

  async enterAtSupervisor(): Promise<void> {
    // uIMapPersonnel.injuryRptEntryApproval.uISuperviorEdit.sendKeys(BaseData.getPersonnelModuleValue("Supervisor"));
    // uIMapPersonnel.injuryRptEntryApproval.uISuperviorEdit.sendKeys(Keys.TAB);
  }

  async selectAtDivision(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.injuryRptEntryApproval.uIDivisionDropDown, BaseData.getPersonnelModuleValue("Division"));
  }

  async selectAtSection(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.injuryRptEntryApproval.uISectionDropDown, BaseData.getPersonnelModuleValue("Section"));
  }

  async selectAtSquad(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapPersonnel.injuryRptEntryApproval.uISquadDropDown, BaseData.getPersonnelModuleValue("Squad"));
  }

  async saveAndClose(): Promise<void> {
    // uIMapPersonnel.injuryRptEntryApproval.uISaveAndClose.click();
    // popup.confirm.yes();
  }

  async verifyDivisionIsDisabled(): Promise<void> {
    // String attribute = uIMapPersonnel.injuryRptEntryApproval.uIDivisionDropDown.getAttribute("class");
    // verify.ExpectedPropertyValueIsEqual(attribute,"SELECTInActive");
  }

  async verifySectionIsDisabled(): Promise<void> {
    // String attribute = uIMapPersonnel.injuryRptEntryApproval.uISectionDropDown.getAttribute("class");
    // verify.ExpectedPropertyValueIsEqual(attribute,"SELECTInActive");
  }

  async verifySquadIsDisabled(): Promise<void> {
    // String attribute = uIMapPersonnel.injuryRptEntryApproval.uISquadDropDown.getAttribute("class");
    // verify.ExpectedPropertyValueIsEqual(attribute,"SELECTInActive");
  }

  async verifyDivisionIsEnabled(): Promise<void> {
    // boolean enabled = uIMapPersonnel.injuryRptEntryApproval.uIDivisionDropDown.isEnabled();
    // verify.ExpectedValueIsTrue(enabled);
  }

  async verifySectionIsEnabled(): Promise<void> {
    // boolean enabled = uIMapPersonnel.injuryRptEntryApproval.uISectionDropDown.isEnabled();
    // verify.ExpectedValueIsTrue(enabled);
  }

  async verifySquadIsEnabled(): Promise<void> {
    // boolean enabled = uIMapPersonnel.injuryRptEntryApproval.uISquadDropDown.isEnabled();
    // verify.ExpectedValueIsTrue(enabled);
  }

}

export class WorkHistoryEntryApprovalPage {
  readonly page: Page;
  readonly approveNowRadioButton: Locator;
  readonly sendForApprovalNowRadioButton: Locator;
  readonly holdAndSendItForApprovalLaterRadioButton: Locator;
  readonly superviorEdit: Locator;
  readonly clearButton: Locator;
  readonly divisionDropDown: Locator;
  readonly sectionDropDown: Locator;
  readonly squadDropDown: Locator;
  readonly saveAndClose: Locator;

  constructor(page: Page) {
    this.page = page;
    this.approveNowRadioButton = page.locator('#rbApprovalNow');
    this.sendForApprovalNowRadioButton = page.locator('#rbSendApproval');
    this.holdAndSendItForApprovalLaterRadioButton = page.locator('#rbHold');
    this.superviorEdit = page.locator('#lupSupervisor_CodeValue');
    this.clearButton = page.locator('#cmdClear');
    this.divisionDropDown = page.locator('#cddDivision_DropDown');
    this.sectionDropDown = page.locator('#cddSection_DropDown');
    this.squadDropDown = page.locator('#cddSquad_DropDown');
    this.saveAndClose = page.locator('#cmdSaveNClose');
  }

  async clickSendForApprovalNowRadioButton(): Promise<void> {
    // uIMapPersonnel.workHistoryEntryApproval.uISendForApprovalNowRadioButton.click();
  }

  async saveAndClose(): Promise<void> {
    // uIMapPersonnel.workHistoryEntryApproval.uISaveAndClose.click();
    // popup.confirm.yes();
  }

  async switchToPerfEvalForm(): Promise<void> {
    // objectIdentification.windowHandle.switchToFrame("frmSetupFormSrch");
  }

  async switchToPerformanceEvaluationEntry(): Promise<void> {
    // objectIdentification.windowHandle.switchToWindow("Performance Evaluation Entry");
  }

}

