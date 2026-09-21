// @ts-nocheck
import { Page, Locator, FrameLocator } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { AcknowledgePage, ConfirmPage } from '../popup.page';

export class TowPage {
  private page: Page;
  private browserHelpers: BrowserHelpers;

  constructor(page: Page) {
    this.page = page;
    this.browserHelpers = new BrowserHelpers(page);
  }

  async switchToTowVendorEntry() {
    return this.browserHelpers.switchToPageByTitle('Tow Vendor Entry');
  }

  async switchToTowVendor() {
    return this.browserHelpers.switchToMainWindowScreenTab('Tow/frmVendorSrch');
  }

  async switchToTowRotation() {
    return this.browserHelpers.switchToMainWindowScreenTab('Tow/frmTowRotation');
  }

  async switchToTowScreen() {
    return this.browserHelpers.switchToMainWindowScreenTab('Tow/frmTowSrch');
  }

  async switchToTowRefuseScreen() {
    return this.browserHelpers.switchToMainWindowScreenTab('Tow/frmTowRefusalSrch');
  }

  async switchToTowEntryPopupScreen() {
    return this.browserHelpers.switchToPageByUrl('frmTowRefuse.aspx?');
  }

  async switchToTowEntry() {
    return this.browserHelpers.switchToPageByTitle('Tow Entry');
  }

  async switchToTowRefusePopupScreen() {
    return this.browserHelpers.switchToPageByUrl('frmTowRefuse.aspx?');
  }

  async switchToTowSearchScreen() {
    return this.browserHelpers.switchToPageByTitle('Tow/frmTowSrch');
  }

  async Reset(): Promise<void> {
    // uIMapTow = null;
  }

}

export class TowRotationPage {
  readonly page: Page;
  readonly vendorComboBox: Locator;
  readonly positionComboBox: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly saveButton: Locator;
  readonly refreshButton: Locator;
  readonly towRotationTable: Locator;
  readonly rotationTypeLabel: Locator;
  readonly towZoneComboBox: Locator;
  readonly saveNCloseButton: Locator;
  readonly equipTypeComboBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.vendorComboBox = page.locator('#cddWrecker');
    this.positionComboBox = page.locator('#cddPosition_DropDown');
    this.addButton = page.locator('#imgAdd');
    this.clearButton = page.locator('#imgClear');
    this.saveButton = page.locator('#cmdSave');
    this.refreshButton = page.locator('#cmdRefresh');
    this.towRotationTable = page.locator('#grdPosition');
    this.rotationTypeLabel = page.locator(" //span[@id=\'lblRotaType\']");
    this.towZoneComboBox = page.locator('#cddTowZone_DropDown');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.equipTypeComboBox = page.locator('#cddEquipType');
  }

  async verifyAtVendorNotFoundInVendorDropdown(): Promise<void> {
    // String vendor = uIMapTow.towRotation.uIVendorComboBox.getText();
    // verify.ExpectedValueIsFalse(vendor.contains(BaseData.getTowModuleValue("Vendor")));
  }

  async clickRefreshButton(): Promise<void> {
    // uIMapTow.towRotation.uIRefreshButton.click();
  }

  async selectAtTowZone(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTow.towRotation.uITowZoneComboBox,
    // BaseData.getTowModuleValue("RotationTowZone"));
    // uIMapTow.towRotation.uITowZoneComboBox.sendKeys(Keys.TAB);
  }

  async selectAtVendor(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTow.towRotation.uIVendorComboBox,
    // BaseData.getTowModuleValue("Vendor"));
  }

  async selectAtPosition(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapTow.towRotation.uIPositionComboBox.sendKeys(BaseData.getTowModuleValue("Position"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapTow.towRotation.uIAddButton.click();
  }

  async verifyAtPositionInGrid(): Promise<void> {
    // WebElement cell = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapTow.towRotation.uITowRotationTable, BaseData.getTowModuleValue("PositionNo"));
    // WebElement position = objectIdentification.manualIdentify
    // .getGridCell(uIMapTow.towRotation.uITowRotationTable, cell, "Position#");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("PositionNo"), position.getText());
  }

  async verifyAtVendorNameInGrid(index: number): Promise<void> {
    // String TowVendorName = objectIdentification.manualIdentify
    // .getGridCellInnerText(uIMapTow.towRotation.uITowRotationTable, "Vendor Name", index);
    // System.out.println(TowVendorName);
    // verify.ExpectedPropertyValueIsEqual(TowVendorName, BaseData.getTowModuleValue("VendorName"));
  }

  async verifyAtRotationTypeLAbel(RotationLabel: number): Promise<void> {
    // System.out.println(uIMapTow.towRotation.uIRotationTypeLabel.getText());
    // if (RotationLabel == 0) {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("RotationTypeLabel"), uIMapTow.towRotation.uIRotationTypeLabel.getText());
    // } else {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("RotationTypeLabel" + RotationLabel), uIMapTow.towRotation.uIRotationTypeLabel.getText());
  }

  async save(): Promise<void> {
    // uIMapTow.towRotation.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verify1003UpdateSuccessfulAckMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1003 - Update Successful");
  }

  async verifyEntryDeletedInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify
    // .getGridTableRowsCount(uIMapTow.towRotation.uITowRotationTable) == rowIndex);
  }

  async clickOnRotationTypeText(): Promise<void> {
    // uIMapTow.towRotation.uIRotationTypeLabel.click();
  }

  async verifyAtTowZone(): Promise<void> {
    // String towZone = objectIdentification.manualIdentify
    // .getDropDwonSelectedItem(uIMapTow.towRotation.uITowZoneComboBox);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("TowZone"), towZone);
  }

  async verifyScreenNotExist(): Promise<void> {
    // List<WebElement> screens = Playback.driver
    // .findElements(By.xpath("//div[@id='pnxWindowStrip']//li[@class='rtsLI']//a//span//span//span"));
    // for (WebElement screen : screens) {
    // System.out.println(screen.getText());
    // if (!screen.getText().equalsIgnoreCase(BaseData.getTowModuleValue("Screen")))
    // verify.ExpectedValueIsTrue(true);
  }

  async saveAndClose(): Promise<void> {
    // uIMapTow.towRotation.uISaveNCloseButton.click();
    // popup.confirm.yes();
  }

  async selectAtEquipType(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTow.towRotation.uIEquipTypeComboBox,
    // BaseData.getTowModuleValue("EquipType"));
    // Playback.controlReadyThreadWait();
    // uIMapTow.towRotation.uIEquipTypeComboBox.sendKeys(Keys.TAB);
  }

  async verify1002AdditionSuccessfulAckMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1002 - Addition Successful");
  }

  async verifyDoYouWishToSwapPopup(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // popup.confirm.yesWithExpectedMessage("(7141)The vendor position has already been set. Do you wish to swap it?");
    // //			popup.confirm
    // //					.yesWithContainsMessage("(7141)The vendor position has already been set. Do you wish to swap it?");
  }

  async verifyNoDataPresentAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(7)No data present");
  }

  async clickSaveAndClose(): Promise<void> {
    // uIMapTow.towRotation.uISaveNCloseButton.click();
  }

  async selectAtVendorCodeInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapTow.towRotation.uITowRotationTable, BaseData.getTowModuleValue("VendorCode"));
  }

  async selectAtEquipmentType(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTow.towRotation.uIEquipTypeComboBox,
    // BaseData.getTowModuleValue("EquipmentType" + i));
    // uIMapTow.towRotation.uIEquipTypeComboBox.sendKeys(Keys.TAB);
  }

  async verifyAtEquipmentInGridByPosition(): Promise<void> {
    // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(
    // uIMapTow.towRotation.uITowRotationTable, BaseData.getTowModuleValue("PositionNo"), "Equipment");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("Equipment"), gridCell.getText());
  }

}

export class TowVendorPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly venderCodeEdit: Locator;
  readonly contractDateEdit: Locator;
  readonly contractExpiresDateEdit: Locator;
  readonly includeInactiveCheckbox: Locator;
  readonly searchButton: Locator;
  readonly towVendorTable: Locator;
  readonly backButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.venderCodeEdit = page.locator('#tabVendorSrch_tmpl0_ctrlUsrVendor_txtVenCode');
    this.contractDateEdit = page.locator('#tabVendorSrch_tmpl0_ctrlUsrVendor_DttmContractDate_Date_KPIDttmCtrl');
    this.contractExpiresDateEdit = page.locator('#tabVendorSrch_tmpl0_ctrlUsrVendor_DttmContractExp_Date_KPIDttmCtrl');
    this.includeInactiveCheckbox = page.locator('#tabVendorSrch_tmpl0_ctrlUsrVendor_chkIsActive');
    this.searchButton = page.locator("//span[contains(text(),\'Search\')]");
    this.towVendorTable = page.locator('#grdEquipments');
    this.backButton = page.locator("//span[text()=\'Back\']");
  }

  async clickAddNewButton(): Promise<void> {
    // uIMapTow.towVendor.uIAddNewButton.click();
  }

  async enterAtVendorCode(): Promise<void> {
    // uIMapTow.towVendor.uIVenderCodeEdit.sendKeys(BaseData.getTowModuleValue("VendorCode"));
  }

  async clickSearchButton(): Promise<void> {
    // uIMapTow.towVendor.uISearchButton.click();
  }

  async verify1011NoRecordFoundAckMsg(): Promise<void> {
    // if (Playback.browserType.contains("Chrome")) {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
    // } else
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
  }

  async clickIncludeInactiveCheckbox(): Promise<void> {
    // uIMapTow.towVendor.uIIncludeInactiveCheckbox.click();
  }

  async verifyAtVendorCodeInGrid(): Promise<void> {
    // WebElement Code = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapTow.towVendor.uITowVendorTable, BaseData.getTowModuleValue("VendorCode"));
    // WebElement vendorCode = objectIdentification.manualIdentify.getGridCell(uIMapTow.towVendor.uITowVendorTable,
    // Code, "Vendor Code");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("VendorCode"), vendorCode.getText());
  }

  async verifyAtVendorNameInGrid(): Promise<void> {
    // WebElement Name = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapTow.towVendor.uITowVendorTable, BaseData.getTowModuleValue("VendorName"));
    // WebElement vendorName = objectIdentification.manualIdentify.getGridCell(uIMapTow.towVendor.uITowVendorTable,
    // Name, "Vendor Name");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("VendorName"), vendorName.getText());
  }

  async verifyAtAddressInGrid(): Promise<void> {
    // WebElement add = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapTow.towVendor.uITowVendorTable, BaseData.getTowModuleValue("VendorName"));
    // WebElement address = objectIdentification.manualIdentify.getGridCell(uIMapTow.towVendor.uITowVendorTable,
    // add, "Address");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("Address"), address.getText());
  }

  async enterContractDateAsCurrentDate(): Promise<void> {
    // uIMapTow.towVendor.uIContractDateEdit.sendKeys(Randomized.getCurrentDate());
  }

  async verifyContractDateAsCurrentDate(): Promise<void> {
    // WebElement vendorCode = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapTow.towVendor.uITowVendorTable, BaseData.getTowModuleValue("VendorCode"));
    // WebElement date = objectIdentification.manualIdentify.getGridCell(uIMapTow.towVendor.uITowVendorTable,
    // vendorCode, "Contract Date");
    // verify.ExpectedPropertyValueIsEqual(Randomized.removeStringByIndexCount(Randomized.getCurrentDate(), 6, 2),
    // date.getText());
  }

  async getContractDateByVendorCodeInGrid(): Promise<void> {
    // WebElement vendorCode = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapTow.towVendor.uITowVendorTable, BaseData.getTowModuleValue("VendorCode"));
    // WebElement date = objectIdentification.manualIdentify.getGridCell(uIMapTow.towVendor.uITowVendorTable,
    // vendorCode, "Contract Date");
    // String expireDate = date.getText();
    // Playback.setTestContextAttribute("ExpireDate", expireDate);
  }

  async verifyExpireDateAs30DayfromContractDateInGrid(expireDate: string): Promise<void> {
    // WebElement vendorCode = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapTow.towVendor.uITowVendorTable, BaseData.getTowModuleValue("VendorCode"));
    // WebElement date = objectIdentification.manualIdentify.getGridCell(uIMapTow.towVendor.uITowVendorTable,
    // vendorCode, "Exp Date");
    // String exDate = Randomized.removeStringByIndexCount(Randomized.getFutureDate(expireDate, 30), 6, 2);
    // verify.ExpectedPropertyValueIsEqual(exDate, date.getText());
  }

  async clickRowByAtVendorCode(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapTow.towVendor.uITowVendorTable,
    // BaseData.getTowModuleValue("VendorCode"));
  }

  async clickBackButton(): Promise<void> {
    // uIMapTow.towVendor.uIBackButton.click();
  }

}

export class TowVendorEntryPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly vendorCodeEdit: Locator;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly nameInfoButton: Locator;
  readonly officeContactEdit: Locator;
  readonly contractDateEdit: Locator;
  readonly contractDateButton: Locator;
  readonly contractTimeEdit: Locator;
  readonly contractExpiresDateEdit: Locator;
  readonly contractExpiresDateButton: Locator;
  readonly contractExpiresTimeEdit: Locator;
  readonly rotationPOsitionComboBox: Locator;
  readonly rotationPositionTitleComboBox: Locator;
  readonly inactiveCheckbox: Locator;
  readonly inactiveDateTimeEdit: Locator;
  readonly equipmentTab: Locator;
  readonly phoneNumberTab: Locator;
  readonly areaAssignmentTab: Locator;
  readonly areaZoneAssignmentTab: Locator;
  readonly authDriversTab: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly towVendorNameTypeEdit: Locator;
  readonly towVendorNameIDEdit: Locator;
  readonly printIcon: Locator;
  readonly saveNCloseButton: Locator;
  readonly resetIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdSave');
    this.vendorCodeEdit = page.locator('#txtVenCode');
    this.lastNameEdit = page.locator('#nmcVendorName_LastName');
    this.firstNameEdit = page.locator('#nmcVendorName_FirstName');
    this.nameInfoButton = page.locator('#nmcVendorName_imgSrch');
    this.officeContactEdit = page.locator('#txtPhone');
    this.contractDateEdit = page.locator('#DttmContractDate_Date_KPIDttmCtrl');
    this.contractDateButton = page.locator('#DttmContractDate_Date_KPIDttmCmd');
    this.contractTimeEdit = page.locator("//table[@id =\'DttmContractDate_Time\'//input");
    this.contractExpiresDateEdit = page.locator('#DttmContractExp_Date_KPIDttmCtrl');
    this.contractExpiresDateButton = page.locator('#DttmContractExp_Date_KPIDttmCmd');
    this.contractExpiresTimeEdit = page.locator("//table[@id =\'DttmContractExp_Time\']//input");
    this.rotationPOsitionComboBox = page.locator('#cddPosition_DropDown');
    this.rotationPositionTitleComboBox = page.locator("//select[@id =\'cddPosition_DropDown\' //title[contains(text(),\'101 -\')]");
    this.inactiveCheckbox = page.locator('#chkIsActive');
    this.inactiveDateTimeEdit = page.locator('#txtInActiveDttm');
    this.equipmentTab = page.locator("//span[contains(text(),\'Equipment\')]");
    this.phoneNumberTab = page.locator("//span[contains(text(),\'Phone Number\')]");
    this.areaAssignmentTab = page.locator("//span[contains(text(),\'Assignment\')]");
    this.areaZoneAssignmentTab = page.locator("  //span[text()=\'Area/Zone Assignment\']");
    this.authDriversTab = page.locator("//span[contains(text(),\'Auth Drivers\')]");
    this.bottomLeftSideStatusBar = page.locator("//div[@id=\'tab0\']//td[@class = \'statusBar\']//b");
    this.towVendorNameTypeEdit = page.locator('#nmcVendorName_NameType');
    this.towVendorNameIDEdit = page.locator('#nmcVendorName_NameTypeID');
    this.printIcon = page.locator('#cmdPrint');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.resetIcon = page.locator('#cmdRefresh');
  }

  async clickSaveButton(): Promise<void> {
    // uIMapTow.towVendorEntry.uISaveButton.click();
  }

  async save(): Promise<void> {
    // uIMapTow.towVendorEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async verify7096EnterVendorCodeAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(7096) Enter vendor code");
  }

  async enterVendorCodeAs100(): Promise<void> {
    // uIMapTow.towVendorEntry.uIVendorCodeEdit.sendKeys("100");
  }

  async verify7097EnterVendorNameAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(7097) Enter vendor name");
  }

  async enterAtVendorLastName(): Promise<void> {
    // uIMapTow.towVendorEntry.uILastNameEdit.sendKeys(BaseData.getTowModuleValue("VendorLastName"));
    // uIMapTow.towVendorEntry.uIFirstNameEdit.sendKeys(Keys.TAB);
  }

  async selectBusinessName(): Promise<void> {
    // // Names.NameSearchHelpWindow.SelectName();
  }

  async verifyLastNameInNameEntryScreen(): Promise<void> {
    // String lastName = uIMapTow.towVendorEntry.uILastNameEdit.getAttribute("value");
    // uIMapTow.towVendorEntry.uINameInfoButton.click();
    // /*
    // * Names.switchToNameEntry(); Names.NameEntry.VerifyLastName(lastName);
    // * Names.NameEntry.CloseTheScreen();
    // */
  }

  async enterOfficeContactAs3DigitNUmber(): Promise<void> {
    // uIMapTow.towVendorEntry.uIOfficeContactEdit.click();
    // uIMapTow.towVendorEntry.uIOfficeContactEdit.sendKeys("365");
  }

  async verify5037InvalidPhoneNumber(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(5037) Invalid phone number");
  }

  async clearOfficeContact(): Promise<void> {
    // uIMapTow.towVendorEntry.uIOfficeContactEdit.click();
    // uIMapTow.towVendorEntry.uIOfficeContactEdit.clear();
  }

  async enterOfficeContact(): Promise<void> {
    // uIMapTow.towVendorEntry.uIOfficeContactEdit.click();
    // uIMapTow.towVendorEntry.uIOfficeContactEdit.sendKeys(Randomized.getRandomPhoneNumbers());
  }

  async enterContractDateAsCurrentDate(): Promise<void> {
    // uIMapTow.towVendorEntry.uIContractDateEdit.sendKeys(Randomized.getCurrentDate());
  }

  async enterContractExpiresAs30DayFutureFromContractDate(): Promise<void> {
    // uIMapTow.towVendorEntry.uIContractExpiresDateEdit.sendKeys((Randomized.getFutureDate(30)));
  }

  async enterContractDateAs30DayPreviousFromCurrentdate(): Promise<void> {
    // uIMapTow.towVendorEntry.uIContractDateEdit.sendKeys(Randomized.getPreviousDate(30, "MM/dd/yyyy"));
  }

  async getContractDate(): Promise<string> {
    // String contractDate = uIMapTow.towVendorEntry.uIContractDateEdit.getAttribute("value");
    // System.out.println(contractDate);
    // //      Playback.setTestContextAttribute("ContractDate",contractDate);
    // return contractDate;
  }

  async enterExpiresDteAsNextDayofContractDate(): Promise<void> {
    // uIMapTow.towVendorEntry.uIContractExpiresDateEdit.sendKeys(Randomized.getPreviousDate(29, "MM/dd/yyyy"));
  }

  async clearContractDateAndTime(): Promise<void> {
    // uIMapTow.towVendorEntry.uIContractDateEdit.clear();
    // uIMapTow.towVendorEntry.uIContractTimeEdit.clear();
  }

  async clearContractExpiresDateAndTime(): Promise<void> {
    // uIMapTow.towVendorEntry.uIContractExpiresDateEdit.click();
    // uIMapTow.towVendorEntry.uIContractExpiresDateEdit.clear();
    // uIMapTow.towVendorEntry.uIContractExpiresTimeEdit.click();
    // uIMapTow.towVendorEntry.uIContractExpiresTimeEdit.clear();
  }

  async clickInactiveDateTimeCheckbox(): Promise<void> {
    // uIMapTow.towVendorEntry.uIInactiveCheckbox.click();
  }

  async verifyCurrentDateAutoPopulatesInInactiveCheckbox(): Promise<void> {
    // String date = uIMapTow.towVendorEntry.uIInactiveDateTimeEdit.getAttribute("value");
    // //     String inactiveDate =Randomized.removeCharAt(date,10);
    // //     verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate(), inactiveDate);
    // verify.ExpectedValueIsTrue(date.contains(Randomized.getCurrentDate()));
  }

  async verify1002AdditionSuccessfulFooterMessage(): Promise<void> {
    // String AdditionMessage = uIMapTow.towVendorEntry.uIBottomLeftSideStatusBar.getText();
    // verify.ExpectedValueIsTrue(AdditionMessage.contains("1002 - Addition Successful"));
  }

  async verify1003UpdateSuccessfulFooterMessage(): Promise<void> {
    // objectIdentification.manualIdentify.verifyUpdateSuccessful();
    // //			String AdditionMessage = uIMapTow.towVendorEntry.uIBottomLeftSideStatusBar.getText();
    // //			verify.ExpectedValueIsTrue(AdditionMessage.contains("1003 - Update Successful"));
  }

  async verify1051AreaAsignmentAckMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage(
    // "(1051) Updated data exists in the Area Assignment Tab. You must save or reset.");
  }

  async verify1051PhoneNumberAckMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage(
    // "(1051) Updated data exists in the Phone Number Tab. You must save or reset.");
  }

  async verify1051AuthDriversAckMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage(
    // "(1051) Updated data exists in the Auth Drivers Tab. You must save or reset.");
  }

  async verifyAtPositionInRotationPositionFieldGreyOut(): Promise<void> {
    // String position = objectIdentification.manualIdentify
    // .getDropDwonSelectedItem(uIMapTow.towVendorEntry.uIRotationPOsitionComboBox); // Updated by Abi
    // // String rotaPosition =Randomized.insertStringByIndex(position,3," - 1");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("PositionNo"), position);
    // verify.ExpectedValueIsTrue(!uIMapTow.towVendorEntry.uIRotationPOsitionComboBox.isEnabled());
  }

  async unCheckInactiveCheckbox(): Promise<void> {
    // if (uIMapTow.towVendorEntry.uIInactiveCheckbox.isSelected())
    // ;
    // uIMapTow.towVendorEntry.uIInactiveCheckbox.click();
  }

  async clickEquipmentTab(): Promise<void> {
    // uIMapTow.towVendorEntry.uIEquipmentTab.click();
  }

  async clickPhoneNumberTab(): Promise<void> {
    // uIMapTow.towVendorEntry.uIPhoneNumberTab.click();
  }

  async clickAreaAssignmentTab(): Promise<void> {
    // uIMapTow.towVendorEntry.uIAreaAssignmentTab.click();
  }

  async clickAreaZoneAssignmentTab(): Promise<void> {
    // uIMapTow.towVendorEntry.uIAreaZoneAssignmentTab.click();
  }

  async clickAuthDriversTab(): Promise<void> {
    // uIMapTow.towVendorEntry.uIAuthDriversTab.click();
  }

  async enterAtOfficeContact(): Promise<void> {
    // uIMapTow.towVendorEntry.uIOfficeContactEdit.click();
    // uIMapTow.towVendorEntry.uIOfficeContactEdit.sendKeys(BaseData.getTowModuleValue("OfficeContact"));
  }

  async verifyAtLastName(): Promise<void> {
    // String attribute = uIMapTow.towVendorEntry.uILastNameEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(attribute.contains(BaseData.getTowModuleValue("LastName")));
  }

  async saveNClose(): Promise<void> {
    // uIMapTow.towVendorEntry.uISaveNCloseButton.click();
    // popup.confirm.yes();
  }

  async enterAtVendorCode(): Promise<void> {
    // uIMapTow.towVendorEntry.uIVendorCodeEdit.sendKeys(BaseData.getTowModuleValue("VendorCode"));
    // uIMapTow.towVendorEntry.uIVendorCodeEdit.sendKeys(Keys.TAB);
  }

  async enterAtTowVendorNameID(): Promise<void> {
    // uIMapTow.towVendorEntry.uITowVendorNameTypeEdit
    // .sendKeys(BaseData.getTowModuleValue("NameID").substring(0, 1));
    // uIMapTow.towVendorEntry.uITowVendorNameIDEdit.sendKeys(BaseData.getTowModuleValue("NameID").substring(2));
    // uIMapTow.towVendorEntry.uITowVendorNameIDEdit.sendKeys(Keys.TAB);
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapTow.towVendorEntry.uIPrintIcon.click();
  }

  async enterAtOfficeContactNo(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapTow.towVendorEntry.uIOfficeContactEdit.click();
    // uIMapTow.towVendorEntry.uIOfficeContactEdit.sendKeys(BaseData.getTowModuleValue("OfficeContactNo"));
  }

  async verify30111PhoneNumAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage(
    // "(30111) Updated data exists in the Phone Number Tab. You must Add/Update or Clear.");
  }

  async verify30111AreaZoneAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage(
    // "(30111) Updated data exists in the Area/Zone Assignment Tab. You must Add/Update or Clear.");
  }

  async verify30111AuthDriverAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage(
    // "(30111) Updated data exists in the Auth Drivers Tab. You must Add/Update or Clear.");
  }

  async verify30111EquipmentTabAcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage(
    // "(30111) Updated data exists in the Equipment Tab. You must Add/Update or Clear.");
  }

  async verify1019DuplicationAcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1019) Duplication Of Data Found");
  }

  async closeScreen(): Promise<void> {
    // Playback.driver.close();
  }

  async verifyRecordMarkedPopupNotExist(): Promise<void> {
    // boolean windowExist = objectIdentification.windowHandle.windowExist("Acknowledge");
    // if (windowExist == true) {
    // popup.switchToAcknowledge();
    // String popupText = uIMapPopup.acknowledgeWindow.uIErrorInfoTextEdit.getText();
    // verify.ExpectedPropertyValueIsNotEqual("(6)Record marked for deletion",
    // popupText,
    // "Popup Appeared -> " + popupText);
    // verify.ExpectedValueIsFalse(windowExist, "Unwanted Acknowledge popup appeared --> "
    // + popupText );
    // } else {
    // verify.ExpectedValueIsFalse(windowExist);
  }

  async clickResetIcon(): Promise<void> {
    // uIMapTow.towVendorEntry.uIResetIcon.click();
  }

}

export class EquipmentPage {
  readonly page: Page;
  readonly equipmentQuantityEdit: Locator;
  readonly equipmentCodeEdit: Locator;
  readonly inactiveCheckbox: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly equipmentTable: Locator;
  readonly updateButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.equipmentQuantityEdit = page.locator('#tabVendor_tmpl0_ctrlUsrEquip_txtQuan');
    this.equipmentCodeEdit = page.locator('#tabVendor_tmpl0_ctrlUsrEquip_lupEquip_CodeValue');
    this.inactiveCheckbox = page.locator('#tabVendor_tmpl0_ctrlUsrEquip_chkIsActive');
    this.addButton = page.locator('#tabVendor_tmpl0_ctrlUsrEquip_imgAdd');
    this.clearButton = page.locator('#tabVendor_tmpl0_ctrlUsrEquip_imgClear');
    this.equipmentTable = page.locator('#tabVendor_tmpl0_ctrlUsrEquip_grdEquipments');
    this.updateButton = page.locator("//input[contains(@src,\'UpdateData\')]");
  }

  async enterTowEquipmentQuantityAs1(): Promise<void> {
    // uIMapTow.towVendorEntry.equipment.uIEquipmentQuantityEdit.sendKeys("1");
  }

  async enterTowEquipmentQuantityAs2(): Promise<void> {
    // uIMapTow.towVendorEntry.equipment.uIEquipmentQuantityEdit.sendKeys("2");
  }

  async enterCodeAs01(): Promise<void> {
    // uIMapTow.towVendorEntry.equipment.uIEquipmentCodeEdit.sendKeys("01");
  }

  async enterCodeAs02(): Promise<void> {
    // uIMapTow.towVendorEntry.equipment.uIEquipmentCodeEdit.sendKeys("02");
  }

  async clickAddButton(): Promise<void> {
    // uIMapTow.towVendorEntry.equipment.uIAddButton.click();
  }

  async clickClearButton(): Promise<void> {
    // uIMapTow.towVendorEntry.equipment.uIClearButton.click();
  }

  async verify1019DuplicationDataFoundAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1019) Duplication Of Data Found");
  }

  async clickInactiveCheckbox(): Promise<void> {
    // uIMapTow.towVendorEntry.equipment.uIInactiveCheckbox.click();
  }

  async verifyInactiveDateAsCurrentDateInGridByEquipmentCode(): Promise<void> {
    // WebElement code = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapTow.towVendorEntry.equipment.uIEquipmentTable, "02");
    // WebElement inactiveDate = objectIdentification.manualIdentify
    // .getGridCell(uIMapTow.towVendorEntry.equipment.uIEquipmentTable, code, "Inactive");
    // verify.ExpectedValueIsTrue(inactiveDate.getText().contains(Randomized.getCurrentDate()));
  }

  async selectAtCodeInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapTow.towVendorEntry.equipment.uIEquipmentTable, BaseData.getTowModuleValue("Code"));
  }

  async verifyUpdateButtonIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(
    // uIMapTow.towVendorEntry.equipment.uIAddButton.getAttribute("src").contains("UpdateData"),
    // "Update Button is not Displayed --> ");
  }

  async clickUpdateButton(): Promise<void> {
    // uIMapTow.towVendorEntry.equipment.uIUpdateButton.click();
  }

  async enterAtCode(): Promise<void> {
    // uIMapTow.towVendorEntry.equipment.uIEquipmentCodeEdit.sendKeys(BaseData.getTowModuleValue("Code"));
    // uIMapTow.towVendorEntry.equipment.uIEquipmentCodeEdit.sendKeys(Keys.TAB);
  }

  async verifyAtPositionByEquipment(i: number): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridCell(uIMapTow.towVendorEntry.equipment.uIEquipmentTable,
    // BaseData.getTowModuleValue("Equipment" + i), "Pos")
    // .getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("Position" + i), text);
  }

}

export class AreaAssignmentPage {
  readonly page: Page;
  readonly patrolAreaComboBox: Locator;
  readonly inactiveCheckbox: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly towZoneGrid: Locator;
  readonly updateButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.patrolAreaComboBox = page.locator('#tabVendor_tmpl2_ctrlUsrAreaAssign_cddPatrolArea_DropDown');
    this.inactiveCheckbox = page.locator('#tabVendor_tmpl2_ctrlUsrAreaAssign_chkIsActive');
    this.addButton = page.locator('#tabVendor_tmpl2_ctrlUsrAreaAssign_imgAdd');
    this.clearButton = page.locator('#tabVendor_tmpl2_ctrlUsrAreaAssign_imgClear');
    this.towZoneGrid = page.locator('#tabVendor_tmpl2_ctrlUsrAreaAssign_grdAssign');
    this.updateButton = page.locator("//input[contains(@src,\'UpdateData\')]");
  }

  async selectAreaAsPatrolArea1(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapTow.towVendorEntry.areaAssignment.uIPatrolAreaComboBox, "Tow Area 1");
  }

  async selectAtTowZone(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapTow.towVendorEntry.areaAssignment.uIPatrolAreaComboBox, BaseData.getTowModuleValue("TowZone"));
  }

  async selectAreaAsPatrolArea2(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(
    // uIMapTow.towVendorEntry.areaAssignment.uIPatrolAreaComboBox, BaseData.getTowModuleValue("TowZone"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapTow.towVendorEntry.areaAssignment.uIAddButton.click();
  }

  async verify1019DuplicationDataFoundAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1019) Duplication Of Data Found");
  }

  async verify1019DuplicationDataFoundAckMsgFor45(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1019)Duplication Of Data Found");
  }

  async clickClearButton(): Promise<void> {
    // uIMapTow.towVendorEntry.areaAssignment.uIClearButton.click();
  }

  async verifyTowZoneInGrid(): Promise<void> {
    // String Towzone = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapTow.towVendorEntry.areaAssignment.uITowZoneGrid,
    // BaseData.getTowModuleValue("AssignedZone"))
    // .getText();
    // System.out.println(Towzone);
    // verify.ExpectedPropertyValueIsEqual(Towzone, BaseData.getTowModuleValue("AssignedZone"));
  }

  async verifyCodeIdShouldNotAdded(): Promise<void> {
    // int rowCount = objectIdentification.manualIdentify.getGridTableRowsCount(uIMapTow.towVendorEntry.areaAssignment.uITowZoneGrid);
    // System.out.println(rowCount);
    // if(rowCount>0) {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapTow.towVendorEntry.areaAssignment.uITowZoneGrid,
    // "Patrol Area");
    // System.out.println(gridTableColumnValues);
    // if (gridTableColumnValues.contains("--Add 2066 --")) {
    // switchToTowVendorEntry();
    // towVendorEntry.save();
    // switchToTowVendorEntry();
    // towVendorEntry.clickEquipmentTab();
    // else {
    // switchToTowVendorEntry();
    // towVendorEntry.clickSaveButton();
    // popup.acknowledge
    // .okWithExpectedMessage("(30111)Updated data exists in the Area/Zone Assignment Tab. You must Add/Update or Clear.");
  }

  async verify7100RequiredEntriesMissingAckMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(7100)Required entries are missing");
  }

  async selectAtTowZoneInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapTow.towVendorEntry.areaAssignment.uITowZoneGrid, BaseData.getTowModuleValue("TowZone"));
  }

  async verifyUpdateButtonIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towVendorEntry.areaAssignment.uIUpdateButton.isDisplayed(),
    // "Update Button is not Displayed --> ");
  }

  async clickUpdateButton(): Promise<void> {
    // uIMapTow.towVendorEntry.areaAssignment.uIUpdateButton.click();
  }

  async selectAtPatrolArea(jsonIndex: number): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapTow.towVendorEntry.areaAssignment.uIPatrolAreaComboBox, BaseData.getTowModuleValue("PatrolArea"+jsonIndex));
  }

  async verifyAtPatrolAreaInGrid(jsonIndex: number): Promise<void> {
    // String patrolArea = objectIdentification.manualIdentify.getGridCell(uIMapTow.towVendorEntry.areaAssignment.uITowZoneGrid, BaseData.getTowModuleValue("PatrolArea"+jsonIndex)).getText();
    // verify.ExpectedPropertyValueIsEqual( BaseData.getTowModuleValue("PatrolArea"+jsonIndex),patrolArea,"Patrol Area is not same as expected -->");
  }

  async verify1019AcknowledgePopup(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1019) Duplication of data found");
  }

}

export class AuthDriversPage {
  readonly page: Page;
  readonly driverLastNameEdit: Locator;
  readonly driverFirstNameEdit: Locator;
  readonly employedDateEdit: Locator;
  readonly terminatedDateEdit: Locator;
  readonly showAllCheckBox: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly authDriverTable: Locator;
  readonly deleteIconGridButton: Locator;
  readonly driverNameTypeEdit: Locator;
  readonly driverNameIDEdit: Locator;
  readonly updateButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.driverLastNameEdit = page.locator('#tabVendor_tmpl3_ctrlUsrTowDriver_nmcDriver_LastName');
    this.driverFirstNameEdit = page.locator('#tabVendor_tmpl3_ctrlUsrTowDriver_nmcDriver_FirstName');
    this.employedDateEdit = page.locator('#tabVendor_tmpl3_ctrlUsrTowDriver_dtEmployed_KPIDttmCtrl');
    this.terminatedDateEdit = page.locator('#tabVendor_tmpl3_ctrlUsrTowDriver_dtTerminated_KPIDttmCtrl');
    this.showAllCheckBox = page.locator('#tabVendor_tmpl3_ctrlUsrTowDriver_chkShowAll');
    this.addButton = page.locator('#tabVendor_tmpl3_ctrlUsrTowDriver_imgAdd');
    this.clearButton = page.locator('#tabVendor_tmpl3_ctrlUsrTowDriver_imgClear');
    this.authDriverTable = page.locator('#tabVendor_tmpl3_ctrlUsrTowDriver_grdTowDriver');
    this.deleteIconGridButton = page.locator("//div[@id=\'tabVendor_tmpl3_ctrlUsrTowDriver_grdTowDriver\']//td[@class=\'Delete_Icon_Style\']");
    this.driverNameTypeEdit = page.locator('#tabVendor_tmpl3_ctrlUsrTowDriver_nmcDriver_NameType');
    this.driverNameIDEdit = page.locator('#tabVendor_tmpl3_ctrlUsrTowDriver_nmcDriver_NameTypeID');
    this.updateButton = page.locator("//input[contains(@src,\'UpdateData\')]");
  }

  async enterAtDriverLastName(): Promise<void> {
    // uIMapTow.towVendorEntry.authDrivers.uIDriverLastNameEdit
    // .sendKeys(BaseData.getTowModuleValue("DriverLastName"));
  }

  async enterAtDriverFirstName(): Promise<void> {
    // uIMapTow.towVendorEntry.authDrivers.uIDriverFirstNameEdit
    // .sendKeys(BaseData.getTowModuleValue("DriverFirstName"));
    // uIMapTow.towVendorEntry.authDrivers.uIDriverFirstNameEdit.sendKeys(Keys.TAB);
  }

  async selectName(): Promise<void> {
    // // Names.NameSearchHelpWindow.SelectName();
  }

  async enterEmployedAsCurrrentDate(): Promise<void> {
    // uIMapTow.towVendorEntry.authDrivers.uIEmployedDateEdit.sendKeys(Randomized.getCurrentDate());
  }

  async enterEmployeedDateAs40DaysPreviousFromCurrentDate(): Promise<void> {
    // uIMapTow.towVendorEntry.authDrivers.uIEmployedDateEdit
    // .sendKeys(Randomized.getPreviousDate(40, "MM/dd/yyyy"));
  }

  async enterTerminatedDateAs2DaysPreviousFromCurrentDate(): Promise<void> {
    // uIMapTow.towVendorEntry.authDrivers.uITerminatedDateEdit
    // .sendKeys(Randomized.getPreviousDate(2, "MM/dd/yyyy"));
  }

  async clickAddButton(): Promise<void> {
    // uIMapTow.towVendorEntry.authDrivers.uIAddButton.click();
  }

  async verify1019DuplicationDataFoundAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(1019) Duplication Of Data Found");
  }

  async clickClearButton(): Promise<void> {
    // uIMapTow.towVendorEntry.authDrivers.uIClearButton.click();
  }

  async clickShowAllCheckbox(): Promise<void> {
    // uIMapTow.towVendorEntry.authDrivers.uIShowAllCheckBox.click();
  }

  async verifyAtTerminatedEmployeeInGrid(): Promise<void> {
    // Playback.gridLoadThreadWait();
    // WebElement terminated = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapTow.towVendorEntry.authDrivers.uIAuthDriverTable,
    // BaseData.getTowModuleValue("TerminatedEmployee"));
    // WebElement terEmployee = objectIdentification.manualIdentify
    // .getGridCell(uIMapTow.towVendorEntry.authDrivers.uIAuthDriverTable, terminated, "Name");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("TerminatedEmployee"),
    // terEmployee.getText());
  }

  async clickDeleteIconInGrid(): Promise<void> {
    // WebElement name = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapTow.towVendorEntry.authDrivers.uIAuthDriverTable,
    // BaseData.getTowModuleValue("TerminatedEmployee"));
    // WebElement deleteName = objectIdentification.manualIdentify
    // .getGridCell(uIMapTow.towVendorEntry.authDrivers.uIDeleteIconGridButton, name, "X");
    // deleteName.click();
  }

  async verifyConfirmDeleteMessage(): Promise<void> {
    // if (Playback.browserType.contains("Chrome"))
    // popup.confirm.yesWithExpectedMessage("(4) Do you really want to delete?");
    // else
    // popup.confirm.yesWithExpectedMessage("(4) Do you really want to delete?");
  }

  async verifyAtDeletedEmployeeNotFoundInGrid(): Promise<void> {
    // List<WebElement> names = objectIdentification.manualIdentify
    // .getGridTableColumnCells(uIMapTow.towVendorEntry.authDrivers.uIAuthDriverTable, "Name");
    // for (WebElement name : names)
    // verify.ExpectedValueIsFalse(name.getText().contains(BaseData.getTowModuleValue("TerminatedEmployee")));
  }

  async verifyAtTerminatedEmployeeNotInGrid(): Promise<void> {
    // List<WebElement> employees = objectIdentification.manualIdentify.getGridTableColumnCells(uIMapTow.towVendorEntry.authDrivers.uIAuthDriverTable, "Name");
    // for(WebElement employee:employees) {
    // verify.ExpectedValueIsFalse(employee.getText().contains(BaseData.getTowModuleValue("TerminatedEmployee")));
  }

  async enterAtDriverNameID(): Promise<void> {
    // uIMapTow.towVendorEntry.authDrivers.uIDriverNameTypeEdit
    // .sendKeys(BaseData.getTowModuleValue("NameID").substring(0, 1));
    // uIMapTow.towVendorEntry.authDrivers.uIDriverNameIDEdit
    // .sendKeys(BaseData.getTowModuleValue("NameID").substring(1));
    // uIMapTow.towVendorEntry.authDrivers.uIDriverNameIDEdit.sendKeys(Keys.TAB);
  }

  async selectAtNameInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapTow.towVendorEntry.authDrivers.uIAuthDriverTable, BaseData.getTowModuleValue("Name"));
  }

  async verifyUpdateButtonIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towVendorEntry.authDrivers.uIUpdateButton.isDisplayed(),
    // "Update Button is not Displayed --> ");
  }

  async clickUpdateButton(): Promise<void> {
    // uIMapTow.towVendorEntry.authDrivers.uIUpdateButton.click();
  }

  async enterAtDriverID(): Promise<void> {
    // uIMapTow.towVendorEntry.authDrivers.uIDriverNameTypeEdit
    // .sendKeys(BaseData.getTowModuleValue("DriverID").substring(0, 1));
    // uIMapTow.towVendorEntry.authDrivers.uIDriverNameIDEdit
    // .sendKeys(BaseData.getTowModuleValue("DriverID").substring(1));
    // uIMapTow.towVendorEntry.authDrivers.uIDriverNameIDEdit.sendKeys(Keys.TAB);
  }

  async verifyAtDriverIDType(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("DriverIDType"),
    // uIMapTow.towVendorEntry.authDrivers.uIDriverNameTypeEdit.getAttribute("value"));
  }

  async clickDeleteColumnHeaderInGrid(): Promise<void> {
    // try {
    // objectIdentification.manualIdentify
    // .selectGridHeaderColumnNameWithSpan(uIMapTow.towVendorEntry.authDrivers.uIAuthDriverTable, "X");
    // } catch(ElementNotInteractableException e) {
    // System.out.println("X Header clicked");
  }

}

export class PhoneNumberPage {
  readonly page: Page;
  readonly phoneComboBox: Locator;
  readonly phoneEdit: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly phoneNumberGrid: Locator;
  readonly updateButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.phoneComboBox = page.locator('#tabVendor_tmpl1_ctrlUsrPhone_cstPhoneNoP_PhoneType_DropDown');
    this.phoneEdit = page.locator('#tabVendor_tmpl1_ctrlUsrPhone_cstPhoneNoP_PhoneNumber');
    this.addButton = page.locator('#tabVendor_tmpl1_ctrlUsrPhone_imgAdd');
    this.clearButton = page.locator('#tabVendor_tmpl1_ctrlUsrPhone_imgClear');
    this.phoneNumberGrid = page.locator('#tabVendor_tmpl1_ctrlUsrPhone_grdPhone');
    this.updateButton = page.locator("//input[contains(@src,\'UpdateData\')]");
  }

  async selectPhoneAsHome(): Promise<void> {
    // objectIdentification.manualIdentify
    // .selectDropDownOption(uIMapTow.towVendorEntry.phoneNumber.uIPhoneComboBox, "H - Home");
    // uIMapTow.towVendorEntry.phoneNumber.uIPhoneComboBox.sendKeys(Keys.TAB);
  }

  async enterThreeDigit(): Promise<void> {
    // uIMapTow.towVendorEntry.phoneNumber.uIPhoneEdit.click();
    // uIMapTow.towVendorEntry.phoneNumber.uIPhoneEdit.sendKeys(String.valueOf(Randomized.getRandomNumber(3)));
  }

  async clickAddButton(): Promise<void> {
    // uIMapTow.towVendorEntry.phoneNumber.uIAddButton.click();
  }

  async verify5037InvalidPhoneNumberAckMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(5037) Invalid phone number");
  }

  async clearPhoneNumber(): Promise<void> {
    // uIMapTow.towVendorEntry.phoneNumber.uIPhoneEdit.click();
    // uIMapTow.towVendorEntry.phoneNumber.uIPhoneEdit.clear();
  }

  async enterAtPhoneNumber(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // objectIdentification.manualIdentify.setFocusElement(uIMapTow.towVendorEntry.phoneNumber.uIPhoneEdit);
    // objectIdentification.actionBuilder.SendKeys(uIMapTow.towVendorEntry.phoneNumber.uIPhoneEdit,
    // BaseData.getTowModuleValue("PhoneNo"));
  }

  async verifyAt5015ContactInfoAlreadyExistAckMsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage(
    // "(5015) Contact Info already exists H " + BaseData.getTowModuleValue("PhoneNo"));
  }

  async clickClearButton(): Promise<void> {
    // uIMapTow.towVendorEntry.phoneNumber.uIClearButton.click();
  }

  async selectAtPhoneTypeInGrid(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
    // uIMapTow.towVendorEntry.phoneNumber.uIPhoneNumberGrid, BaseData.getTowModuleValue("PhoneType"));
  }

  async verifyUpdateButtonIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towVendorEntry.phoneNumber.uIUpdateButton.isDisplayed(),
    // "Update Button is not Displayed --> ");
  }

  async clickUpdateButton(): Promise<void> {
    // uIMapTow.towVendorEntry.phoneNumber.uIUpdateButton.click();
  }

  async deleteAtPhoneNoInGridWithConfirmation(): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
    // uIMapTow.towVendorEntry.phoneNumber.uIPhoneNumberGrid, BaseData.getTowModuleValue("PhoneNo"));
    // popup.confirm.yesWithExpectedMessage("(4) Do you really want to delete?");
  }

  async clickDeleteColumnHeaderInGrid(): Promise<void> {
    // try {
    // objectIdentification.manualIdentify
    // .selectGridHeaderColumnNameWithSpan(uIMapTow.towVendorEntry.phoneNumber.uIPhoneNumberGrid, "X");
    // } catch(ElementNotInteractableException e) {
    // System.out.println("X Header clicked");
  }

  async clickAtDeletePhoneNumberInGrid(jsonIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(uIMapTow.towVendorEntry.phoneNumber.uIPhoneNumberGrid, BaseData.getTowModuleValue("PhoneNo"+jsonIndex));
  }

  async clickNoInDeletePopup(): Promise<void> {
    // popup.confirm.noWithExpectedMessage("(4) Do you really want to delete?");
  }

  async clickAtHeaderOnGridByColumnName(jsonIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.selectGridHeaderColumnName(uIMapTow.towVendorEntry.phoneNumber.uIPhoneNumberGrid, BaseData.getTowModuleValue("ColumnName"+jsonIndex));
  }

  async verifyDeletePopupNotOccurs(): Promise<void> {
    // popup.confirm.checkAlertIsPresentOrNot();
  }

  async clickOnHeaderXColumn(): Promise<void> {
    // Playback.driver.findElement(By.xpath("//div[@id='tabVendor_tmpl1_ctrlUsrPhone_grdPhone']//th//span[text()='X']")).click();
  }

}

export class TowScreenPage {
  readonly page: Page;
  readonly plateNumberEdit: Locator;
  readonly plateStateComboBox: Locator;
  readonly callYearEdit: Locator;
  readonly callNumberEdit: Locator;
  readonly towRequestDateFromEdit: Locator;
  readonly towRequestDateToEdit: Locator;
  readonly makeCodeEdit: Locator;
  readonly contractorComboBox: Locator;
  readonly ownerLastNameEdit: Locator;
  readonly ownerFirstNameEdit: Locator;
  readonly officerCodeEdit: Locator;
  readonly towTypeComboBox: Locator;
  readonly towReasonComboBox: Locator;
  readonly addNewButton: Locator;
  readonly searchButton: Locator;
  readonly backButton: Locator;
  readonly towedFromComboBox: Locator;
  readonly towedFromEdit: Locator;
  readonly towedFromPremiseEdit: Locator;
  readonly towedFromStreetEdit: Locator;
  readonly towedToComboBox: Locator;
  readonly towedToEdit: Locator;
  readonly towTable: Locator;
  readonly notReleasedOnlyCheckbox: Locator;
  readonly releasedCheckbox: Locator;
  readonly noPlateCheckbox: Locator;
  readonly holdStatusBar: Locator;
  readonly vinNoEdit: Locator;
  readonly holdReasonCheckbox: Locator;
  readonly holdReasonDropDown: Locator;
  readonly holdReasonDropDownInput: Locator;
  readonly towNoEdit: Locator;
  readonly resetButton: Locator;
  readonly towTypeEdit: Locator;
  readonly printIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.plateNumberEdit = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_txtPlateNbr');
    this.plateStateComboBox = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_cddState_DropDown');
    this.callYearEdit = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_nbrCallNumber_Year');
    this.callNumberEdit = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_nbrCallNumber_Number');
    this.towRequestDateFromEdit = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_dtStartDttm_KPIDttmCtrl');
    this.towRequestDateToEdit = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_cddState_DropDown');
    this.makeCodeEdit = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_lupMake_CodeValue');
    this.contractorComboBox = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_cddWrecker');
    this.ownerLastNameEdit = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_txtLastName');
    this.ownerFirstNameEdit = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_txtFirstName');
    this.officerCodeEdit = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_lupOfficer_CodeValue');
    this.towTypeComboBox = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_cddTowType_DropDown');
    this.towReasonComboBox = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_cddReason_DropDown');
    this.addNewButton = page.locator("//span[contains(text(),\'Add New\')]");
    this.searchButton = page.locator("//span[contains(text(),\'Search\')]");
    this.backButton = page.locator("//span[contains(text(),\'Back\')]");
    this.towedFromComboBox = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_adrTowedFrom_CddLocationType');
    this.towedFromEdit = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_adrTowedFrom_adrAddrsCtrl_txtFrom');
    this.towedFromPremiseEdit = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_adrTowedFrom_TxtStartPremise');
    this.towedFromStreetEdit = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_adrTowedFrom_TxtStreetName');
    this.towedToComboBox = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_adrTowedTo_CddLocationType');
    this.towedToEdit = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_adrTowedTo_adrAddrsCtrl_txtFrom');
    this.towTable = page.locator('#grdTow');
    this.notReleasedOnlyCheckbox = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_chkNotRlsd');
    this.releasedCheckbox = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_chkReleased');
    this.noPlateCheckbox = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_chkNoPlate');
    this.holdStatusBar = page.locator('#tdHold');
    this.vinNoEdit = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_txtVinNbr');
    this.holdReasonCheckbox = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_chkIsHold');
    this.holdReasonDropDown = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_radHoldReason_DropDown');
    this.holdReasonDropDownInput = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_radHoldReason_Input');
    this.towNoEdit = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_nbrTowNbr_Number');
    this.resetButton = page.locator("//span[contains(text(),\'Reset\')]");
    this.towTypeEdit = page.locator('#tabTowSrch_tmpl0_ctrlUsrTowBasic_nbrTowNbr_Year');
    this.printIcon = page.locator("(//img[@class=\'igdm_BlueThemeMenuItemHorizontalIcon \'])[1]");
  }

  async clickAddNewButton(): Promise<void> {
    // uIMapTow.towScreen.uIAddNewButton.click();
  }

  async enterAtPlateNo(): Promise<void> {
    // uIMapTow.towScreen.uIPlateNumberEdit.sendKeys(BaseData.getTowModuleValue("PlateNo").substring(0, 5));
    // uIMapTow.towScreen.uIPlateStateComboBox.sendKeys(BaseData.getTowModuleValue("PlateNo").substring(6));
  }

  async enterAtPlateNumber(): Promise<void> {
    // uIMapTow.towScreen.uIPlateNumberEdit.sendKeys(BaseData.getTowModuleValue("PlateNumber"));
  }

  async enterTowRequestedFromAsCurrentDate(): Promise<void> {
    // uIMapTow.towScreen.uITowRequestDateFromEdit.sendKeys(Randomized.getCurrentDate());
  }

  async enterTowRequestedToAsCurrentDate(): Promise<void> {
    // uIMapTow.towScreen.uITowRequestDateToEdit.sendKeys(Randomized.getCurrentDate());
  }

  async clickSearchButton(): Promise<void> {
    // uIMapTow.towScreen.uISearchButton.click();
  }

  async clickBackButton(): Promise<void> {
    // uIMapTow.towScreen.uIBackButton.click();
  }

  async selectRow(): Promise<void> {
    // objectIdentification.randomIdentify.selectRandomGridRow();
  }

  async clickRowByAtCallNo(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapTow.towScreen.uITowTable,
    // BaseData.getTowModuleValue("CallNo"));
  }

  async verifyAtCallNoTowRequestedDateAsCurrentDate(): Promise<void> {
    // WebElement row = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapTow.towScreen.uITowTable, BaseData.getTowModuleValue("CallNo"));
    // WebElement date = objectIdentification.manualIdentify.getGridCell(uIMapTow.towScreen.uITowTable, row,
    // "Tow Request Date");
    // //        verify.ExpectedPropertyValueIsEqual(Randomized.removeStringByIndexCount(Randomized.getCurrentDate(),6, 2), Randomized.removeCharAt(date.getText().toString(),8));
    // verify.ExpectedValueIsTrue(date.getText().contains(Randomized.getCurrentDate("MM/dd/yy")));
  }

  async selectAtContractor(): Promise<void> {
    // uIMapTow.towScreen.uIContractorComboBox.sendKeys(BaseData.getTowModuleValue("Contractor"));
  }

  async selectAtMake(): Promise<void> {
    // uIMapTow.towScreen.uIMakeCodeEdit.sendKeys(BaseData.getTowModuleValue("Make"));
  }

  async enterAtOfficer(): Promise<void> {
    // uIMapTow.towScreen.uIOfficerCodeEdit.sendKeys(BaseData.getTowModuleValue("Officer"));
  }

  async enterAtCallNo(): Promise<void> {
    // uIMapTow.towScreen.uICallYearEdit.sendKeys(BaseData.getTowModuleValue("CallNo").substring(0, 2));
    // uIMapTow.towScreen.uICallNumberEdit.sendKeys(BaseData.getTowModuleValue("CallNo").substring(3));
    // uIMapTow.towScreen.uICallNumberEdit.sendKeys(Keys.TAB);
  }

  async selectAtTowedFrom(): Promise<void> {
    // new Select(uIMapTow.towScreen.uITowedFromComboBox)
    // .selectByVisibleText(BaseData.getTowModuleValue("TowedFrom"));
  }

  async enterAtPremises(): Promise<void> {
    // uIMapTow.towScreen.uITowedFromPremiseEdit.sendKeys(BaseData.getTowModuleValue("Premise"));
  }

  async enterAtStreet(): Promise<void> {
    // uIMapTow.towScreen.uITowedFromStreetEdit.sendKeys(BaseData.getTowModuleValue("Street"));
  }

  async clickNotReleasedOnlyCheckbox(): Promise<void> {
    // uIMapTow.towScreen.uINotReleasedOnlyCheckbox.click();
  }

  async clickReleasedCheckbox(): Promise<void> {
    // uIMapTow.towScreen.uIReleasedCheckbox.click();
  }

  async clickNoPlateCheckbox(): Promise<void> {
    // uIMapTow.towScreen.uINoPlateCheckbox.click();
  }

  async verifyAtCallNoInGrid(rowIndex: number): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("CallNo"),
    // objectIdentification.manualIdentify.getGridCellInnerText(uIMapTow.towScreen.uITowTable, "Call#",
    // rowIndex));
  }

  async enterAtVinNo(): Promise<void> {
    // uIMapTow.towScreen.uIVinNoEdit.click();
    // uIMapTow.towScreen.uIVinNoEdit.sendKeys(BaseData.getTowModuleValue("VinNo"));
  }

  async clickHoldReasonCheckbox(): Promise<void> {
    // uIMapTow.towScreen.uIHoldReasonCheckbox.click();
  }

  async verifyHoldReaonCheckBoxIsSelected(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towScreen.uIHoldReasonCheckbox.isSelected());
  }

  async selectAtHoldReasonDropDown(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapTow.towScreen.uIHoldReasonDropDownInput.click();
    // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect(
    // uIMapTow.towScreen.uIHoldReasonDropDown, BaseData.getTowModuleValue("HoldReason"));
    // Playback.threadWait(1500);
  }

  async selectRowByAtTowNo(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapTow.towScreen.uITowTable,
    // BaseData.getTowModuleValue("TowNo"));
  }

  async verifyHoldCheckBoxSelected(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.release.uIHoldCheckbox.isSelected());
  }

  async verifyAtHoldReasonInGrid(rowIndex: number): Promise<void> {
    // objectIdentification.manualIdentify.getGridCellInnerText(uIMapTow.towScreen.uITowTable, "Reason", rowIndex);
  }

  async selectTowReasonAsCancel(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTow.towScreen.uITowReasonComboBox, "Cancel");
  }

  async verifyAtRowViewedAsGrayColor(): Promise<void> {
    // // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify.getGridRowByCellInnerText(uIMapTow.towScreen.uITowTable,
    // // BaseData.getTowModuleValue("TowNo")).getAttribute("class").contains("gridrowclrGray"));
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapTow.towScreen.uITowTable, BaseData.getTowModuleValue("TowNo"));
    // String cssValue = gridRowByCellInnerText.getCssValue("color");
    // System.out.println(cssValue);
    // verify.ExpectedValueIsTrue(cssValue.contains("rgba(128, 128, 128, 1)"));
  }

  async verifyAtTowNoInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapTow.towScreen.uITowTable, BaseData.getTowModuleValue("TowNo"))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getTowModuleValue("TowNo")));
  }

  async verifyAtHoldInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapTow.towScreen.uITowTable, BaseData.getTowModuleValue("Hold"))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getTowModuleValue("Hold")));
  }

  async enterAtTowNo(): Promise<void> {
    // uIMapTow.towScreen.uITowTypeEdit.sendKeys(BaseData.getTowModuleValue("TowNo").substring(0, 2));
    // uIMapTow.towScreen.uITowNoEdit.sendKeys(BaseData.getTowModuleValue("TowNo").substring(3));
    // uIMapTow.towScreen.uITowNoEdit.sendKeys(Keys.TAB);
  }

  async clickResetButton(): Promise<void> {
    // uIMapTow.towScreen.uIResetButton.click();
  }

  async verifyAtRowViewedAsGrayColorUsingCaseNo(): Promise<void> {
    // // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify.getGridRowByCellInnerText(uIMapTow.towScreen.uITowTable,
    // // BaseData.getTowModuleValue("TowNo")).getAttribute("class").contains("gridrowclrGray"));
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapTow.towScreen.uITowTable, BaseData.getTowModuleValue("CaseNo"));
    // String cssValue = gridRowByCellInnerText.getCssValue("color");
    // System.out.println(cssValue);
    // verify.ExpectedValueIsTrue(cssValue.contains("rgba(128, 128, 128, 1)"));
  }

  async verifyAtActiveTowNoRowViewedAsGrayColor(TowNo: string): Promise<void> {
    // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapTow.towScreen.uITowTable, TowNo);
    // String cssValue = gridRowByCellInnerText.getCssValue("color");
    // System.out.println(cssValue);
    // verify.ExpectedValueIsTrue(cssValue.contains("rgba(128, 128, 128, 1)"));
  }

  async selectRowByAtTowNo(towNo: string): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapTow.towScreen.uITowTable, towNo);
  }

  async verifyAtDescribtion(Row: number): Promise<void> {
    // String gridCellValue = objectIdentification.manualIdentify
    // .getGridCell(uIMapTow.towScreen.uITowTable, "Description", Row).getText();
    // verify.ExpectedPropertyValueIsEqual(gridCellValue, BaseData.getTowModuleValue("VINno"));
  }

  async verifyNoRecordFoundAck(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("1011 - No Record Found");
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapTow.towScreen.uIPrintIcon.click();
  }

  async selectAtTowNoUsingJSONReadFile(testCaseId: string): Promise<void> {
    // String towYear = BaseData.readJson(testCaseId, "TowYear");
    // String towNo = BaseData.readJson(testCaseId, "TowNumber");
    // String towNumber = towYear + "-" + towNo;
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapTow.towScreen.uITowTable, towNumber);
  }

  async verifyAtCallNoInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapTow.towScreen.uITowTable, BaseData.getTowModuleValue("CallNo"))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getTowModuleValue("CallNo")));
  }

  async verifyAtDescriptionInGrid(): Promise<void> {
    // String text = objectIdentification.manualIdentify
    // .getGridRowByCellInnerText(uIMapTow.towScreen.uITowTable, BaseData.getTowModuleValue("Description"))
    // .getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getTowModuleValue("Description")));
  }

  async verifyAtTowNoUsingJSONReadFileInGrid(testCaseId: string): Promise<void> {
    // String towYear = BaseData.readJson(testCaseId, "TowYear");
    // String towNo = BaseData.readJson(testCaseId, "TowNumber");
    // String towNumber = towYear + "-" + towNo;
    // String TowNumber = objectIdentification.manualIdentify.getGridCell(uIMapTow.towScreen.uITowTable,towNumber).getText();
    // verify.ExpectedPropertyValueIsEqual(towNumber, TowNumber);
  }

}

export class TowEntryPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly refreshButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly callYearEdit: Locator;
  readonly callNumberEdit: Locator;
  readonly plateNumberEdit: Locator;
  readonly plateStateComboBox: Locator;
  readonly noPlateCheckbox: Locator;
  readonly callDateEdit: Locator;
  readonly yearEdit: Locator;
  readonly makeEdit2: Locator;
  readonly modelEdit2: Locator;
  readonly colorEdit: Locator;
  readonly yearEdit2: Locator;
  readonly makeEdit: Locator;
  readonly modelEdit: Locator;
  readonly colorEdit2: Locator;
  readonly towTab: Locator;
  readonly ownerTab: Locator;
  readonly attachmentsTab: Locator;
  readonly driverTab: Locator;
  readonly damageMissingTab: Locator;
  readonly propertyInventoryTab: Locator;
  readonly forfeitureTab: Locator;
  readonly releaseTab: Locator;
  readonly dispositionTab: Locator;
  readonly notesTab: Locator;
  readonly reasonEdit: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly callInfoIcon: Locator;
  readonly caseNoYear: Locator;
  readonly caseNo: Locator;
  readonly callTimeEdit: Locator;
  readonly equipmentUsedDropdown: Locator;
  readonly wreckerDropdown: Locator;
  readonly towRequestDate: Locator;
  readonly colorDropDown: Locator;
  readonly vINEdit: Locator;
  readonly styleEdit: Locator;
  readonly locationOfVehicleKeyDropDown: Locator;
  readonly towNoYearEdit: Locator;
  readonly towNoEdit: Locator;
  readonly createCallCheckBox: Locator;
  readonly plateVinInfoIcon: Locator;
  readonly printIcon: Locator;
  readonly jurisComboBox: Locator;
  readonly plateStateInfoIcon: Locator;
  readonly caseInfoInfoIcon: Locator;
  readonly notForPublicLabel: Locator;
  readonly callLookupIcon: Locator;
  readonly qaFormsTab: Locator;
  readonly refuseButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdSave');
    this.refreshButton = page.locator('#cmdRefresh');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.callYearEdit = page.locator('#nbrCallNumber_Year');
    this.callNumberEdit = page.locator('#nbrCallNumber_Number');
    this.plateNumberEdit = page.locator('#plcVehID_PlateNumber');
    this.plateStateComboBox = page.locator('#plcVehID_KPIState');
    this.noPlateCheckbox = page.locator('#chkNoPlate');
    this.callDateEdit = page.locator('#dttmCall_Date_KPIDttmCtrl');
    this.yearEdit = page.locator('#txtYear1');
    this.makeEdit2 = page.locator('#lupMake_CodeValue');
    this.modelEdit2 = page.locator('#lupModel_CodeValue');
    this.colorEdit = page.locator('#cddColor1_DropDown');
    this.yearEdit2 = page.locator('#txtYear2');
    this.makeEdit = page.locator('#txtMake');
    this.modelEdit = page.locator('#txtModel');
    this.colorEdit2 = page.locator('#cddColor2_DropDown');
    this.towTab = page.locator("//span[text()=\'Tow\']");
    this.ownerTab = page.locator("//span[contains(text(),\'Owner\')]");
    this.attachmentsTab = page.locator("//span[contains(text(),\'Attachments\')]");
    this.driverTab = page.locator("//span[text()=\'Driver\']");
    this.damageMissingTab = page.locator("//span[contains(text(),\'Damage/Missing\')]");
    this.propertyInventoryTab = page.locator("//span[contains(text(),\'Property Inventory\')]");
    this.forfeitureTab = page.locator("//span[contains(text(),\'Forfeiture\')]");
    this.releaseTab = page.locator("//span[contains(text(),\'Release\')]");
    this.dispositionTab = page.locator("//span[contains(text(),\'Disposition\')]");
    this.notesTab = page.locator("//span[contains(text(),\'Notes\')]");
    this.reasonEdit = page.locator('#txtHoldReason');
    this.bottomLeftSideStatusBar = page.locator("//td[@class = \'statusBar\']//b");
    this.callInfoIcon = page.locator('#nbrCallNumber_imgBtn');
    this.caseNoYear = page.locator('#nbrCaseNumber_Year');
    this.caseNo = page.locator('#nbrCaseNumber_Number');
    this.callTimeEdit = page.locator("//table[@id=\'dttmCall_Time\']//input");
    this.equipmentUsedDropdown = page.locator('#tabTow_tmpl0_ctrlUsrTow_cddEquipType_DropDown');
    this.wreckerDropdown = page.locator('#tabTow_tmpl0_ctrlUsrTow_lstVendor');
    this.towRequestDate = page.locator('#tabTow_tmpl0_ctrlUsrTow_dtTowReqDttm_Date_KPIDttmCtrl');
    this.colorDropDown = page.locator('#cddColor1_DropDown');
    this.vINEdit = page.locator('#txtVIN2');
    this.styleEdit = page.locator('#lupStyle_CodeValue');
    this.locationOfVehicleKeyDropDown = page.locator('#cddLocationKey1_DropDown');
    this.towNoYearEdit = page.locator('#nbrTowNumber_Year');
    this.towNoEdit = page.locator('#nbrTowNumber_Number');
    this.createCallCheckBox = page.locator('#chkCreateCall');
    this.plateVinInfoIcon = page.locator('#plcVehID_imgBtn');
    this.printIcon = page.locator('#cmdPrint');
    this.jurisComboBox = page.locator('#lstJuris');
    this.plateStateInfoIcon = page.locator('#plcVehID_imgBtn');
    this.caseInfoInfoIcon = page.locator('#nbrCaseNumber_imgBtn');
    this.notForPublicLabel = page.locator('#lblNotForPublic');
    this.callLookupIcon = page.locator('#nbrCallNumber_imgBtn');
    this.qaFormsTab = page.locator("//span[contains(text(),\'QA Forms\')]");
    this.refuseButton = page.locator('#tabTow_tmpl0_ctrlUsrTow_cmdRefuse');
  }

  async clickSaveButton(): Promise<void> {
    // uIMapTow.towEntry.uISaveButton.click();
  }

  async clickRefreshButton(): Promise<void> {
    // uIMapTow.towEntry.uIRefreshButton.click();
  }

  async clickNoPlateCheckbox(): Promise<void> {
    // uIMapTow.towEntry.uINoPlateCheckbox.click();
  }

  async verify7039EnterCallAckMsg(): Promise<void> {
    // // popup.acknowledge.okWithExpectedMessage("(7093) Enter Call #");
    // popup.acknowledge.okWithExpectedMessage("(7093) Enter Call No");
  }

  async enterAtCallNo(): Promise<void> {
    // uIMapTow.towEntry.uICallYearEdit.click();
    // uIMapTow.towEntry.uICallYearEdit.clear();
    // uIMapTow.towEntry.uICallYearEdit.sendKeys(BaseData.getTowModuleValue("CallNo").substring(0, 2));
    // uIMapTow.towEntry.uICallNumberEdit.sendKeys(BaseData.getTowModuleValue("CallNo").substring(3));
    // uIMapTow.towEntry.uICallNumberEdit.sendKeys(Keys.TAB);
  }

  async enterAtPlateNumber(): Promise<void> {
    // uIMapTow.towEntry.uIPlateNumberEdit.sendKeys(BaseData.getTowModuleValue("PlateNumber"));
    // uIMapTow.towEntry.uIPlateNumberEdit.sendKeys(Keys.TAB);
    // // uIMapTow.towEntry.uIPlateStateComboBox.sendKeys(Keys.TAB); //Unwanted code
  }

  async selectAtPlateState(): Promise<void> {
    // uIMapTow.towEntry.uIPlateStateComboBox.sendKeys(BaseData.getTowModuleValue("PlateState"));
    // uIMapTow.towEntry.uIPlateStateComboBox.sendKeys(Keys.TAB);
  }

  async verifyAtYear(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("Year"),
    // uIMapTow.towEntry.uIYearEdit.getAttribute("value"));
  }

  async verifyAtMake(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("Make"),
    // uIMapTow.towEntry.uIMakeEdit.getAttribute("value"));
  }

  async verifyAtModel(): Promise<void> {
    // System.out.println(uIMapTow.towEntry.uIModelEdit.getAttribute("value"));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("Model"),
    // uIMapTow.towEntry.uIModelEdit.getAttribute("value"));
  }

  async verifyAtColor(): Promise<void> {
    // System.out.println(uIMapTow.towEntry.uIColorEdit.getAttribute("value"));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("Color"),
    // uIMapTow.towEntry.uIColorEdit.getAttribute("value"));
  }

  async clickTowTab(): Promise<void> {
    // uIMapTow.towEntry.uITowTab.click();
  }

  async clickOwnerTab(): Promise<void> {
    // uIMapTow.towEntry.uIOwnerTab.click();
  }

  async clickDriverTab(): Promise<void> {
    // uIMapTow.towEntry.uIDriverTab.click();
  }

  async switchToDamageMissingTab(): Promise<void> {
    // uIMapTow.towEntry.uIDamageMissingTab.click();
    // Playback.pageLoadThreadWait();
    // objectIdentification.windowHandle.switchToFrame("frmTextMgrEx");
  }

  async switchToPropertyInventoryTab(): Promise<void> {
    // uIMapTow.towEntry.uIPropertyInventoryTab.click();
    // Playback.pageLoadThreadWait();
    // //objectIdentification.windowHandle.switchToFrame("frmTextMgrEx");
    // WebElement frame = Playback.driver.findElement(By.xpath("//iframe[contains(@src,'frmTextMgrEx')]"));
    // objectIdentification.windowHandle.switchToFrame(frame);
  }

  async switchToTowNotesTab(): Promise<void> {
    // uIMapTow.towEntry.uINotesTab.click();
    // Playback.pageLoadThreadWait();
    // objectIdentification.windowHandle.switchToFrame("frmNotes");
  }

  async clickPropertyInventoryTab(): Promise<void> {
    // uIMapTow.towEntry.uIPropertyInventoryTab.click();
  }

  async clickForfeitureTab(): Promise<void> {
    // uIMapTow.towEntry.uIForfeitureTab.click();
  }

  async clickReleaseTab(): Promise<void> {
    // uIMapTow.towEntry.uIReleaseTab.click();
  }

  async clickDispositionTab(): Promise<void> {
    // uIMapTow.towEntry.uIDispositionTab.click();
  }

  async clickNotesTab(): Promise<void> {
    // uIMapTow.towEntry.uINotesTab.click();
  }

  async enterReason(): Promise<void> {
    // uIMapTow.towEntry.uIReasonEdit.sendKeys(Randomized.randomAlphanumeric(10));
  }

  async save(): Promise<void> {
    // Playback.waitForControlReady();
    // uIMapTow.towEntry.uISaveButton.click();
    // popup.confirm.yes();
  }

  async saveNClose(): Promise<void> {
    // Playback.waitForControlReady();
    // uIMapTow.towEntry.uISaveNCloseButton.click();
    // popup.confirm.yes();
    // Playback.pageLoadThreadWait();
  }

  async verify1003UpdateSuccessfulFooterMessage(): Promise<void> {
    // objectIdentification.manualIdentify.verifyUpdateSuccessful();
    // //			String AdditionMessage = uIMapTow.towEntry.uIBottomLeftSideStatusBar.getText();
    // //			verify.ExpectedValueIsTrue(AdditionMessage.contains("1003 - Update Successful"));
  }

  async verify1051AckMsgInDamageMissingTab(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage(
    // "(1051) Updated data exists in the Damage/Missing Tab. You must save or reset.");
  }

  async verify1051AckMsgInPropertyInventoryTab(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage(
    // "(1051) Updated data exists in the Property Inventory Tab. You must save or reset.");
  }

  async verify7252ConfirmMessage(): Promise<void> {
    // popup.confirm.yesWithExpectedMessage(
    // "(7252) Do you want to enter the vehicle as towed without a Plate #? Select YES to continue; select NO to enter a Plate #.");
  }

  async verifyRedColorHoldLabel(): Promise<void> {
    // // using color code to get the value and verify
    // verify.ExpectedValueIsTrue(uIMapTow.towScreen.uIHoldStatusBar.getCssValue("color").contains("255, 0, 0"));
  }

  async verifyHoldLabelDisappears(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapTow.towScreen.uIHoldStatusBar.getText().contains("Hold"));
  }

  async verifyPlateVinGreyOut(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapTow.towEntry.uIPlateNumberEdit.getAttribute("class"),
    // "textboxInactive");
  }

  async closeTheScreen(): Promise<void> {
    // objectIdentification.windowHandle.closeTheScreen();
  }

  async verifyCallIBubbleIsDisplayed(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.uICallInfoIcon.isDisplayed());
  }

  async verifyAtCaseNo(): Promise<void> {
    // String attribute = uIMapTow.towEntry.uICaseNoYear.getAttribute("value");
    // String attribute2 = uIMapTow.towEntry.uICaseNo.getAttribute("value");
    // verify.ExpectedValueIsTrue(attribute.contains(BaseData.getTowModuleValue("CaseNo").substring(0, 1)));
    // verify.ExpectedValueIsTrue(attribute2.contains(BaseData.getTowModuleValue("CaseNo").substring(3)));
  }

  async verifyAtCallDateTime(): Promise<void> {
    // String date = uIMapTow.towEntry.uICallDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(date, BaseData.getTestContextData("CallDate"));
    // String time = uIMapTow.towEntry.uICallTimeEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(time, BaseData.getTestContextData("CallTime"));
  }

  async selectEquipmentUsed(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTow.towEntry.uIEquipmentUsedDropdown,
    // "Tow Truck - Light");
  }

  async selectWrecker(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // uIMapTow.towEntry.uIWreckerDropdown.click();
    // Playback.pageLoadThreadWait();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTow.towEntry.uIWreckerDropdown,
    // "2 - PhoenixTowAgency");
  }

  async tabTowRequestDateTime(): Promise<void> {
    // uIMapTow.towEntry.uITowRequestDate.sendKeys(Keys.TAB);
    // Playback.controlReadyThreadWait();
  }

  async verifyAtCallNo(): Promise<void> {
    // String callYr = uIMapTow.towEntry.uICallYearEdit.getAttribute("value");
    // String callNo = uIMapTow.towEntry.uICallNumberEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(callYr + "-" + callNo, BaseData.getTestContextData("CallNo"));
    // uIMapTow.towEntry.uICallNumberEdit.sendKeys(Keys.TAB);
  }

  async verify1002AdditionSuccessfulFooterMessage(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // objectIdentification.manualIdentify.verifyAdditionSuccessful();
  }

  async switchToAttachmentTab(): Promise<void> {
    // uIMapTow.towEntry.uIAttachmentsTab.click();
    // Playback.threadWait(3000);
    // objectIdentification.windowHandle.switchToFrame("frmTxtAttachMgrEx");
    // Playback.waitForPageLoad();
  }

  async clickCallInfoIcon(): Promise<void> {
    // Playback.threadWait(3000);
    // uIMapTow.towEntry.uICallInfoIcon.click();
  }

  async verifyYearIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.uIYearEdit.isEnabled());
  }

  async verifyMakeIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.uIMakeEdit.isEnabled());
  }

  async verifyModelIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.uIModelEdit.isEnabled());
  }

  async verifyColorsIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.uIColorDropDown.isEnabled());
  }

  async verifyVINIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.uIVINEdit.isEnabled());
  }

  async verifyStyleIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.uIStyleEdit.isEnabled());
  }

  async enterAtYear(): Promise<void> {
    // uIMapTow.towEntry.uIYearEdit2.sendKeys(BaseData.getTowModuleValue("Year"));
    // uIMapTow.towEntry.uIYearEdit2.sendKeys(Keys.TAB);
  }

  async enterAtVINNo(): Promise<void> {
    // uIMapTow.towEntry.uIVINEdit.sendKeys(BaseData.getTowModuleValue("VINNo"));
    // uIMapTow.towEntry.uIVINEdit.sendKeys(Keys.TAB);
  }

  async verify7251ConfirmMessage(): Promise<void> {
    // popup.confirm.yesWithExpectedMessage("(7251) Do you want to reposition the vendor?");
  }

  async verifyLocationOfVehicleKeyIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.uILocationOfVehicleKeyDropDown.isDisplayed());
  }

  async selectLocationOfVehicleKeyAsAdd2390(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTow.towEntry.uILocationOfVehicleKeyDropDown,
    // "--Add 2390 --");
  }

  async selectAtLocationOfVehicleKey(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTow.towEntry.uILocationOfVehicleKeyDropDown,
    // BaseData.getTowModuleValue("LocationOfVehicleKey"));
  }

  async selectAtLocationOfVehicleKey1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTow.towEntry.uILocationOfVehicleKeyDropDown,
    // BaseData.getTowModuleValue("LocationOfVehicleKey1"));
  }

  async verifyCreateCallCheckBoxIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.uICreateCallCheckBox.isDisplayed());
  }

  async clickCreateCallCheckBox(): Promise<void> {
    // uIMapTow.towEntry.uICreateCallCheckBox.click();
  }

  async selectAtPlateState1(): Promise<void> {
    // uIMapTow.towEntry.uIPlateStateComboBox.sendKeys(BaseData.getTowModuleValue("PlateState1"));
    // uIMapTow.towEntry.uIPlateStateComboBox.sendKeys(Keys.TAB);
  }

  async enterAtPlateNumber2(): Promise<void> {
    // uIMapTow.towEntry.uIPlateNumberEdit.sendKeys(BaseData.getTowModuleValue("PlateNumber2"));
  }

  async selectAtPlateState2(): Promise<void> {
    // uIMapTow.towEntry.uIPlateStateComboBox.sendKeys(BaseData.getTowModuleValue("PlateState2"));
    // uIMapTow.towEntry.uIPlateStateComboBox.sendKeys(Keys.TAB);
  }

  async readTowNo(): Promise<string> {
    // String TowYear = uIMapTow.towEntry.uITowNoYearEdit.getAttribute("value");
    // String TowNumber = uIMapTow.towEntry.uITowNoEdit.getAttribute("value");
    // String TowNo = TowYear + "-" + TowNumber;
    // return TowNo;
  }

  async enterAtPlateNumber3(): Promise<void> {
    // uIMapTow.towEntry.uIPlateNumberEdit.sendKeys(BaseData.getTowModuleValue("PlateNumber3"));
  }

  async verifyCreateCallCheckBoxIsNotDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(!uIMapTow.towEntry.uICreateCallCheckBox.isDisplayed());
  }

  async clickPrintIcon(): Promise<void> {
    // uIMapTow.towEntry.uIPrintIcon.click();
  }

  async enterAtPlateNumber1(): Promise<void> {
    // uIMapTow.towEntry.uIPlateNumberEdit.sendKeys(BaseData.getTowModuleValue("PlateNumber1"));
  }

  async clickPlateInfoIcon(): Promise<void> {
    // uIMapTow.towEntry.uIPlateVinInfoIcon.click();
  }

  async verifyAtPlateVInNo(i: number): Promise<void> {
    // String attribute = uIMapTow.towEntry.uIPlateNumberEdit.getAttribute("value");
    // System.out.println(attribute + "value");
    // if(i==0) {
    // verify.ExpectedValueIsTrue(attribute.contains(BaseData.getTowModuleValue("PlateNumber")));
    // }else {
    // verify.ExpectedValueIsTrue(attribute.contains(BaseData.getTowModuleValue("PlateNumber"+i)));
  }

  async VerifyAtState(): Promise<void> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapTow.towEntry.uIPlateStateComboBox);
    // verify.ExpectedValueIsTrue(dropDownSelectedItem.contains(BaseData.getTowModuleValue("PlateState")));
  }

  async verifyAtTowNo(TowNo: string): Promise<void> {
    // String TowYear = uIMapTow.towEntry.uITowNoYearEdit.getAttribute("value");
    // String TowNumber = uIMapTow.towEntry.uITowNoEdit.getAttribute("value");
    // String TowNo1 = TowYear + "-" + TowNumber;
    // verify.ExpectedPropertyValueIsEqual(TowNo, TowNo1);
  }

  async tabVINno(): Promise<void> {
    // uIMapTow.towEntry.uIVINEdit.sendKeys(Keys.TAB);
  }

  async verify7149DispositiontabAckmsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage(
    // "(7149) Disposition date and time should be later than Tow Request date and time");
  }

  async verify7149ReleaseTabAckmsg(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage(
    // "(7149) Release date and time should be later than Tow Request date and time");
  }

  async verifyAndOkVendorsNotAvailablePopup(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // popup.confirm.yesWithContainsMessage("Tow vendors are not available for this patrol area.");
  }

  async tabOutState(): Promise<void> {
    // uIMapTow.towEntry.uIPlateStateComboBox.sendKeys(Keys.TAB);
  }

  async readJuris(): Promise<string> {
    // String Juris = uIMapTow.towEntry.uIJurisComboBox.getAttribute("value");
    // System.out.println(Juris + "value");
    // return Juris;
  }

  async selectAtJuris(): Promise<void> {
    // uIMapTow.towEntry.uIJurisComboBox.sendKeys(BaseData.getTowModuleValue("Juris"));
    // uIMapTow.towEntry.uIJurisComboBox.sendKeys(Keys.TAB);
  }

  async selectAtJuris1(): Promise<void> {
    // uIMapTow.towEntry.uIJurisComboBox.sendKeys(BaseData.getTowModuleValue("Juris1"));
    // uIMapTow.towEntry.uIJurisComboBox.sendKeys(Keys.TAB);
  }

  async enterAtPlateNo(VehicleNo: string): Promise<void> {
    // uIMapTow.towEntry.uIPlateNumberEdit.click();
    // uIMapTow.towEntry.uIPlateNumberEdit.clear();
    // uIMapTow.towEntry.uIPlateNumberEdit.sendKeys(VehicleNo);
    // uIMapTow.towEntry.uIPlateNumberEdit.sendKeys(Keys.TAB);
    // uIMapTow.towEntry.uIPlateStateComboBox.sendKeys(Keys.TAB);
  }

  async verifyDamageMissingTabColor(): Promise<void> {
    // String color = "rgba(0, 0, 255, 1)";
    // String cssValue = uIMapTow.towEntry.uIDamageMissingTab.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(color, cssValue);
  }

  async verifyPropertyInventoryTabColor(): Promise<void> {
    // String color = "rgba(0, 0, 255, 1)";
    // String cssValue = uIMapTow.towEntry.uIPropertyInventoryTab.getCssValue("color");
    // verify.ExpectedPropertyValueIsEqual(color, cssValue);
  }

  async switchToPropertyInventoryTab1(): Promise<void> {
    // uIMapTow.towEntry.uIPropertyInventoryTab.click();
    // Playback.pageLoadThreadWait();
    // //objectIdentification.windowHandle.switchToFrame("frmTextMgrEx");
    // WebElement frame = Playback.driver.findElement(By.xpath("(//iframe[contains(@src,'frmTextMgrEx')])[2]"));
    // objectIdentification.windowHandle.switchToFrame(frame);
  }

  async verifyPlateInfoIcon(): Promise<void> {
    // boolean PlateStateInfoIcon = uIMapTow.towEntry.uIPlateStateInfoIcon.isDisplayed();
    // verify.ExpectedValueIsTrue(PlateStateInfoIcon);
  }

  async enterAtCallNo1(): Promise<void> {
    // uIMapTow.towEntry.uICallYearEdit.click();     //updated by Kiran for 1.118
    // uIMapTow.towEntry.uICallYearEdit.clear();
    // uIMapTow.towEntry.uICallYearEdit.sendKeys(BaseData.getTowModuleValue("CallNo1").substring(0, 2));
    // uIMapTow.towEntry.uICallNumberEdit.sendKeys(BaseData.getTowModuleValue("CallNo1").substring(3));
    // uIMapTow.towEntry.uICallNumberEdit.sendKeys(Keys.TAB);
  }

  async verify7094EnterPlateNoAcknowledgeMessage(): Promise<void> {
    // popup.acknowledge.okWithExpectedMessage("(7094)Enter Plate No");
  }

  async clickcaseInfoIcon(): Promise<void> {
    // uIMapTow.towEntry.uICaseInfoInfoIcon.click();
  }

  async verifyStatusAsNotForPublic(): Promise<void> {
    // String Status = uIMapTow.towEntry.uINotForPublicLabel.getText();
    // verify.ExpectedPropertyValueIsEqual("NOT FOR PUBLIC", Status);
  }

  async verifyAtNotForPublicStatusColor(): Promise<void> {
    // String labelColor = uIMapTow.towEntry.uINotForPublicLabel.getCssValue("color");
    // System.out.println(labelColor);
    // verify.ExpectedPropertyValueIsEqual("rgba(255, 0, 0, 1)",labelColor);
  }

  async verifyNotForPublicStatusAsBold(): Promise<void> {
    // String labelColor = uIMapTow.towEntry.uINotForPublicLabel.getCssValue("font-weight");
    // System.out.println(labelColor);
    // verify.ExpectedPropertyValueIsEqual("700",labelColor);
  }

  async verifyNotForPublicStatusIsNotDisplayed(): Promise<void> {
    // boolean diaplayed = uIMapTow.towEntry.uINotForPublicLabel.isDisplayed();
    // verify.ExpectedValueIsFalse(diaplayed);
  }

  async reloadScreen(): Promise<void> {
    // objectIdentification.manualIdentify.reloadWindowUsingTitle("Tow Entry");
  }

  async clickCallLookupIcon(): Promise<void> {
    // uIMapTow.towEntry.uICallLookupIcon.click();
  }

  async verifyDamageMissingTabIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.uITowTab.isDisplayed(), "Tow tab is not displayed-->");
  }

  async verifyDamageMissingTabIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.uITowTab.isEnabled(), "Tow tab is not enabled -->");
  }

  async verifyPropertyInventoryTabIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.uIPropertyInventoryTab.isDisplayed(), "Property Inventory tab is not displayed-->");
  }

  async verifyPropertyInventoryTabIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.uIPropertyInventoryTab.isEnabled(), "Property Inventory tab is not enabled-->");
  }

  async verifyNotesTabIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.uINotesTab.isDisplayed(), "Notes tab is not displayed-->");
  }

  async verifyNotesTabIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.uINotesTab.isEnabled(), "Notes tab is not enabled-->");
  }

  async verifyAttachmentsTabIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.uIAttachmentsTab.isDisplayed(), "Attachments tab is not displayed-->");
  }

  async verifyAttachmentsTabIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.uIAttachmentsTab.isEnabled(), "Attachments tab is not enabled-->");
  }

  async verifyQAFormsTabIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.uIQaFormsTab.isDisplayed(), "QA Forms tab is not displayed-->");
  }

  async verifyQAFormsTabIsEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.uIQaFormsTab.isEnabled(), "QA Forms is not enabled-->");
  }

  async setTowYearToJSONFile(testCaseId: string): Promise<void> {
    // try {
    // BaseData.writeJson(testCaseId, "TowYear",
    // uIMapTow.towEntry.uITowNoYearEdit.getAttribute("value"));
    // } catch (FileNotFoundException e) {
    // // TODO Auto-generated catch block
    // e.printStackTrace();
    // } catch (IOException e) {
    // // TODO Auto-generated catch block
    // e.printStackTrace();
    // } catch (ParseException e) {
    // // TODO Auto-generated catch block
    // e.printStackTrace();
    // } catch (NoSuchWindowException e) {
    // // TODO Auto-generated catch block
    // e.printStackTrace();
    // WebDriverWait wait = new WebDriverWait(Playback.driver, Duration.ofSeconds(30));
    // wait.until(ExpectedConditions.visibilityOf(uIMapTow.towEntry.uITowNoYearEdit));
  }

  async setTowNumberToJSONFile(testCaseId: string): Promise<void> {
    // try {
    // BaseData.writeJson(testCaseId, "TowNumber",
    // uIMapTow.towEntry.uITowNoEdit.getAttribute("value"));
    // } catch (FileNotFoundException e) {
    // // TODO Auto-generated catch block
    // e.printStackTrace();
    // } catch (IOException e) {
    // // TODO Auto-generated catch block
    // e.printStackTrace();
    // } catch (ParseException e) {
    // // TODO Auto-generated catch block
    // e.printStackTrace();
    // } catch (NoSuchWindowException e) {
    // // TODO Auto-generated catch block
    // e.printStackTrace();
    // WebDriverWait wait = new WebDriverWait(Playback.driver, Duration.ofSeconds(30));
    // wait.until(ExpectedConditions.visibilityOf(uIMapTow.towEntry.uITowNoEdit));
  }

  async clickRefuseButton(): Promise<void> {
    // uIMapTow.towEntry.uIRefuseButton.click();
  }

  async readCallNo(): Promise<string> {
    // String year = uIMapTow.towEntry.uICallYearEdit.getAttribute("value");
    // String number = uIMapTow.towEntry.uICallNumberEdit.getAttribute("value");
    // String callNo = year+"-"+number;
    // System.out.println(callNo);
    // return callNo;
  }

}

export class TowTabPage {
  readonly page: Page;
  readonly equipmentUsedComboBox: Locator;
  readonly wreckerComboBox: Locator;
  readonly towQuantityGrid: Locator;
  readonly towRequestDateEdit: Locator;
  readonly towRequestDateTimeEdit: Locator;
  readonly addressEdit: Locator;
  readonly towTypeComboBox: Locator;
  readonly towReasonComboBox: Locator;
  readonly towedFromEdit: Locator;
  readonly towedToEdit: Locator;
  readonly towDriverComboBox: Locator;
  readonly officerCodeEdit: Locator;
  readonly notifiedDateEdit: Locator;
  readonly notifiedTimeEdit: Locator;
  readonly methodComboBox: Locator;
  readonly refuseButton: Locator;
  readonly reasonEdit: Locator;
  readonly towedToCheckBox: Locator;
  readonly towedCompletedDateEdit: Locator;
  readonly towCompletedToEdit: Locator;
  readonly towedFromCSZEdit: Locator;
  readonly towedToCSZEdit: Locator;
  readonly holdReasonIIcon: Locator;
  readonly towReasonEdit: Locator;
  readonly cancelDateEdit: Locator;
  readonly cancelDateTimeEdit: Locator;
  readonly overrideCheckBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.equipmentUsedComboBox = page.locator('#tabTow_tmpl0_ctrlUsrTow_cddEquipType_DropDown');
    this.wreckerComboBox = page.locator('#tabTow_tmpl0_ctrlUsrTow_lstVendor');
    this.towQuantityGrid = page.locator('#tabTow_tmpl0_ctrlUsrTow_grdEquipments');
    this.towRequestDateEdit = page.locator('#tabTow_tmpl0_ctrlUsrTow_dtTowReqDttm_Date_KPIDttmCtrl');
    this.towRequestDateTimeEdit = page.locator("//table[@id =\'tabTow_tmpl0_ctrlUsrTow_dtTowReqDttm_Time\']//input");
    this.addressEdit = page.locator('#tabTow_tmpl0_ctrlUsrTow_txtAddress');
    this.towTypeComboBox = page.locator('#tabTow_tmpl0_ctrlUsrTow_cddTowedType_DropDown');
    this.towReasonComboBox = page.locator('#tabTow_tmpl0_ctrlUsrTow_cddReason_DropDown');
    this.towedFromEdit = page.locator('#tabTow_tmpl0_ctrlUsrTow_adrTowedFrom_txtFrom');
    this.towedToEdit = page.locator('#tabTow_tmpl0_ctrlUsrTow_adrTowedTo_txtFrom');
    this.towDriverComboBox = page.locator('#tabTow_tmpl0_ctrlUsrTow_ddlTowDriver');
    this.officerCodeEdit = page.locator('#tabTow_tmpl0_ctrlUsrTow_lupUnitPF_CodeValue');
    this.notifiedDateEdit = page.locator('#tabTow_tmpl0_ctrlUsrTow_dttNotifiedDttm1_Date_KPIDttmCtrl');
    this.notifiedTimeEdit = page.locator("//table[@id =\'tabTow_tmpl0_ctrlUsrTow_dttNotifiedDttm1_Time\']//input");
    this.methodComboBox = page.locator('#tabTow_tmpl0_ctrlUsrTow_cddMethod1_DropDown');
    this.refuseButton = page.locator('#tabTow_tmpl0_ctrlUsrTow_cmdRefuse');
    this.reasonEdit = page.locator('#txtHoldReason');
    this.towedToCheckBox = page.locator('#tabTow_tmpl0_ctrlUsrTow_adrTowedTo_chkVerify');
    this.towedCompletedDateEdit = page.locator('#tabTow_tmpl0_ctrlUsrTow_dttmTow_Date_KPIDttmCtrl');
    this.towCompletedToEdit = page.locator("//table[@id =\'tabTow_tmpl0_ctrlUsrTow_dttmTow_Time\'//input");
    this.towedFromCSZEdit = page.locator('#tabTow_tmpl0_ctrlUsrTow_custTowedFromCSZ_City');
    this.towedToCSZEdit = page.locator('#tabTow_tmpl0_ctrlUsrTow_custTowedToCSZ_City');
    this.holdReasonIIcon = page.locator('#tabTow_tmpl0_ctrlUsrTow_imgHoldReason');
    this.towReasonEdit = page.locator('#tabTow_tmpl0_ctrlUsrTow_txtTowReason');
    this.cancelDateEdit = page.locator('#tabTow_tmpl0_ctrlUsrTow_dtCancelDttm_Date_KPIDttmCtrl');
    this.cancelDateTimeEdit = page.locator("//table[@id=\'tabTow_tmpl0_ctrlUsrTow_dtCancelDttm_Time\']//input");
    this.overrideCheckBox = page.locator('#tabTow_tmpl0_ctrlUsrTow_chkOverride');
  }

  async selectAtEquipmentUsed(): Promise<void> {
    // uIMapTow.towEntry.towTab.uIEquipmentUsedComboBox.sendKeys(BaseData.getTowModuleValue("EquipmentUsed"));
    // uIMapTow.towEntry.towTab.uIEquipmentUsedComboBox.sendKeys(Keys.TAB);
  }

  async selectEquipment(): Promise<void> {
    // objectIdentification.randomIdentify.selectDropDownOption(uIMapTow.towEntry.towTab.uIEquipmentUsedComboBox);
    // uIMapTow.towEntry.towTab.uIEquipmentUsedComboBox.sendKeys(Keys.TAB);
  }

  async tabTowRequestDate(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapTow.towEntry.towTab.uITowRequestDateEdit.click();
    // uIMapTow.towEntry.towTab.uITowRequestDateEdit.sendKeys(Keys.TAB);
  }

  async tabTowCompletedDate(): Promise<void> {
    // uIMapTow.towEntry.towTab.uITowedCompletedDateEdit.sendKeys(Keys.TAB);
  }

  async verifyCurrentDateAutoPopulatesInTowRequestedDate(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate(),
    // uIMapTow.towEntry.towTab.uITowRequestDateEdit.getAttribute("value"));
  }

  async selectAtWrecker(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTow.towEntry.towTab.uIWreckerComboBox,
    // BaseData.getTowModuleValue("Wrecker"));
    // Playback.threadWait();
    // uIMapTow.towEntry.towTab.uIWreckerComboBox.sendKeys(Keys.TAB);
  }

  async selectWrecker(): Promise<void> {
    // objectIdentification.randomIdentify.selectDropDownOption(uIMapTow.towEntry.towTab.uIWreckerComboBox);
    // uIMapTow.towEntry.towTab.uIWreckerComboBox.sendKeys(Keys.TAB);
  }

  async selectTowType(): Promise<void> {
    // objectIdentification.randomIdentify.selectDropDownOption(uIMapTow.towEntry.towTab.uITowTypeComboBox);
  }

  async selectTowReasonAsAbandoned(): Promise<void> {
    // uIMapTow.towEntry.towTab.uITowReasonComboBox.sendKeys("Abandoned");
  }

  async verifyAtNextWrecker(): Promise<void> {
    // String uISelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapTow.towEntry.towTab.uIWreckerComboBox);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("NextWrecker"), uISelectedItem);
  }

  async verifyAtAddress(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("Address"),
    // uIMapTow.towEntry.towTab.uIAddressEdit.getAttribute("value"));
  }

  async enterAtTowedFrom(): Promise<void> {
    // uIMapTow.towEntry.towTab.uITowedFromEdit.sendKeys(BaseData.getTowModuleValue("TowedFrom"));
    // uIMapTow.towEntry.towTab.uITowedFromEdit.sendKeys(Keys.TAB);
  }

  async clickTowedToCheckbox(): Promise<void> {
    // uIMapTow.towEntry.towTab.uITowedToCheckBox.click();
    // verify.ExpectedValueIsTrue(
    // uIMapTow.towEntry.towTab.uITowedToCheckBox.getAttribute("checked").contains("true"));
    // Playback.controlReadyThreadWait();
  }

  async verifyAtAuthDriverInTowDriverDropdown(): Promise<void> {
    // String item = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapTow.towEntry.towTab.uITowDriverComboBox);
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTow.towEntry.towTab.uITowDriverComboBox,
    // BaseData.getTowModuleValue("AuthDriver"));
  }

  async verifyCurrentDateAutoPopulatesInTowCompletedDate(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate(),
    // uIMapTow.towEntry.towTab.uITowedCompletedDateEdit.getAttribute("value"));
  }

  async enterAtOfficer(): Promise<void> {
    // uIMapTow.towEntry.towTab.uIOfficerCodeEdit.sendKeys(BaseData.getTowModuleValue("Officer"));
    // uIMapTow.towEntry.towTab.uIOfficerCodeEdit.sendKeys(Keys.TAB);
  }

  async tabNotifiedDateTime(): Promise<void> {
    // uIMapTow.towEntry.towTab.uINotifiedDateEdit.sendKeys(Keys.TAB);
    // uIMapTow.towEntry.towTab.uINotifiedTimeEdit.sendKeys(Keys.TAB);
  }

  async verifyCurrentDateAutoPopulatesInNotifiedDate(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate(),
    // uIMapTow.towEntry.towTab.uINotifiedDateEdit.getAttribute("value"));
  }

  async selectAtMethod(): Promise<void> {
    // uIMapTow.towEntry.towTab.uIMethodComboBox.sendKeys(BaseData.getTowModuleValue("Method"));
  }

  async clickRefuseButton(): Promise<void> {
    // uIMapTow.towEntry.towTab.uIRefuseButton.click();
  }

  async enterReason(): Promise<void> {
    // objectIdentification.windowHandle.switchToWindowUsingFormName("frmTraHoldReason_Id");
    // uIMapTow.towEntry.towTab.uIReasonEdit.sendKeys(Randomized.randomString(10));
  }

  async verifyAtWrecker(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("Wrecker"),
    // objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapTow.towEntry.towTab.uIWreckerComboBox));
  }

  async verifyWreckerChanged(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("101 - Arm Company", objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapTow.towEntry.towTab.uIWreckerComboBox));
  }

  async verifyTerminatedDriverNotShowing(): Promise<void> {
    // List<String> drivers = objectIdentification.manualIdentify
    // .getDropDownValues(uIMapTow.towEntry.towTab.uITowDriverComboBox);
    // for (String driver : drivers) {
    // //if (driver.equalsIgnoreCase("Levi, L")) {
    // System.out.println(driver);
    // verify.ExpectedValueIsFalse(driver.contains(BaseData.getTowModuleValue("TerminatedEmployee")));
    // // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify.getDropDownOptionsCount(uIMapTow.towEntry.towTab.uITowDriverComboBox)
    // // == 2);
    // //}
  }

  async verifyTerminatedDriverShowing(): Promise<void> {
    // List<String> drivers = objectIdentification.manualIdentify
    // .getDropDownValues(uIMapTow.towEntry.towTab.uITowDriverComboBox);
    // for (String driver : drivers) {
    // if (driver.equalsIgnoreCase("Levi, L"))
    // verify.ExpectedValueIsTrue(driver.contains(BaseData.getTowModuleValue("Driver")));
    // // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify.getDropDownOptionsCount(uIMapTow.towEntry.towTab.uITowDriverComboBox)
    // // == 3);
  }

  async selectAtTowReason(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTow.towEntry.towTab.uITowReasonComboBox,
    // BaseData.getTowModuleValue("TowReason"));
    // uIMapTow.towEntry.towTab.uITowReasonComboBox.sendKeys(Keys.TAB);
  }

  async verifyAndCancel5100PopupMsg(): Promise<void> {
    // popup.confirm.noWithContainsMessage(
    // "(5100)The entered address is not found in the RMS Geo database. Click OK to add this as a new address, or click Cancel to correct the entered address.");
  }

  async enterAtTowedFromCSZ(): Promise<void> {
    // uIMapTow.towEntry.towTab.uITowedFromCSZEdit.sendKeys(BaseData.getTowModuleValue("TowedFromCSZ"));
    // uIMapTow.towEntry.towTab.uITowedFromCSZEdit.sendKeys(Keys.TAB);
  }

  async enterAtTowedToCSZ(): Promise<void> {
    // uIMapTow.towEntry.towTab.uITowedToCSZEdit.sendKeys(BaseData.getTowModuleValue("TowedToCSZ"));
    // uIMapTow.towEntry.towTab.uITowedToCSZEdit.sendKeys(Keys.TAB);
  }

  async tabTowRequestDateTime(): Promise<void> {
    // uIMapTow.towEntry.towTab.uITowRequestDateTimeEdit.sendKeys(Keys.TAB);
  }

  async enterAtTowedTo(): Promise<void> {
    // uIMapTow.towEntry.towTab.uITowedToEdit.sendKeys(BaseData.getTowModuleValue("TowedTo"));
    // uIMapTow.towEntry.towTab.uITowedToEdit.sendKeys(Keys.TAB);
  }

  async verifyHoldReasonIIconIsDisplayed(): Promise<void> {
    // uIMapTow.towEntry.towTab.uIHoldReasonIIcon.isDisplayed();
  }

  async clickHoldReasonIIcon(): Promise<void> {
    // uIMapTow.towEntry.towTab.uIHoldReasonIIcon.click();
  }

  async verifyRefuseInfoIconIsDisplayed(): Promise<void> {
    // uIMapTow.towEntry.towTab.uIHoldReasonIIcon.isDisplayed();
  }

  async verifyTowResonTextFieldIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.towTab.uITowReasonEdit.isDisplayed());
  }

  async enterTowReason(): Promise<void> {
    // uIMapTow.towEntry.towTab.uITowReasonEdit.sendKeys(Randomized.randomString(10));
  }

  async enterAtTowReason(): Promise<void> {
    // uIMapTow.towEntry.towTab.uITowReasonEdit.sendKeys(BaseData.getTowModuleValue("TowReason"));
    // uIMapTow.towEntry.towTab.uITowReasonEdit.sendKeys(Keys.TAB);
  }

  async clearTowReason(): Promise<void> {
    // uIMapTow.towEntry.towTab.uITowReasonEdit.clear();
  }

  async getWreckerDropDownValue(): Promise<string> {
    // String dropDownSelectedItem = objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapTow.towEntry.towTab.uIWreckerComboBox);
    // return dropDownSelectedItem;
  }

  async selectAtWrecker1(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTow.towEntry.towTab.uIWreckerComboBox,
    // BaseData.getTowModuleValue("Wrecker1"));
    // Playback.threadWait();
    // uIMapTow.towEntry.towTab.uIWreckerComboBox.sendKeys(Keys.TAB);
  }

  async selectAtTowReason1(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTow.towEntry.towTab.uITowReasonComboBox,
    // BaseData.getTowModuleValue("TowReason1"));
    // uIMapTow.towEntry.towTab.uITowReasonComboBox.sendKeys(Keys.TAB);
  }

  async verifyAtTowFrom(): Promise<void> {
    // String attribute = uIMapTow.towEntry.towTab.uITowedFromEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(attribute.contains(BaseData.getTowModuleValue("TowFrom")));
  }

  async verifyAtTowedFromCSZ(): Promise<void> {
    // String attribute = uIMapTow.towEntry.towTab.uITowedFromCSZEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(attribute.contains(BaseData.getTowModuleValue("TowedFromCSZ")));
  }

  async verifyAtTowedTo(): Promise<void> {
    // String attribute = uIMapTow.towEntry.towTab.uITowedToEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(attribute.contains(BaseData.getTowModuleValue("TowedTo")));
  }

  async verifyAtTowedToCSZ(): Promise<void> {
    // String attribute = uIMapTow.towEntry.towTab.uITowedToCSZEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(attribute.contains(BaseData.getTowModuleValue("TowedToCSZ")));
  }

  async tabOutCancelDateNTime(): Promise<void> {
    // uIMapTow.towEntry.towTab.uICancelDateEdit.click();
    // uIMapTow.towEntry.towTab.uICancelDateEdit.sendKeys(Keys.TAB);
    // uIMapTow.towEntry.towTab.uICancelDateTimeEdit.sendKeys(Keys.TAB);
  }

  async verifyCancelDateNTimeisEmpty(): Promise<void> {
    // String Date = uIMapTow.towEntry.towTab.uICancelDateEdit.getAttribute("value");
    // String Time = uIMapTow.towEntry.towTab.uICancelDateTimeEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(Date.isEmpty());
    // verify.ExpectedValueIsTrue(Time.isEmpty());
  }

  async verifyTowReasonisEnabled(): Promise<void> {
    // uIMapTow.towEntry.towTab.uITowReasonComboBox.isEnabled();
  }

  async clearTowedFrom(): Promise<void> {
    // uIMapTow.towEntry.towTab.uITowedFromEdit.click();
    // uIMapTow.towEntry.towTab.uITowedFromEdit.clear();
  }

  async tabTowReason(): Promise<void> {
    // uIMapTow.towEntry.towTab.uITowReasonEdit.sendKeys(Keys.TAB);
  }

  async verifyAtWrecker1(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("Wrecker1"),
    // objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapTow.towEntry.towTab.uIWreckerComboBox));
  }

  async clickOverrideCheckbox(): Promise<void> {
    // uIMapTow.towEntry.towTab.uIOverrideCheckBox.click();
  }

  async clearTowRequestDate(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // uIMapTow.towEntry.towTab.uITowRequestDateEdit.click();
    // uIMapTow.towEntry.towTab.uITowRequestDateEdit.clear();
  }

  async readTowRequestedDate(): Promise<string> {
    // String attribute = uIMapTow.towEntry.towTab.uITowRequestDateEdit.getAttribute("value");
    // return attribute;
  }

  async verifyTowRequestedDate(readTowRequestedDate: string): Promise<void> {
    // String attribute = uIMapTow.towEntry.towTab.uITowRequestDateEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(readTowRequestedDate, attribute);
  }

  async verifyEquipmentUsedAccknMessage(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // popup.acknowledge.okWithExpectedContainMessage(
    // "(6040) The 'Equipment Used' field selection requires equipment not available from this vendor.");
  }

  async verifyVendorCodeNotShown(): Promise<void> {
    // // TODO Auto-generated method stub
    // //			verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("Wrecker"),
    // //					objectIdentification.manualIdentify
    // //							.getDropDownSelectedItem(uIMapTow.towEntry.towTab.uIWreckerComboBox));
    // String text = uIMapTow.towEntry.towTab.uIWreckerComboBox.getText();
    // verify.ExpectedValueIsTrue(text.contains(BaseData.getTowModuleValue("Wrecker")));
  }

  async verifyWreckerBasedOnJuris(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("Ashland", objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapTow.towEntry.towTab.uIWreckerComboBox));
  }

  async verifyWreckerBasedOnJuris1(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("--"  , objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapTow.towEntry.towTab.uIWreckerComboBox));
    // // TODO Auto-generated method stub
  }

  async verifyVendorsNotAvailablePopupMsg(): Promise<void> {
    // Playback.controlReadyThreadWait();
    // popup.confirm.yesWithContainsMessage(
    // "Tow vendors are not available for this patrol area. Do you want to assign a tow vendor from another patrol area?");
  }

  async selectAtAuthDriver(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTow.towEntry.towTab.uITowDriverComboBox, BaseData.getTowModuleValue("AuthDriver"));
  }

  async verifyTowDriverIsNull(): Promise<void> {
    // String towDriver = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapTow.towEntry.towTab.uITowDriverComboBox);
    // verify.ExpectedPropertyValueIsEqual("--", towDriver);
  }

}

export class OwnerPage {
  readonly page: Page;
  readonly notified1DateEdit: Locator;
  readonly method1ComboBox: Locator;
  readonly clearIcon: Locator;
  readonly ownerLastNameEdit: Locator;
  readonly ownerFirstNameEdit: Locator;
  readonly ownerNameInfoButton: Locator;
  readonly dOBEdit: Locator;
  readonly addressEdit: Locator;
  readonly ownerNamesearchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.notified1DateEdit = page.locator('#tabTow_tmpl1_ctrlUsrOwner_dttNotifiedDttm1_Date_KPIDttmCtrl');
    this.method1ComboBox = page.locator('#tabTow_tmpl1_ctrlUsrOwner_cddMethod1_DropDown');
    this.clearIcon = page.locator('#tabTow_tmpl1_ctrlUsrOwner_imgClearOper');
    this.ownerLastNameEdit = page.locator('#tabTow_tmpl1_ctrlUsrOwner_nmcOwnerID_LastName');
    this.ownerFirstNameEdit = page.locator('#tabTow_tmpl1_ctrlUsrOwner_nmcOwnerID_FirstName');
    this.ownerNameInfoButton = page.locator('#tabTow_tmpl1_ctrlUsrOwner_nmcOwnerID_imgSrch');
    this.dOBEdit = page.locator('#tabTow_tmpl1_ctrlUsrOwner_dtDOB_KPIDttmCtrl');
    this.addressEdit = page.locator('#tabTow_tmpl1_ctrlUsrOwner_adrMainAddress_txtFrom');
    this.ownerNamesearchButton = page.locator('#tabTow_tmpl1_ctrlUsrOwner_nmcOwnerID_imgSrch');
  }

  async verifyNotified1GreyOut(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(uIMapTow.towEntry.owner.uINotified1DateEdit.getAttribute("class"),
    // "textboxInactive");
  }

  async verifyNotified1AutoPopulatesCurrentDate(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate(),
    // uIMapTow.towEntry.owner.uINotified1DateEdit.getAttribute("value"));
  }

  async verifyAtMethod(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("Method"),
    // objectIdentification.manualIdentify
    // .getDropDownSelectedItem(uIMapTow.towEntry.owner.uIMethod1ComboBox));
  }

  async clickClearIcon(): Promise<void> {
    // uIMapTow.towEntry.owner.uIClearIcon.click();
  }

  async enterAtOwnerLastName(): Promise<void> {
    // uIMapTow.towEntry.owner.uIOwnerLastNameEdit.sendKeys(BaseData.getTowModuleValue("OwnerLastName"));
  }

  async enterAtOwnerFirstName(): Promise<void> {
    // uIMapTow.towEntry.owner.uIOwnerFirstNameEdit.sendKeys(BaseData.getTowModuleValue("OwnerFirstName"));
    // uIMapTow.towEntry.owner.uIOwnerFirstNameEdit.sendKeys(Keys.TAB);
  }

  async selectName(): Promise<void> {
    // // Names.NameSearchHelpWindow.SelectName();
  }

  async getOwnerLastName(): Promise<void> {
    // String ownerLastName = uIMapTow.towEntry.owner.uIOwnerLastNameEdit.getAttribute("value");
    // Playback.setTestContextAttribute("OwnerLastName", ownerLastName);
  }

  async readOwnerLastName(): Promise<string> {
    // String ownerLastName = uIMapTow.towEntry.owner.uIOwnerLastNameEdit.getAttribute("value");
    // return ownerLastName;
  }

  async getOwnerFirstName(): Promise<void> {
    // String ownerFirstName = uIMapTow.towEntry.owner.uIOwnerFirstNameEdit.getAttribute("value");
    // Playback.setTestContextAttribute("ownerFirstName", ownerFirstName);
  }

  async readOwnerFirstName(): Promise<string> {
    // String ownerFirstName = uIMapTow.towEntry.owner.uIOwnerFirstNameEdit.getAttribute("value");
    // return ownerFirstName;
  }

  async getDOB(): Promise<void> {
    // String dOB = uIMapTow.towEntry.owner.uIDOBEdit.getAttribute("value");
    // Playback.setTestContextAttribute("DOB", dOB);
  }

  async readDOB(): Promise<string> {
    // String dOB = uIMapTow.towEntry.owner.uIDOBEdit.getAttribute("value");
    // return dOB;
  }

  async getAddress(): Promise<void> {
    // String address = uIMapTow.towEntry.owner.uIAddressEdit.getAttribute("value");
    // Playback.setTestContextAttribute("Address", address);
  }

  async readAddress(): Promise<string> {
    // String address = uIMapTow.towEntry.owner.uIAddressEdit.getAttribute("value");
    // return address;
  }

  async clickNameSearchIcon(): Promise<void> {
    // uIMapTow.towEntry.owner.uIOwnerNamesearchButton.click();
  }

  async verifyAtName(): Promise<void> {
  }

  async verifyAtLastName(): Promise<void> {
    // String LastName = uIMapTow.towEntry.owner.uIOwnerLastNameEdit.getText();
    // verify.ExpectedValueIsTrue(LastName.contains(BaseData.getTowModuleValue("LastName")));
  }

  async verifyAtFirstName(): Promise<void> {
    // String FirstName = uIMapTow.towEntry.owner.uIOwnerFirstNameEdit.getText();
    // verify.ExpectedValueIsTrue(FirstName.contains(BaseData.getTowModuleValue("FirstName")));
  }

  async verifyAtAddress(): Promise<void> {
    // String Address = uIMapTow.towEntry.owner.uIAddressEdit.getText();
    // verify.ExpectedValueIsTrue(Address.contains(BaseData.getTowModuleValue("Address")));
  }

}

export class DriverPage {
  readonly page: Page;
  readonly ownerCheckbox: Locator;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly dOBEdit: Locator;
  readonly addressEdit: Locator;
  readonly commentsEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ownerCheckbox = page.locator('#tabTow_tmpl2_ctrlUsrDriver_chkIsOwner');
    this.lastNameEdit = page.locator('#tabTow_tmpl2_ctrlUsrDriver_nmcDriverID_LastName');
    this.firstNameEdit = page.locator('#tabTow_tmpl2_ctrlUsrDriver_nmcDriverID_FirstName');
    this.dOBEdit = page.locator('#tabTow_tmpl2_ctrlUsrDriver_dtDOB_KPIDttmCtrl');
    this.addressEdit = page.locator('#tabTow_tmpl2_ctrlUsrDriver_adrMainAddress_txtFrom');
    this.commentsEdit = page.locator('#tabTow_tmpl2_ctrlUsrDriver_txtDvrComments');
  }

  async clickOwnerCheckbox(): Promise<void> {
    // Playback.waitForControlReady();
    // uIMapTow.towEntry.mDriver.uIOwnerCheckbox.click();
  }

  async verifyOwnerLastName(ownerLastName: string): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(ownerLastName,
    // uIMapTow.towEntry.mDriver.uILastNameEdit.getAttribute("value"));
  }

  async verifyActiveOwnerLastName(LastName: string): Promise<void> {
    // String attribute = uIMapTow.towEntry.mDriver.uILastNameEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(attribute.contains(LastName));
  }

  async verifyOwnerFirstName(ownerFirstName: string): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(ownerFirstName,
    // uIMapTow.towEntry.mDriver.uIFirstNameEdit.getAttribute("value"));
  }

  async verifyActiveOwnerFirstName(FirstName: string): Promise<void> {
    // String attribute = uIMapTow.towEntry.mDriver.uIFirstNameEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(attribute.contains(FirstName));
  }

  async verifyDOB(dOB: string): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(dOB, uIMapTow.towEntry.mDriver.uIDOBEdit.getAttribute("value"));
  }

  async verifyActiveDOB(DOB: string): Promise<void> {
    // String attribute = uIMapTow.towEntry.mDriver.uIDOBEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(attribute.contains(DOB));
  }

  async verifyAddress(address: string): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(address, uIMapTow.towEntry.mDriver.uIAddressEdit.getAttribute("value"));
  }

  async verifyActiveAddress(Address: string): Promise<void> {
    // String attribute = uIMapTow.towEntry.mDriver.uIAddressEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(attribute.contains(Address));
  }

  async enterComments(): Promise<void> {
    // uIMapTow.towEntry.mDriver.uICommentsEdit.sendKeys(Randomized.randomAlphanumericSpecialCharsString(15));
  }

  async uncheckOwnerCheckbox(): Promise<void> {
    // if (uIMapTow.towEntry.mDriver.uIOwnerCheckbox.isSelected())
    // uIMapTow.towEntry.mDriver.uIOwnerCheckbox.click();
  }

  async verifyDriverLastNameEmpty(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("", uIMapTow.towEntry.mDriver.uILastNameEdit.getText());
  }

  async verifyDriverFirstNameEmpty(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("", uIMapTow.towEntry.mDriver.uIFirstNameEdit.getText());
  }

  async verifyDOBEmpty(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("", uIMapTow.towEntry.mDriver.uIDOBEdit.getText());
  }

  async verifyAddressEmpty(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("", uIMapTow.towEntry.mDriver.uIAddressEdit.getText());
  }

  async enterAtFirstName(): Promise<void> {
    // uIMapTow.towEntry.mDriver.uIFirstNameEdit.sendKeys(BaseData.getTowModuleValue("FirstName"));
    // uIMapTow.towEntry.mDriver.uIFirstNameEdit.sendKeys(Keys.TAB);
  }

  async enterAtLastName(): Promise<void> {
    // uIMapTow.towEntry.mDriver.uILastNameEdit.sendKeys(BaseData.getTowModuleValue("LastName"));
    // uIMapTow.towEntry.mDriver.uILastNameEdit.sendKeys(Keys.TAB);
  }

  async verifyAtOwnerLastName(): Promise<void> {
    // String lastname = 	uIMapTow.towEntry.mDriver.uILastNameEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("OwnerLastName"), lastname,"Last name is mismatched -->");
  }

  async verifyAtOwnerFirstName(): Promise<void> {
    // String firstName = 	uIMapTow.towEntry.mDriver.uIFirstNameEdit.getAttribute("value");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("OwnerFirstName"), firstName,"First name is mismatched -->");
  }

}

export class DamageMissingPage {
  readonly page: Page;
  readonly damageMissingRichTextEdit: Locator;
  readonly internalSaveButton: Locator;
  readonly internalResetButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly templateComboBox: Locator;
  readonly loadButton: Locator;
  readonly narrativeRichTextEdit: Locator;
  readonly addNewButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.damageMissingRichTextEdit = page.locator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
    this.internalSaveButton = page.locator('#cmdInternalSave');
    this.internalResetButton = page.locator('#cmdInternalRefresh');
    this.bottomLeftSideStatusBar = page.locator("//div[@id=\'tab0\']//td[@class = \'status\']//b");
    this.templateComboBox = page.locator('#ctrlUsrKPITxtEdit_lstTextName');
    this.loadButton = page.locator('#ctrlUsrKPITxtEdit_cmdload');
    this.narrativeRichTextEdit = page.locator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
    this.addNewButton = page.locator('#ctrlUsrKPITxtEdit_cmdAddnew');
  }

  async enterText(): Promise<void> {
    // Playback.waitForControlReady();
    // Actions actions = new Actions(Playback.driver);
    // WebElement text = uIMapTow.towEntry.damageMissing.uIDamageMissingRichTextEdit.findElement(By.xpath("//body"));
    // actions.moveToElement(text).click();
    // actions.sendKeys(Randomized.randomString(20)).build().perform();
    // Playback.waitForControlReady();
  }

  async enterAndGetLessText(): Promise<void> {
    // String character = Randomized.randomString(10);
    // Playback.waitForControlReady();
    // Actions actions = new Actions(Playback.driver);
    // actions.moveToElement(uIMapTow.towEntry.damageMissing.uIDamageMissingRichTextEdit).click();
    // actions.sendKeys(character).build().perform();
    // Playback.waitForControlReady();
    // Playback.setTestContextAttribute("Character", character);
  }

  async getText(): Promise<void> {
    // uIMapTow.towEntry.damageMissing.uIDamageMissingRichTextEdit.click();
    // objectIdentification.windowHandle.switchToFrame("javascript");
    // String text = Playback.driver.findElement(By.xpath("//body")).getText();
    // Playback.setTestContextAttribute("Text", text);
  }

  async getText1(): Promise<void> {
    // String text1 = uIMapTow.towEntry.damageMissing.uIDamageMissingRichTextEdit.getAttribute("value");
    // Playback.setTestContextAttribute("Text1", text1);
  }

  async saveInternalScreen(): Promise<void> {
    // uIMapTow.towEntry.damageMissing.uIInternalSaveButton.click();
    // popup.confirm.yes();
  }

  async resetInternalScreen(): Promise<void> {
    // uIMapTow.towEntry.damageMissing.uIInternalResetButton.click();
  }

  async verifyFirstEnteredStringAppear(text: string): Promise<void> {
    // uIMapTow.towEntry.damageMissing.uIDamageMissingRichTextEdit.click();
    // objectIdentification.windowHandle.switchToFrame("javascript");
    // String firstEnteredString = Playback.driver.findElement(By.xpath("//body")).getText();
    // verify.ExpectedPropertyValueIsEqual(text, firstEnteredString);
  }

  async verifyLastEnteredStringDisappear(character: string): Promise<void> {
    // uIMapTow.towEntry.damageMissing.uIDamageMissingRichTextEdit.click();
    // objectIdentification.windowHandle.switchToFrame("javascript");
    // String lastEnteredString = Playback.driver.findElement(By.xpath("//body")).getText();
    // verify.ExpectedValueIsFalse(lastEnteredString.contains(character));
  }

  async verify1003UpdateSuccessfulFooterMessage(): Promise<void> {
    // String AdditionMessage = uIMapTow.towEntry.damageMissing.uIBottomLeftSideStatusBar.getText();
    // verify.ExpectedValueIsTrue(AdditionMessage.contains("1003 - Update Successful"));
  }

  async verify1002AdditionSuccessfulFooterMessage(): Promise<void> {
    // objectIdentification.manualIdentify.verifyAdditionSuccessful();
    // //			String AdditionMessage = uIMapTow.towEntry.damageMissing.uIBottomLeftSideStatusBar.getText();
    // //			verify.ExpectedValueIsTrue(AdditionMessage.contains("1002 - Addition Successful"));
  }

  async selectAtTemplate(i: number): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTow.towEntry.damageMissing.uITemplateComboBox,
    // BaseData.getTowModuleValue("Template" + i));
  }

  async clickLoadButton(): Promise<void> {
    // uIMapTow.towEntry.damageMissing.uILoadButton.click();
  }

  async getRichText(): Promise<string> {
    // objectIdentification.windowHandle.switchToFrame(uIMapTow.towEntry.damageMissing.uINarrativeRichTextEdit);
    // String text = Playback.driver.findElement(By.xpath(".//body")).getText();
    // return text;
  }

  async verifyRichTextIsDisplayed(newRichText: string): Promise<void> {
    // objectIdentification.windowHandle.switchToFrame(uIMapTow.towEntry.damageMissing.uINarrativeRichTextEdit);
    // String text = Playback.driver.findElement(By.xpath(".//body")).getText();
    // verify.ExpectedValueIsTrue(text.contains(text));
  }

  async clickAddNewOrEditButton(): Promise<void> {
    // uIMapTow.towEntry.damageMissing.uIAddNewButton.click();
  }

  async enterAtText(): Promise<void> {
    // Playback.waitForControlReady();
    // Actions actions = new Actions(Playback.driver);
    // WebElement text = uIMapTow.towEntry.damageMissing.uIDamageMissingRichTextEdit.findElement(By.xpath("//body"));
    // actions.moveToElement(text).click();
    // actions.sendKeys(BaseData.getTowModuleValue("damageMissingRichText")).build().perform();
    // Playback.waitForControlReady();
  }

}

export class PropertyInventoryPage {
  readonly page: Page;
  readonly propertyInventoryRichTextEdit: Locator;
  readonly internalSaveButton: Locator;
  readonly internalResetButton: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly loadButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.propertyInventoryRichTextEdit = page.locator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
    this.internalSaveButton = page.locator('#cmdInternalSave');
    this.internalResetButton = page.locator('#cmdInternalRefresh');
    this.bottomLeftSideStatusBar = page.locator("//div[@id=\'tab0\']//td[@class = \'status\']//b");
    this.loadButton = page.locator('#ctrlUsrKPITxtEdit_cmdload');
  }

  async enterText(): Promise<void> {
    // Playback.waitForControlReady();
    // Actions actions = new Actions(Playback.driver);
    // WebElement text = uIMapTow.towEntry.propertyInventory.uIPropertyInventoryRichTextEdit.findElement(By.xpath("//body"));
    // actions.moveToElement(text).click();
    // actions.sendKeys(Randomized.randomString(20)).build().perform();
    // Playback.waitForControlReady();
  }

  async enterAndGetLessText(): Promise<void> {
    // String character = Randomized.randomString(10);
    // Playback.waitForControlReady();
    // Actions actions = new Actions(Playback.driver);
    // actions.moveToElement(uIMapTow.towEntry.propertyInventory.uIPropertyInventoryRichTextEdit).click();
    // actions.sendKeys(character).build().perform();
    // Playback.waitForControlReady();
    // Playback.setTestContextAttribute("Character", character);
  }

  async getText(): Promise<void> {
    // uIMapTow.towEntry.propertyInventory.uIPropertyInventoryRichTextEdit.click();
    // objectIdentification.windowHandle.switchToFrame("javascript");
    // String text = Playback.driver.findElement(By.xpath("//body")).getText();
    // Playback.setTestContextAttribute("Text", text);
  }

  async getText1(): Promise<void> {
    // String text1 = uIMapTow.towEntry.propertyInventory.uIPropertyInventoryRichTextEdit.getAttribute("value");
    // Playback.setTestContextAttribute("Text1", text1);
  }

  async saveInternalScreen(): Promise<void> {
    // uIMapTow.towEntry.propertyInventory.uIInternalSaveButton.click();
    // popup.confirm.yes();
  }

  async resetInternalScreen(): Promise<void> {
    // uIMapTow.towEntry.propertyInventory.uIInternalResetButton.click();
  }

  async verifyFirstEnteredStringAppear(text: string): Promise<void> {
    // uIMapTow.towEntry.propertyInventory.uIPropertyInventoryRichTextEdit.click();
    // objectIdentification.windowHandle.switchToFrame("javascript");
    // String firstEnteredString = Playback.driver.findElement(By.xpath("//body")).getText();
    // verify.ExpectedPropertyValueIsEqual(text, firstEnteredString);
  }

  async verifyLastEnteredStringDisappear(character: string): Promise<void> {
    // uIMapTow.towEntry.propertyInventory.uIPropertyInventoryRichTextEdit.click();
    // objectIdentification.windowHandle.switchToFrame("javascript");
    // String lastEnteredString = Playback.driver.findElement(By.xpath("//body")).getText();
    // verify.ExpectedValueIsFalse(lastEnteredString.contains(character));
  }

  async verify1003UpdateSuccessfulFooterMessage(): Promise<void> {
    // String AdditionMessage = uIMapTow.towEntry.propertyInventory.uIBottomLeftSideStatusBar.getText();
    // verify.ExpectedValueIsTrue(AdditionMessage.contains("1003 - Update Successful"));
  }

  async verify1002AdditionSuccessfulFooterMessage(): Promise<void> {
    // String AdditionMessage = uIMapTow.towEntry.propertyInventory.uIBottomLeftSideStatusBar.getText();
    // verify.ExpectedValueIsTrue(AdditionMessage.contains("1002 - Addition Successful"));
  }

  async clickLoad(): Promise<void> {
    // uIMapTow.towEntry.propertyInventory.uILoadButton.click();
  }

  async enterAtText(): Promise<void> {
    // Playback.waitForControlReady();
    // Actions actions = new Actions(Playback.driver);
    // WebElement text = uIMapTow.towEntry.propertyInventory.uIPropertyInventoryRichTextEdit.findElement(By.xpath("//body"));
    // actions.moveToElement(text).click();
    // actions.sendKeys(BaseData.getTowModuleValue("PropertyInventoryRichText")).build().perform();
    // Playback.waitForControlReady();
  }

}

export class ForfeiturePage {
  readonly page: Page;
  readonly crimeEdit: Locator;
  readonly estimatedValueEdit: Locator;
  readonly lienOfAmountEdit: Locator;
  readonly clearIcon: Locator;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly airConditionerRadioButton: Locator;
  readonly keysRadioButton: Locator;
  readonly speakersRadioButton: Locator;
  readonly tapeDeckRadioButton: Locator;
  readonly lienOnVehicleYesRadioButton: Locator;
  readonly gasGaugeReadingEdit: Locator;
  readonly mechanicalConditonGoodRadioButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.crimeEdit = page.locator('#tabTow_tmpl5_ctrlUsrForfeiture_txtCrime');
    this.estimatedValueEdit = page.locator('#tabTow_tmpl5_ctrlUsrForfeiture_curEstimateVal');
    this.lienOfAmountEdit = page.locator('#tabTow_tmpl5_ctrlUsrForfeiture_curLienAmt');
    this.clearIcon = page.locator('#tabTow_tmpl5_ctrlUsrForfeiture_imgClearOper');
    this.lastNameEdit = page.locator('#tabTow_tmpl5_ctrlUsrForfeiture_nmcLienID_LastName');
    this.firstNameEdit = page.locator('#tabTow_tmpl5_ctrlUsrForfeiture_nmcLienID_FirstName');
    this.airConditionerRadioButton = page.locator('#tabTow_tmpl5_ctrlUsrForfeiture_nmcLienID_FirstName');
    this.keysRadioButton = page.locator('#tabTow_tmpl5_ctrlUsrForfeiture_nmcLienID_FirstName');
    this.speakersRadioButton = page.locator('#tabTow_tmpl5_ctrlUsrForfeiture_nmcLienID_FirstName');
    this.tapeDeckRadioButton = page.locator('#tabTow_tmpl5_ctrlUsrForfeiture_nmcLienID_FirstName');
    this.lienOnVehicleYesRadioButton = page.locator('#tabTow_tmpl5_ctrlUsrForfeiture_rdoYes');
    this.gasGaugeReadingEdit = page.locator('#tabTow_tmpl5_ctrlUsrForfeiture_txtGasGauge');
    this.mechanicalConditonGoodRadioButton = page.locator('#tabTow_tmpl5_ctrlUsrForfeiture_rdoGood');
  }

  async enterCrime(): Promise<void> {
    // uIMapTow.towEntry.forfeiture.uICrimeEdit.sendKeys(Randomized.randomString(10));
  }

  async enterEstimatedValue(): Promise<void> {
    // uIMapTow.towEntry.forfeiture.uIEstimatedValueEdit.sendKeys(String.valueOf(Randomized.getRandomNumber(3)));
  }

  async enterLienOfAmount(): Promise<void> {
    // uIMapTow.towEntry.forfeiture.uILienOfAmountEdit.sendKeys(String.valueOf(Randomized.getRandomNumber(3)));
  }

  async clickClearIcon(): Promise<void> {
    // uIMapTow.towEntry.forfeiture.uIClearIcon.click();
  }

  async selectAtLienHolder(): Promise<void> {
    // uIMapTow.towEntry.forfeiture.uILastNameEdit.sendKeys(BaseData.getTowModuleValue("LastName"));
    // uIMapTow.towEntry.forfeiture.uIFirstNameEdit.sendKeys(Keys.TAB);
    // // Names.NameSearchHelpWindow.SelectName(); - for Java conversion commented by
    // // Mohan
  }

  async selectEquipments(): Promise<void> {
    // uIMapTow.towEntry.forfeiture.uIAirConditionerRadioButton.click();
    // uIMapTow.towEntry.forfeiture.uIKeysRadioButton.click();
    // uIMapTow.towEntry.forfeiture.uISpeakersRadioButton.click();
    // uIMapTow.towEntry.forfeiture.uITapeDeckRadioButton.click();
  }

  async clickYesinLienOnVehicle(): Promise<void> {
    // uIMapTow.towEntry.forfeiture.uILienOnVehicleYesRadioButton.click();
  }

  async enterAtGasGaugeReading(): Promise<void> {
    // uIMapTow.towEntry.forfeiture.uIGasGaugeReadingEdit.sendKeys(BaseData.getTowModuleValue("GasGaugeReading"));
  }

  async clickGoodInMechanicalCondition(): Promise<void> {
    // uIMapTow.towEntry.forfeiture.uIMechanicalConditonGoodRadioButton.click();
  }

}

export class ReleasePage {
  readonly page: Page;
  readonly holdCheckbox: Locator;
  readonly reasonComboBox: Locator;
  readonly proofOfEdit: Locator;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly releaseDateEdit: Locator;
  readonly releaseTimeEdit: Locator;
  readonly releasedBySearchButton: Locator;
  readonly commentsEdit: Locator;
  readonly releaseToNameTypeEdit: Locator;
  readonly releaseToNameIDEdit: Locator;
  readonly releasedByEdit: Locator;
  readonly releasedBySignatureButton: Locator;
  readonly releasedByClearButton: Locator;
  readonly releaseToClearButton: Locator;
  readonly releaseToSignatureButton: Locator;
  readonly releasedBySignatureCheckBox: Locator;
  readonly clearButton: Locator;
  readonly warrantIconButton: Locator;
  readonly nameIconButton: Locator;
  readonly holdReasonDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.holdCheckbox = page.locator('#tabTow_tmpl6_ctrlUsrRelease_chkIsHold');
    this.reasonComboBox = page.locator('#tabTow_tmpl6_ctrlUsrRelease_cddHoldReason_DropDown');
    this.proofOfEdit = page.locator('#tabTow_tmpl6_ctrlUsrRelease_txtProofofOwner');
    this.lastNameEdit = page.locator('#tabTow_tmpl6_ctrlUsrRelease_nmcRelName_LastName');
    this.firstNameEdit = page.locator('#tabTow_tmpl6_ctrlUsrRelease_nmcRelName_FirstName');
    this.releaseDateEdit = page.locator("//input[@id=\'tabTow_tmpl6_ctrlUsrRelease_dttmReleaseDttm_Date_KPIDttmCtrl\']");
    this.releaseTimeEdit = page.locator("//table[@id=\'tabTow_tmpl6_ctrlUsrRelease_dttmReleaseDttm_Time\']//input");
    this.releasedBySearchButton = page.locator('#tabTow_tmpl6_ctrlUsrRelease_lupRelBy_imgBtn');
    this.commentsEdit = page.locator('#tabTow_tmpl6_ctrlUsrRelease_txtRelComments');
    this.releaseToNameTypeEdit = page.locator('#tabTow_tmpl6_ctrlUsrRelease_nmcRelName_NameType');
    this.releaseToNameIDEdit = page.locator('#tabTow_tmpl6_ctrlUsrRelease_nmcRelName_NameTypeID');
    this.releasedByEdit = page.locator('#tabTow_tmpl6_ctrlUsrRelease_lupRelBy_CodeValue');
    this.releasedBySignatureButton = page.locator('#tabTow_tmpl6_ctrlUsrRelease_imgRelSign');
    this.releasedByClearButton = page.locator('#tabTow_tmpl6_ctrlUsrRelease_imgClrRelinq');
    this.releaseToClearButton = page.locator('#tabTow_tmpl6_ctrlUsrRelease_imgClrRelTo');
    this.releaseToSignatureButton = page.locator('#tabTow_tmpl6_ctrlUsrRelease_imgSign');
    this.releasedBySignatureCheckBox = page.locator('#tabTow_tmpl6_ctrlUsrRelease_imgReleasedSign_chkIsEnableSign');
    this.clearButton = page.locator('#imgClear');
    this.warrantIconButton = page.locator('#tabTow_tmpl6_ctrlUsrRelease_nmcRelName_imgWant');
    this.nameIconButton = page.locator('#tabTow_tmpl6_ctrlUsrRelease_nmcRelName_imgSrch');
    this.holdReasonDropdown = page.locator('#tabTow_tmpl6_ctrlUsrRelease_cddHoldReason_DropDown');
  }

  async clickHoldCheckbox(): Promise<void> {
    // uIMapTow.towEntry.release.uIHoldCheckbox.click();
  }

  async selectReason(): Promise<void> {
    // objectIdentification.randomIdentify.selectDropDownOption(uIMapTow.towEntry.release.uIReasonComboBox);
  }

  async uncheckHoldCheckbox(): Promise<void> {
    // if (uIMapTow.towEntry.release.uIHoldCheckbox.isSelected())
    // uIMapTow.towEntry.release.uIHoldCheckbox.click();
  }

  async enterProofOf(): Promise<void> {
    // uIMapTow.towEntry.release.uIProofOfEdit.sendKeys(Randomized.randomString(10));
  }

  async selectReleaseTo(): Promise<void> {
    // uIMapTow.towEntry.release.uILastNameEdit.sendKeys("A");
    // uIMapTow.towEntry.release.uIFirstNameEdit.sendKeys(Keys.TAB);
    // // Names.NameSearchHelpWindow.SelectName(); commented for Java Conversion -
    // // Mohan
  }

  async enterReleaseTimeAs2HourBefore(): Promise<void> {
    // uIMapTow.towEntry.release.uIReleaseTimeEdit.click();
    // uIMapTow.towEntry.release.uIReleaseTimeEdit.sendKeys(Randomized.getPreviousTimeByHours(2, "HH:mm:ss"));
    // System.out.println(Randomized.getPreviousTimeByHours(2, "HH:mm:ss"));
  }

  async verifyCurrentDateAutoPopulatesInRequestedDate(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual(Randomized.getCurrentDate(),
    // uIMapTow.towEntry.release.uIReleaseDateEdit.getAttribute("value"));
  }

  async selectReleasedBy(): Promise<void> {
    // uIMapTow.towEntry.release.uIReleasedBySearchButton.click();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async enterComments(): Promise<void> {
    // uIMapTow.towEntry.release.uICommentsEdit.sendKeys(Randomized.randomString(15));
  }

  async verifyAtReleaseToLastName(): Promise<void> {
    // String attribute = uIMapTow.towEntry.release.uILastNameEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(attribute.contains(BaseData.getTowModuleValue("ReleaseToLastName")));
  }

  async verifyHoldCheckBoxSelected(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.release.uIHoldCheckbox.isSelected());
  }

  async verifyAtHoldReason(): Promise<void> {
    // String actual = new Select(uIMapTow.towEntry.release.uIReasonComboBox).getFirstSelectedOption().getText();
    // String expected = BaseData.getTowModuleValue("HoldReason");
    // verify.ExpectedPropertyValueIsEqual(expected, actual);
  }

  async verifyHoldReasonDropdownDisabled(): Promise<void> {
    // verify.ExpectedValueIsFalse(uIMapTow.towEntry.release.uIReasonComboBox.isEnabled());
  }

  async verifyHoldReasonDropdownEnabled(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.release.uIReasonComboBox.isEnabled());
  }

  async tabFirstName(): Promise<void> {
    // uIMapTow.towEntry.release.uIFirstNameEdit.sendKeys(Keys.TAB);
  }

  async enterAtReleaseToNameID(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // uIMapTow.towEntry.release.uIReleaseToNameTypeEdit
    // .sendKeys(BaseData.getTowModuleValue("ReleaseToNameID").substring(0, 1));
    // uIMapTow.towEntry.release.uIReleaseToNameIDEdit
    // .sendKeys(BaseData.getTowModuleValue("ReleaseToNameID").substring(2));
    // uIMapTow.towEntry.release.uIReleaseToNameIDEdit.sendKeys(Keys.TAB);
  }

  async enterAtReleaseToNameID1(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // uIMapTow.towEntry.release.uIReleaseToNameTypeEdit
    // .sendKeys(BaseData.getTowModuleValue("ReleaseToNameID").substring(0, 1));
    // uIMapTow.towEntry.release.uIReleaseToNameIDEdit
    // .sendKeys(BaseData.getTowModuleValue("ReleaseToNameID").substring(2));
    // uIMapTow.towEntry.release.uIReleaseToNameIDEdit.sendKeys(Keys.TAB);
  }

  async enterAtReleasedBy(): Promise<void> {
    // uIMapTow.towEntry.release.uIReleasedByEdit.sendKeys(BaseData.getTowModuleValue("ReleasedBy"));
    // uIMapTow.towEntry.release.uIReleasedByEdit.sendKeys(Keys.TAB);
  }

  async clickReleasedBySignatureButton(): Promise<void> {
    // uIMapTow.towEntry.release.uIReleasedBySignatureButton.click();
  }

  async clickReleaseToSignatureButton(): Promise<void> {
    // uIMapTow.towEntry.release.uIReleaseToSignatureButton.click();
  }

  async verifySignatureCheckBoxIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.release.uIReleasedBySignatureCheckBox.isDisplayed());
  }

  async clickReleasedBySignatureCheckBox(): Promise<void> {
    // uIMapTow.towEntry.release.uIReleasedBySignatureCheckBox.click();
  }

  async verifyReleasedBySignatureCheckBoxIsSelected(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.release.uIReleasedBySignatureCheckBox.isSelected());
  }

  async verifyAtReleasedBy(): Promise<void> {
    // String attribute = uIMapTow.towEntry.release.uIReleasedByEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(attribute.contains(BaseData.getVehicleModuleValue("ReleasedBy")));
  }

  async verifyReleasedByClearButtonIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.release.uIReleasedByClearButton.isDisplayed());
  }

  async verifyReleaseToClearButtonIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.release.uIReleaseToClearButton.isDisplayed());
  }

  async clickReleaseToClearButton(): Promise<void> {
    // uIMapTow.towEntry.release.uIReleaseToClearButton.click();
  }

  async verifyAtReleaseToLastNameWithActiveWrecker(Value: string): Promise<void> {
    // String attribute = uIMapTow.towEntry.release.uILastNameEdit.getAttribute("value");
    // verify.ExpectedValueIsTrue(Value.contains(attribute));
  }

  async verifyReleaseToLastNameIsDisabled(): Promise<void> {
    // String attribute = uIMapTow.towEntry.release.uILastNameEdit.getAttribute("class");
    // verify.ExpectedValueIsTrue(attribute.contains("textboxInactive"));
  }

  async verifyReleaseToLastNameIsEmpty(): Promise<void> {
    // String text = uIMapTow.towEntry.release.uILastNameEdit.getText();
    // System.out.println(text);
    // verify.ExpectedValueIsTrue(text.isEmpty());
  }

  async clearReleasedBy(): Promise<void> {
    // uIMapTow.towEntry.release.uIReleasedByEdit.click();
    // uIMapTow.towEntry.release.uIReleasedByEdit.clear();
    // uIMapTow.towEntry.release.uIReleasedByEdit.sendKeys(Keys.TAB);
  }

  async enterAtReleasedBy1(): Promise<void> {
    // uIMapTow.towEntry.release.uIReleasedByEdit.sendKeys(BaseData.getTowModuleValue("ReleasedBy1"));
    // uIMapTow.towEntry.release.uIReleasedByEdit.sendKeys(Keys.TAB);
  }

  async clickClearButton(): Promise<void> {
    // uIMapTow.towEntry.release.uIClearButton.click();
  }

  async clickReleasedByClearButton(): Promise<void> {
    // uIMapTow.towEntry.release.uIReleasedByClearButton.click();
  }

  async enterPreviousDate(): Promise<void> {
    // WebElement uIReleaseDateEdit = uIMapTow.towEntry.release.uIReleaseDateEdit;
    // while (!uIReleaseDateEdit.getText().isEmpty()) {
    // uIMapTow.towEntry.release.uIReleaseDateEdit.click();
    // uIMapTow.towEntry.release.uIReleaseDateEdit.clear();
    // uIReleaseDateEdit.sendKeys(Randomized.getPreviousDate(1, "MM/DD/YYYY"));
    // uIMapTow.towEntry.release.uIReleaseTimeEdit.sendKeys(Keys.TAB);
  }

  async enterFutureDate(): Promise<void> {
    // String futureDate = Randomized.getFutureDate(2, "MM/dd/yyyy");
    // WebElement uIReleaseDateEdit = uIMapTow.towEntry.release.uIReleaseDateEdit;
    // String text1 = uIReleaseDateEdit.getAttribute("value");
    // for (int i = 0; i < text1.length(); i++) {
    // uIMapTow.towEntry.release.uIReleaseDateEdit.click();
    // uIMapTow.towEntry.release.uIReleaseDateEdit.sendKeys(Keys.BACK_SPACE);
    // uIReleaseDateEdit.sendKeys(futureDate);
    // uIMapTow.towEntry.release.uIReleaseTimeEdit.sendKeys(Keys.TAB);
  }

  async tabOutDateandTime(): Promise<void> {
    // uIMapTow.towEntry.release.uIReleaseDateEdit.click();
    // uIMapTow.towEntry.release.uIReleaseDateEdit.sendKeys(Keys.TAB);
  }

  async verifyWarrantIcon(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.release.uIWarrantIconButton.getAttribute("src").contains("warrant"));
  }

  async clickNameInfoIcon(): Promise<void> {
    // uIMapTow.towEntry.release.uINameIconButton.click();
  }

  async selectAtHoldReason(): Promise<void> {
    // objectIdentification.manualIdentify.selectDropDownOption(uIMapTow.towEntry.release.uIHoldReasonDropdown,
    // BaseData.getTowModuleValue("HoldReason"));
  }

}

export class TowDispositionTabPage {
  readonly page: Page;
  readonly authorizedBySearchButton: Locator;
  readonly dateEdit: Locator;
  readonly timeEdit: Locator;
  readonly methodComboBox: Locator;
  readonly custom1Edit: Locator;
  readonly authorizedByEdit: Locator;
  readonly clickHereToSignButton: Locator;
  readonly clearButton: Locator;
  readonly signatureCheckBox: Locator;
  readonly authorizedBySignatureCheckBox: Locator;
  readonly custom2Edit: Locator;
  readonly custom3Edit: Locator;
  readonly custom4Edit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.authorizedBySearchButton = page.locator('#tabTow_tmpl7_ctrlUsrDisposition_lupAuthorizedBy_imgBtn');
    this.dateEdit = page.locator('#tabTow_tmpl7_ctrlUsrDisposition_dttmDatetime_Date_KPIDttmCtrl');
    this.timeEdit = page.locator("//table[@id=\'tabTow_tmpl7_ctrlUsrDisposition_dttmDatetime_Time\']//input");
    this.methodComboBox = page.locator('#tabTow_tmpl7_ctrlUsrDisposition_cddMethod_DropDown');
    this.custom1Edit = page.locator('#tabTow_tmpl7_ctrlUsrDisposition_txtCustom1');
    this.authorizedByEdit = page.locator('#tabTow_tmpl7_ctrlUsrDisposition_lupAuthorizedBy_CodeValue');
    this.clickHereToSignButton = page.locator('#tabTow_tmpl7_ctrlUsrDisposition_imgAuthSign');
    this.clearButton = page.locator('#tabTow_tmpl7_ctrlUsrDisposition_imgClrRelinq');
    this.signatureCheckBox = page.locator('#tabTow_tmpl7_ctrlUsrDisposition_imgAuthorizedSign_chkIsEnableSign');
    this.authorizedBySignatureCheckBox = page.locator('#tabTow_tmpl7_ctrlUsrDisposition_imgAuthorizedSign_chkIsEnableSign');
    this.custom2Edit = page.locator('#tabTow_tmpl7_ctrlUsrDisposition_txtCustom2');
    this.custom3Edit = page.locator('#tabTow_tmpl7_ctrlUsrDisposition_txtCustom3');
    this.custom4Edit = page.locator('#tabTow_tmpl7_ctrlUsrDisposition_txtCustom4');
  }

  async selectAuthorizedBy(): Promise<void> {
    // uIMapTow.towEntry.towDispositionTab.uIAuthorizedBySearchButton.click();
    // popup.kPICodedLookup.randomKPIHelpSelect();
  }

  async tabOutDateandTime(): Promise<void> {
    // uIMapTow.towEntry.towDispositionTab.uIDateEdit.sendKeys(Keys.TAB);
    // uIMapTow.towEntry.towDispositionTab.uITimeEdit.sendKeys(Keys.TAB);
  }

  async selectMethod(): Promise<void> {
    // objectIdentification.randomIdentify
    // .selectDropDownOption(uIMapTow.towEntry.towDispositionTab.uIMethodComboBox);
  }

  async enterCustom1(): Promise<void> {
    // uIMapTow.towEntry.towDispositionTab.uICustom1Edit
    // .sendKeys(Randomized.randomAlphanumericSpecialCharsString(15));
  }

  async enterAtAuthorizedBy(): Promise<void> {
    // uIMapTow.towEntry.towDispositionTab.uIAuthorizedByEdit
    // .sendKeys(BaseData.getVehicleModuleValue("AuthorizedBy"));
    // uIMapTow.towEntry.towDispositionTab.uIAuthorizedByEdit.sendKeys(Keys.TAB);
  }

  async clickSignatureButton(): Promise<void> {
    // uIMapTow.towEntry.towDispositionTab.uIClickHereToSignButton.click();
  }

  async verifyClearButtonIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.towDispositionTab.uIClearButton.isDisplayed());
  }

  async clickClearButton(): Promise<void> {
    // uIMapTow.towEntry.towDispositionTab.uIClearButton.click();
  }

  async verifySignatureCheckBoxIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.towDispositionTab.uISignatureCheckBox.isDisplayed());
  }

  async clickSignatureCheckBox(): Promise<void> {
    // uIMapTow.towEntry.towDispositionTab.uISignatureCheckBox.click();
  }

  async verifyReleaseToClearButtonIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.towDispositionTab.uIClearButton.isDisplayed());
  }

  async verifySignatureCheckBoxIsSelected(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.towDispositionTab.uISignatureCheckBox.isSelected());
  }

  async verifyReleasedByClearButtonIsDisplayed(): Promise<void> {
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.release.uIReleasedByClearButton.isDisplayed());
  }

  async clickAuthorizedBysignatureCheckBox(): Promise<void> {
    // uIMapTow.towEntry.towDispositionTab.uIAuthorizedBySignatureCheckBox.click();
  }

  async enterFutureDate(): Promise<void> {
    // String futureDate = Randomized.getFutureDate(3, "MM/dd/yyyy");
    // uIMapTow.towEntry.towDispositionTab.uIDateEdit.sendKeys(futureDate);
    // uIMapTow.towEntry.towDispositionTab.uITimeEdit.sendKeys(Keys.TAB);
  }

  async enterPreviousDateFromCurrentDate(): Promise<void> {
    // System.out.println(Randomized.getPreviousDate(1, "MM/dd/yyyy"));
    // uIMapTow.towEntry.towDispositionTab.uIDateEdit.sendKeys(Keys.CONTROL + "a");
    // uIMapTow.towEntry.towDispositionTab.uIDateEdit.sendKeys(Keys.BACK_SPACE);
    // uIMapTow.towEntry.towDispositionTab.uIDateEdit.sendKeys(Randomized.getPreviousDate(1, "MM/dd/yyyy"));
  }

  async enterAtCustom2(): Promise<void> {
    // uIMapTow.towEntry.towDispositionTab.uICustom2Edit
    // .sendKeys(BaseData.getTowModuleValue("Custom2"));
  }

  async verifyAtCustom1(): Promise<void> {
    // String Text = uIMapTow.towEntry.towDispositionTab.uICustom1Edit.getText();
    // System.out.println(Text);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("Custom1"), Text);
  }

  async enterAtCustom1(): Promise<void> {
    // uIMapTow.towEntry.towDispositionTab.uICustom1Edit
    // .sendKeys(BaseData.getTowModuleValue("Custom1"));
  }

  async verifyAtCustom2(): Promise<void> {
    // String Text = uIMapTow.towEntry.towDispositionTab.uICustom2Edit.getText();
    // System.out.println(Text);
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("Custom2"), Text);
  }

  async enterAtCustom3(): Promise<void> {
    // uIMapTow.towEntry.towDispositionTab.uICustom3Edit
    // .sendKeys(BaseData.getTowModuleValue("Custom3"));
  }

  async enterAtCustom4(): Promise<void> {
    // uIMapTow.towEntry.towDispositionTab.uICustom4Edit
    // .sendKeys(BaseData.getTowModuleValue("Custom4"));
  }

}

export class TowNotesTabPage {
  readonly page: Page;
  readonly notesEdit: Locator;
  readonly saveButton: Locator;
  readonly resetButton: Locator;
  readonly notesTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.notesEdit = page.locator('#txtNotes');
    this.saveButton = page.locator('#cmdSave');
    this.resetButton = page.locator('#cmdReset');
    this.notesTable = page.locator('#grdHistory');
  }

  async enterNotes(): Promise<void> {
    // uIMapTow.towEntry.towNotesTab.uINotesEdit.sendKeys(Randomized.randomAlphanumericSpecialCharsString(15));
  }

  async getNotes(): Promise<string> {
    // String notes = uIMapTow.towEntry.towNotesTab.uINotesEdit.getAttribute("value");
    // // Playback.setTestContextAttribute("Notes", notes);
    // return notes;
  }

  async clickResetButton(): Promise<void> {
    // uIMapTow.towEntry.towNotesTab.uIResetButton.click();
  }

  async clickSaveButton(): Promise<void> {
    // uIMapTow.towEntry.towNotesTab.uISaveButton.click();
  }

  async verifyEnteredNotesDisappears(): Promise<void> {
    // verify.ExpectedPropertyValueIsEqual("", uIMapTow.towEntry.towNotesTab.uINotesEdit.getAttribute("value"));
  }

  async verifyEntereNotesInGrid(notes: string): Promise<void> {
    // Playback.waitForPageLoad();
    // verify.ExpectedValueIsTrue(uIMapTow.towEntry.towNotesTab.uINotesTable.getText().contains(notes));
  }

}

export class TowRefusePage {
  readonly page: Page;
  readonly callYearEdit: Locator;
  readonly callNumberEdit: Locator;
  readonly vendorComboBox: Locator;
  readonly searchButton: Locator;
  readonly towRefuseTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.callYearEdit = page.locator('#nbrCallNumber_Year');
    this.callNumberEdit = page.locator('#nbrCallNumber_Number');
    this.vendorComboBox = page.locator('#cddWrecker');
    this.searchButton = page.locator('#cmdSearch');
    this.towRefuseTable = page.locator('#grdTowRefusal');
  }

  async enterAtCallNo(): Promise<void> {
    // uIMapTow.towRefuse.uICallYearEdit.sendKeys(BaseData.getTowModuleValue("CallNo").substring(0, 2));
    // uIMapTow.towRefuse.uICallNumberEdit.sendKeys(BaseData.getTowModuleValue("CallNo").substring(3));
    // uIMapTow.towRefuse.uICallNumberEdit.sendKeys(Keys.TAB);
  }

  async selectAtVendor(): Promise<void> {
    // uIMapTow.towRefuse.uIVendorComboBox.sendKeys(BaseData.getTowModuleValue("Vendor"));
  }

  async clickSearchButton(): Promise<void> {
    // uIMapTow.towRefuse.uISearchButton.click();
  }

  async verifyAtCallNo(): Promise<void> {
    // Playback.pageLoadThreadWait();
    // WebElement row = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapTow.towRefuse.uITowRefuseTable, BaseData.getTowModuleValue("CallNo"));
    // WebElement Call = objectIdentification.manualIdentify.getGridCell(uIMapTow.towRefuse.uITowRefuseTable, row,
    // "Call#");
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("CallNo"), Call.getText());
  }

  async verifyRefuseAsCurrentDate(): Promise<void> {
    // WebElement row = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapTow.towRefuse.uITowRefuseTable, BaseData.getTowModuleValue("CallNo"));
    // verify.ExpectedPropertyValueIsEqual(Randomized.removeStringByIndexCount(Randomized.getCurrentDate(), 6, 2),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapTow.towRefuse.uITowRefuseTable, row, "Refuse Date").getText());
    // String dateStr = Randomized.removeStringByIndexCount(Randomized.getCurrentDate(), 6, 2);
    // String newStr = dateStr.substring(0, 5) + dateStr.substring(8, dateStr.length());
  }

  async verifyContractorAtVendor(): Promise<void> {
    // WebElement row = objectIdentification.manualIdentify.getGridRowByCellInnerText(
    // uIMapTow.towRefuse.uITowRefuseTable, BaseData.getTowModuleValue("CallNo"));
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("Vendor"),
    // objectIdentification.manualIdentify
    // .getGridCell(uIMapTow.towRefuse.uITowRefuseTable, row, "Contractor").getText());
  }

  async clickRowByAtCallNo(): Promise<void> {
    // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapTow.towRefuse.uITowRefuseTable,
    // BaseData.getTowModuleValue("CallNo"));
  }

  async verifyAtRefuseDate(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapTow.towRefuse.uITowRefuseTable, "Refuse Date");
    // verify.ExpectedValueIsTrue(gridTableColumnValues.contains(BaseData.getTowModuleValue("RefuseDate")));
  }

  async verifyAtVendor(): Promise<void> {
    // List<String> gridTableColumnValues = objectIdentification.manualIdentify
    // .getGridTableColumnValues(uIMapTow.towRefuse.uITowRefuseTable, "Vendor");
    // System.out.println(gridTableColumnValues);
    // verify.ExpectedValueIsTrue(gridTableColumnValues.contains(BaseData.getTowModuleValue("Vendor")));
  }

  async enterAtCallNo(callNo: string): Promise<void> {
    // uIMapTow.towRefuse.uICallYearEdit.sendKeys(callNo.substring(0, 2));
    // uIMapTow.towRefuse.uICallNumberEdit.sendKeys(callNo.substring(3));
    // uIMapTow.towRefuse.uICallNumberEdit.sendKeys(Keys.TAB);
  }

  async verifyAtRemarksInGrid(): Promise<void> {
    // String reason = objectIdentification.manualIdentify.getGridCell(uIMapTow.towRefuse.uITowRefuseTable, BaseData.getTowModuleValue("Reason")).getText();
    // verify.ExpectedPropertyValueIsEqual(BaseData.getTowModuleValue("Reason"),reason,"Reason is not same as expected-->");
  }

}

export class TowRefusePopUpScreenPage {
  readonly page: Page;
  readonly reasonEdit: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly deleteButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.reasonEdit = page.locator('#txtHoldReason');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.deleteButton = page.locator('#cmdDelete');
  }

  async clickSaveButton(): Promise<void> {
    // uIMapTow.towRefusePopUpScreen.uISaveButton.click();
  }

  async save(): Promise<void> {
    // uIMapTow.towRefusePopUpScreen.uISaveButton.click();
    // popup.confirm.yes();
  }

  async clickSaveNCloseButton(): Promise<void> {
    // uIMapTow.towRefusePopUpScreen.uISaveNCloseButton.click();
  }

  async saveNCloseScreen(): Promise<void> {
    // uIMapTow.towRefusePopUpScreen.uISaveNCloseButton.click();
    // popup.confirm.yes();
  }

  async clickDeleteButton(): Promise<void> {
    // uIMapTow.towRefusePopUpScreen.uIDeleteButton.click();
    // popup.confirm.yes();
  }

  async enterAtReason(): Promise<void> {
    // uIMapTow.towRefusePopUpScreen.uIReasonEdit.sendKeys(BaseData.getTowModuleValue("Reason"));
  }

}

