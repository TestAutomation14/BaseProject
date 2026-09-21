// @ts-nocheck
import { Page, Locator, expect } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { AcknowledgePage, ConfirmPage, PopupPage } from '../popup.page';
import { PoliceData } from '../../data/police-data';
import { BaseData } from '../../data/base-data';
import { GridHelpers } from '../../helpers/grid-helpers';
import { ElementHelpers } from '../../helpers/element-helpers';
import { PopupHelpers } from '../../helpers/popup-helpers';
import { DateHelpers, RandomHelpers } from '../../helpers';

export class K9SearchPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uICallNoYearEdit: Locator;
    readonly uICallNoEdit: Locator;
    readonly uISearchButton: Locator;
    readonly uISearchResultTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uICallNoYearEdit = page.locator('#nbrCallNo_Year');
        this.uICallNoEdit = page.locator('#nbrCallNo_Number');
        this.uISearchButton = page.locator('#cmdSearch');
        this.uISearchResultTable = page.locator('#grdPersonnelSearch');
    }

    async enterAtCallNo(): Promise<void> {
        const callNo = PoliceData.getK9ModuleValue('CallNo');
        await this.uICallNoYearEdit.fill(callNo.substring(0, 2));
        await this.uICallNoEdit.fill(callNo.substring(3));
        await this.uICallNoEdit.press('Tab');
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
        await this.page.waitForLoadState('load');
    }

    async verifyAddressContainsJurisAndCSZInTheAddressColumnByAtCallNo(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uISearchResultTable, PoliceData.getK9ModuleValue('CallNo'), 'Location');
        const address = await cell.innerText();
        const addressDetails = address.split(';');
        const regExp = /^[A-Z]{2},\s[\w\s]+,\s[A-Z]{2},\s[0-9]{5}$/;
        expect(regExp.test(addressDetails[1] || '')).toBeFalsy();
    }
}

export class CPAPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIK9OrHandlerDropDown: Locator;
    readonly uISearchButton: Locator;
    readonly uICPAResultTable: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uICallNoEdit: Locator;
    readonly uICallYearEdit: Locator;
    readonly uICaseNoEdit: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uIFromDateEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uIInfoIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIK9OrHandlerDropDown = page.locator('#cddK9Handler_DropDown');
        this.uISearchButton = page.locator('#cmdSearch');
        this.uICPAResultTable = page.locator('#grdCPASearch');
        this.uIAddNewButton = page.locator("//span[text()='Add New']");
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uICallNoEdit = page.locator('#nbrCallNumber_Number');
        this.uICallYearEdit = page.locator('#nbrCallNumber_Year');
        this.uICaseNoEdit = page.locator('#nbrCaseNumber_Number');
        this.uICaseYearEdit = page.locator('#nbrCaseNumber_Year');
        this.uIFromDateEdit = page.locator('#dtmFromDate_KPIDttmCtrl');
        this.uIToDateEdit = page.locator('#dtmToDate_KPIDttmCtrl');
        this.uIAddressEdit = page.locator('#adrLocation_txtFrom');
        this.uIInfoIcon = page.locator('#nbrCallNumber_imgBtn');
    }

    async selectAtK9OrHandler(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9OrHandlerDropDown, PoliceData.getK9ModuleValue('K9Handler'));
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async selectRowByAtLocation(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICPAResultTable, PoliceData.getK9ModuleValue('Location'));
    }

    async selectAtK9HandlerInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICPAResultTable, PoliceData.getK9ModuleValue('K9Handler'));
        await this.page.waitForTimeout(1000);
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async selectAtLocationOfActivityInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICPAResultTable, PoliceData.getK9ModuleValue('LocationOfActivity'));
        await this.page.waitForTimeout(1000);
    }

    async verifyAtK9NotListedInGrid(): Promise<void> {
        const k9 = await this.grid.getGridTableColumnValues(this.uICPAResultTable, 'K9/Handler');
        expect(k9).not.toContain(PoliceData.getK9ModuleValue('K9Handler'));
    }

    async selectAtJuris(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIJurisDropdown, PoliceData.getK9ModuleValue('Juris'));
    }

    async enterAtCallNo(): Promise<void> {
        const callNo = PoliceData.getK9ModuleValue('CallNo');
        await this.uICallYearEdit.fill(callNo.substring(0, 2));
        await this.uICallYearEdit.press('Tab');
        await this.uICallNoEdit.fill(callNo.substring(3));
        await this.uICallNoEdit.press('Tab');
    }

    async enterAtCaseNo(): Promise<void> {
        const caseNo = PoliceData.getK9ModuleValue('CaseNo');
        await this.uICaseYearEdit.fill(caseNo.substring(0, 2));
        await this.uICaseYearEdit.press('Tab');
        await this.uICaseNoEdit.fill(caseNo.substring(3));
        await this.uICaseNoEdit.press('Tab');
    }

    async enterAtFromDate(): Promise<void> {
        await this.uIFromDateEdit.fill(PoliceData.getK9ModuleValue('FromDate'));
    }

    async enterAtToDate(): Promise<void> {
        await this.uIToDateEdit.fill(PoliceData.getK9ModuleValue('ToDate'));
    }

    async enterAtAddress(): Promise<void> {
        await this.uIAddressEdit.fill(PoliceData.getK9ModuleValue('Location'));
    }

    async verifyAtDateInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uICPAResultTable, PoliceData.getK9ModuleValue('DateInGrid'));
        const date = await cell.innerText();
        expect(date).toContain(PoliceData.getK9ModuleValue('FromDate').substring(0, 5));
    }

    async verifyAtK9HandlerInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uICPAResultTable, PoliceData.getK9ModuleValue('K9Handler'));
        const k9handler = await cell.innerText();
        expect(k9handler).toBe(PoliceData.getK9ModuleValue('K9Handler'));
    }

    async verifyAtLocationInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uICPAResultTable, PoliceData.getK9ModuleValue('Location'));
        const location = await cell.innerText();
        expect(location).toBe(PoliceData.getK9ModuleValue('Location'));
    }

    async verifyAtCallNoInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uICPAResultTable, PoliceData.getK9ModuleValue('CallInGrid'));
        const callNumber = await cell.innerText();
        expect(callNumber).toBe(PoliceData.getK9ModuleValue('CallInGrid'));
    }

    async clickCallNoInfoIcon(): Promise<void> {
        await this.uIInfoIcon.click();
        await this.page.waitForLoadState('load');
    }

    async verifyCallNoInfoIconIsDisplayed(): Promise<void> {
        const value = await this.uIInfoIcon.getAttribute('src');
        expect(value).toContain('debug.gif');
    }
}

export class CPAEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uICallNoYearEdit: Locator;
    readonly uICallNoEdit: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIProofingComboBox: Locator;
    readonly uITrainingCheckBox: Locator;
    readonly uIHandlerK9CodeEdit: Locator;
    readonly uIWalkThroughCheckBox: Locator;
    readonly uIPublicDemonstrationCheckBox: Locator;
    readonly uIOtherCheckBox: Locator;
    readonly uILocationActivityEdit: Locator;
    readonly uILocationVerifyCheckBox: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIToTimeEdit: Locator;
    readonly uIToTimeArrow: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIK9OrHandlerDropDown: Locator;
    readonly uITypeActivityDropDown: Locator;
    readonly uIReportingPFNoEdit: Locator;
    readonly uILocationOfActivityInfoButton: Locator;
    readonly uIBottomMessage: Locator;
    readonly uIDeleteIcon: Locator;
    readonly uIResetButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIEnforcementActionTakenEdit: Locator;
    readonly uIDemoNoOfCitizenPresentEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uICallNoYearEdit = page.locator('#nbrCallNo_Year');
        this.uICallNoEdit = page.locator('#nbrCallNo_Number');
        this.uIDateEdit = page.locator('#dttmFrom_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id = 'dttmFromTime_Time']//input");
        this.uIProofingComboBox = page.locator('#cddProofing_DropDown');
        this.uITrainingCheckBox = page.locator('#chkIsTraining');
        this.uIHandlerK9CodeEdit = page.locator('#cddK9nHandler_DropDown');
        this.uIWalkThroughCheckBox = page.locator('#chkWalkThrough');
        this.uIPublicDemonstrationCheckBox = page.locator('#chkPublicDemo');
        this.uIOtherCheckBox = page.locator('#chkOtherActivity');
        this.uILocationActivityEdit = page.locator('#adrLocation_txtFrom');
        this.uILocationVerifyCheckBox = page.locator('#adrLocation_chkVerify');
        this.uIToDateEdit = page.locator('#dttmTo_KPIDttmCtrl');
        this.uIToTimeEdit = page.locator("//table[@id = 'dttmToTime_Time']//input");
        this.uIToTimeArrow = page.locator("//table[@id = 'dttmToTime_Time']//td[@class='igte_BlueThemeButton']");
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIK9OrHandlerDropDown = page.locator('#cddK9nHandler_DropDown');
        this.uITypeActivityDropDown = page.locator('#cddTypeofActivity_DropDown');
        this.uIReportingPFNoEdit = page.locator('#lupOffPFID1_CodeValue');
        this.uILocationOfActivityInfoButton = page.locator('#adrLocation_cmdIncOnAddr');
        this.uIBottomMessage = page.locator("//b[contains(text(),'Successful')]");
        this.uIDeleteIcon = page.locator('#cmdDelete');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIEnforcementActionTakenEdit = page.locator('#txtEnAction');
        this.uIDemoNoOfCitizenPresentEdit = page.locator('#txtNoOfCitizens');
    }

    async tabFromDateTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async selectProofing(): Promise<void> {
        await this.elementHelpers.randomSelectDropDownOption(this.uIProofingComboBox);
        await this.uIProofingComboBox.press('Tab');
    }

    async enterAtHandler(): Promise<void> {
        await this.uIHandlerK9CodeEdit.click();
        await this.elementHelpers.selectDropDownOption(this.uIHandlerK9CodeEdit, PoliceData.getK9ModuleValue('K9Handler'));
    }

    async enterAtTypeActivity(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITypeActivityDropDown, PoliceData.getK9ModuleValue('TypeActivity'));
    }

    async enterAtLocationOfActivity(): Promise<void> {
        await this.uILocationActivityEdit.fill(PoliceData.getK9ModuleValue('LocationOfActivity'));
        await this.uILocationActivityEdit.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async clickLocationVerifyCheckbox(): Promise<void> {
        await this.uILocationVerifyCheckBox.click();
        await this.uILocationVerifyCheckBox.press('Tab');
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForTimeout(1000);
        await this.popup.confirmYes();
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async verifyLocationActivityFontColorAsRed(): Promise<void> {
        const style = await this.uILocationActivityEdit.getAttribute('style') || '';
        expect(style).toContain('color: red');
    }

    async enterToDateTimeAsFutureDate(): Promise<void> {
        await this.uIToDateEdit.click();
        await this.uIToDateEdit.fill(DateHelpers.getFutureDate(2));
        await this.uIToTimeEdit.click();
        await this.uIToTimeEdit.fill(DateHelpers.getCurrentTime());
    }

    async clickTrainingCheckBox(): Promise<void> {
        await this.uITrainingCheckBox.click();
    }

    async verifyLocationActivityFontColorAsBlack(): Promise<void> {
        const style = await this.uILocationActivityEdit.getAttribute('style') || '';
        expect(style).toContain('color: black');
    }

    async selectAtHandlerOrK9(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9OrHandlerDropDown, PoliceData.getK9ModuleValue('K9Handler'));
    }

    async enterToDateAsFutureDateAndClickTimeArrowButton(): Promise<void> {
        await this.uIToDateEdit.fill(DateHelpers.getFutureDate(2));
        await this.uIToTimeArrow.click();
    }

    async selectAtTypeActivity(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITypeActivityDropDown, PoliceData.getK9ModuleValue('TypeActivity'));
    }

    async selectAtProofing(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIProofingComboBox, PoliceData.getK9ModuleValue('Proofing'));
    }

    async enterAtCallNo(): Promise<void> {
        const callNo = PoliceData.getK9ModuleValue('CallNo');
        await this.uICallNoYearEdit.fill(callNo.substring(0, 2));
        await this.uICallNoEdit.fill(callNo.substring(3));
        await this.uICallNoEdit.press('Tab');
    }

    async verifyAtLocationOfActivity(): Promise<void> {
        const text = await this.uILocationActivityEdit.inputValue();
        expect(text).toContain(PoliceData.getK9ModuleValue('LocationOfActivity'));
    }

    async enterAtReportingPFNo(): Promise<void> {
        await this.uIReportingPFNoEdit.fill(PoliceData.getK9ModuleValue('ReportingPFNo'));
        await this.uIReportingPFNoEdit.press('Tab');
    }

    async verifyAtProofing(): Promise<void> {
        const text = await this.uIProofingComboBox.innerText();
        expect(text).toContain(PoliceData.getK9ModuleValue('Proofing'));
    }

    async verifyLocationOfActivityFontAsRedColor(): Promise<void> {
        const attribute = await this.uILocationActivityEdit.getAttribute('style') || '';
        expect(attribute).toContain('red');
    }

    async verifyLocationOfActivityFontAsBlackColor(): Promise<void> {
        const attribute = await this.uILocationActivityEdit.getAttribute('style') || '';
        expect(attribute).toContain('black');
    }

    async clearLocationOfActivity(): Promise<void> {
        await this.uILocationActivityEdit.clear();
    }

    async enterAtLocationOfActivity1(): Promise<void> {
        await this.uILocationActivityEdit.fill(PoliceData.getK9ModuleValue('LocationOfActivity1'));
        await this.uILocationActivityEdit.press('Tab');
    }

    async verifyLocationOfActivityInfoIconIsDisplayed(): Promise<void> {
        await expect(this.uILocationOfActivityInfoButton).toBeVisible();
    }

    async verifyUpdateSuccessfulMsg(): Promise<void> {
        const text = await this.uIBottomMessage.innerText();
        expect(text).toBe('1003 - Update Successful');
        await this.page.waitForTimeout(2000);
    }

    async verifyAdditionSuccessfulMsg(): Promise<void> {
        const text = await this.uIBottomMessage.innerText();
        expect(text).toBe('1002 - Addition Successful');
        await this.page.waitForTimeout(2000);
    }

    async selectHandlerOrK9(): Promise<void> {
        await this.elementHelpers.randomSelectDropDownOption(this.uIK9OrHandlerDropDown);
    }

    async selectTypeActivity(): Promise<void> {
        await this.elementHelpers.randomSelectDropDownOption(this.uITypeActivityDropDown);
    }

    async enterLocationOfActivity(): Promise<void> {
        await this.uILocationActivityEdit.fill('9 Fernwood Rd,1');
    }

    async enterReportingPFNo(): Promise<void> {
        await this.uIReportingPFNoEdit.fill('AUTO');
        await this.uIReportingPFNoEdit.press('Tab');
    }

    async verifyDeleteIconIsDisplayed(): Promise<void> {
        await expect(this.uIDeleteIcon).toBeVisible();
    }

    async verifyDeleteIconNotDisplayed(): Promise<void> {
        await expect(this.uIDeleteIcon).not.toBeVisible();
    }

    async clickDeleteWithConfirmPopup(): Promise<void> {
        await this.uIDeleteIcon.click();
        await expect(this.popup.modalBody).toContainText('(4) Do you really want to delete?');
        await this.popup.confirmYes();
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async clickPrintButton(): Promise<void> {
        await this.uIPrintButton.click();
    }

    async verifyDeleteIconIsEnabled(): Promise<void> {
        await expect(this.uIDeleteIcon).toBeEnabled();
    }

    async verifyDeleteButtonIsDisaplayedUsingControlExist(): Promise<void> {
        await expect(this.uIDeleteIcon).toBeVisible();
    }

    async verifyDeleteButtonIsEnabledUsingControlExist(): Promise<boolean> {
        return await this.uIDeleteIcon.isEnabled().catch(() => false);
    }

    async enterAtEnforcementActionTaken(): Promise<void> {
        await this.uIEnforcementActionTakenEdit.fill(PoliceData.getK9ModuleValue('EnforcementActionTaken'));
    }

    async copyEnforcementActionTaken(): Promise<void> {
        await this.uIEnforcementActionTakenEdit.click();
        await this.page.keyboard.press('Control+a');
        await this.page.keyboard.press('Control+c');
    }

    async pasteDemoNoOfCitizenPresent(): Promise<void> {
        await this.uIDemoNoOfCitizenPresentEdit.click();
        await this.uIDemoNoOfCitizenPresentEdit.clear();
        await this.page.keyboard.press('Control+v');
    }
}

export class K9ReportsSearchPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uISearchButton: Locator;
    readonly uIAddReportButton: Locator;
    readonly uIAddCPAButton: Locator;
    readonly uICallNoYearEdit: Locator;
    readonly uICallNoEdit: Locator;
    readonly uICaseNoYearEdit: Locator;
    readonly uICaseNoEdit: Locator;
    readonly uIHandlerCodeEdit: Locator;
    readonly uISearchResultTable: Locator;
    readonly uIBackButton: Locator;
    readonly uIK9HandlerDropDown: Locator;
    readonly uIVehiclePlate: Locator;
    readonly uIVehicleState: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uIDateFromEdit: Locator;
    readonly uIDateToEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uIApprovalStatusDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uISearchButton = page.locator("//input[@id='btnSearch']");
        this.uIAddReportButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIAddCPAButton = page.locator("//span[contains(text(),'Add CPA')]");
        this.uICallNoYearEdit = page.locator('#nbrCallNo_Year');
        this.uICallNoEdit = page.locator('#nbrCallNo_Number');
        this.uICaseNoYearEdit = page.locator('#nbrIncidentID_Year');
        this.uICaseNoEdit = page.locator('#nbrIncidentID_Number');
        this.uIHandlerCodeEdit = page.locator('#cddK9nHandler_DropDown');
        this.uISearchResultTable = page.locator('#grdK9ReportSearch');
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uIK9HandlerDropDown = page.locator('#cddK9nHandler_DropDown');
        this.uIVehiclePlate = page.locator('#txtPlateNbr');
        this.uIVehicleState = page.locator('#cddState_DropDown');
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uIDateFromEdit = page.locator('#dttmFrom_KPIDttmCtrl');
        this.uIDateToEdit = page.locator('#dttmTo_KPIDttmCtrl');
        this.uIAddressEdit = page.locator('#adrMainAddress_txtFrom');
        this.uIApprovalStatusDropdown = page.locator('#lstReportApprovalStatus');
    }

    async clickAddReport(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIAddReportButton.click();
        await this.page.waitForTimeout(1000);
    }

    async enterAtCaseNo(): Promise<void> {
        const caseNo = PoliceData.getK9ModuleValue('CaseNo');
        await this.uICaseNoYearEdit.click();
        await this.uICaseNoYearEdit.fill(caseNo.substring(0, 2));
        await this.uICaseNoEdit.fill(caseNo.substring(3));
        await this.uICaseNoEdit.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async enterAtCallNo(): Promise<void> {
        const callNo = PoliceData.getK9ModuleValue('CallNo');
        await this.uICallNoYearEdit.fill(callNo.substring(0, 2));
        await this.uICallNoEdit.fill(callNo.substring(3));
        await this.uICallNoEdit.press('Tab');
        await this.uICaseNoEdit.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async enterAtHandler(): Promise<void> {
        await this.uIHandlerCodeEdit.fill(PoliceData.getK9ModuleValue('Handler'));
        await this.uIHandlerCodeEdit.press('Tab');
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtCaseNoUsingHandlerK9(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uISearchResultTable, PoliceData.getK9ModuleValue('K9Handler'), 'Case#');
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getK9ModuleValue('CaseNo'));
    }

    async verifyAtCallNoUsingHandlerK9(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uISearchResultTable, PoliceData.getK9ModuleValue('HandlerK9'), 'Call#');
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getK9ModuleValue('CallNo'));
    }

    async selectAtCaseNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uISearchResultTable, PoliceData.getK9ModuleValue('CaseNo'));
        await this.page.waitForTimeout(1000);
    }

    async clickBack(): Promise<void> {
        await this.uIBackButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtK9HandlerInGrid(rowIndex: number): Promise<void> {
        const handler = await this.grid.getGridCellInnerText(this.uISearchResultTable, 'K9/Handler', rowIndex);
        expect(handler).toBe(PoliceData.getK9ModuleValue('K9Handler'));
    }

    async verifyAtActivityTypeInGrid(rowIndex: number): Promise<void> {
        const activityType = await this.grid.getGridCellInnerText(this.uISearchResultTable, 'Activity Type', rowIndex);
        expect(activityType).toBe(PoliceData.getK9ModuleValue('TypeOfIncident'));
    }

    async verifyAtCallNoInGrid(rowIndex?: number): Promise<void> {
        if (rowIndex !== undefined) {
            const callNo = await this.grid.getGridCellInnerText(this.uISearchResultTable, 'Call#', rowIndex);
            expect(callNo).toBe(PoliceData.getK9ModuleValue('CallNo'));
        } else {
            const cell = await this.grid.getGridCell(this.uISearchResultTable, PoliceData.getK9ModuleValue('CallNo'));
            const text = await cell.innerText();
            expect(text).toBe(PoliceData.getK9ModuleValue('CallNo'));
        }
    }

    async verifyApprovalStatusAsOnHold(rowIndex: number): Promise<void> {
        const status = await this.grid.getGridCellInnerText(this.uISearchResultTable, 'Approval Status', rowIndex);
        expect(status).toBe('On Hold');
    }

    async verifyApprovalStatusAsApproved(rowIndex: number): Promise<void> {
        const status = await this.grid.getGridCellInnerText(this.uISearchResultTable, 'Approval Status', rowIndex);
        expect(status).toBe('Approved');
    }

    async verifyNorecordFoundAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('1011 - No Record Found');
        await this.popup.acknowledgeOk();
    }

    async verifyK9HandlerInactive(): Promise<void> {
        const values = await this.elementHelpers.getDropDownValues(this.uIK9HandlerDropDown);
        const expected = PoliceData.getK9ModuleValue('K9HandlerInactive');
        const found = values.some(v => v.includes(expected));
        expect(found).toBeTruthy();
    }

    async selectAtCallNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uISearchResultTable, PoliceData.getK9ModuleValue('CallNo'));
        await this.page.waitForTimeout(1000);
    }

    async enterAtVehiclePlateAndState(): Promise<void> {
        await this.uIVehiclePlate.fill(PoliceData.getK9ModuleValue('PlateNo'));
        await this.uIVehicleState.fill(PoliceData.getK9ModuleValue('State'));
    }

    async reloadK9ReportsSearchScreen(): Promise<void> {
        await this.page.reload();
        await this.page.waitForTimeout(2000);
    }

    async selectAtK9Handler(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9HandlerDropDown, PoliceData.getK9ModuleValue('K9Handler'));
    }

    async selectAtCallNoInGrid1(): Promise<void> {
        await this.grid.selectRowByCellText(this.uISearchResultTable, PoliceData.getK9ModuleValue('CallNo1'));
        await this.page.waitForTimeout(1000);
    }

    async selectByCallNoInGrid(callno1: string): Promise<void> {
        await this.grid.selectRowByCellText(this.uISearchResultTable, callno1);
        await this.page.waitForTimeout(1000);
    }

    async selectRandomRowInGrid(): Promise<void> {
        await this.grid.selectRandomRow(this.uISearchResultTable);
    }

    async verifyTheDatesAsDescendingOrderInGrid(): Promise<void> {
        const values = await this.grid.getGridTableColumnValues(this.uISearchResultTable, 'Date/Time');
        for (let i = 0; i < values.length - 1; i++) {
            const date1 = new Date(values[i]);
            const date2 = new Date(values[i + 1]);
            expect(date1.getTime()).toBeGreaterThanOrEqual(date2.getTime());
        }
    }

    async selectAtJuris(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIJurisDropdown, PoliceData.getK9ModuleValue('Juris'));
    }

    async enterAtDateFrom(): Promise<void> {
        await this.uIDateFromEdit.fill(PoliceData.getK9ModuleValue('FromDate'));
    }

    async enterAtDateTo(): Promise<void> {
        await this.uIDateToEdit.fill(PoliceData.getK9ModuleValue('ToDate'));
    }

    async enterAtAddress(): Promise<void> {
        await this.uIAddressEdit.fill(PoliceData.getK9ModuleValue('Address'));
    }

    async selectAtApprovalStatus(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIApprovalStatusDropdown, PoliceData.getK9ModuleValue('ApprovalStatus'));
    }

    async verifyDateBetweenFromAndToDatesInGrid(fromDate: string, toDate: string): Promise<void> {
        const values = await this.grid.getGridTableColumnValues(this.uISearchResultTable, 'Date/Time');
        const start = new Date(fromDate);
        const end = new Date(toDate);
        for (const val of values) {
            const d = new Date(val);
            expect(d.getTime()).toBeGreaterThanOrEqual(start.getTime());
            expect(d.getTime()).toBeLessThanOrEqual(end.getTime());
        }
    }

    async verifyAtCaseNoInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uISearchResultTable, PoliceData.getK9ModuleValue('CaseNo'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getK9ModuleValue('CaseNo'));
    }

    async verifyAtLocationInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uISearchResultTable, PoliceData.getK9ModuleValue('Address'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getK9ModuleValue('Address'));
    }

    async verifyAtApprovalStatusInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uISearchResultTable, PoliceData.getK9ModuleValue('ApprovalStatusInGrid'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getK9ModuleValue('ApprovalStatusInGrid'));
    }

    async enterAtVehiclePlate(jsonKeyIndex: number): Promise<void> {
        await this.uIVehiclePlate.fill(PoliceData.getK9ModuleValue('PlateNo' + jsonKeyIndex));
    }

    async selectAtState(jsonKeyIndex: number): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIVehicleState, PoliceData.getK9ModuleValue('State' + jsonKeyIndex));
    }

    async verifyVehicleIsBlank(): Promise<void> {
        const text = await this.uIVehiclePlate.inputValue();
        expect(text.trim()).toBe('');
    }

    async taboutVehicle(): Promise<void> {
        await this.uIVehiclePlate.press('Tab');
    }

    async verifyAtRowCount(rowCount: number): Promise<void> {
        const count = await this.grid.getRowCount(this.uISearchResultTable);
        expect(count).toBeGreaterThan(rowCount);
    }

    async pressEnterkey(): Promise<void> {
        await this.uIVehicleState.press('Enter');
    }

    async verifyAtVehicle(jsonKeyIndex: number): Promise<void> {
        const text = await this.uIVehiclePlate.inputValue();
        expect(text).toBe(PoliceData.getK9ModuleValue('vehicle' + jsonKeyIndex));
    }
}

export class ReportEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly grid: GridHelpers;

    readonly uICallNoYearEdit: Locator;
    readonly uICallNoEdit: Locator;
    readonly uICaseNoYearEdit: Locator;
    readonly uICaseNoEdit: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIHandlerK9CodeEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uITypeOfIncidentComboBox: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uICallNoinfoIcon: Locator;
    readonly uIK9HandlerDropdown: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uIDetailsTab: Locator;
    readonly uIDetectionTab: Locator;
    readonly uIPreventiveActionTab: Locator;
    readonly uINamesTab: Locator;
    readonly uISearchTab: Locator;
    readonly uITrackingTab: Locator;
    readonly uINarrativeTab: Locator;
    readonly uIApprovalTabTab: Locator;
    readonly uIAttachmentTab: Locator;
    readonly uIQAFormTabSpan: Locator;
    readonly uIreportStatus: Locator;
    readonly uIApprovalTabTabFrame: Locator;
    readonly uIQaFormsFrame: Locator;
    readonly uIDeleteIcon: Locator;
    readonly uIAddressIcon: Locator;
    readonly uIDescribeArea: Locator;
    readonly uIFooterStatusBar: Locator;
    readonly uIResetButton: Locator;
    readonly uIAttachmentTabFrame: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIAddressCheckBox: Locator;
    readonly uIDispatchEnvironmentAtTheTimeOfTheCallIcon: Locator;
    readonly uIQAFormsTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.grid = new GridHelpers(page);

        this.uICallNoYearEdit = page.locator('#nbrCallNo_Year');
        this.uICallNoEdit = page.locator('#nbrCallNo_Number');
        this.uICaseNoYearEdit = page.locator('#nbrIncidentID_Year');
        this.uICaseNoEdit = page.locator('#nbrIncidentID_Number');
        this.uIDateEdit = page.locator('#dttmRptDtm_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id = 'dttmRptDtm_Time']//input");
        this.uIHandlerK9CodeEdit = page.locator('#lupOffPFID_CodeValue');
        this.uIAddressEdit = page.locator('#adrMainAddress_txtFrom');
        this.uITypeOfIncidentComboBox = page.locator('#drpTypeInc_DropDown');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uICallNoinfoIcon = page.locator('#nbrCallNo_imgBtn');
        this.uIK9HandlerDropdown = page.locator('#cddK9nHandler_DropDown');
        this.uILeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIDetailsTab = page.locator("//span[contains(text(),'Details')]");
        this.uIDetectionTab = page.locator("//span[contains(text(),'Detection')]");
        this.uIPreventiveActionTab = page.locator("//span[contains(text(),'Preventive Action')]");
        this.uINamesTab = page.locator("(//span[contains(text(),'Names')])[2]");
        this.uISearchTab = page.locator("//span[contains(text(),'Search')]");
        this.uITrackingTab = page.locator("//span[contains(text(),'Tracking')]");
        this.uINarrativeTab = page.locator("//span[contains(text(),'Narrative')]");
        this.uIApprovalTabTab = page.locator("//span[contains(text(),'Approval')]");
        this.uIAttachmentTab = page.locator("//span[contains(text(),'Attachment')]");
        this.uIQAFormTabSpan = page.locator("//span[contains(text(),'QA Forms')]");
        this.uIreportStatus = page.locator('#lblApprovalStatus');
        this.uIApprovalTabTabFrame = page.locator("(//iframe[contains(@src,'frmPnxGlobalApproval')])[2]");
        this.uIQaFormsFrame = page.locator("(//iframe[contains(@src,'frmQuestionnaire')])[2]");
        this.uIDeleteIcon = page.locator('#cmdDelete');
        this.uIAddressIcon = page.locator('#adrMainAddress_cmdIncOnAddr');
        this.uIDescribeArea = page.locator('#tabCE_tmpl0_usrK9Details1_txtDescription');
        this.uIFooterStatusBar = page.locator("//td[@class = 'statusBar']");
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIAttachmentTabFrame = page.locator("//iframe[contains(@src,'frmTxtAttachMgrEx')]");
        this.uIPrintIcon = page.locator('#cmdPrint');
        this.uIAddressCheckBox = page.locator('#adrMainAddress_chkVerify');
        this.uIDispatchEnvironmentAtTheTimeOfTheCallIcon = page.locator('#nbrCallNo_imgRcptBtn');
        this.uIQAFormsTab = page.locator("//span[@class='igtab_BlueThemeTHTab' ]//span[text()='QA Forms']");
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async verifySaveFunctionalityDisabled(): Promise<void> {
        await expect(this.uISaveButton).toBeDisabled();
        await expect(this.uISaveAndCloseButton).toBeDisabled();
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async enterAtHandlerK9(): Promise<void> {
        await this.uIHandlerK9CodeEdit.fill(PoliceData.getK9ModuleValue('HandlerK9'));
        await this.uIHandlerK9CodeEdit.press('Tab');
    }

    async selectAtK9Handler(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9HandlerDropdown, PoliceData.getK9ModuleValue('K9Handler'));
        await this.uIK9HandlerDropdown.press('Tab');
    }

    async selectAtTypeOfIncident(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITypeOfIncidentComboBox, PoliceData.getK9ModuleValue('TypeOfIncident'));
        await this.uITypeOfIncidentComboBox.press('Tab');
    }

    async enterAtCallNo(): Promise<void> {
        const callNo = PoliceData.getK9ModuleValue('CallNo');
        await this.uICallNoYearEdit.fill(callNo.substring(0, 2));
        await this.uICallNoEdit.fill(callNo.substring(3));
        await this.uICallNoEdit.press('Tab');
    }

    async verifyAtAddress(): Promise<void> {
        const val = await this.uIAddressEdit.inputValue();
        expect(val).toContain(PoliceData.getK9ModuleValue('Address'));
    }

    async tabDateTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async readDate(): Promise<string> {
        return await this.uIDateEdit.inputValue();
    }

    async readTime(): Promise<string> {
        return await this.uITimeEdit.inputValue();
    }

    async clickCallInfoIcon(): Promise<void> {
        await this.uICallNoinfoIcon.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyDateTimaAsReportedDateTime(reportedDate: string, reportedTime: string): Promise<void> {
        expect(await this.uIDateEdit.inputValue()).toBe(reportedDate);
        expect(await this.uITimeEdit.inputValue()).toBe(reportedTime);
    }

    async verifyAtDateTimeAsReportedDateTime(): Promise<void> {
        expect(await this.uIDateEdit.inputValue()).toBe(PoliceData.getK9ModuleValue('Date'));
        expect(await this.uITimeEdit.inputValue()).toBe(PoliceData.getK9ModuleValue('Time'));
    }

    async selectTypeOfIncident(): Promise<void> {
        await this.elementHelpers.randomSelectDropDownOption(this.uITypeOfIncidentComboBox);
        await this.uITypeOfIncidentComboBox.press('Tab');
    }

    async verifyAtCallNo(callNo?: string): Promise<void> {
        const expected = callNo || PoliceData.getK9ModuleValue('CallNo');
        expect(await this.uICallNoYearEdit.inputValue()).toBe(expected.substring(0, 2));
        expect(await this.uICallNoEdit.inputValue()).toBe(expected.substring(3));
    }

    async verifyAtCaseNo(caseNo: string): Promise<void> {
        expect(await this.uICaseNoYearEdit.inputValue()).toBe(caseNo.substring(0, 2));
        expect(await this.uICaseNoEdit.inputValue()).toBe(caseNo.substring(3));
    }

    async VerifyAdditionSuccessfulMessage(): Promise<void> {
        const updateMessage = await this.uILeftSideStatusBar.innerText();
        expect(updateMessage).toBe('1002 - Addition Successful');
        await this.page.waitForTimeout(2000);
    }

    async VerifyUpdateSuccessfulMessage(): Promise<void> {
        const updateMessage = await this.uILeftSideStatusBar.innerText();
        expect(updateMessage).toBe('1003 - Update Successful');
        await this.page.waitForTimeout(2000);
    }

    async verifyK9HandlerFieldDisabled(): Promise<void> {
        await expect(this.uIK9HandlerDropdown).toBeDisabled();
    }

    async verifyAtK9Handler(): Promise<void> {
        const selected = await this.elementHelpers.getDropDownSelectedItem(this.uIK9HandlerDropdown);
        expect(selected).toBe(PoliceData.getK9ModuleValue('K9Handler'));
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyRequiredEntriesMissingAknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1018) Required Entries are Missing - Detection Type');
        await this.popup.acknowledgeOk();
    }

    async clickOnDetectionTab(): Promise<void> {
        await this.uIDetectionTab.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnNamesTab(): Promise<void> {
        await this.uINamesTab.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnPreventiveActionTab(): Promise<void> {
        await this.uIPreventiveActionTab.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnSearchTab(): Promise<void> {
        await this.uISearchTab.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOnTrackingTab(): Promise<void> {
        await this.uITrackingTab.click();
        await this.page.waitForTimeout(1000);
    }

    async switchToNarrativeTab(): Promise<void> {
        await this.uINarrativeTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmTextMgrEx');
        await this.page.waitForTimeout(1000);
    }

    async switchToQAFormsTab(): Promise<void> {
        await this.uIQAFormTabSpan.click();
        new BrowserHelpers(this.page).switchToFrame('frmQuestionnaire');
        await this.page.waitForTimeout(1000);
    }

    async clickOnApprovalTab(): Promise<void> {
        await this.uIApprovalTabTab.click();
        await this.page.waitForTimeout(1000);
        new BrowserHelpers(this.page).switchToFrame('frmPnxGlobalApproval');
    }

    async verifyReportStatusAsOnHold(): Promise<void> {
        expect(await this.uIreportStatus.innerText()).toBe('On Hold');
    }

    async verifyReportStatusAsSubmitted(): Promise<void> {
        expect(await this.uIreportStatus.innerText()).toBe('Submitted');
    }

    async verifyReportStatusAsApproved(): Promise<void> {
        expect(await this.uIreportStatus.innerText()).toBe('Approved');
    }

    async clickDeleteIcon(): Promise<void> {
        await this.uIDeleteIcon.click();
    }

    async verifyDoyouWantToDeleteConfirmPopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(4) Do you really want to delete?');
        await this.popup.confirmYes();
    }

    async verifyDoyouSaveConfirmPopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(3)Do You Want To Save All Of The Entered Details?');
        await this.popup.confirmYes();
    }

    async ClickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async verifyAtAddressIsUnverified(): Promise<void> {
        const color = await this.uIAddressEdit.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgb(255, 0, 0)');
    }

    async selectAtTypeOfIncidentWithPopup(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITypeOfIncidentComboBox, PoliceData.getK9ModuleValue('TypeOfIncident'));
        await this.uITypeOfIncidentComboBox.press('Tab');
        await this.uITypeOfIncidentComboBox.click();
        await expect(this.popup.modalBody).toContainText('(5100)The entered address is not found in the RMS Geo database');
        await this.popup.confirmNo();
    }

    async verifyaddressIsnotNull(): Promise<void> {
        const text = await this.uIAddressEdit.inputValue();
        expect(text.trim()).not.toBe('');
    }

    async verifyCallInfoIconIsDisplayed(): Promise<void> {
        await expect(this.uICallNoinfoIcon).toBeVisible();
    }

    async verifyAddressInfoIconIsDisplayed(): Promise<void> {
        await expect(this.uIAddressIcon).toBeVisible();
    }

    async verifyDetectionTypeAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1018) Required Entries are Missing - Detection Type');
        await this.popup.acknowledgeOk();
    }

    async getK9HandlerDropdownOptionsCount(): Promise<number> {
        return await this.uIK9HandlerDropdown.locator('option').count();
    }

    async getK9HandlerDropdownOptions(): Promise<string[]> {
        return await this.elementHelpers.getDropDownValues(this.uIK9HandlerDropdown);
    }

    async verifyTheCountsofDropDown(a: any, b: any): Promise<void> {
        expect(a).not.toEqual(b);
    }

    async verifyK9HandlerInactive(): Promise<void> {
        const values = await this.elementHelpers.getDropDownValues(this.uIK9HandlerDropdown);
        const found = values.some(val => val.includes(PoliceData.getK9ModuleValue('K9HandlerInactive')));
        expect(found).toBeTruthy();
    }

    async verifyAtK9HandlerInactive(): Promise<void> {
        const selected = await this.elementHelpers.getDropDownSelectedItem(this.uIK9HandlerDropdown);
        expect(selected).toContain('##' + PoliceData.getK9ModuleValue('K9Handler'));
    }

    async EnterTextInDescribeArea(): Promise<void> {
        await this.uIDescribeArea.fill('Hello Automation testing');
    }

    async verifyStatusBarMessageAsEmpty(): Promise<void> {
        const text = await this.uIFooterStatusBar.innerText();
        expect(text.trim()).toBe('');
    }

    async verify1051UpdatedDataExistsAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1051) Updated data exists in the Narrative Tab. You must save or reset.');
        await this.popup.acknowledgeOk();
    }

    async clickAllTabs(): Promise<void> {
        await this.uIDetailsTab.click();
        await this.uIDetectionTab.click();
        await this.uINamesTab.click();
        await this.uIPreventiveActionTab.click();
        await this.uISearchTab.click();
        await this.uITrackingTab.click();
        await this.uINarrativeTab.click();
        await this.uIAttachmentTab.click();
        await this.uIQAFormTabSpan.click();
        await this.uIApprovalTabTab.click();
    }

    async clickAllTabsBeforeSave(): Promise<void> {
        await this.uIDetailsTab.click();
        await this.uIDetectionTab.click();
        await this.uINamesTab.click();
        await this.uIPreventiveActionTab.click();
        await this.uISearchTab.click();
        await this.uITrackingTab.click();
    }

    async verifyAtTypeOfIncident(): Promise<void> {
        const dropDownSelectedItem = await this.elementHelpers.getDropDownSelectedItem(this.uITypeOfIncidentComboBox);
        expect(dropDownSelectedItem).toBe(PoliceData.getK9ModuleValue('TypeOfIncident'));
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async clickOnAttachmentTab(): Promise<void> {
        await this.uIAttachmentTab.click();
        await this.page.waitForTimeout(1000);
        new BrowserHelpers(this.page).switchToFrame('frmTxtAttachMgrEx');
    }

    async enterCallNo(): Promise<void> {
        await this.uICallNoYearEdit.fill('22');
        await this.uICallNoEdit.fill(RandomHelpers.enterRandomNumbers(1));
        await this.uICallNoEdit.press('Tab');
    }

    async selectK9Handler(): Promise<void> {
        await this.elementHelpers.randomSelectDropDownOption(this.uIK9HandlerDropdown);
        await this.uIK9HandlerDropdown.press('Tab');
    }

    async verifyDeleteIconIsDisplayed(): Promise<void> {
        await expect(this.uIDeleteIcon).toBeVisible();
    }

    async enterCallNo1(callno: string): Promise<void> {
        await this.uICallNoYearEdit.fill(callno.substring(0, 2));
        await this.uICallNoEdit.fill(callno.substring(3));
        await this.uICallNoEdit.press('Tab');
    }

    async verifyReportStatusAsReportDue(): Promise<void> {
        expect(await this.uIreportStatus.innerText()).toBe('Report Due');
    }

    async clickDetailsTab(): Promise<void> {
        await this.uIDetailsTab.click();
    }

    async verifyAddressIsUnVerified(): Promise<void> {
        const color = await this.uIAddressEdit.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgb(255, 0, 0)');
    }

    async verifyAddresscheckboxIsUnchecked(): Promise<void> {
        await expect(this.uIAddressCheckBox).not.toBeChecked();
    }

    async verifyAddressIsVerified(): Promise<void> {
        const color = await this.uIAddressEdit.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgb(0, 0, 0)');
    }

    async verifyAddresscheckboxIschecked(): Promise<void> {
        await expect(this.uIAddressCheckBox).toBeChecked();
    }

    async verifyDispatchEnvironmentAtTheTimeOfTheCallIconDisplayed(): Promise<void> {
        await expect(this.uIDispatchEnvironmentAtTheTimeOfTheCallIcon).toBeVisible();
    }

    async clickDispatchEnvironmentAtTheTimeOfTheCallIcon(): Promise<void> {
        await this.uIDispatchEnvironmentAtTheTimeOfTheCallIcon.click();
    }

    async verifyApprovalTabIsEnable(): Promise<void> {
        await expect(this.uIApprovalTabTab).toBeEnabled();
    }

    async verifyDetailsTabIsDisplayed(): Promise<void> {
        await expect(this.uIDetailsTab).toBeVisible();
    }

    async verifyDetectionTabIsDisplayed(): Promise<void> {
        await expect(this.uIDetectionTab).toBeVisible();
    }

    async verifyNamesTabIsDisplayed(): Promise<void> {
        await expect(this.uINamesTab).toBeVisible();
    }

    async verifyPreventiveActionTabIsDisplayed(): Promise<void> {
        await expect(this.uIPreventiveActionTab).toBeVisible();
    }

    async verifySearchTabIsDisplayed(): Promise<void> {
        await expect(this.uISearchTab).toBeVisible();
    }

    async verifyTrackingTabIsDisplayed(): Promise<void> {
        await expect(this.uITrackingTab).toBeVisible();
    }

    async verifyNarrativeTabIsDisplayed(): Promise<void> {
        await expect(this.uINarrativeTab).toBeVisible();
    }

    async verifyAttachmentTabIsDisplayed(): Promise<void> {
        await expect(this.uIAttachmentTab).toBeVisible();
    }

    async verifyQAFormsTabIsDisplayed(): Promise<void> {
        await expect(this.uIQAFormsTab).toBeVisible();
    }

    async verifyApprovalTabIsDisplayed(): Promise<void> {
        await expect(this.uIApprovalTabTab).toBeVisible();
    }

    async verify8EnterMandatoryDataAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8) Enter mandatory data');
        await this.popup.acknowledgeOk();
    }

    async clearCallNo(): Promise<void> {
        await this.uICallNoYearEdit.clear();
        await this.uICallNoEdit.clear();
    }
}

export class ReportEntryDetectionTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIDetectionTypeInput: Locator;
    readonly uIDetectionTypeRadDropDown: Locator;
    readonly uIDetectionTypeArrowButton: Locator;
    readonly uIExplosiveDetectionTypeDropDown: Locator;
    readonly uIFireArmsDetectionTypeDropDown: Locator;
    readonly uIDetectionTypeLabel: Locator;
    readonly uIVehiclePlateNumberEdit: Locator;
    readonly uIVehicleStateCombobox: Locator;
    readonly uIVehicleInfoIcon: Locator;
    readonly uIBurriedEdit: Locator;
    readonly uIAmountEdit: Locator;
    readonly uILocationEdit: Locator;
    readonly uISpecifyEdit: Locator;
    readonly uIPackagingOrContainerDropDown: Locator;
    readonly uINumberOfLockerEdit: Locator;
    readonly uIOtherAreasCheckedEdit: Locator;
    readonly uIpositiveFinalTrainedResponseDropDown: Locator;
    readonly uIObservedBehaviouralDropDownInput: Locator;
    readonly uIObservedBehaviouralDropDownArrow: Locator;
    readonly uIObservedBehaviouralDropDown: Locator;
    readonly uISuspectedNarcoticesLocatedDropDown: Locator;
    readonly uINarcoticsDetectionTypeDropDownArrow: Locator;
    readonly uINarcoticsDetectionTypeDropDown: Locator;
    readonly uINarcoticsDetectionIfOther: Locator;
    readonly uILocationOfSuspectedNarcoticsEdit: Locator;
    readonly uISuspectedExplosivesLocatedDropDown: Locator;
    readonly uIExplosiveDetectionIfOtherEdit: Locator;
    readonly uISuspectedFireArmsLocatedDropdown: Locator;
    readonly uIFireArmsDetectionIfOtherEdit: Locator;
    readonly uILocationOfSuspectedFireArmsEdit: Locator;
    readonly uICommentsEdit: Locator;
    readonly uISchoolSweepCheckBox: Locator;
    readonly uIElevationEdit: Locator;
    readonly uIAmountDropDown: Locator;
    readonly uIIfOtherEdit: Locator;
    readonly uINarcoticsDetectionDropDownArrow: Locator;
    readonly uINarcoticsDetectionDropDown: Locator;
    readonly uIExplosiveDetectionLocationOfSuspectedExplosiveEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIDetectionTypeInput = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_cddDetectionType_Input');
        this.uIDetectionTypeRadDropDown = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_cddDetectionType_DropDown');
        this.uIDetectionTypeArrowButton = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_cddDetectionType_Arrow');
        this.uIExplosiveDetectionTypeDropDown = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_cddSuspecttype_DropDown');
        this.uIFireArmsDetectionTypeDropDown = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_cddFirearmsDetType_DropDown');
        this.uIDetectionTypeLabel = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_lblDetectionType');
        this.uIVehiclePlateNumberEdit = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_plcVehicle_PlateNumber');
        this.uIVehicleStateCombobox = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_plcVehicle_KPIState');
        this.uIVehicleInfoIcon = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_plcVehicle_imgBtn');
        this.uIBurriedEdit = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_txtBurried');
        this.uIAmountEdit = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_txtCost');
        this.uILocationEdit = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_txtDetLocation');
        this.uISpecifyEdit = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_txtSpecify');
        this.uIPackagingOrContainerDropDown = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_cddContainer_DropDown');
        this.uINumberOfLockerEdit = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_txtNoOfLockers');
        this.uIOtherAreasCheckedEdit = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_txtOtherAreaschk');
        this.uIpositiveFinalTrainedResponseDropDown = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_cddResponse_DropDown');
        this.uIObservedBehaviouralDropDownInput = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_cddObsBeh_Input');
        this.uIObservedBehaviouralDropDownArrow = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_cddObsBeh_Arrow');
        this.uIObservedBehaviouralDropDown = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_cddObsBeh_DropDown');
        this.uISuspectedNarcoticesLocatedDropDown = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_cddSuspected_DropDown');
        this.uINarcoticsDetectionTypeDropDownArrow = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_cddType_Arrow');
        this.uINarcoticsDetectionTypeDropDown = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_cddType_DropDown');
        this.uINarcoticsDetectionIfOther = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_txtTypeOther');
        this.uILocationOfSuspectedNarcoticsEdit = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_txtLocation');
        this.uISuspectedExplosivesLocatedDropDown = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_cddSuspectedLoc_DropDown');
        this.uIExplosiveDetectionIfOtherEdit = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_txtExplosivesOthers');
        this.uISuspectedFireArmsLocatedDropdown = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_cddFirearmsDet_DropDown');
        this.uIFireArmsDetectionIfOtherEdit = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_txtFirearmsOthers');
        this.uILocationOfSuspectedFireArmsEdit = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_txtLocFirearms');
        this.uICommentsEdit = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_txtComments');
        this.uISchoolSweepCheckBox = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_chkSchoolSweep');
        this.uIElevationEdit = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_txtElevation');
        this.uIAmountDropDown = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_cddAmount_DropDown');
        this.uIIfOtherEdit = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_txtOthers');
        this.uINarcoticsDetectionDropDownArrow = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_cddType_Arrow');
        this.uINarcoticsDetectionDropDown = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_cddType_DropDown');
        this.uIExplosiveDetectionLocationOfSuspectedExplosiveEdit = page.locator('#tabCE_tmpl1_UsrNarcoticsDetection1_txtLocationExp');
    }

    async selectAtDetectionType(): Promise<void> {
        await this.uIDetectionTypeInput.click();
        await this.elementHelpers.selectRadControlDropDownValue(this.uIDetectionTypeArrowButton, this.uIDetectionTypeRadDropDown, PoliceData.getK9ModuleValue('DetectionType'));
        await this.uIDetectionTypeInput.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async selectDetectionTypeAsCheckAll(): Promise<void> {
        await this.uIDetectionTypeArrowButton.click();
        await this.uIDetectionTypeRadDropDown.locator('li', { hasText: 'Check All' }).click();
        await this.uIDetectionTypeArrowButton.click();
        await this.uIDetectionTypeInput.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async verifyDetectionTypeDefaultSelectedAsOthers(): Promise<void> {
        const value = await this.uIDetectionTypeInput.inputValue();
        expect(value).toBe('Others');
    }

    async verifyDetectionTypeIsNotMandatory(): Promise<void> {
        const DetectionColor = await this.uIDetectionTypeLabel.evaluate(el => getComputedStyle(el).color);
        expect(DetectionColor).toBe(PoliceData.getK9ModuleValue('Color'));
    }

    async verifyCodeIDInExplosiveDetectionType(): Promise<void> {
        const options = await this.elementHelpers.getDropDownValues(this.uIExplosiveDetectionTypeDropDown);
        const expected = PoliceData.getK9ModuleValue('ExplosiveCodeID');
        expect(options.some(opt => opt.includes(expected))).toBeTruthy();
    }

    async verifyCodeIDInFireArmsDetectionType(): Promise<void> {
        const options = await this.elementHelpers.getDropDownValues(this.uIFireArmsDetectionTypeDropDown);
        const expected = PoliceData.getK9ModuleValue('FireArmsCodeID');
        expect(options.some(opt => opt.includes(expected))).toBeTruthy();
    }

    async verifyAtDetectionType(): Promise<void> {
        const value = await this.uIDetectionTypeInput.inputValue();
        expect(value).toBe(PoliceData.getK9ModuleValue('DetectionType'));
    }

    async enterAtVehiclePlateAndState(): Promise<void> {
        await this.uIVehiclePlateNumberEdit.fill(PoliceData.getK9ModuleValue('PlateNo'));
        await this.uIVehicleStateCombobox.fill(PoliceData.getK9ModuleValue('State'));
        await this.uIVehicleStateCombobox.press('Tab');
    }

    async verifyVehicleInfoIcon(): Promise<void> {
        await expect(this.uIVehicleInfoIcon).toBeVisible();
    }

    async enterAtBurried(): Promise<void> {
        await this.uIBurriedEdit.fill(PoliceData.getK9ModuleValue('Burried'));
    }

    async verifyBurriedFieldAllowsMaxLengthOf7Char(): Promise<void> {
        expect(await this.uIBurriedEdit.getAttribute('maxlength')).toBe('7');
    }

    async verifyAtBurried(): Promise<void> {
        expect(await this.uIBurriedEdit.inputValue()).toBe(PoliceData.getK9ModuleValue('Burried'));
    }

    async clickPlateSearchLookupIcon(): Promise<void> {
        await this.uIVehicleInfoIcon.click();
    }

    async verifyDollorSymbolNotDisplayedInAmount(): Promise<void> {
        const val = await this.uIAmountEdit.inputValue();
        expect(val).not.toContain('$');
    }

    async verifyAtAmountWithDecimalPoint(): Promise<void> {
        const attribute = await this.uIAmountEdit.inputValue();
        expect(attribute).toBe(PoliceData.getK9ModuleValue('Amount'));
    }

    async verifyAtVehiclePlate(): Promise<void> {
        const plateNo = await this.uIVehiclePlateNumberEdit.inputValue();
        const state = await this.uIVehicleStateCombobox.inputValue();
        expect(plateNo).toBe(PoliceData.getK9ModuleValue('PlateNo'));
        expect(state).toBe(PoliceData.getK9ModuleValue('State').substring(0, 2));
    }

    async enterAtLocation(): Promise<void> {
        await this.uILocationEdit.fill(PoliceData.getK9ModuleValue('Location'));
    }

    async enterAtSpecify(): Promise<void> {
        await this.uISpecifyEdit.fill(PoliceData.getK9ModuleValue('Specify'));
    }

    async copyLocationText(): Promise<void> {
        await this.uILocationEdit.click();
        await this.page.keyboard.press('Control+A');
        await this.page.keyboard.press('Control+C');
    }

    async pasteInBurried(): Promise<void> {
        await this.uIBurriedEdit.click();
        await this.page.keyboard.press('Control+V');
    }

    async verifyBurriedIsNull(): Promise<void> {
        const val = await this.uIBurriedEdit.inputValue();
        expect(val.trim()).toBe('');
    }

    async copySpecifyText(): Promise<void> {
        await this.uISpecifyEdit.click();
        await this.page.keyboard.press('Control+A');
        await this.page.keyboard.press('Control+C');
    }

    async selectAtPackagingOrContainer(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIPackagingOrContainerDropDown, PoliceData.getK9ModuleValue('PackagingOrContainer'));
    }

    async clickSchoolSweepcheckBox(): Promise<void> {
        await this.uISchoolSweepCheckBox.click();
    }

    async enterAtNumberOFLocker(): Promise<void> {
        await this.uINumberOfLockerEdit.fill(PoliceData.getK9ModuleValue('PackagingOrContainer'));
    }

    async enterAtOtherAreasChecked(): Promise<void> {
        await this.uIOtherAreasCheckedEdit.fill(PoliceData.getK9ModuleValue('OtherAreasChecked'));
    }

    async enterAtElevation(): Promise<void> {
        await this.uIElevationEdit.fill(PoliceData.getK9ModuleValue('Elevation'));
    }

    async enterAtAmount(): Promise<void> {
        await this.uIAmountEdit.fill(PoliceData.getK9ModuleValue('Amount'));
    }

    async selectAtAmountType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIAmountDropDown, PoliceData.getK9ModuleValue('AmountType'));
    }

    async selectAtpositiveFinalTrainedResponse(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIpositiveFinalTrainedResponseDropDown, PoliceData.getK9ModuleValue('positiveFinalTrainedResponse'));
    }

    async selectAtObservedBehavioural(): Promise<void> {
        await this.uIObservedBehaviouralDropDownInput.click();
        await this.elementHelpers.selectRadControlDropDownValue(this.uIObservedBehaviouralDropDownArrow, this.uIObservedBehaviouralDropDown, PoliceData.getK9ModuleValue('ObservedBehavioural'));
        await this.uIObservedBehaviouralDropDownArrow.click();
    }

    async enterAtIfOther(): Promise<void> {
        await this.uIIfOtherEdit.fill(PoliceData.getK9ModuleValue('IfOther'));
    }

    async selectAtSuspectedNarcoticesLocated(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uISuspectedNarcoticesLocatedDropDown, PoliceData.getK9ModuleValue('SuspectedNarcoticesLocated'));
    }

    async selectAtNarcoticsDetectionType(): Promise<void> {
        await this.uINarcoticsDetectionDropDownArrow.click();
        await this.elementHelpers.selectRadControlDropDownValue(this.uINarcoticsDetectionDropDownArrow, this.uINarcoticsDetectionTypeDropDown, PoliceData.getK9ModuleValue('NarcoticsDetectionType'));
        await this.uINarcoticsDetectionDropDownArrow.click();
    }

    async enterAtNarcoticsDetectionIfOther(): Promise<void> {
        await this.uINarcoticsDetectionIfOther.fill(PoliceData.getK9ModuleValue('NarcoticsDetectionIfOther'));
    }

    async enterAtLocationOfSuspectedNarcotics(): Promise<void> {
        await this.uILocationOfSuspectedNarcoticsEdit.fill(PoliceData.getK9ModuleValue('LocationOfSuspectedNarcotics'));
    }

    async selectAtSuspectedExplosivesLocated(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uISuspectedExplosivesLocatedDropDown, PoliceData.getK9ModuleValue('SuspectedExplosivesLocated'));
    }

    async selectAtExplosiveDetectionTypeDropDown(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIExplosiveDetectionTypeDropDown, PoliceData.getK9ModuleValue('ExplosiveDetectionType'));
    }

    async enterAtExplosiveDetectionIfOther(): Promise<void> {
        await this.uIExplosiveDetectionIfOtherEdit.fill(PoliceData.getK9ModuleValue('ExplosiveDetectionIfOther'));
    }

    async enterAtExplosiveDetectionLocationOfSuspectedExplosive(): Promise<void> {
        await this.uIExplosiveDetectionLocationOfSuspectedExplosiveEdit.fill(PoliceData.getK9ModuleValue('ExplosiveDetectionLocationOfSuspectedExplosive'));
    }

    async selectAtSuspectedFireArmsLocatedDropdown(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uISuspectedFireArmsLocatedDropdown, PoliceData.getK9ModuleValue('SuspectedFireArmsLocatedDropdown'));
    }

    async selectAtFireArmsDetectionTypeDropdown(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIFireArmsDetectionTypeDropDown, PoliceData.getK9ModuleValue('FireArmsDetectionType'));
    }

    async enterAtFireArmsDetectionIfOther(): Promise<void> {
        await this.uIFireArmsDetectionIfOtherEdit.fill(PoliceData.getK9ModuleValue('FireArmsDetectionIfOther'));
    }

    async enterAtLocationOfSuspectedFireArms(): Promise<void> {
        await this.uILocationOfSuspectedFireArmsEdit.fill(PoliceData.getK9ModuleValue('LocationOfSuspectedFireArms'));
    }
}

export class ReportEntryNamesTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIAgencyRadioButton: Locator;
    readonly uIManualAidRadioButton: Locator;
    readonly uIPFedit: Locator;
    readonly uIParticipantsActivity: Locator;
    readonly uINotesEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uINamesTable: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameIDEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uINamesGrid: Locator;
    readonly uINameInfoIcon: Locator;
    readonly uIMutualAidTeamMemberRadioButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIAgencyRadioButton = page.locator('#tabCE_tmpl2_usrK9Names1_rdoTeam_0');
        this.uIManualAidRadioButton = page.locator('#tabCE_tmpl2_usrK9Names1_rdoTeam_1');
        this.uIPFedit = page.locator('#tabCE_tmpl2_usrK9Names1_lupPF_CodeValue');
        this.uIParticipantsActivity = page.locator('#tabCE_tmpl2_usrK9Names1_cddActivity_DropDown');
        this.uINotesEdit = page.locator('#tabCE_tmpl2_usrK9Names1_txtNotes');
        this.uIAddButton = page.locator('#tabCE_tmpl2_usrK9Names1_imgAddComments');
        this.uIClearButton = page.locator('#tabCE_tmpl2_usrK9Names1_imgClearComments');
        this.uINamesTable = page.locator('#tabCE_tmpl2_usrK9Names1_grdNames');
        this.uINameTypeEdit = page.locator('#tabCE_tmpl2_usrK9Names1_nmcName_NameType');
        this.uINameIDEdit = page.locator('#tabCE_tmpl2_usrK9Names1_nmcName_NameTypeID');
        this.uILastNameEdit = page.locator('#tabCE_tmpl2_usrK9Names1_nmcName_LastName');
        this.uIFirstNameEdit = page.locator('#tabCE_tmpl2_usrK9Names1_nmcName_FirstName');
        this.uINamesGrid = page.locator('#tabCE_tmpl2_usrK9Names1_grdNames');
        this.uINameInfoIcon = page.locator('#tabCE_tmpl2_usrK9Names1_nmcName_imgSrch');
        this.uIMutualAidTeamMemberRadioButton = page.locator('#tabCE_tmpl2_usrK9Names1_rdoTeam_1');
    }

    async enterAtPFCode(jsonKeyIndex?: number): Promise<void> {
        const key = jsonKeyIndex !== undefined ? `PFCode${jsonKeyIndex}` : 'PFCode';
        await this.uIPFedit.fill(PoliceData.getK9ModuleValue(key));
        await this.page.waitForTimeout(1000);
    }

    async verifyAtPFCode(): Promise<void> {
        const value = await this.uIPFedit.inputValue();
        expect(value).toBe(PoliceData.getK9ModuleValue('PFCode'));
    }

    async enterAtNotes(): Promise<void> {
        await this.uINotesEdit.fill(PoliceData.getK9ModuleValue('Notes'));
        await this.page.waitForTimeout(1000);
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifyNameIntheGrid(rowIndex: number): Promise<void> {
        const name = await this.grid.getGridCellInnerText(this.uINamesTable, 'Name', rowIndex);
        expect(name).toBe(PoliceData.getK9ModuleValue('Name'));
    }

    async verifyName1IntheGrid(rowIndex: number): Promise<void> {
        const name1 = await this.grid.getGridCellInnerText(this.uINamesTable, 'Name', rowIndex);
        expect(name1).toBe(PoliceData.getK9ModuleValue('Name1'));
    }

    async enterAtNameID(): Promise<void> {
        const nameID = PoliceData.getK9ModuleValue('NameID');
        await this.uINameTypeEdit.fill(nameID.substring(0, 1));
        await this.uINameIDEdit.fill(nameID.substring(3));
        await this.uINameIDEdit.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async selectParticipantsActivity(): Promise<void> {
        await this.elementHelpers.randomSelectDropDownOption(this.uIParticipantsActivity);
    }

    async clickMutualAidRadioButton(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIManualAidRadioButton.click();
    }

    async clickAgencyRadioButton(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIAgencyRadioButton.click();
    }

    async clickAtNameIDInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uINamesGrid, PoliceData.getK9ModuleValue('NameID'));
    }

    async verifyAtMutualAid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uINamesGrid, 'Mutual Aid', 0);
        expect(await cell.innerText()).toBe(PoliceData.getK9ModuleValue('MutualAid'));
    }

    async verifyAtNameIDInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uINamesGrid, 'ID#', 0);
        expect(await cell.innerText()).toBe(PoliceData.getK9ModuleValue('NameID'));
    }

    async clickNameInfoIcon(): Promise<void> {
        await this.uINameInfoIcon.click();
    }

    async clickMutualAidTeamMembverRadioButton(): Promise<void> {
        await this.uIMutualAidTeamMemberRadioButton.click();
    }

    async selectAtParticipantsActivity(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIParticipantsActivity, PoliceData.getK9ModuleValue('ParticipantsActivity'));
    }

    async verifyAtParticipantsActivity(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uINamesTable, 'Activity', 0);
        expect(await cell.innerText()).toBe(PoliceData.getK9ModuleValue('ParticipantsActivity'));
    }

    async verifyUpdatedDataExistsAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1051)Updated data exists in the Names Tab. You must save or reset.');
        await this.popup.acknowledgeOk();
    }

    async selectAtPFCode(): Promise<void> {
        await this.grid.selectRowByCellText(this.uINamesTable, PoliceData.getK9ModuleValue('PFCode'));
    }

    async deleteAtIDInGridWithCancelPopup(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uINamesTable, PoliceData.getK9ModuleValue('PFCode'));
        await this.popup.confirmNo();
    }

    async selectNameHeaderInGrid(): Promise<void> {
        await this.uINamesTable.locator('th', { hasText: 'ID#' }).click();
    }

    async verifyDeleteConfirmationPopupNotArise(): Promise<void> {
        const isVisible = await this.popup.modalBody.isVisible().catch(() => false);
        expect(isVisible).toBeFalsy();
    }

    async verifyAddButtonNotChangedToUpdate(): Promise<void> {
        expect(await this.uIAddButton.getAttribute('title')).toBe('Add');
    }

    async verify7078EitherUnitOrPFISmandatoryAcknowledgePopUp(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(7078) Either Unit or PF is mandatory');
        await this.popup.acknowledgeOk();
    }

    async verifyAtPFNameByPFCodeInGrid(jsonKeyIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uINamesTable, PoliceData.getK9ModuleValue('PFCode' + jsonKeyIndex), 'Name');
        expect(await cell.innerText()).toBe(PoliceData.getK9ModuleValue('Name' + jsonKeyIndex));
    }

    async verifyDuplicationOfDataFound(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1019) Duplication Of Data Found');
        await this.popup.acknowledgeOk();
    }

    async verifyAtPFCodeNotExistInGrid(): Promise<void> {
        const values = await this.grid.getGridTableColumnValues(this.uINamesTable, 'ID#');
        expect(values).not.toContain(PoliceData.getK9ModuleValue('PFCode'));
    }

    async deleteAtPFCodeInGrid(jsonKeyIndex: number): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uINamesTable, PoliceData.getK9ModuleValue('PFCode' + jsonKeyIndex));
        await this.popup.confirmYes();
    }

    async clickclear(): Promise<void> {
        await this.uIClearButton.click();
    }
}

export class ReportEntryPreventiveActionTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uITypeOfPreventiveActionInput: Locator;
    readonly uITypeOfPreventiveActionDropdown: Locator;
    readonly uIIfOtherEdit: Locator;
    readonly uIWarningsGivenDropdown: Locator;
    readonly uINumberGivenEdit: Locator;
    readonly uIK9ActionInput: Locator;
    readonly uIK9ActionDropdown: Locator;
    readonly uIActionofSuspectInput: Locator;
    readonly uIActionofSuspectDropdown: Locator;
    readonly uIK9ActionDropdownArrow: Locator;
    readonly uIActionofSuspectInputArrow: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uITypeOfPreventiveActionInput = page.locator('#tabCE_tmpl3_UsrPreventiveAction1_cddPreventiveActionType_Input');
        this.uITypeOfPreventiveActionDropdown = page.locator('#tabCE_tmpl3_UsrPreventiveAction1_cddPreventiveActionType_DropDown');
        this.uIIfOtherEdit = page.locator('#tabCE_tmpl3_UsrPreventiveAction1_txtOther');
        this.uIWarningsGivenDropdown = page.locator('#tabCE_tmpl3_UsrPreventiveAction1_cddPAWarning_DropDown');
        this.uINumberGivenEdit = page.locator('#tabCE_tmpl3_UsrPreventiveAction1_txtNoGiven');
        this.uIK9ActionInput = page.locator('#tabCE_tmpl3_UsrPreventiveAction1_cddK9Actions_Input');
        this.uIK9ActionDropdown = page.locator('#tabCE_tmpl3_UsrPreventiveAction1_cddK9Actions_DropDown');
        this.uIActionofSuspectInput = page.locator('#tabCE_tmpl3_UsrPreventiveAction1_cddSuspectActions_Input');
        this.uIActionofSuspectDropdown = page.locator('#tabCE_tmpl3_UsrPreventiveAction1_cddSuspectActions_DropDown');
        this.uIK9ActionDropdownArrow = page.locator('#tabCE_tmpl3_UsrPreventiveAction1_cddK9Actions_Arrow');
        this.uIActionofSuspectInputArrow = page.locator('#tabCE_tmpl3_UsrPreventiveAction1_cddSuspectActions_Arrow');
    }

    async enterAtIfOther(): Promise<void> {
        await this.uIIfOtherEdit.fill(PoliceData.getK9ModuleValue('IfOther'));
        await this.page.waitForTimeout(1000);
    }

    async enterNumberGiven(): Promise<void> {
        await this.uINumberGivenEdit.fill(RandomHelpers.enterRandomNumbers(2));
        await this.page.waitForTimeout(1000);
    }

    async selectWarningGiven(): Promise<void> {
        await this.elementHelpers.randomSelectDropDownOption(this.uIWarningsGivenDropdown);
    }

    async selectAtTypeOfPreventiveAction(): Promise<void> {
        await this.uITypeOfPreventiveActionInput.click();
        await this.elementHelpers.selectRadControlDropDownValue(this.uITypeOfPreventiveActionInput, this.uITypeOfPreventiveActionDropdown, PoliceData.getK9ModuleValue('TypeOfPreventiveAction'));
        await this.uITypeOfPreventiveActionInput.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async selectk9Action(): Promise<void> {
        await this.uIK9ActionInput.click();
        await this.elementHelpers.randomSelectRadControlDropDownValue(this.uITypeOfPreventiveActionDropdown);
        await this.uIK9ActionInput.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async selectActionofSuspect(): Promise<void> {
        await this.uIActionofSuspectInput.click();
        await this.elementHelpers.randomSelectRadControlDropDownValue(this.uIActionofSuspectDropdown);
        await this.uIActionofSuspectInput.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async selectAtWarningGiven(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIWarningsGivenDropdown, PoliceData.getK9ModuleValue('WarningGiven'));
    }

    async enterAtNumberGiven(): Promise<void> {
        await this.uINumberGivenEdit.fill(PoliceData.getK9ModuleValue('NumberGiven'));
    }

    async selectAtk9Action(): Promise<void> {
        await this.uIK9ActionInput.click();
        await this.elementHelpers.selectRadControlDropDownValue(this.uIK9ActionDropdownArrow, this.uIK9ActionDropdown, PoliceData.getK9ModuleValue('K9Actions'));
        await this.uIK9ActionDropdownArrow.click();
    }

    async selectAtActionofSuspect(): Promise<void> {
        await this.uIActionofSuspectInput.click();
        await this.elementHelpers.selectRadControlDropDownValue(this.uIActionofSuspectInputArrow, this.uIActionofSuspectDropdown, PoliceData.getK9ModuleValue('K9Supect'));
        await this.uIActionofSuspectInputArrow.click();
    }

    async verifyAtIfOther(): Promise<void> {
        const text = await this.uIIfOtherEdit.inputValue();
        expect(text).toBe(PoliceData.getK9ModuleValue('IfOther'));
    }
}

export class ReportEntrySearchTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIWarningGiven: Locator;
    readonly uINumGiven: Locator;
    readonly uITypeOfSearchDropdown: Locator;
    readonly uISubTypeDropdown: Locator;
    readonly uIFloorEdit: Locator;
    readonly uIResultDropDown: Locator;
    readonly uINotesEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uISearchTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIWarningGiven = page.locator('#tabCE_tmpl4_UsrSearch1_cddWarning_DropDown');
        this.uINumGiven = page.locator('#tabCE_tmpl4_UsrSearch1_txtNumber');
        this.uITypeOfSearchDropdown = page.locator('#tabCE_tmpl4_UsrSearch1_cddTypeSearch_DropDown');
        this.uISubTypeDropdown = page.locator('#tabCE_tmpl4_UsrSearch1_cddSubType_DropDown');
        this.uIFloorEdit = page.locator('#tabCE_tmpl4_UsrSearch1_txtBuildingFloor');
        this.uIResultDropDown = page.locator('#tabCE_tmpl4_UsrSearch1_cddResult_DropDown');
        this.uINotesEdit = page.locator('#tabCE_tmpl4_UsrSearch1_txtNotes');
        this.uIAddButton = page.locator('#tabCE_tmpl4_UsrSearch1_imgAddSearch');
        this.uIClearButton = page.locator('#tabCE_tmpl4_UsrSearch1_imgClearSearch');
        this.uISearchTable = page.locator('#tabCE_tmpl4_UsrSearch1_grdSearchData');
    }

    async selctWarningGiven(): Promise<void> {
        await this.elementHelpers.randomSelectDropDownOption(this.uIWarningGiven);
    }

    async enterNumberGiven(): Promise<void> {
        await this.uINumGiven.fill(RandomHelpers.enterRandomNumbers(2));
        await this.page.waitForTimeout(1000);
    }

    async selectAtTypeOfSearch(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITypeOfSearchDropdown, PoliceData.getK9ModuleValue('TypeOfSearch'));
    }

    async selectAtSubType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uISubTypeDropdown, PoliceData.getK9ModuleValue('SubType'));
    }

    async enterAtNotes(): Promise<void> {
        await this.uINotesEdit.fill(PoliceData.getK9ModuleValue('Notes'));
        await this.page.waitForTimeout(1000);
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtTypeOfSearch(rowIndex: number): Promise<void> {
        const value = await this.grid.getGridCellInnerText(this.uISearchTable, 'Type Of Search', rowIndex);
        expect(value).toBe(PoliceData.getK9ModuleValue('TypeOfsearch'));
    }

    async verifyAtSubType(rowIndex: number): Promise<void> {
        const value = await this.grid.getGridCellInnerText(this.uISearchTable, 'Sub Type', rowIndex);
        expect(value).toBe(PoliceData.getK9ModuleValue('SubType'));
    }

    async verifyAtNotes(rowIndex: number): Promise<void> {
        const value = await this.grid.getGridCellInnerText(this.uISearchTable, 'Notes', rowIndex);
        expect(value).toBe(PoliceData.getK9ModuleValue('Notes'));
    }

    async verify6040MinimumOneRecordIsRequiredInGridAcknowledgePopUp(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6040) Minimum One Record is Required in Grid.');
        await this.popup.acknowledgeOk();
    }
}

export class ReportEntryTrackingTabPage {
    readonly page: Page;
    readonly elementHelpers: ElementHelpers;

    readonly uITrackDataTab: Locator;
    readonly uILengthOfTrack: Locator;
    readonly uITrackSurfaces: Locator;
    readonly uISurfaceCondition: Locator;
    readonly uIAgeOfTrack: Locator;
    readonly uITimeOfTrack: Locator;
    readonly uISubjectLocated: Locator;
    readonly uInotesEdit: Locator;
    readonly uIByTrackingTeamCheckBox: Locator;
    readonly uIByPerimeterCheckBox: Locator;
    readonly uIByOtherMeansCheckBox: Locator;
    readonly uIMeasurementDropDown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elementHelpers = new ElementHelpers(page);

        this.uITrackDataTab = page.locator("//span[contains(text(),'Track Data')]");
        this.uILengthOfTrack = page.locator('#tabCE_tmpl5_UsrTracking1_tabTracking_tmpl0_usrTrackData_txtLen');
        this.uITrackSurfaces = page.locator('#tabCE_tmpl5_UsrTracking1_tabTracking_tmpl0_usrTrackData_txtTrack');
        this.uISurfaceCondition = page.locator('#tabCE_tmpl5_UsrTracking1_tabTracking_tmpl0_usrTrackData_txtSurface');
        this.uIAgeOfTrack = page.locator("//table[@id='tabCE_tmpl5_UsrTracking1_tabTracking_tmpl0_usrTrackData_tmTrackAge_Time']//input");
        this.uITimeOfTrack = page.locator("//table[@id='tabCE_tmpl5_UsrTracking1_tabTracking_tmpl0_usrTrackData_tmTrackTaken_Time']//input");
        this.uISubjectLocated = page.locator('#tabCE_tmpl5_UsrTracking1_tabTracking_tmpl0_usrTrackData_cddSuspectLocated_DropDown');
        this.uInotesEdit = page.locator('#tabCE_tmpl5_UsrTracking1_tabTracking_tmpl0_usrTrackData_txtNotes');
        this.uIByTrackingTeamCheckBox = page.locator('#tabCE_tmpl5_UsrTracking1_tabTracking_tmpl0_usrTrackData_chkTracking');
        this.uIByPerimeterCheckBox = page.locator('#tabCE_tmpl5_UsrTracking1_tabTracking_tmpl0_usrTrackData_chkPerimeter');
        this.uIByOtherMeansCheckBox = page.locator('#tabCE_tmpl5_UsrTracking1_tabTracking_tmpl0_usrTrackData_chkOtherMeans');
        this.uIMeasurementDropDown = page.locator('#tabCE_tmpl5_UsrTracking1_tabTracking_tmpl0_usrTrackData_cddMeasurement_DropDown');
    }

    async clickOnTrackDataTab(): Promise<void> {
        await this.uITrackDataTab.click();
    }

    async enterLengthOfTrack(): Promise<void> {
        await this.uILengthOfTrack.fill(RandomHelpers.enterRandomNumbers(3));
    }

    async enterTrackSurfaces(): Promise<void> {
        await this.uITrackSurfaces.fill(RandomHelpers.randomString(10));
        await this.page.waitForTimeout(1000);
    }

    async enterSurfaceCondition(): Promise<void> {
        await this.uISurfaceCondition.fill(RandomHelpers.randomString(10));
        await this.page.waitForTimeout(1000);
    }

    async SelectSubjectLocated(): Promise<void> {
        await this.elementHelpers.randomSelectDropDownOption(this.uISubjectLocated);
        await this.page.waitForTimeout(1000);
    }

    async enterAgeofTrack(): Promise<void> {
        await this.uIAgeOfTrack.fill(RandomHelpers.enterRandomNumbers(2));
    }

    async enteTimeofTrack(): Promise<void> {
        await this.uITimeOfTrack.fill(RandomHelpers.enterRandomNumbers(2));
    }

    async enterAtNotes(): Promise<void> {
        await this.uILengthOfTrack.fill(PoliceData.getK9ModuleValue('Notes'));
    }

    async enterAtLengthOfTrack(): Promise<void> {
        await this.uILengthOfTrack.fill(PoliceData.getK9ModuleValue('LengthOfTrack'));
    }

    async enterAtTrackSurfaces(): Promise<void> {
        await this.uITrackSurfaces.fill(PoliceData.getK9ModuleValue('TrackSurfaces'));
    }

    async enterAtSurfaceCondition(): Promise<void> {
        await this.uISurfaceCondition.fill(PoliceData.getK9ModuleValue('SurfacesCondition'));
    }

    async enterAtAgeofTrack(): Promise<void> {
        await this.uIAgeOfTrack.fill(PoliceData.getK9ModuleValue('AgeOfTrack'));
    }

    async enteAtTimeofTrack(): Promise<void> {
        await this.uITimeOfTrack.fill(PoliceData.getK9ModuleValue('timeOfTrack'));
    }

    async selectAtSubjectLocated(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uISubjectLocated, PoliceData.getK9ModuleValue('SubjectLocated'));
    }

    async clickByTrackingTeamCheckBox(): Promise<void> {
        await this.uIByTrackingTeamCheckBox.click();
    }

    async clickByPerimeterCheckBox(): Promise<void> {
        await this.uIByPerimeterCheckBox.click();
    }

    async clickByOthermeansCheckBox(): Promise<void> {
        await this.uIByOtherMeansCheckBox.click();
    }

    async selectAtMeasurement(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIMeasurementDropDown, PoliceData.getK9ModuleValue('Measurement'));
    }

    async verifyAtTrackSurface(): Promise<void> {
        const trackSurface = await this.uITrackSurfaces.inputValue();
        expect(trackSurface).toBe(PoliceData.getK9ModuleValue('TrackSurfaces'));
    }
}

export class ReportEntryNarrativeTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uINarrativeRichTextEdit: Locator;
    readonly uITemplateComboBox: Locator;
    readonly uILoadButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIInternalSaveButton: Locator;
    readonly uIResetButton: Locator;
    readonly uITextBody: Locator;
    readonly uILeftSideStatusBar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uINarrativeRichTextEdit = page.locator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        this.uITemplateComboBox = page.locator('#ctrlUsrKPITxtEdit_lstTextName');
        this.uILoadButton = page.locator('#ctrlUsrKPITxtEdit_cmdload');
        this.uIAddNewButton = page.locator('#ctrlUsrKPITxtEdit_cmdAddnew');
        this.uIInternalSaveButton = page.locator('#cmdInternalSave');
        this.uIResetButton = page.locator('#cmdInternalRefresh');
        this.uITextBody = page.locator('//body');
        this.uILeftSideStatusBar = page.locator('//b');
    }

    async internalSave(): Promise<void> {
        await this.uIInternalSaveButton.click();
        await this.popup.confirmYes();
    }

    async clickLoadButton(): Promise<void> {
        await this.uILoadButton.click();
    }

    async selectAtTemplate(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.elementHelpers.selectDropDownOption(this.uITemplateComboBox, PoliceData.getK9ModuleValue('Template'));
    }

    async verifyAtText(): Promise<void> {
        const frame = this.page.frameLocator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        const text = await frame.locator('body').innerText();
        expect(text).toContain(PoliceData.getK9ModuleValue('Text'));
    }

    async VerifyAdditionSuccessfulMessage(): Promise<void> {
        const text = await this.uILeftSideStatusBar.innerText();
        expect(text).toContain('1002 - Addition Successful');
        await this.page.waitForTimeout(2000);
    }

    async enterAtText(): Promise<void> {
        const frame = this.page.frameLocator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        await frame.locator('body').press('Enter');
        await frame.locator('body').fill(PoliceData.getK9ModuleValue('Text'));
    }

    async verifyLoadedText(i: number): Promise<void> {
        const frame = this.page.frameLocator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        const text = await frame.locator('body').innerText();
        expect(text).toContain(PoliceData.getK9ModuleValue('Text' + i));
    }

    async clickAddNewOrEditButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async verifyRichTextIsDisplayed(str: string): Promise<void> {
        const frame = this.page.frameLocator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        const text = await frame.locator(`.//body//div[text()='${str}']`).innerText();
        expect(text).toContain(str);
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }
}

export class ReportEntryApprovalTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uISaveButton: Locator;
    readonly uIResetButton: Locator;
    readonly uINewActionComboBox: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uINotesEdit: Locator;
    readonly uIDivisionComboBox: Locator;
    readonly uISectionComboBox: Locator;
    readonly uIRejectCount: Locator;
    readonly uIRejectionCodeDropDown: Locator;
    readonly uIByCodeValueEdit: Locator;
    readonly uIByCodeDescriptionEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uISaveButton = page.locator('#cmdSave');
        this.uIResetButton = page.locator('#cmdReset');
        this.uINewActionComboBox = page.locator('#lstStatus');
        this.uIDateEdit = page.locator('#dttStatusDttm_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='dttStatusDttm_Time']//input");
        this.uINotesEdit = page.locator('#txtComments');
        this.uIDivisionComboBox = page.locator('#cddDivision_DropDown');
        this.uISectionComboBox = page.locator('#cddSection_DropDown');
        this.uIRejectCount = page.locator("(//span[@id='lblrejcountvalue'])[1]");
        this.uIRejectionCodeDropDown = page.locator('#cddRejCode_DropDown');
        this.uIByCodeValueEdit = page.locator('#lupPFID_CodeValue');
        this.uIByCodeDescriptionEdit = page.locator('#lupPFID_CodeDescription');
    }

    async SaveInternalTab(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async SelectAtNewAction(i: number): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uINewActionComboBox, BaseData.getNamesModuleValue('NewAction' + i));
        await this.uINewActionComboBox.press('Tab');
    }

    async TabDateTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async SelectAtDivision(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIDivisionComboBox, BaseData.getNamesModuleValue('Division'));
        await this.uIDivisionComboBox.press('Tab');
    }

    async SelectAtSection(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uISectionComboBox, BaseData.getNamesModuleValue('Section'));
        await this.uISectionComboBox.press('Tab');
    }

    async selectActionAsSendForApproval(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uINewActionComboBox, 'Send for Approval');
        await this.uINewActionComboBox.press('Tab');
    }

    async selectActionAsApprove(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uINewActionComboBox, 'Approve');
    }

    async selectActionAsLock(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uINewActionComboBox, 'Lock');
    }

    async verifyAtRejectCount(i: number): Promise<void> {
        const text = await this.uIRejectCount.innerText();
        expect(text).toBe(PoliceData.getK9ModuleValue('RejectCount' + i));
    }

    async selectAtRejectionCode(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIRejectionCodeDropDown, PoliceData.getK9ModuleValue('RejectionCode'));
    }

    async verifyAtBy(): Promise<void> {
        expect(await this.uIByCodeValueEdit.inputValue()).toBe(PoliceData.getK9ModuleValue('CodeValue'));
        expect(await this.uIByCodeDescriptionEdit.inputValue()).toBe(PoliceData.getK9ModuleValue('CodeDescription'));
    }
}

export class ReportEntryDetailsTabPage {
    readonly page: Page;
    readonly elementHelpers: ElementHelpers;

    readonly uITerrainDropdown: Locator;
    readonly uITerrainDropdownArrow: Locator;
    readonly uISurfaceTypeDropdown: Locator;
    readonly uISurfaceTypeDropdownArrow: Locator;
    readonly uIOtherOfficerInvolvedCheckBox: Locator;
    readonly uIofficerAssistCheckBox: Locator;
    readonly uIMutualAidCheckBox: Locator;
    readonly uIMISDCheckBox: Locator;
    readonly uIFelonyCheckBox: Locator;
    readonly uIArrestedPersonsDirectEdit: Locator;
    readonly uINumberOFSuspectLocatedEdit: Locator;
    readonly uIWasSuspectOrPersonBittenByk9DropDown: Locator;
    readonly uIApprehensionOrLocationOfSuspectOrPersonWasThroughDirectUseOfK9DropDown: Locator;
    readonly uIIfBittenDescribeInjuryEdit: Locator;
    readonly uIActivityLocationDropDown: Locator;
    readonly uIDescribeAreaEdit: Locator;
    readonly uIConditionsDropDown: Locator;
    readonly uIAssistEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elementHelpers = new ElementHelpers(page);

        this.uITerrainDropdown = page.locator('#tabCE_tmpl0_usrK9Details1_cddTerrain_DropDown');
        this.uITerrainDropdownArrow = page.locator('#tabCE_tmpl0_usrK9Details1_cddTerrain_Arrow');
        this.uISurfaceTypeDropdown = page.locator('#tabCE_tmpl0_usrK9Details1_cddSurfaceType_DropDown');
        this.uISurfaceTypeDropdownArrow = page.locator('#tabCE_tmpl0_usrK9Details1_cddSurfaceType_Arrow');
        this.uIOtherOfficerInvolvedCheckBox = page.locator('#tabCE_tmpl0_usrK9Details1_ChkOtherOfficer');
        this.uIofficerAssistCheckBox = page.locator('#tabCE_tmpl0_usrK9Details1_ChkOfficerAsst');
        this.uIMutualAidCheckBox = page.locator('#tabCE_tmpl0_usrK9Details1_chkMutualAid');
        this.uIMISDCheckBox = page.locator('#tabCE_tmpl0_usrK9Details1_chkMISD');
        this.uIFelonyCheckBox = page.locator('#tabCE_tmpl0_usrK9Details1_chkFelony');
        this.uIArrestedPersonsDirectEdit = page.locator('#tabCE_tmpl0_usrK9Details1_txtDirect');
        this.uINumberOFSuspectLocatedEdit = page.locator('#tabCE_tmpl0_usrK9Details1_txtNoSuspect');
        this.uIWasSuspectOrPersonBittenByk9DropDown = page.locator('#tabCE_tmpl0_usrK9Details1_cddSuspBitten_DropDown');
        this.uIApprehensionOrLocationOfSuspectOrPersonWasThroughDirectUseOfK9DropDown = page.locator('#tabCE_tmpl0_usrK9Details1_cddApprehension_DropDown');
        this.uIIfBittenDescribeInjuryEdit = page.locator('#tabCE_tmpl0_usrK9Details1_txtInjuryDtl');
        this.uIActivityLocationDropDown = page.locator('#tabCE_tmpl0_usrK9Details1_cddActivityLocation_DropDown');
        this.uIDescribeAreaEdit = page.locator('#tabCE_tmpl0_usrK9Details1_txtDescription');
        this.uIConditionsDropDown = page.locator('#tabCE_tmpl0_usrK9Details1_cddConditions_DropDown');
        this.uIAssistEdit = page.locator('#tabCE_tmpl0_usrK9Details1_txtAssist');
    }

    async verifyTerrainAsRadComboBoxDropdown(): Promise<void> {
        await this.uITerrainDropdownArrow.click();
        const values = this.uITerrainDropdown.locator('input');
        const count = await values.count();
        for (let i = 0; i < count; i++) {
            const val = values.nth(i);
            if (await val.isVisible()) {
                const cls = await val.getAttribute('class') || '';
                expect(cls).toContain('CheckBox');
            }
        }
        await this.uITerrainDropdownArrow.click();
    }

    async verifySurfaceTypeAsRadComboBoxDropdown(): Promise<void> {
        await this.uISurfaceTypeDropdownArrow.click();
        const values = this.uISurfaceTypeDropdown.locator('input');
        const count = await values.count();
        for (let i = 0; i < count; i++) {
            const val = values.nth(i);
            if (await val.isVisible()) {
                const cls = await val.getAttribute('class') || '';
                expect(cls).toContain('CheckBox');
            }
        }
        await this.uISurfaceTypeDropdownArrow.click();
    }

    async selectAtTerrainDropdownAsCheckAll(): Promise<void> {
        await this.uITerrainDropdownArrow.click();
        await this.uITerrainDropdown.locator('li', { hasText: 'Check All' }).click();
        await this.uITerrainDropdownArrow.click();
    }

    async selectAtSurfaceTypeDropdownAsCheckAll(): Promise<void> {
        await this.uISurfaceTypeDropdownArrow.click();
        await this.uISurfaceTypeDropdown.locator('li', { hasText: 'Check All' }).click();
    }

    async clickOtherOfficerInvolvedCheckBox(): Promise<void> {
        await this.uIOtherOfficerInvolvedCheckBox.click();
    }

    async clickOfficerAssistCheckBox(): Promise<void> {
        await this.uIofficerAssistCheckBox.click();
    }

    async clickMutualAidCheckbox(): Promise<void> {
        await this.uIMutualAidCheckBox.click();
    }

    async clickMISDCheckBox(): Promise<void> {
        await this.uIMISDCheckBox.click();
    }

    async clickFelonyCheckBox(): Promise<void> {
        await this.uIFelonyCheckBox.click();
    }

    async enterAtArrestedPersons(): Promise<void> {
        await this.uIArrestedPersonsDirectEdit.fill(PoliceData.getK9ModuleValue('ArrestedPersons'));
    }

    async enterAtAssist(): Promise<void> {
        await this.uIAssistEdit.fill(PoliceData.getK9ModuleValue('Assist'));
    }

    async enterAtNumberOfSuspectedLocated(): Promise<void> {
        await this.uINumberOFSuspectLocatedEdit.fill(PoliceData.getK9ModuleValue('NumberOFSuspectLocated'));
    }

    async selectAtWasSuspectOrPersonBittenByK9(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIWasSuspectOrPersonBittenByk9DropDown, PoliceData.getK9ModuleValue('WasSuspectOrPersonBittenByK9'));
    }

    async selectAtApprehensionOrLocationOfSuspectOrPersonWasThroughDirectUseForK9(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIApprehensionOrLocationOfSuspectOrPersonWasThroughDirectUseOfK9DropDown, PoliceData.getK9ModuleValue('ApprehensionOrLocationOfSuspectOrPersonWasThroughDirectUseOfK9'));
    }

    async enterAtIfBittenDescribeInjury(): Promise<void> {
        await this.uIIfBittenDescribeInjuryEdit.fill(PoliceData.getK9ModuleValue('IfBittenDescribeInjury'));
    }

    async selectAtActivityLocation(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIActivityLocationDropDown, PoliceData.getK9ModuleValue('ActivityLocation'));
    }

    async selectAtSurfaceType(): Promise<void> {
        await this.uISurfaceTypeDropdownArrow.click();
        await this.elementHelpers.selectRadControlDropDownValue(this.uISurfaceTypeDropdownArrow, this.uISurfaceTypeDropdown, PoliceData.getK9ModuleValue('SurfaceType'));
        await this.uISurfaceTypeDropdownArrow.click();
    }

    async enterAtDescribeArea(): Promise<void> {
        await this.uIDescribeAreaEdit.fill(PoliceData.getK9ModuleValue('DescribeArea'));
    }

    async selectAtConditions(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIConditionsDropDown, PoliceData.getK9ModuleValue('Conditions'));
    }
}

export class K9PersonnelPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIJurisDropdown: Locator;
    readonly uIK9NameDropDown: Locator;
    readonly uIPrimaryFunctionDropDown: Locator;
    readonly uIHandlerLookupEdit: Locator;
    readonly uISexDropDown: Locator;
    readonly uIBreedDropDown: Locator;
    readonly uIActiveCheckbox: Locator;
    readonly uISearchButton: Locator;
    readonly uILegacyK9Button: Locator;
    readonly uIAddNewSearchButton: Locator;
    readonly uISearchResultTable: Locator;
    readonly uIAJAXinGrid: Locator;
    readonly uIHandlerLookupButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIInactiveCheckBox: Locator;
    readonly uIK9BreedDropdown: Locator;
    readonly uINextButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uIK9NameDropDown = page.locator('#txtK9Name');
        this.uIPrimaryFunctionDropDown = page.locator('#cddPrimaryFun_DropDown');
        this.uIHandlerLookupEdit = page.locator('#lupOffPartner_CodeValue');
        this.uISexDropDown = page.locator('#cddSex_DropDown');
        this.uIBreedDropDown = page.locator('#cddBreed_DropDown');
        this.uIActiveCheckbox = page.locator('#chkIsActive');
        this.uISearchButton = page.locator('#cmdSearch');
        this.uILegacyK9Button = page.locator("//span[contains(text(),'Legacy K9')]");
        this.uIAddNewSearchButton = page.locator("//span[contains(text(),'Add New')]");
        this.uISearchResultTable = page.locator('#grdPersonnelSearch');
        this.uIAJAXinGrid = page.locator(".//table/tbody/tr/td[contains(text(),'AJAX')]");
        this.uIHandlerLookupButton = page.locator('#lupOffPartner_imgBtn');
        this.uIAddNewButton = page.locator('#tabCE_tmpl1_usrMedical1_tabMedical_tmpl1_usrVeteri1_cmdAddNew');
        this.uIInactiveCheckBox = page.locator('#chkIsActive');
        this.uIK9BreedDropdown = page.locator('#cddBreed_DropDown');
        this.uINextButton = page.locator('#cddBreed_DropDown');
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
        await this.page.waitForLoadState('load');
    }

    async selectAJAXInGrid(): Promise<void> {
        await this.uIAJAXinGrid.click();
        await this.page.waitForLoadState('load');
    }

    async selectAtK9HandlerInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uISearchResultTable, PoliceData.getK9ModuleValue('K9Handler'));
        await this.page.waitForTimeout(1000);
    }

    async selectAtHandlerInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uISearchResultTable, PoliceData.getK9ModuleValue('Handler'));
        await this.page.waitForTimeout(1000);
    }

    async selectRowByIndexInGrid(rowIndex: number): Promise<void> {
        await this.grid.selectRowByIndex(this.uISearchResultTable, rowIndex);
    }

    async selectAtK9NameInGrid(rowIndex?: number): Promise<void> {
        await this.grid.selectRowByCellText(this.uISearchResultTable, PoliceData.getK9ModuleValue('K9Name'));
        await this.page.waitForTimeout(1000);
    }

    async enterAtHandler(): Promise<void> {
        await this.uIHandlerLookupEdit.fill(PoliceData.getK9ModuleValue('Handler'));
        await this.uIHandlerLookupEdit.press('Tab');
    }

    async selectAtK9Name(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9NameDropDown, PoliceData.getK9ModuleValue('K9Name'));
    }

    async clickHandlerLookup(): Promise<void> {
        await this.uIHandlerLookupButton.click();
    }

    async selectAtJuris(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9NameDropDown, PoliceData.getK9ModuleValue('Juris'));
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewSearchButton.click();
        await this.page.waitForLoadState('load');
    }

    async verifyAtDOBInGrid(): Promise<void> {
        const row = await this.grid.getGridRowByCellInnerText(this.uISearchResultTable, PoliceData.getK9ModuleValue('DOB'));
        expect(await row.innerText()).toContain(PoliceData.getK9ModuleValue('DOB'));
    }

    async verifyAtDateSinceAs4DaysFutureDateInGrid(): Promise<void> {
        const futureDate = DateHelpers.getFutureDate(4, 'MM/dd/yy');
        const row = await this.grid.getGridRowByCellInnerText(this.uISearchResultTable, futureDate);
        expect(await row.innerText()).toContain(futureDate);
    }

    async clickInactiveCheckBox(): Promise<void> {
        await this.uIInactiveCheckBox.click();
    }

    async verifyTheSelectedJuris(): Promise<void> {
        const Juris = await this.elementHelpers.getDropDownSelectedItem(this.uIJurisDropdown);
        expect(Juris).toBe(PoliceData.getK9ModuleValue('SelectedJuris'));
    }

    async verifyTheJurisListedInGrid(): Promise<void> {
        const values = await this.grid.getGridTableColumnValues(this.uISearchResultTable, 'Juris');
        for (const value of values) {
            expect(value).toBe(PoliceData.getK9ModuleValue('Juris'));
        }
    }

    async verifyTheK9NameValuesAsSelectedJuris(): Promise<void> {
        const dropDownValues = await this.elementHelpers.getDropDownValues(this.uIK9NameDropDown);
        dropDownValues.shift();
        const gridTableColumnValues = await this.grid.getGridTableColumnValues(this.uISearchResultTable, 'K9 Name');
        expect(gridTableColumnValues).toEqual(dropDownValues);
    }

    async verifyTheJurisInGridAsSelectedJurisAsNull(): Promise<void> {
        const values = await this.grid.getGridTableColumnValues(this.uISearchResultTable, 'Juris');
        for (const value of values) {
            if (value.trim() === '') {
                expect(value.trim()).toBe('');
            } else {
                expect(value).toBe(PoliceData.getK9ModuleValue('Juris1'));
            }
        }
    }

    async selectAtJurisAsBC(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIJurisDropdown, 'BC - Brown County Police Department');
    }

    async selectAtJurisAsNull(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIJurisDropdown, '--');
    }

    async verifyAtK9HandlerInGrid(): Promise<void> {
        const Handler = await this.grid.getGridCellInnerText(this.uISearchResultTable, 'Handler', 0);
        expect(Handler).toBe(PoliceData.getK9ModuleValue('Handler'));
    }

    async getK9NamesList(): Promise<string[]> {
        const dropDownValues = await this.elementHelpers.getDropDownValues(this.uIK9NameDropDown);
        dropDownValues.shift();
        return dropDownValues;
    }

    async getK9NameValuesInGrid(): Promise<string[]> {
        return await this.grid.getGridTableColumnValues(this.uISearchResultTable, 'K9 Name');
    }

    async verifyK9NamesValuesAsSelectedJurisAsNull(dropDown: string[], grid: string[]): Promise<void> {
        expect(dropDown).toEqual(grid);
    }

    async reloadScreen(): Promise<void> {
        await this.page.reload();
        await this.page.waitForTimeout(2000);
    }

    async reloadScreen1(): Promise<void> {
        await this.page.reload();
        await this.page.waitForTimeout(2000);
    }

    async verifyNoRecordsFoundAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('1011 - No Record Found');
        await this.popup.acknowledgeOk();
    }

    async verifyAtInActiveK9Name(): Promise<void> {
        const dropDownValues = await this.elementHelpers.getDropDownValues(this.uIK9NameDropDown);
        expect(dropDownValues).toContain(PoliceData.getK9ModuleValue('K9Name1'));
    }

    async verifyAtActiveK9Name(): Promise<void> {
        const dropDownValues = await this.elementHelpers.getDropDownValues(this.uIK9NameDropDown);
        expect(dropDownValues).toContain(PoliceData.getK9ModuleValue('K9Name'));
    }

    async verifyAtK9NameByBreedInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uISearchResultTable, PoliceData.getK9ModuleValue('Breed'), 'K9 Name');
        expect(await cell.innerText()).toBe(PoliceData.getK9ModuleValue('K9Name'));
    }

    async verifyAtHandlerColumnValuesInGrid(): Promise<void> {
        const handler = await this.grid.getGridTableColumnValues(this.uISearchResultTable, 'Handler');
        expect(handler).toContain(PoliceData.getK9ModuleValue('HandlerGrid'));
    }

    async selectAtBreed(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9BreedDropdown, PoliceData.getK9ModuleValue('Breed'));
    }

    async verifyAtBreedColumnValuesInGrid(): Promise<void> {
        const breed = await this.grid.getGridTableColumnValues(this.uISearchResultTable, 'Breed');
        expect(breed).toContain(PoliceData.getK9ModuleValue('Breed'));
    }

    async selectAtPrimaryFunction(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIPrimaryFunctionDropDown, PoliceData.getK9ModuleValue('PrimaryFunction'));
    }

    async verifyAtPrimaryFunctionColumnValuesInGrid(): Promise<void> {
        const primaryFunction = await this.grid.getGridTableColumnValues(this.uISearchResultTable, 'Primary Function');
        expect(primaryFunction).toContain(PoliceData.getK9ModuleValue('PrimaryFunction'));
    }

    async selectAtSex(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uISexDropDown, PoliceData.getK9ModuleValue('Sex'));
    }

    async verifyAtSexColumnValuesInGrid(): Promise<void> {
        const sex = await this.grid.getGridTableColumnValues(this.uISearchResultTable, 'Sex');
        expect(sex).toContain(PoliceData.getK9ModuleValue('Sex'));
    }

    async verifyAtK9NameColumnValuesInGrid(): Promise<void> {
        const k9Name = await this.grid.getGridTableColumnValues(this.uISearchResultTable, 'K9 Name');
        expect(k9Name).toContain(PoliceData.getK9ModuleValue('K9Name'));
    }

    async verifyGridCountMoreThanZero(): Promise<void> {
        const count = await this.grid.getRowCount(this.uISearchResultTable);
        expect(count).toBeGreaterThan(0);
    }

    async verifyInactiveRowIsListed(): Promise<void> {
        const rows = this.uISearchResultTable.locator('tbody tr');
        const count = await rows.count();
        let greyCount = 0;
        for (let i = 0; i < count; i++) {
            const color = await rows.nth(i).evaluate(el => getComputedStyle(el).color);
            if (color.includes('128, 128, 128')) {
                greyCount++;
            }
        }
        expect(greyCount).toBeGreaterThan(0);
    }
}

export class K9PersonnelEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly grid: GridHelpers;

    readonly uIK9NameEdit: Locator;
    readonly uITrainingTab: Locator;
    readonly uIPhysicalTab: Locator;
    readonly uIMedicalTab: Locator;
    readonly uIK9ReportsTab: Locator;
    readonly uICommentsTab: Locator;
    readonly uICertificationsTab: Locator;
    readonly uIAwardsTab: Locator;
    readonly uIInactiveCheckBox: Locator;
    readonly uIHandlerLabelEdit: Locator;
    readonly uIK9InactiveCheckbox: Locator;
    readonly uIK9PrimaryFunctionCombobox: Locator;
    readonly uIK9PersonnelImage: Locator;
    readonly uIK9EmployeeEdit: Locator;
    readonly uIBottomMessage: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIResetIcon: Locator;
    readonly uISave: Locator;
    readonly uIK9ReportsDeploymentsTab: Locator;
    readonly uIAttachmentsTab: Locator;
    readonly uIQAFormsTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIK9NameEdit = page.locator('#txtK9Name');
        this.uITrainingTab = page.locator("//span[contains(text(),'Training')]");
        this.uIPhysicalTab = page.locator("//span[contains(text(),'Physical')]");
        this.uIMedicalTab = page.locator("//span[contains(text(),'Medical')]");
        this.uIK9ReportsTab = page.locator("//span[contains(text(),'K9 Reports')]");
        this.uICommentsTab = page.locator("//span[contains(text(),'Comments')]");
        this.uICertificationsTab = page.locator("//span[contains(text(),'Certifications')]");
        this.uIAwardsTab = page.locator("//span[contains(text(),'Awards')]");
        this.uIInactiveCheckBox = page.locator('#chkInactive');
        this.uIHandlerLabelEdit = page.locator('#lblHandlers');
        this.uIK9InactiveCheckbox = page.locator('#chkIsActive');
        this.uIK9PrimaryFunctionCombobox = page.locator('#cddPrimaryFunction_DropDown');
        this.uIK9PersonnelImage = page.locator('#imgNameFrontView');
        this.uIK9EmployeeEdit = page.locator('#txtEmp');
        this.uIBottomMessage = page.locator("//td[@class='statusBar']/b");
        this.uIPrintIcon = page.locator('#cmdPrint');
        this.uIResetIcon = page.locator('#cmdRefresh');
        this.uISave = page.locator('#cmdSave');
        this.uIK9ReportsDeploymentsTab = page.locator("//span[text()='K9 Reports (Deployments)']");
        this.uIAttachmentsTab = page.locator("//span[text()='Attachment']");
        this.uIQAFormsTab = page.locator("//span[text()='QA Forms']");
    }

    async switchToTrainingTab(): Promise<void> {
        await this.uITrainingTab.click();
        await this.page.waitForLoadState('load');
    }

    async switchToK9ReportsTab(): Promise<void> {
        await this.uIK9ReportsTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmActivity.aspx');
        await this.page.waitForLoadState('load');
    }

    async switchToCommentsTab(): Promise<void> {
        await this.uICommentsTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmViewNotes');
        await this.page.waitForLoadState('load');
    }

    async switchToCertificationsTab(): Promise<void> {
        await this.uICertificationsTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmCertificates');
        await this.page.waitForLoadState('load');
    }

    async switchToAwardsTab(): Promise<void> {
        await this.uIAwardsTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmAwards');
        await this.page.waitForLoadState('load');
    }

    async switchToQAFormsTab(): Promise<void> {
        await this.uIQAFormsTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmQuestionnaire');
        await this.page.waitForTimeout(1000);
    }

    async verifyAtK9Name(): Promise<void> {
        const attribute = await this.uIK9NameEdit.inputValue();
        expect(attribute).toBe(PoliceData.getK9ModuleValue('K9Name'));
    }

    async closeTheScreen(): Promise<void> {
        await this.page.close();
    }

    async switchToMedicalTab(): Promise<void> {
        await this.uIMedicalTab.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyMedicalTabInBlueColor(): Promise<void> {
        const color = await this.uIMedicalTab.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgb(0, 0, 255)');
    }

    async saveTheScreen(): Promise<void> {
        await this.uISave.click();
        await this.popup.confirmYes();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async refreshScreen(): Promise<void> {
        await this.uIResetIcon.click();
    }

    async clickInactiveCheckbox(): Promise<void> {
        await this.uIK9InactiveCheckbox.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyHandlerNameAsEmpty(): Promise<void> {
        await expect(this.uIHandlerLabelEdit).not.toBeVisible();
    }

    async verifyAtHandlerName(): Promise<void> {
        const attribute = await this.uIHandlerLabelEdit.innerText();
        expect(attribute).toContain(PoliceData.getK9ModuleValue('Handler'));
    }

    async enterAtK9Name(): Promise<void> {
        await this.uIK9NameEdit.fill(PoliceData.getK9ModuleValue('K9Name'));
    }

    async enterAtK9EmployeeName(): Promise<void> {
        await this.uIK9EmployeeEdit.fill(PoliceData.getK9ModuleValue('K9EmployeeName'));
    }

    async selectAtPrimaryFunction(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9PrimaryFunctionCombobox, PoliceData.getK9ModuleValue('PrimaryFunction'));
    }

    async switchToPhysicalTab(): Promise<void> {
        await this.uIPhysicalTab.click();
    }

    async verifyImageHeightNotPresent(): Promise<void> {
        const h = await this.uIK9PersonnelImage.evaluate(el => getComputedStyle(el).height);
        expect(h).toBe(PoliceData.getK9ModuleValue('WithoutImgHeight'));
    }

    async verifyImageWidthNotPresent(): Promise<void> {
        const w = await this.uIK9PersonnelImage.evaluate(el => getComputedStyle(el).width);
        expect(w).toBe(PoliceData.getK9ModuleValue('WithoutImgWidth'));
    }

    async saveAndCloseTheScreen(): Promise<void> {
        await this.page.locator('#cmdSaveNClose').click();
        await this.popup.confirmYes();
    }

    async verifyUpdateSucessFullMessage(): Promise<void> {
        expect(await this.uIBottomMessage.innerText()).toBe('1003 - Update Successful');
    }

    async ClickAtImage(): Promise<void> {
        await this.uIK9PersonnelImage.click();
    }

    async verifyAdditionSuccessfullMessage(): Promise<void> {
        expect(await this.uIBottomMessage.innerText()).toBe('1002 - Addition Successful');
    }

    async enterK9Name(): Promise<void> {
        await this.uIK9NameEdit.fill('Husky' + RandomHelpers.randomString(2));
    }

    async enterK9EmployeeName(): Promise<void> {
        await this.uIK9EmployeeEdit.fill(RandomHelpers.randomNameGenerate());
    }

    async selectPrimaryFunction(): Promise<void> {
        await this.elementHelpers.randomSelectDropDownOption(this.uIK9PrimaryFunctionCombobox);
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async verifyUpdatedDataExistsAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1051)Updated data exists in the Medical-Current Tab. You must save or reset.');
        await this.popup.acknowledgeOk();
    }

    async clickResetIcon(): Promise<void> {
        await this.uIResetIcon.click();
    }

    async clickSave(): Promise<void> {
        await this.uISave.click();
    }

    async verify8EnterMandatoryDataAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8) Enter mandatory data');
        await this.popup.acknowledgeOk();
    }

    async verifyMedicalTabIsDisplayed(): Promise<void> {
        await expect(this.uIMedicalTab).toBeVisible();
    }

    async verifyK9ReportsDeploymentsTabIsDisplayed(): Promise<void> {
        await expect(this.uIK9ReportsDeploymentsTab).toBeVisible();
    }

    async verifyTrainingTabIsDisplayed(): Promise<void> {
        await expect(this.uITrainingTab).toBeVisible();
    }

    async verifyCommentsTabIsDisplayed(): Promise<void> {
        await expect(this.uICommentsTab).toBeVisible();
    }

    async verifyAttachmentTabIsDisplayed(): Promise<void> {
        await expect(this.uIAttachmentsTab).toBeVisible();
    }

    async verifyCertificationsTabIsDisplayed(): Promise<void> {
        await expect(this.uICertificationsTab).toBeVisible();
    }

    async verifyAwardsTabIsDisplayed(): Promise<void> {
        await expect(this.uIAwardsTab).toBeVisible();
    }

    async verifyQAFormsTabIsDisplayed(): Promise<void> {
        await expect(this.uIQAFormsTab).toBeVisible();
    }

    async verifyPhysicalTabIsDisplayed(): Promise<void> {
        await expect(this.uIPhysicalTab).toBeVisible();
    }

    async verifyMedicalTabIsEnabled(): Promise<void> {
        await expect(this.uIMedicalTab).toBeEnabled();
    }

    async verifyK9ReportsDeploymentsTabIsEnabled(): Promise<void> {
        await expect(this.uIK9ReportsDeploymentsTab).toBeEnabled();
    }

    async verifyTrainingTabIsEnabled(): Promise<void> {
        await expect(this.uITrainingTab).toBeEnabled();
    }

    async verifyCommentsTabIsEnabled(): Promise<void> {
        await expect(this.uICommentsTab).toBeEnabled();
    }

    async verifyAttachmentTabIsEnabled(): Promise<void> {
        await expect(this.uIAttachmentsTab).toBeEnabled();
    }

    async verifyCertificationsTabIsEnabled(): Promise<void> {
        await expect(this.uICertificationsTab).toBeEnabled();
    }

    async verifyAwardsTabIsEnabled(): Promise<void> {
        await expect(this.uIAwardsTab).toBeEnabled();
    }

    async verifyQAFormsTabIsEnabled(): Promise<void> {
        await expect(this.uIQAFormsTab).toBeEnabled();
    }

    async verifyMedicalTabIsNotDisplayed(): Promise<void> {
        await expect(this.uIMedicalTab).not.toBeVisible();
    }

    async verifyK9ReportsDeploymentsTabIsNotDisplayed(): Promise<void> {
        await expect(this.uIK9ReportsDeploymentsTab).not.toBeVisible();
    }

    async verifyTrainingTabIsNotDisplayed(): Promise<void> {
        await expect(this.uITrainingTab).not.toBeVisible();
    }

    async verifyCommentsTabIsNotDisplayed(): Promise<void> {
        await expect(this.uICommentsTab).not.toBeVisible();
    }

    async verifyAttachmentsTabIsNotDisplayed(): Promise<void> {
        await expect(this.uIAttachmentsTab).not.toBeVisible();
    }

    async verifyCertificationsTabIsNotDisplayed(): Promise<void> {
        await expect(this.uICertificationsTab).not.toBeVisible();
    }

    async verifyAwardsTabIsNotDisplayed(): Promise<void> {
        await expect(this.uIAwardsTab).not.toBeVisible();
    }

    async verifyQAFormsTabIsNotDisplayed(): Promise<void> {
        await expect(this.uIQAFormsTab).not.toBeVisible();
    }
}

export class K9PersonnelEntryPhysicalTabPage {
    readonly page: Page;
    readonly elementHelpers: ElementHelpers;
    readonly uIK9BreedCombobox: Locator;
    readonly uIK9SexCombobox: Locator;
    readonly uIK9DOBEdit: Locator;
    readonly uIHireDateEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elementHelpers = new ElementHelpers(page);
        this.uIK9BreedCombobox = page.locator('#tabCE_tmpl0_usrPhysical1_cddBreed_DropDown');
        this.uIK9SexCombobox = page.locator('#tabCE_tmpl0_usrPhysical1_cddSex_DropDown');
        this.uIK9DOBEdit = page.locator('#tabCE_tmpl0_usrPhysical1_dtmDOB_KPIDttmCtrl');
        this.uIHireDateEdit = page.locator('#tabCE_tmpl0_usrPhysical1_dtmHire_KPIDttmCtrl');
    }

    async selectAtBreed(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9BreedCombobox, PoliceData.getK9ModuleValue('Breed'));
    }

    async selectAtSex(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9SexCombobox, PoliceData.getK9ModuleValue('Sex'));
    }

    async enterAtDOB(): Promise<void> {
        await this.uIK9DOBEdit.fill(PoliceData.getK9ModuleValue('DOB'));
        await this.uIK9DOBEdit.press('Tab');
    }

    async enterHireDateAs4DaysFuture(): Promise<void> {
        await this.uIHireDateEdit.click();
        await this.page.waitForTimeout(1000);
        await this.uIHireDateEdit.fill(DateHelpers.getFutureDate(4));
    }

    async selectBreed(): Promise<void> {
        await this.elementHelpers.randomSelectDropDownOption(this.uIK9BreedCombobox);
    }

    async selectSex(): Promise<void> {
        await this.elementHelpers.randomSelectDropDownOption(this.uIK9SexCombobox);
    }

    async enterDOB(): Promise<void> {
        await this.uIK9DOBEdit.fill(DateHelpers.getPreviousDateByMonth(60));
    }
}

export class K9PersonnelEntryMedicalTabPage {
    readonly page: Page;
    readonly elementHelpers: ElementHelpers;
    readonly grid: GridHelpers;

    readonly uICurrentTab: Locator;
    readonly uIVeterinarianVisitsTab: Locator;
    readonly uIMedicationsEdit: Locator;
    readonly uIDossageEdit: Locator;
    readonly uIMedicationAddButton: Locator;
    readonly uIMedicationResultTable: Locator;
    readonly uIVaccineDropDown: Locator;
    readonly uIIssuedDate: Locator;
    readonly uINextDueDate: Locator;
    readonly uIVaccineAddButton: Locator;
    readonly uIVaccineResultTable: Locator;
    readonly uIFrequencyEdit: Locator;
    readonly uIMedicalHistoryNotesEdit: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIVeterinarianVisitsResultTable: Locator;
    readonly uIDeleteIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elementHelpers = new ElementHelpers(page);
        this.grid = new GridHelpers(page);

        this.uICurrentTab = page.locator("//span[contains(text(),'Current')]");
        this.uIVeterinarianVisitsTab = page.locator("//span[contains(text(),'Veterinarian Visits')]");
        this.uIMedicationsEdit = page.locator('#tabCE_tmpl1_usrMedical1_tabMedical_tmpl0_usrCurrent1_txtMedications');
        this.uIDossageEdit = page.locator('#tabCE_tmpl1_usrMedical1_tabMedical_tmpl0_usrCurrent1_txtDosage');
        this.uIMedicationAddButton = page.locator('#tabCE_tmpl1_usrMedical1_tabMedical_tmpl0_usrCurrent1_imgAddMedication');
        this.uIMedicationResultTable = page.locator('#tabCE_tmpl1_usrMedical1_tabMedical_tmpl0_usrCurrent1_grdMedication');
        this.uIVaccineDropDown = page.locator('#tabCE_tmpl1_usrMedical1_tabMedical_tmpl0_usrCurrent1_cddVaccine_DropDown');
        this.uIIssuedDate = page.locator('#tabCE_tmpl1_usrMedical1_tabMedical_tmpl0_usrCurrent1_dtcIssuedDate_KPIDttmCtrl');
        this.uINextDueDate = page.locator('#tabCE_tmpl1_usrMedical1_tabMedical_tmpl0_usrCurrent1_dtcNextDueDate_KPIDttmCtrl');
        this.uIVaccineAddButton = page.locator('#tabCE_tmpl1_usrMedical1_tabMedical_tmpl0_usrCurrent1_imgAddVaccine');
        this.uIVaccineResultTable = page.locator('#tabCE_tmpl1_usrMedical1_tabMedical_tmpl0_usrCurrent1_grdVacination');
        this.uIFrequencyEdit = page.locator('#tabCE_tmpl1_usrMedical1_tabMedical_tmpl0_usrCurrent1_txtFrequency');
        this.uIMedicalHistoryNotesEdit = page.locator('#tabCE_tmpl1_usrMedical1_tabMedical_tmpl0_usrCurrent1_txtMedicalHistory');
        this.uIAddNewButton = page.locator('#tabCE_tmpl1_usrMedical1_tabMedical_tmpl1_usrVeteri1_cmdAddNew');
        this.uIVeterinarianVisitsResultTable = page.locator('#tabCE_tmpl1_usrMedical1_tabMedical_tmpl1_usrVeteri1_grdMedicalVeteri');
        this.uIDeleteIcon = page.locator("//th[@Class='igg_BlueThemeHeaderCaption ig2d2816fe']");
    }

    async switchToCurrentTab(): Promise<void> {
        await this.uICurrentTab.click();
    }

    async switchToVeterinarianVisitsTab(): Promise<void> {
        await this.uIVeterinarianVisitsTab.click();
        await this.page.waitForTimeout(1000);
    }

    async enterAtMedications(): Promise<void> {
        await this.uIMedicationsEdit.fill(PoliceData.getK9ModuleValue('Medications'));
    }

    async enterAtDossage(): Promise<void> {
        await this.uIDossageEdit.fill(PoliceData.getK9ModuleValue('Dossage'));
    }

    async clickMedicationsAddButton(): Promise<void> {
        await this.uIMedicationAddButton.click();
    }

    async selectAtVaccine(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIVaccineDropDown, PoliceData.getK9ModuleValue('Vaccine'));
    }

    async enterIssuedDateAsCurrentDate(): Promise<void> {
        await this.uIIssuedDate.fill(DateHelpers.getCurrentDate());
        await this.uIIssuedDate.press('Tab');
    }

    async enterNextDueDateAsFutureDate(): Promise<void> {
        await this.uINextDueDate.fill(DateHelpers.getFutureDate(5));
        await this.uINextDueDate.press('Tab');
    }

    async clickVaccineAddButton(): Promise<void> {
        await this.uIVaccineAddButton.click();
    }

    async verifyRowCountIsZeroInMedicationsGrid(): Promise<void> {
        const count = await this.grid.getRowCount(this.uIMedicationResultTable);
        expect(count).toBe(1);
    }

    async verifyRowCountIsZeroInVaccineGrid(): Promise<void> {
        const count = await this.grid.getRowCount(this.uIVaccineResultTable);
        expect(count).toBe(1);
    }

    async verifyRowCountInMedicationsGrid(): Promise<void> {
        const count = await this.grid.getRowCount(this.uIMedicationResultTable);
        expect(count).toBe(1);
    }

    async verifyRowCountInVaccineGrid(): Promise<void> {
        const count = await this.grid.getRowCount(this.uIVaccineResultTable);
        expect(count).toBe(1);
    }

    async enterAtFrequency(): Promise<void> {
        await this.uIFrequencyEdit.fill(PoliceData.getK9ModuleValue('Frequency'));
    }

    async enterAtMedicalHistoryNotes(): Promise<void> {
        await this.uIFrequencyEdit.fill(PoliceData.getK9ModuleValue('MedicalHistoryNotes'));
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async verifyAtTypeOfVisitInGrid(): Promise<void> {
        const row = await this.grid.getGridRowByCellInnerText(this.uIVeterinarianVisitsResultTable, PoliceData.getK9ModuleValue('TypeOfVisit'));
        expect(await row.innerText()).toContain(PoliceData.getK9ModuleValue('TypeOfVisit'));
    }

    async verifyAtReasonInGrid(): Promise<void> {
        const row = await this.grid.getGridRowByCellInnerText(this.uIVeterinarianVisitsResultTable, PoliceData.getK9ModuleValue('Reason'));
        expect(await row.innerText()).toContain(PoliceData.getK9ModuleValue('Reason'));
    }

    async verifyAtProcedurePerformedInGrid(): Promise<void> {
        const row = await this.grid.getGridRowByCellInnerText(this.uIVeterinarianVisitsResultTable, PoliceData.getK9ModuleValue('ProcedurePerformed'));
        expect(await row.innerText()).toContain(PoliceData.getK9ModuleValue('ProcedurePerformed'));
    }

    async verifyDeleteIconIsNotDisplayedInTheGrid(): Promise<void> {
        await expect(this.uIDeleteIcon).not.toBeVisible();
    }
}

export class K9PersonnelEntryReportsTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIAddNewButton: Locator;
    readonly uIReportsTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIAddNewButton = page.locator('#cmdAddNew');
        this.uIReportsTable = page.locator('#grdActivity');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async verifyAtCallNo(rowIndex: number): Promise<void> {
        const value = await this.grid.getGridCellInnerText(this.uIReportsTable, 'Call#', rowIndex);
        expect(value).toBe(PoliceData.getK9ModuleValue('CallNo'));
    }

    async verifyAtCaseNo(rowIndex: number): Promise<void> {
        const value = await this.grid.getGridCellInnerText(this.uIReportsTable, 'Case#', rowIndex);
        expect(value).toBe(PoliceData.getK9ModuleValue('CaseNo'));
    }

    async verifyAtK9Handler(rowIndex: number): Promise<void> {
        const value = await this.grid.getGridCellInnerText(this.uIReportsTable, 'K9/Handler', rowIndex);
        expect(value).toBe(PoliceData.getK9ModuleValue('K9Handler'));
    }

    async GetDateListInGrid(): Promise<string[]> {
        return await this.grid.getGridTableColumnValues(this.uIReportsTable, 'Date');
    }

    async verifySortOrder(beforeSort: string[], afterSort: string[]): Promise<void> {
        expect(beforeSort).not.toEqual(afterSort);
    }

    async ClickDateHeaderInGrid(): Promise<void> {
        await this.uIReportsTable.locator('th', { hasText: 'Date' }).click();
        await this.uIReportsTable.locator('th', { hasText: 'Date' }).click();
    }

    async selectAtCallNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIReportsTable, PoliceData.getK9ModuleValue('CallNo'));
    }

    async verifyTheDatesAsDescendingOrderInGrid(): Promise<void> {
        const values = await this.grid.getGridTableColumnValues(this.uIReportsTable, 'Date');
        for (let i = 0; i < values.length - 1; i++) {
            const date1 = new Date(values[i]);
            const date2 = new Date(values[i + 1]);
            expect(date1.getTime()).toBeGreaterThanOrEqual(date2.getTime());
        }
    }
}

export class K9PersonnelEntryTrainingTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIAddTrainingButton: Locator;
    readonly uIAddTrainingTable: Locator;
    readonly uIDeleteIconGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIAddTrainingButton = page.locator('#tabCE_tmpl3_UsrTraining1_btnAddTraining');
        this.uIAddTrainingTable = page.locator('#tabCE_tmpl3_UsrTraining1_grdTraining');
        this.uIDeleteIconGrid = page.locator("//th[@Class='igg_BlueThemeHeaderCaption ig2d2816ff']//span");
    }

    async clickAddTraining(): Promise<void> {
        await this.uIAddTrainingButton.click();
        await this.page.waitForLoadState('load');
    }

    async selectAtK9HandlerInGrid(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.grid.selectRowByCellText(this.uIAddTrainingTable, PoliceData.getK9ModuleValue('K9Handler'));
    }

    async verifyAtK9Handler(rowIndex: number): Promise<void> {
        const value = await this.grid.getGridCellInnerText(this.uIAddTrainingTable, 'K9/Handler', rowIndex);
        expect(value).toBe(PoliceData.getK9ModuleValue('K9Handler'));
    }

    async selectAtTrainingNoInGrid(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.grid.selectRowByCellText(this.uIAddTrainingTable, PoliceData.getK9ModuleValue('TrainingNo'));
    }

    async verifyDeleteIconIsNotDisplayedInTheGrid(): Promise<void> {
        await expect(this.uIDeleteIconGrid).toBeVisible();
    }

    async verifyDeleteConfirmationPopupNotArise(): Promise<void> {
        const isVisible = await this.popup.modalBody.isVisible().catch(() => false);
        expect(isVisible).toBeFalsy();
    }

    async deleteAtTrainingInGridWithCancelPopup(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uIAddTrainingTable, PoliceData.getK9ModuleValue('TrainingNo'));
        await this.popup.confirmNo();
    }

    async selectTrainingHeaderInGrid(): Promise<void> {
        await this.uIAddTrainingTable.locator('th', { hasText: 'Training#' }).click();
    }
}

export class K9PersonnelEntryCommentsTabPage {
    readonly page: Page;
    readonly uIAddNotesButton: Locator;
    readonly uIEnteredOfficer: Locator;
    readonly uIEnteredRemarks: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddNotesButton = page.locator('#btnAddNotes');
        this.uIEnteredOfficer = page.locator('#grdLog_ctl00_lblEnteredBy');
        this.uIEnteredRemarks = page.locator("//table[@id='grdLog']//tr[2]//td//tr//td");
    }

    async clickAddNotes(): Promise<void> {
        await this.uIAddNotesButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtRemarks(): Promise<void> {
        const text = await this.uIEnteredRemarks.innerText();
        expect(text).toContain(PoliceData.getK9ModuleValue('Remarks'));
    }

    async verifyAtOfficer(): Promise<void> {
        const text = await this.uIEnteredOfficer.innerText();
        expect(text).toContain(PoliceData.getK9ModuleValue('Officer'));
    }
}

export class K9PersonnelEntryCertificationsTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uICertificationDropdown: Locator;
    readonly uICertificationNoEdit: Locator;
    readonly uICertifiyingBodyDropdown: Locator;
    readonly uIDateCertified: Locator;
    readonly uIExpireDate: Locator;
    readonly uILocationEdit: Locator;
    readonly uICommentsEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClear: Locator;
    readonly uICertificationTable: Locator;
    readonly uISaveButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIStatusLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uICertificationDropdown = page.locator('#cddCertification_DropDown');
        this.uICertificationNoEdit = page.locator('#txtCertificateNo');
        this.uICertifiyingBodyDropdown = page.locator('#cddCertificateBody_DropDown');
        this.uIDateCertified = page.locator('#dttmCertified_KPIDttmCtrl');
        this.uIExpireDate = page.locator('#dtmExpiration_KPIDttmCtrl');
        this.uILocationEdit = page.locator('#adrLocation_txtFrom');
        this.uICommentsEdit = page.locator('#txtComments');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIClear = page.locator('#cmdClear');
        this.uICertificationTable = page.locator('#grdCertification');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIStatusLabel = page.locator('.statusBar');
    }

    async selectAtCertification(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uICertificationDropdown, PoliceData.getK9ModuleValue('Certification'));
    }

    async enterAtLocation(): Promise<void> {
        await this.uILocationEdit.fill(PoliceData.getK9ModuleValue('Location'));
        await this.uILocationEdit.press('Tab');
    }

    async enterCertifiedDateAsCurrentDate(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIDateCertified.fill(DateHelpers.getCurrentDate());
    }

    async enterExpiredDateAsFuture15days(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIExpireDate.fill(DateHelpers.getFutureDate(15));
    }

    async enterAtComments(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uICommentsEdit.fill(PoliceData.getK9ModuleValue('Comments'));
    }

    async verifyExpireDateAs15daysFuture(rowIndex: number): Promise<void> {
        await this.page.waitForTimeout(1000);
        const value = await this.grid.getGridCellInnerText(this.uICertificationTable, 'Expiration Date', rowIndex);
        expect(value).toBe(DateHelpers.getFutureDate(15, 'M/d/yyyy'));
    }

    async verifyAtCertification(rowIndex: number): Promise<void> {
        await this.page.waitForTimeout(1000);
        const text = await this.grid.getGridCellInnerText(this.uICertificationTable, 'Certification', rowIndex);
        expect(text).toBe(PoliceData.getK9ModuleValue('Certification'));
    }

    async verifyAtComments(rowIndex: number): Promise<void> {
        await this.page.waitForTimeout(1000);
        const cell = await this.grid.getGridCell(this.uICertificationTable, 'Comments', rowIndex);
        await cell.click();
        new BrowserHelpers(this.page).switchToPageByTitle('Remarks');
        const text = await this.page.locator('//b').innerText();
        expect(text).toBe(PoliceData.getK9ModuleValue('Comments'));
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
    }

    async saveInternal(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async verifyUpdateSuccessfulMessage(): Promise<void> {
        const text = (await this.uIStatusLabel.innerText()).trim();
        expect(text).toBe('1003 - Update Successful');
    }

    async verifyDeleteConfirmationPopupNotArise(): Promise<void> {
        const isVisible = await this.popup.modalBody.isVisible().catch(() => false);
        expect(isVisible).toBeFalsy();
    }

    async deleteAtCertificationInGridWithCancelpopup(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uICertificationTable, PoliceData.getK9ModuleValue('Certification'));
        await this.popup.confirmNo();
    }

    async selectCertificationHeaderInGrid(): Promise<void> {
        await this.uICertificationTable.locator('th', { hasText: 'Certification' }).click();
    }
}

export class K9PersonnelEntryAwardsTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uISaveButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIAwardsTable: Locator;
    readonly uIAwardEdit: Locator;
    readonly uIDateAwarded: Locator;
    readonly uIAwardingBodyEdit: Locator;
    readonly uICommentsEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClear: Locator;
    readonly uIStatusLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uISaveButton = page.locator('#cmdSave');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIAwardsTable = page.locator('#grdAwards');
        this.uIAwardEdit = page.locator('#txtAward');
        this.uIDateAwarded = page.locator('#dttmAwarded_KPIDttmCtrl');
        this.uIAwardingBodyEdit = page.locator('#txtAwardingBody');
        this.uICommentsEdit = page.locator('#txtComments');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIClear = page.locator('#cmdClear');
        this.uIStatusLabel = page.locator('.statusBar');
    }

    async enterAwardeddateAsCurrentDate(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIDateAwarded.fill(DateHelpers.getCurrentDate());
    }

    async enterAtAward(): Promise<void> {
        await this.uIAwardEdit.fill(PoliceData.getK9ModuleValue('Award'));
    }

    async enterAtAwardingBody(): Promise<void> {
        await this.uIAwardingBodyEdit.fill(PoliceData.getK9ModuleValue('AwardingBody'));
    }

    async enterAtComments(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uICommentsEdit.fill(PoliceData.getK9ModuleValue('Comments'));
    }

    async verifyDateAwardedAsCurrentDate(rowIndex: number): Promise<void> {
        await this.page.waitForTimeout(1000);
        const value = await this.grid.getGridCellInnerText(this.uIAwardsTable, 'Date Awarded', rowIndex);
        expect(value).toBe(DateHelpers.getCurrentDate('M/d/yyyy'));
    }

    async verifyAtAward(rowIndex: number): Promise<void> {
        await this.page.waitForTimeout(1000);
        const text = await this.grid.getGridCellInnerText(this.uIAwardsTable, 'Award', rowIndex);
        expect(text).toBe(PoliceData.getK9ModuleValue('Award'));
    }

    async verifyAtComments(rowIndex: number): Promise<void> {
        await this.page.waitForTimeout(1000);
        const cell = await this.grid.getGridCell(this.uIAwardsTable, 'Comments', rowIndex);
        await cell.click();
        new BrowserHelpers(this.page).switchToPageByTitle('Remarks');
        const text = await this.page.locator('//b').innerText();
        expect(text).toBe(PoliceData.getK9ModuleValue('Comments'));
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
    }

    async saveInternal(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async verifyUpdateSuccessfulMessage(): Promise<void> {
        const text = (await this.uIStatusLabel.innerText()).trim();
        expect(text).toBe('1003 - Update Successful');
    }

    async verifyDeleteConfirmationPopupNotArise(): Promise<void> {
        const isVisible = await this.popup.modalBody.isVisible().catch(() => false);
        expect(isVisible).toBeFalsy();
    }

    async deleteAtAwardInGridWithCancelPopup(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uIAwardsTable, PoliceData.getK9ModuleValue('Award'));
        await this.popup.confirmNo();
    }

    async selectAwardHeaderInGrid(): Promise<void> {
        await this.uIAwardsTable.locator('th', { hasText: 'Award' }).click();
    }

    async verifyAddButtonNotChangedToUpdate(): Promise<void> {
        expect(await this.uIAddButton.getAttribute('title')).toBe('Add');
    }

    async selectAtAward(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAwardsTable, PoliceData.getK9ModuleValue('Award'));
    }

    async verifyGridCountIsZero(): Promise<void> {
        const count = await this.grid.getRowCount(this.uIAwardsTable);
        expect(count).toBe(0);
    }

    async verifySavePopupNotOccurs(): Promise<void> {
        const isVisible = await this.popup.modalBody.isVisible().catch(() => false);
        expect(isVisible).toBeFalsy();
    }

    async verify6040AcknowledgePopUp(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6040) No data present');
        await this.popup.acknowledgeOk();
    }

    async clickSave(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uISaveButton.click();
    }
}

export class K9TrainingPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIJurisDropDown: Locator;
    readonly uIK9HandlerDropDown: Locator;
    readonly uIK9TrainerComboBox: Locator;
    readonly K9HandlerInfoIcon: Locator;
    readonly uIFacilityComboBox: Locator;
    readonly uITrainingFromDateEdit: Locator;
    readonly uITrainingFromTimeEdit: Locator;
    readonly uIApprovalStatusComboBox: Locator;
    readonly uISearchButton: Locator;
    readonly uITrainingDetailRadioButton: Locator;
    readonly uITrainingSummaryRadioButton: Locator;
    readonly uIAddNewLink: Locator;
    readonly uIAddNew: Locator;
    readonly uITrainingToTimeEdit: Locator;
    readonly uIK9TrainingTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIJurisDropDown = page.locator('#lstJuris');
        this.uIK9HandlerDropDown = page.locator('#cddK9nHandler_DropDown');
        this.uIK9TrainerComboBox = page.locator('#cddTrainer_DropDown');
        this.K9HandlerInfoIcon = page.locator('#imgLoadK9');
        this.uIFacilityComboBox = page.locator('#cddFacility_DropDown');
        this.uITrainingFromDateEdit = page.locator("//input[@id='dtmFromDate_KPIDttmCtrl']");
        this.uITrainingFromTimeEdit = page.locator("//input[@id='dtmToDate_KPIDttmCtrl']");
        this.uIApprovalStatusComboBox = page.locator('#lstTrainingApprovalStatus');
        this.uISearchButton = page.locator('#btnSearch');
        this.uITrainingDetailRadioButton = page.locator('#rdoTraining_0');
        this.uITrainingSummaryRadioButton = page.locator('#rdoTraining_1');
        this.uIAddNewLink = page.locator("//span[text()='Add New']");
        this.uIAddNew = page.locator("//span[@title='Add New Item']");
        this.uITrainingToTimeEdit = page.locator("//input[@id='dtmFromDate_KPIDttmCtrl']");
        this.uIK9TrainingTable = page.locator('#grdTraineDetail');
    }

    async selectAtJurisComboBox(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIJurisDropDown, PoliceData.getK9ModuleValue('Juris'));
    }

    async selectAtK9Handler(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9HandlerDropDown, PoliceData.getK9ModuleValue('K9Handler'));
        await this.uIK9HandlerDropDown.press('Tab');
    }

    async selectAtTrainerComboBox(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9TrainerComboBox, PoliceData.getK9ModuleValue('Trainer'));
    }

    async selectAtFacilityComboBox(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIFacilityComboBox, PoliceData.getK9ModuleValue('Facility'));
    }

    async selectAtApprovalStatusComboBox(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIApprovalStatusComboBox, PoliceData.getK9ModuleValue('ApprovalStatus'));
    }

    async clickAddNewLink(): Promise<void> {
        await this.uIAddNewLink.click();
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clickTrainingDetailRadioButton(): Promise<void> {
        await this.uITrainingDetailRadioButton.click();
    }

    async clickTrainingSummaryRadioButton(): Promise<void> {
        await this.uITrainingSummaryRadioButton.click();
    }

    async clickRowByTrainingNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIK9TrainingTable, PoliceData.getK9ModuleValue('TrainingNo'));
    }

    async clickRowByK9HandlerInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIK9TrainingTable, PoliceData.getK9ModuleValue('K9Handler'));
    }

    async verifyAtTrainerInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIK9TrainingTable, PoliceData.getK9ModuleValue('Trainer'));
        expect(await cell.innerText()).toBe(PoliceData.getK9ModuleValue('Trainer'));
    }

    async verifyAtK9HandlerInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIK9TrainingTable, PoliceData.getK9ModuleValue('K9Handler'));
        expect(await cell.innerText()).toBe(PoliceData.getK9ModuleValue('K9Handler'));
    }

    async clickK9HandlerInGridByStartDate(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIK9TrainingTable, PoliceData.getK9ModuleValue('StartDate'));
        await cell.click();
    }

    async selectRowByAtTrainingNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIK9TrainingTable, PoliceData.getK9ModuleValue('TrainingNo'));
    }

    async clickAddNew(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIAddNew.click();
    }

    async verifyAtStartDateAndTimeInGrid(startDateAndTime: string, TrainingNo: string): Promise<void> {
        const row = await this.grid.getGridRowByCellInnerText(this.uIK9TrainingTable, TrainingNo);
        const dateAndTime = startDateAndTime.substring(0, 6) + startDateAndTime.substring(8, 16);
        expect(await row.innerText()).toContain(dateAndTime);
    }

    async selectRandomGridRow(): Promise<void> {
        await this.grid.selectRandomRow(this.uIK9TrainingTable);
    }
}

export class K9TrainingEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly grid: GridHelpers;

    readonly uIJurisDropDown: Locator;
    readonly uIK9HandlerDropDown: Locator;
    readonly uIK9TrainingYearEdit: Locator;
    readonly uIK9TrainingNumberEdit: Locator;
    readonly uIK9FacilityDropDown: Locator;
    readonly uIK9InstructorDropDown: Locator;
    readonly uIK9FromDateEdit: Locator;
    readonly uIK9FromTimeEdit: Locator;
    readonly uIK9ToDateEdit: Locator;
    readonly uIK9ToTimeEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uIK9HandlerInfoIcon: Locator;
    readonly uIFooterStatus: Locator;
    readonly uIAttachmentTab: Locator;
    readonly uIApprovalTab: Locator;
    readonly uIActivityTab: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIK9PersonnelImage: Locator;
    readonly uIStatusLabel: Locator;
    readonly uIMugShot: Locator;
    readonly uITotalImagesLabel: Locator;
    readonly uIDeleteIcon: Locator;
    readonly uIResetIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIJurisDropDown = page.locator('#lstJuris');
        this.uIK9HandlerDropDown = page.locator('#ddlHandler_DropDown');
        this.uIK9TrainingYearEdit = page.locator('#numTraining_Year');
        this.uIK9TrainingNumberEdit = page.locator('#numTraining_Number');
        this.uIK9FacilityDropDown = page.locator('#cddFacility_DropDown');
        this.uIK9InstructorDropDown = page.locator('#cddInstructor_DropDown');
        this.uIK9FromDateEdit = page.locator('#dttmFrom_KPIDttmCtrl');
        this.uIK9FromTimeEdit = page.locator("//table[@id = 'dttmFromTime_Time']//input");
        this.uIK9ToDateEdit = page.locator('#dttmTo_KPIDttmCtrl');
        this.uIK9ToTimeEdit = page.locator("//table[@id = 'dttmToTime_Time']//input");
        this.uISaveButton = page.locator('#cmdSave');
        this.uIK9HandlerInfoIcon = page.locator('#imgLoadK9');
        this.uIFooterStatus = page.locator("//td[@class='statusBar']");
        this.uIAttachmentTab = page.locator("//span[text()='Attachment']");
        this.uIApprovalTab = page.locator("//span[text()='Approval']");
        this.uIActivityTab = page.locator("//span[text()='Activity']");
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uIK9PersonnelImage = page.locator('#imgNameFrontView');
        this.uIStatusLabel = page.locator('#lblApprovalStatus');
        this.uIMugShot = page.locator('#imgNameFrontView');
        this.uITotalImagesLabel = page.locator('#lblTotalImages');
        this.uIDeleteIcon = page.locator('#cmdDeleteTraining');
        this.uIResetIcon = page.locator('#cmdRefresh');
    }

    async selectAtK9Handler(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9HandlerDropDown, PoliceData.getK9ModuleValue('K9Handler'));
        await this.uIK9HandlerDropDown.press('Tab');
    }

    async switchToActivityTab(): Promise<void> {
        await this.uIActivityTab.click();
        await this.page.waitForLoadState('load');
    }

    async selectFacility(): Promise<void> {
        await this.elementHelpers.randomSelectDropDownOption(this.uIK9FacilityDropDown);
        await this.uIK9FacilityDropDown.press('Tab');
    }

    async selectAtInstructor(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9InstructorDropDown, PoliceData.getK9ModuleValue('Instructor'));
        await this.uIK9InstructorDropDown.press('Tab');
    }

    async tabStartDateTime(): Promise<void> {
        await this.uIK9FromDateEdit.press('Tab');
        await this.uIK9FromTimeEdit.press('Tab');
    }

    async tabEndDateTime(): Promise<void> {
        await this.uIK9ToDateEdit.press('Tab');
        await this.uIK9ToTimeEdit.press('Tab');
    }

    async enterEndDateAsFutureDateByNextDate(): Promise<void> {
        await this.uIK9ToDateEdit.dblclick();
        await this.page.keyboard.press('Backspace');
        await this.uIK9ToDateEdit.fill(DateHelpers.getFutureDate(1));
    }

    async tabOutEndTime(): Promise<void> {
        await this.uIK9ToTimeEdit.press('Tab');
    }

    async VerifyToDatemustbelaterthantheFromDateAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(10004) The To Date must be later than the From Date');
        await this.popup.acknowledgeOk();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForLoadState('load');
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForLoadState('load');
        await this.popup.confirmYes();
    }

    async verifySaveAsDisabled(): Promise<void> {
        await expect(this.uISaveButton).toBeDisabled();
    }

    async verifyK9HandlerAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1018) Required Entries are Missing K9/Handler');
        await this.popup.acknowledgeOk();
    }

    async verifyK9HandlerInfoIconDisplayed(): Promise<void> {
        await expect(this.uIK9HandlerInfoIcon).toBeVisible();
    }

    async clickK9HandlerInfoIcon(): Promise<void> {
        await this.uIK9HandlerInfoIcon.click();
    }

    async verifyAdditionSuccessfulMessageInFooterStatus(): Promise<void> {
        const text = await this.uIFooterStatus.innerText();
        expect(text).toContain('1002 - Addition Successful');
    }

    async verifyAllTabsEnabled(): Promise<void> {
        await expect(this.uIActivityTab).toBeEnabled();
        await expect(this.uIAttachmentTab).toBeEnabled();
        await expect(this.uIApprovalTab).toBeEnabled();
    }

    async clickActivityTab(): Promise<void> {
        await this.uIActivityTab.click();
    }

    async clickAttachmentTab(): Promise<void> {
        await this.uIAttachmentTab.click();
    }

    async clickApprovalTab(): Promise<void> {
        await this.uIApprovalTab.click();
    }

    async closeTheScreen(): Promise<void> {
        await this.page.close();
    }

    async verifyAtCategoryColumnInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.page.locator('#tabCE_tmpl0_usrActivity1_grdTraining'), PoliceData.getK9ModuleValue('Category'));
        expect(await cell.innerText()).toBe(PoliceData.getK9ModuleValue('Category'));
    }

    async verifyActivityTabShowsBlueColour(): Promise<void> {
        const cssValue = await this.uIActivityTab.evaluate(el => getComputedStyle(el).color);
        expect(cssValue).toBe('rgb(0, 0, 255)');
    }

    async verifyUpdateSuccessfulMessageInFooterStatus(): Promise<void> {
        const text = await this.uIFooterStatus.innerText();
        expect(text).toContain('1003 - Update Successful');
    }

    async switchToApprovalTab(): Promise<void> {
        new BrowserHelpers(this.page).switchToFrame('frmPnxGlobalApproval');
    }

    async verifyStatus(): Promise<void> {
        expect(await this.uIStatusLabel.innerText()).toBe(PoliceData.getK9ModuleValue('Status'));
    }

    async verifyStatusAsApproved(): Promise<void> {
        expect(await this.uIStatusLabel.innerText()).toBe('Approved');
    }

    async verifyImageHeightNotPresent(): Promise<void> {
        const h = await this.uIK9PersonnelImage.evaluate(el => getComputedStyle(el).height);
        expect(h).toBe(PoliceData.getK9ModuleValue('WithoutImgHeight'));
    }

    async verifyImageWidthNotPresent(): Promise<void> {
        const w = await this.uIK9PersonnelImage.evaluate(el => getComputedStyle(el).width);
        expect(w).toBe(PoliceData.getK9ModuleValue('WithoutImgWidth'));
    }

    async verifyStatusAsSubmitted(): Promise<void> {
        expect(await this.uIStatusLabel.innerText()).toBe('Submitted');
    }

    async verifyStatusBarMessageAsEmpty(): Promise<void> {
        const text = await this.uIFooterStatus.innerText();
        expect(text.trim()).toBe('');
    }

    async verify1051UpdatedDataExistsAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1051) Updated data exists in the Narrative Tab. You must save or reset.');
        await this.popup.acknowledgeOk();
    }

    async selectK9Handler(): Promise<void> {
        await this.elementHelpers.randomSelectDropDownOption(this.uIK9HandlerDropDown);
        await this.uIK9HandlerDropDown.press('Tab');
    }

    async selectInstructor(): Promise<void> {
        await this.elementHelpers.randomSelectDropDownOption(this.uIK9InstructorDropDown);
        await this.uIK9InstructorDropDown.press('Tab');
    }

    async verifyK9TrainingNo(): Promise<void> {
        const number = await this.uIK9TrainingNumberEdit.inputValue();
        expect(number.trim()).not.toBe('');
    }

    async enterStartDateAsFutureDate(): Promise<void> {
        await this.uIK9FromDateEdit.dblclick();
        await this.page.keyboard.press('Backspace');
        await this.uIK9FromDateEdit.fill(DateHelpers.getFutureDate(1));
    }

    async verifyToDateMustBeLaterAcknowledgeMessage(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await expect(this.popup.modalBody).toContainText('(10004)The To Date must be later than the From Date');
        await this.popup.acknowledgeOk();
    }

    async clickMugShot(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIMugShot.click();
    }

    async verifyAtTotalImagesCount(): Promise<void> {
        const text = await this.uITotalImagesLabel.innerText();
        expect(text).toBe(PoliceData.getK9ModuleValue('TotalImage'));
    }

    async verifyDeleteIconIsDisplayed(): Promise<void> {
        await expect(this.uIDeleteIcon).toBeVisible();
    }

    async clickDeleteIcon(): Promise<void> {
        await this.uIDeleteIcon.click();
    }

    async enterEndDateAsFutureDate(): Promise<void> {
        await this.uIK9ToDateEdit.click();
        await this.uIK9ToDateEdit.fill(DateHelpers.getFutureDate(2));
        await this.uIK9ToDateEdit.press('Tab');
    }

    async saveAndCloseScreen(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await this.page.waitForLoadState('load');
        await this.popup.confirmYes();
    }

    async getStartDateAndTime(): Promise<string> {
        const date = await this.uIK9FromDateEdit.inputValue();
        const time = await this.uIK9FromTimeEdit.inputValue();
        return `${date} ${time}`;
    }

    async enterStartDateAsPastDate(): Promise<void> {
        await this.uIK9FromDateEdit.click();
        await this.uIK9FromDateEdit.clear();
        await this.uIK9FromDateEdit.fill(DateHelpers.getPreviousDateByMonth(1));
        await this.uIK9FromDateEdit.press('Tab');
    }

    async tabOutStartTime(): Promise<void> {
        await this.uIK9FromTimeEdit.click();
        await this.uIK9FromTimeEdit.press('Tab');
    }

    async getTrainingNo(): Promise<string> {
        const year = await this.uIK9TrainingYearEdit.inputValue();
        const no = await this.uIK9TrainingNumberEdit.inputValue();
        return `${year}-${no}`;
    }

    async verify1018AcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1018) Required Entries are Missing K9/Handler');
        await this.popup.acknowledgeOk();
    }

    async verifyAttachmentTabIsDisplayed(): Promise<void> {
        await expect(this.uIAttachmentTab).toBeVisible();
    }

    async clickReset(): Promise<void> {
        await this.uIResetIcon.click();
    }

    async verifyK9HandlerInfoIconNotDisplayed(): Promise<void> {
        await expect(this.uIK9HandlerInfoIcon).not.toBeVisible();
    }

    async verifyK9HandlerDropdownIsNull(): Promise<void> {
        const selected = await this.elementHelpers.getDropDownSelectedItem(this.uIK9HandlerDropDown);
        expect(selected).toBe(PoliceData.getK9ModuleValue('K9HandlerNull'));
    }

    async activityTabIsDisplayed(): Promise<void> {
        await expect(this.uIActivityTab).toBeVisible();
    }
}

export class K9TrainingEntryActivityTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIAddNewActivityButton: Locator;
    readonly uIActivityTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIAddNewActivityButton = page.locator('#tabCE_tmpl0_usrActivity1_btnAddComment');
        this.uIActivityTable = page.locator('#tabCE_tmpl0_usrActivity1_grdTraining');
    }

    async clickAddNewActivity(): Promise<void> {
        await this.uIAddNewActivityButton.click();
    }

    async clickRowByCategoryInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIActivityTable, PoliceData.getK9ModuleValue('Category'));
    }

    async clickFirstRow(): Promise<void> {
        await this.grid.selectRowByIndex(this.uIActivityTable, 0);
    }

    async verifyAddedActivityIsPresentInTheGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIActivityTable, PoliceData.getK9ModuleValue('TrainingCategory'));
        expect(await cell.innerText()).toBe(PoliceData.getK9ModuleValue('TrainingCategory'));
    }

    async verifyAddNewActivityIsEnable(): Promise<void> {
        await expect(this.uIAddNewActivityButton).toBeEnabled();
    }

    async verifyAddNewActivityIsDisabled(): Promise<void> {
        await expect(this.uIAddNewActivityButton).toBeDisabled();
    }
}

export class K9TrainingEntryApprovalTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uINewActionComboBox: Locator;
    readonly uIByEdit: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIDivisionComboBox: Locator;
    readonly uISectionComboBox: Locator;
    readonly uISquadComboBox: Locator;
    readonly uISupervisorCodeEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIHistoryGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uINewActionComboBox = page.locator('#lstStatus');
        this.uIByEdit = page.locator('#lupPFID_CodeValue');
        this.uIDateEdit = page.locator("//input[@id='dttStatusDttm_Date_KPIDttmCtrl']");
        this.uITimeEdit = page.locator("//table[@id='dttStatusDttm_Time']//input");
        this.uIDivisionComboBox = page.locator('#cddDivision_DropDown');
        this.uISectionComboBox = page.locator('#cddSection_DropDown');
        this.uISquadComboBox = page.locator('#cddSquad_DropDown');
        this.uISupervisorCodeEdit = page.locator('#lupSupervisor_CodeValue');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIResetButton = page.locator('#cmdReset');
        this.uIHistoryGrid = page.locator("//table[@id='listMsg']");
    }

    async selectAtNewActionComboBox(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uINewActionComboBox, PoliceData.getK9ModuleValue('NewAction'));
    }

    async tabDateAndTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async tabByField(): Promise<void> {
        await this.uIByEdit.press('Tab');
    }

    async selectAtDivision(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIDivisionComboBox, PoliceData.getK9ModuleValue('Division'));
    }

    async selectAtSection(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uISectionComboBox, PoliceData.getK9ModuleValue('Section'));
    }

    async selectAtSquad(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uISquadComboBox, PoliceData.getK9ModuleValue('Squad'));
    }

    async verifyAtHistoryInGrid(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const cell = await this.grid.getGridCell(this.uIHistoryGrid, PoliceData.getK9ModuleValue('HistoryStatus'));
        expect(await cell.innerText()).toContain(PoliceData.getK9ModuleValue('HistoryStatus'));
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async selectAtNewActionAsApprove(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uINewActionComboBox, 'Approve');
    }

    async verifyAtHistoryInGridAsApproved(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const cell = await this.grid.getGridCell(this.uIHistoryGrid, PoliceData.getK9ModuleValue('HistoryStatus1'));
        expect(await cell.innerText()).toContain('Approved');
    }

    async selectActionAsSendForApproval(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uINewActionComboBox, 'Send for Approval');
        await this.uINewActionComboBox.press('Tab');
    }
}

export class K9TrainingAidPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIJurisDropDown: Locator;
    readonly uIAidNoEdit: Locator;
    readonly uIAidTypeInput: Locator;
    readonly uIAidTypeDropdown: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIVehicleInfoIcon: Locator;
    readonly uIUpdateSuccessfulLable: Locator;
    readonly uISearchDropdown: Locator;
    readonly uIBurriedEdit: Locator;
    readonly uIElevationEdit: Locator;
    readonly uIResultDropdown: Locator;
    readonly uIPlantEdit: Locator;
    readonly uIStartEdit: Locator;
    readonly uIFoundEdit: Locator;
    readonly uIFooterStatusBar: Locator;
    readonly uIK9HandlerDropdown: Locator;
    readonly uIvehiclePlateEdit: Locator;
    readonly uIstateEdit: Locator;
    readonly uIVehicleLookUpIcon: Locator;
    readonly uIQuantityEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIJurisDropDown = page.locator('#lstJuris');
        this.uIAidNoEdit = page.locator('#txtAid');
        this.uIAidTypeInput = page.locator('#cddAidType_Input');
        this.uIAidTypeDropdown = page.locator('#cddAidType_DropDown');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIVehicleInfoIcon = page.locator('#pltVehicle_imgBtn');
        this.uIUpdateSuccessfulLable = page.locator("//b[text()='1003 - Update Successful']");
        this.uISearchDropdown = page.locator('#cddSearch_DropDown');
        this.uIBurriedEdit = page.locator('#txtBurried');
        this.uIElevationEdit = page.locator('#txtElevation');
        this.uIResultDropdown = page.locator('#CddResult_DropDown');
        this.uIPlantEdit = page.locator("//table[@id='dttmPlant_Time']//input");
        this.uIStartEdit = page.locator("//table[@id='dttmStart_Time']//input");
        this.uIFoundEdit = page.locator("//table[@id='dttmFound_Time']//input");
        this.uIFooterStatusBar = page.locator("//td[@class = 'statusBar']");
        this.uIK9HandlerDropdown = page.locator("//select[@id='cddK9nHandler_DropDown']//option[@selected='selected']");
        this.uIvehiclePlateEdit = page.locator('#pltVehicle_PlateNumber');
        this.uIstateEdit = page.locator('#pltVehicle_KPIState');
        this.uIVehicleLookUpIcon = page.locator('#pltVehicle_imgBtn');
        this.uIQuantityEdit = page.locator('#txtQuantity');
    }

    async VerifyRequireEntryMissingAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1018)Required Entries are Missing Aid No');
        await this.popup.acknowledgeOk();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async SaveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async SaveAndCloseScreen(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        await this.popup.confirmYes();
    }

    async enterAtAidNo(): Promise<void> {
        await this.uIAidNoEdit.fill(PoliceData.getK9ModuleValue('AidNo'));
    }

    async selectAtAidType(): Promise<void> {
        await this.uIAidTypeInput.click();
        await this.elementHelpers.selectRadControlDropDownValue(this.uIAidTypeInput, this.uIAidTypeDropdown, PoliceData.getK9ModuleValue('AidType'));
        await this.uIAidTypeInput.press('Tab');
    }

    async clickVehicleInfoIcon(): Promise<void> {
        await this.uIVehicleInfoIcon.click();
    }

    async verifyUpdateSuccessfulMessage(): Promise<void> {
        expect(await this.uIUpdateSuccessfulLable.innerText()).toBe('1003 - Update Successful');
    }

    async selectAtSearch(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uISearchDropdown, PoliceData.getK9ModuleValue('Search'));
    }

    async enterAtBurried(): Promise<void> {
        await this.uIBurriedEdit.fill(PoliceData.getK9ModuleValue('Burried'));
    }

    async enterAtElevation(): Promise<void> {
        await this.uIElevationEdit.fill(PoliceData.getK9ModuleValue('Elevation'));
    }

    async selectAtResult(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIResultDropdown, PoliceData.getK9ModuleValue('Result'));
    }

    async enterAtPlant(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIPlantEdit.click();
        await this.uIPlantEdit.fill(PoliceData.getK9ModuleValue('Plant'));
    }

    async enterAtStart(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIStartEdit.click();
        await this.uIStartEdit.fill(PoliceData.getK9ModuleValue('Start'));
    }

    async enterAtFound(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIFoundEdit.click();
        await this.uIFoundEdit.fill(PoliceData.getK9ModuleValue('Found'));
    }

    async verifyAdditionSuccessfulMsginFooterStatus(): Promise<void> {
        const text = await this.uIFooterStatusBar.innerText();
        expect(text).toContain('1002 - Addition Successful');
    }

    async verifyK9Handler(): Promise<void> {
        expect(await this.uIK9HandlerDropdown.innerText()).toBe(PoliceData.getK9ModuleValue('K9OrHandler'));
    }

    async enterAtVehiclePlate(): Promise<void> {
        await this.uIvehiclePlateEdit.fill(PoliceData.getK9ModuleValue('VehiclePlate'));
        await this.uIvehiclePlateEdit.press('Tab');
        await this.elementHelpers.selectDropDownOption(this.uIstateEdit, PoliceData.getK9ModuleValue('State'));
        await this.uIstateEdit.press('Tab');
    }

    async verifyAtPlant(): Promise<void> {
        const plant = await this.uIPlantEdit.inputValue();
        const testData = PoliceData.getTestContextData('Plant');
        if (testData.charAt(0) === '0') {
            expect(plant).toBe(testData.substring(1));
        } else {
            expect(plant).toBe(testData);
        }
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async verifyAtStart(): Promise<void> {
        const start = await this.uIStartEdit.inputValue();
        const testData = PoliceData.getTestContextData('Start');
        if (testData.charAt(0) === '0') {
            expect(start).toBe(testData.substring(1));
        } else {
            expect(start).toBe(testData);
        }
    }

    async verifyAtFound(): Promise<void> {
        const found = await this.uIFoundEdit.inputValue();
        const testData = PoliceData.getTestContextData('Found');
        if (testData.charAt(0) === '0') {
            expect(found).toBe(testData.substring(1));
        } else {
            expect(found).toBe(testData);
        }
    }

    async verifySaveConfirmationIsArised(): Promise<void> {
        await expect(this.popup.modalBody).toBeVisible();
    }

    async verifySaveConfirmationMessageAndAccept(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(3) Do You Want To Save All Of The Entered Details?');
        await this.popup.confirmYes();
    }

    async verifySaveConfirmationIsNotArised(): Promise<void> {
        const isVisible = await this.popup.modalBody.isVisible().catch(() => false);
        expect(isVisible).toBeFalsy();
    }

    async clickVehicleLookUpIcon(): Promise<void> {
        await this.uIVehicleLookUpIcon.click();
    }

    async verifyAtPlate(): Promise<void> {
        const vehiclePlate = await this.uIvehiclePlateEdit.inputValue();
        expect(vehiclePlate).toBe(PoliceData.getK9ModuleValue('Plate'));
    }

    async verifyAtState(): Promise<void> {
        const state = await this.elementHelpers.getDropDownSelectedItem(this.uIstateEdit);
        expect(state).toBe(PoliceData.getK9ModuleValue('State'));
    }

    async enterAtQuantity(): Promise<void> {
        await this.uIQuantityEdit.fill(PoliceData.getK9ModuleValue('Quantity'));
    }

    async verifyAtQuantity(): Promise<void> {
        const quantity = await this.uIQuantityEdit.inputValue();
        expect(quantity).toBe(PoliceData.getK9ModuleValue('Quantity'));
    }
}

export class K9ActivityEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly grid: GridHelpers;

    readonly uISaveButton: Locator;
    readonly uIK9TrainingCategoryDropdown: Locator;
    readonly uIK9TrainingTypeDropdown: Locator;
    readonly uIK9SubTypeDropdown: Locator;
    readonly uIK9HandlerComboBox: Locator;
    readonly uIDetailsTab: Locator;
    readonly uIObjectivesTab: Locator;
    readonly uICommentsTab: Locator;
    readonly uITrainingAidsTab: Locator;
    readonly uIParticipantsTab: Locator;
    readonly uITrackAndMapTab: Locator;
    readonly uIFooterStatusLabel: Locator;
    readonly uITrackAndMap: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.grid = new GridHelpers(page);

        this.uISaveButton = page.locator('#cmdSave');
        this.uIK9TrainingCategoryDropdown = page.locator('#cddTrainingCategory_DropDown');
        this.uIK9TrainingTypeDropdown = page.locator('#cddTrainingType_DropDown');
        this.uIK9SubTypeDropdown = page.locator('#cddSubType_DropDown');
        this.uIK9HandlerComboBox = page.locator('#cddK9nHandler_DropDown');
        this.uIDetailsTab = page.locator("//span[text()='Details']");
        this.uIObjectivesTab = page.locator("//span[text()='Objectives']");
        this.uICommentsTab = page.locator("//span[text()='Comments']");
        this.uITrainingAidsTab = page.locator("//span[text()='Training Aids']");
        this.uIParticipantsTab = page.locator("//span[text()='Participants']");
        this.uITrackAndMapTab = page.locator("//span[text()='Track & Map']");
        this.uIFooterStatusLabel = page.locator("//td[@class='statusBar']");
        this.uITrackAndMap = page.locator("//span[text()='Track & Map']");
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForLoadState('load');
        await this.popup.confirmYes();
    }

    async saveAndCloseScreen(): Promise<void> {
        await this.page.locator('#cmdSaveNClose').click();
        await this.page.waitForLoadState('load');
        await this.popup.confirmYes();
    }

    async switchToActivityEntryDetailsTab(): Promise<void> {
        await this.uIDetailsTab.click();
        await this.page.waitForLoadState('load');
    }

    async selectAtTrainingCategory(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9TrainingCategoryDropdown, PoliceData.getK9ModuleValue('TrainingCategory'));
        await this.uIK9TrainingCategoryDropdown.press('Tab');
    }

    async selectAtK9HandlerComboBox(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9HandlerComboBox, PoliceData.getK9ModuleValue('K9Handler'));
        await this.uIK9HandlerComboBox.press('Tab');
    }

    async verifyAtK9HandlerComboBox(): Promise<void> {
        const selected = await this.elementHelpers.getDropDownSelectedItem(this.uIK9HandlerComboBox);
        expect(selected).toBe(PoliceData.getK9ModuleValue('K9Handler'));
    }

    async selectAtTrainingTypeComboBox(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9TrainingTypeDropdown, PoliceData.getK9ModuleValue('TrainingType'));
        await this.uIK9TrainingTypeDropdown.press('Tab');
    }

    async selectAtSubTypeComboBox(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9SubTypeDropdown, PoliceData.getK9ModuleValue('SubType'));
        await this.uIK9SubTypeDropdown.press('Tab');
    }

    async clickDetailsTab(): Promise<void> {
        await this.uIDetailsTab.click();
    }

    async clickObjectivesTab(): Promise<void> {
        await this.uIObjectivesTab.click();
    }

    async clickCommentsTab(): Promise<void> {
        await this.uICommentsTab.click();
    }

    async verifyAdditionSuccessfulMessageInFooterStatus(): Promise<void> {
        const text = await this.uIFooterStatusLabel.innerText();
        expect(text).toContain('1002 - Addition Successful');
    }

    async verifyUpdateSuccessfulMessageInFooterStatus(): Promise<void> {
        const text = (await this.uIFooterStatusLabel.innerText()).trim();
        expect(text).toContain('1003 - Update Successful');
    }

    async VerifyToDatemustbelaterthantheFromDateAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(10004) The To Date must be later than the From Date');
        await this.popup.acknowledgeOk();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForLoadState('load');
    }

    async clickTrainingAidsTab(): Promise<void> {
        await this.uITrainingAidsTab.click();
        await this.page.waitForLoadState('load');
    }

    async switchToActiviyEntryParticipantsTab(): Promise<void> {
        await this.uIParticipantsTab.click();
        await this.page.waitForLoadState('load');
    }

    async clickAllTabs(): Promise<void> {
        await this.uIDetailsTab.click();
        await this.uIObjectivesTab.click();
        await this.uICommentsTab.click();
        await this.uITrainingAidsTab.click();
        await this.uIParticipantsTab.click();
        await this.uITrackAndMapTab.click();
    }

    async closeTheScreen(): Promise<void> {
        await this.page.close();
    }

    async saveNClose(): Promise<void> {
        await this.page.locator('#cmdSaveNClose').click();
        await this.page.waitForLoadState('load');
        await this.popup.confirmYes();
    }

    async switchToActiviyEntryTrainingAidsTab(): Promise<void> {
        await this.uITrainingAidsTab.click();
        await this.page.waitForLoadState('load');
    }

    async verify6040UnableToLoadLocationFromCodeAckNotOpened(): Promise<void> {
        const isVisible = await this.popup.modalBody.isVisible().catch(() => false);
        expect(isVisible).toBeFalsy();
    }

    async verifyDetailsTabIsDisplayed(): Promise<void> {
        await expect(this.uIDetailsTab).toBeVisible();
    }

    async verifyObjectivesTabIsDisplayed(): Promise<void> {
        await expect(this.uIObjectivesTab).toBeVisible();
    }

    async verifyTrainingAidsTabIsDisplayed(): Promise<void> {
        await expect(this.uITrainingAidsTab).toBeVisible();
    }

    async verifyCommentsTabIsDisplayed(): Promise<void> {
        await expect(this.uICommentsTab).toBeVisible();
    }

    async verifyParticipantsTabIsDisplayed(): Promise<void> {
        await expect(this.uIParticipantsTab).toBeVisible();
    }

    async verifyTrackAndMapTabIsDisplayed(): Promise<void> {
        await expect(this.uITrackAndMapTab).toBeVisible();
    }

    async verifySaveConfirmationIsArised(): Promise<void> {
        await expect(this.popup.modalBody).toBeVisible();
    }

    async verifySaveConfirmationMessageAndAccept(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(3) Do You Want To Save All Of The Entered Details?');
        await this.popup.confirmYes();
    }

    async verifySaveConfirmationIsNotArised(): Promise<void> {
        const isVisible = await this.popup.modalBody.isVisible().catch(() => false);
        expect(isVisible).toBeFalsy();
    }

    async clickTrackAndMapTab(): Promise<void> {
        await this.uITrackAndMapTab.click();
    }

    async verifyUnableToLoadWeatherInfoForLocationAcknowledgePopUpIsNotArising(): Promise<void> {
        const isVisible = await this.popup.modalBody.isVisible().catch(() => false);
        expect(isVisible).toBeFalsy();
    }
}

export class K9ActivityEntryDetailsTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIDetailsFromDateEdit: Locator;
    readonly uIDetailsFromTimeEdit: Locator;
    readonly uIDetailsToDateEdit: Locator;
    readonly uIDetailsToTimeEdit: Locator;
    readonly uIDetailsTabscheduledTimeEdit: Locator;
    readonly uIDetailsTabscheduledDateEdit: Locator;
    readonly uIDescribeArea: Locator;
    readonly uITerrainDropDown: Locator;
    readonly uISurfaceTypeDropDown: Locator;
    readonly uIActivityLocationDropdown: Locator;
    readonly uIConditionsDropDown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIDetailsFromDateEdit = page.locator('#tabAE_tmpl0_usrDetails1_dttmFrom_KPIDttmCtrl');
        this.uIDetailsFromTimeEdit = page.locator("//table[@id = 'tabAE_tmpl0_usrDetails1_dttmFromTime_Time']//input");
        this.uIDetailsToDateEdit = page.locator('#tabAE_tmpl0_usrDetails1_dttmTo_KPIDttmCtrl');
        this.uIDetailsToTimeEdit = page.locator("//table[@id = 'tabAE_tmpl0_usrDetails1_dttmToTime_Time']//input");
        this.uIDetailsTabscheduledTimeEdit = page.locator("//table[@id = 'tabAE_tmpl0_usrDetails1_dttmSchTime_Time']//input");
        this.uIDetailsTabscheduledDateEdit = page.locator('#tabAE_tmpl0_usrDetails1_dttmSchDate_KPIDttmCtrl');
        this.uIDescribeArea = page.locator('#tabAE_tmpl0_usrDetails1_txtDescribeArea');
        this.uITerrainDropDown = page.locator('#tabAE_tmpl0_usrDetails1_cddTerrain_DropDown');
        this.uISurfaceTypeDropDown = page.locator('#tabAE_tmpl0_usrDetails1_cddSurfaceType_DropDown');
        this.uIActivityLocationDropdown = page.locator('#tabAE_tmpl0_usrDetails1_drpActivityLocation_DropDown');
        this.uIConditionsDropDown = page.locator('#tabAE_tmpl0_usrDetails1_cddConditions_DropDown');
    }

    async tabStartDateTime(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIDetailsFromDateEdit.press('Tab');
        await this.uIDetailsFromDateEdit.press('Tab');
    }

    async tabScheduledDateTime(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIDetailsTabscheduledDateEdit.press('Tab');
        await this.uIDetailsTabscheduledTimeEdit.press('Tab');
    }

    async tabEndDateTime(): Promise<void> {
        await this.uIDetailsToDateEdit.press('Tab');
        await this.uIDetailsToTimeEdit.press('Tab');
    }

    async enterEndDateTime(): Promise<void> {
        await this.uIDetailsToDateEdit.click();
        await this.uIDetailsToDateEdit.clear();
        await this.uIDetailsToDateEdit.fill(DateHelpers.getFutureDate(1));
        await this.uIDetailsToDateEdit.press('Tab');
    }

    async VerifyToDatemustbelaterthantheFromDateAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(10004) The To Date must be later than the From Date');
        await this.popup.acknowledgeOk();
    }

    async enterEndDateAsFutureDateByNextDate(): Promise<void> {
        await this.uIDetailsToDateEdit.dblclick();
        await this.page.keyboard.press('Backspace');
        await this.uIDetailsToDateEdit.fill(DateHelpers.getFutureDate(1));
    }

    async EnterTextInDescribeArea(): Promise<void> {
        await this.uIDescribeArea.fill(PoliceData.getK9ModuleValue('DescribeArea'));
    }

    async verifyAtDescribeArea(): Promise<void> {
        const text = await this.uIDescribeArea.inputValue();
        expect(text).toBe(PoliceData.getK9ModuleValue('DescribeArea'));
    }

    async selectAtTerrain(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITerrainDropDown, PoliceData.getK9ModuleValue('Terrain'));
    }

    async selectAtActivityLocation(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIActivityLocationDropdown, PoliceData.getK9ModuleValue('ActivityLocation'));
    }

    async selectAtSurfaceType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uISurfaceTypeDropDown, PoliceData.getK9ModuleValue('SurfaceType'));
    }

    async selectAtConditions(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIConditionsDropDown, PoliceData.getK9ModuleValue('Conditions'));
    }
}

export class K9ActivityEntryTrainingAidsTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uIHidesVerifyByEdit: Locator;
    readonly uIFalseAlertsEdit: Locator;
    readonly uIBlindSearchCheckbox: Locator;
    readonly uIDoubleBlindSearchbox: Locator;
    readonly uIAllAidCheckbox: Locator;
    readonly uIAnyTrainingCheckbox: Locator;
    readonly uIAddAidButton: Locator;
    readonly uITrainingAidTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);

        this.uIHidesVerifyByEdit = page.locator('#tabAE_tmpl3_usrTrainingAid1_txtHides');
        this.uIFalseAlertsEdit = page.locator('#tabAE_tmpl3_usrTrainingAid1_txtFalseAlerts');
        this.uIBlindSearchCheckbox = page.locator('#tabAE_tmpl3_usrTrainingAid1_chkBlindSearch');
        this.uIDoubleBlindSearchbox = page.locator('#tabAE_tmpl3_usrTrainingAid1_chkDoubleBlind');
        this.uIAllAidCheckbox = page.locator('#tabAE_tmpl3_usrTrainingAid1_chkAidAccounted');
        this.uIAnyTrainingCheckbox = page.locator('#tabAE_tmpl3_usrTrainingAid1_chkAidLost');
        this.uIAddAidButton = page.locator('#tabAE_tmpl3_usrTrainingAid1_btnAddComment');
        this.uITrainingAidTable = page.locator('#tabAE_tmpl3_usrTrainingAid1_grdTrainingAid');
    }

    async enterHidesVerifiedBy(): Promise<void> {
        await this.uIHidesVerifyByEdit.fill(PoliceData.getK9ModuleValue('HidesVerifiedBy'));
    }

    async enterFalseAlerts(): Promise<void> {
        await this.uIFalseAlertsEdit.fill(PoliceData.getK9ModuleValue('FalseAlerts'));
    }

    async clickAddAidButton(): Promise<void> {
        await this.uIAddAidButton.click();
    }

    async verifyAtAidNo(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uITrainingAidTable, PoliceData.getK9ModuleValue('AidNo'), 'Aid#');
        expect(await cell.innerText()).toBe(PoliceData.getK9ModuleValue('AidNo'));
    }

    async clickRowByAtAidTypeInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uITrainingAidTable, PoliceData.getK9ModuleValue('AidType'));
    }

    async verifyAtSearch(): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uITrainingAidTable, 'Search', 0);
        expect(text).toBe(PoliceData.getK9ModuleValue('Search'));
    }

    async verifyAtBurried(): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uITrainingAidTable, 'Burried', 0);
        expect(text).toBe(PoliceData.getK9ModuleValue('Burried'));
    }

    async verifyAtElevation(): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uITrainingAidTable, 'Elevation', 0);
        expect(text).toBe(PoliceData.getK9ModuleValue('Elevation'));
    }

    async verifyAtResult(): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uITrainingAidTable, 'Result', 0);
        expect(text).toBe(PoliceData.getK9ModuleValue('ResultCode'));
    }

    async verifyAtPlant(): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uITrainingAidTable, 'Plant', 0);
        expect(text).toBe(PoliceData.getK9ModuleValue('Plant'));
    }

    async verifyAtStart(): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uITrainingAidTable, 'Start', 0);
        expect(text).toBe(PoliceData.getK9ModuleValue('Start'));
    }

    async verifyAtFound(): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uITrainingAidTable, 'Found', 0);
        expect(text).toBe(PoliceData.getK9ModuleValue('Found'));
    }
}

export class K9ActivityEntryParticipantsTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIAgencyRadioButton: Locator;
    readonly uIMutualAidTeamMemberRadioButton: Locator;
    readonly uIPFCodeEdit: Locator;
    readonly uIPFLookupButton: Locator;
    readonly uIParticipantsActivityDropdown: Locator;
    readonly uINotesEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameIDEdit: Locator;
    readonly uIParticipantsResultTable: Locator;
    readonly uIAddressIBubbleIcon: Locator;
    readonly uIPFIBubbleIcon: Locator;
    readonly uIParticipantsActivityComboBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIAgencyRadioButton = page.locator('#tabAE_tmpl4_usrParticipants1_rdoTeam_0');
        this.uIMutualAidTeamMemberRadioButton = page.locator('#tabAE_tmpl4_usrParticipants1_rdoTeam_1');
        this.uIPFCodeEdit = page.locator('#tabAE_tmpl4_usrParticipants1_lupPF_CodeValue');
        this.uIPFLookupButton = page.locator('#tabAE_tmpl4_usrParticipants1_lupPF_imgBtn');
        this.uIParticipantsActivityDropdown = page.locator('#tabAE_tmpl4_usrParticipants1_cddActivity_DropDown');
        this.uINotesEdit = page.locator('#tabAE_tmpl4_usrParticipants1_txtNotes');
        this.uIAddButton = page.locator('#tabAE_tmpl4_usrParticipants1_imgAddComments');
        this.uIClearButton = page.locator('#tabAE_tmpl4_usrParticipants1_imgClearComments');
        this.uINameTypeEdit = page.locator('#tabAE_tmpl4_usrParticipants1_nmcName_NameType');
        this.uINameIDEdit = page.locator('#tabAE_tmpl4_usrParticipants1_nmcName_NameTypeID');
        this.uIParticipantsResultTable = page.locator('#tabAE_tmpl4_usrParticipants1_grdNames');
        this.uIAddressIBubbleIcon = page.locator('#tabAE_tmpl4_usrParticipants1_nmcName_imgSrch');
        this.uIPFIBubbleIcon = page.locator('#tabAE_tmpl4_usrParticipants1_lupPF_cmdIncOnAddr');
        this.uIParticipantsActivityComboBox = page.locator('#tabAE_tmpl4_usrParticipants1_cddActivity_DropDown');
    }

    async clickAgencyRadioButton(): Promise<void> {
        await this.uIAgencyRadioButton.click();
    }

    async clickMutualAidTeamMemberRadioButton(): Promise<void> {
        await this.uIMutualAidTeamMemberRadioButton.click();
    }

    async enterAtPF(): Promise<void> {
        await this.uIPFCodeEdit.fill(PoliceData.getK9ModuleValue('PFCode'));
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async clickPFSearchIcon(): Promise<void> {
        await this.uIPFLookupButton.click();
    }

    async verifyPFIBubbleIsDisplayed(): Promise<void> {
        await expect(this.uIPFIBubbleIcon).toBeVisible();
    }

    async enterAtNameID(): Promise<void> {
        const nameID = PoliceData.getK9ModuleValue('NameID');
        await this.uINameTypeEdit.fill(nameID.substring(0, 1));
        await this.uINameIDEdit.fill(nameID.substring(2));
        await this.uINameIDEdit.press('Tab');
    }

    async selectRowByAtIDNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIParticipantsResultTable, PoliceData.getK9ModuleValue('PF'));
    }

    async selectRowByAtNameInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIParticipantsResultTable, PoliceData.getK9ModuleValue('Name'));
    }

    async verifyDuplicationAcknowledgeMessageFor45(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1019) Duplication Of Data Found');
        await this.popup.acknowledgeOk();
    }

    async verifyAddressIBubbleIsDisplayed(): Promise<void> {
        await expect(this.uIAddressIBubbleIcon).toBeVisible();
    }

    async verifyNameIDInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIParticipantsResultTable, 'ID#', 0);
        expect(await cell.innerText()).toBe(PoliceData.getK9ModuleValue('NameID'));
    }

    async verifyMutualAidInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIParticipantsResultTable, 'Mutual Aid', 0);
        expect(await cell.innerText()).toBe(PoliceData.getK9ModuleValue('MutualAid'));
    }

    async selectAtParticipantsActivity(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIParticipantsActivityComboBox, PoliceData.getK9ModuleValue('ParticipantsActivity'));
    }

    async verifyActivityInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIParticipantsResultTable, 'Activity', 0);
        expect(await cell.innerText()).toBe(PoliceData.getK9ModuleValue('ParticipantsActivity'));
    }

    async verifyAtNameInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIParticipantsResultTable, PoliceData.getK9ModuleValue('Name'));
        expect(await cell.innerText()).toBe(PoliceData.getK9ModuleValue('Name'));
    }

    async verify7078AcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(7078) Either Unit or PF is mandatory');
        await this.popup.acknowledgeOk();
    }
}

export class K9ActivityEntryObjectivesTabPage {
    readonly page: Page;
    readonly uITextArea: Locator;
    readonly uIRichTextArea: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uITextArea = page.locator('#tabAE_tmpl1_usrObjectives1_rteKPITxt_contentIframe');
        this.uIRichTextArea = page.locator('//body');
    }

    async enterText(): Promise<void> {
        const frame = this.page.frameLocator('#tabAE_tmpl1_usrObjectives1_rteKPITxt_contentIframe');
        await frame.locator('body').fill('Test Automation');
    }

    async verifyAtRichText(): Promise<void> {
        const frame = this.page.frameLocator('#tabAE_tmpl1_usrObjectives1_rteKPITxt_contentIframe');
        expect(await frame.locator('body').innerText()).toBe(PoliceData.getK9ModuleValue('RichText'));
    }

    async switchToRichText(): Promise<void> {
        new BrowserHelpers(this.page).switchToFrame('tabAE_tmpl1_usrObjectives1_rteKPITxt_contentIframe');
    }
}

export class K9ActivityEntryCommentsTabPage {
    readonly page: Page;
    readonly uIHandlerText: Locator;
    readonly uIHandlerRichTextFrame: Locator;
    readonly uITrainerText: Locator;
    readonly uITrainerRichTextFrame: Locator;
    readonly uIRichTextArea: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIHandlerText = page.locator('#tabAE_tmpl2_usrComments1_rteKPITxtHandler_contentIframe');
        this.uIHandlerRichTextFrame = page.locator('#tabAE_tmpl2_usrComments1_rteKPITxtHandler_contentIframe');
        this.uITrainerText = page.locator('#tabAE_tmpl2_usrComments1_rteKPITxtTrainer_contentIframe');
        this.uITrainerRichTextFrame = page.locator('#tabAE_tmpl2_usrComments1_rteKPITxtTrainer_contentIframe');
        this.uIRichTextArea = page.locator('//body');
    }

    async enterHandlerCommentsText(): Promise<void> {
        const frame = this.page.frameLocator('#tabAE_tmpl2_usrComments1_rteKPITxtHandler_contentIframe');
        await frame.locator('body').fill('Test Automation');
    }

    async enterTrainerCommentsText(): Promise<void> {
        const frame = this.page.frameLocator('#tabAE_tmpl2_usrComments1_rteKPITxtTrainer_contentIframe');
        await frame.locator('body').fill('Test Automation');
    }

    async verifyAtHandlerComment(): Promise<void> {
        const frame = this.page.frameLocator('#tabAE_tmpl2_usrComments1_rteKPITxtHandler_contentIframe');
        expect(await frame.locator('body').innerText()).toBe(PoliceData.getK9ModuleValue('HandlerComment'));
    }

    async verifyAtTrainerComment(): Promise<void> {
        const frame = this.page.frameLocator('#tabAE_tmpl2_usrComments1_rteKPITxtTrainer_contentIframe');
        expect(await frame.locator('body').innerText()).toBe(PoliceData.getK9ModuleValue('TrainerComment'));
    }

    async switchToHandlerRichTextFrame(): Promise<void> {
        new BrowserHelpers(this.page).switchToFrame('tabAE_tmpl2_usrComments1_rteKPITxtHandler_contentIframe');
    }

    async switchToTrainerRichTextFrame(): Promise<void> {
        new BrowserHelpers(this.page).switchToFrame('tabAE_tmpl2_usrComments1_rteKPITxtTrainer_contentIframe');
    }
}

export class K9ActivityEntryTracksAndMapsTabPage {
    readonly page: Page;
    readonly elementHelpers: ElementHelpers;

    readonly uITrackDataTab: Locator;
    readonly uILengthOfTrackEdit: Locator;
    readonly uILengthOfTrackDropdown: Locator;
    readonly uITrackSurfacesEdit: Locator;
    readonly uIGroundSurfaceConditionEdit: Locator;
    readonly uIApproxAgeOfTrackTimeEdit: Locator;
    readonly uITimeTakenToTrackEdit: Locator;
    readonly uISuspectObjectLocatedDropdown: Locator;
    readonly uIByTrackingTeamCheckbox: Locator;
    readonly ByPerimeterCheckbox: Locator;
    readonly uIByOtherMeansCheckbox: Locator;
    readonly uINotesEdit: Locator;
    readonly uIEnterLocationEdit: Locator;
    readonly uIAddTrackButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elementHelpers = new ElementHelpers(page);

        this.uITrackDataTab = page.locator("//span[text()='Track Data']");
        this.uILengthOfTrackEdit = page.locator('#tabAE_tmpl5_usrTrackMap1_tabTrackMap_tmpl0_usrTrackData_txtLen');
        this.uILengthOfTrackDropdown = page.locator('#tabAE_tmpl5_usrTrackMap1_tabTrackMap_tmpl0_usrTrackData_cddMeasurement_DropDown');
        this.uITrackSurfacesEdit = page.locator('#tabAE_tmpl5_usrTrackMap1_tabTrackMap_tmpl0_usrTrackData_txtTrack');
        this.uIGroundSurfaceConditionEdit = page.locator('#tabAE_tmpl5_usrTrackMap1_tabTrackMap_tmpl0_usrTrackData_txtSurface');
        this.uIApproxAgeOfTrackTimeEdit = page.locator("//table[@id='tabAE_tmpl5_usrTrackMap1_tabTrackMap_tmpl0_usrTrackData_tmTrackAge_Time']//input");
        this.uITimeTakenToTrackEdit = page.locator("//table[@id='tabAE_tmpl5_usrTrackMap1_tabTrackMap_tmpl0_usrTrackData_tmTrackTaken_Time']//input");
        this.uISuspectObjectLocatedDropdown = page.locator('#tabAE_tmpl5_usrTrackMap1_tabTrackMap_tmpl0_usrTrackData_cddSuspectLocated_DropDown');
        this.uIByTrackingTeamCheckbox = page.locator('#tabAE_tmpl5_usrTrackMap1_tabTrackMap_tmpl0_usrTrackData_chkTracking');
        this.ByPerimeterCheckbox = page.locator('#tabAE_tmpl5_usrTrackMap1_tabTrackMap_tmpl0_usrTrackData_chkPerimeter');
        this.uIByOtherMeansCheckbox = page.locator('#tabAE_tmpl5_usrTrackMap1_tabTrackMap_tmpl0_usrTrackData_chkOtherMeans');
        this.uINotesEdit = page.locator('#tabAE_tmpl5_usrTrackMap1_tabTrackMap_tmpl0_usrTrackData_txtNotes');
        this.uIEnterLocationEdit = page.locator('#pac-input');
        this.uIAddTrackButton = page.locator('#tabAE_tmpl5_usrTrackMap1_tabTrackMap_tmpl1_usrMaptrack_cmdMapLayer');
    }

    async enterAtLengthOfTrack(): Promise<void> {
        await this.uILengthOfTrackEdit.fill(PoliceData.getK9ModuleValue('LengthOfTrack'));
    }

    async selectAtLengthOfTrack(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uILengthOfTrackDropdown, PoliceData.getK9ModuleValue('SelectLengthOfTrack'));
    }

    async enterAtTrackSurfaces(): Promise<void> {
        await this.uITrackSurfacesEdit.fill(PoliceData.getK9ModuleValue('TrackSurface'));
    }

    async enterAtGroundSurfaceCondition(): Promise<void> {
        await this.uIGroundSurfaceConditionEdit.fill(PoliceData.getK9ModuleValue('GroundSurfaceCondition'));
    }

    async enterAtApproximateAgeOfTrack(): Promise<void> {
        await this.uIApproxAgeOfTrackTimeEdit.fill(PoliceData.getK9ModuleValue('ApproxAgeOfTrackTime'));
    }

    async enterAtTimeTakenToTrack(): Promise<void> {
        await this.uITimeTakenToTrackEdit.fill(PoliceData.getK9ModuleValue('TimeTakenToTrack'));
    }

    async selectAtSuspectObjectLocated(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uISuspectObjectLocatedDropdown, PoliceData.getK9ModuleValue('SuspectObjectLocated'));
    }

    async enterAtNotes(): Promise<void> {
        await this.uINotesEdit.fill(PoliceData.getK9ModuleValue('Notes'));
    }

    async clickByTrackingTeam(): Promise<void> {
        await this.uIByTrackingTeamCheckbox.click();
    }

    async clickByPerimeterCheckbox(): Promise<void> {
        await this.ByPerimeterCheckbox.click();
    }

    async clickByOtherMeansCheckbox(): Promise<void> {
        await this.uIByOtherMeansCheckbox.click();
    }

    async clickTrackDataTab(): Promise<void> {
        await this.uITrackDataTab.click();
    }
}

export class K9MedicalPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIK9OrHandlerDropDown: Locator;
    readonly uITypeOfVisitDropDown: Locator;
    readonly uISearchButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIK9MedicalResulTable: Locator;
    readonly uIK9HandlerDropdown: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uIVisitDateFromEdit: Locator;
    readonly uIVisitDateToEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIK9OrHandlerDropDown = page.locator('#cddK9nHandler_DropDown');
        this.uITypeOfVisitDropDown = page.locator('#drpTypeOfVisit_DropDown');
        this.uISearchButton = page.locator('#cmdSearch');
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIK9MedicalResulTable = page.locator('#grdMedicalSearch');
        this.uIK9HandlerDropdown = page.locator('#cddK9nHandler_DropDown');
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uIVisitDateFromEdit = page.locator('#dtmVisitFromDate_KPIDttmCtrl');
        this.uIVisitDateToEdit = page.locator('#dtmVisitToDate_KPIDttmCtrl');
    }

    async selectAtK9OrHandler(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9OrHandlerDropDown, PoliceData.getK9ModuleValue('K9Handler'));
    }

    async selectAtK9OrHandler1(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9OrHandlerDropDown, PoliceData.getK9ModuleValue('K9Handler1'));
    }

    async selectAtTypeOfVisit(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITypeOfVisitDropDown, PoliceData.getK9ModuleValue('TypeOfVisit'));
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async verifyAtReasonInGrid(): Promise<void> {
        const row = await this.grid.getGridRowByCellInnerText(this.uIK9MedicalResulTable, PoliceData.getK9ModuleValue('Reason'));
        expect(await row.innerText()).toContain(PoliceData.getK9ModuleValue('Reason'));
    }

    async verifyAtTypeOfVisitInGrid(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const row = await this.grid.getGridRowByCellInnerText(this.uIK9MedicalResulTable, PoliceData.getK9ModuleValue('TypeOfVisit'));
        expect(await row.innerText()).toContain(PoliceData.getK9ModuleValue('TypeOfVisit'));
    }

    async verifyDateAsCurrentDateInGrid(): Promise<void> {
        const values = await this.grid.getGridTableColumnValues(this.uIK9MedicalResulTable, 'Date');
        const curDate = DateHelpers.getCurrentDate('MM/dd/yy');
        for (const val of values) {
            expect(val).toContain(curDate);
        }
    }

    async selectRowByAtK9OrHandlerInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIK9MedicalResulTable, PoliceData.getK9ModuleValue('K9Handler'));
    }

    async verifyK9HandlerInactive(): Promise<void> {
        const values = await this.elementHelpers.getDropDownValues(this.uIK9HandlerDropdown);
        const expected = PoliceData.getK9ModuleValue('K9HandlerInactive');
        expect(values.some(v => v.includes(expected))).toBeTruthy();
    }

    async verifyAtK9HandlerInactive(): Promise<void> {
        const selected = await this.elementHelpers.getDropDownSelectedItem(this.uIK9HandlerDropdown);
        expect(selected).toContain('##' + PoliceData.getK9ModuleValue('K9Handler'));
    }

    async selectAtJuris(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIJurisDropdown, PoliceData.getK9ModuleValue('Juris'));
    }

    async enterAtVisitDateFrom(): Promise<void> {
        await this.uIVisitDateFromEdit.fill(PoliceData.getK9ModuleValue('VisitDateFrom'));
    }

    async enterAtVisitDateTo(): Promise<void> {
        await this.uIVisitDateToEdit.fill(PoliceData.getK9ModuleValue('VisitDateTo'));
    }

    async verifyAtDateInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIK9MedicalResulTable, PoliceData.getK9ModuleValue('Date'), 'Date');
        expect(await cell.innerText()).toBe(PoliceData.getK9ModuleValue('Date'));
    }

    async verifyAtK9HandlerInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIK9MedicalResulTable, PoliceData.getK9ModuleValue('K9Handler'), 'K9/Handler');
        expect(await cell.innerText()).toBe(PoliceData.getK9ModuleValue('K9Handler'));
    }

    async selectRandomGridRow(): Promise<void> {
        await this.grid.selectRandomRow(this.uIK9MedicalResulTable);
    }
}

export class MedicalVisitEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIK9OrHandlerDropDown: Locator;
    readonly uITypeOfVisitDropDown: Locator;
    readonly uIReasonForVisitEdit: Locator;
    readonly uIDateOfVisitEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIDetailsTab: Locator;
    readonly uIK9PersonnelImage: Locator;
    readonly uIK9HandlerDropdown: Locator;
    readonly uIDeleteIcon: Locator;
    readonly uIAttachmentsTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIK9OrHandlerDropDown = page.locator('#cddK9nHandler_DropDown');
        this.uITypeOfVisitDropDown = page.locator('#cddVisitType_DropDown');
        this.uIReasonForVisitEdit = page.locator('#txtVisitReason');
        this.uIDateOfVisitEdit = page.locator('#dttmMedicalVisit_KPIDttmCtrl');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uIDetailsTab = page.locator("//span[contains(text(),'Details')]");
        this.uIK9PersonnelImage = page.locator('#imgNameFrontView');
        this.uIK9HandlerDropdown = page.locator('#cddK9nHandler_DropDown');
        this.uIDeleteIcon = page.locator('#cmdDelete');
        this.uIAttachmentsTab = page.locator("//span[contains(text(),'Attachment')]");
    }

    async selectAtK9OrHandler(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9OrHandlerDropDown, PoliceData.getK9ModuleValue('K9Handler'));
    }

    async selectAtTypeOfVisit(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITypeOfVisitDropDown, PoliceData.getK9ModuleValue('TypeOfVisit'));
    }

    async enterAtReasonForVisit(i?: number): Promise<void> {
        const key = i !== undefined ? `ReasonForVisit${i}` : 'ReasonForVisit';
        await this.uIReasonForVisitEdit.fill(PoliceData.getK9ModuleValue(key));
    }

    async verifyImageHeightNotPresent(): Promise<void> {
        const h = await this.uIK9PersonnelImage.evaluate(el => getComputedStyle(el).height);
        expect(h).toBe(PoliceData.getK9ModuleValue('WithoutImgHeight'));
    }

    async verifyImageWidthNotPresent(): Promise<void> {
        const w = await this.uIK9PersonnelImage.evaluate(el => getComputedStyle(el).width);
        expect(w).toBe(PoliceData.getK9ModuleValue('WithoutImgWidth'));
    }

    async verifyDateOfVisitAsCurrentDate(): Promise<void> {
        const attribute = await this.uIDateOfVisitEdit.inputValue();
        expect(attribute).toContain(DateHelpers.getCurrentDate());
    }

    async switchToDetailsTab(): Promise<void> {
        await this.uIDetailsTab.click();
    }



    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async saveNClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await this.popup.confirmYes();
    }

    async verifyAtK9OrHandler(): Promise<void> {
        const attribute = await this.elementHelpers.getDropDownSelectedItem(this.uIK9OrHandlerDropDown);
        expect(attribute).toBe(PoliceData.getK9ModuleValue('K9OrHandler'));
    }

    async verifyDateOfVisitIsEnabled(): Promise<void> {
        await expect(this.uIDateOfVisitEdit).toBeEnabled();
    }

    async verifyDateOfVisitIsNotEnabled(): Promise<void> {
        await expect(this.uIDateOfVisitEdit).toBeDisabled();
    }

    async getK9HandlerDropdownOptions(): Promise<string[]> {
        return await this.elementHelpers.getDropDownValues(this.uIK9HandlerDropdown);
    }

    async verifyTheCountsofDropDown(a: any, b: any): Promise<void> {
        expect(a).not.toEqual(b);
    }

    async verifyReportStatusAsOnHold(): Promise<void> {
        const status = await this.page.locator('#lblApprovalStatus').innerText();
        expect(status).toBe('On Hold');
    }

    async verifyReportStatusAsSubmitted(): Promise<void> {
        const status = await this.page.locator('#lblApprovalStatus').innerText();
        expect(status).toBe('Submitted');
    }

    async verifyReportStatusAsApproved(): Promise<void> {
        const status = await this.page.locator('#lblApprovalStatus').innerText();
        expect(status).toBe('Approved');
    }

    async clickDeleteIcon(): Promise<void> {
        await this.uIDeleteIcon.click();
    }

    async verifyDoyouWantToDeleteConfirmPopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(4) Do you really want to delete?');
        await this.popup.confirmYes();
    }

    async verifyDoyouSaveConfirmPopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(3)Do You Want To Save All Of The Entered Details?');
        await this.popup.confirmYes();
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async verifyK9HandlerInactive(): Promise<void> {
        const selected = await this.elementHelpers.getDropDownSelectedItem(this.uIK9HandlerDropdown);
        expect(selected).toContain('##');
    }

    async verifyAtK9HandlerInactive(): Promise<void> {
        const selected = await this.elementHelpers.getDropDownSelectedItem(this.uIK9HandlerDropdown);
        expect(selected).toContain('##' + PoliceData.getK9ModuleValue('K9Handler'));
    }

    async verifyAtK9HandlerValueNotFound(): Promise<void> {
        const selected = await this.elementHelpers.getDropDownSelectedItem(this.uIK9HandlerDropdown);
        expect(selected).not.toContain(PoliceData.getK9ModuleValue('K9Handler'));
    }

    async verifyAdditionSuccessfulMessage(): Promise<void> {
        // Verification placeholder
    }

    async selectK9OrHandler(): Promise<void> {
        await this.elementHelpers.randomSelectDropDownOption(this.uIK9OrHandlerDropDown);
    }

    async selectTypeOfVisit(): Promise<void> {
        await this.elementHelpers.randomSelectDropDownOption(this.uITypeOfVisitDropDown);
    }

    async enterReasonForVisit(): Promise<void> {
        await this.uIReasonForVisitEdit.fill(RandomHelpers.randomString(10));
    }

    async verifyDeleteIconIsDisplayed(): Promise<void> {
        await expect(this.uIDeleteIcon).toBeVisible();
    }

    async verifyDetailsTabIsDisplayed(): Promise<void> {
        await expect(this.uIDetailsTab).toBeVisible();
    }

    async verifyAttachmentsTabIsDisplayed(): Promise<void> {
        await expect(this.uIAttachmentsTab).toBeVisible();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verify1018RequiredEntriesAreMissingAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1018) Required Entries are Missing');
        await this.popup.acknowledgeOk();
    }
}

export class MedicalVisitEntryDetailsTabPage {
    readonly page: Page;
    readonly uINameTypeEdit: Locator;
    readonly uINameIDEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIVeterinarianIBubble: Locator;
    readonly uIProcedurePerformedEdit: Locator;
    readonly uICostEdit: Locator;
    readonly uIPoEdit: Locator;
    readonly uIMedicationsPrescribedEdit: Locator;
    readonly uIVeterinarianInstructionsEdit: Locator;
    readonly uINotesEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINameTypeEdit = page.locator('#tabCE_tmpl0_usrVeteriDetails1_VeterinarianNameCtl_NameType');
        this.uINameIDEdit = page.locator('#tabCE_tmpl0_usrVeteriDetails1_VeterinarianNameCtl_NameTypeID');
        this.uILastNameEdit = page.locator('#tabCE_tmpl0_usrVeteriDetails1_VeterinarianNameCtl_LastName');
        this.uIFirstNameEdit = page.locator('#tabCE_tmpl0_usrVeteriDetails1_VeterinarianNameCtl_FirstName');
        this.uIVeterinarianIBubble = page.locator('#tabCE_tmpl0_usrVeteriDetails1_VeterinarianNameCtl_imgSrch');
        this.uIProcedurePerformedEdit = page.locator('#tabCE_tmpl0_usrVeteriDetails1_txtProcedure');
        this.uICostEdit = page.locator('#tabCE_tmpl0_usrVeteriDetails1_txtCost');
        this.uIPoEdit = page.locator('#tabCE_tmpl0_usrVeteriDetails1_txtPO');
        this.uIMedicationsPrescribedEdit = page.locator('#tabCE_tmpl0_usrVeteriDetails1_txtMedication');
        this.uIVeterinarianInstructionsEdit = page.locator('#tabCE_tmpl0_usrVeteriDetails1_txtVeterenerian');
        this.uINotesEdit = page.locator('#tabCE_tmpl0_usrVeteriDetails1_txtNotes');
    }

    async enterAtVeterinarianNameID(): Promise<void> {
        const nameID = PoliceData.getK9ModuleValue('NameID');
        await this.uINameTypeEdit.fill(nameID.substring(0, 1));
        await this.uINameIDEdit.fill(nameID.substring(2));
        await this.uINameIDEdit.press('Tab');
    }

    async enterAtVeterinarianLastName(): Promise<void> {
        await this.uILastNameEdit.fill(PoliceData.getK9ModuleValue('LastName'));
        await this.uILastNameEdit.press('Tab');
    }

    async enterAtVeterinarianFirstName(): Promise<void> {
        await this.uIFirstNameEdit.fill(PoliceData.getK9ModuleValue('FirstName'));
        await this.uIFirstNameEdit.press('Tab');
    }

    async verifyAtLastName(): Promise<void> {
        const attribute = await this.uILastNameEdit.inputValue();
        expect(attribute).toContain(PoliceData.getK9ModuleValue('LastName'));
    }

    async verifyAtFirstName(): Promise<void> {
        const attribute = await this.uIFirstNameEdit.inputValue();
        expect(attribute).toContain(PoliceData.getK9ModuleValue('FirstName'));
    }

    async verifyVeterinarianIBubbleIsDisplayed(): Promise<void> {
        await expect(this.uIVeterinarianIBubble).toBeVisible();
    }

    async verifyVeterinarianLastnameIsDisabled(): Promise<void> {
        const attribute = await this.uILastNameEdit.getAttribute('class') || '';
        expect(attribute).toContain('textboxInactive');
    }

    async verifyVeterinarianFirstnameIsDisabled(): Promise<void> {
        const attribute = await this.uIFirstNameEdit.getAttribute('class') || '';
        expect(attribute).toContain('textboxInactive');
    }

    async enterAtCost(): Promise<void> {
        await this.uICostEdit.fill(PoliceData.getK9ModuleValue('Cost'));
    }

    async enterAtPO(): Promise<void> {
        await this.uIPoEdit.fill(PoliceData.getK9ModuleValue('PO'));
    }

    async enterAtProcedurePerformed(): Promise<void> {
        await this.uIProcedurePerformedEdit.fill(PoliceData.getK9ModuleValue('ProcedurePerformed'));
    }

    async enterAtMedicationsPrescribed(): Promise<void> {
        await this.uIMedicationsPrescribedEdit.fill(PoliceData.getK9ModuleValue('MedicationsPrescribed'));
    }

    async enterAtVeterinarianInstructions(): Promise<void> {
        await this.uIVeterinarianInstructionsEdit.fill(PoliceData.getK9ModuleValue('VeterinarianInstructions'));
    }

    async enterAtNotes(): Promise<void> {
        await this.uINotesEdit.fill(PoliceData.getK9ModuleValue('Notes'));
    }
}

export class K9TeamPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uISearchButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIK9NameDropDown: Locator;
    readonly uIOfficerOrHandlerEdit: Locator;
    readonly uIK9TeamResultTable: Locator;
    readonly uIInactiveCheckBox: Locator;
    readonly uIEffectiveDateFromEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uISearchButton = page.locator('#btnSearch');
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIK9NameDropDown = page.locator('#ddlK9Name');
        this.uIOfficerOrHandlerEdit = page.locator('#lupK9Officer_CodeValue');
        this.uIK9TeamResultTable = page.locator('#grdTeam');
        this.uIInactiveCheckBox = page.locator('#chkInactive');
        this.uIEffectiveDateFromEdit = page.locator('#dtEffective_KPIDttmCtrl');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async selectAtK9Name(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9NameDropDown, PoliceData.getK9ModuleValue('K9Name'));
    }

    async enterAtOfficerOrHandler(): Promise<void> {
        await this.uIOfficerOrHandlerEdit.fill(PoliceData.getK9ModuleValue('Officer'));
        await this.uIOfficerOrHandlerEdit.press('Tab');
    }

    async verifyAtK9NameInGrid(): Promise<void> {
        const row = await this.grid.getGridRowByCellInnerText(this.uIK9TeamResultTable, PoliceData.getK9ModuleValue('K9Name'));
        expect(await row.innerText()).toContain(PoliceData.getK9ModuleValue('K9Name'));
    }

    async verifyAtHandlerInGrid(): Promise<void> {
        const row = await this.grid.getGridRowByCellInnerText(this.uIK9TeamResultTable, PoliceData.getK9ModuleValue('Handler'));
        expect(await row.innerText()).toContain(PoliceData.getK9ModuleValue('Handler'));
    }

    async selectRowByAtHandler(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIK9TeamResultTable, PoliceData.getK9ModuleValue('Handler'));
    }

    async clickInactiveCheckBox(): Promise<void> {
        await this.uIInactiveCheckBox.click();
    }

    async verifyRowAsGrayColor(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIK9TeamResultTable, 'K9 Name', rowIndex);
        const color = await cell.evaluate(el => getComputedStyle(el).color);
        expect(color).toContain('rgba(128, 128, 128, 1)');
    }

    async selectAtK9NameForInactive(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9NameDropDown, PoliceData.getK9ModuleValue('K9Name#'));
    }

    async selectAtK9NameInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIK9TeamResultTable, PoliceData.getK9ModuleValue('K9Name'));
    }

    async verifyAtInActiveK9Name(): Promise<void> {
        const dropDownValues = await this.elementHelpers.getDropDownValues(this.uIK9NameDropDown);
        expect(dropDownValues).toContain(PoliceData.getK9ModuleValue('K9Name1'));
    }

    async verifyAtActiveK9Name(): Promise<void> {
        const dropDownValues = await this.elementHelpers.getDropDownValues(this.uIK9NameDropDown);
        expect(dropDownValues).toContain(PoliceData.getK9ModuleValue('K9Name'));
    }

    async enterAtEffectiveDateFrom(): Promise<void> {
        await this.uIEffectiveDateFromEdit.fill(PoliceData.getK9ModuleValue('EffectiveFrom'));
        await this.uIEffectiveDateFromEdit.press('Tab');
    }

    async verifyAtEffectiveFromInGrid(): Promise<void> {
        const row = await this.grid.getGridRowByCellInnerText(this.uIK9TeamResultTable, PoliceData.getK9ModuleValue('EffectiveFrom'));
        expect(await row.innerText()).toContain(PoliceData.getK9ModuleValue('EffectiveFrom'));
    }

    async verifyActiveRecordsAreNotShown(): Promise<void> {
        const rows = this.uIK9TeamResultTable.locator('tbody tr');
        const count = await rows.count();
        for (let i = 0; i < count; i++) {
            const row = rows.nth(i);
            if (await row.isVisible()) {
                const textColor = await row.evaluate(el => getComputedStyle(el).color);
                expect(textColor).toBe('rgba(128, 128, 128, 1)');
            }
        }
    }
}

export class K9TeamEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIK9NameDropDown: Locator;
    readonly uIOfficerOrHandlerEdit: Locator;
    readonly uIEffectiveFromEdit: Locator;
    readonly uIInactiveCheckBox: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIK9TeamEntryResultTable: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIUpdateButton: Locator;
    readonly uIBottomMessage: Locator;
    readonly uIOfficerHandlerLookupIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIK9NameDropDown = page.locator('#ddlK9Name');
        this.uIOfficerOrHandlerEdit = page.locator('#lupK9Officer_CodeValue');
        this.uIEffectiveFromEdit = page.locator('#dtEffective_KPIDttmCtrl');
        this.uIInactiveCheckBox = page.locator('#chkInactive');
        this.uIAddButton = page.locator('#imgAddK9Team');
        this.uIClearButton = page.locator('#imgClearK9Team');
        this.uIK9TeamEntryResultTable = page.locator('#grdTeam');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uIUpdateButton = page.locator('#imgAddK9Team');
        this.uIBottomMessage = page.locator("//td[@class='statusBar']/b");
        this.uIOfficerHandlerLookupIcon = page.locator('#lupK9Officer_imgBtn');
    }

    async selectAtK9Name(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIK9NameDropDown, PoliceData.getK9ModuleValue('K9Name'));
    }

    async enterAtOfficerOrHandler(jsonKeyIndex?: number): Promise<void> {
        const key = jsonKeyIndex !== undefined ? `K9Handler${jsonKeyIndex}` : 'K9Handler';
        await this.uIOfficerOrHandlerEdit.fill(PoliceData.getK9ModuleValue(key));
        await this.uIOfficerOrHandlerEdit.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async saveNClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await this.popup.confirmYes();
    }

    async enterEffectiveFromAsCurrentDate(): Promise<void> {
        await this.uIEffectiveFromEdit.fill(DateHelpers.getCurrentDate());
        await this.uIEffectiveFromEdit.press('Tab');
    }

    async verifyAtHandlerInGrid(): Promise<void> {
        const row = await this.grid.getGridRowByCellInnerText(this.uIK9TeamEntryResultTable, PoliceData.getK9ModuleValue('Handler'));
        expect(await row.innerText()).toContain(PoliceData.getK9ModuleValue('Handler'));
    }

    async selectRowByAtHandler(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIK9TeamEntryResultTable, PoliceData.getK9ModuleValue('Handler'));
    }

    async clickInactiveCheckBox(): Promise<void> {
        await this.uIInactiveCheckBox.click();
    }

    async verifyNoRecordsFoundAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('1011 - No Record Found');
        await this.popup.acknowledgeOk();
    }

    async verifyAtInactiveHandlerInGrid(): Promise<void> {
        const row = await this.grid.getGridRowByCellInnerText(this.uIK9TeamEntryResultTable, PoliceData.getK9ModuleValue('Handler'));
        const color = await row.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(128, 128, 128, 1)');
    }

    async ClickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }

    async verifyUpdateSuccessfulMessage(): Promise<void> {
        expect(await this.uIBottomMessage.innerText()).toBe('1003 - Update Successful');
        await this.page.waitForTimeout(2000);
    }

    async verifyAdditionSuccessfulMsg(): Promise<void> {
        expect(await this.uIBottomMessage.innerText()).toBe('1002 - Addition Successful');
        await this.page.waitForTimeout(2000);
    }

    async selectK9Name(): Promise<void> {
        await this.elementHelpers.randomSelectDropDownOption(this.uIK9NameDropDown);
    }

    async selectOfficerOrHandler(): Promise<void> {
        await this.uIOfficerHandlerLookupIcon.click();
        const popupPage = new PopupPage(this.page);
        await popupPage.switchToCodedSearch();
        await popupPage.kPICodedLookup.randomKPIHelpSelect();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async selectAtK9NameInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIK9TeamEntryResultTable, PoliceData.getK9ModuleValue('K9Name'));
    }

    async verifyAtInActiveK9NameNotAvailable(): Promise<void> {
        const dropDownValues = await this.elementHelpers.getDropDownValues(this.uIK9NameDropDown);
        expect(dropDownValues).not.toContain(PoliceData.getK9ModuleValue('K9Name1'));
    }

    async verifyDeleteConfirmationPopupNotArise(): Promise<void> {
        const isVisible = await this.popup.modalBody.isVisible().catch(() => false);
        expect(isVisible).toBeFalsy();
    }

    async deleteAtK9NameInGridWithCancelPopup(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uIK9TeamEntryResultTable, PoliceData.getK9ModuleValue('K9Name'));
        await this.popup.confirmNo();
    }

    async selectK9NameHeaderInGrid(): Promise<void> {
        await this.uIK9TeamEntryResultTable.locator('th', { hasText: 'K9 Name' }).click();
    }

    async selectAtColumnNameHeaderInGrid(jsonKeyIndex: number): Promise<void> {
        await this.uIK9TeamEntryResultTable.locator('th', { hasText: PoliceData.getK9ModuleValue('ColumnName' + jsonKeyIndex) }).click();
    }

    async deleteAtK9NameInGrid(jsonKeyIndex: number): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uIK9TeamEntryResultTable, PoliceData.getK9ModuleValue('K9Name' + jsonKeyIndex));
        await this.page.waitForTimeout(1000);
        await expect(this.popup.modalBody).toContainText('(4) Do you really want to delete?');
        await this.popup.confirmYes();
    }

    async verifyJsErrorIsNotArising(): Promise<void> {
        const isVisible = await this.popup.modalBody.isVisible().catch(() => false);
        expect(isVisible).toBeFalsy();
    }
}

export class K9ReportsPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uIK9ReportSearchTable: Locator;
    readonly uIAddNewButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIK9ReportSearchTable = page.locator('#grdK9ReportSearch');
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
    }

    async verifyAtCaseNoInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIK9ReportSearchTable, PoliceData.getK9ModuleValue('CaseNo'));
        expect(await cell.innerText()).toContain(PoliceData.getK9ModuleValue('CaseNo'));
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async clickAtCaseNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIK9ReportSearchTable, PoliceData.getK9ModuleValue('CaseNo'));
    }

    async verifyAtApprovalStatusInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIK9ReportSearchTable, PoliceData.getK9ModuleValue('ApprovalStatus'));
        expect(await cell.innerText()).toContain(PoliceData.getK9ModuleValue('ApprovalStatus'));
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }
}

export class K9Page {
    readonly page: Page;
    private browserHelpers: BrowserHelpers;

    constructor(page: Page) {
        this.page = page;
        this.browserHelpers = new BrowserHelpers(page);
    }

    async switchToK9Search(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('K9/frmRptMasterSrch');
        await this.page.waitForTimeout(1000);
    }

    async switchToCPAEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('CPA Entry');
        await this.page.waitForTimeout(1000);
    }

    async switchToK9ReportsSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmK9ReportsInquiry');
        await this.page.waitForTimeout(1000);
    }

    async switchToK9Reports(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('K9 Reports');
    }

    async switchToK9TrainingAid(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('K9 Training Aid');
        await this.page.waitForTimeout(1000);
    }

    async switchToReportEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Report Entry');
        await this.page.waitForTimeout(1000);
    }

    async switchToK9ActivityEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('K9 Activity Entry');
        await this.page.waitForTimeout(1000);
    }

    async switchToK9Personnel(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('K9/frmPersonnelSrch.aspx?');
        await this.page.waitForTimeout(1000);
    }

    async switchToK9PersonnelEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('K9 Personnel Entry');
        await this.page.waitForTimeout(1000);
    }

    async switchToK9TrainingScreen(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmK9TrainingSrch.aspx');
    }

    async switchToK9TrainingEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('K9 Training Entry');
        await this.page.waitForTimeout(1000);
    }

    async switchTok9ActivityEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('K9 Activity Entry');
        await this.page.waitForTimeout(1000);
    }

    async switchToCPAScreen(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmCPASrch.aspx');
    }

    async switchToK9Medical(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmMedicalSrch.aspx');
    }

    async switchToMedicalVisitEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Medical Visit Entry');
    }

    async switchToK9TeamScreen(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmK9Team.aspx');
    }

    async switchToK9TeamEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('K9 Team Entry');
    }
}

