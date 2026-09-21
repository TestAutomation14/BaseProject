// @ts-nocheck import { Page, Locator, expect } from '@playwright/test'; import
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { BaseData }
    from '../../data/base-data'; import { PoliceData } from
    '../../data/police-data'; import { GridHelpers } from
    '../../helpers/grid-helpers'; import { ElementHelpers } from
    '../../helpers/element-helpers'; import { PopupHelpers } from
    '../../helpers/popup-helpers'; import { DateHelpers, RandomHelpers } from
    '../../helpers';

export class AlarmAccountSearchPage {
    readonly page: Page; readonly popup:
        PopupHelpers; readonly grid: GridHelpers; readonly elementHelpers:
        ElementHelpers; readonly uISearchButton: Locator; readonly uIAddNewButton:
        Locator; readonly uIResetButton: Locator; readonly uIBackButton: Locator;
    readonly uIAlarmAccountSearchGridTable: Locator; readonly uIAccountNoEdit:
        Locator; readonly uIAlarmNoEdit: Locator; readonly uIRefreshLink: Locator;
    readonly uIPopupHeaderLable: Locator; readonly uIPopupCloseButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uISearchButton = page.locator("//span[contains(text(),'Search')]");
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uIAlarmAccountSearchGridTable = page.locator('#grdAlarms');
        this.uIAccountNoEdit = page.locator('#tabAlarms_tmpl0_UsrAlarmsrchBasic1_txtAccountNo');
        this.uIAlarmNoEdit = page.locator('#tabAlarms_tmpl0_UsrAlarmsrchBasic1_txtAlarmNo');
        this.uIRefreshLink = page.locator("//span[contains(text(),'Refresh')]");
        this.uIPopupHeaderLable = page.locator('#lblHeader');
        this.uIPopupCloseButton = page.locator("//span[@class='close']");
    }

    async ClickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async ClickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async ClickBack(): Promise<void> {
        await this.uIBackButton.click();
    }

    async EnterAtAlarmNo(): Promise<void> {
        await this.uIAlarmNoEdit.fill(PoliceData.getAlarmModuleValue("AlarmNo"));
    }

    async EnterAtAccountNo(): Promise<void> {
        await this.uIAccountNoEdit.fill(PoliceData.getAlarmModuleValue("AccountNo"));
    }

    async VerifyAtAccountNo(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIAlarmAccountSearchGridTable, "Account#", rowIndex);
        expect(text).toBe(PoliceData.getAlarmModuleValue("AccountNo"));
    }

    async VerifyAtAlarmNo(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIAlarmAccountSearchGridTable, "Alarm#", rowIndex);
        expect(text).toBe(PoliceData.getAlarmModuleValue("AlarmNo"));
    }

    async SelectAtAccountNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAlarmAccountSearchGridTable, PoliceData.getAlarmModuleValue("AccountNo"));
    }

    async SelectAtAlarmNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAlarmAccountSearchGridTable, PoliceData.getAlarmModuleValue("AlarmNo"));
    }

    async SelectAtAlarmLocation(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAlarmAccountSearchGridTable, PoliceData.getAlarmModuleValue("AlarmLocation"));
    }

    async ClickRefreshLink(): Promise<void> {
        await this.page.waitForLoadState('load');
        await this.uIRefreshLink.click();
    }

    async verifyThisAccountIsStillUsingTheOldAlarmPopsUp(): Promise<void> {
        const expectedText =
            "This account is still using the Old Alarm system.\n" +
            "Please contact the Prophoenix Support Team.\n" +
            "Thank you for understanding.";
        const actualText = (await this.uIPopupHeaderLable.locator("xpath=./following::div/p").innerText()).trim();
        expect(actualText).toBe(expectedText);
    }

    async verifyThisAccountIsStillUsingTheOldAlarmPopsUpNotFound(): Promise<void> {
        const expectedText =
            "This account is still using the Old Alarm system.\n" +
            "Please contact the Prophoenix Support Team.\n" +
            "Thank you for understanding.";
        const actualText = (await this.uIPopupHeaderLable.locator("xpath=./following::div/p").innerText()).trim();
        expect(actualText).not.toBe(expectedText);
    }

    async closeTheOldAlarmPopUp(): Promise<void> {
        await this.uIPopupCloseButton.click();
    }

}

export class AccountEntryPage {
    readonly page: Page; readonly popup:
        PopupHelpers; readonly grid: GridHelpers; readonly elementHelpers:
        ElementHelpers; readonly uISaveButton: Locator; readonly uISaveAndCloseButton:
        Locator; readonly uIPrintButton: Locator; readonly uIResetButton: Locator;
    readonly uIAccountNoEdit: Locator; readonly uIInactiveCheckBox: Locator;
    readonly uIInactiveDateEdit: Locator; readonly uIAccountDateEdit: Locator;
    readonly uILastNameEdit: Locator; readonly uIFirstNameEdit: Locator; readonly
    uIAccountAddressEdit: Locator; readonly uIAddressEdit: Locator; readonly
    uIAddressVerifyCheckBox: Locator; readonly uIContactLastNameEdit: Locator;
    readonly uIContactFirstNameEdit: Locator; readonly uIAccountEntryGridTable:
        Locator; readonly uINewAlarmButton: Locator; readonly uITransactionButton:
        Locator; readonly uINameInfoIcon: Locator; readonly uINameTypeEdit: Locator;
    readonly uINameIDEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIAccountNoEdit = page.locator('#txtAccountNo');
        this.uIInactiveCheckBox = page.locator('#chkIsActive');
        this.uIInactiveDateEdit = page.locator('#txtInactiveDttm');
        this.uIAccountDateEdit = page.locator('#dtAccountDate_KPIDttmCtrl');
        this.uILastNameEdit = page.locator('#nameAccount_LastName');
        this.uIFirstNameEdit = page.locator('#nameAccount_FirstName');
        this.uIAccountAddressEdit = page.locator('#txtAccountAddress');
        this.uIAddressEdit = page.locator('#adrLocation_txtFrom');
        this.uIAddressVerifyCheckBox = page.locator('#adrLocation_chkVerify');
        this.uIContactLastNameEdit = page.locator('#nameContact_LastName');
        this.uIContactFirstNameEdit = page.locator('#nameContact_FirstName');
        this.uIAccountEntryGridTable = page.locator('#grdAccountEntry');
        this.uINewAlarmButton = page.locator('#cmdNewAlarm');
        this.uITransactionButton = page.locator('#cmdTransaction');
        this.uINameInfoIcon = page.locator('#nameAccount_imgSrch');
        this.uINameTypeEdit = page.locator('#nameAccount_NameType');
        this.uINameIDEdit = page.locator('#nameAccount_NameTypeID');
    }

    async ClickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async SaveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async EnterAtAccountNo(): Promise<void> {
        await this.uIAccountNoEdit.fill(PoliceData.getAlarmModuleValue("AccountNo"));
    }

    async TabAccountDate(): Promise<void> {
        await this.uIAccountDateEdit.press('Tab');
    }

    async EnterAtLastName(): Promise<void> {
        await this.uILastNameEdit.fill(PoliceData.getAlarmModuleValue("LastName"));
    }

    async EnterAtFirstName(): Promise<void> {
        await this.uIFirstNameEdit.fill(PoliceData.getAlarmModuleValue("FirstName"));
        await this.uIFirstNameEdit.press('Tab');
    }

    async SelectAtName(): Promise<void> {
        const searchText = PoliceData.getAlarmModuleValue("LastName") + ', ' + PoliceData.getAlarmModuleValue("FirstName");
        const resultTable = this.popup.nameSearchGrid;
        await this.grid.selectRowCheckboxByCellText(resultTable, searchText);
        await this.popup.selectNameButton.click();
        await this.page.waitForLoadState('load');
    }

    async EnterAtAddress(): Promise<void> {
        await this.uIAddressEdit.fill(PoliceData.getAlarmModuleValue("Address"));
        await this.uIAddressEdit.press('Tab');
    }

    async GetAccountAddress(): Promise<string> {
        await this.page.waitForTimeout(1000);
        return await this.uIAccountAddressEdit.inputValue();
    }

    async ClickNewAlarmButton(): Promise<void> {
        await this.uINewAlarmButton.click();
    }

    async VerifyAlarmButtonDisplayed(): Promise<void> {
        await expect(this.uINewAlarmButton).toBeVisible();
    }

    async VerifyTransactionButtonDisplayed(): Promise<void> {
        await expect(this.uITransactionButton).toBeVisible();
    }

    async CloseScreen(): Promise<void> {
        await this.page.close();
    }

    async VerifyAcknowledgeMandatoryData(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(8) Enter mandatory PoliceData");
        await this.popup.acknowledgeOk();
    }

    async VerifyAtAlarmType(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIAccountEntryGridTable, "Type", rowIndex);
        expect(text).toBe(PoliceData.getAlarmModuleValue("AlarmType"));
    }

    async VerifyAlarmNo(alarmNo: string, rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIAccountEntryGridTable, "Alarm#", rowIndex);
        expect(text).toBe(alarmNo);
    }

    async ClickNameInfoIcon(): Promise<void> {
        await this.uINameInfoIcon.click();
        await this.page.waitForTimeout(1000);
    }

    async ClickAtAlarmNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAccountEntryGridTable, PoliceData.getAlarmModuleValue("AlarmNo"));
    }

    async VerifyAtAccountNo(): Promise<void> {
        const value = await this.uIAccountNoEdit.inputValue();
        expect(value).toBe(PoliceData.getAlarmModuleValue("AccountNo"));
    }

    async enterAtNameID(): Promise<void> {
        const nameID = PoliceData.getAlarmModuleValue("NameID");
        await this.uINameTypeEdit.fill(nameID.substring(0, 1));
        await this.uINameIDEdit.fill(nameID.substring(2));
        await this.page.waitForTimeout(500);
        await this.uINameIDEdit.press('Tab');
        await this.page.waitForTimeout(1000);
        await this.page.waitForLoadState('load');
    }

    async SelectAtAlarmLocation(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAccountEntryGridTable, PoliceData.getAlarmModuleValue("AlarmLocation"));
    }

}

export class AlarmTypePage {
    readonly page: Page; readonly grid: GridHelpers;
    readonly uIAddNewButton: Locator; readonly uIAlarmTypeTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIAlarmTypeTable = page.locator('#grdCFS');
    }

    async ClickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async VerifyAtAlarmTypeByUsingCADCFSCodeInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIAlarmTypeTable, PoliceData.getAlarmModuleValue("CADCFSCode"), "Alarm Type");
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAlarmModuleValue("AlarmType"));
    }

    async selectAtAlarmTypeInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAlarmTypeTable, PoliceData.getAlarmModuleValue("AlarmType"));
    }

}

export class AlarmCFSEntryPage {
    readonly page: Page; readonly popup:
        PopupHelpers; readonly grid: GridHelpers; readonly elementHelpers:
        ElementHelpers; readonly uIAlarmTypeEdit: Locator; readonly uIDescriptionEdit:
        Locator; readonly uICADCFSAndDispositionTab: Locator; readonly
    uIFeesAndSettingsTab: Locator; readonly uISaveButton: Locator; readonly
    uISaveNCloseButton: Locator; readonly uIRegistrationTypeComboBox: Locator;
    readonly uITrackFeesYesRadioButton: Locator; readonly uITrackFeesNoRadioButton:
        Locator; readonly uIPrintButton: Locator; readonly uIBottomLeftSideStatusBar:
        Locator; readonly uIAlarmCodeEdit: Locator; readonly uIAlarmTypeEdit1: Locator;
    readonly uICADCFSLookupIcon: Locator; readonly uICADDispositionLookupIcon:
        Locator; readonly uIMethodEdit: Locator; readonly uIAmountEdit: Locator;
    readonly uIDispositionAddButton: Locator; readonly uIFeesAddButton: Locator;
    readonly uIFireCFSTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIAlarmTypeEdit = page.locator('#txtOccurances');
        this.uIDescriptionEdit = page.locator('#txtDescription');
        this.uICADCFSAndDispositionTab = page.locator("(//span[contains(text(),'CAD CFS & Disposition')])");
        this.uIFeesAndSettingsTab = page.locator("(//span[contains(text(),'Fees & Settings')])");
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uIRegistrationTypeComboBox = page.locator('#cddRegType_DropDown');
        this.uITrackFeesYesRadioButton = page.locator('#rbTrackYes');
        this.uITrackFeesNoRadioButton = page.locator('#rbTrackNo');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIAlarmCodeEdit = page.locator('#txtCode');
        this.uIAlarmTypeEdit1 = page.locator('#txtDescr');
        this.uICADCFSLookupIcon = page.locator('#lupCADCFS_imgBtn');
        this.uICADDispositionLookupIcon = page.locator('#cddDisp_imgBtn');
        this.uIMethodEdit = page.locator('#cddMethod_DropDown');
        this.uIAmountEdit = page.locator('#txtRegAmt');
        this.uIDispositionAddButton = page.locator('#imgAddDisp');
        this.uIFeesAddButton = page.locator('#imgAddFees');
        this.uIFireCFSTab = page.locator("//span[contains(text(),'Fire CFS')]");
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async SaveNClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await this.popup.confirmYes();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async EnterAtAlarmType(): Promise<void> {
        await this.uIAlarmTypeEdit.fill(PoliceData.getAlarmModuleValue("AlarmType"));
    }

    async EnterAtDescription(): Promise<void> {
        await this.uIDescriptionEdit.fill(PoliceData.getAlarmModuleValue("Description"));
    }

    async ClickCADCFSAndDispositionTab(): Promise<void> {
        await this.uICADCFSAndDispositionTab.click();
    }

    async ClickFeesAndSettingsTab(): Promise<void> {
        await this.uIFeesAndSettingsTab.click();
    }

    async Verify1018RequiredEntriesAreMissingAlarmTypeAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(1018) Required Entries are Missing -Alarm Type");
        await this.popup.acknowledgeOk();
    }

    async Verify1018RequiredEntriesAreMissingRegTypeAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(1018) Required Entries are Missing -Registration Type");
        await this.popup.acknowledgeOk();
    }

    async Verify1018RequiredEntriesAreMissingCADCFSAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(1018) Required Entries are Missing - CAD CFS");
        await this.popup.acknowledgeOk();
    }

    async SelectAtRegistrationType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIRegistrationTypeComboBox, PoliceData.getAlarmModuleValue("RegistrationType"));
        await this.uIRegistrationTypeComboBox.press('Tab');
    }

    async SaveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async clickTrackFeesYesRadioButton(): Promise<void> {
        await this.uITrackFeesYesRadioButton.click();
    }

    async clickPrintButton(): Promise<void> {
        await this.uIPrintButton.click();
        await this.page.waitForLoadState('load');
    }

    async VerifyUpdatedSuccessfulMsg(): Promise<void> {
        await this.page.waitForTimeout(2000);
        const additionMessage = await this.uIBottomLeftSideStatusBar.innerText();
        expect(additionMessage).toBe("1003 - Update Successful");
    }

    async VerifyAdditionSuccessfulMsg(): Promise<void> {
        await this.page.waitForTimeout(2000);
        const additionMessage = await this.uIBottomLeftSideStatusBar.innerText();
        expect(additionMessage).toBe("1002 - Addition Successful");
    }

    async EnterAlarmType(): Promise<void> {
        await this.uIAlarmTypeEdit.fill(RandomHelpers.randomAlphanumeric(5));
    }

    async EnterDescription(): Promise<void> {
        await this.uIDescriptionEdit.fill(RandomHelpers.randomString(10));
    }

    async SelectRegistrationType(): Promise<void> {
        const options = await this.uIRegistrationTypeComboBox.locator('option').allInnerTexts();
        const validOptions = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOption = validOptions[Math.floor(Math.random() * validOptions.length)];
        await this.uIRegistrationTypeComboBox.selectOption({ label: randomOption });
        await this.uIRegistrationTypeComboBox.press('Tab');
    }

    async verifyAlarmTypeNotNull(): Promise<void> {
        const type = await this.uIAlarmTypeEdit.inputValue();
        expect(type.trim()).not.toBe('');
    }

    async EnterAtAlarmType1(): Promise<void> {
        await this.uIAlarmCodeEdit.fill(PoliceData.getAlarmModuleValue("AlarmCode"));
        await this.uIAlarmCodeEdit.press('Tab');
        await this.uIAlarmTypeEdit1.fill(PoliceData.getAlarmModuleValue("AlarmType"));
        await this.uIAlarmTypeEdit1.press('Tab');
    }

    async ClickCADCFSLookupIcon(): Promise<void> {
        await this.uICADCFSLookupIcon.click();
    }

    async ClickCADDispositionLookupIcon(): Promise<void> {
        await this.uICADDispositionLookupIcon.click();
    }

    async SelectAtMethod(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIMethodEdit, PoliceData.getAlarmModuleValue("Method"));
    }

    async EnterAtAmount(): Promise<void> {
        await this.uIAmountEdit.fill(PoliceData.getAlarmModuleValue("Amount"));
        await this.uIAmountEdit.press('Tab');
    }

    async clickDispositionAddButton(): Promise<void> {
        await this.uIDispositionAddButton.click();
    }

    async clickFeesAddButton(): Promise<void> {
        await this.uIFeesAddButton.click();
    }

    async verify6040AlarmTypeAlreadyExistsAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(6040) AlarmType already exists");
        await this.popup.acknowledgeOk();
    }

    async clickFireCFSTab(): Promise<void> {
        await this.uIFireCFSTab.click();
    }

    async verify1051UpdateDataExistAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(1051)Updated data exists in Fire CFS tab. You must save or reset.");
        await this.popup.acknowledgeOk();
    }

    async SelectAtRegistrationTypeFire(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIRegistrationTypeComboBox, PoliceData.getAlarmModuleValue("RegistrationType"));
    }

    async verifyAtleastOneFireCFSAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(6040) At least one Fire CFS required");
        await this.popup.acknowledgeOk();
    }

}

export class AlarmCFSFireCFSTabPage {
    readonly page: Page; readonly grid:
        GridHelpers; readonly uIFireCFSEdit: Locator; readonly uIFireCFSAddbutton:
        Locator; readonly uIFireCFSGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIFireCFSEdit = page.locator('#tabAlarmType_tmpl0_usrCADCFS_lupFireCFS_CodeValue');
        this.uIFireCFSAddbutton = page.locator('#tabAlarmType_tmpl0_usrCADCFS_cmdAdd');
        this.uIFireCFSGrid = page.locator('#tabAlarmType_tmpl0_usrCADCFS_grdAlarmsStmt');
    }

    async enterFireCFSAs911(): Promise<void> {
        await this.uIFireCFSEdit.fill("911");
        await this.uIFireCFSEdit.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIFireCFSAddbutton.click();
    }

    async selectAtFireCFSInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIFireCFSGrid, PoliceData.getAlarmModuleValue("FireCFS"));
    }

    async verifyAtFireCFS(): Promise<void> {
        const fireCFSCode = await this.uIFireCFSEdit.inputValue();
        expect(fireCFSCode).toBe(PoliceData.getAlarmModuleValue("FireCFSCode"));
    }

    async verifyAddButtonChangedASUpdate(): Promise<void> {
        const attribute = await this.uIFireCFSAddbutton.getAttribute("title");
        expect(attribute).toBe("Update The Data In The Grid");
    }

    async clearFireCFS(): Promise<void> {
        await this.uIFireCFSEdit.clear();
    }

    async verifyAtFireCFSInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIFireCFSGrid, PoliceData.getAlarmModuleValue("FireCFSCode"));
        await expect(cell).toBeVisible();
    }

    async enterAtFireCFS(): Promise<void> {
        await this.uIFireCFSEdit.fill(PoliceData.getAlarmModuleValue("FireCFS"));
    }

}

export class AlarmCFSCADCFSAndDispositionTabPage {
    readonly page: Page; readonly
    popup: PopupHelpers; readonly grid: GridHelpers; readonly uICADCFSCodeEdit:
        Locator; readonly uIDispositionCodeEdit: Locator; readonly uIAddButton: Locator;
    readonly uICADCFSDispositionTable: Locator; readonly uICADCFSLookupButton:
        Locator; readonly uIDispositionLookupButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uICADCFSCodeEdit = page.locator('#tabAlarmType_tmpl0_usrCADCFS_lupCADCFS_CodeValue');
        this.uIDispositionCodeEdit = page.locator('#tabAlarmType_tmpl0_usrCADCFS_lupDisposition_CodeValue');
        this.uIAddButton = page.locator('#tabAlarmType_tmpl0_usrCADCFS_cmdAdd');
        this.uICADCFSDispositionTable = page.locator('#tabAlarmType_tmpl0_usrCADCFS_grdAlarmsStmt');
        this.uICADCFSLookupButton = page.locator('#tabAlarmType_tmpl0_usrCADCFS_lupCADCFS_imgBtn');
        this.uIDispositionLookupButton = page.locator('#tabAlarmType_tmpl0_usrCADCFS_lupDisposition_imgBtn');
    }

    async EnterAtCADCFS(): Promise<void> {
        await this.uICADCFSCodeEdit.fill(PoliceData.getAlarmModuleValue("CADCFS"));
        await this.uICADCFSCodeEdit.press('Tab');
    }

    async EnterAtDisposition(): Promise<void> {
        await this.uIDispositionCodeEdit.fill(PoliceData.getAlarmModuleValue("Disposition"));
        await this.uIDispositionCodeEdit.press('Tab');
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async VerifyAtCADCFSInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uICADCFSDispositionTable, PoliceData.getAlarmModuleValue("CADCFSDescription"));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAlarmModuleValue("CADCFSDescription"));
    }

    async verifyAtDispositionInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uICADCFSDispositionTable, PoliceData.getAlarmModuleValue("DispositionDescription"));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAlarmModuleValue("DispositionDescription"));
    }

    async ClickCADCFSLookup(): Promise<void> {
        await this.uICADCFSLookupButton.click();
        await this.page.waitForTimeout(1000);
    }

    async ClickDispostionLookup(): Promise<void> {
        await this.uIDispositionLookupButton.click();
        await this.page.waitForTimeout(1000);
    }

    async SelectCADCFSDescription1InPopup(): Promise<void> {
        const popupPage = new PopupHelpers(this.page);
        const codedGrid = this.page.locator('#grdSrch');
        await this.grid.selectRowByCellText(codedGrid, PoliceData.getAlarmModuleValue("CADCFSDescription1"));
        await this.page.waitForTimeout(1000);
    }

    async SelectDispositionDescription1InPopup(): Promise<void> {
        const codedGrid = this.page.locator('#grdSrch');
        await this.grid.selectRowByCellText(codedGrid, PoliceData.getAlarmModuleValue("DispositionDescription1"));
        await this.page.waitForTimeout(1000);
    }

    async DeleteAtCADCFSDescriptionRow(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uICADCFSDispositionTable, PoliceData.getAlarmModuleValue("CADCFSDescription"));
        await this.page.waitForTimeout(1000);
    }

    async VerifyAtleastOneRecordAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(9513) At least one CAD CFS and CAD Disposition are required");
        await this.popup.acknowledgeOk();
    }

    async verifyAtDispositionInGrid1(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uICADCFSDispositionTable, PoliceData.getAlarmModuleValue("DispositionDescription1"));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAlarmModuleValue("DispositionDescription1"));
    }

}

export class AlarmCFSFeesAndSettingsTabPage {
    readonly page: Page; readonly
    elementHelpers: ElementHelpers; readonly uIRegistrationTypeComboBox: Locator;
    readonly uIRegistrationFeeEdit: Locator; readonly uI1stAlarmAmountEdit: Locator;
    readonly uIUnregisteredAlarmFineAmountEdit: Locator; readonly
    uI2ndAlarmAmountEdit: Locator; readonly uI3rdAlarmAmountEdit: Locator; readonly
    uI4thAlarmAmountEdit: Locator; readonly uI5thAlarmAmountEdit: Locator; readonly
    uI6thAlarmAmountEdit: Locator; readonly uI7thAlarmAmountEdit: Locator; readonly
    uI8thAlarmAmountEdit: Locator; readonly uI9thAlarmAmountEdit: Locator; readonly
    uI10thAlarmAmountEdit: Locator; readonly uI11thAlarmAmountEdit: Locator;
    readonly uI12thAlarmAmountEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elementHelpers = new ElementHelpers(page);
        this.uIRegistrationTypeComboBox = page.locator('#tabAlarmType_tmpl1_usrFeesSettings_cddRegType_DropDown');
        this.uIRegistrationFeeEdit = page.locator('#tabAlarmType_tmpl1_usrFeesSettings_txtRegFee');
        this.uI1stAlarmAmountEdit = page.locator('#tabAlarmType_tmpl1_usrFeesSettings_txt1stAlarmAmt');
        this.uIUnregisteredAlarmFineAmountEdit = page.locator('#tabAlarmType_tmpl1_usrFeesSettings_txtUnRegFine');
        this.uI2ndAlarmAmountEdit = page.locator('#tabAlarmType_tmpl1_usrFeesSettings_txt2ndAlarmAmt');
        this.uI3rdAlarmAmountEdit = page.locator('#tabAlarmType_tmpl1_usrFeesSettings_txt3rdAlarmAmt');
        this.uI4thAlarmAmountEdit = page.locator('#tabAlarmType_tmpl1_usrFeesSettings_txt4thAlarmAmt');
        this.uI5thAlarmAmountEdit = page.locator('#tabAlarmType_tmpl1_usrFeesSettings_txt5thAlarmAmt');
        this.uI6thAlarmAmountEdit = page.locator('#tabAlarmType_tmpl1_usrFeesSettings_txt6thAlarmAmt');
        this.uI7thAlarmAmountEdit = page.locator('#tabAlarmType_tmpl1_usrFeesSettings_txt7thAlarmAmt');
        this.uI8thAlarmAmountEdit = page.locator('#tabAlarmType_tmpl1_usrFeesSettings_txt8thAlarmAmt');
        this.uI9thAlarmAmountEdit = page.locator('#tabAlarmType_tmpl1_usrFeesSettings_txt9thAlarmAmt');
        this.uI10thAlarmAmountEdit = page.locator('#tabAlarmType_tmpl1_usrFeesSettings_txt10thAlarmAmt');
        this.uI11thAlarmAmountEdit = page.locator('#tabAlarmType_tmpl1_usrFeesSettings_txt11thAlarmAmt');
        this.uI12thAlarmAmountEdit = page.locator('#tabAlarmType_tmpl1_usrFeesSettings_txt12thAlarmAmt');
    }

    async SelectAtRegistrationType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIRegistrationTypeComboBox, PoliceData.getAlarmModuleValue("RegistrationType"));
    }

    async EnterAtRegistrationFee(): Promise<void> {
        await this.uIRegistrationFeeEdit.fill(PoliceData.getAlarmModuleValue("RegistrationFee"));
        await this.uIRegistrationFeeEdit.press('Tab');
    }

    async EnterFirstAlarmAmount(): Promise<void> {
        await this.uI1stAlarmAmountEdit.fill(RandomHelpers.randomNumberString(2));
    }

    async EnterSecondAlarmAmount(): Promise<void> {
        await this.uI2ndAlarmAmountEdit.fill(RandomHelpers.randomNumberString(1));
    }

    async EnterUnregisteredAlarmFineAmountFee(): Promise<void> {
        await this.uIUnregisteredAlarmFineAmountEdit.fill(RandomHelpers.randomNumberString(1));
    }

    async EnterRegistrationFee(): Promise<void> {
        await this.uIRegistrationFeeEdit.fill(RandomHelpers.enterRandomNumbers(3));
    }

    async EnterAtUnregisteredAlarmFineAmountFee(): Promise<void> {
        await this.uIUnregisteredAlarmFineAmountEdit.fill(PoliceData.getAlarmModuleValue("UnregisteredAlarmFineAmountFee"));
        await this.uIUnregisteredAlarmFineAmountEdit.press('Tab');
    }

    async EnterAtFirstAlarmAmount(): Promise<void> {
        await this.uI1stAlarmAmountEdit.fill(PoliceData.getAlarmModuleValue("FirstAlarmAmount"));
        await this.uI1stAlarmAmountEdit.press('Tab');
    }

    async EnterAtSecondAlarmAmount(): Promise<void> {
        await this.uI2ndAlarmAmountEdit.fill(PoliceData.getAlarmModuleValue("SecondAlarmAmount"));
        await this.uI2ndAlarmAmountEdit.press('Tab');
    }

    async EnterAtThirdAlarmAmount(): Promise<void> {
        await this.uI3rdAlarmAmountEdit.fill(PoliceData.getAlarmModuleValue("ThirdAlarmAmount"));
        await this.uI3rdAlarmAmountEdit.press('Tab');
    }

    async EnterAtFourAlarmAmount(): Promise<void> {
        await this.uI4thAlarmAmountEdit.fill(PoliceData.getAlarmModuleValue("FourAlarmAmount"));
        await this.uI4thAlarmAmountEdit.press('Tab');
    }

    async EnterAtFifthAlarmAmount(): Promise<void> {
        await this.uI5thAlarmAmountEdit.fill(PoliceData.getAlarmModuleValue("FifthAlarmAmount"));
        await this.uI5thAlarmAmountEdit.press('Tab');
    }

    async EnterAtSixthAlarmAmount(): Promise<void> {
        await this.uI6thAlarmAmountEdit.fill(PoliceData.getAlarmModuleValue("sixthAlarmAmount"));
        await this.uI6thAlarmAmountEdit.press('Tab');
    }

    async EnterAtSeventhAlarmAmount(): Promise<void> {
        await this.uI7thAlarmAmountEdit.fill(PoliceData.getAlarmModuleValue("SeventhAlarmAmount"));
        await this.uI7thAlarmAmountEdit.press('Tab');
    }

    async EnterAtEighthAlarmAmount(): Promise<void> {
        await this.uI8thAlarmAmountEdit.fill(PoliceData.getAlarmModuleValue("EighthAlarmAmount"));
        await this.uI8thAlarmAmountEdit.press('Tab');
    }

    async EnterAtNinethAlarmAmount(): Promise<void> {
        await this.uI9thAlarmAmountEdit.fill(PoliceData.getAlarmModuleValue("NinethAlarmAmount"));
        await this.uI9thAlarmAmountEdit.press('Tab');
    }

    async EnterAtTenthAlarmAmount(): Promise<void> {
        await this.uI10thAlarmAmountEdit.fill(PoliceData.getAlarmModuleValue("TenthAlarmAmount"));
        await this.uI10thAlarmAmountEdit.press('Tab');
    }

    async EnterAtEleventhAlarmAmount(): Promise<void> {
        await this.uI11thAlarmAmountEdit.fill(PoliceData.getAlarmModuleValue("EleventhAlarmAmount"));
        await this.uI11thAlarmAmountEdit.press('Tab');
    }

    async EnterAtTwelevethAlarmAmount(): Promise<void> {
        await this.uI12thAlarmAmountEdit.fill(PoliceData.getAlarmModuleValue("TwelevethAlarmAmount"));
        await this.uI12thAlarmAmountEdit.press('Tab');
    }

    async verifyAtUnregisteredAlarmFineAmountFee(i: number): Promise<void> {
        const val = await this.uIUnregisteredAlarmFineAmountEdit.inputValue();
        expect(val).toBe(PoliceData.getAlarmModuleValue("UnregisteredAlarmFineAmountFee" + i));
    }

    async verifyAtFirstAlarmAmount(i: number): Promise<void> {
        const val = await this.uI1stAlarmAmountEdit.inputValue();
        expect(val).toBe(PoliceData.getAlarmModuleValue("FirstAlarmAmount" + i));
    }

    async verifyAtSecondAlarmAmount(i: number): Promise<void> {
        const val = await this.uI2ndAlarmAmountEdit.inputValue();
        expect(val).toBe(PoliceData.getAlarmModuleValue("SecondAlarmAmount" + i));
    }

    async verifyAtThirdAlarmAmount(i: number): Promise<void> {
        const val = await this.uI3rdAlarmAmountEdit.inputValue();
        expect(val).toBe(PoliceData.getAlarmModuleValue("ThirdAlarmAmount" + i));
    }

    async verifyAtFourAlarmAmount(i: number): Promise<void> {
        const val = await this.uI4thAlarmAmountEdit.inputValue();
        expect(val).toBe(PoliceData.getAlarmModuleValue("FourAlarmAmount" + i));
    }

    async verifyAtFifthAlarmAmount(i: number): Promise<void> {
        const val = await this.uI5thAlarmAmountEdit.inputValue();
        expect(val).toBe(PoliceData.getAlarmModuleValue("FifthAlarmAmount" + i));
    }

    async verifyAtSixthAlarmAmount(i: number): Promise<void> {
        const val = await this.uI6thAlarmAmountEdit.inputValue();
        expect(val).toBe(PoliceData.getAlarmModuleValue("sixthAlarmAmount" + i));
    }

    async verifyAtSeventhAlarmAmount(i: number): Promise<void> {
        const val = await this.uI7thAlarmAmountEdit.inputValue();
        expect(val).toBe(PoliceData.getAlarmModuleValue("SeventhAlarmAmount" + i));
    }

    async verifyAtEighthAlarmAmount(i: number): Promise<void> {
        const val = await this.uI8thAlarmAmountEdit.inputValue();
        expect(val).toBe(PoliceData.getAlarmModuleValue("EighthAlarmAmount" + i));
    }

    async verifyAtNinethAlarmAmount(i: number): Promise<void> {
        const val = await this.uI9thAlarmAmountEdit.inputValue();
        expect(val).toBe(PoliceData.getAlarmModuleValue("NinethAlarmAmount" + i));
    }

    async verifyAtTenthAlarmAmount(i: number): Promise<void> {
        const val = await this.uI10thAlarmAmountEdit.inputValue();
        expect(val).toBe(PoliceData.getAlarmModuleValue("TenthAlarmAmount" + i));
    }

    async verifyAtEleventhAlarmAmount(i: number): Promise<void> {
        const val = await this.uI11thAlarmAmountEdit.inputValue();
        expect(val).toBe(PoliceData.getAlarmModuleValue("EleventhAlarmAmount" + i));
    }

    async verifyAtAtTwelevethAlarmAmount(i: number): Promise<void> {
        const val = await this.uI12thAlarmAmountEdit.inputValue();
        expect(val).toBe(PoliceData.getAlarmModuleValue("TwelevethAlarmAmount" + i));
    }

    async verifyAtRegistrationFee(i: number): Promise<void> {
        const val = await this.uIRegistrationFeeEdit.inputValue();
        expect(val).toBe(PoliceData.getAlarmModuleValue("RegistrationFee" + i));
    }

    async enterAtThirdAlarmAmount(): Promise<void> {
        await this.uI3rdAlarmAmountEdit.fill(PoliceData.getAlarmModuleValue("3rdAlarmAmount"));
    }

    async enterAtFirstAlarmAmount(): Promise<void> {
        await this.uI1stAlarmAmountEdit.fill(PoliceData.getAlarmModuleValue("1stAlarmAmount"));
    }

    async enterAtSecondAlarmAmount(): Promise<void> {
        await this.uI2ndAlarmAmountEdit.fill(PoliceData.getAlarmModuleValue("2ndAlarmAmount"));
    }

    async enter4thAlarmAmount(): Promise<void> {
        await this.uI4thAlarmAmountEdit.fill(RandomHelpers.randomNumberString(2));
    }

    async enter5thAlarmAmount(): Promise<void> {
        await this.uI5thAlarmAmountEdit.fill(RandomHelpers.randomNumberString(2));
    }

    async enter6thAlarmAmount(): Promise<void> {
        await this.uI6thAlarmAmountEdit.fill(RandomHelpers.randomNumberString(2));
    }

    async enter7thAlarmAmount(): Promise<void> {
        await this.uI7thAlarmAmountEdit.fill(RandomHelpers.randomNumberString(2));
    }

    async enter8thAlarmAmount(): Promise<void> {
        await this.uI8thAlarmAmountEdit.fill(RandomHelpers.randomNumberString(2));
    }

    async enter9thAlarmAmount(): Promise<void> {
        await this.uI9thAlarmAmountEdit.fill(RandomHelpers.randomNumberString(2));
    }

    async enter10thAlarmAmount(): Promise<void> {
        await this.uI10thAlarmAmountEdit.fill(RandomHelpers.randomNumberString(2));
    }

    async enter11thAlarmAmount(): Promise<void> {
        await this.uI11thAlarmAmountEdit.fill(RandomHelpers.randomNumberString(2));
    }

    async enter12thAlarmAmount(): Promise<void> {
        await this.uI12thAlarmAmountEdit.fill(RandomHelpers.randomNumberString(2));
    }

}

export class AlarmsEntryPage {
    readonly page: Page; readonly popup:
        PopupHelpers; readonly grid: GridHelpers; readonly elementHelpers:
        ElementHelpers; readonly uISaveButton: Locator; readonly uISaveAndCloseButton:
        Locator; readonly uIPrintButton: Locator; readonly uIResetButton: Locator;
    readonly uIAlarmTypeComboBox: Locator; readonly uIAlarmLocationEdit: Locator;
    readonly uIBusinessOrPersonNameTypeEdit: Locator; readonly
    uIBusinessOrPersonNameIDEdit: Locator; readonly uIAddress1Edit: Locator;
    readonly uIMainTab: Locator; readonly uIContactsTab: Locator; readonly
    uIProcessFalseAlarmTab: Locator; readonly uITransactionHistoryTab: Locator;
    readonly uIInvoicesTab: Locator; readonly uIAttachmentsTab: Locator; readonly
    uIAlarmNoEdit: Locator; readonly uIBusinessOrPersonLastNameEdit: Locator;
    readonly uIBusinessOrPersonFirstNameEdit: Locator; readonly
    uITotalOccurrencesTextView: Locator; readonly uIChargeableOccurrencesTestView:
        Locator; readonly uIDeleteButton: Locator; readonly
    uIAlarmLocationMainAddressEdit: Locator; readonly uIInactiveCheckBox: Locator;
    readonly uIstatusBar: Locator; readonly uIBusinessPersonLable: Locator; readonly
    uIAlarmLocationIBubble: Locator; readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIBusinessOrPersonNameInfoIcon: Locator; readonly uICommonNameLabel:
        Locator; readonly uIInactiveDateEdit: Locator; readonly uIReceivePaymtIcon:
        Locator; readonly uIInstallDateEdit: Locator; readonly uIAddressEdit: Locator;
    readonly uINotifyBy: Locator; readonly uIAlarmTypeComboBox1: Locator; readonly
    uIAlarmLocationVerifycheckBox: Locator; readonly uICityEdit: Locator; readonly
    uIStateDropdown: Locator; readonly uIZipCodeEdit: Locator; readonly
    uIAlarmLocationInfoIcon: Locator; readonly uIBusinessOrPersonNameClearIcon:
        Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIAlarmTypeComboBox = page.locator('#cddAlarmType');
        this.uIAlarmLocationEdit = page.locator('#txtAlarmLocation');
        this.uIBusinessOrPersonNameTypeEdit = page.locator('#AlarmNameID_NameType');
        this.uIBusinessOrPersonNameIDEdit = page.locator('#AlarmNameID_NameTypeID');
        this.uIAddress1Edit = page.locator('#adrMainAddress_txtFrom');
        this.uIMainTab = page.locator("(//span[contains(text(),'Main')])");
        this.uIContactsTab = page.locator("(//span[contains(text(),'Contact')])");
        this.uIProcessFalseAlarmTab = page.locator("(//span[contains(text(),'Process False Alarm')])");
        this.uITransactionHistoryTab = page.locator("(//span[contains(text(),'Transaction History')])");
        this.uIInvoicesTab = page.locator("//div[@id = 'tabAlarm']//span[@mkr = 'ti5']");
        this.uIAttachmentsTab = page.locator("(//span[contains(text(),'Attachments')])");
        this.uIAlarmNoEdit = page.locator('#txtAlarm');
        this.uIBusinessOrPersonLastNameEdit = page.locator('#AlarmNameID_LastName');
        this.uIBusinessOrPersonFirstNameEdit = page.locator('#AlarmNameID_FirstName');
        this.uITotalOccurrencesTextView = page.locator('#lblNoOcc');
        this.uIChargeableOccurrencesTestView = page.locator('#lblChargeableOcc');
        this.uIDeleteButton = page.locator('#cmdDelete');
        this.uIAlarmLocationMainAddressEdit = page.locator('#adrMainAddress_txtFrom');
        this.uIInactiveCheckBox = page.locator('#chkInactive');
        this.uIstatusBar = page.locator('.statusBar');
        this.uIBusinessPersonLable = page.locator('#lblPersonNames');
        this.uIAlarmLocationIBubble = page.locator('#adrMainAddress_cmdIncOnAddr');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIBusinessOrPersonNameInfoIcon = page.locator('#AlarmNameID_imgSrch');
        this.uICommonNameLabel = page.locator('#lblCommanName');
        this.uIInactiveDateEdit = page.locator('#txtInActiveDttm');
        this.uIReceivePaymtIcon = page.locator('#cmdReceivePayment');
        this.uIInstallDateEdit = page.locator('#dtInstall_KPIDttmCtrl');
        this.uIAddressEdit = page.locator('#adrAlarms_txtFrom');
        this.uINotifyBy = page.locator('#cddNotifyBy_DropDown');
        this.uIAlarmTypeComboBox1 = page.locator('#cddType_DropDown');
        this.uIAlarmLocationVerifycheckBox = page.locator('#adrMainAddress_chkVerify');
        this.uICityEdit = page.locator('#custHeaderCSZ_City');
        this.uIStateDropdown = page.locator('#custHeaderCSZ_State_DropDown');
        this.uIZipCodeEdit = page.locator('#custHeaderCSZ_Zip');
        this.uIAlarmLocationInfoIcon = page.locator('#adrMainAddress_cmdIncOnAddr');
        this.uIBusinessOrPersonNameClearIcon = page.locator('#imgClearName');
    }

    async ClickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async SaveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForTimeout(1000);
        await this.popup.confirmYes();
    }

    async SaveNCloseScreen(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        await this.popup.confirmYes();
    }

    async CloseScreen(): Promise<void> {
        await this.page.close();
    }

    async selectAtAlarmType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIAlarmTypeComboBox, PoliceData.getAlarmModuleValue("AlarmType"));
    }

    async EnterAtAlarmLocation(): Promise<void> {
        await this.uIAlarmLocationEdit.fill(PoliceData.getAlarmModuleValue("AlarmLocation"));
    }

    async enterAtAlarmLocationByIndex(i: number): Promise<void> {
        await this.uIAlarmLocationMainAddressEdit.fill(PoliceData.getAlarmModuleValue("AlarmLocation" + i));
    }

    async EnterAtBusinessOrPersonNameID(): Promise<void> {
        const nameID = PoliceData.getAlarmModuleValue("BusinessOrPersonNameID");
        await this.uIBusinessOrPersonNameTypeEdit.fill(nameID.substring(0, 1));
        await this.uIBusinessOrPersonNameIDEdit.fill(nameID.substring(2));
        await this.uIBusinessOrPersonNameIDEdit.press('Tab');
    }

    async enterAtBusinessOrPersonNameIDByIndex(i: number): Promise<void> {
        const nameID = PoliceData.getAlarmModuleValue("BusinessOrPersonNameID" + i);
        await this.uIBusinessOrPersonNameTypeEdit.fill(nameID.substring(0, 1));
        await this.uIBusinessOrPersonNameIDEdit.fill(nameID.substring(2));
        await this.uIBusinessOrPersonNameIDEdit.press('Tab');
    }

    async VerifyAtAddress1(): Promise<void> {
        const value = await this.uIAddress1Edit.inputValue();
        expect(value).toBe(PoliceData.getAlarmModuleValue("Address1"));
    }

    async clickMainTab(): Promise<void> {
        await this.uIMainTab.click();
    }

    async SwitchToContactTab(): Promise<void> {
        await this.uIContactsTab.click();
        await this.page.waitForLoadState('load');
        new BrowserHelpers(this.page).switchToFrame('frmContactNew');
    }

    async SwitchToContactTab1(): Promise<void> {
        await this.uIContactsTab.click();
        await this.page.waitForLoadState('load');
        new BrowserHelpers(this.page).switchToFrame('frmCBENames');
    }

    async switchToAttachmentsTab(): Promise<void> {
        await this.uIAttachmentsTab.click();
        await this.page.waitForLoadState('load');
        new BrowserHelpers(this.page).switchToFrame('frmTxtAttachMgrEx');
    }

    async ClickProcessFalseAlarmTab(): Promise<void> {
        await this.uIProcessFalseAlarmTab.click();
    }

    async ClickTransactionHistoryTab(): Promise<void> {
        await this.page.waitForLoadState('load');
        await this.uITransactionHistoryTab.click();
    }

    async ClickInvoicesTab(): Promise<void> {
        await this.uIInvoicesTab.click();
    }

    async VerifyNewTabEnabled(): Promise<void> {
        await expect(this.uIContactsTab).toBeVisible();
        await expect(this.uIAttachmentsTab).toBeVisible();
        await expect(this.uIProcessFalseAlarmTab).toBeVisible();
        await expect(this.uITransactionHistoryTab).toBeVisible();
        await expect(this.uIInvoicesTab).toBeVisible();
    }

    async Verify1018RequiredEntriesareMissingAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(1018) Required Entries are Missing");
        await this.popup.acknowledgeOk();
    }

    async SelectAlarmType(): Promise<void> {
        const options = await this.uIAlarmTypeComboBox.locator('option').allInnerTexts();
        const validOptions = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOption = validOptions[Math.floor(Math.random() * validOptions.length)];
        await this.uIAlarmTypeComboBox.selectOption({ label: randomOption });
        await this.uIAlarmTypeComboBox.press('Tab');
    }

    async VerifyAtAlarmNo(): Promise<void> {
        const value = await this.uIAlarmNoEdit.inputValue();
        expect(value).toBe(PoliceData.getAlarmModuleValue("AlarmNo"));
    }

    async VerifyNameTypeAsO(): Promise<void> {
        const value = await this.uIBusinessOrPersonNameTypeEdit.inputValue();
        expect(value).toBe("O");
    }

    async VerifyLastNameAsCurrentOwner(): Promise<void> {
        const value = await this.uIBusinessOrPersonLastNameEdit.inputValue();
        expect(value).toBe(PoliceData.getAlarmModuleValue("Current Owner"));
    }

    async VerifyFirstNameAsAlarmNo(alarmNo: string): Promise<void> {
        const value = await this.uIBusinessOrPersonFirstNameEdit.inputValue();
        expect(value).toBe("Alarm:" + alarmNo);
    }

    async GetAlarmNo(): Promise<string> {
        return await this.uIAlarmNoEdit.inputValue();
    }

    async VerifyTotalOccurrenceAs1(): Promise<void> {
        const text = await this.uITotalOccurrencesTextView.innerText();
        expect(text).toBe("1");
    }

    async VerifyChargeableOccurrencesAs0(): Promise<void> {
        const text = await this.uIChargeableOccurrencesTestView.innerText();
        expect(text).toBe("0");
    }

    async VerifyTotalOccurrenceAs0(): Promise<void> {
        const text = await this.uITotalOccurrencesTextView.innerText();
        expect(text).toBe("0");
    }

    async EnterAlarmLocation(evenNo: string): Promise<void> {
        await this.uIAlarmLocationMainAddressEdit.click();
        await this.uIAlarmLocationMainAddressEdit.clear();
        await this.uIAlarmLocationMainAddressEdit.fill(evenNo + " " + PoliceData.getAlarmModuleValue("StreetName") + " " + PoliceData.getAlarmModuleValue("StreetType"));
        await this.uIAlarmLocationMainAddressEdit.press('Tab');
    }

    async EnterAlarmLocationWithApartment(evenNo: string): Promise<void> {
        await this.uIAlarmLocationMainAddressEdit.click();
        await this.uIAlarmLocationMainAddressEdit.clear();
        await this.uIAlarmLocationMainAddressEdit.fill(evenNo + " " + PoliceData.getAlarmModuleValue("StreetName") + " " + PoliceData.getAlarmModuleValue("StreetType") + ",3");
        await this.uIAlarmLocationMainAddressEdit.press('Tab');
    }

    async VerifyDeleteIconDisplayed(): Promise<void> {
        await expect(this.uIDeleteButton).toBeVisible();
    }

    async DeleteAlarmEntry(): Promise<void> {
        await this.uIDeleteButton.click();
        await this.page.waitForTimeout(1000);
        await this.popup.confirmYes();
        await this.page.waitForLoadState('load');
    }

    async ClearAlarmLocation(): Promise<void> {
        await this.uIAlarmLocationMainAddressEdit.clear();
        await this.uIAlarmLocationMainAddressEdit.press('Tab');
    }

    async ChangeAlarmLocation(): Promise<void> {
        await this.uIAlarmLocationMainAddressEdit.fill(PoliceData.getAlarmModuleValue("AlarmLocation"));
        await this.uIAlarmLocationMainAddressEdit.press('Tab');
    }

    async ChangeAlarmLocation1(): Promise<void> {
        await this.uIAlarmLocationMainAddressEdit.fill(PoliceData.getAlarmModuleValue("AlarmLocation1"));
    }

    async VerifyAddressInactive(): Promise<void> {
        await this.page.waitForLoadState('load');
        const expected = "(5097) This address is inactive";
        const errorInfo = this.page.locator("//span[@id='htmlErrorInfo']//b");
        const actual = await errorInfo.innerText();
        if (actual === expected) {
            await this.popup.acknowledgeOk();
        }
    }

    async ClickInactiveChkBox(): Promise<void> {
        await this.uIInactiveCheckBox.click();
    }

    async verifyUpdateSuccessful(): Promise<void> {
        const text = await this.uIstatusBar.innerText();
        expect(text).toContain("1003 - Update Successful");
    }

    async VerifyBusinessPersonIsNotMandatory(): Promise<void> {
        const color = await this.uIBusinessPersonLable.getAttribute("style") || '';
        expect(color.includes("black")).toBeTruthy();
    }

    async VerifyBusinessPersonIsMandatory(): Promise<void> {
        const color = await this.uIBusinessPersonLable.getAttribute("style") || '';
        expect(color.includes("maroon")).toBeTruthy();
    }

    async ClearBusinessPersonName(): Promise<void> {
        await this.uIBusinessOrPersonNameIDEdit.clear();
        await this.uIBusinessOrPersonNameTypeEdit.clear();
        await expect(this.popup.modalBody).toContainText("(6020) Invalid Name ID");
        await this.popup.acknowledgeOk();
    }

    async verifyAlarmLocationIBubble(): Promise<void> {
        await expect(this.uIAlarmLocationIBubble).toBeVisible();
    }

    async verifyAdditionSuccessfulMessage(): Promise<void> {
        await this.page.waitForTimeout(2000);
        const additionMessage = await this.uIBottomLeftSideStatusBar.innerText();
        expect(additionMessage).toBe("1002 - Addition Successful");
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async verifyAtAlarmLocation(): Promise<void> {
        const attribute = await this.uIAlarmLocationMainAddressEdit.inputValue();
        expect(attribute).toContain(PoliceData.getAlarmModuleValue("AlarmLocation"));
    }

    async verifyAtAlarmLocationByIndex(i: number): Promise<void> {
        const attribute = await this.uIAlarmLocationMainAddressEdit.inputValue();
        expect(attribute).toContain(PoliceData.getAlarmModuleValue("AlarmLocation" + i));
    }

    async clickBusinessOrPersonNameInfoButton(): Promise<void> {
        await this.uIBusinessOrPersonNameInfoIcon.click();
        await this.page.waitForLoadState('load');
    }

    async readAlarmNo(): Promise<string> {
        return await this.uIAlarmNoEdit.inputValue();
    }

    async verifyAtTotalOccurrences(): Promise<void> {
        const text = await this.uITotalOccurrencesTextView.innerText();
        expect(text).toContain(PoliceData.getAlarmModuleValue("TotalOccurrences"));
    }

    async verifyAtTotalOccurrencesByIndex(i: number): Promise<void> {
        const text = await this.uITotalOccurrencesTextView.innerText();
        expect(text).toContain(PoliceData.getAlarmModuleValue("TotalOccurrences" + i));
    }

    async verifyAtCommonNames(): Promise<void> {
        const text = await this.uICommonNameLabel.innerText();
        expect(text).toContain(PoliceData.getAlarmModuleValue("CommonName"));
    }

    async verifyInactiveDateAsCurrentDate(): Promise<void> {
        const attribute = await this.uIInactiveDateEdit.inputValue();
        expect(DateHelpers.getCurrentDate()).toContain(attribute);
    }

    async VerifyUpdatedSuccessfulMsg(): Promise<void> {
        await this.page.waitForTimeout(2000);
        const additionMessage = await this.uIBottomLeftSideStatusBar.innerText();
        expect(additionMessage).toBe("1003 - Update Successful");
    }

    async VerifyDuplicateAlarmsExistduetoAlarmaddressmerge(): Promise<void> {
        await this.page.waitForTimeout(2000);
        await this.popup.confirmYes();
    }

    async verifyFiscalYearEndDateNotConfiguredAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(9531)The Fiscal Year End date is not configured. Please update system parameter 1804.");
        await this.popup.acknowledgeOk();
    }

    async clickReceivePaymentIcon(): Promise<void> {
        await this.uIReceivePaymtIcon.click();
    }

    async EnterBusinessOrPersonNameID(): Promise<void> {
        await this.uIBusinessOrPersonNameTypeEdit.fill("B");
        await this.uIBusinessOrPersonNameIDEdit.fill(RandomHelpers.enterRandomNumbers(1));
        await this.uIBusinessOrPersonNameIDEdit.press('Tab');
    }

    async verifyAlarmNo(): Promise<void> {
        const attribute = await this.uIAlarmNoEdit.inputValue();
        expect(attribute.trim()).not.toBe('');
    }

    async TabInstallDate(): Promise<void> {
        await this.uIInstallDateEdit.press('Tab');
    }

    async enterAtAddress(): Promise<void> {
        await this.uIAddressEdit.fill(PoliceData.getAlarmModuleValue("Address"));
    }

    async selectAtNotifyBy(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uINotifyBy, PoliceData.getAlarmModuleValue("NotifyBy"));
    }

    async SelectAtAlarmType1(): Promise<void> {
        const options = await this.uIAlarmTypeComboBox1.locator('option').allInnerTexts();
        const validOptions = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOption = validOptions[Math.floor(Math.random() * validOptions.length)];
        await this.uIAlarmTypeComboBox1.selectOption({ label: randomOption });
        await this.uIAlarmTypeComboBox1.press('Tab');
    }

    async verifyalarmLocationVerifyCheckBoxISUnChecked(): Promise<void> {
        await expect(this.uIAlarmLocationVerifycheckBox).not.toBeChecked();
    }

    async verifyalarmLocationVerifyCheckBoxISChecked(): Promise<void> {
        await expect(this.uIAlarmLocationVerifycheckBox).toBeChecked();
    }

    async verify30033EnterVerifiedAddressAck(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(30033)Enter Verified Address");
        await this.popup.acknowledgeOk();
    }

    async clickAlarmLocationVerfyCheckBox(): Promise<void> {
        await this.uIAlarmLocationVerifycheckBox.click();
    }

    async VerifyConfirmGeoFly(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await expect(this.popup.modalBody).toContainText("(5100)The entered address is not found in the RMS Geo database. Click OK to add this as a new address, or click Cancel to correct the entered address.");
        await this.popup.confirmYes();
    }

    async verifyAtName(): Promise<void> {
        const type = await this.uIBusinessOrPersonNameTypeEdit.inputValue();
        const text = await this.uIBusinessOrPersonNameIDEdit.inputValue();
        expect(type + "-" + text).toBe(PoliceData.getAlarmModuleValue("NameID"));
    }

    async verifyLocationInRedColor(): Promise<void> {
        const cssValue = await this.uIAlarmLocationMainAddressEdit.evaluate(el => getComputedStyle(el).color);
        expect(cssValue).toBe("rgba(255, 0, 0, 1)");
    }

    async verifyLocationInBlackColor(): Promise<void> {
        const cssValue = await this.uIAlarmLocationMainAddressEdit.evaluate(el => getComputedStyle(el).color);
        expect(cssValue).toBe("rgba(0, 0, 0, 1)");
    }

    async clickAttachmentsTab(): Promise<void> {
        await this.uIAttachmentsTab.click();
    }

    async verifyAtCSZ(i: number): Promise<void> {
        const city = await this.uICityEdit.inputValue();
        const state = await this.uIStateDropdown.inputValue();
        const zipCode = await this.uIZipCodeEdit.inputValue();
        expect(city).toBe(BaseData.getNamesModuleValue("City" + i));
        expect(state).toContain(BaseData.getNamesModuleValue("State" + i));
        expect(zipCode).toBe(BaseData.getNamesModuleValue("ZipCode" + i));
    }

    async clickAlarmLocationInfoIcon(): Promise<void> {
        await this.uIAlarmLocationInfoIcon.click();
    }

    async verify1051UpdatedDataExistsAcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(1051)Updated data exists");
        await this.popup.acknowledgeOk();
    }

    async verifyDeleteIconNotDisplayed(): Promise<void> {
        await expect(this.uIDeleteButton).not.toBeVisible();
    }

    async verifyContactTab1051UpdatedDataExistAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(1051)Updated data exists in the Contacts Tab. You must save or reset.");
        await this.popup.acknowledgeOk();
    }

    async verifyEnterMandatoryDataAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(8)Enter mandatory data");
        await this.popup.acknowledgeOk();
    }

    async verifyTabColorIsBlack(tabName: string): Promise<void> {
        const element = this.page.locator(`//span[text()='${tabName}']`);
        const color = await element.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe("rgba(0, 0, 0, 1)");
    }

    async verifyTabColorIsBlue(tabName: string): Promise<void> {
        const element = this.page.locator(`//span[text()='${tabName}']`);
        const color = await element.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe("rgba(0, 0, 255, 1)");
    }

    async clickBusinessOrPersonNameClearIcon(): Promise<void> {
        await this.uIBusinessOrPersonNameClearIcon.click();
    }

    async VerifyChargeableOccurrencesAs1(): Promise<void> {
        const text = await this.uIChargeableOccurrencesTestView.innerText();
        expect(text).toBe("1");
    }

}

export class AlarmEntryContactTabPage {
    readonly page: Page; readonly popup:
        PopupHelpers; readonly grid: GridHelpers; readonly elementHelpers:
        ElementHelpers; readonly uILastNameEdit: Locator; readonly uIFirstNameEdit:
        Locator; readonly uIContactEntryGridTable: Locator; readonly uIAddNewButton:
        Locator; readonly uISearchButton: Locator; readonly uISaveButton: Locator;
    readonly uIResetButton: Locator; readonly uICommentsEdit: Locator; readonly
    uIIncludeInactiveCheckbox: Locator; readonly uIAddButton: Locator; readonly
    uINameTypeEdit: Locator; readonly uINameIDEdit: Locator; readonly
    uIInternalSave: Locator; readonly uIContactEntryGridTable1: Locator; readonly
    uIPhoneTypeDropDown: Locator; readonly uIPhoneEdit: Locator; readonly
    uIDeletePhone1Button: Locator; readonly uIDeletePhone2Button: Locator; readonly
    uIPhoneType2DropDown: Locator; readonly uIPhone2Edit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uILastNameEdit = page.locator('#nmcIncident_LastName');
        this.uIFirstNameEdit = page.locator('#nmcIncident_FirstName');
        this.uIContactEntryGridTable = page.locator('#grdContacts');
        this.uIAddNewButton = page.locator('#btnAddnew');
        this.uISearchButton = page.locator('#btnSearch');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIResetButton = page.locator('#cmdInternalRefresh');
        this.uICommentsEdit = page.locator('#txtComments');
        this.uIIncludeInactiveCheckbox = page.locator('#chkIncludeExpired');
        this.uIAddButton = page.locator('#imgAddName');
        this.uINameTypeEdit = page.locator('#nmcIncident_NameType');
        this.uINameIDEdit = page.locator('#nmcIncident_NameTypeID');
        this.uIInternalSave = page.locator('#cmdInternalSave');
        this.uIContactEntryGridTable1 = page.locator('#grdCBENames');
        this.uIPhoneTypeDropDown = page.locator('#txtNumber_1_PhoneType_DropDown');
        this.uIPhoneEdit = page.locator('#txtNumber_1_PhoneNumber');
        this.uIDeletePhone1Button = page.locator('#imgRemove_1');
        this.uIDeletePhone2Button = page.locator('#imgRemove_2');
        this.uIPhoneType2DropDown = page.locator('#txtNumber_2_PhoneType_DropDown');
        this.uIPhone2Edit = page.locator('#txtNumber_2_PhoneNumber');
    }

    async EnterAtLastName(): Promise<void> {
        await this.uILastNameEdit.fill(PoliceData.getAlarmModuleValue("LastName"));
    }

    async EnterAtFirstName(): Promise<void> {
        await this.uIFirstNameEdit.fill(PoliceData.getAlarmModuleValue("FirstName"));
        await this.uIFirstNameEdit.press('Tab');
    }

    async SelectAtNameFromNameSearch(): Promise<void> {
        const searchText = PoliceData.getAlarmModuleValue("LastName") + ', ' + PoliceData.getAlarmModuleValue("FirstName");
        const resultTable = this.popup.nameSearchGrid;
        await this.grid.selectRowCheckboxByCellText(resultTable, searchText);
        await this.popup.selectNameButton.click();
        await this.page.waitForLoadState('load');
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
        await this.page.waitForTimeout(1000);
    }

    async ClickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
        await this.page.waitForTimeout(1000);
    }

    async VerifyAtName(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIContactEntryGridTable, "Name", rowIndex);
        expect(text).toBe(PoliceData.getAlarmModuleValue("Name"));
    }

    async VerifyAtAddress(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIContactEntryGridTable, "Address", rowIndex);
        expect(text).toContain(PoliceData.getAlarmModuleValue("Address"));
    }

    async SaveInternalTab(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async ClickAtNameInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIContactEntryGridTable, PoliceData.getAlarmModuleValue("Name"));
    }

    async ClickIncludeInactiveCheckbox(): Promise<void> {
        await this.uIIncludeInactiveCheckbox.click();
    }

    async EnterComments(): Promise<void> {
        await this.uICommentsEdit.fill(RandomHelpers.randomString(15));
    }

    async VerifyAtName1(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIContactEntryGridTable1, "Name", rowIndex);
        expect(text).toBe(PoliceData.getAlarmModuleValue("Name1"));
    }

    async DeleteAtName1InGrid(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uIContactEntryGridTable1, PoliceData.getAlarmModuleValue("Name1"));
    }

    async VerifyDeleteConfirmMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(4) Do you really want to delete?");
        await this.popup.confirmYes();
    }

    async VerifyContactTableRowCount(rowIndex: number): Promise<void> {
        const count = await this.grid.getRowCount(this.uIContactEntryGridTable);
        expect(count).toBe(rowIndex);
    }

    async VerifyPrimaryCheckboxCheckedByAtName(): Promise<void> {
        const row = await this.grid.getGridRowByCellInnerText(this.uIContactEntryGridTable, PoliceData.getAlarmModuleValue("Name"));
        const primaryCell = await this.grid.getGridCell(this.uIContactEntryGridTable, row, "Primary");
        const title = await primaryCell.locator('img').getAttribute('title');
        expect(title).toContain("Checked");
    }

    async VerifyAtNameRowAppearGrayColor(rowIndex: number): Promise<void> {
        const row = this.uIContactEntryGridTable.locator('tbody tr').nth(rowIndex);
        const classAttr = await row.getAttribute('class') || '';
        expect(classAttr).toContain("Gray");
    }

    async verifyAtBillingContactDropDownList(): Promise<void> {
        const options = await this.page.locator('#tabAlarm_tmpl0_usrMasterMain_cddBillCon').locator('option').allInnerTexts();
        expect(options).toContain(PoliceData.getAlarmModuleValue("BillingContactDropDownList"));
    }

    async verifyAtPhoneInGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uIContactEntryGridTable, "Phone#");
        expect(columnValues).toContain(PoliceData.getAlarmModuleValue("Phone"));
    }

    async enterAtNameID1(): Promise<void> {
        const nameID1 = PoliceData.getAlarmModuleValue("NameID1");
        await this.uINameTypeEdit.fill(nameID1.substring(0, 1));
        await this.uINameIDEdit.fill(nameID1.substring(2));
        await this.page.waitForTimeout(500);
        await this.uINameIDEdit.press('Tab');
        await this.page.waitForTimeout(1000);
        await this.page.waitForLoadState('load');
    }

    async enterAtNameID2(): Promise<void> {
        const nameID2 = PoliceData.getAlarmModuleValue("NameID2");
        await this.uINameTypeEdit.fill(nameID2.substring(0, 1));
        await this.uINameIDEdit.fill(nameID2.substring(2));
        await this.page.waitForTimeout(500);
        await this.uINameIDEdit.press('Tab');
        await this.page.waitForTimeout(1000);
        await this.page.waitForLoadState('load');
    }

    async VerifyAtName2(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIContactEntryGridTable1, "Name", 0);
        expect(text).toBe(PoliceData.getAlarmModuleValue("Name2"));
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async SaveInternalTab1(): Promise<void> {
        await this.uIInternalSave.click();
        await this.popup.confirmYes();
    }

    async enterAtPhone(): Promise<void> {
        await this.uIPhoneEdit.click();
        await this.uIPhoneEdit.fill(PoliceData.getAlarmModuleValue("Phone"));
    }

    async selectAtPhoneType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIPhoneTypeDropDown, PoliceData.getAlarmModuleValue("PhoneType"));
    }

    async verifyAtPhoneType(): Promise<void> {
        const dropDownSelectedItem = await this.uIPhoneTypeDropDown.inputValue();
        expect(dropDownSelectedItem).toBe(PoliceData.getAlarmModuleValue("PhoneType"));
    }

    async verifyAtPhone(): Promise<void> {
        const phone = await this.uIPhoneEdit.inputValue();
        expect(phone).toBe(PoliceData.getAlarmModuleValue("PhoneNo"));
    }

    async clearphoneField(): Promise<void> {
        await this.uIPhoneEdit.clear();
    }

    async clickInternalSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async selectAtPhoneType2(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIPhoneType2DropDown, PoliceData.getAlarmModuleValue("PhoneType2"));
    }

    async enterAtPhone2(): Promise<void> {
        await this.uIPhone2Edit.click();
        await this.uIPhone2Edit.fill(PoliceData.getAlarmModuleValue("Phone2"));
    }

    async clickPhone1Delete(): Promise<void> {
        await this.uIDeletePhone1Button.click();
    }

    async clickPhone2Delete(): Promise<void> {
        await this.uIDeletePhone2Button.click();
    }

}

export class AlarmEntryMainTabPage {
    readonly page: Page; readonly popup:
        PopupHelpers; readonly grid: GridHelpers; readonly elementHelpers:
        ElementHelpers; readonly uIInstalledDateEdit: Locator; readonly
    uIInactiveCheckbox: Locator; readonly uIAlarmCompanyCodeEdit: Locator; readonly
    uIAlarmCompanySearchButton: Locator; readonly uIWaiveNoticeReasonComboBox:
        Locator; readonly uICommentsEdit: Locator; readonly
    uISameAsBusinessAccountCheckbox: Locator; readonly
    uIBusinessOrPersonNameTypeEdit: Locator; readonly uIBusinessOrPersonNameIDEdit:
        Locator; readonly uIBusinessOrPersonLastNameEdit: Locator; readonly
    uIBusinessOrPersonFirstNameEdit: Locator; readonly uIAddress1Edit: Locator;
    readonly uINotRegisteredCreateInvoiceButton: Locator; readonly
    uIEnterNewNameButton: Locator; readonly uIBillingContactComboBox: Locator;
    readonly uIAddress1IBubble: Locator; readonly uIBillToAccountNameIDEdit:
        Locator; readonly uIBillToAccountNameTypeEdit: Locator; readonly
    uIRegistationStatusText: Locator; readonly uIRegistationDateText: Locator;
    readonly uIRegistationDate: Locator; readonly uIRegistationDetailText: Locator;
    readonly uIBillToAccountClearIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIInstalledDateEdit = page.locator('#tabAlarm_tmpl0_usrMasterMain_dtAdjustmentsDate_KPIDttmCtrl');
        this.uIInactiveCheckbox = page.locator('#tabAlarm_tmpl0_usrMasterMain_chkInactive');
        this.uIAlarmCompanyCodeEdit = page.locator('#tabAlarm_tmpl0_usrMasterMain_lupAlarmCompany_CodeValue');
        this.uIAlarmCompanySearchButton = page.locator('#tabAlarm_tmpl0_usrMasterMain_lupAlarmCompany_imgBtn');
        this.uIWaiveNoticeReasonComboBox = page.locator('#tabAlarm_tmpl0_usrMasterMain_cddWNR_DropDown');
        this.uICommentsEdit = page.locator('#tabAlarm_tmpl0_usrMasterMain_txtComments');
        this.uISameAsBusinessAccountCheckbox = page.locator('#tabAlarm_tmpl0_usrMasterMain_chkBnsName');
        this.uIBusinessOrPersonNameTypeEdit = page.locator('#tabAlarm_tmpl0_usrMasterMain_BillAcName_NameType');
        this.uIBusinessOrPersonNameIDEdit = page.locator('#tabAlarm_tmpl0_usrMasterMain_BillAcName_NameTypeID');
        this.uIBusinessOrPersonLastNameEdit = page.locator('#tabAlarm_tmpl0_usrMasterMain_BillAcName_LastName');
        this.uIBusinessOrPersonFirstNameEdit = page.locator('#tabAlarm_tmpl0_usrMasterMain_BillAcName_FirstName');
        this.uIAddress1Edit = page.locator('#tabAlarm_tmpl0_usrMasterMain_adrBillAcAddress1_txtFrom');
        this.uINotRegisteredCreateInvoiceButton = page.locator('#tabAlarm_tmpl0_usrMasterMain_btnRegView');
        this.uIEnterNewNameButton = page.locator('#tabAlarm_tmpl0_usrMasterMain_cmdNewName');
        this.uIBillingContactComboBox = page.locator('#tabAlarm_tmpl0_usrMasterMain_cddBillCon');
        this.uIAddress1IBubble = page.locator('#tabAlarm_tmpl0_usrMasterMain_adrBillAcAddress1_cmdIncOnAddr');
        this.uIBillToAccountNameIDEdit = page.locator('#tabAlarm_tmpl0_usrMasterMain_BillAcName_NameTypeID');
        this.uIBillToAccountNameTypeEdit = page.locator('#tabAlarm_tmpl0_usrMasterMain_BillAcName_NameType');
        this.uIRegistationStatusText = page.locator('#tabAlarm_tmpl0_usrMasterMain_lblRegStatus');
        this.uIRegistationDateText = page.locator('#tabAlarm_tmpl0_usrMasterMain_lblRegDate');
        this.uIRegistationDate = page.locator('#tabAlarm_tmpl0_usrMasterMain_lblRegsisterDate');
        this.uIRegistationDetailText = page.locator('#tabAlarm_tmpl0_usrMasterMain_lblRegDtl');
        this.uIBillToAccountClearIcon = page.locator('#tabAlarm_tmpl0_usrMasterMain_imgClearBillAccount');
    }

    async EnterInstalledDateAsCurrentDate(): Promise<void> {
        await this.uIInstalledDateEdit.fill(DateHelpers.getCurrentDate());
    }

    async SelectAlarmCompany(): Promise<void> {
        await this.uIAlarmCompanySearchButton.click();
        const popupCodedGrid = this.page.locator('#grdSrch');
        await this.grid.selectRandomRow(popupCodedGrid);
    }

    async SelectWaiveNoticeReason(): Promise<void> {
        const options = await this.uIWaiveNoticeReasonComboBox.locator('option').allInnerTexts();
        const validOptions = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOption = validOptions[Math.floor(Math.random() * validOptions.length)];
        await this.uIWaiveNoticeReasonComboBox.selectOption({ label: randomOption });
    }

    async EnterComments(): Promise<void> {
        await this.uICommentsEdit.fill(RandomHelpers.randomString(16));
    }

    async clickSameAsBusinessAccountCheckbox(): Promise<void> {
        await this.uISameAsBusinessAccountCheckbox.click();
        await this.page.waitForTimeout(1000);
    }

    async VerifyAtBusinessOrPersonNameID(): Promise<void> {
        const type = await this.uIBusinessOrPersonNameTypeEdit.inputValue();
        const id = await this.uIBusinessOrPersonNameIDEdit.inputValue();
        expect(type).toBe(PoliceData.getAlarmModuleValue("BusinessOrPersonNameID").substring(0, 1));
        expect(id).toBe(PoliceData.getAlarmModuleValue("BusinessOrPersonNameID").substring(2));
    }

    async VerifyAtAddress1(): Promise<void> {
        const value = await this.uIAddress1Edit.inputValue();
        expect(value).toBe(PoliceData.getAlarmModuleValue("Address1"));
    }

    async VerifyBusinessPersonNameFieldsEmpty(): Promise<void> {
        const last = await this.uIBusinessOrPersonLastNameEdit.innerText();
        const first = await this.uIBusinessOrPersonFirstNameEdit.innerText();
        expect(last).toBe('');
        expect(first).toBe('');
    }

    async EnterAtBusinessOrPersonLastName(): Promise<void> {
        await this.uIBusinessOrPersonLastNameEdit.fill(PoliceData.getAlarmModuleValue("BusinessOrPersonLastName"));
    }

    async EnterAtBusinessOrPersonFirstName(): Promise<void> {
        await this.uIBusinessOrPersonFirstNameEdit.fill(PoliceData.getAlarmModuleValue("BusinessOrPersonFirstName"));
        await this.uIBusinessOrPersonFirstNameEdit.press('Tab');
    }

    async ClickNotRegisteredCreateInvoiceButton(): Promise<void> {
        await this.uINotRegisteredCreateInvoiceButton.click();
    }

    async VerifyRegisteredViewInvoiceButtonDisplayed(): Promise<void> {
        const value = await this.uINotRegisteredCreateInvoiceButton.getAttribute("value") || '';
        expect(value).toContain("Registered , View Invoice:");
    }

    async ClickRegisteredVieweInvoiceButton(): Promise<void> {
        await this.uINotRegisteredCreateInvoiceButton.click();
    }

    async VerifyInvoiceNo(invoiceNo: string): Promise<void> {
        const value = await this.uINotRegisteredCreateInvoiceButton.getAttribute("value") || '';
        expect(value).toContain(invoiceNo);
    }

    async ClickEnterNewNameButton(): Promise<void> {
        await this.uIEnterNewNameButton.click();
    }

    async VerifyAtBillingContact(): Promise<void> {
        const selected = await this.uIBillingContactComboBox.inputValue();
        expect(selected).toBe(PoliceData.getAlarmModuleValue("BillingContact"));
    }

    async ClickInactiveCheckbox(): Promise<void> {
        await this.uIInactiveCheckbox.click();
        await this.page.waitForTimeout(1000);
    }

    async VerifyInactiveDateAsCurrentDate(): Promise<void> {
        const value = await this.uIInstalledDateEdit.inputValue();
        expect(value).toContain(DateHelpers.getCurrentDate());
    }

    async VerifyNameTypeAsO(): Promise<void> {
        const value = await this.uIBusinessOrPersonNameTypeEdit.inputValue();
        expect(value).toBe("O");
    }

    async VerifyLastNameAsCurrentOwner(): Promise<void> {
        const value = await this.uIBusinessOrPersonLastNameEdit.inputValue();
        expect(value).toBe("Current Owner");
    }

    async VerifyFirstNameAsAlarmNo(alarmNo: string): Promise<void> {
        const value = await this.uIBusinessOrPersonFirstNameEdit.inputValue();
        expect(value).toBe("Alarm:" + alarmNo);
    }

    async EnterInstalledDateAsPreviousDate(): Promise<void> {
        await this.uIInstalledDateEdit.fill(DateHelpers.getPreviousDate(2, "MM/dd/yyyy"));
    }

    async VerifyRegisteredViewInvoiceButton(): Promise<void> {
        const value = await this.uINotRegisteredCreateInvoiceButton.getAttribute("value") || '';
        expect(value).toContain("Registered , View Invoice:");
    }

    async VerifyInvoiceNoWithYear(invoiceYear: string, invoiceNo: string): Promise<void> {
        const value = await this.uINotRegisteredCreateInvoiceButton.getAttribute("value") || '';
        expect(value).toContain(invoiceYear + "-" + invoiceNo);
    }

    async EnterAtBillAccount(): Promise<void> {
        const nameID1 = PoliceData.getAlarmModuleValue("NameID1");
        await this.uIBusinessOrPersonNameTypeEdit.fill(nameID1.substring(0, 1));
        await this.uIBusinessOrPersonNameIDEdit.fill(nameID1.substring(2));
        await this.uIBusinessOrPersonNameIDEdit.press('Tab');
    }

    async clearAlarmCompany(): Promise<void> {
        await this.uIAlarmCompanyCodeEdit.clear();
        await this.page.waitForTimeout(1000);
        await this.uIAlarmCompanyCodeEdit.press('Tab');
    }

    async clickAlarmCompanyLookup(): Promise<void> {
        await this.uIAlarmCompanySearchButton.click();
        await this.page.waitForTimeout(1000);
    }

    async VerifyAtBillingAccountAutoPopulatedWithName(): Promise<void> {
        const last = await this.uIBusinessOrPersonLastNameEdit.getAttribute("value");
        const first = await this.uIBusinessOrPersonFirstNameEdit.getAttribute("value");
        expect(last).toBe(PoliceData.getAlarmModuleValue("LastName"));
        expect(first).toBe(PoliceData.getAlarmModuleValue("FirstName"));
    }

    async VerifySameBusinessAccountCheckboxEnabled(): Promise<void> {
        await expect(this.uISameAsBusinessAccountCheckbox).toBeEnabled();
    }

    async VerifySameBusinessAccountCheckboxNotEnabled(): Promise<void> {
        await expect(this.uISameAsBusinessAccountCheckbox).toBeDisabled();
    }

    async verifyAtBillToAccountNameID(): Promise<void> {
        const nameID = PoliceData.getAlarmModuleValue("NameID");
        const type = await this.uIBillToAccountNameTypeEdit.inputValue();
        expect(type).toBe(nameID.substring(0, 1));
        await this.page.waitForTimeout(500);
        const id = await this.uIBillToAccountNameIDEdit.inputValue();
        expect(id).toBe(nameID.substring(2));
    }

    async clickAddress1IBubble(): Promise<void> {
        await this.uIAddress1IBubble.click();
    }

    async clickBillingContact(): Promise<void> {
        await this.uIBillingContactComboBox.click();
    }

    async verifyAtBillingContactDropDownList(): Promise<void> {
        const options = await this.uIBillingContactComboBox.locator('option').allInnerTexts();
        expect(options).toContain(PoliceData.getAlarmModuleValue("BillingContactDropDownList"));
    }

    async VerifyRegistrationStatusDateAndMsg(): Promise<void> {
        const color = await this.uIRegistationStatusText.evaluate(el => getComputedStyle(el).color);
        const staus = await this.uIRegistationStatusText.innerText();
        const text = await this.uIRegistationDateText.innerText();
        const date = await this.uIRegistationDate.innerText();
        const detail = await this.uIRegistationDetailText.innerText();
        expect(color).toBe("rgba(0, 128, 0, 1)");
        expect(staus).toBe("Registration Status");
        expect(text).toBe("Registration Date:");
        expect(date).toBe(DateHelpers.getCurrentDate());
        expect(detail).toBe("Alarm is considered Registered, if an Invoice is created for the Registration fee");
    }

    async clickBillToAccountClearIcon(): Promise<void> {
        await this.uIBillToAccountClearIcon.click();
    }

}

export class ProcessFalseAlarmTabPage {
    readonly page: Page; readonly popup:
        PopupHelpers; readonly uICallYearEdit: Locator; readonly uICallNumberEdit:
        Locator; readonly uIRemoveRadioButton: Locator; readonly uIReasonForRemovalEdit:
        Locator; readonly uI1stAlarmChargeRadioButton: Locator; readonly
    uIProcessButton: Locator; readonly uICancelButton: Locator; readonly
    uICADCFSEdit: Locator; readonly uINonChargeableDonotChargeRadioButton: Locator;
    readonly uINonChargeableRadioButton: Locator; readonly
    uIReasonForNonChargeableEdit: Locator; readonly uIDispositionEdit: Locator;
    readonly uIReasonForRemovalLabel: Locator; readonly uI1stAlarmChargeLabel:
        Locator; readonly uICallInfoIcon: Locator; readonly
    uIDispatchEnvironmentAtTheTimeOfTheCallButton: Locator; readonly
    uI2ndAlarmChargeLabel: Locator; readonly uI3rdAlarmChargeLabel: Locator;
    readonly uI2ndAlarmChargeRadioButton: Locator; readonly
    uI3rdAlarmChargeRadioButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uICallYearEdit = page.locator('#tabAlarm_tmpl3_usrProcessFalseAlarm_nbrCallNo_Year');
        this.uICallNumberEdit = page.locator('#tabAlarm_tmpl3_usrProcessFalseAlarm_nbrCallNo_Number');
        this.uIRemoveRadioButton = page.locator('#tabAlarm_tmpl3_usrProcessFalseAlarm_rdoSrchDttm_0');
        this.uIReasonForRemovalEdit = page.locator('#tabAlarm_tmpl3_usrProcessFalseAlarm_txtReason');
        this.uI1stAlarmChargeRadioButton = page.locator('#tabAlarm_tmpl3_usrProcessFalseAlarm_rdoSrchDttm_1');
        this.uIProcessButton = page.locator('#tabAlarm_tmpl3_usrProcessFalseAlarm_cmdProcess');
        this.uICancelButton = page.locator('#tabAlarm_tmpl3_usrProcessFalseAlarm_cmdCancel');
        this.uICADCFSEdit = page.locator('#tabAlarm_tmpl3_usrProcessFalseAlarm_txtCADCFS');
        this.uINonChargeableDonotChargeRadioButton = page.locator('#tabAlarm_tmpl3_usrProcessFalseAlarm_rdoSrchDttm_1');
        this.uINonChargeableRadioButton = page.locator('#tabAlarm_tmpl3_usrProcessFalseAlarm_rdoSrchDttm_2');
        this.uIReasonForNonChargeableEdit = page.locator('#tabAlarm_tmpl3_usrProcessFalseAlarm_txtReason');
        this.uIDispositionEdit = page.locator('#tabAlarm_tmpl3_usrProcessFalseAlarm_txtDisposition');
        this.uIReasonForRemovalLabel = page.locator("//div[@id = 'tabAlarm_tmpl3_usrProcessFalseAlarm_pnlUpdate']//td");
        this.uI1stAlarmChargeLabel = page.locator("//td//label[contains(text(),'1st Alarm')]");
        this.uICallInfoIcon = page.locator('#tabAlarm_tmpl3_usrProcessFalseAlarm_nbrCallNo_imgBtn');
        this.uIDispatchEnvironmentAtTheTimeOfTheCallButton = page.locator('#tabAlarm_tmpl3_usrProcessFalseAlarm_nbrCallNo_imgRcptBtn');
        this.uI2ndAlarmChargeLabel = page.locator("//td//label[contains(text(),'2nd Alarm')]");
        this.uI3rdAlarmChargeLabel = page.locator("//td//label[contains(text(),'3rd Alarm')]");
        this.uI2ndAlarmChargeRadioButton = page.locator('#tabAlarm_tmpl3_usrProcessFalseAlarm_rdoSrchDttm_1');
        this.uI3rdAlarmChargeRadioButton = page.locator('#tabAlarm_tmpl3_usrProcessFalseAlarm_cmdProcess');
    }

    async VerifyRemoveRadioButtonDisabled(): Promise<void> {
        await expect(this.uIRemoveRadioButton).toBeDisabled();
    }

    async VerifyProcessButtonDisabled(): Promise<void> {
        await expect(this.uIProcessButton).toBeDisabled();
    }

    async VerifyCancelButtonDisabled(): Promise<void> {
        await expect(this.uICancelButton).toBeDisabled();
    }

    async ClearCallNo(): Promise<void> {
        await this.uICallYearEdit.clear();
        await this.uICallNumberEdit.clear();
    }

    async EnterAtCallNo(): Promise<void> {
        const callNo = PoliceData.getAlarmModuleValue("CallNo");
        await this.uICallYearEdit.fill(callNo.substring(0, 2));
        await this.uICallNumberEdit.fill(callNo.substring(3));
        await this.uICallNumberEdit.press('Tab');
        await this.page.waitForTimeout(1000);
        await this.page.waitForLoadState('load');
    }

    async EnterAtCallNo1(): Promise<void> {
        const callNo1 = PoliceData.getAlarmModuleValue("CallNo1");
        await this.uICallYearEdit.fill(callNo1.substring(0, 2));
        await this.uICallNumberEdit.fill(callNo1.substring(3));
        await this.uICallNumberEdit.press('Tab');
        await this.page.waitForTimeout(1000);
        await this.page.waitForLoadState('load');
    }

    async VerifyAtCADCFS(): Promise<void> {
        const value = await this.uICADCFSEdit.inputValue();
        expect(value).toContain(PoliceData.getAlarmModuleValue("CADCFS"));
    }

    async VerifyRemoveRadioButtonEnabled(): Promise<void> {
        await expect(this.uIRemoveRadioButton).toBeEnabled();
    }

    async VerifyProcessButtonEnabled(): Promise<void> {
        await expect(this.uIProcessButton).toBeEnabled();
    }

    async VerifyCancelButtonEnabled(): Promise<void> {
        await expect(this.uICancelButton).toBeEnabled();
    }

    async ClickRemoveRadioButton(): Promise<void> {
        await this.uIRemoveRadioButton.click();
    }

    async Click1stAlarmCharge25RadioButton(): Promise<void> {
        await this.uI1stAlarmChargeRadioButton.click();
    }

    async EnterReasonForRemovalEdit(): Promise<void> {
        await this.uIReasonForRemovalEdit.fill(RandomHelpers.randomString(15));
    }

    async ClickProcessButton(): Promise<void> {
        await this.uIProcessButton.click();
        await this.page.waitForLoadState('load');
    }

    async ClickNonChargeableDonotChargeRadioButton(): Promise<void> {
        await this.uINonChargeableDonotChargeRadioButton.click();
        await this.page.waitForTimeout(1000);
    }

    async Click1stAlarmChargeRadioButton(): Promise<void> {
        await this.uI1stAlarmChargeRadioButton.click();
    }

    async VerifyResonForRemovalMandatory(): Promise<void> {
        const classAttr = await this.uIReasonForRemovalLabel.getAttribute("class") || '';
        expect(classAttr).toBe("req");
    }

    async VerifyAtDisposition(): Promise<void> {
        const value = await this.uIDispositionEdit.inputValue();
        expect(value).toContain(PoliceData.getAlarmModuleValue("Disposition"));
    }

    async readReasonForRemoval(): Promise<string> {
        return await this.uIReasonForRemovalEdit.inputValue();
    }

    async ClickNonChargeableRadioButton(): Promise<void> {
        await this.uINonChargeableRadioButton.click();
        await this.page.waitForTimeout(1000);
    }

    async EnterForResonNonChargable(): Promise<void> {
        await this.uIReasonForNonChargeableEdit.fill(RandomHelpers.randomString(20));
    }

    async VerifyAddressMismatchConfirmMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(9530) The entered Alarm address is mismatched for this Alarm address. Are you sure you want to process this alarm?");
        await this.popup.confirmYes();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtCallNo(): Promise<void> {
        const callYear = await this.uICallYearEdit.inputValue();
        const callNo = await this.uICallNumberEdit.inputValue();
        expect(callYear).toContain(PoliceData.getAlarmModuleValue("CallNo").substring(0, 2));
        expect(callNo).toContain(PoliceData.getAlarmModuleValue("CallNo").substring(3));
    }

    async verifyCallNoByActiveData(callNo: string): Promise<void> {
        const callYear = await this.uICallYearEdit.inputValue();
        const calNo = await this.uICallNumberEdit.inputValue();
        expect(callNo.substring(0, 2)).toContain(callYear);
        expect(callNo.substring(3)).toContain(calNo);
    }

    async verifyAs1stAlarmChargeLabel(): Promise<void> {
        const text = await this.uI1stAlarmChargeLabel.innerText();
        expect(text).toContain("1st Alarm, Charge $0.00");
    }

    async verifyNonChargeableDNCIsDisplayed(): Promise<void> {
        await expect(this.uINonChargeableDonotChargeRadioButton).toBeVisible();
    }

    async clickCallInfoIcon(): Promise<void> {
        await this.uICallInfoIcon.click();
    }

    async verify9530TheEnteredAlarmPopUp(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(9530) The entered Alarm address is mismatched for this Alarm address. Are you sure you want to process this alarm?");
        await this.popup.confirmYes();
    }

    async verifyAs2ndAlarmChargeLabel(): Promise<void> {
        const text = await this.uI2ndAlarmChargeLabel.innerText();
        expect(text).toContain("2nd Alarm, Charge $0.00");
    }

    async verifyAs3rdAlarmChargeLabel(): Promise<void> {
        const text = await this.uI3rdAlarmChargeLabel.innerText();
        expect(text).toContain("3rd Alarm, Charge $10.00");
    }

    async click2ndAlarmChargeRadioButton(): Promise<void> {
        await this.uI2ndAlarmChargeRadioButton.click();
    }

    async Click3rdAlarmChargeRadioButton(): Promise<void> {
        await this.uI3rdAlarmChargeRadioButton.click();
    }

    async clickDispatchEnvironmentAtTheTimeOfTheCallButton(): Promise<void> {
        await this.uIDispatchEnvironmentAtTheTimeOfTheCallButton.click();
    }

    async EnterAtReasonForRemoval(): Promise<void> {
        await this.uIReasonForRemovalEdit.fill(PoliceData.getAlarmModuleValue("ReasonForRemoval"));
    }

    async verifyMandatoryDataAcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(8) Enter mandatory data");
        await this.popup.acknowledgeOk();
    }

    async verifyReasonForRemovalIsEnabled(): Promise<void> {
        await expect(this.uIReasonForRemovalEdit).toBeEnabled();
    }

}

export class TransactionHistoryTabPage {
    readonly page: Page; readonly popup:
        PopupHelpers; readonly grid: GridHelpers; readonly uIUpdatedDateEdit: Locator;
    readonly uIUpdatedByCodeEdit: Locator; readonly uINotesEdit: Locator; readonly
    uIAddButton: Locator; readonly uITransactionHistoryTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uIUpdatedDateEdit = page.locator('#tabAlarm_tmpl4_UsrTransactionHistory_dtcUpdatDttm_Date_KPIDttmCtrl');
        this.uIUpdatedByCodeEdit = page.locator('#tabAlarm_tmpl4_UsrTransactionHistory_lupUpdatePF_CodeValue');
        this.uINotesEdit = page.locator('#tabAlarm_tmpl4_UsrTransactionHistory_txtNotes');
        this.uIAddButton = page.locator('#tabAlarm_tmpl4_UsrTransactionHistory_cmdAddHistory');
        this.uITransactionHistoryTable = page.locator('#tabAlarm_tmpl4_UsrTransactionHistory_grdTransHistory');
    }

    async VerifyAtPFUsingTypeInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uITransactionHistoryTable, PoliceData.getAlarmModuleValue("Type"), "PF");
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAlarmModuleValue("PF"));
    }

    async VerifyAtTypeInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uITransactionHistoryTable, PoliceData.getAlarmModuleValue("Type"), "Type");
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAlarmModuleValue("Type"));
    }

    async Verify1018RequiredEntriesAreMissingAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(1018) Required Entries are Missing");
        await this.popup.acknowledgeOk();
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async TabOutUpdatedDate(): Promise<void> {
        await this.uIUpdatedDateEdit.press('Tab');
    }

    async EnterAtUpdatedBy(): Promise<void> {
        await this.uIUpdatedByCodeEdit.fill(PoliceData.getAlarmModuleValue("UpdatedBy"));
        await this.uIUpdatedByCodeEdit.press('Tab');
    }

    async EnterAtNotes(): Promise<void> {
        await this.uINotesEdit.fill(PoliceData.getAlarmModuleValue("Notes"));
    }

    async VerifyAtNotesInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uITransactionHistoryTable, PoliceData.getAlarmModuleValue("Notes"), "Notes");
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAlarmModuleValue("Notes"));
    }

    async DeleteRowUsingAtType(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uITransactionHistoryTable, PoliceData.getAlarmModuleValue("Type"));
        await this.page.waitForTimeout(1000);
    }

    async VerifyDeleteConfirmMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(9533) Are you sure you want to delete this transaction history item?");
        await this.popup.confirmYes();
    }

    async VerifyRowDeletedUsingRowCount(): Promise<void> {
        const count = await this.grid.getRowCount(this.uITransactionHistoryTable);
        expect(count).toBe(0);
    }

    async VerifyAtCallNoInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uITransactionHistoryTable, "Call#", rowIndex);
        expect(text).toBe(PoliceData.getAlarmModuleValue("CallNo"));
    }

    async ClickCallInfoIconInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uITransactionHistoryTable, PoliceData.getAlarmModuleValue("CallNo"));
        await cell.locator("//td[@title='Call Details']").click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtFeeInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uITransactionHistoryTable, PoliceData.getAlarmModuleValue("Fee"), "Fee $");
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAlarmModuleValue("Fee"));
    }

    async verifyAdjustInvoiceAmountConfirmMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(9534) Do you want to adjust the invoice amount?");
        await this.popup.confirmYes();
    }

    async getInvoiceNoInGrid(rowindex: number): Promise<string> {
        return await this.grid.getGridCellInnerText(this.uITransactionHistoryTable, "Invoice#", rowindex);
    }

    async ClickPrintIconInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uITransactionHistoryTable, PoliceData.getAlarmModuleValue("Paid"));
        await cell.locator("//td[@title='Reprint Invoice']").click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtFeeInGridBasedOnType(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uITransactionHistoryTable, PoliceData.getAlarmModuleValue("Type"), "Fee $");
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAlarmModuleValue("Fee"));
    }

    async verifyDuplicationNotFoundByCallno(): Promise<void> {
        const list = await this.grid.getGridTableColumnValues(this.uITransactionHistoryTable, "Call#");
        const call = PoliceData.getAlarmModuleValue("callno1");
        let count = 0;
        for (const item of list) {
            if (item === call) {
                count++;
            }
        }
        expect(count).toBe(1);
    }

    async verifyAtInvoiceInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uITransactionHistoryTable, PoliceData.getAlarmModuleValue("Invoice"));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAlarmModuleValue("Invoice"));
    }

}

export class InvoicesTabPage {
    readonly page: Page; readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers; readonly uIInvoiceTypeDropdown:
        Locator; readonly uISearchButton: Locator; readonly uIInvoiceTable: Locator;
    readonly uIBalanceEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIInvoiceTypeDropdown = page.locator('#tabAlarm_tmpl5_usrGenericInvoicePayments1_cddInvoiceType_DropDown');
        this.uISearchButton = page.locator('#tabAlarm_tmpl5_usrGenericInvoicePayments1_cmdSearch');
        this.uIInvoiceTable = page.locator("//div[@id='tabAlarm_tmpl5_usrGenericInvoicePayments1_grdInvoice']");
        this.uIBalanceEdit = page.locator('#tabAlarm_tmpl5_usrGenericInvoicePayments1_txtCurrentBalance');
    }

    async SelectInvoiceTypeAsRegistration(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIInvoiceTypeDropdown, "Registration");
    }

    async ClickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async SelectInvoiceTypeAsFalseAlarm(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIInvoiceTypeDropdown, "False Alarm");
    }

    async VerifyInvoiceTypeAsRegistrationInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIInvoiceTable, "Registration", "Invoice Type");
        const text = await cell.innerText();
        expect(text).toBe("Registration");
    }

    async VerifyInvoiceTypeAsFalseAlarmInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIInvoiceTable, "False Alarm", "Invoice Type");
        const text = await cell.innerText();
        expect(text).toBe("False Alarm");
    }

    async SelectGridRowByFalseAlarm(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIInvoiceTable, "False Alarm");
    }

    async VerifyBalanceAsZeroUsingInvoiceTypeInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIInvoiceTable, PoliceData.getAlarmModuleValue("InvoiceType"), "Balance");
        const text = await cell.innerText();
        expect(text).toBe("$0.00");
    }

    async VerifyBalanceAsZero(): Promise<void> {
        const value = await this.uIBalanceEdit.inputValue();
        expect(value).toBe("$0.00");
    }

    async verifyAdjustmentsInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIInvoiceTable, PoliceData.getAlarmModuleValue("Adjustments"), "Adjustments");
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAlarmModuleValue("Adjustments"));
    }

    async verifyAtInvoicTypeInGrid(idx: number): Promise<void> {
        const gridTableColumnValues = await this.grid.getGridTableColumnValues(this.uIInvoiceTable, "Invoice Type");
        for (const type of gridTableColumnValues) {
            expect(type).toContain(PoliceData.getAlarmModuleValue("InvoiceType" + idx));
        }
    }

    async verifyGridRowCountIsNotMoreThanOne(): Promise<void> {
        const count = await this.grid.getRowCount(this.uIInvoiceTable);
        expect(count).toBe(1);
    }

    async verifyRowIsNotAvailableusingTag(): Promise<void> {
        const rows = this.page.locator("//div[@id='tabAlarm_tmpl5_usrGenericInvoicePayments1_grdInvoice']//table//tbody[contains(@class,'Item')]//tr");
        const count = await rows.count();
        expect(count).toBe(0);
    }

    async selectAtGridRowByInvoice(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIInvoiceTable, PoliceData.getAlarmModuleValue("Invoice"));
    }

    async verifyGridCount(count: number): Promise<void> {
        const rowCount = await this.grid.getRowCount(this.uIInvoiceTable);
        expect(rowCount).not.toBe(count);
    }

    async verifyAtInvoiceInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIInvoiceTable, PoliceData.getAlarmModuleValue("Invoice"));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAlarmModuleValue("Invoice"));
    }

    async verifyGridCountIsnull(): Promise<void> {
        const gridTableColumnValues = await this.grid.getGridTableColumnValues(this.uIInvoiceTable, "Invoice Type");
        expect(gridTableColumnValues.length).toBe(0);
    }

}

export class AlarmSearchPage {
    readonly page: Page; readonly popup:
        PopupHelpers; readonly grid: GridHelpers; readonly elementHelpers:
        ElementHelpers; readonly uIAddNewButton: Locator; readonly uISearchButton:
        Locator; readonly uIAlarmNo: Locator; readonly uIAlarmLocationEdit: Locator;
    readonly uIAlarmTypeComboBox: Locator; readonly uIAlarmSearchTable: Locator;
    readonly uIBusinessOrPersonLastName: Locator; readonly
    uIBusinessOrPersonFirstName: Locator; readonly uIAddressEdit: Locator; readonly
    uIAlarmCompanyCodeEdit: Locator; readonly uIRefreshButton: Locator; readonly
    uIPrintButton: Locator; readonly uIBalanceAmount: Locator; readonly uIYTDOccur:
        Locator; readonly uIBackButton: Locator; readonly uIResetButton: Locator;
    readonly uIBusinessOrPersonNameIDType: Locator; readonly
    uIBusinessOrPersonNameID: Locator; readonly uIShowUnregisteredOnlyCheckBox:
        Locator; readonly uIAlarmLocationVerifycheckBox: Locator; readonly
    uIAlarmLocationIBubble: Locator; readonly uIIncludeInactiveCheckBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIAddNewButton = page.locator("(//span[contains(text(),'Add New')])");
        this.uISearchButton = page.locator("(//span[contains(text(),'Search')])");
        this.uIAlarmNo = page.locator('#txtAlarm');
        this.uIAlarmLocationEdit = page.locator('#adrMainAddress_txtFrom');
        this.uIAlarmTypeComboBox = page.locator('#cddAlarmType');
        this.uIAlarmSearchTable = page.locator('#grdAlarms');
        this.uIBusinessOrPersonLastName = page.locator('#nBusinessPersonName_LastName');
        this.uIBusinessOrPersonFirstName = page.locator('#nBusinessPersonName_FirstName');
        this.uIAddressEdit = page.locator('#adrMainAddress_txtFrom');
        this.uIAlarmCompanyCodeEdit = page.locator('#cddAlarmCompany_CodeValue');
        this.uIRefreshButton = page.locator("(//span[contains(text(),'Refresh')])");
        this.uIPrintButton = page.locator("//li[@title='Print']");
        this.uIBalanceAmount = page.locator('#txtBalanceAmt');
        this.uIYTDOccur = page.locator('#txtYTDOcc');
        this.uIBackButton = page.locator("(//span[contains(text(),'Back')])");
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
        this.uIBusinessOrPersonNameIDType = page.locator('#nBusinessPersonName_NameType');
        this.uIBusinessOrPersonNameID = page.locator('#nBusinessPersonName_NameTypeID');
        this.uIShowUnregisteredOnlyCheckBox = page.locator('#chkShowUnreg');
        this.uIAlarmLocationVerifycheckBox = page.locator('#adrMainAddress_chkVerify');
        this.uIAlarmLocationIBubble = page.locator('#adrMainAddress_cmdIncOnAddr');
        this.uIIncludeInactiveCheckBox = page.locator('#chkIncludeInactive');
    }

    async ClickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async EnterAtAlarmNo(): Promise<void> {
        await this.uIAlarmNo.fill(PoliceData.getAlarmModuleValue("AlarmNo"));
    }

    async enterAtAlarmNoByIndex(idx: number): Promise<void> {
        await this.uIAlarmNo.fill(PoliceData.getAlarmModuleValue("AlarmNo" + idx));
    }

    async EnterAtAlarmLocation(): Promise<void> {
        await this.uIAlarmLocationEdit.fill(PoliceData.getAlarmModuleValue("AlarmLocation"));
    }

    async EnterAtAddress(): Promise<void> {
        await this.uIAddressEdit.fill(PoliceData.getAlarmModuleValue("Address"));
    }

    async SelectAtAlarmType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIAlarmTypeComboBox, PoliceData.getAlarmModuleValue("AlarmType"));
    }

    async ClickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async VerifyAtAlarmTypeByAtAlarmNoInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIAlarmSearchTable, PoliceData.getAlarmModuleValue("AlarmNo"), "Alarm Type");
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAlarmModuleValue("AlarmType"));
    }

    async VerifyAtAlarmTypeInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIAlarmSearchTable, "Alarm Type", rowIndex);
        expect(text).toBe(PoliceData.getAlarmModuleValue("AlarmType"));
    }

    async VerifyAtAlarmNoRowAppearAsRedColor(rowIndex: number): Promise<void> {
        const row = this.uIAlarmSearchTable.locator('tbody tr').nth(rowIndex);
        const classAttr = await row.getAttribute('class') || '';
        expect(classAttr).toContain("Red");
    }

    async SelectGridRowByAtAlarmNo(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAlarmSearchTable, PoliceData.getAlarmModuleValue("AlarmNo"));
    }

    async selectGridRowByAtAlarmNoByIndex(idx: number): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAlarmSearchTable, PoliceData.getAlarmModuleValue("AlarmNo" + idx));
    }

    async VerifyAtAddress(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIAlarmSearchTable, PoliceData.getAlarmModuleValue("Address"));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAlarmModuleValue("Address"));
    }

    async SelectGridRowByAtAlarmType(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAlarmSearchTable, PoliceData.getAlarmModuleValue("AlarmType"));
    }

    async SelectGridRowByAtBusinessName(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAlarmSearchTable, PoliceData.getAlarmModuleValue("BusinessName"));
    }

    async EnterAtBusinessOrPersonLastName(): Promise<void> {
        await this.uIBusinessOrPersonLastName.fill(PoliceData.getAlarmModuleValue("BusinessOrPersonLastName"));
    }

    async EnterAtBusinessOrPersonFirstName(): Promise<void> {
        await this.uIBusinessOrPersonFirstName.fill(PoliceData.getAlarmModuleValue("BusinessOrPersonFirstName"));
        await this.uIBusinessOrPersonFirstName.press('Tab');
    }

    async ClickAtAddressInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAlarmSearchTable, PoliceData.getAlarmModuleValue("Address"));
    }

    async EnterAtAlarmCompany(): Promise<void> {
        await this.uIAlarmCompanyCodeEdit.fill(PoliceData.getAlarmModuleValue("AlarmCompany"));
        await this.uIAlarmCompanyCodeEdit.press('Tab');
    }

    async SelectGridRowByAtAddress(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAlarmSearchTable, PoliceData.getAlarmModuleValue("Address"));
    }

    async EnterAlarmNo(alarmNo: string): Promise<void> {
        await this.uIAlarmNo.fill(alarmNo);
    }

    async SelectGridRowByAlarmNo(alarmNo: string): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAlarmSearchTable, alarmNo);
        await this.page.waitForLoadState('load');
    }

    async ClickRefresh(): Promise<void> {
        await this.uIRefreshButton.click();
        await this.page.waitForLoadState('load');
    }

    async clickPrintButton(): Promise<void> {
        await this.uIPrintButton.click();
        await this.page.waitForLoadState('load');
    }

    async SelectGridRowByAtAddress1(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAlarmSearchTable, PoliceData.getAlarmModuleValue("Address1"));
    }

    async readAlarmNo(): Promise<string> {
        const cell = await this.grid.getGridCell(this.uIAlarmSearchTable, PoliceData.getAlarmModuleValue("Address"), "Alarm#");
        return await cell.innerText();
    }

    async selectGridRowByActiveAlarmNo(alarmNo: string): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAlarmSearchTable, alarmNo);
    }

    async enterAtBalanceAmount(): Promise<void> {
        await this.uIBalanceAmount.fill(PoliceData.getAlarmModuleValue("BalanceAmount"));
    }

    async enterAtTotalYTDOccurrences(): Promise<void> {
        await this.uIYTDOccur.fill(PoliceData.getAlarmModuleValue("YTDOccurrences"));
    }

    async verifyAtBalanceFromGridRow(rowIndex: number): Promise<void> {
        const balance = await this.grid.getGridCellInnerText(this.uIAlarmSearchTable, "Balance", rowIndex);
        expect(balance).toContain(PoliceData.getAlarmModuleValue("BalanceAmount"));
    }

    async verifyAtYTDOccurrenceFromGridRow(rowIndex: number): Promise<void> {
        const ytd = await this.grid.getGridCellInnerText(this.uIAlarmSearchTable, "YTD Count", rowIndex);
        expect(ytd).toContain(PoliceData.getAlarmModuleValue("YTDOccurrences"));
    }

    async getRowsCount(): Promise<string> {
        const rows = await this.grid.getRowCount(this.uIAlarmSearchTable);
        return String(rows);
    }

    async reloadAlarmSearch(): Promise<void> {
        await this.page.reload();
        await this.page.waitForLoadState('load');
    }

    async verifyAtYTDCountInGrid(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCellByIndex(this.uIAlarmSearchTable, rowIndex, "YTD Count");
        const text = await cell.innerText();
        expect(text).toContain(PoliceData.getAlarmModuleValue("YTDCount"));
    }

    async enterAlarmNoByActiveData(alarmNo: string): Promise<void> {
        await this.uIAlarmNo.fill(alarmNo);
        await this.uIAlarmNo.press('Tab');
    }

    async clickBackButton(): Promise<void> {
        await this.uIBackButton.click();
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async enterAtBusinessOrPersonNameID(): Promise<void> {
        const nameID = PoliceData.getAlarmModuleValue("BusinessOrPersonNameID");
        await this.uIBusinessOrPersonNameIDType.fill(nameID.substring(0, 1));
        await this.uIBusinessOrPersonNameIDType.press('Tab');
        await this.uIBusinessOrPersonNameID.fill(nameID.substring(2));
        await this.uIBusinessOrPersonNameID.press('Tab');
    }

    async verifyNoRecordFoundAcknowlede(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("1011 - No Record Found");
        await this.popup.acknowledgeOk();
    }

    async clickShowUnregisteredOnlyCheckBox(): Promise<void> {
        await this.uIShowUnregisteredOnlyCheckBox.click();
    }

    async tabOutAlarmLocation(): Promise<void> {
        await this.uIAddressEdit.press('Tab');
    }

    async tabOutAlarmLocationCheckBox(): Promise<void> {
        await this.uIAlarmLocationVerifycheckBox.press('Tab');
    }

    async tabOutHiddenInfoIconCheckBox(): Promise<void> {
        await this.uIAlarmLocationIBubble.press('Tab');
    }

    async enterAUsingKeyboard(): Promise<void> {
        await this.page.keyboard.press('a');
        await this.page.keyboard.press('Tab');
    }

    async verifyCommonNameHelpWindowNotOpened(): Promise<void> {
        const pages = this.page.context().pages();
        for (const p of pages) {
            const url = p.url();
            expect(url).not.toContain("frmAddrCommonName.aspx");
        }
    }

    async clickIncludeInactiveCheckBox(): Promise<void> {
        await this.uIIncludeInactiveCheckBox.click();
    }

    async verifyAtBalanceAmountIsGreaterThan100(): Promise<void> {
        const gridTableColumnValues = await this.grid.getGridTableColumnValues(this.uIAlarmSearchTable, PoliceData.getAlarmModuleValue("ColumnName"));
        for (const columnValues of gridTableColumnValues) {
            const replace = columnValues.replace("$", "").trim();
            const amount = parseFloat(replace);
            expect(amount).toBeGreaterThanOrEqual(100);
        }
    }

    async verifyUnregistredRecordsInGrid(): Promise<void> {
        const checkboxes = this.uIAlarmSearchTable.locator('img[title="Unchecked"]');
        const count = await checkboxes.count();
        expect(count).toBeGreaterThan(0);
    }

}

export class AlarmCompanySearchPage {
    readonly page: Page; readonly popup:
        PopupHelpers; readonly grid: GridHelpers; readonly uIAddNewButton: Locator;
    readonly uICompanyCodeEdit: Locator; readonly uICompanyNameEdit: Locator;
    readonly uISearchButton: Locator; readonly uIAlarmCompanySearchTable: Locator;
    readonly uIJurisDropdown: Locator; readonly uIPrintIcon: Locator; readonly
    uIExportToExcelIcon: Locator; readonly uIPageBottomBar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uIAddNewButton = page.locator("(//span[contains(text(),'Add New')])");
        this.uICompanyCodeEdit = page.locator('#txtCMPCode');
        this.uICompanyNameEdit = page.locator('#txtLastName');
        this.uISearchButton = page.locator('#cmdSearch');
        this.uIAlarmCompanySearchTable = page.locator('#grdALCMP');
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uIPrintIcon = page.locator("//img[@alt='Print']");
        this.uIExportToExcelIcon = page.locator("//img[@alt='Export to Excel']");
        this.uIPageBottomBar = page.locator("//div[@class='igg_BlueThemePager']");
    }

    async ClickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async EnterAtCompanyCode(): Promise<void> {
        await this.uICompanyCodeEdit.fill(PoliceData.getAlarmModuleValue("CompanyCode"));
    }

    async EnterAtCompanyName(): Promise<void> {
        await this.uICompanyNameEdit.fill(PoliceData.getAlarmModuleValue("CompanyName"));
    }

    async ClickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async VerifyAtName(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIAlarmCompanySearchTable, "Name", rowIndex);
        expect(text).toBe(PoliceData.getAlarmModuleValue("Name"));
    }

    async VerifyAtCompanyCode(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIAlarmCompanySearchTable, "Company Code", rowIndex);
        expect(text).toBe(PoliceData.getAlarmModuleValue("CompanyCode"));
    }

    async VerifyAtZip(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIAlarmCompanySearchTable, "Zip", rowIndex);
        expect(text).toBe(PoliceData.getAlarmModuleValue("Zip"));
    }

    async ClickAtCompanyCodeInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAlarmCompanySearchTable, PoliceData.getAlarmModuleValue("CompanyCode"));
        await this.page.waitForTimeout(1000);
    }

    async verifyJurisAsPX(): Promise<void> {
        const cell = await this.grid.getGridCellByIndex(this.uIAlarmCompanySearchTable, 0, "Juris");
        const text = await cell.innerText();
        expect(text.trim()).toBe("");
    }

    async verifyJurisAsBC(): Promise<void> {
        const cell = await this.grid.getGridCellByIndex(this.uIAlarmCompanySearchTable, 1, "Juris");
        const text = await cell.innerText();
        expect(text.trim()).toBe("BC");
    }

    async selectJurisAsEmpty(): Promise<void> {
        await this.uIJurisDropdown.selectOption({ index: 0 });
        await this.page.waitForTimeout(1000);
    }

    async verifyAtLocation(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIAlarmCompanySearchTable, PoliceData.getAlarmModuleValue("Location"));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAlarmModuleValue("Location"));
    }

    async clearCompanyCode(): Promise<void> {
        await this.uICompanyCodeEdit.clear();
    }

    async clickGridHeaderByColumnName(columnName: string): Promise<void> {
        await this.grid.clickGridColumnHeader(this.uIAlarmCompanySearchTable, columnName);
    }

    async verifyGridCount(count: number): Promise<void> {
        const gridTableRowsCount = await this.grid.getRowCount(this.uIAlarmCompanySearchTable);
        expect(gridTableRowsCount).toBe(count);
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async verify1085EnterAtLeastOneCriteriaAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("1085 - Enter at least one criteria/keyword to start the search");
        await this.popup.acknowledgeOk();
    }

    async clickExportToExcelIcon(): Promise<void> {
        await this.uIExportToExcelIcon.click();
    }

    async clickPageBottomBar(): Promise<void> {
        await this.uIPageBottomBar.click();
    }

    async reloadScreen(): Promise<void> {
        await this.page.reload();
        await this.page.waitForLoadState('load');
    }

}

export class AlarmNameEntryPage {
    readonly page: Page; readonly popup:
        PopupHelpers; readonly elementHelpers: ElementHelpers; readonly
    uIBusinessIDEdit: Locator; readonly uINameEdit: Locator; readonly uIAddressEdit:
        Locator; readonly uIAddressCheckbox: Locator; readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator; readonly uIBottomLeftSideStatusBar:
        Locator; readonly uIPhoneType1Combobox: Locator; readonly uIPhoneNumber1Edit:
        Locator; readonly uIPhoneType2Combobox: Locator; readonly uIPhoneNumber2Edit:
        Locator; readonly uIDefunctDate: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIBusinessIDEdit = page.locator('#txtCMPCode');
        this.uINameEdit = page.locator('#txtBusinessName');
        this.uIAddressEdit = page.locator('#adrAlarmAddress1_txtFrom');
        this.uIAddressCheckbox = page.locator('#adrAlarmAddress1_chkVerify');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIPhoneType1Combobox = page.locator('#txtNumber_PhoneType_DropDown');
        this.uIPhoneNumber1Edit = page.locator('#txtNumber_PhoneNumber');
        this.uIPhoneType2Combobox = page.locator('#txtPhNumber_PhoneType_DropDown');
        this.uIPhoneNumber2Edit = page.locator('#txtPhNumber_PhoneNumber');
        this.uIDefunctDate = page.locator("//input[@id='dtcDeceased_KPIDttmCtrl']");
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async Verify1018RequiredEntriesAreMissingAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(1018) Required Entries are Missing");
        await this.popup.acknowledgeOk();
    }

    async EnterAtBusinessID(): Promise<void> {
        await this.uIBusinessIDEdit.fill(PoliceData.getAlarmModuleValue("BusinessID"));
    }

    async EnterAtName(): Promise<void> {
        await this.uINameEdit.fill(PoliceData.getAlarmModuleValue("Name"));
    }

    async EnterAtAddress(): Promise<void> {
        await this.uIAddressEdit.fill(PoliceData.getAlarmModuleValue("Address"));
        await this.uIAddressEdit.press('Tab');
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async Verify1002AdditionSuccessfulMessage(): Promise<void> {
        const text = await this.uIBottomLeftSideStatusBar.innerText();
        expect(text).toBe("1002 - Addition Successful");
    }

    async Close(): Promise<void> {
        await this.page.close();
    }

    async VerifyBusinessIDExitsAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(6040) Already BusinessID Exits");
        await this.popup.acknowledgeOk();
    }

    async EnterBusinessIDAs1000(): Promise<void> {
        await this.uIBusinessIDEdit.fill("1000");
        await this.uIBusinessIDEdit.press('Tab');
    }

    async SelectAtPhoneType1(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIPhoneType1Combobox, PoliceData.getAlarmModuleValue("PhoneType"));
        await this.uIPhoneType1Combobox.press('Tab');
    }

    async SelectAtPhoneType2(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIPhoneType2Combobox, PoliceData.getAlarmModuleValue("PhoneType"));
        await this.uIPhoneType2Combobox.press('Tab');
    }

    async EnterAtPhone1(): Promise<void> {
        await this.uIPhoneNumber1Edit.click();
        await this.uIPhoneNumber1Edit.fill(PoliceData.getAlarmModuleValue("Phone1"));
    }

    async EnterAtPhone2(): Promise<void> {
        await this.uIPhoneNumber2Edit.click();
        await this.uIPhoneNumber2Edit.fill(PoliceData.getAlarmModuleValue("Phone2"));
    }

    async EnterName(): Promise<void> {
        await this.uINameEdit.fill(RandomHelpers.randomNameGenerate());
    }

    async EnterBusinessID(): Promise<void> {
        await this.uIBusinessIDEdit.fill(RandomHelpers.enterRandomNumbers(3));
        await this.uIBusinessIDEdit.press('Tab');
    }

    async enterDefunctDate(): Promise<void> {
        await this.uIDefunctDate.clear();
        const text = await this.uIDefunctDate.inputValue();
        if (!text || text.trim() === '') {
            await this.uIDefunctDate.fill(DateHelpers.getCurrentDate());
        }
    }

}

export class FalseAlarmsPage {
    readonly page: Page; readonly popup:
        PopupHelpers; readonly grid: GridHelpers; readonly uIBatchProcessButton:
        Locator; readonly uISearchButton: Locator; readonly uIFromDateEdit: Locator;
    readonly uIToDateEdit: Locator; readonly uIFalseAlarmTable: Locator; readonly
    uIResetButton: Locator; readonly uIAccountNotFoundText: Locator; readonly
    uIYesButton: Locator; readonly uINoGoBackButton: Locator; readonly
    uIIncludeProcessedCheckbox: Locator; readonly uIRemovedOnlyCheckbox: Locator;
    readonly uIAlarmNotFoundPopupMsg: Locator; readonly uIAlarmNotFoundPopupYes:
        Locator; readonly uIAlarmNotFoundPopupNo: Locator; readonly uIPrintIcon:
        Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uIBatchProcessButton = page.locator('#cmdBatchProcess');
        this.uISearchButton = page.locator('#cmdSearch');
        this.uIFromDateEdit = page.locator('#dtcFromDate_KPIDttmCtrl');
        this.uIToDateEdit = page.locator('#adrAlarmAddress1_txtFrom');
        this.uIFalseAlarmTable = page.locator('#grdFalseAlarm');
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
        this.uIAccountNotFoundText = page.locator('#lblAccount');
        this.uIYesButton = page.locator('#btnYes');
        this.uINoGoBackButton = page.locator('#btnNo');
        this.uIIncludeProcessedCheckbox = page.locator('#chkIsProcess');
        this.uIRemovedOnlyCheckbox = page.locator('#chkIsRemoved');
        this.uIAlarmNotFoundPopupMsg = page.locator("//div[@id='pnlUpdate']//table//tbody//tr//td//span");
        this.uIAlarmNotFoundPopupYes = page.locator("//input[@id='btnYes']");
        this.uIAlarmNotFoundPopupNo = page.locator("//input[@id='btnNo']");
        this.uIPrintIcon = page.locator("//img[contains(@src,'print.gif')]");
    }

    async ClickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
        await this.page.waitForTimeout(1000);
    }

    async VerifyCallNoUsingUniqueRow(callYear: string, callNo: string): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIFalseAlarmTable, PoliceData.getAlarmModuleValue("Address"), "Call#");
        const text = await cell.innerText();
        expect(text).toBe(callYear + "." + callNo);
    }

    async VerifyAlarmNotFoundConfirmMessage(): Promise<void> {
        const text = await this.uIAccountNotFoundText.innerText();
        expect(text).toBe("Alarm not found. Do you want to create an alarm and then process?");
        await this.uIYesButton.click();
        await this.page.waitForTimeout(1000);
    }

    async SelectAtAddressInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIFalseAlarmTable, PoliceData.getAlarmModuleValue("Address"));
        await this.page.waitForTimeout(1000);
    }

    async SelectCallNoInGrid(callYear: string, callNo: string): Promise<void> {
        await this.grid.selectRowByCellText(this.uIFalseAlarmTable, callYear + "." + callNo);
        await this.page.waitForTimeout(1000);
    }

    async ClickAtCallNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIFalseAlarmTable, PoliceData.getAlarmModuleValue("CallNo"));
        await this.page.waitForTimeout(1000);
    }

    async ClickAtCallNoInGridByValue(callNo: string): Promise<void> {
        await this.grid.selectRowByCellText(this.uIFalseAlarmTable, callNo);
        await this.page.waitForTimeout(1000);
    }

    async ClickRemovedOnlyCheckbox(): Promise<void> {
        await this.uIRemovedOnlyCheckbox.click();
        await this.page.waitForTimeout(1000);
    }

    async ClickIncludeProcessedCheckbox(): Promise<void> {
        await this.uIIncludeProcessedCheckbox.click();
        await this.page.waitForTimeout(1000);
    }

    async VerifyAlarmUsingCallNo(alarmNo: string): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIFalseAlarmTable, PoliceData.getAlarmModuleValue("CallNo"), "Alarm#");
        const text = await cell.innerText();
        expect(text).toBe(alarmNo);
    }

    async VerifyReopenConfirmMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(9535)Do you want to reopen the false alarm that was removed?");
        await this.popup.confirmYes();
        await this.page.waitForTimeout(1000);
    }

    async VerifyAtCallNoUsindCADCFS(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIFalseAlarmTable, PoliceData.getAlarmModuleValue("CADCFS"), "Call#");
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAlarmModuleValue("CallNo"));
    }

    async VerifyStatusUsingCallNo(status: string): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIFalseAlarmTable, PoliceData.getAlarmModuleValue("CallNo"), "Status");
        const text = await cell.innerText();
        expect(text).toBe(status);
    }

    async VerifyStatusAsNotChargedUsingCallNo(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIFalseAlarmTable, PoliceData.getAlarmModuleValue("CallNo"), "Status");
        const text = await cell.innerText();
        expect(text).toBe("Not Charged");
    }

    async alarmNotFoundPopupClickYesToCreate(): Promise<void> {
        const text = await this.uIAlarmNotFoundPopupMsg.innerText();
        expect(text).toBe("Alarm not found. Do you want to create an alarm and then process?");
        await this.uIAlarmNotFoundPopupYes.click();
    }

    async clickDeleteCallNoInGridByValue(callNo: string): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uIFalseAlarmTable, callNo);
    }

    async clickDeleteCallNoInGrid(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uIFalseAlarmTable, PoliceData.getAlarmModuleValue("CallNo"));
    }

    async verifyFalseAlarmCannotBeDeletedAck(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(6040) This False Alarm cannot be deleted; It was Processed.");
        await this.popup.acknowledgeOk();
    }

    async selectRowByAtAlarmType(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIFalseAlarmTable, PoliceData.getAlarmModuleValue("AlarmType"));
    }

    async selectRowByAtActiveCallNo(callNo: string): Promise<void> {
        await this.grid.selectRowByCellText(this.uIFalseAlarmTable, callNo);
    }

    async verifyCallNoInGridByActiveData(callNo: string): Promise<void> {
        const gridTableColumnValues = await this.grid.getGridTableColumnValues(this.uIFalseAlarmTable, "Call#");
        expect(gridTableColumnValues).toContain(callNo);
    }

    async verifyAtCallNoInGrid(): Promise<void> {
        const row = await this.grid.getGridRowByCellInnerText(this.uIFalseAlarmTable, PoliceData.getAlarmModuleValue("CallNo"));
        const text = await row.innerText();
        expect(text).toContain(PoliceData.getAlarmModuleValue("CallNo"));
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async verifyDoYouWantDeleteConfirmPopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("Do you want to delete the False Alarm?");
        await this.popup.confirmYes();
    }

    async clickAlarmCallInfoIconByCallNo(callNo: string): Promise<void> {
        await this.page.locator(`//div[@id='grdFalseAlarm']//tr//td[text()='${callNo}']/..//td[contains(@class,'openItemsIcon')]`).click();
    }

    async verifyAlarmEntryScreenIsOpened(): Promise<void> {
        const pages = this.page.context().pages();
        const found = pages.some(p => p.url().includes('Alarm Entry') || p.url().includes('frmAlarms'));
        expect(found).toBeTruthy();
    }

    async verifyBatchProcessButtonIsDisabled(): Promise<void> {
        await expect(this.uIBatchProcessButton).toBeDisabled();
    }

    async verifyBatchProcessButtonIsEnabled(): Promise<void> {
        await expect(this.uIBatchProcessButton).toBeEnabled();
    }

    async selectGridRowCheckBoxByActiveCallNo(call: string): Promise<void> {
        await this.grid.selectRowCheckboxByCellText(this.uIFalseAlarmTable, call);
    }

    async selectGridRowCheckBoxByAtCallNo(i: number): Promise<void> {
        await this.grid.selectRowCheckboxByCellText(this.uIFalseAlarmTable, PoliceData.getAlarmModuleValue("callNo" + i));
    }

    async clickBatchProcess(): Promise<void> {
        await this.uIBatchProcessButton.click();
    }

    async doubleClickBatchProcess(): Promise<void> {
        await this.uIBatchProcessButton.dblclick();
    }

    async verifyBatchProcessIsCompleteAckMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("9528 - The Batch process is complete.");
        await this.popup.acknowledgeOk();
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async verifyDeleteConfirmationPopupNotAppears(): Promise<void> {
        const isVisible = await this.popup.modalBody.isVisible().catch(() => false);
        if (isVisible) {
            const text = await this.popup.modalBody.innerText();
            expect(text).not.toContain("Do you want to delete the False Alarm?");
        }
    }

}

export class AlarmYearEndReportPage {
    readonly page: Page; readonly popup:
        PopupHelpers; readonly grid: GridHelpers; readonly uIAlarmYearEndReportTable:
        Locator; readonly uIProceedYearEndButton: Locator; readonly
    uIPopupFiscalYearEndDateEdit: Locator; readonly
    uIPopupResetAlarmOccurencesCheckbox: Locator; readonly
    uIPopupCreateRegistrationFeeCheckbox: Locator; readonly
    uIPopupClearAllTheOpenInvoicesCheckbox: Locator; readonly
    uIPopupZeroBalanceAccountsCheckbox: Locator; readonly
    uIPopupViewReportOnlyButton: Locator; readonly uIPopupRunYearEndProcessButton:
        Locator; readonly uIPopupCancelButton: Locator; readonly uIPopupCommentEdit:
        Locator; readonly uIWarningMessageTextView: Locator; readonly uIOkButton:
        Locator; readonly uICancelButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uIAlarmYearEndReportTable = page.locator('#grdAlarmYearEnd');
        this.uIProceedYearEndButton = page.locator('#cmdYearEnd');
        this.uIPopupFiscalYearEndDateEdit = page.locator('#dtcReport_KPIDttmCtrl');
        this.uIPopupResetAlarmOccurencesCheckbox = page.locator('#chkIsReset');
        this.uIPopupCreateRegistrationFeeCheckbox = page.locator('#chkIsRegFee');
        this.uIPopupClearAllTheOpenInvoicesCheckbox = page.locator('#chkIsClearInvoice');
        this.uIPopupZeroBalanceAccountsCheckbox = page.locator('#chkIsZeroBalance');
        this.uIPopupViewReportOnlyButton = page.locator('#cmdView');
        this.uIPopupRunYearEndProcessButton = page.locator('#cmdRun');
        this.uIPopupCancelButton = page.locator('#cmdCancel');
        this.uIPopupCommentEdit = page.locator('#txtCmt');
        this.uIWarningMessageTextView = page.locator("//div[@class = 'modal-body']");
        this.uIOkButton = page.locator("//button[contains(text(),'Ok')]");
        this.uICancelButton = page.locator("//button[contains(text(),'Cancel')]");
    }

    async ClickProcessYearEndButton(): Promise<void> {
        await this.uIProceedYearEndButton.click();
        await this.page.waitForTimeout(1000);
    }

    async VerifyFutureDateAcknowledgeMessage(): Promise<void> {
        const isVisible = await this.popup.modalBody.isVisible().catch(() => false);
        if (isVisible) {
            await expect(this.popup.modalBody).toContainText("(6040) Year End Process should not open until Fiscal Date");
            await this.popup.acknowledgeOk();
        } else {
            await this.popup.acknowledgeOk();
        }
    }

    async VerifyFasialRearEndDateAsPreviousDate(): Promise<void> {
        const val = await this.uIPopupFiscalYearEndDateEdit.inputValue();
        expect(val).toBe(DateHelpers.getPreviousDateByMonth(5));
    }

    async ClickResetAlarmOccuercesCheckbox(): Promise<void> {
        await this.uIPopupResetAlarmOccurencesCheckbox.click();
        await this.page.waitForTimeout(1000);
    }

    async ClickCreateRegistrationFeeInvoiceCheckbox(): Promise<void> {
        await this.uIPopupCreateRegistrationFeeCheckbox.click();
    }

    async clickZeroBalanceAccountsCheckbox(): Promise<void> {
        await this.uIPopupZeroBalanceAccountsCheckbox.click();
        await this.page.waitForTimeout(1000);
    }

    async ClickClearAllOpenInvoicesCheckbox(): Promise<void> {
        await this.uIPopupClearAllTheOpenInvoicesCheckbox.click();
        await this.page.waitForTimeout(1000);
    }

    async EnterComments(): Promise<void> {
        await this.uIPopupCommentEdit.fill(RandomHelpers.randomString(10));
    }

    async VerifyResetAlarmOccurrencesConfirmMessage(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const warningMessage = await this.uIWarningMessageTextView.innerText();
        expect(warningMessage).toContain("Are you sure you want to reset alarm occurrences?");
        expect(warningMessage).toContain("Occurrences CANNOT be restored after completion of this option.");
        await this.uIOkButton.click();
    }

    async VerifyAlarmTransactionConfirmMessage(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const warningMessage = await this.uIWarningMessageTextView.innerText();
        expect(warningMessage).toContain("Are you sure you want to reset alarm Transaction?");
        expect(warningMessage).toContain("Transactions CANNOT be restored after completion of this option.");
        await this.uIOkButton.click();
    }

    async ClickRunYearEndProcessButton(): Promise<void> {
        await this.uIPopupRunYearEndProcessButton.click();
        await this.page.waitForTimeout(1000);
    }

    async VerifyRawDataPriorAcknowledgeMessage(): Promise<void> {
        const isVisible = await this.popup.modalBody.isVisible().catch(() => false);
        if (isVisible) {
            await expect(this.popup.modalBody).toContainText("(6040) Raw data prior to the fiscal year");
            await this.popup.acknowledgeOk();
        } else {
            await this.popup.acknowledgeOk();
        }
    }

    async VerifyYearEndDateAsCurrentDate(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIAlarmYearEndReportTable, "Year End Date", rowIndex);
        expect(text).toBe(DateHelpers.getCurrentDate());
    }

    async clickViewReportOnly(): Promise<void> {
        await this.uIPopupViewReportOnlyButton.click();
    }

}

export class AlarmCompanyEntryPage {
    readonly page: Page; readonly popup:
        PopupHelpers; readonly grid: GridHelpers; readonly uIJurisDropdown: Locator;
    readonly uIBusinessID: Locator; readonly uIName: Locator; readonly uIAddress:
        Locator; readonly uIPhone1Type: Locator; readonly uIPhone1Edit: Locator;
    readonly uIPhone2Type: Locator; readonly uIPhone2Edit: Locator; readonly
    uIEmailEdit: Locator; readonly uISave: Locator; readonly uINameType: Locator;
    readonly uINameTypeID: Locator; readonly uIstatusBar: Locator; readonly
    uIAddressInfoIcon: Locator; readonly uINameInfoIcon: Locator; readonly
    uICityEdit: Locator; readonly uIStateDropDown: Locator; readonly uIZipEdit:
        Locator; readonly uICSZEdit: Locator; readonly uIPhone1TypeDropdown: Locator;
    readonly uIPhone2TypeDropdown: Locator; readonly uIPhone1ExtContact: Locator;
    readonly uIPhone2ExtContact: Locator; readonly uIsaveNClose: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uIBusinessID = page.locator('#txtCMPCode');
        this.uIName = page.locator('#txtBusinessName');
        this.uIAddress = page.locator('#adrAlarmAddress1_txtFrom');
        this.uIPhone1Type = page.locator('#txtNumber_PhoneType_DropDown');
        this.uIPhone1Edit = page.locator('#txtNumber_PhoneNumber');
        this.uIPhone2Type = page.locator('#txtPhNumber_PhoneType_DropDown');
        this.uIPhone2Edit = page.locator('#txtPhNumber_PhoneNumber');
        this.uIEmailEdit = page.locator('#txtEmail');
        this.uISave = page.locator('#cmdSave');
        this.uINameType = page.locator('#txtBusinessName_NameType');
        this.uINameTypeID = page.locator('#txtBusinessName_NameTypeID');
        this.uIstatusBar = page.locator('.statusBar');
        this.uIAddressInfoIcon = page.locator('#adrAlarmAddress1_cmdIncOnAddr');
        this.uINameInfoIcon = page.locator('#imgNameInfo');
        this.uICityEdit = page.locator('#custHeaderCSZ_City');
        this.uIStateDropDown = page.locator('#custHeaderCSZ_State_DropDown');
        this.uIZipEdit = page.locator('#custHeaderCSZ_Zip');
        this.uICSZEdit = page.locator('#custHeaderCSZ_City');
        this.uIPhone1TypeDropdown = page.locator('#txtNumber_PhoneType_DropDown');
        this.uIPhone2TypeDropdown = page.locator('#txtPhNumber_PhoneType_DropDown');
        this.uIPhone1ExtContact = page.locator('#txtExtContact');
        this.uIPhone2ExtContact = page.locator('#txtPhExtContact');
        this.uIsaveNClose = page.locator('#cmdSaveNClose');
    }

    async selectJurisAsProPhoenix(): Promise<void> {
        await this.uIJurisDropdown.selectOption({ label: "PX - ProPhoenix" });
        await this.page.waitForTimeout(1000);
    }

    async selectJurisAsBrownCounty(): Promise<void> {
        await this.uIJurisDropdown.selectOption({ label: "BC - Brown County Police Department" });
        await this.uIJurisDropdown.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async enterAtBusinessID(): Promise<void> {
        await this.uIBusinessID.clear();
        await this.uIBusinessID.fill(PoliceData.getAlarmModuleValue("BusinessID"));
        await this.uIName.press('Tab');
    }

    async enterAtBusinessID1(): Promise<void> {
        await this.uIBusinessID.fill(PoliceData.getAlarmModuleValue("BusinessID1"));
        await this.uIName.press('Tab');
    }

    async enterAtName(): Promise<void> {
        await this.uIName.click();
        await this.uIName.fill(PoliceData.getAlarmModuleValue("Name"));
        await this.uIName.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async enterAtName1(): Promise<void> {
        await this.uIName.fill(PoliceData.getAlarmModuleValue("Name1"));
        await this.page.waitForTimeout(1000);
        await this.uIName.press('Tab');
    }

    async enterAtAddress(): Promise<void> {
        await this.uIAddress.fill(PoliceData.getAlarmModuleValue("Address"));
        await this.uIAddress.press('Tab');
    }

    async enterAtPhone1Type(): Promise<void> {
        await this.uIPhone1Type.fill(PoliceData.getAlarmModuleValue("Phone1"));
        await this.uIPhone1Type.press('Tab');
    }

    async enterAtPhone2Type(): Promise<void> {
        await this.uIPhone2Type.fill(PoliceData.getAlarmModuleValue("Phone2"));
        await this.uIPhone2Type.press('Tab');
    }

    async enterAtPhone1(): Promise<void> {
        await this.uIPhone1Edit.fill(PoliceData.getAlarmModuleValue("PhoneNo1"));
        await this.uIPhone1Edit.press('Tab');
    }

    async enterAtPhone2(): Promise<void> {
        await this.uIPhone2Edit.fill(PoliceData.getAlarmModuleValue("PhoneNo2"));
        await this.uIPhone2Edit.press('Tab');
    }

    async enterAtEmail(): Promise<void> {
        await this.uIEmailEdit.fill(PoliceData.getAlarmModuleValue("Email"));
    }

    async saveTheScreen(): Promise<void> {
        await this.uISave.click();
        await this.page.waitForLoadState('load');
        await this.popup.confirmYes();
    }

    async verifyAdditionSuccessful(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const text = await this.uIstatusBar.innerText();
        expect(text).toContain("1002 - Addition Successful");
    }

    async verifyNameTypeAsB(): Promise<void> {
        const idType = await this.uINameType.inputValue();
        expect(idType).toBe("B");
    }

    async closeTheScreen(): Promise<void> {
        await this.page.close();
    }

    async readNameTypeID(): Promise<string> {
        const idType = await this.uINameType.inputValue();
        const charAt = idType.charAt(0);
        const name = await this.uINameTypeID.inputValue();
        return charAt + "-" + name;
    }

    async verifyAtName(): Promise<void> {
        const text = await this.uIName.inputValue();
        expect(text).toBe(PoliceData.getAlarmModuleValue("Name"));
    }

    async getName(): Promise<string> {
        const name = await this.uIName.inputValue();
        expect(name).toBe(PoliceData.getAlarmModuleValue("Name"));
        return name;
    }

    async verifyPhone1(): Promise<void> {
        const phone1old = await this.uIPhone1Edit.inputValue();
        const phone1 = phone1old.replace(/[^0-9]/g, "");
        expect(phone1).toBe(PoliceData.getAlarmModuleValue("PhoneNo1"));
    }

    async verifyPhone2(): Promise<void> {
        const phone2old = await this.uIPhone2Edit.inputValue();
        const phone2 = phone2old.replace(/[^0-9]/g, "");
        expect(phone2).toBe(PoliceData.getAlarmModuleValue("PhoneNo2"));
    }

    async verifyAtAddress(): Promise<void> {
        const address = await this.uIAddress.inputValue();
        expect(address).toBe(PoliceData.getAlarmModuleValue("Address"));
    }

    async verifyEmail(): Promise<void> {
        const email = await this.uIEmailEdit.inputValue();
        expect(email).toBe(PoliceData.getAlarmModuleValue("Email"));
    }

    async ClickAddressInfoIcon(): Promise<void> {
        await this.uIAddressInfoIcon.click();
    }

    async clickNameInfoIcon(): Promise<void> {
        await this.uINameInfoIcon.click();
    }

    async verifyUpdateSuccessFullmessgae(): Promise<void> {
        const text = await this.uIstatusBar.innerText();
        expect(text).toContain("1003 - Update Successful");
    }

    async verifyNameIDIBubbleIsDisplayed(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await expect(this.uINameInfoIcon).toBeVisible();
    }

    async verifyNameIsSameFromNameEntry(name: string, name1: string): Promise<void> {
        expect(name).toBe(name1);
    }

    async getNameFromNameAlarmCompanyEntry(): Promise<string> {
        return await this.uIName.inputValue();
    }

    async verifyNameIDByIndex(jsonKeyIndex: number): Promise<void> {
        const nameID = await this.uINameTypeID.inputValue();
        expect(nameID).toBe(PoliceData.getAlarmModuleValue("NameID" + jsonKeyIndex));
    }

    async verifyNameID(getNameID: string): Promise<void> {
        const nameID = await this.uINameTypeID.inputValue();
        expect(nameID).toBe(getNameID);
    }

    async enterAtNameByIndex(jsonKeyIndex: number): Promise<void> {
        await this.uIName.fill(PoliceData.getAlarmModuleValue("Name" + jsonKeyIndex));
        await this.uIName.press('Tab');
    }

    async verifyAtNameByIndex(jsonKeyIndex: number): Promise<void> {
        const businessName = await this.uIName.inputValue();
        expect(businessName).toBe(PoliceData.getAlarmModuleValue("BusinessName" + jsonKeyIndex));
    }

    async verifyAtAddressByIndex(jsonKeyIndex: number): Promise<void> {
        const businessNameAddress = await this.uIAddress.inputValue();
        expect(businessNameAddress).toBe(PoliceData.getAlarmModuleValue("BusinessNameAddress" + jsonKeyIndex));
    }

    async VerifyGeoFlyMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(5100)The entered address is not found in the RMS Geo database. Click OK to add this as a new address, or click Cancel to correct the entered address.");
        await this.popup.confirmYes();
    }

    async verifyAtCSZ(): Promise<void> {
        const city = await this.uICityEdit.inputValue();
        expect(city).toBe(PoliceData.getAlarmModuleValue("City"));
    }

    async verifyAtZIP(): Promise<void> {
        const zip = await this.uIZipEdit.inputValue();
        expect(zip).toBe(PoliceData.getAlarmModuleValue("ZIP"));
    }

    async verifyAtState(): Promise<void> {
        const state = await this.uIStateDropDown.inputValue();
        expect(state).toBe(PoliceData.getAlarmModuleValue("State"));
    }

    async enterAtBusinessIDByIndex(jsonKeyIndex: number): Promise<void> {
        await this.uIBusinessID.fill(PoliceData.getAlarmModuleValue("BusinessID" + jsonKeyIndex));
        await this.uIName.press('Tab');
    }

    async verifyPhone1IsDisabled(): Promise<void> {
        await expect(this.uIPhone1Edit).toBeDisabled();
        await expect(this.uIPhone1Type).toBeDisabled();
        const phoneNumExtension = await this.uIPhone1ExtContact.getAttribute("class") || '';
        expect(phoneNumExtension).toContain("textboxInactive");
    }

    async verifyPhone2IsDisabled(): Promise<void> {
        await expect(this.uIPhone2Edit).toBeDisabled();
        await expect(this.uIPhone2Type).toBeDisabled();
        const phoneNumExtension = await this.uIPhone2ExtContact.getAttribute("class") || '';
        expect(phoneNumExtension).toContain("textboxInactive");
    }

    async enterAtCSZ(): Promise<void> {
        await this.uICSZEdit.fill(PoliceData.getAlarmModuleValue("CSZ"));
        await this.uICSZEdit.press('Tab');
    }

    async selectAtPhone1Type(): Promise<void> {
        await this.uIPhone1TypeDropdown.selectOption({ label: PoliceData.getAlarmModuleValue("Phone1Type") });
    }

    async selectAtPhone2Type(): Promise<void> {
        await this.uIPhone2TypeDropdown.selectOption({ label: PoliceData.getAlarmModuleValue("Phone2Type") });
    }

    async saveNClose(): Promise<void> {
        await this.uIsaveNClose.click();
        await this.popup.confirmYes();
    }

    async getNameID(): Promise<string> {
        return await this.uINameTypeID.inputValue();
    }

    async verify6040AlreadyBusinessIDExistsAcknowledgePopUp(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(6040) Already BusinessID Exits");
        await this.popup.acknowledgeOk();
    }

    async clickSave(): Promise<void> {
        await this.uISave.click();
    }

    async verify1018AcknowledgePopUp(): Promise<void> {
        await expect(this.popup.modalBody).toContainText("(1018) Required Entries are Missing");
        await this.popup.acknowledgeOk();
    }

}

export class AlarmsPage {
    readonly page: Page; private browserHelpers:
        BrowserHelpers;

    constructor(page: Page) {
        this.page = page;
        this.browserHelpers = new BrowserHelpers(page);
    }

    async Reset(): Promise<void> {
        // No-op in Playwright
    }

    async switchToAlarmAccountSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl("Alarm Account Search");
    }

    async switchToAccountEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle("Account Entry");
    }

    async switchToAlarmsEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle("Alarm Entry");
    }

    async switchToAlarmsEntryScreenTab(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.browserHelpers.switchToPageByUrl("Alarm Entry");
    }

    async switchToAlarmsSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl("Alarms/frmAlarmsSrch");
    }

    async switchToAlarmsCFSEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle("Alarm CFS Entry");
    }

    async switchToAlarmType(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl("Static/frmAlarmsCFSParameterSrch");
    }

    async switchToAlarmCompanySearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl("Static/frmALCMPSrch");
    }

    async switchToNameEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle("Name Entry");
    }

    async switchToFalseAlarms(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl("False Alarms");
    }

    async switchToFalseAlarmYearEndReport(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl("Alarms/frmYearEndRpt");
    }

    async switchToAlarmCompanyEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle("Alarm Company Entry");
    }

    async switchToAlarmsCFS(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl("Alarm CFS");
    }

}
