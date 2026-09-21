// @ts-nocheck
import { Page, Locator, expect } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { PopupHelpers } from '../../helpers/popup-helpers';
import { GridHelpers } from '../../helpers/grid-helpers';
import { ElementHelpers } from '../../helpers/element-helpers';
import { DateHelpers, RandomHelpers } from '../../helpers';
import { PoliceData, BaseData } from '../../data';

export class CourtPage {
    readonly page: Page;
    readonly browserHelpers: BrowserHelpers;

    constructor(page: Page) {
        this.page = page;
        this.browserHelpers = new BrowserHelpers(page);
    }

    async Reset(): Promise<void> {
        // Managed by Playwright lifecycle
    }

    async switchToCreateCase(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Create Case');
    }

    async switchToScheduling(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Scheduling');
    }

    async switchToCaseSearch(): Promise<void> {
        await this.page.waitForLoadState('load');
        await this.browserHelpers.switchToMainWindowScreenTab('Court/frmCourtSrch.aspx');
    }

    async switchToAssessmentSearch(): Promise<void> {
        await this.page.waitForLoadState('load');
        await this.browserHelpers.switchToMainWindowScreenTab('Court/frmAssessmentSrch.aspx');
    }

    async switchToCaseDeletion(): Promise<void> {
        await this.page.waitForLoadState('load');
        await this.browserHelpers.switchToMainWindowScreenTab('Court/frmCourtDeleteSrch.aspx');
    }

    async switchToCourtDelete(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Court Delete');
    }

    async switchToAssessmentsEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Assessments Entry');
    }

    async switchToRegisterCodes(): Promise<void> {
        await this.page.waitForLoadState('load');
        await this.browserHelpers.switchToMainWindowScreenTab('Register Codes');
    }

    async switchToRegisterCodeEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Register Code');
    }

    async switchToPaymentScheduleSearch(): Promise<void> {
        await this.page.waitForLoadState('load');
        await this.browserHelpers.switchToMainWindowScreenTab('Payment Schedule Search');
    }

    async switchToPaymentScheduling(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Payment Scheduling');
    }

    async switchToCreateCaseScreenTab(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('Create Case');
    }

    async switchToAttorneyRecommendation(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Attorney Recommendation');
    }

    async switchTocheckIn(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Check-In');
    }

    async switchToCourtActivities(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Activities - 5430');
    }
}

export class CreateCasePage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uITransactionYearEdit: Locator;
    readonly uITransactionNoEdit: Locator;
    readonly uICitationNoEdit: Locator;
    readonly uIDefendantNameIDTypeEdit: Locator;
    readonly uIDefendantNameIDEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIViolationEdit: Locator;
    readonly uIViolationDescription: Locator;
    readonly uIViolationSearchIcon: Locator;
    readonly uICourtActivityTypeDropdown: Locator;
    readonly uIViolationDateEdit: Locator;
    readonly uIViolationTimeEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uICitationLabel: Locator;
    readonly uIChargeAddButton: Locator;
    readonly uIChargeResultGrid: Locator;
    readonly uIDocketLabel: Locator;
    readonly uIDACaseLabel: Locator;
    readonly uICourtAppDateEdit: Locator;
    readonly uICourtAppTimeEdit: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uISelectIncidentPopupCancelButton: Locator;
    readonly uICopyChargePopupCancelButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uITransactionYearEdit = page.locator('#nbrTransactionNo_Year');
        this.uITransactionNoEdit = page.locator('#nbrTransactionNo_Number');
        this.uICitationNoEdit = page.locator('#txtCitationNo');
        this.uIDefendantNameIDTypeEdit = page.locator('#nmcName_NameType');
        this.uIDefendantNameIDEdit = page.locator('#nmcName_NameTypeID');
        this.uILastNameEdit = page.locator('#nmcName_LastName');
        this.uIFirstNameEdit = page.locator('#nmcName_FirstName');
        this.uIViolationEdit = page.locator('#lupCharge_CodeValue');
        this.uIViolationDescription = page.locator('#lupCharge_CodeDescription');
        this.uIViolationSearchIcon = page.locator('#lupCharge_imgBtn');
        this.uICourtActivityTypeDropdown = page.locator('#cddAppType_DropDown');
        this.uIViolationDateEdit = page.locator('#dttmViolation_Date_KPIDttmCtrl');
        this.uIViolationTimeEdit = page.locator("//table[@id='dttmViolation_Time']//input");
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uICitationLabel = page.locator('#lblCitation');
        this.uIChargeAddButton = page.locator('#imgAddCharge');
        this.uIChargeResultGrid = page.locator("//div[@id='grdCharge']");
        this.uIDocketLabel = page.locator("//span[@id='lblDocket']");
        this.uIDACaseLabel = page.locator("//span[@id='lblDACase']");
        this.uICourtAppDateEdit = page.locator('#dttmCourtApp_Date_KPIDttmCtrl');
        this.uICourtAppTimeEdit = page.locator("//table[@id='dttmCourtApp_Time']//input");
        this.uICaseYearEdit = page.locator('#nbrCaseNo_Year');
        this.uICaseNumberEdit = page.locator('#nbrCaseNo_Number');
        this.uISelectIncidentPopupCancelButton = page.locator('#cmdCancel');
        this.uICopyChargePopupCancelButton = page.locator('#KPIButton2');
    }

    async enterAtCitationNo(i?: number): Promise<void> {
        const value = i !== undefined ? PoliceData.getCourtModuleValue(`CitationNo${i}`) : PoliceData.getCourtModuleValue('CitationNo');
        await this.uICitationNoEdit.fill(value);
    }

    async enterAtDefendantNameID(jsonKey?: number): Promise<void> {
        const nameId = jsonKey !== undefined ? PoliceData.getCourtModuleValue(`NameID${jsonKey}`) : PoliceData.getCourtModuleValue('NameID');
        await this.uIDefendantNameIDTypeEdit.fill(nameId.substring(0, 1));
        await this.uIDefendantNameIDEdit.fill(nameId.substring(2));
        await this.uIDefendantNameIDEdit.press('Tab');
    }

    async selectAtCourtActivityType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uICourtActivityTypeDropdown, PoliceData.getCourtModuleValue('CourtActivityType'));
    }

    async tabOutViolationDateNTime(): Promise<void> {
        await this.uIViolationDateEdit.click();
        await this.uIViolationDateEdit.press('Tab');
        await this.uIViolationTimeEdit.click();
        await this.uIViolationTimeEdit.press('Tab');
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async verifytheCitationIsNonMandatory(): Promise<void> {
        const color = await this.uICitationLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(0, 0, 0, 1)');
    }

    async verifytheCitationIsMandatory(): Promise<void> {
        const color = await this.uICitationLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(153, 0, 0, 1)');
    }

    async closeTheScreen(): Promise<void> {
        await this.page.close();
    }

    async enterAtCharge(i: number): Promise<void> {
        await this.uIViolationEdit.fill(PoliceData.getCourtModuleValue(`Charge${i}`));
        await this.uIViolationEdit.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIChargeAddButton.click();
    }

    async verifyAtChargeInGrid(i: number): Promise<void> {
        const chargeValues = await this.grid.getGridTableColumnValues(this.uIChargeResultGrid, 'Charge');
        expect(chargeValues).toContain(PoliceData.getCourtModuleValue(`Charge${i}`));
    }

    async clickDocketLabel(): Promise<void> {
        await this.uIDocketLabel.click();
    }

    async clickDACaseLabel(): Promise<void> {
        await this.uIDACaseLabel.click();
    }

    async verifyDocketLabelAsMandatory(): Promise<void> {
        const color = await this.uIDocketLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(153, 0, 0, 1)');
    }

    async verifyDocketLabelAsGrey(): Promise<void> {
        const color = await this.uIDocketLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(128, 128, 128, 1)');
    }

    async verifyDocketLabelAsNonMandatory(): Promise<void> {
        const color = await this.uIDocketLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(0, 0, 0, 1)');
    }

    async verifyDACaseLabelAsMandatory(): Promise<void> {
        const color = await this.uIDACaseLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(153, 0, 0, 1)');
    }

    async verifyDACaseLabelAsGrey(): Promise<void> {
        const color = await this.uIDACaseLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(128, 128, 128, 1)');
    }

    async verifyDACaseLabelAsNonMandatory(): Promise<void> {
        const color = await this.uIDACaseLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(0, 0, 0, 1)');
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verify1018RequiredEntriesAreMissingDocketNoAcknowledgePopUp(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1018) Required Entries are Missing Docket No');
        await this.popup.acknowledgeOkButton.click();
    }

    async verify1018RequiredEntriesAreMissingDACaseNoAcknowledgePopUp(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1018) Required Entries are Missing DA Case No');
        await this.popup.acknowledgeOkButton.click();
    }

    async verify6040MinimumOneChargeIsRequiredAcknowledgePoPup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6040) Minimum One Charge is Required.');
        await this.popup.acknowledgeOkButton.click();
    }

    async verify7045AcknowledgePopupOccurs(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(7045) Name not entered or not a valid name');
        await this.popup.acknowledgeOkButton.click();
    }

    async acceptThe6125Popup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6125) You have selected a Juvenile Name record');
        await this.popup.confirmYesButton.click();
    }

    async verify7045AcknowledgePopupNotOccurs(): Promise<void> {
        const isVisible = await this.popup.modalBody.isVisible().catch(() => false);
        if (isVisible) {
            const text = await this.popup.modalBody.innerText();
            expect(text).not.toContain('(7045) Name not entered or not a valid name');
        }
    }

    async clearDefendantName(): Promise<void> {
        await this.uIDefendantNameIDTypeEdit.click();
        await this.uIDefendantNameIDEdit.clear();
        await this.uIDefendantNameIDEdit.press('Tab');
    }

    async enterAtCourtAppDateTime(): Promise<void> {
        await this.uICourtAppDateEdit.fill(DateHelpers.getFutureDate(1));
        await this.uICourtAppTimeEdit.fill(DateHelpers.getCurrentTime());
    }

    async verify6040AcknowledgePopupOccurs(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6040) Minimum One Charge is Required.');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyAtChargeDescriptionInGrid(i: number): Promise<void> {
        const descriptions = await this.grid.getGridTableColumnValues(this.uIChargeResultGrid, 'Charge Description');
        expect(descriptions).toContain(PoliceData.getCourtModuleValue(`ChargeDescription${i}`));
    }

    async getCourtAppTime(): Promise<string> {
        const time = await this.uICourtAppTimeEdit.inputValue();
        return time;
    }

    async verify6020AcknolwedgePopupOccurs(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6020) Invalid Name ID');
        await this.popup.acknowledgeOkButton.click();
    }

    async cancelThe6152Popup(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await expect(this.popup.modalBody).toContainText("(6152) Do you wish to copy the 'J' Name details to a new 'A' Name Record?");
        await this.popup.confirmNoButton.click();
    }

    async enterAtCaseNoUsingIndex(jsonindex: number): Promise<void> {
        const caseNo = PoliceData.getCourtModuleValue(`CaseNo${jsonindex}`);
        await this.uICaseYearEdit.fill(caseNo.substring(0, 2));
        await this.uICaseNumberEdit.fill(caseNo.substring(3));
        await this.uICaseNumberEdit.press('Tab');
    }

    async clickSelectIncidentPopupCancel(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uISelectIncidentPopupCancelButton.click();
    }

    async clickCopyChargePopupCancel(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uICopyChargePopupCancelButton.click();
    }

    async enterAtViolationDate(i: number): Promise<void> {
        await this.uIViolationDateEdit.click();
        await this.uIViolationDateEdit.fill(PoliceData.getCourtModuleValue(`ViolationDate${i}`));
    }
}

export class SchedulingCommentsTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly uISubjectEdit: Locator;
    readonly uIEnterCommentsButton: Locator;
    readonly uICommentsGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uISubjectEdit = page.locator('#txtSubject');
        this.uIEnterCommentsButton = page.locator('#btnComments');
        this.uICommentsGrid = page.locator('#grdComments');
    }

    async enterAtSubject(): Promise<void> {
        await this.uISubjectEdit.fill(PoliceData.getCourtModuleValue('Subject'));
    }

    async clickEnterComments(): Promise<void> {
        await this.uIEnterCommentsButton.click();
        await this.popup.confirmYes();
    }

    async verifyAtSubjectInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uICommentsGrid, PoliceData.getCourtModuleValue('Subject'));
        await expect(cell).toBeVisible();
    }
}

export class SchedulingCourtActivitiesTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uICourtActivitesGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uICourtActivitesGrid = page.locator('#tabCourtEntry_tmpl0_UsrCourtAppearance1_grdHistory');
    }

    async verifyDateAndTimeInGrid(time: string): Promise<void> {
        const dateTimes = await this.grid.getGridTableColumnValues(this.uICourtActivitesGrid, 'Date Time');
        const expected = `${DateHelpers.getFutureDate(1)} ${time}`;
        expect(dateTimes).toContain(expected);
    }

    async verifyAtChargeInGrid(i: number): Promise<void> {
        const chargeValues = await this.grid.getGridTableColumnValues(this.uICourtActivitesGrid, 'Charge');
        expect(chargeValues).toContain(PoliceData.getCourtModuleValue(`Charge${i}`));
    }

    async verifyAtCourtActivityTypeInGrid(i: number): Promise<void> {
        const expected = PoliceData.getCourtModuleValue(`CourtActivityType${i}`);
        const gridCell = await this.grid.getGridCell(this.uICourtActivitesGrid, expected, 'Type');
        const text = await gridCell.innerText();
        expect(text.trim()).toBe(expected);
    }

    async verifyAtCourtDateTimeInGrid(i: number): Promise<void> {
        const typeValue = PoliceData.getCourtModuleValue(`CourtActivityType${i}`);
        const expected = PoliceData.getCourtModuleValue(`CourtDateTime${i}`);
        const gridCell = await this.grid.getGridCell(this.uICourtActivitesGrid, typeValue, 'Date Time');
        const text = await gridCell.innerText();
        expect(text.trim()).toBe(expected);
    }

    async clickAtCourtActivityTypeInGrid(i: number): Promise<void> {
        const typeValue = PoliceData.getCourtModuleValue(`CourtActivityType${i}`);
        const gridCell = await this.grid.getGridCell(this.uICourtActivitesGrid, typeValue, 'Type');
        await gridCell.click();
    }
}

export class SchedulingPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly browserHelpers: BrowserHelpers;
    readonly commentsTab: SchedulingCommentsTabPage;
    readonly courtActivitiesTab: SchedulingCourtActivitiesTabPage;
    readonly uICurrentChargeEdit: Locator;
    readonly uICurrentChargeDescription: Locator;
    readonly uICitationLabel: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uICourtActivitiesResultGrid: Locator;
    readonly uICommentsTab: Locator;
    readonly uICourtActivitiesTab: Locator;
    readonly uIBirthDateEdit: Locator;
    readonly uINameInfoIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.browserHelpers = new BrowserHelpers(page);
        this.commentsTab = new SchedulingCommentsTabPage(page);
        this.courtActivitiesTab = new SchedulingCourtActivitiesTabPage(page);
        this.uICurrentChargeEdit = page.locator('#lupCurrentCharge_CodeValue');
        this.uICurrentChargeDescription = page.locator('#lupCurrentCharge_CodeDescription');
        this.uICitationLabel = page.locator('#lblCitationNbr');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uICourtActivitiesResultGrid = page.locator("//div[@id='tabCourtEntry_tmpl0_UsrCourtAppearance1_grdHistory']");
        this.uICommentsTab = page.locator("//span[text()='Comments']");
        this.uICourtActivitiesTab = page.locator("//span[text()='Court Activities']");
        this.uIBirthDateEdit = page.locator('#dtcDefNameDob_KPIDttmCtrl');
        this.uINameInfoIcon = page.locator('#nmcDefNameID_imgSrch');
    }

    async verifyAtCurrentCharge(): Promise<void> {
        const value = await this.uICurrentChargeEdit.inputValue();
        expect(value).toBe(PoliceData.getCourtModuleValue('CurrentCharge'));
    }

    async verifyAtCurrentChargeDescription(): Promise<void> {
        const value = await this.uICurrentChargeDescription.inputValue();
        expect(value).toBe(PoliceData.getCourtModuleValue('CurrentChargeDescription'));
    }

    async closeTheScreen(): Promise<void> {
        await this.page.close();
    }

    async verifyAtBirthDate(): Promise<void> {
        const value = await this.uIBirthDateEdit.inputValue();
        expect(value).toBe(PoliceData.getCourtModuleValue('BirthDate'));
    }

    async clickNameInfoIcon(): Promise<void> {
        await this.uINameInfoIcon.click();
    }

    async verifycitationAsNonMandatory(): Promise<void> {
        const color = await this.uICitationLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(0, 0, 0, 1)');
    }

    async verifycitationAsMandatory(): Promise<void> {
        const color = await this.uICitationLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(153, 0, 0, 1)');
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async verifyAtChargeInGrid(i: number): Promise<void> {
        const charges = await this.grid.getGridTableColumnValues(this.uICourtActivitiesResultGrid, 'Charge');
        expect(charges).toContain(PoliceData.getCourtModuleValue(`Charge${i}`));
    }

    async switchToCommentsTab(): Promise<void> {
        await this.uICommentsTab.click();
        await this.browserHelpers.switchToFrame('frmNameComments');
    }

    async clickCourtActivitiesTab(): Promise<void> {
        await this.uICourtActivitiesTab.click();
    }
}

export class CourtCaseSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uICaseSearchResultTable: Locator;
    readonly uIAddNewButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIBackButton: Locator;
    readonly uICitationEdit: Locator;
    readonly uIShowAppearanceCheckbox: Locator;
    readonly uICourtSearchStartDateEdit: Locator;
    readonly uICourtSearchEndDateEdit: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNoEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uICaseSearchResultTable = page.locator('#grdCourt');
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uISearchButton = page.locator("//span[text()='Search']");
        this.uIBackButton = page.locator("//span[text()='Back']");
        this.uICitationEdit = page.locator('#tabCourtSrch_tmpl0_UsrCourtSrchBasic1_txtCitation');
        this.uIShowAppearanceCheckbox = page.locator('#tabCourtSrch_tmpl0_UsrCourtSrchBasic1_chkShowAll');
        this.uICourtSearchStartDateEdit = page.locator('#tabCourtSrch_tmpl0_UsrCourtSrchBasic1_dttmCrtStartDttm_Date_KPIDttmCtrl');
        this.uICourtSearchEndDateEdit = page.locator('#tabCourtSrch_tmpl0_UsrCourtSrchBasic1_dttmCrtEndDttm_Date_KPIDttmCtrl');
        this.uICaseYearEdit = page.locator('#tabCourtSrch_tmpl0_UsrCourtSrchBasic1_nbrCaseNo_Year');
        this.uICaseNoEdit = page.locator('#tabCourtSrch_tmpl0_UsrCourtSrchBasic1_nbrCaseNo_Number');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async selectRowByAtChargeInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICaseSearchResultTable, PoliceData.getCourtModuleValue('Charge'));
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clickBack(): Promise<void> {
        await this.uIBackButton.click();
    }

    async verifyColumnsSortingAsAscending(columnName: string): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uICaseSearchResultTable, columnName);
        const trimmed = columnValues.map(v => v.trim()).filter(v => v !== '');
        for (let i = 0; i < trimmed.length - 1; i++) {
            expect(trimmed[i].localeCompare(trimmed[i + 1])).toBeLessThanOrEqual(0);
        }
    }

    async verifyColumnsSortingAsDescending(columnName: string): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uICaseSearchResultTable, columnName);
        const trimmed = columnValues.map(v => v.trim()).filter(v => v !== '');
        for (let i = 0; i < trimmed.length - 1; i++) {
            expect(trimmed[i].localeCompare(trimmed[i + 1])).toBeGreaterThanOrEqual(0);
        }
    }

    async verifyAtCitationIsNotTheGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uICaseSearchResultTable, 'Citation#');
        expect(columnValues).not.toContain(PoliceData.getCourtModuleValue('CitationNO'));
    }

    async verifyAtCitationInTheGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uICaseSearchResultTable, 'Citation#');
        expect(columnValues).toContain(PoliceData.getCourtModuleValue('CitationNo'));
    }

    async enterAtCitationNo(): Promise<void> {
        await this.uICitationEdit.fill(PoliceData.getCourtModuleValue('CitationNo'));
    }

    async enterAtCaseNoUsingIndex(jsonindex: number): Promise<void> {
        const caseNo = PoliceData.getCourtModuleValue(`CaseNo${jsonindex}`);
        await this.uICaseYearEdit.fill(caseNo.substring(0, 2));
        await this.uICaseNoEdit.fill(caseNo.substring(3));
        await this.uICaseNoEdit.press('Tab');
    }

    async verifyAtDefendantInTheGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uICaseSearchResultTable, 'Defendant');
        expect(columnValues).toContain(PoliceData.getCourtModuleValue('Defendant'));
    }

    async verifyAtChargeInTheGrid(i: number): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uICaseSearchResultTable, 'Charge');
        expect(columnValues).toContain(PoliceData.getCourtModuleValue(`Charge${i}`));
    }

    async verifyAtNameIDInGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uICaseSearchResultTable, 'Name ID');
        expect(columnValues).toContain(PoliceData.getCourtModuleValue('NameID'));
    }

    async clickShowAppearanceCheckbox(): Promise<void> {
        await this.uIShowAppearanceCheckbox.click();
    }

    async enterAtCourtCaseStartDate(): Promise<void> {
        await this.uICourtSearchStartDateEdit.fill(PoliceData.getCourtModuleValue('CourtCaseStartDate'));
    }

    async enterAtCourtCaseEndDate(): Promise<void> {
        await this.uICourtSearchEndDateEdit.fill(PoliceData.getCourtModuleValue('CourtCaseEndDate'));
    }

    async verifyAtCourtDateColumnWithStartDateAndEndDateRange(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uICaseSearchResultTable, 'Court Date');
        const fromDate = new Date(PoliceData.getCourtModuleValue('CourtCaseStartDate'));
        const toDate = new Date(PoliceData.getCourtModuleValue('CourtCaseEndDate'));
        for (const val of columnValues) {
            const trimmed = val.trim();
            if (trimmed) {
                const date = new Date(trimmed);
                expect(date.getTime()).toBeGreaterThanOrEqual(fromDate.getTime());
                expect(date.getTime()).toBeLessThanOrEqual(toDate.getTime());
            }
        }
    }

    async verifyShowAppearanceCheckboxIsChecked(): Promise<void> {
        await expect(this.uIShowAppearanceCheckbox).toBeChecked();
    }

    async verifyAtCourtCaseStartDate(): Promise<void> {
        const attribute = await this.uICourtSearchStartDateEdit.inputValue();
        expect(attribute).toBe(PoliceData.getCourtModuleValue('CourtCaseStartDate'));
    }

    async verifyAtCourtCaseEndDate(): Promise<void> {
        const attribute = await this.uICourtSearchEndDateEdit.inputValue();
        expect(attribute).toBe(PoliceData.getCourtModuleValue('CourtCaseEndDate'));
    }
}

export class AssessmentSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uISearchButton: Locator;
    readonly uIAssessmentSearchResultTable: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIAssessmentSearchRateCodeEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uISearchButton = page.locator('#cmdSearch');
        this.uIAssessmentSearchResultTable = page.locator('#grdAssessment');
        this.uIAddNewButton = page.locator("//span[text()='Add New']");
        this.uIAssessmentSearchRateCodeEdit = page.locator('#txtRateCode');
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async getRateCodeColumnValues(): Promise<string[]> {
        return await this.grid.getGridTableColumnValues(this.uIAssessmentSearchResultTable, 'Rate Code#');
    }

    async verifyRateCodeListedInAscendingOrder(rateCodeColumnValues: string[]): Promise<void> {
        const trimmed = rateCodeColumnValues.map(v => v.trim()).filter(v => v !== '');
        for (let i = 0; i < trimmed.length - 1; i++) {
            expect(trimmed[i].localeCompare(trimmed[i + 1])).toBeLessThanOrEqual(0);
        }
    }

    async verifyRateCodeListedInDescendingOrder(rateCodeColumnValues: string[]): Promise<void> {
        const trimmed = rateCodeColumnValues.map(v => v.trim()).filter(v => v !== '');
        for (let i = 0; i < trimmed.length - 1; i++) {
            expect(trimmed[i].localeCompare(trimmed[i + 1])).toBeGreaterThanOrEqual(0);
        }
    }

    async getEffectiveDateColumnValues(): Promise<string[]> {
        return await this.grid.getGridTableColumnValues(this.uIAssessmentSearchResultTable, 'Effective Date');
    }

    async verifyEffectiveDateListedInAscendingOrder(effectiveDateColumnValues: string[]): Promise<void> {
        const trimmed = effectiveDateColumnValues.map(v => v.trim()).filter(v => v !== '');
        for (let i = 0; i < trimmed.length - 1; i++) {
            expect(new Date(trimmed[i]).getTime()).toBeLessThanOrEqual(new Date(trimmed[i + 1]).getTime());
        }
    }

    async verifyEffectiveDateListedInDescendingOrder(effectiveDateColumnValues: string[]): Promise<void> {
        const trimmed = effectiveDateColumnValues.map(v => v.trim()).filter(v => v !== '');
        for (let i = 0; i < trimmed.length - 1; i++) {
            expect(new Date(trimmed[i]).getTime()).toBeGreaterThanOrEqual(new Date(trimmed[i + 1]).getTime());
        }
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async selectAtRateCodeInGrid(): Promise<void> {
        const gridCell = await this.grid.getGridCell(this.uIAssessmentSearchResultTable, PoliceData.getCourtModuleValue('RateCode'), 'Rate Code#');
        await gridCell.click();
    }

    async enterAtRateCode(): Promise<void> {
        await this.uIAssessmentSearchRateCodeEdit.fill(PoliceData.getCourtModuleValue('RateCode'));
    }
}

export class CaseDeletionPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIDeleteNewButton: Locator;
    readonly uICaseDeletionResultGrid: Locator;
    readonly uISearchButton: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIDeleteNewButton = page.locator("//span[text()='Delete New']");
        this.uICaseDeletionResultGrid = page.locator('#grdCourtDelete');
        this.uISearchButton = page.locator('#cmdSearch');
        this.uILastNameEdit = page.locator('#txtLast');
        this.uIFirstNameEdit = page.locator('#txtFirst');
    }

    async clickDeleteNew(): Promise<void> {
        await this.uIDeleteNewButton.click();
    }

    async verifyAtCitationNoInGrid(): Promise<void> {
        const citation = await this.grid.getGridRowByCellInnerText(this.uICaseDeletionResultGrid, PoliceData.getCourtModuleValue('CitationNO'));
        const text = await citation.innerText();
        expect(text).toContain(PoliceData.getCourtModuleValue('CitationNO'));
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async enterAtLastName(): Promise<void> {
        await this.uILastNameEdit.fill(PoliceData.getCourtModuleValue('LastName'));
    }

    async enterAtFirstName(): Promise<void> {
        await this.uIFirstNameEdit.fill(PoliceData.getCourtModuleValue('FirstName'));
    }

    async selectAtCitationNoInGrid(): Promise<void> {
        const citation = await this.grid.getGridRowByCellInnerText(this.uICaseDeletionResultGrid, PoliceData.getCourtModuleValue('CitationNO'));
        await citation.click();
    }
}

export class CourtDeletePage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uICitationEdit: Locator;
    readonly uIDateEdit: Locator;
    readonly uIRemarksEdit: Locator;
    readonly uIDeleteButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIStatusBar: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameIdEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uICitationEdit = page.locator('#txtCitationNbr');
        this.uIDateEdit = page.locator('#dtDttm_KPIDttmCtrl');
        this.uIRemarksEdit = page.locator('#txtCmt');
        this.uIDeleteButton = page.locator('#cmdDelete');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uIStatusBar = page.locator("//td[@class='statusBar']//b");
        this.uINameTypeEdit = page.locator('#nmcName_NameType');
        this.uINameIdEdit = page.locator('#nmcName_NameTypeID');
    }

    async enterAtCitationNo(): Promise<void> {
        await this.uICitationEdit.fill(PoliceData.getCourtModuleValue('CitationNo'));
        await this.uICitationEdit.press('Tab');
    }

    async tabOutDate(): Promise<void> {
        await this.uIDateEdit.press('Tab');
    }

    async enterAtRemarks(): Promise<void> {
        await this.uIRemarksEdit.fill(PoliceData.getCourtModuleValue('Remarks'));
    }

    async clickDeleteButton(): Promise<void> {
        await this.uIDeleteButton.click();
    }

    async saveTheScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async closeTheScreen(): Promise<void> {
        await this.page.close();
    }

    async verifyDeletionSuccessfulStatusMessage(): Promise<void> {
        const text = await this.uIStatusBar.innerText();
        expect(text).toBe('1004 - Deletion Successful');
    }

    async verifyAtNameMergeID(): Promise<void> {
        const nameType = await this.uINameTypeEdit.inputValue();
        const nameID = await this.uINameIdEdit.inputValue();
        expect(`${nameType}-${nameID}`).toBe(PoliceData.getCourtModuleValue('MergeNameID'));
    }
}

export class AssessmentEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIEffectiveDateEdit: Locator;
    readonly uICodeDropdown: Locator;
    readonly uICostEdit: Locator;
    readonly uISortEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIAssessmentEntryTable: Locator;
    readonly uIAssessmentEntrySaveScreen: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIEffectiveDateEdit = page.locator('#dtEffectiveDttm_KPIDttmCtrl');
        this.uICodeDropdown = page.locator('#cddCodeValue_DropDown');
        this.uICostEdit = page.locator('#curAmt');
        this.uISortEdit = page.locator('#txtSortOrder');
        this.uIAddButton = page.locator('#imgAdd');
        this.uIAssessmentEntryTable = page.locator('#grdAssessmentCode');
        this.uIAssessmentEntrySaveScreen = page.locator('#cmdSave');
    }

    async enterAtEffectiveDate(): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate('MM/dd/yyyy');
        await this.uIEffectiveDateEdit.fill(currentDate);
    }

    async selectAtCode(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uICodeDropdown, PoliceData.getCourtModuleValue('Code'));
    }

    async enterAtCost(): Promise<void> {
        await this.uICostEdit.fill(PoliceData.getCourtModuleValue('Cost'));
    }

    async enterAtSort(): Promise<void> {
        await this.uISortEdit.fill(PoliceData.getCourtModuleValue('Sort'));
    }

    async clickAddBtn(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifyAtCodeInGrid(): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIAssessmentEntryTable, 'Description', 0);
        expect(text).toBe(PoliceData.getCourtModuleValue('Code'));
    }

    async deleteAtCodeInGrid(): Promise<void> {
        const gridCell = await this.grid.getGridCell(this.uIAssessmentEntryTable, PoliceData.getCourtModuleValue('Code'), 'X');
        await gridCell.click();
    }

    async saveScreen(): Promise<void> {
        await this.uIAssessmentEntrySaveScreen.click();
        await this.popup.confirmYes();
    }

    async clickAtColumHeader(): Promise<void> {
        const headerCell = this.uIAssessmentEntryTable.locator('th', { hasText: 'Code' });
        await headerCell.click();
    }

    async verifyDeletePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(4)Do you want to delete?');
        await this.popup.confirmYesButton.click();
    }
}

export class RegisterCodesPage {
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

export class RegisterCodeEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uICategoryCodeEdit: Locator;
    readonly uICategoryDescriptionEdit: Locator;
    readonly uIFormTypeDropdown: Locator;
    readonly uISortOrderEdit: Locator;
    readonly uISaveIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uICategoryCodeEdit = page.locator('#txtCatCode');
        this.uICategoryDescriptionEdit = page.locator('#txtCatDescr');
        this.uIFormTypeDropdown = page.locator('#cddFormType_DropDown');
        this.uISortOrderEdit = page.locator('#txtSortSeqNo');
        this.uISaveIcon = page.locator('#cmdSave');
    }

    async enterAtCategoryCode(): Promise<void> {
        await this.uICategoryCodeEdit.fill(PoliceData.getCourtModuleValue('CategoryCode'));
    }

    async enterAtCategoryDescription(): Promise<void> {
        await this.uICategoryDescriptionEdit.fill(PoliceData.getCourtModuleValue('CategoryDescription'));
    }

    async selectAtFormType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIFormTypeDropdown, PoliceData.getCourtModuleValue('FormType'));
    }

    async enterAtSortOrder(): Promise<void> {
        await this.uISortOrderEdit.fill(PoliceData.getCourtModuleValue('SortOrder'));
    }

    async clickSave(): Promise<void> {
        await this.uISaveIcon.click();
    }

    async save(): Promise<void> {
        await this.uISaveIcon.click();
        await this.popup.confirmYes();
    }

    async verify6040SortOrderIsMandatoryAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6040) Sort Order is mandatory');
        await this.popup.acknowledgeOkButton.click();
    }
}

export class PaymentScheduleSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIAddNewBtn: Locator;
    readonly uISearchBtn: Locator;
    readonly uIPaymentScheduleTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIAddNewBtn = page.locator("//span[text()='Add New']");
        this.uISearchBtn = page.locator("//span[text()='Search']");
        this.uIPaymentScheduleTable = page.locator("//div[@id='grdPaySchedule']");
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewBtn.click();
    }

    async clickSearch(): Promise<void> {
        await this.uISearchBtn.click();
    }

    async clickAtRowHeader(ColumnName: string): Promise<void> {
        const header = this.uIPaymentScheduleTable.locator(`th:has-text("${ColumnName}")`);
        await header.click();
        await this.page.waitForLoadState('load');
    }

    async clickScheduleRowHeader(): Promise<void> {
        const headers = this.uIPaymentScheduleTable.locator('th', { hasText: 'Schedule#' });
        await headers.nth(1).click();
        await this.page.waitForLoadState('load');
    }

    async clickDateRowHeader(): Promise<void> {
        const headers = this.uIPaymentScheduleTable.locator('th', { hasText: 'Date' });
        await headers.nth(0).click();
        await this.page.waitForLoadState('load');
    }

    async clickDefendantNameRowHeader(): Promise<void> {
        const headers = this.uIPaymentScheduleTable.locator('th', { hasText: 'Defendant Name' });
        await headers.nth(0).click();
        await this.page.waitForLoadState('load');
    }

    async clickSchAmountRowHeader(): Promise<void> {
        const headers = this.uIPaymentScheduleTable.locator('th', { hasText: 'Sch Amount' });
        await headers.nth(0).click();
        await this.page.waitForLoadState('load');
    }

    async clickPaidAmountRowHeader(): Promise<void> {
        const headers = this.uIPaymentScheduleTable.locator('th', { hasText: 'Paid Amount' });
        await headers.nth(0).click();
        await this.page.waitForLoadState('load');
    }

    async clickBalanceRowHeader(): Promise<void> {
        const headers = this.uIPaymentScheduleTable.locator('th', { hasText: 'Balance' });
        await headers.nth(0).click();
        await this.page.waitForLoadState('load');
    }
}

export class PaymentSchedulingPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIDefendantNameIDTypeEdit: Locator;
    readonly uIDefendantNameIDEdit: Locator;
    readonly uIScheduledCitationsTable: Locator;
    readonly uIUnScheduledCitationsTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIDefendantNameIDTypeEdit = page.locator('#nmcName_NameType');
        this.uIDefendantNameIDEdit = page.locator('#nmcName_NameTypeID');
        this.uIScheduledCitationsTable = page.locator('#grdSchCourt');
        this.uIUnScheduledCitationsTable = page.locator('#grdUnSchCourt');
    }

    async enterAtDefendantNameID(): Promise<void> {
        const nameId = PoliceData.getCourtModuleValue('NameID');
        await this.uIDefendantNameIDTypeEdit.fill(nameId.substring(0, 1));
        await this.uIDefendantNameIDEdit.fill(nameId.substring(2));
        await this.uIDefendantNameIDEdit.press('Tab');
    }

    async clickAtScheduledCitationRowHeaders(ColumnName: string): Promise<void> {
        const headerCell = this.uIScheduledCitationsTable.locator(`th:has-text("${ColumnName}")`);
        await headerCell.dblclick();
        await this.page.waitForLoadState('load');
    }

    async clickAtUnScheduledCitationRowHeaders(ColumnName: string): Promise<void> {
        const headerCell = this.uIUnScheduledCitationsTable.locator(`th:has-text("${ColumnName}")`);
        await headerCell.dblclick();
        await this.page.waitForLoadState('load');
    }
}

export class AttorneyRecommendationPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIFilterDropdown: Locator;
    readonly uISearchButton: Locator;
    readonly uICheckInGrid: Locator;
    readonly uIAttorneyRecommendationGrid: Locator;
    readonly uIInitialViolationEdit: Locator;
    readonly uIViolationEdit: Locator;
    readonly uIViewReportButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIFilterDropdown = page.locator('#UsrAttCheckIn1_cddFilter_DropDown');
        this.uISearchButton = page.locator('#UsrAttCheckIn1_cmdSearch');
        this.uICheckInGrid = page.locator('#UsrAttCheckIn1_grdInCrtLookUp');
        this.uIAttorneyRecommendationGrid = page.locator('#usrAttRecommandation1_grdCourtCit');
        this.uIInitialViolationEdit = page.locator('#usrAttRecommandation1_lupCharge_CodeValue');
        this.uIViolationEdit = page.locator('#usrAttRecommandation1_lupAmdCharge_CodeValue');
        this.uIViewReportButton = page.locator('#usrAttRecommandation1_btnViewRpt');
    }

    async selectAtFilter(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIFilterDropdown, PoliceData.getCourtModuleValue('Filter'));
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async selectRowByAtDefendantInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICheckInGrid, PoliceData.getCourtModuleValue('Defendant'));
    }

    async selectRowByAtChargeInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAttorneyRecommendationGrid, PoliceData.getCourtModuleValue('Charge'));
    }

    async verifyAtDefendantInGrid(): Promise<void> {
        const gridRow = await this.grid.getGridRowByCellInnerText(this.uICheckInGrid, PoliceData.getCourtModuleValue('Defendant'));
        const text = await gridRow.innerText();
        expect(text).toContain(PoliceData.getCourtModuleValue('Defendant'));
    }

    async verifyAtInitialViolation(): Promise<void> {
        const attribute = await this.uIInitialViolationEdit.inputValue();
        expect(attribute).toBe(PoliceData.getCourtModuleValue('InitialViolation'));
    }

    async verifyAtViolation(): Promise<void> {
        const attribute = await this.uIViolationEdit.inputValue();
        expect(attribute).toBe(PoliceData.getCourtModuleValue('InitialViolation'));
    }

    async clickViewReport(): Promise<void> {
        await this.uIViewReportButton.click();
    }
}

export class CheckInPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uISearchButton: Locator;
    readonly uICheckInResultGrid: Locator;
    readonly uICheckInButton: Locator;
    readonly uICheckInLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uILastNameEdit = page.locator('#ctrlUsrCheckInSrch_txtLastName');
        this.uIFirstNameEdit = page.locator('#ctrlUsrCheckInSrch_txtFirstName');
        this.uISearchButton = page.locator('#ctrlUsrCheckInSrch_cmdSearch');
        this.uICheckInResultGrid = page.locator('#ctrlUsrCheckInSrch_grdCourt');
        this.uICheckInButton = page.locator('#ctrlUsrCheckIn_cmdCheckIn');
        this.uICheckInLabel = page.locator('#ctrlUsrCheckIn_lblCheckInNbr');
    }

    async enterAtLastName(): Promise<void> {
        await this.uILastNameEdit.fill(PoliceData.getCourtModuleValue('LastName'));
        await this.uILastNameEdit.press('Tab');
    }

    async enterAtFirstName(): Promise<void> {
        await this.uIFirstNameEdit.fill(PoliceData.getCourtModuleValue('FirstName'));
        await this.uIFirstNameEdit.press('Tab');
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async selectRowByAtDefendantInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICheckInResultGrid, PoliceData.getCourtModuleValue('Defendant'));
    }

    async clickCheckInButton(): Promise<void> {
        await this.uICheckInButton.click();
    }

    async verifyCheckInLabelAppears(): Promise<void> {
        await expect(this.uICheckInLabel).toBeVisible();
    }
}

export class CourtActivitiesPage {
    readonly page: Page;
    readonly uICourtActivitiesDateEdit: Locator;
    readonly uICourtActivitiesTimeEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uICourtActivitiesDateEdit = page.locator('#dttmAppDttm_Date_KPIDttmCtrl');
        this.uICourtActivitiesTimeEdit = page.locator("//table[@id='dttmAppDttm_Time']//input");
    }

    async verifyAtCourtDate(i: number): Promise<void> {
        const courtdatetime = PoliceData.getCourtModuleValue(`CourtDateTime${i}`).split(' ');
        const courtDate = courtdatetime[0];
        const attribute = await this.uICourtActivitiesDateEdit.inputValue();
        expect(attribute).toBe(courtDate);
    }

    async verifyAtCourtTime(i: number): Promise<void> {
        const courtdatetime = PoliceData.getCourtModuleValue(`CourtDateTime${i}`).split(' ');
        const courtTime = courtdatetime[1];
        const attribute = await this.uICourtActivitiesTimeEdit.inputValue();
        expect(attribute).toBe(courtTime);
    }

    async closeTheScreen(): Promise<void> {
        await this.page.close();
    }
}
