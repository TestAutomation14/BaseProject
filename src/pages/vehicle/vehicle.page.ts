// @ts-nocheck
import { Page, Locator, FrameLocator } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { AcknowledgePage, ConfirmPage } from '../popup.page';

export class VehiclePage {
  private page: Page;
  private browserHelpers: BrowserHelpers;

  constructor(page: Page) {
    this.page = page;
    this.browserHelpers = new BrowserHelpers(page);
  }

  async Reset(): Promise<void> {
    // uIMapVehicle = null;
  }

  async switchTovehicleMergeDetail() {
    return this.browserHelpers.switchToPageByTitle('Vehicle Merge');
  }

  async switchTovehicleMerge() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmVehicleMerge.aspx?');
  }

  async switchToVehicleBoatSearchHelpWindow() {
    return this.browserHelpers.switchToPageByTitle('Vehicle/Boat Search - 3231');
  }

  async switchToVehicleBoatSearch() {
    return this.browserHelpers.switchToMainWindowScreenTab('Property/frmPropVehSrch.aspx');
  }

  async switchToFleetSearch() {
    return this.browserHelpers.switchToMainWindowScreenTab('Vehicle/frmVehicleSrch');
  }

  async switchToFleetEntry() {
    return this.browserHelpers.switchToPageByTitle('Fleet Entry');
  }

  async switchToVehicleBoatEntry() {
    return this.browserHelpers.switchToPageByTitle('Vehicle/Boat Entry');
  }

  async switchToEquipmentService() {
    return this.browserHelpers.switchToPageByTitle('Equipment Service');
  }

  async switchToFuelLogEntry() {
    return this.browserHelpers.switchToPageByTitle('Fuel Log Entry');
  }

  async switchToMileageLogEntry() {
    return this.browserHelpers.switchToMainWindowScreenTab('frmFuelLogSrch.aspx');
  }

  async switchToVehicleMakeModel() {
    return this.browserHelpers.switchToPageByTitle('Vehicle Make Model');
  }

  async switchToTowRotation() {
    return this.browserHelpers.switchToMainWindowScreenTab('Tow/frmTowRotation');
  }

  async switchToTowVendor() {
    return this.browserHelpers.switchToMainWindowScreenTab('Tow/frmVendorSrch');
  }

  async switchToVehicleFlagDetailsScreen() {
    return this.browserHelpers.switchToPageByUrl('frmVehicleFlagDtl.aspx');
  }

  async switchToCRMFleet() {
    return this.browserHelpers.switchToMainWindowScreenTab('Fleet');
  }

  async switchToMileageLogEntryWindow() {
    return this.browserHelpers.switchToPageByTitle('Mileage Log Entry');
  }

}

export class VehicleBoatSearchHelpWindowPage {
  readonly page: Page;
  readonly addNewVehicleButton: Locator;
  readonly addNewBoatButton: Locator;
  readonly uncheckedCheckBox: Locator;
  readonly resultTable: Locator;
  readonly selectVehicleButton: Locator;
  readonly selectBoatButton: Locator;
  readonly resetButton: Locator;
  readonly refreshButton: Locator;
  readonly backButton: Locator;
  readonly vehicleBoatSearchGrIDTable: Locator;
  readonly fromDateEdit: Locator;
  readonly toDateEdit: Locator;
  readonly dateResetButton: Locator;
  readonly addVehicleButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewVehicleButton = page.locator("(//span[contains(text(),\'Add New Vehicle\')])");
    this.addNewBoatButton = page.locator("(//span[contains(text(),\'Add New Boat\')])");
    this.uncheckedCheckBox = page.locator("(//div[@ID=\'grdVehBoatSrch\'] //img[@title= \'Unchecked\'])");
    this.resultTable = page.locator('#grdVehBoatSrch');
    this.selectVehicleButton = page.locator("(//span[contains(text(),\'Select Vehicle\')])");
    this.selectBoatButton = page.locator("(//span[contains(text(),\'Select Boat\')])");
    this.resetButton = page.locator("//span[text()=\'Reset\']");
    this.refreshButton = page.locator("//span[text()=\'Refresh\']");
    this.backButton = page.locator("//span[text()=\'Back\']");
    this.vehicleBoatSearchGrIDTable = page.locator("//div[@id=\'grdRPTPropVeh\']");
    this.fromDateEdit = page.locator('#tabVehBoat_tmpl0_UsrVeh1_dtmDateRangeFromDttm_Date_KPIDttmCtrl');
    this.toDateEdit = page.locator('#tabVehBoat_tmpl0_UsrVeh1_dtmDateRangeToDttm_Date_KPIDttmCtrl');
    this.dateResetButton = page.locator('#tabVehBoat_tmpl0_UsrVeh1_imgClear');
    this.addVehicleButton = page.locator("//li[@title=\'Add New Vehicle\']");
  }

  async selectBoat(): Promise<void> {
    // if (version.contains("2020R2") || version.contains("2020")) {
    // Playback.pageLoadThreadWait();
    // switchToVehicleBoatSearchHelpWindow();
    // objectIdentification.randomIdentify
    // .selectRandomGridRowCheckbox(uIMapVehicle.vehicleBoatSearchHelpWindow.uIResultTable);
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uISelectBoatButton.click();
    // Playback.threadWait(2000);
    // Playback.pageLoadThreadWait();
    // } else {
    // switchToVehicleBoatSearchHelpWindow();
    // objectIdentification.randomIdentify
    // .selectRandomGridRow(uIMapVehicle.vehicleBoatSearchHelpWindow.uIResultTable);
    // Playback.threadWait(2000);
    // Playback.pageLoadThreadWait();
  }

  async RightClickInStatePlate(BoatNo: string): Promise<void> {
    // WebElement ClickBoatNo = Playback.driver
    // .findElement(By.xpath("//div[@id='grdVehBoatSrch']//tbody//td[text()='" + BoatNo + "']"));
    // // ClickBoatNo.click();
    // Actions actionDriver = new Actions(Playback.driver);
    // actionDriver.contextClick(ClickBoatNo).perform();
    // WebElement Option = Playback.driver.findElement(By.xpath("//div[@id='UltraWebMenu1']"));
    // Option.click();
  }

  async selectVehicle(): Promise<void> {
    // if (version.contains("2020R2") || version.contains("2020")) {
    // Playback.pageLoadThreadWait();
    // Playback.pageLoadThreadWait();
    // switchToVehicleBoatSearchHelpWindow();
    // objectIdentification.randomIdentify
    // .selectRandomGridRowCheckbox(uIMapVehicle.vehicleBoatSearchHelpWindow.uIResultTable);
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uISelectVehicleButton.click();
    // Playback.threadWait();
    // Playback.pageLoadThreadWait();
    // } else {
    // switchToVehicleBoatSearchHelpWindow();
    // objectIdentification.randomIdentify
    // .selectRandomGridRow(uIMapVehicle.vehicleBoatSearchHelpWindow.uIResultTable);
    // Playback.threadWait(2000);
    // Playback.pageLoadThreadWait();
  }

  async selectVehicleAtPlateCheck(): Promise<void> {
    // if (version.contains("2020R2") || version.contains("2020")) {
    // Playback.pageLoadThreadWait();
    // switchToVehicleBoatSearchHelpWindow();
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uIResultTable,
    // BaseData.getVehicleModuleValue("PlateCheckVehicle"));
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uISelectVehicleButton.click();
    // Playback.threadWait();
    // Playback.waitForPageLoad();
    // Playback.pageLoadThreadWait();
    // } else {
    // Playback.pageLoadThreadWait();
    // switchToVehicleBoatSearchHelpWindow();
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uIResultTable,
    // BaseData.getVehicleModuleValue("PlateCheckVehicle"));
  }

  async selectVehicleAtFI(): Promise<void> {
    // if (version.contains("2020R2") || version.contains("2020")) {
    // Playback.pageLoadThreadWait();
    // switchToVehicleBoatSearchHelpWindow();
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uIResultTable,
    // BaseData.getVehicleModuleValue("FIVehicle"));
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uISelectVehicleButton.click();
    // Playback.threadWait();
    // Playback.waitForPageLoad();
    // Playback.pageLoadThreadWait();
    // } else {
    // Playback.pageLoadThreadWait();
    // switchToVehicleBoatSearchHelpWindow();
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uIResultTable,
    // BaseData.getVehicleModuleValue("FIVehicle"));
  }

  async selectVehicleAtVinNo(): Promise<void> {
    // if (version.contains("2020R2") || version.contains("2020")) {
    // Playback.pageLoadThreadWait();
    // switchToVehicleBoatSearchHelpWindow();
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uIResultTable,
    // BaseData.getVehicleModuleValue("VINNo"));
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uISelectVehicleButton.click();
    // Playback.threadWait();
    // Playback.waitForPageLoad();
    // Playback.pageLoadThreadWait();
    // } else {
    // Playback.pageLoadThreadWait();
    // switchToVehicleBoatSearchHelpWindow();
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uIResultTable,
    // BaseData.getVehicleModuleValue("VINNo"));
  }

  async selectAtVehicleUsingVehicleNo(): Promise<void> {
    await this.page.waitForTimeout(1000);
    await this.grid.selectRowByCellText(this.uIResultTable, BaseData.getNamesModuleValue('LastName') + ', ' + BaseData.getNamesModuleValue('FirstName'));

    // if (version.contains("2020R2") || version.contains("2020")) {
    // Playback.pageLoadThreadWait();
    // switchToVehicleBoatSearchHelpWindow();
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uIResultTable,
    // BaseData.getVehicleModuleValue("VehicleNo"));
    // Playback.controlReadyThreadWait();
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uISelectVehicleButton.click();
    // Playback.threadWait();
    // Playback.pageLoadThreadWait();
    // } else {
    // Playback.pageLoadThreadWait();
    // switchToVehicleBoatSearchHelpWindow();
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uIResultTable,
    // BaseData.getVehicleModuleValue("VehicleNo"));
    // Playback.controlReadyThreadWait();
  }

  async selectCheckBoxByPlate(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uIResultTable, BaseData.getVehicleModuleValue("Plate"));
  }

  async ClickRefreshButton(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uIRefreshButton.click();
    // Playback.controlReadyThreadWait();
  }

  async ClickBackButton(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uIBackButton.click();
    // Playback.controlReadyThreadWait();
  }

  async ClickResetButton(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uIResetButton.click();
    // Playback.controlReadyThreadWait();
  }

  async selectRowByAtMake(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uIVehicleBoatSearchGrIDTable,
    // BaseData.getVehicleModuleValue("Make"));
  }

  async verifyAtPlateInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("StatePlate"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uIVehicleBoatSearchGrIDTable, "State-Plate",
    // rowIndex));
  }

  async selectRowByAtStatePlate(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uIVehicleBoatSearchGrIDTable,
    // BaseData.getVehicleModuleValue("StatePlate"));
  }

  async verifyAtStatePlateInIncidentVehicleGrid(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uIVehicleBoatSearchGrIDTable,
    // BaseData.getVehicleModuleValue("StatePlate"));
    // verify.ExpectedValueIsTrue(
    // gridRowByCellInnerText.getText().contains(BaseData.getVehicleModuleValue("StatePlate")));
  }

  async verifyAtStatePlateByUsingVINNoInGrid(i: number): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchGrIDTable,
    // BaseData.getVehicleModuleValue("VINNo" + i), "State-Plate");
    // verify.ExpectedPropertyValueIsEqual(gridCell.getText(), BaseData.getVehicleModuleValue("StatePlate" + i));
  }

  async verifyColumnsSortingAsAscending(ColumnName: string): Promise<void> {
    // List<String> ColumnValue = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchGrIDTable, ColumnName);
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedAscending(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchGrIDTable, ColumnName, ColumnValue);
  }

  async verifyColumnsSortingAsDescending(ColumnName: string): Promise<void> {
    // List<String> ColumnValue = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchGrIDTable, ColumnName);
    // objectIdentification.manualIdentify.verifyAtColumnValuesAreSortedAscending(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchGrIDTable, ColumnName, ColumnValue);
  }

  async verify1017PleaseSearchAcknowledgePopupNotExist(): Promise<void> {
    // popup.acknowledge.verifyAcknowledgeWindowNotOpened("(1017)Please search and select a record");
  }

  async verifyDateRangeFromAndToReseted(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapVehicle.vehicleBoatSearchHelpWindow.uIFromDateEdit.getText().isEmpty());
    // verify.ExpectedValueIsTrue(uIMapVehicle.vehicleBoatSearchHelpWindow.uIToDateEdit.getText().isEmpty());
  }

  async close(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearchHelpWindow.driver.close();
  }

  async clickDateResetButton(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uIDateResetButton.click();
  }

  async verifyVehicleBoatSearchWindowExists(): Promise<void> {
    // boolean windowExist = objectIdentification.windowHandle.windowExist("Vehicle/Boat Search");
    // verify.ExpectedValueIsTrue(windowExist);
  }

  async clickAddVehicleButton(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uIAddVehicleButton.click();
  }

}

export class VehicleBoatEntryPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly saveCloseButton: Locator;
  readonly resetButton: Locator;
  readonly addNewBoatButton: Locator;
  readonly vinNumberEdit: Locator;
  readonly yearEdit: Locator;
  readonly makeEdit: Locator;
  readonly makeLookupButton: Locator;
  readonly modelEdit: Locator;
  readonly modelLookupButton: Locator;
  readonly styleEdit: Locator;
  readonly styleLookupButton: Locator;
  readonly vODComboBox: Locator;
  readonly descriptionEdit: Locator;
  readonly mainTab: Locator;
  readonly flagsTab: Locator;
  readonly notesTab: Locator;
  readonly attachmentsTab: Locator;
  readonly selectButton: Locator;
  readonly boatEdit: Locator;
  readonly insuranceCompanyComboBox: Locator;
  readonly insurancePolicyNumberEdit: Locator;
  readonly boatHullEdit: Locator;
  readonly propulsionEdit: Locator;
  readonly propulsionLookupButton: Locator;
  readonly materialEdit: Locator;
  readonly materialLookupButton: Locator;
  readonly lengthEdit: Locator;
  readonly plateNumberEdit: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly makeDescription: Locator;
  readonly modelDescription: Locator;
  readonly custom1Edit: Locator;
  readonly colorsEdit: Locator;
  readonly styleDescriptionEdit: Locator;
  readonly printButton: Locator;
  readonly vehicleField: Locator;
  readonly plateSTEdit: Locator;
  readonly leadsTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdSave');
    this.saveCloseButton = page.locator('#cmdSaveNClose');
    this.resetButton = page.locator('#cmdRefresh');
    this.addNewBoatButton = page.locator('#btnAddBoat');
    this.vinNumberEdit = page.locator('#txtVehicleVinNbr');
    this.yearEdit = page.locator('#txtVehicleYear');
    this.makeEdit = page.locator('#lupVehicleMake_CodeValue');
    this.makeLookupButton = page.locator('#lupMake_imgBtn');
    this.modelEdit = page.locator('#lupModel_CodeValue');
    this.modelLookupButton = page.locator('#lupModel_imgBtn');
    this.styleEdit = page.locator('#lupStyle_CodeValue');
    this.styleLookupButton = page.locator('#lupStyle_imgBtn');
    this.vODComboBox = page.locator('#cddVOD_DropDown');
    this.descriptionEdit = page.locator('#txtDescription');
    this.mainTab = page.locator("//span[contains(text(),\'Main\')]");
    this.flagsTab = page.locator("//span[contains(text(),\'Flags\')]");
    this.notesTab = page.locator("//span[contains(text(),\'Notes\')]");
    this.attachmentsTab = page.locator("//span[contains(text(),\'Attachments\')]");
    this.selectButton = page.locator('#cmdSelect');
    this.boatEdit = page.locator('#txtVehNo');
    this.insuranceCompanyComboBox = page.locator('#cddInsuranceCode_DropDown');
    this.insurancePolicyNumberEdit = page.locator('#txtInsPolicyNo');
    this.boatHullEdit = page.locator('#txtVinNbr');
    this.propulsionEdit = page.locator('#lupModel_CodeValue');
    this.propulsionLookupButton = page.locator('#lupModel_imgBtn');
    this.materialEdit = page.locator('#lupStyle_CodeValue');
    this.materialLookupButton = page.locator('#lupStyle_imgBtn');
    this.lengthEdit = page.locator('#txtlength');
    this.plateNumberEdit = page.locator('#txtPlateST');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']/b");
    this.makeDescription = page.locator('#lupVehicleMake_CodeDescription');
    this.modelDescription = page.locator('#lupVehicleModel_CodeDescription');
    this.custom1Edit = page.locator('#txtWTVNo');
    this.colorsEdit = page.locator('#txtColor');
    this.styleDescriptionEdit = page.locator('#lupStyle_CodeDescription');
    this.printButton = page.locator('#cmdPrint');
    this.vehicleField = page.locator('#txtVehNo');
    this.plateSTEdit = page.locator('#txtPlateST');
    this.leadsTab = page.locator("//span[contains(text(),\'Leads\')]");
  }

  async switchToAttachmentsTab(): Promise<void> {
    // objectIdentification.windowHandle.switchToFrame("frmTxtAttachMgrEx");
  }

  async enterAtYear(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIYearEdit.clear();
    // uIMapVehicle.vehicleBoatEntry.uIYearEdit.click();
    // uIMapVehicle.vehicleBoatEntry.uIYearEdit.sendKeys(BaseData.getVehicleModuleValue("Year"));
  }

  async enterYearAsCurrentYear(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIYearEdit.sendKeys(Randomized.getCurrentYear());
  }

  async enterAtVinNo(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIVinNumberEdit.clear();
    // uIMapVehicle.vehicleBoatEntry.uIVinNumberEdit.click();
    // uIMapVehicle.vehicleBoatEntry.uIVinNumberEdit.sendKeys(BaseData.getVehicleModuleValue("VinNo"));
    // uIMapVehicle.vehicleBoatEntry.uIVinNumberEdit.sendKeys(Keys.TAB);
  }

  async enterAtVinNo1(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIVinNumberEdit.clear();
    // uIMapVehicle.vehicleBoatEntry.uIVinNumberEdit.click();
    // uIMapVehicle.vehicleBoatEntry.uIVinNumberEdit.sendKeys(BaseData.getVehicleModuleValue("VinNo1"));
    // uIMapVehicle.vehicleBoatEntry.uIVinNumberEdit.sendKeys(Keys.TAB); // Added
  }

  async enterAtMake(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIMakeEdit.clear();
    // uIMapVehicle.vehicleBoatEntry.uIMakeEdit.click();
    // uIMapVehicle.vehicleBoatEntry.uIMakeEdit.sendKeys(BaseData.getVehicleModuleValue("Make"));
    // uIMapVehicle.vehicleBoatEntry.uIMakeEdit.sendKeys(Keys.TAB);
  }

  async enterAtModel(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIModelEdit.clear();
    // uIMapVehicle.vehicleBoatEntry.uIModelEdit.click();
    // uIMapVehicle.vehicleBoatEntry.uIModelEdit.sendKeys(BaseData.getVehicleModuleValue("Model"));
  }

  async selectMake(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIMakeLookupButton.click();
    // Playback.pageLoadThreadWait();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async selectModel(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIModelLookupButton.click();
    // Playback.pageLoadThreadWait();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async selectStyle(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIStyleLookupButton.click();
    // Playback.pageLoadThreadWait();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async selectInsuranceCompany(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapVehicle.vehicleBoatEntry.uIInsuranceCompanyComboBox);
  }

  async enterInsurancePoliceNumber(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIInsurancePolicyNumberEdit
    // .sendKeys(String.valueOf(Randomized.getRandomNumber(6)));
  }

  async enterAtStyle(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIStyleEdit.clear();
    // uIMapVehicle.vehicleBoatEntry.uIStyleEdit.click();
    // uIMapVehicle.vehicleBoatEntry.uIStyleEdit.sendKeys(BaseData.getVehicleModuleValue("Style"));
  }

  async selectVehicleAtPlateCheck(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // switchToVehicleBoatSearchHelpWindow();
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uIResultTable,
    // BaseData.getVehicleModuleValue("PlateCheckVehicle"));
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uISelectVehicleButton.click();
    // Playback.threadWait();
    // Playback.waitForPageLoad();
  }

  async clickSelectButton(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapVehicle.vehicleBoatEntry.uISelectButton.click();
    // //	popup.confirm.yes();//popup not appearing in 140 CRM 196455
    // Playback.controlReadyThreadWait();
  }

  async clickSaveButton(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uISaveButton.click();
  }

  async selectVehicleAtFI(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // switchToVehicleBoatSearchHelpWindow();
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uIResultTable,
    // BaseData.getVehicleModuleValue("FIVehicle"));
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uISelectVehicleButton.click();
    // Playback.threadWait();
    // Playback.waitForPageLoad();
  }

  async selectVehicleAtVinNo(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // switchToVehicleBoatSearchHelpWindow();
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uIResultTable, BaseData.getVehicleModuleValue("VIN"));
    // uIMapVehicle.vehicleBoatSearchHelpWindow.uISelectVehicleButton.click();
    // Playback.threadWait();
  }

  async saveScreen(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uISaveButton.click();
    // popup.confirm.yes();
    // Playback.pageLoadThreadWait();
  }

  async clickMainTab(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIMainTab.click();
  }

  async clickFlagsTab(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIFlagsTab.click();
    // Playback.controlReadyThreadWait();
  }

  async clickAttachmentsTab(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIAttachmentsTab.click();
    // Playback.controlReadyThreadWait();
  }

  async closeScreen(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.driver.close();
  }

  async enterAtBoatHullNo(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIBoatHullEdit.clear();
    // uIMapVehicle.vehicleBoatEntry.uIBoatHullEdit.sendKeys(BaseData.getVehicleModuleValue("BoatHullNo"));
  }

  async verifyRegistrationNumberAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(6040) Registration No or Hull No is required");
  }

  async verifyUpdateSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapVehicle.vehicleBoatEntry.uIBottomLeftSideStatusBar.getText(),
    // "1003 - Update Successful");
  }

  async verifyVinNoDuplicationAlertMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(9126) VIN No already exists");
  }

  async verify9154EnterPlateNoOrVINNoAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(9154)Enter Plate No or VIN No");
  }

  async enterAtPropulsion(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIPropulsionEdit.clear();
    // uIMapVehicle.vehicleBoatEntry.uIPropulsionEdit.sendKeys(BaseData.getVehicleModuleValue("Propulsion"));
  }

  async enterAtMaterial(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIMaterialEdit.clear();
    // uIMapVehicle.vehicleBoatEntry.uIMaterialEdit.sendKeys(BaseData.getVehicleModuleValue("Material"));
  }

  async selectVOD(): Promise<void> {
    // objectIdentification.randomIdentify.selectDropDownOption(uIMapVehicle.vehicleBoatEntry.uIVODComboBox);
  }

  async enterLength(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uILengthEdit.sendKeys(String.valueOf(Randomized.getRandomNumber(3)));
  }

  async enterDescription(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIDescriptionEdit.sendKeys(Randomized.randomString(100));
  }

  async saveAndCloseScreen(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uISaveCloseButton.click();
    // popup.confirm.yes();
  }

  async selectAtInsuranceCompanyByValue(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.vehicleBoatEntry.uIInsuranceCompanyComboBox,
    // BaseData.getVehicleModuleValue("InsuranceCompany"));
  }

  async readVINNo(): Promise<string> {
    // String vinNo = uIMapVehicle.vehicleBoatEntry.uIVinNumberEdit.getAttribute("value");
    // return vinNo;
  }

  async readVehicleNo(): Promise<string> {
    // String vehicleNo = "V-" + uIMapVehicle.vehicleBoatEntry.uIBoatEdit.getAttribute("value");
    // System.out.println("vehicle no ---" + vehicleNo);
    // return vehicleNo;
  }

  async enterVINNoAsMoreThan17Characters(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIVinNumberEdit.sendKeys(Randomized.randomAlphanumeric(20));
    // uIMapVehicle.vehicleBoatEntry.uIVinNumberEdit.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async verifyVinNoExceedingLimitOf17Characters(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage(
    // "(6040) The VIN number entered is not a valid VIN.VIN numbers are currently limited to a maximum of 17 characters.");
  }

  async verifyAtPlate(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapVehicle.vehicleBoatEntry.uIPlateNumberEdit.getAttribute("value")
    // .contains(BaseData.getVehicleModuleValue("PlateNumber")));
  }

  async readMakeDescription(): Promise<string> {
    // String attribute = uIMapVehicle.vehicleBoatEntry.uIMakeDescription.getAttribute("value");
    // return attribute;
  }

  async readModelDescription(): Promise<string> {
    // String attribute = uIMapVehicle.vehicleBoatEntry.uIModelDescription.getAttribute("value");
    // return attribute;
  }

  async readInsuranceCompany(): Promise<string> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapVehicle.vehicleBoatEntry.uIInsuranceCompanyComboBox);
    // return dropDownSelectedItem;
  }

  async readMake(): Promise<string> {
    // String attribute = uIMapVehicle.vehicleBoatEntry.uIMakeEdit.getAttribute("value");
    // return attribute;
  }

  async verifyOnewindowIsOpened(collectWindowHandles: string, collectWindowHandles1: string): Promise<void> {
    // int Count = collectWindowHandles.size();
    // int newCount = collectWindowHandles1.size();
    // verify.ExpectedValueIsTrue(Count + 1 == newCount);
  }

  async verifyAdditionSuccessfulMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapVehicle.vehicleBoatEntry.uIBottomLeftSideStatusBar.getText(),
    // "1002 - Addition Successful");
  }

  async clickAddNewBoatButton(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIAddNewBoatButton.click();
  }

  async clickSaveNCloseButton(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uISaveCloseButton.click();
  }

  async verifyHullNoDuplicationAlertMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(9127) Boat Hull No already exists");
  }

  async enterAtBoatHullNo1(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIBoatHullEdit.clear();
    // uIMapVehicle.vehicleBoatEntry.uIBoatHullEdit.sendKeys(BaseData.getVehicleModuleValue("BoatHullNo1"));
  }

  async enterAtCustom1(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uICustom1Edit.sendKeys(BaseData.getVehicleModuleValue("Custom1"));
    // uIMapVehicle.vehicleBoatEntry.uICustom1Edit.sendKeys(Keys.TAB);
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIPrintButton.click();
  }

  async enterAtRegistrationNo(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateNumberEdit
    // .sendKeys(BaseData.getVehicleModuleValue("PlateNumber"));
  }

  async readYear(): Promise<string> {
    // String year = uIMapVehicle.vehicleBoatEntry.uIYearEdit.getAttribute("value");
    // return year;
  }

  async readColors(): Promise<string> {
    // String colors = uIMapVehicle.vehicleBoatEntry.uIColorsEdit.getAttribute("value");
    // return colors;
  }

  async readstyleDescription(): Promise<string> {
    // String Style = uIMapVehicle.vehicleBoatEntry.uIStyleDescriptionEdit.getAttribute("value");
    // return Style;
  }

  async readPlateAndState(): Promise<string> {
    // String platenumber = uIMapVehicle.vehicleBoatEntry.uIPlateNumberEdit.getAttribute("value");
    // return platenumber;
  }

  async verifyVechicleNoIsGenerated(): Promise<void> {
    // String vehicle = uIMapVehicle.vehicleBoatEntry.uIVehicleField.getAttribute("value");
    // System.out.println(vehicle);
    // boolean empty = vehicle.isEmpty();
    // verify.ExpectedValueIsFalse(empty);
  }

  async verifyAtState(): Promise<void> {
    // String dropDwonSelectedItem = objectIdentification.manualIdentify
    // .getDropDwonSelectedItem(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIStateComboBox);
    // System.out.println(dropDwonSelectedItem);
    // verify.ExpectedValueIsTrue(dropDwonSelectedItem.contains(BaseData.getVehicleModuleValue("vehicleState")));
  }

  async clickResetButton(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIResetButton.click();
  }

  async enterAtInsurancePoliceNumber(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIInsurancePolicyNumberEdit
    // .sendKeys(BaseData.getVehicleModuleValue("InsurancePolicyNumber"));
  }

  async readVehicleNoWithoutPrefix(): Promise<string> {
    // String vehicleNo = uIMapVehicle.vehicleBoatEntry.uIVehicleField.getAttribute("value");
    // return vehicleNo;
  }

  async readBoatNo(): Promise<string> {
    // String boatNo = "B-" + uIMapVehicle.vehicleBoatEntry.uIBoatEdit.getAttribute("value");
    // System.out.println("Boat no ---" + boatNo);
    // return boatNo;
  }

  async verifyAddNewBoatButtonIsDisplayedAndEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapVehicle.vehicleBoatEntry.uIAddNewBoatButton.isDisplayed());
    // verify.ExpectedValueIsTrue(uIMapVehicle.vehicleBoatEntry.uIAddNewBoatButton.isEnabled());
  }

  async verifyAddNewBoatButtonNotDisplayed(): Promise<void> {
    // boolean controlExist = objectIdentification.manualIdentify
    // .controlExist(uIMapVehicle.vehicleBoatEntry.uIAddNewBoatButton);
    // verify.ExpectedValueIsFalse(controlExist);
  }

  async verify1051UpdatedDataExistsAckMsg(): Promise<void> {
    // popup.acknowledge
    // .okWithExpectedMessage("(1051) Updated data exists in the Flags tab. You must save or reset.");
  }

  async verifyVehicleNoIsNull(): Promise<void> {
    // String t = uIMapVehicle.vehicleBoatEntry.uIVehicleField.getText();
    // verify.ExpectedValueIsTrue(uIMapVehicle.vehicleBoatEntry.uIVehicleField.getAttribute("value").isBlank());
  }

  async verifyBoatNoIsEmpty(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapVehicle.vehicleBoatEntry.uIBoatEdit.getAttribute("value").isBlank(),
    // "Boat No is not Empty --> ");
  }

  async verifyBoatNoIsCreated(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapVehicle.vehicleBoatEntry.uIBoatEdit.getAttribute("value").isBlank(),
    // "Boat No is Empty --> ");
  }

  async enterBoatHullNoAsMoreThan17Characters(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIBoatHullEdit.sendKeys(Randomized.randomAlphanumeric(20));
    // uIMapVehicle.vehicleBoatEntry.uIBoatHullEdit.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async enterAtBoatHullNo(i: number): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIBoatHullEdit.clear();
    // uIMapVehicle.vehicleBoatEntry.uIBoatHullEdit.sendKeys(BaseData.getVehicleModuleValue("BoatHullNo" + i));
  }

  async reloadScreen(): Promise<void> {
    // objectIdentification.manualIdentify.reloadWindowUsingTitle("Vehicle/Boat Entry");
  }

  async verifyAtVehicleNo(readedVehicleNo: string): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(readedVehicleNo,
    // uIMapVehicle.vehicleBoatEntry.uIVehicleField.getAttribute("value"),
    // "Vehicle No is not same as expected -->");
  }

  async verifyAtBoatNo(readedBoatNo: string): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(readedBoatNo,
    // uIMapVehicle.vehicleBoatEntry.uIBoatEdit.getAttribute("value"));
  }

  async getBoatNo(): Promise<string> {
    // String boatNo = uIMapVehicle.vehicleBoatEntry.uIBoatEdit.getAttribute("value");
    // System.out.println("Boat No ---> " + boatNo);
    // return boatNo;
  }

  async getVehicleNo(): Promise<string> {
    // String vehicleNo = uIMapVehicle.vehicleBoatEntry.uIBoatEdit.getAttribute("value");
    // System.out.println("Vehicle No ---> " + vehicleNo);
    // return vehicleNo;
  }

  async verifyAttachmentsTabIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapVehicle.vehicleBoatEntry.uIAttachmentsTab.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verifyNotesTabIsDisplayed(): Promise<void> {
    // boolean displayed = uIMapVehicle.vehicleBoatEntry.uINotesTab.isDisplayed();
    // verify.ExpectedValueIsTrue(displayed);
  }

  async verify6040Popup(vehicleNo: string): Promise<void> {
    // popup.confirm.yesWithExpectedMessage(
    // "(6040)   VIN# already active for Vehicle# " + vehicleNo + ". Do you want to transfer.  ");
  }

  async verifyAtVINNo(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("VinNo"),
    // uIMapVehicle.vehicleBoatEntry.uIVinNumberEdit.getAttribute("value"),
    // "Vin No is not same as expected -->");
  }

  async verifyAtYear(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Year"),
    // uIMapVehicle.vehicleBoatEntry.uIYearEdit.getAttribute("value"), "Year is not same as expected -->");
  }

  async verifyAtMakeCode(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Make"),
    // uIMapVehicle.vehicleBoatEntry.uIMakeEdit.getAttribute("value"), "Make Code is not same as expected -->");
  }

  async verifyAtMakeDescription(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("MakeDescription"),
    // uIMapVehicle.vehicleBoatEntry.uIMakeDescription.getAttribute("value"), "Make Description is not same as expected -->");
  }

  async verifyAtModelCode(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Model"),
    // uIMapVehicle.vehicleBoatEntry.uIModelEdit.getAttribute("value"), "Model Code is not same as expected -->");
  }

  async verifyAtModelDescription(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("ModelDescription"),
    // uIMapVehicle.vehicleBoatEntry.uIModelDescription.getAttribute("value"), "Model Description is not same as expected -->");
  }

  async verifyAtStyle(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Style"),
    // uIMapVehicle.vehicleBoatEntry.uIStyleEdit.getAttribute("value"), "Style code is not same as expected -->");
  }

  async verifyAtStyleDescription(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("StyleDescription"),
    // uIMapVehicle.vehicleBoatEntry.uIStyleDescriptionEdit.getAttribute("value"), "Style Description is not same as expected -->");
  }

  async verifyAtPlateST(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("PlateST"),
    // uIMapVehicle.vehicleBoatEntry.uIPlateSTEdit.getAttribute("value"), "Plate ST is not same as expected -->");
  }

  async getDateTimeFromGrid(): Promise<string> {
    // String dateTime = objectIdentification.manualIdentify.getGridCell(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable,BaseData.getVehicleModuleValue("PlateST"), "Date Time").getText();
    // return dateTime;
  }

  async clearVehicleNo(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIVinNumberEdit.click();
    // uIMapVehicle.vehicleBoatEntry.uIVinNumberEdit.clear();
  }

  async clearYear(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIYearEdit.clear();
  }

  async clearMake(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIMakeEdit.clear();
    // uIMapVehicle.vehicleBoatEntry.uIMakeEdit.sendKeys(Keys.TAB);
  }

  async clearModel(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIModelEdit.clear();
    // uIMapVehicle.vehicleBoatEntry.uIModelEdit.sendKeys(Keys.TAB);
  }

  async clearStyle(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uIStyleEdit.clear();
    // uIMapVehicle.vehicleBoatEntry.uIStyleEdit.sendKeys(Keys.TAB);
  }

  async setVehicleNoToJSONFile(testCaseId: string): Promise<void> {
    // try {
    // String vehicleNo = uIMapVehicle.vehicleBoatEntry.uIVehicleField
    // .getAttribute("value");
    // System.out.println(vehicleNo);
    // BaseData.writeJson(testCaseId, "VehicleNo", vehicleNo);
    // } catch (Exception e) {
    // e.printStackTrace(); // Catch-all for unexpected exceptions like NullPointerException
    // WebDriverWait wait = new WebDriverWait(Playback.driver, Duration.ofSeconds(30));
    // wait.until(ExpectedConditions.visibilityOf(uIMapVehicle.vehicleBoatEntry.uIVehicleField));
  }

  async switchToLeadsTab(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.uILeadsTab.click();
    // objectIdentification.windowHandle.switchToFrame("frmAddressLead.aspx");
  }

}

export class VehicleBoatEntryMainTabPage {
  readonly page: Page;
  readonly plateNumberEdit: Locator;
  readonly stateComboBox: Locator;
  readonly plateOnlyCheckBox: Locator;
  readonly plateExpMonthEdit: Locator;
  readonly plateExpYearEdit: Locator;
  readonly statusComboBox: Locator;
  readonly color1ComboBox: Locator;
  readonly color2ComboBox: Locator;
  readonly plateTypeComboBox: Locator;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly nameTypeEdit: Locator;
  readonly nameTypeIDEdit: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly mainTabResultTable: Locator;
  readonly registrationNumberEdit: Locator;
  readonly nameActivityComboBox: Locator;
  readonly nameInfoIcon: Locator;
  readonly address: Locator;
  readonly plateAndST: Locator;

  constructor(page: Page) {
    this.page = page;
    this.plateNumberEdit = page.locator('#tabPropVeh_tmpl0_UsrHistory1_txtPlateNbr');
    this.stateComboBox = page.locator('#tabPropVeh_tmpl0_UsrHistory1_cddState_DropDown');
    this.plateOnlyCheckBox = page.locator('#tabPropVeh_tmpl0_UsrHistory1_chkPlateOnly');
    this.plateExpMonthEdit = page.locator('#tabPropVeh_tmpl0_UsrHistory1_txtPlateExpMonth');
    this.plateExpYearEdit = page.locator('#tabPropVeh_tmpl0_UsrHistory1_txtPlateExpyear');
    this.statusComboBox = page.locator('#tabPropVeh_tmpl0_UsrHistory1_cddPlateStatus_DropDown');
    this.color1ComboBox = page.locator('#tabPropVeh_tmpl0_UsrHistory1_cddColor1_DropDown');
    this.color2ComboBox = page.locator('#tabPropVeh_tmpl0_UsrHistory1_cddColor2_DropDown');
    this.plateTypeComboBox = page.locator('#tabPropVeh_tmpl0_UsrHistory1_cddPlateType_DropDown');
    this.lastNameEdit = page.locator('#tabPropVeh_tmpl0_UsrHistory1_nmcIncident_LastName');
    this.firstNameEdit = page.locator('#tabPropVeh_tmpl0_UsrHistory1_nmcIncident_FirstName');
    this.nameTypeEdit = page.locator('#tabPropVeh_tmpl0_UsrHistory1_nmcIncident_NameType');
    this.nameTypeIDEdit = page.locator('#tabPropVeh_tmpl0_UsrHistory1_nmcIncident_NameTypeID');
    this.addButton = page.locator('#tabPropVeh_tmpl0_UsrHistory1_imgAddName');
    this.clearButton = page.locator("//input[@id=\'tabPropVeh_tmpl0_UsrHistory1_imgClearName\']");
    this.mainTabResultTable = page.locator('#tabPropVeh_tmpl0_UsrHistory1_grdHistory');
    this.registrationNumberEdit = page.locator('#tabPropVeh_tmpl0_UsrHistory1_txtPlateNbr');
    this.nameActivityComboBox = page.locator('#tabVehicle_tmpl0_usrVehicleOrBoatMain1_cddNameActivity_DropDown');
    this.nameInfoIcon = page.locator("//input[@id=\'tabPropVeh_tmpl0_UsrHistory1_nmcIncident_imgSrch\']");
    this.address = page.locator('#tabPropVeh_tmpl0_UsrHistory1_txtAddress');
    this.plateAndST = page.locator('#tabPropVeh_tmpl0_UsrHistory1_lblPlateNbr');
  }

  async doubleClickAtAssocNoUsingCallNo(): Promise<void> {
    // Actions doubleClick = new Actions(Playback.driver);
    // doubleClick.doubleClick(objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable,
    // BaseData.getVehicleModuleValue("CallNo")));
    // doubleClick = null;
    // Playback.gridLoadThreadWait();
  }

  async doubleClickAtAssocNoUsingCallNo(CallNo: string): Promise<void> {
    // Actions doubleClick = new Actions(Playback.driver);
    // doubleClick.doubleClick(objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable, CallNo));
  }

  async verifyAtPlateAndStateInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("PlateST"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable,
    // BaseData.getVehicleModuleValue("PlateST"))
    // .getText());
  }

  async verifyAssociationAsIncident(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable,
    // "Association", rowIndex)
    // .contains("Incident"));
  }

  async verifyAssociationAsPermit(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable,
    // "Association", rowIndex)
    // .contains("Permit"));
  }

  async verifyAssocNoinGrid(permitNo: string, rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable,
    // "Assoc#", rowIndex)
    // .contains(permitNo));
  }

  async verifyAssociationAsModified(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable,
    // "Association", rowIndex)
    // .contains("Modified"), "Verify Modified shows in Grid");
  }

  async verifyAtAssocCallNo(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable,
    // "Assoc#", rowIndex)
    // .contains(BaseData.getVehicleModuleValue("CallNo")));
  }

  async verifyAtRegistrationAndState(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateNumberEdit.click();
    // Playback.controlReadyThreadWait();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("RegistrationNo"),
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateNumberEdit.getAttribute("value"));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("State"),
    // objectIdentification.manualIdentify.getDropDownSelectedItem(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIStateComboBox));
  }

  async enterAtRegistrationNo(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIRegistrationNumberEdit
    // .sendKeys(BaseData.getVehicleModuleValue("RegistrationNo"));
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIRegistrationNumberEdit.sendKeys(Keys.TAB);
  }

  async selectStateAsWI(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIStateComboBox, "WI - Wisconsin");
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIStateComboBox.sendKeys(Keys.TAB);
  }

  async selectAtState(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIStateComboBox.click();
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIStateComboBox,
    // BaseData.getVehicleModuleValue("State"));
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIStateComboBox.click();
  }

  async selectAtState(i: number): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIStateComboBox.click();
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIStateComboBox,
    // BaseData.getVehicleModuleValue("State" + i));
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIStateComboBox.click();
  }

  async enterPlateExpireMonthAndYear(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateExpMonthEdit.sendKeys("10");
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateExpYearEdit.sendKeys("2022");
  }

  async selectStatusAsActive(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIStatusComboBox, "Active");
  }

  async selectColors(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIColor1ComboBox);
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIColor2ComboBox);
  }

  async selectAtColor1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIColor1ComboBox,
    // BaseData.getVehicleModuleValue("Color1"));
  }

  async enterAtName(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uILastNameEdit
    // .sendKeys(BaseData.getVehicleModuleValue("LastName"));
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIFirstNameEdit
    // .sendKeys(BaseData.getVehicleModuleValue("FirstName"));
  }

  async enterNameID(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uINameTypeEdit.sendKeys("A");
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uINameTypeIDEdit.sendKeys("40");
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uINameTypeIDEdit.sendKeys(Keys.TAB);
  }

  async enterName(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uILastNameEdit.sendKeys("a");
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIFirstNameEdit.sendKeys(Keys.TAB);
  }

  async selectAtName(): Promise<void> {
    // // Names.NameSearchHelpWindow.SelectNameByLastNameAndFirstName();
  }

  async clickAddButton(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIAddButton.click();
    // Playback.controlReadyThreadWait();
  }

  async selectPlateType(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateTypeComboBox);
  }

  async enterAtPlateNumber(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateNumberEdit
    // .sendKeys(BaseData.getVehicleModuleValue("PlateNumber"));
  }

  async enterAtPlateNumber(i: number): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateNumberEdit
    // .sendKeys(BaseData.getVehicleModuleValue("PlateNumber" + i));
  }

  async selectAtNameActivity(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uINameActivityComboBox,
    // BaseData.getVehicleModuleValue("NameActivity"));
  }

  async selectNameActivity(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uINameActivityComboBox);
  }

  async clickNameInfoIcon(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uINameInfoIcon.click();
    // Playback.controlReadyThreadWait();
  }

  async clickAtNameinGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable,
    // BaseData.getVehicleModuleValue("Name"));
    // Playback.controlReadyThreadWait();
  }

  async verifyPlateNoIsNull(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("",
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateNumberEdit.getAttribute("value"));
  }

  async verifyAssociationAsTransfer(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable,
    // "Association", rowIndex)
    // .contains("Transfer"), "Verify Transfer shows in Grid");
  }

  async selectAtStatus(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIStatusComboBox,
    // BaseData.getVehicleModuleValue("Status"));
  }

  async verifyPlateAndStateIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateNumberEdit.isDisplayed());
    // String value = uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateNumberEdit
    // .getAttribute("value");
    // System.out.println(value);
    // verify.ExpectedValueIsFalse(value.isEmpty());
  }

  async verifyAtPlateAndState1(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateNumberEdit.click();
    // Playback.controlReadyThreadWait();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("PlateNo"),
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateNumberEdit.getAttribute("value"));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("State"),
    // objectIdentification.manualIdentify.getDropDownSelectedItem(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIStateComboBox));
  }

  async verifyAtName(): Promise<void> {
    // String lastName = uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uILastNameEdit
    // .getAttribute("value");
    // String firstName = uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIFirstNameEdit
    // .getAttribute("value");
    // verify.ExpectedValueIsTrue(lastName.contains(BaseData.getVehicleModuleValue("LastName")));
    // verify.ExpectedValueIsTrue(firstName.contains(BaseData.getVehicleModuleValue("FirstName")));
  }

  async verifyAtName1(): Promise<void> {
    // String lastName = uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uILastNameEdit
    // .getAttribute("value");
    // String firstName = uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIFirstNameEdit
    // .getAttribute("value");
    // verify.ExpectedValueIsTrue(lastName.contains(BaseData.getVehicleModuleValue("LastName1")));
    // verify.ExpectedValueIsTrue(firstName.contains(BaseData.getVehicleModuleValue("FirstName1")));
  }

  async selectAtColor2(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIColor2ComboBox,
    // BaseData.getVehicleModuleValue("Color2"));
  }

  async verifyAtNameActivity(): Promise<void> {
    // String nameAct = objectIdentification.manualIdentify.getDropDownSelectedItem(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uINameActivityComboBox);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("NameActivity"), nameAct);
  }

  async selectAtPlateType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateTypeComboBox,
    // BaseData.getVehicleModuleValue("PlateType"));
  }

  async verifyAtPlateTypeDropdown(): Promise<void> {
    // String dropDwonSelectedItem = objectIdentification.manualIdentify
    // .getDropDwonSelectedItem(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateTypeComboBox);
    // verify.ExpectedValueIsTrue(dropDwonSelectedItem.contains(BaseData.getVehicleModuleValue("PlateType")));
  }

  async selectAtPlateType1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateTypeComboBox,
    // BaseData.getVehicleModuleValue("PlateType1"));
  }

  async clickRowByAtAssociationInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable,
    // BaseData.getVehicleModuleValue("Association"));
  }

  async clickClearButton(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIClearButton.click();
  }

  async enterAtNameID(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uINameTypeEdit
    // .sendKeys(BaseData.getVehicleModuleValue("NameID").substring(0, 1));
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uINameTypeIDEdit
    // .sendKeys(BaseData.getVehicleModuleValue("NameID").substring(2));
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uINameTypeIDEdit.sendKeys(Keys.TAB);
  }

  async enterAtNameID(i: number): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uINameTypeEdit
    // .sendKeys(BaseData.getVehicleModuleValue("NameID" + i).substring(0, 1));
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uINameTypeIDEdit
    // .sendKeys(BaseData.getVehicleModuleValue("NameID" + i).substring(2));
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uINameTypeIDEdit.sendKeys(Keys.TAB);
  }

  async verifyAtNameInGrid(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable,
    // BaseData.getVehicleModuleValue("Name"));
    // verify.ExpectedValueIsTrue(
    // gridRowByCellInnerText.getText().contains(BaseData.getVehicleModuleValue("Name")));
  }

  async verifyAtActivityInGrid(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable,
    // BaseData.getVehicleModuleValue("Activity"));
    // verify.ExpectedValueIsTrue(
    // gridRowByCellInnerText.getText().contains(BaseData.getVehicleModuleValue("Activity")));
  }

  async verifyAtAddressInGrid(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable,
    // BaseData.getVehicleModuleValue("Address"));
    // verify.ExpectedValueIsTrue(
    // gridRowByCellInnerText.getText().contains(BaseData.getVehicleModuleValue("Address")));
  }

  async verifyNameIDIsNull(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("",
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uINameTypeEdit.getAttribute("value"));
    // verify.ExpectedPropertyValueIsEqual("",
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uINameTypeIDEdit.getAttribute("value"));
  }

  async verifyAddressIsNull(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("",
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIAddress.getAttribute("value"));
  }

  async verifyPlateAndStateIsMandatory(): Promise<void> {
    // String color = "rgba(153, 0, 0, 1)";
    // String cssValue = uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateAndST.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(color, cssValue);
  }

  async verifyPlateAndStateIsNotMandatory(): Promise<void> {
    // String color = "rgba(0, 0, 0, 1)";
    // String cssValue = uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateAndST.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(color, cssValue);
  }

  async enterPlateNoAsSpecialChar(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateNumberEdit.sendKeys("!?@#$%^&*");
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateNumberEdit.sendKeys(Keys.TAB);
  }

  async verifyAtPlateNo(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("PlateNo"),
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateNumberEdit.getAttribute("value"));
  }

  async clearPlateNo(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateNumberEdit.click();
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateNumberEdit.clear();
  }

  async getName(): Promise<string> {
    // String frstname = uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIFirstNameEdit
    // .getAttribute("value");
    // String lastname = uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uILastNameEdit
    // .getAttribute("value");
    // String name = lastname + "," + frstname;
    // System.out.println("owner name -->" + name);
    // return name;
  }

  async clickRowByAtPlateSTInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable,
    // BaseData.getVehicleModuleValue("PlateST"));
  }

  async verifyAtNameId(): Promise<void> {
    // String NameType = uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uINameTypeEdit
    // .getAttribute("value");
    // String NameTypeID = uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uINameTypeIDEdit
    // .getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("NameID"), NameType + "-" + NameTypeID);
  }

  async enterAtRegistrationNo(i: number): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIRegistrationNumberEdit
    // .sendKeys(BaseData.getVehicleModuleValue("RegistrationNo" + i));
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIRegistrationNumberEdit.sendKeys(Keys.TAB);
  }

  async checkPlateOnlyCheckBox(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateOnlyCheckBox.click();
  }

  async verifyAtPlateInGrid(): Promise<void> {
    // String plateSt = objectIdentification.manualIdentify.getGridCell(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable, BaseData.getVehicleModuleValue("PlateST")).getText();
    // verify.ExpectedPropertyValueIsEqual (BaseData.getVehicleModuleValue("PlateST"),plateSt);
  }

  async verifyAtDateTimeInGridByPlateST(dateTime: string): Promise<void> {
    // String dateTimeInGrid = objectIdentification.manualIdentify.getGridCell(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable,BaseData.getVehicleModuleValue("PlateST"), "Date Time").getText();
    // verify.ExpectedPropertyValueIsEqual(dateTimeInGrid, dateTime, "Date time is not same as expected -->");
  }

  async readColorOne(): Promise<string> {
    // String colorOne = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIColor1ComboBox);
    // return colorOne;
  }

  async readColorTwo(): Promise<string> {
    // String colorTwo = objectIdentification.manualIdentify.getDropDwonSelectedItem(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIColor2ComboBox);
    // return colorTwo;
  }

  async clickPlateNumber(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIPlateNumberEdit
    // .clear();
  }

  async verifyAtAssocCallNoByUsingAssociation(callNumber: string): Promise<void> {
    // String callNo = objectIdentification.manualIdentify.getGridCell(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable,  BaseData.getVehicleModuleValue("Association"), "Assoc#").getText();
    // verify.ExpectedPropertyValueIsEqual(callNumber,callNo,"Call no ");
  }

  async verifyAtAssociationInGrid(jsonIndex: number): Promise<void> {
    // String association = objectIdentification.manualIdentify.getGridCell(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable, BaseData.getNamesModuleValue("Association"+jsonIndex), "Association").getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Association"+jsonIndex), association,"Association is not same as expected -->");
  }

  async verifyAtAssocInGrid(vehicleNo: string): Promise<void> {
    // String assoc = objectIdentification.manualIdentify.getGridCell(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable,  vehicleNo).getText();
    // verify.ExpectedPropertyValueIsEqual(vehicleNo, assoc,"Assoc value is not same as expected -->");
  }

  async verifyAssocInGridUsingJSONFile(testCaseId: string): Promise<void> {
    // String assocNo = BaseData.readJson(testCaseId, "CrashNumber");
    // String assoc = objectIdentification.manualIdentify.getGridCell(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable,  assocNo).getText();
    // verify.ExpectedPropertyValueIsEqual(assocNo, assoc,"Assoc value is not same as expected -->");
  }

  async verifyAtAssocNotInGrid(i: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryMainTab.uIMainTabResultTable, "Assoc#");
    // verify.ExpectedValueIsFalse(gridTableColumnValues.contains(BaseData.getVehicleModuleValue("CallNo"+i)));
  }

}

export class VehicleBoatEntryFlagTabPage {
  readonly page: Page;
  readonly enterDateEdit: Locator;
  readonly expiredDateEdit: Locator;
  readonly enteredByEdit: Locator;
  readonly flagComboBox: Locator;
  readonly commentsEdit: Locator;
  readonly addButton: Locator;
  readonly clerButton: Locator;
  readonly flagTabResultTable: Locator;
  readonly expireTimeDownArrow: Locator;

  constructor(page: Page) {
    this.page = page;
    this.enterDateEdit = page.locator('#tabPropVeh_tmpl1_UsrFlags1_dtmEntered_Date_KPIDttmCtrl');
    this.expiredDateEdit = page.locator('#tabPropVeh_tmpl1_UsrFlags1_dtmExpire_Date_KPIDttmCtrl');
    this.enteredByEdit = page.locator('#tabPropVeh_tmpl1_UsrFlags1_lupOff_CodeValue');
    this.flagComboBox = page.locator('#tabPropVeh_tmpl1_UsrFlags1_cddFlag_DropDown');
    this.commentsEdit = page.locator('#tabPropVeh_tmpl1_UsrFlags1_txtFlagDesc');
    this.addButton = page.locator('#tabPropVeh_tmpl1_UsrFlags1_cmdAddFlag');
    this.clerButton = page.locator('#tabPropVeh_tmpl1_UsrFlags1_cmdClearFlag');
    this.flagTabResultTable = page.locator('#tabPropVeh_tmpl1_UsrFlags1_grdFlag');
    this.expireTimeDownArrow = page.locator("(//input[@class=\'textboxdatetime igte_BlueThemeEditInContainer\'])[2]");
  }

  async enterDateEntered(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIEnterDateEdit.click();
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIEnterDateEdit.sendKeys(Keys.TAB);
  }

  async enterEnteredBy(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIEnteredByEdit.sendKeys("Auto");
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIEnteredByEdit.sendKeys(Keys.TAB);
  }

  async enterPreviousDateEntered(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIEnterDateEdit
    // .sendKeys(Randomized.getPreviousDateByMonth(1));
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIEnterDateEdit.sendKeys(Keys.TAB);
  }

  async enterFutureDateEntered(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIEnterDateEdit
    // .sendKeys(Randomized.getFutureDateByMonth(1));
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIEnterDateEdit.sendKeys(Keys.TAB);
  }

  async selectAtFlag(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIFlagComboBox,
    // BaseData.getVehicleModuleValue("Flags"));
  }

  async selectAtFlag1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIFlagComboBox,
    // BaseData.getVehicleModuleValue("Flags1"));
  }

  async selectFlag(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIFlagComboBox);
  }

  async enterComments(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uICommentsEdit.sendKeys("Automation Team Work");
  }

  async clickAddButton(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIAddButton.click();
  }

  async clickClearButton(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIClerButton.click();
  }

  async verifyDateAsCurrentDateInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate(),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIFlagTabResultTable, "Date",
    // rowIndex));
  }

  async clickCommentIconInGrid(rowIndex: number): Promise<void> {
    // WebElement comment = objectIdentification.manualIdentify.getGridCell(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIFlagTabResultTable, "Comments", rowIndex);
    // comment.click();
  }

  async verifyAtFlagInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Flags"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIFlagTabResultTable, "Flags",
    // rowIndex));
  }

  async verifyAtFlag1InGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Flags1"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIFlagTabResultTable, "Flags",
    // rowIndex));
  }

  async verifyFutureDateAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1036) Future Date not allowed");
  }

  async verifyDuplicationAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1019) Duplication Of Data Found");
  }

  async enterPreviousDateAsExpiryDate(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIExpiredDateEdit
    // .sendKeys(Randomized.getPreviousDate(1, "MM/dd/yyyy"));
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIExpiredDateEdit.sendKeys(Keys.TAB);
  }

  async verifyEffectiveDateTimeMandatory(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(6040) Effective Date/Time is Mandatory");
  }

  async selectAtFlag2(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIFlagComboBox,
    // BaseData.getVehicleModuleValue("Flags2"));
  }

  async verifyAtFlag2InGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Flags2"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIFlagTabResultTable, "Flags",
    // rowIndex));
  }

  async taboutEffectiveDateAndTime(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIEnterDateEdit.click();
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIEnterDateEdit.sendKeys(Keys.TAB);
  }

  async selectAtFlagsInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIFlagTabResultTable,
    // BaseData.getVehicleModuleValue("Flags"));
  }

  async verifyAtEffectiveDateTimeInGrid(): Promise<void> {
    // String currentDate = randomized.getCurrentDate("MM/dd/yy");
    // String currentTime = randomized.getCurrentTime().substring(0, 4);
    // System.out.println(currentDate + " " + currentTime);
    // String DateTime = objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIFlagTabResultTable,
    // BaseData.getVehicleModuleValue("Flags"), "Effective Date/Time")
    // .getText().substring(0, 13);
    // verify.ExpectedPropertyValueIsEqual(currentDate + " " + currentTime, DateTime);
  }

  async verifyAtEnteredByInGrid(): Promise<void> {
    // String gridCell = objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIFlagTabResultTable,
    // BaseData.getVehicleModuleValue("EnteredBy"))
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("EnteredBy"), gridCell);
  }

  async verifyAtExpireDateTimeInGrid(): Promise<void> {
    // String previousDate = Randomized.getPreviousDate(1, "MM/dd/yy");
    // String currentTime = randomized.getCurrentTime().substring(0, 4);
    // System.out.println(previousDate + " " + currentTime);
    // String DateTime = objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIFlagTabResultTable,
    // BaseData.getVehicleModuleValue("Flags"), "Expire Date/Time")
    // .getText().substring(0, 13);
    // verify.ExpectedPropertyValueIsEqual(previousDate + " " + currentTime, DateTime);
  }

  async verifyCommentsInGrid(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIFlagTabResultTable, 0, 11);
    // gridCell.click();
    // //			popup.acknowledge.okWithExpectedContainMessage("Comment"+ "Automation Team Work");
  }

  async ClickExpireTimeDownArrow(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.vehicleBoatEntryFlagTab.uIExpireTimeDownArrow
    // .sendKeys(randomized.getCurrentTime());
  }

}

export class VehicleBoatEntryAttachmentsTabPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickRefershButton(): Promise<void> {
    // Playback.driver.findElement(By.id("cmdRefresh")).click();
  }

}

export class VehicleBoatSearchPage {
  readonly page: Page;
  readonly searchButton: Locator;
  readonly refreshButton: Locator;
  readonly addVehicleButton: Locator;
  readonly addBoatButton: Locator;
  readonly resetButton: Locator;
  readonly backButton: Locator;
  readonly vehicleTab: Locator;
  readonly boatTab: Locator;
  readonly vehicleBoatSearchResultTable: Locator;
  readonly selectIncidentVehicle: Locator;
  readonly vehicleBoatSearchGrIDTable: Locator;
  readonly plateEdit: Locator;
  readonly stateComboBox: Locator;
  readonly vehicleNumberEdit: Locator;
  readonly incidentActivityInput: Locator;
  readonly incidentActivityDropdown: Locator;
  readonly boatNoEdit: Locator;
  readonly fromDatedit: Locator;
  readonly toDatedit: Locator;
  readonly toTimedit: Locator;
  readonly flagRadDropdownArrow: Locator;
  readonly flagRadDropdownTray: Locator;
  readonly showAllCheckBox: Locator;
  readonly clickNextButton: Locator;
  readonly vehicleBoatActivityRadControlDropdown: Locator;
  readonly plateTypeDropDown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchButton = page.locator("//span[text()=\'Search\']");
    this.refreshButton = page.locator("(//span[contains(text(),\'Refresh\')])");
    this.addVehicleButton = page.locator("(//span[contains(text(),\'Add Vehicle\')])");
    this.addBoatButton = page.locator("(//span[contains(text(),\'Add Boat\')])");
    this.resetButton = page.locator("(//span[contains(text(),\'Reset\')])");
    this.backButton = page.locator("(//span[contains(text(),\'Back\')])");
    this.vehicleTab = page.locator("//span[text()=\'Vehicle\']");
    this.boatTab = page.locator("(//div[@ID=\'tabVehBoat\']//span[contains(text(),\'Boat\')])");
    this.vehicleBoatSearchResultTable = page.locator('#grdVehBoatSrch');
    this.selectIncidentVehicle = page.locator("(//span[contains(text(),\'Select IncIDent Vehicle\')])");
    this.vehicleBoatSearchGrIDTable = page.locator('#frmPropVehSrch_Id');
    this.plateEdit = page.locator('#tabVehBoat_tmpl0_UsrVeh1_txtPlateNbr');
    this.stateComboBox = page.locator('#tabVehBoat_tmpl0_UsrVeh1_cddState_DropDown');
    this.vehicleNumberEdit = page.locator('#tabVehBoat_tmpl0_UsrVeh1_txtVehNbr');
    this.incidentActivityInput = page.locator('#radIncidenActivity_Input');
    this.incidentActivityDropdown = page.locator('#radIncidenActivity_DropDown');
    this.boatNoEdit = page.locator('#tabVehBoat_tmpl1_UsrBoat1_txtBoatNbr');
    this.fromDatedit = page.locator('#tabVehBoat_tmpl0_UsrVeh1_dtmDateRangeFromDttm_Date_KPIDttmCtrl');
    this.toDatedit = page.locator('#tabVehBoat_tmpl0_UsrVeh1_dtmDateRangeToDttm_Date_KPIDttmCtrl');
    this.toTimedit = page.locator("//table[@id=\'tabVehBoat_tmpl0_UsrVeh1_dtmDateRangeToDttm_Time\']//td//img[@alt=\'Spin Up\']");
    this.flagRadDropdownArrow = page.locator('#tabVehBoat_tmpl0_UsrVeh1_radFlag_Arrow');
    this.flagRadDropdownTray = page.locator('#tabVehBoat_tmpl0_UsrVeh1_radFlag_DropDown');
    this.showAllCheckBox = page.locator('#tabVehBoat_tmpl0_UsrVeh1_chkShowAll');
    this.clickNextButton = page.locator('#grdVehBoatSrch_ctl00_lnkbtnNext');
    this.vehicleBoatActivityRadControlDropdown = page.locator('#radIncidenActivity_Input');
    this.plateTypeDropDown = page.locator('#tabVehBoat_tmpl0_UsrVeh1_cddPlateType_DropDown');
  }

  async clickSearch(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.uISearchButton.click();
    // Playback.pageLoadThreadWait();
    // Playback.pageLoadThreadWait();
  }

  async clickRefresh(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.uIRefreshButton.click();
  }

  async clickBack(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.uIBackButton.click();
  }

  async clickAddVehicle(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.uIAddVehicleButton.click();
  }

  async clickAddBoat(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.uIAddBoatButton.click();
  }

  async clickVehicleTab(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.uIVehicleTab.click();
  }

  async clickBoatTab(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.uIBoatTab.click();
  }

  async verifyAtVehicleNo(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("V-" + BaseData.getVehicleModuleValue("VehicleNo"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, "Vehicle#", rowIndex));
  }

  async verifyVehicleNoInGrid(vno: string): Promise<void> {
    // String txt = objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, vno, "Vehicle#")
    // .getText();
    // System.out.println("Vehicle#---->" + txt);
    // verify.ExpectedValueIsTrue(txt.equals(vno));
  }

  async clickRowAtVehicleNo(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // "V-" + BaseData.getVehicleModuleValue("VehicleNo"));
  }

  async enterAtPlate(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.uIPlateEdit.sendKeys(BaseData.getVehicleModuleValue("Plate"));
  }

  async getPlateID(): Promise<void> {
    // Playback.testContext.setAttribute("plateID",
    // uIMapVehicle.vehicleBoatSearch.uIPlateEdit.getAttribute("value"));
  }

  async enterPlate(platID: string): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.uIPlateEdit.clear();
    // Playback.threadWait();
    // uIMapVehicle.vehicleBoatSearch.uIPlateEdit.sendKeys(platID);
  }

  async selectAtState(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapVehicle.vehicleBoatSearch.uIStateComboBox,
    // BaseData.getVehicleModuleValue("State"));
  }

  async clickRowAtPlateNo(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // BaseData.getVehicleModuleValue("PlateNo"));
  }

  async verifyFlagIconInSearchscreen(rowIndex: number): Promise<void> {
    // WebElement SystemCheckBox = objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, "Flags", rowIndex)
    // .findElement(By.tagName("img"));
    // verify.ExpectedValueIsTrue(SystemCheckBox.getAttribute("title").contains("Flags"));
  }

  async clickFlagIconInSearchScreen(rowIndex: number): Promise<void> {
    // WebElement Flag = objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, "Flags", rowIndex);
    // Flag.findElement(By.tagName("img")).click();
  }

  async enterAtYear(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.boatTab.uIBoatYearFromEdit.sendKeys(BaseData.getVehicleModuleValue("Year"));
  }

  async verifyAtBoatHullNo(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("BoatHullNo"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, "Boat Hull#", rowIndex));
  }

  async verifyAtYear(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Year"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, "Year", rowIndex));
  }

  async clickRowAtBoatHullNo(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // BaseData.getVehicleModuleValue("BoatHullNo"));
  }

  async selectAtVehicleNo(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // BaseData.getVehicleModuleValue("VehicleNo"));
  }

  async selectAtVehicleBoat(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // BaseData.getVehicleModuleValue("VehicleNo"));
  }

  async clickSelectIncidentVehicle(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.uISelectIncidentVehicle.click();
  }

  async clickRowAtVinNo(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // BaseData.getVehicleModuleValue("VinNo"));
    // Playback.pageLoadThreadWait();
  }

  async clickRowAtVinNo1(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // BaseData.getVehicleModuleValue("VinNo1"));
  }

  async verifyNoRecordFoundAcknowledgeMessage(): Promise<void> {
    // if (Playback.browserType.equals("Chrome")) {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
    // } else
    // popup.acknowledge.okWithExpectedMessage(" 1011 - No Record Found");
  }

  async verifyUsingAtVinNoRowRed(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // BaseData.getVehicleModuleValue("VinNo"))
    // .getAttribute("class").contains("gridrowclr_Red"));
    // Playback.gridLoadThreadWait();
  }

  async verifyUsingVinNo1RowBlackColor(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // BaseData.getVehicleModuleValue("VinNo1"))
    // .getCssValue("color").contains("0, 0, 0, 1"));
  }

  async verifyAtPlateStateInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("StatePlate"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, "State-Plate", rowIndex));
  }

  async verifyAtPlate(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("State-Plate"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, "Make", rowIndex));
  }

  async enterAtVehicle1(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.uIVehicleNumberEdit
    // .sendKeys(BaseData.getVehicleModuleValue("VehicleNo").substring(2));
  }

  async verifyIncidentActivityFieldDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapVehicle.vehicleBoatSearch.uIIncidentActivityInput.isDisplayed());
  }

  async selectAtIncidentActivity(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapVehicle.vehicleBoatSearch.uIIncidentActivityInput.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect(
    // uIMapVehicle.vehicleBoatSearch.uIIncidentActivityDropdown,
    // BaseData.getVehicleModuleValue("IncidentActivity"));
  }

  async verifyRecordsListedInGrid(): Promise<void> {
    // int count = objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable);
    // verify.ExpectedValueIsTrue(count > 0);
  }

  async enterAtBoatNo(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.uIBoatNoEdit.sendKeys(BaseData.getVehicleModuleValue("BoatNo"));
  }

  async selectRowByAtBoatNoInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // "B-" + BaseData.getVehicleModuleValue("BoatNo"));
  }

  async selectRowByAtBoatNo1InGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // "B-" + BaseData.getVehicleModuleValue("BoatNo1"));
  }

  async verifyAtTypeUsingBoatNoInGrid(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // "B-" + BaseData.getVehicleModuleValue("BoatNo"), "Type");
    // verify.ExpectedValueIsTrue(gridCell.getText().contains(BaseData.getVehicleModuleValue("Type")));
  }

  async clickReset(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.uIResetButton.click();
  }

  async verifyAtVehicleNoDisplaysVehicleRecords(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, "Vehicle#");
    // for (String value : gridTableColumnValues) {
    // verify.ExpectedValueIsTrue(value.contains("V-"));
  }

  async verifyAtType1UsingVehicleNoInGrid(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // "V-" + BaseData.getVehicleModuleValue("VehicleNo"), "Type");
    // verify.ExpectedValueIsTrue(gridCell.getText().contains(BaseData.getVehicleModuleValue("Type1")));
  }

  async verifyAtType1UsingVehicleNo1InGrid(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // "V-" + BaseData.getVehicleModuleValue("VehicleNo1"), "Type");
    // verify.ExpectedValueIsTrue(gridCell.getText().contains(BaseData.getVehicleModuleValue("Type1")));
  }

  async verifyAtBoatNoDisplaysBoatRecords(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, "Boat#");
    // for (String value : gridTableColumnValues) {
    // verify.ExpectedValueIsTrue(value.contains("B-"));
  }

  async clickRowAtVehicleNo1(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // "V-" + BaseData.getVehicleModuleValue("VehicleNo1"));
  }

  async verifyAtTypeUsingBoatNo1InGrid(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // "B-" + BaseData.getVehicleModuleValue("BoatNo1"), "Type");
    // verify.ExpectedValueIsTrue(gridCell.getText().contains(BaseData.getVehicleModuleValue("Type")));
  }

  async verifyUsingAtVehicleNoRowRed(): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // "V-" + BaseData.getVehicleModuleValue("VehicleNo"))
    // .getAttribute("class").contains("gridrowclr_Red"));
  }

  async verifyUsingAtBoatNoRowRed(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // BaseData.getVehicleModuleValue("BoatNo"))
    // .getAttribute("class").contains("gridrowclr_Red"));
  }

  async clickRowAtBoatNo(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // BaseData.getVehicleModuleValue("BoatNo"));
  }

  async verifyUsingAtHullNoRowRed(): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // BaseData.getVehicleModuleValue("BoatHullNo"))
    // .getAttribute("class").contains("gridrowclr_Red"));
    // Playback.gridLoadThreadWait();
  }

  async verifyUsingHullNo1RowBlackColor(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // BaseData.getVehicleModuleValue("BoatHullNo1"))
    // .getCssValue("color").contains("0, 0, 0, 1"));
  }

  async enterToDateTimeAsCurrentDateTime(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.uIToDatedit.sendKeys(randomized.getCurrentDate());
    // uIMapVehicle.vehicleBoatSearch.uIToDatedit.sendKeys(Keys.TAB);
    // uIMapVehicle.vehicleBoatSearch.uIToTimedit.click();
  }

  async verifyActiveVehilceNoInGrid(vehicleNo: string, rowIndex: number): Promise<void> {
    // String gridCellInnerText = objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, "Vehicle#", rowIndex);
    // verify.ExpectedValueIsTrue(gridCellInnerText.contains(vehicleNo));
  }

  async verifyAtMakeInGrid(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // BaseData.getVehicleModuleValue("Make"));
    // verify.ExpectedValueIsTrue(
    // gridRowByCellInnerText.getText().contains(BaseData.getVehicleModuleValue("MakeDescription")));
  }

  async verifyAtModelInGrid(rowIndex: number): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, "Model", rowIndex);
    // verify.ExpectedPropertyValueIsEqual(gridCell.getText(), BaseData.getVehicleModuleValue("ModelDescription"));
  }

  async verifyAtVinNoInGrid(rowIndex: number): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, "VIN#", rowIndex);
    // verify.ExpectedPropertyValueIsEqual(gridCell.getText(), BaseData.getVehicleModuleValue("VinNo"));
  }

  async verifyFlagDropdownAsRadicalDropdown(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.uIFlagRadDropdownArrow.click();
    // String attribute = uIMapVehicle.vehicleBoatSearch.uIFlagRadDropdownTray.getAttribute("class");
    // verify.ExpectedValueIsTrue(attribute.contains("RadComboBoxDropDown"));
    // uIMapVehicle.vehicleBoatSearch.uIFlagRadDropdownArrow.click();
  }

  async selectAtFlag(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // uIMapVehicle.vehicleBoatSearch.uIFlagRadDropdownArrow.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect(
    // uIMapVehicle.vehicleBoatSearch.uIFlagRadDropdownTray, BaseData.getVehicleModuleValue("Flag"));
    // uIMapVehicle.vehicleBoatSearch.uIFlagRadDropdownArrow.click();
  }

  async selectGridRow(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow();
  }

  async RandomdoubleClickOnAllColumn(): Promise<void> {
    // List<WebElement> Displayedcell = new ArrayList<WebElement>();
    // List<WebElement> rowsCollection = objectIdentification.manualIdentify
    // .getGridTableRowsCollection(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable);
    // for (WebElement row : rowsCollection) {
    // if (row.getAttribute("class").contains("igg_BlueThemeActiveRow")) {
    // List<WebElement> cells = row.findElements(By.tagName("td"));
    // for (WebElement cell : cells) {
    // if (cell.isDisplayed() == true) {
    // Displayedcell.add(cell);
    // for (WebElement c : Displayedcell) {
    // Playback.actionDriver.doubleClick(c).build().perform();
    // objectIdentification.windowHandle.switchToWindow("Vehicle/Boat Entry");
    // Playback.driver.close();
    // objectIdentification.windowHandle.switchToWindow("Vehicle/Boat Entry");
    // Playback.driver.close();
    // objectIdentification.windowHandle.switchToMainWindow();
    // objectIdentification.windowHandle.switchToMainWindowScreenTab("Property/frmPropVehSrch.aspx");
    // try {
    // c.sendKeys("12345");
    // String text = c.getText();
    // verify.ExpectedValueIsTrue(text.contains("12345"));
    // } catch (Error e) {
    // System.out.println("Element is non Editable");
  }

  async clickRandomColumn(): Promise<void> {
    // WebElement gridHeaderTableRow = objectIdentification.manualIdentify
    // .getGridHeaderTableRow(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable);
    // List<WebElement> rowsCollection = objectIdentification.manualIdentify
    // .getGridTableRowsCollection(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable);
    // List<WebElement> findElements = gridHeaderTableRow.findElements(By.tagName("th"));
    // List<String> Displayedcell = new ArrayList<String>();
    // String ColumnHeaderValue = null;
    // int idxValue = 0;
    // for (WebElement column : findElements) {
    // boolean res = true;
    // while (res) {
    // if (column.isDisplayed()) {
    // ColumnHeaderValue = column.getText();
    // System.out.println(ColumnHeaderValue);
    // Displayedcell.add(ColumnHeaderValue);
    // System.out.println(Displayedcell.get(0) + "25");
    // idxValue = objectIdentification.manualIdentify.getGridColumnIndex(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, Displayedcell.get(0));
    // for (WebElement item : rowsCollection) {
    // List<WebElement> rowCells = item.findElements(By.tagName("td"));
    // WebElement uICell = rowCells.get(idxValue);
    // uICell.click();
    // res = false;
    // break;
  }

  async verifyAllVehicleNoInGrid(): Promise<void> {
    // List<String> gridTableColumnCollection = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, "Vehicle#");
    // System.out.println(gridTableColumnCollection);
    // for (String element : gridTableColumnCollection) {
    // String element1 = element;
    // boolean blank = element1.isBlank();
  }

  async selectShowAllCheckBox(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.uIShowAllCheckBox.click();
  }

  async clickNextButton(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.uIClickNextButton.click();
  }

  async selectRandomRowByColumnName(columnName: string): Promise<void> {
    // List<WebElement> gridTableColumnCells = objectIdentification.manualIdentify
    // .getGridTableColumnCells(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, columnName);
    // WebElement RandomCell = gridTableColumnCells.get(Randomized.getRandomNumber(gridTableColumnCells.size()));
    // System.out.println(RandomCell.getText());
    // RandomCell.click();
  }

  async verifyStateAndPlateDisappearFromGrid(): Promise<boolean> {
    // List<String> gridTableColumnCollection = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, "State-Plate");
    // int i = 0;
    // boolean loop = true;
    // boolean blank1 = false;
    // while (loop) {
    // for (String element : gridTableColumnCollection) {
    // i++;
    // blank1 = element.isBlank();
    // System.out.println(element);
    // if (blank1 == true) {
    // if (i == 1) {
    // objectIdentification.manualIdentify.selectGridRowByIndex(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, i - 1);
    // break;
    // int count = i - 2;
    // String listValue = gridTableColumnCollection.get(count);
    // objectIdentification.windowHandle.switchToMainWindowScreenTab("Property/frmPropVehSrch.aspx");
    // System.out.println(listValue);
    // Playback.driver.findElement(By.xpath("(//div[@id='pnlSearchResults']//tr//td[text()='"
    // + listValue + "']/..)/following-sibling::tr")).click();
    // if (objectIdentification.windowHandle.windowExist("Vehicle/Boat Entry")) {
    // loop = false;
    // break;
    // loop = false;
    // break;
    // return blank1;
  }

  async verifyVehicleNoDisappearFromGrid(): Promise<void> {
    // List<String> gridTableColumnCollection = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, "Vehicle#");
    // boolean empty = gridTableColumnCollection.isEmpty();
  }

  async verifyNullValueInGrid(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, "State-Plate");
    // for (String values : gridTableColumnValues) {
    // System.out.println(values);
    // int length = values.length();
    // System.out.println(length);
    // if (values.isBlank()) {
    // objectIdentification.manualIdentify.getGridCell(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, "", "State-Plate").click();
    // // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // // values);
    // System.out.println("Empty value is clicked");
    // Playback.pageLoadThreadWait();
    // switchToVehicleBoatEntry();
    // System.out.println("Boat Entry opened");
  }

  async verifyAtVehicleBoatActivity(): Promise<void> {
    // List<String> dropDownValues = objectIdentification.manualIdentify
    // .getDropDownValues(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatActivityRadControlDropdown);
    // verify.ExpectedValueIsTrue(dropDownValues.contains(BaseData.getVehicleModuleValue("value")));
  }

  async selectAtVehicleInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchGrIDTable,
    // BaseData.getVehicleModuleValue("Vehicle"));
  }

  async selectAtStatePlateInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable,
    // BaseData.getVehicleModuleValue("StatePlate"));
  }

  async enterFromDateAsPreviousDate(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.uIFromDatedit.click();
    // uIMapVehicle.vehicleBoatSearch.uIFromDatedit.sendKeys("12/19/2023");
    // uIMapVehicle.vehicleBoatSearch.uIFromDatedit.sendKeys(Keys.TAB);
  }

  async enterToDateAsPreviousDate(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.uIToDatedit.click();
    // uIMapVehicle.vehicleBoatSearch.uIToDatedit.sendKeys("12/19/2023");
    // uIMapVehicle.vehicleBoatSearch.uIToDatedit.sendKeys(Keys.TAB);
  }

  async verifyVehicleNoNotListedInGrid(vno: string): Promise<void> {
    // List<String> vehicle = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, "Vehicle#");
    // verify.ExpectedValueIsTrue(!vehicle.contains(vno));
  }

  async verifyBoatNoInGrid(bno: string): Promise<void> {
    // String txt = objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, bno, "Boat#").getText();
    // System.out.println("Boat#---->" + txt);
    // verify.ExpectedValueIsTrue(txt.equals(bno));
  }

  async verifyAtBoatNoInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("B-" + BaseData.getVehicleModuleValue("BoatNo"),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, "Boat#", rowIndex));
  }

  async verifyBoatNoNotListedInGrid(bno: string): Promise<void> {
    // List<String> boat = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, "Boat#");
    // verify.ExpectedValueIsTrue(!boat.contains(bno));
  }

  async enterAtVehicle(vehicleNo: string): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.uIVehicleNumberEdit.sendKeys(vehicleNo);
    // uIMapVehicle.vehicleBoatSearch.uIVehicleNumberEdit.sendKeys(Keys.TAB);
  }

  async verifyAtCountInGrid(): Promise<void> {
    // int parseInt = Integer.parseInt(BaseData.getVehicleModuleValue("VehicleCount"));
    // int gridTableRowsCount = objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable);
    // verify.ExpectedIntergerValueIsEqualToActual(gridTableRowsCount, parseInt);
  }

  async verifyAtPlateStateInGrid(rowIndex: number, JSONkeyIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("StatePlate" + JSONkeyIndex),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchResultTable, "State-Plate", rowIndex));
  }

  async selectAtPlateType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapVehicle.vehicleBoatSearch.uIPlateTypeDropDown,
    // BaseData.getVehicleModuleValue("PlateType"));
  }

  async verifyAtTypeInGrid(): Promise<void> {
    // String Type = objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.vehicleBoatSearch.uIVehicleBoatSearchGrIDTable,
    // BaseData.getVehicleModuleValue("Type"))
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Type"), Type);
  }

  async verifyAtPlateType(i: number): Promise<void> {
    // String PlateType = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapVehicle.vehicleBoatSearch.uIPlateTypeDropDown);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("PlateType" + i), PlateType);
  }

  async enterAtVehicleUsingJSONFile(testCaseId: string): Promise<void> {
    // String vehicleNo = BaseData.readJson(testCaseId, "VehicleNo");
    // uIMapVehicle.vehicleBoatSearch.uIVehicleNumberEdit.sendKeys(vehicleNo);
  }

}

export class VehicleTabPage {
  readonly page: Page;
  readonly plateNumberEdit: Locator;
  readonly stateComboBox: Locator;
  readonly yearFromEdit: Locator;
  readonly yearToEdit: Locator;
  readonly vinEdit: Locator;
  readonly vehicleNumberEdit: Locator;
  readonly showAllCheckBox: Locator;
  readonly wTVNumberEdit: Locator;
  readonly callYearEdit: Locator;
  readonly callNumberEdit: Locator;
  readonly dateResetButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.plateNumberEdit = page.locator('#tabVehBoat_tmpl0_UsrVeh1_txtPlateNbr');
    this.stateComboBox = page.locator('#tabVehBoat_tmpl0_UsrVeh1_cddState_DropDown');
    this.yearFromEdit = page.locator('#tabVehBoat_tmpl0_UsrVeh1_txtVehicleYearFrom');
    this.yearToEdit = page.locator('#tabVehBoat_tmpl0_UsrVeh1_txtVehicleYearTo');
    this.vinEdit = page.locator('#tabVehBoat_tmpl0_UsrVeh1_txtVin');
    this.vehicleNumberEdit = page.locator('#tabVehBoat_tmpl0_UsrVeh1_txtVehNbr');
    this.showAllCheckBox = page.locator('#tabVehBoat_tmpl0_UsrVeh1_chkShowAll');
    this.wTVNumberEdit = page.locator('#tabVehBoat_tmpl0_UsrVeh1_txtWTVNo');
    this.callYearEdit = page.locator('#nbrCallNo_Year');
    this.callNumberEdit = page.locator('#nbrCallNo_Number');
    this.dateResetButton = page.locator('#tabVehBoat_tmpl0_UsrVeh1_imgClear');
  }

  async enterAtVehicleNo(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.vehicleTab.uIVehicleNumberEdit
    // .sendKeys(BaseData.getVehicleModuleValue("VehicleNo"));
  }

  async enterAtPlateNo(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.vehicleTab.uIPlateNumberEdit
    // .sendKeys(BaseData.getVehicleModuleValue("PlateNo").substring(0, 2));
    // uIMapVehicle.vehicleBoatSearch.vehicleTab.uIStateComboBox
    // .sendKeys(BaseData.getVehicleModuleValue("PlateNo").substring(3));
  }

  async enterAtVinNumber(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.vehicleTab.uIVinEdit.sendKeys(BaseData.getVehicleModuleValue("VinNo"));
  }

  async clickShowAllCheckBox(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.vehicleTab.uIShowAllCheckBox.click();
  }

  async enterAtPlate(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.vehicleTab.uIPlateNumberEdit
    // .sendKeys(BaseData.getVehicleModuleValue("Plate"));
  }

  async selectAtState(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.vehicleBoatSearch.vehicleTab.uIStateComboBox, BaseData.getVehicleModuleValue("State"));
    // uIMapVehicle.vehicleBoatSearch.vehicleTab.uIStateComboBox.sendKeys(Keys.TAB);
  }

  async enterAtCallNo(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.vehicleTab.uICallYearEdit
    // .sendKeys(BaseData.getVehicleModuleValue("CallNo").substring(0, 2));
    // uIMapVehicle.vehicleBoatSearch.vehicleTab.uICallNumberEdit.clear();
    // uIMapVehicle.vehicleBoatSearch.vehicleTab.uICallNumberEdit
    // .sendKeys(BaseData.getVehicleModuleValue("CallNo").substring(3));
    // uIMapVehicle.vehicleBoatSearch.vehicleTab.uICallNumberEdit.sendKeys(Keys.TAB);
    // Playback.waitForPageLoad();
  }

  async enterATWTVNumber(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.vehicleTab.uIWTVNumberEdit.sendKeys(BaseData.getVehicleModuleValue("WTVNo"));
  }

  async enterAtVehicleNumber(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.vehicleTab.uIVehicleNumberEdit
    // .sendKeys(BaseData.getVehicleModuleValue("VehicleNumber"));
  }

  async ClickDateReset(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.vehicleTab.uIDateResetButton.click();
  }

}

export class BoatTabPage {
  readonly page: Page;
  readonly registrationNumberEdit: Locator;
  readonly stateComboBox: Locator;
  readonly boatYearFromEdit: Locator;
  readonly boatYearToEdit: Locator;
  readonly boatHullNumberEdit: Locator;
  readonly flagDrodownArrow: Locator;
  readonly flagDrodownTray: Locator;
  readonly toDateEdit: Locator;
  readonly toTimeEdit: Locator;
  readonly fromDateEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.registrationNumberEdit = page.locator('#tabVehBoat_tmpl1_UsrBoat1_txtReg');
    this.stateComboBox = page.locator('#tabVehBoat_tmpl1_UsrBoat1_cddState_DropDown');
    this.boatYearFromEdit = page.locator('#tabVehBoat_tmpl1_UsrBoat1_txtBoatYearFrom');
    this.boatYearToEdit = page.locator('#tabVehBoat_tmpl1_UsrBoat1_txtBoatYearTo');
    this.boatHullNumberEdit = page.locator('#tabVehBoat_tmpl1_UsrBoat1_txtBoatHul');
    this.flagDrodownArrow = page.locator('#tabVehBoat_tmpl1_UsrBoat1_radFlag_Arrow');
    this.flagDrodownTray = page.locator('#tabVehBoat_tmpl1_UsrBoat1_radFlag_DropDown');
    this.toDateEdit = page.locator('#tabVehBoat_tmpl1_UsrBoat1_dtmDateRangeToDttm_Date_KPIDttmCtrl');
    this.toTimeEdit = page.locator("//table[@id=\'tabVehBoat_tmpl1_UsrBoat1_dtmDateRangeToDttm_Time\']//td//img[@alt=\'Spin Up\']");
    this.fromDateEdit = page.locator('#tabVehBoat_tmpl1_UsrBoat1_dtmDateRangeFromDttm_Date_KPIDttmCtrl');
  }

  async enterAtRegistration(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.boatTab.uIRegistrationNumberEdit.click();
    // uIMapVehicle.vehicleBoatSearch.boatTab.uIRegistrationNumberEdit
    // .sendKeys(BaseData.getVehicleModuleValue("RegistrationNo"));
  }

  async selectAtState(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.vehicleBoatSearch.boatTab.uIStateComboBox, BaseData.getVehicleModuleValue("State"));
  }

  async enterAtBoatHullNo(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.boatTab.uIBoatHullNumberEdit
    // .sendKeys(BaseData.getVehicleModuleValue("BoatHullNo"));
  }

  async enterAtBoatHullNo1(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.boatTab.uIBoatHullNumberEdit
    // .sendKeys(BaseData.getVehicleModuleValue("BoatHullNo1"));
  }

  async verifyFlagDropdownAsRadicalDropdown(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.boatTab.uIFlagDrodownArrow.click();
    // String attribute = uIMapVehicle.vehicleBoatSearch.boatTab.uIFlagDrodownTray.getAttribute("class");
    // verify.ExpectedValueIsTrue(attribute.contains("RadComboBoxDropDown"));
    // uIMapVehicle.vehicleBoatSearch.boatTab.uIFlagDrodownArrow.click();
  }

  async selectAtFlag(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // uIMapVehicle.vehicleBoatSearch.boatTab.uIFlagDrodownArrow.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect(
    // uIMapVehicle.vehicleBoatSearch.boatTab.uIFlagDrodownTray, BaseData.getVehicleModuleValue("Flag"));
    // uIMapVehicle.vehicleBoatSearch.boatTab.uIFlagDrodownArrow.click();
  }

  async enterToDateTimeAsCurrentDateTime(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.boatTab.uIToDateEdit.sendKeys(randomized.getCurrentDate());
    // uIMapVehicle.vehicleBoatSearch.boatTab.uIToDateEdit.sendKeys(Keys.TAB);
    // uIMapVehicle.vehicleBoatSearch.boatTab.uIToTimeEdit.click();
  }

  async enterFromDateAsPreviousDate(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.boatTab.uIFromDateEdit.click();
    // uIMapVehicle.vehicleBoatSearch.boatTab.uIFromDateEdit.sendKeys("08/27/2021");
    // uIMapVehicle.vehicleBoatSearch.boatTab.uIFromDateEdit.sendKeys(Keys.TAB);
  }

  async enterToDateAsPreviousDate(): Promise<void> {
    // uIMapVehicle.vehicleBoatSearch.boatTab.uIToDateEdit.click();
    // uIMapVehicle.vehicleBoatSearch.boatTab.uIToDateEdit.sendKeys("08/27/2021");
    // uIMapVehicle.vehicleBoatSearch.boatTab.uIToDateEdit.sendKeys(Keys.TAB);
  }

}

export class FleetSearchPage {
  readonly page: Page;
  readonly searchButton: Locator;
  readonly addNewButton: Locator;
  readonly resetButton: Locator;
  readonly backButton: Locator;
  readonly fleetIDComboBox: Locator;
  readonly makeEdit: Locator;
  readonly markedCheckbox: Locator;
  readonly modelEdit: Locator;
  readonly lupModelEdit: Locator;
  readonly yearEdit: Locator;
  readonly vinEdit: Locator;
  readonly pOEdit: Locator;
  readonly tagEdit: Locator;
  readonly vendorComboBox: Locator;
  readonly vendorReference: Locator;
  readonly resultTable: Locator;
  readonly fleetCodeEdit: Locator;
  readonly checkedInOnlyCheckbox: Locator;
  readonly checkedOutOnlyCheckbox: Locator;
  readonly showDueCheckbox: Locator;
  readonly includeInactiveCheckbox: Locator;
  readonly findDuplicatesLink: Locator;
  readonly trackHoursCheckBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchButton = page.locator("(//span[contains(text(),\'Search\')])");
    this.addNewButton = page.locator("(//span[contains(text(),\'Add New\')])");
    this.resetButton = page.locator("(//span[contains(text(),\'Reset\')])");
    this.backButton = page.locator("(//span[contains(text(),\'Back\')])");
    this.fleetIDComboBox = page.locator('#DDLFleet_DropDown');
    this.makeEdit = page.locator('#lupMake_CodeValue');
    this.markedCheckbox = page.locator('#chkIsMarked');
    this.modelEdit = page.locator('#txtModel');
    this.lupModelEdit = page.locator('#lupModel_CodeValue');
    this.yearEdit = page.locator('#txtVehYear');
    this.vinEdit = page.locator('#txtVIN');
    this.pOEdit = page.locator('#txtPONumber');
    this.tagEdit = page.locator('#txtTag');
    this.vendorComboBox = page.locator('#cddvendor');
    this.vendorReference = page.locator('#txtvendorref');
    this.resultTable = page.locator('#grdVehicleSrch');
    this.fleetCodeEdit = page.locator('#DDLFleet_CodeValue');
    this.checkedInOnlyCheckbox = page.locator('#ChkInOnly');
    this.checkedOutOnlyCheckbox = page.locator('#ChkOutOnly');
    this.showDueCheckbox = page.locator('#chkIsShowDue');
    this.includeInactiveCheckbox = page.locator('#chkIsInActive');
    this.findDuplicatesLink = page.locator("(//span[contains(text(),\'Find Duplicates\')])");
    this.trackHoursCheckBox = page.locator('#chkIsTrackhours');
  }

  async selectAtFleetId(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapVehicle.fleetSearch.uIFleetCodeEdit.sendKeys(BaseData.getVehicleModuleValue("FleetID"));
  }

  async enterAtTag(): Promise<void> {
    // uIMapVehicle.fleetSearch.uITagEdit.sendKeys(BaseData.getVehicleModuleValue("Tag"));
  }

  async enterAtMake(): Promise<void> {
    // uIMapVehicle.fleetSearch.uIMakeEdit.sendKeys(BaseData.getVehicleModuleValue("Make"));
    // uIMapVehicle.fleetSearch.uIMakeEdit.sendKeys(Keys.TAB);
  }

  async enterAtYear(): Promise<void> {
    // uIMapVehicle.fleetSearch.uIYearEdit.sendKeys(BaseData.getVehicleModuleValue("Year"));
  }

  async enterAtModel(): Promise<void> {
    // uIMapVehicle.fleetSearch.uILupModelEdit.sendKeys(BaseData.getVehicleModuleValue("Model"));
  }

  async enterAtVin(): Promise<void> {
    // uIMapVehicle.fleetSearch.uIVinEdit.sendKeys(BaseData.getVehicleModuleValue("VIN"));
  }

  async enterAtPO(): Promise<void> {
    // uIMapVehicle.fleetSearch.uIPOEdit.sendKeys(BaseData.getVehicleModuleValue("PO"));
  }

  async enterAtVendorName(): Promise<void> {
    // uIMapVehicle.fleetSearch.uIVendorComboBox.sendKeys("VendorName");
  }

  async enterAtVendorRef(): Promise<void> {
    // uIMapVehicle.fleetSearch.uIVendorReference.sendKeys(BaseData.getVehicleModuleValue("VendorRef"));
  }

  async clickSearchButton(): Promise<void> {
    // uIMapVehicle.fleetSearch.uISearchButton.click();
  }

  async clickAddNewButton(): Promise<void> {
    // uIMapVehicle.fleetSearch.uIAddNewButton.click();
  }

  async clickMarkedCheckbox(): Promise<void> {
    // uIMapVehicle.fleetSearch.uIMarkedCheckbox.click();
  }

  async selectRowByAtFleetId(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapVehicle.fleetSearch.uIResultTable,
    // BaseData.getVehicleModuleValue("FleetID"));
  }

  async selectRowByAtVendorRef(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapVehicle.fleetSearch.uIResultTable,
    // BaseData.getVehicleModuleValue("VendorRef"));
  }

  async verifyAtFleetId(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("FleetID"),
    // objectIdentification.manualIdentify.getGridCell(uIMapVehicle.fleetSearch.uIResultTable,
    // BaseData.getVehicleModuleValue("FleetID")).getText());
  }

  async verifyAtDescriptionByFleetID(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapVehicle.fleetSearch.uIResultTable,
    // BaseData.getVehicleModuleValue("FleetID"), "Description").getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Description"), text);
  }

  async verifyAtMakeDescriptionByFleetID(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapVehicle.fleetSearch.uIResultTable,
    // BaseData.getVehicleModuleValue("FleetID"), "Make").getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("MakeDescription"), text);
  }

  async verifyAtModelDescriptionByFleetID(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapVehicle.fleetSearch.uIResultTable,
    // BaseData.getVehicleModuleValue("FleetID"), "Model").getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("ModelDescription"), text);
  }

  async verifyAtYearByFleetID(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapVehicle.fleetSearch.uIResultTable,
    // BaseData.getVehicleModuleValue("FleetID"), "Year").getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Year"), text);
  }

  async verifyAtVinByFleetID(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridCell(uIMapVehicle.fleetSearch.uIResultTable,
    // BaseData.getVehicleModuleValue("FleetID"), "VIN#").getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("VinNo"), text);
  }

  async enterAtFleetId(): Promise<void> {
    // uIMapVehicle.fleetSearch.uIFleetCodeEdit.sendKeys(BaseData.getVehicleModuleValue("FleetID"));
    // uIMapVehicle.fleetSearch.uIFleetCodeEdit.sendKeys(Keys.TAB);
  }

  async clickCheckedInOnlyCheckbox(): Promise<void> {
    // uIMapVehicle.fleetSearch.uICheckedInOnlyCheckbox.click();
  }

  async clickBackButton(): Promise<void> {
    // uIMapVehicle.fleetSearch.uIBackButton.click();
  }

  async clickCheckedOutOnlyCheckbox(): Promise<void> {
    // uIMapVehicle.fleetSearch.uICheckedOutOnlyCheckbox.click();
  }

  async verifyValuesInCheckedColumnIsIn(): Promise<void> {
    // List<String> ColumnVal = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapVehicle.fleetSearch.uIResultTable, "Checked");
    // for (String ele : ColumnVal) {
    // verify.ExpectedValueIsTrue(ele.equals("In"));
  }

  async verifyValuesInCheckedColumnIsOut(): Promise<void> {
    // List<String> ColumnVal = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapVehicle.fleetSearch.uIResultTable, "Checked");
    // for (String ele : ColumnVal) {
    // verify.ExpectedValueIsTrue(ele.equals("Out"));
  }

  async selectRowByIndex(rowIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByIndex(uIMapVehicle.fleetSearch.uIResultTable, rowIndex);
  }

  async verifyOutOfServiceNotExistInPF(): Promise<void> {
    // List<WebElement> PFColumn = objectIdentification.manualIdentify
    // .getGridTableColumnCells(uIMapVehicle.fleetSearch.uIResultTable, "PF#");
    // for (WebElement pf : PFColumn) {
    // verify.ExpectedValueIsFalse(pf.getText().contains("Out-of-Service"));
  }

  async verifyOutOfServiceInCADUnit(): Promise<void> {
    // List<WebElement> CADColumn = objectIdentification.manualIdentify
    // .getGridTableColumnCells(uIMapVehicle.fleetSearch.uIResultTable, "CAD Unit#");
    // for (WebElement cadUnit : CADColumn) {
    // System.out.println(cadUnit.getText());
    // if (cadUnit.getText().contains("Out-of-Service")) {
    // verify.ExpectedValueIsTrue(cadUnit.getText().contains("Out-of-Service"));
    // break;
  }

  async clickRefreshButton(): Promise<void> {
    // uIMapVehicle.fleetSearch.uIResetButton.click();
    // Playback.controlReadyThreadWait();
  }

  async verifyAtDefUnitByFleetID(): Promise<void> {
    // WebElement fleet = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapVehicle.fleetSearch.uIResultTable, BaseData.getVehicleModuleValue("FleetID"));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("DefUnit"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.fleetSearch.uIResultTable, fleet, "Def Unit#").getText());
  }

  async clickShowDueCheckbox(): Promise<void> {
    // uIMapVehicle.fleetSearch.uIShowDueCheckbox.click();
  }

  async enterAtFleetId(i: number): Promise<void> {
    // uIMapVehicle.fleetSearch.uIFleetCodeEdit.sendKeys(BaseData.getVehicleModuleValue("FleetID" + i));
    // uIMapVehicle.fleetSearch.uIFleetCodeEdit.sendKeys(Keys.TAB);
  }

  async selectRowByAtFleetId(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapVehicle.fleetSearch.uIResultTable,
    // BaseData.getVehicleModuleValue("FleetID" + i));
  }

  async enterFleetId(fleetID: string): Promise<void> {
    // uIMapVehicle.fleetSearch.uIFleetCodeEdit.sendKeys(fleetID);
    // uIMapVehicle.fleetSearch.uIFleetCodeEdit.sendKeys(Keys.TAB);
  }

  async verifyCheckedOutOnlyCheckboxIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapVehicle.fleetSearch.uICheckedOutOnlyCheckbox.isDisplayed(),
    // "Checked Out Only chekbox is not displayed --> ");
  }

  async verifyCheckedInOnlyCheckboxIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapVehicle.fleetSearch.uICheckedInOnlyCheckbox.isDisplayed(),
    // "Checked In Only chekbox is not displayed --> ");
  }

  async verifyCheckedOutOnlyCheckboxIsSelected(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapVehicle.fleetSearch.uICheckedOutOnlyCheckbox.isSelected(),
    // "Checked Out Only chekbox is not selected --> ");
  }

  async verifyCheckedInOnlyCheckboxIsSelected(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapVehicle.fleetSearch.uICheckedInOnlyCheckbox.isSelected(),
    // "Checked In Only chekbox is not selected --> ");
  }

  async selectAtVendor(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapVehicle.fleetSearch.uIVendorComboBox,
    // BaseData.getVehicleModuleValue("Vendor"));
  }

  async verifyVendorDropdownIsNull(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("--", objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapVehicle.fleetSearch.uIVendorComboBox));
  }

  async verifyInactiveCodeAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1119) Warning â€“ Inactive code selected");
    // Playback.controlReadyThreadWait();
  }

  async clickInactiveCheckbox(): Promise<void> {
    // uIMapVehicle.fleetSearch.uIIncludeInactiveCheckbox.click();
  }

  async verifyAtRowAsGreyOut(): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(uIMapVehicle.fleetSearch.uIResultTable, BaseData.getInventoryModuleValue("FleetID"));
    // String Color =  gridRowByCellInnerText.getCssValue("color");
    // System.out.println(Color);
    // verify.ExpectedPropertyValueIsEqual(Color, "rgba(128, 128, 128, 1)");
  }

  async clickResetButton(): Promise<void> {
    // uIMapVehicle.fleetSearch.uIResetButton.click();
  }

  async verifyRowCountAsOne(): Promise<void> {
    // int gridTableRowsCount = objectIdentification.manualIdentify.getGridTableRowsCount(uIMapVehicle.fleetSearch.uIResultTable);
    // verify.ExpectedIntergerValueIsEqualToActual(gridTableRowsCount, 1);
  }

  async selectRandomGridRow(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectRandomGridRow(uIMapVehicle.fleetSearch.uIResultTable);
  }

  async verifyNoRecordsFoundAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
  }

  async clickFindDuplicates(): Promise<void> {
    // uIMapVehicle.fleetSearch.uIFindDuplicatesLink.click();
  }

  async verifyDuplicatesFleetIDInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.verifyDuplicatesAreListedInGridColumn(uIMapVehicle.fleetSearch.uIResultTable, "Fleet ID");
  }

  async clickTrackHoursCheckBox(): Promise<void> {
    // uIMapVehicle.fleetSearch.uITrackHoursCheckBox.click();
  }

}

export class FleetEntryPage {
  readonly page: Page;
  readonly fleetIDEdit: Locator;
  readonly describtionEdit: Locator;
  readonly makeEdit: Locator;
  readonly makeDescriptionEdit: Locator;
  readonly modelEdit: Locator;
  readonly makeLookupButton: Locator;
  readonly modelLookupButton: Locator;
  readonly yearEdit: Locator;
  readonly vinNumberEdit: Locator;
  readonly color1ComboBox: Locator;
  readonly color2ComboBox: Locator;
  readonly inactiveCheckBox: Locator;
  readonly outOfServiceCheckBox: Locator;
  readonly isFireCheckBox: Locator;
  readonly inactiveDateTime: Locator;
  readonly mainTab: Locator;
  readonly equipmentSuppliesTab: Locator;
  readonly maintenanceScheduleTab: Locator;
  readonly activityLogTab: Locator;
  readonly assignmentsTab: Locator;
  readonly notesTab: Locator;
  readonly attachmentsTab: Locator;
  readonly triggersTab: Locator;
  readonly saveButton: Locator;
  readonly saveCloseButton: Locator;
  readonly resetButton: Locator;
  readonly pictureImage: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly outOfServiceSince: Locator;
  readonly location: Locator;
  readonly locationDropdown: Locator;
  readonly dateFromEdit: Locator;
  readonly barcode: Locator;
  readonly historyTab: Locator;
  readonly saveAddNewIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fleetIDEdit = page.locator('#txtFleetID');
    this.describtionEdit = page.locator('#txtDesc');
    this.makeEdit = page.locator('#lupMake_CodeValue');
    this.makeDescriptionEdit = page.locator('#lupMake_CodeDescription');
    this.modelEdit = page.locator('#lupModel_CodeValue');
    this.makeLookupButton = page.locator('#lupMake_imgBtn');
    this.modelLookupButton = page.locator('#lupModel_imgBtn');
    this.yearEdit = page.locator('#txtVehYear');
    this.vinNumberEdit = page.locator('#txtVIN');
    this.color1ComboBox = page.locator('#cddColor1_DropDown');
    this.color2ComboBox = page.locator('#cddColor2_DropDown');
    this.inactiveCheckBox = page.locator('#chkIsActive');
    this.outOfServiceCheckBox = page.locator('#chkOutOfService');
    this.isFireCheckBox = page.locator('#chkIsFire');
    this.inactiveDateTime = page.locator('#txtInActiveDttm');
    this.mainTab = page.locator("//span[contains(text(),\'Main\')]");
    this.equipmentSuppliesTab = page.locator("//span[contains(text(),\'Equipment & Supplies\')]");
    this.maintenanceScheduleTab = page.locator("//span[contains(text(),\'Maintenance Schedule\')]");
    this.activityLogTab = page.locator("//span[contains(text(),\'Activity Log\')]");
    this.assignmentsTab = page.locator("//span[contains(text(),\'Assignments\')]");
    this.notesTab = page.locator("//span[contains(text(),\'Notes\')]");
    this.attachmentsTab = page.locator("//span[contains(text(),\'Attachments\')]");
    this.triggersTab = page.locator("//span[contains(text(),\'Triggers\')]");
    this.saveButton = page.locator('#cmdSave');
    this.saveCloseButton = page.locator('#cmdSaveNClose');
    this.resetButton = page.locator('#cmdRefresh');
    this.pictureImage = page.locator('#imgNameFrontView');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'status\']//b");
    this.outOfServiceSince = page.locator('#lblOutOfServiceSince');
    this.location = page.locator('#lblLocation');
    this.locationDropdown = page.locator('#cddLocation_DropDown');
    this.dateFromEdit = page.locator('#dttmOutOfService_Date_KPIDttmCtrl');
    this.barcode = page.locator('#cmdBarcode');
    this.historyTab = page.locator("//span[text()=\'History\']");
    this.saveAddNewIcon = page.locator('#cmdSaveNAddNew');
  }

  async clickMainTab(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIMainTab.click();
    // Playback.controlReadyThreadWait();
  }

  async clickEquipmentSuppliesTab(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIEquipmentSuppliesTab.click();
  }

  async clickActivityLogTab(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIActivityLogTab.click();
  }

  async clickAssignmentTab(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIAssignmentsTab.click();
  }

  async switchToNotesTab(): Promise<void> {
    // uIMapVehicle.fleetEntry.uINotesTab.click();
    // objectIdentification.windowHandle.switchToFrame("frmFleetNotes");
  }

  async clickNotesTab(): Promise<void> {
    // uIMapVehicle.fleetEntry.uINotesTab.click();
  }

  async clickAttachmentsTab(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIAttachmentsTab.click();
  }

  async clickTriggersTab(): Promise<void> {
    // uIMapVehicle.fleetEntry.uITriggersTab.click();
  }

  async clickMaintainenceScheduleTab(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIMaintenanceScheduleTab.click();
  }

  async enterAtFleetID(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIFleetIDEdit.sendKeys(BaseData.getVehicleModuleValue("FleetID"));
  }

  async enterAtDescription(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIDescribtionEdit.sendKeys(BaseData.getVehicleModuleValue("Description"));
  }

  async enterDescription(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIDescribtionEdit.sendKeys(Randomized.randomString(15));
  }

  async enterAtMake(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIMakeEdit.sendKeys(BaseData.getVehicleModuleValue("Make"));
    // uIMapVehicle.fleetEntry.uIMakeEdit.sendKeys(Keys.TAB);
  }

  async verify1051UpdatedDataExistsInMainTabAckMsg(): Promise<void> {
    // popup.acknowledge
    // .okWithExpectedMessage("(1051) Updated data exists in the Main Tab. You must save or reset.");
  }

  async enterAtModel(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIModelEdit.sendKeys(BaseData.getVehicleModuleValue("Model"));
  }

  async enterAtYear(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIYearEdit.sendKeys(BaseData.getVehicleModuleValue("Year"));
  }

  async enterAtVin(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIVinNumberEdit.sendKeys(BaseData.getVehicleModuleValue("VinNo"));
  }

  async selectAtColor(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIColor1ComboBox.click();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapVehicle.fleetEntry.uIColor1ComboBox,
    // BaseData.getVehicleModuleValue("Color"));
  }

  async clickSaveButton(): Promise<void> {
    // uIMapVehicle.fleetEntry.uISaveButton.click();
  }

  async selectInactiveCheckBox(): Promise<void> {
    // if (!uIMapVehicle.fleetEntry.uIInactiveCheckBox.isSelected()) {
    // uIMapVehicle.fleetEntry.uIInactiveCheckBox.click();
    // Playback.controlReadyThreadWait();
  }

  async verifyInactiveDateAsCurrentDate(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // String datetime = uIMapVehicle.fleetEntry.uIInactiveDateTime.getAttribute("value");
    // verify.ExpectedValueIsTrue(datetime.contains(Randomized.getCurrentDate("MM/dd/yy").substring(0, 8)));
  }

  async verifySaveFunctionalitiesDisabled(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // verify.ExpectedValueIsFalse(uIMapVehicle.fleetEntry.uISaveCloseButton.isEnabled());
    // verify.ExpectedValueIsFalse(uIMapVehicle.fleetEntry.uISaveButton.isEnabled());
  }

  async verifySaveFunctionalitiesEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapVehicle.fleetEntry.uISaveCloseButton.isEnabled());
    // verify.ExpectedValueIsTrue(uIMapVehicle.fleetEntry.uISaveButton.isEnabled());
  }

  async clickInactiveCheckbox(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIInactiveCheckBox.click();
  }

  async clickIsFireCheckbox(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIIsFireCheckBox.click();
  }

  async save(): Promise<void> {
    // uIMapVehicle.fleetEntry.uISaveButton.click();
    // Playback.pageLoadThreadWait();
    // popup.confirm.yes();
  }

  async saveNClose(): Promise<void> {
    // uIMapVehicle.fleetEntry.uISaveCloseButton.click();
    // popup.confirm.yes();
  }

  async close(): Promise<void> {
    // uIMapVehicle.fleetEntry.driver.close();
  }

  async verify3032EnterByAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(3032) Enter By");
  }

  async verify3032EnterPFAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(3032) Enter PF");
  }

  async verify3032EnterActionAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(3032) Enter Action");
  }

  async verify3032EnterStationAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(3032) Enter Station");
  }

  async verify1018RequiredEntriesAreMissingAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1018) Required Entries are Missing");
  }

  async clickMakeSearchIcon(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIMakeLookupButton.click();
  }

  async clickPictureImage(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIPictureImage.click();
  }

  async verify1002AdditionSuccessfulFooterMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
    // uIMapVehicle.fleetEntry.uIBottomLeftSideStatusBar.getText());
  }

  async verify1003UpdateSuccessfulFooterMessage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("1003 - Update Successful",
    // uIMapVehicle.fleetEntry.uIBottomLeftSideStatusBar.getText());
  }

  async enterFleetID(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIFleetIDEdit.sendKeys(randomized.enterRandomNumbers(4));
  }

  async selectMake(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIMakeLookupButton.click();
    // popup.switchToCodedSearch();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async enterModel(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIModelLookupButton.click();
    // popup.switchToCodedSearch();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async enterYear(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIYearEdit.sendKeys(Randomized.getCurrentYear());
  }

  async enterVin(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIVinNumberEdit.sendKeys(Randomized.enterRandomNumbers(3));
  }

}

export class FleetEntryMainTabPage {
  readonly page: Page;
  readonly commentsEdit: Locator;
  readonly lockableCheckBox: Locator;
  readonly tagNumberEdit: Locator;
  readonly storageLocationEdit: Locator;
  readonly storageLocationLookupButton: Locator;
  readonly storageLocationComboBox: Locator;
  readonly storageLocationArrow: Locator;
  readonly usageTypeComboBox: Locator;
  readonly fuelTypeComboBox: Locator;
  readonly vendorNameEdit: Locator;
  readonly vendorReferenceEdit: Locator;
  readonly pOEdit: Locator;
  readonly vendorNameLookupButton: Locator;
  readonly markedCheckBox: Locator;
  readonly trackHourCheckbox: Locator;
  readonly addButton: Locator;
  readonly lockableCheckbox: Locator;
  readonly storageLocationTable: Locator;
  readonly vendorNameLabel: Locator;
  readonly vendorNameDescription: Locator;
  readonly storageLocationLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.commentsEdit = page.locator('#tabVehicle_tmpl0_CtrlusrMain_txtComments');
    this.lockableCheckBox = page.locator('#tabVehicle_tmpl0_CtrlusrMain_chkLockable');
    this.tagNumberEdit = page.locator('#tabVehicle_tmpl0_CtrlusrMain_txtTag');
    this.storageLocationEdit = page.locator('#tabVehicle_tmpl0_CtrlusrMain_lupStoreLoc_CodeValue');
    this.storageLocationLookupButton = page.locator('#tabVehicle_tmpl0_CtrlusrMain_lupStoreLoc_imgBtn');
    this.storageLocationComboBox = page.locator('#tabVehicle_tmpl0_CtrlusrMain_lupStoreLoc_DropDown');
    this.storageLocationArrow = page.locator('#tabVehicle_tmpl0_CtrlusrMain_lupStoreLoc_Arrow');
    this.usageTypeComboBox = page.locator('#tabVehicle_tmpl0_CtrlusrMain_cddUsageType_DropDown');
    this.fuelTypeComboBox = page.locator('#tabVehicle_tmpl0_CtrlusrMain_cddFuelType_DropDown');
    this.vendorNameEdit = page.locator('#tabVehicle_tmpl0_CtrlusrMain_lupVName_CodeValue');
    this.vendorReferenceEdit = page.locator('#tabVehicle_tmpl0_CtrlusrMain_txtVendorRef');
    this.pOEdit = page.locator('#tabVehicle_tmpl0_CtrlusrMain_txtPONumber');
    this.vendorNameLookupButton = page.locator('#tabVehicle_tmpl0_CtrlusrMain_lupVName_imgBtn');
    this.markedCheckBox = page.locator('#tabVehicle_tmpl0_CtrlusrMain_chkMarked');
    this.trackHourCheckbox = page.locator('#tabVehicle_tmpl0_CtrlusrMain_chkTrack');
    this.addButton = page.locator('#tabVehicle_tmpl0_CtrlusrMain_imgAdd');
    this.lockableCheckbox = page.locator('#tabVehicle_tmpl0_CtrlusrMain_chkLockable');
    this.storageLocationTable = page.locator('#tabVehicle_tmpl0_CtrlusrMain_grdStorageLoc');
    this.vendorNameLabel = page.locator("//span[@id=\'tabVehicle_tmpl0_CtrlusrMain_lblVendor\']");
    this.vendorNameDescription = page.locator('#tabVehicle_tmpl0_CtrlusrMain_lupVName_CodeDescription');
    this.storageLocationLabel = page.locator('#tabVehicle_tmpl0_CtrlusrMain_lblLoc');
  }

  async enterAtComments(): Promise<void> {
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uICommentsEdit
    // .sendKeys(BaseData.getVehicleModuleValue("Comments"));
  }

  async selectLockableCheckBox(): Promise<void> {
    // if (!uIMapVehicle.fleetEntry.fleetEntryMainTab.uILockableCheckBox.isSelected())
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uILockableCheckBox.click();
  }

  async enterAtStorageLocation(): Promise<void> {
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationEdit
    // .sendKeys(BaseData.getVehicleModuleValue("StorageLocation"));
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationEdit.sendKeys(Keys.TAB);
  }

  async selectAtStorageLocation(): Promise<void> {
    // Playback.gridLoadThreadWait();
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationArrow.click();
    // Playback.gridLoadThreadWait();
    // Playback.gridLoadThreadWait();
    // objectIdentification.manualIdentify.selectRadControlDropDownValue(
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationComboBox,
    // BaseData.getVehicleModuleValue("StorageLocation"));
    // Playback.gridLoadThreadWait();
    // Playback.gridLoadThreadWait();
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationArrow.click();
  }

  async selectAtStorageLocation(i: number): Promise<void> {
    // Playback.gridLoadThreadWait();
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationArrow.click();
    // Playback.gridLoadThreadWait();
    // objectIdentification.manualIdentify.selectRadControlDropDownValue(
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationComboBox,
    // BaseData.getVehicleModuleValue("StorageLocation" + i));
    // Playback.gridLoadThreadWait();
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationArrow.click();
  }

  async selectStorageLocation(): Promise<void> {
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationArrow.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect(
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationComboBox, "Fleet 1");
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationArrow.click();
  }

  async clickAddButton(): Promise<void> {
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIAddButton.click();
  }

  async clickLockableCheckbox(): Promise<void> {
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uILockableCheckbox.click();
  }

  async enterAtTag(): Promise<void> {
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uITagNumberEdit
    // .sendKeys(BaseData.getVehicleModuleValue("Tag"));
  }

  async selectAtUsageType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIUsageTypeComboBox,
    // BaseData.getVehicleModuleValue("UsageType"));
  }

  async selectUsageType(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapVehicle.fleetEntry.fleetEntryMainTab.uIUsageTypeComboBox);
  }

  async clickMarkedCheckbox(): Promise<void> {
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIMarkedCheckBox.click();
  }

  async enterAtTagNo(): Promise<void> {
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uITagNumberEdit
    // .sendKeys(BaseData.getVehicleModuleValue("TagNo"));
  }

  async clickTrackHourCheckbox(): Promise<void> {
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uITrackHourCheckbox.click();
  }

  async selectAtFuelTye(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIFuelTypeComboBox,
    // BaseData.getVehicleModuleValue("FuelType"));
  }

  async enterAtVendorName(): Promise<void> {
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIVendorNameEdit
    // .sendKeys(BaseData.getVehicleModuleValue("VendorName"));
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIVendorNameEdit.sendKeys(Keys.TAB);
  }

  async enterAtVendorRef(): Promise<void> {
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIVendorReferenceEdit
    // .sendKeys(BaseData.getVehicleModuleValue("VendorRef"));
  }

  async enterAtPO(): Promise<void> {
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIPOEdit.sendKeys(BaseData.getVehicleModuleValue("PO"));
  }

  async verifyStorageLocationDropdownAsRadicalDropdown(): Promise<void> {
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationArrow.click();
    // String attribute = uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationComboBox
    // .getAttribute("class");
    // verify.ExpectedValueIsTrue(attribute.contains("RadComboBoxDropDown"));
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationArrow.click();
  }

  async selectStorageLocationAsCheckAll(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationArrow.click();
    // Playback.pageLoadThreadWait();
    // objectIdentification.manualIdentify.selectRadControlDropDownCheckAllSelect(
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationComboBox, "Check All");
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationArrow.click();
  }

  async verifyStorageLocationSNOAsAscendingOrder(): Promise<void> {
    // List<Integer> values = new ArrayList<>();
    // List<WebElement> gridTableColumnCells = objectIdentification.manualIdentify.getGridTableColumnCells(
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationTable, "SNo");
    // for (WebElement cell : gridTableColumnCells) {
    // String text = cell.getText();
    // values.add(Integer.parseInt(text));
    // System.out.println(values);
    // boolean ascending = true;
    // int i = 0;
    // int count = 1;
    // while (count < values.size()) {
    // if (values.get(i) < values.get(i + 1)) {
    // count++;
    // i++;
    // } else {
    // ascending = false;
    // System.out.println("List is not in ascending order");
    // verify.ExpectedValueIsTrue(ascending);
  }

  async verifyAtVendorNameAsMandatory(): Promise<void> {
    // String cssValue = uIMapVehicle.fleetEntry.fleetEntryMainTab.uIVendorNameLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(cssValue, "rgba(153, 0, 0, 1)");
  }

  async verifyAtVendorNameAsNonMandatory(): Promise<void> {
    // String cssValue = uIMapVehicle.fleetEntry.fleetEntryMainTab.uIVendorNameLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(cssValue, "rgba(0, 0, 0, 1)");
  }

  async verifyAtStorageLocationLabelAsMandatory(): Promise<void> {
    // String cssValue = uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(cssValue, BaseData.getVehicleModuleValue("Mandatory"));
  }

  async verifyAtStorageLocationLabelAsNonMandatory(): Promise<void> {
    // String cssValue = uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationLabel.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(cssValue, BaseData.getVehicleModuleValue("NonMandatory"));
  }

  async verifyTrackHourCheckboxChecked(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uITrackHourCheckbox.getAttribute("checked").equals("true"));
  }

}

export class MaintenanceScheduleTabPage {
  readonly page: Page;
  readonly serviceTypeComboBox: Locator;
  readonly performServiceButton: Locator;
  readonly periodComboBox: Locator;
  readonly milesEdit: Locator;
  readonly hoursEdit: Locator;
  readonly dateEdit: Locator;
  readonly atMilesEdit: Locator;
  readonly atHoursEdit: Locator;
  readonly propulsionEdit: Locator;
  readonly updateSuccessfulLable: Locator;
  readonly viewMillageLogButton: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly maintainenceScheduleTable: Locator;
  readonly updateButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.serviceTypeComboBox = page.locator('#tabVehicle_tmpl2_CtrlusrusrMaintenance_cddServiceType_DropDown');
    this.performServiceButton = page.locator('#tabVehicle_tmpl2_CtrlusrusrMaintenance_btnPrfSrv');
    this.periodComboBox = page.locator('#tabVehicle_tmpl2_CtrlusrusrMaintenance_cddPeriod_DropDown');
    this.milesEdit = page.locator('#tabVehicle_tmpl2_CtrlusrusrMaintenance_txtMiles');
    this.hoursEdit = page.locator('#tabVehicle_tmpl2_CtrlusrusrMaintenance_txtHour');
    this.dateEdit = page.locator('#tabVehicle_tmpl2_CtrlusrusrMaintenance_dtLastMainDt_KPIDttmCtrl');
    this.atMilesEdit = page.locator('#tabVehicle_tmpl2_CtrlusrusrMaintenance_txtLastMiles');
    this.atHoursEdit = page.locator('#tabVehicle_tmpl2_CtrlusrusrMaintenance_txtLastHour');
    this.propulsionEdit = page.locator('#lupModel_CodeValue');
    this.updateSuccessfulLable = page.locator("//b[text()=\'1003 - Update Successful\']");
    this.viewMillageLogButton = page.locator('#tabVehicle_tmpl2_CtrlusrusrMaintenance_btnView');
    this.addButton = page.locator('#tabVehicle_tmpl2_CtrlusrusrMaintenance_imgAdd');
    this.clearButton = page.locator('#tabVehicle_tmpl2_CtrlusrusrMaintenance_imgClear');
    this.maintainenceScheduleTable = page.locator('#tabVehicle_tmpl2_CtrlusrusrMaintenance_grdMaintenace');
    this.updateButton = page.locator('#tabVehicle_tmpl2_CtrlusrusrMaintenance_imgAdd');
  }

  async selectServiceType(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapVehicle.fleetEntry.maintenanceScheduleTab.uIServiceTypeComboBox);
  }

  async selectAtServiceType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.fleetEntry.maintenanceScheduleTab.uIServiceTypeComboBox,
    // BaseData.getVehicleModuleValue("ServiceType"));
    // uIMapVehicle.fleetEntry.maintenanceScheduleTab.uIServiceTypeComboBox.sendKeys(Keys.TAB);
  }

  async selectPeriodAs1Month(): Promise<void> {
    // uIMapVehicle.fleetEntry.maintenanceScheduleTab.uIPeriodComboBox.sendKeys("1 Month");
  }

  async selectPeriodAs3Month(): Promise<void> {
    // uIMapVehicle.fleetEntry.maintenanceScheduleTab.uIPeriodComboBox.sendKeys("3 Month");
  }

  async selectPeriodAs4Month(): Promise<void> {
    // uIMapVehicle.fleetEntry.maintenanceScheduleTab.uIPeriodComboBox.sendKeys("4 Month");
  }

  async selectPeriodAsYear(): Promise<void> {
    // uIMapVehicle.fleetEntry.maintenanceScheduleTab.uIPeriodComboBox.sendKeys("1 Year");
  }

  async enterAtMiles(): Promise<void> {
    // uIMapVehicle.fleetEntry.maintenanceScheduleTab.uIMilesEdit
    // .sendKeys(BaseData.getVehicleModuleValue("Miles"));
  }

  async enterAtHours(): Promise<void> {
    // uIMapVehicle.fleetEntry.maintenanceScheduleTab.uIHoursEdit
    // .sendKeys(BaseData.getVehicleModuleValue("Hours"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapVehicle.fleetEntry.maintenanceScheduleTab.uIAddButton.click();
  }

  async verifyNextDueDateAsCurrentDateOfFutureMonths(FutureMonth: number): Promise<void> {
    // WebElement NextDue = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapVehicle.fleetEntry.maintenanceScheduleTab.uIMaintainenceScheduleTable,
    // BaseData.getVehicleModuleValue("ServiceType"));
    // verify.ExpectedPropertyValueIsEqual(Randomized.getFutureDateByMonth(FutureMonth),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.fleetEntry.maintenanceScheduleTab.uIMaintainenceScheduleTable,
    // NextDue, "Next Due")
    // .getText());
  }

  async selectRowByAtServiceType(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.fleetEntry.maintenanceScheduleTab.uIMaintainenceScheduleTable,
    // BaseData.getVehicleModuleValue("ServiceType"));
  }

  async clickViewMileageLogButton(): Promise<void> {
    // uIMapVehicle.fleetEntry.maintenanceScheduleTab.uIViewMillageLogButton.click();
  }

  async enterDateAsCurrentDate(): Promise<void> {
    // uIMapVehicle.fleetEntry.maintenanceScheduleTab.uIDateEdit.sendKeys(Randomized.getCurrentDate());
  }

  async verifyServiceTypeInGrid(): Promise<void> {
    // String Service = objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapVehicle.fleetEntry.maintenanceScheduleTab.uIMaintainenceScheduleTable, "Service Type", 0);
    // System.out.println(Service);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("ServiceType"), Service);
  }

  async clickUpdateButton(): Promise<void> {
    // uIMapVehicle.fleetEntry.maintenanceScheduleTab.uIUpdateButton.click();
  }

}

export class EquipmentSuppliesTabPage {
  readonly page: Page;
  readonly addNewEquipmentOrSupplyItemButton: Locator;
  readonly performEquipmentServicesButton: Locator;
  readonly equipmentSuppliesTable: Locator;
  readonly expandCheckbox: Locator;
  readonly equipmentSuppliesInnerGridTable: Locator;
  readonly lengthEdit: Locator;
  readonly plateNumberEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewEquipmentOrSupplyItemButton = page.locator('#tabVehicle_tmpl1_CtrlusrEquipmentSupplies_cmdaddnewequipment');
    this.performEquipmentServicesButton = page.locator('#tabVehicle_tmpl1_CtrlusrEquipmentSupplies_cmdperform');
    this.equipmentSuppliesTable = page.locator("//div[@id=\'tabVehicle_tmpl1_CtrlusrEquipmentSupplies_grdequipment\']");
    this.expandCheckbox = page.locator('#tabVehicle_tmpl1_CtrlusrEquipmentSupplies_chkExpandAll');
    this.equipmentSuppliesInnerGridTable = page.locator("//div[@id=\'tabVehicle_tmpl1_CtrlusrEquipmentSupplies_grdequipment\']");
    this.lengthEdit = page.locator('#txtlength');
    this.plateNumberEdit = page.locator('#txtPlateST');
  }

  async clickAddNewEquipmentOrSupplyItemButton(): Promise<void> {
    // uIMapVehicle.fleetEntry.equipmentSuppliesTab.uIAddNewEquipmentOrSupplyItemButton.click();
  }

  async clickPerformEquipmentServiceButton(): Promise<void> {
    // uIMapVehicle.fleetEntry.equipmentSuppliesTab.uIPerformEquipmentServicesButton.click();
  }

  async verifyAtFleetLocationInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("FleetLocation"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.fleetEntry.equipmentSuppliesTab.uIEquipmentSuppliesTable,
    // BaseData.getVehicleModuleValue("FleetLocation"))
    // .getText());
  }

  async clickExpandCheckbox(): Promise<void> {
    // Playback.waitForControlReady();
    // uIMapVehicle.fleetEntry.equipmentSuppliesTab.uIExpandCheckbox.click();
    // Playback.pageLoadThreadWait();
  }

  async verifyAssertItemByItemDescriptionInGrid(): Promise<void> {
    // Playback.waitForPageLoad();
    // WebElement webElem = objectIdentification.manualIdentify.getGridCell(
    // uIMapVehicle.fleetEntry.equipmentSuppliesTab.uIEquipmentSuppliesInnerGridTable,
    // BaseData.getVehicleModuleValue("ItemDescription"));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("ItemDescription"),
    // webElem.getText());
  }

  async verifyAssertItemGridDisapeared(): Promise<void> {
    // boolean availability = objectIdentification.manualIdentify
    // .controlExist(uIMapVehicle.fleetEntry.equipmentSuppliesTab.uIEquipmentSuppliesInnerGridTable);
    // verify.ExpectedValueIsFalse(availability);
  }

  async verifyExpendableItemByAtLocationInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Location"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.fleetEntry.equipmentSuppliesTab.uIEquipmentSuppliesTable,
    // BaseData.getVehicleModuleValue("Location"))
    // .getText());
  }

  async verifyAtModelInGrid(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapVehicle.fleetEntry.equipmentSuppliesTab.uIEquipmentSuppliesInnerGridTable,
    // BaseData.getVehicleModuleValue("Model"));
    // Playback.controlReadyThreadWait();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Model"), gridCell.getText());
  }

  async verifyAtDateAcqAsCurrentDate(): Promise<void> {
    // //				String date = objectIdentification.manualIdentify.getGridCellInnerText(
    // //						 uIMapVehicle.fleetEntry.equipmentSuppliesTab.uIEquipmentSuppliesTable, "Date Acq", 0);
    // String date = objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.fleetEntry.equipmentSuppliesTab.uIEquipmentSuppliesTable,
    // BaseData.getVehicleModuleValue("Model"), "Date Acq")
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate("MM/dd/yy"), date);
    // System.out.println(date);
  }

  async verifyAtMakeColumnNameIsDisplayed(): Promise<void> {
    // String text = objectIdentification.manualIdentify.getGridHeaderColumnName(
    // uIMapVehicle.fleetEntry.equipmentSuppliesTab.uIEquipmentSuppliesTable, "Make").getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("ColumnName"), text);
  }

}

export class AssignmentsTabPage {
  readonly page: Page;
  readonly assignmentTable: Locator;
  readonly actionComboBox: Locator;
  readonly assignedDateEdit: Locator;
  readonly assignedTimeEdit: Locator;
  readonly byCodeEdit: Locator;
  readonly personnelRadioButton: Locator;
  readonly divisionRadioButton: Locator;
  readonly stationRadioButton: Locator;
  readonly pfEdit: Locator;
  readonly divisionComboBox: Locator;
  readonly sectionComboBox: Locator;
  readonly stationComboBox: Locator;
  readonly locationComboBox: Locator;
  readonly deleteIconGridButton: Locator;
  readonly dispositionDropdown: Locator;
  readonly submitButton: Locator;
  readonly actionButton: Locator;
  readonly historyGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.assignmentTable = page.locator('#tabVehicle_tmpl5_CtrlusrAssigned_grdAssignments');
    this.actionComboBox = page.locator('#tabVehicle_tmpl5_CtrlusrAssigned_cddAction');
    this.assignedDateEdit = page.locator('#tabVehicle_tmpl5_CtrlusrAssigned_dttmStatus_Date_KPIDttmCtrl');
    this.assignedTimeEdit = page.locator("//table[@id =\'tabVehicle_tmpl5_CtrlusrAssigned_dttmStatus_Time\']//input");
    this.byCodeEdit = page.locator('#tabVehicle_tmpl5_CtrlusrAssigned_lupASGMTPFCode_CodeValue');
    this.personnelRadioButton = page.locator('#tabVehicle_tmpl5_CtrlusrAssigned_radPersonal');
    this.divisionRadioButton = page.locator('#tabVehicle_tmpl5_CtrlusrAssigned_radDivision');
    this.stationRadioButton = page.locator('#tabVehicle_tmpl5_CtrlusrAssigned_radStation');
    this.pfEdit = page.locator('#tabVehicle_tmpl5_CtrlusrAssigned_lupEMPCode_CodeValue');
    this.divisionComboBox = page.locator('#tabVehicle_tmpl5_CtrlusrAssigned_cddDivision_DropDown');
    this.sectionComboBox = page.locator('#tabVehicle_tmpl5_CtrlusrAssigned_cddSection_DropDown');
    this.stationComboBox = page.locator('#tabVehicle_tmpl5_CtrlusrAssigned_cddStation_DropDown');
    this.locationComboBox = page.locator('#tabVehicle_tmpl5_CtrlusrAssigned_cddSLocation');
    this.deleteIconGridButton = page.locator("//div[@id=\'tabVehicle_tmpl5_CtrlusrAssigned_grdAssignments\']//td[@class=\'Delete_Icon_Style ig2d2816ff\']");
    this.dispositionDropdown = page.locator('#tabVehicle_tmpl5_CtrlusrAssigned_cdddisposition_DropDown');
    this.submitButton = page.locator('#tabVehicle_tmpl5_CtrlusrAssigned_btnAssign');
    this.actionButton = page.locator('#tabVehicle_tmpl5_CtrlusrAssigned_cmdAction');
    this.historyGrid = page.locator('#tabVehicle_tmpl5_CtrlusrAssigned_grdAssignment');
  }

  async verifyAtActionFromTable(rowIndex: number): Promise<void> {
    // String action = objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapVehicle.fleetEntry.assignmentsTab.uIAssignmentTable, "Action", rowIndex);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Action"), action);
  }

  async deleteGridRowByAction(): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerTextUsingContainsClass(
    // uIMapVehicle.fleetEntry.assignmentsTab.uIAssignmentTable,
    // BaseData.getVehicleModuleValue("Action"));
    // popup.confirm.yes();
  }

  async selectActionAsAssigned(): Promise<void> {
    // uIMapVehicle.fleetEntry.assignmentsTab.uIActionComboBox.sendKeys("Assigned");
    // uIMapVehicle.fleetEntry.assignmentsTab.uIActionComboBox.sendKeys(Keys.TAB);
  }

  async selectActionAsDisposition(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapVehicle.fleetEntry.assignmentsTab.uIActionComboBox, "Disposition");
    // // uIMapVehicle.fleetEntry.assignmentsTab.uIActionComboBox.sendKeys(Keys.TAB);
  }

  async selectAtAction(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.fleetEntry.assignmentsTab.uIActionComboBox,
    // BaseData.getVehicleModuleValue("Action"));
    // uIMapVehicle.fleetEntry.assignmentsTab.uIActionComboBox.sendKeys(Keys.TAB);
  }

  async selectActionAsReturned(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapVehicle.fleetEntry.assignmentsTab.uIActionComboBox, "Returned");
  }

  async tabOutAssignedDate(): Promise<void> {
    // uIMapVehicle.fleetEntry.assignmentsTab.uIAssignedDateEdit.click();
    // uIMapVehicle.fleetEntry.assignmentsTab.uIAssignedDateEdit.sendKeys(Keys.TAB);
    // uIMapVehicle.fleetEntry.assignmentsTab.uIAssignedTimeEdit.click();
    // Playback.controlReadyThreadWait();
  }

  async tabOutBy(): Promise<void> {
    // uIMapVehicle.fleetEntry.assignmentsTab.uIByCodeEdit.sendKeys(Keys.TAB);
  }

  async verifyCurrentDateAutoPopulatesInAssignedDate(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate(),
    // uIMapVehicle.fleetEntry.assignmentsTab.uIAssignedDateEdit.getAttribute("value"));
  }

  async verifyDefaultLoggedPfAutoPopulatesInByField(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getInventoryModuleValue("PFCode"),
    // uIMapVehicle.fleetEntry.assignmentsTab.uIByCodeEdit.getAttribute("value"));
  }

  async clickDivisionRadioButton(): Promise<void> {
    // uIMapVehicle.fleetEntry.assignmentsTab.uIDivisionRadioButton.click();
  }

  async clickStationRadioButton(): Promise<void> {
    // uIMapVehicle.fleetEntry.assignmentsTab.uIStationRadioButton.click();
  }

  async selectSection(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapVehicle.fleetEntry.assignmentsTab.uISectionComboBox);
  }

  async selectAtDivision(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.fleetEntry.assignmentsTab.uIDivisionComboBox,
    // BaseData.getVehicleModuleValue("Division"));
  }

  async selectAtStation(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.fleetEntry.assignmentsTab.uIStationComboBox,
    // BaseData.getVehicleModuleValue("Station"));
  }

  async enterAtPFCode(): Promise<void> {
    // uIMapVehicle.fleetEntry.assignmentsTab.uIPfEdit.sendKeys(BaseData.getVehicleModuleValue("PFCode"));
    // uIMapVehicle.fleetEntry.assignmentsTab.uIPfEdit.sendKeys(Keys.TAB);
  }

  async verifyDivisionStationRadioButtonDisabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(Boolean.parseBoolean(
    // uIMapVehicle.fleetEntry.assignmentsTab.uIDivisionRadioButton.getAttribute("disabled")));
    // verify.ExpectedValueIsTrue(Boolean.parseBoolean(
    // uIMapVehicle.fleetEntry.assignmentsTab.uIStationRadioButton.getAttribute("disabled")));
  }

  async ClickDeleteIconInGrid(): Promise<void> {
    // uIMapVehicle.fleetEntry.assignmentsTab.uIDeleteIconGridButton.click();
    // popup.confirm.yes();
  }

  async verifyActionFieldEnable(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapVehicle.fleetEntry.assignmentsTab.uIActionComboBox.isEnabled());
  }

  async verifyAssignedDateFieldEnable(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapVehicle.fleetEntry.assignmentsTab.uIAssignedDateEdit.isEnabled());
  }

  async verifyByFieldEnable(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapVehicle.fleetEntry.assignmentsTab.uIByCodeEdit.isEnabled());
  }

  async verifyPFFieldEnable(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapVehicle.fleetEntry.assignmentsTab.uIPfEdit.isEnabled());
  }

  async tabOutAssignedTime(): Promise<void> {
    // Robot robot = new Robot();
    // uIMapVehicle.fleetEntry.assignmentsTab.uIAssignedTimeEdit.click();
    // robot.keyPress(KeyEvent.VK_SHIFT);
    // robot.keyPress(KeyEvent.VK_TAB);
    // robot.keyRelease(KeyEvent.VK_TAB);
    // robot.keyRelease(KeyEvent.VK_SHIFT);
  }

  async selectDispositionAsDismantle(): Promise<void> {
    // boolean drop = uIMapVehicle.fleetEntry.assignmentsTab.uIDispositionDropdown.isDisplayed();
    // System.out.println(drop);
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.fleetEntry.assignmentsTab.uIDispositionDropdown, "Dismantle");
  }

  async selectAtDisposition(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.fleetEntry.assignmentsTab.uIDispositionDropdown,
    // BaseData.getInventoryModuleValue("Disposition"));
  }

  async clickSubmitButton(): Promise<void> {
    // uIMapVehicle.fleetEntry.assignmentsTab.uISubmitButton.click();
  }

  async clickActionButton(): Promise<void> {
    // uIMapVehicle.fleetEntry.assignmentsTab.uIActionButton.click();
    // Playback.controlReadyThreadWait();
  }

  async verifyAtStatusInGrid(rowIndex: number): Promise<void> {
    // String action = objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapVehicle.fleetEntry.assignmentsTab.uIHistoryGrid, "Status", rowIndex);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Status"), action);
  }

}

export class FleetEntryNotesTabPage {
  readonly page: Page;
  readonly updateDateEdit: Locator;
  readonly updateTimeEdit: Locator;
  readonly updatedByCodeEdit: Locator;
  readonly commentsTextView: Locator;
  readonly saveButton: Locator;
  readonly notesTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.updateDateEdit = page.locator('#dttmDate_Date_KPIDttmCtrl');
    this.updateTimeEdit = page.locator("//table[@ID =\'dttmDate_Time\']//input");
    this.updatedByCodeEdit = page.locator('#lupBy_CodeValue');
    this.commentsTextView = page.locator('#txtNotes');
    this.saveButton = page.locator('#cmdSave');
    this.notesTable = page.locator("//div[@class =\'HistoryComments\']");
  }

  async tabOutUpdatedDateTime(): Promise<void> {
    // uIMapVehicle.fleetEntry.fleetEntryNotesTab.uIUpdateDateEdit.sendKeys(Keys.TAB);
    // uIMapVehicle.fleetEntry.fleetEntryNotesTab.uIUpdateTimeEdit.sendKeys(Keys.TAB);
  }

  async verifyCurrentDateAutopopulatesInUpdatedDateField(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate(),
    // uIMapVehicle.fleetEntry.fleetEntryNotesTab.uIUpdateDateEdit.getAttribute("value"));
  }

  async save(): Promise<void> {
    // uIMapVehicle.fleetEntry.fleetEntryNotesTab.uISaveButton.click();
  }

  async enterComments(comments: string): Promise<void> {
    // uIMapVehicle.fleetEntry.fleetEntryNotesTab.uICommentsTextView
    // .sendKeys("Automation Entering the BaseData");
    // comments = uIMapVehicle.fleetEntry.fleetEntryNotesTab.uICommentsTextView.getAttribute("value");
    // Playback.setTestContextAttribute("comments", comments);
  }

  async verifyAddedInGrid(comments: string): Promise<void> {
    // String text = uIMapVehicle.fleetEntry.fleetEntryNotesTab.uINotesTable.getText();
    // verify.ExpectedPropertyValueIsEqual(comments, text);
  }

  async enterAtUpdatedBy(): Promise<void> {
    // uIMapVehicle.fleetEntry.fleetEntryNotesTab.uIUpdatedByCodeEdit
    // .sendKeys(BaseData.getVehicleModuleValue("UpdatedBy"));
    // uIMapVehicle.fleetEntry.fleetEntryNotesTab.uIUpdatedByCodeEdit.sendKeys(Keys.TAB);
  }

  async enterAtComments(): Promise<void> {
    // uIMapVehicle.fleetEntry.fleetEntryNotesTab.uICommentsTextView
    // .sendKeys(BaseData.getVehicleModuleValue("Comments"));
  }

  async verifyCommentsAsNull(): Promise<void> {
    // boolean commentblank = uIMapVehicle.fleetEntry.fleetEntryNotesTab.uICommentsTextView.getText()
    // .isBlank();
    // verify.ExpectedValueIsTrue(commentblank);
  }

  async verifyUpdatedByAsNull(): Promise<void> {
    // boolean UpdatedPfBlank = uIMapVehicle.fleetEntry.fleetEntryNotesTab.uIUpdatedByCodeEdit.getText()
    // .isBlank();
    // verify.ExpectedValueIsTrue(UpdatedPfBlank);
  }

  async verifyUpdatedDateAndTimeAsNull(): Promise<void> {
    // boolean Dateblank = uIMapVehicle.fleetEntry.fleetEntryNotesTab.uIUpdateDateEdit.getText().isBlank();
    // boolean Timeblank = uIMapVehicle.fleetEntry.fleetEntryNotesTab.uIUpdateTimeEdit.getText().isBlank();
    // verify.ExpectedValueIsTrue(Dateblank);
    // verify.ExpectedValueIsTrue(Timeblank);
  }

}

export class ActivityLogTabPage {
  readonly page: Page;
  readonly addNewActivityButton: Locator;
  readonly actityTypeDropdown: Locator;
  readonly searchGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewActivityButton = page.locator('#tabVehicle_tmpl3_CtrlusrDamageReports_cmdaddnew');
    this.actityTypeDropdown = page.locator('#tabVehicle_tmpl3_CtrlusrDamageReports_cddActivityType');
    this.searchGrid = page.locator('#tabVehicle_tmpl3_CtrlusrDamageReports_grdequipment');
  }

  async clickAddNewActivity(): Promise<void> {
    // uIMapVehicle.fleetEntry.activityLogTab.uIAddNewActivityButton.click();
  }

  async selectAtActivityType(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.fleetEntry.activityLogTab.uIActityTypeDropdown,
    // BaseData.getVehicleModuleValue("ActivityType" + i));
  }

  async verifyAtActivityTypeInGridBySubject(i: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getInventoryModuleValue("ActivityType" + i),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.fleetEntry.activityLogTab.uISearchGrid,
    // BaseData.getVehicleModuleValue("Subject" + i), "Activity Type")
    // .getText());
  }

  async verifyAtDateAsCurrentDateInGridByActivityType(i: number): Promise<void> {
    // String date = objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.fleetEntry.activityLogTab.uISearchGrid,
    // BaseData.getVehicleModuleValue("ActivityType" + i), "Date Time")
    // .getText();
    // verify.ExpectedValueIsTrue(date.contains(Randomized.getCurrentDate("MM/dd/yy")),
    // date + " is not contains in grid --> ");
  }

  async clickOutOfServiceCheckbox(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIOutOfServiceCheckBox.click();
  }

  async verifyOutOfServiceDateAsMandatory(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapVehicle.fleetEntry.uIOutOfServiceSince.getAttribute("style").contains("maroon"));
    // verify.ExpectedValueIsTrue(uIMapVehicle.fleetEntry.uILocation.getAttribute("style").contains("maroon"));
  }

  async selectAtLocation(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapVehicle.fleetEntry.uILocationDropdown,
    // BaseData.getVehicleModuleValue("Location"));
  }

  async verifyOutOfServiceAsCurrentDate(): Promise<void> {
    // System.out.println(uIMapVehicle.fleetEntry.uIDateFromEdit.getAttribute("value"));
    // verify.ExpectedPropertyValueIsEqual(uIMapVehicle.fleetEntry.uIDateFromEdit.getAttribute("value"),
    // Randomized.getCurrentDate());
  }

  async selectAtStorageLocation(): Promise<void> {
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationArrow.click();
    // Playback.controlReadyThreadWait();
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.selectRadControlDropDownValue(
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationComboBox,
    // BaseData.getVehicleModuleValue("StorageLocation"));
    // Playback.controlReadyThreadWait();
    // Playback.controlReadyThreadWait();
    // uIMapVehicle.fleetEntry.fleetEntryMainTab.uIStorageLocationArrow.click();
  }

  async clickResetIcon(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIResetButton.click();
  }

  async clickBarcode(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIBarcode.click();
  }

  async verifyAtFleetID(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("FleetID"),
    // uIMapVehicle.fleetEntry.uIFleetIDEdit.getAttribute("value"));
  }

  async switchToPrintScreen(): Promise<void> {
    // Set<String> windowHandles = Playback.driver.getWindowHandles();
    // for (String window : windowHandles) {
    // System.out.println(Playback.driver.switchTo().window(window).getCurrentUrl());
    // if (Playback.driver.switchTo().window(window).getTitle().contains("about:blank")) {
    // Playback.driver.switchTo().window(window);
  }

  async verify3032EnterVendorNameAcknowldgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(3032)Enter Vendor Name");
  }

  async verifyInactiveCheckBoxIsUnchecked(): Promise<void> {
    // boolean selected = uIMapVehicle.fleetEntry.uIInactiveCheckBox.isSelected();
    // verify.ExpectedValueIsFalse(selected);
  }

  async verifyInActiveDateFieldIsEmpty(): Promise<void> {
    // String text = uIMapVehicle.fleetEntry.uIInactiveDateTime.getText();
    // verify.ExpectedValueIsTrue(text.isBlank());
  }

  async verifyAtDescription(): Promise<void> {
    // String attribute = uIMapVehicle.fleetEntry.uIDescribtionEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Description"), attribute);
  }

  async verifyAtMake(): Promise<void> {
    // String attribute = uIMapVehicle.fleetEntry.uIMakeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Make"), attribute);
  }

  async verifyAtModel(): Promise<void> {
    // String attribute = uIMapVehicle.fleetEntry.uIModelEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Model"), attribute);
  }

  async verifyAtYear(): Promise<void> {
    // String attribute = uIMapVehicle.fleetEntry.uIYearEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Year"), attribute);
  }

  async verifyAtVINNo(): Promise<void> {
    // String attribute = uIMapVehicle.fleetEntry.uIVinNumberEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("VinNo"), attribute);
  }

  async readFleetID(): Promise<string> {
    // String text = uIMapVehicle.fleetEntry.uIFleetIDEdit.getText();
    // return text;
  }

  async verifyTabColorAsBlue(i: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("rgba(0, 0, 255, 1)",
    // uIMapVehicle.fleetEntry.driver
    // .findElement(
    // By.xpath("//span[text()='" + BaseData.getVehicleModuleValue("TabName" + i) + "']"))
    // .getCssValue("color"));
  }

  async clickHistoryTab(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIHistoryTab.click();
  }

  async switchToAttachmentsTab(): Promise<void> {
    // uIMapVehicle.fleetEntry.uIAttachmentsTab.click();
    // objectIdentification.windowHandle.switchToFrame("frmTxtAttachMgrEx.aspx?");
  }

  async switchToTriggersTab(): Promise<void> {
    // uIMapVehicle.fleetEntry.uITriggersTab.click();
    // objectIdentification.windowHandle.switchToFrame("frmTriggersEntry.aspx?");
  }

}

export class TriggersTabPage {
  readonly page: Page;
  readonly triggerDropdown: Locator;
  readonly vehicleSlotEdit: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly triggersGrid: Locator;
  readonly internalSaveButton: Locator;
  readonly resetButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.triggerDropdown = page.locator('#cddTrigger_DropDown');
    this.vehicleSlotEdit = page.locator('#txtSlot');
    this.addButton = page.locator('#imgAddMO');
    this.clearButton = page.locator('#Refresh');
    this.triggersGrid = page.locator('#grdTrig');
    this.internalSaveButton = page.locator('#cmdInternalSave');
    this.resetButton = page.locator('#cmdInternalRefresh');
  }

  async selectAtTrigger(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.fleetEntry.triggersTab.uITriggerDropdown,
    // BaseData.getVehicleModuleValue("Trigger"));
  }

  async enterAtVehicleSlot(): Promise<void> {
    // uIMapVehicle.fleetEntry.triggersTab.uIVehicleSlotEdit
    // .sendKeys(BaseData.getVehicleModuleValue("VehicleSlot"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapVehicle.fleetEntry.triggersTab.uIAddButton.click();
  }

  async verifyAtTriggerNameInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Trigger"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.fleetEntry.triggersTab.uITriggersGrid,
    // BaseData.getVehicleModuleValue("Trigger"), "Trigger Name")
    // .getText());
  }

  async internalSave(): Promise<void> {
    // uIMapVehicle.fleetEntry.triggersTab.uIInternalSaveButton.click();
    // popup.confirm.yes();
  }

  async verify1051UpdatedDataExistsInTheMaintenanceScheduleTabAcknowledgeMessagePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage(
    // "(1051) Updated data exists in the Maintenance Schedule tab. You must save or reset.");
  }

  async verifyBarcodeImage(): Promise<void> {
    // String image = uIMapVehicle.fleetEntry.uIBarcode.getAttribute("src");
    // verify.ExpectedValueIsTrue(image.contains("Barcode.png") || image.contains("BarcodeText.jpg"));
  }

  async verify3032EnterStorageLocationAcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(3032) Enter Storage Location");
  }

  async verifyNoRecordsFoundAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
  }

  async saveNAddNew(): Promise<void> {
    // uIMapVehicle.fleetEntry.uISaveAddNewIcon.click();
    // popup.confirm.yes();
  }

  async verify1046RecordAlreadyExistAcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1046 - Record already exists");
  }

  async verify1005ErrorPopupDoesNotAppears(): Promise<void> {
    // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal("Fleet Entry");
  }

  async verifyFleetEntryScreenExist(): Promise<void> {
    // objectIdentification.windowHandle.verifyWindowExists("Fleet Entry");
  }

}

export class EquipmentServicePage {
  readonly page: Page;
  readonly selectedTestedByEdit: Locator;
  readonly dateEdit: Locator;
  readonly notesTextView: Locator;
  readonly expandAllCheckbox: Locator;
  readonly selectAllCheckbox: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly equipmentServiceTable: Locator;
  readonly equipmentServiceScreenInvenSearchTable: Locator;
  readonly equipmentServicenSearchTable: Locator;
  readonly locatedOnlyFleetIDropdown: Locator;
  readonly searchButton: Locator;
  readonly unAssignInventoryToStorageTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selectedTestedByEdit = page.locator('#lupEMPCode_CodeValue');
    this.dateEdit = page.locator('#dtdate_KPIDttmCtrl');
    this.notesTextView = page.locator('#txtNotes');
    this.expandAllCheckbox = page.locator('#chkExpandAll');
    this.selectAllCheckbox = page.locator('#chkSelectAll');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.equipmentServiceTable = page.locator('#grdequipment_div');
    this.equipmentServiceScreenInvenSearchTable = page.locator('#grdInvSrch');
    this.equipmentServicenSearchTable = page.locator("//div[@id=\'grdequipment2_ctl00_3_0\']");
    this.locatedOnlyFleetIDropdown = page.locator('#cddServiceType_DropDown');
    this.searchButton = page.locator('#cmdSearch');
    this.unAssignInventoryToStorageTable = page.locator("//div[@id=\'grdequipment2_ctl00_3_0_32_0\']");
  }

  async tabOutServicedTestedBy(): Promise<void> {
    // uIMapVehicle.equipmentService.uISelectedTestedByEdit.sendKeys(Keys.TAB);
  }

  async verifyLoggedPFAppear(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("UserName"),
    // uIMapVehicle.equipmentService.uISelectedTestedByEdit.getAttribute("value"));
  }

  async tabOutDate(): Promise<void> {
    // uIMapVehicle.equipmentService.uIDateEdit.sendKeys(Keys.TAB);
  }

  async verifyCurrentDateAutopopulates(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate(),
    // uIMapVehicle.equipmentService.uIDateEdit.getAttribute("value"));
  }

  async enterNotes(): Promise<void> {
    // uIMapVehicle.equipmentService.uINotesTextView.sendKeys(Randomized.randomAlphanumericSpecialCharsString(10));
  }

  async clickSelectAllCheckbox(): Promise<void> {
    // uIMapVehicle.equipmentService.uISelectAllCheckbox.click();
  }

  async save(): Promise<void> {
    // uIMapVehicle.equipmentService.uISaveButton.click();
    // popup.confirm.yes();
  }

  async clickSaveButton(): Promise<void> {
    // uIMapVehicle.equipmentService.uISaveButton.click();
    // Playback.pageLoadThreadWait();
  }

  async saveNClose(): Promise<void> {
    // uIMapVehicle.equipmentService.uISaveNCloseButton.click();
    // popup.confirm.yes();
  }

  async verifyGridDisappeared(): Promise<void> {
    // verify.ExpectedValueIsFalse(objectIdentification.manualIdentify
    // .controlExist(uIMapVehicle.equipmentService.uIEquipmentServiceScreenInvenSearchTable));
  }

  async verify3032EnterTestedByAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(3032) Enter Tested By");
  }

  async verify3032EnterDateAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(3032) Enter Date");
  }

  async verifyAssertItemAppearInGridByAtLadderType(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("LadderType"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.equipmentService.uIEquipmentServiceScreenInvenSearchTable,
    // BaseData.getVehicleModuleValue("LadderType"))
    // .getText());
  }

  async verifyAssertItemDisAppearInGridByAtLadderType(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapVehicle.equipmentService.uIEquipmentServiceScreenInvenSearchTable.getText()
    // .contains(BaseData.getVehicleModuleValue("LadderType")));
  }

  async clickServicedCheckboxByLadderType(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
    // uIMapVehicle.equipmentService.uIEquipmentServiceScreenInvenSearchTable,
    // BaseData.getVehicleModuleValue("LadderType"));
  }

  async uncheckExpandCollapseCheckbox(): Promise<void> {
    // Playback.waitForPageLoad();
    // uIMapVehicle.equipmentService.uIExpandAllCheckbox.click();
    // ;
  }

  async clickExpandCollapseCheckbox(): Promise<void> {
    // Playback.waitForPageLoad();
    // uIMapVehicle.equipmentService.uIExpandAllCheckbox.click();
  }

  async verifyNoRecordsFoundAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(6017) No Records Found");
  }

  async verifyAssertItemDisAppearInGrid(): Promise<void> {
    // int count = objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapVehicle.equipmentService.uIEquipmentServiceScreenInvenSearchTable);
    // verify.ExpectedIntergerValueIsEqualToActual(0, count);
  }

  async verifyNoEntriesAvailableInGrid(): Promise<void> {
    // boolean controlExist = objectIdentification.manualIdentify
    // .controlExist(uIMapVehicle.equipmentService.uIEquipmentServicenSearchTable);
    // verify.ExpectedValueIsFalse(controlExist);
  }

  async readColumnValue(ColumnValue: string): Promise<string[]> {
    // List<String> columnValues = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapVehicle.equipmentService.uIUnAssignInventoryToStorageTable, ColumnValue);
    // return columnValues;
  }

  async verifyAtColumnValueInGrid(columnValues: string[], ColumnValue: string): Promise<void> {
    // List<String> columnValues1 = objectIdentification.manualIdentify.getGridTableColumnValues(
    // uIMapVehicle.equipmentService.uIUnAssignInventoryToStorageTable, ColumnValue);
    // verify.ExpectedListValueIsTrue(columnValues, columnValues1);
  }

  async selectAtLocatedOnlyInFleetID(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapVehicle.equipmentService.uILocatedOnlyFleetIDropdown,
    // BaseData.getVehicleModuleValue("Located"));
  }

  async clickSearchButton(): Promise<void> {
    // uIMapVehicle.equipmentService.uISearchButton.click();
  }

  async verifyAtMakeColumnNameIsDisplayed(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridHeaderColumnName(uIMapVehicle.equipmentService.uIUnAssignInventoryToStorageTable, "Make")
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("ColumnName"), text);
  }

}

export class FuelLogEntryPage {
  readonly page: Page;
  readonly fleetIDComboBox: Locator;
  readonly dateEdit: Locator;
  readonly searchButton: Locator;
  readonly updateMileageButton: Locator;
  readonly popupDateEdit: Locator;
  readonly popupTimeEdit: Locator;
  readonly popupQuantityEdit: Locator;
  readonly popupCurrentMileageEdit: Locator;
  readonly popupSaveButton: Locator;
  readonly popupCancelButton: Locator;
  readonly mileageText: Locator;
  readonly saveNCloseButton: Locator;
  readonly oilEdit: Locator;
  readonly hoursEdit: Locator;
  readonly popUpFleetIdComboBox: Locator;
  readonly popupFuelEdit: Locator;
  readonly popupDEFEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fleetIDComboBox = page.locator('#cddFleetID_DropDown');
    this.dateEdit = page.locator('#GasDttmfrom_KPIDttmCtrl');
    this.searchButton = page.locator('#cmdSearch');
    this.updateMileageButton = page.locator('#cmdUpdate');
    this.popupDateEdit = page.locator('#PGasDttm_Date_KPIDttmCtrl');
    this.popupTimeEdit = page.locator("//span[@ID =\'PGasDttm_divDateTime\'//table[@ID =\'PGasDttm_Time\'//input");
    this.popupQuantityEdit = page.locator('#txtQuan');
    this.popupCurrentMileageEdit = page.locator('#txtMileage');
    this.popupSaveButton = page.locator('#cmdSavePanel');
    this.popupCancelButton = page.locator('#cmdcancel');
    this.mileageText = page.locator('#lblmilVM');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.oilEdit = page.locator('#txtOil');
    this.hoursEdit = page.locator('#txtHours');
    this.popUpFleetIdComboBox = page.locator('#cddPFleetID_DropDown');
    this.popupFuelEdit = page.locator('#txtQuan');
    this.popupDEFEdit = page.locator('#txtDEF');
  }

  async verifyAtFleetId(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("FleetID"),
    // objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapVehicle.fuelLogEntry.uIFleetIDComboBox));
  }

  async clickUpdateMileageButton(): Promise<void> {
    // uIMapVehicle.fuelLogEntry.uIUpdateMileageButton.click();
  }

  async tabOutPopupDate(): Promise<void> {
    // uIMapVehicle.fuelLogEntry.uIPopupDateEdit.sendKeys(Keys.TAB);
  }

  async enterPopupCurrentMileageAs10(): Promise<void> {
    // uIMapVehicle.fuelLogEntry.uIPopupCurrentMileageEdit.sendKeys("10.0");
  }

  async enterPopupCurrentMileageAs20(): Promise<void> {
    // uIMapVehicle.fuelLogEntry.uIPopupCurrentMileageEdit.sendKeys("20.0");
  }

  async enterPopupCurrentMileageAs9(): Promise<void> {
    // uIMapVehicle.fuelLogEntry.uIPopupCurrentMileageEdit.sendKeys("9");
    // uIMapVehicle.fuelLogEntry.uIPopupCurrentMileageEdit.sendKeys(Keys.TAB);
  }

  async enterPopupCurrentMileageAs50(): Promise<void> {
    // uIMapVehicle.fuelLogEntry.uIPopupCurrentMileageEdit.sendKeys("50");
  }

  async savePopup(): Promise<void> {
    // uIMapVehicle.fuelLogEntry.uIPopupSaveButton.click();
  }

  async verify1002AdditionalSuccessfulAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage(" 1002 - Addition Successful");
  }

  async verify3032GreaterThanLstMileageAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(3032) Enter greater than last mileage");
  }

  async verifyMileageAppearAs10(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("10.0", uIMapVehicle.fuelLogEntry.uIMileageText.getText());
  }

  async saveNClose(): Promise<void> {
    // uIMapVehicle.fuelLogEntry.uISaveNCloseButton.click();
    // popup.confirm.yes();
  }

  async enterQuantityAs10(): Promise<void> {
    // Playback.threadWait();
    // uIMapVehicle.fuelLogEntry.uIPopupQuantityEdit.sendKeys("10");
  }

  async enterOilAs10(): Promise<void> {
    // uIMapVehicle.fuelLogEntry.uIOilEdit.sendKeys("10");
  }

  async enterHours(hours: string): Promise<void> {
    // uIMapVehicle.fuelLogEntry.uIHoursEdit.sendKeys(hours);
  }

  async selectfleetID(): Promise<void> {
    // objectIdentification.randomIdentify.selectDropDownOption(uIMapVehicle.fuelLogEntry.uIPopUpFleetIdComboBox);
  }

  async enterPopUpCurrentMileage(): Promise<void> {
    // uIMapVehicle.fuelLogEntry.uIPopupCurrentMileageEdit.sendKeys(randomized.enterRandomNumbers(3));
  }

  async verifyAtFleetId(i: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("FleetID" + i),
    // objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapVehicle.fuelLogEntry.uIFleetIDComboBox));
  }

  async clickCancelInPopup(): Promise<void> {
    // uIMapVehicle.fuelLogEntry.uIPopupCancelButton.click();
  }

  async enterAtFuel(i: number): Promise<void> {
    // uIMapVehicle.fuelLogEntry.uIPopupFuelEdit.sendKeys(BaseData.getInventoryModuleValue("Fuel" + i));
    // uIMapVehicle.fuelLogEntry.uIPopupFuelEdit.sendKeys(Keys.TAB);
  }

  async enterAtDEF(i: number): Promise<void> {
    // uIMapVehicle.fuelLogEntry.uIPopupDEFEdit.sendKeys(BaseData.getInventoryModuleValue("DEF" + i));
    // uIMapVehicle.fuelLogEntry.uIPopupDEFEdit.sendKeys(Keys.TAB);
  }

  async verifyDEFFieldIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapVehicle.fuelLogEntry.uIPopupDEFEdit.isDisplayed(),
    // "DEF Field is not Displayed --> ");
  }

  async verifyHoursFieldIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapVehicle.fuelLogEntry.uIHoursEdit.isDisplayed(),
    // "Hours Field is not Displayed --> ");
  }

  async enterAtOil(i: number): Promise<void> {
    // uIMapVehicle.fuelLogEntry.uIOilEdit.sendKeys(BaseData.getVehicleModuleValue("Oil" + i));
    // uIMapVehicle.fuelLogEntry.uIOilEdit.sendKeys(Keys.TAB);
  }

  async verifyDEFFieldIsNotDisplayed(): Promise<void> {
    // boolean controlExist = objectIdentification.manualIdentify.controlExist(uIMapVehicle.fuelLogEntry.uIPopupDEFEdit);
    // verify.ExpectedValueIsFalse(controlExist);
  }

  async verifyAtMileage(): Promise<void> {
    // String text = uIMapVehicle.fuelLogEntry.uIMileageText.getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getInventoryModuleValue("Mileage"));
  }

  async verifyAtHours(): Promise<void> {
    // String text = uIMapVehicle.fuelLogEntry.uIHoursEdit.getText();
    // verify.ExpectedPropertyValueIsEqual(text, BaseData.getInventoryModuleValue("Hours"));
  }

}

export class MileageLogEntryPage {
  readonly page: Page;
  readonly fleetIDComboBox: Locator;
  readonly searchButton: Locator;
  readonly mileageLogEntryTable: Locator;
  readonly saveButton: Locator;
  readonly updateMileageButton: Locator;
  readonly dateEdit: Locator;
  readonly timeEdit: Locator;
  readonly quantityEdit: Locator;
  readonly oilEdit: Locator;
  readonly currentMileageEdit: Locator;
  readonly fromDateEdit: Locator;
  readonly toDateEdit: Locator;
  readonly resetButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fleetIDComboBox = page.locator('#cddFleetID_DropDown');
    this.searchButton = page.locator('#cmdSearch');
    this.mileageLogEntryTable = page.locator('#grdGasUsage');
    this.saveButton = page.locator('#cmdSave');
    this.updateMileageButton = page.locator('#cmdUpdate');
    this.dateEdit = page.locator('#PGasDttm_Date_KPIDttmCtrl');
    this.timeEdit = page.locator("//table[@id=\'PGasDttm_Time\']//input");
    this.quantityEdit = page.locator('#txtQuan');
    this.oilEdit = page.locator('#txtOil');
    this.currentMileageEdit = page.locator('#txtMileage');
    this.fromDateEdit = page.locator('#GasDttmfrom_KPIDttmCtrl');
    this.toDateEdit = page.locator('#GasDttmTo_KPIDttmCtrl');
    this.resetButton = page.locator('#cmdRefresh');
  }

  async selectAtFleedId(): Promise<void> {
    // uIMapVehicle.mileageLogEntry.uIFleetIDComboBox.click();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapVehicle.mileageLogEntry.uIFleetIDComboBox,
    // BaseData.getVehicleModuleValue("FleetId"));
  }

  async clickSearchButton(): Promise<void> {
    // uIMapVehicle.mileageLogEntry.uISearchButton.click();
  }

  async clickDeleteCell(): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
    // uIMapVehicle.mileageLogEntry.uIMileageLogEntryTable, BaseData.getVehicleModuleValue("FleetId"));
  }

  async verifyDoYouWantToDeleteAcknowledgeMessage(): Promise<void> {
    // popup.confirm.yesWithExpectedMessage("(4) Do you really want to delete");
  }

  async verifingDoYouWantToDeleteAcknowledgeMessage(): Promise<void> {
    // popup.confirm.yesWithExpectedMessage("(4) Do you really want to delete");
  }

  async save(): Promise<void> {
    // uIMapVehicle.mileageLogEntry.uISaveButton.click();
  }

  async verifyNoRecordExists(): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapVehicle.mileageLogEntry.uIMileageLogEntryTable) == 0);
  }

  async clickDeleteCellByFleetId(): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
    // uIMapVehicle.mileageLogEntry.uIMileageLogEntryTable, BaseData.getVehicleModuleValue("FleetId"));
    // //
  }

  async verifyNoRecordFoundAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
  }

  async clickUpdateMileage(): Promise<void> {
    // uIMapVehicle.mileageLogEntry.uIUpdateMileageButton.click();
  }

  async taboutDateNTime(): Promise<void> {
    // uIMapVehicle.mileageLogEntry.uIDateEdit.click();
    // uIMapVehicle.mileageLogEntry.uIDateEdit.sendKeys(Keys.TAB);
    // uIMapVehicle.mileageLogEntry.uITimeEdit.sendKeys(Keys.TAB);
  }

  async enterAtFromDate(): Promise<void> {
    // uIMapVehicle.mileageLogEntry.uIFromDateEdit.click();
    // uIMapVehicle.mileageLogEntry.uIFromDateEdit.sendKeys(BaseData.getVehicleModuleValue("FromDate"));
  }

  async enterAtToDate(): Promise<void> {
    // uIMapVehicle.mileageLogEntry.uIToDateEdit.click();
    // uIMapVehicle.mileageLogEntry.uIToDateEdit.sendKeys(BaseData.getVehicleModuleValue("ToDate"));
  }

  async enterAtQuantity(): Promise<void> {
    // uIMapVehicle.mileageLogEntry.uIQuantityEdit.sendKeys(BaseData.getVehicleModuleValue("Quantity"));
    // uIMapVehicle.mileageLogEntry.uIQuantityEdit.sendKeys(Keys.TAB);
  }

  async enterAtOil(): Promise<void> {
    // uIMapVehicle.mileageLogEntry.uIOilEdit.sendKeys(BaseData.getVehicleModuleValue("Oil"));
    // uIMapVehicle.mileageLogEntry.uIOilEdit.sendKeys(Keys.TAB);
  }

  async enterAtCurrentMileage(): Promise<void> {
    // uIMapVehicle.mileageLogEntry.uICurrentMileageEdit
    // .sendKeys(BaseData.getVehicleModuleValue("CurrentMileage"));
    // uIMapVehicle.mileageLogEntry.uICurrentMileageEdit.sendKeys(Keys.TAB);
  }

  async verifyAdditionSuccessfulAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1002 - Addition Successful");
  }

  async saveWithConfirmMessage(): Promise<void> {
    // uIMapVehicle.mileageLogEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verifyAtMileageInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Mileage"),
    // objectIdentification.manualIdentify.getGridCell(uIMapVehicle.mileageLogEntry.uIMileageLogEntryTable,
    // BaseData.getVehicleModuleValue("Mileage")).getText());
  }

  async clickReset(): Promise<void> {
    // uIMapVehicle.mileageLogEntry.uIResetButton.click();
  }

  async verifyRowByAtMileage(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(
    // objectIdentification.manualIdentify.getGridCell(uIMapVehicle.mileageLogEntry.uIMileageLogEntryTable,
    // BaseData.getVehicleModuleValue("Mileage1"), "Mileage").getText(),
    // BaseData.getVehicleModuleValue("Mileage1"));
  }

  async verifyAtFleetID(i: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("FleetID" + i),
    // objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapVehicle.mileageLogEntry.uIFleetIDComboBox));
  }

  async verifyAtDEFByMileageInGrid(i: number): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(uIMapVehicle.mileageLogEntry.uIMileageLogEntryTable, BaseData.getVehicleModuleValue("Mileage" + i),
    // "DEF");
    // verify.ExpectedPropertyValueIsEqual(gridCell.getText(), BaseData.getVehicleModuleValue("DEF"+ i));
  }

  async selectAtFleetIDInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapVehicle.mileageLogEntry.uIMileageLogEntryTable, BaseData.getVehicleModuleValue("FleetID"));
  }

  async verifyAtFleetIDInGrid(jsonIndexValue: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("FleetID" + jsonIndexValue),
    // objectIdentification.manualIdentify.getGridCell(uIMapVehicle.mileageLogEntry.uIMileageLogEntryTable,
    // BaseData.getVehicleModuleValue("FleetID" + jsonIndexValue)).getText());
  }

  async verifyAtDateInGrid(jsonIndexValue: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Date" + jsonIndexValue),
    // objectIdentification.manualIdentify.getGridCell(uIMapVehicle.mileageLogEntry.uIMileageLogEntryTable,
    // BaseData.getVehicleModuleValue("Date" + jsonIndexValue)).getText());
  }

  async verifyAtColumnValueInGrid(jsonIndexValue: number): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapVehicle.mileageLogEntry.uIMileageLogEntryTable,
    // BaseData.getVehicleModuleValue("ColumnName" + jsonIndexValue));
    // for(String  Value:gridTableColumnValues) {
    // verify.ExpectedPropertyValueIsEqual(Value,BaseData.getVehicleModuleValue("ColumnValue" + jsonIndexValue));
  }

}

export class VehicleMakeModelPage {
  readonly page: Page;
  readonly makeEdit: Locator;
  readonly modelCodeEdit: Locator;
  readonly modelDescriptionEdit: Locator;
  readonly addButton: Locator;
  readonly vehicleMakeModelTable: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.makeEdit = page.locator('#lupMake_CodeValue');
    this.modelCodeEdit = page.locator('#txtModel');
    this.modelDescriptionEdit = page.locator('#txtModelDesc');
    this.addButton = page.locator('#imgAdd');
    this.vehicleMakeModelTable = page.locator('#grdVehicleMM');
    this.saveButton = page.locator('#cmdSave');
  }

  async enterAtMake(): Promise<void> {
    // uIMapVehicle.vehicleMakeModel.uIMakeEdit.sendKeys(BaseData.getVehicleModuleValue("Make"));
    // uIMapVehicle.vehicleMakeModel.uIMakeEdit.sendKeys(Keys.TAB);
  }

  async enterAtModelCode(): Promise<void> {
    // Playback.threadWait();
    // uIMapVehicle.vehicleMakeModel.uIModelCodeEdit.sendKeys(BaseData.getVehicleModuleValue("Model"));
  }

  async enterAtModelDescription(): Promise<void> {
    // uIMapVehicle.vehicleMakeModel.uIModelDescriptionEdit
    // .sendKeys(BaseData.getVehicleModuleValue("ModelDescription"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapVehicle.vehicleMakeModel.uIAddButton.click();
  }

  async save(): Promise<void> {
    // uIMapVehicle.vehicleMakeModel.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verifyModelAppearInGridByModel(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Model"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.vehicleMakeModel.uIVehicleMakeModelTable,
    // BaseData.getVehicleModuleValue("Model"))
    // .getText());
  }

}

export class TowRotationPage {
  readonly page: Page;
  readonly noOfPeriodsEdit: Locator;
  readonly rotationCycleCheckBox: Locator;
  readonly rotationPeriodComboBox: Locator;
  readonly dateEdit: Locator;
  readonly patrolAreaComboBox: Locator;
  readonly equipmentTypeComboBox: Locator;
  readonly vendorComboBox: Locator;
  readonly positionComboBox: Locator;
  readonly rotationCheckBox: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly towRotationTable: Locator;
  readonly saveButton: Locator;
  readonly printButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.noOfPeriodsEdit = page.locator('#txtNoOfPeriods');
    this.rotationCycleCheckBox = page.locator('#chkRotnOrder');
    this.rotationPeriodComboBox = page.locator('#cddRotationPeriod_DropDown');
    this.dateEdit = page.locator('#dtOrderStartDate_KPIDttmCtrl');
    this.patrolAreaComboBox = page.locator('#cddPatrolArea_DropDown');
    this.equipmentTypeComboBox = page.locator('#cddEquipType');
    this.vendorComboBox = page.locator('#cddWrecker');
    this.positionComboBox = page.locator('#cddPosition_DropDown');
    this.rotationCheckBox = page.locator('#chkRotnOrder');
    this.addButton = page.locator('#imgAdd');
    this.clearButton = page.locator('#imgClear');
    this.towRotationTable = page.locator("//div[@id=\'grdPosition\']");
    this.saveButton = page.locator('#cmdSave');
    this.printButton = page.locator('#cmdPrint');
  }

  async selectAtPatrolArea(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapVehicle.towRotation.uIPatrolAreaComboBox,
    // BaseData.getVehicleModuleValue("PatrolArea"));
    // uIMapVehicle.towRotation.uIPatrolAreaComboBox.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async selectAtVendor1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapVehicle.towRotation.uIVendorComboBox,
    // BaseData.getVehicleModuleValue("Vendor1"));
    // uIMapVehicle.towRotation.uIVendorComboBox.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async selectAtPosition1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapVehicle.towRotation.uIPositionComboBox,
    // BaseData.getVehicleModuleValue("Position1"));
    // uIMapVehicle.towRotation.uIPositionComboBox.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async selectAtVendor(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapVehicle.towRotation.uIVendorComboBox,
    // BaseData.getVehicleModuleValue("Vendor"));
    // uIMapVehicle.towRotation.uIVendorComboBox.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async selectAtPosition(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapVehicle.towRotation.uIPositionComboBox,
    // BaseData.getVehicleModuleValue("Position"));
    // uIMapVehicle.towRotation.uIPositionComboBox.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async selectPosition(): Promise<void> {
    // objectIdentification.randomIdentify.selectDropDownOption(uIMapVehicle.towRotation.uIPositionComboBox);
    // uIMapVehicle.towRotation.uIPositionComboBox.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async selectAtEquipmentType1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapVehicle.towRotation.uIEquipmentTypeComboBox,
    // BaseData.getVehicleModuleValue("Equipment"));
    // Playback.controlReadyThreadWait();
  }

  async selectAtEquipmentType2(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapVehicle.towRotation.uIEquipmentTypeComboBox,
    // BaseData.getVehicleModuleValue("Equipment"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapVehicle.towRotation.uIAddButton.click();
  }

  async clickSave(): Promise<void> {
    // uIMapVehicle.towRotation.uISaveButton.click();
    // popup.confirm.yes();
  }

  async saveScreen(): Promise<void> {
    // uIMapVehicle.towRotation.uISaveButton.click();
    // popup.confirm.yes();
    // popup.acknowledge.ok();
  }

  async clickAtPatrolAreaInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.towRotation.uITowRotationTable, BaseData.getVehicleModuleValue("PatrolArea"));
  }

  async DeleteAtVendorNameInGrid(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
    // uIMapVehicle.towRotation.uITowRotationTable, BaseData.getVehicleModuleValue("VendorName"));
    // popup.confirm.yes();
  }

  async verifyAtPatrolArea(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapVehicle.towRotation.uITowRotationTable, "Area", rowIndex)
    // .contains(BaseData.getVehicleModuleValue("PatrolArea")));
  }

  async verifyAtVendor(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapVehicle.towRotation.uITowRotationTable, "Vendor Name", rowIndex)
    // .contains(BaseData.getVehicleModuleValue("Vendor").substring(7)));
  }

  async verifyAtVendorNameInGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("VendorName"),
    // objectIdentification.manualIdentify.getGridCell(uIMapVehicle.towRotation.uITowRotationTable,
    // BaseData.getVehicleModuleValue("VendorName")).getText());
  }

  async verifyAtVendorName1InGrid(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("VendorName1"),
    // objectIdentification.manualIdentify.getGridCell(uIMapVehicle.towRotation.uITowRotationTable,
    // BaseData.getVehicleModuleValue("VendorName1")).getText());
  }

  async verifyDuplicateAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1019) Duplication Of Data Found");
  }

  async verifyNoDuplicationInVendorDropdown(): Promise<void> {
    // // List<WebElement> vendor =
    // // Playback.driver.findElements(By.xpath("//select[@id='cddWrecker']/option"));
    // List<String> vendor = objectIdentification.manualIdentify
    // .getDropDownValues(uIMapVehicle.towRotation.uIVendorComboBox);
    // for (int i = 0; i < vendor.size(); i++) {
    // for (int j = i + 1; j < vendor.size(); j++) {
    // if (vendor.get(i).equals(vendor.get(j)) && i != j) {
    // verify.ExpectedPropertyValueIsNotEqual(vendor.get(i), vendor.get(j));
    // } else {
    // verify.ExpectedPropertyValueIsNotEqual(vendor.get(i), vendor.get(j));
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getDropDownOptionsCount(uIMapVehicle.towRotation.uIVendorComboBox) == 3);
  }

  async clickPrint(): Promise<void> {
    // uIMapVehicle.towRotation.uIPrintButton.click();
  }

  async DeleteAtVendorName1InGrid(): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
    // uIMapVehicle.towRotation.uITowRotationTable, BaseData.getVehicleModuleValue("VendorName1"));
    // popup.confirm.yes();
  }

  async selectAtVendorNameInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapVehicle.towRotation.uITowRotationTable, BaseData.getVehicleModuleValue("VendorName"));
  }

  async DeleteAtVendorNameInSelectedGrid(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerTextUsingContainsClass(
    // uIMapVehicle.towRotation.uITowRotationTable, BaseData.getVehicleModuleValue("VendorName"));
    // popup.confirm.yes();
  }

  async verifyEquipmentTypeDropdownIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapVehicle.towRotation.uIEquipmentTypeComboBox.isEnabled());
  }

  async verifyVendorDropdownIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapVehicle.towRotation.uIVendorComboBox.isEnabled());
  }

  async verifyAtVendorInGrid(JsonIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Vendor" + JsonIndex),
    // objectIdentification.manualIdentify.getGridCell(uIMapVehicle.towRotation.uITowRotationTable,
    // BaseData.getVehicleModuleValue("Vendor" + JsonIndex)).getText());
  }

  async verifyAtPositionNoInGrid(jsonIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Position" + jsonIndex),
    // objectIdentification.manualIdentify.getGridCell(uIMapVehicle.towRotation.uITowRotationTable,
    // BaseData.getVehicleModuleValue("Position" + jsonIndex)).getText());
  }

  async verifyAtEquipmentInGrid(jsonIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Equipment" + jsonIndex),
    // objectIdentification.manualIdentify.getGridCell(uIMapVehicle.towRotation.uITowRotationTable,
    // BaseData.getVehicleModuleValue("Equipment" + jsonIndex)).getText());
  }

  async verifyAtEquipmentCodeInGrid(jsonIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("EquipCode" + jsonIndex),
    // objectIdentification.manualIdentify.getGridCell(uIMapVehicle.towRotation.uITowRotationTable,
    // BaseData.getVehicleModuleValue("EquipCode" + jsonIndex)).getText());
  }

  async verifyAtAreaInGrid(jsonIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("Area" + jsonIndex),
    // objectIdentification.manualIdentify.getGridCell(uIMapVehicle.towRotation.uITowRotationTable,
    // BaseData.getVehicleModuleValue("Area" + jsonIndex)).getText());
  }

}

export class TowVendorPage {
  readonly page: Page;
  readonly searchButton: Locator;
  readonly vendorCodeEdit: Locator;
  readonly towVendorResultTable: Locator;
  readonly addNewButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchButton = page.locator("//span[contains(text(),\'Search\')]");
    this.vendorCodeEdit = page.locator('#tabVendorSrch_tmpl0_ctrlUsrVendor_txtVenCode');
    this.towVendorResultTable = page.locator('#grdEquipments');
    this.addNewButton = page.locator("(//span[contains(text(),\'Add New\')])");
  }

  async enterAtVendorcode(): Promise<void> {
    // uIMapVehicle.towVendor.uIVendorCodeEdit.sendKeys(BaseData.getVehicleModuleValue("VendorCode"));
  }

  async clickSearch(): Promise<void> {
    // uIMapVehicle.towVendor.uISearchButton.click();
  }

  async clickAddNew(): Promise<void> {
    // uIMapVehicle.towVendor.uIAddNewButton.click();
  }

  async verifyAddressContainsJurisAndCSZInTheAddressColumn(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapVehicle.towVendor.uITowVendorResultTable, BaseData.getVehicleModuleValue("VendorCode"),
    // "Address");
    // String address = gridCell.getText();
    // String[] addressDetails = address.split(";");
    // String regExp = "^[A-Z]{2},\\s[\\w\\s]+,\\s[A-Z]{2},\\s[0-9]{5}$";
    // verify.ExpectedValueIsTrue(Pattern.matches(addressDetails[1], regExp), "Address Fromat Wrong");
  }

}

export class VehicleFlagDetailsScreenPage {
  readonly page: Page;
  readonly vehicleFlagDetailTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.vehicleFlagDetailTable = page.locator('#grdFlag');
  }

  async verifyCurrentDate(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate(),
    // objectIdentification.manualIdentify.getGridCellInnerText(
    // uIMapVehicle.vehicleFlagDetailsScreen.uIVehicleFlagDetailTable, "Date", rowIndex));
  }

  async verifyFlagIconInFlagDetailScreen(rowIndex: number): Promise<void> {
    // String SystemCheckBox = objectIdentification.manualIdentify
    // .getGridCell(uIMapVehicle.vehicleFlagDetailsScreen.uIVehicleFlagDetailTable, "Comments", rowIndex)
    // .getAttribute("class");
    // verify.ExpectedValueIsTrue(SystemCheckBox.contains("gridrowclr_Flag"));
  }

  async closeScreen(): Promise<void> {
    // Playback.driver.close();
  }

  async switchToEquipmentServiceScreenTab(): Promise<void> {
    // objectIdentification.windowHandle.switchToMainWindowScreenTab("frmPerformEquipmentService.aspx?");
  }

}

export class VehicleMergePage {
  readonly page: Page;
  readonly primaryVehicleNoEdit: Locator;
  readonly mergeListTab: Locator;
  readonly mergeButton: Locator;
  readonly primaryVehicleLookup: Locator;
  readonly plateSTEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.primaryVehicleNoEdit = page.locator('#txtPriVehNo');
    this.mergeListTab = page.locator("//span[text()=\'Merge List\']");
    this.mergeButton = page.locator('#cmdMerge');
    this.primaryVehicleLookup = page.locator('#imgDetail');
    this.plateSTEdit = page.locator('#txtPriPlate');
  }

  async enterAtPrimaryVehicleNo(): Promise<void> {
    // uIMapVehicle.vehicleMerge.uIPrimaryVehicleNoEdit
    // .sendKeys(BaseData.getVehicleModuleValue("PrimaryVehicleNo"));
    // uIMapVehicle.vehicleMerge.uIPrimaryVehicleNoEdit.sendKeys(Keys.TAB);
  }

  async clickMergeListTab(): Promise<void> {
    // uIMapVehicle.vehicleMerge.uIMergeListTab.click();
  }

}

export class MergeListTabPage {
  readonly page: Page;
  readonly resetButton: Locator;
  readonly secondaryVehicleNoEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.resetButton = page.locator('#tabNameMerge_tmpl0_usrVehMergeList1_cmdReset');
    this.secondaryVehicleNoEdit = page.locator('#tabNameMerge_tmpl0_usrVehMergeList1_txtVehNo');
  }

  async clickResetButton(): Promise<void> {
    // uIMapVehicle.vehicleMerge.mergeListTab.uIResetButton.click();
  }

  async enterAtSecondaryVehicleNo(): Promise<void> {
    // uIMapVehicle.vehicleMerge.mergeListTab.uISecondaryVehicleNoEdit
    // .sendKeys(BaseData.getVehicleModuleValue("SecondaryVehicleNo"));
    // uIMapVehicle.vehicleMerge.mergeListTab.uISecondaryVehicleNoEdit.sendKeys(Keys.TAB);
  }

  async clickMergeButton(): Promise<void> {
    // uIMapVehicle.vehicleMerge.uIMergeButton.click();
  }

  async clickPrimaryVehicleLookupIcon(): Promise<void> {
    // uIMapVehicle.vehicleMerge.uIPrimaryVehicleLookup.click();
  }

  async verifyPrimaryVehicleInfoIconIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapVehicle.vehicleMerge.uIPrimaryVehicleLookup.isDisplayed(),
    // "Primary vehicle lookup icon is not displayed-->");
  }

  async verifyAtPlateST(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getVehicleModuleValue("PlateSt"),
    // uIMapVehicle.vehicleMerge.uIPlateSTEdit.getAttribute("value"),
    // "Plate ST value is not same as expected -->");
  }

  async clickOnPrimaryVehicleInfoIcon(): Promise<void> {
    // uIMapVehicle.vehicleMerge.uIPrimaryVehicleLookup.click();
  }

}

export class VehicleMergeDetailsPage {
  readonly page: Page;
  readonly mergeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mergeButton = page.locator('#cmdMerge');
  }

  async clickMergeButton(): Promise<void> {
    // uIMapVehicle.vehicleMergeDetails.uIMergeButton.click();
  }

  async verify6065SelectedMergePopup(): Promise<void> {
    // popup.confirm.yesWithExpectedMessage(
    // "(6065) Selected Merge fields will replace Primary fields. Do you want to proceed? ");
  }

  async verify9170VehicleMergedAcknowledge(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(9170) Vehicle merged successfully");
  }

}

export class LeadsTabPage {
  readonly page: Page;
  readonly addNewButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator('#AddNew');
  }

  async clickAddNew(): Promise<void> {
    // uIMapVehicle.vehicleBoatEntry.leadsTab.uIAddNewButton.click();
  }

}

