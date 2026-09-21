// @ts-nocheck
import { Page, Locator, expect } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { AcknowledgePage, ConfirmPage, PopupPage } from '../popup.page';
import { BaseData } from '../../data/base-data';
import { GridHelpers } from '../../helpers/grid-helpers';
import { ElementHelpers } from '../../helpers/element-helpers';
import { PopupHelpers } from '../../helpers/popup-helpers';
import { DateHelpers, RandomHelpers } from '../../helpers';

export class RecordsPage {
    readonly page: Page;
    private browserHelpers: BrowserHelpers;

    constructor(page: Page) {
        this.page = page;
        this.browserHelpers = new BrowserHelpers(page);
    }

    async Reset(): Promise<void> {
        // State reset managed by framework
    }

    async switchToCallSearchHelpWindow(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Call Search');
    }

    async switchToCaseUpdate(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Case Update');
    }

    async switchToCallSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Records/frmCallSrch');
    }

    async switchToCaseSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Records/frmCBESrch');
    }

    async switchToCallEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Call Entry');
    }

    async switchToRepositoryEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Repository Entry');
    }

    async switchToReportManager(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Report Manager');
    }

    async switchToReportStatus(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Report Status');
    }

    async switchToReportSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Records/frmRptStatus');
    }

    async switchToACD(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('ACD');
    }

    async switchToFTC(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('FTC');
    }

    async switchToCaseNames(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Case Names');
    }

    async switchToCaseVehicle(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Case Vehicle');
    }

    async switchToNameVictim(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmVictim.aspx?');
    }

    async switchToVictimOffender(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmNameVictim.aspx?');
    }

    async switchToWalkInEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Walk-In Entry');
    }

    async switchToDomesticViolence(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmNameDV_Id');
    }

    async switchToRecordsRequestSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Records/frmORRequestSrch');
    }

    async switchToOpenRecordsRequestEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Records Request Entry');
    }

    async switchToUseOfForceReportEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Use of Force - Report Entry - 2545');
    }

    async switchToRedact(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmRedact');
    }

    async switchToLeoka(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmNameLEOKA_Id');
    }

    async switchToQuestionnarie(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Questionnaire');
    }

    async switchToQuestionDataEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Question Data Entry');
    }

    async switchToIBRSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('UCR/frmNIBRSReSubSrch');
    }

    async switchToUnitHistorySearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Unit History Search');
    }

    async switchToDVEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('DV Entry');
    }

    async switchToDVSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Records/frmDvSearch');
    }

    async switchToUOFEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('UOF Entry');
    }

    async switchToUOFSearchHelpWindow(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Use of Force - Report Entry - 2545');
    }

    async switchToCaseSuspect(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Case Suspect');
    }

    async switchToCaseUnits(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Case Units');
    }

    async switchToUOFSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Records/frmUOFSrch.aspx');
    }

    async switchToUCR(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('UCR/frmSubmitData');
    }

    async switchToAccessListControl(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Access List Control');
    }

    async switchToReportsStatusScreenTab(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Records/frmRptStatusINQ');
    }

    async switchToBoloScreenTab(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Records/frmBolo');
    }

    async switchToComplaintEntryScreenTab(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Complaint Entry');
    }

    async switchToPursuitCaseEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Pursuit - Case Entry');
    }

    async switchToIBRSubmission(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('UCR/frmNIBRSSrch');
    }

    async switchToIBRSubmissionEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('IBR Submission Entry');
    }

    async switchToReportRelatedPF(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('frmRptRelatedToPF');
    }

    async switchToProfileSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Records/frmProfileSrch');
    }

    async switchToSuspectSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmSuspectSrch');
    }

    async switchToVehicleProfileEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Vehicle Profile');
    }

    async switchToViewTextFileEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmViewTxtFile');
    }

    async switchToUCRReportPDF(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('KPITemp');
    }

    async switchToOpenRecordsRequestHelpWindow(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Open Records Request');
    }

    async switchToCaseSearchWindow(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Case Search');
    }

    async switchToNIBRSCheckError(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmErrorCheck.aspx');
    }

    async switchToUOFDetail(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('PnxRptSvr/frmPnxSQLRpt');
    }

    async switchToReportStatusNarrative(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmTextStmtRpt.aspx');
    }

    async switchToUCRlogsWindow(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('UCRLog');
    }

    async switchToReportStatusForRedact(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmIncidentRptOpen.aspx?IsExpunge');
    }

    async switchToDrugOverDoseSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmDORSearch.aspx?');
    }

    async switchToDrugOverDoseEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Drug Overdose Entry');
    }

    async switchToReportStatusFoViewRedactReports(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmViewRedact.aspx?');
    }

    async switchToRecordsExpungement(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Expungement');
    }

    async switchToDirectReportEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmInvestEntry.aspx?');
    }

    async switchToReportStatusNarrativewindow(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Home/frmTextMgrEx');
    }

    async switchToAtRiskPersonEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('At Risk Person Entry');
    }

    async switchToAtRiskPersonSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Records/frmARPSrch');
    }

    async switchToDVSearchPopup(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('DV Search');
    }

    async switchToAtRiskEffortsEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmARPManageNotes');
    }

    async switchToDrugOverdoseSearchPopupScreen(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Drug Overdose Search');
    }

    async verifyDVEntryWindowExist(): Promise<void> {
        const isExist = await this.browserHelpers.windowExistsByTitle('DV Entry');
        expect(isExist).toBeTruthy();
    }

    async switchToPermitSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Billing/frmPermitsSrch.aspx');
    }

    async switchToPermitEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Permit Entry');
    }

    async switchToNCICQuery(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('NCIC Query');
    }

    async switchToNCICSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('NCIC Search');
    }

    async switchToDAPackage(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('DA Package');
    }

    async switchToNCICSearchTab(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmNCICQrySrch.aspx');
    }

    async switchToPoliceForceUsed(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle(' Police Force Used');
    }

    async switchToPursuitSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Records/frmPursuitSrch.aspx');
    }

    async switchToReportComments(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('frmRptComments');
    }

    async switchToCaseTask(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Case Task');
    }

    async switchToCallTask(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Ca11 Task');
    }

    async switchToEvaluationCallReceipt(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Evaluation Call Receipt');
    }

    async switchToWeather(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmCBEWeather.aspx');
    }

    async switchToCMCaseNames(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('PnxRptSvr/frmPnxSQLRpt');
    }
}

export class CallEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uICallYearEdit: Locator;
    readonly uICallNumberEdit: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseInfoIcon: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uIInitialCFSEdit: Locator;
    readonly uIReceivedSourceSearchButton: Locator;
    readonly uIReceivedSourceEdit: Locator;
    readonly uIReportedLocationEdit: Locator;
    readonly uIReportedLocationLabel: Locator;
    readonly uIReportedLocationVerifyCheckbox: Locator;
    readonly uIGenerateCheckbox: Locator;
    readonly uIReportedDateEdit: Locator;
    readonly uIReportedTimeEdit: Locator;
    readonly uIStackedDateEdit: Locator;
    readonly uIStackedTimeEdit: Locator;
    readonly uIFinishedDateEdit: Locator;
    readonly uIFinishedTimeEdit: Locator;
    readonly uICallCompletionLocationEdit: Locator;
    readonly uICallCompletionLocationVerifyCheckbox: Locator;
    readonly uICADCFSEdit: Locator;
    readonly uICADDispositionEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveCloseButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIEditTab: Locator;
    readonly uIMainTab: Locator;
    readonly uINamesTab: Locator;
    readonly uINotesTab: Locator;
    readonly uISuspectsTab: Locator;
    readonly uIUnitsTab: Locator;
    readonly uICallSummaryTab: Locator;
    readonly uIVehicleTab: Locator;
    readonly uIAttachmentsTab: Locator;
    readonly uIVideoTab: Locator;
    readonly uIDispositionTab: Locator;
    readonly uIMapTab: Locator;
    readonly uIQAFormsTab: Locator;
    readonly uIApprovalTab: Locator;
    readonly uIALCIcon: Locator;
    readonly uIRelatedCallsTab: Locator;
    readonly uIInitialCFSDescriptionEdit: Locator;
    readonly uIPrimeUnitEdit: Locator;
    readonly uICitationIcon: Locator;
    readonly uICADDispositionLookUpIcon: Locator;
    readonly uIRequestTab: Locator;
    readonly uIANCATab: Locator;
    readonly uILocationInfoIcon: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uIEventLegacyComboBox: Locator;
    readonly uIEventLookupIcon: Locator;
    readonly uIEventDescEdit: Locator;
    readonly uIEventInfoIcon: Locator;
    readonly uICrashIcon: Locator;
    readonly uIK9ReportIcon: Locator;
    readonly uIReportedLocationInfoIcon: Locator;
    readonly uICustomizeIcon: Locator;
    readonly uIManageQAForm: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uITaskTab: Locator;
    readonly uISaveAndAddNewButton: Locator;
    readonly uIDispatchEnvironmentIcon: Locator;
    readonly uIManageCustomFields: Locator;
    readonly uICSZCity: Locator;
    readonly uICSZZipCode: Locator;
    readonly uICallNoLabel: Locator;
    readonly uIPatrolAreaEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uICallYearEdit = page.locator('#nbrCallNumber_Year');
        this.uICallNumberEdit = page.locator('#nbrCallNumber_Number');
        this.uICaseYearEdit = page.locator('#nbrCaseNumber_Year');
        this.uICaseInfoIcon = page.locator('#nbrCaseNumber_imgBtn');
        this.uICaseNumberEdit = page.locator('#nbrCaseNumber_Number');
        this.uIInitialCFSEdit = page.locator('#lupInitialCFS_CodeValue');
        this.uIReceivedSourceSearchButton = page.locator('#cddRcvSource_imgBtn');
        this.uIReceivedSourceEdit = page.locator('#cddRcvSource_CodeValue');
        this.uIReportedLocationEdit = page.locator('#addrRprtdLoc_txtFrom');
        this.uIReportedLocationLabel = page.locator('#lblCommanName');
        this.uIReportedLocationVerifyCheckbox = page.locator('#addrRprtdLoc_chkVerify');
        this.uIGenerateCheckbox = page.locator('#chkGenrateCaseNbr');
        this.uIReportedDateEdit = page.locator('#dttmReported_Date_KPIDttmCtrl');
        this.uIReportedTimeEdit = page.locator("//table[@id = 'dttmReported_Time']//input[contains(@class,'textboxdatetime')]");
        this.uIStackedDateEdit = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_dttmStacked_Date_KPIDttmCtrl' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_dttmStacked_Date_KPIDttmCtrl']");
        this.uIStackedTimeEdit = page.locator("//table[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_dttmStacked_Time' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_dttmStacked_Time']//input");
        this.uIFinishedDateEdit = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_dttmFinished_Date_KPIDttmCtrl' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_dttmFinished_Date_KPIDttmCtrl']");
        this.uIFinishedTimeEdit = page.locator("//table[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_dttmFinished_Time' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_dttmFinished_Time']//input");
        this.uICallCompletionLocationEdit = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_addrCallCompletionLoc_txtFrom' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_addrCallCompletionLoc_txtFrom']");
        this.uICallCompletionLocationVerifyCheckbox = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_addrCallCompletionLoc_chkVerify' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_addrCallCompletionLoc_chkVerify']");
        this.uICADCFSEdit = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_lupCADCFS_CodeValue' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_lupCADCFS_CodeValue']");
        this.uICADDispositionEdit = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_lupCADDisposition_CodeValue' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_lupCADDisposition_CodeValue']");
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveCloseButton = page.locator('#cmdSaveNClose');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIEditTab = page.locator("//span[contains(text(),'Edit')]");
        this.uIMainTab = page.locator("//span[contains(text(),'Main')]");
        this.uINamesTab = page.locator("//span[contains(text(),'Names')]");
        this.uINotesTab = page.locator("//span[contains(text(),'Notes')]");
        this.uISuspectsTab = page.locator("//span[contains(text(),'Suspects')]");
        this.uIUnitsTab = page.locator("//span[contains(text(),'Units')]");
        this.uICallSummaryTab = page.locator("//span[contains(text(),'Call Summary')]");
        this.uIVehicleTab = page.locator("//span[contains(text(),'Vehicle')]");
        this.uIAttachmentsTab = page.locator("//span[contains(text(),'Attachments')]");
        this.uIVideoTab = page.locator("//span[contains(text(),'Video')]");
        this.uIDispositionTab = page.locator("//span[contains(text(),'Disposition')]");
        this.uIMapTab = page.locator("//span[contains(text(),'Map')]");
        this.uIQAFormsTab = page.locator("//span[contains(text(),'QA Forms')]");
        this.uIApprovalTab = page.locator("//span[contains(text(),'Approval')]");
        this.uIALCIcon = page.locator('#KPIAccessControl1');
        this.uIRelatedCallsTab = page.locator("//span[contains(text(),'Related Calls')]");
        this.uIInitialCFSDescriptionEdit = page.locator('#lupInitialCFS_CodeDescription');
        this.uIPrimeUnitEdit = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_lupPrimeUnit_CodeValue' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_lupPrimeUnit_CodeValue']");
        this.uICitationIcon = page.locator('#imgSummon');
        this.uICADDispositionLookUpIcon = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_lupCADDisposition_imgBtn' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_lupCADDisposition_imgBtn']");
        this.uIRequestTab = page.locator("//span[contains(text(),'Request')]");
        this.uIANCATab = page.locator("//span[contains(text(),'ANCA#')]");
        this.uILocationInfoIcon = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_addrCallCompletionLoc_cmdIncOnAddr' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_addrCallCompletionLoc_cmdIncOnAddr']");
        this.uILeftSideStatusBar = page.locator("//td[@class='statusBar']/b");
        this.uIEventLegacyComboBox = page.locator("//select[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_cddEvent_DropDown' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_cddEvent_DropDown']");
        this.uIEventLookupIcon = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_nbrActivityNo_imgBtn' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_nbrActivityNo_imgBtn']");
        this.uIEventDescEdit = page.locator("//span[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_lblEventDes' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_lblEventDes']");
        this.uIEventInfoIcon = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_nbrActivityNo_imgBtn' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_nbrActivityNo_imgBtn']");
        this.uICrashIcon = page.locator('#imgCrash');
        this.uIK9ReportIcon = page.locator('#imgK9Report');
        this.uIReportedLocationInfoIcon = page.locator('#addrRprtdLoc_cmdIncOnAddr');
        this.uICustomizeIcon = page.locator("//li[@title = 'Customize']");
        this.uIManageQAForm = page.locator("//span[contains(text(), 'Manage QA Form')]");
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uITaskTab = page.locator("//span[contains(text(),'Task')]");
        this.uISaveAndAddNewButton = page.locator('#cmdSaveNAddNew');
        this.uIDispatchEnvironmentIcon = page.locator('#nbrCaseNumber_imgRcptBtn');
        this.uIManageCustomFields = page.locator("//span[contains(text(), 'Manage Custom Fields')]");
        this.uICSZCity = page.locator('#custHeaderCSZ_City');
        this.uICSZZipCode = page.locator('#custHeaderCSZ_Zip');
        this.uICallNoLabel = page.locator('#lblCallNo');
        this.uIPatrolAreaEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCBEMain_txtPatrolArea');
    }

    async switchToVehicleTab(): Promise<void> {
        await this.uIVehicleTab.click();
        await this.page.waitForTimeout(1000);
        new BrowserHelpers(this.page).switchToFrame('frmVehicle');
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async uncheckAddressValidateCheckBox(): Promise<void> {
        if (await this.uIReportedLocationVerifyCheckbox.isChecked()) {
            await this.uIReportedLocationVerifyCheckbox.click();
        }
    }

    async clickAddressValidateCheckBox(): Promise<void> {
        if (!(await this.uIReportedLocationVerifyCheckbox.isChecked())) {
            await this.uIReportedLocationVerifyCheckbox.click();
        }
    }

    async enterInitialCFSAsCFS201(): Promise<void> {
        await this.uIInitialCFSEdit.fill('CFS201');
        await this.uIInitialCFSEdit.press('Tab');
    }

    async enterAtInitialCFS(): Promise<void> {
        await this.uIInitialCFSEdit.fill(BaseData.getPoliceModuleValue('InitialCFS'));
        await this.uIInitialCFSEdit.press('Tab');
    }

    async clickCaseInfoIcon(): Promise<void> {
        await this.uICaseInfoIcon.click();
    }

    async tabReceivedSource(): Promise<void> {
        await this.uIReceivedSourceEdit.click();
        await this.uIReceivedSourceEdit.press('Tab');
    }

    async enterAtReportedLocation(): Promise<void> {
        await this.uIReportedLocationEdit.fill(BaseData.getPoliceModuleValue('ReportedLocation'));
        await this.uIReportedLocationEdit.press('Tab');
        await this.uIReportedLocationVerifyCheckbox.press('Tab');
    }

    async enterReportedLocation(address: string): Promise<void> {
        await this.uIReportedLocationEdit.fill(address);
        await this.uIReportedLocationEdit.press('Tab');
        await this.uIReportedLocationVerifyCheckbox.press('Tab');
    }

    async verifyInactiveAddressAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(5097) This address is inactive');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyAcknowledgePremiseInactiveAddress(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(5095) Premise is inactive');
        await this.popup.acknowledgeOkButton.click();
    }

    async selectReceivedSource(): Promise<void> {
        await this.uIReceivedSourceSearchButton.click();
        const popupPage = new PopupPage(this.page);
        await popupPage.kPICodedLookup.randomKPIHelpSelect();
    }

    async selectReportedLocation(): Promise<void> {
        await this.uIReportedLocationEdit.fill('L');
        await this.uIReportedLocationVerifyCheckbox.press('Tab');
    }

    async enterAtCommonNameInReportedField(): Promise<void> {
        await this.uIReportedLocationEdit.fill(BaseData.getPoliceModuleValue('CommonName'));
        await this.uIReportedLocationVerifyCheckbox.press('Tab');
    }

    async reportedDate(): Promise<void> {
        await this.uIReportedDateEdit.click();
        await this.uIReportedDateEdit.press('Tab');
    }

    async reportedTime(): Promise<void> {
        await this.uIReportedTimeEdit.click();
        await this.uIReportedTimeEdit.press('Tab');
    }

    async stackedDate(): Promise<void> {
        await this.uIStackedDateEdit.click();
        await this.uIStackedDateEdit.press('Tab');
    }

    async stackedTime(): Promise<void> {
        await this.uIStackedTimeEdit.click();
        await this.uIStackedTimeEdit.press('Tab');
    }

    async finishedDate(): Promise<void> {
        await this.uIFinishedDateEdit.click();
        await this.uIFinishedDateEdit.press('Tab');
    }

    async finishedTime(): Promise<void> {
        await this.uIFinishedTimeEdit.click();
        await this.uIFinishedTimeEdit.press('Tab');
    }

    async callCompletionLocation(): Promise<void> {
        await this.uICallCompletionLocationEdit.click();
        await this.uICallCompletionLocationEdit.press('Tab');
        await this.uICallCompletionLocationVerifyCheckbox.press('Tab');
    }

    async verifyCallCompletionLocationAsReportedLocation(reportedLocation: string): Promise<void> {
        await expect(this.uICallCompletionLocationEdit).toHaveValue(reportedLocation);
    }

    async tabcallCompletionLocationVerify(): Promise<void> {
        await this.uICallCompletionLocationVerifyCheckbox.press('Tab');
    }

    async enterCADDispositionAsI(): Promise<void> {
        await this.uICADDispositionEdit.fill('I');
        await this.uICADDispositionEdit.press('Tab');
    }

    async enterAtCADDisposition(): Promise<void> {
        await this.uICADDispositionEdit.fill(BaseData.getPoliceModuleValue('CADDisposition'));
        await this.uICADDispositionEdit.press('Tab');
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verify1051UpdateDataExistsNotesTabAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1051) Updated data exists in the Notes tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async clickSaveCloseButton(): Promise<void> {
        await this.uISaveCloseButton.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForTimeout(1000);
        await this.popup.confirmYes();
    }

    async saveNClose(): Promise<void> {
        await this.uISaveCloseButton.click();
        await this.page.waitForTimeout(1000);
        await this.popup.confirmYes();
    }

    async clickPrintButton(): Promise<void> {
        await this.uIPrintButton.click();
    }

    async clickCitationIcon(): Promise<void> {
        await this.uICitationIcon.click();
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async getCallYear(): Promise<string> {
        return await this.uICallYearEdit.inputValue();
    }

    async getReportedLocation(): Promise<string> {
        return await this.uIReportedLocationEdit.inputValue();
    }

    async getCallNumber(): Promise<string> {
        return await this.uICallNumberEdit.inputValue();
    }

    async verificationCFS(): Promise<void> {
        await expect(this.uIInitialCFSEdit).toHaveValue(BaseData.getPoliceModuleValue('InitialCFS'));
    }

    async switchToAllTabs(): Promise<void> {
        await this.uINotesTab.click();
        await this.uIMainTab.click();
        await this.uINamesTab.click();
        await this.uISuspectsTab.click();
        await this.uIUnitsTab.click();
        await this.uIEditTab.click();
        await this.uICallSummaryTab.click();
        await this.uIVehicleTab.click();
        await this.uIAttachmentsTab.click();
        await this.uIDispositionTab.click();
        await this.uIMapTab.click();
    }

    async clickMainTab(): Promise<void> {
        await this.uIMainTab.click();
    }

    async swithchtoNotesTab(): Promise<void> {
        await this.uINotesTab.click();
        await this.page.waitForTimeout(1000);
        new BrowserHelpers(this.page).switchToFrame('frmCBEComments');
    }

    async swithchtoNamesTab(): Promise<void> {
        await this.uINamesTab.click();
        await this.page.waitForTimeout(1000);
        new BrowserHelpers(this.page).switchToFrame('frmCBENames');
    }

    async swithchtoCallSummaryTab(): Promise<void> {
        await this.uICallSummaryTab.click();
        await this.page.waitForTimeout(1000);
        new BrowserHelpers(this.page).switchToFrame('Home/frmTextMgr');
    }

    async clickALCIcon(): Promise<void> {
        await this.uIALCIcon.click();
    }

    async verifyCallAtActivityNo(): Promise<void> {
        const actNo = BaseData.getPoliceModuleValue('ActivityNo');
        await expect(this.uICallYearEdit).toHaveValue(actNo.substring(0, 2));
        await expect(this.uICallNumberEdit).toHaveValue(actNo.substring(3));
    }

    async verify1051UpdateDataExistsInVehicleTabAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1051) Updated data exists in the Vehicle Tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async tabReportedDateTime(): Promise<void> {
        await this.uIReportedDateEdit.press('Tab');
        await this.uIReportedTimeEdit.press('Tab');
    }

    async tabStackedDateTime(): Promise<void> {
        await this.uIStackedDateEdit.press('Tab');
        await this.uIStackedTimeEdit.press('Tab');
    }

    async tabFinishedDateTime(): Promise<void> {
        await this.uIFinishedDateEdit.press('Tab');
        await this.uIFinishedTimeEdit.press('Tab');
    }

    async clickEditTab(): Promise<void> {
        await this.uIEditTab.click();
    }

    async switchToUnitsTab(): Promise<void> {
        await this.uIUnitsTab.click();
        await this.page.waitForTimeout(1000);
        new BrowserHelpers(this.page).switchToFrame('frmCBEUnitHistory');
    }

    async switchToRelatedCallsTab(): Promise<void> {
        await this.uIRelatedCallsTab.click();
        await this.page.waitForTimeout(1000);
        new BrowserHelpers(this.page).switchToFrame('frmCBEACDCalls');
    }

    async getInitialCFS(): Promise<string> {
        const cfsCode = await this.uIInitialCFSEdit.inputValue();
        const cfsDesc = await this.uIInitialCFSDescriptionEdit.inputValue();
        return `${cfsCode}-${cfsDesc}`;
    }

    async verifyAtReportedLocation(): Promise<void> {
        await expect(this.uIReportedLocationEdit).toHaveValue(BaseData.getPoliceModuleValue('ReportedLocation'));
    }

    async enterAtReportedLocation1(): Promise<void> {
        await this.uIReportedLocationEdit.clear();
        await this.uIReportedLocationEdit.fill(BaseData.getPoliceModuleValue('ReportedLocation1'));
        await this.uIReportedLocationEdit.press('Tab');
        await this.uIReportedLocationVerifyCheckbox.press('Tab');
    }

    async enterAtReportedLocation2(): Promise<void> {
        await this.uIReportedLocationEdit.clear();
        await this.uIReportedLocationEdit.fill(BaseData.getPoliceModuleValue('ReportedLocation2'));
        await this.uIReportedLocationEdit.press('Tab');
        await this.uIReportedLocationVerifyCheckbox.press('Tab');
    }

    async verifyAtLocation(): Promise<void> {
        await expect(this.uICallCompletionLocationEdit).toHaveValue(BaseData.getPoliceModuleValue('Location'));
    }

    async enterAtLocation1(): Promise<void> {
        await this.uICallCompletionLocationEdit.clear();
        await this.uICallCompletionLocationEdit.fill(BaseData.getPoliceModuleValue('Location1'));
        await this.uICallCompletionLocationEdit.press('Tab');
        await this.uICallCompletionLocationVerifyCheckbox.press('Tab');
    }

    async enterAtLocation2(): Promise<void> {
        await this.uICallCompletionLocationEdit.clear();
        await this.uICallCompletionLocationEdit.fill(BaseData.getPoliceModuleValue('Location2'));
        await this.uICallCompletionLocationEdit.press('Tab');
        await this.uICallCompletionLocationVerifyCheckbox.press('Tab');
    }

    async switchToSuspectsTab(): Promise<void> {
        await this.uISuspectsTab.click();
        await this.page.waitForTimeout(1000);
        new BrowserHelpers(this.page).switchToFrame('frmCBESuspect');
    }

    async verifyAtCallNo(): Promise<void> {
        const callNo = BaseData.getPoliceModuleValue('CallNo');
        await expect(this.uICallYearEdit).toHaveValue(callNo.substring(0, 2));
        await expect(this.uICallNumberEdit).toHaveValue(callNo.substring(3));
    }

    async switchToMapTab(): Promise<void> {
        await this.uIMapTab.click();
        await this.page.waitForTimeout(1000);
        new BrowserHelpers(this.page).switchToFrame('GHydrantMap');
    }

    async swithchtoDispositionTab(): Promise<void> {
        await this.uIDispositionTab.click();
    }

    async enterReceivedSourceAs9(): Promise<void> {
        await this.uIReceivedSourceEdit.fill('9');
        await this.uIReceivedSourceEdit.press('Tab');
    }

    async enterAtCallCompletionLocation(): Promise<void> {
        await this.uICallCompletionLocationEdit.click();
        await this.uICallCompletionLocationEdit.clear();
        await this.uICallCompletionLocationEdit.fill(BaseData.getPoliceModuleValue('Location'));
        await this.uICallCompletionLocationVerifyCheckbox.press('Tab');
    }

    async verifyAtCallcompletionLocation(): Promise<void> {
        const val = await this.uICallCompletionLocationEdit.inputValue();
        expect(val).toContain(BaseData.getPoliceModuleValue('Location'));
    }

    async clickGenerateCheckbox(): Promise<void> {
        await this.uIGenerateCheckbox.click();
    }

    async switchToAttachmentTab(): Promise<void> {
        await this.uIAttachmentsTab.click();
        await this.page.waitForTimeout(1000);
        new BrowserHelpers(this.page).switchToFrame('frmTxtAttachMgrEx');
    }

    async switchToRequestTab(): Promise<void> {
        await this.uIRequestTab.click();
        await this.page.waitForTimeout(1000);
        new BrowserHelpers(this.page).switchToFrame('frmORDetails');
    }

    async selectCADDispositionAsI(): Promise<void> {
        await this.uICADDispositionLookUpIcon.click();
        const popupPage = new PopupPage(this.page);
        await popupPage.kPICodedLookup.kPIHelpSelect('I');
    }

    async enterAtPrimeUnit(): Promise<void> {
        await this.uIPrimeUnitEdit.fill(BaseData.getPoliceModuleValue('PrimeUnit'));
        await this.uIPrimeUnitEdit.press('Tab');
    }

    async readCallNo(): Promise<string> {
        const year = await this.uICallYearEdit.inputValue();
        const call = await this.uICallNumberEdit.inputValue();
        return `${year}.${call}`;
    }

    async readCaseYear(): Promise<string> {
        return await this.uICaseYearEdit.inputValue();
    }

    async readCaseNo(): Promise<string> {
        const year = await this.uICaseYearEdit.inputValue();
        const num = await this.uICaseNumberEdit.inputValue();
        return `${year}-${num}`;
    }

    async verifyCallEntrySummaryTabColourAsBlack(): Promise<void> {
        const color = await this.uICallSummaryTab.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(0, 0, 0, 1)');
    }

    async verifyCallEntrySummaryTabColourAsBlue(): Promise<void> {
        this.elementHelpers.verifyTabColor(this.uICallSummaryTab, 'rgb(0, 0, 255)');
    }

    async verifyRequestTabIsNotDisplayed(): Promise<void> {
        await expect(this.uIRequestTab).not.toBeVisible();
    }

    async swithchtoANCATab(): Promise<void> {
        await this.uIANCATab.click();
        new BrowserHelpers(this.page).switchToFrame('frmAnimalSrch');
    }

    async verifyEditTabIsDisplayed(): Promise<void> {
        await expect(this.uIEditTab).toBeVisible();
    }

    async verifyCallSummaryTabIsDisplayed(): Promise<void> {
        await expect(this.uICallSummaryTab).toBeVisible();
    }

    async verifyDispositionTabIsDisplayed(): Promise<void> {
        await expect(this.uIDispositionTab).toBeVisible();
    }

    async clickCallCompletionLocationCheckBox(): Promise<void> {
        await this.uICallCompletionLocationVerifyCheckbox.click();
    }

    async verifyAtReportedLocation1(): Promise<void> {
        await expect(this.uIReportedLocationEdit).toHaveValue(BaseData.getPoliceModuleValue('ReportedLocation1'));
    }

    async clearLocation(): Promise<void> {
        await this.uICallCompletionLocationEdit.clear();
    }

    async verifyLocationInfoIconIsDisplayed(): Promise<void> {
        await expect(this.uILocationInfoIcon).toBeVisible();
    }

    async verifyReportedDateBindedToCurrentDate(): Promise<void> {
        const date = await this.uIReportedDateEdit.inputValue();
        expect(date).toBe(DateHelpers.getCurrentDate());
    }

    async verifyStackedDateBindedToCurrentDate(): Promise<void> {
        const date = await this.uIStackedDateEdit.inputValue();
        expect(date).toBe(DateHelpers.getCurrentDate());
    }

    async verifyFinishedDateBindedToCurrentDate(): Promise<void> {
        const date = await this.uIFinishedDateEdit.inputValue();
        expect(date).toBe(DateHelpers.getCurrentDate());
    }

    async verifyAdditionSuccessfulMessage(): Promise<void> {
        const msg = await this.uILeftSideStatusBar.innerText();
        expect(msg).toContain('1002 - Addition Successful');
    }

    async verifyUpdatedSuccessfulStatusMessage(): Promise<void> {
        const msg = await this.uILeftSideStatusBar.innerText();
        expect(msg).toContain('1003 - Update Successful');
    }

    async verifyAtCommonName(): Promise<void> {
        const text = await this.uIReportedLocationLabel.innerText();
        expect(text).toContain(BaseData.getPoliceModuleValue('CommonName'));
    }

    async verifyAtCommonName1(): Promise<void> {
        const text = await this.uIReportedLocationLabel.innerText();
        expect(text).toContain(BaseData.getPoliceModuleValue('CommonName1'));
    }

    async verifyDispositionTabEnabled(): Promise<void> {
        await expect(this.uIDispositionTab).toBeEnabled();
    }

    async verifyLegacyEventEnabled(): Promise<void> {
        await expect(this.uIEventLegacyComboBox).toBeEnabled();
    }

    async verifyLegacyEventVisible(): Promise<void> {
        await expect(this.uIEventLegacyComboBox).toBeVisible();
    }

    async clickEventLookupIcon(): Promise<void> {
        await this.uIEventLookupIcon.click();
    }

    async verify1051UpdateDataExistsRelatedCallsTabAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1051) Updated data exists in the Related Calls tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyAtEventDescription(): Promise<void> {
        await this.uIEventLookupIcon.click();
        const text = await this.uIEventDescEdit.innerText();
        expect(text).toContain(BaseData.getPoliceModuleValue('EventDescription'));
    }

    async clickEventBubbleIcon(): Promise<void> {
        await this.uIEventInfoIcon.click();
    }

    async verify1051UpdateDataExistsNamesTabAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1051) Updated data exists in the Names tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async verify1051UpdatedDataExistsAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1051) Updated data exists in the Tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async verify1051UpdateDataExistsVehicleTabAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1051) Updated data exists in the Vehicle tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyAttachmentTabIsNotBlueColor(): Promise<void> {
        const color = await this.uIAttachmentsTab.evaluate(el => getComputedStyle(el).color);
        expect(color).not.toContain('0, 0, 255');
    }

    async verifySuspectTabIsBlueColor(): Promise<void> {
        this.elementHelpers.verifyTabColor(this.uISuspectsTab, 'rgb(0, 0, 255)');
    }

    async verify1051UpdateDataExistsDispositionTabAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1051) Updated data exists in the Disposition tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async clickLocationInfoIcon(): Promise<void> {
        await this.uILocationInfoIcon.click();
    }

    async switchToApprovalTab(): Promise<void> {
        await this.uIApprovalTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmPnxGlobalApproval');
    }

    async verifyApprovalTabNotDisplayed(): Promise<void> {
        await expect(this.uIApprovalTab).not.toBeVisible();
    }

    async verifyApprovalTabIsDisplayed(): Promise<void> {
        await expect(this.uIApprovalTab).toBeVisible();
    }

    async verifyCallEntryEditTabColourAsBlue(): Promise<void> {
        this.elementHelpers.verifyTabColor(this.uIEditTab, 'rgb(0, 0, 255)');
    }

    async clickCrashIcon(): Promise<void> {
        await this.uICrashIcon.click();
    }

    async verifyCrashIconColorChange(): Promise<void> {
        const src = await this.uICrashIcon.getAttribute('src');
        expect(src).toContain('car_crash1.png');
    }

    async verifyCitationIconColorChange(): Promise<void> {
        const src = await this.uICitationIcon.getAttribute('src');
        expect(src).toContain('summons1.png');
    }

    async readReportedDate(): Promise<string> {
        return await this.uIReportedDateEdit.inputValue();
    }

    async readReportedTime(): Promise<string> {
        return await this.uIReportedTimeEdit.inputValue();
    }

    async verifyStackedDateAsCurrent(): Promise<void> {
        const date = await this.uIStackedDateEdit.inputValue();
        expect(date).toContain(DateHelpers.getCurrentDate());
    }

    async verifyAtCADDisposition(): Promise<void> {
        const dispo = await this.uICADDispositionEdit.inputValue();
        expect(dispo).toContain(BaseData.getPoliceModuleValue('CADDisposition'));
    }

    async verifyAtCADCFS(): Promise<void> {
        const cfs = await this.uICADCFSEdit.inputValue();
        expect(cfs).toContain(BaseData.getPoliceModuleValue('CADCFS'));
    }

    async verifyNameTabColorAsBlue(): Promise<void> {
        this.elementHelpers.verifyTabColor(this.uINamesTab, 'rgb(0, 0, 255)');
    }

    async verifyVehilceTabColorAsBlue(): Promise<void> {
        this.elementHelpers.verifyTabColor(this.uIVehicleTab, 'rgb(0, 0, 255)');
    }

    async readReportedLocation(): Promise<string> {
        return await this.uIReportedLocationEdit.inputValue();
    }

    async readInitialCFSDescription(): Promise<string> {
        return await this.uIInitialCFSDescriptionEdit.inputValue();
    }

    async verifyRelatedCallsTabColorAsBlue(): Promise<void> {
        this.elementHelpers.verifyTabColor(this.uIRelatedCallsTab, 'rgb(0, 0, 255)');
    }

    async verifySuspectsTabColorAsBlue(): Promise<void> {
        this.elementHelpers.verifyTabColor(this.uISuspectsTab, 'rgb(0, 0, 255)');
    }

    async verifyRequestTabAsBlueColor(): Promise<void> {
        this.elementHelpers.verifyTabColor(this.uIRequestTab, 'rgb(0, 0, 255)');
    }

    async verifyUnitsTabAsBlueColor(): Promise<void> {
        this.elementHelpers.verifyTabColor(this.uIUnitsTab, 'rgb(0, 0, 255)');
    }

    async verifyANCATabAsBlueColor(): Promise<void> {
        this.elementHelpers.verifyTabColor(this.uIANCATab, 'rgb(0, 0, 255)');
    }

    async verifyDispositionTabAsBlueColor(): Promise<void> {
        this.elementHelpers.verifyTabColor(this.uIDispositionTab, 'rgb(0, 0, 255)');
    }

    async verifyAtCaseNo(): Promise<void> {
        const caseNo = BaseData.getPoliceModuleValue('CaseNo');
        await expect(this.uICaseYearEdit).toHaveValue(caseNo.substring(0, 2));
        await expect(this.uICaseNumberEdit).toHaveValue(caseNo.substring(3));
    }

    async verifyAtInitialCFS(): Promise<void> {
        await expect(this.uIInitialCFSEdit).toHaveValue(BaseData.getPoliceModuleValue('InitialCFS'));
    }

    async verifyAddressValidateCheckBoxIsUnchecked(): Promise<void> {
        await expect(this.uIReportedLocationVerifyCheckbox).not.toBeChecked();
    }

    async verifyAddressValidateCheckBoxIschecked(): Promise<void> {
        await expect(this.uIReportedLocationVerifyCheckbox).toBeChecked();
    }

    async verifyCADDisposition(dispo: string): Promise<void> {
        const attr = await this.uICADDispositionEdit.inputValue();
        expect(attr).toContain(dispo);
    }

    async enterAtCADDisposition1(): Promise<void> {
        await this.uICADDispositionEdit.fill(BaseData.getPoliceModuleValue('CADDisposition1'));
        await this.uICADDispositionEdit.press('Tab');
    }

    async clickReportedLocationInfoIcon(): Promise<void> {
        await this.uIReportedLocationInfoIcon.click();
    }

    async enterAtCADDisposition2(): Promise<void> {
        await this.uICADDispositionEdit.fill(BaseData.getPoliceModuleValue('CADDisposition2'));
        await this.uICADDispositionEdit.press('Tab');
    }

    async verifyVehicleTabEnabled(): Promise<void> {
        await expect(this.uIVehicleTab).toBeEnabled();
    }

    async verifyLocationInRedColor(): Promise<void> {
        const color = await this.uIReportedLocationEdit.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(255, 0, 0, 1)');
    }

    async clickCustomizeIcon(): Promise<void> {
        await this.uICustomizeIcon.click();
    }

    async clickManageQAForms(): Promise<void> {
        await this.uIManageQAForm.click();
    }

    async verifyCallNoCreated(): Promise<void> {
        await expect(this.uICallNumberEdit).toBeVisible();
    }

    async verifyCaseNoIsEmpty(): Promise<void> {
        await expect(this.uICaseYearEdit).toHaveValue('');
        await expect(this.uICaseNumberEdit).toHaveValue('');
    }

    async verifyCaseInfoIconIsNotDisplayed(): Promise<void> {
        await expect(this.uICaseInfoIcon).not.toBeVisible();
    }

    async getCallNo(): Promise<string> {
        const year = await this.uICallYearEdit.inputValue();
        const call = await this.uICallNumberEdit.inputValue();
        return `${year}.${call}`;
    }

    async verifyNotesTabAsBlackColor(): Promise<void> {
        const color = await this.uINotesTab.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(0, 0, 0, 1)');
    }

    async verifyNotesTabAsBlueColor(): Promise<void> {
        this.elementHelpers.verifyTabColor(this.uINotesTab, 'rgb(0, 0, 255)');
    }

    async verifyCallTakerMandatoryAcknowledgeMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8)Enter mandatory data - Call Taker');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyDispatcherMandatoryAcknowledgeMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8)Enter mandatory data - Dispatcher');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyFinishedDateNotPriorAcknowledgeMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(7019) Finished Date/Time must not be prior to the Reported Date/Time');
        await this.popup.acknowledgeOkButton.click();
    }

    async enterAtReportedDateAndTimeAsPreviousDate(): Promise<void> {
        await this.uIReportedDateEdit.fill(BaseData.getPoliceModuleValue('ReportedDate'));
        await this.uIReportedTimeEdit.press('Tab');
    }

    async enterAtFinishedDateAndTimeAsPreviousDate(): Promise<void> {
        await this.uIFinishedDateEdit.fill(BaseData.getPoliceModuleValue('FinishedDate'));
        await this.uIFinishedTimeEdit.press('Tab');
    }

    async enterAtFinishedDateAndTimeAsCurrentDate(): Promise<void> {
        await this.uIFinishedDateEdit.click();
        await this.uIFinishedDateEdit.clear();
        await this.uIFinishedDateEdit.fill(DateHelpers.getCurrentDate());
        await this.uIFinishedDateEdit.press('Tab');
        await this.uIFinishedTimeEdit.press('Tab');
    }

    async selectJurisAsBC(): Promise<void> {
        await this.uIJurisDropdown.selectOption({ label: 'BC - Brown County Police Department' });
    }

    async verifyAttachmentTabIsInBlueColor(): Promise<void> {
        this.elementHelpers.verifyTabColor(this.uIAttachmentsTab, 'rgb(0, 0, 255)');
    }

    async verifyTaskTabIsNotAvailable(): Promise<void> {
        await expect(this.uITaskTab).not.toBeVisible();
    }

    async verifyTaskTabIsAvailable(): Promise<void> {
        await expect(this.uITaskTab).toBeVisible();
    }

    async switchToTaskTab(): Promise<void> {
        await this.uITaskTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmCMTask');
    }

    async verifyTaskTabColorAsRed(): Promise<void> {
        const color = await this.uITaskTab.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(255, 0, 0, 1)');
    }

    async getReportedDate(): Promise<string> {
        return await this.uIReportedDateEdit.inputValue();
    }

    async verifySaveIconIsEnabled(): Promise<void> {
        await expect(this.uISaveButton).toBeEnabled();
    }

    async verifySaveAndCloseIconIsEnabled(): Promise<void> {
        await expect(this.uISaveCloseButton).toBeEnabled();
    }

    async verifySaveAndAddNewIconIsEnabled(): Promise<void> {
        await expect(this.uISaveAndAddNewButton).toBeEnabled();
    }

    async verifyApprovalTabAsBlackColor(): Promise<void> {
        const color = await this.uIApprovalTab.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(0, 0, 0, 1)');
    }

    async verifyApprovalTabAsBlueColor(): Promise<void> {
        this.elementHelpers.verifyTabColor(this.uIApprovalTab, 'rgb(0, 0, 255)');
    }

    async verifyInitialCFSIsBlank(): Promise<void> {
        await expect(this.uIInitialCFSEdit).toHaveValue('');
    }

    async verifyReceivedSourceIsBlank(): Promise<void> {
        await expect(this.uIReceivedSourceEdit).toHaveValue('');
    }

    async verifyReportedLocationIsBlank(): Promise<void> {
        await expect(this.uIReportedLocationEdit).toHaveValue('');
    }

    async verifyReportedDateAndTimeIsBlank(): Promise<void> {
        await expect(this.uIReportedDateEdit).toHaveValue('');
        await expect(this.uIReportedTimeEdit).toHaveValue('');
    }

    async verifyFinishedDateAndTimeIsBlank(): Promise<void> {
        await expect(this.uIFinishedDateEdit).toHaveValue('');
        await expect(this.uIFinishedTimeEdit).toHaveValue('');
    }

    async verifyCADDispositionIsBlank(): Promise<void> {
        await expect(this.uICADDispositionEdit).toHaveValue('');
    }

    async verifyLocationIsBlank(): Promise<void> {
        await expect(this.uICallCompletionLocationEdit).toHaveValue('');
    }

    async verifyCallNoGenerated(callNo: string): Promise<void> {
        const year = await this.uICallYearEdit.inputValue();
        const num = await this.uICallNumberEdit.inputValue();
        expect(`${year}.${num}`).toBe(callNo);
    }

    async verifyCaseNoGenerated(caseNo: string): Promise<void> {
        const year = await this.uICaseYearEdit.inputValue();
        const num = await this.uICaseNumberEdit.inputValue();
        expect(`${year}-${num}`).toBe(caseNo);
    }

    async verifyCaseInfoIconIsDisplayed(): Promise<void> {
        await expect(this.uICaseInfoIcon).toBeVisible();
    }

    async tabOutCallCompletionLocation(): Promise<void> {
        await this.uICallCompletionLocationEdit.press('Tab');
        await this.uICallCompletionLocationVerifyCheckbox.press('Tab');
    }

    async verifyAtReceivedSource(): Promise<void> {
        await expect(this.uIReceivedSourceEdit).toHaveValue(BaseData.getPoliceModuleValue('ReceivedSource'));
    }

    async clickDispatchEnvironmentIcon(): Promise<void> {
        await this.uIDispatchEnvironmentIcon.click();
    }

    async clickManageCustomField(): Promise<void> {
        await this.uIManageCustomFields.click();
    }

    async verifyAtCSZ(i: number): Promise<void> {
        const city = await this.uICSZCity.inputValue();
        expect(city).toBe(BaseData.getPoliceModuleValue(`CSZ${i}`));
    }

    async enterAtCSZCode(): Promise<void> {
        await this.uICSZZipCode.click();
        await this.uICSZZipCode.clear();
        await this.uICSZZipCode.fill(BaseData.getPoliceModuleValue('CSZZip'));
        await this.uICSZZipCode.press('Tab');
    }

    async clearCSZ(): Promise<void> {
        await this.uICSZCity.click();
        await this.uICSZCity.clear();
        await this.uICSZCity.press('Tab');
    }

    async doubleClickTheSaveIcon(): Promise<void> {
        await this.uISaveButton.dblclick();
        await this.popup.confirmYes();
    }

    async verifyAtPatrolArea(): Promise<void> {
        await expect(this.uIPatrolAreaEdit).toHaveValue(BaseData.getPoliceModuleValue('PatrolArea'));
    }

    async verifyCallNoFieldIsMandatory(): Promise<void> {
        const color = await this.uICallNoLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(153, 0, 0, 1)');
    }

    async verifyCallNoFieldIsEnabled(): Promise<void> {
        await expect(this.uICallNumberEdit).toBeEnabled();
        await expect(this.uICallYearEdit).toBeEnabled();
    }

    async enterAtCallNo(callNo?: string): Promise<void> {
        const value = callNo || BaseData.getPoliceModuleValue('CallNo');
        await this.uICallYearEdit.fill(value.substring(0, 2));
        await this.uICallNumberEdit.fill(value.substring(3));
        await this.uICallNumberEdit.press('Tab');
    }

    async verifyAtCallNoIsDisabled(): Promise<void> {
        await expect(this.uICallYearEdit).toHaveAttribute('readonly', /.*/);
        await expect(this.uICallNumberEdit).toHaveAttribute('readonly', /.*/);
    }

    async verifyAtCallNoIsEnabled(): Promise<void> {
        await expect(this.uICallYearEdit).toBeEnabled();
        await expect(this.uICallNumberEdit).toBeEnabled();
    }

    async setCallYearToJSONFile(testCaseId: string): Promise<void> {
        const year = (await this.uICallYearEdit.inputValue()).substring(0, 2);
        BaseData.writeJson(testCaseId, 'callYear', year);
    }

    async setCallNumberToJSONFile(testCaseId: string): Promise<void> {
        const no = (await this.uICallNumberEdit.inputValue()).substring(0, 6);
        BaseData.writeJson(testCaseId, 'callNo', no);
    }
}

export class CallEntryMainTabPage {
    readonly page: Page;
    readonly uIMainTable: Locator;
    readonly uIOfficer1Edit: Locator;
    readonly uILocationInfoIcon: Locator;
    readonly uIAlarmNoEdit: Locator;
    readonly uITowZoneEdit: Locator;
    readonly uIExactLocationEdit: Locator;
    readonly uICADCFSEdit: Locator;
    readonly uICADDispositionEdit: Locator;
    readonly uIStackedEdit: Locator;
    readonly uIFinishedEdit: Locator;
    readonly uIPrimeUnitEdit: Locator;
    readonly uIDispatcherEdit: Locator;
    readonly uIDispatchedEdit: Locator;
    readonly uIOfficer2Edit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIMainTable = page.locator('#tabCBE_tmpl0_ctrlUsrCBEMain_grdCBEMainCmts');
        this.uIOfficer1Edit = page.locator('#tabCBE_tmpl0_ctrlUsrCBEMain_txtOfficer1');
        this.uILocationInfoIcon = page.locator('#tabCBE_tmpl7_ctrlUsrCBEEdit_addrCallCompletionLoc_cmdIncOnAddr');
        this.uIAlarmNoEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCBEMain_txtAlarmNo');
        this.uITowZoneEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCBEMain_txtTowZone');
        this.uIExactLocationEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCBEMain_txtExactLocation');
        this.uICADCFSEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCBEMain_txtCADCompletionCFS');
        this.uICADDispositionEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCBEMain_txtDisposition');
        this.uIStackedEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCBEMain_txtStackedDttm');
        this.uIFinishedEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCBEMain_txtFinishedDttm');
        this.uIPrimeUnitEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCBEMain_txtPrimeUnit');
        this.uIDispatcherEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCBEMain_txtDispatcher');
        this.uIDispatchedEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCBEMain_txtDispatchedDttm');
        this.uIOfficer2Edit = page.locator('#tabCBE_tmpl0_ctrlUsrCBEMain_txtOfficer2');
    }

    async verifyPrimeOfficerShowsInOfficer1Tab(): Promise<void> {
        await expect(this.uIOfficer1Edit).toHaveValue(BaseData.getPoliceModuleValue('Officer1'));
    }

    async verifyLoggedPrimeOfficerShowsInOfficer1Tab(): Promise<void> {
        await expect(this.uIOfficer1Edit).toHaveValue(BaseData.getPoliceModuleValue('LoggedOfficer'));
    }

    async verifyAlarmNoByActiveData(alarmNo: string): Promise<void> {
        const val = await this.uIAlarmNoEdit.inputValue();
        expect(val).toContain(alarmNo);
    }

    async verifyZoneFieldPresent(): Promise<void> {
        await expect(this.uITowZoneEdit).toBeVisible();
    }

    async verifyZoneFieldDisabled(): Promise<void> {
        await expect(this.uITowZoneEdit).toBeDisabled();
    }

    async verifyAtExactLocation(): Promise<void> {
        const val = await this.uIExactLocationEdit.inputValue();
        expect(val).toContain(BaseData.getPoliceModuleValue('ExactLocation'));
    }

    async verifyAtCADCFS(): Promise<void> {
        const val = await this.uICADCFSEdit.inputValue();
        expect(val).toContain(BaseData.getPoliceModuleValue('CADCFS'));
    }

    async verifyAtCADDisposition(): Promise<void> {
        const val = await this.uICADDispositionEdit.inputValue();
        expect(val).toContain(BaseData.getPoliceModuleValue('CADDisposition'));
    }

    async verifyAtStackedDateAsCurrentDate(): Promise<void> {
        const val = await this.uIStackedEdit.inputValue();
        expect(val).toContain(DateHelpers.getCurrentDate());
    }

    async verifyAtFinishedDateAsCurrentDate(): Promise<void> {
        const val = await this.uIFinishedEdit.inputValue();
        expect(val).toContain(DateHelpers.getCurrentDate());
    }

    async verifyAtprimeUnit(): Promise<void> {
        await expect(this.uIPrimeUnitEdit).toHaveValue(BaseData.getPoliceModuleValue('PrimeUnit'));
    }

    async verifyAtDispatcher(): Promise<void> {
        await expect(this.uIDispatcherEdit).toHaveValue(BaseData.getPoliceModuleValue('Dispatcher'));
    }

    async verifyAtOfficer1(jsonIndex?: number): Promise<void> {
        const expected = jsonIndex ? BaseData.getPoliceModuleValue(`1Officer${jsonIndex}`) : BaseData.getPoliceModuleValue('Officer1');
        await expect(this.uIOfficer1Edit).toHaveValue(expected);
    }

    async verifyAtOfficer2(jsonIndex?: number): Promise<void> {
        const expected = jsonIndex ? BaseData.getPoliceModuleValue(`2Officer${jsonIndex}`) : BaseData.getPoliceModuleValue('Officer2');
        await expect(this.uIOfficer2Edit).toHaveValue(expected);
    }
}

export class CallEntryNamesTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly uINameTypeEdit: Locator;
    readonly uINameTypeIDEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uIActivityComboBox: Locator;
    readonly uIAddNameButton: Locator;
    readonly uIClearButton: Locator;
    readonly uISaveNamesTabButton: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uINamesTabGridTable: Locator;
    readonly uINamesInfoIcon: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uINCICQueryIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.uINameTypeEdit = page.locator('#nmcIncident_NameType');
        this.uINameTypeIDEdit = page.locator('#nmcIncident_NameTypeID');
        this.uIAddressEdit = page.locator('#txtAddress');
        this.uIActivityComboBox = page.locator('#cddActivity_DropDown');
        this.uIAddNameButton = page.locator('#imgAddName');
        this.uIClearButton = page.locator('#imgClearName');
        this.uISaveNamesTabButton = page.locator('#cmdInternalSave');
        this.uILastNameEdit = page.locator('#nmcIncident_LastName');
        this.uIFirstNameEdit = page.locator('#nmcIncident_FirstName');
        this.uINamesTabGridTable = page.locator('#grdCBENames');
        this.uINamesInfoIcon = page.locator('#nmcIncident_imgSrch');
        this.uILeftSideStatusBar = page.locator("//td[@class='status']/b");
        this.uINCICQueryIcon = page.locator('#nmcIncident_NCICImgBtn');
    }

    async enterNameType(): Promise<void> {
        await this.uINameTypeEdit.fill('O');
    }

    async enterAtNameTypeUsingIndex(keyindex: number): Promise<void> {
        await this.uINameTypeEdit.fill(BaseData.getPoliceModuleValue(`NameType${keyindex}`));
    }

    async enterNameTypeID(): Promise<void> {
        await this.uINameTypeIDEdit.fill('1566');
        await this.uINameTypeIDEdit.press('Tab');
    }

    async selectActivity(): Promise<void> {
        await this.uIActivityComboBox.selectOption({ index: 1 });
    }

    async clickAddNameButton(): Promise<void> {
        await this.uIAddNameButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickInternalSaveButton(): Promise<void> {
        await this.uISaveNamesTabButton.click();
    }

    async verifyNamesTabValidation(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1051) Updated data exists in the Names Tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async enterAtNameID(): Promise<void> {
        const nameID = BaseData.getPoliceModuleValue('NameID');
        await this.uINameTypeEdit.click();
        await this.uINameTypeEdit.fill(nameID.substring(0, 1));
        await this.uINameTypeIDEdit.fill(nameID.substring(2));
        await this.uINameTypeIDEdit.press('Tab');
    }

    async verifyJnameDetailsRemoved(): Promise<void> {
        await expect(this.uINameTypeEdit).toHaveValue('');
        await expect(this.uINameTypeIDEdit).toHaveValue('');
    }

    async verifyAddressFieldRemoved(): Promise<void> {
        await expect(this.uIAddressEdit).toHaveValue('');
    }

    async verifyJuvinalNameConfirmMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6125) You have selected a Juvenile Name record.');
        await this.popup.confirmNoButton.click();
    }

    async enterAtLastName(): Promise<void> {
        await this.uILastNameEdit.fill(BaseData.getPoliceModuleValue('LastName'));
    }

    async enterAtLastNameWithTab(): Promise<void> {
        await this.uILastNameEdit.fill(BaseData.getPoliceModuleValue('LastName'));
        await this.uILastNameEdit.press('Tab');
    }

    async enterAtFirstName(): Promise<void> {
        await this.uIFirstNameEdit.fill(BaseData.getPoliceModuleValue('FirstName'));
        await this.uIFirstNameEdit.press('Tab');
    }

    async selectAtActivity(): Promise<void> {
        await this.uIActivityComboBox.selectOption({ label: BaseData.getPoliceModuleValue('Activity') });
    }

    async selectActivityAsVictim(): Promise<void> {
        await this.uIActivityComboBox.selectOption({ label: 'Victim' });
    }

    async selectActivityAsArrested(): Promise<void> {
        await this.uIActivityComboBox.selectOption({ label: 'Arrested' });
    }

    async selectActivityAsCaller(): Promise<void> {
        await this.uIActivityComboBox.selectOption({ label: 'Caller' });
    }

    async verifyAtActivityInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uINamesTabGridTable, 'Activity', rowIndex);
        expect(text).toBe(BaseData.getPoliceModuleValue('Activity'));
    }

    async saveNamesTab(): Promise<void> {
        await this.uISaveNamesTabButton.click();
        await this.popup.confirmYes();
    }

    async clickNameInfoIcon(): Promise<void> {
        await this.uINamesInfoIcon.click();
    }

    async clickNCICQueryIcon(): Promise<void> {
        await this.uINCICQueryIcon.click();
    }

    async verifySexDOBRequriedForNCICAck(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6076) Sex and DOB are required for NCIC Query');
        await this.popup.acknowledgeOkButton.click();
    }
}

export class CallEntryNotesTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly uINotesDateEdit: Locator;
    readonly uINotesTimeEdit: Locator;
    readonly uIUnitEdit: Locator;
    readonly uIUnitLookupButton: Locator;
    readonly uINotesCommentEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uISaveNotesTabButton: Locator;
    readonly uIPFCodeEdit: Locator;
    readonly uIPFCodeLookup: Locator;
    readonly uINotesTable: Locator;
    readonly uIPFIBubbleIcon: Locator;
    readonly uIResetButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.uINotesDateEdit = page.locator('#dttmCmts_Date_KPIDttmCtrl');
        this.uINotesTimeEdit = page.locator("//table[@id = 'dttmCmts_Time']//input");
        this.uIUnitEdit = page.locator('#lupUnit_CodeValue');
        this.uIUnitLookupButton = page.locator('#lupUnit_imgBtn');
        this.uINotesCommentEdit = page.locator('#txtComment');
        this.uIAddButton = page.locator('#imgAddComments');
        this.uIClearButton = page.locator('#imgClearComments');
        this.uISaveNotesTabButton = page.locator('#cmdInternalSave');
        this.uIPFCodeEdit = page.locator('#lupPF_CodeValue');
        this.uIPFCodeLookup = page.locator('#lupPF_imgBtn');
        this.uINotesTable = page.locator('#grdCBEMainCmts');
        this.uIPFIBubbleIcon = page.locator('#lupPF_cmdIncOnAddr');
        this.uIResetButton = page.locator('#cmdInternalRefresh');
    }

    async tabOutDateTime(): Promise<void> {
        await this.uINotesDateEdit.press('Tab');
        await this.uINotesTimeEdit.press('Tab');
    }

    async enterNotesComment(): Promise<void> {
        await this.uINotesCommentEdit.fill('Call Entry Details are added');
    }

    async enterAtNotes(): Promise<void> {
        await this.uINotesCommentEdit.fill(BaseData.getPoliceModuleValue('Notes'));
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async internalSave(): Promise<void> {
        await this.uISaveNotesTabButton.click();
        await this.popup.confirmYes();
    }

    async deleteAtNotesTabRow(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uINotesTable, BaseData.getPoliceModuleValue('Notes'));
        await this.popup.confirmYes();
    }

    async verifyAtPFInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uINotesTable, BaseData.getPoliceModuleValue('PF'), 'PF');
        expect(await cell.innerText()).toBe(BaseData.getPoliceModuleValue('PF'));
    }

    async verifyAtNotesInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uINotesTable, BaseData.getPoliceModuleValue('Notes'), 'Notes');
        expect(await cell.innerText()).toBe(BaseData.getPoliceModuleValue('Notes'));
    }

    async enterAtPF(): Promise<void> {
        await this.uIPFCodeEdit.fill(BaseData.getPoliceModuleValue('PF'));
        await this.uIPFCodeEdit.press('Tab');
    }
}

export class CallEntrySummaryTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uITemplateNameComboBox: Locator;
    readonly uILoadButton: Locator;
    readonly uISaveCallSummaryTabButton: Locator;
    readonly uIRichTextWrapperEdit: Locator;
    readonly uIRichTextEdit: Locator;
    readonly uIResetButton: Locator;
    readonly uISummaryTabGreenMessage: Locator;
    readonly uIAddNewButton: Locator;
    readonly uITextBody: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uITemplateNameComboBox = page.locator('#ctrlUsrKPITxtEdit_lstTextName');
        this.uILoadButton = page.locator('#ctrlUsrKPITxtEdit_cmdload');
        this.uISaveCallSummaryTabButton = page.locator('#cmdInternalSave');
        this.uIRichTextWrapperEdit = page.locator('#ctrlUsrKPITxtEdit_rteKPITxtWrapper');
        this.uIRichTextEdit = page.locator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        this.uIResetButton = page.locator('#cmdInternalRefresh');
        this.uISummaryTabGreenMessage = page.locator('#lblAppPFID');
        this.uIAddNewButton = page.locator('#ctrlUsrKPITxtEdit_cmdAddnew');
        this.uITextBody = page.locator('//body');
    }

    async clickLoadButton(): Promise<void> {
        await this.uILoadButton.click();
    }

    async saveCallsummaryTab(): Promise<void> {
        await this.uISaveCallSummaryTabButton.click();
        await this.popup.confirmYes();
    }

    async selectAtTemplate(): Promise<void> {
        await this.uITemplateNameComboBox.selectOption({ label: BaseData.getPoliceModuleValue('Template') });
    }

    async enterAtRichText(): Promise<void> {
        const frame = this.page.frameLocator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        await frame.locator('body').fill(BaseData.getPoliceModuleValue('Text'));
    }
}

export class CallEntryVehicleTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly uIPlateNoEdit: Locator;
    readonly uIStateComboBox: Locator;
    readonly uIActivityComboBox: Locator;
    readonly uIInsuranceCompanyComboBox: Locator;
    readonly uIOtherVehicleInformationEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIInternalSaveButton: Locator;
    readonly uIVehicleTable: Locator;
    readonly uIDeleteIconGridButton: Locator;
    readonly uIVehicleLookupButton: Locator;
    readonly uINameInfoIcon: Locator;
    readonly uIVehicleTabResetButton: Locator;
    readonly uINCICEdit: Locator;
    readonly uINameIDTypeEdit: Locator;
    readonly uINameIDEdit: Locator;
    readonly uICustomlabel1: Locator;
    readonly uICustomlabel2: Locator;
    readonly uICustomEdit1: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIvehicleInfoIcon: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uINameResetButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.uIPlateNoEdit = page.locator('#pltVehicle_PlateNumber');
        this.uIStateComboBox = page.locator('#pltVehicle_KPIState');
        this.uIActivityComboBox = page.locator('#cddActivity_DropDown');
        this.uIInsuranceCompanyComboBox = page.locator('#cddInsurComp_DropDown');
        this.uIOtherVehicleInformationEdit = page.locator('#txtComments');
        this.uIAddButton = page.locator('#imgAdd');
        this.uIInternalSaveButton = page.locator('#cmdInternalSave');
        this.uIVehicleTable = page.locator('#grdVehicle');
        this.uIDeleteIconGridButton = page.locator("//div[@id='grdVehicle']//td[@class='Delete_Icon_Style']");
        this.uIVehicleLookupButton = page.locator('#pltVehicle_imgBtn');
        this.uINameInfoIcon = page.locator('#nmcIncident_imgSrch');
        this.uIVehicleTabResetButton = page.locator('#cmdInternalRefresh');
        this.uINCICEdit = page.locator('#txtNCIC');
        this.uINameIDTypeEdit = page.locator('#nmcIncident_NameType');
        this.uINameIDEdit = page.locator('#nmcIncident_NameTypeID');
        this.uICustomlabel1 = page.locator('#KPICustom1');
        this.uICustomlabel2 = page.locator('#KPICustom2');
        this.uICustomEdit1 = page.locator('#txtCustom1');
        this.uILastNameEdit = page.locator('#nmcIncident_LastName');
        this.uIFirstNameEdit = page.locator('#nmcIncident_FirstName');
        this.uIvehicleInfoIcon = page.locator('#pltVehicle_imgBtn');
        this.uILeftSideStatusBar = page.locator("//td[@class='status']//b");
        this.uINameResetButton = page.locator('#imgClearOper');
    }

    async enterAtVehicleNumber(): Promise<void> {
        await this.uIPlateNoEdit.fill(BaseData.getPoliceModuleValue('VehicleNumber'));
        await this.uIPlateNoEdit.press('Tab');
    }

    async enterAtState(): Promise<void> {
        await this.uIStateComboBox.selectOption({ label: BaseData.getPoliceModuleValue('State') });
        await this.uIStateComboBox.press('Tab');
    }

    async selectAtActivity(): Promise<void> {
        await this.uIActivityComboBox.selectOption({ label: BaseData.getPoliceModuleValue('Activity') });
        await this.uIActivityComboBox.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async internalSave(): Promise<void> {
        await this.uIInternalSaveButton.click();
        await this.popup.confirmYes();
    }

    async deleteRowByAtActivity(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uIVehicleTable, BaseData.getPoliceModuleValue('Activity'));
        await this.popup.confirmYes();
    }
}

export class CallEntryUnitsTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIEditButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIUnitsTabTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIEditButton = page.locator('#cmdAddHistory');
        this.uIRefreshButton = page.locator('#btnRefresh');
        this.uIUnitsTabTable = page.locator('#grdCBEUnits');
    }

    async clickEditButton(): Promise<void> {
        await this.uIEditButton.click();
    }

    async verifyAtUnitInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIUnitsTabTable, BaseData.getPoliceModuleValue('Unit'));
        expect(await cell.innerText()).toContain(BaseData.getPoliceModuleValue('Unit'));
    }

    async verifyAtOfficer1InGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIUnitsTabTable, BaseData.getPoliceModuleValue('Officer1'));
        expect(await cell.innerText()).toContain(BaseData.getPoliceModuleValue('Officer1'));
    }
}

export class CallEntryRelatedCallsTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly uIAddButton: Locator;
    readonly uIInternalSaveButton: Locator;
    readonly uIInternalRefreshButton: Locator;
    readonly uIRelatedCallsTabTable: Locator;
    readonly uICallYearEdit: Locator;
    readonly uICallNumberEdit: Locator;
    readonly uILocationEdit: Locator;
    readonly uICFSEdit: Locator;
    readonly uIDateTimeEdit: Locator;
    readonly uIClearButton: Locator;
    readonly uINotesEdit: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uIPoliceCheckBox: Locator;
    readonly uIRelatedCallNoInfoIcon: Locator;
    readonly uIJurisDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.uIAddButton = page.locator('#imgAddRLC');
        this.uIInternalSaveButton = page.locator('#cmdInternalSave');
        this.uIInternalRefreshButton = page.locator('#cmdInternalRefresh');
        this.uIRelatedCallsTabTable = page.locator('#grdCBERelatedCalls');
        this.uICallYearEdit = page.locator('#numRelatedCallNo_Year');
        this.uICallNumberEdit = page.locator('#numRelatedCallNo_Number');
        this.uILocationEdit = page.locator('#txtLocation');
        this.uICFSEdit = page.locator('#txtCFS');
        this.uIDateTimeEdit = page.locator('#txtDateTime');
        this.uIClearButton = page.locator('#imgClearRLC');
        this.uINotesEdit = page.locator('#txtComment');
        this.uILeftSideStatusBar = page.locator("//td[@class='status']/b");
        this.uIPoliceCheckBox = page.locator('#chkPolice');
        this.uIRelatedCallNoInfoIcon = page.locator('#numRelatedCallNo_imgBtn');
        this.uIJurisDropdown = page.locator('#lstJuris');
    }

    async enterAtRelatedCallNo(): Promise<void> {
        const callNo = BaseData.getPoliceModuleValue('RelatedCallNo');
        await this.uICallYearEdit.fill(callNo.substring(0, 2));
        await this.uICallNumberEdit.fill(callNo.substring(3));
        await this.uICallNumberEdit.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async saveInternalTab(): Promise<void> {
        await this.uIInternalSaveButton.click();
        await this.popup.confirmYes();
    }

    async deleteAtRelatedCallNo(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uIRelatedCallsTabTable, BaseData.getPoliceModuleValue('RelatedCallNo'));
        await this.popup.confirmYes();
    }
}

export class CallEntrySuspectsTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIAddSuspectButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uISuspectTabTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIAddSuspectButton = page.locator('#cmdAdd');
        this.uIRefreshButton = page.locator('#btnRefresh');
        this.uISuspectTabTable = page.locator('#grdSuspect');
    }

    async clickAddSuspects(): Promise<void> {
        await this.uIAddSuspectButton.click();
    }

    async verifyAtNameInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uISuspectTabTable, 'Name', rowIndex);
        expect(text).toBe(BaseData.getPoliceModuleValue('Name'));
    }
}

export class CallEntryMapTabPage {
    readonly page: Page;
    readonly uIFormName: Locator;
    readonly uILatLongTextView: Locator;
    readonly uILatLongValueTextView: Locator;
    readonly uIUpdateLatLongButton: Locator;
    readonly uIResetButton: Locator;
    readonly uILocationPointer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIFormName = page.locator('#frmGHydrantMap_Id');
        this.uILatLongTextView = page.locator('#lbllatLongvalue');
        this.uILatLongValueTextView = page.locator("//span[@id = 'lbllatLongvalue']/font");
        this.uIUpdateLatLongButton = page.locator('#btnUpdateLatLong');
        this.uIResetButton = page.locator("//button[contains(text(),'Reset')]");
        this.uILocationPointer = page.locator("//div[@id='map_canvas']//img[contains(@src,'spotlight-poi')]");
    }

    async verifyLatLongValue(): Promise<void> {
        await expect(this.uILatLongValueTextView).toHaveText(BaseData.getPoliceModuleValue('LatLongValue'));
    }

    async clickReset(): Promise<void> {
        await this.uIResetButton.click();
    }

    async clickUpdateLatLongButton(): Promise<void> {
        await this.uIUpdateLatLongButton.click();
    }
}

export class CallEntryRequestTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIRequestTab: Locator;
    readonly uIRequestTabResultTable: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIResetButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIRequestTab = page.locator("(//span[contains(text(),'Request')])");
        this.uIRequestTabResultTable = page.locator('#grdORDetails');
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async verifyAtRequestedByInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIRequestTabResultTable, 'Requested By', rowIndex);
        expect(text).toBe(BaseData.getPoliceModuleValue('RequestedBy'));
    }
}

export class CallEntryEditTabPage {
    readonly page: Page;
    readonly uICADDispositionEdit: Locator;
    readonly uIReportDue: Locator;
    readonly uIStackedDateEdit: Locator;
    readonly uIDispatchedDate: Locator;
    readonly uIArrivedDate: Locator;
    readonly uIFinishedDateEdit: Locator;
    readonly uILocationEdit: Locator;
    readonly uICallTakerEdit: Locator;
    readonly UiDispatcherEdit: Locator;
    readonly uICADCFSEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uICADDispositionLookUpIcon: Locator;
    readonly uIPrimeUnitEdit: Locator;
    readonly uIFinishedTimeEdit: Locator;
    readonly uIStackedTimeEdit: Locator;
    readonly uICriticalIncidentCheckBox: Locator;
    readonly uICallTakerLabel: Locator;
    readonly uIDispatcherLabel: Locator;
    readonly uIDispatcherEdit: Locator;
    readonly uIFinalCFSLabel: Locator;
    readonly uIDispatcherDescription: Locator;
    readonly uICallDispatchDispatcherEdit1: Locator;
    readonly uICallDispatchDispatcherDescription1: Locator;
    readonly uICallDispatchDispatcherEdit2: Locator;
    readonly uICallDispatchDispatcherDescription2: Locator;
    readonly uIDispatchedTimeEdit: Locator;
    readonly uIFinalCFSEdit: Locator;
    readonly uIArrivedTimeEdit: Locator;
    readonly uIEventYeardit: Locator;
    readonly uIEventNoEdit: Locator;
    readonly uIPriorityEdit: Locator;
    readonly uIReportDueGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uICADDispositionEdit = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_lupCADDisposition_CodeValue' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_lupCADDisposition_CodeValue']");
        this.uIReportDue = page.locator("//select[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_cddRptDue_DropDown' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_cddRptDue_DropDown']");
        this.uIStackedDateEdit = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_dttmStacked_Date_KPIDttmCtrl' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_dttmStacked_Date_KPIDttmCtrl']");
        this.uIDispatchedDate = page.locator('#tabCBE_tmpl8_ctrlUsrCBEEdit_dttmDispatched_Date_KPIDttmCtrl');
        this.uIArrivedDate = page.locator("//input[@id='tabCBE_tmpl8_ctrlUsrCBEEdit_dttmArrived_Date_KPIDttmCtrl' or @id='tabCBE_tmpl7_ctrlUsrCBEEdit_dttmArrived_divDateTime']");
        this.uIFinishedDateEdit = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_dttmFinished_Date_KPIDttmCtrl' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_dttmFinished_Date_KPIDttmCtrl']");
        this.uILocationEdit = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_addrCallCompletionLoc_txtFrom' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_addrCallCompletionLoc_txtFrom']");
        this.uICallTakerEdit = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_lupCallTaker_CodeValue' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_lupCallTaker_CodeValue']");
        this.UiDispatcherEdit = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_lupDispatcherDispAck_CodeValue' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_lupDispatcherDispAck_CodeValue']");
        this.uICADCFSEdit = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_lupCADCFS_CodeValue' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_lupCADCFS_CodeValue']");
        this.uIAddButton = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_imgAddReportDue' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_imgAddReportDue']");
        this.uICADDispositionLookUpIcon = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_lupCADDisposition_imgBtn' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_lupCADDisposition_imgBtn']");
        this.uIPrimeUnitEdit = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_lupPrimeUnit_CodeValue' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_lupPrimeUnit_CodeValue']");
        this.uIFinishedTimeEdit = page.locator("//table[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_dttmFinished_Time']//input");
        this.uIStackedTimeEdit = page.locator("//table[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_dttmStacked_Time' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_dttmStacked_Time']//input");
        this.uICriticalIncidentCheckBox = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_chkCritical' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_chkCritical']");
        this.uICallTakerLabel = page.locator("//span[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_lblCallTaker' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_lblCallTaker']");
        this.uIDispatcherLabel = page.locator("//span[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_lblDispatcherFinAck' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_lblDispatcherFinAck']");
        this.uIDispatcherEdit = page.locator("//input[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_lupDispatcherFinAck_CodeValue' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_lupDispatcherFinAck_CodeValue']");
        this.uIFinalCFSLabel = page.locator("//span[@id='tabCBE_tmpl7_ctrlUsrCBEEdit_lblFinalCFS' or @id='tabCBE_tmpl8_ctrlUsrCBEEdit_lblFinalCFS']");
        this.uIDispatcherDescription = page.locator('#tabCBE_tmpl8_ctrlUsrCBEEdit_lupDispatcherFinAck_CodeDescription');
        this.uICallDispatchDispatcherEdit1 = page.locator('#tabCBE_tmpl8_ctrlUsrCBEEdit_lupDispatcherDispAck_CodeValue');
        this.uICallDispatchDispatcherDescription1 = page.locator('#tabCBE_tmpl8_ctrlUsrCBEEdit_lupDispatcherDispAck_CodeDescription');
        this.uICallDispatchDispatcherEdit2 = page.locator('#tabCBE_tmpl8_ctrlUsrCBEEdit_lupDispatcherArrAck_CodeValue');
        this.uICallDispatchDispatcherDescription2 = page.locator('#tabCBE_tmpl8_ctrlUsrCBEEdit_lupDispatcherArrAck_CodeDescription');
        this.uIDispatchedTimeEdit = page.locator("//table[@id='tabCBE_tmpl8_ctrlUsrCBEEdit_dttmDispatched_Time']//input");
        this.uIFinalCFSEdit = page.locator('#tabCBE_tmpl8_ctrlUsrCBEEdit_lupCADCFS_CodeValue');
        this.uIArrivedTimeEdit = page.locator("//table[@id='tabCBE_tmpl8_ctrlUsrCBEEdit_dttmArrived_Time']//input");
        this.uIEventYeardit = page.locator('#tabCBE_tmpl8_ctrlUsrCBEEdit_nbrActivityNo_Year');
        this.uIEventNoEdit = page.locator('#tabCBE_tmpl8_ctrlUsrCBEEdit_nbrActivityNo_Number');
        this.uIPriorityEdit = page.locator('#tabCBE_tmpl8_ctrlUsrCBEEdit_txtDispatchPriority');
        this.uIReportDueGrid = page.locator('#tabCBE_tmpl8_ctrlUsrCBEEdit_grdCBEReportDue');
    }

    async enterAtCADDisposition(): Promise<void> {
        await this.uICADDispositionEdit.clear();
        await this.uICADDispositionEdit.fill(BaseData.getPoliceModuleValue('CADDisposition'));
        await this.uICADDispositionEdit.press('Tab');
    }

    async selectAtReportDue(): Promise<void> {
        await this.uIReportDue.selectOption({ label: BaseData.getPoliceModuleValue('ReportDue') });
    }

    async clickAddReportButton(): Promise<void> {
        await this.uIAddButton.click();
    }
}

export class CallEntryANCATabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIAddnewButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIExcelIcon: Locator;
    readonly uIANCATable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIAddnewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIRefreshButton = page.locator("//span[contains(text(),'Refresh')]");
        this.uIPrintIcon = page.locator("//img[contains(@src,'print')]");
        this.uIExcelIcon = page.locator("//img[contains(@src,'excel')]");
        this.uIANCATable = page.locator('#grdAnimalCaseDtl');
    }

    async clickAddnew(): Promise<void> {
        await this.uIAddnewButton.click();
    }

    async clickRefresh(): Promise<void> {
        await this.uIRefreshButton.click();
    }
}

export class CallEntryDispositionTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIDispositionSearchButton: Locator;
    readonly uIAddButton: Locator;
    readonly uIDispositionResultTable: Locator;
    readonly uIDispositionCodeEdit: Locator;
    readonly uIClearButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIDispositionSearchButton = page.locator("//input[@id='tabCBE_tmpl13_ctrlUsrCBEDispo_lupDisposition_imgBtn' or @id='tabCBE_tmpl14_ctrlUsrCBEDispo_lupDisposition_imgBtn']");
        this.uIAddButton = page.locator("//input[@id='tabCBE_tmpl13_ctrlUsrCBEDispo_imgAdd' or @id='tabCBE_tmpl14_ctrlUsrCBEDispo_imgAdd']");
        this.uIDispositionResultTable = page.locator("//div[@id='tabCBE_tmpl13_ctrlUsrCBEDispo_grdCBEDispo' or @id='tabCBE_tmpl14_ctrlUsrCBEDispo_grdCBEDispo']");
        this.uIDispositionCodeEdit = page.locator("//input[@id='tabCBE_tmpl13_ctrlUsrCBEDispo_lupDisposition_CodeValue' or @id='tabCBE_tmpl14_ctrlUsrCBEDispo_lupDisposition_CodeValue']");
        this.uIClearButton = page.locator("//input[@id='tabCBE_tmpl13_ctrlUsrCBEDispo_imgClear' or @id='tabCBE_tmpl14_ctrlUsrCBEDispo_imgClear']");
    }

    async enterAtDisposition(): Promise<void> {
        await this.uIDispositionCodeEdit.fill(BaseData.getPoliceModuleValue('Disposition'));
        await this.uIDispositionCodeEdit.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }
}

export class CallEntryApprovalTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uINewActionDropdown: Locator;
    readonly uIDateEdit: Locator;
    readonly uISaveApprovalTab: Locator;
    readonly uIByOfficerCode: Locator;
    readonly uIStatusGrid: Locator;
    readonly uINotesEdit: Locator;
    readonly uIMoreLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uINewActionDropdown = page.locator('#lstStatus');
        this.uIDateEdit = page.locator('#dttStatusDttm_Date_KPIDttmCtrl');
        this.uISaveApprovalTab = page.locator('#cmdSave');
        this.uIByOfficerCode = page.locator('#lupPFID_CodeValue');
        this.uIStatusGrid = page.locator('#listMsg');
        this.uINotesEdit = page.locator('#txtComments');
        this.uIMoreLink = page.locator("//a[contains(text(),'More')]");
    }

    async selectNewActionAsSendForApproval(): Promise<void> {
        await this.uINewActionDropdown.selectOption({ label: 'Send for Approval' });
    }

    async saveInApprovalTab(): Promise<void> {
        await this.uISaveApprovalTab.click();
        await this.popup.confirmYes();
    }
}

export class CallEntryTaskTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIAddNewTaskButton: Locator;
    readonly uITaskTable: Locator;
    readonly uIUpdateButton: Locator;
    readonly uISelectAllCheckbox: Locator;
    readonly uIBatchUpdateButton: Locator;
    readonly uIDeleteTaskButton: Locator;
    readonly uIAssignToPFEdit: Locator;
    readonly uIAssignToPFInfoIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIAddNewTaskButton = page.locator('#CmdAddNew');
        this.uITaskTable = page.locator('#grdCFSTask');
        this.uIUpdateButton = page.locator('#cmdBatchUpd');
        this.uISelectAllCheckbox = page.locator('#chkSelectAll');
        this.uIBatchUpdateButton = page.locator('#cmdBatchNew');
        this.uIDeleteTaskButton = page.locator('#cmdDeleteGrid');
        this.uIAssignToPFEdit = page.locator('#lupBAssingPF_CodeValue');
        this.uIAssignToPFInfoIcon = page.locator('#lupBAssingPF_imgBtn');
    }

    async clickAddNewTaskButton(): Promise<void> {
        await this.uIAddNewTaskButton.click();
    }
}

export class CallSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly uIJurisDropdown: Locator;
    readonly uISearchButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIShowMapButton: Locator;
    readonly uINextButton: Locator;
    readonly uIPreviousButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIBackButton: Locator;
    readonly uICallYearEdit: Locator;
    readonly uICallNumberEdit: Locator;
    readonly uICallSearchTable: Locator;
    readonly uIDateResetButton: Locator;
    readonly uILocationComboBox: Locator;
    readonly uIPremiseEdit: Locator;
    readonly uIStreetNameEdit: Locator;
    readonly uIStreet1Edit: Locator;
    readonly uIApartmentEdit: Locator;
    readonly uIFromDateEdit: Locator;
    readonly uIFromTimeEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uISelectedCheckbox: Locator;
    readonly uISelectedReportsCount: Locator;
    readonly uIPrintIconButton: Locator;
    readonly uICFSRangeFromcodeEdit: Locator;
    readonly uICFSRangeFromDescriptionEdit: Locator;
    readonly uICFSRangeToCodeEdit: Locator;
    readonly uICFSRangeDescriptionToEdit: Locator;
    readonly uIReceivedSourceCodeEdit: Locator;
    readonly uICommonNameEdit: Locator;
    readonly uIStreet2Edit: Locator;
    readonly uICADDispositionCodeEdit: Locator;
    readonly uIOfficerCodeEdit: Locator;
    readonly uICivilDistrictCodeEdit: Locator;
    readonly uILocationEdit: Locator;
    readonly uILocationVerifyCheckbox: Locator;
    readonly uIVinNoEdit: Locator;
    readonly uITrackingEdit: Locator;
    readonly uIAddressInfoIconButton: Locator;
    readonly uIVehicleDropdown: Locator;
    readonly uIExpiredFlagCheckBox: Locator;
    readonly uICustomLabel: Locator;
    readonly uICustomEdit: Locator;
    readonly uIExportToExcel: Locator;
    readonly uIExcelFormat: Locator;
    readonly uIFormatText: Locator;
    readonly uICriticalCheckBox: Locator;
    readonly uIAptEdit: Locator;
    readonly uIEndPremiseEdit: Locator;
    readonly uICADCFSCodeDropdownInput: Locator;
    readonly uICADCFSCodeDropdownValues: Locator;
    readonly uICADCFSClassDropdownInput: Locator;
    readonly uICADCFSClassDropdownValues: Locator;
    readonly uIPrevButton: Locator;
    readonly uIOfficerLookupIcon: Locator;
    readonly uIOfficerInfoIcon: Locator;
    readonly uIAddIDispositionEdit: Locator;
    readonly uIQAFormTab: Locator;
    readonly uIBasicTab: Locator;
    readonly uISolvabilityFactorFromEdit: Locator;
    readonly uISolvabilityFactorToEdit: Locator;
    readonly uIMonCheckbox: Locator;
    readonly uITueCheckbox: Locator;
    readonly uIWedCheckbox: Locator;
    readonly uIThuCheckbox: Locator;
    readonly uIFriCheckbox: Locator;
    readonly uISatCheckbox: Locator;
    readonly uISunCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.uIJurisDropdown = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lstJuris');
        this.uISearchButton = page.locator("//span[contains(text(),'Search')]");
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
        this.uIRefreshButton = page.locator("//span[contains(text(),'Refresh')]");
        this.uIShowMapButton = page.locator("//span[contains(text(),'Show Map')]");
        this.uINextButton = page.locator('#grdCBE_ctl00_lnkbtnNext');
        this.uIPreviousButton = page.locator('#grdCBE_ctl00_lnkbtnPrev');
        this.uIPrintButton = page.locator("//img[contains(@src,'print.gif')]");
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uICallYearEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_numCADNbr_Year');
        this.uICallNumberEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_numCADNbr_Number');
        this.uICallSearchTable = page.locator("//div[@id='grdCBE']");
        this.uIDateResetButton = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_imgClear');
        this.uILocationComboBox = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lsLocationSearch_CddLocationType');
        this.uIPremiseEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lsLocationSearch_TxtStartPremise');
        this.uIStreetNameEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lsLocationSearch_TxtStreetName');
        this.uIStreet1Edit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lsLocationSearch_TxtStreetName1');
        this.uIApartmentEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lsLocationSearch_TxtAptNo');
        this.uIFromDateEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_dttFrom_Date_KPIDttmCtrl');
        this.uIFromTimeEdit = page.locator("//table[@id='tabCBE_tmpl0_ctrlUsrCallSrchBasic_dttFrom_Time']//input");
        this.uIToDateEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_dttTo_Date_KPIDttmCtrl');
        this.uISelectedCheckbox = page.locator('#chkRptSelect');
        this.uISelectedReportsCount = page.locator('#CallReportList_ItemsCount');
        this.uIPrintIconButton = page.locator("//img[@src = '/KPIImages/ico/16_print.gif']");
        this.uICFSRangeFromcodeEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lupCFSCode1_CodeValue');
        this.uICFSRangeFromDescriptionEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lupCFSCode1_CodeDescription');
        this.uICFSRangeToCodeEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lupCFSCode2_CodeValue');
        this.uICFSRangeDescriptionToEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lupCFSCode2_CodeDescription');
        this.uIReceivedSourceCodeEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_cddRcvSource_CodeValue');
        this.uICommonNameEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lsLocationSearch_TxtCommonName');
        this.uIStreet2Edit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lsLocationSearch_TxtStreetName2');
        this.uICADDispositionCodeEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lupDisposition_CodeValue');
        this.uIOfficerCodeEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lupOfficer_CodeValue');
        this.uICivilDistrictCodeEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lupCvlDist_CodeValue');
        this.uILocationEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lsLocationSearch_adrAddrsCtrl_txtFrom');
        this.uILocationVerifyCheckbox = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lsLocationSearch_adrAddrsCtrl_chkVerify');
        this.uIVinNoEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_txtVinNbr');
        this.uITrackingEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lupTracking_CodeValue');
        this.uIAddressInfoIconButton = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lsLocationSearch_adrAddrsCtrl_cmdIncOnAddr');
        this.uIVehicleDropdown = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_cddVehFlag_DropDown');
        this.uIExpiredFlagCheckBox = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_ChkExpiredFlags');
        this.uICustomLabel = page.locator("//span[text()='Type']");
        this.uICustomEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_txtCustom1');
        this.uIExportToExcel = page.locator("//img[@alt='Export to Excel']");
        this.uIExcelFormat = page.locator('#ExcelFormatsPopdiv');
        this.uIFormatText = page.locator("//span[@class='innerdiv1spanele']");
        this.uICriticalCheckBox = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_chkCritical');
        this.uIAptEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lsLocationSearch_TxtAptNo');
        this.uIEndPremiseEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lsLocationSearch_TxtEndPremise');
        this.uICADCFSCodeDropdownInput = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_ddlCADCFSCode_Input');
        this.uICADCFSCodeDropdownValues = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_ddlCADCFSCode_DropDown');
        this.uICADCFSClassDropdownInput = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_ddlCADCFSClass_Input');
        this.uICADCFSClassDropdownValues = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_ddlCADCFSClass_DropDown');
        this.uIPrevButton = page.locator('#grdCBE_ctl00_lnkbtnPrev');
        this.uIOfficerLookupIcon = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lupOfficer_imgBtn');
        this.uIOfficerInfoIcon = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lupOfficer_cmdIncOnAddr');
        this.uIAddIDispositionEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_lupAdDisposition_CodeValue');
        this.uIQAFormTab = page.locator("//span[text()='QA Form']");
        this.uIBasicTab = page.locator("//span[text()='Basic']");
        this.uISolvabilityFactorFromEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_txtSolveFrom');
        this.uISolvabilityFactorToEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_txtSolveTo');
        this.uIMonCheckbox = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_chkMonday');
        this.uITueCheckbox = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_chkTuesday');
        this.uIWedCheckbox = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_chkWednesday');
        this.uIThuCheckbox = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_chkThursday');
        this.uIFriCheckbox = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_chkFriday');
        this.uISatCheckbox = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_chkSaturday');
        this.uISunCheckbox = page.locator('#tabCBE_tmpl0_ctrlUsrCallSrchBasic_chkSunday');
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async clickBackButton(): Promise<void> {
        await this.uIBackButton.click();
    }

    async enterAtCallNo(callNo?: string): Promise<void> {
        const val = callNo || BaseData.getPoliceModuleValue('CallNo');
        await this.uICallYearEdit.fill(val.substring(0, 2));
        await this.uICallNumberEdit.fill(val.substring(3));
        await this.uICallNumberEdit.press('Tab');
    }

    async selectRowByAtCallNo(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICallSearchTable, BaseData.getPoliceModuleValue('CallNo'));
    }

    async verifyNoRecordAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('1011 - No Record Found');
        await this.popup.acknowledgeOkButton.click();
    }
}

export class CaseSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly uISearchButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIBackButton: Locator;
    readonly uIShowMapButton: Locator;
    readonly uIClearMapButton: Locator;
    readonly uIStartDateEdit: Locator;
    readonly uIStartTimeEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uICaseSearchTable: Locator;
    readonly uILocationComboBox: Locator;
    readonly uIStreet1Edit: Locator;
    readonly uIOfficerCodeEdit: Locator;
    readonly uIDateResetButton: Locator;
    readonly uIReceivedSourceCodeEdit: Locator;
    readonly uIToolTipStatusBar: Locator;
    readonly uIPrintIconButton: Locator;
    readonly uICFSRangeFromCodeEdit: Locator;
    readonly uICFSRangeFromDescriptionEdit: Locator;
    readonly uICFSRangeToCodeEdit: Locator;
    readonly uICFSRangeDescriptionToEdit: Locator;
    readonly uIAdvancedTab: Locator;
    readonly uIHoldForPublicCheckBox: Locator;
    readonly uICADDispositionCodeEdit: Locator;
    readonly uILocationEdit: Locator;
    readonly uILocationVerifyCheckbox: Locator;
    readonly uICaseNoInfoIcon: Locator;
    readonly uIReportsStatusIconInGrid: Locator;
    readonly uIPrimeOnlyCheckBox: Locator;
    readonly uIJurisComboBox: Locator;
    readonly uIDomesticViolenceDropDown: Locator;
    readonly uISelectedCheckbox: Locator;
    readonly uIStreet2Edit: Locator;
    readonly uIGeoCoordsTo: Locator;
    readonly uIGeoCoordsFrom: Locator;
    readonly uIPatrolZoneComboBox: Locator;
    readonly uISubZoneComboBox: Locator;
    readonly uIChargeSearchIcon: Locator;
    readonly uIPrimeInvestigator: Locator;
    readonly uICaseStatus: Locator;
    readonly uICaseStatusSearchIcon: Locator;
    readonly uIofficerSearchIcon: Locator;
    readonly uIPoliceTab: Locator;
    readonly uIShowOnlyCasesWithReportCheckBox: Locator;
    readonly uINotReviewedOnlyCheckBox: Locator;
    readonly uIShowOnlyCasesWithoutReportCheckBox: Locator;
    readonly uINotForpublicCheckBox: Locator;
    readonly uIExportToExcel: Locator;
    readonly uIExcelFormat: Locator;
    readonly uIFormatText: Locator;
    readonly uIActualDateRadioButton: Locator;
    readonly uIEndTimeEdit: Locator;
    readonly uIAptEdit: Locator;
    readonly uIEndPremiseEdit: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIOnlyNotAssignedToCMCheckBox: Locator;
    readonly uIHighestCFSCheckBox: Locator;
    readonly uIUseOfForceCheckBox: Locator;
    readonly uINIBRSEdit: Locator;
    readonly uIChargeCodeEdit: Locator;
    readonly uINextButton: Locator;
    readonly uINewSearchNameEdit: Locator;
    readonly uIClickSaveButton: Locator;
    readonly uISelectFromSavedQuery: Locator;
    readonly uICommonNameEdit: Locator;
    readonly uITrackingEdit: Locator;
    readonly uIMondayCheckbox: Locator;
    readonly uIFridayCheckbox: Locator;
    readonly uITuesdayCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.uISearchButton = page.locator("(//span[contains(text(),'Search')])");
        this.uIAddNewButton = page.locator("(//span[contains(text(),'Add New')])");
        this.uIResetButton = page.locator("(//span[contains(text(),'Reset')])");
        this.uIBackButton = page.locator("(//span[contains(text(),'Back')])");
        this.uIShowMapButton = page.locator("//span[contains(text(),'Show Map')]");
        this.uIClearMapButton = page.locator("//span[contains(text(),'Clear Map')]");
        this.uIStartDateEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_dttFrom_Date_KPIDttmCtrl');
        this.uIStartTimeEdit = page.locator("//table[@id='tabCBE_tmpl0_ctrlUsrCaseSrchBasic_dttFrom_Time']//input");
        this.uIToDateEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_dttTo_Date_KPIDttmCtrl');
        this.uICaseYearEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_numCaseNbr_Year');
        this.uICaseNumberEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_numCaseNbr_Number');
        this.uICaseSearchTable = page.locator('#grdCBE');
        this.uILocationComboBox = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_lsLocationSearch_CddLocationType');
        this.uIStreet1Edit = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_lsLocationSearch_TxtStreetName1');
        this.uIOfficerCodeEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_lupOfficer_CodeValue');
        this.uIDateResetButton = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_imgClear');
        this.uIReceivedSourceCodeEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_cddRcvSource_CodeValue');
        this.uIToolTipStatusBar = page.locator("//table[@id='Table1']//span[@id = 'SP1']");
        this.uIPrintIconButton = page.locator("//a//img[contains(@src , 'print.gif')]");
        this.uICFSRangeFromCodeEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_lupCFSCode1_CodeValue');
        this.uICFSRangeFromDescriptionEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_lupCFSCode1_CodeDescription');
        this.uICFSRangeToCodeEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_lupCFSCode2_CodeValue');
        this.uICFSRangeDescriptionToEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_lupCFSCode2_CodeDescription');
        this.uIAdvancedTab = page.locator("//span[text()='Advanced']");
        this.uIHoldForPublicCheckBox = page.locator('#tabCBE_tmpl1_ctrlUsrCaseSrchAdv_chkNotForPublic');
        this.uICADDispositionCodeEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_lupDisposition_CodeValue');
        this.uILocationEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_lsLocationSearch_adrAddrsCtrl_txtFrom');
        this.uILocationVerifyCheckbox = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_lsLocationSearch_adrAddrsCtrl_chkVerify');
        this.uICaseNoInfoIcon = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_numCaseNbr_imgBtn');
        this.uIReportsStatusIconInGrid = page.locator('#grdCBE_it16_0_IsReportsImg');
        this.uIPrimeOnlyCheckBox = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_ChkIsPrime');
        this.uIJurisComboBox = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_lstJuris');
        this.uIDomesticViolenceDropDown = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_cddDomesticViolence_DropDown');
        this.uISelectedCheckbox = page.locator('#chkRptSelect');
        this.uIStreet2Edit = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_lsLocationSearch_TxtStreetName2');
        this.uIGeoCoordsTo = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_rngGEOCoords_txtTo');
        this.uIGeoCoordsFrom = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_rngGEOCoords_txtFrom');
        this.uIPatrolZoneComboBox = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_cddPatrolArea_DropDown');
        this.uISubZoneComboBox = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_cddSubPatrolArea_DropDown');
        this.uIChargeSearchIcon = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_lupCharge_imgBtn');
        this.uIPrimeInvestigator = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_lupPrimePF_CodeValue');
        this.uICaseStatus = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_lupMgmtDisposition_CodeValue');
        this.uICaseStatusSearchIcon = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_lupMgmtDisposition_imgBtn');
        this.uIofficerSearchIcon = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_lupOfficer_imgBtn');
        this.uIPoliceTab = page.locator("//span[text()='Police Force']");
        this.uIShowOnlyCasesWithReportCheckBox = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_chkCasesReports');
        this.uINotReviewedOnlyCheckBox = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_chkNotReviewed');
        this.uIShowOnlyCasesWithoutReportCheckBox = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_chkCasesWithoutReports');
        this.uINotForpublicCheckBox = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_ChkNotForPublic');
        this.uIExportToExcel = page.locator("//img[@alt='Export to Excel']");
        this.uIExcelFormat = page.locator('#ExcelFormatsPopdiv');
        this.uIFormatText = page.locator("//span[@class='innerdiv1spanele']");
        this.uIActualDateRadioButton = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_rdoSrchDttm_1');
        this.uIEndTimeEdit = page.locator("//table[@id='tabCBE_tmpl0_ctrlUsrCaseSrchBasic_dttTo_Time']//input");
        this.uIAptEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_lsLocationSearch_TxtAptNo');
        this.uIEndPremiseEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_lsLocationSearch_TxtEndPremise');
        this.uIRefreshButton = page.locator("(//span[contains(text(),'Refresh')])");
        this.uIOnlyNotAssignedToCMCheckBox = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_chkNotAssignedCM');
        this.uIHighestCFSCheckBox = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_chkHighCFSCode');
        this.uIUseOfForceCheckBox = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_chkUseofForce');
        this.uINIBRSEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_cddNibrs_CodeValue');
        this.uIChargeCodeEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_lupCharge_CodeValue');
        this.uINextButton = page.locator('#grdCBEReports_ctl00_lnkbtnNext');
        this.uINewSearchNameEdit = page.locator('#txtNewSearchName');
        this.uIClickSaveButton = page.locator('#btnSave');
        this.uISelectFromSavedQuery = page.locator('#cddSelectfromSavedQuery');
        this.uICommonNameEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_lsLocationSearch_TxtCommonName');
        this.uITrackingEdit = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_lupTracking_CodeValue');
        this.uIMondayCheckbox = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_chkMonday');
        this.uIFridayCheckbox = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_chkFriday');
        this.uITuesdayCheckbox = page.locator('#tabCBE_tmpl0_ctrlUsrCaseSrchBasic_chkTuesday');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async enterAtCaseNo(caseNo?: string): Promise<void> {
        const val = caseNo || BaseData.getPoliceModuleValue('CaseNo');
        await this.uICaseYearEdit.fill(val.substring(0, 2));
        await this.uICaseNumberEdit.fill(val.substring(3));
        await this.uICaseNumberEdit.press('Tab');
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clickReset(): Promise<void> {
        await this.uIResetButton.click();
    }

    async clickBackButton(): Promise<void> {
        await this.uIBackButton.click();
    }

    async selectRowByAtCaseNo(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICaseSearchTable, BaseData.getPoliceModuleValue('CaseNo'));
    }
}

export class CaseUpdatePage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uICaseDataTab: Locator;
    readonly uIReportingTab: Locator;
    readonly uICADDataTab: Locator;
    readonly uIMapTab: Locator;
    readonly uINamesTab: Locator;
    readonly uIRelatedCasesTab: Locator;
    readonly uIPropertyTab: Locator;
    readonly uIUCRTab: Locator;
    readonly uINIBRSCheckTab: Locator;
    readonly uIMOTab: Locator;
    readonly uIActivityLogTab: Locator;
    readonly uIAttachmentsTab: Locator;
    readonly uISuspectsTab: Locator;
    readonly uIVehicleTab: Locator;
    readonly uICJRSTab: Locator;
    readonly uINotForPublicCheckBox: Locator;
    readonly uIReportedDateTextView: Locator;
    readonly uIReportedTimeEdit: Locator;
    readonly uILocationEdit: Locator;
    readonly uICMIconButton: Locator;
    readonly uISaveButton: Locator;
    readonly uICaseManagementIcon: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIALCIcon: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIUseOfForceTab: Locator;
    readonly uICallInfoIcon: Locator;
    readonly uIResetButton: Locator;
    readonly uINIBRSCheckSpanColorTab: Locator;
    readonly uICallYearEdit: Locator;
    readonly uICallNumberEdit: Locator;
    readonly uICrashIcon: Locator;
    readonly uIK9ReportIcon: Locator;
    readonly uICoronerIcon: Locator;
    readonly uICitationIcon: Locator;
    readonly uICJRSSpanColorTab: Locator;
    readonly uIDiscoveryRequestLink: Locator;
    readonly uINotificationIcon: Locator;
    readonly uICaseStatusCodeEdit: Locator;
    readonly uICaseStatusDescriptionEdit: Locator;
    readonly uIJurisCombobox: Locator;
    readonly uIDoNotDistributeReportsCheckbox: Locator;
    readonly uIDoNotDistributeReportsTextView: Locator;
    readonly uIOffenderName: Locator;
    readonly uIDNDStatusTextView: Locator;
    readonly uIDoNotPurgeCheckBox: Locator;
    readonly uIRequestTab: Locator;
    readonly uIANCATab: Locator;
    readonly uICommonNameLabel: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uIGoToToolBar: Locator;
    readonly uIDAPackageIcon: Locator;
    readonly uITaskTab: Locator;
    readonly uIQaFormTab: Locator;
    readonly uILocationInfoIcon: Locator;
    readonly uIRefreshIcon: Locator;
    readonly uIRetainUntilField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uICaseYearEdit = page.locator('#nbrCaseNumber_Year');
        this.uICaseNumberEdit = page.locator('#nbrCaseNumber_Number');
        this.uICaseDataTab = page.locator("(//span[contains(text(),'Case Data')])");
        this.uIReportingTab = page.locator("(//span[contains(text(),'Reporting')])");
        this.uICADDataTab = page.locator("(//span[contains(text(),'CAD Data')])");
        this.uIMapTab = page.locator("(//span[contains(text(),'Map')])");
        this.uINamesTab = page.locator("(//span[contains(text(),'Names')])");
        this.uIRelatedCasesTab = page.locator("(//span[contains(text(),'Related Cases')])");
        this.uIPropertyTab = page.locator("(//span[contains(text(),'Property')])");
        this.uIUCRTab = page.locator("(//span[contains(text(),'UCR')])");
        this.uINIBRSCheckTab = page.locator("(//span[contains(text(),'NIBRS Check')])");
        this.uIMOTab = page.locator("(//span[contains(text(),'MO')])");
        this.uIActivityLogTab = page.locator("(//span[contains(text(),'Activity Log')])");
        this.uIAttachmentsTab = page.locator("(//span[contains(text(),'Attachments')])");
        this.uISuspectsTab = page.locator("(//span[contains(text(),'Suspects')])");
        this.uIVehicleTab = page.locator("(//span[contains(text(),'Vehicle')])");
        this.uICJRSTab = page.locator("(//span[contains(text(),'CJRS')])");
        this.uINotForPublicCheckBox = page.locator('#chkNotForPublic');
        this.uIReportedDateTextView = page.locator('#dttmReported_Date_KPIDttmCtrl');
        this.uIReportedTimeEdit = page.locator("//table[@id='dttmReported_Time']//input");
        this.uILocationEdit = page.locator('#addrFinalLoc_txtFrom');
        this.uICMIconButton = page.locator('#cmdInvest');
        this.uISaveButton = page.locator('#cmdSave');
        this.uICaseManagementIcon = page.locator('#cmdInvest');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIALCIcon = page.locator('#ALC');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uIUseOfForceTab = page.locator("(//span[contains(text(),'Use Of Force')])");
        this.uICallInfoIcon = page.locator('#nbrCallNumber_imgBtn');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uINIBRSCheckSpanColorTab = page.locator("//span[@mkr = 'ti11']");
        this.uICallYearEdit = page.locator('#nbrCallNumber_Year');
        this.uICallNumberEdit = page.locator('#nbrCallNumber_Number');
        this.uICrashIcon = page.locator('#imgCrash');
        this.uIK9ReportIcon = page.locator('#imgK9Report');
        this.uICoronerIcon = page.locator('#iconCoroner');
        this.uICitationIcon = page.locator('#imgSummon');
        this.uICJRSSpanColorTab = page.locator("//span[@mkr = 'ti12']");
        this.uIDiscoveryRequestLink = page.locator('#lnkDiscoveryList');
        this.uINotificationIcon = page.locator('#btnNotify');
        this.uICaseStatusCodeEdit = page.locator('#lupStatusUpdate_CodeValue');
        this.uICaseStatusDescriptionEdit = page.locator('#lupStatusUpdate_CodeDescription');
        this.uIJurisCombobox = page.locator('#lstJuris');
        this.uIDoNotDistributeReportsCheckbox = page.locator('#chkDNDRpt');
        this.uIDoNotDistributeReportsTextView = page.locator("//label[@for = 'chkDNDRpt']");
        this.uIOffenderName = page.locator("//th[text()='Offender Name']");
        this.uIDNDStatusTextView = page.locator('#lblDNDrptMsg');
        this.uIDoNotPurgeCheckBox = page.locator('#chkDNP');
        this.uIRequestTab = page.locator("(//span[contains(text(),'Request')])[2]");
        this.uIANCATab = page.locator("//span[contains(text(),'ANCA#')]");
        this.uICommonNameLabel = page.locator('#lblCommanName');
        this.uILeftSideStatusBar = page.locator("//div[@id = 'tab0']//td[@class = 'statusBar']");
        this.uIGoToToolBar = page.locator('#radToolBar');
        this.uIDAPackageIcon = page.locator('#imgPhoenixDA');
        this.uITaskTab = page.locator("(//span[contains(text(),'Task')])");
        this.uIQaFormTab = page.locator("(//span[contains(text(),'QA Forms')])");
        this.uILocationInfoIcon = page.locator('#addrFinalLoc_cmdIncOnAddr');
        this.uIRefreshIcon = page.locator('#cmdRefresh');
        this.uIRetainUntilField = page.locator('#cddRetain_KPIDttmCtrl');
    }

    async clickReportingTab(): Promise<void> {
        await this.uIReportingTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmCBEReports');
    }

    async clickNamesTab(): Promise<void> {
        await this.uINamesTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmCBENames');
    }

    async clickCaseDataTab(): Promise<void> {
        await this.uICaseDataTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmCBEACD');
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async SaveNClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await this.popup.confirmYes();
    }

    async closeTheScreen(): Promise<void> {
        await this.page.close();
    }

    async readCaseNo(): Promise<string> {
        const year = await this.uICaseYearEdit.inputValue();
        const num = await this.uICaseNumberEdit.inputValue();
        return `${year}-${num}`;
    }
}

export class CaseUpdateReportingTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly uIReportingTable: Locator;
    readonly uIViewCaseFileButton: Locator;
    readonly uIViewCaseFilePopUpScreenSelectAllCheckbox: Locator;
    readonly uIViewCaseFilePopUpScreenIncludeProeprtyReportCheckbox: Locator;
    readonly uIViewCaseFilePopUpScreenShowPDFButton: Locator;
    readonly uIAddReportButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uISaveButton: Locator;
    readonly uIIncludeCombinedCheckBox: Locator;
    readonly uISelectAllCheckBox: Locator;
    readonly uIIncidentReportLabel: Locator;
    readonly uIIncidentReportStatusTextView: Locator;
    readonly uIPropertyReportLabel: Locator;
    readonly uIPropertyReportStatusTextView: Locator;
    readonly uIPropertyRedactIcon: Locator;
    readonly uIDeletingReportPopup: Locator;
    readonly uIYesButton: Locator;
    readonly uISoleSupervisorEdit: Locator;
    readonly uISoleSupervisorDescription: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.uIReportingTable = page.locator('#grdCBEReports');
        this.uIViewCaseFileButton = page.locator('#cmdPrintAll');
        this.uIViewCaseFilePopUpScreenSelectAllCheckbox = page.locator('#chkIncAll');
        this.uIViewCaseFilePopUpScreenIncludeProeprtyReportCheckbox = page.locator('#chkPrintRPT');
        this.uIViewCaseFilePopUpScreenShowPDFButton = page.locator('#cmdIncRpt');
        this.uIAddReportButton = page.locator('#cmdAddReport');
        this.uIRefreshButton = page.locator('#btnRefresh');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIIncludeCombinedCheckBox = page.locator('#chkShowPageNumber');
        this.uISelectAllCheckBox = page.locator('#chkIncSelectAll');
        this.uIIncidentReportLabel = page.locator("//label[@for='chkIncAllList_1']");
        this.uIIncidentReportStatusTextView = page.locator("//label/span[@class = 'hideThis']");
        this.uIPropertyReportLabel = page.locator("//label[@for='chkIncAllList_3']");
        this.uIPropertyReportStatusTextView = page.locator("//label[@for ='chkIncAllList_3']/span[@class = 'hideThis']");
        this.uIPropertyRedactIcon = page.locator("//img[contains(@id,'_imgRedacted')]");
        this.uIDeletingReportPopup = page.locator("//div[@class='modal-body']");
        this.uIYesButton = page.locator("//button[@class='confirm btn btn-primary']");
        this.uISoleSupervisorEdit = page.locator('#lupSoleSupervisor_CodeValue');
        this.uISoleSupervisorDescription = page.locator('#lupSoleSupervisor_CodeDescription');
    }

    async clickAddReportButton(): Promise<void> {
        await this.uIAddReportButton.click();
    }

    async selectRowByAtType(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIReportingTable, BaseData.getPoliceModuleValue('Type'));
    }
}

export class CaseUpdateNamesTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly uINameTypeEdit: Locator;
    readonly uINameTypeIDEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uIActivityComboBox: Locator;
    readonly uIAddNameButton: Locator;
    readonly uIClearButton: Locator;
    readonly uISaveNamesTabButton: Locator;
    readonly uINamesTabResultTable: Locator;
    readonly uINamesTable: Locator;
    readonly uILeokaIcon: Locator;
    readonly uIDVEntryIcon: Locator;
    readonly uIQAFormButton: Locator;
    readonly uILastNameText: Locator;
    readonly uIFirstNameText: Locator;
    readonly uIPrintIcon: Locator;
    readonly uINameInfoIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.uINameTypeEdit = page.locator('#nmcIncident_NameType');
        this.uINameTypeIDEdit = page.locator('#nmcIncident_NameTypeID');
        this.uIAddressEdit = page.locator('#txtAddress');
        this.uIActivityComboBox = page.locator('#cddActivity_DropDown');
        this.uIAddNameButton = page.locator('#imgAddName');
        this.uIClearButton = page.locator('#imgClearName');
        this.uISaveNamesTabButton = page.locator('#cmdInternalSave');
        this.uINamesTabResultTable = page.locator('#grdCBENames');
        this.uINamesTable = page.locator('#grdCBENames');
        this.uILeokaIcon = page.locator("//div[@id ='grdCBENames']//table//td//img[@title = 'LEOKA']");
        this.uIDVEntryIcon = page.locator("//img[@title='Domestic Violence']");
        this.uIQAFormButton = page.locator('#imgQAForm');
        this.uILastNameText = page.locator('#nmcIncident_LastName');
        this.uIFirstNameText = page.locator('#nmcIncident_FirstName');
        this.uIPrintIcon = page.locator('#cmdPrint');
        this.uINameInfoIcon = page.locator('#nmcIncident_imgSrch');
    }

    async selectRowByAtName(i?: number): Promise<void> {
        const val = i ? BaseData.getPoliceModuleValue(`Name${i}`) : BaseData.getPoliceModuleValue('Name');
        await this.grid.selectRowByCellText(this.uINamesTable, val);
    }
}

export class CaseUpdateCaseDataTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly uICFSCodeEdit: Locator;
    readonly uICFSGridResultTable: Locator;
    readonly uIOccuredAtDateEdit: Locator;
    readonly uIOccuredAtTimeEdit: Locator;
    readonly uIADDCFSButton: Locator;
    readonly uIUsedBodyWornCheckBox: Locator;
    readonly uIDomesticViolenceComboBox: Locator;
    readonly uIUnknownCheckBox: Locator;
    readonly uIPoliceForceUsedComboBox: Locator;
    readonly uIInternalSaveButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIPursuitButton: Locator;
    readonly uIChargeLookupIcon: Locator;
    readonly uIOccuredBetweenDateEdit: Locator;
    readonly uIInCarVideoCheckBox: Locator;
    readonly uIIdentityTheft: Locator;
    readonly uIIdentityTheftComboBox: Locator;
    readonly uIChargeLable: Locator;
    readonly uICaseFileSentToDACheckbox: Locator;
    readonly uIEvidenceComboBox: Locator;
    readonly uIEvidenceTextBox: Locator;
    readonly uIADDEvidenceButton: Locator;
    readonly uIOccuredToDateEdit: Locator;
    readonly uIOccuredToTimeEdit: Locator;
    readonly uIOccuredBetweenTimeEdit: Locator;
    readonly uIPoliceForceUsedInfoIcon: Locator;
    readonly uISceneDropdown: Locator;
    readonly uIDamageAmount: Locator;
    readonly uIDamageAmountLabel: Locator;
    readonly uIDomesticViolationComboBox: Locator;
    readonly uIPoliceForceUsedLabel: Locator;
    readonly uITypeOfSecurityLabel: Locator;
    readonly uISceneLabel: Locator;
    readonly uIDomesticViolenceLabel: Locator;
    readonly uISafeEnteredLabel: Locator;
    readonly uIGamblingInvolvedLabel: Locator;
    readonly uIAbandonedStructureDropdown: Locator;
    readonly uIAbandonedStructureLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.uICFSCodeEdit = page.locator('#lupCADCFS_CodeValue');
        this.uICFSGridResultTable = page.locator('#grdCBEFTC');
        this.uIOccuredAtDateEdit = page.locator('#dttmOccuredAt_Date_KPIDttmCtrl');
        this.uIOccuredAtTimeEdit = page.locator("//table[@id='dttmOccuredAt_Time']//input");
        this.uIADDCFSButton = page.locator('#imgAddCFS');
        this.uIUsedBodyWornCheckBox = page.locator('#chkBodyWorn');
        this.uIDomesticViolenceComboBox = page.locator('#cddDomesticViolence_DropDown');
        this.uIUnknownCheckBox = page.locator('#chkUnknown');
        this.uIPoliceForceUsedComboBox = page.locator('#cddPoliceForceUsed_DropDown');
        this.uIInternalSaveButton = page.locator('#cmdInternalSave');
        this.uIResetButton = page.locator('#cmdInternalRefresh');
        this.uIPursuitButton = page.locator('#cmdPursuit');
        this.uIChargeLookupIcon = page.locator('#lupCADCFS_imgBtn');
        this.uIOccuredBetweenDateEdit = page.locator('#dttmOccuredFrom_Date_KPIDttmCtrl');
        this.uIInCarVideoCheckBox = page.locator('#ChkIsCar');
        this.uIIdentityTheft = page.locator('#lblUserDefinedCode');
        this.uIIdentityTheftComboBox = page.locator('#cddUserDefinedCode_DropDown');
        this.uIChargeLable = page.locator('#lblCADCFS');
        this.uICaseFileSentToDACheckbox = page.locator('#chkCaseNotify');
        this.uIEvidenceComboBox = page.locator('#cddEvidence_DropDown');
        this.uIEvidenceTextBox = page.locator('#txtOthers');
        this.uIADDEvidenceButton = page.locator('#imgAddEvidence');
        this.uIOccuredToDateEdit = page.locator('#dttmOccuredTo_Date_KPIDttmCtrl');
        this.uIOccuredToTimeEdit = page.locator("//table[@id='dttmOccuredTo_Time']//input");
        this.uIOccuredBetweenTimeEdit = page.locator("//table[@id='dttmOccuredFrom_Time']//input");
        this.uIPoliceForceUsedInfoIcon = page.locator('#imgPF');
        this.uISceneDropdown = page.locator('#cddScene_DropDown');
        this.uIDamageAmount = page.locator('#txtDamageAmount');
        this.uIDamageAmountLabel = page.locator('#lblDamageAmount');
        this.uIDomesticViolationComboBox = page.locator('#cddDomesticViolence_DropDown');
        this.uIPoliceForceUsedLabel = page.locator('#lblPoliceForceUsed');
        this.uITypeOfSecurityLabel = page.locator('#lblTypeOfSecurity');
        this.uISceneLabel = page.locator('#lblScene');
        this.uIDomesticViolenceLabel = page.locator('#lblDomesticViolence');
        this.uISafeEnteredLabel = page.locator('#lblSafeEntered');
        this.uIGamblingInvolvedLabel = page.locator('#lblGamblingInvolved');
        this.uIAbandonedStructureDropdown = page.locator('#cddAbandonedStructure_DropDown');
        this.uIAbandonedStructureLabel = page.locator('#lblAbandonedStructure');
    }

    async clickCFSAddButton(): Promise<void> {
        await this.uIADDCFSButton.click();
    }

    async saveInternalTab(): Promise<void> {
        await this.uIInternalSaveButton.click();
        await this.popup.confirmYes();
    }
}

export class WalkInEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uIJurisComboBox: Locator;
    readonly uICaseNoEdit: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICallNoEdit: Locator;
    readonly uICallYearEdit: Locator;
    readonly uICADCFSCodeEdit: Locator;
    readonly uICADCFSTextEdit: Locator;
    readonly uICADCFSlupButton: Locator;
    readonly uIReportedDate: Locator;
    readonly uIReportedTimeEdit: Locator;
    readonly uILocationEdit: Locator;
    readonly uILocationVerifyCheckBox: Locator;
    readonly uILocationEditOld: Locator;
    readonly uILocationVerifyCheckBoxOld: Locator;
    readonly uIRcvSourceCodeEdit: Locator;
    readonly uIRcvSourceDescTextEdit: Locator;
    readonly uIRcvSourcelupButton: Locator;
    readonly uICADDispositionCodeEdit: Locator;
    readonly uICADDispositionDescTextEdit: Locator;
    readonly uICADDispostionlupButton: Locator;
    readonly uIUnitCodeEdit: Locator;
    readonly uIUnitDescTextEdit: Locator;
    readonly uIUnitLookupButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uILocationInfoIcon: Locator;
    readonly uIConfirmMessageTextView: Locator;
    readonly uIYesButton: Locator;
    readonly uINameIDTypeEdit: Locator;
    readonly uINameIDEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIActivityDropdown: Locator;
    readonly uICommentsEdit: Locator;
    readonly uICreateCallInCADForDispatchCheckBox: Locator;
    readonly uIActivityLabel: Locator;
    readonly uILocationInfoIconOld: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uICSZCityEdit: Locator;
    readonly uICSZStateDropdown: Locator;
    readonly uICSZZipEdit: Locator;
    readonly uINameLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uIJurisComboBox = page.locator('#lstJuris');
        this.uICaseNoEdit = page.locator('#nbrCaseNumber_Year');
        this.uICaseYearEdit = page.locator('#nbrCaseNumber_Number');
        this.uICallNoEdit = page.locator('#nbrCallNumber_Year');
        this.uICallYearEdit = page.locator('#nbrCallNumber_Number');
        this.uICADCFSCodeEdit = page.locator('#lupCADCFS_CodeValue');
        this.uICADCFSTextEdit = page.locator('#lupCADCFS_CodeDescription');
        this.uICADCFSlupButton = page.locator('#lupCADCFS_imgBtn');
        this.uIReportedDate = page.locator('#dttmReported_Date_KPIDttmCtrl');
        this.uIReportedTimeEdit = page.locator("//table[@id='dttmReported_Time']//input");
        this.uILocationEdit = page.locator('#addrLoc_txtFrom');
        this.uILocationVerifyCheckBox = page.locator('#addrLoc_chkVerify');
        this.uILocationEditOld = page.locator('#addrCallCompletionLoc_txtFrom');
        this.uILocationVerifyCheckBoxOld = page.locator('#addrCallCompletionLoc_chkVerify');
        this.uIRcvSourceCodeEdit = page.locator('#cddRcvSource_CodeValue');
        this.uIRcvSourceDescTextEdit = page.locator('#cddRcvSource_CodeDescription');
        this.uIRcvSourcelupButton = page.locator('#cddRcvSource_imgBtn');
        this.uICADDispositionCodeEdit = page.locator('#lupCADDisposition_CodeValue');
        this.uICADDispositionDescTextEdit = page.locator('#lupCADDisposition_CodeDescription');
        this.uICADDispostionlupButton = page.locator('#lupCADDisposition_imgBtn');
        this.uIUnitCodeEdit = page.locator('#lupPrimeUnit_CodeValue');
        this.uIUnitDescTextEdit = page.locator('#lupPrimeUnit_CodeDescription');
        this.uIUnitLookupButton = page.locator('#lupPrimeUnit_imgBtn');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uILocationInfoIcon = page.locator('#addrLoc_cmdIncOnAddr');
        this.uIConfirmMessageTextView = page.locator("//div[@class = 'modal-body']");
        this.uIYesButton = page.locator("//button[contains(text(),'Yes')]");
        this.uINameIDTypeEdit = page.locator('#nmcIncident_NameType');
        this.uINameIDEdit = page.locator('#nmcIncident_NameTypeID');
        this.uIFirstNameEdit = page.locator('#nmcIncident_FirstName');
        this.uIActivityDropdown = page.locator('#cddActivity_DropDown');
        this.uICommentsEdit = page.locator('#txtComments');
        this.uICreateCallInCADForDispatchCheckBox = page.locator('#chkRequ');
        this.uIActivityLabel = page.locator('#lblActivity');
        this.uILocationInfoIconOld = page.locator('#addrCallCompletionLoc_cmdIncOnAddr');
        this.uILastNameEdit = page.locator('#nmcIncident_LastName');
        this.uIAddressEdit = page.locator('#txtAddress');
        this.uICSZCityEdit = page.locator('#nameCSZ_City');
        this.uICSZStateDropdown = page.locator('#nameCSZ_State_DropDown');
        this.uICSZZipEdit = page.locator('#nameCSZ_Zip');
        this.uINameLabel = page.locator('#lblName');
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForTimeout(1000);
        await this.popup.confirmYes();
    }

    async enterAtCADCFS(): Promise<void> {
        await this.uICADCFSCodeEdit.fill(BaseData.getPoliceModuleValue('CADCFS'));
        await this.uICADCFSCodeEdit.press('Tab');
    }

    async enterAtLocation(): Promise<void> {
        await this.uILocationEdit.clear();
        await this.uILocationEdit.fill(BaseData.getPoliceModuleValue('Location'));
        await this.uILocationEdit.press('Tab');
    }
}

export class ReportManagerPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uIStatusComboBox: Locator;
    readonly uIReportedbyPFCodeValue: Locator;
    readonly uIReportedDateEdit: Locator;
    readonly uIReportedTimeEdit: Locator;
    readonly uIMenubarStatus: Locator;
    readonly uIMainTabSpan: Locator;
    readonly uIUpdateStatusSpan: Locator;
    readonly uIHistoryTabSpan: Locator;
    readonly uIQAFormTabSpan: Locator;
    readonly uIReportedByPFInfoIcon: Locator;
    readonly uIReportedByPFSearchButton: Locator;
    readonly uICaseInfoButton: Locator;
    readonly uITypeComboBox: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uIViewReportButton: Locator;
    readonly uINIBRSCheckTabSpan: Locator;
    readonly uINIBRSCheckSpanColorTab: Locator;
    readonly uIReportDescriptionEdit: Locator;
    readonly uIReportDescriptionLabel: Locator;
    readonly uIStatementNameComboBox: Locator;
    readonly uIConfirmMessageTextView: Locator;
    readonly uIYesButton: Locator;
    readonly uINoButton: Locator;
    readonly uISaveCloseButton: Locator;
    readonly uISaveButton: Locator;
    readonly uIStatusBar: Locator;
    readonly uIALCIcon: Locator;
    readonly uILabelStatus: Locator;
    readonly uIReportedByPFDescription: Locator;
    readonly uIReportTitleLabel: Locator;
    readonly uIReportTitleDropdown: Locator;
    readonly deleteIcon: Locator;
    readonly uIDeletingReportPopup: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uIStatusComboBox = page.locator('#lstReportStatus');
        this.uIReportedbyPFCodeValue = page.locator('#lupReportedPF_CodeValue');
        this.uIReportedDateEdit = page.locator('#dttReported_Date_KPIDttmCtrl');
        this.uIReportedTimeEdit = page.locator("//table[@id='dttReported_Time']//input");
        this.uIMenubarStatus = page.locator('#lblRptStatus');
        this.uIMainTabSpan = page.locator("//span[contains(text(),'Main')]");
        this.uIUpdateStatusSpan = page.locator("//span[contains(text(),'Update Status')]");
        this.uIHistoryTabSpan = page.locator("//span[contains(text(),'History')]");
        this.uIQAFormTabSpan = page.locator("//span[contains(text(),'QA Forms')]");
        this.uIReportedByPFInfoIcon = page.locator('#lupReportedPF_cmdIncOnAddr');
        this.uIReportedByPFSearchButton = page.locator('#lupReportedPF_imgBtn');
        this.uICaseInfoButton = page.locator('#numCaseNumber_imgBtn');
        this.uITypeComboBox = page.locator('#cddRptType_DropDown');
        this.uICaseYearEdit = page.locator('#numCaseNumber_Year');
        this.uICaseNumberEdit = page.locator('#numCaseNumber_Number');
        this.uIViewReportButton = page.locator('#btnViewReport');
        this.uINIBRSCheckTabSpan = page.locator("//span[contains(text(),'NIBRS Check')]");
        this.uINIBRSCheckSpanColorTab = page.locator("//span[@mkr = 'ti11']");
        this.uIReportDescriptionEdit = page.locator('#txtRptDesc');
        this.uIReportDescriptionLabel = page.locator('#lblRptDesc');
        this.uIStatementNameComboBox = page.locator('#cddStatementName');
        this.uIConfirmMessageTextView = page.locator("//div[@class = 'modal-body']");
        this.uIYesButton = page.locator("//button[contains(text(),'Yes')]");
        this.uINoButton = page.locator("//button[contains(text(),'No')]");
        this.uISaveCloseButton = page.locator('#cmdSaveNClose');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIStatusBar = page.locator("//td[@class='statusBar']/b");
        this.uIALCIcon = page.locator('#ALC');
        this.uILabelStatus = page.locator('#lblRptStatus');
        this.uIReportedByPFDescription = page.locator('#lupReportedPF_CodeDescription');
        this.uIReportTitleLabel = page.locator('#lblRptTitle');
        this.uIReportTitleDropdown = page.locator('#cddRptTitle_DropDown');
        this.deleteIcon = page.locator('#cmdDelete');
        this.uIDeletingReportPopup = page.locator("//div[@class='modal-body']");
    }

    async selectTypeAsIncidentReport(): Promise<void> {
        await this.uITypeComboBox.selectOption({ label: 'Incident Report' });
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }
}

export class ReportStatusPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uIReportDetailsButton: Locator;
    readonly uICaseDataButton: Locator;
    readonly uINamesButton: Locator;
    readonly uISuspectButton: Locator;
    readonly uIPropertyButton: Locator;
    readonly uIVehicleButton: Locator;
    readonly uISummaryButton: Locator;
    readonly uINarrativeButton: Locator;
    readonly uIQAFormButton: Locator;
    readonly uIAttachmentsButton: Locator;
    readonly uIRedactButton: Locator;
    readonly uIReportHistroyButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIReportStatus: Locator;
    readonly uIPaperIcon: Locator;
    readonly uIArrestButton: Locator;
    readonly uIUseOfForceButton: Locator;
    readonly uIConfigrueMailExtenstionButton: Locator;
    readonly uIdownloadMailExtensionSdkLink: Locator;
    readonly uIDistributeReportButton: Locator;
    readonly uIAssignRefreshButton: Locator;
    readonly uIAssignNextButton: Locator;
    readonly uIAssignPreviousButton: Locator;
    readonly uIAssignCaseButton: Locator;
    readonly uIAssignCaseNoInfoIcon: Locator;
    readonly uISendEmailButton: Locator;
    readonly uISendEmailTo: Locator;
    readonly uISendEmailSubject: Locator;
    readonly uISendEmailAttachmentName: Locator;
    readonly uISendEmaiMassage: Locator;
    readonly uISendEmaiSendButton: Locator;
    readonly uISendEmailCancleButton: Locator;
    readonly uISendEmaiCloseButton: Locator;
    readonly uISendEmaiErrorMsg: Locator;
    readonly uISendEmaiTotext: Locator;
    readonly uINibrsCheckButton: Locator;
    readonly uIReportStatusRefreshButton: Locator;
    readonly uIReportStatusNextButton: Locator;
    readonly uIReportStatusPreviousButton: Locator;
    readonly uIReviewedCheckBox: Locator;
    readonly uIDNDReportInStatusBar: Locator;
    readonly uIHeaderButtons: Locator;
    readonly uICrashIcon: Locator;
    readonly uIDeleteIcon: Locator;
    readonly uILastNameEditQAForm: Locator;
    readonly uIFirstNameEditQAForm: Locator;
    readonly uISaveNExitButton: Locator;
    readonly uI404ErrorMessage: Locator;
    readonly uIAssignToCmButton: Locator;
    readonly uITowButton: Locator;
    readonly uIPursuitReportButton: Locator;
    readonly uIDeleteButton: Locator;
    readonly uIIfStatmentApplicationIsNotWorkingPleaseClickHereToInstallLink: Locator;
    readonly uIDeletingReportPopup: Locator;
    readonly uIOkButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uIReportDetailsButton = page.locator('#cmdReportDetails');
        this.uICaseDataButton = page.locator('#cmdCaseData');
        this.uINamesButton = page.locator('#cmdNames');
        this.uISuspectButton = page.locator('#cmdSuspect');
        this.uIPropertyButton = page.locator('#cmdProperty');
        this.uIVehicleButton = page.locator('#cmdVehicle');
        this.uISummaryButton = page.locator('#cmdSummary');
        this.uINarrativeButton = page.locator('#cmdNarrative');
        this.uIQAFormButton = page.locator('#cmdQAForm');
        this.uIAttachmentsButton = page.locator('#cmdAttachment');
        this.uIRedactButton = page.locator('#cmdRedact');
        this.uIReportHistroyButton = page.locator('#cmdReportComments');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIReportStatus = page.locator('#lblRptStatus');
        this.uIPaperIcon = page.locator('#cmdImgAttach');
        this.uIArrestButton = page.locator('#cmdArrest');
        this.uIUseOfForceButton = page.locator('#cmdUseofForce');
        this.uIConfigrueMailExtenstionButton = page.locator('#cmdMail');
        this.uIdownloadMailExtensionSdkLink = page.locator("//div//p/a[contains(text(),'Click here to download MailExtension Sdk.')]");
        this.uIDistributeReportButton = page.locator('#cmdDistribute');
        this.uIAssignRefreshButton = page.locator('#btnRefresh');
        this.uIAssignNextButton = page.locator('#btnNext');
        this.uIAssignPreviousButton = page.locator('#btnPrevious');
        this.uIAssignCaseButton = page.locator('#btnAssign');
        this.uIAssignCaseNoInfoIcon = page.locator('#nbrCaseNumber_imgBtn');
        this.uISendEmailButton = page.locator('#cmdEmail');
        this.uISendEmailTo = page.locator('#txttomail');
        this.uISendEmailSubject = page.locator('#txtSubject');
        this.uISendEmailAttachmentName = page.locator('#lblAttachedFileName');
        this.uISendEmaiMassage = page.locator('#txtMessage');
        this.uISendEmaiSendButton = page.locator('#cmdSendEmail');
        this.uISendEmailCancleButton = page.locator("//div[@id='emailCont']//input[2]");
        this.uISendEmaiCloseButton = page.locator('#cmdCancel');
        this.uISendEmaiErrorMsg = page.locator('#lblError');
        this.uISendEmaiTotext = page.locator('#lblMailTo');
        this.uINibrsCheckButton = page.locator('#cmdNibrsCheck');
        this.uIReportStatusRefreshButton = page.locator('#btnRefresh');
        this.uIReportStatusNextButton = page.locator('#btnNext');
        this.uIReportStatusPreviousButton = page.locator('#btnPrevious');
        this.uIReviewedCheckBox = page.locator('#chkReviewed');
        this.uIDNDReportInStatusBar = page.locator('#lblDNDMsg');
        this.uIHeaderButtons = page.locator('#trExisting');
        this.uICrashIcon = page.locator('#cmdCrash');
        this.uIDeleteIcon = page.locator('#cmdDelete');
        this.uILastNameEditQAForm = page.locator("//input[@name='LastName']");
        this.uIFirstNameEditQAForm = page.locator("//input[@name='FirstName']");
        this.uISaveNExitButton = page.locator('#saveExit');
        this.uI404ErrorMessage = page.locator("//div[@class='content-container']");
        this.uIAssignToCmButton = page.locator('#cmdAssigntoCM');
        this.uITowButton = page.locator('#cmdTow');
        this.uIPursuitReportButton = page.locator('#cmdPursuitRpt');
        this.uIDeleteButton = page.locator('#cmdDelete');
        this.uIIfStatmentApplicationIsNotWorkingPleaseClickHereToInstallLink = page.locator('#lnkDownload');
        this.uIDeletingReportPopup = page.locator("(//div[@class='modal-body'])[2]");
        this.uIOkButton = page.locator("(//button[@class='confirm btn btn-primary'])[2]");
    }

    async clickReportDetails(): Promise<void> {
        await this.uIReportDetailsButton.click();
    }

    async clickNarrativeButton(): Promise<void> {
        await this.uINarrativeButton.click();
    }
}

export class ACDPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uIChargeSearchButton: Locator;
    readonly uIChargeCodeValue: Locator;
    readonly uIAddCFS: Locator;
    readonly uIOccuredAtDateEdit: Locator;
    readonly uIOccuredAtTimeEdit: Locator;
    readonly uISaveNClose: Locator;
    readonly uIDomesticViolationComboBox: Locator;
    readonly uIPopupCopyChargeGridTable: Locator;
    readonly uIPopupChargeCopyButton: Locator;
    readonly uIPopupChargeCancelButton: Locator;
    readonly uIACDChargeGridTable: Locator;
    readonly uIDamageAmountEdit: Locator;
    readonly uIUsedBodyWornCameraCheckbox: Locator;
    readonly uISaveButton: Locator;
    readonly uIPoliceForceUsedComboBox: Locator;
    readonly uIUnknownCheckbox: Locator;
    readonly uIOccuredBetweenDateEdit: Locator;
    readonly uIOccuredBetweenTimeEdit: Locator;
    readonly uIOccuredAndDateEdit: Locator;
    readonly uIOccuredToTimeEdit: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uIChargeLable: Locator;
    readonly uIGamblingLabel: Locator;
    readonly uISafeEnteredLabel: Locator;
    readonly uIGamblingInvolvedCombobox: Locator;
    readonly uISafeEnteredCombobox: Locator;
    readonly uIIdentityTheft: Locator;
    readonly uIIdentityTheftComboBox: Locator;
    readonly uIPursuitReport: Locator;
    readonly uIReportedDateValue: Locator;
    readonly uICaseFileSentToDA: Locator;
    readonly uIOccuredAtClearButton: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIOccuredAtLabel: Locator;
    readonly uIOccuredBetweenLabel: Locator;
    readonly uIOccurredAndLabel: Locator;
    readonly uIPoliceForceUsedInfoIcon: Locator;
    readonly uIPoliceForceUsedLabel: Locator;
    readonly uITypeOfSecurityLabel: Locator;
    readonly uIAbandonedStructureDropdown: Locator;
    readonly uIAbandonedStructureLabel: Locator;
    readonly uISceneLabel: Locator;
    readonly uISceneDropdown: Locator;
    readonly uIDamageAmountLabel: Locator;
    readonly uIDomesticViolationLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uIChargeSearchButton = page.locator('#lupCADCFS_imgBtn');
        this.uIChargeCodeValue = page.locator('#lupCADCFS_CodeValue');
        this.uIAddCFS = page.locator('#imgAddCFS');
        this.uIOccuredAtDateEdit = page.locator('#dttmOccuredAt_Date_KPIDttmCtrl');
        this.uIOccuredAtTimeEdit = page.locator("//table[@id='dttmOccuredAt_Time']//input");
        this.uISaveNClose = page.locator('#cmdSaveNClose');
        this.uIDomesticViolationComboBox = page.locator('#cddDomesticViolence_DropDown');
        this.uIPopupCopyChargeGridTable = page.locator('#grdChargeLst');
        this.uIPopupChargeCopyButton = page.locator('#cmdCopy');
        this.uIPopupChargeCancelButton = page.locator('#cmdCancel');
        this.uIACDChargeGridTable = page.locator('#grdCBEFTC');
        this.uIDamageAmountEdit = page.locator('#txtDamageAmount');
        this.uIUsedBodyWornCameraCheckbox = page.locator('#chkBodyWorn');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIPoliceForceUsedComboBox = page.locator('#cddPoliceForceUsed_DropDown');
        this.uIUnknownCheckbox = page.locator('#chkUnknown');
        this.uIOccuredBetweenDateEdit = page.locator('#dttmOccuredFrom_Date_KPIDttmCtrl');
        this.uIOccuredBetweenTimeEdit = page.locator("//table[@id='dttmOccuredFrom_Time']//input");
        this.uIOccuredAndDateEdit = page.locator("//input[@id='dttmOccuredTo_Date_KPIDttmCtrl']");
        this.uIOccuredToTimeEdit = page.locator("//table[@id='dttmOccuredTo_Time']//input");
        this.uILeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIChargeLable = page.locator('#lblCADCFS');
        this.uIGamblingLabel = page.locator('#lblGamblingInvolved');
        this.uISafeEnteredLabel = page.locator('#lblSafeEntered');
        this.uIGamblingInvolvedCombobox = page.locator('#cddGamblingInvolved_DropDown');
        this.uISafeEnteredCombobox = page.locator('#cddSafeEntered_DropDown');
        this.uIIdentityTheft = page.locator('#lblUserDefinedCode');
        this.uIIdentityTheftComboBox = page.locator('#cddUserDefinedCode_DropDown');
        this.uIPursuitReport = page.locator('#cmdPursuitRpt');
        this.uIReportedDateValue = page.locator('#lblRptDttm');
        this.uICaseFileSentToDA = page.locator('#chkCaseNotify');
        this.uIOccuredAtClearButton = page.locator('#imgOccAt');
        this.uIPrintIcon = page.locator('#cmdPrint');
        this.uIOccuredAtLabel = page.locator('#lblOccuredAt');
        this.uIOccuredBetweenLabel = page.locator('#lblOccuredBetween');
        this.uIOccurredAndLabel = page.locator('#lblOccuredAnd');
        this.uIPoliceForceUsedInfoIcon = page.locator('#imgPF');
        this.uIPoliceForceUsedLabel = page.locator('#lblPoliceForceUsed');
        this.uITypeOfSecurityLabel = page.locator('#lblTypeOfSecurity');
        this.uIAbandonedStructureDropdown = page.locator('#cddAbandonedStructure_DropDown');
        this.uIAbandonedStructureLabel = page.locator('#lblAbandonedStructure');
        this.uISceneLabel = page.locator('#lblScene');
        this.uISceneDropdown = page.locator('#cddScene_DropDown');
        this.uIDamageAmountLabel = page.locator('#lblDamageAmount');
        this.uIDomesticViolationLabel = page.locator('#lblDomesticViolence');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddCFS.click();
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async SaveNClose(): Promise<void> {
        await this.uISaveNClose.click();
        await this.popup.confirmYes();
    }
}

export class FTCPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uIAttemptedCompletedComboBox: Locator;
    readonly uIBiasMotivationComboBox: Locator;
    readonly uISaveCloseButton: Locator;
    readonly uISaveButton: Locator;
    readonly uIGeographyTextView: Locator;
    readonly uIGeographyComboBox: Locator;
    readonly uIStudentHousingFacilityTextView: Locator;
    readonly uIStudentHousingFacilityComboBox: Locator;
    readonly uIGeneralLocationTextView: Locator;
    readonly uIGeneralLocationComboBox: Locator;
    readonly uILocationTypeComboBox: Locator;
    readonly uISuspectedOfUsingComboBox: Locator;
    readonly uIDomesticViolenceTextView: Locator;
    readonly uIDomesticViolenceComboBox: Locator;
    readonly uIDatingViolenceTextView: Locator;
    readonly uIDatingViolenceComboBox: Locator;
    readonly uIStalkingTextView: Locator;
    readonly uIStalkingComboBox: Locator;
    readonly uIChargeEdit: Locator;
    readonly uIHateIndicatorTextView: Locator;
    readonly uIHateIndicatorComboBox: Locator;
    readonly uICFSEdit: Locator;
    readonly uINIBRSComboBox: Locator;
    readonly uICrimeAgainstComboBox: Locator;
    readonly uIPropertyLossComboBox: Locator;
    readonly uICriminalActivityComboBox: Locator;
    readonly uIWeaponsUsedComboBox: Locator;
    readonly uISuspectUsingComboBox: Locator;
    readonly uIMethodofEntryForcedRadioButton: Locator;
    readonly uIMethodofEntryNonForcedRadioButton: Locator;
    readonly uISuspectedDrugTypeComboBox: Locator;
    readonly uIDegreeComboBox: Locator;
    readonly uIStudentHousingFF: Locator;
    readonly uIBiasMotivationLable: Locator;
    readonly uIBottomStatus: Locator;
    readonly uIHateCrimeOffenceDropdown: Locator;
    readonly uINotReportableCheckbox: Locator;
    readonly uIPrintIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uIAttemptedCompletedComboBox = page.locator('#cddAttemptedRCompleted_DropDown');
        this.uIBiasMotivationComboBox = page.locator('#cddBiasMotivation_DropDown');
        this.uISaveCloseButton = page.locator('#cmdSaveNClose');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIGeographyTextView = page.locator('#lblGeography');
        this.uIGeographyComboBox = page.locator('#cddGeography_DropDown');
        this.uIStudentHousingFacilityTextView = page.locator('#lblSHFIncidentClery');
        this.uIStudentHousingFacilityComboBox = page.locator('#cddSHFIncidentClery_DropDown');
        this.uIGeneralLocationTextView = page.locator('#lblGeneralLocation');
        this.uIGeneralLocationComboBox = page.locator('#cddGeneralLocation_DropDown');
        this.uILocationTypeComboBox = page.locator('#cddLocationType_DropDown');
        this.uISuspectedOfUsingComboBox = page.locator('#cddSuspectUsing1_DropDown');
        this.uIDomesticViolenceTextView = page.locator('#lblDomesticViolence');
        this.uIDomesticViolenceComboBox = page.locator('#cddDomesticViolence_DropDown');
        this.uIDatingViolenceTextView = page.locator('#lblDatingViolence');
        this.uIDatingViolenceComboBox = page.locator('#cddDatingViolence_DropDown');
        this.uIStalkingTextView = page.locator('#lblStalking');
        this.uIStalkingComboBox = page.locator('#cddStalking_DropDown');
        this.uIChargeEdit = page.locator('#txtCFS');
        this.uIHateIndicatorTextView = page.locator('#lblHateIndicator');
        this.uIHateIndicatorComboBox = page.locator('#cddHateIndicator_DropDown');
        this.uICFSEdit = page.locator('#lupCFS_CodeValue');
        this.uINIBRSComboBox = page.locator('#cddNibrs');
        this.uICrimeAgainstComboBox = page.locator('#lstCrimeAgainst');
        this.uIPropertyLossComboBox = page.locator('#cddPropType_DropDown');
        this.uICriminalActivityComboBox = page.locator('#cddCriminalAct1_DropDown');
        this.uIWeaponsUsedComboBox = page.locator('#cddWeaponsUsed1_DropDown');
        this.uISuspectUsingComboBox = page.locator('#cddSuspectUsing1_DropDown');
        this.uIMethodofEntryForcedRadioButton = page.locator('#OHrdoForced_0');
        this.uIMethodofEntryNonForcedRadioButton = page.locator('#OHrdoForced_1');
        this.uISuspectedDrugTypeComboBox = page.locator('#cddSuspDrugType_DropDown');
        this.uIDegreeComboBox = page.locator('#cddCrimeType_DropDown');
        this.uIStudentHousingFF = page.locator('#cddSHFFOpenFlame_DropDown');
        this.uIBiasMotivationLable = page.locator('#lblBiasMotivation');
        this.uIBottomStatus = page.locator("//td[@class='statusBar']//b");
        this.uIHateCrimeOffenceDropdown = page.locator('#cddHateCrime_DropDown');
        this.uINotReportableCheckbox = page.locator("//input[@id='chkIsNotRpt']");
        this.uIPrintIcon = page.locator('#cmdPrint');
    }

    async saveNClose(): Promise<void> {
        await this.uISaveCloseButton.click();
        await this.popup.confirmYes();
    }
}

export class CaseNamesPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly uINamesSearchButton: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uINameInfoIcon: Locator;
    readonly uIActivityComboBox: Locator;
    readonly uIAddButton: Locator;
    readonly uIVictimOffenderIcon: Locator;
    readonly uIDomesticViolenceIcon: Locator;
    readonly uILeokaIcon: Locator;
    readonly uICommentsEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uILEOKACheckbox: Locator;
    readonly uINamesTable: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameTypeIDEdit: Locator;
    readonly uIPopupCopyNamesGridTable: Locator;
    readonly uIPopupNamesCopyButton: Locator;
    readonly uIPopupNamesCancelButton: Locator;
    readonly uISortNoEdit: Locator;
    readonly uIUseOfForceButton: Locator;
    readonly uIPopupUseOfForceGridTable: Locator;
    readonly uIPopupUseOfForceCloseIcon: Locator;
    readonly uIParantGaurdianNameTypeEdit: Locator;
    readonly uIParantGaurdianNameTypeIDEdit: Locator;
    readonly uIReletionshipComboBox: Locator;
    readonly uIReciprocalRelationshipComboBox: Locator;
    readonly uIReletionshipLabel: Locator;
    readonly uIReciprocalRelationshipLabel: Locator;
    readonly uIPrintButton: Locator;
    readonly uIQaFormIcon: Locator;
    readonly uIVictimOffendrOuterIcon: Locator;
    readonly uIUseOfForceReportButton: Locator;
    readonly uIRefreshIcon: Locator;
    readonly uIDVReportButton: Locator;
    readonly uIQAFormButton: Locator;
    readonly uIDORButton: Locator;
    readonly uICustomizeIcon: Locator;
    readonly uIFieldNameforPDFForm: Locator;
    readonly uIClearButton: Locator;
    readonly uICheckAllCheckBoxInPopUpGrid: Locator;
    readonly uIARPIcon: Locator;
    readonly uIARPIconInGrid: Locator;
    readonly uIConfidentialReasonDropdown: Locator;
    readonly uIConfidentialReasonDropdownArrow: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.uINamesSearchButton = page.locator('#nmcIncident_imgSrch');
        this.uILastNameEdit = page.locator('#nmcIncident_LastName');
        this.uIFirstNameEdit = page.locator('#nmcIncident_FirstName');
        this.uINameInfoIcon = page.locator("name=nmcIncident$imgSrch");
        this.uIActivityComboBox = page.locator('#cddActivity_DropDown');
        this.uIAddButton = page.locator('#imgAddName');
        this.uIVictimOffenderIcon = page.locator("//div[@id = 'grdCBENames']//img[@id='grdCBENames_it35_0_imgNameVictim']");
        this.uIDomesticViolenceIcon = page.locator("//div[@id = 'grdCBENames']//img[@id='grdCBENames_it36_0_imgDVName']");
        this.uILeokaIcon = page.locator("//div[@id = 'grdCBENames']//img[@id='grdCBENames_it37_2_imgLEOKA1']");
        this.uICommentsEdit = page.locator('#txtComments');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uILeftSideStatusBar = page.locator("//div[@id = 'tab0']//td[@class = 'statusBar']");
        this.uILEOKACheckbox = page.locator('#chkLEOKA');
        this.uINamesTable = page.locator('#grdCBENames');
        this.uINameTypeEdit = page.locator('#nmcIncident_NameType');
        this.uINameTypeIDEdit = page.locator('#nmcIncident_NameTypeID');
        this.uIPopupCopyNamesGridTable = page.locator('#CBEReports');
        this.uIPopupNamesCopyButton = page.locator('#cmdCopy');
        this.uIPopupNamesCancelButton = page.locator('#cmdCancel');
        this.uISortNoEdit = page.locator('#txtSortSeqNo');
        this.uIUseOfForceButton = page.locator('#cmdUseOfForce');
        this.uIPopupUseOfForceGridTable = page.locator('#grdUseOfForce');
        this.uIPopupUseOfForceCloseIcon = page.locator('#close');
        this.uIParantGaurdianNameTypeEdit = page.locator('#nmJuvenile_NameType');
        this.uIParantGaurdianNameTypeIDEdit = page.locator('#nmJuvenile_NameTypeID');
        this.uIReletionshipComboBox = page.locator('#cddJuvenileReletionship_DropDown');
        this.uIReciprocalRelationshipComboBox = page.locator('#cddReciprocalRelationship_DropDown');
        this.uIReletionshipLabel = page.locator('#lblJuvenileRelationShip');
        this.uIReciprocalRelationshipLabel = page.locator('#lblReciprocalRelationship');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIQaFormIcon = page.locator('#imgQAForm');
        this.uIVictimOffendrOuterIcon = page.locator('#imgVictimOffender');
        this.uIUseOfForceReportButton = page.locator('#imgUOFReport');
        this.uIRefreshIcon = page.locator('#cmdRefresh');
        this.uIDVReportButton = page.locator('#imgDomesticViolence');
        this.uIQAFormButton = page.locator('#imgQAForm');
        this.uIDORButton = page.locator('#imgDrugOverdose');
        this.uICustomizeIcon = page.locator("//div[@id='tlbContextMenu']//img[@src = '/KPIImages/ico/Customize_1.png']");
        this.uIFieldNameforPDFForm = page.locator("//span[contains(text(),'Field Names for PDF/Word Form')]");
        this.uIClearButton = page.locator('#imgClearName');
        this.uICheckAllCheckBoxInPopUpGrid = page.locator("//th[@class='igg_BlueThemeHeaderCaption']//img");
        this.uIARPIcon = page.locator('#imgARP');
        this.uIARPIconInGrid = page.locator('#grdCBENames_it40_0_imgMH');
        this.uIConfidentialReasonDropdown = page.locator('#cddConReason_Input');
        this.uIConfidentialReasonDropdownArrow = page.locator('#cddConReason_Arrow');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }
}

export class NameVictimPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly uILastNameEdit: Locator;
    readonly uINameInfoButton: Locator;
    readonly uIVictimTypeComboBox: Locator;
    readonly uICFSComboBox: Locator;
    readonly uIChargeComboBox: Locator;
    readonly uIAddButton: Locator;
    readonly uISaveButton: Locator;
    readonly uIRefresh: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIResultTable: Locator;
    readonly uIOffenderIcon: Locator;
    readonly uIDomesticViolationComboBox: Locator;
    readonly uICircumstances1ComboBox: Locator;
    readonly uIInjuryLevelComboBox: Locator;
    readonly uIInjuryLevelAddButton: Locator;
    readonly uIJustifiableHomicideComboBox: Locator;
    readonly uICircumstances2ComboBox: Locator;
    readonly uIVicOffVicitmSequenceNo: Locator;
    readonly uIVicOffVicitmName: Locator;
    readonly uIVicOffVicitmNameType: Locator;
    readonly uIVicOffVicitmNameID: Locator;
    readonly uIVicOffAddressText: Locator;
    readonly uIVicOffNameDetailsText: Locator;
    readonly uIVicOffChargeOffenceRadInput: Locator;
    readonly uIVicOffChargeOffenceRadArrow: Locator;
    readonly uIVicOffChargeOffenceRadDropdown: Locator;
    readonly uIVicOffOffenderTable: Locator;
    readonly uIVicOff1RelationshipDropdown: Locator;
    readonly uIVicOff2RelationshipDropdown: Locator;
    readonly uIVicOffViolencetypeDropdown: Locator;
    readonly uIVicOffInjuryLevelRadDropDown: Locator;
    readonly uIInjuryLevelRadArrow: Locator;
    readonly uIBottomMessage: Locator;
    readonly uIResetIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.uILastNameEdit = page.locator('#nmcVictim_LastName');
        this.uINameInfoButton = page.locator('#nmcVictim_imgSrch');
        this.uIVictimTypeComboBox = page.locator('#cddVictimType_DropDown');
        this.uICFSComboBox = page.locator('#cddCFSCode');
        this.uIChargeComboBox = page.locator('#cddCFSCode');
        this.uIAddButton = page.locator('#imgAdd');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIRefresh = page.locator('#cmdRefresh');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uIResultTable = page.locator('#grdVicCFS');
        this.uIOffenderIcon = page.locator('#grdVicCFS_it12_0_imgOffender');
        this.uIDomesticViolationComboBox = page.locator('#cddDomesVio_DropDown');
        this.uICircumstances1ComboBox = page.locator('#cddCircum1_DropDown');
        this.uIInjuryLevelComboBox = page.locator('#cddInjType_DropDown');
        this.uIInjuryLevelAddButton = page.locator('#imgInjAdd');
        this.uIJustifiableHomicideComboBox = page.locator('#cddAddCircum_DropDown');
        this.uICircumstances2ComboBox = page.locator('#cddCircum2_DropDown');
        this.uIVicOffVicitmSequenceNo = page.locator('#txtVICSeq');
        this.uIVicOffVicitmName = page.locator('#nmcVictim');
        this.uIVicOffVicitmNameType = page.locator('#txtContactName_NameType');
        this.uIVicOffVicitmNameID = page.locator('#txtContactName_NameTypeID');
        this.uIVicOffAddressText = page.locator('#txtAddress');
        this.uIVicOffNameDetailsText = page.locator('#lblNamedetails');
        this.uIVicOffChargeOffenceRadInput = page.locator('#cddCFSCode_Input');
        this.uIVicOffChargeOffenceRadArrow = page.locator('#cddCFSCode_Arrow');
        this.uIVicOffChargeOffenceRadDropdown = page.locator('#cddCFSCode_DropDown');
        this.uIVicOffOffenderTable = page.locator('#grdVicOff');
        this.uIVicOff1RelationshipDropdown = page.locator('#grdVicOff_it6_0_drpRelation');
        this.uIVicOff2RelationshipDropdown = page.locator('#grdVicOff_it6_1_drpRelation');
        this.uIVicOffViolencetypeDropdown = page.locator('#cddVioType_DropDown');
        this.uIVicOffInjuryLevelRadDropDown = page.locator('#cddInjury_DropDown');
        this.uIInjuryLevelRadArrow = page.locator('#cddInjury_Arrow');
        this.uIBottomMessage = page.locator("//td[@class = 'statusBar']//b");
        this.uIResetIcon = page.locator('#cmdRefresh');
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }
}

export class VictimOffenderPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly uIRelationshipComboBox: Locator;
    readonly uIOffenderComboBox: Locator;
    readonly uISaveButton: Locator;
    readonly uIAddButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIOffenderUnknownCheckBox: Locator;
    readonly uIChargeOffenseEdit: Locator;
    readonly uIBottomMessage: Locator;
    readonly uIOffenderGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.uIRelationshipComboBox = page.locator('#tabVictim_tmpl0_UsrOffender1_cddRelationship_DropDown');
        this.uIOffenderComboBox = page.locator('#tabVictim_tmpl0_UsrOffender1_cddOffndr');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIAddButton = page.locator('#tabVictim_tmpl0_UsrOffender1_imgOffAdd');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uIOffenderUnknownCheckBox = page.locator('#tabVictim_tmpl0_UsrOffender1_ChkOffUnkn');
        this.uIChargeOffenseEdit = page.locator('#tabVictim_tmpl0_UsrOffender1_txtCFS');
        this.uIBottomMessage = page.locator("//td[@class='statusBar']//b");
        this.uIOffenderGrid = page.locator('#tabVictim_tmpl0_UsrOffender1_grdVicOff');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }
}

export class DomesticViolencePage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uILastNameEdit: Locator;
    readonly uINameInfoButton: Locator;
    readonly uIOffenderComboBox: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uILeftSideStatusBar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uILastNameEdit = page.locator('#nmcVictim_LastName');
        this.uINameInfoButton = page.locator('#nmcVictim_imgSrch');
        this.uIOffenderComboBox = page.locator('#drpOffender');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uILeftSideStatusBar = page.locator("//div[@id = 'tab0'] //td[@class = 'statusBar']");
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }
}

export class LeokaPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uIOfficerKilledCheckbox: Locator;
    readonly uIFeloniousActRadioButton: Locator;
    readonly uICircumstanceComboBox: Locator;
    readonly uITypeOfAssignmentComboBox: Locator;
    readonly uIWeaponUsedComboBox: Locator;
    readonly uIPersonalInqCheckBox: Locator;
    readonly uIPoliceAssualtClearedCheckBox: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uIOfficerKilledCheckbox = page.locator('#chkOfficerKilled');
        this.uIFeloniousActRadioButton = page.locator('#rdoByFerAct');
        this.uICircumstanceComboBox = page.locator('#cddCircum_DropDown');
        this.uITypeOfAssignmentComboBox = page.locator('#cddAssign_DropDown');
        this.uIWeaponUsedComboBox = page.locator('#cddWeapon_DropDown');
        this.uIPersonalInqCheckBox = page.locator('#rdoPersonInj');
        this.uIPoliceAssualtClearedCheckBox = page.locator('#rdoPoliceAss');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
    }

    async SaveNClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await this.popup.confirmYes();
    }
}

export class CaseVehiclePage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly uIVehicleNumberEdit: Locator;
    readonly uIVehicleStateComboBox: Locator;
    readonly uIVehicleLookupButton: Locator;
    readonly uINCICEdit: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameTypeIDEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIActivityComboBox: Locator;
    readonly uIInsuranceCompanyComboBox: Locator;
    readonly uIOtherVehicleInformationEdit: Locator;
    readonly uIVehicleTable: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uINameInfoIcon: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIVehicleInfoIcon: Locator;
    readonly uIStatusBar: Locator;
    readonly uIPopupNamesCopyButton: Locator;
    readonly uITowButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.uIVehicleNumberEdit = page.locator('#pltVehicle_PlateNumber');
        this.uIVehicleStateComboBox = page.locator('#pltVehicle_KPIState');
        this.uIVehicleLookupButton = page.locator('#pltVehicle_imgBtn');
        this.uINCICEdit = page.locator('#txtNCIC');
        this.uINameTypeEdit = page.locator('#nmcIncident_NameType');
        this.uINameTypeIDEdit = page.locator('#nmcIncident_NameTypeID');
        this.uILastNameEdit = page.locator('#nmcIncident_LastName');
        this.uIFirstNameEdit = page.locator('#nmcIncident_FirstName');
        this.uIActivityComboBox = page.locator('#cddActivity_DropDown');
        this.uIInsuranceCompanyComboBox = page.locator('#cddInsurComp_DropDown');
        this.uIOtherVehicleInformationEdit = page.locator('#txtComments');
        this.uIVehicleTable = page.locator('#grdVehicle');
        this.uIAddButton = page.locator('#imgAdd');
        this.uIClearButton = page.locator('#imgClear');
        this.uINameInfoIcon = page.locator('#nmcIncident_imgSrch');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uIVehicleInfoIcon = page.locator('#pltVehicle_imgBtn');
        this.uIStatusBar = page.locator("//td[@class = 'statusBar']");
        this.uIPopupNamesCopyButton = page.locator('#cmdCopy');
        this.uITowButton = page.locator('#cmdTow');
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }
}

export class CaseSuspectPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly uIAddSuspectButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uISuspectTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.uIAddSuspectButton = page.locator('#cmdAdd');
        this.uIRefreshButton = page.locator('#btnRefresh');
        this.uISuspectTable = page.locator('#grdSuspect');
    }

    async clickAddSuspectButton(): Promise<void> {
        await this.uIAddSuspectButton.click();
    }
}

export class QuestionnairePage {
    readonly page: Page;
    readonly uISelectFormComboBox: Locator;
    readonly uIFillFormButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIResultTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISelectFormComboBox = page.locator('#cddForm_DropDown');
        this.uIFillFormButton = page.locator('#cmdTakeTest');
        this.uIRefreshButton = page.locator('#cmdrefresh');
        this.uIResultTable = page.locator('#grdQAForms');
    }

    async clickFillFormButton(): Promise<void> {
        await this.uIFillFormButton.click();
    }
}

export class QuestionDataEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uIPFCodeEdit: Locator;
    readonly uIYesRadioButton: Locator;
    readonly uIEnterSomeTextEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uIPFCodeEdit = page.locator('#lupEntryOfficer_CodeValue');
        this.uIYesRadioButton = page.locator('#rdo100010000456301_0');
        this.uIEnterSomeTextEdit = page.locator('#txt100010000456304');
    }

    async tabOutPF(): Promise<void> {
        await this.uIPFCodeEdit.click();
        await this.uIPFCodeEdit.press('Tab');
    }
}

export class RecordsNarrativePage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uITemplateComboBox: Locator;
    readonly uILoadButton: Locator;
    readonly uIAddnewButton: Locator;
    readonly uINarrativeRichTextEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uICommentsRichTextEdit: Locator;
    readonly uIStatusBar: Locator;
    readonly uIViewHistoryButton: Locator;
    readonly uITextHistoryGrid: Locator;
    readonly uINarrativeText: Locator;
    readonly uIRestoreNarrativeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uITemplateComboBox = page.locator('#ctrlUsrKPITxtEdit_lstTextName');
        this.uILoadButton = page.locator('#ctrlUsrKPITxtEdit_cmdload');
        this.uIAddnewButton = page.locator('#ctrlUsrKPITxtEdit_cmdAddnew');
        this.uINarrativeRichTextEdit = page.locator("//table[@id = 'ctrlUsrKPITxtEdit_rteKPITxtWrapper']//iframe[@id = 'ctrlUsrKPITxtEdit_rteKPITxt_contentIframe']");
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uICommentsRichTextEdit = page.locator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        this.uIStatusBar = page.locator("//td[@class='statusBar']//b");
        this.uIViewHistoryButton = page.locator('#btnViewHistory');
        this.uITextHistoryGrid = page.locator('#grdTxtDtlHistory');
        this.uINarrativeText = page.locator('//body//div');
        this.uIRestoreNarrativeButton = page.locator('#btnRestoreNarrative');
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }
}

export class IBRSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uISearchButton: Locator;
    readonly uICaseYearToEdit: Locator;
    readonly uICaseNumberToEdit: Locator;
    readonly uICaseYearFromEdit: Locator;
    readonly uICaseNumberFromEdit: Locator;
    readonly uIIBRSearchTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uISearchButton = page.locator('#cmdSearch');
        this.uICaseYearToEdit = page.locator('#nbrCaseNoEnd_Year');
        this.uICaseNumberToEdit = page.locator('#nbrCaseNoEnd_Number');
        this.uICaseYearFromEdit = page.locator('#nbrCaseNoStart_Year');
        this.uICaseNumberFromEdit = page.locator('#nbrCaseNoStart_Number');
        this.uIIBRSearchTable = page.locator('#grdSubInquiry');
    }

    async clickSearchbutton(): Promise<void> {
        await this.uISearchButton.click();
    }
}

export class DVEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uITotalTimeSpentHourEdit: Locator;
    readonly uITotalTimeSpentMinEdit: Locator;
    readonly uIAlcoholInolvedCheckBox: Locator;
    readonly uIotherDrugsInvolvedCheckBox: Locator;
    readonly uIDomesticViolenceRestrainingComboBox: Locator;
    readonly uIVictimLastNameEdit: Locator;
    readonly uIVictimFirstNameEdit: Locator;
    readonly uIVictimLabelSexTextView: Locator;
    readonly uIVictimLableRaceTextView: Locator;
    readonly uIPergenantCheckBox: Locator;
    readonly uIDisabledPsycologicalCheckBox: Locator;
    readonly uIChildrenInolvedCheckBox: Locator;
    readonly uIDatingRelationshipCheckBox: Locator;
    readonly uIDisabledPhysicalCheckBox: Locator;
    readonly uIChildPresentCheckBox: Locator;
    readonly uIDisabledor60YearsOldCheckBox: Locator;
    readonly uIVORelationshipComboBox: Locator;
    readonly uIOffenderNameComboBox: Locator;
    readonly uIHouseHoldStatusComboBox: Locator;
    readonly uIArrestedForComboBox: Locator;
    readonly uIHasADVOrderCheckBox: Locator;
    readonly uIDoesThisIncidentInolvedCheckBox: Locator;
    readonly uIAsAResultOfThisIncidentCheckBox: Locator;
    readonly uIOffenderCommitSucideCheckBox: Locator;
    readonly uIRemarksEdit: Locator;
    readonly uIGunCheckBox: Locator;
    readonly uIKnifeCheckBox: Locator;
    readonly uIOtherDangerousCheckBox: Locator;
    readonly uIOffenseComplaintComboBox: Locator;
    readonly uIDegreeInjuryComboBox: Locator;
    readonly uIAdultMaleEdit: Locator;
    readonly uIAdultFemaleEdit: Locator;
    readonly uIJuvinalMaleEdit: Locator;
    readonly uIOffenderLabelSexTextView: Locator;
    readonly uIOffenderLableRaceTextView: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uIWarningMessageTextView: Locator;
    readonly uIYesButton: Locator;
    readonly uINoButton: Locator;
    readonly uIOffenderLabelAgeTextView: Locator;
    readonly uIReportedDateEdit: Locator;
    readonly uIReportedTimeEdit: Locator;
    readonly uIRefreshButton: Locator;
    readonly uICaseInfoIcon: Locator;
    readonly uIDeleteIcon: Locator;
    readonly uISaveAndAddNew: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uICaseYearEdit = page.locator('#nbrCaseNumber_Year');
        this.uICaseNumberEdit = page.locator('#nbrCaseNumber_Number');
        this.uITotalTimeSpentHourEdit = page.locator('#txtHours');
        this.uITotalTimeSpentMinEdit = page.locator('#txtMin');
        this.uIAlcoholInolvedCheckBox = page.locator('#chkAlcholInv');
        this.uIotherDrugsInvolvedCheckBox = page.locator('#chkOthDrugInv');
        this.uIDomesticViolenceRestrainingComboBox = page.locator('#cddDomesticViolence_DropDown');
        this.uIVictimLastNameEdit = page.locator('#nmcVictim_LastName');
        this.uIVictimFirstNameEdit = page.locator('#nmcVictim_FirstName');
        this.uIVictimLabelSexTextView = page.locator('#lblVicSex');
        this.uIVictimLableRaceTextView = page.locator('#lblVicRace');
        //       Here is the continuation and complete conversion of the remaining classes from
        // DVEntryPage to the end of Records.java and UIMapRecords.java in the
        // TypeScript/Playwright Page Object Model format:

        this.uIPergenantCheckBox = page.locator('#chkVictPreg');
        this.uIDisabledPsycologicalCheckBox = page.locator('#chkPscyn');
        this.uIChildrenInolvedCheckBox = page.locator('#chkChildInvol');
        this.uIDatingRelationshipCheckBox = page.locator('#chkDatingRel');
        this.uIDisabledPhysicalCheckBox = page.locator('#chkPhysical');
        this.uIChildPresentCheckBox = page.locator('#chkChildPresent');
        this.uIDisabledor60YearsOldCheckBox = page.locator('#chkIsAbandonment');
        this.uIVORelationshipComboBox = page.locator('#cddOffRel_DropDown');
        this.uIOffenderNameComboBox = page.locator('#drpOffender');
        this.uIHouseHoldStatusComboBox = page.locator('#cddOffenderHouseHold_DropDown');
        this.uIArrestedForComboBox = page.locator('#cddDefArrested_DropDown');
        this.uIHasADVOrderCheckBox = page.locator('#chkdomesticViolence');
        this.uIDoesThisIncidentInolvedCheckBox = page.locator('#chkincidentInvolve');
        this.uIAsAResultOfThisIncidentCheckBox = page.locator('#chkDVrestraining');
        this.uIOffenderCommitSucideCheckBox = page.locator('#chkOffSuic');
        this.uIRemarksEdit = page.locator('#txtRemarks');
        this.uIGunCheckBox = page.locator('#chkGun');
        this.uIKnifeCheckBox = page.locator('#chkKnife');
        this.uIOtherDangerousCheckBox = page.locator('#chkOther');
        this.uIOffenseComplaintComboBox = page.locator('#cddOffenseComplaint_DropDown');
        this.uIDegreeInjuryComboBox = page.locator('#cddDegreeInjury_DropDown');
        this.uIAdultMaleEdit = page.locator('#txtAdultMale');
        this.uIAdultFemaleEdit = page.locator('#txtAdultFemale');
        this.uIJuvinalMaleEdit = page.locator('#txtJuvenMale');
        this.uIOffenderLabelSexTextView = page.locator('#lblOffSex');
        this.uIOffenderLableRaceTextView = page.locator('#lblOffRace');
        this.uILeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIWarningMessageTextView = page.locator("//div[@class = 'modal-body']");
        this.uIYesButton = page.locator("//button[contains(text(),'Yes')]");
        this.uINoButton = page.locator("//button[contains(text(),'No')]");
        this.uIOffenderLabelAgeTextView = page.locator('#lblOffAgeCode');
        this.uIReportedDateEdit = page.locator('#dttmReported_Date_KPIDttmCtrl');
        this.uIReportedTimeEdit = page.locator("//span[@id='dttmReported_divDateTime']//td//table//tbody//tr//td//input[contains(@class,'textboxdatetime')]");
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uICaseInfoIcon = page.locator('#nbrCaseNumber_imgBtn');
        this.uIDeleteIcon = page.locator('#cmdDelete');
        this.uISaveAndAddNew = page.locator('#cmdSaveNAddNew');
    }

    async verifyAtCaseNo(): Promise<void> {
        const caseNo = BaseData.getPoliceModuleValue('CaseNo');
        await expect(this.uICaseYearEdit).toHaveValue(caseNo.substring(0, 2));
        await expect(this.uICaseNumberEdit).toHaveValue(caseNo.substring(3));
    }

    async clickAlcoholInvolvedCheckBox(): Promise<void> {
        await this.uIAlcoholInolvedCheckBox.click();
    }

    async clickOtherDrugsInvolvedCheckBox(): Promise<void> {
        await this.uIotherDrugsInvolvedCheckBox.click();
    }

    async enterTotalTimeSpent(): Promise<void> {
        await this.uITotalTimeSpentHourEdit.fill('23');
    }

    async enterTotalMinpent(): Promise<void> {
        await this.uITotalTimeSpentMinEdit.fill('55');
    }

    async selectViolationofDomesticViolationYes(): Promise<void> {
        await this.uIDomesticViolenceRestrainingComboBox.selectOption({ label: 'Yes' });
        await this.uIDomesticViolenceRestrainingComboBox.press('Tab');
    }

    async selectViolationofDomesticViolationNo(): Promise<void> {
        await this.uIDomesticViolenceRestrainingComboBox.selectOption({ label: 'No' });
        await this.uIDomesticViolenceRestrainingComboBox.press('Tab');
    }

    async selectAllVictimInformationFieldsCheckboxs(): Promise<void> {
        await this.uIPergenantCheckBox.click();
        await this.uIDisabledPsycologicalCheckBox.click();
        await this.uIDisabledPhysicalCheckBox.click();
        await this.uIDisabledor60YearsOldCheckBox.click();
        await this.uIChildPresentCheckBox.click();
        await this.uIDatingRelationshipCheckBox.click();
    }

    async selectVORelationship(): Promise<void> {
        await this.uIVORelationshipComboBox.selectOption({ index: 1 });
    }

    async selectAtOffenderName(index?: number): Promise<void> {
        const key = index ? `OffenderName${index}` : 'OffenderName';
        await this.uIOffenderNameComboBox.selectOption({ label: BaseData.getPoliceModuleValue(key) });
    }

    async verifyAtOffenderSex(): Promise<void> {
        const text = await this.uIOffenderLabelSexTextView.innerText();
        expect(text).toContain(BaseData.getPoliceModuleValue('Sex'));
    }

    async verifyAtOffenderRace(): Promise<void> {
        const text = await this.uIOffenderLableRaceTextView.innerText();
        expect(text).toContain(BaseData.getPoliceModuleValue('Race'));
    }

    async selectAllOffenderInformationFieldCheckBox(): Promise<void> {
        await this.uIHasADVOrderCheckBox.click();
        await this.uIDoesThisIncidentInolvedCheckBox.click();
        await this.uIAsAResultOfThisIncidentCheckBox.click();
    }

    async clickOffenderCommitSucideCheckbox(): Promise<void> {
        await this.uIOffenderCommitSucideCheckBox.click();
    }

    async enterRemarks(): Promise<void> {
        await this.uIRemarksEdit.fill('Automation');
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForTimeout(1000);
        await this.uIYesButton.click();
    }

    async saveAndClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        await this.page.waitForTimeout(1000);
        await this.uIYesButton.click();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verifyAdditionSuccessfulMessage(): Promise<void> {
        const msg = await this.uILeftSideStatusBar.innerText();
        expect(msg.toLowerCase()).toContain('1002 - addition successful');
    }

    async verifyUpdateSuccessFullMessage(): Promise<void> {
        const msg = await this.uILeftSideStatusBar.innerText();
        expect(msg.toLowerCase()).toContain('1003 - update successful');
    }

    async clickDeleteIcon(): Promise<void> {
        await this.uIDeleteIcon.click();
        await this.page.waitForTimeout(1000);
        await this.uIYesButton.click();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }
}

export class DVSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly uISearchButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIBackButton: Locator;
    readonly uIReportedDateClearButton: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uIVictimLastNameEdit: Locator;
    readonly uIVictimFirstNameEdit: Locator;
    readonly uIDVSearchTable: Locator;
    readonly uIReportedDateFromEdit: Locator;
    readonly uIReportedDateToEdit: Locator;
    readonly uIOfficerCodeEdit: Locator;
    readonly uIVORelationshipCombobox: Locator;
    readonly uIOffenderLastNameEdit: Locator;
    readonly uIOffenderFirstNameEdit: Locator;
    readonly uIOffenseComplaintComboBox: Locator;
    readonly uIAlcoholInvolvedCheckbox: Locator;
    readonly uIOtherDrigsInvolvedCheckbox: Locator;
    readonly uIChildrenInvolvedCheckbox: Locator;
    readonly uIVictimLabel: Locator;
    readonly uIOffenderLabel: Locator;
    readonly uIOtherLabel: Locator;
    readonly uIVictimMiddleNameEdit: Locator;
    readonly uIVictimNameTypeEdit: Locator;
    readonly uIVictimNameIDEdit: Locator;
    readonly uIVictimSexDropdown: Locator;
    readonly uIVictimRaceDropdown: Locator;
    readonly uIVictimFromAgeEdit: Locator;
    readonly uIVictimToAgeEdit: Locator;
    readonly uIPregnantCheckBox: Locator;
    readonly uIDatingRelationshipCheckBox: Locator;
    readonly uIDisabledPhyschologicalCheckBox: Locator;
    readonly uIDisabledPhysicalCheckBox: Locator;
    readonly uIAbandonmentCheckBox: Locator;
    readonly uIOffenderMiddleNameEdit: Locator;
    readonly uIOffenderNameTypeEdit: Locator;
    readonly uIOffenderNameIdEdit: Locator;
    readonly uIOffenderSexDropdown: Locator;
    readonly uIOffenderRaceDropdown: Locator;
    readonly uIOffenderFromAgeEdit: Locator;
    readonly uIOffenderToAgeEdit: Locator;
    readonly uIDegreeOfInjuryDropdown: Locator;
    readonly uIChildrenPresentCheckbox: Locator;
    readonly uIRestrainingOrderOnlyCheckbox: Locator;
    readonly uIAddNew: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.uISearchButton = page.locator("(//span[contains(text(),'Search')])");
        this.uIResetButton = page.locator("(//span[contains(text(),'Reset')])");
        this.uIBackButton = page.locator("(//span[contains(text(),'Back')])");
        this.uIReportedDateClearButton = page.locator('#imgClear');
        this.uICaseYearEdit = page.locator('#nbrCaseNo_Year');
        this.uICaseNumberEdit = page.locator('#nbrCaseNo_Number');
        this.uIVictimLastNameEdit = page.locator('#txtNameID_LastName');
        this.uIVictimFirstNameEdit = page.locator('#txtNameID_FirstName');
        this.uIDVSearchTable = page.locator('#grdDVSearch');
        this.uIReportedDateFromEdit = page.locator('#dttFrom_Date_KPIDttmCtrl');
        this.uIReportedDateToEdit = page.locator('#dttmTo_Date_KPIDttmCtrl');
        this.uIOfficerCodeEdit = page.locator('#lupOfficer_CodeValue');
        this.uIVORelationshipCombobox = page.locator("//div[@id='radVORel']");
        this.uIOffenderLastNameEdit = page.locator('#OffenderNCtrl_LastName');
        this.uIOffenderFirstNameEdit = page.locator('#OffenderNCtrl_FirstName');
        this.uIOffenseComplaintComboBox = page.locator('#RadOffComplaint');
        this.uIAlcoholInvolvedCheckbox = page.locator('#chkAlcohol');
        this.uIOtherDrigsInvolvedCheckbox = page.locator('#chkOthDrugs');
        this.uIChildrenInvolvedCheckbox = page.locator('#chkChildInv');
        this.uIVictimLabel = page.locator('#lblVictim');
        this.uIOffenderLabel = page.locator('#lblOffender');
        this.uIOtherLabel = page.locator('#lblOther');
        this.uIVictimMiddleNameEdit = page.locator('#txtNameID_MiddleName');
        this.uIVictimNameTypeEdit = page.locator('#txtNameID_NameType');
        this.uIVictimNameIDEdit = page.locator('#txtNameID_NameTypeID');
        this.uIVictimSexDropdown = page.locator('#cddVSex_DropDown');
        this.uIVictimRaceDropdown = page.locator('#cddVRace_DropDown');
        this.uIVictimFromAgeEdit = page.locator('#txtVAge');
        this.uIVictimToAgeEdit = page.locator('#txtVAgeRange');
        this.uIPregnantCheckBox = page.locator('#chkPregnant');
        this.uIDatingRelationshipCheckBox = page.locator('#chkDatingRel');
        this.uIDisabledPhyschologicalCheckBox = page.locator('#chkDPsychological');
        this.uIDisabledPhysicalCheckBox = page.locator('#chkDPhysical');
        this.uIAbandonmentCheckBox = page.locator('#chkAbandonment');
        this.uIOffenderMiddleNameEdit = page.locator('#OffenderNCtrl_MiddleName');
        this.uIOffenderNameTypeEdit = page.locator('#OffenderNCtrl_NameType');
        this.uIOffenderNameIdEdit = page.locator('#OffenderNCtrl_NameTypeID');
        this.uIOffenderSexDropdown = page.locator('#cddOSex_DropDown');
        this.uIOffenderRaceDropdown = page.locator('#cddORace_DropDown');
        this.uIOffenderFromAgeEdit = page.locator('#txtOAge');
        this.uIOffenderToAgeEdit = page.locator('#txtOAgeRange');
        this.uIDegreeOfInjuryDropdown = page.locator('#RadDegOfInjury');
        this.uIChildrenPresentCheckbox = page.locator('#chkChildPres');
        this.uIRestrainingOrderOnlyCheckbox = page.locator('#chkResOrdOnly');
        this.uIAddNew = page.locator("(//span[contains(text(),'Add New')])");
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clickReset(): Promise<void> {
        await this.uIResetButton.click();
    }

    async clickBack(): Promise<void> {
        await this.uIBackButton.click();
    }

    async enterAtCaseNo(): Promise<void> {
        const caseNo = BaseData.getPoliceModuleValue('CaseNo');
        await this.uICaseYearEdit.fill(caseNo.substring(0, 2));
        await this.uICaseNumberEdit.fill(caseNo.substring(3));
        await this.uICaseNumberEdit.press('Tab');
    }

    async enterAtVictimLastName(): Promise<void> {
        await this.uIVictimLastNameEdit.fill(BaseData.getPoliceModuleValue('VictimLastName'));
    }

    async enterAtVictimFirstName(): Promise<void> {
        await this.uIVictimFirstNameEdit.fill(BaseData.getPoliceModuleValue('VictimFirstName'));
        await this.uIVictimFirstNameEdit.press('Tab');
    }

    async selectRowByAtCaseNo(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIDVSearchTable, BaseData.getPoliceModuleValue('CaseNo'));
    }
}

export class DVSearchHelpWindowPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly uISearchTable: Locator;
    readonly uIAddNewButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.uISearchTable = page.locator('#pnlDVSearchResult');
        this.uIAddNewButton = page.locator("//span[text()='Add New']");
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async selectRowByAtCaseNo(): Promise<void> {
        await this.grid.selectRowByCellText(this.uISearchTable, BaseData.getPoliceModuleValue('CaseNo'));
    }
}

export class UOFSearchHelpWindowPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIUseOfForceTabGridTable: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uILocationEdit: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIResetButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIUseOfForceTabGridTable = page.locator('#grdUseOfForce');
        this.uICaseYearEdit = page.locator('#nbrCaseNo_Year');
        this.uICaseNumberEdit = page.locator('#nbrCaseNo_Number');
        this.uILocationEdit = page.locator('#txtLocation');
        this.uIAddNewButton = page.locator("(//span[contains(text(),'Add New')])");
        this.uIResetButton = page.locator("(//span[contains(text(),'Reset')])");
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickAtSubjectNameInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIUseOfForceTabGridTable, BaseData.getPoliceModuleValue('SubjectName'));
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }
}

export class UOFEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uIUOFYearEdit: Locator;
    readonly uIUOFNumberEdit: Locator;
    readonly uIOfficerPFCodeEdit: Locator;
    readonly uISubjectLastNameEdit: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameTypeIDEdit: Locator;
    readonly uISubjectFirstNameEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uIUOFDateEdit: Locator;
    readonly uIUOFTimeEdit: Locator;
    readonly uIIncidentSubjectInformationTab: Locator;
    readonly uITypeofForceTab: Locator;
    readonly uIOfficerInformationTab: Locator;
    readonly uIAttachmentsTab: Locator;
    readonly uIDispositionTab: Locator;
    readonly uIInjuryReportTab: Locator;
    readonly uIApprovalTab: Locator;
    readonly uIRelatedCaseNumberInfoIcon: Locator;
    readonly uIWarningMessageTextView: Locator;
    readonly uIYesButton: Locator;
    readonly uINoButton: Locator;
    readonly uIDeleteIcon: Locator;
    readonly uISubjectNameInfoIcon: Locator;
    readonly uIOfficerdescriptionEdit: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIStatusLabel: Locator;
    readonly uIUOFNumberLabel: Locator;
    readonly uICallYearEdit: Locator;
    readonly uICallNumberEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uICaseYearEdit = page.locator('#nbrCaseNumber_Year');
        this.uICaseNumberEdit = page.locator('#nbrCaseNumber_Number');
        this.uIUOFYearEdit = page.locator('#nbrUOFNumber_Year');
        this.uIUOFNumberEdit = page.locator('#nbrUOFNumber_Number');
        this.uIOfficerPFCodeEdit = page.locator('#lupOffPF_CodeValue');
        this.uISubjectLastNameEdit = page.locator('#NmSubjectName_LastName');
        this.uINameTypeEdit = page.locator('#NmSubjectName_NameType');
        this.uINameTypeIDEdit = page.locator('#NmSubjectName_NameTypeID');
        this.uISubjectFirstNameEdit = page.locator('#NmSubjectName_FirstName');
        this.uIAddressEdit = page.locator('#addrAddress_txtFrom');
        this.uIUOFDateEdit = page.locator('#dttmUOFTime_Date_KPIDttmCtrl');
        this.uIUOFTimeEdit = page.locator("//table[@id='dttmUOFTime_Time']//input");
        this.uIIncidentSubjectInformationTab = page.locator("//span[contains(text(),'Incident & Subject Information')]");
        this.uITypeofForceTab = page.locator("//span[contains(text(),'Type of Force')]");
        this.uIOfficerInformationTab = page.locator("//span[contains(text(),'Officer Information')]");
        this.uIAttachmentsTab = page.locator("//span[contains(text(),'Attachments')]");
        this.uIDispositionTab = page.locator("//span[contains(text(),'Disposition')]");
        this.uIInjuryReportTab = page.locator("//span[contains(text(),'Injury Report')]");
        this.uIApprovalTab = page.locator("//span[contains(text(),'Approval')]");
        this.uIRelatedCaseNumberInfoIcon = page.locator('#nbrCaseNumber_imgBtn');
        this.uIWarningMessageTextView = page.locator("//div[@class = 'modal-body']");
        this.uIYesButton = page.locator("//button[contains(text(),'Yes')]");
        this.uINoButton = page.locator("//button[contains(text(),'No')]");
        this.uIDeleteIcon = page.locator('#cmdDelete');
        this.uISubjectNameInfoIcon = page.locator('#NmSubjectName_imgSrch');
        this.uIOfficerdescriptionEdit = page.locator('#lupOffPF_CodeDescription');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIStatusLabel = page.locator('#lblApprovalStatus');
        this.uIUOFNumberLabel = page.locator('#lblUFOnumber');
        this.uICallYearEdit = page.locator('#nbrCallNumber_Year');
        this.uICallNumberEdit = page.locator('#nbrCallNumber_Number');
    }

    async enterAtLastName(): Promise<void> {
        await this.uISubjectLastNameEdit.fill(BaseData.getPoliceModuleValue('LastName'));
    }

    async enterAtFirstName(): Promise<void> {
        await this.uISubjectFirstNameEdit.fill(BaseData.getPoliceModuleValue('FirstName'));
        await this.uISubjectFirstNameEdit.press('Tab');
    }

    async tabUOFDateAndTime(): Promise<void> {
        await this.uIUOFDateEdit.press('Tab');
        await this.uIUOFTimeEdit.press('Tab');
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForTimeout(1000);
        await this.uIYesButton.click();
    }

    async saveAndClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        await this.page.waitForTimeout(1000);
        await this.uIYesButton.click();
    }

    async clickTypeOfForceTab(): Promise<void> {
        await this.uITypeofForceTab.click();
    }

    async clickIncidentSubjectInformationTab(): Promise<void> {
        await this.uIIncidentSubjectInformationTab.click();
    }

    async clickOfficerInformationTab(): Promise<void> {
        await this.uIOfficerInformationTab.click();
    }

    async clickDispositionTab(): Promise<void> {
        await this.uIDispositionTab.click();
    }

    async switchToInjuryReportTab(): Promise<void> {
        await this.uIInjuryReportTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmBodyParts');
    }

    async switchToApprovalTab(): Promise<void> {
        await this.uIApprovalTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmPnxGlobalApproval');
    }

    async close(): Promise<void> {
        await this.page.close();
    }
}

export class TypeOfForceTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIForceSeqNoEdit: Locator;
    readonly uINotesEdit: Locator;
    readonly uIDisplayOnlyCheckBox: Locator;
    readonly uIListtheTypeofForceUsedOfficerComboBox: Locator;
    readonly uIEffectivenessComboBox: Locator;
    readonly uITypeOfForceTabGridTable: Locator;
    readonly uIUpdateButton: Locator;
    readonly uIListTheTypeOfForceUsedByTheOfficer: Locator;
    readonly uIListTheTypeOfForceUsedByTheOfficerlable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.uIAddButton = page.locator('#tabUOF_tmpl1_ctrlusrTOF_imgAdd');
        this.uIClearButton = page.locator('#tabUOF_tmpl1_ctrlusrTOF_ImgClear');
        this.uIForceSeqNoEdit = page.locator('#tabUOF_tmpl1_ctrlusrTOF_txtForceSeq');
        this.uINotesEdit = page.locator('#tabUOF_tmpl1_ctrlusrTOF_txtNotes');
        this.uIDisplayOnlyCheckBox = page.locator('#tabUOF_tmpl1_ctrlusrTOF_chkDisplay');
        this.uIListtheTypeofForceUsedOfficerComboBox = page.locator('#tabUOF_tmpl1_ctrlusrTOF_cddTOF_DropDown');
        this.uIEffectivenessComboBox = page.locator('#tabUOF_tmpl1_ctrlusrTOF_cddEffectiveness_DropDown');
        this.uITypeOfForceTabGridTable = page.locator('#tabUOF_tmpl1_ctrlusrTOF_grdTOF');
        this.uIUpdateButton = page.locator('#tabUOF_tmpl1_ctrlusrTOF_imgAdd');
        this.uIListTheTypeOfForceUsedByTheOfficer = page.locator('#tabUOF_tmpl1_ctrlusrTOF_cddTOF_DropDown');
        this.uIListTheTypeOfForceUsedByTheOfficerlable = page.locator('#tabUOF_tmpl1_ctrlusrTOF_lblTOF');
    }

    async selectAtTypesOfForceUsedByOfficer(): Promise<void> {
        await this.uIListtheTypeofForceUsedOfficerComboBox.selectOption({ label: BaseData.getPoliceModuleValue('TypeofForce') });
        await this.uIListtheTypeofForceUsedOfficerComboBox.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }
}

export class IncidentSubjectInformationTabPage {
    readonly page: Page;
    readonly uILocationTypeComboBox: Locator;
    readonly uIPatrolAreaComboBox: Locator;
    readonly uIReasonInitialContactComboBox: Locator;
    readonly uIWasSupervisorPresentComboBox: Locator;
    readonly uIChargeCodeEdit: Locator;
    readonly uIChargeCodeLookupIcon: Locator;
    readonly uITotalNoOfOfficersUsedForceEdit: Locator;
    readonly uITotalNoOfOfficersUsedForceFromYourAgencyEdit: Locator;
    readonly uISupervisorPFCodeEdit: Locator;
    readonly uISupervisorPFLookupIcon: Locator;
    readonly uITotalNoOfOfficersUsedForceComboBox: Locator;
    readonly uITotalNoOfOfficersUsedForceFromYourAgencyComboBox: Locator;
    readonly uIListKnownMentalPhysicalConditionComboBox: Locator;
    readonly uIConditionsInputComboBox: Locator;
    readonly uIConditionsComboBox: Locator;
    readonly uIWasSubjectArmedWithWeaponComboBox: Locator;
    readonly uIWeaponsInputComboBox: Locator;
    readonly uIWeaponsComboBox: Locator;
    readonly uIListSubjectActionInputComboBox: Locator;
    readonly uIListSubjectActionComboBox: Locator;
    readonly uISubjectActionsEdit: Locator;
    readonly uIWasSubjectUnderInfluenceComboBox: Locator;
    readonly uIMedicalAssistanceRequiredLabel: Locator;
    readonly uIMedicalAssistanceRequiredDropDown: Locator;
    readonly uIDidTheOfficerApproachTheSubjectDropdown: Locator;
    readonly uIWasThisAnAmbushIncidentDropdown: Locator;
    readonly uIWasASupervisorPresentDropdown: Locator;
    readonly uITypeOfIncidentDropdown: Locator;
    readonly uIListAnyThreatsDirectedAtOfficersOrOthersDropdown: Locator;
    readonly uIDidTheSubjectResistOfficersDropdown: Locator;
    readonly uIWasTheSubjectArmedWithAWeaponDropdown: Locator;
    readonly uIWasTheSubjectUnderTheInfluenceDropdown: Locator;
    readonly uIListTheSubjectActionsDropdown: Locator;
    readonly uIListTheSubjectsInjuriesResultingFromUOFDropdown: Locator;
    readonly uIListTheSubjectsInjuriesResultingFromUOFDropdownArrow: Locator;
    readonly uIListTheSubjectActionsDropdownArrow: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uILocationTypeComboBox = page.locator('#tabUOF_tmpl0_ctrlusrISI_cddLocationType_DropDown');
        this.uIPatrolAreaComboBox = page.locator('#tabUOF_tmpl0_ctrlusrISI_cddPatrolArea_DropDown');
        this.uIReasonInitialContactComboBox = page.locator('#tabUOF_tmpl0_ctrlusrISI_cddReasonInitialContact_DropDown');
        this.uIWasSupervisorPresentComboBox = page.locator('#tabUOF_tmpl0_ctrlusrISI_cddSupPre_DropDown');
        this.uIChargeCodeEdit = page.locator('#tabUOF_tmpl0_ctrlusrISI_lupCharge_CodeValue');
        this.uIChargeCodeLookupIcon = page.locator('#tabUOF_tmpl0_ctrlusrISI_lupCharge_imgBtn');
        this.uITotalNoOfOfficersUsedForceEdit = page.locator('#tabUOF_tmpl0_ctrlusrISI_txtTotalOfc');
        this.uITotalNoOfOfficersUsedForceFromYourAgencyEdit = page.locator('#tabUOF_tmpl0_ctrlusrISI_txtTotalOfcAgency');
        this.uISupervisorPFCodeEdit = page.locator('#tabUOF_tmpl0_ctrlusrISI_lupSupervisorPF_CodeValue');
        this.uISupervisorPFLookupIcon = page.locator('#tabUOF_tmpl0_ctrlusrISI_lupSupervisorPF_imgBtn');
        this.uITotalNoOfOfficersUsedForceComboBox = page.locator('#tabUOF_tmpl0_ctrlusrISI_cddTotalOfc_DropDown');
        this.uITotalNoOfOfficersUsedForceFromYourAgencyComboBox = page.locator('#tabUOF_tmpl0_ctrlusrISI_cddTotalOfcAgency_DropDown');
        this.uIListKnownMentalPhysicalConditionComboBox = page.locator('#tabUOF_tmpl0_ctrlusrISI_cddPhyCond_DropDown');
        this.uIConditionsInputComboBox = page.locator('#tabUOF_tmpl0_ctrlusrISI_rcConditions_Input');
        this.uIConditionsComboBox = page.locator('#tabUOF_tmpl0_ctrlusrISI_rcConditions_DropDown');
        this.uIWasSubjectArmedWithWeaponComboBox = page.locator('#tabUOF_tmpl0_ctrlusrISI_cddSubWeapon_DropDown');
        this.uIWeaponsInputComboBox = page.locator('#tabUOF_tmpl0_ctrlusrISI_rcWeapons_Input');
        this.uIWeaponsComboBox = page.locator('#tabUOF_tmpl0_ctrlusrISI_rcWeapons_DropDown');
        this.uIListSubjectActionInputComboBox = page.locator('#tabUOF_tmpl0_ctrlusrISI_rcSubActions_Input');
        this.uIListSubjectActionComboBox = page.locator('#tabUOF_tmpl0_ctrlusrISI_rcSubActions_DropDown');
        this.uISubjectActionsEdit = page.locator('#tabUOF_tmpl0_ctrlusrISI_txtSubActions');
        this.uIWasSubjectUnderInfluenceComboBox = page.locator('#tabUOF_tmpl0_ctrlusrISI_cddSubInfluence_DropDown');
        this.uIMedicalAssistanceRequiredLabel = page.locator('#tabUOF_tmpl0_ctrlusrISI_lblMedAssistReq');
        this.uIMedicalAssistanceRequiredDropDown = page.locator('#tabUOF_tmpl0_ctrlusrISI_cddMedAssistReq_DropDown');
        this.uIDidTheOfficerApproachTheSubjectDropdown = page.locator('#tabUOF_tmpl0_ctrlusrISI_cddApproachSubject_DropDown');
        this.uIWasThisAnAmbushIncidentDropdown = page.locator('#tabUOF_tmpl0_ctrlusrISI_cddAmbushInc_DropDown');
        this.uIWasASupervisorPresentDropdown = page.locator('#tabUOF_tmpl0_ctrlusrISI_cddSupPre_DropDown');
        this.uITypeOfIncidentDropdown = page.locator('#tabUOF_tmpl0_ctrlusrISI_cddIncidentType_DropDown');
        this.uIListAnyThreatsDirectedAtOfficersOrOthersDropdown = page.locator('#tabUOF_tmpl0_ctrlusrISI_cddThreat_DropDown');
        this.uIDidTheSubjectResistOfficersDropdown = page.locator('#tabUOF_tmpl0_ctrlusrISI_cddResistOfc_DropDown');
        this.uIWasTheSubjectArmedWithAWeaponDropdown = page.locator('#tabUOF_tmpl0_ctrlusrISI_cddSubWeapon_DropDown');
        this.uIWasTheSubjectUnderTheInfluenceDropdown = page.locator('#tabUOF_tmpl0_ctrlusrISI_cddSubInfluence_DropDown');
        this.uIListTheSubjectActionsDropdown = page.locator('#tabUOF_tmpl0_ctrlusrISI_rcSubActions_Input');
        this.uIListTheSubjectsInjuriesResultingFromUOFDropdown = page.locator('#tabUOF_tmpl0_ctrlusrISI_rcSubInjuries_Input');
        this.uIListTheSubjectsInjuriesResultingFromUOFDropdownArrow = page.locator('#tabUOF_tmpl0_ctrlusrISI_rcSubInjuries_Arrow');
        this.uIListTheSubjectActionsDropdownArrow = page.locator('#tabUOF_tmpl0_ctrlusrISI_rcSubActions_Arrow');
    }

    async enterAtCharge(): Promise<void> {
        await this.uIChargeCodeEdit.fill(BaseData.getPoliceModuleValue('Charge'));
        await this.uIChargeCodeEdit.press('Tab');
    }
}

export class OfficerInformationTabPage {
    readonly page: Page;
    readonly uIOfficerFullTimeEmployeeComboBox: Locator;
    readonly uIWasOfficerOnDutyComboBox: Locator;
    readonly uIWasOfficerInjuredComboBox: Locator;
    readonly uIOfficersInjuriesInputComboBox: Locator;
    readonly uIOfficersInjuriesComboBox: Locator;
    readonly uIIsTheOfficerAFullTimeEmployeeDropdown: Locator;
    readonly uIWasTheOfficerOnDutyDropdown: Locator;
    readonly uIDutyAssignedDropdown: Locator;
    readonly uIDidTheOfficerDischargeAFirearmDropdown: Locator;
    readonly uINoOfShotsFiredEdit: Locator;
    readonly uINoOfHitsEdit: Locator;
    readonly uIWasTheOfficerIdentifiableByClothingDropdown: Locator;
    readonly uIWasTheOfficerInjuredDropdown: Locator;
    readonly uIListTheOfficersInjuriesDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIOfficerFullTimeEmployeeComboBox = page.locator('#tabUOF_tmpl2_ctrlusrOI_cddOffFullTime_DropDown');
        this.uIWasOfficerOnDutyComboBox = page.locator('#tabUOF_tmpl2_ctrlusrOI_cddOnDuty_DropDown');
        this.uIWasOfficerInjuredComboBox = page.locator('#tabUOF_tmpl2_ctrlusrOI_cddOffInjured_DropDown');
        this.uIOfficersInjuriesInputComboBox = page.locator('#tabUOF_tmpl2_ctrlusrOI_rcInjuries_Input');
        this.uIOfficersInjuriesComboBox = page.locator('#tabUOF_tmpl2_ctrlusrOI_rcInjuries_DropDown');
        this.uIIsTheOfficerAFullTimeEmployeeDropdown = page.locator('#tabUOF_tmpl2_ctrlusrOI_cddOffFullTime_DropDown');
        this.uIWasTheOfficerOnDutyDropdown = page.locator('#tabUOF_tmpl2_ctrlusrOI_cddOnDuty_DropDown');
        this.uIDutyAssignedDropdown = page.locator('#tabUOF_tmpl2_ctrlusrOI_cddDutyAssigned_DropDown');
        this.uIDidTheOfficerDischargeAFirearmDropdown = page.locator('#tabUOF_tmpl2_ctrlusrOI_cddDischrgeFireArm_DropDown');
        this.uINoOfShotsFiredEdit = page.locator('#tabUOF_tmpl2_ctrlusrOI_txtShotsFired');
        this.uINoOfHitsEdit = page.locator('#tabUOF_tmpl2_ctrlusrOI_txtHits');
        this.uIWasTheOfficerIdentifiableByClothingDropdown = page.locator('#tabUOF_tmpl2_ctrlusrOI_cddClothing_DropDown');
        this.uIWasTheOfficerInjuredDropdown = page.locator('#tabUOF_tmpl2_ctrlusrOI_cddOffInjured_DropDown');
        this.uIListTheOfficersInjuriesDropdown = page.locator('#tabUOF_tmpl2_ctrlusrOI_rcInjuries_Input');
    }
}

export class UOFDispositionTabPage {
    readonly page: Page;
    readonly uIDispositionPFNoEdit: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIDispositionComboBox: Locator;
    readonly uINotesRichTextEdit: Locator;
    readonly uIDispositionPFDescription: Locator;
    readonly uINotesRichTextEdit1: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIDispositionPFNoEdit = page.locator('#tabUOF_tmpl7_ctrlusrDisposition_lupDisPFID_CodeValue');
        this.uIDateEdit = page.locator('#tabUOF_tmpl7_ctrlusrDisposition_dttmDisp_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='tabUOF_tmpl7_ctrlusrDisposition_dttmDisp_Time']//input");
        this.uIDispositionComboBox = page.locator('#tabUOF_tmpl7_ctrlusrDisposition_cddDisposition_DropDown');
        this.uINotesRichTextEdit = page.locator('#tabUOF_tmpl7_ctrlusrDisposition_rteKPITxt_contentIframe');
        this.uIDispositionPFDescription = page.locator('#tabUOF_tmpl7_ctrlusrDisposition_lupDisPFID_CodeDescription');
        this.uINotesRichTextEdit1 = page.locator('//body');
    }
}

export class InjuryReportTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uISave: Locator;
    readonly uIInjuredFrontUpperLeftChest: Locator;
    readonly uIInjuredPartDescription: Locator;
    readonly uIInjuredPartPanel: Locator;
    readonly uIInjuredRearRightShoulder: Locator;
    readonly uIOfficerRadioButton: Locator;
    readonly uISubjectRadioButton: Locator;
    readonly uISubjectLabel: Locator;
    readonly uIOfficerLabel: Locator;
    readonly uIInjuredFrontRightForehead: Locator;
    readonly uIInjuredFrontLeftForehead: Locator;
    readonly uIFrontRightForeheadBinding: Locator;
    readonly uIFrontLeftForeheadBinding: Locator;
    readonly uIFrontUpperLeftChestdBinding: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uISave = page.locator('#cmdSave');
        this.uIInjuredFrontUpperLeftChest = page.locator("(//*[name()='svg']/*[name()='g'])[19]");
        this.uIInjuredPartDescription = page.locator("//div[@class = 'ng-pristine ng-untouched ng-valid ng-empty ng-valid-maxlength']");
        this.uIInjuredPartPanel = page.locator("//div[@id='injured - parts']/ul/li/div[2]/p[2]/input");
        this.uIInjuredRearRightShoulder = page.locator("//div[@class='panel']//*[name()='g' and @id='212']");
        this.uIOfficerRadioButton = page.locator('#rdoOfficer');
        this.uISubjectRadioButton = page.locator('#rdoSub');
        this.uISubjectLabel = page.locator("//label[text()='Subject' and @for='rdoSub']");
        this.uIOfficerLabel = page.locator("//label[text()='Officer']");
        this.uIInjuredFrontRightForehead = page.locator("(//*[name()='svg']/*[name()='g'])[1]");
        this.uIInjuredFrontLeftForehead = page.locator("(//*[name()='svg']/*[name()='g'])[2]");
        this.uIFrontRightForeheadBinding = page.locator("//p[@class='part-name ng-binding' and contains(text(),'Front Right Forehead')]");
        this.uIFrontLeftForeheadBinding = page.locator("//p[@class='part-name ng-binding' and contains(text(),'Front Left Forehead')]");
        this.uIFrontUpperLeftChestdBinding = page.locator("//p[@class='part-name ng-binding' and contains(text(),'Front Upper Left Chest')]");
    }

    async clickSubjectRadioButton(): Promise<void> {
        await this.uISubjectRadioButton.click();
    }

    async save(): Promise<void> {
        await this.uISave.click();
        await this.popup.confirmYes();
    }
}

export class UOFApprovalTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uINewActionDropdown: Locator;
    readonly uIDateEdit: Locator;
    readonly uISaveApprovalTab: Locator;
    readonly uIApprovalStatusLabel: Locator;
    readonly uIStatusInGrid: Locator;
    readonly uIRejectionCodeDropDown: Locator;
    readonly uIRejectionCount: Locator;
    readonly uIDivisionDropdown: Locator;
    readonly uISectionDropdown: Locator;
    readonly uISquadDropdown: Locator;
    readonly uITimeEdit: Locator;
    readonly uINotesEdit: Locator;
    readonly uIMoreLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uINewActionDropdown = page.locator('#lstStatus');
        this.uIDateEdit = page.locator("//input[@id='dttStatusDttm_Date_KPIDttmCtrl']");
        this.uISaveApprovalTab = page.locator('#cmdSave');
        this.uIApprovalStatusLabel = page.locator('#lblApprovalStatus');
        this.uIStatusInGrid = page.locator("(//table[@id='listMsg']//td[5])[1]");
        this.uIRejectionCodeDropDown = page.locator('#cddRejCode_DropDown');
        this.uIRejectionCount = page.locator('#lblrejcountvalue');
        this.uIDivisionDropdown = page.locator('#cddDivision_DropDown');
        this.uISectionDropdown = page.locator('#cddSection_DropDown');
        this.uISquadDropdown = page.locator('#cddSquad_DropDown');
        this.uITimeEdit = page.locator("//table[@id='dttStatusDttm_Time']//input");
        this.uINotesEdit = page.locator('#txtComments');
        this.uIMoreLink = page.locator("//a[contains(text(),'More')]");
    }

    async selectNewActionAsSendForApproval(): Promise<void> {
        await this.uINewActionDropdown.selectOption({ label: 'Send for Approval' });
    }

    async saveInApprovalTab(): Promise<void> {
        await this.uISaveApprovalTab.click();
        await this.popup.confirmYes();
    }
}

export class UOFSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uIUOFYearEdit: Locator;
    readonly uIUOFNumberEdit: Locator;
    readonly uIOfficerPFCodeEdit: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIResetButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIBackButton: Locator;
    readonly uIUseOfForceSearchGridTable: Locator;
    readonly uIDateResetIcon: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uIFromdate: Locator;
    readonly uINameIDEdit: Locator;
    readonly uITypeOfForceRadInput: Locator;
    readonly uITypeOfForceRadDropDown: Locator;
    readonly uIEffectivenessComboBox: Locator;
    readonly uIReportedDateFromField: Locator;
    readonly uIReportedDateToField: Locator;
    readonly uIFromTimeEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIToTimeEdit: Locator;
    readonly uIUOFInfoIcon: Locator;
    readonly uIJurisDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uICaseYearEdit = page.locator('#nbrCaseNo_Year');
        this.uICaseNumberEdit = page.locator('#nbrCaseNo_Number');
        this.uIUOFYearEdit = page.locator('#nbrUOFNo_Year');
        this.uIUOFNumberEdit = page.locator('#nbrUOFNo_Number');
        this.uIOfficerPFCodeEdit = page.locator('#lupOfficer_CodeValue');
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
        this.uISearchButton = page.locator("//span[contains(text(),'Search')]");
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uIUseOfForceSearchGridTable = page.locator('#grdUseOfForce');
        this.uIDateResetIcon = page.locator('#imgClear');
        this.uINameTypeEdit = page.locator('#txtNID');
        this.uIFromdate = page.locator('#dttFrom_Date_KPIDttmCtrl');
        this.uINameIDEdit = page.locator('#txtNameID');
        this.uITypeOfForceRadInput = page.locator('#cddTypeOfForceUsed_Input');
        this.uITypeOfForceRadDropDown = page.locator('#cddTypeOfForceUsed_DropDown');
        this.uIEffectivenessComboBox = page.locator('#cddEffectiveness_DropDown');
        this.uIReportedDateFromField = page.locator('#dttFrom_Date_KPIDttmCtrl');
        this.uIReportedDateToField = page.locator('#dttTo_Date_KPIDttmCtrl');
        this.uIFromTimeEdit = page.locator("//table[@id='dttFrom_Time']//input");
        this.uIToDateEdit = page.locator('#dttTo_Date_KPIDttmCtrl');
        this.uIToTimeEdit = page.locator("//table[@id='dttTo_Time']//input");
        this.uIUOFInfoIcon = page.locator('#nbrUOFNo_imgBtn');
        this.uIJurisDropdown = page.locator('#lstJuris');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clickReset(): Promise<void> {
        await this.uIResetButton.click();
    }
}

export class UCRPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uISubmissionPeriodEdit: Locator;
    readonly uIToEdit: Locator;
    readonly uIPreparedByEdit: Locator;
    readonly uITitleEdit: Locator;
    readonly uIHeadoFTheDepartmentEdit: Locator;
    readonly uIArsonReportCheckbox: Locator;
    readonly uIAdultArrestReportCheckbox: Locator;
    readonly uIPropertyStolenReportCheckbox: Locator;
    readonly uIGenerateReportButton: Locator;
    readonly uIViewLogFileButton: Locator;
    readonly uIAllReportCheckbox: Locator;
    readonly uIReturnAOffenseReportCheckbox: Locator;
    readonly uILeokaReportCheckbox: Locator;
    readonly uIResetButton: Locator;
    readonly uIJuvenileArrestReportCheckbox: Locator;
    readonly uISupplementalToReturnAReportCheckbox: Locator;
    readonly uILogWindowBody: Locator;
    readonly uIPrintIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uISubmissionPeriodEdit = page.locator('#dttSubFrom_KPIDttmCtrl');
        this.uIToEdit = page.locator('#dttSubTo_KPIDttmCtrl');
        this.uIPreparedByEdit = page.locator('#txtPrepBy');
        this.uITitleEdit = page.locator('#txtTitle');
        this.uIHeadoFTheDepartmentEdit = page.locator('#txtDeptHead');
        this.uIArsonReportCheckbox = page.locator('#chkIsArson');
        this.uIAdultArrestReportCheckbox = page.locator('#chkIsAdult');
        this.uIPropertyStolenReportCheckbox = page.locator('#chkIsPropStln');
        this.uIGenerateReportButton = page.locator('#cmdReport');
        this.uIViewLogFileButton = page.locator('#cmdVwLogFile');
        this.uIAllReportCheckbox = page.locator('#chkIsAll');
        this.uIReturnAOffenseReportCheckbox = page.locator('#chkIsReturnA');
        this.uILeokaReportCheckbox = page.locator('#chkIsLEOKA');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIJuvenileArrestReportCheckbox = page.locator('#chkIsJuvenile');
        this.uISupplementalToReturnAReportCheckbox = page.locator('#chkIsSupRetA');
        this.uILogWindowBody = page.locator('//body');
        this.uIPrintIcon = page.locator('#cmdPrint');
    }

    async clickGenerateReportButton(): Promise<void> {
        await this.uIGenerateReportButton.click();
    }
}

export class ALCScreenPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uIPFTab: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIGroupTab: Locator;
    readonly uIStatusBar: Locator;
    readonly uIPrintIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uIPFTab = page.locator("//span[contains(text(), 'PF#')]");
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uIGroupTab = page.locator("//span[contains(text(), 'Group')]");
        this.uIStatusBar = page.locator("//td[@class='statusBar']//b");
        this.uIPrintIcon = page.locator('#cmdPrint');
    }

    async clickPFTab(): Promise<void> {
        await this.uIPFTab.click();
    }

    async clickGroupTab(): Promise<void> {
        await this.uIGroupTab.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async saveNClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await this.popup.confirmYes();
    }
}

export class OpenRecordsRequestPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIAddNewButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIRelatedCaseNoYearEdit: Locator;
    readonly uIRelatedCaseNumberEdit: Locator;
    readonly uIOpenRecordsRequestTable: Locator;
    readonly uIPhoneNoEdit: Locator;
    readonly uICallYearEdit: Locator;
    readonly uICallNoEdit: Locator;
    readonly uIAssignedToLookupIcon: Locator;
    readonly uIClosedDateEdit: Locator;
    readonly uIAssignedToEdit: Locator;
    readonly uICaseNoEdit: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uIRequestNoYearEdit: Locator;
    readonly uIRequestNoEdit: Locator;
    readonly uILastName: Locator;
    readonly uIFirstName: Locator;
    readonly uIClosedRadioButton: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uIReceivedFromDateEdit: Locator;
    readonly uIReceivedFromTimeEdit: Locator;
    readonly uIReceivedToDateEdit: Locator;
    readonly uIReceivedToTimeEdit: Locator;
    readonly uIOpenRadioButton: Locator;
    readonly uIRequestTypeDropdown: Locator;
    readonly uIAllRadioButton: Locator;
    readonly uIDispositionDropdown: Locator;
    readonly uIAssignedToDescription: Locator;
    readonly uIClosedFromDate: Locator;
    readonly uIClosedFromTime: Locator;
    readonly uIClosedToDate: Locator;
    readonly uIClosedToTime: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameIDNumberEdit: Locator;
    readonly uIMiddleName: Locator;
    readonly uISuffixDropdown: Locator;
    readonly uINameLookupIcon: Locator;
    readonly uIPhoneEdit: Locator;
    readonly uIEmailEdit: Locator;
    readonly uIAnonymousCheckbox: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIClosedToDateEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIAddNewButton = page.locator("(//span[contains(text(),'Add New')])");
        this.uISearchButton = page.locator("(//span[contains(text(),'Search')])");
        this.uIRelatedCaseNoYearEdit = page.locator('#numCaseNbr_Year');
        this.uIRelatedCaseNumberEdit = page.locator('#numCaseNbr_Number');
        this.uIOpenRecordsRequestTable = page.locator('#grdORRequest');
        this.uIPhoneNoEdit = page.locator('#txtPhone');
        this.uICallYearEdit = page.locator('#numCallNbr_Year');
        this.uICallNoEdit = page.locator('#numCallNbr_Number');
        this.uIAssignedToLookupIcon = page.locator('#lupAssignedTo_imgBtn');
        this.uIClosedDateEdit = page.locator('#dttmClosedDttm_Date_KPIDttmCtrl');
        this.uIAssignedToEdit = page.locator('#lupAssignedTo_CodeValue');
        this.uICaseNoEdit = page.locator('#numCaseNbr_Number');
        this.uICaseYearEdit = page.locator('#numCaseNbr_Year');
        this.uIRequestNoYearEdit = page.locator('#nbrRequestNumber_Year');
        this.uIRequestNoEdit = page.locator('#nbrRequestNumber_Number');
        this.uILastName = page.locator('#Namectrl1_LastName');
        this.uIFirstName = page.locator('#Namectrl1_FirstName');
        this.uIClosedRadioButton = page.locator('#rdoIsReportable_1');
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uIReceivedFromDateEdit = page.locator('#dttmReceivedDttm_Date_KPIDttmCtrl');
        this.uIReceivedFromTimeEdit = page.locator("//table[@id='dttmReceivedDttm_Time']//input");
        this.uIReceivedToDateEdit = page.locator('#dttmReceivedToDttm_Date_KPIDttmCtrl');
        this.uIReceivedToTimeEdit = page.locator("//table[@id='dttmReceivedToDttm_Time']//input");
        this.uIOpenRadioButton = page.locator('#rdoIsReportable_0');
        this.uIRequestTypeDropdown = page.locator('#lupRequestType_DropDown');
        this.uIAllRadioButton = page.locator('#rdoIsReportable_2');
        this.uIDispositionDropdown = page.locator('#lupDisposition_DropDown');
        this.uIAssignedToDescription = page.locator('#lupAssignedTo_CodeDescription');
        this.uIClosedFromDate = page.locator('#dttmClosedDttm_Date_KPIDttmCtrl');
        this.uIClosedFromTime = page.locator("//table[@id='dttmClosedDttm_Time']//input");
        this.uIClosedToDate = page.locator('#dttmClosedToDttm_Date_KPIDttmCtrl');
        this.uIClosedToTime = page.locator("//table[@id='dttmClosedToDttm_Time']//input");
        this.uINameTypeEdit = page.locator('#Namectrl1_NameType');
        this.uINameIDNumberEdit = page.locator('#Namectrl1_NameTypeID');
        this.uIMiddleName = page.locator('#Namectrl1_MiddleName');
        this.uISuffixDropdown = page.locator('#Namectrl1_Suffix_DropDown');
        this.uINameLookupIcon = page.locator('#Namectrl1_imgSrch');
        this.uIPhoneEdit = page.locator('#txtPhone');
        this.uIEmailEdit = page.locator('#txtEmail');
        this.uIAnonymousCheckbox = page.locator('#chkAnonymous');
        this.uIRefreshButton = page.locator("//span[text()='Refresh']");
        this.uIPrintIcon = page.locator("//img[@src = '/KPIImages/ico/16_print.gif']");
        this.uIClosedToDateEdit = page.locator('#dttmClosedToDttm_Date_KPIDttmCtrl');
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async enterAtRequestNo(): Promise<void> {
        const reqNo = BaseData.getPoliceModuleValue('RequestNo');
        await this.uIRequestNoYearEdit.fill(reqNo.substring(0, 2));
        await this.uIRequestNoEdit.fill(reqNo.substring(3));
        await this.uIRequestNoEdit.press('Tab');
    }
}

export class OpenRecordRequestEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uIRequestDetailsTab: Locator;
    readonly uIActivityHistoryTab: Locator;
    readonly uIFeesTab: Locator;
    readonly uIReceivedDateEdit: Locator;
    readonly uIDueByDateEdit: Locator;
    readonly uIRequestTypeComboBox: Locator;
    readonly uIRelatedCaseYearEdit: Locator;
    readonly uIRelatedCaseNumberEdit: Locator;
    readonly uITotalPagesEdit: Locator;
    readonly uIStatusOpenRadioButton: Locator;
    readonly uIStatusCloseRadioButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIStatusTextView: Locator;
    readonly uIStatusDueDateTextView: Locator;
    readonly uIAttachmentsTab: Locator;
    readonly uIAssignedToEdit: Locator;
    readonly uICallyearEdit: Locator;
    readonly uICallNoEdit: Locator;
    readonly uIAssignedToLookUpButton: Locator;
    readonly uIRequestYearEdit: Locator;
    readonly uIRequestNoEdit: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uIDispositionDropdown: Locator;
    readonly uIClosedDateEdit: Locator;
    readonly uIPrintIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uIRequestDetailsTab = page.locator("(//span[contains(text(),'Request Details')])");
        this.uIActivityHistoryTab = page.locator("(//span[contains(text(),'Activity History')])");
        this.uIFeesTab = page.locator("(//span[contains(text(),'Fees')])");
        this.uIReceivedDateEdit = page.locator('#dttmReceivedDttm_Date_KPIDttmCtrl');
        this.uIDueByDateEdit = page.locator('#dttmDueDate_KPIDttmCtrl');
        this.uIRequestTypeComboBox = page.locator('#lupRequestType_DropDown');
        this.uIRelatedCaseYearEdit = page.locator('#numCaseNbr_Year');
        this.uIRelatedCaseNumberEdit = page.locator('#numCaseNbr_Number');
        this.uITotalPagesEdit = page.locator('#txtTotalPages');
        this.uIStatusOpenRadioButton = page.locator('#radOpen');
        this.uIStatusCloseRadioButton = page.locator('#radClose');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uIStatusTextView = page.locator('#lblStatus');
        this.uIStatusDueDateTextView = page.locator('#lblOpenDays');
        this.uIAttachmentsTab = page.locator("(//span[contains(text(),'Attachments')])");
        this.uIAssignedToEdit = page.locator('#lupAssignedTo_CodeValue');
        this.uICallyearEdit = page.locator('#numCallNbr_Year');
        this.uICallNoEdit = page.locator('#numCallNbr_Number');
        this.uIAssignedToLookUpButton = page.locator('#lupAssignedTo_imgBtn');
        this.uIRequestYearEdit = page.locator('#nbrRequestNumber_Year');
        this.uIRequestNoEdit = page.locator('#nbrRequestNumber_Number');
        this.uILeftSideStatusBar = page.locator("//td[@class='statusBar']/b");
        this.uIDispositionDropdown = page.locator('#lupDisposition_DropDown');
        this.uIClosedDateEdit = page.locator('#dttmClosedDt_Date_KPIDttmCtrl');
        this.uIPrintIcon = page.locator('#cmdPrint');
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async saveNCloseScreen(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await this.popup.confirmYes();
    }

    async close(): Promise<void> {
        await this.page.close();
    }
}

export class ReportStatusScreenTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uISearchResultGrid: Locator;
    readonly uISearchButton: Locator;
    readonly uIStatusComboBox: Locator;
    readonly uIShowMyItemOnlyCheckBox: Locator;
    readonly uINextButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uIStatusDropdown: Locator;
    readonly uIShowMyItemsOnlyCheckBox: Locator;
    readonly uIExcelIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uISearchResultGrid = page.locator('#grdCBEReports');
        this.uISearchButton = page.locator('#cmdSearch');
        this.uIStatusComboBox = page.locator('#lstReportStatus');
        this.uIShowMyItemOnlyCheckBox = page.locator('#chkMyItem');
        this.uINextButton = page.locator('#grdCBEReports_ctl00_lnkbtnNext');
        this.uIRefreshButton = page.locator("//span[contains(text(),'Refresh')]");
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uIStatusDropdown = page.locator('#lstReportStatus');
        this.uIShowMyItemsOnlyCheckBox = page.locator('#chkMyItem');
        this.uIExcelIcon = page.locator("//img[contains(@src,'excel')]");
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }
}

export class BoloScreenTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uIEditBoloTextButton: Locator;
    readonly uIRefreshButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uIEditBoloTextButton = page.locator('#cmdEditBoloText');
        this.uIRefreshButton = page.locator('#cmdRefresh');
    }

    async clickEditBoloTextButton(): Promise<void> {
        await this.uIEditBoloTextButton.click();
    }

    async clickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }
}

export class ComplaintEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uIComplaintYearEdit: Locator;
    readonly uIComplaintNumberEdit: Locator;
    readonly uIReportedDateEdit: Locator;
    readonly uIReportedTimeEdit: Locator;
    readonly uIComplaintTypeComboBox: Locator;
    readonly uIComplaintAgainstLastNameEdit: Locator;
    readonly uIComplaintAgainstFirstNameEdit: Locator;
    readonly uIIncidentLocationEdit: Locator;
    readonly uIIncidentLocationVerifyCheckbox: Locator;
    readonly uIAgencyEmployedByComboBox: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIAnonymousCheckbox: Locator;
    readonly uIComplaintAgainstEdit: Locator;
    readonly uIComplaintDetailsTab: Locator;
    readonly uIIncidentCategoryComboBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uIComplaintYearEdit = page.locator('#nbrComplaintNumber_Year');
        this.uIComplaintNumberEdit = page.locator('#nbrComplaintNumber_Number');
        this.uIReportedDateEdit = page.locator('#dttmReported_Date_KPIDttmCtrl');
        this.uIReportedTimeEdit = page.locator("//table[@id='dttmReported_Time']//input");
        this.uIComplaintTypeComboBox = page.locator('#cddCompType_DropDown');
        this.uIComplaintAgainstLastNameEdit = page.locator('#NmRawEntryComplaintAgainst_LastName');
        this.uIComplaintAgainstFirstNameEdit = page.locator('#NmRawEntryComplaintAgainst_FirstName');
        this.uIIncidentLocationEdit = page.locator('#addrAddress_txtFrom');
        this.uIIncidentLocationVerifyCheckbox = page.locator('#addrAddress_chkVerify');
        this.uIAgencyEmployedByComboBox = page.locator('#CddAgencyEmpBy_DropDown');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIAnonymousCheckbox = page.locator('#chkAnonymous');
        this.uIComplaintAgainstEdit = page.locator('#txtComplaintAgainst');
        this.uIComplaintDetailsTab = page.locator("//span[contains(text(),'Complaint Details')]");
        this.uIIncidentCategoryComboBox = page.locator('#cddIncCategory_DropDown');
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }
}

export class PursuitCaseEntryPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly popup: PopupHelpers;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIOfficerEdit: Locator;
    readonly uIOfficerDescriptionEdit: Locator;
    readonly uISupervisorEdit: Locator;
    readonly uITrafficViolationCheckbox: Locator;
    readonly uIWeatherComboBox: Locator;
    readonly uIWarrantCheckbox: Locator;
    readonly uISuspectCriminalInvolmentCheckbox: Locator;
    readonly uIChargeEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIPursuitChargeTable: Locator;
    readonly uIReasonPursuitTerminatedComboBox: Locator;
    readonly uIChargeLookupIcon: Locator;
    readonly uINoPeoplePursedVehicleEdit: Locator;
    readonly uINoPeopleArrestedEdit: Locator;
    readonly uIRoadSurfaceComboBox: Locator;
    readonly uIStatusMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.popup = new PopupHelpers(page);
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIOfficerEdit = page.locator('#lupOfficer_CodeValue');
        this.uIOfficerDescriptionEdit = page.locator('#lupOfficer_CodeDescription');
        this.uISupervisorEdit = page.locator('#lupSupOfficer_CodeValue');
        this.uITrafficViolationCheckbox = page.locator('#chkTraffViol');
        this.uIWeatherComboBox = page.locator('#cddWeather_DropDown');
        this.uIWarrantCheckbox = page.locator('#chkWarrant');
        this.uISuspectCriminalInvolmentCheckbox = page.locator('#chkSuspCrim');
        this.uIChargeEdit = page.locator('#lupOrgCharge_CodeValue');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIPursuitChargeTable = page.locator('#grdPursuitCharge');
        this.uIReasonPursuitTerminatedComboBox = page.locator('#cddReasonPurTermin_DropDown');
        this.uIChargeLookupIcon = page.locator('#lupOrgCharge_imgBtn');
        this.uINoPeoplePursedVehicleEdit = page.locator('#txtPeoplePursedVeh');
        this.uINoPeopleArrestedEdit = page.locator('#txtNoPeopleArrested');
        this.uIRoadSurfaceComboBox = page.locator('#cddRoadSurface_DropDown');
        this.uIStatusMessage = page.locator("//td[@class='statusBar']//b");
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }
}

export class IBRSubmissionScreenTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uISubmissionLink: Locator;
    readonly uIReSubmissionLink: Locator;
    readonly uIDetailsLink: Locator;
    readonly uIViewTextFileLink: Locator;
    readonly uISearchButton: Locator;
    readonly uIIBRSubmissionTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uISubmissionLink = page.locator("//span[@title = 'Submission']");
        this.uIReSubmissionLink = page.locator("//span[contains(text(),'ReSubmission')]");
        this.uIDetailsLink = page.locator("//span[contains(text(),'Details')]");
        this.uIViewTextFileLink = page.locator("//span[contains(text(),'View Text File')]");
        this.uISearchButton = page.locator('#cmdSearch');
        this.uIIBRSubmissionTable = page.locator('#grdSubInquiry');
    }

    async clickSubmissionLink(): Promise<void> {
        await this.uISubmissionLink.click();
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }
}

export class IBRSubmissionEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIViewReportButton: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIRemarksEdit: Locator;
    readonly uIIncidentDataButton: Locator;
    readonly uIGenerateFileButton: Locator;
    readonly uIDetailsButton: Locator;
    readonly uIWarningMessageTextView: Locator;
    readonly uIYesButton: Locator;
    readonly uINoButton: Locator;
    readonly uIDetailInfoButton: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIBatchYearEdit: Locator;
    readonly uIBatchNoEdit: Locator;
    readonly uIViewTextFileButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIViewReportButton = page.locator('#cmdReport');
        this.uIToDateEdit = page.locator('#dttSubTo_KPIDttmCtrl');
        this.uIRemarksEdit = page.locator('#txtRemarks');
        this.uIIncidentDataButton = page.locator('#cmdIncData');
        this.uIGenerateFileButton = page.locator('#cmdGenFile');
        this.uIDetailsButton = page.locator('#cmdDetails');
        this.uIWarningMessageTextView = page.locator("//div[@class = 'modal-body']");
        this.uIYesButton = page.locator("//button[contains(text(),'Yes')]");
        this.uINoButton = page.locator("//button[contains(text(),'No')]");
        this.uIDetailInfoButton = page.locator('#btnDetailIncInfo');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIBatchYearEdit = page.locator('#nbrBatchNo_Year');
        this.uIBatchNoEdit = page.locator('#nbrBatchNo_Number');
        this.uIViewTextFileButton = page.locator('#cmdViewText');
    }

    async clickGenerateFileButton(): Promise<void> {
        await this.uIGenerateFileButton.click();
    }
}

export class ProfileSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uISearchButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIBackButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIProfileTable: Locator;
    readonly uITowComboBox: Locator;
    readonly uITotalNoOfOccupantsInCarEdit: Locator;
    readonly uIInclideCompletedCheckbox: Locator;
    readonly uIEthicityofDriverComboBox: Locator;
    readonly uIProfileYearEdit: Locator;
    readonly uIProfileNoEdit: Locator;
    readonly uIFromDateEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIProfileInfoIcon: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uIOfficerLookupIcon: Locator;
    readonly uICallNoYear: Locator;
    readonly uICallNoEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uISearchButton = page.locator("(//span[contains(text(),'Search')])");
        this.uIResetButton = page.locator("(//span[contains(text(),'Reset')])");
        this.uIBackButton = page.locator("(//span[contains(text(),'Back')])");
        this.uIAddNewButton = page.locator("(//span[contains(text(),'Add New')])");
        this.uIPrintIcon = page.locator("(//li[contains(@title,'Print')])");
        this.uIProfileTable = page.locator('#grdProfile');
        this.uITowComboBox = page.locator('#tabProfile_tmpl0_ctrlUsrProfileMain_cddTow_DropDown');
        this.uITotalNoOfOccupantsInCarEdit = page.locator('#tabProfile_tmpl0_ctrlUsrProfileMain_txtOccupants');
        this.uIInclideCompletedCheckbox = page.locator('#tabProfile_tmpl0_ctrlUsrProfileMain_chkCompleted');
        this.uIEthicityofDriverComboBox = page.locator('#tabProfile_tmpl0_ctrlUsrProfileMain_cddEthicity_DropDown');
        this.uIProfileYearEdit = page.locator('#tabProfile_tmpl0_ctrlUsrProfileMain_nmcProNbr_Year');
        this.uIProfileNoEdit = page.locator('#tabProfile_tmpl0_ctrlUsrProfileMain_nmcProNbr_Number');
        this.uIFromDateEdit = page.locator('#tabProfile_tmpl0_ctrlUsrProfileMain_dttFrom_Date_KPIDttmCtrl');
        this.uIToDateEdit = page.locator('#tabProfile_tmpl0_ctrlUsrProfileMain_dttTo_Date_KPIDttmCtrl');
        this.uIProfileInfoIcon = page.locator('#tabProfile_tmpl0_ctrlUsrProfileMain_nmcProNbr_imgBtn');
        this.uIJurisDropdown = page.locator('#tabProfile_tmpl0_ctrlUsrProfileMain_lstJuris');
        this.uIOfficerLookupIcon = page.locator('#tabProfile_tmpl0_ctrlUsrProfileMain_lupPF_imgBtn');
        this.uICallNoYear = page.locator('#tabProfile_tmpl0_ctrlUsrProfileMain_nbrCallNumber_Year');
        this.uICallNoEdit = page.locator('#tabProfile_tmpl0_ctrlUsrProfileMain_nbrCallNumber_Number');
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickReset(): Promise<void> {
        await this.uIResetButton.click();
    }
}

export class VehicleProfilePage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uICallYearEdit: Locator;
    readonly uICallNoEdit: Locator;
    readonly uICallInfoIcon: Locator;
    readonly uIProfileYearEdit: Locator;
    readonly uIProfileNoEdit: Locator;
    readonly uIOfficerEdit: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uILocationCodeEdit: Locator;
    readonly uIPlateNoEdit: Locator;
    readonly uIStateComboBox: Locator;
    readonly uIRaceOfDriverComboBox: Locator;
    readonly uIDriverGenderComboBox: Locator;
    readonly uITotalNoOfOccupantsInCarEdit: Locator;
    readonly uIAssignmentStatusComboBox: Locator;
    readonly uIReasonForStopComboBox: Locator;
    readonly uIResultOfStopComboBox: Locator;
    readonly uIDurationOfStopComboBox: Locator;
    readonly uIRoadClassificationComboBox: Locator;
    readonly uISearchAsResultStopComboBox: Locator;
    readonly uITowComboBox: Locator;
    readonly uIReasonableSuspicionCheckbox: Locator;
    readonly uIInventoryCheckbox: Locator;
    readonly uIDriverCheckbox: Locator;
    readonly uIVehicleCheckbox: Locator;
    readonly uIDrugsDrugParaphernaliaCheckbox: Locator;
    readonly uIWeaponsCheckbox: Locator;
    readonly uIEthicityofDriverComboBox: Locator;
    readonly uIPlateTypeComboBox: Locator;
    readonly uIOptionalRaceInfo: Locator;
    readonly uICitationNo: Locator;
    readonly uICustomField3: Locator;
    readonly uIResidencyComboBox: Locator;
    readonly uIDriverYearOfBirth: Locator;
    readonly uISpeedDeterminedByDropdown: Locator;
    readonly uIOptionalRaceInformationEdit: Locator;
    readonly uIResidencyDropDown: Locator;
    readonly uISpeedDeterminedByDropDown: Locator;
    readonly uITowLabel: Locator;
    readonly uIFooterStatusLabel: Locator;
    readonly uIAgencyCodeEdit: Locator;
    readonly uIJurisDropDown: Locator;
    readonly uIDriverYearOfBirthLabel: Locator;
    readonly uIConsentCheckbox: Locator;
    readonly uIProbableCauseCheckbox: Locator;
    readonly uISearchIncidentToArrestCheckbox: Locator;
    readonly uIPassengerCheckbox: Locator;
    readonly uINothingFoundCheckbox: Locator;
    readonly uIAlcoholCheckbox: Locator;
    readonly uIMoneyCheckbox: Locator;
    readonly uIOtherCheckbox: Locator;
    readonly uICitationInfoIcon: Locator;
    readonly uIReasonForSearchLabel: Locator;
    readonly uICustomField2: Locator;
    readonly uICustomField1: Locator;
    readonly uIDeleteIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uICallYearEdit = page.locator('#nbrCallNbr_Year');
        this.uICallNoEdit = page.locator('#nbrCallNbr_Number');
        this.uICallInfoIcon = page.locator('#nbrCallNbr_imgBtn');
        this.uIProfileYearEdit = page.locator('#nbrProfileNbr_Year');
        this.uIProfileNoEdit = page.locator('#nbrProfileNbr_Number');
        this.uIOfficerEdit = page.locator('#tabProfile_tmpl0_usrProfile_lupPF_CodeValue');
        this.uIDateEdit = page.locator('#dttmCall_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id ='dttmCall_Time']//input");
        this.uILocationCodeEdit = page.locator('#txtLocCode');
        this.uIPlateNoEdit = page.locator('#tabProfile_tmpl0_usrProfile_plcVeh_PlateNumber');
        this.uIStateComboBox = page.locator('#tabProfile_tmpl0_usrProfile_plcVeh_KPIState');
        this.uIRaceOfDriverComboBox = page.locator('#tabProfile_tmpl0_usrProfile_cddRace_DropDown');
        this.uIDriverGenderComboBox = page.locator('#tabProfile_tmpl0_usrProfile_cddSex_DropDown');
        this.uITotalNoOfOccupantsInCarEdit = page.locator('#tabProfile_tmpl0_usrProfile_txtOccupants');
        this.uIAssignmentStatusComboBox = page.locator('#tabProfile_tmpl0_usrProfile_cddAssignStatus_DropDown');
        this.uIReasonForStopComboBox = page.locator('#tabProfile_tmpl0_usrProfile_cddReason_DropDown');
        this.uIResultOfStopComboBox = page.locator('#tabProfile_tmpl0_usrProfile_cddResult_DropDown');
        this.uIDurationOfStopComboBox = page.locator('#tabProfile_tmpl0_usrProfile_cddDuration_DropDown');
        this.uIRoadClassificationComboBox = page.locator('#tabProfile_tmpl0_usrProfile_cddRoadClass_DropDown');
        this.uISearchAsResultStopComboBox = page.locator('#tabProfile_tmpl0_usrProfile_cddSrchAsStop_DropDown');
        this.uITowComboBox = page.locator('#tabProfile_tmpl0_usrProfile_cddTow_DropDown');
        this.uIReasonableSuspicionCheckbox = page.locator('#tabProfile_tmpl0_usrProfile_chkIsSuspicion');
        this.uIInventoryCheckbox = page.locator('#tabProfile_tmpl0_usrProfile_chkIsInventory');
        this.uIDriverCheckbox = page.locator('#tabProfile_tmpl0_usrProfile_chkIsDriver');
        this.uIVehicleCheckbox = page.locator('#tabProfile_tmpl0_usrProfile_chkIsVehicle');
        this.uIDrugsDrugParaphernaliaCheckbox = page.locator('#tabProfile_tmpl0_usrProfile_chkIsDrugs');
        this.uIWeaponsCheckbox = page.locator('#tabProfile_tmpl0_usrProfile_chkIsWeapons');
        this.uIEthicityofDriverComboBox = page.locator('#tabProfile_tmpl0_usrProfile_cddEthicity_DropDown');
        this.uIPlateTypeComboBox = page.locator('#tabProfile_tmpl0_usrProfile_txtPlateType');
        this.uIOptionalRaceInfo = page.locator('#tabProfile_tmpl0_usrProfile_txtRaceInfo');
        this.uICitationNo = page.locator('#tabProfile_tmpl0_usrProfile_txtCitationNo_CitationNbr');
        this.uICustomField3 = page.locator('#tabProfile_tmpl0_usrProfile_txtCustom3');
        this.uIResidencyComboBox = page.locator('#tabProfile_tmpl0_usrProfile_cddResidency_DropDown');
        this.uIDriverYearOfBirth = page.locator('#tabProfile_tmpl0_usrProfile_txtBirthYear');
        this.uISpeedDeterminedByDropdown = page.locator('#tabProfile_tmpl0_usrProfile_cddSpeed_DropDown');
        this.uIOptionalRaceInformationEdit = page.locator('#tabProfile_tmpl0_usrProfile_txtRaceInfo');
        this.uIResidencyDropDown = page.locator('#tabProfile_tmpl0_usrProfile_cddResidency_DropDown');
        this.uISpeedDeterminedByDropDown = page.locator('#tabProfile_tmpl0_usrProfile_cddSpeed_DropDown');
        this.uITowLabel = page.locator('#tabProfile_tmpl0_usrProfile_lblTow');
        this.uIFooterStatusLabel = page.locator("//td[@class='statusBar']/b");
        this.uIAgencyCodeEdit = page.locator('#txtAgencyCode');
        this.uIJurisDropDown = page.locator('#lstJuris');
        this.uIDriverYearOfBirthLabel = page.locator('#tabProfile_tmpl0_usrProfile_lblDriverYearofBirth');
        this.uIConsentCheckbox = page.locator('#tabProfile_tmpl0_usrProfile_chkIsConsent');
        this.uIProbableCauseCheckbox = page.locator('#tabProfile_tmpl0_usrProfile_chkIsCause');
        this.uISearchIncidentToArrestCheckbox = page.locator('#tabProfile_tmpl0_usrProfile_chkIsSrchIncArr');
        this.uIPassengerCheckbox = page.locator('#tabProfile_tmpl0_usrProfile_chkIsPassenger');
        this.uINothingFoundCheckbox = page.locator('#tabProfile_tmpl0_usrProfile_chkIsNotFound');
        this.uIAlcoholCheckbox = page.locator('#tabProfile_tmpl0_usrProfile_chkIsAlcohol');
        this.uIMoneyCheckbox = page.locator('#tabProfile_tmpl0_usrProfile_chkIsMoney');
        this.uIOtherCheckbox = page.locator('#tabProfile_tmpl0_usrProfile_chkIsOther');
        this.uICitationInfoIcon = page.locator('#tabProfile_tmpl0_usrProfile_txtCitationNo_imgBtn');
        this.uIReasonForSearchLabel = page.locator('#tabProfile_tmpl0_usrProfile_lblReasonforSearch');
        this.uICustomField2 = page.locator('#tabProfile_tmpl0_usrProfile_txtCustom2');
        this.uICustomField1 = page.locator('#tabProfile_tmpl0_usrProfile_txtCustom1');
        this.uIDeleteIcon = page.locator('#cmdDelete');
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async saveAndClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        await this.popup.confirmYes();
    }
}

export class ViewTextFileEntryPage {
    readonly page: Page;
    readonly uIViewText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIViewText = page.locator('pre');
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }
}

export class RedactStatusPage {
    readonly page: Page;
    readonly uIOpenPDFforRedactionButton: Locator;
    readonly uIUploadPDFButton: Locator;
    readonly uIReasonforRedactionEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uICancelButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIOpenPDFforRedactionButton = page.locator('#btnOpenPDF');
        this.uIUploadPDFButton = page.locator('#btnUploadPDF');
        this.uIReasonforRedactionEdit = page.locator('#txtRptDesc');
        this.uISaveButton = page.locator('#cmdSave');
        this.uICancelButton = page.locator('#cmdXclose');
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async Close(): Promise<void> {
        await this.page.close();
    }
}

export class SendEmailPage {
    readonly page: Page;
    readonly uISendEmailTo: Locator;
    readonly uISendEmailSubject: Locator;
    readonly uISendEmaiMassage: Locator;
    readonly uISendEmaiSendButton: Locator;
    readonly uISendEmailCancleButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISendEmailTo = page.locator('#txttomail');
        this.uISendEmailSubject = page.locator('#txtSubject');
        this.uISendEmaiMassage = page.locator('#txtMessage');
        this.uISendEmaiSendButton = page.locator('#cmdSendEmail');
        this.uISendEmailCancleButton = page.locator("//div[@id='emailCont']//input[2]");
    }

    async clickOnSendMail(): Promise<void> {
        await this.uISendEmaiSendButton.click();
    }
}

export class NIBRSCheckPage {
    readonly page: Page;
    readonly uIClearenceTypeComboBox: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uINIBRSCheckTable: Locator;
    readonly uINoErrorLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIClearenceTypeComboBox = page.locator('#cddNIBRSDispo_DropDown');
        this.uIDateEdit = page.locator('#dttClearanceDate_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='dttClearanceDate_Time']//input");
        this.uISaveButton = page.locator('#cmdSave');
        this.uINIBRSCheckTable = page.locator('#grdErrorCheck');
        this.uINoErrorLabel = page.locator('#lblNoError');
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }
}

export class UOFDetailPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async Close(): Promise<void> {
        await this.page.close();
    }
}

export class ReportStatusNarrativePage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uITextEdit: Locator;
    readonly uIOfficialUseOnlyButton: Locator;
    readonly uIClearButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uITextBody: Locator;
    readonly uITextEnteredtoBody: Locator;
    readonly uIFontNameDropdown: Locator;
    readonly uIFontSizeDropDown: Locator;
    readonly uIFontArial: Locator;
    readonly uIFontCourierNew: Locator;
    readonly uIFontNameDropdownvalue: Locator;
    readonly uIFontSizeDropDownvalue: Locator;
    readonly uITextFrame: Locator;
    readonly uITextform: Locator;
    readonly uIBoldButton: Locator;
    readonly uITemplateDropDown: Locator;
    readonly uINarrativeText: Locator;
    readonly uIPasteFromWord: Locator;
    readonly uIPasteFromWordSummaryEdit: Locator;
    readonly uIPasteButtonInPopup: Locator;
    readonly uINoteText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uITextEdit = page.locator('#txtStmt');
        this.uIOfficialUseOnlyButton = page.locator('#btnOfficeUseOnly');
        this.uIClearButton = page.locator('#imgClear');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uITextBody = page.locator('//body');
        this.uITextEnteredtoBody = page.locator('//body//div//p//span');
        this.uIFontNameDropdown = page.locator("//li//a[@title='Font Name']");
        this.uIFontSizeDropDown = page.locator("//li//a[@title='Real font size']");
        this.uIFontArial = page.locator("//span[contains(text(),'Arial')]");
        this.uIFontCourierNew = page.locator("//span[contains(text(),'Courier New')]");
        this.uIFontNameDropdownvalue = page.locator("//li//a[@title='Font Name']//span");
        this.uIFontSizeDropDownvalue = page.locator("//li//a[@title='Real font size']//span");
        this.uITextFrame = page.locator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        this.uITextform = page.locator('#frmTextStmtRpt_Id');
        this.uIBoldButton = page.locator('.Bold');
        this.uITemplateDropDown = page.locator('#ctrlUsrKPITxtEdit_lstTextName');
        this.uINarrativeText = page.locator("//body[contains(@style,'font-family:')]");
        this.uIPasteFromWord = page.locator("//span[@class='PasteFromWord']");
        this.uIPasteFromWordSummaryEdit = page.locator("//iframe[@id='holder']");
        this.uIPasteButtonInPopup = page.locator('#InsertButton');
        this.uINoteText = page.locator('#ctrlUsrKPITxtEdit_lblWarning');
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }
}

export class ReportStatusForRedactPage {
    readonly page: Page;
    readonly uIFieldsButton: Locator;
    readonly uIReportStatusRefreshButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIReasonForRedact: Locator;
    readonly uIReasonSaveNClose: Locator;
    readonly uIReasonCancel: Locator;
    readonly uIOtherDataButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIFieldsButton = page.locator('#cmdFields');
        this.uIReportStatusRefreshButton = page.locator('#cmdRefresh');
        this.uISaveAndCloseButton = page.locator('#cmdRptSave');
        this.uIReasonForRedact = page.locator('#txtRedResaon');
        this.uIReasonSaveNClose = page.locator('#cmdSaveReason');
        this.uIReasonCancel = page.locator('#btnRedCancel');
        this.uIOtherDataButton = page.locator('#cmdOtherData');
    }

    async clickFieldsButton(): Promise<void> {
        await this.uIFieldsButton.click();
    }

    async clickSaveAndCloseButton(): Promise<void> {
        await this.uISaveAndCloseButton.click();
    }
}

export class RedactExpungementPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIFieldsTable: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIReportDetailsAccordion: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIFieldsTable = page.locator('#grdFieldsData');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIReportDetailsAccordion = page.locator('#accordion');
    }

    async clickSaveAndClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
    }
}

export class ReportStatusViewRedactReportPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIRedactTable: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIScreenLableMoreThanOneReport: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIRedactTable = page.locator('#grdRedact');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIScreenLableMoreThanOneReport = page.locator('#lblAddDesc');
    }

    async close(): Promise<void> {
        await this.page.close();
    }
}

export class UseOfForceReportEntryPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIAddNewButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIUseOfForceTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIAddNewButton = page.locator("//span[text()='Add New']");
        this.uIResetButton = page.locator("//span[text()='Reset']");
        this.uIUseOfForceTable = page.locator('#grdUseOfForce');
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }
}

export class RepositoryEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uIRepositoryIDEdit: Locator;
    readonly uISave: Locator;
    readonly uISaveAndClose: Locator;
    readonly uIDefaultNameEdit: Locator;
    readonly uICustomNameEdit: Locator;
    readonly uIFieldUsageComboBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uIRepositoryIDEdit = page.locator('#txtRepositoryID');
        this.uISave = page.locator('#cmdSave');
        this.uISaveAndClose = page.locator('#cmdSaveNClose');
        this.uIDefaultNameEdit = page.locator('#txtDefaultName');
        this.uICustomNameEdit = page.locator('#txtCustomName');
        this.uIFieldUsageComboBox = page.locator('#cddFieldUsage_DropDown');
    }

    async clicksaveNClose(): Promise<void> {
        await this.uISaveAndClose.click();
        await this.popup.confirmYes();
    }
}

export class PursuitReportEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uIOfficerEdit: Locator;
    readonly uISupervisorEdit: Locator;
    readonly uIWeatherComboBox: Locator;
    readonly uIRoadSurfaceCombo: Locator;
    readonly uIChargeEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIChargeGrid: Locator;
    readonly uINoOFPeopleInjuredEdit: Locator;
    readonly uINoOFPeoplekilledEdit: Locator;
    readonly uINoOfPeopleInPursuedVechicleEdit: Locator;
    readonly uISave: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uIMainTab: Locator;
    readonly uIApprovalTab: Locator;
    readonly uIStatus: Locator;
    readonly uISaveNdClose: Locator;
    readonly uIDeleteIcon: Locator;
    readonly uIPursuitEntryYear: Locator;
    readonly uIPursuitEntryNumber: Locator;
    readonly uICallInfoIcon: Locator;
    readonly uICaseInfoIcon: Locator;
    readonly uIUnit1: Locator;
    readonly uIUnit2: Locator;
    readonly uIInitiatingAgency: Locator;
    readonly uIInitiatingOfficer: Locator;
    readonly uIAgencyNCICNo: Locator;
    readonly uILocationOfficerBecameInvolved: Locator;
    readonly uIPursuitInitiatedDateEdit: Locator;
    readonly uIPursuitInitiatedTimeEdit: Locator;
    readonly uIPursuitTerminatedDateEdit: Locator;
    readonly uIPursuitTerminatedTimeEdit: Locator;
    readonly uILocationOfficerTerminated: Locator;
    readonly uILocationOfficerBecameInvolvedEdit: Locator;
    readonly uIOfficerBecameInvolvedDateEdit: Locator;
    readonly uIOfficerBecameInvolvedTimeEdit: Locator;
    readonly uICountyEdit: Locator;
    readonly uIPursuedVehiclePlateNo: Locator;
    readonly uIVehicleStateDropdown: Locator;
    readonly uIOfficerTerminatedDateEdit: Locator;
    readonly uIOfficerTerminatedTimeEdit: Locator;
    readonly uITotalDistanceEdit: Locator;
    readonly uIAreaDropdown: Locator;
    readonly uIPursuitTOTCheckbox: Locator;
    readonly uIAgencyConcludedPursuitCheckbox: Locator;
    readonly uIGroundEdit: Locator;
    readonly uIAirEdit: Locator;
    readonly uIMaxSpeedAttained: Locator;
    readonly uISurfaceStreets: Locator;
    readonly uITotalTimeEdit: Locator;
    readonly uIConclusionTab: Locator;
    readonly uIAgencyLabel: Locator;
    readonly uIAgencyEdit: Locator;
    readonly uICallYearEdit: Locator;
    readonly uICallNumberEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uIOfficerEdit = page.locator('#lupOfficer_CodeValue');
        this.uISupervisorEdit = page.locator('#lupSupOfficer_CodeValue');
        this.uIWeatherComboBox = page.locator('#cddWeather_DropDown');
        this.uIRoadSurfaceCombo = page.locator('#cddRoadSurface_DropDown');
        this.uIChargeEdit = page.locator('#lupOrgCharge_CodeValue');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIChargeGrid = page.locator('#grdPursuitCharge');
        this.uINoOFPeopleInjuredEdit = page.locator('#txtInjPursedVeh');
        this.uINoOFPeoplekilledEdit = page.locator('#txtKIlledPursedVeh');
        this.uINoOfPeopleInPursuedVechicleEdit = page.locator('#txtVehAccPursedVeh');
        this.uISave = page.locator('#cmdSave');
        this.uICaseYearEdit = page.locator('#nbrCaseNumber_Year');
        this.uICaseNumberEdit = page.locator('#nbrCaseNumber_Number');
        this.uIMainTab = page.locator("//span[contains(text(),'Main')]");
        this.uIApprovalTab = page.locator("//span[contains(text(),'Approval')]");
        this.uIStatus = page.locator('#lblApprovalStatus');
        this.uISaveNdClose = page.locator('#cmdSaveNClose');
        this.uIDeleteIcon = page.locator('#cmdDelete');
        this.uIPursuitEntryYear = page.locator('#numPursuitNbr_Year');
        this.uIPursuitEntryNumber = page.locator('#numPursuitNbr_Number');
        this.uICallInfoIcon = page.locator('#nbrCallNumber_imgBtn');
        this.uICaseInfoIcon = page.locator('#nbrCaseNumber_imgBtn');
        this.uIUnit1 = page.locator('#txtCar1');
        this.uIUnit2 = page.locator('#txtCar2');
        this.uIInitiatingAgency = page.locator('#txtInitAgency');
        this.uIInitiatingOfficer = page.locator('#txtInitOfficer');
        this.uIAgencyNCICNo = page.locator('#txtAgencyNCIC');
        this.uILocationOfficerBecameInvolved = page.locator('#txtLocOffBecInv');
        this.uIPursuitInitiatedDateEdit = page.locator('#dttTimeOffBecIniti_Date_KPIDttmCtrl');
        this.uIPursuitInitiatedTimeEdit = page.locator("//table[@id='dttTimeOffBecIniti_Time']//input");
        this.uIPursuitTerminatedDateEdit = page.locator('#dttmursuitTerminated_Date_KPIDttmCtrl');
        this.uIPursuitTerminatedTimeEdit = page.locator("//table[@id='dttmursuitTerminated_Time']//input");
        this.uILocationOfficerTerminated = page.locator('#txtOfficerTerminate');
        this.uILocationOfficerBecameInvolvedEdit = page.locator('#txtLocOffBecInv');
        this.uIOfficerBecameInvolvedDateEdit = page.locator('#dttTimeOffinvol_Date_KPIDttmCtrl');
        this.uIOfficerBecameInvolvedTimeEdit = page.locator("//table[@id='dttTimeOffinvol_Time']//input");
        this.uICountyEdit = page.locator('#txtDistance');
        this.uIPursuedVehiclePlateNo = page.locator('#cddState_PlateNumber');
        this.uIVehicleStateDropdown = page.locator('#cddState_KPIState');
        this.uIOfficerTerminatedDateEdit = page.locator('#dttTimeOffTermin_Date_KPIDttmCtrl');
        this.uIOfficerTerminatedTimeEdit = page.locator("//table[@id='dttTimeOffTermin_Time']//input");
        this.uITotalDistanceEdit = page.locator('#txtTotalDistance');
        this.uIAreaDropdown = page.locator('#cddArea_DropDown');
        this.uIPursuitTOTCheckbox = page.locator('#chkPurisuitTOT');
        this.uIAgencyConcludedPursuitCheckbox = page.locator('#chkAgencyConcluded');
        this.uIGroundEdit = page.locator('#txtGround');
        this.uIAirEdit = page.locator('#txtAir');
        this.uIMaxSpeedAttained = page.locator('#txtMaxSpeeds');
        this.uISurfaceStreets = page.locator('#txtSurfaceStreets');
        this.uITotalTimeEdit = page.locator('#txtTotalTime');
        this.uIConclusionTab = page.locator("//span[text()='Conclusion']");
        this.uIAgencyLabel = page.locator('#lblAgency');
        this.uIAgencyEdit = page.locator('#txtAgency');
        this.uICallYearEdit = page.locator('#nbrCallNumber_Year');
        this.uICallNumberEdit = page.locator('#nbrCallNumber_Number');
    }

    async save(): Promise<void> {
        await this.uISave.click();
        await this.popup.confirmYes();
    }
}

export class DirectReportEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uIReportedDate: Locator;
    readonly uIReportedTime: Locator;
    readonly uILocation: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uIYearEdit: Locator;
    readonly uISave: Locator;
    readonly uISaveNClose: Locator;
    readonly uIALCButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uIReportedDate = page.locator('#dttmReported_Date_KPIDttmCtrl');
        this.uIReportedTime = page.locator("//input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uILocation = page.locator('#addrCallCompletionLoc_txtFrom');
        this.uICaseNumberEdit = page.locator('#nbrCaseNumber_Number');
        this.uIYearEdit = page.locator('#nbrCaseNumber_Year');
        this.uISave = page.locator('#cmdSave');
        this.uISaveNClose = page.locator('#cmdSaveNClose');
        this.uIALCButton = page.locator('#ALC');
    }

    async Save(): Promise<void> {
        await this.uISave.click();
        await this.popup.confirmYes();
    }
}

export class RecordsSuspectSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uISearchButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIBackButton: Locator;
    readonly uISuspectSearchResultgrid: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIAddNewButtonLink: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIVehicleColorDropdownArrow: Locator;
    readonly uIVehicleColorDropdownValues: Locator;
    readonly uIBasicTab: Locator;
    readonly uIDescriptionEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uISearchButton = page.locator("//span[contains(text(),'Search')]");
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uISuspectSearchResultgrid = page.locator('#grdSuspect');
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIAddNewButtonLink = page.locator("//li[@title='Add New Item']");
        this.uILastNameEdit = page.locator('#tabSuspSrch_tmpl0_UsrSuspSrchBasic1_txtLastName');
        this.uIFirstNameEdit = page.locator('#tabSuspSrch_tmpl0_UsrSuspSrchBasic1_txtFirstName');
        this.uIVehicleColorDropdownArrow = page.locator('#tabSuspSrch_tmpl0_UsrSuspSrchBasic1_cddVehicleColor_Arrow');
        this.uIVehicleColorDropdownValues = page.locator('#tabSuspSrch_tmpl0_UsrSuspSrchBasic1_cddVehicleColor_DropDown');
        this.uIBasicTab = page.locator("//span[contains(text(),'Basic')]");
        this.uIDescriptionEdit = page.locator('#tabSuspSrch_tmpl0_UsrSuspSrchBasic1_txtDesc');
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }
}

export class UnitHistorySearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIOfficerNoEdit: Locator;
    readonly uIUnitnameEdit: Locator;
    readonly uISearchButton: Locator;
    readonly uIExpandButton: Locator;
    readonly uIUnitHistorySearchTable: Locator;
    readonly uIActionFromDateEdit: Locator;
    readonly uIActionFromTimeEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIOfficerNoEdit = page.locator('#lupOnCallOffID_CodeValue');
        this.uIUnitnameEdit = page.locator('#txtUnitRef');
        this.uISearchButton = page.locator('#cmdSearch');
        this.uIExpandButton = page.locator('.ighg_HGridExpandButton');
        this.uIUnitHistorySearchTable = page.locator("//div[contains(@id,'grdUnit_ctl00')]/table");
        this.uIActionFromDateEdit = page.locator('#dtFromCallDate_Date_KPIDttmCtrl');
        this.uIActionFromTimeEdit = page.locator("//table[@id = 'dtFromCallDate_Time']//input");
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }
}

export class CaseUpdateMapTabPage {
    readonly page: Page;
    readonly uIFormName: Locator;
    readonly uILatLongTextView: Locator;
    readonly uILatLongValueTextView: Locator;
    readonly uIUpdateLatLongButton: Locator;
    readonly uIResetButton: Locator;
    readonly uILocationPointer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIFormName = page.locator('#frmGHydrantMapHERE_Id');
        this.uILatLongTextView = page.locator('#lbllatLongvalue');
        this.uILatLongValueTextView = page.locator("//span[@id = 'lbllatLongvalue']/font");
        this.uIUpdateLatLongButton = page.locator('#btnUpdateLatLong');
        this.uIResetButton = page.locator("//button[contains(text(),'Reset')]");
        this.uILocationPointer = page.locator("//body/form[@id='frmGHydrantMapHERE_Id']/div[@id='map_canvas']/div[1]/div[3]/div[3]/div[2]/*[1]");
    }

    async clickReset(): Promise<void> {
        await this.uIResetButton.click();
    }
}

export class DrugOverdoseSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIJurisDropdown: Locator;
    readonly uISearchButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uIDrugOverdoseTable: Locator;
    readonly uIDateResetButton: Locator;
    readonly uIBackButton: Locator;
    readonly uIReportedDate: Locator;
    readonly uIToDate: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uISexComboBox: Locator;
    readonly uIDrugTypeComboBox: Locator;
    readonly uIPrescribingPhysicianNameType: Locator;
    readonly uIPrescribingPhysicianNameID: Locator;
    readonly uIPrescribingPhysicianInfoIcon: Locator;
    readonly uIDrugTyprArrow: Locator;
    readonly uIReportedDateTimeColumnHeader: Locator;
    readonly uIFromDateEdit: Locator;
    readonly uIFromTimeEdit: Locator;
    readonly uIToTimeEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIJurisDropdown = page.locator('#tabDOR_tmpl0_ctrlDORSrchBasic_lstJuris');
        this.uISearchButton = page.locator("//span[contains(text(),'Search')]");
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
        this.uIRefreshButton = page.locator("//span[contains(text(),'Refresh')]");
        this.uICaseYearEdit = page.locator('#tabDOR_tmpl0_ctrlDORSrchBasic_nbrIncidentID_Year');
        this.uICaseNumberEdit = page.locator('#tabDOR_tmpl0_ctrlDORSrchBasic_nbrIncidentID_Number');
        this.uIDrugOverdoseTable = page.locator('#grdDrugOverDose');
        this.uIDateResetButton = page.locator('#tabDOR_tmpl0_ctrlDORSrchBasic_imgClear');
        this.uIBackButton = page.locator("//span[text()='Back']");
        this.uIReportedDate = page.locator('#tabDOR_tmpl0_ctrlDORSrchBasic_dttFrom_Date_KPIDttmCtrl');
        this.uIToDate = page.locator('#tabDOR_tmpl0_ctrlDORSrchBasic_dttTo_Date_KPIDttmCtrl');
        this.uILastNameEdit = page.locator('#tabDOR_tmpl0_ctrlDORSrchBasic_nmcName_LastName');
        this.uIFirstNameEdit = page.locator('#tabDOR_tmpl0_ctrlDORSrchBasic_nmcName_FirstName');
        this.uISexComboBox = page.locator('#tabDOR_tmpl0_ctrlDORSrchBasic_cddSex_DropDown');
        this.uIDrugTypeComboBox = page.locator('#tabDOR_tmpl0_ctrlDORSrchBasic_cddDrugType_Input');
        this.uIPrescribingPhysicianNameType = page.locator('#tabDOR_tmpl0_ctrlDORSrchBasic_nmcPhysician_NameType');
        this.uIPrescribingPhysicianNameID = page.locator('#tabDOR_tmpl0_ctrlDORSrchBasic_nmcPhysician_NameTypeID');
        this.uIPrescribingPhysicianInfoIcon = page.locator('#tabDOR_tmpl0_ctrlDORSrchBasic_nmcPhysician_imgSrch');
        this.uIDrugTyprArrow = page.locator('#tabDOR_tmpl0_ctrlDORSrchBasic_cddDrugType_Arrow');
        this.uIReportedDateTimeColumnHeader = page.locator("//th[text()='Reported Date/Time']");
        this.uIFromDateEdit = page.locator('#tabDOR_tmpl0_ctrlDORSrchBasic_dttFrom_Date_KPIDttmCtrl');
        this.uIFromTimeEdit = page.locator("//table[@id='tabDOR_tmpl0_ctrlDORSrchBasic_dttFrom_Time']//input");
        this.uIToTimeEdit = page.locator("//table[@id='tabDOR_tmpl0_ctrlDORSrchBasic_dttTo_Time']//input");
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickReset(): Promise<void> {
        await this.uIResetButton.click();
    }
}

export class DrugOverdoseEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uICaseYearEdit: Locator;
    readonly uICaseInfoIcon: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameIDEdit: Locator;
    readonly uINameInfoIcon: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveCloseButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIMainTab: Locator;
    readonly uINotesTab: Locator;
    readonly uIBottomStatusMessage: Locator;
    readonly uIQAFormTab: Locator;
    readonly uIDateOfOverdoseEdit: Locator;
    readonly uITimeOfOverdoseEdit: Locator;
    readonly uIReportedByPFLabel: Locator;
    readonly uIReportedByPF: Locator;
    readonly uINameImageFrontView: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uISexText: Locator;
    readonly uISexLabel: Locator;
    readonly uIDeleteIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uICaseYearEdit = page.locator('#nbrIncidentID_Year');
        this.uICaseInfoIcon = page.locator('#nbrIncidentID_imgBtn');
        this.uICaseNumberEdit = page.locator('#nbrIncidentID_Number');
        this.uINameTypeEdit = page.locator('#nmcName_NameType');
        this.uINameIDEdit = page.locator('#nmcName_NameTypeID');
        this.uINameInfoIcon = page.locator('#nmcName_imgSrch');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveCloseButton = page.locator('#cmdSaveNClose');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIMainTab = page.locator("//span[contains(text(),'Main')]");
        this.uINotesTab = page.locator("//span[text()='Notes']");
        this.uIBottomStatusMessage = page.locator("//td[@class='statusBar']//b");
        this.uIQAFormTab = page.locator("//span[contains(text(),'QA Forms')]");
        this.uIDateOfOverdoseEdit = page.locator('#dtOverdose_KPIDttmCtrl');
        this.uITimeOfOverdoseEdit = page.locator("//table[@id='dttmOverdose_Time']//input");
        this.uIReportedByPFLabel = page.locator('#lblReportedByPF');
        this.uIReportedByPF = page.locator('#lupPF_CodeValue');
        this.uINameImageFrontView = page.locator('#imgNameFrontView');
        this.uILastNameEdit = page.locator('#nmcName_LastName');
        this.uIFirstNameEdit = page.locator('#nmcName_FirstName');
        this.uISexText = page.locator('#txtSex');
        this.uISexLabel = page.locator('#lblSex');
        this.uIDeleteIcon = page.locator('#cmdDelete');
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }
}

export class AtRiskPersonEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uIBottomStatusBar: Locator;
    readonly uISubstanceAbuseDropDown: Locator;
    readonly uIReportStatus: Locator;
    readonly uIPFEdit: Locator;
    readonly uIMainTab: Locator;
    readonly uISummaryTab: Locator;
    readonly uINamesTab: Locator;
    readonly uIEffortsTab: Locator;
    readonly uIAttachmentTab: Locator;
    readonly uIApprovalTab: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIReportedDateEdit: Locator;
    readonly uIReportedTimeEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameIDEdit: Locator;
    readonly uINameInfoIcon: Locator;
    readonly uICallYearEdit: Locator;
    readonly uICallNumberEdit: Locator;
    readonly uIProfileImage: Locator;
    readonly uICreateCallCheckbox: Locator;
    readonly uICallInfoIcon: Locator;
    readonly uICaseInfoIcon: Locator;
    readonly uIHomelessDropdown: Locator;
    readonly uIMentalHealthDropdown: Locator;
    readonly uIFollowUpDate: Locator;
    readonly uISexDropdown: Locator;
    readonly uIGenderDropdown: Locator;
    readonly uIRaceDropdown: Locator;
    readonly uIDobLabel: Locator;
    readonly uINatureOfIncidentDropdown: Locator;
    readonly uIObservationsEdit: Locator;
    readonly uIDispositionOfIncidentDropdown: Locator;
    readonly uITransportedToTreatmentFacilityDropdown: Locator;
    readonly uIBehaviorsAtTimeOfIncidentDropdown: Locator;
    readonly uIKnownPersonFromPriorContactsDropdown: Locator;
    readonly uIForceUsedDropdown: Locator;
    readonly uIOfferedServiceDropdown: Locator;
    readonly uIArrestedDropdown: Locator;
    readonly uIOtherAgenciesInvolvedDropdown: Locator;
    readonly uICustom1Dropdown: Locator;
    readonly uICustom2Dropdown: Locator;
    readonly uICustom3Dropdown: Locator;
    readonly uICustom4Edit: Locator;
    readonly uICustom5Edit: Locator;
    readonly uICustom6Edit: Locator;
    readonly uIAgeText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uICaseYearEdit = page.locator('#nbrCallNumber_Year');
        this.uICaseNumberEdit = page.locator('#nbrCallNumber_Number');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIBottomStatusBar = page.locator("//td[@class='statusBar']//b");
        this.uISubstanceAbuseDropDown = page.locator('#cddSADrug_DropDown');
        this.uIReportStatus = page.locator('#lblApprovalStatus');
        this.uIPFEdit = page.locator('#lupPF_CodeValue');
        this.uIMainTab = page.locator("//span[text()='Main']");
        this.uISummaryTab = page.locator("//span[text()='Summary']");
        this.uINamesTab = page.locator("//span[text()='Names']");
        this.uIEffortsTab = page.locator("//span[text()='Efforts']");
        this.uIAttachmentTab = page.locator("//span[text()='Attachments']");
        this.uIApprovalTab = page.locator("//span[text()='Approval']");
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIReportedDateEdit = page.locator('#dttRecDttm_Date_KPIDttmCtrl');
        this.uIReportedTimeEdit = page.locator("//table[@id='dttRecDttm_Time']//input");
        this.uILastNameEdit = page.locator('#nmcName_LastName');
        this.uIFirstNameEdit = page.locator('#nmcName_FirstName');
        this.uINameTypeEdit = page.locator('#nmcName_NameType');
        this.uINameIDEdit = page.locator('#nmcName_NameTypeID');
        this.uINameInfoIcon = page.locator('#nmcName_imgSrch');
        this.uICallYearEdit = page.locator('#nbrCallNumber_Year');
        this.uICallNumberEdit = page.locator('#nbrCallNumber_Number');
        this.uIProfileImage = page.locator('#imgNameFrontView');
        this.uICreateCallCheckbox = page.locator('#chkCreateCall');
        this.uICallInfoIcon = page.locator('#nbrCallNumber_imgBtn');
        this.uICaseInfoIcon = page.locator('#nbrIncidentID_imgBtn');
        this.uIHomelessDropdown = page.locator('#cddHomeless_DropDown');
        this.uIMentalHealthDropdown = page.locator('#cddMental_DropDown');
        this.uIFollowUpDate = page.locator('#tabARP_tmpl0_ctrlUsrARPMain_dttFollowdttm_KPIDttmCtrl');
        this.uISexDropdown = page.locator('#cddSex_DropDown');
        this.uIGenderDropdown = page.locator('#cddGender_DropDown');
        this.uIRaceDropdown = page.locator('#cddRace_DropDown');
        this.uIDobLabel = page.locator('#lblDOB');
        this.uINatureOfIncidentDropdown = page.locator('#tabARP_tmpl0_ctrlUsrARPMain_cddNatureinc_Input');
        this.uIObservationsEdit = page.locator('#tabARP_tmpl0_ctrlUsrARPMain_txtARPNotes');
        this.uIDispositionOfIncidentDropdown = page.locator('#tabARP_tmpl0_ctrlUsrARPMain_cddDispoincident_Input');
        this.uITransportedToTreatmentFacilityDropdown = page.locator('#tabARP_tmpl0_ctrlUsrARPMain_cddTreatfacility_DropDown');
        this.uIBehaviorsAtTimeOfIncidentDropdown = page.locator('#tabARP_tmpl0_ctrlUsrARPMain_cddBehaveincident_Input');
        this.uIKnownPersonFromPriorContactsDropdown = page.locator('#tabARP_tmpl0_ctrlUsrARPMain_cddKnownPerson_DropDown');
        this.uIForceUsedDropdown = page.locator('#tabARP_tmpl0_ctrlUsrARPMain_cddForceARP_DropDown');
        this.uIOfferedServiceDropdown = page.locator('#tabARP_tmpl0_ctrlUsrARPMain_cddOfferService_DropDown');
        this.uIArrestedDropdown = page.locator('#tabARP_tmpl0_ctrlUsrARPMain_cddArrested_DropDown');
        this.uIOtherAgenciesInvolvedDropdown = page.locator('#tabARP_tmpl0_ctrlUsrARPMain_cddRadOtherAgencycalled_Input');
        this.uICustom1Dropdown = page.locator('#tabARP_tmpl0_ctrlUsrARPMain_cddCustom1_DropDown');
        this.uICustom2Dropdown = page.locator('#tabARP_tmpl0_ctrlUsrARPMain_cddCustom2_DropDown');
        this.uICustom3Dropdown = page.locator('#tabARP_tmpl0_ctrlUsrARPMain_cddCustom3_DropDown');
        this.uICustom4Edit = page.locator('#tabARP_tmpl0_ctrlUsrARPMain_txtCustom4');
        this.uICustom5Edit = page.locator('#tabARP_tmpl0_ctrlUsrARPMain_txtCustom5');
        this.uICustom6Edit = page.locator('#tabARP_tmpl0_ctrlUsrARPMain_txtCustom6');
        this.uIAgeText = page.locator('#txtAge');
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }
}

export class AtRiskPersonSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIAddNewButton: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uISearchButton: Locator;
    readonly uISearchResultGrid: Locator;
    readonly uIResetButton: Locator;
    readonly uIAnonymousCheckbox: Locator;
    readonly uIBackButton: Locator;
    readonly uICallYearEdit: Locator;
    readonly uICallNumberEdit: Locator;
    readonly uIFromDateEdit: Locator;
    readonly uIFromTimeEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIToTimeEdit: Locator;
    readonly uIRefresh: Locator;
    readonly uIJurisCombobox: Locator;
    readonly uIReportYearEdit: Locator;
    readonly uIReportNumberEdit: Locator;
    readonly uIFollowUpFromDateEdit: Locator;
    readonly uIFollowUpToDateEdit: Locator;
    readonly uIReportedByPFEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIMiddleNameEdit: Locator;
    readonly uISuffixNameEdit: Locator;
    readonly uISexDropdown: Locator;
    readonly uIGenderDropdown: Locator;
    readonly uIRaceDropdown: Locator;
    readonly uIDOBEdit: Locator;
    readonly uIAgeEdit: Locator;
    readonly uIHomelessDropdown: Locator;
    readonly uISubstanceAbuseDropdown: Locator;
    readonly uIMentalHealthCrisisDropdown: Locator;
    readonly uILocationTypeDropdown: Locator;
    readonly uILocationDescCommonNameEdit: Locator;
    readonly uIPatrolZoneDropdown: Locator;
    readonly uINatureOfIncidentRadDropdown: Locator;
    readonly uIObservationEdit: Locator;
    readonly uIDispositionOfTheIncidentRadDropdown: Locator;
    readonly uIFacilityTransportedTo: Locator;
    readonly uISummaryEdit: Locator;
    readonly uIBehavioursAtTimeOfIncidentRadDropdown: Locator;
    readonly uIForceUsedDropdown: Locator;
    readonly uIKnownPersonFromPriorContactsDropdown: Locator;
    readonly uIOfferedServicetDropdown: Locator;
    readonly uIArrestedDropdown: Locator;
    readonly uIOtherAgenciesInvolvedRadDropdown: Locator;
    readonly uIcustom1Dropdown: Locator;
    readonly uIcustom2Dropdown: Locator;
    readonly uIcustom3Dropdown: Locator;
    readonly uIcustom4Edit: Locator;
    readonly uIcustom5Edit: Locator;
    readonly uIcustom6Edit: Locator;
    readonly uINatureOfIncidentArrow: Locator;
    readonly uIDispositionOfTheIncidentArrow: Locator;
    readonly uIBehaviorsAtTimeOfIncidentArrow: Locator;
    readonly uIOtherAgenciesInvolvedArrow: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIAddNewButton = page.locator("//span[text()='Add New']");
        this.uICaseYearEdit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_nbrCASeNO_Year');
        this.uICaseNumberEdit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_nbrCASeNO_Number');
        this.uISearchButton = page.locator("//span[text()='Search']");
        this.uISearchResultGrid = page.locator('#grdARPSrch');
        this.uIResetButton = page.locator("//span[text()='Reset']");
        this.uIAnonymousCheckbox = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_ChkAnonymous');
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uICallYearEdit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_nbrIncidentID_Year');
        this.uICallNumberEdit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_nbrIncidentID_Number');
        this.uIFromDateEdit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_dttFrom_Date_KPIDttmCtrl');
        this.uIFromTimeEdit = page.locator("//table[@id='tabARP_tmpl0_ctrlARPSrchBasic_dttFrom_Time']//input");
        this.uIToDateEdit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_dttTo_Date_KPIDttmCtrl');
        this.uIToTimeEdit = page.locator("//table[@id='tabARP_tmpl0_ctrlARPSrchBasic_dttTo_Time']//input");
        this.uIRefresh = page.locator("//span[text()='Refresh']");
        this.uIJurisCombobox = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_lstJuris');
        this.uIReportYearEdit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_nbrReportID_Year');
        this.uIReportNumberEdit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_nbrReportID_Number');
        this.uIFollowUpFromDateEdit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_dttFollowupFrom_KPIDttmCtrl');
        this.uIFollowUpToDateEdit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_dttDttmTo_KPIDttmCtrl');
        this.uIReportedByPFEdit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_lupPF_CodeValue');
        this.uILastNameEdit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_nmcName_LastName');
        this.uIFirstNameEdit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_nmcName_FirstName');
        this.uIMiddleNameEdit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_nmcName_MiddleName');
        this.uISuffixNameEdit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_nmcName_Suffix_DropDown');
        this.uISexDropdown = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_cddSex_DropDown');
        this.uIGenderDropdown = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_cddGender_DropDown');
        this.uIRaceDropdown = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_cddRace_DropDown');
        this.uIDOBEdit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_cddDob_KPIDttmCtrl');
        this.uIAgeEdit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_txtAgeFrom');
        this.uIHomelessDropdown = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_cddHomeless_DropDown');
        this.uISubstanceAbuseDropdown = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_cddSubstance_DropDown');
        this.uIMentalHealthCrisisDropdown = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_cddMentally_DropDown');
        this.uILocationTypeDropdown = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_lsLocationSearch_CddLocationType');
        this.uILocationDescCommonNameEdit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_lsLocationSearch_TxtCommonName');
        this.uIPatrolZoneDropdown = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_cddPatrolArea_DropDown');
        this.uINatureOfIncidentRadDropdown = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_cddIncidentNature_Input');
        this.uIObservationEdit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_txtobservation');
        this.uIDispositionOfTheIncidentRadDropdown = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_cdddisposition_Input');
        this.uIFacilityTransportedTo = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_cddFacility_DropDown');
        this.uISummaryEdit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_txtsummary');
        this.uIBehavioursAtTimeOfIncidentRadDropdown = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_cddBehaviors_Input');
        this.uIForceUsedDropdown = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_chkUseofForce_DropDown');
        this.uIKnownPersonFromPriorContactsDropdown = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_cddpersonknown_DropDown');
        this.uIOfferedServicetDropdown = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_chkofferedservice_DropDown');
        this.uIArrestedDropdown = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_chkArrested_DropDown');
        this.uIOtherAgenciesInvolvedRadDropdown = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_cddAgencies_Input');
        this.uIcustom1Dropdown = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_cddCustom1_DropDown');
        this.uIcustom2Dropdown = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_cddCustom2_DropDown');
        this.uIcustom3Dropdown = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_cddCustom3_DropDown');
        this.uIcustom4Edit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_txtCustom4');
        this.uIcustom5Edit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_txtCustom5');
        this.uIcustom6Edit = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_txtCustom6');
        this.uINatureOfIncidentArrow = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_cddIncidentNature_Arrow');
        this.uIDispositionOfTheIncidentArrow = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_cdddisposition_Arrow');
        this.uIBehaviorsAtTimeOfIncidentArrow = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_cddBehaviors_Arrow');
        this.uIOtherAgenciesInvolvedArrow = page.locator('#tabARP_tmpl0_ctrlARPSrchBasic_cddAgencies_Arrow');
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickReset(): Promise<void> {
        await this.uIResetButton.click();
    }
}

export class AtRiskEffortsEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uIInvestigatorEdit: Locator;
    readonly uIAtRiskPersonCategoryDropDown: Locator;
    readonly uIAtRiskActivityDropDown: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIRichTextEditFrame: Locator;
    readonly uIRichTextEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uINameInfoIcon: Locator;
    readonly uIIfOtherSpecifyEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uIInvestigatorEdit = page.locator('#lupInvPFID_CodeValue');
        this.uIAtRiskPersonCategoryDropDown = page.locator('#CddARPCtegory_DropDown');
        this.uIAtRiskActivityDropDown = page.locator('#CddActivity');
        this.uIDateEdit = page.locator('#dttmstarted_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='dttmstarted_Time']//input");
        this.uIRichTextEditFrame = page.locator('#rteKPITxt_contentIframe');
        this.uIRichTextEdit = page.locator('//body');
        this.uISaveButton = page.locator('#cmdSave');
        this.uINameInfoIcon = page.locator('#nmcName_imgSrch');
        this.uIIfOtherSpecifyEdit = page.locator('#tabARP_tmpl0_ctrlUsrARPMain_txtOtherSpecify');
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }
}

export class PermitSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIAddNewButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIPermitFromYearEdit: Locator;
    readonly uIPermitFromNumberEdit: Locator;
    readonly uIPermitToYearEdit: Locator;
    readonly uIPermitToNumberEdit: Locator;
    readonly uIPermitSearchResult: Locator;
    readonly uIBackButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIStatusDropdown: Locator;
    readonly uITypeEdit: Locator;
    readonly uITypeDescription: Locator;
    readonly uITypeLookupIcon: Locator;
    readonly uICustom1Edit: Locator;
    readonly uICustom2Edit: Locator;
    readonly uIEffectiveFromDateEdit: Locator;
    readonly uIEffectiveToDateEdit: Locator;
    readonly uIPlateStateDropdown: Locator;
    readonly uIPlateNoEdit: Locator;
    readonly uIApplicantLastNameEdit: Locator;
    readonly uIApplicantFirstNameEdit: Locator;
    readonly uIAddressTypeDropdown: Locator;
    readonly uIAddressEdit: Locator;
    readonly uIMunicipalityDropdown: Locator;
    readonly uICustom1Editlabel: Locator;
    readonly uICustom2Editlabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIAddNewButton = page.locator("//span[text()='Add New']");
        this.uISearchButton = page.locator("//span[text()='Search']");
        this.uIPermitFromYearEdit = page.locator('#nbrPermitNoFrm_Year');
        this.uIPermitFromNumberEdit = page.locator('#nbrPermitNoFrm_Number');
        this.uIPermitToYearEdit = page.locator('#nbrPermitNoTo_Year');
        this.uIPermitToNumberEdit = page.locator('#nbrPermitNoTo_Number');
        this.uIPermitSearchResult = page.locator('#grdPermits');
        this.uIBackButton = page.locator("//span[text()='Back']");
        this.uIResetButton = page.locator("//span[text()='Reset']");
        this.uIStatusDropdown = page.locator('#CddStatus_DropDown');
        this.uITypeEdit = page.locator('#lupType_CodeValue');
        this.uITypeDescription = page.locator('#lupType_CodeDescription');
        this.uITypeLookupIcon = page.locator('#lupType_imgBtn');
        this.uICustom1Edit = page.locator('#txtCustom1');
        this.uICustom2Edit = page.locator('#txtCustom2');
        this.uIEffectiveFromDateEdit = page.locator('#dttmEffective_KPIDttmCtrl');
        this.uIEffectiveToDateEdit = page.locator('#dttmExpired_KPIDttmCtrl');
        this.uIPlateStateDropdown = page.locator('#cddPlate_DropDown');
        this.uIPlateNoEdit = page.locator('#txtPlate');
        this.uIApplicantLastNameEdit = page.locator('#txtLastName');
        this.uIApplicantFirstNameEdit = page.locator('#txtFirstName');
        this.uIAddressTypeDropdown = page.locator('#LocationSearch_CddLocationType');
        this.uIAddressEdit = page.locator('#LocationSearch_adrAddrsCtrl_txtFrom');
        this.uIMunicipalityDropdown = page.locator('#cddMunicipality_DropDown');
        this.uICustom1Editlabel = page.locator('#lblCustom1');
        this.uICustom2Editlabel = page.locator('#lblCustom2');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async clickBackButton(): Promise<void> {
        await this.uIBackButton.click();
    }
}

export class PermitEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uITypeEdit: Locator;
    readonly uIExpirationLable: Locator;
    readonly uIAddressEdit: Locator;
    readonly uIEffectiveDate: Locator;
    readonly uIEffectiveTime: Locator;
    readonly uIApplicantTab: Locator;
    readonly uISaveButton: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameIDEdit: Locator;
    readonly uIExpirationDateEdit: Locator;
    readonly uIExpirationTimeEdit: Locator;
    readonly uIFeesTab: Locator;
    readonly uINotesTab: Locator;
    readonly uIHistoryTab: Locator;
    readonly uIFlagsTab: Locator;
    readonly uIContactsTab: Locator;
    readonly uIAttachmentTab: Locator;
    readonly uIPrintIcon: Locator;
    readonly uICustom1EditField: Locator;
    readonly uICustom2EditField: Locator;
    readonly uICustom1Label: Locator;
    readonly uICustom2Label: Locator;
    readonly uIResetButton: Locator;
    readonly uIJurisLabel: Locator;
    readonly uITypeLabel: Locator;
    readonly uIAddressLabel: Locator;
    readonly uIEffectiveFromLabel: Locator;
    readonly uIExpirationLabel: Locator;
    readonly uIDetailsTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uITypeEdit = page.locator('#lupType_CodeValue');
        this.uIExpirationLable = page.locator('#lblExpiration');
        this.uIAddressEdit = page.locator('#adrPermitAddress_txtFrom');
        this.uIEffectiveDate = page.locator('#dttmEffective_Date_KPIDttmCtrl');
        this.uIEffectiveTime = page.locator("//table[@id='dttmEffective_Time']//input");
        this.uIApplicantTab = page.locator("(//span[contains(text(),'Applicant')])");
        this.uISaveButton = page.locator('#cmdSave');
        this.uINameTypeEdit = page.locator('#nbrPermitNo_Year');
        this.uINameIDEdit = page.locator('#nbrPermitNo_Number');
        this.uIExpirationDateEdit = page.locator('#dttmExpire_Date_KPIDttmCtrl');
        this.uIExpirationTimeEdit = page.locator("//table[@id='dttmExpire_Time']//input");
        this.uIFeesTab = page.locator("(//span[contains(text(),'Fees')])");
        this.uINotesTab = page.locator("(//span[contains(text(),'Notes/Conditions')])");
        this.uIHistoryTab = page.locator("(//span[contains(text(),'History')])");
        this.uIFlagsTab = page.locator("(//span[contains(text(),'Flags')])");
        this.uIContactsTab = page.locator("(//span[contains(text(),'Contacts')])");
        this.uIAttachmentTab = page.locator("(//span[contains(text(),'Attachment')])");
        this.uIPrintIcon = page.locator('#cmdPrint');
        this.uICustom1EditField = page.locator('#txtCustom');
        this.uICustom2EditField = page.locator('#txtCustom2');
        this.uICustom1Label = page.locator('#lblCustom');
        this.uICustom2Label = page.locator('#lblCustom2');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIJurisLabel = page.locator('#lblJuris');
        this.uITypeLabel = page.locator('#lblType');
        this.uIAddressLabel = page.locator('#lblPermitAddress');
        this.uIEffectiveFromLabel = page.locator('#lblEffectiveFrom');
        this.uIExpirationLabel = page.locator('#lblExpiration');
        this.uIDetailsTab = page.locator("//span[text()='Details']");
    }

    async enterAtType(): Promise<void> {
        await this.uITypeEdit.fill(BaseData.getPoliceModuleValue('Type'));
        await this.uITypeEdit.press('Tab');
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }
}

export class NCICQueryPage {
    readonly page: Page;
    readonly uILicenseTab: Locator;
    readonly uIResponseTab: Locator;
    readonly uIDLNumberEdit: Locator;
    readonly uISendButton: Locator;
    readonly uINCICResponseResultGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uILicenseTab = page.locator("//span[contains(text(),'License')]");
        this.uIResponseTab = page.locator("//span[contains(text(),'Response')]");
        this.uIDLNumberEdit = page.locator('#txtDLNo');
        this.uISendButton = page.locator('#cmdSend');
        this.uINCICResponseResultGrid = page.locator('#grdNCICResp');
    }

    async switchToLicenseTab(): Promise<void> {
        await this.uILicenseTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmNCICDLQry.aspx');
    }

    async clickResponseTab(): Promise<void> {
        await this.uIResponseTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmNCICResp.aspx');
    }
}

export class NCICSearchPage {
    readonly page: Page;
    readonly uIClassText: Locator;
    readonly uIClassValueText: Locator;
    readonly uIAddNameButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIDateFromEdit: Locator;
    readonly uNCICTransDropDown: Locator;
    readonly uINCICGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIClassText = page.locator("//p[contains(text(),'Class : ')]");
        this.uIClassValueText = page.locator("//p[contains(text(),'Class : ')]//b");
        this.uIAddNameButton = page.locator('#cmdAddName');
        this.uISearchButton = page.locator('#cmdSearch');
        this.uIDateFromEdit = page.locator('#dtFrom_Date_KPIDttmCtrl');
        this.uNCICTransDropDown = page.locator('#cddNcicTrans_DropDown');
        this.uINCICGrid = page.locator('#grdNCIC');
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }
}

export class DAPackagePage {
    readonly page: Page;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uIChargeCodeValueEdit: Locator;
    readonly uIChargeCodeValueDescriptionEdit: Locator;
    readonly uILocationEdit: Locator;
    readonly uICommonNameLabel: Locator;
    readonly uIViewErrorButton: Locator;
    readonly uICloseButton: Locator;
    readonly uIRefreshButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uICaseYearEdit = page.locator('#nbrCaseNumber_Year');
        this.uICaseNumberEdit = page.locator('#nbrCaseNumber_Number');
        this.uIChargeCodeValueEdit = page.locator('#lupCharge_CodeValue');
        this.uIChargeCodeValueDescriptionEdit = page.locator('#lupCharge_CodeDescription');
        this.uILocationEdit = page.locator('#addrFinalLoc_txtFrom');
        this.uICommonNameLabel = page.locator('#lblCommanName');
        this.uIViewErrorButton = page.locator('#cmdViewError');
        this.uICloseButton = page.locator('#cmdClose1');
        this.uIRefreshButton = page.locator('#cmdRefresh');
    }

    async close(): Promise<void> {
        await this.page.close();
    }
}

export class PursuitSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIAddNewButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIFromDateEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uISearchButton: Locator;
    readonly uIPursuitSearchTable: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uIDateReset: Locator;
    readonly uIBackButton: Locator;
    readonly uIPursuitYearEdit: Locator;
    readonly uIPursuitNumberEdit: Locator;
    readonly uIPursuitInfoIcon: Locator;
    readonly uIFromTimeEdit: Locator;
    readonly uIToTimeEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIAddNewButton = page.locator("//span[text()='Add New']");
        this.uIResetButton = page.locator("//span[text()='Reset']");
        this.uIFromDateEdit = page.locator('#tabPursuit_tmpl0_ctrlUsrPursuitBasic_dttFrom_Date_KPIDttmCtrl');
        this.uIToDateEdit = page.locator('#tabPursuit_tmpl0_ctrlUsrPursuitBasic_dttTo_Date_KPIDttmCtrl');
        this.uISearchButton = page.locator("//span[text()='Search']");
        this.uIPursuitSearchTable = page.locator('#grdPursuit');
        this.uICaseYearEdit = page.locator('#tabPursuit_tmpl0_ctrlUsrPursuitBasic_nbrCaseNo_Year');
        this.uICaseNumberEdit = page.locator('#tabPursuit_tmpl0_ctrlUsrPursuitBasic_nbrCaseNo_Number');
        this.uIDateReset = page.locator('#tabPursuit_tmpl0_ctrlUsrPursuitBasic_imgClear');
        this.uIBackButton = page.locator("//span[text()='Back']");
        this.uIPursuitYearEdit = page.locator('#tabPursuit_tmpl0_ctrlUsrPursuitBasic_nbrPursuitNo_Year');
        this.uIPursuitNumberEdit = page.locator('#tabPursuit_tmpl0_ctrlUsrPursuitBasic_nbrPursuitNo_Number');
        this.uIPursuitInfoIcon = page.locator('#tabPursuit_tmpl0_ctrlUsrPursuitBasic_nbrPursuitNo_imgBtn');
        this.uIFromTimeEdit = page.locator("//table[@id='tabPursuit_tmpl0_ctrlUsrPursuitBasic_dttFrom_Time']//input");
        this.uIToTimeEdit = page.locator("//table[@id='tabPursuit_tmpl0_ctrlUsrPursuitBasic_dttTo_Time']//input");
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clickReset(): Promise<void> {
        await this.uIResetButton.click();
    }
}

export class InvestigationDetailsPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uICaseGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uICaseGrid = page.locator('#grdCases');
    }

    async close(): Promise<void> {
        await this.page.close();
    }
}

export class ReportCommentsPage {
    readonly page: Page;
    readonly uIClickToViewLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIClickToViewLink = page.locator("//div[@id='grdRptHistory']//td[contains(text(),'Click to view')]");
    }

    async clickClickToViewLink(): Promise<void> {
        await this.uIClickToViewLink.click();
    }
}

export class EvaluationCallReceiptPage {
    readonly page: Page;
    readonly uIReportedTime: Locator;
    readonly uIStackedTime: Locator;
    readonly uIDispatchTime: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIReportedTime = page.locator('#lblEvalReportTimeValue');
        this.uIStackedTime = page.locator('#lblEvalStTimeValue');
        this.uIDispatchTime = page.locator('#lblEvalDispatchTimeValue');
    }

    async readReportedTime(): Promise<string> {
        const time = await this.uIReportedTime.innerText();
        return time.substring(9);
    }
}

export class WeatherPage {
    readonly page: Page;
    readonly uILocationText: Locator;
    readonly uIWeatherText: Locator;
    readonly uIDewPointText: Locator;
    readonly uIPressureText: Locator;
    readonly uIVisibilityText: Locator;
    readonly uILastUpdateOnText: Locator;
    readonly uITemperatureText: Locator;
    readonly uIRelativeHumidityText: Locator;
    readonly uIWindText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uILocationText = page.locator('#grdWeather_ctl00_lblLocation');
        this.uIWeatherText = page.locator('#grdWeather_ctl00_lblWether');
        this.uIDewPointText = page.locator('#grdWeather_ctl00_lblDWP');
        this.uIPressureText = page.locator('#grdWeather_ctl00_lblprsure');
        this.uIVisibilityText = page.locator('#grdWeather_ctl00_lblVisblty');
        this.uILastUpdateOnText = page.locator('#grdWeather_ctl00_lbllastUpdt');
        this.uITemperatureText = page.locator('#grdWeather_ctl00_lblTemp');
        this.uIRelativeHumidityText = page.locator('#grdWeather_ctl00_lblhumidity');
        this.uIWindText = page.locator('#grdWeather_ctl00_lblWind');
    }

    async verifyAtLocation(): Promise<void> {
        const text = await this.uILocationText.innerText();
        expect(text).toContain(BaseData.getPoliceModuleValue('Location'));
    }
}

export class QAFormTabPage {
    readonly page: Page;
    readonly uISelectFormDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISelectFormDropdown = page.locator('#tabCBE_tmpl3_usrQASrchScreen1_cddForm');
    }

    async selectAtSelectForm(): Promise<void> {
        await this.uISelectFormDropdown.selectOption({ label: BaseData.getPoliceModuleValue('FormName') });
    }
}

