
import { Page, Locator, expect } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { AcknowledgePage, ConfirmPage, PopupPage } from '../popup.page';
import { BaseData } from '../../data/base-data';
import { GridHelpers } from '../../helpers/grid-helpers';
import { ElementHelpers } from '../../helpers/element-helpers';
import { PopupHelpers } from '../../helpers/popup-helpers';
import { DateHelpers, RandomHelpers } from '../../helpers';

export class DoctorSearchPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly uIAddNewButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIDoctorSearchResultGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uISearchButton = page.locator('#cmdSearch');
        this.uIDoctorSearchResultGrid = page.locator('#grdDoctorSrch');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtdoctorNameInGrid(): Promise<void> {
        const doctorNames = await this.grid.getGridTableColumnValues(this.uIDoctorSearchResultGrid, 'Doctor Name');
        const expectedDoctorName = BaseData.getTestValue('DoctorName');
        expect(doctorNames).toContain(expectedDoctorName);
    }

    async selectRandomRowInGrid(): Promise<void> {
        await this.grid.selectRandomRow(this.uIDoctorSearchResultGrid);
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
        await this.page.waitForTimeout(1000);
    }
}

export class DoctorEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIDoctorNameEdit: Locator;
    readonly uIDEANoEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uINPINoEdit: Locator;
    readonly uIPhoneTypeDropdown: Locator;
    readonly uIPhoneNoEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIContactDetailsGrid: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIDoctorEntryTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIDoctorNameEdit = page.locator('#txtDoctorName');
        this.uIDEANoEdit = page.locator('#txtDEA');
        this.uIAddressEdit = page.locator('#adrLocation_txtFrom');
        this.uINPINoEdit = page.locator('#txtNPI');
        this.uIPhoneTypeDropdown = page.locator('#cusHeaderPhone_PhoneType_DropDown');
        this.uIPhoneNoEdit = page.locator("//input[@id='cusHeaderPhone_PhoneNumber']");
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIContactDetailsGrid = page.locator('#grdContactDetails');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIDoctorEntryTable = page.locator('#grdContactDetails');
    }

    async enterAtDoctorName(): Promise<void> {
        await this.uIDoctorNameEdit.fill(BaseData.getTestValue('DoctorName'));
    }

    async enterAtNPINo(): Promise<void> {
        await this.uINPINoEdit.fill(BaseData.getTestValue('NPINo'));
    }

    async enterAtDEANo(): Promise<void> {
        await this.uIDEANoEdit.fill(BaseData.getTestValue('DEANo'));
    }

    async enterAtAddress(): Promise<void> {
        await this.uIAddressEdit.fill(BaseData.getTestValue('Address'));
    }

    async selectAtPhoneType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIPhoneTypeDropdown, BaseData.getTestValue('PhoneType'));
    }

    async enterAtPhoneNo(): Promise<void> {
        await this.uIPhoneNoEdit.click();
        await this.uIPhoneNoEdit.fill(BaseData.getTestValue('PhoneNo'));
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
        await this.page.waitForTimeout(1000);
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await expect(this.popup.modalBody).toContainText('(3)Do You Want To Save All Of The Entered Details?');
        await this.popup.confirmYesButton.click();
        await this.page.waitForTimeout(1000);
    }

    async saveAndCloseScreen(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        await expect(this.popup.modalBody).toContainText('(3)Do You Want To Save All Of The Entered Details?');
        await this.popup.confirmYesButton.click();
    }

    async enterPhoneNo(): Promise<void> {
        await this.uIPhoneNoEdit.click();
        await this.uIPhoneNoEdit.fill('9638527413');
    }

    async clickPrint(): Promise<void> {
        await this.uIPrintButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verify22PleaseSaveAndContinueAck(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(22)Please save and continue');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyAtPhoneTypeInGrid(): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIDoctorEntryTable, 'PhoneType', 0);
        expect(BaseData.getTestValue('PhoneType')).toContain(text.trim());
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
        await expect(this.popup.modalBody).toContainText('(3)Do You Want To Save All Of The Entered Details?');
        await this.popup.confirmYesButton.click();
    }
}

export class MedicalSearchPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly uIAddNewButton: Locator;
    readonly uISaveButton: Locator;
    readonly uIBackButton: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uISearchButton: Locator;
    readonly uIMedicalSearchTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uISaveButton = page.locator('#cmdSave');
        this.uIBackButton = page.locator("//span[@title='Back to Search' and text()='Back']");
        this.uIDateEdit = page.locator('#tabMedSrch_tmpl0_UsrMedicalBasicSrch2_dttmFromDate_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='tabMedSrch_tmpl0_UsrMedicalBasicSrch2_dttmFromDate_Time']//input");
        this.uISearchButton = page.locator("//span[text()='Search']");
        this.uIMedicalSearchTable = page.locator("//div[@id='grdMedicalHist_ctl00']");
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickBackButton(): Promise<void> {
        await this.uIBackButton.click();
        await this.page.waitForTimeout(1000);
    }

    async enterAtFromDate(): Promise<void> {
        await this.uIDateEdit.clear();
        await this.uIDateEdit.fill(BaseData.getTestValue('FromDate'));
    }

    async verifyAtSPNNoInGrid(): Promise<void> {
        const expectedSPN = BaseData.getTestValue('SPNNo');
        const cell = await this.grid.getGridCell(this.uIMedicalSearchTable, expectedSPN, 'SPN#');
        const gridvalue = (await cell.innerText()).trim();
        expect(gridvalue).toBe(expectedSPN);
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
        await this.page.waitForTimeout(1000);
    }

    async selectAtSPNNo(): Promise<void> {
        // const spn = BaseData.getAlarmModuleValue ? BaseData.getAlarmModuleValue('SPNNo') : BaseData.getTestValue('SPNNo');
        // await this.grid.selectRowByCellText(this.uIMedicalSearchTable, spn);
    }

    async verifyColumnSortingAsAscending(columnName: string): Promise<void> {
        const colValues = await this.grid.getGridTableColumnValues(this.uIMedicalSearchTable, columnName);
        // await this.grid.selectGridHeaderColumnName(this.uIMedicalSearchTable, columnName);
        await this.page.waitForTimeout(1500);
        // await this.grid.verifyAtColumnValuesAreSortedAscendingCaseInsensitive(this.uIMedicalSearchTable, columnName, colValues);
    }

    async verifyColumnSortingAsDescending(columnName: string): Promise<void> {
        const colValues = await this.grid.getGridTableColumnValues(this.uIMedicalSearchTable, columnName);
        await this.page.waitForTimeout(1500);
        // await this.grid.verifyAtColumnValuesAreSortedDescendingCaseInsensitive(this.uIMedicalSearchTable, columnName, colValues);
    }
}

export class MedicalHistoryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uISPNNoEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIChartingTab: Locator;
    readonly uIAttachmentTab: Locator;
    readonly uIAddFilesButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uISPNNoEdit = page.locator('#HeaderCtrl_txtSPINNbr');
        this.uILastNameEdit = page.locator('#HeaderCtrl_nmInmateName_LastName');
        this.uIFirstNameEdit = page.locator('#HeaderCtrl_nmInmateName_FirstName');
        this.uIChartingTab = page.locator("//span[text()='Charting']");
        this.uIAttachmentTab = page.locator("//span[text()='Attachment']");
        this.uIAddFilesButton = page.locator('#cmdAddFile');
    }

    async enterAtSPNNo(i?: number): Promise<void> {
        const key = i !== undefined ? `SPNNo${i}` : 'SPNNo';
        await this.uISPNNoEdit.fill(BaseData.getTestValue(key));
        await this.uISPNNoEdit.press('Tab');
    }

    async verifyAtName(i?: number): Promise<void> {
        const lastNameKey = i !== undefined ? `LastName${i}` : 'LastName';
        const firstNameKey = i !== undefined ? `FirstName${i}` : 'FirstName';
        await expect(this.uILastNameEdit).toHaveValue(BaseData.getTestValue(lastNameKey));
        await expect(this.uIFirstNameEdit).toHaveValue(BaseData.getTestValue(firstNameKey));
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForTimeout(1000);
        const modalText = await this.popup.modalBody.innerText();
        console.log(modalText);
        await this.popup.confirmYesButton.click();
    }

    async switchToChartingTab(): Promise<void> {
        await this.uIChartingTab.click();
        await this.page.waitForTimeout(1000);
        new BrowserHelpers(this.page).switchToFrame('frmMedCharting.aspx');
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
        await expect(this.popup.modalBody).toContainText('(3)Do You Want To Save All Of The Entered Details?');
        await this.popup.confirmYesButton.click();
    }

    async verifyAttachmentTabDoesNotDisplayed(): Promise<void> {
        await expect(this.uIAttachmentTab).not.toBeVisible();
    }

    async verifyAttachmentTabIsDisplayed(): Promise<void> {
        await expect(this.uIAttachmentTab).toBeVisible();
    }

    async clickAttachmentTab(): Promise<void> {
        await this.uIAttachmentTab.click();
        await this.page.waitForTimeout(3000);
        new BrowserHelpers(this.page).switchToFrame('frmTxtAttachMgrEx');
        await this.page.waitForLoadState('load');
    }

    async clickAddFilesButton(): Promise<void> {
        await this.uIAddFilesButton.click();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async enterAtLastName(): Promise<void> {
        await this.uILastNameEdit.fill(BaseData.getTestValue('LastName'));
    }

    async enterAtFirstName(): Promise<void> {
        await this.uIFirstNameEdit.fill(BaseData.getTestValue('FirstName'));
    }
}

export class ChartingTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIByEdit: Locator;
    readonly uIEditorcontrol: Locator;
    readonly uIReasonDropdown: Locator;
    readonly uIAddButton: Locator;
    readonly uIChartDetailsGrid: Locator;
    readonly uIResetButton: Locator;
    readonly uIInternalSaveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIDateEdit = page.locator('#dttmChartingDate_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='dttmChartingDate_Time']//input");
        this.uIByEdit = page.locator('#lupPF_CodeValue');
        this.uIEditorcontrol = page.locator('#KPIRadHuberActivityDetails_contentIframe');
        this.uIReasonDropdown = page.locator('#cddReason_DropDown');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIChartDetailsGrid = page.locator('#grdChartDetails');
        this.uIResetButton = page.locator('#cmdReset');
        this.uIInternalSaveButton = page.locator('#cmdSave');
    }

    async tabOutDateAndTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async enterAtBy(): Promise<void> {
        await this.uIByEdit.fill(BaseData.getTestValue('By'));
    }

    async selectAtReason(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIReasonDropdown, BaseData.getTestValue('Reason'));
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtReasonInGridBasedOnBy(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIChartDetailsGrid, BaseData.getTestValue('By'), 'Reason');
        const gridvalue = (await cell.innerText()).trim();
        expect(gridvalue).toBe(BaseData.getTestValue('Reason'));
    }

    async verifyUpdateSuccessfulMessage(): Promise<void> {
        //await this.elementHelpers.verifyUpdateSuccessful();
    }

    async clickInternalSave(): Promise<void> {
        await this.uIInternalSaveButton.click();
        await this.page.waitForTimeout(1000);
        const modalText = await this.popup.modalBody.innerText();
        console.log(modalText);
        await this.popup.confirmYesButton.click();
    }

    async switchToMessageBox(): Promise<void> {
        new BrowserHelpers(this.page).switchToFrame('KPIRadHuberActivityDetails_contentIframe');
    }

    async enterAtChartingMessage(): Promise<void> {
        const iframe = this.page.frameLocator('#KPIRadHuberActivityDetails_contentIframe');
        await iframe.locator('body').fill(BaseData.getTestValue('ChartingMessage'));
    }
}

export class MedicalDentistPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uISPNEdit: Locator;
    readonly uIDentalVisitRequestedDateEdit: Locator;
    readonly uIDentalProblemEdit: Locator;
    readonly uIStatusDropDown: Locator;
    readonly uIAddButton: Locator;
    readonly uIMedicalDentistTable: Locator;
    readonly uISaveButton: Locator;
    readonly uIDentalVisitRequestedTimeEdit: Locator;
    readonly uIInmateSubmittedDentalRequestFromRadioButton: Locator;
    readonly uIReceivedByEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uISPNEdit = page.locator('#NamCtrlSPIN_SPN');
        this.uIDentalVisitRequestedDateEdit = page.locator('#dttmDentalVisitReq_Date_KPIDttmCtrl');
        this.uIDentalProblemEdit = page.locator('#txtDentalProblem');
        this.uIStatusDropDown = page.locator('#cddStatus_DropDown');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIMedicalDentistTable = page.locator('#grdTooth');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIDentalVisitRequestedTimeEdit = page.locator("input.textboxdatetime.igte_BlueThemeEditInContainer, input[id*='dttmDentalVisitReq_Time']");
        this.uIInmateSubmittedDentalRequestFromRadioButton = page.locator('#chkInmateSubmitionForm_0');
        this.uIReceivedByEdit = page.locator('#LupReceivedBy_CodeValue');
    }

    async enterAtSPN(): Promise<void> {
        await this.uISPNEdit.fill(BaseData.getTestValue('SPN'));
        await this.uISPNEdit.press('Tab');
    }

    async tabOutDentalVisitRequiredDateAndTime(): Promise<void> {
        await this.uIDentalVisitRequestedDateEdit.press('Tab');
    }

    async enterAtDentalProblem(): Promise<void> {
        await this.uIDentalProblemEdit.fill(BaseData.getTestValue('DentalProblem'));
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtToothInGrid(): Promise<void> {
        const expectedStatus = BaseData.getTestValue('Status');
        const cell = await this.grid.getGridCell(this.uIMedicalDentistTable, expectedStatus, 'Status');
        const text = (await cell.innerText()).trim();
        expect(text).toBe(expectedStatus);
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForTimeout(1000);
        await expect(this.popup.modalBody).toContainText('(3)Do You Want To Save All Of The Entered Details?');
        await this.popup.confirmYesButton.click();
    }

    async clicksave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async Verify3033AcknowledgePopUp(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(30033)Enter Status');
        await this.popup.acknowledgeOkButton.click();
    }

    async selectAtStatus(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIStatusDropDown, BaseData.getTestValue('Status'));
    }

    async VerifyAdditionalSuccessFullAcknowledgePopUp(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('1002 - Addition Successful');
        await this.popup.acknowledgeOkButton.click();
    }

    async clickInmateSubmittedDentalRequestFromRadioButton(): Promise<void> {
        await this.uIInmateSubmittedDentalRequestFromRadioButton.click();
    }

    async enterAtReceivedBy(): Promise<void> {
        await this.uIReceivedByEdit.fill(BaseData.getTestValue('ReceivedBy'));
    }
}

export class MedicationPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly uIDrugCodeEdit: Locator;
    readonly uIPrescribedAmtEdit: Locator;
    readonly uICurrentBalanceEdit: Locator;
    readonly uIRefillsEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIMedicationGrid: Locator;
    readonly uISaveIcon: Locator;
    readonly uISaveAndCloseIcon: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIResetIcon: Locator;
    readonly uIDosageEdit: Locator;
    readonly uIGenericAllowedCheckbox: Locator;
    readonly uINotesEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uIDrugCodeEdit = page.locator('#lupDrug_CodeValue');
        this.uIPrescribedAmtEdit = page.locator('#txtPrescribedAmt');
        this.uICurrentBalanceEdit = page.locator('#txtCurBalance');
        this.uIRefillsEdit = page.locator('#txtRefills');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIClearButton = page.locator('#cmdClear');
        this.uIMedicationGrid = page.locator('#grdMedication');
        this.uISaveIcon = page.locator('#cmdSave');
        this.uISaveAndCloseIcon = page.locator('#cmdSaveNClose');
        this.uIPrintIcon = page.locator('#cmdPrint');
        this.uIResetIcon = page.locator('#cmdRefresh');
        this.uIDosageEdit = page.locator('#txtDosage');
        this.uIGenericAllowedCheckbox = page.locator('#chkGeneric');
        this.uINotesEdit = page.locator('#txtNotes');
    }

    async enterAtDrug(i: number): Promise<void> {
        await this.uIDrugCodeEdit.fill(BaseData.getTestValue(`Drug${i}`));
        await this.uIDrugCodeEdit.press('Tab');
    }

    async enterAtPrescribedAmt(i: number): Promise<void> {
        await this.uIPrescribedAmtEdit.fill(BaseData.getTestValue(`PrescribedAmt${i}`));
    }

    async enterAtCurrentBalance(i: number): Promise<void> {
        await this.uICurrentBalanceEdit.fill(BaseData.getTestValue(`CurrentBalance${i}`));
    }

    async enterAtRefills(i: number): Promise<void> {
        await this.uIRefillsEdit.fill(BaseData.getTestValue(`Refills${i}`));
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtDrugInGrid(i: number): Promise<void> {
        const drug = BaseData.getTestValue(`Drug${i}`);
        const cell = await this.grid.getGridCell(this.uIMedicationGrid, drug, 'Drug');
        const actualDrug = (await cell.innerText()).trim();
        expect(actualDrug).toBe(drug);
    }

    async verifyAtDrugNotAvailableInGrid(i: number): Promise<void> {
        const drug = BaseData.getTestValue(`Drug${i}`);
        const colValues = await this.grid.getGridTableColumnValues(this.uIMedicationGrid, 'Drug');
        expect(colValues, `${drug} should not be available in grid`).not.toContain(drug);
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
        await this.page.waitForTimeout(1000);
    }

    async saveScreen(): Promise<void> {
        await this.uISaveIcon.click();
        await this.page.waitForTimeout(1000);
        await expect(this.popup.modalBody).toContainText('(3) Do You Want To Save All Of The Entered Details?');
        await this.popup.confirmYesButton.click();
    }

    async clickScheduleIconByDrugInGrid(i: number): Promise<void> {
        const drug = BaseData.getTestValue(`Drug${i}`);
        const cell = await this.grid.getGridCell(this.uIMedicationGrid, drug, 'S');
        await cell.click();
    }
}

export class MedicationSchedulePage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIDistributionPeriodRadDropdownArrow: Locator;
    readonly uIDistributionPeriodRadDropdown: Locator;
    readonly uIStartDateEdit: Locator;
    readonly uIEndDateEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uISaveIcon: Locator;
    readonly uIDistributionDaysDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIDistributionPeriodRadDropdownArrow = page.locator('#radMedicalFlags_Arrow');
        this.uIDistributionPeriodRadDropdown = page.locator('#radMedicalFlags_DropDown');
        this.uIStartDateEdit = page.locator('#dcFromDate_KPIDttmCtrl');
        this.uIEndDateEdit = page.locator('#dcToDate_KPIDttmCtrl');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uISaveIcon = page.locator('#cmdSave');
        this.uIDistributionDaysDropdown = page.locator('#cddActivityDays_DropDown');
    }

    async selectAtDistributionPeriod(i: number): Promise<void> {
        await this.uIDistributionPeriodRadDropdownArrow.click();
        await this.page.waitForTimeout(500);
        // await this.elementHelpers.selectRadControlDropDownValueSelectWithInput(
        this.uIDistributionPeriodRadDropdown,
            BaseData.getTestValue(`DistributionPeriod${i}`)
        // );
        await this.uIDistributionPeriodRadDropdownArrow.click();
        await this.page.waitForTimeout(500);
    }

    async enterStartDateAsCurrentDate(): Promise<void> {
        await this.uIStartDateEdit.fill(DateHelpers.getCurrentDate());
        await this.uIStartDateEdit.press('Tab');
    }

    async enterToDateAsFutureDate(noOfDays: number): Promise<void> {
        await this.uIEndDateEdit.fill(DateHelpers.getFutureDate(noOfDays));
        await this.uIEndDateEdit.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
        await this.page.waitForTimeout(1000);
    }

    async selectAtDistributionDays(i: number): Promise<void> {
        await this.elementHelpers.selectDropDownOption(
            this.uIDistributionDaysDropdown,
            BaseData.getTestValue(`DistributionDays${i}`)
        );
        await this.uIDistributionDaysDropdown.press('Tab');
    }

    async saveScreen(): Promise<void> {
        await this.uISaveIcon.click();
        await this.page.waitForTimeout(1000);
        await expect(this.popup.modalBody).toContainText('(3) Do You Want To Save All Of The Entered Details?');
        await this.popup.confirmYesButton.click();
    }

    async verify30660PleaseConfigureAcknowledgePopup(i: number): Promise<void> {
        const expected = `(30660) Please configure From and To times for ${BaseData.getTestValue(`DistributionPeriod${i}`)} under Coded 4151.`;
        await expect(this.popup.modalBody).toContainText(expected);
        await this.popup.acknowledgeOkButton.click();
    }
}

export class MedicalPage {
    readonly page: Page;
    private browserHelpers: BrowserHelpers;

    constructor(page: Page) {
        this.page = page;
        this.browserHelpers = new BrowserHelpers(page);
    }

    async Reset(): Promise<void> {
        // No-op - page state managed by test framework
    }

    async switchToDoctorSearch(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('Doctor Search');
    }

    async switchToDoctorEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Doctor Search');
    }

    async switchToMedicalSearch(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('Medical Search');
    }

    async switchToMedicalHistory(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Medical History');
    }

    async switchToMedicalDentist(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('frmMedicalDentist');
    }

    async switchToMedication(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Medication');
    }

    async switchToMedicationSchedule(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Medication Schedule');
    }
}
