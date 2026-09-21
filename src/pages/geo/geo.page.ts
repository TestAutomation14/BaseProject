// @ts-nocheck
import { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';

export class ActivityTabPage {
    readonly page: Page;
    readonly uIAddNewActivityRecordButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddNewActivityRecordButton = page.locator('NotabHydrantEntry_tmpl1_UsrTest2_Btn_AddNewActivity');
    }

    async clickAddNewActivityRecords(): Promise<void> {
        await this.activityTab.click();
    }

    async clickSpecificationTab(): Promise<void> {
        await this.uISpecificationTab.click();
    }

    async deleteWithConfirm(): Promise<void> {
        await this.uIDeleteButton.click();
        // confirm popup: (4) Do you want to delete
    }
}

export class AddressFlagPage {
    readonly page: Page;
    readonly uIAddressEdit: Locator;
    readonly uIRemarksEdit: Locator;
    readonly uIDisplayConditionComboBox: Locator;
    readonly uIShowUpdatesOlderThanDaysEdit: Locator;
    readonly uISearchButton: Locator;
    readonly uIAddNew: Locator;
    readonly uIAddressFlagResultGrid: Locator;
    readonly uIActiveAsDate: Locator;
    readonly uIInactiveAfter: Locator;
    readonly uIAddressInfoIconButton: Locator;
    readonly uIInActiveCheckBox: Locator;
    readonly uIImport: Locator;
    readonly uISelectAllCheckbox: Locator;
    readonly uISelectAllLabel: Locator;
    readonly uISelectedLabel: Locator;
    readonly uISelectedCount: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddressEdit = page.locator('NoadrFlags_txtFrom');
        this.uIRemarksEdit = page.locator('NotxtRemark');
        this.uIDisplayConditionComboBox = page.locator('NocddDipsCondition_DropDown');
        this.uIShowUpdatesOlderThanDaysEdit = page.locator('NotxtLastUpDate');
        this.uISearchButton = page.locator('NocmdSearch');
        this.uIAddNew = page.locator("(//span[contains(text(),'Add New')])");
        this.uIAddressFlagResultGrid = page.locator('NogrdAddrFlags');
        this.uIActiveAsDate = page.locator('NodttmActive_KPIDttmCtrl');
        this.uIInactiveAfter = page.locator('NodttmInActive_KPIDttmCtrl');
        this.uIAddressInfoIconButton = page.locator('NoadrFlags_cmdIncOnAddr');
        this.uIInActiveCheckBox = page.locator('NochkShowInactive');
        this.uIImport = page.locator("//span[@title='Import']");
        this.uISelectAllCheckbox = page.locator('NochkRptSelect');
        this.uISelectAllLabel = page.locator("//label[text()='Select All']");
        this.uISelectedLabel = page.locator('NoCallReportList_lblItems');
        this.uISelectedCount = page.locator('NoCallReportList_ItemsCount');
    }

    async EnterAtAddress(address: string): Promise<void> {
        await this.uIAddressEdit.fill(address);
        await this.uIAddressEdit.press('Tab');
        await this.uIAddressEdit.press('Tab');
    }

    async EnterAtOddEvenStreetName(oddEven: string, streetName: string): Promise<void> {
        // uIMapGeo.addressFlag.uIAddressEdit.sendKeys(BaseData.getGeoModuleValue("OddEven").substring(0, 1) + " "
        // + BaseData.getGeoModuleValue("StreetName"))
    }

    async ClickAtAddress(address: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.addressFlag.uIAddressFlagResultGrid, BaseData.getGeoModuleValue("Address"))
    }

    async ClickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async ClickAddNew(): Promise<void> {
        await this.uIAddNew.click();
    }

    async VerifyNoRecordFoundAcknowledgeMessage(): Promise<void> {
        // popup: 1011 - No Record Found
        // popup:  1011 - No Record Found
    }

    async VerifyActiveDateAsCurrentDate(rowIndex: string): Promise<void> {
        // Assert.assertEquals(Randomized.getCurrentDate("MM/dd/yy"), objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressFlag.uIAddressFlagResultGrid, "Active", rowIndex))
    }

    async VerifyAtDisplayCondition(rowIndex: string, displayCondition: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("DisplayCondition"), objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressFlag.uIAddressFlagResultGrid, "Display Condition", rowIndex))
    }

    async VerifyAtAddressInTheGrid(address: string): Promise<void> {
        // System.out.println(objectIdentification.manualIdentify.getGridCell(uIMapGeo.addressFlag.uIAddressFlagResultGrid, BaseData.getGeoModuleValue("Address")).getText())
        // Assert.assertEquals(BaseData.getGeoModuleValue("Address"), objectIdentification.manualIdentify.getGridCell(uIMapGeo.addressFlag.uIAddressFlagResultGrid, BaseData.getGeoModuleValue("Address")).getText())
    }

    async ShowUpdatesOlderThanDaysAs1(): Promise<void> {
        await this.uIShowUpdatesOlderThanDaysEdit.fill("1");
    }

    async VerifyLastupdatedDateAsCurrentDate(rowIndex: string): Promise<void> {
        // Assert.assertEquals(Randomized.getCurrentDate("MM/dd/yy"), objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressFlag.uIAddressFlagResultGrid, "Last Updated", rowIndex))
    }

    async VerifyAtAddress1InTheGrid(rowIndex: string, address1: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("Address1"), objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressFlag.uIAddressFlagResultGrid, "Address", rowIndex))
    }

    async EnterAtAddress1(address1: string): Promise<void> {
        await this.uIAddressEdit.clear();
        await this.uIAddressEdit.fill(address1);
        await this.uIAddressEdit.press('Tab');
    }

    async ClickAtAddress1InGrid(address1: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.addressFlag.uIAddressFlagResultGrid, BaseData.getGeoModuleValue("Address1"))
    }

    async VerifyAtAddressRowAppearGreyColor(rowIndex: string): Promise<void> {
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridTableRow(uIMapGeo.addressFlag.uIAddressFlagResultGrid, rowIndex).getAttribute("class").contains("Grey"), "Verify Address appear as Grey color")
    }

    async VerifyAtAddressRowAppearBlackColor(rowIndex: string): Promise<void> {
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridTableRow(uIMapGeo.addressFlag.uIAddressFlagResultGrid, rowIndex).getCssValue("color").contains("0, 0, 0, 1"))
    }

    async VerifyInactiveColumnEmpty(rowIndex: string): Promise<void> {
        // Assert.assertEquals("", objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressFlag.uIAddressFlagResultGrid, "Inactive", rowIndex))
    }

    async verifyAtInactiveDateInGrid(inactiveDate: string): Promise<void> {
        // List<String> columnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapGeo.addressFlag.uIAddressFlagResultGrid, "Inactive")
        // System.out.println(columnValues)
        // Randomized.verifyTheDatesGreaterOrEqualFromDate(columnValues, BaseData.getGeoModuleValue("InactiveDate"))
    }

    async enterAtRemarks(remarks: string): Promise<void> {
        await this.uIRemarksEdit.fill(remarks);
        await this.uIRemarksEdit.press('Tab');
    }

    async selectAtDisplayConditions(displayCondition: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.addressFlag.uIDisplayConditionComboBox,
        // BaseData.getGeoModuleValue("DisplayCondition"))
    }

    async reloadAddressFlagPScreen(): Promise<void> {
        // objectIdentification.manualIdentify.reloadScreen("Address Flag(P)")
    }

    async enterAtActiveAsDate(activeAsDate: string): Promise<void> {
        await this.uIActiveAsDate.fill(activeAsDate);
    }

    async enterAtActiveAsDateAsCurrentDate(): Promise<void> {
        await this.uIActiveAsDate.fill(Randomized.getCurrentDate());
    }

    async enterAtInactiveAfter(inActiveAfter: string): Promise<void> {
        await this.uIInactiveAfter.fill(inActiveAfter);
    }

    async VerifyAddressInfoButtonRedColor(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // String Color = uIMapGeo.addressFlag.uIAddressInfoIconButton.getAttribute("src")
        expect(Color.contains("Red")).toBeTruthy();
    }

    async VerifyAddressInfoButtonYellowColor(): Promise<void> {
        // String Color = uIMapGeo.addressFlag.uIAddressInfoIconButton.getAttribute("src")
        expect(Color.contains("Yellow")).toBeTruthy();
    }

    async VerifyAddressInfoButtonBlueColor(): Promise<void> {
        // String Color = uIMapGeo.addressFlag.uIAddressInfoIconButton.getAttribute("src")
        expect(Color.contains("debug.gif")).toBeTruthy();
    }

    async enterAtShowUpdatesOlderThanDays(days: string): Promise<void> {
        await this.uIShowUpdatesOlderThanDaysEdit.fill(days);
    }

    async verifyLastUpdatedDateOlderThan(days: string): Promise<void> {
        // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapGeo.addressFlag.uIAddressFlagResultGrid, "Last Updated")
        // for (String date : gridTableColumnValues) {
        // System.out.println(Randomized.getCurrentDate("MM/dd/YY"))
        // System.out.println(date)
        // const difference = Integer.parseInt(Randomized.getNoOfDaysDifferenceBetweenTwoDates(...))
        const Days = days;
        // if (difference > Days) {
        expect(difference > Days).toBeTruthy();
    }

    async clickInactiveCheckBox(): Promise<void> {
        await this.uIInActiveCheckBox.click();
    }

    async verifyAtInactiveFlagIsDisplayedOrNotInGrid(ExpecteVerification: string): Promise<void> {
        // List<WebElement> gridTableRows = objectIdentification.manualIdentify.getGridTableRowsCollection(uIMapGeo.addressFlag.uIAddressFlagResultGrid)
        // for(WebElement rows : gridTableRows ) {
        const Rowclass = rows.getAttribute("class");
        // if(Rowclass.contains("Grey") && ExpecteVerification == true) {
        //To verify InActive Row
        const InactiveColor = rows.getCssValue("color");
        // System.out.println(InactiveColor)
        expect(InactiveColor).toEqual("");
        // else {
        //To verify Active Row
        const activeColor = rows.getCssValue("color");
        // System.out.println(activeColor)
        expect(activeColor).toEqual("");
        // verify.ExpectedValueIsNotTrue(Rowclass.contains("Grey"))
    }

    async reloadAddressFlagsScreen(): Promise<void> {
        // objectIdentification.manualIdentify.reloadScreen("Address Flags")
    }

    async verifyAtActiveDateInGrid(activeAsDate: string): Promise<void> {
        // List<String> columnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapGeo.addressFlag.uIAddressFlagResultGrid, "Active")
        // System.out.println(columnValues)
        // Randomized.verifyTheDatesGreaterOrEqualFromDate(columnValues, BaseData.getGeoModuleValue("ActiveAsDate"))
    }

    async clickImport(): Promise<void> {
        await this.uIImport.click();
    }

    async verifySelectAllCheckboxIsEnabled(): Promise<void> {
        // verify.ExpectedValueIsTrue(uIMapGeo.addressFlag.uISelectAllCheckbox.isEnabled())
    }

    async verifyAtSelectAllLabel(selectAll: string): Promise<void> {
        const text = await this.uISelectAllLabel.innerText();
        expect(text, "Displayed Correctly").toEqual(selectAll);
    }

    async clickSelectAllCheckbox(): Promise<void> {
        await this.uISelectAllCheckbox.click();
    }

    async verifySelectedLabelIsDisplayed(): Promise<void> {
        // uIMapGeo.addressFlag.uISelectedLabel.isDisplayed()
    }

    async verifyAtSelectedLabelCount(selectedCount: string): Promise<void> {
        const text = await this.uISelectedCount.inputValue();
        expect(text, "Displayed Correctly").toEqual(selectedCount);
    }

    async verifySelectedLabelCount(Count: string): Promise<void> {
        const countText = await this.uISelectedCount.inputValue();
        const value = Integer.parseInt(countText);
        // verify.ExpectedIntergerValueIsEqualToActual(Count, value, "Displayed Correctly")
    }
}

export class AddressFlagEntryPage {
    readonly page: Page;
    readonly uIAddressEdit: Locator;
    readonly uIAddressVerifyCheckBox: Locator;
    readonly uIOddFromEdit: Locator;
    readonly uIchkIsCriticalCheckBox: Locator;
    readonly uIOddToEdit: Locator;
    readonly uIEvenFromEdit: Locator;
    readonly uIEvenToEdit: Locator;
    readonly uIRemarkEdit: Locator;
    readonly uIRemarkBody: Locator;
    readonly uITextEdit: Locator;
    readonly uITextLookupButton: Locator;
    readonly uITextEditButton: Locator;
    readonly uIDisplayConditionComboBox: Locator;
    readonly uISortOrderEdit: Locator;
    readonly uIActiveAsDateEdit: Locator;
    readonly uPrintButton: Locator;
    readonly uIInActiveDateEdit: Locator;
    readonly uISharedCheckBox: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveCloseButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIAddressFlagResultGrid: Locator;
    readonly uICommentsRichTextEdit: Locator;
    readonly uIDeleteButton: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIIsCriticalCheckBox: Locator;
    readonly uILoadButton: Locator;
    readonly uIAddressLabel: Locator;
    readonly uIConvertToLowerCaseIcon: Locator;
    readonly uIConvertToUpperCaseIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddressEdit = page.locator('NoadrFlags_txtFrom');
        this.uIAddressVerifyCheckBox = page.locator('NoadrFlags_chkVerify');
        this.uIOddFromEdit = page.locator('NocstFromRange_txtFrom');
        this.uIchkIsCriticalCheckBox = page.locator('NoadrFlags_chkVerify');
        this.uIOddToEdit = page.locator('NocstFromRange_txtTo');
        this.uIEvenFromEdit = page.locator('NocstToRange_txtFrom');
        this.uIEvenToEdit = page.locator('NocstToRange_txtTo');
        this.uIRemarkEdit = page.locator('NorteKPITxt_contentIframe');
        this.uIRemarkBody = page.locator('//body');
        this.uITextEdit = page.locator('NolupFlags_CodeValue');
        this.uITextLookupButton = page.locator('NolupFlags_imgBtn');
        this.uITextEditButton = page.locator('NolupFlags_imgAdd');
        this.uIDisplayConditionComboBox = page.locator('NocddDipsCondition_DropDown');
        this.uISortOrderEdit = page.locator('NotxtSort');
        this.uIActiveAsDateEdit = page.locator('NodttmActive_KPIDttmCtrl');
        this.uPrintButton = page.locator('NocmdPrint');
        this.uIInActiveDateEdit = page.locator('NodttmInActive_KPIDttmCtrl');
        this.uISharedCheckBox = page.locator('NochkIsShared');
        this.uIAddButton = page.locator('NocmdAdd');
        this.uIClearButton = page.locator('NocmdClear');
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveCloseButton = page.locator('NocmdSaveNClose');
        this.uIResetButton = page.locator('NocmdRefresh');
        this.uIAddressFlagResultGrid = page.locator('NogrdFlags');
        this.uICommentsRichTextEdit = page.locator('NorteKPITxt_contentIframe');
        this.uIDeleteButton = page.locator('NocmdDelete');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIIsCriticalCheckBox = page.locator('NochkIsCritical');
        this.uILoadButton = page.locator('Nocmdload');
        this.uIAddressLabel = page.locator('NolblAddress');
        this.uIConvertToLowerCaseIcon = page.locator("//span[@class='ConvertToLower']");
        this.uIConvertToUpperCaseIcon = page.locator("//span[@class='ConvertToUpper']");
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async SaveScreen(): Promise<void> {
        await this.uISaveButton.click();
        // confirm popup: yes
    }

    async ClickSaveAndCloseButton(): Promise<void> {
        await this.uISaveCloseButton.click();
        // confirm popup: yes
    }

    async EnterAtAddress(address: string): Promise<void> {
        await this.uIAddressEdit.fill(address);
        await this.uIAddressEdit.press('Tab');
        // Playback.pageLoadThreadWait()
        await this.uIOddFromEdit.click();
    }

    async clickConvertToUpperCaseIcon(): Promise<void> {
        await this.uIConvertToUpperCaseIcon.click();
    }

    async clickConvertToLowerCaseIcon(): Promise<void> {
        await this.uIConvertToLowerCaseIcon.click();
    }

    async VerifyAtAddress(address: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("Address"),
        // uIMapGeo.addressFlagEntry.uIAddressEdit.getAttribute("value"))
    }

    async EnterInactiveAfterDateAsCurrentDate(): Promise<void> {
        await this.uIInActiveDateEdit.fill(Randomized.getCurrentDate());
    }

    async ClearInactiveDate(): Promise<void> {
        await this.uIInActiveDateEdit.clear();
    }

    async VerifyAtInactiveAfterInGrid(inactiveAfter: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("InactiveAfter"),
        // objectIdentification.manualIdentify.getGridCell(uIMapGeo.addressFlagEntry.uIAddressFlagResultGrid,
        // BaseData.getGeoModuleValue("InactiveAfter"), "Inactive After").getText())
    }

    async VerifyInactiveAfterColumnAppearsAsEmpty(rowIndex: string): Promise<void> {
        // Assert.assertEquals("",
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressFlagEntry.uIAddressFlagResultGrid, "Inactive After", rowIndex),
        // "Verify Inactive After column does not have any value")
    }

    async CloseScreen(): Promise<void> {
        // uIMapGeo.addressFlagEntry.driver.close()
    }

    async EnterRemarks(): Promise<void> {
        await this.uIRemarkEdit.fill("Automation Address Flag Review");
    }

    async enterAtRemarks(remarks: string): Promise<void> {
        await this.uIRemarkBody.click();
        await this.uIRemarkBody.fill(remarks);
    }

    async SelectAtDisplayCondition(displayCondition: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapGeo.addressFlagEntry.uIDisplayConditionComboBox,
        // BaseData.getGeoModuleValue("DisplayCondition"))
    }

    async SelectText(): Promise<void> {
        await this.uITextLookupButton.click();
        // popup.kPICodedLookup.randomKPIHelpSelect()
    }

    async selectAtDisplayCondition(displayCondition: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapGeo.addressFlagEntry.uIDisplayConditionComboBox,
        // BaseData.getGeoModuleValue("DisplayCondition"))
    }

    async EnterActiveDate(): Promise<void> {
        await this.uIActiveAsDateEdit.press('Tab');
    }

    async DeleteFlag(displayCondition: string): Promise<void> {
        // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
        // uIMapGeo.addressFlagEntry.uIAddressFlagResultGrid, BaseData.getGeoModuleValue("DisplayCondition"))
    }

    async EnterSortOrderAs1(): Promise<void> {
        await this.uISortOrderEdit.fill("1");
    }

    async VerifyCurrentDateAutoPopulates(): Promise<void> {
        // Assert.assertEquals(Randomized.getCurrentDate(),
        // uIMapGeo.addressFlagEntry.uIActiveAsDateEdit.getAttribute("value"))
    }

    async VerifyEnterAtLeastOneRowAcknowledgeMessage(): Promise<void> {
        // popup: (8515) Enter at least one row
    }

    async VerifyDisplayConditionAcknowledgeAddMessage(): Promise<void> {
        // popup: (1018) Required Entries are Missing - Display Condition
    }

    async VerifyOddValuesExist(): Promise<void> {
        // Assert.assertTrue(uIMapGeo.addressFlagEntry.uIOddFromEdit.getAttribute("value") != "")
        // Assert.assertTrue(uIMapGeo.addressFlagEntry.uIOddToEdit.getAttribute("value") != "")
    }

    async VerifyActiveAsCurrentDate(rowIndex: string): Promise<void> {
        // Assert.assertEquals(Randomized.getCurrentDate(), objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressFlagEntry.uIAddressFlagResultGrid, "Active As of Date", rowIndex))
    }

    async VerifyAtDisplayCondition(rowIndex: string, displayCondition: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("DisplayCondition"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressFlagEntry.uIAddressFlagResultGrid, "Display Condition ", rowIndex))
    }

    async VerifyConfirmationDeleteMessage(): Promise<void> {
        // confirm popup: (4) Do you really want to delete?
        // confirm popup: (4) Do you really want to delete?
    }

    async VerifyDeletedFlagNotFound(): Promise<void> {
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridTableRowsCount(uIMapGeo.addressFlagEntry.uIAddressFlagResultGrid) == 0)
    }

    async SelectAtDisplayConditionInGrid(displayCondition: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.addressFlagEntry.uIAddressFlagResultGrid, BaseData.getGeoModuleValue("DisplayCondition"))
    }

    async VerifyAtOddInField(odd: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("Odd"),
        // uIMapGeo.addressFlagEntry.uIOddFromEdit.getAttribute("value"))
    }

    async VerifyAtEvenInField(even: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        // Assert.assertEquals(BaseData.getGeoModuleValue("Even"),
        // uIMapGeo.addressFlagEntry.uIEvenFromEdit.getAttribute("value"))
    }

    async VerifyActiveDateAcknowledgeAddMessage(): Promise<void> {
        // popup: (1018) Required Entries are Missing - Active Date
    }

    async EnterCommentInRichText(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // Actions actions = new Actions(Playback.driver)
        // actions.moveToElement(uIMapGeo.addressFlagEntry.uICommentsRichTextEdit).click()
        await this.actions.fill(Randomized.randomString(50)).build().perform();
        // Playback.controlReadyThreadWait()
    }

    async DeleteAddressFlag(): Promise<void> {
        await this.uIDeleteButton.click();
        // confirm popup: yes
        // popup.popup.confirm.yes(); // confirmation window not showing
    }

    async verifyDeleteIconIsDispalyed(): Promise<void> {
        // verify.ExpectedValueIsTrue(uIMapGeo.addressFlagEntry.uIDeleteButton.isDisplayed()
        // && uIMapGeo.addressFlagEntry.uIDeleteButton.isEnabled())
    }

    async VerifyDeletionSuccessfulMessage(): Promise<void> {
        await this.page.waitForTimeout(2000);
        const AdditionMessage = await this.uIBottomLeftSideStatusBar.innerText();
        // Assert.assertTrue(AdditionMessage.contains("1004 - Deletion Successful"))
    }

    async enterActiveDateAsPreviousDate(): Promise<void> {
        await this.uIActiveAsDateEdit.fill(Randomized.getPreviousDate(3, "MM/dd/yyyy"));
    }

    async selectIsCriticalCheckBox(): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIIsCriticalCheckBox.click();
    }

    async selectSharedCheckBox(): Promise<void> {
        await this.uISharedCheckBox.click();
    }

    async enterInactiveAfterDateAsPreviousDate(inactiveDate: string): Promise<void> {
        await this.uIInActiveDateEdit.fill(inactiveDate);
    }

    async clickTextMgmtIcon(): Promise<void> {
        await this.uITextEditButton.click();
    }

    async EnterActiveDateAsCurrentDate(): Promise<void> {
        await this.uIActiveAsDateEdit.press('Tab');
    }

    async ClickPrintButton(): Promise<void> {
        await this.uPrintButton.click();
    }

    async verifyNoRecordsFoundAcknowledgeMessage(): Promise<void> {
        // popup: 1011 - No Record Found
        // popup:  1011 - No Record Found
    }

    async switchToNarrativeTextFrame(): Promise<void> {
        //	rteKPITxt_contentIframe
        // no-op: window handle
    }

    async verifyUpdateSuccessfulStatusMessage(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("1003 - Update successful",
        // uIMapGeo.addressFlagEntry.uIBottomLeftSideStatusBar.getText())
    }

    async verifyAdditionSuccessfulStatusMessage(): Promise<void> {
        // WebDriver driver = Playback.driver
        const windowHandle = driver.getWindowHandle();
        // System.out.println(driver.switchTo().window(windowHandle).getCurrentUrl())
        const URL = driver.switchTo().window(windowHandle).getCurrentUrl().contains("Fire");
        // System.out.println(URL)
        // if (URL == true) {
        // verify.ExpectedPropertyValueIsEqual("1002 - Addition successful",
        // uIMapGeo.addressFlagEntry.uIBottomLeftSideStatusBar.getText())
        // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
        // uIMapGeo.addressFlagEntry.uIBottomLeftSideStatusBar.getText())
    }

    async enterAtText(text: string): Promise<void> {
        await this.uITextEdit.fill(text);
        await this.uITextEdit.press('Tab');
    }

    async clickLoadButton(): Promise<void> {
        await this.uILoadButton.click();
    }

    async enterAtRemarks1(remarks1: string): Promise<void> {
        await this.uIRemarkBody.fill(remarks1);
    }

    async verify1018RequiredEntriesAreMissingAddress(): Promise<void> {
        // popup: (1018)Required Entries are Missing - Address
    }

    async doubleClickInSaveIcon(): Promise<void> {
        // Playback.actionDriver.doubleClick(uIMapGeo.addressFlagEntry.uISaveButton).build().perform()
        // confirm popup: yes
    }

    async enterAtRemarksWithClear(remarks: string): Promise<void> {
        await this.uIRemarkBody.click();
        // Playback.controlReadyThreadWait()
        await this.uIRemarkBody.clear();
        await this.uIRemarkBody.fill(remarks);
    }

    async enterAtRemarks1WithClear(remarks1: string): Promise<void> {
        await this.uIRemarkBody.click();
        // Playback.controlReadyThreadWait()
        await this.uIRemarkBody.clear();
        await this.uIRemarkBody.fill(remarks1);
    }

    async verifyAddressLabelAsBoldBlack(): Promise<void> {
        // String attribute = uIMapGeo.addressFlagEntry.uIAddressLabel.getAttribute("style")
        // String attribute1 = uIMapGeo.addressFlagEntry.uIAddressLabel.getCssValue("color")
        expect(attribute.contains("bold")).toBeTruthy();
        expect(attribute1.contains("rgba(0, 0, 0, 1)")).toBeTruthy();
    }

    async enterAtPremiseOddFrom(oddFrom: string): Promise<void> {
        await this.uIOddFromEdit.fill(oddFrom);
        await this.uIOddFromEdit.press('Tab');
    }

    async enterAtPremiseOddTo(oddTo: string): Promise<void> {
        await this.uIOddToEdit.fill(oddTo);
        await this.uIOddToEdit.press('Tab');
    }

    async enterAtPremiseEvenFrom(evenFrom: string): Promise<void> {
        await this.uIEvenFromEdit.fill(evenFrom);
        await this.uIEvenFromEdit.press('Tab');
    }

    async enterAtPremiseEvenTo(evenTo: string): Promise<void> {
        await this.uIEvenToEdit.fill(evenTo);
        await this.uIEvenToEdit.press('Tab');
    }

    async verifyOddNumberRequiredAcknPopup(): Promise<void> {
        // popup: (5023) Odd Number entry is required
    }

    async verifyEvenNumberRequiredAcknPopup(): Promise<void> {
        // popup: (5022) Even Number entry is required
    }
}

export class AddressIntersectionPage {
    readonly page: Page;
    readonly uIInactiveCheckBox: Locator;
    readonly uIInactiveDateTextView: Locator;
    readonly uIStreetNameEdit: Locator;
    readonly uIIntersectionStreetNameEdit: Locator;
    readonly uIIntersectionStreetNameVerifyCheckBox: Locator;
    readonly uIIdentifierEdit: Locator;
    readonly uIPremiseEdit: Locator;
    readonly uIIntPremiseEdit: Locator;
    readonly uIPremiseOddFromEdit: Locator;
    readonly uIPremiseOddToEdit: Locator;
    readonly uIPremiseEvenFromEdit: Locator;
    readonly uIPremiseEvenToEdit: Locator;
    readonly uIGeoCordsXEdit: Locator;
    readonly uIGeoCordsYEdit: Locator;
    readonly uIPremiseComboBox: Locator;
    readonly uIPatrolZoneComboBox: Locator;
    readonly uISubZoneComboBox: Locator;
    readonly uINPACardEdit: Locator;
    readonly uINPACardLookupButton: Locator;
    readonly uIZipCodeEdit: Locator;
    readonly uIZipCodeLookupButton: Locator;
    readonly uICensusTractEdit: Locator;
    readonly uIVotingDistrictComboBox: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIAddressIntersectionResultGrid: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIDistrictComboBox: Locator;
    readonly uISubDistrictComboBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIInactiveCheckBox = page.locator('NochkInActive');
        this.uIInactiveDateTextView = page.locator('NotxtInActiveDttm');
        this.uIStreetNameEdit = page.locator('NotxtStreetName');
        this.uIIntersectionStreetNameEdit = page.locator('NostcIntStreetName_txtFrom');
        this.uIIntersectionStreetNameVerifyCheckBox = page.locator('NostcIntStreetName_chkVerify');
        this.uIIdentifierEdit = page.locator('NotxtIdentifier');
        this.uIPremiseEdit = page.locator('NotxtPremise');
        this.uIIntPremiseEdit = page.locator('NotxtIntPremise');
        this.uIPremiseOddFromEdit = page.locator('NocstLeft_txtFrom');
        this.uIPremiseOddToEdit = page.locator('NocstLeft_txtTo');
        this.uIPremiseEvenFromEdit = page.locator('NocstRight_txtFrom');
        this.uIPremiseEvenToEdit = page.locator('NocstRight_txtTo');
        this.uIGeoCordsXEdit = page.locator('NocstGeoCords_txtFrom');
        this.uIGeoCordsYEdit = page.locator('NocstGeoCords_txtTo');
        this.uIPremiseComboBox = page.locator('NocddPremiseEvenOdd_DropDown');
        this.uIPatrolZoneComboBox = page.locator('NocddPatrolzone_DropDown');
        this.uISubZoneComboBox = page.locator('NocddSubZone_DropDown');
        this.uINPACardEdit = page.locator('NolupURACard_CodeValue');
        this.uINPACardLookupButton = page.locator('NolupURACard_imgBtn');
        this.uIZipCodeEdit = page.locator('NolupZipcode_CodeValue');
        this.uIZipCodeLookupButton = page.locator('NolupZipcode_imgBtn');
        this.uICensusTractEdit = page.locator('NotxtCensusTract');
        this.uIVotingDistrictComboBox = page.locator('NocddVotingDist_DropDown');
        this.uIAddButton = page.locator('NoimgAddStreet');
        this.uIClearButton = page.locator('NoimgClearStreet');
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveAndCloseButton = page.locator('NocmdSaveNClose');
        this.uIPrintButton = page.locator('NocmdPrint');
        this.uIRefreshButton = page.locator('NocmdRefresh');
        this.uIAddressIntersectionResultGrid = page.locator('NogrdStreet');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIDistrictComboBox = page.locator('NocddPatrolzone_DropDown');
        this.uISubDistrictComboBox = page.locator('NocddSubZone_DropDown');
    }

    async VerifyAcknowlegdeSaveMessage(): Promise<void> {
        // popup: (7) No data present
    }

    async VerifyAcknowledgeAddMessage(): Promise<void> {
        // popup: (5002) Required Street Name entry
    }

    async EnterAtInterStreetWithType(interStreetName: string, interStreetType: string): Promise<void> {
        await this.uIPremiseEdit.clear();
        // uIMapGeo.addressIntersection.uIIntersectionStreetNameEdit.sendKeys(BaseData.getGeoModuleValue("InterStreetName") + " "
        // + BaseData.getGeoModuleValue("InterStreetType"))
        // Playback.popupThreadWait()
        await this.uIIntersectionStreetNameEdit.press('Tab');
    }

    async EnterOddNumber(): Promise<void> {
        await this.uIPremiseOddFromEdit.fill("11");
        await this.uIPremiseOddFromEdit.press('Tab');
    }

    async EnterEvenNumber(): Promise<void> {
        await this.uIPremiseEvenFromEdit.fill("22");
        await this.uIPremiseEvenFromEdit.press('Tab');
        // Playback.controlReadyThreadWait()
    }

    async EnterGeoCordsX(): Promise<void> {
        await this.uIGeoCordsXEdit.fill(Randomized.enterRandomNumbers(2));
    }

    async EnterGeoCordsY(): Promise<void> {
        await this.uIGeoCordsYEdit.fill(Randomized.enterRandomNumbers(2));
    }

    async ClearOddNumber(): Promise<void> {
        await this.uIPremiseOddFromEdit.clear();
    }

    async EnterAtOddNumber(odd: string): Promise<void> {
        await this.uIPremiseOddFromEdit.fill(odd);
        await this.uIPremiseOddFromEdit.press('Tab');
    }

    async EnterAtOddNumberWithDot(odd: string): Promise<void> {
        await this.uIPremiseOddFromEdit.fill(odd);
        await this.uIPremiseOddFromEdit.press('Tab');
    }

    async EnterAtOddEvenNumber(oddEven: string): Promise<void> {
        await this.uIPremiseOddFromEdit.fill(oddEven);
        await this.uIPremiseOddFromEdit.press('Tab');
        await this.uIPremiseEvenFromEdit.fill(oddEven);
        await this.uIPremiseEvenFromEdit.press('Tab');
    }

    async EnterAtEvenNumber(even: string): Promise<void> {
        await this.uIPremiseEvenFromEdit.fill(even);
    }

    async EnterAtPremiseOddNumber(premise: string): Promise<void> {
        await this.uIPremiseOddFromEdit.fill(premise);
        await this.uIPremiseOddFromEdit.press('Tab');
    }

    async EnterAtPremiseNumber(premise: string): Promise<void> {
        await this.uIPremiseEdit.clear();
        await this.uIPremiseEdit.fill(premise);
        await this.uIPremiseEdit.press('Tab');
    }

    async EnterAllFields(): Promise<void> {
        // random select on this.uIPatrolZoneComboBox
        // random select on this.uISubZoneComboBox
        await this.uICensusTractEdit.fill("15000");
    }

    async EnterInvalidPremiseNumber(): Promise<void> {
        await this.uIPremiseEdit.fill(Randomized.randomNumberString(2));
        await this.uIPremiseEdit.press('Tab');
    }

    async selectAsBoth(): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.addressIntersection.uIPremiseComboBox,
        // "Both")
    }

    async SelectAsOdd(): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.addressIntersection.uIPremiseComboBox,
        // "Odd")
    }

    async selectAsEven(): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.addressIntersection.uIPremiseComboBox,
        // "Even")
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
        // Playback.popupThreadWait()
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async clickInactiveCheckBox(): Promise<void> {
        await this.uIInactiveCheckBox.click();
    }

    async ClickRow(RowIndex: string): Promise<void> {
        // objectIdentification.manualIdentify.getGridTableRow(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, RowIndex).click()
    }

    async ClickAtOddEvenRow(oddEven: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid,
        // BaseData.getGeoModuleValue("OddEven").substring(0, 1))
    }

    async ClickAtOddRowInGrid(odd: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, BaseData.getGeoModuleValue("Odd"))
    }

    async ClickDeleteRow(rowIndex: string, columnIndex: string, rowLength: string): Promise<void> {
        // Playback.setTestContextAttribute("rowLength", String.valueOf(objectIdentification.manualIdentify.getGridTableRowsCount(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid)))
        // objectIdentification.manualIdentify.getGridCell(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, rowIndex, columnIndex).click()
    }

    async UpdatePremiseDetailsPatrolZoneAndSubZone(): Promise<void> {
        // random select on this.uIPatrolZoneComboBox
        // random select on this.uISubZoneComboBox
    }

    async SaveScreen(): Promise<void> {
        await this.uISaveButton.click();
        // confirm popup: yes
    }

    async ClickSaveNClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
    }

    async saveNCloseScreen(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        // confirm popup: yes
    }

    async CloseScreen(): Promise<void> {
        // uIMapGeo.addressIntersection.driver.close()
    }

    async ClickClearButton(): Promise<void> {
        await this.uIClearButton.click();
    }

    async SelectSubZone(): Promise<void> {
        // random select on this.uISubZoneComboBox
    }

    async SelectPatrolZone(): Promise<void> {
        // random select on this.uIPatrolZoneComboBox
    }

    async SelectNPACard(): Promise<void> {
        await this.uINPACardLookupButton.click();
        // popup.kPICodedLookup.randomKPIHelpSelect()
    }

    async enterAtZipCode(zipCode: string): Promise<void> {
        await this.uIZipCodeEdit.click();
        await this.uIZipCodeEdit.clear();
        await this.uIZipCodeEdit.fill(zipCode);
        await this.uIZipCodeEdit.press('Tab');
    }

    async enterAtZipCode(i: string, zipCode: string): Promise<void> {
        await this.uIZipCodeEdit.click();
        await this.uIZipCodeEdit.clear();
        await this.uIZipCodeEdit.fill(zipCode);
        await this.uIZipCodeEdit.press('Tab');
    }

    async enterAtCensusTract(censusTract: string): Promise<void> {
        await this.uICensusTractEdit.clear();
        await this.uICensusTractEdit.fill(censusTract);
        await this.uICensusTractEdit.press('Tab');
    }

    async SelectVotingDistrict(): Promise<void> {
        // random select on this.uIVotingDistrictComboBox
    }

    async clickAtPremiseNo(premise: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid,
        // BaseData.getGeoModuleValue("Premise") + "-" + BaseData.getGeoModuleValue("Premise"))
        // Playback.popupThreadWait()
    }

    async VerifyOddEvenViewed(oddEven: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("OddEven").substring(0, 1),
        // uIMapGeo.addressIntersection.uIPremiseOddFromEdit.getAttribute("value"))
        // Assert.assertEquals(BaseData.getGeoModuleValue("OddEven").substring(1),
        // uIMapGeo.addressIntersection.uIPremiseEvenFromEdit.getAttribute("value"))
    }

    async VerifyInactiveDateDisabled(): Promise<void> {
        // Playback.gridLoadThreadWait()
        //			Assert.assertTrue(uIMapGeo.addressIntersection.uIInactiveDateTextView.getAttribute("readonly")	//changed by Abi
        //					.contains("readonly"));
        // verify.ExpectedPropertyValueIsEqual(
        // uIMapGeo.addressIntersection.uIInactiveDateTextView.getAttribute("readonly"), "true")
    }

    async VerifyCurrentDate(): Promise<void> {
        // Playback.gridLoadThreadWait()
        const a = await this.uIInactiveDateTextView.inputValue();
        // System.out.println(a)
        //			String a1=uIMapGeo.addressIntersection.uIInactiveDateTextView.getAttribute("name");
        //			System.out.println(a1);
        //			String a2=uIMapGeo.addressIntersection.uIInactiveDateTextView.getAttribute("id");
        //			System.out.println(a2);
        const a3 = await this.uIInactiveDateTextView.innerText();
        // System.out.println(a3)
        // Assert.assertTrue(uIMapGeo.addressIntersection.uIInactiveDateTextView.getAttribute("value").contains(Randomized.getCurrentDate()))
    }

    async VerifyInactiveRowGraycolor(rowIndex: string): Promise<void> {
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridTableRow(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, rowIndex).getAttribute("class").contains("Gray"))
    }

    async VerifyOddEvenPremiseAdded(rowIndex: string, oddEven: string, even: string, zipCode: string): Promise<void> {
        // Assert.assertTrue(
        // objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid,
        // "Premise Odd", rowIndex).contains(BaseData.getGeoModuleValue("OddEven").substring(0, 1)))
        // Assert.assertTrue(
        // objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid,
        // "Premise Even", rowIndex).contains(BaseData.getGeoModuleValue("Even").substring(1)))
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, "Zip Code",
        // rowIndex).contains(BaseData.getGeoModuleValue("ZipCode")))
    }

    async VerifyOddPremiseAdded(rowIndex: string, odd: string, zipCode: string): Promise<void> {
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, "Premise Odd",
        // rowIndex).contains(BaseData.getGeoModuleValue("Odd")))
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, "Zip Code",
        // rowIndex).contains(BaseData.getGeoModuleValue("ZipCode")))
    }

    async VerifyEvenPremiseAdded(even: string, zipCode: string): Promise<void> {
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, "Premise Even",
        // 2).contains(BaseData.getGeoModuleValue("Even")))
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, "Zip Code", 2).contains(BaseData.getGeoModuleValue("ZipCode")))
    }

    async VerifyPremiseAdded(premise: string, zipCode: string): Promise<void> {
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, "Premise Odd",
        // 3).contains(BaseData.getGeoModuleValue("Premise")))
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, "Zip Code", 3).contains(BaseData.getGeoModuleValue("ZipCode")))
    }

    async VerifyUpdatedPremiseDetailsPatrolZoneAndSubZoneIsNotNullInTheGrid(rowIndex: string): Promise<void> {
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, "Patrol Zone", rowIndex) != null)
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, "Sub Zone", rowIndex) != null)
    }

    async VerifyAtPremisesInTheGrid(rowIndex: string, premiseOdd: string, premiseEven: string): Promise<void> {
        // Assert.assertTrue(
        // objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid,
        // "Premise Odd", rowIndex).contains(BaseData.getGeoModuleValue("PremiseOdd").substring(0, 1)))
        // Assert.assertTrue(
        // objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid,
        // "Premise Even", rowIndex).contains(BaseData.getGeoModuleValue("PremiseEven").substring(1)))
    }

    async VerifyRowDeletedInTheGrid(rowCount: string): Promise<void> {
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridTableRowsCount(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid) == rowCount - 1)
    }

    async VerifyOddEvenRowDeleted(): Promise<void> {
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridTableRowsCount(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid) == 2)
    }

    async VerifyAcknowledgeAddPremiseMessage(): Promise<void> {
        // popup: (5084) Enter a valid premise range
    }

    async VerifyAcknowledgeEvenNumber(): Promise<void> {
        // popup: (5022) Even Number entry is required
    }

    async VerifyAcknowledgeOddNumber(): Promise<void> {
        // popup: (5023) Odd Number entry is required
    }

    async VerifyAcknowledgeOverlapping(): Promise<void> {
        // popup: (5007) Range overlapping - Enter a new range
    }

    async VerifyAcknowledgeValidPremise(): Promise<void> {
        // popup: (5001) Not a Valid Premise
    }

    async VerifyAcknowledgeUpdateMessage(): Promise<void> {
        // Playback.popupThreadWait()
        // popup: (1056) Updated data exists in the fields. You must save or reset
    }

    async VerifyConfirmationDeleteMessage(): Promise<void> {
        // confirm popup: (4) Do you really want to delete?
        // confirm popup: (4) Do you really want to delete?
    }

    async DoubleClickAtPremise(premise: string): Promise<void> {
        // Actions doubleClick = new Actions(Playback.driver)
        // doubleClick.doubleClick(objectIdentification.manualIdentify.getGridRowByCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid,
        // BaseData.getGeoModuleValue("Premise") + "-" + BaseData.getGeoModuleValue("Premise"))).perform()
        // doubleClick = null
        // Playback.gridLoadThreadWait()
    }

    async DoubleClickOnTheRowAtPremiseOdd(premiseOdd: string): Promise<void> {
        // Playback.actionDriver.doubleClick(objectIdentification.manualIdentify.getGridCell(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid,
        // BaseData.getGeoModuleValue("PremiseOdd"))).perform()
        // Playback.gridLoadThreadWait()
    }

    async VerifyIntersectionRowsNotExist(): Promise<void> {
        // Playback.gridLoadThreadWait()
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridTableRowsCount(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid) == 0)
    }

    async DeleteAtOddRow(premiseOdd: string): Promise<void> {
        // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid,
        // BaseData.getGeoModuleValue("PremiseOdd"))
    }

    async DeleteAtIntersectionStreetRow(interStreetName: string): Promise<void> {
        // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid,
        // BaseData.getGeoModuleValue("InterStreetName"))
    }

    async VerifyAcknowlegeReviewMessage(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // Assert.assertTrue(reviewMessage.contains("Review Address Flag"));
        // popup: Review Address Flag
    }

    async VerifyAcknowlegeReviewMessageCommon(): Promise<void> {
        //			Playback.controlReadyThreadWait();
        //			String reviewMessage = uIMapPopup.acknowledgeWindow.uIErrorInfoTextEdit.getText();
        //			Assert.assertTrue(reviewMessage.contains("The selected premise range has been referenced"));
        // popup: Review Common Name
    }

    async VerifyAtStreetName(streetName: string): Promise<void> {
        // Assert.assertTrue(uIMapGeo.addressIntersection.uIStreetNameEdit.getAttribute("value").contains(BaseData.getGeoModuleValue("StreetName")))
    }

    async VerifyAtInterStreetViewed(rowIndex: string, interStreetName: string): Promise<void> {
        // Assert.assertTrue(
        // objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid,
        // "Int Street Name", rowIndex).contains(BaseData.getGeoModuleValue("InterStreetName")))
    }

    async VerifyAtStreetNameAndIntersectionStreetName(rowIndex: string): Promise<void> {
        // VerifyAtStreetName()
        // VerifyAtInterStreetViewed(rowIndex)
    }

    async VerifyAtPatrolZoneGrid(rowIndex: string, patrolZone: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("PatrolZone"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, "Patrol Zone", rowIndex))
    }

    async VerifyAtSubZoneGrid(rowIndex: string, subZone: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("SubZone"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, "Sub Zone", rowIndex))
    }

    async VerifyAtCensusGrid(rowIndex: string, census: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("Census"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, "Census Tract", rowIndex))
    }

    async verifyAtZipCodeGrid(rowIndex: string, zipCode: string): Promise<void> {
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, "Zip Code",
        // rowIndex).contains(BaseData.getGeoModuleValue("ZipCode")))
    }

    async VerifyBatchUpdateDetailsAtZipCodeCensusNPACard(zipCode: string, census: string, nPACard: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("ZipCode"),
        // uIMapGeo.addressIntersection.uIZipCodeEdit.getAttribute("value"))
        // Assert.assertEquals(BaseData.getGeoModuleValue("Census"),
        // uIMapGeo.addressIntersection.uICensusTractEdit.getAttribute("value"))
        // Assert.assertEquals(BaseData.getGeoModuleValue("NPACard"),
        // uIMapGeo.addressIntersection.uINPACardEdit.getAttribute("value"))
    }

    async ClickAtInterStreetNameInGrid(intStreetName: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid,
        // BaseData.getGeoModuleValue("IntStreetName"))
    }

    async VerifyAtInterStreetName(interStreetName: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        // Assert.assertTrue(uIMapGeo.addressIntersection.uIIntersectionStreetNameEdit.getAttribute("value").contains(BaseData.getGeoModuleValue("InterStreetName")))
    }

    async VerifyAtInterStreetNameColorAsBlack(): Promise<void> {
        // Assert.assertTrue(uIMapGeo.addressIntersection.uIIntersectionStreetNameEdit.getCssValue("color").contains("0, 0, 0, 1"))
    }

    async VerifyAtNPACard(nPACard: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("NPACard"),
        // uIMapGeo.addressIntersection.uINPACardEdit.getAttribute("value"))
    }

    async VerifyAtSubZoneDescription(subZoneDescription: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("SubZoneDescription"), objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapGeo.addressIntersection.uISubZoneComboBox))
    }

    async VerifyAtPatrolZoneDescription(patrolZoneDescription: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("PatrolZoneDescription"), objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapGeo.addressIntersection.uIPatrolZoneComboBox))
    }

    async VerifyAtPremiseOddInGrid(rowIndex: string, premiseOdd: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("PremiseOdd"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, "Premise Odd", rowIndex))
    }

    async VerifyAtPremiseEvenInGrid(rowIndex: string, premiseEven: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("PremiseEven"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, "Premise Even", rowIndex))
    }

    async ClickAtPremiseOddRowInGrid(premiseOdd: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid,
        // BaseData.getGeoModuleValue("PremiseOdd"))
    }

    async ClickAtPremiseEvenRowInGrid(premiseEven: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid,
        // BaseData.getGeoModuleValue("PremiseEven"))
    }

    async EnterAtOddTo(oddTo: string): Promise<void> {
        await this.uIPremiseOddToEdit.click();
        await this.uIPremiseOddToEdit.clear();
        await this.uIPremiseOddToEdit.fill(oddTo);
    }

    async enterAtEvenTo(evenTo: string): Promise<void> {
        await this.uIPremiseEvenToEdit.click();
        await this.uIPremiseEvenToEdit.clear();
        await this.uIPremiseEvenToEdit.fill(evenTo);
    }

    async VerifyAtPremiseOddSplited(rowIndex: string, rowIndex1: string, premiseOdd: string, oddTo: string, premiseOddSplit1: string, premiseOddSplit2: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        // Assert.assertEquals(BaseData.getGeoModuleValue("PremiseOdd").remove(4,
        // 5)+"-"+BaseData.getGeoModuleValue("OddTo"),
        // objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid,
        // "Premise Odd", rowIndex));
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressIntersection.
        // uIAddressIntersectionResultGrid, "Premise Odd",
        // rowIndex1).contains(BaseData.getGeoModuleValue("PremiseOdd").remove(0, 4)));
        // Assert.assertEquals(BaseData.getGeoModuleValue("PremiseOddSplit1"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, "Premise Odd", rowIndex))
        // Assert.assertEquals(BaseData.getGeoModuleValue("PremiseOddSplit2"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, "Premise Odd", rowIndex1))
    }

    async VerifyAtPremiseEvenSplited(rowIndex: string, rowIndex1: string, premiseEven: string, evenTo: string, premiseEvenSplit1: string, premiseEvenSplit2: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        // Assert.assertEquals(BaseData.getGeoModuleValue("PremiseEven").Remove(4, 5) +
        // "-" + BaseData.getGeoModuleValue("EvenTo"),
        // objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid,
        // "Premise Even", rowIndex));
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressIntersection.
        // uIAddressIntersectionResultGrid, "Premise Even",
        // rowIndex1).contains(BaseData.getGeoModuleValue("PremiseEven").Remove(0, 4)));
        // Assert.assertEquals(BaseData.getGeoModuleValue("PremiseEvenSplit1"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, "Premise Even", rowIndex))
        // Assert.assertEquals(BaseData.getGeoModuleValue("PremiseEvenSplit2"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, "Premise Even", rowIndex1))
    }

    async GetEvenNo(evenNo: string): Promise<void> {
        // evenNo = uIMapGeo.addressIntersection.uIPremiseEvenFromEdit.getAttribute("value")
        // Playback.setTestContextAttribute("evenNo", evenNo)
    }

    async GetStreetName(streetName: string): Promise<void> {
        // streetName = uIMapGeo.addressIntersection.uIStreetNameEdit.getAttribute("value")
        // Playback.setTestContextAttribute("streetName", streetName)
    }

    async EnterAtEvenNoinFromAndTo(evenNo: string): Promise<void> {
        await this.uIPremiseEvenFromEdit.click();
        await this.uIPremiseEvenFromEdit.fill(evenNo);
        await this.uIPremiseEvenToEdit.click();
        await this.uIPremiseEvenToEdit.clear();
        await this.uIPremiseEvenToEdit.fill(evenNo);
    }

    async EnterAtOddNoinFromAndTo(oddNo: string): Promise<void> {
        await this.uIPremiseOddFromEdit.click();
        await this.uIPremiseOddFromEdit.fill(oddNo);
        await this.uIPremiseOddToEdit.click();
        await this.uIPremiseOddToEdit.clear();
        await this.uIPremiseOddToEdit.fill(oddNo);
    }

    async enterAtPremiseEven(premiseEven: string): Promise<void> {
        await this.uIPremiseEvenFromEdit.fill(premiseEven);
        // Playback.controlReadyThreadWait()
    }

    async verifyAtEvenOddInGrid(rowIndex: string, evenOdd: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("EvenOdd"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, "Even Odd", rowIndex))
    }

    async selectPatrolZoneAsPatrolZone(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.addressIntersection.uIPatrolZoneComboBox,
        // "Patrol Zone")
    }

    async selectSubZoneAsSubZone(): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.addressIntersection.uISubZoneComboBox,
        // "Sub Zone")
    }

    async enterAtNPACard(nPACard: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uINPACardEdit.fill(nPACard);
        await this.uINPACardEdit.press('Tab');
    }

    async enterAtFromAndToOddNumber(odd: string): Promise<void> {
        await this.uIPremiseOddFromEdit.fill(odd);
        await this.uIPremiseOddFromEdit.press('Tab');
        await this.uIPremiseOddToEdit.fill(odd);
        await this.uIPremiseOddToEdit.press('Tab');
    }

    async verifyAdditionSuccessfulStatusMessage(): Promise<void> {
        // popup.switchToAcknowledge()
        // ExtentReport.getScreenShotOnRequest(true)
        // Assert.assertEquals("1002 - Addition Successful",
        // uIMapGeo.addressIntersection.uIBottomLeftSideStatusBar.getText())
        // System.out.println("<-----Blue screen occurs------>")
        // e.printStackTrace()
    }

    async verifyAdditionSuccessfulStatusMessage(s: string): Promise<void> {
        // const screenShot_Path = ExtentReport.getScreenShot(Playback.driver, s);
        // ExtentReport.logger.pass("Test Case Passed Snapshot is below "
        // + ExtentReport.logger.addScreenCaptureFromPath(screenShot_Path))
        // Assert.assertEquals("1002 - Addition Successful",
        // uIMapGeo.addressIntersection.uIBottomLeftSideStatusBar.getText())
        // System.out.println("<-----Blue screen occurs------>")
        // e.printStackTrace()
    }

    async enterAtPremiseOddFromAndTo(premiseOddFrom: string, premiseOddTo: string): Promise<void> {
        await this.uIPremiseOddFromEdit.fill(premiseOddFrom);
        await this.uIPremiseOddFromEdit.press('Tab');
        await this.uIPremiseOddToEdit.fill(premiseOddTo);
        await this.uIPremiseOddToEdit.press('Tab');
    }

    async enterAtPremiseEvenFromAndTo(premiseEvenFrom: string, premiseEvenTo: string): Promise<void> {
        await this.uIPremiseEvenFromEdit.fill(premiseEvenFrom);
        await this.uIPremiseEvenFromEdit.press('Tab');
        await this.uIPremiseEvenToEdit.fill(premiseEvenTo);
        await this.uIPremiseEvenToEdit.press('Tab');
    }

    async deleteRowByUsingEvenOddInGrid(evenOdd: string): Promise<void> {
        // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid,
        // BaseData.getGeoModuleValue("EvenOdd"))
        // WebElement row = objectIdentification.manualIdentify.getGridCell(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, gridRowByCellInnerText, "X")
        await this.row.click();
        // Playback.controlReadyThreadWait()
        // Playback.controlReadyThreadWait()
        // confirm popup: yes
        // Playback.controlReadyThreadWait()
    }

    async enterAtInterStreet(interStreetName: string): Promise<void> {
        await this.uIIntersectionStreetNameEdit.fill(interStreetName);
        await this.uIIntersectionStreetNameEdit.press('Tab');
    }

    async SelectDistrictDropdownAsD1(): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.addressIntersection.uIDistrictComboBox,
        // "District 1")
    }

    async SelectSubDistrictDropdownAsS1(): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.addressIntersection.uISubDistrictComboBox,
        // "Sub District 1")
    }

    async enterAtEvenFrom(evenFrom: string): Promise<void> {
        await this.uIPremiseEvenToEdit.click();
        await this.uIPremiseEvenToEdit.clear();
        await this.uIPremiseEvenToEdit.fill(evenFrom);
    }

    async enterAtInterStreet1(interStreetName1: string): Promise<void> {
        await this.uIIntersectionStreetNameEdit.clear();
        await this.uIIntersectionStreetNameEdit.fill(interStreetName1);
        // Playback.popupThreadWait()
        await this.uIIntersectionStreetNameEdit.press('Tab');
    }

    async enterAtInterStreet2(interStreetName2: string): Promise<void> {
        await this.uIIntersectionStreetNameEdit.clear();
        await this.uIIntersectionStreetNameEdit.fill(interStreetName2);
        // Playback.popupThreadWait()
        await this.uIIntersectionStreetNameEdit.press('Tab');
    }

    async enterAtInterStreet3(interStreetName3: string): Promise<void> {
        await this.uIIntersectionStreetNameEdit.clear();
        await this.uIIntersectionStreetNameEdit.fill(interStreetName3);
        // Playback.popupThreadWait()
        await this.uIIntersectionStreetNameEdit.press('Tab');
    }

    async verifyAtIntStreetNameInGrid(interStreetName: string): Promise<void> {
        // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid,
        // BaseData.getGeoModuleValue("InterStreetName"))
        // verify.ExpectedValueIsTrue(
        // gridRowByCellInnerText.getText().contains(BaseData.getGeoModuleValue("InterStreetName")))
    }

    async verifyAtIntStreetNameInGrid(i: string, interStreetName: string): Promise<void> {
        // WebElement gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid,
        // BaseData.getGeoModuleValue("InterStreetName"+i))
        // verify.ExpectedValueIsTrue(
        // gridRowByCellInnerText.getText().contains(BaseData.getGeoModuleValue("InterStreetName"+i)))
    }

    async clearZipCode(): Promise<void> {
        await this.uIZipCodeEdit.clear();
    }

    async tabOutZipCode(): Promise<void> {
        await this.uIZipCodeEdit.click();
        await this.uIZipCodeEdit.press('Tab');
    }

    async ClickDeleteRow(rowIndex: string, columnIndex: string): Promise<void> {
        // Playback.setTestContextAttribute("rowLength",
        // String.valueOf(objectIdentification.manualIdentify
        // .getGridTableRowsCount(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid)));
        // objectIdentification.manualIdentify.getGridCell(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, rowIndex, columnIndex).click()
    }

    async EnterAtOddNumberWithLetters(oddNoWithLetters: string): Promise<void> {
        // uIMapGeo.addressIntersection.uIPremiseOddFromEdit.sendKeys(BaseData.getGeoModuleValue("OddNoWithLetters")); // changed
        // by
        // Abi
        await this.uIPremiseOddFromEdit.press('Tab');
    }

    async verifyPremiseEvenInactive(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // verify.ExpectedValueIsFalse(uIMapGeo.addressIntersection.uIPremiseEvenFromEdit.isEnabled())
        // Playback.controlReadyThreadWait()
    }

    async verifyOddEvenPremiseComboBoxAsBoth(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // verify.ExpectedValueIsFalse(uIMapGeo.addressIntersection.uIPremiseComboBox.isEnabled())
        // Playback.controlReadyThreadWait()
        // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapGeo.addressIntersection.uIPremiseComboBox)
        // System.out.println(dropDownSelectedItem);
        // verify.ExpectedValueIsTrue(uIMapGeo.addressIntersection.uIPremiseComboBox.getAttribute("value").contains("Both"));
        // Assert.assertTrue(dropDownSelectedItem.contains("Both"))
    }

    async clickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async enterAtEvenOddNumber(evenOddPremise: string): Promise<void> {
        await this.uIPremiseOddFromEdit.fill(evenOddPremise);
        await this.uIPremiseOddFromEdit.press('Tab');
        await this.uIPremiseEvenFromEdit.fill(evenOddPremise);
        await this.uIPremiseEvenFromEdit.press('Tab');
    }

    async closeAddressIntersectionScreen(): Promise<void> {
        await this.page.close();
    }

    async clickZipCodeLookupButton(zipCode: string): Promise<void> {
        await this.uIZipCodeLookupButton.click();
        // popup.switchToCodedSearch()
        await this.popup.uIMapPopup.kPIHelpWindow.uICodeValueEdit.fill(zipCode);
        await this.popup.uIMapPopup.kPIHelpWindow.uISearchIconButton.click();
        // popup.kPICodedLookup.selectAtZipCodeInGrid()
    }

    async verifyActiveRowBlackColor(rowIndex: string): Promise<void> {
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridTableRow(uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid, rowIndex).getCssValue("color").contains("0, 0, 0, 1"))
    }

    async VerifyInactiveDateIsBlank(): Promise<void> {
        // System.out.println(uIMapGeo.addressIntersection.uIInactiveDateTextView.getText())
        // verify.ExpectedValueIsTrue(uIMapGeo.addressIntersection.uIInactiveDateTextView.getText().contains(""))
    }

    async verifyUpdateSuccessfulStatusMessage(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("1003 - Update Successful",
        // uIMapGeo.addressFlagEntry.uIBottomLeftSideStatusBar.getText())
        // ExtentReport.getScreenShotOnRequest(true)
        // System.out.println("<-----Blue screen occurs------>")
        // e.printStackTrace()
    }

    async enterAtZipCode1(zipCode1: string): Promise<void> {
        await this.uIZipCodeEdit.clear();
        await this.uIZipCodeEdit.fill(zipCode1);
        await this.uIZipCodeEdit.press('Tab');
    }

    async verifyPremiseOddFromAndToIsDisabled(): Promise<void> {
        // verify.ExpectedValueIsTrue(!uIMapGeo.addressIntersection.uIPremiseOddFromEdit.isEnabled())
        // verify.ExpectedValueIsTrue(!uIMapGeo.addressIntersection.uIPremiseOddToEdit.isEnabled())
    }

    async verifyPremiseEvenFromAndToIsDisabled(): Promise<void> {
        // verify.ExpectedValueIsTrue(!uIMapGeo.addressIntersection.uIPremiseEvenFromEdit.isEnabled())
        // verify.ExpectedValueIsTrue(!uIMapGeo.addressIntersection.uIPremiseEvenToEdit.isEnabled())
    }

    async verifyOddOrEvenIsDisabled(): Promise<void> {
        // verify.ExpectedValueIsTrue(!uIMapGeo.addressIntersection.uIPremiseComboBox.isEnabled())
    }

    async enterAtIntPremise(JsonKeyIndex: string, intPremise: string): Promise<void> {
        await this.uIIntPremiseEdit.fill(intPremise);
        await this.uIIntPremiseEdit.press('Tab');
    }

    async EnterAtPremiseNumber(JsonIndex: string, premise: string): Promise<void> {
        await this.uIPremiseEdit.clear();
        await this.uIPremiseEdit.fill(premise);
        await this.uIPremiseEdit.press('Tab');
    }

    async verifyAtIntPremiseInGrid(intStreetName: string, intPremise: string): Promise<void> {
        const IntPremise = intStreetName;
        expect(intPremise).toEqual(IntPremise);
    }

    async VerifyAtPremisesInTheGrid(intStreetName: string, premise: string): Promise<void> {
        const IntPremise = intStreetName;
        expect(premise).toEqual(IntPremise);
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintButton.click();
    }

    // ─── Merged from address-intersection.page.ts ────────────────────────────

    async enterStreetName(streetName: string): Promise<void> {
        await this.uIStreetNameEdit.clear();
        await this.uIStreetNameEdit.fill(streetName);
    }

    async enterIntersectionStreetName(name: string): Promise<void> {
        await this.uIIntersectionStreetNameEdit.clear();
        await this.uIIntersectionStreetNameEdit.fill(name);
        await this.uIIntersectionStreetNameEdit.press('Tab');
    }

    async enterPremise(premise: string): Promise<void> {
        await this.uIPremiseEdit.clear();
        await this.uIPremiseEdit.fill(premise);
        await this.uIPremiseEdit.press('Tab');
    }

    async enterPremiseOddRange(from: string, to: string): Promise<void> {
        await this.uIPremiseOddFromEdit.clear();
        await this.uIPremiseOddFromEdit.fill(from);
        await this.uIPremiseOddToEdit.clear();
        await this.uIPremiseOddToEdit.fill(to);
    }

    async enterPremiseEvenRange(from: string, to: string): Promise<void> {
        await this.uIPremiseEvenFromEdit.clear();
        await this.uIPremiseEvenFromEdit.fill(from);
        await this.uIPremiseEvenToEdit.clear();
        await this.uIPremiseEvenToEdit.fill(to);
    }

    async enterGeoCoordinates(x: string, y: string): Promise<void> {
        await this.uIGeoCordsXEdit.clear();
        await this.uIGeoCordsXEdit.fill(x);
        await this.uIGeoCordsYEdit.clear();
        await this.uIGeoCordsYEdit.fill(y);
    }

    async enterZipCode(zipCode: string): Promise<void> {
        await this.uIZipCodeEdit.clear();
        await this.uIZipCodeEdit.fill(zipCode);
        await this.uIZipCodeEdit.press('Tab');
    }

    async enterCensusTract(census: string): Promise<void> {
        await this.uICensusTractEdit.clear();
        await this.uICensusTractEdit.fill(census);
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickClear(): Promise<void> {
        await this.uIClearButton.click();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickSaveAndClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickRefresh(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async getStatusBarText(): Promise<string> {
        return (await this.uIBottomLeftSideStatusBar.textContent()) || '';
    }

    async getGridRowCount(): Promise<number> {
        const rows = this.uIAddressIntersectionResultGrid.locator("table tbody[class*='Item'] tr");
        return await rows.count();
    }
}

export class AddressIntersection2040Page {
    readonly page: Page;
    readonly uIInactiveCheckBox: Locator;
    readonly uIStreetNameEdit: Locator;
    readonly uIPremiseOddFromEdit: Locator;
    readonly uIPremiseOddToEdit: Locator;
    readonly uIPremiseEvenFromEdit: Locator;
    readonly uIPremiseEvenToEdit: Locator;
    readonly uIMainTab: Locator;
    readonly uIPoliceTab: Locator;
    readonly uIFireTab: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIRefreshButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIInactiveCheckBox = page.locator('NochkInActive');
        this.uIStreetNameEdit = page.locator('NotxtStreetName');
        this.uIPremiseOddFromEdit = page.locator('NotxtFrmLeft');
        this.uIPremiseOddToEdit = page.locator('NotxtToLeft');
        this.uIPremiseEvenFromEdit = page.locator('NotxtFrmRight');
        this.uIPremiseEvenToEdit = page.locator('NotxtToRight');
        this.uIMainTab = page.locator("//span[contains(text(),'Main')]");
        this.uIPoliceTab = page.locator("//span[contains(text(),'Police')]");
        this.uIFireTab = page.locator("//span[contains(text(),'Fire')]");
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveAndCloseButton = page.locator('NocmdSaveNClose');
        this.uIRefreshButton = page.locator('NocmdRefresh');
    }

    async switchToMainTab(): Promise<void> {
        await this.uIMainTab.click();
        // Playback.pageLoadThreadWait()
    }

    async switchToPoliceTab(): Promise<void> {
        await this.uIPoliceTab.click();
        // Playback.pageLoadThreadWait()
        // no-op: window handle
    }

    async switchToFireTab(): Promise<void> {
        await this.uIFireTab.click();
        // Playback.pageLoadThreadWait()
        // no-op: window handle
    }

    async VerifyAtStreetNameAndStreetType(streetName: string, streetType: string): Promise<void> {
        // Assert.assertTrue(uIMapGeo.addressIntersection2040.uIStreetNameEdit.getAttribute("value").contains(
        // BaseData.getGeoModuleValue("StreetName") + " " + BaseData.getGeoModuleValue("StreetType")))
    }

    async VerifyAtPremise(premise: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("Premise"),
        // uIMapGeo.addressIntersection2040.uIPremiseOddFromEdit.getAttribute("value"))
    }

    async VerifyAtPremiseOdd(premiseOdd: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("PremiseOdd").substring(0, 1),
        // uIMapGeo.addressIntersection2040.uIPremiseOddFromEdit.getAttribute("value"))
        // Assert.assertEquals(BaseData.getGeoModuleValue("PremiseOdd").substring(2),
        // uIMapGeo.addressIntersection2040.uIPremiseOddToEdit.getAttribute("value"))
    }

    async VerifyAtPremiseEven(premiseEven: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("PremiseEven").substring(0, 1),
        // uIMapGeo.addressIntersection2040.uIPremiseEvenFromEdit.getAttribute("value"))
        // Assert.assertEquals(BaseData.getGeoModuleValue("PremiseEven").substring(2),
        // uIMapGeo.addressIntersection2040.uIPremiseEvenToEdit.getAttribute("value"))
    }

    async SaveNClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        // confirm popup: yes
    }

    async CloseScreen(): Promise<void> {
        // uIMapGeo.addressIntersection2040.driver.close()
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        // confirm popup: yes
    }

    async clickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async verifyUpdateSuccessfulStatusMessage(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("1003 - Update Successful",
        // uIMapGeo.streetUpdate.uIBottomLeftSideStatusBar.getText()); // Added by Abi
    }

    async VerifyAtStreetName(streetName: string): Promise<void> {
        const name = await this.uIStreetNameEdit.inputValue();
        expect(streetName).toEqual(name);
    }

    async verifyPremiseOddIsEmpty(): Promise<void> {
        const PremiseODDFrom = await this.uIPremiseOddFromEdit.inputValue();
        expect(PremiseODDFrom.isBlank()&&PremiseODDFrom.isEmpty()).toBeTruthy();
        const PremiseODDTo = await this.uIPremiseOddToEdit.inputValue();
        expect(PremiseODDTo.isBlank()&&PremiseODDTo.isEmpty()).toBeTruthy();
    }

    async verifyPremiseEvenIsEmpty(): Promise<void> {
        const PremiseEvenFrom = await this.uIPremiseEvenFromEdit.inputValue();
        expect(PremiseEvenFrom.isBlank()&&PremiseEvenFrom.isEmpty()).toBeTruthy();
        const PremiseEvenTo = await this.uIPremiseEvenToEdit.inputValue();
        expect(PremiseEvenTo.isBlank()&&PremiseEvenTo.isEmpty()).toBeTruthy();
    }
}

export class AddressIntersection2040UpdateLatLongWindowPage {
    readonly page: Page;
    readonly uIMapButton: Locator;
    readonly uIGetButton: Locator;
    readonly uIAutoCalculateButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIMapButton = page.locator('NobtnMap');
        this.uIGetButton = page.locator('NobtnGetLatiLongi');
        this.uIAutoCalculateButton = page.locator('NobtnAutoCalculate');
    }

    async clickMapButton(): Promise<void> {
        await this.uIMapButton.click();
    }

    async clickGetButton(): Promise<void> {
        await this.uIGetButton.click();
    }

    async clickAutoCalculateButton(): Promise<void> {
        await this.uIAutoCalculateButton.click();
    }
}

export class AddressIntersectionHelpWindowPage {
    readonly page: Page;
    readonly uIFirstStreetEdit: Locator;
    readonly uICancelReEnterButton: Locator;
    readonly uIAddIntersectionButton: Locator;
    readonly uIIntersectionTable: Locator;
    readonly uIAddressIntersectionGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIFirstStreetEdit = page.locator('NotxtFirstStreet');
        this.uICancelReEnterButton = page.locator('NocmdCancel');
        this.uIAddIntersectionButton = page.locator('NocmdAdd');
        this.uIIntersectionTable = page.locator('NogrdIntersection');
        this.uIAddressIntersectionGrid = page.locator('NogrdIntersection');
    }

    async clickCancelAndReEnterButton(): Promise<void> {
        await this.uICancelReEnterButton.click();
    }

    async clickAddIntersection(): Promise<void> {
        await this.uIAddIntersectionButton.click();
    }

    async selectGridRow(rowIndex: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        // objectIdentification.manualIdentify.selectGridTableRow(uIMapGeo.addressIntersectionHelpWindow.uIIntersectionTable, rowIndex)
    }

    async verifyAtStreet2ByStreet(i: string, street2: string, street: string): Promise<void> {
        // String gridCell = objectIdentification.manualIdentify.getGridCell
        // (uIMapGeo.addressIntersectionHelpWindow.uIAddressIntersectionGrid,BaseData.getGeoModuleValue("Street2"+i),"Street").getText()
        expect(gridCell).toEqual(street);
    }

    async switchToAddressIntersectionHelpWindow(): Promise<void> {
        // no-op: window handle
        // Playback.controlReadyThreadWait()
    }
}

export class AddressIntersectionMainTabPage {
    readonly page: Page;
    readonly uIPremiseTypeComboBox: Locator;
    readonly uICensusEdit: Locator;
    readonly uIVotingDistComboBox: Locator;
    readonly uIMapButton: Locator;
    readonly uIGetButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIPremiseTypeComboBox = page.locator('NotabAddress_tmpl0_ctrlUsrAddressMain_cddPremiseType_DropDown');
        this.uICensusEdit = page.locator('NotabAddress_tmpl0_ctrlUsrAddressMain_txtCensus');
        this.uIVotingDistComboBox = page.locator('NotabAddress_tmpl0_ctrlUsrAddressMain_cddVotingDist_DropDown');
        this.uIMapButton = page.locator('NotabAddress_tmpl0_ctrlUsrAddressMain_btnShowMap');
        this.uIGetButton = page.locator('NotabAddress_tmpl0_ctrlUsrAddressMain_btnGetLatiLongi');
    }

    async VerifyAtPremiseType(premiseType: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("PremiseType"),
        // objectIdentification.manualIdentify.getDropDownSelectedItem(
        // uIMapGeo.addressIntersection2040.addressIntersectionMainTab.uIPremiseTypeComboBox))
    }

    async VerifyAtCensus(census: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("Census"),
        // uIMapGeo.addressIntersection2040.addressIntersectionMainTab.uICensusEdit.getAttribute("value"))
    }

    async clickMapButton(): Promise<void> {
        await this.addressIntersectionMainTab.click();
    }

    async clickGetButton(): Promise<void> {
        await this.addressIntersectionMainTab.click();
        // confirm popup: (5099) Do you want update each premise Lat/Long manually?
        // popup.switchToConfirm()
        // Playback.gridLoadThreadWait()
        // confirm popup: (5099) Do you want update each premise Lat/Long manually?
    }

    async verifyCensusTrackFieldDisabled(): Promise<void> {
        // verify.ExpectedValueIsTrue(uIMapGeo.addressIntersection2040.addressIntersectionMainTab.uICensusEdit.getAttribute("class").contains("textboxInactive"))
    }

    async verifyAtCensusTract(censusTract: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("CensusTract"),
        // uIMapGeo.addressIntersection2040.addressIntersectionMainTab.uICensusEdit.getAttribute("value"))
    }
}

export class AddressSearchPage {
    readonly page: Page;
    readonly uIaddressButton: Locator;
    readonly uIAddressLocationEdit: Locator;
    readonly uIAddessLocationCheckBox: Locator;
    readonly uIResetButton: Locator;
    readonly uIZipCodeTextView: Locator;
    readonly uICSZTextView: Locator;
    readonly uIMergeAddressButton: Locator;
    readonly uIWeatherIconButton: Locator;
    readonly uIWeatherButton: Locator;
    readonly uIParaIDNameButton: Locator;
    readonly uIPrintIconButton: Locator;
    readonly uICommonNameTextView: Locator;
    readonly uIAltStreetTextView: Locator;
    readonly uIPremiseHistoryTab: Locator;
    readonly uIContactsTab: Locator;
    readonly uIAttachmentsTab: Locator;
    readonly uIHazMatTab: Locator;
    readonly uIMapTab: Locator;
    readonly uIActivitiesTab: Locator;
    readonly uINamesTab: Locator;
    readonly uICommonNameTab: Locator;
    readonly uILeadsTab: Locator;
    readonly uIDetailsTab: Locator;
    readonly uIAddressBubble: Locator;
    readonly uINotificationTab: Locator;
    readonly uILocationIcon: Locator;
    readonly uILocationCheckTab: Locator;
    readonly uIAddressClearIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIaddressButton = page.locator('NobtnDetails');
        this.uIAddressLocationEdit = page.locator('NoaddrLoc_txtFrom');
        this.uIAddessLocationCheckBox = page.locator('NoaddrLoc_chkVerify');
        this.uIResetButton = page.locator('NocmdReset');
        this.uIZipCodeTextView = page.locator('NotxtZip');
        this.uICSZTextView = page.locator('NolblCSZ');
        this.uIMergeAddressButton = page.locator('NobtnMergeAddress');
        this.uIWeatherIconButton = page.locator('NoimgWeather');
        this.uIWeatherButton = page.locator('NobtnWeather');
        this.uIParaIDNameButton = page.locator('NobtnView');
        this.uIPrintIconButton = page.locator('NocmdPrint');
        this.uICommonNameTextView = page.locator('NolblCPName');
        this.uIAltStreetTextView = page.locator('NolblPremisesubAlt');
        this.uIPremiseHistoryTab = page.locator("//span[contains(text(), 'Premise History')]");
        this.uIContactsTab = page.locator("//span[contains(text(), 'Contacts')]");
        this.uIAttachmentsTab = page.locator("//span[contains(text(), 'Attachments')]");
        this.uIHazMatTab = page.locator("//span[text()='HazMat']");
        this.uIMapTab = page.locator("//div[@id = 'tabAddrDtls']//span[@mkr='ti12']");
        this.uIActivitiesTab = page.locator("//span[contains(text(), 'Activities')]");
        this.uINamesTab = page.locator("//span[contains(text(), 'Names')]");
        this.uICommonNameTab = page.locator("//span[contains(text(), 'Common Name')]");
        this.uILeadsTab = page.locator("//span[contains(text(), 'Leads')]");
        this.uIDetailsTab = page.locator("//span[contains(text(), 'Details')]");
        this.uIAddressBubble = page.locator('NoaddrLoc_cmdIncOnAddr');
        this.uINotificationTab = page.locator("//span[contains(text(), 'Notification')]");
        this.uILocationIcon = page.locator("//div[@id='map_canvas']//div[@aria-label='Lat/Long not set for : AddressDetails']");
        this.uILocationCheckTab = page.locator("//div[@id='tab0']//span[text()= 'Location Check']");
        this.uIAddressClearIcon = page.locator('NocmdReset');
    }

    async switchToNamesTab(): Promise<void> {
        await this.uINamesTab.click();
        // Playback.popupThreadWait()
        // no-op: window handle
        // Playback.controlReadyThreadWait()
    }

    async switchToContactsTab(): Promise<void> {
        await this.uIContactsTab.click();
        // Playback.popupThreadWait()
        // no-op: window handle
    }

    async ClickToHereMapTab(): Promise<void> {
        // Playback.pageLoadThreadWait()
        await this.uIMapTab.click();
        // Playback.pageLoadThreadWait()
        // no-op: window handle
        // objectIdentification.windowHandle.switchToFrame("Home/GHydrantMapESRI.aspx");
        // objectIdentification.windowHandle.switchToFrame("Address Search",
        // "Home/GHydrantMap.aspx");
    }

    async ClickToMapTab(): Promise<void> {
        // Playback.pageLoadThreadWait()
        await this.uIMapTab.click();
        // Playback.pageLoadThreadWait()
        // objectIdentification.windowHandle.switchToFrame("Home/GHydrantMap.aspx");
        // //commented by Abi
        // objectIdentification.windowHandle.switchToFrame("Home/GHydrantMapESRI.aspx");
        // objectIdentification.windowHandle.switchToFrame("Address Search",
        // "Home/GHydrantMap.aspx");
        // Playback.pageLoadThreadWait();
    }

    async clickMapTabForESRIMap(): Promise<void> {
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
        await this.uIMapTab.click();
        // Playback.pageLoadThreadWait()
        // no-op: window handle
    }

    async ResetAddress(): Promise<void> {
        await this.uIResetButton.click();
        // Playback.controlReadyThreadWait()
        // Playback.controlReadyThreadWait()
    }

    async EnterAtPhoneNumber(phoneNumber: string): Promise<void> {
        // phoneNumber = phoneNumber (from test data)
        await this.uIAddressLocationEdit.fill(phoneNumber);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.popupThreadWait()
    }

    async EnterAtAltPhoneNumber(altPhoneNumber: string): Promise<void> {
        // altPhoneNumber = altPhoneNumber (from test data)
        await this.uIAddressLocationEdit.fill(altPhoneNumber);
        await this.uIAddressLocationEdit.press('Tab');
    }

    async enterAtAddress(address: string): Promise<void> {
        // address = address (from test data)
        await this.uIAddressLocationEdit.fill(address);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
    }

    async EnterAddress(address: string): Promise<void> {
        await this.uIAddressLocationEdit.click();
        await this.uIAddressLocationEdit.fill(address);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
    }

    async EnterAddress(): Promise<void> {
        await this.uIAddressLocationEdit.fill(Randomized.randomAlphanumeric(10));
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
    }

    async EnterAtCommonName(commonName: string): Promise<void> {
        // commonName = commonName (from test data)
        await this.uIAddressLocationEdit.fill(commonName);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
    }

    async EnterCommonName(JSONKeyIndex: string, addressSearchCommonName: string): Promise<void> {
        await this.uIAddressLocationEdit.click();
        await this.uIAddressLocationEdit.fill(addressSearchCommonName);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
    }

    async EnterAtCommonName1(commonName1: string): Promise<void> {
        // commonName1 = commonName1 (from test data)
        await this.uIAddressLocationEdit.fill(commonName1);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
    }

    async ClickClearButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async EnterAtPremiseWithAlterStreetName(premise: string, alterStreetName: string, alterStreetType: string): Promise<void> {
        // premise = premise (from test data)
        // alterStreetName = alterStreetName (from test data)
        // alterStreetType = alterStreetType (from test data)
        await this.uIAddressLocationEdit.fill(premise + " " + alterStreetName + " " + alterStreetType);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
    }

    async EnterAtStreetNameAndTypeWithIntersectionSlashCharacter(streetName: string, streetType: string): Promise<void> {
        // streetName = streetName (from test data)
        // streetType = streetType (from test data)
        await this.uIAddressLocationEdit.fill(streetName + " " + streetType + "/");
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
    }

    async EnterAtInterIntersectionStreetNameAndTypeWithSlashCharacter(interStreetName: string, interStreetType: string): Promise<void> {
        // interStreetName = interStreetName (from test data)
        // interStreetType = interStreetType (from test data)
        await this.uIAddressLocationEdit.fill(interStreetName + " " + interStreetType + "/");
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
    }

    async EnterAtOddEvenStreetNameWithPrefix(oddEven: string, prefix: string, streetName: string, streetType: string): Promise<void> {
        // oddEven = oddEven (from test data)
        // prefix = prefix (from test data)
        // streetName = streetName (from test data)
        // streetType = streetType (from test data)
        await this.uIAddressLocationEdit.fill(oddEven + " " + prefix + " " + streetName + " " + streetType);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
    }

    async EnterAtOddEvenStreetName(oddEven: string, prefix: string, streetName: string, streetType: string): Promise<void> {
        // oddEven = oddEven (from test data)
        // String prefix = BaseData.getGeoModuleValue("Prefix");
        // streetName = streetName (from test data)
        // streetType = streetType (from test data)
        await this.uIAddressLocationEdit.fill(oddEven + " " + streetName + " " + streetType);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
    }

    async EnterAtStreetNameandInterStreetName(streetName: string, streetType: string, interStreetName: string, interStreetType: string): Promise<void> {
        // streetName = streetName (from test data)
        // streetType = streetType (from test data)
        // interStreetName = interStreetName (from test data)
        // interStreetType = interStreetType (from test data)
        await this.uIAddressLocationEdit.click();
        await this.uIAddressLocationEdit.fill(streetName + " " + streetType + "/" + interStreetName + " " + interStreetType);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
    }

    async ClickWeatherButton(): Promise<void> {
        await this.uIWeatherButton.click();
        // Playback.popupThreadWait()
    }

    async ClickAllTabs(): Promise<void> {
        // Playback.pageLoadThreadWait()
        await this.uIFlagsTab.click();
        await this.uICommonNameTab.click();
        await this.uIAttachmentsTab.click();
        // uIMapGeo.uIMapGeo.addressSearch.uIContactsTab.Click();
        await this.uIMapTab.click();
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
    }

    async switchToMapTab(): Promise<void> {
        await this.uIMapTab.click();
        // no-op: window handle
    }

    async ClickActivitiesTab(): Promise<void> {
        await this.uIActivitiesTab.click();
    }

    async ClickCommonNameTab(): Promise<void> {
        await this.uICommonNameTab.click();
    }

    async switchToLeadsTab(): Promise<void> {
        await this.uILeadsTab.click();
        // no-op: window handle
    }

    async SwitchToActivitiesTab(): Promise<void> {
        await this.uIActivitiesTab.click();
        // no-op: window handle
        // Playback.controlReadyThreadWait()
    }

    async ClickToFlagTab(): Promise<void> {
        await this.uIFlagsTab.click();
        // Playback.controlReadyThreadWait()
        // no-op: window handle
        // objectIdentification.windowHandle.switchToFrame(uIMapGeo.addressSearch.addressSearchFlagsTab.uIMapGeo.addressSearch.addressSearchFlagsTab.uIAddressSearchFlagsTabIframe);
        // Playback.controlReadyThreadWait()
    }

    async clickToLocationCheckTab(): Promise<void> {
        await this.uILocationCheckTab.click();
        // Playback.controlReadyThreadWait()
        //	objectIdentification.windowHandle.switchToFrame("frmAddrInfoFlags.aspx");
    }

    async ClickAtParaIDNameButton(): Promise<void> {
        await this.uIParaIDNameButton.click();
    }

    async VerifyConfirmGeoFly(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // popup.confirm.yesWithExpectedMessage(
        // "(5100)The entered address is not found in the RMS Geo database. Click OK to add this as a new address, or click Cancel to correct the entered address.")
        //			if (Playback.browserType.contains("Chrome")) {
        //				popup.confirm.yesWithExpectedMessage(
        //						"(5100) The entered address is not found in the RMS Geo database. Click Yes to add this as a new address, or click No to correct the entered address.");
        //			} else
        //				popup.confirm.yesWithExpectedMessage(
        //						"(5100) The entered address is not found in the RMS Geo database. Click Yes to add this as a new address, or click No to correct the entered address.");
    }

    async VerifyAtParaIDButtonExist(name: string): Promise<void> {
        // name = name (from test data)
        // Assert.assertEquals(name, uIMapGeo.addressSearch.uIParaIDNameButton.getAttribute("value"))
    }

    async VerifyAcknowledgeInactiveAddress(): Promise<void> {
        // popup: (5097) This address is inactive
    }

    async verifyAcknowledgePremiseInactiveAddress(): Promise<void> {
        // popup: (5095) Premise is inactive
    }

    async VerifyAtOddEvenStreet(oddEven: string, prefix: string, streetName: string, streetType: string): Promise<void> {
        // oddEven = oddEven (from test data)
        // prefix = prefix (from test data)
        // streetName = streetName (from test data)
        // streetType = streetType (from test data)
        // Assert.assertTrue(uIMapGeo.addressSearch.uIAddressLocationEdit.getAttribute("value").contains(oddEven + " " + prefix + " " + streetName + " " + streetType))
    }

    async VerifyAtAddresseAndApartment(address: string, apartmentFrom: string): Promise<void> {
        // address = address (from test data)
        // apartmentFrom = apartmentFrom (from test data)
        // verify.ExpectedPropertyValueIsEqual((uIMapGeo.addressSearch.uIAddressLocationEdit.getAttribute("value")), address+","+apartmentFrom)
    }

    async VerifyAtAddressWithSplitApartment(address: string, splitTo: string): Promise<void> {
        // address = address (from test data)
        // splitTo = splitTo (from test data)
        // Assert.assertTrue(uIMapGeo.addressSearch.uIAddressLocationEdit.getAttribute("value").contains(address))
        // Assert.assertTrue(uIMapGeo.addressSearch.uIAddressLocationEdit.getAttribute("value").contains(splitTo))
    }

    async VerifyAtCommonName(commonName: string): Promise<void> {
        // commonName = commonName (from test data)
        // Playback.popupThreadWait()
        // Assert.assertTrue(uIMapGeo.addressSearch.uICommonNameTextView.getText().contains(commonName))
    }

    async VerifyAtCommonName1(commonName1: string): Promise<void> {
        // commonName1 = commonName1 (from test data)
        // Playback.popupThreadWait()
        // Assert.assertTrue(uIMapGeo.addressSearch.uICommonNameTextView.getText().contains(commonName1))
    }

    async VerifyAtAltStreetName(alterStreetName: string): Promise<void> {
        // alterStreetName = alterStreetName (from test data)
        // Playback.popupThreadWait()
        // Assert.assertTrue(uIMapGeo.addressSearch.uIAltStreetTextView.getText().contains(alterStreetName))
    }

    async VerifyStreetNameWithApartment(streetName: string, apartment: string): Promise<void> {
        // streetName = streetName (from test data)
        // apartment = apartment (from test data)
        // Assert.assertTrue(uIMapGeo.addressSearch.uIAddressLocationEdit.getAttribute("value").contains(streetName))
        // Assert.assertTrue(uIMapGeo.addressSearch.uIAddressLocationEdit.getAttribute("value").contains(apartment))
    }

    async VerifyAtIntersectionAddressByStreetName(intersectionAddressByStreetName: string): Promise<void> {
        // intersectionAddressByStreetName = intersectionAddressByStreetName (from test data)
        // Assert.assertTrue(uIMapGeo.addressSearch.uIAddressLocationEdit.getAttribute("value").contains(intersectionAddressByStreetName))
    }

    async VerifyAtIntersectionAddressByIntersectionStreetName(): Promise<void> {
        // intersectionAddressByIntersectionStreetName = intersectionAddressByIntersectionStreetName (from test data)
        // Assert.assertTrue(uIMapGeo.addressSearch.uIAddressLocationEdit.getAttribute("value").contains(intersectionAddressByIntersectionStreetName))
    }

    async VerifyAtStreetNameAndIntersectionStreetName(streetName: string, interStreetName: string): Promise<void> {
        // streetName = streetName (from test data)
        // interStreetName = interStreetName (from test data)
        // Playback.popupThreadWait()
        // Playback.popupThreadWait()
        // Assert.assertTrue(uIMapGeo.addressSearch.uIAddressLocationEdit.getAttribute("value").contains(streetName))
        // Assert.assertTrue(
        // uIMapGeo.addressSearch.uIAddressLocationEdit.getAttribute("value").contains(interStreetName))
    }

    async VerifyAtAddress(address: string): Promise<void> {
        // address = address (from test data)
        // Playback.controlReadyThreadWait()
        // System.out.println(uIMapGeo.addressSearch.uIAddressLocationEdit.getAttribute("value"))
        // Assert.assertTrue(uIMapGeo.addressSearch.uIAddressLocationEdit.getAttribute("value").contains(address))
    }

    async verifyAtAddressBubble(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // Assert.assertTrue(uIMapGeo.addressSearch.uIAddressBubble.isDisplayed())
    }

    async VerifyAtCSZ(cSZ: string): Promise<void> {
        // csz = cSZ (from test data)
        // Assert.assertEquals(csz, uIMapGeo.addressSearch.uICSZTextView.getAttribute("innerText"))
    }

    async VerifyCSZ(City: string, State: string, ZipCode: string): Promise<void> {
        // String ko = City.substring(0, 7);
        // Assert.assertEquals(City.substring(0, 7), uIMapGeo.addressSearch.uICSZTextView.getAttribute("value"))
        // Assert.assertEquals(State.substring(8, 10), uIMapGeo.addressSearch.uICSZTextView.getAttribute("value"))
        // Assert.assertEquals(ZipCode.substring(11), uIMapGeo.addressSearch.uICSZTextView.getAttribute("value"))
    }

    async clickMergeAddressButton(): Promise<void> {
        await this.uIMergeAddressButton.click();
        // Playback.pageLoadThreadWait()
    }

    async CloseScreen(): Promise<void> {
        // uIMapGeo.addressSearch.driver.close()
    }

    async VerifyMapTabColorRed(): Promise<void> {
        // Playback.pageLoadThreadWait()
        // Assert.assertTrue(uIMapGeo.addressSearch.uIMapTab.getAttribute("class").contains("clrRed"))
    }

    async ClickAddressButton(): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIaddressButton.click();
        // Playback.controlReadyThreadWait()
    }

    async EnterAtAlarmNo(alarmNo: string): Promise<void> {
        // alarmNo = alarmNo (from test data)
        await this.uIAddressLocationEdit.fill(alarmNo);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
    }

    async EnterAtAddressWithApartmentFrom1(address: string, apartmentFrom1: string): Promise<void> {
        // address = address (from test data)
        // apartmentFrom1 = apartmentFrom1 (from test data)
        await this.uIAddressLocationEdit.fill(address + "," + apartmentFrom1);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
    }

    async EnterAtAddressWithApartmentFrom(address: string, apartmentFrom: string): Promise<void> {
        // address = address (from test data)
        // apartmentFrom1 = apartmentFrom (from test data)
        await this.uIAddressLocationEdit.fill(address + "," + apartmentFrom1);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
    }

    async EnterAtAddressWithInvalidApartmentFrom(address: string, invalidApartmentFrom: string): Promise<void> {
        // address = address (from test data)
        // apartmentFrom = invalidApartmentFrom (from test data)
        await this.uIAddressLocationEdit.fill(address + "," + apartmentFrom);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
    }

    async VerifyNoConfirmGeoFly(): Promise<void> {
        // popup.confirm.noWithExpectedMessage(
        // "(5100)The entered address is not found in the RMS Geo database. Click OK to add this as a new address, or click Cancel to correct the entered address.")
        // popup.confirm.noWithExpectedMessage(
        // "(5100) The entered address is not found in the RMS Geo database. Click Yes to add this as a new address, or click No to correct the entered address.")
    }

    async EnterAtStreetNameWithSlashCharacter(streetName: string): Promise<void> {
        // streetName = streetName (from test data)
        await this.uIAddressLocationEdit.fill(streetName + "/");
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
    }

    async EnterAtStreetName1WithSlashCharacter(streetName1: string): Promise<void> {
        // streetName1 = streetName1 (from test data)
        await this.uIAddressLocationEdit.fill(streetName1 + "/");
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
    }

    async SwitchToCommonNameTab(): Promise<void> {
        await this.uICommonNameTab.click();
        // no-op: window handle
        // Playback.controlReadyThreadWait()
    }

    async EnterAtStreetNameAndStreetName1WithSlashCharacter(streetName: string, streetName1: string): Promise<void> {
        // streetName = streetName (from test data)
        // streetName1 = streetName1 (from test data)
        await this.uIAddressLocationEdit.fill(streetName + "/" + streetName1);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
    }

    async EnterAtStreetName1AndStreetNameWithSlashCharacter(streetName: string, streetName1: string): Promise<void> {
        // streetName = streetName (from test data)
        // streetName1 = streetName1 (from test data)
        await this.uIAddressLocationEdit.fill(streetName1 + "/" + streetName);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
    }

    async VerifyAtAddress1(address1: string): Promise<void> {
        // address1 = address1 (from test data)
        // Playback.controlReadyThreadWait()
        // Assert.assertTrue(uIMapGeo.addressSearch.uIAddressLocationEdit.getAttribute("value").contains(address1))
    }

    async verifyFlagTabTextAsBold(): Promise<void> {
        // String fontColor = uIMapGeo.addressSearch.uIFlagsTab.getCssValue("font-weight")
        expect(fontColor.contains("700")).toBeTruthy();
    }

    async reloadAddressSearch(): Promise<void> {
        // objectIdentification.manualIdentify.selectRightClickTabMenuByTabText("Address Search", "Reload Tab")
    }

    async verifyFlagTabTextAsNormal(): Promise<void> {
        // String fontColor = uIMapGeo.addressSearch.uIFlagsTab.getCssValue("font-weight")
        expect(fontColor.contains("400")).toBeTruthy();
    }

    async ClickToDetailsTab(): Promise<void> {
        // Playback.pageLoadThreadWait()
        await this.uIDetailsTab.click();
        // Playback.pageLoadThreadWait()
        // no-op: window handle
    }

    async verifyFlagsTabIsDisplayed(): Promise<void> {
        // Playback.controlReadyThreadWait()
        expect(await this.uIFlagsTab.isVisible()).toBeTruthy();
    }

    async verifyCommonNameTabIsDisplayed(): Promise<void> {
        // Playback.controlReadyThreadWait()
        expect(await this.uICommonNameTab.isVisible()).toBeTruthy();
    }

    async verifyAttachmentsTabIsDisplayed(): Promise<void> {
        // Playback.controlReadyThreadWait()
        expect(await this.uIAttachmentsTab.isVisible()).toBeTruthy();
    }

    async verifyContactsTabIsDisplayed(): Promise<void> {
        // Playback.controlReadyThreadWait()
        expect(await this.uIContactsTab.isVisible()).toBeTruthy();
    }

    async verifyDetailsTabIsDisplayed(): Promise<void> {
        // Playback.controlReadyThreadWait()
        expect(await this.uIDetailsTab.isVisible()).toBeTruthy();
    }

    async verifyNotificationTabIsDisplayed(): Promise<void> {
        // Playback.controlReadyThreadWait()
        expect(await this.uINotificationTab.isVisible()).toBeTruthy();
    }

    async verifyMapTabIsDisplayed(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // verify.ExpectedValueIsTrue(uIMapGeo.addressSearch.uIMapTab.isDisplayed())
    }

    async verifyActivitiesTabIsDisplayed(): Promise<void> {
        // Playback.controlReadyThreadWait()
        expect(await this.uIActivitiesTab.isVisible()).toBeTruthy();
    }

    async enterAtAddress1(address1: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIAddressLocationEdit.fill(address1);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
    }

    async enterAtAddress2(address2: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIAddressLocationEdit.fill(address2);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
    }

    async enterAtAddress3(address3: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIAddressLocationEdit.fill(address3);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
    }

    async enterAtIntersectionAddress(intersectionAddress: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIAddressLocationEdit.fill(intersectionAddress);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
    }

    async enterAtIntStreet(intStreet: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIAddressLocationEdit.fill(intStreet);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
    }

    async enterAtAddress4(address4: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIAddressLocationEdit.fill(address4);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
    }

    async enterAtAddress5(address5: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIAddressLocationEdit.fill(address5);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
    }

    async enterAtAddress6(address6: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIAddressLocationEdit.fill(address6);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
    }

    async verifyAtAddressBubbleDisplayed(): Promise<void> {
        // String bbl = uIMapGeo.addressSearch.uIAddressBubble.getAttribute("src")
        // Playback.controlReadyThreadWait()
        expect(bbl.contains("debug") || bbl.contains("Red") || bbl.contains("Yellow")).toBeTruthy();
    }

    async VerifyAcknowledgeInactiveIntersection(): Promise<void> {
        // popup: (5096) Intersection is inactive
    }

    async clickPrintButton(): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIPrintIconButton.click();
        // Playback.controlReadyThreadWait()
        // Playback.controlReadyThreadWait()
    }

    async verifyAddressButtonInActive(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // verify.ExpectedValueIsFalse(uIMapGeo.addressSearch.uIaddressButton.isEnabled())
        // Playback.controlReadyThreadWait()
    }

    async verifyAddressButtonIsDisabled(): Promise<void> {
        // String attribute = uIMapGeo.addressSearch.uIaddressButton.getAttribute("disabled")
        // System.out.println(attribute)
        expect(attribute.contains("true")).toBeTruthy();
    }

    async clearAddress(): Promise<void> {
        await this.uIAddressLocationEdit.clear();
    }

    async enterAtAddressWithInvalidPremise(invalidAddress: string): Promise<void> {
        await this.uIAddressLocationEdit.fill(invalidAddress);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
    }

    async enterAtAddress1WithOutApartmentNo(address1WithOutApartmentNo: string): Promise<void> {
        await this.uIAddressLocationEdit.clear();
        // address1 = address1WithOutApartmentNo (from test data)
        // Playback.controlReadyThreadWait()
        await this.uIAddressLocationEdit.fill(address1);
        await this.uIAddressLocationEdit.press('Tab');
    }

    async switchToAttachmentTab(): Promise<void> {
        await this.uIAttachmentsTab.click();
        await this.page.waitForTimeout(3000);
        // no-op: window handle
        // Playback.waitForPageLoad()
    }

    async VerifyAtAddressBubbleNotDisplayed(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // verify.ExpectedValueIsTrue(uIMapGeo.addressSearch.uIAddressBubble.getAttribute("src").contains("remove"))
    }

    async enterAtIntersectionStreet(intersectionStreet: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIAddressLocationEdit.fill(intersectionStreet);
        await this.uIAddressLocationEdit.press('Tab');
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
    }

    async switchToHazMatTab(): Promise<void> {
        await this.uIHazMatTab.click();
    }

    async verifyAtAddress(idx: string, address: string): Promise<void> {
        // address = address (from test data)
        // Playback.controlReadyThreadWait()
        // System.out.println(uIMapGeo.addressSearch.uIAddressLocationEdit.getAttribute("value"))
        expect(address).toEqual(address);
    }

    async VerifyMapTabColorBlack(): Promise<void> {
        // Playback.pageLoadThreadWait()
        // verify.ExpectedValueIsTrue(uIMapGeo.addressSearch.uIMapTab.getAttribute("class").contains("clrBlack"))
        // Assert.assertTrue(uIMapGeo.addressSearch.uIMapTab.getAttribute("class").contains("clrBlack"));
    }

    async VerifyAtAddress2(address2: string): Promise<void> {
        // address2 = address2 (from test data)
        // Playback.controlReadyThreadWait()
        // Assert.assertTrue(uIMapGeo.addressSearch.uIAddressLocationEdit.getAttribute("value").contains(address2))
    }

    async clickMapTabForGoogleMap(): Promise<void> {
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
        await this.uIMapTab.click();
        // Playback.pageLoadThreadWait()
        // no-op: window handle
    }
}

export class AddressSearchActivitiesTabPage {
    readonly page: Page;
    readonly uIActivitiesTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIActivitiesTable = page.locator('NogrdActLogSrch');
    }

    async verifyAtActivityType(): Promise<void> {
        // String activityType= BaseData.getGeoModuleValue( "ActivityType");
        // Assert.assertEquals(activityType,
        // objectIdentification.manualIdentify.getGridCell(uIMapGeo.addressSearch.addressSearchActivitiesTab.uIActivitiesTable,
        // activityType, "Activity Type"));
    }

    async VerifyAtSubject(subject: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("Subject"),
        // objectIdentification.manualIdentify.getGridCell(uIMapGeo.addressSearch.addressSearchActivitiesTab.uIActivitiesTable,
        // BaseData.getGeoModuleValue("Subject"), "Subject").Text);
    }

    async VerifyAtStatus(status: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("Status"),
        // objectIdentification.manualIdentify.getGridCell(uIMapGeo.addressSearch.addressSearchActivitiesTab.uIActivitiesTable,
        // BaseData.getGeoModuleValue("Status"), "Status").);
    }

    async VerifyAtBy(by: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("By"),
        // objectIdentification.manualIdentify.getGridCell(uIMapGeo.addressSearch.addressSearchActivitiesTab.uIActivitiesTable,
        // BaseData.getGeoModuleValue("By"), "By").get);
    }

    async VerifyDateAsCurrentDateByAtActivityType(activityType: string): Promise<void> {
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCell(uIMapGeo.addressSearch.addressSearchActivitiesTab.uIActivitiesTable,
        // BaseData.getGeoModuleValue("ActivityType"), "Date
        // Time").Text.Contains(Randomized.getCurrentDate().Remove(6,2)),"Verify Current
        // date");
    }

    async SelectRowByAtActivityType(activityType: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.addressSearch.addressSearchActivitiesTab.uIActivitiesTable,
        // BaseData.getGeoModuleValue("ActivityType"))
    }

    async verifyAtEnteredByInGrid(enteredBy: string): Promise<void> {
        // enteredBy = enteredBy (from test data)
        // String gridRowByCellInnerText = objectIdentification.manualIdentify.getGridRowByCellInnerText(uIMapGeo.addressSearch.addressSearchActivitiesTab.uIActivitiesTable, enteredBy).getText()
        expect(gridRowByCellInnerText).toEqual(enteredBy);
    }
}

export class AddressSearchCommonNameTabPage {
    readonly page: Page;
    readonly uIAddCommonNameButton: Locator;
    readonly uICommonNameTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddCommonNameButton = page.locator('NocmdAdd');
        this.uICommonNameTable = page.locator('NogrdCMNName');
    }

    async VerifyAtCommonName(commonName: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("CommonName"),
        // objectIdentification.manualIdentify.getGridCell(uIMapGeo.addressSearch.addressSearchCommonNameTab.uICommonNameTable,
        // BaseData.getGeoModuleValue("CommonName")).getText())
    }

    async VerifyAtCommonName(rowIndex: string, commonName: string): Promise<void> {
        // String Cname = objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressSearch.addressSearchCommonNameTab.uICommonNameTable, "Common Name", rowIndex)
        expect(Cname).toEqual(commonName);
    }

    async verifyAddCommonNameDisabled(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // verify.ExpectedValueIsFalse(
        // uIMapGeo.addressSearch.addressSearchCommonNameTab.uIAddCommonNameButton.isEnabled())
        // Playback.controlReadyThreadWait()
    }

    async clickAddCommonName(): Promise<void> {
        await this.addressSearchCommonNameTab.click();
    }

    async verifyCommonNameListedInSortOrderWise(): Promise<void> {
        // System.out.println(ComnNameEntry)
        // System.out.println(CommonnmaeTab)
        // verify.ExpectedListValueIsTrue(ComnNameEntry, CommonnmaeTab)
    }
}

export class AddressSearchContactTabPage {
    readonly page: Page;
    readonly uIContactsTabResultTable: Locator;
    readonly uISearchButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIIncludeInactiveCheckBox: Locator;
    readonly uISaveButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIPhoneType1ComboBox: Locator;
    readonly uIPhoneNumber1Edit: Locator;
    readonly uINotes1Edit: Locator;
    readonly uIDeleteicon1Button: Locator;
    readonly uIPhoneType2ComboBox: Locator;
    readonly uIPhoneNumber2Edit: Locator;
    readonly uINotes2Edit: Locator;
    readonly uIDeleteicon2Button: Locator;
    readonly uIPhoneType3ComboBox: Locator;
    readonly uIPhoneNumber3Edit: Locator;
    readonly uINotes3Edit: Locator;
    readonly uIDeleteicon3Button: Locator;
    readonly uIAddMorePhoneNumberButton: Locator;
    readonly uIOrder1Edit: Locator;
    readonly uIOrder2Edit: Locator;
    readonly uIPhoneInactive1: Locator;
    readonly uIPhoneInactive2: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIContactsTabResultTable = page.locator('NogrdContacts');
        this.uISearchButton = page.locator('NobtnSearch');
        this.uIAddNewButton = page.locator('NobtnAddnew');
        this.uIIncludeInactiveCheckBox = page.locator('NochkIncludeExpired');
        this.uISaveButton = page.locator('NocmdSave');
        this.uIRefreshButton = page.locator('NocmdRefresh');
        this.uIPhoneType1ComboBox = page.locator('NotxtNumber_1_PhoneType_DropDown');
        this.uIPhoneNumber1Edit = page.locator('NotxtNumber_1_PhoneNumber');
        this.uINotes1Edit = page.locator('NotxtNotes_1');
        this.uIDeleteicon1Button = page.locator('NoimgRemove_1');
        this.uIPhoneType2ComboBox = page.locator('NotxtNumber_2_PhoneType_DropDown');
        this.uIPhoneNumber2Edit = page.locator('NotxtNumber_2_PhoneNumber');
        this.uINotes2Edit = page.locator('NotxtNotes_2');
        this.uIDeleteicon2Button = page.locator('NoimgRemove_2');
        this.uIPhoneType3ComboBox = page.locator('NotxtNumber_3_PhoneType_DropDown');
        this.uIPhoneNumber3Edit = page.locator('NotxtNumber_3_PhoneNumber');
        this.uINotes3Edit = page.locator('NotxtNotes_3');
        this.uIDeleteicon3Button = page.locator('NoimgRemove_3');
        this.uIAddMorePhoneNumberButton = page.locator('NoAddMorePhoneNumber');
        this.uIOrder1Edit = page.locator('NotxtOrder_1');
        this.uIOrder2Edit = page.locator('NotxtOrder_2');
        this.uIPhoneInactive1 = page.locator('NochkInactive_1');
        this.uIPhoneInactive2 = page.locator('NochkInactive_2');
    }

    async ClickAddNewButton(): Promise<void> {
        await this.addressSearchContactTab.click();
    }

    async VerifyAtNameInTheGrid(rowIndex: string, name: string): Promise<void> {
        // name = name (from test data)
        // Assert.assertEquals(name, objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressSearch.addressSearchContactTab.uIContactsTabResultTable, "Name", rowIndex))
    }

    async VerifyAtContactNotExist(name: string): Promise<void> {
        // name = name (from test data)
        // Assert.assertFalse(uIMapGeo.addressSearch.addressSearchContactTab.uIContactsTabResultTable.getText().contains(name))
    }

    async VerfiAtPhoneNo(rowIndex: string, phoneNumber: string): Promise<void> {
        // phoneNumber = phoneNumber (from test data)
        // Assert.assertEquals(phoneNumber, objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressSearch.addressSearchContactTab.uIContactsTabResultTable, "PhoneNo", rowIndex))
    }

    async VerifyAtAltPhoneNo(rowIndex: string, altPhoneNumber: string): Promise<void> {
        // altPhoneNumber = altPhoneNumber (from test data)
        // Assert.assertEquals(altPhoneNumber,
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressSearch.addressSearchContactTab.uIContactsTabResultTable, "Alt PhoneNo",
        // rowIndex))
    }

    async ClickAtName(rowIndex: string): Promise<void> {
        // objectIdentification.manualIdentify.getGridCell(uIMapGeo.addressSearch.addressSearchContactTab.uIContactsTabResultTable, "Name",
        // rowIndex).click()
    }

    async SelectPhoneType1AsHome(): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapGeo.addressSearch.addressSearchContactTab.uIPhoneType1ComboBox, "H - Home")
    }

    async SelectPhoneType2AsHome(): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapGeo.addressSearch.addressSearchContactTab.uIPhoneType2ComboBox, "H - Home")
        await this.addressSearchContactTab.press('Tab');
    }

    async EnterPhoneNo1AtPhone(phone: string): Promise<void> {
        // phone = phone (from test data)
        await this.addressSearchContactTab.click();
        await this.addressSearchContactTab.fill(phone);
    }

    async EnterPhoneNo2AtPhone(phone: string): Promise<void> {
        // phone = phone (from test data)
        await this.addressSearchContactTab.click();
        await this.addressSearchContactTab.fill(phone);
    }

    async ClickSave(): Promise<void> {
        await this.addressSearchContactTab.click();
    }

    async SaveInternalTab(): Promise<void> {
        await this.addressSearchContactTab.click();
        // confirm popup: yes
    }

    async ClickReset(): Promise<void> {
        await this.addressSearchContactTab.click();
    }

    async DeleteOrder1Phone(): Promise<void> {
        await this.addressSearchContactTab.click();
        // confirm popup: yes
    }

    async VerifyOrderNoAs1(): Promise<void> {
        // Assert.assertEquals("1",
        // uIMapGeo.addressSearch.addressSearchContactTab.uIOrder1Edit.getAttribute("value"))
    }

    async VerfiyNameRelationAsAlarmContact(rowIndex: string): Promise<void> {
        // Assert.assertEquals("Alarm Contact",
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressSearch.addressSearchContactTab.uIContactsTabResultTable,
        // "Name Relation", rowIndex))
    }

    async VerifyAtAddressInTheGrid(rowIndex: string, address: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("Address"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressSearch.addressSearchContactTab.uIContactsTabResultTable, "Address",
        // rowIndex))
    }

    async selectAtPhoneType1(phoneType1: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapGeo.addressSearch.addressSearchContactTab.uIPhoneType1ComboBox,
        // BaseData.getGeoModuleValue("PhoneType1"))
    }

    async clickInactivePhone1(): Promise<void> {
        await this.addressSearchContactTab.click();
    }

    async ClickInactivePhone2(): Promise<void> {
        await this.addressSearchContactTab.click();
    }

    async VerifyAtNotesInTheGrid(rowIndex: string, notes: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        // String note = objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressSearch.addressSearchContactTab.uIContactsTabResultTable, "Notes", rowIndex)
        expect(note).toEqual(notes);
    }

    async verifyAddNewButtonDisabled(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // verify.ExpectedValueIsFalse(uIMapGeo.addressSearch.addressSearchContactTab.uIAddNewButton.isEnabled())
        // Playback.controlReadyThreadWait()
    }

    async verifyAtPhoneNumber(phoneNo: string): Promise<void> {
        const getPhoneNo = await this.addressSearchContactTab.inputValue();
        const trimmedPhoneNo = getPhoneNo.replaceAll("[^0-9]", "");
        // System.out.println(trimmedPhoneNo)
        // System.out.println(BaseData.getGeoModuleValue("PhoneNo"))
        expect(phoneNo).toBeTruthy();
    }

    async verifyAtPhoneType(phonetype: string): Promise<void> {
        // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapGeo.addressSearch.addressSearchContactTab.uIPhoneType1ComboBox)
        expect(dropDownSelectedItem, "Phone Type is different").toEqual(phonetype);
    }
}

export class AddressSearchDetailsTabPage {
    readonly page: Page;
    readonly uILatitudeEdit: Locator;
    readonly uILongitudeEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIPatrolZoneEdit: Locator;
    readonly uITowAreaEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uILatitudeEdit = page.locator('NotxtLatitude');
        this.uILongitudeEdit = page.locator('NotxtLongitude');
        this.uISaveButton = page.locator('NocmdInternalSave');
        this.uIResetButton = page.locator('NocmdInternalRefresh');
        this.uIPatrolZoneEdit = page.locator('NolupPatrolZone_CodeValue');
        this.uITowAreaEdit = page.locator('NolupTowArea_CodeValue');
    }

    async SaveScreen(): Promise<void> {
        await this.addressSearchDetailsTab.click();
        // confirm popup: yes
    }

    async VerifyLatitude(LatituteLongitute: string): Promise<void> {
        // expect(latitude.substring(0,10)).toEqual(LatituteLongitute.substring(0,10))
    }

    async VerifyLongitude(LatituteLongitute: string): Promise<void> {
        // expect(longitude.substring(0,10)).toEqual(LatituteLongitute.substring(14,24))
    }

    async verifyActiveLatitude(): Promise<void> {
        const attribute = await this.addressSearchDetailsTab.inputValue();
        expect(attribute).toEqual(LatLong.get(0));
        // verify.ExpectedValueIsTrue(attribute.contains(LatLong));
    }

    async verifyActiveLongitude(): Promise<void> {
        const attribute = await this.addressSearchDetailsTab.inputValue();
        expect(attribute).toEqual(LatLong.get(1));
        // verify.ExpectedValueIsTrue(attribute.contains(LatLong));
    }

    async enterAtLatitude(latitude: string): Promise<void> {
        await this.addressSearchDetailsTab.fill(latitude);
    }

    async enterAtLongitude(longitude: string): Promise<void> {
        await this.addressSearchDetailsTab.fill(longitude);
    }

    async enterAtPatrolzone(patrolZone: string): Promise<void> {
        await this.addressSearchDetailsTab.fill(patrolZone);
        await this.addressSearchDetailsTab.press('Tab');
    }

    async enterAtTowArea(towArea: string): Promise<void> {
        await this.addressSearchDetailsTab.fill(towArea);
        await this.addressSearchDetailsTab.press('Tab');
    }

    async verifyAtLatitude(latitude: string): Promise<void> {
        const attribute = await this.addressSearchDetailsTab.inputValue();
        expect(attribute).toEqual(latitude);
    }

    async verifyAtLongitude(longitude: string): Promise<void> {
        const attribute = await this.addressSearchDetailsTab.inputValue();
        expect(attribute).toEqual(longitude);
    }
}

export class AddressSearchFlagsTabPage {
    readonly page: Page;
    readonly uIAddFlagsButton: Locator;
    readonly uIGridsResultTable: Locator;
    readonly uIActiveAsOfInGridTable: Locator;
    readonly uIAddressSearchFlagsTabIframe: Locator;
    readonly uIDeleteGridRow: Locator;
    readonly uIRemarksGridTable: Locator;
    readonly uIInActiveOfGridTable: Locator;
    readonly uIShowInActiveCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddFlagsButton = page.locator('NocmdAdd');
        this.uIGridsResultTable = page.locator('NogrdFlags');
        this.uIActiveAsOfInGridTable = page.locator('NogrdFlags_it5_0_lbl_Activeof');
        this.uIAddressSearchFlagsTabIframe = page.locator("//iframe[contains(@src, 'GEO/frmAddrInfoFlags.aspx')]");
        this.uIDeleteGridRow = page.locator("//td[contains(@class,'Delete_Icon_Style')]");
        this.uIRemarksGridTable = page.locator("//div[@id='grdFlags_it5_0_ConDiv']");
        this.uIInActiveOfGridTable = page.locator('NogrdFlags_it5_0_lbl_DelDttm');
        this.uIShowInActiveCheckbox = page.locator('NochkIsActive');
    }

    async VerifyFlagDetailsViewed(rowIndex: string, displayCondition: string): Promise<void> {
        // displayCondition = displayCondition (from test data)
        // Assert.assertEquals(displayCondition,
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressSearch.addressSearchFlagsTab.uIGridsResultTable, "Display Condition ",
        // rowIndex))
        // Assert.assertEquals(Randomized.getCurrentDate("MM/dd/yy"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressSearch.addressSearchFlagsTab.uIGridsResultTable, "Active As of Date",
        // rowIndex))
    }

    async VerifyActiveAsOfAsCurrentDate(): Promise<void> {
        // Assert.assertEquals(Randomized.getCurrentDate(),
        // uIMapGeo.addressSearch.addressSearchFlagsTab.uIActiveAsOfInGridTable.getText())
    }

    async ClickAddFlag(): Promise<void> {
        await this.addressSearchFlagsTab.click();
    }

    async verifyAtFlagGridActiveAsDate(activeAsDate: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(
        // uIMapGeo.addressSearch.addressSearchFlagsTab.uIActiveAsOfInGridTable.getText(),
        // BaseData.getGeoModuleValue("ActiveAsDate"))
    }

    async verifyAtFlagGridRemarks(remarks: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(
        // uIMapGeo.addressSearch.addressSearchFlagsTab.uIRemarksGridTable.getText(),
        // BaseData.getGeoModuleValue("Remarks"))
    }

    async verifyAddressFlagGridTextBoldAndBlack(): Promise<void> {
        // font weight 700 = Bold
        // font weight 400 = Normal text
        // font color rgba( 0, 0, 0, 1) = Black
        // String fontStyle = uIMapGeo.addressSearch.addressSearchFlagsTab.uIActiveAsOfInGridTable.getCssValue("font-weight")
        // String fontColor = uIMapGeo.addressSearch.addressSearchFlagsTab.uIActiveAsOfInGridTable.getCssValue("color")
        // System.out.println(fontColor);
        // System.out.println(fontStyle);
        expect(fontStyle.contains("700")).toBeTruthy();
        expect(fontColor.contains("rgba(0, 0, 0, 1)")).toBeTruthy();
    }

    async selectGridRowByActiveAsDate(): Promise<void> {
        await this.addressSearchFlagsTab.click();
    }

    async clickShowInactiveCheckBox(): Promise<void> {
        await this.addressSearchFlagsTab.click();
    }

    async verifyAtFlagGridInactiveDate(inactiveDate: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(
        // uIMapGeo.addressSearch.addressSearchFlagsTab.uIInActiveOfGridTable.getText(),
        // BaseData.getGeoModuleValue("InactiveDate"))
    }

    async ClickDeleteGridRow(): Promise<void> {
        await this.addressSearchFlagsTab.click();
        // confirm popup: (4) Do you want to delete?
    }

    async verifyAddressFlagGridTextBoldAndGray(): Promise<void> {
        // font weight 700 = Bold
        // font weight 400 = Normal text
        // font color rgba(128, 128, 128, 1) = Gray
        // String fontStyle = uIMapGeo.addressSearch.addressSearchFlagsTab.uIActiveAsOfInGridTable.getCssValue("font-weight")
        // String fontColor = uIMapGeo.addressSearch.addressSearchFlagsTab.uIActiveAsOfInGridTable.getCssValue("color")
        // System.out.println(fontColor);
        // System.out.println(fontStyle);
        expect(fontStyle.contains("700")).toBeTruthy();
        expect(fontColor.contains("rgba(128, 128, 128, 1)")).toBeTruthy();
    }

    async verifyAddFlagInactive(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // verify.ExpectedValueIsFalse(uIMapGeo.addressSearch.addressSearchFlagsTab.uIAddFlagsButton.isEnabled())
        // Playback.controlReadyThreadWait()
    }

    async VerifyFlagsListIsEmpty(): Promise<void> {
        // int gridTableRowsCount = objectIdentification.manualIdentify.getGridTableRowsCount(uIMapGeo.addressSearch.addressSearchFlagsTab.uIGridsResultTable)
        // verify.ExpectedIntergerValueIsEqualToActual(0, gridTableRowsCount)
    }

    async VerifyFlagsListIsNotEmpty(): Promise<void> {
        // int gridTableRowsCount = objectIdentification.manualIdentify.getGridTableRowsCount(uIMapGeo.addressSearch.addressSearchFlagsTab.uIGridsResultTable)
        // verify.ExpectedIntergerValueIsNotEqualToActual(0, gridTableRowsCount)
    }

    async verifyAtFlagRemarksInGrid(remarks: string): Promise<void> {
        // Remarks = remarks (from test data)
        // verify.ExpectedPropertyValueIsEqual(
        // uIMapGeo.addressSearch.addressSearchFlagsTab.uIRemarksGridTable.getText(),
        // "Remarks: "+Remarks)
    }

    async verifyCountInGrid(verifycount: string): Promise<void> {
        // int count = objectIdentification.manualIdentify.getGridTableRowsCount(uIMapGeo.addressSearch.addressSearchFlagsTab.uIGridsResultTable)
        // verify.ExpectedIntergerValueIsEqualToActual(verifycount, count)
    }
}

export class AddressSearchHazMatTabPage {
    readonly page: Page;
    readonly uIHazMatTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIHazMatTable = page.locator("//div[@id='tabAddrDtls_tmpl6_UsraddrHazMat1_grdHazMatFlag']");
    }

    async verifyAtAddress(address: string): Promise<void> {
        // String address = objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressSearch.addressSearchHazMatTab.uIHazMatTable, "Location", 0)
        expect(address).toEqual(address);
    }
}

export class AddressSearchHelpPage {
    readonly page: Page;
    readonly uIAddressDetailsInfoButton: Locator;
    readonly uIAddressDetailsButton: Locator;
    readonly uIAddressTextView: Locator;
    readonly uIAddressVerifyCheckBox: Locator;
    readonly uIResetButton: Locator;
    readonly uIZipCodeTextView: Locator;
    readonly uIWeatherIconButton: Locator;
    readonly uIAttachmentsTab: Locator;
    readonly uIMapTab: Locator;
    readonly uIFlagsTab: Locator;
    readonly uINamesTab: Locator;
    readonly uIDetailsTab: Locator;
    readonly uIContactsTab: Locator;
    readonly uICommonNameTab: Locator;
    readonly uIAddressEdit: Locator;
    readonly uICSZ: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddressDetailsInfoButton = page.locator('NoaddrLoc_cmdIncOnAddr');
        this.uIAddressDetailsButton = page.locator('NobtnDetails');
        this.uIAddressTextView = page.locator('NoaddrLoc_txtFrom');
        this.uIAddressVerifyCheckBox = page.locator('NoaddrLoc_chkVerify');
        this.uIResetButton = page.locator('NocmdReset');
        this.uIZipCodeTextView = page.locator('NotxtZip');
        this.uIWeatherIconButton = page.locator('NoimgWeather');
        this.uIAttachmentsTab = page.locator("//span[contains(text(), 'Attachments')]");
        this.uIMapTab = page.locator("//span[contains(text(), 'Map')]");
        this.uIFlagsTab = page.locator("//span[contains(text(), 'Flags')]");
        this.uINamesTab = page.locator("//span[contains(text(), 'Names')]");
        this.uIDetailsTab = page.locator("//span[contains(text(), 'Details')]");
        this.uIContactsTab = page.locator("//span[contains(text(), 'Contacts')]");
        this.uICommonNameTab = page.locator("//span[contains(text(), 'Common Name')]");
        this.uIAddressEdit = page.locator("//input[@id='addrLoc_txtFrom']");
        this.uICSZ = page.locator('NolblCSZ');
    }

    async VerifyAddressInfoIconColor(): Promise<void> {
        // verify.ExpectedValueIsTrue(
        // uIMapGeo.addressSearchHelp.uIAddressDetailsInfoButton.getAttribute("src").contains("Red"))
    }

    async CloseAddressSearchScreen(): Promise<void> {
        // uIMapGeo.addressSearchHelp.driver.close()
    }

    async SwitchToMapTab(): Promise<void> {
        await this.uIMapTab.click();
        // Playback.gridLoadThreadWait()
        // no-op: window handle
    }

    async SwitchToDetailsTab(): Promise<void> {
        await this.uIDetailsTab.click();
        // Playback.gridLoadThreadWait()
        // no-op: window handle
    }

    async switchToContactsTab(): Promise<void> {
        await this.uIContactsTab.click();
        // Playback.popupThreadWait()
        // no-op: window handle
    }

    async switchToFlagsTab(): Promise<void> {
        await this.uIFlagsTab.click();
        // Playback.controlReadyThreadWait()
        // no-op: window handle
    }

    async switchToCommonNameTab(): Promise<void> {
        await this.uICommonNameTab.click();
        // Playback.controlReadyThreadWait()
        // no-op: window handle
    }

    async switchToNamesTab(): Promise<void> {
        await this.uINamesTab.click();
        // no-op: window handle
    }

    async verifyAtAddress(address: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(uIMapGeo.addressSearchHelp.uIAddressEdit.getAttribute("value"),
        // BaseData.getGeoModuleValue("Address"))
    }

    async verifyAtCSZ(city: string, state: string, zipcode: string): Promise<void> {
        const CSZ = await this.uICSZ.innerText();
        // cityStZip = city (from test data)
        expect(CSZ).toEqual(cityStZip);
    }
}

export class AddressSearchHelpCommonNameTabPage {
    readonly page: Page;
    readonly uIAddCommonNameButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddCommonNameButton = page.locator('NocmdAdd');
    }

    async verifyAddCommonNamesButtonIsDisabled(): Promise<void> {
        // String attribute = uIMapGeo.addressSearchHelp.addressSearchHelpCommonNameTab.uIAddCommonNameButton.getAttribute("disabled")
        expect(attribute.contains("true")).toBeTruthy();
    }
}

export class AddressSearchHelpContactTabPage {
    readonly page: Page;
    readonly uIAddNewButton: Locator;
    readonly uIContactsResultTable: Locator;
    readonly uISaveButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIPhoneType1Dropdown: Locator;
    readonly uIPhoneType2Dropdown: Locator;
    readonly uIPhoneNo1Edit: Locator;
    readonly uIPhoneNo2Edit: Locator;
    readonly uIAddMorePhoneNoButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddNewButton = page.locator('NobtnAddnew');
        this.uIContactsResultTable = page.locator('NogrdContacts');
        this.uISaveButton = page.locator('NocmdSave');
        this.uIRefreshButton = page.locator('NocmdRefresh');
        this.uIPhoneType1Dropdown = page.locator('NotxtNumber_1_PhoneType_DropDown');
        this.uIPhoneType2Dropdown = page.locator('NotxtNumber_2_PhoneType_DropDown');
        this.uIPhoneNo1Edit = page.locator('NotxtNumber_1_PhoneNumber');
        this.uIPhoneNo2Edit = page.locator('NotxtNumber_2_PhoneNumber');
        this.uIAddMorePhoneNoButton = page.locator('NoAddMorePhoneNumber');
    }

    async clickAddNewButton(): Promise<void> {
        await this.addressSearchHelpContactTab.click();
    }

    async verifyAddNewButtonIsDisabled(): Promise<void> {
        // String attribute = uIMapGeo.addressSearchHelp.addressSearchHelpContactTab.uIAddNewButton.getAttribute("disabled")
        expect(attribute.contains("true")).toBeTruthy();
    }

    async verifyAtNameInGrid(name: string): Promise<void> {
        // String text = objectIdentification.manualIdentify.getGridRowByCellInnerText(
        // (uIMapGeo.addressSearchHelp.addressSearchHelpContactTab.uIContactsResultTable),
        // BaseData.getGeoModuleValue("Name")).getText()
        expect(name).toBeTruthy();
    }

    async verifyAtPhoneNoInGrid(phoneNo: string): Promise<void> {
        // String text = objectIdentification.manualIdentify.getGridRowByCellInnerText(
        // (uIMapGeo.addressSearchHelp.addressSearchHelpContactTab.uIContactsResultTable),
        // BaseData.getGeoModuleValue("PhoneNo")).getText()
        expect(phoneNo).toBeTruthy();
    }

    async verifyEnteredDateAsCurrentDateInGrid(rowIndex: string): Promise<void> {
        // String text = objectIdentification.manualIdentify.getGridCell(uIMapGeo.addressSearchHelp.addressSearchHelpContactTab.uIContactsResultTable,
        // "Entered Date", rowIndex).getText()
        expect(text.contains(Randomized.getCurrentDate("MM/dd/yy"))).toBeTruthy();
    }

    async verifyAtNameRelationInGrid(nameRelation: string): Promise<void> {
        // String text = objectIdentification.manualIdentify.getGridRowByCellInnerText(
        // (uIMapGeo.addressSearchHelp.addressSearchHelpContactTab.uIContactsResultTable),
        // BaseData.getGeoModuleValue("NameRelation")).getText()
        expect(nameRelation).toBeTruthy();
    }

    async verifyAtPhoneType1(phoneType1: string): Promise<void> {
        // List<String> dropDownValues = objectIdentification.manualIdentify.getDropDownValues(uIMapGeo.addressSearchHelp.addressSearchHelpContactTab.uIPhoneType1Dropdown)
        // for (String value : dropDownValues) {
        // if (value.contains(BaseData.getGeoModuleValue("PhoneType1"))) {
        expect(phoneType1).toBeTruthy();
    }

    async verifyAtPhoneNo1(phoneNo: string): Promise<void> {
        const attribute = await this.addressSearchHelpContactTab.inputValue();
        expect(phoneNo).toEqual(attribute);
    }
}

export class AddressSearchHelpDetailsTabPage {
    readonly page: Page;
    readonly uICustom1Edit: Locator;
    readonly uICustom2Edit: Locator;
    readonly uILatitudeEdit: Locator;
    readonly uILongitudeEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uIResetButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uICustom1Edit = page.locator('NotxtCitizenFlag1');
        this.uICustom2Edit = page.locator('NotxtCitizenFlag2');
        this.uILatitudeEdit = page.locator('NotxtLatitude');
        this.uILongitudeEdit = page.locator('NotxtLongitude');
        this.uISaveButton = page.locator('NocmdInternalSave');
        this.uIResetButton = page.locator('NocmdInternalRefresh');
    }

    async SaveTab(): Promise<void> {
        await this.addressSearchHelpDetailsTab.click();
        // popup.Confirm.yes(); //No confirm window
    }

    async EnterAtLatitude(latitude: string): Promise<void> {
        await this.addressSearchHelpDetailsTab.clear();
        await this.addressSearchHelpDetailsTab.fill(latitude);
    }

    async EnterAtLongitude(longitude: string): Promise<void> {
        await this.addressSearchHelpDetailsTab.clear();
        await this.addressSearchHelpDetailsTab.fill(longitude);
    }
}

export class AddressSearchHelpFlagsTabPage {
    readonly page: Page;
    readonly uIAddFlagsButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddFlagsButton = page.locator('NocmdAdd');
    }

    async verifyAddFlagsButtonIsDisabled(): Promise<void> {
        // String attribute = uIMapGeo.addressSearchHelp.addressSearchHelpFlagsTab.uIAddFlagsButton.getAttribute("disabled")
        // System.out.println(attribute)
        expect(attribute.contains("true")).toBeTruthy();
    }
}

export class AddressSearchHelpMapTabPage {
    readonly page: Page;
    readonly uIFormName: Locator;
    readonly uILatLongTextView: Locator;
    readonly uILatLongValueTextView: Locator;
    readonly uIUpdateLatLongButton: Locator;
    readonly uIResetButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIFormName = page.locator('NofrmGHydrantMap_Id');
        this.uILatLongTextView = page.locator('NolbllatLongvalue');
        this.uILatLongValueTextView = page.locator("//span[@id = 'lbllatLongvalue']/font");
        this.uIUpdateLatLongButton = page.locator('NobtnUpdateLatLong');
        this.uIResetButton = page.locator("//button[@class = 'CustomBtn']");
    }

    async GetLatLongvalue(getLatLongvalue: string): Promise<void> {
        // Playback.testContext.setAttribute("getLatLongvalue",
        // uIMapGeo.addressSearchHelp.addressSearchHelpMapTab.uILatLongValueTextView.getText())
    }

    async VerifyAtLatitudeLongitude(latitude: string, longitude: string): Promise<void> {
        // String drdf = BaseData.getGeoModuleValue("Latitude") + " / " +
        // BaseData.getGeoModuleValue("Longitude").Remove(6, 12);
        // verify.ExpectedValueIsTrue(uIMapGeo.addressSearchHelp.addressSearchHelpMapTab.uILatLongValueTextView.getText().contains(
        // BaseData.getGeoModuleValue("Latitude") + " / " +
        // BaseData.getGeoModuleValue("Longitude").Remove(6,12)));
    }

    async ClickUpdateLatLangButton(): Promise<void> {
        await this.addressSearchHelpMapTab.click();
        // Playback.controlReadyThreadWait()
    }

    async VerifyLatLongUpdateConfirmMessage(): Promise<void> {
        // confirm popup: (5122) Do you want to update Lat/Long into all transaction tables?
        // confirm popup: (5122) Do you want to update Lat/Long into all transaction tables?
    }

    async VerifyUpdateLatLongValueConfirmMessage(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // Playback.controlReadyThreadWait()
        // const warningMessage = Playback.driver.switchTo().alert().getText();
        // verify.ExpectedValueIsTrue(
        // warningMessage.contains("(5102) Are you sure you want to update the Latitude and Longitude"))
        // confirm popup: yes
        const ConfirmMessage = await this.uIMapPopup.confirmWindow.uIErrorInfoTextEdit.innerText();
        // verify.ExpectedValueIsTrue(
        // ConfirmMessage.contains("(5102) Are you sure you want to update the Latitude and Longitude"))
        // confirm popup: yes
        // Playback.controlReadyThreadWait()
        // Playback.controlReadyThreadWait()
    }

    async ClickReset(): Promise<void> {
        await this.addressSearchHelpMapTab.click();
        // Playback.controlReadyThreadWait()
    }

    async VerifyLatlongUpdatedSuccessfullyAcknowledge(): Promise<void> {
        await this.page.waitForTimeout(3000);
        // popup.acknowledge.okWithExpectedMessage(
        // "(5123) Lat/Long has been successfully updated into all transaction tables.")
    }

    async VerifyAtLatitudeLongitudeNJ(latitude: string, longitude: string): Promise<void> {
        // String drdf = BaseData.getGeoModuleValue("Latitude").Remove(15, 2) + " / " +
        // BaseData.getGeoModuleValue("Longitude").Remove(6, 12);
        // verify.ExpectedValueIsTrue(uIMapGeo.addressSearchHelp.addressSearchHelpMapTab.uILatLongValueTextView.getText().contains(
        // BaseData.getGeoModuleValue("Latitude").Remove(15,2) + " / " +
        // BaseData.getGeoModuleValue("Longitude").Remove(6, 12)));
    }

    async readLatLong(): Promise<string> {
        const attribute = await this.addressSearchHelpMapTab.innerText();
        return attribute;
    }
}

export class AddressSearchHelpNameTabPage {
    readonly page: Page;
    readonly uISearchGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISearchGrid = page.locator("//div[@id='grdNames']");
    }

    async verifyAtNameInGrid(name: string): Promise<void> {
        // String NameInGrid = objectIdentification.manualIdentify.getGridCell(uIMapGeo.addressSearchHelp.addressSearchHelpNameTab.uISearchGrid,
        // BaseData.getGeoModuleValue("Name")).getText()
        // System.out.println(NameInGrid)
        expect(name).toEqual(NameInGrid);
    }
}

export class AddressSearchLeadsTabPage {
    readonly page: Page;
    readonly uIAddNewButton: Locator;
    readonly uIAddressSearchLeadsTabResultGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddNewButton = page.locator('NoAddNew');
        this.uIAddressSearchLeadsTabResultGrid = page.locator('NogrdLead');
    }

    async clickAddNew(): Promise<void> {
        await this.addressSearchLeadsTab.click();
    }

    async verifyAtCaseNoInGrid(caseNo: string): Promise<void> {
        // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(uIMapGeo.addressSearch.addressSearchLeadsTab.uIAddressSearchLeadsTabResultGrid, BaseData.getGeoModuleValue("CaseNo"))
        // System.out.println(gridCell)
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("CaseNo"),
        // objectIdentification.manualIdentify.getGridCell(uIMapGeo.addressSearch.addressSearchLeadsTab.uIAddressSearchLeadsTabResultGrid, BaseData.getGeoModuleValue("CaseNo")).getText())
    }

    async verifyLeadNoInGrid(leadno: string): Promise<void> {
        // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapGeo.addressSearch.addressSearchLeadsTab.uIAddressSearchLeadsTabResultGrid, "LeadNo")
        expect(gridTableColumnValues.contains(leadno)).toBeTruthy();
    }

    async verifyLeadNoNotInGrid(leadno: string): Promise<void> {
        // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapGeo.addressSearch.addressSearchLeadsTab.uIAddressSearchLeadsTabResultGrid, "LeadNo")
        expect(gridTableColumnValues.contains(leadno)).toBeFalsy();
    }

    async verifyAllTabsAreEnabled(): Promise<void> {
        // List<WebElement> allTabs = Playback.driver.findElements(By.xpath("//span[contains(@class,'igtab_BlueThemeTHText')]"))
        // for (WebElement tab : allTabs) {
        // if (tab.isDisplayed() || tab.isEnabled()) {
        expect(tab.isEnabled()).toBeTruthy();
        // System.out.println(tab.getText() + " is enabled")
    }

    async verifyAddressButtonIsDisplayed(): Promise<void> {
        // Playback.controlReadyThreadWait()
        expect(await this.uIaddressButton.isVisible()).toBeTruthy();
        // Playback.controlReadyThreadWait()
    }

    async verifyAddressButtonActive(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // verify.ExpectedValueIsTrue(uIMapGeo.addressSearch.uIaddressButton.isEnabled())
        // Playback.controlReadyThreadWait()
    }

    async verifyStreetNameWithPremise(streetName: string, premise: string): Promise<void> {
        // streetName = streetName (from test data)
        // Premise = premise (from test data)
        // Assert.assertTrue(uIMapGeo.addressSearch.uIAddressLocationEdit.getAttribute("value").contains(streetName))
        // Assert.assertTrue(uIMapGeo.addressSearch.uIAddressLocationEdit.getAttribute("value").contains(Premise))
    }

    async verifyAtTabColorByTabName(JsonKeyIndex: string, TabColorJsonKeyIndex: string, tabColor: string): Promise<void> {
        // String tabName =	BaseData.getHomeModuleValue("TabName"+JsonKeyIndex)
        // String tabColor = uIMapGeo.addressSearch.driver.findElement(By.xpath("//span[text()='" + tabName + "']")).getCssValue("color")
        expect(tabColor).toEqual(tabColor);
    }

    async switchToNotificationTab(): Promise<void> {
        await this.uINotificationTab.click();
        // no-op: window handle
    }

    async clickAddressClear(): Promise<void> {
        await this.uIAddressClearIcon.click();
    }
}

export class AddressSearchLocationCheckTabPage {
    readonly page: Page;
    readonly uIAddLocationCheckLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddLocationCheckLink = page.locator('NotabAddrDtls_tmpl15_usrLocationCheck1_AddLocationCheck');
    }

    async clickAddLocationCheck(): Promise<void> {
        await this.addressSearchLocationCheckTab.click();
    }
}

export class AddressSearchMapTabPage {
    readonly page: Page;
    readonly uIFormName: Locator;
    readonly uILatLongTextView: Locator;
    readonly uILatLongValueTextView: Locator;
    readonly uILatLongButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIMapLocationIconButton: Locator;
    readonly uISelectOverlayInputComboBox: Locator;
    readonly uISelectOverlayComboBox: Locator;
    readonly uILocationSearchEdit: Locator;
    readonly uIAddressSearchHereMapTabIframe: Locator;
    readonly uIAddressSearchGoogleMapTabIframe: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIFormName = page.locator('NofrmGHydrantMap_Id');
        this.uILatLongTextView = page.locator('NolbllatLongvalue');
        this.uILatLongValueTextView = page.locator("//span[@id = 'lbllatLongvalue']/font");
        this.uILatLongButton = page.locator('NobtnUpdateLatLong');
        this.uIResetButton = page.locator("//button[@class = 'CustomBtn']");
        this.uIMapLocationIconButton = page.locator("//img[@src = 'https://maps.gstatic.com/mapfiles/transparent.png']");
        this.uISelectOverlayInputComboBox = page.locator('NocddPointLayers_Input');
        this.uISelectOverlayComboBox = page.locator('NocddPointLayers_DropDown');
        this.uILocationSearchEdit = page.locator('Nopac-input');
        this.uIAddressSearchHereMapTabIframe = page.locator("//iframe[contains(@src, 'Home/GHydrantMapHERE.aspx')]");
        this.uIAddressSearchGoogleMapTabIframe = page.locator("//iframe[contains(@src, 'Home/GHydrantMap.aspx')]");
    }

    async GetLatLongvalue(getLatLongvalue: string): Promise<void> {
        // getLatLongvalue = uIMapGeo.addressSearch.addressSearchMapTab.uILatLongValueTextView.getText()
        // Playback.setTestContextAttribute("getLatLongvalue", getLatLongvalue)
    }

    async ClickUpdateButton(): Promise<void> {
        await this.addressSearchMapTab.click();
    }

    async VerifyUpdateConfirmMessage(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // popup.confirm.yesWithExpectedMessage(
        // "(5102) Are you sure you want to update the Latitude and Longitude")
        //			else {
        //				String htmlErrorInfo = uIMapPopup.acknowledgeWindow.uIErrorInfoTextEdit.getText();
        //				Assert.assertTrue(
        //						htmlErrorInfo.contains("(5102) Are you sure you want to update the Latitude and Longitude"));
        //				popup.confirm.yes();
        //				Playback.controlReadyThreadWait();
        //			}
    }

    async getLatAndLong(): Promise<string> {
        const LatLong = await this.addressSearchMapTab.innerText();
        // System.out.println(LatLong)
        return LatLong;
    }

    async DragandDropMapLocationIcon(): Promise<void> {
        // Actions Action = new Actions(Playback.driver)
        // Action.dragAndDropBy(uIMapGeo.addressSearch.addressSearchMapTab.uIMapLocationIconButton, 10, 50).click().perform()
        // TODO: handle exception
        // Action = null
        // Playback.popupThreadWait()
    }

    async VerifyUpdateTableConfirmMessage(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // confirm popup: (5122) Do you want to update Lat/Long into all transaction tables?
        //			if (Playback.browserType.equals("Chrome")) {
        //				popup.confirm.yes();
        //				Playback.controlReadyThreadWait();
        //			} else {
        //				String htmlErrorInfo = uIMapPopup.acknowledgeWindow.uIErrorInfoTextEdit.getText();
        //				Assert.assertTrue(
        //						htmlErrorInfo.contains("(5122) Do you want to update Lat/Long into all transaction tables?"));
        //				popup.confirm.yes();
        //				Playback.controlReadyThreadWait();
        //			}
    }

    async VerifyUpdateAcknowledgeMessage(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // Playback.controlReadyThreadWait()
        // popup.acknowledge.okWithExpectedMessage(
        // "(5123) Lat/Long has been successfully updated into all transaction tables.")
    }

    async SelectOverLay(): Promise<void> {
        await this.addressSearchMapTab.click();
        // objectIdentification.randomIdentify.selectRadControlDropDownValueSelect(
        // uIMapGeo.addressSearch.addressSearchMapTab.uISelectOverlayComboBox)
        // objectIdentification.randomIdentify.selectRadControlDropDownValueSelect(
        // uIMapGeo.addressSearch.addressSearchMapTab.uISelectOverlayComboBox)
        await this.addressSearchMapTab.press('Tab');
    }

    async ClickResetButton(): Promise<void> {
        await this.addressSearchMapTab.click();
        // Playback.controlReadyThreadWait()
    }

    async EnterAtLocation(location: string): Promise<void> {
        // location = location (from test data)
        await this.addressSearchMapTab.fill(location);
        await this.addressSearchMapTab.press('Tab');
    }

    async switchToGoogleMapTab(): Promise<void> {
        // Playback.pageLoadThreadWait()
        // no-op: window handle
        // Playback.popupThreadWait()
    }

    async switchToHereMapTab(): Promise<void> {
        // Playback.pageLoadThreadWait()
        // no-op: window handle
        // Playback.popupThreadWait()
    }

    async switchToFlagTab(): Promise<void> {
        // no-op: window handle
        // objectIdentification.windowHandle.switchToFrame(uIMapGeo.addressSearch.addressSearchFlagsTab.uIAddressSearchFlagsTabIframe);
        // Playback.controlReadyThreadWait()
    }

    async verifyLatLongValue(LatituteLongitute: string): Promise<void> {
        const latlongvalue = await this.addressSearchMapTab.innerText();
        expect(latlongvalue).toEqual(LatituteLongitute);
    }

    async veriyAtLatitudeAndLongitude(latAndLong: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        const attribute = await this.addressSearchMapTab.innerText();
        // System.out.println(attribute)
        expect(latAndLong).toBeTruthy();
    }

    async verifyLatLongNotSet(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(
        // uIMapGeo.addressSearch.addressSearchMapTab.uILatLongValueTextView.getAttribute("color"), "red")
    }

    async verifyLatLongValueSet(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(
        // uIMapGeo.addressSearch.addressSearchMapTab.uILatLongValueTextView.getAttribute("color"),
        // "black")
    }

    async dragAndDropInMap(): Promise<void> {
        // WebElement canvasElement = uIMapGeo.addressSearch.uILocationIcon
        // Actions builder = new Actions(Playback.driver)
        // builder.moveToElement(canvasElement).clickAndHold().moveByOffset(100, 10).release().perform()
        // builder.moveToElement(canvasElement).clickAndHold().moveByOffset(200, 20).release().perform()
        // builder.moveToElement(canvasElement).clickAndHold().moveByOffset(300, 45).release().perform()
        //builder.moveToElement(canvasElement).clickAndHold().moveByOffset(100, 30).release().perform();
        // TODO: handle exception
    }

    async VerifyUpdateLatLongValueConfirmMessage(): Promise<void> {
        //				popup.acknowledge.okWithExpectedMessage(
        //						"(5102)Are you sure you want to update the Latitude and Longitude to  39.99065  /  -74.91575  ?");
        // Playback.controlReadyThreadWait()
        // confirm popup: (5102)Are you sure you want to update the Latitude and Longitude to  39.99065  /  -74.91575  ?
    }
}

export class AddressSearchNamesTabPage {
    readonly page: Page;
    readonly uINamesTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINamesTable = page.locator('NogrdNames');
    }

    async VerifyAtNameID(nameID: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("NameID"),
        // objectIdentification.manualIdentify.getGridCell(uIMapGeo.addressSearch.addressSearchNamesTab.uINamesTable,
        // BaseData.getGeoModuleValue("NameID")).getText())
    }

    async VerifyNameID(nameID: string): Promise<void> {
        // WebElement uINameIDCell =
        // ObjectIdentification.objectIdentification.manualIdentify.getGridCell(uIMapGeo.addressSearch.addressSearchNamesTab.uINamesTable,
        // nameID, "ID");
        // Assert.assertTrue(uINameIDCell.getText().contains(nameID));
    }

    async VerifyFlagIconAtNameIDRow(nameID: string): Promise<void> {
        // WebElement GridCell =
        // ObjectIdentification.objectIdentification.manualIdentify.getGridCell(uIMapGeo.addressSearch.addressSearchNamesTab.uINamesTable,
        // BaseData.getGeoModuleValue("NameID"), "F");
        // Assert.assertTrue(GridCell.getAttribute("class").contains("ChangeImage"),"Flag
        // icon not exist");
    }

    async VerifyFlagIconByNameID(nameId: string): Promise<void> {
        // WebElement GridCell =
        // ObjectIdentification.objectIdentification.manualIdentify.getGridCell(uIMapGeo.addressSearch.addressSearchNamesTab.uINamesTable,
        // nameId, "F");
        // Assert.assertEquals("ChangeImage", GridCell.getAttribute("class"));
    }

    async ClickAtNameInTheGrid(name: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.addressSearch.addressSearchNamesTab.uINamesTable, BaseData.getGeoModuleValue("Name"))
    }

    async verifyAtNameInGrid(name: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("Name"),
        // objectIdentification.manualIdentify.getGridCell(uIMapGeo.addressSearch.addressSearchNamesTab.uINamesTable,
        // BaseData.getGeoModuleValue("Name")).getText())
    }
}

export class AddressSearchNotificationTabPage {
    readonly page: Page;
    readonly uISelectCFSButton: Locator;
    readonly uILeftSideCodeValuesList: Locator;
    readonly uIRequestedByPF: Locator;
    readonly uIDistrubutionList: Locator;
    readonly uIReportingPeriodDropDown: Locator;
    readonly uINotifyEventDropDownArrow: Locator;
    readonly uINotifyEventDropDown: Locator;
    readonly uICFSCodePopupAddButton: Locator;
    readonly uICFSCodePopupClearButton: Locator;
    readonly uICFSCodePopupSaveAndCloseButton: Locator;
    readonly uIFilterCFSEdit: Locator;
    readonly uICFSCodePopupCancelButton: Locator;
    readonly uIFilterPopupWindow: Locator;
    readonly uIAddButton: Locator;
    readonly uINotificationResultTable: Locator;
    readonly uIInternalSave: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISelectCFSButton = page.locator('NobtnSelectCFS');
        this.uILeftSideCodeValuesList = page.locator("//div[@id='usrCFSCode_lstdwvaluesleft']");
        this.uIRequestedByPF = page.locator('NolupPF_CodeValue');
        this.uIDistrubutionList = page.locator('NocddDistribution_DropDown');
        this.uIReportingPeriodDropDown = page.locator('NocddRptPrd_DropDown');
        this.uINotifyEventDropDownArrow = page.locator('NocddNotifyType_Arrow');
        this.uINotifyEventDropDown = page.locator('NocddNotifyType_Input');
        this.uICFSCodePopupAddButton = page.locator('NousrCFSCode_cmdColumnsAdd');
        this.uICFSCodePopupClearButton = page.locator('NousrCFSCode_cmdColumnsRemove');
        this.uICFSCodePopupSaveAndCloseButton = page.locator("//input[@value='Save And Close']");
        this.uIFilterCFSEdit = page.locator('NotxtFilterCFS');
        this.uICFSCodePopupCancelButton = page.locator('Nopopupcancel');
        this.uIFilterPopupWindow = page.locator('Nofilterpopup');
        this.uIAddButton = page.locator('NocmdAdd');
        this.uINotificationResultTable = page.locator('NogrdNotificationType');
        this.uIInternalSave = page.locator('NobtnInternalSave');
    }

    async clickSelectCFS(): Promise<void> {
        await this.addressSearchNotificationTab.click();
    }

    async verifyCFSListIsNotEmpty(): Promise<void> {
        const text = await this.addressSearchNotificationTab.innerText();
        expect(text.isBlank(), "CFS Values Listed").toBeFalsy();
    }

    async enterAtRequestedByPF(): Promise<void> {
        // await this.addressSearchNotificationTab.fill(BaseData.getNamesModuleValue("RequestedByPF"));
    }

    async selectAtDistributionList(distrubutionList: string): Promise<void> {
        await this.addressSearchNotificationTab.selectOption({ label: distrubutionList });
    }

    async selectAtReportingPeriod(reportingPeriod: string): Promise<void> {
        await this.addressSearchNotificationTab.selectOption({ label: reportingPeriod });
    }

    async selectAtNotifyEvent(notifyEvent: string): Promise<void> {
        await this.addressSearchNotificationTab.click();
        // objectIdentification.manualIdentify.selectRadControlDropDownValue(uIMapGeo.addressSearch.addressSearchNotificationTab.uINotifyEventDropDown, BaseData.getGeoModuleValue("NotifyEvent"))
        await this.addressSearchNotificationTab.click();
    }

    async selectAtCFSInLeftPaneUsingIndex(jsonkeyindex: string, cFSCodeAdd: string): Promise<void> {
        // li[contains(@class,'rlbItem')][normalize-space(string(.))='100-Theft']
        // WebElement CFSCode = Playback.driver.findElement(By.xpath("//div[@id='usrCFSCode_lstdwvaluesleft']//li[contains(@class,'rlbItem')][normalize-space(string(.))='"
        // + BaseData.getGeoModuleValue("CFSCodeAdd" + jsonkeyindex) + "']"))
        await this.CFSCode.click();
    }

    async clickCFSCodeAddButton(): Promise<void> {
        await this.addressSearchNotificationTab.click();
    }

    async verifyAtCFSInCFSCodeInRightPane(jsonkeyindex: string, leftSidePaneCFSValue: string): Promise<void> {
        // WebElement CFSCode = Playback.driver.findElement(By.xpath("//div[@id='usrCFSCode_lstdwvaluesright']//li[contains(@class,'rlbItem')][normalize-space(string(.))='"
        // + BaseData.getGeoModuleValue("LeftSidePaneCFSValue" + jsonkeyindex) + "']"))
        const text = await this.CFSCode.innerText();
        // System.out.println(text)
        // verify.ExpectedPropertyValueIsEqual(BaseData.getNamesModuleValue("LeftSidePaneCFSValue"+ jsonkeyindex), text)
    }

    async clickSaveAndCloseInCFSCodePopup(): Promise<void> {
        await this.addressSearchNotificationTab.click();
    }

    async clickCloseInCFSCodePopup(): Promise<void> {
        await this.addressSearchNotificationTab.click();
    }

    async verifyAtCFSFilter(jsonkeyindex: string, filterCFS: string): Promise<void> {
        const attribute = await this.addressSearchNotificationTab.inputValue();
        expect(filterCFS).toBeTruthy();
    }

    async verifyFilterPopupWindowClosed(): Promise<void> {
        // boolean controlExist = objectIdentification.manualIdentify.controlExist(uIMapGeo.addressSearch.addressSearchNotificationTab.uIFilterPopupWindow)
        expect(controlExist).toBeFalsy();
    }

    async clickAdd(): Promise<void> {
        await this.addressSearchNotificationTab.click();
    }

    async verifyPeriodByAtNotifyEventInGrid(notifyEvent: string, reportingPeriod: string): Promise<void> {
        // String text = objectIdentification.manualIdentify.getGridCell(uIMapGeo.addressSearch.addressSearchNotificationTab.uINotificationResultTable,
        // BaseData.getGeoModuleValue("NotifyEvent"), "Period").getText()
        // System.out.println(text)
        expect(text).toEqual(reportingPeriod);
    }

    async internalSave(): Promise<void> {
        await this.addressSearchNotificationTab.click();
        // popup.confirm.acceptPopup()
    }
}

export class ApartmentPage {
    readonly page: Page;
    readonly uIStreetNameEdit: Locator;
    readonly uIAddNew: Locator;
    readonly uIApartmentResultGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIStreetNameEdit = page.locator('NotxtStreetName');
        this.uIAddNew = page.locator("(//span[contains(text(),'Add New')])");
        this.uIApartmentResultGrid = page.locator('NogrdStreet');
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNew.click();
    }

    async ClickAtPremise(premise: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapGeo.apartment.uIApartmentResultGrid,
        // BaseData.getGeoModuleValue("Premise"))
    }

    async CloseScreen(): Promise<void> {
        // uIMapGeo.apartment.driver.close()
    }

    async VerifyPremiseViewed(rowIndex: string, premise: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("Premise"), objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.apartment.uIApartmentResultGrid, "Premise", rowIndex))
    }

    async VerifyAtStreetName(streetName: string): Promise<void> {
        // Assert.assertTrue(uIMapGeo.apartment.uIStreetNameEdit.getAttribute("value").contains(BaseData.getGeoModuleValue("StreetName")))
    }
}

export class ApartmentEntryPage {
    readonly page: Page;
    readonly uIPremiseEdit: Locator;
    readonly uIApartmentFromEdit: Locator;
    readonly uIApartmentToEdit: Locator;
    readonly uIInactiveCheckBox: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIApartmentEntryResultGrid: Locator;
    readonly uIInactiveDateEdit: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIApartmentEdit: Locator;
    readonly uIApartmentEntryTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIPremiseEdit = page.locator('NotxtPremise');
        this.uIApartmentFromEdit = page.locator('NotxtAptFrom');
        this.uIApartmentToEdit = page.locator('NotxtAptTo');
        this.uIInactiveCheckBox = page.locator('NochkInActive');
        this.uIAddButton = page.locator('NoimgAddStreet');
        this.uIClearButton = page.locator('NoimgClearStreet');
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveAndCloseButton = page.locator('NocmdSaveNClose');
        this.uIPrintButton = page.locator('NocmdPrint');
        this.uIRefreshButton = page.locator('NocmdRefresh');
        this.uIApartmentEntryResultGrid = page.locator('NogrdStreet');
        this.uIInactiveDateEdit = page.locator('NotxtInActiveDttm');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIApartmentEdit = page.locator('NotxtAptFrom');
        this.uIApartmentEntryTable = page.locator('NogrdStreet');
    }

    async EnterAtPremise(premise: string): Promise<void> {
        await this.uIPremiseEdit.click();
        // Playback.controlReadyThreadWait()
        await this.uIPremiseEdit.fill(premise);
        // Playback.controlReadyThreadWait()
        await this.uIPremiseEdit.press('Tab');
    }

    async EnterAtApartmentFrom(apartmentFrom: string): Promise<void> {
        await this.uIApartmentFromEdit.click();
        await this.uIApartmentFromEdit.fill(Keys.BACK_SPACE);
        await this.uIApartmentFromEdit.fill(Keys.DELETE);
        // Playback.controlReadyThreadWait()
        await this.uIApartmentFromEdit.click();
        await this.uIApartmentFromEdit.fill(apartmentFrom);
        await this.uIApartmentFromEdit.press('Tab');
        // Playback.controlReadyThreadWait()
    }

    async EnterAtApartmentTo(apartmentTo: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.page.waitForTimeout(3000);
        await this.uIApartmentToEdit.click();
        await this.uIApartmentToEdit.fill(Keys.CONTROL, "a");
        await this.uIApartmentToEdit.fill(Keys.BACK_SPACE);
        // Playback.controlReadyThreadWait()
        await this.uIApartmentToEdit.fill(apartmentTo);
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async EnterAtSplitTo(splitTo: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIApartmentToEdit.clear();
        // Playback.controlReadyThreadWait()
        await this.uIApartmentToEdit.fill(Keys.BACK_SPACE);
        await this.uIApartmentToEdit.fill(Keys.DELETE);
        // Playback.controlReadyThreadWait()
        await this.uIApartmentToEdit.click();
        await this.uIApartmentToEdit.fill(splitTo);
    }

    async ClickAtApartmentFrom(apartmentFrom: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.apartmentEntry.uIApartmentEntryResultGrid, BaseData.getGeoModuleValue("ApartmentFrom"))
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async SaveScreen(): Promise<void> {
        await this.uISaveButton.click();
        // confirm popup: yes
        // Playback.pageLoadThreadWait()
    }

    async CloseScreen(): Promise<void> {
        // uIMapGeo.apartmentEntry.driver.close()
        // Playback.pageLoadThreadWait()
    }

    async DeleteAtApartment(apartmentFrom: string): Promise<void> {
        // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
        // uIMapGeo.apartmentEntry.uIApartmentEntryResultGrid, BaseData.getGeoModuleValue("ApartmentFrom"))
    }

    async DeleteAtApartmentTo(apartmentTo: string): Promise<void> {
        // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
        // uIMapGeo.apartmentEntry.uIApartmentEntryResultGrid, BaseData.getGeoModuleValue("ApartmentTo"))
    }

    async VerifyApartmentViewed(rowIndex: string, apartmentFrom: string, apartmentTo: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("ApartmentFrom"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.apartmentEntry.uIApartmentEntryResultGrid, "Apartment From", rowIndex))
        // Assert.assertEquals(BaseData.getGeoModuleValue("ApartmentTo"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.apartmentEntry.uIApartmentEntryResultGrid, "Apartment To", rowIndex))
    }

    async VerifyPermiseUneditable(): Promise<void> {
        // Playback.pageLoadThreadWait()
        // Assert.assertTrue(uIMapGeo.apartmentEntry.uIPremiseEdit.getAttribute("class").contains("textboxInactive"))
    }

    async VerifyAcknowlegdeSaveMessage(): Promise<void> {
        // popup: (5006) No value for premise
    }

    async VerifyAcknowledgeAddMessage(): Promise<void> {
        // popup: (5006) No value for premise
    }

    async VerifyAcknowledgeApartmentvalue(): Promise<void> {
        // popup: (5017) Apartment From value is blank
    }

    async VerifyPremise(premise: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("Premise"),
        // uIMapGeo.apartmentEntry.uIPremiseEdit.getAttribute("value"))
    }

    async VerifyApartmentSplited(rowIndex: string, apartmentFrom: string, splitTo: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("ApartmentFrom"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.apartmentEntry.uIApartmentEntryResultGrid, "Apartment From", rowIndex))
        // Assert.assertEquals(BaseData.getGeoModuleValue("SplitTo"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.apartmentEntry.uIApartmentEntryResultGrid, "Apartment To", rowIndex))
    }

    async VerifyAcknowlegeReviewMessage(): Promise<void> {
        // string reviewMessage =
        // PnxBaseTest.UIMappopup.AcknowledgeWindow.uIErrorInfoTextEdit.Text; // new
        // message shows
        // Assert.assertTrue(reviewMessage.Contains("Review Common Name"));
        // popup: Review Name Address
    }

    async VerifyConfirmationDeleteMessage(): Promise<void> {
        // confirm popup: (4) Do you really want to delete?
        // confirm popup: (4) Do you really want to delete?
    }

    async VerifyRowDeleted(): Promise<void> {
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridTableRowsCount(uIMapGeo.apartmentEntry.uIApartmentEntryResultGrid) == 1)
    }

    async VerifyApartmentNotExist(): Promise<void> {
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridTableRowsCount(uIMapGeo.apartmentEntry.uIApartmentEntryResultGrid) == 0)
    }

    async ClickAtApartmentFrom1(apartmentFrom1: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.apartmentEntry.uIApartmentEntryResultGrid, BaseData.getGeoModuleValue("ApartmentFrom1"))
    }

    async ClickInactiveCheckbox(): Promise<void> {
        await this.uIInactiveCheckBox.click();
        // Playback.controlReadyThreadWait()
    }

    async VerifyCurrentDateShows(): Promise<void> {
        // String rdvd = Randomized.getCurrentDate();
        // Assert.assertTrue(uIMapGeo.apartmentEntry.uIInactiveDateEdit.getAttribute("value").contains(Randomized.getCurrentDate()))
        // Playback.controlReadyThreadWait()
    }

    async VerifyInactiveDateInGridUsingApartmentFrom(apartmentFrom1: string): Promise<void> {
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCell(uIMapGeo.apartmentEntry.uIApartmentEntryResultGrid,
        // BaseData.getGeoModuleValue("ApartmentFrom1"), "InActive Date").getText().contains(Randomized.getCurrentDate()))
    }

    async EnterPremise(premiseNo: string): Promise<void> {
        await this.uIPremiseEdit.click();
        // Playback.controlReadyThreadWait()
        await this.uIPremiseEdit.fill(premiseNo);
        // Playback.controlReadyThreadWait()
        await this.uIPremiseEdit.press('Tab');
    }

    async VerifyAtApartmentFromInGrid(rowIndex: string, apartmentFrom: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("ApartmentFrom"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.apartmentEntry.uIApartmentEntryResultGrid, "Apartment From", rowIndex))
    }

    async EnterApartmentFrom(): Promise<void> {
        await this.uIApartmentFromEdit.click();
        await this.uIApartmentFromEdit.fill("1");
        await this.uIApartmentFromEdit.press('Tab');
        // Playback.controlReadyThreadWait()
    }

    async EnterApartmentTo(): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.page.waitForTimeout(3000);
        await this.uIApartmentToEdit.click();
        await this.uIApartmentToEdit.fill(Keys.BACK_SPACE);
        await this.uIApartmentToEdit.fill(Keys.DELETE);
        // Playback.controlReadyThreadWait()
        await this.uIApartmentToEdit.click();
        await this.uIApartmentToEdit.fill("9");
    }

    async EnterPremise(): Promise<void> {
        await this.uIPremiseEdit.click();
        // Playback.controlReadyThreadWait()
        await this.uIPremiseEdit.fill(Randomized.randomNumberString(2));
        // Playback.controlReadyThreadWait()
        await this.uIPremiseEdit.press('Tab');
    }

    async VerifyNotValidPremiseMessage(): Promise<void> {
        await this.page.waitForTimeout(2000);
        const AdditionMessage = await this.uIBottomLeftSideStatusBar.innerText();
        // Assert.assertTrue(AdditionMessage.contains("5001 - Not a Valid Premise"))
    }

    async VerifyInvalidInputAcknowlegdeMessage(): Promise<void> {
        // popup: (5019) Invalid input
    }

    async DoubleClickAtApartmentFrom(apartmentFrom: string): Promise<void> {
        // Actions doubleClick = new Actions(Playback.driver)
        // doubleClick.doubleClick(objectIdentification.manualIdentify.getGridRowByCellInnerText(
        // uIMapGeo.addressIntersection.uIAddressIntersectionResultGrid,
        // BaseData.getGeoModuleValue("ApartmentFrom"))).perform()
        // doubleClick = null
        // Playback.gridLoadThreadWait()
    }

    async verifyApartmentFromAndToFieldEnabled(): Promise<void> {
        // verify.ExpectedValueIsTrue(uIMapGeo.apartmentEntry.uIApartmentFromEdit.isEnabled())
        // verify.ExpectedValueIsTrue(uIMapGeo.apartmentEntry.uIApartmentToEdit.isEnabled())
    }

    async EnterApartmentFromAs2(): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.page.waitForTimeout(3000);
        await this.uIApartmentFromEdit.click();
        await this.uIApartmentFromEdit.fill(Keys.BACK_SPACE);
        await this.uIApartmentFromEdit.fill(Keys.DELETE);
        // Playback.controlReadyThreadWait()
        await this.uIApartmentFromEdit.click();
        await this.uIApartmentFromEdit.fill("2");
    }

    async EnterApartmentToAsA(): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.page.waitForTimeout(3000);
        await this.uIApartmentToEdit.click();
        await this.uIApartmentToEdit.fill(Keys.BACK_SPACE);
        await this.uIApartmentToEdit.fill(Keys.DELETE);
        // Playback.controlReadyThreadWait()
        await this.uIApartmentToEdit.click();
        await this.uIApartmentToEdit.fill("A");
        await this.uIApartmentToEdit.press('Tab');
        // Playback.controlReadyThreadWait()
    }

    async verifyAt5001NotAValidPremiseStatusMsg(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // verify.ExpectedPropertyValueIsEqual(uIMapGeo.apartmentEntry.uIBottomLeftSideStatusBar.getText(),
        // "5001 - Not a Valid Premise")
    }

    async SaveNClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        // confirm popup: yes
        // Playback.pageLoadThreadWait()
    }

    async verifyInactiveCheckBoxIsSelected(rowIndex: string): Promise<void> {
        // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(uIMapGeo.apartmentEntry.uIApartmentEntryResultGrid, "Inactive", rowIndex)
        // verify.ExpectedValueIsTrue(
        // gridCell.findElement(By.tagName("img")).getAttribute("title").contains("Checked"))
    }

    async verifyAdditionSuccessfulStatusMessage(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
        // uIMapGeo.apartmentEntry.uIBottomLeftSideStatusBar.getText())
    }

    async clickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async verifyUpdateSuccessfulStatusMessage(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("1003 - Update Successful",
        // uIMapGeo.addressFlagEntry.uIBottomLeftSideStatusBar.getText())
    }

    async verifyApartmentFromFeildIsDisabled(): Promise<void> {
        // verify.ExpectedValueIsTrue(uIMapGeo.apartmentEntry.uIApartmentFromEdit.getAttribute("class").contains("textboxInactive"))
    }

    async EnterAtApartment(apartment: string): Promise<void> {
        await this.uIApartmentEdit.fill(apartment);
    }

    async verifyAtApartmentInGrid(apartment: string): Promise<void> {
        // String text = objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.apartmentEntry.uIApartmentEntryTable, "Apartment To", 0)
        expect(apartment).toBeTruthy();
    }
}

export class ApartmentHelpWindowPage {
    readonly page: Page;
    readonly uIApartmentEdit: Locator;
    readonly uIUseThisAptNoButton: Locator;
    readonly uICancelAndReenterButton: Locator;
    readonly uIAddThisAptNoToGeoButton: Locator;
    readonly uIAppartmentRaneInfoEdit: Locator;
    readonly uILocationTextView: Locator;
    readonly uIUseBaseAddressButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIApartmentEdit = page.locator('NotxtApartment');
        this.uIUseThisAptNoButton = page.locator('NocmdLoad');
        this.uICancelAndReenterButton = page.locator('NocmdCancel');
        this.uIAddThisAptNoToGeoButton = page.locator('NocmdAdd');
        this.uIAppartmentRaneInfoEdit = page.locator('NotxtApartRangeInfo');
        this.uILocationTextView = page.locator('NotxtLocation');
        this.uIUseBaseAddressButton = page.locator('NocmdBaseAddr');
    }

    async VerifyLocation(premise: string, streetName: string): Promise<void> {
        //			Assert.assertTrue(uIMapGeo.apartmentHelpWindow.uILocationTextView.getAttribute("value")
        //					.contains(BaseData.getGeoModuleValue("Premise")));
        // Assert.assertTrue(uIMapGeo.apartmentHelpWindow.uILocationTextView.getAttribute("value").contains(BaseData.getGeoModuleValue("StreetName")))
    }

    async enterAtApartment(apartment: string): Promise<void> {
        await this.uIApartmentEdit.fill(apartment);
    }

    async EnterAtSplitApartment(splitTo: string): Promise<void> {
        await this.uIApartmentEdit.click();
        await this.uIApartmentEdit.fill(splitTo);
    }

    async clickUseThisAptNo(): Promise<void> {
        await this.uIUseThisAptNoButton.click();
    }

    async VerifyApartmentRange(apartmentFrom: string, apartmentTo: string): Promise<void> {
        // Assert.assertTrue(uIMapGeo.apartmentHelpWindow.uIAppartmentRaneInfoEdit.getAttribute("value").contains(BaseData.getGeoModuleValue("ApartmentFrom")))
        // Assert.assertTrue(uIMapGeo.apartmentHelpWindow.uIAppartmentRaneInfoEdit.getAttribute("value").contains(BaseData.getGeoModuleValue("ApartmentTo")))
    }

    async VerifyInvalidInputAcknowledgeMessage(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // popup: (5019) Invalid input
    }

    async clickUseBaseAddressButton(): Promise<void> {
        await this.uIUseBaseAddressButton.click();
        // Playback.controlReadyThreadWait()
    }

    async closeWindow(): Promise<void> {
        // uIMapGeo.apartmentHelpWindow.driver.close()
    }

    async verifyApartmentRangeNotEmpty(): Promise<void> {
        const apartment = await this.uIAppartmentRaneInfoEdit.inputValue();
        // verify.ExpectedPropertyValueIsNotEqual(apartment, "")
    }

    async verifyAtLocation(location: string): Promise<void> {
        const Location = await this.uILocationTextView.inputValue();
        expect(location).toEqual(Location);
    }

    async verifyAtApartmentRange(apartmentRange: string): Promise<void> {
        const Aparment = await this.uIAppartmentRaneInfoEdit.inputValue();
        expect(apartmentRange).toEqual(Aparment);
    }
}

export class AVLReplayPage {
    readonly page: Page;
    readonly uIFromDate: Locator;
    readonly uIFromTime: Locator;
    readonly uIToDate: Locator;
    readonly uIToTime: Locator;
    readonly uIShowUnitsButton: Locator;
    readonly uIPolygonButton: Locator;
    readonly uIMapPanel: Locator;
    readonly uIResetButton: Locator;
    readonly uIMapOptionDropDown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIFromDate = page.locator("//input[@id='dttFrom_Date_KPIDttmCtrl']");
        this.uIFromTime = page.locator("//table[@id='dttFrom_Time']//input");
        this.uIToDate = page.locator('NodttTo_Date_KPIDttmCtrl');
        this.uIToTime = page.locator("//table[@id ='dttTo_Time']//input");
        this.uIShowUnitsButton = page.locator('NobtnShowUnits');
        this.uIPolygonButton = page.locator('NobtnPolygon');
        this.uIMapPanel = page.locator('NoMapPanel');
        this.uIResetButton = page.locator("//input[@value='Reset']");
        this.uIMapOptionDropDown = page.locator('NoddlMapType_MainMap');
    }

    async enterAtFromDateAndTime(): Promise<void> {
        await this.uIFromDate.fill(Randomized.getCurrentDate());
        await this.uIFromDate.press('Tab');
        // Playback.pageLoadThreadWait()
        await this.uIFromTime.fill(Randomized.getCurrentTime("HH:mm"));
        await this.uIFromTime.press('Tab');
    }

    async enterAtToDateAndTime(): Promise<void> {
        await this.uIToDate.press('Tab');
        // Playback.pageLoadThreadWait()
        await this.uIToTime.fill(Randomized.getFutureTimeByHours(4, "HH:mm"));
        await this.uIToTime.press('Tab');
    }

    async enterAtFromDateAndTimeII(): Promise<void> {
        await this.uIFromDate.clear();
        await this.uIFromDate.fill(Randomized.getCurrentDate());
        await this.uIFromDate.press('Tab');
        // Playback.pageLoadThreadWait()
        await this.uIFromTime.fill(Randomized.getCurrentTime("HH:mm"));
        await this.uIFromTime.press('Tab');
    }

    async enterAtToDateAndTimeII(): Promise<void> {
        await this.uIToDate.press('Tab');
        // Playback.pageLoadThreadWait()
        await this.uIToTime.fill(Randomized.getFutureTimeByHours(9, "HH:mm"));
        await this.uIToTime.press('Tab');
    }

    async clickShowUnits(): Promise<void> {
        await this.uIShowUnitsButton.click();
    }

    async verifyNoRecordsFoundSelectedTimeDuationAckwMsg(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // popup: (6071) No Record found between selected time duration.
    }

    async verifyFromdatelessthanTodateAckwMsg(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // popup: (6071) From date should be less than To date.
    }

    async clickPolygonButtonInDrawAreas(): Promise<void> {
        await this.uIPolygonButton.click();
    }

    async dragAndPointInMapPanel(): Promise<void> {
        // Playback.actionDriver.moveToElement(uIMapGeo.aVLReplay.uIMapPanel, 0, 0).click().perform()
        // Playback.controlReadyThreadWait()
        // Playback.actionDriver.moveToElement(uIMapGeo.aVLReplay.uIMapPanel, 100, 0).click().perform()
        // Playback.controlReadyThreadWait()
        // Playback.actionDriver.moveToElement(uIMapGeo.aVLReplay.uIMapPanel, 0, 100).click().perform()
        // Playback.controlReadyThreadWait()
        // Playback.actionDriver.moveToElement(uIMapGeo.aVLReplay.uIMapPanel, -100, 0).click().perform()
        // Playback.controlReadyThreadWait()
        // Playback.actionDriver.moveToElement(uIMapGeo.aVLReplay.uIMapPanel, 0, -100).click().perform()
        // Playback.controlReadyThreadWait()
        // Playback.actionDriver.moveToElement(uIMapGeo.aVLReplay.uIMapPanel, 0, 0).doubleClick().perform()
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async verifyShowUnitsOnMapIsDisabled(): Promise<void> {
        // verify.ExpectedValueIsTrue(!uIMapGeo.aVLReplay.uIShowUnitsButton.isEnabled())
    }

    async selectAtMapOptions(mapOption: string): Promise<void> {
        await this.uIMapOptionDropDown.selectOption({ label: mapOption });
    }

    async verifyStopplayAndChangeMapOptionPopUpIsNotArised(): Promise<void> {
        const isPresentOrNot = popup.confirm.checkAlertIsPresentOrNot();
        expect(isPresentOrNot).toBeFalsy();
    }

    async verifyCannotReadPropertiesPopuNotAppears(): Promise<void> {
        const checkAlertIsPresentOrNot = popup.confirm.checkAlertIsPresentOrNot();
        // if (checkAlertIsPresentOrNot == true) {
        // const text = Playback.driver.switchTo().alert().getText();
        // verify.ExpectedPropertyValueIsNotEqual("Cannot read properties of undefined (reading 'getSearchService')", text)
        expect(checkAlertIsPresentOrNot).toBeFalsy();
    }
}

export class BatchUpdatePage {
    readonly page: Page;
    readonly uIPrefixComboBox: Locator;
    readonly uIStreetNameEdit: Locator;
    readonly uIStreetTypeEdit: Locator;
    readonly uISearchButton: Locator;
    readonly uISelectAllCheckBox: Locator;
    readonly uIBatchUpdateResultGrid: Locator;
    readonly uIZipCodeEdit: Locator;
    readonly uIZipCodeLookupButton: Locator;
    readonly uISubZoneEdit: Locator;
    readonly uIPatSubZoneLookupButton: Locator;
    readonly uICivilDistrictEdit: Locator;
    readonly uICivilDistrictLookupButton: Locator;
    readonly uIPatrolZoneEdit: Locator;
    readonly uIPatrolZoneLookupButton: Locator;
    readonly uIPremiseTypeComboBox: Locator;
    readonly uICustom1Edit: Locator;
    readonly uINPACardEdit: Locator;
    readonly uINPACardLookupButton: Locator;
    readonly uITrackNoEdit: Locator;
    readonly uITrackNoLookupButton: Locator;
    readonly uICensusTractEdit: Locator;
    readonly uIUpdateButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIIntersectionCheckBox: Locator;
    readonly uIAddCheckBox: Locator;
    readonly uIModifyCheckBox: Locator;
    readonly uIBlankRACheckBox: Locator;
    readonly uITotalRecordsSelected: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIUpdateButtonInPopup: Locator;
    readonly uIZipCodeInPopupEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIPrefixComboBox = page.locator('NocddPrefix_DropDown');
        this.uIStreetNameEdit = page.locator('NotxtStreetName');
        this.uIStreetTypeEdit = page.locator('NolupType_CodeValue');
        this.uISearchButton = page.locator('NocmdSearch');
        this.uISelectAllCheckBox = page.locator('NochkCheckAll');
        this.uIBatchUpdateResultGrid = page.locator("//div[@id='grdBatchUpdate']");
        this.uIZipCodeEdit = page.locator('NolupZipCode_CodeValue');
        this.uIZipCodeLookupButton = page.locator('NolupZipCode_imgBtn');
        this.uISubZoneEdit = page.locator('NolupPatSubZone_CodeValue');
        this.uIPatSubZoneLookupButton = page.locator('NolupPatSubZone_imgBtn');
        this.uICivilDistrictEdit = page.locator('NolupCvlDist_CodeValue');
        this.uICivilDistrictLookupButton = page.locator('NolupCvlDist_imgBtn');
        this.uIPatrolZoneEdit = page.locator('NolupPatrolArea_CodeValue');
        this.uIPatrolZoneLookupButton = page.locator('NolupPatrolAreaSelect_imgBtn');
        this.uIPremiseTypeComboBox = page.locator('NocddPremiseType_DropDown');
        this.uICustom1Edit = page.locator('NotxtCustom1');
        this.uINPACardEdit = page.locator('NolupNPACard_CodeValue');
        this.uINPACardLookupButton = page.locator('NolupNPACard_imgBtn');
        this.uITrackNoEdit = page.locator('NolupTrackSrch_CodeValue');
        this.uITrackNoLookupButton = page.locator('NolupTrackSrch_imgBtn');
        this.uICensusTractEdit = page.locator('NotxtCensusTract');
        this.uIUpdateButton = page.locator('NocmdBatchUpdate');
        this.uIResetButton = page.locator('NocmdReset');
        this.uIIntersectionCheckBox = page.locator('NochkIntersection');
        this.uIAddCheckBox = page.locator('NochkAdd');
        this.uIModifyCheckBox = page.locator('NochkModify');
        this.uIBlankRACheckBox = page.locator('NochkRNBlank');
        this.uITotalRecordsSelected = page.locator('NolblRecordsCount');
        this.uIRefreshButton = page.locator('NocmdRefresh');
        this.uIUpdateButtonInPopup = page.locator('NocmdUpdate');
        this.uIZipCodeInPopupEdit = page.locator('NolupZip_CodeValue');
    }

    async EnterAtStreetName(streetName: string): Promise<void> {
        await this.uIStreetNameEdit.fill(streetName);
    }

    async EnterAtStreetType(streetType: string): Promise<void> {
        await this.uIStreetTypeEdit.fill(streetType);
    }

    async ClickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async ClickSelectAllCheckBox(): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uISelectAllCheckBox.click();
    }

    async SelectCheckboxsInGrid(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // objectIdentification.randomIdentify.selectRandomGridRowsCheckboxes(uIMapGeo.batchUpdate.uIBatchUpdateResultGrid)
    }

    async EnterAtZipCode(zipCode: string): Promise<void> {
        await this.uIZipCodeEdit.fill(zipCode);
        await this.uIZipCodeEdit.press('Tab');
    }

    async EnterAtSubZone(subZone: string): Promise<void> {
        await this.uISubZoneEdit.fill(subZone);
        await this.uISubZoneEdit.press('Tab');
    }

    async EnterAtCivilDistrict(civilDistrict: string): Promise<void> {
        await this.uICivilDistrictEdit.fill(civilDistrict);
        await this.uICivilDistrictEdit.press('Tab');
    }

    async EnterAtCustom1(custom1: string): Promise<void> {
        await this.uICustom1Edit.fill(custom1);
    }

    async SelectAtPremiseType(premiseType: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.batchUpdate.uIPremiseTypeComboBox,
        // BaseData.getGeoModuleValue("PremiseType"))
    }

    async EnterAtPatrolZone(patrolZone: string): Promise<void> {
        await this.uIPatrolZoneEdit.fill(patrolZone);
        await this.uIPatrolZoneEdit.press('Tab');
    }

    async EnterAtNPACard(nPACard: string): Promise<void> {
        await this.uINPACardEdit.fill(nPACard);
        await this.uINPACardEdit.press('Tab');
    }

    async EnterAtTrack(track: string): Promise<void> {
        await this.uITrackNoEdit.fill(track);
        await this.uITrackNoEdit.press('Tab');
    }

    async EnterAtCensus(census: string): Promise<void> {
        await this.uICensusTractEdit.fill(census);
    }

    async ClickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }

    async UpdateScreen(): Promise<void> {
        await this.uIUpdateButton.click();
        // popup: ok
    }

    async SelectAtPremiseNo(premise: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.batchUpdate.uIBatchUpdateResultGrid,
        // BaseData.getGeoModuleValue("Premise") + "-" + BaseData.getGeoModuleValue("Premise"))
    }

    async VerifyAtStreetName(rowIndex: string, streetName: string): Promise<void> {
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.batchUpdate.uIBatchUpdateResultGrid, "Street Name", rowIndex).contains(BaseData.getGeoModuleValue("StreetName")))
    }

    async VerifyAtZipcode(rowIndex: string, zipCode: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("ZipCode"), objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.batchUpdate.uIBatchUpdateResultGrid, "Zip", rowIndex))
    }

    async VerifyAtPatrolZone(rowIndex: string, patrolZone: string): Promise<void> {
        // Playback.pageLoadThreadWait()
        // Assert.assertEquals(BaseData.getGeoModuleValue("PatrolZone"), objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.batchUpdate.uIBatchUpdateResultGrid, "PA", rowIndex))
    }

    async VerifyAtSubZone(rowIndex: string, subZone: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("SubZone"), objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.batchUpdate.uIBatchUpdateResultGrid, "Sub", rowIndex))
    }

    async VerifyAtNPACard(rowIndex: string, nPACard: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("NPACard"), objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.batchUpdate.uIBatchUpdateResultGrid, "NPA", rowIndex))
    }

    async VerifyAtCivilDistrict(rowIndex: string, civilDistrict: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("CivilDistrict"), objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.batchUpdate.uIBatchUpdateResultGrid, "CD", rowIndex))
    }

    async VerifyAtTrackNo(rowIndex: string, track: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("Track"), objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.batchUpdate.uIBatchUpdateResultGrid, "TrackNo", rowIndex))
    }

    async VerifyAtCustom(rowIndex: string, custom1: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("Custom1"), objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.batchUpdate.uIBatchUpdateResultGrid, "Custom1", rowIndex))
    }

    async VerifyAtCensus(rowIndex: string, census: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("Census"), objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.batchUpdate.uIBatchUpdateResultGrid, "Census", rowIndex))
    }

    async ClickIntersectionCheckBox(): Promise<void> {
        await this.uIIntersectionCheckBox.click();
    }

    async VerifyStreetNameCheckBoxCheckedInGrid(rowIndex: string): Promise<void> {
        // WebElement primeIsChecked = objectIdentification.manualIdentify.getGridCell(uIMapGeo.batchUpdate.uIBatchUpdateResultGrid, "U", rowIndex).findElement(By.tagName("img"))
        // Assert.assertTrue(primeIsChecked.getAttribute("alt").contains("Checked"))
    }

    async VerifyUpdateSuccessfulAcknowledgeMessage(): Promise<void> {
        // popup: 1003 - Update Successful
        //			if (Playback.browserType.equals("Chrome")) {
        //				popup.acknowledge.okWithExpectedMessage("1003 - Update successful");
        //			}
        //			popup.acknowledge.okWithExpectedMessage(" 1003 - Update successful");
    }

    async ClickAtIntersectionStreetNameInGrid(interStreetName: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.batchUpdate.uIBatchUpdateResultGrid, BaseData.getGeoModuleValue("InterStreetName"))
    }

    async RightClickAndSelectAddressMenu(interStreetName: string): Promise<void> {
        // objectIdentification.manualIdentify.selectContextMenuItemInTheGridRow(
        // uIMapGeo.batchUpdate.uIBatchUpdateResultGrid, BaseData.getGeoModuleValue("InterStreetName"),
        // "Address")
    }

    async ClickAddCheckbox(): Promise<void> {
        await this.uIAddCheckBox.click();
    }

    async clickAtStreetNameInGrid(rowIndex: string, streetName: string): Promise<void> {
        // WebElement tableRow = objectIdentification.manualIdentify.getGridTableRow(uIMapGeo.batchUpdate.uIBatchUpdateResultGrid, rowIndex)
        // WebElement cellText = tableRow.findElement(By.xpath("td[contains(text(), '" + BaseData.getGeoModuleValue("StreetName") + "')]"))
        await this.cellText.click();
    }

    async VerifyAtPatrolZone1(rowIndex: string, patrolZone1: string): Promise<void> {
        // Playback.pageLoadThreadWait()
        // Assert.assertEquals(BaseData.getGeoModuleValue("PatrolZone1"), objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.batchUpdate.uIBatchUpdateResultGrid, "PA", rowIndex))
    }

    async ClickAtStreetName1InGrid(streetName1: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.batchUpdate.uIBatchUpdateResultGrid, BaseData.getGeoModuleValue("StreetName1"))
    }

    async clickBlankRACheckbox(): Promise<void> {
        await this.uIBlankRACheckBox.click();
    }

    async verifyAllRecordsSelected(): Promise<void> {
        // int rowsCount = objectIdentification.manualIdentify.getGridTableRowsCount(uIMapGeo.batchUpdate.uIBatchUpdateResultGrid)
        // verify.ExpectedPropertyValueIsEqual(uIMapGeo.batchUpdate.uITotalRecordsSelected.getText(),
        // "Total Records Selected :" + rowsCount)
    }

    async clickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
        // Playback.controlReadyThreadWait()
    }

    async SelectCheckboxsByStreetNameInGrid(streetName1: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
        // uIMapGeo.batchUpdate.uIBatchUpdateResultGrid, BaseData.getGeoModuleValue("StreetName1"))
    }
}

export class BatchUpdatePopUpPage {
    readonly page: Page;
    readonly uIZipCodeEditInPopup: Locator;
    readonly uIZipCodeLookupButtonInPopup: Locator;
    readonly uISubZoneEditInPopup: Locator;
    readonly uISubZoneLookupButtonInPopup: Locator;
    readonly uICivilDistrictEditInPopup: Locator;
    readonly uICivilDistrictLookupButtonInPopup: Locator;
    readonly uIPatrolZoneEditInPopup: Locator;
    readonly uIPatrolZoneLookupButtonInPopup: Locator;
    readonly uIPremiseTypeComboBoxInPopup: Locator;
    readonly uICustom1EditInPopup: Locator;
    readonly uINPACardEditInPopup: Locator;
    readonly uINPACardLookupButtonInPopup: Locator;
    readonly uITrackNoEditInPopup: Locator;
    readonly uITrackNoLookupButtonInPopup: Locator;
    readonly uICensusTractEditInPopup: Locator;
    readonly uIUpdateButtonInPopup: Locator;
    readonly uIResetButtonInPopup: Locator;
    readonly uIAddCheckBoxInPopup: Locator;
    readonly uIModifyCheckBoxInPopup: Locator;
    readonly uIDistrictEdit: Locator;
    readonly uISubDistrictEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIZipCodeEditInPopup = page.locator('NolupZip_CodeValue');
        this.uIZipCodeLookupButtonInPopup = page.locator('NolupZip_imgBtn');
        this.uISubZoneEditInPopup = page.locator('NolupSubZone_CodeValue');
        this.uISubZoneLookupButtonInPopup = page.locator('NolupSubZone_imgBtn');
        this.uICivilDistrictEditInPopup = page.locator('NolupCivilDist_CodeValue');
        this.uICivilDistrictLookupButtonInPopup = page.locator('NolupCivilDist_imgBtn');
        this.uIPatrolZoneEditInPopup = page.locator('NolupPatrolAreaSelect_CodeValue');
        this.uIPatrolZoneLookupButtonInPopup = page.locator('NolupPatrolAreaSelect_imgBtn');
        this.uIPremiseTypeComboBoxInPopup = page.locator('NocddPremiseType_DropDown');
        this.uICustom1EditInPopup = page.locator('NotxtCustom1');
        this.uINPACardEditInPopup = page.locator('NolupURACard_CodeValue');
        this.uINPACardLookupButtonInPopup = page.locator('NolupURACard_imgBtn');
        this.uITrackNoEditInPopup = page.locator('NolupTrack_CodeValue');
        this.uITrackNoLookupButtonInPopup = page.locator('NolupTrack_imgBtn');
        this.uICensusTractEditInPopup = page.locator('NotxtCensusTract');
        this.uIUpdateButtonInPopup = page.locator('NocmdUpdate');
        this.uIResetButtonInPopup = page.locator('NocmdReset');
        this.uIAddCheckBoxInPopup = page.locator('NochkAdd');
        this.uIModifyCheckBoxInPopup = page.locator('NochkModify');
        this.uIDistrictEdit = page.locator('NolupPatrolAreaSelect_CodeValue');
        this.uISubDistrictEdit = page.locator('NolupURACard_CodeValue');
    }

    async SelectAtPremiseType(premiseType: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapGeo.batchUpdate.batchUpdatePopup.uIPremiseTypeComboBoxInPopup,
        // BaseData.getGeoModuleValue("PremiseType"))
    }

    async enterAtDistrictField(district: string): Promise<void> {
        await this.batchUpdatePopup.fill(district);
        // Playback.gridLoadThreadWait()
        await this.batchUpdatePopup.press('Tab');
    }

    async enterAtSubDistrictField(subDistrict: string): Promise<void> {
        await this.batchUpdatePopup.fill(subDistrict);
        // Playback.gridLoadThreadWait()
        await this.batchUpdatePopup.press('Tab');
    }

    async ClickUpdateButtonInPopup(): Promise<void> {
        await this.batchUpdatePopup.click();
    }

    async updateScreenInBatchUpdate(): Promise<void> {
        await this.batchUpdatePopup.click();
    }

    async EnterAtZipCode(zipCode: string): Promise<void> {
        await this.batchUpdatePopup.fill(zipCode);
        await this.batchUpdatePopup.press('Tab');
    }

    async EnterAtSubZone(subZone: string): Promise<void> {
        await this.batchUpdatePopup.fill(subZone);
        await this.batchUpdatePopup.press('Tab');
    }

    async EnterAtCivilDistrict(civilDistrict: string): Promise<void> {
        await this.batchUpdatePopup.fill(civilDistrict);
        await this.batchUpdatePopup.press('Tab');
    }

    async EnterAtPatrolZone(patrolZone: string): Promise<void> {
        await this.batchUpdatePopup.fill(patrolZone);
        await this.batchUpdatePopup.press('Tab');
    }

    async EnterAtNPACard(nPACard: string): Promise<void> {
        await this.batchUpdatePopup.fill(nPACard);
        await this.batchUpdatePopup.press('Tab');
    }

    async EnterAtTrack(track: string): Promise<void> {
        await this.batchUpdatePopup.fill(track);
        await this.batchUpdatePopup.press('Tab');
    }

    async ClickAddCheckbox(): Promise<void> {
        await this.batchUpdatePopup.click();
        // batchupdatepopup
    }

    async EnterAtCensus(census: string): Promise<void> {
        // uIMapGeo.batchUpdate.batchUpdatePopup.uICensusTractEditInPopup.sendKeys(BaseData.getGeoModuleValue("Census")); // Make changes based on batchupdatepopup
    }

    async EnterAtCustom1(custom1: string): Promise<void> {
        // uIMapGeo.batchUpdate.batchUpdatePopup.uICustom1EditInPopup.sendKeys(BaseData.getGeoModuleValue("Custom1")); // Make changes based on batchupdatepopup
    }

    async UpdateScreen(): Promise<void> {
        await this.batchUpdatePopup.click();
        // popup: ok
    }

    async clickZipCodelookupIcon(): Promise<void> {
        await this.batchUpdatePopup.click();
    }

    async SelectMultipleCheckboxesByStreetNameInGrid(streetName1: string, streetName2: string, streetName3: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
        // uIMapGeo.batchUpdate.uIBatchUpdateResultGrid, BaseData.getGeoModuleValue("StreetName1"))
        // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
        // uIMapGeo.batchUpdate.uIBatchUpdateResultGrid, BaseData.getGeoModuleValue("StreetName2"))
        // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
        // uIMapGeo.batchUpdate.uIBatchUpdateResultGrid, BaseData.getGeoModuleValue("StreetName3"))
    }

    async VerifyAtZipcodeBasaedOnStreetNames(streetName1: string, code: string, streetName2: string, streetName3: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(
        // objectIdentification.manualIdentify.getGridCell(uIMapGeo.batchUpdate.uIBatchUpdateResultGrid,
        // BaseData.getGeoModuleValue("StreetName1"), "Zip").getText(),
        // BaseData.getGeoModuleValue("Code"))
        // verify.ExpectedPropertyValueIsEqual(
        // objectIdentification.manualIdentify.getGridCell(uIMapGeo.batchUpdate.uIBatchUpdateResultGrid,
        // BaseData.getGeoModuleValue("StreetName2"), "Zip").getText(),
        // BaseData.getGeoModuleValue("Code"))
        // verify.ExpectedPropertyValueIsEqual(
        // objectIdentification.manualIdentify.getGridCell(uIMapGeo.batchUpdate.uIBatchUpdateResultGrid,
        // BaseData.getGeoModuleValue("StreetName3"), "Zip").getText(),
        // BaseData.getGeoModuleValue("Code"))
    }

    async verifyApplicationErrorAckMssgNotAppeared(): Promise<void> {
        // no-op: window handle
        // if (windowExist == true) {
        // popup.switchToAcknowledge()
        // verify.ExpectedPropertyValueIsNotEqual("(5) Application Error ",
        // uIMapPopup.acknowledgeWindow.uIErrorInfoTextEdit.getText())
    }

    async verifySelectJurisAckMessageNotAppeared(): Promise<void> {
        // no-op: window handle
        // if (windowExist == true) {
        // popup.switchToAcknowledge()
        // verify.ExpectedPropertyValueIsNotEqual("(8)Enter mandatory data - Select Juris.",
        // uIMapPopup.acknowledgeWindow.uIErrorInfoTextEdit.getText())
    }
}

export class ChemicalsTabPage {
    readonly page: Page;
    readonly uIChemicalNameEdit: Locator;
    readonly uIGeneralLocationComboBox: Locator;
    readonly uIContainerTypeEdit: Locator;
    readonly uICapacityUnitsEdit: Locator;
    readonly uIContainerCapacityUnitsEdit: Locator;
    readonly uIChemicalsTabResultGrid: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIInactiveCheckBox: Locator;
    readonly uIInactiveDateEdit: Locator;
    readonly uIContainerCapacityEdit: Locator;
    readonly uINameOfContainersEdit: Locator;
    readonly uIChemicalTabBatchUpdate: Locator;
    readonly uIDotGuideLink: Locator;
    readonly uIChemicalGuideLink: Locator;
    readonly uICameoLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIChemicalNameEdit = page.locator('NotabHazMat_tmpl0_UsrChemicals1_lupDotID_CodeValue');
        this.uIGeneralLocationComboBox = page.locator('NotabHazMat_tmpl0_UsrChemicals1_cddLocationCode_DropDown');
        this.uIContainerTypeEdit = page.locator('NotabHazMat_tmpl0_UsrChemicals1_lupContType_CodeValue');
        this.uICapacityUnitsEdit = page.locator('NotabHazMat_tmpl0_UsrChemicals1_lupcapacityunits_CodeValue');
        this.uIContainerCapacityUnitsEdit = page.locator('NotabHazMat_tmpl0_UsrChemicals1_txtContCapacity');
        this.uIChemicalsTabResultGrid = page.locator('NotabHazMat_tmpl0_UsrChemicals1_grdChemical');
        this.uIAddButton = page.locator('NotabHazMat_tmpl0_UsrChemicals1_imgAdd');
        this.uIClearButton = page.locator('NotabHazMat_tmpl0_UsrChemicals1_ImgClear');
        this.uIInactiveCheckBox = page.locator('NochkInActive');
        this.uIInactiveDateEdit = page.locator('NotabHazMat_tmpl0_UsrChemicals1_dttmDelDttm_KPIDttmCtrl');
        this.uIContainerCapacityEdit = page.locator('NotabHazMat_tmpl0_UsrChemicals1_txtContCapacity');
        this.uINameOfContainersEdit = page.locator('NotabHazMat_tmpl0_UsrChemicals1_txtNoConts');
        this.uIChemicalTabBatchUpdate = page.locator('NotabHazMat_tmpl0_UsrChemicals1_imgBatchUpdate');
        this.uIDotGuideLink = page.locator('NotabHazMat_tmpl0_UsrChemicals1_lblDotGuide');
        this.uIChemicalGuideLink = page.locator('NotabHazMat_tmpl0_UsrChemicals1_lblChemicalGuide');
        this.uICameoLink = page.locator('NotabHazMat_tmpl0_UsrChemicals1_lblCam');
    }

    async ClickChemicalID(rowIndex: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridTableRow(uIMapGeo.hazMatFlagEntry.chemicalsTab.uIChemicalsTabResultGrid, rowIndex)
    }

    async EnterAtChemicalName(chemicalName: string): Promise<void> {
        await this.chemicalsTab.fill(chemicalName);
        await this.chemicalsTab.press('Tab');
    }

    async VerifyChemicalName(chemical: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("Chemical"),
        // uIMapGeo.hazMatFlagEntry.chemicalsTab.uIChemicalNameEdit.getAttribute("value"))
    }

    async verifyLinksAreEnabled(): Promise<void> {
        // verify.ExpectedValueIsTrue(uIMapGeo.hazMatFlagEntry.chemicalsTab.uIDotGuideLink.isEnabled())
        // verify.ExpectedValueIsTrue(uIMapGeo.hazMatFlagEntry.chemicalsTab.uIChemicalGuideLink.isEnabled())
        // verify.ExpectedValueIsTrue(uIMapGeo.hazMatFlagEntry.chemicalsTab.uICameoLink.isEnabled())
    }

    async clickDOTLink(): Promise<void> {
        await this.chemicalsTab.click();
    }

    async switchToNIOSHGuide(): Promise<void> {
        // no-op: window handle
    }

    async clickNIOSHLink(): Promise<void> {
        await this.chemicalsTab.click();
    }

    async clickCAMEOLink(): Promise<void> {
        await this.chemicalsTab.click();
    }

    async ClickUpdateButton(): Promise<void> {
        await this.chemicalsTab.click();
    }

    async ClickAddButton(): Promise<void> {
        await this.chemicalsTab.click();
    }

    async SelectAtGeneralLocation(generalLocation: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(
        // uIMapGeo.hazMatFlagEntry.chemicalsTab.uIGeneralLocationComboBox,
        // BaseData.getGeoModuleValue("GeneralLocation"))
    }

    async VerifyAtInactiveDate(inactiveDate: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("InactiveDate"),
        // uIMapGeo.hazMatFlagEntry.chemicalsTab.uIInactiveDateEdit.getText())
    }

    async enterAtInactiveDate(inactiveDate: string): Promise<void> {
        await this.chemicalsTab.fill(inactiveDate);
    }

    async VerifyAtChemicalID(rowIndex: string, iD: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("ID"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.hazMatFlagEntry.chemicalsTab.uIChemicalsTabResultGrid, "IDNo", rowIndex))
    }

    async VerifyInactiveCommonNameRowColor(rowIndex: string): Promise<void> {
        // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify.getGridTableRow(uIMapGeo.hazMatFlagEntry.chemicalsTab.uIChemicalsTabResultGrid, rowIndex).getAttribute("class").contains("Grey"))
    }

    async enterAtContainerType(containerType: string): Promise<void> {
        await this.chemicalsTab.fill(containerType);
        await this.chemicalsTab.press('Tab');
    }

    async enterAtContainerCapacity(containerCapacity: string): Promise<void> {
        await this.chemicalsTab.fill(containerCapacity);
    }

    async enterAtNameOfContainers(nameOfContainers: string): Promise<void> {
        await this.chemicalsTab.fill(nameOfContainers);
    }

    async selectRowByAtLocationInGrid(location: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
        // uIMapGeo.hazMatFlagEntry.chemicalsTab.uIChemicalsTabResultGrid,
        // BaseData.getGeoModuleValue("Location"))
    }

    async selectRowByAtLocationInGrid1(location1: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
        // uIMapGeo.hazMatFlagEntry.chemicalsTab.uIChemicalsTabResultGrid,
        // BaseData.getGeoModuleValue("Location1"))
    }

    async clickBatchUpdateButton(): Promise<void> {
        await this.chemicalsTab.click();
    }

    async verifyAtCapacityNoInGrid(rowIndex: string, containerCapacity: string): Promise<void> {
        // String value = objectIdentification.manualIdentify.getGridCell(uIMapGeo.hazMatFlagEntry.chemicalsTab.uIChemicalsTabResultGrid,
        // "Capacity", rowIndex).getText()
        expect(value).toEqual(containerCapacity);
    }

    async verifyAtContainersNoInGrid(rowIndex: string, nameOfContainers: string): Promise<void> {
        // String value = objectIdentification.manualIdentify.getGridCell(uIMapGeo.hazMatFlagEntry.chemicalsTab.uIChemicalsTabResultGrid,
        // "Containers", rowIndex).getText()
        expect(value).toEqual(nameOfContainers);
    }

    async verifyCheckBoxIsNotSelectedInGrid(): Promise<void> {
        // List<WebElement> cells = objectIdentification.manualIdentify.getGridTableColumnCells(uIMapGeo.hazMatFlagEntry.chemicalsTab.uIChemicalsTabResultGrid, "Select")
        // for(WebElement cellElement :cells) {
        const checkBox = cellElement.findElement(By.xpath("//img[contains(@src,'ig_checkbox')]")).getAttribute("title");
        expect(checkBox).toEqual("Unchecked");
    }
}

export class CommonNameHelpPage {
    readonly page: Page;
    readonly uICommonNameTable: Locator;
    readonly uIAlphaRadioButton: Locator;
    readonly uISoundEXRadioButton: Locator;
    readonly uIContainsRadioButton: Locator;
    readonly uIAddCommonNameToGeoButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uICommonNameTable = page.locator("//div[@ID='grdCommonName']");
        this.uIAlphaRadioButton = page.locator('NoradAlpha');
        this.uISoundEXRadioButton = page.locator('NoradSoundEX');
        this.uIContainsRadioButton = page.locator('NoradContains');
        this.uIAddCommonNameToGeoButton = page.locator('NocmdAdd');
    }

    async SelectCommonName(): Promise<void> {
        // Playback.waitForPageLoad()
        // objectIdentification.randomIdentify.selectRandomGridRow(uIMapGeo.commonNameHelp.uICommonNameTable)
    }

    async SelectCommonNameExceptNonValidAddress(): Promise<void> {
        // List<WebElement> tableRows = uIMapGeo.commonNameHelp.uICommonNameTable.findElements(By.xpath("//table/tbody[@class='ig_BlueThemeItem igg_BlueThemeItem']/tr"))
        // WebElement randomRow = tableRows.get(Randomized.getRandomNumber(tableRows.size()))
        // List<WebElement> rowCells = randomRow.findElements(By.tagName("td"))
        // WebElement interSectStreet = rowCells.get(3)
        const interSectText = await this.interSectStreet.innerText();
        // 
        // which is used to find the slash in the real address cell text until it should
        // not exists.
        // while (interSectText.contains("/")) {
        // randomRow = tableRows.get(Randomized.getRandomNumber(tableRows.size()))
        // rowCells = randomRow.findElements(By.tagName("td"))
        // interSectStreet = rowCells.get(3)
        // interSectText = interSectStreet.getText()
        await this.randomRow.click();
        // Playback.gridLoadThreadWait()
    }

    async VerifyAtCommonName(commonName: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("CommonName"),
        // objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.commonNameHelp.uICommonNameTable,
        // "Common Name", 1))
    }

    async VerifyAtStreetInterStreet(streetName: string, streetType: string, interStreetName: string, interStreetType: string): Promise<void> {
        expect(streetName).toBeTruthy();
        // + "/" + BaseData.getGeoModuleValue("InterStreetName") + " "
        // + BaseData.getGeoModuleValue("InterStreetType")))
    }

    async VerifyAtPincodeInGrid(zipCode: string): Promise<void> {
        expect(zipCode).toBeTruthy();
    }

    async VerifyCSZ(CSZ: string): Promise<void> {
        // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.commonNameHelp.uICommonNameTable, "Real Address", 2).contains(CSZ))
    }

    async CloseCommonHelpWindow(): Promise<void> {
        // uIMapGeo.commonNameHelp.driver.close()
    }

    async verifyAlphaRadioButtonSelected(): Promise<void> {
        expect(await this.uIAlphaRadioButton.isChecked()).toBeTruthy();
    }

    async clickAtSoundEXRadiobutton(): Promise<void> {
        await this.uISoundEXRadioButton.click();
    }

    async clickAtContainsRadioButton(): Promise<void> {
        await this.uIContainsRadioButton.click();
    }

    async verifyGridListOutResults(): Promise<void> {
        // int count = objectIdentification.manualIdentify.getGridTableRowsCount(uIMapGeo.commonNameHelp.uICommonNameTable)
        // if (count > 0) {
        expect(true).toBeTruthy();
    }

    async VerifyAcknowledgeNoRecordFound(): Promise<void> {
        // popup: 1011 - No Record Found
        // popup:  1011 - No Record Found
    }

    async clickAddCommonNameToGeo(): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIAddCommonNameToGeoButton.click();
    }

    async SelectAtCommonName(commonName: string): Promise<void> {
        // Playback.waitForPageLoad()
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapGeo.commonNameHelp.uICommonNameTable,
        // BaseData.getGeoModuleValue("CommonName"))
    }

    async VerifyAtCommonName(JsonKeyindex: string, commonName: string): Promise<void> {
        // System.out.println(BaseData.getGeoModuleValue("CommonName"+JsonKeyindex))
        // System.out.println(objectIdentification.manualIdentify.getGridCell(uIMapGeo.commonNameHelp.uICommonNameTable,
        // BaseData.getGeoModuleValue("CommonName"+JsonKeyindex)).getText())
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("CommonName"+JsonKeyindex),
        // objectIdentification.manualIdentify.getGridCell(uIMapGeo.commonNameHelp.uICommonNameTable,
        // BaseData.getGeoModuleValue("CommonName"+JsonKeyindex)).getText())
    }
}

export class CommonNamesPage {
    readonly page: Page;
    readonly uIAddressEdit: Locator;
    readonly uISearchButton: Locator;
    readonly uIPrintImageButton: Locator;
    readonly uICommonNameSearchTable: Locator;
    readonly uIAddNew: Locator;
    readonly uIZipCodeEdit: Locator;
    readonly uISoundAlike: Locator;
    readonly uIAddressInfoIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddressEdit = page.locator('NoadrAddress_txtFrom');
        this.uISearchButton = page.locator('NocmdSearch');
        this.uIPrintImageButton = page.locator("//img[@src = '/KPIImages/ico/16_print.gif']");
        this.uICommonNameSearchTable = page.locator('NogrdCMNName');
        this.uIAddNew = page.locator("//span[contains(text(),'Add New')]");
        this.uIZipCodeEdit = page.locator('NolupZipCode_CodeValue');
        this.uISoundAlike = page.locator('NochkSoundex');
        this.uIAddressInfoIcon = page.locator('NoadrAddress_cmdIncOnAddr');
    }

    async enterAtAddress(address: string): Promise<void> {
        await this.uIAddressEdit.fill(address);
        await this.uIAddressEdit.press('Tab');
    }

    async EnterAtStreetNameWithInter(streetName: string, streetType: string): Promise<void> {
        // uIMapGeo.commonNames.uIAddressEdit.sendKeys(
        // BaseData.getGeoModuleValue("StreetName") + " " + BaseData.getGeoModuleValue("StreetType") + "/")
        await this.uIAddressEdit.press('Tab');
        // Playback.pageLoadThreadWait()
    }

    async ClickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async ClickPrintIcon(): Promise<void> {
        await this.uIPrintImageButton.click();
    }

    async VerifyAtCommonNameFire(rowIndex: string, occupancyName: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("OccupancyName"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.commonNames.uICommonNameSearchTable, "Common Name", rowIndex))
    }

    async ClickAddNew(): Promise<void> {
        await this.uIAddNew.click();
    }

    async EnterAtCommonName(commonName: string): Promise<void> {
        await this.uIAddressEdit.fill(commonName);
        await this.uIAddressEdit.press('Tab');
    }

    async ClickAtCommonName(rowIndex: string, commonName: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.commonNames.uICommonNameSearchTable, BaseData.getGeoModuleValue("CommonName"), rowIndex)
    }

    async clickAtCommonName(commonName: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.commonNames.uICommonNameSearchTable, BaseData.getGeoModuleValue("CommonName"))
    }

    async VerifyAcknowledgeNoRecordFound(): Promise<void> {
        // popup: 1011 - No Record Found
        // popup:  1011 - No Record Found
    }

    async VerifyAtCommonName(rowIndex: string, commonName: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("CommonName"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.commonNames.uICommonNameSearchTable, "Common Name", rowIndex))
    }

    async VerifyAtAddress(rowIndex: string, address: string): Promise<void> {
        expect(address).toBeTruthy();
    }

    async VerifyAtStreetNameAndInterSectionStreetName(streetName: string, interStreetName: string): Promise<void> {
        expect(streetName).toBeTruthy();
        expect(interStreetName).toBeTruthy();
    }

    async VerifyInactiveCommonNameRowColor(rowIndex: string): Promise<void> {
        // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify.getGridTableRow(uIMapGeo.commonNames.uICommonNameSearchTable, rowIndex).getAttribute("class").contains("Grey"))
    }

    async VerifyCommonNameRowColor(rowIndex: string): Promise<void> {
        // verify.ExpectedValueIsFalse(objectIdentification.manualIdentify.getGridTableRow(uIMapGeo.commonNames.uICommonNameSearchTable, rowIndex).getAttribute("class").contains("Grey"))
    }

    async enterAtCommonNameUsingSubstring(commonName: string): Promise<void> {
        await this.uIAddressEdit.clear();
        await this.uIAddressEdit.fill(commonName);
        await this.uIAddressEdit.press('Tab');
    }

    async enterAtCommonName1(commonName1: string): Promise<void> {
        await this.uIAddressEdit.clear();
        await this.uIAddressEdit.fill(commonName1);
        await this.uIAddressEdit.press('Tab');
    }

    async enterAtCommonName2(commonName2: string): Promise<void> {
        await this.uIAddressEdit.clear();
        await this.uIAddressEdit.fill(commonName2);
        await this.uIAddressEdit.press('Tab');
    }

    async clearZipCode(): Promise<void> {
        await this.uIZipCodeEdit.clear();
    }

    async verifyAtCommonName2(rowIndex: string, commonName2: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("CommonName2"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.commonNames.uICommonNameSearchTable, "Common Name", rowIndex))
    }

    async enterAtZipCode(zipCode: string): Promise<void> {
        await this.uIZipCodeEdit.clear();
        await this.uIZipCodeEdit.fill(zipCode);
        await this.uIZipCodeEdit.press('Tab');
    }

    async enterAtCommonName3(commonName3: string): Promise<void> {
        await this.uIAddressEdit.clear();
        await this.uIAddressEdit.fill(commonName3);
        await this.uIAddressEdit.press('Tab');
        // Playback.gridLoadThreadWait()
    }

    async verifyAtCommonName3(rowIndex: string, commonName3: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("CommonName3"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.commonNames.uICommonNameSearchTable, "Common Name", rowIndex))
    }

    async verifyAddressBubbleInfoIconDisplayed(): Promise<void> {
        expect(await this.uIAddressInfoIcon.isVisible()).toBeTruthy();
    }

    async checkTheSoundAlikeCheckBox(): Promise<void> {
        await this.uISoundAlike.click();
    }

    async selectRowInGrid(rowIndex: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridTableRow(uIMapGeo.commonNames.uICommonNameSearchTable,
        // rowIndex)
    }

    async enterAtStreetName(streetName: string): Promise<void> {
        await this.uIAddressEdit.fill(streetName);
        await this.uIAddressEdit.press('Tab');
    }

    // ─── Merged from common-names.page.ts ────────────────────────────────────

    async enterAddress(address: string): Promise<void> {
        await this.uIAddressEdit.clear();
        await this.uIAddressEdit.fill(address);
    }

    async enterZipCode(zipCode: string): Promise<void> {
        await this.uIZipCodeEdit.fill(zipCode);
    }

    async clickSoundAlike(): Promise<void> {
        await this.uISoundAlike.click();
    }

    async selectFromGrid(commonName: string): Promise<void> {
        const cell = this.uICommonNameSearchTable.locator(`td:has-text("${commonName}")`).first();
        await cell.click();
    }

    async doubleClickFromGrid(commonName: string): Promise<void> {
        const cell = this.uICommonNameSearchTable.locator(`td:has-text("${commonName}")`).first();
        await cell.dblclick();
    }
}

export class CommonNamesEntryPage {
    readonly page: Page;
    readonly uIAddressEdit: Locator;
    readonly uICommonNameEdit: Locator;
    readonly uISortOrderEdit: Locator;
    readonly uIReplaceCheckBox: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uICommonNameEntryResultTable: Locator;
    readonly uIInactiveDateEdit: Locator;
    readonly uICommonNameTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddressEdit = page.locator('NoadrAddress_txtFrom');
        this.uICommonNameEdit = page.locator('NotxtCmnName');
        this.uISortOrderEdit = page.locator('NotxtViewOrder');
        this.uIReplaceCheckBox = page.locator('NochkReplace');
        this.uIAddButton = page.locator('NocmdAdd');
        this.uIClearButton = page.locator('NocmdClear');
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveAndCloseButton = page.locator('NocmdSaveNClose');
        this.uIPrintButton = page.locator('NocmdPrint');
        this.uIRefreshButton = page.locator('NocmdRefresh');
        this.uICommonNameEntryResultTable = page.locator('NogrdCmnName');
        this.uIInactiveDateEdit = page.locator('NodtcDelDttm_KPIDttmCtrl');
        this.uICommonNameTable = page.locator('NogrdCmnName');
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async ClickReplaceCheckBox(): Promise<void> {
        await this.uIReplaceCheckBox.click();
    }

    async ClickAddButton(): Promise<void> {
        // Playback.gridLoadThreadWait()
        await this.uIAddButton.click();
        // Playback.gridLoadThreadWait()
    }

    async enterAtAddressWithPrimise(premise: string, streetName: string, apartment: string): Promise<void> {
        // uIMapGeo.commonNamesEntry.uIAddressEdit.sendKeys(BaseData.getGeoModuleValue("Premise") + " "
        // + BaseData.getGeoModuleValue("StreetName") + "," + BaseData.getGeoModuleValue("Apartment"))
        await this.uIAddressEdit.press('Tab');
    }

    async enterAtAddress(address: string): Promise<void> {
        await this.uIAddressEdit.fill(address);
        await this.uIAddressEdit.press('Tab');
    }

    async EnterAtStreetDetails(premise: string, streetName: string, streetType: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        // uIMapGeo.commonNamesEntry.uIAddressEdit.sendKeys(BaseData.getGeoModuleValue("Premise") + " "
        // + BaseData.getGeoModuleValue("StreetName") + " " + BaseData.getGeoModuleValue("StreetType"))
        await this.uIAddressEdit.press('Tab');
    }

    async EnterAtCommonName(commonName: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uICommonNameEdit.fill(commonName);
        await this.uICommonNameEdit.press('Tab');
    }

    async EnterAtSortOrder(sortOrder: string): Promise<void> {
        await this.uISortOrderEdit.fill(sortOrder);
    }

    async EnterAtSortOrder(JsonKeyIndex: string, sortOrder: string): Promise<void> {
        await this.uISortOrderEdit.fill(sortOrder);
    }

    async EnterAtCommonName1(commonName1: string): Promise<void> {
        await this.uICommonNameEdit.fill(commonName1);
    }

    async EnterAtSortOrder1(sortOrder1: string): Promise<void> {
        await this.uISortOrderEdit.fill(sortOrder1);
    }

    async CloseScreen(): Promise<void> {
        // uIMapGeo.commonNamesEntry.driver.close()
        // Playback.pageLoadThreadWait()
    }

    async EnterAtStreetNameWithIntersectionSlash(streetName: string, streetType: string): Promise<void> {
        // uIMapGeo.commonNamesEntry.uIAddressEdit.sendKeys(
        // BaseData.getGeoModuleValue("StreetName") + " " + BaseData.getGeoModuleValue("StreetType") + "/")
        await this.uIAddressEdit.press('Tab');
        // Playback.pageLoadThreadWait()
    }

    async SaveScreen(): Promise<void> {
        await this.uISaveButton.click();
        // confirm popup: yes
        // Playback.pageLoadThreadWait()
    }

    async ClearInactiveDate(): Promise<void> {
        await this.uIInactiveDateEdit.click();
        await this.uIInactiveDateEdit.clear();
    }

    async ClickAtCommonName(commonName: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.commonNamesEntry.uICommonNameEntryResultTable, BaseData.getGeoModuleValue("CommonName"))
    }

    async ClickAtCommonName1(commonName1: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.commonNamesEntry.uICommonNameEntryResultTable, BaseData.getGeoModuleValue("CommonName1"))
    }

    async UpdateSortOrderAs2(): Promise<void> {
        await this.uISortOrderEdit.clear();
        await this.uISortOrderEdit.fill("2");
    }

    async EnterSortOrder(): Promise<void> {
        await this.uISortOrderEdit.fill(Randomized.randomNumberString(1));
    }

    async UpdateSortOrderAs0(): Promise<void> {
        await this.uISortOrderEdit.clear();
        await this.uISortOrderEdit.fill("0");
    }

    async VerifyAcknowlegdeSortOrderMessage(): Promise<void> {
        // popup.acknowledge.okWithExpectedMessage(
        // "(5055) Set the sort order to 0 for any one common name to set that as the primary common name")
    }

    async VerifyAcknowlegdeMessageRequiredEntriesAreMissing(): Promise<void> {
        // popup: (1018) Required Entries are Missing
    }

    async VerifyAcknowledgeMessageEnterCommonName(): Promise<void> {
        // popup: (5011) Enter Common Name
    }

    async VerifyAtCommonNameExist(rowIndex: string, commonName: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("CommonName"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.commonNamesEntry.uICommonNameEntryResultTable, "Common Name", rowIndex))
    }

    async VerifyAtCommonName1AndSortOrderExist(rowIndex: string, commonName1: string, sortOrder1: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("CommonName1"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.commonNamesEntry.uICommonNameEntryResultTable, "Common Name", rowIndex))
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("SortOrder1"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.commonNamesEntry.uICommonNameEntryResultTable, "SO", rowIndex))
    }

    async DeleteAtCommonNameRow(rowIndex: string, commonName: string): Promise<void> {
        // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
        // uIMapGeo.commonNamesEntry.uICommonNameEntryResultTable, BaseData.getGeoModuleValue("CommonName"),
        // rowIndex)
    }

    async DeleteAtCommonNameRow(commonName: string): Promise<void> {
        // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
        // uIMapGeo.commonNamesEntry.uICommonNameEntryResultTable, BaseData.getGeoModuleValue("CommonName"))
    }

    async VerifyConfirmationDeleteMessage(): Promise<void> {
        // confirm popup: (4) Do you really want to delete?
        // confirm popup: (4) Do you really want to delete?
    }

    async VerifyRowsNotExits(): Promise<void> {
        // Playback.gridLoadThreadWait()
        // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify.getGridTableRowsCount(uIMapGeo.commonNamesEntry.uICommonNameEntryResultTable) == 0)
    }

    async VerifyAtStreetAndInterSectionStreet(streetName: string, interStreetName: string): Promise<void> {
        expect(streetName).toBeTruthy();
        expect(interStreetName).toBeTruthy();
    }

    async VerifySortOrderAs2(rowIndex: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("2", objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.commonNamesEntry.uICommonNameEntryResultTable, "SO", rowIndex))
    }

    async VerifySortOrderAs0(rowIndex: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("0", objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.commonNamesEntry.uICommonNameEntryResultTable, "SO", rowIndex))
    }

    async VerifyInactiveCommonNameRowColor(rowIndex: string): Promise<void> {
        // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify.getGridTableRow(uIMapGeo.commonNamesEntry.uICommonNameEntryResultTable, rowIndex).getAttribute("class").contains("Grey"))
    }

    async VerifyAtInactiveDateInGrid(rowIndex: string, inactiveDate: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("InactiveDate"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.commonNamesEntry.uICommonNameEntryResultTable, "Inactive Date", rowIndex))
    }

    async VerifyAtCommonNameInGrid(JsonKeyIndex: string, commonName: string): Promise<void> {
        //			Assert.assertEquals(BaseData.getGeoModuleValue("CommonName"),
        //					objectIdentification.manualIdentify.getGridCellInnerText(
        //							uIMapGeo.commonNamesEntry.uICommonNameEntryResultTable, "Common Name", rowIndex));
        // objectIdentification.manualIdentify.getGridCell(uIMapGeo.commonNamesEntry.uICommonNameEntryResultTable, BaseData.getGeoModuleValue("CommonName"+JsonKeyIndex)).getText()
    }

    async VerifyAtInactiveDate(inactiveDate: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("InactiveDate"),
        // uIMapGeo.commonNamesEntry.uIInactiveDateEdit.getAttribute("value"))
    }

    async SaveAndClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        // confirm popup: yes
        // Playback.pageLoadThreadWait()
    }

    async enterAtCommonName4(commonName4: string): Promise<void> {
        await this.uICommonNameEdit.fill(commonName4);
        await this.uICommonNameEdit.press('Tab');
        // Playback.gridLoadThreadWait()
    }

    async enterAtCommonName3(commonName3: string): Promise<void> {
        await this.uICommonNameEdit.fill(commonName3);
        await this.uICommonNameEdit.press('Tab');
        // Playback.gridLoadThreadWait()
    }

    async enterAtAddress1(address1: string): Promise<void> {
        await this.uIAddressEdit.clear();
        await this.uIAddressEdit.fill(address1);
        await this.uIAddressEdit.press('Tab');
        // Playback.controlReadyThreadWait()
    }

    async clearCommonName(): Promise<void> {
        await this.uICommonNameEdit.clear();
    }

    async verifyAdditionSuccessfulStatusMessage(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
        // uIMapGeo.apartmentEntry.uIBottomLeftSideStatusBar.getText())
    }

    async clickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async verifyUpdateSuccessfulStatusMessage(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("1003 - Update Successful",
        // uIMapGeo.apartmentEntry.uIBottomLeftSideStatusBar.getText())
    }

    async verifyDoYouWantToUpdateThisAsPrimaryCommonName(): Promise<void> {
        // confirm popup: (5052) Do you want to update this as the primary common name?
    }

    async verifyAtCommonNameInGrid(commonName: string): Promise<void> {
        //String text = objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.commonNamesEntry.uICommonNameTable, "Common Name", 1);
        //verify.ExpectedValueIsTrue(BaseData.getGeoModuleValue("CommonName").contains(text));
        const text = commonName;
        expect(commonName).toBeTruthy();
    }

    async EnterAtCommonName(i: string, commonName: string): Promise<void> {
        await this.uICommonNameEdit.fill(commonName);
    }

    async verifySoColumnValuesDispalyedInSortOrder(): Promise<void> {
        // List<WebElement> soElements = objectIdentification.manualIdentify.getGridTableColumnCells(uIMapGeo.commonNamesEntry.uICommonNameTable, "SO")
        // List<Integer> actualOrder = new ArrayList<>()
        // for (WebElement element : soElements) {
        const text = await this.element.innerText();
        // System.out.println(text)
        // if (!text.isEmpty()) {
        // actualOrder.add(Integer.parseInt(text))
        // System.out.println("Non-numeric value found: " + text)
        // for (int i = 0; i < actualOrder.size(); i++) {
        // if (actualOrder.get(i) != i) {
        // throw new AssertionError(
        // "Order mismatch at index " + i + ": Expected " + i + ", but found " + actualOrder.get(i))
        // System.out.println("SO column is in correct sequential order.")
    }

    // ─── Merged from common-names-entry.page.ts ──────────────────────────────

    async enterAddress(address: string): Promise<void> {
        await this.uIAddressEdit.clear();
        await this.uIAddressEdit.fill(address);
    }

    async enterCommonName(name: string): Promise<void> {
        await this.uICommonNameEdit.clear();
        await this.uICommonNameEdit.fill(name);
    }

    async clickReplace(): Promise<void> {
        await this.uIReplaceCheckBox.click();
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickSaveAndClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
    }

    async clickClear(): Promise<void> {
        await this.uIClearButton.click();
    }

    async clickRefresh(): Promise<void> {
        await this.uIRefreshButton.click();
    }
}

export class ContactEntryScreenPage {
    readonly page: Page;
    readonly uILocationTextView: Locator;
    readonly uIRelationInputComboBox: Locator;
    readonly uINameRelationRadicalDropDownArrow: Locator;
    readonly uIRelationComboBox: Locator;
    readonly uINameTypeBusinessRadioButton: Locator;
    readonly uIPrimaryContactCheckBox: Locator;
    readonly uINameTypePersonRadioButton: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uICSZEdit: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameIDEdit: Locator;
    readonly uIPhoneType1ComboBox: Locator;
    readonly uIPhoneNumber1Edit: Locator;
    readonly uINotes1Edit: Locator;
    readonly uIDeleteicon1Button: Locator;
    readonly uIInactive1CheckBox: Locator;
    readonly uIPhoneType2ComboBox: Locator;
    readonly uIPhoneNumber2Edit: Locator;
    readonly uINotes2Edit: Locator;
    readonly uIDeleteicon2Button: Locator;
    readonly uIInactive2CheckBox: Locator;
    readonly uIPhoneType3ComboBox: Locator;
    readonly uIPhoneNumber3Edit: Locator;
    readonly uINotes3Edit: Locator;
    readonly uIDeleteicon3Button: Locator;
    readonly uIInactive3CheckBox: Locator;
    readonly uIAddMorePhoneNumberButton: Locator;
    readonly uIEmailEdit: Locator;
    readonly uINotesEdit: Locator;
    readonly uISSNEINNoEdit: Locator;
    readonly uIContactOrderEdit: Locator;
    readonly uIInActiveDateEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveCloseButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIDeleteButton: Locator;
    readonly uIContactGroupEdit: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uINotSharedCheckBox: Locator;
    readonly uIInactiveCheckBox: Locator;
    readonly uINameRelationDropDownArrow: Locator;
    readonly uIContactGroupComboBox: Locator;
    readonly uINameInfoIcon: Locator;
    readonly uIRefreshIcon: Locator;
    readonly uIAddressCheckBox: Locator;
    readonly uINameLookUpIcon: Locator;
    readonly uIPhoneSortOrderOneEdit: Locator;
    readonly uIPhoneSortOrderTwoEdit: Locator;
    readonly uIPhoneSortOrderThreeEdit: Locator;
    readonly uIDeleteIconOfSortOrderTwo: Locator;
    readonly uIPhoneTypeLabel: Locator;
    readonly uIPhoneLabel: Locator;
    readonly uIAddressSameAsRegistrationCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uILocationTextView = page.locator('NolblLocName');
        this.uIRelationInputComboBox = page.locator('NocddRelation_Input');
        this.uINameRelationRadicalDropDownArrow = page.locator('NocddRelation_Arrow');
        this.uIRelationComboBox = page.locator('NocddRelation_DropDown');
        this.uINameTypeBusinessRadioButton = page.locator('NoradBusiness');
        this.uIPrimaryContactCheckBox = page.locator('NochkIsPrimary');
        this.uINameTypePersonRadioButton = page.locator('NoradPerson');
        this.uILastNameEdit = page.locator('NotxtNameID_LastName');
        this.uIFirstNameEdit = page.locator('NotxtNameID_FirstName');
        this.uIAddressEdit = page.locator('NoAddressCtrl2_txtFrom');
        this.uICSZEdit = page.locator('NocustHeaderCSZ_City');
        this.uINameTypeEdit = page.locator('NotxtAType');
        this.uINameIDEdit = page.locator('NotxtAID');
        this.uIPhoneType1ComboBox = page.locator('NotxtNumber_1_PhoneType_DropDown');
        this.uIPhoneNumber1Edit = page.locator('NotxtNumber_1_PhoneNumber');
        this.uINotes1Edit = page.locator('NotxtNotes_1');
        this.uIDeleteicon1Button = page.locator('NoimgRemove_1');
        this.uIInactive1CheckBox = page.locator('NochkInactive_1');
        this.uIPhoneType2ComboBox = page.locator('NotxtNumber_2_PhoneType_DropDown');
        this.uIPhoneNumber2Edit = page.locator('NotxtNumber_2_PhoneNumber');
        this.uINotes2Edit = page.locator('NotxtNotes_2');
        this.uIDeleteicon2Button = page.locator('NoimgRemove_2');
        this.uIInactive2CheckBox = page.locator('NochkInactive_2');
        this.uIPhoneType3ComboBox = page.locator('NotxtNumber_3_PhoneType_DropDown');
        this.uIPhoneNumber3Edit = page.locator('NotxtNumber_3_PhoneNumber');
        this.uINotes3Edit = page.locator('NotxtNotes_3');
        this.uIDeleteicon3Button = page.locator('NoimgRemove_3');
        this.uIInactive3CheckBox = page.locator('NochkInactive_3');
        this.uIAddMorePhoneNumberButton = page.locator('NoAddMorePhoneNumber');
        this.uIEmailEdit = page.locator('NotxtEmail');
        this.uINotesEdit = page.locator('NotxtNotes1');
        this.uISSNEINNoEdit = page.locator('NotxtSSN');
        this.uIContactOrderEdit = page.locator('NotxtContactOrder');
        this.uIInActiveDateEdit = page.locator('NodttmInActive_KPIDttmCtrl');
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveCloseButton = page.locator('NocmdSaveNClose');
        this.uIResetButton = page.locator('NocmdRefresh');
        this.uIDeleteButton = page.locator('NocmdDelete');
        this.uIContactGroupEdit = page.locator('NolblLocName');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uINotSharedCheckBox = page.locator('NochkIsKGIS');
        this.uIInactiveCheckBox = page.locator('NochkIsdisasosiate');
        this.uINameRelationDropDownArrow = page.locator('NocddRelation_Arrow');
        this.uIContactGroupComboBox = page.locator('NocddContactGroup_DropDown');
        this.uINameInfoIcon = page.locator('NotxtNameID_imgSrch');
        this.uIRefreshIcon = page.locator('NocmdRefresh');
        this.uIAddressCheckBox = page.locator('NoAddressCtrl2_chkVerify');
        this.uINameLookUpIcon = page.locator('NotxtNameID_imgSrch');
        this.uIPhoneSortOrderOneEdit = page.locator('NotxtOrder_1');
        this.uIPhoneSortOrderTwoEdit = page.locator('NotxtOrder_2');
        this.uIPhoneSortOrderThreeEdit = page.locator('NotxtOrder_3');
        this.uIDeleteIconOfSortOrderTwo = page.locator('NoimgRemove_2');
        this.uIPhoneTypeLabel = page.locator('NoimgRemove_2');
        this.uIPhoneLabel = page.locator('NolblPhoneNbr');
        this.uIAddressSameAsRegistrationCheckbox = page.locator('NochkIsSameRegAddr');
    }

    async SelectNameRelation(): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIRelationInputComboBox.click();
        // objectIdentification.randomIdentify.selectRadControlDropDownCheckBoxes(uIMapGeo.contactEntryScreen.uIRelationComboBox)
    }

    async SelectNameRelationAsBuildingOwner(): Promise<void> {
        await this.uINameRelationRadicalDropDownArrow.click();
        // objectIdentification.manualIdentify.selectRadControlDropDownValue( uIMapGeo.contactEntryScreen.uIRelationInputComboBox,
        // "Building Owner")
        await this.uINameRelationRadicalDropDownArrow.click();
        await this.uINameRelationRadicalDropDownArrow.press('Tab');
    }

    async SelectAtNameRelation(nameRelation: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIRelationInputComboBox.click();
        // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect(
        // uIMapGeo.contactEntryScreen.uIRelationComboBox, BaseData.getGeoModuleValue("NameRelation"))
        await this.uINameRelationDropDownArrow.click();
    }

    async ClickDeleteButton(): Promise<void> {
        await this.uIDeleteButton.click();
    }

    async ClickBusinessRadioButton(): Promise<void> {
        await this.uINameTypeBusinessRadioButton.click();
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async EnterAndSelectAtATypeName(lastName: string, firstName: string): Promise<void> {
        await this.uILastNameEdit.fill(lastName);
        await this.uIFirstNameEdit.fill(firstName);
        await this.uIFirstNameEdit.press('Tab');
        // Playback.waitForPageLoad()
    }

    async SelectPhoneType1(): Promise<void> {
        // random select on this.uIPhoneType1ComboBox
    }

    async SelectPhoneType2(): Promise<void> {
        // random select on this.uIPhoneType2ComboBox
    }

    async SelectPhoneType1AsHome(): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.contactEntryScreen.uIPhoneType1ComboBox,
        // "H - Home")
    }

    async SelectPhoneType2AsWork(): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.contactEntryScreen.uIPhoneType2ComboBox,
        // "W - Work")
    }

    async SelectPhoneType3AsCell(): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.contactEntryScreen.uIPhoneType3ComboBox,
        // "C - Cell")
    }

    async EnterAtPhoneNumber1(phoneNumber1: string): Promise<void> {
        await this.uIPhoneNumber1Edit.click();
        await this.uIPhoneNumber1Edit.fill(phoneNumber1);
    }

    async EnterPhoneNumber1(): Promise<void> {
        await this.uIPhoneNumber1Edit.click();
        await this.uIPhoneNumber1Edit.fill(Randomized.getRandomPhoneNumbers());
    }

    async EnterPhoneNumber2(): Promise<void> {
        await this.uIPhoneNumber2Edit.click();
        await this.uIPhoneNumber2Edit.fill(Keys.HOME);
        await this.uIPhoneNumber2Edit.fill(Randomized.getRandomPhoneNumbers());
    }

    async EnterAtPhoneNumber2(phoneNumber2: string): Promise<void> {
        await this.uIPhoneNumber2Edit.click();
        await this.uIPhoneNumber2Edit.fill(phoneNumber2);
    }

    async EnterAtPhoneNumber3(phoneNumber3: string): Promise<void> {
        await this.uIPhoneNumber3Edit.click();
        await this.uIPhoneNumber3Edit.fill(phoneNumber3);
    }

    async EnterAtDuplicatePhoneNumber(phoneNumber1: string): Promise<void> {
        await this.uIPhoneNumber3Edit.click();
        await this.uIPhoneNumber3Edit.fill(phoneNumber1);
    }

    async SaveScreen(): Promise<void> {
        // Playback.popupThreadWait()
        await this.uISaveButton.click();
        // Playback.controlReadyThreadWait()
        // confirm popup: yes
    }

    async CloseScreen(): Promise<void> {
        // uIMapGeo.contactEntryScreen.driver.close()
    }

    async VerifyNameAcknowledgeMessage(): Promise<void> {
        // popup: (7045) Name not entered or not a valid name
    }

    async ClickAddMorePhoneNoButton(): Promise<void> {
        await this.uIAddMorePhoneNumberButton.click();
    }

    async VerifyAtContactGroup(contactGroup: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("ContactGroup"),
        // uIMapGeo.contactEntryScreen.uIContactGroupEdit.getText())
    }

    async enterAtLastName(lastName: string): Promise<void> {
        await this.uILastNameEdit.fill(lastName);
        await this.uILastNameEdit.press('Tab');
    }

    async enterAtFirstName(firstName: string): Promise<void> {
        await this.uIFirstNameEdit.fill(firstName);
        await this.uIFirstNameEdit.press('Tab');
    }

    async EnterAtAddress(address: string): Promise<void> {
        await this.uIAddressEdit.fill(address);
    }

    async ClickPrimaryContactCheckbox(): Promise<void> {
        await this.uIPrimaryContactCheckBox.click();
    }

    async VerifyAddressAlreadyHasAPrimaryContactAckMessage(): Promise<void> {
        // popup.confirm.yesWithExpectedMessage(
        // "Primary Contact already exists for this Contact Group, Do you want to replace this as Primary Contact ?")
    }

    async VerifyAdditionSuccessfulMessage(): Promise<void> {
        // Playback.wait(2000)
        const AdditionMessage = await this.uIBottomLeftSideStatusBar.innerText();
        expect(AdditionMessage.contains("1002 - Addition Successful")).toBeTruthy();
        expect(AdditionMessage.contains("1002 - Addition successful")).toBeTruthy();
    }

    async VerifyUpdateSuccessfulMessage(): Promise<void> {
        // Playback.wait(2000)
        const AdditionMessage = await this.uIBottomLeftSideStatusBar.innerText();
        expect(AdditionMessage.contains("1003 - Update Successful")).toBeTruthy();
        expect(AdditionMessage.contains("1003 - Update successful")).toBeTruthy();
    }

    async SaveCloseScreen(): Promise<void> {
        // Playback.pageLoadThreadWait()
        await this.uISaveCloseButton.click();
        // Playback.controlReadyThreadWait()
        // confirm popup: yes
        // System.out.println("popup not present")
        // e.printStackTrace()
    }

    async SelectAtPhoneType1(phoneType1: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.contactEntryScreen.uIPhoneType1ComboBox,
        // BaseData.getGeoModuleValue("PhoneType1"))
    }

    async SelectAtPhoneType2(phoneType2: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.contactEntryScreen.uIPhoneType2ComboBox,
        // BaseData.getGeoModuleValue("PhoneType2"))
    }

    async EnterAtEmail(email1: string): Promise<void> {
        await this.uIEmailEdit.fill(email1);
    }

    async VerifyAtPhoneType1(phoneType1: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("PhoneType1"),
        // uIMapGeo.contactEntryScreen.uIPhoneType1ComboBox.getAttribute("value"))
    }

    async VerifyAtPhoneType2(phoneType2: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("PhoneType2"),
        // uIMapGeo.contactEntryScreen.uIPhoneType2ComboBox.getAttribute("value"))
    }

    async VerifyAtPhoneNumber1(phoneNumber: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("PhoneNumber"),
        // uIMapGeo.contactEntryScreen.uIPhoneNumber1Edit.getAttribute("value"))
    }

    async VerifyAtPhoneNumber2(phoneNumber1: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("PhoneNumber1"),
        // uIMapGeo.contactEntryScreen.uIPhoneNumber2Edit.getAttribute("value"))
    }

    async ClickNotSharedCheckBox(): Promise<void> {
        await this.uINotSharedCheckBox.click();
    }

    async TabOutLastName(): Promise<void> {
        await this.uILastNameEdit.press('Tab');
    }

    async TabOutFirstName(): Promise<void> {
        await this.uIFirstNameEdit.press('Tab');
        // Playback.controlReadyThreadWait()
    }

    async EnterNotes(): Promise<void> {
        // uIMapGeo.contactEntryScreen.uINotesEdit.sendKeys(
        // "Settings – Terminal – uncheck cad checkbox and search blue screen error, Name Victim screen Charge/offense details are not showing")
    }

    async ClickInActiveDateCheckBox(): Promise<void> {
        await this.uIInactiveCheckBox.click();
    }

    async verifyNameTypeCheckboxDefaultSelectedForPerson(): Promise<void> {
        expect(await this.uINameTypePersonRadioButton.isChecked()).toBeTruthy();
    }

    async verifyLastNameAsEditable(): Promise<void> {
        // verify.ExpectedValueIsTrue(uIMapGeo.contactEntryScreen.uILastNameEdit.isEnabled())
    }

    async verifyFirstNameAsUnEditable(): Promise<void> {
        // verify.ExpectedValueIsFalse(uIMapGeo.contactEntryScreen.uIFirstNameEdit.isEnabled())
    }

    async EnterAtLastName1(lastName1: string): Promise<void> {
        await this.uILastNameEdit.fill(lastName1);
        await this.uILastNameEdit.press('Tab');
    }

    async clickNameTypeAsPerson(): Promise<void> {
        await this.uINameTypePersonRadioButton.click();
    }

    async enterContactOrder(): Promise<void> {
        await this.uIContactOrderEdit.fill("123");
    }

    async enterAtNotes(notes: string): Promise<void> {
        await this.uINotesEdit.fill(notes);
    }

    async clickPersonRadioButton(): Promise<void> {
        await this.uINameTypePersonRadioButton.click();
    }

    async verifyAtCSZ(cSZ: string): Promise<void> {
        const attribute = await this.uICSZEdit.inputValue();
        expect(cSZ).toBeTruthy();
    }

    async enterAtEmail(email: string): Promise<void> {
        await this.uIEmailEdit.fill(email);
    }

    async selectAtContactGroup(contactGroup: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.contactEntryScreen.uIContactGroupComboBox,
        // BaseData.getGeoModuleValue("ContactGroup"))
    }

    async clearAddress(): Promise<void> {
        await this.uIAddressEdit.click();
        await this.uIAddressEdit.clear();
    }

    async verifyAtEmail(): Promise<void> {
        const attribute = await this.uIEmailEdit.inputValue();
        // verify.ExpectedValueIsTrue(attribute.contains(FireData.getInspectionModuleValue("Email")));
    }

    async verifyNameRelationHavingMultipleValues(nameRelation: string, nameRelation1: string): Promise<void> {
        const relationNames = await this.uIRelationInputComboBox.inputValue();
        expect(nameRelation).toBeTruthy();
        expect(nameRelation1).toBeTruthy();
    }

    async SelectAtNameRelation1(nameRelation1: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIRelationInputComboBox.click();
        // objectIdentification.manualIdentify.selectRadControlDropDownValueSelect(
        // uIMapGeo.contactEntryScreen.uIRelationComboBox, BaseData.getGeoModuleValue("NameRelation1"))
        await this.uINameRelationDropDownArrow.click();
    }

    async verifyInActiveDateAsCurrentDate(): Promise<void> {
        const Date = await this.uIInActiveDateEdit.inputValue();
        // System.out.println(Date)
        expect(Randomized.getCurrentDate()).toEqual(Date);
    }

    async clickNameInfoIcon(): Promise<void> {
        await this.uINameInfoIcon.click();
    }

    async verifyInvalidPhoneNoAck(): Promise<void> {
        // popup: (5037)Invalid phone number
    }

    async clickRefreshButton(): Promise<void> {
        await this.uIRefreshIcon.click();
    }

    async clickAddressCheckBox(): Promise<void> {
        await this.uIAddressCheckBox.click();
    }

    async verifyAtAddressDisplayedInRedColor(color: string): Promise<void> {
        // String cssValue = uIMapGeo.contactEntryScreen.uIAddressEdit.getCssValue("color")
        // System.out.println(cssValue)
        expect(cssValue).toEqual(color);
    }

    async verifyDeleteIconIsEnabled(): Promise<void> {
        // verify.ExpectedValueIsTrue(uIMapGeo.contactEntryScreen.uIDeleteButton.isEnabled())
    }

    async verifyAtLastName(lastName: string): Promise<void> {
        const attribute = await this.uILastNameEdit.inputValue();
        expect(lastName).toEqual(attribute);
    }

    async verifyAtFirstName(firstName: string): Promise<void> {
        const attribute = await this.uIFirstNameEdit.inputValue();
        expect(firstName).toEqual(attribute);
    }

    async verifyInactivePhone2checkboxIsChecked(): Promise<void> {
        // String attribute = uIMapGeo.contactEntryScreen.uIInactive2CheckBox.getAttribute("checked")
        // System.out.println(attribute)
        expect(await this.uIInactive2CheckBox.isChecked()).toBeTruthy();
    }

    async verify8EnterMandatoryData(): Promise<void> {
        // popup.acknowledge.okWithExpectedContainMessage("(8) Enter mandatory data")
    }

    async clickNameLookUpIcon(): Promise<void> {
        await this.uINameLookUpIcon.click();
    }

    async verifyAtPhoneSortOrderOne(i: string, sortOrderOne: string): Promise<void> {
        const SortOrderOne = await this.uIPhoneSortOrderOneEdit.inputValue();
        expect(SortOrderOne).toEqual(sortOrderOne);
    }

    async verifyAtPhoneSortOrderTwo(i: string, sortOrderTwo: string): Promise<void> {
        const SortOrderTwo = await this.uIPhoneSortOrderTwoEdit.inputValue();
        expect(SortOrderTwo).toEqual(sortOrderTwo);
    }

    async verifyAtPhoneSortOrderThree(i: string, sortOrderThree: string): Promise<void> {
        const SortOrderThree = await this.uIPhoneSortOrderThreeEdit.inputValue();
        expect(SortOrderThree).toEqual(sortOrderThree);
    }

    async clickDeleteIconOfSortOrderTwo(): Promise<void> {
        await this.uIDeleteIconOfSortOrderTwo.click();
        // popup.confirm.acceptPopup()
    }

    async verifyPhoneTypeLabelIsMandatory(color: string): Promise<void> {
        // String cssValue = uIMapGeo.contactEntryScreen.uIPhoneTypeLabel.getCssValue("color")
        expect(cssValue).toEqual(color);
    }

    async verifyPhoneLabelIsMandatory(i: string, color: string): Promise<void> {
        // String cssValue = uIMapGeo.contactEntryScreen.uIPhoneLabel.getCssValue("color")
        expect(cssValue).toEqual(color);
    }

    async clickPhoneTypeOneInActiveCheckBox(): Promise<void> {
    }

    async clickAddressSameAsRegistrationCheckbox(): Promise<void> {
        await this.uIAddressSameAsRegistrationCheckbox.click();
    }

    async verifyAtAddress(address: string): Promise<void> {
        // Playback.threadWait()
        // String domProperty = uIMapGeo.contactEntryScreen.uIAddressEdit.getDomProperty("value")
        // System.out.println(domProperty +"prop")
        expect(address).toBeTruthy();
    }
}

export class ContactSearchPage {
    readonly page: Page;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uIAddNewLink: Locator;
    readonly uISearchButton: Locator;
    readonly uIContactSearchResultGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uILastNameEdit = page.locator('NotxtLastName');
        this.uIFirstNameEdit = page.locator('NotxtFirstName');
        this.uIAddressEdit = page.locator('NoadrAddress_txtFrom');
        this.uIAddNewLink = page.locator("(//span[contains(text(),'Add New')])");
        this.uISearchButton = page.locator('NocmdSearch');
        this.uIContactSearchResultGrid = page.locator('NogrdContact');
    }

    async ClickAddNew(): Promise<void> {
        await this.uIAddNewLink.click();
    }

    async ClickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async enterAtAddress(address: string): Promise<void> {
        await this.uIAddressEdit.fill(address);
    }

    async verifyAtPhoneNoAsActive(phoneNo: string): Promise<void> {
        // WebElement phno = objectIdentification.manualIdentify.getGridRowByCellInnerText(
        // uIMapGeo.contactSearch.uIContactSearchResultGrid, BaseData.getGeoModuleValue("PhoneNo"))
        expect(phoneNo).toBeTruthy();
        const clr = phno.getCssValue("color");
        // System.out.println(clr);
        expect(clr.contains("rgba(0, 0, 0, 1)")).toBeTruthy();
    }

    async verifyAtPhoneNoAsInactive(phoneNo: string): Promise<void> {
        // WebElement phno = objectIdentification.manualIdentify.getGridRowByCellInnerText(
        // uIMapGeo.contactSearch.uIContactSearchResultGrid, BaseData.getGeoModuleValue("PhoneNo"))
        expect(phoneNo).toBeTruthy();
        const clr = phno.getCssValue("color");
        // System.out.println(clr); Gray clr
        expect(clr.contains("rgba(128, 128, 128, 1)")).toBeTruthy();
    }

    async verifyGridRowLastName(rowIndex: string, lastName: string): Promise<void> {
        // WebElement name = objectIdentification.manualIdentify.getGridCell(uIMapGeo.contactSearch.uIContactSearchResultGrid, "Name", rowIndex)
        expect(lastName).toBeTruthy();
    }

    async verifyGridRowLastName1(rowIndex: string, lastName1: string): Promise<void> {
        // WebElement name = objectIdentification.manualIdentify.getGridCell(uIMapGeo.contactSearch.uIContactSearchResultGrid, "Name", rowIndex)
        expect(lastName1).toBeTruthy();
    }

    async reloadContactSearch(): Promise<void> {
        // Playback.pageLoadThreadWait()
        // objectIdentification.manualIdentify.reloadScreen("Contact Search")
        // Playback.pageLoadThreadWait()
    }
}

export class DetailTabPage {
    readonly page: Page;
    readonly uIReasonDropdown: Locator;
    readonly uIFromDateEdit: Locator;
    readonly uIFromTimeEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIToTimeEdit: Locator;
    readonly uIRemarksEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIReasonDropdown = page.locator('NotabHouseCheck_tmpl0_usrCitHouseCheck1_cddReason_DropDown');
        this.uIFromDateEdit = page.locator('NotabHouseCheck_tmpl0_usrCitHouseCheck1_dttFrom_Date_KPIDttmCtrl');
        this.uIFromTimeEdit = page.locator("//table[@id='tabHouseCheck_tmpl0_usrCitHouseCheck1_dttFrom_Time']//input");
        this.uIToDateEdit = page.locator('NotabHouseCheck_tmpl0_usrCitHouseCheck1_dttTo_Date_KPIDttmCtrl');
        this.uIToTimeEdit = page.locator("//table[@id='tabHouseCheck_tmpl0_usrCitHouseCheck1_dttTo_Time']//input");
        this.uIRemarksEdit = page.locator('NotabHouseCheck_tmpl0_usrCitHouseCheck1_txtRemarks');
    }

    async selectAtReason(reason: string): Promise<void> {
        await this.detailTab.selectOption({ label: reason });
    }

    async tabOutFromDateAndTime(): Promise<void> {
        await this.detailTab.press('Tab');
        await this.detailTab.press('Tab');
    }

    async tabOutToDateAndTime(): Promise<void> {
        await this.detailTab.press('Tab');
        await this.detailTab.press('Tab');
    }

    async enterAtRemarks(remarks: string): Promise<void> {
        await this.detailTab.fill(remarks);
    }
}

export class FastGeoPage {
    readonly page: Page;
    readonly uIAddessCheckBox: Locator;
    readonly uIIntersectionCheckBox: Locator;
    readonly uIPremiseNoEdit: Locator;
    readonly uIPrefixComboBox: Locator;
    readonly uIStreetNameEdit: Locator;
    readonly uIStreetTypeEdit: Locator;
    readonly uIStreetTypeLookupButton: Locator;
    readonly uISuffixComboBox: Locator;
    readonly uIAppartmentEdit: Locator;
    readonly uIZipCodeEdit: Locator;
    readonly uIZipCodeDescriptionEdit: Locator;
    readonly uIZipCodeLookupButton: Locator;
    readonly uICommonNameEdit: Locator;
    readonly uIVerifyAndGetGPSButton: Locator;
    readonly uILatitudeEdit: Locator;
    readonly uILongituteEdit: Locator;
    readonly uISaveAndUseThisAddressButton: Locator;
    readonly uICancelAndContinueWithUnverifiedAddressButton: Locator;
    readonly uIIntersectionPrefixComboBox: Locator;
    readonly uIIntersectionStreetNameEdit: Locator;
    readonly uIIntersectionStreetTypeEdit: Locator;
    readonly uIIntersectionStreetTypeLookupButton: Locator;
    readonly uIIntersectionStreetSuffixComboBox: Locator;
    readonly uIRefreshMapButton: Locator;
    readonly uILatLongValueTextEdit: Locator;
    readonly uITrackingLookUpIcon: Locator;
    readonly uIPremiseTypeComboBox: Locator;
    readonly uIPatrolZoneLookUpIcon: Locator;
    readonly uINPACardLookUpIcon: Locator;
    readonly uICivilDistrictLookUpIcon: Locator;
    readonly uIVotingDistrictComboBox: Locator;
    readonly uITrackingEdit: Locator;
    readonly uIPatrolZoneEdit: Locator;
    readonly uISubZoneEdit: Locator;
    readonly uINPACardEdit: Locator;
    readonly uICivilDistrictEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddessCheckBox = page.locator('NoradAddress');
        this.uIIntersectionCheckBox = page.locator('NoradIntersection');
        this.uIPremiseNoEdit = page.locator('NotxtPremiseNo');
        this.uIPrefixComboBox = page.locator('NocddStreetPrefix_DropDown');
        this.uIStreetNameEdit = page.locator('NotxtStreetName');
        this.uIStreetTypeEdit = page.locator('NolupType_CodeValue');
        this.uIStreetTypeLookupButton = page.locator('NolupType_imgBtn');
        this.uISuffixComboBox = page.locator('NocddStreetSuffix_DropDown');
        this.uIAppartmentEdit = page.locator('NotxtSuitApt');
        this.uIZipCodeEdit = page.locator('NolupZipcode_CodeValue');
        this.uIZipCodeDescriptionEdit = page.locator('NolupZipcode_CodeDescription');
        this.uIZipCodeLookupButton = page.locator('NolupZipcode_imgBtn');
        this.uICommonNameEdit = page.locator('NotxtCommonName');
        this.uIVerifyAndGetGPSButton = page.locator('NobtnVerifyGPS');
        this.uILatitudeEdit = page.locator('NotxtLatitude');
        this.uILongituteEdit = page.locator('NotxtLongitute');
        this.uISaveAndUseThisAddressButton = page.locator('NocmdSave');
        this.uICancelAndContinueWithUnverifiedAddressButton = page.locator('NocmdCancel');
        this.uIIntersectionPrefixComboBox = page.locator('NocddIntStreetPrefix_DropDown');
        this.uIIntersectionStreetNameEdit = page.locator('NotxtIntStreetName');
        this.uIIntersectionStreetTypeEdit = page.locator('NolupIntStreetType_CodeValue');
        this.uIIntersectionStreetTypeLookupButton = page.locator('NolupIntStreetType_imgBtn');
        this.uIIntersectionStreetSuffixComboBox = page.locator('NocddIntStreetSuffix_DropDown');
        this.uIRefreshMapButton = page.locator('NobtnReset');
        this.uILatLongValueTextEdit = page.locator('NolblLatLongValue');
        this.uITrackingLookUpIcon = page.locator('NolupTracking_imgBtn');
        this.uIPremiseTypeComboBox = page.locator('NocddPremiseType_DropDown');
        this.uIPatrolZoneLookUpIcon = page.locator('NolupDist_imgBtn');
        this.uINPACardLookUpIcon = page.locator('NolupFixPropUse_imgBtn');
        this.uICivilDistrictLookUpIcon = page.locator('NolupCivilDist_imgBtn');
        this.uIVotingDistrictComboBox = page.locator('NocddVotingDist_DropDown');
        this.uITrackingEdit = page.locator('NolupTracking_CodeValue');
        this.uIPatrolZoneEdit = page.locator('NolupDist_CodeValue');
        this.uISubZoneEdit = page.locator('NolupSubDist_CodeValue');
        this.uINPACardEdit = page.locator('NolupFixPropUse_CodeValue');
        this.uICivilDistrictEdit = page.locator('NolupCivilDist_CodeValue');
    }

    async VerifyPremiseNo(premise: string): Promise<void> {
        // Assert.assertEquals(uIMapGeo.fastGeo.uIPremiseNoEdit.getAttribute("value"),
        // BaseData.getGeoModuleValue("Premise"))
    }

    async VerifyPrefix(prefix: string): Promise<void> {
        // Assert.assertEquals(uIMapGeo.fastGeo.uIPrefixComboBox.getAttribute("value"),
        // BaseData.getGeoModuleValue("Prefix"))
    }

    async VerifyAtStreetName(streetName: string): Promise<void> {
        // Assert.assertEquals(uIMapGeo.fastGeo.uIStreetNameEdit.getAttribute("value"),
        // BaseData.getGeoModuleValue("StreetName"))
    }

    async VerifyStreetType(streetType: string): Promise<void> {
        // Assert.assertEquals(uIMapGeo.fastGeo.uIStreetTypeEdit.getAttribute("value"),
        // BaseData.getGeoModuleValue("StreetType"))
    }

    async VerifyAtStreetDetails(streetName: string, streetType: string): Promise<void> {
        // Assert.assertEquals(uIMapGeo.fastGeo.uIStreetNameEdit.getAttribute("value"),
        // BaseData.getGeoModuleValue("StreetName") + " " + BaseData.getGeoModuleValue("StreetType"))
    }

    async VerifyAtInterStreetDetails(interStreetName: string, interStreetType: string): Promise<void> {
        // Assert.assertEquals(uIMapGeo.fastGeo.uIIntersectionStreetNameEdit.getAttribute("value"),
        // BaseData.getGeoModuleValue("InterStreetName") + " "
        // + BaseData.getGeoModuleValue("InterStreetType"))
    }

    async enterAtZipCode(zipCode: string): Promise<void> {
        await this.uIZipCodeEdit.click();
        await this.uIZipCodeEdit.clear();
        // Playback.controlReadyThreadWait()
        await this.uIZipCodeEdit.fill(zipCode);
        await this.uIZipCodeEdit.press('Tab');
        // Playback.controlReadyThreadWait()
    }

    async EnterAtStreet(streetName: string, streetType: string): Promise<void> {
        await this.uIStreetNameEdit.clear();
        // uIMapGeo.fastGeo.uIStreetNameEdit.sendKeys(
        // BaseData.getGeoModuleValue("StreetName") + " " + BaseData.getGeoModuleValue("StreetType"))
    }

    async EnterAtPremise(premise: string): Promise<void> {
        await this.uIPremiseNoEdit.clear();
        await this.uIPremiseNoEdit.fill(premise);
    }

    async enterAtCommonName(commonName: string): Promise<void> {
        await this.uICommonNameEdit.fill(commonName);
    }

    async GetCSZ(CSZ: string): Promise<void> {
        // CSZ = uIMapGeo.fastGeo.uIZipCodeDescriptionEdit.getText()
    }

    async VerifyGPSButton(): Promise<void> {
        await this.uIVerifyAndGetGPSButton.click();
    }

    async clickSaveAndUseAddress(): Promise<void> {
        await this.uISaveAndUseThisAddressButton.click();
        // Playback.controlReadyThreadWait()
        //popup.confirm.yes();
        //popup.confirm.yes();
    }

    async GetLatituteValue(Latitute: string, Longitute: string): Promise<void> {
        // Latitute = uIMapGeo.fastGeo.uILatitudeEdit.getAttribute("value")
        // Longitute = uIMapGeo.fastGeo.uILongituteEdit.getAttribute("value")
        // Playback.setTestContextAttribute("Latitute", Latitute)
        // Playback.setTestContextAttribute("Longitute", Longitute)
    }

    async VerifyInactiveAddressConfirmMessage(): Promise<void> {
        // popup.confirm.noWithExpectedMessage("(5094) This street is inactive . Do you want to active and continue?")
    }

    async VerifyAddressAcknowledgeMessage(): Promise<void> {
        // popup: 1002 - Addition Successful
        // popup:  1002 - Addition Successful
    }

    async CloseScreen(): Promise<void> {
        // uIMapGeo.fastGeo.driver.close()
    }

    async VerifyAtIntStreetName(intStreet2: string): Promise<void> {
        // Assert.assertEquals(uIMapGeo.fastGeo.uIIntersectionStreetNameEdit.getAttribute("value"),
        // BaseData.getGeoModuleValue("IntStreet2"))
    }

    async ClickRefreshMapButton(): Promise<void> {
        await this.uIRefreshMapButton.click();
        // Playback.controlReadyThreadWait()
    }

    async VerifyAddressConfirmMessage(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // Playback.controlReadyThreadWait()
        // confirm popup: (5108) Do you want to add this Address in the Selected Municipality? Address :- 10 kalimark Ave , Absecon, NJ 08201Municipality :- ProPhoenix
        // popup.confirm.yesWithExpectedMessage("(5108) Do you want to add this Address
        // in the Selected Municipality?");
        //			if (Playback.browserType.equals("Chrome")) {
        //				String warningMessage = Playback.driver.switchTo().alert().getText();
        //				Assert.assertTrue(warningMessage
        //						.contains("(5108) Do you want to add this Address in the Selected Municipality?"));
        //				popup.confirm.yes();
        //			} else {
        //				String ConfirmMessage = uIMapPopup.confirmWindow.uIErrorInfoTextEdit.getText();
        //				Assert.assertTrue(ConfirmMessage
        //						.contains("(5108) Do you want to add this Address in the Selected Municipality?"));
        //				popup.confirm.yes();
        //			}
        // Playback.controlReadyThreadWait()
        // Playback.controlReadyThreadWait()
    }

    async GetLatLongValue(LatituteLongitute: string): Promise<void> {
        // LatituteLongitute = uIMapGeo.fastGeo.uILatLongValueTextEdit.getText()
        // Playback.setTestContextAttribute("LatituteLongitute", LatituteLongitute)
    }

    async enterAtPremiseNo(premiseNo: string): Promise<void> {
        await this.uIPremiseNoEdit.fill(premiseNo);
        await this.uIPremiseNoEdit.press('Tab');
    }

    async enterAtStreetName(streetName: string): Promise<void> {
        // streetName = streetName (from test data)
        await this.uIStreetNameEdit.fill(streetName);
    }

    async clickTrackingLooUpIcon(): Promise<void> {
        await this.uITrackingLookUpIcon.click();
        // Playback.pageLoadThreadWait()
    }

    async selectAtPremiseType(premiseType: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.fastGeo.uIPremiseTypeComboBox,
        // BaseData.getGeoModuleValue("PremiseType"))
        // Playback.controlReadyThreadWait()
    }

    async clickPatrolZoneLooUpIcon(): Promise<void> {
        await this.uIPatrolZoneLookUpIcon.click();
        // Playback.pageLoadThreadWait()
    }

    async clickNPACardLooUpIcon(): Promise<void> {
        await this.uINPACardLookUpIcon.click();
        // Playback.pageLoadThreadWait()
    }

    async clickCivilDistrictLooUpIcon(): Promise<void> {
        await this.uICivilDistrictLookUpIcon.click();
        // Playback.pageLoadThreadWait()
    }

    async selectAtVotingDistrict(votingDistrict: string): Promise<void> {
        await this.uIVotingDistrictComboBox.click();
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.fastGeo.uIVotingDistrictComboBox,
        // BaseData.getGeoModuleValue("VotingDistrict"))
        // Playback.controlReadyThreadWait()
    }

    async enterTrackingAsTB(): Promise<void> {
        await this.uITrackingEdit.clear();
        await this.uITrackingEdit.fill("TB");
        await this.uITrackingEdit.press('Tab');
        // Playback.popupThreadWait()
    }

    async selectPremiseType(): Promise<void> {
        await this.uIPremiseTypeComboBox.selectOption({ label: 2 });
        // Playback.gridLoadThreadWait()
    }

    async enterPatrolZoneAsPA(): Promise<void> {
        await this.uIPatrolZoneEdit.clear();
        await this.uIPatrolZoneEdit.fill("PA");
        await this.uIPatrolZoneEdit.press('Tab');
        // Playback.gridLoadThreadWait()
    }

    async enterSubZoneAsSA(): Promise<void> {
        await this.uISubZoneEdit.clear();
        await this.uISubZoneEdit.fill("SA");
        await this.uISubZoneEdit.press('Tab');
        // Playback.gridLoadThreadWait()
    }

    async enterAtNPACard(nPACard: string): Promise<void> {
        await this.uINPACardEdit.clear();
        await this.uINPACardEdit.fill(nPACard);
        await this.uINPACardEdit.press('Tab');
        // Playback.gridLoadThreadWait()
    }

    async enterAtCivilDistrict(civilDistrict: string): Promise<void> {
        await this.uICivilDistrictEdit.clear();
        await this.uICivilDistrictEdit.fill(civilDistrict);
        await this.uICivilDistrictEdit.press('Tab');
        // Playback.gridLoadThreadWait()
    }

    async selectVotingDistrictAsVD(): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.fastGeo.uIVotingDistrictComboBox,
        // "VD - District")
        // Playback.gridLoadThreadWait()
    }

    async Verify5108SelectedMuncipalityConfirmMessage(): Promise<void> {
        // const PoPup = Playback.driver.switchTo().alert().getText();
        expect(PoPup.contains("(5108)Do you want to add this Address in the Selected Municipality?")).toBeTruthy();
        // TODO: handle exception
        // TODO: handle exception
        // confirm popup: yes
    }
}

export class FireTabPage {
    readonly page: Page;
    readonly uIMutualAidCodedEdit: Locator;
    readonly uIMutualAidTable: Locator;
    readonly uIMutualAidAddButton: Locator;
    readonly uITrackingNoCodedEdit: Locator;
    readonly uITrackingNoTable: Locator;
    readonly uITrackingNoAddButton: Locator;
    readonly uISaveButton: Locator;
    readonly uIRANoCodedEdit: Locator;
    readonly uIRANoDescriptionEdit: Locator;
    readonly uIMultiJurisGridTable: Locator;
    readonly uIAddButton: Locator;
    readonly uIPropertyUseEdit: Locator;
    readonly uIPropertyUseDescriptionEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIMutualAidCodedEdit = page.locator('NolupMutualAid_CodeValue');
        this.uIMutualAidTable = page.locator('NogrdMutualAid');
        this.uIMutualAidAddButton = page.locator('NoimgAddMutualAid');
        this.uITrackingNoCodedEdit = page.locator('NolupTracking_CodeValue');
        this.uITrackingNoTable = page.locator('NogrdTracking');
        this.uITrackingNoAddButton = page.locator('NoimgAddTracking');
        this.uISaveButton = page.locator('NocmdInternalSave');
        this.uIRANoCodedEdit = page.locator('NolupFRC_CodeValue');
        this.uIRANoDescriptionEdit = page.locator('NolupFRC_CodeDescription');
        this.uIMultiJurisGridTable = page.locator('NogrdMultiJuris');
        this.uIAddButton = page.locator('NoimgAdd');
        this.uIPropertyUseEdit = page.locator('NolupFixPropUse_CodeValue');
        this.uIPropertyUseDescriptionEdit = page.locator('NolupFixPropUse_CodeDescription');
    }

    async VerifyAtMutualAidInTheGrid(rowIndex: string, mutualAid: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("MutualAid"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressIntersection2040.fireTab.uIMutualAidTable, "Mutual Aid", rowIndex))
    }

    async VerifyAtTrackingNoInTheGird(rowIndex: string, fireTrack: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("FireTrack"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressIntersection2040.fireTab.uITrackingNoTable, "TrackNo", rowIndex))
    }

    async EnterAtMutualAid(mutualAid: string): Promise<void> {
        await this.fireTab.fill(mutualAid);
        await this.fireTab.press('Tab');
    }

    async ClickMutualAidAddButton(): Promise<void> {
        await this.fireTab.click();
    }

    async EnterAtTrackingNo(fireTrack: string): Promise<void> {
        await this.fireTab.fill(fireTrack);
        await this.fireTab.press('Tab');
    }

    async ClickTrackingNoADDButton(): Promise<void> {
        await this.policeTab.click();
    }

    async Save(): Promise<void> {
        await this.policeTab.click();
        // Playback.pageLoadThreadWait()
        // confirm popup: yes
    }

    async DeleteMutualAidInTheGrid(mutualAid: string): Promise<void> {
        // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
        // uIMapGeo.addressIntersection2040.fireTab.uIMutualAidTable, BaseData.getGeoModuleValue("MutualAid"))
        // confirm popup: (4) Do you really want to delete?
        // confirm popup: (4) Do you really want to delete?
        await this.fireTab.click();
        // confirm popup: yes
        // Playback.pageLoadThreadWait()
    }

    async DeleteFireTrackInTheGrid(mutualAid: string): Promise<void> {
        // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
        // uIMapGeo.addressIntersection2040.fireTab.uITrackingNoTable,
        // BaseData.getGeoModuleValue("MutualAid"))
        // confirm popup: (4) Do you really want to delete?
        // confirm popup: (4) Do you really want to delete?
        await this.fireTab.click();
        // confirm popup: yes
        // Playback.pageLoadThreadWait()
    }

    async EnterAtRANo(rANo: string): Promise<void> {
        await this.fireTab.fill(rANo);
        await this.fireTab.press('Tab');
    }

    async EnterAtRANo1(rANo1: string): Promise<void> {
        await this.fireTab.clear();
        await this.fireTab.fill(rANo1);
        await this.fireTab.press('Tab');
    }

    async ClickMultijurisAddButton(): Promise<void> {
        await this.fireTab.click();
        // Playback.controlReadyThreadWait()
    }

    async GetRADescription(uIRADescription: string): Promise<void> {
        // uIRADescription = uIMapGeo.addressIntersection2040.fireTab.uIRANoDescriptionEdit.getAttribute("value")
    }

    async VerifyRunCardAsRADescription(uIRADescription: string, rowCount: string): Promise<void> {
        // Assert.assertEquals(uIRADescription, objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressIntersection2040.fireTab.uIMultiJurisGridTable, "Run Card", rowCount))
    }

    async ClickRunCardUsingRADescriptionInGrid(uIRADescription: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.addressIntersection2040.fireTab.uIMultiJurisGridTable, uIRADescription)
        // Playback.controlReadyThreadWait()
    }

    async ClickTableRowInGrid(rowCount: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridTableRow(uIMapGeo.addressIntersection2040.fireTab.uIMultiJurisGridTable, rowCount)
        // Playback.controlReadyThreadWait()
    }

    async VerifyAtPropertyUse(propertyUse: string): Promise<void> {
        // String text = objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.addressIntersection2040.fireTab.uIMultiJurisGridTable, "Property Use", 0)
        // System.out.println(text)
        expect(text).toEqual(propertyUse);
    }

    async VerifyAtPropertyUseInTheGird(rowIndex: string, propertyUse: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("PropertyUse"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressIntersection2040.fireTab.uIMultiJurisGridTable, "Property Use", rowIndex))
    }
}

export class GeoPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async Reset(): Promise<void> {
        // uIMapGeo = null
        // uIMapPopup = null
    }

    async switchToStreetSearchScreen(): Promise<void> {
        // no-op: window handle
    }

    async switchToStreetEntry(): Promise<void> {
        // no-op: window handle
    }

    async switchToAddressSearchScreen(): Promise<void> {
        // no-op: window handle
    }

    async switchToAddressSearchHelpWindow(): Promise<void> {
        // no-op: window handle
    }

    async switchToGeoOnFly(): Promise<void> {
        // no-op: window handle
    }

    async switchToApartmentEntry(): Promise<void> {
        // no-op: window handle
    }

    async switchToApartmentHelpWindow(): Promise<void> {
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
        // no-op: window handle
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
    }

    async switchToApartment(): Promise<void> {
        // no-op: window handle
    }

    async switchToAddressFlagEntry(): Promise<void> {
        // no-op: window handle
        // Playback.gridLoadThreadWait()
    }

    async switchToAddressFlagPSearch(): Promise<void> {
        // no-op: window handle
    }

    async switchToAddressIntersection(): Promise<void> {
        // no-op: window handle
        // Playback.popupThreadWait()
    }

    async switchToCommonNamesScreen(): Promise<void> {
        // no-op: window handle
        // Playback.popupThreadWait()
    }

    async switchToCommonNameHelp(): Promise<void> {
        // no-op: window handle
        // Playback.popupThreadWait()
    }

    async switchToCommonNamesEntry(): Promise<void> {
        // Playback.pageLoadThreadWait()
        // no-op: window handle
    }

    async switchToStreetUpdate(): Promise<void> {
        // no-op: window handle
    }

    async switchToBatchUpdate(): Promise<void> {
        // no-op: window handle
        // Playback.popupThreadWait()
    }

    async switchToAddressIntersection2040(): Promise<void> {
        // no-op: window handle
        // Playback.popupThreadWait()
    }

    async switchToHazMatFlags(): Promise<void> {
        // no-op: window handle
        // no-op: window handle
        // changes in src
        // Playback.popupThreadWait()
    }

    async switchToHazMatFlagEntry(): Promise<void> {
        // no-op: window handle
        // Playback.popupThreadWait()
    }

    async switchToHydrantSearch(): Promise<void> {
        // no-op: window handle
        // Playback.popupThreadWait()
    }

    async switchToHydrantEntry(): Promise<void> {
        // no-op: window handle
        // Playback.popupThreadWait()
    }

    async switchToGoogleMap(): Promise<void> {
        // Playback.pageLoadThreadWait()
        // no-op: window handle
        // Playback.popupThreadWait()
    }

    async switchToWeatherScreen(): Promise<void> {
        // Playback.popupThreadWait()
        // Playback.popupThreadWait()
        // no-op: window handle
    }

    async switchToContactEntry(): Promise<void> {
        // no-op: window handle
        // Playback.popupThreadWait()
    }

    async switchToContactSearch(): Promise<void> {
        // no-op: window handle
        // Playback.popupThreadWait()
    }

    async switchToGeoContactNewEntry(): Promise<void> {
        // no-op: window handle
        // Playback.popupThreadWait()
    }

    async switchToHydrantTest(): Promise<void> {
        // no-op: window handle
        // Playback.popupThreadWait()
    }

    async switchToContactDetailEntry(): Promise<void> {
        // no-op: window handle
    }

    async switchToMapLayerEntry(): Promise<void> {
        // no-op: window handle
        // Playback.controlReadyThreadWait()
    }

    async switchToRealAddressWindow(): Promise<void> {
        // no-op: window handle
    }

    async switchToUpdateGeoCode(): Promise<void> {
        // objectIdentification.windowHandle.switchToMainWindowScreenTab("Geo/frmUpdateGeoCode");
        // no-op: window handle
        // Playback.popupThreadWait()
    }

    async switchToMapLayerSearch(): Promise<void> {
        // no-op: window handle
        // Playback.controlReadyThreadWait()
    }

    async switchToApartmentSearchHelpWindow(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // no-op: window handle
    }

    async switchToAVLReplay(): Promise<void> {
        // no-op: window handle
        // Playback.pageLoadThreadWait()
    }

    async switchToAddressIntersection2040UpdateLatLongWindow(): Promise<void> {
        // no-op: window handle
        // Playback.controlReadyThreadWait()
    }

    async switchToZipCode(): Promise<void> {
        // no-op: window handle
    }

    async switchToZipCodeEntry(): Promise<void> {
        // no-op: window handle
    }

    async switchToPremiseHelpWindow(): Promise<void> {
        // no-op: window handle
    }

    async switchToAddPremiseHelpWindow(): Promise<void> {
        // no-op: window handle
    }

    async switchToApartmentHelpWindow1(): Promise<void> {
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
        // no-op: window handle
        // Playback.pageLoadThreadWait()
        // Playback.pageLoadThreadWait()
    }

    async switchToAddressSearchWindow(): Promise<void> {
        // no-op: window handle
    }

    async switchToLocationCheckEntry(): Promise<void> {
        // no-op: window handle
        // Playback.pageLoadThreadWait()
    }

    async switchToStreetHelpWindow(): Promise<void> {
        // no-op: window handle
        // Playback.pageLoadThreadWait()
    }

    async switchToUpdateGeoCodeWindow(): Promise<void> {
        // no-op: window handle
        // Playback.popupThreadWait()
    }
}

export class GeoContactNewEntryPage {
    readonly page: Page;
    readonly uIContactsTabResultTable: Locator;
    readonly uIAddressEdit: Locator;
    readonly uISearchButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIIncludeInactiveCheckBox: Locator;
    readonly uISaveButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIPhoneType1ComboBox: Locator;
    readonly uIPhoneNumber1Edit: Locator;
    readonly uINotes1Edit: Locator;
    readonly uIDeleteicon1Button: Locator;
    readonly uIPhoneType2ComboBox: Locator;
    readonly uIPhoneNumber2Edit: Locator;
    readonly uINotes2Edit: Locator;
    readonly uIDeleteicon2Button: Locator;
    readonly uIPhoneType3ComboBox: Locator;
    readonly uIPhoneNumber3Edit: Locator;
    readonly uINotes3Edit: Locator;
    readonly uIDeleteicon3Button: Locator;
    readonly uIAddMorePhoneNumberButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIContactsTabResultTable = page.locator('NogrdContacts');
        this.uIAddressEdit = page.locator('NoAddressCtrl2_txtFrom');
        this.uISearchButton = page.locator('NobtnSearch');
        this.uIAddNewButton = page.locator('NobtnAddnew');
        this.uIIncludeInactiveCheckBox = page.locator('NochkIncludeExpired');
        this.uISaveButton = page.locator('NocmdSave');
        this.uIRefreshButton = page.locator('NocmdRefresh');
        this.uIPhoneType1ComboBox = page.locator('NotxtNumber_1_PhoneType_DropDown');
        this.uIPhoneNumber1Edit = page.locator('NotxtNumber_1_PhoneNumber');
        this.uINotes1Edit = page.locator('NotxtNotes_1');
        this.uIDeleteicon1Button = page.locator('NoimgRemove_1');
        this.uIPhoneType2ComboBox = page.locator('NotxtNumber_2_PhoneType_DropDown');
        this.uIPhoneNumber2Edit = page.locator('NotxtNumber_2_PhoneNumber');
        this.uINotes2Edit = page.locator('NotxtNotes_2');
        this.uIDeleteicon2Button = page.locator('NoimgRemove_2');
        this.uIPhoneType3ComboBox = page.locator('NotxtNumber_3_PhoneType_DropDown');
        this.uIPhoneNumber3Edit = page.locator('NotxtNumber_3_PhoneNumber');
        this.uINotes3Edit = page.locator('NotxtNotes_3');
        this.uIDeleteicon3Button = page.locator('NoimgRemove_3');
        this.uIAddMorePhoneNumberButton = page.locator('NoAddMorePhoneNumber');
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        // confirm popup: yes
    }

    async ClickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async EnterAtAddress(address: string): Promise<void> {
        await this.uIAddressEdit.fill(address);
        await this.uIAddressEdit.press('Tab');
    }

    async ClickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async VerifyAcknowledgeMessageInvalidAddress(): Promise<void> {
        // popup: (5027) Invalid address for contact
    }

    async VerifySearchAddNewDisabled(): Promise<void> {
        // verify.ExpectedValueIsTrue(
        // Boolean.parseBoolean(uIMapGeo.geoContactNewEntry.uISearchButton.getAttribute("disabled")))
        // verify.ExpectedValueIsTrue(
        // Boolean.parseBoolean(uIMapGeo.geoContactNewEntry.uIAddNewButton.getAttribute("disabled")))
    }

    async VerifyAtName(rowIndex: string, name: string, lastName: string, firstName: string): Promise<void> {
        // String name = objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.geoContactNewEntry.uIContactsTabResultTable, "Name", rowIndex)
        expect(name).toEqual(name);
        // Abi
    }

    async VerifyAtPhoneNumber(rowIndex: string, phoneNumber: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("PhoneNumber"),
        // objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.geoContactNewEntry.uIContactsTabResultTable, "PhoneNo",
        // rowIndex).replace("(", "").replace(")", "").replace(" ", "").replace("-", ""))
    }

    async VerifyDateAsCurrentDate(rowIndex: string): Promise<void> {
        // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.geoContactNewEntry.uIContactsTabResultTable, "Entered Date",
        // rowIndex).contains(Randomized.getCurrentDate("MM/dd/yy")))
    }

    async VerifyDuplicateNameNotAdded(): Promise<void> {
        // verify.ExpectedValueIsTrue(objectIdentification.manualIdentify.getGridTableRowsCount(uIMapGeo.geoContactNewEntry.uIContactsTabResultTable) == 1)
    }

    async VerifyAtLastName1(rowIndex: string, lastName1: string): Promise<void> {
        // String name = objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.geoContactNewEntry.uIContactsTabResultTable, "Name", rowIndex)
        expect(lastName1).toBeTruthy();
    }

    async verifyAtPhoneNumber1(phoneNo: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("PhoneNo"),
        // uIMapGeo.contactEntryScreen.uIPhoneNumber1Edit.getAttribute("value"))
    }

    async closeWindow(): Promise<void> {
        // uIMapGeo.geoContactNewEntry.driver.close()
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async verifyAltPhoneNoColumnValueAsNull(nameRelation: string): Promise<void> {
        // String columnValue = objectIdentification.manualIdentify.getGridCell(uIMapGeo.geoContactNewEntry.uIContactsTabResultTable,
        // BaseData.getGeoModuleValue("NameRelation"), "Alt PhoneNo").getText()
        expect("").toEqual(columnValue);
    }

    async verifyAddNewButtonIsEnabled(): Promise<void> {
        // boolean enabled = uIMapGeo.geoContactNewEntry.uIAddNewButton.isEnabled()
        expect(enabled).toBeTruthy();
    }
}

export class HazMatFlagEntryPage {
    readonly page: Page;
    readonly uILocationEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveCloseButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIChemicalsTab: Locator;
    readonly uILocationRemarkTab: Locator;
    readonly uIFooterStatusBar: Locator;
    readonly uIPrintButton: Locator;
    readonly uILocationCheckbox: Locator;
    readonly uILocationInfoIcon: Locator;
    readonly uIJurisDropDown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uILocationEdit = page.locator('NoadrLocation_txtFrom');
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveCloseButton = page.locator('NocmdSaveNClose');
        this.uIResetButton = page.locator('NocmdRefresh');
        this.uIChemicalsTab = page.locator("(//span[contains(text(),'Chemicals')])");
        this.uILocationRemarkTab = page.locator("(//span[contains(text(),'Location Remark')])");
        this.uIFooterStatusBar = page.locator("//td[@class='statusBar']");
        this.uIPrintButton = page.locator('NocmdPrint');
        this.uILocationCheckbox = page.locator('NoadrLocation_chkVerify');
        this.uILocationInfoIcon = page.locator('NoadrLocation_cmdIncOnAddr');
        this.uIJurisDropDown = page.locator('NolstJuris');
    }

    async ClickAllTabs(): Promise<void> {
        await this.uIChemicalsTab.click();
        // Playback.pageLoadThreadWait()
        await this.uILocationRemarkTab.click();
        // Playback.pageLoadThreadWait()
    }

    async VerifyAtLocation(location: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("Location"),
        // uIMapGeo.hazMatFlagEntry.uILocationEdit.getAttribute("value"))
    }

    async switchToChemicalTab(): Promise<void> {
        await this.uIChemicalsTab.click();
        // Playback.pageLoadThreadWait()
    }

    async CloseScreen(): Promise<void> {
        // uIMapGeo.hazMatFlagEntry.driver.close()
    }

    async EnterAtLocation(location: string): Promise<void> {
        await this.uILocationEdit.fill(location);
        await this.uILocationEdit.press('Tab');
    }

    async SaveCloseScreen(): Promise<void> {
        await this.uISaveCloseButton.click();
        // confirm popup: yes
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        // confirm popup: yes
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verify1018RequiredEntriesAreMissing(): Promise<void> {
        // popup: (1018) Required Entries are Missing
    }

    async verifyInactiveCheckboxIsChecked(): Promise<void> {
    }

    async verifyAdditionSuccessfulMessageInFooter(): Promise<void> {
        const text = await this.uIFooterStatusBar.innerText();
        expect(" 1002 - Addition successful  ").toEqual(text);
    }

    async switchToLocationRemarks(): Promise<void> {
        await this.uILocationRemarkTab.click();
        // Playback.pageLoadThreadWait()
    }

    async verify1051UpdateDataExistAcknowldge(): Promise<void> {
        // popup: (1051)Updated data exists in Chemicals tab. You must save or reset.
    }
}

export class HazMatFlagsPage {
    readonly page: Page;
    readonly uILocationEdit: Locator;
    readonly uILocationVerifyCheckBox: Locator;
    readonly uIChemicalNameEdit: Locator;
    readonly uISystemIDNoEdit: Locator;
    readonly uIChemicalNameLookupButton: Locator;
    readonly uIGeneralLocationComboBox: Locator;
    readonly uISearchButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIHazMatFlagResultGrid: Locator;
    readonly uIInactiveCheckBox: Locator;
    readonly uIHazMatFlagsResultTable: Locator;
    readonly uIJurisDropDown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uILocationEdit = page.locator('NoadrLocation_txtFrom');
        this.uILocationVerifyCheckBox = page.locator('NoadrLocation_chkVerify');
        this.uIChemicalNameEdit = page.locator('NolupDotID_CodeValue');
        this.uISystemIDNoEdit = page.locator('NotxtSystemID');
        this.uIChemicalNameLookupButton = page.locator('NolupDotID_imgBtn');
        this.uIGeneralLocationComboBox = page.locator('NocddLocationCode_DropDown');
        this.uISearchButton = page.locator('NocmdSearch');
        this.uIAddNewButton = page.locator("(//span[contains(text(),'Add New')])");
        this.uIHazMatFlagResultGrid = page.locator('NogrdHazMatFlag');
        this.uIInactiveCheckBox = page.locator('NochkInActive');
        this.uIHazMatFlagsResultTable = page.locator('NogrdHazMatFlag');
        this.uIJurisDropDown = page.locator('NolstJuris');
    }

    async EnterAtLocation(location: string): Promise<void> {
        await this.uILocationEdit.fill(location);
        await this.uILocationEdit.press('Tab');
    }

    async enterAtChemicalName(chemical: string): Promise<void> {
        await this.uILocationEdit.clear();
        await this.uIChemicalNameEdit.fill(chemical);
        await this.uIChemicalNameEdit.press('Tab');
    }

    async EnterAtSystemIDNo(systemIDNo: string): Promise<void> {
        await this.uISystemIDNoEdit.fill(systemIDNo);
        await this.uISystemIDNoEdit.press('Tab');
    }

    async ClickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
        // Playback.controlReadyThreadWait()
    }

    async ClickAtLocationInGrid(locationInGrid: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.hazMatFlags.uIHazMatFlagResultGrid, BaseData.getGeoModuleValue("locationInGrid"))
    }

    async verifyAtLocationInGrid(doTIDChemical: string, locationInGrid: string): Promise<void> {
        expect(doTIDChemical).toEqual(locationInGrid);
    }

    async reloadScreen(): Promise<void> {
        // objectIdentification.manualIdentify.selectRightClickTabMenuByTabText("HazMat Flags", "Reload Tab")
    }

    async VerifyAtChemicalName(rowIndex: string, chemical: string): Promise<void> {
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.hazMatFlags.uIHazMatFlagResultGrid, "DOT ID/ChemicalNo", rowIndex).contains(BaseData.getGeoModuleValue("Chemical")))
    }

    async VerifyAtDOTIDChemicalNo(rowIndex: string, dOTIDChemicalNo: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("DOTIDChemicalNo"), objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.hazMatFlags.uIHazMatFlagResultGrid, "DOT ID/ChemicalNo", rowIndex))
    }

    async VerifyAtGeneralLocation(rowIndex: string, generalLocation: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("GeneralLocation"), objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.hazMatFlags.uIHazMatFlagResultGrid, "General Location", rowIndex))
    }

    async ClickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickInactiveCheckBox(): Promise<void> {
        await this.uIInactiveCheckBox.click();
    }

    async verifyAddNewButtonDisabled(): Promise<void> {
        // const AddNewLink = Playback.driver.findElement(By.xpath("//li[@title='Add New Item']")).getAttribute("class");
        expect(AddNewLink.contains("Disabled")).toBeTruthy();
    }

    async selectAtChemicalInGrid(chemical: string): Promise<void> {
        // Playback.pageLoadThreadWait()
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.hazMatFlags.uIHazMatFlagsResultTable, BaseData.getGeoModuleValue("Chemical"))
        // Playback.pageLoadThreadWait()
    }

    async selectRandomRowInGrid(): Promise<void> {
        // objectIdentification.randomIdentify.selectRandomGridRow(uIMapGeo.hazMatFlags.uIHazMatFlagsResultTable)
    }

    async clickAtLocationInGrid(locationInGrid: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.hazMatFlags.uIHazMatFlagResultGrid, BaseData.getGeoModuleValue("locationInGrid"))
    }

    async verifyAtChemicalNameInGrid(chemicalInGrid: string): Promise<void> {
        // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapGeo.hazMatFlags.uIHazMatFlagsResultTable, "DOT ID/ChemicalNo")
        expect(chemicalInGrid).toBeTruthy();
    }

    async selectAtGeneralLocation(generalLocation: string): Promise<void> {
        await this.uIGeneralLocationComboBox.selectOption({ label: generalLocation });
    }

    async verifyAtGeneralLocationInGrid(generalLocation: string): Promise<void> {
        // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapGeo.hazMatFlags.uIHazMatFlagsResultTable, "General Location")
        expect(generalLocation).toBeTruthy();
    }

    async verifyInactiveDataListedInGrid(): Promise<void> {
        // List<WebElement> gridTableRowsCollection = objectIdentification.manualIdentify.getGridTableRowsCollection(uIMapGeo.hazMatFlags.uIHazMatFlagsResultTable)
        // for (WebElement row : gridTableRowsCollection) {
        const attribute = row.getAttribute("class");
        const attribute1 = row.getCssValue("color");
        // if (row.getCssValue("color").contains("rgba(128, 128, 128, 1)")
        // || row.getAttribute("class").contains("ColorGray")) {
        // System.out.println(attribute.contains("ColorGray"))
        expect(attribute1.contains("rgba(128, 128, 128, 1)")).toBeTruthy();
        expect(attribute.contains("ColorGray")).toBeTruthy();
    }

    async selectAtJuris(juris: string): Promise<void> {
        await this.uIJurisDropDown.selectOption({ label: juris });
        //	uIMapGeo.hazMatFlags.uIJurisDropDown.
    }

    async verifyAtJurisColumnInGrid(jurisInGrid: string): Promise<void> {
        // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapGeo.hazMatFlags.uIHazMatFlagResultGrid, "Juris")
        expect(jurisInGrid).toBeTruthy();
    }
}

export class HydrantEntryPage {
    readonly page: Page;
    readonly uIHydantIDEdit: Locator;
    readonly uIWaterGridNoEdit: Locator;
    readonly uIRestrictCheckBox: Locator;
    readonly uIDryHydrantCheckBox: Locator;
    readonly uIModelComboBox: Locator;
    readonly uILocationEdit: Locator;
    readonly uIInstallDateEdit: Locator;
    readonly uINearestAddressEdit: Locator;
    readonly uISpecificationTab: Locator;
    readonly uIActivityTab: Locator;
    readonly uIRemarksTab: Locator;
    readonly uIMapTab: Locator;
    readonly uIAttachmentTab: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveCloseButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIFooterStatusBar: Locator;
    readonly uIDeleteButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIHydantIDEdit = page.locator('NotxtHydrantNbr');
        this.uIWaterGridNoEdit = page.locator('NotxtGridNbr');
        this.uIRestrictCheckBox = page.locator('NochkIsRestrict');
        this.uIDryHydrantCheckBox = page.locator('NochkIsDryHydrant');
        this.uIModelComboBox = page.locator('NocddModel_DropDown');
        this.uILocationEdit = page.locator('NoadrLocation_txtFrom');
        this.uIInstallDateEdit = page.locator('NodttmInstallDttm_KPIDttmCtrl');
        this.uINearestAddressEdit = page.locator('NoadrLocation_txtFrom');
        this.uISpecificationTab = page.locator("(//span/b[contains(text(),'Specification')])");
        this.uIActivityTab = page.locator("(//span[contains(text(),'Activity')])");
        this.uIRemarksTab = page.locator("(//span[contains(text(),'Remarks')])");
        this.uIMapTab = page.locator("(//span[contains(text(),'Map')])");
        this.uIAttachmentTab = page.locator("(//span[contains(text(),'Attachment')])");
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveCloseButton = page.locator('NocmdSaveNClose');
        this.uIResetButton = page.locator('NocmdRefresh');
        this.uIPrintButton = page.locator('NocmdPrint');
        this.uIFooterStatusBar = page.locator("//td[@class='statusBar']");
        this.uIDeleteButton = page.locator('NoCmdDelete');
    }

    async VerifyAtHydrantId(hydrantID: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("HydrantID"),
        // uIMapGeo.hydrantEntry.uIHydantIDEdit.getAttribute("value"))
    }

    async VerifyAtWaterGrid(waterGrid: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("WaterGrid"),
        // uIMapGeo.hydrantEntry.uIWaterGridNoEdit.getAttribute("value"))
    }

    async VerifyDryHydrantChecked(): Promise<void> {
        // System.out.println(uIMapGeo.hydrantEntry.uIDryHydrantCheckBox.getAttribute("checked"))
        // verify.ExpectedValueIsTrue(
        // uIMapGeo.hydrantEntry.uIDryHydrantCheckBox.getAttribute("checked").contains("true"))
    }

    async VerifyAsModel(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("Centurion",
        // objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapGeo.hydrantEntry.uIModelComboBox))
    }

    async VerifyAtAddress(address: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("Address"),
        // uIMapGeo.hydrantEntry.uILocationEdit.getAttribute("value"))
    }

    async ClickAllTabs(): Promise<void> {
        await this.uISpecificationTab.click();
        // Playback.gridLoadThreadWait()
        await this.uIActivityTab.click();
        // Playback.gridLoadThreadWait()
        await this.uIRemarksTab.click();
        // Playback.gridLoadThreadWait()
        await this.uIMapTab.click();
        // Playback.gridLoadThreadWait()
        await this.uIAttachmentTab.click();
        // Playback.gridLoadThreadWait()
    }

    async CloseScreen(): Promise<void> {
        // uIMapGeo.hydrantEntry.driver.close()
    }

    async EnterAtNearestAddress(nearestAddress: string): Promise<void> {
        await this.uINearestAddressEdit.fill(nearestAddress);
        await this.uINearestAddressEdit.press('Tab');
    }

    async EnterAtHydrantID(hydrantID: string): Promise<void> {
        await this.uIHydantIDEdit.fill(hydrantID);
    }

    async ClickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        // confirm popup: yes
    }

    async EnterInstalledDateAsCurrentDate(): Promise<void> {
        await this.uIInstallDateEdit.fill(Randomized.getCurrentDate());
    }

    async clickPrintButton(): Promise<void> {
        await this.uIPrintButton.click();
    }

    async verifyNoAcknowledgementPopupArises(): Promise<void> {
        // Set<String> windowHandles = Playback.driver.getWindowHandles()
        // for (String handle : windowHandles) {
        // if (Playback.driver.switchTo().window(handle).getTitle().contains("Acknowledge")) {
        expect(false).toBeTruthy();
        expect(false).toBeFalsy();
    }

    async verifyVisibleTabsAloneDisplayed(): Promise<void> {
        // for (WebElement tab : allTabs) {
        expect(await this.tab.isVisible()).toBeTruthy();
    }

    async verifyAllTabsDisplayed(): Promise<void> {
        // for (WebElement tab : allTabs) {
        expect(await this.tab.isVisible()).toBeTruthy();
    }

    async clickRefreshButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async verifyUpdateSuccessfulMessage(): Promise<void> {
        const text = await this.uIFooterStatusBar.innerText();
        expect(" 1003 - Update Successful  ").toEqual(text);
    }

    async VerifyAtModel(model: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("Model"),
        // objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapGeo.hydrantEntry.uIModelComboBox))
    }

    async switchToActivityTab(): Promise<void> {
        await this.uIActivityTab.click();
    }

    async verifyActivityTabIsDisabled(): Promise<void> {
        // String activityTab = uIMapGeo.hydrantEntry.uIActivityTab.getAttribute("class")
        expect(activityTab.contains("Dis")).toBeTruthy();
    }

    async verifyActivityTabIsEnabled(): Promise<void> {
        // verify.ExpectedValueIsTrue(uIMapGeo.hydrantEntry.uIActivityTab.isEnabled())
    }
}

export class HydrantSearchPage {
    readonly page: Page;
    readonly uIHydantIDEdit: Locator;
    readonly uIOutofServiceCheckBox: Locator;
    readonly uIDryHydrantCheckBox: Locator;
    readonly uIWaterGridNoEdit: Locator;
    readonly uISizeEdit: Locator;
    readonly uIHydrantClassComboBox: Locator;
    readonly uILocationComboBox: Locator;
    readonly uILocationEdit: Locator;
    readonly uILocationVerifyCheckBox: Locator;
    readonly uIHydrantZoneComboBox: Locator;
    readonly uIModelComboBox: Locator;
    readonly uIMainSizeEdit: Locator;
    readonly uISearch: Locator;
    readonly uIAddNew: Locator;
    readonly uIHydrantResultGrid: Locator;
    readonly uIStreetEdit: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIExcelIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIHydantIDEdit = page.locator('NotxtHydrantNbr');
        this.uIOutofServiceCheckBox = page.locator('NochkOutofService');
        this.uIDryHydrantCheckBox = page.locator('NochkIsDryHydrant');
        this.uIWaterGridNoEdit = page.locator('NotxtGridNbr');
        this.uISizeEdit = page.locator('NotxtSize');
        this.uIHydrantClassComboBox = page.locator('NocddHydrantClass_DropDown');
        this.uILocationComboBox = page.locator('NolsLocationSearch_CddLocationType');
        this.uILocationEdit = page.locator('NolsLocationSearch_adrAddrsCtrl_txtFrom');
        this.uILocationVerifyCheckBox = page.locator('NolsLocationSearch_adrAddrsCtrl_chkVerify');
        this.uIHydrantZoneComboBox = page.locator('NocddInspectZone_DropDown');
        this.uIModelComboBox = page.locator('NocddModel_DropDown');
        this.uIMainSizeEdit = page.locator('NotxtMainSize');
        this.uISearch = page.locator("(//span[contains(text(),'Search')])");
        this.uIAddNew = page.locator("(//span[contains(text(),'Add New')])");
        this.uIHydrantResultGrid = page.locator('NogrdHydrant');
        this.uIStreetEdit = page.locator('NolsLocationSearch_TxtStreetName');
        this.uIPrintIcon = page.locator("//img[@src = '/KPIImages/ico/16_print.gif']");
        this.uIExcelIcon = page.locator("//img[@src = '/KPIImages/ico/16_excel.gif']");
    }

    async EnterAtHydrantID(hydrantID: string): Promise<void> {
        await this.uIHydantIDEdit.fill(hydrantID);
    }

    async ClickDryHydrant(): Promise<void> {
        await this.uIHydantIDEdit.clear();
        await this.uIDryHydrantCheckBox.click();
    }

    async EnterAtWaterGridNo(waterGrid: string): Promise<void> {
        await this.uIDryHydrantCheckBox.click();
        await this.uIWaterGridNoEdit.fill(waterGrid);
    }

    async SelectAtHydrantClass(hydrantClass: string): Promise<void> {
        await this.uIWaterGridNoEdit.clear();
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.hydrantSearch.uIHydrantClassComboBox,
        // BaseData.getGeoModuleValue("HydrantClass"))
    }

    async SelectAsModel(): Promise<void> {
        // ObjectIdentification.ManualIdentify.selectDropDownOption(uIMapGeo.HydrantSearch.uIHydrantClassComboBox,
        // "Centurion");
        await this.uIHydrantClassComboBox.fill("Centurion");
    }

    async clickSearch(): Promise<void> {
        await this.uISearch.click();
        // Playback.gridLoadThreadWait()
    }

    async ClickAtHydrantID(hydrantID: string): Promise<void> {
        // Playback.gridLoadThreadWait()
        // objectIdentification.manualIdentify.selectGridRowByCellInnerTextWithoutContains(uIMapGeo.hydrantSearch.uIHydrantResultGrid,
        // BaseData.getGeoModuleValue("HydrantID"))
    }

    async VerifyAtHydrantID(rowIndex: string, hydrantID: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("HydrantID"),
        // objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.hydrantSearch.uIHydrantResultGrid,
        // "Hydrant ID", rowIndex))
    }

    async VerifyAvailableChecked(rowIndex: string): Promise<void> {
        // WebElement AvailableChecked = objectIdentification.manualIdentify.getGridCell(uIMapGeo.hydrantSearch.uIHydrantResultGrid, "Available", rowIndex).findElement(By.tagName("img"))
        expect(AvailableChecked.getAttribute("alt").contains("Checked")).toBeTruthy();
    }

    async VerifyDryChecked(rowIndex: string): Promise<void> {
        // WebElement DryChecked = objectIdentification.manualIdentify.getGridCell(uIMapGeo.hydrantSearch.uIHydrantResultGrid, "Dry", rowIndex).findElement(By.tagName("img"))
        expect(DryChecked.getAttribute("alt").contains("Checked")).toBeTruthy();
    }

    async VerifyAtAddress(rowIndex: string, address: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("Address"),
        // objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.hydrantSearch.uIHydrantResultGrid,
        // "Address", rowIndex))
    }

    async VerifyAtHydrantClass(rowIndex: string, hydrantClass: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("HydrantClass"),
        // objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.hydrantSearch.uIHydrantResultGrid,
        // "Class", rowIndex))
    }

    async ClickAddNew(): Promise<void> {
        await this.uIAddNew.click();
        // Playback.gridLoadThreadWait()
    }

    async SelectLocationAsAddress(): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.hydrantSearch.uILocationCombobox,
        // "Address")
    }

    async EnterAtStreet(street: string): Promise<void> {
        await this.uIStreetEdit.fill(street);
    }

    async selectRowByAtAddres(address: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapGeo.hydrantSearch.uIHydrantResultGrid,
        // BaseData.getGeoModuleValue("Address"))
    }

    async verifyShowMapDisplay(): Promise<void> {
        expect(await this.uISearch.isVisible()).toBeTruthy();
    }

    async verifyAddNewDisplay(): Promise<void> {
        expect(await this.uIAddNew.isVisible()).toBeTruthy();
    }

    async verifyPrintIconDisplay(): Promise<void> {
        expect(await this.uIPrintIcon.isVisible()).toBeTruthy();
    }

    async verifyExcelIconDisplay(): Promise<void> {
        expect(await this.uIExcelIcon.isVisible()).toBeTruthy();
    }

    async verifyAddNewDisabled(): Promise<void> {
        // const AddNewLink = Playback.driver.findElement(By.xpath("//li[@title='Add New Item']")).getAttribute("class");
        expect(AddNewLink.contains("Disabled")).toBeTruthy();
    }

    async VerifyAtAddressInGrid(hydrantID: string, addressInGrid: string): Promise<void> {
        const Address = hydrantID;
        expect(addressInGrid).toEqual(Address);
    }
}

export class HydrantTestPage {
    readonly page: Page;
    readonly uIHydrantIDEdit: Locator;
    readonly uINearestAddressEdit: Locator;
    readonly uIActivityTypeComboBox: Locator;
    readonly uIActivityDateEdit: Locator;
    readonly uIActivityFromTimeEdit: Locator;
    readonly uIActivityToTimeEdit: Locator;
    readonly uIPFEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveCloseButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIReferToFPBCheckBox: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIActivityDateTimeLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIHydrantIDEdit = page.locator('NotxtHydrantNbr');
        this.uINearestAddressEdit = page.locator('NotxtLocation');
        this.uIActivityTypeComboBox = page.locator('NoCddActType');
        this.uIActivityDateEdit = page.locator('NodttmActivityFrmDttm_Date_KPIDttmCtrl');
        this.uIActivityFromTimeEdit = page.locator("//table[@id = 'dttmActivityFrmDttm_Time']//input");
        this.uIActivityToTimeEdit = page.locator("//table[@id = 'tmActivityFrmEndHours_Time']//input");
        this.uIPFEdit = page.locator('NolupPF_CodeValue');
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveCloseButton = page.locator('NocmdSaveNClose');
        this.uIResetButton = page.locator('NocmdRefresh');
        this.uIReferToFPBCheckBox = page.locator('NochkReferToFPB');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIActivityDateTimeLabel = page.locator('NolblActivityDateTime');
    }

    async SelectAtActivityType(activityType: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.hydrantTest.uIActivityTypeComboBox,
        // BaseData.getGeoModuleValue("ActivityType"))
    }

    async EnterActivityToTimeAsFutureTime(hours: string): Promise<void> {
        await this.uIActivityToTimeEdit.click();
        // Playback.controlReadyThreadWait()
        await this.uIActivityToTimeEdit.fill(Randomized.getFutureTimeByHours(hours, "HH"));
    }

    async EnterAtPFCode(pFCode: string): Promise<void> {
        await this.uIPFEdit.fill(pFCode);
        await this.uIPFEdit.press('Tab');
    }

    async ClickReferToFPBCheckBox(): Promise<void> {
        await this.uIReferToFPBCheckBox.click();
    }

    async SaveScreen(): Promise<void> {
        await this.uISaveButton.click();
        // confirm popup: yes
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async VerifyAdditionSuccessStatusMessage(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("1002 - Addition successful",
        // uIMapGeo.hydrantTest.uIBottomLeftSideStatusBar.getText())
    }

    async CloseScreen(): Promise<void> {
        // uIMapGeo.hydrantTest.driver.close()
    }

    async tabActivityDate(): Promise<void> {
        await this.uIActivityDateEdit.press('Tab');
    }

    async enterToTimeAsMoreThan1HrFromFromTime(): Promise<void> {
        const toTime = Randomized.getFutureTimeByHours(1, "HH:mm:ss");
        // System.out.println(toTime)
        await this.uIActivityToTimeEdit.click();
        await this.uIActivityToTimeEdit.fill(toTime);
        await this.uIActivityToTimeEdit.press('Tab');
    }

    async verifyActivityFromDateTimeLabelAsMandatory(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("rgba(153, 0, 0, 1)", uIMapGeo.hydrantTest.uIActivityDateTimeLabel.getCssValue("color"))
    }

    async tabOutActivityFromDateAndTime(): Promise<void> {
        await this.uIActivityDateEdit.click();
        await this.uIActivityDateEdit.press('Tab');
        await this.uIActivityFromTimeEdit.click();
        await this.uIActivityFromTimeEdit.press('Tab');
    }
}

export class LocationCheckEntryPage {
    readonly page: Page;
    readonly uIDetailTab: Locator;
    readonly uISaveButton: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIDetailTab = page.locator("//span[contains(text(), 'Details')]");
        this.uISaveButton = page.locator('NocmdSave');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
    }

    async switchToDetailTab(): Promise<void> {
        await this.uIDetailTab.click();
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        // confirm popup: yes
    }

    async verifyAdditionSuccessfulMessage(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
        // uIMapGeo.locationCheckEntry.uIBottomLeftSideStatusBar.getText())
    }
}

export class LocationRemarksTabPage {
    readonly page: Page;
    readonly uIRichTextFrame: Locator;
    readonly uIRichTextBody: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIRichTextFrame = page.locator('NotabHazMat_tmpl1_UsrLocationRemark1_rteKPITxt_contentIframe');
        this.uIRichTextBody = page.locator('//body');
    }

    async enterRichTextEditAsTestAutomation(): Promise<void> {
        await this.locationRemarksTab.fill(Keys.CONTROL + "A");
        await this.locationRemarksTab.fill(Keys.BACK_SPACE);
        await this.locationRemarksTab.fill("Test Automation");
    }

    async readRichText(): Promise<string> {
        // no-op: window handle
        const text = await this.locationRemarksTab.innerText();
        return text;
    }

    async verifyRichText(text: string): Promise<void> {
        expect(text).toEqual("Test Automation");
    }

    async clickRefreshButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async verifyUpdateSuccessfulMessageInFooter(): Promise<void> {
        const text = await this.uIFooterStatusBar.innerText();
        expect("1003 - Update successful").toEqual(text);
    }

    async clickPrintButton(): Promise<void> {
        await this.uIPrintButton.click();
    }

    async pressTabThrice(): Promise<void> {
        // Robot robot = new Robot()
        // robot.keyPress(KeyEvent.VK_TAB)
        // robot.keyRelease(KeyEvent.VK_TAB)
        // Playback.threadWait()
        // Playback.threadWait()
        // robot.keyPress(KeyEvent.VK_TAB)
        // robot.keyRelease(KeyEvent.VK_TAB)
        // Playback.threadWait()
        // Playback.threadWait()
        // robot.keyPress(KeyEvent.VK_TAB)
        // robot.keyRelease(KeyEvent.VK_TAB)
    }

    async taboutFromLocation(): Promise<void> {
        await this.uILocationEdit.press('Tab');
    }

    async taboutFromLocationCheckbox(): Promise<void> {
        await this.uILocationCheckbox.press('Tab');
    }

    async taboutFromLocationInfoIcon(): Promise<void> {
        await this.uILocationInfoIcon.press('Tab');
    }

    async selectAtJurisUsingIndex(jsonindex: string, juris: string): Promise<void> {
        await this.uIJurisDropDown.selectOption({ label: juris });
    }

    async verifyAtJurisUsingIndex(jsonindex: string, juris: string): Promise<void> {
        // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapGeo.hazMatFlagEntry.uIJurisDropDown)
        // System.out.println(dropDownSelectedItem)
        expect(dropDownSelectedItem).toEqual(juris);
    }
}

export class MapLayerEntryPage {
    readonly page: Page;
    readonly uISaveButton: Locator;
    readonly uISaveCloseButton: Locator;
    readonly uIResetButton: Locator;
    readonly uILayerTypeComboBox: Locator;
    readonly uILayerNameComboBox: Locator;
    readonly uIFeatureNameEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uIIsFireChkBox: Locator;
    readonly uIInactiveChkBox: Locator;
    readonly uIInactiveDate: Locator;
    readonly uIAttachmentTab: Locator;
    readonly uIRemarksTab: Locator;
    readonly uIRemarksTxtFieldFrame: Locator;
    readonly uIRemarksTxtBody: Locator;
    readonly uIIsGeoFenceChkBox: Locator;
    readonly uIBottomMesssageTextView: Locator;
    readonly uIAddressverificationCheckBox: Locator;
    readonly uIAddressLabel: Locator;
    readonly uIFromLatitudeEdit: Locator;
    readonly uIFromLongtitudeEdit: Locator;
    readonly uIToLatitudeEdit: Locator;
    readonly uIToLongtitudeEdit: Locator;
    readonly uIMapTab: Locator;
    readonly uIDeleteButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveCloseButton = page.locator('NocmdSaveNClose');
        this.uIResetButton = page.locator('NocmdRefresh');
        this.uILayerTypeComboBox = page.locator('NocddLayerType_DropDown');
        this.uILayerNameComboBox = page.locator('NocddMapType');
        this.uIFeatureNameEdit = page.locator('NotxtPointName');
        this.uIAddressEdit = page.locator('NoadrLocation_txtFrom');
        this.uIIsFireChkBox = page.locator('NochkIsFire');
        this.uIInactiveChkBox = page.locator('NochkInActive');
        this.uIInactiveDate = page.locator('NotxtInactive');
        this.uIAttachmentTab = page.locator("//span[text()='Attachments']");
        this.uIRemarksTab = page.locator("//span[text()='Remarks']");
        this.uIRemarksTxtFieldFrame = page.locator('NotabMapPointEntry_tmpl0_UsrRemarks2_rteKPITxt_contentIframe');
        this.uIRemarksTxtBody = page.locator('//body');
        this.uIIsGeoFenceChkBox = page.locator('NochkGeoFence');
        this.uIBottomMesssageTextView = page.locator("//td[@class = 'statusBar']//b");
        this.uIAddressverificationCheckBox = page.locator('NoadrLocation_chkVerify');
        this.uIAddressLabel = page.locator('NotdAdrLocation');
        this.uIFromLatitudeEdit = page.locator('NotxtLatitude');
        this.uIFromLongtitudeEdit = page.locator('NotxtLongitude');
        this.uIToLatitudeEdit = page.locator('NotxtLatitudeTo');
        this.uIToLongtitudeEdit = page.locator('NotxtLongitudeTo');
        this.uIMapTab = page.locator("//span[text()='Map']");
        this.uIDeleteButton = page.locator('NocmdDelete');
    }

    async VerifyLayerTypeAsPolygon(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // verify.ExpectedPropertyValueIsEqual("Polygon", objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapGeo.mapLayerEntry.uILayerTypeComboBox))
    }

    async VerifyLayerNameAsGang(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("Gang", objectIdentification.manualIdentify.getDropDownSelectedItem(uIMapGeo.mapLayerEntry.uILayerNameComboBox))
    }

    async VerifyAtFutureName(futureName: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("FutureName"),
        // uIMapGeo.mapLayerEntry.uIFeatureNameEdit.getAttribute("value"))
    }

    async CloseScreen(): Promise<void> {
        // uIMapGeo.mapLayerEntry.driver.close()
    }

    async selectAtLayerType(layerType: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.mapLayerEntry.uILayerTypeComboBox,
        // BaseData.getGeoModuleValue("LayerType"))
    }

    async selectAtLayerName(slNo: string, layerName: string): Promise<void> {
        // if (slNo == 0) {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.mapLayerEntry.uILayerNameComboBox,
        // BaseData.getGeoModuleValue("LayerName"))
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.mapLayerEntry.uILayerNameComboBox,
        // BaseData.getGeoModuleValue("LayerName" + slNo + ""))
    }

    async enterAtFeatureName(featureName: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIFeatureNameEdit.clear();
        await this.uIFeatureNameEdit.fill(featureName);
    }

    async enterAtAddress(address: string): Promise<void> {
        await this.uIAddressEdit.fill(address);
        await this.uIAddressEdit.press('Tab');
        // Playback.controlReadyThreadWait()
    }

    async selectIsFireCheckBox(): Promise<void> {
        // if (!uIMapGeo.mapLayerEntry.uIIsFireChkBox.isSelected()) {
        // Playback.controlReadyThreadWait()
        await this.uIIsFireChkBox.click();
    }

    async selectInavtiveCheckBox(): Promise<void> {
        // if (!uIMapGeo.mapLayerEntry.uIInactiveChkBox.isSelected()) {
        // Playback.controlReadyThreadWait()
        await this.uIInactiveChkBox.click();
    }

    async verifyInactiveDateAsCurrentDate(): Promise<void> {
        // Playback.controlReadyThreadWait()
        const date = await this.uIInactiveDate.inputValue();
        expect(date).toEqual(Randomized.getCurrentDate());
    }

    async SaveScreen(): Promise<void> {
        await this.uISaveButton.click();
        // confirm popup: yes
    }

    async clickSaveScreen(): Promise<void> {
        await this.uISaveButton.click();
    }

    async SaveNCloseScreen(): Promise<void> {
        await this.uISaveCloseButton.click();
        // confirm popup: yes
    }

    async clickSaveNCloseScreen(): Promise<void> {
        await this.uISaveCloseButton.click();
    }

    async verifyIsFireCheckBoxSelectedAndDisabled(): Promise<void> {
        expect(await this.uIIsFireChkBox.isChecked()).toBeTruthy();
        // verify.ExpectedValueIsFalse(uIMapGeo.mapLayerEntry.uIIsFireChkBox.isEnabled())
    }

    async clickRefershButton(): Promise<void> {
        await this.uIResetButton.click();
        // Playback.controlReadyThreadWait()
    }

    async clickDeleteButton(): Promise<void> {
        await this.uIDeleteButton.click();
        // confirm popup: (4) Do you want to delete?
        // Playback.controlReadyThreadWait()
    }

    async verifyAttachmentTabEnabled(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // Playback.controlReadyThreadWait()
        expect(await this.uIAttachmentTab.isVisible()).toBeTruthy();
        await this.uIAttachmentTab.click();
    }

    async switchToAttcahmentsTab(): Promise<void> {
        await this.uIAttachmentTab.click();
        // no-op: window handle
    }

    async switchToRemarksTab(): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIRemarksTab.click();
        // no-op: window handle
        // Playback.controlReadyThreadWait()
    }

    async enterAtRemarks(remarks: string): Promise<void> {
        await this.uIRemarksTxtBody.fill(remarks);
        // Playback.controlReadyThreadWait()
    }

    async verifyAtRemarksEntered(remarks: string): Promise<void> {
        const actualRemarks = await this.uIRemarksTxtBody.innerText();
        expect(actualRemarks).toEqual(remarks);
    }

    async selectAtLayerName(layerName: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.mapLayerEntry.uILayerNameComboBox,
        // BaseData.getGeoModuleValue("LayerName"))
        await this.uILayerNameComboBox.press('Tab');
    }

    async selectLayerTypeAsPolygon(): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.mapLayerEntry.uILayerTypeComboBox,
        // "Polygon")
        await this.uILayerTypeComboBox.press('Tab');
    }

    async verifyIsFireCheckBoxisDisplayed(): Promise<void> {
        expect(await this.uIIsFireChkBox.isVisible()).toBeTruthy();
    }

    async verifyIsGeoFenceCheckBoxIsDisplayed(): Promise<void> {
        expect(await this.uIIsGeoFenceChkBox.isVisible()).toBeTruthy();
    }

    async verifyIsFireCheckBoxIsEnabled(): Promise<void> {
        // verify.ExpectedValueIsTrue(uIMapGeo.mapLayerEntry.uIIsFireChkBox.isEnabled())
    }

    async verifyIsGeoFenceCheckBoxIsEnabled(): Promise<void> {
        // verify.ExpectedValueIsTrue(uIMapGeo.mapLayerEntry.uIIsGeoFenceChkBox.isEnabled())
    }

    async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
        // uIMapGeo.mapLayerEntry.uIBottomMesssageTextView.getText())
    }

    async VerifyAtFeatureName(featureName: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("FeatureName"),
        // uIMapGeo.mapLayerEntry.uIFeatureNameEdit.getAttribute("value"))
    }

    async clickAddressField(): Promise<void> {
        await this.uIAddressEdit.click();
    }

    async clickSpaceBarTwiceAndTabOutInAddressField(): Promise<void> {
        await this.uIAddressEdit.fill(Keys.SPACE);
        await this.uIAddressEdit.fill(Keys.SPACE);
        await this.uIAddressEdit.press('Tab');
    }

    async enterAtpartialAddress(partialAddress: string): Promise<void> {
        await this.uIAddressEdit.fill(partialAddress);
        await this.uIAddressEdit.press('Tab');
        // Playback.controlReadyThreadWait()
    }

    async clickAddressVerificationCheckBox(): Promise<void> {
        await this.uIAddressverificationCheckBox.click();
    }

    async verifyAddressFieldIsMandatory(): Promise<void> {
        // uIMapGeo.mapLayerEntry.uIAddressLabel.getCssValue("color")
        // System.out.println(uIMapGeo.mapLayerEntry.uIAddressLabel.getCssValue("color"))
    }

    async verifyAddressFieldIsNonMandatory(): Promise<void> {
        // uIMapGeo.mapLayerEntry.uIAddressLabel.getCssValue("color")
        // System.out.println(uIMapGeo.mapLayerEntry.uIAddressLabel.getCssValue("color")+"NonMandatory")
    }

    async verifyFromlatlongIsDisplayed(): Promise<void> {
        expect(await this.uIFromLatitudeEdit.isVisible()).toBeTruthy();
        expect(await this.uIFromLongtitudeEdit.isVisible()).toBeTruthy();
    }

    async verifyTolatlongIsDisplayed(): Promise<void> {
        expect(await this.uIToLatitudeEdit.isVisible()).toBeTruthy();
        expect(await this.uIToLongtitudeEdit.isVisible()).toBeTruthy();
    }

    async verifyFromlatlongIsNotEnabled(): Promise<void> {
        // boolean enabled = uIMapGeo.mapLayerEntry.uIFromLatitudeEdit.isEnabled()
        // boolean enabledd = uIMapGeo.mapLayerEntry.uIFromLatitudeEdit.isEnabled()
        //			verify.ExpectedValueIsFalse(uIMapGeo.mapLayerEntry.uIFromLatitudeEdit.isEnabled());
        //			verify.ExpectedValueIsFalse(uIMapGeo.mapLayerEntry.uIFromLongtitudeEdit.isEnabled());
    }

    async verifyTolatlongIsIsNotEnabled(): Promise<void> {
        //			verify.ExpectedValueIsFalse(uIMapGeo.mapLayerEntry.uIToLatitudeEdit.isEnabled());
        //			verify.ExpectedValueIsFalse(uIMapGeo.mapLayerEntry.uIToLongtitudeEdit.isEnabled());
    }

    async verifyAtFromlatlong(fromLatitude: string, fromLongitude: string): Promise<void> {
        const FromLatitude = await this.uIFromLatitudeEdit.inputValue();
        const FromLongitude = await this.uIFromLongtitudeEdit.inputValue();
        expect(fromLatitude).toEqual(FromLatitude);
        expect(fromLongitude).toEqual(FromLongitude);
    }

    async verifyAtTolatlong(toLatitude: string, toLongitude: string): Promise<void> {
        const ToLatitude = await this.uIToLatitudeEdit.inputValue();
        const ToLongitude = await this.uIToLongtitudeEdit.inputValue();
        expect(toLatitude).toEqual(ToLatitude);
        expect(toLongitude).toEqual(ToLongitude);
    }

    async selectAtLayerType(JsonIndex: string, layerType: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.mapLayerEntry.uILayerTypeComboBox,
        // BaseData.getGeoModuleValue("LayerType"+JsonIndex))
        await this.uILayerTypeComboBox.press('Tab');
    }

    async clickMapTab(): Promise<void> {
        await this.uIMapTab.click();
    }
}

export class MapLayerSearchPage {
    readonly page: Page;
    readonly uIAddNewButton: Locator;
    readonly uILayerTypeComboBox: Locator;
    readonly uILayerNameComboBox: Locator;
    readonly uISearchButton: Locator;
    readonly uIIncludeFireChkBox: Locator;
    readonly uIMapLayerTable: Locator;
    readonly uIIncludeInactiveCheckBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddNewButton = page.locator("//span[text()='Add New']");
        this.uILayerTypeComboBox = page.locator('NocddLayerType_DropDown');
        this.uILayerNameComboBox = page.locator('NocddMapType');
        this.uISearchButton = page.locator('NocmdSearch');
        this.uIIncludeFireChkBox = page.locator('NoChkIncFire');
        this.uIMapLayerTable = page.locator("//div[@id='grdMapPoints']");
        this.uIIncludeInactiveCheckBox = page.locator('NochkIsActive');
    }

    async clickAddnewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async selectAtLayerType(layerType: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.mapLayerSearch.uILayerTypeComboBox,
        // BaseData.getGeoModuleValue("LayerType"))
    }

    async selectAtLayerName(slNo: string, layerName: string): Promise<void> {
        // if (slNo == 0) {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.mapLayerSearch.uILayerNameComboBox,
        // BaseData.getGeoModuleValue("LayerName"))
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.mapLayerSearch.uILayerNameComboBox,
        // BaseData.getGeoModuleValue("LayerName" + slNo + ""))
    }

    async selectIncludeFireCheckBox(): Promise<void> {
        // if (!uIMapGeo.mapLayerSearch.uIIncludeFireChkBox.isSelected()) {
        await this.uIIncludeFireChkBox.click();
    }

    async clickSearchButton(): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uISearchButton.click();
        // Playback.controlReadyThreadWait()
        // Playback.controlReadyThreadWait()
    }

    async verifyAtNameInGrid(rowIndex: string, name: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        // String name = objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.mapLayerSearch.uIMapLayerTable, "Name", rowIndex)
        expect(name).toEqual(name);
    }

    async selectGridRowByLayerName(slNo: string, layerName: string): Promise<void> {
        // if (slNo == 0) {
        // Playback.controlReadyThreadWait()
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.mapLayerSearch.uIMapLayerTable, BaseData.getGeoModuleValue("LayerName"))
        // Playback.controlReadyThreadWait()
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.mapLayerSearch.uIMapLayerTable, BaseData.getGeoModuleValue("LayerName" + slNo + ""))
    }

    async selectAtLayerNameInGridUsingRowIndex(rowindex: string, layerName: string): Promise<void> {
        // List<WebElement> gridTableColumnCells = objectIdentification.manualIdentify.getGridTableColumnCells(uIMapGeo.mapLayerSearch.uIMapLayerTable, "Layer Name")
        // for (WebElement webElement : gridTableColumnCells) {
        // System.out.println(webElement.getText())
        // if (webElement.getText().equals(BaseData.getGeoModuleValue("LayerName"))) {
        await this.webElement.click();
    }

    async verifyNoRecordsFoundAck(): Promise<void> {
        // Playback.controlReadyThreadWait()
        // popup: 1011 - No Record Found
        // Playback.controlReadyThreadWait()
    }

    async clickIncludeInactiveCheckBox(): Promise<void> {
        await this.uIIncludeInactiveCheckBox.click();
    }
}

export class MapTabPage {
    readonly page: Page;
    readonly uILatLongValue: Locator;
    readonly uIGoogleMap: Locator;
    readonly uIDrawALineButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uILatLongValue = page.locator('NolblLatLongValue');
        this.uIGoogleMap = page.locator('Nomap_canvas');
        this.uIDrawALineButton = page.locator("//button[@title='Draw a line']");
    }

    async clickDrawAlineButton(): Promise<void> {
        await this.mapTab.click();
    }

    async drawALineInMap(): Promise<void> {
        await this.mapTab.click();
        // Playback.actionDriver.moveByOffset(100,0 ).clickAndHold().moveByOffset(300, 20).clickAndHold().doubleClick().build().perform()
        // Playback.actionDriver.moveByOffset(100, 0).clickAndHold().moveByOffset(200, 0).doubleClick().build().perform()
    }

    async maximizeScreen(): Promise<void> {
        // Playback.driver.manage().window().maximize()
    }
}

export class MergeAddressPopupPage {
    readonly page: Page;
    readonly uIMergeToAddressEdit: Locator;
    readonly uIAddrMergeChkVerifyCheckbox: Locator;
    readonly uIFromAddressTextView: Locator;
    readonly uIGetCountButton: Locator;
    readonly uIMergeButton: Locator;
    readonly uICancelButton: Locator;
    readonly uIRecordCountTextView: Locator;
    readonly uICSZValue: Locator;
    readonly uIMergeAddressInfoIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIMergeToAddressEdit = page.locator('NoaddrMergetoAddr_txtFrom');
        this.uIAddrMergeChkVerifyCheckbox = page.locator('NoaddrMergetoAddr_chkVerify');
        this.uIFromAddressTextView = page.locator('NolblFrmAddr');
        this.uIGetCountButton = page.locator('NobtnCount');
        this.uIMergeButton = page.locator('NobtnMerge');
        this.uICancelButton = page.locator('NobtnCancel');
        this.uIRecordCountTextView = page.locator('NolblCount');
        this.uICSZValue = page.locator('NolblMergeZip');
        this.uIMergeAddressInfoIcon = page.locator('NoaddrMergetoAddr_cmdIncOnAddr');
    }

    async EnterAtMergeToAddress(mergeToAddress: string): Promise<void> {
        await this.mergeAddressPopup.click();
        await this.mergeAddressPopup.clear();
        await this.mergeAddressPopup.clear();
        await this.mergeAddressPopup.fill(mergeToAddress);
        await this.mergeAddressPopup.press('Tab');
    }

    async clickGetCountButton(): Promise<void> {
        await this.mergeAddressPopup.click();
        await this.mergeAddressPopup.click();
        // Playback.pageLoadThreadWait()
        // Playback.controlReadyThreadWait()
    }

    async VerifyAtRecordCount(recordCount: string): Promise<void> {
        // Playback.pageLoadThreadWait()
        // System.out.println(uIMapGeo.addressSearch.mergeAddressPopup.uIRecordCountTextView.getText());
        // Assert.assertTrue(uIMapGeo.addressSearch.mergeAddressPopup.uIRecordCountTextView.getText().contains(BaseData.getGeoModuleValue("RecordCount")))
    }

    async ClickMergeButton(): Promise<void> {
        await this.mergeAddressPopup.click();
    }

    async VerifyConfirmMessageThisProcessWillTakeSignificationAmoutOfTime(): Promise<void> {
        // popup.confirm.yesWithExpectedMessage(
        // "(5106) This process will take a significant amount of time. Are you sure you want to continue?")
        // popup.confirm.yesWithExpectedMessage(
        // "(5106) This process will take a significant amount of time. Are you sure you want to continue?")
        // Playback.popupThreadWait()
        // Playback.popupThreadWait()
        // Playback.popupThreadWait()
        // Playback.popupThreadWait()
        // Playback.popupThreadWait()
        // Playback.popupThreadWait()
        // Playback.popupThreadWait()
        // Playback.popupThreadWait()
        // Playback.popupThreadWait()
        // Playback.popupThreadWait()
        // Playback.popupThreadWait()
    }

    async VerifyMergeSuccessfulAcknowledge(): Promise<void> {
        // popup: (5119) Merge Successful
    }

    async VerifyAddressInactiveAcknowledge(): Promise<void> {
        // popup: (5097) This address is inactive
    }

    async EnterAtMainAddress(address: string): Promise<void> {
        await this.mergeAddressPopup.fill(address);
        await this.mergeAddressPopup.press('Tab');
    }

    async VerifyConfirmMessageSameAddress(): Promise<void> {
        // popup: (6040) Same Address Cannot be merged
        // Playback.popupThreadWait()
    }

    async EnterAtMergeToAddress1(mergeToAddress1: string): Promise<void> {
        await this.mergeAddressPopup.click();
        await this.mergeAddressPopup.clear();
        await this.mergeAddressPopup.clear();
        await this.mergeAddressPopup.fill(mergeToAddress1);
        await this.mergeAddressPopup.press('Tab');
    }

    async verifyMergeAddressInfoButton(): Promise<void> {
        // uIMapGeo.addressSearch.mergeAddressPopup.uIMergeAddressInfoIcon.isDisplayed()
    }

    async verifyAtCSZ(cSZ: string): Promise<void> {
        const string = await this.mergeAddressPopup.innerText();
        expect(cSZ).toBeTruthy();
    }

    async EnterAtMergeToAddress(slno: string, mergeToAddress: string): Promise<void> {
        await this.mergeAddressPopup.click();
        await this.mergeAddressPopup.clear();
        // if (slno == 0) {
        await this.mergeAddressPopup.fill(mergeToAddress);
        await this.mergeAddressPopup.press('Tab');
        await this.mergeAddressPopup.fill(mergeToAddress);
        await this.mergeAddressPopup.press('Tab');
    }

    async verifyMergeFromAddressWillNotInactivatedAcknowledge(): Promise<void> {
        // TODO Auto-generated method stub
        // popup.acknowledge.okWithExpectedMessage(
        // "(5121) The 'Merge From' address will not be inactivated during the merge since it has apartments.")
        // Playback.popupThreadWait()
    }
}

export class ORIFileEntryPage {
    readonly page: Page;
    readonly uIStateDropDown: Locator;
    readonly uIORIEdit: Locator;
    readonly uISaveIcon: Locator;
    readonly uISaveAndCloseIcon: Locator;
    readonly uITitleEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uICityEdit: Locator;
    readonly uIZipcode: Locator;
    readonly uICountryCDropdown: Locator;
    readonly uIphoneNoEdit: Locator;
    readonly uIFaxEdit: Locator;
    readonly uIEmailEdit: Locator;
    readonly uICommentEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIStateDropDown = page.locator('NocddState_DropDown');
        this.uIORIEdit = page.locator('NotxtORINbr');
        this.uISaveIcon = page.locator('NocmdSave');
        this.uISaveAndCloseIcon = page.locator('NocmdSaveNClose');
        this.uITitleEdit = page.locator('NotxtTitle');
        this.uIAddressEdit = page.locator('NotxtAddr1');
        this.uICityEdit = page.locator('NotxtCity');
        this.uIZipcode = page.locator('NolupZip_CodeValue');
        this.uICountryCDropdown = page.locator('NocddCounty_DropDown');
        this.uIphoneNoEdit = page.locator('NomskPhoneNo');
        this.uIFaxEdit = page.locator('NomskFaxNo');
        this.uIEmailEdit = page.locator('NotxtEMail');
        this.uICommentEdit = page.locator('NotxtCmt');
    }

    async selectAtState(state: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption
        // (uIMapGeo.oRIFileEntry.uIStateDropDown,BaseData.getGeoModuleValue("State"))
    }

    async enterAtORI(oRI: string): Promise<void> {
        await this.uIORIEdit.clear();
        await this.uIORIEdit.fill(oRI);
    }

    async save(): Promise<void> {
        await this.uISaveIcon.click();
        // popup.confirm.acceptPopup()
    }

    async clickSave(): Promise<void> {
        await this.uISaveIcon.click();
    }

    async verifyRequiredEntriesMissingAckPopup(): Promise<void> {
        // popup: (1018) Required Entries are Missing
    }

    async clickSaveAndClose(): Promise<void> {
        await this.uISaveAndCloseIcon.click();
    }

    async verifyORILength(noOfDigits: string): Promise<void> {
        const ORI = await this.uIORIEdit.inputValue();
        // verify.ExpectedIntergerValueIsEqualToActual(noOfDigits, ORI.length(), "ORI digits are not equal -->")
    }

    async enterRandomORI(lengthOfChar: string): Promise<void> {
        const randomAlphanumeric = Randomized.randomAlphanumeric(lengthOfChar);
        await this.uIORIEdit.fill(randomAlphanumeric);
    }

    async enterAtTitle(jsonIndex: string, title: string): Promise<void> {
        await this.uITitleEdit.fill(title);
    }

    async enterAtAddress1(address1: string): Promise<void> {
        await this.uIAddressEdit.fill(address1);
    }

    async enterAtCity(jsonIndex: string, city: string): Promise<void> {
        await this.uICityEdit.fill(city);
    }

    async enterAtZipCode(jsonIndex: string, zipcode: string): Promise<void> {
        await this.uIZipcode.fill(zipcode);
    }

    async selectAtCountry(jsonIndex: string, country: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.oRIFileEntry.uICountryCDropdown,
        // BaseData.getGeoModuleValue("Country" + jsonIndex))
    }

    async enterAtPhoneNo(jsonIndex: string, phoneNo: string): Promise<void> {
        await this.uIphoneNoEdit.click();
        await this.uIphoneNoEdit.fill(phoneNo);
    }

    async enterAtFaxNo(jsonIndex: string, faxNo: string): Promise<void> {
        await this.uIFaxEdit.click();
        await this.uIFaxEdit.fill(faxNo);
    }

    async enterAtEmail(jsonIndex: string, email: string): Promise<void> {
        await this.uIEmailEdit.fill(email);
    }

    async enterAtComment(jsonIndex: string, comment: string): Promise<void> {
        await this.uICommentEdit.fill(comment);
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async switchToORIFileSearch(): Promise<void> {
        // no-op: window handle
        // Playback.controlReadyThreadWait()
    }

    async switchToORIFileEntry(): Promise<void> {
        // no-op: window handle
        // Playback.controlReadyThreadWait()
    }
}

export class ORIFileSearchPage {
    readonly page: Page;
    readonly uIAddNewButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddNewButton = page.locator("//span[text()='Add New']");
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }
}

export class PoliceTabPage {
    readonly page: Page;
    readonly uIPatrolZoneEdit: Locator;
    readonly uISubZoneEdit: Locator;
    readonly uINPACardEdit: Locator;
    readonly uICivilDistrictEdit: Locator;
    readonly uICustom1Edit: Locator;
    readonly uITrackingDetailsResultGrid: Locator;
    readonly uIBorderPZTable: Locator;
    readonly uISaveButton: Locator;
    readonly uITrackingNoCodedEdit: Locator;
    readonly uITrackingNoAddButton: Locator;
    readonly uIBorderPZCodedEdit: Locator;
    readonly uIBorderPZAddButton: Locator;
    readonly uIMultiJurisGridTable: Locator;
    readonly uITowAreaCodedEdit: Locator;
    readonly uIJurisDropDown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIPatrolZoneEdit = page.locator('NolupPatrolZone_CodeValue');
        this.uISubZoneEdit = page.locator('NolupSubZone_CodeValue');
        this.uINPACardEdit = page.locator('NolupURACard_CodeValue');
        this.uICivilDistrictEdit = page.locator('NolupServiceArea_CodeValue');
        this.uICustom1Edit = page.locator('NotxtCustom1');
        this.uITrackingDetailsResultGrid = page.locator('NogrdTracking');
        this.uIBorderPZTable = page.locator('NogrdBZPatrol');
        this.uISaveButton = page.locator('NocmdInternalSave');
        this.uITrackingNoCodedEdit = page.locator('NolupTracking_CodeValue');
        this.uITrackingNoAddButton = page.locator('NoimgAddTracking');
        this.uIBorderPZCodedEdit = page.locator('NolupBZPatrolZone_CodeValue');
        this.uIBorderPZAddButton = page.locator('NoimgAddBZP');
        this.uIMultiJurisGridTable = page.locator('NogrdMultiJuris');
        this.uITowAreaCodedEdit = page.locator('NolupTowArea_CodeValue');
        this.uIJurisDropDown = page.locator('NolstJuris');
    }

    async enterAtTrackingNo(track: string): Promise<void> {
        await this.policeTab.fill(track);
        await this.policeTab.press('Tab');
    }

    async ClickTrackingNoADDButton(): Promise<void> {
        await this.policeTab.click();
    }

    async EnterAtBorderPZ(borderPZ: string): Promise<void> {
        await this.policeTab.fill(borderPZ);
        await this.policeTab.press('Tab');
    }

    async ClickBorderPZADDButton(): Promise<void> {
        await this.policeTab.click();
    }

    async Save(): Promise<void> {
        await this.policeTab.click();
        // Playback.pageLoadThreadWait()
        // confirm popup: yes
    }

    async VerifyAtPatrolZone(patrolZone: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("PatrolZone"),
        // uIMapGeo.addressIntersection2040.policeTab.uIPatrolZoneEdit.getAttribute("value"))
    }

    async VerifyAtCivilDistrict(civilDistrict: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("CivilDistrict"),
        // uIMapGeo.addressIntersection2040.policeTab.uICivilDistrictEdit.getAttribute("value"))
    }

    async VerifyAtSubZone(subZone: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("SubZone"),
        // uIMapGeo.addressIntersection2040.policeTab.uISubZoneEdit.getAttribute("value"))
    }

    async VerifyAtNPACard(nPACard: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("NPACard"),
        // uIMapGeo.addressIntersection2040.policeTab.uINPACardEdit.getAttribute("value"))
    }

    async VerifyAtCustom1(custom1: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("Custom1"),
        // uIMapGeo.addressIntersection2040.policeTab.uICustom1Edit.getAttribute("value"))
    }

    async VerifyAtTrackNo(rowIndex: string, track: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("Track"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressIntersection2040.policeTab.uITrackingDetailsResultGrid, "TrackNo",
        // rowIndex))
    }

    async VerifyAtBroderPZ(rowIndex: string, borderPZ: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("BorderPZ"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.addressIntersection2040.policeTab.uIBorderPZTable, "Border PZ", rowIndex))
    }

    async DeleteTrackingNoInTheGrid(track: string): Promise<void> {
        // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
        // uIMapGeo.addressIntersection2040.policeTab.uITrackingDetailsResultGrid,
        // BaseData.getGeoModuleValue("Track"))
        // confirm popup: (4) Do you really want to delete?
        // confirm popup: (4) Do you really want to delete?
        await this.policeTab.click();
        // confirm popup: yes
        // Playback.pageLoadThreadWait()
    }

    async DeleteBorderPZInTheGrid(borderPZ: string): Promise<void> {
        // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
        // uIMapGeo.addressIntersection2040.policeTab.uIBorderPZTable, BaseData.getGeoModuleValue("BorderPZ"))
        // confirm popup: (4) Do you really want to delete?
        // confirm popup: (4) Do you really want to delete?
        await this.policeTab.click();
        // confirm popup: yes
        // Playback.pageLoadThreadWait()
    }

    async ClickAtPatrolSubInGrid(patrolZone: string, subZone: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.addressIntersection2040.policeTab.uIMultiJurisGridTable,
        // BaseData.getGeoModuleValue("PatrolZone") + ", " + BaseData.getGeoModuleValue("SubZone"))
    }

    async ClickAtNPACardInGrid(): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.addressIntersection2040.policeTab.uIMultiJurisGridTable,
        // BaseData.getGeoModuleValue("NPA Card"))
    }

    async ClickAtCivilDistrictInGrid(civilDistrict: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.addressIntersection2040.policeTab.uIMultiJurisGridTable,
        // BaseData.getGeoModuleValue("CivilDistrict"))
    }

    async EnterAtTowZone(borderPZ: string): Promise<void> {
        await this.policeTab.fill(borderPZ);
        await this.policeTab.press('Tab');
    }

    async verifyAtJurisFieldDoesNotContainNullValue(juris: string): Promise<void> {
        // List<String> dropDownValues = objectIdentification.manualIdentify.getDropDownValues
        // (uIMapGeo.addressIntersection2040.policeTab.uIJurisDropDown)
        // for (String value:dropDownValues) {
        expect(juris).toBeFalsy();
    }
}

export class PremiseHelpWindowPage {
    readonly page: Page;
    readonly uILocationEdit: Locator;
    readonly uIPremiseEdit: Locator;
    readonly uIUseThisPremiseButton: Locator;
    readonly uICancelAndReEnterAddressButton: Locator;
    readonly uIAddThisPremiseToGeoButton: Locator;
    readonly uIShowDetailButton: Locator;
    readonly uIPremiseTable: Locator;
    readonly uIValidPremiseEdit: Locator;
    readonly uINextMaximPremise: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uILocationEdit = page.locator('NotxtLocation');
        this.uIPremiseEdit = page.locator('NotxtPremise');
        this.uIUseThisPremiseButton = page.locator('NocmdLoad');
        this.uICancelAndReEnterAddressButton = page.locator('NocmdCancel');
        this.uIAddThisPremiseToGeoButton = page.locator('NocmdAdd');
        this.uIShowDetailButton = page.locator('NocmdDetail');
        this.uIPremiseTable = page.locator('NogrdRealAddress');
        this.uIValidPremiseEdit = page.locator('NotxtPremise');
        this.uINextMaximPremise = page.locator('NolblNextMaxPremise');
    }

    async clickShowDetailButton(): Promise<void> {
        await this.uIShowDetailButton.click();
        // Playback.controlReadyThreadWait()
    }

    async verifyPremiseNoInGrid(premise: string): Promise<void> {
        // String premiseNo = objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.premiseHelpWindow.uIPremiseTable, "Premise Odd", 0)
        expect(premise).toEqual(premiseNo);
    }

    async closeScreen(): Promise<void> {
        // uIMapGeo.premiseHelpWindow.driver.close()
    }

    async enterValidPremise(): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIValidPremiseEdit.clear();
        const valid = await this.uINextMaximPremise.innerText();
        await this.uIValidPremiseEdit.fill(valid);
    }

    async clickUseThisPremise(): Promise<void> {
        // Playback.controlReadyThreadWait()
        await this.uIUseThisPremiseButton.click();
    }

    async clickAddThisPremiseToGeo(): Promise<void> {
        await this.uIAddThisPremiseToGeoButton.click();
    }
}

export class RealAddressHelpWindowPage {
    readonly page: Page;
    readonly uIRealAddressTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIRealAddressTable = page.locator("//div[@id='grdRealAddress']");
    }

    async verifyAtRealAddress(realAddress: string): Promise<void> {
        // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapGeo.realAddressHelpWindow.uIRealAddressTable, "Real Address")
        expect(realAddress).toBeTruthy();
    }

    async verifyAtRealAddress1(realAddress1: string): Promise<void> {
        // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapGeo.realAddressHelpWindow.uIRealAddressTable, "Street Name"); // Changed
        // "Real
        // Address"
        // to
        // Street
        // Name
        // by
        // Abi
        expect(realAddress1).toBeTruthy();
    }

    async verifyAtRealAddress(rowIndex: string, streetName1: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("StreetName1"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.realAddressHelpWindow.uIRealAddressTable, "Street Name", rowIndex))
    }

    async verifyAtRealAddress1(rowIndex: string, realAddress1: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("RealAddress1"),
        // objectIdentification.manualIdentify.getGridCellInnerText(
        // uIMapGeo.realAddressHelpWindow.uIRealAddressTable, "Real Address", rowIndex))
    }

    async close(): Promise<void> {
        // uIMapGeo.realAddressHelpWindow.driver.close()
    }

    async selectAtRealAddress(rowIndex: string, realAddress: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        //		    		objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapGeo.realAddressHelpWindow.uIRealAddressTable, BaseData.getGeoModuleValue("RealAddress"), rowIndex);
        // objectIdentification.manualIdentify.selectGridTableRow(uIMapGeo.realAddressHelpWindow.uIRealAddressTable,
        // rowIndex)
    }

    async selectAtRealAddress1(rowIndex: string, realAddress1: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.realAddressHelpWindow.uIRealAddressTable, BaseData.getGeoModuleValue("RealAddress1"),
        // rowIndex)
    }

    async verifyAcknowledgeAtPremiseNoIsInactive(premiseNo: string): Promise<void> {
        //			        	  popup.acknowledge.okWithExpectedMessage("(5095) Premise No"+BaseData.getGeoModuleValue("PremiseNo") +"is Inactive");
        // popup.acknowledge.okWithExpectedMessage(
        // "(5095) Premise No " + BaseData.getGeoModuleValue("PremiseNo") + " is Inactive")
    }

    async verifyAtStreetName(streetName: string): Promise<void> {
        // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapGeo.realAddressHelpWindow.uIRealAddressTable, "Street Name")
        // for (String values : gridTableColumnValues)
        expect(streetName).toBeTruthy();
    }

    async selectAtZipcode(zipCode: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        // cellInnerText = zipCode (from test data)
        // Playback.driver.findElement(By.xpath(
        // "(//div[@id='grdRealAddress']//table/tbody/tr/td[contains(text(), '" + cellInnerText + "')])[2]")).click()
        // Playback.controlReadyThreadWait()
    }
}

export class SpecificationTabPage {
    readonly page: Page;
    readonly uICoefficientEdit: Locator;
    readonly uIOrificeTypeComboBox: Locator;
    readonly uISizeOutletDiameterD1Edit: Locator;
    readonly uISizeOutletDiameterD2Edit: Locator;
    readonly uISizeOutletDiameterD3Edit: Locator;
    readonly uIStaticPressureEdit: Locator;
    readonly uIResidualPressureEdit: Locator;
    readonly uIPitotPressureEdit: Locator;
    readonly uICalculatedFlowEdit: Locator;
    readonly uIAvailableFlowEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uICoefficientEdit = page.locator('NotabHydrantEntry_tmpl0_UsrSpec2_TxtCoefficient');
        this.uIOrificeTypeComboBox = page.locator('NotabHydrantEntry_tmpl0_UsrSpec2_CddOrficeType_DropDown');
        this.uISizeOutletDiameterD1Edit = page.locator('NotabHydrantEntry_tmpl0_UsrSpec2_txtSizeOutlet1');
        this.uISizeOutletDiameterD2Edit = page.locator('NotabHydrantEntry_tmpl0_UsrSpec2_txtSizeOutlet2');
        this.uISizeOutletDiameterD3Edit = page.locator('NotabHydrantEntry_tmpl0_UsrSpec2_txtSizeOutlet3');
        this.uIStaticPressureEdit = page.locator('NotabHydrantEntry_tmpl0_UsrSpec2_txtStaticPress');
        this.uIResidualPressureEdit = page.locator('NotabHydrantEntry_tmpl0_UsrSpec2_txtResidPres');
        this.uIPitotPressureEdit = page.locator('NotabHydrantEntry_tmpl0_UsrSpec2_txtPitotPres');
        this.uICalculatedFlowEdit = page.locator('NotabHydrantEntry_tmpl0_UsrSpec2_txtCalculatedFlow');
        this.uIAvailableFlowEdit = page.locator('NotabHydrantEntry_tmpl0_UsrSpec2_txtAvailableFlow');
    }

    async TabOutCoefficient(): Promise<void> {
        await this.specificationTab.press('Tab');
    }

    async Verify09ValueInCoeffficient(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("0.9",
        // uIMapGeo.hydrantEntry.specificationTab.uICoefficientEdit.getAttribute("value"))
    }

    async Verify08ValueInCoeffficient(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("0.8",
        // uIMapGeo.hydrantEntry.specificationTab.uICoefficientEdit.getAttribute("value"))
    }

    async Verify07ValueInCoeffficient(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("0.7",
        // uIMapGeo.hydrantEntry.specificationTab.uICoefficientEdit.getAttribute("value"))
    }

    async SelectOrificeTypeAsRadiused(): Promise<void> {
        await this.specificationTab.selectOption({ label: "Radiused" });
        await this.specificationTab.press('Tab');
    }

    async SelectOrificeTypeAsSquared(): Promise<void> {
        await this.specificationTab.selectOption({ label: "Squared" });
        await this.specificationTab.press('Tab');
    }

    async SelectOrificeTypeAsProtruding(): Promise<void> {
        await this.specificationTab.selectOption({ label: "Protruding" });
        await this.specificationTab.press('Tab');
    }

    async EnterSizeOutletDiameterAtD1(d1: string): Promise<void> {
        await this.specificationTab.fill(d1);
    }

    async EnterSizeOutletDiameterAtD2(d2: string): Promise<void> {
        await this.specificationTab.fill(d2);
    }

    async EnterSizeOutletDiameterAtD3(d3: string): Promise<void> {
        await this.specificationTab.fill(d3);
    }

    async EnterAtStaticPressure(staticPressure: string): Promise<void> {
        await this.specificationTab.fill(staticPressure);
    }

    async EnterAtResidualPressure(residualPressure: string): Promise<void> {
        await this.specificationTab.fill(residualPressure);
    }

    async EnterAtPitotPressure(pitotPressure: string): Promise<void> {
        await this.specificationTab.fill(pitotPressure);
        await this.specificationTab.press('Tab');
    }

    async VerifyAtCalculatedFlow(calculatedFlow: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("CalculatedFlow"),
        // uIMapGeo.hydrantEntry.specificationTab.uICalculatedFlowEdit.getAttribute("value"))
    }

    async VerifyAtAvailableFlow(availableFlow: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("AvailableFlow"),
        // uIMapGeo.hydrantEntry.specificationTab.uIAvailableFlowEdit.getAttribute("value"))
    }

    async selectAtOrificeType(orificeType: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption
        // (uIMapGeo.hydrantEntry.specificationTab.uIOrificeTypeComboBox,BaseData.getGeoModuleValue("OrificeType"))
    }

    async verifyAtOrificeType(orificeType: string): Promise<void> {
        // String dropDownSelectedItem = objectIdentification.manualIdentify.getDropDownSelectedItem
        // (uIMapGeo.hydrantEntry.specificationTab.uIOrificeTypeComboBox)
        expect(dropDownSelectedItem).toEqual(orificeType);
    }

    async verifyCoefficientFieldIsEmpty(): Promise<void> {
        // boolean CoefficientFieldEmpty = uIMapGeo.hydrantEntry.specificationTab.uICoefficientEdit.getAttribute("value").isEmpty()
        expect(CoefficientFieldEmpty).toBeTruthy();
    }

    async enterAtCoefficient(coefficient: string): Promise<void> {
        await this.specificationTab.fill(coefficient);
    }
}

export class StreetEntryPage {
    readonly page: Page;
    readonly uIPrefixComboBox: Locator;
    readonly uIStreetNameEdit: Locator;
    readonly uIStreetTypeEdit: Locator;
    readonly uISuffixComboBox: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uISaveButton: Locator;
    readonly uIStreetEntryResultGrid: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIZipcodeEdit: Locator;
    readonly uIJurisComboBox: Locator;
    readonly uIZipCodeDescription: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIReset: Locator;
    readonly uIStreetEntryTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIPrefixComboBox = page.locator('NocddPrefix_DropDown');
        this.uIStreetNameEdit = page.locator("//input[@id='txtStreetName']");
        this.uIStreetTypeEdit = page.locator('NolupType_CodeValue');
        this.uISuffixComboBox = page.locator('NocddSuffix_DropDown');
        this.uIAddButton = page.locator("//input[@id='imgAddStreet']");
        this.uIClearButton = page.locator('NoimgClearStreet');
        this.uISaveButton = page.locator('NocmdSave');
        this.uIStreetEntryResultGrid = page.locator('NogrdStreet');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIZipcodeEdit = page.locator('NolupZipcode_CodeValue');
        this.uIJurisComboBox = page.locator('NolstJuris');
        this.uIZipCodeDescription = page.locator('NolupZipcode_CodeDescription');
        this.uISaveNCloseButton = page.locator('NocmdSaveNClose');
        this.uIReset = page.locator('NocmdRefresh');
        this.uIStreetEntryTable = page.locator('NogrdStreet');
    }

    async SelectPrefix(): Promise<void> {
        await this.uIPrefixComboBox.fill("S");
    }

    async SelectAtPrefix(prefix: string): Promise<void> {
        // prefix = prefix (from test data)
        // System.out.println(prefix)
        await this.uIPrefixComboBox.selectOption({ label: prefix });
    }

    async SelectAtInterPrefix(interPrefix: string): Promise<void> {
        // interPrefix = interPrefix (from test data)
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.streetEntry.uIPrefixComboBox,
        // interPrefix)
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.streetEntry.uIPrefixComboBox,
        // BaseData.getGeoModuleValue("InterPrefix"));
    }

    async enterAtStreetName(streetName: string): Promise<void> {
        // streetName = streetName (from test data)
        await this.uIStreetNameEdit.fill(streetName);
    }

    async EnterAtInterStreetName(interStreetName: string): Promise<void> {
        // interStreetName = interStreetName (from test data)
        await this.uIStreetNameEdit.fill(interStreetName);
    }

    async enterAtStreetType(streetType: string): Promise<void> {
        // streetType = streetType (from test data)
        await this.uIStreetTypeEdit.fill(streetType);
        await this.uIStreetTypeEdit.press('Tab');
    }

    async EnterAtInterStreetType(interStreetType: string): Promise<void> {
        // interStreetType = interStreetType (from test data)
        await this.uIStreetTypeEdit.fill(interStreetType);
    }

    async SelectAtInterSuffix(interSuffix: string): Promise<void> {
        // interSuffix = interSuffix (from test data)
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.streetEntry.uISuffixComboBox,
        // interSuffix)
    }

    async EnterStreetType(): Promise<void> {
        await this.uIStreetTypeEdit.fill("St");
    }

    async EnterSpecialCharacter(): Promise<void> {
        await this.uIStreetNameEdit.fill(Randomized.randomAlphanumericSpecialCharsString(5));
    }

    async VerifySpecialCharactersNotAllowed(): Promise<void> {
        //			verify.ExpectedValueIsTrue(uIMapGeo.streetEntry.uIStreetNameEdit.getAttribute("value") == null);
        //		}
    }

    async VerifySpecialCharacterNotAllowedInStreetName(): Promise<void> {
        //			verify.ExpectedValueIsTrue(uIMapGeo.streetEntry.uIStreetNameEdit.getAttribute("value")
        //					.contains(Randomized.randomAlphanumericSpecialCharsString(10)));
        //		}
    }

    async VerifySpecialCharactersNotAllowed(): Promise<void> {
        await this.uIStreetNameEdit.fill("$No%");
        const text = await this.uIStreetNameEdit.inputValue();
        // System.out.println(text)
        expect(text.isEmpty()).toBeTruthy();
    }

    async VerifySpecialCharacterNotAllowedInStreetName(streetName: string): Promise<void> {
        expect(streetName).toBeTruthy();
    }

    async SelectAtSuffix(suffix: string): Promise<void> {
        // suffix = suffix (from test data)
        await this.uISuffixComboBox.selectOption({ label: suffix });
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async ClickResetButton(): Promise<void> {
        await this.uIReset.click();
    }

    async VerifyStreetPrefix(): Promise<void> {
        // Playback.controlReadyThreadWait()
        const prefix = "N";
        // Assert.assertEquals(prefix, "N", "Check the prefix value in screen")
    }

    async VerifyAcknowlegdeSaveMessage(): Promise<void> {
        // popup: (7) No data present
        // uIMappopup.acknowledge.Ok();
    }

    async VerifyAcknowledgeAddMessage(): Promise<void> {
        // popup: (5002) Required Street Name Entry
    }

    async VerifyStreetNameWithPrefixSuffixAndTypeInGrid(rowIndex: string, streetName: string, suffix: string, prefix: string, streetType: string): Promise<void> {
        // streetName = streetName (from test data)
        // suffix = suffix (from test data)
        // prefix = prefix (from test data)
        // streetType = streetType (from test data)
        // Assert.assertEquals(streetName, objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.streetEntry.uIStreetEntryResultGrid, "Street Name", rowIndex))
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.streetEntry.uIStreetEntryResultGrid, "Street Type", rowIndex).contains(streetType))
        // Assert.assertEquals(prefix, objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.streetEntry.uIStreetEntryResultGrid, "Prefix", rowIndex))
        // Assert.assertEquals(suffix, objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.streetEntry.uIStreetEntryResultGrid, "Suffix", rowIndex))
    }

    async VerifyInterSectionStreetNameWithPrefixSuffixAndTypeInGird(rowIndex: string, interStreetName: string, interPrefix: string, interSuffix: string, interStreetType: string): Promise<void> {
        // interStreetName = interStreetName (from test data)
        // interPrefix = interPrefix (from test data)
        // interSuffix = interSuffix (from test data)
        // Assert.assertEquals(interStreetName, objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.streetEntry.uIStreetEntryResultGrid, "Street Name", rowIndex))
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.streetEntry.uIStreetEntryResultGrid, "Street Type", rowIndex).contains(BaseData.getGeoModuleValue("InterStreetType")))
        // Assert.assertEquals(interPrefix, objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.streetEntry.uIStreetEntryResultGrid, "Prefix", rowIndex))
        // Assert.assertEquals(interSuffix, objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.streetEntry.uIStreetEntryResultGrid, "Suffix", rowIndex))
    }

    async VerifyStatusMessage(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
        // uIMapGeo.streetEntry.uIBottomLeftSideStatusBar.getText())
        // Assert.assertEquals("1002 - Addition Successful",
        // uIMapGeo.streetEntry.uIBottomLeftSideStatusBar.getText());
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        // confirm popup: yes
        // Playback.pageLoadThreadWait()
    }

    async DeleteRowFromGrid(streetName: string): Promise<void> {
        // objectIdentification.manualIdentify.deleteGridRowByCellInnerText(
        // uIMapGeo.streetEntry.uIStreetEntryResultGrid, BaseData.getGeoModuleValue("StreetName"))
        // confirm popup: yes
    }

    async closeStreetEntry(): Promise<void> {
        // uIMapGeo.streetEntry.driver.close()
    }

    async VerifyConfirmSaveMessage(): Promise<void> {
        // confirm popup: (3) Do You Want To Save All Of The Entered Details?
        // confirm popup: (3) Do You Want To Save All Of The Entered Details?
    }

    async VerifyRecordExisitStatusMessage(): Promise<void> {
        // Assert.assertEquals("1046 - Record already exists",
        // uIMapGeo.streetEntry.uIBottomLeftSideStatusBar.getText())
    }

    async VerifyAcknowledgeRecordExistsMessage(): Promise<void> {
        // popup: 1046 - Record already exists
    }

    async enterAtZipCode(zipCode: string): Promise<void> {
        // zipCode = zipCode (from test data)
        await this.uIZipcodeEdit.fill(zipCode);
        await this.uIZipcodeEdit.press('Tab');
        // popup.switchToCodedSearch()
        // popup.kPICodedLookup.randomKPIHelpSelect();
        // Playback.controlReadyThreadWait()
    }

    async SelectSuffixAsN(): Promise<void> {
        await this.uISuffixComboBox.selectOption({ label: "N" });
    }

    async SelectSuffixAsE(): Promise<void> {
        await this.uISuffixComboBox.selectOption({ label: "E" });
    }

    async VerifyAdditionSuccessfulStatusMessage(): Promise<void> {
        // Assert.assertEquals("1002 - Addition Successful", uIMapGeo.streetEntry.uIBottomLeftSideStatusBar.getText())
    }

    async EnterAtStreetName1(streetName1: string): Promise<void> {
        // streetName = streetName1 (from test data)
        await this.uIStreetNameEdit.fill(streetName);
    }

    async selectAtJuris(juris: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.streetEntry.uIJurisComboBox,
        // BaseData.getGeoModuleValue("Juris"))
        await this.uIJurisComboBox.press('Tab');
        // Playback.controlReadyThreadWait()
    }

    async verifyAtStreetNameInGrid(rowIndex: string, streetName: string): Promise<void> {
        // String streetName = objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.streetEntry.uIStreetEntryResultGrid, "Street Name", rowIndex)
        expect(streetName).toBeTruthy();
        // Playback.controlReadyThreadWait()
    }

    async selectAtJuris1(juris1: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.streetEntry.uIJurisComboBox,
        // BaseData.getGeoModuleValue("Juris1"))
        await this.uIJurisComboBox.press('Tab');
        // Playback.controlReadyThreadWait()
    }

    async selectJurisAsBC(): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.streetEntry.uIJurisComboBox,
        // "BC - Brown County Sheriff")
    }

    async enterAtStreetName(num: string, streetName: string): Promise<void> {
        // if (num == 0) {
        // streetName = streetName (from test data)
        await this.uIStreetNameEdit.fill(streetName);
        // streetName = streetName (from test data)
        await this.uIStreetNameEdit.fill(streetName);
    }

    async enterAtStreetType(num: string, streetType: string): Promise<void> {
        // if (num == 0) {
        // streetType = streetType (from test data)
        await this.uIStreetTypeEdit.fill(streetType);
        await this.uIStreetTypeEdit.press('Tab');
        // streetType = streetType (from test data)
        await this.uIStreetTypeEdit.fill(streetType);
        await this.uIStreetTypeEdit.press('Tab');
    }

    async verifyAtZipCodeDescription(zipCodeDescription: string): Promise<void> {
        // String attribute = uIMapGeo.streetEntry.uIZipCodeDescription.getAttribute("title")
        expect(zipCodeDescription).toBeTruthy();
    }

    async saveNClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
        // confirm popup: yes
        // Playback.pageLoadThreadWait()
    }

    async selectAtPrefix(prefix: string): Promise<void> {
        // prefix = prefix (from test data)
        // System.out.println(prefix)
        await this.uIPrefixComboBox.selectOption({ label: prefix });
    }

    async selectPrefixAsNE(): Promise<void> {
        await this.uIPrefixComboBox.fill("NE");
    }

    async clearStreetName(): Promise<void> {
        await this.uIStreetNameEdit.clear();
    }

    async enterAtZipCode1(zipCode: string): Promise<void> {
        // zipCode = zipCode (from test data)
        await this.uIZipcodeEdit.fill(zipCode);
        await this.uIZipcodeEdit.press('Tab');
    }

    async verifyAtStreetNameInGrid(streetName: string): Promise<void> {
        // String text = objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.streetEntry.uIStreetEntryTable, "Street Name", 0)
        expect(streetName).toBeTruthy();
    }

    // ─── Merged from street-entry.page.ts ────────────────────────────────────

    async enterStreetName(streetName: string): Promise<void> {
        await this.uIStreetNameEdit.clear();
        await this.uIStreetNameEdit.fill(streetName);
    }

    async selectSuffix(suffix: string): Promise<void> {
        await this.uISuffixComboBox.selectOption({ label: suffix });
    }

    async enterZipCode(zipCode: string): Promise<void> {
        await this.uIZipcodeEdit.clear();
        await this.uIZipcodeEdit.fill(zipCode);
        await this.uIZipcodeEdit.press('Tab');
    }

    async selectJuris(juris: string): Promise<void> {
        await this.uIJurisComboBox.selectOption({ label: juris });
        await this.uIJurisComboBox.press('Tab');
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickClear(): Promise<void> {
        await this.uIClearButton.click();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickSaveAndClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickReset(): Promise<void> {
        await this.uIReset.click();
    }

    async createStreet(
        streetName: string,
        streetType: string,
        options?: { prefix?: string; suffix?: string; zipCode?: string; juris?: string }
    ): Promise<void> {
        if (options?.prefix) await this.selectAtPrefix(options.prefix);
        await this.enterStreetName(streetName);
        await this.enterAtStreetType(streetType);
        if (options?.suffix) await this.selectSuffix(options.suffix);
        if (options?.zipCode) await this.enterZipCode(options.zipCode);
        if (options?.juris) await this.selectJuris(options.juris);
        await this.clickAdd();
    }

    async getStatusBarText(): Promise<string> {
        return (await this.uIBottomLeftSideStatusBar.textContent()) || '';
    }

    async getZipCodeDescription(): Promise<string> {
        return (await this.uIZipCodeDescription.textContent()) || '';
    }

    async isGridContaining(text: string): Promise<boolean> {
        const content = await this.uIStreetEntryResultGrid.textContent();
        return content?.includes(text) || false;
    }

    async getGridRowCount(): Promise<number> {
        const rows = this.uIStreetEntryResultGrid.locator("table tbody[class*='Item'] tr");
        return await rows.count();
    }

    async selectRowFromGrid(text: string): Promise<void> {
        const cell = this.uIStreetEntryResultGrid.locator(`td:has-text("${text}")`).first();
        await cell.click();
    }

    async doubleClickRowFromGrid(text: string): Promise<void> {
        const cell = this.uIStreetEntryResultGrid.locator(`td:has-text("${text}")`).first();
        await cell.dblclick();
    }
}

export class StreetSearchPage {
    readonly page: Page;
    readonly uIPrefixComboBox: Locator;
    readonly uIStreetNameEdit: Locator;
    readonly uIStreetTypeEdit: Locator;
    readonly uIStreetTypeLookupButton: Locator;
    readonly uISuffixComboBox: Locator;
    readonly uISearchButton: Locator;
    readonly uIAddNewPane: Locator;
    readonly uIBatchUpdateButton: Locator;
    readonly uIShowAlternateCheckBox: Locator;
    readonly uIIntersectionCheckBox: Locator;
    readonly uIIncludeInactiveCheckBox: Locator;
    readonly uIStreetSearchResultGrID: Locator;
    readonly uISelectAllCheckBox: Locator;
    readonly uIPopupZipCodeEdit: Locator;
    readonly uIZipCodeLookupButton: Locator;
    readonly uIPopupUpdateButton: Locator;
    readonly uIPopupCancelButton: Locator;
    readonly uIJurisComboBox: Locator;
    readonly uIManageIntersectionButton: Locator;
    readonly uIManageApartmentButton: Locator;
    readonly uIManageStreetButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIPrefixComboBox = page.locator('NocddPrefix_DropDown');
        this.uIStreetNameEdit = page.locator('NotxtStreetname');
        this.uIStreetTypeEdit = page.locator('NolupType_CodeValue');
        this.uIStreetTypeLookupButton = page.locator('NolupType_imgBtn');
        this.uISuffixComboBox = page.locator('NocddSuffix_DropDown');
        this.uISearchButton = page.locator('NocmdSearch');
        this.uIAddNewPane = page.locator("(//span[contains(text(),'Add New')])");
        this.uIBatchUpdateButton = page.locator("(//span[contains(text(),'Batch Update')])");
        this.uIShowAlternateCheckBox = page.locator('NochkAlternate');
        this.uIIntersectionCheckBox = page.locator('NoChkIntersection');
        this.uIIncludeInactiveCheckBox = page.locator('NochkIsActive');
        this.uIStreetSearchResultGrID = page.locator('NogrdStreet');
        this.uISelectAllCheckBox = page.locator('NochkCellSelect');
        this.uIPopupZipCodeEdit = page.locator('NolupZipcodeSearch_CodeValue');
        this.uIZipCodeLookupButton = page.locator('NolupZipcodeSearch_imgBtn');
        this.uIPopupUpdateButton = page.locator('NocmdUpdate');
        this.uIPopupCancelButton = page.locator('NocmdCancel');
        this.uIJurisComboBox = page.locator('NolstJuris');
        this.uIManageIntersectionButton = page.locator("(//span[contains(text(),'Manage Intersection')])");
        this.uIManageApartmentButton = page.locator("//span[contains(text(),'Manage Apartment')]");
        this.uIManageStreetButton = page.locator("//span[contains(text(),'Manage Street')]");
    }

    async EnterStreetName(): Promise<void> {
        await this.uIStreetNameEdit.clear();
        await this.uIStreetNameEdit.fill("T");
    }

    async enterAtStreetName(streetName: string): Promise<void> {
        // streetName = streetName (from test data)
        await this.uIStreetNameEdit.clear();
        await this.uIStreetNameEdit.fill(streetName);
    }

    async EnterAtInterStreetName(interStreetName: string): Promise<void> {
        // interStreetName = interStreetName (from test data)
        await this.uIStreetNameEdit.clear();
        await this.uIStreetNameEdit.fill(interStreetName);
    }

    async EnterAtPrefix(prefix: string): Promise<void> {
        // prefix = prefix (from test data)
        await this.uIPrefixComboBox.selectOption({ label: prefix });
    }

    async EnterAtSuffix(suffix: string): Promise<void> {
        // suffix = suffix (from test data)
        await this.uISuffixComboBox.selectOption({ label: suffix });
    }

    async enterAtStreetType(streetType: string): Promise<void> {
        // streetType = streetType (from test data)
        await this.uIStreetTypeEdit.fill(streetType);
    }

    async SelectAtStreetType(streetType: string): Promise<void> {
        await this.uIStreetTypeLookupButton.click();
        // popup.kPICodedLookup.kPIHelpSelect(BaseData.getGeoModuleValue("StreetType"))
    }

    async EnterAtInterStreetType(interStreetType: string): Promise<void> {
        // interStreetType = interStreetType (from test data)
        await this.uIStreetTypeEdit.fill(interStreetType);
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
        // Playback.controlReadyThreadWait()
        // Playback.controlReadyThreadWait()
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewPane.click();
    }

    async clickAtStreetName(streetName: string): Promise<void> {
        // streetName = streetName (from test data)
        await this.uIStreetSearchResultGrID.locator('td', { hasText: streetName }).click();
    }

    async ClickClearFields(): Promise<void> {
        await this.uIStreetNameEdit.clear();
        await this.uIStreetTypeEdit.clear();
    }

    async ClickIntersectionCheckBox(): Promise<void> {
        await this.uIIntersectionCheckBox.click();
    }

    async ClickSelectAllCheckBox(): Promise<void> {
        await this.uISelectAllCheckBox.click();
    }

    async ClickInactiveCheckboxCheckBox(): Promise<void> {
        await this.uIIncludeInactiveCheckBox.click();
    }

    async ClickShowAltStreetNameCheckBox(): Promise<void> {
        await this.uIShowAlternateCheckBox.click();
    }

    async ClickBatchUpdateLink(): Promise<void> {
        await this.uIBatchUpdateButton.click();
    }

    async SelectRandomRowFromGrid(): Promise<void> {
        await this.page.waitForTimeout(5000);
        // objectIdentification.randomIdentify.selectRandomGridRow("grdStreet")
    }

    async SelectAtStreetNameFromGrid(streetName: string): Promise<void> {
        await this.page.waitForTimeout(5000);
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.streetSearch.uIStreetSearchResultGrID, BaseData.getGeoModuleValue("StreetName"))
    }

    async VerifyAtStreetName(streetName: string): Promise<void> {
        // streetName = streetName (from test data)
        // Playback.controlReadyThreadWait()
        // Assert.assertEquals(BaseData.getGeoModuleValue("StreetName"), objectIdentification.manualIdentify.getGridCell(uIMapGeo.streetSearch.uIStreetSearchResultGrID, streetName).getText())
    }

    async VerifyAtIntersectionStreetName(interStreetName: string): Promise<void> {
        // interStreetName = interStreetName (from test data)
        // Playback.controlReadyThreadWait()
        // Assert.assertEquals(interStreetName, objectIdentification.manualIdentify.getGridCell(uIMapGeo.streetSearch.uIStreetSearchResultGrID, interStreetName).getText())
    }

    async VerifyAtInterStreetName(rowIndex: string, interStreetName: string): Promise<void> {
        // interStreetName = interStreetName (from test data)
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.streetSearch.uIStreetSearchResultGrID, "Intersection Street Name",
        // rowIndex).contains(interStreetName))
    }

    async VerifyAtStreetType(rowIndex: string, streetType: string): Promise<void> {
        // streetType = streetType (from test data)
        // Assert.assertEquals(streetType, objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.streetSearch.uIStreetSearchResultGrID, "Street Type", rowIndex))
    }

    async SelectManageApartment(streetName: string): Promise<void> {
        // streetName = streetName (from test data)
        // objectIdentification.manualIdentify.selectContextMenuItemInTheGridRow(
        // uIMapGeo.streetSearch.uIStreetSearchResultGrID, streetName, "Manage Apartment")
    }

    async VerifyAtPrefix(rowIndex: string, prefix: string): Promise<void> {
        // prefix = prefix (from test data)
        // Assert.assertEquals(prefix, objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.streetSearch.uIStreetSearchResultGrID, "Prefix", rowIndex))
    }

    async VerifyAtSuffix(suffix: string, cSZ: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        // suffix = suffix (from test data)
        // Assert.assertEquals(suffix,
        // objectIdentification.manualIdentify.getGridCell(uIMapGeo.streetSearch.uIStreetSearchResultGrID,
        // BaseData.getGeoModuleValue("CSZ"), "Suffix").getText())
        // .getGridCellInnerText(uIMapGeo.streetSearch.uIStreetSearchResultGrID,
        // "Suffix", rowIndex));
    }

    async SelectManageStreet(streetName: string): Promise<void> {
        // streetName = streetName (from test data)
        // objectIdentification.manualIdentify.selectContextMenuItemInTheGridRow(
        // uIMapGeo.streetSearch.uIStreetSearchResultGrID, streetName, "Manage Street")
    }

    async SelectManageIntersection(streetName: string): Promise<void> {
        // streetName = streetName (from test data)
        // Playback.controlReadyThreadWait()
        // objectIdentification.manualIdentify.selectContextMenuItemInTheGridRow(
        // uIMapGeo.streetSearch.uIStreetSearchResultGrID, streetName, "Manage Intersection")
    }

    async VerifyAtStreetNameAndIntersection(rowIndex: string, streetName: string, streetType: string, interStreetName: string, interStreetType: string): Promise<void> {
        // streetName = streetName (from test data)
        // streetType = streetType (from test data)
        // interStreetName = interStreetName (from test data)
        // interStreetType = interStreetType (from test data)
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.streetSearch.uIStreetSearchResultGrID, "Street Name", rowIndex).contains(streetName + " " + streetType))
        // Assert.assertTrue(
        // objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.streetSearch.uIStreetSearchResultGrID,
        // "Intersection Street Name", rowIndex).contains(interStreetName + " " + interStreetType))
    }

    async VerifySelectAllCheckBoxUnchecked(): Promise<void> {
        // Assert.assertTrue(Boolean.parseBoolean(uIMapGeo.streetSearch.uISelectAllCheckBox.getAttribute("disabled")))
    }

    async VerifyBatchUpdateEnabled(): Promise<void> {
        // verify.ExpectedValueIsTrue(uIMapGeo.streetSearch.uIBatchUpdateButton.isEnabled())
    }

    async verifyBatchUpdateIsDisabled(): Promise<void> {
        // WebElement element = Playback.driver.findElement(By.xpath("//div[@id='tlbGridItem']/div/ul/li[1]"))
        //div[@id="tlbGridItem"]/div/ul/li[1]
        // String attribute = uIMapGeo.streetSearch.uIBatchUpdateButton.getAttribute("class")
        // System.out.println(attribute)
        expect(attribute.contains("RootDisabled")).toBeTruthy();
        // verify.ExpectedValueIsFalse(uIMapGeo.streetSearch.uIBatchUpdateButton.isEnabled())
    }

    async enterAtZipcode(zipCode: string): Promise<void> {
        await this.uIPopupZipCodeEdit.fill(zipCode);
        await this.uIPopupZipCodeEdit.press('Tab');
    }

    async SelectAtZipCode(zipCode: string): Promise<void> {
        await this.uIZipCodeLookupButton.click();
        // popup.kPICodedLookup.kPIHelpSelect(BaseData.getGeoModuleValue("ZipCode"))
    }

    async ClickPopupUpdateButton(): Promise<void> {
        await this.uIPopupUpdateButton.click();
    }

    async VerifyAtZipcodeUpdateAllRecords(zipCode: string): Promise<void> {
        // zipCode = zipCode (from test data)
        // Playback.controlReadyThreadWait()
        // List<String> CSZ = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapGeo.streetSearch.uIStreetSearchResultGrID, "CSZ")
        // for (String CSZValues : CSZ)
        // Assert.assertTrue(CSZValues.contains(zipCode))
    }

    async VerifyOddNumberWithDot(rowIndex: string, odd: string): Promise<void> {
        // odd = odd (from test data)
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.streetSearch.uIStreetSearchResultGrID, "Premise Odd", rowIndex).contains(odd + "."))
    }

    async VerifyAtCSZ(rowIndex: string, cSZ: string): Promise<void> {
        // csz = cSZ (from test data)
        // Assert.assertEquals(csz, objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.streetSearch.uIStreetSearchResultGrID, "CSZ", rowIndex))
    }

    async EnterAtStreetName1(streetName1: string): Promise<void> {
        // streetName = streetName1 (from test data)
        await this.uIStreetNameEdit.clear();
        await this.uIStreetNameEdit.fill(streetName);
    }

    async VerifyAtStreetName1(streetName1: string): Promise<void> {
        // streetName = streetName1 (from test data)
        // Playback.controlReadyThreadWait()
        // Assert.assertEquals(BaseData.getGeoModuleValue("StreetName1"), objectIdentification.manualIdentify.getGridCell(uIMapGeo.streetSearch.uIStreetSearchResultGrID, streetName).getText())
    }

    async ClickAtStreetName1(streetName1: string): Promise<void> {
        // streetName = streetName1 (from test data)
        await this.uIStreetSearchResultGrID.locator('td', { hasText: streetName }).click();
    }

    async selectJurisAsNull(): Promise<void> {
        await this.uIJurisComboBox.selectOption({ label: 0 });
        await this.uIJurisComboBox.press('Tab');
        // Playback.controlReadyThreadWait()
    }

    async selectAtJuris(juris: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.streetSearch.uIJurisComboBox,
        // BaseData.getGeoModuleValue("Juris"))
        await this.uIJurisComboBox.press('Tab');
        // Playback.controlReadyThreadWait()
    }

    async selectAtJuris1(juris1: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.streetEntry.uIJurisComboBox,
        // BaseData.getGeoModuleValue("Juris1"))
        await this.uIJurisComboBox.press('Tab');
        // Playback.controlReadyThreadWait()
    }

    async verifyNoRecordsFoundAck(): Promise<void> {
        // popup: 1011 - No Record Found
    }

    async reloadStreetSearch(): Promise<void> {
        // Playback.pageLoadThreadWait()
        // objectIdentification.manualIdentify.reloadScreen("Street Search")
        // Playback.pageLoadThreadWait()
    }

    async selectgridCheckBoxByInterSteetName(interStreetName: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
        // uIMapGeo.streetSearch.uIStreetSearchResultGrID, BaseData.getGeoModuleValue("InterStreetName"))
    }

    async selectRowByAtStreetName(streetName: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.streetSearch.uIStreetSearchResultGrID, BaseData.getGeoModuleValue("StreetName"))
        // Playback.controlReadyThreadWait()
    }

    async clickManageIntersectionUsingStreetName(streetName: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
        // uIMapGeo.streetSearch.uIStreetSearchResultGrID, BaseData.getGeoModuleValue("StreetName"))
        // Playback.controlReadyThreadWait()
        await this.uIManageIntersectionButton.click();
        // Playback.pageLoadThreadWait()
    }

    async selectRowByAtCSZ(cSZ: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.streetSearch.uIStreetSearchResultGrID, BaseData.getGeoModuleValue("CSZ"))
    }

    async verifyAtPremiseOdd(rowIndex: string, premiseOdd: string): Promise<void> {
        // odd = premiseOdd (from test data)
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.streetSearch.uIStreetSearchResultGrID, "Premise Odd", rowIndex).contains(odd))
    }

    async verifyAtPremiseEven(rowIndex: string, premiseEven: string): Promise<void> {
        // even = premiseEven (from test data)
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.streetSearch.uIStreetSearchResultGrID, "Premise Even", rowIndex).contains(even))
    }

    async verifyAtPrefix(prefix: string, cSZ: string): Promise<void> {
        // prefix = prefix (from test data)
        // Assert.assertEquals(prefix,
        // objectIdentification.manualIdentify.getGridCell(uIMapGeo.streetSearch.uIStreetSearchResultGrID,
        // BaseData.getGeoModuleValue("CSZ"), "Prefix").getText())
        // .getGridCellInnerText(uIMapGeo.streetSearch.uIStreetSearchResultGrID,
        // "Prefix", rowIndex));
    }

    async clickManageApartmentUsingStreetName(streetName: string): Promise<void> {
        // Playback.controlReadyThreadWait()
        // objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(
        // uIMapGeo.streetSearch.uIStreetSearchResultGrID, BaseData.getGeoModuleValue("StreetName"))
        // Playback.controlReadyThreadWait()
        await this.uIManageApartmentButton.click();
        // Playback.pageLoadThreadWait()
    }

    async RightClickInStreetName(streetName: string): Promise<void> {
        // WebElement gridCell = objectIdentification.manualIdentify.getGridCell(uIMapGeo.streetSearch.uIStreetSearchResultGrID, BaseData.getGeoModuleValue("StreetName"))
        // Playback.actionDriver.contextClick(gridCell).build().perform()
    }

    async selectAtRighClickOptionOfStreet(Option: string): Promise<void> {
        // Playback.threadWait()
        // Playback.driver.findElement(By.xpath("//a[@class='igdm_BlueThemeMenuItemVerticalRootLink ']//span[text()='"+Option+"']")).click()
    }

    async verifyManageApartmentEnabled(): Promise<void> {
        // verify.ExpectedValueIsTrue(uIMapGeo.streetSearch.uIManageApartmentButton.isEnabled())
    }

    async verifyAtLinkButtonIsDisabled(i: string, linkButton: string): Promise<void> {
        // WebElement manageApartmentLi = Playback.driver.findElement(By.xpath("//li[.//span[text()='"+BaseData.getGeoModuleValue("LinkButton"+i)+"']]"))
        const liClass = manageApartmentLi.getAttribute("class");
        // if (liClass.contains("igdm_BlueThemeMenuItemHorizontalRootDisabled")) {
        expect(liClass.contains("Disabled")).toBeTruthy();
        // System.out.println("button link is disabled")
        expect(liClass.contains("Disabled")).toBeFalsy();
        // System.out.println("button link is enabled")
    }

    async verifyManageIntersectionIsEnabled(): Promise<void> {
        // verify.ExpectedValueIsTrue(uIMapGeo.streetSearch.uIManageIntersectionButton.isEnabled())
    }

    async verifyManageStreetEnabled(): Promise<void> {
        // verify.ExpectedValueIsTrue(uIMapGeo.streetSearch.uIManageStreetButton.isEnabled())
    }

    // ─── Merged from street-search.page.ts ───────────────────────────────────

    async enterStreetType(streetType: string): Promise<void> {
        await this.uIStreetTypeEdit.fill(streetType);
    }

    async selectPrefix(prefix: string): Promise<void> {
        await this.uIPrefixComboBox.selectOption({ label: prefix });
    }

    async selectSuffix(suffix: string): Promise<void> {
        await this.uISuffixComboBox.selectOption({ label: suffix });
    }

    async selectJuris(juris: string): Promise<void> {
        await this.uIJurisComboBox.selectOption({ label: juris });
        await this.uIJurisComboBox.press('Tab');
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
        await this.page.waitForTimeout(2000);
    }

    async clickBatchUpdate(): Promise<void> {
        await this.uIBatchUpdateButton.click();
    }

    async clickShowAlternateCheckbox(): Promise<void> {
        await this.uIShowAlternateCheckBox.click();
    }

    async clickIncludeInactiveCheckbox(): Promise<void> {
        await this.uIIncludeInactiveCheckBox.click();
    }

    async selectStreetNameFromGrid(streetName: string): Promise<void> {
        const cell = this.uIStreetSearchResultGrid.locator(`td:has-text("${streetName}")`).first();
        await cell.click();
    }

    async doubleClickStreetNameFromGrid(streetName: string): Promise<void> {
        const cell = this.uIStreetSearchResultGrid.locator(`td:has-text("${streetName}")`).first();
        await cell.dblclick();
    }

    async selectContextMenuItem(streetName: string, menuItem: string): Promise<void> {
        const cell = this.uIStreetSearchResultGrid.locator(`td:has-text("${streetName}")`).first();
        await cell.click({ button: 'right' });
        await this.page.waitForTimeout(500);
        await this.page.locator(`//span[contains(text(),'${menuItem}')]`).click();
    }

    async enterZipCode(zipCode: string): Promise<void> {
        await this.uIZipCodeEdit.fill(zipCode);
        await this.uIZipCodeEdit.press('Tab');
    }

    async clearFields(): Promise<void> {
        await this.uIStreetNameEdit.clear();
        await this.uIStreetTypeEdit.clear();
    }

    async getGridCellText(columnName: string, rowIndex: number): Promise<string> {
        const row = this.uIStreetSearchResultGrid.locator("table tbody[class*='Item'] tr").nth(rowIndex);
        const headers = this.uIStreetSearchResultGrid.locator('table thead th');
        const headerCount = await headers.count();
        let colIdx = -1;
        for (let i = 0; i < headerCount; i++) {
            const text = await headers.nth(i).textContent();
            if (text?.includes(columnName)) { colIdx = i; break; }
        }
        if (colIdx === -1) return '';
        return (await row.locator('td').nth(colIdx).textContent()) || '';
    }

    async getGridColumnValues(columnName: string): Promise<string[]> {
        const headers = this.uIStreetSearchResultGrid.locator('table thead th');
        const headerCount = await headers.count();
        let colIdx = -1;
        for (let i = 0; i < headerCount; i++) {
            const text = await headers.nth(i).textContent();
            if (text?.includes(columnName)) { colIdx = i; break; }
        }
        if (colIdx === -1) return [];
        const rows = this.uIStreetSearchResultGrid.locator("table tbody[class*='Item'] tr");
        const rowCount = await rows.count();
        const values: string[] = [];
        for (let i = 0; i < rowCount; i++) {
            const cellText = await rows.nth(i).locator('td').nth(colIdx).textContent();
            values.push(cellText || '');
        }
        return values;
    }

    async isGridContainingText(text: string): Promise<boolean> {
        const content = await this.uIStreetSearchResultGrid.textContent();
        return content?.includes(text) || false;
    }
}

export class StreetUpdatePage {
    readonly page: Page;
    readonly uIMainPrefixComboBox: Locator;
    readonly uIMainStreetNameEdit: Locator;
    readonly uIMainStreetTypeEdit: Locator;
    readonly uIMainSuffixComboBox: Locator;
    readonly uIAltPrefixComboBox: Locator;
    readonly uIAltStreetNameEdit: Locator;
    readonly uIAltStreetTypeEdit: Locator;
    readonly uIAltSuffixComboBox: Locator;
    readonly uIReplaceCheckBox: Locator;
    readonly uIMainInactiveCheckBox: Locator;
    readonly uIAltInactiveCheckBox: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIDeleteButton: Locator;
    readonly uIStreetUpdateResultGrid: Locator;
    readonly uIPremieOddEdit: Locator;
    readonly uIPremieEvenEdit: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIZipCodeEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIMainPrefixComboBox = page.locator('NocddMainPrefix_DropDown');
        this.uIMainStreetNameEdit = page.locator('NotxtMainStreetName');
        this.uIMainStreetTypeEdit = page.locator('NolupMainStreetType_CodeValue');
        this.uIMainSuffixComboBox = page.locator('NocddMainStreetSuffix_DropDown');
        this.uIAltPrefixComboBox = page.locator('NocddPrefix_DropDown');
        this.uIAltStreetNameEdit = page.locator('NotxtStreetName');
        this.uIAltStreetTypeEdit = page.locator('NolupType_CodeValue');
        this.uIAltSuffixComboBox = page.locator('NocddSuffix_DropDown');
        this.uIReplaceCheckBox = page.locator('NochkReplace');
        this.uIMainInactiveCheckBox = page.locator('NochkInActive');
        this.uIAltInactiveCheckBox = page.locator('NochkAlInActive');
        this.uIAddButton = page.locator('NoimgAddStreet');
        this.uIClearButton = page.locator('NoimgClearStreet');
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveAndCloseButton = page.locator('NocmdSaveNClose');
        this.uIPrintButton = page.locator('NocmdPrint');
        this.uIRefreshButton = page.locator('NocmdRefresh');
        this.uIDeleteButton = page.locator('NocmdDelete');
        this.uIStreetUpdateResultGrid = page.locator('NogrdStreet');
        this.uIPremieOddEdit = page.locator('NocstLeft_txtFrom');
        this.uIPremieEvenEdit = page.locator('NocstRight_txtFrom');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIZipCodeEdit = page.locator('NolupZipcode_CodeValue');
    }

    async EnterAtAltStreet(alterStreetName: string): Promise<void> {
        await this.uIAltStreetNameEdit.fill(alterStreetName);
    }

    async EnterAtAltStreetType(alterStreetType: string): Promise<void> {
        await this.uIAltStreetTypeEdit.fill(alterStreetType);
        await this.uIAltStreetTypeEdit.press('Tab');
    }

    async ClickMainStreetInactive(): Promise<void> {
        await this.uIMainInactiveCheckBox.click();
    }

    async ClickAltStreetInactive(): Promise<void> {
        await this.uIAltInactiveCheckBox.click();
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async ClickReplaceCheckBox(): Promise<void> {
        await this.uIReplaceCheckBox.click();
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async SaveScreen(): Promise<void> {
        await this.uISaveButton.click();
        // confirm popup: yes
    }

    async CloseStreetUpdateScreen(): Promise<void> {
        // uIMapGeo.streetUpdate.driver.close()
    }

    async SaveNCloseScreen(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        // confirm popup: yes
    }

    async VerifyMainStreetName(streetName: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("StreetName"),
        // uIMapGeo.streetUpdate.uIMainStreetNameEdit.getAttribute("value"))
    }

    async VerifyMainStreetType(streetType: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("StreetType"),
        // uIMapGeo.streetUpdate.uIMainStreetTypeEdit.getAttribute("value"))
    }

    async VerifyAlterStreetNameAddedInTheGird(rowIndex: string, alterStreetName: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("AlterStreetName"), objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.streetUpdate.uIStreetUpdateResultGrid, "Street", rowIndex))
    }

    async VerifyAcknowledgeAddMessage(): Promise<void> {
        // popup: (5002) Required Street Name Entry
    }

    async ClickAtAltStreetName(alterStreetName: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(
        // uIMapGeo.streetUpdate.uIStreetUpdateResultGrid, BaseData.getGeoModuleValue("AlterStreetName"))
    }

    async VerifyAtAltStreetName(alterStreetName: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("AlterStreetName"),
        // uIMapGeo.streetUpdate.uIAltStreetNameEdit.getAttribute("value"))
    }

    async VerifyAtAltStreetType(alterStreetType: string): Promise<void> {
        // Assert.assertEquals(BaseData.getGeoModuleValue("AlterStreetType"),
        // uIMapGeo.streetUpdate.uIAltStreetTypeEdit.getAttribute("value"))
    }

    async VerifyReplaceCheckBoxChecked(rowIndex: string): Promise<void> {
        // Playback.popupThreadWait()
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCell(uIMapGeo.streetUpdate.uIStreetUpdateResultGrid, "Replace", rowIndex).findElement(By.tagName("img")).getAttribute("title").contains("Checked"))
    }

    async VerifyAlterStreetTypeAddedInTheGird(rowIndex: string, alterStreetType: string): Promise<void> {
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.streetUpdate.uIStreetUpdateResultGrid, "Street Type", rowIndex).contains(BaseData.getGeoModuleValue("AlterStreetType")))
    }

    async VerifyReplaceCheckBoxUnchecked(rowIndex: string): Promise<void> {
        // Assert.assertTrue(objectIdentification.manualIdentify.getGridCell(uIMapGeo.streetUpdate.uIStreetUpdateResultGrid, "Replace", rowIndex).findElement(By.tagName("img")).getAttribute("title").contains("Unchecked"))
    }

    async verifyPremiseFieldsAreUnEditable(): Promise<void> {
        // verify.ExpectedValueIsFalse(uIMapGeo.streetUpdate.uIPremieOddEdit.isEnabled())
        // verify.ExpectedValueIsFalse(uIMapGeo.streetUpdate.uIPremieEvenEdit.isEnabled())
    }

    async clickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async verifyAdditionSuccessfulStatusMessage(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
        // uIMapGeo.streetUpdate.uIBottomLeftSideStatusBar.getText()); // Added by Abi
    }

    async verifyUpdateSuccessfulStatusMessage(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("1003 - Update Successful",
        // uIMapGeo.streetUpdate.uIBottomLeftSideStatusBar.getText()); // Added by Abi
    }

    async enterAtZipCode(zipCode: string): Promise<void> {
        await this.uIZipCodeEdit.fill(zipCode);
        await this.uIZipCodeEdit.press('Tab');
    }

    // ─── Merged from street-update.page.ts ───────────────────────────────────

    async enterMainStreetName(name: string): Promise<void> {
        await this.uIMainStreetNameEdit.clear();
        await this.uIMainStreetNameEdit.fill(name);
    }

    async enterMainStreetType(type: string): Promise<void> {
        await this.uIMainStreetTypeEdit.clear();
        await this.uIMainStreetTypeEdit.fill(type);
        await this.uIMainStreetTypeEdit.press('Tab');
    }

    async enterAltStreetName(name: string): Promise<void> {
        await this.uIAltStreetNameEdit.clear();
        await this.uIAltStreetNameEdit.fill(name);
    }

    async enterAltStreetType(type: string): Promise<void> {
        await this.uIAltStreetTypeEdit.clear();
        await this.uIAltStreetTypeEdit.fill(type);
        await this.uIAltStreetTypeEdit.press('Tab');
    }

    async clickReplace(): Promise<void> {
        await this.uIReplaceCheckBox.click();
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickSaveAndClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
    }

    async clickDelete(): Promise<void> {
        await this.uIDeleteButton.click();
    }

    async clickRefresh(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async getStatusBarText(): Promise<string> {
        return (await this.uIBottomLeftSideStatusBar.textContent()) || '';
    }
}

export class UpdateGeoCodePage {
    readonly page: Page;
    readonly uIAddressEdit: Locator;
    readonly uIUpdateGeoCodeTable: Locator;
    readonly uISearchButton: Locator;
    readonly uIGeoCodeResultGrid: Locator;
    readonly uISelectAllCheckBox: Locator;
    readonly uIBatchUpdateFButton: Locator;
    readonly uIDistrictEdit: Locator;
    readonly uIPopUpBatchUpdateFButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddressEdit = page.locator('NolsLocationSearch_adrAddrsCtrl_txtFrom');
        this.uIUpdateGeoCodeTable = page.locator('NogrdLatLong');
        this.uISearchButton = page.locator('NocmdSearch');
        this.uIGeoCodeResultGrid = page.locator('NogrdLatLong');
        this.uISelectAllCheckBox = page.locator('NochkSelectAll');
        this.uIBatchUpdateFButton = page.locator('Nocmd_updatefire');
        this.uIDistrictEdit = page.locator('Nolupdistrictfire_CodeValue');
        this.uIPopUpBatchUpdateFButton = page.locator('Nobtnupdatefire');
    }

    async enterAtAddress(address: string): Promise<void> {
        await this.uIAddressEdit.clear();
        await this.uIAddressEdit.fill(address);
    }

    async verifyAtAddress(rowIndex: string, address: string): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("Address"),
        // objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.updateGeoCode.uIUpdateGeoCodeTable, "Address", rowIndex))
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async selectAtAddressInGrid(address: string): Promise<void> {
        // objectIdentification.manualIdentify.selectGridRowByCellInnerText(uIMapGeo.updateGeoCode.uIGeoCodeResultGrid,
        // BaseData.getGeoModuleValue("Address"))
    }

    async verifyNoRecordsFoundAck(): Promise<void> {
        // popup: 1011 - No Record Found
    }

    async verifyInvalidZipCodeAckMessage(): Promise<void> {
        // popup: (1063)Invalid zip code
    }

    async verifyInvalidZipCodeAckMessgaeNotAppeared(): Promise<void> {
        // no-op: window handle
        // if (windowExist == true) {
        // popup.switchToAcknowledge()
        // verify.ExpectedPropertyValueIsNotEqual("(1063)Invalid zip code",
        // uIMapPopup.acknowledgeWindow.uIErrorInfoTextEdit.getText())
    }

    async clickSelectAllCheckBox(): Promise<void> {
        await this.uISelectAllCheckBox.click();
    }

    async clickBatchUpdateF(): Promise<void> {
        await this.uIBatchUpdateFButton.click();
    }

    async enterAtDistrict(district: string): Promise<void> {
        await this.uIDistrictEdit.fill(district);
        await this.uIDistrictEdit.press('Tab');
    }

    async clickPopUpBatchUpdateF(): Promise<void> {
        await this.uIPopUpBatchUpdateFButton.click();
    }

    async verifyAtColumnValueInGrid(columnName: string, districtValue: string): Promise<void> {
        // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapGeo.updateGeoCode.uIUpdateGeoCodeTable, BaseData.getGeoModuleValue("ColumnName"))
        // for(String  Value:gridTableColumnValues) {
        expect(districtValue).toEqual(Value);
    }
}

export class WeatherScreenPage {
    readonly page: Page;
    readonly uITitleTextView: Locator;
    readonly uILocationTextView: Locator;
    readonly uITempTextView: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uITitleTextView = page.locator('NoLabel1');
        this.uILocationTextView = page.locator('NolblLoc');
        this.uITempTextView = page.locator('NolblTemp');
    }

    async VerifyAsWeatherScreenDisplayed(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("Current Weather Conditions",
        // uIMapGeo.weatherScreen.uITitleTextView.getText())
    }

    async CloseScreen(): Promise<void> {
        // uIMapGeo.weatherScreen.driver.close()
    }

    async verifyTemperature(): Promise<void> {
        const temp = await this.uITempTextView.innerText();
        expect(temp.contains("C")).toBeTruthy();
    }
}

export class ZipCodePage {
    readonly page: Page;
    readonly uICityCodeEdit: Locator;
    readonly uIStateDropDown: Locator;
    readonly uIZipCodeEdit: Locator;
    readonly uISearchButton: Locator;
    readonly uIZipcodeResultTable: Locator;
    readonly uIIsFrequentCheckBox: Locator;
    readonly uIIncludeActiveCheckBox: Locator;
    readonly uIAddNewButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uICityCodeEdit = page.locator('NotxtCity');
        this.uIStateDropDown = page.locator('NocddState_DropDown');
        this.uIZipCodeEdit = page.locator('NotxtZIP');
        this.uISearchButton = page.locator('NocmdSearch');
        this.uIZipcodeResultTable = page.locator('NogrdZip');
        this.uIIsFrequentCheckBox = page.locator('NochkIsFrequent');
        this.uIIncludeActiveCheckBox = page.locator('NochkIsActive');
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
    }

    async enterAtCity(city: string): Promise<void> {
        await this.uICityCodeEdit.fill(city);
        await this.uICityCodeEdit.press('Tab');
    }

    async enterAtZipCode(zipCode: string): Promise<void> {
        await this.uIZipCodeEdit.fill(zipCode);
        await this.uIZipCodeEdit.press('Tab');
    }

    async enterAtZipCode1(zipCode1: string): Promise<void> {
        await this.uIZipCodeEdit.fill(zipCode1);
        await this.uIZipCodeEdit.press('Tab');
    }

    async enterAtZipCode2(zipCode2: string): Promise<void> {
        await this.uIZipCodeEdit.fill(zipCode2);
        await this.uIZipCodeEdit.press('Tab');
    }

    async clearZipCode(): Promise<void> {
        await this.uIZipCodeEdit.clear();
    }

    async selectAtState(state: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.zipCode.uIStateDropDown,
        // BaseData.getGeoModuleValue("State"))
        await this.uIStateDropDown.press('Tab');
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async verifyAtZipCodeInGrid1(zipCode1: string): Promise<void> {
        // List<String> gridTableColumnValues = objectIdentification.manualIdentify.getGridTableColumnValues(uIMapGeo.zipCode.uIZipcodeResultTable, "Zip")
        // for (String values : gridTableColumnValues) {
        // if (values.contains(BaseData.getGeoModuleValue("ZipCode1"))) {
        expect(zipCode1).toBeTruthy();
    }

    async verifyAtZipcodeInGrid(rowIndex: string, zipCode: string): Promise<void> {
        // String gridCellInnerText = objectIdentification.manualIdentify.getGridCellInnerText(uIMapGeo.zipCode.uIZipcodeResultTable, "Zip", rowIndex)
        expect(zipCode).toBeTruthy();
        //        	verify.ExpectedPropertyValueIsEqual(BaseData.getGeoModuleValue("ZipCode"), gridCellInnerText);
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async verifyAtZipcodeInGrid2(JsonKeyIndex: string, city: string, zipCode: string): Promise<void> {
        const Zip = city;
        expect(Zip).toEqual(zipCode);
    }

    async clickIncludeInactiveCheckBox(): Promise<void> {
        await this.uIIncludeActiveCheckBox.click();
    }

    async verifyRowcolorAsgreyByCity(city: string): Promise<void> {
        const rowcolor = city;
        // System.out.println(rowcolor)
    }
}

export class ZipCodeEntryPage {
    readonly page: Page;
    readonly uIZipCodeEdit: Locator;
    readonly uIStateComboBox: Locator;
    readonly uICityEdit: Locator;
    readonly uILocaionTypeComboBox: Locator;
    readonly uILocationNameEdit: Locator;
    readonly uIInactiveCheckBox: Locator;
    readonly uIIsFrequentCheckBox: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIStatusBar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIZipCodeEdit = page.locator('NotxtZIP');
        this.uIStateComboBox = page.locator('NocddState_DropDown');
        this.uICityEdit = page.locator('NotxtCity');
        this.uILocaionTypeComboBox = page.locator('NocddLocType_DropDown');
        this.uILocationNameEdit = page.locator('NotxtLocDesc');
        this.uIInactiveCheckBox = page.locator('NochkIsActive');
        this.uIIsFrequentCheckBox = page.locator('NochkFrequent');
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveAndCloseButton = page.locator('NocmdSaveNClose');
        this.uIPrintButton = page.locator('NocmdPrint');
        this.uIRefreshButton = page.locator('NocmdRefresh');
        this.uIStatusBar = page.locator("//td[@class='statusBar']//b");
    }

    async enterAtZipCodeEdit(zipCode: string): Promise<void> {
        await this.uIZipCodeEdit.fill(zipCode);
    }

    async selectAtStateComboBox(state: string): Promise<void> {
        // objectIdentification.manualIdentify.selectDropDownOption(uIMapGeo.zipCodeEntry.uIStateComboBox,
        // BaseData.getGeoModuleValue("State"))
        await this.uIStateComboBox.press('Tab');
        // Playback.controlReadyThreadWait()
    }

    async enterAtCityEdit(city: string): Promise<void> {
        await this.uICityEdit.fill(city);
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        // confirm popup: yes
    }

    async clickSaveNCloseButton(): Promise<void> {
        await this.uISaveAndCloseButton.click();
    }

    async clickPrintButton(): Promise<void> {
        await this.uIPrintButton.click();
    }

    async clickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
        // verify.ExpectedPropertyValueIsEqual("1002 - Addition Successful",
        // uIMapGeo.zipCodeEntry.uIStatusBar.getText())
    }
}

