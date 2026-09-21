import { Page, Locator, expect } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { AcknowledgePage, ConfirmPage, PopupPage } from '../popup.page';
import { BaseData } from '../../data/base-data';
import { GridHelpers } from '../../helpers/grid-helpers';
import { ElementHelpers } from '../../helpers/element-helpers';
import { PopupHelpers } from '../../helpers/popup-helpers';
import { DateHelpers, RandomHelpers } from '../../helpers';

// =============================================================================
// MAIN TRAFFIC CONTAINER / WINDOW SWITCHER
// =============================================================================
export class TrafficPage {
    readonly page: Page;
    private browserHelpers: BrowserHelpers;

    constructor(page: Page) {
        this.page = page;
        this.browserHelpers = new BrowserHelpers(page);
    }

    async Reset(): Promise<void> {
        // No-op in Playwright
    }

    async switchToCourtScreen(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('Court');
    }

    async switchToCourtEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Court Entry');
    }

    async switchToCrashEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Crash Entry');
        await this.page.waitForTimeout(1000);
    }

    async switchToParkingComments(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Parking Comments');
    }

    async switchToCrashEntryScreen(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('frmCrash.aspx');
    }

    async switchToCrashEntryByForm(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmNJCrash_Id');
    }

    async switchToCrashSearch(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('Crash Search');
    }

    async switchToCrashSearchHelpWindow(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Crash Search');
    }

    async switchToDeerCrash(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('Deer Crash');
    }

    async switchToCitationEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Citation Entry - 3810');
    }

    async switchToCitationSearch(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('Citation Search');
    }

    async switchToCitationComments(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Citation Comments - 3812');
    }

    async switchToNamesComments(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Names Comments - 2212');
    }

    async switchToCrashComments(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Crash Comments - 3841');
    }

    async switchToParkingEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Parking Entry - 3822');
    }

    async switchToParkingOtherPayment(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('ParkingOtherPayment - 3823');
    }

    async switchToParkingSearch(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('Parking Search');
    }

    async switchToCrashUnit(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Crash Unit - 3832');
    }

    async switchToTicketHoldReason(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Ticket Hold Reason');
    }

    async switchToParkingPermit(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Parking Permits');
    }

    async switchToParkingPermitMainWindow(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('Parking Permits');
    }

    async switchToKPICrimeSceneSDK(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('- KPI Crime Scene Drawing');
    }

    async switchToParkingPermitsSearch(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('Parking Permits Search');
    }

    async switchToParkingPermitAuthenticate(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmTraPFAuthenticate_Id');
    }

    async switchToDeerCrashEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Deer Crash');
    }

    async switchToDeerCrashEntryTab(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('Deer Crash');
    }

    async switchToCitationArrest(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Citation Arrest');
    }

    async switchToCrashReport(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Crash Report');
    }

    async switchToUntitledWindow(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Untitled');
    }

    async switchToCitationSearchWindow(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Citation Search');
    }

    async switchToRemarks(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Remarks');
    }
}

// =============================================================================
// CRASH SEARCH PAGE
// =============================================================================
export class CrashSearchPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIJurisComboBox: Locator;
    readonly uISearchButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIBackButton: Locator;
    readonly uICrashYearEdit: Locator;
    readonly uICrashNumberEdit: Locator;
    readonly uIWICaseYearEdit: Locator;
    readonly uIWICaseNumberEdit: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uIKSCrashYearEdit: Locator;
    readonly uIKSCrashNumberEdit: Locator;
    readonly uIKSCaseYearEdit: Locator;
    readonly uIKSCaseNumberEdit: Locator;
    readonly uICallYearEdit: Locator;
    readonly uICallNumberEdit: Locator;
    readonly uICallNoEdit: Locator;
    readonly uICaseDetailsInfoButton: Locator;
    readonly uICallNoInfoIcon: Locator;
    readonly uIOfficerEdit: Locator;
    readonly uIWIOfficerCodeEdit: Locator;
    readonly uIKSOfficerCodeEdit: Locator;
    readonly uIInjuredCheckBox: Locator;
    readonly uICrossRoadNameEdit: Locator;
    readonly uICrossRoadNameVerifyCheckBox: Locator;
    readonly uIApprovalCheckBox: Locator;
    readonly uICrashSearchResultGrid: Locator;
    readonly uIKSCrashLocationComboBox: Locator;
    readonly uICrashLocationPremiseEdit: Locator;
    readonly uICrashLocationStreetEdit: Locator;
    readonly uIFatalCheckBox: Locator;
    readonly uIKSPlateEdit: Locator;
    readonly uIKSStateComboBox: Locator;
    readonly uIKSApprovalStatusComboBox: Locator;
    readonly uIKSLastNameEdit: Locator;
    readonly uIKSFirstNameEdit: Locator;
    readonly uICrashLocationComboBox: Locator;
    readonly uIIntersectionStreet1Edit: Locator;
    readonly uIIntersectionStreet2Edit: Locator;
    readonly uINonReportableCheckBox: Locator;
    readonly uIChangeReportCheckBox: Locator;
    readonly uIChangeReportlabel: Locator;
    readonly uIReportableCheckBox: Locator;
    readonly uIWITracsYearEdit: Locator;
    readonly uIWITracsNumberEdit: Locator;
    readonly uIPrintIconButton: Locator;
    readonly uIDOTNoEdit: Locator;
    readonly uIAccidentNoEdit: Locator;
    readonly uICrashTypeComboBox: Locator;
    readonly uISafetyEquipmentUsedDropdown: Locator;
    readonly uIApparentContributingCircumstancesDropdown: Locator;
    readonly uIApparentPhysicalStatusDropdown: Locator;
    readonly uINJApprovalStatusComboBox: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uISelectedCheckBox: Locator;
    readonly uIShowMapButton: Locator;
    readonly uIBatchPrint: Locator;
    readonly uIPendingCheckBox: Locator;
    readonly uICompleteUnapprovedCheckbox: Locator;
    readonly uINextButton: Locator;
    readonly uICrashLocationEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIJurisComboBox = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_lstJuris');
        this.uISearchButton = page.locator("//span[(text()='Search')]");
        this.uIRefreshButton = page.locator("//span[contains(text(),'Refresh')]");
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uICrashYearEdit = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_nbrTraCS_Year');
        this.uICrashNumberEdit = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_nbrTraCS_Number');
        this.uIWICaseYearEdit = page.locator('#tabCrash_tmpl0_UsrCrashSrchBasic1_nbrCaseNo_Year');
        this.uIWICaseNumberEdit = page.locator('#tabCrash_tmpl0_UsrCrashSrchBasic1_nbrCaseNo_Number');
        this.uICaseYearEdit = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_nbrCaseNo_Year');
        this.uICaseNumberEdit = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_nbrCaseNo_Number');
        this.uIKSCrashYearEdit = page.locator('#tabCrash_tmpl0_UsrKSCrashSrchBasic1_nbrCrashNo_Year');
        this.uIKSCrashNumberEdit = page.locator('#tabCrash_tmpl0_UsrKSCrashSrchBasic1_nbrCrashNo_Number');
        this.uIKSCaseYearEdit = page.locator('#tabCrash_tmpl0_UsrKSCrashSrchBasic1_nbrCaseNo_Year');
        this.uIKSCaseNumberEdit = page.locator('#tabCrash_tmpl0_UsrKSCrashSrchBasic1_nbrCaseNo_Number');
        this.uICallYearEdit = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_nbrCallNo_Year');
        this.uICallNumberEdit = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_nbrCallNo_Number');
        this.uICallNoEdit = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_nbrCallNo_Number');
        this.uICaseDetailsInfoButton = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_nbrCaseNo_imgBtn');
        this.uICallNoInfoIcon = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_nbrCallNo_imgBtn');
        this.uIOfficerEdit = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_lupOff_CodeValue');
        this.uIWIOfficerCodeEdit = page.locator('#tabCrash_tmpl0_UsrCrashSrchBasic1_lupOff_CodeValue');
        this.uIKSOfficerCodeEdit = page.locator('#tabCrash_tmpl0_UsrKSCrashSrchBasic1_lupOff_CodeValue');
        this.uIInjuredCheckBox = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_chkInjuried');
        this.uICrossRoadNameEdit = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_adrCrossLoc_txtFrom');
        this.uICrossRoadNameVerifyCheckBox = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_adrCrossLoc_chkVerify');
        this.uIApprovalCheckBox = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_ChkApproval');
        this.uICrashSearchResultGrid = page.locator('#grdCrash');
        this.uIKSCrashLocationComboBox = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_adrAtLoc_CddLocationType');
        this.uICrashLocationPremiseEdit = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_adrAtLoc_TxtStartPremise');
        this.uICrashLocationStreetEdit = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_adrAtLoc_TxtStreetName');
        this.uIFatalCheckBox = page.locator('#tabCrash_tmpl0_UsrKSCrashSrchBasic1_chkFatal');
        this.uIKSPlateEdit = page.locator('#tabCrash_tmpl0_UsrKSCrashSrchBasic1_txtPlateNo');
        this.uIKSStateComboBox = page.locator('#tabCrash_tmpl0_UsrKSCrashSrchBasic1_cddState_DropDown');
        this.uIKSApprovalStatusComboBox = page.locator('#tabCrash_tmpl0_UsrKSCrashSrchBasic1_lstApprovalStatusKS');
        this.uIKSLastNameEdit = page.locator('#tabCrash_tmpl0_UsrKSCrashSrchBasic1_txtLastName');
        this.uIKSFirstNameEdit = page.locator('#tabCrash_tmpl0_UsrKSCrashSrchBasic1_txtFirstName');
        this.uICrashLocationComboBox = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_adrAtLoc_CddLocationType');
        this.uIIntersectionStreet1Edit = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_adrAtLoc_TxtStreetName1');
        this.uIIntersectionStreet2Edit = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_adrAtLoc_TxtStreetName2');
        this.uINonReportableCheckBox = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_chkNonRpt');
        this.uIChangeReportCheckBox = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_chkChangeReport');
        this.uIChangeReportlabel = page.locator("//label[text()=' Change Report']");
        this.uIReportableCheckBox = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_chkRpt');
        this.uIWITracsYearEdit = page.locator('#tabCrash_tmpl0_UsrCrashSrchBasic1_nbrTraCS_Year');
        this.uIWITracsNumberEdit = page.locator('#tabCrash_tmpl0_UsrCrashSrchBasic1_nbrTraCS_Number');
        this.uIPrintIconButton = page.locator("//img[@src = '/KPIImages/ico/16_print.gif']");
        this.uIDOTNoEdit = page.locator('#tabCrash_tmpl0_UsrCrashSrchBasic1_txtDotNo');
        this.uIAccidentNoEdit = page.locator('#tabCrash_tmpl0_UsrCrashSrchBasic1_txtAcdNo');
        this.uICrashTypeComboBox = page.locator('#tabCrash_tmpl0_UsrCrashSrchBasic1_cddCrashType');
        this.uISafetyEquipmentUsedDropdown = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_cddUsed_DropDown');
        this.uIApparentContributingCircumstancesDropdown = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_cddCircumstanceA_DropDown');
        this.uIApparentPhysicalStatusDropdown = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_cddPhysicalStatus_DropDown');
        this.uINJApprovalStatusComboBox = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_lstApprovalStatusNJ');
        this.uILastNameEdit = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_txtLastName');
        this.uIFirstNameEdit = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_txtFirstName');
        this.uISelectedCheckBox = page.locator('#chkRptSelect');
        this.uIShowMapButton = page.locator("//li[@title='Show Map']");
        this.uIBatchPrint = page.locator("//span[text()='Batch Print']");
        this.uIPendingCheckBox = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_chkPending');
        this.uICompleteUnapprovedCheckbox = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_chkComplete');
        this.uINextButton = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_chkComplete');
        this.uICrashLocationEdit = page.locator('#tabCrash_tmpl0_UsrNJCrashSrchBasic1_adrAtLoc_adrAddrsCtrl_txtFrom');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickBackButton(): Promise<void> {
        await this.uIBackButton.click();
    }

    async clickReset(): Promise<void> {
        await this.uIResetButton.click();
    }

    async clickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async selectJurisAsSO(): Promise<void> {
        await this.uIJurisComboBox.selectOption({ label: 'SO - Prophoenix Police Department' });
    }

    async selectJurisAsBE(): Promise<void> {
        await this.uIJurisComboBox.selectOption({ label: 'BE - Prophoenix Police Department' });
    }

    async selectJurisAsBL(): Promise<void> {
        await this.uIJurisComboBox.selectOption({ label: 'BL - Big lake Police Department' });
    }

    async selectJurisAsPX(): Promise<void> {
        await this.uIJurisComboBox.selectOption({ label: 'PX - ProPhoenix' });
    }

    async selectJurisAsBC(): Promise<void> {
        await this.uIJurisComboBox.selectOption({ label: 'BC - Brown County Police Department' });
    }

    async selectCrashLocationAsIntersection(): Promise<void> {
        await this.uICrashLocationComboBox.selectOption({ label: 'Intersection' });
        await this.uICrashLocationComboBox.press('Tab');
    }

    async selectCrashLocationAsAddress(): Promise<void> {
        await this.uICrashLocationComboBox.selectOption({ label: 'Address' });
    }

    async enterAtStreet1(): Promise<void> {
        await this.uIIntersectionStreet1Edit.fill(BaseData.getTestValue('Street1'));
        await this.uIIntersectionStreet1Edit.press('Tab');
    }

    async enterAtStreet2(): Promise<void> {
        await this.uIIntersectionStreet2Edit.fill(BaseData.getTestValue('Street2'));
        await this.uIIntersectionStreet2Edit.press('Tab');
    }

    async enterAtCaseNo(): Promise<void> {
        const caseNo = BaseData.getTestValue('CaseNo');
        await this.uICaseYearEdit.fill(caseNo.substring(0, 2));
        await this.uICaseNumberEdit.fill(caseNo.substring(3));
        await this.uICaseNumberEdit.press('Tab');
    }

    async enterAtCrashNo(): Promise<void> {
        const crashNo = BaseData.getTestValue('CrashNo');
        await this.uICrashYearEdit.fill(crashNo.substring(0, 2));
        await this.uICrashNumberEdit.fill(crashNo.substring(3));
        await this.uICrashNumberEdit.press('Tab');
    }

    async enterCrashNo(readCrashNo: string): Promise<void> {
        await this.uICrashYearEdit.fill(readCrashNo.substring(0, 2));
        await this.uICrashNumberEdit.fill(readCrashNo.substring(3));
    }

    async enterAtOfficer(): Promise<void> {
        await this.uIOfficerEdit.fill(BaseData.getTestValue('Officer'));
        await this.uIOfficerEdit.press('Tab');
    }

    async clickInjuredCheckBox(): Promise<void> {
        await this.uIInjuredCheckBox.click();
    }

    async clickFatalCheckBox(): Promise<void> {
        await this.uIFatalCheckBox.click();
    }

    async clickReportableCheckBox(): Promise<void> {
        await this.uIReportableCheckBox.click();
    }

    async clickNonReportableCheckBox(): Promise<void> {
        await this.uINonReportableCheckBox.click();
    }

    async clickChangeReportCheckBox(): Promise<void> {
        await this.uIChangeReportCheckBox.click();
    }

    async clickApprovedCheckBox(): Promise<void> {
        await this.uIApprovalCheckBox.click();
    }

    async clickSelectedCheckBox(): Promise<void> {
        await this.uISelectedCheckBox.click();
    }

    async clickShowMap(): Promise<void> {
        await this.uIShowMapButton.click();
    }

    async clickBatchPrint(): Promise<void> {
        await this.uIBatchPrint.click();
    }

    async enterAtCallNo(): Promise<void> {
        const callNo = BaseData.getTestValue('CallNo');
        await this.uICallYearEdit.fill(callNo.substring(0, 2));
        await this.uICallNoEdit.fill(callNo.substring(3));
        await this.uICallNoEdit.press('Tab');
    }

    async enterAtLocation(): Promise<void> {
        await this.uICrashLocationEdit.fill(BaseData.getTestValue('Location'));
    }

    async selectRowByAtCrash(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICrashSearchResultGrid, BaseData.getTestValue('CrashNo'));
    }

    async selectRowByCrashNo(readCrashNo: string): Promise<void> {
        await this.grid.selectRowByCellText(this.uICrashSearchResultGrid, readCrashNo);
    }

    async selectRowByApprovalStatusAsSubmitted(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICrashSearchResultGrid, 'Submitted');
    }

    async selectRowByApprovalStatusAsApproved(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICrashSearchResultGrid, 'Approved');
    }

    async selectRowByApprovalStatusAsOnHold(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICrashSearchResultGrid, 'On Hold');
    }

    async verifyAtCrash(rowIndex: number): Promise<void> {
        const cellText = await this.grid.getGridCellInnerText(this.uICrashSearchResultGrid, 'Crash#', rowIndex);
        expect(cellText).toBe(BaseData.getTestValue('CrashNo'));
    }

    async verifyAtCaseNo(rowIndex: number): Promise<void> {
        const cellText = await this.grid.getGridCellInnerText(this.uICrashSearchResultGrid, 'Case#', rowIndex);
        expect(cellText).toBe(BaseData.getTestValue('CaseNo'));
    }

    async verifyAtApprovalStatus(rowIndex: number): Promise<void> {
        const cellText = await this.grid.getGridCellInnerText(this.uICrashSearchResultGrid, 'Approval Status', rowIndex);
        expect(cellText).toBe(BaseData.getTestValue('Status'));
    }

    async verifyAcknowledgeNoRecord(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('1011 - No Record Found');
        await this.popup.acknowledgeOkButton.click();
    }
}

// =============================================================================
// CRASH SEARCH HELP WINDOW PAGE
// =============================================================================
export class CrashSearchHelpWindowPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly uICrashSearchGrid: Locator;
    readonly uIAddNew: Locator;
    readonly uIRefresh: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.uICrashSearchGrid = page.locator('#grdCrash');
        this.uIAddNew = page.locator("//span[text()='Add New']");
        this.uIRefresh = page.locator("//span[text()='Refresh']");
    }

    async verifyCrashNoInGrid(crashNo: string): Promise<void> {
        const crashNum = await this.grid.getGridCellInnerText(this.uICrashSearchGrid, 'Crash#', 0);
        expect(crashNum).toBe(crashNo);
    }

    async SelectRowByAtCaseNo(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICrashSearchGrid, BaseData.getTestValue('CaseNo'));
    }

    async selectRowByCaseNo(caseNo: string): Promise<void> {
        await this.grid.selectRowByCellText(this.uICrashSearchGrid, caseNo);
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNew.click();
    }

    async clickRefresh(): Promise<void> {
        await this.uIRefresh.click();
    }

    async CloseScreen(): Promise<void> {
        await this.page.close();
    }
}

// =============================================================================
// CRASH ENTRY PAGE
// =============================================================================
export class CrashEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uICrashYearEdit: Locator;
    readonly uICrashNumberEdit: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uICaseDetailsInfoButton: Locator;
    readonly uILocationEdit: Locator;
    readonly uILocationCheckBox: Locator;
    readonly uIBadgeNumberEdit: Locator;
    readonly uINoOfUnitsEdit: Locator;
    readonly uIOfficerEdit: Locator;
    readonly uIKSOfficerCodeEdit: Locator;
    readonly uIOfficerLookupButton: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uICrashEntryMainTab: Locator;
    readonly uIMotoristNonMotoristTab: Locator;
    readonly uIWitnessTab: Locator;
    readonly uIOccupantsTab: Locator;
    readonly uITruckBusTab: Locator;
    readonly uINarrativeTab: Locator;
    readonly uINarrative1Tab: Locator;
    readonly uIDiagramTab: Locator;
    readonly uINarrative2Tab: Locator;
    readonly uIDiagram2Tab: Locator;
    readonly uIPoliceActionTab: Locator;
    readonly uIAttachmentTab: Locator;
    readonly uIErrorTab: Locator;
    readonly uICommentsTab: Locator;
    readonly uIMapTab: Locator;
    readonly uIApprovalTab: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIDeleteIconButton: Locator;
    readonly uIStatusTextView: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uINotificationIconButton: Locator;
    readonly uIWITracsYearEdit: Locator;
    readonly uIWITracsNumberEdit: Locator;
    readonly uIWIReportedLocationEdit: Locator;
    readonly uIALCIconButton: Locator;
    readonly uIDOTNoEdit: Locator;
    readonly uIAmendedNoEdit: Locator;
    readonly uIAccidentNoEdit: Locator;
    readonly uIWIDateEdit: Locator;
    readonly uIWITimeEdit: Locator;
    readonly uIWITruckBusTab: Locator;
    readonly uIWIAccidentTab: Locator;
    readonly uIWIUnitTab: Locator;
    readonly uIWITrailerTab: Locator;
    readonly uIWIConclusionTab: Locator;
    readonly uIWIPropertyOwnerTab: Locator;
    readonly uIWICommentsTab: Locator;
    readonly uIWIOfficerCodeEdit: Locator;
    readonly uIWIStateAccidentTab: Locator;
    readonly uIVehicleNoEdit: Locator;
    readonly uICallYearEdit: Locator;
    readonly uICallNumberEdit: Locator;
    readonly uICSZCityEdit: Locator;
    readonly uIReportedLocationInfoIcon: Locator;
    readonly uICallInfoIcon: Locator;
    readonly uIJurisComboBox: Locator;
    readonly uINotForPublicLabel: Locator;
    readonly uIQAFormsTab: Locator;
    readonly uICustomTab: Locator;
    readonly uIReportedLocationEdit: Locator;
    readonly uIDotEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uICrashYearEdit = page.locator('#nbrTraCS_Year');
        this.uICrashNumberEdit = page.locator('#nbrTraCS_Number');
        this.uICaseYearEdit = page.locator('#nbrIncidentID_Year');
        this.uICaseNumberEdit = page.locator('#nbrIncidentID_Number');
        this.uICaseDetailsInfoButton = page.locator('#nbrIncidentID_imgBtn');
        this.uILocationEdit = page.locator('#adrCrashLoc_txtFrom');
        this.uILocationCheckBox = page.locator('#adrAtLoc_chkVerify');
        this.uIBadgeNumberEdit = page.locator('#txtBadge');
        this.uINoOfUnitsEdit = page.locator('#txtUnits');
        this.uIOfficerEdit = page.locator('#lupOff_CodeValue');
        this.uIKSOfficerCodeEdit = page.locator('#lupOffPFID_CodeValue');
        this.uIOfficerLookupButton = page.locator('#lupOff_imgBtn');
        this.uIDateEdit = page.locator('#dtmReportedDttm_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id = 'dtmReportedDttm_Time']//input");
        this.uICrashEntryMainTab = page.locator("//span[contains(text(),'Main')]");
        this.uIMotoristNonMotoristTab = page.locator("//span[contains(text(),'Motorist/Non Motorist')]");
        this.uIWitnessTab = page.locator("//span[contains(text(),'Witness')]");
        this.uIOccupantsTab = page.locator("//span[contains(text(),'Occupants')]");
        this.uITruckBusTab = page.locator("//span[contains(text(),'Truck/Bus')]");
        this.uINarrativeTab = page.locator("//span[contains(text(),'Narrative')]");
        this.uINarrative1Tab = page.locator("//span[contains(text(),'Narrative1')]");
        this.uIDiagramTab = page.locator("//span[contains(text(),'Diagram')]");
        this.uINarrative2Tab = page.locator("//span[contains(text(),'Narrative2')]");
        this.uIDiagram2Tab = page.locator("//span[contains(text(),'Diagram2')]");
        this.uIPoliceActionTab = page.locator("//span[contains(text(),'Police Action')]");
        this.uIAttachmentTab = page.locator("//span[contains(text(),'Attachment')]");
        this.uIErrorTab = page.locator("//span[contains(text(),'Error')]");
        this.uICommentsTab = page.locator("//span[contains(text(),'Comments')]");
        this.uIMapTab = page.locator("//span[contains(text(),'Map')]");
        this.uIApprovalTab = page.locator("//span[contains(text(),'Approval')]");
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIDeleteIconButton = page.locator('#cmdDelete');
        this.uIStatusTextView = page.locator('#lblApprovalStatus');
        this.uIBottomLeftSideStatusBar = page.locator("//div[@id='tab0']//td[@class = 'statusBar']//b");
        this.uINotificationIconButton = page.locator('#btnNotify');
        this.uIWITracsYearEdit = page.locator('#nbrTraCS_Year');
        this.uIWITracsNumberEdit = page.locator('#nbrTraCS_Number');
        this.uIWIReportedLocationEdit = page.locator('#adrAtLoc_txtFrom');
        this.uIALCIconButton = page.locator('#ALC');
        this.uIDOTNoEdit = page.locator('#txtDOTNo');
        this.uIAmendedNoEdit = page.locator('#txtAmended');
        this.uIAccidentNoEdit = page.locator('#txtAcdNo');
        this.uIWIDateEdit = page.locator('#dtmAcd_Date_KPIDttmCtrl');
        this.uIWITimeEdit = page.locator("//table[@id = 'dtmAcd_Time']//input");
        this.uIWITruckBusTab = page.locator("//span[contains(text(),'TruckBus')]");
        this.uIWIAccidentTab = page.locator("//span[contains(text(),'Accident')]");
        this.uIWIUnitTab = page.locator("//span[contains(text(),'Unit')]");
        this.uIWITrailerTab = page.locator("//span[contains(text(),'Trailer')]");
        this.uIWIConclusionTab = page.locator("//span[contains(text(),'Conclusion')]");
        this.uIWIPropertyOwnerTab = page.locator("//span[contains(text(),'Property Owner')]");
        this.uIWICommentsTab = page.locator("//span[contains(text(),'Comments')]");
        this.uIWIOfficerCodeEdit = page.locator('#lupOffPFID_CodeValue');
        this.uIWIStateAccidentTab = page.locator("//span[@mkr = 'ti1']");
        this.uIVehicleNoEdit = page.locator('#txtUnits');
        this.uICallYearEdit = page.locator('#nbrCallNo_Year');
        this.uICallNumberEdit = page.locator('#nbrCallNo_Number');
        this.uICSZCityEdit = page.locator('#custHeaderCSZ_City');
        this.uIReportedLocationInfoIcon = page.locator('#adrAtLoc_cmdIncOnAddr');
        this.uICallInfoIcon = page.locator('#nbrCallNo_imgBtn');
        this.uIJurisComboBox = page.locator('#lstJuris');
        this.uINotForPublicLabel = page.locator('#lblNotForPublic');
        this.uIQAFormsTab = page.locator("//span[contains(text(),'QA Forms')]");
        this.uICustomTab = page.locator("//span[@class='igtab_BlueThemeTHCenter']//span[text()='Custom']");
        this.uIReportedLocationEdit = page.locator('#adrAtLoc_txtFrom');
        this.uIDotEdit = page.locator('#txtDOTNo');
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async saveNClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        await this.popup.confirmYes();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async enterCaseNumberDetails(): Promise<void> {
        const caseNo = BaseData.getTestValue('CaseNo');
        await this.uICaseYearEdit.fill(caseNo.substring(0, 2));
        await this.uICaseNumberEdit.fill(caseNo.substring(3));
        await this.uICaseNumberEdit.press('Tab');
    }

    async enterAtLocation(): Promise<void> {
        await this.uILocationEdit.fill(BaseData.getTestValue('Address'));
        await this.uILocationEdit.press('Tab');
        await this.uILocationCheckBox.press('Tab');
    }

    async enterAtOfficer(): Promise<void> {
        await this.uIOfficerEdit.fill(BaseData.getTestValue('Officer'));
        await this.uIOfficerEdit.press('Tab');
    }

    async enterAtNoOfUnits(): Promise<void> {
        await this.uINoOfUnitsEdit.fill(BaseData.getTestValue('NoOfUnits'));
    }

    async enterCurrentDate(): Promise<void> {
        await this.uIDateEdit.click();
        await this.uIDateEdit.press('Tab');
    }

    async enterCurrentTime(): Promise<void> {
        await this.uITimeEdit.click();
        await this.uITimeEdit.press('Tab');
    }

    async switchToMainTab(): Promise<void> {
        await this.uICrashEntryMainTab.click();
    }

    async switchToMotoristNonMotoristTab(): Promise<void> {
        await this.uIMotoristNonMotoristTab.click();
        await this.page.waitForTimeout(1000);
        new BrowserHelpers(this.page).switchToFrame('CrashMotorist');
    }

    async switchToAttachmentTab(): Promise<void> {
        await this.uIAttachmentTab.click();
        await this.page.waitForTimeout(1000);
        new BrowserHelpers(this.page).switchToFrame('frmTxtAttachMgrEx');
    }

    async switchToWitnessTab(): Promise<void> {
        await this.uIWitnessTab.click();
        await this.page.waitForTimeout(1000);
        new BrowserHelpers(this.page).switchToFrame('Witness');
    }

    async switchToOccupantsTab(): Promise<void> {
        await this.uIOccupantsTab.click();
        await this.page.waitForTimeout(1000);
        new BrowserHelpers(this.page).switchToFrame('Occupants.aspx');
    }

    async switchToTruckBusTab(): Promise<void> {
        await this.uITruckBusTab.click();
        await this.page.waitForTimeout(1000);
        new BrowserHelpers(this.page).switchToFrame('TruckBus');
    }

    async switchToNarrativeTab(): Promise<void> {
        await this.uINarrativeTab.click();
        await this.page.waitForTimeout(1000);
        new BrowserHelpers(this.page).switchToFrame('frmNameComments');
    }

    async switchToNarrative2Tab(): Promise<void> {
        await this.uINarrative2Tab.click();
        new BrowserHelpers(this.page).switchToFrame('frmNameComments.aspx');
    }

    async switchToDiagramTab(): Promise<void> {
        await this.uIDiagramTab.click();
    }

    async switchToDiagram2Tab(): Promise<void> {
        await this.uIDiagram2Tab.click();
        new BrowserHelpers(this.page).switchToFrame('frmPnxCrashDiagram');
    }

    async switchToMapTab(): Promise<void> {
        await this.uIMapTab.click();
        new BrowserHelpers(this.page).switchToFrame('GHydrantMap');
    }

    async switchToPoliceActionTab(): Promise<void> {
        await this.uIPoliceActionTab.click();
    }

    async switchToApprovalTab(): Promise<void> {
        await this.uIApprovalTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmPnxGlobalApproval');
    }

    async switchToCommentsTab(): Promise<void> {
        await this.uICommentsTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmNameComments.aspx');
    }

    async readCrashNo(): Promise<string> {
        const year = await this.uICrashYearEdit.inputValue();
        const number = await this.uICrashNumberEdit.inputValue();
        return `${year}-${number}`;
    }

    async getActiveCrashNumber(): Promise<string> {
        const year = await this.uICrashYearEdit.inputValue();
        const number = await this.uICrashNumberEdit.inputValue();
        return `${year}-${number}`;
    }

    async verify1003UpdateSuccessfulFooterMessage(): Promise<void> {
        const text = await this.uIBottomLeftSideStatusBar.innerText();
        expect(text.toLowerCase()).toContain('1003 - update successful');
    }

    async verifyAdditionSuccessfulAcknowledgeMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('1002 - Addition Successful');
        await this.popup.acknowledgeOkButton.click();
    }
}

// =============================================================================
// CRASH ENTRY MAIN TAB PAGE
// =============================================================================
export class CrashEntryMainTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIReportableCheckBox: Locator;
    readonly uINonReportableCheckBox: Locator;
    readonly uIFatalCheckBox: Locator;
    readonly uIChangeReportCheckBox: Locator;
    readonly uIPhotoTakenCheckBox: Locator;
    readonly uINJTR1ACheckBox: Locator;
    readonly uINJTR1BCheckBox: Locator;
    readonly uIKSFatalCheckBox: Locator;
    readonly uIPoliceDptOfEdit: Locator;
    readonly uIKSPoliceDepartmentEdit: Locator;
    readonly uICode2ComboBox: Locator;
    readonly uIStationPrecinctComboBox: Locator;
    readonly uIDateOfCrashEdit: Locator;
    readonly uITimeOfCrashEdit: Locator;
    readonly uIDayOfWeekComboBox: Locator;
    readonly uIMunicipalityCodeEdit: Locator;
    readonly uIMunicipalityCodeTextView: Locator;
    readonly uIMunicipalityCodeLookupButton: Locator;
    readonly uIRoadNameEdit: Locator;
    readonly uIRoadNameVerifyCheckBox: Locator;
    readonly uISppedLimit11Edit: Locator;
    readonly uIRouteNumberEdit: Locator;
    readonly uICrossRoadNameEdit: Locator;
    readonly uICrossRoadNameVerifyCheckBox: Locator;
    readonly uILatituteEdit: Locator;
    readonly uILongitudeEdit: Locator;
    readonly uIRoadDividedByComboBox: Locator;
    readonly uITemproraryTrafficControlZoneComboBox: Locator;
    readonly uILightConditionComboBox: Locator;
    readonly uIRoadSystemComboBox: Locator;
    readonly uIRoadCharacterComboBox: Locator;
    readonly uIRoadSurfaceTypeComboBox: Locator;
    readonly uIRoadSurfaceConditionsComboBox: Locator;
    readonly uIEnvironmentConditionComboBox: Locator;
    readonly uIWithOtherMVAsFirstEventComboBox: Locator;
    readonly uIWithBelowAsFirstEventComboBox: Locator;
    readonly uIDamageToOtherPropertyEdit: Locator;
    readonly uIDamageOtherPropertyCheckBox: Locator;
    readonly uICityEdit: Locator;
    readonly uICountyComboBox: Locator;
    readonly uIDateOfAccidentEdit: Locator;
    readonly uITimeOfAccidentEdit: Locator;
    readonly uIDayComboBox: Locator;
    readonly uILocationEdit: Locator;
    readonly uIBlockNoEdit: Locator;
    readonly uITotalInjuredEdit: Locator;
    readonly uITotalKilledEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIReportableCheckBox = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_chkRpt');
        this.uINonReportableCheckBox = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_chkNonRpt');
        this.uIFatalCheckBox = page.locator('#tabCE_tmpl0_UsrActMain1_chkGvtProp');
        this.uIChangeReportCheckBox = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_chkChgRpt');
        this.uIPhotoTakenCheckBox = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_chkPhotoTkn');
        this.uINJTR1ACheckBox = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_chkNJTR_1A');
        this.uINJTR1BCheckBox = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_chkNJTR_1B');
        this.uIKSFatalCheckBox = page.locator('#tabCE_tmpl0_UsrKSCrashMain1_chkFatal');
        this.uIPoliceDptOfEdit = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_txtPoliceDpt');
        this.uIKSPoliceDepartmentEdit = page.locator('#tabCE_tmpl0_UsrKSCrashMain1_txtPoliceDpt');
        this.uICode2ComboBox = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_ccdCode_DropDown');
        this.uIStationPrecinctComboBox = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_cddStation_DropDown');
        this.uIDateOfCrashEdit = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_dtCrashDate_KPIDttmCtrl');
        this.uITimeOfCrashEdit = page.locator("//table[@id = 'tabCE_tmpl0_usrNJCrashSummary1_dtCrashTime_Time']//input");
        this.uIDayOfWeekComboBox = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_cddDay_DropDown');
        this.uIMunicipalityCodeEdit = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_lupOf_CodeValue');
        this.uIMunicipalityCodeTextView = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_lupOf_CodeDescription');
        this.uIMunicipalityCodeLookupButton = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_lupOf_imgBtn');
        this.uIRoadNameEdit = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_adrCrashLoc_txtFrom');
        this.uIRoadNameVerifyCheckBox = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_adrCrashLoc_chkVerify');
        this.uISppedLimit11Edit = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_txtSpeedLimit');
        this.uIRouteNumberEdit = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_lupRoute_CodeValue');
        this.uICrossRoadNameEdit = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_adrCrossLoc_txtFrom');
        this.uICrossRoadNameVerifyCheckBox = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_adrCrossLoc_chkVerify');
        this.uILatituteEdit = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_txtLatitude');
        this.uILongitudeEdit = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_txtLongitude');
        this.uIRoadDividedByComboBox = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_cddRdDivBy_DropDown');
        this.uITemproraryTrafficControlZoneComboBox = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_cddTempTraCtrl_DropDown');
        this.uILightConditionComboBox = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_cddLightCondition_DropDown');
        this.uIRoadSystemComboBox = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_cddRdSys_DropDown');
        this.uIRoadCharacterComboBox = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_cddRdChar_DropDown');
        this.uIRoadSurfaceTypeComboBox = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_cddRdSurfType_DropDown');
        this.uIRoadSurfaceConditionsComboBox = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_cddRdSurfCond_DropDown');
        this.uIEnvironmentConditionComboBox = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_cddEnvirCond_DropDown');
        this.uIWithOtherMVAsFirstEventComboBox = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_cddOthrMV_DropDown');
        this.uIWithBelowAsFirstEventComboBox = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_cddBelow_DropDown');
        this.uIDamageToOtherPropertyEdit = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_txtDamageProperty');
        this.uIDamageOtherPropertyCheckBox = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_ChkDamage');
        this.uICityEdit = page.locator('#tabCE_tmpl0_UsrKSCrashMain1_txtCity');
        this.uICountyComboBox = page.locator('#tabCE_tmpl0_UsrKSCrashMain1_cddCounty_DropDown');
        this.uIDateOfAccidentEdit = page.locator('#tabCE_tmpl0_UsrKSCrashMain1_dttmDOA_KPIDttmCtrl');
        this.uITimeOfAccidentEdit = page.locator("//table[@id='tabCE_tmpl0_UsrKSCrashMain1_dttmTOA_Time']//input");
        this.uIDayComboBox = page.locator('#tabCE_tmpl0_UsrKSCrashMain1_cddDay_DropDown');
        this.uILocationEdit = page.locator('#tabCE_tmpl0_UsrKSCrashMain1_adrCrashLoc_txtFrom');
        this.uIBlockNoEdit = page.locator('#tabCE_tmpl0_UsrKSCrashMain1_txtBlockNo');
        this.uITotalInjuredEdit = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_txtTolInjur');
        this.uITotalKilledEdit = page.locator('#tabCE_tmpl0_usrNJCrashSummary1_txtTolKill');
    }

    async clickNJTR1BCheckBox(): Promise<void> {
        await this.uINJTR1BCheckBox.click();
    }

    async clickReportableCheckBox(): Promise<void> {
        await this.uIReportableCheckBox.click();
    }

    async enterAtCrossRoad(): Promise<void> {
        await this.uICrossRoadNameEdit.click();
        await this.uICrossRoadNameEdit.fill(BaseData.getTestValue('CrossRoad'));
        await this.uICrossRoadNameVerifyCheckBox.press('Tab');
    }

    async enterAtCity(): Promise<void> {
        await this.uICityEdit.fill(BaseData.getTestValue('City'));
    }

    async selectCounty(): Promise<void> {
        await this.uICountyComboBox.selectOption({ index: 1 });
    }

    async tabOutDateOfAccident(): Promise<void> {
        await this.uIDateOfAccidentEdit.press('Tab');
    }

    async tabOutTimeOfAccident(): Promise<void> {
        await this.uITimeOfAccidentEdit.press('Tab');
    }

    async enterAtRouteNo(): Promise<void> {
        await this.uIRouteNumberEdit.fill(BaseData.getTestValue('RouteNo'));
        await this.uIRouteNumberEdit.press('Tab');
    }

    async enterAtMunicipalityCode(): Promise<void> {
        await this.uIMunicipalityCodeEdit.fill(BaseData.getTestValue('MunicipalityCode'));
        await this.uIMunicipalityCodeEdit.press('Tab');
    }

    async selectAtStationOrPrecinct(): Promise<void> {
        await this.uIStationPrecinctComboBox.selectOption({ label: BaseData.getTestValue('Station') });
    }

    async enterAtPoliceDept(jsonIndex: number): Promise<void> {
        await this.uIPoliceDptOfEdit.fill(BaseData.getTestValue('PoliceDept' + jsonIndex));
    }

    async clearPoliceDept(): Promise<void> {
        await this.uIPoliceDptOfEdit.clear();
    }
}

// =============================================================================
// CRASH WITNESS TAB PAGE
// =============================================================================
export class CrashWitnessTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;

    readonly uIOfficerEdit: Locator;
    readonly uIOfficerLookupButton: Locator;
    readonly uILocationEdit: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameTypeIDEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIInternalSaveButton: Locator;
    readonly uIInternalResetButton: Locator;
    readonly uINarrativeEdit: Locator;
    readonly uITextEditorButton: Locator;
    readonly uIHomePhoneEdit: Locator;
    readonly uIWorkPhoneEdit: Locator;
    readonly uINameInfoButton: Locator;
    readonly uIWitnessTabTable: Locator;
    readonly uIWitnessTabStatusBar: Locator;
    readonly uIWitnessNameClearButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);

        this.uIOfficerEdit = page.locator('#lupOfficer_CodeValue');
        this.uIOfficerLookupButton = page.locator('#lupOfficer_imgBtn');
        this.uILocationEdit = page.locator('#txtLocation');
        this.uINameTypeEdit = page.locator('#nNameID_NameType');
        this.uINameTypeIDEdit = page.locator('#nNameID_NameTypeID');
        this.uILastNameEdit = page.locator('#nNameID_LastName');
        this.uIFirstNameEdit = page.locator('#nNameID_FirstName');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIClearButton = page.locator('#cmdClear');
        this.uIInternalSaveButton = page.locator('#cmdInternalSave');
        this.uIInternalResetButton = page.locator('#cmdInternalRefresh');
        this.uINarrativeEdit = page.locator('#txtNarrative');
        this.uITextEditorButton = page.locator('#cmdtextEditor');
        this.uIHomePhoneEdit = page.locator('#txtHomePhone');
        this.uIWorkPhoneEdit = page.locator('#txtWorkPhone');
        this.uINameInfoButton = page.locator('#nNameID_imgSrch');
        this.uIWitnessTabTable = page.locator('#grdWitness');
        this.uIWitnessTabStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIWitnessNameClearButton = page.locator("//span[@id='lblAtDistFrom']/..//input");
    }

    async enterAtName(): Promise<void> {
        await this.uILastNameEdit.fill(BaseData.getTestValue('LastName'));
        await this.uIFirstNameEdit.fill(BaseData.getTestValue('FirstName'));
        await this.uIFirstNameEdit.press('Tab');
    }

    async clickAddbutton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async internalSave(): Promise<void> {
        await this.uIInternalSaveButton.click();
        await this.popup.confirmYes();
    }

    async verifyAtNameInGrid(jsonIndex: number): Promise<void> {
        const name = await this.grid.getGridCellInnerText(this.uIWitnessTabTable, 'Name', jsonIndex);
        expect(name).toContain(BaseData.getTestValue('Name' + jsonIndex));
    }
}

// =============================================================================
// CRASH MOTORIST / NON-MOTORIST TAB PAGE
// =============================================================================
export class CrashMotoristNonMotoristTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;

    readonly uIUnitNoEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIMotoristNonMotoristTabResultGrid: Locator;
    readonly uIVehicleNoEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);

        this.uIUnitNoEdit = page.locator('#txtUnit');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIClearButton = page.locator('#cmdClear');
        this.uIMotoristNonMotoristTabResultGrid = page.locator('#grdUnits');
        this.uIVehicleNoEdit = page.locator("//input[@id='txtUnit']");
    }

    async enterAtUnitNo(): Promise<void> {
        await this.uIUnitNoEdit.fill(BaseData.getTestValue('UnitNo'));
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async selectRowByAtUnit(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIMotoristNonMotoristTabResultGrid, 'Vehicle #', rowIndex);
        await cell.click();
    }

    async selectAtDriverInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIMotoristNonMotoristTabResultGrid, BaseData.getTestValue('Driver'));
    }

    async deleteAtVehiclePlateInGrid(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uIMotoristNonMotoristTabResultGrid, BaseData.getTestValue('VehiclePlate'));
        await this.popup.confirmYes();
    }
}

// =============================================================================
// CRASH OCCUPANTS TAB PAGE
// =============================================================================
export class CrashOccupantsTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;

    readonly uIUnitNoComboBox: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIPositioninOnVehicleComboBox: Locator;
    readonly uIEjectionComboBox: Locator;
    readonly uISafetyEquipmentComboBox: Locator;
    readonly uIUsedComboBox: Locator;
    readonly uIAirBagComboBox: Locator;
    readonly uIVictamPhysicalConditionComboBox: Locator;
    readonly uILocofmostseverephysInjComboBox: Locator;
    readonly uITypeofmostseverephysInjComboBox: Locator;
    readonly uIHospitalCodeEdit: Locator;
    readonly uIHospitalCodeLookupButton: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIInternalSaveButton: Locator;
    readonly uIOccupantsTabResultGrid: Locator;
    readonly uIOccupantNameTypeEdit: Locator;
    readonly uIOccupantNameIDEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);

        this.uIUnitNoComboBox = page.locator('#cddUnitNo_DropDown');
        this.uILastNameEdit = page.locator('#nNameID_LastName');
        this.uIFirstNameEdit = page.locator('#nNameID_FirstName');
        this.uIPositioninOnVehicleComboBox = page.locator('#cddVehPosition_DropDown');
        this.uIEjectionComboBox = page.locator('#cddEjected_DropDown');
        this.uISafetyEquipmentComboBox = page.locator('#cddSafty_DropDown');
        this.uIUsedComboBox = page.locator('#cddUsed_DropDown');
        this.uIAirBagComboBox = page.locator('#cddAirBag_DropDown');
        this.uIVictamPhysicalConditionComboBox = page.locator('#cddPhysicCond_DropDown');
        this.uILocofmostseverephysInjComboBox = page.locator('#tabCE_tmpl0_UsrNJPerson1_cddInjLoc_DropDown');
        this.uITypeofmostseverephysInjComboBox = page.locator('#cddTypeInj_DropDown');
        this.uIHospitalCodeEdit = page.locator('#lupHospital_CodeValue');
        this.uIHospitalCodeLookupButton = page.locator('#lupHospital_imgBtn');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIClearButton = page.locator('#cmdClear');
        this.uIInternalSaveButton = page.locator('#cmdInternalSave');
        this.uIOccupantsTabResultGrid = page.locator('#grdOccupants');
        this.uIOccupantNameTypeEdit = page.locator('#nNameID_NameType');
        this.uIOccupantNameIDEdit = page.locator('#nNameID_NameTypeID');
    }

    async enterAtOccupantNameID(): Promise<void> {
        const occupantId = BaseData.getTestValue('OccupantID');
        await this.uIOccupantNameTypeEdit.fill(occupantId.substring(0, 1));
        await this.uIOccupantNameIDEdit.fill(occupantId.substring(2));
        await this.uIOccupantNameIDEdit.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async internalSave(): Promise<void> {
        await this.uIInternalSaveButton.click();
        await this.popup.confirmYes();
    }

    async verifyAtOccupantNameInGrid(jsonIndex: number): Promise<void> {
        const name = await this.grid.getGridCellInnerText(this.uIOccupantsTabResultGrid, 'Name', jsonIndex);
        expect(name).toBe(BaseData.getTestValue('OccupantName' + jsonIndex));
    }
}

// =============================================================================
// CRASH TRUCK / BUS TAB PAGE
// =============================================================================
export class CrashTruckBusTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;

    readonly uIVehicleNoComboBox: Locator;
    readonly uILastNameEdit: Locator;
    readonly uICarrierNumberEdit: Locator;
    readonly uICarrierNameIDEdit: Locator;
    readonly uIOversizeWeightPermitComboBox: Locator;
    readonly uICommercialVehicleWeightComboBox: Locator;
    readonly uINameorPlacardNoEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIInternalSaveButton: Locator;
    readonly uITruckBusTabResultGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);

        this.uIVehicleNoComboBox = page.locator('#cddUnitNo_DropDown');
        this.uILastNameEdit = page.locator('#nNameID_LastName');
        this.uICarrierNumberEdit = page.locator('#txtCarrierNo');
        this.uICarrierNameIDEdit = page.locator('#nNameID_NameTypeID');
        this.uIOversizeWeightPermitComboBox = page.locator('#cddOverWeight_DropDown');
        this.uICommercialVehicleWeightComboBox = page.locator('#cddVehWeight_DropDown');
        this.uINameorPlacardNoEdit = page.locator('#txtPlacardNbr');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIClearButton = page.locator('#cmdClear');
        this.uIInternalSaveButton = page.locator('#cmdInternalSave');
        this.uITruckBusTabResultGrid = page.locator('#grdTruckBus');
    }

    async enterAtCarrierID(): Promise<void> {
        await this.uICarrierNameIDEdit.fill(BaseData.getTestValue('CarrierID'));
        await this.uICarrierNameIDEdit.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async internalSave(): Promise<void> {
        await this.uIInternalSaveButton.click();
        await this.popup.confirmYes();
    }
}

// =============================================================================
// CRASH UNIT ENTRY SCREEN & TABS
// =============================================================================
export class CrashUnitPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIUnitNoEdit: Locator;
    readonly uINoOfOccupantsEdit: Locator;
    readonly uICrashYearEdit: Locator;
    readonly uICrashNumberEdit: Locator;
    readonly uIReportedDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIPersonTab: Locator;
    readonly uIVehicleTab: Locator;
    readonly uIDamageConditionsTab: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIUnitNoEdit = page.locator('#txtUnit');
        this.uINoOfOccupantsEdit = page.locator('#txtOcc');
        this.uICrashYearEdit = page.locator('#nbrTraCS_Year');
        this.uICrashNumberEdit = page.locator('#nbrTraCS_Number');
        this.uIReportedDateEdit = page.locator('#dtmRptDttm_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id = 'dtmRptDttm_Time']//input");
        this.uIPersonTab = page.locator("//span[text()='Person']");
        this.uIVehicleTab = page.locator("//span[text()='Vehicle']");
        this.uIDamageConditionsTab = page.locator("//span[contains(text(),'Damage / Conditions')]");
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIBottomLeftSideStatusBar = page.locator("//div[@id='tab0']//td[@class = 'statusBar']//b");
    }

    async switchToPersonTab(): Promise<void> {
        await this.uIPersonTab.click();
    }

    async switchToVehicleTab(): Promise<void> {
        await this.uIVehicleTab.click();
    }

    async switchToDamageConditionsTab(): Promise<void> {
        await this.uIDamageConditionsTab.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async saveAndClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        await this.popup.confirmYes();
    }

    async closeCrashUnitScreen(): Promise<void> {
        await this.page.close();
    }

    async enterAtNoOfOccupants(): Promise<void> {
        await this.uINoOfOccupantsEdit.fill(BaseData.getTestValue('Occupants'));
    }
}

export class CrashUnitPersonTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uITypeOfPersonComboBox: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameTypeIDEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uICityEdit: Locator;
    readonly uIStateDropdown: Locator;
    readonly uIZipEdit: Locator;
    readonly uIDOBEdit: Locator;
    readonly uIAgeEdit: Locator;
    readonly uISexEdit: Locator;
    readonly uIHitandRunCheckBox: Locator;
    readonly uINameInfoIconButton: Locator;
    readonly uIChargeEdit: Locator;
    readonly uICharge2Edit: Locator;
    readonly uISummonNoEdit: Locator;
    readonly uISummonNo1Edit: Locator;
    readonly uINJNameInfoIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uITypeOfPersonComboBox = page.locator('#tabCE_tmpl0_UsrNJPerson1_cddPerson_DropDown');
        this.uINameTypeEdit = page.locator('#tabCE_tmpl0_UsrNJPerson1_nNameID_NameType');
        this.uINameTypeIDEdit = page.locator('#tabCE_tmpl0_UsrNJPerson1_nNameID_NameTypeID');
        this.uILastNameEdit = page.locator('#tabCE_tmpl0_UsrNJPerson1_nNameID_LastName');
        this.uIFirstNameEdit = page.locator('#tabCE_tmpl0_UsrNJPerson1_nNameID_FirstName');
        this.uIAddressEdit = page.locator('#tabCE_tmpl0_UsrNJPerson1_txtMainAddress');
        this.uICityEdit = page.locator('#tabCE_tmpl0_UsrNJPerson1_custHeaderCSZ_City');
        this.uIStateDropdown = page.locator("//table[@id='TablePerson2']//select[@id='tabCE_tmpl0_UsrNJPerson1_custHeaderCSZ_State_DropDown']");
        this.uIZipEdit = page.locator("//table[@id='TablePerson1']//input[@id='tabCE_tmpl0_UsrNJPerson1_custHeaderCSZ_Zip']");
        this.uIDOBEdit = page.locator('#tabCE_tmpl0_UsrNJPerson1_dtDOB_KPIDttmCtrl');
        this.uIAgeEdit = page.locator('#tabCE_tmpl0_UsrNJPerson1_txtAge');
        this.uISexEdit = page.locator('#tabCE_tmpl0_UsrNJPerson1_txtSex');
        this.uIHitandRunCheckBox = page.locator('#tabCE_tmpl0_UsrNJPerson1_chkHit');
        this.uINameInfoIconButton = page.locator('#tabCE_tmpl0_UsrNJPerson1_nNameID_imgSrch');
        this.uIChargeEdit = page.locator('#tabCE_tmpl0_UsrNJPerson1_lupCharge_CodeValue');
        this.uICharge2Edit = page.locator('#tabCE_tmpl0_UsrNJPerson1_lupCharge2_CodeValue');
        this.uISummonNoEdit = page.locator('#tabCE_tmpl0_UsrNJPerson1_txtCitation_CitationNbr');
        this.uISummonNo1Edit = page.locator('#tabCE_tmpl0_UsrNJPerson1_txtCitation2_CitationNbr');
        this.uINJNameInfoIcon = page.locator('#tabCE_tmpl0_UsrNJPerson1_nNameID_imgSrch');
    }

    async selecttypeOfPersonAsDriver(): Promise<void> {
        await this.uITypeOfPersonComboBox.selectOption({ label: '01 - Driver' });
        await this.uITypeOfPersonComboBox.press('Tab');
    }

    async enterAtNameID(): Promise<void> {
        const nameId = BaseData.getTestValue('NameID');
        await this.uINameTypeEdit.fill(nameId.substring(0, 1));
        await this.uINameTypeIDEdit.fill(nameId.substring(2));
        await this.uINameTypeIDEdit.press('Tab');
    }

    async enterAtCharge(): Promise<void> {
        await this.uIChargeEdit.fill(BaseData.getTestValue('Charge'));
        await this.uIChargeEdit.press('Tab');
    }
}

export class CrashUnitVehicleTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uIPlateNumberEdit: Locator;
    readonly uIPlateStateComboBox: Locator;
    readonly uIPlateLookupButton: Locator;
    readonly uIVehicleOwnerSameAsDriverCheckBox: Locator;
    readonly uINameTypeIDEdit: Locator;
    readonly uINameTypeYearEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uITypeComboBox: Locator;
    readonly uIVehicleUseComboBox: Locator;
    readonly uIInsurancePolicyNoEdit: Locator;
    readonly uIInsuranceCodeComboBox: Locator;
    readonly uIVehicleNoEdit: Locator;
    readonly uIYearEdit: Locator;
    readonly uIMakeEdit: Locator;
    readonly uIModelEdit: Locator;
    readonly uIVINEdit: Locator;
    readonly uIColor1Edit: Locator;
    readonly uIColor2Edit: Locator;
    readonly uIOwnerInfoIcon: Locator;
    readonly uIInsuranceCodeEdit: Locator;
    readonly uIInsuranceDescriptionEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);

        this.uIPlateNumberEdit = page.locator('#tabCE_tmpl1_UsrNJVehicle1_plcVehicle_PlateNumber');
        this.uIPlateStateComboBox = page.locator('#tabCE_tmpl1_UsrNJVehicle1_plcVehicle_KPIState');
        this.uIPlateLookupButton = page.locator('#tabCE_tmpl1_UsrNJVehicle1_plcVehicle_imgBtn');
        this.uIVehicleOwnerSameAsDriverCheckBox = page.locator('#tabCE_tmpl1_UsrNJVehicle1_chkDriver');
        this.uINameTypeIDEdit = page.locator('#tabCE_tmpl1_UsrNJVehicle1_nNameID_NameTypeID');
        this.uINameTypeYearEdit = page.locator('#tabCE_tmpl1_UsrNJVehicle1_nNameID_NameType');
        this.uILastNameEdit = page.locator('#tabCE_tmpl1_UsrNJVehicle1_nNameID_LastName');
        this.uIFirstNameEdit = page.locator('#tabCE_tmpl1_UsrNJVehicle1_nNameID_FirstName');
        this.uITypeComboBox = page.locator('#tabCE_tmpl1_UsrNJVehicle1_cddType_DropDown');
        this.uIVehicleUseComboBox = page.locator('#tabCE_tmpl1_UsrNJVehicle1_cddVehUse_DropDown');
        this.uIInsurancePolicyNoEdit = page.locator('#tabCE_tmpl1_UsrNJVehicle1_txtInsurance');
        this.uIInsuranceCodeComboBox = page.locator('#tabCE_tmpl1_UsrNJVehicle1_cddInsurance_DropDown');
        this.uIVehicleNoEdit = page.locator('#tabCE_tmpl1_UsrNJVehicle1_txtVehNo');
        this.uIYearEdit = page.locator('#tabCE_tmpl1_UsrNJVehicle1_txtVehYear');
        this.uIMakeEdit = page.locator('#tabCE_tmpl1_UsrNJVehicle1_txtVehMake');
        this.uIModelEdit = page.locator('#tabCE_tmpl1_UsrNJVehicle1_txtVehModel');
        this.uIVINEdit = page.locator('#tabCE_tmpl1_UsrNJVehicle1_txtVehVin');
        this.uIColor1Edit = page.locator('#tabCE_tmpl1_UsrNJVehicle1_txtVehColor1');
        this.uIColor2Edit = page.locator('#tabCE_tmpl1_UsrNJVehicle1_txtVehColor2');
        this.uIOwnerInfoIcon = page.locator('#tabCE_tmpl1_UsrNJVehicle1_nNameID_imgSrch');
        this.uIInsuranceCodeEdit = page.locator('#tabCE_tmpl1_UsrNJVehicle1_lupInsCompany_CodeValue');
        this.uIInsuranceDescriptionEdit = page.locator('#tabCE_tmpl1_UsrNJVehicle1_lupInsCompany_CodeDescription');
    }

    async enterAtPlateNumber(): Promise<void> {
        await this.uIPlateNumberEdit.fill(BaseData.getTestValue('PlateNumber'));
    }

    async clickVehicleOwnerSameAsDriver(): Promise<void> {
        await this.uIVehicleOwnerSameAsDriverCheckBox.click();
    }

    async enterAtInsuranceCode(): Promise<void> {
        await this.uIInsuranceCodeEdit.fill(BaseData.getTestValue('InsuranceCode'));
        await this.uIInsuranceCodeEdit.press('Tab');
    }

    async enterAtPolicyNumber(): Promise<void> {
        await this.uIInsurancePolicyNoEdit.fill(BaseData.getTestValue('PolicyNo'));
    }
}

export class CrashUnitDamageConditionsTabPage {
    readonly page: Page;

    readonly uIInitialImpactComboBox: Locator;
    readonly uIPrincipalDamComboBox: Locator;
    readonly uIExtentOfDamageComboBox: Locator;
    readonly uIApparentContributingCircumstanceAComboBox: Locator;
    readonly uIPreCrashAcrionComboBox: Locator;
    readonly uITrafficControlsComboBox: Locator;
    readonly uISequenceofEvents1stComboBox: Locator;
    readonly uIMostHarmfulEventComboBox: Locator;
    readonly uIAlcoholGivenComboBox: Locator;
    readonly uIAlcoholTypeComboBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIInitialImpactComboBox = page.locator('#tabCE_tmpl2_UsrNJDamage1_cddInitialImpact_DropDown');
        this.uIPrincipalDamComboBox = page.locator('#tabCE_tmpl2_UsrNJDamage1_cddPrincipal_DropDown');
        this.uIExtentOfDamageComboBox = page.locator('#tabCE_tmpl2_UsrNJDamage1_cddExtDamage_DropDown');
        this.uIApparentContributingCircumstanceAComboBox = page.locator('#tabCE_tmpl2_UsrNJDamage1_cddCircumstanceA_DropDown');
        this.uIPreCrashAcrionComboBox = page.locator('#tabCE_tmpl2_UsrNJDamage1_cddPreCrash_DropDown');
        this.uITrafficControlsComboBox = page.locator('#tabCE_tmpl2_UsrNJDamage1_cddTrafficCntl_DropDown');
        this.uISequenceofEvents1stComboBox = page.locator('#tabCE_tmpl2_UsrNJDamage1_cddNonCollSeqEvnt1_DropDown');
        this.uIMostHarmfulEventComboBox = page.locator('#tabCE_tmpl2_UsrNJDamage1_cddMostHarmful_DropDown');
        this.uIAlcoholGivenComboBox = page.locator('#tabCE_tmpl2_UsrNJDamage1_cddAlcoholGiven_DropDown');
        this.uIAlcoholTypeComboBox = page.locator('#tabCE_tmpl2_UsrNJDamage1_cddAlcoholType_DropDown');
    }

    async selectAtInitialImpact(jsonIndex: number): Promise<void> {
        await this.uIInitialImpactComboBox.selectOption({ label: BaseData.getTestValue('InitialImpact' + jsonIndex) });
    }

    async selectAtPrincipalDam(jsonIndex: number): Promise<void> {
        await this.uIPrincipalDamComboBox.selectOption({ label: BaseData.getTestValue('PrincipalDam' + jsonIndex) });
    }

    async selectAtExtentOfDamage(jsonIndex: number): Promise<void> {
        await this.uIExtentOfDamageComboBox.selectOption({ label: BaseData.getTestValue('ExtentOfDamage' + jsonIndex) });
    }

    async selectAtApparentContributingCircumstanceA(jsonIndex: number): Promise<void> {
        await this.uIApparentContributingCircumstanceAComboBox.selectOption({ label: BaseData.getTestValue('ApparentContributingCircumstanceA' + jsonIndex) });
    }

    async selectAtPreCrashAction(jsonIndex: number): Promise<void> {
        await this.uIPreCrashAcrionComboBox.selectOption({ label: BaseData.getTestValue('PreCrashAction' + jsonIndex) });
    }

    async selectAtTrafficControls(jsonIndex: number): Promise<void> {
        await this.uITrafficControlsComboBox.selectOption({ label: BaseData.getTestValue('TrafficControls' + jsonIndex) });
    }

    async selectAtSequenceofEvents1st(jsonIndex: number): Promise<void> {
        await this.uISequenceofEvents1stComboBox.selectOption({ label: BaseData.getTestValue('SequenceOfEvents1st' + jsonIndex) });
    }

    async selectAtMostHarmfulEvents4th(jsonIndex: number): Promise<void> {
        await this.uIMostHarmfulEventComboBox.selectOption({ label: BaseData.getTestValue('MostHarmfulEvents4th' + jsonIndex) });
    }
}

// =============================================================================
// CITATION SEARCH PAGE
// =============================================================================
export class CitationSearchPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uISearchButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIBackButton: Locator;
    readonly uICENoYearEdit: Locator;
    readonly uICENoNumberEdit: Locator;
    readonly uIClearButton: Locator;
    readonly uICETypeComboBox: Locator;
    readonly uICitationSearchResultGrid: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIOfficerEdit: Locator;
    readonly uICallYearEdit: Locator;
    readonly uICallNumberEdit: Locator;
    readonly uIPremiseTypeDropDown: Locator;
    readonly uITracking: Locator;
    readonly uIExcelButton: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIRaceDropDown: Locator;
    readonly uIResidentDropDown: Locator;
    readonly uIEventDropDown: Locator;
    readonly uIActionPeriodEdit: Locator;
    readonly uIToEdit: Locator;
    readonly uINextButton: Locator;
    readonly uIMiddleNameEdit: Locator;
    readonly uISoundAlikeCheckbox: Locator;
    readonly uICitationLocationDropdown: Locator;
    readonly uIStreetOneEdit: Locator;
    readonly uICitationNoEdit: Locator;
    readonly uIChargeEdit: Locator;
    readonly uINIBRSEdit: Locator;
    readonly uIPlateEdit: Locator;
    readonly uIStateDropdown: Locator;
    readonly uIMakeEdit: Locator;
    readonly uIModelEdit: Locator;
    readonly uITicketVoidedCheckBox: Locator;
    readonly uIAuthorizedByEdit: Locator;
    readonly uIPlaintiffTypeDropdown: Locator;
    readonly uIFromCourtDateEdit: Locator;
    readonly uIToCourtDateEdit: Locator;
    readonly uICourtTypeEdit: Locator;
    readonly uIDispositionEdit: Locator;
    readonly uIDocketEdit: Locator;
    readonly uIHearingOfficeEdit: Locator;
    readonly uIApprovalStatusDropdown: Locator;
    readonly uIEthinicityDropDown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uISearchButton = page.locator("//span[contains(text(),'Search')]");
        this.uIRefreshButton = page.locator("//span[contains(text(),'Refresh')]");
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uICENoYearEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_nbrCENo_Year');
        this.uICENoNumberEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_nbrCENo_Number');
        this.uIClearButton = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_imgClear');
        this.uICETypeComboBox = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_cddCeType_DropDown');
        this.uICitationSearchResultGrid = page.locator('#grdSummons');
        this.uILastNameEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_txtLastName');
        this.uIFirstNameEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_txtFirstName');
        this.uIPrintIcon = page.locator("//img[@src='/KPIImages/ico/16_print.gif']");
        this.uIOfficerEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_lupOffPFID_CodeValue');
        this.uICallYearEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_nbrIncidentID_Year');
        this.uICallNumberEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_nbrIncidentID_Number');
        this.uIPremiseTypeDropDown = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_cddPremiseType_DropDown');
        this.uITracking = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_lupTracking_CodeValue');
        this.uIExcelButton = page.locator("//img[@src='/KPIImages/ico/16_excel.gif']");
        this.uIToDateEdit = page.locator("//input[@id='tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_dtcToDate_Date_KPIDttmCtrl']");
        this.uIRaceDropDown = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_cddRace_DropDown');
        this.uIResidentDropDown = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_cddResident_DropDown');
        this.uIEventDropDown = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_cddEvent_DropDown');
        this.uIActionPeriodEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_dtcFromDate_KPIDttmCtrl');
        this.uIToEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_dtcToDate_KPIDttmCtrl');
        this.uINextButton = page.locator('#grdSummons_ctl00_lnkbtnNext');
        this.uIMiddleNameEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_txtMiddleName');
        this.uISoundAlikeCheckbox = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_chkSound');
        this.uICitationLocationDropdown = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_adrAtLoc_CddLocationType');
        this.uIStreetOneEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_adrAtLoc_TxtStreetName1');
        this.uICitationNoEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_txtCitNbr');
        this.uIChargeEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_lupCharge_CodeValue');
        this.uINIBRSEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_lupNibrs_CodeValue');
        this.uIPlateEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_txtPlateNbr');
        this.uIStateDropdown = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_cddState_DropDown');
        this.uIMakeEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_lupmake_CodeValue');
        this.uIModelEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_lupmodel_CodeValue');
        this.uITicketVoidedCheckBox = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_chkTicketVoided');
        this.uIAuthorizedByEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_lupAuthorizedBy_CodeValue');
        this.uIPlaintiffTypeDropdown = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_cddPlaintiffType_DropDown');
        this.uIFromCourtDateEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_dtCourtdate_KPIDttmCtrl');
        this.uIToCourtDateEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_dtcourtToDate_KPIDttmCtrl');
        this.uICourtTypeEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_lupCourttype_CodeValue');
        this.uIDispositionEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_lupDisposition_CodeValue');
        this.uIDocketEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_txtDocketNbr');
        this.uIHearingOfficeEdit = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_txtHearingOffice');
        this.uIApprovalStatusDropdown = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_lstApprovalStatus');
        this.uIEthinicityDropDown = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_cddEthinicity_DropDown');
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async enterCENumberAtCENo(): Promise<void> {
        const ceNo = BaseData.getTestValue('CENo');
        await this.uICENoYearEdit.fill(ceNo.substring(0, 2));
        await this.uICENoNumberEdit.fill(ceNo.substring(3));
        await this.uICENoNumberEdit.press('Tab');
    }

    async enterCENumberAtCENoValue(ceNo: string): Promise<void> {
        await this.uICENoYearEdit.fill(ceNo.substring(0, 2));
        await this.uICENoNumberEdit.fill(ceNo.substring(3));
        await this.uICENoNumberEdit.press('Tab');
    }

    async selectAtCitationNo(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICitationSearchResultGrid, BaseData.getTestValue('CitationNo'));
    }

    async selectCENoInGrid(ceNo: string): Promise<void> {
        await this.grid.selectRowByCellText(this.uICitationSearchResultGrid, ceNo);
    }

    async verifyAtCitationNo(rowIndex: number): Promise<void> {
        const cellText = await this.grid.getGridCellInnerText(this.uICitationSearchResultGrid, 'Citation#', rowIndex);
        expect(cellText).toBe(BaseData.getTestValue('CitationNo'));
    }
}

// =============================================================================
// CITATION ENTRY PAGE
// =============================================================================
export class CitationEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uISelectedCheckbox: Locator;
    readonly uICENoEdit: Locator;
    readonly uICETypeComboBox: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIDefendantTypeComboBox: Locator;
    readonly uICitationNumberEdit: Locator;
    readonly uIOverRiteNumberEdit: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameTypeIDEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uINameInfoButton: Locator;
    readonly uIWarrantIconButton: Locator;
    readonly uIAddressEdit: Locator;
    readonly uICopyButton: Locator;
    readonly uIAddressVerifyCheckBox: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIViolationsTab: Locator;
    readonly uICourtTab: Locator;
    readonly uIPaymentsTab: Locator;
    readonly uILicenseTab: Locator;
    readonly uIVehicleTab: Locator;
    readonly uIOffenseTab: Locator;
    readonly uIPlaintiffTab: Locator;
    readonly uIOfficerTab: Locator;
    readonly uINarrativeTab: Locator;
    readonly uIAttachmentTab: Locator;
    readonly uICommentsTab: Locator;
    readonly uIMapTab: Locator;
    readonly uIApprovalTab: Locator;
    readonly uIWitnessTab: Locator;
    readonly uIApprovalStatusTextView: Locator;
    readonly uISavePrintButton: Locator;
    readonly uICEYearEdit: Locator;
    readonly uICallYearEdit: Locator;
    readonly uICallNoEdit: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNoEdit: Locator;
    readonly uINameIdlbl: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uICityEdit: Locator;
    readonly uIStateDropdown: Locator;
    readonly uICaseInfoIcon: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uICEType: Locator;
    readonly uICallInfoIcon: Locator;
    readonly uINameResetButton: Locator;
    readonly uIAddressInfoIcon: Locator;
    readonly uIZipCodeEdit: Locator;
    readonly uICountyCodeEdit: Locator;
    readonly uICountyDescriptionEdit: Locator;
    readonly uICountyEdit: Locator;
    readonly uILocationVerifyCheckBox: Locator;
    readonly uICSZCountyEdit: Locator;
    readonly uICountyComboBox: Locator;
    readonly uIRaceDropDown: Locator;
    readonly uIResidentDropDown: Locator;
    readonly uIServedButton: Locator;
    readonly uIDispatchEnvironmentICon: Locator;
    readonly uIQAFormsTab: Locator;
    readonly uISaveAndAddNew: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uISelectedCheckbox = page.locator('#chkRptSelect');
        this.uICENoEdit = page.locator('#nbrCeID_Number');
        this.uICETypeComboBox = page.locator('#cddCeType_DropDown');
        this.uIDateEdit = page.locator('#dttmCeDttm_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id = 'dttmCeDttm_Time']//input");
        this.uIDefendantTypeComboBox = page.locator('#cddDefType_DropDown');
        this.uICitationNumberEdit = page.locator('#txtCitNbr');
        this.uIOverRiteNumberEdit = page.locator('#txtOverRite');
        this.uINameTypeEdit = page.locator('#nNameID_NameType');
        this.uINameTypeIDEdit = page.locator('#nNameID_NameTypeID');
        this.uILastNameEdit = page.locator('#nNameID_LastName');
        this.uIFirstNameEdit = page.locator('#nNameID_FirstName');
        this.uINameInfoButton = page.locator('#nNameID_imgSrch');
        this.uIWarrantIconButton = page.locator('#nNameID_imgWant');
        this.uIAddressEdit = page.locator('#adrLocation_txtFrom');
        this.uICopyButton = page.locator('#cmdCopy');
        this.uIAddressVerifyCheckBox = page.locator('#adrLocation_chkVerify');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIViolationsTab = page.locator("//span[contains(text(),'Violations')]");
        this.uICourtTab = page.locator("//span[contains(text(),'Court')]");
        this.uIPaymentsTab = page.locator("//span[contains(text(),'Payments')]");
        this.uILicenseTab = page.locator("//span[contains(text(),'License')]");
        this.uIVehicleTab = page.locator("//span[contains(text(),'Vehicle')]");
        this.uIOffenseTab = page.locator("//span[contains(text(),'Offense')]");
        this.uIPlaintiffTab = page.locator("//span[contains(text(),'Plaintiff')]");
        this.uIOfficerTab = page.locator("//span[contains(text(),'Officer')]");
        this.uINarrativeTab = page.locator("//span[contains(text(),'Narrative')]");
        this.uIAttachmentTab = page.locator("//span[contains(text(),'Attachment')]");
        this.uICommentsTab = page.locator("//span[contains(text(),'Comments')]");
        this.uIMapTab = page.locator("//span[contains(text(),'Map')]");
        this.uIApprovalTab = page.locator("//span[contains(text(),'Approval')]");
        this.uIWitnessTab = page.locator("//span[contains(text(),'Witness')]");
        this.uIApprovalStatusTextView = page.locator('#lblApprovalStatus');
        this.uISavePrintButton = page.locator('#cmdSavePrint');
        this.uICEYearEdit = page.locator('#nbrCeID_Year');
        this.uICallYearEdit = page.locator('#nbrCallNo_Year');
        this.uICallNoEdit = page.locator('#nbrCallNo_Number');
        this.uICaseYearEdit = page.locator('#nbrIncidentID_Year');
        this.uICaseNoEdit = page.locator('#nbrIncidentID_Number');
        this.uINameIdlbl = page.locator('#lblNameID');
        this.uILeftSideStatusBar = page.locator("//td[contains(@class,'status')]//b");
        this.uICityEdit = page.locator('#custHeaderCSZ_City');
        this.uIStateDropdown = page.locator('#custHeaderCSZ_State_DropDown');
        this.uICaseInfoIcon = page.locator('#nbrIncidentID_imgBtn');
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uICEType = page.locator('#lblCeType');
        this.uICallInfoIcon = page.locator('#nbrCallNo_imgBtn');
        this.uINameResetButton = page.locator('#imgClearOper');
        this.uIAddressInfoIcon = page.locator('#adrLocation_cmdIncOnAddr');
        this.uIZipCodeEdit = page.locator('#custHeaderCSZ_Zip');
        this.uICountyCodeEdit = page.locator('#lupCounty_CodeValue');
        this.uICountyDescriptionEdit = page.locator('#lupCounty_CodeDescription');
        this.uICountyEdit = page.locator('#lupCounty_CodeValue');
        this.uILocationVerifyCheckBox = page.locator('#adrLocation_chkVerify');
        this.uICSZCountyEdit = page.locator('#custHeaderCSZ_City');
        this.uICountyComboBox = page.locator('#custHeaderCSZ_State_DropDown');
        this.uIRaceDropDown = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_cddRace_DropDown');
        this.uIResidentDropDown = page.locator('#tabSummonsSrch_tmpl0_UsrSummonSrchBasic1_cddResident_DropDown');
        this.uIServedButton = page.locator('#imgDotHistory1');
        this.uIDispatchEnvironmentICon = page.locator('#nbrCallNo_imgRcptBtn');
        this.uIQAFormsTab = page.locator("//span[contains(text(),'QA Forms')]");
        this.uISaveAndAddNew = page.locator('#cmdSaveNAddNew');
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async saveandCloseTheScreen(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        await this.popup.confirmYes();
    }

    async closeCitationEntryScreen(): Promise<void> {
        await this.page.close();
    }

    async enterDate(): Promise<void> {
        await this.uIDateEdit.press('Tab');
    }

    async enterTime(): Promise<void> {
        await this.uITimeEdit.click();
        await this.uITimeEdit.press('Tab');
    }

    async selectAtCEType(): Promise<void> {
        await this.uICETypeComboBox.selectOption({ label: BaseData.getTestValue('CEType') });
    }

    async selectCETypeAsTrafficViolation(): Promise<void> {
        await this.uICETypeComboBox.selectOption({ label: 'Traffic Violation' });
    }

    async selectDefendantTypeAsIndividaulAdult(): Promise<void> {
        try {
            await this.uIDefendantTypeComboBox.selectOption({ label: '1 - Individual - Adult' });
        } catch {
            await this.uIDefendantTypeComboBox.selectOption({ label: 'Individual - Adult' });
        }
        await this.uIDefendantTypeComboBox.press('Tab');
    }

    async enterAtNameID(): Promise<void> {
        const nameId = BaseData.getTestValue('NameID');
        await this.uINameTypeEdit.fill(nameId.substring(0, 1));
        await this.uINameTypeIDEdit.fill(nameId.substring(2));
        await this.uINameTypeIDEdit.press('Tab');
    }

    async switchToViolationsTab(): Promise<void> {
        await this.uIViolationsTab.click();
    }

    async switchToOffenseTab(): Promise<void> {
        await this.uIOffenseTab.click();
    }

    async switchToPlaintiffTab(): Promise<void> {
        await this.uIPlaintiffTab.click();
    }

    async switchToLicenseTab(): Promise<void> {
        await this.uILicenseTab.click();
    }

    async switchToVehicleTab(): Promise<void> {
        await this.uIVehicleTab.click();
    }

    async switchToOfficerTab(): Promise<void> {
        await this.uIOfficerTab.click();
    }

    async switchToCourtTab(): Promise<void> {
        await this.uICourtTab.click();
    }

    async switchToPaymentTab(): Promise<void> {
        await this.uIPaymentsTab.click();
    }

    async switchToNarrativeTab(): Promise<void> {
        await this.uINarrativeTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmTextMgrEx');
    }

    async switchToWitnessTab(): Promise<void> {
        await this.uIWitnessTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmWitness');
    }

    async switchToCommentsTab(): Promise<void> {
        await this.uICommentsTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmNameComments');
    }

    async switchToMapTab(): Promise<void> {
        await this.uIMapTab.click();
        new BrowserHelpers(this.page).switchToFrame('GHydrantMap');
    }

    async readCENo(): Promise<string> {
        const year = await this.uICEYearEdit.inputValue();
        const number = await this.uICENoEdit.inputValue();
        return `${year}-${number}`;
    }

    async readCitationNo(): Promise<string> {
        return await this.uICitationNumberEdit.inputValue();
    }
}

// =============================================================================
// CITATION VIOLATIONS TAB PAGE
// =============================================================================
export class CitationViolationsTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;

    readonly uILocationEdit: Locator;
    readonly uILocationCheckBox: Locator;
    readonly uILocationInfoIcon: Locator;
    readonly uIOfficerEdit: Locator;
    readonly uIVoilationOfficerEdit: Locator;
    readonly uIOfficerLookupButton: Locator;
    readonly uICitationNumberEdit: Locator;
    readonly uIServedMethodComboBox: Locator;
    readonly uIChargeEdit: Locator;
    readonly uIChargeLookupButton: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIViolationTabResultGrid: Locator;
    readonly uINIBRSComboBox: Locator;
    readonly uIChargeDescripton: Locator;
    readonly uIUpdateButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);

        this.uILocationEdit = page.locator('#tabCE_tmpl5_UsrNJViolations1_adrLocation_txtFrom');
        this.uILocationCheckBox = page.locator('#tabCE_tmpl6_UsrNJViolations1_adrLocation_chkVerify');
        this.uILocationInfoIcon = page.locator('#tabCE_tmpl5_UsrNJViolations1_adrLocation_cmdIncOnAddr');
        this.uIOfficerEdit = page.locator('#tabCE_tmpl5_UsrNJViolations1_lupOffPFID_CodeValue');
        this.uIVoilationOfficerEdit = page.locator('#tabCE_tmpl5_UsrNJViolations1_lupOffPFID_CodeValue');
        this.uIOfficerLookupButton = page.locator('#tabCE_tmpl6_UsrNJViolations1_lupOffPFID_imgBtn');
        this.uICitationNumberEdit = page.locator('#tabCE_tmpl5_UsrNJViolations1_txtCitNbr');
        this.uIServedMethodComboBox = page.locator('#tabCE_tmpl5_UsrNJViolations1_cddSrvMethod_DropDown');
        this.uIChargeEdit = page.locator('#tabCE_tmpl5_UsrNJViolations1_lupCharge_CodeValue');
        this.uIChargeLookupButton = page.locator('#tabCE_tmpl5_UsrNJViolations1_lupCharge_imgBtn');
        this.uIAddButton = page.locator('#tabCE_tmpl5_UsrNJViolations1_cmdAdd');
        this.uIClearButton = page.locator('#tabCE_tmpl5_UsrNJViolations1_cmdClear');
        this.uIViolationTabResultGrid = page.locator('#tabCE_tmpl5_UsrNJViolations1_grdViolations');
        this.uINIBRSComboBox = page.locator('#tabCE_tmpl5_UsrNJViolations1_cddNibrs');
        this.uIChargeDescripton = page.locator('#tabCE_tmpl5_UsrNJViolations1_lupCharge_CodeDescription');
        this.uIUpdateButton = page.locator('#tabCE_tmpl5_UsrNJViolations1_cmdAdd');
    }

    async enterAtLocation(): Promise<void> {
        await this.uILocationEdit.fill(BaseData.getTestValue('Location'));
        await this.uILocationEdit.press('Tab');
    }

    async enterAtCharge(): Promise<void> {
        await this.uIChargeEdit.fill(BaseData.getTestValue('Charge'));
        await this.uIChargeEdit.press('Tab');
    }

    async selectServedMethodasInPersion(): Promise<void> {
        await this.uIServedMethodComboBox.selectOption({ label: 'P-IN PERSON' });
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }
}

// =============================================================================
// CITATION OFFENSE TAB PAGE
// =============================================================================
export class CitationOffenseTabPage {
    readonly page: Page;

    readonly uIDescribeLocationEdit: Locator;
    readonly uIChargeEdit: Locator;
    readonly uIChargeDescription: Locator;
    readonly uIStatueValueSearchIcon: Locator;
    readonly uINIBRSDropDown: Locator;
    readonly uIMunicipalityCodeTextView: Locator;
    readonly uIUnregisterVehicleCheckBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIDescribeLocationEdit = page.locator('#tabCE_tmpl2_usrNJOffense1_adrLocation_txtFrom');
        this.uIChargeEdit = page.locator('#tabCE_tmpl2_usrNJOffense1_lupCharge_CodeValue');
        this.uIChargeDescription = page.locator('#tabCE_tmpl2_usrNJOffense1_lupCharge_CodeDescription');
        this.uIStatueValueSearchIcon = page.locator('#tabCE_tmpl2_usrNJOffense1_lupCharge_imgBtn');
        this.uINIBRSDropDown = page.locator('#tabCE_tmpl2_usrNJOffense1_cddNibrs1');
        this.uIMunicipalityCodeTextView = page.locator('#tabCE_tmpl2_usrNJOffense1_lupOf_CodeValue');
        this.uIUnregisterVehicleCheckBox = page.locator('#tabCE_tmpl2_usrNJOffense1_chkUnRegVeh');
    }

    async enterAtCharge(): Promise<void> {
        await this.uIChargeEdit.fill(BaseData.getTestValue('Charge'));
        await this.uIChargeEdit.press('Tab');
    }

    async enterAtDescribeLocation(): Promise<void> {
        await this.uIDescribeLocationEdit.fill(BaseData.getTestValue('DescribeLocation'));
        await this.uIDescribeLocationEdit.press('Tab');
    }
}

// =============================================================================
// CITATION COURT TAB PAGE
// =============================================================================
export class CitationCourtTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uICourtTabResultGrid: Locator;
    readonly uICourtDateEdit: Locator;
    readonly uICourtTimeEdit: Locator;
    readonly uIDispositionEdit: Locator;
    readonly uIOriginalChargeEdit: Locator;
    readonly uIBalanceTextView: Locator;
    readonly uIPenaltyAmountEdit: Locator;
    readonly uIFineForfeitureEdit: Locator;
    readonly uIUpdateButton: Locator;
    readonly uIDocketNoEdit: Locator;
    readonly uITicketVoidedCheckBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);

        this.uICourtTabResultGrid = page.locator('#tabCE_tmpl6_UsrNJCourt1_grdCEViolations');
        this.uICourtDateEdit = page.locator('#tabCE_tmpl6_UsrNJCourt1_dtcCourtDttm_Date_KPIDttmCtrl');
        this.uICourtTimeEdit = page.locator("//table[@id = 'tabCE_tmpl6_UsrNJCourt1_dtcCourtDttm_Time']//input");
        this.uIDispositionEdit = page.locator('#tabCE_tmpl6_UsrNJCourt1_lupDisposition_CodeValue');
        this.uIOriginalChargeEdit = page.locator('#tabCE_tmpl6_UsrNJCourt1_lupCharge_CodeValue');
        this.uIBalanceTextView = page.locator('#tabCE_tmpl6_UsrNJCourt1_curPaidAmt');
        this.uIPenaltyAmountEdit = page.locator('#tabCE_tmpl6_UsrNJCourt1_curCEPenaltyAmt');
        this.uIFineForfeitureEdit = page.locator('#tabCE_tmpl6_UsrNJCourt1_curCEFineAmt');
        this.uIUpdateButton = page.locator('#tabCE_tmpl6_UsrNJCourt1_cmdAdd');
        this.uIDocketNoEdit = page.locator('#tabCE_tmpl6_UsrNJCourt1_txtDocketNbr');
        this.uITicketVoidedCheckBox = page.locator('#tabCE_tmpl6_UsrNJCourt1_chkTicketVoided');
    }

    async enterCourtDateAsCurrentDate(): Promise<void> {
        await this.uICourtDateEdit.fill(DateHelpers.getCurrentDate());
        await this.uICourtDateEdit.press('Tab');
    }

    async enterAtDisposition(): Promise<void> {
        await this.uIDispositionEdit.fill(BaseData.getTestValue('Disposition'));
        await this.uIDispositionEdit.press('Tab');
    }

    async enterAtPenality(): Promise<void> {
        await this.uIPenaltyAmountEdit.fill(BaseData.getTestValue('Penalty'));
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }
}

// =============================================================================
// PARKING ENTRY PAGE
// =============================================================================
export class ParkingEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;

    readonly uIViolationDateEdit: Locator;
    readonly uIViolationTimeEdit: Locator;
    readonly uITicketNumberEdit: Locator;
    readonly uIDefendant1Tab: Locator;
    readonly uIDefendant2Tab: Locator;
    readonly uIMainTab: Locator;
    readonly uIFineNoticesTab: Locator;
    readonly uIHistoryTab: Locator;
    readonly uIPaymentsTab: Locator;
    readonly uICommentsTab: Locator;
    readonly uIStatusTextView: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uISaveAndAddNewButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIIssueDateEdit: Locator;
    readonly uIStatusbar: Locator;
    readonly uIParkingYear: Locator;
    readonly uIParkingNumber: Locator;
    readonly uIDeleteIconButton: Locator;
    readonly uICallYearEdit: Locator;
    readonly uICallNumberEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);

        this.uIViolationDateEdit = page.locator('#dtmViolation_Date_KPIDttmCtrl');
        this.uIViolationTimeEdit = page.locator("//table[@id = 'dtmViolation_Time']//input");
        this.uITicketNumberEdit = page.locator('#txtTicket');
        this.uIDefendant1Tab = page.locator("//span[contains(text(),'Defendant1')]");
        this.uIDefendant2Tab = page.locator("//span[contains(text(),'Defendant2')]");
        this.uIMainTab = page.locator("//span[contains(text(),'Main')]");
        this.uIFineNoticesTab = page.locator("//span[contains(text(),'Fine/Notices')]");
        this.uIHistoryTab = page.locator("//span[contains(text(),'History')]");
        this.uIPaymentsTab = page.locator("//span[contains(text(),'Payments')]");
        this.uICommentsTab = page.locator("//span[contains(text(),'Comments')]");
        this.uIStatusTextView = page.locator("//span[@id = 'lblStatus']");
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uISaveAndAddNewButton = page.locator('#cmdSaveNAddNew');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIIssueDateEdit = page.locator('#dtmIssueDate_KPIDttmCtrl');
        this.uIStatusbar = page.locator("//td[@class='statusBar']//b");
        this.uIParkingYear = page.locator('#nbrParking_Year');
        this.uIParkingNumber = page.locator('#nbrParking_Number');
        this.uIDeleteIconButton = page.locator('#cmdDelete');
        this.uICallYearEdit = page.locator('#numCallNo_Year');
        this.uICallNumberEdit = page.locator('#numCallNo_Number');
    }

    async enterAtTicketNo(): Promise<void> {
        await this.uITicketNumberEdit.fill(BaseData.getTestValue('TicketNo'));
        await this.uITicketNumberEdit.press('Tab');
    }

    async savetheScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async saveandClosetheScreen(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        await this.popup.confirmYes();
    }

    async switchToMainTab(): Promise<void> {
        await this.uIMainTab.click();
    }

    async switchToFineNoticesTab(): Promise<void> {
        await this.uIFineNoticesTab.click();
    }

    async switchToPaymentsTab(): Promise<void> {
        await this.uIPaymentsTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmParkPayment');
    }

    async switchToHistoryTab(): Promise<void> {
        await this.uIHistoryTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmParkingNotes');
    }

    async switchToCommentsTab(): Promise<void> {
        await this.uICommentsTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmNameComments');
    }

    async closeParkingEntryScreen(): Promise<void> {
        await this.page.close();
    }

    async getParkingID(): Promise<string> {
        const year = await this.uIParkingYear.inputValue();
        const number = await this.uIParkingNumber.inputValue();
        return `${year}-${number}`;
    }
}

// =============================================================================
// PARKING ENTRY MAIN TAB PAGE
// =============================================================================
export class ParkingEntryMainTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;

    readonly uICourtDateEdit: Locator;
    readonly uICourtTimeEdit: Locator;
    readonly uIOfficerEdit: Locator;
    readonly uIOfficerLookupButton: Locator;
    readonly uIPlateNumberEdit: Locator;
    readonly uIPlateStateComboBox: Locator;
    readonly uIViolationEdit: Locator;
    readonly uILocationEdit: Locator;
    readonly uIOnHoldCheckBox: Locator;
    readonly uIExpiresDateEdit: Locator;
    readonly uIOnHoldInfoIcon: Locator;
    readonly uIVehicleNumberEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);

        this.uICourtDateEdit = page.locator('#tabCE_tmpl0_UsrParkMain1_dtmCourtdate_Date_KPIDttmCtrl');
        this.uICourtTimeEdit = page.locator("//table[@id = 'tabCE_tmpl0_UsrParkMain1_dtmCourtdate_Time']//input");
        this.uIOfficerEdit = page.locator('#tabCE_tmpl0_UsrParkMain1_lupOffPFID_CodeValue');
        this.uIOfficerLookupButton = page.locator('#tabCE_tmpl0_UsrParkMain1_lupOffPFID_imgBtn');
        this.uIPlateNumberEdit = page.locator('#tabCE_tmpl0_UsrParkMain1_plcVehicle_PlateNumber');
        this.uIPlateStateComboBox = page.locator('#tabCE_tmpl0_UsrParkMain1_plcVehicle_KPIState');
        this.uIViolationEdit = page.locator('#tabCE_tmpl0_UsrParkMain1_lupCharge_CodeValue');
        this.uILocationEdit = page.locator('#tabCE_tmpl0_UsrParkMain1_adrLocation_txtFrom');
        this.uIOnHoldCheckBox = page.locator('#tabCE_tmpl0_UsrParkMain1_chkOnHold');
        this.uIExpiresDateEdit = page.locator('#tabCE_tmpl0_UsrParkMain1_dtmExpire_KPIDttmCtrl');
        this.uIOnHoldInfoIcon = page.locator('#tabCE_tmpl0_UsrParkMain1_imgHoldReason');
        this.uIVehicleNumberEdit = page.locator('#tabCE_tmpl0_UsrParkMain1_txtVehNbr');
    }

    async enterAtOfficer(): Promise<void> {
        await this.uIOfficerEdit.fill(BaseData.getTestValue('Officer'));
        await this.uIOfficerEdit.press('Tab');
    }

    async enterAtPlateNumber(): Promise<void> {
        await this.uIPlateNumberEdit.fill(BaseData.getTestValue('PlateNumber'));
    }

    async enterAtPlateState(): Promise<void> {
        await this.uIPlateStateComboBox.selectOption({ label: BaseData.getTestValue('PlateState') });
        await this.uIPlateStateComboBox.press('Tab');
    }

    async enterAtViolation(): Promise<void> {
        await this.uIViolationEdit.fill(BaseData.getTestValue('Violation'));
        await this.uIViolationEdit.press('Tab');
    }

    async enterAtLocation(): Promise<void> {
        await this.uILocationEdit.fill(BaseData.getTestValue('Location'));
        await this.uILocationEdit.press('Tab');
    }

    async clickOnHoldCheckBox(): Promise<void> {
        await this.uIOnHoldCheckBox.click();
    }

    async enterExpires1DayFutureFromCurrentDate(): Promise<void> {
        await this.uIExpiresDateEdit.clear();
        await this.uIExpiresDateEdit.fill(DateHelpers.getFutureDate(1));
        await this.uIExpiresDateEdit.press('Tab');
    }
}

// =============================================================================
// PARKING SEARCH PAGE
// =============================================================================
export class ParkingSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uISearchButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIBackButton: Locator;
    readonly uIParkingSearchTable: Locator;
    readonly uITicketEdit: Locator;
    readonly uIOfficerEdit: Locator;
    readonly uIPlateNumberEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);

        this.uISearchButton = page.locator("//span[contains(text(),'Search')]");
        this.uIRefreshButton = page.locator("//span[contains(text(),'Refresh')]");
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uIParkingSearchTable = page.locator('#grdParking');
        this.uITicketEdit = page.locator('#tabParkingSrch_tmpl0_UsrParkingSrchBasic1_txtTicketNbr');
        this.uIOfficerEdit = page.locator('#tabParkingSrch_tmpl0_UsrParkingSrchBasic1_lupOffPFID_CodeValue');
        this.uIPlateNumberEdit = page.locator('#tabParkingSrch_tmpl0_UsrParkingSrchBasic1_txtPlateNbr');
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
        await this.page.waitForTimeout(1000);
    }

    async enterAtTicketNo(): Promise<void> {
        await this.uITicketEdit.fill(BaseData.getTestValue('TicketNo'));
        await this.uITicketEdit.press('Tab');
    }

    async selectRowByAtTicketNo(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIParkingSearchTable, BaseData.getTestValue('TicketNo'));
    }
}

// =============================================================================
// PARKING PERMITS PAGE
// =============================================================================
export class ParkingPermitsPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIPlateNumberEdit: Locator;
    readonly uIPlateStateComboBox: Locator;
    readonly uIActionComboBox: Locator;
    readonly uIActionDateEdit: Locator;
    readonly uIPermitLocationEdit: Locator;
    readonly uIReasonComboBox: Locator;
    readonly uIValidExtendFromDateEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uINoOfDaysRequestedEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIPermitTypeComboBox: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIAddButton: Locator;
    readonly uIPermitTable: Locator;
    readonly uIPermitNo: Locator;
    readonly uILeftSideStatusBar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIPlateNumberEdit = page.locator('#plcVehID_PlateNumber');
        this.uIPlateStateComboBox = page.locator('#plcVehID_KPIState');
        this.uIActionComboBox = page.locator('#cddAction_DropDown');
        this.uIActionDateEdit = page.locator('#dttmActionDate_KPIDttmCtrl');
        this.uIPermitLocationEdit = page.locator('#adrPermitAddress_txtFrom');
        this.uIReasonComboBox = page.locator('#cddReason_DropDown');
        this.uIValidExtendFromDateEdit = page.locator('#dttmValidfrm_KPIDttmCtrl');
        this.uIToDateEdit = page.locator('#dttmValidto_KPIDttmCtrl');
        this.uINoOfDaysRequestedEdit = page.locator('#txtExtensionsday');
        this.uILastNameEdit = page.locator('#nIssueToNameID_LastName');
        this.uIFirstNameEdit = page.locator('#nIssueToNameID_FirstName');
        this.uIPermitTypeComboBox = page.locator('#cddPermitType_DropDown');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uIResetButton = page.locator("//span[normalize-space()='Reset']");
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIPermitTable = page.locator('#grdPermits');
        this.uIPermitNo = page.locator('#txtPermitNo');
        this.uILeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
    }

    async enterAtPlateNo(): Promise<void> {
        await this.uIPlateNumberEdit.fill(BaseData.getTestValue('PlateNo'));
        await this.uIPlateNumberEdit.press('Tab');
        await this.uIPlateStateComboBox.press('Tab');
    }

    async selectActionAsPermit(): Promise<void> {
        await this.uIActionComboBox.selectOption({ label: 'Permit' });
    }

    async enterAtPermitLocation(): Promise<void> {
        await this.uIPermitLocationEdit.fill(BaseData.getTestValue('PermitLocation'));
        await this.uIPermitLocationEdit.press('Tab');
    }

    async selectAtReason(): Promise<void> {
        await this.uIReasonComboBox.selectOption({ label: BaseData.getTestValue('Reason') });
    }

    async enterToDateAsCurrentDate(): Promise<void> {
        await this.uIToDateEdit.fill(DateHelpers.getCurrentDate());
        await this.uIToDateEdit.press('Tab');
    }

    async enterAtLastName(): Promise<void> {
        await this.uILastNameEdit.fill(BaseData.getTestValue('LastName'));
        await this.uILastNameEdit.press('Tab');
    }

    async enterAtFirstName(): Promise<void> {
        await this.uIFirstNameEdit.fill(BaseData.getTestValue('FirstName'));
        await this.uIFirstNameEdit.press('Tab');
    }

    async selectAtPermitType(): Promise<void> {
        await this.uIPermitTypeComboBox.selectOption({ label: BaseData.getTestValue('PermitType') });
        await this.uIPermitTypeComboBox.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }
}

// =============================================================================
// PARKING PERMITS SEARCH PAGE
// =============================================================================
export class ParkingPermitsSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uIPlateEdit: Locator;
    readonly uIStateComboBox: Locator;
    readonly uIPermitYearEdit: Locator;
    readonly uIPermitNuumberEdit: Locator;
    readonly uISearchButton: Locator;
    readonly uIParkingPermitSearchTable: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIBackButton: Locator;
    readonly uIResetButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);

        this.uIPlateEdit = page.locator('#txtPlateNbr');
        this.uIStateComboBox = page.locator('#cddState_DropDown');
        this.uIPermitYearEdit = page.locator('#nbrPermits_Year');
        this.uIPermitNuumberEdit = page.locator('#nbrPermits_Number');
        this.uISearchButton = page.locator("//span[text()='Search']");
        this.uIParkingPermitSearchTable = page.locator('#grdParkingPermitSrch');
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uIResetButton = page.locator("//span[text()='Reset']");
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async enterAtPlateNo(jsonIndex?: number): Promise<void> {
        const key = jsonIndex !== undefined ? `PlateNo${jsonIndex}` : 'PlateNo';
        await this.uIPlateEdit.fill(BaseData.getTestValue(key));
    }

    async selectAtState(): Promise<void> {
        await this.uIStateComboBox.selectOption({ label: BaseData.getTestValue('State') });
    }
}

// =============================================================================
// DEER CRASH PAGE
// =============================================================================
export class DeerCrashPage {
    readonly page: Page;
    readonly popup: PopupHelpers;

    readonly uIReportedLocationEdit: Locator;
    readonly uIDotNumberEdit: Locator;
    readonly uIOfficerEdit: Locator;
    readonly uIOfficerLookupButton: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIDriverTab: Locator;
    readonly uIAccidentTab: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uINarrativeTab: Locator;
    readonly uIAttachmentTab: Locator;
    readonly uIMapTab: Locator;
    readonly uITracsRefYearEdit: Locator;
    readonly uITracsRefNumberEdit: Locator;
    readonly uIDeleteButton: Locator;
    readonly uICallYearEdit: Locator;
    readonly uICallNumberEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);

        this.uIReportedLocationEdit = page.locator('#adrAtLoc_txtFrom');
        this.uIDotNumberEdit = page.locator('#txtDotNo');
        this.uIOfficerEdit = page.locator('#lupOffPFID_CodeValue');
        this.uIOfficerLookupButton = page.locator('#lupOffPFID_imgBtn');
        this.uIDateEdit = page.locator('#dttmAcd_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id = 'dttmAcd_Time']//input");
        this.uIDriverTab = page.locator("//span[contains(text(),'Driver')]");
        this.uIAccidentTab = page.locator("//span[(text()='Accident')]");
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uINarrativeTab = page.locator("//span[contains(text(),'Narrative')]");
        this.uIAttachmentTab = page.locator("//span[contains(text(),'Attachment')]");
        this.uIMapTab = page.locator("//span[contains(text(),'Map')]");
        this.uITracsRefYearEdit = page.locator('#nbrTraCS_Year');
        this.uITracsRefNumberEdit = page.locator('#nbrTraCS_Number');
        this.uIDeleteButton = page.locator('#cmdDelete');
        this.uICallYearEdit = page.locator('#nbrCallNo_Year');
        this.uICallNumberEdit = page.locator('#nbrCallNo_Number');
    }

    async enterAtReportedLocation(): Promise<void> {
        await this.uIReportedLocationEdit.fill(BaseData.getTestValue('ReportedLocation'));
        await this.uIReportedLocationEdit.press('Tab');
    }

    async enterAtOfficer(): Promise<void> {
        await this.uIOfficerEdit.fill(BaseData.getTestValue('Officer'));
        await this.uIOfficerEdit.press('Tab');
    }

    async tabDateAndTime(): Promise<void> {
        await this.uIDateEdit.click();
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.click();
        await this.uITimeEdit.press('Tab');
    }

    async clickAccidentTab(): Promise<void> {
        await this.uIAccidentTab.click();
    }

    async clickDriverTab(): Promise<void> {
        await this.uIDriverTab.click();
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async getTraCSRefNo(): Promise<string> {
        const year = await this.uITracsRefYearEdit.inputValue();
        const num = await this.uITracsRefNumberEdit.inputValue();
        return `${year}-${num}`;
    }
}

// =============================================================================
// COURT SEARCH & ENTRY PAGES
// =============================================================================
export class CourtSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uIAddNewButton: Locator;
    readonly uISearchButton: Locator;
    readonly uICodeValueEdit: Locator;
    readonly uICourtSearchGrid: Locator;
    readonly uICourtTypeDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);

        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uISearchButton = page.locator('#cmdSearch');
        this.uICodeValueEdit = page.locator('#txtCodeValue');
        this.uICourtSearchGrid = page.locator('#grdCourtSrch');
        this.uICourtTypeDropdown = page.locator('#cddCourtType_DropDown');
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async enterAtCodeValue(jsonIndex: number): Promise<void> {
        await this.uICodeValueEdit.fill(BaseData.getTestValue('CodeValue' + jsonIndex));
    }

    async selectAtCodeValueFromTheGrid(jsonIndex: number): Promise<void> {
        await this.grid.selectRowByCellText(this.uICourtSearchGrid, BaseData.getTestValue('CodeValue' + jsonIndex));
    }
}

export class CourtEntryPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uICustomText: Locator;
    readonly uICourtTypeDropdown: Locator;
    readonly uICodeValueEdit: Locator;
    readonly uICodeDescriptionEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uICourtEntryGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);

        this.uICustomText = page.locator('#lblXref2');
        this.uICourtTypeDropdown = page.locator('#cddCourtType_DropDown');
        this.uICodeValueEdit = page.locator('#txtCodeValue');
        this.uICodeDescriptionEdit = page.locator('#txtCodeDesc');
        this.uIAddButton = page.locator('#imgAdd');
        this.uICourtEntryGrid = page.locator('#grdCourtCode');
    }

    async selectAtCourtType(jsonIndex: number): Promise<void> {
        await this.uICourtTypeDropdown.selectOption({ label: BaseData.getTestValue('CourtType' + jsonIndex) });
    }

    async enterAtCodeValue(jsonIndex: number): Promise<void> {
        await this.uICodeValueEdit.fill(BaseData.getTestValue('CodeValue' + jsonIndex));
    }

    async enterAtCodeDescription(jsonIndex: number): Promise<void> {
        await this.uICodeDescriptionEdit.fill(BaseData.getTestValue('CodeDescription' + jsonIndex));
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async closeTheScreen(): Promise<void> {
        await this.page.close();
    }
}

// =============================================================================
// CITATION ARREST & REMARKS
// =============================================================================
export class CitationArrestPage {
    readonly page: Page;
    readonly popup: PopupHelpers;

    readonly uISaveButton: Locator;
    readonly uISaveCloseButton: Locator;
    readonly uIResetButton: Locator;
    readonly uINIBRSCodeEdit: Locator;
    readonly uINIBRSDescriptionEdit: Locator;
    readonly uIArrestDateEdit: Locator;
    readonly uIArmedCombobox: Locator;
    readonly uITypeOfArrestCombobox: Locator;
    readonly uIStatusBar: Locator;
    readonly uIJuvenileStatusDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);

        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveCloseButton = page.locator('#cmdSaveNClose');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uINIBRSCodeEdit = page.locator('#pac-lupNIBRS_CodeValue');
        this.uINIBRSDescriptionEdit = page.locator('#lupNIBRS_CodeDescription');
        this.uIArrestDateEdit = page.locator('#ArrestDttm_KPIDttmCtrl');
        this.uIArmedCombobox = page.locator('#cddArmed1_DropDown');
        this.uITypeOfArrestCombobox = page.locator('#cddArrestType_DropDown');
        this.uIStatusBar = page.locator("//td[@class='statusBar']//b");
        this.uIJuvenileStatusDropdown = page.locator('#cddJuvStatus_DropDown');
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async saveCloseScreen(): Promise<void> {
        await this.uISaveCloseButton.click();
        await this.popup.confirmYes();
    }

    async close(): Promise<void> {
        await this.page.close();
    }
}

export class RemarksPage {
    readonly page: Page;
    readonly uIReceiptReference: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIReceiptReference = page.locator("//div[@id='htmlNotesInfo']//b");
    }

    async verifyAtReceiptReference(jsonIndex: number): Promise<void> {
        const text = await this.uIReceiptReference.innerText();
        expect(text).toContain(BaseData.getTestValue('ReceiptReference' + jsonIndex));
    }
}
