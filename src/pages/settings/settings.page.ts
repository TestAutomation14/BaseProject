// @ts-nocheck
import { Page, Locator, FrameLocator } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { AcknowledgePage, ConfirmPage } from '../popup.page';
import { BaseData } from '../../data/base-data';
import { ElementHelpers } from '../../helpers/element-helpers';
import { GridHelpers } from '../../helpers/grid-helpers';

export class SettingsPage {
  private page: Page;
  private browserHelpers: BrowserHelpers;
  private grid: GridHelpers;

  constructor(page: Page) {
    this.page = page;
    this.browserHelpers = new BrowserHelpers(page);
    this.grid = new GridHelpers(page);
  }

  async switchToQAEvalFormSearch() {
    return this.browserHelpers.switchToMainWindowScreenTab('QA Eval.Form Sea..');
  }

  async switchToActivityTypeMapping() {
    return this.browserHelpers.switchToPageByTitle('Activity Type Mapping');
  }

  async switchToFTPInterfaceSearchWindow() {
    return this.browserHelpers.switchToPageByTitle('FTP Intertface Search');
  }

  async switchTocustomDocHelpEntryUploadeWindow() {
    return this.browserHelpers.switchToPageByUrl('frmDocmentUpload_Id');
  }

  async switchToEntraSettingWindow() {
    return this.browserHelpers.switchToPageByUrl('frmEntraSetting_Id');
  }

  async switchToSystemParamter() {
    return this.browserHelpers.switchToMainWindowScreenTab('Home/frmSysParams');
  }

  async switchToRepositoryLink() {
    return this.browserHelpers.switchToPageByTitle('Repository Link');
  }

  async switchToAcessLog() {
    return this.browserHelpers.switchToMainWindowScreenTab('Setup/frmActivityLog');
  }

  async switchToTerminalScreen() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmTerminalSrch.aspx');
  }

  async switchToTerminalEntry() {
    return this.browserHelpers.switchToPageByTitle('Terminal Entry');
  }

  async switchToORITerminalEntry() {
    return this.browserHelpers.switchToPageByTitle('frmAddMoreORI.aspx');
  }

  async switchToParameterNameEntry() {
    return this.browserHelpers.switchToPageByTitle('Parameter Name Entry');
  }

  async switchToActionSearch() {
    return this.browserHelpers.switchToMainWindowScreenTab('BatchUpdate/frmActionSrch');
  }

  async switchToActionEntry() {
    return this.browserHelpers.switchToPageByTitle('Action Entry');
  }

  async switchToPhoenixAuthenticatorWindow() {
    return this.browserHelpers.switchToPageByTitle(':: Phoenix Authenticator ::');
  }

  async switchToCodedScreen() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmCodedTypeSrch');
  }

  async switchToMaintainCodeValue() {
    return this.browserHelpers.switchToPageByTitle('Maintain Code Value');
  }

  async switchToStorageLocation() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmStorageLocationSrch');
  }

  async switchToRoles() {
    return this.browserHelpers.switchToMainWindowScreenTab('Setup/frmRoleSrch');
  }

  async switchToStorageLocationEntry() {
    return this.browserHelpers.switchToPageByTitle('Storage Location Entry');
  }

  async switchToJailCell() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmJailCellSearch');
  }

  async switchToJailCellPopupScreen() {
    return this.browserHelpers.switchToPageByTitle('Jail Cell');
  }

  async switchToJailCellEntry() {
    return this.browserHelpers.switchToPageByTitle('Jail Cell Entry');
  }

  async switchToRepositoryEntry() {
    return this.browserHelpers.switchToPageByTitle('Repository Entry');
  }

  async switchToCustomFields() {
    return this.browserHelpers.switchToPageByUrl('frmCustomConfig_Id');
  }

  async switchToFTPInterfaceSearch() {
    return this.browserHelpers.switchToMainWindowScreenTab('Home/frmPnxFTPSrch');
  }

  async switchToFTPInterfaceEntry() {
    return this.browserHelpers.switchToPageByTitle('FTP Intertface Entry');
  }

  async switchToUnits() {
    return this.browserHelpers.switchToMainWindowScreenTab('Setup/frmUnitSrch.aspx');
  }

  async switchToUnitsForFire() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmFireUnitSrch.aspx');
  }

  async switchToUnitEntry() {
    return this.browserHelpers.switchToPageByTitle('Unit Entry');
  }

  async switchToRolesEntry() {
    return this.browserHelpers.switchToPageByTitle('Roles Entry');
  }

  async switchToRolesEntryEditScreen() {
    return this.browserHelpers.switchToPageByUrl('frmScreenPermission.aspx');
  }

  async switchToRepository() {
    return this.browserHelpers.switchToMainWindowScreenTab('Repository');
  }

  async switchToRepositoryUnNameScreen() {
    return this.browserHelpers.switchToPageByUrl('hdnMode=ADD');
  }

  async switchToRolesScreen() {
    return this.browserHelpers.switchToMainWindowScreenTab('Setup/frmRoleSrch');
  }

  async switchToCharge() {
    return this.browserHelpers.switchToMainWindowScreenTab('Static/frmChargeSrch');
  }

  async switchToSharedCodes() {
    return this.browserHelpers.switchToPageByTitle('Shared Codes');
  }

  async switchToText() {
    await this.browserHelpers.switchToMainWindowScreenTab('/frmTextSrch');
  }

  async switchToTextEntry() {
    return this.browserHelpers.switchToPageByTitle('Text Entry');
  }

  async switchToDisposition() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmDispositionSrch');
  }

  async switchToJobs() {
    return this.browserHelpers.switchToMainWindowScreenTab('/frmKPIJobsSrch.aspx?');
  }

  async switchToJobsScreen() {
    return this.browserHelpers.switchToPageByUrl('frmJobLog_Id');
  }

  async switchToCFSCode() {
    return this.browserHelpers.switchToMainWindowScreenTab('CFS Code');
  }

  async switchToJobEntry() {
    return this.browserHelpers.switchToPageByTitle('Job Entry');
  }

  async switchToJurisEntry() {
    return this.browserHelpers.switchToPageByTitle('Juris - 1310');
  }

  async switchToEmailTemplate() {
    return this.browserHelpers.switchToMainWindowScreenTab('Email Template');
  }

  async switchToEmailTemplateEntry() {
    return this.browserHelpers.switchToPageByTitle('Email Template Entry');
  }

  async switchToFTPInterfaceSearchScreen() {
    return this.browserHelpers.switchToPageByTitle('FTP Interface Search');
  }

  async switchToCFSCodeEntry() {
    return this.browserHelpers.switchToPageByUrl('frmCFSCode');
  }

  async switchToFireStationSearchScreen() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmFireStationSrch.aspx');
  }

  async switchToFireStationEntryScreen() {
    return this.browserHelpers.switchToPageByTitle('Fire Station Entry');
  }

  async switchToFormRepositoryScreen() {
    return this.browserHelpers.switchToPageByTitle('frmFormRepository');
  }

  async switchToHazMatGuide() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmHazMatSrch.aspx');
  }

  async switchToHazMatEntry() {
    return this.browserHelpers.switchToPageByTitle('frmFormRepository');
  }

  async switchToQAForms() {
    return this.browserHelpers.switchToMainWindowScreenTab('Settings&ScreenName=QA');
  }

  async switchToQAFormsHelpWindow() {
    return this.browserHelpers.switchToPageByTitle('QA Forms');
  }

  async switchToSystemParamterScreen() {
    return this.browserHelpers.switchToPageByTitle('System Parameter');
  }

  async switchToSystemParamterII() {
    // switchToFrame('Home/frmSysParams')
  }

  async switchToApprovalParameterWindow() {
    return this.browserHelpers.switchToPageByTitle('frmPnxAprrovalParams');
  }

  async switchToReportRepository() {
    return this.browserHelpers.switchToMainWindowScreenTab('Report Repository');
  }

  async switchToReportRepositoryEntry() {
    return this.browserHelpers.switchToPageByUrl('Setup/frmFormsAndRepotsUpload.aspx');
  }

  async closeActiveWindow() {
    // closeTheScreenByRobot()
  }

  async switchToCodedMapScreen() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmCodedMapSrch.aspx');
  }

  async switchToCodedMapDetail() {
    return this.browserHelpers.switchToPageByUrl('frmCodedMapDetail_Id');
  }

  async switchToTextSearchHelpWindow() {
    return this.browserHelpers.switchToPageByUrl('Static/frmTextSrch');
  }

  async switchToCADStatusConfig() {
    return this.browserHelpers.switchToMainWindowScreenTab('CAD Status Config');
  }

  async switchToCADStatusConfigEntry() {
    return this.browserHelpers.switchToPageByTitle('CAD Status Config Entry');
  }

  async switchToCameraConfig() {
    return this.browserHelpers.switchToMainWindowScreenTab('Camera Config');
  }

  async switchToCameraConfigEntry() {
    return this.browserHelpers.switchToPageByTitle('Camera Config Entry');
  }

  async switchToChargeDisposition() {
    return this.browserHelpers.switchToMainWindowScreenTab('Charge Disposition');
  }

  async switchToCustomHelp() {
    return this.browserHelpers.switchToMainWindowScreenTab('Custom Help');
  }

  async switchToCustomDocHelpEntry() {
    return this.browserHelpers.switchToPageByTitle('Custom Doc Help Entry');
  }

  async switchToDispatchZone() {
    return this.browserHelpers.switchToMainWindowScreenTab('Dispatch Zone');
  }

  async switchToDispatchZoneEntry() {
    return this.browserHelpers.switchToPageByTitle('Dispatch Zone');
  }

  async switchToDocumentCodes() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmChargeDocTypeSrch.aspx');
  }

  async switchToExternalInterfaceSearch() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmExtInterfaceSrch.aspx');
  }

  async switchToExternalInterfaceEntry() {
    return this.browserHelpers.switchToPageByTitle('External Interface');
  }

  async switchToNotificationFormat() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmNotificationTypeSearch.aspx?');
  }

  async switchToNotificationFormatEntry() {
    return this.browserHelpers.switchToPageByTitle('Notification Format Entry');
  }

  async switchToOffenseCodes() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmOffenseInquiry.aspx');
  }

  async switchToPropertyNCICCode() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmPropNCICSrch.aspx?');
  }

  async switchToQueryConfig() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmQueryMasterSrch.aspx');
  }

  async switchToQueryMasterEntry() {
    return this.browserHelpers.switchToPageByTitle('Query master');
  }

  async switchToManageSectionEntry() {
    return this.browserHelpers.switchToPageByTitle('Manage section');
  }

  async switchToManageTableEntry() {
    return this.browserHelpers.switchToPageByTitle('Manage table - 5048');
  }

  async switchToJoinsLinkingTablesEntry() {
    return this.browserHelpers.switchToPageByTitle('Joins - Linking tables - 5032');
  }

  async switchToQueryRepositoryEntry() {
    return this.browserHelpers.switchToPageByTitle('Query repository - 5046');
  }

  async switchToQuickActivityConfig() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmCategoryConfig.aspx?');
  }

  async switchToSubCategoryMappingEntry() {
    return this.browserHelpers.switchToPageByTitle('SubCategory Mapping');
  }

  async switchToReleaseCodes() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmReleaseTypeSrch.aspx');
  }

  async switchToTextMgmt() {
    return this.browserHelpers.switchToPageByTitle('Text Mgmt');
  }

  async switchToUserQuerySearch() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmCrtUserQuerySrch.aspx?');
  }

  async switchToCreateUserQuery() {
    return this.browserHelpers.switchToPageByTitle('Create user query');
  }

  async switchToXMLExportConfig() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmXMLMstSrch.aspx?');
  }

  async switchToXMLExporterMaster() {
    return this.browserHelpers.switchToPageByTitle('XML exporter master');
  }

  async switchToXMLExporterParentNodes() {
    return this.browserHelpers.switchToPageByTitle('XML exporter parent nodes');
  }

  async switchToXMLExporterDataTable() {
    return this.browserHelpers.switchToPageByTitle('XML exporter data table');
  }

  async switchToXMLExporterWhereClause() {
    return this.browserHelpers.switchToPageByTitle('XML exporter where clause');
  }

  async switchToXMLExporterTableDisplay() {
    return this.browserHelpers.switchToPageByTitle('XML exporter table display');
  }

  async switchToXMLExporterStaticNode() {
    return this.browserHelpers.switchToPageByTitle('XML exporter static node');
  }

  async switchTosharedCodesUsingURL() {
    return this.browserHelpers.switchToPageByUrl('frmCoded.aspx');
  }

  async switchToSelectionsEntry() {
    return this.browserHelpers.switchToPageByTitle('Selections');
  }

  async switchToSelectReport() {
    return this.browserHelpers.switchToPageByTitle('Select Report');
  }

  async switchToPermissionHistory() {
    return this.browserHelpers.switchToPageByUrl('frmPermissionHistory.aspx?');
  }

  async switchToReportRepositoryEntryWithTitle() {
    return this.browserHelpers.switchToPageByTitle('Report Repository Entry');
  }

  async switchToApprovalParameterWindowFor2024R2() {
    return this.browserHelpers.switchToPageByTitle('frmPnxApprovalParameters');
  }

  async switchToParameterNameSearch() {
    return this.browserHelpers.switchToPageByUrl('frmParameterNameSrch.aspx');
  }

  async switchToShowUsers() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmSessionInfo.aspx');
  }

  async switchToMessage() {
    return this.browserHelpers.switchToMainWindowScreenTab('Setup/frmMessageSrch');
  }

  async switchToCustomTabNewScreen() {
    return this.browserHelpers.switchToPageByUrl('frmCustomTabNew.aspx?');
  }

  async switchToExternalInterfaceLog() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmExtInterfaceLog.aspx');
  }

}

export class SysParameterPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async reloadSystemParamter(): Promise<void> {
    // objectIdentification.manualIdentify.selectRightClickTabMenuByTabText("System Parameter", "Reload Tab");
  }

  async changeParameterById(paramID: string, controlType: string, controlId: string, paramValue: string): Promise<void> {
    // WebDriver driver = Playback.driver;
    // if (controlType == "input") {
    // Playback.pageLoadThreadWait();
    // System.out.println(readInputValue(paramID));
    // if (!readInputValue(paramID).contains(paramValue)) {
    // Playback.threadWait();
    // driver.findElement(By.id(controlId)).clear();
    // Playback.threadWait();
    // driver.findElement(By.id(controlId)).sendKeys(paramValue);
    // uIMapSettings.systemParameter.uISaveButton.click();
    // popup.confirm.yes();
    // Playback.pageLoadThreadWait();
    // if (objectIdentification.windowHandle.windowExist("Acknowledge")) {
    // popup.acknowledge.ok();
    // else {
    // Playback.pageLoadThreadWait();
    // popup.acknowledge.sysParameterAcknowledgeOk();
    // if (controlType == "select") {
    // Playback.pageLoadThreadWait();
    // System.out.println(getSelectValue(paramID, controlId));
    // if (!getSelectValue(paramID, controlId).contains(paramValue)) {
    // // uIMapSettings.systemParameter.uIParameterIDEdit.sendKeys("--"); //for chrome
    // // Browser
    // Playback.threadWait();
    // new Select(driver.findElement(By.id(controlId))).selectByVisibleText(paramValue);
    // // driver.findElement(By.id(controlId)).sendKeys(paramValue);
    // uIMapSettings.systemParameter.uISaveButton.click();
    // popup.confirm.yes();
    // Playback.pageLoadThreadWait();
    // Playback.pageLoadThreadWait();
    // if (objectIdentification.windowHandle.windowExist("Acknowledge")) {
    // popup.acknowledge.ok();
    // } else {
    // Playback.pageLoadThreadWait();
    // popup.acknowledge.sysParameterAcknowledgeOk();
  }

  async getPreviousInputValue(paramID: string, controlId: string): Promise<void> {
    // WebDriver driver = Playback.driver;
    // uIMapSettings.systemParameter.uIParameterIDEdit.clear();
    // uIMapSettings.systemParameter.uIParameterIDEdit.sendKeys(paramID);
    // uIMapSettings.systemParameter.uISearchButton.click();
    // Playback.threadWait();
    // String paramPreviousInputValue = driver.findElement(By.id(controlId)).getAttribute("value");
    // int paramInput = Integer.parseInt(paramPreviousInputValue);
    // int IntParam = paramInput - 1;
    // paramPreviousInputValue = String.valueOf(IntParam);
    // Playback.testContext.setAttribute("paramInputValue", paramPreviousInputValue);
  }

  async getInputValue(paramID: string, controlId: string): Promise<string> {
    // WebDriver driver = Playback.driver;
    // uIMapSettings.systemParameter.uIParameterIDEdit.clear();
    // uIMapSettings.systemParameter.uIParameterIDEdit.sendKeys(paramID);
    // uIMapSettings.systemParameter.uISearchButton.click();
    // Playback.threadWait();
    // String paramInputValue = driver.findElement(By.id(controlId)).getAttribute("value");
    // return paramInputValue;
  }

  async readInputValue(paramID: string): Promise<string> {
    // WebDriver driver = Playback.driver;
    // uIMapSettings.systemParameter.uIParameterIDEdit.clear();
    // uIMapSettings.systemParameter.uIParameterIDEdit.sendKeys(paramID);
    // uIMapSettings.systemParameter.uISearchButton.click();
    // Playback.threadWait();
    // String IdField = "param_" + paramID + "_Dyn";
    // String paramInputValue = driver.findElement(By.id(IdField)).getAttribute("value");
    // return paramInputValue;
  }

  async getSelectValue(paramID: string, controlId: string): Promise<string> {
    // WebDriver driver = Playback.driver;
    // uIMapSettings.systemParameter.uIParameterIDEdit.clear();
    // uIMapSettings.systemParameter.uIParameterIDEdit.sendKeys(paramID);
    // Playback.threadWait();
    // uIMapSettings.systemParameter.uISearchButton.click();
    // Playback.threadWait();
    // String paramSelectValue = objectIdentification.manualIdentify
    // .getDropDwonSelectedItem(driver.findElement(By.id(controlId)));
    // return paramSelectValue;
  }

  async verifySytemParameterSelectedValue(ParamID: string, InputValue: string): Promise<void> {
    // objectIdentification.windowHandle.switchToMainWindowScreenTab("frmSysParams");
    // String input = sysParameter.getSelectValue(ParamID, "param_" + ParamID + "_Dyn_DropDown");
    // verify.ExpectedPropertyValueIsEqual(InputValue, input);
  }

  async verifySytemParameterDropdownDisabled(ParamID: string): Promise<void> {
    // objectIdentification.windowHandle.switchToMainWindowScreenTab("frmSysParams");
    // verify.ExpectedValueIsFalse(sysParameter.getParameterStatus(ParamID, "param_" + ParamID + "_Dyn_DropDown"));
  }

  async verifySytemParameterTextFieldDisabled(ParamID: string): Promise<void> {
    // objectIdentification.windowHandle.switchToMainWindowScreenTab("frmSysParams");
    // verify.ExpectedValueIsFalse(sysParameter.getParameterStatus(ParamID, "param_" + ParamID + "_Dyn"));
  }

  async getParameterStatus(paramID: string, controlId: string): Promise<boolean> {
    // WebDriver driver = Playback.driver;
    // uIMapSettings.systemParameter.uIParameterIDEdit.clear();
    // uIMapSettings.systemParameter.uIParameterIDEdit.sendKeys(paramID);
    // uIMapSettings.systemParameter.uISearchButton.click();
    // Playback.threadWait();
    // boolean paramInputValue = driver.findElement(By.id(controlId)).isEnabled();
    // System.out.println(paramInputValue);
    // return paramInputValue;
  }

  async clickSearchButton(): Promise<void> {
    // uIMapSettings.systemParameter.uISearchButton.click();
  }

  async clickSaveButton(): Promise<void> {
    // uIMapSettings.systemParameter.uISaveButton.click();
  }

  async saveScreen(): Promise<void> {
    // uIMapSettings.systemParameter.uISaveButton.click();
    // popup.confirm.yes();
    // Playback.pageLoadThreadWait();
  }

  async setSystemparameter67AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("67", "select", "param_67_Dyn_DropDown", "True");
  }

  async setSystemparameter68AsHomeNo(): Promise<void> {
    // uIMapSettings.systemParameter.uIParameterIDEdit.clear();
    // uIMapSettings.systemParameter.uIParameterIDEdit.sendKeys("68");
    // uIMapSettings.systemParameter.uISearchButton.click();
    // Playback.driver.findElement(By.id("cddSelectViewOption_Input")).click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect("cddSelectViewOption_DropDown",
    // "Home#");
    // uIMapSettings.systemParameter.uISaveButton.click();
    // popup.confirm.yes();
    // Playback.pageLoadThreadWait();
    // if (objectIdentification.windowHandle.windowExist("Acknowledge")) {
    // popup.acknowledge.ok();
    // else {
    // Playback.pageLoadThreadWait();
    // popup.acknowledge.sysParameterAcknowledgeOk();
  }

  async enterParameterIDAs508(): Promise<void> {
    // sysParameter.changeParameterById("508", "input", "param_508_Dyn", BaseData.getSettingsModuleValue("URL"));
  }

  async enterParameterIDAs509(): Promise<void> {
    // sysParameter.changeParameterById("509", "input", "param_509_Dyn", BaseData.getSettingsModuleValue("Name"));
  }

  async enterAtParameterID(): Promise<void> {
    // uIMapSettings.systemParameter.uIParameterIDEdit.click();
    // uIMapSettings.systemParameter.uIParameterIDEdit.clear();
    // uIMapSettings.systemParameter.uIParameterIDEdit.sendKeys(BaseData.getSettingsModuleValue("ParameterID"));
  }

  async setSystemparameter1018AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1018", "select", "param_1018_Dyn_DropDown", "True");
  }

  async setSystemparameter1018AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("1018", "select", "param_1018_Dyn_DropDown", "False");
  }

  async setSystemparameter4630AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("4630", "select", "param_4630_Dyn_DropDown", "False");
  }

  async setSystemparameter4630AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("4630", "select", "param_4630_Dyn_DropDown", "True");
  }

  async selectBiasFormOrHateindicator714AsMandatory(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapSettings.systemParameter.uIBiasFormHateIndicatorComboBox, "Mandatory");
  }

  async setSystemparameter282AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("282", "select", "param_282_Dyn_DropDown", "True");
  }

  async setSystemparameter282AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("282", "select", "param_282_Dyn_DropDown", "False");
  }

  async selectBiasFormOrHateindicator714AsHide(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapSettings.systemParameter.uIBiasFormHateIndicatorComboBox, "Hide");
  }

  async setSystemparameter4339AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("4339", "select", "param_4339_Dyn_DropDown", "False");
  }

  async setSystemparameter4339AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("4339", "select", "param_4339_Dyn_DropDown", "True");
  }

  async setSystemparameter1773AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("1773", "select", "param_1773_Dyn_DropDown", "False");
  }

  async setSystemparameter794AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("794", "select", "param_794_Dyn_DropDown", "True");
  }

  async setSystemparameter794AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("794", "select", "param_794_Dyn_DropDown", "False");
  }

  async setSystemparameter1773AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1773", "select", "param_1773_Dyn_DropDown", "True");
  }

  async setSystemparameter1728AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1728", "select", "param_1728_Dyn_DropDown", "True");
  }

  async setSystemparameter1704AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("1704", "select", "param_1704_Dyn_DropDown", "False");
  }

  async setSystemparameter251AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("251", "select", "param_251_Dyn_DropDown", "True");
  }

  async setSystemparameter639AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("639", "select", "param_639_Dyn_DropDown", "False");
  }

  async setSystemparameter639AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("639", "select", "param_639_Dyn_DropDown", "True");
  }

  async setSystemparameter532AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("532", "select", "param_532_Dyn_DropDown", "False");
  }

  async setSystemparameter532AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("532", "select", "param_532_Dyn_DropDown", "True");
  }

  async setSystemparameter786AsAllowVerifiedAddress(): Promise<void> {
    // sysParameter.changeParameterById("786", "select", "param_786_Dyn_DropDown", "Allow an unverified address");
  }

  async setSystemparameter406AsRotationbyAreaTowType(): Promise<void> {
    // sysParameter.changeParameterById("406", "select", "param_406_Dyn_DropDown",
    // "18 - Rotation by Area & Tow Type (Reg; Hvy; Spc)");
  }

  async setSystemparameter406AsRotationbyAreaCycleTowType(): Promise<void> {
    // sysParameter.changeParameterById("406", "select", "param_406_Dyn_DropDown",
    // "16 - Rotation by Area, Cycle & Tow Type (Reg; Hvy; Spc)");
  }

  async setSystemparameter406As17RotationbyAreaAndTowVendor(): Promise<void> {
    // sysParameter.changeParameterById("406", "select", "param_406_Dyn_DropDown",
    // "17 - Rotation by Area & Tow Vendor");
  }

  async setSystemparameter406As20RotationbyZoneAndTowVendor(): Promise<void> {
    // sysParameter.changeParameterById("406", "select", "param_406_Dyn_DropDown",
    // "20 - Rotation by Zone & Tow Vendor");
  }

  async setSystemparameter406As22RotationbyZoneCycleAndTowVendor(): Promise<void> {
    // sysParameter.changeParameterById("406", "select", "param_406_Dyn_DropDown",
    // "22 - Rotation by Zone Cycle & Tow Vendor(Reg; Hvy;Spc)");
  }

  async setSystemparameter654AsGreen(): Promise<void> {
    // sysParameter.changeParameterById("654", "select", "param_654_Dyn_DropDown", "Green");
  }

  async verifyUpdateSuccessfulAckMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage(" 1003 - Update Successful");
    // Playback.pageLoadThreadWait();
  }

  async closeTheScreen(): Promise<void> {
    // uIMapSettings.systemParameter.driver.close();
  }

  async setSystemparameter801AsDATransmit(): Promise<void> {
    // sysParameter.changeParameterById("801", "select", "param_801_Dyn_DropDown", "Only after DA transmit");
  }

  async setSystemparameter801AsAlways(): Promise<void> {
    // sysParameter.changeParameterById("801", "select", "param_801_Dyn_DropDown", "Always");
  }

  async setSystemparameter655AsRed(): Promise<void> {
    // sysParameter.changeParameterById("655", "select", "param_655_Dyn_DropDown", "Red");
  }

  async setSystemparameter631AsAddressSSN(): Promise<void> {
    // sysParameter.changeParameterById("631", "select", "param_631_Dyn_DropDown", "Address & SSN");
  }

  async setSystemparameter631AsRaceAgeHGT(): Promise<void> {
    // sysParameter.changeParameterById("631", "select", "param_631_Dyn_DropDown",
    // "Race, Age, HGT, WGT, Hair, Eye");
  }

  async setSystemparameter779AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("779", "select", "param_779_Dyn_DropDown", "True");
  }

  async enterSystemparameter59AsAutomationTest(): Promise<void> {
    // sysParameter.changeParameterById("59", "input", "param_59_Dyn", "Automation Script Test Purpose");
  }

  async setSystemParameter266AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("266", "select", "param_266_Dyn_DropDown", "True");
  }

  async setSystemparameter779AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("779", "select", "param_779_Dyn_DropDown", "False");
  }

  async setSystemparameter712AsNo(): Promise<void> {
    // sysParameter.changeParameterById("712", "select", "param_712_Dyn_DropDown", "No");
  }

  async setSystemParameter712AsYes(): Promise<void> {
    // sysParameter.changeParameterById("712", "select", "param_712_Dyn_DropDown", "Yes");
  }

  async setSystemparameter712AsYes(): Promise<void> {
    // sysParameter.changeParameterById("712", "select", "param_712_Dyn_DropDown", "Yes");
  }

  async setSystemparameter3260AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("3260", "select", "param_3260_Dyn_DropDown", "True");
  }

  async setSystemparameter3260AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("3260", "select", "param_3260_Dyn_DropDown", "False");
  }

  async EnterSystemparameter59AsAutomationTestScripts(): Promise<void> {
    // sysParameter.changeParameterById("59", "input", "param_59_Dyn",
    // "Automation Test Script Verification Purpose");
  }

  async setSystemparameter817AsOptional(): Promise<void> {
    // sysParameter.changeParameterById("817", "select", "param_817_Dyn_DropDown", "Optional");
  }

  async setSystemparameter817AsMandatoryAll(): Promise<void> {
    // sysParameter.changeParameterById("817", "select", "param_817_Dyn_DropDown", "Mandatory for All");
  }

  async setSystemparameter817AsMandatorySupplemental(): Promise<void> {
    // sysParameter.changeParameterById("817", "select", "param_817_Dyn_DropDown",
    // "Mandatory for Supplemental only");
  }

  async setSystemparameter912AsNo(): Promise<void> {
    // sysParameter.changeParameterById("912", "select", "param_912_Dyn_DropDown", "No");
  }

  async setSystemparameter912AsYes(): Promise<void> {
    // sysParameter.changeParameterById("912", "select", "param_912_Dyn_DropDown", "Yes");
  }

  async setSystemparameter4322AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("4322", "select", "param_4322_Dyn_DropDown", "False");
  }

  async setSystemparameter264AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("264", "select", "param_264_Dyn_DropDown", "False");
  }

  async setSystemparameter264AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("264", "select", "param_264_Dyn_DropDown", "True");
  }

  async setSystemparameter766AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("766", "select", "param_766_Dyn_DropDown", "False");
  }

  async setSystemparameter766AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("766", "select", "param_766_Dyn_DropDown", "True");
  }

  async setSystemparameter767AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("767", "select", "param_767_Dyn_DropDown", "True");
  }

  async setSystemparameter3252AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("3252", "select", "param_3252_Dyn_DropDown", "True");
  }

  async setSystemparameter3255AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("3255", "select", "param_3255_Dyn_DropDown", "True");
  }

  async setSystemparameter3255AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("3255", "select", "param_3255_Dyn_DropDown", "False");
  }

  async setSystemparameter3257AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("3257", "select", "param_3257_Dyn_DropDown", "False");
  }

  async setSystemparameter41AsActiveDirectory(): Promise<void> {
    // sysParameter.changeParameterById("41", "input", "param_41_Dyn", "Prophoenix");
  }

  async setSystemparameter41AsBlank(): Promise<void> {
    // sysParameter.changeParameterById("41", "input", "param_41_Dyn", "");
  }

  async setSystemparameter1804AsFutureDate(): Promise<void> {
    // sysParameter.changeParameterById("1804", "input", "param_1804_Dyn", Randomized.getFutureDate(5));
  }

  async setSystemparameter1804AsCurrentYearEndDate(): Promise<void> {
    // sysParameter.changeParameterById("1804", "input", "param_1804_Dyn", Randomized.getLastDayOfYear());
  }

  async setSystemparameter1804AsPreviousDate(): Promise<void> {
    // sysParameter.changeParameterById("1804", "input", "param_1804_Dyn", "01/01/2018");
  }

  async setSystemparameter838AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("838", "select", "param_838_Dyn_DropDown", "True");
  }

  async setSystemparameter838AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("838", "select", "param_838_Dyn_DropDown", "False");
  }

  async setSystemparameter2033AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("2033", "select", "param_2033_Dyn_DropDown", "False");
  }

  async setSystemparameter2033AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("2033", "select", "param_2033_Dyn_DropDown", "True");
  }

  async setSystemparameter3012AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("3012", "select", "param_3012_Dyn_DropDown", "True");
  }

  async setSystemparameter3013AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("3013", "select", "param_3013_Dyn_DropDown", "True");
  }

  async ClickFTPInterfaceButton(): Promise<void> {
    // uIMapSettings.systemParameter.uIFTPInterfaceButton.click();
    // Playback.controlReadyThreadWait();
  }

  async setSystemparameter2006AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("2006", "select", "param_2006_Dyn_DropDown", "True");
  }

  async setSystemparameter2006AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("2006", "select", "param_2006_Dyn_DropDown", "False");
  }

  async setSystemparameter4322AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("4322", "select", "param_4322_Dyn_DropDown", "True");
  }

  async setSystemparameter4323AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("4323", "select", "param_4323_Dyn_DropDown", "False");
  }

  async setSystemparameter4323AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("4323", "select", "param_4323_Dyn_DropDown", "True");
  }

  async setSystemparameter3320AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("3320", "select", "param_3320_Dyn_DropDown", "True");
  }

  async setSystemparameter3320AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("3320", "select", "param_3320_Dyn_DropDown", "False");
  }

  async setSystemparameter3319AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("3319", "select", "param_3319_Dyn_DropDown", "False");
  }

  async setSystemParameter3123AsLocalNoandStateNo(): Promise<void> {
    // sysParameter.changeParameterById("3123", "select", "param_3123_Dyn_DropDown", "Local# & State#");
  }

  async setSystemParameter3123AsLocalNo(): Promise<void> {
    // sysParameter.changeParameterById("3123", "select", "param_3123_Dyn_DropDown", "Local#");
  }

  async setSystemParameter3123AsStateNo(): Promise<void> {
    // sysParameter.changeParameterById("3123", "select", "param_3123_Dyn_DropDown", "State#");
  }

  async setSystemparameter1804AsCurrentDate(): Promise<void> {
    // sysParameter.changeParameterById("1804", "input", "param_1804_Dyn", Randomized.getCurrentDate());
  }

  async setSystemParameter2001AsUCRNIBRS(): Promise<void> {
    // sysParameter.changeParameterById("2001", "select", "param_2001_Dyn_DropDown", "3 - UCR & NIBRS");
  }

  async setSystemParameter2001AsUCR(): Promise<void> {
    // sysParameter.changeParameterById("2001", "select", "param_2001_Dyn_DropDown", "1 - UCR");
  }

  async setSystemParameter2001AsNIBRS(): Promise<void> {
    // sysParameter.changeParameterById("2001", "select", "param_2001_Dyn_DropDown", "2 - NIBRS");
  }

  async setSystemParameter2001AsCJRS(): Promise<void> {
    // sysParameter.changeParameterById("2001", "select", "param_2001_Dyn_DropDown", "4 - CJRS");
  }

  async setSystemparameter2017AsCurrentDate(): Promise<void> {
    // sysParameter.changeParameterById("2017", "input", "param_2017_Dyn", Randomized.getCurrentDate("MM/dd/yy"));
  }

  async SetAtSystemparameter2002(): Promise<void> {
    // sysParameter.changeParameterById("2002", "input", "param_2002_Dyn",
    // BaseData.getSettingsModuleValue("NIBRSFilePath"));
  }

  async setSystemparameter2017AsCurrentMonthYear(): Promise<void> {
    // sysParameter.changeParameterById("2017", "input", "param_2017_Dyn",
    // Randomized.getCurrentMonth() + "/" + Randomized.getCurrentYear());
  }

  async setSystemparameter764AsArrestedAdult(): Promise<void> {
    // sysParameter.changeParameterById("764", "input", "param_764_Dyn_DropDown", "AAC - Arrested Adult (CM)");
  }

  async SelectSystemparameter764AsArrestedAdult(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.systemParameter.uIDefaultCaseStatusComboBox, "AAC      - Arrested Adult (CM)");
    // uIMapSettings.systemParameter.uIDefaultCaseStatusComboBox.sendKeys(Keys.TAB);
  }

  async EnterParameterIDAs764(): Promise<void> {
    // uIMapSettings.systemParameter.uIParameterIDEdit.sendKeys("764");
  }

  async setSystemparameter211AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("211", "select", "param_211_Dyn_DropDown", "True");
  }

  async setSystemparameter290AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("290", "select", "param_290_Dyn_DropDown", "True");
  }

  async setSystemparameter1737AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("1737", "select", "param_1737_Dyn_DropDown", "False");
  }

  async setSystemparameter1737AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1737", "select", "param_1737_Dyn_DropDown", "True");
  }

  async setSystemparameter704AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("704", "select", "param_704_Dyn_DropDown", "False");
  }

  async setSystemparameter705Report(): Promise<void> {
    // sysParameter.changeParameterById("705", "input", "param_705_Dyn",
    // "I swear or affirm this report is correct and true to the best of my knowledge and belief");
  }

  async setSystemparameter706AsUndersignedAuthority(): Promise<void> {
    // sysParameter.changeParameterById("706", "input", "param_706_Dyn",
    // "Sworn and subscribed before me, the undersigned authority");
  }

  async setSystemparameter704AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("704", "select", "param_704_Dyn_DropDown", "True");
  }

  async setSystemparameter290AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("290", "select", "param_290_Dyn_DropDown", "False");
  }

  async setSystemparameter3128AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("3128", "select", "param_3128_Dyn_DropDown", "True");
  }

  async setSystemparameter827AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("827", "select", "param_827_Dyn_DropDown", "True");
  }

  async setSystemparameter827AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("827", "select", "param_827_Dyn_DropDown", "False");
  }

  async setSystemparameter828AsDONOTDISTRIBUTE(): Promise<void> {
    // sysParameter.changeParameterById("828", "input", "param_828_Dyn",
    // "** CAUTION ** DO NOT DISTRIBUTE REPORTS **");
  }

  async setSystemparameter6600AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("6600", "select", "param_6600_Dyn_DropDown", "True");
  }

  async setSystemparameter6600AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("6600", "select", "param_6600_Dyn_DropDown", "False");
  }

  async setSystemparameter540AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("540", "select", "param_540_Dyn_DropDown", "True");
  }

  async setSystemparameter541AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("541", "select", "param_541_Dyn_DropDown", "True");
  }

  async setSystemparameter541AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("541", "select", "param_541_Dyn_DropDown", "False");
  }

  async setSystemparameter1771AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("1771", "select", "param_1771_Dyn_DropDown", "False");
  }

  async setSystemparameter1776AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("1776", "select", "param_1776_Dyn_DropDown", "False");
  }

  async setSystemparameter1776AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1776", "select", "param_1776_Dyn_DropDown", "True");
  }

  async setSystemparameter1771AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1771", "select", "param_1771_Dyn_DropDown", "True");
  }

  async setSystemparameter839AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("839", "select", "param_839_Dyn_DropDown", "True");
  }

  async setSystemparameter641AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("641", "select", "param_641_Dyn_DropDown", "True");
  }

  async setSystemparameter641AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("641", "select", "param_641_Dyn_DropDown", "False");
  }

  async setSystemparameter641AsAllowDuplicateForSamePerson(): Promise<void> {
    // sysParameter.changeParameterById("641", "select", "param_641_Dyn_DropDown",
    // "Allow Dup # in A & J Name for Same Person");
  }

  async setSystemparameter641AsAllowDuplicateNumberRestrictions(): Promise<void> {
    // sysParameter.changeParameterById("641", "select", "param_641_Dyn_DropDown",
    // "Allow Duplicate number w/o restrictions");
  }

  async setSystemparameter5914AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("5914", "select", "param_5914_Dyn_DropDown", "False");
  }

  async setSystemparameter5914AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("5914", "select", "param_5914_Dyn_DropDown", "True");
  }

  async setSystemparameter1704AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1704", "select", "param_1704_Dyn_DropDown", "True");
  }

  async setSystemparameter414AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("414", "select", "param_414_Dyn_DropDown", "True");
  }

  async setSystemparameter414AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("414", "select", "param_414_Dyn_DropDown", "False");
  }

  async setSystemparameter734AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("734", "select", "param_734_Dyn_DropDown", "True");
  }

  async setSystemparameter734AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("734", "select", "param_734_Dyn_DropDown", "False");
  }

  async setSystemparameter84AsHotSheet(): Promise<void> {
    // sysParameter.changeParameterById("84", "select", "param_84_Dyn_DropDown", "HS - Hot Sheet Report");
  }

  async setSystemparameter85AsDailyBriefing(): Promise<void> {
    // sysParameter.changeParameterById("85", "select", "param_85_Dyn_DropDown", "DB - Daily Briefing");
  }

  async setSystemparameter736AsDIVSEC(): Promise<void> {
    // sysParameter.changeParameterById("736", "select", "param_736_Dyn_DropDown", "DIV+SEC");
  }

  async setSystemparameter736AsNull(): Promise<void> {
    // sysParameter.changeParameterById("736", "select", "param_736_Dyn_DropDown", "--");
  }

  async setSystemparameter739AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("739", "select", "param_739_Dyn_DropDown", "False");
  }

  async setSystemparameter745AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("745", "select", "param_745_Dyn_DropDown", "False");
  }

  async setSystemparameter745AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("745", "select", "param_745_Dyn_DropDown", "True");
  }

  async setSystemparameter816AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("816", "select", "param_816_Dyn_DropDown", "True");
  }

  async setSystemparameter816AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("816", "select", "param_816_Dyn_DropDown", "False");
  }

  async verifySystemParameter705AsNotEmpty(): Promise<void> {
    // String text = uIMapSettings.systemParameter.uIAffirmationMessageEdit.getText();
    // verify.ExpectedPropertyValueIsNotEqual(text, null);
  }

  async setSystemParameter705AsEmpty(): Promise<void> {
    // uIMapSettings.systemParameter.uIAffirmationMessageEdit.clear();
  }

  async verifySystemParameter705AsEmpty(): Promise<void> {
    // String text = uIMapSettings.systemParameter.uIAffirmationMessageEdit.getText();
    // verify.ExpectedPropertyValueIsEqual(text, "");
  }

  async setSystemParameter705AsYes(): Promise<void> {
    // uIMapSettings.systemParameter.uIAffirmationMessageEdit.sendKeys("Yes");
  }

  async setSystemparameter759AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("759", "select", "param_759_Dyn_DropDown", "True");
  }

  async setSystemparameter759AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("759", "select", "param_759_Dyn_DropDown", "False");
  }

  async setSystemparameter917AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("917", "select", "param_917_Dyn_DropDown", "True");
  }

  async setSystemparameter917AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("917", "select", "param_917_Dyn_DropDown", "False");
  }

  async setSystemparameter918AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("918", "select", "param_918_Dyn_DropDown", "True");
  }

  async setSystemparameter918AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("918", "select", "param_918_Dyn_DropDown", "False");
  }

  async setSystemparameter919AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("919", "select", "param_919_Dyn_DropDown", "True");
  }

  async setSystemparameter919AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("919", "select", "param_919_Dyn_DropDown", "False");
  }

  async setSystemparameter920AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("920", "select", "param_920_Dyn_DropDown", "True");
  }

  async setSystemparameter926AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("926", "select", "param_926_Dyn_DropDown", "True");
  }

  async setSystemparameter926AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("926", "select", "param_926_Dyn_DropDown", "False");
  }

  async setSystemparameter920AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("920", "select", "param_920_Dyn_DropDown", "False");
  }

  async setSystemparameter909AsAdministration(): Promise<void> {
    // sysParameter.changeParameterById("909", "select", "param_909_Dyn_DropDown", "Administration");
  }

  async setSystemparameter829AsYes(): Promise<void> {
    // sysParameter.changeParameterById("829", "select", "param_829_Dyn_DropDown", "Yes");
  }

  async setSystemparameter829AsNill(): Promise<void> {
    // sysParameter.changeParameterById("829", "select", "param_829_Dyn_DropDown", "--");
  }

  async setSystemparameter762AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("762", "select", "param_762_Dyn_DropDown", "True");
  }

  async setSystemparameter762AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("762", "select", "param_762_Dyn_DropDown", "False");
  }

  async setSystemparameter2017AtFromDate(): Promise<void> {
    // sysParameter.changeParameterById("2017", "input", "param_2017_Dyn",
    // BaseData.getSettingsModuleValue("FromDate"));// FromDate must be 08/2020
  }

  async setSystemparameter736AsDivSec(): Promise<void> {
    // sysParameter.changeParameterById("736", "select", "param_736_Dyn_DropDown", "DIV+SEC");
  }

  async setSystemparameter785AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("785", "select", "param_785_Dyn_DropDown", "True");
  }

  async setSystemparameter835AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("835", "select", "param_835_Dyn_DropDown", "True");
  }

  async setSystemparameter1826AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("1826", "select", "param_1826_Dyn_DropDown", "False");
  }

  async setSystemparameter836AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("836", "select", "param_836_Dyn_DropDown", "False");
  }

  async setSystemparameter1826AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1826", "select", "param_1826_Dyn_DropDown", "True");
  }

  async setSystemparameter203AsBlank(): Promise<void> {
    // sysParameter.changeParameterById("203", "input", "param_203_Dyn", " ");
  }

  async setSystemparameter204AsBlank(): Promise<void> {
    // sysParameter.changeParameterById("204", "input", "param_204_Dyn", " ");
  }

  async setSystemparameter205AsBlank(): Promise<void> {
    // sysParameter.changeParameterById("205", "input", "param_205_Dyn", " ");
  }

  async setSystemparameter220AsBlank(): Promise<void> {
    // sysParameter.changeParameterById("220", "input", "param_220_Dyn", " ");
  }

  async setSystemparameter203AsSMTPserver(): Promise<void> {
    // sysParameter.changeParameterById("203", "input", "param_203_Dyn", "mail.prophoenix.com");
  }

  async setSystemparameter204AsSMTPuser(): Promise<void> {
    // sysParameter.changeParameterById("204", "input", "param_204_Dyn", "phoenix");
  }

  async setSystemparameter220AsSMTPpassword(): Promise<void> {
    // sysParameter.changeParameterById("220", "input", "param_220_Dyn", "spSS0377");
  }

  async setSystemparameter220AsWebServerURL(): Promise<void> {
    // sysParameter.changeParameterById("220", "input", "param_220_Dyn",
    // "http://10.103.1.65//PhoenixWebService/Notify/Notification.asmx");
  }

  async setSystemparameter272AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("272", "select", "param_272_Dyn_DropDown", "False");
  }

  async setSystemparameter272AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("272", "select", "param_272_Dyn_DropDown", "True");
  }

  async setSystemparameter832AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("832", "select", "param_832_Dyn_DropDown", "True");
  }

  async setSystemparameter832AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("832", "select", "param_832_Dyn_DropDown", "False");
  }

  async setSystemparameter833AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("833", "select", "param_833_Dyn_DropDown", "True");
  }

  async setSystemparameter833AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("833", "select", "param_833_Dyn_DropDown", "False");
  }

  async setSystemparameter834AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("834", "select", "param_834_Dyn_DropDown", "True");
  }

  async setSystemparameter834AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("834", "select", "param_834_Dyn_DropDown", "False");
  }

  async setSystemparameter835AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("835", "select", "param_835_Dyn_DropDown", "False");
  }

  async setSystemparameter814AsDisseminateReport(): Promise<void> {
    // sysParameter.changeParameterById("814", "select", "param_814_Dyn_DropDown", "Disseminate Report");
  }

  async setSystemparameter813AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("813", "select", "param_813_Dyn_DropDown", "True");
  }

  async setSystemparameter813AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("813", "select", "param_813_Dyn_DropDown", "False");
  }

  async setSystemparameter512AsESRI(): Promise<void> {
    // sysParameter.changeParameterById("512", "select", "param_512_Dyn_DropDown", "ESRI");
  }

  async setSystemparameter512AsGoogleMap(): Promise<void> {
    // sysParameter.changeParameterById("512", "select", "param_512_Dyn_DropDown", "Google Map");
  }

  async setSystemparameter512AsHEREMap(): Promise<void> {
    // sysParameter.changeParameterById("512", "select", "param_512_Dyn_DropDown", "HERE Map");
  }

  async setSystemparameter427AsAbandoned(): Promise<void> {
    // sysParameter.changeParameterById("427", "input", "param_427_Dyn", "Abandoned");
  }

  async setSystemParameter736AsDIVSEC(): Promise<void> {
    // sysParameter.changeParameterById("736", "select", "param_736_Dyn_DropDown", "DIV+SEC");
  }

  async setSystemparameter760AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("760", "select", "param_760_Dyn_DropDown", "True");
  }

  async setSystemparameter760AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("760", "select", "param_760_Dyn_DropDown", "False");
  }

  async setSystemparameter712AsMandatory(): Promise<void> {
    // sysParameter.changeParameterById("712", "select", "param_712_Dyn_DropDown", "Mandatory");
  }

  async setSystemparameter812As1(): Promise<void> {
    // sysParameter.changeParameterById("812", "input", "param_812_Dyn", "1");
  }

  async setSystemparameter812As0(): Promise<void> {
    // sysParameter.changeParameterById("812", "input", "param_812_Dyn", "0");
  }

  async setSystemparameter659AsAdult(): Promise<void> {
    // sysParameter.changeParameterById("659", "select", "param_659_Dyn_DropDown", "Adult");
  }

  async setSystemparameter659AsNull(): Promise<void> {
    // sysParameter.changeParameterById("659", "select", "param_659_Dyn_DropDown", "--");
  }

  async setSystemparameter221AsNotificationFrom(): Promise<void> {
    // sysParameter.changeParameterById("221", "input", "param_221_Dyn", "Support00@prophoenix.com");
  }

  async setSystemparameter204AsSMTPuserGmai(): Promise<void> {
    // sysParameter.changeParameterById("204", "input", "param_204_Dyn", "ProPhoenixText@Gmail.com");
  }

  async setSystemparameter205AsSMTPpassword(): Promise<void> {
    // sysParameter.changeParameterById("205", "input", "param_205_Dyn", "phoenix1text");
  }

  async setSystemparameter206AsFromID(): Promise<void> {
    // sysParameter.changeParameterById("206", "input", "param_206_Dyn", "support@prophoenix.com");
  }

  async setSystemparameter2504AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("2504", "select", "param_2504_Dyn_DropDown", "True");
  }

  async setSystemparameter2504AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("2504", "select", "param_2504_Dyn_DropDown", "False");
  }

  async setSystemparameter3137AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("3137", "select", "param_3137_Dyn_DropDown", "False");
  }

  async setSystemparameter3137AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("3137", "select", "param_3137_Dyn_DropDown", "True");
  }

  async setSystemparameter3140AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("3140", "select", "param_3140_Dyn_DropDown", "True");
  }

  async setSystemparameter3257AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("3257", "select", "param_3257_Dyn_DropDown", "True");
  }

  async setSystemparameter286AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("286", "select", "param_286_Dyn_DropDown", "False");
  }

  async setSystemparameter286AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("286", "select", "param_286_Dyn_DropDown", "True");
  }

  async setSystemparameter504AsValidApartment(): Promise<void> {
    // sysParameter.changeParameterById("504", "select", "param_504_Dyn_DropDown", "Valid Apartment or Blank");
  }

  async setSystemparameter504AsVerifyApartment(): Promise<void> {
    // sysParameter.changeParameterById("504", "select", "param_504_Dyn_DropDown", "Verify Apartment");
  }

  async setSystemparameter504AsNoVerification(): Promise<void> {
    // sysParameter.changeParameterById("504", "select", "param_504_Dyn_DropDown", "No Verification");
  }

  async setSystemparameter540AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("540", "select", "param_540_Dyn_DropDown", "False");
  }

  async setSystemparameter549AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("549", "select", "param_549_Dyn_DropDown", "True");
  }

  async setSystemparameter549AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("549", "select", "param_549_Dyn_DropDown", "False");
  }

  async verifySytemParameter540SelectedValueAsFalse(): Promise<void> {
    // sysParameter.verifySytemParameterSelectedValue("540", "False");
  }

  async verifySytemParameter549SelectedValueAsFalse(): Promise<void> {
    // sysParameter.verifySytemParameterSelectedValue("549", "False");
  }

  async verifySytemParameter540Disabled(): Promise<void> {
    // sysParameter.verifySytemParameterDropdownDisabled("540");
  }

  async verifySytemParameter549Disabled(): Promise<void> {
    // sysParameter.verifySytemParameterDropdownDisabled("549");
  }

  async setSystemparameter200AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("200", "select", "param_200_Dyn_DropDown", "True");
  }

  async setSystemparameter203AsSSL(): Promise<void> {
    // sysParameter.changeParameterById("203", "input", "param_203_Dyn", "SMTP.GMAIL.COM");
  }

  async setSystemparameter203AsNonSSL(): Promise<void> {
    // sysParameter.changeParameterById("203", "input", "param_203_Dyn", "192.168.15.57");
  }

  async setSystemparameter200AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("200", "select", "param_200_Dyn_DropDown", "False");
  }

  async setSystemparameter558As8(): Promise<void> {
    // sysParameter.changeParameterById("558", "input", "param_558_Dyn", "8");
  }

  async setSystemparameter633AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("633", "select", "param_633_Dyn_DropDown", "True");
  }

  async setSystemparameter633AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("633", "select", "param_633_Dyn_DropDown", "False");
  }

  async setSystemparameter653AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("653", "select", "param_653_Dyn_DropDown", "True");
  }

  async setSystemparameter615AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("615", "select", "param_615_Dyn_DropDown", "True");
  }

  async setSystemparameter615AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("615", "select", "param_615_Dyn_DropDown", "False");
  }

  async setSystemparameter731AsMandatory(): Promise<void> {
    // sysParameter.changeParameterById("731", "select", "param_731_Dyn_DropDown", "Mandatory");
  }

  async setSystemparameter731AsYes(): Promise<void> {
    // sysParameter.changeParameterById("731", "select", "param_731_Dyn_DropDown", "Yes");
  }

  async setSystemparameter731AsNo(): Promise<void> {
    // sysParameter.changeParameterById("731", "select", "param_731_Dyn_DropDown", "No");
  }

  async setSystemparameter2501AsFutureDate(Date: number): Promise<void> {
    // sysParameter.changeParameterById("2501", "input", "param_2501_Dyn", Randomized.getFutureDate(Date));
  }

  async verifySystemParameter501IsNotAsMNDB(): Promise<void> {
    // String inputValue = sysParameter.getInputValue("501", "param_501_Dyn_DropDown");
    // verify.ExpectedValueIsNotTrue(inputValue.contains("MN"));
  }

  async setSystemParameterID633AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("633", "select", "param_633_Dyn_DropDown", "True");
  }

  async verifyAtParameterValueByID(): Promise<void> {
    // String ParameterValue = sysParameter.readInputValue(BaseData.getSettingsModuleValue("ParameterID"));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ParameterValue"), ParameterValue);
  }

  async setSystemparameter746AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("746", "select", "param_746_Dyn_DropDown", "True");
  }

  async setSystemparameter746AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("746", "select", "param_746_Dyn_DropDown", "False");
  }

  async clickRefreshButton(): Promise<void> {
    // uIMapSettings.systemParameter.uIResetButton.click();
  }

  async setSystemparameter782AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("782", "select", "param_782_Dyn_DropDown", "True");
  }

  async setSystemparameter228AsNull(): Promise<void> {
    // sysParameter.changeParameterById("228", "select", "param_228_Dyn_DropDown", "--");
  }

  async selectAtModule(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.systemParameter.uIModuleDropDown,
    // BaseData.getSettingsModuleValue("Module"));
    // uIMapSettings.systemParameter.uIModuleDropDown.sendKeys(Keys.TAB);
  }

  async setSystemParameterID3118AsReportOfInspectionAndNoticeOfViolation(): Promise<void> {
    // sysParameter.changeParameterById("3118", "select", "param_3118_Dyn_DropDown",
    // "Report of Inspection and Notice of Violation");
  }

  async setSystemParameterID3143AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("3143", "select", "param_3143_Dyn_DropDown", "True");
  }

  async setSystemParameterID3140AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("3140", "select", "param_3140_Dyn_DropDown", "True");
  }

  async setSystemParameterID3144AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("3144", "select", "param_3144_Dyn_DropDown", "True");
  }

  async setSystemParameterID3144AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("3144", "select", "param_3144_Dyn_DropDown", "False");
  }

  async setSystemParameterID3107AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("3107", "select", "param_3107_Dyn_DropDown", "True");
  }

  async clickApprovalParameterButton(): Promise<void> {
    // uIMapSettings.systemParameter.uIApproveParameterButton.click();
  }

  async setSystemparameter39AsWrongLocation(): Promise<void> {
    // sysParameter.changeParameterById("39", "input", "param_39_Dyn", "<C:<\\Program Files\\ProPhoe>>");
  }

  async setSystemparameter39AsCorrectLocation(): Promise<void> {
    // sysParameter.changeParameterById("39", "input", "param_39_Dyn", "<C:<\\Program Files\\ProPhoenix>>");
  }

  async setSystemparameter36AsHttps(): Promise<void> {
    // sysParameter.changeParameterById("36", "input", "param_36_Dyn",
    // "https://ch68.prophoenix.com/PnxRptSvr/frmPnxRpt.aspx");
  }

  async setSystemparameter36AsHttp(URL: string): Promise<void> {
    // sysParameter.changeParameterById("36", "input", "param_36_Dyn", URL);
  }

  async setSystemparameter806AsEmailId(): Promise<void> {
    // sysParameter.changeParameterById("806", "input", "param_806_Dyn", "automation-qa@prophoenix.com");
  }

  async setSystemparameter807As1(): Promise<void> {
    // sysParameter.changeParameterById("807", "input", "param_807_Dyn", "1");
  }

  async setSystemparameter1203AsVEHCK(): Promise<void> {
    // sysParameter.changeParameterById("1203", "select", "param_1203_Dyn_DropDown", "VEHCK - Vehicle Inspection");
  }

  async setSystemparameter4338AsNull(): Promise<void> {
    // sysParameter.changeParameterById("4338", "input", "param_4338_Dyn", " ");
  }

  async setSystemParameter836AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("836", "select", "param_836_Dyn_DropDown", "True");
  }

  async setSystemparameter1804AsNull(): Promise<void> {
    // sysParameter.changeParameterById("1804", "input", "param_1804_Dyn", " ");
  }

  async setSystemparameter905AsOpenPending(): Promise<void> {
    // sysParameter.changeParameterById("905", "select", "param_905_Dyn_DropDown", "OPN - Open/Pending (CM)");
  }

  async setSystemparameter905AsArrestedAdult(): Promise<void> {
    // sysParameter.changeParameterById("905", "select", "param_905_Dyn_DropDown", "AAC - Arrested Adult (CM)");
  }

  async setSystemparameter905AsExceptionalClearanceAdult(): Promise<void> {
    // sysParameter.changeParameterById("905", "select", "param_905_Dyn_DropDown",
    // "EAC - Exceptional Clearance - Adult (CM)");
  }

  async setSystemparameter905AsExceptionalClearanceJuvenile(): Promise<void> {
    // sysParameter.changeParameterById("905", "select", "param_905_Dyn_DropDown",
    // "EJC - Exceptional Clearance - Juvenile (CM)");
  }

  async setSystemparameter905AsClosed(): Promise<void> {
    // sysParameter.changeParameterById("905", "select", "param_905_Dyn_DropDown",
    // "NFL - Closed - No Further Leads (CM)");
  }

  async setSystemparameter905AsSuspended(): Promise<void> {
    // sysParameter.changeParameterById("905", "select", "param_905_Dyn_DropDown", "SUS - CM Suspended");
  }

  async setSystemparameter905AsArrestedJuvenile(): Promise<void> {
    // sysParameter.changeParameterById("905", "select", "param_905_Dyn_DropDown", "AJC - Arrested Juvenile (CM)");
  }

  async setSystemparameter905AsUnfounded(): Promise<void> {
    // sysParameter.changeParameterById("905", "select", "param_905_Dyn_DropDown", "UNC - Unfounded (CM)");
  }

  async setSystemparameter905AsNull(): Promise<void> {
    // sysParameter.changeParameterById("905", "select", "param_905_Dyn_DropDown", " ");
  }

  async setSystemparameter808As1(): Promise<void> {
    // sysParameter.changeParameterById("808", "input", "param_808_Dyn", "1");
  }

  async setSystemparameter809As1(): Promise<void> {
    // sysParameter.changeParameterById("809", "input", "param_809_Dyn", "1");
  }

  async setSystemparameter274AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("274", "select", "param_274_Dyn_DropDown", "False");
  }

  async setSystemparameter275AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("275", "select", "param_275_Dyn_DropDown", "False");
  }

  async setSystemparameter764AsBlank(): Promise<void> {
    // sysParameter.changeParameterById("764", "select", "param_764_Dyn_DropDown", "--");
  }

  async setSystemparameter410AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("410", "select", "param_410_Dyn_DropDown", "True");
  }

  async setSystemparameter911AsYes(): Promise<void> {
    // sysParameter.changeParameterById("911", "select", "param_911_Dyn_DropDown", "Yes");
  }

  async setSystemparameter206AsMailID(): Promise<void> {
    // sysParameter.changeParameterById("206", "input", "param_206_Dyn", "noreply@prophoenix.com");
  }

  async setSystemparamete723AsYes(): Promise<void> {
    // sysParameter.changeParameterById("723", "select", "param_723_Dyn_DropDown", "Yes");
  }

  async setSystemparameter721AsYes(): Promise<void> {
    // sysParameter.changeParameterById("721", "select", "param_721_Dyn_DropDown", "Yes");
  }

  async setSystemparameter640AsRMSOnly(): Promise<void> {
    // sysParameter.changeParameterById("640", "select", "param_640_Dyn_DropDown", "RMS Only");
  }

  async setSystemparameter640AsNull(): Promise<void> {
    // sysParameter.changeParameterById("640", "select", "param_640_Dyn_DropDown", "--");
  }

  async ClickCaseNotificationeButton(): Promise<void> {
    // uIMapSettings.systemParameter.uICaseNotificationIcon.click();
    // Playback.controlReadyThreadWait();
  }

  async enterParameter753As15Days(): Promise<void> {
    // sysParameter.changeParameterById("753", "input", "param_753_Dyn", BaseData.getSettingsModuleValue("Days"));
  }

  async setSystemparameter428AsPattern(): Promise<void> {
    // sysParameter.changeParameterById("428", "input", "param_428_Dyn", "T[YY][PPPPPPP]$[III]");
  }

  async setSystemparameter428AsPattern1(): Promise<void> {
    // sysParameter.changeParameterById("428", "input", "param_428_Dyn", "%T[YY][PPPPPPP]$ [iii]%");
  }

  async setSystemparameter427AsAccident(): Promise<void> {
    // sysParameter.changeParameterById("427", "input", "param_427_Dyn", "Accident");
  }

  async setSystemparameter36ForSetup(): Promise<void> {
    // Playback.driver.findElement(By.id("txtParamID")).click();
    // Playback.driver.findElement(By.id("txtParamID")).sendKeys("36");
    // Playback.driver.findElement(By.id("cmdSearch")).click();
    // String setupUrl = PropertiesFile.readPropertiesFile("url").substring(0, 20);
    // String reportServerUrl = Playback.driver.findElement(By.xpath("//input[@id='param_36_Dyn']"))
    // .getAttribute("value");
    // String IPServerUrl = reportServerUrl.substring(0, 20);
    // String ChangedIPServerUrl = reportServerUrl.replaceAll(IPServerUrl, setupUrl);
    // sysParameter.changeParameterById("36", "input", "param_36_Dyn", ChangedIPServerUrl);
  }

  async setSystemparameter25AsScenePDWebSDKv75(): Promise<void> {
    // sysParameter.changeParameterById("25", "select", "param_25_Dyn_DropDown", "Scene PD Web SDK v7.5");
  }

  async setSystemparameter91AsLicensed(): Promise<void> {
    // sysParameter.changeParameterById("91", "input", "param_91_Dyn", "64667972");
  }

  async setSystemparameter92Aswebsdk(): Promise<void> {
    // sysParameter.changeParameterById("92", "input", "param_92_Dyn", "websdk");
  }

  async setSystemparameter743AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("743", "select", "param_743_Dyn_DropDown", "False");
  }

  async setSystemparameter743AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("743", "select", "param_743_Dyn_DropDown", "True");
  }

  async setSystemparameter5909AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("5909", "select", "param_5909_Dyn_DropDown", "True");
  }

  async setSystemparameter5909AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("5909", "select", "param_5909_Dyn_DropDown", "False");
  }

  async setSystemparameter502AsAtlantic(): Promise<void> {
    // sysParameter.changeParameterById("502", "select", "param_502_Dyn_DropDown", "01 - ATLANTIC");
  }

  async verifyComboBoxSystemParametersListedInScreen(): Promise<void> {
    // int size = Playback.driver.findElements(By.xpath("//select[contains(@id,'param')]")).size();
    // verify.ExpectedIntergerValueIsNotEqualToActual(0, size);
  }

  async setSystemparameter906AsCaseReOpened(): Promise<void> {
    // sysParameter.changeParameterById("906", "select", "param_906_Dyn_DropDown", "ACT - Case Reopened");
  }

  async setSystemparameter906AsCaseOpenPending(): Promise<void> {
    // sysParameter.changeParameterById("906", "select", "param_906_Dyn_DropDown", "OPN - Open/Pending (CM)");
  }

  async verifyEditSystemParametersListedInScreen(): Promise<void> {
    // List<WebElement> newElements = new ArrayList<WebElement>();
    // List<WebElement> allElements = Playback.driver.findElements(By.xpath("//input[contains(@id,'param')]"));
    // for (WebElement element : allElements) {
    // if (element.isDisplayed()) {
    // newElements.add(element);
    // System.out.println(newElements.size());
    // verify.ExpectedIntergerValueIsNotEqualToActual(0, newElements.size());
  }

  async selectModuleAsNull(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.systemParameter.uIModuleDropDown,
    // "--");
    // uIMapSettings.systemParameter.uIModuleDropDown.sendKeys(Keys.TAB);
  }

  async resetParameterID(): Promise<void> {
    // uIMapSettings.systemParameter.uIParameterIDEdit.click();
    // uIMapSettings.systemParameter.uIParameterIDEdit.clear();
  }

  async enterAtParameterName(): Promise<void> {
    // uIMapSettings.systemParameter.uIParameterNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ParameterName"));
    // uIMapSettings.systemParameter.uIParameterNameEdit.sendKeys(Keys.TAB);
  }

  async clickViewHistoryButton(): Promise<void> {
    // uIMapSettings.systemParameter.uIViewHistoryButton.click();
  }

  async switchToHistoryWindow(): Promise<void> {
    // objectIdentification.windowHandle.switchToWindowUsingURL("frmSysParamHistory");
  }

  async setSystemparameter299AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("299", "select", "param_299_Dyn_DropDown", "True");
  }

  async setSystemparameter1728AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("1728", "select", "param_1728_Dyn_DropDown", "False");
  }

  async setSystemparameter406As21RotationbyZoneAndTowType(): Promise<void> {
    // sysParameter.changeParameterById("406", "select", "param_406_Dyn_DropDown",
    // "21 - Rotation by Zone & Tow Type (Reg; Hvy; Spc)");
  }

  async setSystemparameter406As23RotationbyZoneCycleAndTowType(): Promise<void> {
    // sysParameter.changeParameterById("406", "select", "param_406_Dyn_DropDown",
    // "23 - Rotation by Zone, Cycle & Tow Type (Reg; Hvy;Spc)");
  }

  async setSystemparameter1752AsAllowAfterCrashReportIsApproved(): Promise<void> {
    // sysParameter.changeParameterById("1752", "select", "param_1752_Dyn_DropDown",
    // "Allow after Crash Report is Approved");
  }

  async setSystemparameter1752AsAllowAfterCrashReportIsLocked(): Promise<void> {
    // sysParameter.changeParameterById("1752", "select", "param_1752_Dyn_DropDown",
    // "Allow after Crash Report is Locked");
  }

  async enterSysParameter79AsDays(): Promise<void> {
    // sysParameter.changeParameterById("79", "input", "param_79_Dyn", BaseData.getSettingsModuleValue("Days"));
  }

  async verifySystemParameter1205Disabled(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // String value = uIMapSettings.systemParameter.uIParameterID1205.getAttribute("class");
    // System.out.println(value);
    // verify.ExpectedPropertyValueIsEqual("textboxInactive", value);
  }

  async verifyTooltipMsgForParameter1205(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // String Msg = uIMapSettings.systemParameter.uIParameterID1205.getAttribute("title");
    // System.out.println(Msg);
    // verify.ExpectedPropertyValueIsEqual(
    // "Please contact your system administrator for restricted parameter value update", Msg);
  }

  async setSystemparameter1211AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1211", "select", "param_1211_Dyn_DropDown", "True");
  }

  async setSystemparameter1211AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("1211", "select", "param_1211_Dyn_DropDown", "False");
  }

  async setSystemparameter1127AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("1127", "select", "param_1127_Dyn_DropDown", "False");
  }

  async setSystemparameter1127AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1127", "select", "param_1127_Dyn_DropDown", "True");
  }

  async setSystemparameter415AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("415", "select", "param_415_Dyn_DropDown", "False");
  }

  async enterAtParameter55(): Promise<void> {
    // sysParameter.changeParameterById("55", "input", "param_55_Dyn", BaseData.getSettingsModuleValue("Days"));
  }

  async enterAtParameter1205(): Promise<void> {
    // sysParameter.changeParameterById("1205", "input", "param_1205_Dyn",
    // BaseData.getSettingsModuleValue("NumberofDays"));
  }

  async enterAtParameter605UsingIndex(jsonindex: number): Promise<void> {
    // sysParameter.changeParameterById("605", "input", "param_605_Dyn",
    // BaseData.getSettingsModuleValue("NextJacketNumber" + jsonindex));
  }

  async enterAtParameter665UsingIndex(i: number): Promise<void> {
    // sysParameter.changeParameterById("665", "input", "param_665_Dyn",
    // BaseData.getSettingsModuleValue("NextOffender" + i));
  }

  async setSystemparameter4631AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("4631", "select", "param_4631_Dyn_DropDown", "True");
  }

  async setSystemparameter4631AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("4631", "select", "param_4631_Dyn_DropDown", "False");
  }

  async setSystemparameter629AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("629", "select", "param_629_Dyn_DropDown", "True");
  }

  async setSystemParameter62AsCMS(): Promise<void> {
    // sysParameter.changeParameterById("62", "select", "param_62_Dyn_DropDown", "CMS");
  }

  async setSystemParameter62AsPoliceRMS(): Promise<void> {
    // sysParameter.changeParameterById("62", "select", "param_62_Dyn_DropDown", "Police RMS");
  }

  async setSystemParameter4633AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("4633", "select", "param_4633_Dyn_DropDown", "True");
  }

  async setSystemParameter4633AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("4633", "select", "param_4633_Dyn_DropDown", "False");
  }

  async verifyCustomCategoryDropdownAsRadicalDropdown(): Promise<void> {
    // uIMapSettings.systemParameter.uICustomCategoryDropdownArrow.click();
    // String attribute = uIMapSettings.systemParameter.uICustomCategoryRadDropDownTray.getAttribute("class");
    // verify.ExpectedValueIsTrue(attribute.contains("RadComboBoxDropDown"));
    // uIMapSettings.systemParameter.uICustomCategoryDropdownArrow.click();
  }

  async verifySystemCategoryDropdownAsRadicalDropdown(): Promise<void> {
    // uIMapSettings.systemParameter.uISystemCategoryDropdownArrow.click();
    // String attribute = uIMapSettings.systemParameter.uISystemCategoryRadDropdownTray.getAttribute("class");
    // verify.ExpectedValueIsTrue(attribute.contains("RadComboBoxDropDown"));
    // uIMapSettings.systemParameter.uISystemCategoryDropdownArrow.click();
  }

  async selectCustomCategoryAsCheckAll(): Promise<void> {
    // uIMapSettings.systemParameter.uICustomCategoryDropdownArrow.click();
    // Playback.threadWait(3000);
    // Playback.threadWait(3000);
    // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(
    // uIMapSettings.systemParameter.uICustomCategoryRadDropDownTray, "Check All");
    // uIMapSettings.systemParameter.uICustomCategoryDropdownArrow.click();
  }

  async selectSystemCategoryAsCheckAll(): Promise<void> {
    // uIMapSettings.systemParameter.uISystemCategoryDropdownArrow.click();
    // Playback.pageLoadThreadWait();
    // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(
    // uIMapSettings.systemParameter.uISystemCategoryRadDropdownTray, "Check All");
    // uIMapSettings.systemParameter.uISystemCategoryDropdownArrow.click();
  }

  async verifyAtSortBy(i: number): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.systemParameter.uISortByDropdown);
    // verify.ExpectedPropertyValueIsEqual( BaseData.getSettingsModuleValue("SortBy"+i),dropDownSelectedItem);
  }

  async selectAtSortBy(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.systemParameter.uISortByDropdown,
    // BaseData.getSettingsModuleValue("SortBy"));
  }

  async verifySystemParameterDropdownsDisplayed(): Promise<void> {
    // try {
    // WebElement e = Playback.driver.findElement(By.xpath("//div[@id='divSys']//select"));
    // if (e.isDisplayed() == true) {
    // List<WebElement> ls = Playback.driver.findElements(By.xpath("//div[@id='divSys']//select"));
    // int count = ls.size();
    // System.out.println(count);
    // for (WebElement ele : ls) {
    // if (count > 0) {
    // verify.ExpectedValueIsTrue(ele.isDisplayed());
    // } catch (Exception e) {
    // settings = new Settings();
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
    // settings.switchToSystemParamter();
  }

  async selectSortByAsFeatureGroup(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.systemParameter.uISortByDropdown,
    // "Feature Group");
  }

  async clearParameteraName(): Promise<void> {
    // uIMapSettings.systemParameter.uIParameterNameEdit.clear();
  }

  async selectAtModule1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.systemParameter.uIModuleDropDown,
    // BaseData.getSettingsModuleValue("Module1"));
    // uIMapSettings.systemParameter.uIModuleDropDown.sendKeys(Keys.TAB);
  }

  async enterParameter1205As100(): Promise<void> {
    // sysParameter.changeParameterById("1205", "input", "param_100_Dyn", "100");
  }

  async click1205SysParameterLabel(): Promise<void> {
    // Playback.driver.findElement(By.id("lblparam_1205_Dyn")).click();
  }

  async verifySystemParameter1205IsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.systemParameter.uIParameterID1205.isEnabled());
  }

  async setSystemparameter1825AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("1825", "select", "param_1825_Dyn_DropDown", "False");
  }

  async setSystemparameter1825AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1825", "select", "param_1825_Dyn_DropDown", "True");
  }

  async setSystemparameter231AsAzureCloud(): Promise<void> {
    // sysParameter.changeParameterById("231", "select", "param_231_Dyn_DropDown", "Azure Cloud");
  }

  async setSystemparameter231AsDataBase(): Promise<void> {
    // sysParameter.changeParameterById("231", "select", "param_231_Dyn_DropDown", "Database");
  }

  async setSystemparameter231AsNetwork(): Promise<void> {
    // sysParameter.changeParameterById("231", "select", "param_231_Dyn_DropDown", "Network");
  }

  async setSystemparameter604AsUserAssignsNotMandatory(): Promise<void> {
    // sysParameter.changeParameterById("604", "select", "param_604_Dyn_DropDown", "User Assigns Not Mandatory");
  }

  async setSystemparameter604AsUserAssignsMandatory(): Promise<void> {
    // sysParameter.changeParameterById("604", "select", "param_604_Dyn_DropDown", "User Assigns Mandatory");
  }

  async setSystemparameter604AsSystemAssignsMandatory(): Promise<void> {
    // sysParameter.changeParameterById("604", "select", "param_604_Dyn_DropDown", "System Assigns Mandatory");
  }

  async setSystemparameter604AsSystemAssignsNonMandatory(): Promise<void> {
    // sysParameter.changeParameterById("604", "select", "param_604_Dyn_DropDown", "System Assigns Not Mandatory");
  }

  async setSystemparameter415AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("415", "select", "param_415_Dyn_DropDown", "True");
  }

  async setSystemparameter856AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("856", "select", "param_856_Dyn_DropDown", "True");
  }

  async setSystemparameter856AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("856", "select", "param_856_Dyn_DropDown", "False");
  }

  async setSystemparameter738AsWhenApproved(): Promise<void> {
    // sysParameter.changeParameterById("738", "select", "param_738_Dyn_DropDown", "When approved");
  }

  async setSystemParameter2139AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("2139", "select", "param_2139_Dyn_DropDown", "False");
  }

  async setSystemParameter2139AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("2139", "select", "param_2139_Dyn_DropDown", "True");
  }

  async setSystemparameter1746AsCrashInterface(): Promise<void> {
    // sysParameter.changeParameterById("1746", "select", "param_1746_Dyn_DropDown", "Crash Interface");
  }

  async setSystemparameter1746AsNull(): Promise<void> {
    // sysParameter.changeParameterById("1746", "select", "param_1746_Dyn_DropDown", " -- ");
  }

  async setSystemparameter1768AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1768", "select", "param_1768_Dyn_DropDown", "True");
  }

  async setSystemparameter1732AsGallowayTownship(): Promise<void> {
    // sysParameter.changeParameterById("1732", "select", "param_1732_Dyn_DropDown", "0111 - Galloway Township");
  }

  async setSystemParameter859AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("859", "select", "param_859_Dyn_DropDown", "True");
  }

  async setSystemParameter859AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("859", "select", "param_859_Dyn_DropDown", "False");
  }

  async clickOnParameterID1205(): Promise<void> {
    // uIMapSettings.systemParameter.uIParameterID1205Lbl.click();
  }

  async setSystemparameter1752AsNull(): Promise<void> {
    // sysParameter.changeParameterById("1752", "select", "param_1752_Dyn_DropDown", "--");
  }

  async setSystemParameter1758AsTrafficECitation(): Promise<void> {
    // sysParameter.changeParameterById("1758", "select", "param_1752_Dyn_DropDown", "Traffic eCitation");
  }

  async setSystemParameter1731AsStateOfNewJersey(): Promise<void> {
    // sysParameter.changeParameterById("1731", "select", "param_1731_Dyn_DropDown", "State of new Jersey");
  }

  async setSystemParameter1721AsAtlantic(): Promise<void> {
    // sysParameter.changeParameterById("1721", "select", "param_1721_Dyn_DropDown", "01 - ATLANTIC");
  }

  async setSystemParameter1731AsCityVillageTown(): Promise<void> {
    // sysParameter.changeParameterById("1731", "select", "param_1731_Dyn_DropDown", "City/Village/Town");
  }

  async setSystemParameter1732AsAtlanticCounty(): Promise<void> {
    // sysParameter.changeParameterById("1732", "select", "param_1732_Dyn_DropDown", "0100 - Atlantic County");
  }

  async verifySystemParameter1825IsTrue(): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.systemParameter.uISysPara1825Dropdown);
    // // String attribute =
    // // uIMapSettings.systemParameter.uISysPara1825Dropdown.getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Status"), dropDownSelectedItem);
  }

  async setSystemparameter433AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("433", "select", "param_433_Dyn_DropDown", "True");
  }

  async setSystemparameter433AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("433", "select", "param_433_Dyn_DropDown", "False");
  }

  async setSystemparamete1202AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1202", "select", "param_1202_Dyn_DropDown", "True");
  }

  async setSystemparamete1202AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("1202", "select", "param_1202_Dyn_DropDown", "False");
  }

  async setAtSystemparameter1719(): Promise<void> {
    // sysParameter.changeParameterById("1719", "input", "param_1719_Dyn",
    // BaseData.getSettingsModuleValue("CrashReportNCIC"));
  }

  async verifyAtSysparameter23Value(): Promise<void> {
    // String value = uIMapSettings.systemParameter.uISysPara23Edit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("SysParaAgencyCode"), value);
  }

  async clear1719Sysparametervalue(): Promise<void> {
    // uIMapSettings.systemParameter.uISysPara1719Edit.clear();
  }

  async setAtSystemparameter23(): Promise<void> {
    // sysParameter.changeParameterById("23", "input", "param_23_Dyn",
    // BaseData.getSettingsModuleValue("SysParaAgencyCode"));
  }

  async verifySysparameter1719ValueAsNull(): Promise<void> {
    // String value = uIMapSettings.systemParameter.uISysPara1719Edit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual("", value);
  }

  async clear23Sysparametervalue(): Promise<void> {
    // uIMapSettings.systemParameter.uISysPara23Edit.clear();
  }

  async setSystemParameter1711AsCountyCourt(): Promise<void> {
    // sysParameter.changeParameterById("1711", "select", "param_1711_Dyn_DropDown", "County Court");
  }

  async setSystemParameter1705AsProphoenixMunicipalCourt(): Promise<void> {
    // sysParameter.changeParameterById("1705", "select", "param_1705_Dyn_DropDown",
    // "0811 - Prophoenix Municipal Court");
  }

  async enterAtParameterID1(): Promise<void> {
    // uIMapSettings.systemParameter.uIParameterIDEdit.click();
    // uIMapSettings.systemParameter.uIParameterIDEdit.clear();
    // uIMapSettings.systemParameter.uIParameterIDEdit.sendKeys(BaseData.getSettingsModuleValue("ParameterID1"));
  }

  async setSystemparameter862AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("862", "select", "param_862_Dyn_DropDown", "True");
  }

  async setSystemparameter862AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("862", "select", "param_862_Dyn_DropDown", "False");
  }

  async setSystemparamete4496AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("4496", "select", "param_4496_Dyn_DropDown", "False");
  }

  async setSystemparamete4496AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("4496", "select", "param_4496_Dyn_DropDown", "True");
  }

  async setSystemparameter4495(ParamValue: string): Promise<void> {
    // sysParameter.changeParameterById("4495", "select", "param_4495_Dyn_DropDown", ParamValue);
  }

  async setAtSystemparameter912(ParamValue: string): Promise<void> {
    // sysParameter.changeParameterById("912", "select", "param_912_Dyn_DropDown", ParamValue);
  }

  async setAtSystemparameter909(ParamValue: string): Promise<void> {
    // sysParameter.changeParameterById("909", "select", "param_909_Dyn_DropDown", ParamValue);
  }

  async setSystemparamete1559(ParamValue: string): Promise<void> {
    // sysParameter.changeParameterById("1559", "select", "param_1559_Dyn_DropDown", ParamValue);
  }

  async setSystemparamete4632(ParamValue: string): Promise<void> {
    // sysParameter.changeParameterById("4632", "select", "param_4632_Dyn_DropDown", ParamValue);
  }

  async setSystemparameter3129AsCSDCMACCertificateSmokeDetector(): Promise<void> {
    // sysParameter.changeParameterById("3129", "select", "param_3129_Dyn_DropDown",
    // "CSDCMAC - Certificate of Smoke Detector, Carbon Monoxide, Alarm Compliance");
  }

  async setSystemparameter2001AsNull(): Promise<void> {
    // sysParameter.changeParameterById("2001", "select", "param_2001_Dyn_DropDown", " -- ");
  }

  async setSystemParameter403AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("403", "select", "param_403_Dyn_DropDown", "True");
  }

  async setSystemParameter403AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("403", "select", "param_403_Dyn_DropDown", "False");
  }

  async setSystemparameter764AsOpen(): Promise<void> {
    // sysParameter.changeParameterById("764", "select", "param_764_Dyn_DropDown", "OPN - Open/Pending (CM)");
  }

  async setSystemparameter738AsOptionalWhenApproved(): Promise<void> {
    // sysParameter.changeParameterById("738", "select", "param_738_Dyn_DropDown", "Optional when approved");
  }

  async selectPrimeInvestigationDivisonAsAdministration(): Promise<void> {
    // uIMapSettings.systemParameter.uIPrimeInvestigationDivisionDropdown.click();
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.systemParameter.uIPrimeInvestigationDivisionDropdown, "Administration");
    // settings.sysParameter.setAtSystemparameter909("Administration");
  }

  async selectPrimeInvestigationDivisonAsOperations(): Promise<void> {
    // uIMapSettings.systemParameter.uIPrimeInvestigationDivisionDropdown.click();
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.systemParameter.uIPrimeInvestigationDivisionDropdown, "Operations");
    // // settings.sysParameter.setAtSystemparameter909("Operations");
  }

  async verifyNoRecordFoundAcknowledgeMessage(): Promise<void> {
    // if (Playback.browserType.equals("Chrome")) {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
    // } else
    // popup.acknowledge.okWithExpectedMessage(" 1011 - No Record Found");
  }

  async selectAtCustomCategory(i: number): Promise<void> {
    // uIMapSettings.systemParameter.uICustomCategoryDropdownArrow.click();
    // Playback.threadWait(3000);
    // Playback.threadWait(3000);
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect(
    // uIMapSettings.systemParameter.uICustomCategoryRadDropDownTray,
    // BaseData.getSettingsModuleValue("CustomCatagory" + i));
    // uIMapSettings.systemParameter.uICustomCategoryDropdownArrow.click();
  }

  async setAtSystemparameter1804(ParamValue: string): Promise<void> {
    // sysParameter.changeParameterById("1804", "input", "param_1804_Dyn", ParamValue);
  }

  async setAtSystemparameter645(ParamValue: string): Promise<void> {
    // sysParameter.changeParameterById("645", "select", "param_645_Dyn_DropDown", ParamValue);
  }

  async clear1804Sysparametervalue(): Promise<void> {
    // uIMapSettings.systemParameter.uIPara1804Edit.clear();
  }

  async setSystemparameter77As2022And2024(): Promise<void> {
    // uIMapSettings.systemParameter.uISelectProductVersion77Arrow.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect(
    // uIMapSettings.systemParameter.uISelectProductVersion77DropDown,
    // BaseData.getPersonnelModuleValue("SelectProductVersion"));
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect(
    // uIMapSettings.systemParameter.uISelectProductVersion77DropDown,
    // BaseData.getPersonnelModuleValue("SelectProductVersion1"));
    // uIMapSettings.systemParameter.uISelectProductVersion77Arrow.click();
  }

  async setSystemparameter209AsBoth(): Promise<void> {
    // sysParameter.changeParameterById("209", "select", "param_209_Dyn_DropDown", "Both");
  }

  async setSystemparameter231AsOnbase(): Promise<void> {
    // sysParameter.changeParameterById("231", "select", "param_231_Dyn_DropDown", "Onbase");
  }

  async setSystemParameter4436AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("4436", "select", "param_4436_Dyn_DropDown", "True");
  }

  async setSystemParameter4708AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("4708", "select", "param_4708_Dyn_DropDown", "True");
  }

  async setSystemparameter3247AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("3247", "select", "param_3247_Dyn_DropDown", "True");
  }

  async setSystemparameter3247AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("3247", "select", "param_3247_Dyn_DropDown", "False");
  }

  async verifyCollapseAllIsDisplayed(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("Collapse All",
    // uIMapSettings.systemParameter.uICollapseAllText.getText());
  }

  async verifyPhoenixAllBOTIsDisplayed(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("Phoenix AI BOT",
    // uIMapSettings.systemParameter.uIPhoenixAIBOTText.getText());
  }

  async verifyCollapseAllNotDisplayed(): Promise<void> {
    // boolean controlExist = objectIdentification.manualIdentify
    // .controlExist(uIMapSettings.systemParameter.uICollapseAllText);
    // verify.ExpectedValueIsFalse(controlExist);
  }

  async verifyPhoenixAIBotNotDisplayed(): Promise<void> {
    // boolean controlExist = objectIdentification.manualIdentify
    // .controlExist(uIMapSettings.systemParameter.uIPhoenixAIBOTText);
    // verify.ExpectedValueIsFalse(controlExist);
  }

  async setSystemparameter629AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("629", "select", "param_629_Dyn_DropDown", "False");
  }

  async setAtSystemParameter203(): Promise<void> {
    // sysParameter.changeParameterById("203", "input", "param_203_Dyn",
    // BaseData.getSettingsModuleValue("203ParamValue"));
  }

  async setAtSystemParameter261(): Promise<void> {
    // sysParameter.changeParameterById("261", "input", "param_261_Dyn",
    // BaseData.getSettingsModuleValue("261ParamValue"));
  }

  async setAtSystemParameter262(): Promise<void> {
    // sysParameter.changeParameterById("262", "input", "param_262_Dyn",
    // BaseData.getSettingsModuleValue("262ParamValue"));
  }

  async setAtSystemParameter263(): Promise<void> {
    // sysParameter.changeParameterById("263", "input", "param_263_Dyn",
    // BaseData.getSettingsModuleValue("263ParamValue"));
  }

  async setSystemParameterAsNull(paramID: string, controlType: string, controlId: string): Promise<void> {
    // WebDriver driver = Playback.driver;
    // if (controlType == "input") {
    // Playback.pageLoadThreadWait();
    // String existValue = readInputValue(paramID);
    // System.out.println(existValue);
    // if (existValue != null) {
    // Playback.threadWait();
    // driver.findElement(By.id(controlId)).clear();
    // uIMapSettings.systemParameter.uISaveButton.click();
    // popup.confirm.yes();
    // Playback.pageLoadThreadWait();
    // if (objectIdentification.windowHandle.windowExist("Acknowledge")) {
    // popup.acknowledge.ok();
    // } else {
    // Playback.pageLoadThreadWait();
    // popup.acknowledge.sysParameterAcknowledgeOk();
    // } else if (controlType == "select") {
    // Playback.pageLoadThreadWait();
    // String existValue = getSelectValue(paramID, controlId);
    // System.out.println(existValue);
    // if (existValue != "--") {
    // Playback.threadWait();
    // new Select(driver.findElement(By.id(controlId))).selectByVisibleText("--");
    // uIMapSettings.systemParameter.uISaveButton.click();
    // popup.confirm.yes();
    // Playback.pageLoadThreadWait();
    // if (objectIdentification.windowHandle.windowExist("Acknowledge")) {
    // popup.acknowledge.ok();
    // } else {
    // Playback.pageLoadThreadWait();
    // popup.acknowledge.sysParameterAcknowledgeOk();
  }

  async setSystemParameter263AsNull(): Promise<void> {
    // sysParameter.setSystemParameterAsNull("263", "input", "param_263_Dyn");
  }

  async setAtSystemParameter40(i: number): Promise<void> {
    // if (PropertiesFile.readPropertiesFile("Version").contains("118")) {
    // sysParameter.changeParameterById("40", "input", "param_40_Dyn",
    // BaseData.getSettingsModuleValue("40ParamValue118" + i));
    // } else {
    // sysParameter.changeParameterById("40", "input", "param_40_Dyn",
    // BaseData.getSettingsModuleValue("40ParamValue" + i));
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapSettings.systemParameter.uIPrintIcon.click();
  }

  async setSystemparameter251AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("251", "select", "param_251_Dyn_DropDown", "False");
  }

  async setSystemparamete4351(ParamValue: string): Promise<void> {
    // sysParameter.changeParameterById("4351", "select", "param_4351_Dyn_DropDown", ParamValue);
  }

  async setSystemparamete4353(ParamValue: string): Promise<void> {
    // sysParameter.changeParameterById("4353", "select", "param_4353_Dyn_DropDown", ParamValue);
  }

  async setSystemparameter3112AsNull(): Promise<void> {
    // sysParameter.changeParameterById("3112", "input", "param_3112_Dyn", " ");
  }

  async setSystemparameter736AsDiv(): Promise<void> {
    // sysParameter.changeParameterById("736", "select", "param_736_Dyn_DropDown", "DIV");
  }

  async setSystemparameter736AsDivSecSquad(): Promise<void> {
    // sysParameter.changeParameterById("736", "select", "param_736_Dyn_DropDown", "DIV+SEC+SQUAD");
  }

  async setSystemparameter4634AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("4634", "select", "param_4634_Dyn_DropDown", "True");
  }

  async setSystemparameter4634AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("4634", "select", "param_4634_Dyn_DropDown", "False");
  }

  async setSystemparameter4497AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("4497", "select", "param_4497_Dyn_DropDown", "False");
  }

  async setSystemparameter4497AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("4497", "select", "param_4497_Dyn_DropDown", "True");
  }

  async enterAtParameter1128(): Promise<void> {
    // uIMapSettings.systemParameter.uIParameterIDEdit.sendKeys(BaseData.getSettingsModuleValue("ParameterID"));
  }

  async clickEntraIDButton(): Promise<void> {
    // uIMapSettings.systemParameter.uIEntraIDButton.click();
  }

  async clickMFASettingsButton(): Promise<void> {
    // uIMapSettings.systemParameter.uIMFASettingsButton.click();
  }

  async verifyBucketName186Label(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.systemParameter.uIBucketNameLabel.isDisplayed());
  }

  async enterAtBucketName186(): Promise<void> {
    // uIMapSettings.systemParameter.uIBucketNameEdit.click();
    // uIMapSettings.systemParameter.uIBucketNameEdit.clear();
    // uIMapSettings.systemParameter.uIBucketNameEdit.sendKeys(BaseData.getSettingsModuleValue("BucketName"));
  }

  async verifyResultBucket187Label(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.systemParameter.uIResultBucketLabel.isDisplayed());
  }

  async enterAtResultBucket187(): Promise<void> {
    // uIMapSettings.systemParameter.uIResultBucketEdit.click();
    // uIMapSettings.systemParameter.uIResultBucketEdit.clear();
    // uIMapSettings.systemParameter.uIResultBucketEdit.sendKeys(BaseData.getSettingsModuleValue("ResultBucket"));
  }

  async verifyAccessKeyID188Label(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.systemParameter.uIAccessKeyIDLabel.isDisplayed());
  }

  async enterAtAccessKeyID188(): Promise<void> {
    // uIMapSettings.systemParameter.uIAccessKeyIDEdit.click();
    // uIMapSettings.systemParameter.uIAccessKeyIDEdit.clear();
    // uIMapSettings.systemParameter.uIAccessKeyIDEdit.sendKeys(BaseData.getSettingsModuleValue("AccessKeyID"));
  }

  async verifySecretAccessKey189Label(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.systemParameter.uISecretAccessKeyLabel.isDisplayed());
  }

  async enterAtSecretAccessKey189(): Promise<void> {
    // uIMapSettings.systemParameter.uISecretAccessKeyEdit.click();
    // uIMapSettings.systemParameter.uISecretAccessKeyEdit.clear();
    // uIMapSettings.systemParameter.uISecretAccessKeyEdit
    // .sendKeys(BaseData.getSettingsModuleValue("SecretAccessKey"));
  }

  async setSystemparameter219AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("219", "select", "param_219_Dyn_DropDown", "True");
  }

  async verifyAPIUrl190Label(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.systemParameter.uIAPIUrlLabel.isDisplayed());
  }

  async setSystemparameter89AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("89", "select", "param_89_Dyn_DropDown", "True");
  }

  async setSystemparameter89AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("89", "select", "param_89_Dyn_DropDown", "False");
  }

  async enterAtAPIUrl190(): Promise<void> {
    // uIMapSettings.systemParameter.uIAPIUrlEdit.click();
    // uIMapSettings.systemParameter.uIAPIUrlEdit.clear();
    // uIMapSettings.systemParameter.uIAPIUrlEdit.sendKeys(BaseData.getSettingsModuleValue("APIUrl"));
  }

  async verifyAtBucketName186(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("BucketName"),
    // uIMapSettings.systemParameter.uIBucketNameEdit.getAttribute("value"));
  }

  async verifyAtResultBucket187(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ResultBucket"),
    // uIMapSettings.systemParameter.uIResultBucketEdit.getAttribute("value"));
  }

  async verifyAtAccessKeyID188(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("AccessKeyID"),
    // uIMapSettings.systemParameter.uIAccessKeyIDEdit.getAttribute("value"));
  }

  async verifyAtSecretAccessKey189(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("SecretAccessKey"),
    // uIMapSettings.systemParameter.uISecretAccessKeyEdit.getAttribute("value"));
  }

  async verifyAtAPIUrl190(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("APIUrl"),
    // uIMapSettings.systemParameter.uIAPIUrlEdit.getAttribute("value"));
  }

  async setSystemparameter713AsYes(): Promise<void> {
    // sysParameter.changeParameterById("713", "select", "param_713_Dyn_DropDown", "Yes");
  }

  async setSystemparameter713AsNo(): Promise<void> {
    // sysParameter.changeParameterById("713", "select", "param_713_Dyn_DropDown", "No");
  }

  async verifyAtSMTPServerPassword205(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("SMTPServerPassword"),
    // uIMapSettings.systemParameter.uISMTPServerPasswordEdit.getAttribute("value"));
  }

  async clickSMTPServerPasswordLabel(): Promise<void> {
    // uIMapSettings.systemParameter.uISMTPServerPasswordLabel.click();
  }

  async verifySMTPServerPasswordHidden(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapSettings.systemParameter.uISMTPServerPasswordEdit.getAttribute("type").contains("password"));
  }

  async verifyAtAIMugMatchAPIURL199(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("AIMugMatchAPIURL"),
    // uIMapSettings.systemParameter.uIAIMugMatchApiUrlEdit.getAttribute("Value"));
  }

  async clickParameterNameButton(): Promise<void> {
    // uIMapSettings.systemParameter.uIParameterNameButton.click();
  }

  async setSystemparamete4320(ParamValue: string): Promise<void> {
    // sysParameter.changeParameterById("4320", "select", "param_4320_Dyn_DropDown", ParamValue);
  }

  async setSystemparamete4321(ParamValue: string): Promise<void> {
    // sysParameter.changeParameterById("4321", "select", "param_4321_Dyn_DropDown", ParamValue);
  }

  async setSystemparamete4326(ParamValue: string): Promise<void> {
    // sysParameter.changeParameterById("4326", "input", "param_4326_Dyn", ParamValue);
  }

  async setSystemParameter858AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("858", "select", "param_858_Dyn_DropDown", "True");
  }

  async setSystemParameter858AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("858", "select", "param_858_Dyn_DropDown", "False");
  }

  async setSystemParameter830AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("830", "select", "param_830_Dyn_DropDown", "True");
  }

  async setSystemParameter830AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("830", "select", "param_830_Dyn_DropDown", "False");
  }

  async setSystemParameter1126AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1126", "select", "param_1126_Dyn_DropDown", "True");
  }

  async setSystemParameter1126AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("1126", "select", "param_1126_Dyn_DropDown", "False");
  }

  async setSystemparameter20AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("20", "select", "param_20_Dyn_DropDown", "True");
  }

  async setSystemparameter1212AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1212", "select", "param_1212_Dyn_DropDown", "True");
  }

  async setSystemparameter1212AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("1212", "select", "param_1212_Dyn_DropDown", "False");
  }

  async setSystemParameter863AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("863", "select", "param_863_Dyn_DropDown", "False");
  }

  async setSystemParameter863AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("863", "select", "param_863_Dyn_DropDown", "True");
  }

  async setSystemparameter7746AsBlank(): Promise<void> {
    // sysParameter.changeParameterById("7746", "select", "param_7746_Dyn_DropDown", "--");
  }

  async get605ParameterValue(): Promise<string> {
    // String inputValue = sysParameter.readInputValue("605");
    // System.out.println(inputValue);
    // return inputValue;
  }

  async setAtSystemParameter4405(i: number): Promise<void> {
    // sysParameter.changeParameterById("4405", "input", "param_4405_Dyn",
    // BaseData.getSettingsModuleValue("4405ParamValue" + i));
  }

  async setSystemParameter4417(paramValue: string): Promise<void> {
    // sysParameter.changeParameterById("4417", "input", "param_4417_Dyn", paramValue.toString());
  }

  async changeStringToIntValue(inputValue3: string): Promise<number> {
    // return Integer.parseInt(inputValue3);
  }

  async setSystemParameter4451AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("4451", "select", "param_4451_Dyn_DropDown", "True");
  }

  async setSystemParameter4451AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("4451", "select", "param_4451_Dyn_DropDown", "False");
  }

  async setSystemParameter4498AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("4498", "select", "param_4498_Dyn_DropDown", "False");
  }

  async setSystemParameter98AsNull(): Promise<void> {
    // sysParameter.changeParameterById("98", "select", "param_98_Dyn_DropDown", "  --  ");
  }

  async setAtSystemparameter98(ParamValue: string): Promise<void> {
    // sysParameter.changeParameterById("98","select", "param_98_Dyn_DropDown",ParamValue);
  }

  async setSystemParameter266AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("266", "select", "param_266_Dyn_DropDown", "False");
  }

  async enterAtSystemParameter4499(i: number): Promise<void> {
    // sysParameter.changeParameterById("4499", "input", "param_4499_Dyn",
    // BaseData.getSettingsModuleValue("4499ParamValue" + i));
  }

  async setSystemParameter4410asTrue(): Promise<void> {
    // sysParameter.changeParameterById("4410", "select", "param_4410_Dyn_DropDown", "True");
  }

  async setSystemParameter4410asFalse(): Promise<void> {
    // sysParameter.changeParameterById("4410", "select", "param_4410_Dyn_DropDown", "False");
  }

  async setSystemParameter4471AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("4471", "select", "param_4471_Dyn_DropDown", "False");
  }

  async setSystemParameter4471AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("4471", "select", "param_4471_Dyn_DropDown", "True");
  }

  async setSystemParameter4468AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("4468", "select", "param_4468_Dyn_DropDown", "True");
  }

  async setSystemParameter4468AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("4468", "select", "param_4468_Dyn_DropDown", "False");
  }

  async setSystemParameter4481AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("4481", "select", "param_4481_Dyn_DropDown", "True");
  }

  async setSystemParameter4481AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("4481", "select", "param_4481_Dyn_DropDown", "False");
  }

  async setSystemParameter4474AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("4474", "select", "param_4474_Dyn_DropDown", "True");
  }

  async setSystemParameter4474AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("4474", "select", "param_4474_Dyn_DropDown", "False");
  }

  async setAtSystemparameter4337(ParamValue: string): Promise<void> {
    // sysParameter.changeParameterById("4337", "input", "param_4337_Dyn", ParamValue);
  }

  async verifySysparameter4337NotAsZero(): Promise<void> {
    // uIMapSettings.systemParameter.uIPasswordNotToBeIdenticalEdit.getText();
    // verify.ExpectedValueIsTrue(uIMapSettings.systemParameter.uIPasswordNotToBeIdenticalEdit.getText() != "0");
  }

  async setSystemparameter41AsNull(): Promise<void> {
    // sysParameter.changeParameterById("41", "input", "param_41_Dyn", "  ");
  }

  async setSystemparameter65AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("65", "select", "param_65_Dyn_DropDown", "True");
  }

  async setSystemparameter1206AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1206", "select", "param_1206_Dyn_DropDown", "True");
  }

  async setSystemparameter1206AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("1206", "select", "param_1206_Dyn_DropDown", "False");
  }

  async setSystemparameter410AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("410", "select", "param_410_Dyn_DropDown", "False");
  }

  async setSystemParameter4708AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("4708", "select", "param_4708_Dyn_DropDown", "False");
  }

  async setSystemParameter4407AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("4407", "select", "param_4407_Dyn_DropDown", "True");
  }

  async setSystemParameter4407AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("4407", "select", "param_4407_Dyn_DropDown", "False");
  }

  async enterAtSystemParameter426(): Promise<void> {
    // sysParameter.changeParameterById("426", "input", "param_426_Dyn",
    // BaseData.getSettingsModuleValue("NotificationEmail"));
  }

  async setSystemparameter254AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("254", "select", "param_254_Dyn_DropDown", "False");
  }

  async setSystemparameter254AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("254", "select", "param_254_Dyn_DropDown", "True");
  }

  async setSystemparameter20AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("20", "select", "param_20_Dyn_DropDown", "Flase");
  }

  async setAtSystemparameter102(ParamValue: string): Promise<void> {
    // sysParameter.changeParameterById("102", "select", "param_102_Dyn_DropDown", ParamValue);
  }

  async setSystemParameter64(ParamValue: string): Promise<void> {
    // sysParameter.changeParameterById("64", "select", "param_64_Dyn_DropDown", ParamValue);
  }

  async setAtSystemparameter4340(ParamValue: string): Promise<void> {
    // sysParameter.changeParameterById("4340","select", "param_4340_Dyn_DropDown",ParamValue);
  }

  async setSystemParameter715AsNo(): Promise<void> {
    // sysParameter.changeParameterById("715", "select", "param_715_Dyn_DropDown", "No");
  }

  async setSystemParameter715AsYes(): Promise<void> {
    // sysParameter.changeParameterById("715", "select", "param_715_Dyn_DropDown", "Yes");
  }

  async setSystemParameter715AsMandatory(): Promise<void> {
    // sysParameter.changeParameterById("715", "select", "param_715_Dyn_DropDown", "Mandatory");
  }

  async verifySytemParameter309SelectedValueAsTrue(): Promise<void> {
    // sysParameter.verifySytemParameterSelectedValue("309", "True");
  }

  async setSystemparameter309AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("309", "select", "param_309_Dyn_DropDown", "False");
  }

  async verifySytemParameter1120SelectedValueAsTrue(): Promise<void> {
    // sysParameter.verifySytemParameterSelectedValue("1120", "True");
  }

  async setSystemparameter1120AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("1120", "select", "param_1120_Dyn_DropDown", "False");
  }

  async setSystemParameter780AsMandatory(): Promise<void> {
    // sysParameter.changeParameterById("780", "select", "param_780_Dyn_DropDown", "Mandatory");
  }

  async setSystemParameter780AsYes(): Promise<void> {
    // sysParameter.changeParameterById("780", "select", "param_780_Dyn_DropDown", "Yes");
  }

  async setSystemParameter780AsNo(): Promise<void> {
    // sysParameter.changeParameterById("780", "select", "param_780_Dyn_DropDown", "No");
  }

  async setAtSystemparameter6704AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("6704", "select", "param_6704_Dyn_DropDown","False");
  }

  async setAtSystemparameter6704AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("6704", "select", "param_6704_Dyn_DropDown","True");
  }

  async selectAtSystemCategory(): Promise<void> {
    // uIMapSettings.systemParameter.uISystemCategoryDropdownArrow.click();
    // Playback.threadWait(3000);
    // Playback.threadWait(3000);
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect(
    // uIMapSettings.systemParameter.uICustomSystemCategoryDropDownTray, BaseData.getSettingsModuleValue("SystemCategory"));
    // uIMapSettings.systemParameter.uISystemCategoryDropdownArrow.click();
  }

  async clickResetIcon(): Promise<void> {
    // uIMapSettings.systemParameter.uIResetIcon.click();
  }

  async verifyAtModule(i: number): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapSettings.systemParameter.uIModuleDropDown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Module"+i), dropDownSelectedItem);
  }

  async verifyAtParameterID(): Promise<void> {
    // String ParameterID = uIMapSettings.systemParameter.uIParameterIDEdit.getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ParameterID"), ParameterID);
  }

  async verifyAtParameterName(): Promise<void> {
    // String ParameterName = uIMapSettings.systemParameter.uIParameterNameEdit.getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ParameterName"), ParameterName);
  }

  async verifyAtCustomCategory(i: number): Promise<void> {
    // String attribute = uIMapSettings.systemParameter.uICustomCategoryRadDropDownField.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("CustomCatagory"+i),attribute);
  }

  async verifyAtSystemCategory(i: number): Promise<void> {
    // String CustomCategory = uIMapSettings.systemParameter.uISystemCategoryRadDropdown.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("SystemCategory"+i), CustomCategory);
  }

  async setAtSystemParameter4349(i: number): Promise<void> {
    // sysParameter.changeParameterById("4349", "input", "param_4349_Dyn", BaseData.getSettingsModuleValue("MaximumNegativeLeaveHoursAllowed"+i));
  }

  async verifyAtMaximumNegativeLeaveHoursAllowed(i: number): Promise<void> {
    // String text = uIMapSettings.systemParameter.uIMaximumNegativeLeaveHoursAllowed.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("MaximumNegativeLeaveHoursAllowed"+i), text);
  }

  async verifyParameterIDIsEmpty(): Promise<void> {
    // boolean empty = uIMapSettings.systemParameter.uIParameterIDEdit.getText().isEmpty();
    // verify.ExpectedValueIsTrue(empty);
  }

  async verifyParameterNameIsEmpty(): Promise<void> {
    // boolean empty = uIMapSettings.systemParameter.uIParameterNameEdit.getText().isEmpty();
    // verify.ExpectedValueIsTrue(empty);
  }

  async setSystemParameter1611AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1611", "select", "param_1611_Dyn_DropDown", "True");
  }

  async setSystemparameter6700AsInprogress(): Promise<void> {
    // sysParameter.changeParameterById("6700", "select", "param_6700_Dyn_DropDown", "In-Progress");
  }

  async setSystemparameter6700AsReopened(): Promise<void> {
    // sysParameter.changeParameterById("6700", "select", "param_6700_Dyn_DropDown", "Reopened");
  }

  async verifyAtHelpDeskEmailAllowedList6702(i: number): Promise<void> {
    // List<String> dropDownValues = objectIdentification.manualIdentify.getDropDownValues(uIMapSettings.systemParameter.uIHelpDeskCreatorEmailAllowedListDropdown);
    // verify.ExpectedValueIsTrue(dropDownValues.contains(BaseData.getHelpdeskModuleValue("HelpDeskEmailAllowedList" + i)));
  }

  async verifyAtEmailAddressForReferToFirePreventionBureauLabel(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapSettings.systemParameter.uIEmailAddressLabel.getText(),
    // BaseData.getSettingsModuleValue("EmailAddressLabel"));
  }

  async enterAtParameter3254(): Promise<void> {
    // sysParameter.changeParameterById("3254", "input", "param_3254_Dyn",
    // BaseData.getSettingsModuleValue("EmailAddress"));
  }

  async setSystemparameter219AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("219", "select", "param_219_Dyn_DropDown", "False");
  }

  async setSystemParameter1001AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("1001", "select", "param_1001_Dyn_DropDown", "False");
  }

  async setSystemParameter1001AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1001", "select", "param_1001_Dyn_DropDown", "True");
  }

  async verifyAtEmailAddress(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapSettings.systemParameter.uIEmailAddressEdit.getAttribute("value"),
    // BaseData.getSettingsModuleValue("EmailAddress"));
  }

  async setSystemparameter1210AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1210", "select", "param_1210_Dyn_DropDown", "True");
  }

  async setSystemparameter1210AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("1210", "select", "param_1210_Dyn_DropDown", "False");
  }

  async verifyUserLoginOption4340IsEnable(): Promise<void> {
    // boolean enabled = uIMapSettings.systemParameter.uIUserLoginOptionDropDown.isEnabled();
    // verify.ExpectedValueIsTrue(enabled);
  }

  async enterSystemParameter1825AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1825", "select", "param_1825_Dyn_DropDown", "True");
  }

  async enterSystemParameter1827AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("1827", "select", "param_1827_Dyn_DropDown", "False");
  }

  async enterSystemParameter1827AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1827", "select", "param_1827_Dyn_DropDown", "True");
  }

  async enterSystemParameter1825AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("1825", "select", "param_1825_Dyn_DropDown", "False");
  }

  async verifyAtUserLoginOption4340(): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem
    // (uIMapSettings.systemParameter.uIUserLoginOptionDropDown);
    // System.out.println(dropDownSelectedItem);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("UserLoginOption"),dropDownSelectedItem);
  }

  async setSystemparamete4357(ParamValue: string): Promise<void> {
    // sysParameter.changeParameterById("4357", "select", "param_4357_Dyn_DropDown", ParamValue);
  }

  async setSystemParameter4709AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("4709", "select", "param_4709_Dyn_DropDown", "True");
  }

  async setSystemParameter4709AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("4709", "select", "param_4709_Dyn_DropDown", "False");
  }

  async setSystemParameter4707AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("4707", "select", "param_4707_Dyn_DropDown", "False");
  }

  async setSystemParameter4707AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("4707", "select", "param_4707_Dyn_DropDown", "True");
  }

  async enterAtNextWarrantToBeAssigned(jsonIndex: number): Promise<void> {
    // uIMapSettings.systemParameter.uINextWarrantToBeAssignedEdit.sendKeys(BaseData.getSettingsModuleValue("NextWarrantNo"+jsonIndex));
  }

  async clearNextWarrantToBeAssigned(): Promise<void> {
    // uIMapSettings.systemParameter.uINextWarrantToBeAssignedEdit.clear();
  }

  async clearParameterID(): Promise<void> {
    // uIMapSettings.systemParameter.uIParameterIDEdit.clear();
  }

  async setSystemparamete1004AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1004", "select", "param_1004_Dyn_DropDown", "True");
  }

  async setSystemparamete1004AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("1004", "select", "param_1004_Dyn_DropDown", "False");
  }

  async setSystemparamete1009AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("1009", "select", "param_1009_Dyn_DropDown", "True");
  }

  async setSystemparamete1009AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("1009", "select", "param_1009_Dyn_DropDown", "False");
  }

  async enterAtComplaint(jsonIndex: number): Promise<void> {
    // uIMapSettings.systemParameter.uI1012Edit.sendKeys(BaseData.getSettingsModuleValue("Complainant"+jsonIndex));
  }

  async clearComplaint(): Promise<void> {
    // uIMapSettings.systemParameter.uI1012Edit.clear();
  }

  async clearHeldBy(): Promise<void> {
    // uIMapSettings.systemParameter.uI1007Edit.clear();
  }

  async enterAtHeldBy(jsonIndex: number): Promise<void> {
    // uIMapSettings.systemParameter.uI1007Edit.sendKeys(BaseData.getSettingsModuleValue("HeldBy"+jsonIndex));
  }

  async setSystemparameter1017AsAnticipatoryBail(): Promise<void> {
    // sysParameter.changeParameterById("1017", "select", "param_1017_Dyn_DropDown", "A - Anticipatory Bail");
  }

  async setSystemparameter1017AsContempt(): Promise<void> {
    // sysParameter.changeParameterById("1017", "select", "param_1017_Dyn_DropDown", "B - Contempt");
  }

  async setSystemparameter1017AsBailCancelled(): Promise<void> {
    // sysParameter.changeParameterById("1017", "select", "param_1017_Dyn_DropDown", "C - Bail Cancelled");
  }

  async setSystemparameter1005AsAK193256(): Promise<void> {
    // sysParameter.changeParameterById("1005", "select", "param_1005_Dyn_DropDown", "AK 193256 -");
  }

  async setSystemparameter1006AsAK193256(): Promise<void> {
    // sysParameter.changeParameterById("1006", "select", "param_1006_Dyn_DropDown", "AK 193256 -");
  }

  async enterAtCameraWebURL(): Promise<void> {
    // uIMapSettings.systemParameter.uICameraWebUrlEdit.clear();
    // uIMapSettings.systemParameter.uICameraWebUrlEdit.sendKeys(BaseData.getSettingsModuleValue("CameraWebURL"));
  }

  async setAtSystemparameter4503AsFalse(): Promise<void> {
    // sysParameter.changeParameterById("4503", "select", "param_4503_Dyn_DropDown", "False");
  }

  async setAtSystemparameter4503AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("4503", "select", "param_4503_Dyn_DropDown", "True");
  }

  async setAtSystemParameter1611(): Promise<void> {
    // sysParameter.changeParameterById("4503", "select", "param_4503_Dyn_DropDown",BaseData.getSettingsModuleValue("ServicedByAgency"));
  }

  async setSystemparameter3410AsTrue(): Promise<void> {
    // sysParameter.changeParameterById("3410", "select", "param_3410_Dyn_DropDown", "True");
  }

  async verifyDefaultClosedStatusTootTip(): Promise<void> {
    // String Actual = uIMapSettings.systemParameter.uIDefaultTicketEntryClosedStatus6700Label.getAttribute("title");
    // verify.ExpectedValueIsTrue(Actual.contains("Set the default status for a closed Ticket Entry record"), "Set the default status for a closed Ticket Entry record Not Appears");
  }

  async verifyDefaultReopenedStatusTootTip(): Promise<void> {
    // String Actual = uIMapSettings.systemParameter.uIDefaultTicketEntryReopenedStatus6701Label.getAttribute("title");
    // System.out.println(Actual);
    // verify.ExpectedValueIsTrue(Actual.contains("Set the default status for a reopened Ticket Entry record"), "Set the default status for a reopened Ticket Entry record");
  }

  async setAtSystemParameter4488(i: number): Promise<void> {
    // sysParameter.changeParameterById("4488", "select", "param_4488_Dyn_DropDown",
    // BaseData.getSettingsModuleValue("ReplaceCharge" + i));
  }

  async setSystemparameter717AsMandatory(): Promise<void> {
    // sysParameter.changeParameterById("717", "select", "param_717_Dyn_DropDown", "Mandatory");
  }

  async setSystemparameter717AsYes(): Promise<void> {
    // sysParameter.changeParameterById("717", "select", "param_717_Dyn_DropDown", "Yes");
  }

  async setSystemparameter717AsNo(): Promise<void> {
    // sysParameter.changeParameterById("717", "select", "param_717_Dyn_DropDown", "No");
  }

  async setSystemparameter738AsNever(): Promise<void> {
    // sysParameter.changeParameterById("738", "select", "param_738_Dyn_DropDown", "Never");
  }

  async setSystemparameter719AsYes(): Promise<void> {
    // sysParameter.changeParameterById("719", "select", "param_719_Dyn_DropDown", "Yes");
  }

  async setSystemparameter719AsNo(): Promise<void> {
    // sysParameter.changeParameterById("719", "select", "param_719_Dyn_DropDown", "No");
  }

  async setSystemparameter719AsMandatory(): Promise<void> {
    // sysParameter.changeParameterById("719", "select", "param_719_Dyn_DropDown", "Mandatory");
  }

  async setSystemparamete721AsYes(): Promise<void> {
    // sysParameter.changeParameterById("721", "select", "param_721_Dyn_DropDown", "Yes");
  }

}

export class ORITerminalEntryPage {
  readonly page: Page;
  readonly oRIEdit: Locator;
  readonly receiveUnsolicitedMessageCheckbox: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;
  readonly statusBar: Locator;
  readonly oRITerminalEntryTable: Locator;
  readonly departmentNameEdit: Locator;
  readonly printButton: Locator;
  readonly resetButton: Locator;
  readonly rcvUnsolHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.oRIEdit = page.locator('#txtORI');
    this.receiveUnsolicitedMessageCheckbox = page.locator('#chkUnsolicitedMsg');
    this.addButton = page.locator('#cmdAdd');
    this.saveButton = page.locator('#cmdSave');
    this.statusBar = page.locator("//td[@class=\'statusBar\']");
    this.oRITerminalEntryTable = page.locator('#grdAddMoreORI');
    this.departmentNameEdit = page.locator('#txtDept');
    this.printButton = page.locator('#cmdPrint');
    this.resetButton = page.locator('#cmdRefresh');
    this.rcvUnsolHeader = page.locator("//th[text()=\'RcvUnSol\']");
  }

  async enterAtORINo(JSONkeyIndex: number): Promise<void> {
    // uIMapSettings.oRITerminalEntry.uIORIEdit.sendKeys(BaseData.getSettingsModuleValue("ORI" + JSONkeyIndex));
  }

  async enterAtORINo(): Promise<void> {
    // uIMapSettings.oRITerminalEntry.uIORIEdit.sendKeys(BaseData.getSettingsModuleValue("ORI"));
  }

  async verifyReceiveUnsolicitedMessageCheckBoxIsEnabledAndDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapSettings.oRITerminalEntry.uIReceiveUnsolicitedMessageCheckbox.isDisplayed());
    // verify.ExpectedValueIsTrue(uIMapSettings.oRITerminalEntry.uIReceiveUnsolicitedMessageCheckbox.isEnabled());
  }

  async clickReceiveUnsolicitedMessageCheckbox(): Promise<void> {
    // uIMapSettings.oRITerminalEntry.uIReceiveUnsolicitedMessageCheckbox.click();
  }

  async clickAdd(): Promise<void> {
    // uIMapSettings.oRITerminalEntry.uIAddButton.click();
  }

  async clickSave(): Promise<void> {
    // uIMapSettings.oRITerminalEntry.uISaveButton.click();
  }

  async verifyUpdateSuccessfulBottomMessage(): Promise<void> {
    // String BottomMessage = uIMapSettings.oRITerminalEntry.uIStatusBar.getText();
    // verify.ExpectedPropertyValueIsEqual(BottomMessage, "1003 - Update Successful");
  }

  async verifyAtORIInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.oRITerminalEntry.uIORITerminalEntryTable,
    // BaseData.getSettingsModuleValue("ORI"), "ORI#")
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ORI"), text);
  }

  async verifyAtORI0InGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.oRITerminalEntry.uIORITerminalEntryTable,
    // BaseData.getSettingsModuleValue("ORI0"), "ORI#")
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ORI0"), text);
  }

  async verifyRcvUnSolCheckboxCheckedInTheGrid(): Promise<void> {
    // WebElement RcvUnSolCheckbox = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.oRITerminalEntry.uIORITerminalEntryTable,
    // BaseData.getSettingsModuleValue("ORI"), "RcvUnSol")
    // .findElement(By.tagName("img"));
    // verify.ExpectedValueIsTrue(RcvUnSolCheckbox.getAttribute("alt").contains("Checked"));
  }

  async selectAtORIFromTheGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.oRITerminalEntry.uIORITerminalEntryTable, BaseData.getSettingsModuleValue("ORI"));
  }

  async enterAtDepartmentName(): Promise<void> {
    // uIMapSettings.oRITerminalEntry.uIDepartmentNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("DepartmentName"));
  }

  async clickUpdate(): Promise<void> {
    // uIMapSettings.oRITerminalEntry.uIAddButton.click();
  }

  async verifyAtDeptNameInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.oRITerminalEntry.uIORITerminalEntryTable,
    // BaseData.getSettingsModuleValue("DepartmentName"), "Dept Name")
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("DepartmentName"), text);
  }

  async clickPrint(): Promise<void> {
    // uIMapSettings.oRITerminalEntry.uIPrintButton.click();
  }

  async verifyAtHeaderRcvUnSolColumnName(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridHeaderColumnName(uIMapSettings.oRITerminalEntry.uIORITerminalEntryTable, "RcvUnSol")
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Header"), text);
  }

  async clickReset(): Promise<void> {
    // uIMapSettings.oRITerminalEntry.uIResetButton.click();
  }

  async verifyORIIsBlank(): Promise<void> {
    // String text = uIMapSettings.oRITerminalEntry.uIORIEdit.getText();
    // verify.ExpectedValueIsTrue(text.isBlank());
  }

  async verifyDepartmentNameIsBlank(): Promise<void> {
    // String text = uIMapSettings.oRITerminalEntry.uIDepartmentNameEdit.getText();
    // verify.ExpectedValueIsTrue(text.isBlank());
  }

  async verifyRcvUnSolCheckboxIsUnChecked(): Promise<void> {
    // verify.ExpectedValueIsNotTrue(
    // uIMapSettings.oRITerminalEntry.uIReceiveUnsolicitedMessageCheckbox.isSelected());
  }

  async clickRcvUnsolHeader(): Promise<void> {
    // uIMapSettings.oRITerminalEntry.uIRcvUnsolHeader.click();
  }

  async verifySortOrderIsWorking(Ori: string[]): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedAscending(
    // uIMapSettings.oRITerminalEntry.uIORITerminalEntryTable, "ORI#", Ori);
  }

  async getORIColumnValues(): Promise<string[]> {
    // List<String> oriColumn = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.oRITerminalEntry.uIORITerminalEntryTable, "ORI#");
    // return oriColumn;
  }

  async save(): Promise<void> {
    // uIMapSettings.oRITerminalEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

}

export class CFSCodePage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly cFSCodeEdit: Locator;
  readonly typeComboBox: Locator;
  readonly searchButton: Locator;
  readonly cFSCodeResultTable: Locator;
  readonly cFSCodeEditFire: Locator;
  readonly cFSCodeResultTableFire: Locator;
  readonly callForServiceEditFire: Locator;
  readonly descriptionEditFire: Locator;
  readonly alarmLevelDropDownFire: Locator;
  readonly subLevelDropDownFire: Locator;
  readonly nFIRSIncidentTypeFire: Locator;
  readonly dispatchPriorityEditFire: Locator;
  readonly includeInactiveCheckbox: Locator;
  readonly availableForCADtoCADCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.cFSCodeEdit = page.locator('#txtCFScode');
    this.typeComboBox = page.locator('#cddCFSType_DropDown');
    this.searchButton = page.locator('#cmdSearch');
    this.cFSCodeResultTable = page.locator('#grdCFSCode');
    this.cFSCodeEditFire = page.locator('#txtCFSCode');
    this.cFSCodeResultTableFire = page.locator('#grdFCFS');
    this.callForServiceEditFire = page.locator('#txtCFSCode');
    this.descriptionEditFire = page.locator('#txtDescription');
    this.alarmLevelDropDownFire = page.locator('#cddAlarm_DropDown');
    this.subLevelDropDownFire = page.locator('#cddSubAlarm_DropDown');
    this.nFIRSIncidentTypeFire = page.locator('#lupIncType_CodeValue');
    this.dispatchPriorityEditFire = page.locator('#txtDPPri');
    this.includeInactiveCheckbox = page.locator('#chkIsActive');
    this.availableForCADtoCADCheckbox = page.locator('#chkPnxCAD2CAD');
  }

  async clickAddNewButton(): Promise<void> {
    // uIMapSettings.cFSCode.uIAddNewButton.click();
    // Playback.pageLoadThreadWait();
  }

  async enterAtCFSCode(): Promise<void> {
    // uIMapSettings.cFSCode.uICFSCodeEdit.sendKeys(BaseData.getSettingsModuleValue("CFSCode"));
  }

  async clickSearch(): Promise<void> {
    // uIMapSettings.cFSCode.uISearchButton.click();
    // Playback.gridLoadThreadWait();
  }

  async VerifyTypeUsingCFSCode(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Type"),
    // objectIdentification.manualIdentify.getGridCell(uIMapSettings.cFSCode.uICFSCodeResultTable,
    // BaseData.getSettingsModuleValue("CFSCode"), "Type").getText());
  }

  async clickAtCFSCodeInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapSettings.cFSCode.uICFSCodeResultTable,
    // BaseData.getSettingsModuleValue("CFSCode"));
    // Playback.pageLoadThreadWait();
  }

  async selectAtType(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.cFSCode.uITypeComboBox,
    // BaseData.getSettingsModuleValue("Type"));
  }

  async enterAtCFSCodeForFire(): Promise<void> {
    // uIMapSettings.cFSCode.uICFSCodeEditFire.sendKeys(BaseData.getSettingsModuleValue("CFSCode"));
  }

  async clickAtCFSCodeInGridForFire(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.cFSCode.uICFSCodeResultTableFire, BaseData.getSettingsModuleValue("CFSCode"));
    // Playback.pageLoadThreadWait();
  }

  async verifyAtCFSCodeInGrid(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.cFSCode.uICFSCodeResultTable, BaseData.getSettingsModuleValue("CFSCode"));
    // verify.ExpectedValueIsTrue(
    // gridRowByCellInnerText.getText().contains(BaseData.getSettingsModuleValue("CFSCode")));
  }

  async verifyAtTypeInGrid(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.cFSCode.uICFSCodeResultTable, BaseData.getSettingsModuleValue("Type"));
    // verify.ExpectedValueIsTrue(
    // gridRowByCellInnerText.getText().contains(BaseData.getSettingsModuleValue("Type")));
  }

  async clickRandomRowInGrid(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow(uIMapSettings.cFSCode.uICFSCodeResultTableFire);
  }

  async selectAtCFSCodeInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapSettings.cFSCode.uICFSCodeResultTable,
    // BaseData.getSettingsModuleValue("CFSCode"));
  }

  async enterAtCallForService(): Promise<void> {
    // uIMapSettings.cFSCode.uICallForServiceEditFire.sendKeys(BaseData.getSettingsModuleValue("CFSCode"));
  }

  async enterAtCallForService(i: number): Promise<void> {
    // uIMapSettings.cFSCode.uICFSCodeEdit.sendKeys(BaseData.getSettingsModuleValue("CFSCode"+i));
  }

  async verifyAtCallForServiceInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapSettings.cFSCode.uICFSCodeResultTableFire,
    // BaseData.getSettingsModuleValue("CFSCode"))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("CFSCode")));
  }

  async reloadScreen(): Promise<void> {
    // objectIdentification.manualIdentify.reloadScreen("CFS Code");
  }

  async enterAtDescription(): Promise<void> {
    // uIMapSettings.cFSCode.uIDescriptionEditFire.sendKeys(BaseData.getSettingsModuleValue("Description"));
  }

  async verifyAtDescriptionInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapSettings.cFSCode.uICFSCodeResultTableFire,
    // BaseData.getSettingsModuleValue("Description"))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("Description")));
  }

  async selectAtAlarmLevelSubLevel(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.cFSCode.uIAlarmLevelDropDownFire,
    // BaseData.getSettingsModuleValue("AlarmLevel"));
    // uIMapSettings.cFSCode.uIAlarmLevelDropDownFire.sendKeys(Keys.TAB);
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.cFSCode.uISubLevelDropDownFire,
    // BaseData.getSettingsModuleValue("SubLevel"));
  }

  async verifyAtAlarmLevelSubLevel(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapSettings.cFSCode.uICFSCodeResultTableFire,
    // BaseData.getSettingsModuleValue("ALSubAL"))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("ALSubAL")));
  }

  async enterAtNFIRSIncidentType(): Promise<void> {
    // uIMapSettings.cFSCode.uINFIRSIncidentTypeFire
    // .sendKeys(BaseData.getSettingsModuleValue("NFIRSIncidentType"));
    // uIMapSettings.cFSCode.uINFIRSIncidentTypeFire.sendKeys(Keys.TAB);
  }

  async verifyAtNFIRSIncidentTypeInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapSettings.cFSCode.uICFSCodeResultTableFire,
    // BaseData.getSettingsModuleValue("NFIRSIncType"))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("NFIRSIncType")));
  }

  async enterAtDispatchPriority(): Promise<void> {
    // uIMapSettings.cFSCode.uIDispatchPriorityEditFire.sendKeys(BaseData.getSettingsModuleValue("Priority"));
    // uIMapSettings.cFSCode.uIDispatchPriorityEditFire.sendKeys(Keys.TAB);
  }

  async verifyAtPriorityInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapSettings.cFSCode.uICFSCodeResultTableFire,
    // BaseData.getSettingsModuleValue("Priority"))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("Priority")));
  }

  async clickIncludeInactiveCheckbox(): Promise<void> {
    // uIMapSettings.cFSCode.uIIncludeInactiveCheckbox.click();
  }

  async verifyAtInactiveRowIngrid(): Promise<void> {
    // String cssValue = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapSettings.cFSCode.uICFSCodeResultTableFire,
    // BaseData.getSettingsModuleValue("Description1"))
    // .getCssValue("color");
    // System.out.println(cssValue + "-----------cssValue");
    // verify.ExpectedPropertyValueIsEqual("rgba(128, 128, 128, 1)", cssValue);
  }

  async clickAvailableForCADtoCADCheckbox(): Promise<void> {
    // uIMapSettings.cFSCode.uIAvailableForCADtoCADCheckbox.click();
  }

  async verifyCADToCADCheckboxCheckedInGrid(rowIndex: number): Promise<void> {
    // boolean contains = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.cFSCode.uICFSCodeResultTableFire, "CAD-to-CAD", rowIndex)
    // .findElement(By.tagName("img")).getAttribute("src").contains("checkbox_on.gif");
    // verify.ExpectedValueIsTrue(contains);
  }

  async verifyInactiveCheckBoxCheckedInGrid(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapSettings.cFSCode.uICFSCodeResultTableFire, BaseData.getSettingsModuleValue("Description1"),
    // "InActive");
    // WebElement check = gridCell.findElement(By.tagName("img"));
    // String attribute = check.getAttribute("title");
    // verify.ExpectedPropertyValueIsEqual(attribute, "Checked");
  }

  async verifyAtCFSByDescriptionInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.cFSCode.uICFSCodeResultTableFire,
    // BaseData.getSettingsModuleValue("Description"), "CFS")
    // .getText();
    // System.out.println(text);
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getSettingsModuleValue("CFSCode"));
  }

  async verifyAtTypeInColumnValues(): Promise<void> {
    // List<String> types = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.cFSCode.uICFSCodeResultTable, "Type");
    // for (String type : types) {
    // verify.ExpectedValueIsTrue(type.contains(BaseData.getSettingsModuleValue("Type")));
  }

  async selectRandomRowInGrid(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow(uIMapSettings.cFSCode.uICFSCodeResultTable);
  }

  async clearCallForService(): Promise<void> {
    // uIMapSettings.cFSCode.uICFSCodeEdit.click();
    // uIMapSettings.cFSCode.uICFSCodeEdit.clear();
  }

}

export class AccessLogPage {
  readonly page: Page;
  readonly jurisDropDown: Locator;
  readonly repositoryCodeEdit: Locator;
  readonly repositoryDescTextEdit: Locator;
  readonly repositoryLupSrchButton: Locator;
  readonly pFCodeEdit: Locator;
  readonly pFDescTextEdit: Locator;
  readonly pFLupSrchButton: Locator;
  readonly accessTypeDropDown: Locator;
  readonly fromDateDEdit: Locator;
  readonly fromTimeEdit: Locator;
  readonly toDateEdit: Locator;
  readonly toTimeEdit: Locator;
  readonly searchButton: Locator;
  readonly accessLogResultGrid: Locator;
  readonly callNoYear: Locator;
  readonly callNoEdit: Locator;
  readonly caseNoYear: Locator;
  readonly caseNoEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly printIcon: Locator;
  readonly excelIcon: Locator;
  readonly jurisLabel: Locator;
  readonly fromDateLabel: Locator;
  readonly toDateLabel: Locator;
  readonly accessTypeLabel: Locator;
  readonly repositoryLabel: Locator;
  readonly pFCodeLabel: Locator;
  readonly nameIDLabel: Locator;
  readonly callLabel: Locator;
  readonly caseLabel: Locator;
  readonly repositoryLookUpIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.jurisDropDown = page.locator('#lstJuris');
    this.repositoryCodeEdit = page.locator('#lupRepID_CodeValue');
    this.repositoryDescTextEdit = page.locator('#lupRepID_CodeDescription');
    this.repositoryLupSrchButton = page.locator('#lupRepID_imgBtn');
    this.pFCodeEdit = page.locator('#lupPF_CodeValue');
    this.pFDescTextEdit = page.locator('#lupPF_CodeDescription');
    this.pFLupSrchButton = page.locator('#lupPF_imgBtn');
    this.accessTypeDropDown = page.locator('#lstActType_DropDown');
    this.fromDateDEdit = page.locator('#dtcStartDttm_Date_KPIDttmCtrl');
    this.fromTimeEdit = page.locator("//table[@id=\'dtcStartDttm_Time\']//input");
    this.toDateEdit = page.locator('#dtcToDttm_Date_KPIDttmCtrl');
    this.toTimeEdit = page.locator("//table[@id=\'dtcToDttm_Time\']//input");
    this.searchButton = page.locator('#cmdSearch');
    this.accessLogResultGrid = page.locator('#grdActLog');
    this.callNoYear = page.locator('#numCallNbr_Year');
    this.callNoEdit = page.locator('#numCallNbr_Number');
    this.caseNoYear = page.locator('#numCaseNbr_Year');
    this.caseNoEdit = page.locator('#numCaseNbr_Number');
    this.descriptionEdit = page.locator('#txtDesc');
    this.printIcon = page.locator("//img[@title=\'Print\']");
    this.excelIcon = page.locator("//img[@title=\'Export to Excel\']");
    this.jurisLabel = page.locator('#lblJuris');
    this.fromDateLabel = page.locator('#lblDescription');
    this.toDateLabel = page.locator('#lblOffenseGroup');
    this.accessTypeLabel = page.locator('#lblActType');
    this.repositoryLabel = page.locator('#lblRepository');
    this.pFCodeLabel = page.locator('#lblPF');
    this.nameIDLabel = page.locator('#lblID');
    this.callLabel = page.locator('#lblCallNbr');
    this.caseLabel = page.locator('#lblCaseNbr');
    this.repositoryLookUpIcon = page.locator('#lupRepID_imgBtn');
  }

  async enterAtPFCode(): Promise<void> {
    // uIMapSettings.accessLog.uIPFCodeEdit.sendKeys(BaseData.getSettingsModuleValue("PFCode"));
    // uIMapSettings.accessLog.uIPFCodeEdit.sendKeys(Keys.TAB);
  }

  async enterRepositoryAs3240(): Promise<void> {
    // uIMapSettings.accessLog.uIRepositoryCodeEdit.sendKeys("3240");
  }

  async enterRepositoryAs2273(): Promise<void> {
    // uIMapSettings.accessLog.uIRepositoryCodeEdit.sendKeys("2273");
    // uIMapSettings.accessLog.uIRepositoryCodeEdit.sendKeys(Keys.TAB);
  }

  async enterRepositoryAs1388(): Promise<void> {
    // uIMapSettings.accessLog.uIRepositoryCodeEdit.sendKeys("1388");
    // uIMapSettings.accessLog.uIRepositoryCodeEdit.sendKeys(Keys.TAB);
  }

  async enterRepositoryAs2272(): Promise<void> {
    // uIMapSettings.accessLog.uIRepositoryCodeEdit.click();
    // uIMapSettings.accessLog.uIRepositoryCodeEdit.clear();
    // uIMapSettings.accessLog.uIRepositoryCodeEdit.sendKeys("2272");
    // uIMapSettings.accessLog.uIRepositoryCodeEdit.sendKeys(Keys.TAB);
  }

  async enterRepositoryAs2275(): Promise<void> {
    // uIMapSettings.accessLog.uIRepositoryCodeEdit.click();
    // uIMapSettings.accessLog.uIRepositoryCodeEdit.clear();
    // uIMapSettings.accessLog.uIRepositoryCodeEdit.sendKeys("2275");
    // uIMapSettings.accessLog.uIRepositoryCodeEdit.sendKeys(Keys.TAB);
  }

  async tabTheFromDateAndTime(): Promise<void> {
    // uIMapSettings.accessLog.uIFromDateDEdit.sendKeys(Keys.TAB);
    // uIMapSettings.accessLog.uIFromTimeEdit.sendKeys(Keys.TAB);
  }

  async enterFromDateAndTimeAs2020(): Promise<void> {
    // uIMapSettings.accessLog.uIFromDateDEdit.sendKeys("05/02/2020");
    // uIMapSettings.accessLog.uIFromTimeEdit.sendKeys(Keys.TAB);
  }

  async tabTheToDateAndTime(): Promise<void> {
    // uIMapSettings.accessLog.uIToDateEdit.sendKeys(Keys.TAB);
    // uIMapSettings.accessLog.uIToTimeEdit.sendKeys(Keys.TAB);
  }

  async enterAtRepositoryID(): Promise<void> {
    // uIMapSettings.accessLog.uIRepositoryCodeEdit.sendKeys(BaseData.getSettingsModuleValue("Repository"));
    // uIMapSettings.accessLog.uIRepositoryCodeEdit.sendKeys(Keys.TAB);
  }

  async selectAccessLogAsLoginFailed(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.accessLog.uIAccessTypeDropDown,
    // "Login Failed");
  }

  async clickSearch(): Promise<void> {
    // uIMapSettings.accessLog.uISearchButton.click();
    // Playback.controlReadyThreadWait();
    // Playback.pageLoadThreadWait();
  }

  async verifyCurrentDateAsFrom(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate(),
    // uIMapSettings.accessLog.uIFromDateDEdit.getAttribute("value"));
  }

  async verifyCurrentDateAsTo(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate(),
    // uIMapSettings.accessLog.uIToDateEdit.getAttribute("value"));
  }

  async verifyActivityDateAsCurrentDate(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.accessLog.uIAccessLogResultGrid, "Activity Date", rowIndex)
    // .contains(Randomized.getCurrentDate("MM/dd/yy")));
  }

  async verifyAccessAsLoginFailed(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.accessLog.uIAccessLogResultGrid, "Access", rowIndex)
    // .contains("Login Failed"));
  }

  async verifyAccessAsAdd(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.accessLog.uIAccessLogResultGrid, "Access", rowIndex)
    // .contains("ADD"));
  }

  async verifyDescriptionAtUserName(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.accessLog.uIAccessLogResultGrid, "Description", rowIndex)
    // .contains(BaseData.getSettingsModuleValue("UserName")));
  }

  async verifyDescriptionAsLoginFailed(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.accessLog.uIAccessLogResultGrid, "Description", rowIndex)
    // .contains("Login Failed"));
  }

  async verifyAtDescription(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.accessLog.uIAccessLogResultGrid, "Description", rowIndex)
    // .contains(BaseData.getSettingsModuleValue("Description")));
  }

  async verifyAtDescription1(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.accessLog.uIAccessLogResultGrid, "Description", rowIndex)
    // .contains(BaseData.getSettingsModuleValue("Description1")));
  }

  async verifyAtScreen(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.accessLog.uIAccessLogResultGrid,
    // "Screen ID - Screen Name", rowIndex)
    // .contains(BaseData.getSettingsModuleValue("Screen")));
  }

  async verifyAtScreenID(rowIndex: number, Screen: string): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.accessLog.uIAccessLogResultGrid, "Screen ID - Screen Name",
    // rowIndex)
    // .contains(Screen));
  }

  async verifyAtScreen1(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.accessLog.uIAccessLogResultGrid, "Screen", rowIndex)
    // .contains(BaseData.getSettingsModuleValue("Screen1")));
  }

  async verifyAtPFCode(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("PFCode"),
    // objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.accessLog.uIAccessLogResultGrid, "PF Code", rowIndex));
  }

  async selectAccessLogAsAdd(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.accessLog.uIAccessTypeDropDown,
    // "ADD");
  }

  async selectAccessLogAsSearch(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.accessLog.uIAccessTypeDropDown,
    // "Search");
  }

  async verifyDescriptionAsJailCell(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.accessLog.uIAccessLogResultGrid, "Description", rowIndex)
    // .contains("Jail Cell"));
  }

  async enterAtCallNo(): Promise<void> {
    // uIMapSettings.accessLog.uICallNoYear.sendKeys(BaseData.getTestContextData("CallNo").substring(0, 2));
    // uIMapSettings.accessLog.uICallNoEdit.sendKeys(BaseData.getTestContextData("CallNo").substring(3));
    // uIMapSettings.accessLog.uICallNoEdit.sendKeys(Keys.TAB);
  }

  async enterAtCallNo(CallNo: string): Promise<void> {
    // uIMapSettings.accessLog.uICallNoYear.sendKeys(CallNo.substring(0, 2));
    // uIMapSettings.accessLog.uICallNoEdit.sendKeys(CallNo.substring(3));
    // uIMapSettings.accessLog.uICallNoEdit.sendKeys(Keys.TAB);
  }

  async enterAtCaseNo(CaseNo: string): Promise<void> {
    // uIMapSettings.accessLog.uICaseNoYear.sendKeys(CaseNo.substring(0, 2));
    // uIMapSettings.accessLog.uICaseNoEdit.sendKeys(CaseNo.substring(3));
    // uIMapSettings.accessLog.uICaseNoEdit.sendKeys(Keys.TAB);
  }

  async verifyAtDescription(rowIndex: number, Description: string): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.accessLog.uIAccessLogResultGrid, "Description", rowIndex)
    // .contains(Description));
  }

  async enterAtContainsDescription(): Promise<void> {
    // uIMapSettings.accessLog.uIDescriptionEdit.sendKeys(BaseData.getSettingsModuleValue("SearchDescription"));
  }

  async enterAtDescription(): Promise<void> {
    // uIMapSettings.accessLog.uIDescriptionEdit.sendKeys(BaseData.getSettingsModuleValue("Description"));
  }

  async verifyAccessAsChange(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.accessLog.uIAccessLogResultGrid, "Access", rowIndex)
    // .contains("Change"));
  }

  async verifyAccessAsDelete(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.accessLog.uIAccessLogResultGrid, "Access", rowIndex)
    // .contains("Delete"));
  }

  async verifyAccessAsPrint(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.accessLog.uIAccessLogResultGrid, "Access", rowIndex)
    // .contains("Print"));
  }

  async verifyScreenIDAndNameAsCallSearch(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.accessLog.uIAccessLogResultGrid, "Screen ID - Screen Name",
    // rowIndex)
    // .contains("Call Search"));
  }

  async verifyScreenIDAndNameAsCaseSearch(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.accessLog.uIAccessLogResultGrid, "Screen ID - Screen Name",
    // rowIndex)
    // .contains("Case Search"));
  }

  async enterCurrentDate(): Promise<void> {
    // uIMapSettings.accessLog.uIFromDateDEdit.sendKeys(Randomized.getPreviousDateByMonth(1, "MM/dd/yyyy"));
  }

  async verifyBCNotListedUnderJuris(): Promise<void> {
    // List<String> juris = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.accessLog.uIAccessLogResultGrid, "Juris");
    // for (String jury : juris) {
    // verify.ExpectedValueIsTrue(!jury.contains("BC"));
  }

  async verifyPXNotListedUnderJuris(): Promise<void> {
    // List<String> juris = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.accessLog.uIAccessLogResultGrid, "Juris");
    // for (String jury : juris) {
    // verify.ExpectedValueIsTrue(!jury.contains("PX"));
  }

  async verifyAccessAsSearch(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.accessLog.uIAccessLogResultGrid, "Access", rowIndex)
    // .contains("Search"));
  }

  async selectAccessLogAsLogInOut(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.accessLog.uIAccessTypeDropDown,
    // "Log In/Out");
  }

  async enterAtFromDate(): Promise<void> {
    // uIMapSettings.accessLog.uIFromDateDEdit.sendKeys(BaseData.getSettingsModuleValue("FromDate"));
    // uIMapSettings.accessLog.uIFromTimeEdit.sendKeys(Keys.TAB);
  }

  async enterAtToDate(): Promise<void> {
    // uIMapSettings.accessLog.uIToDateEdit.sendKeys(BaseData.getSettingsModuleValue("ToDate"));
    // uIMapSettings.accessLog.uIToTimeEdit.sendKeys(Keys.TAB);
  }

  async clickGridHeaderByColumnName(columnName: string): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectGridHeaderColumnName(uIMapSettings.accessLog.uIAccessLogResultGrid, columnName);
  }

  async verifyDateAndTimeColumnAsAscendingOrder(): Promise<void> {
    // Randomized.verifyDatesSortingAsAscendingOrder(objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.accessLog.uIAccessLogResultGrid, "Activity Date"), "MM/dd/yy");
  }

  async verifyDateAndTimeColumnAsDescendingOrder(): Promise<void> {
    // Randomized.datesSortingAsDescendingOrder(objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.accessLog.uIAccessLogResultGrid, "Activity Date"), "MM/dd/yy");
  }

  async verifyTheDatesBetweenFromAndToDates(): Promise<void> {
    // List<String> values = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.accessLog.uIAccessLogResultGrid, "Activity Date");
    // for (String Date : values)
    // randomized.verifyTheDatesBetweenFromAndToDates(Date, BaseData.getSettingsModuleValue("FromDate"),
    // BaseData.getSettingsModuleValue("ToDate"));
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapSettings.accessLog.uIPrintIcon.click();
  }

  async verifyGridIsEmpty(): Promise<void> {
    // verify.ExpectedIntergerValueIsEqualToActual(0, objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapSettings.accessLog.uIAccessLogResultGrid), "Grid contains data -->");
  }

  async clickExcelIcon(): Promise<void> {
    // uIMapSettings.accessLog.uIExcelIcon.click();
  }

  async verifyAtIPAddressByDescription(i: number): Promise<void> {
    // String IPAddress = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.accessLog.uIAccessLogResultGrid,
    // BaseData.getSettingsModuleValue("Description" + i), "IP Address")
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("IPAddress"), IPAddress);
  }

  async getAccessColumnValues(): Promise<string[]> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.accessLog.uIAccessLogResultGrid, "Access");
    // System.out.println(gridTableColumnValues);
    // return gridTableColumnValues;
  }

  async getColumnValues(ColName: string): Promise<string[]> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.accessLog.uIAccessLogResultGrid, ColName);
    // List<String> list2 = new ArrayList<String>();
    // System.out.println(gridTableColumnValues);
    // for (String list : gridTableColumnValues) {
    // List<String> list1 = new ArrayList<String>(Arrays.asList(list));
    // System.out.println(list1);
    // list1.removeAll(Arrays.asList("", null));
    // System.out.println(list1);
    // list1 = list1.stream().filter(item -> !item.isEmpty()).collect(Collectors.toList());
    // System.out.println(list1);
    // list2.addAll(list1);
    // System.out.println(list2);
    // return list2;
  }

  async verifyColumnValueIsPresentInExcel(columnvaluesByColumnName: string[]): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // columnvaluesByColumnName.contains(BaseData.getSettingsModuleValue("ColumnName")));
  }

  async enterAtFromTimeAsPerviousTime(minutes: number): Promise<void> {
    // System.out.println(randomized.getPreviousTimeByminutes(minutes, "HH:mm"));
    // uIMapSettings.accessLog.uIFromTimeEdit.click();
    // uIMapSettings.accessLog.uIFromTimeEdit.sendKeys(randomized.getPreviousTimeByminutes(minutes, "HH:mm"));
  }

  async verifyAccessWithDescription(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapSettings.accessLog.uIAccessLogResultGrid,
    // BaseData.getSettingsModuleValue("Description"), "Access").getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getSettingsModuleValue("Access"));
  }

  async verifyScreenIDScreenNameWithDescription(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapSettings.accessLog.uIAccessLogResultGrid,
    // BaseData.getSettingsModuleValue("Description"), "Screen ID - Screen Name").getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getSettingsModuleValue("ScreenIDScreenName"));
  }

  async enterAtCurrentDate(): Promise<void> {
    // uIMapSettings.accessLog.uIFromDateDEdit.sendKeys(randomized.getCurrentDate());
  }

  async verifyAtAccessInGrid(i: number): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(
    // uIMapSettings.accessLog.uIAccessLogResultGrid,
    // BaseData.getSettingsModuleValue("Access" + i)).getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Access" + i),text);
  }

  async verifyAtDescriptionByAccessInGrid(i: number): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapSettings.accessLog.uIAccessLogResultGrid,
    // BaseData.getSettingsModuleValue("Access" + i), "Description").getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getSettingsModuleValue("Description" + i));
  }

  async verifyAtPFCodeByAccessInGrid(i: number): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapSettings.accessLog.uIAccessLogResultGrid,
    // BaseData.getSettingsModuleValue("Access" + i), "PF Code").getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getSettingsModuleValue("PFCode" + i));
  }

  async selectAtAccessType(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.accessLog.uIAccessTypeDropDown,
    // BaseData.getSettingsModuleValue("AccessType" + i));
  }

  async verifyAtPFCodeInGrid(i: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.accessLog.uIAccessLogResultGrid, "PF Code");
    // verify.ExpectedValueIsTrue(gridTableColumnValues.contains(BaseData.getSettingsModuleValue("PFCode")));
  }

  async verifyAtIPAddressInGrid(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.accessLog.uIAccessLogResultGrid, "IP Address");
    // verify.ExpectedValueIsTrue(gridTableColumnValues.contains(BaseData.getSettingsModuleValue("IPAddress")));
  }

  async verifyJurisLabelIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.accessLog.uIJurisLabel.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verifyFromDateLabelIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.accessLog.uIFromDateLabel.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verifyToDateLabelIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.accessLog.uIToDateLabel.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verifyAccessTypeLabelIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.accessLog.uIAccessTypeLabel.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verifyRepositoryLabelIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.accessLog.uIRepositoryLabel.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verifyPFCodeLabelIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.accessLog.uIPFCodeLabel.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verifyNameIDLabelIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.accessLog.uINameIDLabel.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verifyDescriptionLabelIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.accessLog.uINameIDLabel.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verifyCallLabelIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.accessLog.uICallLabel.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verifyCaseLabelIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.accessLog.uICaseLabel.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async reloadAccessLogTab(): Promise<void> {
    // objectIdentification.manualIdentify.reloadScreen("Access Log");
  }

  async clickRepositoryLookUpIcon(): Promise<void> {
    // uIMapSettings.accessLog.uIRepositoryLookUpIcon.click();
  }

  async verifyAtDescriptionInGrid(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.accessLog.uIAccessLogResultGrid, BaseData.getSettingsModuleValue("ColumnName"));
    // verify.ExpectedValueIsTrue(gridTableColumnValues.contains(BaseData.getSettingsModuleValue("Description")));
  }

  async verifyAtScreenIDScreenNameInGrid(i: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.accessLog.uIAccessLogResultGrid, BaseData.getSettingsModuleValue("ColumnName" + i));
    // verify.ExpectedValueIsTrue(
    // gridTableColumnValues.contains(BaseData.getSettingsModuleValue("ScreenIDScreenName")));
  }

  async verifyAtDescriptionWithPFCode(i: number): Promise<void> {
    // String PFcode = BaseData.getSettingsModuleValue("PFCode");
    // List<WebElement> findElements = Playback.driver
    // .findElements(By.xpath("//td[contains(text(),'" + PFcode + "')]"));
    // List<String> visibleTexts = findElements.stream().filter(WebElement::isDisplayed).map(WebElement::getText)
    // .collect(Collectors.toList());
    // verify.ExpectedValueIsTrue(visibleTexts.contains(BaseData.getSettingsModuleValue("Description" + i)));
  }

  async selectAtJuris(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption
    // (uIMapSettings.accessLog.uIJurisDropDown,BaseData.getSettingsModuleValue("Juris"));
  }

  async verifyPrintIconIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.accessLog.uIPrintIcon.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verifyExportToExcelIconIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.accessLog.uIExcelIcon.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async enterToDate(): Promise<void> {
    // uIMapSettings.accessLog.uIToDateEdit.sendKeys(randomized.getCurrentDate("MM/dd/yyyy"));
  }

  async verifyPrintIconIsEnabled(): Promise<void> {
    // boolean enabled = uIMapSettings.accessLog.uIPrintIcon.isEnabled();
    // verify.ExpectedValueIsTrue(enabled);
  }

  async verifyExportToExcelIconIsEnabled(): Promise<void> {
    // boolean enabled = uIMapSettings.accessLog.uIExcelIcon.isEnabled();
    // verify.ExpectedValueIsTrue(enabled);
  }

}

export class PhoenixAuthenticatorWindowPage {
  readonly page: Page;
  readonly userNameEdit: Locator;
  readonly passwordEdit: Locator;
  readonly acceptButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameEdit = page.locator('#txtUserName');
    this.passwordEdit = page.locator('#txtPassword');
    this.acceptButton = page.locator('#cmdValidate');
  }

  async enterAtPassword(): Promise<void> {
    await this.passwordEdit.clear();
    await this.passwordEdit.fill(BaseData.getNamesModuleValue("Password"));
  }

  async clickAcceptButton(): Promise<void> {
    await this.page.waitForTimeout(2000);

    const context = this.page.context();
    const pagesBefore = context.pages().length;

    // Find the opener page (any non-Loader, non-authenticator .aspx page)
    const openerPage = context.pages().find((p: any) => {
      const url = p.url().toLowerCase();
      return url.includes('.aspx') && !url.includes('loader') && !url.includes('authenticate');
    });

    // Patch window.open on opener to capture calls blocked by cross-window gesture restrictions
    if (openerPage) {
      await openerPage.evaluate(() => {
        (window as any).__blockedPopups = [];
        const origOpen = window.open.bind(window);
        window.open = function (...args: any[]) {
          const result = origOpen(...args);
          if (!result) {
            (window as any).__blockedPopups.push(args);
          }
          return result;
        };
      });
    }

    await this.acceptButton.click();
    await this.page.waitForTimeout(3000);

    // Check if a new page already opened (popup blocking was not an issue)
    if (context.pages().length > pagesBefore) {
      return;
    }

    // Cross-window popup blocking workaround: ChromeAuthentication() on the opener
    // runs but window.open() is blocked because the user gesture was on the authenticator window.
    // Try to open any blocked popup, or re-trigger the opener's action.
    if (openerPage && !openerPage.isClosed()) {
      try {
        const blocked = await openerPage.evaluate(() => (window as any).__blockedPopups || []);
        if (blocked.length > 0) {
          const url = blocked[0][0];
          if (url) {
            await Promise.all([
              context.waitForEvent('page', { timeout: 10000 }),
              openerPage.evaluate((openUrl: string) => { window.open(openUrl); }, url)
            ]);
            return;
          }
        }
        // Fallback: find and call the target function that opens the expected popup
        const targetFn = await openerPage.evaluate(() => {
          if (typeof (window as any).callPseudonym === 'function') return 'callPseudonym';
          if (typeof (window as any).CheckPermission === 'function') return 'CheckPermission';
          if (typeof (window as any).OpenAuthenticateWin === 'function') return 'OpenAuthenticateWin';
          return null;
        });
        if (targetFn) {
          await Promise.all([
            context.waitForEvent('page', { timeout: 10000 }),
            openerPage.evaluate((fn: string) => { (window as any)[fn](); }, targetFn)
          ]);
        }
      } catch (e: any) {
        // Popup may have already opened or the action doesn't produce a popup
      }
    }
  }

  async closeScreen(): Promise<void> {
    // uIMapSettings.phoenixAuthenticatorWindow.driver.close();
  }

  async enterAtInvalidPassword(): Promise<void> {
    // uIMapSettings.phoenixAuthenticatorWindow.uIPasswordEdit
    // .sendKeys(BaseData.getSettingsModuleValue("InvalidPassword"));
  }

  async verifyInvalidUserNamePassAckMsg(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // popup.acknowledge.okWithExpectedMessage("1049 - Invalid User Name Password");
  }

  async enterAtUserName(): Promise<void> {
    // uIMapSettings.phoenixAuthenticatorWindow.uIUserNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("UserName"));
  }

  async clearPassword(): Promise<void> {
    // uIMapSettings.phoenixAuthenticatorWindow.uIPasswordEdit.click();
    // uIMapSettings.phoenixAuthenticatorWindow.uIPasswordEdit.clear();
  }

  async verify2023InvalidUserNamePasswordAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(2023) Invalid User Name Password");
  }

  async enterAtPassword(JsonKeyIndex: number): Promise<void> {
    // uIMapSettings.phoenixAuthenticatorWindow.uIPasswordEdit
    // .sendKeys(BaseData.getSettingsModuleValue("Password"+JsonKeyIndex));
  }

}

export class CodedPage {
  readonly page: Page;
  readonly codeIDEdit: Locator;
  readonly searchButton: Locator;
  readonly codedTable: Locator;
  readonly mJCategoryComboBox: Locator;
  readonly jurisComboBox: Locator;
  readonly addNewButton: Locator;
  readonly seriesComboBox: Locator;
  readonly codeCategoryComboBox: Locator;
  readonly description: Locator;
  readonly module: Locator;
  readonly codeValue: Locator;
  readonly codeValueDescription: Locator;
  readonly saveButton: Locator;
  readonly excelIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.codeIDEdit = page.locator('#txtCodeID');
    this.searchButton = page.locator('#cmdSearch');
    this.codedTable = page.locator("//div[@id=\'grdCodeType\']");
    this.mJCategoryComboBox = page.locator('#cddMJGlobal_DropDown');
    this.jurisComboBox = page.locator('#lstJuris');
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.seriesComboBox = page.locator('#cddSeries_DropDown');
    this.codeCategoryComboBox = page.locator('#lstcodecategory');
    this.description = page.locator('#txtDescription');
    this.module = page.locator('#cmbModule');
    this.codeValue = page.locator('#txtCodevalue');
    this.codeValueDescription = page.locator('#txtCodeValueDesc');
    this.saveButton = page.locator('#cmdSave');
    this.excelIcon = page.locator("//img[@title=\'Export to Excel\']");
  }

  async enterAtCodeID(): Promise<void> {
    // uIMapSettings.coded.uICodeIDEdit.click();
    // uIMapSettings.coded.uICodeIDEdit.clear();
    // uIMapSettings.coded.uICodeIDEdit.sendKeys(BaseData.getSettingsModuleValue("CodeID"));
  }

  async enterAtCodeID(i: number): Promise<void> {
    // uIMapSettings.coded.uICodeIDEdit.click();
    // uIMapSettings.coded.uICodeIDEdit.clear();
    // uIMapSettings.coded.uICodeIDEdit.sendKeys(BaseData.getSettingsModuleValue("CodeID" + i));
  }

  async clickSearchButton(): Promise<void> {
    // uIMapSettings.coded.uISearchButton.click();
  }

  async verifyAtCodeIDInGrid(rowIndex: number): Promise<void> {
    // Playback.controlReadyThreadWait();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("CodeID"),
    // objectIdentification.manualIdentify.getGridCellInnerText(uIMapSettings.coded.uICodedTable,
    // "Code ID", rowIndex));
  }

  async clickRowByAtCodeID(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapSettings.coded.uICodedTable,
    // BaseData.getSettingsModuleValue("CodeID"));
  }

  async verifyDescriptionAsUnderCoverCategoryInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("Under Cover Category", objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.coded.uICodedTable, "Description", rowIndex));
  }

  async verifyAtDescriptionInGrid(rowIndex: number): Promise<void> {
    // Playback.controlReadyThreadWait();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Description"),
    // objectIdentification.manualIdentify.getGridCellInnerText(uIMapSettings.coded.uICodedTable,
    // "Description", rowIndex));
  }

  async clickRowByAtCodeID1(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapSettings.coded.uICodedTable,
    // BaseData.getSettingsModuleValue("CodeID1"));
    // Playback.threadWait(60000);
  }

  async clickRowByAtCodeID2(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapSettings.coded.uICodedTable,
    // BaseData.getSettingsModuleValue("CodeID2"));
    // Playback.threadWait(60000);
  }

  async enterAtCodeID1(): Promise<void> {
    // uIMapSettings.coded.uICodeIDEdit.click();
    // uIMapSettings.coded.uICodeIDEdit.clear();
    // uIMapSettings.coded.uICodeIDEdit.sendKeys(BaseData.getSettingsModuleValue("CodeID1"));
  }

  async enterAtCodeID2(): Promise<void> {
    // uIMapSettings.coded.uICodeIDEdit.click();
    // uIMapSettings.coded.uICodeIDEdit.clear();
    // uIMapSettings.coded.uICodeIDEdit.sendKeys(BaseData.getSettingsModuleValue("CodeID2"));
  }

  async selectAtMJCategory(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.coded.uIMJCategoryComboBox,
    // BaseData.getSettingsModuleValue("MJCategory"));
  }

  async selectAtMJCategory1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.coded.uIMJCategoryComboBox,
    // BaseData.getSettingsModuleValue("MJCategory1"));
  }

  async clickAddNew(): Promise<void> {
    // uIMapSettings.coded.uIAddNewButton.click();
  }

  async selectAtDescription(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapSettings.coded.uICodedTable,
    // BaseData.getSettingsModuleValue("Description"));
  }

  async reloadCodedScreen(): Promise<void> {
    // objectIdentification.manualIdentify.reloadScreen("Coded");
  }

  async selectAtSeries(): Promise<void> {
    // Playback.threadWait();
    // uIMapSettings.coded.uISeriesComboBox.click();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.coded.uISeriesComboBox,
    // BaseData.getSettingsModuleValue("Series"));
  }

  async verifyAtSeriesInGrid(): Promise<void> {
    // List<String> codeIds = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.coded.uICodedTable, "Code ID");
    // for (String codeID : codeIds) {
    // String code = codeID.substring(0, 1);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Series").substring(0, 1), code);
  }

  async selectAtCodeCategory(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.coded.uICodeCategoryComboBox,
    // BaseData.getSettingsModuleValue("CodeCategory"));
  }

  async verifyAtCodeCategoryInGrid(): Promise<void> {
    // List<String> codeCategories = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.coded.uICodedTable, "Code Category");
    // for (String codeCategory : codeCategories) {
    // verify.ExpectedPropertyValueIsEqual(codeCategory, BaseData.getSettingsModuleValue("CodeCategory"));
  }

  async enterAtDescription(): Promise<void> {
    // uIMapSettings.coded.uIDescription.click();
    // uIMapSettings.coded.uIDescription.clear();
    // uIMapSettings.coded.uIDescription.sendKeys(BaseData.getSettingsModuleValue("Description"));
    // uIMapSettings.coded.uIDescription.sendKeys(Keys.TAB);
  }

  async selectAtModule(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.coded.uIModule,
    // BaseData.getSettingsModuleValue("Module"));
  }

  async verifyAtModuleInGrid(): Promise<void> {
    // List<String> moduleNames = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.coded.uICodedTable, "Modules");
    // for (String moduleName : moduleNames) {
    // verify.ExpectedValueIsTrue(moduleName.contains(BaseData.getSettingsModuleValue("Module")));
  }

  async selectRandomRowInGrid(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow(uIMapSettings.coded.uICodedTable);
  }

  async enterAtCodeValue(): Promise<void> {
    // uIMapSettings.coded.uICodeValue.click();
    // uIMapSettings.coded.uICodeValue.clear();
    // uIMapSettings.coded.uICodeValue.sendKeys(BaseData.getSettingsModuleValue("CodeValue"));
    // uIMapSettings.coded.uICodeValue.sendKeys(Keys.TAB);
  }

  async enterAtCodeValueDescription(): Promise<void> {
    // uIMapSettings.coded.uICodeValueDescription.click();
    // uIMapSettings.coded.uICodeValueDescription.clear();
    // uIMapSettings.coded.uICodeValueDescription
    // .sendKeys(BaseData.getSettingsModuleValue("CodeValueDescription"));
  }

  async selectAtCodeCategory(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.coded.uICodeCategoryComboBox,
    // BaseData.getSettingsModuleValue("CodeCategory" + i));
  }

  async verifyAtCodeCategoryInGrid(i: number): Promise<void> {
    // List<WebElement> codeCategories = objectIdentification.manualIdentify
    // .getGridTableColumnCells(uIMapSettings.coded.uICodedTable, "Code Category");
    // for (WebElement codeCategory : codeCategories) {
    // String category = codeCategory.getText();
    // verify.ExpectedPropertyValueIsEqual(category, BaseData.getSettingsModuleValue("CodeCategory" + i));
  }

  async selectAtcodeIDInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapSettings.coded.uICodedTable,
    // BaseData.getSettingsModuleValue("CodeID"));
  }

  async selectAtcodeIDInGrid(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapSettings.coded.uICodedTable,
    // BaseData.getSettingsModuleValue("CodeID" + i));
  }

  async enterAtDescription(i: number): Promise<void> {
    // uIMapSettings.coded.uIDescription.click();
    // uIMapSettings.coded.uIDescription.clear();
    // uIMapSettings.coded.uIDescription.sendKeys(BaseData.getSettingsModuleValue("Description" + i));
    // uIMapSettings.coded.uIDescription.sendKeys(Keys.TAB);
  }

  async clickExcelIcon(): Promise<void> {
    // uIMapSettings.coded.uIExcelIcon.click();
  }

  async verifyExcelColumnName(columnName: string[], i: number): Promise<void> {
    // verify.ExpectedValueIsTrue(columnName.contains(BaseData.getSettingsModuleValue("ColumnName" + i)));
  }

}

export class MaintainCodeValuePage {
  readonly page: Page;
  readonly codeIDEdit: Locator;
  readonly addNewButton: Locator;
  readonly searchButton: Locator;
  readonly codeValueEdit: Locator;
  readonly codeValueDesEdit: Locator;
  readonly maintainCodeValueTable: Locator;
  readonly popUpCodeValueEdit: Locator;
  readonly popUpDescriptionEdit: Locator;
  readonly itemTypeComboBox: Locator;
  readonly itemCategoryComboBox: Locator;
  readonly inventoryTypeComboBox: Locator;
  readonly enableFeesTabCheckbox: Locator;
  readonly panelTypeComboBox: Locator;
  readonly sortOrderEdit: Locator;
  readonly addButton: Locator;
  readonly cancelButton: Locator;
  readonly popUpCancelButton: Locator;
  readonly systemCheckBox: Locator;
  readonly socialIconInputComboBox: Locator;
  readonly socialIconDropdownList: Locator;
  readonly uRLEdit: Locator;
  readonly divisionComboBox: Locator;
  readonly jurisComboBox: Locator;
  readonly showOnWhiteboardLabel: Locator;
  readonly inventoryTypeRadComboBox: Locator;
  readonly inventoryTypeRadArrow: Locator;
  readonly sharedCodesTable: Locator;
  readonly updateButton: Locator;
  readonly descriptionEdit: Locator;
  readonly editCodeIdButton: Locator;
  readonly enableApprovalRoutingCheckbox: Locator;
  readonly codeValueDescriptionEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.codeIDEdit = page.locator('#txtCodeType');
    this.addNewButton = page.locator('#cmdAddNew');
    this.searchButton = page.locator('#cmdSearch');
    this.codeValueEdit = page.locator('#txtInqcodevalue');
    this.codeValueDesEdit = page.locator('#txtInqdescription');
    this.maintainCodeValueTable = page.locator('#grdCodeValue');
    this.popUpCodeValueEdit = page.locator('#txtCodeValue');
    this.popUpDescriptionEdit = page.locator('#txtDescription');
    this.itemTypeComboBox = page.locator('#cddFormRepositoryID_DropDown');
    this.itemCategoryComboBox = page.locator('#cddRelation_DropDown');
    this.inventoryTypeComboBox = page.locator('#cddRelation_DropDown');
    this.enableFeesTabCheckbox = page.locator('#chkEnableFees');
    this.panelTypeComboBox = page.locator('#cddInvPanelType_DropDown');
    this.sortOrderEdit = page.locator('#txtSortSeqNo');
    this.addButton = page.locator('#cmdAdd');
    this.cancelButton = page.locator('#cmdClear');
    this.popUpCancelButton = page.locator('#cmdClear');
    this.systemCheckBox = page.locator('#chkIsSystem');
    this.socialIconInputComboBox = page.locator('#radSocialSiteIcon_Input');
    this.socialIconDropdownList = page.locator('#radSocialSiteIcon_DropDown');
    this.uRLEdit = page.locator('#txtDefaultURL');
    this.divisionComboBox = page.locator('#cddDivision_DropDown');
    this.jurisComboBox = page.locator('#lstJuris');
    this.showOnWhiteboardLabel = page.locator("//label[text()=\'Show on Whiteboard\']");
    this.inventoryTypeRadComboBox = page.locator('#cddInvMultiSelect_Input');
    this.inventoryTypeRadArrow = page.locator('#cddInvMultiSelect_Arrow');
    this.sharedCodesTable = page.locator("//div[@id=\'grdCodeValue\']");
    this.updateButton = page.locator("//input[@id=\'cmdAdd\']");
    this.descriptionEdit = page.locator('#txtCodeTypeDesc');
    this.editCodeIdButton = page.locator('#cmdEditcodetype');
    this.enableApprovalRoutingCheckbox = page.locator('#chkIsVPD');
    this.codeValueDescriptionEdit = page.locator('#txtInqdescription');
  }

  async clickAddNewButton(): Promise<void> {
    // uIMapSettings.maintainCodeValue.uIAddNewButton.click();
  }

  async enterAtPopUpCodeValue(): Promise<void> {
    // uIMapSettings.maintainCodeValue.uIPopUpCodeValueEdit.sendKeys(BaseData.getSettingsModuleValue("CodeValue"));
  }

  async enterAtPopUpDescription(): Promise<void> {
    // uIMapSettings.maintainCodeValue.uIPopUpDescriptionEdit
    // .sendKeys(BaseData.getSettingsModuleValue("Description"));
  }

  async enterAtPopUpDescription1(): Promise<void> {
    // uIMapSettings.maintainCodeValue.uIPopUpDescriptionEdit
    // .sendKeys(BaseData.getSettingsModuleValue("Description1"));
  }

  async clickPopUpCancelButton(): Promise<void> {
    // uIMapSettings.maintainCodeValue.uIPopUpCancelButton.click();
  }

  async selectAtItemType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.maintainCodeValue.uIItemTypeComboBox,
    // BaseData.getSettingsModuleValue("ItemType"));
  }

  async selectAtPanelType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.maintainCodeValue.uIPanelTypeComboBox, BaseData.getSettingsModuleValue("PanelType"));
  }

  async selectAtItemCategory(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.maintainCodeValue.uIItemCategoryComboBox,
    // BaseData.getSettingsModuleValue("ItemCategory"));
  }

  async selectAtInventoryType(): Promise<void> {
    // uIMapSettings.maintainCodeValue.uIInventoryTypeRadArrow.click();
    // Playback.gridLoadThreadWait();
    // objectIdentification.manualIdentify.selectRadControlDropDownCheckBoxes(
    // uIMapSettings.maintainCodeValue.uIInventoryTypeRadComboBox,
    // BaseData.getSettingsModuleValue("InventoryType"));
    // Playback.gridLoadThreadWait();
    // uIMapSettings.maintainCodeValue.uIInventoryTypeRadArrow.click();
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.maintainCodeValue.uIAddButton.click();
  }

  async closeTheScreen(): Promise<void> {
    // Playback.driver.close();
  }

  async enterAtCodeValue(): Promise<void> {
    // Playback.threadWait();
    // Playback.waitForControlReady();
    // uIMapSettings.maintainCodeValue.uICodeValueEdit.sendKeys(BaseData.getSettingsModuleValue("CodeValue"));
  }

  async enterAtDescription(): Promise<void> {
    // uIMapSettings.maintainCodeValue.uICodeValueDesEdit.sendKeys(BaseData.getSettingsModuleValue("Description"));
  }

  async clickSearchButton(): Promise<void> {
    // uIMapSettings.maintainCodeValue.uISearchButton.click();
    // Playback.threadWait(2000);
  }

  async verifyAtCodeValueInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("CodeValue"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.maintainCodeValue.uIMaintainCodeValueTable,
    // BaseData.getSettingsModuleValue("CodeValue"))
    // .getText());
  }

  async clickSystemCheckBox(): Promise<void> {
    // uIMapSettings.maintainCodeValue.uISystemCheckBox.click();
  }

  async enterSortOrder(): Promise<void> {
    // uIMapSettings.maintainCodeValue.uISortOrderEdit.sendKeys(String.valueOf(Randomized.getRandomNumber(1)));
  }

  async clickRowByCodeValue(rowIndex: number): Promise<void> {
    // WebElement element = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.maintainCodeValue.uIMaintainCodeValueTable, "Code Value", rowIndex);
    // element.click();
  }

  async clickRowByAtCodeValue(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.maintainCodeValue.uIMaintainCodeValueTable,
    // BaseData.getSettingsModuleValue("CodeValue"));
  }

  async clickEnableFeesTabCheckbox(): Promise<void> {
    // uIMapSettings.maintainCodeValue.uIEnableFeesTabCheckbox.click();
  }

  async enterAtURL(): Promise<void> {
    // uIMapSettings.maintainCodeValue.uIURLEdit.sendKeys(BaseData.getSettingsModuleValue("URL"));
  }

  async selectAsGooglePlus(): Promise<void> {
    // uIMapSettings.maintainCodeValue.uISocialIconInputComboBox.click();
    // // uIMapSettings.sharedCodes.uISocialIconDropdownList.sendKeys("google-plus");
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect(
    // uIMapSettings.maintainCodeValue.uISocialIconDropdownList, "google-plus");
  }

  async verifyAtCodedID(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("CodeID"),
    // uIMapSettings.maintainCodeValue.uICodeIDEdit.getAttribute("value"));
  }

  async verifyAtCodeValueDescription(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Description"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.maintainCodeValue.uIMaintainCodeValueTable, "Code Value Description",
    // rowIndex));
  }

  async verifyAtCodeValueDescription1(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Description1"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.maintainCodeValue.uIMaintainCodeValueTable, "Code Value Description",
    // rowIndex));
  }

  async verifySystemCheckBoxChecked(rowIndex: number): Promise<void> {
    // WebElement SystemCheckBox = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.maintainCodeValue.uIMaintainCodeValueTable, "System", rowIndex)
    // .findElement(By.tagName("img"));
    // // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify.getChekboxCheckedStatus(SystemCheckBox));
    // verify.ExpectedValueIsTrue(SystemCheckBox.getAttribute("alt").contains("Checked"));
  }

  async verifyDivisionEnabled(): Promise<void> {
    // Playback.gridLoadThreadWait();
    // verify.ExpectedValueIsTrue(uIMapSettings.maintainCodeValue.uIDivisionComboBox.isEnabled());
  }

  async verifyDivisionDisabled(): Promise<void> {
    // Playback.gridLoadThreadWait();
    // verify.ExpectedValueIsTrue(uIMapSettings.maintainCodeValue.uIDivisionComboBox.getAttribute("class")
    // .contains("SELECTInActive"));
  }

  async verifyCodeIDAs1105(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1105",
    // uIMapSettings.maintainCodeValue.uICodeIDEdit.getAttribute("value"));
  }

  async verifyCodeIDAs2016(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("2016",
    // uIMapSettings.maintainCodeValue.uICodeIDEdit.getAttribute("value"));
  }

  async verifyCodeIDAs2001(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("2001",
    // uIMapSettings.maintainCodeValue.uICodeIDEdit.getAttribute("value"));
  }

  async verifyCodeIDAs2006(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("2006",
    // uIMapSettings.maintainCodeValue.uICodeIDEdit.getAttribute("value"));
  }

  async verifyCodeIDAs3026(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("3026",
    // uIMapSettings.maintainCodeValue.uICodeIDEdit.getAttribute("value"));
  }

  async verifyCodeIDAs3021(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("3021",
    // uIMapSettings.maintainCodeValue.uICodeIDEdit.getAttribute("value"));
  }

  async selectJurisAsBL(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.maintainCodeValue.uIJurisComboBox,
    // "BL - BigLake Police Department");
  }

  async selectJurisAsBE(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.maintainCodeValue.uIJurisComboBox,
    // "BE - Becker Police Department");
  }

  async enterAtCodeValue1(): Promise<void> {
    // Playback.threadWait();
    // Playback.waitForControlReady();
    // uIMapSettings.maintainCodeValue.uICodeValueEdit.sendKeys(BaseData.getSettingsModuleValue("CodeValue1"));
  }

  async enterAtCodeValue2(): Promise<void> {
    // Playback.threadWait();
    // Playback.waitForControlReady();
    // uIMapSettings.maintainCodeValue.uICodeValueEdit.sendKeys(BaseData.getSettingsModuleValue("CodeValue2"));
  }

  async verifyAtCodeValue1InGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("CodeValue1"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.maintainCodeValue.uIMaintainCodeValueTable, "Code Value",
    // rowIndex)
    // .getText());
  }

  async selectJurisAsSO(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.maintainCodeValue.uIJurisComboBox,
    // "SO - Phoenix Police Department");
  }

  async verifyAtCodeValue2InGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("CodeValue2"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.maintainCodeValue.uIMaintainCodeValueTable, "Code Value",
    // rowIndex)
    // .getText());
  }

  async verifyAtShowOnWhiteboardCheckboxLabel(): Promise<void> {
    // String text = uIMapSettings.maintainCodeValue.uIShowOnWhiteboardLabel.getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("Title")));
  }

  async verifyJurisEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.coded.uIJurisComboBox.isDisplayed());
    // verify.ExpectedValueIsTrue(uIMapSettings.coded.uIJurisComboBox.isEnabled());
  }

  async verifyJurisDisabled(): Promise<void> {
    // String attribute = uIMapSettings.coded.uIJurisComboBox.getAttribute("disabled");
    // verify.ExpectedPropertyValueIsEqual(attribute, "true");
  }

  async verifyAtCodedID1(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("CodeID1"),
    // uIMapSettings.maintainCodeValue.uICodeIDEdit.getAttribute("value"));
  }

  async selectAtCodeValueDescription(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.maintainCodeValue.uISharedCodesTable,
    // BaseData.getSettingsModuleValue("CodeValueDescription"));
  }

  async enterAtSortOrder(): Promise<void> {
    // uIMapSettings.maintainCodeValue.uISortOrderEdit.sendKeys("1");
  }

  async clickUpdate(): Promise<void> {
    // uIMapSettings.maintainCodeValue.uIUpdateButton.click();
  }

  async verifyAtCodeValue1InGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("CodeValue1"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.maintainCodeValue.uIMaintainCodeValueTable, "Code Value", 0)
    // .getText());
  }

  async verifyAtPopUpCodeValue(): Promise<void> {
    // String codeValue = uIMapSettings.maintainCodeValue.uIPopUpCodeValueEdit.getAttribute("value");
    // int length = codeValue.length();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("CodeValue1"), codeValue);
    // verify.ExpectedValueIsTrue(length == 3);
  }

  async verifyAtDescription(): Promise<void> {
    // String attribute = uIMapSettings.maintainCodeValue.uIDescriptionEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute, BaseData.getSettingsModuleValue("Description"));
  }

  async clickEditCodeID(): Promise<void> {
    // uIMapSettings.maintainCodeValue.uIEditCodeIdButton.click();
  }

  async selectAtDivision(JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.maintainCodeValue.uIDivisionComboBox,
    // BaseData.getSettingsModuleValue("Division" + JsonKeyIndex));
  }

  async checkEnableApprovalRoutingCheckbox(): Promise<void> {
    // uIMapSettings.maintainCodeValue.uIEnableApprovalRoutingCheckbox.click();
  }

  async getFleetCodeValueListInGrid(): Promise<string[]> {
    // List<String> categoryCells = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.maintainCodeValue.uIMaintainCodeValueTable, "Category");
    // List<String> descriptionCells = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.maintainCodeValue.uIMaintainCodeValueTable, "Code Value Description");
    // List<String> fleetDescriptions = new ArrayList<>();
    // for (int i = 0; i < categoryCells.size(); i++) {
    // String categoryText = categoryCells.get(i).trim();
    // if (categoryText.equalsIgnoreCase("ASSET")) {
    // String descriptionText = descriptionCells.get(i).trim();
    // System.out.println("Asset Description: " + descriptionText);
    // fleetDescriptions.add(descriptionText);
    // System.out.println("All Asset Descriptions: " + fleetDescriptions);
    // return fleetDescriptions;
  }

  async clearCodeValue(): Promise<void> {
    // uIMapSettings.maintainCodeValue.uICodeValueEdit.clear();
  }

  async clearDescription(): Promise<void> {
    // uIMapSettings.maintainCodeValue.uICodeValueDescriptionEdit.clear();
  }

  async enterAtCodeValueDescription(): Promise<void> {
    // uIMapSettings.maintainCodeValue.uICodeValueDescriptionEdit.sendKeys(BaseData.getSettingsModuleValue("Description"));
  }

  async getAssetCodeValueListInGrid(): Promise<string[]> {
    // List<String> categoryCells = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.maintainCodeValue.uIMaintainCodeValueTable, "Category");
    // List<String> descriptionCells = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.maintainCodeValue.uIMaintainCodeValueTable, "Code Value Description");
    // List<String> assestDescriptions = new ArrayList<>();
    // for (int i = 0; i < categoryCells.size(); i++) {
    // String categoryText = categoryCells.get(i).trim();
    // if (categoryText.equalsIgnoreCase("ASSET")) {
    // String descriptionText = descriptionCells.get(i).trim();
    // System.out.println("Asset Description: " + descriptionText);
    // assestDescriptions.add(descriptionText);
    // System.out.println("All Asset Descriptions: " + assestDescriptions);
    // return assestDescriptions;
  }

}

export class JailCellPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly jailCellResultTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.jailCellResultTable = page.locator('#grdJailCell');
    this.addNewButton = page.locator();
  }

  async clickAddNew(): Promise<void> {
    // uIMapSettings.jailCell.uIAddNewButton.click();
  }

  async verifyCellNoExistsInGridColumn(): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.jailCell.uIJailCellResultTable, "Cell#")
    // .contains(BaseData.getSettingsModuleValue("CellNo")));
  }

  async verifyNotesExistsInGridColumn(): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.jailCell.uIJailCellResultTable, "Notes")
    // .contains(BaseData.getSettingsModuleValue("Notes")));
  }

  async getColumnvalues(): Promise<string[]> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.jailCell.uIJailCellResultTable, BaseData.getNamesModuleValue("ColumnName"));
    // System.out.println(gridTableColumnValues);
    // return gridTableColumnValues;
  }

}

export class JailCellHelpWindowPage {
  readonly page: Page;
  readonly jailCellHelpResultTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.jailCellHelpResultTable = page.locator('#grdHelpCell');
  }

  async verifyRowByAtNotes(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Notes"),
    // objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.jailCell.uIJailCellResultTable, "Notes", 3));
  }

  async closeJailCellPopupScreen(): Promise<void> {
    // uIMapSettings.jailCellHelpWindow.driver.close();
  }

  async getColumnvalues(): Promise<string[]> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.jailCellHelpWindow.uIJailCellHelpResultTable,
    // BaseData.getNamesModuleValue("ColumnName"));
    // System.out.println(gridTableColumnValues);
    // return gridTableColumnValues;
  }

  async verifyCellValuesAreEqual(value1: string[], value2: string[]): Promise<void> {
    // for (String list : value1) {
    // verify.ExpectedValueIsTrue(value1.containsAll(value2));
  }

}

export class JailCellEntryPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly saveandCloseButton: Locator;
  readonly resetButton: Locator;
  readonly facilityComboBox: Locator;
  readonly cellNoEdit: Locator;
  readonly cellTypeComboBox: Locator;
  readonly capacityEdit: Locator;
  readonly cameraComboBox: Locator;
  readonly notesEdit: Locator;
  readonly inactiveCheckBox: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly ibarJailItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdSave');
    this.saveandCloseButton = page.locator('#cmdSaveNClose');
    this.resetButton = page.locator('#cmdRefresh');
    this.facilityComboBox = page.locator('#cddFacility_DropDown');
    this.cellNoEdit = page.locator('#txtUCName');
    this.cellTypeComboBox = page.locator('#ddlCellType_DropDown');
    this.capacityEdit = page.locator('#txtCapacity');
    this.cameraComboBox = page.locator('#ddlCamera');
    this.notesEdit = page.locator('#txtNotes');
    this.inactiveCheckBox = page.locator('#chkInactive');
    this.bottomLeftSideStatusBar = page.locator("//div[@id=\'tab0\']//td[@class = \'statusBar\']/table/tbody/tr/td/b");
    this.ibarJailItem = page.locator('#barJailItem');
  }

  async selectAtFacility(): Promise<void> {
    // uIMapSettings.jailCellEntry.uIFacilityComboBox.sendKeys(BaseData.getSettingsModuleValue("Facility"));
  }

  async enterAtCellNo(): Promise<void> {
    // uIMapSettings.jailCellEntry.uICellNoEdit.sendKeys(BaseData.getSettingsModuleValue("CellNo"));
  }

  async enterCellNo(): Promise<void> {
    // uIMapSettings.jailCellEntry.uICellNoEdit.sendKeys(randomized.getRandomPhoneNumbers());
  }

  async selectAtCellType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.jailCellEntry.uICellTypeComboBox,
    // BaseData.getSettingsModuleValue("CellType"));
  }

  async selectCellType(): Promise<void> {
    // objectIdentification.randomIdentify.selectDropDownOption(uIMapSettings.jailCellEntry.uICellTypeComboBox);
  }

  async enterAtCapacity(): Promise<void> {
    // uIMapSettings.jailCellEntry.uICapacityEdit.sendKeys(BaseData.getSettingsModuleValue("Capacity"));
  }

  async enterAtNotes(): Promise<void> {
    // uIMapSettings.jailCellEntry.uINotesEdit.sendKeys(BaseData.getSettingsModuleValue("Notes"));
  }

  async clickSaveButton(): Promise<void> {
    // uIMapSettings.jailCellEntry.uISaveButton.click();
  }

  async saveScreen(): Promise<void> {
    // uIMapSettings.jailCellEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async saveNCloseScreen(): Promise<void> {
    // uIMapSettings.jailCellEntry.uISaveandCloseButton.click();
    // popup.confirm.yes();
  }

  async closeScreen(): Promise<void> {
    // uIMapSettings.jailCellEntry.driver.close();
  }

  async verifyFooterStatusMessage(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.jailCellEntry.uIBottomLeftSideStatusBar.getText()
    // .contains("1002 - Addition Successful"));
  }

  async verifyJailCellScreenDisplayed(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("AssignCellNo"),
    // uIMapSettings.jailCellEntry.uICellNoEdit.getAttribute("value"));
  }

  async verifyBarcodeIsDisplayed(): Promise<void> {
    // uIMapSettings.jailCellEntry.uIIbarJailItem.isDisplayed();
  }

  async verifyUpdateSuccessfullMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1003 - Update Successful",
    // uIMapSettings.jailCellEntry.uIBottomLeftSideStatusBar.getText());
  }

  async clickResetButton(): Promise<void> {
    // uIMapSettings.jailCellEntry.uIResetButton.click();
  }

  async verifyAtCellNo(): Promise<void> {
    // String text = uIMapSettings.jailCellEntry.uICellNoEdit.getAttribute("value");
    // System.out.println(text);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getNamesModuleValue("CellNo"), text);
  }

  async verifyCellNoIsEmpty(): Promise<void> {
    // String text = uIMapSettings.jailCellEntry.uICellNoEdit.getAttribute("value");
    // System.out.println(text);
    // verify.ExpectedValueIsTrue(text.isBlank() || text.isEmpty());
  }

  async verifyNotesIsEmpty(): Promise<void> {
    // String text = uIMapSettings.jailCellEntry.uINotesEdit.getAttribute("value");
    // System.out.println(text);
    // verify.ExpectedValueIsTrue(text.isBlank() || text.isEmpty());
  }

  async selectAtCameraName(): Promise<void> {
    // Playback.threadWait();
    // uIMapSettings.jailCellEntry.uICameraComboBox.click();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.jailCellEntry.uICameraComboBox,
    // BaseData.getSettingsModuleValue("CameraName"));
  }

  async verifyCameraNameISEmpty(): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.jailCellEntry.uICameraComboBox);
    // System.out.println(dropDownSelectedItem);
    // verify.ExpectedPropertyValueIsEqual("--", dropDownSelectedItem);
  }

}

export class RepositoryEntryPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly saveandCloseButton: Locator;
  readonly resetButton: Locator;
  readonly repositoryIDEdit: Locator;
  readonly defaultNameEdit: Locator;
  readonly customNameEdit: Locator;
  readonly fieldUsageComboBox: Locator;
  readonly bottomStatus: Locator;
  readonly helpTab: Locator;
  readonly showInMenuCheckBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdSave');
    this.saveandCloseButton = page.locator('#cmdSaveNClose');
    this.resetButton = page.locator('#cmdRefresh');
    this.repositoryIDEdit = page.locator('#txtRepositoryID');
    this.defaultNameEdit = page.locator('#txtDefaultName');
    this.customNameEdit = page.locator('#txtCustomName');
    this.fieldUsageComboBox = page.locator('#cddFieldUsage_DropDown');
    this.bottomStatus = page.locator("//td[@class=\'statusBar\']//b");
    this.helpTab = page.locator("//span[text()=\'Help\']");
    this.showInMenuCheckBox = page.locator('#tabRepo_tmpl0_usrRepoMain1_chkIsMenu');
  }

  async selectFieldUsageAsHide(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.repositoryEntry.uIFieldUsageComboBox,
    // "Hide");
  }

  async selectFieldUsageAsShow(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.repositoryEntry.uIFieldUsageComboBox,
    // "Show");
  }

  async selectFieldUsageAsMandatory(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.repositoryEntry.uIFieldUsageComboBox,
    // "Mandatory");
  }

  async saveScreen(): Promise<void> {
    // uIMapSettings.repositoryEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async saveNClose(): Promise<void> {
    // uIMapSettings.repositoryEntry.uISaveandCloseButton.click();
    // popup.confirm.yes();
  }

  async closeScreen(): Promise<void> {
    // uIMapSettings.repositoryEntry.driver.close();
  }

  async enterWantChargeCustomName(): Promise<void> {
    // uIMapSettings.repositoryEntry.uICustomNameEdit.sendKeys("Charge");
  }

  async enterAtCustomName(): Promise<void> {
    // uIMapSettings.repositoryEntry.uICustomNameEdit.sendKeys(BaseData.getSettingsModuleValue("CustomName"));
  }

  async enterAtCustomName1(): Promise<void> {
    // uIMapSettings.repositoryEntry.uICustomNameEdit.sendKeys(BaseData.getSettingsModuleValue("CustomName1"));
  }

  async clearCustomName(): Promise<void> {
    // uIMapSettings.repositoryEntry.uICustomNameEdit.click();
    // uIMapSettings.repositoryEntry.uICustomNameEdit.clear();
  }

  async enterSectionAsSEC(): Promise<void> {
    // uIMapSettings.repositoryEntry.uICustomNameEdit.sendKeys("SEC");
  }

  async enterDivisionAsDIV(): Promise<void> {
    // uIMapSettings.repositoryEntry.uICustomNameEdit.sendKeys("DIV");
  }

  async enterSquadAsSQ(): Promise<void> {
    // uIMapSettings.repositoryEntry.uICustomNameEdit.sendKeys("SQ");
  }

  async enterAtCustomName2(): Promise<void> {
    // uIMapSettings.repositoryEntry.uICustomNameEdit.sendKeys(BaseData.getSettingsModuleValue("CustomName2"));
  }

  async verifyAtRepositoryID(): Promise<void> {
    // String attribute = uIMapSettings.repositoryEntry.uIRepositoryIDEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(attribute.contains(BaseData.getSettingsModuleValue("RepositoryID")));
  }

  async verifyAtDefaultName(): Promise<void> {
    // String attribute = uIMapSettings.repositoryEntry.uIDefaultNameEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(attribute.contains(BaseData.getSettingsModuleValue("DefaultName")));
  }

  async verifyUpdateSuccessFullMessage(): Promise<void> {
    // String BottomMessage = uIMapSettings.repositoryEntry.uIBottomStatus.getText();
    // verify.ExpectedPropertyValueIsEqual(BottomMessage, "1003 - Update Successful");
  }

  async verifyAdditionSuccessFullMessage(): Promise<void> {
    // String BottomMessage = uIMapSettings.repositoryEntry.uIBottomStatus.getText();
    // verify.ExpectedPropertyValueIsEqual(BottomMessage, "1002 - Addition Successful");
  }

  async VerifyAtCustomName(): Promise<void> {
    // String attribute = uIMapSettings.repositoryEntry.uICustomNameEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(attribute.contains(BaseData.getSettingsModuleValue("CustomName")));
  }

  async verifyFieldUsageHasShowHideMandatoryValues(): Promise<void> {
    // List<String> fieldUsage = objectIdentification.manualIdentify
    // .getDropDownValues(uIMapSettings.repositoryEntry.uIFieldUsageComboBox);
    // verify.ExpectedValueIsTrue(
    // fieldUsage.contains("Show") || fieldUsage.contains("Hide") || fieldUsage.contains("Mandatory"));
  }

  async switchToHelpTab(): Promise<void> {
    // uIMapSettings.repositoryEntry.uIHelpTab.click();
    // Playback.controlReadyThreadWait();
    // objectIdentification.windowHandle.switchToFrame("frmTextMgrEx.aspx?");
  }

}

export class HelpTabPage {
  readonly page: Page;
  readonly richTextBox: Locator;
  readonly dictateUsingMobile: Locator;

  constructor(page: Page) {
    this.page = page;
    this.richTextBox = page.locator('#ctrlUsrKPITxtEdit_rteKPITxt');
    this.dictateUsingMobile = page.locator("//span[text()=\'Dictate Using Mobile\']");
  }

  async verifyRichTextBoxIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapSettings.repositoryEntry.helpTab.uIRichTextBox.isEnabled(),
    // "Rich Text Box is Enabled -->");
  }

  async verifyDefaultNameIsDisabled(): Promise<void> {
    // String enabled = uIMapSettings.repositoryEntry.uIDefaultNameEdit.getAttribute("readonly");
    // verify.ExpectedPropertyValueIsEqual(enabled, "true");
  }

  async verifyShowInMenuIsChecked(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.repositoryEntry.uIShowInMenuCheckBox.isSelected());
  }

  async verifyBottomMessageIsNull(): Promise<void> {
    // verify.ExpectedValueIsFalse(
    // objectIdentification.manualIdentify.controlExist(uIMapSettings.repositoryEntry.uIBottomStatus));
  }

  async enterAtCustomName(JsonKeyIndex: number): Promise<void> {
    // uIMapSettings.repositoryEntry.uICustomNameEdit.sendKeys(BaseData.getSettingsModuleValue("CustomName"+JsonKeyIndex));
  }

}

export class RoleEntryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyAtRoleName(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("RoleName"),
    // uIMapSettings.rolesEntry.uIRoleNameEdit.getAttribute("value"));
  }

  async close(): Promise<void> {
    // uIMapSettings.rolesEntry.driver.close();
  }

}

export class CustomFieldsScreenPage {
  readonly page: Page;
  readonly screenIDEdit: Locator;
  readonly customTableEdit: Locator;
  readonly tabNameEdit: Locator;
  readonly previewButton: Locator;
  readonly addNewFieldButton: Locator;
  readonly saveButton: Locator;
  readonly saveandCloseButton: Locator;
  readonly resetButton: Locator;
  readonly publishButton: Locator;
  readonly customFieldResultTable: Locator;
  readonly popupScreenIDEdit: Locator;
  readonly popupCustomTableEdit: Locator;
  readonly popupDisplayNameEdit: Locator;
  readonly popupColumnNameEdit: Locator;
  readonly popupDescriptionNameEdit: Locator;
  readonly popupMandatoryCheckBox: Locator;
  readonly popupDataTypeComboBox: Locator;
  readonly popupMaxLengthEdit: Locator;
  readonly popupFormatComboBox: Locator;
  readonly popupGroupNameEdit: Locator;
  readonly popupOneColumnRadioButton: Locator;
  readonly popupTwoColumnRadioButton: Locator;
  readonly popupLineNumberWithinGroupEdit: Locator;
  readonly popupColumnOneRadioButton: Locator;
  readonly popupTwoRadioButton: Locator;
  readonly popupAddButton: Locator;
  readonly popupCancelButton: Locator;
  readonly popupDeleteButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly screenIDDescription: Locator;
  readonly customFieldResultTable1: Locator;
  readonly codeIDEdit: Locator;
  readonly customTableNameText: Locator;
  readonly fieldNameEdit: Locator;
  readonly addButton: Locator;
  readonly customTable: Locator;
  readonly printIcon: Locator;
  readonly multiLineOfLinesEdit: Locator;
  readonly popUpMultiLineMaximumLengthEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.screenIDEdit = page.locator('#lupScreenID_CodeValue');
    this.customTableEdit = page.locator('#txtCustomTableName');
    this.tabNameEdit = page.locator('#txtTableName');
    this.previewButton = page.locator('#btnReview');
    this.addNewFieldButton = page.locator('#btnAddNew');
    this.saveButton = page.locator('#cmdSave');
    this.saveandCloseButton = page.locator('#cmdSaveNClose');
    this.resetButton = page.locator('#cmdRefresh');
    this.publishButton = page.locator('#btnPublish');
    this.customFieldResultTable = page.locator('#grdCustomConfig');
    this.popupScreenIDEdit = page.locator('#lupPanelScreenID_CodeValue');
    this.popupCustomTableEdit = page.locator('#txtPanelCustomTableName');
    this.popupDisplayNameEdit = page.locator('#txtDisplayName');
    this.popupColumnNameEdit = page.locator('#txtColumnName');
    this.popupDescriptionNameEdit = page.locator('#txtDescription');
    this.popupMandatoryCheckBox = page.locator('#chkMandatory');
    this.popupDataTypeComboBox = page.locator('#cddDateType');
    this.popupMaxLengthEdit = page.locator('#txtSingleMax');
    this.popupFormatComboBox = page.locator('#cddFormat');
    this.popupGroupNameEdit = page.locator('#txtGroupName');
    this.popupOneColumnRadioButton = page.locator('#rdoOneColumn');
    this.popupTwoColumnRadioButton = page.locator('#rdoTwoColumn');
    this.popupLineNumberWithinGroupEdit = page.locator('#txtGrp');
    this.popupColumnOneRadioButton = page.locator('#rdoOne');
    this.popupTwoRadioButton = page.locator('#rdoTwo');
    this.popupAddButton = page.locator('#cmdOk');
    this.popupCancelButton = page.locator('#cmdCancel');
    this.popupDeleteButton = page.locator('#btnDelete');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.screenIDDescription = page.locator('#lupScreenID_CodeDescription');
    this.customFieldResultTable1 = page.locator('#grdCustomConfig_ctl00_automationteamwork_0');
    this.codeIDEdit = page.locator('#cddLookup_CodeValue');
    this.customTableNameText = page.locator('#lblCustomTabName');
    this.fieldNameEdit = page.locator('#txtCustomField');
    this.addButton = page.locator('#cmdAdd');
    this.customTable = page.locator('#grdRepLink');
    this.printIcon = page.locator('#cmdPrint');
    this.multiLineOfLinesEdit = page.locator('#txtMultiLines');
    this.popUpMultiLineMaximumLengthEdit = page.locator('#txtMultiMax');
  }

  async verifyScreenID(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getNamesModuleValue("ScreenID"),
    // uIMapSettings.customFieldsScreen.uIScreenIDEdit.getAttribute("value"));
  }

  async verifyScreenIDDescription(): Promise<void> {
    // String text = uIMapSettings.customFieldsScreen.uIScreenIDDescription.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getSettingsModuleValue("ScreenIDDescription"));
  }

  async enterAtCustomTable(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uICustomTableEdit.sendKeys(BaseData.getSettingsModuleValue("TableName"));
  }

  async enterAtTabName(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uITabNameEdit.sendKeys(BaseData.getSettingsModuleValue("TabName"));
  }

  async saveScreen(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uISaveButton.click();
    // popup.confirm.yesWithExpectedMessage("(3) Do You Want To Save All Of The Entered Details?");
  }

  async closeTheScreen(): Promise<void> {
    // Playback.driver.close();
  }

  async clickAddNewFieldButton(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIAddNewFieldButton.click();
  }

  async enterDisplayName(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIPopupDisplayNameEdit.sendKeys("Automation");
  }

  async enterColumnName(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIPopupColumnNameEdit.sendKeys("Team");
  }

  async enterDescription(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIPopupDescriptionNameEdit.sendKeys(
    // "Automation or automatic control, is the use of various control systems for operating equipment such as machinery, processes in factories, boilers and heat treating ovens, switching on telephone networks");
  }

  async selectDataTypeAsSingleLine(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.customFieldsScreen.uIPopupDataTypeComboBox, "Single Line or Text");
  }

  async selectFormat(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapSettings.customFieldsScreen.uIPopupFormatComboBox);
  }

  async selectFormatAsText(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapSettings.customFieldsScreen.uIPopupFormatComboBox, "Text");
  }

  async enterMaximumLength(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIPopupMaxLengthEdit.sendKeys(Randomized.randomNumberString(2));
  }

  async enterAtMaximumLength(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIPopupMaxLengthEdit
    // .sendKeys(BaseData.getSettingsModuleValue("MaximumLength"));
  }

  async enterGroupName(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIPopupGroupNameEdit.sendKeys("AutoMation TeamWork");
  }

  async selectNumberofColumnRadioButton(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIPopupOneColumnRadioButton.click();
  }

  async clickTwoColumnRadioButton(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIPopupTwoColumnRadioButton.click();
  }

  async enterLineNumberWithinGroup(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIPopupLineNumberWithinGroupEdit
    // .sendKeys(String.valueOf(Randomized.getRandomNumber()));
  }

  async selectColumnRadioButton(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIPopupTwoRadioButton.click();
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIPopupAddButton.click();
    // Playback.gridLoadThreadWait();
  }

  async verifyDisplayNameInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(objectIdentification.manualIdentify
    // .getGridTableRow(uIMapSettings.customFieldsScreen.uICustomFieldResultTable, rowIndex).getText(),
    // "Automation TeamWork");
  }

  async verifyDataTypeAsSingleLineOrText(rowIndex: number): Promise<void> {
    // //			WebElement uiTable = uIMapSettings.customFieldsScreen.uICustomFieldResultTable
    // //					.findElement(By.xpath("//div[@id='grdCustomConfig_ctl00_automationteamwork_0']"));
    // //			String expected = objectIdentification.manualIdentify.get(uIMapSettings.customFieldsScreen.uICustomFieldResultTable, "DataType", rowIndex);
    // //			verify.ExpectedPropertyValueIsEqual(expected, "Single Line of Text");
    // // uIMapSettings.customFieldsScreen.uICustomFieldResultTable
  }

  async verifyAtLengthInGrid(): Promise<void> {
    // String value = BaseData.getSettingsModuleValue("MaximumLength");
    // WebElement table = Playback.driver
    // .findElement(By.xpath("//div[@id='grdCustomConfig_ctl00_" + value + "_0']"));
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(table,
    // BaseData.getSettingsModuleValue("GroupName"));
    // verify.ExpectedValueIsTrue(gridRowByCellInnerText.getText().contains(value));
  }

  async verifyBottomStatusMessage(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.customFieldsScreen.uIBottomLeftSideStatusBar.getText()
    // .contains("1002 - Addition Successful"));
  }

  async verifyAtDataTypeDisplayedInGreenColorByGroupNameInGrid(): Promise<void> {
    // String value = BaseData.getSettingsModuleValue("GroupName");
    // WebElement table = Playback.driver
    // .findElement(By.xpath("//div[@id='grdCustomConfig_ctl00_" + value + "_0']"));
    // String actualColor = "rgba(0, 128, 0, 1)";
    // WebElement row = objectIdentification.manualIdentify.getGridRowByCellInnerText(table,
    // BaseData.getSettingsModuleValue("DataType"));
    // String cssValue = row.getCssValue("color");
    // System.out.println(cssValue);
    // verify.ExpectedPropertyValueIsEqual(cssValue, actualColor);
  }

  async clickRepublishButton(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIPublishButton.click();
    // Playback.pageLoadThreadWait();
  }

  async verifyRepublishButtonDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapSettings.customFieldsScreen.uIPublishButton.getAttribute("disabled").contains("true"));
  }

  async verifyAtDataTypeInGrid(): Promise<void> {
    // String value = BaseData.getSettingsModuleValue("GroupName");
    // WebElement table = Playback.driver
    // .findElement(By.xpath("//div[@id='grdCustomConfig_ctl00_" + value + "_0']"));
    // //			String tablevalue = Playback.driver.findElement(By.xpath("//div[@id='grdCustomConfig_ctl00_"+value+"_0']")).getText();
    // //			System.out.println(tablevalue);
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(table,
    // BaseData.getSettingsModuleValue("DataType"));
    // verify.ExpectedValueIsTrue(
    // gridRowByCellInnerText.getText().contains(BaseData.getSettingsModuleValue("DataType")));
  }

  async enterAtGroupName(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIPopupGroupNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("GroupName"));
  }

  async selectAtDataType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.customFieldsScreen.uIPopupDataTypeComboBox,
    // BaseData.getSettingsModuleValue("DataType"));
  }

  async enterAtCodeID(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uICodeIDEdit.sendKeys(BaseData.getSettingsModuleValue("CodeID"));
    // uIMapSettings.customFieldsScreen.uICodeIDEdit.sendKeys(Keys.TAB);
  }

  async verifyCustomTableNameText(): Promise<void> {
    // System.out.println(uIMapSettings.customFieldsScreen.uICustomTableNameText.getText());
    // verify.ExpectedPropertyValueIsEqual("Custom Table Name",
    // uIMapSettings.customFieldsScreen.uICustomTableNameText.getText());
  }

  async verifyAtTableName(): Promise<void> {
    // System.out.println(uIMapSettings.customFieldsScreen.uICustomTableEdit.getAttribute("value"));
    // verify.ExpectedPropertyValueIsEqual("Cus" + BaseData.getSettingsModuleValue("TableName") + "_2210",
    // uIMapSettings.customFieldsScreen.uICustomTableEdit.getAttribute("value"));
  }

  async clickPreviewButton(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIPreviewButton.click();
  }

  async verify4013EnterAtLeastOneRecordAcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(4013) Enter at least one record into the grid");
  }

  async enterAtFieldName(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIFieldNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("FieldName"));
  }

  async clickAdd(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIAddButton.click();
  }

  async verifyAtFieldNameInGrid(): Promise<void> {
    // String FieldName = objectIdentification.manualIdentify.getGridCell(uIMapSettings.customFieldsScreen.uICustomTable, BaseData.getSettingsModuleValue("FieldName")).getText();
    // verify.ExpectedPropertyValueIsEqual( BaseData.getSettingsModuleValue("FieldName"),FieldName,"Field Name is not same as expected -->");
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIPrintIcon.click();
  }

  async enterAtMultiLineOfLines(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIMultiLineOfLinesEdit.sendKeys(BaseData.getPersonnelModuleValue("OfLines"));
  }

  async clickColumnOneRadioButton(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIPopupColumnOneRadioButton.click();
  }

  async enterAtDisplayName(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIPopupDisplayNameEdit.sendKeys(BaseData.getSettingsModuleValue("DisplayName"));
  }

  async enterAtColumnName(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIPopupColumnNameEdit.sendKeys(BaseData.getSettingsModuleValue("ColumnName"));
  }

  async enterAtDescription(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIPopupDescriptionNameEdit.sendKeys(BaseData.getSettingsModuleValue("Description"));
  }

  async enterAtMultiMaximumLength(): Promise<void> {
    // uIMapSettings.customFieldsScreen.uIPopUpMultiLineMaximumLengthEdit
    // .sendKeys(BaseData.getSettingsModuleValue("MultiMaximumLength"));
  }

  async verifyAtDisplayNameInTheGrid(): Promise<void> {
    // String findElement = Playback.driver.findElement(By.xpath("//div[@id='grdCustomConfig_ctl00_inquiry_0']")).getText();
    // //objectIdentification.manualIdentify.getGridCell(findElement,BaseData.getSettingsModuleValue("DisplayName"))
  }

}

export class RolesPage {
  readonly page: Page;
  readonly rolesResultTable: Locator;
  readonly roleNameEdit: Locator;
  readonly searchButton: Locator;
  readonly includeInactiveCheckBox: Locator;
  readonly addNewButton: Locator;
  readonly copyRoleButton: Locator;
  readonly linkedRoleButton: Locator;
  readonly modulePermissionsButton: Locator;
  readonly pFAllowedButton: Locator;
  readonly jurisDropdown: Locator;
  readonly copyToSameJurisButton: Locator;
  readonly copyToMultiJurisButton: Locator;
  readonly containerCopyToSameJurisButton: Locator;
  readonly linkedRoleColumnHeader: Locator;
  readonly descriptionColumnHeader: Locator;
  readonly linkedRoleIconInGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rolesResultTable = page.locator('#grdRoleType');
    this.roleNameEdit = page.locator('#txtRoleName');
    this.searchButton = page.locator('#cmdSearch');
    this.includeInactiveCheckBox = page.locator('#chkIsActive');
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.copyRoleButton = page.locator("//span[contains(text(),\'Copy Role\')]");
    this.linkedRoleButton = page.locator("//span[contains(text(),\'Linked Role\')]");
    this.modulePermissionsButton = page.locator("//span[contains(text(),\'ModulePermissions\')]");
    this.pFAllowedButton = page.locator("//span[contains(text(),\'PF Allowed\')]");
    this.jurisDropdown = page.locator('#lstJuris');
    this.copyToSameJurisButton = page.locator("//span[contains(text(),\'Copy To Same Juris\')]");
    this.copyToMultiJurisButton = page.locator("//span[contains(text(),\'Copy To Multi Juris\')]");
    this.containerCopyToSameJurisButton = page.locator("//li[contains(@class,\'VerticalRoot\')]/a/span[contains(text(),\'Copy To Same Juris\')]");
    this.linkedRoleColumnHeader = page.locator("//th[text()=\'Linked Role\']");
    this.descriptionColumnHeader = page.locator("//th[text()=\'Description\']");
    this.linkedRoleIconInGrid = page.locator("//img[contains(@id,\'grdRoleType_it7\')]");
  }

  async clickSearchButton(): Promise<void> {
    // uIMapSettings.roles.uISearchButton.click();
  }

  async verifyAtRoleNameInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("RoleName"),
    // objectIdentification.manualIdentify.getGridCell(uIMapSettings.roles.uIRolesResultTable,
    // BaseData.getSettingsModuleValue("RoleName")).getText());
  }

  async rightClickByAtRoleName(): Promise<void> {
    // Actions action = new Actions(Playback.driver);
    // WebElement row = objectIdentification.manualIdentify.getGridCell(uIMapSettings.roles.uIRolesResultTable,
    // BaseData.getSettingsModuleValue("RoleName"));
    // action.contextClick(row).perform();
  }

  async verifyRightClickCopyRoleDisabled(): Promise<void> {
    // WebElement CopyRole = objectIdentification.manualIdentify.getContextMenuItemInTheGridRow(
    // uIMapSettings.roles.uIRolesResultTable, BaseData.getSettingsModuleValue("RoleName"), "Role Name");
    // verify.ExpectedValueIsTrue(CopyRole.getAttribute("unselectable").toString().contains("on"));
  }

  async verifyCopyRoleLinkDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapSettings.roles.uICopyRoleButton.getAttribute("unselectable").contains("on"));
  }

  async verifyCopyRoleEnabled(): Promise<void> {
    // WebElement CopyRole = objectIdentification.manualIdentify.getSettingsRolesContextMenuItemInTheGridRow(
    // uIMapSettings.roles.uIRolesResultTable, BaseData.getSettingsModuleValue("RoleName"), "Copy Role");
    // verify.ExpectedValueIsTrue(CopyRole.isEnabled());
  }

  async clickCopyRoleInGrid(): Promise<void> {
    // WebElement CopyRole = objectIdentification.manualIdentify.getSettingsRolesContextMenuItemInTheGridRow(
    // uIMapSettings.roles.uIRolesResultTable, BaseData.getSettingsModuleValue("RoleName"), "Copy Role");
    // CopyRole.click();
  }

  async selectAtRoleRowCheckBox(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
    // uIMapSettings.roles.uIRolesResultTable, BaseData.getSettingsModuleValue("RoleName"));
  }

  async verifyAtRoleInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("RoleName"),
    // objectIdentification.manualIdentify.getGridCellInnerText(uIMapSettings.roles.uIRolesResultTable,
    // "Role Name", rowIndex));
  }

  async enterAtRoleName(): Promise<void> {
    // uIMapSettings.roles.uIRoleNameEdit.click();
    // uIMapSettings.roles.uIRoleNameEdit.clear();
    // uIMapSettings.roles.uIRoleNameEdit.sendKeys(BaseData.getSettingsModuleValue("RoleName"));
  }

  async clickSearch(): Promise<void> {
    // uIMapSettings.roles.uISearchButton.click();
  }

  async clickCopyRoleLink(): Promise<void> {
    // uIMapSettings.roles.uICopyRoleButton.click();
  }

  async selectRowAtRoleName(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapSettings.roles.uIRolesResultTable,
    // BaseData.getSettingsModuleValue("RoleName"));
  }

  async selectRowAtRoleName1(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapSettings.roles.uIRolesResultTable,
    // BaseData.getSettingsModuleValue("RoleName1"));
  }

  async selectRowAtRoleName2(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapSettings.roles.uIRolesResultTable,
    // BaseData.getSettingsModuleValue("RoleName2"));
  }

  async verifyNoRecordsFound(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage(" 1011 - No Record Found");
  }

  async enterAtRoleName1(): Promise<void> {
    // uIMapSettings.roles.uIRoleNameEdit.click(); //
    // uIMapSettings.roles.uIRoleNameEdit.clear();
    // uIMapSettings.roles.uIRoleNameEdit.sendKeys(BaseData.getSettingsModuleValue("RoleName1"));
  }

  async verifyCopyToSameJurisIsEnabled(): Promise<void> {
    // //			verify.ExpectedValueIsTrue(uIMapSettings.roles.uICopyToSameJurisButton.isEnabled());
    // verify.ExpectedValueIsFalse(uIMapSettings.roles.uICopyToSameJurisButton
    // .findElement(By.xpath(".//..//parent::li")).getAttribute("class").contains("RootDisabled"),
    // "Copy To Same Juris is not enabled --> ");
  }

  async verifyCopyToMultiJurisIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.roles.uICopyToMultiJurisButton.isEnabled());
  }

  async selectAtRoleRowCheckBoxByIndex(rowIndex: number): Promise<void> {
    // objectIdentification.manualIdentify
    // .getGridRowCheckBoxByIndex(uIMapSettings.roles.uIRolesResultTable, rowIndex).click();
  }

  async clickCopyToSameJuris(): Promise<void> {
    // boolean enabled = uIMapSettings.roles.uICopyToSameJurisButton.isEnabled();
    // if (enabled == true) {
    // uIMapSettings.roles.uICopyToSameJurisButton.click();
    // } else {
    // System.out.println("-- Copy To Same Juris button is not Enabled --");
  }

  async clickCopyToMultiJuris(): Promise<void> {
    // uIMapSettings.roles.uICopyToMultiJurisButton.click();
  }

  async enterAtCopyRoleName(): Promise<void> {
    // uIMapSettings.roles.uIRoleNameEdit.clear();
    // uIMapSettings.roles.uIRoleNameEdit.sendKeys(BaseData.getSettingsModuleValue("CopyRoleName"));
  }

  async verifyAtCopyRoleNameInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("CopyRoleName"),
    // objectIdentification.manualIdentify.getGridCell(uIMapSettings.roles.uIRolesResultTable,
    // BaseData.getSettingsModuleValue("CopyRoleName")).getText());
  }

  async selectAtJurisAsBC(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.roles.uIJurisDropdown,
    // "BC - Brown County Police Department");
  }

  async selectAtJurisAsPX(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.roles.uIJurisDropdown,
    // "PX - ProPhoenix");
  }

  async enterAtRoleName2(): Promise<void> {
    // uIMapSettings.roles.uIRoleNameEdit.clear();
    // uIMapSettings.roles.uIRoleNameEdit.sendKeys(BaseData.getSettingsModuleValue("RoleName2"));
  }

  async verifyAtRoleName2InGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("RoleName2"),
    // objectIdentification.manualIdentify.getGridCell(uIMapSettings.roles.uIRolesResultTable,
    // BaseData.getSettingsModuleValue("RoleName2")).getText());
  }

  async verifyAtRoleName1InGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("RoleName1"),
    // objectIdentification.manualIdentify.getGridCell(uIMapSettings.roles.uIRolesResultTable,
    // BaseData.getSettingsModuleValue("RoleName1")).getText());
  }

  async selectAtRoleNameInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapSettings.roles.uIRolesResultTable,
    // BaseData.getSettingsModuleValue("RoleName"));
    // Playback.pageLoadThreadWait();
  }

  async clickAddNew(): Promise<void> {
    // uIMapSettings.roles.uIAddNewButton.click();
  }

  async verifyContainerCopyToSameJurisIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.roles.uIContainerCopyToSameJurisButton.isEnabled());
  }

  async clickContainerCopyToSameJuris(): Promise<void> {
    // boolean enabled = uIMapSettings.roles.uIContainerCopyToSameJurisButton.isEnabled();
    // if (enabled == true) {
    // uIMapSettings.roles.uIContainerCopyToSameJurisButton.click();
    // } else {
    // System.out.println("-- Copy To Same Juris button is not Enabled in Container --");
  }

  async clickPFAllowedLink(): Promise<void> {
    // uIMapSettings.roles.uIPFAllowedButton.click();
  }

  async clickGridHeader(gridHeader: string): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectGridHeaderColumnNameWithoutContains(uIMapSettings.roles.uIRolesResultTable, gridHeader);
  }

  async verifyGridIsEmpty(): Promise<void> {
    // verify.ExpectedIntergerValueIsEqualToActual(0,
    // objectIdentification.manualIdentify.getGridTableRowsCount(uIMapSettings.roles.uIRolesResultTable),
    // "Grid contains data -->");
  }

  async clearRoleName(): Promise<void> {
    // uIMapSettings.roles.uIRoleNameEdit.clear();
  }

  async clickLinkedRoleColumnHeader(): Promise<void> {
    // uIMapSettings.roles.uILinkedRoleColumnHeader.click();
  }

  async clickDescriptionColumnHeader(): Promise<void> {
    // uIMapSettings.roles.uIDescriptionColumnHeader.click();
  }

  async selectAtCheckBoxByRoleName(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText
    // (uIMapSettings.roles.uIRolesResultTable,BaseData.getSettingsModuleValue("RoleName"));
  }

  async verifyAtJurisColumnValues(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues
    // (uIMapSettings.roles.uIRolesResultTable,BaseData.getSettingsModuleValue("ColumnName"));
    // for(String Columnvalue:gridTableColumnValues){
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Juris"), Columnvalue);
  }

  async selectAtJuris(jsonIndexValue: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption
    // (uIMapSettings.roles.uIJurisDropdown, BaseData.getSettingsModuleValue("Juris"+ jsonIndexValue));
  }

  async verifyAtJurisColumnValues(jsonIndexValue: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues
    // (uIMapSettings.roles.uIRolesResultTable,BaseData.getSettingsModuleValue("ColumnName"));
    // for(String Columnvalue:gridTableColumnValues){
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Juris" + jsonIndexValue), Columnvalue);
  }

  async verifyAtRoleNameByJurisInGrid(JsonIndexValue: number): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapSettings.roles.uIRolesResultTable, BaseData.getActivityModuleValue("Juris"+ JsonIndexValue), "Role Name").getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("RoleName"+JsonIndexValue), text);
  }

  async verifyAtDescriptionByJurisInGrid(JsonIndexValue: number): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapSettings.roles.uIRolesResultTable, BaseData.getActivityModuleValue("Juris"+ JsonIndexValue), "Description").getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Description"+JsonIndexValue), text);
  }

  async verifyLinkedRolePresentInGrid(): Promise<void> {
    // String icon = uIMapSettings.roles.uILinkedRoleIconInGrid.getAttribute("src");
    // verify.ExpectedValueIsTrue(icon.contains("clone_d.gif"));
  }

  async clickLinkedRoleIconInGrid(): Promise<void> {
    // uIMapSettings.roles.uILinkedRoleIconInGrid.click();
  }

  async verifyLinkedRoleIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.roles.uILinkedRoleButton.isEnabled());
  }

  async verifyModulePermissionsIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.roles.uIModulePermissionsButton.isEnabled());
  }

  async verifyPFAllowedIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.roles.uIPFAllowedButton.isEnabled());
  }

  async verifyAddNewIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.roles.uICopyToMultiJurisButton.isEnabled());
  }

  async clickRandomRowCheckbox(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRowCheckbox(uIMapSettings.roles.uIRolesResultTable);
  }

}

export class FTPInterfaceSearchPage {
  readonly page: Page;
  readonly interfaceComboBox: Locator;
  readonly dBNameComboBox: Locator;
  readonly searchButton: Locator;
  readonly includeInactiveCheckBox: Locator;
  readonly fTPInterfaceResultTable: Locator;
  readonly addNewButton: Locator;
  readonly excelIcon: Locator;
  readonly jurisDropDown: Locator;
  readonly dBNameDropDown: Locator;
  readonly printIcon: Locator;
  readonly productHelpIcon: Locator;
  readonly nextButton: Locator;
  readonly prevButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.interfaceComboBox = page.locator('#cddInterface_DropDown');
    this.dBNameComboBox = page.locator('#lstInterfaceDB');
    this.searchButton = page.locator('#cmdSearch');
    this.includeInactiveCheckBox = page.locator('#chkInactive');
    this.fTPInterfaceResultTable = page.locator('#grdSrch');
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.excelIcon = page.locator("//img[@title=\'Export to Excel\']");
    this.jurisDropDown = page.locator('#lstJuris');
    this.dBNameDropDown = page.locator('#lstInterfaceDB');
    this.printIcon = page.locator("//img[@alt=\'Print\']");
    this.productHelpIcon = page.locator("//div[@id=\'divKPIHelp\']//img[contains(@onClick,\'KPILoadHelp(1101)\')]");
    this.nextButton = page.locator('#grdSrch_ctl00_lnkbtnNext');
    this.prevButton = page.locator('#grdSrch_ctl00_lnkbtnPrev');
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.fTPInterfaceSearch.uIAddNewButton.click();
  }

  async selectAtInterface(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.fTPInterfaceSearch.uIInterfaceComboBox, BaseData.getSettingsModuleValue("Interface"));
  }

  async selectAtInterface(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.fTPInterfaceSearch.uIInterfaceComboBox, BaseData.getSettingsModuleValue("Interface"+i));
  }

  async clickSearch(): Promise<void> {
    // uIMapSettings.fTPInterfaceSearch.uISearchButton.click();
  }

  async verifyAtInterfaceInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Interface"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.fTPInterfaceSearch.uIFTPInterfaceResultTable, "Interface", rowIndex));
  }

  async verifyAtInterfaceColumnValuesInGrid(i: number, j: number): Promise<void> {
    // List<String> gridvalues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.fTPInterfaceSearch.uIFTPInterfaceResultTable, BaseData.getSettingsModuleValue("ColumnName"+i));
    // for(String values:gridvalues) {
    // verify.ExpectedValueIsTrue(gridvalues.equals(BaseData.getSettingsModuleValue("Interface"+j)));
  }

  async verifyAtInterfaceInGridTable(i: number): Promise<void> {
    // String gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapSettings.fTPInterfaceSearch.uIFTPInterfaceResultTable, BaseData.getSettingsModuleValue("Interface"+i)).getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Interface"+i),gridCell);
  }

  async selectAtInterfaceInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.fTPInterfaceSearch.uIFTPInterfaceResultTable,
    // BaseData.getSettingsModuleValue("Interface"));
  }

  async verifyAllFTPInterfaceGridColumnName(): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridHeaderTableRow(uIMapSettings.fTPInterfaceSearch.uIFTPInterfaceResultTable).getText()
    // .contains("Juris"));
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridHeaderTableRow(uIMapSettings.fTPInterfaceSearch.uIFTPInterfaceResultTable).getText()
    // .contains("Interface"));
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridHeaderTableRow(uIMapSettings.fTPInterfaceSearch.uIFTPInterfaceResultTable).getText()
    // .contains("HostSite"));
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridHeaderTableRow(uIMapSettings.fTPInterfaceSearch.uIFTPInterfaceResultTable).getText()
    // .contains("FTPUser"));
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridHeaderTableRow(uIMapSettings.fTPInterfaceSearch.uIFTPInterfaceResultTable).getText()
    // .contains("DB Name"));
  }

  async clickExcelIcon(): Promise<void> {
    // uIMapSettings.fTPInterfaceSearch.uIExcelIcon.click();
  }

  async verifyExcelColumnName(columnName: string[], i: number): Promise<void> {
    // verify.ExpectedValueIsTrue(columnName.contains(BaseData.getSettingsModuleValue("ColumnName" + i)));
  }

  async verifyAtHostSiteInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.fTPInterfaceSearch.uIFTPInterfaceResultTable,
    // BaseData.getSettingsModuleValue("HostSite"))
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getSettingsModuleValue("HostSite"));
  }

  async getInterfaceColumnValueInGrid(ColName: string): Promise<string[]> {
    // List<String> gridRowCheckedCheckBoxList = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.fTPInterfaceSearch.uIFTPInterfaceResultTable, ColName);
    // return gridRowCheckedCheckBoxList;
  }

  async selectAtJuris(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption
    // (uIMapSettings.fTPInterfaceSearch.uIJurisDropDown,BaseData.getSettingsModuleValue("Juris"+i));
  }

  async selectRandomRecordInGrid(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow(uIMapSettings.fTPInterfaceSearch.uIFTPInterfaceResultTable);
  }

  async selectAtDBName(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption
    // (uIMapSettings.fTPInterfaceSearch.uIDBNameDropDown,BaseData.getSettingsModuleValue("DBName"));
  }

  async selectAtDBName(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption
    // (uIMapSettings.fTPInterfaceSearch.uIDBNameDropDown,BaseData.getSettingsModuleValue("DBName"+i));
  }

  async verifyDBNameColumnValueInGrid(i: number, j: number): Promise<void> {
    // List<String> gridvalues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.fTPInterfaceSearch.uIFTPInterfaceResultTable, BaseData.getSettingsModuleValue("ColumnName"+i));
    // for(String values:gridvalues) {
    // verify.ExpectedValueIsTrue(gridvalues.equals(BaseData.getSettingsModuleValue("DBName"+j)));
  }

  async verifyDBNameInGrid(i: number): Promise<void> {
    // String gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapSettings.fTPInterfaceSearch.uIFTPInterfaceResultTable, BaseData.getSettingsModuleValue("DBName"+i)).getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("DBName"+i),gridCell);
  }

  async checkIncludeInactiveCheckBox(): Promise<void> {
    // uIMapSettings.fTPInterfaceSearch.uIIncludeInactiveCheckBox.click();
  }

  async verifyInActiveRecordInGrid(): Promise<void> {
    // Playback.threadWait();
    // String cssValue = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapSettings.fTPInterfaceSearch.uIFTPInterfaceResultTable,
    // BaseData.getSchedulingModuleValue("FTPUser")).getCssValue("color");
    // System.out.println(cssValue);
    // verify.ExpectedPropertyValueIsEqual("rgba(255, 0, 0, 1)", cssValue);
  }

  async verifyAtColumnValuesAreSortedAscendingOrder(i: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedAscendingCaseInsensitive(
    // uIMapSettings.fTPInterfaceSearch.uIFTPInterfaceResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i),
    // objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.fTPInterfaceSearch.uIFTPInterfaceResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i)));
  }

  async verifyAtColumnValuesAreSortedDescendingOrder(i: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedDescendingCaseInsensitive(
    // uIMapSettings.fTPInterfaceSearch.uIFTPInterfaceResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i),
    // objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.fTPInterfaceSearch.uIFTPInterfaceResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i)));
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapSettings.fTPInterfaceSearch.uIPrintIcon.click();
  }

  async clickProductHelpIcon(): Promise<void> {
    // uIMapSettings.fTPInterfaceSearch.uIProductHelpIcon.click();
  }

  async clickNextButton(): Promise<void> {
    // WebElement uINextButton = uIMapSettings.fTPInterfaceSearch.uINextButton;
    // objectIdentification.manualIdentify.scrollIntoView(uINextButton);
    // uINextButton.click();
  }

  async verifyAtJurisColumnValues(i: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues
    // (uIMapSettings.fTPInterfaceSearch.uIFTPInterfaceResultTable,BaseData.getSettingsModuleValue("ColumnName"));
    // System.out.println(gridTableColumnValues);
    // verify.ExpectedValueIsTrue(gridTableColumnValues.contains(BaseData.getSettingsModuleValue("ColumnValues"+i)));
  }

  async clickPrevButton(): Promise<void> {
    // uIMapSettings.fTPInterfaceSearch.uIPrevButton.click();
  }

}

export class FTPInterfaceEntryPage {
  readonly page: Page;
  readonly interfaceComboBox: Locator;
  readonly dBNameComboBox: Locator;
  readonly activeCheckBox: Locator;
  readonly sharedCheckBox: Locator;
  readonly folderPAthEdit: Locator;
  readonly userNameEdit: Locator;
  readonly passwordEdit: Locator;
  readonly portEdit: Locator;
  readonly locationTypeComboBox: Locator;
  readonly subPathEdit: Locator;
  readonly custom1Edit: Locator;
  readonly custom2Edit: Locator;
  readonly keepLogEdit: Locator;
  readonly typeComboBox: Locator;
  readonly nonPeakHrsComboBox: Locator;
  readonly emailTemplateComboBox: Locator;
  readonly fromEdit: Locator;
  readonly toEdit: Locator;
  readonly subjectEdit: Locator;
  readonly saveButton: Locator;
  readonly saveandCloseButton: Locator;
  readonly resetButton: Locator;
  readonly custom1TextView: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly jobServerCheckbox: Locator;
  readonly logonTypeDropdown: Locator;
  readonly jobPathEdit: Locator;
  readonly fileTypeDropdown: Locator;
  readonly agencyTypeDropdown: Locator;
  readonly keyFileDropdown: Locator;
  readonly keyIDDropdown: Locator;
  readonly fromStartDateEdit: Locator;
  readonly passPhraseKeyEdit: Locator;
  readonly parentDropdown: Locator;
  readonly schemaVersionEdit: Locator;
  readonly receivePathEdit: Locator;
  readonly custom3Edit: Locator;
  readonly custom4Edit: Locator;
  readonly custom5Edit: Locator;
  readonly printIcon: Locator;
  readonly inActiveDateEdit: Locator;
  readonly productDropdown: Locator;
  readonly cCEdit: Locator;
  readonly jurisDropDown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.interfaceComboBox = page.locator('#cddInterface_DropDown');
    this.dBNameComboBox = page.locator('#lstProductDBList');
    this.activeCheckBox = page.locator('#chkActive');
    this.sharedCheckBox = page.locator('#ChkIsShared');
    this.folderPAthEdit = page.locator('#txtHostSite');
    this.userNameEdit = page.locator('#txtUserName');
    this.passwordEdit = page.locator('#txtPassword');
    this.portEdit = page.locator('#txtPort');
    this.locationTypeComboBox = page.locator('#cddLocType_DropDown');
    this.subPathEdit = page.locator('#txtSendPath');
    this.custom1Edit = page.locator('#txtCustom1');
    this.custom2Edit = page.locator('#txtCustom2');
    this.keepLogEdit = page.locator('#txtKeepLog');
    this.typeComboBox = page.locator('#cddType_DropDown');
    this.nonPeakHrsComboBox = page.locator('#cddPeakHr_DropDown');
    this.emailTemplateComboBox = page.locator('#cddEmailTemplate');
    this.fromEdit = page.locator('#txtFrom');
    this.toEdit = page.locator('#txtTo');
    this.subjectEdit = page.locator('#txtSubject');
    this.saveButton = page.locator('#cmdSave');
    this.saveandCloseButton = page.locator('#cmdSaveNClose');
    this.resetButton = page.locator('#cmdRefresh');
    this.custom1TextView = page.locator('#lblCustom1');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.jobServerCheckbox = page.locator('#chkJobServer');
    this.logonTypeDropdown = page.locator("//select[@id=\'CddILogonType_DropDown\']");
    this.jobPathEdit = page.locator('#txtJobPath');
    this.fileTypeDropdown = page.locator('#cddFileType_DropDown');
    this.agencyTypeDropdown = page.locator('#cddAgencyType_DropDown');
    this.keyFileDropdown = page.locator('#cddLogonprovider_DropDown');
    this.keyIDDropdown = page.locator('#cddImpersonationLevel_DropDown');
    this.fromStartDateEdit = page.locator('#dtStartDttm_KPIDttmCtrl');
    this.passPhraseKeyEdit = page.locator('#txtPassPhraseKey');
    this.parentDropdown = page.locator('#lstActiveInterface');
    this.schemaVersionEdit = page.locator('#txtSchemaversion');
    this.receivePathEdit = page.locator('#txtReceivePath');
    this.custom3Edit = page.locator('#txtCustom3');
    this.custom4Edit = page.locator('#txtCustom4');
    this.custom5Edit = page.locator('#txtCustom5');
    this.printIcon = page.locator('#cmdPrint');
    this.inActiveDateEdit = page.locator('#txtInActive');
    this.productDropdown = page.locator('#cddProduct_DropDown');
    this.cCEdit = page.locator('#txtCC');
    this.jurisDropDown = page.locator('#lstJuris');
  }

  async selectAtInterface(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.fTPInterfaceEntry.uIInterfaceComboBox, BaseData.getSettingsModuleValue("Interface"));
  }

  async selectDBName(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.fTPInterfaceEntry.uIDBNameComboBox,
    // Database);
  }

  async enterFolderPath(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uIFolderPAthEdit.sendKeys("ftp.prophoenix.com");
  }

  async enterUserName(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uIUserNameEdit.sendKeys("Phoenix");
  }

  async enterPassword(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uIPasswordEdit.sendKeys("ProPhoenix");
  }

  async enterPort(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uIPortEdit.sendKeys("8888");
  }

  async selectLocationType(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapSettings.fTPInterfaceEntry.uILocationTypeComboBox);
  }

  async enterCustom1(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapSettings.fTPInterfaceEntry.uICustom1Edit.click();
    // uIMapSettings.fTPInterfaceEntry.uICustom1Edit.sendKeys(Randomized.randomString(15));
  }

  async enterKeepLog(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uIKeepLogEdit.sendKeys(String.valueOf(Randomized.getRandomNumbers(2)));
  }

  async selectType(): Promise<void> {
    // objectIdentification.randomIdentify.selectDropDownOption(uIMapSettings.fTPInterfaceEntry.uITypeComboBox);
  }

  async selectNonPeakHrs(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapSettings.fTPInterfaceEntry.uINonPeakHrsComboBox);
  }

  async enterFrom(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uIFromEdit.sendKeys("Support@prophoenix.com");
  }

  async enterTo(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uIToEdit.sendKeys("AutoTeam@prophoenix.com");
  }

  async enterSubject(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uISubjectEdit.sendKeys("Automation");
  }

  async saveScreen(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async closeScreen(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.driver.close();
  }

  async clickCustom1Text(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uICustom1TextView.click();
  }

  async verifyCustom1Disabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapSettings.fTPInterfaceEntry.uICustom1Edit.getAttribute("class").contains("textboxInactive"));
  }

  async verifyCustom1Mandatory(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.fTPInterfaceEntry.uICustom1TextView.getAttribute("kpifieldusage")
    // .contains("Mandatory"));
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // try {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.fTPInterfaceEntry.uIBottomLeftSideStatusBar.getText());
    // } catch (AssertionError e) {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition successful",
    // uIMapSettings.fTPInterfaceEntry.uIBottomLeftSideStatusBar.getText());
  }

  async selectInterface(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapSettings.fTPInterfaceEntry.uIInterfaceComboBox);
  }

  async verifyInActiveCheckboxIsNotSelected(): Promise<void> {
    // verify.ExpectedValueIsTrue(!uIMapSettings.fTPInterfaceEntry.uIActiveCheckBox.isSelected());
  }

  async clickInActiveCheckbox(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uIActiveCheckBox.click();
  }

  async saveNClose(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uISaveandCloseButton.click();
    // popup.confirm.yes();
  }

  async enterAtFolderPath(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uIFolderPAthEdit.sendKeys(BaseData.getSettingsModuleValue("FolderPath"));
  }

  async clickJobServerCheckbox(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uIJobServerCheckbox.click();
  }

  async selectAtLogonType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.fTPInterfaceEntry.uILogonTypeDropdown, BaseData.getSettingsModuleValue("LogonType"));
  }

  async enterAtJobPath(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uIJobPathEdit.sendKeys(BaseData.getSettingsModuleValue("JobPath"));
  }

  async selectAtFileType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.fTPInterfaceEntry.uIFileTypeDropdown,
    // BaseData.getSettingsModuleValue("FileType"));
  }

  async selectAtAgencyType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.fTPInterfaceEntry.uIAgencyTypeDropdown,
    // BaseData.getSettingsModuleValue("AgencyType"));
  }

  async selectAtKeyFile(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.fTPInterfaceEntry.uIKeyFileDropdown,
    // BaseData.getSettingsModuleValue("KeyFile"));
  }

  async selectAtKeyID(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.fTPInterfaceEntry.uIKeyIDDropdown,
    // BaseData.getSettingsModuleValue("KeyID"));
  }

  async enterFromStartDateAsCurrentDate(): Promise<void> {
    // String currentDate = Randomized.getCurrentDate();
    // uIMapSettings.fTPInterfaceEntry.uIFromStartDateEdit.sendKeys(currentDate);
    // uIMapSettings.fTPInterfaceEntry.uIFromStartDateEdit.sendKeys(Keys.TAB);
  }

  async enterAtPassPhraseKey(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uIPassPhraseKeyEdit
    // .sendKeys(BaseData.getSettingsModuleValue("PassPhraseKey"));
  }

  async selectAtParent(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.fTPInterfaceEntry.uIParentDropdown,
    // BaseData.getSettingsModuleValue("Parent"));
  }

  async enterAtSchemaVersion(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uISchemaVersionEdit
    // .sendKeys(BaseData.getSettingsModuleValue("SchemaVersion"));
  }

  async enterAtReceivePath(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uIReceivePathEdit.sendKeys(BaseData.getSettingsModuleValue("ReceivePath"));
  }

  async enterAtSubPath(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uISubPathEdit.sendKeys(BaseData.getSettingsModuleValue("SubPath"));
  }

  async enterAtCustom1(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uICustom1Edit.sendKeys(BaseData.getSettingsModuleValue("Custom1"));
  }

  async enterAtCustom2(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uICustom2Edit.sendKeys(BaseData.getSettingsModuleValue("Custom2"));
  }

  async enterAtCustom3(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uICustom3Edit.sendKeys(BaseData.getSettingsModuleValue("Custom3"));
  }

  async enterAtCustom4(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uICustom4Edit.sendKeys(BaseData.getSettingsModuleValue("Custom4"));
  }

  async enterAtCustom5(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uICustom5Edit.sendKeys(BaseData.getSettingsModuleValue("Custom5"));
  }

  async selectAtEmailTemplate(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.fTPInterfaceEntry.uIEmailTemplateComboBox,
    // BaseData.getSettingsModuleValue("EmailTemplate"));
  }

  async clickResetIcon(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uIResetButton.click();
  }

  async verifyAtJobPath(): Promise<void> {
    // String attribute = uIMapSettings.fTPInterfaceEntry.uIJobPathEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute, BaseData.getSettingsModuleValue("JobPath"));
  }

  async verifyAtPassPhraseKey(): Promise<void> {
    // String attribute = uIMapSettings.fTPInterfaceEntry.uIPassPhraseKeyEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute, BaseData.getSettingsModuleValue("PassPhraseKey"));
  }

  async verifyAtKeyFileDropdown(): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.fTPInterfaceEntry.uIKeyFileDropdown);
    // verify.ExpectedPropertyValueIsEqual(dropDownSelectedItem, BaseData.getSettingsModuleValue("KeyFile"));
  }

  async verifyAtKeyIDDropdown(): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.fTPInterfaceEntry.uIKeyIDDropdown);
    // verify.ExpectedPropertyValueIsEqual(dropDownSelectedItem, BaseData.getSettingsModuleValue("KeyID"));
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uIPrintIcon.click();
  }

  async verifyInactiveDate(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.fTPInterfaceEntry.uIInActiveDateEdit.getAttribute("value")
    // .contains(Randomized.getCurrentDate()));
  }

  async selectAtLocationType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.fTPInterfaceEntry.uILocationTypeComboBox,
    // BaseData.getSettingsModuleValue("LocationType"));
    // uIMapSettings.fTPInterfaceEntry.uILocationTypeComboBox.sendKeys(Keys.TAB);
  }

  async selectAtDBName(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.fTPInterfaceEntry.uIDBNameComboBox,
    // BaseData.getSettingsModuleValue("DBName"));
  }

  async selectAtProduct(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.fTPInterfaceEntry.uIProductDropdown,
    // BaseData.getSettingsModuleValue("Product"));
  }

  async enterAtUserName(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uIUserNameEdit.sendKeys(BaseData.getSettingsModuleValue("UserName"));
  }

  async enterAtPassword(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uIPasswordEdit.sendKeys(BaseData.getSettingsModuleValue("Password"));
  }

  async enterAtPort(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uIPortEdit.sendKeys(BaseData.getSettingsModuleValue("Port"));
  }

  async enterCC(): Promise<void> {
    // uIMapSettings.fTPInterfaceEntry.uICCEdit.sendKeys("pro@phoenix.com");
  }

  async verifyAtLogonType(i: number): Promise<void> {
    // String LogonType = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.fTPInterfaceEntry.uILogonTypeDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("LogonType" + i), LogonType);
  }

  async verifyAtKeyFile(i: number): Promise<void> {
    // String KeyFile = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.fTPInterfaceEntry.uIKeyFileDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("KeyFile" + i), KeyFile);
  }

  async verifyAtKeyId(i: number): Promise<void> {
    // String KeyId = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.fTPInterfaceEntry.uIKeyIDDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("KeyId" + i), KeyId);
  }

  async verifyAtJuris(): Promise<void> {
    // String dropDwonSelectedItem = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapSettings.fTPInterfaceEntry.uIJurisDropDown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Juris"), dropDwonSelectedItem);
  }

}

export class UnitsScreenPage {
  readonly page: Page;
  readonly unitEdit: Locator;
  readonly unitTypeCodeEdit: Locator;
  readonly defaultVehicleEdit: Locator;
  readonly patrolAreaComboBox: Locator;
  readonly searchButton: Locator;
  readonly includeInactiveCheckBox: Locator;
  readonly unitResultTable: Locator;
  readonly addNewButton: Locator;
  readonly officerCodeEdit: Locator;
  readonly addNewButtonFire: Locator;
  readonly printIconFire: Locator;
  readonly unitResponse: Locator;
  readonly unitsResultGrid: Locator;
  readonly unitResponseLookUpIcon: Locator;
  readonly jurisDropDown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.unitEdit = page.locator('#txtUnitRef');
    this.unitTypeCodeEdit = page.locator('#lupUnitType_CodeValue');
    this.defaultVehicleEdit = page.locator('#lupVehicle_CodeValue');
    this.patrolAreaComboBox = page.locator('#cddPatrolArea_DropDown');
    this.searchButton = page.locator('#cmdSearch');
    this.includeInactiveCheckBox = page.locator('#chkIsActive');
    this.unitResultTable = page.locator('#grdUnit');
    this.addNewButton = page.locator("//span[contains(text(),\'AddNew\')]");
    this.officerCodeEdit = page.locator('#lupOnCallOffID_CodeValue');
    this.addNewButtonFire = page.locator("//span[text()=\'Add New\']");
    this.printIconFire = page.locator("//img[contains(@src,\'/KPIImages/ico/16_print.gif\')]");
    this.unitResponse = page.locator('#lupFillInRespose_CodeValue');
    this.unitsResultGrid = page.locator('#grdUnit');
    this.unitResponseLookUpIcon = page.locator('#lupFillInRespose_imgBtn');
    this.jurisDropDown = page.locator('#lstJuris');
  }

  async enterAtUnit(): Promise<void> {
    // uIMapSettings.unitsScreen.uIUnitEdit.sendKeys(BaseData.getSettingsModuleValue("Unit"));
  }

  async clickSearch(): Promise<void> {
    // uIMapSettings.unitsScreen.uISearchButton.click();
  }

  async clickIncludeInactiveCheckBox(): Promise<void> {
    // uIMapSettings.unitsScreen.uIIncludeInactiveCheckBox.click();
  }

  async verifyAtUnitInRow(rowIndex: number): Promise<void> {
    // Playback.controlReadyThreadWait();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Unit"),
    // objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.unitsScreen.uIUnitResultTable, "Unit", rowIndex));
  }

  async clickUnitInGridRow(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.unitsScreen.uIUnitResultTable, BaseData.getSettingsModuleValue("Unit"));
  }

  async clickAddnew(): Promise<void> {
    // String readPropertiesFile = PropertiesFile.readPropertiesFile("product");
    // if (readPropertiesFile.equals("Police")) {
    // uIMapSettings.unitsScreen.uIAddNewButton.click();
    // } else {
    // uIMapSettings.unitsScreen.uIAddNewButtonFire.click();
  }

  async verifyNoRecordAcknowledgeMessgage(): Promise<void> {
    // // if (Playback.browserType == "Chrome")
    // // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
    // // else
    // popup.acknowledge.okWithExpectedMessage(" 1011 - No Record Found");
  }

  async enterAtOfficer(): Promise<void> {
    // uIMapSettings.unitsScreen.uIOfficerCodeEdit.sendKeys(BaseData.getSettingsModuleValue("Officer"));
  }

  async verifyTrackCheckBoxChecked(rowIndex: number): Promise<void> {
    // WebElement TrackCheckBox = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.unitsScreen.uIUnitResultTable, "Track", rowIndex)
    // .findElement(By.tagName("img"));
    // verify.ExpectedValueIsTrue(TrackCheckBox.getAttribute("alt").contains("Checked"));
  }

  async selectAtPatrolArea(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.unitsScreen.uIPatrolAreaComboBox,
    // BaseData.getSettingsModuleValue("PatrolArea"));
  }

  async verifyInactiveCheckBoxChecked(rowIndex: number): Promise<void> {
    // WebElement InactiveCheckBox = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.unitsScreen.uIUnitResultTable, "Inactive", rowIndex)
    // .findElement(By.tagName("img"));
    // verify.ExpectedValueIsTrue(InactiveCheckBox.getAttribute("alt").contains("Checked"));
  }

  async verifyAtInactiveCheckBoxCheckedInGrid(): Promise<void> {
    // WebElement InactiveCheckBox = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.unitsScreen.uIUnitResultTable,BaseData.getSettingsModuleValue("Unit"));
    // InactiveCheckBox.findElement(By.tagName("img"));
    // verify.ExpectedValueIsTrue(InactiveCheckBox.getAttribute("alt").contains("Checked"));
  }

  async verifyInactiveUnitRowColor(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridTableRow(uIMapSettings.unitsScreen.uIUnitResultTable, rowIndex).getAttribute("class")
    // .contains("GrayCss"));
  }

  async verifyInactiveUnitRowColor(): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.unitsScreen.uIUnitResultTable,BaseData.getSettingsModuleValue("Unit")).getAttribute("class")
    // .contains("GrayCss"));
  }

  async enterAtDefaultVehicle(): Promise<void> {
    // uIMapSettings.unitEntry.uIDefaultVehicleCodeEdit
    // .sendKeys(BaseData.getSettingsModuleValue("DefaultVehicle"));
    // uIMapSettings.unitEntry.uIDefaultVehicleCodeEdit.sendKeys(Keys.TAB);
  }

  async selectRowAtUnitTypeInGrid(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify
    // .selectGridRowByCellInnerText(uIMapSettings.unitsScreen.uIUnitResultTable, "Unit Type", 0);
  }

  async verifyAtOfficerInGrid(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // List<String> officer = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.unitsScreen.uIUnitResultTable, "Officer");
    // System.out.println(officer);
    // verify.ExpectedValueIsTrue(officer.contains(BaseData.getSettingsModuleValue("Officer1")));
  }

  async verifyAtUnitTypeInGrid(): Promise<void> {
    // // String gridCellInnerText =
    // // objectIdentification.manualIdentify.getGridCellInnerText(uIMapSettings.unitsScreen.uIUnitResultTable,
    // // "Unit Type", 0);
    // verify.ExpectedValueIsTrue(
    // BaseData.getSettingsModuleValue("DispatchUnitType").contains(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.unitsScreen.uIUnitResultTable, "Unit Type", 0)));
  }

  async verifyAtUnitInGridFire(rowIndex: number): Promise<void> {
    // String unit = objectIdentification.manualIdentify.getGridCell(uIMapSettings.unitsScreen.uIUnitResultTable,
    // BaseData.getSettingsModuleValue("Station"), "Unit#").getText();
    // verify.ExpectedPropertyValueIsEqual(unit, BaseData.getSettingsModuleValue("Unit"));
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapSettings.unitsScreen.uIPrintIconFire.click();
  }

  async selectRowAtUnitInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.unitsScreen.uIUnitsResultGrid, BaseData.getSettingsModuleValue("Unit"));
  }

  async clickUnitResponseLookUpIcon(): Promise<void> {
    // uIMapSettings.unitsScreen.uIUnitResponseLookUpIcon.click();
  }

  async selectRowAtAgencyInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.unitsScreen.uIUnitsResultGrid, BaseData.getSettingsModuleValue("Agency"));
  }

  async verifyOfficer2ColumnDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridHeaderColumnCell(uIMapSettings.unitsScreen.uIUnitsResultGrid, "Officer2").isDisplayed());
  }

  async verifyAtOfficer2InGrid(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // List<String> officer2 = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.unitsScreen.uIUnitResultTable, "Officer2");
    // System.out.println(officer2);
    // verify.ExpectedValueIsTrue(officer2.contains(BaseData.getSettingsModuleValue("Officer2")));
  }

  async selectAtJuris(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption
    // (uIMapSettings.unitsScreen.uIJurisDropDown,BaseData.getSettingsModuleValue("Juris"));
  }

  async verifyGridCount(): Promise<void> {
    // int gridTableRowsCount = objectIdentification.manualIdentify.getGridTableRowsCount(uIMapSettings.unitsScreen.uIUnitResultTable);
    // verify.ExpectedValueIsTrue(gridTableRowsCount > 1);
  }

  async verifyAtUnitLength(): Promise<void> {
    // int unitLength = uIMapSettings.unitsScreen.uIUnitEdit.getAttribute("value").length();
    // int expectedUnitLength = Integer.parseInt(BaseData.getSettingsModuleValue("UnitLength"));
    // verify.ExpectedIntergerValueIsEqualToActual(expectedUnitLength, unitLength,"Unit length is not same as expected -->");
  }

  async enterAtUnit(jsonIndex: number): Promise<void> {
    // uIMapSettings.unitsScreen.uIUnitEdit.sendKeys(BaseData.getSettingsModuleValue("Unit"+jsonIndex));
  }

  async verifyAtUnit(): Promise<void> {
    // String unit = uIMapSettings.unitsScreen.uIUnitEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(unit, BaseData.getSettingsModuleValue("Unit"),"Unit is not same as expected -->");
  }

}

export class UnitEntryPage {
  readonly page: Page;
  readonly unitEdit: Locator;
  readonly unitTypeCodeEdit: Locator;
  readonly defaultVehicleCodeEdit: Locator;
  readonly onDutyNotReqCheckBox: Locator;
  readonly onCallOfficerCodeEdit: Locator;
  readonly dispatchUnitLookupButton: Locator;
  readonly patrolAreaComboBox: Locator;
  readonly expirationDateEdit: Locator;
  readonly inActiveDateEdit: Locator;
  readonly inActiveCheckBox: Locator;
  readonly wDAGroupCodeEdit: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;
  readonly saveandCloseButton: Locator;
  readonly resetButton: Locator;
  readonly patrolAreaResultTable: Locator;
  readonly preAssignOfficer1CodeEdit: Locator;
  readonly preAssignOfficer2CodeEdit: Locator;
  readonly isTrackableCheckBox: Locator;
  readonly wDAGroupLookupButton: Locator;
  readonly customIconComboBox: Locator;
  readonly bottomMesssageTextView: Locator;
  readonly deleteIcon: Locator;
  readonly mutualAidUnitLabel: Locator;
  readonly mutualAidUnitCheckBox: Locator;
  readonly dispatchUnitTypeDropdown: Locator;
  readonly unitCallSignEdit: Locator;
  readonly stationDropdown: Locator;
  readonly unitResponseEdit: Locator;
  readonly apparatusTypeEdit: Locator;
  readonly apparatusUseDropdown: Locator;
  readonly agencyDropdown: Locator;
  readonly unitNoFire: Locator;
  readonly defualtVehicleIconFire: Locator;
  readonly staffingTab: Locator;
  readonly printIcon: Locator;
  readonly cADTab: Locator;
  readonly positionTab: Locator;
  readonly saveAndNewIcon: Locator;
  readonly unitResponseDescriptionEdit: Locator;
  readonly apparatusTypeDescriptionEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.unitEdit = page.locator('#txtUnitRef');
    this.unitTypeCodeEdit = page.locator('#lupUnitType_CodeValue');
    this.defaultVehicleCodeEdit = page.locator('#lupVehicle_CodeValue');
    this.onDutyNotReqCheckBox = page.locator('#chkIsOnCall');
    this.onCallOfficerCodeEdit = page.locator('#lupOnCallOffID_CodeValue');
    this.dispatchUnitLookupButton = page.locator('#lupUnitType_imgBtn');
    this.patrolAreaComboBox = page.locator('#lstPatrolArea_DropDown');
    this.expirationDateEdit = page.locator('#tdExpirationDate');
    this.inActiveDateEdit = page.locator('#txtInActiveDttm');
    this.inActiveCheckBox = page.locator('#chkIsActive');
    this.wDAGroupCodeEdit = page.locator('#lupWDAGroup_CodeValue');
    this.addButton = page.locator('#imgAdd');
    this.saveButton = page.locator('#cmdSave');
    this.saveandCloseButton = page.locator('#cmdSaveNClose');
    this.resetButton = page.locator('#cmdRefresh');
    this.patrolAreaResultTable = page.locator('#grdPatrolArea');
    this.preAssignOfficer1CodeEdit = page.locator('#lupOff1PFID_CodeValue');
    this.preAssignOfficer2CodeEdit = page.locator('#lupOff2PFID_CodeValue');
    this.isTrackableCheckBox = page.locator('#chkIsTrackable');
    this.wDAGroupLookupButton = page.locator('#lupWDAGroup_imgBtn');
    this.customIconComboBox = page.locator('#ddlCustomIcon_DropDown');
    this.bottomMesssageTextView = page.locator("//td[@class = \'statusBar\']//b");
    this.deleteIcon = page.locator('#cmdUnitDelete');
    this.mutualAidUnitLabel = page.locator("//label[text()=\' Mutual Aid Unit?\']");
    this.mutualAidUnitCheckBox = page.locator("//input[@id=\'chkMutualAid\']");
    this.dispatchUnitTypeDropdown = page.locator('#cddUnitType_DropDown');
    this.unitCallSignEdit = page.locator('#txtUnitDesc');
    this.stationDropdown = page.locator('#cddFireStation_DropDown');
    this.unitResponseEdit = page.locator('#lupFillInRespose_CodeValue');
    this.apparatusTypeEdit = page.locator('#lupApparType_CodeValue');
    this.apparatusUseDropdown = page.locator('#cddNFIRSRptType_DropDown');
    this.agencyDropdown = page.locator('#cddAgency_DropDown');
    this.unitNoFire = page.locator('#txtUnitNo');
    this.defualtVehicleIconFire = page.locator('#tabUnit_tmpl0_UsrCAD1_lupVehicle_imgBtn');
    this.staffingTab = page.locator("//span[text()=\'Staffing\']");
    this.printIcon = page.locator('#cmdPrint');
    this.cADTab = page.locator("//span[text()=\'CAD\']");
    this.positionTab = page.locator("//span[text()=\'Position\']");
    this.saveAndNewIcon = page.locator('#cmdSaveNew');
    this.unitResponseDescriptionEdit = page.locator('#lupFillInRespose_CodeDescription');
    this.apparatusTypeDescriptionEdit = page.locator('#lupApparType_CodeDescription');
  }

  async enterAtUnitForFire(): Promise<void> {
    // uIMapSettings.unitEntry.uIUnitNoFire.sendKeys(BaseData.getSettingsModuleValue("Unit"));
  }

  async enterVehicle(): Promise<void> {
    // uIMapSettings.unitEntry.uIDefaultVehicleCodeEdit.sendKeys("WDA1");
    // uIMapSettings.unitEntry.uIDefaultVehicleCodeEdit.sendKeys(Keys.TAB);
  }

  async clickOnDutyNoReqCheckBox(): Promise<void> {
    // uIMapSettings.unitEntry.uIOnDutyNotReqCheckBox.click();
  }

  async enterAtOnCallOfficer(): Promise<void> {
    // uIMapSettings.unitEntry.uIOnCallOfficerCodeEdit.sendKeys(BaseData.getSettingsModuleValue("OnCallOfficer"));
  }

  async selectDispatchUnit(): Promise<void> {
    // uIMapSettings.unitEntry.uIDispatchUnitLookupButton.click();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async clickInactiveCheckBox(): Promise<void> {
    // uIMapSettings.unitEntry.uIInActiveCheckBox.click();
  }

  async selectPatrolAreaAsPatrolZone(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.unitEntry.uIPatrolAreaComboBox,
    // "Patrol Zone");
  }

  async selectPatrolAreaAsPatrolZone1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.unitEntry.uIPatrolAreaComboBox,
    // "Patrol Zone1");
  }

  async clickPatrolZone1InGrid(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectGridRowByCellInnerText(uIMapSettings.unitEntry.uIPatrolAreaResultTable, "Patrol Zone1");
  }

  async clickAdd(): Promise<void> {
    // uIMapSettings.unitEntry.uIAddButton.click();
  }

  async verifyRecordExistAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1046) Record already exists");
  }

  async verifyAtPatrolZoneInGrid(JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.unitEntry.uIPatrolAreaResultTable,
    // BaseData.getSettingsModuleValue("PatrolZone" + JsonKeyIndex));
  }

  async verifyInactiveDate(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.unitEntry.uIInActiveDateEdit.getAttribute("value")
    // .contains(Randomized.getCurrentDate()));
  }

  async saveScreen(): Promise<void> {
    // uIMapSettings.unitEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async close(): Promise<void> {
    // uIMapSettings.unitEntry.driver.close();
  }

  async verifyPatrolZone1(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("Patrol Zone1", objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.unitEntry.uIPatrolAreaComboBox));
  }

  async clickSaveButton(): Promise<void> {
    // uIMapSettings.unitEntry.uISaveButton.click();
  }

  async verify1018RequiredEntriesAreMissingAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1018) Required Entries are Missing");
  }

  async selectAtDispatchUnitType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.unitEntry.uIDispatchUnitTypeDropdown,
    // BaseData.getSettingsModuleValue("DispatchUnitType"));
  }

  async verifyOnCallOfficerFieldDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapSettings.unitEntry.uIOnCallOfficerCodeEdit.getAttribute("class").contains("textboxInactive"),
    // "Verify On call Officer fields disabled");
  }

  async verifyOnCallOfficerFieldEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapSettings.unitEntry.uIOnCallOfficerCodeEdit.getAttribute("class").contains("textbox"),
    // "Verify On call Officer fields Enabled");
  }

  async verifyPreAssignOfficer1FieldDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.unitEntry.uIPreAssignOfficer1CodeEdit.getAttribute("class")
    // .contains("textboxInactive"), "Verify PreAssign Officer1 fields disabled");
  }

  async verifyPreAssignOfficer2FieldDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.unitEntry.uIPreAssignOfficer2CodeEdit.getAttribute("class")
    // .contains("textboxInactive"), "Verify PreAssign Officer2 fields disabled");
  }

  async clickIsTrackableCheckBox(): Promise<void> {
    // uIMapSettings.unitEntry.uIIsTrackableCheckBox.click();
  }

  async selectWDAGroup(): Promise<void> {
    // uIMapSettings.unitEntry.uIWDAGroupLookupButton.click();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async selectAtPatrolArea(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.unitEntry.uIPatrolAreaComboBox,
    // BaseData.getSettingsModuleValue("PatrolArea"));
  }

  async selectCustomIcon(): Promise<void> {
    // objectIdentification.randomIdentify.selectDropDownOption(uIMapSettings.unitEntry.uICustomIconComboBox);
  }

  async verify1002AdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.unitEntry.uIBottomMesssageTextView.getText(),
    // "verify 1002 addition successful message is displayed");
  }

  async ClickDeleteIcon(): Promise<void> {
    // uIMapSettings.unitEntry.uIDeleteIcon.click();
    // popup.confirm.yes();
  }

  async verifyMutualAidUnitIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.unitEntry.uIMutualAidUnitLabel.isDisplayed());
  }

  async clickMutualAidUnitCheckBox(): Promise<void> {
    // uIMapSettings.unitEntry.uIMutualAidUnitCheckBox.click();
  }

  async verifyMutualAidUnitCheckBoxIsChecked(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.unitEntry.uIMutualAidUnitCheckBox.isSelected());
  }

  async enterAtUnitCallSign(): Promise<void> {
    // uIMapSettings.unitEntry.uIUnitCallSignEdit.sendKeys(BaseData.getSettingsModuleValue("UnitCallSign"));
  }

  async selectAtStation(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.unitEntry.uIStationDropdown,
    // BaseData.getSettingsModuleValue("Station"));
  }

  async enterAtUnitResponse(): Promise<void> {
    // uIMapSettings.unitEntry.uIUnitResponseEdit.sendKeys(BaseData.getSettingsModuleValue("UnitResponse"));
    // uIMapSettings.unitEntry.uIUnitResponseEdit.sendKeys(Keys.TAB);
  }

  async enterAtApparatusType(): Promise<void> {
    // Playback.threadWait(3000);
    // uIMapSettings.unitEntry.uIApparatusTypeEdit.sendKeys(BaseData.getSettingsModuleValue("ApparatusType"));
    // Playback.threadWait(3000);
    // uIMapSettings.unitEntry.uIApparatusTypeEdit.sendKeys(Keys.TAB);
  }

  async selectAtApparatusUse(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.unitEntry.uIApparatusUseDropdown,
    // BaseData.getSettingsModuleValue("ApparatusUse"));
  }

  async selectAtAgency(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.unitEntry.uIAgencyDropdown,
    // BaseData.getSettingsModuleValue("Agency"));
  }

  async enterAtUnitNoFire(): Promise<void> {
    // uIMapSettings.unitEntry.uIUnitNoFire.click();
    // uIMapSettings.unitEntry.uIUnitNoFire.sendKeys(BaseData.getSettingsModuleValue("UnitNo"));
  }

  async verifyAtDefaultVehicle(): Promise<void> {
    // String attribute = uIMapSettings.unitEntry.uIDefaultVehicleCodeEdit.getAttribute("value");
    // String Value = BaseData.getSettingsModuleValue("DefaultVehicle");
    // verify.ExpectedPropertyValueIsEqual(attribute, Value);
  }

  async enterAtVehicle(): Promise<void> {
    // uIMapSettings.unitEntry.uIDefaultVehicleCodeEdit
    // .sendKeys(BaseData.getSettingsModuleValue("DefaultVehicle"));
    // uIMapSettings.unitEntry.uIDefaultVehicleCodeEdit.sendKeys(Keys.TAB);
  }

  async verify5502vehicleAlreadyAssignedAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("5502 - This Vehicle is already assigned for an active unit");
  }

  async SelectAtDefaultVehicle(): Promise<void> {
    // uIMapSettings.unitEntry.uIDefualtVehicleIconFire.click();
    // popup.switchToCodedSearch();
    // popup.kPICodedLookup.clickAtDescription();
  }

  async clickPositionTab(): Promise<void> {
    // uIMapSettings.unitEntry.uIPositionTab.click();
  }

}

export class CADTabPage {
  readonly page: Page;
  readonly defaultVehicleEdit: Locator;
  readonly battalionDropdown: Locator;
  readonly nonTrackableCheckbox: Locator;
  readonly availableCADTOCADCheckbox: Locator;
  readonly wDAGroup: Locator;
  readonly commentForCADEdit: Locator;
  readonly rFSensorIDEdit: Locator;
  readonly availableForCADToCADCheckBox: Locator;
  readonly calculateFinishTimeForUnitRecommendationCheckBox: Locator;
  readonly defaultVehicleDescriptionEdit: Locator;
  readonly followUpCheckBox: Locator;
  readonly unFoundedCheckBox: Locator;
  readonly generateCaseNoCheckBox: Locator;
  readonly generateAnimalCaseNoCheckBox: Locator;
  readonly reportCodeComboBox: Locator;
  readonly backupReportCodeComboBox: Locator;
  readonly alertTypeDropdown: Locator;
  readonly createCrashReportCheckBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.defaultVehicleEdit = page.locator('#tabUnit_tmpl0_UsrCAD1_lupVehicle_CodeValue');
    this.battalionDropdown = page.locator('#tabUnit_tmpl0_UsrCAD1_cddBattaltion_DropDown');
    this.nonTrackableCheckbox = page.locator('#tabUnit_tmpl0_UsrCAD1_chkIsTrackable');
    this.availableCADTOCADCheckbox = page.locator('#tabUnit_tmpl0_UsrCAD1_chkIsPnxCAD2CAD');
    this.wDAGroup = page.locator('#tabUnit_tmpl0_UsrCAD1_lupWDAGroup_CodeValue');
    this.commentForCADEdit = page.locator('#tabUnit_tmpl0_UsrCAD1_txtCmtCAD');
    this.rFSensorIDEdit = page.locator('#tabUnit_tmpl0_UsrCAD1_txtRFSensorID');
    this.availableForCADToCADCheckBox = page.locator('#tabUnit_tmpl0_UsrCAD1_chkIsRecommendation');
    this.calculateFinishTimeForUnitRecommendationCheckBox = page.locator('#tabUnit_tmpl0_UsrCAD1_chkIsPnxCAD2CAD');
    this.defaultVehicleDescriptionEdit = page.locator('#tabUnit_tmpl0_UsrCAD1_lupVehicle_CodeDescription');
    this.followUpCheckBox = page.locator('#tabDisposition_tmpl0_UsrDispCAD1_chkFollowUp');
    this.unFoundedCheckBox = page.locator('#tabDisposition_tmpl0_UsrDispCAD1_chkUnFounded');
    this.generateCaseNoCheckBox = page.locator('#tabDisposition_tmpl0_UsrDispCAD1_chkCaseNbr');
    this.generateAnimalCaseNoCheckBox = page.locator('#tabDisposition_tmpl0_UsrDispCAD1_chkAnimalCaseNbr');
    this.reportCodeComboBox = page.locator('#tabDisposition_tmpl0_UsrDispCAD1_cddReportCode_DropDown');
    this.backupReportCodeComboBox = page.locator('#tabDisposition_tmpl0_UsrDispCAD1_cddBackupReportCode_DropDown');
    this.alertTypeDropdown = page.locator('#tabCFSCode_tmpl0_UsrCAD1_cddAlertType_DropDown');
    this.createCrashReportCheckBox = page.locator('#tabDisposition_tmpl0_UsrDispCAD1_ChkCreateCrashReport');
  }

  async enterAtDefaultVehicle(i: number): Promise<void> {
    // uIMapSettings.unitEntry.cadTab.uIDefaultVehicleEdit
    // .sendKeys(BaseData.getSettingsModuleValue("DefaultVehicle" + i));
    // uIMapSettings.unitEntry.cadTab.uIDefaultVehicleEdit.sendKeys(Keys.TAB);
  }

  async clearDefaultVehicle(): Promise<void> {
    // uIMapSettings.unitEntry.cadTab.uIDefaultVehicleEdit.clear();
    // uIMapSettings.unitEntry.cadTab.uIDefaultVehicleEdit.sendKeys(Keys.TAB);
  }

  async selectAtBattalion(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.unitEntry.cadTab.uIBattalionDropdown,
    // BaseData.getSettingsModuleValue("Battalion"));
  }

  async clickNonTrackableCheckbox(): Promise<void> {
    // uIMapSettings.unitEntry.cadTab.uINonTrackableCheckbox.click();
  }

  async clickAvailableForCADTOCAD(): Promise<void> {
    // uIMapSettings.unitEntry.cadTab.uIAvailableCADTOCADCheckbox.click();
  }

  async enterAtWDAGroup(): Promise<void> {
    // uIMapSettings.unitEntry.cadTab.uIWDAGroup.click();
    // uIMapSettings.unitEntry.cadTab.uIWDAGroup.sendKeys(BaseData.getSettingsModuleValue("WDAGroup"));
    // uIMapSettings.unitEntry.cadTab.uIWDAGroup.sendKeys(Keys.TAB);
  }

  async enterAtCommentForCAD(): Promise<void> {
    // uIMapSettings.unitEntry.cadTab.uICommentForCADEdit.click();
    // uIMapSettings.unitEntry.cadTab.uICommentForCADEdit.sendKeys(BaseData.getSettingsModuleValue("CommentForCAD"));
  }

  async enterAtRFSensorID(): Promise<void> {
    // uIMapSettings.unitEntry.cadTab.uIRFSensorIDEdit.click();
    // uIMapSettings.unitEntry.cadTab.uIRFSensorIDEdit.sendKeys(BaseData.getSettingsModuleValue("RFSensorID"));
  }

  async checkAvailableForCADToCAD(): Promise<void> {
    // uIMapSettings.unitEntry.cadTab.uIAvailableForCADToCADCheckBox.click();
  }

  async checkCalculateFinishTimeForUnitRecommendationCheckBox(): Promise<void> {
    // uIMapSettings.unitEntry.cadTab.uICalculateFinishTimeForUnitRecommendationCheckBox.click();
  }

  async checkCalculateFinishTimeForUnitRecommendation(): Promise<void> {
    // uIMapSettings.unitEntry.cadTab.uICalculateFinishTimeForUnitRecommendationCheckBox.click();
  }

  async verifyAtDefaultVehicleIsNotEmpty(): Promise<void> {
    // boolean empty = uIMapSettings.unitEntry.cadTab.uIDefaultVehicleEdit.getAttribute("value").isEmpty();
    // verify.ExpectedValueIsFalse(empty);
  }

  async verifyAtBattalionIsNotEmpty(): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapSettings.unitEntry.cadTab.uIBattalionDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Battalion"), dropDownSelectedItem);
  }

  async verifyAtWDAGroupIsNotEmpty(): Promise<void> {
    // boolean empty = uIMapSettings.unitEntry.cadTab.uIWDAGroup.getAttribute("value").isEmpty();
    // verify.ExpectedValueIsFalse(empty);
  }

  async verifyNonTrackableCheckboxIsChecked(): Promise<void> {
    // boolean selected = uIMapSettings.unitEntry.cadTab.uINonTrackableCheckbox.isSelected();
    // verify.ExpectedValueIsTrue(selected);
  }

  async verifyAtCommentForCADIsNotEmpty(): Promise<void> {
    // boolean selected = uIMapSettings.unitEntry.cadTab.uICommentForCADEdit.getAttribute("value").isEmpty();
    // verify.ExpectedValueIsFalse(selected);
  }

  async verifyRFSensorIDIsNotEmpty(): Promise<void> {
    // boolean empty = uIMapSettings.unitEntry.cadTab.uIRFSensorIDEdit.getAttribute("value").isEmpty();
    // verify.ExpectedValueIsFalse(empty);
  }

  async verifyAvailableForCADToCADIsChecked(): Promise<void> {
    // boolean selected = uIMapSettings.unitEntry.cadTab.uIAvailableForCADToCADCheckBox.isSelected();
    // verify.ExpectedValueIsTrue(selected);
  }

  async verifyCalculateFinishTimeForUnitRecommendationIsChecked(): Promise<void> {
    // boolean selected = uIMapSettings.unitEntry.cadTab.uICalculateFinishTimeForUnitRecommendationCheckBox.isSelected();
    // verify.ExpectedValueIsTrue(selected);
  }

  async verifyDefaultVehicleCodeIsEmpty(): Promise<void> {
    // boolean empty = uIMapSettings.unitEntry.cadTab.uIDefaultVehicleEdit.getAttribute("value").isEmpty();
    // verify.ExpectedValueIsTrue(empty,"default vehicle code is not empty-->");
  }

  async verifyDefaultVehicleDescriptionIsEmpty(): Promise<void> {
    // boolean empty = uIMapSettings.unitEntry.cadTab.uIDefaultVehicleDescriptionEdit.getAttribute("value")
    // .isEmpty();
    // verify.ExpectedValueIsTrue(empty, "default vehicle description is not empty-->");
  }

}

export class StaffingTabPage {
  readonly page: Page;
  readonly position: Locator;
  readonly rank: Locator;
  readonly order: Locator;
  readonly addButton: Locator;
  readonly staffingGridTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.position = page.locator('#tabUnit_tmpl1_UsrStaffing1_cddPosition_DropDown');
    this.rank = page.locator('#tabUnit_tmpl1_UsrStaffing1_cddRank_DropDown');
    this.order = page.locator('#tabUnit_tmpl1_UsrStaffing1_txtOrder');
    this.addButton = page.locator('#tabUnit_tmpl1_UsrStaffing1_imgAdd');
    this.staffingGridTable = page.locator('#tabUnit_tmpl1_UsrStaffing1_grdStaffing');
  }

  async selectPosition(): Promise<string> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapSettings.unitEntry.staffingTab.uIPosition);
    // String dropDownSelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.unitEntry.staffingTab.uIPosition);
    // return dropDownSelectedItem;
  }

  async selectRank(): Promise<void> {
    // objectIdentification.randomIdentify.selectDropDownOption(uIMapSettings.unitEntry.staffingTab.uIRank);
  }

  async enterAtOrder(): Promise<void> {
    // uIMapSettings.unitEntry.staffingTab.uIOrder.sendKeys(BaseData.getSettingsModuleValue("Order"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.unitEntry.staffingTab.uIAddButton.click();
  }

  async verifyPositionInGrid(selectPosition1: string): Promise<void> {
    // String Position = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.unitEntry.staffingTab.uIStaffingGridTable, "Position", 0).getText();
    // System.out.println(Position);
    // verify.ExpectedPropertyValueIsEqual(selectPosition1, Position);
  }

  async verifyPositionInGridWithContains(selectPosition1: string): Promise<void> {
    // String Position = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.unitEntry.staffingTab.uIStaffingGridTable, "Position", 0).getText();
    // System.out.println(selectPosition1.substring(4));
    // verify.ExpectedPropertyValueIsEqual(selectPosition1.substring(4), Position);
  }

  async verifyStaffingTabInBlueColor(): Promise<void> {
    // String Blue = "0, 0, 255, 1";
    // String color = uIMapSettings.unitEntry.uIStaffingTab.getCssValue("color");
    // System.out.println(color);
    // verify.ExpectedValueIsTrue(color.contains(Blue));
  }

  async selectAtPosition(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.unitEntry.staffingTab.uIPosition,
    // BaseData.getSettingsModuleValue("Position"));
  }

  async verifyAtPositionInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapSettings.unitEntry.staffingTab.uIStaffingGridTable,
    // BaseData.getSettingsModuleValue("Position"))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("Position")));
  }

  async clickStaffingTab(): Promise<void> {
    // uIMapSettings.unitEntry.uIStaffingTab.click();
  }

  async verify1003UpdateSuccessfulMessage(): Promise<void> {
    // String BottomMessage = uIMapSettings.unitEntry.uIBottomMesssageTextView.getText();
    // verify.ExpectedPropertyValueIsEqual(BottomMessage, "1003 - Update successful");
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapSettings.unitEntry.uIPrintIcon.click();
  }

  async verifyStaffingTabIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.unitEntry.uIStaffingTab.isDisplayed());
  }

  async verifyDeleteConfirmationPopup(): Promise<void> {
    // popup.confirm.yesWithExpectedMessage("(4)Do you want to delete?");
  }

  async clickCADTab(): Promise<void> {
    // uIMapSettings.unitEntry.uICADTab.click();
  }

  async verifyAtPreAssignedOfficer1(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.unitEntry.uIPreAssignOfficer1CodeEdit.getAttribute("value")
    // .contains(BaseData.getSettingsModuleValue("PreAssignedOfficer1")));
  }

  async verifyAtPreAssignedOfficer2(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.unitEntry.uIPreAssignOfficer2CodeEdit.getAttribute("value")
    // .contains(BaseData.getSettingsModuleValue("PreAssignedOfficer2")));
  }

}

export class PositionTabPage {
  readonly page: Page;
  readonly positionDropDown: Locator;
  readonly rankDropDown: Locator;
  readonly orderEdit: Locator;
  readonly addButton: Locator;
  readonly positionGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.positionDropDown = page.locator('#tabUnit_tmpl1_UsrStaffing1_cddPosition_DropDown');
    this.rankDropDown = page.locator('#tabUnit_tmpl1_UsrStaffing1_cddRank_DropDown');
    this.orderEdit = page.locator('#tabUnit_tmpl1_UsrStaffing1_txtOrder');
    this.addButton = page.locator('#tabUnit_tmpl1_UsrStaffing1_imgAdd');
    this.positionGrid = page.locator('#tabUnit_tmpl1_UsrStaffing1_grdStaffing');
  }

  async selectAtPosition(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption
    // (uIMapSettings.unitEntry.positionTab.uIPositionDropDown,BaseData.getSettingsModuleValue("Position"));
  }

  async selectAtRank(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption
    // (uIMapSettings.unitEntry.positionTab.uIRankDropDown,BaseData.getSettingsModuleValue("Rank"));
  }

  async enterAtOrder(): Promise<void> {
    // uIMapSettings.unitEntry.positionTab.uIOrderEdit.sendKeys(BaseData.getSettingsModuleValue("Order"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.unitEntry.positionTab.uIAddButton.click();
  }

  async verifyAtPositionInGrid(i: number): Promise<void> {
    // String gridCell = objectIdentification.manualIdentify.getGridCell
    // (uIMapSettings.unitEntry.positionTab.uIPositionGrid,BaseData.getSettingsModuleValue("Position"+i)).getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Position"+i), gridCell);
  }

  async verifyAtPosition(jsonIndex: number): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.unitEntry.positionTab.uIPositionDropDown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Position" + jsonIndex),
    // dropDownSelectedItem,"Position is not same as expected -->");
  }

  async verifyPositionTabGridCountIsZero(): Promise<void> {
    // int gridTableRowsCount = objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapSettings.unitEntry.positionTab.uIPositionGrid);
    // verify.ExpectedValueIsTrue(gridTableRowsCount == 0, "Position grid table count is not zero -->");
  }

  async verifyAtTabColorAsBlue(i: number, TabName: string): Promise<void> {
    // String cssValue = Playback.driver.findElement(By.xpath("//span[contains(text(),'" + TabName + "')]"))
    // .getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("color" + i), cssValue);
  }

  async verify1051UpdatedDataExistsAcknowledge(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1051) Updated data exists in the Patrol Area. You must save or reset.");
  }

  async clickUpdateButton(): Promise<void> {
    // uIMapSettings.unitEntry.uIAddButton.click();
  }

  async selectAtPatrolAreaInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText
    // (uIMapSettings.unitEntry.uIPatrolAreaResultTable,BaseData.getSettingsModuleValue("PatrolArea"));
  }

  async verifyAtPatrolAreaInGrid(): Promise<void> {
    // String gridCell = objectIdentification.manualIdentify.getGridCell
    // (uIMapSettings.unitEntry.uIPatrolAreaResultTable,BaseData.getSettingsModuleValue("PatrolArea")).getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("PatrolArea"), gridCell);
  }

  async enterAtUnit(): Promise<void> {
    // uIMapSettings.unitEntry.uIUnitEdit.sendKeys(BaseData.getSettingsModuleValue("Unit"));
  }

  async selectAtDispatchUnitType(jsonValueIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.unitEntry.uIDispatchUnitTypeDropdown,
    // BaseData.getSettingsModuleValue("DispatchUnitType" + jsonValueIndex));
  }

  async verifyAtUnitLength(): Promise<void> {
    // int unitLength = uIMapSettings.unitEntry.uIUnitNoFire.getAttribute("value").length();
    // int expectedUnitLength = Integer.parseInt(BaseData.getSettingsModuleValue("UnitLength"));
    // verify.ExpectedIntergerValueIsEqualToActual(expectedUnitLength, unitLength,
    // "Unit length is not same as expected -->");
  }

  async verifyAtUnit(): Promise<void> {
    // String unit = uIMapSettings.unitEntry.uIUnitNoFire.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(unit, BaseData.getSettingsModuleValue("Unit"),
    // "Unit is not same as expected -->");
  }

  async enterAtUnitNoFire(jsonIndex: number): Promise<void> {
    // uIMapSettings.unitEntry.uIUnitNoFire.sendKeys(BaseData.getSettingsModuleValue("UnitNo" + jsonIndex));
  }

  async clickSaveAndNewIcon(): Promise<void> {
    // uIMapSettings.unitEntry.uISaveAndNewIcon.click();
    // popup.confirm.yes();
  }

  async verifyUnitNoIsEmpty(): Promise<void> {
    // String unitNo = uIMapSettings.unitEntry.uIUnitNoFire.getAttribute("value");
    // verify.ExpectedValueIsTrue(unitNo.isEmpty(),
    // "Unit No field is not Empty  -->");
  }

  async verifyUnitCallSignIsEmpty(): Promise<void> {
    // String unitCallSign = uIMapSettings.unitEntry.uIUnitCallSignEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(unitCallSign.isEmpty(), "Unit Call Sign field is not Empty  -->");
  }

  async verifyAtStation(jsonIndex: number): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.unitEntry.uIStationDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Station" + jsonIndex),
    // dropDownSelectedItem, "Station is not same as expected -->");
  }

  async verifyUnitResponseCodeIsEmpty(): Promise<void> {
    // String unitResponse = uIMapSettings.unitEntry.uIUnitResponseEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(unitResponse.isEmpty(), "Unit Response field is not Empty  -->");
  }

  async verifyUnitResponseDescriptionIsEmpty(): Promise<void> {
    // String unitResponseDescription = uIMapSettings.unitEntry.uIUnitResponseDescriptionEdit
    // .getAttribute("value");
    // verify.ExpectedValueIsTrue(unitResponseDescription.isEmpty(),
    // "Unit Response Description field is not Empty  -->");
  }

  async verifyApparatusTypeCodeIsEmpty(): Promise<void> {
    // String apparatusTypeCode = uIMapSettings.unitEntry.uIApparatusTypeEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(apparatusTypeCode.isEmpty(), "Apparatus Type Code field is not Empty  -->");
  }

  async verifyApparatusTypeDescriptionIsEmpty(): Promise<void> {
    // String apparatusTypeDescription = uIMapSettings.unitEntry.uIApparatusTypeDescriptionEdit
    // .getAttribute("value");
    // verify.ExpectedValueIsTrue(apparatusTypeDescription.isEmpty(),
    // "Apparatus Type Description field is not Empty  -->");
  }

  async verifyAtApparatusUse(jsonIndex: number): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.unitEntry.uIApparatusUseDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ApparatusUse" + jsonIndex),
    // dropDownSelectedItem, "Apparatus Use is not same as expected -->");
  }

  async verifyAtAgency(jsonIndex: number): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.unitEntry.uIAgencyDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Agency" + jsonIndex),
    // dropDownSelectedItem, "Agency is not same as expected -->");
  }

  async verifyTabColorIsBlack(jsonIndex: number): Promise<void> {
    // String cssValue = Playback.driver.findElement(By.xpath("//span[contains(text(),'" + BaseData.getSettingsModuleValue("TabName"+jsonIndex) + "')]"))
    // .getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual("rgba(0, 0, 0, 1)", cssValue,"Tab color is not black as expected -->");
  }

}

export class RolesEntryPage {
  readonly page: Page;
  readonly copyRoleResultTable: Locator;
  readonly roleNameEdit: Locator;
  readonly selectAllCopyRoleCheckBox: Locator;
  readonly selectAllOverrideCheckBox: Locator;
  readonly saveButton: Locator;
  readonly saveandCloseButton: Locator;
  readonly resetButton: Locator;
  readonly deleteButton: Locator;
  readonly searchButton: Locator;
  readonly screenIDedit: Locator;
  readonly deleteCheckBoxInGridTable: Locator;
  readonly copyRoleNameEdit: Locator;
  readonly copyRoleDescriptionEdit: Locator;
  readonly alarmEntryEditPermissionButton: Locator;
  readonly alarmsEditPermissionButton: Locator;
  readonly trafficEditPermissionButton: Locator;
  readonly accountingEditPermissionButton: Locator;
  readonly reportRepositoryEntryEditPermissionButton: Locator;
  readonly addNewCheckBox: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly searchResultTable: Locator;
  readonly recordEditPermissionButton: Locator;
  readonly roleDescriptionEdit: Locator;
  readonly selectAllCheckBox: Locator;
  readonly k9EditPermission: Locator;
  readonly permissionGrid: Locator;
  readonly viewHistoryButton: Locator;
  readonly infoIcon: Locator;
  readonly jurisDropdown: Locator;
  readonly pFEdit: Locator;
  readonly addButton: Locator;
  readonly pFAllowerRolesGrid: Locator;
  readonly deletedSelectedButton: Locator;
  readonly modulePermissionGrid: Locator;
  readonly citizenServicesEditPermissionButton: Locator;
  readonly settingsEditPermissionButton: Locator;
  readonly screenNameEdit: Locator;
  readonly fTOEditPermissionButton: Locator;
  readonly cADQAQIEditPermissionButton: Locator;
  readonly printIcon: Locator;
  readonly linkedRoleTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.copyRoleResultTable = page.locator('#grdCopyRole');
    this.roleNameEdit = page.locator('#txtRoleName');
    this.selectAllCopyRoleCheckBox = page.locator('#chkCopyAll');
    this.selectAllOverrideCheckBox = page.locator('#chkOverrideAll');
    this.saveButton = page.locator('#cmdSave');
    this.saveandCloseButton = page.locator('#cmdSaveNClose');
    this.resetButton = page.locator('#cmdRefresh');
    this.deleteButton = page.locator('#cmdDelete');
    this.searchButton = page.locator('#btnSrch');
    this.screenIDedit = page.locator('#txtScreenID');
    this.deleteCheckBoxInGridTable = page.locator('#grdPermission_ctl00_500_0_it13_0_CRemove');
    this.copyRoleNameEdit = page.locator('#txt_CopyRoleName');
    this.copyRoleDescriptionEdit = page.locator('#txt_CopyRoleDesc');
    this.alarmEntryEditPermissionButton = page.locator('#grdPermission_ctl00_it5_0_btnScreenPermission');
    this.alarmsEditPermissionButton = page.locator('#grdPermission_ctl00_it5_3_btnScreenPermission');
    this.trafficEditPermissionButton = page.locator('#grdPermission_ctl00_it5_0_btnScreenPermission');
    this.accountingEditPermissionButton = page.locator('#grdPermission_ctl00_it5_0_btnScreenPermission');
    this.reportRepositoryEntryEditPermissionButton = page.locator('#grdPermission_ctl00_it5_0_btnScreenPermission');
    this.addNewCheckBox = page.locator('#grdScreenPermission_it13_0_CKAdd');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']//b");
    this.searchResultTable = page.locator("//div[@id=\'grdScreenPermission\']");
    this.recordEditPermissionButton = page.locator('#grdPermission_ctl00_it5_0_btnScreenPermission');
    this.roleDescriptionEdit = page.locator('#txtRoleDesc');
    this.selectAllCheckBox = page.locator('#chkExternal');
    this.k9EditPermission = page.locator('#grdPermission_ctl00_it5_22_btnScreenPermission');
    this.permissionGrid = page.locator('#grdPermission');
    this.viewHistoryButton = page.locator('#cmdHistory');
    this.infoIcon = page.locator("//img[contains(@id,\'imgInfo\')]");
    this.jurisDropdown = page.locator('#lstJuris');
    this.pFEdit = page.locator('#lupOffPFID_CodeValue');
    this.addButton = page.locator('#imgAddPFRoles');
    this.pFAllowerRolesGrid = page.locator('#grdPFAllowedRoles');
    this.deletedSelectedButton = page.locator('#cmdDelete');
    this.modulePermissionGrid = page.locator('#grdPermission');
    this.citizenServicesEditPermissionButton = page.locator('#grdPermission_ctl00_it5_9_btnScreenPermission');
    this.settingsEditPermissionButton = page.locator('#grdPermission_ctl00_it5_0_btnScreenPermission');
    this.screenNameEdit = page.locator('#txtScrnName');
    this.fTOEditPermissionButton = page.locator('#grdPermission_ctl00_it5_0_btnScreenPermission');
    this.cADQAQIEditPermissionButton = page.locator('#grdPermission_ctl00_it5_1_btnScreenPermission');
    this.printIcon = page.locator('#cmdPrint');
    this.linkedRoleTable = page.locator("//div[@id=\'grdLinkedRole\']");
  }

  async clickOverRideSelectAllCheckBox(): Promise<void> {
    // uIMapSettings.rolesEntry.uISelectAllOverrideCheckBox.click();
  }

  async clickSaveButton(): Promise<void> {
    // uIMapSettings.rolesEntry.uISaveButton.click();
  }

  async verifyOverRideConfirmMessage(): Promise<void> {
    // popup.confirm.yesWithExpectedMessage("(1164) Do you want to override the Role?"); //
  }

  async verifyRoleInactiveConfirmMessage(): Promise<void> {
    // if (Playback.browserType.contains("Chrome"))
    // popup.confirm.noWithExpectedMessage(
    // "(2000) This role is inactive in the other Juris. Do you still want to make this role active in the other Juris? Clicking the Cancel button will override and keep the role status in the other Juris as is.");
    // else
    // popup.confirm.noWithExpectedMessage(
    // "(2000) This role is inactive in the other Juris. Do you still want to make this role active in the other Juris? Clicking the Cancel button will override and keep the role status in the other Juris as is.");
  }

  async save(): Promise<void> {
    // uIMapSettings.rolesEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verifyAtRoleName(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("RoleName"),
    // uIMapSettings.rolesEntry.uIRoleNameEdit.getAttribute("value"));
  }

  async close(): Promise<void> {
    // uIMapSettings.rolesEntry.driver.close();
  }

  async verifyDeleteIconEnabledToClick(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.rolesEntry.uIDeleteButton.isEnabled());
  }

  async enterAtScreenID(): Promise<void> {
    // uIMapSettings.rolesEntry.uIScreenIDedit.sendKeys(BaseData.getSettingsModuleValue("ScreenID"));
    // Playback.waitForControlReady();
  }

  async clickSearchButton(): Promise<void> {
    // uIMapSettings.rolesEntry.uISearchButton.click();
    // Playback.waitForControlReady();
  }

  async verifyDeleteCheckBoxCheckedForLoginUser(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.rolesEntry.uIDeleteCheckBoxInGridTable.isSelected());
    // Playback.waitForControlReady();
  }

  async mouseHoverOnDeleteIconAndVerifyDeleteRole(): Promise<void> {
    // Playback.actionDriver.moveToElement(uIMapSettings.rolesEntry.uIDeleteButton).build().perform();
    // String Actual = uIMapSettings.rolesEntry.uIDeleteButton.getAttribute("title");
    // verify.ExpectedPropertyValueIsEqual("Delete Role", Actual);
  }

  async clickDeleteIconWithConfirmPopup(): Promise<void> {
    // uIMapSettings.rolesEntry.uIDeleteButton.click();
    // popup.confirm.yes();
  }

  async verifyDeleteCheckBoxNotCheckedForLoginUser(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapSettings.rolesEntry.uIDeleteCheckBoxInGridTable.isSelected());
    // Playback.waitForControlReady();
  }

  async verifyDeleteIconNotEnabledToClick(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapSettings.rolesEntry.uIDeleteButton.isEnabled());
  }

  async mouseHoverOnDeleteIconAndVerifyDeleteRoleNotAllowed(): Promise<void> {
    // Playback.actionDriver.moveToElement(uIMapSettings.rolesEntry.uIDeleteButton).build().perform();
    // String Actual = uIMapSettings.rolesEntry.uIDeleteButton.getAttribute("title");
    // verify.ExpectedPropertyValueIsEqual("Deletion not allowed. Role assigned to Personnel", Actual);
  }

  async enterAtCopyRoleName(): Promise<void> {
    // uIMapSettings.rolesEntry.uICopyRoleNameEdit.sendKeys(BaseData.getSettingsModuleValue("CopyRoleName"));
  }

  async enterAtCopyRoleNameDescription(): Promise<void> {
    // uIMapSettings.rolesEntry.uICopyRoleDescriptionEdit
    // .sendKeys(BaseData.getSettingsModuleValue("CopyRoleDescription"));
  }

  async clickCopyNameSelectAllCheckbox(): Promise<void> {
    // uIMapSettings.rolesEntry.uISelectAllCopyRoleCheckBox.click();
  }

  async clickSaveNClose(): Promise<void> {
    // uIMapSettings.rolesEntry.uISaveandCloseButton.click();
    // popup.confirm.yes();
  }

  async verifyCopyRoleConfirmMessage(): Promise<void> {
    // popup.confirm.yesWithExpectedMessage("(1163) Do you want to copy the role in the selected agency?");
  }

  async clickAlarmEntryEditPermission(): Promise<void> {
    // uIMapSettings.rolesEntry.uIAlarmEntryEditPermissionButton.click();
  }

  async switchToRolesEntryScreenPermissionWindow(): Promise<void> {
    // objectIdentification.windowHandle.switchToWindow("frmScreenPermission");
  }

  async clickAlarmsEditPermissionButton(): Promise<void> {
    // uIMapSettings.rolesEntry.uIAlarmsEditPermissionButton.click();
  }

  async clickRecordEditPermissionButton(): Promise<void> {
    // uIMapSettings.rolesEntry.uIRecordEditPermissionButton.click();
  }

}

export class RolesEntryPermissionWindowPage {
  readonly page: Page;
  readonly selectAllCheckBox: Locator;
  readonly screenPermissionGridTable: Locator;
  readonly saveButton: Locator;
  readonly screenNameedit: Locator;
  readonly searchButton: Locator;
  readonly bottomStatus: Locator;
  readonly resetButton: Locator;
  readonly screenIdEdit: Locator;
  readonly delectCheckBox: Locator;
  readonly searchCheckBox: Locator;
  readonly addNewCheckBox: Locator;
  readonly changeCheckBox: Locator;
  readonly printCheckBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selectAllCheckBox = page.locator('#chkExternal');
    this.screenPermissionGridTable = page.locator("//div[@id=\'grdScreenPermission\']");
    this.saveButton = page.locator('#cmdSave');
    this.screenNameedit = page.locator('#txtScrnName');
    this.searchButton = page.locator('#btnSrch');
    this.bottomStatus = page.locator("//td[@class=\'statusBar\']//b");
    this.resetButton = page.locator('#cmdRefresh');
    this.screenIdEdit = page.locator('#txtScreenID');
    this.delectCheckBox = page.locator('#grdScreenPermission_it14_0_CRemove');
    this.searchCheckBox = page.locator('#grdScreenPermission_it11_0_CInquiry');
    this.addNewCheckBox = page.locator('#grdScreenPermission_it13_0_CKAdd');
    this.changeCheckBox = page.locator('#grdScreenPermission_it12_0_CKChange');
    this.printCheckBox = page.locator('#grdScreenPermission_it15_0_CKPrint');
  }

  async clickSelectAllCheckBox(): Promise<void> {
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uISelectAllCheckBox.click();
  }

  async verifyDeleteCheckBoxSelected(rowIndex: number): Promise<void> {
    // WebElement columnCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIScreenPermissionGridTable, "Delete",
    // rowIndex);
    // boolean result = columnCell.findElement(By.tagName("input")).isSelected();
    // verify.ExpectedValueIsTrue(result);
  }

  async clickSave(): Promise<void> {
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIsaveButton.click();
    // Playback.pageLoadThreadWait();
  }

  async closeScreen(): Promise<void> {
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.driver.close();
  }

  async enterAtScreenName(): Promise<void> {
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIScreenNameedit
    // .sendKeys(BaseData.getSettingsModuleValue("ScreenName"));
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIScreenNameedit.sendKeys(Keys.TAB);
  }

  async clickSearchButton(): Promise<void> {
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uISearchButton.click();
  }

  async verifyChangeCheckBoxSelected(rowIndex: number): Promise<void> {
    // WebElement columnCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIScreenPermissionGridTable, "Change",
    // rowIndex);
    // boolean result = columnCell.findElement(By.tagName("input")).isSelected();
    // verify.ExpectedValueIsTrue(result);
  }

  async clickInvoiceEntryDeleteCheckBox(): Promise<void> {
    // WebElement columnCell = Playback.driver.findElement(
    // By.xpath("//td[text()='Invoice Entry']/..//input[@id='grdScreenPermission_it14_3_CRemove']"));
    // if (columnCell.isEnabled() && columnCell.isSelected()) {
    // columnCell.click();
  }

  async clickSaveNClose(): Promise<void> {
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIsaveButton.click();
    // Playback.pageLoadThreadWait();
  }

  async SaveNClose(): Promise<void> {
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIsaveButton.click();
    // popup.confirm.yes();
    // Playback.pageLoadThreadWait();
  }

  async verifyChangeCheckBoxIsNotSelected(): Promise<void> {
    // WebElement columnCell = Playback.driver.findElement(By.id("grdScreenPermission_it12_0_CKChange"));
    // verify.ExpectedValueIsTrue(Boolean.parseBoolean(columnCell.getAttribute("disabled")));
  }

  async verifyUpdateSucessfullMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapSettings.rolesEntry.uIBottomLeftSideStatusBar.getText(),
    // "1003 - Update Successful");
  }

  async verifyPrintCheckBoxIsNotSelected(): Promise<void> {
    // WebElement columnCell = Playback.driver.findElement(By.id("grdScreenPermission_it15_0_CKPrint"));
    // verify.ExpectedValueIsTrue(columnCell.getDomProperty("checked").contains("false"));
  }

  async verifyChangeCheckBoxIsNotSelected1(): Promise<void> {
    // WebElement columnCell = Playback.driver.findElement(By.id("grdScreenPermission_it12_0_CKChange"));
    // String domProperty = columnCell.getDomProperty("checked");
    // System.out.println(domProperty);
    // verify.ExpectedValueIsTrue(columnCell.getDomProperty("checked").contains("false"));
  }

  async verifyPrintCheckBoxIsSelected(): Promise<void> {
    // WebElement columnCell = Playback.driver.findElement(By.id("grdScreenPermission_it15_0_CKPrint"));
    // verify.ExpectedValueIsTrue(columnCell.getAttribute("checked").equals("true"));
  }

  async clickResetButton(): Promise<void> {
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIResetButton.click();
  }

  async enterAtScreenId1(): Promise<void> {
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIScreenIdEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ScreenId1"));
  }

  async UnCheckDelectCheckBoxInGrid(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIDelectCheckBox.click();
  }

  async enterAtScreenId2(): Promise<void> {
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIScreenIdEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ScreenId2"));
  }

  async enterAtScreenId4(): Promise<void> {
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIScreenIdEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ScreenId4"));
  }

  async enterAtScreenId3(): Promise<void> {
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIScreenIdEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ScreenId3"));
  }

  async verifyScreenName1InGrid(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIScreenPermissionGridTable,
    // BaseData.getSettingsModuleValue("ScreenName1"));
  }

  async verifyScreenName2InGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIScreenPermissionGridTable,
    // BaseData.getSettingsModuleValue("ScreenName2"))
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getSettingsModuleValue("ScreenName2"));
  }

  async verifyScreenName3InGrid(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIScreenPermissionGridTable,
    // BaseData.getSettingsModuleValue("ScreenName3"));
  }

  async verifyScreenName4InGrid(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIScreenPermissionGridTable,
    // BaseData.getSettingsModuleValue("ScreenName4"));
  }

  async verifyDelectOptionIsUnchecked(): Promise<void> {
    // boolean selected = uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIDelectCheckBox.isSelected();
    // verify.ExpectedValueIsTrue(selected);
  }

  async verifyScreenIdFieldIsEmpty(): Promise<void> {
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIScreenIdEdit.getText().isBlank();
  }

  async saveScreen(): Promise<void> {
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIsaveButton.click();
    // popup.confirm.yes();
  }

  async citationVoidPermissionUncheckChangeCheckBox(): Promise<void> {
    // WebElement element = Playback.driver.findElement(By.id("grdScreenPermission_it12_0_CKChange"));
    // if (element.isEnabled() && element.isSelected()) {
    // element.click();
  }

  async verifyDeleteCheckboxIsUnchecked(): Promise<void> {
    // boolean unchecked = uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIDelectCheckBox.isSelected();
    // verify.ExpectedValueIsFalse(unchecked);
  }

  async verifyPrintCheckboxIsDisabled(): Promise<void> {
    // WebElement columnCell = Playback.driver.findElement(By.id("grdScreenPermission_it15_0_CKPrint"));
    // verify.ExpectedValueIsFalse(columnCell.isEnabled());
  }

  async verifySearchCheckboxIsNotSelectedAndDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uISearchCheckBox.isSelected());
    // verify.ExpectedValueIsFalse(
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uISearchCheckBox.isEnabled());
  }

  async verifyAddNewCheckboxIsNotSelectedAndDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIAddNewCheckBox.isSelected());
    // verify.ExpectedValueIsFalse(
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIAddNewCheckBox.isEnabled());
  }

  async verifyDeleteCheckboxIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIDelectCheckBox.isEnabled());
  }

  async verifyChangeCheckboxIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIChangeCheckBox.isEnabled());
  }

  async verifyDeleteCheckBoxIsEnabled(): Promise<void> {
    // boolean enabled = uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIDelectCheckBox.isEnabled();
    // verify.ExpectedValueIsTrue(enabled);
  }

  async clickDeleteCheckBox(): Promise<void> {
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIDelectCheckBox.click();
  }

  async clickChangeCheckbox(): Promise<void> {
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIChangeCheckBox.click();
  }

  async verifyAddNewCheckBoxIsSelected(): Promise<void> {
    // WebElement columnCell = Playback.driver.findElement(By.id("grdScreenPermission_it13_0_CKAdd"));
    // verify.ExpectedValueIsTrue(columnCell.getAttribute("checked").equals("true"));
  }

  async verifySearchCheckBoxIsSelected(): Promise<void> {
    // WebElement columnCell = Playback.driver.findElement(By.id("grdScreenPermission_it11_0_CInquiry"));
    // verify.ExpectedValueIsTrue(columnCell.getAttribute("checked").equals("true"));
  }

  async verifyAddNewCheckBoxIsNotSelected(): Promise<void> {
    // boolean unchecked = Playback.driver.findElement(By.id("grdScreenPermission_it13_0_CKAdd")).isSelected();
    // verify.ExpectedValueIsFalse(unchecked);
  }

  async verifySearchCheckBoxIsNotSelected(): Promise<void> {
    // boolean unchecked = Playback.driver.findElement(By.id("grdScreenPermission_it11_0_CInquiry")).isSelected();
    // verify.ExpectedValueIsFalse(unchecked);
  }

  async verifyChangeCheckBoxIsUnchecked(): Promise<void> {
    // boolean unchecked = uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIChangeCheckBox.isSelected();
    // verify.ExpectedValueIsFalse(unchecked);
  }

  async clickPrintCheckbox(): Promise<void> {
    // uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIPrintCheckBox.click();
  }

  async verifyVehicleActivityToolTipInGrid(): Promise<void> {
    // String attribute = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.rolesEntry.rolesEntryPermissionWindow.uIScreenPermissionGridTable, BaseData.getSettingsModuleValue("ID")).getAttribute("title");
    // verify.ExpectedPropertyValueIsEqual("Vehicle Activity", attribute);
  }

  async clickTrafficEditPermissionButton(): Promise<void> {
    // uIMapSettings.rolesEntry.uITrafficEditPermissionButton.click();
  }

  async clickReportRepositoryEntryEditPermissionButton(): Promise<void> {
    // uIMapSettings.rolesEntry.uIReportRepositoryEntryEditPermissionButton.click();
  }

  async clickAccountingEditPermissionButton(): Promise<void> {
    // uIMapSettings.rolesEntry.uIAccountingEditPermissionButton.click();
  }

  async clickAtAddNewCheckbox(): Promise<void> {
    // uIMapSettings.rolesEntry.uIAddNewCheckBox.click();
  }

  async clickAtSearchCheckBoxByScreenNameInGrid(): Promise<void> {
    // WebElement tableRow = uIMapSettings.rolesEntry.uISearchResultTable
    // .findElement(By.xpath(".//table/tbody[contains(@class,'Item')]"));
    // WebElement row = tableRow
    // .findElement(By.xpath(".//tr/td[contains(text(), '" + BaseData.getSettingsModuleValue("ScreenName")
    // + "') and @aria-describedby='grdScreenPermission_columnheader_3']"));
    // WebElement tr = row.findElement(By.xpath(".."));
    // tr.findElement(By.xpath("//td[@aria-describedby='grdScreenPermission_columnheader_11']//input")).click();
  }

  async verifyUpdateSuccessfulMessage(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapSettings.rolesEntry.uIBottomLeftSideStatusBar.getText().contains("1003 - Update Successful"));
  }

  async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.rolesEntry.uIBottomLeftSideStatusBar.getText());
  }

  async enterAtRoleName(): Promise<void> {
    // uIMapSettings.rolesEntry.uIRoleNameEdit.sendKeys(BaseData.getSettingsModuleValue("RoleName"));
  }

  async enterAtRoleDescription(): Promise<void> {
    // uIMapSettings.rolesEntry.uIRoleDescriptionEdit.sendKeys(BaseData.getSettingsModuleValue("RoleDescription"));
  }

  async clickSelectAllScheckBox(): Promise<void> {
    // uIMapSettings.rolesEntry.uISelectAllCheckBox.click();
  }

  async UnCheckSelectAllCheckBox(): Promise<void> {
    // uIMapSettings.rolesEntry.uISelectAllCheckBox.click();
  }

  async clickK9EditPermission(): Promise<void> {
    // objectIdentification.manualIdentify.scrollIntoView(uIMapSettings.rolesEntry.uIK9EditPermission);
    // uIMapSettings.rolesEntry.uIK9EditPermission.click();
  }

  async clickEditPermissionButtonByModule(module: string): Promise<void> {
    // uIMapSettings.rolesEntry.uIPermissionGrid.findElement(By.xpath("//td[contains(text(),'" + module
    // + "')]//following-sibling::td//input[contains(@id,'btnScreenPermission')]")).click();
  }

  async saveAndClose(): Promise<void> {
    // uIMapSettings.rolesEntry.uISaveandCloseButton.click();
    // popup.confirm.yes();
  }

  async enterAtScreenID1(): Promise<void> {
    // uIMapSettings.rolesEntry.uIScreenIDedit.sendKeys(BaseData.getSettingsModuleValue("ScreenID1"));
    // uIMapSettings.rolesEntry.uIScreenIDedit.sendKeys(Keys.TAB);
    // Playback.waitForControlReady();
  }

  async clearScreenID(): Promise<void> {
    // uIMapSettings.rolesEntry.uIScreenIDedit.clear();
  }

  async clickViewHistoryButton(): Promise<void> {
    // uIMapSettings.rolesEntry.uIViewHistoryButton.click();
  }

  async clickResetIcon(): Promise<void> {
    // uIMapSettings.rolesEntry.uIResetButton.click();
    // Playback.controlReadyThreadWait();
  }

  async clickExpandIconByModuleInGrid(): Promise<void> {
    // WebElement row = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.rolesEntry.uIPermissionGrid, BaseData.getSettingsModuleValue("Module"));
    // row.findElement(By.xpath(".//img[@title='Expand Row']")).click();
    // Playback.gridLoadThreadWait();
  }

  async verifyInfoIconIsDisplayedForAllScreensInGrid(): Promise<void> {
    // List<WebElement> infoIcons = uIMapSettings.rolesEntry.uIPermissionGrid
    // .findElements(By.xpath(".//img[contains(@id,'imgInfo')]"));
    // System.out.println(infoIcons.size());
    // for (WebElement icon : infoIcons) {
    // verify.ExpectedValueIsTrue(icon.isDisplayed(), "Info icon not displayed -->");
  }

  async clickInfoIconByScreenIDInGrid(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.rolesEntry.uIPermissionGrid, BaseData.getSettingsModuleValue("ScreenID"));
    // gridRowByCellInnerText.findElement(By.xpath(".//img[contains(@id,'imgInfo')]")).click();
  }

  async verifyAtToolTipByScreenIDInGrid(): Promise<void> {
    // String attribute = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.rolesEntry.uIPermissionGrid, BaseData.getSettingsModuleValue("ScreenID"))
    // .getAttribute("title");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Tooltip"), attribute);
  }

  async verifyAtToolTipByScreenNameInGrid(): Promise<void> {
    // String attribute = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.rolesEntry.uIPermissionGrid,
    // BaseData.getSettingsModuleValue("ScreenName"))
    // .getAttribute("title");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Tooltip"), attribute);
  }

  async verifyInfoIconToolTipByScreenIDInGrid(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.rolesEntry.uIPermissionGrid, BaseData.getSettingsModuleValue("ScreenID"));
    // String attribute = gridRowByCellInnerText.findElement(By.xpath(".//img[contains(@id,'imgInfo')]"))
    // .getAttribute("title");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Tooltip"), attribute);
  }

  async verifyJurisFieldIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapSettings.rolesEntry.uIJurisDropdown.isEnabled());
  }

  async enterAtPF(): Promise<void> {
    // uIMapSettings.rolesEntry.uIPFEdit.sendKeys(BaseData.getSettingsModuleValue("PF"));
    // uIMapSettings.rolesEntry.uIPFEdit.sendKeys(Keys.TAB);
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.rolesEntry.uIAddButton.click();
  }

  async verifyAtPFCodeInGrid(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.rolesEntry.uIPFAllowerRolesGrid, BaseData.getSettingsModuleValue("PFCode"));
    // verify.ExpectedValueIsTrue(
    // gridRowByCellInnerText.getText().contains(BaseData.getSettingsModuleValue("PFCode")));
  }

  async selectAtPFRowCheckBoxInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
    // uIMapSettings.rolesEntry.uIPFAllowerRolesGrid, BaseData.getSettingsModuleValue("PFCode"));
  }

  async clickDeleteSelectedButton(): Promise<void> {
    // uIMapSettings.rolesEntry.uIDeletedSelectedButton.click();
  }

  async verify4DoYouReallyWantToDeleteConfirmationPopup(): Promise<void> {
    // popup.confirm.yesWithExpectedMessage("(4) Do you really want to delete?");
  }

  async verifyRecordNotExistInGrid(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.rolesEntry.uIPFAllowerRolesGrid, "PFCode");
    // verify.ExpectedValueIsFalse(gridTableColumnValues.contains(BaseData.getSettingsModuleValue("PFCode")));
  }

  async verifyAtModuleInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapSettings.rolesEntry.uIModulePermissionGrid,
    // BaseData.getSettingsModuleValue("Module"))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("Module")));
  }

  async clickCitizenServicesEditPermissionButton(): Promise<void> {
    // uIMapSettings.rolesEntry.uICitizenServicesEditPermissionButton.click();
  }

  async verifyPermissionsAreChecked(i: number): Promise<void> {
    // List<WebElement> permissions = Playback.driver.findElements(By.xpath("//table//tr[contains(@data-rowkey,'"
    // + BaseData.getSettingsModuleValue("ScreenID" + i) + "')]//input"));
    // for (WebElement permission : permissions) {
    // if (permission.isDisplayed()) {
    // if (permission.isEnabled()) {
    // verify.ExpectedValueIsTrue(permission.isSelected());
  }

  async enterAtScreenID(i: number): Promise<void> {
    // uIMapSettings.rolesEntry.uIScreenIDedit.sendKeys(BaseData.getSettingsModuleValue("ScreenID" + i));
    // Playback.waitForControlReady();
  }

  async verifyEnterMandatoryDataAcknowledge(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(8) Enter mandatory data");
  }

  async verifyPermissionsAreDisabled(): Promise<void> {
    // List<WebElement> elements = uIMapSettings.rolesEntry.uIPermissionGrid.findElements(By.xpath("//table//tr//td//span"));
    // for(WebElement ele:elements) {
    // if(ele.getAttribute("disabled") != null) {
    // WebElement element = ele.findElement(By.tagName("input"));
    // boolean enabled = element.isEnabled();
    // verify.ExpectedValueIsFalse(enabled);
    // else {
    // System.out.println("value is not equal ----->");
  }

  async clickSettingsEditPermission(): Promise<void> {
    // uIMapSettings.rolesEntry.uISettingsEditPermissionButton.click();
  }

  async verifyAddCheckBoxIsCheckedInGrid(): Promise<void> {
    // List<WebElement> elements = uIMapSettings.rolesEntry.uISearchResultTable.findElements
    // (By.id("//div[@id='grdScreenPermission']//table//tbody//tr//td//input[@id=\"grdScreenPermission_it13_0_CKAdd\"]"));
    // for(WebElement ele:elements) {
    // boolean selected = ele.isSelected();
    // verify.ExpectedValueIsTrue(selected);
  }

  async enterAtScreenName(i: number): Promise<void> {
    // uIMapSettings.rolesEntry.uIScreenNameEdit.sendKeys(BaseData.getSettingsModuleValue("ScreenName"+i));
  }

  async clickFTOEditPermissionButton(): Promise<void> {
    // uIMapSettings.rolesEntry.uIFTOEditPermissionButton.click();
  }

  async clearScreenName(): Promise<void> {
    // uIMapSettings.rolesEntry.uIScreenNameEdit.click();
    // uIMapSettings.rolesEntry.uIScreenNameEdit.clear();
  }

  async verifyAddCheckBoxIsUnCheckedInGrid(): Promise<void> {
    // List<WebElement> elements = uIMapSettings.rolesEntry.uISearchResultTable.findElements
    // (By.id("//div[@id='grdScreenPermission']//table//tbody//tr//td//input[@id=\"grdScreenPermission_it13_0_CKAdd\"]"));
    // for(WebElement ele:elements) {
    // boolean selected = ele.isSelected();
    // verify.ExpectedValueIsTrue(selected);
  }

  async clickCADQAQIEditPermissionButton(): Promise<void> {
    // uIMapSettings.rolesEntry.uICADQAQIEditPermissionButton.click();
  }

  async verifyRoleNameFieldIsDisabled(): Promise<void> {
    // boolean enabled = uIMapSettings.rolesEntry.uIRoleNameEdit.isEnabled();
    // verify.ExpectedValueIsFalse(enabled);
  }

  async clickAtAvailableRoleButtonByJurisName(columnIndex: number, Jurisname: number): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText
    // (uIMapSettings.rolesEntry.uICopyRoleResultTable,BaseData.getSettingsModuleValue("JurisName"+Jurisname));
    // gridRowByCellInnerText.findElement(By.xpath("td[" + columnIndex +"]")).click();
  }

  async verify6017NoRecordsFoundAcknowledge(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(6017) No Records Found");
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapSettings.rolesEntry.uIPrintIcon.click();
  }

  async verifyAtJuris(jsonIndexValue: number): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.rolesEntry.uIJurisDropdown);
    // verify.ExpectedPropertyValueIsEqual(dropDownSelectedItem, BaseData.getSettingsModuleValue("Juris" + jsonIndexValue));
  }

  async clickColumnHeaderByAtColumnName(jsonIndexValue: number): Promise<void> {
    // objectIdentification.manualIdentify
    // .getGridHeaderColumnCell(uIMapSettings.rolesEntry.uILinkedRoleTable, BaseData.getSettingsModuleValue("ColumnName" + jsonIndexValue)).click();
    // Playback.threadWait();
  }

  async verifyAtColumnValuesSortedAscendingOrder(JsonIndexValue: number): Promise<void> {
    // List<String> columnValue = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapSettings.rolesEntry.uILinkedRoleTable, BaseData.getSettingsModuleValue("ColumnHeader" + JsonIndexValue));
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedAscending(uIMapSettings.rolesEntry.uILinkedRoleTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + JsonIndexValue), columnValue);
  }

  async verifyAtColumnValuesSortedDescendingOrder(JsonIndexValue: number): Promise<void> {
    // List<String> columnValue = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapSettings.rolesEntry.uILinkedRoleTable, BaseData.getSettingsModuleValue("ColumnHeader" + JsonIndexValue));
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedDescending(uIMapSettings.rolesEntry.uILinkedRoleTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + JsonIndexValue), columnValue);
  }

}

export class RepositoryPage {
  readonly page: Page;
  readonly repositoryResultTable: Locator;
  readonly repositoryIDEdit: Locator;
  readonly defaultNameEdit: Locator;
  readonly searchButton: Locator;
  readonly repositoryTypeComboBox: Locator;
  readonly jurisEdit: Locator;
  readonly addNewButton: Locator;
  readonly nextButton: Locator;
  readonly prevButton: Locator;
  readonly searchLinkButton: Locator;
  readonly goToScreenButton: Locator;
  readonly roleNameEdit: Locator;
  readonly repositoryLink: Locator;
  readonly repositoryIDColumnHeader: Locator;
  readonly repositoryTypeColumnHeader: Locator;
  readonly defaultNameColumnHeader: Locator;
  readonly repositoryTypeDropDown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.repositoryResultTable = page.locator('#grdRepository');
    this.repositoryIDEdit = page.locator('#txtRepositoryID');
    this.defaultNameEdit = page.locator('#txtName');
    this.searchButton = page.locator('#cmdSearch');
    this.repositoryTypeComboBox = page.locator('#lstIDType');
    this.jurisEdit = page.locator('#lstJuris');
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.nextButton = page.locator("//a[@id =\'grdRepository_ctl00_lnkbtnNext\']");
    this.prevButton = page.locator("//a[@id =\'grdRepository_ctl00_lnkbtnPrev\']");
    this.searchLinkButton = page.locator("//span[contains(text(),\'Search\')]");
    this.goToScreenButton = page.locator("//a[@class=\'igdm_BlueThemeMenuItemHorizontalRootLink \']/span[contains(text(),\'GoTo Screen\')]");
    this.roleNameEdit = page.locator('#txtRoleName');
    this.repositoryLink = page.locator("(//span[text()=\'Repository Link\'])[1]");
    this.repositoryIDColumnHeader = page.locator("//th[text()=\'Repository ID\']");
    this.repositoryTypeColumnHeader = page.locator("//th[text()=\'Repository Type\']");
    this.defaultNameColumnHeader = page.locator("//th[text()=\'Default Name\']");
    this.repositoryTypeDropDown = page.locator('#lstIDType');
  }

  async clickSearch(): Promise<void> {
    // uIMapSettings.repository.uISearchButton.click();
  }

  async selectTypeAsScreen(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.repository.uIRepositoryTypeComboBox,
    // "Screen");
  }

  async enterScreenIDAs2275(): Promise<void> {
    // uIMapSettings.repository.uIRepositoryIDEdit.sendKeys("2275");
  }

  async enterScreenIDAs1387(): Promise<void> {
    // uIMapSettings.repository.uIRepositoryIDEdit.clear();
    // uIMapSettings.repository.uIRepositoryIDEdit.sendKeys("1387");
  }

  async clickNextButton(): Promise<void> {
    // uIMapSettings.repository.uINextButton.click();
  }

  async clickPrevButton(): Promise<void> {
    // uIMapSettings.repository.uIPrevButton.click();
  }

  async selectGoToScreenMenu(): Promise<void> {
    // objectIdentification.randomIdentify.selectContextMenuItemInRepositoryGridRow("GoTo Screen");
  }

  async selectCheckBoxInGrid(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectRandomGridRowCheckbox(uIMapSettings.repository.uIRepositoryResultTable);
  }

  async clickGOTOScreenLink(): Promise<void> {
    // uIMapSettings.repository.uIGoToScreenButton.click();
  }

  async verifyScreenShowsError(): Promise<void> {
    // if (objectIdentification.windowHandle.windowExist("Acknowledge"))
    // popup.acknowledge.ok();
    // else {
    // if (Playback.driver.getTitle().contains("Text")) {
    // try {
    // verify.ExpectedValueIsTrue(Playback.driver.findElement(By.id("cmdSearch")).isDisplayed());
    // Playback.driver.findElement(By.id("cmdSearch")).click();
    // uIMapSettings.repository.driver.close();
    // } catch (Exception e) {
    // System.out.println("Search Element not Displayed");
    // } else {
    // String dropDownSelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.repository.uIJurisEdit);
    // verify.ExpectedValueIsTrue(dropDownSelectedItem.contains("ProPhoenix"));
    // Playback.pageLoadThreadWait();
  }

  async close(): Promise<void> {
    // uIMapSettings.repository.driver.close();
  }

  async verifyDefaultNameAsCellStatus(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("Cell Status", objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.repository.uIRepositoryResultTable, "Default Name", rowIndex));
  }

  async verifyRepositoryIDAs2275(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("2275", objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.repository.uIRepositoryResultTable, "Repository ID", rowIndex));
  }

  async verifyRepositoryIDAs1387(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1387", objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.repository.uIRepositoryResultTable, "Repository ID", rowIndex));
  }

  async verifyDefaultNameAsJailCell(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("Jail Cell", objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.repository.uIRepositoryResultTable, "Default Name", rowIndex));
  }

  async enterAtRepositoryID(): Promise<void> {
    // uIMapSettings.repository.uIRepositoryIDEdit.sendKeys(BaseData.getSettingsModuleValue("RepositoryID"));
    // uIMapSettings.repository.uIRepositoryIDEdit.sendKeys(Keys.TAB);
  }

  async selectAtRepositoryIDInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.repository.uIRepositoryResultTable, BaseData.getSettingsModuleValue("RepositoryID"));
  }

  async enterAtCustomName(): Promise<void> {
    // uIMapSettings.repositoryEntry.uICustomNameEdit.sendKeys(BaseData.getSettingsModuleValue("CustomName"));
  }

  async verifyUpdateSuccessFullMessage(): Promise<void> {
    // String BottomMessage = uIMapSettings.repositoryEntry.uIBottomStatus.getText();
    // verify.ExpectedPropertyValueIsEqual(BottomMessage, "1003 - Update Successful");
  }

  async verifyAtCustomNameInGrid(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.repository.uIRepositoryResultTable, BaseData.getSettingsModuleValue("CustomName"));
    // verify.ExpectedValueIsTrue(
    // gridRowByCellInnerText.getText().contains(BaseData.getSettingsModuleValue("CustomName")));
  }

  async selectGoToScreenMenuUsingRepositoryID(): Promise<void> {
    // objectIdentification.manualIdentify.selectContextMenuItemInTheGridRow(
    // uIMapSettings.repository.uIRepositoryResultTable, BaseData.getSettingsModuleValue("RepositoryID"),
    // "GoTo Screen");
  }

  async selectGoToScreenMenuUsingDefaultName(): Promise<void> {
    // objectIdentification.manualIdentify.selectContextMenuItemInTheGridRow(
    // uIMapSettings.repository.uIRepositoryResultTable, BaseData.getSettingsModuleValue("DefaultName"),
    // "GoTo Screen");
  }

  async clickRepositoryLink(): Promise<void> {
    // uIMapSettings.repository.uIRepositoryLink.click();
  }

  async enterAtRepositoryID1(): Promise<void> {
    // uIMapSettings.repository.uIRepositoryIDEdit.sendKeys(BaseData.getSettingsModuleValue("RepositoryID1"));
    // uIMapSettings.repository.uIRepositoryIDEdit.sendKeys(Keys.TAB);
  }

  async clearRepositoryID(): Promise<void> {
    // uIMapSettings.repository.uIRepositoryIDEdit.clear();
  }

  async clickRepositoryIDColumnHeader(): Promise<void> {
    // uIMapSettings.repository.uIRepositoryIDColumnHeader.click();
  }

  async verifyAtColumnValuesAreSortedDescendingOrder(i: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedDescendingCaseInsensitive(
    // uIMapSettings.repository.uIRepositoryResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i),
    // objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.repository.uIRepositoryResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i)));
  }

  async verifyAtColumnValuesAreSortedAscendingOrder(i: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedAscendingCaseInsensitive(
    // uIMapSettings.repository.uIRepositoryResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i),
    // objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.repository.uIRepositoryResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i)));
  }

  async clickRepositoryTypeColumnHeader(): Promise<void> {
    // uIMapSettings.repository.uIRepositoryTypeColumnHeader.click();
  }

  async clickDefaultNameColumnHeader(): Promise<void> {
    // uIMapSettings.repository.uIDefaultNameColumnHeader.click();
  }

  async selectAtRepositoryType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.repository.uIRepositoryTypeDropDown,
    // BaseData.getSettingsModuleValue("RepositoryType"));
  }

  async clickGridHeader(gridHeader: string): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectGridHeaderColumnNameWithoutContains(uIMapSettings.repository.uIRepositoryLink, gridHeader);
  }

  async verifyGridIsEmpty(): Promise<void> {
    // verify.ExpectedIntergerValueIsEqualToActual(0, objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapSettings.repository.uIRepositoryLink), "Grid contains data -->");
  }

}

export class ChargeScreenPage {
  readonly page: Page;
  readonly chargeCodeEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly searchButton: Locator;
  readonly typeComboBox: Locator;
  readonly chargeResultTable: Locator;
  readonly addNewButton: Locator;
  readonly inactiveCheckBox: Locator;
  readonly nIBRSCodeEdit: Locator;
  readonly nIBRSSearchICon: Locator;
  readonly cFSCodeEdit: Locator;
  readonly stateDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.chargeCodeEdit = page.locator('#txtChargeCode');
    this.descriptionEdit = page.locator('#txtShortDesc');
    this.searchButton = page.locator('#cmdSearch');
    this.typeComboBox = page.locator('#cddChargeType_DropDown');
    this.chargeResultTable = page.locator('#grdCharge');
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.inactiveCheckBox = page.locator('#chkIsActive');
    this.nIBRSCodeEdit = page.locator('#lupNibrs_CodeValue');
    this.nIBRSSearchICon = page.locator('#lupNibrs_imgBtn');
    this.cFSCodeEdit = page.locator('#lupRelCFSCode_CodeValue');
    this.stateDropdown = page.locator('#cddDemoState_DropDown');
  }

  async enterAtChargeCode(): Promise<void> {
    // uIMapSettings.chargeScreen.uIChargeCodeEdit.sendKeys(BaseData.getSettingsModuleValue("ChargeCode"));
  }

  async clickAddNew(): Promise<void> {
    // uIMapSettings.chargeScreen.uIAddNewButton.click();
  }

  async clickSearchButton(): Promise<void> {
    // uIMapSettings.chargeScreen.uISearchButton.click();
  }

  async verifyAtChargeCode(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ChargeCode"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.chargeScreen.uIChargeResultTable, "Charge Code", rowIndex));
  }

  async verifyAtCFSCode(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("CFSCode"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.chargeScreen.uIChargeResultTable, "CFS Code", rowIndex));
  }

  async verifyAtNIBRS(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("NIBRSCode"),
    // objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.chargeScreen.uIChargeResultTable, "NIBRS", rowIndex));
  }

  async clickAtChargeCodeinGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.chargeScreen.uIChargeResultTable, BaseData.getSettingsModuleValue("ChargeCode"));
  }

  async clickInactiveCheckbox(): Promise<void> {
    // uIMapSettings.chargeScreen.uIInactiveCheckBox.click();
  }

  async verifyInactiveChargeRowColor(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridTableRow(uIMapSettings.chargeScreen.uIChargeResultTable, rowIndex).getAttribute("class")
    // .contains("IsActive"));
  }

  async enterAtNIBRS(): Promise<void> {
    // uIMapSettings.chargeScreen.uINIBRSCodeEdit.sendKeys(BaseData.getSettingsModuleValue("NIBRS"));
    // uIMapSettings.chargeScreen.uINIBRSCodeEdit.sendKeys(Keys.TAB);
  }

  async clickNIBRSSearchIcon(): Promise<void> {
    // uIMapSettings.chargeScreen.uINIBRSSearchICon.click();
  }

  async enterAtCFSCode(): Promise<void> {
    // uIMapSettings.chargeScreen.uICFSCodeEdit.sendKeys(BaseData.getSettingsModuleValue("CFSCode"));
    // uIMapSettings.chargeScreen.uICFSCodeEdit.sendKeys(Keys.TAB);
  }

  async selectAtCFSCodeInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.chargeScreen.uIChargeResultTable, BaseData.getSettingsModuleValue("CFSCode"));
  }

  async selectAtState(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.chargeScreen.uIStateDropdown,
    // BaseData.getSettingsModuleValue("State"));
  }

}

export class SharedCodesPage {
  readonly page: Page;
  readonly chargeCodeEdit: Locator;
  readonly stateSequanceEdit: Locator;
  readonly chargeTypeComboBox: Locator;
  readonly descriptionEdit: Locator;
  readonly descriptionSharedCodedEdit: Locator;
  readonly relatedCFSCodeEdit: Locator;
  readonly callForServiceEdit: Locator;
  readonly alarmComboBox: Locator;
  readonly subLevelComboBox: Locator;
  readonly dispatchPriorityComboBox: Locator;
  readonly agencyComboBox: Locator;
  readonly nFIRSReportCheckbox: Locator;
  readonly eMSReportCheckbox: Locator;
  readonly dARouteComboBox: Locator;
  readonly relatedMOCCodeEdit: Locator;
  readonly chargeLocalCodeEdit: Locator;
  readonly nibrsCodeEdit: Locator;
  readonly nCICCodeEdit: Locator;
  readonly nibrsResultTable: Locator;
  readonly addButton: Locator;
  readonly addButtonForFire: Locator;
  readonly addNewButton: Locator;
  readonly searchButton: Locator;
  readonly inactiveCheckBox: Locator;
  readonly inactiveDateEdit: Locator;
  readonly saveButton: Locator;
  readonly saveandCloseButton: Locator;
  readonly resetButton: Locator;
  readonly dispositionEdit: Locator;
  readonly typeComboBox: Locator;
  readonly cADTab: Locator;
  readonly distributedToTab: Locator;
  readonly managementTab: Locator;
  readonly sOPTab: Locator;
  readonly popUpCodeValueEdit: Locator;
  readonly popUpDescriptionEdit: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly codeValueEdit: Locator;
  readonly mapLayerIconSelect: Locator;
  readonly mapLayerIconDropdown: Locator;
  readonly codeAddButton: Locator;
  readonly codeValueSeachEdit: Locator;
  readonly codeValueTable: Locator;
  readonly sharedCodesResultTable: Locator;
  readonly userCommandCodeEdit: Locator;
  readonly dispOrderCodeEdit: Locator;
  readonly zipCodeEdit: Locator;
  readonly stateDropDown: Locator;
  readonly cityEdit: Locator;
  readonly locationTypeDropDown: Locator;
  readonly locationNameEdit: Locator;
  readonly downloadButton: Locator;
  readonly uploadButton: Locator;
  readonly deleteCustomReport: Locator;
  readonly addButtonInPopUp: Locator;
  readonly statutoryLimitationEdit: Locator;
  readonly cFSTypeComboBox: Locator;
  readonly cFSClassEdit: Locator;
  readonly popupInactiveCheckBox: Locator;
  readonly codeIDEdit: Locator;
  readonly popUpTowVendor: Locator;
  readonly refEdit: Locator;
  readonly allowPurgeCheckBox: Locator;
  readonly doNotPurgeCheckBox: Locator;
  readonly sortOrderEditPopUp: Locator;
  readonly clearButton: Locator;
  readonly statusBar: Locator;
  readonly dispositionCodeEdit: Locator;
  readonly documentTypeEdit: Locator;
  readonly offenseCodeEdit: Locator;
  readonly propertyCategoryDropdown: Locator;
  readonly propertyCodeEdit: Locator;
  readonly statusCodeEdit: Locator;
  readonly screenIDEdit: Locator;
  readonly reportTypeDropdown: Locator;
  readonly screenCategoryRadDropdownArrow: Locator;
  readonly screenCategoryRadDropdown: Locator;
  readonly formNameEdit: Locator;
  readonly fileNameEdit: Locator;
  readonly makeEdit: Locator;
  readonly modelCodeEdit: Locator;
  readonly modelDescriptionEdit: Locator;
  readonly effectiveDateEdit: Locator;
  readonly editCodeIdButton: Locator;
  readonly sharedCodeScreenCodeIDEdit: Locator;
  readonly printIcon: Locator;
  readonly mJCategoryDropDown: Locator;
  readonly codeValueDescription: Locator;
  readonly cFSCodeEdit: Locator;
  readonly expireDateEdit: Locator;
  readonly popCategoryDropDown: Locator;
  readonly sharedCheckBox: Locator;
  readonly chargeCodeLable: Locator;
  readonly chargeTypeCodeLabel: Locator;
  readonly descriptionLabel: Locator;
  readonly relatedCFSCodeLabel: Locator;
  readonly nIBRSCodeLabel: Locator;
  readonly resetIcon: Locator;
  readonly punitiveClosingOrderLink: Locator;
  readonly popUpSpeciesDropDown: Locator;
  readonly popUpDeleteButton: Locator;
  readonly dashBoardPreviewIcon: Locator;
  readonly currentFee: Locator;
  readonly activeDate: Locator;
  readonly questionTable: Locator;
  readonly textLabelStatus: Locator;
  readonly systemCheckbox: Locator;
  readonly accountModuleCheckbox: Locator;
  readonly codeValueLengthEdit: Locator;
  readonly userAndSystemCheckbox: Locator;
  readonly codeCancelButton: Locator;
  readonly mainTab: Locator;
  readonly inactiveDateEditForFire: Locator;
  readonly linkedCFSTab: Locator;
  readonly municipalityDropDown: Locator;
  readonly itemTypeDropDown: Locator;
  readonly popupInvCategoryDropDown: Locator;
  readonly popupItemTypeDropDown: Locator;
  readonly adjustmentPercentDropdown: Locator;
  readonly isDefaultRadControlDropDownTray: Locator;
  readonly isDefaultArrow: Locator;
  readonly isDefaultDropDownField: Locator;
  readonly vehicleMakeModelTable: Locator;
  readonly inventoryTypePopUpTray: Locator;
  readonly popUpInventoryTypeArrow: Locator;
  readonly inventoryTypeDropDown: Locator;
  readonly courtAddressEdit: Locator;
  readonly negativeCheckbox: Locator;
  readonly nameMandatoryCheckbox: Locator;
  readonly jurisDropdown: Locator;
  readonly dashboardCategoryDropdown: Locator;
  readonly versionEdit: Locator;
  readonly dashboardCodeEdit: Locator;
  readonly popUpDelete1Button: Locator;
  readonly bondCheckbox: Locator;
  readonly sentenceCheckbox: Locator;
  readonly cancelButtonInPopUp: Locator;

  constructor(page: Page) {
    this.page = page;
    this.chargeCodeEdit = page.locator('#txtChargeCode');
    this.stateSequanceEdit = page.locator('#txtStateSeqNo');
    this.chargeTypeComboBox = page.locator('#cddChargeType_DropDown');
    this.descriptionEdit = page.locator('#txtDescription');
    this.descriptionSharedCodedEdit = page.locator('#txtDescription');
    this.relatedCFSCodeEdit = page.locator('#lupRelCFSCode_CodeValue');
    this.callForServiceEdit = page.locator('#txtCFSCode');
    this.alarmComboBox = page.locator('#cddAlarm_DropDown');
    this.subLevelComboBox = page.locator('#cddSubAlarm_DropDown');
    this.dispatchPriorityComboBox = page.locator('#cddDPPri_DropDown');
    this.agencyComboBox = page.locator('#cddAgency_DropDown');
    this.nFIRSReportCheckbox = page.locator('#chkNFIRS');
    this.eMSReportCheckbox = page.locator('#chkEMS');
    this.dARouteComboBox = page.locator('#cddDaRoute_DropDown');
    this.relatedMOCCodeEdit = page.locator('#txtMOC');
    this.chargeLocalCodeEdit = page.locator('#txtchargelocalcode');
    this.nibrsCodeEdit = page.locator('#lupNibrsCode_CodeValue');
    this.nCICCodeEdit = page.locator('#lupNCIC_CodeValue');
    this.nibrsResultTable = page.locator('#grdNibrs');
    this.addButton = page.locator('#imgAdd');
    this.addButtonForFire = page.locator('#cmdAdd');
    this.addNewButton = page.locator('#cmdAddNew');
    this.searchButton = page.locator('#cmdSearch');
    this.inactiveCheckBox = page.locator('#chkIsActive');
    this.inactiveDateEdit = page.locator('#txtInActiveDttm');
    this.saveButton = page.locator('#cmdSave');
    this.saveandCloseButton = page.locator('#cmdSaveNClose');
    this.resetButton = page.locator('#cmdRefresh');
    this.dispositionEdit = page.locator('#txtDisposition');
    this.typeComboBox = page.locator('#cddActCode_DropDown');
    this.cADTab = page.locator("//span[contains(text(),\'CAD\')]");
    this.distributedToTab = page.locator("//span[contains(text(),\'Distributed To\')]");
    this.managementTab = page.locator("//span[contains(text(),\'Management\')]");
    this.sOPTab = page.locator("//span[contains(text(),\'SOP\')]");
    this.popUpCodeValueEdit = page.locator('#txtCodeValue');
    this.popUpDescriptionEdit = page.locator('#txtDescription');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']//b");
    this.codeValueEdit = page.locator('#txtInqcodevalue');
    this.mapLayerIconSelect = page.locator('#radMapLayer_Input');
    this.mapLayerIconDropdown = page.locator('#radMapLayer_DropDown');
    this.codeAddButton = page.locator("//input[@id=\'cmdAdd\']");
    this.codeValueSeachEdit = page.locator('#txtInqcodevalue');
    this.codeValueTable = page.locator('#grdCodeValue');
    this.sharedCodesResultTable = page.locator('#grdCodeValue');
    this.userCommandCodeEdit = page.locator('#txtUserCC');
    this.dispOrderCodeEdit = page.locator('#txtDispOrder');
    this.zipCodeEdit = page.locator('#txtZIP');
    this.stateDropDown = page.locator('#cddState_DropDown');
    this.cityEdit = page.locator('#txtCity');
    this.locationTypeDropDown = page.locator('#cddLocType_DropDown');
    this.locationNameEdit = page.locator('#txtLocDesc');
    this.downloadButton = page.locator('#cmdCustomize');
    this.uploadButton = page.locator('#cmdUpload');
    this.deleteCustomReport = page.locator('#cmdDeleteCustom');
    this.addButtonInPopUp = page.locator('#cmdAdd');
    this.statutoryLimitationEdit = page.locator('#txtStatutoryLimit');
    this.cFSTypeComboBox = page.locator('#cddCFSType_DropDown');
    this.cFSClassEdit = page.locator('#lupCFSClass_CodeValue');
    this.popupInactiveCheckBox = page.locator('#chkActive');
    this.codeIDEdit = page.locator('#txtCodeID');
    this.popUpTowVendor = page.locator('#lstVendor');
    this.refEdit = page.locator('#txtXRef1');
    this.allowPurgeCheckBox = page.locator('#chkPurge');
    this.doNotPurgeCheckBox = page.locator('#chkAllowPurge');
    this.sortOrderEditPopUp = page.locator('#txtSortSeqNo');
    this.clearButton = page.locator('#imgClear');
    this.statusBar = page.locator("//td[@class=\'statusBar\']//b");
    this.dispositionCodeEdit = page.locator('#txtDispCode');
    this.documentTypeEdit = page.locator('#txtDocType');
    this.offenseCodeEdit = page.locator('#txtOffenseCode');
    this.propertyCategoryDropdown = page.locator('#cddPropCat_DropDown');
    this.propertyCodeEdit = page.locator('#txtPropCode');
    this.statusCodeEdit = page.locator('#txtStatusCode');
    this.screenIDEdit = page.locator('#lupReportID_CodeValue');
    this.reportTypeDropdown = page.locator('#cboReportType_DropDown');
    this.screenCategoryRadDropdownArrow = page.locator('#radFrmCat_Arrow');
    this.screenCategoryRadDropdown = page.locator('#radFrmCat_Input');
    this.formNameEdit = page.locator('#txtFrmName');
    this.fileNameEdit = page.locator('#txtFormName');
    this.makeEdit = page.locator('#lupMake_CodeValue');
    this.modelCodeEdit = page.locator('#txtModel');
    this.modelDescriptionEdit = page.locator('#txtModelDesc');
    this.effectiveDateEdit = page.locator('#dttmEffectiveDate_KPIDttmCtrl');
    this.editCodeIdButton = page.locator('#cmdEditcodetype');
    this.sharedCodeScreenCodeIDEdit = page.locator('#txtCodeType');
    this.printIcon = page.locator('#cmdPrint');
    this.mJCategoryDropDown = page.locator('#cddCategory_DropDown');
    this.codeValueDescription = page.locator('#txtInqdescription');
    this.cFSCodeEdit = page.locator('#txtCFScode');
    this.expireDateEdit = page.locator('#dttmExpireDate_KPIDttmCtrl');
    this.popCategoryDropDown = page.locator('#cddInvCategory_DropDown');
    this.sharedCheckBox = page.locator('#chkCategory');
    this.chargeCodeLable = page.locator('#lblChageCode');
    this.chargeTypeCodeLabel = page.locator('#lblChargeType');
    this.descriptionLabel = page.locator('#lblDescription');
    this.relatedCFSCodeLabel = page.locator('#lblRelCFSCode');
    this.nIBRSCodeLabel = page.locator('#lblNibrsCode');
    this.resetIcon = page.locator('#cmdRefresh');
    this.punitiveClosingOrderLink = page.locator('#lblText0');
    this.popUpSpeciesDropDown = page.locator('#cddRelation_DropDown');
    this.popUpDeleteButton = page.locator('#cmdDeleteCoded');
    this.dashBoardPreviewIcon = page.locator('#cmdDashpreview');
    this.currentFee = page.locator('#txtCEU');
    this.activeDate = page.locator('#dttmReQualifyBy_KPIDttmCtrl');
    this.questionTable = page.locator('#grdSrch');
    this.textLabelStatus = page.locator('#lblCodeStatus');
    this.systemCheckbox = page.locator('#chkIsSystem');
    this.accountModuleCheckbox = page.locator('#chkModules_0');
    this.codeValueLengthEdit = page.locator('#txtCodeLength');
    this.userAndSystemCheckbox = page.locator('#ChkSysUsr');
    this.codeCancelButton = page.locator("//input[@id=\'cmdClear\']");
    this.mainTab = page.locator("//span[contains(text(),\'Main\')]");
    this.inactiveDateEditForFire = page.locator('#dttmInActiveDttm_Date_KPIDttmCtrl');
    this.linkedCFSTab = page.locator("//span[contains(text(),\'Linked CFS\')]");
    this.municipalityDropDown = page.locator('#cddmunicipality_DropDown');
    this.itemTypeDropDown = page.locator('#cddFormRepositoryID_DropDown');
    this.popupInvCategoryDropDown = page.locator('#cddInvCategory_DropDown');
    this.popupItemTypeDropDown = page.locator('#cddFormRepositoryID_DropDown');
    this.adjustmentPercentDropdown = page.locator('#cddRelation_DropDown');
    this.isDefaultRadControlDropDownTray = page.locator('#cddMapMultiSelect_DropDown');
    this.isDefaultArrow = page.locator('#cddMapMultiSelect_Arrow');
    this.isDefaultDropDownField = page.locator('#cddMapMultiSelect_Input');
    this.vehicleMakeModelTable = page.locator('#grdVehicleMM');
    this.inventoryTypePopUpTray = page.locator('#cddInvMultiSelect_DropDown');
    this.popUpInventoryTypeArrow = page.locator('#cddInvMultiSelect_Arrow');
    this.inventoryTypeDropDown = page.locator('#cddInvMultiSelect_Input');
    this.courtAddressEdit = page.locator('#txtCourtAddress');
    this.negativeCheckbox = page.locator('#chkIsCellCheck');
    this.nameMandatoryCheckbox = page.locator('#ChkNameMandatory');
    this.jurisDropdown = page.locator('#lstJuris');
    this.dashboardCategoryDropdown = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_cdddashcat_DropDown');
    this.versionEdit = page.locator('#txtVersion');
    this.dashboardCodeEdit = page.locator('#txtdashcode');
    this.popUpDelete1Button = page.locator('#cmdDelete');
    this.bondCheckbox = page.locator('#chkBond');
    this.sentenceCheckbox = page.locator('#chkSentence');
    this.cancelButtonInPopUp = page.locator('#cmdClear');
  }

  async enterAtChargeCode(): Promise<void> {
    // uIMapSettings.sharedCodes.uIChargeCodeEdit.sendKeys(BaseData.getSettingsModuleValue("ChargeCode"));
    // uIMapSettings.sharedCodes.uIChargeCodeEdit.sendKeys(Keys.TAB);
  }

  async selectAtChargeType(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.sharedCodes.uIChargeTypeComboBox,
    // BaseData.getSettingsModuleValue("ChargeType"));
  }

  async enterAtDescription(): Promise<void> {
    // uIMapSettings.sharedCodes.uIDescriptionEdit.sendKeys(BaseData.getSettingsModuleValue("Description"));
  }

  async enterAtRelatedCFSCode(): Promise<void> {
    // uIMapSettings.sharedCodes.uIRelatedCFSCodeEdit.sendKeys(BaseData.getSettingsModuleValue("RelatedCFSCode"));
    // uIMapSettings.sharedCodes.uIRelatedCFSCodeEdit.sendKeys(Keys.TAB);
  }

  async enterAtNIBRSCode(): Promise<void> {
    // uIMapSettings.sharedCodes.uINibrsCodeEdit.sendKeys(BaseData.getSettingsModuleValue("NIBRSCode"));
    // uIMapSettings.sharedCodes.uINibrsCodeEdit.sendKeys(Keys.TAB);
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.sharedCodes.uIAddButton.click();
  }

  async clickAddNewButton(): Promise<void> {
    // uIMapSettings.sharedCodes.uIAddNewButton.click();
  }

  async verifyAtNIBRSCodeinGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("NIBRSCode"),
    // objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.sharedCodes.uINibrsResultTable, "NIBRS", rowIndex));
  }

  async saveScreen(): Promise<void> {
    // uIMapSettings.sharedCodes.uISaveButton.click();
    // popup.confirm.yes();
  }

  async closeScreen(): Promise<void> {
    // uIMapSettings.sharedCodes.driver.close();
  }

  async clickInactiveCheckBox(): Promise<void> {
    // uIMapSettings.sharedCodes.uIInactiveCheckBox.click();
  }

  async verifyInactiveDateAsCurrentDate(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate(),
    // uIMapSettings.sharedCodes.uIInactiveDateEdit.getAttribute("value"));
  }

  async enterRelatedMOCCode(): Promise<void> {
    // uIMapSettings.sharedCodes.uIRelatedMOCCodeEdit.sendKeys("10.5-52");
  }

  async enterAtDisposition(): Promise<void> {
    // uIMapSettings.sharedCodes.uIDispositionEdit.sendKeys(BaseData.getSettingsModuleValue("Disposition"));
  }

  async enterDescriptionAsQualityAssurance(): Promise<void> {
    // uIMapSettings.sharedCodes.uIDescriptionEdit.sendKeys("QualityAssurance");
    // uIMapSettings.sharedCodes.uIDescriptionEdit.sendKeys(Keys.TAB);
  }

  async selectAtType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.sharedCodes.uITypeComboBox,
    // BaseData.getSettingsModuleValue("Type"));
    // uIMapSettings.sharedCodes.uITypeComboBox.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async clickCADTab(): Promise<void> {
    // uIMapSettings.sharedCodes.uICADTab.click();
  }

  async clickCaseGereratedNoCheckBox(): Promise<void> {
    // uIMapSettings.sharedCodes.cADTab.uIGenerateCaseNoCheckBox.click();
  }

  async clickCreateCrashReportCheckBox(): Promise<void> {
    // uIMapSettings.sharedCodes.cADTab.uICreateCrashReportCheckBox.click();
  }

  async selectAtReportCode(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.sharedCodes.cADTab.uIReportCodeComboBox,
    // BaseData.getSettingsModuleValue("ReportCode"));
    // uIMapSettings.sharedCodes.cADTab.uIReportCodeComboBox.sendKeys(Keys.TAB);
  }

  async selectBackupUnitReportCodeAsIncidentReport(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.sharedCodes.cADTab.uIBackupReportCodeComboBox, "Incident Report");
    // uIMapSettings.sharedCodes.cADTab.uIBackupReportCodeComboBox.sendKeys(Keys.TAB);
  }

  async verifyManagementTabDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.sharedCodes.uIManagementTab.getAttribute("class").contains("Dis"));
  }

  async clickSave(): Promise<void> {
    // uIMapSettings.sharedCodes.uISaveButton.click();
  }

  async verifyReportCodeBackupUnitReportCodeAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge
    // .okWithExpectedMessage("(22540) Report Code and Backup Unit Report Code cannot be the same");
  }

  async selectBackupUnitReportCodeAsArrestReport(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapSettings.sharedCodes.cADTab.uIBackupReportCodeComboBox, "Arrest Report");
    // uIMapSettings.sharedCodes.cADTab.uIBackupReportCodeComboBox.sendKeys(Keys.TAB);
  }

  async VerifyManagementTabDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.sharedCodes.uIManagementTab.getAttribute("class").contains("Dis"));
  }

  async ClickSave(): Promise<void> {
    // uIMapSettings.sharedCodes.uISaveButton.click();
  }

  async VerifyReportCodeBackupUnitReportCodeAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge
    // .okWithExpectedMessage("(22540) Report Code and Backup Unit Report Code cannot be the same");
  }

  async SelectBackupUnitReportCodeAsArrestReport(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapSettings.sharedCodes.cADTab.uIBackupReportCodeComboBox, "Arrest Report");
    // uIMapSettings.sharedCodes.cADTab.uIBackupReportCodeComboBox.sendKeys(Keys.TAB);
  }

  async EnterAtCallForService(): Promise<void> {
    // uIMapSettings.sharedCodes.uICallForServiceEdit.sendKeys(BaseData.getSettingsModuleValue("CallForService"));
  }

  async SelectAtAlarm(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.sharedCodes.uIAlarmComboBox,
    // BaseData.getSettingsModuleValue("Alarm"));
  }

  async SelectAtSubLevel(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.sharedCodes.uISubLevelComboBox,
    // BaseData.getSettingsModuleValue("SubLevel"));
  }

  async SelectAtDispatchPriority(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.sharedCodes.uIDispatchPriorityComboBox,
    // BaseData.getSettingsModuleValue("DispatchPriority"));
  }

  async SelectAtAgency(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.sharedCodes.uIAgencyComboBox,
    // BaseData.getSettingsModuleValue("Agency"));
  }

  async ClickNFIRSCheckbox(): Promise<void> {
    // uIMapSettings.sharedCodes.uINFIRSReportCheckbox.click();
  }

  async ClickEMSCheckbox(): Promise<void> {
    // uIMapSettings.sharedCodes.uIEMSReportCheckbox.click();
  }

  async EnterAtPopUpCodeValue(): Promise<void> {
    // uIMapSettings.sharedCodes.uIPopUpCodeValueEdit.sendKeys(BaseData.getSettingsModuleValue("CodeValue"));
  }

  async EnterAtPopUpDescription(): Promise<void> {
    // uIMapSettings.sharedCodes.uIPopUpDescriptionEdit.sendKeys(BaseData.getSettingsModuleValue("Description"));
  }

  async clickManagementTab(): Promise<void> {
    // uIMapSettings.sharedCodes.uIManagementTab.click();
  }

  async SelectCaseStatusAsOpen(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapSettings.sharedCodes.managementTab.uICaseStatusComboBox, "Open");
    // uIMapSettings.sharedCodes.managementTab.uICaseStatusComboBox.sendKeys(Keys.TAB);
  }

  async verifyAtChargeCode(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ChargeCode"),
    // uIMapSettings.sharedCodes.uIChargeCodeEdit.getAttribute("value"));
  }

  async enterAtNIBRSCode1(): Promise<void> {
    // uIMapSettings.sharedCodes.uINibrsCodeEdit.sendKeys(BaseData.getSettingsModuleValue("NIBRSCode1"));
    // uIMapSettings.sharedCodes.uINibrsCodeEdit.sendKeys(Keys.TAB);
  }

  async verify1019DuplicationOfDataFound(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1019) Duplication Of Data Found");
  }

  async enterAtCodeValue(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapSettings.sharedCodes.uICodeValueEdit.sendKeys(BaseData.getSettingsModuleValue("CodeValue")); // UI
    // // Changed
  }

  async clickSearchButton(): Promise<void> {
    // uIMapSettings.sharedCodes.uISearchButton.click();
  }

  async verifySuccessfulBottomMessage(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.sharedCodes.uIBottomLeftSideStatusBar.getText()
    // .contains("1002 - Addition Successful"));
  }

  async verifyAtCodeValueDescription(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Description"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.maintainCodeValue.uIMaintainCodeValueTable, "Code Value Description",
    // rowIndex));
  }

  async enterAtLayerDescription(): Promise<void> {
    // uIMapSettings.sharedCodes.uIDescriptionEdit.sendKeys(BaseData.getSettingsModuleValue("LayerDescription"));
  }

  async selectAtLayerIcon(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapSettings.sharedCodes.uIMapLayerIconSelect.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValue(
    // uIMapSettings.sharedCodes.uIMapLayerIconDropdown, BaseData.getSettingsModuleValue("LayerIcon"));
    // Playback.controlReadyThreadWait();
    // uIMapSettings.sharedCodes.uIMapLayerIconSelect.sendKeys(Keys.TAB);
  }

  async clickCodeAddButton(): Promise<void> {
    // uIMapSettings.sharedCodes.uICodeAddButton.click();
    // Playback.pageLoadThreadWait(); //
  }

  async enterAtCodeValueSearch(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapSettings.sharedCodes.uICodeValueSeachEdit.sendKeys(BaseData.getSettingsModuleValue("CodeValue"));
  }

  async verifyAtCodeValueinGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("CodeValue"),
    // objectIdentification.manualIdentify.getGridCellInnerText(uIMapSettings.sharedCodes.uICodeValueTable,
    // "Code Value", rowIndex));
  }

  async deleteAtCCInGridWithConfirmMsg(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapSettings.sharedCodes.uISharedCodesResultTable, BaseData.getSettingsModuleValue("CC"), "X");
    // gridCell.click();
    // Playback.controlReadyThreadWait();
    // popup.confirm.yes();
    // Playback.pageLoadThreadWait();
  }

  async verifyNoRecordFoundAckwMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
  }

  async enterAtUserCommandCode(): Promise<void> {
    // uIMapSettings.sharedCodes.uIUserCommandCodeEdit
    // .sendKeys(BaseData.getSettingsModuleValue("UserCommandCode"));
    // uIMapSettings.sharedCodes.uIUserCommandCodeEdit.sendKeys(Keys.TAB);
  }

  async enterAtDispOrder(): Promise<void> {
    // uIMapSettings.sharedCodes.uIDispOrderCodeEdit.sendKeys(BaseData.getSettingsModuleValue("DispOrder"));
    // uIMapSettings.sharedCodes.uIDispOrderCodeEdit.sendKeys(Keys.TAB);
  }

  async enterAtCFSCode(): Promise<void> {
    // uIMapSettings.sharedCodes.uICFSCodeEdit.sendKeys(BaseData.getSettingsModuleValue("CFSNo"));
  }

  async verifyAlertTypeOptions(): Promise<void> {
    // List<String> allValues = objectIdentification.manualIdentify
    // .getDropDownValues(uIMapSettings.sharedCodes.cADTab.uIAlertTypeDropdown);
    // System.out.println("All Values" + "\n" + "----------" + "\n" + allValues);
    // List<String> downValues = new ArrayList<String>();
    // downValues.add("--");
    // downValues.add("Active Shooter Alert");
    // downValues.add("Fight");
    // downValues.add("Fire");
    // downValues.add("Medical Emergency");
    // downValues.add("Other");
    // downValues.add("All");
    // downValues.add("Drill");
    // downValues.add("Hard Lock Down");
    // downValues.add("--Inq 3997 --");
    // System.out.println("Down Values" + "\n" + "------------" + "\n" + downValues);
    // verify.ExpectedValueIsTrue(CollectionUtils.containsAll(allValues, downValues));
    // boolean equals = allValues.equals(downValues);
    // System.out.println(equals);
    // verify.ExpectedValueIsTrue(equals);
  }

  async selectAtAlertType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.sharedCodes.cADTab.uIAlertTypeDropdown, BaseData.getSettingsModuleValue("AlertType"));
  }

  async saveNClose(): Promise<void> {
    // uIMapSettings.sharedCodes.uISaveandCloseButton.click();
    // if (Playback.browserType.contains("Chrome")) {
    // popup.confirm.yes();
    // else {
    // popup.switchToConfirm();
    // Playback.controlReadyThreadWait();
    // popup.confirm.yes();
  }

  async enterAtZipCode(): Promise<void> {
    // uIMapSettings.sharedCodes.uIZipCodeEdit.sendKeys(BaseData.getSettingsModuleValue("ZipCode"));
    // uIMapSettings.sharedCodes.uIZipCodeEdit.sendKeys(Keys.TAB);
  }

  async enterAtZipCode2(): Promise<void> {
    // uIMapSettings.sharedCodes.uIZipCodeEdit.sendKeys(BaseData.getSettingsModuleValue("ZipCode2"));
    // uIMapSettings.sharedCodes.uIZipCodeEdit.sendKeys(Keys.TAB);
  }

  async selectAtState(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.sharedCodes.uIStateDropDown,
    // BaseData.getSettingsModuleValue("State"));
    // uIMapSettings.sharedCodes.uIStateDropDown.sendKeys(Keys.TAB);
  }

  async enterAtCity(): Promise<void> {
    // uIMapSettings.sharedCodes.uICityEdit.sendKeys(BaseData.getSettingsModuleValue("City"));
    // uIMapSettings.sharedCodes.uICityEdit.sendKeys(Keys.TAB);
  }

  async selectLocationType(): Promise<void> {
    // objectIdentification.randomIdentify.selectDropDownOption(uIMapSettings.sharedCodes.uILocationTypeDropDown);
    // uIMapSettings.sharedCodes.uILocationTypeDropDown.sendKeys(Keys.TAB);
  }

  async enterAtLocationName(): Promise<void> {
    // uIMapSettings.sharedCodes.uILocationNameEdit.sendKeys(BaseData.getSettingsModuleValue("LocationName"));
    // uIMapSettings.sharedCodes.uILocationNameEdit.sendKeys(Keys.TAB);
  }

  async verifyInvalidZipCodeAckwMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1063) Invalid zip code");
  }

  async verifyDeleteCustomReportButtonEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.sharedCodes.uIDeleteCustomReport.isDisplayed());
    // verify.ExpectedValueIsTrue(uIMapSettings.sharedCodes.uIDeleteCustomReport.isEnabled());
  }

  async clickUploadButton(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapSettings.sharedCodes.uIUploadButton.click();
  }

  async shareDownloadedFileToServerAsTestCaseID(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // String testid = BaseData.getSettingsModuleValue("TestCaseID");
    // objectIdentification.readPDF.SendLocalDownloadedFileToServerPath(testid);
    // Playback.controlReadyThreadWait();
  }

  async clickDownloadButton(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapSettings.sharedCodes.uIDownloadButton.click();
    // Playback.pageLoadThreadWait();
    // Playback.pageLoadThreadWait();
  }

  async clickAddButtonInPopUp(): Promise<void> {
    // uIMapSettings.sharedCodes.uIAddButtonInPopUp.click();
  }

  async verifyStatutoryLimitationToRetainEvidenceIsEnabled(): Promise<void> {
    // uIMapSettings.sharedCodes.uIStatutoryLimitationEdit.isEnabled();
  }

  async enterAtStatutoryLimitationToRetainEvidence(): Promise<void> {
    // uIMapSettings.sharedCodes.uIStatutoryLimitationEdit
    // .sendKeys(BaseData.getSettingsModuleValue("StatutoryLimitation"));
    // uIMapSettings.sharedCodes.uIStatutoryLimitationEdit.sendKeys(Keys.TAB);
  }

  async selectAtCFSType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.sharedCodes.uICFSTypeComboBox,
    // BaseData.getSettingsModuleValue("Type"));
    // uIMapSettings.sharedCodes.uICFSTypeComboBox.sendKeys(Keys.TAB);
  }

  async enterAtCFSClass(): Promise<void> {
    // uIMapSettings.sharedCodes.uICFSClassEdit.sendKeys(BaseData.getSettingsModuleValue("CFSClass"));
    // uIMapSettings.sharedCodes.uICFSClassEdit.sendKeys(Keys.TAB);
  }

  async enterAtPopUpCodeValue1(): Promise<void> {
    // uIMapSettings.sharedCodes.uIPopUpCodeValueEdit.sendKeys(BaseData.getSettingsModuleValue("CodeValue1"));
  }

  async enterAtPopUpDescription1(): Promise<void> {
    // uIMapSettings.sharedCodes.uIPopUpDescriptionEdit.sendKeys(BaseData.getSettingsModuleValue("Description1"));
  }

  async verifyAtCodeValue(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.sharedCodes.uISharedCodesResultTable, BaseData.getSettingsModuleValue("CodeValue"));
    // verify.ExpectedValueIsTrue(
    // gridRowByCellInnerText.getText().contains(BaseData.getSettingsModuleValue("CodeValue")));
  }

  async verifyAtCodeValueDescription(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.sharedCodes.uISharedCodesResultTable,
    // BaseData.getSettingsModuleValue("CodeValueDescription"));
    // verify.ExpectedValueIsTrue(
    // gridRowByCellInnerText.getText().contains(BaseData.getSettingsModuleValue("CodeValueDescription")));
  }

  async verifyAtCodeValueDescription1(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.sharedCodes.uISharedCodesResultTable,
    // BaseData.getSettingsModuleValue("CodeValueDescription1"));
    // verify.ExpectedValueIsTrue(gridRowByCellInnerText.getText()
    // .contains(BaseData.getSettingsModuleValue("CodeValueDescription1")));
  }

  async verifyAtCodeValueDescription2(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.sharedCodes.uISharedCodesResultTable,
    // BaseData.getSettingsModuleValue("CodeValueDescription2"));
    // verify.ExpectedValueIsTrue(gridRowByCellInnerText.getText()
    // .contains(BaseData.getSettingsModuleValue("CodeValueDescription2")));
  }

  async clickUpdateButton(): Promise<void> {
    // uIMapSettings.sharedCodes.uICodeAddButton.click();
  }

  async enterAtRef1(): Promise<void> {
    // uIMapSettings.sharedCodes.uIRefEdit.click();
    // uIMapSettings.sharedCodes.uIRefEdit.clear();
    // uIMapSettings.sharedCodes.uIRefEdit.sendKeys(BaseData.getSettingsModuleValue("Ref1"));
  }

  async clickPopupInactiveCheckBox(): Promise<void> {
    // uIMapSettings.sharedCodes.uIPopupInactiveCheckBox.click();
  }

  async SelectAtCodeValueDescription1(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.maintainCodeValue.uIMaintainCodeValueTable,
    // BaseData.getSettingsModuleValue("Description1"));
  }

  async SelectAtCodeValueDescription(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.maintainCodeValue.uIMaintainCodeValueTable,
    // BaseData.getSettingsModuleValue("CodeValueDescription"));
  }

  async SelectAtCodeValueDescription(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.maintainCodeValue.uIMaintainCodeValueTable,
    // BaseData.getSettingsModuleValue("CodeValueDescription" + i));
  }

  async verifyAtDescription(): Promise<void> {
    // String description = uIMapSettings.sharedCodes.uIDescriptionSharedCodedEdit.getAttribute("value");
    // System.out.println(description);
    // verify.ExpectedPropertyValueIsEqual(description, BaseData.getSettingsModuleValue("Description"));
    // //			String description1 = uIMapSettings.sharedCodes.uIDescriptionEdit.getAttribute("title");
    // //			String description2 = uIMapSettings.sharedCodes.uIDescriptionEdit.getText();
    // //			System.out.println(description + "--" + description1 + "--" + description2);
    // // verify.ExpectedPropertyValueIsEqual(description,
    // // BaseData.getSettingsModuleValue("Description"));
  }

  async verifyAtCodeValueDescriptionInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("CodeValueDescription"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.sharedCodes.uISharedCodesResultTable, "Code Value Description", rowIndex));
  }

  async verifyInactiveCheckboxUnChecked(rowIndex: number): Promise<void> {
    // WebElement status = objectIdentification.manualIdentify
    // .getGridRowCheckBoxByIndex(uIMapSettings.sharedCodes.uISharedCodesResultTable, rowIndex);
    // verify.ExpectedPropertyValueIsEqual(status.getAttribute("title"), "Unchecked");
  }

  async verifyAtCodeValueDescription1InGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("CodeValueDescription1"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.sharedCodes.uISharedCodesResultTable, "Code Value Description", rowIndex));
  }

  async verifyAtCodeValueByDescriptioninGrid(JsonKeyIndex: number): Promise<void> {
    // String CodeValue = 	objectIdentification.manualIdentify.getGridCell(uIMapSettings.sharedCodes.uISharedCodesResultTable, BaseData.getSettingsModuleValue("CodeValueDescription"+JsonKeyIndex), "Code Value").getText();
    // verify.ExpectedPropertyValueIsEqual(CodeValue, BaseData.getSettingsModuleValue("CodeValueInGrid"+JsonKeyIndex));
  }

  async verifyInactiveCheckboxChecked(): Promise<void> {
    // List<WebElement> checkboxes = Playback.driver
    // .findElements(By.xpath("//div[@id='grdCodeValue']//table/tbody/tr//td/img"));
    // for (WebElement checkbox : checkboxes) {
    // if (checkbox.isDisplayed() && checkbox.getAttribute("src").contains("checkbox_on.gif")) {
    // verify.ExpectedPropertyValueIsEqual(checkbox.getAttribute("title"), "Checked");
  }

  async readCodeValueDescriptionColumnInTable(): Promise<string[]> {
    // List<String> columnValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.sharedCodes.uISharedCodesResultTable, "Code Value Description");
    // System.out.println(columnValues);
    // return columnValues;
  }

  async verifyAtCodeID(): Promise<void> {
    // String value = uIMapSettings.sharedCodes.uISharedCodeScreenCodeIDEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(value.contains(BaseData.getSettingsModuleValue("CodeID")));
  }

  async clickAtCodeValueDescription(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.sharedCodes.uISharedCodesResultTable,
    // BaseData.getSettingsModuleValue("CodeValueDescription"));
  }

  async SelectAtTowVendor(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.sharedCodes.uIPopUpTowVendor,
    // BaseData.getSettingsModuleValue("Towvendor"));
  }

  async verifyAllowPurgeCheckBoxIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.sharedCodes.uIAllowPurgeCheckBox.isDisplayed());
  }

  async verifyAtRelatedCFSCode(): Promise<void> {
    // String attribute = uIMapSettings.sharedCodes.uIRelatedCFSCodeEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(attribute.contains(BaseData.getSettingsModuleValue("RelatedCFSCode")));
  }

  async verifyDoNotPurgeCheckBoxIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.sharedCodes.uIDoNotPurgeCheckBox.isEnabled());
  }

  async clickAllowPurgeCheckBox(): Promise<void> {
    // uIMapSettings.sharedCodes.uIAllowPurgeCheckBox.click();
  }

  async enterAtSortOrderInPopUp(): Promise<void> {
    // uIMapSettings.sharedCodes.uISortOrderEditPopUp.sendKeys(BaseData.getSettingsModuleValue("SortOrder"));
  }

  async enterAtSortOrderInPopUp(i: number): Promise<void> {
    // uIMapSettings.sharedCodes.uISortOrderEditPopUp.click();
    // uIMapSettings.sharedCodes.uISortOrderEditPopUp.sendKeys(BaseData.getSettingsModuleValue("SortOrder" + i));
  }

  async minimizeTheScreen(): Promise<void> {
    // objectIdentification.windowHandle.minimizeTheScreen();
  }

  async clearSortOrder(): Promise<void> {
    // uIMapSettings.sharedCodes.uISortOrderEditPopUp.click();
    // uIMapSettings.sharedCodes.uISortOrderEditPopUp.clear();
  }

  async verifyUpdateSuccessfulMessage(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapSettings.sharedCodes.uIBottomLeftSideStatusBar.getText().contains("1003 - Update Successful"));
  }

  async verifyUpdatedDataExistsAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge
    // .okWithExpectedMessage("(1081) Updated data exists in these fields. You must save or reset.");
  }

  async clickClearButton(): Promise<void> {
    // uIMapSettings.sharedCodes.uIClearButton.click();
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // String text = uIMapSettings.sharedCodes.uIStatusBar.getText();
    // try {
    // verify.ExpectedPropertyValueIsEqual(text, "1002 - Addition Successful");
    // } catch (AssertionError e) {
    // verify.ExpectedPropertyValueIsEqual(text, "1002 - Addition successful");
  }

  async enterDipositionCode(): Promise<void> {
    // uIMapSettings.sharedCodes.uIDispositionCodeEdit.sendKeys(randomized.randomString(3));
    // uIMapSettings.sharedCodes.uIDispositionCodeEdit.sendKeys(Keys.TAB);
  }

  async enterCodeIDAs9889(): Promise<void> {
    // uIMapSettings.sharedCodes.uICodeIDEdit.clear();
    // uIMapSettings.sharedCodes.uICodeIDEdit.sendKeys("9889");
    // uIMapSettings.sharedCodes.uICodeIDEdit.sendKeys(Keys.TAB);
  }

  async enterDocumentType(): Promise<void> {
    // uIMapSettings.sharedCodes.uIDocumentTypeEdit.sendKeys("DocAuto");
  }

  async enterAtOffenseCode(): Promise<void> {
    // uIMapSettings.sharedCodes.uIOffenseCodeEdit.sendKeys(BaseData.getSettingsModuleValue("OffenseCode"));
    // uIMapSettings.sharedCodes.uIOffenseCodeEdit.sendKeys(Keys.TAB);
  }

  async selectPropertyCategory(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapSettings.sharedCodes.uIPropertyCategoryDropdown);
  }

  async enterPropertyCode(): Promise<void> {
    // uIMapSettings.sharedCodes.uIPropertyCodeEdit.sendKeys(randomized.randomString(4));
  }

  async enterStatusCode(): Promise<void> {
    // uIMapSettings.sharedCodes.uIStatusCodeEdit.sendKeys("AUTO");
  }

  async enterAtScreenID(): Promise<void> {
    // uIMapSettings.sharedCodes.uIScreenIDEdit.sendKeys(BaseData.getSettingsModuleValue("ScreenID"));
    // uIMapSettings.sharedCodes.uIScreenIDEdit.sendKeys(Keys.TAB);
  }

  async selectAtReportType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.sharedCodes.uIReportTypeDropdown,
    // BaseData.getSettingsModuleValue("ReportType"));
  }

  async selectAtScreenCategory(): Promise<void> {
    // uIMapSettings.sharedCodes.uIScreenCategoryRadDropdownArrow.click();
    // Playback.pageLoadThreadWait();
    // try {
    // objectIdentification.manualIdentify.selectRadControlDropDownValue(
    // uIMapSettings.sharedCodes.uIScreenCategoryRadDropdown,
    // BaseData.getSettingsModuleValue("ScreenCategory"));
    // // uIMapSettings.sharedCodes.uIScreenCategoryRadDropdownArrow.click();
    // } catch (Exception e) {
    // Playback.driver.findElement(By.id("radFrmCat_Input"))
    // .sendKeys(BaseData.getSettingsModuleValue("ScreenCategory"));
  }

  async enterAtFormName(): Promise<void> {
    // uIMapSettings.sharedCodes.uIFormNameEdit.sendKeys(BaseData.getSettingsModuleValue("FormName"));
    // uIMapSettings.sharedCodes.uIFormNameEdit.sendKeys(Keys.TAB);
  }

  async enterAtFileName(): Promise<void> {
    // uIMapSettings.sharedCodes.uIFileNameEdit.sendKeys(BaseData.getSettingsModuleValue("FileName"));
  }

  async enterAtMake(): Promise<void> {
    // uIMapSettings.sharedCodes.uIMakeEdit.sendKeys(BaseData.getSettingsModuleValue("Make"));
    // uIMapSettings.sharedCodes.uIMakeEdit.sendKeys(Keys.TAB);
  }

  async enterAtMake(i: number): Promise<void> {
    // uIMapSettings.sharedCodes.uIMakeEdit.sendKeys(BaseData.getSettingsModuleValue("Make" + i));
    // uIMapSettings.sharedCodes.uIMakeEdit.sendKeys(Keys.TAB);
  }

  async enterAtModelCode(): Promise<void> {
    // uIMapSettings.sharedCodes.uIModelCodeEdit.sendKeys(BaseData.getSettingsModuleValue("ModelCode"));
    // uIMapSettings.sharedCodes.uIModelCodeEdit.sendKeys(Keys.TAB);
  }

  async enterAtModelDescription(): Promise<void> {
    // uIMapSettings.sharedCodes.uIModelDescriptionEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ModelDescription"));
    // uIMapSettings.sharedCodes.uIModelDescriptionEdit.sendKeys(Keys.TAB);
  }

  async enterEffectiveDateAsFutureDate(): Promise<void> {
    // String futureDate = Randomized.getFutureDate(1);
    // uIMapSettings.sharedCodes.uIEffectiveDateEdit.sendKeys("futureDate");
    // uIMapSettings.sharedCodes.uIEffectiveDateEdit.sendKeys(Keys.TAB);
  }

  async clickDistributedToTab(): Promise<void> {
    // uIMapSettings.sharedCodes.uIDistributedToTab.click();
  }

  async clickEditCodeID(): Promise<void> {
    // uIMapSettings.sharedCodes.uIEditCodeIdButton.click();
  }

  async verifyAtRowIsInActiveByDescription(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.sharedCodes.uISharedCodesResultTable,
    // BaseData.getSettingsModuleValue("CodeValueDescription"));
    // verify.ExpectedPropertyValueIsEqual(gridRowByCellInnerText.getCssValue("color"), "rgba(128, 128, 128, 1)");
    // verify.ExpectedPropertyValueIsEqual(gridRowByCellInnerText.getAttribute("class"),
    // "GrdRowColour_IsInactive");
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapSettings.sharedCodes.uIPrintIcon.click();
  }

  async verifySaveTheEntryAndProceedAcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1020) Please save the entry and proceed.");
  }

  async verifyAtSelectedMJCategory(): Promise<void> {
    // WebElement mJCategory = uIMapSettings.sharedCodes.uIMJCategoryDropDown;
    // Select select = new Select(mJCategory);
    // WebElement selectedOption = select.getFirstSelectedOption();
    // String option = selectedOption.getText();
    // System.out.println(option);
    // verify.ExpectedPropertyValueIsEqual(option, BaseData.getSettingsModuleValue("MJCategory"));
  }

  async enterAtCodeValueDescription(): Promise<void> {
    // uIMapSettings.sharedCodes.uICodeValueDescription
    // .sendKeys(BaseData.getSettingsModuleValue("CodeValueDescription"));
  }

  async clickAddButtonforFire(): Promise<void> {
    // uIMapSettings.sharedCodes.uIAddButtonForFire.click();
  }

  async getAllCodeValueDescriptionInCategory(): Promise<string[]> {
    // List<String> category = new ArrayList<String>();
    // List<String> ColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.sharedCodes.uISharedCodesResultTable, "Code Value Description");
    // for (String value : ColumnValues) {
    // WebElement gridCell = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.sharedCodes.uISharedCodesResultTable, value, "Category");
    // String text = gridCell.getText();
    // if (text.contains(BaseData.getSettingsModuleValue("Category"))) {
    // category.add(value);
    // System.out.println(category);
    // return category;
  }

  async readDisposition(): Promise<string> {
    // String Dispo = uIMapSettings.sharedCodes.uIDispositionEdit.getAttribute("value");
    // System.out.println(Dispo);
    // return Dispo;
  }

  async enterEffectiveDateAsCurrentDate(): Promise<void> {
    // uIMapSettings.sharedCodes.uIEffectiveDateEdit.sendKeys(Randomized.getCurrentDate());
    // System.out.println(Randomized.getCurrentDate());
  }

  async enterExpireDateAsPastDate(): Promise<void> {
    // uIMapSettings.sharedCodes.uIExpireDateEdit.sendKeys(Randomized.getPreviousDate(1, "MM/dd/yyyy"));
  }

  async clearEffectiveDate(): Promise<void> {
    // uIMapSettings.sharedCodes.uIEffectiveDateEdit.clear();
  }

  async selectAtPopUpCategory(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.sharedCodes.uIPopCategoryDropDown,
    // BaseData.getSettingsModuleValue("Category"));
  }

  async verifySharedCheckBoxChecked(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.sharedCodes.uISharedCheckBox.isDisplayed());
  }

  async selectAtMJCategory(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.sharedCodes.uIMJCategoryDropDown,
    // BaseData.getSettingsModuleValue("MJCategory"));
  }

  async verifyChargeCodeAsMandatory(): Promise<void> {
    // String cssValue = uIMapSettings.sharedCodes.uIChargeCodeLable.getCssValue("color");
    // System.out.println(cssValue + "--uIChargeCodeLable");
  }

  async verifychargeTypeAsMandatory(): Promise<void> {
    // String cssValue = uIMapSettings.sharedCodes.uIChargeTypeCodeLabel.getCssValue("color");
    // System.out.println(cssValue + "--uIChargeTypeCodeLabel");
  }

  async verifyDescriptionAsMandatory(): Promise<void> {
    // String cssValue = uIMapSettings.sharedCodes.uIDescriptionLabel.getCssValue("color");
    // System.out.println(cssValue + "--uIDescriptionLabel");
  }

  async verifyRelatedCFSCodeAsMandatory(): Promise<void> {
    // String cssValue = uIMapSettings.sharedCodes.uIRelatedCFSCodeLabel.getCssValue("color");
    // System.out.println(cssValue + "uIRelatedCFSCodeLabel");
  }

  async verifyNIBRSCodeAsMandatory(): Promise<void> {
    // String cssValue = uIMapSettings.sharedCodes.uINIBRSCodeLabel.getCssValue("color");
    // System.out.println(cssValue + "--uINIBRSCodeLabel");
  }

  async clickReset(): Promise<void> {
    // uIMapSettings.sharedCodes.uIResetIcon.click();
  }

  async verifyAddNewButtonIsDisable(): Promise<void> {
    // boolean enabled = uIMapSettings.sharedCodes.uIAddNewButton.isEnabled();
    // verify.ExpectedValueIsFalse(enabled);
  }

  async verifyAddNewButtonIsEnable(): Promise<void> {
    // boolean Displayed = uIMapSettings.sharedCodes.uIAddNewButton.isDisplayed();
    // verify.ExpectedValueIsTrue(Displayed);
  }

  async clickPunitiveClosingOrderLink(): Promise<void> {
    // uIMapSettings.sharedCodes.uIPunitiveClosingOrderLink.click();
  }

  async selectAtSpecies(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.sharedCodes.uIPopUpSpeciesDropDown,
    // BaseData.getSettingsModuleValue("Species"));
    // uIMapSettings.sharedCodes.uIPopUpSpeciesDropDown.sendKeys(Keys.TAB);
  }

  async enterAtDisposition1(): Promise<void> {
    // uIMapSettings.sharedCodes.uIDispositionEdit.sendKeys(BaseData.getSettingsModuleValue("Disposition1"));
    // uIMapSettings.sharedCodes.uIDispositionEdit.sendKeys(Keys.TAB);
  }

  async enterAtDescription1(): Promise<void> {
    // uIMapSettings.sharedCodes.uIDescriptionEdit.sendKeys(BaseData.getSettingsModuleValue("Description1"));
  }

}

export class CADTab2Page {
  readonly page: Page;
  readonly defaultVehicleEdit: Locator;
  readonly battalionDropdown: Locator;
  readonly nonTrackableCheckbox: Locator;
  readonly availableCADTOCADCheckbox: Locator;
  readonly wDAGroup: Locator;
  readonly commentForCADEdit: Locator;
  readonly rFSensorIDEdit: Locator;
  readonly availableForCADToCADCheckBox: Locator;
  readonly calculateFinishTimeForUnitRecommendationCheckBox: Locator;
  readonly defaultVehicleDescriptionEdit: Locator;
  readonly followUpCheckBox: Locator;
  readonly unFoundedCheckBox: Locator;
  readonly generateCaseNoCheckBox: Locator;
  readonly generateAnimalCaseNoCheckBox: Locator;
  readonly reportCodeComboBox: Locator;
  readonly backupReportCodeComboBox: Locator;
  readonly alertTypeDropdown: Locator;
  readonly createCrashReportCheckBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.defaultVehicleEdit = page.locator('#tabUnit_tmpl0_UsrCAD1_lupVehicle_CodeValue');
    this.battalionDropdown = page.locator('#tabUnit_tmpl0_UsrCAD1_cddBattaltion_DropDown');
    this.nonTrackableCheckbox = page.locator('#tabUnit_tmpl0_UsrCAD1_chkIsTrackable');
    this.availableCADTOCADCheckbox = page.locator('#tabUnit_tmpl0_UsrCAD1_chkIsPnxCAD2CAD');
    this.wDAGroup = page.locator('#tabUnit_tmpl0_UsrCAD1_lupWDAGroup_CodeValue');
    this.commentForCADEdit = page.locator('#tabUnit_tmpl0_UsrCAD1_txtCmtCAD');
    this.rFSensorIDEdit = page.locator('#tabUnit_tmpl0_UsrCAD1_txtRFSensorID');
    this.availableForCADToCADCheckBox = page.locator('#tabUnit_tmpl0_UsrCAD1_chkIsRecommendation');
    this.calculateFinishTimeForUnitRecommendationCheckBox = page.locator('#tabUnit_tmpl0_UsrCAD1_chkIsPnxCAD2CAD');
    this.defaultVehicleDescriptionEdit = page.locator('#tabUnit_tmpl0_UsrCAD1_lupVehicle_CodeDescription');
    this.followUpCheckBox = page.locator('#tabDisposition_tmpl0_UsrDispCAD1_chkFollowUp');
    this.unFoundedCheckBox = page.locator('#tabDisposition_tmpl0_UsrDispCAD1_chkUnFounded');
    this.generateCaseNoCheckBox = page.locator('#tabDisposition_tmpl0_UsrDispCAD1_chkCaseNbr');
    this.generateAnimalCaseNoCheckBox = page.locator('#tabDisposition_tmpl0_UsrDispCAD1_chkAnimalCaseNbr');
    this.reportCodeComboBox = page.locator('#tabDisposition_tmpl0_UsrDispCAD1_cddReportCode_DropDown');
    this.backupReportCodeComboBox = page.locator('#tabDisposition_tmpl0_UsrDispCAD1_cddBackupReportCode_DropDown');
    this.alertTypeDropdown = page.locator('#tabCFSCode_tmpl0_UsrCAD1_cddAlertType_DropDown');
    this.createCrashReportCheckBox = page.locator('#tabDisposition_tmpl0_UsrDispCAD1_ChkCreateCrashReport');
  }

  async clickGenerateCaseCheckbox(): Promise<void> {
    // uIMapSettings.sharedCodes.cADTab.uIGenerateCaseNoCheckBox.click();
  }

  async clickCreateCrashCheckBox(): Promise<void> {
    // uIMapSettings.sharedCodes.cADTab.uICreateCrashReportCheckBox.click();
  }

}

export class MainTabPage {
  readonly page: Page;
  readonly allStatusCheckBox: Locator;
  readonly nFIRSIncidentTypeEdit: Locator;
  readonly nERISIncidentTypeEdit: Locator;
  readonly defaultFrequencyDropDown: Locator;
  readonly dispatchToEnrouteEdit: Locator;
  readonly arriveToInServiceEdit: Locator;
  readonly enrouteToArriveEdit: Locator;
  readonly defaultTemplateForNFIRSRemarksDropDown: Locator;
  readonly shareCallsWithCFSToOtherAgenciesCheckbox: Locator;
  readonly dashboardEntrySecondsEdit: Locator;
  readonly dashboardEntrySortSeqEdit: Locator;
  readonly dashboardEntryAddButton: Locator;
  readonly dashboardEntryClearButton: Locator;
  readonly dashboardNameDropDown: Locator;
  readonly dashboardEntryTable: Locator;
  readonly groupSortDropDown: Locator;
  readonly sortEdit: Locator;
  readonly passwordCheckbox: Locator;
  readonly customNameEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allStatusCheckBox = page.locator('#tabQuestion_tmpl0_usrCADUIConfigMain1_chkAllStatus');
    this.nFIRSIncidentTypeEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD2_lupCADIncType_CodeValue');
    this.nERISIncidentTypeEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD2_lupNERISIncType_CodeValue');
    this.defaultFrequencyDropDown = page.locator('#tabCFSCode_tmpl0_UsrCAD2_cddFrequency_DropDown');
    this.dispatchToEnrouteEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD2_txtDispatch');
    this.arriveToInServiceEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD2_txtArrive');
    this.enrouteToArriveEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD2_txtEnroute');
    this.defaultTemplateForNFIRSRemarksDropDown = page.locator('#tabCFSCode_tmpl0_UsrCAD2_lstTextName');
    this.shareCallsWithCFSToOtherAgenciesCheckbox = page.locator('#tabCFSCode_tmpl0_UsrCAD2_chkIsPnxCAD2CAD');
    this.dashboardEntrySecondsEdit = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_txtseconds');
    this.dashboardEntrySortSeqEdit = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_txtsortseq');
    this.dashboardEntryAddButton = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_imgMobileReportPathAdd');
    this.dashboardEntryClearButton = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_imgMobileReportPathAdd');
    this.dashboardNameDropDown = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_cboDashboardName');
    this.dashboardEntryTable = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_grdMobileReportPath');
    this.groupSortDropDown = page.locator('#tabParam_tmpl0_UsrParamMain1_radGroupName_Input');
    this.sortEdit = page.locator('#tabParam_tmpl0_UsrParamMain1_txtSortSeqNo');
    this.passwordCheckbox = page.locator('#tabParam_tmpl0_UsrParamMain1_chkIsPassword');
    this.customNameEdit = page.locator('#tabRepo_tmpl0_usrRepoMain1_txtCustomName');
  }

  async enterAtNFIRSIncidentType(): Promise<void> {
    // uIMapSettings.sharedCodes.mainTab.uINFIRSIncidentTypeEdit
    // .sendKeys(BaseData.getSettingsModuleValue("NFIRSIncidentType"));
    // uIMapSettings.sharedCodes.mainTab.uINFIRSIncidentTypeEdit.sendKeys(Keys.TAB);
  }

  async selectAtDefaultFrequency(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.sharedCodes.mainTab.uIDefaultFrequencyDropDown,
    // BaseData.getSettingsModuleValue("DefaultFrequency"));
    // uIMapSettings.sharedCodes.mainTab.uIDefaultFrequencyDropDown.sendKeys(Keys.TAB);
  }

  async enterAtDispatchToEnrouteInSeconds(): Promise<void> {
    // uIMapSettings.sharedCodes.mainTab.uIDispatchToEnrouteEdit
    // .sendKeys(BaseData.getSettingsModuleValue("DispatchToEnroute"));
    // uIMapSettings.sharedCodes.mainTab.uIDispatchToEnrouteEdit.sendKeys(Keys.TAB);
  }

  async enterAtArriveToInServiceInSeconds(): Promise<void> {
    // uIMapSettings.sharedCodes.mainTab.uIArriveToInServiceEdit
    // .sendKeys(BaseData.getSettingsModuleValue("DispatchService"));
    // uIMapSettings.sharedCodes.mainTab.uIArriveToInServiceEdit.sendKeys(Keys.TAB);
  }

  async enterAtEnrouteToArriveInSeconds(): Promise<void> {
    // uIMapSettings.sharedCodes.mainTab.uIEnrouteToArriveEdit
    // .sendKeys(BaseData.getSettingsModuleValue("EnrouteToArrive"));
    // uIMapSettings.sharedCodes.mainTab.uIEnrouteToArriveEdit.sendKeys(Keys.TAB);
  }

  async enterAtDefaultTemplateForNFIRSRemarks(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.sharedCodes.mainTab.uIDefaultTemplateForNFIRSRemarksDropDown,
    // BaseData.getSettingsModuleValue("DefaultTemplateForNFIRSRemarks"));
    // uIMapSettings.sharedCodes.mainTab.uIDefaultTemplateForNFIRSRemarksDropDown.sendKeys(Keys.TAB);
  }

  async clickShareCallsWithCFSToOtherAgenciesCheckbox(): Promise<void> {
    // objectIdentification.actionBuilder
    // .MoveToElement(uIMapSettings.sharedCodes.mainTab.uIShareCallsWithCFSToOtherAgenciesCheckbox);
    // uIMapSettings.sharedCodes.mainTab.uIShareCallsWithCFSToOtherAgenciesCheckbox.click();
  }

  async enterAtDashboardEntrySortSequence(): Promise<void> {
    // uIMapSettings.sharedCodes.mainTab.uIDashboardEntrySortSeqEdit.sendKeys(BaseData.getSettingsModuleValue("DashboardSortSequence"));
  }

  async enterAtDashboardEntrySeconds(): Promise<void> {
    // uIMapSettings.sharedCodes.mainTab.uIDashboardEntrySecondsEdit.sendKeys(BaseData.getSettingsModuleValue("DashboardEntrySeconds"));
  }

  async clickDashboardEntryAddButton(): Promise<void> {
    // uIMapSettings.sharedCodes.mainTab.uIDashboardEntryAddButton.click();
  }

  async clickDashboardEntryClearButton(): Promise<void> {
    // uIMapSettings.sharedCodes.mainTab.uIDashboardEntryClearButton.click();
  }

  async getSelectedDashboardName(): Promise<string> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapSettings.sharedCodes.mainTab.uIDashboardNameDropDown);
    // return dropDownSelectedItem;
  }

  async verifyAtDashboardNameInGridUsingDashboardName(DashboardName: string): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(uIMapSettings.sharedCodes.mainTab.uIDashboardEntryTable, DashboardName, "Dashboard Name");
    // verify.ExpectedPropertyValueIsEqual(DashboardName, gridCell.getText());
  }

  async verifyAtDashboardEntrySecondsInGridUsingDashboardName(DashboardName: string): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(uIMapSettings.sharedCodes.mainTab.uIDashboardEntryTable, DashboardName, "Seconds");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("DashboardEntrySeconds"), gridCell.getText());
  }

  async verifyAtDashboardEntrySortSequenceInGridUsingDashboardName(DashboardName: string): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(uIMapSettings.sharedCodes.mainTab.uIDashboardEntryTable, DashboardName, "Sort Seq");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("DashboardSortSequence"), gridCell.getText());
  }

  async selectAtDashboardEntryDashboardNameInGridUsingDashboardName(DashboardName: string): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(uIMapSettings.sharedCodes.mainTab.uIDashboardEntryTable, DashboardName, "Dashboard Name");
    // gridCell.click();
  }

  async verifyConfiguredDashboardName(selectedDashboardName: string): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.sharedCodes.mainTab.uIDashboardNameDropDown);
    // verify.ExpectedPropertyValueIsEqual(dropDownSelectedItem, selectedDashboardName);
  }

  async verifyAtDashboardEntrySeconds(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("DashboardEntrySeconds"),
    // uIMapSettings.sharedCodes.mainTab.uIDashboardEntrySecondsEdit.getAttribute("value"));
  }

  async verifyAtDashboardSortSeq(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("DashboardSortSequence"),
    // uIMapSettings.sharedCodes.mainTab.uIDashboardEntrySortSeqEdit.getAttribute("value"));
  }

}

export class LinkedCFSTabPage {
  readonly page: Page;
  readonly policeOEMOtherCFSEdit: Locator;
  readonly serviceTypeEdit: Locator;
  readonly serviceType1Edit: Locator;
  readonly addIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.policeOEMOtherCFSEdit = page.locator('#tabCFSCode_tmpl2_UsrCFS_lupPoliceCFS_CodeValue');
    this.serviceTypeEdit = page.locator('#tabCFSCode_tmpl2_UsrCFS_cddPolServiceType_DropDown');
    this.serviceType1Edit = page.locator('#tabCFSCode_tmpl2_UsrCFS_cddFireServiceType_DropDown');
    this.addIcon = page.locator('#tabCFSCode_tmpl2_UsrCFS_imgAdd');
  }

  async enterAtPoliceOEMOtherCFS(): Promise<void> {
    // uIMapSettings.sharedCodes.linkedCFSTab.uIPoliceOEMOtherCFSEdit
    // .sendKeys(BaseData.getSettingsModuleValue("PoliceOEMOtherCFS"));
    // uIMapSettings.sharedCodes.linkedCFSTab.uIPoliceOEMOtherCFSEdit.sendKeys(Keys.TAB);
  }

  async selectAtServiceType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.sharedCodes.linkedCFSTab.uIServiceTypeEdit,
    // BaseData.getSettingsModuleValue("ServiceType"));
    // uIMapSettings.sharedCodes.linkedCFSTab.uIServiceTypeEdit.sendKeys(Keys.TAB);
  }

  async selectAtServiceType1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.sharedCodes.linkedCFSTab.uIServiceType1Edit,
    // BaseData.getSettingsModuleValue("ServiceType1"));
    // uIMapSettings.sharedCodes.linkedCFSTab.uIServiceType1Edit.sendKeys(Keys.TAB);
  }

  async clickAddIcon(): Promise<void> {
    // uIMapSettings.sharedCodes.linkedCFSTab.uIAddIcon.click();
  }

  async selectAtType1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.sharedCodes.uITypeComboBox,
    // BaseData.getSettingsModuleValue("Type1"));
    // uIMapSettings.sharedCodes.uITypeComboBox.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async deleteInPopup(): Promise<void> {
    // uIMapSettings.sharedCodes.uIPopUpDeleteButton.click();
    // popup.confirm.yes();
  }

  async verifyAtDescriptionIsNotDispalyedInGrid(): Promise<void> {
    // //			List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapSettings.sharedCodes.uISharedCodesResultTable,
    // //					"Code Value Description");
    // //
    // //			for (String string : gridTableColumnValues) {
    // //				System.out.println(string);
    // //				verify.ExpectedValueIsNotTrue(string.contains(BaseData.getSettingsModuleValue("Description")));
    // //			}
    // int count = objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapSettings.sharedCodes.uISharedCodesResultTable);
    // System.out.println(count);
    // int i = 0;
    // if (i < count) {
    // for (i = 0; i < count; i++) {
    // List<String> gridRowCellsValues = objectIdentification.manualIdentify
    // .getGridRowCellsValues(uIMapSettings.sharedCodes.uISharedCodesResultTable, i);
    // System.out.println(gridRowCellsValues);
    // for (String ListElements : gridRowCellsValues) {
    // verify.ExpectedPropertyValueIsNotEqual(ListElements,
    // BaseData.getSettingsModuleValue("Description"));
  }

  async verifyAtCodedValueDescriptionIsInactiveInGrid(rowIndex: number): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapSettings.maintainCodeValue.uIMaintainCodeValueTable, "Code Value Description", rowIndex);
    // verify.ExpectedPropertyValueIsEqual("rgba(128, 128, 128, 1)", gridCell.getCssValue("color"));
  }

  async enterAtChargeCode(i: number): Promise<void> {
    // uIMapSettings.sharedCodes.uIChargeCodeEdit.sendKeys(BaseData.getSettingsModuleValue("ChargeCode" + i));
    // uIMapSettings.sharedCodes.uIChargeCodeEdit.sendKeys(Keys.TAB);
  }

  async selectAtChargeType(i: number): Promise<void> {
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.sharedCodes.uIChargeTypeComboBox,
    // BaseData.getSettingsModuleValue("ChargeType" + i));
  }

  async enterAtDescription(i: number): Promise<void> {
    // uIMapSettings.sharedCodes.uIDescriptionEdit.sendKeys(BaseData.getSettingsModuleValue("Description" + i));
  }

  async clickDashBoardPreviewIcon(): Promise<void> {
    // uIMapSettings.sharedCodes.uIDashBoardPreviewIcon.click();
  }

  async enterAtCurrentFeeInPopUp(): Promise<void> {
    // uIMapSettings.sharedCodes.uICurrentFee.sendKeys(BaseData.GetAdmissionModuleValue("CurrentFee"));
  }

  async enterAtActiveDateAsCurrentDateInPopup(): Promise<void> {
    // uIMapSettings.sharedCodes.uIActiveDate.click();
    // uIMapSettings.sharedCodes.uIActiveDate.sendKeys(Keys.CONTROL + "a");
    // uIMapSettings.sharedCodes.uIActiveDate.sendKeys(Keys.BACK_SPACE);
    // uIMapSettings.sharedCodes.uIActiveDate.sendKeys(Randomized.getCurrentDate());
  }

  async clearCurrentFee(): Promise<void> {
    // uIMapSettings.sharedCodes.uICurrentFee.clear();
  }

  async verifyAtQuestion(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.sharedCodes.uIQuestionTable, BaseData.getSettingsModuleValue("Question"));
    // verify.ExpectedValueIsTrue(
    // gridRowByCellInnerText.getText().contains(BaseData.getSettingsModuleValue("Question")));
  }

  async verifyLabelCodeStatusIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.sharedCodes.uITextLabelStatus.isDisplayed(), "Label Is Displayed");
  }

  async verifyVisitorCheckBoxCheckedByCodeValue(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapSettings.sharedCodes.uISharedCodesResultTable,
    // BaseData.getSettingsModuleValue("CodeValueDescription"), "Visitor");
    // verify.ExpectedValueIsTrue(
    // gridCell.findElement(By.tagName("img")).getAttribute("title").contains("Checked"));
  }

  async verifyVisitorCheckBoxUnCheckedByCodeValue(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapSettings.sharedCodes.uISharedCodesResultTable,
    // BaseData.getSettingsModuleValue("CodeValueDescription1"), "Visitor");
    // verify.ExpectedValueIsTrue(
    // gridCell.findElement(By.tagName("img")).getAttribute("title").contains("Unchecked"));
  }

  async clickSystemCheckbox(): Promise<void> {
    // uIMapSettings.sharedCodes.uISystemCheckbox.click();
  }

  async clickUserAndSystemCheckbox(): Promise<void> {
    // uIMapSettings.sharedCodes.uIUserAndSystemCheckbox.click();
  }

  async clickAccountModuleCheckbox(): Promise<void> {
    // uIMapSettings.sharedCodes.uIAccountModuleCheckbox.click();
  }

  async enterAtCodeValueLength(): Promise<void> {
    // uIMapSettings.sharedCodes.uICodeValueLengthEdit
    // .sendKeys(BaseData.getSettingsModuleValue("CodeValueLength"));
  }

  async clickCodedCancelButton(): Promise<void> {
    // uIMapSettings.sharedCodes.uICodeCancelButton.click();
    // Playback.pageLoadThreadWait();
  }

  async clickMainTab(): Promise<void> {
    // uIMapSettings.sharedCodes.uIMainTab.click();
  }

  async verifyInactiveDateAsCurrentDateForFire(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate(),
    // uIMapSettings.sharedCodes.uIInactiveDateEditForFire.getAttribute("value"));
  }

  async clickSOPTab(): Promise<void> {
    // uIMapSettings.sharedCodes.uISOPTab.click();
  }

  async clickLinkedCFSTab(): Promise<void> {
    // uIMapSettings.sharedCodes.uILinkedCFSTab.click();
  }

  async selectAtMunicipality(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.sharedCodes.uIMunicipalityDropDown,
    // BaseData.GetAdmissionModuleValue("Municipality"));
  }

  async verifyAtOffenseCode(): Promise<void> {
    // String OffenseCode = uIMapSettings.sharedCodes.uIOffenseCodeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("OffenseCode"), OffenseCode);
  }

  async verifyAtPopupItemCategory(): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.sharedCodes.uIPopupInvCategoryDropDown);
    // verify.ExpectedPropertyValueIsEqual(dropDownSelectedItem, BaseData.getSettingsModuleValue("ItemCategory"));
  }

  async selectAtPopupItemType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.sharedCodes.uIPopupItemTypeDropDown,
    // BaseData.getSettingsModuleValue("ItemType"));
  }

  async verifyInactiveCheckboxIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapSettings.sharedCodes.uIPopupInactiveCheckBox.isEnabled());
  }

  async selectAtAdjustmentPercentInPopup(i: number): Promise<void> {
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.sharedCodes.uIAdjustmentPercentDropdown,
    // BaseData.getSettingsModuleValue("AdjustmentPercent" + i));
  }

  async verify1018Acknowledge(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1018) Required Entries are Missing");
  }

  async enterSpaceInOffenseCode(): Promise<void> {
    // uIMapSettings.sharedCodes.uIOffenseCodeEdit.sendKeys(Keys.SPACE);
  }

  async enterSpaceInModelCode(): Promise<void> {
    // uIMapSettings.sharedCodes.uIModelCodeEdit.sendKeys(Keys.SPACE);
  }

  async enterSpaceInModelDescription(): Promise<void> {
    // uIMapSettings.sharedCodes.uIModelDescriptionEdit.sendKeys(Keys.SPACE);
  }

  async verifyOrderInGridByCodeValueDiscription(i: number, j: number): Promise<void> {
    // String gridCell = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.sharedCodes.uISharedCodesResultTable,
    // BaseData.getSettingsModuleValue("CodeValueDescription" + i), "Order")
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Order" + j), gridCell);
  }

  async selectAtPopUpItemType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.sharedCodes.uIItemTypeDropDown,
    // BaseData.getSettingsModuleValue("ItemType"));
  }

  async verifyAtCodeValueLength(): Promise<void> {
    // String text = uIMapSettings.sharedCodes.uIPopUpCodeValueEdit.getAttribute("value");
    // verify.ExpectedIntergerValueIsEqualToActual(text.length(), 3);
  }

  async verifyAtCodeValueInEditField(JsonKeyIndex: number): Promise<void> {
    // String text = uIMapSettings.sharedCodes.uIPopUpCodeValueEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getSettingsModuleValue("CodeValueEditField"+JsonKeyIndex));
  }

  async deleteAtDescriptionInGrid(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapSettings.sharedCodes.uIVehicleMakeModelTable, BaseData.getSettingsModuleValue("Model"), "X");
    // gridCell.click();
    // Playback.controlReadyThreadWait();
    // popup.confirm.yes();
    // Playback.pageLoadThreadWait();
  }

  async clickEnterKeyInDescriptionField(): Promise<void> {
    // uIMapSettings.sharedCodes.uIDescriptionEdit.sendKeys(Keys.ENTER);
  }

  async selectAtIsDefault(): Promise<void> {
    // uIMapSettings.sharedCodes.uIIsDefaultArrow.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValue
    // (uIMapSettings.sharedCodes.uIIsDefaultRadControlDropDownTray,BaseData.getSettingsModuleValue("IsDefault"));
    // uIMapSettings.sharedCodes.uIIsDefaultArrow.click();
  }

  async verifyAtIsDefault(): Promise<void> {
    // String attribute = uIMapSettings.sharedCodes.uIIsDefaultDropDownField.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("IsDefault"), attribute);
  }

  async enterExpireDateAsFuterDateDate(): Promise<void> {
    // uIMapSettings.sharedCodes.uIExpireDateEdit.sendKeys(Randomized.getFutureDate("MM/dd/yyyy",10));
    // System.out.println(Randomized.getCurrentDate());
  }

  async enterEffectiveDateAsPreviousDate(): Promise<void> {
    // uIMapSettings.sharedCodes.uIEffectiveDateEdit.sendKeys(Randomized.getPreviousDate(10,"MM/dd/yyyy"));
    // System.out.println(Randomized.getCurrentDate());
  }

  async verifyCodeIDFieldIsEnable(): Promise<void> {
    // boolean enabled = uIMapSettings.sharedCodes.uICodeIDEdit.isEnabled();
    // verify.ExpectedValueIsTrue(enabled);
  }

  async enterExpireDateAsCurrentDate(): Promise<void> {
    // uIMapSettings.sharedCodes.uIExpireDateEdit.sendKeys(Randomized.getCurrentDate());
    // System.out.println(Randomized.getCurrentDate());
  }

  async verifyAtDefaultInGrid(): Promise<void> {
    // String gridCell = objectIdentification.manualIdentify.getGridCell
    // (uIMapSettings.sharedCodes.uISharedCodesResultTable,BaseData.getSettingsModuleValue("Default")).getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Default"),gridCell);
  }

  async clearPopUpDescription(): Promise<void> {
    // uIMapSettings.sharedCodes.uIPopUpDescriptionEdit.clear();
  }

  async verifyAtCodeValueNotInGrid(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues
    // (uIMapSettings.sharedCodes.uISharedCodesResultTable,BaseData.getSettingsModuleValue("ColumnName"));
    // verify.ExpectedValueIsFalse(gridTableColumnValues.contains(BaseData.getSettingsModuleValue("CodeValue")));
  }

  async selectAtInventoryType(): Promise<void> {
    // uIMapSettings.sharedCodes.uIPopUpInventoryTypeArrow.click();
    // Playback.threadWait();
    // Playback.threadWait();
    // objectIdentification.manualIdentify.selectRadControlDropDownValue
    // (uIMapSettings.sharedCodes.uIInventoryTypePopUpTray,BaseData.getSettingsModuleValue("InventoryType"));
    // Playback.threadWait();
    // Playback.threadWait();
    // uIMapSettings.sharedCodes.uIPopUpInventoryTypeArrow.click();
  }

  async selectAtInventoryType(i: number): Promise<void> {
    // uIMapSettings.sharedCodes.uIPopUpInventoryTypeArrow.click();
    // Playback.threadWait();
    // Playback.threadWait();
    // objectIdentification.manualIdentify.selectRadControlDropDownValue
    // (uIMapSettings.sharedCodes.uIInventoryTypePopUpTray,BaseData.getSettingsModuleValue("InventoryType"+i));
    // Playback.threadWait();
    // Playback.threadWait();
    // uIMapSettings.sharedCodes.uIPopUpInventoryTypeArrow.click();
  }

  async verifyAtInventoryType(i: number): Promise<void> {
    // String dropDownSelectedItem =uIMapSettings.sharedCodes.uIInventoryTypeDropDown.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(dropDownSelectedItem,BaseData.getSettingsModuleValue("InventoryType"+i));
  }

  async verifyCourtAddressFieldIsEnable(): Promise<void> {
    // boolean enabled = uIMapSettings.sharedCodes.uICourtAddressEdit.isEnabled();
    // verify.ExpectedValueIsTrue(enabled);
  }

  async enterAtCourtAddress(i: number): Promise<void> {
    // uIMapSettings.sharedCodes.uICourtAddressEdit.click();
    // uIMapSettings.sharedCodes.uICourtAddressEdit.sendKeys(BaseData.getSettingsModuleValue("CourtAddress"+i));
  }

  async selectAtCodeValue(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.maintainCodeValue.uIMaintainCodeValueTable,
    // BaseData.getSettingsModuleValue("CodeValue"));
  }

  async clearCourtAddress(): Promise<void> {
    // uIMapSettings.sharedCodes.uICourtAddressEdit.click();
    // uIMapSettings.sharedCodes.uICourtAddressEdit.clear();
  }

  async clickIsNegativeCheckbox(): Promise<void> {
    // uIMapSettings.sharedCodes.uINegativeCheckbox.click();
  }

  async verifyTrafficCheckboxUnCheckedByCodeValue(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridRowByCellInnerTextUsingText(
    // uIMapSettings.sharedCodes.uISharedCodesResultTable,
    // BaseData.getSettingsModuleValue("CodeValueDescription"));
    // System.out.println("Img Status"+gridCell.findElement(By.tagName("img")).getAttribute("title"));
    // verify.ExpectedValueIsTrue(
    // gridCell.findElement(By.tagName("img")).getAttribute("title").contains("Unchecked"));
  }

  async clickNameMandatoryCheckbox(): Promise<void> {
    // uIMapSettings.sharedCodes.uINameMandatoryCheckbox.click();
  }

  async clickAtCodeValue(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerTextWithoutContains(
    // uIMapSettings.sharedCodes.uISharedCodesResultTable,
    // BaseData.getSettingsModuleValue("CodeValue"));
  }

  async verifyTrafficCheckboxCheckedByCodeValue(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridRowByCellInnerTextUsingText(
    // uIMapSettings.sharedCodes.uISharedCodesResultTable,
    // BaseData.getSettingsModuleValue("CodeValueDescription"));
    // System.out.println("Img Status"+gridCell.findElement(By.tagName("img")).getAttribute("title"));
    // verify.ExpectedValueIsTrue(
    // gridCell.findElement(By.tagName("img")).getAttribute("title").contains("Checked"));
  }

  async verifyAtJuris(i: number): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapSettings.sharedCodes.uIJurisDropdown);
    // verify.ExpectedPropertyValueIsEqual(dropDownSelectedItem, BaseData.getSettingsModuleValue("Juris"+i));
  }

  async verifyAtDashboardCategory(i: number): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapSettings.sharedCodes.uIDashboardCategoryDropdown);
    // verify.ExpectedPropertyValueIsEqual(dropDownSelectedItem, BaseData.getSettingsModuleValue("Juris"+i));
  }

  async getTableRowCount(): Promise<number> {
    // int gridTableRowsCount = objectIdentification.manualIdentify.getGridTableRowsCount(uIMapSettings.sharedCodes.uISharedCodesResultTable);
    // return gridTableRowsCount;
  }

  async copyDescription(): Promise<void> {
    // uIMapSettings.sharedCodes.uIDescriptionSharedCodedEdit.sendKeys(Keys.CONTROL + "a");
    // uIMapSettings.sharedCodes.uIDescriptionSharedCodedEdit.sendKeys(Keys.CONTROL + "c");
  }

  async pasteDocumentType(): Promise<void> {
    // uIMapSettings.sharedCodes.uIDocumentTypeEdit.sendKeys(Keys.CONTROL + "v");
    // uIMapSettings.sharedCodes.uIDocumentTypeEdit.sendKeys(Keys.TAB);
  }

  async pasteStatusCode(): Promise<void> {
    // uIMapSettings.sharedCodes.uIStatusCodeEdit.sendKeys(Keys.CONTROL + "v");
    // uIMapSettings.sharedCodes.uIStatusCodeEdit.sendKeys(Keys.TAB);
  }

  async pasteOffenseCode(): Promise<void> {
    // uIMapSettings.sharedCodes.uIOffenseCodeEdit.sendKeys(Keys.CONTROL + "v");
    // uIMapSettings.sharedCodes.uIOffenseCodeEdit.sendKeys(Keys.TAB);
  }

  async enterAtStatusCode(i: number): Promise<void> {
    // uIMapSettings.sharedCodes.uIStatusCodeEdit.sendKeys(BaseData.getSettingsModuleValue("StatusCode" + i));
    // uIMapSettings.sharedCodes.uIStatusCodeEdit.sendKeys(Keys.TAB);
  }

  async verifyStatusCodeIsBlank(): Promise<void> {
    // String statusCode = uIMapSettings.sharedCodes.uIStatusCodeEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(statusCode.isBlank() || statusCode == null,
    // "Status Code field contains value -->");
  }

  async verifyAtStatusCode(i: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("StatusCode" + i),
    // uIMapSettings.sharedCodes.uIStatusCodeEdit.getAttribute("value"));
  }

  async verifyAtDescription(i: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Description" + i),
    // uIMapSettings.sharedCodes.uIDescriptionSharedCodedEdit.getAttribute("value"));
  }

  async verify30504CodeNameAlreadyExistsAcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(30504) Code Name already exists");
  }

  async verifyDocumentTypeIsBlank(): Promise<void> {
    // String docType = uIMapSettings.sharedCodes.uIDocumentTypeEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(docType.isBlank() || docType == null,
    // "Document Type field contains value -->");
  }

  async verifyOffenseCodeIsBlank(): Promise<void> {
    // String offenseCode = uIMapSettings.sharedCodes.uIOffenseCodeEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(offenseCode.isBlank() || offenseCode == null,
    // "Offense Code field contains value -->");
  }

  async enterAtDocumentType(i: number): Promise<void> {
    // uIMapSettings.sharedCodes.uIDocumentTypeEdit.sendKeys(BaseData.getSettingsModuleValue("DocumentType" + i));
    // uIMapSettings.sharedCodes.uIDocumentTypeEdit.sendKeys(Keys.TAB);
  }

  async enterAtOffenseCode(i: number): Promise<void> {
    // uIMapSettings.sharedCodes.uIOffenseCodeEdit.sendKeys(BaseData.getSettingsModuleValue("OffenseCode" + i));
    // uIMapSettings.sharedCodes.uIOffenseCodeEdit.sendKeys(Keys.TAB);
  }

  async verifyAtDocumentType(i: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("DocumentType" + i),
    // uIMapSettings.sharedCodes.uIDocumentTypeEdit.getAttribute("value"));
  }

  async verifyAtOffenseCode(i: number): Promise<void> {
    // String OffenseCode = uIMapSettings.sharedCodes.uIOffenseCodeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("OffenseCode" + i), OffenseCode);
  }

  async verifyVersionFieldNotDisplayed(): Promise<void> {
    // boolean checkElementAvailableOrNot = objectIdentification.manualIdentify.checkElementAvailableOrNot(uIMapSettings.sharedCodes.uIVersionEdit);
    // verify.ExpectedValueIsFalse(checkElementAvailableOrNot);
  }

  async getDashboardCode(): Promise<string> {
    // String attribute = uIMapSettings.sharedCodes.uIDashboardCodeEdit.getAttribute("value");
    // return attribute;
  }

  async deleteInPopup1(): Promise<void> {
    // uIMapSettings.sharedCodes.uIPopUpDelete1Button.click();
    // popup.confirm.yes();
  }

  async clickBondCheckbox(): Promise<void> {
    // uIMapSettings.sharedCodes.uIBondCheckbox.click();
  }

  async clickSentenceCheckbox(): Promise<void> {
    // uIMapSettings.sharedCodes.uISentenceCheckbox.click();
  }

  async verifyAtCodeValueinGrid(): Promise<void> {
    // String CodeValue = BaseData.getSettingsModuleValue("CodeValue");
    // verify.ExpectedPropertyValueIsEqual(CodeValue,
    // objectIdentification.manualIdentify.getGridCell(uIMapSettings.sharedCodes.uICodeValueTable, CodeValue,
    // "Code Value").getText());
  }

  async clickCancelButtonInPopup(): Promise<void> {
    // uIMapSettings.sharedCodes.uICancelButtonInPopUp.click();
  }

  async verifyDispositionCodeIsEmpty(): Promise<void> {
    // String text = uIMapSettings.sharedCodes.uIDispositionCodeEdit.getAttribute("value");
    // System.out.println(text);
    // verify.ExpectedValueIsTrue(text.isEmpty());
  }

  async enterAtDispositionCode(jsonIndexValue: number): Promise<void> {
    // uIMapSettings.sharedCodes.uIDispositionCodeEdit.sendKeys(BaseData.getSettingsModuleValue("DispositionCode" + jsonIndexValue));
    // uIMapSettings.sharedCodes.uIDispositionCodeEdit.sendKeys(Keys.TAB);
  }

  async verifyInactiveDateAsCurrentDateTime(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate()+" "+Randomized.getCurrentTime("HH:mm"),
    // uIMapSettings.sharedCodes.uIInactiveDateEdit.getAttribute("value").substring(0,16),"Inactive date is not current date time-->");
  }

}

export class SOPTabPage {
  readonly page: Page;
  readonly sOPTypeComboBox: Locator;
  readonly textNameEdit: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sOPTypeComboBox = page.locator('#tabCFSCode_tmpl1_UsrSOP2_cddSopType_DropDown');
    this.textNameEdit = page.locator('#tabCFSCode_tmpl1_UsrSOP2_lupTextName_CodeValue');
    this.addButton = page.locator('#tabCFSCode_tmpl1_UsrSOP2_cmdAdd');
    this.saveButton = page.locator('#cmdSave');
  }

  async selectAtSOPType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.sharedCodes.sOPTab.uISOPTypeComboBox,
    // BaseData.getSettingsModuleValue("SOPType"));
  }

  async enterAtTextName(): Promise<void> {
    // uIMapSettings.sharedCodes.sOPTab.uITextNameEdit.sendKeys(BaseData.getSettingsModuleValue("TextName"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.sharedCodes.sOPTab.uIAddButton.click();
  }

}

export class ManagementTabPage {
  readonly page: Page;
  readonly caseStatusComboBox: Locator;
  readonly uCRMethodComboBox: Locator;
  readonly statutoryLimitationEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.caseStatusComboBox = page.locator('#tabDisposition_tmpl1_UsrDispMGMT1_cddStatus_DropDown');
    this.uCRMethodComboBox = page.locator('#tabDisposition_tmpl1_UsrDispMGMT1_cddExcepClr_DropDown');
    this.statutoryLimitationEdit = page.locator('#tabCFSCode_tmpl1_Usrmgmt2_txtStatutoryLimit');
  }

  async verifyStatutoryLimitationToRetainEvidenceIsEnabled(): Promise<void> {
    // uIMapSettings.sharedCodes.managementTab.uIStatutoryLimitationEdit.isEnabled();
  }

  async enterAtStatutoryLimitationToRetainEvidence(): Promise<void> {
    // uIMapSettings.sharedCodes.managementTab.uIStatutoryLimitationEdit
    // .sendKeys(BaseData.getSettingsModuleValue("StatutoryLimitation"));
    // uIMapSettings.sharedCodes.managementTab.uIStatutoryLimitationEdit.sendKeys(Keys.TAB);
  }

  async selectAtCaseStatus(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.sharedCodes.managementTab.uICaseStatusComboBox,
    // BaseData.getSettingsModuleValue("CaseStatus"));
  }

}

export class DistributedToTabPage {
  readonly page: Page;
  readonly rolesRadDropdownArrow: Locator;
  readonly rolesRadDropdown: Locator;
  readonly rolesRadTrayDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.rolesRadDropdownArrow = page.locator('#tabDashboard_tmpl1_usrBIDistributedPF_cddRolesid_Arrow');
    this.rolesRadDropdown = page.locator('#tabDashboard_tmpl1_usrBIDistributedPF_cddRolesid_Input');
    this.rolesRadTrayDropdown = page.locator('#tabDashboard_tmpl1_usrBIDistributedPF_cddRolesid_DropDown');
  }

  async clickRolesRadDropdownArrow(): Promise<void> {
    // uIMapSettings.sharedCodes.distributedToTab.uIRolesRadDropdownArrow.click();
  }

  async verifyRolesDropdownAsRadicalDropdown(): Promise<void> {
    // String attribute = uIMapSettings.sharedCodes.distributedToTab.uIRolesRadTrayDropdown.getAttribute("class");
    // verify.ExpectedValueIsTrue(attribute.contains("RadComboBoxDropDown"));
  }

  async clickRolesCheckAllCheckbox(): Promise<void> {
    // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(
    // uIMapSettings.sharedCodes.distributedToTab.uIRolesRadTrayDropdown, "Check All");
  }

}

export class ActionSearchPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly actionNoEdit: Locator;
  readonly searchButton: Locator;
  readonly actionSearchTable: Locator;
  readonly printIcon: Locator;
  readonly excelIcon: Locator;
  readonly includeInactiveLabel: Locator;
  readonly includeInactiveCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.actionNoEdit = page.locator('#txtAction');
    this.searchButton = page.locator('#cmdSearch');
    this.actionSearchTable = page.locator('#grdActionSrch');
    this.printIcon = page.locator("//img[@title=\'Print\']");
    this.excelIcon = page.locator("//img[@title=\'Export to Excel\']");
    this.includeInactiveLabel = page.locator('#lblInActive');
    this.includeInactiveCheckbox = page.locator('#chkInactive');
  }

  async enterAtActionNo(): Promise<void> {
    // uIMapSettings.actionSearch.uIActionNoEdit.sendKeys(BaseData.getSettingsModuleValue("ActionNo"));
  }

  async clickSearchButton(): Promise<void> {
    // uIMapSettings.actionSearch.uISearchButton.click();
  }

  async clickAddNewButton(): Promise<void> {
    // uIMapSettings.actionSearch.uIAddNewButton.click();
  }

  async verifyAtActionNoInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ActionNo"),
    // objectIdentification.manualIdentify.getGridCell(uIMapSettings.actionSearch.uIActionSearchTable,
    // BaseData.getSettingsModuleValue("ActionNo"), "Action#").getText());
  }

  async verifyAtProcessSPNameInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ProcessSPName"),
    // objectIdentification.manualIdentify.getGridCell(uIMapSettings.actionSearch.uIActionSearchTable,
    // BaseData.getSettingsModuleValue("ProcessSPName"), "Process SPName").getText());
  }

  async selectRowByAtActionName(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.actionSearch.uIActionSearchTable, BaseData.getSettingsModuleValue("ActionName"));
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapSettings.actionSearch.uIPrintIcon.click();
  }

  async clickExcelIcon(): Promise<void> {
    // uIMapSettings.actionSearch.uIExcelIcon.click();
  }

  async verifyGridIsEmpty(): Promise<void> {
    // verify.ExpectedIntergerValueIsEqualToActual(0, objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapSettings.actionSearch.uIActionSearchTable), "Grid contains data -->");
  }

  async clickIncludeInactiveLabel(): Promise<void> {
    // uIMapSettings.actionSearch.uIIncludeInactiveLabel.click();
  }

  async verifyIncludeInactiveCheckboxIsNotChecked(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapSettings.actionSearch.uIIncludeInactiveCheckbox.isSelected(), "Include Inactive checkbox is checked -->");
  }

  async clickIncludeInactiveCheckbox(): Promise<void> {
    // uIMapSettings.actionSearch.uIIncludeInactiveCheckbox.click();
  }

  async verifyIncludeInactiveCheckboxIsChecked(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.actionSearch.uIIncludeInactiveCheckbox.isSelected(), "Include Inactive checkbox is checked -->");
  }

}

export class ActionEntryPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly actionNoEdit: Locator;
  readonly actionNameEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly verifySPName: Locator;
  readonly processSPNameEdit: Locator;
  readonly inactiveCheckbox: Locator;
  readonly inputParameterNameEdit: Locator;
  readonly valueTypeComboBox: Locator;
  readonly addButton: Locator;
  readonly actionEntryTable: Locator;
  readonly saveNCloseButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly inactiveLabel: Locator;
  readonly inactiveEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdSave');
    this.actionNoEdit = page.locator('#txtAction');
    this.actionNameEdit = page.locator('#txtActName');
    this.descriptionEdit = page.locator('#txtDesc');
    this.verifySPName = page.locator('#txtVerSPName');
    this.processSPNameEdit = page.locator('#txtProSPName');
    this.inactiveCheckbox = page.locator('#chkInactive');
    this.inputParameterNameEdit = page.locator('#txtParamName');
    this.valueTypeComboBox = page.locator('#cddValueType_DropDown');
    this.addButton = page.locator('#imgAdd');
    this.actionEntryTable = page.locator('#grdAction');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.inactiveLabel = page.locator('#lblInActive');
    this.inactiveEdit = page.locator('#txtInactiveDttm');
  }

  async clickSaveButton(): Promise<void> {
    // uIMapSettings.actionEntry.uISaveButton.click();
  }

  async verify1011NoMessagePresentAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1101) No Message Present");
  }

  async enterAtActionNo(): Promise<void> {
    // uIMapSettings.actionEntry.uIActionNoEdit.sendKeys(BaseData.getSettingsModuleValue("ActionNo"));
  }

  async enterAtActionName(): Promise<void> {
    // uIMapSettings.actionEntry.uIActionNameEdit.sendKeys(BaseData.getSettingsModuleValue("ActionName"));
  }

  async enterDescription(): Promise<void> {
    // uIMapSettings.actionEntry.uIDescriptionEdit.sendKeys(Randomized.randomString(15));
  }

  async enterVerifySPName(): Promise<void> {
    // uIMapSettings.actionEntry.uIVerifySPName.sendKeys(Randomized.randomString(8));
  }

  async enterAtProcessSPName(): Promise<void> {
    // uIMapSettings.actionEntry.uIProcessSPNameEdit.sendKeys(BaseData.getSettingsModuleValue("ProcessSPName"));
  }

  async enterInputParameterName(): Promise<void> {
    // uIMapSettings.actionEntry.uIInputParameterNameEdit.sendKeys(Randomized.randomString(8));
  }

  async selectAtValueType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.actionEntry.uIValueTypeComboBox,
    // BaseData.getSettingsModuleValue("ValueType"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.actionEntry.uIAddButton.click();
  }

  async verifyAtValueTypeInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ValueType"),
    // objectIdentification.manualIdentify.getGridCell(uIMapSettings.actionEntry.uIActionEntryTable,
    // BaseData.getSettingsModuleValue("ValueType"), "Value Type").getText());
  }

  async saveNClose(): Promise<void> {
    // uIMapSettings.actionEntry.uISaveNCloseButton.click();
    // popup.confirm.yes();
  }

  async save(): Promise<void> {
    // uIMapSettings.actionEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async enterAtInputParameterName(): Promise<void> {
    // uIMapSettings.actionEntry.uIInputParameterNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("InputParameterName"));
  }

  async selectValueType(): Promise<void> {
    // objectIdentification.randomIdentify.selectDropDownOption(uIMapSettings.actionEntry.uIValueTypeComboBox);
  }

  async verifyAtInputParameterNameInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("InputParameterName"),
    // objectIdentification.manualIdentify.getGridCell(uIMapSettings.actionEntry.uIActionEntryTable,
    // BaseData.getSettingsModuleValue("InputParameterName"), "Parameter Name").getText());
  }

  async selectRowByAtValueType(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.actionEntry.uIActionEntryTable, BaseData.getSettingsModuleValue("ValueType"));
  }

  async clearInputParameterName(): Promise<void> {
    // uIMapSettings.actionEntry.uIInputParameterNameEdit.clear();
  }

  async enterAtInputParameterName1(): Promise<void> {
    // uIMapSettings.actionEntry.uIInputParameterNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("InputParameterName1"));
  }

  async selectAtValueType1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.actionEntry.uIValueTypeComboBox,
    // BaseData.getSettingsModuleValue("ValueType1"));
  }

  async verifyAtInputParameterName1InGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("InputParameterName1"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.actionEntry.uIActionEntryTable,
    // BaseData.getSettingsModuleValue("InputParameterName1"), "Parameter Name")
    // .getText());
  }

  async verifyAtValueType1InGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ValueType1"),
    // objectIdentification.manualIdentify.getGridCell(uIMapSettings.actionEntry.uIActionEntryTable,
    // BaseData.getSettingsModuleValue("ValueType1"), "Value Type").getText());
  }

  async close(): Promise<void> {
    // uIMapSettings.actionEntry.driver.close();
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.actionEntry.uIBottomLeftSideStatusBar.getText());
  }

  async verify1018RequiredEntriesAreMissingAcknowledge(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1018) Required Entries are Missing");
  }

  async verifyUpdateButtonIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.actionEntry.uIAddButton.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verify1051UpdatedDataExistsAcknowledg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1051) Updated data exists in the Fees tab. You must save or reset.");
  }

  async clickUpdateButton(): Promise<void> {
    // uIMapSettings.actionEntry.uIAddButton.click();
  }

  async clickInactiveLabel(): Promise<void> {
    // uIMapSettings.actionEntry.uIInactiveLabel.click();
  }

  async verifyInactiveCheckboxIsNotChecked(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapSettings.actionEntry.uIInactiveCheckbox.isSelected(), "Inactive checkbox is checked -->");
  }

  async clickInactiveCheckbox(): Promise<void> {
    // uIMapSettings.actionEntry.uIInactiveCheckbox.click();
  }

  async verifyInactiveCheckboxIsChecked(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.actionEntry.uIInactiveCheckbox.isSelected(), "Inactive checkbox is not checked -->");
  }

  async verifyInactiveDateTimeAsCurrentDateTime(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate()+" "+Randomized.getCurrentTime("HH:mm"), uIMapSettings.actionEntry.uIInactiveEdit.getAttribute("value").substring(0, 16), "Date and time is mismatched-->");
  }

}

export class TerminalPage {
  readonly page: Page;
  readonly terminalNameEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly includeInactiveCheckbox: Locator;
  readonly includeFireCheckbox: Locator;
  readonly iPAddressEdit: Locator;
  readonly searchButton: Locator;
  readonly addNewButton: Locator;
  readonly terminalTable: Locator;
  readonly exportToExcelIcon: Locator;
  readonly bulkExportImportIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.terminalNameEdit = page.locator('#txtTerminalName');
    this.descriptionEdit = page.locator('#txtDescription');
    this.includeInactiveCheckbox = page.locator('#chkIsActive');
    this.includeFireCheckbox = page.locator('#chkFireTerminal');
    this.iPAddressEdit = page.locator('#txtIPAddress');
    this.searchButton = page.locator('#cmdSearch');
    this.addNewButton = page.locator("(//span[contains(text(),\'Add New\')])");
    this.terminalTable = page.locator('#grdTerminalSrch');
    this.exportToExcelIcon = page.locator("//img[@title=\'Export to Excel\']");
    this.bulkExportImportIcon = page.locator("//li[@title=\'Bulk Export/Import\']");
  }

  async clickAddNewButton(): Promise<void> {
    // uIMapSettings.terminal.uIAddNewButton.click();
  }

  async enterAtTerminalName(): Promise<void> {
    // uIMapSettings.terminal.uITerminalNameEdit.sendKeys(BaseData.getSettingsModuleValue("TerminalName"));
  }

  async enterAtTerminalName1(): Promise<void> {
    // uIMapSettings.terminal.uITerminalNameEdit.sendKeys(BaseData.getSettingsModuleValue("TerminalName1"));
  }

  async enterAtIPAddress(): Promise<void> {
    // uIMapSettings.terminal.uIIPAddressEdit.sendKeys(BaseData.getSettingsModuleValue("IPAddress"));
  }

  async clickSearchButton(): Promise<void> {
    // uIMapSettings.terminal.uISearchButton.click();
  }

  async reloadTerminalScreen(): Promise<void> {
    // objectIdentification.manualIdentify.selectRightClickTabMenuByTabText("Terminal", "Reload Tab");
  }

  async selectRowByAtTerminalName(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapSettings.terminal.uITerminalTable,
    // BaseData.getSettingsModuleValue("TerminalName"));
  }

  async selectRowByAtTerminalName1(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapSettings.terminal.uITerminalTable,
    // BaseData.getSettingsModuleValue("TerminalName1"));
  }

  async verify1011NoRecordFoundAcknowledgeMessage(): Promise<void> {
    // // if(Playback.browserType == "Chrome")
    // // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
    // // else
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
  }

  async clickIncludeInactiveCheckbox(): Promise<void> {
    // uIMapSettings.terminal.uIIncludeInactiveCheckbox.click();
  }

  async clickIncludeFireCheckbox(): Promise<void> {
    // uIMapSettings.terminal.uIIncludeFireCheckbox.click();
  }

  async verifyAtTerminalNameInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("TerminalName"),
    // objectIdentification.manualIdentify.getGridCell(uIMapSettings.terminal.uITerminalTable,
    // BaseData.getSettingsModuleValue("TerminalName")).getText());
  }

  async verifyAtTerminalName1InGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("TerminalName1"),
    // objectIdentification.manualIdentify.getGridCell(uIMapSettings.terminal.uITerminalTable,
    // BaseData.getSettingsModuleValue("TerminalName1")).getText());
  }

  async verifyAtTerminalNameRowAppearGrayColor(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapSettings.terminal.uITerminalTable,
    // BaseData.getSettingsModuleValue("TerminalName"))
    // .getAttribute("class").contains("red"),
    // "verify terminal row appears gray color");
  }

  async verifyAtTerminalName1RowAppearRedColor(): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapSettings.terminal.uITerminalTable,
    // BaseData.getSettingsModuleValue("TerminalName1"))
    // .getAttribute("class").contains("Firebrick"), "verify terminal row appears red color");
  }

  async verifyGridCountIsNotNull(): Promise<void> {
    // int gridTableRowsCount = objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapSettings.terminal.uITerminalTable);
    // popup.kPICodedLookup.verifyRowCountIsNotNull(gridTableRowsCount);
  }

  async clickExportToExcelIcon(): Promise<void> {
    // uIMapSettings.terminal.uIExportToExcelIcon.click();
  }

  async getTerminalColumnValuesInGrid(ColName: string): Promise<string[]> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.terminal.uITerminalTable, ColName);
    // return gridTableColumnValues;
  }

  async clickBulkExportImportIcon(): Promise<void> {
    // uIMapSettings.terminal.uIBulkExportImportIcon.click();
  }

  async clickGridHeader(gridHeader: string): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectGridHeaderColumnNameWithoutContains(uIMapSettings.terminal.uITerminalTable, gridHeader);
  }

  async verifyGridIsEmpty(): Promise<void> {
    // verify.ExpectedIntergerValueIsEqualToActual(0,
    // objectIdentification.manualIdentify.getGridTableRowsCount(uIMapSettings.terminal.uITerminalTable),
    // "Grid contains data -->");
  }

  async clearTerminalName(): Promise<void> {
    // uIMapSettings.terminal.uITerminalNameEdit.click();
    // uIMapSettings.terminal.uITerminalNameEdit.clear();
  }

}

export class TerminalEntryPage {
  readonly page: Page;
  readonly terminalNameEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly fireCheckBox: Locator;
  readonly terminalEntryMainTab: Locator;
  readonly iPAddressTab: Locator;
  readonly dispatchTab: Locator;
  readonly nCICTab: Locator;
  readonly e911Tab: Locator;
  readonly screensTab: Locator;
  readonly inventoryTab: Locator;
  readonly deviceTab: Locator;
  readonly interfaceTab: Locator;
  readonly cMSTab: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly bottomMesssageTextView: Locator;

  constructor(page: Page) {
    this.page = page;
    this.terminalNameEdit = page.locator('#txtTerminalName');
    this.descriptionEdit = page.locator('#txtDescription');
    this.fireCheckBox = page.locator('#chkIsFire');
    this.terminalEntryMainTab = page.locator("(//span[contains(text(),\'Main\')])");
    this.iPAddressTab = page.locator("(//span[contains(text(),\'IP Address(s)\')])");
    this.dispatchTab = page.locator("(//span[contains(text(),\'Dispatch\')])");
    this.nCICTab = page.locator("//span[contains(text(),\'NCIC\')]");
    this.e911Tab = page.locator("(//span[contains(text(),\'E-911\')])");
    this.screensTab = page.locator("(//span[contains(text(),\'Screens\')])");
    this.inventoryTab = page.locator("(//span[contains(text(),\'Inventory\')])");
    this.deviceTab = page.locator("(//span[contains(text(),\'Device\')])");
    this.interfaceTab = page.locator("(//span[contains(text(),\'Interface\')])");
    this.cMSTab = page.locator("(//span[contains(text(),\'CMS\')])");
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.bottomMesssageTextView = page.locator("//td[@class = \'statusBar\']//b");
  }

  async clickSaveButton(): Promise<void> {
    // uIMapSettings.terminalEntry.uISaveButton.click();
  }

  async enterAtTerminalName(): Promise<void> {
    // uIMapSettings.terminalEntry.uITerminalNameEdit.sendKeys(BaseData.getSettingsModuleValue("TerminalName"));
  }

  async clickIPAddressTab(): Promise<void> {
    // uIMapSettings.terminalEntry.uIIPAddressTab.click();
  }

  async verifyDispatchTabDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapSettings.terminalEntry.uIDispatchTab.getAttribute("class").contains("TextDis"));
  }

  async verifyDispatchTabEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.terminalEntry.uIDispatchTab.isEnabled());
  }

  async verify1018RequiredEntriesAreMissingAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1018) Required Entries are Missing");
  }

  async save(): Promise<void> {
    // uIMapSettings.terminalEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async saveNClose(): Promise<void> {
    // uIMapSettings.terminalEntry.uISaveNCloseButton.click();
    // popup.confirm.yes();
  }

  async verify1002AdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.terminalEntry.uIBottomMesssageTextView.getText(),
    // "verify 1002 addition successful message is displayed");
  }

  async clickAllTabs(): Promise<void> {
    // uIMapSettings.terminalEntry.uIIPAddressTab.click();
    // uIMapSettings.terminalEntry.uIDispatchTab.click();
    // uIMapSettings.terminalEntry.uIScreensTab.click();
    // uIMapSettings.terminalEntry.uIInventoryTab.click();
    // uIMapSettings.terminalEntry.uIDeviceTab.click();
    // uIMapSettings.terminalEntry.uIInterfaceTab.click();
    // uIMapSettings.terminalEntry.uICMSTab.click();
  }

  async clickDispatchTab(): Promise<void> {
    // uIMapSettings.terminalEntry.uIDispatchTab.click();
  }

  async clickNCICTab(): Promise<void> {
    // uIMapSettings.terminalEntry.uINCICTab.click();
  }

  async clickE911Tab(): Promise<void> {
    // uIMapSettings.terminalEntry.uIE911Tab.click();
  }

  async clickScreensTab(): Promise<void> {
    // uIMapSettings.terminalEntry.uIScreensTab.click();
  }

  async clickInventoryTab(): Promise<void> {
    // uIMapSettings.terminalEntry.uIInventoryTab.click();
  }

  async clickDevicesTab(): Promise<void> {
    // uIMapSettings.terminalEntry.uIDeviceTab.click();
  }

  async clickInterfaceTab(): Promise<void> {
    // uIMapSettings.terminalEntry.uIInterfaceTab.click();
  }

  async enterAtDescription(): Promise<void> {
    // uIMapSettings.terminalEntry.uIDescriptionEdit.sendKeys(BaseData.getSettingsModuleValue("Description"));
  }

  async clickCMSTab(): Promise<void> {
    // uIMapSettings.terminalEntry.uICMSTab.click();
  }

}

export class CMSTabPage {
  readonly page: Page;
  readonly locationBuildingDropDown: Locator;
  readonly floorEdit: Locator;
  readonly podLookupIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locationBuildingDropDown = page.locator('#tabTerminal_tmpl9_usrCMS_cddBuilding_DropDown');
    this.floorEdit = page.locator('#tabTerminal_tmpl9_usrCMS_lupFloor_CodeValue');
    this.podLookupIcon = page.locator('#tabTerminal_tmpl9_usrCMS_lupPod_imgBtn');
  }

  async selectAtLocationBuilding(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption
    // (uIMapSettings.terminalEntry.cMSTab.uILocationBuildingDropDown,BaseData.getSettingsModuleValue("LocationBuilding"));
  }

  async enterAtFloor(): Promise<void> {
    // uIMapSettings.terminalEntry.cMSTab.uIFloorEdit.sendKeys(BaseData.getSettingsModuleValue("Floor"));
    // uIMapSettings.terminalEntry.cMSTab.uIFloorEdit.sendKeys(Keys.TAB);
  }

  async clickPodLookupIcon(): Promise<void> {
    // uIMapSettings.terminalEntry.cMSTab.uIPodLookupIcon.click();
  }

  async verifyTabColorAsBlue(JsonKeyIndex: number): Promise<void> {
    // String tabName = BaseData.getSettingsModuleValue("TabName" + JsonKeyIndex);
    // String tabColor = uIMapSettings.terminalEntry.driver
    // .findElement(By.xpath("//span[text()='" + tabName + "']")).getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual("rgba(0, 0, 255, 1)", tabColor);
  }

  async verify1051UpdatedDataExistAcknowledge(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1051) Updated data exists in the Interface tab. You must save or reset.");
  }

  async checkFireCheckBox(): Promise<void> {
    // uIMapSettings.terminalEntry.uIFireCheckBox.click();
  }

  async verifyFireCheckBoxIsSelected(): Promise<void> {
    // boolean selected = uIMapSettings.terminalEntry.uIFireCheckBox.isSelected();
    // verify.ExpectedValueIsTrue(selected);
  }

  async verifyAtDescription(): Promise<void> {
    // String text = uIMapSettings.terminalEntry.uIDescriptionEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Description"), text);
  }

  async close(): Promise<void> {
    // uIMapSettings.terminalEntry.driver.close();
  }

}

export class IPAddressTabPage {
  readonly page: Page;
  readonly locationEdit: Locator;
  readonly iPaddressEdit: Locator;
  readonly inactiveCheckBox: Locator;
  readonly useforCADCheckBox: Locator;
  readonly deviceNameEdit: Locator;
  readonly defaultPrinterEdit: Locator;
  readonly barCodePrinterEdit: Locator;
  readonly receiptPrinterEdit: Locator;
  readonly zetronDeviceComboBox: Locator;
  readonly identixLocationComboBox: Locator;
  readonly pOSMaxCharComboBox: Locator;
  readonly validationPrinterEdit: Locator;
  readonly checkPrinterEdit: Locator;
  readonly iQEyeEdit: Locator;
  readonly iQEyeIPEdit: Locator;
  readonly vehicleCheckBox: Locator;
  readonly customEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locationEdit = page.locator('#tabTerminal_tmpl0_UsrMain1_txtLocation');
    this.iPaddressEdit = page.locator('#tabTerminal_tmpl0_UsrMain1_txtIPaddress');
    this.inactiveCheckBox = page.locator('#tabTerminal_tmpl0_UsrMain1_chkInactive');
    this.useforCADCheckBox = page.locator('#tabTerminal_tmpl0_UsrMain1_chkCAD');
    this.deviceNameEdit = page.locator('#tabTerminal_tmpl0_UsrMain1_txtDeviceName');
    this.defaultPrinterEdit = page.locator('#tabTerminal_tmpl0_UsrMain1_txtDefaultPrinter');
    this.barCodePrinterEdit = page.locator('#tabTerminal_tmpl0_UsrMain1_txtBarCodePrinter');
    this.receiptPrinterEdit = page.locator('#tabTerminal_tmpl0_UsrMain1_txtReceiptPrinter');
    this.zetronDeviceComboBox = page.locator('#tabTerminal_tmpl0_UsrMain1_ccdZetronDevice_DropDown');
    this.identixLocationComboBox = page.locator('#tabTerminal_tmpl0_UsrMain1_cddIdentixLoc_DropDown');
    this.pOSMaxCharComboBox = page.locator('#tabTerminal_tmpl0_UsrMain1_cddPOSMaxChar_DropDown');
    this.validationPrinterEdit = page.locator('#tabTerminal_tmpl0_UsrMain1_txtValidationPrinter');
    this.checkPrinterEdit = page.locator('#tabTerminal_tmpl0_UsrMain1_txtCheckPrinter');
    this.iQEyeEdit = page.locator('#tabTerminal_tmpl0_UsrMain1_txtIQEye');
    this.iQEyeIPEdit = page.locator('#tabTerminal_tmpl0_UsrMain1_txtIQEye');
    this.vehicleCheckBox = page.locator('#tabTerminal_tmpl0_UsrMain1_chkUNIT');
    this.customEdit = page.locator('#tabTerminal_tmpl0_UsrMain1_txtCustom');
  }

  async enterLocation(): Promise<void> {
    // uIMapSettings.terminalEntry.iPAddressTab.uILocationEdit.sendKeys(Randomized.randomString(10));
  }

  async enterAtIPAddress(): Promise<void> {
    // uIMapSettings.terminalEntry.iPAddressTab.uIIPaddressEdit
    // .sendKeys(BaseData.getSettingsModuleValue("IPAddress"));
  }

  async enterDeviceName(): Promise<void> {
    // uIMapSettings.terminalEntry.iPAddressTab.uIDeviceNameEdit.sendKeys(Randomized.randomString(10));
  }

  async clickUsedForCADCheckbox(): Promise<void> {
    // uIMapSettings.terminalEntry.iPAddressTab.uIUseforCADCheckBox.click();
  }

  async enterDefaultPrinter(): Promise<void> {
    // uIMapSettings.terminalEntry.iPAddressTab.uIDefaultPrinterEdit.sendKeys(Randomized.randomString(10));
  }

  async selectIdentixLocation(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapSettings.terminalEntry.iPAddressTab.uIIdentixLocationComboBox);
  }

  async enterBarCodePrinter(): Promise<void> {
    // uIMapSettings.terminalEntry.iPAddressTab.uIBarCodePrinterEdit.sendKeys(Randomized.randomString(10));
  }

  async selectPOSMaxCharLine(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapSettings.terminalEntry.iPAddressTab.uIPOSMaxCharComboBox);
  }

  async enterReceiptPrinter(): Promise<void> {
    // uIMapSettings.terminalEntry.iPAddressTab.uIReceiptPrinterEdit.sendKeys(Randomized.randomString(10));
  }

  async enterValidationPrinter(): Promise<void> {
    // uIMapSettings.terminalEntry.iPAddressTab.uIValidationPrinterEdit.sendKeys(Randomized.randomString(10));
  }

  async enterCheckPrinter(): Promise<void> {
    // uIMapSettings.terminalEntry.iPAddressTab.uICheckPrinterEdit.sendKeys(Randomized.randomString(10));
  }

  async selectZetronDevice(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapSettings.terminalEntry.iPAddressTab.uIZetronDeviceComboBox);
  }

  async enterIPAddress(propertiesFile: string): Promise<void> {
    // uIMapSettings.terminalEntry.iPAddressTab.uIIPaddressEdit.sendKeys(propertiesFile);
  }

  async enterAtIQEyeIP(): Promise<void> {
    // uIMapSettings.terminalEntry.iPAddressTab.uIIQEyeIPEdit.sendKeys
    // (BaseData.getSettingsModuleValue("IQEyeIP"));
  }

  async clickIsVehicleCheckBox(): Promise<void> {
    // uIMapSettings.terminalEntry.iPAddressTab.uIVehicleCheckBox.click();
  }

  async enterAtCustom(): Promise<void> {
    // uIMapSettings.terminalEntry.iPAddressTab.uICustomEdit.sendKeys(BaseData.getSettingsModuleValue("Custom"));
  }

}

export class DispatchTabPage {
  readonly page: Page;
  readonly policeTakeNewCallCheckBox: Locator;
  readonly policeUsedforDispatchCheckBox: Locator;
  readonly policeReceivedCallsCheckBox: Locator;
  readonly fireTakeNewCallCheckBox: Locator;
  readonly fireUsedforDispatchCheckBox: Locator;
  readonly fireReceivedCallsCheckBox: Locator;
  readonly eMSTakeNewCallCheckBox: Locator;
  readonly othersTakeNewCallCheckBox: Locator;
  readonly dispatchRouteComboBox: Locator;
  readonly addButton: Locator;
  readonly dispatchRouteTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.policeTakeNewCallCheckBox = page.locator('#tabTerminal_tmpl2_UsrPolice1_chkNewCalls');
    this.policeUsedforDispatchCheckBox = page.locator('#tabTerminal_tmpl2_UsrPolice1_chkDispatch');
    this.policeReceivedCallsCheckBox = page.locator('#tabTerminal_tmpl2_UsrPolice1_chkACD');
    this.fireTakeNewCallCheckBox = page.locator('#tabTerminal_tmpl2_UsrPolice1_chkNewCallsFire');
    this.fireUsedforDispatchCheckBox = page.locator('#tabTerminal_tmpl2_UsrPolice1_chkDispatchFire');
    this.fireReceivedCallsCheckBox = page.locator('#tabTerminal_tmpl2_UsrPolice1_chkACDFire');
    this.eMSTakeNewCallCheckBox = page.locator('#tabTerminal_tmpl2_UsrPolice1_chkNewCallsEMS');
    this.othersTakeNewCallCheckBox = page.locator('#tabTerminal_tmpl2_UsrPolice1_chkNewCallsOthers');
    this.dispatchRouteComboBox = page.locator('#tabTerminal_tmpl2_UsrPolice1_cddDispatchRoute_DropDown');
    this.addButton = page.locator('#tabTerminal_tmpl2_UsrPolice1_cmdAdd');
    this.dispatchRouteTable = page.locator('#tabTerminal_tmpl2_UsrPolice1_grdDispatchRoute');
  }

  async clickPoliceTakeNewCallsCheckbox(): Promise<void> {
    // uIMapSettings.terminalEntry.dispatchTab.uIPoliceTakeNewCallCheckBox.click();
  }

  async clickPoliceUsedForDispatchCheckbox(): Promise<void> {
    // uIMapSettings.terminalEntry.dispatchTab.uIPoliceUsedforDispatchCheckBox.click();
  }

  async clickPoliceReceivedCallsCheckbox(): Promise<void> {
    // uIMapSettings.terminalEntry.dispatchTab.uIPoliceReceivedCallsCheckBox.click();
  }

  async clickFireTakeNewCallsCheckbox(): Promise<void> {
    // uIMapSettings.terminalEntry.dispatchTab.uIFireTakeNewCallCheckBox.click();
  }

  async clickFireUsedForDispatchCheckbox(): Promise<void> {
    // uIMapSettings.terminalEntry.dispatchTab.uIFireUsedforDispatchCheckBox.click();
  }

  async clickFireReceivedCallsCheckbox(): Promise<void> {
    // uIMapSettings.terminalEntry.dispatchTab.uIFireReceivedCallsCheckBox.click();
  }

  async clickEMSTakeNewCallsCheckbox(): Promise<void> {
    // uIMapSettings.terminalEntry.dispatchTab.uIEMSTakeNewCallCheckBox.click();
  }

  async clickOthersTakeNewCallsCheckbox(): Promise<void> {
    // uIMapSettings.terminalEntry.dispatchTab.uIOthersTakeNewCallCheckBox.click();
  }

  async selectAtDispatchRoute(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.terminalEntry.dispatchTab.uIDispatchRouteComboBox,
    // BaseData.getSettingsModuleValue("DispatchRoute"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.terminalEntry.dispatchTab.uIAddButton.click();
  }

  async verifyAtDispatchRouteInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("DispatchRoute"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.terminalEntry.dispatchTab.uIDispatchRouteTable,
    // BaseData.getSettingsModuleValue("DispatchRoute"))
    // .getText(),
    // "Verify DispatchRoute is available in Grid");
  }

}

export class NCICTabPage {
  readonly page: Page;
  readonly oRINoEdit: Locator;
  readonly mnemonicEdit: Locator;
  readonly workStationNameEdit: Locator;
  readonly receivedUnsolicitedMessageCheckBox: Locator;
  readonly receivedUndeliveredMessageCheckBox: Locator;
  readonly addMoreORILink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.oRINoEdit = page.locator('#tabTerminal_tmpl3_UsrNCIC1_txtORIno');
    this.mnemonicEdit = page.locator('#tabTerminal_tmpl3_UsrNCIC1_txtPSN');
    this.workStationNameEdit = page.locator('#tabTerminal_tmpl3_UsrNCIC1_txtWorkStationName');
    this.receivedUnsolicitedMessageCheckBox = page.locator('#tabTerminal_tmpl3_UsrNCIC1_chkUnsolicitedMsg');
    this.receivedUndeliveredMessageCheckBox = page.locator('#tabTerminal_tmpl3_UsrNCIC1_chkUndeliveredMsg');
    this.addMoreORILink = page.locator("//a[@title=\'Add More ORI\']");
  }

  async enterORINo(): Promise<void> {
    // uIMapSettings.terminalEntry.nCICTab.uIORINoEdit.sendKeys(Randomized.randomString(15));
  }

  async enterMnemonic(): Promise<void> {
    // uIMapSettings.terminalEntry.nCICTab.uIMnemonicEdit.sendKeys(Randomized.randomString(15));
  }

  async enterWorkStationName(): Promise<void> {
    // uIMapSettings.terminalEntry.nCICTab.uIWorkStationNameEdit.click();
    // uIMapSettings.terminalEntry.nCICTab.uIWorkStationNameEdit.sendKeys(Randomized.randomString(15));
  }

  async clickReceiveUnsolicitedMessageCheckbox(): Promise<void> {
    // uIMapSettings.terminalEntry.nCICTab.uIReceivedUnsolicitedMessageCheckBox.click();
  }

  async clickReceiveUndeliveredMessageCheckbox(): Promise<void> {
    // uIMapSettings.terminalEntry.nCICTab.uIReceivedUndeliveredMessageCheckBox.click();
  }

  async enterAtORINo(): Promise<void> {
    // uIMapSettings.terminalEntry.nCICTab.uIORINoEdit.click();
    // uIMapSettings.terminalEntry.nCICTab.uIORINoEdit.sendKeys(BaseData.getSettingsModuleValue("ORINo"));
  }

  async enterAtMnemonic(): Promise<void> {
    // uIMapSettings.terminalEntry.nCICTab.uIMnemonicEdit.sendKeys(BaseData.getSettingsModuleValue("Mnemonic"));
  }

  async clickAddMoreORI(): Promise<void> {
    // uIMapSettings.terminalEntry.nCICTab.uIAddMoreORILink.click();
  }

  async verifyAddMoreORILinkIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.terminalEntry.nCICTab.uIAddMoreORILink.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed, "Add More ORI link is not displayed --> ");
  }

}

export class E911TabPage {
  readonly page: Page;
  readonly positionIDEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.positionIDEdit = page.locator('#tabTerminal_tmpl4_UsrE9111_txtPositionId');
  }

  async enterPositionID(): Promise<void> {
    // uIMapSettings.terminalEntry.e911Tab.uIPositionIDEdit
    // .sendKeys(String.valueOf(Randomized.getRandomNumbers(3)));
  }

}

export class ScreensTabPage {
  readonly page: Page;
  readonly monitorComboBox: Locator;
  readonly screenComboBox: Locator;
  readonly customStatusComboBox: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly screensTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.monitorComboBox = page.locator('#tabTerminal_tmpl5_UsrDispatchRoutes1_cddMonitor_DropDown');
    this.screenComboBox = page.locator('#tabTerminal_tmpl5_UsrDispatchRoutes1_cddScreenName_DropDown');
    this.customStatusComboBox = page.locator('#tabTerminal_tmpl5_UsrDispatchRoutes1_cddCustomizeName_DropDown');
    this.addButton = page.locator('#tabTerminal_tmpl5_UsrDispatchRoutes1_cmdAdd');
    this.clearButton = page.locator('#tabTerminal_tmpl5_UsrDispatchRoutes1_cmdClear');
    this.screensTable = page.locator('#tabTerminal_tmpl5_UsrDispatchRoutes1_grdTerminalScreen');
  }

  async selectAtMonitor(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.terminalEntry.screensTab.uIMonitorComboBox,
    // BaseData.getSettingsModuleValue("Monitor"));
  }

  async selectAtScreen(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.terminalEntry.screensTab.uIScreenComboBox, BaseData.getSettingsModuleValue("Screen"));
  }

  async selectCustomStatus(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapSettings.terminalEntry.screensTab.uICustomStatusComboBox);
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.terminalEntry.screensTab.uIAddButton.click();
  }

  async verifyAtMonitorInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Monitor"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.terminalEntry.screensTab.uIScreensTable,
    // BaseData.getSettingsModuleValue("Monitor"))
    // .getText(),
    // "Verify monitor is avaialble in grid");
  }

  async verifyAtScreenNameInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ScreenName"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.terminalEntry.screensTab.uIScreensTable,
    // BaseData.getSettingsModuleValue("ScreenName"))
    // .getText(),
    // "verify screen name is available in grid");
  }

  async deleteAtMonitorInGrid(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
    // uIMapSettings.terminalEntry.screensTab.uIScreensTable, BaseData.getSettingsModuleValue("Monitor"));
  }

  async veriftAtMonitorRowDeleted(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapSettings.terminalEntry.screensTab.uIScreensTable.getText()
    // .contains(BaseData.getSettingsModuleValue("Monitor")), "verify row deleted from grid");
  }

}

export class InventoryTabPage {
  readonly page: Page;
  readonly countercheckoutRadioButton: Locator;
  readonly selfCheckOutRadioButton: Locator;
  readonly allowTrackingNumberCheckbox: Locator;
  readonly barcodeScanningEnabledCheckbox: Locator;
  readonly pFPasswordRequiredCheckbox: Locator;
  readonly enableReturnAllButtonChcekbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.countercheckoutRadioButton = page.locator('#tabTerminal_tmpl6_UsrInventory1_RdnCounter');
    this.selfCheckOutRadioButton = page.locator('#tabTerminal_tmpl6_UsrInventory1_RdnSelf');
    this.allowTrackingNumberCheckbox = page.locator('#tabTerminal_tmpl6_UsrInventory1_chkATrack');
    this.barcodeScanningEnabledCheckbox = page.locator('#tabTerminal_tmpl6_UsrInventory1_chkBarcode');
    this.pFPasswordRequiredCheckbox = page.locator('#tabTerminal_tmpl6_UsrInventory1_chkPwdRqd');
    this.enableReturnAllButtonChcekbox = page.locator('#tabTerminal_tmpl6_UsrInventory1_chkReturnAll');
  }

  async clickCounterCheckOutRadioButton(): Promise<void> {
    // uIMapSettings.terminalEntry.inventoryTab.uICountercheckoutRadioButton.click();
  }

  async clickSelfCheckOutRadioButton(): Promise<void> {
    // uIMapSettings.terminalEntry.inventoryTab.uISelfCheckOutRadioButton.click();
  }

  async verifyAllCheckboxDisabled(): Promise<void> {
    // boolean enabled = uIMapSettings.terminalEntry.inventoryTab.uIAllowTrackingNumberCheckbox.isEnabled();
    // verify.ExpectedValueIsFalse(enabled);
    // boolean enabled1 =uIMapSettings.terminalEntry.inventoryTab.uIBarcodeScanningEnabledCheckbox.isEnabled();
    // verify.ExpectedValueIsFalse(enabled1);
    // boolean enabled2 =uIMapSettings.terminalEntry.inventoryTab.uIPFPasswordRequiredCheckbox.isEnabled();
    // verify.ExpectedValueIsFalse(enabled2);
    // boolean enabled3 =uIMapSettings.terminalEntry.inventoryTab.uIEnableReturnAllButtonChcekbox.isEnabled();
    // verify.ExpectedValueIsFalse(enabled3);
  }

  async verifyAllCheckboxEnabled(): Promise<void> {
    // boolean enabled = uIMapSettings.terminalEntry.inventoryTab.uIAllowTrackingNumberCheckbox.isEnabled();
    // verify.ExpectedValueIsTrue(enabled);
    // boolean enabled1 =uIMapSettings.terminalEntry.inventoryTab.uIBarcodeScanningEnabledCheckbox.isEnabled();
    // verify.ExpectedValueIsTrue(enabled1);
    // boolean enabled2 =uIMapSettings.terminalEntry.inventoryTab.uIPFPasswordRequiredCheckbox.isEnabled();
    // verify.ExpectedValueIsTrue(enabled2);
    // boolean enabled3 =uIMapSettings.terminalEntry.inventoryTab.uIEnableReturnAllButtonChcekbox.isEnabled();
    // verify.ExpectedValueIsTrue(enabled3);
  }

  async clickAllCheckbox(): Promise<void> {
    // uIMapSettings.terminalEntry.inventoryTab.uIAllowTrackingNumberCheckbox.click();
    // uIMapSettings.terminalEntry.inventoryTab.uIBarcodeScanningEnabledCheckbox.click();
    // uIMapSettings.terminalEntry.inventoryTab.uIPFPasswordRequiredCheckbox.click();
    // uIMapSettings.terminalEntry.inventoryTab.uIEnableReturnAllButtonChcekbox.click();
  }

}

export class DeviceTabPage {
  readonly page: Page;
  readonly terminalTypeComputerRadioButton: Locator;
  readonly deviceTypeComboBox: Locator;
  readonly deviceIDEdit: Locator;
  readonly sWDANotifyAddressEdit: Locator;
  readonly deviceID: Locator;

  constructor(page: Page) {
    this.page = page;
    this.terminalTypeComputerRadioButton = page.locator('#tabTerminal_tmpl7_UsrTerminalDevice1_RdnComputer');
    this.deviceTypeComboBox = page.locator('#tabTerminal_tmpl7_UsrTerminalDevice1_cddDeviceType_DropDown');
    this.deviceIDEdit = page.locator('#tabTerminal_tmpl7_UsrTerminalDevice1_txtDeviceID');
    this.sWDANotifyAddressEdit = page.locator('#tabTerminal_tmpl7_UsrTerminalDevice1_txtSWDANotifyAddr');
    this.deviceID = page.locator('#tabTerminal_tmpl7_UsrTerminalDevice1_txtDeviceID');
  }

  async clickTerminalTypeComputerRadioButton(): Promise<void> {
    // uIMapSettings.terminalEntry.deviceTab.uITerminalTypeComputerRadioButton.click();
  }

  async selectDeviceType(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapSettings.terminalEntry.deviceTab.uIDeviceTypeComboBox);
  }

  async enterSWDANotifyAddress(): Promise<void> {
    // uIMapSettings.terminalEntry.deviceTab.uISWDANotifyAddressEdit.sendKeys(Randomized.randomString(16));
  }

  async verifyDeviceIDIsDisabled(): Promise<void> {
    // String enabled = uIMapSettings.terminalEntry.deviceTab.uIDeviceID.getAttribute("readonly");
    // verify.ExpectedPropertyValueIsEqual("true",enabled, "Device ID Is Enabled --> ");
  }

}

export class InterfaceTabPage {
  readonly page: Page;
  readonly interfaceNameComboBox: Locator;
  readonly locationHostSiteEdit: Locator;
  readonly custom1Edit: Locator;
  readonly custom2Edit: Locator;
  readonly addButton: Locator;
  readonly interfaceTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.interfaceNameComboBox = page.locator('#tabTerminal_tmpl8_UsrTerminalInterface1_cddInterfaceName_DropDown');
    this.locationHostSiteEdit = page.locator('#tabTerminal_tmpl8_UsrTerminalInterface1_txtHostName');
    this.custom1Edit = page.locator('#tabTerminal_tmpl8_UsrTerminalInterface1_txtCustom1');
    this.custom2Edit = page.locator('#tabTerminal_tmpl8_UsrTerminalInterface1_txtCustom2');
    this.addButton = page.locator('#tabTerminal_tmpl8_UsrTerminalInterface1_cmdAdd');
    this.interfaceTable = page.locator('#tabTerminal_tmpl8_UsrTerminalInterface1_grdTerminalInterface');
  }

  async selectAtInterfaceName(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.terminalEntry.interfaceTab.uIInterfaceNameComboBox,
    // BaseData.getSettingsModuleValue("InterfaceName"));
  }

  async enterAtLocationHostSite(): Promise<void> {
    // uIMapSettings.terminalEntry.interfaceTab.uILocationHostSiteEdit
    // .sendKeys(BaseData.getSettingsModuleValue("LocationHostSite"));
  }

  async enterCustom1(): Promise<void> {
    // uIMapSettings.terminalEntry.interfaceTab.uICustom1Edit.sendKeys(Randomized.randomString(16));
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.terminalEntry.interfaceTab.uIAddButton.click();
  }

  async verifyAtInterfaceNameInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("InterfaceName"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.terminalEntry.interfaceTab.uIInterfaceTable,
    // BaseData.getSettingsModuleValue("InterfaceName"))
    // .getText(),
    // "Interface name is not available in grid --> ");
  }

  async verifyAtLocationHostSiteInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("LocationHostSite"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.terminalEntry.interfaceTab.uIInterfaceTable,
    // BaseData.getSettingsModuleValue("LocationHostSite"))
    // .getText(),
    // "verify location host site is available in grid");
  }

  async enterCustom2(): Promise<void> {
    // uIMapSettings.terminalEntry.interfaceTab.uICustom2Edit.sendKeys(Randomized.randomString(16));
  }

  async verify1019DuplicationOfDataFound(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1019) Duplication Of Data Found");
  }

}

export class TextScreenPage {
  readonly page: Page;
  readonly grid: GridHelpers;
  readonly textResultTable: Locator;
  readonly addNewButton: Locator;
  readonly inactiveCheckBox: Locator;
  readonly templateScreenIDCodeEdit: Locator;
  readonly textNameEdit: Locator;
  readonly searchButton: Locator;
  readonly descriptionEdit: Locator;
  readonly templateForDropdownArrow: Locator;
  readonly templateForRadDropdownTray: Locator;
  readonly searchWordsEdit: Locator;
  readonly jurisLabel: Locator;
  readonly textSearchLable: Locator;
  readonly textNameLabel: Locator;
  readonly templateForLabel: Locator;
  readonly searchWordsLabel: Locator;
  readonly includeInactiveLabel: Locator;
  readonly descriptionLabel: Locator;
  readonly excelIcon: Locator;
  readonly includeInactiveCheckBox: Locator;
  readonly uIResultGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.grid = new GridHelpers(page);
    this.textResultTable = page.locator("//div[@id=\'grdText\']");
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.inactiveCheckBox = page.locator('#chkActive');
    this.templateScreenIDCodeEdit = page.locator('#lupScreenID_CodeValue');
    this.textNameEdit = page.locator('#txtTextName');
    this.searchButton = page.locator('#cmdSearch');
    this.descriptionEdit = page.locator('#txtDescription');
    this.templateForDropdownArrow = page.locator('#ddlTemplatefor_Arrow');
    this.templateForRadDropdownTray = page.locator('#ddlTemplatefor_DropDown');
    this.searchWordsEdit = page.locator('#txtSearchWords');
    this.jurisLabel = page.locator('#lblJuris');
    this.textSearchLable = page.locator('#grdText');
    this.textNameLabel = page.locator('#lblTextName');
    this.templateForLabel = page.locator('#lblTemplate');
    this.searchWordsLabel = page.locator('#lblSearchWords');
    this.includeInactiveLabel = page.locator('#lblIsActive');
    this.descriptionLabel = page.locator('#lblDescription');
    this.excelIcon = page.locator("//img[@title=\'Export to Excel\']");
    this.includeInactiveCheckBox = page.locator('#chkActive');
    this.uIResultGrid = page.locator('#grdText');
  }

  async clickAddNew(): Promise<void> {
    await this.addNewButton.click();
  }

  async clickSearch(): Promise<void> {
    // 1. Highlight button
    await this.searchButton.evaluate((el: HTMLElement) => {
      el.style.border = '3px solid red';
      el.style.backgroundColor = 'yellow';
    });

    // 2. Click the button
    await this.searchButton.click();

    // 3. Wait for the table data row to appear in the DOM
    await this.page.locator('tbody tr').first().waitFor({ state: 'visible', timeout: 15000 });
  }


  async enterAtTextName(): Promise<void> {
    // uIMapSettings.textScreen.uITextNameEdit.sendKeys(BaseData.getHomeModuleValue("TextName"));
  }

  async enterAtTextName(i: number): Promise<void> {
    // uIMapSettings.textScreen.uITextNameEdit.sendKeys(BaseData.getHomeModuleValue("TextName"+i));
  }

  async verifyAtTextName(rowIndex: number): Promise<void> {
    // Playback.controlReadyThreadWait();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("TextName"),
    // objectIdentification.manualIdentify.getGridCellInnerText(uIMapSettings.textScreen.uITextResultTable,
    // "Text Name", rowIndex));
  }

  async verifyAtExpiryDate(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ExpiryDate"),
    // objectIdentification.manualIdentify.getGridCellInnerText(uIMapSettings.textScreen.uITextResultTable,
    // "Expiry Date", rowIndex));
  }

  async clickAtTextNameInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapSettings.textScreen.uITextResultTable,
    // BaseData.getSettingsModuleValue("TextName"));
  }

  async verifyNoRecordFoundAcknowledgeMessage(): Promise<void> {
    // // if (Playback.browserType == "Chrome")
    // // {
    // // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
    // // }
    // // else
    // popup.acknowledge.okWithExpectedMessage(" 1011 - No Record Found");
  }

  async selectTextNameInGrid(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow(uIMapSettings.textScreen.uITextResultTable);
  }

  async verifyTemplateForDropdownAsRadicalDropdown(): Promise<void> {
    // uIMapSettings.textScreen.uITemplateForDropdownArrow.click();
    // String attribute = uIMapSettings.textScreen.uITemplateForRadDropdownTray.getAttribute("class");
    // verify.ExpectedValueIsTrue(attribute.contains("RadComboBoxDropDown"));
    // uIMapSettings.textScreen.uITemplateForDropdownArrow.click();
  }

  async selectTemplateForAsCheckAll(): Promise<void> {
    // uIMapSettings.textScreen.uITemplateForDropdownArrow.click();
    // Playback.pageLoadThreadWait();
    // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(
    // uIMapSettings.textScreen.uITemplateForRadDropdownTray, "Check All");
    // uIMapSettings.textScreen.uITemplateForDropdownArrow.click();
  }

  async selectAtTextName(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapSettings.textScreen.uITextResultTable,
    // BaseData.getHomeModuleValue("TextName"));
  }

  async selectAtTemplateFor(): Promise<void> {
    await this.templateForDropdownArrow.click();
    await this.page.waitForTimeout(1000);
    const templateFor = BaseData.getTestValue('TemplateFor');
    const elementHelpers = new ElementHelpers(this.page);
    await elementHelpers.selectRadControlDropDownValueSelect(this.templateForRadDropdownTray, templateFor);
    await this.templateForDropdownArrow.click();
  }

  async verifyAtTextNameInGrid(): Promise<void> {
    let columnName: string = BaseData.getTestValue("ColumnName");
    let columnValue: string = BaseData.getTestValue("ColumnValue");
    const columnValues = await this.grid.getColumnValues(
      this.page,
      this.uIResultGrid,
      columnName
    );
    // 2. Verify the expected JSON value is present in the returned array
    expect(columnValues).toContain(columnValue);
  }

  async enterTextName(): Promise<void> {
    // uIMapSettings.textScreen.uITextNameEdit.sendKeys(Randomized.randomAlphanumeric(520));
  }

  async enterSearchWords(): Promise<void> {
    // uIMapSettings.textScreen.uISearchWordsEdit.sendKeys(Randomized.randomAlphanumeric(520));
  }

  async enterDescription(): Promise<void> {
    // uIMapSettings.textScreen.uIDescriptionEdit.sendKeys(Randomized.randomAlphanumeric(520));
  }

  async verifyTextNameAcceptMoreThan500Characters(): Promise<void> {
    // int length = uIMapSettings.textScreen.uITextNameEdit.getAttribute("value").length();
    // verify.ExpectedValueIsTrue(length > 500);
  }

  async verifySearchWordsAcceptMoreThan500Characters(): Promise<void> {
    // int length = uIMapSettings.textScreen.uISearchWordsEdit.getAttribute("value").length();
    // verify.ExpectedValueIsTrue(length > 500);
  }

  async verifyDescriptionAcceptMoreThan500Characters(): Promise<void> {
    // int length = uIMapSettings.textScreen.uIDescriptionEdit.getAttribute("value").length();
    // verify.ExpectedValueIsTrue(length > 500);
  }

  async clearTextName(): Promise<void> {
    // uIMapSettings.textScreen.uITextNameEdit.clear();
  }

  async clearSearchWords(): Promise<void> {
    // uIMapSettings.textScreen.uISearchWordsEdit.clear();
  }

  async clearDescription(): Promise<void> {
    // uIMapSettings.textScreen.uIDescriptionEdit.clear();
  }

  async clickGridHeader(gridHeader: string): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectGridHeaderColumnNameWithoutContains(uIMapSettings.textScreen.uITextResultTable, gridHeader);
  }

  async verifyGridIsEmpty(): Promise<void> {
    // verify.ExpectedIntergerValueIsEqualToActual(0, objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapSettings.textScreen.uITextResultTable), "Grid contains data -->");
  }

  async verifyColumnNameTemplateForShows(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridHeaderColumnName(uIMapSettings.textScreen.uITextSearchLable, "Template For").getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getInventoryModuleValue("ColumnName"), text);
  }

  async verifyTextNameLabelIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.textScreen.uITextNameLabel.isDisplayed());
  }

  async verifyTemplateForLabelIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.textScreen.uITemplateForLabel.isDisplayed());
  }

  async verifySearchWordsLabelIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.textScreen.uISearchWordsLabel.isDisplayed());
  }

  async verifyIncludeInactiveLabelIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.textScreen.uIIncludeInactiveLabel.isDisplayed());
  }

  async verifyDescriptionLabelIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.textScreen.uIDescriptionLabel.isDisplayed());
  }

  async verifyJurisLabelIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.textScreen.uIJurisLabel.isDisplayed());
  }

  async clickExcelIcon(): Promise<void> {
    // uIMapSettings.textScreen.uIExcelIcon.click();
  }

  async getGridTableTextNameColumnValues(): Promise<string[]> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.textScreen.uITextResultTable, "Text Name");
    // System.out.println(gridTableColumnValues);
    // return gridTableColumnValues;
  }

  async verifyColumnValueIsPresentInExcel(coulmnvaluesByColumnName: string[]): Promise<void> {
    // Playback.controlReadyThreadWait();
    // verify.ExpectedValueIsTrue(
    // coulmnvaluesByColumnName.contains(BaseData.getSettingsModuleValue("ColumnValue")));
  }

  async verifyAtSearchWordsLength(): Promise<void> {
    // int length = uIMapSettings.textScreen.uISearchWordsEdit.getAttribute("value").length();
    // verify.ExpectedIntergerValueIsEqualToActual(Integer.parseInt(BaseData.getSettingsModuleValue("Length")),length);
  }

  async checkIncludeInactiveCheckBox(): Promise<void> {
    // uIMapSettings.textScreen.uIIncludeInactiveCheckBox.click();
  }

  async verifyAtInactiveRecordInGridByTextName(i: number): Promise<void> {
    // String cssValue = objectIdentification.manualIdentify.getGridRowByCellInnerText(uIMapSettings.textScreen.uITextResultTable,
    // BaseData.getSettingsModuleValue("TextName"+i)).getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Color"), cssValue);
  }

}

export class TextEntryPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly saveandCloseButton: Locator;
  readonly resetButton: Locator;
  readonly deleteButton: Locator;
  readonly subjectTab: Locator;
  readonly templatesForTab: Locator;
  readonly reportsThatUseThisTextTab: Locator;
  readonly attachmentTab: Locator;
  readonly textNameEdit: Locator;
  readonly statusBar: Locator;
  readonly productHelpIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdSave');
    this.saveandCloseButton = page.locator('#cmdSaveNClose');
    this.resetButton = page.locator('#cmdRefresh');
    this.deleteButton = page.locator('#cmdDelete');
    this.subjectTab = page.locator("(//span[contains(text(),\'Subject\')])");
    this.templatesForTab = page.locator("(//span[contains(text(),\'Templates For\')])");
    this.reportsThatUseThisTextTab = page.locator("(//span[contains(text(),\'Reports that Use this Text\')])");
    this.attachmentTab = page.locator("(//span[contains(text(),\'Attachment\')])");
    this.textNameEdit = page.locator('#txtName');
    this.statusBar = page.locator("//td[@class=\'statusBar\']/b");
    this.productHelpIcon = page.locator('#divKPIHelp');
  }

  async clickSave(): Promise<void> {
    // uIMapSettings.textEntry.uISaveButton.click();
  }

  async saveScreen(): Promise<void> {
    // uIMapSettings.textEntry.uISaveButton.click();
    // popup.confirm.yes();
    // Playback.pageLoadThreadWait();
    // Playback.pageLoadThreadWait();
  }

  async close(): Promise<void> {
    // uIMapSettings.textEntry.driver.close();
  }

  async verifyRequiredAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1018) Required Entries are Missing");
  }

  async verifyAttachmentTabEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.textEntry.uIAttachmentTab.isEnabled(),
    // "Verify attachment Tab enabled");
  }

  async clickAllTabs(): Promise<void> {
    // uIMapSettings.textEntry.uISubjectTab.click();
    // uIMapSettings.textEntry.uIAttachmentTab.click();
    // uIMapSettings.textEntry.uITemplatesForTab.click();
    // uIMapSettings.textEntry.uIReportsThatUseThisTextTab.click();
  }

  async clickSubjectTab(): Promise<void> {
    // uIMapSettings.textEntry.uISubjectTab.click();
    // Playback.controlReadyThreadWait();
  }

  async clickTemplatesForTab(): Promise<void> {
    // uIMapSettings.textEntry.uITemplatesForTab.click();
    // Playback.controlReadyThreadWait();
  }

  async clickReportsThatUseThisTextTab(): Promise<void> {
    // uIMapSettings.textEntry.uIReportsThatUseThisTextTab.click();
    // Playback.controlReadyThreadWait();
  }

  async clickDeleteIcon(): Promise<void> {
    // uIMapSettings.textEntry.uIDeleteButton.click();
  }

  async verifyDeleteConfirmMessage(): Promise<void> {
    // if (Playback.browserType == "Chrome") {
    // Playback.driver.switchTo().alert().accept();
    // } else {
    // popup.confirm.yesWithExpectedMessage("(4) Do you really want to delete?");
  }

  async enterAtTextName(): Promise<void> {
    // uIMapSettings.textEntry.uITextNameEdit.sendKeys(BaseData.getSettingsModuleValue("TextName"));
  }

  async enterTextName(): Promise<void> {
    // uIMapSettings.textEntry.uITextNameEdit.sendKeys(Randomized.randomAlphanumeric(20));
  }

  async verifyAdditionSuccessfulStatusMessage(): Promise<void> {
    // String text = uIMapSettings.textEntry.uIStatusBar.getText();
    // verify.ExpectedPropertyValueIsEqual(text, "1002 - Addition Successful");
  }

  async clickProductHelpIcon(): Promise<void> {
    // uIMapSettings.textEntry.uIProductHelpIcon.click();
  }

  async verifyUserNamePasswordDomainIncorrectAckPopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("The user name or password or domain name is incorrect");
  }

  async verify1785PleaseEnterValuesAcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage(
    // "1785 - Please enter values for system parameters 261, 262, and 263 to proceed further");
  }

}

export class JurisPage {
  readonly page: Page;
  readonly jurisDropdown: Locator;
  readonly jurisNameEdit: Locator;
  readonly jurisPoliceDepartmentNameEdit: Locator;
  readonly jurisFireDepartmentNameEdit: Locator;
  readonly jurisSaveButton: Locator;
  readonly jurisSaveNcloseButton: Locator;
  readonly addressTab: Locator;
  readonly updateSuccessfulLabel: Locator;
  readonly updateSuccessfulLabelFire: Locator;
  readonly sortOrderEdit: Locator;
  readonly policeTab: Locator;
  readonly aliasEdit: Locator;
  readonly logoTab: Locator;
  readonly reportHeaderFooterTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.jurisDropdown = page.locator('#lstJuris');
    this.jurisNameEdit = page.locator('#txtName');
    this.jurisPoliceDepartmentNameEdit = page.locator('#txtDepartmentName');
    this.jurisFireDepartmentNameEdit = page.locator('#txtFireDepartmentName');
    this.jurisSaveButton = page.locator('#cmdSave');
    this.jurisSaveNcloseButton = page.locator('#cmdSaveNClose');
    this.addressTab = page.locator("//span[contains(text(),\'Addresses\')]");
    this.updateSuccessfulLabel = page.locator("//td[@class = \'status\']/b");
    this.updateSuccessfulLabelFire = page.locator("//td[@class = \'statusBar\']/b");
    this.sortOrderEdit = page.locator('#txtPoliceSeqNo');
    this.policeTab = page.locator("//span[text()=\'Police\']");
    this.aliasEdit = page.locator('#txtAlias');
    this.logoTab = page.locator("//span[contains(text(),\'Logo\')]");
    this.reportHeaderFooterTab = page.locator("//span[contains(text(),\'Report Header & Footer\')]");
  }

  async selectAtJuris(): Promise<void> {
    // uIMapSettings.juris.uIJurisDropdown.sendKeys(BaseData.getSettingsModuleValue("Juris"));
  }

  async enterAtJurisName(): Promise<void> {
    // uIMapSettings.juris.uIJurisNameEdit.click();
    // uIMapSettings.juris.uIJurisNameEdit.clear();
    // uIMapSettings.juris.uIJurisNameEdit.sendKeys(BaseData.getSettingsModuleValue("Juris"));
  }

  async enterAtJurisPoliceDepartmentName(): Promise<void> {
    // uIMapSettings.juris.uIJurisPoliceDepartmentNameEdit.sendKeys(BaseData.getSettingsModuleValue(""));
  }

  async enterAtJurisFireDepartmentName(): Promise<void> {
    // uIMapSettings.juris.uIJurisFireDepartmentNameEdit.sendKeys(BaseData.getSettingsModuleValue(""));
  }

  async clickSaveButton(): Promise<void> {
    // uIMapSettings.juris.uIJurisSaveButton.click();
  }

  async clickSaveNcloseButton(): Promise<void> {
    // uIMapSettings.juris.uIJurisSaveNcloseButton.click();
  }

  async navigateToSubAgnecyTab(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyTab.uINavigateToSubAgencyTab.click();
  }

  async navigateToSubAgnecyDetailsTab(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.uINavigateToSubAgencyDetailsTab.click();
  }

  async saveButton(): Promise<void> {
    // uIMapSettings.juris.uIJurisSaveButton.click();
    // popup.confirm.yes();
  }

  async saveNcloseButton(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapSettings.juris.uIJurisSaveNcloseButton.click();
    // popup.confirm.yes();
  }

  async clickAddressTab(): Promise<void> {
    // uIMapSettings.juris.uIAddressTab.click();
  }

  async verifyUpdateSuccessfulMessage(): Promise<void> {
    // try {
    // verify.ExpectedValueIsTrue(
    // uIMapSettings.juris.uIUpdateSuccessfulLabel.getText().contains("1003 - Update Successful"));
    // } catch (AssertionError e) {
    // verify.ExpectedValueIsTrue(
    // uIMapSettings.juris.uIUpdateSuccessfulLabel.getText().contains("1003 - Update successful"));
  }

  async verifyUpdateSuccessfulMessageFire(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapSettings.juris.uIUpdateSuccessfulLabelFire.getText().contains("1003 - Update successful"));
  }

  async enterAtSortOrder(): Promise<void> {
    // uIMapSettings.juris.uISortOrderEdit.sendKeys(BaseData.getSettingsModuleValue("SortOrder"));
  }

  async verifyJurisListedBasedOnSortOrder(): Promise<void> {
    // List<WebElement> jurisList = objectIdentification.manualIdentify
    // .getDropDownOptionsElements(uIMapSettings.juris.uIJurisDropdown);
    // int i = 0;
    // int sort = Integer.parseInt(BaseData.getSettingsModuleValue("SortOrder"));
    // for (WebElement jury : jurisList) {
    // i++;
    // System.out.println(jury.getText());
    // if (i == sort + 1) {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Juris"), jury.getText());
  }

  async clearSortOrder(): Promise<void> {
    // uIMapSettings.juris.uISortOrderEdit.clear();
  }

  async verifyPxListedAsFirst(): Promise<void> {
    // List<WebElement> jurisList = objectIdentification.manualIdentify
    // .getDropDownOptionsElements(uIMapSettings.juris.uIJurisDropdown);
    // int i = 0;
    // for (WebElement jury : jurisList) {
    // i++;
    // System.out.println(jury.getText());
    // if ((i == 2) && (jury.getText().equalsIgnoreCase("PX - ProPhoenix")))
    // verify.ExpectedPropertyValueIsEqual("PX - ProPhoenix", jury.getText());
  }

  async enterAtAlias(): Promise<void> {
    // uIMapSettings.juris.uIAliasEdit.click();
    // uIMapSettings.juris.uIAliasEdit.clear();
    // uIMapSettings.juris.uIAliasEdit.sendKeys(BaseData.getSettingsModuleValue("Alias"));
  }

  async clickPoliceTab(): Promise<void> {
    // uIMapSettings.juris.uIPoliceTab.click();
  }

}

export class PoliceTabPage {
  readonly page: Page;
  readonly oRIEdit: Locator;
  readonly countyNameEdit: Locator;
  readonly addressEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.oRIEdit = page.locator('#tabJuris_tmpl0_ctrlUsrPoliceOrFire_lupORINo_CodeValue');
    this.countyNameEdit = page.locator('#tabJuris_tmpl0_ctrlUsrPoliceOrFire_txtCountyName');
    this.addressEdit = page.locator('#tabJuris_tmpl0_ctrlUsrPoliceOrFire_txtCountyName');
  }

  async enterAtORI(): Promise<void> {
    // uIMapSettings.juris.policeTab.uIORIEdit.click();
    // uIMapSettings.juris.policeTab.uIORIEdit.clear();
    // uIMapSettings.juris.policeTab.uIORIEdit.sendKeys(BaseData.getSettingsModuleValue("ORI"));
    // uIMapSettings.juris.policeTab.uIORIEdit.sendKeys(Keys.TAB);
  }

  async clearORI(): Promise<void> {
    // uIMapSettings.juris.policeTab.uIORIEdit.click();
    // uIMapSettings.juris.policeTab.uIORIEdit.clear();
    // uIMapSettings.juris.policeTab.uIORIEdit.sendKeys(Keys.TAB);
  }

  async enterAtCountyName(): Promise<void> {
    // uIMapSettings.juris.policeTab.uICountyNameEdit.click();
    // uIMapSettings.juris.policeTab.uICountyNameEdit.clear();
    // uIMapSettings.juris.policeTab.uICountyNameEdit.sendKeys(BaseData.getSettingsModuleValue("CountyName"));
    // uIMapSettings.juris.policeTab.uICountyNameEdit.sendKeys(Keys.TAB);
  }

  async enterAtAddress(): Promise<void> {
    // uIMapSettings.juris.policeTab.uIAddressEdit.click();
    // uIMapSettings.juris.policeTab.uIAddressEdit.clear();
    // uIMapSettings.juris.policeTab.uIAddressEdit.sendKeys(BaseData.getSettingsModuleValue("Address"));
    // uIMapSettings.juris.policeTab.uIAddressEdit.sendKeys(Keys.TAB);
  }

  async clickLogoTab(): Promise<void> {
    // uIMapSettings.juris.uILogoTab.click();
  }

}

export class LogoTabPage {
  readonly page: Page;
  readonly initalReportPictureField: Locator;
  readonly reportHeaderDepartmentField: Locator;
  readonly reportHeaderCityPictureField: Locator;
  readonly iDCardPictureField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.initalReportPictureField = page.locator('#tabJuris_tmpl3_ctrlUsrLogo_imgInitialRpt');
    this.reportHeaderDepartmentField = page.locator('#tabJuris_tmpl3_ctrlUsrLogo_imgRptHeaderDpt');
    this.reportHeaderCityPictureField = page.locator('#tabJuris_tmpl3_ctrlUsrLogo_imgRptHeaderCity');
    this.iDCardPictureField = page.locator('#tabJuris_tmpl3_ctrlUsrLogo_imgIDCardLogo');
  }

  async verifyInitalReportPictureFieldIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.juris.logoTab.uIInitalReportPictureField.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verifyReportHeaderDepartmentPictureFieldIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.juris.logoTab.uIReportHeaderDepartmentField.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verifyReportHeaderCityPictureFieldIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.juris.logoTab.uIReportHeaderCityPictureField.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verifyIDCardPictureFieldIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.juris.logoTab.uIIDCardPictureField.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async clickReportHeaderFooterTab(): Promise<void> {
    // uIMapSettings.juris.uIReportHeaderFooterTab.click();
  }

}

export class ReportHeaderFooterPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickReportHeaderField(): Promise<void> {
    // uIMapSettings.juris.reportHeaderFooterTab.uIReportHeaderField.click();
  }

  async clickReportFooterField(): Promise<void> {
    // uIMapSettings.juris.reportHeaderFooterTab.uIReportReportFooterField.click();
  }

  async verifyProsecutorsOfficeSealDeleteIconIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.juris.reportHeaderFooterTab.uIProsecutorsOfficeSealDeleteIcon
    // .isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async clickProsecutorsOfficeSealDeleteIcon(): Promise<void> {
    // uIMapSettings.juris.reportHeaderFooterTab.uIProsecutorsOfficeSealDeleteIcon.click();
  }

  async verify6071ConfirmPopup(): Promise<void> {
    // popup.confirm.yesWithExpectedMessage("(6071)   Do You Really Want To 'Delete'?");
  }

}

export class JurisSubAgencyTabPage {
  readonly page: Page;
  readonly navigateToSubAgencyTab: Locator;
  readonly subAgencyCodeEdit: Locator;
  readonly subAgencyNameEdit: Locator;
  readonly inactiveCheckBox: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly subAgencyGridTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigateToSubAgencyTab = page.locator("//div[@id=\'tabJuris\'] //span[contains(text(),\'Sub Agency\')]");
    this.subAgencyCodeEdit = page.locator('#tabJuris_tmpl7_ctrlusrSubAgency_txtSubAgencyCode');
    this.subAgencyNameEdit = page.locator('#tabJuris_tmpl7_ctrlusrSubAgency_txtSubAgencyDesc');
    this.inactiveCheckBox = page.locator('#tabJuris_tmpl7_ctrlusrSubAgency_chkIsActive');
    this.addButton = page.locator('#tabJuris_tmpl7_ctrlusrSubAgency_cmdAdd');
    this.clearButton = page.locator('#tabJuris_tmpl7_ctrlusrSubAgency_cmdClear');
    this.subAgencyGridTable = page.locator('#tabJuris_tmpl7_ctrlusrSubAgency_grdSubAgency');
  }

  async enterAtSubAgencyCode(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyTab.uISubAgencyCodeEdit
    // .sendKeys(BaseData.getSettingsModuleValue("SubAgencyCode"));
  }

  async enterAtSubAgencyName(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyTab.uISubAgencyNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("SubAgencyName"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyTab.uIAddButton.click();
  }

  async clickClearButton(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyTab.uIClearButton.click();
  }

  async selectRecordfromGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.juris.jurisSubAgencyTab.uISubAgencyGridTable, "Milwaukee Co Jail");
  }

  async selectInactiveCheckBox(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyTab.uIInactiveCheckBox.click();
  }

}

export class JurisSubAgencyDetailsTabPage {
  readonly page: Page;
  readonly navigateToSubAgencyDetailsTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigateToSubAgencyDetailsTab = page.locator("//div[@id=\'tabJuris\'] //span[contains(text(),\'Sub Agency Details\')]");
  }

  async navigateToConactDetailsTab(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uINavigateToContactDetailsTab
    // .click();
  }

  async navigateToLogoTab(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsLogoTab.uINavigateToLogoTab.click();
  }

  async navigateToAddressTab(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsAddressTab.uINavigateToAddressTab.click();
  }

  async navigateToReportHeaderFooterTab(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsReportHeaderFooterTab.uINavigateToReportHeaderFooterTab
    // .click();
  }

}

export class JurisAddressTabPage {
  readonly page: Page;
  readonly addressTypeDropdown: Locator;
  readonly addressEdit: Locator;
  readonly addButton: Locator;
  readonly jurisAddressTabTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addressTypeDropdown = page.locator('#tabJuris_tmpl5_usrJurisAddress1_cddAddressType_DropDown');
    this.addressEdit = page.locator('#tabJuris_tmpl5_usrJurisAddress1_txtAddress');
    this.addButton = page.locator('#tabJuris_tmpl5_usrJurisAddress1_imgAdd');
    this.jurisAddressTabTable = page.locator('#tabJuris_tmpl5_usrJurisAddress1_grdJurisAddress');
  }

  async selectAtAddressType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.juris.jusrisAddressTab.uIAddressTypeDropdown,
    // BaseData.getSettingsModuleValue("AddressType"));
    // uIMapSettings.juris.jusrisAddressTab.uIAddressTypeDropdown.sendKeys(Keys.TAB);
  }

  async enterAtAddress(): Promise<void> {
    // uIMapSettings.juris.jusrisAddressTab.uIAddressEdit.sendKeys(BaseData.getSettingsModuleValue("Address"));
    // uIMapSettings.juris.jusrisAddressTab.uIAddressEdit.sendKeys(Keys.TAB);
  }

  async clickAddBUtton(): Promise<void> {
    // uIMapSettings.juris.jusrisAddressTab.uIAddButton.click();
  }

  async verifyAtAddressInGrid(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapSettings.juris.jusrisAddressTab.uIJurisAddressTabTable,
    // BaseData.getSettingsModuleValue("Address"));
    // verify.ExpectedValueIsTrue(gridCell.getText().contains(BaseData.getSettingsModuleValue("Address")));
  }

}

export class JurisSADetailsContactDetailsTabPage {
  readonly page: Page;
  readonly navigateToContactDetailsTab: Locator;
  readonly subAgencyDropdown: Locator;
  readonly countyNameEdit: Locator;
  readonly addressEdit: Locator;
  readonly townEdit: Locator;
  readonly stateDropdown: Locator;
  readonly zipCodeEdit: Locator;
  readonly contactPFEdit: Locator;
  readonly oRINoEdit: Locator;
  readonly contactSuffixDrodown: Locator;
  readonly contactLastNameEdit: Locator;
  readonly contactFirstNameEdit: Locator;
  readonly contactMiddleNameEdit: Locator;
  readonly phoneNoEdit: Locator;
  readonly mobileNoEdit: Locator;
  readonly faxNoEdit: Locator;
  readonly defaultZipEdit: Locator;
  readonly firstEMailEdit: Locator;
  readonly secondEMailEdit: Locator;
  readonly defaultAreaEdit: Locator;
  readonly remarksEdit: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly contactDetailsGridTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigateToContactDetailsTab = page.locator("//div[@id=\'tabJuris\'] //span[contains(text(),\'Contact Details\')]");
    this.subAgencyDropdown = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_cddSubAgency_DropDown');
    this.countyNameEdit = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_txtCountyName');
    this.addressEdit = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_txtAddress1');
    this.townEdit = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_cstCSZ_City');
    this.stateDropdown = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_cstCSZ_State_DropDown');
    this.zipCodeEdit = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_cstCSZ_Zip');
    this.contactPFEdit = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_lupContactPFID_CodeValue');
    this.oRINoEdit = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_lupORINo_CodeValue');
    this.contactSuffixDrodown = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_cstName_Suffix_DropDown');
    this.contactLastNameEdit = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_cstName_LastName');
    this.contactFirstNameEdit = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_cstName_FirstName');
    this.contactMiddleNameEdit = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_cstName_MiddleName');
    this.phoneNoEdit = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_mskPhoneNo');
    this.mobileNoEdit = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_mskMobileNo');
    this.faxNoEdit = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_mskFaxNo');
    this.defaultZipEdit = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_lupDefaultZip_CodeValue');
    this.firstEMailEdit = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_txtFirstEMail');
    this.secondEMailEdit = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_txtSecondEmail');
    this.defaultAreaEdit = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_txtDefaultArea');
    this.remarksEdit = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_txtRemarks');
    this.addButton = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_imgAdd');
    this.clearButton = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_imgClear');
    this.contactDetailsGridTable = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl0_usrSaContactDetails_grdSAContactDtls');
  }

  async selectAtSubAgency(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uISubAgencyDropdown
    // .sendKeys(BaseData.getSettingsModuleValue("SubAgency"));
  }

  async enterAtCountyName(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uICountyNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("CountyName"));
  }

  async enterAtAddress(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uIAddressEdit
    // .sendKeys(BaseData.getSettingsModuleValue("Address"));
  }

  async enterAtCSZ(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uITownEdit
    // .sendKeys(BaseData.getSettingsModuleValue("Town"));
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uIStateDropdown
    // .sendKeys(BaseData.getSettingsModuleValue("State"));
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uIZipCodeEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ZIP"));
  }

  async enterAtContactPF(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uIContactPFEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ContactPF"));
  }

  async enterAtORINo(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uIORINoEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ORINo"));
  }

  async enterAtContactName(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uIContactLastNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ContactLastname"));
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uIContactFirstNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ContactFirstname"));
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uIContactMiddleNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ContactMiddlename"));
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uIContactSuffixDrodown
    // .sendKeys(BaseData.getSettingsModuleValue("ContactSuffixname"));
  }

  async enterAtPhoneNo(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uIPhoneNoEdit
    // .sendKeys(BaseData.getSettingsModuleValue("PhoneNo"));
  }

  async enterAtMobileNo(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uIMobileNoEdit
    // .sendKeys(BaseData.getSettingsModuleValue("MobileNo"));
  }

  async enterAtFaxNo(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uIFaxNoEdit
    // .sendKeys(BaseData.getSettingsModuleValue("FaxNo"));
  }

  async enterAtDefaultZip(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uIDefaultZipEdit
    // .sendKeys(BaseData.getSettingsModuleValue("DefaultZip"));
  }

  async enterAtFirstEMail(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uIFirstEMailEdit
    // .sendKeys(BaseData.getSettingsModuleValue("FirstE-Mail"));
  }

  async enterAtSecondEMail(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uISecondEMailEdit
    // .sendKeys(BaseData.getSettingsModuleValue("SecondE-Mail"));
  }

  async enterAtDefaultArea(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uIDefaultAreaEdit
    // .sendKeys(BaseData.getSettingsModuleValue("DefaultArea"));
  }

  async enterAtRemarks(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uIRemarksEdit
    // .sendKeys(BaseData.getSettingsModuleValue("Remarks"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uIAddButton.click();
  }

  async clickClearButton(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uIClearButton.click();
  }

  async selectRecordfromGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsContactDetailsTab.uIContactDetailsGridTable,
    // "MCJ - Milwaukee Co Jail");
  }

}

export class JurisSADetailsLogoTabPage {
  readonly page: Page;
  readonly navigateToLogoTab: Locator;
  readonly subAgencyDropdown: Locator;
  readonly selectButton: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly logoGridTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigateToLogoTab = page.locator("//div[@id=\'tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails\'] //span[contains(text(),\'Logo\')]");
    this.subAgencyDropdown = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl1_usrSaLogo_cddSubAgency_DropDown');
    this.selectButton = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl1_usrSaLogo_RadUploadLogoTextBox0');
    this.addButton = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl1_usrSaLogo_imgAdd');
    this.clearButton = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl1_usrSaLogo_imgClear');
    this.logoGridTable = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl1_usrSaLogo_grdSALogo');
  }

  async selectAtSubAgency(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsLogoTab.uISubAgencyDropdown
    // .sendKeys(BaseData.getSettingsModuleValue("SubAgency"));
  }

  async clickSelectButton(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsLogoTab.uISelectButton.click();
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsLogoTab.uIAddButton.click();
  }

  async clickClearButton(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsLogoTab.uIClearButton.click();
  }

  async selectRecordfromGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsLogoTab.uILogoGridTable,
    // "MCJ - Milwaukee Co Jail");
  }

}

export class JurisSADetailsAddressTabPage {
  readonly page: Page;
  readonly navigateToAddressTab: Locator;
  readonly subAgencyDropdown: Locator;
  readonly addressTypeDropdown: Locator;
  readonly addressEdit: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly addressGridTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigateToAddressTab = page.locator("//div[@id=\'tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails\'] //span[contains(text(),\'Address\')]");
    this.subAgencyDropdown = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl2_usrSaAddress_cddSubAgency_DropDown');
    this.addressTypeDropdown = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl2_usrSaAddress_cddAddressType_DropDown');
    this.addressEdit = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl2_usrSaAddress_txtAddress');
    this.addButton = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl2_usrSaAddress_imgAdd');
    this.clearButton = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl2_usrSaAddress_imgClear');
    this.addressGridTable = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl2_usrSaAddress_grdSaJurisAddress');
  }

  async selectAtSubAgency(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsAddressTab.uISubAgencyDropdown
    // .sendKeys(BaseData.getSettingsModuleValue("SubAgency"));
  }

  async selectAtAddressType(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsAddressTab.uIAddressTypeDropdown
    // .sendKeys(BaseData.getSettingsModuleValue("AddressType"));
  }

  async enterAtAddress(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsAddressTab.uIAddressEdit
    // .sendKeys(BaseData.getSettingsModuleValue("Address"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsAddressTab.uIAddButton.click();
  }

  async clickClearButton(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsAddressTab.uIClearButton.click();
  }

  async selectRecordfromGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsAddressTab.uIAddressGridTable,
    // "MCJ - Milwaukee Co Jail");
  }

}

export class JurisSADetailsReportHeaderFooterTabPage {
  readonly page: Page;
  readonly navigateToReportHeaderFooterTab: Locator;
  readonly subAgencyDropdown: Locator;
  readonly reportHeaderselectButton: Locator;
  readonly reportFooterselectButton: Locator;
  readonly pageFooterselectButton: Locator;
  readonly pageHeaderselectButton: Locator;
  readonly waterMarkselectButton: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly reportHeaderFooterGridTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigateToReportHeaderFooterTab = page.locator("//div[@id=\'tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails\'] //span[contains(text(),\'Report Header & Footer\')]");
    this.subAgencyDropdown = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl3_usrSaReport_cddSubAgency_DropDown');
    this.reportHeaderselectButton = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl3_usrSaReport_RadRptHeaderTextBox0');
    this.reportFooterselectButton = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl3_usrSaReport_RadRptFooterTextBox0');
    this.pageFooterselectButton = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl3_usrSaReport_RadRptPgFooterTextBox0');
    this.pageHeaderselectButton = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl3_usrSaReport_RadRptPgHeaderTextBox0');
    this.waterMarkselectButton = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl3_usrSaReport_RadRptWaterMrkImgTextBox0');
    this.addButton = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl3_usrSaReport_imgAdd');
    this.clearButton = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl3_usrSaReport_imgClear');
    this.reportHeaderFooterGridTable = page.locator('#tabJuris_tmpl8_ctrlusrSubAgencyDetails_usrSagDetails_tmpl3_usrSaReport_grdSAReport');
  }

  async selectAtSubAgency(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsReportHeaderFooterTab.uISubAgencyDropdown
    // .sendKeys(BaseData.getSettingsModuleValue("SubAgency"));
  }

  async clickReportHeaderButton(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsReportHeaderFooterTab.uIReportHeaderselectButton
    // .click();
  }

  async clickReportFooterButton(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsReportHeaderFooterTab.uIReportFooterselectButton
    // .click();
  }

  async clickPageHeaderButton(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsReportHeaderFooterTab.uIPageHeaderselectButton
    // .click();
  }

  async clickPageFooterButton(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsReportHeaderFooterTab.uIPageFooterselectButton
    // .click();
  }

  async clickWatermarkButton(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsReportHeaderFooterTab.uIWaterMarkselectButton
    // .click();
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsReportHeaderFooterTab.uIAddButton.click();
  }

  async clickClearButton(): Promise<void> {
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsReportHeaderFooterTab.uIClearButton.click();
  }

  async selectRecordfromGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.juris.jurisSubAgencyDetailsTab.jurisSADetailsReportHeaderFooterTab.uIReportHeaderFooterGridTable,
    // "MCJ - Milwaukee Co Jail");
  }

}

export class TextSubjectTabPage {
  readonly page: Page;
  readonly textNameEdit: Locator;
  readonly remarksEdit: Locator;
  readonly searchWordsEdit: Locator;
  readonly expireDateEdit: Locator;
  readonly reportKeyCodeComboBox: Locator;
  readonly stateComboBox: Locator;
  readonly subjectRichTabTextEdit: Locator;
  readonly addIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.textNameEdit = page.locator('#tabKPIText_tmpl0_ctrlUsrKPITxtEdit_txtName');
    this.remarksEdit = page.locator('#tabKPIText_tmpl0_ctrlUsrKPITxtEdit_txtDescription');
    this.searchWordsEdit = page.locator('#tabKPIText_tmpl0_ctrlUsrKPITxtEdit_txtSearchWords');
    this.expireDateEdit = page.locator('#tabKPIText_tmpl0_ctrlUsrKPITxtEdit_dttExpDttm_KPIDttmCtrl');
    this.reportKeyCodeComboBox = page.locator('#tabKPIText_tmpl0_ctrlUsrKPITxtEdit_cddRptKey_DropDown');
    this.stateComboBox = page.locator('#tabKPIText_tmpl0_ctrlUsrKPITxtEdit_cddState_DropDown');
    this.subjectRichTabTextEdit = page.locator('#tabKPIText_tmpl0_ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
    this.addIcon = page.locator('#tabKPIText_tmpl0_ctrlUsrKPITxtEdit_imgAdd');
  }

  async enterAtTextName(): Promise<void> {
    // uIMapSettings.textEntry.textSubjectTab.uITextNameEdit.sendKeys(BaseData.getSettingsModuleValue("TextName"));
  }

  async enterAtRemarks(): Promise<void> {
    // uIMapSettings.textEntry.textSubjectTab.uIRemarksEdit.sendKeys(BaseData.getSettingsModuleValue("Remarks"));
  }

  async enterSearchWords(): Promise<void> {
    // uIMapSettings.textEntry.textSubjectTab.uISearchWordsEdit.sendKeys("Automation");
  }

  async enterRichText(): Promise<void> {
    // Playback.waitForPageLoad();
    // uIMapSettings.textEntry.textSubjectTab.uISubjectRichTabTextEdit.click();
    // Playback.waitForControlReady();
    // Actions actions = new Actions(Playback.driver);
    // actions.moveToElement(uIMapSettings.textEntry.textSubjectTab.uISubjectRichTabTextEdit).click();
    // actions.sendKeys(Randomized.randomAlphanumericSpecialCharsString(500)).build().perform();
    // Playback.waitForControlReady();
  }

  async verifyTextNameAsBolo(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("BOLO",
    // uIMapSettings.textEntry.textSubjectTab.uITextNameEdit.getAttribute("value"));
  }

  async updateExpiryDateAsFutureYear(): Promise<void> {
    // uIMapSettings.textEntry.textSubjectTab.uIExpireDateEdit.clear();
    // uIMapSettings.textEntry.textSubjectTab.uIExpireDateEdit.click();
    // uIMapSettings.textEntry.textSubjectTab.uIExpireDateEdit.sendKeys(Randomized.getFutureDateByMonth(20));
    // uIMapSettings.textEntry.textSubjectTab.uIExpireDateEdit.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async enterAtRichTextForRecurringViolations(): Promise<void> {
    // Playback.waitForPageLoad();
    // uIMapSettings.textEntry.textSubjectTab.uISubjectRichTabTextEdit.click();
    // Playback.waitForControlReady();
    // Actions actions = new Actions(Playback.driver);
    // actions.moveToElement(uIMapSettings.textEntry.textSubjectTab.uISubjectRichTabTextEdit).click();
    // actions.sendKeys(Keys.HOME);
    // actions.sendKeys(Keys.PAGE_UP);
    // actions.sendKeys(BaseData.getTestContextData("RecurringViolations")).build().perform();
    // Playback.waitForControlReady();
  }

  async enterAtRichTextForInspectionAppealsTo(): Promise<void> {
    // Playback.waitForPageLoad();
    // uIMapSettings.textEntry.textSubjectTab.uISubjectRichTabTextEdit.click();
    // Playback.waitForControlReady();
    // Actions actions = new Actions(Playback.driver);
    // actions.moveToElement(uIMapSettings.textEntry.textSubjectTab.uISubjectRichTabTextEdit).click();
    // actions.sendKeys(Keys.HOME);
    // actions.sendKeys(Keys.PAGE_UP);
    // actions.sendKeys(BaseData.getTestContextData("InspectionAppealsTo")).build().perform();
    // Playback.waitForControlReady();
  }

}

export class TemplateForTabPage {
  readonly page: Page;
  readonly templateForTabResultTable: Locator;
  readonly templateForCodeEdit: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly bccEdit: Locator;
  readonly subjectEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.templateForTabResultTable = page.locator('#tabKPIText_tmpl2_usrTxtTemplate1_grdTxtRepository');
    this.templateForCodeEdit = page.locator('#tabKPIText_tmpl2_usrTxtTemplate1_lupReportID_CodeValue');
    this.addButton = page.locator('#tabKPIText_tmpl2_usrTxtTemplate1_imgAdd');
    this.clearButton = page.locator('#tabKPIText_tmpl2_usrTxtTemplate1_imgClear');
    this.bccEdit = page.locator('#tabKPIText_tmpl2_usrTxtTemplate1_txtbcc');
    this.subjectEdit = page.locator('#tabKPIText_tmpl2_usrTxtTemplate1_txtSubject');
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.textEntry.templateForTab.uIAddButton.click();
  }

  async verifyRequiredAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1018) Required Entries are Missing");
  }

  async enterAtScreenID(): Promise<void> {
    // uIMapSettings.textEntry.templateForTab.uITemplateForCodeEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ScreenID"));
    // uIMapSettings.textEntry.templateForTab.uITemplateForCodeEdit.sendKeys(Keys.TAB);
  }

  async verifyAtScreenID(rowIndex: number): Promise<void> {
    // Playback.controlReadyThreadWait();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ScreenID"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.textEntry.templateForTab.uITemplateForTabResultTable, "Screen ID", rowIndex));
  }

  async verifyAtScreenName(rowIndex: number): Promise<void> {
    // Playback.controlReadyThreadWait();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ScreenName"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.textEntry.templateForTab.uITemplateForTabResultTable, "Screen Name",
    // rowIndex));
  }

}

export class ReportsThatUseThisTextTabPage {
  readonly page: Page;
  readonly reportsTabResultTable: Locator;
  readonly reportNameCodeEdit: Locator;
  readonly reportNameLookupButton: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly seqNoEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.reportsTabResultTable = page.locator('#tabKPIText_tmpl3_usrRptTemplate1_grdRptTemplate');
    this.reportNameCodeEdit = page.locator('#tabKPIText_tmpl3_usrRptTemplate1_lupReportID_CodeValue');
    this.reportNameLookupButton = page.locator('#tabKPIText_tmpl3_usrRptTemplate1_lupReportID_imgBtn');
    this.addButton = page.locator('#tabKPIText_tmpl3_usrRptTemplate1_imgAdd');
    this.clearButton = page.locator('#tabKPIText_tmpl3_usrRptTemplate1_imgClear');
    this.seqNoEdit = page.locator('#tabKPIText_tmpl3_usrRptTemplate1_txtSeqNo');
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.textEntry.reportsThatUseThisTextTab.uIAddButton.click();
  }

  async verifyRequiredAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1018) Required Entries are Missing");
  }

  async enterAtReportName(): Promise<void> {
    // uIMapSettings.textEntry.reportsThatUseThisTextTab.uIReportNameCodeEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ReportName"));
    // uIMapSettings.textEntry.reportsThatUseThisTextTab.uIReportNameCodeEdit.sendKeys(Keys.TAB);
  }

  async verifyAtReportName(rowIndex: number): Promise<void> {
    // Playback.controlReadyThreadWait();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ReportName"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.textEntry.reportsThatUseThisTextTab.uIReportsTabResultTable, "Report Name",
    // rowIndex));
  }

  async selectAtScreenID(): Promise<void> {
    // uIMapSettings.textEntry.reportsThatUseThisTextTab.uIReportNameLookupButton.click();
    // popup.kPICodedLookup.kPIHelpSelect(BaseData.getSettingsModuleValue("ScreenID"));
  }

  async verifyAtScreenID(rowIndex: number): Promise<void> {
    // Playback.controlReadyThreadWait();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ScreenID"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.textEntry.reportsThatUseThisTextTab.uIReportsTabResultTable, "Screen ID",
    // rowIndex));
  }

}

export class DispositionPage {
  readonly page: Page;
  readonly dispositionResultTable: Locator;
  readonly dispositionCodeEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly searchButton: Locator;
  readonly typeComboBox: Locator;
  readonly addNewLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dispositionResultTable = page.locator('#grdDisposition');
    this.dispositionCodeEdit = page.locator('#txtDisposition');
    this.descriptionEdit = page.locator('#txtDescription');
    this.searchButton = page.locator('#cmdSearch');
    this.typeComboBox = page.locator('#cddActCode_DropDown');
    this.addNewLink = page.locator("(//span[contains(text(),\'Add New\')])");
  }

  async clickAddNew(): Promise<void> {
    // uIMapSettings.disposition.uIAddNewLink.click();
    // Playback.controlReadyThreadWait();
  }

  async enterAtDisposition(): Promise<void> {
    // uIMapSettings.disposition.uIDispositionCodeEdit.sendKeys
    // (BaseData.getSettingsModuleValue("Disposition"));
  }

  async selectAtType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.disposition.uITypeComboBox,
    // BaseData.getSettingsModuleValue("Type"));
    // uIMapSettings.disposition.uITypeComboBox.sendKeys(Keys.TAB);
  }

  async clickSearchButton(): Promise<void> {
    // uIMapSettings.disposition.uISearchButton.click();
    // Playback.controlReadyThreadWait();
  }

  async verifyAtDispoationInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue
    // ("Disposition"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.disposition.uIDispositionResultTable,
    // "Disposition", rowIndex));
  }

  async verifyAtTypeInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Type"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.disposition.uIDispositionResultTable, "Type",
    // rowIndex));
  }

  async verifyAtDispositionInGrid(): Promise<void> {
    // // objectIdentification.manualIdentify.SelectContextMenuItemInTheGridRowByUniqueRowValueOnlyForFire
    // // (uIMapSettings.disposition.uIDispositionResultTable,
    // // BaseData.getSettingsModuleValue("Description"), "Disposition", "AUTOTEST");
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.disposition.uIDispositionResultTable,
    // BaseData.getSettingsModuleValue("Description"), "Disposition")
    // .getText().contains(BaseData.getHomeModuleValue("Disposition")));
  }

  async selectAtDispositionInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.disposition.uIDispositionResultTable,
    // BaseData.getSettingsModuleValue("CADDisposition"));
  }

}

export class JobsScreenPage {
  readonly page: Page;
  readonly jobsResultTable: Locator;
  readonly jobNameEdit: Locator;
  readonly jobTypeCombobox: Locator;
  readonly searchButton: Locator;
  readonly addNewLink: Locator;
  readonly runJobButton: Locator;
  readonly inactiveCheckbox: Locator;
  readonly dBNameComboBox: Locator;
  readonly printIcon: Locator;
  readonly excelIcon: Locator;
  readonly screenIDEdit: Locator;
  readonly logLink: Locator;
  readonly jobsLogResultTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.jobsResultTable = page.locator('#grdKPIJobs');
    this.jobNameEdit = page.locator('#txtJobName');
    this.jobTypeCombobox = page.locator('#cddJobType_DropDown');
    this.searchButton = page.locator('#cmdSearch');
    this.addNewLink = page.locator("(//span[contains(text(),\'Add New\')])");
    this.runJobButton = page.locator('#cmdRun');
    this.inactiveCheckbox = page.locator('#chkInactive');
    this.dBNameComboBox = page.locator('#ddlDBName');
    this.printIcon = page.locator("//img[@title=\'Print\']");
    this.excelIcon = page.locator("//img[@title=\'Export to Excel\']");
    this.screenIDEdit = page.locator('#lupRptID_CodeValue');
    this.logLink = page.locator("//span[text()=\'Log\']");
    this.jobsLogResultTable = page.locator('#grdJobLog');
  }

  async clickSearch(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.highlighElement(uIMapSettings.jobsScreen.uISearchButton);
    // uIMapSettings.jobsScreen.uISearchButton.click();
    // Playback.wait(60);
    // Playback.controlReadyThreadWait();
    // Playback.controlReadyThreadWait();
    // Playback.controlReadyThreadWait();
  }

  async enterAtJobName(): Promise<void> {
    // uIMapSettings.jobsScreen.uIJobNameEdit.sendKeys(BaseData.getSettingsModuleValue("JobName"));
  }

  async clickAtJobNameInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText
    // (uIMapSettings.jobsScreen.uIJobsResultTable, BaseData.getSettingsModuleValue
    // ("JobName"));
    // Playback.controlReadyThreadWait();
  }

  async clickAddNew(): Promise<void> {
    // uIMapSettings.jobsScreen.uIAddNewLink.click();
    // Playback.waitForControlReady();
  }

  async clearJobName(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapSettings.jobsScreen.uIJobNameEdit.clear();
  }

  async clickIncludeInactiveCheckBox(): Promise<void> {
    // uIMapSettings.jobsScreen.uIInactiveCheckbox.click();
  }

  async verifyAtJobNameInGrid(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.jobsScreen.uIJobsResultTable, BaseData.getSettingsModuleValue("JobName"));
    // verify.ExpectedValueIsTrue(
    // gridRowByCellInnerText.getText().contains(BaseData.getSettingsModuleValue("JobName")));
  }

  async selectAtJobType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.jobsScreen.uIJobTypeCombobox,
    // BaseData.getSettingsModuleValue("JobType"));
  }

  async selectAtDBName(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.jobsScreen.uIDBNameComboBox,
    // BaseData.getSettingsModuleValue("DBName"));
  }

  async verifyJobNameInGrid(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.jobsScreen.uIJobsResultTable.getText() != null);
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapSettings.jobsScreen.uIPrintIcon.click();
  }

  async clickExcelIcon(): Promise<void> {
    // uIMapSettings.jobsScreen.uIExcelIcon.click();
  }

  async verifyInActiveCheckBoxCheckedInGrid(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapSettings.jobsScreen.uIJobsResultTable, BaseData.getSettingsModuleValue("JobName"), "Inactive");
    // WebElement check = gridCell.findElement(By.tagName("img"));
    // String attribute = check.getAttribute("title");
    // verify.ExpectedPropertyValueIsEqual(attribute, "Checked");
  }

  async verifyInActiveCheckBoxUnCheckedInGrid(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapSettings.jobsScreen.uIJobsResultTable, BaseData.getSettingsModuleValue("JobName"), "Inactive");
    // WebElement check = gridCell.findElement(By.tagName("img"));
    // String attribute = check.getAttribute("title");
    // verify.ExpectedPropertyValueIsEqual(attribute, "Unchecked");
  }

  async getJobNameColumnValues(): Promise<string[]> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.jobsScreen.uIJobsResultTable, BaseData.getSettingsModuleValue("ColumnName"));
    // return gridTableColumnValues;
  }

  async verifyGridCountMoreThanZero(): Promise<void> {
    // int gridTableRowsCount = objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapSettings.jobsScreen.uIJobsResultTable);
    // verify.ExpectedValueIsTrue(gridTableRowsCount != 0, "Grid rows count equals to zero --> ");
  }

  async enterAtJobName(i: number): Promise<void> {
    // uIMapSettings.jobsScreen.uIJobNameEdit.sendKeys(BaseData.getSettingsModuleValue("JobName" + i));
  }

  async selectAtJobType(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.jobEntry.uIJobTypeCombobox,
    // BaseData.getSettingsModuleValue("JobType" + i));
  }

  async verifyAtJobNameInGrid(i: number): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.jobsScreen.uIJobsResultTable, BaseData.getSettingsModuleValue("JobName" + i));
    // verify.ExpectedValueIsTrue(
    // gridRowByCellInnerText.getText().contains(BaseData.getSettingsModuleValue("JobName" + i)));
  }

  async reloadJobsScreen(): Promise<void> {
    // objectIdentification.manualIdentify.reloadScreen("Jobs");
  }

  async enterAtScreenID(i: number): Promise<void> {
    // uIMapSettings.jobsScreen.uIScreenIDEdit.sendKeys(BaseData.getSettingsModuleValue("ScreenID" + i));
    // uIMapSettings.jobsScreen.uIScreenIDEdit.sendKeys(Keys.TAB);
  }

  async verifyAtJobTypeInGrid(i: number): Promise<void> {
    // List<String> JobType = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.jobsScreen.uIJobsResultTable, "Job Type");
    // verify.ExpectedValueIsTrue(JobType.contains(BaseData.getSettingsModuleValue("JobType" + i)));
  }

  async verifyAllJobsIncludeInactiveListedInGrid(): Promise<void> {
    // List<WebElement> checkboxes = uIMapSettings.jobsScreen.uIJobsResultTable
    // .findElements(By.xpath(".//table/tbody/tr/td/img"));
    // for (WebElement checkbox : checkboxes) {
    // if (checkbox.getAttribute("src").contains("checkbox_on.gif")) {
    // verify.ExpectedPropertyValueIsEqual(checkbox.getCssValue("color"), "rgba(128, 128, 128, 1)");
    // } else {
    // verify.ExpectedPropertyValueIsEqual(checkbox.getCssValue("color"), "rgba(0, 0, 0, 1)");
  }

  async clickLogLink(): Promise<void> {
    // uIMapSettings.jobsScreen.uILogLink.click();
  }

  async verifyAtJurisColumnInGrid(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues
    // (uIMapSettings.jobsScreen.uIJobsLogResultTable,BaseData.getSettingsModuleValue("ColumnName"));
    // verify.ExpectedValueIsTrue(gridTableColumnValues.equals(BaseData.getSettingsModuleValue("Juris")));
  }

}

export class JobEntryPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly saveandCloseButton: Locator;
  readonly resetButton: Locator;
  readonly runJobButton: Locator;
  readonly scheduleTab: Locator;
  readonly parameterTab: Locator;
  readonly notificationTab: Locator;
  readonly jobNameEdit: Locator;
  readonly reportIDCodeEdit: Locator;
  readonly jobTypeCombobox: Locator;
  readonly formNameCombobox: Locator;
  readonly inactiveCheckbox: Locator;
  readonly bottomMesssageTextView: Locator;
  readonly statusMessage: Locator;
  readonly reportNameLabel: Locator;
  readonly interfaceDropdown: Locator;
  readonly systemCheckbox: Locator;
  readonly notifyToPFEdit: Locator;
  readonly addButton: Locator;
  readonly notifyEmailEdit: Locator;
  readonly exportDropdown: Locator;
  readonly screenIDLabel: Locator;
  readonly screenIDEdit: Locator;
  readonly reportNameDropdown: Locator;
  readonly customJobNameEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdSave');
    this.saveandCloseButton = page.locator('#cmdSaveNClose');
    this.resetButton = page.locator('#cmdRefresh');
    this.runJobButton = page.locator('#cmdRun');
    this.scheduleTab = page.locator("(//span[contains(text(),\'Schedule\')])");
    this.parameterTab = page.locator("(//span[contains(text(),\'Parameter\')])");
    this.notificationTab = page.locator("(//span[contains(text(),\'Notification\')])");
    this.jobNameEdit = page.locator('#txtJobName');
    this.reportIDCodeEdit = page.locator('#lupRptID_CodeValue');
    this.jobTypeCombobox = page.locator('#cddJobType_DropDown');
    this.formNameCombobox = page.locator('#lstFormName');
    this.inactiveCheckbox = page.locator('#chkInActive');
    this.bottomMesssageTextView = page.locator("//td[@class = \'statusBar\']//b");
    this.statusMessage = page.locator("//td[@class=\'statusBar\']//b");
    this.reportNameLabel = page.locator('#lblFormName');
    this.interfaceDropdown = page.locator('#cddInterface_DropDown');
    this.systemCheckbox = page.locator('#chkSystem');
    this.notifyToPFEdit = page.locator('#tabJobs_tmpl2_UsrJobNotify1_lupNotifyTo_CodeValue');
    this.addButton = page.locator('#tabJobs_tmpl2_UsrJobNotify1_cmdAdd');
    this.notifyEmailEdit = page.locator('#tabJobs_tmpl2_UsrJobNotify1_txtNotifyEmailID');
    this.exportDropdown = page.locator('#cddExport_DropDown');
    this.screenIDLabel = page.locator('#lblReportID');
    this.screenIDEdit = page.locator('#lupRptID_CodeValue');
    this.reportNameDropdown = page.locator('#lstFormName');
    this.customJobNameEdit = page.locator('#txtCustJobName');
  }

  async verifyAtJobName(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("JobName"),
    // uIMapSettings.jobEntry.uIJobNameEdit.getAttribute("value"));
  }

  async clickScheduleTab(): Promise<void> {
    // uIMapSettings.jobEntry.uIScheduleTab.click();
    // Playback.controlReadyThreadWait();
  }

  async enterAtEndDate(): Promise<void> {
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIEndDateEdit.click();
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIEndDateEdit.sendKeys((Keys.CONTROL + "a" + Keys.CONTROL));
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIEndDateEdit.sendKeys(Keys.DELETE);
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIEndDateEdit
    // .sendKeys(BaseData.getSettingsModuleValue("EndDate"));
  }

  async saveScreen(): Promise<void> {
    // uIMapSettings.jobEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async close(): Promise<void> {
    // uIMapSettings.jobEntry.driver.close();
  }

  async verifyAtEndDate(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("EndDate"),
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIEndDateEdit.getAttribute("value"));
  }

  async enterAtJobName(): Promise<void> {
    // uIMapSettings.jobEntry.uIJobNameEdit.sendKeys(BaseData.getSettingsModuleValue("JobName"));
  }

  async selectAtJobType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.jobEntry.uIJobTypeCombobox,
    // BaseData.getSettingsModuleValue("JobType"));
  }

  async enterAtReportID(): Promise<void> {
    // uIMapSettings.jobEntry.uIReportIDCodeEdit.sendKeys(BaseData.getSettingsModuleValue("ReportID"));
    // uIMapSettings.jobEntry.uIReportIDCodeEdit.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async selectAtFormName(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.jobEntry.uIFormNameCombobox,
    // BaseData.getSettingsModuleValue("FormName"));
  }

  async tabStartDate(): Promise<void> {
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIStartDateEdit.click();
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIStartDateEdit.sendKeys(Keys.TAB);
  }

  async clickRecurrenceCheckbox(): Promise<void> {
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIRecurrenceCheckbox.click();
  }

  async enterEveryDaysAs1(): Promise<void> {
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIEveryDaysEdit.sendKeys("1");
  }

  async enterEveryMinutesAs10(): Promise<void> {
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIEveryMinutesEdit.sendKeys("10");
  }

  async clickHourRadiobutton(): Promise<void> {
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIHourRadiobutton.click();
  }

  async clickDailyRadiobutton(): Promise<void> {
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIDailyRadiobutton.click();
  }

  async clickRunJobButton(): Promise<void> {
    // uIMapSettings.jobEntry.uIRunJobButton.click();
  }

  async clickReCalculateCheckbox(): Promise<void> {
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIReCalculateCheckbox.click();
  }

  async clickParameterTab(): Promise<void> {
    // uIMapSettings.jobEntry.uIParameterTab.click();
    // Playback.controlReadyThreadWait();
  }

  async clickNotificationTab(): Promise<void> {
    // uIMapSettings.jobEntry.uINotificationTab.click();
    // Playback.controlReadyThreadWait();
  }

  async verifyInactivePopupAcknowledgeMessage(): Promise<void> {
    // if (Playback.browserType.contains("Chrome")) {
    // popup.acknowledge
    // .okWithExpectedMessage("The selected report is inactive. Please select an active report");
    // else {
    // popup.switchToAcknowledge();
    // Playback.gridLoadThreadWait();
    // popup.acknowledge
    // .okWithExpectedMessage("The selected report is inactive. Please select an active report");
  }

  async clickInactiveCheckBox(): Promise<void> {
    // uIMapSettings.jobEntry.uIInactiveCheckbox.click();
  }

  async clickWeeklyRadiobutton(): Promise<void> {
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIWeeklyRadiobutton.click();
  }

  async enterAtEvery(): Promise<void> {
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIEveryEdit.sendKeys(BaseData.getSettingsModuleValue("Every"));
  }

  async clickMondayCheckBox(): Promise<void> {
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIMondayCheckBox.click();
  }

  async clickTuesdayCheckBox(): Promise<void> {
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uITuesdayCheckBox.click();
  }

  async clickWednesdayCheckBox(): Promise<void> {
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIWednesdayCheckBox.click();
  }

  async clickThursdayCheckBox(): Promise<void> {
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIThursdayCheckBox.click();
  }

  async clickFridayCheckBox(): Promise<void> {
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIFridayCheckBox.click();
  }

  async saveNClose(): Promise<void> {
    // uIMapSettings.jobEntry.uISaveandCloseButton.click();
    // popup.confirm.yes();
  }

  async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
    // try {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.jobEntry.uIBottomMesssageTextView.getText());
    // } catch (AssertionError e) {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition successful",
    // uIMapSettings.jobEntry.uIBottomMesssageTextView.getText());
  }

  async verifyUpdateSuccessfulBottomMessage(): Promise<void> {
    // try {
    // verify.ExpectedPropertyValueIsEqual("1003 - Update Successful",
    // uIMapSettings.jobEntry.uIBottomMesssageTextView.getText());
    // } catch (AssertionError e) {
    // verify.ExpectedPropertyValueIsEqual("1003 - Update successful",
    // uIMapSettings.jobEntry.uIBottomMesssageTextView.getText());
  }

  async enterEndDateAsFutureDate(): Promise<void> {
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIEndDateEdit.sendKeys(randomized.getFutureDate(1));
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIEndDateEdit.sendKeys(Keys.TAB);
  }

  async clickMinuteRadiobutton(): Promise<void> {
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIMinuteRadiobutton.click();
  }

  async verify1005ErrorJobNameAckMsg(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // popup.acknowledge.okWithExpectedMessage(
    // "(1005)Error - Job Name : BoloNew already exists (Hint : It might be inactive )");
  }

  async clickSave(): Promise<void> {
    // uIMapSettings.jobEntry.uISaveButton.click();
  }

  async verifySaveConfirmationPopupAppears(): Promise<void> {
    // objectIdentification.windowHandle.alertsPresentConditions();
    // popup.confirm.yesWithExpectedMessage("(3) Do you want to save the details?");
  }

  async verifyReportNameLabel(): Promise<void> {
    // String text = uIMapSettings.jobEntry.uIReportNameLabel.getText();
    // verify.ExpectedPropertyValueIsEqual(text, "Report Name");
  }

  async clickCancelConfirmationPopup(): Promise<void> {
    // popup.confirm.dismissPopup();
  }

  async verifyBottomMessageNotAppears(): Promise<void> {
    // verify.ExpectedValueIsFalse(
    // objectIdentification.manualIdentify.controlExist(uIMapSettings.jobEntry.uIBottomMesssageTextView));
  }

  async verifyInterfaceDropdownIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.jobEntry.uIInterfaceDropdown.isDisplayed());
  }

  async selectAtInterface(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.jobEntry.uIInterfaceDropdown,
    // BaseData.getSettingsModuleValue("Interface"));
    // uIMapSettings.jobEntry.uIInterfaceDropdown.sendKeys(Keys.TAB);
  }

  async verify1005ErrorInterfaceNameBodyCameraInterfaceAlreadyExistsAcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1005) Error - Interface Name : Body Camera Interface already exists");
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.jobEntry.uIAddButton.click();
  }

  async enterAtNotifyEmail(): Promise<void> {
    // uIMapSettings.jobEntry.uINotifyEmailEdit.sendKeys(BaseData.getSettingsModuleValue("NotifyEmail"));
    // uIMapSettings.jobEntry.uINotifyEmailEdit.sendKeys(Keys.TAB);
  }

  async verifyExportDropdownIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.jobEntry.uIExportDropdown.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verifyAtExportDropdownList(i: number): Promise<void> {
    // uIMapSettings.jobEntry.uIExportDropdown.click();
    // List<String> dropDownValues = objectIdentification.manualIdentify
    // .getDropDownValues(uIMapSettings.jobEntry.uIExportDropdown);
    // verify.ExpectedValueIsTrue(dropDownValues.contains(BaseData.getSettingsModuleValue("Export" + i)));
  }

  async verifyScreenIDAsMandatory(): Promise<void> {
    // String clr = "rgba(153, 0, 0, 1)";
    // String color = uIMapSettings.jobEntry.uIScreenIDLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(clr, color);
  }

  async verifyReportNameAsMandatory(): Promise<void> {
    // String clr = "rgba(153, 0, 0, 1)";
    // String color = uIMapSettings.jobEntry.uIReportNameLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(clr, color);
  }

  async verifyScreenIDIsEnabled(): Promise<void> {
    // boolean enabled = uIMapSettings.jobEntry.uIScreenIDEdit.isEnabled();
    // verify.ExpectedValueIsTrue(enabled);
  }

  async verifyReportNameIsEnabled(): Promise<void> {
    // boolean enabled = uIMapSettings.jobEntry.uIReportNameDropdown.isEnabled();
    // verify.ExpectedValueIsTrue(enabled);
  }

  async enterAtCustomJobName(): Promise<void> {
    // uIMapSettings.jobEntry.uICustomJobNameEdit.sendKeys(BaseData.getSettingsModuleValue("CustomJobName"));
  }

  async selectAtJobType(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.jobEntry.uIJobTypeCombobox,
    // BaseData.getSettingsModuleValue("JobType" + i));
    // uIMapSettings.jobEntry.uIJobTypeCombobox.sendKeys(Keys.TAB);
  }

  async verifyAtInterfaceDropdownList(i: number): Promise<void> {
    // uIMapSettings.jobEntry.uIInterfaceDropdown.click();
    // List<String> dropDownValues = objectIdentification.manualIdentify
    // .getDropDownValues(uIMapSettings.jobEntry.uIInterfaceDropdown);
    // verify.ExpectedValueIsTrue(dropDownValues.contains(BaseData.getSettingsModuleValue("Interface" + i)));
  }

  async selectAtExport(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.jobEntry.uIExportDropdown,
    // BaseData.getSettingsModuleValue("Export" + i));
  }

  async enterAtScreenID(): Promise<void> {
    // uIMapSettings.jobEntry.uIScreenIDEdit.sendKeys(BaseData.getSettingsModuleValue("ScreenID"));
    // uIMapSettings.jobEntry.uIScreenIDEdit.sendKeys(Keys.TAB);
  }

  async verify1018RequiredEntriesAreMissingAcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1018) Required Entries are Missing");
  }

  async clickResetIcon(): Promise<void> {
    // uIMapSettings.jobEntry.uIResetButton.click();
  }

  async enterAtJobName(i: number): Promise<void> {
    // uIMapSettings.jobsScreen.uIJobNameEdit.sendKeys(BaseData.getSettingsModuleValue("JobName" + i));
    // uIMapSettings.jobsScreen.uIJobNameEdit.sendKeys(Keys.TAB);
  }

  async selectAtReportName(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.jobEntry.uIReportNameDropdown,
    // BaseData.getSettingsModuleValue("ReportName"));
  }

}

export class ParameterJobScreenTabPage {
  readonly page: Page;
  readonly paramNameEdit: Locator;
  readonly paramValueEdit: Locator;
  readonly paramValueCombobox: Locator;
  readonly parameterResultTable: Locator;
  readonly addbutton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.paramNameEdit = page.locator('#tabJobs_tmpl1_UsrRptParam1_txtParamName');
    this.paramValueEdit = page.locator('#tabJobs_tmpl1_UsrRptParam1_txtParamValue');
    this.paramValueCombobox = page.locator('#tabJobs_tmpl1_UsrRptParam1_cddParamValue_DropDown');
    this.parameterResultTable = page.locator('#tabJobs_tmpl1_UsrRptParam1_grdJobParam');
    this.addbutton = page.locator('#tabJobs_tmpl1_UsrRptParam1_cmdAdd');
  }

  async enterAtParameterName(): Promise<void> {
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParamNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ParameterName"));
  }

  async enterAtParameterValue(): Promise<void> {
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParamValueEdit.clear();
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParamValueEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ParameterValue"));
  }

  async clickAdd(): Promise<void> {
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIAddbutton.click();
    // Playback.controlReadyThreadWait();
  }

  async verifyAtParameterNameInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ParameterName"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParameterResultTable, "Param Name",
    // rowIndex));
  }

  async enterAtParameterName1(): Promise<void> {
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParamNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ParameterName1"));
  }

  async enterAtParameterValue1(): Promise<void> {
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParamValueEdit.clear();
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParamValueEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ParameterValue1"));
  }

  async enterAtParameterName2(): Promise<void> {
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParamNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ParameterName2"));
  }

  async enterAtParameterValue2(): Promise<void> {
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParamValueEdit.clear();
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParamValueEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ParameterValue2"));
  }

  async enterAtParameterName3(): Promise<void> {
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParamNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ParameterName3"));
  }

  async enterAtParameterValue6(): Promise<void> {
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParamValueEdit.clear();
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParamValueEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ParameterValue6"));
  }

  async enterAtParameterName4(): Promise<void> {
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParamNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ParameterName4"));
  }

  async enterAtParameterName5(): Promise<void> {
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParamNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ParameterName5"));
  }

  async enterAtParameterName6(): Promise<void> {
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParamNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ParameterName6"));
  }

  async enterAtParameterName7(): Promise<void> {
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParamNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ParameterName7"));
  }

  async verifyAtParameterName1InGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ParameterName1"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParameterResultTable, "Param Name",
    // rowIndex));
  }

  async verifyAtParameterName2InGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ParameterName2"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParameterResultTable, "Param Name",
    // rowIndex));
  }

  async verifyAtParameterName3InGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ParameterName3"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParameterResultTable, "Param Name",
    // rowIndex));
  }

  async verifyAtParameterName4InGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ParameterName4"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParameterResultTable, "Param Name",
    // rowIndex));
  }

  async verifyAtParameterName5InGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ParameterName5"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParameterResultTable, "Param Name",
    // rowIndex));
  }

  async verifyAtParameterName6InGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ParameterName6"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParameterResultTable, "Param Name",
    // rowIndex));
  }

  async verifyAtParameterName7InGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ParameterName7"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.jobEntry.parameterJobScreenTab.uIParameterResultTable, "Param Name",
    // rowIndex));
  }

}

export class NotificationJobScreenTabPage {
  readonly page: Page;
  readonly notifyToPFEdit: Locator;
  readonly notifyEmailIDEdit: Locator;
  readonly serverFolderEdit: Locator;
  readonly notificationResultTable: Locator;
  readonly addbutton: Locator;
  readonly batchEmailEveryDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.notifyToPFEdit = page.locator('#tabJobs_tmpl2_UsrJobNotify1_lupNotifyTo_CodeValue');
    this.notifyEmailIDEdit = page.locator('#tabJobs_tmpl2_UsrJobNotify1_txtNotifyEmailID');
    this.serverFolderEdit = page.locator('#tabJobs_tmpl2_UsrJobNotify1_txtStoreFolder');
    this.notificationResultTable = page.locator('#tabJobs_tmpl2_UsrJobNotify1_grdJobNotify');
    this.addbutton = page.locator('#tabJobs_tmpl2_UsrJobNotify1_cmdAdd');
    this.batchEmailEveryDropdown = page.locator('#tabJobs_tmpl2_UsrJobNotify1_cddBatchEmail_DropDown');
  }

  async enterAtNotifyEmail(): Promise<void> {
    // uIMapSettings.jobEntry.notificationJobScreenTab.uINotifyEmailIDEdit.clear();
    // uIMapSettings.jobEntry.notificationJobScreenTab.uINotifyEmailIDEdit
    // .sendKeys(BaseData.getSettingsModuleValue("NotifyEmail"));
  }

  async clickAdd(): Promise<void> {
    // uIMapSettings.jobEntry.notificationJobScreenTab.uIAddbutton.click();
    // Playback.controlReadyThreadWait();
  }

  async enterAtServerFolder(): Promise<void> {
    // uIMapSettings.jobEntry.notificationJobScreenTab.uIServerFolderEdit.clear();
    // uIMapSettings.jobEntry.notificationJobScreenTab.uIServerFolderEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ServerFolder"));
  }

  async verifyAtNotifyInGrid(): Promise<void> {
    // String gridCellInnerText = objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.jobEntry.notificationJobScreenTab.uINotificationResultTable, "Notify", 0);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ServerFolder"), gridCellInnerText);
  }

  async verifyAtNotifyPFInGrid(i: number): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.jobEntry.notificationJobScreenTab.uINotificationResultTable,
    // BaseData.getSettingsModuleValue("Notify" + i)).getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("Notify" + i)));
  }

  async verifyBatchEmailEveryIsDisabled(): Promise<void> {
    // System.out.println(
    // uIMapSettings.jobEntry.notificationJobScreenTab.uIBatchEmailEveryDropdown.getAttribute("disabled")
    // + "- Disabled");
    // verify.ExpectedValueIsTrue(
    // !uIMapSettings.jobEntry.notificationJobScreenTab.uIBatchEmailEveryDropdown.isEnabled());
  }

  async enterAtNotifyToPF(i: number): Promise<void> {
    // uIMapSettings.jobEntry.notificationJobScreenTab.uINotifyToPFEdit
    // .sendKeys(BaseData.getSettingsModuleValue("NotifyToPF" + i));
    // uIMapSettings.jobEntry.notificationJobScreenTab.uINotifyToPFEdit.sendKeys(Keys.TAB);
  }

}

export class ScheduleJobScreenTabPage {
  readonly page: Page;
  readonly startDateEdit: Locator;
  readonly startTimeEdit: Locator;
  readonly endDateEdit: Locator;
  readonly endTimeEdit: Locator;
  readonly recurrenceCheckbox: Locator;
  readonly dailyRadiobutton: Locator;
  readonly hourRadiobutton: Locator;
  readonly everyDaysEdit: Locator;
  readonly everyMinutesEdit: Locator;
  readonly reCalculateCheckbox: Locator;
  readonly weeklyRadiobutton: Locator;
  readonly everyEdit: Locator;
  readonly mondayCheckBox: Locator;
  readonly tuesdayCheckBox: Locator;
  readonly wednesdayCheckBox: Locator;
  readonly thursdayCheckBox: Locator;
  readonly fridayCheckBox: Locator;
  readonly nextExecDateEdit: Locator;
  readonly minuteRadiobutton: Locator;
  readonly monthlyRadiobutton: Locator;
  readonly yearlyRadiobutton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.startDateEdit = page.locator('#tabJobs_tmpl0_UsrJobSchedule1_dttmStartDate_Date_KPIDttmCtrl');
    this.startTimeEdit = page.locator("//table[@id=\'tabJobs_tmpl0_UsrJobSchedule1_dttmStartDate_Time\']//input");
    this.endDateEdit = page.locator('#tabJobs_tmpl0_UsrJobSchedule1_dttmEndDate_Date_KPIDttmCtrl');
    this.endTimeEdit = page.locator("//table[@id=\'tabJobs_tmpl0_UsrJobSchedule1_dttmEndDate_Time\']//input");
    this.recurrenceCheckbox = page.locator('#tabJobs_tmpl0_UsrJobSchedule1_chkRecurrence');
    this.dailyRadiobutton = page.locator('#tabJobs_tmpl0_UsrJobSchedule1_rdReccType_2');
    this.hourRadiobutton = page.locator('#tabJobs_tmpl0_UsrJobSchedule1_rdReccType_1');
    this.everyDaysEdit = page.locator('#tabJobs_tmpl0_UsrJobSchedule1_txtDays');
    this.everyMinutesEdit = page.locator('#tabJobs_tmpl0_UsrJobSchedule1_txtMinute');
    this.reCalculateCheckbox = page.locator('#tabJobs_tmpl0_UsrJobSchedule1_chkReCalculate');
    this.weeklyRadiobutton = page.locator('#tabJobs_tmpl0_UsrJobSchedule1_rdReccType_3');
    this.everyEdit = page.locator('#tabJobs_tmpl0_UsrJobSchedule1_txtWeek');
    this.mondayCheckBox = page.locator('#tabJobs_tmpl0_UsrJobSchedule1_chkMonday');
    this.tuesdayCheckBox = page.locator('#tabJobs_tmpl0_UsrJobSchedule1_chkTuesday');
    this.wednesdayCheckBox = page.locator('#tabJobs_tmpl0_UsrJobSchedule1_chkWednesday');
    this.thursdayCheckBox = page.locator('#tabJobs_tmpl0_UsrJobSchedule1_chkThursday');
    this.fridayCheckBox = page.locator('#tabJobs_tmpl0_UsrJobSchedule1_chkFriday');
    this.nextExecDateEdit = page.locator('#tabJobs_tmpl0_UsrJobSchedule1_dttmNextExec_Date_KPIDttmCtrl');
    this.minuteRadiobutton = page.locator('#tabJobs_tmpl0_UsrJobSchedule1_rdReccType_0');
    this.monthlyRadiobutton = page.locator('#tabJobs_tmpl0_UsrJobSchedule1_rdReccType_4');
    this.yearlyRadiobutton = page.locator('#tabJobs_tmpl0_UsrJobSchedule1_rdReccType_5');
  }

  async tabStartDate(): Promise<void> {
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIStartDateEdit.click();
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIStartDateEdit.sendKeys(Keys.TAB);
  }

  async enterEndDateAsFutureDate(): Promise<void> {
    // String futureDate = Randomized.getFutureDate(3);
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIEndDateEdit.sendKeys(futureDate);
    // uIMapSettings.jobEntry.scheduleJobScreenTab.uIEndDateEdit.sendKeys(Keys.TAB);
  }

  async verifyMinuteRadioButtonIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.jobEntry.scheduleJobScreenTab.uIMinuteRadiobutton.isEnabled(),
    // "Minute Radio Button Is Not Enabled -->");
  }

  async verifyHourRadioButtonIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.jobEntry.scheduleJobScreenTab.uIHourRadiobutton.isEnabled(),
    // "Hour Radio Button Is Not Enabled -->");
  }

  async verifyDailyRadioButtonIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.jobEntry.scheduleJobScreenTab.uIDailyRadiobutton.isEnabled(),
    // "Daily Radio Button Is Not Enabled -->");
  }

  async verifyWeeklyRadioButtonIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.jobEntry.scheduleJobScreenTab.uIWeeklyRadiobutton.isEnabled(),
    // "Weekly Radio Button Is Not Enabled -->");
  }

  async verifyMonthlyRadioButtonIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.jobEntry.scheduleJobScreenTab.uIMonthlyRadiobutton.isEnabled(),
    // "Monthly Radio Button Is Not Enabled -->");
  }

  async verifyYearlyRadioButtonIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.jobEntry.scheduleJobScreenTab.uIYearlyRadiobutton.isEnabled(),
    // "Yearly Radio Button Is Not Enabled -->");
  }

}

export class EmailTemplatePage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly searchButton: Locator;
  readonly emailTemplateResultGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("(//span[contains(text(),\'Add New\')])");
    this.searchButton = page.locator('#cmdSearch');
    this.emailTemplateResultGrid = page.locator('#grdEmailTemplate');
  }

  async ClickAddNewButton(): Promise<void> {
    // uIMapSettings.emailTemplate.uIAddNewButton.click();
  }

  async ClickSearchButton(): Promise<void> {
    // uIMapSettings.emailTemplate.uISearchButton.click();
  }

  async selectGridRowByAtTemplateName(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.emailTemplate.uIEmailTemplateResultGrid, BaseData.getSettingsModuleValue
    // ("TemplateName"));
  }

}

export class EmailTemplateEntryPage {
  readonly page: Page;
  readonly templateNameEdit: Locator;
  readonly textEdit: Locator;
  readonly subjectEdit: Locator;
  readonly saveNCloseButton: Locator;
  readonly saveButton: Locator;
  readonly saveButtonFire: Locator;
  readonly statusBar: Locator;
  readonly bccEdit: Locator;
  readonly printButton: Locator;
  readonly dataFieldsDropDown: Locator;
  readonly addIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.templateNameEdit = page.locator('#txtemailname');
    this.textEdit = page.locator('#txtNotes_contentIframe');
    this.subjectEdit = page.locator('#txtSubject');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.saveButton = page.locator('#cmdsave');
    this.saveButtonFire = page.locator('#cmdsave');
    this.statusBar = page.locator("//td[@class=\'statusBar\']//b");
    this.bccEdit = page.locator('#txtbcc');
    this.printButton = page.locator('#cmdPrint');
    this.dataFieldsDropDown = page.locator('#cddRptKey_DropDown');
    this.addIcon = page.locator('#imgAdd');
  }

  async EnterAtTemplateName(): Promise<void> {
    // uIMapSettings.emailTemplateEntry.uITemplateNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("TemplateName"));
  }

  async EnterSubject(): Promise<void> {
    // uIMapSettings.emailTemplateEntry.uISubjectEdit.sendKeys(Randomized.randomString(5));
  }

  async EnterContentInTextBox(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // Actions actions = new Actions(Playback.driver);
    // actions.moveToElement(uIMapSettings.emailTemplateEntry.uITextEdit).click();
    // actions.sendKeys(Randomized.randomString(15)).build().perform();
    // Playback.controlReadyThreadWait();
  }

  async SaveNClose(): Promise<void> {
    // uIMapSettings.emailTemplateEntry.uISaveNCloseButton.click();
    // popup.confirm.yes();
  }

  async save(): Promise<void> {
    // uIMapSettings.emailTemplateEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async saveFire(): Promise<void> {
    // uIMapSettings.emailTemplateEntry.uISaveButtonFire.click();
    // popup.confirm.yes();
  }

  async verifyAdditionSuccessfulMessageInStatusBar(): Promise<void> {
    // String message = uIMapSettings.emailTemplateEntry.uIStatusBar.getText();
    // try {
    // verify.ExpectedPropertyValueIsEqual(message, "1002 - Addition Successful");
    // } catch (AssertionError e) {
    // verify.ExpectedPropertyValueIsEqual(message, "1002 - Addition successful");
  }

  async enterAtBcc(): Promise<void> {
    // uIMapSettings.emailTemplateEntry.uIBccEdit.sendKeys(BaseData.getSettingsModuleValue("Bcc"));
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapSettings.emailTemplateEntry.uIPrintButton.click();
  }

  async verifySelectReportScreenIsOpened(windowExist: boolean): Promise<void> {
    // verify.ExpectedValueIsTrue(windowExist);
  }

  async verifyEnterMandatoryDataAcknowledge(): Promise<void> {
    // popup.acknowledge.okWithExpectedContainMessage("(8)Enter mandatory data");
  }

  async clickSaveButton(): Promise<void> {
    // uIMapSettings.emailTemplateEntry.uISaveButton.click();
  }

  async selectAtDataFields(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.emailTemplateEntry.uIDataFieldsDropDown,
    // BaseData.getSettingsModuleValue("DataFields"));
  }

  async clickAddIcon(): Promise<void> {
    // uIMapSettings.emailTemplateEntry.uIAddIcon.click();
  }

  async verify1019DuplicationOfDataFoundAcknowledgePopupAppears(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1019) Duplication of data found");
  }

}

export class FormRepositoryScreenPage {
  readonly page: Page;
  readonly emailTemplateComboBox: Locator;
  readonly saveNCloseButton: Locator;
  readonly reportOrFormNameEdit: Locator;
  readonly effectiveDateEdit: Locator;
  readonly effectiveDateLabel: Locator;
  readonly inactiveCheckbox: Locator;
  readonly inactiveDescriptionTextbox: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailTemplateComboBox = page.locator('#cddEmailTemplate');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.reportOrFormNameEdit = page.locator('#txtFrmName');
    this.effectiveDateEdit = page.locator('#dttmEffectiveDate_KPIDttmCtrl');
    this.effectiveDateLabel = page.locator('#lblEffectiveDate');
    this.inactiveCheckbox = page.locator('#chkIsActive');
    this.inactiveDescriptionTextbox = page.locator('#txtInActiveDttm');
    this.saveButton = page.locator('#cmdSave');
  }

  async SelectAtEmailTemplate(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.formRepositoryScreen.uIEmailTemplateComboBox,
    // BaseData.getSettingsModuleValue("EmailTemplate"));
  }

  async SaveNClose(): Promise<void> {
    // uIMapSettings.formRepositoryScreen.uISaveNCloseButton.click();
    // popup.confirm.yes();
  }

  async verifyAtFormName(): Promise<void> {
    // String attribute = uIMapSettings.formRepositoryScreen.uIReportOrFormNameEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute, BaseData.getSettingsModuleValue("FormName"));
  }

  async verifyEffectiveDateFieldIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.formRepositoryScreen.uIEffectiveDateEdit.isDisplayed());
  }

  async verifyEffectiveDateLabelIsDisplayed(): Promise<void> {
    // String text = uIMapSettings.formRepositoryScreen.uIEffectiveDateLabel.getText();
    // verify.ExpectedPropertyValueIsEqual(text, "Effective Date");
  }

  async verifyEffectiveDateValueIsNull(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapSettings.formRepositoryScreen.uIEffectiveDateEdit.getAttribute("value").isEmpty());
  }

  async clearEffectiveDateField(): Promise<void> {
    // uIMapSettings.formRepositoryScreen.uIEffectiveDateEdit.click();
    // uIMapSettings.formRepositoryScreen.uIEffectiveDateEdit.clear();
  }

  async enterEffectiveDateAsCurrentDate(): Promise<void> {
    // String currentDate = Randomized.getCurrentDate();
    // uIMapSettings.formRepositoryScreen.uIEffectiveDateEdit.sendKeys(currentDate);
  }

  async verifyEffectiveDateValueNotNull(): Promise<void> {
    // verify.ExpectedValueIsFalse(
    // uIMapSettings.formRepositoryScreen.uIEffectiveDateEdit.getAttribute("value").isEmpty());
  }

  async enterEffectiveDateAsFutureDate(): Promise<void> {
    // String futureDate = Randomized.getFutureDate(1);
    // uIMapSettings.formRepositoryScreen.uIEffectiveDateEdit.sendKeys(futureDate);
  }

  async clickInavtiveCheckbox(): Promise<void> {
    // uIMapSettings.formRepositoryScreen.uIInactiveCheckbox.click();
  }

  async save(): Promise<void> {
    // uIMapSettings.formRepositoryScreen.uISaveButton.click();
    // popup.confirm.yes();
  }

}

export class FireStationSearchPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly fireStationGrid: Locator;
  readonly fireStationCodeEdit: Locator;
  readonly searchButton: Locator;
  readonly stationNameEdit: Locator;
  readonly districtDropDown: Locator;
  readonly availableForCADToCADCheckBox: Locator;
  readonly includeInactiveCheckBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.fireStationGrid = page.locator('#grdFireStation');
    this.fireStationCodeEdit = page.locator('#txtFireStationRef');
    this.searchButton = page.locator('#cmdSearch');
    this.stationNameEdit = page.locator('#txtStationName');
    this.districtDropDown = page.locator('#cddFireDistrict_DropDown');
    this.availableForCADToCADCheckBox = page.locator('#chkIsPnxCAD2CAD');
    this.includeInactiveCheckBox = page.locator('#chkIncludeInactive');
  }

  async ClickAddNewButton(): Promise<void> {
    // uIMapSettings.fireStationSearch.uIAddNewButton.click();
  }

  async VerifyAtStationCode(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("StationCode"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.fireStationSearch.uIFireStationGrid, "Station Code", rowIndex));
  }

  async VerifyAtStationName(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("StationName"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.fireStationSearch.uIFireStationGrid, "Station Name", rowIndex));
  }

  async VerifyAtDistrict(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("District"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.fireStationSearch.uIFireStationGrid, "District", rowIndex));
  }

  async enterAtStationCodeEdit(): Promise<void> {
    // uIMapSettings.fireStationSearch.uIFireStationCodeEdit
    // .sendKeys(BaseData.getSettingsModuleValue("StationCode"));
  }

  async clickSearchButton(): Promise<void> {
    // uIMapSettings.fireStationSearch.uISearchButton.click();
  }

  async verifyAtStationCode(): Promise<void> {
    // List<String> StationCode = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.fireStationSearch.uIFireStationGrid, "Station Code");
    // verify.ExpectedValueIsTrue(StationCode.contains(BaseData.getSettingsModuleValue("StationCode")));
  }

  async verifyAtStationName(): Promise<void> {
    // List<String> StationName = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.fireStationSearch.uIFireStationGrid, "Station Name");
    // verify.ExpectedValueIsTrue(StationName.contains(BaseData.getSettingsModuleValue("StationName")));
  }

  async enterAtStationName(): Promise<void> {
    // uIMapSettings.fireStationSearch.uIStationNameEdit.sendKeys(BaseData.getSettingsModuleValue("StationName"));
    // uIMapSettings.fireStationSearch.uIStationNameEdit.sendKeys(Keys.TAB);
  }

  async clearStationCode(): Promise<void> {
    // uIMapSettings.fireStationSearch.uIFireStationCodeEdit.clear();
  }

  async clearStationName(): Promise<void> {
    // uIMapSettings.fireStationSearch.uIStationNameEdit.clear();
  }

  async selectAtDistrict(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.fireStationSearch.uIDistrictDropDown,
    // BaseData.getSettingsModuleValue("District" + i));
  }

  async verifyAtDistrict(i: number, j: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.fireStationSearch.uIFireStationGrid,
    // BaseData.getSettingsModuleValue("ColumnName" + i));
    // for (String Columnvalues : gridTableColumnValues) {
    // verify.ExpectedValueIsTrue(Columnvalues.contains(BaseData.getSettingsModuleValue("District" + j)));
  }

  async checkAvailableForCADToCADCheckBox(): Promise<void> {
    // uIMapSettings.fireStationSearch.uIAvailableForCADToCADCheckBox.click();
  }

  async verifyCADToCADCheckBoxInGrid(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapSettings.fireStationSearch.uIFireStationGrid, BaseData.getSettingsModuleValue("StationCode"),
    // "CAD-to-CAD");
    // String selected = gridCell.findElement(By.xpath("//img[@title='Checked']")).getAttribute("title");
    // verify.ExpectedValueIsTrue(selected.contains("Checked"));
  }

  async selectAtStationCodeInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.fireStationSearch.uIFireStationGrid, BaseData.getSettingsModuleValue("StationCode"));
  }

  async checkIncludeInactiveCheckBox(): Promise<void> {
    // uIMapSettings.fireStationSearch.uIIncludeInactiveCheckBox.click();
  }

  async verifyRecordShownAsGrayColor(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // String gridRowByCellInnerText = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapSettings.fireStationSearch.uIFireStationGrid,
    // BaseData.getSchedulingModuleValue("StationCode"))
    // .getAttribute("class");
    // verify.ExpectedValueIsTrue(gridRowByCellInnerText.contains("Isactive"));
  }

  async verifyAtStationCodeInGrid(i: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.fireStationSearch.uIFireStationGrid,
    // BaseData.getSettingsModuleValue("ColumnName" + i));
    // for (String Columnvalues : gridTableColumnValues) {
    // verify.ExpectedValueIsTrue(Columnvalues.contains(BaseData.getSettingsModuleValue("StationCode")));
  }

  async verifyAtStationNameInGrid(i: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.fireStationSearch.uIFireStationGrid,
    // BaseData.getSettingsModuleValue("ColumnName" + i));
    // for (String Columnvalues : gridTableColumnValues) {
    // verify.ExpectedValueIsTrue(Columnvalues.contains(BaseData.getSettingsModuleValue("StationName")));
  }

}

export class FireStationEntryPage {
  readonly page: Page;
  readonly stationTextBox: Locator;
  readonly stationNameTextBox: Locator;
  readonly districtDropDown: Locator;
  readonly emailTextbox: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly statusBar: Locator;
  readonly inactiveCheckBox: Locator;
  readonly primaryPrinterEdit: Locator;
  readonly secondaryPrinterEdit: Locator;
  readonly pageGroupEdit: Locator;
  readonly addressEdit: Locator;
  readonly primaryDivisionEdit: Locator;
  readonly coverageEdit: Locator;
  readonly cityEdit: Locator;
  readonly latitudeEdit: Locator;
  readonly longitudeEdit: Locator;
  readonly phoneEdit: Locator;
  readonly faxEdit: Locator;
  readonly emailEdit: Locator;
  readonly inactiveDateAndTimeEdit: Locator;
  readonly availableForCADToCADCheckBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.stationTextBox = page.locator('#txtFireStationRef');
    this.stationNameTextBox = page.locator('#txtStationName');
    this.districtDropDown = page.locator('#cddFireDistrict_DropDown');
    this.emailTextbox = page.locator('#txtEmail');
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.statusBar = page.locator("//td[@class=\'statusBar\']/b");
    this.inactiveCheckBox = page.locator('#chkIsActive');
    this.primaryPrinterEdit = page.locator('#txtPrmPrinter');
    this.secondaryPrinterEdit = page.locator('#txtSecPrinter');
    this.pageGroupEdit = page.locator('#txtSecPrinter');
    this.addressEdit = page.locator('#txtAddress');
    this.primaryDivisionEdit = page.locator('#txtPriDivision');
    this.coverageEdit = page.locator('#txtCoverage');
    this.cityEdit = page.locator('#cstCSZ_City');
    this.latitudeEdit = page.locator('#txtLatitude');
    this.longitudeEdit = page.locator('#txtlongitude');
    this.phoneEdit = page.locator('#mskPhoneNo');
    this.faxEdit = page.locator('#mskFaxNo');
    this.emailEdit = page.locator('#txtEmail');
    this.inactiveDateAndTimeEdit = page.locator('#txtIsActiveDttm');
    this.availableForCADToCADCheckBox = page.locator('#chkIsPnxCAD2CAD');
  }

  async EnterAtStation(): Promise<void> {
    // uIMapSettings.fireStationEntry.uIStationTextBox.sendKeys(BaseData.getSettingsModuleValue("Station"));
    // uIMapSettings.fireStationEntry.uIStationTextBox.sendKeys(Keys.TAB);
  }

  async SelectAtDistrict(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.fireStationEntry.uIDistrictDropDown,
    // BaseData.getSettingsModuleValue("District"));
    // uIMapSettings.fireStationEntry.uIDistrictDropDown.sendKeys(Keys.TAB);
  }

  async EnterAtStationName(): Promise<void> {
    // uIMapSettings.fireStationEntry.uIStationNameTextBox
    // .sendKeys(BaseData.getSettingsModuleValue("StationName"));
  }

  async EnterAtEmail(): Promise<void> {
    // uIMapSettings.fireStationEntry.uIEmailTextbox.sendKeys(BaseData.getSettingsModuleValue("Email"));
  }

  async Save(): Promise<void> {
    // uIMapSettings.fireStationEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async clickSave(): Promise<void> {
    // uIMapSettings.fireStationEntry.uISaveButton.click();
  }

  async clickSaveNClose(): Promise<void> {
    // uIMapSettings.fireStationEntry.uISaveAndCloseButton.click();
  }

  async SaveNClose(): Promise<void> {
    // uIMapSettings.fireStationEntry.uISaveAndCloseButton.click();
    // popup.confirm.yes();
  }

  async verifyAdditionSuccessfulStatusMessage(): Promise<void> {
    // String text = uIMapSettings.fireStationEntry.uIStatusBar.getText();
    // try {
    // verify.ExpectedPropertyValueIsEqual(text, "1002 - Addition successful");
    // } catch (AssertionError e) {
    // verify.ExpectedPropertyValueIsEqual(text, "1002 - Addition Successful");
  }

  async verifyUpdateSuccessfulStatusMessage(): Promise<void> {
    // String text = uIMapSettings.fireStationEntry.uIStatusBar.getText();
    // verify.ExpectedPropertyValueIsEqual(text, "1003 - Update successful");
  }

  async checkInactiveCheckBox(): Promise<void> {
    // uIMapSettings.fireStationEntry.uIInactiveCheckBox.click();
  }

  async enterAtPrimaryPrinter(): Promise<void> {
    // uIMapSettings.fireStationEntry.uIPrimaryPrinterEdit
    // .sendKeys(BaseData.getSettingsModuleValue("PrimaryPrinter"));
  }

  async enterAtSecondaryPrinter(): Promise<void> {
    // uIMapSettings.fireStationEntry.uISecondaryPrinterEdit
    // .sendKeys(BaseData.getSettingsModuleValue("SecondaryPrinter"));
  }

  async enterAtPageGroup(): Promise<void> {
    // uIMapSettings.fireStationEntry.uIPageGroupEdit.sendKeys(BaseData.getSettingsModuleValue("PageGroup"));
  }

  async enterAtAddress(): Promise<void> {
    // uIMapSettings.fireStationEntry.uIAddressEdit.sendKeys(BaseData.getSettingsModuleValue("Address"));
  }

  async enterAtPrimaryDivision(): Promise<void> {
    // uIMapSettings.fireStationEntry.uIPrimaryDivisionEdit
    // .sendKeys(BaseData.getSettingsModuleValue("PrimaryDivision"));
  }

  async enterAtCoverage(): Promise<void> {
    // uIMapSettings.fireStationEntry.uICoverageEdit.sendKeys(BaseData.getSettingsModuleValue("Coverage"));
  }

  async enterAtCSZ(): Promise<void> {
    // uIMapSettings.fireStationEntry.uICityEdit.sendKeys(BaseData.getSettingsModuleValue("CSZ"));
    // uIMapSettings.fireStationEntry.uICityEdit.sendKeys(Keys.TAB);
    // popup.switchToCodedSearch();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async enterAtLatitude(): Promise<void> {
    // uIMapSettings.fireStationEntry.uILatitudeEdit.sendKeys(BaseData.getSettingsModuleValue("Latitude"));
  }

  async enterAtLatitude(i: number): Promise<void> {
    // uIMapSettings.fireStationEntry.uILatitudeEdit.sendKeys(BaseData.getSettingsModuleValue("Latitude"+i));
  }

  async enterAtLongitude(): Promise<void> {
    // uIMapSettings.fireStationEntry.uILongitudeEdit.sendKeys(BaseData.getSettingsModuleValue("Longitude"));
  }

  async enterAtLongitude(i: number): Promise<void> {
    // uIMapSettings.fireStationEntry.uILongitudeEdit.sendKeys(BaseData.getSettingsModuleValue("Longitude"+i));
  }

  async enterAtPhone(): Promise<void> {
    // uIMapSettings.fireStationEntry.uIPhoneEdit.sendKeys(BaseData.getSettingsModuleValue("Phone"));
  }

  async enterAtFax(): Promise<void> {
    // uIMapSettings.fireStationEntry.uIFaxEdit.sendKeys(BaseData.getSettingsModuleValue("Fax"));
  }

  async enterAtEmail(): Promise<void> {
    // uIMapSettings.fireStationEntry.uIEmailEdit.sendKeys(BaseData.getSettingsModuleValue("Email"));
  }

  async verifyInactiveDateAndTime(): Promise<void> {
    // String currentDate = randomized.getCurrentDate();
    // String currentTime = randomized.getCurrentTime().substring(0, 4);
    // String DateAndTime = uIMapSettings.fireStationEntry.uIInactiveDateAndTimeEdit.getAttribute("value")
    // .substring(0, 15);
    // verify.ExpectedPropertyValueIsEqual(currentDate + " " + currentTime, DateAndTime);
  }

  async checkAvailableForCADToCADCheckBox(): Promise<void> {
    // uIMapSettings.fireStationEntry.uIAvailableForCADToCADCheckBox.click();
  }

  async verify5117InvalidLatitudeAcknowledge(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(5117) Invalid Latitude. Should be under + or - 90");
  }

  async verify5117InvalidLongitudeAcknowledge(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(5117) Invalid Longitude. Should be under + or - 180");
  }

  async clearLatitude(): Promise<void> {
    // uIMapSettings.fireStationEntry.uILatitudeEdit.click();
    // uIMapSettings.fireStationEntry.uILatitudeEdit.clear();
  }

  async clearLongitude(): Promise<void> {
    // uIMapSettings.fireStationEntry.uILongitudeEdit.click();
    // uIMapSettings.fireStationEntry.uILongitudeEdit.clear();
  }

  async enterAtPhone(jsonIndex: number): Promise<void> {
    // uIMapSettings.fireStationEntry.uIPhoneEdit.click();
    // uIMapSettings.fireStationEntry.uIPhoneEdit.sendKeys(BaseData.getSettingsModuleValue("Phone"+jsonIndex));
  }

  async verify5037InvalidPhoneNumberAcknowledge(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(5037) Invalid Phone Number");
    // Playback.popupThreadWait();
  }

  async clearPhone(): Promise<void> {
    // uIMapSettings.fireStationEntry.uIPhoneEdit.click();
    // uIMapSettings.fireStationEntry.uIPhoneEdit.clear();
  }

}

export class CFSCodeEntryPage {
  readonly page: Page;
  readonly notificationIcon: Locator;
  readonly saveButton: Locator;
  readonly saveandCloseButton: Locator;
  readonly resetButton: Locator;
  readonly cFSCodeEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly shortDescriptionEdit: Locator;
  readonly typeComboBox: Locator;
  readonly serviceTypeComboBox: Locator;
  readonly cFSClassCodeEdit: Locator;
  readonly inactiveCheckBox: Locator;
  readonly cADTab: Locator;
  readonly managementTab: Locator;
  readonly othersTab: Locator;
  readonly sOPTab: Locator;
  readonly tasksTab: Locator;
  readonly linkedCFSTab: Locator;
  readonly alarmComboBox: Locator;
  readonly cFSClassDescription: Locator;
  readonly doNotPurgeCheckBox: Locator;
  readonly bottomMesssageTextView: Locator;
  readonly mainTab: Locator;
  readonly alarmSubLevelDropdown: Locator;
  readonly subLevelDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.notificationIcon = page.locator('#btnNotify');
    this.saveButton = page.locator('#cmdSave');
    this.saveandCloseButton = page.locator('#cmdSaveNClose');
    this.resetButton = page.locator('#cmdRefresh');
    this.cFSCodeEdit = page.locator('#txtCFScode');
    this.descriptionEdit = page.locator('#txtDescription');
    this.shortDescriptionEdit = page.locator('#txtShortDesc');
    this.typeComboBox = page.locator('#cddCFSType_DropDown');
    this.serviceTypeComboBox = page.locator('#cddAgency_DropDown');
    this.cFSClassCodeEdit = page.locator('#lupCFSClass_CodeValue');
    this.inactiveCheckBox = page.locator('#chkIsActive');
    this.cADTab = page.locator("//span[text()=\'CAD\']");
    this.managementTab = page.locator("//span[text()=\'Management\']");
    this.othersTab = page.locator("//span[text()=\'Others\']");
    this.sOPTab = page.locator("//span[text()=\'SOP\']");
    this.tasksTab = page.locator("//span[text()=\'Tasks\']");
    this.linkedCFSTab = page.locator("//span[text()=\'Linked CFS\']");
    this.alarmComboBox = page.locator('#cddAlarm_DropDown');
    this.cFSClassDescription = page.locator('#lupCFSClass_CodeDescription');
    this.doNotPurgeCheckBox = page.locator('#chkAllowPurge');
    this.bottomMesssageTextView = page.locator("//td[@class = \'statusBar\']//b");
    this.mainTab = page.locator("//span[text()=\'Main\']");
    this.alarmSubLevelDropdown = page.locator('#cddAlarm_DropDown');
    this.subLevelDropdown = page.locator('#cddSubAlarm_DropDown');
  }

  async EnterAtCFSCode(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.uICFSCodeEdit.sendKeys(BaseData.getSettingsModuleValue("CFSCode"));
  }

  async SelectAtType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.cFSCodeEntry.uITypeComboBox,
    // BaseData.getSettingsModuleValue("Type"));
    // uIMapSettings.cFSCodeEntry.uITypeComboBox.sendKeys(Keys.TAB);
  }

  async EnterAtDescription(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.uIDescriptionEdit.sendKeys(BaseData.getSettingsModuleValue("Description"));
  }

  async EnterAtShortDescription(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.uIShortDescriptionEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ShortDescription"));
  }

  async EnterAtCFSClass(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.uICFSClassCodeEdit.sendKeys(BaseData.getSettingsModuleValue("CFSClass"));
    // uIMapSettings.cFSCodeEntry.uICFSClassCodeEdit.sendKeys(Keys.TAB);
  }

  async SaveScreen(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.uISaveButton.click();
    // if (Playback.browserType.contains("Chrome")) {
    // popup.confirm.yesWithExpectedMessage("(3) Do you want to save the details?");
    // Playback.popupThreadWait();
    // } else {
    // popup.confirm.yesWithExpectedMessage("(3) Do You Want To Save All Of The Entered Details?");
    // Playback.popupThreadWait();
  }

  async Close(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.driver.close();
    // Playback.popupThreadWait();
  }

  async SelectAtServiceType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.cFSCodeEntry.uIServiceTypeComboBox,
    // BaseData.getSettingsModuleValue("ServiceType"));
    // uIMapSettings.cFSCodeEntry.uIServiceTypeComboBox.sendKeys(Keys.TAB);
  }

  async ClickCADTab(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.uICADTab.click();
  }

  async ClickManagementTab(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.uIManagementTab.click();
  }

  async ClickOthersTab(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.uIOthersTab.click();
  }

  async ClickSOPTab(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.uISOPTab.click();
  }

  async ClickTasksTab(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.uITasksTab.click();
  }

  async ClickLinkedCFSTab(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.uILinkedCFSTab.click();
  }

  async verifyTasksTabDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.cFSCodeEntry.uITasksTab.isDisplayed());
  }

  async getAlarmValueInDropdown(): Promise<string> {
    // String selectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.cFSCodeEntry.uIAlarmComboBox);
    // return selectedItem;
  }

  async verifyAtCFSClassDescription(): Promise<void> {
    // String attribute = uIMapSettings.cFSCodeEntry.uICFSClassDescription.getAttribute("value");
    // verify.ExpectedValueIsTrue(attribute.contains(BaseData.getSettingsModuleValue("CFSClassDescription")));
  }

  async verifyDoNotPurgeCheckBoxIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.cFSCodeEntry.uIDoNotPurgeCheckBox.isDisplayed());
  }

  async clickNotificationIcon(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.uINotificationIcon.click();
  }

  async verifyAtCFSCode(): Promise<void> {
    // String attribute = uIMapSettings.cFSCodeEntry.uICFSCodeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(attribute, BaseData.getSettingsModuleValue("CFSCode"));
  }

  async verifyAtType(): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.cFSCodeEntry.uITypeComboBox);
    // verify.ExpectedPropertyValueIsEqual(dropDownSelectedItem, BaseData.getSettingsModuleValue("Type"));
  }

  async verifyUpdateSuccessfulBottomMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1003 - Update Successful".toLowerCase(),
    // uIMapSettings.cFSCodeEntry.uIBottomMesssageTextView.getText().toLowerCase());
  }

  async verifyAtCFSClass(): Promise<void> {
    // String cfsClass = uIMapSettings.cFSCodeEntry.uICFSClassCodeEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(cfsClass.contains(BaseData.getSettingsModuleValue("CFSClass")));
  }

  async saveNClose(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.uISaveandCloseButton.click();
    // popup.confirm.yes();
  }

  async verifyUpdatedDataExistsAcknowledgeMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1056)Updated data exists in the fields. You must save or reset");
  }

  async verifyCFSCodeEntryWindowExist(): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.windowHandle.windowExist("CFS Code Entry"));
  }

  async clickMainTab(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.uIMainTab.click();
  }

}

export class CFSCodeEntryMainTabPage {
  readonly page: Page;
  readonly defaultFrequency: Locator;
  readonly nFIRSIncidentType: Locator;
  readonly arriveToInServiceInSecondsEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.defaultFrequency = page.locator('#tabCFSCode_tmpl0_UsrCAD2_cddFrequency_DropDown');
    this.nFIRSIncidentType = page.locator('#tabCFSCode_tmpl0_UsrCAD2_lupCADIncType_CodeValue');
    this.arriveToInServiceInSecondsEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD2_txtArrive');
  }

  async selectAtDefaultFrequency(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption
    // (uIMapSettings.cFSCodeEntry.cFSCodeEntryMainTab.uIDefaultFrequency,BaseData.getSettingsModuleValue("DefaultFrequency"));
  }

  async clearNFIRSIncidentType(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.cFSCodeEntryMainTab.uINFIRSIncidentType.click();
    // uIMapSettings.cFSCodeEntry.cFSCodeEntryMainTab.uINFIRSIncidentType.clear();
  }

  async clearArriveToInServiceInSeconds(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.cFSCodeEntryMainTab.uIArriveToInServiceInSecondsEdit.click();
    // uIMapSettings.cFSCodeEntry.cFSCodeEntryMainTab.uIArriveToInServiceInSecondsEdit.clear();
  }

  async verifyAtTabColorAsBlack(i: number, TabName: string): Promise<void> {
    // String cssValue = Playback.driver.findElement(By.xpath("//span[contains(text(),'" + TabName + "')]"))
    // .getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("color" + i), cssValue);
  }

  async save(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.uISaveButton.click();
    // popup.confirm.acceptPopup();
  }

  async selectAtAlarmSubLevel(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption
    // (uIMapSettings.cFSCodeEntry.uIAlarmSubLevelDropdown,BaseData.getSettingsModuleValue("AlarmSubLevel"));
  }

  async verifyAtAlarmSubLevel(): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem
    // (uIMapSettings.cFSCodeEntry.uIAlarmSubLevelDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("AlarmSubLevel"),dropDownSelectedItem);
  }

  async verifyAtSubLevel(): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem
    // (uIMapSettings.cFSCodeEntry.uISubLevelDropdown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("SubLevel"),dropDownSelectedItem);
  }

  async selectAtSubLevel(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption
    // (uIMapSettings.cFSCodeEntry.uISubLevelDropdown,BaseData.getSettingsModuleValue("SubLevel"));
  }

  async saveScreen(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async clickSaveIcon(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.uISaveButton.click();
  }

}

export class CFSCodeManagementTabPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

}

export class CFSCodeTasksTabPage {
  readonly page: Page;
  readonly copyTaskFromComboBox: Locator;
  readonly taskcodeComboBox: Locator;
  readonly dueWithinNumberEdit: Locator;
  readonly taskDetailsEdit: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly sOPTabResultTable: Locator;
  readonly copyButton: Locator;
  readonly sortOrderEdit: Locator;
  readonly taskCodeLable: Locator;
  readonly taskDetailsLable: Locator;
  readonly taskResultTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.copyTaskFromComboBox = page.locator('#tabCFSCode_tmpl8_usrTasks_cddCopytask');
    this.taskcodeComboBox = page.locator('#tabCFSCode_tmpl8_usrTasks_cddTaskcode_DropDown');
    this.dueWithinNumberEdit = page.locator('#tabCFSCode_tmpl8_usrTasks_txtDue');
    this.taskDetailsEdit = page.locator('#tabCFSCode_tmpl8_usrTasks_txttaskDetails');
    this.addButton = page.locator('#tabCFSCode_tmpl8_usrTasks_imgAdd');
    this.clearButton = page.locator('#tabCFSCode_tmpl8_usrTasks_imgClear');
    this.sOPTabResultTable = page.locator('#tabCFSCode_tmpl8_usrTasks_grdCFSTask');
    this.copyButton = page.locator('#tabCFSCode_tmpl8_usrTasks_cmdCopy');
    this.sortOrderEdit = page.locator('#tabCFSCode_tmpl8_usrTasks_TxtSort');
    this.taskCodeLable = page.locator('#tabCFSCode_tmpl8_usrTasks_lblTaskcode');
    this.taskDetailsLable = page.locator('#tabCFSCode_tmpl8_usrTasks_lblTaskdtl');
    this.taskResultTable = page.locator("tabCFSCode_tmpl8_usrTasks_grdCFSTask");
  }

  async selectAtCopyTaskFromComboBox(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.cFSCodeEntry.cFSCodeTasksTab.uICopyTaskFromComboBox,
    // BaseData.getSettingsModuleValue("CopyTaskFrom"));
  }

  async clickCopyButton(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.cFSCodeTasksTab.uICopyButton.click();
  }

  async SelectAtTaskCode(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.cFSCodeEntry.cFSCodeTasksTab.uITaskcodeComboBox,
    // BaseData.getSettingsModuleValue("TaskCode"));
    // uIMapSettings.cFSCodeEntry.cFSCodeTasksTab.uITaskcodeComboBox.sendKeys(Keys.TAB);
  }

  async SelectAtTaskCode1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.cFSCodeEntry.cFSCodeTasksTab.uITaskcodeComboBox,
    // BaseData.getSettingsModuleValue("TaskCode1"));
    // uIMapSettings.cFSCodeEntry.cFSCodeTasksTab.uITaskcodeComboBox.sendKeys(Keys.TAB);
  }

  async EnterAtDueNoOfDays(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.cFSCodeTasksTab.uIDueWithinNumberEdit
    // .sendKeys(BaseData.getSettingsModuleValue("DueNoOfDays"));
  }

  async EnterSortOrderAs0(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.cFSCodeTasksTab.uISortOrderEdit.sendKeys("0");
  }

  async EnterSortOrderAs1(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.cFSCodeTasksTab.uISortOrderEdit.sendKeys("1");
  }

  async verifyTaskCodeAsMandatory(): Promise<void> {
    // String clr = "rgba(153, 0, 0, 1)";
    // String color = uIMapSettings.cFSCodeEntry.cFSCodeTasksTab.uITaskCodeLable.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(clr, color);
  }

  async verifyTaskDetailsAsMandatory(): Promise<void> {
    // String clr = "rgba(153, 0, 0, 1)";
    // String color = uIMapSettings.cFSCodeEntry.cFSCodeTasksTab.uITaskDetailsLable.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(clr, color);
  }

  async enterAtTaskDetails(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.cFSCodeTasksTab.uITaskDetailsEdit
    // .sendKeys(BaseData.getSettingsModuleValue("TaskDetails"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.cFSCodeTasksTab.uIAddButton.click();
  }

  async verifyRequiredEntriesAreMissingAcknowledge(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1018) Required Entries are Missing");
  }

  async verifyAtTaskDescriptionInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.cFSCodeEntry.cFSCodeTasksTab.uITaskResultTable, "Description", 1);
    // // objectIdentification.manualIdentify.getGridCell(uIMapSettings.cFSCodeEntry.cFSCodeTasksTab.uITaskResultTable,
    // // "Description", 1).getText();
    // // String text =
    // // objectIdentification.manualIdentify.getGridCell(uIMapSettings.cFSCodeEntry.cFSCodeTasksTab.uITaskResultTable,"VICTI","Description").getText();
    // System.out.println(text);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("TaskDescription"), text);
  }

}

export class CFSCodeCADTabPage {
  readonly page: Page;
  readonly dispatchPriority1Edit: Locator;
  readonly dispatchPriority2Edit: Locator;
  readonly dispatchPriority3Edit: Locator;
  readonly receiveSrcOverrideComboBox: Locator;
  readonly reportCodeComboBox: Locator;
  readonly forceCADSFEntryCheckBox: Locator;
  readonly displayHAZMATFlagsCheckBox: Locator;
  readonly doNotSendSMSCTCheckBox: Locator;
  readonly hrReportableCheckBox24: Locator;
  readonly detailedCFSRequiredCheckBox: Locator;
  readonly primeUnitDispositionEdit: Locator;
  readonly managementCFSEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dispatchPriority1Edit = page.locator('#tabCFSCode_tmpl0_UsrCAD1_txtDPPriRange1');
    this.dispatchPriority2Edit = page.locator('#tabCFSCode_tmpl0_UsrCAD1_txtDPPriRange2');
    this.dispatchPriority3Edit = page.locator('#tabCFSCode_tmpl0_UsrCAD1_txtDPPri');
    this.receiveSrcOverrideComboBox = page.locator('#tabCFSCode_tmpl0_UsrCAD1_cddRso_DropDown');
    this.reportCodeComboBox = page.locator('#tabCFSCode_tmpl0_UsrCAD1_cddReportCode1_DropDown');
    this.forceCADSFEntryCheckBox = page.locator('#tabCFSCode_tmpl0_UsrCAD1_chkSF');
    this.displayHAZMATFlagsCheckBox = page.locator('#tabCFSCode_tmpl0_UsrCAD1_chkHazMat');
    this.doNotSendSMSCTCheckBox = page.locator('#tabCFSCode_tmpl0_UsrCAD1_chkDoNotSendSMS');
    this.hrReportableCheckBox24 = page.locator('#tabCFSCode_tmpl0_UsrCAD1_chklblIsTwrep');
    this.detailedCFSRequiredCheckBox = page.locator('#tabCFSCode_tmpl0_UsrCAD1_chkIsDetailCFS');
    this.primeUnitDispositionEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD1_lupPrimeDispo_CodeValue');
    this.managementCFSEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD1_lupMgmtCFS_CodeValue');
  }

  async TabDispatchPriority(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.cFSCodeCADTab.uIDispatchPriority1Edit.sendKeys(Keys.TAB);
    // uIMapSettings.cFSCodeEntry.cFSCodeCADTab.uIDispatchPriority2Edit.sendKeys(Keys.TAB);
    // uIMapSettings.cFSCodeEntry.cFSCodeCADTab.uIDispatchPriority3Edit.sendKeys("1");
  }

  async ClickDoNotSendSMSFromCTCheckbox(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.cFSCodeCADTab.uIDoNotSendSMSCTCheckBox.click();
  }

  async VerifyDoNotSendSMSFromCTCheckboxDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.cFSCodeEntry.cFSCodeCADTab.uIDoNotSendSMSCTCheckBox.isDisplayed());
  }

  async Click24HRReportableCheckbox(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.cFSCodeCADTab.uI24HRReportableCheckBox.click();
  }

  async ClickDisplayHAZMATFlagsCheckbox(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.cFSCodeCADTab.uIDisplayHAZMATFlagsCheckBox.click();
  }

  async ClickDetailedCFSRequiredCheckbox(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.cFSCodeCADTab.uIDetailedCFSRequiredCheckBox.click();
  }

  async SelectReportCode(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapSettings.cFSCodeEntry.cFSCodeCADTab.uIReportCodeComboBox);
    // uIMapSettings.cFSCodeEntry.cFSCodeCADTab.uIReportCodeComboBox.sendKeys(Keys.TAB);
  }

}

export class CFSCodeOthersTabPage {
  readonly page: Page;
  readonly reportingStructure2CodeEdit: Locator;
  readonly reportingStructure2Lookup: Locator;
  readonly reportingStructure3CodeEdit: Locator;
  readonly reportingStructure3Lookup: Locator;
  readonly trafficCFSClassComboBox: Locator;
  readonly questionnaireForCalltakerComboBox: Locator;
  readonly previewButton: Locator;
  readonly createCallCFSEnteredCheckBox: Locator;
  readonly questionnaireForCalltakerDropDown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.reportingStructure2CodeEdit = page.locator('#tabCFSCode_tmpl2_Usrreportclass2_lupReportClass1_CodeValue');
    this.reportingStructure2Lookup = page.locator('#tabCFSCode_tmpl2_Usrreportclass2_lupReportClass1_imgBtn');
    this.reportingStructure3CodeEdit = page.locator('#tabCFSCode_tmpl2_Usrreportclass2_lupReportClass2_CodeValue');
    this.reportingStructure3Lookup = page.locator('#tabCFSCode_tmpl2_Usrreportclass2_lupReportClass2_imgBtn');
    this.trafficCFSClassComboBox = page.locator('#tabCFSCode_tmpl2_Usrreportclass2_cddTraCFSClass_DropDown');
    this.questionnaireForCalltakerComboBox = page.locator('#tabCFSCode_tmpl2_Usrreportclass2_cddForm_DropDown');
    this.previewButton = page.locator('#tabCFSCode_tmpl2_Usrreportclass2_cmdPreview');
    this.createCallCFSEnteredCheckBox = page.locator('#tabCFSCode_tmpl2_Usrreportclass2_ChkIsCallCreate');
    this.questionnaireForCalltakerDropDown = page.locator('#tabCFSCode_tmpl2_Usrreportclass2_cddForm_DropDown');
  }

  async SelectReportingStructure2(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.cFSCodeOthersTab.uIReportingStructure2Lookup.click();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async SelectReportingStructure3(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.cFSCodeOthersTab.uIReportingStructure3Lookup.click();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async SelectTrafficCFSClass(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapSettings.cFSCodeEntry.cFSCodeOthersTab.uITrafficCFSClassComboBox);
    // uIMapSettings.cFSCodeEntry.cFSCodeOthersTab.uITrafficCFSClassComboBox.sendKeys(Keys.TAB);
  }

  async ClickCreateCallCFSEnteredCheckBox(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.cFSCodeOthersTab.uICreateCallCFSEnteredCheckBox.click();
  }

  async verifyAtQuestionnaireForCalltakerDropDown(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.cFSCodeOthersTab.uIQuestionnaireForCalltakerDropDown.click();
    // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(
    // uIMapSettings.cFSCodeEntry.cFSCodeOthersTab.uIQuestionnaireForCalltakerDropDown);
    // verify.ExpectedPropertyValueIsEqual(dropDownSelectedItem,
    // BaseData.getSettingsModuleValue("QuestionnaireForCalltaker"));
  }

  async verifyAtQuestionnaireForCalltakerDropDown(JsonKeyIndex: number): Promise<void> {
    // uIMapSettings.cFSCodeEntry.cFSCodeOthersTab.uIQuestionnaireForCalltakerDropDown.click();
    // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(
    // uIMapSettings.cFSCodeEntry.cFSCodeOthersTab.uIQuestionnaireForCalltakerDropDown);
    // verify.ExpectedPropertyValueIsEqual(dropDownSelectedItem,
    // BaseData.getSettingsModuleValue("QuestionnaireForCalltaker"+JsonKeyIndex));
  }

  async selectAtQuestionnaireForCalltaker(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.cFSCodeEntry.cFSCodeOthersTab.uIQuestionnaireForCalltakerDropDown,
    // BaseData.getSettingsModuleValue("QuestionnaireForCalltaker"));
  }

  async selectAtQuestionnaireForCalltaker(JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.cFSCodeEntry.cFSCodeOthersTab.uIQuestionnaireForCalltakerDropDown,
    // BaseData.getSettingsModuleValue("QuestionnaireForCalltaker"+JsonKeyIndex));
  }

}

export class CFSCodeSOPTabPage {
  readonly page: Page;
  readonly sOPTypeComboBox: Locator;
  readonly textNameEdit: Locator;
  readonly textNameLookup: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly sOPTabResultTable: Locator;
  readonly sOPTypeDropdownForFire: Locator;
  readonly textNameLookupForFire: Locator;
  readonly addButtonForFire: Locator;
  readonly sOPTabResultTableForFire: Locator;
  readonly textNameEditForFire: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sOPTypeComboBox = page.locator('#tabCFSCode_tmpl3_UsrSOP1_cddRecType_DropDown');
    this.textNameEdit = page.locator('#tabCFSCode_tmpl3_UsrSOP1_lupTextName_CodeValue');
    this.textNameLookup = page.locator('#tabCFSCode_tmpl3_UsrSOP1_lupTextName_imgBtn');
    this.addButton = page.locator('#tabCFSCode_tmpl3_UsrSOP1_cmdAdd');
    this.clearButton = page.locator('#tabCFSCode_tmpl3_UsrSOP1_cmdClear');
    this.sOPTabResultTable = page.locator('#tabCFSCode_tmpl3_UsrSOP1_grdCFSSop');
    this.sOPTypeDropdownForFire = page.locator('#tabCFSCode_tmpl1_UsrSOP2_cddSopType_DropDown');
    this.textNameLookupForFire = page.locator('#tabCFSCode_tmpl1_UsrSOP2_lupTextName_imgBtn');
    this.addButtonForFire = page.locator('#tabCFSCode_tmpl1_UsrSOP2_cmdAdd');
    this.sOPTabResultTableForFire = page.locator('#tabCFSCode_tmpl1_UsrSOP2_grdCFSSop');
    this.textNameEditForFire = page.locator('#tabCFSCode_tmpl1_UsrSOP2_lupTextName_CodeValue');
    this.saveButton = page.locator('#cmdSave');
  }

  async SelectSOPTypeAsAllCondition(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapSettings.cFSCodeEntry.cFSCodeSOPTab.uISOPTypeComboBox, "All Condition");
    // uIMapSettings.cFSCodeEntry.cFSCodeSOPTab.uISOPTypeComboBox.sendKeys(Keys.TAB);
  }

  async SelectTextName(): Promise<void> {
    // if (pdt.equalsIgnoreCase("Fire")) {
    // uIMapSettings.cFSCodeEntry.cFSCodeSOPTab.uITextNameLookupForFire.click();
    // popup.kPICodedLookup.randomKPIHelpSelect();
    // } else {
    // uIMapSettings.cFSCodeEntry.cFSCodeSOPTab.uITextNameLookup.click();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async ClickAdd(): Promise<void> {
    // if (pdt.equalsIgnoreCase("Fire")) {
    // uIMapSettings.cFSCodeEntry.cFSCodeSOPTab.uIAddButtonForFire.click();
    // Playback.controlReadyThreadWait();
    // } else {
    // uIMapSettings.cFSCodeEntry.cFSCodeSOPTab.uIAddButton.click();
    // Playback.controlReadyThreadWait();
  }

  async VerifySOPTypeAsAllConditionInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("All Condition",
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.cFSCodeEntry.cFSCodeSOPTab.uISOPTabResultTable, "SOP Type", rowIndex));
  }

  async SelectAtSOPType(i: number): Promise<void> {
    // if (pdt.equalsIgnoreCase("Fire")) {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.cFSCodeEntry.cFSCodeSOPTab.uISOPTypeDropdownForFire,
    // BaseData.getSettingsModuleValue("SOPType" + i));
    // //				objectIdentification.randomIdentify
    // //				.selectRadControlDropDownValueSelect(uIMapSettings.cFSCodeEntry.cFSCodeSOPTab.uISOPTypeComboBox);
    // uIMapSettings.cFSCodeEntry.cFSCodeSOPTab.uISOPTypeDropdownForFire.sendKeys(Keys.TAB);
    // } else {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.cFSCodeEntry.cFSCodeSOPTab.uISOPTypeComboBox,
    // BaseData.getSettingsModuleValue("SOPType" + i));
    // //			objectIdentification.randomIdentify
    // //			.selectRadControlDropDownValueSelect(uIMapSettings.cFSCodeEntry.cFSCodeSOPTab.uISOPTypeComboBox);
    // uIMapSettings.cFSCodeEntry.cFSCodeSOPTab.uISOPTypeComboBox.sendKeys(Keys.TAB);
  }

  async getRowCount(): Promise<number> {
    // int rowCount = 0;
    // if (pdt.equalsIgnoreCase("Fire")) {
    // if (objectIdentification.manualIdentify
    // .controlExist(uIMapSettings.cFSCodeEntry.cFSCodeSOPTab.uISOPTabResultTableForFire)) {
    // rowCount = objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapSettings.cFSCodeEntry.cFSCodeSOPTab.uISOPTabResultTableForFire);
    // } else {
    // if (objectIdentification.manualIdentify
    // .controlExist(uIMapSettings.cFSCodeEntry.cFSCodeSOPTab.uISOPTabResultTable)) {
    // rowCount = objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapSettings.cFSCodeEntry.cFSCodeSOPTab.uISOPTabResultTable);
    // System.out.println(rowCount);
    // return rowCount;
  }

  async VerifySOPTypeAddedInGrid(count: number): Promise<void> {
    // if (pdt.equalsIgnoreCase("Fire")) {
    // int rowCount = objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapSettings.cFSCodeEntry.cFSCodeSOPTab.uISOPTabResultTableForFire);
    // verify.ExpectedValueIsTrue(rowCount > count);
    // } else {
    // int rowCount = objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapSettings.cFSCodeEntry.cFSCodeSOPTab.uISOPTabResultTable);
    // verify.ExpectedValueIsTrue(rowCount > count);
  }

  async deleteAtTextNameInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerText
    // (uIMapSettings.cFSCodeEntry.cFSCodeSOPTab.uISOPTabResultTableForFire,BaseData.getSettingsModuleValue("TextName"));
    // popup.confirm.acceptPopup();
  }

}

export class CFSCodeLinkedCFSTabPage {
  readonly page: Page;
  readonly policeOEMOtherCFSLookup: Locator;
  readonly fireEMSOtherCFSLookup: Locator;
  readonly policeServiceTypeComboBox: Locator;
  readonly fireServiceTypeComboBox: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly linkedCFSTabResultTable: Locator;
  readonly policeCFSCodeEdit: Locator;
  readonly fireCFSCodeEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.policeOEMOtherCFSLookup = page.locator('#tabCFSCode_tmpl6_UsrCFS1_lupPoliceCFS_imgBtn');
    this.fireEMSOtherCFSLookup = page.locator('#tabCFSCode_tmpl6_UsrCFS1_lupFireCFS_imgBtn');
    this.policeServiceTypeComboBox = page.locator('#tabCFSCode_tmpl6_UsrCFS1_cddPolServiceType_DropDown');
    this.fireServiceTypeComboBox = page.locator('#tabCFSCode_tmpl6_UsrCFS1_cddFireServiceType_DropDown');
    this.addButton = page.locator('#tabCFSCode_tmpl6_UsrCFS1_imgAdd');
    this.clearButton = page.locator('#tabCFSCode_tmpl6_UsrCFS1_imgClear');
    this.linkedCFSTabResultTable = page.locator('#tabCFSCode_tmpl2_UsrCFS_Grd_CFS');
    this.policeCFSCodeEdit = page.locator('#tabCFSCode_tmpl6_UsrCFS1_lupPoliceCFS_CodeValue');
    this.fireCFSCodeEdit = page.locator('#tabCFSCode_tmpl6_UsrCFS1_lupFireCFS_CodeValue');
  }

  async SelectPoliceCFS(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.cFSCodeLinkedCFSTab.uIPoliceOEMOtherCFSLookup.click();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async SelectPoliceServiceTypeAsPolice(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.cFSCodeEntry.cFSCodeLinkedCFSTab.uIPoliceServiceTypeComboBox, "1 - Police");
    // uIMapSettings.cFSCodeEntry.cFSCodeLinkedCFSTab.uIPoliceServiceTypeComboBox.sendKeys(Keys.TAB);
  }

  async SelectFireCFS(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.cFSCodeLinkedCFSTab.uIFireEMSOtherCFSLookup.click();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async SelectFireServiceTypeAsFire(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.cFSCodeEntry.cFSCodeLinkedCFSTab.uIFireServiceTypeComboBox, "F - Fire");
    // uIMapSettings.cFSCodeEntry.cFSCodeLinkedCFSTab.uIFireServiceTypeComboBox.sendKeys(Keys.TAB);
  }

  async ClickAdd(): Promise<void> {
    // uIMapSettings.cFSCodeEntry.cFSCodeLinkedCFSTab.uIAddButton.click();
    // Playback.controlReadyThreadWait();
  }

  async VerifyFireCFSDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.cFSCodeEntry.cFSCodeLinkedCFSTab.uIFireCFSCodeEdit
    // .getAttribute("class").contains("textboxInactive"));
  }

  async deleteAtCFSCodeInGrid(i: number): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerText
    // (uIMapSettings.cFSCodeEntry.cFSCodeLinkedCFSTab.uILinkedCFSTabResultTable,BaseData.getSettingsModuleValue("CFSCode"+i));
  }

}

export class HazMatGuidePage {
  readonly page: Page;
  readonly nIOSHGuideEdit: Locator;
  readonly chemicalNameEdit: Locator;
  readonly dOTIDEdit: Locator;
  readonly dOTGuideEdit: Locator;
  readonly searchButton: Locator;
  readonly addNewLink: Locator;
  readonly hazMatResultTable: Locator;
  readonly cASEdit: Locator;
  readonly rTECSEdit: Locator;
  readonly cameoLinkEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nIOSHGuideEdit = page.locator('#txtChemicalGuide');
    this.chemicalNameEdit = page.locator('#txtChemicalName');
    this.dOTIDEdit = page.locator('#txtDotID');
    this.dOTGuideEdit = page.locator('#txtDotGuide');
    this.searchButton = page.locator('#cmdSearch');
    this.addNewLink = page.locator("(//span[contains(text(),\'Add New\')])");
    this.hazMatResultTable = page.locator('#grdHazMat');
    this.cASEdit = page.locator('#txtCASNo');
    this.rTECSEdit = page.locator('#txtRTECSNo');
    this.cameoLinkEdit = page.locator('#txtCameoLink');
  }

  async ClickAddNew(): Promise<void> {
    // uIMapSettings.hazMatGuide.uIAddNewLink.click();
    // Playback.controlReadyThreadWait();
  }

  async enterAtChemicalName(): Promise<void> {
    // uIMapSettings.hazMatGuide.uIChemicalNameEdit.sendKeys(BaseData.getSettingsModuleValue("ChemicalName"));
  }

  async selectRowByAtChemicalNameInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.hazMatGuide.uIHazMatResultTable, BaseData.getSettingsModuleValue("ChemicalName"));
  }

  async clickSearch(): Promise<void> {
    // uIMapSettings.hazMatGuide.uISearchButton.click();
  }

  async verifyAtChemicalNameInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapSettings.hazMatGuide.uIHazMatResultTable,
    // BaseData.getSettingsModuleValue("ChemicalName"))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("ChemicalName")));
  }

  async reloadScreen(): Promise<void> {
    // objectIdentification.manualIdentify.reloadScreen("HazMat Guide");
    // ;
  }

  async enterAtNioshGuide(): Promise<void> {
    // uIMapSettings.hazMatGuide.uINIOSHGuideEdit.sendKeys(BaseData.getSettingsModuleValue("NioshGuide"));
  }

  async verifyAtNioshGuideInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapSettings.hazMatGuide.uIHazMatResultTable,
    // BaseData.getSettingsModuleValue("NioshGuide"))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("NioshGuide")));
  }

  async enterAtDOTID(): Promise<void> {
    // uIMapSettings.hazMatGuide.uIDOTIDEdit.sendKeys(BaseData.getSettingsModuleValue("DOTID"));
  }

  async verifyAtDOTID(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.hazMatGuide.uIHazMatResultTable, BaseData.getSettingsModuleValue("DOTID")).getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("DOTID")));
  }

  async enterAtCAS(): Promise<void> {
    // uIMapSettings.hazMatGuide.uICASEdit.sendKeys(BaseData.getSettingsModuleValue("CAS"));
  }

  async verifyAtCAS(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.hazMatGuide.uIHazMatResultTable, BaseData.getSettingsModuleValue("CAS")).getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("CAS")));
  }

  async enterAtDOTGuide(): Promise<void> {
    // uIMapSettings.hazMatGuide.uIDOTGuideEdit.sendKeys(BaseData.getSettingsModuleValue("DOTGuide"));
  }

  async verifyAtDOTGuideInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapSettings.hazMatGuide.uIHazMatResultTable,
    // BaseData.getSettingsModuleValue("DOTGuide"))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("DOTGuide")));
  }

  async enterAtRTECS(): Promise<void> {
    // uIMapSettings.hazMatGuide.uIRTECSEdit.sendKeys(BaseData.getSettingsModuleValue("RTECS"));
  }

  async verifyAtRTECSInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.hazMatGuide.uIHazMatResultTable, BaseData.getSettingsModuleValue("RTECS")).getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("RTECS")));
  }

  async enterAtCAMEOLink(): Promise<void> {
    // uIMapSettings.hazMatGuide.uICameoLinkEdit.sendKeys(BaseData.getSettingsModuleValue("CameoLink"));
  }

  async verifyAtCAMEOLinkInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapSettings.hazMatGuide.uIHazMatResultTable,
    // BaseData.getSettingsModuleValue("CameoLink"))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("CameoLink")));
  }

  async verifyAtNioshGuideByDOTIDInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapSettings.hazMatGuide.uIHazMatResultTable,
    // BaseData.getSettingsModuleValue("DOTID"), "NIOSH Guide").getText();
    // System.out.println(text);
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getSettingsModuleValue("NioshGuide"));
  }

}

export class HazMatEntryPage {
  readonly page: Page;
  readonly nIOSHGuideEdit: Locator;
  readonly chemicalNameEdit: Locator;
  readonly dOTIDEdit: Locator;
  readonly dOTGuideEdit: Locator;
  readonly cASNOEdit: Locator;
  readonly rTECSNoEdit: Locator;
  readonly commentEdit: Locator;
  readonly custom1Edit: Locator;
  readonly custom2Edit: Locator;
  readonly saveButton: Locator;
  readonly saveandCloseButton: Locator;
  readonly resetButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly cameoLinkEdit: Locator;
  readonly noishGuideEdit: Locator;
  readonly rTECSEdit: Locator;
  readonly saveAndNewIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nIOSHGuideEdit = page.locator('#txtChemicalGuide');
    this.chemicalNameEdit = page.locator('#txtChemicalName');
    this.dOTIDEdit = page.locator('#txtDotID');
    this.dOTGuideEdit = page.locator('#txtDotGuide');
    this.cASNOEdit = page.locator('#txtCASNo');
    this.rTECSNoEdit = page.locator('#txtRTECSNo');
    this.commentEdit = page.locator('#txtCmt');
    this.custom1Edit = page.locator('#txtCustom1');
    this.custom2Edit = page.locator('#txtCustom2');
    this.saveButton = page.locator('#cmdSave');
    this.saveandCloseButton = page.locator('#cmdSaveNClose');
    this.resetButton = page.locator('#cmdRefresh');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'status\']/b");
    this.cameoLinkEdit = page.locator('#txtCameoLink');
    this.noishGuideEdit = page.locator('#txtChemicalGuide');
    this.rTECSEdit = page.locator('#txtRTECSNo');
    this.saveAndNewIcon = page.locator('#cmdSaveNew');
  }

  async EnterAtChemicalName(): Promise<void> {
    // uIMapSettings.hazMatEntry.uIChemicalNameEdit.sendKeys(BaseData.getSettingsModuleValue("ChemicalName"));
  }

  async EnterDOTID(): Promise<void> {
    // uIMapSettings.hazMatEntry.uIDOTIDEdit.sendKeys(String.valueOf(Randomized.getRandomNumber(3)));
  }

  async EnterDOTGuide(): Promise<void> {
    // uIMapSettings.hazMatEntry.uIDOTGuideEdit.sendKeys(Randomized.randomString(4)); // Method Updated
  }

  async EnterComments(): Promise<void> {
    // uIMapSettings.hazMatEntry.uICommentEdit.sendKeys(Randomized.randomString(50));
  }

  async verifyInfoIconNotDisplayed(): Promise<void> {
    // // *[contains(@src,'custinfo_Pursuit.gif')]
    // List<WebElement> allElements = Playback.driver.findElements(By.xpath("//*[contains(@src,'.gif')]"));
    // for (WebElement elem : allElements) {
    // String value = elem.getAttribute("src");
    // verify.ExpectedValueIsNotTrue(value.contains("custinfo_Pursuit"));
  }

  async Save(): Promise<void> {
    // uIMapSettings.hazMatEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async SaveNClose(): Promise<void> {
    // uIMapSettings.hazMatEntry.uISaveandCloseButton.click();
    // popup.confirm.yes();
  }

  async CloseScreen(): Promise<void> {
    // uIMapSettings.hazMatEntry.driver.close();
    // Playback.controlReadyThreadWait();
  }

  async clickRefreshIcon(): Promise<void> {
    // uIMapSettings.hazMatEntry.uIResetButton.click();
  }

  async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
    // try {
    // verify.ExpectedValueIsTrue(uIMapSettings.hazMatEntry.uIBottomLeftSideStatusBar.getText()
    // .contains("1002 - Addition Successful"));
    // } catch (AssertionError e) {
    // verify.ExpectedValueIsTrue(uIMapSettings.hazMatEntry.uIBottomLeftSideStatusBar.getText()
    // .contains("1002 - Addition successful"));
  }

  async enterChemicalName(): Promise<void> {
    // // uIMapSettings.hazMatEntry.uIChemicalNameEdit.sendKeys("AUTO CHEM");
    // uIMapSettings.hazMatEntry.uIChemicalNameEdit.sendKeys(randomized.randomString(5));
    // uIMapSettings.hazMatEntry.uIChemicalNameEdit.sendKeys(Keys.TAB);
  }

  async enterAtNoishGuide(): Promise<void> {
    // uIMapSettings.hazMatEntry.uINoishGuideEdit.sendKeys(BaseData.getSettingsModuleValue("NoishGuide"));
  }

  async enterAtChemicalName(): Promise<void> {
    // uIMapSettings.hazMatEntry.uIChemicalNameEdit.sendKeys(BaseData.getSettingsModuleValue("ChemicalName"));
  }

  async enterAtDotID(): Promise<void> {
    // uIMapSettings.hazMatEntry.uIDOTIDEdit.sendKeys(BaseData.getSettingsModuleValue("DotID"));
  }

  async enterAtDotGuide(): Promise<void> {
    // uIMapSettings.hazMatEntry.uIDOTGuideEdit.sendKeys(BaseData.getSettingsModuleValue("DotGuide"));
  }

  async enterAtCasNo(): Promise<void> {
    // uIMapSettings.hazMatEntry.uICASNOEdit.sendKeys(BaseData.getSettingsModuleValue("CasNo"));
  }

  async enterAtCameoLink(): Promise<void> {
    // uIMapSettings.hazMatEntry.uICameoLinkEdit.sendKeys(BaseData.getSettingsModuleValue("CameoLink"));
  }

  async enterAtComment(): Promise<void> {
    // uIMapSettings.hazMatEntry.uICommentEdit.sendKeys(BaseData.getSettingsModuleValue("Comment"));
  }

  async enterAtCustom1(): Promise<void> {
    // uIMapSettings.hazMatEntry.uICustom1Edit.sendKeys(BaseData.getSettingsModuleValue("Custom1"));
  }

  async enterAtCustom2(): Promise<void> {
    // uIMapSettings.hazMatEntry.uICustom2Edit.sendKeys(BaseData.getSettingsModuleValue("Custom2"));
  }

  async enterAtRTECS(): Promise<void> {
    // uIMapSettings.hazMatEntry.uIRTECSEdit.sendKeys(BaseData.getSettingsModuleValue("RTECS"));
  }

  async clickSaveAndNewIcon(): Promise<void> {
    // uIMapSettings.hazMatEntry.uISaveAndNewIcon.click();
    // popup.confirm.acceptPopup();
  }

  async verifyNIOSHGuideFieldIsEmpty(): Promise<void> {
    // boolean empty = uIMapSettings.hazMatEntry.uINIOSHGuideEdit.getText().isEmpty();
    // verify.ExpectedValueIsTrue(empty);
  }

  async verifyChemicalNameFieldIsEmpty(): Promise<void> {
    // boolean empty = uIMapSettings.hazMatEntry.uIChemicalNameEdit.getText().isEmpty();
    // verify.ExpectedValueIsTrue(empty);
  }

  async verifyDOTIDFieldIsEmpty(): Promise<void> {
    // boolean empty = uIMapSettings.hazMatEntry.uIDOTIDEdit.getText().isEmpty();
    // verify.ExpectedValueIsTrue(empty);
  }

  async verifyDOTGuideFieldIsEmpty(): Promise<void> {
    // boolean empty = uIMapSettings.hazMatEntry.uIDOTGuideEdit.getText().isEmpty();
    // verify.ExpectedValueIsTrue(empty);
  }

  async verifyCASFieldIsEmpty(): Promise<void> {
    // boolean empty = uIMapSettings.hazMatEntry.uICASNOEdit.getText().isEmpty();
    // verify.ExpectedValueIsTrue(empty);
  }

  async verifyRTECSFieldIsEmpty(): Promise<void> {
    // boolean empty = uIMapSettings.hazMatEntry.uIRTECSEdit.getText().isEmpty();
    // verify.ExpectedValueIsTrue(empty);
  }

  async verifyCAMEOLinkFieldIsEmpty(): Promise<void> {
    // boolean empty = uIMapSettings.hazMatEntry.uICameoLinkEdit.getText().isEmpty();
    // verify.ExpectedValueIsTrue(empty);
  }

  async verifyCommentFieldIsEmpty(): Promise<void> {
    // boolean empty = uIMapSettings.hazMatEntry.uICommentEdit.getText().isEmpty();
    // verify.ExpectedValueIsTrue(empty);
  }

  async verifyCustom1FieldIsEmpty(): Promise<void> {
    // boolean empty = uIMapSettings.hazMatEntry.uICustom1Edit.getText().isEmpty();
    // verify.ExpectedValueIsTrue(empty);
  }

  async verifyCustom2FieldIsEmpty(): Promise<void> {
    // boolean empty = uIMapSettings.hazMatEntry.uICustom2Edit.getText().isEmpty();
    // verify.ExpectedValueIsTrue(empty);
  }

  async enterAtNIOSHGuide(): Promise<void> {
    // uIMapSettings.hazMatEntry.uINIOSHGuideEdit.click();
    // uIMapSettings.hazMatEntry.uINIOSHGuideEdit.sendKeys(BaseData.getSettingsModuleValue("NIOSHGuide"));
  }

  async cutNIOSHGuide(): Promise<void> {
    // uIMapSettings.hazMatEntry.uINIOSHGuideEdit.click();
    // WebElement NIOSHGuideEdit = uIMapSettings.hazMatEntry.uINIOSHGuideEdit;
    // NIOSHGuideEdit.sendKeys(Keys.CONTROL + "a");
    // NIOSHGuideEdit.sendKeys(Keys.CONTROL + "x");
  }

}

export class QAFormsPage {
  readonly page: Page;
  readonly searchButton: Locator;
  readonly addNewButton: Locator;
  readonly addNewFormButton: Locator;
  readonly gridTable: Locator;
  readonly formRefNo: Locator;
  readonly manageRepositoryButton: Locator;
  readonly formNameEdit: Locator;
  readonly screenIdEdit: Locator;
  readonly screenIDDescription: Locator;
  readonly manageSectionsButton: Locator;
  readonly manageQuestionsButton: Locator;
  readonly copyToSameJurisButton: Locator;
  readonly copyToMultiJurisButton: Locator;
  readonly formRefNoCheckBox: Locator;
  readonly jurisDropdown: Locator;
  readonly enteredByEdit: Locator;
  readonly dateFrom: Locator;
  readonly dateTo: Locator;
  readonly includeSharedCheckbox: Locator;
  readonly sampleCheckbox: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly saveAndNewButton: Locator;
  readonly deleteButton: Locator;
  readonly contextToolBar: Locator;
  readonly formType: Locator;
  readonly includeInactiveCheckbox: Locator;
  readonly excelIcon: Locator;
  readonly nextButton: Locator;
  readonly prevButtonIsEnable: Locator;
  readonly nextButtonIsEnable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchButton = page.locator('#cmdSearch');
    this.addNewButton = page.locator("(//span[(text()=\'Add New\')])");
    this.addNewFormButton = page.locator("(//span[(text()=\'Add New Form\')])");
    this.gridTable = page.locator('#grdFormSrch');
    this.formRefNo = page.locator('#txtRefNo');
    this.manageRepositoryButton = page.locator("//span[contains(text(),\'Manage Repository\')]");
    this.formNameEdit = page.locator('#txtFormName');
    this.screenIdEdit = page.locator('#lupReportID_CodeValue');
    this.screenIDDescription = page.locator('#lupReportID_CodeDescription');
    this.manageSectionsButton = page.locator("//span[contains(text(),\'Manage Sections\')]");
    this.manageQuestionsButton = page.locator("//span[contains(text(),\'Manage Questions\')]");
    this.copyToSameJurisButton = page.locator("//span[contains(text(),\'Copy To Same Juris\')]");
    this.copyToMultiJurisButton = page.locator("//span[contains(text(),\'Copy To Multi Juris\')]");
    this.formRefNoCheckBox = page.locator("//div[@id=\'grdFormSrch\']/table//tr//td[contains(text(),\'REQA20\')]");
    this.jurisDropdown = page.locator('#lstJuris');
    this.enteredByEdit = page.locator('#lupOffPFID_CodeValue');
    this.dateFrom = page.locator('#DttmFrom_Date_KPIDttmCtrl');
    this.dateTo = page.locator('#DttmEnd_Date_KPIDttmCtrl');
    this.includeSharedCheckbox = page.locator('#chkShared');
    this.sampleCheckbox = page.locator('#chkIsSample');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.saveAndNewButton = page.locator('#cmdSaveNAddNew');
    this.deleteButton = page.locator('#cmdDelete');
    this.contextToolBar = page.locator('#UltraWebMenu1');
    this.formType = page.locator('#chkFormType');
    this.includeInactiveCheckbox = page.locator('#chkInactive');
    this.excelIcon = page.locator("//img[@title=\'Export to Excel\']");
    this.nextButton = page.locator('#grdFormSrch_ctl00_lnkbtnNext');
    this.prevButtonIsEnable = page.locator('#grdFormSrch_ctl00_lnkbtnPrev');
    this.nextButtonIsEnable = page.locator('#grdFormSrch_ctl00_lnkbtnNext');
  }

  async selectManageRepositoryUsingFormRef(): Promise<void> {
    // objectIdentification.manualIdentify.selectContextMenuItemInTheGridRow(uIMapSettings.qaForms.uIGridTable,
    // BaseData.getGeoModuleValue("FormRef"), "Manage Repository");
  }

  async clickOnSearch(): Promise<void> {
    // uIMapSettings.qaForms.uISearchButton.click();
  }

  async clickOnGridrow(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // Playback.controlReadyThreadWait();
    // objectIdentification.randomIdentify.selectRandomGridRow(uIMapSettings.qaForms.uIGridTable);
  }

  async clickAddNew(): Promise<void> {
    // uIMapSettings.qaForms.uIAddNewButton.click();
    // Playback.controlReadyThreadWait();
  }

  async enterAtFormRef(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapSettings.qaForms.uIFormRefNo.sendKeys(BaseData.getSettingsModuleValue("FormRefNo"));
  }

  async selectCheckBoxOfTheRowByFormRefNO(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(uIMapSettings.qaForms.uIGridTable,
    // BaseData.getSettingsModuleValue("FormRefNo"));
  }

  async selectCheckBoxOfTheRowByFormRefNO1(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(uIMapSettings.qaForms.uIGridTable,
    // BaseData.getSettingsModuleValue("FormRefNo1"));
  }

  async clickManageRepository(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapSettings.qaForms.uIManageRepositoryButton.click();
  }

  async clickManageSections(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapSettings.qaForms.uIManageSectionsButton.click();
  }

  async enterAtFormNameEdit(): Promise<void> {
    // uIMapSettings.qaForms.uIFormNameEdit.click();
    // uIMapSettings.qaForms.uIFormNameEdit.clear();
    // uIMapSettings.qaForms.uIFormNameEdit.sendKeys(BaseData.getSettingsModuleValue("FormName"));
  }

  async enterAtFormNameEdit1(): Promise<void> {
    // uIMapSettings.qaForms.uIFormNameEdit.click();
    // uIMapSettings.qaForms.uIFormNameEdit.clear();
    // uIMapSettings.qaForms.uIFormNameEdit.sendKeys(BaseData.getSettingsModuleValue("FormName1"));
  }

  async enterAtFormNameEdit2(): Promise<void> {
    // uIMapSettings.qaForms.uIFormNameEdit.click();
    // uIMapSettings.qaForms.uIFormNameEdit.clear();
    // uIMapSettings.qaForms.uIFormNameEdit.sendKeys(BaseData.getSettingsModuleValue("FormName2"));
  }

  async selectCheckBoxOfTheRowByFormName(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(uIMapSettings.qaForms.uIGridTable,
    // BaseData.getSettingsModuleValue("FormName"));
  }

  async selectCheckBoxInGrid(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // objectIdentification.randomIdentify.selectRandomGridRowCheckbox(uIMapSettings.qaForms.uIGridTable);
  }

  async selectCheckBoxOfTheRowByFormName1(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(uIMapSettings.qaForms.uIGridTable,
    // BaseData.getSettingsModuleValue("FormName1"));
  }

  async selectCheckBoxOfTheRowByFormName2(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(uIMapSettings.qaForms.uIGridTable,
    // BaseData.getSettingsModuleValue("FormName2"));
  }

  async enterAtScreenID(): Promise<void> {
    // uIMapSettings.qaForms.uIScreenIdEdit.sendKeys(BaseData.getSettingsModuleValue("ScreenID"));
    // uIMapSettings.qaForms.uIScreenIdEdit.sendKeys(Keys.TAB);
  }

  async VerifyNoRecordAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
  }

  async verifyScreenIDDescription(): Promise<void> {
    // String text = uIMapSettings.qaForms.uIScreenIDDescription.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getSettingsModuleValue("ScreenIDDescription"));
  }

  async verifyAtFormRefNoInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.qaForms.uIGridTable, BaseData.getSettingsModuleValue("FormRefNo")).getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("FormRefNo")));
  }

  async clickManageQuestions(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapSettings.qaForms.uIManageQuestionsButton.click();
  }

  async clickCopyToSameJuris(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapSettings.qaForms.uICopyToSameJurisButton.click();
  }

  async clickCopyToMultiJuris(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapSettings.qaForms.uICopyToMultiJurisButton.click();
  }

  async clickOnAtFormRefCheckbox(): Promise<void> {
    // uIMapSettings.qaForms.uIFormRefNoCheckBox.click();
  }

  async selectJurisAsBlank(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.qaForms.uIJurisDropdown, "  --  ");
  }

  async verifyAtFormRefNo1InGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapSettings.qaForms.uIGridTable,
    // BaseData.getSettingsModuleValue("FormName1"), "Form Ref#").getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("FormRefNo1")));
  }

  async verifyEnteredByFieldGreyedOut(): Promise<void> {
    // uIMapSettings.qaForms.uIEnteredByEdit.getAttribute("class").contains("textboxInactive");
  }

  async verifyEnteredByFieldNotGreyedOut(): Promise<void> {
    // uIMapSettings.qaForms.uIEnteredByEdit.isEnabled();
  }

  async enterAtEnteredBy(): Promise<void> {
    // uIMapSettings.qaForms.uIEnteredByEdit.sendKeys(BaseData.getSettingsModuleValue("PFNo"));
    // uIMapSettings.qaForms.uIEnteredByEdit.sendKeys(Keys.TAB);
  }

  async verifyAtEnteredByInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.qaForms.uIGridTable, BaseData.getSettingsModuleValue("EnteredBy")).getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("EnteredBy")));
  }

  async enterAtDateFrom(): Promise<void> {
    // uIMapSettings.qaForms.uIDateFrom.sendKeys(BaseData.getSettingsModuleValue("DateFrom"));
    // uIMapSettings.qaForms.uIDateFrom.sendKeys(Keys.TAB);
  }

  async verifyAtDateFromInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.qaForms.uIGridTable, BaseData.getSettingsModuleValue("DateFrom"))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("DateFrom")));
  }

  async enterAtDateTo(): Promise<void> {
    // uIMapSettings.qaForms.uIDateTo.sendKeys(BaseData.getSettingsModuleValue("DateFrom"));
  }

  async verifyAtDateToInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.qaForms.uIGridTable, BaseData.getSettingsModuleValue("DateTo"))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("DateTo")));
  }

  async verifyAtFormNameInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.qaForms.uIGridTable, BaseData.getSettingsModuleValue("FormName"))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("FormName")));
  }

  async closeScreen(): Promise<void> {
    // uIMapSettings.qaForms.driver.close();
  }

  async verifyActivityAsOf(): Promise<void> {
    // String currentDate = randomized.getCurrentDate();
    // WebElement ActivityAs = objectIdentification.manualIdentify.getGridCell(uIMapSettings.qaForms.uIGridTable,
    // BaseData.getHomeModuleValue("FormName"), "Active As of");
    // String ActivityAsOf = ActivityAs.getText();
    // verify.ExpectedPropertyValueIsEqual(currentDate, ActivityAsOf);
  }

  async selectJurisAsBC(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.qaForms.uIJurisDropdown,
    // "BC - Brown County Police Department");
  }

  async selectIncludeSharedCheckbox(): Promise<void> {
    // uIMapSettings.qaForms.uIIncludeSharedCheckbox.click();
  }

  async verifySampleCheckboxIsDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapSettings.qaForms.uISampleCheckbox.isEnabled());
  }

  async verifyRecordsListed(): Promise<void> {
    // int gridTableRowsCount = objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapSettings.qaForms.uIGridTable);
    // System.out.println(gridTableRowsCount);
    // verify.ExpectedValueIsTrue(gridTableRowsCount > 0);
  }

  async clickSampleCheckbox(): Promise<void> {
    // uIMapSettings.qaForms.uISampleCheckbox.click();
  }

  async verifySampleCheckboxIsChecked(): Promise<void> {
    // System.out.println(uIMapSettings.qaForms.uISampleCheckbox.getAttribute("checked"));
    // verify.ExpectedValueIsTrue(uIMapSettings.qaForms.uISampleCheckbox.isSelected());
  }

  async verifySaveButtonDisabled(): Promise<void> {
    // boolean enabled = uIMapSettings.qaForms.uISaveButton.isEnabled();
    // verify.ExpectedValueIsFalse(enabled);
  }

  async verifySaveAndCloseButtonDisabled(): Promise<void> {
    // boolean enabled = uIMapSettings.qaForms.uISaveNCloseButton.isEnabled();
    // verify.ExpectedValueIsFalse(enabled);
  }

  async verifySaveAndNewButtonDisabled(): Promise<void> {
    // boolean enabled = uIMapSettings.qaForms.uISaveAndNewButton.isEnabled();
    // verify.ExpectedValueIsFalse(enabled);
  }

  async verifyDeleteButtonDisabled(): Promise<void> {
    // boolean enabled = uIMapSettings.qaForms.uIDeleteButton.isEnabled();
    // verify.ExpectedValueIsFalse(enabled);
  }

  async verifySampleCheckboxIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.qaForms.uISampleCheckbox.isEnabled());
  }

  async clearFormName(): Promise<void> {
    // uIMapSettings.qaForms.uIFormNameEdit.clear();
  }

  async verifyAtFormNameInGrid(i: number): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapSettings.qaForms.uIGridTable,
    // BaseData.getSettingsModuleValue("FormName" + i), "Name").getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("FormName" + i), text);
  }

  async rightClickAndSelectOptionByFormNameInGrid(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectContextMenuItemInTheGridRow(uIMapSettings.qaForms.uIGridTable,
    // BaseData.getSettingsModuleValue("FormName" + i), BaseData.getSettingsModuleValue("ItemValue"));
  }

  async selectAtFormType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.qaForms.uIFormType,
    // BaseData.getSettingsModuleValue("FormType"));
  }

  async selectAtGridRowByFormRef(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapSettings.qaForms.uIGridTable,
    // BaseData.getSettingsModuleValue("Form Ref"));
  }

  async verifyManageRepositoryButtonIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.qaForms.uIManageRepositoryButton.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async reloadScreen(): Promise<void> {
    // objectIdentification.manualIdentify.reloadWindowUsingTitle("QA Forms");
  }

  async selectAtFormType(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.qaForms.uIFormType,
    // BaseData.getSettingsModuleValue("FormType" + i));
  }

  async verifyAtTypeColumnInGrid(i: number): Promise<void> {
    // List<String> columnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.qaForms.uIGridTable, "Type");
    // String settingsModuleValue = BaseData.getSettingsModuleValue("Type" + i);
    // for (String value : columnValues) {
    // verify.ExpectedPropertyValueIsEqual(settingsModuleValue, value);
  }

  async selectRandomGridRow(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow(uIMapSettings.qaForms.uIGridTable);
  }

  async clickIncludeInactiveCheckbox(): Promise<void> {
    // uIMapSettings.qaForms.uIIncludeInactiveCheckbox.click();
  }

  async reloadQAFormsTab(): Promise<void> {
    // objectIdentification.manualIdentify.reloadScreen("QA Forms");
  }

  async rightClickVerifyOptionsByFormNameInGrid(): Promise<void> {
    // Object obj = new String[] { "Manage Section", "Manage Questions", "Manage Repository", "Copy To Same Juris",
    // "Copy To Multi Juris" };
    // String[] text = (String[]) obj;
    // WebElement cellText = uIMapSettings.qaForms.uIGridTable.findElement(By.xpath(
    // ".//table/tbody/tr/td[contains(text(), '" + BaseData.getSettingsModuleValue("FormName") + "')]"));
    // objectIdentification.manualIdentify.scrollIntoView(cellText);
    // objectIdentification.actionBuilder.ContextClick(cellText);
    // List<WebElement> elements = cellText.findElements(By.xpath("//div[contains(@id,'UltraWebMenu1')]//li"));
    // String[] actualList = elements.stream().map(el -> el.getText().trim()) // get and clean up text
    // .toArray(String[]::new);
    // // Compare lists
    // verify.ExpectedValueIsTrue(Arrays.equals(text, actualList), actualList + " is not Equals to --> " + text);
  }

  async clickExcelIcon(): Promise<void> {
    // uIMapSettings.qaForms.uIExcelIcon.click();
  }

  async verifyExcelColumnName(columnName: string[], i: number): Promise<void> {
    // verify.ExpectedValueIsTrue(columnName.contains(BaseData.getSettingsModuleValue("ColumnName" + i)));
  }

  async verifyManageRepositoryButtonIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(
    // uIMapSettings.qaForms.uIManageRepositoryButton.findElement(By.xpath(".//..//parent::li"))
    // .getAttribute("class").contains("RootDisabled"),
    // "Manage Repository link button is not enabled --> ");
  }

  async verifyIncludingInactiveFormsIsAvailableInGrid(): Promise<void> {
    // List<WebElement> checkBoxes = objectIdentification.manualIdentify
    // .getGridTableColumnCells(uIMapSettings.qaForms.uIGridTable, "Is Active");
    // for (WebElement checkbox : checkBoxes) {
    // WebElement element = checkbox.findElement(By.xpath(".//img"));
    // if (element.getAttribute("title").equals("Checked")) {
    // verify.ExpectedPropertyValueIsEqual(element.getCssValue("color"), "rgba(0, 0, 0, 1)");
    // } else {
    // verify.ExpectedPropertyValueIsEqual(element.getCssValue("color"), "rgba(128, 128, 128, 1)");
  }

  async verifyAtJurisInGrid(i: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.qaForms.uIGridTable, "Juris");
    // verify.ExpectedValueIsTrue(gridTableColumnValues.contains(BaseData.getSettingsModuleValue("Juris" + i)));
  }

  async clickNextButton(): Promise<void> {
    // uIMapSettings.qaForms.uINextButton.click();
  }

  async verifyPrevButtonIsEnable(): Promise<void> {
    // boolean enabled = uIMapSettings.qaForms.uIPrevButtonIsEnable.isEnabled();
    // verify.ExpectedValueIsTrue(enabled);
  }

  async clickPrevButton(): Promise<void> {
    // uIMapSettings.qaForms.uIPrevButtonIsEnable.click();
  }

  async verifyNextButtonIsEnable(): Promise<void> {
    // boolean enabled = uIMapSettings.qaForms.uINextButtonIsEnable.isEnabled();
    // verify.ExpectedValueIsTrue(enabled);
  }

  async selectAtGridRowByFormRef(JsonKeyIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText
    // (uIMapSettings.qaForms.uIGridTable,BaseData.getSettingsModuleValue("Form Ref"+JsonKeyIndex));
  }

  async clearFormRef(): Promise<void> {
    // uIMapSettings.qaForms.uIFormRefNo.click();
    // uIMapSettings.qaForms.uIFormRefNo.clear();
  }

}

export class ApprovalParameterPage {
  readonly page: Page;
  readonly jurisComboBox: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly approvalProcessComboBox: Locator;
  readonly selectAllCheckBox: Locator;
  readonly refreshButton: Locator;
  readonly enableApprovalProcessComboBox: Locator;
  readonly reportLockingDropdown: Locator;
  readonly approvalParamterGrid: Locator;
  readonly superviorSignatureRequiredDropDown: Locator;
  readonly officerSignatureRequiredDropDown: Locator;
  readonly printIcon: Locator;
  readonly enableApprovalProcessLabel: Locator;
  readonly approvalProcessLabel: Locator;
  readonly approvalRoutingDefaultLabel: Locator;
  readonly allowRoutingDefaultsOverrideLabel: Locator;
  readonly reportLockingProcedureLabel: Locator;
  readonly supervisorsMayApproveTheirOwnReportsLabel: Locator;
  readonly supervisorsCanViewReportsForAllStatusLabel: Locator;
  readonly officerSignatureRequiredLabel: Locator;
  readonly supervisorsCanEditReportsForAllStatusLabel: Locator;
  readonly supervisorSignatureRequiredLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.jurisComboBox = page.locator('#lstJuris');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.approvalProcessComboBox = page.locator('#cddRepositoryID_DropDown');
    this.selectAllCheckBox = page.locator('#chkExternal');
    this.refreshButton = page.locator('#cmdRefresh');
    this.enableApprovalProcessComboBox = page.locator('#param_1_Dyn_DropDown');
    this.reportLockingDropdown = page.locator('#param_5_Dyn_DropDown');
    this.approvalParamterGrid = page.locator('#grdApproval');
    this.superviorSignatureRequiredDropDown = page.locator('#param_12_Dyn_DropDown');
    this.officerSignatureRequiredDropDown = page.locator('#param_10_Dyn_DropDown');
    this.printIcon = page.locator('#cmdPrint');
    this.enableApprovalProcessLabel = page.locator('#lblparam_1_Dyn');
    this.approvalProcessLabel = page.locator('#lblRepository');
    this.approvalRoutingDefaultLabel = page.locator('#lblparam_3_Dyn');
    this.allowRoutingDefaultsOverrideLabel = page.locator('#lblparam_4_Dyn');
    this.reportLockingProcedureLabel = page.locator('#lblparam_5_Dyn');
    this.supervisorsMayApproveTheirOwnReportsLabel = page.locator('#lblparam_6_Dyn');
    this.supervisorsCanViewReportsForAllStatusLabel = page.locator('#lblparam_7_Dyn');
    this.officerSignatureRequiredLabel = page.locator('#lblparam_10_Dyn');
    this.supervisorsCanEditReportsForAllStatusLabel = page.locator('#lblparam_11_Dyn');
    this.supervisorSignatureRequiredLabel = page.locator('#lblparam_12_Dyn');
  }

  async selectAtApprovalProcess(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.approvalParameter.uIApprovalProcessComboBox,
    // BaseData.getSettingsModuleValue("ApprovalProcess"));
    // Playback.pageLoadThreadWait();
  }

  async setEnableApprovalProcessAsTrue(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapSettings.approvalParameter.uIEnableApprovalProcessComboBox, "True");
    // if (Playback.browserType.contains("Chrome")) {
    // popup.confirm.yesIfWindowExist();
    // else {
    // popup.switchToConfirm();
    // Playback.controlReadyThreadWait();
    // popup.confirm.yesIfWindowExist();
  }

  async saveScreen(): Promise<void> {
    // uIMapSettings.approvalParameter.uIsaveButton.click();
    // if (Playback.browserType.contains("Chrome")) {
    // popup.confirm.yes();
    // else {
    // popup.switchToConfirm();
    // Playback.controlReadyThreadWait();
    // popup.confirm.yes();
  }

  async selectAtApprovalProcess1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.approvalParameter.uIApprovalProcessComboBox,
    // BaseData.getSettingsModuleValue("ApprovalProcess1"));
    // Playback.pageLoadThreadWait();
    // if (Playback.browserType.contains("Chrome")) {
    // popup.confirm.yesIfWindowExist();
    // else {
    // popup.switchToConfirm();
    // Playback.controlReadyThreadWait();
    // popup.confirm.yesIfWindowExist();
  }

  async closeScreen(): Promise<void> {
    // uIMapSettings.approvalParameter.driver.close();
  }

  async selectReportLockingProcedureAsOptionalWhenApproved(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.approvalParameter.uIReportLockingDropdown, "Optional when approved");
  }

  async selectReportLockingProcedureAsNever(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapSettings.approvalParameter.uIReportLockingDropdown, "Never");
  }

  async selectAtReportLockingProcedure(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.approvalParameter.uIReportLockingDropdown,
    // BaseData.getSettingsModuleValue("ReportLocking"));
  }

  async selectReportLockingProcedureAsWhenApproved(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapSettings.approvalParameter.uIReportLockingDropdown, "When approved");
  }

  async setEnableApprovalProcessAsFalse(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapSettings.approvalParameter.uIEnableApprovalProcessComboBox, "False");
    // if (Playback.browserType.contains("Chrome")) {
    // popup.confirm.yesIfWindowExist();
    // else {
    // popup.switchToConfirm();
    // Playback.controlReadyThreadWait();
    // popup.confirm.yesIfWindowExist();
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapSettings.approvalParameter.uIPrintIcon.click();
  }

  async verifyApprovalProcessLabelIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.approvalParameter.uIApprovalProcessLabel.isDisplayed());
  }

  async verifyEnableApprovalProcessLabelIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.approvalParameter.uIEnableApprovalProcessLabel.isDisplayed());
  }

  async verifyApprovalRoutingDefaultIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.approvalParameter.uIApprovalRoutingDefaultLabel.isDisplayed());
  }

  async verifyAllowRoutingDefaultsOverrideIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapSettings.approvalParameter.uIAllowRoutingDefaultsOverrideLabel.isDisplayed());
  }

  async verifyReportLockingProcedureIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.approvalParameter.uIReportLockingProcedureLabel.isDisplayed());
  }

  async verifySupervisorsMayApproveTheirOwnReportsIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapSettings.approvalParameter.uISupervisorsMayApproveTheirOwnReportsLabel.isDisplayed());
  }

  async verifySupervisorsCanViewReportsForAllStatusIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapSettings.approvalParameter.uISupervisorsCanViewReportsForAllStatusLabel.isDisplayed());
  }

  async verifyOfficerSignatureRequiredIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.approvalParameter.uIOfficerSignatureRequiredLabel.isDisplayed());
  }

  async verifySupervisorsCanEditReportsForAllStatusIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapSettings.approvalParameter.uISupervisorsCanEditReportsForAllStatusLabel.isDisplayed());
  }

  async verifySupervisorSignatureRequiredIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapSettings.approvalParameter.uISupervisorSignatureRequiredLabel.isDisplayed());
  }

  async selectAtModuleInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.approvalParameter.uIApprovalParamterGrid, BaseData.getSettingsModuleValue("Module"));
  }

  async selectAtOfficerSignatureRequired(JSonKEyINdex: number): Promise<void> {
    // if (JSonKEyINdex == 0) {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.approvalParameter.uIOfficerSignatureRequiredDropDown,
    // BaseData.getSettingsModuleValue("Officer"));
    // else {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.approvalParameter.uIOfficerSignatureRequiredDropDown,
    // BaseData.getSettingsModuleValue("Officer" + JSonKEyINdex));
  }

  async selectOfficerSignatureRequiredAsFalse(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapSettings.approvalParameter.uIOfficerSignatureRequiredDropDown, "False");
  }

  async selectAtSupervisorSignatureRequired(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.approvalParameter.uISuperviorSignatureRequiredDropDown,
    // BaseData.getSettingsModuleValue("Supervisor"));
  }

  async selectAtModuleInGrid(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.approvalParameter.uIApprovalParamterGrid, BaseData.getSettingsModuleValue("Module"+i));
  }

}

export class ReportRepositoryPage {
  readonly page: Page;
  readonly reportRepositoryResultTable: Locator;
  readonly screenIDEdit: Locator;
  readonly formNameEdit: Locator;
  readonly searchButton: Locator;
  readonly categoryComboBox: Locator;
  readonly typeComboBox: Locator;
  readonly addNewButton: Locator;
  readonly nextButton: Locator;
  readonly prevButton: Locator;
  readonly fileNameEdit: Locator;
  readonly nameColumnHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.reportRepositoryResultTable = page.locator('#grdFrmRepository');
    this.screenIDEdit = page.locator('#lupReportID_CodeValue');
    this.formNameEdit = page.locator('#txtFrmSubCategory');
    this.searchButton = page.locator('#cmdSearch');
    this.categoryComboBox = page.locator('#cddFrmCat_DropDown');
    this.typeComboBox = page.locator('#lstFormType');
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.nextButton = page.locator('#grdFrmRepository_ctl00_lnkbtnNext');
    this.prevButton = page.locator('#grdFrmRepository_ctl00_lnkbtnPrev');
    this.fileNameEdit = page.locator('#txtFormName');
    this.nameColumnHeader = page.locator("//th[text()=\'Name\']");
  }

  async clickSearch(): Promise<void> {
    // uIMapSettings.reportRepository.uISearchButton.click();
  }

  async selectTypeAsForm(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.reportRepository.uITypeComboBox,
    // "Form");
  }

  async enterScreenIDAs2544(): Promise<void> {
    // uIMapSettings.reportRepository.uIScreenIDEdit.clear();
    // uIMapSettings.reportRepository.uIScreenIDEdit.sendKeys("2544");
    // uIMapSettings.reportRepository.uIScreenIDEdit.sendKeys(Keys.TAB);
  }

  async enterScreenIDAs1387(): Promise<void> {
    // uIMapSettings.reportRepository.uIScreenIDEdit.clear();
    // uIMapSettings.reportRepository.uIScreenIDEdit.sendKeys("1387");
  }

  async selectCheckBoxInGrid(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectRandomGridRowCheckbox(uIMapSettings.reportRepository.uIReportRepositoryResultTable);
  }

  async close(): Promise<void> {
    // uIMapSettings.reportRepository.driver.close();
  }

  async selectAtGridrowByName(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.reportRepository.uIReportRepositoryResultTable,
    // BaseData.getSettingsModuleValue("Name"));
  }

  async selectGridrow(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectRandomGridRow(uIMapSettings.reportRepository.uIReportRepositoryResultTable);
  }

  async selectAtType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.reportRepository.uITypeComboBox,
    // BaseData.getSettingsModuleValue("Type"));
  }

  async selectAtType1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.reportRepository.uITypeComboBox,
    // BaseData.getSettingsModuleValue("Type1"));
  }

  async selectAtGridrowByName1(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.reportRepository.uIReportRepositoryResultTable,
    // BaseData.getSettingsModuleValue("Name1"));
  }

  async selectAtCategory(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.reportRepository.uICategoryComboBox,
    // BaseData.getSettingsModuleValue("Category"));
  }

  async enterAtReportOrFormName(): Promise<void> {
    // uIMapSettings.reportRepository.uIFormNameEdit.sendKeys(BaseData.getSettingsModuleValue("FormName"));
    // uIMapSettings.reportRepository.uIFormNameEdit.sendKeys(Keys.TAB);
  }

  async verifyAtNameInGrid(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.reportRepository.uIReportRepositoryResultTable,
    // BaseData.getSettingsModuleValue("Name"));
    // verify.ExpectedValueIsTrue(
    // gridRowByCellInnerText.getText().contains(BaseData.getSettingsModuleValue("Name")));
  }

  async clickAddNew(): Promise<void> {
    // uIMapSettings.reportRepository.uIAddNewButton.click();
  }

  async verifyNextButtonIsDisplayedAndClick(): Promise<void> {
    // int size = 1;
    // boolean displayed = false;
    // for (int i = 0; i < size; i++) {
    // if (objectIdentification.manualIdentify
    // .controlExist(uIMapSettings.reportRepository.uINextButton) == true) {
    // displayed = uIMapSettings.reportRepository.uINextButton.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
    // uIMapSettings.reportRepository.uINextButton.click();
    // // displayed = true;
    // size++;
    // } else {
    // System.out.println("Next button not displayed");
  }

  async verifyPreviousButtonIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.reportRepository.uIPrevButton.isDisplayed());
  }

  async clickNextButton(): Promise<void> {
    // uIMapSettings.reportRepository.uINextButton.click();
  }

  async clickPreviousButton(): Promise<void> {
    // uIMapSettings.reportRepository.uIPrevButton.click();
  }

  async verifyAtColumnValuesAreSortedAscendingOrderForInteger(i: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedAscendingForIntegers(
    // uIMapSettings.reportRepository.uIReportRepositoryResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i),
    // objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.reportRepository.uIReportRepositoryResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i)));
  }

  async verifyAtColumnValuesAreSortedDescendingOrderForInteger(i: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedDescendingForIntegers(
    // uIMapSettings.reportRepository.uIReportRepositoryResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i),
    // objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.reportRepository.uIReportRepositoryResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i)));
  }

  async clickNameColumnHeader(): Promise<void> {
    // uIMapSettings.reportRepository.uINameColumnHeader.click();
  }

  async verifyAtColumnValuesAreSortedAscendingOrderForCheckBox(i: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedAscendingForCheckbox(
    // uIMapSettings.reportRepository.uIReportRepositoryResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i),
    // objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.reportRepository.uIReportRepositoryResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i)));
  }

  async verifyAtColumnValuesAreSortedDescendingOrderForCheckBox(i: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedDescendingForCheckbox(
    // uIMapSettings.reportRepository.uIReportRepositoryResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i),
    // objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.reportRepository.uIReportRepositoryResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i)));
  }

  async verifyAtColumnValuesAreSortedAscendingOrder(i: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedAscendingCaseInsensitive(
    // uIMapSettings.reportRepository.uIReportRepositoryResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i),
    // objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.reportRepository.uIReportRepositoryResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i)));
  }

  async verifyAtColumnValuesAreSortedDescendingOrder(i: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedDescendingCaseInsensitive(
    // uIMapSettings.reportRepository.uIReportRepositoryResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i),
    // objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.reportRepository.uIReportRepositoryResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i)));
  }

  async enterAtScreenID(): Promise<void> {
    // uIMapSettings.reportRepository.uIScreenIDEdit.sendKeys(BaseData.getSettingsModuleValue("ScreenID"));
    // uIMapSettings.reportRepository.uIScreenIDEdit.sendKeys(Keys.TAB);
  }

}

export class ReportRepositoryEntryPage {
  readonly page: Page;
  readonly fileSelect: Locator;
  readonly fileSelectButton: Locator;
  readonly uploadPDF: Locator;
  readonly bottomMesssageTextView: Locator;
  readonly saveButton: Locator;
  readonly reportTypeDropDown: Locator;
  readonly reportOrFormNameEdit: Locator;
  readonly categoryInput: Locator;
  readonly categoryDropDown: Locator;
  readonly passwordRequiredCheckBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fileSelect = page.locator("//input[contains(@value,\'Select\')]");
    this.fileSelectButton = page.locator("//span[contains(@class,\'ruFileWrap\')]");
    this.uploadPDF = page.locator('#cmdUpload');
    this.bottomMesssageTextView = page.locator("//td[@class = \'statusBar\']");
    this.saveButton = page.locator('#cmdSave');
    this.reportTypeDropDown = page.locator('#cboReportType_DropDown');
    this.reportOrFormNameEdit = page.locator('#txtFrmName');
    this.categoryInput = page.locator('#radFrmCat_Input');
    this.categoryDropDown = page.locator('#radFrmCat_DropDown');
    this.passwordRequiredCheckBox = page.locator('#chkpassword');
  }

  async clickSelectButton(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapSettings.reportRepositoryEntry.uIFileSelectButton.click();
    // Playback.controlReadyThreadWait();
  }

  async clickUploadPDFButton(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapSettings.reportRepositoryEntry.uIUploadPDF.click();
    // Playback.controlReadyThreadWait();
  }

  async verifyUploadedSuccessfulFooterStatusMessage(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.reportRepositoryEntry.uIBottomMesssageTextView.getText()
    // .contains("Successfully file uploaded the into above uploaded path"));
  }

  async selectPDFAtTestcaseID(): Promise<void> {
    // String TestCaseID = BaseData.getSettingsModuleValue("TestCaseID");
    // objectIdentification.filesHandle.fileAttach.fileUpload(TestCaseID);
  }

  async close(): Promise<void> {
    // // TODO Auto-generated method stub
    // uIMapSettings.reportRepositoryEntry.driver.close();
  }

  async selectPDFFile(): Promise<void> {
    // objectIdentification.filesHandle.fileAttach.fileUpload(BaseData.getSettingsModuleValue("UploadFileName"));
  }

  async selectRDLFile(): Promise<void> {
    // objectIdentification.filesHandle.fileAttach.fileUploadAutoIt("Journal.rdl");
  }

  async enterAtScreenID(): Promise<void> {
    // uIMapSettings.reportRepository.uIScreenIDEdit.sendKeys(BaseData.getSettingsModuleValue("ScreenID"));
  }

  async enterAtFileName(): Promise<void> {
    // uIMapSettings.reportRepository.uIfileNameEdit.sendKeys(BaseData.getSettingsModuleValue("FileName"));
  }

  async save(): Promise<void> {
    // uIMapSettings.reportRepositoryEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async selectAtCategory(): Promise<void> {
    // uIMapSettings.reportRepositoryEntry.uICategoryInput.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelectForFire(
    // uIMapSettings.reportRepositoryEntry.uICategoryDropDown,
    // BaseData.getSettingsModuleValue("Category"));
  }

  async SelectAtReportType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.reportRepositoryEntry.uIReportTypeDropDown,
    // BaseData.getSettingsModuleValue("ReportType"));
  }

  async enterAtReportOrFormName(): Promise<void> {
    // uIMapSettings.reportRepositoryEntry.uIReportOrFormNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ReportOrFormName"));
  }

  async checkPasswordRequiredCheckBox(): Promise<void> {
    // uIMapSettings.reportRepositoryEntry.uIPasswordRequiredCheckBox.click();
  }

}

export class CodedMapPage {
  readonly page: Page;
  readonly interfaceDropDown: Locator;
  readonly addNewButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.interfaceDropDown = page.locator('#cddInterface_DropDown');
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
  }

  async selectAtInterface(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.codedMap.uIInterfaceDropDown,
    // BaseData.getSettingsModuleValue("Interface"));
    // uIMapSettings.codedMap.uIInterfaceDropDown.sendKeys(Keys.TAB);
  }

  async clickAddNewButton(): Promise<void> {
    // uIMapSettings.codedMap.uIAddNewButton.click();
  }

  async verifyAtInterfaceDropdownList(): Promise<void> {
    // uIMapSettings.codedMap.uIInterfaceDropDown.click();
    // List<String> dropDownValues = objectIdentification.manualIdentify
    // .getDropDownValues(uIMapSettings.codedMap.uIInterfaceDropDown);
    // verify.ExpectedValueIsTrue(dropDownValues.contains(BaseData.getSettingsModuleValue("Interface")));
  }

}

export class CodedMapDetailPage {
  readonly page: Page;
  readonly codeTypeEdit: Locator;
  readonly addNewButton: Locator;
  readonly popUpPhoenixValueEdit: Locator;
  readonly popUpPhoenixValueSearchIcon: Locator;
  readonly popUpMapCodeValueEdit: Locator;
  readonly popUpMapDescriptionEdit: Locator;
  readonly popUpAddButton: Locator;
  readonly popUpCancelButton: Locator;
  readonly codedMapDetailTable: Locator;
  readonly interfaceDropDown: Locator;
  readonly bottomMesssageTextView: Locator;

  constructor(page: Page) {
    this.page = page;
    this.codeTypeEdit = page.locator('#lupCodeID_CodeValue');
    this.addNewButton = page.locator('#cmdAddNew');
    this.popUpPhoenixValueEdit = page.locator('#lupCodedValue_CodeValue');
    this.popUpPhoenixValueSearchIcon = page.locator('#lupCodedValue_imgBtn');
    this.popUpMapCodeValueEdit = page.locator('#txtMapCodeValue');
    this.popUpMapDescriptionEdit = page.locator('#txtMapDescription');
    this.popUpAddButton = page.locator('#cmdAdd');
    this.popUpCancelButton = page.locator('#cmdClear');
    this.codedMapDetailTable = page.locator('#grdCodedMapDetail');
    this.interfaceDropDown = page.locator('#cddInterface_DropDown');
    this.bottomMesssageTextView = page.locator('#KPILabel4');
  }

  async enterAtCodeType(): Promise<void> {
    // uIMapSettings.codedMapDetail.uICodeTypeEdit.sendKeys(BaseData.getSettingsModuleValue("CodeType"));
    // uIMapSettings.codedMapDetail.uICodeTypeEdit.sendKeys(Keys.TAB);
  }

  async clickAddNew(): Promise<void> {
    // uIMapSettings.codedMapDetail.uIAddNewButton.click();
  }

  async enterAtPopUpPhoenixValue(): Promise<void> {
    // uIMapSettings.codedMapDetail.uIPopUpPhoenixValueEdit
    // .sendKeys(BaseData.getSettingsModuleValue("PhoenixValue"));
    // uIMapSettings.codedMapDetail.uIPopUpPhoenixValueEdit.sendKeys(Keys.TAB);
  }

  async clickPopUpPhoenixValueSearchIcon(): Promise<void> {
    // uIMapSettings.codedMapDetail.uIPopUpPhoenixValueSearchIcon.click();
  }

  async enterAtMapCodeValue(): Promise<void> {
    // uIMapSettings.codedMapDetail.uIPopUpMapCodeValueEdit
    // .sendKeys(BaseData.getSettingsModuleValue("MapCodeValue"));
    // uIMapSettings.codedMapDetail.uIPopUpMapCodeValueEdit.sendKeys(Keys.TAB);
  }

  async enterAtMapDescription(): Promise<void> {
    // uIMapSettings.codedMapDetail.uIPopUpMapDescriptionEdit
    // .sendKeys(BaseData.getSettingsModuleValue("MapDescription"));
    // uIMapSettings.codedMapDetail.uIPopUpMapDescriptionEdit.sendKeys(Keys.TAB);
  }

  async clickPopUpAddButton(): Promise<void> {
    // uIMapSettings.codedMapDetail.uIPopUpAddButton.click();
  }

  async enterAtMapCodeValue1(): Promise<void> {
    // uIMapSettings.codedMapDetail.uIPopUpMapCodeValueEdit
    // .sendKeys(BaseData.getSettingsModuleValue("MapCodeValue1"));
    // uIMapSettings.codedMapDetail.uIPopUpMapCodeValueEdit.sendKeys(Keys.TAB);
  }

  async enterAtMapDescription1(): Promise<void> {
    // uIMapSettings.codedMapDetail.uIPopUpMapDescriptionEdit
    // .sendKeys(BaseData.getSettingsModuleValue("MapDescription1"));
    // uIMapSettings.codedMapDetail.uIPopUpMapDescriptionEdit.sendKeys(Keys.TAB);
  }

  async verifyAtMapCodeValueInGrid(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.codedMapDetail.uICodedMapDetailTable,
    // BaseData.getSettingsModuleValue("MapCodeValue"));
    // verify.ExpectedValueIsTrue(
    // gridRowByCellInnerText.getText().contains(BaseData.getSettingsModuleValue("MapCodeValue")));
  }

  async verifyAtMapCodeValue1InGrid(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.codedMapDetail.uICodedMapDetailTable,
    // BaseData.getSettingsModuleValue("MapCodeValue1"));
    // verify.ExpectedValueIsTrue(
    // gridRowByCellInnerText.getText().contains(BaseData.getSettingsModuleValue("MapCodeValue1")));
  }

  async verifyAtInterfaceDropDown(): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.codedMapDetail.uIInterfaceDropDown);
    // verify.ExpectedPropertyValueIsEqual(dropDownSelectedItem, BaseData.getSettingsModuleValue("Interface"));
  }

  async verifyUpdatedSuccessfullyBottomMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("Updated Successfully For All Juris",
    // uIMapSettings.codedMapDetail.uIBottomMesssageTextView.getText());
  }

}

export class DistributionListPage {
  readonly page: Page;
  readonly searchButton: Locator;
  readonly addNewButton: Locator;
  readonly uIListNameContainsEdit: Locator;
  readonly distributionsearchGrid: Locator;
  readonly printIcon: Locator;
  readonly excelIcon: Locator;
  readonly jurisDropDown: Locator;
  readonly exportToExcelIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchButton = page.locator('#cmdSearch');
    this.addNewButton = page.locator("//span[text()=\'Add New\']");
    this.uIListNameContainsEdit = page.locator('#txtFormName');
    this.distributionsearchGrid = page.locator('#grdDistributionSrch');
    this.printIcon = page.locator("//img[@title=\'Print\']");
    this.excelIcon = page.locator("//img[@title=\'Export to Excel\']");
    this.jurisDropDown = page.locator('#lstJuris');
    this.exportToExcelIcon = page.locator("//img[@title=\'Export to Excel\']");
  }

  async clickSearch(): Promise<void> {
    // uIMapSettings.distributionList.uISearchButton.click();
  }

  async selectByDistributionName(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.distributionList.uIDistributionsearchGrid,
    // (BaseData.getSettingsModuleValue("DistributionList")));
  }

  async CloseDistributionScreen(): Promise<void> {
    // Playback.threadWait();
    // objectIdentification.manualIdentify.selectRightClickTabMenuByTabText("Distribution List", "Close Tab");
  }

  async clickAddNew(): Promise<void> {
    // uIMapSettings.distributionList.uIAddNewButton.click();
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapSettings.distributionList.uIPrintIcon.click();
  }

  async clickExcelIcon(): Promise<void> {
    // uIMapSettings.distributionList.uIExcelIcon.click();
  }

  async verifyGridIsEmpty(): Promise<void> {
    // verify.ExpectedIntergerValueIsEqualToActual(0, objectIdentification.manualIdentify.getGridTableRowsCount(
    // uIMapSettings.distributionList.uIDistributionsearchGrid), "Grid contains data -->");
  }

  async selectAtJuris(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.distributionList.uIJurisDropDown,
    // BaseData.getSettingsModuleValue("Juris"));
  }

  async clickExportToExcelIcon(): Promise<void> {
    // uIMapSettings.distributionList.uIExportToExcelIcon.click();
  }

  async getDistributionListColumnValue(): Promise<string[]> {
    // List<String> DistributionListNameValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.distributionList.uIDistributionsearchGrid, "Distribution List Name");
    // return DistributionListNameValues;
  }

  async verifyTextColumnValueBetweenExcelAndGrid(Excelvalue1: string[], Gridvalue: string[]): Promise<void> {
    // Collections.sort(Excelvalue1);
    // Collections.sort(Gridvalue);
    // List<String> cleanedSentences = Excelvalue1.stream().map(s -> s.replaceAll("\\s+", " ").trim())
    // .collect(Collectors.toList());
    // boolean equals = cleanedSentences.equals(Gridvalue);
    // verify.ExpectedValueIsTrue(equals);
  }

  async getDescriptionColumnValue(): Promise<string[]> {
    // List<String> DistributionListNameValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.distributionList.uIDistributionsearchGrid, "Description");
    // return DistributionListNameValues;
  }

}

export class DistributionEntryPage {
  readonly page: Page;
  readonly distributionListNameEdit: Locator;
  readonly pFEdit: Locator;
  readonly addMultiplePFButton: Locator;
  readonly addButton: Locator;
  readonly distributionEntryhGrid: Locator;
  readonly save: Locator;
  readonly saveAndClose: Locator;
  readonly pFNoCheckbox: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly printIcon: Locator;
  readonly discriptionEdit: Locator;
  readonly emailRadioButton: Locator;
  readonly emailEdit: Locator;
  readonly nameEdit: Locator;
  readonly otherRadioButton: Locator;
  readonly interfaceTypeDropdown: Locator;
  readonly keyEdit: Locator;
  readonly memberDescriptionEdit: Locator;
  readonly pFDescriptionEdit: Locator;
  readonly pFLookUpIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.distributionListNameEdit = page.locator('#txtDistribution');
    this.pFEdit = page.locator('#lupPF_CodeValue');
    this.addMultiplePFButton = page.locator('#cmdAddMulPF');
    this.addButton = page.locator('#cmdAdd');
    this.distributionEntryhGrid = page.locator('#grdDistribution');
    this.save = page.locator('#cmdSave');
    this.saveAndClose = page.locator('#cmdSaveNClose');
    this.pFNoCheckbox = page.locator('#rdnPF');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'status\']/b");
    this.printIcon = page.locator('#cmdPrint');
    this.discriptionEdit = page.locator('#txtDescription');
    this.emailRadioButton = page.locator("//input[@id=\'rdnEmail\']");
    this.emailEdit = page.locator('#txtemail');
    this.nameEdit = page.locator('#txtname');
    this.otherRadioButton = page.locator("//input[@id=\'rdnOther\']");
    this.interfaceTypeDropdown = page.locator('#lstInterfaceType_DropDown');
    this.keyEdit = page.locator('#txtkey');
    this.memberDescriptionEdit = page.locator("//input[@id=\'txtDesc\']");
    this.pFDescriptionEdit = page.locator('#lupPF_CodeDescription');
    this.pFLookUpIcon = page.locator('#lupPF_imgBtn');
  }

  async verifyAtDistributionListName(): Promise<void> {
    // String PF = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.distributionEntry.uIDistributionEntryhGrid, "Text", 0).getText();
    // verify.ExpectedPropertyValueIsEqual(PF, BaseData.getSettingsModuleValue("PF"));
  }

  async verifyAtDistributionListNameIsNotPresent(): Promise<void> {
    // //			String PFIsFalse = objectIdentification.manualIdentify
    // //					.getGridCell(uIMapSettings.distributionEntry.uIDistributionEntryhGrid, "Text", 0).getText();
    // //			System.out.println(PFIsFalse);
    // //			verify.ExpectedPropertyValueIsEqual(PFIsFalse, "");
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.distributionEntry.uIDistributionEntryhGrid, "Text");
    // verify.ExpectedValueIsFalse(gridTableColumnValues.contains(BaseData.getSettingsModuleValue("PF")),
    // BaseData.getSettingsModuleValue("PF") + " is contains under the grid -->");
  }

  async closeSreen(): Promise<void> {
    // uIMapSettings.distributionEntry.driver.close();
  }

  async saveScreen(): Promise<void> {
    // uIMapSettings.distributionEntry.uISave.click();
    // popup.confirm.yes();
  }

  async verifyPFNameInGrid(): Promise<void> {
    // String gridRowByCellInnerText = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.distributionEntry.uIDistributionEntryhGrid,
    // BaseData.getSettingsModuleValue("PFCode"))
    // .getText();
    // System.out.println(gridRowByCellInnerText);
    // String PFNameInGrid = objectIdentification.manualIdentify.getGridCell(
    // uIMapSettings.distributionEntry.uIDistributionEntryhGrid, gridRowByCellInnerText, "Text").getText();
    // System.out.println(PFNameInGrid + "verify");
    // verify.ExpectedPropertyValueIsEqual(PFNameInGrid, BaseData.getSettingsModuleValue("PF"));
  }

  async enterDistributionListName(): Promise<void> {
    // uIMapSettings.distributionEntry.uIDistributionListNameEdit.sendKeys("Auto Distribution");
    // uIMapSettings.distributionEntry.uIDistributionListNameEdit.sendKeys(Keys.TAB);
  }

  async clickPFNOCheckBox(): Promise<void> {
    // uIMapSettings.distributionEntry.uIPFNoCheckbox.click();
  }

  async enterPFNo(): Promise<void> {
    // uIMapSettings.distributionEntry.uIPFEdit.sendKeys("AUTO");
    // uIMapSettings.distributionEntry.uIPFEdit.sendKeys(Keys.TAB);
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.distributionEntry.uIAddButton.click();
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // try {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.distributionEntry.uIBottomLeftSideStatusBar.getText());
    // } catch (AssertionError e) {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition successful",
    // uIMapSettings.distributionEntry.uIBottomLeftSideStatusBar.getText());
  }

  async verifyUpdateSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1003 - Update Successful",
    // uIMapSettings.distributionEntry.uIBottomLeftSideStatusBar.getText());
  }

  async enterAtPFNo(i: number): Promise<void> {
    // if (i == 0) {
    // uIMapSettings.distributionEntry.uIPFEdit.sendKeys(BaseData.getSettingsModuleValue("PFNo"));
    // uIMapSettings.distributionEntry.uIPFEdit.sendKeys(Keys.TAB);
    // } else {
    // uIMapSettings.distributionEntry.uIPFEdit.sendKeys(BaseData.getSettingsModuleValue("PFNo" + i));
    // uIMapSettings.distributionEntry.uIPFEdit.sendKeys(Keys.TAB);
  }

  async enterAtDistributionListName(): Promise<void> {
    // uIMapSettings.distributionEntry.uIDistributionListNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("DistributionListName"));
    // uIMapSettings.distributionEntry.uIDistributionListNameEdit.sendKeys(Keys.TAB);
  }

  async enterAtDistributionListName(i: number): Promise<void> {
    // uIMapSettings.distributionEntry.uIDistributionListNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("DistributionListName") + i);
    // uIMapSettings.distributionEntry.uIDistributionListNameEdit.sendKeys(Keys.TAB);
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapSettings.distributionEntry.uIPrintIcon.click();
  }

  async verifySelectReportWindowIsPresent(): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.windowHandle.windowExist("Select Report"));
  }

  async saveAndCloseScreen(): Promise<void> {
    // uIMapSettings.distributionEntry.uIsaveAndClose.click();
    // popup.confirm.yes();
  }

  async deleteGridRowByKeyInGridWithConfirmPopup(): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
    // uIMapSettings.distributionEntry.uIDistributionEntryhGrid, BaseData.getSettingsModuleValue("Key"));
    // popup.confirm.yes();
  }

  async verifyGridRowMarkedForDeleteByKey(): Promise<void> {
    // List<String> gridRowCellsValues = objectIdentification.manualIdentify
    // .getGridRowCellsValues(objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.distributionEntry.uIDistributionEntryhGrid,
    // BaseData.getSettingsModuleValue("Key")));
    // verify.ExpectedPropertyValueIsEqual("X", gridRowCellsValues.get(1));
  }

  async enterAtDescription(): Promise<void> {
    // uIMapSettings.distributionEntry.uIDiscriptionEdit.sendKeys(BaseData.getSettingsModuleValue("Description"));
  }

  async clickEmailRadioButton(): Promise<void> {
    // uIMapSettings.distributionEntry.uIEmailRadioButton.click();
  }

  async enterAtEmail(i: number): Promise<void> {
    // uIMapSettings.distributionEntry.uIEmailEdit.sendKeys(BaseData.getSettingsModuleValue("Email" + i));
  }

  async enterAtName(): Promise<void> {
    // uIMapSettings.distributionEntry.uINameEdit.sendKeys(BaseData.getSettingsModuleValue("Name"));
  }

  async verifyEmailTextboxIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.distributionEntry.uIEmailEdit.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verifyNameTextboxIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.distributionEntry.uINameEdit.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verifyAtKeyByTypeInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.distributionEntry.uIDistributionEntryhGrid,
    // BaseData.getSettingsModuleValue("Type"), "Key")
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getSettingsModuleValue("Key"));
  }

  async verify1014NotAValidEmailAddress(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1014) Not a valid Email Address");
  }

  async clickOtherRadioButton(): Promise<void> {
    // uIMapSettings.distributionEntry.uIOtherRadioButton.click();
  }

  async selectAtInterfaceType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.distributionEntry.uIInterfaceTypeDropdown,
    // BaseData.getSettingsModuleValue("InterfaceType"));
  }

  async enterAtKey(): Promise<void> {
    // uIMapSettings.distributionEntry.uIKeyEdit.sendKeys(BaseData.getSettingsModuleValue("Key"));
  }

  async enterAtMemberDescription(): Promise<void> {
    // uIMapSettings.distributionEntry.uIMemberDescriptionEdit
    // .sendKeys(BaseData.getSettingsModuleValue("MemberDiscription"));
  }

  async verifyInterfaceTypeIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.distributionEntry.uIInterfaceTypeDropdown.isDisplayed());
  }

  async verifyKeyIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.distributionEntry.uIKeyEdit.isDisplayed());
  }

  async verifyMemberDescriptionIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.distributionEntry.uIMemberDescriptionEdit.isDisplayed());
  }

  async verifyAtTypeInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapSettings.distributionEntry.uIDistributionEntryhGrid,
    // BaseData.getSettingsModuleValue("Type"))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("Type")));
  }

  async verifyAtKeyInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapSettings.distributionEntry.uIDistributionEntryhGrid,
    // BaseData.getSettingsModuleValue("Key"))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("Key")));
  }

  async verifyAtTextInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapSettings.distributionEntry.uIDistributionEntryhGrid,
    // BaseData.getSettingsModuleValue("Text"))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("Text")));
  }

  async verifyPFRadioButtonIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.distributionEntry.uIPFNoCheckbox.isDisplayed());
  }

  async clickAddMultiplePFButton(): Promise<void> {
    // uIMapSettings.distributionEntry.uIAddMultiplePFButton.click();
  }

  async verifyAtTypeInGridByKey(i: number): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.distributionEntry.uIDistributionEntryhGrid,
    // BaseData.getSettingsModuleValue("Key" + i), "Type")
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("Type" + i)));
  }

  async verifyAtKeyInGrid(i: number): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapSettings.distributionEntry.uIDistributionEntryhGrid,
    // BaseData.getSettingsModuleValue("Key" + i))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("Key" + i)));
  }

  async verifyAtTextInGrid(i: number): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapSettings.distributionEntry.uIDistributionEntryhGrid,
    // BaseData.getSettingsModuleValue("Text" + i))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("Text" + i)));
  }

  async verifyPFIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.distributionEntry.uIPFEdit.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed, "PF Code Value is not displayed -->");
    // boolean description = uIMapSettings.distributionEntry.uIPFDescriptionEdit.isDisplayed();
    // verify.ExpectedValueIsTrue(description, "PF Code Description is not displayed -->");
    // boolean lookup = uIMapSettings.distributionEntry.uIPFLookUpIcon.isDisplayed();
    // verify.ExpectedValueIsTrue(lookup, "PF Code Description is not displayed -->");
  }

}

export class TextSearchHelpWindowPage {
  readonly page: Page;
  readonly excelIcon: Locator;
  readonly textTable: Locator;
  readonly searchWordsEdit: Locator;
  readonly textType: Locator;
  readonly searchButton: Locator;
  readonly dateEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.excelIcon = page.locator("//img[@src=\'/KPIImages/ico/16_excel.gif\']");
    this.textTable = page.locator("//div[@id=\'grdText\']");
    this.searchWordsEdit = page.locator('#txtSearchWords');
    this.textType = page.locator('#cddTextType_DropDown');
    this.searchButton = page.locator('#cmdSearch');
    this.dateEdit = page.locator('#dttTextDttmFrom_KPIDttmCtrl');
  }

  async clickExcelIcon(): Promise<void> {
    // uIMapSettings.textSearchHelpWindow.uIExcelIcon.click();
  }

  async readSearchWord(): Promise<string> {
    // String text = uIMapSettings.textSearchHelpWindow.uISearchWordsEdit.getAttribute("value");
    // return text;
  }

  async verifyTheTextInGrid(text: string): Promise<void> {
    // List<WebElement> allRows = uIMapSettings.textSearchHelpWindow.uITextTable
    // .findElements(By.xpath("//div[@id='grdText']//tbody[@mkr='rows']//tr"));
    // for (WebElement row : allRows) {
    // List<WebElement> allCells = row.findElements(By.xpath(".//td"));
    // for (WebElement cell : allCells) {
    // if (cell.isDisplayed()) {
    // if (cell.getText().contains(text)) {
    // verify.ExpectedValueIsTrue(cell.getText().contains(text));
  }

  async selectAtTextType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.textSearchHelpWindow.uITextType,
    // BaseData.getHomeModuleValue("TextType"));
  }

  async clickSearchButton(): Promise<void> {
    // uIMapSettings.textSearchHelpWindow.uISearchButton.click();
  }

  async deleteFromDate(): Promise<void> {
    // // uIMapSettings.textSearchHelpWindow.uIDateEdit.click();
    // uIMapSettings.textSearchHelpWindow.uIDateEdit.sendKeys(Keys.CONTROL, "a");
    // uIMapSettings.textSearchHelpWindow.uIDateEdit.sendKeys(Keys.BACK_SPACE);
  }

  async selectAtRowInGridUsingIndex(indexNo: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByIndex(uIMapSettings.textSearchHelpWindow.uITextTable,
    // indexNo);
  }

}

export class ViewHistoryWindowPage {
  readonly page: Page;
  readonly parameterIDEdit: Locator;
  readonly searchButton: Locator;
  readonly historyTable: Locator;
  readonly moduleDropDownArrow: Locator;
  readonly moduleDropDown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.parameterIDEdit = page.locator("//input[@id=\'txtParamID\']");
    this.searchButton = page.locator('#cmdSearch');
    this.historyTable = page.locator("//div[@id=\'grdHistory_ctl00\']");
    this.moduleDropDownArrow = page.locator('#lstModule_Arrow');
    this.moduleDropDown = page.locator('#lstModule_DropDown');
  }

  async enterAtParameterID(): Promise<void> {
    // uIMapSettings.viewHistoryWindow.uIParameterIDEdit.sendKeys(BaseData.getSettingsModuleValue("ParameterID"));
  }

  async clickSearchButton(): Promise<void> {
    // uIMapSettings.viewHistoryWindow.uISearchButton.click();
  }

  async readValuesInGrid(ColumnName: string, rowIndex: number): Promise<string> {
    // String cellvalue = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.viewHistoryWindow.uIHistoryTable, ColumnName, rowIndex).getText();
    // System.out.println(cellvalue + ColumnName);
    // return cellvalue;
  }

  async verifyCellValueWithExpectedData(cellValue: string, jsonData: string): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(jsonData, cellValue);
  }

  async verifyPFColumnCheckboxDisplayed(rowIndex: number): Promise<void> {
    // WebElement checkbox = Playback.driver
    // .findElement(By.xpath("(//div[@id='grdHistory_ctl00_880_0_5909_0']//td/img)[" + rowIndex + "]"));
    // verify.ExpectedValueIsTrue(checkbox.isDisplayed());
  }

  async clickModuleDropDownArrow(): Promise<void> {
    // uIMapSettings.viewHistoryWindow.uIModuleDropDownArrow.click();
  }

  async selectAtModule(): Promise<void> {
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect(
    // uIMapSettings.viewHistoryWindow.uIModuleDropDown, BaseData.getSettingsModuleValue("Module"));
  }

  async verifyAtParameterIDByModuleInGrid(): Promise<void> {
    // WebElement element = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.viewHistoryWindow.uIHistoryTable, BaseData.getSettingsModuleValue("Module"));
    // WebElement rows = element
    // .findElement(By.xpath(".//following-sibling::tr//table[@role='grid']//tr[@role='row']"));
    // String gridCell = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.viewHistoryWindow.uIHistoryTable, rows, "Parameter ID")
    // .getAttribute("val");
    // verify.ExpectedPropertyValueIsEqual(gridCell, BaseData.getSettingsModuleValue("ParameterID"));
  }

  async verifyAtParameterNameByModuleInGrid(): Promise<void> {
    // WebElement element = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.viewHistoryWindow.uIHistoryTable, BaseData.getSettingsModuleValue("Module"));
    // String text = element.findElement(By.xpath(
    // ".//following-sibling::tr//table[@role='grid']//tr[@role='row']/td[text()='Enable SSL for Sending Email']"))
    // .getText();
    // //			String gridCell = objectIdentification.manualIdentify.getGridCell(uIMapSettings.viewHistoryWindow.uIHistoryTable, rows, "Parameter Name").getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getSettingsModuleValue("ParameterName"));
  }

  async verifyAtNewValueByParameterIDInGrid(): Promise<void> {
    // WebElement element = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.viewHistoryWindow.uIHistoryTable, BaseData.getSettingsModuleValue("ParameterID"));
    // WebElement rows = element
    // .findElement(By.xpath(".//following-sibling::tr//table[@role='grid']//tr[@role='row']"));
    // WebElement gridCell = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.viewHistoryWindow.uIHistoryTable, rows, "New Value");
    // verify.ExpectedPropertyValueIsEqual(gridCell.getText(), BaseData.getSettingsModuleValue("NewValue"));
  }

  async reset(): Promise<void> {
    // uIMapSettings = null;
  }

  async switchToDistributionList(): Promise<void> {
    // objectIdentification.windowHandle.switchToMainWindowScreenTab("Home/frmDistributionSrch");
  }

  async switchToDistributionEntry(): Promise<void> {
    // objectIdentification.windowHandle.switchToWindow("Distribution - 1092");
  }

}

export class CADStatusConfigPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("(//span[contains(text(),\'Add New\')])");
    this.searchButton = page.locator('#cmdSearch');
  }

  async clickAddNew(): Promise<void> {
    // uIMapSettings.cadStatusConfig.uIAddNewButton.click();
  }

}

export class CADStatusConfigEntryPage {
  readonly page: Page;
  readonly nameEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly screenTypeDropdown: Locator;
  readonly inactiveCheckbox: Locator;
  readonly mainTab: Locator;
  readonly callInfoTab: Locator;
  readonly unitInfoTab: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly refreshButton: Locator;
  readonly inactiveDescription: Locator;
  readonly bottomLeftSideStatusBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameEdit = page.locator('#txtConfigName');
    this.descriptionEdit = page.locator('#txtConfigDesc');
    this.screenTypeDropdown = page.locator('#cddScreenName_DropDown');
    this.inactiveCheckbox = page.locator('#chkIsActive');
    this.mainTab = page.locator("//span[contains(text(),\'Main\')]");
    this.callInfoTab = page.locator("//span[contains(text(),\'Call Info\')]");
    this.unitInfoTab = page.locator("//span[contains(text(),\'Unit Info\')]");
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.refreshButton = page.locator('#cmdRefresh');
    this.inactiveDescription = page.locator('#txtInactiveDttm');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
  }

  async enterAtName(): Promise<void> {
    // uIMapSettings.cadStatusConfigEntry.uINameEdit.sendKeys(BaseData.getSettingsModuleValue("Name"));
    // uIMapSettings.cadStatusConfigEntry.uINameEdit.sendKeys(Keys.TAB);
  }

  async enterName(): Promise<void> {
    // uIMapSettings.cadStatusConfigEntry.uINameEdit.sendKeys("AutoTest");
    // uIMapSettings.cadStatusConfigEntry.uINameEdit.sendKeys(Keys.TAB);
  }

  async selectScreenType(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapSettings.cadStatusConfigEntry.uIScreenTypeDropdown);
    // uIMapSettings.cadStatusConfigEntry.uIScreenTypeDropdown.sendKeys(Keys.TAB);
  }

  async clickMainTab(): Promise<void> {
    // uIMapSettings.cadStatusConfigEntry.uIMainTab.click();
  }

  async save(): Promise<void> {
    // uIMapSettings.cadStatusConfigEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async saveNClose(): Promise<void> {
    // uIMapSettings.cadStatusConfigEntry.uISaveNCloseButton.click();
    // popup.confirm.yes();
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.cadStatusConfigEntry.uIBottomLeftSideStatusBar.getText());
  }

}

export class MainTab2Page {
  readonly page: Page;
  readonly allStatusCheckBox: Locator;
  readonly nFIRSIncidentTypeEdit: Locator;
  readonly nERISIncidentTypeEdit: Locator;
  readonly defaultFrequencyDropDown: Locator;
  readonly dispatchToEnrouteEdit: Locator;
  readonly arriveToInServiceEdit: Locator;
  readonly enrouteToArriveEdit: Locator;
  readonly defaultTemplateForNFIRSRemarksDropDown: Locator;
  readonly shareCallsWithCFSToOtherAgenciesCheckbox: Locator;
  readonly dashboardEntrySecondsEdit: Locator;
  readonly dashboardEntrySortSeqEdit: Locator;
  readonly dashboardEntryAddButton: Locator;
  readonly dashboardEntryClearButton: Locator;
  readonly dashboardNameDropDown: Locator;
  readonly dashboardEntryTable: Locator;
  readonly groupSortDropDown: Locator;
  readonly sortEdit: Locator;
  readonly passwordCheckbox: Locator;
  readonly customNameEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allStatusCheckBox = page.locator('#tabQuestion_tmpl0_usrCADUIConfigMain1_chkAllStatus');
    this.nFIRSIncidentTypeEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD2_lupCADIncType_CodeValue');
    this.nERISIncidentTypeEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD2_lupNERISIncType_CodeValue');
    this.defaultFrequencyDropDown = page.locator('#tabCFSCode_tmpl0_UsrCAD2_cddFrequency_DropDown');
    this.dispatchToEnrouteEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD2_txtDispatch');
    this.arriveToInServiceEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD2_txtArrive');
    this.enrouteToArriveEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD2_txtEnroute');
    this.defaultTemplateForNFIRSRemarksDropDown = page.locator('#tabCFSCode_tmpl0_UsrCAD2_lstTextName');
    this.shareCallsWithCFSToOtherAgenciesCheckbox = page.locator('#tabCFSCode_tmpl0_UsrCAD2_chkIsPnxCAD2CAD');
    this.dashboardEntrySecondsEdit = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_txtseconds');
    this.dashboardEntrySortSeqEdit = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_txtsortseq');
    this.dashboardEntryAddButton = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_imgMobileReportPathAdd');
    this.dashboardEntryClearButton = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_imgMobileReportPathAdd');
    this.dashboardNameDropDown = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_cboDashboardName');
    this.dashboardEntryTable = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_grdMobileReportPath');
    this.groupSortDropDown = page.locator('#tabParam_tmpl0_UsrParamMain1_radGroupName_Input');
    this.sortEdit = page.locator('#tabParam_tmpl0_UsrParamMain1_txtSortSeqNo');
    this.passwordCheckbox = page.locator('#tabParam_tmpl0_UsrParamMain1_chkIsPassword');
    this.customNameEdit = page.locator('#tabRepo_tmpl0_usrRepoMain1_txtCustomName');
  }

  async clickAllStatusCheckBox(): Promise<void> {
    // uIMapSettings.cadStatusConfigEntry.mainTab.uIAllStatusCheckBox.click();
  }

}

export class CameraConfigPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly searchButton: Locator;
  readonly cameraConfigSearchResultTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("(//span[contains(text(),\'Add New\')])");
    this.searchButton = page.locator('#cmdSearch');
    this.cameraConfigSearchResultTable = page.locator('#grdCamera');
  }

  async clickAddNew(): Promise<void> {
    // uIMapSettings.cameraConfig.uIAddNewButton.click();
  }

  async selectAtNameInGrid(jsonIndexValue: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapSettings.cameraConfig.uICameraConfigSearchResultTable,
    // BaseData.getSettingsModuleValue("Name" + jsonIndexValue));
  }

}

export class CameraConfigEntryPage {
  readonly page: Page;
  readonly nameEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly cameraUseDropdown: Locator;
  readonly cameraTypeDropdown: Locator;
  readonly cameraGroupDropdown: Locator;
  readonly cameraURLEdit: Locator;
  readonly axisCameraStationIPEdit: Locator;
  readonly phoenixVideoServerIpEdit: Locator;
  readonly portNoEdit: Locator;
  readonly saveButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly saveAndCloseIcon: Locator;
  readonly fleetNoEdit: Locator;
  readonly cameraURLCameraIPLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameEdit = page.locator('#KpiCameraName');
    this.descriptionEdit = page.locator('#txtDescription');
    this.cameraUseDropdown = page.locator('#CameraUse_DropDown');
    this.cameraTypeDropdown = page.locator('#CameraType_DropDown');
    this.cameraGroupDropdown = page.locator('#CameraGroup_DropDown');
    this.cameraURLEdit = page.locator('#kpicamIP');
    this.axisCameraStationIPEdit = page.locator('#txtVideoServerIPAddress');
    this.phoenixVideoServerIpEdit = page.locator('#txtPhoenixRecorderIP');
    this.portNoEdit = page.locator('#txtPortNo');
    this.saveButton = page.locator('#cmdSave');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.saveAndCloseIcon = page.locator('#cmdSaveNClose');
    this.fleetNoEdit = page.locator('#txtFleetNbr');
    this.cameraURLCameraIPLabel = page.locator('#KpilblCameraIP');
  }

  async enterAtName(): Promise<void> {
    // uIMapSettings.cameraConfigEntry.uINameEdit.sendKeys(BaseData.getSettingsModuleValue("Name"));
    // uIMapSettings.cameraConfigEntry.uINameEdit.sendKeys(Keys.TAB);
  }

  async enterAtDescription(): Promise<void> {
    // uIMapSettings.cameraConfigEntry.uIDescriptionEdit.sendKeys(BaseData.getSettingsModuleValue("Description"));
    // uIMapSettings.cameraConfigEntry.uIDescriptionEdit.sendKeys(Keys.TAB);
  }

  async selectAtCameraUse(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.cameraConfigEntry.uICameraUseDropdown, BaseData.getSettingsModuleValue("CameraUse"));
  }

  async selectAtCameraType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.cameraConfigEntry.uICameraTypeDropdown,
    // BaseData.getSettingsModuleValue("CameraType"));
  }

  async enterAtCameraIP(): Promise<void> {
    // uIMapSettings.cameraConfigEntry.uICameraURLEdit.sendKeys(BaseData.getSettingsModuleValue("CameraURL"));
  }

  async save(): Promise<void> {
    // uIMapSettings.cameraConfigEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.cameraConfigEntry.uIBottomLeftSideStatusBar.getText());
  }

  async enterAtCameraIP(jsonIndexValue: number): Promise<void> {
    // uIMapSettings.cameraConfigEntry.uICameraURLEdit.clear();
    // uIMapSettings.cameraConfigEntry.uICameraURLEdit.sendKeys(BaseData.getSettingsModuleValue("CameraIP" +jsonIndexValue));
  }

  async verify1152ThisCameraNameAlreadyExistBottomMessageNotAppears(): Promise<void> {
    // String element = uIMapSettings.cameraConfigEntry.uIBottomLeftSideStatusBar.getText();
    // verify.ExpectedValueIsFalse(element.contains("1152 â€“ This Camera Name Already Exists"),
    // "Already Exists bottom status message appeared --> ");
  }

  async saveAndCloseScreen(): Promise<void> {
    // uIMapSettings.cameraConfigEntry.uISaveAndCloseIcon.click();
    // popup.confirm.yes();
  }

  async verifyCameraGroupIsDisabled(): Promise<void> {
    // boolean enabled = uIMapSettings.cameraConfigEntry.uICameraGroupDropdown.isEnabled();
    // verify.ExpectedValueIsFalse(enabled, "Camera Group is not disabled");
  }

  async verifyCameraURLCameraIPIsDisabled(): Promise<void> {
    // boolean enabled = uIMapSettings.cameraConfigEntry.uICameraURLEdit.isEnabled();
    // verify.ExpectedValueIsFalse(enabled, "Camera URL CameraIP is not disabled");
  }

  async verifyPhoenixVideoServerIPIsDisabled(): Promise<void> {
    // boolean enabled = uIMapSettings.cameraConfigEntry.uIPhoenixVideoServerIpEdit.isEnabled();
    // verify.ExpectedValueIsFalse(enabled, "Phoenix Video Server IP is not disabled");
  }

  async verifyPortIsDisabled(): Promise<void> {
    // boolean enabled = uIMapSettings.cameraConfigEntry.uIPortNoEdit.isEnabled();
    // verify.ExpectedValueIsFalse(enabled, "Port is not disabled");
  }

  async verifyFleetIsDisabled(): Promise<void> {
    // boolean enabled = uIMapSettings.cameraConfigEntry.uIFleetNoEdit.isEnabled();
    // verify.ExpectedValueIsFalse(enabled, "Fleet is not disabled");
  }

  async verifyCameraURLCameraIPAsMandatory(): Promise<void> {
    // String cssValue = uIMapSettings.cameraConfigEntry.uICameraURLCameraIPLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual("rgb(153, 0, 0)", cssValue);
  }

  async selectAtCameraUse(jsonValueIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.cameraConfigEntry.uICameraUseDropdown, BaseData.getSettingsModuleValue("CameraUse" + jsonValueIndex));
  }

  async enterAtUMediaAxisCameraStationIPAddress(jsonValueIndex: number): Promise<void> {
    // uIMapSettings.cameraConfigEntry.uIAxisCameraStationIPEdit.sendKeys(BaseData.getSettingsModuleValue("UMediaAxisCameraStationIPAddress" + jsonValueIndex));
    // uIMapSettings.cameraConfigEntry.uIAxisCameraStationIPEdit.sendKeys(Keys.TAB);
  }

  async enterAtFleetNo(jsonValueIndex: number): Promise<void> {
    // uIMapSettings.cameraConfigEntry.uIFleetNoEdit.sendKeys(BaseData.getSettingsModuleValue("FleetNo" + jsonValueIndex));
    // uIMapSettings.cameraConfigEntry.uIFleetNoEdit.sendKeys(Keys.TAB);
  }

  async enterAtName(jsonValueIndex: number): Promise<void> {
    // uIMapSettings.cameraConfigEntry.uINameEdit.sendKeys(BaseData.getSettingsModuleValue("Name" + jsonValueIndex));
    // uIMapSettings.cameraConfigEntry.uINameEdit.sendKeys(Keys.TAB);
  }

  async enterAtPhoenixVideoServerIP(jsonValueIndex: number): Promise<void> {
    // uIMapSettings.cameraConfigEntry.uIPhoenixVideoServerIpEdit.sendKeys(BaseData.getSettingsModuleValue("Name" + jsonValueIndex));
    // uIMapSettings.cameraConfigEntry.uIPhoenixVideoServerIpEdit.sendKeys(Keys.TAB);
  }

  async enterAtPortNo(jsonValueIndex: number): Promise<void> {
    // uIMapSettings.cameraConfigEntry.uIPortNoEdit.sendKeys(BaseData.getSettingsModuleValue("PortNo" + jsonValueIndex));
    // uIMapSettings.cameraConfigEntry.uIPortNoEdit.sendKeys(Keys.TAB);
  }

}

export class ChargeDispositionPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly searchButton: Locator;
  readonly dispositionCodeEdit: Locator;
  readonly descriptionEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("(//span[contains(text(),\'Add New\')])");
    this.searchButton = page.locator('#cmdSearch');
    this.dispositionCodeEdit = page.locator('#txtDisCode');
    this.descriptionEdit = page.locator('#txtDescription');
  }

  async clickAddNew(): Promise<void> {
    // uIMapSettings.chargeDisposition.uIAddNewButton.click();
  }

  async enterAtDispositionCode(JsonIndexValue: number): Promise<void> {
    // uIMapSettings.chargeDisposition.uIDispositionCodeEdit.sendKeys(BaseData.getSettingsModuleValue("DispositionCode" + JsonIndexValue));
    // uIMapSettings.chargeDisposition.uIDispositionCodeEdit.sendKeys(Keys.TAB);
  }

  async verifyDispositionCodeIsEmpty(): Promise<void> {
    // String text = uIMapSettings.chargeDisposition.uIDispositionCodeEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(text.isEmpty());
  }

  async clickSearchButton(): Promise<void> {
    // uIMapSettings.chargeDisposition.uISearchButton.click();
  }

  async verify1011NoRecordFoundAcknowledgePopupAppears(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
  }

  async enterAtDescriptionCode(JsonIndexValue: number): Promise<void> {
    // uIMapSettings.chargeDisposition.uIDescriptionEdit.sendKeys(BaseData.getSettingsModuleValue("DescriptionCode" + JsonIndexValue));
    // uIMapSettings.chargeDisposition.uIDescriptionEdit.sendKeys(Keys.TAB);
  }

  async verifyAtDispositionCode(JsonIndexValue: number): Promise<void> {
    // String attribute = uIMapSettings.chargeDisposition.uIDispositionCodeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("DispositionCode" + JsonIndexValue), attribute);
  }

  async verifyAtDescriptionCode(JsonIndexValue: number): Promise<void> {
    // String attribute = uIMapSettings.chargeDisposition.uIDescriptionEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("DescriptionCode" + JsonIndexValue), attribute);
  }

}

export class CustomHelpPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly searchButton: Locator;
  readonly customHelpResultTable: Locator;
  readonly inactiveCheckBox: Locator;
  readonly printIcon: Locator;
  readonly excelIcon: Locator;
  readonly screenID: Locator;
  readonly fileNameEdit: Locator;
  readonly documentTitleEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("(//span[contains(text(),\'Add New\')])");
    this.searchButton = page.locator('#cmdSearch');
    this.customHelpResultTable = page.locator('#grdDocRepository');
    this.inactiveCheckBox = page.locator('#chkInActive');
    this.printIcon = page.locator("//img[@title=\'Print\']");
    this.excelIcon = page.locator("//img[@title=\'Export to Excel\']");
    this.screenID = page.locator('#lupScreenID_CodeValue');
    this.fileNameEdit = page.locator('#txtFileName');
    this.documentTitleEdit = page.locator('#txtDocumentName');
  }

  async clickAddNew(): Promise<void> {
    // uIMapSettings.customHelp.uIAddNewButton.click();
  }

  async clickSearchButton(): Promise<void> {
    // uIMapSettings.customHelp.uISearchButton.click();
  }

  async selectAtTitleInGridRow(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.customHelp.uICustomHelpResultTable, BaseData.getSettingsModuleValue("DocumentTitle"));
  }

  async selectAtTitleInGridRow(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.customHelp.uICustomHelpResultTable,
    // BaseData.getSettingsModuleValue("DocumentTitle" + i));
  }

  async selectRandomGrid(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow(uIMapSettings.customHelp.uICustomHelpResultTable);
  }

  async clickIncludeInactiveCheckBox(): Promise<void> {
    // uIMapSettings.customHelp.uIInactiveCheckBox.click();
  }

  async verifyAtRowViewedAsGrayColor(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.customHelp.uICustomHelpResultTable, BaseData.getSettingsModuleValue("DocumentTitle"));
    // String cssValue = gridRowByCellInnerText.getCssValue("color");
    // System.out.println(cssValue);
    // verify.ExpectedValueIsTrue(cssValue.contains("rgba(128, 128, 128, 1)"));
  }

  async verifyAtRowViewedAsGrayColor(i: number): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.customHelp.uICustomHelpResultTable,
    // BaseData.getSettingsModuleValue("DocumentTitle" + i));
    // String cssValue = gridRowByCellInnerText.getCssValue("color");
    // System.out.println(cssValue);
    // System.out.println(gridRowByCellInnerText.getText());
    // verify.ExpectedValueIsTrue(cssValue.contains("rgba(128, 128, 128, 1)"));
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapSettings.customHelp.uIPrintIcon.click();
  }

  async clickExcelIcon(): Promise<void> {
    // uIMapSettings.customHelp.uIExcelIcon.click();
  }

  async verifyGridIsEmpty(): Promise<void> {
    // verify.ExpectedIntergerValueIsEqualToActual(0, objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapSettings.customHelp.uICustomHelpResultTable), "Grid contains data -->");
  }

  async clickGridHeader(gridHeader: string): Promise<void> {
    // objectIdentification.manualIdentify.selectGridHeaderColumnNameWithoutContains(
    // uIMapSettings.customHelp.uICustomHelpResultTable, gridHeader);
  }

  async enterAtScreenID(): Promise<void> {
    // uIMapSettings.customHelp.uIScreenID.sendKeys(BaseData.getSettingsModuleValue("ScreenID"));
  }

  async enterAtScreenID(i: number): Promise<void> {
    // uIMapSettings.customHelp.uIScreenID.sendKeys(BaseData.getSettingsModuleValue("ScreenID" + i));
  }

  async verifyScreenIDInGrid(): Promise<void> {
    // String ScreenID = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.customHelp.uICustomHelpResultTable,
    // BaseData.getSettingsModuleValue("ScreenID"))
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ScreenID"), ScreenID);
  }

  async enterAtFileName(): Promise<void> {
    // uIMapSettings.customHelp.uIFileNameEdit.sendKeys(BaseData.getSettingsModuleValue("FileName"));
  }

  async verifyAtFileNameInGrid(): Promise<void> {
    // String FileName = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.customHelp.uICustomHelpResultTable,
    // BaseData.getSettingsModuleValue("FileName"))
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("FileName"), FileName);
  }

  async enterAtDocumentTitle(): Promise<void> {
    // uIMapSettings.customHelp.uIDocumentTitleEdit.sendKeys(BaseData.getSettingsModuleValue("DocumentTitle"));
  }

  async verifyDocumentTitleInGrid(): Promise<void> {
    // String DocumentTitle = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.customHelp.uICustomHelpResultTable,
    // BaseData.getSettingsModuleValue("DocumentTitle"))
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("DocumentTitle"), DocumentTitle);
  }

  async verifyAtColumnValuesAreSortedDescendingOrder(i: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedDescending(
    // uIMapSettings.customHelp.uICustomHelpResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i),
    // objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.customHelp.uICustomHelpResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i)));
  }

  async reloadCustomHelpTab(): Promise<void> {
    // objectIdentification.manualIdentify.reloadScreen("Custom Help");
  }

}

export class CustomDocHelpEntryPage {
  readonly page: Page;
  readonly screenIdEdit: Locator;
  readonly documentTitle: Locator;
  readonly linkEdit: Locator;
  readonly fileNameEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly customDocHelpResultTable: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly printButton: Locator;
  readonly inactiveDateEdit: Locator;
  readonly updateButton: Locator;
  readonly uploadeIcon: Locator;
  readonly inactiveCheckBox: Locator;
  readonly securityScreenID: Locator;
  readonly customDescriptionEdit: Locator;
  readonly resetIcon: Locator;
  readonly sortOrderEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.screenIdEdit = page.locator('#lupRepositoryID_CodeValue');
    this.documentTitle = page.locator('#txtDocName');
    this.linkEdit = page.locator('#txtLink');
    this.fileNameEdit = page.locator('#txtFileName');
    this.descriptionEdit = page.locator('#txtdesc');
    this.addButton = page.locator('#imgAdd');
    this.clearButton = page.locator('#imgClear');
    this.customDocHelpResultTable = page.locator('#grdDocRepository');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.printButton = page.locator('#cmdPrint');
    this.inactiveDateEdit = page.locator('#txtInActiveDttm');
    this.updateButton = page.locator("//input[contains(@src,\'UpdateData\')]");
    this.uploadeIcon = page.locator('#imgDocUpload');
    this.inactiveCheckBox = page.locator('#chkIsActive');
    this.securityScreenID = page.locator('#lupSecurityID_CodeValue');
    this.customDescriptionEdit = page.locator('#txtcusDesc');
    this.resetIcon = page.locator('#cmdRefresh');
    this.sortOrderEdit = page.locator('#txtSortSeqNo');
  }

  async enterAtScreenID(): Promise<void> {
    // uIMapSettings.customDocHelpEntry.uIScreenIdEdit.sendKeys(BaseData.getSettingsModuleValue("ScreenID"));
    // uIMapSettings.customDocHelpEntry.uIScreenIdEdit.sendKeys(Keys.TAB);
  }

  async enterAtScreenID(i: number): Promise<void> {
    // uIMapSettings.customDocHelpEntry.uIScreenIdEdit.sendKeys(BaseData.getSettingsModuleValue("ScreenID" + i));
    // uIMapSettings.customDocHelpEntry.uIScreenIdEdit.sendKeys(Keys.TAB);
  }

  async enterAtDocumentTitle(): Promise<void> {
    // uIMapSettings.customDocHelpEntry.uIDocumentTitle.click();
    // uIMapSettings.customDocHelpEntry.uIDocumentTitle.sendKeys(BaseData.getSettingsModuleValue("DocumentTitle"));
    // uIMapSettings.customDocHelpEntry.uIDocumentTitle.sendKeys(Keys.TAB);
  }

  async enterAtLink(): Promise<void> {
    // uIMapSettings.customDocHelpEntry.uILinkEdit.sendKeys(BaseData.getSettingsModuleValue("Link"));
    // uIMapSettings.customDocHelpEntry.uILinkEdit.sendKeys(Keys.TAB);
  }

  async clickAdd(): Promise<void> {
    // uIMapSettings.customDocHelpEntry.uIAddButton.click();
  }

  async save(): Promise<void> {
    // uIMapSettings.customDocHelpEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.customDocHelpEntry.uIBottomLeftSideStatusBar.getText());
  }

  async enterAtDescription(): Promise<void> {
    // uIMapSettings.customDocHelpEntry.uIDescriptionEdit.sendKeys(BaseData.getSettingsModuleValue("Description"));
  }

  async verifyAtDescription(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Description"),
    // uIMapSettings.customDocHelpEntry.uIDescriptionEdit.getText());
  }

  async verifyFileNameFieldIsDisabled(): Promise<void> {
    // // verify.ExpectedValueIsFalse(uIMapSettings.customDocHelpEntry.uIFileNameEdit.isEnabled());
    // String attribute = uIMapSettings.customDocHelpEntry.uIFileNameEdit.getAttribute("class");
    // System.out.println(attribute);
    // verify.ExpectedPropertyValueIsEqual(attribute, "textboxInactive");
  }

  async clickSave(): Promise<void> {
    // uIMapSettings.customDocHelpEntry.uISaveButton.click();
  }

  async VerifyWarrantMustBeAddedToTheGrid(): Promise<void> {
    // popup.acknowledge.okWithExpectedContainMessage(
    // "(8515)At least one warrant must be added to the grid before the batch clearance can be saved.");
  }

  async verifyAtDocumentTitleInGrid(): Promise<void> {
    // String gridCellInnerText = objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.customDocHelpEntry.uICustomDocHelpResultTable, "Document Title", 0);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("DocumentTitle"), gridCellInnerText);
  }

  async verifyAtDocumentTitleInGrid(i: number): Promise<void> {
    // String gridCellInnerText = objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapSettings.customDocHelpEntry.uICustomDocHelpResultTable, "Document Title", 0);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("DocumentTitle" + i),
    // gridCellInnerText);
  }

  async clickPrintButton(): Promise<void> {
    // uIMapSettings.customDocHelpEntry.uIPrintButton.click();
  }

  async verifyAtDocumentTitleInGridBasedOnFileName(): Promise<void> {
    // String title = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.customDocHelpEntry.uICustomDocHelpResultTable,
    // BaseData.getSettingsModuleValue("Link"), "Document Title")
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("DocumentTitle"), title);
  }

  async verifyAtDocumentTitleInGridBasedOnFileName(i: number): Promise<void> {
    // String title = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.customDocHelpEntry.uICustomDocHelpResultTable,
    // BaseData.getSettingsModuleValue("Link"), "Document Title")
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("DocumentTitle" + i), title);
  }

  async verifySelectReportScreenIsOpened(windowExist: boolean): Promise<void> {
    // verify.ExpectedValueIsTrue(windowExist);
  }

  async selectAtTitleInGridRow(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.customDocHelpEntry.uICustomDocHelpResultTable,
    // BaseData.getSettingsModuleValue("DocumentTitle"));
  }

  async selectAtTitleInGridRow(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.customDocHelpEntry.uICustomDocHelpResultTable,
    // BaseData.getSettingsModuleValue("DocumentTitle" + i));
  }

  async verifyAtInactiveDateAndTime(): Promise<void> {
    // String InactiveDate = uIMapSettings.customDocHelpEntry.uIInactiveDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getAccountingModuleValue("InactiveDate"), InactiveDate);
  }

  async deleteGridRowByDocumentTitle(): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
    // uIMapSettings.customDocHelpEntry.uICustomDocHelpResultTable,
    // BaseData.getSettingsModuleValue("DocumentTitle"));
  }

  async clickCancelOnDeleteConfirmPopup(): Promise<void> {
    // popup.confirm.noWithExpectedMessage("(4) Do you really want to delete?");
  }

  async clickDeleteHeaderInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridHeaderColumnNameWithSpan(
    // uIMapSettings.customDocHelpEntry.uICustomDocHelpResultTable, "X");
  }

  async verifyDeleteConfirmationPopupIsNotAppeared(): Promise<void> {
    // verify.ExpectedValueIsFalse(popup.confirm.checkAlertIsPresentOrNot());
  }

  async enterAtDocumentTitle(i: number): Promise<void> {
    // uIMapSettings.customDocHelpEntry.uIDocumentTitle.click();
    // uIMapSettings.customDocHelpEntry.uIDocumentTitle.clear();
    // uIMapSettings.customDocHelpEntry.uIDocumentTitle
    // .sendKeys(BaseData.getSettingsModuleValue("DocumentTitle" + i));
    // uIMapSettings.customDocHelpEntry.uIDocumentTitle.sendKeys(Keys.TAB);
  }

  async clickUpdateButton(): Promise<void> {
    // uIMapSettings.customDocHelpEntry.uIUpdateButton.click();
  }

  async verifyUpdateButtonNotDisplayed(): Promise<void> {
    // verify.ExpectedValueIsFalse(
    // objectIdentification.manualIdentify.controlExist(uIMapSettings.customDocHelpEntry.uIUpdateButton),
    // "Update Button is displayed -->");
  }

  async closeScreen(): Promise<void> {
    // uIMapSettings.customDocHelpEntry.driver.close();
  }

  async clickUploadeIcon(): Promise<void> {
    // uIMapSettings.customDocHelpEntry.uIUploadeIcon.click();
  }

  async selectAtGridRowByFileName(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.customDocHelpEntry.uICustomDocHelpResultTable,
    // BaseData.getSettingsModuleValue("FileName"));
  }

  async clickInactiveCheckBox(): Promise<void> {
    // uIMapSettings.customDocHelpEntry.uIInactiveCheckBox.click();
  }

  async verifyAtInactiveDateAndTimeAsCurrentDateAndTime(Date: string, Time: string): Promise<void> {
    // String gettime = Time.substring(0, 5);
    // String InactiveDate = uIMapSettings.customDocHelpEntry.uIInactiveDateEdit.getAttribute("value");
    // String[] split = InactiveDate.split(" ");
    // String GetDate = split[0].toString();
    // String string1 = split[1].toString();
    // String Actualtime = string1.substring(0, 5);
    // verify.ExpectedPropertyValueIsEqual(Date, GetDate);
    // verify.ExpectedPropertyValueIsEqual(gettime, Actualtime);
  }

  async getCurrentDate(): Promise<string> {
    // String currentDate = randomized.getCurrentDate("MM/dd/yyyy");
    // return currentDate;
  }

  async getCurrentTime(): Promise<string> {
    // String currentTime = randomized.getCurrentTime("HH:mm:ss");
    // return currentTime;
  }

  async enterAtSecurityScreenID(): Promise<void> {
    // uIMapSettings.customDocHelpEntry.uISecurityScreenID
    // .sendKeys(BaseData.getSettingsModuleValue("SecurityScreenID"));
  }

  async enterAtSecurityScreenID(i: number): Promise<void> {
    // uIMapSettings.customDocHelpEntry.uISecurityScreenID
    // .sendKeys(BaseData.getSettingsModuleValue("SecurityScreenID" + i));
  }

  async enterAtCustomDescription(): Promise<void> {
    // uIMapSettings.customDocHelpEntry.uICustomDescriptionEdit
    // .sendKeys(BaseData.getSettingsModuleValue("CustomDescription"));
  }

  async clickResetButton(): Promise<void> {
    // uIMapSettings.customDocHelpEntry.uIResetIcon.click();
  }

  async enterAtSortOrder(): Promise<void> {
    // uIMapSettings.customDocHelpEntry.uISortOrderEdit.sendKeys(BaseData.getSettingsModuleValue("SortOrder"));
  }

  async verifySortOrderInGrid(): Promise<void> {
    // String SortOrder = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.customDocHelpEntry.uICustomDocHelpResultTable,
    // BaseData.getSettingsModuleValue("SortOrder"))
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(SortOrder, SortOrder);
  }

}

export class DispatchZoneScreenPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly zoneNameEdit: Locator;
  readonly description: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("(//span[contains(text(),\'Add New\')])");
    this.zoneNameEdit = page.locator('#txtRouteName');
    this.description = page.locator('#txtDescription');
    this.searchButton = page.locator('#cmdSearch');
  }

  async clickAddNew(): Promise<void> {
    // uIMapSettings.dispatchZoneScreen.uIAddNewButton.click();
  }

}

export class DispatchZonePage {
  readonly page: Page;
  readonly zoneNameEdit: Locator;
  readonly description: Locator;
  readonly productDropdown: Locator;
  readonly patrolAreaEdit: Locator;
  readonly patrolAreaDescription: Locator;
  readonly districtDescription: Locator;
  readonly districtEdit: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly dispatchZoneResultTable: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly jurisDropdown: Locator;
  readonly bottomLeftSideStatusBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.zoneNameEdit = page.locator('#txtRouteName');
    this.description = page.locator('#txtDescription');
    this.productDropdown = page.locator('#cddProduct_DropDown');
    this.patrolAreaEdit = page.locator('#lupPatrolArea_CodeValue');
    this.patrolAreaDescription = page.locator('#lupPatrolArea_CodeDescription');
    this.districtDescription = page.locator('#lupDistrict_CodeDescription');
    this.districtEdit = page.locator('#lupDistrict_CodeValue');
    this.addButton = page.locator('#imgAdd');
    this.clearButton = page.locator('#imgClear');
    this.dispatchZoneResultTable = page.locator('#grdDispatchRoute');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.jurisDropdown = page.locator('#lstJuris');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
  }

  async enterAtZoneName(): Promise<void> {
    // uIMapSettings.dispatchZone.uIZoneNameEdit.sendKeys(BaseData.getSettingsModuleValue("ZoneName"));
    // uIMapSettings.dispatchZone.uIZoneNameEdit.sendKeys(Keys.TAB);
  }

  async enterAtDescription(): Promise<void> {
    // uIMapSettings.dispatchZone.uIDescription.sendKeys(BaseData.getSettingsModuleValue("Description"));
  }

  async selectAtProduct(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.dispatchZone.uIProductDropdown,
    // BaseData.getSettingsModuleValue("Product"));
  }

  async enterAtPatrolArea(): Promise<void> {
    // uIMapSettings.dispatchZone.uIPatrolAreaEdit.sendKeys(BaseData.getSettingsModuleValue("PatrolArea"));
    // uIMapSettings.dispatchZone.uIPatrolAreaEdit.sendKeys(Keys.TAB);
  }

  async enterAtDistrict(): Promise<void> {
    // uIMapSettings.dispatchZone.uIDistrictEdit.sendKeys(BaseData.getSettingsModuleValue("District"));
    // uIMapSettings.dispatchZone.uIDistrictEdit.sendKeys(Keys.TAB);
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.dispatchZone.uIAddButton.click();
  }

  async clickSave(): Promise<void> {
    // uIMapSettings.dispatchZone.uISaveButton.click();
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.dispatchZone.uIBottomLeftSideStatusBar.getText());
  }

}

export class DocumentCodesPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly documentTypeEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly searchButton: Locator;
  readonly documentTypeGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("(//span[contains(text(),\'Add New\')])");
    this.documentTypeEdit = page.locator('#txtDocType');
    this.descriptionEdit = page.locator('#txtDescription');
    this.searchButton = page.locator('#cmdSearch');
    this.documentTypeGrid = page.locator('#grdChargeDoc');
  }

  async clickAddNew(): Promise<void> {
    // uIMapSettings.documentCodes.uIAddNewButton.click();
  }

  async enterAtDocumentType(i: number): Promise<void> {
    // uIMapSettings.documentCodes.uIDocumentTypeEdit
    // .sendKeys(BaseData.getSettingsModuleValue("DocumentType" + i));
  }

  async enterAtDescription(i: number): Promise<void> {
    // uIMapSettings.documentCodes.uIDescriptionEdit.sendKeys(BaseData.getSettingsModuleValue("Description" + i));
  }

  async clickSearch(): Promise<void> {
    // uIMapSettings.documentCodes.uISearchButton.click();
  }

  async verify1011NoRecordFoundAcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
  }

  async verifyAtDocumentTypeInGrid(i: number): Promise<void> {
    // String documentType = BaseData.getSettingsModuleValue("DocumentType" + i);
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.documentCodes.uIDocumentTypeGrid, "Document Type");
    // for (String value : gridTableColumnValues) {
    // verify.ExpectedValueIsTrue(value.contains(documentType),
    // documentType + " - document Type value is not contains in grid -->");
  }

  async verifyAtDescriptionInGrid(i: number): Promise<void> {
    // String description = BaseData.getSettingsModuleValue("Description" + i);
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.documentCodes.uIDocumentTypeGrid, "Description");
    // for (String value : gridTableColumnValues) {
    // verify.ExpectedValueIsTrue(value.contains(description),
    // description + " - Description value is not contains in grid -->");
  }

  async verifyAtDocumentType(jsonIndexValue: number): Promise<void> {
    // String attribute = uIMapSettings.documentCodes.uIDocumentTypeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("DocumentType" + jsonIndexValue), attribute);
  }

  async verifyDocumentTypeIsEmpty(): Promise<void> {
    // String text = uIMapSettings.documentCodes.uIDocumentTypeEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(text.isEmpty());
  }

}

export class ExternalInterfaceSearchPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly searchButton: Locator;
  readonly externalInterfaceSearchResultTable: Locator;
  readonly interfaceEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.searchButton = page.locator("//span[contains(text(),\'Search\')]");
    this.externalInterfaceSearchResultTable = page.locator('#grdExtInterfaceSrch');
    this.interfaceEdit = page.locator('#txtInterface');
  }

  async clickAddNew(): Promise<void> {
    // //			WebElement adddNew = uIMapSettings.externalInterfaceSearch.uIAddNewButton;
    // //
    // //			if(adddNew.isDisplayed())
    // //			{
    // uIMapSettings.externalInterfaceSearch.uIAddNewButton.click();
    // //		}
  }

  async clickSearchButton(): Promise<void> {
    // uIMapSettings.externalInterfaceSearch.uISearchButton.click();
  }

  async selectRandomGridRow(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectRandomGridRow(uIMapSettings.externalInterfaceSearch.uIExternalInterfaceSearchResultTable);
  }

  async selectAtInterFaceInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText
    // (uIMapSettings.externalInterfaceSearch.uIExternalInterfaceSearchResultTable,BaseData.getSettingsModuleValue("Interface"));
  }

  async enterAtInterface(): Promise<void> {
    // uIMapSettings.externalInterfaceSearch.uIInterfaceEdit.sendKeys(BaseData.getSettingsModuleValue("Interface"));
  }

  async clearInterface(): Promise<void> {
    // uIMapSettings.externalInterfaceSearch.uIInterfaceEdit.click();
    // uIMapSettings.externalInterfaceSearch.uIInterfaceEdit.clear();
  }

}

export class ExternalInterfaceEntryPage {
  readonly page: Page;
  readonly interfaceEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly interfaceTypeDropdown: Locator;
  readonly primeTriggerDropdown: Locator;
  readonly fileTypeDropdown: Locator;
  readonly xMLMasterFileEdit: Locator;
  readonly field1Edit: Locator;
  readonly saveButton: Locator;
  readonly saveNClose: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly xMLMasterFileLookUpIcon: Locator;
  readonly formatter1LookupIcon: Locator;
  readonly data1CheckBox: Locator;
  readonly formatter2LookupIcon: Locator;
  readonly data2CheckBox: Locator;
  readonly saveAndClose: Locator;

  constructor(page: Page) {
    this.page = page;
    this.interfaceEdit = page.locator('#txtInterface');
    this.descriptionEdit = page.locator('#txtDescription');
    this.interfaceTypeDropdown = page.locator('#cddInterfaceType_DropDown');
    this.primeTriggerDropdown = page.locator('#CddPrimeTrigger_DropDown');
    this.fileTypeDropdown = page.locator('#cddFileType_DropDown');
    this.xMLMasterFileEdit = page.locator('#lupMasterNode_CodeValue');
    this.field1Edit = page.locator('#txtField1');
    this.saveButton = page.locator('#cmdSave');
    this.saveNClose = page.locator('#cmdSaveNClose');
    this.bottomLeftSideStatusBar = page.locator("//b[contains(text(),\'1002 - Addition Successful\')]");
    this.xMLMasterFileLookUpIcon = page.locator('#lupMasterNode_imgBtn');
    this.formatter1LookupIcon = page.locator('#LupField1Formatter_imgBtn');
    this.data1CheckBox = page.locator('#chkData1');
    this.formatter2LookupIcon = page.locator('#LupField2Formatter_imgBtn');
    this.data2CheckBox = page.locator('#chkData2');
    this.saveAndClose = page.locator('#cmdSaveNClose');
  }

  async enterAtInterface(): Promise<void> {
    // uIMapSettings.externalInterfaceEntry.uIInterfaceEdit.sendKeys(BaseData.getSettingsModuleValue("Interface"));
  }

  async enterInterface(): Promise<void> {
    // uIMapSettings.externalInterfaceEntry.uIInterfaceEdit.sendKeys("AUTO Interface");
  }

  async enterAtXMLMasterFile(): Promise<void> {
    // uIMapSettings.externalInterfaceEntry.uIXMLMasterFileEdit.click();
    // uIMapSettings.externalInterfaceEntry.uIXMLMasterFileEdit.clear();
    // uIMapSettings.externalInterfaceEntry.uIXMLMasterFileEdit
    // .sendKeys(BaseData.getSettingsModuleValue("XMLMasterFile"));
    // uIMapSettings.externalInterfaceEntry.uIXMLMasterFileEdit.sendKeys(Keys.TAB);
  }

  async enterXMLMasterFileAsAraCommissary(): Promise<void> {
    // uIMapSettings.externalInterfaceEntry.uIXMLMasterFileEdit.sendKeys("AraCommissary");
    // uIMapSettings.externalInterfaceEntry.uIXMLMasterFileEdit.sendKeys(Keys.TAB);
  }

  async selectInterfaceType(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapSettings.externalInterfaceEntry.uIInterfaceTypeDropdown);
  }

  async selectPrimeTrigger(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapSettings.externalInterfaceEntry.uIPrimeTriggerDropdown);
  }

  async selectFileType(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapSettings.externalInterfaceEntry.uIFileTypeDropdown);
  }

  async enterField1(): Promise<void> {
    // uIMapSettings.externalInterfaceEntry.uIField1Edit.sendKeys("Field Test");
  }

  async save(): Promise<void> {
    // uIMapSettings.externalInterfaceEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // String text = uIMapSettings.externalInterfaceEntry.uIBottomLeftSideStatusBar.getText();
    // System.out.println(text);
    // try {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful", text);
    // } catch (AssertionError e) {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition successful", text);
  }

  async clickXMLMasterFileLookUpIcon(): Promise<void> {
    // uIMapSettings.externalInterfaceEntry.uIXMLMasterFileLookUpIcon.click();
  }

  async verifyErrorAcknowledgeIsNotArise(): Promise<void> {
    // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal("External InterFace");
  }

  async clickFormatter1LookupIcon(): Promise<void> {
    // uIMapSettings.externalInterfaceEntry.uIFormatter1LookupIcon.click();
  }

  async checkData1CheckBox(): Promise<void> {
    // uIMapSettings.externalInterfaceEntry.uIData1CheckBox.click();
  }

  async clickFormatter2LookupIcon(): Promise<void> {
    // uIMapSettings.externalInterfaceEntry.uIFormatter2LookupIcon.click();
  }

  async checkData2CheckBox(): Promise<void> {
    // uIMapSettings.externalInterfaceEntry.uIData2CheckBox.click();
  }

  async verifyFormatter1LookupIconIsDisabled(): Promise<void> {
    // boolean enabled = uIMapSettings.externalInterfaceEntry.uIFormatter1LookupIcon.isEnabled();
    // verify.ExpectedValueIsFalse(enabled);
  }

  async verifyFormatter2LookupIconIsDisabled(): Promise<void> {
    // boolean enabled = uIMapSettings.externalInterfaceEntry.uIFormatter2LookupIcon.isEnabled();
    // verify.ExpectedValueIsFalse(enabled);
  }

  async saveAndClose(): Promise<void> {
    // uIMapSettings.externalInterfaceEntry.uISaveAndClose.click();
    // popup.confirm.yes();
  }

}

export class NotificationFormatPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly notificationTypeDropdown: Locator;
  readonly formatterFileNameEdit: Locator;
  readonly dataMasterCodeEdit: Locator;
  readonly recipientMasterCodeEdit: Locator;
  readonly searchButton: Locator;
  readonly notificationGrid: Locator;
  readonly includeInactiveCheckbox: Locator;
  readonly inactiveCheckBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.notificationTypeDropdown = page.locator('#cddNotifyEvent_DropDown');
    this.formatterFileNameEdit = page.locator('#txt_FormaterFileName');
    this.dataMasterCodeEdit = page.locator('#Kpicdd_DataMaster_CodeValue');
    this.recipientMasterCodeEdit = page.locator('#kpicdd_RecipientMaster_CodeValue');
    this.searchButton = page.locator('#cmdSearch');
    this.notificationGrid = page.locator('#grdNotification');
    this.includeInactiveCheckbox = page.locator('#CB_IncludeInacive');
    this.inactiveCheckBox = page.locator('#CB_IncludeInacive');
  }

  async clickAddNew(): Promise<void> {
    // uIMapSettings.notificationFormat.uIAddNewButton.click();
  }

  async selectAtNotificationType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.notificationFormat.uINotificationTypeDropdown,
    // BaseData.getSettingsModuleValue("NotificationType"));
  }

  async enterAtFormatterFileName(): Promise<void> {
    // uIMapSettings.notificationFormat.uIFormatterFileNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("FormatterFileName"));
    // uIMapSettings.notificationFormat.uIFormatterFileNameEdit.sendKeys(Keys.TAB);
  }

  async enterAtDataMaster(): Promise<void> {
    // uIMapSettings.notificationFormat.uIDataMasterCodeEdit
    // .sendKeys(BaseData.getSettingsModuleValue("DataMaster"));
    // uIMapSettings.notificationFormat.uIDataMasterCodeEdit.sendKeys(Keys.TAB);
  }

  async enterAtRecipientMaster(): Promise<void> {
    // uIMapSettings.notificationFormat.uIRecipientMasterCodeEdit
    // .sendKeys(BaseData.getSettingsModuleValue("RecipientMaster"));
    // uIMapSettings.notificationFormat.uIRecipientMasterCodeEdit.sendKeys(Keys.TAB);
  }

  async clickSearch(): Promise<void> {
    // uIMapSettings.notificationFormat.uISearchButton.click();
  }

  async verifyAtNotificationTypeInGrid(): Promise<void> {
    // String NotificationType = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.notificationFormat.uINotificationGrid,
    // BaseData.getSettingsModuleValue("NotificationType"))
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("NotificationType"), NotificationType);
  }

  async verifyAtDataMasterInGrid(): Promise<void> {
    // String DataMaster = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.notificationFormat.uINotificationGrid,
    // BaseData.getSettingsModuleValue("DataMaster"))
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("DataMaster"), DataMaster);
  }

  async verifyAtRecipientMasterInGrid(): Promise<void> {
    // String RecipientMaster = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.notificationFormat.uINotificationGrid,
    // BaseData.getSettingsModuleValue("RecipientMaster"))
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("RecipientMaster"), RecipientMaster);
  }

  async verifyAtFormatterFileNameInGrid(): Promise<void> {
    // String FormatterFileName = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.notificationFormat.uINotificationGrid,
    // BaseData.getSettingsModuleValue("FormatterFileName"))
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("FormatterFileName"),
    // FormatterFileName);
  }

  async verifyNotificationTypeDropdownIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.notificationFormat.uINotificationTypeDropdown.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed, "Notification Type Field is not displayed -->");
  }

  async verifyFormatterFileNameFieldIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.notificationFormat.uIFormatterFileNameEdit.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed, "Formatter File Name Field is not displayed -->");
  }

  async verifyIncludeInactiveFieldIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.notificationFormat.uIIncludeInactiveCheckbox.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed, "Include Inactive is not displayed -->");
  }

  async verifyDataMasterFieldIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.notificationFormat.uIDataMasterCodeEdit.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed, "Data Master Field is not displayed -->");
  }

  async verifyRecipientMasterFieldIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.notificationFormat.uIRecipientMasterCodeEdit.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed, "Recipient Master Field is not displayed -->");
  }

  async selectAtFormatterFileName(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.notificationFormat.uINotificationGrid,
    // BaseData.getSettingsModuleValue("FormatterFileName"));
  }

  async checkInactiveCheckBox(): Promise<void> {
    // uIMapSettings.notificationFormat.uIInactiveCheckBox.click();
  }

  async verifyGridRowCount(): Promise<void> {
    // int gridTableRowsCount = objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapSettings.notificationFormat.uINotificationGrid);
    // verify.ExpectedIntergerValueIsEqualToActual(1, gridTableRowsCount);
  }

  async verifyAtRowViewedAsGrayColor(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.notificationFormat.uINotificationGrid,
    // BaseData.getSettingsModuleValue("FormatterFileName"));
    // String cssValue = gridRowByCellInnerText.getCssValue("color");
    // System.out.println(cssValue);
    // verify.ExpectedValueIsTrue(cssValue.contains("rgba(128, 128, 128, 1)"));
  }

  async reloadNotificationFormat(): Promise<void> {
    // objectIdentification.windowHandle.reloadWindowByTitle("Notification Format");
  }

  async clickGridHeader(gridHeader: string): Promise<void> {
    // objectIdentification.manualIdentify.selectGridHeaderColumnNameWithoutContains(
    // uIMapSettings.notificationFormat.uINotificationGrid, gridHeader);
  }

  async verifyGridIsEmpty(): Promise<void> {
    // int gridTableRowsCount = objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapSettings.notificationFormat.uINotificationGrid);
    // verify.ExpectedIntergerValueIsEqualToActual(gridTableRowsCount, 0);
  }

}

export class NotificationFormatEntryPage {
  readonly page: Page;
  readonly notifyTypeDropdown: Locator;
  readonly dataMasterEdit: Locator;
  readonly recipientMasterEdit: Locator;
  readonly formatterFileNameEdit: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly detailsEdit: Locator;
  readonly notifyEventDropDown: Locator;
  readonly inactiveCheckBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.notifyTypeDropdown = page.locator('#kpi_cddNotifyType_DropDown');
    this.dataMasterEdit = page.locator('#kpi_lupDataMaster_CodeValue');
    this.recipientMasterEdit = page.locator('#kpi_lupRecipientNode_CodeValue');
    this.formatterFileNameEdit = page.locator('#kpi_txt_FormaterFileName');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'status\']/b");
    this.detailsEdit = page.locator('#kpi_txt_Details');
    this.notifyEventDropDown = page.locator('#kpi_cddNotifyEvent');
    this.inactiveCheckBox = page.locator('#kpi_ChbInActive');
  }

  async selectNotifyType(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapSettings.notificationFormatEntry.uINotifyTypeDropdown);
  }

  async enterDataMasterAsCallSummary(): Promise<void> {
    // uIMapSettings.notificationFormatEntry.uIDataMasterEdit.sendKeys("CallSummaryData");
    // uIMapSettings.notificationFormatEntry.uIDataMasterEdit.sendKeys(Keys.TAB);
  }

  async enterRecipientMasterAsCallSummary(): Promise<void> {
    // uIMapSettings.notificationFormatEntry.uIRecipientMasterEdit.sendKeys("CallSummaryData");
    // uIMapSettings.notificationFormatEntry.uIRecipientMasterEdit.sendKeys(Keys.TAB);
  }

  async enterFormatterFileName(): Promise<void> {
    // uIMapSettings.notificationFormatEntry.uIFormatterFileNameEdit.sendKeys("Phoenix.xsl");
    // uIMapSettings.notificationFormatEntry.uIFormatterFileNameEdit.sendKeys(Keys.TAB);
  }

  async save(): Promise<void> {
    // uIMapSettings.notificationFormatEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // try {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.notificationFormatEntry.uIBottomLeftSideStatusBar.getText());
    // } catch (AssertionError e) {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition successful",
    // uIMapSettings.notificationFormatEntry.uIBottomLeftSideStatusBar.getText());
  }

  async enterAtDetails(): Promise<void> {
    // uIMapSettings.notificationFormatEntry.uIDetailsEdit.sendKeys(BaseData.getSettingsModuleValue("Details"));
  }

  async selectAtNotifyEvent(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.notificationFormatEntry.uINotifyEventDropDown,
    // BaseData.getSettingsModuleValue("NotifyEvent"));
  }

  async selectAtNotifyType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.notificationFormatEntry.uINotifyTypeDropdown,
    // BaseData.getSettingsModuleValue("NotifyType"));
  }

  async checkInactiveCheckBox(): Promise<void> {
    // uIMapSettings.notificationFormatEntry.uIInactiveCheckBox.click();
  }

  async close(): Promise<void> {
    // uIMapSettings.notificationFormatEntry.driver.close();
  }

}

export class QueryMasterEntryPage {
  readonly page: Page;
  readonly queryNoEdit: Locator;
  readonly queryNameEdit: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly mainTableNameEdit: Locator;
  readonly key1Edit: Locator;
  readonly bottomMesssageTextView: Locator;

  constructor(page: Page) {
    this.page = page;
    this.queryNoEdit = page.locator('#txtQueryNbr');
    this.queryNameEdit = page.locator('#txtQueryName');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.mainTableNameEdit = page.locator('#lupTableName_CodeValue');
    this.key1Edit = page.locator('#lupMainKey1_CodeValue');
    this.bottomMesssageTextView = page.locator("//td[@class = \'statusBar\']//b");
  }

  async enterAtQueryNo(): Promise<void> {
    // uIMapSettings.queryMasterEntry.uIQueryNoEdit.sendKeys(BaseData.getSettingsModuleValue("QueryNo"));
  }

  async enterAtQueryName(): Promise<void> {
    // uIMapSettings.queryMasterEntry.uIQueryNameEdit.sendKeys(BaseData.getSettingsModuleValue("QueryName"));
  }

  async save(): Promise<void> {
    // uIMapSettings.queryMasterEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.queryMasterEntry.uIBottomLeftSideStatusBar.getText());
  }

  async enterAtMainTableName(): Promise<void> {
    // uIMapSettings.queryMasterEntry.uIMainTableNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("MainTableName"));
    // uIMapSettings.queryMasterEntry.uIMainTableNameEdit.sendKeys(Keys.TAB);
  }

  async enterAtKey1(): Promise<void> {
    // uIMapSettings.queryMasterEntry.uIKey1Edit.sendKeys(BaseData.getSettingsModuleValue("Key1"));
    // uIMapSettings.queryMasterEntry.uIKey1Edit.sendKeys(Keys.TAB);
  }

  async clickSaveIcon(): Promise<void> {
    // uIMapSettings.queryMasterEntry.uISaveButton.click();
  }

  async verify3DoYouWantToSaveAllTheEnteredDetailsConfirmationPopupWithCancel(): Promise<void> {
    // popup.confirm.noWithExpectedMessage("(3) Do You Want To Save All Of The Entered Details?");
  }

  async verifyBottomMessageNotAppear(): Promise<void> {
    // verify.ExpectedValueIsFalse(objectIdentification.manualIdentify.controlExist(
    // uIMapSettings.queryMasterEntry.uIBottomMesssageTextView), "Bottom message is appear --> ");
  }

}

export class QueryConfigPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly queryNoEdit: Locator;
  readonly searchButton: Locator;
  readonly manageSectionsButton: Locator;
  readonly manageTablesButton: Locator;
  readonly manageJoinsButton: Locator;
  readonly manageRepositoryButton: Locator;
  readonly manageCopyButton: Locator;
  readonly queryConfigResulTable: Locator;
  readonly queryNameEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.queryNoEdit = page.locator('#txtQueryNbr');
    this.searchButton = page.locator('#cmdSearch');
    this.manageSectionsButton = page.locator("//span[contains(text(),\'Manage Sections\')]");
    this.manageTablesButton = page.locator("//span[contains(text(),\'Manage Tables\')]");
    this.manageJoinsButton = page.locator("//span[contains(text(),\'Manage Joins\')]");
    this.manageRepositoryButton = page.locator("//span[contains(text(),\'Manage Repository\')]");
    this.manageCopyButton = page.locator("//span[contains(text(),\'Copy\')]");
    this.queryConfigResulTable = page.locator('#grdQryMastSrch');
    this.queryNameEdit = page.locator('#txtQueryName');
  }

  async enterAtQueryNo(): Promise<void> {
    // uIMapSettings.queryConfig.uIQueryNoEdit.sendKeys(BaseData.getSettingsModuleValue("QueryNo"));
    // uIMapSettings.queryConfig.uIQueryNoEdit.sendKeys(Keys.TAB);
  }

  async clickSearch(): Promise<void> {
    // uIMapSettings.queryConfig.uISearchButton.click();
  }

  async selectCheckBoxInGrid(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectRandomGridRowCheckbox(uIMapSettings.queryConfig.uIQueryConfigResulTable);
  }

  async clickManageSections(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapSettings.queryConfig.uIManageSectionsButton.click();
  }

  async clickManageTables(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapSettings.queryConfig.uIManageTablesButton.click();
  }

  async clickManageJoins(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapSettings.queryConfig.uIManageJoinsButton.click();
  }

  async clickManageRepository(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapSettings.queryConfig.uIManageRepositoryButton.click();
  }

  async clickCopy(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapSettings.queryConfig.uIManageCopyButton.click();
  }

  async clickAddNew(): Promise<void> {
    // uIMapSettings.queryConfig.uIAddNewButton.click();
  }

}

export class ManageSectionEntryPage {
  readonly page: Page;
  readonly sectionNameEdit: Locator;
  readonly addButton: Locator;
  readonly manageSectionResultTable: Locator;
  readonly saveButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sectionNameEdit = page.locator('#txtSectionName');
    this.addButton = page.locator('#imgAdd');
    this.manageSectionResultTable = page.locator('#grdManageQuery');
    this.saveButton = page.locator('#cmdSave');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
  }

  async enterAtSectionName(): Promise<void> {
    // uIMapSettings.manageSectionEntry.uISectionNameEdit.sendKeys(BaseData.getSettingsModuleValue("SectionName"));
    // uIMapSettings.manageSectionEntry.uISectionNameEdit.sendKeys(Keys.TAB);
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.manageSectionEntry.uIAddButton.click();
  }

  async clickSave(): Promise<void> {
    // uIMapSettings.manageSectionEntry.uISaveButton.click();
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.manageSectionEntry.uIBottomLeftSideStatusBar.getText());
  }

}

export class ManagetableEntryPage {
  readonly page: Page;
  readonly tableNameEdit: Locator;
  readonly addButton: Locator;
  readonly manageTableResultTable: Locator;
  readonly saveButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly resultTable: Locator;
  readonly selectionIcon: Locator;
  readonly resetIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tableNameEdit = page.locator('#lupTableName_CodeValue');
    this.addButton = page.locator('#imgAdd');
    this.manageTableResultTable = page.locator('#grdManageTable');
    this.saveButton = page.locator('#cmdSave');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.resultTable = page.locator('#grdManageTable');
    this.selectionIcon = page.locator('#grdManageTable_it8_0_imgSelection');
    this.resetIcon = page.locator('#cmdRefresh');
  }

  async enterAtTableName(): Promise<void> {
    // uIMapSettings.manageTableEntry.uITableNameEdit.sendKeys(BaseData.getSettingsModuleValue("TableName"));
    // uIMapSettings.manageTableEntry.uITableNameEdit.sendKeys(Keys.TAB);
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.manageTableEntry.uIAddButton.click();
  }

  async save(): Promise<void> {
    // uIMapSettings.manageTableEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.manageTableEntry.uIBottomLeftSideStatusBar.getText());
  }

  async verifyAtTableNameInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapSettings.manageTableEntry.uIResultTable, "Table Name", 0);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("TableName"), text);
  }

  async clickSelectionIcon(): Promise<void> {
    // uIMapSettings.manageTableEntry.uISelectionIcon.click();
  }

  async clickResetIcon(): Promise<void> {
    // uIMapSettings.manageTableEntry.uIResetIcon.click();
  }

  async closeScreen(): Promise<void> {
    // uIMapSettings.manageTableEntry.driver.close();
  }

}

export class JoinsLinkingTablesEntryPage {
  readonly page: Page;
  readonly mainTableNameEdit: Locator;
  readonly linkTableNameEdit: Locator;
  readonly joinTypeDropdown: Locator;
  readonly mainKey1Edit: Locator;
  readonly linkKey1Edit: Locator;
  readonly addButton: Locator;
  readonly manageTableResultTable: Locator;
  readonly saveButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainTableNameEdit = page.locator('#lupMainblName_CodeValue');
    this.linkTableNameEdit = page.locator('#lupLkTblName_CodeValue');
    this.joinTypeDropdown = page.locator('#cddJoinType_DropDown');
    this.mainKey1Edit = page.locator('#lupMainKey1_CodeValue');
    this.linkKey1Edit = page.locator('#lupLinkKey1_CodeValue');
    this.addButton = page.locator('#imgAdd');
    this.manageTableResultTable = page.locator('#grdJoins');
    this.saveButton = page.locator('#cmdSave');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
  }

  async enterAtMainTableName(): Promise<void> {
    // uIMapSettings.joinsLinkingTablesEntry.uIMainTableNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("MainTableName"));
    // uIMapSettings.joinsLinkingTablesEntry.uIMainTableNameEdit.sendKeys(Keys.TAB);
  }

  async enterAtLinkTableName(): Promise<void> {
    // uIMapSettings.joinsLinkingTablesEntry.uILinkTableNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("LinkTableName"));
    // uIMapSettings.joinsLinkingTablesEntry.uILinkTableNameEdit.sendKeys(Keys.TAB);
  }

  async enterAtMainKey1(): Promise<void> {
    // uIMapSettings.joinsLinkingTablesEntry.uIMainKey1Edit.sendKeys(BaseData.getSettingsModuleValue("MainKey1"));
    // uIMapSettings.joinsLinkingTablesEntry.uIMainKey1Edit.sendKeys(Keys.TAB);
  }

  async enterAtLinkKey1(): Promise<void> {
    // uIMapSettings.joinsLinkingTablesEntry.uILinkKey1Edit.sendKeys(BaseData.getSettingsModuleValue("LinkKey1"));
    // uIMapSettings.joinsLinkingTablesEntry.uILinkKey1Edit.sendKeys(Keys.TAB);
  }

  async selectJoinType(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapSettings.joinsLinkingTablesEntry.uIJoinTypeDropdown);
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.joinsLinkingTablesEntry.uIAddButton.click();
  }

  async clickSave(): Promise<void> {
    // uIMapSettings.joinsLinkingTablesEntry.uISaveButton.click();
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.joinsLinkingTablesEntry.uIBottomLeftSideStatusBar.getText());
  }

}

export class QueryRepositoryEntryPage {
  readonly page: Page;
  readonly repositoryEdit: Locator;
  readonly addButton: Locator;
  readonly queryRepositoryResultTable: Locator;
  readonly saveButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.repositoryEdit = page.locator('#lupRepo_CodeValue');
    this.addButton = page.locator('#imgAdd');
    this.queryRepositoryResultTable = page.locator('#grdQueryRepo');
    this.saveButton = page.locator('#cmdSave');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
  }

  async enterAtRepository(): Promise<void> {
    // uIMapSettings.queryRepositoryEntry.uIRepositoryEdit.sendKeys(BaseData.getSettingsModuleValue("Repository"));
    // uIMapSettings.queryRepositoryEntry.uIRepositoryEdit.sendKeys(Keys.TAB);
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.queryRepositoryEntry.uIAddButton.click();
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.queryRepositoryEntry.uIBottomLeftSideStatusBar.getText());
  }

  async clickSave(): Promise<void> {
    // uIMapSettings.queryRepositoryEntry.uISaveButton.click();
  }

}

export class QuickActivityConfigPage {
  readonly page: Page;
  readonly categoryEdit: Locator;
  readonly activityTypeEdit: Locator;
  readonly subCategoryEdit: Locator;
  readonly searchButton: Locator;
  readonly subCategoryButton: Locator;
  readonly activityTypeButton: Locator;
  readonly quickActivityConfigResultTable: Locator;
  readonly activityArrow: Locator;
  readonly activityTypeLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.categoryEdit = page.locator('#lupCategory_CodeValue');
    this.activityTypeEdit = page.locator('#lupActivityType_CodeValue');
    this.subCategoryEdit = page.locator('#lupSubCategory_CodeValue');
    this.searchButton = page.locator('#cmdSearch');
    this.subCategoryButton = page.locator("//span[contains(text(),\'SubCategory\')]");
    this.activityTypeButton = page.locator("//span[contains(text(),\'Activity Type\')]");
    this.quickActivityConfigResultTable = page.locator('#grdCategoryConfig');
    this.activityArrow = page.locator("(//img[@mkr=\'expColBtn\'])[1]");
    this.activityTypeLink = page.locator("//a//span[text()=\'Activity Type\']");
  }

  async clickSubCategory(): Promise<void> {
    // uIMapSettings.quickActivityConfig.uISubCategoryButton.click();
  }

  async selectAtCategoryInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerTextWithoutContains(
    // uIMapSettings.quickActivityConfig.uIQuickActivityConfigResultTable,
    // BaseData.getSettingsModuleValue("Category"));
  }

  async selectAtSubCategoryInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerTextWithoutContains(
    // uIMapSettings.quickActivityConfig.uIQuickActivityConfigResultTable,
    // BaseData.getSettingsModuleValue("SubCategory"));
  }

  async clickActivityArrow(): Promise<void> {
    // uIMapSettings.quickActivityConfig.uIActivityArrow.click();
  }

  async clickActivityType(): Promise<void> {
    // uIMapSettings.quickActivityConfig.uIActivityTypeLink.click();
  }

}

export class SubCategoryMappingPage {
  readonly page: Page;
  readonly categoryEdit: Locator;
  readonly seqNoEdit: Locator;
  readonly subCategoryEdit: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;
  readonly subCategoryResultTable: Locator;
  readonly bottomLeftSideStatusBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.categoryEdit = page.locator('#lupCategory_CodeValue');
    this.seqNoEdit = page.locator('#txtSeqNo');
    this.subCategoryEdit = page.locator('#lupSubCategory_CodeValue');
    this.addButton = page.locator('#imgAdd');
    this.saveButton = page.locator('#cmdSave');
    this.subCategoryResultTable = page.locator('#grdSubCategory');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
  }

  async enterCategory(): Promise<void> {
    // uIMapSettings.subCategoryMapping.uICategoryEdit.sendKeys("06");
    // uIMapSettings.subCategoryMapping.uICategoryEdit.sendKeys(Keys.TAB);
  }

  async enterSubCategory(): Promise<void> {
    // uIMapSettings.subCategoryMapping.uISubCategoryEdit.sendKeys("1");
    // uIMapSettings.subCategoryMapping.uISubCategoryEdit.sendKeys(Keys.TAB);
  }

  async enterSeqNo(): Promise<void> {
    // uIMapSettings.subCategoryMapping.uISeqNoEdit.sendKeys("1");
    // uIMapSettings.subCategoryMapping.uISeqNoEdit.sendKeys(Keys.TAB);
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.subCategoryMapping.uIAddButton.click();
  }

  async save(): Promise<void> {
    // uIMapSettings.subCategoryMapping.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.subCategoryMapping.uIBottomLeftSideStatusBar.getText());
  }

}

export class TextMgmtPage {
  readonly page: Page;
  readonly textNameEdit: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly templateForDropdown: Locator;
  readonly templateForDropdownList: Locator;
  readonly templateForArrow: Locator;
  readonly attachmentsTab: Locator;
  readonly mobileTextTab: Locator;
  readonly detailsTab: Locator;
  readonly relatedReportsTab: Locator;
  readonly fromTextFieldFilled: Locator;

  constructor(page: Page) {
    this.page = page;
    this.textNameEdit = page.locator('#txtName');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.templateForDropdown = page.locator('#cddTempFor_Input');
    this.templateForDropdownList = page.locator("//div[@id=\'cddTempFor_DropDown\']");
    this.templateForArrow = page.locator('#cddTempFor_Arrow');
    this.attachmentsTab = page.locator("//span[contains(text(),\'Attachment\')]");
    this.mobileTextTab = page.locator("//span[contains(text(),\'Mobile Text\')]");
    this.detailsTab = page.locator("//span[text()=\'Details\']");
    this.relatedReportsTab = page.locator("//span[text()=\'Related Reports\']");
    this.fromTextFieldFilled = page.locator("//body[contains(@style,\'font-family:\')]");
  }

  async clickRelatedReportsTab(): Promise<void> {
    // uIMapSettings.textMgmt.uIRelatedReportsTab.click();
  }

  async enterTextName(): Promise<void> {
    // uIMapSettings.textMgmt.uITextNameEdit.sendKeys(randomized.randomString(5));
    // uIMapSettings.textMgmt.uITextNameEdit.sendKeys(Keys.TAB);
  }

  async save(): Promise<void> {
    // uIMapSettings.textMgmt.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.textMgmt.uIBottomLeftSideStatusBar.getText());
  }

  async selectTemplate(): Promise<void> {
    // uIMapSettings.textMgmt.uITemplateForArrow.click();
    // objectIdentification.randomIdentify
    // .selectRadControlDropDownValueSelect(uIMapSettings.textMgmt.uITemplateForDropdown);
    // uIMapSettings.textMgmt.uITemplateForArrow.click();
  }

  async verifyTextNameColor(): Promise<void> {
    // String clr = "rgba(0, 0, 0, 1)";
    // String color = uIMapSettings.textMgmt.uITextNameEdit.getCssValue("color");
    // // System.out.println(cssValue);
    // Playback.threadWait();
    // verify.ExpectedPropertyValueIsEqual(clr, color);
  }

  async close(): Promise<void> {
    // uIMapSettings.textMgmt.driver.close();
  }

  async selectMultipleTemplate(): Promise<void> {
    // uIMapSettings.textMgmt.uITemplateForArrow.click();
    // Playback.threadWait();
    // Playback.threadWait();
    // objectIdentification.randomIdentify.selectRadControlDropDownCheckBoxes("cddTempFor_DropDown", 4);
    // uIMapSettings.textMgmt.uITemplateForArrow.click();
    // uIMapSettings.textMgmt.uITemplateForDropdown.sendKeys(Keys.TAB);
  }

  async verifyTemplateForDropdownAsRadicalDropdown(): Promise<void> {
    // uIMapSettings.textMgmt.uITemplateForArrow.click();
    // String attribute = uIMapSettings.textMgmt.uITemplateForDropdownList.getAttribute("class");
    // verify.ExpectedValueIsTrue(attribute.contains("RadComboBoxDropDown"));
    // uIMapSettings.textMgmt.uITemplateForArrow.click();
  }

  async selectTemplateAsCheckAll(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // uIMapSettings.textMgmt.uITemplateForArrow.click();
    // Playback.pageLoadThreadWait();
    // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(
    // uIMapSettings.textMgmt.uITemplateForDropdownList, "Check All");
    // uIMapSettings.textMgmt.uITemplateForArrow.click();
  }

  async selectAtTemplate(): Promise<void> {
    // uIMapSettings.textMgmt.uITemplateForArrow.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelectWithInput(
    // uIMapSettings.textMgmt.uITemplateForDropdownList, BaseData.getSettingsModuleValue("TemplateFor"));
    // uIMapSettings.textMgmt.uITemplateForArrow.click();
  }

  async verifyUpdateSuccessFullMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapSettings.textMgmt.uIBottomLeftSideStatusBar.getText(),
    // "1003 - Update Successful");
  }

  async switchToAttachmentScreen(): Promise<void> {
    // uIMapSettings.textMgmt.uIAttachmentsTab.click();
    // Playback.pageLoadThreadWait();
    // objectIdentification.windowHandle.switchToFrame("frmTxtAttachMgrEx");
  }

  async enterAtTextName(): Promise<void> {
    // uIMapSettings.textMgmt.uITextNameEdit.clear();
    // uIMapSettings.textMgmt.uITextNameEdit.sendKeys(BaseData.getSettingsModuleValue("TextName"));
    // uIMapSettings.textMgmt.uITextNameEdit.sendKeys(Keys.TAB);
  }

  async clickMobileTextTab(): Promise<void> {
    // uIMapSettings.textMgmt.uIMobileTextTab.click();
  }

}

export class MobileTextTabPage {
  readonly page: Page;
  readonly availableFieldsDropdown: Locator;
  readonly addButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.availableFieldsDropdown = page.locator('#tabKPIText_tmpl1_usrTemplateforText1_cddAvailabletxt_DropDown');
    this.addButton = page.locator('#tabKPIText_tmpl1_usrTemplateforText1_imgAdd');
  }

  async selectAtAvailableFieldsDropdown(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.textMgmt.mobileTextTab.uIAvailableFieldsDropdown,
    // BaseData.getSettingsModuleValue("AvailableFields"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.textMgmt.mobileTextTab.uIAddButton.click();
  }

  async verifyAtTextAvailableInsideForm(): Promise<void> {
    // Playback.gridLoadThreadWait();
    // String text = uIMapSettings.textMgmt.uIFromTextFieldFilled.getText();
    // System.out.println(text);
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("AvailableFields")));
  }

  async switchToTextTempletForm(): Promise<void> {
    // objectIdentification.windowHandle
    // .switchToFrameUsingID("tabKPIText_tmpl1_usrTemplateforText1_rteTempForText_contentIframe");
  }

  async clickAttachmentsTab(): Promise<void> {
    // uIMapSettings.textMgmt.uIAttachmentsTab.click();
    // Playback.controlReadyThreadWait();
    // objectIdentification.windowHandle.switchToFrame("frmTxtAttachMgr");
    // Playback.controlReadyThreadWait();
  }

  async verifyDetailsTabColorInBlue(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("rgba(0, 0, 255, 1)",
    // uIMapSettings.textMgmt.uIDetailsTab.getCssValue("color"));
  }

  async verifyMobileTextTabColorInBlue(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("rgba(0, 0, 255, 1)",
    // uIMapSettings.textMgmt.uIMobileTextTab.getCssValue("color"));
  }

  async verifyAttachmentTabColorInBlue(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("rgba(0, 0, 255, 1)",
    // uIMapSettings.textMgmt.uIAttachmentsTab.getCssValue("color"));
  }

  async verifyRelatedReportsTabColorInBlue(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("rgba(0, 0, 255, 1)",
    // uIMapSettings.textMgmt.uIRelatedReportsTab.getCssValue("color"));
  }

  async verifyAtSelectedTemplate(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("TemplateFor"),
    // uIMapSettings.textMgmt.uITemplateForDropdown.getAttribute("value"));
  }

  async clickDetailsTab(): Promise<void> {
    // uIMapSettings.textMgmt.uIDetailsTab.click();
  }

  async saveAndClose(): Promise<void> {
    // uIMapSettings.textMgmt.uISaveNCloseButton.click();
    // popup.confirm.yes();
  }

}

export class DetailsTabPage {
  readonly page: Page;
  readonly richTextEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.richTextEdit = page.locator("//body");
  }

  async enterAtRichText(): Promise<void> {
    // objectIdentification.windowHandle
    // .switchToFrameUsingID("tabKPIText_tmpl0_ctrlUsrKPITxtEdit_rteKPITxt_contentIframe");
    // uIMapSettings.textMgmt.detailsTab.uIRichTextEdit.sendKeys(BaseData.getSettingsModuleValue("Text"));
  }

  async verifyPasswordFontAsConsolas(): Promise<void> {
    // objectIdentification.windowHandle
    // .switchToFrameUsingID("tabKPIText_tmpl0_ctrlUsrKPITxtEdit_rteKPITxt_contentIframe");
    // String style = uIMapSettings.textMgmt.detailsTab.uIRichTextEdit
    // .findElement(By.xpath("//span[text()='[Password]']")).getAttribute("style");
    // boolean consolas = style.contains("font-family: Consolas");
    // verify.ExpectedValueIsTrue(consolas, "Different font is found for [Password] --> ");
  }

  async verifyAtText(): Promise<void> {
    // String text = uIMapSettings.textMgmt.uITextNameEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("TextName"), text);
  }

  async clickTextName(): Promise<void> {
    // uIMapSettings.textMgmt.uITextNameEdit.click();
  }

}

export class RelatedReportsTabPage {
  readonly page: Page;
  readonly reportNameLookUpIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.reportNameLookUpIcon = page.locator('#tabKPIText_tmpl4_usrRptTemplate1_lupReportID_imgBtn');
  }

  async clickReportNameLookUpIcon(): Promise<void> {
    // uIMapSettings.textMgmt.relatedReportsTab.uIReportNameLookUpIcon.click();
  }

}

export class CreateUserQueryPage {
  readonly page: Page;
  readonly userQueryNameEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly masterQueryTab: Locator;
  readonly parametersTab: Locator;
  readonly orderByTab: Locator;
  readonly saveButton: Locator;
  readonly resetIcon: Locator;
  readonly printIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userQueryNameEdit = page.locator('#txtUserQueryName');
    this.descriptionEdit = page.locator('#txtDesc');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.masterQueryTab = page.locator("//span[contains(text(),\'Master Query\')]");
    this.parametersTab = page.locator("//span[contains(text(),\'Parameters\')]");
    this.orderByTab = page.locator("//span[contains(text(),\'Order By\')]");
    this.saveButton = page.locator('#cmdSave');
    this.resetIcon = page.locator('#cmdRefresh');
    this.printIcon = page.locator('#cmdPrint');
  }

  async enterUseryQueryName(): Promise<void> {
    // uIMapSettings.createUserQuery.uIUserQueryNameEdit.sendKeys(randomized.randomString(5));
  }

  async enterDescription(): Promise<void> {
    // uIMapSettings.createUserQuery.uIDescriptionEdit.sendKeys("Automation Test");
  }

  async clickMasterQueryTab(): Promise<void> {
    // uIMapSettings.createUserQuery.uIMasterQueryTab.click();
  }

  async save(): Promise<void> {
    // uIMapSettings.createUserQuery.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verify1002AdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.createUserQuery.uIBottomLeftSideStatusBar.getText(),
    // "verify 1002 addition successful message is displayed");
  }

  async clickResetIcon(): Promise<void> {
    // uIMapSettings.createUserQuery.uIResetIcon.click();
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapSettings.createUserQuery.uIPrintIcon.click();
  }

  async verifyUserQueryNameIsEmpty(): Promise<void> {
    // boolean empty = uIMapSettings.createUserQuery.uIUserQueryNameEdit.getText().isEmpty();
    // verify.ExpectedValueIsTrue(empty);
  }

}

export class MasterQueryTabPage {
  readonly page: Page;
  readonly masterQueryNameEdit: Locator;
  readonly masterQueryResultTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.masterQueryNameEdit = page.locator('#tabCrtUsrQry_tmpl0_UsrWhereDtl1_lupMasterQueryName_CodeValue');
    this.masterQueryResultTable = page.locator('#tabCrtUsrQry_tmpl0_UsrWhereDtl1_grdCrtUsrQry');
  }

  async enterMasterQueryName(): Promise<void> {
    // uIMapSettings.createUserQuery.masterQueryTab.uIMasterQueryNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("MasterQueryName"));
    // uIMapSettings.createUserQuery.masterQueryTab.uIMasterQueryNameEdit.sendKeys(Keys.TAB);
  }

}

export class XMLExporterMasterPage {
  readonly page: Page;
  readonly masterFileEdit: Locator;
  readonly rootNodeNameEdit: Locator;
  readonly rootTagNameEdit: Locator;
  readonly saveButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.masterFileEdit = page.locator('#txtMasterFileName');
    this.rootNodeNameEdit = page.locator('#txtNodeName');
    this.rootTagNameEdit = page.locator('#txtComments');
    this.saveButton = page.locator('#cmdSave');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
  }

  async enterMasterFile(): Promise<void> {
    // uIMapSettings.xmlExporterMaster.uIMasterFileEdit.sendKeys(randomized.randomString(5));
  }

  async enterAtMasterFile(): Promise<void> {
    // uIMapSettings.xmlExporterMaster.uIMasterFileEdit.sendKeys(BaseData.getSettingsModuleValue("MasterFile"));
  }

  async enterRootNodeName(): Promise<void> {
    // uIMapSettings.xmlExporterMaster.uIRootNodeNameEdit.sendKeys(randomized.randomString(7));
  }

  async enterAtRootNodeName(): Promise<void> {
    // uIMapSettings.xmlExporterMaster.uIRootNodeNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("RootNodeName"));
  }

  async enterRootTagNamespace(): Promise<void> {
    // uIMapSettings.xmlExporterMaster.uIRootTagNameEdit.sendKeys(randomized.randomString(25));
  }

  async save(): Promise<void> {
    // uIMapSettings.xmlExporterMaster.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verify1002AdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.xmlExporterMaster.uIBottomLeftSideStatusBar.getText(),
    // "verify 1002 addition successful message is displayed");
  }

}

export class XMLExportConfigPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly manageParentNodessButton: Locator;
  readonly manageDataTablesButton: Locator;
  readonly manageWhereClauseButton: Locator;
  readonly manageDisplayFieldsButton: Locator;
  readonly manageStaticNodes: Locator;
  readonly searchButton: Locator;
  readonly masterFileEdit: Locator;
  readonly rootTagEdit: Locator;
  readonly xMLExportConfigResultTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("//span[contains(text(),\'Add new\')]");
    this.manageParentNodessButton = page.locator("//span[contains(text(),\'Manage parent nodes\')]");
    this.manageDataTablesButton = page.locator("//span[contains(text(),\'Manage data tables\')]");
    this.manageWhereClauseButton = page.locator("//span[contains(text(),\'Manage where clause\')]");
    this.manageDisplayFieldsButton = page.locator("//span[contains(text(),\'Manage display fields\')]");
    this.manageStaticNodes = page.locator("//span[contains(text(),\'Manage static nodes\')]");
    this.searchButton = page.locator('#cmdSearch');
    this.masterFileEdit = page.locator('#txtMasterFile');
    this.rootTagEdit = page.locator('#txtRootTag');
    this.xMLExportConfigResultTable = page.locator('#grdXMLMst');
  }

  async enterAtMasterFile(): Promise<void> {
    // uIMapSettings.xmlExportConfig.uIMasterFileEdit.sendKeys(BaseData.getSettingsModuleValue("MasterFile"));
  }

  async clickSearch(): Promise<void> {
    // uIMapSettings.xmlExportConfig.uISearchButton.click();
  }

  async selectGridChexkBox(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectRandomGridRowCheckbox(uIMapSettings.xmlExportConfig.uIXMLExportConfigResultTable);
  }

  async clickManageParentNodesLink(): Promise<void> {
    // uIMapSettings.xmlExportConfig.uIManageParentNodessButton.click();
  }

  async clickManageDataTablesLink(): Promise<void> {
    // uIMapSettings.xmlExportConfig.uIManageDataTablesButton.click();
  }

  async clickManageWhereClauseLink(): Promise<void> {
    // uIMapSettings.xmlExportConfig.uIManageWhereClauseButton.click();
  }

  async clickManageDisplayFieldsLink(): Promise<void> {
    // uIMapSettings.xmlExportConfig.uIManageDisplayFieldsButton.click();
  }

  async clickManageStaticNodesLink(): Promise<void> {
    // uIMapSettings.xmlExportConfig.uIManageStaticNodes.click();
  }

  async clickAddNew(): Promise<void> {
    // uIMapSettings.xmlExportConfig.uIAddNewButton.click();
  }

}

export class XMLExporterParentNodesPage {
  readonly page: Page;
  readonly nodeNameEdit: Locator;
  readonly parentNodeEdit: Locator;
  readonly addButton: Locator;
  readonly resultTable: Locator;
  readonly saveButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nodeNameEdit = page.locator('#txtNodeName');
    this.parentNodeEdit = page.locator('#lupParentNode_CodeValue');
    this.addButton = page.locator('#imgAdd');
    this.resultTable = page.locator('#grdXMLParentNodes');
    this.saveButton = page.locator('#cmdSave');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
  }

  async enterAtNodeName(): Promise<void> {
    // uIMapSettings.xmlExporterParentNodes.uINodeNameEdit.sendKeys(BaseData.getSettingsModuleValue("AutoNode"));
  }

  async enterAtParentNode(): Promise<void> {
    // uIMapSettings.xmlExporterParentNodes.uIParentNodeEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ParentNode"));
    // uIMapSettings.xmlExporterParentNodes.uIParentNodeEdit.sendKeys(Keys.TAB);
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.xmlExporterParentNodes.uIAddButton.click();
  }

  async save(): Promise<void> {
    // uIMapSettings.xmlExporterParentNodes.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verify1002AdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.xmlExporterParentNodes.uIBottomLeftSideStatusBar.getText(),
    // "verify 1002 addition successful message is displayed");
  }

}

export class XMLExporterDataTablePage {
  readonly page: Page;
  readonly tableNameEdit: Locator;
  readonly nodeNameEdit: Locator;
  readonly addButton: Locator;
  readonly complexQueryEdit: Locator;
  readonly resultTable: Locator;
  readonly saveButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tableNameEdit = page.locator('#txtTableName');
    this.nodeNameEdit = page.locator('#lupNode_CodeValue');
    this.addButton = page.locator('#imgAdd');
    this.complexQueryEdit = page.locator('#txtComplexQuery');
    this.resultTable = page.locator('#grdDataTbl');
    this.saveButton = page.locator('#cmdSave');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
  }

  async enterAtTableName(): Promise<void> {
    // uIMapSettings.xmlExporterDataTable.uITableNameEdit.sendKeys(BaseData.getSettingsModuleValue("TableName"));
  }

  async enterAtNodeName(): Promise<void> {
    // uIMapSettings.xmlExporterDataTable.uINodeNameEdit.sendKeys(BaseData.getSettingsModuleValue("NodeName"));
    // uIMapSettings.xmlExporterDataTable.uINodeNameEdit.sendKeys(Keys.TAB);
  }

  async enterComplexQuery(): Promise<void> {
    // uIMapSettings.xmlExporterDataTable.uIComplexQueryEdit.sendKeys(randomized.randomString(10));
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.xmlExporterDataTable.uIAddButton.click();
  }

  async save(): Promise<void> {
    // uIMapSettings.xmlExporterDataTable.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verify1002AdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.xmlExporterDataTable.uIBottomLeftSideStatusBar.getText(),
    // "verify 1002 addition successful message is displayed");
  }

}

export class XMLExporterWhereClausePage {
  readonly page: Page;
  readonly tableEdit: Locator;
  readonly whereFieldEdit: Locator;
  readonly inputEdit: Locator;
  readonly resultTable: Locator;
  readonly saveButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly addButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tableEdit = page.locator('#lupTable_CodeValue');
    this.whereFieldEdit = page.locator('#txtWhereClause');
    this.inputEdit = page.locator('#txtInput');
    this.resultTable = page.locator('#grdWhereClause');
    this.saveButton = page.locator('#cmdSave');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.addButton = page.locator('#imgAdd');
  }

  async enterAtTable(): Promise<void> {
    // uIMapSettings.xmlExporterWhereClause.uITableEdit.sendKeys(BaseData.getSettingsModuleValue("Table"));
    // uIMapSettings.xmlExporterWhereClause.uITableEdit.sendKeys(Keys.TAB);
  }

  async enterAtWhereField(): Promise<void> {
    // uIMapSettings.xmlExporterWhereClause.uIWhereFieldEdit
    // .sendKeys(BaseData.getSettingsModuleValue("WhereField"));
    // uIMapSettings.xmlExporterWhereClause.uIWhereFieldEdit.sendKeys(Keys.TAB);
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.xmlExporterWhereClause.uIAddButton.click();
  }

  async save(): Promise<void> {
    // uIMapSettings.xmlExporterWhereClause.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verify1002AdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.xmlExporterWhereClause.uIBottomLeftSideStatusBar.getText(),
    // "verify 1002 addition successful message is displayed");
  }

}

export class XMLExporterTableDisplayPage {
  readonly page: Page;
  readonly xMLTagNameEdit: Locator;
  readonly tableEdit: Locator;
  readonly dataField: Locator;
  readonly resultTable: Locator;
  readonly saveButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly addButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.xMLTagNameEdit = page.locator('#txtDispNodeName');
    this.tableEdit = page.locator('#lupTable_CodeValue');
    this.dataField = page.locator('#txtColumn');
    this.resultTable = page.locator('#grdTblDisp');
    this.saveButton = page.locator('#cmdSave');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.addButton = page.locator('#imgAdd');
  }

  async enterAtXMLTagName(): Promise<void> {
    // uIMapSettings.xmlExporterTableDisplay.uIXMLTagNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("XMLTagName"));
  }

  async enterAtTable(): Promise<void> {
    // uIMapSettings.xmlExporterTableDisplay.uITableEdit.sendKeys(BaseData.getSettingsModuleValue("Table"));
    // uIMapSettings.xmlExporterTableDisplay.uITableEdit.sendKeys(Keys.TAB);
  }

  async enterAtDataField(): Promise<void> {
    // uIMapSettings.xmlExporterTableDisplay.uIXMLTagNameEdit
    // .sendKeys(BaseData.getSettingsModuleValue("DataField"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.xmlExporterTableDisplay.uIAddButton.click();
  }

  async save(): Promise<void> {
    // uIMapSettings.xmlExporterTableDisplay.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verify1002AdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.xmlExporterTableDisplay.uIBottomLeftSideStatusBar.getText(),
    // "verify 1002 addition successful message is displayed");
  }

}

export class XMLExporterStaticNodePage {
  readonly page: Page;
  readonly nodeNameEdit: Locator;
  readonly nodeValueEdit: Locator;
  readonly parentNodeEdit: Locator;
  readonly resultTable: Locator;
  readonly saveButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly addButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nodeNameEdit = page.locator('#txtNodeName');
    this.nodeValueEdit = page.locator('#txtNodeValue');
    this.parentNodeEdit = page.locator('#lupParentNode_CodeValue');
    this.resultTable = page.locator('#grdStaticNode');
    this.saveButton = page.locator('#cmdSave');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.addButton = page.locator('#imgAdd');
  }

  async enterAtNodeName(): Promise<void> {
    // uIMapSettings.xmlExporterStaticNode.uINodeNameEdit.sendKeys(BaseData.getSettingsModuleValue("NodeName"));
  }

  async enterAtParentNode(): Promise<void> {
    // uIMapSettings.xmlExporterStaticNode.uIParentNodeEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ParentNode"));
    // uIMapSettings.xmlExporterStaticNode.uIParentNodeEdit.sendKeys(Keys.TAB);
  }

  async enterParentNode(): Promise<void> {
    // uIMapSettings.xmlExporterStaticNode.uIParentNodeEdit.sendKeys("Names");
    // uIMapSettings.xmlExporterStaticNode.uIParentNodeEdit.sendKeys(Keys.TAB);
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.xmlExporterStaticNode.uIAddButton.click();
  }

  async save(): Promise<void> {
    // uIMapSettings.xmlExporterStaticNode.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verify1002AdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.xmlExporterStaticNode.uIBottomLeftSideStatusBar.getText(),
    // "verify 1002 addition successful message is displayed");
  }

}

export class ParameterNameEntryPage {
  readonly page: Page;
  readonly mainTab: Locator;
  readonly mJCategory: Locator;
  readonly saveButton: Locator;
  readonly statusBar: Locator;
  readonly field1205Txt: Locator;
  readonly saveAndCloseIcon: Locator;
  readonly inactiveCheckbox: Locator;
  readonly mainTabForFire: Locator;
  readonly helpTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainTab = page.locator("//span[@class=\'igtab_BlueThemeTHText igtab_BlueThemeTHTextSel\']");
    this.mJCategory = page.locator('#tabParam_tmpl0_UsrParamMain1_cddMJGlobal_DropDown');
    this.saveButton = page.locator('#cmdSave');
    this.statusBar = page.locator("//td[@class=\'status\']//b");
    this.field1205Txt = page.locator('#param_1205_Dyn');
    this.saveAndCloseIcon = page.locator('#cmdSaveNClose');
    this.inactiveCheckbox = page.locator('#chkIsActive');
    this.mainTabForFire = page.locator("//span[@class=\'igtab_RedThemeTHText igtab_RedThemeTHTextSel\']");
    this.helpTab = page.locator("//span[text()=\'Help\']");
  }

  async navigateToMainTab(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // uIMapSettings.parameterNameEntry.uIMainTab.click();
  }

  async selectAtMJCategory(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.parameterNameEntry.uIMJCategory,
    // BaseData.getSettingsModuleValue("MJCategory"));
    // uIMapSettings.parameterNameEntry.uIMJCategory.sendKeys(Keys.TAB);
  }

  async SaveScreen(): Promise<void> {
    // uIMapSettings.parameterNameEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async VerifyUpdateSuccessfulStatusMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1003 - Update Successful",
    // uIMapSettings.parameterNameEntry.uIStatusBar.getText());
  }

  async close(): Promise<void> {
    // uIMapSettings.parameterNameEntry.driver.close();
  }

  async maximizeWindow(): Promise<void> {
    // uIMapSettings.parameterNameEntry.driver.manage().window().maximize();
  }

  async selectMJCategoryAsShared(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.parameterNameEntry.uIMJCategory,
    // "Shared");
  }

  async saveAndClose(): Promise<void> {
    // uIMapSettings.parameterNameEntry.uISaveAndCloseIcon.click();
    // popup.confirm.yes();
  }

  async clickInactiveCheckbox(): Promise<void> {
    // uIMapSettings.parameterNameEntry.uIInactiveCheckbox.click();
  }

}

export class MainTab3Page {
  readonly page: Page;
  readonly allStatusCheckBox: Locator;
  readonly nFIRSIncidentTypeEdit: Locator;
  readonly nERISIncidentTypeEdit: Locator;
  readonly defaultFrequencyDropDown: Locator;
  readonly dispatchToEnrouteEdit: Locator;
  readonly arriveToInServiceEdit: Locator;
  readonly enrouteToArriveEdit: Locator;
  readonly defaultTemplateForNFIRSRemarksDropDown: Locator;
  readonly shareCallsWithCFSToOtherAgenciesCheckbox: Locator;
  readonly dashboardEntrySecondsEdit: Locator;
  readonly dashboardEntrySortSeqEdit: Locator;
  readonly dashboardEntryAddButton: Locator;
  readonly dashboardEntryClearButton: Locator;
  readonly dashboardNameDropDown: Locator;
  readonly dashboardEntryTable: Locator;
  readonly groupSortDropDown: Locator;
  readonly sortEdit: Locator;
  readonly passwordCheckbox: Locator;
  readonly customNameEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allStatusCheckBox = page.locator('#tabQuestion_tmpl0_usrCADUIConfigMain1_chkAllStatus');
    this.nFIRSIncidentTypeEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD2_lupCADIncType_CodeValue');
    this.nERISIncidentTypeEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD2_lupNERISIncType_CodeValue');
    this.defaultFrequencyDropDown = page.locator('#tabCFSCode_tmpl0_UsrCAD2_cddFrequency_DropDown');
    this.dispatchToEnrouteEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD2_txtDispatch');
    this.arriveToInServiceEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD2_txtArrive');
    this.enrouteToArriveEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD2_txtEnroute');
    this.defaultTemplateForNFIRSRemarksDropDown = page.locator('#tabCFSCode_tmpl0_UsrCAD2_lstTextName');
    this.shareCallsWithCFSToOtherAgenciesCheckbox = page.locator('#tabCFSCode_tmpl0_UsrCAD2_chkIsPnxCAD2CAD');
    this.dashboardEntrySecondsEdit = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_txtseconds');
    this.dashboardEntrySortSeqEdit = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_txtsortseq');
    this.dashboardEntryAddButton = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_imgMobileReportPathAdd');
    this.dashboardEntryClearButton = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_imgMobileReportPathAdd');
    this.dashboardNameDropDown = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_cboDashboardName');
    this.dashboardEntryTable = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_grdMobileReportPath');
    this.groupSortDropDown = page.locator('#tabParam_tmpl0_UsrParamMain1_radGroupName_Input');
    this.sortEdit = page.locator('#tabParam_tmpl0_UsrParamMain1_txtSortSeqNo');
    this.passwordCheckbox = page.locator('#tabParam_tmpl0_UsrParamMain1_chkIsPassword');
    this.customNameEdit = page.locator('#tabRepo_tmpl0_usrRepoMain1_txtCustomName');
  }

  async selectAtGroupSort(i: number): Promise<void> {
    // uIMapSettings.parameterNameEntry.mainTab.uIGroupSortDropDown.click();
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.selectRadControlDropDownValue(
    // uIMapSettings.parameterNameEntry.mainTab.uIGroupSortDropDown,
    // BaseData.getSettingsModuleValue("GroupSort" + i));
    // Playback.controlReadyThreadWait();
    // uIMapSettings.parameterNameEntry.mainTab.uIGroupSortDropDown.click();
  }

  async enterAtSortNo(): Promise<void> {
    // uIMapSettings.parameterNameEntry.mainTab.uISortEdit.sendKeys(BaseData.getSettingsModuleValue("Sort"));
    // uIMapSettings.parameterNameEntry.mainTab.uISortEdit.sendKeys(Keys.TAB);
  }

  async clearSortNo(): Promise<void> {
    // uIMapSettings.parameterNameEntry.mainTab.uISortEdit.clear();
  }

  async verifyPasswordCheckboxDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.parameterNameEntry.mainTab.uIPasswordCheckbox
    // .getAttribute("disabled").contains("true"));
  }

  async verifyPasswordCheckboxNotSelected(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapSettings.parameterNameEntry.mainTab.uIPasswordCheckbox.isSelected());
  }

  async closeScreen(): Promise<void> {
    // uIMapSettings.parameterNameEntry.driver.close();
  }

  async verifyPasswordCheckboxEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.parameterNameEntry.mainTab.uIPasswordCheckbox.isEnabled());
  }

  async clickPasswordCheckbox(): Promise<void> {
    // uIMapSettings.parameterNameEntry.mainTab.uIPasswordCheckbox.click();
  }

  async navigateToMainTabForFire(): Promise<void> {
    // uIMapSettings.parameterNameEntry.uIMainTabForFire.click();
  }

  async clickSaveAndClose(): Promise<void> {
    // uIMapSettings.parameterNameEntry.uISaveAndCloseIcon.click();
  }

  async switchToHelpTab(): Promise<void> {
    // uIMapSettings.parameterNameEntry.uIHelpTab.click();
    // objectIdentification.windowHandle.switchToFrame("frmTextMgrEx.aspx");
  }

}

export class HelpTab2Page {
  readonly page: Page;
  readonly richTextBox: Locator;
  readonly dictateUsingMobile: Locator;

  constructor(page: Page) {
    this.page = page;
    this.richTextBox = page.locator('#ctrlUsrKPITxtEdit_rteKPITxt');
    this.dictateUsingMobile = page.locator("//span[text()=\'Dictate Using Mobile\']");
  }

  async clickDictateUsingMobile(): Promise<void> {
    // uIMapSettings.parameterNameEntry.helpTab.uIDictateUsingMobile.click();
  }

  async switchToChargeCodes(): Promise<void> {
    // objectIdentification.windowHandle.switchToWindow("Charge Codes");
  }

}

export class StorageLocationPage {
  readonly page: Page;
  readonly searchButton: Locator;
  readonly storageResultTable: Locator;
  readonly jurisComboBox: Locator;
  readonly codeEdit: Locator;
  readonly locationUseForComboBox: Locator;
  readonly descriptionEdit: Locator;
  readonly inactiveCheckBox: Locator;
  readonly addNewButton: Locator;
  readonly lockerCheckBox: Locator;
  readonly printIcon: Locator;
  readonly excelIcon: Locator;
  readonly barcodeBatchPrint: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchButton = page.locator('#cmdSearch');
    this.storageResultTable = page.locator('#grdStorage');
    this.jurisComboBox = page.locator('#lstJuris');
    this.codeEdit = page.locator('#txtCode');
    this.locationUseForComboBox = page.locator('#cddLocUsed_DropDown');
    this.descriptionEdit = page.locator('#txtDesc');
    this.inactiveCheckBox = page.locator('#chkInActive');
    this.addNewButton = page.locator("(//span[contains(text(),\'Add New\')])");
    this.lockerCheckBox = page.locator('#chkLocker');
    this.printIcon = page.locator("//img[contains(@src,\'/KPIImages/ico/16_print.gif\')]");
    this.excelIcon = page.locator("//img[contains(@src,\'/KPIImages/ico/16_excel.gif\')]");
    this.barcodeBatchPrint = page.locator("//img[@title=\'Barcode Batch Print\']");
  }

  async clickAddNewButton(): Promise<void> {
    // uIMapSettings.storageLocation.uIAddNewButton.click();
  }

  async enterAtDescription(): Promise<void> {
    // uIMapSettings.storageLocation.uIDescriptionEdit.sendKeys(BaseData.getSettingsModuleValue("Description"));
  }

  async clickSearchButton(): Promise<void> {
    // uIMapSettings.storageLocation.uISearchButton.click();
  }

  async VerifyAtDescriptionInGrid(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // Assert.assertEquals(BaseData.getSettingsModuleValue("Description"),
    // objectIdentification.manualIdentify.getGridCell(uIMapSettings.storageLocation.uIStorageResultTable,
    // BaseData.getSettingsModuleValue("Description")).getText());
  }

  async clickRandomRowInGrid(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow(uIMapSettings.storageLocation.uIStorageResultTable);
  }

  async reloadStorageLocation(): Promise<void> {
    // objectIdentification.manualIdentify.reloadScreen("Storage Location");
  }

  async selectAtJuris(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.storageLocation.uIJurisComboBox,
    // BaseData.getSettingsModuleValue("Juris"));
  }

  async verifyAtJurisInGrid(): Promise<void> {
    // List<WebElement> juris = objectIdentification.manualIdentify
    // .getGridTableColumnCells(uIMapSettings.storageLocation.uIStorageResultTable, "Juris");
    // for (WebElement jury : juris) {
    // System.out.println(jury.getText());
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Juris").substring(0, 2),
    // jury.getText());
  }

  async EnterAtCode(): Promise<void> {
    // uIMapSettings.storageLocation.uICodeEdit.sendKeys(BaseData.getSettingsModuleValue("Code"));
  }

  async enterCode(Code: string): Promise<void> {
    // uIMapSettings.storageLocation.uICodeEdit.sendKeys(Code);
  }

  async verifyAtCodeInGrid(): Promise<void> {
    // List<WebElement> codevalues = objectIdentification.manualIdentify
    // .getGridTableColumnCells(uIMapSettings.storageLocation.uIStorageResultTable, "Code");
    // for (WebElement code : codevalues) {
    // System.out.println(code.getText());
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Code"), code.getText());
  }

  async selectAtLocationUseFor(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.storageLocation.uILocationUseForComboBox,
    // BaseData.getSettingsModuleValue("LocationType"));
  }

  async verifyAtLocationUseForInGrid(jsonIndexValue: number): Promise<void> {
    // List<WebElement> types = objectIdentification.manualIdentify
    // .getGridTableColumnCells(uIMapSettings.storageLocation.uIStorageResultTable, "Location Use For");
    // for (WebElement type : types) {
    // System.out.println(type.getText());
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("LocationUseFor" + jsonIndexValue), type.getText());
  }

  async clickLockerCheckBox(): Promise<void> {
    // uIMapSettings.storageLocation.uILockerCheckBox.click();
  }

  async verifyLockerCheckedInGrid(): Promise<void> {
    // List<WebElement> lockers = objectIdentification.manualIdentify
    // .getGridTableColumnCells(uIMapSettings.storageLocation.uIStorageResultTable, "Locker");
    // for (WebElement locker : lockers) {
    // WebElement check = locker.findElement(By.xpath("//img[@title='Checked']"));
    // System.out.println(check.getAttribute("title"));
    // verify.ExpectedValueIsTrue(check.getAttribute("title").equals("Checked"));
  }

  async clickInactiveCheckBox(): Promise<void> {
    // uIMapSettings.storageLocation.uIInactiveCheckBox.click();
  }

  async verifyInactiveCheckedInGrid(): Promise<void> {
    // List<WebElement> InactiveBoxes = objectIdentification.manualIdentify
    // .getGridTableColumnCells(uIMapSettings.storageLocation.uIStorageResultTable, "Inactive");
    // for (WebElement InactiveBox : InactiveBoxes) {
    // if (objectIdentification.manualIdentify
    // .controlExist(InactiveBox.findElement(By.xpath(".//img[@title='Checked']"))) == true) {
    // WebElement inactive = InactiveBox.findElement(By.xpath(".//img[@title='Checked']"));
    // System.out.println(inactive.getAttribute("title"));
    // verify.ExpectedValueIsTrue(inactive.getAttribute("title").equals("Checked"));
  }

  async verifyRowInGrayColor(): Promise<void> {
    // List<WebElement> rows = objectIdentification.manualIdentify
    // .getGridTableRowsCollection(uIMapSettings.storageLocation.uIStorageResultTable);
    // for (WebElement row : rows) {
    // if (objectIdentification.manualIdentify
    // .controlExist(row.findElement(By.xpath("//tr[contains(@class, 'InActive')]")))) {
    // WebElement inactive = row.findElement(By.xpath("//tr[contains(@class, 'InActive')]"));
    // System.out.println(inactive.getCssValue("color"));
    // verify.ExpectedValueIsTrue(inactive.getCssValue("color").contains("rgba(128, 128, 128, 1)"));
  }

  async verifyAtLocationUseForBasedOnDescription(): Promise<void> {
    // String type = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.storageLocation.uIStorageResultTable,
    // BaseData.getSettingsModuleValue("Desc"), "Location Use For")
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("LocationUseFor"), type);
  }

  async enterAtInactiveDescription(): Promise<void> {
    // uIMapSettings.storageLocation.uIDescriptionEdit.sendKeys(BaseData.getSettingsModuleValue("InactiveDesc"));
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapSettings.storageLocation.uIPrintIcon.click();
  }

  async clickExcelIcon(): Promise<void> {
    // uIMapSettings.storageLocation.uIExcelIcon.click();
  }

  async getHeaderColumn(): Promise<string[]> {
    // WebElement gridHeaderTableRow = objectIdentification.manualIdentify
    // .getGridHeaderTableRow(uIMapSettings.storageLocation.uIStorageResultTable);
    // List<WebElement> findElements = gridHeaderTableRow.findElements(By.xpath(".//th"));
    // List<String> value = new ArrayList<String>();
    // for (WebElement Elements : findElements) {
    // if (!(Elements.getText() == null) && !(Elements.getText() == "")) {
    // value.add(Elements.getText());
    // return value;
  }

  async verifyColumnsSortingAsAscending(ColumnName: string): Promise<void> {
    // List<String> ColumnValue = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.storageLocation.uIStorageResultTable, ColumnName);
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedAscending(
    // uIMapSettings.storageLocation.uIStorageResultTable, ColumnName, ColumnValue);
  }

  async verifyColumnsSortingAsDescending(ColumnName: string): Promise<void> {
    // List<String> ColumnValue = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.storageLocation.uIStorageResultTable, ColumnName);
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedDescending(
    // uIMapSettings.storageLocation.uIStorageResultTable, ColumnName, ColumnValue);
  }

  async verifyAtLocationCodeInGrid(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.storageLocation.uIStorageResultTable,
    // BaseData.getSettingsModuleValue("LocationCode"));
    // verify.ExpectedValueIsTrue(
    // gridRowByCellInnerText.getText().contains(BaseData.getSettingsModuleValue("LocationCode")));
  }

  async clickGridHeader(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridHeaderColumnName(
    // uIMapSettings.storageLocation.uIStorageResultTable,
    // BaseData.getSettingsModuleValue("ColumnName" + i));
  }

  async verifyGridRowCount(): Promise<void> {
    // int gridTableRowsCount = objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapSettings.storageLocation.uIStorageResultTable);
    // verify.ExpectedValueIsTrue(gridTableRowsCount != 0, "Grid Row Count is equal to Zero");
  }

  async getColumnValueInGrid(i: number): Promise<string[]> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.storageLocation.uIStorageResultTable,
    // BaseData.getSettingsModuleValue("ColumnName" + i));
    // return gridTableColumnValues;
  }

  async clickBarcodeBatchPrint(): Promise<void> {
    // uIMapSettings.storageLocation.uIBarcodeBatchPrint.click();
  }

  async verifyColunmValuInsidePDF(readPdf: string): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.storageLocation.uIStorageResultTable, BaseData.getSettingsModuleValue("ColunmName"));
    // for (String Columnvalues : gridTableColumnValues) {
    // objectIdentification.readPDF.verifyContentInsidePDF(readPdf, Columnvalues);
  }

  async verifyAtLocationUseForColumnValuesInGrid(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.storageLocation.uIStorageResultTable, "Location Use For");
    // for (String value : gridTableColumnValues) {
    // verify.ExpectedValueIsTrue(value.equals(BaseData.getSettingsModuleValue("LocationUseFor")));
  }

  async verifyAtCodeColumnValueInGrid(): Promise<void> {
    // List<WebElement> codevalues = objectIdentification.manualIdentify
    // .getGridTableColumnCells(uIMapSettings.storageLocation.uIStorageResultTable, "Code");
    // for (WebElement code : codevalues) {
    // System.out.println(code.getText());
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Code"),
    // code.getText().substring(0, 2));
  }

  async selectCodeInGrid(code: string): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText
    // (uIMapSettings.storageLocation.uIStorageResultTable,code);
  }

}

export class StorageLocationEntryPage {
  readonly page: Page;
  readonly codeEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly locationUseForComboBox: Locator;
  readonly lockerCheckbox: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly storageBuilding: Locator;
  readonly storageRoom: Locator;
  readonly storageRow: Locator;
  readonly storageShelf: Locator;
  readonly notInInventoryRoomCheckbox: Locator;
  readonly locationCodeEdit: Locator;
  readonly barcodeEdit: Locator;
  readonly notesEdit: Locator;
  readonly barcodeImage: Locator;
  readonly inactiveCheckbox: Locator;
  readonly resetIcon: Locator;
  readonly locationCode: Locator;

  constructor(page: Page) {
    this.page = page;
    this.codeEdit = page.locator('#txtCode');
    this.descriptionEdit = page.locator('#txtDescription');
    this.locationUseForComboBox = page.locator('#cddLocUsed_DropDown');
    this.lockerCheckbox = page.locator('#chkWeaponLocker');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.storageBuilding = page.locator('#cddStorageBuilding_DropDown');
    this.storageRoom = page.locator('#cddStorageRoom_DropDown');
    this.storageRow = page.locator('#cddStorageRow_DropDown');
    this.storageShelf = page.locator('#cddStorageShelf_DropDown');
    this.notInInventoryRoomCheckbox = page.locator('#chkIsNotInv');
    this.locationCodeEdit = page.locator('#txtCode');
    this.barcodeEdit = page.locator('#txtBarCode');
    this.notesEdit = page.locator('#txtNotes');
    this.barcodeImage = page.locator('#imgBarcode');
    this.inactiveCheckbox = page.locator('#chkInActive');
    this.resetIcon = page.locator('#cmdRefresh');
    this.locationCode = page.locator('#txtCode');
  }

  async EnterAtDescription(): Promise<void> {
    // uIMapSettings.storageLocationEntry.uIDescriptionEdit.sendKeys(BaseData.getSettingsModuleValue("Desc"));
  }

  async SelectAtLocationUseFor(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.storageLocationEntry.uILocationUseForComboBox,
    // BaseData.getSettingsModuleValue("LocationUseFor"));
    // uIMapSettings.storageLocationEntry.uILocationUseForComboBox.sendKeys(Keys.TAB);
  }

  async clickLockerCheckbox(): Promise<void> {
    // uIMapSettings.storageLocationEntry.uILockerCheckbox.click();
  }

  async Save(): Promise<void> {
    // uIMapSettings.storageLocationEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async SaveNClose(): Promise<void> {
    // uIMapSettings.storageLocationEntry.uISaveNCloseButton.click();
    // popup.confirm.yes();
    // Playback.pageLoadThreadWait();
  }

  async CloseTheScreen(): Promise<void> {
    // objectIdentification.windowHandle.closeTheScreen();
  }

  async enterDescription(): Promise<void> {
    // uIMapSettings.storageLocationEntry.uIDescriptionEdit.sendKeys(Randomized.randomString(5));
  }

  async selectLocationUseFor(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapSettings.storageLocationEntry.uILocationUseForComboBox);
  }

  async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapSettings.storageLocationEntry.uIBottomLeftSideStatusBar.getText());
  }

  async verifyCodeIsNotNull(): Promise<void> {
    // String code = uIMapSettings.storageLocationEntry.uICodeEdit.getAttribute("value");
    // System.out.println(code);
    // verify.ExpectedValueIsTrue(!code.equals(null));
  }

  async verifyUpdateSuccessfulStatusMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1003 - Update Successful",
    // uIMapSettings.storageLocationEntry.uIBottomLeftSideStatusBar.getText());
  }

  async selectAtStorageBuilding(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.storageLocationEntry.uIStorageBuilding,
    // BaseData.getSettingsModuleValue("StorageBuilding"));
  }

  async selectAtStorageRoom(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.storageLocationEntry.uIStorageRoom,
    // BaseData.getSettingsModuleValue("StorageRoom"));
  }

  async selectAtStorageRow(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.storageLocationEntry.uIStorageRow,
    // BaseData.getSettingsModuleValue("StorageRow"));
  }

  async selectAtStorageShelf(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.storageLocationEntry.uIStorageShelf,
    // BaseData.getSettingsModuleValue("StorageShelf"));
  }

  async clickNotInInventoryRoom(): Promise<void> {
    // uIMapSettings.storageLocationEntry.uINotInInventoryRoomCheckbox.click();
  }

  async saveScreen(): Promise<void> {
    // uIMapSettings.storageLocationEntry.uISaveButton.click();
    // popup.confirm.yes();
    // Playback.pageLoadThreadWait();
  }

  async verifyLocationCodeGeneratedAs16Digit(): Promise<void> {
    // String code = uIMapSettings.storageLocationEntry.uILocationCodeEdit.getAttribute("value");
    // int i = code.length();
    // verify.ExpectedIntergerValueIsEqualToActual(16, i);
  }

  async verifyBarcodeGeneratedAs16Digit(): Promise<void> {
    // String code = uIMapSettings.storageLocationEntry.uIBarcodeEdit.getAttribute("value");
    // int i = code.length();
    // verify.ExpectedIntergerValueIsEqualToActual(16, i);
  }

  async enterAtNotes(): Promise<void> {
    // uIMapSettings.storageLocationEntry.uINotesEdit.sendKeys(BaseData.getSettingsModuleValue("Notes"));
  }

  async clickBarcodeIcon(): Promise<void> {
    // uIMapSettings.storageLocationEntry.uIBarcodeImage.click();
  }

  async clickInactiveCheckBox(): Promise<void> {
    // uIMapSettings.storageLocationEntry.uIInactiveCheckbox.click();
  }

  async clickResetIcon(): Promise<void> {
    // uIMapSettings.storageLocationEntry.uIResetIcon.click();
  }

  async verifyInactiveCheckboxNotSelected(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapSettings.storageLocationEntry.uIInactiveCheckbox.isSelected());
  }

  async downloadBarcode(): Promise<void> {
    // Actions a = new Actions(Playback.driver);
    // a.sendKeys(Keys.ENTER);
  }

  async getBarcode(): Promise<string> {
    // String attribute = uIMapSettings.storageLocationEntry.uIBarcodeEdit.getAttribute("value");
    // return attribute;
  }

  async getLocationCode(): Promise<string> {
    // String text = uIMapSettings.storageLocationEntry.uILocationCode.getAttribute("value");
    // return text;
  }

  async verifyLocationCode(code: string): Promise<void> {
    // String text = uIMapSettings.storageLocationEntry.uILocationCode.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(text, code);
  }

  async switchToCoronerCustomFields(): Promise<void> {
    // objectIdentification.windowHandle.switchToWindowUsingFormName("frmCustomConfig_Id");
  }

}

export class CoronerCustomFieldsPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly fieldNameEdit: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly customTable: Locator;
  readonly addButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdSave');
    this.fieldNameEdit = page.locator('#txtCustomField');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.customTable = page.locator('#grdRepLink');
    this.addButton = page.locator('#cmdAdd');
  }

  async clickSaveButton(): Promise<void> {
    // uIMapSettings.coronerCustomFields.uISaveButton.click();
  }

  async saveScreen(): Promise<void> {
    // uIMapSettings.coronerCustomFields.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verify8EnterMandatoryDataAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(8)Enter mandatory data");
  }

  async verifyUpdateSuccessfulStatusMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1003 - Update Successful",
    // uIMapSettings.coronerCustomFields.uIBottomLeftSideStatusBar.getText());
  }

  async enterAtFieldName(): Promise<void> {
    // uIMapSettings.coronerCustomFields.uIFieldNameEdit.sendKeys(BaseData.getSettingsModuleValue("FieldName"));
  }

  async verifyAtAddedFieldNameInGrid(): Promise<void> {
    // int size = objectIdentification.manualIdentify
    // .getGridTableColumnCells(uIMapSettings.coronerCustomFields.uICustomTable, "Field Name").size();
    // System.out.println(size);
    // String fieldName = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.coronerCustomFields.uICustomTable, "Field Name", size - 1).getText();
    // System.out.println(fieldName);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("FieldName"), fieldName);
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.coronerCustomFields.uIAddButton.click();
  }

}

export class RepositoryLinkPage {
  readonly page: Page;
  readonly repositoryIdLookUpIcon: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;
  readonly saveNClose: Locator;
  readonly bottomMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.repositoryIdLookUpIcon = page.locator('#lupRepositoryID_imgBtn');
    this.addButton = page.locator('#cmdAdd');
    this.saveButton = page.locator('#cmdSave');
    this.saveNClose = page.locator('#cmdSaveNClose');
    this.bottomMessage = page.locator("//td[@class=\'statusBar\']");
  }

  async clickRepositoryIdLookUpIcon(): Promise<void> {
    // uIMapSettings.repositoryLink.uIRepositoryIdLookUpIcon.click();
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.repositoryLink.uIAddButton.click();
  }

  async Save(): Promise<void> {
    // uIMapSettings.repositoryLink.uISaveButton.click();
    // popup.confirm.yes();
  }

  async clickSaveNClose(): Promise<void> {
    // uIMapSettings.repositoryLink.uISaveNClose.click();
    // popup.confirm.yes();
  }

  async verifyUpdateSuccessfulBottomMessage(): Promise<void> {
    // String Message = uIMapSettings.repositoryLink.uIBottomMessage.getText();
    // verify.ExpectedPropertyValueIsEqual(" 1003 - Update Successful", Message);
  }

}

export class SelectionsEntryPage {
  readonly page: Page;
  readonly columnEdit: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.columnEdit = page.locator('#lupColumnName_CodeValue');
    this.addButton = page.locator('#imgAdd');
    this.saveButton = page.locator('#cmdSave');
  }

  async enterAtColumnName(): Promise<void> {
    // // uIMapSettings.selectionsEntry.uIColumnEdit.sendKeys(BaseData.getSettingsModuleValue("ColumnName"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.selectionsEntry.uIAddButton.click();
  }

  async save(): Promise<void> {
    // uIMapSettings.selectionsEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async closeScreen(): Promise<void> {
    // uIMapSettings.selectionsEntry.driver.close();
  }

  async switchToMFASetting(): Promise<void> {
    // objectIdentification.windowHandle.switchToWindow("MFA Setting");
  }

}

export class MFASettingPage {
  readonly page: Page;
  readonly twoFAForApplicationDropDown: Locator;
  readonly twoFAMethodDropDownlist: Locator;
  readonly twoFAMethodArrow: Locator;
  readonly saveButton: Locator;
  readonly resetIcon: Locator;
  readonly saveAndCloseIcon: Locator;
  readonly statusBar: Locator;
  readonly statusBarWithoutBTag: Locator;
  readonly twoFAMethodDropDown: Locator;
  readonly enable2FADropdown: Locator;
  readonly twoFAEnforcementDropdown: Locator;
  readonly oTPEmailDropDown: Locator;
  readonly jurisDropDown: Locator;
  readonly mFAGrid: Locator;
  readonly overridesTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.twoFAForApplicationDropDown = page.locator('#cdd2FAApp_DropDown');
    this.twoFAMethodDropDownlist = page.locator('#cdd2FAMethod_DropDown');
    this.twoFAMethodArrow = page.locator('#cdd2FAMethod_Arrow');
    this.saveButton = page.locator('#cmdSave');
    this.resetIcon = page.locator('#cmdRefresh');
    this.saveAndCloseIcon = page.locator('#cmdSaveNClose');
    this.statusBar = page.locator("//td[@class=\'statusBar\']//b");
    this.statusBarWithoutBTag = page.locator("//td[@class=\'statusBar\']");
    this.twoFAMethodDropDown = page.locator('#cdd2FAMethod_Input');
    this.enable2FADropdown = page.locator('#ddlEnable2FA_DropDown');
    this.twoFAEnforcementDropdown = page.locator('#ddlEnforceFrq_DropDown');
    this.oTPEmailDropDown = page.locator('#ddlOTP_DropDown');
    this.jurisDropDown = page.locator('#ddlJurisId');
    this.mFAGrid = page.locator('#grd2FA');
    this.overridesTab = page.locator("//span[text()=\'Overrides\']");
  }

  async selectAt2FAForApplication(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.mFASetting.uI2FAForApplicationDropDown,
    // BaseData.getSettingsModuleValue("2FAForApplication"));
    // uIMapSettings.mFASetting.uI2FAForApplicationDropDown.sendKeys(Keys.TAB);
  }

  async selectAt2FAMethod(): Promise<void> {
    // uIMapSettings.mFASetting.uI2FAMethodArrow.click();
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.selectRadControlDropDownValue(
    // uIMapSettings.mFASetting.uI2FAMethodDropDown, BaseData.getSettingsModuleValue("2FAMethod"));
    // Playback.controlReadyThreadWait();
    // uIMapSettings.mFASetting.uI2FAMethodArrow.click();
    // Playback.controlReadyThreadWait();
  }

  async verify2FAMethod(i: number): Promise<void> {
    // String SelectedItem = uIMapSettings.mFASetting.uI2FAMethodDropDown.getAttribute("value");
    // System.out.println(SelectedItem);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("2FAMethod" + i), SelectedItem);
  }

  async clickSaveButton(): Promise<void> {
    // uIMapSettings.mFASetting.uISaveButton.click();
  }

  async verifyDoYouWantToSaveAllConfirmPopup(): Promise<void> {
    // String text = Playback.driver.switchTo().alert().getText();
    // System.out.println(text);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Popup"), text);
  }

  async clickCancelConfirmationPopup(): Promise<void> {
    // popup.confirm.dismissPopup();
  }

  async clickResetIcon(): Promise<void> {
    // uIMapSettings.mFASetting.uIResetIcon.click();
  }

  async verify2FAMethodIsEmpty(): Promise<void> {
    // uIMapSettings.mFASetting.uI2FAMethodDropDown.getAttribute("value").isEmpty();
  }

  async clickSaveNClose(): Promise<void> {
    // uIMapSettings.mFASetting.uISaveAndCloseIcon.click();
  }

  async verifyUpdateSuccessfulBottomMessage(): Promise<void> {
    // String BottomMessage = uIMapSettings.mFASetting.uIStatusBar.getText();
    // verify.ExpectedPropertyValueIsEqual(BottomMessage, "1003 - Update Successful");
  }

  async closeScreen(): Promise<void> {
    // uIMapSettings.mFASetting.driver.close();
  }

  async verifyMFASettingsWindowExist(): Promise<void> {
    // boolean windowExist = objectIdentification.windowHandle.windowExist("MFA Setting");
    // verify.ExpectedValueIsTrue(windowExist);
  }

  async verifyUpdateSuccessfulBottomMessageDoesNotAppear(): Promise<void> {
    // List<WebElement> elements = uIMapSettings.mFASetting.uIStatusBarWithoutBTag.findElements(By.tagName("b"));
    // if (elements.size() == 0) {
    // System.out.println("Element is not present on the page.");
    // } else {
    // System.out.println("Element is present on the page.");
  }

  async switchToRTDashboard(): Promise<void> {
    // objectIdentification.windowHandle.switchToWindow("RTDashboard");
  }

}

export class RTDashboardPage {
  readonly page: Page;
  readonly error404: Locator;
  readonly nextArrowButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.error404 = page.locator("//div[@class=\'content-container\']");
    this.nextArrowButton = page.locator('#imgnext');
  }

  async verify404FileNotFoundErrorNotArise(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // boolean controlExist = objectIdentification.manualIdentify
    // .controlExist(uIMapSettings.rTDashboard.uI404Error);
    // if (controlExist == true) {
    // String Text = Playback.driver.findElement(By.xpath("//div[@class='content-container']")).getText();
    // System.out.println(Text);
    // verify.ExpectedValueIsFalse(Text.contains("404 - File or directory not found."));
    // } else {
    // verify.ExpectedValueIsFalse(controlExist);
  }

  async clickNextArrowButton(): Promise<void> {
    // uIMapSettings.rTDashboard.uINextArrowButton.click();
  }

  async save(): Promise<void> {
    // uIMapSettings.mFASetting.uISaveButton.click();
    // popup.confirm.yes();
  }

  async selectAtEnable2FA(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.mFASetting.uIEnable2FADropdown,
    // BaseData.getSettingsModuleValue("Enable2FA"));
  }

  async selectAt2FAEnforcementFrequency(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.mFASetting.uI2FAEnforcementDropdown,
    // BaseData.getSettingsModuleValue("2FAEnforcementFrequency"));
  }

  async selectAtOTPEmailWhenPrimaryMethodIsNotAvailable(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.mFASetting.uIOTPEmailDropDown,
    // BaseData.getSettingsModuleValue("OTPEmail"));
  }

  async selectAtJuris(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.mFASetting.uIJurisDropDown,
    // BaseData.getSettingsModuleValue("Juris" + i));
  }

  async verifyJurisDropdownIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapSettings.mFASetting.uIJurisDropDown.isDisplayed());
  }

  async verify2FAForApplication(i: number): Promise<void> {
    // String SelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.mFASetting.uI2FAForApplicationDropDown);
    // System.out.println(SelectedItem);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("2FAForApplication" + i), SelectedItem);
  }

  async verifyAtEnable2FA(i: number): Promise<void> {
    // String SelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.mFASetting.uIEnable2FADropdown);
    // System.out.println(SelectedItem);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Enable2FA" + i), SelectedItem);
  }

  async verifyAt2FAEnforcementFrequency(i: number): Promise<void> {
    // String SelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.mFASetting.uI2FAEnforcementDropdown);
    // System.out.println(SelectedItem);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("2FAEnforcementFrequency" + i),
    // SelectedItem);
  }

  async verifyAtOTPEmail(i: number): Promise<void> {
    // String SelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapSettings.mFASetting.uIOTPEmailDropDown);
    // System.out.println(SelectedItem);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("OTPEmail" + i), SelectedItem);
  }

  async deleteGridRowByRemarksWithConfirmPopup(): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(uIMapSettings.mFASetting.uIMFAGrid,
    // BaseData.getSettingsModuleValue("Remarks"));
    // popup.confirm.yesWithExpectedMessage("(4) Do you really want to delete?");
  }

  async verifyGridRowMarkedForDeleteByRemarks(): Promise<void> {
    // List<String> gridRowCellsValues = objectIdentification.manualIdentify.getGridRowCellsValues(
    // objectIdentification.manualIdentify.getGridRowByCellInnerText(uIMapSettings.mFASetting.uIMFAGrid,
    // BaseData.getSettingsModuleValue("Remarks")));
    // verify.ExpectedPropertyValueIsEqual("X", gridRowCellsValues.get(
    // objectIdentification.manualIdentify.getGridColumnIndex(uIMapSettings.mFASetting.uIMFAGrid, "X")));
  }

  async selectAtRemarksInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapSettings.mFASetting.uIMFAGrid,
    // BaseData.getSettingsModuleValue("Remarks"));
  }

  async verifyRecordMarkedForDeletionAcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(6) Record marked for deletion");
  }

  async clickOverridesTab(): Promise<void> {
    // uIMapSettings.mFASetting.uIOverridesTab.click();
  }

}

export class OverridesTabPage {
  readonly page: Page;
  readonly ipAddressFromEdit: Locator;
  readonly addButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ipAddressFromEdit = page.locator('#tabPhoenixAuthMFA_tmpl0_usrusrMFAOveride_txtIPFrom');
    this.addButton = page.locator('#tabPhoenixAuthMFA_tmpl0_usrusrMFAOveride_cmdAdd');
  }

  async enterAtIpAddressFrom(): Promise<void> {
    // uIMapSettings.mFASetting.overridesTab.uIIpAddressFromEdit
    // .sendKeys(BaseData.getSettingsModuleValue("IpAddressFrom"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapSettings.mFASetting.overridesTab.uIAddButton.click();
  }

  async verifyAtIPAddressRangeOrPFInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapSettings.mFASetting.uIMFAGrid,
    // BaseData.getSettingsModuleValue("IPAddressRange"))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getSettingsModuleValue("IPAddressRange")));
  }

  async saveNClose(): Promise<void> {
    // uIMapSettings.mFASetting.uISaveAndCloseIcon.click();
    // popup.confirm.yes();
  }

  async verifyBottomMessageFieldIsEmpty(): Promise<void> {
    // String text = uIMapSettings.mFASetting.uIStatusBarWithoutBTag.getText();
    // verify.ExpectedPropertyValueIsEqual("", text);
  }

}

export class SelectReportPage {
  readonly page: Page;
  readonly terminalEntryGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.terminalEntryGrid = page.locator('#grdRptMgr_ctl00');
  }

  async verifyReportNameInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.selectReport.uITerminalEntryGrid,
    // BaseData.getSettingsModuleValue("ReportName"), "Report Name")
    // .getText();
    // System.out.println(text);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ReportName"), text);
  }

}

export class RTDashboard2Page {
  readonly page: Page;
  readonly error404: Locator;
  readonly nextArrowButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.error404 = page.locator("//div[@class=\'content-container\']");
    this.nextArrowButton = page.locator('#imgnext');
  }

  async verify404FileNotFoundErrorNotArise(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // boolean controlExist = objectIdentification.manualIdentify
    // .controlExist(uIMapSettings.rTDashboard.uI404Error);
    // if (controlExist == true) {
    // String Text = Playback.driver.findElement(By.xpath("//div[@class='content-container']")).getText();
    // System.out.println(Text);
    // verify.ExpectedValueIsFalse(Text.contains("404 - File or directory not found."));
    // } else {
    // verify.ExpectedValueIsFalse(controlExist);
  }

  async clickNextArrowButton(): Promise<void> {
    // uIMapSettings.rTDashboard.uINextArrowButton.click();
  }

  async switchToRTDashboard(): Promise<void> {
    // objectIdentification.windowHandle.switchToWindow("RTDashboard");
  }

  async switchToBatchSearch(): Promise<void> {
    // objectIdentification.windowHandle.switchToMainWindowScreenTab("frmBatchInquiry");
  }

}

export class BatchSearchPage {
  readonly page: Page;
  readonly exportToExcel: Locator;
  readonly printIcon: Locator;
  readonly batchSearchGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.exportToExcel = page.locator("//img[@src = \'/KPIImages/ico/16_excel.gif\']");
    this.printIcon = page.locator("//img[@title = \'Print\']");
    this.batchSearchGrid = page.locator('#grdBatchInq');
  }

  async clickExportToExcel(): Promise<void> {
    // uIMapSettings.batchSearch.uIExportToExcel.click();
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapSettings.batchSearch.uIPrintIcon.click();
  }

  async verifyGridIsEmpty(): Promise<void> {
    // verify.ExpectedIntergerValueIsEqualToActual(0, objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapSettings.batchSearch.uIBatchSearchGrid), "Grid contains data -->");
  }

}

export class PermissionHistoryPage {
  readonly page: Page;
  readonly moduleDropdown: Locator;
  readonly moduleDropdownArrorw: Locator;
  readonly screenIDEdit: Locator;
  readonly permissionHistoryGrid: Locator;
  readonly searchButton: Locator;
  readonly fromDateEdit: Locator;
  readonly fromTimeEdit: Locator;
  readonly toDateEdit: Locator;
  readonly toTimeEdit: Locator;
  readonly parameterIdEdit: Locator;
  readonly fromTimeEditForFire: Locator;

  constructor(page: Page) {
    this.page = page;
    this.moduleDropdown = page.locator('#lstModule_DropDown');
    this.moduleDropdownArrorw = page.locator('#lstModule_Arrow');
    this.screenIDEdit = page.locator('#txtParamID');
    this.permissionHistoryGrid = page.locator('#grdHistory');
    this.searchButton = page.locator('#cmdSearch');
    this.fromDateEdit = page.locator('#dttmFrom_Date_KPIDttmCtrl');
    this.fromTimeEdit = page.locator("//input[@class=\'textboxdatetime igte_BlueThemeEditInContainer\']");
    this.toDateEdit = page.locator('#dttmTo_Date_KPIDttmCtrl');
    this.toTimeEdit = page.locator('#dttmTo_Time');
    this.parameterIdEdit = page.locator('#txtParamID');
    this.fromTimeEditForFire = page.locator("//input[@class=\'textboxdatetime igte_RedThemeEditInContainer\']");
  }

  async selectAtModule(): Promise<void> {
    // uIMapSettings.permissionHistory.uIModuleDropdownArrorw.click();
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.selectRadControlDropDownValue(
    // uIMapSettings.permissionHistory.uIModuleDropdown, BaseData.getSettingsModuleValue("Module"));
    // uIMapSettings.permissionHistory.uIModuleDropdownArrorw.click();
    // Playback.controlReadyThreadWait();
  }

  async enterAtScreenID(): Promise<void> {
    // uIMapSettings.permissionHistory.uIScreenIDEdit.sendKeys(BaseData.getSettingsModuleValue("ScreenID"));
  }

  async clickSearch(): Promise<void> {
    // uIMapSettings.permissionHistory.uISearchButton.click();
    // Playback.pageLoadThreadWait();
  }

  async verifyAtPFCodeByScreenIDInGrid(): Promise<void> {
    // WebElement element = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapSettings.permissionHistory.uIPermissionHistoryGrid,
    // BaseData.getSettingsModuleValue("ScreenID"));
    // WebElement rows = element
    // .findElement(By.xpath(".//following-sibling::tr//table[@role='grid']//tr[@role='row']"));
    // WebElement gridCell = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.permissionHistory.uIPermissionHistoryGrid, rows, "PF Code");
    // verify.ExpectedPropertyValueIsEqual(gridCell.getText(), BaseData.getSettingsModuleValue("PFCode"));
  }

  async verifyAtScreenIDByModuleInGrid(): Promise<void> {
    // WebElement row = uIMapSettings.permissionHistory.uIPermissionHistoryGrid
    // .findElement(By.xpath(".//tr//td[text()='" + BaseData.getSettingsModuleValue("Module")
    // + "']//parent::tr//following-sibling::tr//tr[@role='row']//td[text()='"
    // + BaseData.getSettingsModuleValue("ScreenID") + "'][1]"));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ScreenID"), row.getText());
  }

  async verifyAtScreenNameByModuleInGrid(): Promise<void> {
    // WebElement row = uIMapSettings.permissionHistory.uIPermissionHistoryGrid
    // .findElement(By.xpath(".//tr//td[text()='" + BaseData.getSettingsModuleValue("Module")
    // + "']//parent::tr//following-sibling::tr//tr[@role='row']//td[text()='"
    // + BaseData.getSettingsModuleValue("ScreenName") + "'][1]"));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("ScreenName"), row.getText());
  }

  async verifyAtNewValueIsCheckedByScreenIDInGrid(checkboxIndex: number): Promise<void> {
    // List<WebElement> row = uIMapSettings.permissionHistory.uIPermissionHistoryGrid
    // .findElements(By.xpath(".//td[contains(text(),'" + BaseData.getSettingsModuleValue("ScreenID")
    // + "')]//parent::tr//following::table[@role='grid']//tr[@role='row']//td[contains(@aria-describedby,'11')]//input"));
    // verify.ExpectedValueIsTrue(row.get(checkboxIndex).isSelected(), "Checkbox not selecetd -->");
  }

  async verifyAtOldValueIsCheckedByScreenIDInGrid(checkboxIndex: number): Promise<void> {
    // List<WebElement> row = uIMapSettings.permissionHistory.uIPermissionHistoryGrid
    // .findElements(By.xpath(".//td[contains(text(),'" + BaseData.getSettingsModuleValue("ScreenID")
    // + "')]//parent::tr//following::table[@role='grid']//tr[@role='row']//td[contains(@aria-describedby,'10')]//input"));
    // System.out.println(row.get(checkboxIndex).isSelected());
    // verify.ExpectedValueIsFalse(row.get(checkboxIndex).isSelected(), "Checkbox not selecetd -->");
  }

  async closeScreen(): Promise<void> {
    // uIMapSettings.permissionHistory.driver.close();
  }

  async verifyAtNewValueIsUnCheckedByScreenIDInGrid(checkboxIndex: number): Promise<void> {
    // List<WebElement> row = uIMapSettings.permissionHistory.uIPermissionHistoryGrid
    // .findElements(By.xpath(".//td[contains(text(),'" + BaseData.getSettingsModuleValue("ScreenID")
    // + "')]//parent::tr//following::table[@role='grid']//tr[@role='row']//td[contains(@aria-describedby,'11')]//input"));
    // verify.ExpectedValueIsFalse(row.get(checkboxIndex).isSelected(), "Checkbox not selecetd -->");
  }

  async verifyAtRowCountInGrid(): Promise<void> {
    // int gridTableRowsCount = objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapSettings.permissionHistory.uIPermissionHistoryGrid);
    // verify.ExpectedIntergerValueIsEqualToActual(2, gridTableRowsCount);
  }

  async verifyAtDateInGrid(): Promise<void> {
    // String Date = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.permissionHistory.uIPermissionHistoryGrid,
    // randomized.getCurrentDate("MM/dd/yyyy"))
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(randomized.getCurrentDate("MM/dd/yyyy"), Date);
  }

  async enterFromDateAndTime(): Promise<void> {
    // uIMapSettings.permissionHistory.uIFromDateEdit.click();
    // uIMapSettings.permissionHistory.uIFromDateEdit.sendKeys(randomized.getPreviousDate(200,"MM/dd/yyyy"));
    // uIMapSettings.permissionHistory.uIFromTimeEditForFire.click();
    // uIMapSettings.permissionHistory.uIFromTimeEditForFire.sendKeys(randomized.getCurrentTime("HH:mm:ss"));
  }

  async enterToDateAndTime(): Promise<void> {
    // uIMapSettings.permissionHistory.uIToDateEdit.click();
    // uIMapSettings.permissionHistory.uIToDateEdit.sendKeys(randomized.getCurrentDate("MM/dd/yyyy"));
    // uIMapSettings.permissionHistory.uIToTimeEdit.click();
    // uIMapSettings.permissionHistory.uIToTimeEdit.sendKeys(randomized.getCurrentTime("HH:mm:ss"));
  }

  async enterAtParameterId(): Promise<void> {
    // uIMapSettings.permissionHistory.uIParameterIdEdit.sendKeys(BaseData.getSettingsModuleValue("ParameterID"));
  }

  async verifyAtJurisColumnInGrid(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues
    // (uIMapSettings.permissionHistory.uIPermissionHistoryGrid,BaseData.getSettingsModuleValue("Juris"));
    // verify.ExpectedValueIsTrue(gridTableColumnValues.contains(BaseData.getSettingsModuleValue("Juris")));
  }

  async clearFromDateAndTime(): Promise<void> {
    // uIMapSettings.permissionHistory.uIFromDateEdit.click();
    // uIMapSettings.permissionHistory.uIFromDateEdit.clear();
    // uIMapSettings.permissionHistory.uIFromTimeEdit.click();
    // uIMapSettings.permissionHistory.uIFromTimeEdit.clear();
  }

  async clearFromDateAndTimeForFire(): Promise<void> {
    // uIMapSettings.permissionHistory.uIFromDateEdit.click();
    // uIMapSettings.permissionHistory.uIFromDateEdit.clear();
    // uIMapSettings.permissionHistory.uIFromTimeEditForFire.click();
    // uIMapSettings.permissionHistory.uIFromTimeEditForFire.clear();
  }

}

export class CustomDocHelpEntryUploadeWindowPage {
  readonly page: Page;
  readonly selectButton: Locator;
  readonly addDocumentButton: Locator;
  readonly statusBar: Locator;
  readonly documentTitleEdit: Locator;
  readonly linkEdit: Locator;
  readonly sortOrderEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selectButton = page.locator("//input[@value=\'Select\']");
    this.addDocumentButton = page.locator('#cmdUpload');
    this.statusBar = page.locator("//td[@class=\'statusBar\']//b");
    this.documentTitleEdit = page.locator('#txtDocName');
    this.linkEdit = page.locator('#txtLink');
    this.sortOrderEdit = page.locator('#txtSortSeqNo');
  }

  async clickSelectButton(): Promise<void> {
    // try {
    // Playback.controlReadyThreadWait();
    // Playback.controlReadyThreadWait();
    // uIMapSettings.customDocHelpEntryUploadeWindow.uISelectButton.click();
    // } catch (Exception e) {
    // // TODO: handle exception
    // Playback.actionDriver.click(uIMapSettings.customDocHelpEntryUploadeWindow.uISelectButton).build()
    // .perform();
  }

  async clickAddDocumentButton(): Promise<void> {
    // uIMapSettings.customDocHelpEntryUploadeWindow.uIAddDocumentButton.click();
  }

  async verifyUpdateAndAdditionalSuccessfulStatusBarIsEmpty(): Promise<void> {
    // boolean controlExist = objectIdentification.manualIdentify
    // .controlExist(uIMapSettings.customDocHelpEntryUploadeWindow.uIStatusBar);
    // verify.ExpectedValueIsFalse(controlExist);
  }

  async enterAtDocumentTitle(): Promise<void> {
    // uIMapSettings.customDocHelpEntryUploadeWindow.uIDocumentTitleEdit
    // .sendKeys(BaseData.getSettingsModuleValue("DocumentTitle"));
  }

  async enterAtLink(): Promise<void> {
    // uIMapSettings.customDocHelpEntryUploadeWindow.uILinkEdit.sendKeys(BaseData.getSettingsModuleValue("Link"));
  }

  async enterAtSortOrder(): Promise<void> {
    // uIMapSettings.customDocHelpEntryUploadeWindow.uISortOrderEdit
    // .sendKeys(BaseData.getSettingsModuleValue("SortOrder"));
  }

}

export class EntraSettingWindowPage {
  readonly page: Page;
  readonly entraIDForApplicationDropDown: Locator;
  readonly saveButton: Locator;
  readonly applicationIDEdit: Locator;
  readonly directoryIDEdit: Locator;
  readonly responseUserAttributeKeyEdit: Locator;
  readonly printIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.entraIDForApplicationDropDown = page.locator('#cddProduct_DropDown');
    this.saveButton = page.locator('#cmdSave');
    this.applicationIDEdit = page.locator('#txtClientID');
    this.directoryIDEdit = page.locator('#txtTenantID');
    this.responseUserAttributeKeyEdit = page.locator('#txtUserName');
    this.printIcon = page.locator('#cmdPrint');
  }

  async selectAtEntraIDForApplication(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapSettings.entraSettingWindow.uIEntraIDForApplicationDropDown,
    // BaseData.getSettingsModuleValue("EntraIDForApplication"));
  }

  async clickSaveButton(): Promise<void> {
    // uIMapSettings.entraSettingWindow.uISaveButton.click();
  }

  async save(): Promise<void> {
    // uIMapSettings.entraSettingWindow.uISaveButton.click();
    // popup.confirm.acceptPopup();
  }

  async enterAtApplicationID(): Promise<void> {
    // uIMapSettings.entraSettingWindow.uIApplicationIDEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ApplicationID"));
  }

  async enterAtDirectoryID(): Promise<void> {
    // uIMapSettings.entraSettingWindow.uIDirectoryIDEdit.sendKeys(BaseData.getSettingsModuleValue("DirectoryID"));
  }

  async enterAtResponseUserAttributeKey(): Promise<void> {
    // uIMapSettings.entraSettingWindow.uIResponseUserAttributeKeyEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ResponseUserAttributeKey"));
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapSettings.entraSettingWindow.uIPrintIcon.click();
  }

  async closeScreen(): Promise<void> {
    // uIMapSettings.entraSettingWindow.driver.close();
  }

}

export class ParameterNameSearchPage {
  readonly page: Page;
  readonly moduleDropdown: Locator;
  readonly searchButton: Locator;
  readonly resultGrid: Locator;
  readonly parameterIDEdit: Locator;
  readonly includeInactiveCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.moduleDropdown = page.locator('#lstModuleID');
    this.searchButton = page.locator('#cmdSearch');
    this.resultGrid = page.locator('#grdParamName');
    this.parameterIDEdit = page.locator('#txtParamID');
    this.includeInactiveCheckbox = page.locator('#chkIsActive');
  }

  async selectAtModule(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapSettings.parameterNameSearch.uIModuleDropdown,
    // BaseData.getSettingsModuleValue("Module"));
  }

  async clickSearch(): Promise<void> {
    // uIMapSettings.parameterNameSearch.uISearchButton.click();
  }

  async verifyAtModuleColumnValues(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.parameterNameSearch.uIResultGrid, "Module");
    // for (String value : gridTableColumnValues) {
    // verify.ExpectedValueIsTrue(value.equals("AI"));
  }

  async enterAtParameterID(): Promise<void> {
    // uIMapSettings.parameterNameSearch.uIParameterIDEdit.click();
    // uIMapSettings.parameterNameSearch.uIParameterIDEdit.clear();
    // uIMapSettings.parameterNameSearch.uIParameterIDEdit
    // .sendKeys(BaseData.getSettingsModuleValue("ParameterID"));
  }

  async verifyAtParamIDIsBlackColorInGrid(): Promise<void> {
    // String cssValue = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.parameterNameSearch.uIResultGrid,
    // BaseData.getSettingsModuleValue("ParameterID"))
    // .getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual("rgba(0, 0, 0, 1)", cssValue);
  }

  async clickAtParamIDInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.parameterNameSearch.uIResultGrid, BaseData.getSettingsModuleValue("ParameterID"));
  }

  async clickIncludeInactiveCheckbox(): Promise<void> {
    // uIMapSettings.parameterNameSearch.uIIncludeInactiveCheckbox.click();
  }

  async verifyAtParamIDIsGreyColorInGrid(): Promise<void> {
    // String cssValue = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.parameterNameSearch.uIResultGrid,
    // BaseData.getSettingsModuleValue("ParameterID"))
    // .getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual("rgba(128, 128, 128, 1)", cssValue);
  }

  async selectAtRandomGridRow(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow(uIMapSettings.parameterNameSearch.uIResultGrid);
  }

}

export class ShowUsersPage {
  readonly page: Page;
  readonly printButton: Locator;
  readonly showUsersGrid: Locator;
  readonly pFCode: Locator;
  readonly searchButton: Locator;
  readonly terminalNameEdit: Locator;
  readonly iPAddressEdit: Locator;
  readonly fromDateEdit: Locator;
  readonly toDateEdit: Locator;
  readonly productHelpIcon: Locator;
  readonly nextButton: Locator;
  readonly prevButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.printButton = page.locator('#cmdPrint');
    this.showUsersGrid = page.locator('#grdSessionInfo');
    this.pFCode = page.locator('#lupPFCode_CodeValue');
    this.searchButton = page.locator('#cmdSearch');
    this.terminalNameEdit = page.locator('#txtTerminalName');
    this.iPAddressEdit = page.locator('#txtIPAddress');
    this.fromDateEdit = page.locator('#FromDttm_KPIDttmCtrl');
    this.toDateEdit = page.locator('#ToDttm_KPIDttmCtrl');
    this.productHelpIcon = page.locator("//img[@onclick=\'KPILoadHelp(1060)\']");
    this.nextButton = page.locator('#grdSessionInfo_ctl00_lnkbtnNext');
    this.prevButton = page.locator('#grdSessionInfo_ctl00_lnkbtnPrev');
  }

  async clickPrintButton(): Promise<void> {
    // uIMapSettings.showUsers.uIPrintButton.click();
  }

  async getColumnValueInGrid(i: number): Promise<string[]> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.showUsers.uIShowUsersGrid, BaseData.getSettingsModuleValue("ColumnName" + i));
    // return gridTableColumnValues;
  }

  async enterAtPFCode(): Promise<void> {
    // uIMapSettings.showUsers.uIPFCode.sendKeys(BaseData.getSettingsModuleValue("PFCode"));
    // uIMapSettings.showUsers.uIPFCode.sendKeys(Keys.TAB);
  }

  async clickSearchButton(): Promise<void> {
    // uIMapSettings.showUsers.uISearchButton.click();
  }

  async reloadShowUsersScreenTab(): Promise<void> {
    // objectIdentification.manualIdentify.reloadScreen("Show Users");
  }

  async enterAtTerminalName(): Promise<void> {
    // uIMapSettings.showUsers.uITerminalNameEdit.sendKeys(BaseData.getSettingsModuleValue("TerminalName"));
  }

  async verifyAtPFCodeIngrid(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.showUsers.uIShowUsersGrid, "PF");
    // for (String ColumnValues : gridTableColumnValues) {
    // verify.ExpectedValueIsTrue(ColumnValues.contains(BaseData.getSettingsModuleValue("PFCode")));
  }

  async verifyAtTerminalNameInGrid(): Promise<void> {
    // String TerminalName = objectIdentification.manualIdentify.getGridCell(
    // uIMapSettings.showUsers.uIShowUsersGrid, BaseData.getSettingsModuleValue("TerminalName")).getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("TerminalName"), TerminalName);
  }

  async enterAtIPAddress(i: number): Promise<void> {
    // uIMapSettings.showUsers.uIIPAddressEdit.sendKeys(BaseData.getSettingsModuleValue("IPAddress" + i));
  }

  async verifyAtIPAddress(i: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.showUsers.uIShowUsersGrid, "IP Address");
    // for (String ColumnValues : gridTableColumnValues) {
    // verify.ExpectedValueIsTrue(ColumnValues.contains(BaseData.getSettingsModuleValue("IPAddress" + i)));
  }

  async enterFromDate(): Promise<void> {
    // uIMapSettings.showUsers.uIFromDateEdit
    // .sendKeys(randomized.getPreviousDate(randomized.getCurrentDate(), "MM/dd/yyyy", 2));
  }

  async taboutToDate(): Promise<void> {
    // uIMapSettings.showUsers.uIToDateEdit.click();
    // uIMapSettings.showUsers.uIToDateEdit.sendKeys(Keys.TAB);
  }

  async verifyDateBetweenFromAndTo(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.showUsers.uIShowUsersGrid, "Last Action Dttm");
    // randomized.verifyTheDatesBetweenFromAndToDates(gridTableColumnValues,
    // randomized.getPreviousDate(randomized.getCurrentDate(), "MM/dd/yyyy", 2),
    // randomized.getCurrentDate());
  }

  async verify1011NoRecordFoundAcknowledge(): Promise<void> {
    // popup.acknowledge.okWithExpectedIngnoreCase("1011 - No Record Found");
  }

  async verifyColumnsSortingAsAscending(ColumnName: string): Promise<void> {
    // List<String> ColumnValue = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.storageLocation.uIStorageResultTable, ColumnName);
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedAscendingCaseInsensitive(
    // uIMapSettings.storageLocation.uIStorageResultTable, ColumnName, ColumnValue);
  }

  async verifyColumnsSortingAsDescending(ColumnName: string): Promise<void> {
    // List<String> ColumnValue = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.storageLocation.uIStorageResultTable, ColumnName);
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedDescendingCaseInsensitive(
    // uIMapSettings.storageLocation.uIStorageResultTable, ColumnName, ColumnValue);
  }

  async clickProductHelpIcon(): Promise<void> {
    // uIMapSettings.showUsers.uIProductHelpIcon.click();
  }

  async clickNextButton(): Promise<void> {
    // uIMapSettings.showUsers.uINextButton.click();
  }

  async clickPrevButton(): Promise<void> {
    // uIMapSettings.showUsers.uIPrevButton.click();
  }

  async verifyPrevButtonIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.showUsers.uIPrevButton.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verifyNextButtonIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapSettings.showUsers.uINextButton.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

}

export class MessagePage {
  readonly page: Page;
  readonly messageGridTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.messageGridTable = page.locator('#grdMessages');
  }

  async clickGridHeader(gridHeader: string): Promise<void> {
    // objectIdentification.manualIdentify.selectGridHeaderColumnNameWithoutContains(
    // uIMapSettings.message.uIMessageGridTable, gridHeader);
  }

  async verifyGridIsEmpty(): Promise<void> {
    // verify.ExpectedIntergerValueIsEqualToActual(0, objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapSettings.message.uIMessageGridTable), "Grid contains data -->");
  }

}

export class OffenseCodesPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly offenseCodeEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly searchButton: Locator;
  readonly offenseCodesGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("//span[text()=\'Add New\']");
    this.offenseCodeEdit = page.locator('#txtOffenseCode');
    this.descriptionEdit = page.locator('#txtDescription');
    this.searchButton = page.locator('#cmdSearch');
    this.offenseCodesGrid = page.locator('#grdOffenseSrch');
  }

  async clickAddNew(): Promise<void> {
    // uIMapSettings.offenseCodes.uIAddNewButton.click();
  }

  async clickSearch(): Promise<void> {
    // uIMapSettings.offenseCodes.uISearchButton.click();
  }

  async enterAtOffenseCode(i: number): Promise<void> {
    // uIMapSettings.offenseCodes.uIOffenseCodeEdit.sendKeys(BaseData.getSettingsModuleValue("OffenseCode" + i));
  }

  async enterAtDescription(i: number): Promise<void> {
    // uIMapSettings.offenseCodes.uIDescriptionEdit.sendKeys(BaseData.getSettingsModuleValue("Description" + i));
  }

  async verifyAtOffenseCodeInGrid(i: number): Promise<void> {
    // String offenseCode = BaseData.getSettingsModuleValue("OffenseCode" + i);
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.offenseCodes.uIOffenseCodesGrid, "Offense Code");
    // for (String value : gridTableColumnValues) {
    // verify.ExpectedValueIsTrue(value.contains(offenseCode),
    // offenseCode + " - offense code value is not contains in grid -->");
  }

  async verifyAtDescriptionInGrid(i: number): Promise<void> {
    // String description = BaseData.getSettingsModuleValue("Description" + i);
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.offenseCodes.uIOffenseCodesGrid, "Description");
    // for (String value : gridTableColumnValues) {
    // verify.ExpectedValueIsTrue(value.contains(description),
    // description + " - description value is not contains in grid -->");
  }

  async verify1011NoRecordFoundAcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
  }

  async verifyAtOffenseCode(jsonIndexValue: number): Promise<void> {
    // String attribute = uIMapSettings.offenseCodes.uIOffenseCodeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("OffenseCode" + jsonIndexValue), attribute);
  }

}

export class ActivityTypeMappingPage {
  readonly page: Page;
  readonly activityType: Locator;
  readonly seqEdit: Locator;
  readonly addButton: Locator;
  readonly activityTypeInGrid: Locator;
  readonly inactiveCheckBox: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.activityType = page.locator('#lupActivityType_CodeValue');
    this.seqEdit = page.locator('#txtSeqNo');
    this.addButton = page.locator('#imgAdd');
    this.activityTypeInGrid = page.locator('#grdActivityType');
    this.inactiveCheckBox = page.locator('#chkIsActive');
    this.saveButton = page.locator('#cmdSave');
  }

  async enterAtActivityType(): Promise<void> {
    // uIMapSettings.activityTypeMapping.uIActivityType.sendKeys(BaseData.getSettingsModuleValue("ActivityType"));
  }

  async enterAtSeq(): Promise<void> {
    // uIMapSettings.activityTypeMapping.uISeqEdit.sendKeys(BaseData.getSettingsModuleValue("Seq"));
  }

  async clickAddbutton(): Promise<void> {
    // uIMapSettings.activityTypeMapping.uIAddButton.click();
  }

  async selectAtActivityTypeInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapSettings.activityTypeMapping.uIActivityTypeInGrid,
    // BaseData.getSettingsModuleValue("Activity"));
  }

  async clickInactiveCheckBox(): Promise<void> {
    // uIMapSettings.activityTypeMapping.uIInactiveCheckBox.click();
  }

  async clickUpdateButton(): Promise<void> {
    // uIMapSettings.activityTypeMapping.uIAddButton.click();
  }

  async verifyAtActivityTypeInGrid(): Promise<void> {
    // String ActitvityType = objectIdentification.manualIdentify
    // .getGridCell(uIMapSettings.activityTypeMapping.uIActivityTypeInGrid,
    // BaseData.getSettingsModuleValue("Activity"))
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("Activity"), ActitvityType);
  }

  async saveScreen(): Promise<void> {
    // uIMapSettings.activityTypeMapping.uISaveButton.click();
    // popup.confirm.acceptPopup();
  }

  async verifyAtInactiveCheckBoxIsCheckedInGrid(): Promise<void> {
    // WebElement checkBoxes = objectIdentification.manualIdentify.getGridCell(
    // uIMapSettings.activityTypeMapping.uIActivityTypeInGrid, BaseData.getSettingsModuleValue("Activity"),
    // "Inactive");
    // WebElement element = checkBoxes.findElement(By.xpath(".//img"));
    // String check = element.getAttribute("title");
    // System.out.println(check);
    // verify.ExpectedPropertyValueIsEqual(check, "Checked");
  }

}

export class ReleaseCodesPage {
  readonly page: Page;
  readonly releaseCodesResultTable: Locator;
  readonly searchButton: Locator;
  readonly descriptionColuumnHeader: Locator;
  readonly holdCellColuumnHeader: Locator;
  readonly holdLockerColuumnHeader: Locator;
  readonly forceCloseBookingColuumnHeader: Locator;
  readonly elecMonitoringColuumnHeader: Locator;
  readonly stopBillingColuumnHeader: Locator;
  readonly doNotSendToVINEColuumnHeader: Locator;
  readonly hideFromLocatorColuumnHeader: Locator;
  readonly inactiveColuumnHeader: Locator;
  readonly statusCodeEdit: Locator;
  readonly addNewButton: Locator;
  readonly descriptionEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.releaseCodesResultTable = page.locator('#grdReleaseType');
    this.searchButton = page.locator('#cmdSearch');
    this.descriptionColuumnHeader = page.locator("//th[text()=\'Description\']");
    this.holdCellColuumnHeader = page.locator("//th[text()=\'Hold Cell\']");
    this.holdLockerColuumnHeader = page.locator("//th[text()=\'Hold Locker\']");
    this.forceCloseBookingColuumnHeader = page.locator("//th[text()=\'Force Close Booking\']");
    this.elecMonitoringColuumnHeader = page.locator("//th[text()=\'Elec. monitoring \']");
    this.stopBillingColuumnHeader = page.locator("//th[text()=\'Stop Billing\']");
    this.doNotSendToVINEColuumnHeader = page.locator("//th[text()=\'Do not send to VINE\']");
    this.hideFromLocatorColuumnHeader = page.locator("//th[text()=\'Hide From Locator\']");
    this.inactiveColuumnHeader = page.locator("//th[text()=\'Inactive\']");
    this.statusCodeEdit = page.locator('#txtStatusCode');
    this.addNewButton = page.locator("//span[text()=\'Add New\']");
    this.descriptionEdit = page.locator('#txtDescription');
  }

  async verifyAtColumnValuesAreSortedDescendingOrder(i: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedDescending(
    // uIMapSettings.releaseCodes.uIReleaseCodesResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i),
    // objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.releaseCodes.uIReleaseCodesResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i)));
  }

  async verifyAtColumnValuesAreSortedAscendingOrder(i: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedAscending(
    // uIMapSettings.releaseCodes.uIReleaseCodesResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i),
    // objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.releaseCodes.uIReleaseCodesResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i)));
  }

  async verifyAtColumnValuesAreSortedDescendingOrderForCheckBox(i: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedDescendingForCheckbox(
    // uIMapSettings.releaseCodes.uIReleaseCodesResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i),
    // objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.releaseCodes.uIReleaseCodesResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i)));
  }

  async verifyAtColumnValuesAreSortedAscendingOrderForCheckBox(i: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedAscendingForCheckbox(
    // uIMapSettings.releaseCodes.uIReleaseCodesResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i),
    // objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.releaseCodes.uIReleaseCodesResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i)));
  }

  async clickSearch(): Promise<void> {
    // uIMapSettings.releaseCodes.uISearchButton.click();
  }

  async clickDescriptionColuumnHeader(): Promise<void> {
    // uIMapSettings.releaseCodes.uIDescriptionColuumnHeader.click();
  }

  async clickHoldCellColuumnHeader(): Promise<void> {
    // uIMapSettings.releaseCodes.uIHoldCellColuumnHeader.click();
  }

  async clickHoldLockerColuumnHeader(): Promise<void> {
    // uIMapSettings.releaseCodes.uIHoldLockerColuumnHeader.click();
  }

  async clickForceCloseBookingColuumnHeader(): Promise<void> {
    // uIMapSettings.releaseCodes.uIForceCloseBookingColuumnHeader.click();
  }

  async clickElecMonitoringColuumnHeader(): Promise<void> {
    // uIMapSettings.releaseCodes.uIElecMonitoringColuumnHeader.click();
  }

  async clickStopBillingColuumnHeader(): Promise<void> {
    // uIMapSettings.releaseCodes.uIStopBillingColuumnHeader.click();
  }

  async clickDoNotSendToVINEColuumnHeader(): Promise<void> {
    // uIMapSettings.releaseCodes.uIDoNotSendToVINEColuumnHeader.click();
  }

  async clickHideFromLocatorColuumnHeader(): Promise<void> {
    // uIMapSettings.releaseCodes.uIHideFromLocatorColuumnHeader.click();
  }

  async clickInactiveColuumnHeader(): Promise<void> {
    // uIMapSettings.releaseCodes.uIInactiveColuumnHeader.click();
  }

  async enterAtStatusCode(): Promise<void> {
    // uIMapSettings.releaseCodes.uIStatusCodeEdit.sendKeys(BaseData.getSettingsModuleValue("StatusCode"));
  }

  async selectAtStatusCodeInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText
    // (uIMapSettings.releaseCodes.uIReleaseCodesResultTable, BaseData.getSettingsModuleValue("StatusCode"));
  }

  async clickAddNew(): Promise<void> {
    // uIMapSettings.releaseCodes.uIAddNewButton.click();
  }

  async enterAtStatusCode(i: number): Promise<void> {
    // uIMapSettings.releaseCodes.uIStatusCodeEdit.sendKeys(BaseData.getSettingsModuleValue("StatusCode" + i));
  }

  async verify1011NoRecordFoundAcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
  }

  async enterAtDescription(i: number): Promise<void> {
    // uIMapSettings.releaseCodes.uIDescriptionEdit.sendKeys(BaseData.getSettingsModuleValue("Description" + i));
  }

  async verifyAtDescriptionInGrid(i: number): Promise<void> {
    // String description = BaseData.getSettingsModuleValue("Description" + i);
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.releaseCodes.uIReleaseCodesResultTable, "Description");
    // for (String value : gridTableColumnValues) {
    // verify.ExpectedValueIsTrue(value.contains(description),
    // description + " - desciption value not contains in grid -->");
  }

  async verifyAtStatusCodeInGrid(i: number): Promise<void> {
    // String stausCode = BaseData.getSettingsModuleValue("StatusCode" + i);
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapSettings.releaseCodes.uIReleaseCodesResultTable, "Staus Code");
    // for (String value : gridTableColumnValues) {
    // verify.ExpectedValueIsTrue(value.contains(stausCode),
    // stausCode + " - desciption value not contains in grid -->");
  }

  async verifyAtStatusCode(i: number): Promise<void> {
    // String attribute = uIMapSettings.releaseCodes.uIStatusCodeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getSettingsModuleValue("StatusCode" + i), attribute);
  }

}

export class UserQuerySearchPage {
  readonly page: Page;
  readonly searchButton: Locator;
  readonly userQueryResultTable: Locator;
  readonly addNewButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchButton = page.locator('#btnSreach');
    this.userQueryResultTable = page.locator('#grdCrtUsrQrySrch');
    this.addNewButton = page.locator("//span[text()=\'Add New\']");
  }

  async verifyAtColumnValuesAreSortedAscendingOrder(i: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedAscendingCaseInsensitive(
    // uIMapSettings.userQuerySearch.uIUserQueryResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i),
    // objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.userQuerySearch.uIUserQueryResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i)));
  }

  async verifyAtColumnValuesAreSortedDescendingOrder(i: number): Promise<void> {
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedDescendingCaseInsensitive(
    // uIMapSettings.userQuerySearch.uIUserQueryResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i),
    // objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapSettings.userQuerySearch.uIUserQueryResultTable,
    // BaseData.getSettingsModuleValue("ColumnHeader" + i)));
  }

  async clickSearchButton(): Promise<void> {
    // uIMapSettings.userQuerySearch.uISearchButton.click();
  }

  async selectRandomRecord(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow(uIMapSettings.userQuerySearch.uIUserQueryResultTable);
  }

  async clickAddNewButton(): Promise<void> {
    // uIMapSettings.userQuerySearch.uIAddNewButton.click();
  }

}

export class Message2Page {
  readonly page: Page;
  readonly messageGridTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.messageGridTable = page.locator('#grdMessages');
  }

  async clickGridHeader(gridHeader: string): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectGridHeaderColumnNameWithoutContains(uIMapSettings.message.uIMessageGridTable, gridHeader);
  }

  async verifyGridIsEmpty(): Promise<void> {
    // verify.ExpectedIntergerValueIsEqualToActual(0, objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapSettings.message.uIMessageGridTable), "Grid contains data -->");
  }

}

export class CustomTabPage {
  readonly page: Page;
  readonly tabBox: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.tabBox = page.locator('#tab0');
    this.saveButton = page.locator('#cmdSave');
  }

  async closeScreen(): Promise<void> {
    // Playback.driver.close();
  }

  async verifyAtFieldName(i: number): Promise<void> {
    // String name = BaseData.getSettingsModuleValue("FieldName" + i);
    // verify.ExpectedValueIsTrue(uIMapSettings.customTab.uITabBox.getText().contains(name),
    // name + " field name is not available in tab --> ");
  }

  async clickSave(): Promise<void> {
    // uIMapSettings.customTab.uISaveButton.click();
  }

  async verifyAtCharacterLengthInCreatedCustomFields(JsonKeyIndex: number): Promise<void> {
    // String settingsModuleValue = BaseData.getSettingsModuleValue("ColumnName"+JsonKeyIndex);
    // String Length = BaseData.getSettingsModuleValue("Length");
    // String text = Playback.driver.findElement(By.id("txt"+settingsModuleValue)).getAttribute("value");
    // verify.ExpectedIntergerValueIsEqualToActual(text.length(), Integer.parseInt(Length));
  }

  async verifyAtNumberOfNewLinesCount(JsonKeyIndex: number): Promise<void> {
    // String settingsModuleValue = BaseData.getSettingsModuleValue("ColumnName"+JsonKeyIndex);
    // String text = Playback.driver.findElement(By.id("txt"+settingsModuleValue)).getText();
    // String LineCount = BaseData.getSettingsModuleValue("LineCount");
    // long count = text.lines().count();
    // int intcount = (int) count;
    // verify.ExpectedIntergerValueIsEqualToActual(intcount, Integer.parseInt(LineCount));
  }

  async enterAtCustomFieldsLineByLine(RandomStringLength: number, NumberOfNewLines: number, JsonKeyIndex: number): Promise<void> {
    // for (int i = 0; i < NumberOfNewLines; i++) {
    // String settingsModuleValue = BaseData.getSettingsModuleValue("ColumnName"+JsonKeyIndex);
    // Playback.driver.findElement(By.id("txt" + settingsModuleValue))
    // .sendKeys(Randomized.randomString(RandomStringLength));
    // Playback.driver.findElement(By.id("txt" + settingsModuleValue)).sendKeys(Keys.ENTER);
  }

  async enterAtCustomFields(JsonKeyIndex: number): Promise<void> {
    // String settingsModuleValue = BaseData.getSettingsModuleValue("ColumnName"+JsonKeyIndex);
    // Playback.driver.findElement(By.id("txt"+settingsModuleValue)).clear();
    // Playback.driver.findElement(By.id("txt"+settingsModuleValue)).click();
    // Playback.driver.findElement(By.id("txt"+settingsModuleValue)).sendKeys(BaseData.getSettingsModuleValue("CustomFieldsText"));
  }

  async clearCustomFields(JsonKeyIndex: number): Promise<void> {
    // String settingsModuleValue = BaseData.getSettingsModuleValue("ColumnName"+JsonKeyIndex);
    // Playback.driver.findElement(By.id("txt"+settingsModuleValue)).clear();
  }

}

export class RepositoryEditEntryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

}

export class MainTab4Page {
  readonly page: Page;
  readonly allStatusCheckBox: Locator;
  readonly nFIRSIncidentTypeEdit: Locator;
  readonly nERISIncidentTypeEdit: Locator;
  readonly defaultFrequencyDropDown: Locator;
  readonly dispatchToEnrouteEdit: Locator;
  readonly arriveToInServiceEdit: Locator;
  readonly enrouteToArriveEdit: Locator;
  readonly defaultTemplateForNFIRSRemarksDropDown: Locator;
  readonly shareCallsWithCFSToOtherAgenciesCheckbox: Locator;
  readonly dashboardEntrySecondsEdit: Locator;
  readonly dashboardEntrySortSeqEdit: Locator;
  readonly dashboardEntryAddButton: Locator;
  readonly dashboardEntryClearButton: Locator;
  readonly dashboardNameDropDown: Locator;
  readonly dashboardEntryTable: Locator;
  readonly groupSortDropDown: Locator;
  readonly sortEdit: Locator;
  readonly passwordCheckbox: Locator;
  readonly customNameEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allStatusCheckBox = page.locator('#tabQuestion_tmpl0_usrCADUIConfigMain1_chkAllStatus');
    this.nFIRSIncidentTypeEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD2_lupCADIncType_CodeValue');
    this.nERISIncidentTypeEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD2_lupNERISIncType_CodeValue');
    this.defaultFrequencyDropDown = page.locator('#tabCFSCode_tmpl0_UsrCAD2_cddFrequency_DropDown');
    this.dispatchToEnrouteEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD2_txtDispatch');
    this.arriveToInServiceEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD2_txtArrive');
    this.enrouteToArriveEdit = page.locator('#tabCFSCode_tmpl0_UsrCAD2_txtEnroute');
    this.defaultTemplateForNFIRSRemarksDropDown = page.locator('#tabCFSCode_tmpl0_UsrCAD2_lstTextName');
    this.shareCallsWithCFSToOtherAgenciesCheckbox = page.locator('#tabCFSCode_tmpl0_UsrCAD2_chkIsPnxCAD2CAD');
    this.dashboardEntrySecondsEdit = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_txtseconds');
    this.dashboardEntrySortSeqEdit = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_txtsortseq');
    this.dashboardEntryAddButton = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_imgMobileReportPathAdd');
    this.dashboardEntryClearButton = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_imgMobileReportPathAdd');
    this.dashboardNameDropDown = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_cboDashboardName');
    this.dashboardEntryTable = page.locator('#tabDashboard_tmpl0_usrDashboardEntry_grdMobileReportPath');
    this.groupSortDropDown = page.locator('#tabParam_tmpl0_UsrParamMain1_radGroupName_Input');
    this.sortEdit = page.locator('#tabParam_tmpl0_UsrParamMain1_txtSortSeqNo');
    this.passwordCheckbox = page.locator('#tabParam_tmpl0_UsrParamMain1_chkIsPassword');
    this.customNameEdit = page.locator('#tabRepo_tmpl0_usrRepoMain1_txtCustomName');
  }

  async clearCustomName(): Promise<void> {
    // uIMapSettings.repositoryEditEntry.mainTab.uICustomNameEdit.clear();
  }

  async enterAtCustomName(): Promise<void> {
    // uIMapSettings.repositoryEditEntry.mainTab.uICustomNameEdit.sendKeys
    // (BaseData.getSettingsModuleValue("CustomName"));
  }

}

export class ExternalInterfaceLogPage {
  readonly page: Page;
  readonly refEdit: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.refEdit = page.locator('#txtRefNbr');
    this.searchButton = page.locator("//span[text()=\'Search\']");
  }

  async verify1011NoRecordFoundAcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
  }

  async enterAtRef(i: number): Promise<void> {
    // uIMapSettings.externalInterfaceLog.uIRefEdit.sendKeys(BaseData.getSettingsModuleValue("Ref"));
  }

  async clickSearch(): Promise<void> {
    // uIMapSettings.externalInterfaceLog.uISearchButton.click();
  }

}

