// @ts-nocheck
import { Page, Locator, expect } from '@playwright/test';
import { KPICodedLookupPage, ConfirmPage, AcknowledgePage } from '../popup.page';
import { GridHelpers } from '../../helpers/grid-helpers';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { ElementHelpers } from '../../helpers/element-helpers';
import { TestDataReader } from '../../data/test-data-reader';
import { DateHelpers, RandomHelpers } from '../../helpers/date-helpers';

export class FacilityManagementPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async switchToCMSUOFSearch(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByUrl('frmUOFSrch.aspx');
    }

    async SwitchToActivitySearch(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByUrl('frmHuberActivitySrch.aspx');
    }

    async SwitchToActivityLogEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Activity Log - 8240');
    }

    async SwitchToActivityQuickEnrtry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Activity Quick Entry');
    }

    async SwitchToMailLogSearch(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByUrl('frmMailLogSrch.aspx');
    }

    async SwitchToMailLogEnrtry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Mail Log Entry');
    }

    async SwitchToGrievanceSearch(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByUrl('frmGrievanceSrch');
    }

    async SwitchToGrievanceEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Grievance Entry');
    }

    async SwitchToLibrarySearch(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByUrl('frmLibraryInqSrchh');
    }

    async SwitchToLibrarySearchWindow(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Library Search');
    }

    async SwitchToLibraryLogEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Library Log');
    }

    async switchToHousingHistorySearch(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByUrl('frmHousingInquiry');
    }

    async SwitchToIncidentSearch(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByUrl('frmFMIncidentInquiry');
    }

    async SwitchToDisciplinaryEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Disciplinary');
    }

    async SwitchToHearingNoticeEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Hearing Notice');
    }

    async SwitchToHearingIncidentEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Hearing Incident');
    }

    async SwitchToInmateManagementEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Inmate Management');
    }

    async SwitchToClassificationSearch(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByUrl('frmClassificationInquiry.aspx');
    }

    async SwitchToClassificationEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Classification');
    }

    async SwitchToOutOfServiceCellSearch(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByUrl('frmOutofServiceCellInquiry');
    }

    async SwitchToOutOfSerivceCellEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Out Of Service Cell');
    }

    async SwitchToReleaseSearch(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByUrl('frmPrisonerReleaseSrch');
    }

    async switchToPersonalProperty(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByUrl('frmPersonalProperty');
    }

    async switchToPersonalPropertyScreen(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Personal Property');
    }

    async SwitchToInmateReleaseEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Inmate Release');
    }

    async SwitchToInmatepropertyEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Inmate Property');
    }

    async SwitchToInmateMovementEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Inmate Movement');
    }

    async SwitchToverifyNameEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Verify Name');
    }

    async SwitchToInitialInmatepropertyEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Initial Inmate Property');
    }

    async SwitchToVisitorSearch(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByUrl('frmVisitSrch');
    }

    async SwitchTopropertyEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Property Entry');
    }

    async SwitchToBuildingSearch(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByUrl('frmBuildingSrch');
    }

    async SwitchToBuildingEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Building Entry');
    }

    async SwitchToFloorConfig(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Floor Config');
    }

    async SwitchToBuildingPod(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Building Pod');
    }

    async SwitchToBuildingPodEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Building Pod Entry');
    }

    async SwitchToCellNumberEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Cell Number Entry');
    }

    async SwitchToCellBidding(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Cell Bidding');
    }

    async SwitchToVisitationRules(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByUrl('frmVisitClassify');
    }

    async SwitchToVisitorStatus(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByUrl('frmVisitorLogSrch');
    }

    async SwitchToVisitorLogEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Visitor Log');
    }

    async SwitchTofacilityVisitorLogEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Facility Visitor Log');
    }

    async SwitchTocMSAssociationsEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Admissions - CMS Associations');
    }

    async SwitchTodisciplinaryTxteditor(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByUrl('frmTextMgrEx_Id');
    }

    async SwitchToBuildingConfiguration(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Building Configuration');
    }

    async switchToSharedCodes(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Shared Codes');
    }

    async switchToQuestionDataEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Question Data Entry');
    }

    async SwitchToQuickActivityLog(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Quick Activity Log');
    }

    async SwitchToInsideSignOutIn(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Inside Sign Out/In');
    }

    async SwitchToOutsideSignOutIn(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Outside Sign Out/In');
    }

    async SwitchToBuildingImageDisplay(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Building Image Display');
    }

    async switchToStipulationEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Stipulation');
    }

    async switchToSanctionEntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Sanction');
    }

    async SwitchToSelectSanction(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByUrl('frmMsgSelectSanction');
    }

    async switchToOccupancyOverview(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Occupancy Overview');
    }

}

export class MaillogEntryPage {
    readonly page: Page;
    readonly uISPNNoEdit: Locator;
    readonly uISendRediobtn: Locator;
    readonly uIReceiveRediobutton: Locator;
    readonly uIMailDateEdit: Locator;
    readonly uIMailTimeEdit: Locator;
    readonly uIMailStatusDropdown: Locator;
    readonly uISendThroughDropdown: Locator;
    readonly uICollectedPFEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIPhoenTypeDropdown: Locator;
    readonly uIPhoenNoEdit: Locator;
    readonly uIRelationshipDropdown: Locator;
    readonly uIBlockReceiverCheckBox: Locator;
    readonly uIBlockSenderCheckBox: Locator;
    readonly uICommentsEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNcloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uILastNameEditSPN: Locator;
    readonly uISpnLookUp: Locator;
    readonly uIRcvLookUp: Locator;
    readonly uIYesButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISPNNoEdit = page.locator('#NamCtrlSPN_SPN');
        this.uISendRediobtn = page.locator('#rboSend');
        this.uIReceiveRediobutton = page.locator('#rboReceive');
        this.uIMailDateEdit = page.locator('#dttmMailDate_Date_KPIDttmCtrl');
        this.uIMailTimeEdit = page.locator("//table[@id='dttmMailDate_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIMailStatusDropdown = page.locator('#cddMailStatus_DropDown');
        this.uISendThroughDropdown = page.locator('#cddReceiveThru_DropDown');
        this.uICollectedPFEdit = page.locator('#lupPFNbr_CodeValue');
        this.uIFirstNameEdit = page.locator('#nNameID_FirstName');
        this.uILastNameEdit = page.locator('#nNameID_LastName');
        this.uIPhoenTypeDropdown = page.locator('#cusPhone_PhoneType_DropDown');
        this.uIPhoenNoEdit = page.locator('#cusPhone_PhoneNumber');
        this.uIRelationshipDropdown = page.locator('#cddRelationship_DropDown');
        this.uIBlockReceiverCheckBox = page.locator('#chkReceive');
        this.uIBlockSenderCheckBox = page.locator('#chkSend');
        this.uICommentsEdit = page.locator('#txtNotes');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNcloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uILastNameEditSPN = page.locator('#NamCtrlSPN_LastName');
        this.uISpnLookUp = page.locator('#NamCtrlSPN_imgSrch');
        this.uIRcvLookUp = page.locator('#nNameID_imgSrch');
        this.uIYesButton = page.locator("//button[contains(text(),'Yes')]");
    }

    async SPNNo(SPNNo: string): Promise<void> {
        await this.uISPNNoEdit.fill(SPNNo);
    }

    async SelectMailTypeAsSend(): Promise<void> {
        await this.uISendRediobtn.click();
    }

    async SelectMailTypeAsReceive(): Promise<void> {
        await this.uIReceiveRediobutton.click();
    }

    async EnterAtMailDateTime(): Promise<void> {
        await this.uIMailDateEdit.press('Tab');
        await this.uIMailTimeEdit.press('Tab');
    }

    async SelectAtMailStatus(MailStatus: string): Promise<void> {
        await this.uIMailStatusDropdown.selectOption({ label: MailStatus });
    }

    async SelectAtSendThrough(SendThrough: string): Promise<void> {
        await this.uISendThroughDropdown.selectOption({ label: SendThrough });
    }

    async EnterCollectedPF(): Promise<void> {
        await this.uICollectedPFEdit.press('Tab');
    }

    async EnterSenderORreceiverName(LastName: string, FirstName: string): Promise<void> {
        await this.uILastNameEdit.fill(LastName);
        await this.uIFirstNameEdit.fill(FirstName);
        await this.uIFirstNameEdit.press('Tab');
    }

    async SelectNameFromSearch(): Promise<void> {
        const popup = await this.page.context().waitForEvent('page');
        await popup.waitForLoadState();
        const rows = popup.locator('#grdNames tr');
        const rowCount = await rows.count();
        const randomIndex = Math.floor(Math.random() * (rowCount - 1)) + 1;
        await rows.nth(randomIndex).locator('input[type="checkbox"]').click();
        await popup.locator("//span[@title='SelectName']").click();
        await this.page.waitForTimeout(1000);
    }

    async VerifySenderRecieverBlockMsg(): Promise<void> {
        const popup = await this.page.context().waitForEvent('page');
        await popup.waitForLoadState();
        const rows = popup.locator('#grdNames tr');
        const rowCount = await rows.count();
        const randomIndex = Math.floor(Math.random() * (rowCount - 1)) + 1;
        await rows.nth(randomIndex).locator('input[type="checkbox"]').click();
        await popup.locator("//span[@title='SelectName']").click();
        await this.page.waitForLoadState('load');
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(30572) Sender/Receiver already blocked for this inmate. Do you wish to continue?');
    }

    async SelectAtReleationShip(Relationship: string): Promise<void> {
        await this.uIRelationshipDropdown.selectOption({ label: Relationship });
    }

    async SelectBlockSender(): Promise<void> {
        await this.uIBlockSenderCheckBox.click();
    }

    async SelectBlockReceiver(): Promise<void> {
        await this.uIBlockReceiverCheckBox.click();
    }

    async EnterAtComments(Comments: string): Promise<void> {
        await this.uICommentsEdit.fill(Comments);
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
    }

    async ClickSaveNCloseButton(): Promise<void> {
        await this.uISaveNcloseButton.click();
    }

    async ClickPrintButton(): Promise<void> {
        await this.uIPrintButton.click();
    }

    async ClickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async CloseMailLogEntry(): Promise<void> {
        await this.page.close();
    }

    async EnterLastNameAsS(): Promise<void> {
        await this.uILastNameEditSPN.click();
        await this.uILastNameEditSPN.fill("S");
        await this.uILastNameEditSPN.press('Tab');
    }

    async ClickSpnLookUp(): Promise<void> {
        await this.uISpnLookUp.click();
    }

    async ClickRcvLookUp(): Promise<void> {
        await this.uIRcvLookUp.click();
    }

    async EnterLastNameAsE(): Promise<void> {
        await this.uILastNameEdit.click();
        await this.uILastNameEdit.fill("E");
        await this.uILastNameEdit.press('Tab');
    }

    async verifyAdditionSuccessfulAcknowledgeMsg(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('(1002) Addition Successful');
    }

    async verify30658NoBookingExistAcknowledge(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('(30658) No Booking exist for this SPN No');
    }

}

export class MaillogSearchPage {
    readonly page: Page;
    readonly uIFromDateEdit: Locator;
    readonly uIFromTimeEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIToTimeEdit: Locator;
    readonly uIDateResetButton: Locator;
    readonly uIMailTypeDropdown: Locator;
    readonly uIMailStatusDropdown: Locator;
    readonly uISPNNOEdit: Locator;
    readonly uIPFCodeEdit: Locator;
    readonly uISenderORReceiverLastNameEdit: Locator;
    readonly uISenderORReceiverFirstNameEdit: Locator;
    readonly uIMailSearchTable: Locator;
    readonly uISearchLink: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIResetLink: Locator;
    readonly uIBackLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIFromDateEdit = page.locator('#tabSuspSrch_tmpl0_usrMailLogSrchBasic1_dttmFrom_Date_KPIDttmCtrl');
        this.uIFromTimeEdit = page.locator("//table[@id='tabSuspSrch_tmpl0_usrMailLogSrchBasic1_dttmFrom_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIToDateEdit = page.locator('#tabSuspSrch_tmpl0_usrMailLogSrchBasic1_dttmTo_Date_KPIDttmCtrl');
        this.uIToTimeEdit = page.locator("//table[@id='tabSuspSrch_tmpl0_usrMailLogSrchBasic1_dttmTo_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIDateResetButton = page.locator('#tabSuspSrch_tmpl0_usrMailLogSrchBasic1_imgClear');
        this.uIMailTypeDropdown = page.locator('#tabSuspSrch_tmpl0_usrMailLogSrchBasic1_cddMailType_DropDown');
        this.uIMailStatusDropdown = page.locator('#tabSuspSrch_tmpl0_usrMailLogSrchBasic1_cddMailStatus_DropDown');
        this.uISPNNOEdit = page.locator('#tabSuspSrch_tmpl0_usrMailLogSrchBasic1_NameCtrlSPN_SPN');
        this.uIPFCodeEdit = page.locator('#tabSuspSrch_tmpl0_usrMailLogSrchBasic1_lupPFNbr_CodeValue');
        this.uISenderORReceiverLastNameEdit = page.locator('#tabSuspSrch_tmpl0_usrMailLogSrchBasic1_txtLastName');
        this.uISenderORReceiverFirstNameEdit = page.locator('#tabSuspSrch_tmpl0_usrMailLogSrchBasic1_txtFirstName');
        this.uIMailSearchTable = page.locator("//div[@id='grdMailLogSrch']");
        this.uISearchLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Search')]");
        this.uIAddNewButton = page.locator("//table[@id='Table3'] //span[contains(text(),'Add New')]");
        this.uIResetLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Reset')]");
        this.uIBackLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Back')]");
    }

    async EnterAtFromDateTime(FromDate: string, FromTime: string): Promise<void> {
        await this.uIFromDateEdit.fill(FromDate);
        await this.uIFromTimeEdit.fill(FromTime);
    }

    async EnterCurrentToDateAndTime(): Promise<void> {
        await this.uIToDateEdit.press('Tab');
        await this.uIToTimeEdit.press('Tab');
    }

    async ClickDateResetButton(): Promise<void> {
        await this.uIDateResetButton.click();
    }

    async SelectAtMailLogType(MailType: string): Promise<void> {
        await this.uIMailTypeDropdown.selectOption({ label: MailType });
    }

    async SelectAtMailStatus(MailStatus: string): Promise<void> {
        await this.uIMailStatusDropdown.selectOption({ label: MailStatus });
    }

    async EnterAtSPN(SPNNo: string): Promise<void> {
        await this.uISPNNOEdit.fill(SPNNo);
        await this.uISPNNOEdit.press('Tab');
    }

    async EnterPFno(): Promise<void> {
        await this.uIPFCodeEdit.press('Tab');
    }

    async EnterAtSenderORreceiverName(SenderLastName: string, SenderFirstName: string): Promise<void> {
        await this.uISenderORReceiverLastNameEdit.fill(SenderLastName);
        await this.uISenderORReceiverFirstNameEdit.fill(SenderFirstName);
    }

    async SelectMailLogEntry(): Promise<void> {
        const cell = await new GridHelpers(this.page).getGridCellByIndex(this.uIMailSearchTable, 0, 'Name');
        await cell.click();
    }

    async ClickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async ClickSearchLink(): Promise<void> {
        await this.uISearchLink.click();
    }

    async ClickResetLink(): Promise<void> {
        await this.uIResetLink.click();
    }

    async ClickBackLink(): Promise<void> {
        await this.uIBackLink.click();
    }

    async VerifyMailStatusAsSendInGrid(MailStatus: string): Promise<void> {
        const text = await new GridHelpers(this.page).getGridCellInnerText(this.uIMailSearchTable, 'Mail Status', 0);
        expect(text).toEqual(MailStatus);
    }

}

export class GrievanceSearchPage {
    readonly page: Page;
    readonly uISubAgencyDrodown: Locator;
    readonly uIPFNoEdit: Locator;
    readonly uISPNNoEdit: Locator;
    readonly uIInculdeJuvenileCheckBox: Locator;
    readonly uIGrievanceFromDateEdit: Locator;
    readonly uIGrievanceFromTimeEdit: Locator;
    readonly uIGrievanceToDateEdit: Locator;
    readonly uIGrievanceToTimeEdit: Locator;
    readonly uIDateResetIcon: Locator;
    readonly uIGrievanceYearEdit: Locator;
    readonly uIGrievanceNoEdit: Locator;
    readonly uIGrievanceTypeEdit: Locator;
    readonly uIStatusDropdown: Locator;
    readonly uIDispositionDropdown: Locator;
    readonly uIBuildingDropdown: Locator;
    readonly uIFloorLookupEdit: Locator;
    readonly uIpodLookupEdit: Locator;
    readonly uICellLookupEdit: Locator;
    readonly uIGrievanceSearchResultTable: Locator;
    readonly uISearchLink: Locator;
    readonly uIAddNewLink: Locator;
    readonly uIResetLink: Locator;
    readonly uIBackLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISubAgencyDrodown = page.locator('#tabSuspSrch_tmpl0_usrGrievanceSrchBasic1_cddSubAgency_DropDown');
        this.uIPFNoEdit = page.locator('#tabSuspSrch_tmpl0_usrGrievanceSrchBasic1_lupPFNbr_CodeValue');
        this.uISPNNoEdit = page.locator('#tabSuspSrch_tmpl0_usrGrievanceSrchBasic1_NameCtrlSPN_SPN');
        this.uIInculdeJuvenileCheckBox = page.locator('#tabSuspSrch_tmpl0_usrGrievanceSrchBasic1_ChkIncJuven');
        this.uIGrievanceFromDateEdit = page.locator('#tabSuspSrch_tmpl0_usrGrievanceSrchBasic1_dttmFrom_Date_KPIDttmCtrl');
        this.uIGrievanceFromTimeEdit = page.locator("//table[@id='tabSuspSrch_tmpl0_usrGrievanceSrchBasic1_dttmFrom_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIGrievanceToDateEdit = page.locator('#tabSuspSrch_tmpl0_usrGrievanceSrchBasic1_dttmTo_Date_KPIDttmCtrl');
        this.uIGrievanceToTimeEdit = page.locator("//table[@id='tabSuspSrch_tmpl0_usrGrievanceSrchBasic1_dttmTo_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIDateResetIcon = page.locator('#tabSuspSrch_tmpl0_usrGrievanceSrchBasic1_imgClear');
        this.uIGrievanceYearEdit = page.locator('#tabSuspSrch_tmpl0_usrGrievanceSrchBasic1_nbrGrievance_Year');
        this.uIGrievanceNoEdit = page.locator('#tabSuspSrch_tmpl0_usrGrievanceSrchBasic1_nbrGrievance_Number');
        this.uIGrievanceTypeEdit = page.locator('#tabSuspSrch_tmpl0_usrGrievanceSrchBasic1_lupGrvType_CodeValue');
        this.uIStatusDropdown = page.locator('#tabSuspSrch_tmpl0_usrGrievanceSrchBasic1_cddMailType_DropDown');
        this.uIDispositionDropdown = page.locator('#tabSuspSrch_tmpl0_usrGrievanceSrchBasic1_cddMailStatus_DropDown');
        this.uIBuildingDropdown = page.locator('#tabSuspSrch_tmpl0_usrGrievanceSrchBasic1_cddBuilding_DropDown');
        this.uIFloorLookupEdit = page.locator('#tabSuspSrch_tmpl0_usrGrievanceSrchBasic1_lupFloor_CodeValue');
        this.uIpodLookupEdit = page.locator('#tabSuspSrch_tmpl0_usrGrievanceSrchBasic1_lupPod_CodeValue');
        this.uICellLookupEdit = page.locator('#tabSuspSrch_tmpl0_usrGrievanceSrchBasic1_lupCell_CodeValue');
        this.uIGrievanceSearchResultTable = page.locator('#grdGrievanceSrch');
        this.uISearchLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Search')]");
        this.uIAddNewLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Add New')]");
        this.uIResetLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Reset')]");
        this.uIBackLink = page.locator("//div[@id='tlbGridItem']//span[contains(text(),'Back')]");
    }

    async EnterAtPFNo(PFNo: string): Promise<void> {
        await this.uIPFNoEdit.fill(PFNo);
        await this.uIPFNoEdit.press('Tab');
    }

    async EnterAtSPNNo(SPNNo: string): Promise<void> {
        await this.uISPNNoEdit.fill(SPNNo);
        await this.uISPNNoEdit.press('Tab');
    }

    async SelectInculdeJuvenile(): Promise<void> {
        await this.uIInculdeJuvenileCheckBox.click();
    }

    async EnterAtFromDateTime(FromDate: string): Promise<void> {
        await this.uIGrievanceFromDateEdit.fill(FromDate);
        const currentTime = DateHelpers.getCurrentTime('HHmm');
        await this.uIGrievanceFromTimeEdit.fill(currentTime);
    }

    async EnterAtTODateTime(): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        const currentTime = DateHelpers.getCurrentTime('HHmm');
        await this.uIGrievanceToDateEdit.fill(currentDate);
        await this.uIGrievanceToTimeEdit.fill(currentTime);
    }

    async ClickDateResetButton(): Promise<void> {
        await this.uIDateResetIcon.click();
    }

    async enterAtGrievanceNo(GrievanceNo: string): Promise<void> {
        await this.uIGrievanceYearEdit.fill(GrievanceNo.substring(0, 2));
        await this.uIGrievanceNoEdit.fill(GrievanceNo.substring(3));
        await this.uIGrievanceNoEdit.press('Tab');
    }

    async EnterAtGrievanceType(GrievanceType: string): Promise<void> {
        await this.uIGrievanceTypeEdit.fill(GrievanceType);
        await this.uIGrievanceTypeEdit.press('Tab');
    }

    async SelectAtStatus(Status: string): Promise<void> {
        await this.uIStatusDropdown.selectOption({ label: Status });
    }

    async SelectAtDisposition(Disposition: string): Promise<void> {
        await this.uIDispositionDropdown.selectOption({ label: Disposition });
    }

    async SelectAtBuilding(BuildingName: string): Promise<void> {
        await this.uIBuildingDropdown.selectOption({ label: BuildingName });
    }

    async EnterAtFloor(Floor: string): Promise<void> {
        await this.uIFloorLookupEdit.fill(Floor);
    }

    async EnterAtPOD(POD: string): Promise<void> {
        await this.uIpodLookupEdit.fill(POD);
    }

    async EnterAtCell(Cell: string): Promise<void> {
        await this.uICellLookupEdit.fill(Cell);
    }

    async ClickAddNewButton(): Promise<void> {
        await this.uIAddNewLink.click();
    }

    async SelectGrievancerecords(SPNNo: string): Promise<void> {
        await this.uIGrievanceSearchResultTable.locator('td', { hasText: SPNNo }).click();
    }

    async ClickSearchLink(): Promise<void> {
        await this.uISearchLink.click();
    }

    async ClickResetLink(): Promise<void> {
        await this.uIResetLink.click();
    }

    async ClickBackLink(): Promise<void> {
        await this.uIBackLink.click();
    }

    async SelectAtSubAgency(SubAgency: string): Promise<void> {
        await this.uISubAgencyDrodown.selectOption({ label: SubAgency });
    }

    async VerifySubAgency(LoggedinSubAgnecy: string): Promise<void> {
        expect(await this.uISubAgencyDrodown.inputValue()).toEqual(LoggedinSubAgnecy);
    }

    async VerifySubAgencyFieldEnabled(): Promise<void> {
        expect(await this.uISubAgencyDrodown.isEnabled()).toBeTruthy();
    }

    async VerifySubAgencyFieldDisabled(): Promise<void> {
        expect(await this.uISubAgencyDrodown.isEnabled()).toBeFalsy();
    }

    async SelectMHOCRecoerds(): Promise<void> {
        await this.uIGrievanceSearchResultTable.locator('td', { hasText: "MHOC" }).click();
    }

    async SelectMCJRecoerds(): Promise<void> {
        await this.uIGrievanceSearchResultTable.locator('td', { hasText: "MCJ" }).click();
    }

    async verifyStatusInGrid(Status: string): Promise<void> {
        const text = await new GridHelpers(this.page).getGridCellInnerText(this.uIGrievanceSearchResultTable, 'Status', 0);
        expect(text).toEqual(Status);
    }

    async verifyDispositionInGrid(Disposition: string): Promise<void> {
        const text = await new GridHelpers(this.page).getGridCellInnerText(this.uIGrievanceSearchResultTable, 'Disposition', 0);
        expect(text).toEqual(Disposition);
    }

    async verifyApplicationErrorPopupNotAppear(): Promise<void> {
        await new AcknowledgePage(this.page).verifyAcknowledgeWindowNotOpened('(5) Application Error');
    }

    async verifyAtGrievanceNoInGrid(GrievanceNo: string): Promise<void> {
        const text = await new GridHelpers(this.page).getGridCellInnerText(this.uIGrievanceSearchResultTable, 'Grievance No', 0);
        expect(text).toEqual(GrievanceNo);
    }

    async enterAtGrievanceNoFromJSONFile(testCaseId: string): Promise<void> {
        await this.uIGrievanceYearEdit.fill(grivanceYear);
        await this.uIGrievanceNoEdit.fill(grievanceNumber);
    }

}

export class GrievanceEntryPage {
    readonly page: Page;
    readonly uIGrievenceTypeEdit: Locator;
    readonly uISPNNoEdit: Locator;
    readonly uIGrivanceDateEdit: Locator;
    readonly uIGrivanceTimeEdit: Locator;
    readonly uIBuildingDropdown: Locator;
    readonly uIFloorLookupEdit: Locator;
    readonly uIpodLookupEdit: Locator;
    readonly uICellLookupEdit: Locator;
    readonly uIOtherEdit: Locator;
    readonly uIReportingOfficerEdit: Locator;
    readonly uIReceivedDateEdit: Locator;
    readonly uIReceivedTimeEdit: Locator;
    readonly uIStatusDropdown: Locator;
    readonly uIAssocIncIDentYearEdit: Locator;
    readonly uIAssocIncIDentNoEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNcloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIInmateSpn: Locator;
    readonly uIReportingOfficerLookUp: Locator;
    readonly uIYesButton: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIGrievanceStatus: Locator;
    readonly uINoButton: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIAssociatedIncidentInfoIcon: Locator;
    readonly uIResponseTab: Locator;
    readonly uIAppealTab: Locator;
    readonly uIAttachmentTab: Locator;
    readonly uIGrievanceYearEdit: Locator;
    readonly uIGrievanceNumberEdit: Locator;
    readonly uIDetailsTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIGrievenceTypeEdit = page.locator('#lupGrievance_CodeValue');
        this.uISPNNoEdit = page.locator('#NamCtrlSPN_SPN');
        this.uIGrivanceDateEdit = page.locator('#dttmGrievance_Date_KPIDttmCtrl');
        this.uIGrivanceTimeEdit = page.locator("//table[@id='dttmGrievance_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIBuildingDropdown = page.locator('#cddBuilding_DropDown');
        this.uIFloorLookupEdit = page.locator('#lupFloor_CodeValue');
        this.uIpodLookupEdit = page.locator('#lupPod_CodeValue');
        this.uICellLookupEdit = page.locator('#lupCell_CodeValue');
        this.uIOtherEdit = page.locator('#txtOthers');
        this.uIReportingOfficerEdit = page.locator('#lupPFNbr_CodeValue');
        this.uIReceivedDateEdit = page.locator('#dttmReceive_Date_KPIDttmCtrl');
        this.uIReceivedTimeEdit = page.locator("//table[@id='dttmReceive_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIStatusDropdown = page.locator('#cddStatus_DropDown');
        this.uIAssocIncIDentYearEdit = page.locator('#nbrAssocInc_Year');
        this.uIAssocIncIDentNoEdit = page.locator('#nbrAssocInc_Number');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNcloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIInmateSpn = page.locator('#NamCtrlSPN_SPN');
        this.uIReportingOfficerLookUp = page.locator('#lupPFNbr_imgBtn');
        this.uIYesButton = page.locator("//button[contains(text(),'Yes')]");
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class='status']//b");
        this.uIGrievanceStatus = page.locator("//div[@class='modal-body']");
        this.uINoButton = page.locator("//button[@class='cancel btn btn-default']");
        this.uILastNameEdit = page.locator('#NamCtrlSPN_LastName');
        this.uIFirstNameEdit = page.locator('#NamCtrlSPN_FirstName');
        this.uIAssociatedIncidentInfoIcon = page.locator('#nbrAssocInc_imgBtn');
        this.uIResponseTab = page.locator("//span[text()='Response']");
        this.uIAppealTab = page.locator("//span[text()='Appeal']");
        this.uIAttachmentTab = page.locator("//span[text()='Attachment']");
        this.uIGrievanceYearEdit = page.locator('#nbrGrievance_Year');
        this.uIGrievanceNumberEdit = page.locator('#nbrGrievance_Number');
        this.uIDetailsTab = page.locator("//span[text()='Details']");
    }

    async EnterAtSPNNo(SPNNo: string): Promise<void> {
        await this.uISPNNoEdit.fill(SPNNo);
        await this.uISPNNoEdit.press('Tab');
    }

    async enterAtGrievanceDateTime(): Promise<void> {
        await this.uIGrivanceDateEdit.press('Tab');
        await this.uIGrivanceTimeEdit.press('Tab');
    }

    async EnterAtGrievanceType(GrievanceType: string): Promise<void> {
        await this.uIGrievenceTypeEdit.fill(GrievanceType);
        await this.uIGrievenceTypeEdit.press('Tab');
    }

    async SelectAtBuilding(BuildingName: string): Promise<void> {
        await this.uIBuildingDropdown.selectOption({ label: BuildingName });
    }

    async EnterAtFloor(Floor: string): Promise<void> {
        await this.uIFloorLookupEdit.fill(Floor);
    }

    async EnterAtPOD(Pod: string): Promise<void> {
        await this.uIpodLookupEdit.fill(Pod);
    }

    async EnterAtCell(Cell: string): Promise<void> {
        await this.uICellLookupEdit.fill(Cell);
    }

    async EnterAtBed(Bed: string): Promise<void> {
        await this.uIOtherEdit.fill(Bed);
    }

    async EnterReportingOfficer(): Promise<void> {
        await this.uIReportingOfficerEdit.press('Tab');
    }

    async clickReportingOfficerLookUp(): Promise<void> {
        await this.uIReportingOfficerLookUp.click();
    }

    async enterReportingDateTime(): Promise<void> {
        await this.uIReceivedDateEdit.press('Tab');
        await this.uIReceivedTimeEdit.press('Tab');
    }

    async SelectAtStatus(Status: string): Promise<void> {
        await this.uIStatusDropdown.selectOption({ label: Status });
    }

    async EnterAtAssociatedIncident(AssociatedIncidentYear: string, AssociatedIncidentNo: string): Promise<void> {
        await this.uIAssocIncIDentYearEdit.fill(AssociatedIncidentYear);
        await this.uIAssocIncIDentNoEdit.fill(AssociatedIncidentNo);
        await this.uIAssocIncIDentNoEdit.press('Tab');
    }

    async verifyAndYesInChangeGrievanceStatusmsg(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(30606) Do you want to change the grievance status?');
    }

    async ClickSaveWithmsgButton(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).noWithScreenOrWindowPopup('(30606) Do you want to change the grievance status?');
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async verifyAdditionSuccessFullMessage(): Promise<void> {
        expect(await this.uIBottomLeftSideStatusBar.innerText()).toEqual("1002 - Addition Successful");
    }

    async ClickSaveAndCloseButton(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).uIModalFooterNoButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async ClickPrintButton(): Promise<void> {
        await this.uIPrintButton.click();
    }

    async ClickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async CloseGrievanceEntry(): Promise<void> {
        await this.page.close();
    }

    async EnterAtInmate(InmateSPN: string): Promise<void> {
        await this.uIInmateSpn.fill(InmateSPN);
        await this.uIInmateSpn.press('Tab');
    }

    async NavigateToResponseTab(): Promise<void> {
        await this.uIResponseTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmGrvResponse.aspx');
    }

    async NavigateToAppealTab(): Promise<void> {
        await this.uINavigateToAppealTab.click();
    }

    async NavigateToDetailsTab(): Promise<void> {
        await this.uINavigateToDetailsTab.click();
    }

    async VerifySaveButtondisabled(): Promise<void> {
        expect(await this.uISaveButton.isEnabled()).toBeFalsy();
        expect(await this.uISaveNcloseButton.isEnabled()).toBeFalsy();
    }

    async VerifySaveButtonEnabled(): Promise<void> {
        expect(await this.uISaveButton.isEnabled()).toBeTruthy();
        expect(await this.uISaveNcloseButton.isEnabled()).toBeTruthy();
    }

}

export class GrievanceDetailsTabPage {
    readonly page: Page;
    readonly uINavigateToDetailsTab: Locator;
    readonly uIEditorcontrol: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToDetailsTab = page.locator("//div[@id='tabGrievance'] //span[contains(text(),'Details')]");
        this.uIEditorcontrol = page.locator('#tabGrievance_tmpl0_usrGrvDetails1_KPIRadGrvDetails_contentIframe');
    }

    async EnterAtEditorDetails(NarrativeComments: string): Promise<void> {
        await this.uIEditorcontrol.fill(NarrativeComments);
    }

}

export class GrievanceResponseTabPage {
    readonly page: Page;
    readonly uINavigateToResponseTab: Locator;
    readonly uIRespondingOfficerEdit: Locator;
    readonly uIResponseDateEdit: Locator;
    readonly uIResponseTimeEdit: Locator;
    readonly uIResponseEdit: Locator;
    readonly uIResponseEditorButton: Locator;
    readonly uIDispositionDropdown: Locator;
    readonly uIApprovedCheckBox: Locator;
    readonly uISupervisorOverrIDeCheckBox: Locator;
    readonly uISupervisorPFEdit: Locator;
    readonly uISupervisorDateEdit: Locator;
    readonly uISupervisorTimeEdit: Locator;
    readonly uISupervisorCommentsEdit: Locator;
    readonly uISupervisorEditorButton: Locator;
    readonly uIForwardedToPFEdit: Locator;
    readonly uIForwardedDateEdit: Locator;
    readonly uIForwardedTimeEdit: Locator;
    readonly uIDeliveredPFEdit: Locator;
    readonly uIDeliveredDateEdit: Locator;
    readonly uIDeliveredTimeEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIRespondingOfficerLookupIcon: Locator;
    readonly uISupervisorLookupIcon: Locator;
    readonly uIForwardedToPFLookupIcon: Locator;
    readonly uIDispositionReportLookupIcon: Locator;
    readonly uIheaderStatuMessage: Locator;
    readonly uISupervisorCodeEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToResponseTab = page.locator("//div[@id='tabGrievance'] //span[contains(text(),'Response')]");
        this.uIRespondingOfficerEdit = page.locator('#lupPFNbr_CodeValue');
        this.uIResponseDateEdit = page.locator("//input[@id='dttmReport_Date_KPIDttmCtrl']");
        this.uIResponseTimeEdit = page.locator("//table[@id='dttmReport_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIResponseEdit = page.locator('#txtResponse');
        this.uIResponseEditorButton = page.locator('#cmdResEditor');
        this.uIDispositionDropdown = page.locator('#cddDisposition_DropDown');
        this.uIApprovedCheckBox = page.locator('#rboApprove');
        this.uISupervisorOverrIDeCheckBox = page.locator('#rboOverrIDe');
        this.uISupervisorPFEdit = page.locator('#lupSupervisor_CodeValue');
        this.uISupervisorDateEdit = page.locator('#dttmSuperReview_Date_KPIDttmCtrl');
        this.uISupervisorTimeEdit = page.locator("//table[@id='dttmSuperReview_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uISupervisorCommentsEdit = page.locator('#txtSuperCmnt');
        this.uISupervisorEditorButton = page.locator('#cmdSuperEditor');
        this.uIForwardedToPFEdit = page.locator('#lupFrwdPF_CodeValue');
        this.uIForwardedDateEdit = page.locator('#dttmForward_Date_KPIDttmCtrl');
        this.uIForwardedTimeEdit = page.locator("//table[@id='dttmForward_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIDeliveredPFEdit = page.locator('#lupInmPF_CodeValue');
        this.uIDeliveredDateEdit = page.locator('#dttmInmRpt_Date_KPIDttmCtrl');
        this.uIDeliveredTimeEdit = page.locator("//table[@id='dttmInmRpt_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uISaveButton = page.locator('#cmdSave');
        this.uIResetButton = page.locator('#cmdReset');
        this.uIRespondingOfficerLookupIcon = page.locator('#lupPFNbr_imgBtn');
        this.uISupervisorLookupIcon = page.locator('#lupSupervisor_imgBtn');
        this.uIForwardedToPFLookupIcon = page.locator('#lupFrwdPF_imgBtn');
        this.uIDispositionReportLookupIcon = page.locator('#lupInmPF_imgBtn');
        this.uIheaderStatuMessage = page.locator('//b');
        this.uISupervisorCodeEdit = page.locator('#lupSupervisor_CodeValue');
    }

    async EnterRespondingOfficer(jsonIndex: number): Promise<void> {
        await this.uIRespondingOfficerEdit.fill(RespondingOfficer);
        await this.uIRespondingOfficerEdit.press('Tab');
    }

    async EnterRespondingDataTime(): Promise<void> {
        await this.uIResponseDateEdit.press('Tab');
        await this.uIResponseTimeEdit.press('Tab');
    }

    async EnterAtResponse(ResponseComments: string): Promise<void> {
        await this.uIResponseEdit.fill(ResponseComments);
    }

    async ClickResponseEditorButton(): Promise<void> {
        await this.uIResponseEditorButton.click();
    }

    async SelectAtDisposition(Disposition: string): Promise<void> {
        await this.uIDispositionDropdown.selectOption({ label: Disposition });
    }

    async ClickApprovedRadioButton(): Promise<void> {
        await this.uIApprovedCheckBox.click();
    }

    async ClickSupervisorOverrideRedioButton(): Promise<void> {
        await this.uISupervisorOverrIDeCheckBox.click();
    }

    async EnterAtSupervisorDateAndTime(): Promise<void> {
        await this.uISupervisorDateEdit.press('Tab');
        await this.uISupervisorTimeEdit.press('Tab');
    }

    async EnterAtSupervisorComments(SupervisorComments: string): Promise<void> {
        await this.uISupervisorCommentsEdit.fill(SupervisorComments);
    }

    async ClickSupervisorEditorButton(): Promise<void> {
        await this.uISupervisorEditorButton.click();
    }

    async EnterAtForwardToPFDateAndTime(): Promise<void> {
        await this.uIForwardedDateEdit.press('Tab');
        await this.uIForwardedTimeEdit.press('Tab');
    }

    async enterAtDispositionReportDateAndTime(): Promise<void> {
        await this.uIDeliveredDateEdit.press('Tab');
        await this.uIDeliveredTimeEdit.press('Tab');
    }

    async ClickInternalSaveButton(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
    }

    async ClickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async ClickRespondingOfficerLookupIcon(): Promise<void> {
        await this.uIRespondingOfficerLookupIcon.click();
    }

    async ClickSupervisorLookupIcon(): Promise<void> {
        await this.uISupervisorLookupIcon.click();
    }

    async ClickForwardedToPFLookupIcon(): Promise<void> {
        await this.uIForwardedToPFLookupIcon.click();
    }

    async ClickDispositionReportLookupIcon(): Promise<void> {
        await this.uIDispositionReportLookupIcon.click();
    }

    async taboutRespondingOfficerDateAndTime(): Promise<void> {
        await this.uIResponseDateEdit.press('Tab');
        await this.uIResponseTimeEdit.press('Tab');
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verifyResponseEditorButtonIsGreenColor(): Promise<void> {
        const color = await this.uIResponseEditorButton.evaluate(el => getComputedStyle(el).color);
        expect(color).toEqual('rgba(0, 128, 0, 1)');
    }

    async enterAtSupervisor(jsonIndex: number): Promise<void> {
        await this.uISupervisorCodeEdit.fill(Supervisor);
        await this.uISupervisorCodeEdit.press('Tab');
    }

    async verifySupervisorEditorButtonIsGreenColor(): Promise<void> {
        const color = await this.uISupervisorEditorButton.evaluate(el => getComputedStyle(el).color);
        expect(color).toEqual('rgba(0, 128, 0, 1)');
    }

    async enterAtForwardToPF(jsonIndex: number): Promise<void> {
        await this.uIForwardedToPFEdit.fill(ForwardToPF);
        await this.uIForwardedToPFEdit.press('Tab');
    }

    async enterAtPF(jsonIndex: number): Promise<void> {
        await this.uIDeliveredPFEdit.fill(PF);
        await this.uIDeliveredPFEdit.press('Tab');
    }

    async verifyUpdateSuccessful(): Promise<void> {
        expect(Status).toEqual(" 1003 - Update Successful");
    }

}

export class GrievanceAppealTabPage {
    readonly page: Page;
    readonly uINavigateToAppealTab: Locator;
    readonly uIAppealTypeDropdown: Locator;
    readonly uIRequestedDateEdit: Locator;
    readonly uIRequestedTimeEdit: Locator;
    readonly uIReviewDateEdit: Locator;
    readonly uIReviewTimeEdit: Locator;
    readonly uIAppealOfficerPFEdit: Locator;
    readonly uIDenyCheckBox: Locator;
    readonly uIApproveRadioButton: Locator;
    readonly uIAppealDispostionEdit: Locator;
    readonly uICommentsEdit: Locator;
    readonly uIEditorButton: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIGrIDTable: Locator;
    readonly uIAppealOfficerLookupIcon: Locator;
    readonly uIAppealDispositionLookupIcon: Locator;
    readonly uIUpdateButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToAppealTab = page.locator("//div[@id='tabGrievance'] //span[contains(text(),'Appeal')]");
        this.uIAppealTypeDropdown = page.locator('#tabGrievance_tmpl2_usrGrvAppeal1_cddAppealType_DropDown');
        this.uIRequestedDateEdit = page.locator('#tabGrievance_tmpl2_usrGrvAppeal1_dttmRequest_Date_KPIDttmCtrl');
        this.uIRequestedTimeEdit = page.locator("//table[@id='tabGrievance_tmpl2_usrGrvAppeal1_dttmRequest_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIReviewDateEdit = page.locator('#tabGrievance_tmpl2_usrGrvAppeal1_dttmReview_Date_KPIDttmCtrl');
        this.uIReviewTimeEdit = page.locator("//table[@id='tabGrievance_tmpl2_usrGrvAppeal1_dttmReview_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIAppealOfficerPFEdit = page.locator('#tabGrievance_tmpl2_usrGrvAppeal1_lupAppealPF_CodeValue');
        this.uIDenyCheckBox = page.locator('#tabGrievance_tmpl2_usrGrvAppeal1_rboDeny');
        this.uIApproveRadioButton = page.locator('#tabGrievance_tmpl2_usrGrvAppeal1_rboApprove');
        this.uIAppealDispostionEdit = page.locator('#tabGrievance_tmpl2_usrGrvAppeal1_lupAppealDispo_CodeValue');
        this.uICommentsEdit = page.locator('#tabGrievance_tmpl2_usrGrvAppeal1_txtComments');
        this.uIEditorButton = page.locator('#tabGrievance_tmpl2_usrGrvAppeal1_cmdEditor');
        this.uIAddButton = page.locator('#tabGrievance_tmpl2_usrGrvAppeal1_cmdAddAppeal');
        this.uIClearButton = page.locator('#tabGrievance_tmpl2_usrGrvAppeal1_cmdClearAppeal');
        this.uIGrIDTable = page.locator('#tabGrievance_tmpl2_usrGrvAppeal1_grdAppeal');
        this.uIAppealOfficerLookupIcon = page.locator('#tabGrievance_tmpl2_usrGrvAppeal1_lupAppealPF_imgBtn');
        this.uIAppealDispositionLookupIcon = page.locator('#tabGrievance_tmpl2_usrGrvAppeal1_lupAppealDispo_imgBtn');
        this.uIUpdateButton = page.locator('#tabGrievance_tmpl2_usrGrvAppeal1_cmdAddAppeal');
    }

    async SelectAtAppealType(AppealType: string): Promise<void> {
        await this.uIAppealTypeDropdown.selectOption({ label: AppealType });
    }

    async EnterRequestedDateTime(): Promise<void> {
        await this.uIRequestedDateEdit.press('Tab');
        await this.uIRequestedTimeEdit.press('Tab');
    }

    async EnterReviwedDateTime(): Promise<void> {
        await this.uIReviewDateEdit.press('Tab');
        await this.uIReviewTimeEdit.press('Tab');
    }

    async EnterAppealOfficer(): Promise<void> {
        await this.uIAppealOfficerPFEdit.press('Tab');
    }

    async selectAppealDeny(): Promise<void> {
        await this.uIDenyCheckBox.click();
    }

    async ClickApproveRadioButton(): Promise<void> {
        await this.uIApproveRadioButton.click();
    }

    async EnterAtAppealDispostion(AppealDisposition: string): Promise<void> {
        await this.uIAppealDispostionEdit.fill(AppealDisposition);
        await this.uIAppealDispostionEdit.press('Tab');
    }

    async EnterAtComments(Comments: string): Promise<void> {
        await this.uICommentsEdit.fill(Comments);
    }

    async ClickEditorButton(): Promise<void> {
        await this.uIEditorButton.click();
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async ClickClearButton(): Promise<void> {
        await this.uIClearButton.click();
    }

    async ClickAppealOfficerLookupIcon(): Promise<void> {
        await this.uIAppealOfficerLookupIcon.click();
    }

    async ClickAppealDispostionLookupIcon(): Promise<void> {
        await this.uIAppealDispositionLookupIcon.click();
    }

    async verifyAtDispositionInGrid(jsonIndex: number): Promise<void> {
        expect(disposition).toEqual(Disposition);
    }

    async enterAtAppealOfficer(jsonIndex: number): Promise<void> {
        await this.uIAppealOfficerPFEdit.fill(AppealOfficer);
    }

    async taboutReviewDateTime(): Promise<void> {
        await this.uIReviewDateEdit.press('Tab');
        await this.uIReviewTimeEdit.press('Tab');
    }

    async selectAtDispositionInGrid(jsonIndex: number): Promise<void> {
        await this.uIGrIDTable.locator('td', { hasText: Disposition }).click();
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }

}

export class GrievanceAttachmentTabPage {
    readonly page: Page;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIBuildingDropdown: Locator;
    readonly uIResponseTab: Locator;
    readonly uIAppealTab: Locator;
    readonly uIAttachmentTab: Locator;
    readonly uIGrievanceYearEdit: Locator;
    readonly uIGrievanceNumberEdit: Locator;
    readonly uIStatusDropdown: Locator;
    readonly uIDetailsTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uILastNameEdit = page.locator('#NamCtrlSPN_LastName');
        this.uIFirstNameEdit = page.locator('#NamCtrlSPN_FirstName');
        this.uIBuildingDropdown = page.locator('#cddBuilding_DropDown');
        this.uIResponseTab = page.locator("//span[text()='Response']");
        this.uIAppealTab = page.locator("//span[text()='Appeal']");
        this.uIAttachmentTab = page.locator("//span[text()='Attachment']");
        this.uIGrievanceYearEdit = page.locator('#nbrGrievance_Year');
        this.uIGrievanceNumberEdit = page.locator('#nbrGrievance_Number');
        this.uIStatusDropdown = page.locator('#cddStatus_DropDown');
        this.uIDetailsTab = page.locator("//span[text()='Details']");
    }

    async verifyAtLastName(jsonIndex: number): Promise<void> {
        expect(await this.uILastNameEdit.inputValue()).toEqual(LastName);
    }

    async verifyAtFirstName(jsonIndex: number): Promise<void> {
        expect(await this.uIFirstNameEdit.inputValue()).toEqual(FirstName);
    }

    async verifyAtBuilding(jsonIndex: number): Promise<void> {
        expect(await this.uIBuildingDropdown.inputValue()).toEqual(Building);
    }

    async enterAtReportingOfficer(jsonIndex: number): Promise<void> {
        await this.uIReportingOfficerEdit.fill(ReportingOfficer);
        await this.uIReportingOfficerEdit.press('Tab');
    }

    async clickAssociatedIncidentInfoIcon(): Promise<void> {
        await this.uIAssociatedIncidentInfoIcon.click();
    }

    async verifyResponseTabIsDisplayed(): Promise<void> {
        expect(await this.uIResponseTab.isVisible()).toBeTruthy();
    }

    async verifyAppealTabIsDisplayed(): Promise<void> {
        expect(await this.uIAppealTab.isVisible()).toBeTruthy();
    }

    async verifyAttachmentTabIsDisplayed(): Promise<void> {
        expect(await this.uIAttachmentTab.isVisible()).toBeTruthy();
    }

    async setGrievanceYearToJSONFile(testCaseId: string): Promise<void> {
        const grievanceYear = await this.uIGrievanceYearEdit.inputValue();
        new TestDataReader().writeValue('FacilityManagement', testCaseId, 'grievanceYear', grievanceYear);
    }

    async setGrievanceNumberToJSONFile(testCaseId: string): Promise<void> {
        const grievanceNumber = await this.uIGrievanceNumberEdit.inputValue();
        new TestDataReader().writeValue('FacilityManagement', testCaseId, 'grievanceNumber', grievanceNumber);
    }

    async selectAtStatus(jsonIndex: number): Promise<void> {
        await this.uIStatusDropdown.selectOption({ label: Status });
    }

    async verifyAtStatus(jsonIndex: number): Promise<void> {
        const expected = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Status' + jsonIndex);
        const actual = await new ElementHelpers(this.page).getDropDownSelectedItem(this.uIStatusDropdown);
        expect(actual).toEqual(expected);
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verify30606GrievancePopup(): Promise<void> {
        const msg = await new ConfirmPage(this.page).uIModalBody.innerText();
        expect(msg).toContain("(30606) Do you want to change the grievance status?");
    }

    async clickNoInGreievancePopup(): Promise<void> {
        await new ConfirmPage(this.page).uIModalFooterNoButton.click();
    }

    async clickYesInSavePopup(): Promise<void> {
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do You Want To Save All Of The Entered Details?');
    }

    async verifyDetailsTabIsBlue(): Promise<void> {
        const color = await this.uIDetailsTab.evaluate(el => getComputedStyle(el).color);
        expect(color).toEqual('rgba(0, 0, 255, 1)');
    }

    async verifyResponseTabIsBlue(): Promise<void> {
        const color = await this.uIResponseTab.evaluate(el => getComputedStyle(el).color);
        expect(color).toEqual('rgba(0, 0, 255, 1)');
    }

    async verifyAppealTabIsBlue(): Promise<void> {
        const color = await this.uIAppealTab.evaluate(el => getComputedStyle(el).color);
        expect(color).toEqual('rgba(0, 0, 255, 1)');
    }

    async clickSaveAndCloseWithGrievancePopup(): Promise<void> {
        await this.uISaveNcloseButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do You Want To Save All Of The Entered Details?');
    }

}

export class LibraryLogEntryPage {
    readonly page: Page;
    readonly uICurrentDateEdit: Locator;
    readonly uICurrentTimeEdit: Locator;
    readonly uISPNNoEdit: Locator;
    readonly uIItemNoEdit: Locator;
    readonly uIOutPFNoEdit: Locator;
    readonly uIOutDateEdit: Locator;
    readonly uIOutTimeEdit: Locator;
    readonly uIInPFNoEdit: Locator;
    readonly uIInDateEdit: Locator;
    readonly uIInTimeEdit: Locator;
    readonly uICommentsEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIGirdTable: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNcloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIItemLookUp: Locator;
    readonly uIYesButton: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uICurrentDateEdit = page.locator('#dttmCurrentDate_Date_KPIDttmCtrl');
        this.uICurrentTimeEdit = page.locator("//table[@id='dttmCurrentDate_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uISPNNoEdit = page.locator('#NamCtrlSPIN_SPN');
        this.uIItemNoEdit = page.locator('#lupItem_CodeValue');
        this.uIOutPFNoEdit = page.locator('#lupPFNbrOut_CodeValue');
        this.uIOutDateEdit = page.locator('#dtDateTimeOut_Date_KPIDttmCtrl');
        this.uIOutTimeEdit = page.locator("//table[@id='dtDateTimeOut_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIInPFNoEdit = page.locator('#lupPFNbrIn_CodeValue');
        this.uIInDateEdit = page.locator('#dtDateTimeIn_Date_KPIDttmCtrl');
        this.uIInTimeEdit = page.locator("//table[@id='dtDateTimeIn_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uICommentsEdit = page.locator('#txtComments');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIClearButton = page.locator('#cmdClear');
        this.uIGirdTable = page.locator('#grdLibraryLog');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNcloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIItemLookUp = page.locator('#lupItem_imgBtn');
        this.uIYesButton = page.locator("//button[@class='confirm btn btn-primary']");
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class='statusBar']//b");
    }

    async EnterCurrentDateTime(): Promise<void> {
        await this.uICurrentDateEdit.press('Tab');
        await this.uICurrentTimeEdit.press('Tab');
    }

    async EnterAtSPNNo(SPNNo: string): Promise<void> {
        await this.uISPNNoEdit.fill(SPNNo);
        await this.uISPNNoEdit.press('Tab');
    }

    async EnterAtItem(Item: string): Promise<void> {
        await this.uIItemNoEdit.fill(Item);
        await this.uIItemNoEdit.press('Tab');
    }

    async EnterItemTakenOut(): Promise<void> {
        await this.uIOutPFNoEdit.press('Tab');
        await this.uIOutDateEdit.press('Tab');
        await this.uIOutTimeEdit.press('Tab');
    }

    async EnterItemReturn(): Promise<void> {
        await this.uIGirdTable.locator('td', { hasText: "News Paper" }).click();
        await this.uIInPFNoEdit.press('Tab');
        await this.uIInDateEdit.press('Tab');
        await this.uIInTimeEdit.press('Tab');
    }

    async EnterAtComments(Comments: string): Promise<void> {
        await this.uICommentsEdit.fill(Comments);
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async ClickClearButton(): Promise<void> {
        await this.uIClearButton.click();
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async saveNCloseScreen(): Promise<void> {
        await this.uISaveNcloseButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async ClickPrintButton(): Promise<void> {
        await this.uIPrintButton.click();
    }

    async ClickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async CloseLibraryLogEntry(): Promise<void> {
        await this.page.close();
    }

    async VerifySaveButtondisabled(): Promise<void> {
        expect(await this.uISaveButton.isEnabled()).toBeFalsy();
        expect(await this.uISaveNcloseButton.isEnabled()).toBeFalsy();
    }

    async VerifySaveButtonEnabled(): Promise<void> {
        expect(await this.uISaveButton.isEnabled()).toBeTruthy();
        expect(await this.uISaveNcloseButton.isEnabled()).toBeTruthy();
    }

    async clickItemLookUpIcon(): Promise<void> {
        await this.uIItemLookUp.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
    }

    async verifyAdditionSuccessFullMessage(): Promise<void> {
        expect(await this.uIBottomLeftSideStatusBar.innerText()).toEqual("1002 - Addition Successful");
    }

    async EnterAtPF(PF: string): Promise<void> {
        await this.uIOutPFNoEdit.fill(PF);
        await this.uIOutPFNoEdit.press('Tab');
    }

    async EnterAtDateAndTimeOut(): Promise<void> {
        await this.uIOutDateEdit.press('Tab');
        await this.uIOutTimeEdit.press('Tab');
    }

    async verifyAtDescriptionInGrid(i: number): Promise<void> {
        const expected = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Description' + i);
        const actual = await new GridHelpers(this.page).getGridCellInnerText(this.uIGirdTable, 'Description');
        expect(actual).toEqual(expected);
    }

}

export class LibrarySearchPage {
    readonly page: Page;
    readonly uISubAgencyDrodown: Locator;
    readonly uIDateTypeDrodown: Locator;
    readonly uIFromDateEdit: Locator;
    readonly uIFromTimeEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIToTimeEdit: Locator;
    readonly uIItemNoEdit: Locator;
    readonly uISPNNoEdit: Locator;
    readonly uIPFNoEdit: Locator;
    readonly uILibrarySrchGirdTable: Locator;
    readonly uISearchLink: Locator;
    readonly uIAddNewLink: Locator;
    readonly uIResetLink: Locator;
    readonly uIBackLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISubAgencyDrodown = page.locator('#tabSuspSrch_tmpl0_UsrLibraryInqSrch1_cddSubAgency_DropDown');
        this.uIDateTypeDrodown = page.locator('#tabSuspSrch_tmpl0_UsrLibraryInqSrch1_cddDateType_DropDown');
        this.uIFromDateEdit = page.locator('#tabSuspSrch_tmpl0_UsrLibraryInqSrch1_dttmFrom_Date_KPIDttmCtrl');
        this.uIFromTimeEdit = page.locator("//table[@id='tabSuspSrch_tmpl0_UsrLibraryInqSrch1_dttmFrom_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIToDateEdit = page.locator('#tabSuspSrch_tmpl0_UsrLibraryInqSrch1_dttmTo_Date_KPIDttmCtrl');
        this.uIToTimeEdit = page.locator("//table[@id='tabSuspSrch_tmpl0_UsrLibraryInqSrch1_dttmTo_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIItemNoEdit = page.locator('#tabSuspSrch_tmpl0_UsrLibraryInqSrch1_lupItem_CodeValue');
        this.uISPNNoEdit = page.locator('#tabSuspSrch_tmpl0_UsrLibraryInqSrch1_NameCtrlSPIN_SPN');
        this.uIPFNoEdit = page.locator('#tabSuspSrch_tmpl0_UsrLibraryInqSrch1_lupPFNbr_CodeValue');
        this.uILibrarySrchGirdTable = page.locator("//div[@id='grdLibrarySrch']");
        this.uISearchLink = page.locator("//div[@id='tlbGridItem']//span[contains(text(),'Search')]");
        this.uIAddNewLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Add New')]");
        this.uIResetLink = page.locator("//div[@id='tlbGrIDItem'] //span[contains(text(),'Reset')]");
        this.uIBackLink = page.locator("//div[@id='tlbGrIDItem'] //span[contains(text(),'Back')]");
    }

    async SelectAtDateType(DataType: string): Promise<void> {
        await this.uIDateTypeDrodown.selectOption({ label: DataType });
    }

    async EnterAtFromDateTime(FromDate: string): Promise<void> {
        await this.uIFromDateEdit.fill(FromDate);
        const currentTime = DateHelpers.getCurrentTime('HHmm');
        await this.uIFromTimeEdit.fill(currentTime);
    }

    async EnterCurrentDateAsFromDateTime(): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        await this.uIFromDateEdit.fill(currentDate);
        await this.uIFromTimeEdit.fill("0001");
    }

    async EnterCurrentDateAsToDateTime(): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        await this.uIToDateEdit.fill(currentDate);
        await this.uIToTimeEdit.fill("2300");
    }

    async EnterAtToDateTime(): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        const currentTime = DateHelpers.getCurrentTime('HHmm');
        await this.uIToDateEdit.fill(currentDate);
        await this.uIToTimeEdit.fill(currentTime);
    }

    async EnterAtItemNo(ItemNo: string): Promise<void> {
        await this.uIItemNoEdit.fill(ItemNo);
        await this.uIItemNoEdit.press('Tab');
    }

    async enterAtSPNNo(SPNNo: string): Promise<void> {
        await this.uISPNNoEdit.fill(SPNNo);
        await this.uISPNNoEdit.press('Tab');
    }

    async EnterPFNo(): Promise<void> {
        await this.uIPFNoEdit.press('Tab');
    }

    async SelectLibraryEntry(): Promise<void> {
        await this.uILibrarySrchGirdTable.locator('td', { hasText: "News Paper" }).click();
    }

    async ClickAddNewButton(): Promise<void> {
        await this.uIAddNewLink.click();
    }

    async ClickSearchLink(): Promise<void> {
        await this.uISearchLink.click();
    }

    async ClickResetLink(): Promise<void> {
        await this.uIResetLink.click();
    }

    async ClickBackLink(): Promise<void> {
        await this.uIBackLink.click();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async SelectAtSubAgency(SubAgency: string): Promise<void> {
        await this.uISubAgencyDrodown.selectOption({ label: SubAgency });
    }

    async VerifySubAgency(LoggedinSubAgnecy: string): Promise<void> {
        const actual = await new ElementHelpers(this.page).getDropDownSelectedItem(this.uISubAgencyDrodown);
        expect(actual).toEqual(LoggedinSubAgnecy);
    }

    async SelectMHOCRecoerds(): Promise<void> {
        await new GridHelpers(this.page).selectRowByCellText(this.uILibrarySrchGirdTable, 'MHOC');
    }

    async SelectMCJRecoerds(): Promise<void> {
        await new GridHelpers(this.page).selectRowByCellText(this.uILibrarySrchGirdTable, 'MCJ');
    }

    async verifyPFInTheGrid(PF: string): Promise<void> {
        const text = await new GridHelpers(this.page).getGridCellInnerText(this.uILibrarySrchGirdTable, 'PF#', 0);
        expect(text).toEqual(PF);
    }

    async selectAtInmateNameInGrid(InmateName: string): Promise<void> {
        await new GridHelpers(this.page).selectRowByCellText(this.uILibrarySrchGirdTable, InmateName);
    }

}

export class DisciplinaryEntryPage {
    readonly page: Page;
    readonly uISPNNoEdit: Locator;
    readonly uIIncIDentDateEdit: Locator;
    readonly uIIncIDentTimeEdit: Locator;
    readonly uIBuildingDropdown: Locator;
    readonly uIFloorLookupEdit: Locator;
    readonly uIpodLookupEdit: Locator;
    readonly uICellLookupEdit: Locator;
    readonly uIOtherEdit: Locator;
    readonly uIReportingOfficerEdit: Locator;
    readonly uIReportingOfficerDateEdit: Locator;
    readonly uIReportingOfficerTimeEdit: Locator;
    readonly uIStatusDropdown: Locator;
    readonly uIAssociatedIncIDentYearEdit: Locator;
    readonly uIAssociatedIncIDentNumberEdit: Locator;
    readonly uICustomDrodown: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNcloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIReportingOfficerLookUpIcon: Locator;
    readonly uIYesButton: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uINoButton: Locator;
    readonly uIIncidentChangesConfrimPopUpText: Locator;
    readonly uISaveConfrimPopUpText: Locator;
    readonly uIStipulationTab: Locator;
    readonly uIAssignedCellValue: Locator;
    readonly uIDeleteIcon: Locator;
    readonly uIPrintIcon: Locator;
    readonly uILocationDropdown: Locator;
    readonly uILinkedViolatorsTab: Locator;
    readonly uIIncidentYearEdit: Locator;
    readonly uIIncidentNumberEdit: Locator;
    readonly uIInmateTypeEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISPNNoEdit = page.locator('#NamCtrlSPIN_SPN');
        this.uIIncIDentDateEdit = page.locator('#dttmIncident_Date_KPIDttmCtrl');
        this.uIIncIDentTimeEdit = page.locator("//table[@id='dttmIncident_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIBuildingDropdown = page.locator('#cddBuilding_DropDown');
        this.uIFloorLookupEdit = page.locator('#lupFloor_CodeValue');
        this.uIpodLookupEdit = page.locator('#lupPod_CodeValue');
        this.uICellLookupEdit = page.locator('#lupCell_CodeValue');
        this.uIOtherEdit = page.locator('#txtOthers');
        this.uIReportingOfficerEdit = page.locator('#lupPFNbr_CodeValue');
        this.uIReportingOfficerDateEdit = page.locator('#dttmReporting_Date_KPIDttmCtrl');
        this.uIReportingOfficerTimeEdit = page.locator("//table[@id='dttmReporting_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIStatusDropdown = page.locator('#drpSupervisourStatus');
        this.uIAssociatedIncIDentYearEdit = page.locator('#nbrIncident_Year');
        this.uIAssociatedIncIDentNumberEdit = page.locator('#nbrIncident_Number');
        this.uICustomDrodown = page.locator('#cddCustom_DropDown');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNcloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIReportingOfficerLookUpIcon = page.locator('#lupPFNbr_imgBtn');
        this.uIYesButton = page.locator("//button[contains(text(),'Yes')]");
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class='statusBar']//b");
        this.uINoButton = page.locator("//button[@class='cancel btn btn-default']");
        this.uIIncidentChangesConfrimPopUpText = page.locator("//div[text()='(30599) Do you want to change the incident status?']");
        this.uISaveConfrimPopUpText = page.locator("//div[text()='(3) Do You Want To Save All Of The Entered Details?']");
        this.uIStipulationTab = page.locator("//span[text()='Stipulation']");
        this.uIAssignedCellValue = page.locator('#lblcell');
        this.uIDeleteIcon = page.locator('#cmdDelete');
        this.uIPrintIcon = page.locator('#cmdPrint');
        this.uILocationDropdown = page.locator('#cddBuilding_DropDown');
        this.uILinkedViolatorsTab = page.locator("//span[text()='Linked Violators']");
        this.uIIncidentYearEdit = page.locator('#nbrIncident_Year');
        this.uIIncidentNumberEdit = page.locator('#nbrIncident_Number');
        this.uIInmateTypeEdit = page.locator('#txtInmateType');
    }

    async EnterAtInmateSPN(SPNNo: string): Promise<void> {
        await this.uISPNNoEdit.fill(SPNNo);
        await this.uISPNNoEdit.press('Tab');
    }

    async EnterIncidentDateTime(): Promise<void> {
        await this.uIIncIDentDateEdit.press('Tab');
        await this.uIIncIDentTimeEdit.press('Tab');
    }

    async EnterAtLocation(Building: string, Floor: string, Pod: string, Cell: string, Other: string): Promise<void> {
        await this.uIBuildingDropdown.selectOption({ label: Building });
        await this.uIFloorLookupEdit.fill(Floor);
        await this.uIpodLookupEdit.fill(Pod);
        await this.uICellLookupEdit.fill(Cell);
        await this.uIOtherEdit.fill(Other);
    }

    async enterAtReportingOfficer(jsonIndex: number): Promise<void> {
        await this.uIReportingOfficerEdit.fill(ReportingOfficer);
        await this.uIReportingOfficerEdit.press('Tab');
    }

    async ReportingDateTime(): Promise<void> {
        await this.uIReportingOfficerDateEdit.press('Tab');
        await this.uIReportingOfficerTimeEdit.press('Tab');
    }

    async SelectAtStatus(Status: string): Promise<void> {
        await this.uIStatusDropdown.selectOption({ label: Status });
    }

    async EnterAtAssociatedIncident(AssociatedIncidentYear: string, AssociatedIncidentNO: string): Promise<void> {
        await this.uIAssociatedIncIDentYearEdit.fill(AssociatedIncidentYear);
        await this.uIAssociatedIncIDentNumberEdit.fill(AssociatedIncidentNO);
        await this.uIAssociatedIncIDentNumberEdit.press('Tab');
    }

   
    async CloseDisciplinaryEntry(): Promise<void> {
        await this.page.close();
    }

    async ClickSaveButtonWithVerifyMsg(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do You Want To Save All Of The Entered Details?');
    }

    async ClickSaveButtonForIncidentStatus(): Promise<void> {
        await this.uISaveButton.click();
        await this.uINoButton.click();
        await this.uIYesButton.click();
    }

    async saveNCloseScreen(): Promise<void> {
        await this.uISaveNcloseButton.click();
        await new ConfirmPage(this.page).uIModalFooterNoButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
    }

    async verifyAdditionSuccessFullMessage(): Promise<void> {
        expect(await this.uIBottomLeftSideStatusBar.innerText()).toEqual("1002 - Addition Successful");
    }

    async clickReportingOfficerLookUp(): Promise<void> {
        await this.uIReportingOfficerLookUpIcon.click();
    }

    async VerifyStatusChangeMsg(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).uIModalFooterNoButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async VerifySaveButtondisabled(): Promise<void> {
        expect(await this.uISaveButton.isEnabled()).toBeFalsy();
        expect(await this.uISaveNcloseButton.isEnabled()).toBeFalsy();
    }

    async VerifySaveButtonEnabled(): Promise<void> {
        expect(await this.uISaveButton.isEnabled()).toBeTruthy();
        expect(await this.uISaveNcloseButton.isEnabled()).toBeTruthy();
    }

    async verifyAssignedCellValue(CellValue: string): Promise<void> {
        expect(await this.uIAssignedCellValue.innerText()).toEqual(CellValue);
    }

    async NavigateToOffenseTab(): Promise<void> {
        await this.uINavigateToOffenseTab.click();
    }

    async NavigateToDetailsTab(): Promise<void> {
        await this.uINavigateToDetailsTab.click();
    }

    async NavigateToWitnessTab(): Promise<void> {
        await this.uINavigateToWitnessTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmDispWitness.aspx');
    }

    async NavigateToEvidenceTab(): Promise<void> {
        await this.uINavigateToEvIDenceTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmDispEvidence.aspx');
    }

    async NavigateToInvestigationTab(): Promise<void> {
        await this.uINavigateToInvestigationTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmDisInvestigation.aspx');
    }

    async NavigateToDispositionTab(): Promise<void> {
        await this.uINavigateToDispositionTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmDispDisposition.aspx');
    }

    async NavigateToHearingTab(): Promise<void> {
        await this.uINavigateToHearingTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmDisHearing.aspx');
    }

    async NavigateToAttachmentTab(): Promise<void> {
        await this.uINavigateToAttachmentab.click();
        new BrowserHelpers(this.page).switchToFrame('frmTxtAttachMgrEx.aspx');
    }

    async switchToStipulationTab(): Promise<void> {
        await this.uIStipulationTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmStipulationList.aspx');
    }

}

export class DisciplinaryOffenceTabPage {
    readonly page: Page;
    readonly uINavigateToOffenseTab: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIOffenceEdit: Locator;
    readonly uIOffenceTypeDropdown: Locator;
    readonly uIIncIDentSummaryEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIDeleteIconButton: Locator;
    readonly uIGrIDTable: Locator;
    readonly uIOffenseLookUpIcon: Locator;
    readonly uIOffenseGrid: Locator;
    readonly uIUpdateButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToOffenseTab = page.locator("//div[@id='tabDisciplinary'] //span[contains(text(),'Offense')]");
        this.uIDateEdit = page.locator('#tabDisciplinary_tmpl0_UsrDiscipOffense2_dttmOffense_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='tabDisciplinary_tmpl0_UsrDiscipOffense2_dttmOffense_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIOffenceEdit = page.locator('#tabDisciplinary_tmpl0_UsrDiscipOffense2_lupDesc_CodeValue');
        this.uIOffenceTypeDropdown = page.locator('#tabDisciplinary_tmpl0_UsrDiscipOffense2_cddType_DropDown');
        this.uIIncIDentSummaryEdit = page.locator('#tabDisciplinary_tmpl0_UsrDiscipOffense2_txtNotes');
        this.uIAddButton = page.locator('#tabDisciplinary_tmpl0_UsrDiscipOffense2_cmdAddOffense');
        this.uIClearButton = page.locator('#tabDisciplinary_tmpl0_UsrDiscipOffense2_cmdClearOffense');
        this.uIDeleteIconButton = page.locator("//div[@id='tabDisciplinary_tmpl0_UsrDiscipOffense2_grdDisOffense']//td[@class='Delete_Icon_Style']");
        this.uIGrIDTable = page.locator('#tabDisciplinary_tmpl0_UsrDiscipOffense2_grdDisOffense');
        this.uIOffenseLookUpIcon = page.locator('#tabDisciplinary_tmpl0_UsrDiscipOffense2_lupDesc_imgBtn');
        this.uIOffenseGrid = page.locator('#tabDisciplinary_tmpl0_UsrDiscipOffense2_grdDisOffense');
        this.uIUpdateButton = page.locator('#tabDisciplinary_tmpl0_UsrDiscipOffense2_cmdAddOffense');
    }

    async EnterOffenseDateTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async EnterAtOffense(Offense: string): Promise<void> {
        await this.uIOffenceEdit.fill(Offense);
    }

    async EnterAtIncidentSummary(IncidentSummary: string): Promise<void> {
        await this.uIIncIDentSummaryEdit.fill(IncidentSummary);
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async ClickClearButton(): Promise<void> {
        await this.uIClearButton.click();
    }

    async clickOffenseLookUpIcon(): Promise<void> {
        await this.uIOffenseLookUpIcon.click();
    }

    async selectAtType(jsonIndex: number): Promise<void> {
        const Type = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Type' + jsonIndex);
        await this.uIOffenceTypeDropdown.selectOption({ label: Type });
    }

    async verifyAtTypeInGrid(jsonIndex: number): Promise<void> {
        const Type = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Type' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIOffenseGrid, Type, 'Type');
        expect(await cell.innerText(), "Type is not same as expected-->").toEqual(Type);
    }

    async verifyAtSancIconByUsingOffenseInGrid(jsonIndex: number): Promise<void> {
        const Offense = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Offense' + jsonIndex);
        const sanIcon = await new GridHelpers(this.page).getGridCell(this.uIOffenseGrid, Offense, 'Sanc');
        const classAttr = await sanIcon.getAttribute('class');
        expect(classAttr).toContain('NotificationRules');
    }

    async clickAtSanIconByUsingOffenseInGrid(jsonIndex: number): Promise<void> {
        const Offense = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Offense' + jsonIndex);
        const sanIcon = await new GridHelpers(this.page).getGridCell(this.uIOffenseGrid, Offense, 'Sanc');
        await sanIcon.click();
    }

    async clickAtOffenseInGrid(jsonIndex: number): Promise<void> {
        const Offense = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Offense' + jsonIndex);
        await new GridHelpers(this.page).selectRowByCellText(this.uIOffenseGrid, Offense);
    }

    async verifyAtIncidentSummaryLength(jsonIndex: number): Promise<void> {
        const expectedLength = parseInt(new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'length' + jsonIndex));
        const actualLength = (await this.uIIncIDentSummaryEdit.inputValue()).length;
        expect(actualLength).toEqual(expectedLength);
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }

    async enterIncidentSummaryAs300(): Promise<void> {
        await this.uIIncIDentSummaryEdit.fill(RandomHelpers.randomString(320));
    }

    async verifyAtDescriptionInGrid(jsonIndex: number): Promise<void> {
        const Offense = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Offense' + jsonIndex);
        const Description = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Description' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIOffenseGrid, Offense, 'Description');
        expect(await cell.innerText()).toEqual(Description);
    }

}

export class DisciplinaryDetailsTabPage {
    readonly page: Page;
    readonly uINavigateToDetailsTab: Locator;
    readonly uIReportTypeDropdown: Locator;
    readonly uIEditorButton: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIDeleteIconButton: Locator;
    readonly uIDetailsGrid: Locator;
    readonly uIEditorIcon: Locator;
    readonly uIOfficerCodeEdit: Locator;
    readonly uIOfficerDescriptionEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToDetailsTab = page.locator("//div[@id='tabDisciplinary'] //span[contains(text(),'Details')]");
        this.uIReportTypeDropdown = page.locator('#tabDisciplinary_tmpl1_UsrDiscipDetails1_cddReportType_DropDown');
        this.uIEditorButton = page.locator('#tabDisciplinary_tmpl1_UsrDiscipDetails1_cmdEditor');
        this.uIAddButton = page.locator('#tabDisciplinary_tmpl1_UsrDiscipDetails1_cmdAddDetails');
        this.uIClearButton = page.locator('#tabDisciplinary_tmpl1_UsrDiscipDetails1_cmdClearDetails');
        this.uIDeleteIconButton = page.locator("//div[@id='tabDisciplinary_tmpl1_UsrDiscipDetails1_grdDisDetails']//td[@class='Delete_Icon_Style']");
        this.uIDetailsGrid = page.locator('#tabDisciplinary_tmpl1_UsrDiscipDetails1_grdDisDetails');
        this.uIEditorIcon = page.locator("//td[@class='NotificationRules']");
        this.uIOfficerCodeEdit = page.locator('#tabDisciplinary_tmpl1_UsrDiscipDetails1_lupOfficerID_CodeValue');
        this.uIOfficerDescriptionEdit = page.locator('#tabDisciplinary_tmpl1_UsrDiscipDetails1_lupOfficerID_CodeDescription');
    }

    async SelectAtReportType(Count: number): Promise<void> {
        await this.uIReportTypeDropdown.click();
        await this.uIReportTypeDropdown.selectOption({ label: ReportType });
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async ClickClearButton(): Promise<void> {
        await this.uIClearButton.click();
    }

    async ClickEditorButton(): Promise<void> {
        await this.uIEditorButton.click();
    }

    async selectDetailReportfromGrid(i: number): Promise<void> {
        await this.uIDetailsGrid.locator('td', { hasText: ReportType }).click();
    }

    async verifyEditorButtonIsDisplayed(): Promise<void> {
        expect(await this.uIEditorIcon.isVisible()).toBeTruthy();
    }

    async verifyAtReportByOfficerInGrid(i: number, Officer: string): Promise<void> {
        const Report = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Report' + i);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIDetailsGrid, Officer, 'Report');
        expect(await cell.innerText()).toEqual(Report);
    }

    async verifyEditorButtonIsInGreenColor(): Promise<void> {
        const color = await this.uIEditorIcon.evaluate(el => getComputedStyle(el).color);
        expect(color).toEqual('rgba(0, 128, 0, 1)');
    }

    async verifyAtIconByOfficerInGrid(Officer: string): Promise<void> {
        const cell = await new GridHelpers(this.page).getGridCell(this.uIDetailsGrid, Officer, 'C');
        const style = await cell.getAttribute('style');
        expect(style).toContain('Notification.gif');
    }

    async ClickUpdateButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifyAtIconIsNotPresentByOfficerInGrid(Officer: string): Promise<void> {
        expect("").toEqual(gridCell);
    }

    async SelectAtReportInGrid(Report: string): Promise<void> {
        await this.uIDetailsGrid.locator('td', { hasText: Report }).click();
    }

    async verifyRowCountIsZeroInGrid(): Promise<void> {
        const rowCount = await new GridHelpers(this.page).getRowCount(this.uIDetailsGrid);
        expect(rowCount).toEqual(0);
    }

    async verifyDateTimeInGrid(jsonIndex: number): Promise<void> {
        const cell = await new GridHelpers(this.page).getGridCellByIndex(this.uIDetailsGrid, 0, 'Date/Time');
        const dateTime = await cell.innerText();
        expect(dateTime).toContain(DateHelpers.getCurrentDate());
    }

    async verifyAtOfficerCode(jsonIndex: number): Promise<void> {
        const OfficerCode = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'OfficerCode' + jsonIndex);
        expect(await this.uIOfficerCodeEdit.getAttribute('value')).toEqual(OfficerCode);
    }

    async verifyAtOfficerDescription(jsonIndex: number): Promise<void> {
        const OfficerDescription = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'OfficerDescription' + jsonIndex);
        expect(await this.uIOfficerDescriptionEdit.getAttribute('value')).toEqual(OfficerDescription);
    }

    async verifyEditorColorIsGreen(): Promise<void> {
        const color = await this.uIEditorButton.evaluate(el => getComputedStyle(el).color);
        expect(color).toEqual('rgba(0, 128, 0, 1)');
    }

}

export class DisciplinaryWitnessesTabPage {
    readonly page: Page;
    readonly uINavigateToWitnessTab: Locator;
    readonly uIInmateRedioButton: Locator;
    readonly uIEmployeeRedioButton: Locator;
    readonly uIOthersRedioButton: Locator;
    readonly uISPNNoEdit: Locator;
    readonly uIEmployeeNameEdit: Locator;
    readonly uIOthersNameTypeEdit: Locator;
    readonly uIOthersNameIDEdit: Locator;
    readonly uINotesEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIGrIDTable: Locator;
    readonly uISaveButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIInmateRadioButton: Locator;
    readonly uIOthersRadioButton: Locator;
    readonly uIWitnessGrid: Locator;
    readonly uIWitnessEdit: Locator;
    readonly uIStatusLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToWitnessTab = page.locator("//div[@id='tabDisciplinary'] //span[contains(text(),'Witness(es)')]");
        this.uIInmateRedioButton = page.locator('#rbtInmate');
        this.uIEmployeeRedioButton = page.locator('#rbtEmployee');
        this.uIOthersRedioButton = page.locator('#rbtOthers');
        this.uISPNNoEdit = page.locator('#NamCtrlSPIN_SPN');
        this.uIEmployeeNameEdit = page.locator('#lupPF_CodeValue');
        this.uIOthersNameTypeEdit = page.locator('#NameOther_NameType');
        this.uIOthersNameIDEdit = page.locator('#NameOther_NameTypeID');
        this.uINotesEdit = page.locator('#txtNotes');
        this.uIAddButton = page.locator('#cmdAddWit');
        this.uIClearButton = page.locator('#cmdClearWit');
        this.uIGrIDTable = page.locator('#grdWitness');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIResetButton = page.locator('#cmdReset');
        this.uIInmateRadioButton = page.locator('#rbtInmate');
        this.uIOthersRadioButton = page.locator('#rbtOthers');
        this.uIWitnessGrid = page.locator('#grdWitness');
        this.uIWitnessEdit = page.locator('#lupPF_CodeValue');
        this.uIStatusLabel = page.locator("//table[@id='Table2']//td//b");
    }

    async EnterAtInmate(WitnessSPNNo: string, NotesForInmate: string): Promise<void> {
        await this.uIInmateRedioButton.click();
        await this.uISPNNoEdit.fill(WitnessSPNNo);
        await this.uISPNNoEdit.press('Tab');
        await this.uINotesEdit.fill(NotesForInmate);
    }

    async EnterAtEmployee(NotesForEmployee: string): Promise<void> {
        await this.uIEmployeeRedioButton.click();
        await this.uIEmployeeNameEdit.press('Tab');
        await this.uINotesEdit.fill(NotesForEmployee);
    }

    async EnterAtOthers(NameType: string, NameID: string, NotesforOthers: string): Promise<void> {
        await this.uIOthersRedioButton.click();
        await this.uIOthersNameTypeEdit.fill(NameType);
        await this.uIOthersNameIDEdit.fill(NameID);
        await this.uIOthersNameIDEdit.press('Tab');
        await this.uINotesEdit.fill(NotesforOthers);
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async ClickClearButton(): Promise<void> {
        await this.uIClearButton.click();
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async ClickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async clickInmateRadioButton(): Promise<void> {
        await this.uIInmateRadioButton.click();
    }

    async clickOthersRadioButton(): Promise<void> {
        await this.uIOthersRadioButton.click();
    }

    async verifyAtTypeInGrid(jsonIndex: number): Promise<void> {
        const Type = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Type' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIWitnessGrid, Type, 'Type');
        expect(await cell.innerText(), "Type is not same as expected-->").toEqual(Type);
    }

    async saveInternally(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).uIModalFooterYesButton.click();
    }

    async clickEmployeeRadioButton(): Promise<void> {
        await this.uIEmployeeRedioButton.click();
    }

    async enterAtWitness(jsonIndex: number): Promise<void> {
        const Witness = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Witness' + jsonIndex);
        await this.uIWitnessEdit.fill(Witness);
        await this.uIWitnessEdit.press('Tab');
    }

    async verifyUpdateSuccessful(): Promise<void> {
        expect(await this.uIStatusLabel.innerText()).toEqual("1003 - Update Successful");
    }

    async verifyAtNameInGrid(jsonIndex: number): Promise<void> {
        const Name = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Name' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIWitnessGrid, Name, 'Name');
        expect(await cell.innerText(), "Name is not same as expected-->").toEqual(Name);
    }

}

export class DisciplinaryEvIDenceTabPage {
    readonly page: Page;
    readonly uINavigateToEvIDenceTab: Locator;
    readonly uICreateCaseButton: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uIAddNewPropertyReportutton: Locator;
    readonly uIResetButton: Locator;
    readonly uIUpdateCaseButton: Locator;
    readonly uIAddNewPropertyReport: Locator;
    readonly uIEvidenceGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToEvIDenceTab = page.locator("//div[@id='tabDisciplinary'] //span[contains(text(),'Evidence')]");
        this.uICreateCaseButton = page.locator('#btnCreateCase');
        this.uICaseYearEdit = page.locator('#nbrCase_Year');
        this.uICaseNumberEdit = page.locator('#nbrCase_Number');
        this.uIAddNewPropertyReportutton = page.locator('#cmdAddProp');
        this.uIResetButton = page.locator('#cmdReser');
        this.uIUpdateCaseButton = page.locator('#btnCreateCase');
        this.uIAddNewPropertyReport = page.locator('#cmdAddProp');
        this.uIEvidenceGrid = page.locator('#grdProperty');
    }

    async EnterAtCaseNo(CaseYear: string, CaseNo: string): Promise<void> {
        await this.uICaseYearEdit.fill(CaseYear);
        await this.uICaseNumberEdit.fill(CaseNo);
        await this.uICaseNumberEdit.press('Tab');
    }

    async ClickCreatCaseButton(): Promise<void> {
        await this.uICreateCaseButton.click();
    }

    async ClickAddNewPropertyReprotButton(): Promise<void> {
        await this.uIAddNewPropertyReportutton.click();
    }

    async ClickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async clickUpdateCaseButton(): Promise<void> {
        await this.uIUpdateCaseButton.click();
    }

    async verifyAtCaseNo(caseNumber: string): Promise<void> {
        expect(await this.uICaseYearEdit.getAttribute('value')).toEqual(caseNumber.substring(0, 2));
        expect(await this.uICaseNumberEdit.getAttribute('value')).toEqual(caseNumber.substring(3));
    }

    async verifyAddNewPropertyReportIsEnabled(): Promise<void> {
        expect(await this.uIAddNewPropertyReport.isEnabled()).toBeTruthy();
    }

    async clickAddNewPropertyReport(): Promise<void> {
        await this.uIAddNewPropertyReport.click();
    }

    async verifyAtTypeInGrid(jsonIndex: number): Promise<void> {
        const Type = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Type' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIEvidenceGrid, Type, 'Type');
        expect(await cell.innerText(), "Type is not same as expected-->").toEqual(Type);
    }

    async verifyAtPropertyNoInGrid(propertyNo: string): Promise<void> {
        const cell = await new GridHelpers(this.page).getGridCell(this.uIEvidenceGrid, propertyNo, 'Property Number');
        expect(await cell.innerText(), "Property Number is not same as expected-->").toEqual(propertyNo);
    }

    async readCaseNo(): Promise<string> {
        const caseYear = await this.uICaseYearEdit.getAttribute('value');
        const caseNo = await this.uICaseNumberEdit.getAttribute('value');
        return caseYear + "-" + caseNo;
    }

    async verifyCreateCaseButtonIsDisabled(): Promise<void> {
        expect(await this.uICreateCaseButton.isEnabled()).toBeFalsy();
    }

}

export class DisciplinaryInvestigationTabPage {
    readonly page: Page;
    readonly uINavigateToInvestigationTab: Locator;
    readonly uIAssignedDateEdit: Locator;
    readonly uIAssignedTimeEdit: Locator;
    readonly uICreateCaseButton: Locator;
    readonly uICaseyearEdit: Locator;
    readonly uICaseNoEdit: Locator;
    readonly uIInvestigatorAssignedPFEdit: Locator;
    readonly uIEditorcontrol: Locator;
    readonly uISaveButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIStatusLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToInvestigationTab = page.locator("//div[@id='tabDisciplinary'] //span[contains(text(),'Investigation')]");
        this.uIAssignedDateEdit = page.locator('#dttmAssigned_Date_KPIDttmCtrl');
        this.uIAssignedTimeEdit = page.locator("//table[@id='dttmAssigned_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uICreateCaseButton = page.locator('#btnCreateCase');
        this.uICaseyearEdit = page.locator('#nbrCase_Year');
        this.uICaseNoEdit = page.locator('#nbrCase_Number');
        this.uIInvestigatorAssignedPFEdit = page.locator('#lupInvAssigned_CodeValue');
        this.uIEditorcontrol = page.locator('#RadDisInvestigationDetails_contentIframe');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIResetButton = page.locator('#cmdReset');
        this.uIStatusLabel = page.locator("//table[@id='Table2']//td//b");
    }

    async EnterAssignedDateTime(): Promise<void> {
        await this.uIAssignedDateEdit.press('Tab');
        await this.uIAssignedTimeEdit.press('Tab');
    }

    async ClickCreateaseButton(): Promise<void> {
        await this.uICreateCaseButton.click();
    }

    async EnterAtcaseNumber(CaseYear: string, CaseNo: string): Promise<void> {
        await this.uICaseyearEdit.fill(CaseYear);
        await this.uICaseNoEdit.fill(CaseNo);
    }

    async EnterAtInvestigatorAssigned(InvestigatorAssigned: string): Promise<void> {
        await this.uIInvestigatorAssignedPFEdit.fill(InvestigatorAssigned);
    }

    async EnterAtNarrative(Narrative: string): Promise<void> {
        await this.uIEditorcontrol.click();
        await this.uIEditorcontrol.fill(Narrative);
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
        const message = await this.page.locator("//div[@class='modal-body']").innerText();
        expect(message).toEqual("(3) Do You Want To Save All Of The Entered Details?");
        await new ConfirmPage(this.page).uIModalFooterYesButton.click();
    }

    async ClickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async verifyAtCaseNo(caseNumber: string): Promise<void> {
        expect(await this.uICaseyearEdit.getAttribute('value')).toEqual(caseNumber.substring(0, 2));
        expect(await this.uICaseNoEdit.getAttribute('value')).toEqual(caseNumber.substring(3));
    }

    async verifyUpdateSuccessful(): Promise<void> {
        expect(await this.uIStatusLabel.innerText()).toEqual("1003 - Update Successful");
    }

}

export class DisciplinaryDispositionTabPage {
    readonly page: Page;
    readonly uINavigateToDispositionTab: Locator;
    readonly uIOffenseDispostionEdit: Locator;
    readonly uISanctionButton: Locator;
    readonly uIOffenseCheckBox: Locator;
    readonly uIReportingOfficerSignDateEdit: Locator;
    readonly uIReportingOfficerSignTimeEdit: Locator;
    readonly uIInmateSignDateEdit: Locator;
    readonly uIInmateSignTimeEdit: Locator;
    readonly uIInmateRefuseToSignCheckBox: Locator;
    readonly uISupervisorPFCodeEdit: Locator;
    readonly uISupervisorCommentsEdit: Locator;
    readonly uISupervisorSignDateEdit: Locator;
    readonly uISupervisorSignTimeEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uIResetButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToDispositionTab = page.locator("//div[@id='tabDisciplinary'] //span[contains(text(),'Disposition')]");
        this.uIOffenseDispostionEdit = page.locator('#lupOffense_CodeValue');
        this.uISanctionButton = page.locator('#cmdSanction');
        this.uIOffenseCheckBox = page.locator("//div[@id='grdDisOffense']//img[@title='Unchecked']");
        this.uIReportingOfficerSignDateEdit = page.locator('#dttmReport_Date_KPIDttmCtrl');
        this.uIReportingOfficerSignTimeEdit = page.locator("//table[@id='dttmReport_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIInmateSignDateEdit = page.locator('#dttmInmateSign_Date_KPIDttmCtrl');
        this.uIInmateSignTimeEdit = page.locator("//table[@id='dttmInmateSign_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIInmateRefuseToSignCheckBox = page.locator('#chkRefuse');
        this.uISupervisorPFCodeEdit = page.locator('#lupSuper_CodeValue');
        this.uISupervisorCommentsEdit = page.locator('#txtSuperCmt');
        this.uISupervisorSignDateEdit = page.locator('#dttmSuperSign_Date_KPIDttmCtrl');
        this.uISupervisorSignTimeEdit = page.locator("//table[@id='dttmSuperSign_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uISaveButton = page.locator('#cmdSave');
        this.uIResetButton = page.locator('#cmdReset');
    }

    async EnterAtSPN(SPNNo: string): Promise<void> {
        await this.uISPNNoEdit.fill(SPNNo);
        await this.uISPNNoEdit.press('Tab');
    }

    async EnterIncidentDateTime(): Promise<void> {
        await this.uIIncIDentDateEdit.click();
        await this.uIIncIDentDateEdit.press('Tab');
        await this.uIIncIDentTimeEdit.click();
        await this.uIIncIDentTimeEdit.press('Tab');
    }

    async EnterAtLocation(Building: string): Promise<void> {
        await this.uIBuildingDropdown.selectOption({ label: Building });
    }

    async ReportingOfficer(): Promise<void> {
        await this.uIReportingOfficerEdit.press('Tab');
    }

    async ReportingDateTime(): Promise<void> {
        await this.uIReportingOfficerDateEdit.press('Tab');
        await this.uIReportingOfficerTimeEdit.press('Tab');
    }

    async SelectAtStatus(Status: string): Promise<void> {
        await this.uIStatusDropdown.selectOption({ label: Status });
    }

    async EnterOffenseDateTime(): Promise<void> {
        await this.uIDateEdit.click();
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.click();
        await this.uITimeEdit.press('Tab');
    }

    async EnterAtOffense(Offense: string): Promise<void> {
        await this.uIOffenceEdit.fill(Offense);
    }

    async EnterAtIncidentSummary(IncidentSummary: string): Promise<void> {
        await this.uIIncIDentSummaryEdit.fill(IncidentSummary);
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async EnterAtOffenseDispostion(OffenseDisposition: string): Promise<void> {
        await this.uIOffenseDispostionEdit.fill(OffenseDisposition);
        await this.uIOffenseDispostionEdit.press('Tab');
    }

    async SelectoffenceCheckBox(): Promise<void> {
        await this.uIOffenseCheckBox.click();
    }

    async ClickSanctionButton(): Promise<void> {
        await this.uISanctionButton.click();
    }

    async DispoReportingDateTime(): Promise<void> {
        await this.uIReportingOfficerSignDateEdit.press('Tab');
        await this.uIReportingOfficerSignTimeEdit.press('Tab');
    }

    async InmateSignDateTime(): Promise<void> {
        await this.uIInmateSignDateEdit.press('Tab');
        await this.uIInmateSignTimeEdit.press('Tab');
    }

    async SelectInmateRefusedTosing(): Promise<void> {
        await this.uIInmateRefuseToSignCheckBox.click();
    }

    async EnterSupervisorApproval(Comments: string): Promise<void> {
        await this.uISupervisorPFCodeEdit.press('Tab');
        await this.uISupervisorCommentsEdit.fill(Comments);
        await this.uISupervisorSignDateEdit.press('Tab');
        await this.uISupervisorSignTimeEdit.press('Tab');
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async ClickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

}

export class DisciplinaryHearingTabPage {
    readonly page: Page;
    readonly uINavigateToHearingTab: Locator;
    readonly uIPrimilinaryButton: Locator;
    readonly uINewHearingDateCheckBox: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIBuildingDropdown: Locator;
    readonly uIFloorLookupEdit: Locator;
    readonly uIpodLookupEdit: Locator;
    readonly uICellLookupEdit: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uIHearingOfficerEdit: Locator;
    readonly uICommentsEdit: Locator;
    readonly uIHearingButton: Locator;
    readonly uIHearingStatusDropdown: Locator;
    readonly uIGrIDTable: Locator;
    readonly uISaveButton: Locator;
    readonly uIResetButton: Locator;
    readonly uILocationDropdown: Locator;
    readonly uIStatusLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToHearingTab = page.locator("//div[@id='tabDisciplinary'] //span[contains(text(),'Hearing')]");
        this.uIPrimilinaryButton = page.locator('#cmdPrmilinary');
        this.uINewHearingDateCheckBox = page.locator('#chkNew');
        this.uIDateEdit = page.locator('#dttmHearing_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='dttmHearing_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIBuildingDropdown = page.locator('#cddBuilding_DropDown');
        this.uIFloorLookupEdit = page.locator('#lupFloor_CodeValue');
        this.uIpodLookupEdit = page.locator('#lupPod_CodeValue');
        this.uICellLookupEdit = page.locator('#lupCell_CodeValue');
        this.uIDescriptionEdit = page.locator('#txtDesc');
        this.uIHearingOfficerEdit = page.locator('#lupHearingOfficer_CodeValue');
        this.uICommentsEdit = page.locator('#txtComments');
        this.uIHearingButton = page.locator('#btnHearing');
        this.uIHearingStatusDropdown = page.locator('#cddHearStatus_DropDown');
        this.uIGrIDTable = page.locator('#grdHearing');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIResetButton = page.locator('#cmdReset');
        this.uILocationDropdown = page.locator('#cddBuilding_DropDown');
        this.uIStatusLabel = page.locator("//table[@id='Table2']//b");
    }

    async ClickPreliminaryButton(): Promise<void> {
        await this.uIPrimilinaryButton.click();
    }

    async EnterDateTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async EnterAtLoation(Building: string, Floor: string, Pod: string, Cell: string, Description: string): Promise<void> {
        await this.uIBuildingDropdown.selectOption({ label: Building });
        await this.uIFloorLookupEdit.fill(Floor);
        await this.uIpodLookupEdit.fill(Pod);
        await this.uICellLookupEdit.fill(Cell);
        await this.uIDescriptionEdit.fill(Description);
    }

    async EnterAtHearingOfficer(HearingOfficer: string): Promise<void> {
        await this.uIHearingOfficerEdit.fill(HearingOfficer);
        await this.uIHearingOfficerEdit.press('Tab');
    }

    async EnterAtComments(Comments: string): Promise<void> {
        await this.uICommentsEdit.fill(Comments);
    }

    async ClcikHearingButton(): Promise<void> {
        await this.uIHearingButton.click();
    }

    async SelectAtHearingStatus(HearingStatus: string): Promise<void> {
        await this.uIHearingStatusDropdown.selectOption({ label: HearingStatus });
    }

    async SelectRecordfromgrid(): Promise<void> {
        await new GridHelpers(this.page).selectRowByCellText(this.uIGrIDTable, '');
    }

    async ClickNotifyIcon(): Promise<void> {
        await this.uIGrIDTable.locator("td.NotificationRules").first().click();
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do You Want To Save All Of The Entered Details?');
    }

    async ClickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async selectAtLocation(jsonIndex: number): Promise<void> {
        const Location = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Location' + jsonIndex);
        await this.uILocationDropdown.selectOption({ label: Location });
    }

    async verifyAdditionSuccessful(): Promise<void> {
        expect(await this.uIStatusLabel.innerText()).toEqual("1002 - Addition Successful");
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async clickYesInSavePopup(): Promise<void> {
        const message = await this.page.locator("//div[@class='modal-body']").innerText();
        expect(message).toEqual("(3) Do You Want To Save All Of The Entered Details?");
        await new ConfirmPage(this.page).uIModalFooterYesButton.click();
    }

    async selectAtLocationInGrid(jsonIndex: number): Promise<void> {
        const Location = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Location' + jsonIndex);
        await new GridHelpers(this.page).selectRowByCellText(this.uIGrIDTable, Location);
    }

    async verifyAtCommentsLength(jsonIndex: number): Promise<void> {
        const expectedLength = parseInt(new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'length' + jsonIndex));
        const actualLength = (await this.uICommentsEdit.inputValue()).length;
        expect(actualLength).toEqual(expectedLength);
    }

    async verifyUpdateSuccessful(): Promise<void> {
        expect(await this.uIStatusLabel.innerText()).toEqual("1003 - Update Successful");
    }

    async enterCommentsAs1000(): Promise<void> {
        await this.uICommentsEdit.fill(RandomHelpers.randomString(1100));
    }

    async verifyAtHearingOfficerInGrid(jsonIndex: number): Promise<void> {
        const HearingOfficer = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'HearingOfficer' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIGrIDTable, HearingOfficer, 'Hearing Officer');
        expect(await cell.innerText(), "HearingOfficer is not same as expected -->").toEqual(HearingOfficer);
    }

}

export class DisciplinaryAttachmentTabPage {
    readonly page: Page;
    readonly uINavigateToAttachmentab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToAttachmentab = page.locator("//div[@id='tabDisciplinary'] //span[contains(text(),'Attachment')]");
    }

    async verifyIncidentChangePopUPAndAccept(): Promise<void> {
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(30599) Do you want to change the incident status?');
    }

    async verifyIncidentChangePopUPAndReject(): Promise<void> {
        await new ConfirmPage(this.page).noWithScreenOrWindowPopup('(30599) Do you want to change the incident status?');
    }

    async verifySaveConfirmPopupAndAccept(): Promise<void> {
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do You Want To Save All Of The Entered Details?');
    }

    async clicksave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async clickRefresh(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async verify30536AcknowelgeMessage(): Promise<void> {
        await new AcknowledgePage(this.page).okWithScreenOrWindowPopup('(30536) Select Status');
    }

    async clickDeleteIcon(): Promise<void> {
        await this.uIDeleteIcon.click();
        await new ConfirmPage(this.page).uIModalFooterYesButton.click();
    }

}

export class StipulationTabPage {
    readonly page: Page;
    readonly uINewStipulationButton: Locator;
    readonly uIStipulationGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINewStipulationButton = page.locator('#cmdNewStipulation');
        this.uIStipulationGrid = page.locator('#grdStipulation');
    }

    async clickNewStipulation(): Promise<void> {
        await this.uINewStipulationButton.click();
    }

    async selectRandomRecordInStipulationGrid(): Promise<void> {
        await new GridHelpers(this.page).selectRandomRow(this.uIStipulationGrid);
    }

}

export class DisciplinaryLinkedViolatorsTabPage {
    readonly page: Page;
    readonly uIViolatorSPNEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uISaveButton: Locator;
    readonly uIViolatorGrid: Locator;
    readonly uICreateNewLinkedIncidentRadioButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIViolatorSPNEdit = page.locator('#NamCtrlSPIN_SPN');
        this.uIAddButton = page.locator('#cmdAddVio');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIViolatorGrid = page.locator('#grdLnkviolatory');
        this.uICreateNewLinkedIncidentRadioButton = page.locator('#rbtNewlnkInc');
    }

    async enterAtViolatorSPN(jsonIndex: number): Promise<void> {
        const SPN = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'SPN' + jsonIndex);
        await this.uIViolatorSPNEdit.fill(SPN);
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async saveInternally(): Promise<void> {
        await this.uISaveButton.click();
        // await this.page.locator("//div[@class=\\\'modal-body\\\']").innerText();
        await new ConfirmPage(this.page).uIModalFooterYesButton.click();
    }

    async verifyAtSPNInGrid(jsonIndex: number): Promise<void> {
        const SPN = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'SPN' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIViolatorGrid, SPN, 'SPN');
        expect(await cell.innerText(), "SPN is not same as expected-->").toEqual(SPN);
    }

    async clickCreateNewLinkedIncident(): Promise<void> {
        await this.uICreateNewLinkedIncidentRadioButton.click();
    }

    async verifyAtNameIdInGrid(jsonIndex: number): Promise<void> {
        const NameID = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'NameID' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIViolatorGrid, NameID, 'Name ID');
        expect(await cell.innerText(), "Name ID is not same as expected-->").toEqual(NameID);
    }

    async verifyAtIncidentIsNotNullByUsingNameID(jsonIndex: number): Promise<void> {
        const NameID = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'NameID' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIViolatorGrid, NameID, 'Incident#');
        const incidentNo = await cell.innerText();
        expect(incidentNo.length).toBeGreaterThan(0);
    }

    async verifyDeleteIconIsDisabled(Disabled: string): Promise<void> {
        const disabled = await this.page.locator('#cmdDelete').getAttribute('disabled');
        expect(disabled).toEqual(Disabled);
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async selectAtLocation(jsonIndex: number): Promise<void> {
        const Location = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Location' + jsonIndex);
        await this.page.locator('#cddBuilding_DropDown').selectOption({ label: Location });
    }

    async switchToLinkedViolatorsTab(): Promise<void> {
        await this.page.locator("//span[text()='Linked Violators']").click();
    }

    async verifyLinkedViolatorsTabIsDisplayed(): Promise<void> {
        expect(await this.page.locator("//span[text()='Linked Violators']").isVisible()).toBeTruthy();
    }

    async verifyWitnessesTabIsDisplayed(): Promise<void> {
        expect(await this.page.locator("//div[@id='tabDisciplinary'] //span[contains(text(),'Witness(es)')]").isVisible()).toBeTruthy();
    }

    async verifyEvidenceTabIsDisplayed(): Promise<void> {
        expect(await this.page.locator("//div[@id='tabDisciplinary'] //span[contains(text(),'Evidence')]").isVisible()).toBeTruthy();
    }

    async verifyInvestigationTabIsDisplayed(): Promise<void> {
        expect(await this.page.locator("//div[@id='tabDisciplinary'] //span[contains(text(),'Investigation')]").isVisible()).toBeTruthy();
    }

    async verifyStipulationTabIsDisplayed(): Promise<void> {
        expect(await this.page.locator("//span[text()='Stipulation']").isVisible()).toBeTruthy();
    }

    async verifyHearingTabIsDisplayed(): Promise<void> {
        expect(await this.page.locator("//div[@id='tabDisciplinary'] //span[contains(text(),'Hearing')]").isVisible()).toBeTruthy();
    }

    async verifyAttachmentTabIsDisplayed(): Promise<void> {
        expect(await this.page.locator("//div[@id='tabDisciplinary'] //span[contains(text(),'Attachment')]").isVisible()).toBeTruthy();
    }

    async setIncidentYearToJSONFile(testCaseId: string): Promise<void> {
        const incidentYear = await this.page.locator('#nbrIncident_Year').getAttribute('value');
        new TestDataReader('./test-data/').writeValue('FacilityManagement', testCaseId, 'IncidentYear', incidentYear);
    }

    async setIncidentNumberToJSONFile(testCaseId: string): Promise<void> {
        const incidentNumber = await this.page.locator('#nbrIncident_Number').getAttribute('value');
        new TestDataReader('./test-data/').writeValue('FacilityManagement', testCaseId, 'IncidentNumber', incidentNumber);
    }

    async clickNoIn30599Popup(): Promise<void> {
        await new ConfirmPage(this.page).noWithScreenOrWindowPopup('(30599) Do you want to change the incident status?');
    }

    async clickYesInSavePopup(): Promise<void> {
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do You Want To Save All Of The Entered Details?');
    }

    async clickYesIn30599Popup(): Promise<void> {
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(30599) Do you want to change the incident status?');
    }

    async selectAtStatus(jsonIndex: number): Promise<void> {
        await this.uIStatusDropdown.selectOption({ label: Status });
    }

    async clickYesIn30615Popup(): Promise<void> {
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(30615) One or more required notifications have not been completed. Do you want to proceed without completing all required notifications?');
    }

    async readIncidentNo(): Promise<string> {
        const incidentYear = await this.page.locator('#nbrIncident_Year').getAttribute('value');
        const incidentNumber = await this.page.locator('#nbrIncident_Number').getAttribute('value');
        return incidentYear + '-' + incidentNumber;
    }

    async verifyAtBuilding(jsonIndex: number): Promise<void> {
        const Building = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Building' + jsonIndex);
        const selectedItem = await new ElementHelpers(this.page).getDropDownSelectedItem(this.page.locator('#cddBuilding_DropDown'));
        expect(selectedItem).toEqual(Building);
    }

    async verifyAtFloor(jsonIndex: number): Promise<void> {
        const Floor = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Floor' + jsonIndex);
        expect(await this.page.locator('#lupFloor_CodeValue').getAttribute('value')).toEqual(Floor);
    }

    async verifyAtPod(jsonIndex: number): Promise<void> {
        const Pod = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Pod' + jsonIndex);
        expect(await this.page.locator('#lupPod_CodeValue').getAttribute('value')).toEqual(Pod);
    }

    async verifyAtCell(jsonIndex: number): Promise<void> {
        const Cell = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Cell' + jsonIndex);
        expect(await this.page.locator('#lupCell_CodeValue').getAttribute('value')).toEqual(Cell);
    }

    async verifyAtInmateType(jsonIndex: number): Promise<void> {
        const InmateType = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'InmateType' + jsonIndex);
        const inmateType = await this.page.locator('#txtInmateType').getAttribute('value');
        expect(inmateType, "Inmate Type is not same as expected-->").toEqual(InmateType);
    }

}

export class DisciplinaryHearingNoticePage {
    readonly page: Page;
    readonly uIAdministrativeHearingRadioButton: Locator;
    readonly uIRequestAssistanceRadioButton: Locator;
    readonly uICallWitnessesRadioButton: Locator;
    readonly uI24hoursAdvanceNoticeRadioButton: Locator;
    readonly uIInmateRefusesRadioButton: Locator;
    readonly uIInmateSignDateEdit: Locator;
    readonly uIInmateSignTimeEdit: Locator;
    readonly uIOfficerSignDateEdit: Locator;
    readonly uIOfficerSignTimeEdit: Locator;
    readonly uIWitnessSignDateEdit: Locator;
    readonly uIWitnessSignTimeEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNcloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAdministrativeHearingRadioButton = page.locator('#rbtyes1');
        this.uIRequestAssistanceRadioButton = page.locator('#rbtyes2');
        this.uICallWitnessesRadioButton = page.locator('#rbtyes3');
        this.uI24hoursAdvanceNoticeRadioButton = page.locator('#rbtyes4');
        this.uIInmateRefusesRadioButton = page.locator('#rbtyes5');
        this.uIInmateSignDateEdit = page.locator('#dttmInmSign_Date_KPIDttmCtrl');
        this.uIInmateSignTimeEdit = page.locator("//table[@id='dttmInmSign_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIOfficerSignDateEdit = page.locator('#dttmOffSign_Date_KPIDttmCtrl');
        this.uIOfficerSignTimeEdit = page.locator("//table[@id='dttmOffSign_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIWitnessSignDateEdit = page.locator('#dttmWitnessSign_Date_KPIDttmCtrl');
        this.uIWitnessSignTimeEdit = page.locator("//table[@id='dttmWitnessSign_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNcloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIRefreshButton = page.locator('#cmdRefresh');
    }

    async SelectPreliminaryHearingQuestions(): Promise<void> {
        await this.uIAdministrativeHearingRadioButton.click();
        await this.uIRequestAssistanceRadioButton.click();
        await this.uICallWitnessesRadioButton.click();
        await this.uI24hoursAdvanceNoticeRadioButton.click();
        await this.uIInmateRefusesRadioButton.click();
    }

    async EnterInmateSingatureDateTime(): Promise<void> {
        await this.uIInmateSignDateEdit.press('Tab');
        await this.uIInmateSignTimeEdit.press('Tab');
    }

    async EnterOfficerSingatureDateTime(): Promise<void> {
        await this.uIOfficerSignDateEdit.press('Tab');
        await this.uIOfficerSignTimeEdit.press('Tab');
    }

    async EnterWitnessSingatureDateTime(): Promise<void> {
        await this.uIWitnessSignDateEdit.press('Tab');
        await this.uIWitnessSignTimeEdit.press('Tab');
    }

    async ClickSaveNCloseButton(): Promise<void> {
        await this.uISaveNcloseButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

}

export class DisciplinaryNotifyPage {
    readonly page: Page;
    readonly uINotificationTypeDropdown: Locator;
    readonly uINotifiedDateEdit: Locator;
    readonly uINotifiedTimeEdit: Locator;
    readonly uINameDropdown: Locator;
    readonly uINotifiedByEdit: Locator;
    readonly uINotificationMethodDropdown: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIGrIDTable: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNcloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINotificationTypeDropdown = page.locator('#cddNotifyType_DropDown');
        this.uINotifiedDateEdit = page.locator('#dttmNotified_Date_KPIDttmCtrl');
        this.uINotifiedTimeEdit = page.locator("//table[@id='dttmNotified_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uINameDropdown = page.locator('#drpName');
        this.uINotifiedByEdit = page.locator('#lupNotifiedBy_CodeValue');
        this.uINotificationMethodDropdown = page.locator('#cddMethod_DropDown');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIClearButton = page.locator('#cmdClear');
        this.uIGrIDTable = page.locator('#grdNotification');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNcloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIRefreshButton = page.locator('#cmdRefresh');
    }

}

export class SanctionEntryPage {
    readonly page: Page;
    readonly uISanctionEdit: Locator;
    readonly uIAddIcon: Locator;
    readonly uIResetIcon: Locator;
    readonly uISanctionButton: Locator;
    readonly uIDurationEdit: Locator;
    readonly uIDurationTypeDropdown: Locator;
    readonly uIConsecutiveLookUpEdit: Locator;
    readonly uIStartDateEdit: Locator;
    readonly uIStartTimeEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIGridTable: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNcloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIEndDateEdit: Locator;
    readonly uIEndTimeEdit: Locator;
    readonly uISanctionTextEdit: Locator;
    readonly uIIncIDentDateEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISanctionEdit = page.locator('#lupSanction_CodeValue');
        this.uIAddIcon = page.locator('#cmdLupAdd');
        this.uIResetIcon = page.locator('#cmdLupClear');
        this.uISanctionButton = page.locator('#cmdSanction');
        this.uIDurationEdit = page.locator('#txtDuration');
        this.uIDurationTypeDropdown = page.locator('#cddDuration_DropDown');
        this.uIConsecutiveLookUpEdit = page.locator('#lupConsecutive_CodeValue');
        this.uIStartDateEdit = page.locator('#dtStart_Date_KPIDttmCtrl');
        this.uIStartTimeEdit = page.locator("//table[@id='dtStart_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIClearButton = page.locator('#cmdClear');
        this.uIGridTable = page.locator('#grdSanction');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNcloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIEndDateEdit = page.locator('#dtEnd_Date_KPIDttmCtrl');
        this.uIEndTimeEdit = page.locator("//table[@id='dtEnd_Time']//input");
        this.uISanctionTextEdit = page.locator('#txtSanction');
        this.uIIncIDentDateEdit = page.locator('#dttmIncident_Date_KPIDttmCtrl');
    }

    async clickSanctionButton(): Promise<void> {
        await this.uISanctionButton.click();
    }

    async enterAtDuration(Duration: string): Promise<void> {
        await this.uIDurationEdit.fill(Duration);
    }

    async selectAtDuration(DurationType: string): Promise<void> {
        await this.uIDurationTypeDropdown.selectOption({ label: DurationType });
    }

    async enterCurrentStartDateAndTime(): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        const currentTime = DateHelpers.getCurrentTime();
        await this.uIStartDateEdit.fill(currentDate);
        await this.uIStartDateEdit.press('Tab');
        await this.uIStartTimeEdit.fill(currentTime);
    }

    async verifyAtEndTime(DurationHours: string): Promise<void> {
        const startTime = await this.uIStartTimeEdit.getAttribute('value');
        const endTime = await this.uIEndTimeEdit.getAttribute('value');
        expect(endTime).toBeTruthy();
    }

    async verifyEndDateAsCurrentDate(): Promise<void> {
        const startDate = await this.uIStartDateEdit.getAttribute('value');
        expect(startDate).toEqual(DateHelpers.getCurrentDate());
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifyAtSanctionInGrid(Sanction: string): Promise<void> {
        const cell = await new GridHelpers(this.page).getGridCell(this.uIGridTable, Sanction, 'Sanction');
        expect(await cell.innerText()).toContain(Sanction);
    }

    async verifyAtSanctionTextEdit(Sanction: string): Promise<void> {
        expect(await this.uISanctionTextEdit.innerText()).toEqual(Sanction);
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3)Do You Want To Save All Of The Entered Details?');
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async verifyAtStartDateTimeInGrid(date: string, Sanction: string): Promise<void> {
        const cell = await new GridHelpers(this.page).getGridCell(this.uIGridTable, Sanction, 'Start Date');
        expect(await cell.innerText()).toEqual(date);
    }

    async verifyIncidentDateAsCurrentDate(): Promise<void> {
        expect(await this.uIIncIDentDateEdit.getAttribute('value')).toEqual(DateHelpers.getCurrentDate());
    }

    async enterAtSanction(Sanction: string): Promise<void> {
        await this.uISanctionEdit.fill(Sanction);
    }

    async verifyAtDurationInGrid(jsonIndex: number): Promise<void> {
        const Duration = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Duration' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIGridTable, Duration, 'Duration');
        expect(await cell.innerText()).toEqual(Duration);
    }

    async readStartDateAndTime(): Promise<string> {
        const date = await this.uIStartDateEdit.getAttribute('value');
        const time = await this.uIStartTimeEdit.getAttribute('value');
        return date + ' ' + time;
    }

}

export class HearingIncidentEntryPage {
    readonly page: Page;
    readonly uIInmateNotPersentCheckBox: Locator;
    readonly uIReasonDropdown: Locator;
    readonly uIOffenseCheckBox: Locator;
    readonly uIHearingOfficerEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNcloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIHearingGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIInmateNotPersentCheckBox = page.locator('#chkInmate');
        this.uIReasonDropdown = page.locator('#cddInmReason_DropDown');
        this.uIOffenseCheckBox = page.locator("//div[@id='grdHearingLocation']//img[@title='Unchecked']");
        this.uIHearingOfficerEdit = page.locator('#lupPFHearingOff_CodeValue');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNcloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIHearingGrid = page.locator('#grdHearingLocation');
    }

    async SelectInmateNotPresent(): Promise<void> {
        await this.uIInmateNotPersentCheckBox.click();
    }

    async SelectAtReason(Reason: string): Promise<void> {
        await this.uIReasonDropdown.selectOption({ label: Reason });
    }

    async SelectOffenseCheckbox(): Promise<void> {
        await this.uIOffenseCheckBox.click();
    }

    async EnterHearingOfficer(): Promise<void> {
        await this.uIHearingOfficerEdit.press('Tab');
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async ClickSaveNCloseButton(): Promise<void> {
        await this.uISaveNcloseButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async NavigateToDispostionTab(): Promise<void> {
        await this.uINavigateToDispositionTab.click();
        // no-op: window handle
    }

    async NavigateToDetailsTab(): Promise<void> {
        await this.uINavigateToDetailsTab.click();
    }

    async NavigateToWitnessTab(): Promise<void> {
        await this.uINavigateToWitnessTab.click();
    }

    async NavigateToAppealTab(): Promise<void> {
        await this.uINavigateToAppealTab.click();
    }

    async NavigateToAttachmentTab(): Promise<void> {
        await this.uINavigateToAttachmentTab.click();
    }

}

export class HearingIncidentDispostionTabPage {
    readonly page: Page;
    readonly uINavigateToDispositionTab: Locator;
    readonly uIWitnessCalledCheckBox: Locator;
    readonly uIAdvancedNoticeGivenCheckBox: Locator;
    readonly uIHearingDispotionLookupEdit: Locator;
    readonly uIHearingDispotionDateEdit: Locator;
    readonly uIHearingDispotionTimeEdit: Locator;
    readonly uISanctionButton: Locator;
    readonly uICommentsRadEdit: Locator;
    readonly uIOfficerSignDateEdit: Locator;
    readonly uIOfficerSignTimeEdit: Locator;
    readonly uIInmateSignDateEdit: Locator;
    readonly uIInmateSignTimeEdit: Locator;
    readonly uIHearingDispositionDescriptionEdit: Locator;
    readonly uISuperVisorCodeEdit: Locator;
    readonly uISuperVisorDescriptionEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToDispositionTab = page.locator("//div[@class='DisciplinaryTab']//span[contains(text(),'Disposition')]");
        this.uIWitnessCalledCheckBox = page.locator('#tabHearing_tmpl0_UsrDisposition1_chkWitness');
        this.uIAdvancedNoticeGivenCheckBox = page.locator('#tabHearing_tmpl0_UsrDisposition1_chkAdvNotice');
        this.uIHearingDispotionLookupEdit = page.locator('#tabHearing_tmpl0_UsrDisposition1_lupHearingDipo_CodeValue');
        this.uIHearingDispotionDateEdit = page.locator('#tabHearing_tmpl0_UsrDisposition1_dttmHearingDisp_Date_KPIDttmCtrl');
        this.uIHearingDispotionTimeEdit = page.locator("//table[@id='tabHearing_tmpl0_UsrDisposition1_dttmHearingDisp_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uISanctionButton = page.locator('#tabHearing_tmpl0_UsrDisposition1_cmdSanction');
        this.uICommentsRadEdit = page.locator('#tabHearing_tmpl0_UsrDisposition1_RadDisDispositionDetails_contentIframe');
        this.uIOfficerSignDateEdit = page.locator('#tabHearing_tmpl0_UsrDisposition1_dttmHearOfficer_Date_KPIDttmCtrl');
        this.uIOfficerSignTimeEdit = page.locator("//table[@id='tabHearing_tmpl0_UsrDisposition1_dttmHearOfficer_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIInmateSignDateEdit = page.locator('#tabHearing_tmpl0_UsrDisposition1_dttmInmate_Date_KPIDttmCtrl');
        this.uIInmateSignTimeEdit = page.locator("//table[@id='tabHearing_tmpl0_UsrDisposition1_dttmInmate_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIHearingDispositionDescriptionEdit = page.locator('#tabHearing_tmpl0_UsrDisposition1_lupHearingDipo_CodeDescription');
        this.uISuperVisorCodeEdit = page.locator('#lupSuper_CodeValue');
        this.uISuperVisorDescriptionEdit = page.locator('#lupSuper_CodeDescription');
    }

    async SelectWitnessCalledCheckBox(): Promise<void> {
        await this.uIWitnessCalledCheckBox.click();
    }

    async SelectAdvancedNoticeGivenCheckBox(): Promise<void> {
        await this.uIAdvancedNoticeGivenCheckBox.click();
    }

    async EnterAtHearingDisposition(HearingDisposition: string): Promise<void> {
        await this.uIHearingDispotionLookupEdit.fill(HearingDisposition);
        await this.uIHearingDispotionDateEdit.press('Tab');
        await this.uIHearingDispotionTimeEdit.press('Tab');
    }

    async ClickSanctionButton(): Promise<void> {
        await this.uISanctionButton.click();
    }

    async EnterAtComments(Comments: string): Promise<void> {
        await this.uICommentsRadEdit.fill(Comments);
    }

    async EnterOfficerSignDateTime(): Promise<void> {
        await this.uIOfficerSignDateEdit.press('Tab');
        await this.uIOfficerSignTimeEdit.press('Tab');
    }

    async EnterInmateSignDateTime(): Promise<void> {
        await this.uIInmateSignDateEdit.press('Tab');
        await this.uIInmateSignTimeEdit.press('Tab');
    }

    async SelectRefusedInmateSignCheckBox(): Promise<void> {
        // no-op
    }

    async verifyAtHearingDispositionCode(jsonIndex: number): Promise<void> {
        const HearingDispositionCode = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'HearingDispositionCode' + jsonIndex);
        expect(await this.uIHearingDispotionLookupEdit.getAttribute('value'), "Hearing disposition code is not same as expected -->").toEqual(HearingDispositionCode);
    }

    async verifyAtHearingDispositionDescription(jsonIndex: number): Promise<void> {
        const HearingDispositionDescription = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'HearingDispositionDescription' + jsonIndex);
        expect(await this.uIHearingDispositionDescriptionEdit.getAttribute('value'), "Hearing disposition description is not same as expected -->").toEqual(HearingDispositionDescription);
    }

    async verifyAtSuperVisorCode(jsonIndex: number): Promise<void> {
        const SupervisorCode = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'SupervisorCode' + jsonIndex);
        expect(await this.uISuperVisorCodeEdit.getAttribute('value'), "Supervisor Code is not same as expected -->").toEqual(SupervisorCode);
    }

    async verifyAtSuperVisorCodeDescription(jsonIndex: number): Promise<void> {
        const SupervisorCodeDescription = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'SupervisorCodeDescription' + jsonIndex);
        expect(await this.uISuperVisorDescriptionEdit.getAttribute('value'), "Supervisor Code Description is not same as expected -->").toEqual(SupervisorCodeDescription);
    }

}

export class HearingIncidentDetailsTabPage {
    readonly page: Page;
    readonly uINavigateToDetailsTab: Locator;
    readonly uIReportingOfficerCheckBox: Locator;
    readonly uIInvestigatorCheckBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToDetailsTab = page.locator("//div[@id='tabHearing'] //span[contains(text(),'Details')]");
        this.uIReportingOfficerCheckBox = page.locator('#tabHearing_tmpl1_UsrHearingDetails1_rbReportingOfficer');
        this.uIInvestigatorCheckBox = page.locator('#tabHearing_tmpl1_UsrHearingDetails1_rbInvegator');
    }

}

export class HearingIncidentWitnessesTabPage {
    readonly page: Page;
    readonly uINavigateToWitnessTab: Locator;
    readonly uIGridTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToWitnessTab = page.locator("//div[@id='tabHearing'] //span[contains(text(),'Witness(es)')]");
        this.uIGridTable = page.locator('#tabHearing_tmpl2_usrHearingWitness1_grdAssignHist');
    }

}

export class HearingIncidentAppealTabPage {
    readonly page: Page;
    readonly uINavigateToAppealTab: Locator;
    readonly uIAppealTypeDropdown: Locator;
    readonly uIRequestedDateEdit: Locator;
    readonly uIRequestedTimeEdit: Locator;
    readonly uIReviewDateEdit: Locator;
    readonly uIReviewTimeEdit: Locator;
    readonly uIAppealOfficerEdit: Locator;
    readonly uIAppealOfficerDenyCheckBox: Locator;
    readonly uIAppealOfficerApproveCheckBox: Locator;
    readonly uIAppealDispostionEdit: Locator;
    readonly uICommentsEdit: Locator;
    readonly uIEditorButton: Locator;
    readonly uISanctionButton: Locator;
    readonly uIADDButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIGridTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToAppealTab = page.locator("//div[@id='tabHearing'] //span[contains(text(),'Appeal')]");
        this.uIAppealTypeDropdown = page.locator('#tabHearing_tmpl3_UsrHearingAppeal1_cddAppealType_DropDown');
        this.uIRequestedDateEdit = page.locator('#tabHearing_tmpl3_UsrHearingAppeal1_dttmIncident_Date_KPIDttmCtrl');
        this.uIRequestedTimeEdit = page.locator("//table[@id='tabHearing_tmpl3_UsrHearingAppeal1_dttmIncident_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIReviewDateEdit = page.locator('#tabHearing_tmpl3_UsrHearingAppeal1_dttmReviewd_Date_KPIDttmCtrl');
        this.uIReviewTimeEdit = page.locator("//table[@id='tabHearing_tmpl3_UsrHearingAppeal1_dttmReviewd_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIAppealOfficerEdit = page.locator('#tabHearing_tmpl3_UsrHearingAppeal1_lupPFHearingOff_CodeValue');
        this.uIAppealOfficerDenyCheckBox = page.locator('#tabHearing_tmpl3_UsrHearingAppeal1_rbdeny');
        this.uIAppealOfficerApproveCheckBox = page.locator('#tabHearing_tmpl3_UsrHearingAppeal1_rbAccept');
        this.uIAppealDispostionEdit = page.locator('#tabHearing_tmpl3_UsrHearingAppeal1_lupHearingPFID_CodeValue');
        this.uICommentsEdit = page.locator('#tabHearing_tmpl3_UsrHearingAppeal1_txtComments');
        this.uIEditorButton = page.locator('#tabHearing_tmpl3_UsrHearingAppeal1_cmdEditor');
        this.uISanctionButton = page.locator('#tabHearing_tmpl3_UsrHearingAppeal1_cmdSanction');
        this.uIADDButton = page.locator('#tabHearing_tmpl3_UsrHearingAppeal1_cmdAddAppeal');
        this.uIClearButton = page.locator('#tabHearing_tmpl3_UsrHearingAppeal1_cmdClearAppeal');
        this.uIGridTable = page.locator('#tabHearing_tmpl3_UsrHearingAppeal1_grdAppeal');
    }

    async selectAtAppealType(AppealType: string): Promise<void> {
        await this.uIAppealTypeDropdown.selectOption({ label: AppealType });
    }

    async enterRequestedDateTime(): Promise<void> {
        await this.uIRequestedDateEdit.press('Tab');
        await this.uIRequestedTimeEdit.press('Tab');
    }

    async EnterReviewDateTime(): Promise<void> {
        await this.uIReviewDateEdit.press('Tab');
        await this.uIReviewTimeEdit.press('Tab');
    }

    async enterAtAppealOfficer(): Promise<void> {
        await this.uIAppealDispostionEdit.press('Tab');
    }

    async ClickApproveRadioButton(): Promise<void> {
        await this.uIAppealOfficerApproveCheckBox.click();
    }

    async EnterAtAppealDispostion(AppealDisposition: string): Promise<void> {
        await this.uIAppealDispostionEdit.fill(AppealDisposition);
    }

    async EnterAtComments(Comments: string): Promise<void> {
        await this.uICommentsEdit.fill(Comments);
    }

    async clickAddButton(): Promise<void> {
        await this.uIADDButton.click();
    }

    async ClickSanctionButton(): Promise<void> {
        await this.uISanctionButton.click();
    }

    async ClickEditorButton(): Promise<void> {
        await this.uIEditorButton.click();
    }

    async verifyAtRequestedDate(jsonIndex: number): Promise<void> {
        const AppealType = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'AppealType' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIGridTable, AppealType, 'Requested Date');
        const requestDate = await cell.innerText();
        expect(requestDate).toContain(DateHelpers.getCurrentDate());
    }

}

export class HearingIncidentAttachmentTabPage {
    readonly page: Page;
    readonly uINavigateToAttachmentTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToAttachmentTab = page.locator("//div[@id='tabHearing'] //span[contains(text(),'Attachment')]");
    }

    async enterAtHearingOfficer(jsonIndex: number): Promise<void> {
        const HearingOfficer = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'HearingOfficer' + jsonIndex);
        await this.page.locator('#lupPFHearingOff_CodeValue').fill(HearingOfficer);
    }

    async clickSave(): Promise<void> {
        await this.page.locator('#cmdSave').click();
    }

    async clickYesInSavePopup(): Promise<void> {
        const message = await this.page.locator("//div[@class='modal-body']").innerText();
        expect(message).toEqual("(3) Do You Want To Save All Of The Entered Details?");
        await new ConfirmPage(this.page).uIModalFooterYesButton.click();
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async verifyOffenseCheckBoxIsChecked(jsonIndex: number): Promise<void> {
        const Offense = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Offense' + jsonIndex);
        const gridCell = await new GridHelpers(this.page).getGridCell(this.page.locator('#grdHearingLocation'), Offense, 'Chk');
        const check = gridCell.locator('img');
        const attribute = await check.getAttribute('title');
        expect(attribute, "Checkbox is not checked as expected -->").toEqual("Checked");
    }

    async verifyAtDispositionInGrid(jsonIndex: number, Dispostion: string): Promise<void> {
        const Description = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Description' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.page.locator('#grdHearingLocation'), Description, 'Disposition');
        expect(await cell.innerText(), "Disposoition is not same in grid-->").toEqual(Dispostion);
    }

}

export class IncidentSearchPage {
    readonly page: Page;
    readonly uISubAgencyDrodown: Locator;
    readonly uIExculdeCloseIncidentsCheckBox: Locator;
    readonly uIDeliveryPendingCheckBox: Locator;
    readonly uIIncidentFromYearEdit: Locator;
    readonly uIIncidentFromNoEdit: Locator;
    readonly uIIncidentToYearEdit: Locator;
    readonly uIIncidentToNoEdit: Locator;
    readonly uIDateTypeDropdown: Locator;
    readonly uIFromDateEdit: Locator;
    readonly uIFromTimeEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIToTimeEdit: Locator;
    readonly uIDateResetIcon: Locator;
    readonly uIBuildingDropdown: Locator;
    readonly uIFloorLookupEdit: Locator;
    readonly uIpodLookupEdit: Locator;
    readonly uICellLookupEdit: Locator;
    readonly uIOthersEdit: Locator;
    readonly uIOffenseEdit: Locator;
    readonly uIOffenseTypeDropdown: Locator;
    readonly uIDispositionEdit: Locator;
    readonly uISanctionDropdown: Locator;
    readonly uIReportedByEdit: Locator;
    readonly uISupervisorEdit: Locator;
    readonly uIStatusDropdown: Locator;
    readonly uINameTypeDropdown: Locator;
    readonly uISPNNoEdit: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameIDEdit: Locator;
    readonly uIEmployeeCodeEdit: Locator;
    readonly uIWitnessCheckBox: Locator;
    readonly uIIncidentresultTable: Locator;
    readonly uISearchLink: Locator;
    readonly uIAddNewLink: Locator;
    readonly uIResetLink: Locator;
    readonly uIBackLink: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIFloorDropdown: Locator;
    readonly uIPodDropdown: Locator;
    readonly uICellDropdown: Locator;
    readonly uISanctionDropdownArrow: Locator;
    readonly uIAdvancedTab: Locator;
    readonly uIFloorDropdownArrow: Locator;
    readonly uIPodDropdownArrow: Locator;
    readonly uICellDropdownArrow: Locator;
    readonly uILastNameForNameEdit: Locator;
    readonly uIFirstNameForNameEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISubAgencyDrodown = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_cddSubAgency_DropDown');
        this.uIExculdeCloseIncidentsCheckBox = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_chkIncident');
        this.uIDeliveryPendingCheckBox = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_chkDelivery');
        this.uIIncidentFromYearEdit = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_nbrIncidentFrom_Year');
        this.uIIncidentFromNoEdit = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_nbrIncidentFrom_Number');
        this.uIIncidentToYearEdit = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_nbrIncidentTo_Year');
        this.uIIncidentToNoEdit = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_nbrIncidentTo_Number');
        this.uIDateTypeDropdown = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_drpDateType');
        this.uIFromDateEdit = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_dttmIncFrm_Date_KPIDttmCtrl');
        this.uIFromTimeEdit = page.locator("//table[@id='tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_dttmIncFrm_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIToDateEdit = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_dttmIncTo_Date_KPIDttmCtrl');
        this.uIToTimeEdit = page.locator("//table[@id='tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_dttmIncTo_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIDateResetIcon = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_imgClear');
        this.uIBuildingDropdown = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_cddBuilding_DropDown');
        this.uIFloorLookupEdit = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_cddFloor_CodeValue');
        this.uIpodLookupEdit = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_lupPod_CodeValue');
        this.uICellLookupEdit = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_lupCell_CodeValue');
        this.uIOthersEdit = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_txtOthers');
        this.uIOffenseEdit = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_lupOffDesc_CodeValue');
        this.uIOffenseTypeDropdown = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_cddType_DropDown');
        this.uIDispositionEdit = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_lupOffDisp_CodeValue');
        this.uISanctionDropdown = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_cddSanction_DropDown');
        this.uIReportedByEdit = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_lupRptBy_CodeValue');
        this.uISupervisorEdit = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_lupSupPFNbr_CodeValue');
        this.uIStatusDropdown = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_drpSupervisourStatus_DropDown');
        this.uINameTypeDropdown = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_drpNameType');
        this.uISPNNoEdit = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_NamCtrlSPIN_SPN');
        this.uINameTypeEdit = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_NameOther_NameType');
        this.uINameIDEdit = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_NameOther_NameTypeID');
        this.uIEmployeeCodeEdit = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_lupPF_CodeValue');
        this.uIWitnessCheckBox = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_chkWitness');
        this.uIIncidentresultTable = page.locator("//div[@id='grdIncidentSrch']");
        this.uISearchLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Search')]");
        this.uIAddNewLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Add New')]");
        this.uIResetLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Reset')]");
        this.uIBackLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Back')]");
        this.uILastNameEdit = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_NamCtrlSPIN_LastName');
        this.uIFirstNameEdit = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_NamCtrlSPIN_FirstName');
        this.uIFloorDropdown = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_NamCtrlSPIN_FirstName');
        this.uIPodDropdown = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_cddPod_Input');
        this.uICellDropdown = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_cddCell_Input');
        this.uISanctionDropdownArrow = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_cddSanction_Arrow');
        this.uIAdvancedTab = page.locator("//span[text()='Advanced']");
        this.uIFloorDropdownArrow = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_cddFloor_Arrow');
        this.uIPodDropdownArrow = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_cddPod_Arrow');
        this.uICellDropdownArrow = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_cddCell_Arrow');
        this.uILastNameForNameEdit = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_NameOther_LastName');
        this.uIFirstNameForNameEdit = page.locator('#tabIncidentSrch_tmpl0_UsrIncidentInqBasic1_NameOther_FirstName');
    }

    async SelectExcludeCloseIncident(): Promise<void> {
        await this.uIExculdeCloseIncidentsCheckBox.click();
    }

    async SelectDeliveryPending(): Promise<void> {
        await this.uIDeliveryPendingCheckBox.click();
    }

    async EnterAtFromIncidentNumber(IncidentYearFrom: string, IncidentNoFrom: string): Promise<void> {
        await this.uIIncidentFromYearEdit.fill(IncidentYearFrom);
        await this.uIIncidentFromNoEdit.fill(IncidentNoFrom);
    }

    async EnterAtToIncidentNumber(IncidentYearTo: string, IncidentNoTo: string): Promise<void> {
        await this.uIIncidentToYearEdit.fill(IncidentYearTo);
        await this.uIIncidentToNoEdit.fill(IncidentNoTo);
    }

    async SelectAtDateType(DateType: string): Promise<void> {
        await this.uIDateTypeDropdown.selectOption({ label: DateType });
    }

    async EnterAtFromDateTime(FromDate: string): Promise<void> {
        await this.uIFromDateEdit.fill(FromDate);
        await this.uIFromTimeEdit.fill("0001");
    }

    async EnterCurrentDateASFromDateTime(): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        await this.uIFromDateEdit.clear();
        await this.uIFromDateEdit.fill(currentDate);
        await this.uIFromTimeEdit.clear();
        await this.uIFromTimeEdit.fill("0001");
    }

    async EnterAtToDateTime(): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        await this.uIToDateEdit.fill(currentDate);
        await this.uIToTimeEdit.fill("2300");
    }

    async ClickDateResetButton(): Promise<void> {
        await this.uIDateResetIcon.click();
    }

    async EnterAtLocation(Building: string, Floor: string, Pod: string, Cell: string): Promise<void> {
        await this.uIBuildingDropdown.selectOption({ label: Building });
        await this.uIFloorLookupEdit.fill(Floor);
        await this.uIpodLookupEdit.fill(Pod);
        await this.uICellLookupEdit.fill(Cell);
    }

    async EnterAtOffense(Offence: string): Promise<void> {
        await this.uIOffenseEdit.fill(Offence);
    }

    async EnterAtOffenseType(OffenceType: string): Promise<void> {
        await this.uIOffenseTypeDropdown.selectOption({ label: OffenceType });
    }

    async EnterMajorOffenseType(): Promise<void> {
        await this.uIOffenseTypeDropdown.selectOption({ label: "Major" });
    }

    async EnterMinorOffenseType(): Promise<void> {
        await this.uIOffenseTypeDropdown.selectOption({ label: "Minor" });
    }

    async EnterAtDisposition(Dispostion: string): Promise<void> {
        await this.uIDispositionEdit.fill(Dispostion);
    }

    async SelectAtSanction(Sanction: string): Promise<void> {
        await this.uISanctionDropdown.selectOption({ label: Sanction });
    }

    async EnterReportedBy(ReportedBy: string): Promise<void> {
        await this.uIReportedByEdit.fill(ReportedBy);
    }

    async EnterSupervisor(Supervisor: string): Promise<void> {
        await this.uISupervisorEdit.fill(Supervisor);
    }

    async SelectAtStatus(Status: string): Promise<void> {
        await this.uIStatusDropdown.selectOption({ label: Status });
    }

    async EnterAtInmateName(LastName: string): Promise<void> {
        await this.uILastNameEdit.fill(LastName);
        await this.uILastNameEdit.press('Tab');
        await this.uIFirstNameEdit.press('Tab');
    }

    async EnterAtSPN(NameType: string, SPNNo: string): Promise<void> {
        await this.uISPNNoEdit.fill(SPNNo);
        await this.uISPNNoEdit.press('Tab');
    }

    async EnterSPN(): Promise<void> {
        await this.uISPNNoEdit.fill("252");
        await this.uISPNNoEdit.press('Tab');
    }

    async EnterAtName(NameType: string, NameTypes: string, NameID: string): Promise<void> {
        await this.uINameTypeDropdown.selectOption({ label: NameType });
        await this.uINameTypeEdit.fill(NameTypes);
        await this.uINameIDEdit.fill(NameID);
        await this.uINameIDEdit.press('Tab');
    }

    async EnterAtEmployee(NameType: string, PFCode: string): Promise<void> {
        await this.uINameTypeDropdown.selectOption({ label: NameType });
        await this.uIEmployeeCodeEdit.fill(PFCode);
        await this.uIEmployeeCodeEdit.press('Tab');
    }

    async SelectWitness(): Promise<void> {
        await this.uIWitnessCheckBox.click();
    }

    async ClickAddNewButton(): Promise<void> {
        await this.uIAddNewLink.click();
    }

    async ClickSearchLink(): Promise<void> {
        await this.uISearchLink.click();
    }

    async ClickResetLink(): Promise<void> {
        await this.uIResetLink.click();
    }

    async ClickBackLink(): Promise<void> {
        await this.uIBackLink.click();
    }

    async SelectIncidentRecord(): Promise<void> {
        await new GridHelpers(this.page).selectRowByCellText(this.uIIncidentresultTable, '');
    }

    async VerifySubAgencyFieldEnabled(): Promise<void> {
        expect(await this.uISubAgencyDrodown.isEnabled()).toBeTruthy();
    }

    async VerifySubAgencyFieldDisabled(): Promise<void> {
        expect(await this.uISubAgencyDrodown.isEnabled()).toBeFalsy();
    }

    async SelectAtSubAgency(SubAgency: string): Promise<void> {
        await this.uISubAgencyDrodown.selectOption({ label: SubAgency });
        await this.uISubAgencyDrodown.press('Tab');
    }

    async VerifySubAgency(LoggedinSubAgnecy: string): Promise<void> {
        const actual = await new ElementHelpers(this.page).getDropDownSelectedItem(this.uISubAgencyDrodown);
        expect(actual).toEqual(LoggedinSubAgnecy);
    }

    async SelectMHOCRecoerds(): Promise<void> {
        await this.uIIncidentresultTable.locator('td', { hasText: "MHOC" }).click();
    }

    async SelectMCJRecoerds(): Promise<void> {
        await this.uIIncidentresultTable.locator('td', { hasText: "MCJ" }).click();
    }

    async verifyStatusInGrid(Status: string): Promise<void> {
        const text = await new GridHelpers(this.page).getGridCellInnerText(this.uIIncidentresultTable, 'Status', 0);
        expect(text).toEqual(Status);
    }

    async SelectAtSPNInGrid(SPN: string): Promise<void> {
        await this.uIIncidentresultTable.locator('td', { hasText: SPN }).click();
    }

    async SelectAtNameInGrid(Name: string): Promise<void> {
        await this.uIIncidentresultTable.locator('td', { hasText: Name }).click();
    }

    async verifyAtReportedByInGrid(ReportedBy: string): Promise<void> {
        const cell = await new GridHelpers(this.page).getGridCell(this.uIIncidentresultTable, ReportedBy, 'Reported By');
        expect(await cell.innerText()).toEqual(ReportedBy);
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetLink.click();
    }

    async selectAtIncidentInGrid(i: number): Promise<void> {
        const IncidentNo = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'IncidentNo' + i);
        await new GridHelpers(this.page).selectRowByCellText(this.uIIncidentresultTable, IncidentNo);
    }

    async verifyAt1040AcknowledgePopup(): Promise<void> {
        await new AcknowledgePage(this.page).okWithScreenOrWindowPopup('(1040) Number Does Not Exist');
    }

    async enterAtFromIncidentNumber(i: number): Promise<void> {
        const IncidentYearFrom = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'IncidentYearFrom' + i);
        const IncidentNoFrom = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'IncidentNoFrom' + i);
        await this.uIIncidentFromYearEdit.fill(IncidentYearFrom);
        await this.uIIncidentFromNoEdit.fill(IncidentNoFrom);
    }

    async enterAtToIncidentNumber(i: number): Promise<void> {
        const IncidentYearTo = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'IncidentYearTo' + i);
        const IncidentNoTo = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'IncidentNoTo' + i);
        await this.uIIncidentToYearEdit.fill(IncidentYearTo);
        await this.uIIncidentToNoEdit.fill(IncidentNoTo);
    }

    async enterFromAndToAtIncidentNoUsingJSONFile(testCaseId: string): Promise<void> {
        const incidentYear = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'IncidentYear');
        const incidentNumber = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'IncidentNumber');
        await this.uIIncidentFromYearEdit.fill(incidentYear);
        await this.uIIncidentFromNoEdit.fill(incidentNumber);
        await this.uIIncidentToYearEdit.fill(incidentYear);
        await this.uIIncidentToNoEdit.fill(incidentNumber);
        await this.uIIncidentToNoEdit.press('Tab');
    }

    async verifyAtIncidentInGrid(jsonIndex: number): Promise<void> {
        const IncidentNo = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'IncidentNo' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIIncidentresultTable, IncidentNo, 'Incident#');
        expect(await cell.innerText()).toContain(IncidentNo);
    }

    async selectAtDateType(jsonIndex: number): Promise<void> {
        const DateType = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'DateType' + jsonIndex);
        await this.uIDateTypeDropdown.selectOption({ label: DateType });
    }

    async enterAtFromDateTime(FromDate: string, FromTime: string): Promise<void> {
        await this.uIFromDateEdit.fill(FromDate);
        await this.uIFromTimeEdit.fill(FromTime);
    }

    async enterAtToDateTime(ToTime: string): Promise<void> {
        await this.uIToDateEdit.fill(DateHelpers.getCurrentDate());
        await this.uIToTimeEdit.fill(ToTime);
    }

    async verifyAtHearingDateInGrid(jsonIndex: number): Promise<void> {
        const hearingDate = await new GridHelpers(this.page).getGridCellInnerText(this.uIIncidentresultTable, 'Hearing Date', 0);
        expect(hearingDate).toBeTruthy();
    }

    async verifyAtIncidentDateInGrid(jsonIndex: number): Promise<void> {
        const incidentDate = await new GridHelpers(this.page).getGridCellInnerText(this.uIIncidentresultTable, 'Incident Date', 0);
        expect(incidentDate).toBeTruthy();
    }

    async selectAtBuilding(jsonIndex: number): Promise<void> {
        const Building = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Building' + jsonIndex);
        await this.uIBuildingDropdown.selectOption({ label: Building });
        await this.uIBuildingDropdown.press('Tab');
    }

    async selectRandomIncidentInGrid(): Promise<void> {
        await new GridHelpers(this.page).selectRandomRow(this.uIIncidentresultTable);
    }

    async selectAtFloor(jsonIndex: number): Promise<void> {
        const Floor = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Floor' + jsonIndex);
        await this.uIFloorDropdownArrow.click();
        await this.uIFloorDropdown.selectOption({ label: Floor });
        await this.uIFloorDropdownArrow.click();
    }

    async selectAtPod(jsonIndex: number): Promise<void> {
        const Pod = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Pod' + jsonIndex);
        await this.uIPodDropdownArrow.click();
        await this.uIPodDropdown.selectOption({ label: Pod });
        await this.uIPodDropdownArrow.click();
    }

    async selectAtCell(jsonIndex: number): Promise<void> {
        const Cell = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Cell' + jsonIndex);
        await this.uICellDropdownArrow.click();
        await this.uICellDropdown.selectOption({ label: Cell });
        await this.uICellDropdownArrow.click();
    }

    async selectAtNameType(jsonIndex: number): Promise<void> {
        const NameType = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'NameType' + jsonIndex);
        await this.uINameTypeDropdown.selectOption({ label: NameType });
    }

    async enterAtFirstName(jsonIndex: number): Promise<void> {
        const FirstName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'FirstName' + jsonIndex);
        await this.uIFirstNameForNameEdit.fill(FirstName);
        await this.uIFirstNameForNameEdit.press('Tab');
    }

    async verifyAtInmateNameInGrid(jsonIndex: number): Promise<void> {
        const InmateName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'InmateName' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIIncidentresultTable, InmateName, 'Inmate Name');
        expect(await cell.innerText(), "Inmate Name is not same as expected -->").toEqual(InmateName);
    }

    async enterAtLastName(jsonIndex: number): Promise<void> {
        const LastName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'LastName' + jsonIndex);
        await this.uILastNameForNameEdit.fill(LastName);
        await this.uILastNameForNameEdit.press('Tab');
    }

    async enterAtSPN(jsonIndex: number): Promise<void> {
        const SPN = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'SPN' + jsonIndex);
        await this.uISPNNoEdit.fill(SPN);
        await this.uISPNNoEdit.press('Tab');
    }

    async verifyAtSPNInGrid(jsonIndex: number): Promise<void> {
        const SPN = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'SPN' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIIncidentresultTable, SPN, 'SPN');
        expect(await cell.innerText(), "SPN is not same as expected -->").toEqual(SPN);
    }

    async clickWitness(): Promise<void> {
        await this.uIWitnessCheckBox.click();
    }

    async enterAtOffense(Offense: string): Promise<void> {
        await this.uIOffenseEdit.fill(Offense);
    }

    async enterAtDisposition(Dispostion: string): Promise<void> {
        await this.uIDispositionEdit.fill(Dispostion);
        await this.uIDispositionEdit.press('Tab');
    }

    async enterAtReportedBy(ReportedBy: string): Promise<void> {
        await this.uIReportedByEdit.fill(ReportedBy);
        await this.uIReportedByEdit.press('Tab');
    }

    async verifyAtIncidentNoRangeInGrid(IncidentNumber: string, IncidentYear: string): Promise<void> {
        await expect(this.uIIncidentresultTable).toContainText(IncidentYear);
    }

    async verifyAtRowCountInGrid(jsonIndex: number): Promise<void> {
        const count = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'RowCount' + jsonIndex);
        const rowCount = await new GridHelpers(this.page).getRowCount(this.uIIncidentresultTable);
        expect(rowCount).toEqual(parseInt(count));
    }

    async enterAtSupervisor(Supervisor: string): Promise<void> {
        await this.uISupervisorEdit.fill(Supervisor);
    }

    async selectAtOffenseType(jsonIndex: number): Promise<void> {
        await this.uIOffenseTypeDropdown.selectOption({ label: OffenseType });
    }

    async selectAtSanction(jsonIndex: number): Promise<void> {
        await this.uISanctionDropdownArrow.click();
        await this.uISanctionDropdown.selectOption({ label: Sanction });
        await this.uISanctionDropdownArrow.click();
    }

    async selectAtStatus(Status: string): Promise<void> {
        await this.uIStatusDropdown.selectOption({ label: Status });
    }

    async clickAdvancedTab(): Promise<void> {
        await this.uIAdvancedTab.click();
    }

}

export class AdvancedTabPage {
    readonly page: Page;
    readonly uIInmateTypeDropdown: Locator;
    readonly uIInmateTypeDropdownArrow: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIInmateTypeDropdown = page.locator('#tabIncidentSrch_tmpl1_usrIncidentInqAdvance1_cddSelectName_Input');
        this.uIInmateTypeDropdownArrow = page.locator('#tabIncidentSrch_tmpl1_usrIncidentInqAdvance1_cddSelectName_Arrow');
    }

    async selectAtInmateType(jsonIndex: number): Promise<void> {
        const InmateType = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'InmateType' + jsonIndex);
        await this.uIInmateTypeDropdownArrow.click();
        await this.uIInmateTypeDropdown.selectOption({ label: InmateType });
        await this.uIInmateTypeDropdownArrow.click();
    }

    async enterAtDetailsReportOfficer(jsonIndex: number): Promise<void> {
        const DetailsReportOfficer = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'DetailsReportOfficer' + jsonIndex);
        await this.uIInmateTypeDropdownArrow.fill(DetailsReportOfficer);
    }

}

export class ClassificationEntryPage {
    readonly page: Page;
    readonly uISPNNOEdit: Locator;
    readonly uIClassDateEdit: Locator;
    readonly uIClassTimeEdit: Locator;
    readonly uIOfficerEdit: Locator;
    readonly uIReasonDropdown: Locator;
    readonly uIClassifyButton: Locator;
    readonly uIOverridrCheckBox: Locator;
    readonly uIClassificationDropdown: Locator;
    readonly uIRecommendedDropdown: Locator;
    readonly uIApprovedCheckBox: Locator;
    readonly uINotApprovedCheckBox: Locator;
    readonly uISupervisorEdit: Locator;
    readonly uISupervisorDateEdit: Locator;
    readonly uISupervisorTimeEdit: Locator;
    readonly uINotesEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIGridTable: Locator;
    readonly uIScheduleButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIOfficerLookUpIcon: Locator;
    readonly uIMsgClassificationQuestions: Locator;
    readonly uIYesButton: Locator;
    readonly uIStatusBar: Locator;
    readonly uIScoreColumn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISPNNOEdit = page.locator('#txtSPN');
        this.uIClassDateEdit = page.locator('#dttmClass_Date_KPIDttmCtrl');
        this.uIClassTimeEdit = page.locator("//table[@id='dttmClass_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIOfficerEdit = page.locator('#lupClsPFNbr_CodeValue');
        this.uIReasonDropdown = page.locator('#cddClssReason_DropDown');
        this.uIClassifyButton = page.locator('#cmdClassify');
        this.uIOverridrCheckBox = page.locator('#chkClsOveride');
        this.uIClassificationDropdown = page.locator('#cddClass_DropDown');
        this.uIRecommendedDropdown = page.locator('#cddRecmClass_DropDown');
        this.uIApprovedCheckBox = page.locator('#rdoApprove');
        this.uINotApprovedCheckBox = page.locator('#rdoDeny');
        this.uISupervisorEdit = page.locator('#lupAproOfficer_CodeValue');
        this.uISupervisorDateEdit = page.locator('#dttmApr_Date_KPIDttmCtrl');
        this.uISupervisorTimeEdit = page.locator("//table[@id='dttmApr_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uINotesEdit = page.locator('#txtRecNotes');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIClearButton = page.locator('#cmdClear');
        this.uIGridTable = page.locator('#grdClassify');
        this.uIScheduleButton = page.locator('#cmdSchedule');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIOfficerLookUpIcon = page.locator('#lupClsPFNbr_imgBtn');
        this.uIMsgClassificationQuestions = page.locator("//div[@class='modal-body']");
        this.uIYesButton = page.locator("//button[contains(text(),'Yes')]");
        this.uIStatusBar = page.locator("//td[@class='statusBar']//b");
        this.uIScoreColumn = page.locator('#txtScore');
    }

    async EnterAtSPNNo(SPNNo: string): Promise<void> {
        await this.uISPNNOEdit.fill(SPNNo);
        await this.uISPNNOEdit.press('Tab');
    }

    async EnterDateTime(): Promise<void> {
        await this.uIClassDateEdit.press('Tab');
        await this.uIClassTimeEdit.press('Tab');
    }

    async EnterOfficer(): Promise<void> {
        await this.uIOfficerEdit.press('Tab');
    }

    async SelectAtReason(Reason: string): Promise<void> {
        await this.uIReasonDropdown.selectOption({ label: Reason });
        await this.uIReasonDropdown.press('Tab');
    }

    async ClickClassifyButton(): Promise<void> {
        await this.uIClassifyButton.click();
    }

    async SelectAtClassification(Classification: string): Promise<void> {
        await this.uIClassificationDropdown.selectOption({ label: Classification });
    }

    async clickOverrideCheckbox(): Promise<void> {
        await this.uIOverridrCheckBox.click();
    }

    async SelectAtRecommended(Recommended: string): Promise<void> {
        await this.uIRecommendedDropdown.selectOption({ label: Recommended });
    }

    async SelectRecApproved(): Promise<void> {
        await this.uIApprovedCheckBox.click();
    }

    async SelectRecNotApproved(): Promise<void> {
        await this.uINotApprovedCheckBox.click();
    }

    async EnterSupervisor(): Promise<void> {
        await this.uISupervisorEdit.press('Tab');
    }

    async EnterRecDateTime(): Promise<void> {
        await this.uISupervisorDateEdit.press('Tab');
        await this.uISupervisorTimeEdit.press('Tab');
    }

    async EnterAtNotes(Notes: string): Promise<void> {
        await this.uINotesEdit.fill(Notes);
    }

    async SelectClassRowFromGrid(): Promise<void> {
        await this.uIGridTable.locator('td', { hasText: "Initial classification" }).click();
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async VerifySKipClassificationmsg(): Promise<void> {
        await new ConfirmPage(this.page).uIModalFooterYesButton.click();
    }

    async ClickClearButton(): Promise<void> {
        await this.uIClearButton.click();
    }

    async ClickScheduleButton(): Promise<void> {
        await this.uIScheduleButton.click();
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async ClickSaveNCloseButton(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async ClickPrintButton(): Promise<void> {
        await this.uIPrintButton.click();
    }

    async ClickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async CloseClassificationEntry(): Promise<void> {
        await this.page.close();
    }

    async VerifySaveButtondisabled(): Promise<void> {
        await expect(this.uISaveButton).toBeDisabled();
        await expect(this.uISaveNCloseButton).toBeDisabled();
    }

    async VerifySaveButtonEnabled(): Promise<void> {
        await expect(this.uISaveButton).toBeEnabled();
        await expect(this.uISaveNCloseButton).toBeEnabled();
    }

    async clickOfficerLookUpIcon(): Promise<void> {
        await this.uIOfficerLookUpIcon.click();
    }

    async selectReason(): Promise<void> {
        await this.uIReasonDropdown.selectOption({ index: 1 });
    }

    async selectClassification(): Promise<void> {
        await this.uIClassificationDropdown.selectOption({ index: 1 });
    }

    async verifyMsgClassificationQuestions(): Promise<void> {
        expect(await this.uIMsgClassificationQuestions.innerText()).toEqual("(30043)Are you sure you want to skip the classification questions?");
        await this.uIYesButton.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
    }

    async VerifyUpdateSuccessfulStatusMessage(): Promise<void> {
        expect(await this.uIStatusBar.innerText()).toEqual("1003 - Update Successful");
    }

    async verifyScoreColumnIsDisabled(): Promise<void> {
        const value = await this.uIScoreColumn.getAttribute('class');
        expect(value).toEqual("textboxInactive");
    }

    async verifyScoreColumnIsEnabled(): Promise<void> {
        await expect(this.uIScoreColumn).toBeEnabled();
    }

    async getClassficationSelectedItem(RatingsClassfication: string): Promise<void> {
        const dropDownSelectedItem = await ElementHelpers.getDropDownSelectedItem(this.uIClassificationDropdown);
        expect(dropDownSelectedItem).toEqual(RatingsClassfication);
    }

    async verifyscoreInscoreFeild(QAScore: string): Promise<void> {
        const Score = await this.uIScoreColumn.inputValue();
        expect(Score).toEqual(QAScore);
    }

    async verifyAdditionSuccessFullMessgae(): Promise<void> {
        expect(await this.uIStatusBar.innerText()).toEqual("1002 - Addition Successful");
    }

    async verifyScoreWithReasonInGrid(): Promise<void> {
        const Score = await this.uIScoreColumn.inputValue();
        expect(Score).toBeTruthy();
    }

    async EnterAtOfficer(Officer: string): Promise<void> {
        await this.uIOfficerEdit.fill(Officer);
        await this.uIOfficerEdit.press('Tab');
    }

    async verifyAtClassficationInGrid(Classification: string): Promise<void> {
        expect(Classfication).toEqual(Classification);
    }

    async clickPopUpYesButton(): Promise<void> {
        await this.uIYesButton.click();
    }

}

export class ClassificationSearchPage {
    readonly page: Page;
    readonly uISubAgencyDrodown: Locator;
    readonly uIOverDueOnlyCheckBox: Locator;
    readonly uIInculdeClosedBookingsCheckBox: Locator;
    readonly uIDateTypeDropdown: Locator;
    readonly uIFromDateEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIClassificationReasonDropdown: Locator;
    readonly uIClassificationDropdown: Locator;
    readonly uICMSBookingYearEdit: Locator;
    readonly uICMSBookingNoEdit: Locator;
    readonly uILastClassificationEdit: Locator;
    readonly uISPNNOEdit: Locator;
    readonly uIClassificationOfficerEdit: Locator;
    readonly uISearchLink: Locator;
    readonly uIAddNewLink: Locator;
    readonly uIResetLink: Locator;
    readonly uIBackLink: Locator;
    readonly uIClassSearchResultTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISubAgencyDrodown = page.locator('#tabClassSrch_tmpl0_UsrClassSrchBasic1_cddSubAgency_DropDown');
        this.uIOverDueOnlyCheckBox = page.locator('#tabClassSrch_tmpl0_UsrClassSrchBasic1_chkOverDue');
        this.uIInculdeClosedBookingsCheckBox = page.locator('#tabClassSrch_tmpl0_UsrClassSrchBasic1_ChkClosedBook');
        this.uIDateTypeDropdown = page.locator('#tabClassSrch_tmpl0_UsrClassSrchBasic1_cddDateType_DropDown');
        this.uIFromDateEdit = page.locator('#tabClassSrch_tmpl0_UsrClassSrchBasic1_dttmClsFrom_KPIDttmCtrl');
        this.uIToDateEdit = page.locator('#tabClassSrch_tmpl0_UsrClassSrchBasic1_dttmClsTo_KPIDttmCtrl');
        this.uIClassificationReasonDropdown = page.locator('#tabClassSrch_tmpl0_UsrClassSrchBasic1_cddClssReason_DropDown');
        this.uIClassificationDropdown = page.locator('#tabClassSrch_tmpl0_UsrClassSrchBasic1_cddClass_DropDown');
        this.uICMSBookingYearEdit = page.locator('#tabClassSrch_tmpl0_UsrClassSrchBasic1_NumBooking_Year');
        this.uICMSBookingNoEdit = page.locator('#tabClassSrch_tmpl0_UsrClassSrchBasic1_NumBooking_Number');
        this.uILastClassificationEdit = page.locator('#tabClassSrch_tmpl0_UsrClassSrchBasic1_txtdays');
        this.uISPNNOEdit = page.locator('#tabClassSrch_tmpl0_UsrClassSrchBasic1_NameCtrlSPIN_SPN');
        this.uIClassificationOfficerEdit = page.locator('#tabClassSrch_tmpl0_UsrClassSrchBasic1_lupPFNbr1_CodeValue');
        this.uISearchLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Search')]");
        this.uIAddNewLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Add New')]");
        this.uIResetLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Reset')]");
        this.uIBackLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Back')]");
        this.uIClassSearchResultTable = page.locator('#grdClassifySrch');
    }

    async SelectOverDueOnly(): Promise<void> {
        await this.uIOverDueOnlyCheckBox.click();
    }

    async SelectInculdeClosedBookings(): Promise<void> {
        await this.uIInculdeClosedBookingsCheckBox.click();
    }

    async SelecAtDateType(DateType: string): Promise<void> {
        await this.uIDateTypeDropdown.selectOption({ label: DateType });
    }

    async EnterAtFromDate(FromDate: string): Promise<void> {
        await this.uIFromDateEdit.click();
        await this.uIFromDateEdit.fill(FromDate);
    }

    async SelecAtClassificationReason(ClassificationReason: string): Promise<void> {
        await this.uIClassificationReasonDropdown.selectOption({ label: ClassificationReason });
    }

    async SelecAtClassification(Classification: string): Promise<void> {
        await this.uIClassificationDropdown.selectOption({ label: Classification });
    }

    async EnterAtBookingNo(CMSBookingYear: string, CMSBookingNo: string): Promise<void> {
        await this.uICMSBookingYearEdit.fill(CMSBookingYear);
        await this.uICMSBookingNoEdit.fill(CMSBookingNo);
    }

    async EnterAtDaysSinceLastClassification(DaysSinceLastClassification: string): Promise<void> {
        await this.uILastClassificationEdit.fill(DaysSinceLastClassification);
    }

    async EnterAtSPNNo(SPNNo: string): Promise<void> {
        await this.uISPNNOEdit.fill(SPNNo);
        await this.uISPNNOEdit.press('Tab');
    }

    async EnterAtSPNNo(i: number): Promise<void> {
        await this.uISPNNOEdit.fill(SPNNo);
        await this.uISPNNOEdit.press('Tab');
    }

    async EnterAtClassificationOfficer(): Promise<void> {
        await this.uIClassificationOfficerEdit.press('Tab');
    }

    async SelectClassificationRecord(): Promise<void> {
        await this.uIClassSearchResultTable.locator('td', { hasText: "252" }).click();
    }

    async ClickAddNewButton(): Promise<void> {
        await this.uIAddNewLink.click();
    }

    async ClickSearchLink(): Promise<void> {
        await this.uISearchLink.click();
    }

    async ClickResetLink(): Promise<void> {
        await this.uIResetLink.click();
    }

    async ClickBackLink(): Promise<void> {
        await this.uIBackLink.click();
    }

    async SelectAtSubAgency(SubAgency: string): Promise<void> {
        await this.uISubAgencyDrodown.selectOption({ label: SubAgency });
        await this.uISubAgencyDrodown.press('Tab');
    }

    async VerifySubAgency(LoggedinSubAgnecy: string): Promise<void> {
        const selectedItem = await ElementHelpers.getDropDownSelectedItem(this.uISubAgencyDrodown);
        expect(selectedItem).toEqual(LoggedinSubAgnecy);
    }

    async VerifySubAgencyFieldEnabled(): Promise<void> {
        await expect(this.uISubAgencyDrodown).toBeEnabled();
    }

    async VerifySubAgencyFieldDisabled(): Promise<void> {
        await expect(this.uISubAgencyDrodown).toBeDisabled();
    }

    async SelectMHOCRecoerds(): Promise<void> {
        await this.uIClassSearchResultTable.locator('td', { hasText: "MHOC" }).click();
    }

    async SelectMCJRecoerds(): Promise<void> {
        await this.uIClassSearchResultTable.locator('td', { hasText: "MCJ" }).click();
    }

    async EnterAtToDate(ToDate: string): Promise<void> {
        await this.uIToDateEdit.click();
        await this.uIToDateEdit.fill(ToDate);
    }

    async verifyAtCMSBookingInGrid(SPNNo: string, CMSBookingNo: string): Promise<void> {
        const cell = await new GridHelpers(this.page).getGridCell(this.uIClassSearchResultTable, SPNNo, 'CMS Booking');
        const actual = await cell.innerText();
        expect(actual).toEqual(CMSBookingNo);
    }

    async verify1011NoRecordFoundAcknowledge(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('1011 - No Record Found');
    }

    async enterFromDateAsCurrentDate(): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        await this.uIFromDateEdit.fill(currentDate);
    }

    async enterToDateAsCurrentDate(): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        await this.uIToDateEdit.fill(currentDate);
    }

    async verifyAtClassificationInGrid(Classification: string): Promise<void> {
        await expect(this.uIClassSearchResultTable).toContainText(Classification);
    }

}

export class OutOfServiceCellEntryPage {
    readonly page: Page;
    readonly uIOutofServiceReasonDropdown: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIPFCodeEdit: Locator;
    readonly uICommentsEdit: Locator;
    readonly uIBuildingDropdown: Locator;
    readonly uIFloorEdit: Locator;
    readonly uIPodEdit: Locator;
    readonly uICellEdit: Locator;
    readonly uIBedEdit: Locator;
    readonly uIClearedForUseCheckBox: Locator;
    readonly uIClearedDateEdit: Locator;
    readonly uIClearedTimeEdit: Locator;
    readonly uIClearedPFCodeEdit: Locator;
    readonly uIClearedCommentsEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNcloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIPFLookUP: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIYesButton: Locator;
    readonly uIClearedPFLookUpIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIOutofServiceReasonDropdown = page.locator('#cddReason_DropDown');
        this.uIDateEdit = page.locator('#dttmReason_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='dttmReason_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIPFCodeEdit = page.locator('#lupReasonPFNbr_CodeValue');
        this.uICommentsEdit = page.locator('#txtReasonComments');
        this.uIBuildingDropdown = page.locator('#cddBuilding_DropDown');
        this.uIFloorEdit = page.locator('#lupFloor_CodeValue');
        this.uIPodEdit = page.locator('#lupPod_CodeValue');
        this.uICellEdit = page.locator('#lupCell_CodeValue');
        this.uIBedEdit = page.locator('#lupBed_CodeValue');
        this.uIClearedForUseCheckBox = page.locator('#chkCleared');
        this.uIClearedDateEdit = page.locator('#dttmCleared_Date_KPIDttmCtrl');
        this.uIClearedTimeEdit = page.locator("//table[@id='dttmCleared_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIClearedPFCodeEdit = page.locator('#lupClearedPFNbr_CodeValue');
        this.uIClearedCommentsEdit = page.locator('#txtClearedComments');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNcloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIPFLookUP = page.locator('#lupReasonPFNbr_imgBtn');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class='statusBar']//b");
        this.uIYesButton = page.locator("//button[contains(text(),'Yes')]");
        this.uIClearedPFLookUpIcon = page.locator('#lupClearedPFNbr_imgBtn');
    }

    async SelectAtOutOfSearviceReason(OutOfServiceReason: string): Promise<void> {
        await this.uIOutofServiceReasonDropdown.selectOption({ label: OutOfServiceReason });
    }

    async EnterDateTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async EnterPFNo(): Promise<void> {
        await this.uIPFCodeEdit.press('Tab');
    }

    async EnterAtComments(Comments: string): Promise<void> {
        await this.uICommentsEdit.fill(Comments);
    }

    async EnterAtBuilding(Building: string): Promise<void> {
        await this.uIBuildingDropdown.selectOption({ label: Building });
    }

    async EnterAtFloor(Floor: string): Promise<void> {
        await this.uIFloorEdit.fill(Floor);
    }

    async EnterAtPOD(Pod: string): Promise<void> {
        await this.uIPodEdit.fill(Pod);
    }

    async EnterAtCell(Cell: string): Promise<void> {
        await this.uICellEdit.fill(Cell);
    }

    async EnterAtBed(Bed: string): Promise<void> {
        await this.uIBedEdit.fill(Bed);
    }

    async SelectClearedForUseCheckbox(): Promise<void> {
        await this.uIClearedForUseCheckBox.click();
    }

    async EnterClearedDateTime(): Promise<void> {
        await this.uIClearedDateEdit.press('Tab');
        await this.uIClearedTimeEdit.press('Tab');
    }

    async EnterClearedPFNo(): Promise<void> {
        await this.uIClearedPFCodeEdit.press('Tab');
    }

    async EnterAtClearedComments(Comments: string): Promise<void> {
        await this.uIClearedCommentsEdit.fill(Comments);
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async ClickSaveNCloseButton(): Promise<void> {
        await this.uISaveNcloseButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async ClickPrintButton(): Promise<void> {
        await this.uIPrintButton.click();
    }

    async ClickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async CloseOutofCellServiceEntry(): Promise<void> {
        await this.page.close();
    }

    async VerifySaveButtondisabled(): Promise<void> {
        await expect(this.uISaveButton).toBeDisabled();
        await expect(this.uISaveNcloseButton).toBeDisabled();
    }

    async VerifySaveButtonEnabled(): Promise<void> {
        await expect(this.uISaveButton).toBeEnabled();
        await expect(this.uISaveNcloseButton).toBeEnabled();
    }

    async ClickPFLookUpIcon(): Promise<void> {
        await this.uIPFLookUP.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
    }

    async verifyAdditionSuccessFullMessage(): Promise<void> {
        expect(await this.uIBottomLeftSideStatusBar.innerText()).toEqual("1002 - Addition Successful");
    }

    async ClickClearedPFLookUpIcon(): Promise<void> {
        await this.uIClearedPFLookUpIcon.click();
    }

    async EnterAtComments1(Comments1: string): Promise<void> {
        await this.uIClearedCommentsEdit.fill(Comments1);
    }

    async verifyUpdateSuccessFullMessage(): Promise<void> {
        expect(await this.uIBottomLeftSideStatusBar.innerText()).toEqual("1003 - Update Successful");
    }

}

export class OutOfServiceCellSearchPage {
    readonly page: Page;
    readonly uISubAgencyDrodown: Locator;
    readonly uIFromDateEdit: Locator;
    readonly uIFromTimeEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIToTimeEdit: Locator;
    readonly uIDateResetbutton: Locator;
    readonly uIOutOfServiceReasonDropdown: Locator;
    readonly uIClearedOnlyCheckBox: Locator;
    readonly uIPFNoEdit: Locator;
    readonly uIBuildingDropdown: Locator;
    readonly uIFloorDropdown: Locator;
    readonly uIpodDropdown: Locator;
    readonly uICellEdit: Locator;
    readonly uIBedEdit: Locator;
    readonly uIOutofServiceSearchResultTable: Locator;
    readonly uISearchLink: Locator;
    readonly uIAddNewLink: Locator;
    readonly uIResetLink: Locator;
    readonly uIBackLink: Locator;
    readonly uIOutofServiceSearchResultTble: Locator;
    readonly uIRefreshLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISubAgencyDrodown = page.locator('#tabServiceSrch_tmpl0_usrOutofServCellInquiryBasic1_cddSubAgency_DropDown');
        this.uIFromDateEdit = page.locator('#tabServiceSrch_tmpl0_usrOutofServCellInquiryBasic1_dttmFrom_Date_KPIDttmCtrl');
        this.uIFromTimeEdit = page.locator("//table[@id='tabServiceSrch_tmpl0_usrOutofServCellInquiryBasic1_dttmFrom_Time'] //input");
        this.uIToDateEdit = page.locator('#tabServiceSrch_tmpl0_usrOutofServCellInquiryBasic1_dttmTo_Date_KPIDttmCtrl');
        this.uIToTimeEdit = page.locator("//table[@id='tabServiceSrch_tmpl0_usrOutofServCellInquiryBasic1_dttmTo_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIDateResetbutton = page.locator('#tabServiceSrch_tmpl0_usrOutofServCellInquiryBasic1_imgClear');
        this.uIOutOfServiceReasonDropdown = page.locator('#tabServiceSrch_tmpl0_usrOutofServCellInquiryBasic1_cddReason_DropDown');
        this.uIClearedOnlyCheckBox = page.locator('#tabServiceSrch_tmpl0_usrOutofServCellInquiryBasic1_chkClearedOnly');
        this.uIPFNoEdit = page.locator('#tabServiceSrch_tmpl0_usrOutofServCellInquiryBasic1_lupPFNbr_CodeValue');
        this.uIBuildingDropdown = page.locator('#tabServiceSrch_tmpl0_usrOutofServCellInquiryBasic1_cddBuilding_DropDown');
        this.uIFloorDropdown = page.locator('#tabServiceSrch_tmpl0_usrOutofServCellInquiryBasic1_lstFloor');
        this.uIpodDropdown = page.locator('#tabServiceSrch_tmpl0_usrOutofServCellInquiryBasic1_lstPod');
        this.uICellEdit = page.locator('#tabServiceSrch_tmpl0_usrOutofServCellInquiryBasic1_lupCell_CodeValue');
        this.uIBedEdit = page.locator('#tabServiceSrch_tmpl0_usrOutofServCellInquiryBasic1_lupBed_CodeValue');
        this.uIOutofServiceSearchResultTable = page.locator('#grdCellInquiry');
        this.uISearchLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Search')]");
        this.uIAddNewLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Add New')]");
        this.uIResetLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Reset')]");
        this.uIBackLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Back')]");
        this.uIOutofServiceSearchResultTble = page.locator("//div[@id='grdCellInquiry']");
        this.uIRefreshLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Refresh')]");
    }

    async EnterAtFromDateTime(FromDate: string, FromTime: string): Promise<void> {
        await this.uIFromDateEdit.fill(FromDate);
        await this.uIFromTimeEdit.fill(FromTime);
    }

    async EnterAtTODateTime(): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        const currentTime = DateHelpers.getCurrentTime();
        await this.uIToDateEdit.fill(currentDate);
        await this.uIToTimeEdit.fill(currentTime);
    }

    async EnterCurrentDate(): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        await this.uIFromDateEdit.fill(currentDate);
        await this.uIFromTimeEdit.fill(DateHelpers.getFutureTimeByHours(-8, 'HH:mm'));
        await this.uIToDateEdit.fill(currentDate);
        await this.uIToTimeEdit.fill(DateHelpers.getFutureTimeByHours(4, 'HH:mm'));
    }

    async ClickDateResetButton(): Promise<void> {
        await this.uIDateResetbutton.click();
    }

    async SelectOutOfSearviceReason(OutofServiceReason: string): Promise<void> {
        await this.uIOutOfServiceReasonDropdown.selectOption({ label: OutofServiceReason });
    }

    async SelectClearedOnly(): Promise<void> {
        await this.uIClearedOnlyCheckBox.click();
    }

    async EnterPFNo(PFNo: string): Promise<void> {
        await this.uIPFNoEdit.fill(PFNo);
        await this.uIPFNoEdit.press('Tab');
    }

    async EnterAtBuilding(Building: string): Promise<void> {
        await this.uIBuildingDropdown.selectOption({ label: Building });
    }

    async EnterAtFloor(Floor: string): Promise<void> {
        await this.uIFloorDropdown.click();
        await this.uIFloorDropdown.selectOption({ label: Floor });
    }

    async EnterAtPOD(POD: string): Promise<void> {
        await this.uIpodDropdown.selectOption({ label: POD });
    }

    async EnterAtCell(Cell: string): Promise<void> {
        await this.uICellEdit.fill(Cell);
    }

    async EnterAtBed(Bed: string): Promise<void> {
        await this.uIBedEdit.fill(Bed);
    }

    async SelectOutOfServiceCellrecords(): Promise<void> {
        await this.uIOutofServiceSearchResultTable.locator('td', { hasText: "1E003" }).click();
    }

    async ClickAddNewButton(): Promise<void> {
        await this.uIAddNewLink.click();
    }

    async ClickSearchLink(): Promise<void> {
        await this.uISearchLink.click();
    }

    async ClickResetLink(): Promise<void> {
        await this.uIResetLink.click();
    }

    async ClickBackLink(): Promise<void> {
        await this.uIBackLink.click();
    }

    async VerifySubAgencyFieldEnabled(): Promise<void> {
        await expect(this.uISubAgencyDrodown).toBeEnabled();
    }

    async VerifySubAgencyFieldDisabled(): Promise<void> {
        await expect(this.uISubAgencyDrodown).toBeDisabled();
    }

    async SelectAtSubAgency(SubAgency: string): Promise<void> {
        await this.uISubAgencyDrodown.selectOption({ label: SubAgency });
    }

    async VerifySubAgency(LoggedinSubAgnecy: string): Promise<void> {
        const actual = await new ElementHelpers(this.page).getDropDownSelectedItem(this.uISubAgencyDrodown);
        expect(actual).toEqual(LoggedinSubAgnecy);
    }

    async SelectAtOutOfSearviceReason(OutOfServiceReason: string): Promise<void> {
        await this.uIOutOfServiceReasonDropdown.selectOption({ label: OutOfServiceReason });
    }

    async SelecAtCellInGrid(Cell: string): Promise<void> {
        await this.uIOutofServiceSearchResultTble.locator('td', { hasText: Cell }).click();
    }

    async ClickRefreshLink(): Promise<void> {
        await this.uIRefreshLink.click();
    }

    async verifyClearedDateInGrid(): Promise<void> {
        const text = await new GridHelpers(this.page).getGridCellInnerText(this.uIOutofServiceSearchResultTble, 'Cleared Date/Time', 0);
        const currentDate = DateHelpers.getCurrentDate();
        expect(text).toContain(currentDate);
    }

}

export class ActivityLogEntryPage {
    readonly page: Page;
    readonly uIActivityDateEdit: Locator;
    readonly uIActivityTimeEdit: Locator;
    readonly uICategoryEdit: Locator;
    readonly uISubCategoryEdit: Locator;
    readonly uIActivityTypeEdit: Locator;
    readonly uIBuildingDropdown: Locator;
    readonly uIFloorLookupEdit: Locator;
    readonly uIpodLookupEdit: Locator;
    readonly uICellLookupEdit: Locator;
    readonly uIReportedByEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIrefreshButton: Locator;
    readonly uILocationDropDown: Locator;
    readonly uIActivityTypeLookUp: Locator;
    readonly uIReportedByLookUp: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIDeleteIcon: Locator;
    readonly uIEntryDateEdit: Locator;
    readonly uIEntryTimeEdit: Locator;
    readonly uIActivityTypeCodeEdit: Locator;
    readonly uIActivityTypeDescriptionEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIActivityDateEdit = page.locator('#dtmDateTime_Date_KPIDttmCtrl');
        this.uIActivityTimeEdit = page.locator("//table[@id='dtmDateTime_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uICategoryEdit = page.locator('#lupCategory_CodeValue');
        this.uISubCategoryEdit = page.locator('#lupSubCategory_CodeValue');
        this.uIActivityTypeEdit = page.locator('#lupActivityType_CodeValue');
        this.uIBuildingDropdown = page.locator('#cddBuilding_DropDown');
        this.uIFloorLookupEdit = page.locator('#lupFloor_CodeValue');
        this.uIpodLookupEdit = page.locator('#lupPod_CodeValue');
        this.uICellLookupEdit = page.locator('#lupCell_CodeValue');
        this.uIReportedByEdit = page.locator('#lupPFNbr_CodeValue');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIrefreshButton = page.locator('#cmdRefresh');
        this.uILocationDropDown = page.locator('#cddBuilding_DropDown');
        this.uIActivityTypeLookUp = page.locator('#lupActivityType_imgBtn');
        this.uIReportedByLookUp = page.locator('#lupPFNbr_imgBtn');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIDeleteIcon = page.locator('#cmdDelete');
        this.uIEntryDateEdit = page.locator('#dtmEntry_Date_KPIDttmCtrl');
        this.uIEntryTimeEdit = page.locator("//table[@id='dtmEntry_Time']//input");
        this.uIActivityTypeCodeEdit = page.locator('#lupActivityType_CodeValue');
        this.uIActivityTypeDescriptionEdit = page.locator('#lupActivityType_CodeDescription');
    }

    async EnterActivityDateTime(): Promise<void> {
        await this.uIActivityDateEdit.press('Tab');
        await this.uIActivityTimeEdit.press('Tab');
    }

    async EnterAtCategory(Category: string): Promise<void> {
        await this.uICategoryEdit.fill(Category);
        await this.uICategoryEdit.press('Tab');
    }

    async EnterAtSubCategory(SubCategory: string): Promise<void> {
        await this.uISubCategoryEdit.fill(SubCategory);
        await this.uISubCategoryEdit.press('Tab');
    }

    async EnterAtActivityType(ActivityType: string): Promise<void> {
        await this.uIActivityTypeEdit.fill(ActivityType);
        await this.uIActivityTypeEdit.press('Tab');
    }

    async EnterAtBuilding(Building: string): Promise<void> {
        await this.uIBuildingDropdown.selectOption({ label: Building });
    }

    async EnterAtFloor(Floor: string): Promise<void> {
        await this.uIFloorLookupEdit.fill(Floor);
        await this.uIFloorLookupEdit.press('Tab');
    }

    async EnterAtPOD(Pod: string): Promise<void> {
        await this.uIpodLookupEdit.fill(Pod);
        await this.uIpodLookupEdit.press('Tab');
    }

    async EnterAtCell(Cell: string): Promise<void> {
        await this.uICellLookupEdit.fill(Cell);
    }

    async EnterAtReportedByPF(ReportedByPF: string): Promise<void> {
        await this.uIReportedByEdit.fill(ReportedByPF);
        await this.uIReportedByEdit.press('Tab');
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async CloseScreen(): Promise<void> {
        await this.page.close();
    }

    async ClickPrintButton(): Promise<void> {
        await this.uIPrintButton.click();
    }

    async ClickRefreshButton(): Promise<void> {
        await this.uIrefreshButton.click();
    }

    async NavigateToLogEntryTab(): Promise<void> {
        await this.uINavigateToLogEntryTab.click();
    }

    async NavigateToNamesTab(): Promise<void> {
        await this.uINavigateToInmatesTab.click();
    }

    async NavigateToLogHistoryTab(): Promise<void> {
        await this.uINavigateToLogHistoryTab.click();
    }

}

export class ActivityLogEntryTabPage {
    readonly page: Page;
    readonly uINavigateToLogEntryTab: Locator;
    readonly uIEditorcontrol: Locator;
    readonly uISaveButton: Locator;
    readonly uIResetButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToLogEntryTab = page.locator("//div[@id='tabHuberActivity'] //span[contains(text(),'Log Entry')]");
        this.uIEditorcontrol = page.locator('#tabHuberActivity_tmpl0_usrHuberActivityDetails1_KPIRadHuberActivityDetails_contentIframe');
        this.uISaveButton = page.locator('#tabHuberActivity_tmpl0_usrHuberActivityDetails1_cmdSave');
        this.uIResetButton = page.locator('#tabHuberActivity_tmpl0_usrHuberActivityDetails1_cmdReset');
    }

    async EnterAtEditor(LogInfo: string): Promise<void> {
        await this.uIEditorcontrol.fill(LogInfo);
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
    }

    async ClickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async enterAtEditor(i: number): Promise<void> {
        const LogInfo = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'LogInfo' + i);
        await this.uIEditorcontrol.fill(LogInfo);
    }

}

export class ActivityNamesTabPage {
    readonly page: Page;
    readonly uINavigateToInmatesTab: Locator;
    readonly uISPNNoEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIDeleteButton: Locator;
    readonly uISaveButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIInmateRadioButton: Locator;
    readonly uIActivityNamesGrid: Locator;
    readonly uIEmployeeRadioButton: Locator;
    readonly uINamesCodeValueEdit: Locator;
    readonly uIOthersRadioButton: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameIDEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToInmatesTab = page.locator("//div[@id='tabHuberActivity'] //span[contains(text(),'Name(s)')]");
        this.uISPNNoEdit = page.locator('#tabHuberActivity_tmpl1_usrInmateDetails1_NamCtrlSPIN_SPN');
        this.uILastNameEdit = page.locator('#tabHuberActivity_tmpl1_usrInmateDetails1_NamCtrlSPIN_LastName');
        this.uIFirstNameEdit = page.locator('#tabHuberActivity_tmpl1_usrInmateDetails1_NamCtrlSPIN_FirstName');
        this.uIAddButton = page.locator('#tabHuberActivity_tmpl1_usrInmateDetails1_cmdAddInmate');
        this.uIClearButton = page.locator('#tabHuberActivity_tmpl1_usrInmateDetails1_cmdClearInmate');
        this.uIDeleteButton = page.locator("//div[@id='tabHuberActivity_tmpl1_usrInmateDetails1_grdInmateDetail'] //td[@class='Delete_Icon_Style']");
        this.uISaveButton = page.locator('#tabHuberActivity_tmpl1_usrInmateDetails1_cmdSave');
        this.uIResetButton = page.locator('#tabHuberActivity_tmpl1_usrInmateDetails1_cmdReset');
        this.uIInmateRadioButton = page.locator('#tabHuberActivity_tmpl1_usrInmateDetails1_rbtInmate');
        this.uIActivityNamesGrid = page.locator('#tabHuberActivity_tmpl1_usrInmateDetails1_grdInmateDetail');
        this.uIEmployeeRadioButton = page.locator('#tabHuberActivity_tmpl1_usrInmateDetails1_rbtEmployee');
        this.uINamesCodeValueEdit = page.locator('#tabHuberActivity_tmpl1_usrInmateDetails1_lupPF_CodeValue');
        this.uIOthersRadioButton = page.locator('#tabHuberActivity_tmpl1_usrInmateDetails1_rbtOthers');
        this.uINameTypeEdit = page.locator('#tabHuberActivity_tmpl1_usrInmateDetails1_NameOther_NameType');
        this.uINameIDEdit = page.locator('#tabHuberActivity_tmpl1_usrInmateDetails1_NameOther_NameTypeID');
    }

    async EnterAtInmates(SPNNo: string): Promise<void> {
        await this.uISPNNoEdit.fill(SPNNo);
        await this.uISPNNoEdit.press('Tab');
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async ClickClearButton(): Promise<void> {
        await this.uIClearButton.click();
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
    }

    async ClickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async verifyInmateRadioButtonIsChecked(): Promise<void> {
        expect(await this.uIInmateRadioButton.isChecked()).toBeTruthy();
    }

    async enterAtSPN(SPN: string): Promise<void> {
        await this.uISPNNoEdit.fill(SPN);
        await this.uISPNNoEdit.press('Tab');
    }

    async verifyAtTypeInGrid(Type: string): Promise<void> {
        const cell = await new GridHelpers(this.page).getGridCell(this.uIActivityNamesGrid, Type, 'Type');
        expect(await cell.innerText()).toEqual(Type);
    }

    async verifySPNIsBlank(): Promise<void> {
        expect(await this.uISPNNoEdit.getAttribute('value')).toEqual('');
    }

    async verifyAtLastName(LastName: string): Promise<void> {
        expect(await this.uILastNameEdit.getAttribute('value')).toEqual(LastName);
    }

    async verifyAtFirstName(FirstName: string): Promise<void> {
        expect(await this.uIFirstNameEdit.getAttribute('value')).toEqual(FirstName);
    }

    async verifyLastNameIsDisabled(): Promise<void> {
        const classAttr = await this.uILastNameEdit.getAttribute('class');
        expect(classAttr).toContain('textboxInactive');
    }

    async verifyFirstNameIsDisabled(): Promise<void> {
        const classAttr = await this.uIFirstNameEdit.getAttribute('class');
        expect(classAttr).toContain('textboxInactive');
    }

    async verifyAtTypeInGrid(i: number): Promise<void> {
        const Type = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Type' + i);
        const cell = await new GridHelpers(this.page).getGridCellByIndex(this.uIActivityNamesGrid, i, 'Type');
        expect(await cell.innerText(), "Type is not same as expected -->").toEqual(Type);
    }

    async verifyAtIDInGrid(i: number): Promise<void> {
        const ID = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'ID' + i);
        const cell = await new GridHelpers(this.page).getGridCellByIndex(this.uIActivityNamesGrid, i, 'ID');
        expect(await cell.innerText(), "ID is not same as expected -->").toEqual(ID);
    }

    async verifyAtNameInGrid(i: number): Promise<void> {
        const Name = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Name' + i);
        const cell = await new GridHelpers(this.page).getGridCellByIndex(this.uIActivityNamesGrid, i, 'Name');
        expect(await cell.innerText(), "Name is not same as expected -->").toEqual(Name);
    }

    async clickEmployeeRadioButton(): Promise<void> {
        await this.uIEmployeeRadioButton.click();
    }

    async enterAtNames(jsonIndex: number): Promise<void> {
        const NamesPF = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'NamesPF' + jsonIndex);
        await this.uINamesCodeValueEdit.fill(NamesPF);
        await this.uINamesCodeValueEdit.press('Tab');
    }

    async clickOthersRadioButton(): Promise<void> {
        await this.uIOthersRadioButton.click();
    }

    async enterAtNameID(jsonIndex: number): Promise<void> {
        const NameID = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'NameID' + jsonIndex);
        await this.uINameTypeEdit.fill(NameID.substring(0, 1));
        await this.uINameTypeEdit.press('Tab');
        await this.uINameIDEdit.fill(NameID.substring(2));
        await this.uINameIDEdit.press('Tab');
    }

}

export class ActivityLogHistoryTabPage {
    readonly page: Page;
    readonly uINavigateToLogHistoryTab: Locator;
    readonly uILogInfo: Locator;
    readonly uILogInfoQuick: Locator;
    readonly uILogHistoryTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToLogHistoryTab = page.locator("//span[contains(text(),'Log History')]");
        this.uILogInfo = page.locator("//div[@id='tabHuberActivity_tmpl2_usrHuberActivityLogHistory_div1']//div");
        this.uILogInfoQuick = page.locator("//table[@id='tabHuberActivity_tmpl2_usrHuberActivityLogHistory_grdComments']//div[contains(text(),'Start')]");
        this.uILogHistoryTable = page.locator("//table[@id='tabHuberActivity_tmpl2_usrHuberActivityLogHistory_grdComments']");
    }

    async VerifyLogInfoInGrid(LogInfo: string): Promise<void> {
        const text = await this.uILogInfo.innerText();
        expect(text).toEqual(LogInfo);
    }

    async VerifyLogInfoInGridQuick(StartDate: string, EndDate: string): Promise<void> {
        const text = await this.uILogInfoQuick.innerText();
        expect(text).toEqual("Start Date Time: " + StartDate + " End Date Time: " + EndDate);
    }

    async verifyCurrentDateInGrid(): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        await expect(this.uILogHistoryTable).toContainText(currentDate);
    }

    async verifyAtPFInGrid(jsonIndex: number): Promise<void> {
        const PF = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'PF' + jsonIndex);
        await expect(this.uILogHistoryTable).toContainText(PF);
    }

    async verifyAtTextInGrid(jsonIndex: number): Promise<void> {
        const text = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Text' + jsonIndex);
        await expect(this.uILogHistoryTable).toContainText(text);
    }

    async verifyRowCountInGrid(rowCounts: number): Promise<void> {
        const rows = this.uILogHistoryTable.locator("//tbody//tr//td[@class='Vertical']");
        await expect(rows).toHaveCount(rowCounts);
    }

    async verifyAtCommentsInGrid(jsonIndex: number): Promise<void> {
        const Comments = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Comments' + jsonIndex);
        await expect(this.uILogHistoryTable).toContainText(Comments);
    }

    async SelectLocation(): Promise<void> {
        const options = this.uILocationDropDown.locator('option');
        const count = await options.count();
        if (count > 1) {
            const randomIndex = Math.floor(Math.random() * (count - 1)) + 1;
            await this.uILocationDropDown.selectOption({ index: randomIndex });
        }
    }

    async ClickActivityTypeLookUpIcon(): Promise<void> {
        await this.uIActivityTypeLookUp.click();
    }

    async ClickReportedByLookUpIcon(): Promise<void> {
        await this.uIReportedByLookUp.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
    }

    async SelectAtLocation(Location: string): Promise<void> {
        await this.uILocationDropDown.selectOption({ label: Location });
    }

    async verifyAdditionSuccessfulAcknowledgeMsg(): Promise<void> {
        expect(await this.uIBottomLeftSideStatusBar.innerText()).toEqual("1002 - Addition Successful");
    }

    async verifyDeleteIconIsEnabled(): Promise<void> {
        await expect(this.uIDeleteIcon).toBeEnabled();
    }

    async verifyDeleteIconDisabled(): Promise<void> {
        await expect(this.uIDeleteIcon).toBeDisabled();
    }

    async verifyEntryDateIsDisabled(): Promise<void> {
        await expect(this.uIEntryDateEdit).toHaveClass(/textboxInactive/);
    }

    async verifyEntryTimeIsDisabled(): Promise<void> {
        await expect(this.uIEntryTimeEdit).toHaveClass(/textboxInactivedatetime/);
    }

    async taboutActivityDateAndTime(): Promise<void> {
        await this.uIActivityDateEdit.press('Tab');
        await this.uIActivityTimeEdit.press('Tab');
    }

    async verifyEntryDateAsCurrentDate(): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        await expect(this.uIEntryDateEdit).toHaveValue(currentDate);
    }

    async verifyEntryTimeAsCurrentTime(): Promise<void> {
        const currentTime = DateHelpers.getCurrentTime('HH:mm');
        const expectedTime = currentTime.substring(0, 4);
        const actualValue = await this.uIEntryTimeEdit.inputValue();
        expect(actualValue.substring(0, 4)).toEqual(expectedTime);
    }

    async verifyAtActivityType(i: number): Promise<void> {
        const ActivityType = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'ActivityType' + i);
        const activityType = await this.uIActivityTypeCodeEdit.getAttribute('value');
        expect(activityType, "Activity type is not same as expected -->").toEqual(ActivityType);
    }

    async verifyAtActivityDescription(i: number): Promise<void> {
        const ActivityTypeDescription = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'ActivityTypeDescription' + i);
        const activityDescription = await this.uIActivityTypeDescriptionEdit.getAttribute('value');
        expect(activityDescription, "Activity type description is not same as expected -->").toEqual(ActivityTypeDescription);
    }

}

export class ActivitySearchPage {
    readonly page: Page;
    readonly uISubAgencyDrodown: Locator;
    readonly uIPFNoEdit: Locator;
    readonly uISPNNoEdit: Locator;
    readonly uIActivityFromDateEdit: Locator;
    readonly uIActivityFromTimeEdit: Locator;
    readonly uIActivityToDateEdit: Locator;
    readonly uIActivityToTimeEdit: Locator;
    readonly uIDateResetbutton: Locator;
    readonly uICategoryEdit: Locator;
    readonly uISubCategoryEdit: Locator;
    readonly uIActivityTypeEdit: Locator;
    readonly uIBuildingDropdown: Locator;
    readonly uIFloorLookupEdit: Locator;
    readonly uIpodLookupEdit: Locator;
    readonly uICellLookupEdit: Locator;
    readonly uIActivityGridTable: Locator;
    readonly uISearchLink: Locator;
    readonly uIAddNewLink: Locator;
    readonly uIResetLink: Locator;
    readonly uIBackLink: Locator;
    readonly uIBottomBarNextButton: Locator;
    readonly uICategoryLookupIcon: Locator;
    readonly uISubCategoryLookupIcon: Locator;
    readonly uICategoryDescriptionEdit: Locator;
    readonly uISubCategoryDescriptionEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISubAgencyDrodown = page.locator('#tabSuspSrch_tmpl0_UsrHuberActivitySrch1_cddSubAgency_DropDown');
        this.uIPFNoEdit = page.locator('#tabSuspSrch_tmpl0_UsrHuberActivitySrch1_lupPFNbr_CodeValue');
        this.uISPNNoEdit = page.locator('#tabSuspSrch_tmpl0_UsrHuberActivitySrch1_NamCtrlSPIN_SPN');
        this.uIActivityFromDateEdit = page.locator('#tabSuspSrch_tmpl0_UsrHuberActivitySrch1_dttmActivityFrm_Date_KPIDttmCtrl');
        this.uIActivityFromTimeEdit = page.locator("//table[@id='tabSuspSrch_tmpl0_UsrHuberActivitySrch1_dttmActivityFrm_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIActivityToDateEdit = page.locator('#tabSuspSrch_tmpl0_UsrHuberActivitySrch1_dttmActivityTo_Date_KPIDttmCtrl');
        this.uIActivityToTimeEdit = page.locator("//table[@id='tabSuspSrch_tmpl0_UsrHuberActivitySrch1_dttmActivityTo_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIDateResetbutton = page.locator('#tabSuspSrch_tmpl0_UsrHuberActivitySrch1_imgClear');
        this.uICategoryEdit = page.locator('#tabSuspSrch_tmpl0_UsrHuberActivitySrch1_lupCategory_CodeValue');
        this.uISubCategoryEdit = page.locator('#tabSuspSrch_tmpl0_UsrHuberActivitySrch1_lupSubCategory_CodeValue');
        this.uIActivityTypeEdit = page.locator('#tabSuspSrch_tmpl0_UsrHuberActivitySrch1_lupActivityType_CodeValue');
        this.uIBuildingDropdown = page.locator('#tabSuspSrch_tmpl0_UsrHuberActivitySrch1_cddBuilding_DropDown');
        this.uIFloorLookupEdit = page.locator('#tabSuspSrch_tmpl0_UsrHuberActivitySrch1_lupFloor_CodeValue');
        this.uIpodLookupEdit = page.locator('#tabSuspSrch_tmpl0_UsrHuberActivitySrch1_lupPod_CodeValue');
        this.uICellLookupEdit = page.locator('#tabSuspSrch_tmpl0_UsrHuberActivitySrch1_lupCell_CodeValue');
        this.uIActivityGridTable = page.locator("//div[@id='grdActivitySrch']");
        this.uISearchLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Search')]");
        this.uIAddNewLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Add New')]");
        this.uIResetLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Reset')]");
        this.uIBackLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Back')]");
        this.uIBottomBarNextButton = page.locator('#grdActivitySrch_ctl00_lnkbtnNext');
        this.uICategoryLookupIcon = page.locator('#tabSuspSrch_tmpl0_UsrHuberActivitySrch1_lupCategory_imgBtn');
        this.uISubCategoryLookupIcon = page.locator('#tabSuspSrch_tmpl0_UsrHuberActivitySrch1_lupSubCategory_imgBtn');
        this.uICategoryDescriptionEdit = page.locator('#tabSuspSrch_tmpl0_UsrHuberActivitySrch1_lupCategory_CodeDescription');
        this.uISubCategoryDescriptionEdit = page.locator('#tabSuspSrch_tmpl0_UsrHuberActivitySrch1_lupSubCategory_CodeDescription');
    }

    async ClickF4(): Promise<void> {
        await this.page.keyboard.press('F4');
    }

    async EnterAtPFNo(PFCode: string): Promise<void> {
        await this.uIPFNoEdit.fill(PFCode);
    }

    async enterAtPFNo(i: number): Promise<void> {
        await this.uIPFNoEdit.fill(PFCode);
    }

    async EnterAtSPNNo(SPNNo: string): Promise<void> {
        await this.uISPNNoEdit.fill(SPNNo);
        await this.uISPNNoEdit.press('Tab');
    }

    async EnterFromDate(): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        await this.uIActivityFromDateEdit.fill(currentDate);
        await this.uIActivityFromDateEdit.press('Tab');
    }

    async enterAtToDateTime(): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        const currentTime = DateHelpers.getCurrentTime('HH:mm');
        await this.uIActivityToDateEdit.fill(currentDate);
        await this.uIActivityToTimeEdit.fill(currentTime);
    }

    async ClickDateResetButton(): Promise<void> {
        await this.uIDateResetbutton.click();
    }

    async EnterAtCategory(Category: string): Promise<void> {
        await this.uICategoryEdit.fill(Category);
        await this.uICategoryEdit.press('Tab');
        const kPICodedLookup = new KPICodedLookupPage(this.page);
        await kPICodedLookup.randomKPIHelpSelect();
    }

    async EnterAtSubCategory(SubCategory: string): Promise<void> {
        await this.uISubCategoryEdit.fill(SubCategory);
        await this.uISubCategoryEdit.press('Tab');
        const kPICodedLookup = new KPICodedLookupPage(this.page);
        await kPICodedLookup.randomKPIHelpSelect();
    }

    async EnterAtActivityType(ActivityType: string): Promise<void> {
        await this.uIActivityTypeEdit.fill(ActivityType);
        await this.uIActivityTypeEdit.press('Tab');
        const kPICodedLookup = new KPICodedLookupPage(this.page);
        await kPICodedLookup.randomKPIHelpSelect();
    }

    async EnterAtBuilding(Building: string): Promise<void> {
        await this.uIBuildingDropdown.selectOption({ label: Building });
    }

    async EnterAtFloor(Floor: string): Promise<void> {
        await this.uIFloorLookupEdit.fill(Floor);
        await this.uIFloorLookupEdit.press('Tab');
    }

    async EnterAtPOD(Pod: string): Promise<void> {
        await this.uIpodLookupEdit.fill(Pod);
        await this.uIpodLookupEdit.press('Tab');
    }

    async EnterAtCell(Cell: string): Promise<void> {
        await this.uICellLookupEdit.fill(Cell);
        await this.uICellLookupEdit.press('Tab');
    }

    async SelectActivityRecord(): Promise<void> {
        await this.uIActivityGridTable.locator('td', { hasText: "CELL CHK" }).click();
    }

    async ClickAddNewButton(): Promise<void> {
        await this.uIAddNewLink.click();
    }

    async ClickSearchLink(): Promise<void> {
        await this.uISearchLink.click();
    }

    async ClickResetLink(): Promise<void> {
        await this.uIResetLink.click();
    }

    async ClickBackLink(): Promise<void> {
        await this.uIBackLink.click();
    }

    async SelectAtSubAgency(SubAgency: string): Promise<void> {
        await this.uISubAgencyDrodown.selectOption({ label: SubAgency });
    }

    async VerifySubAgency(LoggedinSubAgnecy: string): Promise<void> {
        const selectedValue = await this.uISubAgencyDrodown.inputValue();
        expect(selectedValue).toContain(LoggedinSubAgnecy);
    }

    async verifyReportedPFInGrid(ReportedByPF: string): Promise<void> {
        await expect(this.uIActivityGridTable).toContainText(ReportedByPF);
    }

    async ClickPFInGrid(): Promise<void> {
        await this.uIActivityGridTable.locator('td', { hasText: "AUTO" }).click();
    }

    async verifyNextButtonIsDisplayedUnderGrid(): Promise<void> {
        await expect(this.uIBottomBarNextButton).toBeVisible();
    }

    async clickCategoryLookupIcon(): Promise<void> {
        await this.uICategoryLookupIcon.click();
    }

    async clickSubCategoryLookupIcon(): Promise<void> {
        await this.uISubCategoryLookupIcon.click();
    }

    async verifyAtCategoryCodeValueAndDescription(CategoryCode: string, CategoryDescription: string): Promise<void> {
        await expect(this.uICategoryEdit).toHaveAttribute('title', CategoryCode);
        await expect(this.uICategoryDescriptionEdit).toHaveAttribute('title', CategoryDescription);
    }

    async verifyAtSubCategoryCodeValueAndDescription(SubCategoryCode: string, SubCategoryDescription: string): Promise<void> {
        await expect(this.uISubCategoryEdit).toHaveAttribute('title', SubCategoryCode);
        await expect(this.uISubCategoryDescriptionEdit).toHaveAttribute('title', SubCategoryDescription);
    }

    async selectAtReportedPfInGrid(ReportedPF: string): Promise<void> {
        await this.uIActivityGridTable.locator('td', { hasText: ReportedPF }).click();
    }

    async selectAtReportedPfInGrid(i: number): Promise<void> {
        const ReportedPF = testData.facilityManagement("ReportedPF" + i);
        await this.uIActivityGridTable.locator('td', { hasText: ReportedPF }).click();
    }

    async selectGridRow(): Promise<void> {
        const rows = this.uIActivityGridTable.locator('//tbody/tr');
        const count = await rows.count();
        if (count > 0) {
            const randomIndex = Math.floor(Math.random() * count);
            await rows.nth(randomIndex).click();
        }
    }

}

export class ActivityQuickEntryPage {
    readonly page: Page;
    readonly uICategory1Button: Locator;
    readonly uISubCategory1Button: Locator;
    readonly uIActivityTypeButton: Locator;
    readonly uILocationDropdown: Locator;
    readonly uIFloorLookupEdit: Locator;
    readonly uIPodLookupEdit: Locator;
    readonly uICellLookupEdit: Locator;
    readonly uIHelpButton: Locator;
    readonly uINotesEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uINewButton: Locator;
    readonly uIGotoActivityDetail: Locator;
    readonly uIViewTodaysLogButton: Locator;
    readonly uIStartTimerButton: Locator;
    readonly uIEndTimerButton: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIStartDateEdit: Locator;
    readonly uIStartTimeEdit: Locator;
    readonly uIEndDateEdit: Locator;
    readonly uIEndTimeEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uICategory1Button = page.locator('#BtnCategory1');
        this.uISubCategory1Button = page.locator('#BtnSubCategory1');
        this.uIActivityTypeButton = page.locator('#BtnActivity1');
        this.uILocationDropdown = page.locator('#cddBuilding_DropDown');
        this.uIFloorLookupEdit = page.locator('#lupFloor_CodeValue');
        this.uIPodLookupEdit = page.locator('#lupPod_CodeValue');
        this.uICellLookupEdit = page.locator('#lupCell_CodeValue');
        this.uIHelpButton = page.locator('#BtnHelp');
        this.uINotesEdit = page.locator('#txtNotes');
        this.uISaveButton = page.locator('#BtnSave');
        this.uINewButton = page.locator('#BtnCancel');
        this.uIGotoActivityDetail = page.locator('#BtnGotoActDtl');
        this.uIViewTodaysLogButton = page.locator('#btnDailyLog');
        this.uIStartTimerButton = page.locator('#imgBtnTimer');
        this.uIEndTimerButton = page.locator("//input[@alt='Stop timer']");
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class='status']//b");
        this.uIStartDateEdit = page.locator('#dtmStartDTTM_Date_KPIDttmCtrl');
        this.uIStartTimeEdit = page.locator("(//input[@class='textboxdatetime igte_BlueThemeEditInContainer'])[1]");
        this.uIEndDateEdit = page.locator('#dtmEndDTTM_Date_KPIDttmCtrl');
        this.uIEndTimeEdit = page.locator("(//input[@class='textboxdatetime igte_BlueThemeEditInContainer'])[2]");
    }

    async ClickF4(screenTabName: string): Promise<void> {
        await this.page.locator(`//span[contains(text(),'${screenTabName}')]`).press('F4');
    }

    async ClickCategoryButton(): Promise<void> {
        await this.uICategory1Button.click();
    }

    async ClickSubCategoryButton(): Promise<void> {
        await this.uISubCategory1Button.click();
    }

    async ClickActivityLogTypeButton(): Promise<void> {
        await this.uIActivityTypeButton.click();
    }

    async EnterAtBuilding(Building: string): Promise<void> {
        await this.uILocationDropdown.selectOption({ label: Building });
    }

    async EnterAtFloor(Floor: string): Promise<void> {
        await this.uIFloorLookupEdit.fill(Floor);
    }

    async EnterAtPOD(Pod: string): Promise<void> {
        await this.uIPodLookupEdit.fill(Pod);
    }

    async EnterAtCell(Cell: string): Promise<void> {
        await this.uICellLookupEdit.fill(Cell);
    }

    async EnterAtNotes(Notes: string): Promise<void> {
        await this.uINotesEdit.fill(Notes);
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do You Want To Save All Of The Entered Details?');
    }

    async ClickNewButton(): Promise<void> {
        await this.uINewButton.click();
    }

    async ClickGoToActivityDetailButton(): Promise<void> {
        await this.uIGotoActivityDetail.click();
    }

    async ClickViewTodayLogButton(): Promise<void> {
        await this.uIViewTodaysLogButton.click();
    }

    async ClickHelpButton(): Promise<void> {
        await this.uIHelpButton.click();
    }

    async ClickStartTimer(): Promise<void> {
        await this.uIStartTimerButton.click();
    }

    async ClickEndTimer(): Promise<void> {
        await this.uIEndTimerButton.click();
    }

    async verifyAdditionSuccessFullMessage(): Promise<void> {
        expect(await this.uIBottomLeftSideStatusBar.innerText()).toEqual("1002 - Addition Successful");
    }

    async GetStartDateTimeValue(): Promise<string> {
        const date = await this.uIStartDateEdit.inputValue();
        const time = await this.uIStartTimeEdit.inputValue();
        const convertedDate = date.substring(0, 6) + date.substring(8);
        return convertedDate + ' ' + time;
    }

    async GetEndDateTimeValue(): Promise<string> {
        const date = await this.uIEndDateEdit.inputValue();
        const time = await this.uIEndTimeEdit.inputValue();
        const convertedDate = date.substring(0, 6) + date.substring(8);
        return convertedDate + ' ' + time;
    }

}

export class QuickActivityLogPage {
    readonly page: Page;
    readonly uIQuickActivityTodaysLogTable: Locator;
    readonly uINamesButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIQuickActivityTodaysLogTable = page.locator("//div[@id='grdDailyActivity']");
        this.uINamesButton = page.locator('#btnLogEntry');
    }

    async SelectCurrentDateDataInGrid(): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        await this.uIQuickActivityTodaysLogTable.locator('td', { hasText: currentDate }).click();
    }

    async verifyAtActivityDttmInGrid(jsonIndex: number): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        await expect(this.uIQuickActivityTodaysLogTable).toContainText(currentDate);
    }

    async verifyRowCountInGrid(rowCounts: number): Promise<void> {
        const rows = this.uIQuickActivityTodaysLogTable.locator('//tbody/tr');
        await expect(rows).toHaveCount(rowCounts);
    }

}

export class NamesPopupPage {
    readonly page: Page;
    readonly uISPNEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uICloseButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISPNEdit = page.locator('#usrInmateDetails_NamCtrlSPIN_SPN');
        this.uIAddButton = page.locator('#usrInmateDetails_cmdAddInmate');
        this.uICloseButton = page.locator('#btnClose');
    }

    async enterAtSPN(jsonIndex: number): Promise<void> {
        await this.uISPNEdit.fill(SPN);
        await this.uISPNEdit.press('Tab');
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
    }

    async clickClose(): Promise<void> {
        await this.uICloseButton.click();
    }

    async clickNames(): Promise<void> {
        await this.uINamesButton.click();
    }

}

export class InmateManagementEntryPage {
    readonly page: Page;
    readonly uISPNNoEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNcloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIAdmissionIcon: Locator;
    readonly uIPropertyIcon: Locator;
    readonly uIScheduleIcon: Locator;
    readonly uINameMineIcon: Locator;
    readonly uIWorkReleaseIcon: Locator;
    readonly uIYesButton: Locator;
    readonly uIStatusBar: Locator;
    readonly uIConfirmPopupText: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIResetIcon: Locator;
    readonly uIHeaderStatus: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISPNNoEdit = page.locator('#HeaderCtrl_txtSPINNbr');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNcloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIAdmissionIcon = page.locator('#JailQuickMenuCtrl1_imgBtn1');
        this.uIPropertyIcon = page.locator('#JailQuickMenuCtrl1_imgBtn2');
        this.uIScheduleIcon = page.locator('#JailQuickMenuCtrl1_imgBtn3');
        this.uINameMineIcon = page.locator('#JailQuickMenuCtrl1_imgBtn4');
        this.uIWorkReleaseIcon = page.locator('#JailQuickMenuCtrl1_imgBtn5');
        this.uIYesButton = page.locator("//button[contains(text(),'Yes')]");
        this.uIStatusBar = page.locator("//td[@class='statusBar']//b");
        this.uIConfirmPopupText = page.locator("//div[@class='modal-body']");
        this.uILastNameEdit = page.locator('#HeaderCtrl_nmInmateName_LastName');
        this.uIFirstNameEdit = page.locator('#HeaderCtrl_nmInmateName_FirstName');
        this.uIResetIcon = page.locator('#cmdRefresh');
        this.uIHeaderStatus = page.locator('#TblCommonRow');
    }

    async EnterAtSPNNo(SPNNo: string): Promise<void> {
        await this.uISPNNoEdit.fill(SPNNo);
        await this.uISPNNoEdit.press('Tab');
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async ClickSaveAndCloseButton(): Promise<void> {
        await this.uISaveNcloseButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
    }

    async VerifyUpdateSuccessfulStatusMessage(): Promise<void> {
        expect(await this.uIStatusBar.innerText()).toEqual("1003 - Update Successful");
    }

    async NavigateToCellAssignmentTab(): Promise<void> {
        await this.uINavigateToCellAssignmentTab.click();
    }

    async NavigateToEventScheduleTab(): Promise<void> {
        await this.uINavigateToEventScheduleTab.click();
        await this.page.locator("iframe[src*='frmInmateMovement.aspx']").contentFrame().locator('body').waitFor();
    }

    async NavigateToInmateVisitingTab(): Promise<void> {
        await this.uINavigateToInmateVisitingTab.click();
        await this.page.locator("iframe[src*='frmInmateVisiting.aspx']").contentFrame().locator('body').waitFor();
    }

    async NavigateToContactLoggingTab(): Promise<void> {
        await this.uINavigateToContactLoggingTab.click();
        await this.page.locator("iframe[src*='frmContactLogging.aspx']").contentFrame().locator('body').waitFor();
    }

    async NavigateToDisciplinaryIncidentTab(): Promise<void> {
        await this.uINavigateToDisciplinaryIncidentTab.click();
        await this.page.locator("iframe[src*='frmIn_PodDisciplinary.aspx']").contentFrame().locator('body').waitFor();
    }

    async NavigateToGrievanceTab(): Promise<void> {
        await this.uINavigateToGrievanceTab.click();
        await this.page.locator("iframe[src*='frmGrievanceList.aspx']").contentFrame().locator('body').waitFor();
    }

    async NavigateToMailLogTab(): Promise<void> {
        await this.uINavigateToMaillogTab.click();
        await this.page.locator("iframe[src*='frmMailLogList.aspx']").contentFrame().locator('body').waitFor();
    }

    async NavigateToAssociationsTab(): Promise<void> {
        await this.uINavigateToAssociationsTab.click();
        await this.page.locator("iframe[src*='frmAdmCoDependant.aspx']").contentFrame().locator('body').waitFor();
    }

    async NavigateToAttachmentTab(): Promise<void> {
        await this.uINavigateToAttachmentTab.click();
        await this.page.locator("iframe[src*='frmTxtAttachMgrEx.aspx']").contentFrame().locator('body').waitFor();
    }

    async verify30522IncompatibleCellConfirmPopupNotAppear(): Promise<void> {
        await expect(this.uIConfirmPopupText).not.toContainText("Incompatible Cell With Following Reason(s)");
    }

    async verifySaveConfirmationPopupAndClickYes(): Promise<void> {
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do You Want To Save All Of The Entered Details?');
    }

}

export class CellAssignmentTabPage {
    readonly page: Page;
    readonly gridHelpers: GridHelpers;
    readonly uINavigateToCellAssignmentTab: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIActionDropdown: Locator;
    readonly uIAutoLocationCheckBox: Locator;
    readonly uIAssignCellNoEdit: Locator;
    readonly uIAssignCellNoLookUpIcon: Locator;
    readonly uIBunkNoEdit: Locator;
    readonly uIBedIDEdit: Locator;
    readonly uIFacilityIcon: Locator;
    readonly uICommentsEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uIGridTable: Locator;
    readonly uIBunkIcon: Locator;
    readonly uIYesButton: Locator;
    readonly uIAssignCellLookupIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.gridHelpers = new GridHelpers(page);
        this.uINavigateToCellAssignmentTab = page.locator("//div[@id='tabInamteMgmt'] //span[contains(text(),'Cell Assignment')]");
        this.uIDateEdit = page.locator('#tabInamteMgmt_tmpl0_UsrCellAssignment1_dttmAction_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='tabInamteMgmt_tmpl0_UsrCellAssignment1_dttmAction_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIActionDropdown = page.locator('#tabInamteMgmt_tmpl0_UsrCellAssignment1_cddAction_DropDown');
        this.uIAutoLocationCheckBox = page.locator('#tabInamteMgmt_tmpl0_UsrCellAssignment1_chkAutoLocUpdate');
        this.uIAssignCellNoEdit = page.locator('#tabInamteMgmt_tmpl0_UsrCellAssignment1_lupCell_CodeValue');
        this.uIAssignCellNoLookUpIcon = page.locator('#tabInamteMgmt_tmpl0_UsrCellAssignment1_lupCell_imgBtn');
        this.uIBunkNoEdit = page.locator('#tabInamteMgmt_tmpl0_UsrCellAssignment1_txtBunkNbr');
        this.uIBedIDEdit = page.locator('#tabInamteMgmt_tmpl0_UsrCellAssignment1_txtBedID');
        this.uIFacilityIcon = page.locator('#tabInamteMgmt_tmpl0_UsrCellAssignment1_cmdFacility');
        this.uICommentsEdit = page.locator('#tabInamteMgmt_tmpl0_UsrCellAssignment1_txtComments');
        this.uISaveButton = page.locator('#tabInamteMgmt_tmpl0_UsrCellAssignment1_cmdSaveCell');
        this.uIGridTable = page.locator('#tabInamteMgmt_tmpl0_UsrCellAssignment1_grdAssignHist');
        this.uIBunkIcon = page.locator('#tabInamteMgmt_tmpl0_UsrCellAssignment1_cmdFacility');
        this.uIYesButton = page.locator("//button[@class='confirm btn btn-primary']");
        this.uIAssignCellLookupIcon = page.locator('#tabInamteMgmt_tmpl0_UsrCellAssignment1_lupCell_imgBtn');
    }

    async EnterDataAndTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async SelectAtAction(Action: string): Promise<void> {
        await this.uIActionDropdown.selectOption({ label: Action });
    }

    async EnterAtAssignCellNo(AssignCellNo: string): Promise<void> {
        await this.uIAssignCellNoEdit.fill(AssignCellNo);
        await this.uIAssignCellNoEdit.press('Tab');
    }

    async EnterAtBunkNo(BunkNo: string): Promise<void> {
        await this.uIBunkNoEdit.fill(BunkNo);
        await this.uIBunkNoEdit.press('Tab');
        await this.uIBedIDEdit.click();
    }

    async EnterAtComments(Comments: string): Promise<void> {
        await this.uICommentsEdit.fill(Comments);
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
        await this.uIYesButton.click();
    }

    async ClickBunkIcon(): Promise<void> {
        await this.uIBunkIcon.click();
    }

    async verifyActionInGrid(Action: string): Promise<void> {
        const text = await this.gridHelpers.getGridCellInnerText(this.uIGridTable, 'Action', 0);
        expect(text).toEqual(Action);
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async clickAssignCellLookup(): Promise<void> {
        await this.uIAssignCellLookupIcon.click();
    }

    async verifyAtLocationInGrid(jsonIndex: number): Promise<void> {
        const Location = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Location' + jsonIndex);
        const location = await this.gridHelpers.getGridCellInnerText(this.uIGridTable, 'Location', 0);
        expect(location, "Location value is not same as expected-->").toEqual(Location);
    }

    async clickVerifyAndYesIn30522Popup(): Promise<void> {
        const confirmPage = new ConfirmPage(this.page);
        await confirmPage.yesWithScreenOrWindowPopup("Incompatible Cell With Following Reason(s)");
    }

    async clickYesInSavePopup(): Promise<void> {
        await new ConfirmPage(this.page).uIModalFooterYesButton.click();
    }

    async selectAtAction(i: number): Promise<void> {
        const Action = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Action' + i);
        await this.uIActionDropdown.selectOption({ label: Action });
    }

    async enterAtBunkNo(i: number): Promise<void> {
        const BunkNo = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'BunkNo' + i);
        await this.uIBunkNoEdit.fill(BunkNo);
        await this.uIBunkNoEdit.press('Tab');
    }

    async verifyAtActionInGrid(rowIdx: number, jsonIdx: number): Promise<void> {
        const Action = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Action' + jsonIdx);
        const text = await this.gridHelpers.getGridCellInnerText(this.uIGridTable, 'Action', rowIdx);
        expect(text).toEqual(Action);
    }

    async verifyAtPFCodeInGrid(rowIdx: number, jsonIdx: number): Promise<void> {
        const PFCode = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'PFCode' + jsonIdx);
        const text = await this.gridHelpers.getGridCellInnerText(this.uIGridTable, 'PF Code', rowIdx);
        expect(text).toEqual(PFCode);
    }

    async enterAtAssignCellNo(i: number): Promise<void> {
        const AssignCellNo = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'AssignCellNo' + i);
        await this.uIAssignCellNoEdit.fill(AssignCellNo);
        await this.uIAssignCellNoEdit.press('Tab');
    }

    async verify1018AcknowledgePopup(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('(1018) Required Entries are Missing');
    }

    async verifySaveButtonIsDisplayed(): Promise<void> {
        await expect(this.uISaveButton).toBeVisible();
    }

}

export class EventScheduleTabPage {
    readonly page: Page;
    readonly gridHelpers: GridHelpers;
    readonly uINavigateToEventScheduleTab: Locator;
    readonly uIEventTypeDropdown: Locator;
    readonly uISubTypeDropdown: Locator;
    readonly uISubjecttxtbox: Locator;
    readonly uILocationDropdown: Locator;
    readonly uIStartDatetxtbox: Locator;
    readonly uIEndDatetxtbox: Locator;
    readonly uIStartTimetxtbox: Locator;
    readonly uIEndTimetxtbox: Locator;
    readonly uIRepeatChkbox: Locator;
    readonly uIRepeatDropdown: Locator;
    readonly uINotestxtbox: Locator;
    readonly uICus1txtbox: Locator;
    readonly uICus2txtbox: Locator;
    readonly uISaveBtn: Locator;
    readonly uIResetBtn: Locator;
    readonly uIEventGridTable: Locator;
    readonly uISignOutBtn: Locator;
    readonly uIInternalSaveButton: Locator;
    readonly uIYesButton: Locator;
    readonly uIProgressStatusYesButton: Locator;
    readonly uIInsideClassificationText: Locator;
    readonly uIOutsideClassificationText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.gridHelpers = new GridHelpers(page);
        this.uINavigateToEventScheduleTab = page.locator("//div[@id='tabInamteMgmt'] //span[contains(text(),'Event Schedule')]");
        this.uIEventTypeDropdown = page.locator('#UsrEventCtrl1_cddEventType_DropDown');
        this.uISubTypeDropdown = page.locator('#UsrEventCtrl1_cddSubType');
        this.uISubjecttxtbox = page.locator('#UsrEventCtrl1_txtSubject');
        this.uILocationDropdown = page.locator('#UsrEventCtrl1_cddLocation_DropDown');
        this.uIStartDatetxtbox = page.locator('#UsrEventCtrl1_dtDateFrom_KPIDttmCtrl');
        this.uIEndDatetxtbox = page.locator('#UsrEventCtrl1_dtDateTo_KPIDttmCtrl');
        this.uIStartTimetxtbox = page.locator("//table[@id = 'UsrEventCtrl1_tmStart_Time'] //input[(@class='igte_BlueThemeEditInContainer')]");
        this.uIEndTimetxtbox = page.locator("//table[@id = 'UsrEventCtrl1_tmEnd_Time'] //input[(@class='igte_BlueThemeEditInContainer')]");
        this.uIRepeatChkbox = page.locator('#UsrEventCtrl1_chkRepeat');
        this.uIRepeatDropdown = page.locator('#UsrEventCtrl1_cddRepeat_DropDown');
        this.uINotestxtbox = page.locator('#UsrEventCtrl1_txtNotes');
        this.uICus1txtbox = page.locator('#UsrEventCtrl1_txtCustom1');
        this.uICus2txtbox = page.locator('#UsrEventCtrl1_txtCustom2');
        this.uISaveBtn = page.locator('#cmdSave');
        this.uIResetBtn = page.locator('#cmdReset');
        this.uIEventGridTable = page.locator('#UsrScheduleViewCtrl1_grdEventSchedule');
        this.uISignOutBtn = page.locator('#UsrEventCtrl1_cmdSignOut');
        this.uIInternalSaveButton = page.locator("//table[@id='Table2']//input[@id='cmdSave']");
        this.uIYesButton = page.locator("//button[contains(text(),'Yes')]");
        this.uIProgressStatusYesButton = page.locator("//button[@class='confirm btn btn-primary']");
        this.uIInsideClassificationText = page.locator("//div[@id='UsrScheduleViewCtrl1_grdEventSchedule']//td[contains(text(),'Inside Classification')]");
        this.uIOutsideClassificationText = page.locator("//div[@id='UsrScheduleViewCtrl1_grdEventSchedule']//td[contains(text(),'Outside Classification')]");
    }

    async SelectAtEventSubType(SubType: string): Promise<void> {
        await this.uISubTypeDropdown.selectOption({ label: SubType });
    }

    async EnterAtSubject(Subject: string): Promise<void> {
        await this.uISubjecttxtbox.fill(Subject);
    }

    async SelectAtLocation(Location: string): Promise<void> {
        await this.uILocationDropdown.fill(Location);
    }

    async EnterStartDateTime(): Promise<void> {
        await this.uIStartDatetxtbox.press('Tab');
        await this.uIStartTimetxtbox.press('Tab');
    }

    async EnterEndDateTime(): Promise<void> {
        await this.uIEndDatetxtbox.press('Tab');
        const futureTime = DateHelpers.getFutureTimeByHours(1, 'HHmm');
        await this.uIEndTimetxtbox.fill(futureTime);
    }

    async SelectAtRepeat(Repeat: string): Promise<void> {
        await this.uIRepeatDropdown.selectOption({ label: Repeat });
    }

    async EnterAtNotes(Notes: string): Promise<void> {
        await this.uINotestxtbox.fill(Notes);
    }

    async EnterAtCustom1(Custom1: string): Promise<void> {
        await this.uICus1txtbox.fill(Custom1);
    }

    async EnterAtCustom2(Custom2: string): Promise<void> {
        await this.uICus1txtbox.fill(Custom2);
    }

      async verifySignInToolTipInGrid(): Promise<void> {
        // no-op
    }

    async SelectEventFromGrid(): Promise<void> {
        await this.uIEventGridTable.locator('td', { hasText: "Classification" }).click();
    }

    async SelectEventFromGridInside(): Promise<void> {
        await this.uIEventGridTable.locator('td', { hasText: "Classification" }).click();
        await this.uIProgressStatusYesButton.click();
    }

    async ClickSignOutButtonOutside(): Promise<void> {
        await this.uISignOutBtn.click();
        await this.uIProgressStatusYesButton.click();
    }

    async ClickSignOutButtonInside(): Promise<void> {
        await this.uISignOutBtn.click();
        await this.uIProgressStatusYesButton.click();
    }

    async SelectAtEventType(EventType: string): Promise<void> {
        await this.uIEventTypeDropdown.selectOption({ label: EventType });
    }

    async ClickRepeatCheckBox(): Promise<void> {
        await this.uIRepeatChkbox.click();
    }

    async ClickInternalSave(): Promise<void> {
        await this.uIInternalSaveButton.click();
        await this.uIYesButton.click();
    }

    async verifySubjectInGrid(Subject: string): Promise<void> {
        const text = await this.gridHelpers.getGridCellInnerText(this.uIEventGridTable, 'Subject', 0);
        expect(text).toEqual(Subject);
    }

    async verifyColorInGrid(): Promise<void> {
        const color = await this.uIInsideClassificationText.evaluate(el => getComputedStyle(el).backgroundColor);
        expect(color).not.toEqual('rgba(0, 0, 255, 1)');
    }

    async verifyColorInGridOutside(): Promise<void> {
        const color = await this.uIOutsideClassificationText.evaluate(el => getComputedStyle(el).backgroundColor);
        expect(color).not.toEqual('rgba(0, 0, 255, 1)');
    }

}

export class InmateVisitingTabPage {
    readonly page: Page;
    readonly uINavigateToInmateVisitingTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToInmateVisitingTab = page.locator("//div[@id='tabInamteMgmt'] //span[contains(text(),'Inmate Visiting')]");
    }

}

export class ContactLoggingTabPage {
    readonly page: Page;
    readonly uINavigateToContactLoggingTab: Locator;
    readonly UIDatetxtbox: Locator;
    readonly UITimetxtbox: Locator;
    readonly uIContactTypeDropdown: Locator;
    readonly uINumberCalledEdit: Locator;
    readonly uIStatusDropdown: Locator;
    readonly uIPFNoEdit: Locator;
    readonly uICommentsEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIGridTable: Locator;
    readonly uISaveButton: Locator;
    readonly uIResetButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToContactLoggingTab = page.locator("//div[@id='tabInamteMgmt'] //span[contains(text(),'Contact Logging')]");
        this.UIDatetxtbox = page.locator('#dtmDateTime_Date_KPIDttmCtrl');
        this.UITimetxtbox = page.locator("//table[@id = 'dtmDateTime_Time'] //input[(@class='textboxdatetime igte_BlueThemeEditInContainer')]");
        this.uIContactTypeDropdown = page.locator('#cddContactType_DropDown');
        this.uINumberCalledEdit = page.locator('#txtNumberCalled');
        this.uIStatusDropdown = page.locator('#cddStatus_DropDown');
        this.uIPFNoEdit = page.locator('#lupPFNbr_CodeValue');
        this.uICommentsEdit = page.locator('#txtComments');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIClearButton = page.locator('#cmdClear');
        this.uIGridTable = page.locator('#grdContactLogging');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIResetButton = page.locator('#cmdReset');
    }

    async EnterDataTime(): Promise<void> {
        await this.UIDatetxtbox.press('Tab');
        await this.UITimetxtbox.press('Tab');
    }

    async SelectAtContactType(ContactType: string): Promise<void> {
        await this.uIContactTypeDropdown.fill(ContactType);
        await this.uIContactTypeDropdown.press('Tab');
    }

    async SelectAtContactNo(NumberCalled: string): Promise<void> {
        await this.uINumberCalledEdit.fill(NumberCalled);
    }

    async SelectAtStatus(Status: string): Promise<void> {
        await this.uIStatusDropdown.fill(Status);
    }

    async EnterPFNo(): Promise<void> {
        await this.uIPFNoEdit.press('Tab');
    }

    async EnterAtComments(Comments: string): Promise<void> {
        await this.uICommentsEdit.fill(Comments);
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async ClickClearButton(): Promise<void> {
        await this.uIClearButton.click();
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async ClickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

}

export class DisciplinaryIncidentTabPage {
    readonly page: Page;
    readonly gridHelpers: GridHelpers;
    readonly uINavigateToDisciplinaryIncidentTab: Locator;
    readonly uINewIncidentButton: Locator;
    readonly uIGridTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.gridHelpers = new GridHelpers(page);
        this.uINavigateToDisciplinaryIncidentTab = page.locator("//div[@id='tabInamteMgmt'] //span[contains(text(),'Disciplinary Incident')]");
        this.uINewIncidentButton = page.locator('#cmdNewIncident');
        this.uIGridTable = page.locator('#grdDisciplinary');
    }

    async ClickNewIncidentButton(): Promise<void> {
        await this.uINewIncidentButton.click();
    }

    async VerifyBuildingInGrid(Building: string): Promise<void> {
        const text = await this.gridHelpers.getGridCellInnerText(this.uIGridTable, 'Building', 0);
        expect(text).toEqual(Building);
    }

}

export class GrievanceTabPage {
    readonly page: Page;
    readonly gridHelpers: GridHelpers;
    readonly uINavigateToGrievanceTab: Locator;
    readonly uINewGrievanceButton: Locator;
    readonly uIGridTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.gridHelpers = new GridHelpers(page);
        this.uINavigateToGrievanceTab = page.locator("//div[@id='tabInamteMgmt'] //span[contains(text(),'Grievance')]");
        this.uINewGrievanceButton = page.locator('#cmdNewGrievance');
        this.uIGridTable = page.locator('#grdDisciplinary');
    }

    async ClickNewGrievanceButton(): Promise<void> {
        await this.uINewGrievanceButton.click();
    }

    async VerifyStatusInGrid(Status: string): Promise<void> {
        const text = await this.gridHelpers.getGridCellInnerText(this.uIGridTable, 'Status', 0);
        expect(text).toEqual(Status);
    }

}

export class MailLogTabPage {
    readonly page: Page;
    readonly uINavigateToMaillogTab: Locator;
    readonly uINewMailButton: Locator;
    readonly uIGridTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToMaillogTab = page.locator("//div[@id='tabInamteMgmt'] //span[contains(text(),'Mail log')]");
        this.uINewMailButton = page.locator('#cmdNewMail');
        this.uIGridTable = page.locator('#grdDisciplinary');
    }

    async ClickNewMailLogButton(): Promise<void> {
        await this.uINewMailButton.click();
    }

}

export class InmAssociationsTabPage {
    readonly page: Page;
    readonly uINavigateToAssociationsTab: Locator;
    readonly UIAssocationTypeDropdown: Locator;
    readonly UINameTypeEdit: Locator;
    readonly UINameIDEdit: Locator;
    readonly UIRelationDropdown: Locator;
    readonly UIRecRelationDropdown: Locator;
    readonly UINonAssoCheckbBox: Locator;
    readonly UIBckGroundDateEdit: Locator;
    readonly UIBckGroundPFIDEdit: Locator;
    readonly UIVisitDateEdit: Locator;
    readonly UIVisitPFIDEdit: Locator;
    readonly UIActDateEdit: Locator;
    readonly UIActPFIDEdit: Locator;
    readonly UIInactiveCheckBox: Locator;
    readonly UINotesEdit: Locator;
    readonly UIAddButton: Locator;
    readonly UISaveButton: Locator;
    readonly UIResetButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToAssociationsTab = page.locator("//div[@id='tabInamteMgmt'] //span[contains(text(),'Associations')]");
        this.UIAssocationTypeDropdown = page.locator('#cddAssocType_DropDown');
        this.UINameTypeEdit = page.locator('#nNameID_NameType');
        this.UINameIDEdit = page.locator('#nNameID_NameTypeID');
        this.UIRelationDropdown = page.locator('#cddRelation_DropDown');
        this.UIRecRelationDropdown = page.locator('#cddRecRelation_DropDown');
        this.UINonAssoCheckbBox = page.locator('#chkAssoc');
        this.UIBckGroundDateEdit = page.locator('#dttBackground_KPIDttmCtrl');
        this.UIBckGroundPFIDEdit = page.locator('#lupBackPF_CodeValue');
        this.UIVisitDateEdit = page.locator('#dttVisit_KPIDttmCtrl');
        this.UIVisitPFIDEdit = page.locator('#lupVisitPF_CodeValue');
        this.UIActDateEdit = page.locator('#dttActive_KPIDttmCtrl');
        this.UIActPFIDEdit = page.locator('#lupActivePF_CodeValue');
        this.UIInactiveCheckBox = page.locator('#chkInactive');
        this.UINotesEdit = page.locator('#txtNote');
        this.UIAddButton = page.locator('#cmdAdd');
        this.UISaveButton = page.locator('#cmdSave');
        this.UIResetButton = page.locator('#cmdReset');
    }

}

export class InmAttachmentTabPage {
    readonly page: Page;
    readonly uINavigateToAttachmentTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToAttachmentTab = page.locator("//div[@id='tabInamteMgmt'] //span[contains(text(),'Attachment')]");
    }

    async clickYesIn30522SavePopup(): Promise<void> {
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(30522) Incompatible Cell With Following Reason(s).');
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async enterAtLastName(jsonIndex: number): Promise<void> {
        await this.uILastNameEdit.fill(LastName);
        await this.uILastNameEdit.press('Tab');
    }

    async enterAtFirstName(jsonIndex: number): Promise<void> {
        await this.uIFirstNameEdit.fill(FirstName);
        await this.uIFirstNameEdit.press('Tab');
    }

    async clickResetIcon(): Promise<void> {
        await this.uIResetIcon.click();
    }

    async verify30001AcknowledgePopup(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('(30001) SPN No does not exist');
    }

    async verifyLastNameIsBlank(): Promise<void> {
        const value = await this.page.locator('#HeaderCtrl_nmInmateName_LastName').inputValue();
        expect(value).toEqual('');
    }

    async verify1018AcknowledgePopup(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('(1018) Required Entries are Missing');
    }

    async verifyAtLabel(jsonIndex: number): Promise<void> {
        const Label = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Label' + jsonIndex);
        const labelStatus = await this.page.locator("//td[@class='statusBar']//b").innerText();
        expect(labelStatus, "Label status is not as expected-->").toEqual(Label);
    }

}

export class InmatePropertyEntryPage {
    readonly page: Page;
    readonly uISPNNoEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNcloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIAdmissionIcon: Locator;
    readonly uIFacilityIcon: Locator;
    readonly uIScheduleIcon: Locator;
    readonly uINameMineIcon: Locator;
    readonly uIWorkReleaseIcon: Locator;
    readonly uIYesButton: Locator;
    readonly uIStatusBar: Locator;
    readonly uISAveAndCloseButton: Locator;
    readonly uICMSBookingYearEdit: Locator;
    readonly uICMSBookingNoEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISPNNoEdit = page.locator('#HeaderCtrl_txtSPINNbr');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNcloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIAdmissionIcon = page.locator('#JailQuickMenuCtrl1_imgBtn1');
        this.uIFacilityIcon = page.locator('#JailQuickMenuCtrl1_imgBtn2');
        this.uIScheduleIcon = page.locator('#JailQuickMenuCtrl1_imgBtn3');
        this.uINameMineIcon = page.locator('#JailQuickMenuCtrl1_imgBtn4');
        this.uIWorkReleaseIcon = page.locator('#JailQuickMenuCtrl1_imgBtn5');
        this.uIYesButton = page.locator("//button[@class='confirm btn btn-primary']");
        this.uIStatusBar = page.locator("//td[@class='statusBar']//b");
        this.uISAveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uICMSBookingYearEdit = page.locator('#HeaderCtrl_nbrBookingYear');
        this.uICMSBookingNoEdit = page.locator('#HeaderCtrl_nbrBooking');
    }

    async EnterAtSPN(SPNNo: string): Promise<void> {
        await this.uISPNNoEdit.fill(SPNNo);
        await this.uISPNNoEdit.press('Tab');
    }

    async CloseInmatepropertyEntry(): Promise<void> {
        await this.page.close();
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async ClickPrintButton(): Promise<void> {
        await this.uIPrintButton.click();
    }

    async ClickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async navigateToPersonalPropertyTab(): Promise<void> {
        await this.UINavigatetoPersonalPropertyTab.click();
    }

    async switchToPersonalPropertyTab(): Promise<void> {
        await this.UINavigatetoPersonalPropertyTab.click();
        await new BrowserHelpers(this.page).waitForFrame('frmPersonalProperty.aspx');
    }

    async navigateToIssuesPropertyTab(): Promise<void> {
        await this.UINavigateToIssuedPropertyTab.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
    }

    async VerifyUpdateSuccessfulStatusMessage(): Promise<void> {
        expect(await this.uIStatusBar.innerText()).toEqual("1003 - Update Successful");
    }

    async saveAndCloseScreen(): Promise<void> {
        await this.uISAveAndCloseButton.click();
        await this.uIYesButton.click();
    }

}

export class PersonalPropertyTabPage {
    readonly page: Page;
    readonly UINavigatetoPersonalPropertyTab: Locator;
    readonly UIItemDropDown: Locator;
    readonly UIDescriptionEdit: Locator;
    readonly UIQuantityEdit: Locator;
    readonly UIValueEdit: Locator;
    readonly UIConditionDropdown: Locator;
    readonly UIAddButton: Locator;
    readonly UIClearButton: Locator;
    readonly UIPriPropertyItemSaveBtn: Locator;
    readonly UIPriPropertySelectAllChkbox: Locator;
    readonly UIPriPropertyItemProceedBtn: Locator;
    readonly UIPriPropertyItemIncClsChkBox: Locator;
    readonly UIPriPropertyItemHistoryBtn: Locator;
    readonly UIPriPropertyItemReceiptBtn: Locator;
    readonly uIInternalSaveButton: Locator;
    readonly uIYesButton: Locator;
    readonly uIColorDropDown: Locator;
    readonly uIPersonalPropertyTabResultGrid: Locator;
    readonly uISelectAllCheckBox: Locator;
    readonly uIStatusBar: Locator;
    readonly uIProceedWithSelectionButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.UINavigatetoPersonalPropertyTab = page.locator("//div[@id='tabInmateProperty']//span[contains(text(),'Personal Property')]");
        this.UIItemDropDown = page.locator('#cddItem_DropDown');
        this.UIDescriptionEdit = page.locator('#txtDescription');
        this.UIQuantityEdit = page.locator('#txtQuan');
        this.UIValueEdit = page.locator('#txtValue');
        this.UIConditionDropdown = page.locator('#cddCondition_DropDown');
        this.UIAddButton = page.locator('#cmdAdd');
        this.UIClearButton = page.locator('#cmdClear');
        this.UIPriPropertyItemSaveBtn = page.locator('#cmdSave');
        this.UIPriPropertySelectAllChkbox = page.locator('#chkSelectAll');
        this.UIPriPropertyItemProceedBtn = page.locator('#cmdProceed');
        this.UIPriPropertyItemIncClsChkBox = page.locator('#chkIncClose');
        this.UIPriPropertyItemHistoryBtn = page.locator('#cmdHistory');
        this.UIPriPropertyItemReceiptBtn = page.locator('#cmdReceipt');
        this.uIInternalSaveButton = page.locator('#cmdSave');
        this.uIYesButton = page.locator("//button[@class='confirm btn btn-primary']");
        this.uIColorDropDown = page.locator('#cddColor_DropDown');
        this.uIPersonalPropertyTabResultGrid = page.locator('#grdproperty');
        this.uISelectAllCheckBox = page.locator('#chkSelectAll');
        this.uIStatusBar = page.locator("//td[@class='status']//b");
        this.uIProceedWithSelectionButton = page.locator('#cmdProceed');
    }

    async selectItem(): Promise<void> {
        await this.UIItemDropDown.selectOption({ index: 1 });
    }

    async enterAtDescription(Description: string): Promise<void> {
        await this.UIDescriptionEdit.fill(Description);
    }

    async enterAtQuantity(Quantity: string): Promise<void> {
        await this.UIQuantityEdit.fill(Quantity);
    }

    async ClickAddButton(): Promise<void> {
        await this.UIAddButton.click();
    }

    async saveInteranalTab(): Promise<void> {
        await this.uIInternalSaveButton.click();
        await this.uIYesButton.click();
    }

    async selectAtItem(Item: string): Promise<void> {
        await this.UIItemDropDown.selectOption({ label: Item });
    }

    async selectAtColor(color: string): Promise<void> {
        await this.uIColorDropDown.selectOption({ label: color });
    }

    async verifyRowByAtItem(Item: string): Promise<void> {
        expect(item).toEqual(Item);
    }

    async verifyAtActionInTheGrid(Action: string): Promise<void> {
        expect(action).toEqual(Action);
    }

    async verifyUpdateSuccessful(): Promise<void> {
        expect(text).toEqual("1003 - Update Successful");
    }

    async clickSelectAllCheckBox(): Promise<void> {
        await this.uISelectAllCheckBox.click();
    }

    async verifyProceedWithSelectionButtonIsEnabled(): Promise<void> {
        await expect(this.uIProceedWithSelectionButton).toBeVisible();
        await expect(this.uIProceedWithSelectionButton).toBeEnabled();
    }

    async clickProceedWithSelectionButton(): Promise<void> {
        await this.uIProceedWithSelectionButton.click();
    }

    async selectAtItem(jsonIndex: number): Promise<void> {
        const Item = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Item' + jsonIndex);
        await this.UIItemDropDown.selectOption({ label: Item });
        await this.UIItemDropDown.press('Tab');
    }

}

export class IssuedPropertyTabPage {
    readonly page: Page;
    readonly UIInmateSignatureImageField: Locator;
    readonly UINavigateToIssuedPropertyTab: Locator;
    readonly UIOfficerEdit: Locator;
    readonly UIItemDropDown: Locator;
    readonly UIDescriptionEdit: Locator;
    readonly UIColorDropDown: Locator;
    readonly UISizeEdit: Locator;
    readonly UISizeDropdown: Locator;
    readonly UIQunantityEdit: Locator;
    readonly UIIssueDateEdit: Locator;
    readonly uIReturnedDateEdit: Locator;
    readonly UIConditionDropDown: Locator;
    readonly UILostValueEdit: Locator;
    readonly UIIssueReasonDropDown: Locator;
    readonly UIChargedCheckBox: Locator;
    readonly UIAddButton: Locator;
    readonly UIClearButton: Locator;
    readonly UISelectAllCheckBox: Locator;
    readonly uIGridTable: Locator;
    readonly UISelectGridcheckBox: Locator;
    readonly uIUpdateButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.UIInmateSignatureImageField = page.locator("//table/tbody/tr/td/input[@id='tabInmateProperty_tmpl1_UsrIssueProperty1_imgNewInmSign']");
        this.UINavigateToIssuedPropertyTab = page.locator("//div[@id='tabInmateProperty']//span[contains(text(),'Issued Property')]");
        this.UIOfficerEdit = page.locator('#tabInmateProperty_tmpl1_UsrIssueProperty1_lupOfficer_CodeValue');
        this.UIItemDropDown = page.locator('#tabInmateProperty_tmpl1_UsrIssueProperty1_cddItem_DropDown');
        this.UIDescriptionEdit = page.locator('#tabInmateProperty_tmpl1_UsrIssueProperty1_txtDescription');
        this.UIColorDropDown = page.locator('#tabInmateProperty_tmpl1_UsrIssueProperty1_cddColor_DropDown');
        this.UISizeEdit = page.locator('#tabInmateProperty_tmpl1_UsrIssueProperty1_txtSize');
        this.UISizeDropdown = page.locator('#tabInmateProperty_tmpl1_UsrIssueProperty1_cddTShirt_DropDown');
        this.UIQunantityEdit = page.locator('#tabInmateProperty_tmpl1_UsrIssueProperty1_txtQuan');
        this.UIIssueDateEdit = page.locator('#tabInmateProperty_tmpl1_UsrIssueProperty1_dtIssue_KPIDttmCtrl');
        this.uIReturnedDateEdit = page.locator('#tabInmateProperty_tmpl1_UsrIssueProperty1_dtReturned_KPIDttmCtrl');
        this.UIConditionDropDown = page.locator('#tabInmateProperty_tmpl1_UsrIssueProperty1_cddCondition_DropDown');
        this.UILostValueEdit = page.locator('#tabInmateProperty_tmpl1_UsrIssueProperty1_txtLastValue');
        this.UIIssueReasonDropDown = page.locator('#tabInmateProperty_tmpl1_UsrIssueProperty1_cddIssueReason_DropDown');
        this.UIChargedCheckBox = page.locator('#tabInmateProperty_tmpl1_UsrIssueProperty1_chkCharged');
        this.UIAddButton = page.locator('#tabInmateProperty_tmpl1_UsrIssueProperty1_cmdAdd');
        this.UIClearButton = page.locator('#tabInmateProperty_tmpl1_UsrIssueProperty1_imgClearItem');
        this.UISelectAllCheckBox = page.locator('#tabInmateProperty_tmpl1_UsrIssueProperty1_chkSelAll');
        this.uIGridTable = page.locator('#tabInmateProperty_tmpl1_UsrIssueProperty1_grdIssueProperty');
        this.UISelectGridcheckBox = page.locator("//div[@id='tabInmateProperty_tmpl1_UsrIssueProperty1_grdIssueProperty'] //img[@title='Unchecked']");
        this.uIUpdateButton = page.locator("//input[@title='Update The Data In The Grid']");
    }

    async EnterOfficer(): Promise<void> {
        await this.UIOfficerEdit.press('Tab');
    }

    async EnterIssuedItems(Item: string, Description: string, Size: string, Quantity: string, IssueReason: string): Promise<void> {
        await this.UIItemDropDown.selectOption({ label: Item });
        await this.UIDescriptionEdit.fill(Description);
        await this.UISizeEdit.fill(Size);
        await this.UISizeDropdown.selectOption({ label: Size });
        await this.UIQunantityEdit.fill(Quantity);
        await this.UIIssueDateEdit.press('Tab');
        await this.UIIssueReasonDropDown.selectOption({ label: IssueReason });
    }

    async ClickAddButton(): Promise<void> {
        await this.UIAddButton.click();
    }

    async ItemReturn(Condition: string, LostValue: string): Promise<void> {
        await this.UISelectGridcheckBox.click();
        await this.uIReturnedDateEdit.press('Tab');
        await this.UIConditionDropDown.selectOption({ label: Condition });
        await this.UILostValueEdit.fill(LostValue);
    }

    async selectAtItemInGrid(i: number): Promise<void> {
        const Item = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Item' + i);
        await this.uIGridTable.locator('td', { hasText: Item }).click();
    }

    async verifyReturnedDateFieldIsDisabled(): Promise<void> {
        expect(await this.uIReturnedDateEdit.getAttribute('readonly')).toContain('true');
    }

    async selectItemCheckboxInGrid(i: number): Promise<void> {
        const Item = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Item' + i);
        await new GridHelpers(this.page).selectRowCheckboxByCellText(this.uIGridTable, Item);
    }

    async enterReturnedDateAsFutureDate(): Promise<void> {
        await this.uIReturnedDateEdit.click();
        await this.uIReturnedDateEdit.press('Control+a');
        await this.uIReturnedDateEdit.press('Backspace');
        const futureDate = DateHelpers.getFutureDate(1);
        await this.uIReturnedDateEdit.fill(futureDate);
    }

    async enterReturnedDateAsPreviousDate(): Promise<void> {
        await this.uIReturnedDateEdit.click();
        await this.uIReturnedDateEdit.press('Control+a');
        await this.uIReturnedDateEdit.press('Backspace');
        const previousDate = DateHelpers.getPreviousDate(1);
        await this.uIReturnedDateEdit.fill(previousDate);
    }

    async enterReturnedDateAsCurrentDate(): Promise<void> {
        await this.uIReturnedDateEdit.click();
        await this.uIReturnedDateEdit.press('Control+a');
        await this.uIReturnedDateEdit.press('Backspace');
        const currentDate = DateHelpers.getCurrentDate();
        await this.uIReturnedDateEdit.fill(currentDate);
    }

    async verify1036FutureDateAcknowledgePopup(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('(1036) Future Date not allowed in Returned Date');
    }

    async verify6040ReturnedDateMustBeLaterAcknowledgePopup(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('(6040) The Returned Date must be later than the Issued Date.');
    }

    async verifyAtReturnedDateByItemInGrid(i: number): Promise<void> {
        const Item = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Item' + i);
        const ReturnedDate = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'ReturnedDate' + i);
        const gridCell = await new GridHelpers(this.page).getGridCell(this.uIGridTable, Item, 'Returned');
        expect(await gridCell.innerText()).toEqual(ReturnedDate);
    }

    async enterAtReturnedDate(i: number): Promise<void> {
        const ReturnedDate = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'ReturnedDate' + i);
        await this.uIReturnedDateEdit.click();
        await this.uIReturnedDateEdit.press('Control+a');
        await this.uIReturnedDateEdit.press('Backspace');
        await this.uIReturnedDateEdit.fill(ReturnedDate);
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }

    async verify30033EnterReturnedDateAcknowledgePopup(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('(30033) Enter Returned Date');
    }

    async verify6040TheReturnedDateAcknowledgePopupNotAppear(): Promise<void> {
        await expect(this.page.locator("//div[@class='modal-body']")).not.toContainText('(6040) The Returned Date must be later than the Issued Date.');
    }

    async verifyAtCMSBookingNo(CMSBooking: string): Promise<void> {
        const cmsYear = await this.page.locator('#HeaderCtrl_nbrBookingYear').getAttribute('value');
        const cmsNo = await this.page.locator('#HeaderCtrl_nbrBooking').getAttribute('value');
        const cms = cmsYear + '-' + cmsNo;
        expect(cms).toEqual(CMSBooking);
    }

}

export class InitialInmatePropertyPage {
    readonly page: Page;
    readonly UIIssueReasonDropdown: Locator;
    readonly uIIssuedDateEdit: Locator;
    readonly uIIssuedTimeEdit: Locator;
    readonly UIOfficerIDEdit: Locator;
    readonly UIInitialPropertycheckBox1: Locator;
    readonly UIInitialPropertyItem1Dropdown: Locator;
    readonly uIInitialPropertyItem1QtyEdit: Locator;
    readonly UIInitialPropertySize1Dropdown: Locator;
    readonly UIInitialPropertyColor1Dropdown: Locator;
    readonly UIInitialPropertyItem1DecEdit: Locator;
    readonly UIInitialPropertychkbox2: Locator;
    readonly UIInitialPropertyItem2Dropdown: Locator;
    readonly UIInitialPropertyItem2Qtytextbox: Locator;
    readonly UIInitialPropertySize2Dropdown: Locator;
    readonly UIInitialPropertyColor2Dropdown: Locator;
    readonly UIInitialPropertyItem2Dectxtbox: Locator;
    readonly UIInitialPropertySaveButton: Locator;
    readonly UISaveNcloseButton: Locator;
    readonly uIOfficerLookUp: Locator;
    readonly uISaveButton: Locator;
    readonly uIYesButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.UIIssueReasonDropdown = page.locator('#cddissuereason_DropDown');
        this.uIIssuedDateEdit = page.locator('#dttmAction_Date_KPIDttmCtrl');
        this.uIIssuedTimeEdit = page.locator("//table[@id='dttmAction_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.UIOfficerIDEdit = page.locator('#lupOfficer_CodeValue');
        this.UIInitialPropertycheckBox1 = page.locator('#chk1');
        this.UIInitialPropertyItem1Dropdown = page.locator('#cddItem1_DropDown');
        this.uIInitialPropertyItem1QtyEdit = page.locator('#txtQty1');
        this.UIInitialPropertySize1Dropdown = page.locator('#cddShirt_DropDown');
        this.UIInitialPropertyColor1Dropdown = page.locator('#cddColor1_DropDown');
        this.UIInitialPropertyItem1DecEdit = page.locator('#txtDesc1');
        this.UIInitialPropertychkbox2 = page.locator('#chk2');
        this.UIInitialPropertyItem2Dropdown = page.locator('#cddItem2_DropDown');
        this.UIInitialPropertyItem2Qtytextbox = page.locator('#txtQty2');
        this.UIInitialPropertySize2Dropdown = page.locator('#cddPant_DropDown');
        this.UIInitialPropertyColor2Dropdown = page.locator('#cddColor2_DropDown');
        this.UIInitialPropertyItem2Dectxtbox = page.locator('#txtDesc2');
        this.UIInitialPropertySaveButton = page.locator('#cmdSave');
        this.UISaveNcloseButton = page.locator('#cmdSaveNClose');
        this.uIOfficerLookUp = page.locator('#lupOfficer_imgBtn');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIYesButton = page.locator("//button[@class='confirm btn btn-primary']");
    }

    async SelectAtIssueReason(IssueReason: string): Promise<void> {
        await this.UIIssueReasonDropdown.fill(IssueReason);
        await this.UIIssueReasonDropdown.selectOption({ label: IssueReason });
        await this.UIOfficerIDEdit.press('Tab');
    }

    async EnterAtItem1(Quantity1: string, Size1: string, Item1remarks: string): Promise<void> {
        await this.UIInitialPropertycheckBox1.click();
        await this.uIInitialPropertyItem1QtyEdit.fill(Quantity1);
        await this.UIInitialPropertySize1Dropdown.fill(Size1);
        await this.UIInitialPropertyItem1DecEdit.fill(Item1remarks);
    }

    async EnterAtItem2(Quantity2: string, Size2: string, Item2Remarks: string): Promise<void> {
        await this.UIInitialPropertychkbox2.click();
        await this.UIInitialPropertyItem2Qtytextbox.fill(Quantity2);
        await this.UIInitialPropertySize2Dropdown.fill(Size2);
        await this.UIInitialPropertyItem2Dectxtbox.fill(Item2Remarks);
    }

    async ClickSaveButton(): Promise<void> {
        await this.UISaveNcloseButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async IssuedDateAndTime(): Promise<void> {
        await this.uIIssuedDateEdit.press('Tab');
        await this.uIIssuedTimeEdit.press('Tab');
    }

    async clickOfficerLookUpIcon(): Promise<void> {
        await this.uIOfficerLookUp.click();
    }

    async SelectAtIssueReason1(): Promise<void> {
        await this.UIIssueReasonDropdown.selectOption({ label: "Test Automation" });
    }

    async clickItemCheckBox1(): Promise<void> {
        await this.UIInitialPropertycheckBox1.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async selectAtItem1(i: number): Promise<void> {
        await this.UIInitialPropertyItem1Dropdown.selectOption({ label: Item1 });
        await this.UIInitialPropertyItem1Dropdown.press('Tab');
    }

    async selectItem1Checkbox(): Promise<void> {
        await this.UIInitialPropertycheckBox1.click();
    }

    async enterAtDescription1(Description1: string): Promise<void> {
        await this.UIInitialPropertyItem1DecEdit.fill(Description1);
    }

    async selectAtColor1(Color1: string): Promise<void> {
        await this.UIInitialPropertyColor1Dropdown.selectOption({ label: Color1 });
    }

}

export class BuildingSearchPage {
    readonly page: Page;
    readonly uISubAgencyDropdown: Locator;
    readonly uIBuildingDropdown: Locator;
    readonly uIInculdeInactiveCheckBox: Locator;
    readonly uISearchButton: Locator;
    readonly uIAddBuildingLink: Locator;
    readonly uIManageFloorLink: Locator;
    readonly UIBuildingSelectCheckbox: Locator;
    readonly UIBuildingSearchGridTable: Locator;
    readonly uIJurisDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISubAgencyDropdown = page.locator('#cddSubAgency_DropDown');
        this.uIBuildingDropdown = page.locator('#cddBuildingName');
        this.uIInculdeInactiveCheckBox = page.locator('#ChkIsActive');
        this.uISearchButton = page.locator('#cmdSearch');
        this.uIAddBuildingLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Add Building')]");
        this.uIManageFloorLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Manage Floor')]");
        this.UIBuildingSelectCheckbox = page.locator("//div[@id='grdBuilding'] //img[@title='Unchecked']");
        this.UIBuildingSearchGridTable = page.locator("//div[@id='grdBuilding']");
        this.uIJurisDropdown = page.locator('#lstJuris');
    }

    async SelectAtSubAgency(SubAgency: string): Promise<void> {
        await this.uISubAgencyDropdown.fill(SubAgency);
    }

    async SelectAtBuilding(BuildingName: string): Promise<void> {
        await this.uIBuildingDropdown.selectOption({ label: BuildingName });
        await this.uIBuildingDropdown.press('Tab');
    }

    async ClickAddBuiling(): Promise<void> {
        await this.uIAddBuildingLink.click();
    }

    async ClickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async SelectBuildingRecord(): Promise<void> {
        await new GridHelpers(this.page).selectRowCheckboxByCellText(this.UIBuildingSearchGridTable, 'Automation');
    }

    async ClickManageFloorLink(): Promise<void> {
        await this.uIManageFloorLink.click();
    }

    async SelectIncludeInactiveCheckbox(): Promise<void> {
        await this.uIInculdeInactiveCheckBox.click();
    }

    async SelectBuilding(): Promise<void> {
        await this.uIBuildingDropdown.selectOption({ label: "Automation" });
    }

    async SelectBuildingEntryfromGrid(): Promise<void> {
        await this.UIBuildingSearchGridTable.locator('td', { hasText: "SHJ" }).click();
    }

    async SelectSubAgencyMWJBuildingEntryfromGrid(): Promise<void> {
        await this.UIBuildingSearchGridTable.locator('td', { hasText: "MWJ" }).click();
    }

    async SelectSubAgencyMWJRBuildingEntryfromGrid(): Promise<void> {
        await this.UIBuildingSearchGridTable.locator('td', { hasText: "MWJR" }).click();
    }

    async VerifyBuildingCodeIngrid(BuildingCode: string): Promise<void> {
        const code = await new GridHelpers(this.page).getGridCellInnerText(this.UIBuildingSearchGridTable, 'Building Code', 0);
        expect(code).toEqual(BuildingCode);
    }

    async selectAtCheckBoxByBuildingRecord(BuildingName: string): Promise<void> {
        await new GridHelpers(this.page).selectRowCheckboxByCellText(this.UIBuildingSearchGridTable, BuildingName);
    }

    async selectAtJuris(jsonIndex: number): Promise<void> {
        const Juris = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Juris' + jsonIndex);
        await this.uIJurisDropdown.selectOption({ label: Juris });
    }

    async verifyAtBuildingDropdownValues(jsonIndex: number): Promise<void> {
        const Building = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Building' + jsonIndex);
        const options = await this.uIBuildingDropdown.locator('option').allInnerTexts();
        expect(options).toContain(Building);
    }

    async selectAtBuildingCodeInGrid(jsonIndex: number): Promise<void> {
        const BuildingCode = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'BuildingCode' + jsonIndex);
        await this.UIBuildingSearchGridTable.locator('td', { hasText: BuildingCode }).click();
    }

}

export class BuildingEntryPage {
    readonly page: Page;
    readonly uISubAgencydropdown: Locator;
    readonly uICodeEdit: Locator;
    readonly uIBuildingNameEdit: Locator;
    readonly uIInactiveCheckBox: Locator;
    readonly uIInactiveDateEdit: Locator;
    readonly uIRecordsCheckBox: Locator;
    readonly uIHuberCheckBox: Locator;
    readonly uIIsJuvenileCheckBox: Locator;
    readonly uINotSendtoVineCheckBox: Locator;
    readonly uIPrimaryDefaultCheckBox: Locator;
    readonly uINotificationIcon: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIYesButton: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uISupervisorLookUpIcon: Locator;
    readonly uIRFIDTagEdit: Locator;
    readonly uIBarCodeEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISubAgencydropdown = page.locator('#cddSubAgency_DropDown');
        this.uICodeEdit = page.locator('#txtCode');
        this.uIBuildingNameEdit = page.locator('#txtBuildingName');
        this.uIInactiveCheckBox = page.locator('#chkInActive');
        this.uIInactiveDateEdit = page.locator('#txtInActive');
        this.uIRecordsCheckBox = page.locator('#chkRecords');
        this.uIHuberCheckBox = page.locator('#chkHuber');
        this.uIIsJuvenileCheckBox = page.locator('#chkIsJuvenile');
        this.uINotSendtoVineCheckBox = page.locator('#ChkNotToVine');
        this.uIPrimaryDefaultCheckBox = page.locator('#chkPrimaryDefault');
        this.uINotificationIcon = page.locator('#btnNotify');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIYesButton = page.locator("//button[contains(text(),'Yes')]");
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class='statusBar']//b");
        this.uISupervisorLookUpIcon = page.locator('#tabBuilding_tmpl0_UsrMain_lupPFNbr_imgBtn');
        this.uIRFIDTagEdit = page.locator('#tabBuilding_tmpl0_UsrMain_txtRFIDTag');
        this.uIBarCodeEdit = page.locator('#tabBuilding_tmpl0_UsrMain_txtBarCode');
    }

    async SelectAtSubAgency(SubAgency: string): Promise<void> {
        await this.uISubAgencydropdown.fill(SubAgency);
    }

    async EnterAtCode(BuildingCode: string): Promise<void> {
        await this.uICodeEdit.fill(BuildingCode);
        await this.uICodeEdit.press('Tab');
    }

    async EnterAtBuildingName(BuildingName: string): Promise<void> {
        await this.uIBuildingNameEdit.fill(BuildingName);
        await this.uIBuildingNameEdit.press('Tab');
    }

    async SelectRecordsCheckbox(): Promise<void> {
        await this.uIRecordsCheckBox.click();
    }

    async SelectHuberCheckbox(): Promise<void> {
        await this.uIHuberCheckBox.click();
    }

    async SelectIsjuvenileCheckbox(): Promise<void> {
        await this.uIIsJuvenileCheckBox.click();
    }

    async SelectNotSendtoVineCheckbox(): Promise<void> {
        await this.uINotSendtoVineCheckBox.click();
    }

    async SelectPrimaryDefaultCheckbox(): Promise<void> {
        await this.uIPrimaryDefaultCheckBox.click();
    }

    async VerifyPrimaryDefaultCheckboxDisabled(): Promise<void> {
        await expect(this.uIPrimaryDefaultCheckBox).toBeVisible();
    }

    async SelectInactiveCheckbox(): Promise<void> {
        await this.uIInactiveCheckBox.click();
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async ClickSaveNCloseButton(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async ClickNotificationIcon(): Promise<void> {
        await this.uINotificationIcon.click();
    }

    async NavigateToMainTab(): Promise<void> {
        await this.uINavigateToMainTab.click();
    }

    async NavigateToDefaultsTab(): Promise<void> {
        await this.uINavigateToDefaultsTab.click();
    }

}

export class BuildingMainTabPage {
    readonly page: Page;
    readonly uINavigateToMainTab: Locator;
    readonly uIAddressEdit: Locator;
    readonly uICSZCityEdit: Locator;
    readonly uIStateDropdown: Locator;
    readonly uIZipEdit: Locator;
    readonly uIPhoenType1Dropdown: Locator;
    readonly uIPhoenNo1Edit: Locator;
    readonly uIPhoenType2Dropdown: Locator;
    readonly uIPhoenNo2Edit: Locator;
    readonly uISupervisorEdit: Locator;
    readonly uIBedCountEdit: Locator;
    readonly uIMaxInmateCountEdit: Locator;
    readonly uINotesEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToMainTab = page.locator("//div[@id='tabBuilding'] //span[contains(text(),'Main')]");
        this.uIAddressEdit = page.locator('#tabBuilding_tmpl0_UsrMain_adrMainAddress_txtFrom');
        this.uICSZCityEdit = page.locator('#tabBuilding_tmpl0_UsrMain_custHeaderCSZ_City');
        this.uIStateDropdown = page.locator('#tabBuilding_tmpl0_UsrMain_custHeaderCSZ_State_DropDown');
        this.uIZipEdit = page.locator('#tabBuilding_tmpl0_UsrMain_custHeaderCSZ_Zip');
        this.uIPhoenType1Dropdown = page.locator('#tabBuilding_tmpl0_UsrMain_cusPhone1_PhoneType_DropDown');
        this.uIPhoenNo1Edit = page.locator('#tabBuilding_tmpl0_UsrMain_cusPhone1_PhoneNumber');
        this.uIPhoenType2Dropdown = page.locator('#tabBuilding_tmpl0_UsrMain_cusPhone2_PhoneType_DropDown');
        this.uIPhoenNo2Edit = page.locator('#tabBuilding_tmpl0_UsrMain_cusPhone2_PhoneNumber');
        this.uISupervisorEdit = page.locator('#tabBuilding_tmpl0_UsrMain_lupPFNbr_CodeValue');
        this.uIBedCountEdit = page.locator('#tabBuilding_tmpl0_UsrMain_txtBeds');
        this.uIMaxInmateCountEdit = page.locator('#tabBuilding_tmpl0_UsrMain_txtInmate');
        this.uINotesEdit = page.locator('#tabBuilding_tmpl0_UsrMain_txtNotes');
    }

    async EnterAtAddress(Address: string, State: string, ZIP: string, City: string): Promise<void> {
        await this.uIAddressEdit.fill(Address);
        await this.uIAddressEdit.press('Tab');
            }

    async EnterAtPhoneNumber(PhoenType1: string, Phone1: string, PhoenType2: string, Phone2: string): Promise<void> {
        await this.uIPhoenType1Dropdown.selectOption({ label: PhoenType1 });
        await this.uIPhoenNo1Edit.fill(Phone1);
        await this.uIPhoenType2Dropdown.selectOption({ label: PhoenType2 });
        await this.uIPhoenNo2Edit.fill(Phone2);
    }

    async EnterAtSupervisor(Supervisor: string): Promise<void> {
        await this.uISupervisorEdit.fill(Supervisor);
    }

    async EnterAtBedCount(BedCount: string): Promise<void> {
        await this.uIBedCountEdit.fill(BedCount);
    }

    async EnterAtMaxInmateCount(MaxInmateCount: string): Promise<void> {
        await this.uIMaxInmateCountEdit.fill(MaxInmateCount);
    }

    async EnterAtNotes(Notes: string): Promise<void> {
        await this.uINotesEdit.fill(Notes);
    }

    async ClickSupervisorLookUpIcon(): Promise<void> {
        await this.uISupervisorLookUpIcon.click();
    }

    async verifyAdditionSuccessFullMessage(): Promise<void> {
        expect(await this.uIBottomLeftSideStatusBar.innerText()).toEqual("1002 - Addition Successful");
    }

    async enterAtRFIDTag(jsonIndex: number): Promise<void> {
        const RFIDTag = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'RFIDTag' + jsonIndex);
        await this.uIRFIDTagEdit.fill(RFIDTag);
    }

    async enterAtBarCode(jsonIndex: number): Promise<void> {
        const BarCode = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'BarCode' + jsonIndex);
        await this.uIBarCodeEdit.fill(BarCode);
    }

    async verifyRFIDTagFieldIsDisplayed(): Promise<void> {
        expect(await this.uIRFIDTagEdit.isVisible()).toBeTruthy();
    }

    async verifyBarCodeFieldIsDisplayed(): Promise<void> {
        expect(await this.uIBarCodeEdit.isVisible()).toBeTruthy();
    }

    async verifyAtRFIDTag(jsonIndex: number): Promise<void> {
        const RFIDTag = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'RFIDTag' + jsonIndex);
        expect(await this.uIRFIDTagEdit.getAttribute('value')).toEqual(RFIDTag);
    }

    async verifyAtBarCode(jsonIndex: number): Promise<void> {
        const BarCode = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'BarCode' + jsonIndex);
        expect(await this.uIBarCodeEdit.getAttribute('value')).toEqual(BarCode);
    }

}

export class BuildingDefaultTabPage {
    readonly page: Page;
    readonly uINavigateToDefaultsTab: Locator;
    readonly uIDefaultMaleHoldingCellDropdown: Locator;
    readonly uIBiometricStorageFloderEdit: Locator;
    readonly uIMugSearchStorageFloderEdit: Locator;
    readonly uIBiometricTypeDropdown: Locator;
    readonly uIPictureInterfaceConnectionEdit: Locator;
    readonly uIPictureInterfaceTypeDropdown: Locator;
    readonly uIDefaultFemaleHoldingCellDropdown: Locator;
    readonly uIBiometricStorageFloder2Edit: Locator;
    readonly uIBiometricLiveScanType2Dropdown: Locator;
    readonly uINISTWebServiceURLEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToDefaultsTab = page.locator("//div[@id='tabBuilding'] //span[contains(text(),'Defaults')]");
        this.uIDefaultMaleHoldingCellDropdown = page.locator('#tabBuilding_tmpl1_UsrDefaults_param_4412_Dyn_DropDown');
        this.uIBiometricStorageFloderEdit = page.locator('#tabBuilding_tmpl1_UsrDefaults_param_4423_Dyn');
        this.uIMugSearchStorageFloderEdit = page.locator('#tabBuilding$tmpl1$UsrDefaults$param_4424_Dyn');
        this.uIBiometricTypeDropdown = page.locator('#tabBuilding_tmpl1_UsrDefaults_param_4425_Dyn_DropDown');
        this.uIPictureInterfaceConnectionEdit = page.locator('#tabBuilding_tmpl1_UsrDefaults_param_4426_Dyn');
        this.uIPictureInterfaceTypeDropdown = page.locator('#tabBuilding_tmpl1_UsrDefaults_param_4427_Dyn_DropDown');
        this.uIDefaultFemaleHoldingCellDropdown = page.locator('#tabBuilding_tmpl1_UsrDefaults_param_4429_Dyn_DropDown');
        this.uIBiometricStorageFloder2Edit = page.locator('#tabBuilding_tmpl1_UsrDefaults_param_4454_Dyn');
        this.uIBiometricLiveScanType2Dropdown = page.locator('#tabBuilding_tmpl1_UsrDefaults_param_4455_Dyn_DropDown');
        this.uINISTWebServiceURLEdit = page.locator('#tabBuilding_tmpl1_UsrDefaults_param_4456_Dyn');
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
    }

    async verifyAdditionSuccessFullMessage(): Promise<void> {
        expect(await this.uIBottomLeftSideStatusBar.innerText()).toEqual("1002 - Addition Successful");
    }

    async SaveWithConfirmMessage(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do You Want To Save All Of The Entered Details?');
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

}

export class FloorConfigPage {
    readonly page: Page;
    readonly uICodeEdit: Locator;
    readonly uIFloorAliasEdit: Locator;
    readonly uIImageFileEdit: Locator;
    readonly uIInactiveCheckBox: Locator;
    readonly uIInactiveDateEdit: Locator;
    readonly uIPodIcon: Locator;
    readonly uIConfigIcon: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uISaveButton: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIRefreshIcon: Locator;
    readonly uIYesButton: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIFloorConfigGrid: Locator;
    readonly uIRFIDTagEdit: Locator;
    readonly uIBarCodeEdit: Locator;
    readonly uIFloorConfigTable: Locator;
    readonly uIRiskLevelDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uICodeEdit = page.locator('#txtCode');
        this.uIFloorAliasEdit = page.locator('#txtFloorAlias');
        this.uIImageFileEdit = page.locator('#txtImageFile');
        this.uIInactiveCheckBox = page.locator('#chkInActive');
        this.uIInactiveDateEdit = page.locator('#txtInActiveDttm');
        this.uIPodIcon = page.locator("//div[@id='grdCellBidding']//td[@class='PodStyle']");
        this.uIConfigIcon = page.locator("//div[@id='grdCellBidding']//td[@class='ConStyle ig_BlueThemeSelected igg_BlueThemeSelectedCell igg_BlueThemeActiveCell']");
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIClearButton = page.locator('#cmdClear');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIPrintIcon = page.locator('#cmdPrint');
        this.uIRefreshIcon = page.locator('#cmdRefresh');
        this.uIYesButton = page.locator("//button[contains(text(),'Yes')]");
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class='statusBar']//b");
        this.uIFloorConfigGrid = page.locator('#grdCellBidding');
        this.uIRFIDTagEdit = page.locator('#txtRFIDTag');
        this.uIBarCodeEdit = page.locator('#txtBarCode');
        this.uIFloorConfigTable = page.locator('#grdCellBidding');
        this.uIRiskLevelDropdown = page.locator('#cddRiskLevel_DropDown');
    }

    async EnterAtCode(FloorCode: string): Promise<void> {
        await this.uICodeEdit.fill(FloorCode);
    }

    async EnterAtFloorAlias(FloorAlias: string): Promise<void> {
        await this.uIFloorAliasEdit.fill(FloorAlias);
    }

    async EnterAtImageFile(ImageFile: string): Promise<void> {
        await this.uIImageFileEdit.fill(ImageFile);
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async ClickClearButton(): Promise<void> {
        await this.uIClearButton.click();
    }

    async ClickInactiveCheckBox(): Promise<void> {
        await this.uIInactiveCheckBox.click();
    }

    async ClickPodIcon(): Promise<void> {
        await this.uIPodIcon.click();
    }

    async ClickConfigIcon(): Promise<void> {
        await this.uIConfigIcon.click();
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).uIModalFooterYesButton.click();
    }

    async verifyUpdateSuccessFullMessage(): Promise<void> {
        expect(await this.uIBottomLeftSideStatusBar.innerText()).toEqual("1003 - Update Successful");
    }

    async selectAtCodeInGrid(Code: string): Promise<void> {
        await new GridHelpers(this.page).selectRowByCellText(this.uIFloorConfigGrid, Code);
    }

    async verify1784UpdatedDataExistsAcknowledge(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('(1784) Updated data exists in the fields. Add or Update the data to the grid, or Clear the fields.');
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async enterAtRFIDTag(jsonIndex: number): Promise<void> {
        const RFIDTag = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'RFIDTag' + jsonIndex);
        await this.uIRFIDTagEdit.fill(RFIDTag);
    }

    async enterAtBarCode(jsonIndex: number): Promise<void> {
        const BarCode = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'BarCode' + jsonIndex);
        await this.uIBarCodeEdit.fill(BarCode);
    }

    async verifyRFIDTagFieldIsDisplayed(): Promise<void> {
        expect(await this.uIRFIDTagEdit.isVisible()).toBeTruthy();
    }

    async verifyBarCodeFieldIsDisplayed(): Promise<void> {
        expect(await this.uIBarCodeEdit.isVisible()).toBeTruthy();
    }

    async verifyAtRiskLevelInGrid(jsonIndex: number): Promise<void> {
        const RiskLevel = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'RiskLevel' + jsonIndex);
        const riskLevel = await new GridHelpers(this.page).getGridCellInnerText(this.uIFloorConfigTable, 'Risk Level', 0);
        expect(riskLevel, "Risk level value is not same as expected -->").toEqual(RiskLevel);
    }

    async verifyRiskLevelIsDisplayed(): Promise<void> {
        expect(await this.uIRiskLevelDropdown.isVisible()).toBeTruthy();
    }

    async selectAtRiskLevel(jsonIndex: number): Promise<void> {
        const RiskLevel = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'RiskLevel' + jsonIndex);
        await this.uIRiskLevelDropdown.selectOption({ label: RiskLevel });
    }

    async verifyAtRFIDTag(jsonIndex: number): Promise<void> {
        const RFIDTag = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'RFIDTag' + jsonIndex);
        expect(await this.uIRFIDTagEdit.getAttribute('value')).toEqual(RFIDTag);
    }

    async verifyAtBarCode(jsonIndex: number): Promise<void> {
        const BarCode = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'BarCode' + jsonIndex);
        expect(await this.uIBarCodeEdit.getAttribute('value')).toEqual(BarCode);
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async clearFloorAlias(): Promise<void> {
        await this.uIFloorAliasEdit.clear();
    }

    async verifyAtFloorAliasInGrid(jsonIndex: number): Promise<void> {
        const FloorAlias = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'FloorAlias' + jsonIndex);
        const floorAlias = await new GridHelpers(this.page).getGridCellInnerText(this.uIFloorConfigTable, 'Floor Alias', 0);
        expect(floorAlias, "Floor Alias is not same as expected -->").toEqual(FloorAlias);
    }

    async verifyAtPodIconInGridByUsingFloorAlias(jsonIndex: number): Promise<void> {
        const FloorAlias = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'FloorAlias' + jsonIndex);
        const podIcon = await new GridHelpers(this.page).getGridCell(this.uIFloorConfigTable, FloorAlias, 'Pod');
        const classAttr = await podIcon.getAttribute('class');
        expect(classAttr).toContain('PodStyle');
    }

    async clickAtPodIconInGridByUsingFloorAlias(jsonIndex: number): Promise<void> {
        const FloorAlias = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'FloorAlias' + jsonIndex);
        const podIcon = await new GridHelpers(this.page).getGridCell(this.uIFloorConfigTable, FloorAlias, 'Pod');
        await podIcon.click();
    }

}

export class BuildingPodPage {
    readonly page: Page;
    readonly uISelectPodCheckBox: Locator;
    readonly uIManageCellsLink: Locator;
    readonly uIAddpodLink: Locator;
    readonly uIPrintButton: Locator;
    readonly uIExcelButton: Locator;
    readonly uIBuildingPodGrid: Locator;
    readonly uIAddPodLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISelectPodCheckBox = page.locator('#grdBuildingPod');
        this.uIManageCellsLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Manage Cells')]");
        this.uIAddpodLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Add Pod')]");
        this.uIPrintButton = page.locator("//div[@id='tlbGridItem'] //img[@alt='Print']");
        this.uIExcelButton = page.locator("//div[@id='tlbGridItem'] //img[@alt='Export To Excel']");
        this.uIBuildingPodGrid = page.locator('#grdBuildingPod');
        this.uIAddPodLink = page.locator("//span[text()='Add Pod']");
    }

    async SelectPodCheckbox(): Promise<void> {
        await new GridHelpers(this.page).selectRowCheckboxByCellText(this.uISelectPodCheckBox, 'Test Automation');
    }

    async ClickManageCells(): Promise<void> {
        await this.uIManageCellsLink.click();
    }

    async SelectAddPod(): Promise<void> {
        await this.uIAddpodLink.click();
    }

    async SelectPrintIcon(): Promise<void> {
        await this.uIPrintButton.click();
    }

    async selectAtPodNameInGrid(PodName: string): Promise<void> {
        await new GridHelpers(this.page).selectRowByCellText(this.uIBuildingPodGrid, PodName);
    }

    async clickAddPod(): Promise<void> {
        await this.uIAddPodLink.click();
    }

    async selectAtPodCheckboxByPodName(jsonIndex: number): Promise<void> {
        const PodName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'PodName' + jsonIndex);
        await new GridHelpers(this.page).selectRowCheckboxByCellText(this.uISelectPodCheckBox, PodName);
    }

    async verifyAtPodCode(jsonIndex: number): Promise<void> {
        const PodCode = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'PodCode' + jsonIndex);
        const podCode = await new GridHelpers(this.page).getGridCellInnerText(this.uIBuildingPodGrid, 'Pod Code', 0);
        expect(podCode,"Pod code is not same as expected -->").toEqual(PodCode);
    }

    async verifyAtPodAlias(jsonIndex: number): Promise<void> {
        const PodAlias = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'PodAlias' + jsonIndex);
        const podAlias = await new GridHelpers(this.page).getGridCellInnerText(this.uIBuildingPodGrid, 'Pod Alias', 0);
        expect(podAlias,"Pod alias is not same as expected -->").toEqual(PodAlias);
    }

    async verifyAtPodName(jsonIndex: number): Promise<void> {
        expect(podName,"Pod name is not same as expected -->").toEqual(PodName);
    }

}

export class BuildingPodEntryPage {
    readonly page: Page;
    readonly uICodeEdit: Locator;
    readonly uIPodAliasEdit: Locator;
    readonly uIPodNameEdit: Locator;
    readonly uIImageFileEdit: Locator;
    readonly uINoofCellsEdit: Locator;
    readonly uIJuvenileAllowedCheckBox: Locator;
    readonly uINotesEdit: Locator;
    readonly uIInactiveCheckBox: Locator;
    readonly uIOccupantTypesDropdown: Locator;
    readonly uIOccupantAddButton: Locator;
    readonly uIOccupantClearButton: Locator;
    readonly uIClassificationDropdown: Locator;
    readonly uIClassificationAddButton: Locator;
    readonly uIClassificationClearButton: Locator;
    readonly uICameraEdit: Locator;
    readonly uICameraAddButton: Locator;
    readonly uICameraClearButton: Locator;
    readonly uISaveButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIYesButton: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIOccupantTypesGrid: Locator;
    readonly uIClassificationGrid: Locator;
    readonly uIRiskLevelDropdown: Locator;
    readonly uIRFIDTagEdit: Locator;
    readonly uIBarCodeEdit: Locator;
    readonly uICameraGrid: Locator;
    readonly uIBuildingCodeEdit: Locator;
    readonly uIBuildingNameEdit: Locator;
    readonly uIFloorCodeEdit: Locator;
    readonly uIFloorNameEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uICodeEdit = page.locator('#txtCode');
        this.uIPodAliasEdit = page.locator('#txtAlias');
        this.uIPodNameEdit = page.locator('#txtPod');
        this.uIImageFileEdit = page.locator('#txtImgFile');
        this.uINoofCellsEdit = page.locator('#txtCellNumber');
        this.uIJuvenileAllowedCheckBox = page.locator('#chkJuv');
        this.uINotesEdit = page.locator('#txtNotes');
        this.uIInactiveCheckBox = page.locator('#chkInActive');
        this.uIOccupantTypesDropdown = page.locator('#cddOccupant_DropDown');
        this.uIOccupantAddButton = page.locator('#cmdAddOcc');
        this.uIOccupantClearButton = page.locator('#cmdClearOcc');
        this.uIClassificationDropdown = page.locator('#cddClassification_DropDown');
        this.uIClassificationAddButton = page.locator('#cmdAddClass');
        this.uIClassificationClearButton = page.locator('#cmdClearClass');
        this.uICameraEdit = page.locator('#lupCamera_CodeValue');
        this.uICameraAddButton = page.locator('#cmdAddCam');
        this.uICameraClearButton = page.locator('#cmdClearCam');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIYesButton = page.locator("//button[contains(text(),'Yes')]");
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class='statusBar']//b");
        this.uIOccupantTypesGrid = page.locator('#grdOccupant');
        this.uIClassificationGrid = page.locator('#grdClassification');
        this.uIRiskLevelDropdown = page.locator('#cddRiskLevel_DropDown');
        this.uIRFIDTagEdit = page.locator('#txtRFIDTag');
        this.uIBarCodeEdit = page.locator('#txtBarCode');
        this.uICameraGrid = page.locator('#grdCamera');
        this.uIBuildingCodeEdit = page.locator('#txtBuildCode');
        this.uIBuildingNameEdit = page.locator('#txtBuildName');
        this.uIFloorCodeEdit = page.locator('#txtFloorCode');
        this.uIFloorNameEdit = page.locator('#txtFloorName');
    }

    async EnterAtCode(Code: string): Promise<void> {
        await this.uICodeEdit.fill(Code);
        await this.uICodeEdit.press('Tab');
    }

    async EnterAtPodName(PodName: string): Promise<void> {
        await this.uIPodNameEdit.fill(PodName);
    }

    async EnterAtImageFile(ImageFile: string): Promise<void> {
        await this.uIImageFileEdit.fill(ImageFile);
    }

    async EnterAtNoOfCells(NoOfCells: string): Promise<void> {
        await this.uINoofCellsEdit.fill(NoOfCells);
    }

    async EnterAtNotes(Notes: string): Promise<void> {
        await this.uINotesEdit.fill(Notes);
    }

    async SelectJuvenileAllowedcheckBox(): Promise<void> {
        await this.uIJuvenileAllowedCheckBox.click();
    }

    async SelectInactiveCheckBox(): Promise<void> {
        await this.uIInactiveCheckBox.click();
    }

    async SelectAtOccupantTypes(OccupantTypes: string): Promise<void> {
        await this.uIOccupantTypesDropdown.selectOption({ label: OccupantTypes });
    }

    async ClickOccupantAddButton(): Promise<void> {
        await this.uIOccupantAddButton.click();
    }

    async ClickOccupantClearButton(): Promise<void> {
        await this.uIOccupantClearButton.click();
    }

    async SelectAtClassification(Classification: string): Promise<void> {
        await this.uIClassificationDropdown.selectOption({ label: Classification });
    }

    async ClickClassAddButton(): Promise<void> {
        await this.uIClassificationAddButton.click();
    }

    async ClickClassClearButton(): Promise<void> {
        await this.uIClassificationClearButton.click();
    }

    async SelectAtCamera(Camera: string): Promise<void> {
        await this.uICameraEdit.fill(Camera);
    }

    async ClickCameraAddButton(): Promise<void> {
        await this.uICameraAddButton.click();
    }

    async ClickCameraClearButton(): Promise<void> {
        await this.uICameraClearButton.click();
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
    }

    async verifyAdditionSuccessFullMessage(): Promise<void> {
        expect(await this.uIBottomLeftSideStatusBar.innerText()).toEqual("1002 - Addition Successful");
    }

    async selectAtOccupantTypeInGrid(OccupantType: string): Promise<void> {
        await new GridHelpers(this.page).selectRowByCellText(this.uIOccupantTypesGrid, OccupantType);
    }

    async verifyAtOccupantTypeInGrid(OccupantType: string): Promise<void> {
        const cell = await new GridHelpers(this.page).getGridCell(this.uIOccupantTypesGrid, OccupantType, 'Occupant Types');
        expect(await cell.innerText(), "Occupant Type is not same in grid-->").toEqual(OccupantType);
    }

    async verify1784UpdatedDataExistAcknowledge(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('(1784) Updated data exists in the fields. Add or Update the data to the grid, or Clear the fields.');
    }

    async clickOccupantUpdateButton(): Promise<void> {
        await this.uIOccupantAddButton.click();
    }

    async verifyAtClassificationInGrid(Classification: string): Promise<void> {
        await expect(this.uIClassificationGrid).toContainText(Classification);
    }

    async selectAtClassificationInGrid(Classification: string): Promise<void> {
        await new GridHelpers(this.page).selectRowByCellText(this.uIClassificationGrid, Classification);
    }

    async clickClassUpdateButton(): Promise<void> {
        await this.uIClassificationAddButton.click();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verifyAtRiskLevelIsDisplayed(): Promise<void> {
        expect(await this.uIRiskLevelDropdown.isVisible()).toBeTruthy();
    }

    async selectAtRiskLevel(jsonIndex: number): Promise<void> {
        const RiskLevel = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'RiskLevel' + jsonIndex);
        await this.uIRiskLevelDropdown.selectOption({ label: RiskLevel });
    }

    async enterAtRFIDTag(jsonIndex: number): Promise<void> {
        const RFIDTag = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'RFIDTag' + jsonIndex);
        await this.uIRFIDTagEdit.fill(RFIDTag);
    }

    async enterAtBarCode(jsonIndex: number): Promise<void> {
        const BarCode = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'BarCode' + jsonIndex);
        await this.uIBarCodeEdit.fill(BarCode);
    }

    async verifyAtRFIDTagFieldIsDisplayed(): Promise<void> {
        expect(await this.uIRFIDTagEdit.isVisible()).toBeTruthy();
    }

    async verifyAtBarCodeIsDisplayed(): Promise<void> {
        expect(await this.uIBarCodeEdit.isVisible()).toBeTruthy();
    }

    async verifyAtRiskLevel(jsonIndex: number): Promise<void> {
        const RiskLevel = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'RiskLevel' + jsonIndex);
        const selectedItem = await new ElementHelpers(this.page).getDropDownSelectedItem(this.uIRiskLevelDropdown);
        expect(selectedItem, "Risk level option is not as expected -->").toEqual(RiskLevel);
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async verifyAtRFIDTag(jsonIndex: number): Promise<void> {
        const RFIDTag = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'RFIDTag' + jsonIndex);
        expect(await this.uIRFIDTagEdit.getAttribute('value')).toEqual(RFIDTag);
    }

    async verifyAtBarCode(jsonIndex: number): Promise<void> {
        const BarCode = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'BarCode' + jsonIndex);
        expect(await this.uIBarCodeEdit.getAttribute('value')).toEqual(BarCode);
    }

    async enterAtCode(jsonIndex: number): Promise<void> {
        const Code = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Code' + jsonIndex);
        await this.uICodeEdit.fill(Code);
    }

    async enterAtCamera(jsonIndex: number): Promise<void> {
        const Camera = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Camera' + jsonIndex);
        await this.uICameraEdit.fill(Camera);
        await this.uICameraEdit.press('Tab');
    }

    async verifyAtCameraInGrid(jsonIndex: number): Promise<void> {
        const Camera = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Camera' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCellInnerText(this.uICameraGrid, 'Camera', 0);
        expect(cell).toEqual(Camera);
    }

    async verifyAtBuildingCode(jsonIndex: number): Promise<void> {
        const BuildingCode = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'BuildingCode' + jsonIndex);
        expect(await this.uIBuildingCodeEdit.inputValue()).toEqual(BuildingCode);
    }

    async verifyAtBuildingName(jsonIndex: number): Promise<void> {
        const BuildingName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'BuildingName' + jsonIndex);
        expect(await this.uIBuildingNameEdit.inputValue()).toEqual(BuildingName);
    }

    async verifyAtFloorCode(jsonIndex: number): Promise<void> {
        const FloorCode = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'FloorCode' + jsonIndex);
        expect(await this.uIFloorCodeEdit.inputValue()).toEqual(FloorCode);
    }

    async verifyAtFloorName(jsonIndex: number): Promise<void> {
        const FloorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'FloorName' + jsonIndex);
        expect(await this.uIFloorNameEdit.inputValue()).toEqual(FloorName);
    }

}

export class CellNumberEntryPage {
    readonly page: Page;
    readonly uICellNumberEdit: Locator;
    readonly uICellAliasEdit: Locator;
    readonly uICellTypeDropdown: Locator;
    readonly uICellSecurityDropdown: Locator;
    readonly uICellSexTypeDropdown: Locator;
    readonly uITotalBedsEdit: Locator;
    readonly uIExceedBedCountAllowedCheckBox: Locator;
    readonly uICameraEdit: Locator;
    readonly uINotesEdit: Locator;
    readonly uIInactiveCheckBox: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uICellNumberGrid: Locator;
    readonly uIBedAdminIcon: Locator;
    readonly uISaveButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIYesButton: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIRiskLevelDropdown: Locator;
    readonly uIRFIDTagEdit: Locator;
    readonly uIBarCodeEdit: Locator;
    readonly uICellNumberEntryGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uICellNumberEdit = page.locator('#txtCellNumber');
        this.uICellAliasEdit = page.locator('#txtAlias');
        this.uICellTypeDropdown = page.locator('#cddCellType_DropDown');
        this.uICellSecurityDropdown = page.locator('#cddCellSecurity_DropDown');
        this.uICellSexTypeDropdown = page.locator('#cddCellSexType_DropDown');
        this.uITotalBedsEdit = page.locator('#txtBeds');
        this.uIExceedBedCountAllowedCheckBox = page.locator('#chkBedCount');
        this.uICameraEdit = page.locator('#lupCamera_CodeValue');
        this.uINotesEdit = page.locator('#txtNotes');
        this.uIInactiveCheckBox = page.locator('#chkInActive');
        this.uIAddButton = page.locator('#cmdAddCell');
        this.uIClearButton = page.locator('#cmdClearCell');
        this.uICellNumberGrid = page.locator('#grdCellNumber');
        this.uIBedAdminIcon = page.locator("//div[@id='grdCellNumber'] //td[@class='CellIDimg']");
        this.uISaveButton = page.locator('#cmdSave');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIYesButton = page.locator("//button[contains(text(),'Yes')]");
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class='statusBar']//b");
        this.uIRiskLevelDropdown = page.locator('#cddRiskLevel_DropDown');
        this.uIRFIDTagEdit = page.locator('#txtRFIDTag');
        this.uIBarCodeEdit = page.locator('#txtBarCode');
        this.uICellNumberEntryGrid = page.locator('#grdCellNumber');
    }

    async EnterAtCellNumber(CellNumber: string): Promise<void> {
        await this.uICellNumberEdit.fill(CellNumber);
        await this.uICellNumberEdit.press('Tab');
    }

    async EnterAtCellAlias(CellAlias: string): Promise<void> {
        await this.uICellAliasEdit.fill(CellAlias);
    }

    async SelectAtCellType(CellType: string): Promise<void> {
        await this.uICellTypeDropdown.selectOption({ label: CellType });
    }

    async SelectAtCellSecurity(CellSecurity: string): Promise<void> {
        await this.uICellSecurityDropdown.selectOption({ label: CellSecurity });
    }

    async SelectAtCellSexType(CellSexType: string): Promise<void> {
        await this.uICellSexTypeDropdown.selectOption({ label: CellSexType });
    }

    async EnterAtTotalBeds(TotalBeds: string): Promise<void> {
        await this.uITotalBedsEdit.fill(TotalBeds);
    }

    async SelectExceedBedCountcheckbox(): Promise<void> {
        await this.uIExceedBedCountAllowedCheckBox.click();
    }

    async EnterAtCamera(Camera: string): Promise<void> {
        await this.uICameraEdit.fill(Camera);
    }

    async EnterAtNotes(Notes: string): Promise<void> {
        await this.uINotesEdit.fill(Notes);
    }

    async SelectInactiveCheckbox(): Promise<void> {
        await this.uIExceedBedCountAllowedCheckBox.click();
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async ClickClearButton(): Promise<void> {
        await this.uIClearButton.click();
    }

    async ClickBedIcon(): Promise<void> {
        await this.uIBedAdminIcon.click();
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
    }

    async verifyUpdateSuccessFullMessage(): Promise<void> {
        expect(await this.uIBottomLeftSideStatusBar.innerText()).toEqual("1003 - Update Successful");
    }

    async selectAtRiskLevel(jsonIndex: number): Promise<void> {
        const RiskLevel = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'RiskLevel' + jsonIndex);
        await this.uIRiskLevelDropdown.selectOption({ label: RiskLevel });
    }

    async enterAtRFIDTag(jsonIndex: number): Promise<void> {
        const RFIDTag = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'RFIDTag' + jsonIndex);
        await this.uIRFIDTagEdit.fill(RFIDTag);
    }

    async enterAtBarCode(jsonIndex: number): Promise<void> {
        const BarCode = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'BarCode' + jsonIndex);
        await this.uIBarCodeEdit.fill(BarCode);
    }

    async verifyRiskLevelIsDisplayed(): Promise<void> {
        expect(await this.uIRiskLevelDropdown.isVisible()).toBeTruthy();
    }

    async verifyRFIDTagIsDisplayed(): Promise<void> {
        expect(await this.uIRFIDTagEdit.isVisible()).toBeTruthy();
    }

    async verifyBarCodeIsDisplayed(): Promise<void> {
        expect(await this.uIBarCodeEdit.isVisible()).toBeTruthy();
    }

    async verifyAtRiskLevelInGrid(jsonIndex: number): Promise<void> {
        const RiskLevel = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'RiskLevel' + jsonIndex);
        const riskLevel = await new GridHelpers(this.page).getGridCellInnerText(this.uICellNumberGrid, 'Risk Level', 0);
        expect(riskLevel, "Risk level in grid is not same as expected-->").toEqual(RiskLevel);
    }

    async selectAtCellNumberInGrid(jsonIndex: number): Promise<void> {
        const CellNumber = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'CellNumber' + jsonIndex);
        await new GridHelpers(this.page).selectRowByCellText(this.uICellNumberEntryGrid, CellNumber);
    }

    async verifyAtRFIDTag(jsonIndex: number): Promise<void> {
        const RFIDTag = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'RFIDTag' + jsonIndex);
        expect(await this.uIRFIDTagEdit.getAttribute('value')).toEqual(RFIDTag);
    }

    async verifyAtBarCode(jsonIndex: number): Promise<void> {
        const BarCode = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'BarCode' + jsonIndex);
        expect(await this.uIBarCodeEdit.getAttribute('value')).toEqual(BarCode);
    }

    async clearCellAlias(): Promise<void> {
        await this.uICellAliasEdit.clear();
    }

    async verifyAtCellNumbersInGrid(jsonIndex: number): Promise<void> {
        const CellNumber = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'CellNumber' + jsonIndex);
        const cellNumber = await new GridHelpers(this.page).getGridCellInnerText(this.uICellNumberGrid, 'Cell Number', 0);
        expect(cellNumber, "Cell Number is not same as expected -->").toEqual(CellNumber);
    }

    async verifyAtCellAliasInGrid(jsonIndex: number): Promise<void> {
        const CellAlias = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'CellAlias' + jsonIndex);
        const cellAlias = await new GridHelpers(this.page).getGridCellInnerText(this.uICellNumberGrid, 'Cell Alias', 0);
        expect(cellAlias, "Cell Alias is not same as expected -->").toEqual(CellAlias);
    }

    async verifyAtTypeInGrid(jsonIndex: number): Promise<void> {
        const Type = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Type' + jsonIndex);
        const type = await new GridHelpers(this.page).getGridCellInnerText(this.uICellNumberGrid, 'Type', 0);
        expect(type, "Type is not same as expected -->").toEqual(Type);
    }

    async verifyAtSexInGrid(jsonIndex: number): Promise<void> {
        const Sex = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Sex' + jsonIndex);
        const sex = await new GridHelpers(this.page).getGridCellInnerText(this.uICellNumberGrid, 'Sex', 0);
        expect(sex, "Sex is not same as expected -->").toEqual(Sex);
    }

    async verifyAtBedsInGrid(jsonIndex: number): Promise<void> {
        const Beds = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Beds' + jsonIndex);
        const beds = await new GridHelpers(this.page).getGridCellInnerText(this.uICellNumberGrid, 'Beds', 0);
        expect(beds, "Beds is not same as expected -->").toEqual(Beds);
    }

    async clickBedIconInGridByUsingCellNumber(jsonIndex: number): Promise<void> {
        const CellNumber = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'CellNumber' + jsonIndex);
        const bedIcon = await new GridHelpers(this.page).getGridCell(this.uICellNumberGrid, CellNumber, 'Bed Adm');
        await bedIcon.click();
    }

}

export class CellBiddingPage {
    readonly page: Page;
    readonly uIBedIDEdit: Locator;
    readonly uIDescriptionDropdown: Locator;
    readonly uISortEdit: Locator;
    readonly uIInactiveCheckBox: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIGridTable: Locator;
    readonly uISaveButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIYesButton: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uICellBiddingGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIBedIDEdit = page.locator('#txtBedID');
        this.uIDescriptionDropdown = page.locator('#cddDesc_DropDown');
        this.uISortEdit = page.locator('#txtSort');
        this.uIInactiveCheckBox = page.locator('#chkInActive');
        this.uIAddButton = page.locator('#cmdAddCell');
        this.uIClearButton = page.locator('#cmdClearCell');
        this.uIGridTable = page.locator('#grdCellBidding');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIYesButton = page.locator("//button[contains(text(),'Yes')]");
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class='statusBar']//b");
        this.uICellBiddingGrid = page.locator('#grdCellBidding');
    }

    async EnterAtBedID(BedID: string): Promise<void> {
        await this.uIBedIDEdit.fill(BedID);
    }

    async EnterAtDescription(Description: string): Promise<void> {
        await this.uIDescriptionDropdown.selectOption({ label: Description });
    }

    async EnterAtSortOrder(SortOder: string): Promise<void> {
        await this.uISortEdit.fill(SortOder);
    }

    async SelectInactiveCheckbox(): Promise<void> {
        await this.uIInactiveCheckBox.click();
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async ClickClearButton(): Promise<void> {
        await this.uIClearButton.click();
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
    }

    async verifyUpdateSuccessFullMessage(): Promise<void> {
        expect(await this.uIBottomLeftSideStatusBar.innerText()).toEqual("1003 - Update Successful");
    }

    async verifyAtBedIdInGrid(jsonIndex: number): Promise<void> {
        const BedID = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'BedID' + jsonIndex);
        const bedId = await new GridHelpers(this.page).getGridCellInnerText(this.uICellBiddingGrid, 'Bed ID', 0);
        expect(bedId, "Bed Id is not same as expected-->").toEqual(BedID);
    }

    async verifyAtDescriptionGrid(jsonIndex: number): Promise<void> {
        const Description = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Description' + jsonIndex);
        const description = await new GridHelpers(this.page).getGridCellInnerText(this.uICellBiddingGrid, 'Description', 0);
        expect(description, "Description is not same as expected-->").toEqual(Description);
    }

    async close(): Promise<void> {
        await this.page.close();
    }

}

export class BuildingConfigurationPage {
    readonly page: Page;
    readonly uIBuildingDropdown: Locator;
    readonly uIFloorLookupEdit: Locator;
    readonly uIpodLookupEdit: Locator;
    readonly uICellLookupEdit: Locator;
    readonly uITopLeftEdit: Locator;
    readonly uITopRightEdit: Locator;
    readonly uIBottomLeftEdit: Locator;
    readonly uIBottomRightEdit: Locator;
    readonly uIEdit1: Locator;
    readonly uIEdit2: Locator;
    readonly uIInfoDisplayEdit: Locator;
    readonly uIDrawButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIYesButton: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIDiagramPanel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIBuildingDropdown = page.locator('#cddBuilding_DropDown');
        this.uIFloorLookupEdit = page.locator('#lupFloor_CodeValue');
        this.uIpodLookupEdit = page.locator('#lupPod_CodeValue');
        this.uICellLookupEdit = page.locator('#lupCell_CodeValue');
        this.uITopLeftEdit = page.locator('#txtCoOrd1');
        this.uITopRightEdit = page.locator('#txtCoOrd2');
        this.uIBottomLeftEdit = page.locator('#txtCoOrd3');
        this.uIBottomRightEdit = page.locator('#txtCoOrd4');
        this.uIEdit1 = page.locator('#txtCoOrd5');
        this.uIEdit2 = page.locator('#txtCoOrd6');
        this.uIInfoDisplayEdit = page.locator('#txtInfoCoOrdinate');
        this.uIDrawButton = page.locator('#btnDraw');
        this.uISaveButton = page.locator('#btnSave');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uIYesButton = page.locator("//button[contains(text(),'Yes')]");
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']//b");
        this.uIDiagramPanel = page.locator("//div[@id='Draw_div']//div//div");
    }

    async EnterAtBuilding(Building: string): Promise<void> {
        await this.uIBuildingDropdown.fill(Building);
    }

    async EnterAtFloor(Floor: string): Promise<void> {
        await this.uIFloorLookupEdit.click();
        await this.uIFloorLookupEdit.fill(Floor);
        await this.uIFloorLookupEdit.press('Tab');
    }

    async EnterAtPod(Pod: string): Promise<void> {
        await this.uIpodLookupEdit.click();
        await this.uIpodLookupEdit.fill(Pod);
        await this.uIpodLookupEdit.press('Tab');
    }

    async EnterAtCell(Cell: string): Promise<void> {
        await this.uICellLookupEdit.fill(Cell);
        await this.uICellLookupEdit.press('Tab');
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
    }

    async verifyAdditionSuccessFullMessage(): Promise<void> {
        expect(await this.uIBottomLeftSideStatusBar.innerText()).toEqual("1002 - Addition Successful");
    }

    async selectAtBuilding(Building: string): Promise<void> {
        await this.uIBuildingDropdown.selectOption({ label: Building });
    }

    async copyTopLeftValue(): Promise<void> {
        await this.uITopLeftEdit.click();
        await this.uITopLeftEdit.press('Control+a');
        await this.uITopLeftEdit.press('Control+c');
    }

    async clearTopRightField(): Promise<void> {
        await this.uITopRightEdit.click();
        await this.uITopRightEdit.press('Control+a');
        await this.uITopRightEdit.press('Backspace');
    }

    async PasteIntoTopLeftField(): Promise<void> {
        await this.uITopRightEdit.click();
        await this.uITopRightEdit.press('Control+v');
    }

    async verifySaveButtonIsDisplayed(): Promise<void> {
        expect(await this.uISaveButton.isVisible()).toBeTruthy();
    }

    async enterAtTopLeft(jsonIndex: number): Promise<void> {
        const TopLeft = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'TopLeft' + jsonIndex);
        await this.uITopLeftEdit.fill(TopLeft);
    }

    async enterAtTopRight(jsonIndex: number): Promise<void> {
        const TopRight = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'TopRight' + jsonIndex);
        await this.uITopRightEdit.fill(TopRight);
    }

    async enterAtBottomLeft(jsonIndex: number): Promise<void> {
        const BottomLeft = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'BottomLeft' + jsonIndex);
        await this.uIBottomLeftEdit.fill(BottomLeft);
    }

    async enterAtBottomRight(jsonIndex: number): Promise<void> {
        const BottomRight = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'BottomRight' + jsonIndex);
        await this.uIBottomRightEdit.fill(BottomRight);
    }

    async enterAtInfoDisplay(jsonIndex: number): Promise<void> {
        const InfoDisplay = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'InfoDisplay' + jsonIndex);
        await this.uIInfoDisplayEdit.fill(InfoDisplay);
    }

    async verifyDiagramIsGreenColor(color: string): Promise<void> {
        const actualColor = await this.uIDiagramPanel.evaluate(el => getComputedStyle(el).backgroundColor);
        expect(actualColor, "Diagram is not appears as green color -->").toContain('0, 128, 0');
    }

}

export class HousingHistorySearchPage {
    readonly page: Page;
    readonly uIFromDateEdit: Locator;
    readonly uIFromTimeEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIToTimeEdit: Locator;
    readonly uIDateResetIcon: Locator;
    readonly uIBuildingDropdown: Locator;
    readonly uIFloorDropdown: Locator;
    readonly uIPODDropdown: Locator;
    readonly uICellLookUpEdit: Locator;
    readonly uISPNNoEdit: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameIDEdit: Locator;
    readonly uISearchLink: Locator;
    readonly uIAddNewLink: Locator;
    readonly uIResetLink: Locator;
    readonly uIBackLink: Locator;
    readonly uIHousingResultGrid: Locator;
    readonly uICustomRuleIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIFromDateEdit = page.locator('#tabHousingInquiry_tmpl0_UsrHousingInquiry_dttmFromDate_Date_KPIDttmCtrl');
        this.uIFromTimeEdit = page.locator("//table[@id='tabHousingInquiry_tmpl0_UsrHousingInquiry_dttmFromDate_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIToDateEdit = page.locator('#tabHousingInquiry_tmpl0_UsrHousingInquiry_dttmToDate_Date_KPIDttmCtrl');
        this.uIToTimeEdit = page.locator("//table[@id='tabHousingInquiry_tmpl0_UsrHousingInquiry_dttmToDate_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIDateResetIcon = page.locator('#tabHousingInquiry_tmpl0_UsrHousingInquiry_imgClear');
        this.uIBuildingDropdown = page.locator('#tabHousingInquiry_tmpl0_UsrHousingInquiry_cddBuilding_DropDown');
        this.uIFloorDropdown = page.locator('#tabHousingInquiry_tmpl0_UsrHousingInquiry_lstFloor');
        this.uIPODDropdown = page.locator('#tabHousingInquiry_tmpl0_UsrHousingInquiry_lstPod');
        this.uICellLookUpEdit = page.locator('#tabHousingInquiry_tmpl0_UsrHousingInquiry_lupCell_CodeValue');
        this.uISPNNoEdit = page.locator('#tabHousingInquiry_tmpl0_UsrHousingInquiry_txtSPIN');
        this.uINameTypeEdit = page.locator('#tabHousingInquiry_tmpl0_UsrHousingInquiry_HousingNameID_NameType');
        this.uINameIDEdit = page.locator('#tabHousingInquiry_tmpl0_UsrHousingInquiry_HousingNameID_NameTypeID');
        this.uISearchLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Search')]");
        this.uIAddNewLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Add New')]");
        this.uIResetLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Reset')]");
        this.uIBackLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Back')]");
        this.uIHousingResultGrid = page.locator('#grdHousing');
        this.uICustomRuleIcon = page.locator("//table//td[@class='CustomRule1']");
    }

    async EnterFromDateTime(): Promise<void> {
        await this.uIFromDateEdit.press('Tab');
        await this.uIFromTimeEdit.press('Tab');
    }

    async EnterToDateTime(): Promise<void> {
        await this.uIToDateEdit.press('Tab');
        await this.uIToTimeEdit.press('Tab');
    }

    async EnterAtBuilding(Building: string): Promise<void> {
        await this.uIBuildingDropdown.fill(Building);
    }

    async EnterAtFloor(Floor: string): Promise<void> {
        await this.uIFloorDropdown.fill(Floor);
    }

    async EnterAtPOD(POD: string): Promise<void> {
        await this.uIPODDropdown.fill(POD);
    }

    async EnterAtCell(Cell: string): Promise<void> {
        await this.uICellLookUpEdit.fill(Cell);
    }

    async EnterAtSPNNo(SPN: string): Promise<void> {
        await this.uISPNNoEdit.fill(SPN);
    }

    async EnterAtName(NameType: string, NameID: string): Promise<void> {
        await this.uINameTypeEdit.fill(NameType);
        await this.uINameIDEdit.fill(NameID);
        await this.uINameIDEdit.press('Tab');
    }

    async ClickSearchLink(): Promise<void> {
        await this.uISearchLink.click();
    }

    async ClickResetLink(): Promise<void> {
        await this.uIResetLink.click();
    }

    async ClickBackLink(): Promise<void> {
        await this.uIBackLink.click();
    }

    async enterAtFromDate(i: number): Promise<void> {
        const FromDate = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'FromDate' + i);
        await this.uIFromDateEdit.click();
        await this.uIFromDateEdit.clear();
        await this.uIFromDateEdit.fill(FromDate);
        await this.uIFromDateEdit.press('Tab');
    }

    async verifyAtFromDate(i: number): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        const attribute = await this.uIFromDateEdit.getAttribute('value');
        expect(attribute).toEqual(currentDate);
    }

    async verify1036FutureDateNotAllowedAcknowledgePopup(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('(1036) Future Date not allowed');
    }

    async enterAtToDate(i: number): Promise<void> {
        const ToDate = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'ToDate' + i);
        await this.uIToDateEdit.click();
        await this.uIToDateEdit.clear();
        await this.uIToDateEdit.fill(ToDate);
        await this.uIToDateEdit.press('Tab');
    }

    async verifyAtToDate(i: number): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        const attribute = await this.uIToDateEdit.getAttribute('value');
        expect(attribute).toEqual(currentDate);
    }

    async selectAtBuilding(Building: string): Promise<void> {
        await this.uIBuildingDropdown.selectOption({ label: Building });
    }

    async clickAtExpandArrowByDate(Date: string): Promise<void> {
        await this.page.locator(`(//div[@id='grdHousing']//td[text()='${Date}']/parent::tr//td//img)[1]`).click();
    }

    async clickAtExpandArrowByFloorPod(FloorPod: string): Promise<void> {
        await this.page.locator(`(//div[@id='grdHousing_ctl00']//td[text()='${FloorPod}']/parent::tr//td//img)[1]`).click();
    }

    async verifyAtHeaderInGrid(jsonIndex: number): Promise<void> {
        for (let i = 1; i <= jsonIndex; i++) {
            const header = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'headers' + i);
            await expect(this.uIHousingResultGrid).toContainText(header);
        }
    }

    async clickHColumnIconInGrid(Building: string): Promise<void> {
        const table = this.page.locator("//div[@id='grdHousing_ctl00_10-14-25_0_1D DAY ROOM 110-14-25_0']");
        const cell = await new GridHelpers(this.page).getGridCell(table, Building, 'H');
        await cell.click();
    }

}

export class ReleaseSearchPage {
    readonly page: Page;
    readonly uISubAgencyDrodown: Locator;
    readonly uIInmateLastNameEdit: Locator;
    readonly uIInmateFirstNameEdit: Locator;
    readonly uISPNNoEdit: Locator;
    readonly uICMSBookingYearEdit: Locator;
    readonly uICMSBookingNoEdit: Locator;
    readonly uIClockStopCheckBox: Locator;
    readonly uIReleaseFromDateEdit: Locator;
    readonly uIReleaseFromTimeEdit: Locator;
    readonly uIReleaseToDateEdit: Locator;
    readonly uIReleaseToTimeEdit: Locator;
    readonly uIReleaseTypeDropdown: Locator;
    readonly uIProcessStatusDropdown: Locator;
    readonly uIReleaseToORIStateDropdown: Locator;
    readonly uIReleaseToORINameEdit: Locator;
    readonly uIReturnFromDateEdit: Locator;
    readonly uIReturnFromTimeEdit: Locator;
    readonly uIReturnToDateEdit: Locator;
    readonly uIReturnToTimeEdit: Locator;
    readonly uISearchLink: Locator;
    readonly uIAddNewLink: Locator;
    readonly uIResetLink: Locator;
    readonly uIBackLink: Locator;
    readonly uIAdmissionLink: Locator;
    readonly uIFacilityLink: Locator;
    readonly uIPayBondLink: Locator;
    readonly uIReleaseSrchResultTable: Locator;
    readonly UIReelaseSrchSelectRecordChkbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISubAgencyDrodown = page.locator('#tabRlsSrch_tmpl0_UsrReleaseSrchBasic1_cddSubAgency_DropDown');
        this.uIInmateLastNameEdit = page.locator('#tabRlsSrch_tmpl0_UsrReleaseSrchBasic1_txtLastName');
        this.uIInmateFirstNameEdit = page.locator('#tabRlsSrch_tmpl0_UsrReleaseSrchBasic1_txtFirstName');
        this.uISPNNoEdit = page.locator('#tabRlsSrch_tmpl0_UsrReleaseSrchBasic1_txtSPIN');
        this.uICMSBookingYearEdit = page.locator('#tabRlsSrch_tmpl0_UsrReleaseSrchBasic1_nbrBooking_Year');
        this.uICMSBookingNoEdit = page.locator('#tabRlsSrch_tmpl0_UsrReleaseSrchBasic1_nbrBooking_Number');
        this.uIClockStopCheckBox = page.locator('#tabRlsSrch_tmpl0_UsrReleaseSrchBasic1_chkIsclock');
        this.uIReleaseFromDateEdit = page.locator('#tabRlsSrch_tmpl0_UsrReleaseSrchBasic1_dttmRlsFrom_Date_KPIDttmCtrl');
        this.uIReleaseFromTimeEdit = page.locator("//table[@id='tabRlsSrch_tmpl0_UsrReleaseSrchBasic1_dttmRlsFrom_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIReleaseToDateEdit = page.locator('#tabRlsSrch_tmpl0_UsrReleaseSrchBasic1_dttmRlsTo_Time');
        this.uIReleaseToTimeEdit = page.locator("//table[@id='tabRlsSrch_tmpl0_UsrReleaseSrchBasic1_dttmRlsFrom_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIReleaseTypeDropdown = page.locator('#tabRlsSrch_tmpl0_UsrReleaseSrchBasic1_lstReleaseType_ListBox');
        this.uIProcessStatusDropdown = page.locator('#tabRlsSrch_tmpl0_UsrReleaseSrchBasic1_cddProcStatus_DropDown');
        this.uIReleaseToORIStateDropdown = page.locator('#tabRlsSrch_tmpl0_UsrReleaseSrchBasic1_ORIAgency_KPIState');
        this.uIReleaseToORINameEdit = page.locator('#tabRlsSrch_tmpl0_UsrReleaseSrchBasic1_ORIAgency_lupORI_CodeValue');
        this.uIReturnFromDateEdit = page.locator('#tabRlsSrch_tmpl0_UsrReleaseSrchBasic1_dttmRtnFrom_Date_KPIDttmCtrl');
        this.uIReturnFromTimeEdit = page.locator("//table[@id='tabRlsSrch_tmpl0_UsrReleaseSrchBasic1_dttmRtnFrom_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIReturnToDateEdit = page.locator('#tabRlsSrch_tmpl0_UsrReleaseSrchBasic1_dttmRtnTo_Date_KPIDttmCtrl');
        this.uIReturnToTimeEdit = page.locator("//table[@id='tabRlsSrch_tmpl0_UsrReleaseSrchBasic1_dttmRtnTo_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uISearchLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Search')]");
        this.uIAddNewLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Add New')]");
        this.uIResetLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Reset')]");
        this.uIBackLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Back')]");
        this.uIAdmissionLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Admission')]");
        this.uIFacilityLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Facility')]");
        this.uIPayBondLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Pay Bond')]");
        this.uIReleaseSrchResultTable = page.locator('#grdRelease');
        this.UIReelaseSrchSelectRecordChkbox = page.locator("//div[@id='grdRelease'] //img[@title='Unchecked']");
    }

    async EnterAtInmateName(LastName: string, FirstName: string): Promise<void> {
        await this.uIInmateLastNameEdit.fill(LastName);
        await this.uIInmateFirstNameEdit.fill(FirstName);
    }

    async EnterAtSPNNo(SPNNo: string): Promise<void> {
        await this.uISPNNoEdit.fill(SPNNo);
    }

    async EnterAtCMSBookingNo(CMSBookingYear: string, CMSBookingNo: string): Promise<void> {
        await this.uICMSBookingYearEdit.fill(CMSBookingYear);
        await this.uICMSBookingNoEdit.fill(CMSBookingNo);
    }

    async SelectClockStopped(): Promise<void> {
        await this.uIReleaseToORINameEdit.click();
    }

    async EnterAtReleaseDate(ReleaseFromDate: string): Promise<void> {
        await this.uIReleaseFromDateEdit.fill(ReleaseFromDate);
        await this.uIReleaseFromTimeEdit.fill(DateHelpers.getCurrentTime());
        const currentDate = DateHelpers.getCurrentDate();
        await this.uIReleaseToDateEdit.fill(currentDate);
        await this.uIReleaseToTimeEdit.fill(DateHelpers.getCurrentTime());
    }

    async SelectAtReleaseType(ReleaseType: string): Promise<void> {
        await this.uIReleaseTypeDropdown.selectOption({ label: ReleaseType });
    }

    async SelectAtProcessStatus(ProcessStatus: string): Promise<void> {
        await this.uIProcessStatusDropdown.selectOption({ label: ProcessStatus });
    }

    async SelectAtReleaseToORI(State: string, ORINo: string): Promise<void> {
        await this.uIReleaseToORIStateDropdown.selectOption({ label: State });
        await this.uIReleaseToORINameEdit.fill(ORINo);
    }

    async EnterAtReturnDate(ReturnFromDatetime: string): Promise<void> {
        await this.uIReturnFromDateEdit.fill(ReturnFromDatetime);
        await this.uIReturnFromTimeEdit.fill(DateHelpers.getCurrentTime());
        const currentDate = DateHelpers.getCurrentDate();
        await this.uIReturnToDateEdit.fill(currentDate);
        await this.uIReturnToTimeEdit.fill(DateHelpers.getCurrentTime());
    }

    async ClickAddNewButton(): Promise<void> {
        await this.uIAddNewLink.click();
    }

    async ClickSearchLink(): Promise<void> {
        await this.uISearchLink.click();
    }

    async ClickResetLink(): Promise<void> {
        await this.uIResetLink.click();
    }

    async ClickBackLink(): Promise<void> {
        await this.uIBackLink.click();
    }

    async ClickAdmissionLink(): Promise<void> {
        await this.uIAdmissionLink.click();
    }

    async ClickFacilityLink(): Promise<void> {
        await this.uIFacilityLink.click();
    }

    async ClickPayBondLink(): Promise<void> {
        await this.uIPayBondLink.click();
    }

    async SelectAtSubAgency(SubAgency: string): Promise<void> {
        await this.uISubAgencyDrodown.fill(SubAgency);
    }

    async VerifySubAgency(LoggedinSubAgnecy: string): Promise<void> {
        const selectedItem = await new ElementHelpers(this.page).getDropDownSelectedItem(this.uISubAgencyDrodown);
        expect(selectedItem).toEqual(LoggedinSubAgnecy);
    }

    async VerifySubAgencyFieldEnabled(): Promise<void> {
        expect(await this.uISubAgencyDrodown.isEnabled()).toBeTruthy();
    }

    async VerifySubAgencyFieldDisabled(): Promise<void> {
        expect(await this.uISubAgencyDrodown.isEnabled()).toBeFalsy();
    }

    async SelectMHOCRecoerds(): Promise<void> {
        await this.uIReleaseSrchResultTable.locator('td', { hasText: "MHOC" }).click();
    }

    async SelectMCJRecoerds(): Promise<void> {
        await this.uIReleaseSrchResultTable.locator('td', { hasText: "MCJ" }).click();
    }

    async selectAtSPNNoInGrid(): Promise<void> {
        const SPNNo = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'SPNNo1');
        await this.uIReleaseSrchResultTable.locator('td', { hasText: SPNNo }).click();
    }

    async verifyAtReleaseType(ReleaseType: string): Promise<void> {
        const selectedItem = await new ElementHelpers(this.page).getDropDownSelectedItem(this.uIReleaseTypeDropdown);
        expect(selectedItem).toEqual(ReleaseType);
    }

}

export class ReleaseEntryPage {
    readonly page: Page;
    readonly uISPNNoEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNcloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIYesButton: Locator;
    readonly uIStatusBar: Locator;
    readonly uIStatusLabel: Locator;
    readonly uIQAForms: Locator;
    readonly uIQAFormsTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISPNNoEdit = page.locator('#HeaderPrisonerRelease_txtSPINNbr');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNcloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIYesButton = page.locator("//button[@class='confirm btn btn-primary']");
        this.uIStatusBar = page.locator("//td[@class='statusBar']//b");
        this.uIStatusLabel = page.locator("(//tr[@id='TblCommonRow']//td//span)[1]");
        this.uIQAForms = page.locator("//div[@id='tabInmRelease'] //span[contains(text(),'QA Forms')]");
        this.uIQAFormsTab = page.locator("//div[@id='tabInmRelease'] //span[contains(text(),'QA Forms')]");
    }

    async EnterAtSPNNo(SPNNo: string): Promise<void> {
        await this.uISPNNoEdit.fill(SPNNo);
        await this.uISPNNoEdit.press('Tab');
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3)Do You Want To Save All Of The Entered Details?');
    }

    async SaveAndCloseScreen(): Promise<void> {
        await this.uISaveNcloseButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do You Want To Save All Of The Entered Details?');
    }

    async VerifySaveButtondisabled(): Promise<void> {
        expect(await this.uISaveButton.isEnabled()).toBeFalsy();
        expect(await this.uISaveNcloseButton.isEnabled()).toBeFalsy();
    }

    async VerifySaveButtonEnabled(): Promise<void> {
        expect(await this.uISaveButton.isEnabled()).toBeTruthy();
        expect(await this.uISaveNcloseButton.isEnabled()).toBeTruthy();
    }

    async CloseInmateReleaseEntryScreen(): Promise<void> {
        await this.page.close();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
    }

    async VerifyUpdateSuccessfulStatusMessage(): Promise<void> {
        expect(await this.uIStatusBar.innerText()).toEqual("1003 - Update Successful");
    }

    async NavigateToMainTab(): Promise<void> {
        await this.uINavigateToMainTab.click();
    }

    async NavigateToReleaseTab(): Promise<void> {
        await this.uINavigateToReleaseTab.click();
    }

    async NavigateToReturnTab(): Promise<void> {
        await this.uINavigateToReturnTab.click();
    }

    async NavigateToHistoryTab(): Promise<void> {
        await this.uINavigateToHistoryTab.click();
    }

    async NavigateToQAFormsTab(): Promise<void> {
        await this.uIQAFormsTab.click();
        new BrowserHelpers(this.page).switchToFrame("frmQuestionnaire.aspx");
    }

    async verifyAtStatusLabel(Label: string): Promise<void> {
        expect(await this.uIStatusLabel.innerText()).toEqual(Label);
    }

    async verifyQAFormTabEnabled(): Promise<void> {
        expect(await this.uIQAForms.isEnabled()).toBeTruthy();
    }

    async clickReset(): Promise<void> {
        await this.uIRefreshButton.click();
    }

}

export class ReleaseEntryMainTabPage {
    readonly page: Page;
    readonly uINavigateToMainTab: Locator;
    readonly uIReleaseTypeDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToMainTab = page.locator("//div[@id='tabInmRelease'] //span[contains(text(),'Main')]");
        this.uIReleaseTypeDropdown = page.locator('#tabInmRelease_tmpl0_ctrlUsrPrisonerRlsMain_lupReleaseStatus_DropDown');
    }

    async SelectAtReleaseType(ReleaseType: string): Promise<void> {
        await this.uIReleaseTypeDropdown.selectOption({ label: ReleaseType });
    }

    async SelectReleaseType(): Promise<void> {
        await this.uIReleaseTypeDropdown.selectOption({ index: 1 });
    }

}

export class ReleaseEntryReleaseTabPage {
    readonly page: Page;
    readonly uINavigateToReleaseTab: Locator;
    readonly uIBookingButton: Locator;
    readonly uIPropertyButton: Locator;
    readonly uIScheduleButton: Locator;
    readonly uILibraryButton: Locator;
    readonly uINotificationButton: Locator;
    readonly uICMSInvoiceButton: Locator;
    readonly uIReviewPFEdit: Locator;
    readonly uIReviewDateEdit: Locator;
    readonly uIReviewTimeEdit: Locator;
    readonly uICommentsEdit: Locator;
    readonly uIReturnScheduleButton: Locator;
    readonly uISecondReviewPFEdit: Locator;
    readonly uISecondReviewDateEdit: Locator;
    readonly uISecondReviewTimeEdit: Locator;
    readonly uISecondReviewRejectButton: Locator;
    readonly uIFinalReviewPFEdit: Locator;
    readonly uIFinalReviewDateEdit: Locator;
    readonly uIFinalReviewTimeEdit: Locator;
    readonly uIFinalReviewRejectButton: Locator;
    readonly uIReleaseToORIStateDropdown: Locator;
    readonly uIReleaseToORINameEdit: Locator;
    readonly uICustodyLastNameEdit: Locator;
    readonly uICustodyFirstNameEdit: Locator;
    readonly uIVerifyIDButton: Locator;
    readonly uISignOutButton: Locator;
    readonly uISignOutPFCodeEdit: Locator;
    readonly uICustodyMiddleNameEdit: Locator;
    readonly uICustodySuffixDropdown: Locator;
    readonly uISecondReviewPFDescriptionEdit: Locator;
    readonly uIFinalReviewPFDescriptionEdit: Locator;
    readonly uICommissaryButton: Locator;
    readonly uIPendingOrdersButton: Locator;
    readonly uIInmateSignature: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToReleaseTab = page.locator("//div[@id='tabInmRelease'] //span[contains(text(),'Release')]");
        this.uIBookingButton = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_cmdViewDetainers');
        this.uIPropertyButton = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_cmdViewInmateProp');
        this.uIScheduleButton = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_cmdViewSchedule');
        this.uILibraryButton = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_cmdViewLibrary');
        this.uINotificationButton = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_cmdViewNotfication');
        this.uICMSInvoiceButton = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_cmdInvoice');
        this.uIReviewPFEdit = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_lupReviewSuperPFID_CodeValue');
        this.uIReviewDateEdit = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_dttmReviewSup_Date_KPIDttmCtrl');
        this.uIReviewTimeEdit = page.locator("//table[@id='tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_dttmReviewSup_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uICommentsEdit = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_txtIssuePropertyCmt');
        this.uIReturnScheduleButton = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_cmdSchedule');
        this.uISecondReviewPFEdit = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_lupSecReview_CodeValue');
        this.uISecondReviewDateEdit = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_DttmsecReview_Date_KPIDttmCtrl');
        this.uISecondReviewTimeEdit = page.locator("//table[@id='tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_DttmsecReview_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uISecondReviewRejectButton = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_BtnSecReview');
        this.uIFinalReviewPFEdit = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_lupFinalSuperPFID_CodeValue');
        this.uIFinalReviewDateEdit = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_dttmFinalReview_Date_KPIDttmCtrl');
        this.uIFinalReviewTimeEdit = page.locator("//table[@id='tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_dttmFinalReview_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIFinalReviewRejectButton = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_BtnSecReview');
        this.uIReleaseToORIStateDropdown = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_ORIAgency_KPIState');
        this.uIReleaseToORINameEdit = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_ORIAgency_lupORI_CodeValue');
        this.uICustodyLastNameEdit = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_nameInCustodyOf_LastName');
        this.uICustodyFirstNameEdit = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_nameInCustodyOf_FirstName');
        this.uIVerifyIDButton = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_ctrlVerifyIDOut_btnVerify');
        this.uISignOutButton = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_cmdSignOut');
        this.uISignOutPFCodeEdit = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_lupReleasePFID_CodeValue');
        this.uICustodyMiddleNameEdit = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_nameInCustodyOf_MiddleName');
        this.uICustodySuffixDropdown = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_nameInCustodyOf_Suffix_DropDown');
        this.uISecondReviewPFDescriptionEdit = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_lupSecReview_CodeDescription');
        this.uIFinalReviewPFDescriptionEdit = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_lupFinalSuperPFID_CodeDescription');
        this.uICommissaryButton = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_cmdViewCommissary');
        this.uIPendingOrdersButton = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_cmdPendingOrders');
        this.uIInmateSignature = page.locator('#tabInmRelease_tmpl1_ctrlUsrPrisonerRelease_imgInmateSign');
    }

    async ClickBookingButton(): Promise<void> {
        await this.uIBookingButton.click();
            }

    async ClickPropertyButton(): Promise<void> {
        await this.uIPropertyButton.click();
    }

    async ClickScheduleButton(): Promise<void> {
        await this.uIScheduleButton.click();
    }

    async ClickLibrayButton(): Promise<void> {
        await this.uILibraryButton.click();
        await new AcknowledgePage(this.page).ok();
    }

    async ClickNotificationButton(): Promise<void> {
        await this.uINotificationButton.click();
        
    }

    async ClickCMSInvoiceButton(): Promise<void> {
        await this.uICMSInvoiceButton.click();
        
    }

    async Enter1stReview(FirstReviewPF: string): Promise<void> {
        await this.uIReviewPFEdit.fill(FirstReviewPF);
        await this.uIReviewDateEdit.press('Tab');
        await this.uIReviewTimeEdit.press('Tab');
    }

    async EnterAtComments(Comments: string): Promise<void> {
        await this.uICommentsEdit.fill(Comments);
    }

    async EnterReturnDateTime(): Promise<void> {
        await this.uIReturnScheduleButton.click();
    }

    async Enter2stReview(secondReviewPf: string): Promise<void> {
        await this.uISecondReviewPFEdit.fill(secondReviewPf);
        await this.uISecondReviewDateEdit.press('Tab');
        await this.uISecondReviewTimeEdit.press('Tab');
    }

    async Click2ndReviewRejectButton(): Promise<void> {
        await this.uISecondReviewPFEdit.click();
    }

    async EnterFinalReview(FinalReviewPf: string): Promise<void> {
        await this.uIFinalReviewPFEdit.fill(FinalReviewPf);
        await this.uIFinalReviewDateEdit.press('Tab');
        await this.uIFinalReviewTimeEdit.press('Tab');
    }

    async ClickFinalReviewRejectButton(): Promise<void> {
        await this.uIFinalReviewRejectButton.click();
    }

    async EnterAtReleaseToORI(State: string, ReleaseToORI: string): Promise<void> {
        await this.uIReleaseToORIStateDropdown.fill(State);
        await this.uIReleaseToORINameEdit.fill(ReleaseToORI);
    }

    async EnterAtCustodyOf(LastName: string, FirstName: string): Promise<void> {
        await this.uICustodyLastNameEdit.fill(LastName);
        await this.uICustodyFirstNameEdit.fill(FirstName);
    }

    async ClickSignOutButton(): Promise<void> {
        await this.uISignOutButton.click();
    }

    async verifyButtonsColorisGreen(): Promise<void> {
        await this.verifyBookingButtonColorIsGreen();
        await this.verifyPropertyButtonColorIsGreen();
        await this.verifyScheduleButtonColorIsGreen();
        await this.verifyLibraryButtonColorIsGreen();
        await this.verifyNotificationButtonColorIsGreen();
    }

    async verifyBookingButtonColorIsGreen(): Promise<void> {
        const cssValue = await this.uIBookingButton.evaluate(el => getComputedStyle(el).backgroundColor);
        expect(cssValue).toContain('0, 128, 0');
    }

    async verifyPropertyButtonColorIsGreen(): Promise<void> {
        const cssValue = await this.uIPropertyButton.evaluate(el => getComputedStyle(el).backgroundColor);
        expect(cssValue).toContain('0, 128, 0');
    }

    async verifyScheduleButtonColorIsGreen(): Promise<void> {
        const cssValue = await this.uIScheduleButton.evaluate(el => getComputedStyle(el).backgroundColor);
        expect(cssValue).toContain('0, 128, 0');
    }

    async verifyLibraryButtonColorIsGreen(): Promise<void> {
        const cssValue = await this.uILibraryButton.evaluate(el => getComputedStyle(el).backgroundColor);
        expect(cssValue).toContain('0, 128, 0');
    }

    async verifyNotificationButtonColorIsGreen(): Promise<void> {
        const cssValue = await this.uINotificationButton.evaluate(el => getComputedStyle(el).backgroundColor);
        expect(cssValue).toContain('0, 128, 0');
    }

    async verifyScheduleButtonIsEnabled(): Promise<void> {
        expect(await this.uIScheduleButton.isEnabled()).toBeTruthy();
    }

    async verifyScheduleButtonNotExist(): Promise<void> {
        expect(await this.uIScheduleButton.isVisible()).toBeFalsy();
    }

    async enterAtInCustodyOfLastNameAndTabOut(CustodyOfLastName: string): Promise<void> {
        await this.uICustodyLastNameEdit.fill(CustodyOfLastName);
        await this.uICustodyLastNameEdit.press('Tab');
        await this.uICustodyFirstNameEdit.press('Tab');
    }

    async verifyAtInCustodyOfLastName(i: number): Promise<void> {
        const CustodyOfLastName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'CustodyOfLastName' + i);
        expect(await this.uICustodyLastNameEdit.inputValue()).toEqual(CustodyOfLastName);
    }

    async verifyAtInCustodyOfFirstName(i: number): Promise<void> {
        const CustodyOfFirstName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'CustodyOfFirstName' + i);
        expect(await this.uICustodyFirstNameEdit.inputValue()).toEqual(CustodyOfFirstName);
    }

    async verifyInTheCustodyOfNameFieldsAreDisabled(): Promise<void> {
        expect(await this.uICustodyLastNameEdit.getAttribute('readonly')).toEqual('true');
        expect(await this.uICustodyFirstNameEdit.getAttribute('readonly')).toEqual('true');
        expect(await this.uICustodyMiddleNameEdit.getAttribute('readonly')).toEqual('true');
        expect(await this.uICustodySuffixDropdown.isEnabled()).toBeFalsy();
    }

    async enterAtReview(Review: string): Promise<void> {
        await this.uIReviewPFEdit.click();
        await this.uIReviewPFEdit.fill(Review);
        await this.uIReviewPFEdit.press('Tab');
    }

    async verifySecondReviewPFEditIsDisabled(): Promise<void> {
        const classAttr = await this.uISecondReviewPFEdit.getAttribute('class');
        expect(classAttr).toContain('textboxInactive');
    }

    async verifySecondReviewPFDescriptionEditIsDisabled(): Promise<void> {
        const classAttr = await this.uISecondReviewPFDescriptionEdit.getAttribute('class');
        expect(classAttr).toContain('textboxInactive');
    }

    async verifyFinalReviewPFEditIsDisabled(): Promise<void> {
        const classAttr = await this.uIFinalReviewPFEdit.getAttribute('class');
        expect(classAttr).toContain('textboxInactive');
    }

    async verifyFinalReviewDescriptionEditIsDisabled(): Promise<void> {
        const classAttr = await this.uIFinalReviewPFDescriptionEdit.getAttribute('class');
        expect(classAttr).toContain('textboxInactive');
    }

    async enterAtSecondReview(SecondReview: string): Promise<void> {
        await this.uISecondReviewPFEdit.click();
        await this.uISecondReviewPFEdit.fill(SecondReview);
        await this.uISecondReviewPFEdit.press('Tab');
    }

    async verifySecondReviewPFEditIsEnabled(): Promise<void> {
        const classAttr = await this.uISecondReviewPFEdit.getAttribute('class');
        expect(classAttr).toContain('textbox');
    }

    async enterAtFinalReview(FinalReview: string): Promise<void> {
        await this.uIFinalReviewPFEdit.click();
        await this.uIFinalReviewPFEdit.fill(FinalReview);
        await this.uIFinalReviewPFEdit.press('Tab');
    }

    async clickCommissaryButton(): Promise<void> {
        await this.uICommissaryButton.click();
    }

    async clickPendingOrders(): Promise<void> {
        await this.uIPendingOrdersButton.click();
    }

    async verifyInmateSignatureIsEnabled(): Promise<void> {
        await expect(this.uIInmateSignature).toBeVisible();
    }

    async clickNoandVerify30652popup(): Promise<void> {
        await new ConfirmPage(this.page).noWithScreenOrWindowPopup('30652');
    }

    async clickInmateSignature(): Promise<void> {
        await this.uIInmateSignature.click();
    }

    async verifyAtSignature(SignatureText: string): Promise<void> {
        const imageText = await this.uIInmateSignature.getAttribute('alt');
        expect(imageText, "Signature text is not same as expected -->").toEqual(SignatureText);
    }

    async clickYesIn30652popup(): Promise<void> {
        await new ConfirmPage(this.page).uIModalFooterYesButton.click();
    }

    async enterAtReviewDateAndTime(): Promise<void> {
        await this.uIReviewDateEdit.press('Tab');
        await this.uIReviewTimeEdit.press('Tab');
    }

}

export class ReleaseEntryReturnTabPage {
    readonly page: Page;
    readonly uINavigateToReturnTab: Locator;
    readonly uIVerifyIDButton: Locator;
    readonly uISingInButton: Locator;
    readonly uIBookingButton: Locator;
    readonly uIPropertyButton: Locator;
    readonly uIScheduleButton: Locator;
    readonly uIAssignCellCheckBox: Locator;
    readonly uIAssignCellBedEdit: Locator;
    readonly uIAssignCellBunkNoEdit: Locator;
    readonly uICompletedDateEdit: Locator;
    readonly uICompletedTimeEdit: Locator;
    readonly uIReviewPFEdit: Locator;
    readonly uICommentEdit: Locator;
    readonly uIApprovedPFEdit: Locator;
    readonly uIApprovedDateEdit: Locator;
    readonly uIApprovedTimeEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToReturnTab = page.locator("//div[@id='tabInmRelease'] //span[contains(text(),'Return')]");
        this.uIVerifyIDButton = page.locator('#tabInmRelease_tmpl2_ctrlUsrPrisonerReturn_ctrlVerifyIDIn_btnVerify');
        this.uISingInButton = page.locator('#tabInmRelease_tmpl2_ctrlUsrPrisonerReturn_cmdSignIN');
        this.uIBookingButton = page.locator('#tabInmRelease_tmpl2_ctrlUsrPrisonerReturn_cmdViewDetainers');
        this.uIPropertyButton = page.locator('#tabInmRelease_tmpl2_ctrlUsrPrisonerReturn_cmdProperty');
        this.uIScheduleButton = page.locator('#tabInmRelease_tmpl2_ctrlUsrPrisonerReturn_cmdSchedule');
        this.uIAssignCellCheckBox = page.locator('#tabInmRelease_tmpl2_ctrlUsrPrisonerReturn_chkNewCell');
        this.uIAssignCellBedEdit = page.locator('#tabInmRelease_tmpl2_ctrlUsrPrisonerReturn_lupCell_CodeValue');
        this.uIAssignCellBunkNoEdit = page.locator('#tabInmRelease_tmpl2_ctrlUsrPrisonerReturn_txtBunkNbr');
        this.uICompletedDateEdit = page.locator('#tabInmRelease_tmpl2_ctrlUsrPrisonerReturn_dttmRetCompleted_Date_KPIDttmCtrl');
        this.uICompletedTimeEdit = page.locator("//table[@id='tabInmRelease_tmpl2_ctrlUsrPrisonerReturn_dttmRetCompleted_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIReviewPFEdit = page.locator('#tabInmRelease_tmpl2_ctrlUsrPrisonerReturn_lupRetReviewSuperPFID_CodeValue');
        this.uICommentEdit = page.locator('#tabInmRelease_tmpl2_ctrlUsrPrisonerReturn_txtReturnCmts');
        this.uIApprovedPFEdit = page.locator('#tabInmRelease_tmpl2_ctrlUsrPrisonerReturn_lupRetFinalSuperPFID_CodeValue');
        this.uIApprovedDateEdit = page.locator('#tabInmRelease_tmpl2_ctrlUsrPrisonerReturn_dttmRetFinalReview_Date_KPIDttmCtrl');
        this.uIApprovedTimeEdit = page.locator("//table[@id='tabInmRelease_tmpl2_ctrlUsrPrisonerReturn_dttmRetFinalReview_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
    }

    async ClickVerifyIDButton(): Promise<void> {
        await this.uIVerifyIDButton.click();
    }

    async ClickSignInButton(): Promise<void> {
        await this.uISingInButton.click();
    }

    async ClickBookingButton(): Promise<void> {
        await this.uIBookingButton.click();
       
    }

    async ClickPropertyButton(): Promise<void> {
        await this.uIPropertyButton.click();
           }

    async ClickScheduleButton(): Promise<void> {
        await this.uIScheduleButton.click();
      
    }

    async EnterAtAssignCellChecbBox(): Promise<void> {
        await this.uIAssignCellCheckBox.click();
    }

    async EnterAtAssignCell(AssignCellNo: string, AssignBedNo: string): Promise<void> {
        await this.uIAssignCellBedEdit.fill(AssignCellNo);
        await this.uIAssignCellBunkNoEdit.fill(AssignBedNo);
        await this.uIAssignCellBunkNoEdit.press('Tab');
    }

    async EnterCompletedReview(ReviewPF: string): Promise<void> {
        await this.uICompletedDateEdit.press('Tab');
        await this.uICompletedTimeEdit.press('Tab');
        await this.uIReviewPFEdit.fill(ReviewPF);
    }

    async EnterAtComments(Comment: string): Promise<void> {
        await this.uICommentEdit.fill(Comment);
    }

    async EnterApprovedDetails(ApprovedPF: string): Promise<void> {
        await this.uIApprovedPFEdit.fill(ApprovedPF);
        await this.uIApprovedDateEdit.press('Tab');
        await this.uIApprovedTimeEdit.press('Tab');
    }

}

export class ReleaseEntryHistoryTabPage {
    readonly page: Page;
    readonly uINavigateToHistoryTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINavigateToHistoryTab = page.locator("//div[@id='tabInmRelease'] //span[contains(text(),'Main')]");
    }

}

export class VisitationRulesEntryPage {
    readonly page: Page;
    readonly uIMaxLengthPerVisitEdit: Locator;
    readonly uIMinLengthtoNotifyEdit: Locator;
    readonly uIMaxVisitPerDayEdit: Locator;
    readonly uIClassificationDropdown: Locator;
    readonly uIclassMondayCheckBox: Locator;
    readonly uIclassTuesdayCheckBox: Locator;
    readonly uIclassWednesdayCheckBox: Locator;
    readonly uIclassThursdayCheckBox: Locator;
    readonly uIclassFridayCheckBox: Locator;
    readonly uIclassSaturdayCheckBox: Locator;
    readonly uIclassSundayCheckBox: Locator;
    readonly uIClassAddButton: Locator;
    readonly uIClassClearButton: Locator;
    readonly uIPeriodEdit: Locator;
    readonly uISexDropdown: Locator;
    readonly uIMaxVisitAllowed: Locator;
    readonly uIPublicVisitMondayCheckBox: Locator;
    readonly uIPublicVisitTuesdayCheckBox: Locator;
    readonly uIPublicVisitWednesdayCheckBox: Locator;
    readonly uIPublicVisitThursdayCheckBox: Locator;
    readonly uIPublicVisitFridayCheckBox: Locator;
    readonly uIPublicVisitSaturdayCheckBox: Locator;
    readonly uIPublicVisitSundayCheckBox: Locator;
    readonly uIPubVisitPeriodsAddButton: Locator;
    readonly uIPubVisitPeriodsClearButton: Locator;
    readonly uIPeriodDropdown: Locator;
    readonly uIPublicVisitFromTimeEdit: Locator;
    readonly uIPublicVisitToTimeEdit: Locator;
    readonly uIPubAddButton: Locator;
    readonly uIPubClearButton: Locator;
    readonly uIProfessionalVisitFromTimeEdit: Locator;
    readonly uIProfessionalVisitToTimeEdit: Locator;
    readonly uIProAddButton: Locator;
    readonly uIProClearButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNcloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIYesButton: Locator;
    readonly uIClassificationGrid: Locator;
    readonly uIClassificationUpdateButton: Locator;
    readonly uIPublicVisitationPeriodsGrid: Locator;
    readonly uIPublicVisitationPeriodsUpdateButton: Locator;
    readonly uIPublicVisitationHoursUpdateButton: Locator;
    readonly uIProfessionalVisitationHoursUpdateButton: Locator;
    readonly uIPublicVisitationHoursGrid: Locator;
    readonly uIProfessionalVisitationHoursGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIMaxLengthPerVisitEdit = page.locator('#txtMaxDuration');
        this.uIMinLengthtoNotifyEdit = page.locator('#txtMinDuration');
        this.uIMaxVisitPerDayEdit = page.locator('#txtVisitPerDay');
        this.uIClassificationDropdown = page.locator('#cddClassify_DropDown');
        this.uIclassMondayCheckBox = page.locator('#chkClassMon');
        this.uIclassTuesdayCheckBox = page.locator('#chkClassTue');
        this.uIclassWednesdayCheckBox = page.locator('#chkClassWed');
        this.uIclassThursdayCheckBox = page.locator('#chkClassThu');
        this.uIclassFridayCheckBox = page.locator('#chkClassFri');
        this.uIclassSaturdayCheckBox = page.locator('#chkClassSat');
        this.uIclassSundayCheckBox = page.locator('#chkClassSun');
        this.uIClassAddButton = page.locator('#cmdAddClass');
        this.uIClassClearButton = page.locator('#cmdClearClass');
        this.uIPeriodEdit = page.locator('#txtPeriod');
        this.uISexDropdown = page.locator('#cddSex_DropDown');
        this.uIMaxVisitAllowed = page.locator('#txtMaxVstAllow');
        this.uIPublicVisitMondayCheckBox = page.locator('#chkMon');
        this.uIPublicVisitTuesdayCheckBox = page.locator('#chkTue');
        this.uIPublicVisitWednesdayCheckBox = page.locator('#chkWed');
        this.uIPublicVisitThursdayCheckBox = page.locator('#chkThu');
        this.uIPublicVisitFridayCheckBox = page.locator('#chkFri');
        this.uIPublicVisitSaturdayCheckBox = page.locator('#chkSat');
        this.uIPublicVisitSundayCheckBox = page.locator('#chkSun');
        this.uIPubVisitPeriodsAddButton = page.locator('#cmdAddPub');
        this.uIPubVisitPeriodsClearButton = page.locator('#cmdClearPub');
        this.uIPeriodDropdown = page.locator('#cddPeriodsList');
        this.uIPublicVisitFromTimeEdit = page.locator("//table[@id='timeCtrlPubFrm_Time'] //input[@class='igte_BlueThemeEditInContainer']");
        this.uIPublicVisitToTimeEdit = page.locator("//table[@id='timeCtrlPubTo_Time'] //input[@class='igte_BlueThemeEditInContainer']");
        this.uIPubAddButton = page.locator('#cmdAddPubHrs');
        this.uIPubClearButton = page.locator('#cmdClearPubHrs');
        this.uIProfessionalVisitFromTimeEdit = page.locator("//table[@id='timeCtrlProfFrm_Time'] //input[@class='igte_BlueThemeEditInContainer']");
        this.uIProfessionalVisitToTimeEdit = page.locator("//table[@id='timeCtrlProfTo_Time'] //input[@class='igte_BlueThemeEditInContainer']");
        this.uIProAddButton = page.locator('#cmdAddProf');
        this.uIProClearButton = page.locator('#cmdClearProf');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNcloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIYesButton = page.locator("//button[@class='confirm btn btn-primary']");
        this.uIClassificationGrid = page.locator('#grdClassify');
        this.uIClassificationUpdateButton = page.locator("//input[@id = 'cmdAddClass' and @title='Update The Data In The Grid']");
        this.uIPublicVisitationPeriodsGrid = page.locator('#grdPubVisit');
        this.uIPublicVisitationPeriodsUpdateButton = page.locator("//input[@id='cmdAddPub' and @title='Update The Data In The Grid']");
        this.uIPublicVisitationHoursUpdateButton = page.locator("//input[@id='cmdAddPubHrs' and @title='Update The Data In The Grid']");
        this.uIProfessionalVisitationHoursUpdateButton = page.locator("//input[@id='cmdAddProf' and @title='Update The Data In The Grid']");
        this.uIPublicVisitationHoursGrid = page.locator('#grdPubVstHrs');
        this.uIProfessionalVisitationHoursGrid = page.locator('#grdProfVisit');
    }

    async EnterAtMaxLengthPerVisit(MaxLengthPerVisit: string): Promise<void> {
        await this.uIMaxLengthPerVisitEdit.clear();
        await this.uIMaxLengthPerVisitEdit.fill(MaxLengthPerVisit);
    }

    async EnterAtMinLengthToNotify(MinLengthToNotify: string): Promise<void> {
        await this.uIMinLengthtoNotifyEdit.clear();
        await this.uIMinLengthtoNotifyEdit.fill(MinLengthToNotify);
    }

    async EnterAtMaxVisitPerDay(MaxVisitPerDay: string): Promise<void> {
        await this.uIMaxVisitPerDayEdit.clear();
        await this.uIMaxVisitPerDayEdit.fill(MaxVisitPerDay);
    }

    async EnterAtDaysAllowedClassification(Classification: string): Promise<void> {
        await this.uIClassificationDropdown.selectOption({ label: Classification });
        await this.uIclassMondayCheckBox.click();
        await this.uIclassTuesdayCheckBox.click();
        await this.uIclassWednesdayCheckBox.click();
        await this.uIclassThursdayCheckBox.click();
        await this.uIclassFridayCheckBox.click();
        await this.uIClassAddButton.click();
    }

    async EnterAtPeriodInPublicVisitationPeriods(Period: string, Sex: string, MaxVisitAllowed: string): Promise<void> {
        await this.uIPeriodEdit.fill(Period);
        await this.uISexDropdown.selectOption({ label: Sex });
        await this.uIMaxVisitAllowed.fill(MaxVisitAllowed);
        await this.uIPublicVisitMondayCheckBox.click();
        await this.uIPublicVisitTuesdayCheckBox.click();
        await this.uIPublicVisitWednesdayCheckBox.click();
        await this.uIPublicVisitThursdayCheckBox.click();
        await this.uIPublicVisitFridayCheckBox.click();
        await this.uIPubVisitPeriodsAddButton.click();
    }

    async selectAtPublicVisitationHoursPeriod(PubVisitPeriod: string): Promise<void> {
        await this.uIPeriodDropdown.fill(PubVisitPeriod);
    }

    async enterAtPublicVisitationHoursFromTime(PubVisitFromTime: string): Promise<void> {
        await this.uIPublicVisitFromTimeEdit.click();
        await this.uIPublicVisitFromTimeEdit.fill(PubVisitFromTime);
    }

    async enterAtPublicVisitationHoursToTime(PubVisitToTime: string): Promise<void> {
        await this.uIPublicVisitToTimeEdit.click();
        await this.uIPublicVisitToTimeEdit.fill(PubVisitToTime);
        await this.uIPubAddButton.click();
    }

    async enterAtProfessionalVisitationHoursFromTime(ProVisitFromTime: string): Promise<void> {
        await this.uIProfessionalVisitFromTimeEdit.click();
        await this.uIProfessionalVisitFromTimeEdit.fill(ProVisitFromTime);
    }

    async enterAtProfessionalVisitationHoursToTime(ProVisitToTime: string): Promise<void> {
        await this.uIProfessionalVisitToTimeEdit.click();
        await this.uIProfessionalVisitToTimeEdit.fill(ProVisitToTime);
        await this.uIProAddButton.click();
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async selectSex(): Promise<void> {
        await this.uISexDropdown.selectOption({ label: "Unknown" });
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
    }

    async verifyAdditionSuccessfulAcknowledgeMsg(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('1002 - Addition Successful');
    }

    async verifyUpdateSuccessfulAcknowledgeMsg(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('1003 - Update Successful');
    }

    async selectAtClasssificationINDaysAllowedByClassification(Classification: string): Promise<void> {
        await this.uIClassificationDropdown.selectOption({ label: Classification });
    }

    async clickDaysAllowedByClassificationMonCheckbox(): Promise<void> {
        await this.uIclassMondayCheckBox.click();
    }

    async clickDaysAllowedByClassificationAddButton(): Promise<void> {
        await this.uIClassAddButton.click();
    }

    async selectAtDaysAllowedByClassificationInGrid(Classification: string): Promise<void> {
        await this.uIClassificationGrid.locator('td', { hasText: Classification }).click();
    }

    async verify1056UpdatedDataExistsAcknowledgePopup(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('(1056) Updated data exists in the fields. You must save or reset');
    }

    async clickDaysAllowedByClassificationUpdateButton(): Promise<void> {
        await this.uIClassificationUpdateButton.click();
    }

    async clickPublicVisitationPeriodsMonCheckbox(): Promise<void> {
        await this.uIPublicVisitMondayCheckBox.click();
    }

    async clickPublicVisitationPeriodsAddButton(): Promise<void> {
        await this.uIPubVisitPeriodsAddButton.click();
    }

    async selectAtPeriodInPublicVisitationPeriodsGrid(Period: string): Promise<void> {
        await this.uIPublicVisitationPeriodsGrid.locator('td', { hasText: Period }).click();
    }

    async clickPublicVisitaionPeriodsUpdateButton(): Promise<void> {
        await this.uIPublicVisitationPeriodsUpdateButton.click();
    }

    async clickPublicVisitaionHoursUpdateButton(): Promise<void> {
        await this.uIPublicVisitationHoursUpdateButton.click();
    }

    async clickProfessionalVisitaionPeriodsUpdateButton(): Promise<void> {
        await this.uIProfessionalVisitationHoursUpdateButton.click();
    }

    async selectAtPublicVisitationHoursFromInGrid(PubVisitFromTime: string): Promise<void> {
        await this.uIPublicVisitationHoursGrid.locator('td', { hasText: PubVisitFromTime }).click();
    }

    async selectAtProfessionalVisitationHoursFromInGrid(ProVisitFromTime: string): Promise<void> {
        await this.uIProfessionalVisitationHoursGrid.locator('td', { hasText: ProVisitFromTime }).click();
    }

    async enterAtPublicVisitationHoursFromTime(JsonIndex: number): Promise<void> {
        const PubVisitFromTime = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'PubVisitFromTime' + JsonIndex);
        await this.uIPublicVisitFromTimeEdit.click();
        await this.uIPublicVisitFromTimeEdit.fill(PubVisitFromTime);
    }

    async enterAtProfessionalVisitationHoursFromTime(JsonIndex: number): Promise<void> {
        const ProVisitFromTime = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'ProVisitFromTime' + JsonIndex);
        await this.uIProfessionalVisitFromTimeEdit.click();
        await this.uIProfessionalVisitFromTimeEdit.fill(ProVisitFromTime);
    }

    async verifyAtFromTimeInPublicVisitationHoursInGrid(jsonIndex: number): Promise<void> {
        const PubVisitFromTime = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'PubVisitFromTime' + jsonIndex);
        await expect(this.uIPublicVisitationHoursGrid).toContainText(PubVisitFromTime);
    }

    async verifyAtToTimeInPublicVisitationHoursInGrid(jsonIndex: number): Promise<void> {
        const PubVisitToTime = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'PubVisitToTime' + jsonIndex);
        await expect(this.uIPublicVisitationHoursGrid).toContainText(PubVisitToTime);
    }

    async verifyAtFromTimeInProfessionalVisitationHoursInGrid(jsonIndex: number): Promise<void> {
        const ProVisitFromTime = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'ProVisitFromTime' + jsonIndex);
        await expect(this.uIProfessionalVisitationHoursGrid).toContainText(ProVisitFromTime);
    }

    async verifyAtToTimeInProfessionalVisitationInGrid(jsonIndex: number): Promise<void> {
        const ProVisitToTime = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'ProVisitToTime' + jsonIndex);
        await expect(this.uIProfessionalVisitationHoursGrid).toContainText(ProVisitToTime);
    }

}

export class VisitationSearchPage {
    readonly page: Page;
    readonly uILogFromDateEdit: Locator;
    readonly uILogToDateEdit: Locator;
    readonly uIArrivalFromDateEdit: Locator;
    readonly uIArrivalFromTimeEdit: Locator;
    readonly uIArrivalToDateEdit: Locator;
    readonly uIArrivalToTimeEdit: Locator;
    readonly uISPNEdit: Locator;
    readonly uISPNLastNameEdit: Locator;
    readonly uISPNFirstNameEdit: Locator;
    readonly uIVisitorIDTypeEdit: Locator;
    readonly uIVisitorIDNoEdit: Locator;
    readonly uIVisitorLastNameEdit: Locator;
    readonly uIVisitorFirstNameEdit: Locator;
    readonly uIBuildingDropdown: Locator;
    readonly uIAreaDropdown: Locator;
    readonly uIBoothDropdown: Locator;
    readonly uIVisitorBedgeEdit: Locator;
    readonly uIAuthorizedAreaDropdown: Locator;
    readonly uIFacilityVisitReasonDropdown: Locator;
    readonly uISearchLink: Locator;
    readonly uIAddNewLink: Locator;
    readonly uIResetLink: Locator;
    readonly uIBackLink: Locator;
    readonly uIVisitorSearchGridTable: Locator;
    readonly uIScheduledFromDate: Locator;
    readonly uIScheduledFromTime: Locator;
    readonly uIScheduledToDate: Locator;
    readonly uIScheduledToTime: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uILogFromDateEdit = page.locator('#tabVisitSrch_tmpl0_UsrVisitSrchBasic1_dttmStartDttm_KPIDttmCtrl');
        this.uILogToDateEdit = page.locator('#tabVisitSrch_tmpl0_UsrVisitSrchBasic1_dttmFinish_KPIDttmCtrl');
        this.uIArrivalFromDateEdit = page.locator('#tabVisitSrch_tmpl0_UsrVisitSrchBasic1_dttmArrStDttm_Date_KPIDttmCtrl');
        this.uIArrivalFromTimeEdit = page.locator("//table[@id='tabVisitSrch_tmpl0_UsrVisitSrchBasic1_dttmArrStDttm_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIArrivalToDateEdit = page.locator('#tabVisitSrch_tmpl0_UsrVisitSrchBasic1_dttmFinished_Date_KPIDttmCtrl');
        this.uIArrivalToTimeEdit = page.locator("//table[@id='tabVisitSrch_tmpl0_UsrVisitSrchBasic1_dttmFinished_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uISPNEdit = page.locator('#tabVisitSrch_tmpl0_UsrVisitSrchBasic1_txtSPINID');
        this.uISPNLastNameEdit = page.locator('#tabVisitSrch_tmpl0_UsrVisitSrchBasic1_txtSPNName');
        this.uISPNFirstNameEdit = page.locator('#tabVisitSrch_tmpl0_UsrVisitSrchBasic1_txtSPNFirstName');
        this.uIVisitorIDTypeEdit = page.locator('#tabVisitSrch_tmpl0_UsrVisitSrchBasic1_VisitorNameID_NameType');
        this.uIVisitorIDNoEdit = page.locator('#tabVisitSrch_tmpl0_UsrVisitSrchBasic1_VisitorNameID_NameTypeID');
        this.uIVisitorLastNameEdit = page.locator('#tabVisitSrch_tmpl0_UsrVisitSrchBasic1_txtVLname');
        this.uIVisitorFirstNameEdit = page.locator('#tabVisitSrch_tmpl0_UsrVisitSrchBasic1_txtVFname');
        this.uIBuildingDropdown = page.locator('#tabVisitSrch_tmpl0_UsrVisitSrchBasic1_cddBuilding_DropDown');
        this.uIAreaDropdown = page.locator('#tabVisitSrch_tmpl0_UsrVisitSrchBasic1_cddArea_DropDown');
        this.uIBoothDropdown = page.locator('#tabVisitSrch_tmpl0_UsrVisitSrchBasic1_cddCubical_DropDown');
        this.uIVisitorBedgeEdit = page.locator('#tabVisitSrch_tmpl0_UsrVisitSrchBasic1_txtBadge');
        this.uIAuthorizedAreaDropdown = page.locator('#tabVisitSrch_tmpl0_UsrVisitSrchBasic1_cddAuthorizedArea_DropDown');
        this.uIFacilityVisitReasonDropdown = page.locator('#tabVisitSrch_tmpl0_UsrVisitSrchBasic1_cddFacVisitReason_DropDown');
        this.uISearchLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Search')]");
        this.uIAddNewLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Add New')]");
        this.uIResetLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Reset')]");
        this.uIBackLink = page.locator("//div[@id='tlbGridItem'] //span[contains(text(),'Back')]");
        this.uIVisitorSearchGridTable = page.locator('#grdVstSrch');
        this.uIScheduledFromDate = page.locator('#tabVisitSrch_tmpl0_UsrVisitSrchBasic1_dttmSchStDttm_Date_KPIDttmCtrl');
        this.uIScheduledFromTime = page.locator("//table[@id='tabVisitSrch_tmpl0_UsrVisitSrchBasic1_dttmSchStDttm_Time']//input");
        this.uIScheduledToDate = page.locator('#tabVisitSrch_tmpl0_UsrVisitSrchBasic1_dttmSchFhDttm_Date_KPIDttmCtrl');
        this.uIScheduledToTime = page.locator("//table[@id='tabVisitSrch_tmpl0_UsrVisitSrchBasic1_dttmSchFhDttm_Time']//input");
    }

    async EnterAtLogDate(LogFromDate: string): Promise<void> {
        await this.uILogFromDateEdit.fill(LogFromDate);
        const currentDate = DateHelpers.getCurrentDate();
        await this.uILogToDateEdit.fill(currentDate);
    }

    async EnterAtArrivalDateTime(ArrivalFromDate: string, ArrivalFromTime: string): Promise<void> {
        await this.uIArrivalFromDateEdit.fill(ArrivalFromDate);
        await this.uIArrivalFromTimeEdit.fill(ArrivalFromTime);
        const currentDate = DateHelpers.getCurrentDate();
        await this.uIArrivalToDateEdit.fill(currentDate);
        await this.uIArrivalToTimeEdit.fill(DateHelpers.getCurrentTime());
    }

    async EnterAtInmateName(SPNNo: string, LastName: string, FirstName: string): Promise<void> {
        await this.uISPNEdit.fill(SPNNo);
        await this.uISPNLastNameEdit.fill(LastName);
        await this.uISPNFirstNameEdit.fill(FirstName);
    }

    async EnterAtVisitorName(VisitorNameType: string, VisitorNameID: string): Promise<void> {
        await this.uIVisitorIDTypeEdit.fill(VisitorNameType);
        await this.uIVisitorIDNoEdit.fill(VisitorNameID);
        await this.uIVisitorIDNoEdit.press('Tab');
    }

    async EnterAtVisitor2Name(VisitorLastName: string, VisitorFirstName: string): Promise<void> {
        await this.uIVisitorLastNameEdit.fill(VisitorLastName);
        await this.uIVisitorFirstNameEdit.fill(VisitorFirstName);
    }

    async EnterAtBuilding(Building: string): Promise<void> {
        await this.uIBuildingDropdown.fill(Building);
    }

    async EnterAtArea(Area: string): Promise<void> {
        await this.uIAreaDropdown.fill(Area);
    }

    async EnterAtBooth(Booth: string): Promise<void> {
        await this.uIBoothDropdown.fill(Booth);
    }

    async EnterAtVisitorBadge(VisitorBadge: string): Promise<void> {
        await this.uIVisitorBedgeEdit.fill(VisitorBadge);
    }

    async EnterAtAuthorizedArea(AuthorizedArea: string): Promise<void> {
        await this.uIAuthorizedAreaDropdown.fill(AuthorizedArea);
    }

    async EnterAtFacilityVisitReason(FacilityVisitReason: string): Promise<void> {
        await this.uIFacilityVisitReasonDropdown.fill(FacilityVisitReason);
    }

    async ClickAddNewButton(): Promise<void> {
        await this.uIAddNewLink.click();
    }

    async ClickSearchLink(): Promise<void> {
        await this.uISearchLink.click();
    }

    async ClickResetLink(): Promise<void> {
        await this.uIResetLink.click();
    }

    async ClickBackLink(): Promise<void> {
        await this.uIBackLink.click();
    }

    async enterAtSPNNo(SPNNo: string): Promise<void> {
        await this.uISPNEdit.fill(SPNNo);
    }

    async verifyAtVisitorInGridTable(SPNNo: string, VisitorName: string): Promise<void> {
        const cell = await new GridHelpers(this.page).getGridCell(this.uIVisitorSearchGridTable, SPNNo, 'Visitor');
        const Visitor = await cell.innerText();
        expect(Visitor).toEqual(VisitorName);
    }

    async EnterAtSPNNO(SPNNo: string): Promise<void> {
        await this.uISPNEdit.fill(SPNNo);
    }

    async selectAtSPNNO(SPNNo: string): Promise<void> {
        await this.uIVisitorSearchGridTable.locator('td', { hasText: SPNNo }).click();
    }

    async enterAtScheduledFromDateAndTime(): Promise<void> {
        const ScheduledFromDate = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'ScheduledFromDate');
        const ScheduledFromTime = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'ScheduledFromTime');
        await this.uIScheduledFromDate.click();
        await this.uIScheduledFromDate.fill(ScheduledFromDate);
        await this.uIScheduledFromTime.click();
        await this.uIScheduledFromTime.fill(ScheduledFromTime);
    }

    async enterScheduledToDateAndTimeAsCurrentDate(): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        const currentTime = DateHelpers.getCurrentTime();
        await this.uIScheduledToDate.click();
        await this.uIScheduledToDate.fill(currentDate);
        await this.uIScheduledToTime.click();
        await this.uIScheduledToTime.fill(currentTime);
    }

    async verifyScheduleDateTimeBetweenFromAndToDateInGrid(ScheduledFromDate: string): Promise<void> {
        await expect(this.uIVisitorSearchGridTable).toContainText(ScheduledFromDate);
    }

    async enterArrivalFromDateAsCurrentDate(): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        await this.uIArrivalFromDateEdit.fill(currentDate);
    }

    async verifyStartDateByVisitorInGrid(startTime: string, i: number): Promise<void> {
        const Visitor = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Visitor' + i);
        const gridCell = await new GridHelpers(this.page).getGridCell(this.uIVisitorSearchGridTable, Visitor, 'Start');
        expect(await gridCell.innerText()).toEqual(startTime);
    }

}

export class VisitationStatusPage {
    readonly page: Page;
    readonly uIAddVisitorButton: Locator;
    readonly uIAddFacilityVisitorButton: Locator;
    readonly uIPreviousVisitButton: Locator;
    readonly uIbuildingFilterDropdown: Locator;
    readonly uICurrentVisitorsEdit: Locator;
    readonly uIVisitorStatusGridtable: Locator;
    readonly uIShowAllCheckBox: Locator;
    readonly uINewButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIDateEdit: Locator;
    readonly uIVisitorGrdTble: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddVisitorButton = page.locator('#cmdNew');
        this.uIAddFacilityVisitorButton = page.locator('#BtnFacilityVisitor');
        this.uIPreviousVisitButton = page.locator('#btnPreviousVisitOpen');
        this.uIbuildingFilterDropdown = page.locator('#cddBldgFltr_DropDown');
        this.uICurrentVisitorsEdit = page.locator('#txtVstrBdg');
        this.uIVisitorStatusGridtable = page.locator('#grdVstLog');
        this.uIShowAllCheckBox = page.locator('#chkShowAll');
        this.uINewButton = page.locator('#cmdNew');
        this.uISearchButton = page.locator('#BtnSearch');
        this.uIDateEdit = page.locator('#dttmCurrentDate_KPIDttmCtrl');
        this.uIVisitorGrdTble = page.locator("//div[@id='grdVstLog']");
    }

    async ClickAddVisitorButton(): Promise<void> {
        await this.uIAddVisitorButton.click();
    }

    async ClickAddFacilityVisitorButton(): Promise<void> {
        await this.uIAddFacilityVisitorButton.click();
    }

    async ClickPreviousVisitOpenButton(): Promise<void> {
        await this.uIPreviousVisitButton.click();
    }

   
    async SelectAtBuildingFilter(BuildingFilter: string): Promise<void> {
        await this.uIbuildingFilterDropdown.fill(BuildingFilter);
    }

    async SelectShowAllCheckBox(): Promise<void> {
        await this.uIShowAllCheckBox.click();
    }

    async SelectrecordfromGrid(): Promise<void> {
        await this.uIVisitorStatusGridtable.locator('td', { hasText: "252" }).click();
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async verifyScheduledDateAsCurrentDate(): Promise<void> {
        const date = await new GridHelpers(this.page).getGridCellInnerText(this.uIVisitorGrdTble, 'Schedule Date/Time', 0);
        const currentDate = DateHelpers.getCurrentDate();
        expect(date).toContain(currentDate);
    }

    async EnterdateAsFutureDate(): Promise<void> {
        await this.uIDateEdit.click();
        await this.uIDateEdit.fill(DateHelpers.getFutureDate(1));
    }

    async verifyScheduledDateAsFutureDate(): Promise<void> {
        const date = await new GridHelpers(this.page).getGridCellInnerText(this.uIVisitorGrdTble, 'Schedule Date/Time', 0);
        const futureDate = DateHelpers.getFutureDate(1);
        expect(date).toContain(futureDate);
    }

    async EnterdateAsPastDate(): Promise<void> {
        await this.uIDateEdit.click();
        await this.uIDateEdit.clear();
        await this.uIDateEdit.fill(DateHelpers.getPreviousDate(1));
    }

    async verifyScheduledDateAsPastDate(): Promise<void> {
        const date = await new GridHelpers(this.page).getGridCellInnerText(this.uIVisitorGrdTble, 'Schedule Date/Time', 0);
        const pastDate = DateHelpers.getPreviousDate(1);
        expect(date).toContain(pastDate);
    }

    async selectAtVisitorFromGrid(JsonKeyIndex: number): Promise<void> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + JsonKeyIndex);
        await this.uIVisitorStatusGridtable.locator('td', { hasText: VisitorName }).click();
    }

    async verifyAtVisitorNameIsNotListed(JsonKeyIndex: number, ColumnName: string): Promise<void> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + JsonKeyIndex);
        await expect(this.uIVisitorStatusGridtable).not.toContainText(VisitorName);
    }

    async verifyAtInmateNameIngridByVisitor(i: number, j: number): Promise<void> {
        const InmateName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'InmateName' + j);
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + i);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIVisitorStatusGridtable, VisitorName, 'Inmate');
        expect(await cell.innerText()).toEqual(InmateName);
    }

    async verifyAtVisitorInGrid(jsonIndex: number): Promise<void> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + jsonIndex);
        const visitor = await new GridHelpers(this.page).getGridCellInnerText(this.uIVisitorStatusGridtable, 'Visitor', 0);
        expect(visitor, "Visitior is not as expected in grid-->").toEqual(VisitorName);
    }

    async verifyAtBuildingInGrid(jsonIndex: number): Promise<void> {
        const Building = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Building' + jsonIndex);
        const building = await new GridHelpers(this.page).getGridCellInnerText(this.uIVisitorStatusGridtable, 'Building', 0);
        expect(building, "Building is not as expected in grid-->").toEqual(Building);
    }

    async verifyAtScheduleDateTimeInGrid(date: string): Promise<void> {
        const scheduleDateTime = await new GridHelpers(this.page).getGridCellInnerText(this.uIVisitorStatusGridtable, 'Schedule Date/Time', 0);
        expect(scheduleDateTime, "Schedule Date Time is not as expected in grid -->").toEqual(date);
    }

    async verifyAtArrTimeInGrid(arrTime: string): Promise<void> {
        const arrivalTime = await new GridHelpers(this.page).getGridCellInnerText(this.uIVisitorStatusGridtable, 'Arrival', 0);
        expect(arrivalTime, "Arrival Time is not same as expected in grid -->").toEqual(arrTime.substring(9));
    }

    async verifyAtStartTimeInGrid(startTime: string): Promise<void> {
        const start = await new GridHelpers(this.page).getGridCellInnerText(this.uIVisitorStatusGridtable, 'Start', 0);
        expect(start, "Start Time is not same as expected in grid -->").toEqual(startTime);
    }

    async verifyAtEndTimeInGrid(finishTime: string): Promise<void> {
        const end = await new GridHelpers(this.page).getGridCellInnerText(this.uIVisitorStatusGridtable, 'End', 0);
        expect(end, "End Time is not same as expected in grid -->").toContain(finishTime.substring(0, 5));
    }

    async enterdateAsFutureDate(noOfDates: number): Promise<void> {
        const futureDate = DateHelpers.getFutureDate(noOfDates);
        await this.uIDateEdit.click();
        await this.uIDateEdit.fill(futureDate);
    }

    async verifyAtBuildingUsingNameInGrid(jsonIndex: number): Promise<void> {
        const Building = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Building' + jsonIndex);
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIVisitorStatusGridtable, VisitorName, 'Building');
        const building = await cell.innerText();
        expect(building, "Building is not same as expected-->").toEqual(Building);
    }

    async verifyAtEndByUsingVistiorInGrid(jsonIndex: number): Promise<void> {
        const End = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'End' + jsonIndex);
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIVisitorStatusGridtable, VisitorName, 'End');
        const end = await cell.innerText();
        expect(end, "End time is not same as expected-->").toEqual(End);
    }

    async verifyEndTimeIsBlankByUsingVistiorInGrid(jsonIndex: number): Promise<void> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIVisitorStatusGridtable, VisitorName, 'End');
        const end = await cell.innerText();
        expect(end.trim()).toEqual('');
    }

    async verifyAtVisitorNameIsNotInGrid(jsonIndex: number): Promise<void> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + jsonIndex);
        await expect(this.uIVisitorStatusGridtable).not.toContainText(VisitorName);
    }

}

export class VisitorLogEntryPage {
    readonly page: Page;
    readonly uISPNNoEdit: Locator;
    readonly uIVisitorDropdown: Locator;
    readonly uINewButton: Locator;
    readonly uIArrivalButton: Locator;
    readonly uICommentsEdit: Locator;
    readonly uIVisitorBadgeEdit: Locator;
    readonly uIVisitLocationDropdown: Locator;
    readonly uIAreaDropdown: Locator;
    readonly uIBoothDropdown: Locator;
    readonly uIStartButton: Locator;
    readonly uIFinishButton: Locator;
    readonly uIStatusDropdown: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNcloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIAddButton: Locator;
    readonly uIStatusBar: Locator;
    readonly uIScheduledDateEdit: Locator;
    readonly uIScheduledTimeEdit: Locator;
    readonly uIVisitorLogGridTable: Locator;
    readonly uIStartTimeEdit: Locator;
    readonly uITimeRemainingInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISPNNoEdit = page.locator('#NamCtrlSPIN_SPN');
        this.uIVisitorDropdown = page.locator('#cddVisitorName');
        this.uINewButton = page.locator('#cmdNew');
        this.uIArrivalButton = page.locator('#cmdArrival');
        this.uICommentsEdit = page.locator('#txtComments');
        this.uIVisitorBadgeEdit = page.locator('#txtVstrBdg');
        this.uIVisitLocationDropdown = page.locator('#cddBuilding_DropDown');
        this.uIAreaDropdown = page.locator('#cddArea_DropDown');
        this.uIBoothDropdown = page.locator('#cddCubical_DropDown');
        this.uIStartButton = page.locator('#cmdStart');
        this.uIFinishButton = page.locator('#cmdFinish');
        this.uIStatusDropdown = page.locator('#cddStatus_DropDown');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNcloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIAddButton = page.locator('#cmdAddUpdate');
        this.uIStatusBar = page.locator("//td[@class='statusBar']//b");
        this.uIScheduledDateEdit = page.locator('#dttmScheduleDttm_Date_KPIDttmCtrl');
        this.uIScheduledTimeEdit = page.locator("//table[@id='dttmScheduleDttm_Time']//input");
        this.uIVisitorLogGridTable = page.locator('#grdVisitArrive');
        this.uIStartTimeEdit = page.locator("//table[@id='StrtTm_Time']//input");
        this.uITimeRemainingInput = page.locator('#txtTimeRemaining');
    }

    async EnterAtSPNNo(SPNNo: string): Promise<void> {
        await this.uISPNNoEdit.fill(SPNNo);
        await this.uISPNNoEdit.press('Tab');
    }

    async EnterAtSPNNo(i: number): Promise<void> {
        const SPNNo = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'SPNNo' + i);
        await this.uISPNNoEdit.fill(SPNNo);
        await this.uISPNNoEdit.press('Tab');
    }

    async SelectAtVisitor(Visitor: string): Promise<void> {
        await this.uIVisitorDropdown.selectOption({ label: Visitor });
    }

    async SelectVisitor(): Promise<void> {
        await this.uIVisitorDropdown.selectOption({ index: 1 });
    }

    async ClickNewButton(): Promise<void> {
        await this.uINewButton.click();
    }

    async ClickArrivalButton(): Promise<void> {
        await this.uIArrivalButton.click();
    }

    async EnterAtComments(Comments: string): Promise<void> {
        await this.uICommentsEdit.fill(Comments);
    }

    async EnterAtVisitorBadge(VisitorBadge: string): Promise<void> {
        await this.uIVisitorBadgeEdit.fill(VisitorBadge);
    }

    async SelectAtVisitLocation(VisitorLocation: string): Promise<void> {
        await this.uIVisitLocationDropdown.fill(VisitorLocation);
    }

    async SelectAtArea(Area: string): Promise<void> {
        await this.uIAreaDropdown.selectOption({ label: Area });
        await this.uIAreaDropdown.press('Tab');
    }

    async SelectAtBooth(Booth: string): Promise<void> {
        await this.uIBoothDropdown.selectOption({ label: Booth });
    }

    async SelectAtStatus(Status: string): Promise<void> {
        await this.uIStatusDropdown.selectOption({ label: Status });
    }

    async ClickStartButton(): Promise<void> {
        await this.uIStartButton.click();
        await new ConfirmPage(this.page).uIModalFooterYesButton.click();
    }

    async ClickFinishButton(): Promise<void> {
        await this.uIFinishButton.click();
    }

    async CloseVisitorLogEntry(): Promise<void> {
        await this.page.close();
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async SaveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).uIModalFooterYesButton.click();
    }

    async VerifyUpdateSuccessfulStatusMessage(): Promise<void> {
        expect(await this.uIStatusBar.innerText()).toEqual("1003 - Update Successful");
    }

    async EnterScheduledAsCurrentDateAndTime(): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        const futureTime = DateHelpers.getFutureTimeByHours(1, 'HHmm');
        await this.uIScheduledDateEdit.click();
        await this.uIScheduledDateEdit.fill(currentDate);
        await this.uIScheduledTimeEdit.click();
        await this.uIScheduledTimeEdit.fill(futureTime);
    }

    async EnterScheduledAsPreviousDateAndTime(): Promise<void> {
        const previousDate = DateHelpers.getPreviousDate(6);
        await this.uIScheduledDateEdit.click();
        await this.uIScheduledDateEdit.clear();
        await this.uIScheduledDateEdit.fill(previousDate);
        await this.uIScheduledTimeEdit.click();
        await this.uIScheduledTimeEdit.fill('0800');
    }

    async EnterAtSPNNo1(SPNNo1: string): Promise<void> {
        await this.uISPNNoEdit.fill(SPNNo1);
        await this.uISPNNoEdit.press('Tab');
    }

    async EnterScheduledAsFutureDateAndTime(): Promise<void> {
        const futureDate = DateHelpers.getFutureDate(6);
        const futureTime = DateHelpers.getFutureTimeByHours(1, 'HHmm');
        await this.uIScheduledDateEdit.click();
        await this.uIScheduledDateEdit.fill(futureDate);
        await this.uIScheduledTimeEdit.click();
        await this.uIScheduledTimeEdit.fill(futureTime);
    }

    async verifyAtVisitorNameInGrid(VisitorName: string): Promise<void> {
        const visitorName = await new GridHelpers(this.page).getGridCellInnerText(this.uIVisitorLogGridTable, 'Visitor Name', 0);
        expect(visitorName).toEqual(VisitorName);
    }

    async clickAtVisitorNameInGrid(VisitorName: string): Promise<void> {
        await this.uIVisitorLogGridTable.locator('td', { hasText: VisitorName }).click();
    }

    async clickAtVisitorNameInGrid(i: number): Promise<void> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + i);
        await this.uIVisitorLogGridTable.locator('td', { hasText: VisitorName }).click();
    }

    async verify30534SelectAreaAcknowledgement(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('(30534)Select Area');
    }

    async selectAtVisitorName(Visitor: string): Promise<void> {
        await this.uIVisitorLogGridTable.locator('td', { hasText: Visitor }).click();
    }

    async verifyAtComments(Comments: string): Promise<void> {
        const text = await this.uICommentsEdit.inputValue();
        expect(text).toEqual(Comments);
    }

    async verifyAtVisitorDropDown(i: number): Promise<void> {
        const Name = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Name' + i);
        await expect(this.uIVisitorDropdown).toContainText(Name);
    }

    async verifyAtVisitorIsNotListed(i: number): Promise<void> {
        const Name = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Name' + i);
        const dropdownText = await this.uIVisitorDropdown.innerText();
        expect(dropdownText).not.toContain(Name);
    }

    async clickReset(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async verify2555TheScheduleDateAcknowledge(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('(2555) The Scheduled Date/Time must be later than the Current Date/Time');
    }

    async verifyArrivalDateAsCurrentDateInGrid(): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        const currentTime = DateHelpers.getCurrentTime();
        const ArrivalDate = await new GridHelpers(this.page).getGridCellInnerText(this.uIVisitorLogGridTable, 'Arrival Date/Time', 0);
        expect(ArrivalDate).toEqual(currentDate + " " + currentTime);
    }

    async verifyStartTimeInGrid(): Promise<void> {
        const currentTime = DateHelpers.getCurrentTime();
        const StartTime = await new GridHelpers(this.page).getGridCellInnerText(this.uIVisitorLogGridTable, 'Start', 0);
        expect(StartTime).toEqual(currentTime);
    }

    async verifyStartButtonIsDisabled(): Promise<void> {
        await expect(this.uIStartButton).toBeDisabled();
    }

    async verifyCurrentTimeInField(): Promise<void> {
        const currentTime = DateHelpers.getCurrentTime();
        const startTime = await this.uIStartTimeEdit.inputValue();
        expect(startTime).toEqual(currentTime);
    }

    async verifyFinishButtonIsEnable(): Promise<void> {
        await expect(this.uIFinishButton).toBeEnabled();
    }

    async clearScheduledDateAndTime(): Promise<void> {
        await this.uIScheduledDateEdit.click();
        await this.uIScheduledDateEdit.clear();
        await this.uIScheduledTimeEdit.click();
        await this.uIScheduledTimeEdit.clear();
    }

    async selectAtVisitor(i: number): Promise<void> {
        const Visitor = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Visitor' + i);
        await this.uIVisitorDropdown.selectOption({ label: Visitor });
    }

    async selectAtVisitorNameInGrid(i: number): Promise<void> {
        const Visitor = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + i);
        await this.uIVisitorLogGridTable.locator('td', { hasText: Visitor }).click();
    }

    async verifyStatusDropdownIsEnabled(): Promise<void> {
        await expect(this.uIStatusDropdown).toBeEnabled();
    }

    async verifyStartButtonIsEnabled(): Promise<void> {
        await expect(this.uIStartButton).toBeEnabled();
    }

    async getStartTime(): Promise<string> {
        return await this.uIStartTimeEdit.inputValue();
    }

    async verifyAtScheduleDateByUsingVisitorNameInGrid(jsonIndex: number, ScheduleDate: string): Promise<void> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIVisitorLogGridTable, VisitorName, 'Schedule Date/Time');
        const scheduleDate = await cell.innerText();
        expect(scheduleDate, "Schedule Date is not same as expected-->").toEqual(ScheduleDate);
    }

    async verifyArrivalButtonIsEnabled(): Promise<void> {
        await expect(this.uIArrivalButton).toBeEnabled();
    }

    async verifyAtTimeRemainingIsDisplayed(): Promise<void> {
        await expect(this.uITimeRemainingInput).toBeEnabled();
    }

    async verifyAtTimeRemainingIsNotNull(): Promise<void> {
        const value = await this.uITimeRemainingInput.inputValue();
        expect(value.length).toBeGreaterThan(0);
    }

    async verifyFinishButtonIsEnabled(): Promise<void> {
        await expect(this.uIFinishButton).toBeEnabled();
    }

    async verify30058AcknowledgePopup(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('(30058) Inmate is not in custody');
    }

    async verify30573AcknowledgePopup(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('(30573) Inmate already in visitation');
    }

    async verify30001AcknowledgePopup(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('(30001) SPN No does not exist');
    }

    async verifyTimeRemainingIsYellowColor(): Promise<void> {
        const bgColor = await this.uITimeRemainingInput.evaluate(el => getComputedStyle(el).backgroundColor);
        expect(bgColor).toEqual('rgba(255, 255, 0, 1)');
    }

    async verifyTimeRemainingIsRedColor(): Promise<void> {
        const bgColor = await this.uITimeRemainingInput.evaluate(el => getComputedStyle(el).backgroundColor);
        expect(bgColor).toEqual('rgba(255, 0, 0, 1)');
    }

    async verifyTimeRemainingIsLessThanZero(): Promise<void> {
        const value = await this.uITimeRemainingInput.inputValue();
        const TimeRemainingNum = parseInt(value);
        expect(TimeRemainingNum).toBeLessThan(0);
    }

    async verifyAt30661AcknowledgePopup(jsonIndex: number): Promise<void> {
        const Visitor = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Visitor' + jsonIndex);
        await new AcknowledgePage(this.page).okWithExpectedMessage('(30661) ' + Visitor + ' is not allowed to visit.');
    }

    async getScheduleDate(): Promise<string> {
        return await this.uIScheduledDateEdit.inputValue();
    }

    async getScheduleTime(): Promise<string> {
        return await this.uIScheduledTimeEdit.inputValue();
    }

    async verifyAtScheduleDateAndTimeByNameInGrid(scheduleDate1: string, scheduleTime1: string, visitorJsonIndex: number): Promise<void> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + visitorJsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIVisitorLogGridTable, VisitorName, 'Schedule Date/Time');
        const scheduleDateTime = await cell.innerText();
        expect(scheduleDateTime, "Schedule Date Time is not same as expected-->").toEqual(scheduleDate1 + " " + scheduleTime1);
    }

    async verifyAtArrivalDateAndTimeByUsingNameInGrid(visitorJsonIndex: number): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        const currentTime = DateHelpers.getCurrentTime();
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + visitorJsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIVisitorLogGridTable, VisitorName, 'Arrival Date/Time');
        const arrivalDateTime = await cell.innerText();
        expect(arrivalDateTime, "Arrival Date Time is not same as expected-->").toEqual(currentDate + " " + currentTime);
    }

    async ClickStartButtonWithoutConfirmPopup(): Promise<void> {
        await this.uIStartButton.click();
    }

    async verifyAtStartTimeByUsingNameInGrid(jsonIndex: number): Promise<void> {
        const currentTime = DateHelpers.getCurrentTime();
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIVisitorLogGridTable, VisitorName, 'Start');
        const startTime = await cell.innerText();
        expect(startTime, "Start Time is not same as expected-->").toEqual(currentTime);
    }

}

export class FacilityVisitorLogEntryPage {
    readonly page: Page;
    readonly uIVisitorNameTypeEdit: Locator;
    readonly uIVisitorNameIDEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIFacilityVisitReasaon: Locator;
    readonly uIVisitorBadgeEdit: Locator;
    readonly uIBuildingDropdown: Locator;
    readonly uIAuthorizedAreaDropdown: Locator;
    readonly uIStartButton: Locator;
    readonly uIStatusDropdown: Locator;
    readonly uIFinishButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNcloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIStatusBar: Locator;
    readonly uIFacilityGrid: Locator;
    readonly uIArrivalButton: Locator;
    readonly uIStartTimeEdit: Locator;
    readonly uIFinishTimeEdit: Locator;
    readonly uIScheduleDateEdit: Locator;
    readonly uIScheduleTimeEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIVisitorNameTypeEdit = page.locator('#VisitorNameCtrl_NameType');
        this.uIVisitorNameIDEdit = page.locator('#VisitorNameCtrl_NameTypeID');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIClearButton = page.locator('#cmdClear');
        this.uIFacilityVisitReasaon = page.locator('#cddFacVisitReason_DropDown');
        this.uIVisitorBadgeEdit = page.locator('#txtVstrBdg');
        this.uIBuildingDropdown = page.locator('#cddBuilding_DropDown');
        this.uIAuthorizedAreaDropdown = page.locator('#cddArea_DropDown');
        this.uIStartButton = page.locator('#cmdStart');
        this.uIStatusDropdown = page.locator('#cddStatus_DropDown');
        this.uIFinishButton = page.locator('#cmdFinish');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNcloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIStatusBar = page.locator("//td[@class='statusBar']//b");
        this.uIFacilityGrid = page.locator("//div[@id='grdVisitArrive']");
        this.uIArrivalButton = page.locator('#cmdArrival');
        this.uIStartTimeEdit = page.locator("//table[@id='StrtTm_Time']//input");
        this.uIFinishTimeEdit = page.locator("//table[@id='FnshTm_Time']//input");
        this.uIScheduleDateEdit = page.locator("//input[@id='dttmScheduleDttm_Date_KPIDttmCtrl']");
        this.uIScheduleTimeEdit = page.locator("//table[@id='dttmScheduleDttm_Time']//input");
    }

    async EnterAtVisitorName(JsonKeyIndex: number, VisitorNameType: string, VisitorNameID: string): Promise<void> {
        await this.uIVisitorNameTypeEdit.fill(VisitorNameType);
        await this.uIVisitorNameIDEdit.fill(VisitorNameID);
        await this.uIVisitorNameIDEdit.fill(VisitorNameID);
    }

    async SelectFacilityVisitReason(FacilityVisitReason: string): Promise<void> {
        await this.uIFacilityVisitReasaon.selectOption({ label: FacilityVisitReason });
    }

    async EnterAtVisitorBadge(VisitorBadge: string): Promise<void> {
        await this.uIVisitorBadgeEdit.fill(VisitorBadge);
    }

    async SelectAtVisitLocation(VisitLocation: string): Promise<void> {
        await this.uIBuildingDropdown.selectOption({ label: VisitLocation });
    }

    async SelectAtAuthorizedArea(AuthorizedArea: string): Promise<void> {
        await this.uIAuthorizedAreaDropdown.fill(AuthorizedArea);
    }

    async SelectAtStatus(Status: string): Promise<void> {
        await this.uIStatusDropdown.selectOption({ label: Status });
    }

    async ClickStartButton(): Promise<void> {
        await this.uIStartButton.click();
    }

    async ClickFinishButton(): Promise<void> {
        await this.uIFinishButton.click();
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async ClickClearButton(): Promise<void> {
        await this.uIClearButton.click();
    }

    async VerifyUpdateSuccessfulStatusMessage(): Promise<void> {
        expect(await this.uIStatusBar.innerText()).toEqual("1003 - Update Successful");
    }

    async verifyVisitorNameOnGrid(): Promise<void> {
        const gridHelpers = new GridHelpers(this.page);
        const rowCount = await gridHelpers.getRowCount(this.uIFacilityGrid);
        for (let i = 0; i < rowCount; i++) {
            await gridHelpers.selectRowByIndex(this.uIFacilityGrid, i);
        }
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).uIModalFooterYesButton.click();
    }

    async selectAtVisitorNameInGrid(jsonKeyIndex: number): Promise<void> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + jsonKeyIndex);
        await this.uIFacilityGrid.locator('td', { hasText: VisitorName }).click();
    }

    async verifyAtVistorNameInGrid(JsonKeyIndex: number): Promise<void> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + JsonKeyIndex);
        await expect(this.uIFacilityGrid).toContainText(VisitorName);
    }

    async verifyStartButtonIsDisabled(): Promise<void> {
        await expect(this.uIStartButton).toBeDisabled();
    }

    async verifyFinishButtonIsDisabled(): Promise<void> {
        await expect(this.uIFinishButton).toBeDisabled();
    }

    async clickArrivalButton(): Promise<void> {
        await this.uIArrivalButton.click();
    }

    async verifyAtArrivalDateByVisitorName(JSONkeyIndex: number): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + JSONkeyIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIFacilityGrid, VisitorName, 'Arrival Date/Time');
        const text = await cell.innerText();
        expect(text).toContain(currentDate);
    }

    async getCurrentDateAndTime(Minutes: number): Promise<string> {
        const currentDate = DateHelpers.getCurrentDate();
        const currentTime = DateHelpers.getCurrentTime();
        return currentDate + ' ' + currentTime;
    }

    async clickStartButtonWithConfirm(): Promise<void> {
        await this.uIStartButton.click();
        await new ConfirmPage(this.page).uIModalFooterYesButton.click();
    }

    async verifyAtStartTime(Time: string): Promise<void> {
        const StartTime = await this.uIStartTimeEdit.inputValue();
        expect(StartTime).toContain(Time.substring(0, 2));
    }

    async getCurrentTime(): Promise<string> {
        return DateHelpers.getCurrentTime();
    }

    async getStartTime(): Promise<string> {
        return await this.uIStartTimeEdit.inputValue();
    }

    async verifyAtStartTimeByVistorNameInGrid(StartTime: string, JsonKeyIndex: number): Promise<void> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + JsonKeyIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIFacilityGrid, VisitorName, 'Start');
        const VisitorNameStartName = await cell.innerText();
        expect(StartTime).toEqual(VisitorNameStartName);
    }

    async clickFinishButtonWithConfirm(): Promise<void> {
        await this.uIFinishButton.click();
        await new ConfirmPage(this.page).uIModalFooterYesButton.click();
    }

    async verifyAtFinishedTime(Time: string): Promise<void> {
        const FinishedTime = await this.uIFinishTimeEdit.inputValue();
        expect(Time).toEqual(FinishedTime);
    }

    async verifyFinishedTimeIsBlank(): Promise<void> {
        const FinishedTime = await this.uIFinishTimeEdit.inputValue();
        expect(FinishedTime.trim()).toEqual('');
    }

    async verifyWindowNotExist(): Promise<void> {
        expect(this.page.isClosed()).toBeTruthy();
    }

    async deleteAtVistorNameInGrid(JsonKeyIndex: number): Promise<void> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + JsonKeyIndex);
        await new GridHelpers(this.page).selectRowCheckboxByCellText(this.uIFacilityGrid, VisitorName);
    }

    async verify7234VisitationForThisVisitorHasStartedAndCannotBeDeleted(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('(7234) Visitation for this Visitor has started and cannot be deleted.');
    }

    async verifystatusFieldIsDisabled(): Promise<void> {
        await expect(this.uIStatusDropdown).toBeDisabled();
    }

    async tabOutScheduleDate(): Promise<void> {
        await this.uIScheduleDateEdit.press('Tab');
    }

    async enterScheduleTimeAsFutureTime(Time: number): Promise<void> {
        const futureTime = DateHelpers.getFutureTimeByHours(1, 'HH:mm');
        await this.uIScheduleTimeEdit.fill(futureTime);
    }

    async clickResetIcon(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async enterAtScheduleDateAndTime(jsonIndex: number): Promise<void> {
        const Date = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'ScheduleDate' + jsonIndex);
        const Time = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'ScheduleTime' + jsonIndex);
        await this.uIScheduleDateEdit.fill(Date);
        await this.uIScheduleTimeEdit.fill(Time);
    }

    async verify2555AcknowledgePopup(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('(2555) The Scheduled Date/Time must be later than the Current Date/Time');
    }

    async clearScheduleDateAndTime(): Promise<void> {
        await this.uIScheduleDateEdit.click();
        await this.uIScheduleDateEdit.clear();
    }

    async enterFutureScheduleDateAndTime(): Promise<void> {
        const futureDate = DateHelpers.getFutureDate(1);
        const currentTime = DateHelpers.getCurrentTime();
        await this.uIScheduleDateEdit.fill(futureDate);
        await this.uIScheduleTimeEdit.fill(currentTime);
    }

    async verifyAtVisitorNameInGrid(Name: string): Promise<void> {
        await expect(this.uIFacilityGrid).toContainText(Name);
    }

    async clickAtVisitorNameInGrid(JsonIndex: number): Promise<void> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + JsonIndex);
        await this.uIFacilityGrid.locator('td', { hasText: VisitorName }).click();
    }

    async verifyArrivalButtonIsEnabled(): Promise<void> {
        await expect(this.uIArrivalButton).toBeEnabled();
    }

    async verifyStartButtonIsEnabled(): Promise<void> {
        await expect(this.uIStartButton).toBeEnabled();
    }

    async verifyFinishButtonIsEnabled(): Promise<void> {
        await expect(this.uIFinishButton).toBeEnabled();
    }

    async enterPastScheduledDateTime(noOfDays: number): Promise<void> {
        const previousDate = DateHelpers.getPreviousDate(noOfDays);
        const currentTime = DateHelpers.getCurrentTime();
        await this.uIScheduleDateEdit.fill(previousDate);
        await this.uIScheduleTimeEdit.fill(currentTime);
    }

    async verifyScheduleDateByUsingNameDateInGrid(jsonIndex: number): Promise<void> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + jsonIndex);
        const futureDate = DateHelpers.getFutureDate(1);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIFacilityGrid, VisitorName, 'Schedule Date/Time');
        const date = await cell.innerText();
        expect(date).toContain(futureDate.substring(0, 6));
    }

    async getScheduleDateTimeByUsingNameFromGrid(VisitorName: string): Promise<string> {
        const cell = await new GridHelpers(this.page).getGridCell(this.uIFacilityGrid, VisitorName, 'Schedule Date/Time');
        return await cell.innerText();
    }

    async getScheduleDateTimeByUsingNameFromGrid(jsonIndex: number): Promise<string> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIFacilityGrid, VisitorName, 'Schedule Date/Time');
        return await cell.innerText();
    }

    async getArrivalDateByUsingNameInGrid(VisitorName: string): Promise<string> {
        const cell = await new GridHelpers(this.page).getGridCell(this.uIFacilityGrid, VisitorName, 'Arrival Date/Time');
        return await cell.innerText();
    }

    async clickYesOnSavePopup(): Promise<void> {
        await new ConfirmPage(this.page).uIModalFooterYesButton.click();
    }

    async verifyAtStartTimeInGrid(jsonIndex: number): Promise<void> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + jsonIndex);
        const currentTime = DateHelpers.getCurrentTime();
        const cell = await new GridHelpers(this.page).getGridCell(this.uIFacilityGrid, VisitorName, 'Start');
        const date = await cell.innerText();
        expect(date).toContain(currentTime.substring(0, 2));
    }

    async getStartTimeByUsingNameInGrid(jsonIndex: number): Promise<string> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIFacilityGrid, VisitorName, 'Start');
        return await cell.innerText();
    }

    async verifyStatusDropdownIsEnabled(): Promise<void> {
        await expect(this.uIStatusDropdown).toBeEnabled();
    }

    async getFinishTime(): Promise<string> {
        return await this.uIFinishTimeEdit.inputValue();
    }

    async verifyAtScheduleDateInGrid(scheduleDate: string, jsonIndex: number): Promise<void> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIFacilityGrid, VisitorName, 'Schedule Date/Time');
        const ScheduleDate = await cell.innerText();
        expect(ScheduleDate, "Schedule Date is not same as expected -->").toEqual(scheduleDate);
    }

    async verifyAtArrivalDateInGrid(arrivalDate: string, jsonIndex: number): Promise<void> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIFacilityGrid, VisitorName, 'Arrival Date/Time');
        const ArrivalDate = await cell.innerText();
        expect(ArrivalDate, "Arrival Date is not same as expected -->").toEqual(arrivalDate);
    }

    async verifyAtStartTimeInGrid(startTime: string, jsonIndex: number): Promise<void> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIFacilityGrid, VisitorName, 'Start');
        const StartTime = await cell.innerText();
        expect(StartTime, "Start Time is not same as expected -->").toEqual(startTime);
    }

    async verifyAtFinishTimeInGrid(finishTime: string, jsonIndex: number): Promise<void> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIFacilityGrid, VisitorName, 'Finish');
        const FinishTime = await cell.innerText();
        expect(FinishTime, "Finish Time is not same as expected -->").toContain(finishTime.substring(0, 5));
    }

    async verifyAtStatusInGrid(jsonIndex: number): Promise<void> {
        const Status = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Status' + jsonIndex);
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIFacilityGrid, VisitorName, 'Status');
        const status = await cell.innerText();
        expect(status).toEqual(Status);
    }

    async getArrivalDateByUsingNameInGrid(jsonIndex: number): Promise<string> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIFacilityGrid, VisitorName, 'Arrival Date/Time');
        return await cell.innerText();
    }

    async verifyAtScheduleDateAndTimeInGrid(Date: string, Time: string, jsonIndex: number): Promise<void> {
        const VisitorName = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'VisitorName' + jsonIndex);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIFacilityGrid, VisitorName, 'Schedule Date/Time');
        const ScheduleDate = await cell.innerText();
        expect(ScheduleDate, "Schedule Date Time is not same as expected -->").toEqual(Date + " " + Time);
    }

    async enterAtScheduleDateAndTimeAsFuture(jsonIndex: number): Promise<void> {
        const futureDate = DateHelpers.getFutureDate(jsonIndex);
        const futureTime = DateHelpers.getFutureTimeByHours(jsonIndex, 'HH:mm');
        await this.uIScheduleDateEdit.fill(futureDate);
        await this.uIScheduleTimeEdit.fill(futureTime);
    }

    async getScheduleDate(): Promise<string> {
        return await this.uIScheduleDateEdit.inputValue();
    }

    async getScheduleTime(): Promise<string> {
        return await this.uIScheduleTimeEdit.inputValue();
    }

}

export class TxtEditorPage {
    readonly page: Page;
    readonly uItxtEditorSaveNCloseBtn: Locator;
    readonly uICommentsRichTextEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uItxtEditorSaveNCloseBtn = page.locator('#cmdSaveNClose');
        this.uICommentsRichTextEdit = page.locator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
    }

}

export class VerifyNameEntryPage {
    readonly page: Page;
    readonly uIBypassReaderButton: Locator;
    readonly uICommentEdit: Locator;
    readonly uIOfficerCodeEdit: Locator;
    readonly uIOKButton: Locator;
    readonly uICancelButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIBypassReaderButton = page.locator('#cmdBypassReader');
        this.uICommentEdit = page.locator('#txtComment');
        this.uIOfficerCodeEdit = page.locator('#lupOfficers_CodeValue');
        this.uIOKButton = page.locator('#btnok');
        this.uICancelButton = page.locator('#btnbypassClose');
    }

    async ClickBypassReaderButton(): Promise<void> {
        await this.uIBypassReaderButton.click();
    }

    async EnterAtComments(): Promise<void> {
        await this.uICommentEdit.press('Tab');
    }

    async EnterOfficer(): Promise<void> {
        await this.uIOfficerCodeEdit.press('Tab');
    }

    async ClickOKButton(): Promise<void> {
        await this.uIOKButton.click();
    }

    async ClickCancelButton(): Promise<void> {
        await this.uICancelButton.click();
    }

    async CloseverifyNameEntry(): Promise<void> {
        await this.page.close();
    }

}

export class PropertyEntryPage {
    readonly page: Page;
    readonly uIReportedDateEdit: Locator;
    readonly uIReportedTimeEdit: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uIReasonDrodown: Locator;
    readonly uIPTCDrodown: Locator;
    readonly uIMainTabDescriptionEdit: Locator;
    readonly uISaveNCloseButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIReportedDateEdit = page.locator('#dttRecDttm_Date_KPIDttmCtrl');
        this.uIReportedTimeEdit = page.locator("//table[@id='dttRecDttm_Time'] //input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIDescriptionEdit = page.locator('#txtDescription');
        this.uIReasonDrodown = page.locator('#tabProperty_tmpl0_UsrProperty1_cddReason_DropDown');
        this.uIPTCDrodown = page.locator('#tabProperty_tmpl0_UsrProperty1_cddPropCat_DropDown');
        this.uIMainTabDescriptionEdit = page.locator('#tabProperty_tmpl0_UsrProperty1_txtDescription');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
    }

    async EnterReportedDateTime(): Promise<void> {
        await this.uIReportedDateEdit.press('Tab');
        await this.uIReportedTimeEdit.press('Tab');
    }

    async EnterAtDescription(): Promise<void> {
        await this.uIDescriptionEdit.fill(RandomHelpers.randomString(10));
    }

    async SelectAtReason(): Promise<void> {
        await this.uIReasonDrodown.selectOption({ index: 1 });
    }

    async SelectAtPTC(): Promise<void> {
        await this.uIPTCDrodown.selectOption({ index: 1 });
    }

    async EnterAtMaintabDescription(): Promise<void> {
        await this.uIMainTabDescriptionEdit.fill(RandomHelpers.randomString(10));
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

}

export class SanctionPage {
    readonly page: Page;
    readonly uISanctionCodeEdit: Locator;
    readonly uISanctionAddIcon: Locator;
    readonly uISanctionResetIcon: Locator;
    readonly uISanctionButton: Locator;
    readonly uIDurationperiodEdit: Locator;
    readonly uIDurationtypeEdit: Locator;
    readonly uIConsectiveEdit: Locator;
    readonly uIStartDateEdit: Locator;
    readonly uIStartTimeEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uISaveNCloseButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISanctionCodeEdit = page.locator('#lupSanction_CodeValue');
        this.uISanctionAddIcon = page.locator('#cmdLupAdd');
        this.uISanctionResetIcon = page.locator('#cmdLupClear');
        this.uISanctionButton = page.locator('#cmdSanction');
        this.uIDurationperiodEdit = page.locator('#txtDuration');
        this.uIDurationtypeEdit = page.locator('#cddDuration_DropDown');
        this.uIConsectiveEdit = page.locator('#lupConsecutive_CodeValue');
        this.uIStartDateEdit = page.locator('#dtStart_Date_KPIDttmCtrl');
        this.uIStartTimeEdit = page.locator("//table[@id='dtStart_Time'] //input[@class='textboxdatetime igte_RedThemeEditInContainer']");
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIClearButton = page.locator('#cmdClear');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
    }

}

export class CMSAssociationPage {
    readonly page: Page;
    readonly uIAssociationTypeDropdown: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameIDEdit: Locator;
    readonly uIRelationshipDropdown: Locator;
    readonly uIReciprocalRelationshipDropdown: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uILastNameEdit: Locator;
    readonly uINameLookUp: Locator;
    readonly uISaveButton: Locator;
    readonly uIYesButton: Locator;
    readonly uIInCustodyPopup: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAssociationTypeDropdown = page.locator('#cddAssocType');
        this.uINameTypeEdit = page.locator('#nNameID_NameType');
        this.uINameIDEdit = page.locator('#nNameID_NameTypeID');
        this.uIRelationshipDropdown = page.locator('#cddRelation_DropDown');
        this.uIReciprocalRelationshipDropdown = page.locator('#cddRecRelation_DropDown');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uILastNameEdit = page.locator('#nNameID_LastName');
        this.uINameLookUp = page.locator('#nNameID_imgSrch');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIYesButton = page.locator("//button[@class='confirm btn btn-primary']");
        this.uIInCustodyPopup = page.locator("//div[@class='modal-body']");
    }

    async SelectAssociationType(AssociationType: string): Promise<void> {
        await this.uIAssociationTypeDropdown.selectOption({ label: AssociationType });
    }

    async EnterAtVisitorName(NameType: string, NameID: string): Promise<void> {
        await this.uINameTypeEdit.fill(NameType);
        await this.uINameIDEdit.fill(NameID);
        await this.uILastNameEdit.fill("s");
        await this.uINameIDEdit.press('Tab');
    }

    async SelectRelationship(): Promise<void> {
        await this.uIRelationshipDropdown.selectOption({ index: 1 });
    }

    async SelectReciprocalRelationship(): Promise<void> {
        await this.uIReciprocalRelationshipDropdown.selectOption({ index: 1 });
    }

    async saveAndCloseScreen(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do you want to save all of the entered details?');
    }

    async SelectAtAssociationType(AssociationType: string): Promise<void> {
        await this.uIAssociationTypeDropdown.selectOption({ label: AssociationType });
        await this.uIAssociationTypeDropdown.press('Tab');
    }

    async clickNameLookUpIcon(): Promise<void> {
        await this.uINameLookUp.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
    }

    async EnterNameID(): Promise<void> {
        await this.uINameTypeEdit.fill("A");
        await this.uINameTypeEdit.press('Tab');
    }

    async EnterAtFirstName(): Promise<void> {
        await this.uILastNameEdit.fill("s");
        await this.uILastNameEdit.press('Tab');
        await this.uILastNameEdit.press('Tab');
    }

    async EnterAtName(NameID: string): Promise<void> {
        await this.uINameTypeEdit.fill(NameID.substring(0, 1));
        await this.uINameIDEdit.fill(NameID.substring(2));
        await this.uINameIDEdit.press('Tab');
    }

    async EnterAtName1(NameID1: string): Promise<void> {
        await this.uINameTypeEdit.fill(NameID1.substring(0, 1));
        await this.uINameIDEdit.fill(NameID1.substring(2));
        await this.uINameIDEdit.press('Tab');
    }

    async verify30635InmateInCustodyPopup(): Promise<void> {
        const custodyPopup = await this.uIInCustodyPopup.innerText();
        expect(custodyPopup).toContain('(30635)Inmate is currently in custody');
        expect(custodyPopup).toContain('Do you wish to allow this visit?');
        await this.uIYesButton.click();
    }

    async enterAtNameID(i: number): Promise<void> {
        const NameID = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'NameID' + i);
        await this.uINameTypeEdit.fill(NameID.substring(0, 1));
        await this.uINameIDEdit.fill(NameID.substring(2));
        await this.uINameIDEdit.press('Tab');
    }

    async selectAtRelationShip(jsonIndex: number): Promise<void> {
        const Relationship = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Relationship' + jsonIndex);
        await this.uIRelationshipDropdown.selectOption({ label: Relationship });
    }

    async selectAtReciprocalRelationShip(jsonIndex: number): Promise<void> {
        const ReciprocalRelationship = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'ReciprocalRelationship' + jsonIndex);
        await this.uIReciprocalRelationshipDropdown.selectOption({ label: ReciprocalRelationship });
    }

}

export class DisciplinaryTxteditorPage {
    readonly page: Page;
    readonly uItxtEditorSaveNCloseBtn: Locator;
    readonly uICommentsRichTextEdit: Locator;
    readonly uISignreportLabel: Locator;
    readonly uISignReportCheckBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uItxtEditorSaveNCloseBtn = page.locator('#cmdSaveNClose');
        this.uICommentsRichTextEdit = page.locator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        this.uISignreportLabel = page.locator("//label[text()=' Sign Report?']");
        this.uISignReportCheckBox = page.locator('#ChkSignReport');
    }

    async EnterAtNotes(): Promise<void> {
        await this.uICommentsRichTextEdit.click();
        await this.uICommentsRichTextEdit.fill(RandomHelpers.randomString(100));
    }

    async SaveNCloseScreen(): Promise<void> {
        await this.uItxtEditorSaveNCloseBtn.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3)Do You Want To Save All Of The Entered Details?');
    }

    async clickSignReportCheckBox(): Promise<void> {
        await this.uISignReportCheckBox.click();
    }

    async verifySignReportLabelAsMandatory(): Promise<void> {
        const color = await this.uISignreportLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toEqual('rgba(139, 0, 0, 1)');
    }

    async verifySignReportLabelAsNonMandatory(): Promise<void> {
        const color = await this.uISignreportLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toEqual('rgba(0, 0, 0, 1)');
    }

    async saveScreen(): Promise<void> {
        await this.uItxtEditorSaveNCloseBtn.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3)Do You Want To Save All Of The Entered Details?');
    }

    async clickSave(): Promise<void> {
        await this.uItxtEditorSaveNCloseBtn.click();
    }

    async verify30098PleaseSelectSignReportAckMessage(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('(30098)Please Select Sign Report.');
    }

    async verifySignReportCheckBoxIsChecked(): Promise<void> {
        await expect(this.uISignReportCheckBox).toBeChecked();
        await expect(this.uISignReportCheckBox).toBeDisabled();
    }

    async enterAtNotes(jsonIndex: number): Promise<void> {
        const Notes = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Notes' + jsonIndex);
        await this.uICommentsRichTextEdit.click();
        await this.uICommentsRichTextEdit.fill(Notes);
    }

}

export class SharedCodesPage {
    readonly page: Page;
    readonly uIAddNew: Locator;
    readonly uICodeValue: Locator;
    readonly uIDescription: Locator;
    readonly uIAddButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddNew = page.locator('#cmdAddNew');
        this.uICodeValue = page.locator('#txtCodeValue');
        this.uIDescription = page.locator('#txtDescription');
        this.uIAddButton = page.locator('#cmdAdd');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNew.click();
    }

    async EnterAtCodeValue(CodeValue: string): Promise<void> {
        await this.uICodeValue.fill(CodeValue);
    }

    async EnterAtDescription(Description: string): Promise<void> {
        await this.uIDescription.fill(Description);
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
    }

}

export class InsideSignOutInPage {
    readonly page: Page;
    readonly uIInsideGridTable: Locator;
    readonly uIMoveButton: Locator;
    readonly uIBatchOutButton: Locator;
    readonly uIBatchInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIInsideGridTable = page.locator("//div[@id='grdEvents']");
        this.uIMoveButton = page.locator('#btnUpdate');
        this.uIBatchOutButton = page.locator('#btnBatchOut');
        this.uIBatchInButton = page.locator('#btnBatchIn');
    }

    async SelectClassificationInGrid(Name: string): Promise<void> {
        await this.uIInsideGridTable.locator('td', { hasText: Name }).click();
        await new ConfirmPage(this.page).uIModalFooterYesButton.click();
    }

    async ClickMoveButton(): Promise<void> {
        await this.uIMoveButton.click();
    }

    async CloseInsideSignOutIn(): Promise<void> {
        await this.page.close();
    }

    async selectAtGridRowCheckboxByName(i: number): Promise<void> {
        const Name = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Name' + i);
        await new GridHelpers(this.page).selectRowCheckboxByCellText(this.uIInsideGridTable, Name);
    }

    async clickBatchOutButton(): Promise<void> {
        await this.uIBatchOutButton.click();
    }

    async clickBatchInButton(): Promise<void> {
        await this.uIBatchInButton.click();
    }

    async verifyAtNameInGrid(i: number): Promise<void> {
        const name = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Name' + i);
        await expect(this.uIInsideGridTable).toContainText(name);
    }

    async verifyAtSignByNameInGrid(i: number): Promise<void> {
        const name = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Name' + i);
        const sign = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Sign' + i);
        const cell = await new GridHelpers(this.page).getGridCell(this.uIInsideGridTable, name, 'Sign');
        expect(await cell.innerText()).toEqual(sign);
    }

    async verifyAtNameNotAvailableInGrid(i: number): Promise<void> {
        const name = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Name' + i);
        await expect(this.uIInsideGridTable).not.toContainText(name);
    }

}

export class OutsideSignOutInPage {
    readonly page: Page;
    readonly uIOutsideGridTable: Locator;
    readonly uIYesButton: Locator;
    readonly uIUpdateButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIOutsideGridTable = page.locator("//div[@id='grdEvents']");
        this.uIYesButton = page.locator("//button[@class='confirm btn btn-primary']");
        this.uIUpdateButton = page.locator('#btnUpdate');
    }

    async SelectClassificationInGrid(Name: string): Promise<void> {
        await this.uIOutsideGridTable.locator('td', { hasText: Name }).click();
        await this.uIYesButton.click();
    }

    async ClickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }

    async CloseOutsideSignOutIn(): Promise<void> {
        await this.page.close();
    }

    async SelectClassificationInGrid1(Name: string): Promise<void> {
        await this.uIOutsideGridTable.locator('td', { hasText: Name }).click();
    }

}

export class BuildingImageDisplayPage {
    readonly page: Page;
    readonly uIBunkID: Locator;
    readonly uIBunkIDEntry: Locator;
    readonly uIBedAndBunk: Locator;
    readonly uIAssignButton: Locator;
    readonly uIBuildingDropdown: Locator;
    readonly uIFloorEdit: Locator;
    readonly uICellGrid: Locator;
    readonly uISaveIcon: Locator;
    readonly uISaveAndCloseIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIBunkID = page.locator('#h100010000221718');
        this.uIBunkIDEntry = page.locator('#h100010000221802');
        this.uIBedAndBunk = page.locator("(//div[@id='grdCellNumber']//table//tr)[7]");
        this.uIAssignButton = page.locator('#cmdAssign');
        this.uIBuildingDropdown = page.locator('#cddBuilding_DropDown');
        this.uIFloorEdit = page.locator('#lupFloor_CodeValue');
        this.uICellGrid = page.locator('#grdCellNumber');
        this.uISaveIcon = page.locator('#cmdSave');
        this.uISaveAndCloseIcon = page.locator('#cmdSaveNClose');
    }

    async ClickBunkID(): Promise<void> {
        await this.uIBunkID.click();
    }

    async ClickBunkIDEntry(): Promise<void> {
        await this.uIBunkIDEntry.click();
    }

    async ClickBedAndBunkID(): Promise<void> {
        await this.uIBedAndBunk.click();
    }

    async ClickAssignButton(): Promise<void> {
        await this.uIAssignButton.click();
    }

    async selectAtBuilding(jsonIndex: number): Promise<void> {
        const Building = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Building' + jsonIndex);
        await this.uIBuildingDropdown.selectOption({ label: Building });
    }

    async enterAtFloor(jsonIndex: number): Promise<void> {
        const Floor = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Floor' + jsonIndex);
        await this.uIFloorEdit.fill(Floor);
        await this.uIFloorEdit.press('Tab');
    }

    async verifyAtUnAssignedCellAsGreenColor(UnAssignedValue: string): Promise<void> {
        const cell = this.page.locator(`//div[@id='pointer_div']//a[contains(text(),'${UnAssignedValue}')]`);
        const color = await cell.evaluate(el => getComputedStyle(el).color);
        expect(color).toEqual('rgba(0, 100, 0, 1)');
    }

    async verifyAtAssignedCellAsBlueColor(AssignedValue: string): Promise<void> {
        const cell = this.page.locator(`//div[@id='pointer_div']//a[contains(text(),'${AssignedValue}')]`);
        const color = await cell.evaluate(el => getComputedStyle(el).color);
        expect(color).toEqual('rgba(0, 0, 205, 1)');
    }

    async mouseHoverAtOnTheAssignedCell(AssignedValue: string): Promise<void> {
        const assigned = this.page.locator(`//div[@id='pointer_div']//a[text()='${AssignedValue}']`);
        await assigned.hover();
    }

    async verifyAtHoverLabelIsDisplayed(jsonIndex: number): Promise<void> {
        const Label = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Label' + jsonIndex);
        const labelElement = this.page.locator(`//span[@id='WzTtDiV']//td//b[contains(text(),'${Label}')]`);
        await expect(labelElement).toBeVisible();
    }

    async verifyAtHoverLabelValueIsDisplayed(jsonIndex: number): Promise<void> {
        const LabelValue = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'LabelValue' + jsonIndex);
        const labelValueElement = this.page.locator(`//span[@id='WzTtDiV']//td//table[@id='Table2']//td[contains(text(),'${LabelValue}')]`);
        await expect(labelValueElement).toBeVisible();
    }

    async clickAtCellValue(jsonIndex: number): Promise<void> {
        const CellValue = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'CellValue' + jsonIndex);
        const assigned = this.page.locator(`//div[@id='pointer_div']//a[text()='${CellValue}']`);
        await assigned.click();
    }

    async verifyAtSPNInGrid(jsonIndex: number): Promise<void> {
        const SPN = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'SPN' + jsonIndex);
        const cellText = await new GridHelpers(this.page).getGridCellInnerText(this.uICellGrid, 'SPN', 0);
        expect(cellText, "SPN value is not same as expected-->").toEqual(SPN);
    }

    async verifyAtNameInGrid(jsonIndex: number): Promise<void> {
        const Name = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Name' + jsonIndex);
        const cellText = await new GridHelpers(this.page).getGridCellInnerText(this.uICellGrid, 'Name', 0);
        expect(cellText, "Name value is not same as expected -->").toEqual(Name);
    }

    async verifySPNColumnIsEmpty(): Promise<void> {
        const cellText = await new GridHelpers(this.page).getGridCellInnerText(this.uICellGrid, 'SPN', 0);
        expect(cellText.trim()).toEqual('');
    }

    async verifyNameColumnIsEmpty(): Promise<void> {
        const cellText = await new GridHelpers(this.page).getGridCellInnerText(this.uICellGrid, 'Name', 0);
        expect(cellText.trim()).toEqual('');
    }

    async verifySaveIconIsDisabled(): Promise<void> {
        const classAttr = await this.uISaveIcon.getAttribute('class');
        expect(classAttr).toContain('DisabledImgMnuItem');
    }

    async verifySaveAndCloseIconIsDisabled(): Promise<void> {
        const classAttr = await this.uISaveAndCloseIcon.getAttribute('class');
        expect(classAttr).toContain('DisabledImgMnuItem');
    }

}

export class PersonalPropertyPage {
    readonly page: Page;
    readonly uIActionDateEdit: Locator;
    readonly uIActionTimeEdit: Locator;
    readonly uIOfficerCodeValueEdit: Locator;
    readonly uIActionDropDown: Locator;
    readonly uIStorageDropDown: Locator;
    readonly uISaveButton: Locator;
    readonly uIInmateSignatureField: Locator;
    readonly uIUpdateButton: Locator;
    readonly uIPropertyReceiptNoYearEdit: Locator;
    readonly uIPropertyReceiptNoEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIActionDateEdit = page.locator('#dttmAction_Date_KPIDttmCtrl');
        this.uIActionTimeEdit = page.locator("//table[@id='dttmAction_Time']//input");
        this.uIOfficerCodeValueEdit = page.locator('#lupOfficer_CodeValue');
        this.uIActionDropDown = page.locator('#cddAction_DropDown');
        this.uIStorageDropDown = page.locator('#cddStorageLoc_DropDown');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIInmateSignatureField = page.locator('#imgNewInmSign');
        this.uIUpdateButton = page.locator('#cmdUpdate');
        this.uIPropertyReceiptNoYearEdit = page.locator('#nbrPropReceiptNo_Year');
        this.uIPropertyReceiptNoEdit = page.locator('#nbrPropReceiptNo_Number');
    }

    async taboutActionDateAndTime(): Promise<void> {
        await this.uIActionDateEdit.click();
        await this.uIActionDateEdit.press('Tab');
        await this.uIActionTimeEdit.press('Tab');
    }

    async enterAtOfficer(Officer: string): Promise<void> {
        await this.uIOfficerCodeValueEdit.fill(Officer);
        await this.uIOfficerCodeValueEdit.press('Tab');
    }

    async selectAtAction(Action: string): Promise<void> {
        await this.uIActionDropDown.selectOption({ label: Action });
        await this.uIActionDropDown.press('Tab');
    }

    async selectAtStorageLocation(Location: string): Promise<void> {
        await this.uIStorageDropDown.selectOption({ label: Location });
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).uIModalFooterYesButton.click();
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async verifyInmateSignatureFieldIsDisplayed(): Promise<void> {
        await expect(this.uIInmateSignatureField).toBeVisible();
    }

    async clickUpdateButtonWithConfirmPopup(): Promise<void> {
        await this.uIUpdateButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do You Want To Save All Of The Entered Details?');
    }

    async getPropertyReceiptNo(): Promise<string> {
        const year = await this.uIPropertyReceiptNoYearEdit.inputValue();
        const number = await this.uIPropertyReceiptNoEdit.inputValue();
        return year + '-' + number;
    }

    async verifyPropertyReceiptNo(propertyReceiptNo: string): Promise<void> {
        const year = await this.uIPropertyReceiptNoYearEdit.inputValue();
        const number = await this.uIPropertyReceiptNoEdit.inputValue();
        const propertyRecptNo = year + '-' + number;
        expect(propertyRecptNo).toEqual(propertyReceiptNo);
    }

    async verifySaveButtonIsDisplayed(): Promise<void> {
        await expect(this.uISaveButton).toBeVisible();
    }

}

export class StipulationEntryPage {
    readonly page: Page;
    readonly uIStipulationTable: Locator;
    readonly uISanctionButton: Locator;
    readonly uIStipulationOfficerEdit: Locator;
    readonly uIDateTimeEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uIDispositionCodeValueEdit: Locator;
    readonly uIStipulationDetailFrame: Locator;
    readonly uIStipulationRichTextEdit: Locator;
    readonly uIStipulationAgreeCheckbox: Locator;
    readonly uIInmateSignature: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIStipulationTable = page.locator('#grdOffense');
        this.uISanctionButton = page.locator('#cmdSanction');
        this.uIStipulationOfficerEdit = page.locator('#lupPFOfficer_CodeValue');
        this.uIDateTimeEdit = page.locator('#dttmStipulation_Date_KPIDttmCtrl');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIDispositionCodeValueEdit = page.locator('#lupStipDisp_CodeValue');
        this.uIStipulationDetailFrame = page.locator('#RadstipulationDetails_contentIframe');
        this.uIStipulationRichTextEdit = page.locator('//body');
        this.uIStipulationAgreeCheckbox = page.locator('#chkStipulationAgreed');
        this.uIInmateSignature = page.locator('#imgInmateSign');
    }

    async clickCheckBoxByOffenseInGrid(Offenses: string): Promise<void> {
        await new GridHelpers(this.page).selectRowCheckboxByCellText(this.uIStipulationTable, Offenses);
    }

    async clickSanctionButton(): Promise<void> {
        await this.uISanctionButton.click();
    }

    async tabOutDateTime(): Promise<void> {
        await this.uIDateTimeEdit.press('Tab');
        await this.uIDateTimeEdit.press('Tab');
    }

    async enterAtStipulationOfficer(Officer: string): Promise<void> {
        await this.uIStipulationOfficerEdit.fill(Officer);
    }

    async verifyAtOffenseInGrid(jsonIndex: number): Promise<void> {
        const Offense = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Offense' + jsonIndex);
        const offense = await new GridHelpers(this.page).getGridCellInnerText(this.uIStipulationTable, 'Offense', 0);
        expect(offense, "Offense is not same as expected -->").toEqual(Offense);
    }

    async verifyAtTypeInGrid(jsonIndex: number): Promise<void> {
        const Type = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Type' + jsonIndex);
        const type = await new GridHelpers(this.page).getGridCellInnerText(this.uIStipulationTable, 'Type', 0);
        expect(type, "Type is not same as expected -->").toEqual(Type);
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do You Want To Save All Of The Entered Details?');
    }

    async enterAtDisposition(jsonIndex: number): Promise<void> {
        const Disposition = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Disposition' + jsonIndex);
        await this.uIDispositionCodeValueEdit.fill(Disposition);
    }

    async enterAtStipulationDetails(jsonIndex: number): Promise<void> {
        const Text = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'StipulationDetails' + jsonIndex);
        await this.uIStipulationDetailFrame.contentFrame().locator('body').fill(Text);
    }

    async clickStipulationAgreeCheckbox(): Promise<void> {
        await this.uIStipulationAgreeCheckbox.click();
    }

    async clickInmateSignature(): Promise<void> {
        await this.uIInmateSignature.click();
    }

    async close(): Promise<void> {
        await this.page.close();
    }

}

export class SelectSanctionPage {
    readonly page: Page;
    readonly uISelectSanctiontable: Locator;
    readonly uISelectAllCheckBox: Locator;
    readonly uIAcceptButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISelectSanctiontable = page.locator('#grdMsgSelection');
        this.uISelectAllCheckBox = page.locator("//input[@id='chkShowAll']");
        this.uIAcceptButton = page.locator('#cmdAccept');
    }

    async selectAtCheckBoxUsingSanctionInGrid(Sanction: string): Promise<void> {
        await new GridHelpers(this.page).selectRowCheckboxByCellText(this.uISelectSanctiontable, Sanction);
    }

    async clickSelectAllcheckBox(): Promise<void> {
        await this.uISelectAllCheckBox.click();
    }

    async clickAcceptButton(): Promise<void> {
        await this.uIAcceptButton.click();
    }

}

export class OccupancyOverviewPage {
    readonly page: Page;
    readonly uIInmateLiveStatusTable: Locator;
    readonly uIBuildingDropDown: Locator;
    readonly uISearchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIInmateLiveStatusTable = page.locator('#outerDataList');
        this.uIBuildingDropDown = page.locator('#cddBuilding_DropDown');
        this.uISearchButton = page.locator('#cmdSearch');
    }

    async verifySortInAscending(): Promise<void> {
        const rows = await this.uIInmateLiveStatusTable.locator('tr').allInnerTexts();
        const sorted = [...rows].sort();
        expect(rows).toEqual(sorted);
    }

    async selectAtBuilding(Building: string): Promise<void> {
        await this.uIBuildingDropDown.selectOption({ label: Building });
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

}

export class InmateMovementEntryPage {
    readonly page: Page;
    readonly uIEventType: Locator;
    readonly uISubType: Locator;
    readonly uIStartDate: Locator;
    readonly uIEndDate: Locator;
    readonly uIStartAt: Locator;
    readonly uIEndAt: Locator;
    readonly uISaveButton: Locator;
    readonly uIInmateMovementEntryGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIEventType = page.locator('#UsrEventCtrl1_cddEventType_DropDown');
        this.uISubType = page.locator('#UsrEventCtrl1_cddSubType');
        this.uIStartDate = page.locator('#UsrEventCtrl1_dtDateFrom_KPIDttmCtrl');
        this.uIEndDate = page.locator('#UsrEventCtrl1_dtDateTo_KPIDttmCtrl');
        this.uIStartAt = page.locator("//table[@id=\"UsrEventCtrl1_tmStart_Time\"]//tbody//tr//td//input");
        this.uIEndAt = page.locator("//table[@id=\"UsrEventCtrl1_tmEnd_Time\"]//tbody//tr//td//input");
        this.uISaveButton = page.locator('#cmdSave');
        this.uIInmateMovementEntryGrid = page.locator('#UsrScheduleViewCtrl1_grdEventSchedule');
    }

    async selectAtEventType(EventType: string): Promise<void> {
        await this.uIEventType.selectOption({ label: EventType });
    }

    async selectAtSubType(SubType: string): Promise<void> {
        await this.uISubType.selectOption({ label: SubType });
    }

    async tabOutStartDate(): Promise<void> {
        await this.uIStartDate.press('Tab');
    }

    async tabOutEndDate(): Promise<void> {
        await this.uIEndDate.press('Tab');
    }

    async tabOutStartAt(): Promise<void> {
        await this.uIStartAt.press('Tab');
    }

    async tabOutEndAt(): Promise<void> {
        await this.uIEndAt.press('Tab');
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).yesWithScreenOrWindowPopup('(3) Do You Want To Save All Of The Entered Details?');
    }

    async verifyAtTypeInGrid(Type: string): Promise<void> {
        expect(Type).toEqual(Type);
    }

    async verifyRowCountInGridAs1(): Promise<void> {
        const rowCount = await new GridHelpers(this.page).getRowCount(this.uIInmateMovementEntryGrid);
        expect(rowCount).toEqual(1);
    }

    async getStartAt(): Promise<string> {
        return await this.uIStartAt.inputValue();
    }

    async getEndAt(): Promise<string> {
        return await this.uIEndAt.inputValue();
    }

    async getStartDate(): Promise<string> {
        return await this.uIStartDate.inputValue();
    }

    async getEndDate(): Promise<string> {
        return await this.uIEndDate.inputValue();
    }

    async selectAtTypeInGrid(Type: string): Promise<void> {
        await new GridHelpers(this.page).selectRowByCellText(this.uIInmateMovementEntryGrid, Type);
    }

    async close(): Promise<void> {
        await this.page.close();
    }

}

export class CMSUOFSearchPage {
    readonly page: Page;
    readonly uIToDateEdit: Locator;
    readonly uIToTimeEdit: Locator;
    readonly uISearchButton: Locator;
    readonly uIcMSUOFSearchGrid: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIResetButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIToDateEdit = page.locator('#dttTo_Date_KPIDttmCtrl');
        this.uIToTimeEdit = page.locator("(//input[@class='textboxdatetime igte_BlueThemeEditInContainer'])[2]");
        this.uISearchButton = page.locator("//span[text()='Search']");
        this.uIcMSUOFSearchGrid = page.locator('#grdUseOfForce');
        this.uIAddNewButton = page.locator("//span[text()='Add New']");
        this.uIResetButton = page.locator("//span[text()='Reset']");
    }

    async enterToDateAndTimeAsCurrent(): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate();
        const currentTime = DateHelpers.getCurrentTime();
        await this.uIToDateEdit.fill(currentDate);
        await this.uIToTimeEdit.fill(currentTime);
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async verifyCaseNoColumnIsNotAvailable(): Promise<void> {
        const headerText = await this.uIcMSUOFSearchGrid.locator('thead').innerText();
        expect(headerText).not.toContain('CaseNo');
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

}

export class BookingHistoryPage {
    readonly page: Page;
    readonly uIBookingHistoryTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIBookingHistoryTable = page.locator('#grdHistory');
    }

    async verifyAtHeaderInGrid(JsonIndex: number): Promise<void> {
        expect(header).toEqual(Header);
    }

}

export class GrievanceTextEditorPage {
    readonly page: Page;
    readonly uIRichText: Locator;
    readonly uIRichTextEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIRichText = page.locator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        this.uIRichTextEdit = page.locator('//body');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
    }

    async enterAtRichText(jsonIndex: number): Promise<void> {
        const Text = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'RichText' + jsonIndex);
        await this.uIRichText.contentFrame().locator('body').fill(Text);
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await new ConfirmPage(this.page).uIModalFooterYesButton.click();
    }

    async saveAndClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        await new ConfirmPage(this.page).uIModalFooterYesButton.click();
    }

    async close(): Promise<void> {
        await this.page.close();
    }

}

export class PreviousVisitOpenPage {
    readonly page: Page;
    readonly uIEventGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIEventGrid = page.locator('#grdScheEvent');
    }

    async verifyAtStartDateTimeInGrid(jsonIndex: number): Promise<void> {
        const startDateTime = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'StartDateTime' + jsonIndex);
        await expect(this.uIEventGrid).toContainText(startDateTime);
    }

    async clickAtStartDateTime(jsonIndex: number): Promise<void> {
        const startDateTime = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'StartDateTime' + jsonIndex);
        await this.uIEventGrid.locator('td', { hasText: startDateTime }).click();
    }

    async verifyAtColumnNamesInGrid(jsonIndex: number): Promise<void> {
        const Header = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Header' + jsonIndex);
        await new GridHelpers(this.page).getColumnIndex(this.uIEventGrid, Header);
    }

    async verifyAtColumnNamesNotInGrid(jsonIndex: number): Promise<void> {
        const Header = new TestDataReader('./test-data/').getValue('FacilityManagement', testCaseId, 'Header' + jsonIndex);
        const headerText = await this.uIEventGrid.locator('thead').innerText();
        expect(headerText).not.toContain(Header);
    }

}

export class JailCellStatusPage {
    readonly page: Page;
    readonly uIJailCellStatusGrid: Locator;
    readonly uIBottomMessageLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIJailCellStatusGrid = page.locator('#grdJailStatus');
        this.uIBottomMessageLabel = page.locator("//td[@class='statusBar']//b");
    }

    async verify1011NoRecordNotFound(): Promise<void> {
        await new AcknowledgePage(this.page).okWithExpectedMessage('1011 - No record found');
    }

    async verifyBottomMessage(): Promise<void> {
        await expect(this.uIBottomMessageLabel).not.toBeVisible();
    }

    async switchToBookingHistory(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Booking History');
    }

    async switchToActivityLogEntryScreenTab(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByUrl('Activity Log');
    }

    async switchToGrievanceTextEditor(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByUrl('frmTextMgrEx.aspx');
    }

    async switchToPreviousVisitOpenWindow(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('Previous Visit Open');
    }

    async switchToJailCellStatus(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByUrl('Jail Cell Status');
    }

}


