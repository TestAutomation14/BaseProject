
import { Page, Locator, expect } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { AcknowledgePage, ConfirmPage, PopupPage } from '../popup.page';
import { BaseData } from '../../data/base-data';
import { GridHelpers } from '../../helpers/grid-helpers';
import { ElementHelpers } from '../../helpers/element-helpers';
import { PopupHelpers } from '../../helpers/popup-helpers';
import { DateHelpers, RandomHelpers } from '../../helpers';

export class PropertyEditEntryPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uICaseInfoButton: Locator;
    readonly uIAttachPropertyReportButton: Locator;
    readonly uIAddNewPropertyReportButton: Locator;
    readonly uIAddNewPropertyReportLinkLabel: Locator;
    readonly uIResetButton: Locator;
    readonly uIResetLinkLabel: Locator;
    readonly uIPropertyEditEntryTable: Locator;
    readonly uIReportedDateEdit: Locator;
    readonly uIReportedTimeEdit: Locator;
    readonly uISelectPropertyButton: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uICaseInfoIcon: Locator;
    readonly uIPropertyNotesButton: Locator;
    readonly uICreateNewPullRequestLabel: Locator;
    readonly uICreateNewPullRequestLinkButton: Locator;
    readonly uILocationEdit: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIExcelIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uICaseYearEdit = page.locator('#nbrCaseNo_Year');
        this.uICaseNumberEdit = page.locator('#nbrCaseNo_Number');
        this.uICaseInfoButton = page.locator('#nbrCaseNo_imgBtn');
        this.uIAttachPropertyReportButton = page.locator("//span[contains(text(), 'Attach Property Report')]");
        this.uIAddNewPropertyReportButton = page.locator("//span[contains(text(), 'Add New Property Report')]");
        this.uIAddNewPropertyReportLinkLabel = page.locator("//li[@title='Add New Property']");
        this.uIResetButton = page.locator("//span[contains(text(), 'Reset')]");
        this.uIResetLinkLabel = page.locator("//li[@title='Reset']");
        this.uIPropertyEditEntryTable = page.locator('#grdPropEntry');
        this.uIReportedDateEdit = page.locator('#dttRptDttm_Date_KPIDttmCtrl');
        this.uIReportedTimeEdit = page.locator("//table[@id = 'dttRptDttm_Time']//input");
        this.uISelectPropertyButton = page.locator("//span[contains(text(), 'Select Property')]");
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uICaseInfoIcon = page.locator("//input[contains(@src,'debug.gif')]");
        this.uIPropertyNotesButton = page.locator('#cmdPropNotes');
        this.uICreateNewPullRequestLabel = page.locator("//li[@title='Create new Pull Request']");
        this.uICreateNewPullRequestLinkButton = page.locator("//span[@title='Create new Pull Request']");
        this.uILocationEdit = page.locator('#txtLocation');
        this.uIPrintIcon = page.locator("//li[@title='Print']");
        this.uIExcelIcon = page.locator("//li[@title='Export to Excel']");
    }

    async enterAtCaseNumberAndTab(): Promise<void> {
        const caseNo = BaseData.getTestValue("CaseNo");
        await this.uICaseYearEdit.click();
        await this.uICaseYearEdit.fill(caseNo.substring(0, 2));
        await this.uICaseNumberEdit.fill(caseNo.substring(3));
        await this.uICaseNumberEdit.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async ClickCaseInfoIcon(): Promise<void> {
        await this.uICaseInfoButton.click();
    }

    async clickAddNewPropertyReport(): Promise<void> {
        await this.uIAddNewPropertyReportButton.click();
    }

    async ClickAttachPropertyReport(): Promise<void> {
        await this.uIAttachPropertyReportButton.click();
    }

    async SelectRowFromGrid(): Promise<void> {
        await this.grid.selectRandomRow(this.uIPropertyEditEntryTable);
    }

    async SelectRowByAtPropertyNo(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIPropertyEditEntryTable, BaseData.getTestValue("PropertyNo"));
    }

    async SelectRowByAtCaseNo(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIPropertyEditEntryTable, BaseData.getTestValue("CaseNo"));
    }

    async EnterAtCaseNumberDetails(): Promise<void> {
        const caseId = BaseData.getTestValue("CaseID");
        await this.uICaseYearEdit.fill(caseId.substring(0, 2));
        await this.uICaseNumberEdit.fill(caseId.substring(3));
        await this.uICaseNumberEdit.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async ClickCheckBoxfromGrid(): Promise<void> {
        await this.grid.selectRowCheckboxByCellText(this.uIPropertyEditEntryTable, BaseData.getTestValue("Reason"));
    }

    async SelectGridCheckboxByAtPropertyNo(): Promise<void> {
        await this.grid.selectRowCheckboxByCellText(this.uIPropertyEditEntryTable, BaseData.getTestValue("PropertyNo"));
    }

    async ClickRecoverdProperty(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIPropertyEditEntryTable, "Recovered");
    }

    async VerifyPropertyIsNullInTheGrid(): Promise<void> {
        const rowCount = await this.grid.getRowCount(this.uIPropertyEditEntryTable);
        expect(rowCount).toBe(0);
    }

    async closeTheScreen(): Promise<void> {
        await this.page.close();
    }

    async VerifyAtReason(rowIndex: number): Promise<void> {
        const cellText = await this.grid.getGridCellInnerText(this.uIPropertyEditEntryTable, "Reason", rowIndex);
        expect(cellText).toBe(BaseData.getTestValue("Reason"));
    }

    async VerifyAtReasonByAtPropertyNo(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIPropertyEditEntryTable, BaseData.getTestValue("PropertyNo"), "Reason");
        const cellText = await cell.innerText();
        expect(cellText).toBe(BaseData.getTestValue("Reason"));
    }

    async VerifyStolenAppearsInGrayColor(): Promise<void> {
        const row = await this.grid.getRowByCellText(this.uIPropertyEditEntryTable, "Stolen");
        const classAttr = await row.getAttribute('class') || '';
        expect(classAttr).toContain('gridrowclrGray');
    }

    async VerifyRecoveredAndAppearsInGrayColor(): Promise<void> {
        const row = await this.grid.getRowByCellText(this.uIPropertyEditEntryTable, "Recovered");
        const classAttr = await row.getAttribute('class') || '';
        expect(classAttr).toContain('gridrowclrGray');
    }

    async VerifyConfirmSelectedRowMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(9065) Use selected row Case #?');
        await this.popup.confirmYesButton.click();
    }

    async ClickReset(): Promise<void> {
        await this.uIResetButton.click();
        await this.page.waitForTimeout(1000);
    }

    async ClickSelectProperty(): Promise<void> {
        await this.uISelectPropertyButton.click();
        await this.page.waitForLoadState('load');
    }

    async readPropertyNo(): Promise<string> {
        const cellText = await this.grid.getGridCellInnerText(this.uIPropertyEditEntryTable, "Property#", 0);
        return cellText;
    }

    async selectAtJuris(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIJurisDropdown, BaseData.getTestValue("Juris"));
    }

    async clickPropertyNotesButton(): Promise<void> {
        await this.uIPropertyNotesButton.click();
    }

    async clickCreateNewPullRequestLinkButton(): Promise<void> {
        await this.uICreateNewPullRequestLinkButton.click();
    }
}

export class PropertyEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIReportDetailsButton: Locator;
    readonly uICurrentStatusLabel: Locator;
    readonly uICaseInformationButton: Locator;
    readonly uIPropertyYearEdit: Locator;
    readonly uIPropertyNumberEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIDeleteButton: Locator;
    readonly uISubmitButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uIMainTab: Locator;
    readonly uIRecoveredTab: Locator;
    readonly uIAttachmentTab: Locator;
    readonly uICommentsTab: Locator;
    readonly uIUCRNIBRSTab: Locator;
    readonly uINamesTab: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uIOfficerCodeEdit: Locator;
    readonly uIReportedDateEdit: Locator;
    readonly uIReportedTimeEdit: Locator;
    readonly uIHistoryTab: Locator;
    readonly uICopyButton: Locator;
    readonly uIPropertySequence: Locator;
    readonly uIRecoverdTabSpan: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uIPropertyBblIcon: Locator;
    readonly uICustomizeIcon: Locator;
    readonly uIFieldNamesForPDFFormText: Locator;
    readonly uINarrativeEdit: Locator;
    readonly uIOfficerPFDescriptionEdit: Locator;
    readonly uIReportedLocationEdit: Locator;
    readonly uITotalValueEdit: Locator;
    readonly uIRecoveredValueEdit: Locator;
    readonly uIPropertyNoSequenceEdit: Locator;
    readonly uIEnterMoreNarrativeIcon: Locator;
    readonly uIPlayVideoIcon: Locator;
    readonly uIPreviousSequenceButton: Locator;
    readonly uINextSequenceButton: Locator;
    readonly uIOfficerInfoIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIReportDetailsButton = page.locator('#cmdReportMaster');
        this.uICurrentStatusLabel = page.locator('#lblRstStatus');
        this.uICaseInformationButton = page.locator('#nbrCaseNo_imgBtn');
        this.uIPropertyYearEdit = page.locator('#nbrPropNo_Year');
        this.uIPropertyNumberEdit = page.locator('#nbrPropNo_Number');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIDeleteButton = page.locator('#cmdDelete');
        this.uISubmitButton = page.locator('#cmdSubmit');
        this.uIAddNewButton = page.locator('#cmdAdd');
        this.uIDescriptionEdit = page.locator('#txtDescription');
        this.uIMainTab = page.locator("//span[contains(text(),'Main')]");
        this.uIRecoveredTab = page.locator("//span[contains(text(),'Recovered')]");
        this.uIAttachmentTab = page.locator("//span[contains(text(),'Attachment')]");
        this.uICommentsTab = page.locator("//span[contains(text(),'Comments')]");
        this.uIUCRNIBRSTab = page.locator("//span[contains(text(),'UCR/NIBRS')]");
        this.uINamesTab = page.locator("//span[text()='Names']");
        this.uICaseYearEdit = page.locator('#nbrCaseNo_Year');
        this.uICaseNumberEdit = page.locator('#nbrCaseNo_Number');
        this.uIOfficerCodeEdit = page.locator('#lupOffPFID_CodeValue');
        this.uIReportedDateEdit = page.locator('#dttRecDttm_Date_KPIDttmCtrl');
        this.uIReportedTimeEdit = page.locator("//table[@id = 'dttRecDttm_Time']//input");
        this.uIHistoryTab = page.locator("//span[contains(text(),'History')]");
        this.uICopyButton = page.locator('#cmdCopy');
        this.uIPropertySequence = page.locator('#navMsg_CodeDescription');
        this.uIRecoverdTabSpan = page.locator("//span[text()='Recovered']");
        this.uILeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIPropertyBblIcon = page.locator('#imgDetail');
        this.uICustomizeIcon = page.locator("//img[@title = 'Customize']");
        this.uIFieldNamesForPDFFormText = page.locator("//span[contains(text(),'Field Names for PDF')]");
        this.uINarrativeEdit = page.locator('#txtNarrative');
        this.uIOfficerPFDescriptionEdit = page.locator('#lupOffPFID_CodeDescription');
        this.uIReportedLocationEdit = page.locator('#txtLocation');
        this.uITotalValueEdit = page.locator('#txtTotamt');
        this.uIRecoveredValueEdit = page.locator('#txtRecamt');
        this.uIPropertyNoSequenceEdit = page.locator('#txtSeqNo');
        this.uIEnterMoreNarrativeIcon = page.locator('#imgAddNarrative');
        this.uIPlayVideoIcon = page.locator('#imgVideo');
        this.uIPreviousSequenceButton = page.locator('#navMsg_Prev');
        this.uINextSequenceButton = page.locator('#navMsg_Next');
        this.uIOfficerInfoIcon = page.locator('#lupOffPFID_cmdIncOnAddr');
    }

    async ClickCaseInfoIcon(): Promise<void> {
        await this.uICaseInformationButton.click();
        await this.page.waitForTimeout(2000);
    }

    async clickPropertyInfoIcon(): Promise<void> {
        await this.uIPropertyBblIcon.click();
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async SaveTheScreen(): Promise<void> {
        await this.elementHelpers.saveWithAccept(this.uISaveButton);
    }

    async SaveNClose(): Promise<void> {
        await this.elementHelpers.saveAndCloseWithAccept(this.uISaveAndCloseButton);
    }

    async ClickDeleteButton(): Promise<void> {
        await this.uIDeleteButton.click();
    }

    async clickMainTab(): Promise<void> {
        await this.uIMainTab.click();
        await this.page.waitForLoadState('load');
    }

    async clickRecoveredTab(): Promise<void> {
        await this.uIRecoveredTab.click();
        await this.page.waitForLoadState('load');
    }

    async ClickAttachmentTab(): Promise<void> {
        await this.uIAttachmentTab.click();
    }

    async switchtoAttachmentTab(): Promise<void> {
        await this.uIAttachmentTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmTxtAttachMgrEx.aspx?');
    }

    async clickReportDetailsButton(): Promise<void> {
        await this.uIReportDetailsButton.click();
        await this.page.waitForLoadState('load');
    }

    async ClickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async ClickResetButton(): Promise<void> {
        await this.uIResetButton.click();
        await this.page.waitForTimeout(2000);
    }

    async ClickSubmitButton(): Promise<void> {
        await this.uISubmitButton.click();
        await this.page.waitForTimeout(1000);
    }

    async enterAtCaseNo(): Promise<void> {
        const caseNo = BaseData.getTestValue("CaseNo");
        await this.uICaseYearEdit.fill(caseNo.substring(0, 2));
        await this.uICaseNumberEdit.fill(caseNo.substring(3));
        await this.uICaseNumberEdit.press('Tab');
    }

    async VerifyConfirmSubmitMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(9062) The report cannot be updated after submission. Do you want to proceed?');
        await this.popup.confirmYesButton.click();
    }

    async closeTheScreen(): Promise<void> {
        await this.page.close();
    }

    async ClickHistoryTab(): Promise<void> {
        await this.uIHistoryTab.click();
        await this.page.waitForLoadState('load');
        new BrowserHelpers(this.page).switchToFrame('frmPropHist');
    }

    async ClickCopyButton(): Promise<void> {
        await this.uICopyButton.click();
    }

    async readPropertyNo(): Promise<string> {
        const year = await this.uIPropertyYearEdit.inputValue();
        const num = await this.uIPropertyNumberEdit.inputValue();
        const sequence = await this.uIPropertySequence.inputValue();
        const sno = sequence.substring(sequence.lastIndexOf('/') + 1);
        return `${year}-${num}-${sno}`;
    }

    async VerifyAdditionSuccessfulMessage(): Promise<void> {
        const message = await this.uILeftSideStatusBar.innerText();
        expect(message).toBe('1002 - Addition Successful');
    }

    async VerifyUpdateSuccessfulMessage(): Promise<void> {
        const message = await this.uILeftSideStatusBar.innerText();
        expect(message).toBe('1003 - Update Successful');
    }

    async clickNamesTab(): Promise<void> {
        await this.uINamesTab.click();
        await this.page.waitForLoadState('load');
    }

    async switchToNamesTab(): Promise<void> {
        await this.uINamesTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmCBENames.aspx?');
    }

    async enterAtNarrative(): Promise<void> {
        await this.uINarrativeEdit.fill(BaseData.getTestValue("Narrative"));
    }

    async clickPreviousSequenceButton(): Promise<void> {
        await this.uIPreviousSequenceButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickNextSequenceButton(): Promise<void> {
        await this.uINextSequenceButton.click();
        await this.page.waitForTimeout(1000);
    }
}

export class PropertyEntryMainTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIReasonComboBox: Locator;
    readonly uIChargeorOffenseComboBox: Locator;
    readonly uIPropertyComboBox: Locator;
    readonly uIPropertyTypeEdit: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uIPlateNumberEdit: Locator;
    readonly uIQuantityEdit: Locator;
    readonly uIValueEdit: Locator;
    readonly uISerialEdit: Locator;
    readonly uISerialClothingEdit: Locator;
    readonly uIGunTypeComboBox: Locator;
    readonly uIGunMakeEdit: Locator;
    readonly uIGunMakeDesEdit: Locator;
    readonly uIGunMakeSearchButton: Locator;
    readonly uICaliberEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uINameInfoImageButton: Locator;
    readonly uIAddressEdit: Locator;
    readonly uIAddressVerifyCheckbox: Locator;
    readonly uIVehiclePlateStateComboBox: Locator;
    readonly uIClearNameImageButton: Locator;
    readonly uIRegistrationNumEdit: Locator;
    readonly uIRegistrationStateEdit: Locator;
    readonly uIDrugTypeComboBox: Locator;
    readonly uIDrugQuantityEdit: Locator;
    readonly uIMeasurementComboBox: Locator;
    readonly uIRelatedPropertyNoYearEdit: Locator;
    readonly uIRelatedPropertyNumberEdit: Locator;
    readonly uIRelatedPropertyItemNoEdit: Locator;
    readonly uIRelatedPropertyInfoIconButton: Locator;
    readonly uIVehiclePlateNoEdit: Locator;
    readonly uIVehicleSearchLookupButton: Locator;
    readonly uISecurityTypeComboBox: Locator;
    readonly uIPCLookup: Locator;
    readonly uIPropertyTypeTextView: Locator;
    readonly uIOwnerSearchButton: Locator;
    readonly uIDrugQuantityLable: Locator;
    readonly uIMeasurementLabel: Locator;
    readonly uICFSCodeComboBox: Locator;
    readonly uIChargeOrOffenseComboBox: Locator;
    readonly uIPlateOnlyCheckbox: Locator;
    readonly uIModelNoEdit: Locator;
    readonly uIOwnerUnknownCheckbox: Locator;
    readonly uIMiddleNameEdit: Locator;
    readonly uIRecoverOtherAgencyCheckBox: Locator;
    readonly uIMandatorySerialLabel: Locator;
    readonly uISerialLabel: Locator;
    readonly uIVinNoEdit: Locator;
    readonly uIYearEdit: Locator;
    readonly uIMakeEdit: Locator;
    readonly uIModelEdit: Locator;
    readonly uIDescriptionText: Locator;
    readonly uIOwnerNameTypeEdit: Locator;
    readonly uIOwnerNameIDEdit: Locator;
    readonly uIColor1Edit: Locator;
    readonly uIColor2Edit: Locator;
    readonly uIPCDescriptionEdit: Locator;
    readonly uICategoryCodeEdit: Locator;
    readonly uIExpirationDateEdit: Locator;
    readonly uIVehicleEdit: Locator;
    readonly uICityEdit: Locator;
    readonly uIStateDropdown: Locator;
    readonly uIZipCodeEdit: Locator;
    readonly uINCICEdit: Locator;
    readonly uIOANEdit: Locator;
    readonly uIPCLookupIcon: Locator;
    readonly uIVinNoLabel: Locator;
    readonly uIVehicleModelLabel: Locator;
    readonly uIMaterialEdit: Locator;
    readonly uIVehicleLabel: Locator;
    readonly uIPlateLabel: Locator;
    readonly uIBrandEdit: Locator;
    readonly uIColor1Dropdown: Locator;
    readonly uIColor2Dropdown: Locator;
    readonly uIRelatedPropertyLookupIcon: Locator;
    readonly uIDenominationEdit: Locator;
    readonly uIIssuerEdit: Locator;
    readonly uISecDateEdit: Locator;
    readonly uIStateEdit: Locator;
    readonly uICaliberGaugeTextEdit: Locator;
    readonly uITraceCheckbox: Locator;
    readonly uIGunModelEdit: Locator;
    readonly uICapacityEdit: Locator;
    readonly uIGunMakeLabel: Locator;
    readonly uIGunModelLabel: Locator;
    readonly uICaliberGaugeLabel: Locator;
    readonly uIGunTypeLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIReasonComboBox = page.locator('#tabProperty_tmpl0_UsrProperty1_cddReason_DropDown');
        this.uIChargeorOffenseComboBox = page.locator('#tabProperty_tmpl0_UsrProperty1_cddCFSCode');
        this.uIPropertyComboBox = page.locator('#tabProperty_tmpl0_UsrProperty1_cddPropCat_DropDown');
        this.uIPropertyTypeEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_TxtPropType');
        this.uIDescriptionEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtDescription');
        this.uIPlateNumberEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtPlateNbr_PlateNumber');
        this.uIQuantityEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtQuantity');
        this.uIValueEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtValue');
        this.uISerialEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtSerialNbr');
        this.uISerialClothingEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtSerial');
        this.uIGunTypeComboBox = page.locator('#tabProperty_tmpl0_UsrProperty1_cddGunType_DropDown');
        this.uIGunMakeEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_lupGunMake_CodeValue');
        this.uIGunMakeDesEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_lupGunMake_CodeDescription');
        this.uIGunMakeSearchButton = page.locator('#tabProperty_tmpl0_UsrProperty1_lupGunMake_imgBtn');
        this.uICaliberEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtGunCaliber');
        this.uILastNameEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_lupNameRec_LastName');
        this.uIFirstNameEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_lupNameRec_FirstName');
        this.uINameInfoImageButton = page.locator('#tabProperty_tmpl0_UsrProperty1_lupNameRec_imgSrch');
        this.uIAddressEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_adrMainAddress_txtFrom');
        this.uIAddressVerifyCheckbox = page.locator('#tabProperty_tmpl0_UsrProperty1_adrMainAddress_chkVerify');
        this.uIVehiclePlateStateComboBox = page.locator('#tabProperty_tmpl0_UsrProperty1_txtPlateNbr_KPIState');
        this.uIClearNameImageButton = page.locator('#tabProperty_tmpl0_UsrProperty1_imgClearAddr');
        this.uIRegistrationNumEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtPlateNbr_PlateNumber');
        this.uIRegistrationStateEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtPlateNbr_KPIState');
        this.uIDrugTypeComboBox = page.locator('#tabProperty_tmpl0_UsrProperty1_cddDrugType_DropDown');
        this.uIDrugQuantityEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtDrugQty');
        this.uIMeasurementComboBox = page.locator('#tabProperty_tmpl0_UsrProperty1_cddDrugMeasure_DropDown');
        this.uIRelatedPropertyNoYearEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_nbrRelPropNo_Year');
        this.uIRelatedPropertyNumberEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_nbrRelPropNo_Number');
        this.uIRelatedPropertyItemNoEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtRelItemNo');
        this.uIRelatedPropertyInfoIconButton = page.locator('#tabProperty_tmpl0_UsrProperty1_imgRelated');
        this.uIVehiclePlateNoEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtPlateNbr_PlateNumber');
        this.uIVehicleSearchLookupButton = page.locator('#tabProperty_tmpl0_UsrProperty1_txtPlateNbr_imgBtn');
        this.uISecurityTypeComboBox = page.locator('#tabProperty_tmpl0_UsrProperty1_cddSecType_DropDown');
        this.uIPCLookup = page.locator('#tabProperty_tmpl0_UsrProperty1_lupPropCode_CodeValue');
        this.uIPropertyTypeTextView = page.locator('#tabProperty_tmpl0_UsrProperty1_TxtPropType');
        this.uIOwnerSearchButton = page.locator('#tabProperty_tmpl0_UsrProperty1_lupNameRec_imgSrch');
        this.uIDrugQuantityLable = page.locator('#tabProperty_tmpl0_UsrProperty1_lblDrugQty');
        this.uIMeasurementLabel = page.locator('#tabProperty_tmpl0_UsrProperty1_Kpilabel22');
        this.uICFSCodeComboBox = page.locator('#tabProperty_tmpl0_UsrProperty1_cddCFSCode');
        this.uIChargeOrOffenseComboBox = page.locator('#tabProperty_tmpl0_UsrProperty1_cddNibrs');
        this.uIPlateOnlyCheckbox = page.locator('#tabProperty_tmpl0_UsrProperty1_chkIsPlateOnly');
        this.uIModelNoEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtmodel');
        this.uIOwnerUnknownCheckbox = page.locator('#tabProperty_tmpl0_UsrProperty1_ChkIsOwner');
        this.uIMiddleNameEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_lupNameRec_MiddleName');
        this.uIRecoverOtherAgencyCheckBox = page.locator('#tabProperty_tmpl0_UsrProperty1_chkIsRecForOther');
        this.uIMandatorySerialLabel = page.locator('#tabProperty_tmpl0_UsrProperty1_Kpilabel14');
        this.uISerialLabel = page.locator('#tabProperty_tmpl0_UsrProperty1_lblModel');
        this.uIVinNoEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtVinNbr');
        this.uIYearEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtVinYear');
        this.uIMakeEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtVehMake');
        this.uIModelEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtVehModel');
        this.uIDescriptionText = page.locator('#tabProperty_tmpl0_UsrProperty1_lblDesc');
        this.uIOwnerNameTypeEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_lupNameRec_NameType');
        this.uIOwnerNameIDEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_lupNameRec_NameTypeID');
        this.uIColor1Edit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtVincolor1');
        this.uIColor2Edit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtVincolor2');
        this.uIPCDescriptionEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_lupPropCode_CodeDescription');
        this.uICategoryCodeEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtPropCat');
        this.uIExpirationDateEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_dttExpDttm_KPIDttmCtrl');
        this.uIVehicleEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtVeh');
        this.uICityEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_custHeaderCSZ_City');
        this.uIStateDropdown = page.locator('#tabProperty_tmpl0_UsrProperty1_custHeaderCSZ_State_DropDown');
        this.uIZipCodeEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_custHeaderCSZ_Zip');
        this.uINCICEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtNIC');
        this.uIOANEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtOAN');
        this.uIPCLookupIcon = page.locator('#tabProperty_tmpl0_UsrProperty1_lupPropCode_imgBtn');
        this.uIVinNoLabel = page.locator('#tabProperty_tmpl0_UsrProperty1_lblVinNo');
        this.uIVehicleModelLabel = page.locator('#tabProperty_tmpl0_UsrProperty1_lblVehModel');
        this.uIMaterialEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtMaterial');
        this.uIVehicleLabel = page.locator('#tabProperty_tmpl0_UsrProperty1_lblVehicle');
        this.uIPlateLabel = page.locator('#tabProperty_tmpl0_UsrProperty1_lblPlateNbr');
        this.uIBrandEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtMake');
        this.uIColor1Dropdown = page.locator('#tabProperty_tmpl0_UsrProperty1_cddColor1_DropDown');
        this.uIColor2Dropdown = page.locator('#tabProperty_tmpl0_UsrProperty1_cddColor2_DropDown');
        this.uIRelatedPropertyLookupIcon = page.locator('#tabProperty_tmpl0_UsrProperty1_imgRelatedSearch');
        this.uIDenominationEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtSecDenom');
        this.uIIssuerEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtSecIssuer');
        this.uISecDateEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_dttSecDttm_KPIDttmCtrl');
        this.uIStateEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtLicense');
        this.uICaliberGaugeTextEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtCaliber');
        this.uITraceCheckbox = page.locator('#tabProperty_tmpl0_UsrProperty1_chkIsTrace');
        this.uIGunModelEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtGunModel');
        this.uICapacityEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtCapacity');
        this.uIGunMakeLabel = page.locator('#tabProperty_tmpl0_UsrProperty1_lblGunMake');
        this.uIGunModelLabel = page.locator('#tabProperty_tmpl0_UsrProperty1_lblGunModel');
        this.uICaliberGaugeLabel = page.locator('#tabProperty_tmpl0_UsrProperty1_Kpilabel16');
        this.uIGunTypeLabel = page.locator('#tabProperty_tmpl0_UsrProperty1_Kpilabel13');
    }

    async SelectAtChargeOrOffense(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIChargeOrOffenseComboBox, BaseData.getTestValue("ChargeOrOffense"));
        await this.uIChargeOrOffenseComboBox.press('Tab');
    }

    async SelectAtPropertyCFS(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uICFSCodeComboBox, BaseData.getTestValue("CFSCode"));
    }

    async selectAtReason(): Promise<void> {
        await this.uIReasonComboBox.fill(BaseData.getTestValue("Reason"));
        await this.uIReasonComboBox.press('Tab');
    }

    async selectAtProperty(): Promise<void> {
        await this.uIPropertyComboBox.fill(BaseData.getTestValue("Property"));
        await this.uIPropertyComboBox.press('Tab');
    }

    async enterDescription(): Promise<void> {
        await this.uIDescriptionEdit.fill(RandomHelpers.manualPlusRandomString("found property in the incident place ", 7));
        await this.uIDescriptionEdit.press('Tab');
    }

    async enterAtSerial(): Promise<void> {
        await this.uISerialEdit.click();
        await this.uISerialEdit.fill(BaseData.getTestValue("SerialNo"));
        await this.uISerialEdit.press('Tab');
    }

    async enterValue(): Promise<void> {
        await this.uIValueEdit.click();
        await this.uIValueEdit.fill(RandomHelpers.randomNumberString(3));
        await this.uIValueEdit.press('Tab');
    }

    async enterAtValue(): Promise<void> {
        await this.uIValueEdit.click();
        await this.uIValueEdit.fill(BaseData.getTestValue("Value"));
    }

    async enterAtQuantity(): Promise<void> {
        await this.uIQuantityEdit.clear();
        await this.uIQuantityEdit.fill(BaseData.getTestValue("Quantity"));
        await this.uIQuantityEdit.press('Tab');
    }

    async SelectAtDrugType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIDrugTypeComboBox, BaseData.getTestValue("DrugType"));
        await this.uIDrugTypeComboBox.press('Tab');
    }

    async EnterAtDrugQuantity(): Promise<void> {
        await this.uIDrugQuantityEdit.click();
        await this.uIDrugQuantityEdit.clear();
        await this.uIDrugQuantityEdit.fill(BaseData.getTestValue("DrugQuantity"));
        await this.uIDrugQuantityEdit.press('Tab');
    }

    async SelectAtMeasurement(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIMeasurementComboBox, BaseData.getTestValue("Measurement"));
        await this.uIMeasurementComboBox.press('Tab');
    }

    async enterAtOwnerID(): Promise<void> {
        const ownerId = BaseData.getTestValue("OwnerNameID");
        await this.uIOwnerNameTypeEdit.fill(ownerId.substring(0, 1));
        await this.uIOwnerNameIDEdit.fill(ownerId.substring(2));
        await this.uIOwnerNameIDEdit.press('Tab');
    }

    async enterAtDescription(): Promise<void> {
        await this.uIDescriptionEdit.fill(BaseData.getTestValue("Description"));
        await this.uIDescriptionEdit.press('Tab');
    }

    async clickTraceCheckbox(): Promise<void> {
        await this.uITraceCheckbox.click();
    }
}

export class RecoveredTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIHoldComboBox: Locator;
    readonly uIQuantityEdit: Locator;
    readonly uIQuantityDrugEdit: Locator;
    readonly uIValueEdit: Locator;
    readonly uIDispositionComboBox: Locator;
    readonly uIInitialStorageLocationComboBox: Locator;
    readonly uIBarcodeImageButton: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIOwnerCheckbox: Locator;
    readonly uIReleasedToLastNameEdit: Locator;
    readonly uIReleasedToFirstNameEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uIAddressVerifyCheckBox: Locator;
    readonly uIDrugPanelQuantityEdit: Locator;
    readonly uIInitialStorageLocationCodeEdit: Locator;
    readonly uIInitialStorageLocationLookupButton: Locator;
    readonly uIRemarksEdit: Locator;
    readonly uISendToLastNameEdit: Locator;
    readonly uISendToFirstNameEdit: Locator;
    readonly uIPRItemNoEdit: Locator;
    readonly uIAddressIbubble: Locator;
    readonly uIContainer: Locator;
    readonly uIPackage: Locator;
    readonly uIInitialStorageLocationTextView: Locator;
    readonly uIPFCodeEdit: Locator;
    readonly uIPFDescriptionEdit: Locator;
    readonly uIPFLookupbutton: Locator;
    readonly uIContainerSeqNo: Locator;
    readonly uIRecoveredLocationEdit: Locator;
    readonly uIORIDropdown: Locator;
    readonly uIORICodeValue: Locator;
    readonly uICSZ: Locator;
    readonly uIPackSeqNoDropDown: Locator;
    readonly uIContainerPackageDropdown: Locator;
    readonly uIInitialStorageLocationLable: Locator;
    readonly uIContainerPackageIcon: Locator;
    readonly uIScanBarcodeRFIDedit: Locator;
    readonly uIBatchScanItems: Locator;
    readonly uIScanBarcodeRFIDPopupedit: Locator;
    readonly uIScanBarcodeRFIDPopupGrid: Locator;
    readonly uIRFIDpopupUpdateButton: Locator;
    readonly uIRFIDpopupCancleButton: Locator;
    readonly uIInitStorageLocationDescription: Locator;
    readonly uIResetDateTime: Locator;
    readonly uIReleasedTo: Locator;
    readonly uIReleasedToNameTypeEdit: Locator;
    readonly uIReleasedToNameIDEdit: Locator;
    readonly uIRecoveredCityEdit: Locator;
    readonly uIRecoveredStateDropdown: Locator;
    readonly uIRecoveredZipCodeEdit: Locator;
    readonly uIInPossOfCityEdit: Locator;
    readonly uIInPossOfStateDropdown: Locator;
    readonly uIInPossOfZipCodeEdit: Locator;
    readonly uIPakageMarkEdit: Locator;
    readonly uIContainerMarkEdit: Locator;
    readonly uISentToAddressEdit: Locator;
    readonly uISentToCityEdit: Locator;
    readonly uISentToStateDropdown: Locator;
    readonly uISentToZipcodeEdit: Locator;
    readonly uIInitialStorageLocEdit: Locator;
    readonly uIInPossOfMiddleNameEdit: Locator;
    readonly uIInPossOfSuffixDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIDateEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_dttTranDttm_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id = 'tabProperty_tmpl1_UsrPropRecovered1_dttTranDttm_Time']//input");
        this.uIHoldComboBox = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_cddHoldCode_DropDown');
        this.uIQuantityEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_txtRecQuantity');
        this.uIQuantityDrugEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_txtRecDrugQty');
        this.uIValueEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_txtValue');
        this.uIDispositionComboBox = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_cddDisposition_DropDown');
        this.uIInitialStorageLocationComboBox = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_cddLocation_DropDown');
        this.uIBarcodeImageButton = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_barPropItem');
        this.uILastNameEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_nRecoveredname_LastName');
        this.uIFirstNameEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_nRecoveredname_FirstName');
        this.uIOwnerCheckbox = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_ChkIsOwner');
        this.uIReleasedToLastNameEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_nReleasedName_LastName');
        this.uIReleasedToFirstNameEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_nReleasedName_FirstName');
        this.uIAddressEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_adrPossAddr_txtFrom');
        this.uIAddressVerifyCheckBox = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_adrPossAddr_chkVerify');
        this.uIDrugPanelQuantityEdit = page.locator("//input[@id='tabProperty_tmpl1_UsrPropRecovered1_txtRecDrugQty']");
        this.uIInitialStorageLocationCodeEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_lupLocation_CodeValue');
        this.uIInitialStorageLocationLookupButton = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_lupLocation_imgBtn');
        this.uIRemarksEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_txtRemarks');
        this.uISendToLastNameEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_nSendLabName_LastName');
        this.uISendToFirstNameEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_nSendLabName_FirstName');
        this.uIPRItemNoEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_txtPrItemNo');
        this.uIAddressIbubble = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_adrPossAddr_cmdIncOnAddr');
        this.uIContainer = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_cddContainer_DropDown');
        this.uIPackage = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_cddInnerPack_DropDown');
        this.uIInitialStorageLocationTextView = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_lupLocation_CodeDescription');
        this.uIPFCodeEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_lupOffPFID_CodeValue');
        this.uIPFDescriptionEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_lupOffPFID_CodeDescription');
        this.uIPFLookupbutton = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_lupOffPFID_imgBtn');
        this.uIContainerSeqNo = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_PackSeqNoCtrl');
        this.uIRecoveredLocationEdit = page.locator("//input[@id='tabProperty_tmpl1_UsrPropRecovered1_adrRecAddress_txtFrom']");
        this.uIORIDropdown = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_ORIOtherAgency_KPIState');
        this.uIORICodeValue = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_ORIOtherAgency_lupORI_CodeValue');
        this.uICSZ = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_custRelCSZ_City');
        this.uIPackSeqNoDropDown = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_PackSeqNoCtrl');
        this.uIContainerPackageDropdown = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_cddInnerPack_DropDown');
        this.uIInitialStorageLocationLable = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_lblStorageLoc');
        this.uIContainerPackageIcon = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_imgAddName');
        this.uIScanBarcodeRFIDedit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_txtScanBarcode');
        this.uIBatchScanItems = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_cmdScan');
        this.uIScanBarcodeRFIDPopupedit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_txtPanelScanBarcode');
        this.uIScanBarcodeRFIDPopupGrid = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_GrdScan');
        this.uIRFIDpopupUpdateButton = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_cmdScanupdate');
        this.uIRFIDpopupCancleButton = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_cmdScancancel');
        this.uIInitStorageLocationDescription = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_lupLocation_CodeDescription');
        this.uIResetDateTime = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_imgClearDate');
        this.uIReleasedTo = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_lblRelname');
        this.uIReleasedToNameTypeEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_nReleasedName_NameType');
        this.uIReleasedToNameIDEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_nReleasedName_NameTypeID');
        this.uIRecoveredCityEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_custRecCSZ_City');
        this.uIRecoveredStateDropdown = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_custRecCSZ_State_DropDown');
        this.uIRecoveredZipCodeEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_custRecCSZ_Zip');
        this.uIInPossOfCityEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_custPossCSZ_City');
        this.uIInPossOfStateDropdown = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_custPossCSZ_State_DropDown');
        this.uIInPossOfZipCodeEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_custPossCSZ_Zip');
        this.uIPakageMarkEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_txtInnerPackMark');
        this.uIContainerMarkEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_txtContainerMark');
        this.uISentToAddressEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_adrSentToLabAddress_txtFrom');
        this.uISentToCityEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_custSentToLabCSZ_City');
        this.uISentToStateDropdown = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_custSentToLabCSZ_State_DropDown');
        this.uISentToZipcodeEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_custSentToLabCSZ_Zip');
        this.uIInitialStorageLocEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_txtStorage');
        this.uIInPossOfMiddleNameEdit = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_nRecoveredname_MiddleName');
        this.uIInPossOfSuffixDropdown = page.locator('#tabProperty_tmpl1_UsrPropRecovered1_nRecoveredname_Suffix_DropDown');
    }

    async tabDateAndTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async enterQuantityAs5(): Promise<void> {
        await this.uIQuantityEdit.click();
        await this.uIQuantityEdit.fill("5");
        await this.uIQuantityEdit.press('Tab');
    }

    async selectDispositionAsSentToPropertyRoom(): Promise<void> {
        await this.uIDispositionComboBox.fill("Sent To Property Room");
        await this.uIDispositionComboBox.press('Tab');
    }

    async selectDispositionAsReturnedToOwner(): Promise<void> {
        await this.uIDispositionComboBox.fill("Returned To Owner (Closed)");
        await this.uIDispositionComboBox.press('Tab');
    }

    async selectAtDisposition(): Promise<void> {
        await this.uIDispositionComboBox.fill(BaseData.getTestValue("Disposition"));
        await this.uIDispositionComboBox.press('Tab');
        await this.page.waitForLoadState('load');
    }

    async ClickBarCode(): Promise<void> {
        await this.uIBarcodeImageButton.click();
    }

    async ClickOwnerCheckbox(): Promise<void> {
        await this.uIOwnerCheckbox.click();
    }

    async enterAtInitialStorageLocation(): Promise<void> {
        await this.uIInitialStorageLocationCodeEdit.click();
        await this.uIInitialStorageLocationCodeEdit.clear();
        await this.uIInitialStorageLocationCodeEdit.fill(BaseData.getTestValue("StorageLocation"));
        await this.uIInitialStorageLocationCodeEdit.press('Tab');
    }

    async EnterAtRemark(): Promise<void> {
        await this.uIRemarksEdit.fill(BaseData.getTestValue("Remarks"));
        await this.uIRemarksEdit.press('Tab');
    }

    async enterAtRecoveredLocation(): Promise<void> {
        await this.uIRecoveredLocationEdit.fill(BaseData.getTestValue("RecoveredLocation"));
        await this.uIRecoveredLocationEdit.press('Tab');
    }

    async enterAtPFCode(): Promise<void> {
        await this.uIPFCodeEdit.fill(BaseData.getTestValue("PFCode"));
        await this.uIPFCodeEdit.press('Tab');
    }
}

export class PropertyEntryHistoryTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uIHistoryResultTable: Locator;
    readonly uIHistoryListResultTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIHistoryResultTable = page.locator('#tblBulletins');
        this.uIHistoryListResultTable = page.locator('#listStack');
    }

    async VerifyTransDateAsCurrentDate(): Promise<void> {
        const text = await this.uIHistoryListResultTable.innerText();
        expect(text).toContain(DateHelpers.getCurrentDate("MM/dd/yy"));
    }

    async VerifyAtPFCode(): Promise<void> {
        const text = await this.uIHistoryListResultTable.innerText();
        expect(text).toContain(BaseData.getTestValue("PFCode"));
    }

    async VerifyHistoryAsSentToLab(): Promise<void> {
        const text = await this.uIHistoryListResultTable.innerText();
        expect(text).toContain("Sent to Lab");
    }

    async VerifyHistoryAsMovedPropertyRoom(): Promise<void> {
        const text = await this.uIHistoryListResultTable.innerText();
        expect(text).toContain("Moved Into the Property Room");
    }
}

export class PropertyEntryNamesTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uINameTypeEdit: Locator;
    readonly uINameTypeIDEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIActivityDropdown: Locator;
    readonly uINamesTable: Locator;
    readonly uIAddButton: Locator;
    readonly uIUpdateButton: Locator;
    readonly uIAddText: Locator;
    readonly uISaveButton: Locator;
    readonly uIResetButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uINameTypeEdit = page.locator('#nmcIncident_NameType');
        this.uINameTypeIDEdit = page.locator('#nmcIncident_NameTypeID');
        this.uILastNameEdit = page.locator('#nmcIncident_LastName');
        this.uIFirstNameEdit = page.locator('#nmcIncident_FirstName');
        this.uIActivityDropdown = page.locator('#cddActivity_DropDown');
        this.uINamesTable = page.locator('#grdCBENames');
        this.uIAddButton = page.locator('#imgAddName');
        this.uIUpdateButton = page.locator("//input[contains(@title,'Update')]");
        this.uIAddText = page.locator("//input[@title='Add' and @id='imgAddName']");
        this.uISaveButton = page.locator('#cmdInternalSave');
        this.uIResetButton = page.locator('#cmdInternalRefresh');
    }

    async enterAtNameID(): Promise<void> {
        const nameId = BaseData.getTestValue("NameID");
        await this.uINameTypeEdit.click();
        await this.uINameTypeEdit.fill(nameId.substring(0, 1));
        await this.uINameTypeIDEdit.fill(nameId.substring(2));
        await this.uINameTypeIDEdit.press('Tab');
    }

    async selectAtActivity(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIActivityDropdown, BaseData.getTestValue("Activity"));
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifyAtNameInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uINamesTable, BaseData.getTestValue("Name"), "Name");
        expect(await cell.innerText()).toBe(BaseData.getTestValue("Name"));
    }

    async saveInternalTab(): Promise<void> {
        await this.elementHelpers.saveWithAccept(this.uISaveButton);
    }
}

export class PropertyUpdatePage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIScanBarCodeEdit: Locator;
    readonly uIEvidenceLockerCheckbox: Locator;
    readonly uIExpandButton: Locator;
    readonly uISearchButton: Locator;
    readonly uINextButton: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNoEdit: Locator;
    readonly uIPropertyNoEdit: Locator;
    readonly uICaseInfoButton: Locator;
    readonly uIPropertyUpdateTable: Locator;
    readonly uIProceedWithSelectionButton: Locator;
    readonly uISelectAllCheckBox: Locator;
    readonly uIchkLockerAllCheckBox: Locator;
    readonly uIIncludeClosedItemsCheckbox: Locator;
    readonly uIOfficerCodeEdit: Locator;
    readonly uIPropertyYearEdit: Locator;
    readonly uIPropertyItemNoEdit: Locator;
    readonly uIRequestYearEdit: Locator;
    readonly uIRequestNoEdit: Locator;
    readonly uICrimeLabNoEdit: Locator;
    readonly uIStatusColumnRowValue: Locator;
    readonly uIUpdateButton: Locator;
    readonly uIStorageLocationEdit: Locator;
    readonly uIStorageLocationLookUpIcon: Locator;
    readonly uIStatutoryLimitationReachedCheckBox: Locator;
    readonly uIPrintBarcodeForSelectedItemsButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetIcon: Locator;
    readonly uIDateFromEdit: Locator;
    readonly uIDateToEdit: Locator;
    readonly uIFollowUpDateEdit: Locator;
    readonly uIStorageLocationDescriptionEdit: Locator;
    readonly uIInPossessionOfPFDescriptionEdit: Locator;
    readonly uIInPossessionOfPFLookupIcon: Locator;
    readonly uIHoldDropdown: Locator;
    readonly uIUpdateAndClearSelectedButton: Locator;
    readonly uIJurisDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIScanBarCodeEdit = page.locator('#txtbarcode');
        this.uIEvidenceLockerCheckbox = page.locator('#chkLockerAll');
        this.uIExpandButton = page.locator('#cmdExpand');
        this.uISearchButton = page.locator('#cmdLoad');
        this.uINextButton = page.locator('#grdPRBatchUpdt_ctl00_lnkbtnNext');
        this.uICaseYearEdit = page.locator('#nbrCaseNo_Year');
        this.uICaseNoEdit = page.locator('#nbrCaseNo_Number');
        this.uIPropertyNoEdit = page.locator('#nbrPropNo_Number');
        this.uICaseInfoButton = page.locator('#nbrCaseNo_imgBtn');
        this.uIPropertyUpdateTable = page.locator('#grdPRBatchUpdt');
        this.uIProceedWithSelectionButton = page.locator('#cmdUpdate');
        this.uISelectAllCheckBox = page.locator('#chkSelectAll');
        this.uIchkLockerAllCheckBox = page.locator('#chkLockerAll');
        this.uIIncludeClosedItemsCheckbox = page.locator('#chkIsclosed');
        this.uIOfficerCodeEdit = page.locator('#lupOfficer_CodeValue');
        this.uIPropertyYearEdit = page.locator('#nbrPropNo_Year');
        this.uIPropertyItemNoEdit = page.locator('#txtItemNo');
        this.uIRequestYearEdit = page.locator('#nbrReqNo_Year');
        this.uIRequestNoEdit = page.locator('#nbrReqNo_Number');
        this.uICrimeLabNoEdit = page.locator('#txtCrimeNo');
        this.uIStatusColumnRowValue = page.locator("//div[@id='grdPRBatchUpdt']//td[@class='gridrowclrDimGrey']");
        this.uIUpdateButton = page.locator('#cmdUpdate');
        this.uIStorageLocationEdit = page.locator('#lupStorageSrch_CodeValue');
        this.uIStorageLocationLookUpIcon = page.locator('#lupStorageSrch_imgBtn');
        this.uIStatutoryLimitationReachedCheckBox = page.locator('#chkStatLimit');
        this.uIPrintBarcodeForSelectedItemsButton = page.locator('#cmdPrintBarCode');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetIcon = page.locator("//input[contains(@src,'refresh.gif')]");
        this.uIDateFromEdit = page.locator('#dttRptDttmFrom_KPIDttmCtrl');
        this.uIDateToEdit = page.locator('#dttRptDttmTo_KPIDttmCtrl');
        this.uIFollowUpDateEdit = page.locator('#dttFollowUpDttm_KPIDttmCtrl');
        this.uIStorageLocationDescriptionEdit = page.locator('#lupStorageSrch_CodeDescription');
        this.uIInPossessionOfPFDescriptionEdit = page.locator('#lupOfficer_CodeDescription');
        this.uIInPossessionOfPFLookupIcon = page.locator('#lupOfficer_imgBtn');
        this.uIHoldDropdown = page.locator('#cddHoldCode_DropDown');
        this.uIUpdateAndClearSelectedButton = page.locator('#cmdUpdateClear');
        this.uIJurisDropdown = page.locator('#lstJuris');
    }

    async EnterAtCaseNo(): Promise<void> {
        const caseNo = BaseData.getTestValue("CaseNo");
        await this.uICaseYearEdit.fill(caseNo.substring(0, 2));
        await this.uICaseNoEdit.fill(caseNo.substring(3));
        await this.uICaseNoEdit.press('Tab');
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async ClickTheProceedWithSelectionButton(): Promise<void> {
        await this.uIProceedWithSelectionButton.click();
    }

    async ClickUpdateCheckboxUsingPropertyNo(): Promise<void> {
        await this.grid.selectRowCheckboxByCellText(this.uIPropertyUpdateTable, BaseData.getTestValue("PropertyNo"));
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }

    async clickResetIcon(): Promise<void> {
        await this.uIResetIcon.click();
    }
}

export class PropertyUpdatePopupPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uICloseButton: Locator;
    readonly uIUpdateButton: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIStorageLocationEdit: Locator;
    readonly uIStorageLocationDescTextEdit: Locator;
    readonly uIStorageLocationlupSerchButton: Locator;
    readonly uIEmpNoEdit: Locator;
    readonly uIEmpNoDescEdit: Locator;
    readonly uIEmplupSrchButton: Locator;
    readonly uIEmpInfoButton: Locator;
    readonly uIFollowUpDate: Locator;
    readonly uIActionComboBox: Locator;
    readonly uIRemarksEdit: Locator;
    readonly uIRelinquishedByCodeEdit: Locator;
    readonly uIRelinquishedByDescTextEdit: Locator;
    readonly uIRelinquishedBylupSrchButton: Locator;
    readonly uIReceivedByCodetEdit: Locator;
    readonly uIReceivedByDescTextEdit: Locator;
    readonly uIReceivedByLupSrchButton: Locator;
    readonly uIStorageLocationLookupButton: Locator;
    readonly uIPFNoCodeEdit: Locator;
    readonly uIPFNoDescTextEdit: Locator;
    readonly uIActionRadInput: Locator;
    readonly uIActionRadDropComboBox: Locator;
    readonly uIActionRadExpandComboBox: Locator;
    readonly uIActionDropdown: Locator;
    readonly uIOwnerCheckbox: Locator;
    readonly uIActionTreeView: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uICancelButton: Locator;
    readonly uIRelinquishedSignCheckBox: Locator;
    readonly uIRelinquishedByLabel: Locator;
    readonly uIReceivedByLabel: Locator;
    readonly uIRelinqSignImage: Locator;
    readonly uIReceivedSignCheckBox: Locator;
    readonly uIRecvdBySignImage: Locator;
    readonly uIReLinquishedByText: Locator;
    readonly uIReceivedByText: Locator;
    readonly uIReLinquishedByPFNo: Locator;
    readonly uIReceivedByPFNo: Locator;
    readonly uIActionRadComboBox: Locator;
    readonly uIRelinquishedBySignImage: Locator;
    readonly uIReceivedBySignImage: Locator;
    readonly uIRelinqSignImageButton: Locator;
    readonly uIRecvdBySignImageButton: Locator;
    readonly uIActionRadDropdown: Locator;
    readonly uIReleasedToAddressEdit: Locator;
    readonly uIReleasedToCityEdit: Locator;
    readonly uIReleasedToStateDropdown: Locator;
    readonly uIReleasedToZipcodeEdit: Locator;
    readonly uIUpdateAndPrintReceiptButton: Locator;
    readonly uIPreviousLocationPopupYesButton: Locator;
    readonly uITransferOfficerPFCodeEdit: Locator;
    readonly uITransferOfficerPFDescriptionEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uICloseButton = page.locator('#cmdCancel');
        this.uIUpdateButton = page.locator('#cmdUpdateSave');
        this.uIDateEdit = page.locator('#dttTranDttm_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='dttTranDttm_Time']//input");
        this.uIStorageLocationEdit = page.locator('#lupStorage_CodeValue');
        this.uIStorageLocationDescTextEdit = page.locator('#lupStorage_CodeDescription');
        this.uIStorageLocationlupSerchButton = page.locator('#lupStorage_imgBtn');
        this.uIEmpNoEdit = page.locator('#lupOffBy_CodeValue');
        this.uIEmpNoDescEdit = page.locator('#lupOffBy_CodeDescription');
        this.uIEmplupSrchButton = page.locator('#lupOffBy_imgBtn');
        this.uIEmpInfoButton = page.locator('#lupOffBy_cmdIncOnAddr');
        this.uIFollowUpDate = page.locator('#dttFlwUpDttm_KPIDttmCtrl');
        this.uIActionComboBox = page.locator('#cddStatus_DropDown');
        this.uIRemarksEdit = page.locator('#txtRemark');
        this.uIRelinquishedByCodeEdit = page.locator('#lupOffPFID1_CodeValue');
        this.uIRelinquishedByDescTextEdit = page.locator('#lupOffPFID1_CodeDescription');
        this.uIRelinquishedBylupSrchButton = page.locator('#lupOffPFID1_imgBtn');
        this.uIReceivedByCodetEdit = page.locator('#lupOffPFID2_CodeValue');
        this.uIReceivedByDescTextEdit = page.locator('#lupOffPFID2_CodeDescription');
        this.uIReceivedByLupSrchButton = page.locator('#lupOffPFID2_imgBtn');
        this.uIStorageLocationLookupButton = page.locator('#lupStorage_imgBtn');
        this.uIPFNoCodeEdit = page.locator('#lupTransOffPFID_CodeValue');
        this.uIPFNoDescTextEdit = page.locator('#lupTransOffPFID_CodeDescription');
        this.uIActionRadInput = page.locator("//div[@id='Radstatusdd']//span[@class='rddtInner']");
        this.uIActionRadDropComboBox = page.locator('#Radstatusdd_EmbeddedTree');
        this.uIActionRadExpandComboBox = page.locator("//span[@class='rddtInner focus rddtFocused']");
        this.uIActionDropdown = page.locator("//span[text()='Select List']");
        this.uIOwnerCheckbox = page.locator('#ChkIsOwner');
        this.uIActionTreeView = page.locator('#Radstatusdd_EmbeddedTree');
        this.uILastNameEdit = page.locator('#lupName_LastName');
        this.uIFirstNameEdit = page.locator('#lupName_FirstName');
        this.uICancelButton = page.locator('#cmdCencel');
        this.uIRelinquishedSignCheckBox = page.locator('#imgRelinqSign_chkIsEnableSign');
        this.uIRelinquishedByLabel = page.locator('#lblRelingby');
        this.uIReceivedByLabel = page.locator('#lblRecBy');
        this.uIRelinqSignImage = page.locator("//input[@id='tabPropRoom_tmpl3_UsrCustody1_imgRelinq']");
        this.uIReceivedSignCheckBox = page.locator('#imgRecvdBySign_chkIsEnableSign');
        this.uIRecvdBySignImage = page.locator('#imgRecvdBySign_imgSign');
        this.uIReLinquishedByText = page.locator('#lblRelingby');
        this.uIReceivedByText = page.locator('#lblRecBy');
        this.uIReLinquishedByPFNo = page.locator('#lupOffPFID1_CodeValue');
        this.uIReceivedByPFNo = page.locator('#lupOffPFID2_CodeValue');
        this.uIActionRadComboBox = page.locator("//span[contains(@class,'rddtFakeInput')]");
        this.uIRelinquishedBySignImage = page.locator("//input[@id='imgRelinq']");
        this.uIReceivedBySignImage = page.locator("//input[@id='imgReceived']");
        this.uIRelinqSignImageButton = page.locator('#imgRelinq');
        this.uIRecvdBySignImageButton = page.locator('#imgReceived');
        this.uIActionRadDropdown = page.locator("//span[@class='rddtFakeInput rddtEmptyMessage']");
        this.uIReleasedToAddressEdit = page.locator('#adrRelAddress_txtFrom');
        this.uIReleasedToCityEdit = page.locator('#custRelCSZ_City');
        this.uIReleasedToStateDropdown = page.locator('#custRelCSZ_State_DropDown');
        this.uIReleasedToZipcodeEdit = page.locator('#custRelCSZ_Zip');
        this.uIUpdateAndPrintReceiptButton = page.locator('#cmdUpdatePrint');
        this.uIPreviousLocationPopupYesButton = page.locator('#CmdupdateLocation');
        this.uITransferOfficerPFCodeEdit = page.locator('#lupTempOfficerPFID_CodeValue');
        this.uITransferOfficerPFDescriptionEdit = page.locator('#lupTempOfficerPFID_CodeDescription');
    }

    async tabTheDateAndTime(): Promise<void> {
        await this.uIDateEdit.click();
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async SelectActionAsPROMovedIntothePropertyRoom(): Promise<void> {
        await this.uIActionRadComboBox.click();
        //await this.elementHelpers.selectPropertyAction(this.uIActionRadDropComboBox, "PRO-Moved Into the Property Room");
        await this.page.waitForTimeout(1000);
    }

    async EnterAtReceivedBy(): Promise<void> {
        await this.uIReceivedByCodetEdit.click();
        await this.uIReceivedByCodetEdit.clear();
        await this.uIReceivedByCodetEdit.fill(BaseData.getTestValue("ReceivedBy"));
        await this.uIReceivedByCodetEdit.press('Tab');
    }

    async clickUpdateButtonWithConfrim(): Promise<void> {
        await this.uIUpdateButton.click();
        await this.popup.confirmYesButton.click();
    }
}

export class PropertyRoomRolesPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIStatusLable: Locator;
    readonly uIPropertyTabSpan: Locator;
    readonly uIStorageTabSpan: Locator;
    readonly uIDispositionTabSpan: Locator;
    readonly uIChainTabSpan: Locator;
    readonly uIAttachmentsTabSpan: Locator;
    readonly uIHistoryTabSpan: Locator;
    readonly uIPropertyNoInfoIcon: Locator;
    readonly uIPFCodeEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRecoverdTab: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uICustomizeIcon: Locator;
    readonly uIFieldNamesForPDFFormText: Locator;
    readonly uIReopenButton: Locator;
    readonly uIPropertyNoYearEdit: Locator;
    readonly uIPropertyNoEdit: Locator;
    readonly uIPropertyNoSeqEdit: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNoEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIStatusLable = page.locator('#lblRstStatus');
        this.uIPropertyTabSpan = page.locator("//span[contains(text(),'Property')]");
        this.uIStorageTabSpan = page.locator("//span[contains(text(),'Storage')]");
        this.uIDispositionTabSpan = page.locator("//span[contains(text(),'Disposition')]");
        this.uIChainTabSpan = page.locator("//span[contains(text(),'Chain')]");
        this.uIAttachmentsTabSpan = page.locator("//span[contains(text(),'Attachments')]");
        this.uIHistoryTabSpan = page.locator("//span[contains(text(),'History')]");
        this.uIPropertyNoInfoIcon = page.locator('#imgDetail');
        this.uIPFCodeEdit = page.locator('#lupOffPFID_CodeValue');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIRecoverdTab = page.locator("//span[text()='Recovered']");
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']//b");
        this.uICustomizeIcon = page.locator("//img[@title = 'Customize']");
        this.uIFieldNamesForPDFFormText = page.locator("//span[contains(text(),'Field Names for PDF')]");
        this.uIReopenButton = page.locator('#cmdReopen');
        this.uIPropertyNoYearEdit = page.locator('#nbrPropNo_Year');
        this.uIPropertyNoEdit = page.locator('#nbrPropNo_Number');
        this.uIPropertyNoSeqEdit = page.locator('#txtSeqNo');
        this.uICaseYearEdit = page.locator('#nbrCaseNo_Year');
        this.uICaseNoEdit = page.locator('#nbrCaseNo_Number');
    }

    async SwitchToPropertyTab(): Promise<void> {
        await this.uIPropertyTabSpan.click();
    }

    async SwitchToStorageTab(): Promise<void> {
        await this.uIStorageTabSpan.click();
    }

    async SwitchToDispositionTab(): Promise<void> {
        await this.uIDispositionTabSpan.click();
    }

    async SwitchToChainTab(): Promise<void> {
        await this.uIChainTabSpan.click();
    }

    async SwitchToAttachmentsTab(): Promise<void> {
        await this.uIAttachmentsTabSpan.click();
        new BrowserHelpers(this.page).switchToFrame('frmTxtAttachMgrEx');
    }

    async SwitchHistoryTab(): Promise<void> {
        await this.uIHistoryTabSpan.click();
        new BrowserHelpers(this.page).switchToFrame('frmPropHist');
    }

    async SaveTheScreen(): Promise<void> {
        await this.elementHelpers.saveWithAccept(this.uISaveButton);
    }

    async saveAndClose(): Promise<void> {
        await this.elementHelpers.saveAndCloseWithAccept(this.uISaveAndCloseButton);
    }

    async CloseScreen(): Promise<void> {
        await this.page.close();
    }
}

export class PropertyRoomRolesStorageTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIStatusLable: Locator;
    readonly uIActionRadDropComboBox: Locator;
    readonly uIActionRadComboBox: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIOfficerCodeEdit: Locator;
    readonly uIActionCombobox: Locator;
    readonly uIStorageLocationLable: Locator;
    readonly uIStorageLocationCodeEdit: Locator;
    readonly uIStorageLocationLookupIcon: Locator;
    readonly uICrimeLabEdit: Locator;
    readonly uIFollowupDateEdit: Locator;
    readonly uIFollowupNoteEdit: Locator;
    readonly uINotesEdit: Locator;
    readonly uIActionArrow: Locator;
    readonly uIActionRadDropdown93: Locator;
    readonly uILastActionEdit: Locator;
    readonly uIStorageLocationDescriptionEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIStatusLable = page.locator('#lblRstStatus');
        this.uIActionRadDropComboBox = page.locator('#tabPropRoom_tmpl1_UsrStorage1_Radstatusdd_EmbeddedTree');
        this.uIActionRadComboBox = page.locator("//span[@class='rddtFakeInput rddtEmptyMessage']");
        this.uIDateEdit = page.locator('#tabPropRoom_tmpl1_UsrStorage1_dttRecDttm_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='tabPropRoom_tmpl1_UsrStorage1_dttRecDttm_Time']//input");
        this.uIOfficerCodeEdit = page.locator('#tabPropRoom_tmpl1_UsrStorage1_lupOffPF_CodeValue');
        this.uIActionCombobox = page.locator("//div[@id='tabPropRoom_tmpl1_UsrStorage1_Radstatusdd_EmbeddedTree']");
        this.uIStorageLocationLable = page.locator('#tabPropRoom_tmpl1_UsrStorage1_lblLocId');
        this.uIStorageLocationCodeEdit = page.locator('#tabPropRoom_tmpl1_UsrStorage1_lupLocID_CodeValue');
        this.uIStorageLocationLookupIcon = page.locator('#tabPropRoom_tmpl1_UsrStorage1_lupLocID_imgBtn');
        this.uICrimeLabEdit = page.locator('#tabPropRoom_tmpl1_UsrStorage1_txtCrime');
        this.uIFollowupDateEdit = page.locator("//input[@id='tabPropRoom_tmpl1_UsrStorage1_dttFlwUpDttm_KPIDttmCtrl']");
        this.uIFollowupNoteEdit = page.locator('#tabPropRoom_tmpl1_UsrStorage1_txtFlwupNotes');
        this.uINotesEdit = page.locator('#tabPropRoom_tmpl1_UsrStorage1_txtSummary');
        this.uIActionArrow = page.locator("//div[@id='Radstatusdd']");
        this.uIActionRadDropdown93 = page.locator('#tabPropRoom_tmpl1_UsrStorage1_Radstatusdd_EmbeddedTree');
        this.uILastActionEdit = page.locator('#tabPropRoom_tmpl1_UsrStorage1_txtDescription');
        this.uIStorageLocationDescriptionEdit = page.locator('#tabPropRoom_tmpl1_UsrStorage1_lupLocID_CodeDescription');
    }

    async SelectAtAction(): Promise<void> {
        await this.uIActionArrow.click();
        // await this.elementHelpers.selectPropertyAction(this.uIActionRadDropComboBox, BaseData.getTestValue("Action"));
        await this.uIActionRadDropComboBox.press('Tab');
    }

    async enterAtStorageLocation(): Promise<void> {
        await this.uIStorageLocationCodeEdit.clear();
        await this.uIStorageLocationCodeEdit.fill(BaseData.getTestValue("StorageLocation"));
        await this.uIStorageLocationCodeEdit.press('Tab');
    }
}

export class PropertyRoomRolesDispositionTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIOfficerCodeEdit: Locator;
    readonly uIDispositionDropDown: Locator;
    readonly uIReleasedToLastNameEdit: Locator;
    readonly uIReleasedToFirstNameEdit: Locator;
    readonly uIReleasedToLupSerchButton: Locator;
    readonly uINotes: Locator;
    readonly uIReleasedTo: Locator;
    readonly uIOwnerCheckbox: Locator;
    readonly uIReleaseDateEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIDateEdit = page.locator('#tabPropRoom_tmpl2_UsrDisposed1_dttDisDttm_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='tabPropRoom_tmpl2_UsrDisposed1_dttDisDttm_Time']//input");
        this.uIOfficerCodeEdit = page.locator('#tabPropRoom_tmpl2_UsrDisposed1_lupOffPFID_CodeValue');
        this.uIDispositionDropDown = page.locator('#tabPropRoom_tmpl2_UsrDisposed1_cddDisposition_DropDown');
        this.uIReleasedToLastNameEdit = page.locator('#tabPropRoom_tmpl2_UsrDisposed1_lupName_LastName');
        this.uIReleasedToFirstNameEdit = page.locator('#tabPropRoom_tmpl2_UsrDisposed1_lupName_FirstName');
        this.uIReleasedToLupSerchButton = page.locator('#tabPropRoom_tmpl2_UsrDisposed1_lupName_imgSrch');
        this.uINotes = page.locator('#tabPropRoom_tmpl2_UsrDisposed1_txtNotes');
        this.uIReleasedTo = page.locator('#tabPropRoom_tmpl2_UsrDisposed1_lblReleasedTo');
        this.uIOwnerCheckbox = page.locator('#tabPropRoom_tmpl2_UsrDisposed1_ChkDispOwner');
        this.uIReleaseDateEdit = page.locator('#tabPropRoom_tmpl2_UsrDisposed1_dttRelDttm_KPIDttmCtrl');
    }

    async SelectAtDisposition(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIDispositionDropDown, BaseData.getTestValue("Disposition"));
        await this.uIDispositionDropDown.press('Tab');
    }

    async clickOwnerCheckbox(): Promise<void> {
        await this.uIOwnerCheckbox.click();
    }
}

export class PropertyRoomRolesChainTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIChainTabUsrCustodyTable: Locator;
    readonly uIUpdateButton: Locator;
    readonly uIRelinquishedByCodeEdit: Locator;
    readonly uIReceivedByCodeEdit: Locator;
    readonly uIReceivedByLookupButton: Locator;
    readonly uIRelinquishedSign: Locator;
    readonly uIReceivedSign: Locator;
    readonly uIRelinqSignImage: Locator;
    readonly uIRecvdBySignImage: Locator;
    readonly uIAddUpdateButton: Locator;
    readonly uIPopupCancelButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIChainTabUsrCustodyTable = page.locator('#tabPropRoom_tmpl3_UsrCustody1_grdCustody');
        this.uIUpdateButton = page.locator('#tabPropRoom_tmpl3_UsrCustody1_cmdUpdate');
        this.uIRelinquishedByCodeEdit = page.locator('#tabPropRoom_tmpl3_UsrCustody1_lupOffPFID1_CodeValue');
        this.uIReceivedByCodeEdit = page.locator('#tabPropRoom_tmpl3_UsrCustody1_lupOffPFID2_CodeValue');
        this.uIReceivedByLookupButton = page.locator('#tabPropRoom_tmpl3_UsrCustody1_lupOffPFID2_imgBtn');
        this.uIRelinquishedSign = page.locator('#tabPropRoom_tmpl3_UsrCustody1_imgRelinqSign_chkIsEnableSign');
        this.uIReceivedSign = page.locator('#tabPropRoom_tmpl3_UsrCustody1_imgRecvdBySign_chkIsEnableSign');
        this.uIRelinqSignImage = page.locator('#tabPropRoom_tmpl3_UsrCustody1_imgRelinqSign_imgSign');
        this.uIRecvdBySignImage = page.locator('#tabPropRoom_tmpl3_UsrCustody1_imgRecvdBySign_imgSign');
        this.uIAddUpdateButton = page.locator('#tabPropRoom_tmpl3_UsrCustody1_cmdProUpd');
        this.uIPopupCancelButton = page.locator('#tabPropRoom_tmpl3_UsrCustody1_cmdCencel');
    }

    async ClickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }

    async EnterAtReceivedBy(): Promise<void> {
        await this.uIReceivedByCodeEdit.clear();
        await this.uIReceivedByCodeEdit.fill(BaseData.getTestValue("ReceivedBy"));
        await this.uIReceivedByCodeEdit.press('Tab');
    }

    async SelectRelinquishedCheckbox(): Promise<void> {
        await this.uIRelinquishedSign.click();
    }

    async SelectReceivedCheckbox(): Promise<void> {
        await this.uIReceivedSign.click();
    }
}

export class PropertySearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uISearchButton: Locator;
    readonly uIAddNewPropertyButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIBackButton: Locator;
    readonly uIFromCaseYearEdit: Locator;
    readonly uIFromCaseNumberEdit: Locator;
    readonly uIToCaseYearEdit: Locator;
    readonly uIToCaseNumberEdit: Locator;
    readonly uIFromPropertyYearEdit: Locator;
    readonly uIFromPropertyNumberEdit: Locator;
    readonly uIToPropertyYearEdit: Locator;
    readonly uIToPropertyNumberEdit: Locator;
    readonly uIIncludeClosedItemsCheckBox: Locator;
    readonly uIStatusComboBox: Locator;
    readonly uIPropertySearchResultTable: Locator;
    readonly uIAdvancedTab: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameTypeIDEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIMiddleNameEdit: Locator;
    readonly uIDispositionComboBox: Locator;
    readonly uIJurisComboBox: Locator;
    readonly uIFromDateEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIOfficerID: Locator;
    readonly uIStorageLocationEdit: Locator;
    readonly uIStorageLocationDescription: Locator;
    readonly uIDateSearchByComboBox: Locator;
    readonly uIStorageLocationSearchButton: Locator;
    readonly uIAddNewEvidenceButton: Locator;
    readonly uIStorageBuildingDropDown: Locator;
    readonly uIStorageRoomDropDown: Locator;
    readonly uIStorageRowDropDown: Locator;
    readonly uIStorageShelfDropDown: Locator;
    readonly uIReasonDropdown: Locator;
    readonly uICreateNewPullRequestButtonLabel: Locator;
    readonly uIPropertyUpdateButtonLabel: Locator;
    readonly uIPropertyUpdateButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uINotRecoveredOnlyCheckbox: Locator;
    readonly uIEvidenceLockerCheckbox: Locator;
    readonly uIGridNextButton: Locator;
    readonly uIPropertyTypeDropdown: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uIPropertyDropdown: Locator;
    readonly uIHoldDropdown: Locator;
    readonly uIPropertyRoomOnlyCheckbox: Locator;
    readonly uIRecoverForOtherAgencyCheckbox: Locator;
    readonly uIBarcodeRFIDEdit: Locator;
    readonly uISelectAllCheckbox: Locator;
    readonly uICFSRangeCodeFromEdit: Locator;
    readonly uICFSRangeCodeToEdit: Locator;
    readonly uICFSClassCodeFromEdit: Locator;
    readonly uICFSClassCodeToEdit: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIStorageLocationTextEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uISearchButton = page.locator("//span[text()='Search']");
        this.uIAddNewPropertyButton = page.locator("//span[contains(text(),'Add New Property')]");
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
        this.uIBackButton = page.locator("//a/span[contains(text(),'Back')]");
        this.uIFromCaseYearEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_txtCaseNoFrom_Year');
        this.uIFromCaseNumberEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_txtCaseNoFrom_Number');
        this.uIToCaseYearEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_txtCaseNoTo_Year');
        this.uIToCaseNumberEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_txtCaseNoTo_Number');
        this.uIFromPropertyYearEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_nbrPrpertyFrom_Year');
        this.uIFromPropertyNumberEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_nbrPrpertyFrom_Number');
        this.uIToPropertyYearEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_nbrPrpertyTo_Year');
        this.uIToPropertyNumberEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_nbrPrpertyTo_Number');
        this.uIIncludeClosedItemsCheckBox = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_chkIsclosed');
        this.uIStatusComboBox = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_cddPropStatus_DropDown');
        this.uIPropertySearchResultTable = page.locator('#grdProperty');
        this.uIAdvancedTab = page.locator("//span[contains(text(),'Advanced')]");
        this.uINameTypeEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_nmcPropSrch_NameType');
        this.uINameTypeIDEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_nmcPropSrch_NameTypeID');
        this.uILastNameEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_nmcPropSrch_LastName');
        this.uIFirstNameEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_nmcPropSrch_FirstName');
        this.uIMiddleNameEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_nmcPropSrch_MiddleName');
        this.uIDispositionComboBox = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_cddDisposition_DropDown');
        this.uIJurisComboBox = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_lstJuris');
        this.uIFromDateEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_dttFrom_KPIDttmCtrl');
        this.uIToDateEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_dttTo_KPIDttmCtrl');
        this.uIOfficerID = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_lupOfficer_CodeValue');
        this.uIStorageLocationEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_lupStorageSrch_CodeValue');
        this.uIStorageLocationDescription = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_lupStorageSrch_CodeDescription');
        this.uIDateSearchByComboBox = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_cddDtSrchType_DropDown');
        this.uIStorageLocationSearchButton = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_lupStorageSrch_imgBtn');
        this.uIAddNewEvidenceButton = page.locator("//span[text()='Add New Evidence']");
        this.uIStorageBuildingDropDown = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_cddStorageBuilding_DropDown');
        this.uIStorageRoomDropDown = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_cddStorageRoom_DropDown');
        this.uIStorageRowDropDown = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_cddStorageRow_DropDown');
        this.uIStorageShelfDropDown = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_cddStorageShelf_DropDown');
        this.uIReasonDropdown = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_cddReason_DropDown');
        this.uICreateNewPullRequestButtonLabel = page.locator("//li[@title='Create new Pull Request']");
        this.uIPropertyUpdateButtonLabel = page.locator("//li[@title='Property Update']");
        this.uIPropertyUpdateButton = page.locator("//span[@title='Property Update']");
        this.uIRefreshButton = page.locator("//span[contains(text(),'Refresh')]");
        this.uINotRecoveredOnlyCheckbox = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_chkNotRecovered');
        this.uIEvidenceLockerCheckbox = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_chkEvidenceLocker');
        this.uIGridNextButton = page.locator("//a[text()='NEXT']");
        this.uIPropertyTypeDropdown = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_cddPropType_DropDown');
        this.uIDescriptionEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_txtDescription');
        this.uIPropertyDropdown = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_cddPropCat_DropDown');
        this.uIHoldDropdown = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_cddHoldCode_DropDown');
        this.uIPropertyRoomOnlyCheckbox = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_chkRecovered');
        this.uIRecoverForOtherAgencyCheckbox = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_chkRecover');
        this.uIBarcodeRFIDEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_txtbarcode');
        this.uISelectAllCheckbox = page.locator('#chkSelectAll');
        this.uICFSRangeCodeFromEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_lupCFSCode1_CodeValue');
        this.uICFSRangeCodeToEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_lupCFSCode2_CodeValue');
        this.uICFSClassCodeFromEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_lupCFSClass1_CodeValue');
        this.uICFSClassCodeToEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_lupCFSClass2_CodeValue');
        this.uIPrintIcon = page.locator("//img[@title='Print']");
        this.uIStorageLocationTextEdit = page.locator('#tabProperty_tmpl0_ctrlUsrPropSrchBasic_txtPropLocation');
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async ClickAddNewPropertyButton(): Promise<void> {
        await this.uIAddNewPropertyButton.click();
    }

    async clickReset(): Promise<void> {
        await this.uIResetButton.click();
    }

    async clickBack(): Promise<void> {
        await this.uIBackButton.click();
    }

    async ClickAtPropertyNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIPropertySearchResultTable, BaseData.getTestValue("PropertyNo"));
    }

    async ClickAdvancedTab(): Promise<void> {
        await this.uIAdvancedTab.click();
    }

    async SelectAtStatus(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIStatusComboBox, BaseData.getTestValue("Status"));
        await this.uIStatusComboBox.press('Tab');
    }

    async enterAtLastName(): Promise<void> {
        await this.uILastNameEdit.fill(BaseData.getTestValue("LastName"));
        await this.uILastNameEdit.press('Tab');
    }

    async enterAtFirstName(): Promise<void> {
        await this.uIFirstNameEdit.fill(BaseData.getTestValue("FirstName"));
        await this.uIFirstNameEdit.press('Tab');
    }

    async clickPropertyUpdate(): Promise<void> {
        await this.uIPropertyUpdateButton.click();
    }

    async clickCreateNewPullRequest(): Promise<void> {
        await this.uICreateNewPullRequestButtonLabel.click();
    }
}

export class PullRequestPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uISearchButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIPullRequestResultgrid: Locator;
    readonly uIReasonComboBox: Locator;
    readonly uIRequestedByEdit: Locator;
    readonly uIFromDateRequestedEdit: Locator;
    readonly uIToDateRequestedEdit: Locator;
    readonly uIFromDateRequiredEdit: Locator;
    readonly uIToDateRequiredEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uISearchButton = page.locator('#cmdSearch');
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIPullRequestResultgrid = page.locator('#grdPullSrch');
        this.uIReasonComboBox = page.locator('#cddReason_DropDown');
        this.uIRequestedByEdit = page.locator('#lupReqOffPFID_CodeValue');
        this.uIFromDateRequestedEdit = page.locator('#dttmreqFrom_KPIDttmCtrl');
        this.uIToDateRequestedEdit = page.locator('#dttmreqTo_KPIDttmCtrl');
        this.uIFromDateRequiredEdit = page.locator('#dttmFrom_KPIDttmCtrl');
        this.uIToDateRequiredEdit = page.locator('#dttmTo_KPIDttmCtrl');
    }

    async ClickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async ClickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async SelectAtReason(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIReasonComboBox, BaseData.getTestValue("Reason"));
        await this.uIReasonComboBox.press('Tab');
    }

    async ClickAtRequestNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIPullRequestResultgrid, BaseData.getTestValue("RequestNo"));
    }

    async enterAtRequestedBy(): Promise<void> {
        await this.uIRequestedByEdit.fill(BaseData.getTestValue("RequestedBy"));
        await this.uIRequestedByEdit.press('Tab');
    }
}

export class RequestEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIRequestYearEdit: Locator;
    readonly uIRequestNumberEdit: Locator;
    readonly uIRequestedByEdit: Locator;
    readonly uIDateRequestedEdit: Locator;
    readonly uIDateRequiredEdit: Locator;
    readonly uIDateRequiredTimeEdit: Locator;
    readonly uIReasonComboBox: Locator;
    readonly uIPropertyYearEdit: Locator;
    readonly uIPropertyNumberEdit: Locator;
    readonly uIAcceptedByEdit: Locator;
    readonly uIAcceptedDateEdit: Locator;
    readonly uIAcceptedTimeEdit: Locator;
    readonly uIStatusTextView: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIRoutingTab: Locator;
    readonly uIItemsTab: Locator;
    readonly uIRequestEntryResultgrid: Locator;
    readonly uICaseNoEdit: Locator;
    readonly uIPropertyItemNoEdit: Locator;
    readonly uIPropertyDescriptionEdit: Locator;
    readonly uIPropertyLookupButton: Locator;
    readonly uIAddButton: Locator;
    readonly uIDeleteButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIRequestYearEdit = page.locator('#nmcReq_Year');
        this.uIRequestNumberEdit = page.locator('#nmcReq_Number');
        this.uIRequestedByEdit = page.locator('#lupReqOffPFID_CodeValue');
        this.uIDateRequestedEdit = page.locator('#dttRequested_Date_KPIDttmCtrl');
        this.uIDateRequiredEdit = page.locator('#dttRequiredDttm_Date_KPIDttmCtrl');
        this.uIDateRequiredTimeEdit = page.locator("//table[@id='dttRequiredDttm_Time']//input");
        this.uIReasonComboBox = page.locator('#cddReason_DropDown');
        this.uIPropertyYearEdit = page.locator('#tabPullRequest_tmpl0_usrPullRequestItems_nbrPropNo_Year');
        this.uIPropertyNumberEdit = page.locator('#tabPullRequest_tmpl0_usrPullRequestItems_nbrPropNo_Number');
        this.uIAcceptedByEdit = page.locator('#lupAccOffPFID_CodeValue');
        this.uIAcceptedDateEdit = page.locator('#dttRequiredDttm_Date_KPIDttmCtrl');
        this.uIAcceptedTimeEdit = page.locator("//table[@id='dttRequiredDttm_Time']//input");
        this.uIStatusTextView = page.locator('#lblDispStatus');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIRoutingTab = page.locator("//span[text()='Routing']");
        this.uIItemsTab = page.locator("//span[text()='Items']");
        this.uIRequestEntryResultgrid = page.locator('#tabPullRequest_tmpl0_usrPullRequestItems_grdPullRequest');
        this.uICaseNoEdit = page.locator('#tabPullRequest_tmpl0_usrPullRequestItems_nbrCaseNo_Number');
        this.uIPropertyItemNoEdit = page.locator('#tabPullRequest_tmpl0_usrPullRequestItems_txtItemNo');
        this.uIPropertyDescriptionEdit = page.locator('#tabPullRequest_tmpl0_usrPullRequestItems_txtDescription');
        this.uIPropertyLookupButton = page.locator('#tabPullRequest_tmpl0_usrPullRequestItems_imgRelated');
        this.uIAddButton = page.locator('#tabPullRequest_tmpl0_usrPullRequestItems_imgAdd');
        this.uIDeleteButton = page.locator('#cmdDelete');
    }

    async readRequestNo(): Promise<string> {
        const year = await this.uIRequestYearEdit.inputValue();
        const num = await this.uIRequestNumberEdit.inputValue();
        return `${year}-${num}`;
    }

    async SelectAtReason(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIReasonComboBox, BaseData.getTestValue("Reason"));
        await this.uIReasonComboBox.press('Tab');
    }

    async ClickPropertyLookupIcon(): Promise<void> {
        await this.uIPropertyLookupButton.click();
    }

    async ClickAdd(): Promise<void> {
        await this.uIAddButton.click();
    }

    async Save(): Promise<void> {
        await this.elementHelpers.saveWithAccept(this.uISaveButton);
    }

    async SaveAndClose(): Promise<void> {
        await this.elementHelpers.saveAndCloseWithAccept(this.uISaveAndCloseButton);
    }

    async CloseScreen(): Promise<void> {
        await this.page.close();
    }

    async switchToRoutingTab(): Promise<void> {
        await this.uIRoutingTab.click();
        new BrowserHelpers(this.page).switchToFrame('Property/frmPullRouting.aspx?');
    }

    async switchToItemTab(): Promise<void> {
        await this.uIItemsTab.click();
    }
}

export class RequestEntryItemsTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uICaseYearEdit: Locator;
    readonly uICaseNoEdit: Locator;
    readonly uIPropertyItemNoEdit: Locator;
    readonly uIPropertyDescriptionEdit: Locator;
    readonly uIRequestEntryResultgrid: Locator;
    readonly uIPropertyLookupButton: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIPropertyItemNumberEdit: Locator;
    readonly uIPropertyNumberEdit: Locator;
    readonly uIPropertyYearEdit: Locator;
    readonly uIItemsTable: Locator;
    readonly uIProceedToPropertyUpdateButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);

        this.uICaseYearEdit = page.locator('#tabPullRequest_tmpl0_usrPullRequestItems_nbrCaseNo_Year');
        this.uICaseNoEdit = page.locator('#tabPullRequest_tmpl0_usrPullRequestItems_nbrCaseNo_Number');
        this.uIPropertyItemNoEdit = page.locator('#txtItemNo');
        this.uIPropertyDescriptionEdit = page.locator('#tabPullRequest_tmpl0_usrPullRequestItems_txtDescription');
        this.uIRequestEntryResultgrid = page.locator('#tabPullRequest_tmpl0_usrPullRequestItems_grdPullRequest');
        this.uIPropertyLookupButton = page.locator('#tabPullRequest_tmpl0_usrPullRequestItems_imgRelated');
        this.uIAddButton = page.locator('#tabPullRequest_tmpl0_usrPullRequestItems_imgAdd');
        this.uIClearButton = page.locator('#tabPullRequest_tmpl0_usrPullRequestItems_imgClear');
        this.uIPropertyItemNumberEdit = page.locator('#tabPullRequest_tmpl0_usrPullRequestItems_txtItemNo');
        this.uIPropertyNumberEdit = page.locator('#tabPullRequest_tmpl0_usrPullRequestItems_nbrPropNo_Number');
        this.uIPropertyYearEdit = page.locator('#tabPullRequest_tmpl0_usrPullRequestItems_nbrPropNo_Year');
        this.uIItemsTable = page.locator('#tabPullRequest_tmpl0_usrPullRequestItems_grdPullRequest');
        this.uIProceedToPropertyUpdateButton = page.locator('#tabPullRequest_tmpl0_usrPullRequestItems_cmdProceedToUpdate');
    }

    async ClickPropertyLookupIcon(): Promise<void> {
        await this.uIPropertyLookupButton.click();
    }

    async ClickAdd(): Promise<void> {
        await this.uIAddButton.click();
    }

    async EnterAtPropertyNo(): Promise<void> {
        const propNo = BaseData.getTestValue("PropertyNo");
        await this.uIPropertyYearEdit.fill(propNo.substring(0, 2));
        await this.uIPropertyNumberEdit.fill(propNo.substring(3, 9));
        await this.uIPropertyItemNumberEdit.fill(propNo.substring(10));
        await this.uIPropertyItemNumberEdit.press('Tab');
    }

    async clickProceedToPropertyUpdateButton(): Promise<void> {
        await this.uIProceedToPropertyUpdateButton.click();
    }
}

export class RequestEntryRoutingTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uISaveButton: Locator;
    readonly uIResetButton: Locator;
    readonly uINewActionCombobox: Locator;
    readonly uIByValueEdit: Locator;
    readonly uIByDescriptionEdit: Locator;
    readonly uIByBubbleIcon: Locator;
    readonly uIRequiredDateEdit: Locator;
    readonly uIRequiredTimeEdit: Locator;
    readonly uIRouteToValue: Locator;
    readonly uINotesEdit: Locator;
    readonly uIRoutingTable: Locator;
    readonly uIRejectedCount: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uISaveButton = page.locator('#cmdSave');
        this.uIResetButton = page.locator('#cmdReset');
        this.uINewActionCombobox = page.locator('#lstStatus');
        this.uIByValueEdit = page.locator('#lupPFID_CodeValue');
        this.uIByDescriptionEdit = page.locator('#lupPFID_CodeDescription');
        this.uIByBubbleIcon = page.locator('lupPFID$cmdIncOnAddr');
        this.uIRequiredDateEdit = page.locator('#dttRequiredDttm_Date_KPIDttmCtrl');
        this.uIRequiredTimeEdit = page.locator("//table[@id='dttRequiredDttm_Time']//input");
        this.uIRouteToValue = page.locator('#lblRoom');
        this.uINotesEdit = page.locator('#txtComments');
        this.uIRoutingTable = page.locator('#listMsg');
        this.uIRejectedCount = page.locator('#lblrejcountvalue');
    }

    async selectAtNewAction(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uINewActionCombobox, BaseData.getTestValue("NewAction"));
    }

    async tabDateAndTime(): Promise<void> {
        await this.uIRequiredDateEdit.press('Tab');
        await this.uIRequiredTimeEdit.press('Tab');
    }

    async save(): Promise<void> {
        await this.elementHelpers.saveWithAccept(this.uISaveButton);
    }

    async clickReset(): Promise<void> {
        await this.uIResetButton.click();
    }

    async enterAtNotes(): Promise<void> {
        await this.uINotesEdit.fill(BaseData.getTestValue("Notes"));
    }
}

export class LocationSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIAddNew: Locator;
    readonly uICodeEdit: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uISearchButton: Locator;
    readonly uIBarcodeBatchPrintButton: Locator;
    readonly uISelectAllCheckbox: Locator;
    readonly uILocationTable: Locator;
    readonly uIStorageBuildingDropdown: Locator;
    readonly uIStorageRoomDropDown: Locator;
    readonly uIStorageRowDropDown: Locator;
    readonly uIEvidenceLockerCheckbox: Locator;
    readonly uIGridNextButton: Locator;
    readonly uIStorageShelfDropdown: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uIIncludeInactiveCheckbox: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIExcelIcon: Locator;
    readonly uIBulkExportImportIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIAddNew = page.locator("//span[@title='Add New Item']");
        this.uICodeEdit = page.locator('#txtCode');
        this.uIDescriptionEdit = page.locator('#txtDesc');
        this.uISearchButton = page.locator('#cmdSearch');
        this.uIBarcodeBatchPrintButton = page.locator("//span[contains(text(),'Barcode Batch Print')]");
        this.uISelectAllCheckbox = page.locator('#chkCheckAll');
        this.uILocationTable = page.locator('#grdStorage');
        this.uIStorageBuildingDropdown = page.locator('#cddStorageBuilding_DropDown');
        this.uIStorageRoomDropDown = page.locator('#cddStorageRoom_DropDown');
        this.uIStorageRowDropDown = page.locator('#cddStorageRow_DropDown');
        this.uIEvidenceLockerCheckbox = page.locator('#chkLocker');
        this.uIGridNextButton = page.locator("//a[text()='NEXT']");
        this.uIStorageShelfDropdown = page.locator('#cddStorageShelf_DropDown');
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uIIncludeInactiveCheckbox = page.locator('#chkInactive');
        this.uIPrintIcon = page.locator("//img[@title='Print']");
        this.uIExcelIcon = page.locator("//img[@title='Export to Excel']");
        this.uIBulkExportImportIcon = page.locator("//img[@title='Bulk Export/Import']");
    }

    async ClickAddNew(): Promise<void> {
        await this.uIAddNew.click();
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async enterAtCode(): Promise<void> {
        await this.uICodeEdit.clear();
        await this.uICodeEdit.fill(BaseData.getTestValue("Code"));
    }

    async selectAtStorageBuilding(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIStorageBuildingDropdown, BaseData.getTestValue("StorageBuilding"));
    }

    async selectAtStorageRoom(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIStorageRoomDropDown, BaseData.getTestValue("StorageRoom"));
    }

    async selectAtStorageRow(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIStorageRowDropDown, BaseData.getTestValue("StorageRow"));
    }

    async selectAtLocationDescriptionInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uILocationTable, BaseData.getTestValue("LocationDescription"));
    }

    async enterAtDescription(): Promise<void> {
        await this.uIDescriptionEdit.fill(BaseData.getTestValue("Description"));
    }
}

export class StorageLocationsPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIDescription: Locator;
    readonly uIEvidenceLockerCheckBox: Locator;
    readonly uISharedCheckBox: Locator;
    readonly uISave: Locator;
    readonly uIBottomStatusMessage: Locator;
    readonly uIAddNewButton: Locator;
    readonly uILocationCodeEdit: Locator;
    readonly uIStorageBuildingDropdown: Locator;
    readonly uIStorageRoomDropdown: Locator;
    readonly uIStorageRowDropdown: Locator;
    readonly uIStorageShelfDropdown: Locator;
    readonly uINotesEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIDescription = page.locator('#txtDescription');
        this.uIEvidenceLockerCheckBox = page.locator('#chkLocker');
        this.uISharedCheckBox = page.locator('#chkShared');
        this.uISave = page.locator('#cmdSave');
        this.uIBottomStatusMessage = page.locator("//td[@class='statusBar']//b");
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uILocationCodeEdit = page.locator('#txtCode');
        this.uIStorageBuildingDropdown = page.locator('#cddStorageBuilding_DropDown');
        this.uIStorageRoomDropdown = page.locator('#cddStorageRoom_DropDown');
        this.uIStorageRowDropdown = page.locator('#cddStorageRow_DropDown');
        this.uIStorageShelfDropdown = page.locator('#cddStorageShelf_DropDown');
        this.uINotesEdit = page.locator('#txtNotes');
    }

    async EnterAtDescription(): Promise<void> {
        await this.uIDescription.fill(BaseData.getTestValue("Description"));
        await this.uIDescription.press('Tab');
    }

    async ClickEvidenceLockerCheckBox(): Promise<void> {
        await this.uIEvidenceLockerCheckBox.click();
    }

    async ClickSharedCheckBox(): Promise<void> {
        await this.uISharedCheckBox.click();
    }

    async SaveTheScreen(): Promise<void> {
        await this.elementHelpers.saveWithAccept(this.uISave);
    }

    async CloseTheScreen(): Promise<void> {
        await this.page.close();
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }
}

export class BarcodeUpdatePage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uILogOnButton: Locator;
    readonly uIUsePropertySearchButton: Locator;
    readonly uIBatchUpdateGrid: Locator;
    readonly uIActionCodeValueEdit: Locator;
    readonly uIDispositionCodeValueEdit: Locator;
    readonly uIReleasedToOwnerCheckbox: Locator;
    readonly uIReleasedToNameTypeEdit: Locator;
    readonly uIReleasedToNameIDEdit: Locator;
    readonly uIReleasedToLastNameEdit: Locator;
    readonly uIReleasedToFirstNameEdit: Locator;
    readonly uIProcessButton: Locator;
    readonly uICloseButton: Locator;
    readonly uIOfficerPFCodeEdit: Locator;
    readonly uIAddToListButton: Locator;
    readonly uIResetIcon: Locator;
    readonly uIItemTagNumberEdit: Locator;
    readonly uIStorageLocationCodeEdit: Locator;
    readonly uIStorageLocationDescriptionEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);

        this.uILogOnButton = page.locator('#btnLogOn');
        this.uIUsePropertySearchButton = page.locator('#cmdPropSrch');
        this.uIBatchUpdateGrid = page.locator('#grdPRBatchUpdt');
        this.uIActionCodeValueEdit = page.locator('#lupACtion_CodeValue');
        this.uIDispositionCodeValueEdit = page.locator('#lupDisposition_CodeValue');
        this.uIReleasedToOwnerCheckbox = page.locator('#chkOwner');
        this.uIReleasedToNameTypeEdit = page.locator('#nRelinName_NameType');
        this.uIReleasedToNameIDEdit = page.locator('#nRelinName_NameTypeID');
        this.uIReleasedToLastNameEdit = page.locator('#nRelinName_LastName');
        this.uIReleasedToFirstNameEdit = page.locator('#nRelinName_FirstName');
        this.uIProcessButton = page.locator('#cmdProcess');
        this.uICloseButton = page.locator('#cmdClose');
        this.uIOfficerPFCodeEdit = page.locator('#lupOffBy_CodeValue');
        this.uIAddToListButton = page.locator('#btnAddList');
        this.uIResetIcon = page.locator('#cmdRefresh');
        this.uIItemTagNumberEdit = page.locator('#txtbarcode');
        this.uIStorageLocationCodeEdit = page.locator('#lupStorageSrch_CodeValue');
        this.uIStorageLocationDescriptionEdit = page.locator('#lupStorageSrch_CodeDescription');
    }

    async clickLogOnButton(): Promise<void> {
        await this.uILogOnButton.click();
    }

    async clickUsePropertySearch(): Promise<void> {
        await this.uIUsePropertySearchButton.click();
    }

    async enterAtAction(): Promise<void> {
        await this.uIActionCodeValueEdit.fill(BaseData.getTestValue("Action"));
        await this.uIActionCodeValueEdit.press('Tab');
    }

    async enterAtDisposition(): Promise<void> {
        await this.uIDispositionCodeValueEdit.fill(BaseData.getTestValue("Disposition"));
        await this.uIDispositionCodeValueEdit.press('Tab');
    }

    async clickReleasedToOwnerCheckbox(): Promise<void> {
        await this.uIReleasedToOwnerCheckbox.click();
    }

    async clickProcessButton(): Promise<void> {
        await this.uIProcessButton.click();
    }

    async clickCloseButton(): Promise<void> {
        await this.uICloseButton.click();
    }
}

export class PropertyNotesPage {
    readonly page: Page;
    readonly uIAddNotesButton: Locator;
    readonly uINotesGrid: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIPFCodeEdit: Locator;
    readonly uINotesEdit: Locator;
    readonly uIPropertyNoYearEdit: Locator;
    readonly uIPropertyNoEdit: Locator;
    readonly uIPropertyNoSequenceEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uICancelButton: Locator;
    readonly uIDateLabel: Locator;
    readonly uIPFLabel: Locator;
    readonly uINotesLabel: Locator;
    readonly uIPropertyLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddNotesButton = page.locator('#btnAddNotes');
        this.uINotesGrid = page.locator('#listStack');
        this.uIDateEdit = page.locator('#dtcUpdatDttm_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='dtcUpdatDttm_Time']//input");
        this.uIPFCodeEdit = page.locator('#lupUpdatePF_CodeValue');
        this.uINotesEdit = page.locator('#txtNotes');
        this.uIPropertyNoYearEdit = page.locator('#nbrPropNo_Year');
        this.uIPropertyNoEdit = page.locator('#nbrPropNo_Number');
        this.uIPropertyNoSequenceEdit = page.locator('#txtItemNo');
        this.uIAddButton = page.locator('#cmdUpdate');
        this.uICancelButton = page.locator('#CmdCancel');
        this.uIDateLabel = page.locator('#lblDate');
        this.uIPFLabel = page.locator('#lblPFID');
        this.uINotesLabel = page.locator('#lblNotes');
        this.uIPropertyLabel = page.locator('#lblProp');
    }

    async clickAddNotesButton(): Promise<void> {
        await this.uIAddNotesButton.click();
    }

    async enterAtNotes(i: number): Promise<void> {
        await this.uINotesEdit.fill(BaseData.getTestValue("Notes" + i));
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }
}

export class PropertyPage {
    readonly page: Page;
    private browserHelpers: BrowserHelpers;

    constructor(page: Page) {
        this.page = page;
        this.browserHelpers = new BrowserHelpers(page);
    }

    async switchToPawnDealerEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle("Pawn Dealer Entry");
    }

    async switchToPropertyEditEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl("Property/frmPropEntrySrch");
    }

    async switchToPropertyEditEntryPopup(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle("Property Edit/Entry");
    }

    async switchToPropertyEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle("Property Entry");
    }

    async switchToPropertyNCICCode(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl("frmPropNCICSrch.aspx?");
    }

    async switchToPropertyNCICEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl("frmPropNCIC.aspx");
    }

    async switchToPropertyCodes(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle("Property Codes");
    }

    async switchToPropertyCodesEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl("/Police/Property/frmPropCodeEntry.aspx?");
    }

    async switchToPropertyIndex(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle("Property Index");
    }

    async switchToPropertyUpdate(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl("Property/frmPropBTUptSave");
    }

    async switchToNotifyScreen(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle("Notify");
    }

    async switchToPropertyRoomRoles(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle("Property Room Roles");
    }

    async switchToPawn(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl("Property/frmPawnSrch");
    }

    async switchToPawnDealer(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl("Property/frmPawnDealerSrch");
    }

    async switchToPawnEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle("Pawn Entry");
    }

    async switchToBicycleRegistration(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl("Property/frmBicycleSrch.aspx?");
    }

    async switchToBicycleRegistrationEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle("Registration Entry");
    }

    async switchToAuditSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl("Property/frmPropAuditSrch");
    }

    async switchToPropertySearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl("Property/frmPropertySrch");
    }

    async switchToPullRequest(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl("Property/frmPullSrch");
    }

    async switchToRequestEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle("Request Entry");
    }

    async switchToLocationSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl("frmPropLocationSrch.aspx");
    }

    async switchToStorageLocations(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle("Storage Location");
    }

    async switchToBarcodeUpdate(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle("Barcode Update");
    }

    async switchToPropertyNotes(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl("frmPropNotes.aspx?");
    }
}
