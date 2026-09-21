// @ts-nocheck
import { Page, Locator, expect } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { AcknowledgePage, ConfirmPage, PopupPage } from '../popup.page';
import { BaseData } from '../../data/base-data';
import { GridHelpers } from '../../helpers/grid-helpers';
import { ElementHelpers } from '../../helpers/element-helpers';
import { PopupHelpers } from '../../helpers/popup-helpers';
import { DateHelpers, RandomHelpers } from '../../helpers';

export class CMSearchPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIAddNewButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIBackButton: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uIInvestYearEdit: Locator;
    readonly uIDateRangeClearButton: Locator;
    readonly uIInvestNumberEdit: Locator;
    readonly uIInvestigatorCodeEdit: Locator;
    readonly uISupervisorCodeEdit: Locator;
    readonly uIDivisionComboBox: Locator;
    readonly uISectionComboBox: Locator;
    readonly uICMSSearchTable: Locator;
    readonly uIStatusComboBox: Locator;
    readonly uIAdvancedTab: Locator;
    readonly uIDateRangeFromEdit: Locator;
    readonly uIDateRangeToEdit: Locator;
    readonly uIFromTimeEdit: Locator;
    readonly uIToTimeEdit: Locator;
    readonly uIPrintIconButton: Locator;
    readonly uIExcelIconButton: Locator;
    readonly uICaseGrid: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIShowMapButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIAddNewButton = page.locator("//span[contains(text(), 'Add New')]");
        this.uISearchButton = page.locator("//span[contains(text(), 'Search')]");
        this.uIResetButton = page.locator("//span[contains(text(), 'Reset')]");
        this.uIBackButton = page.locator("//span[contains(text(), 'Back')]");
        this.uICaseYearEdit = page.locator('#tabCase_tmpl0_Usrcasesrchbsc2_numCaseNbr_Year');
        this.uICaseNumberEdit = page.locator('#tabCase_tmpl0_Usrcasesrchbsc2_numCaseNbr_Number');
        this.uIInvestYearEdit = page.locator('#tabCase_tmpl0_Usrcasesrchbsc2_nbrInvest_Year');
        this.uIDateRangeClearButton = page.locator('#tabCase_tmpl0_Usrcasesrchbsc2_imgClear');
        this.uIInvestNumberEdit = page.locator('#tabCase_tmpl0_Usrcasesrchbsc2_nbrInvest_Number');
        this.uIInvestigatorCodeEdit = page.locator('#tabCase_tmpl0_Usrcasesrchbsc2_lupOfficers_CodeValue');
        this.uISupervisorCodeEdit = page.locator('#tabCase_tmpl0_Usrcasesrchbsc2_lupSupervisor_CodeValue');
        this.uIDivisionComboBox = page.locator('#tabCase_tmpl0_Usrcasesrchbsc2_cddDivision_DropDown');
        this.uISectionComboBox = page.locator('#tabCase_tmpl0_Usrcasesrchbsc2_cddSection_DropDown');
        this.uICMSSearchTable = page.locator('#grdCases');
        this.uIStatusComboBox = page.locator('#tabCase_tmpl0_Usrcasesrchbsc2_cddShowOnly_DropDown');
        this.uIAdvancedTab = page.locator("//span[contains(text(), 'Advanced')]");
        this.uIDateRangeFromEdit = page.locator('#tabCase_tmpl0_Usrcasesrchbsc2_DttmFrom_Date_KPIDttmCtrl');
        this.uIDateRangeToEdit = page.locator('#tabCase_tmpl0_Usrcasesrchbsc2_DttmEnd_Date_KPIDttmCtrl');
        this.uIFromTimeEdit = page.locator("//table[@id = 'tabCase_tmpl0_Usrcasesrchbsc2_DttmFrom_Time']//input");
        this.uIToTimeEdit = page.locator("//table[@id = 'tabCase_tmpl0_Usrcasesrchbsc2_DttmEnd_Time']//input");
        this.uIPrintIconButton = page.locator("//img[@src = '/KPIImages/ico/16_print.gif']");
        this.uIExcelIconButton = page.locator("//img[@src = '/KPIImages/ico/16_excel.gif']");
        this.uICaseGrid = page.locator('#grdCases');
        this.uIRefreshButton = page.locator("//span[@title='Refresh']");
        this.uIShowMapButton = page.locator("//span[@title='Show Map']");
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickBack(): Promise<void> {
        await this.uIBackButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickReset(): Promise<void> {
        await this.uIResetButton.click();
        await this.page.waitForTimeout(1000);
    }

    async enterAtCaseNumber(): Promise<void> {
        const caseNo = BaseData.getCMModuleValue('CaseNo');
        await this.uICaseYearEdit.fill(caseNo.substring(0, 2));
        await this.uICaseNumberEdit.fill(caseNo.substring(3));
        await this.uICaseNumberEdit.press('Tab');
    }

    async enterAtInvestNo(): Promise<void> {
        const investNo = BaseData.getCMModuleValue('InvestNo');
        await this.uIInvestYearEdit.fill(investNo.substring(0, 2));
        await this.uIInvestNumberEdit.fill(investNo.substring(3));
        await this.uIInvestNumberEdit.press('Tab');
    }

    async selectAtDivision(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIDivisionComboBox, BaseData.getCMModuleValue('Division'));
    }

    async selectAtSection(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uISectionComboBox, BaseData.getCMModuleValue('Section'));
    }

    async clickRowAtCaseNumber1(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICMSSearchTable, BaseData.getCMModuleValue('CaseNumber'));
    }

    async clickRowAtInvestNo(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICMSSearchTable, BaseData.getCMModuleValue('InvestNo'));
    }

    async clickAdvancedTab(): Promise<void> {
        await this.uIAdvancedTab.click();
    }

    async verifyRowAtInvestNo(rowIndex?: number): Promise<void> {
        if (rowIndex !== undefined) {
            const cellText = await this.grid.getGridCellInnerText(this.uICMSSearchTable, 'Invest#', rowIndex);
            expect(cellText).toBe(BaseData.getCMModuleValue('InvestNo'));
        } else {
            const cell = await this.grid.getGridCell(this.uICMSSearchTable, BaseData.getCMModuleValue('CaseNo'), 'Invest#');
            const text = await cell.innerText();
            expect(text.trim()).toBe(BaseData.getCMModuleValue('InvestNo'));
        }
    }

    async verifyAtCaseNo(caseNo?: string): Promise<void> {
        const expected = caseNo || BaseData.getCMModuleValue('CaseNo');
        const cell = await this.grid.getGridCell(this.uICMSSearchTable, expected, 'Case#');
        const text = await cell.innerText();
        expect(text.trim()).toBe(expected);
    }

    async verifyAtStatusByAtCaseNo(i?: number): Promise<void> {
        const expectedStatus = i !== undefined ? BaseData.getCMModuleValue('Status' + i) : BaseData.getCMModuleValue('Status');
        const cell = await this.grid.getGridCell(this.uICMSSearchTable, BaseData.getCMModuleValue('CaseNo'), 'Status');
        const text = await cell.innerText();
        expect(text.trim()).toBe(expectedStatus);
    }

    async selectStatusAsClosed(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIStatusComboBox, 'Closed');
        await this.uIStatusComboBox.press('Tab');
    }

    async verifyAllCasesInGridHasClosedStatus(): Promise<void> {
        const cellValues = await this.grid.getGridTableColumnValues(this.uICMSSearchTable, 'Status');
        for (const strStatus of cellValues) {
            expect(strStatus.trim()).toBe('Closed');
        }
    }

    async selectAnyRecord(): Promise<void> {
        await this.grid.selectRandomRow(this.uICMSSearchTable);
    }

    async clickRandomRow(): Promise<void> {
        await this.grid.selectRandomRow(this.uICMSSearchTable);
    }

    async clickDateRangeClearButton(): Promise<void> {
        await this.uIDateRangeClearButton.click();
    }

    async enterAtInvestigator(): Promise<void> {
        await this.uIInvestigatorCodeEdit.fill(BaseData.getCMModuleValue('Investigator'));
        await this.uIInvestigatorCodeEdit.press('Tab');
    }

    async enterAtSupervisor(): Promise<void> {
        await this.uISupervisorCodeEdit.fill(BaseData.getCMModuleValue('Supervisor'));
        await this.uISupervisorCodeEdit.press('Tab');
    }

    async selectAtStatus(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIStatusComboBox, BaseData.getCMModuleValue('Status'));
        await this.uIStatusComboBox.press('Tab');
    }

    async enterFromDateTime(): Promise<void> {
        await this.uIDateRangeFromEdit.fill('05052017');
        await this.uIFromTimeEdit.fill(DateHelpers.getCurrentTime());
    }

    async enterToDateTime(): Promise<void> {
        await this.uIDateRangeToEdit.fill(DateHelpers.getCurrentDate());
        await this.uIToTimeEdit.fill(DateHelpers.getCurrentTime());
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIconButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickAtCaseNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICMSSearchTable, BaseData.getCMModuleValue('CaseNo'));
    }

    async selectRowByAtInvestNo(investNo?: string): Promise<void> {
        const target = investNo || BaseData.getCMModuleValue('InvestNo');
        await this.grid.selectRowByCellText(this.uICMSSearchTable, target);
    }

    async getRowCount(): Promise<string> {
        const count = await this.grid.getRowCount(this.uICMSSearchTable);
        return count.toString();
    }

    async reloadCMSearchScreen(): Promise<void> {
        await this.page.reload();
        await this.page.waitForTimeout(2000);
    }

    async clickExcelIcon(): Promise<void> {
        await this.uIExcelIconButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyTheRecordsPresentInTheGrid(): Promise<void> {
        const count = await this.grid.getRowCount(this.uICaseGrid);
        expect(count).toBeGreaterThan(1);
    }

    async verifyAddNewButtonIsEnabled(): Promise<void> {
        await expect(this.uIAddNewButton).toBeEnabled();
    }

    async verifyAddNewButtonIsDisabled(): Promise<void> {
        const parentLi = this.uIAddNewButton.locator("xpath=ancestor::li[@title='Add New Item']");
        const classAttr = await parentLi.getAttribute('class') || '';
        expect(classAttr).toContain('Disabled');
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async clickRefresh(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async enterDateRangeAsOneMonthBeforeCurrentDate(): Promise<string> {
        const fromDate = DateHelpers.getPreviousDateByMonth(1);
        await this.uIDateRangeFromEdit.click();
        await this.uIDateRangeFromEdit.fill(fromDate);
        return fromDate;
    }

    async enterToDateAsCurrentDate(): Promise<string> {
        const toDate = DateHelpers.getCurrentDate();
        await this.uIDateRangeToEdit.fill(toDate);
        await this.uIToTimeEdit.fill(DateHelpers.getCurrentTime());
        await this.uIToTimeEdit.press('Tab');
        return toDate;
    }

    async getAssignedDateInGrid(): Promise<string[]> {
        return await this.grid.getGridTableColumnValues(this.uICMSSearchTable, 'Assigned');
    }

    async verifyAtCaseNoNotListedInGrid(): Promise<void> {
        const isModalVisible = await this.popup.modalBody.isVisible().catch(() => false);
        const isGridVisible = await this.uICMSSearchTable.isVisible().catch(() => false);
        if (isModalVisible) {
            await expect(this.popup.modalBody).toContainText('1011 - No Record Found');
            await this.popup.acknowledgeOkButton.click();
        } else if (isGridVisible) {
            const values = await this.grid.getGridTableColumnValues(this.uICMSSearchTable, 'Case#');
            expect(values).not.toContain(BaseData.getCMModuleValue('CaseNo'));
        }
    }

    async clickShowMap(): Promise<void> {
        await this.uIShowMapButton.click();
    }

    async enterFromDate(): Promise<void> {
        await this.uIDateRangeFromEdit.fill(DateHelpers.getPreviousDate(60, 'MM/dd/yyyy'));
        await this.uIDateRangeFromEdit.press('Tab');
    }

    async enterToDate(): Promise<void> {
        await this.uIDateRangeToEdit.fill(DateHelpers.getCurrentDate());
        await this.uIDateRangeToEdit.press('Tab');
    }
}

export class CMSearchAdvancedTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uITypeComboBox: Locator;
    readonly uICategoryComboBox: Locator;
    readonly uIDetailComboBox: Locator;
    readonly uIMOCommentEdit: Locator;
    readonly uIEffortsCategoryComboBox: Locator;
    readonly uIActivityComboBox: Locator;
    readonly uITotalEffortHoursEdit: Locator;
    readonly uIHistoryTextEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uITypeComboBox = page.locator('#tabCase_tmpl1_Usrcasesrchbsc3_cddMOType_DropDown');
        this.uICategoryComboBox = page.locator('#tabCase_tmpl1_Usrcasesrchbsc3_LstCategory_DropDown');
        this.uIDetailComboBox = page.locator('#tabCase_tmpl1_Usrcasesrchbsc3_LstDetail_DropDown');
        this.uIMOCommentEdit = page.locator('#tabCase_tmpl1_Usrcasesrchbsc3_txtMOMoment');
        this.uIEffortsCategoryComboBox = page.locator('#tabCase_tmpl1_Usrcasesrchbsc3_cddEffortsCat_DropDown');
        this.uIActivityComboBox = page.locator('#tabCase_tmpl1_Usrcasesrchbsc3_cddActivity');
        this.uITotalEffortHoursEdit = page.locator('#tabCase_tmpl1_Usrcasesrchbsc3_txtTotEffort');
        this.uIHistoryTextEdit = page.locator('#tabCase_tmpl1_Usrcasesrchbsc3_txtTextSrch');
    }

    async selectAtEffectCategory(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIEffortsCategoryComboBox, BaseData.getCMModuleValue('EffortsCategory'));
        await this.uIEffortsCategoryComboBox.press('Tab');
    }

    async selectAtActivityCode(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIActivityComboBox, BaseData.getCMModuleValue('ActivityCode'));
    }

    async enterHistoryAsProphoenixAutomation(): Promise<void> {
        await this.uIHistoryTextEdit.fill('Prophoenix, Automation');
    }

    async enterAtHours(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITotalEffortHoursEdit, BaseData.getCMModuleValue('Hour'));
    }

    async selectAtType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITypeComboBox, BaseData.getCMModuleValue('Type'));
    }

    async selectAtDetail(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIDetailComboBox, BaseData.getCMModuleValue('Detail'));
    }

    async getActivityCodeList(): Promise<string[]> {
        const options = await this.uIActivityComboBox.locator('option').allInnerTexts();
        const activityList = options.map(t => t.trim()).filter(t => t !== '--' && t !== '');
        return activityList;
    }

    async verifyEffortsCategorySortedInAlphapeticalOrder(): Promise<void> {
        const options = await this.uIEffortsCategoryComboBox.locator('option').allInnerTexts();
        const ddList = options.map(t => t.trim()).filter(t => !t.includes('Inq 2028') && t !== '--' && t !== '');
        const sorted = [...ddList].sort((a, b) => a.localeCompare(b));
        expect(ddList).toEqual(sorted);
    }
}

export class CaseFolderPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly grid: GridHelpers;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uIInvenstYearEdit: Locator;
    readonly uIInvestNumberEdit: Locator;
    readonly uILocationEdit: Locator;
    readonly uICSZCityEdit: Locator;
    readonly uICSZStateComboBox: Locator;
    readonly uICSZZipEdit: Locator;
    readonly uIAssignmentTab: Locator;
    readonly uIInvestigatorsTab: Locator;
    readonly uIReviewTab: Locator;
    readonly uITasksTab: Locator;
    readonly uIEffortsTab: Locator;
    readonly uIMOTab: Locator;
    readonly uIUCRTab: Locator;
    readonly uIReportingTab: Locator;
    readonly uIHistoryTab: Locator;
    readonly uICustomTab: Locator;
    readonly uIQAFormsTab: Locator;
    readonly uIAttachmentTab: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uICaseStatusTextView: Locator;
    readonly uIReOpenButton: Locator;
    readonly uIResetButton: Locator;
    readonly uICalenderIcon: Locator;
    readonly uICustomSettingIcon: Locator;
    readonly uIManageCustomField: Locator;
    readonly uIStatusTextView: Locator;
    readonly uIDispositionStatusTextView: Locator;
    readonly uICaseInfoIcon: Locator;
    readonly uIJurisComboBox: Locator;
    readonly uIReviewText: Locator;
    readonly uIAssignedDateText: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uILeadsTab: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIPropertyTab: Locator;
    readonly uINotificationIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.grid = new GridHelpers(page);

        this.uICaseYearEdit = page.locator('#numCaseNo_Year');
        this.uICaseNumberEdit = page.locator('#numCaseNo_Number');
        this.uIInvenstYearEdit = page.locator('#numInvestPFNo_Year');
        this.uIInvestNumberEdit = page.locator('#numInvestPFNo_Number');
        this.uILocationEdit = page.locator('#txtLocation_txtFrom');
        this.uICSZCityEdit = page.locator('#custHeaderCSZ_City');
        this.uICSZStateComboBox = page.locator('#custHeaderCSZ_State_DropDown');
        this.uICSZZipEdit = page.locator('#custHeaderCSZ_Zip');
        this.uIAssignmentTab = page.locator("//span[contains(text(),'Assignment')]");
        this.uIInvestigatorsTab = page.locator("//span[contains(text(),'Investigator(s)')]");
        this.uIReviewTab = page.locator("//span[contains(text(),'Review')]");
        this.uITasksTab = page.locator("//span[contains(text(),'Task')]");
        this.uIEffortsTab = page.locator("//div[@id='tabCaseMgmt']//span[@mkr ='ti3']");
        this.uIMOTab = page.locator("//span[contains(text(),'MO')]");
        this.uIUCRTab = page.locator("//div[@id='tabCaseMgmt']//span[@mkr ='ti6']");
        this.uIReportingTab = page.locator("//span[contains(text(),'Reporting')]");
        this.uIHistoryTab = page.locator("//span[contains(text(),'History')]");
        this.uICustomTab = page.locator("//span[contains(text(),'Teamwork')]");
        this.uIQAFormsTab = page.locator("//span[contains(text(),'QA Forms')]");
        this.uIAttachmentTab = page.locator("//span[contains(text(),'Attachment')]");
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uICaseStatusTextView = page.locator('#lblCaseStatus');
        this.uIReOpenButton = page.locator('#cmdClose');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uICalenderIcon = page.locator('#cmdScheduler');
        this.uICustomSettingIcon = page.locator("//img[contains(@src,'ico/Customize_1.png')]");
        this.uIManageCustomField = page.locator("//span[contains(text(),'Manage Custom Fields')]");
        this.uIStatusTextView = page.locator('#lblCaseStatus');
        this.uIDispositionStatusTextView = page.locator('#lblDispositonStatus');
        this.uICaseInfoIcon = page.locator('#numCaseNo_imgBtn');
        this.uIJurisComboBox = page.locator('#lstJuris');
        this.uIReviewText = page.locator("//div[@id='tabCaseMgmt']//span[text()='Review']");
        this.uIAssignedDateText = page.locator('#lblAssignedDttm');
        this.uILeftSideStatusBar = page.locator("//td[@class='statusBar']/b");
        this.uILeadsTab = page.locator("//span[contains(text(),'Leads')]");
        this.uIPrintIcon = page.locator('#cmdPrint');
        this.uIPropertyTab = page.locator("//span[contains(text(),'Property')]");
        this.uINotificationIcon = page.locator('#btnNotify');
    }

    async enterCaseAtCaseNo(): Promise<void> {
        const caseNo = BaseData.getCMModuleValue('CaseNo');
        await this.uICaseYearEdit.fill(caseNo.substring(0, 2));
        await this.uICaseNumberEdit.fill(caseNo.substring(3));
        await this.uICaseNumberEdit.press('Tab');
    }

    async verifyTaskTabAppearsGreenColor(): Promise<void> {
        const classAttr = await this.uITasksTab.getAttribute('class') || '';
        expect(classAttr).toContain('Greencolor');
    }

    async verifyUCRTabAppearsGreenColor(): Promise<void> {
        const classAttr = await this.uIUCRTab.getAttribute('class') || '';
        expect(classAttr).toContain('Greencolor');
    }

    async verifyStatusAsOpen(): Promise<void> {
        const text = await this.uIStatusTextView.innerText();
        expect(text.trim()).toBe('Open');
    }

    async verifyDispositionStatusAsOpenPending(): Promise<void> {
        const text = await this.uIDispositionStatusTextView.innerText();
        expect(text.trim()).toBe('Open/Pending (CM)');
    }

    async clickReopenButton(): Promise<void> {
        await this.uIReOpenButton.click();
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verify8036CaseNumberIsMandatoryAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8036) Case Number is mandatory');
        await this.popup.acknowledgeOkButton.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async saveNclose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        await this.popup.confirmYesButton.click();
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async clickAssignmentTab(): Promise<void> {
        await this.uIAssignmentTab.click();
    }

    async clickInvestigatorsTab(): Promise<void> {
        await this.uIInvestigatorsTab.click();
        await this.page.waitForTimeout(1000);
    }

    async clickReviewTab(): Promise<void> {
        await this.uIReviewTab.click();
    }

    async clickEffortsTab(): Promise<void> {
        await this.uIEffortsTab.click();
    }

    async clickTasksTab(): Promise<void> {
        await this.uITasksTab.click();
    }

    async clickReportingTab(): Promise<void> {
        await this.uIReportingTab.click();
        await this.page.waitForLoadState('load');
    }

    async clickMOTab(): Promise<void> {
        await this.uIMOTab.click();
    }

    async clickUCRTab(): Promise<void> {
        await this.uIUCRTab.click();
    }

    async clickAttachmentTab(): Promise<void> {
        await this.uIAttachmentTab.click();
    }

    async clickHistoryTab(): Promise<void> {
        await this.uIHistoryTab.click();
    }

    async clickCustomTab(): Promise<void> {
        await this.uICustomTab.click();
    }

    async clickQAFormsTab(): Promise<void> {
        await this.uIQAFormsTab.click();
    }

    async verify3DoYouWantToSaveConfirmMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(3)');
        await expect(this.popup.modalBody).toContainText('Do You Want To Save All Of The Entered Details?');
        await this.popup.confirmYesButton.click();
    }

    async switchToUCRTab(): Promise<void> {
        await this.uIUCRTab.click();
    }

    async switchToMOTab(): Promise<void> {
        await this.uIMOTab.click();
    }

    async switchToTaskTab(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uITasksTab.click();
    }

    async switchToHistoryTab(): Promise<void> {
        await this.uIHistoryTab.click();
    }

    async switchToQAFormsTab(): Promise<void> {
        await this.uIQAFormsTab.click();
    }

    async switchToReviewTab(): Promise<void> {
        await this.uIReviewTab.click();
    }

    async switchToLeadsTab(): Promise<void> {
        await this.uILeadsTab.click();
    }

    async switchToEffortsTab(): Promise<void> {
        await this.uIEffortsTab.click();
        await this.page.waitForLoadState('load');
    }

    async switchToCustomTab(): Promise<void> {
        await this.uICustomTab.click();
    }

    async verifyCaseStatusColorAsRed(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const style = await this.uICaseStatusTextView.getAttribute('style') || '';
        expect(style).toContain('red');
    }

    async verifyAllTabsAreEnabled(): Promise<void> {
        const allTabs = this.page.locator("//span[contains(@class,'igtab_BlueThemeTHText')]");
        const count = await allTabs.count();
        for (let i = 0; i < count; i++) {
            const tab = allTabs.nth(i);
            if (await tab.isVisible()) {
                await expect(tab).toBeEnabled();
            }
        }
    }

    async clickAllTabs(): Promise<void> {
        await this.uIAssignmentTab.click();
        await this.uIInvestigatorsTab.click();
        await this.uIReviewTab.click();
        await this.uIEffortsTab.click();
        await this.uITasksTab.click();
        await this.uIReportingTab.click();
        await this.uIMOTab.click();
        await this.uIAttachmentTab.click();
        await this.uIHistoryTab.click();
    }

    async enterAtCaseNo(i?: number): Promise<void> {
        const caseNo = i !== undefined ? BaseData.getCMModuleValue('CaseNo' + i) : BaseData.getCMModuleValue('CaseNo');
        await this.uICaseYearEdit.fill(caseNo.substring(0, 2));
        await this.uICaseNumberEdit.fill(caseNo.substring(3));
        await this.uICaseNumberEdit.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async verifyAtLocation(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const value = await this.uILocationEdit.inputValue();
        expect(BaseData.getCMModuleValue('Location')).toContain(value);
    }

    async verifyAtCity(): Promise<void> {
        const value = await this.uICSZCityEdit.inputValue();
        expect(value).toBe(BaseData.getCMModuleValue('City'));
    }

    async verifyAtState(): Promise<void> {
        const value = await this.uICSZStateComboBox.inputValue();
        expect(value).toBe(BaseData.getCMModuleValue('State'));
    }

    async verifyAtZipCode(): Promise<void> {
        const value = await this.uICSZZipEdit.inputValue();
        expect(value).toBe(BaseData.getCMModuleValue('ZipCode'));
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async verifyAtCaseNo(): Promise<void> {
        const caseNo = BaseData.getCMModuleValue('CaseNo');
        expect(await this.uICaseYearEdit.inputValue()).toBe(caseNo.substring(0, 2));
        expect(await this.uICaseNumberEdit.inputValue()).toBe(caseNo.substring(3));
    }

    async clickCalenderIcon(): Promise<void> {
        await this.uICalenderIcon.click();
    }

    async clickCustomSettingIconAndManageCustomFields(): Promise<void> {
        await this.uICustomSettingIcon.click();
        await this.uIManageCustomField.click();
    }

    async switchToInvestigatorsTab(): Promise<void> {
        await this.uIInvestigatorsTab.click();
    }

    async verifyInvestigatorsTabEnabled(): Promise<void> {
        await expect(this.uIInvestigatorsTab).toBeVisible();
        await expect(this.uIInvestigatorsTab).toBeEnabled();
    }

    async verifyAtInvestNo(): Promise<void> {
        const investNo = BaseData.getCMModuleValue('InvestNo');
        expect(await this.uIInvenstYearEdit.inputValue()).toBe(investNo.substring(0, 2));
        expect(await this.uIInvestNumberEdit.inputValue()).toBe(investNo.substring(3));
    }

    async verifyAtjuris(): Promise<void> {
        const text = await this.uIJurisComboBox.innerText();
        expect(text).toContain(BaseData.getCMModuleValue('Juris'));
    }

    async switchToReportingTab(): Promise<void> {
        await this.uIReportingTab.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyStatusAsClosed(): Promise<void> {
        const text = await this.uIStatusTextView.innerText();
        expect(text.trim()).toBe('Closed');
    }

    async switchToAttachmentsTab(): Promise<void> {
        await this.uIAttachmentTab.click();
        await this.page.waitForTimeout(1000);
    }

    async clickCaseInfoButton(): Promise<void> {
        await this.uICaseInfoIcon.click();
    }

    async readInvestNo(): Promise<string> {
        const year = await this.uIInvenstYearEdit.inputValue();
        const num = await this.uIInvestNumberEdit.inputValue();
        const invest = year + '-' + num;
        return invest;
    }

    async verifyDateAssignedCannotBeFutureDate(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8033) Date Assigned cannot be a future date');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyAtActiveCaseNo(caseNo: string): Promise<void> {
        const year = await this.uICaseYearEdit.inputValue();
        const num = await this.uICaseNumberEdit.inputValue();
        expect(caseNo.substring(0, 2)).toContain(year);
        expect(caseNo.substring(3)).toContain(num);
    }

    async verifyAtStatus(): Promise<void> {
        const text = await this.uIStatusTextView.innerText();
        expect(text.trim()).toBe(BaseData.getCMModuleValue('Status'));
    }

    async verifyAtStatus1(): Promise<void> {
        const text = await this.uIStatusTextView.innerText();
        expect(text.trim()).toBe(BaseData.getCMModuleValue('Status1'));
    }

    async verifyTabTextColor(): Promise<void> {
        const cssValue = await this.uIReviewText.evaluate(el => getComputedStyle(el).color);
        expect(cssValue).toBe(BaseData.getCMModuleValue('ReviewColor'));
    }

    async verifyInvestNo(investNo: string): Promise<void> {
        const year = await this.uIInvenstYearEdit.inputValue();
        const num = await this.uIInvestNumberEdit.inputValue();
        expect(investNo).toContain(year);
        expect(investNo).toContain(num);
    }

    async verifyAssignedDate(): Promise<void> {
        const text = await this.uIAssignedDateText.innerText();
        expect(text).toContain(DateHelpers.getCurrentDate('MM/dd/yy'));
    }

    async verifyAdditionSuccessfulStatusMessage(): Promise<void> {
        const msg = await this.uILeftSideStatusBar.innerText();
        expect(msg.trim()).toBe('1002 - Addition Successful');
    }

    async verifyUpdateSuccessfulStatusMessage(): Promise<void> {
        const msg = await this.uILeftSideStatusBar.innerText();
        expect(msg.trim()).toBe('1003 - Update Successful');
    }

    async verifysaveAndOtherButtonGetDisabled(): Promise<void> {
        await expect(this.uISaveButton).toBeDisabled();
        await expect(this.uISaveAndCloseButton).toBeDisabled();
        await expect(this.uIResetButton).toBeDisabled();
    }

    async verifyAtDispositionStatus(index: number): Promise<void> {
        const text = await this.uIDispositionStatusTextView.innerText();
        expect(text.trim()).toBe(BaseData.getCMModuleValue('DispositionStatus' + index));
    }

    async verifyEffortsTabColorAsBlue(): Promise<void> {
        const color = await this.uIEffortsTab.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgb(0, 0, 255)');
    }

    async verifyEffortsTabColorAsBlack(): Promise<void> {
        const color = await this.uIEffortsTab.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgb(0, 0, 0)');
    }

    async verifyTabColorIsBlack(tabName: string): Promise<void> {
        const tab = this.page.locator(`//span[contains(text(),'${tabName}')]`);
        const color = await tab.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgb(0, 0, 0)');
    }

    async verifyTabColorIsBlue(tabName: string): Promise<void> {
        const tab = this.page.locator(`//span[contains(text(),'${tabName}')]`);
        const color = await tab.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgb(0, 0, 255)');
    }

    async setInvestYearToJSONFile(testCaseId: string): Promise<void> {
        const val = (await this.uIInvenstYearEdit.inputValue()).substring(0, 2);
        BaseData.writeJson(testCaseId, 'investYear', val);
    }

    async setInvestNumberToJSONFile(testCaseId: string): Promise<void> {
        const val = (await this.uIInvestNumberEdit.inputValue()).substring(0, 6);
        BaseData.writeJson(testCaseId, 'investNo', val);
    }

    async verifyDispositionStatusClosedIsGreen(): Promise<void> {
        const color = await this.uIStatusTextView.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgb(0, 100, 0)');
    }

    async verifyReopenButtonIsDisplayed(): Promise<void> {
        await expect(this.uIReOpenButton).toBeVisible();
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async verifyAttachmentTabColorAsBlue(): Promise<void> {
        const color = await this.uIAttachmentTab.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgb(0, 0, 255)');
    }

    async verify6071CaseFolderAlredyExisPopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6071)');
        await expect(this.popup.modalBody).toContainText('A Case Folder already exists. Do you want to view it?');
        await this.popup.confirmYesButton.click();
    }

    async verifyCaseNoIsBlank(): Promise<void> {
        const year = await this.uICaseYearEdit.inputValue();
        const num = await this.uICaseNumberEdit.inputValue();
        expect(year.trim()).toBe('');
        expect(num.trim()).toBe('');
    }

    async verify8056AnotherDivisionCannotAssignAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('8056 - Another Division cannot assign a Supervisor before the Prime Investigation Division');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyReopenButtonIsNotDisplayed(): Promise<void> {
        await expect(this.uIReOpenButton).not.toBeVisible();
    }

    async clickPropertyTab(): Promise<void> {
        await this.uIPropertyTab.click();
        await this.page.waitForTimeout(3000);
    }

    async verifyInvestNoIsNull(): Promise<void> {
        await this.page.waitForTimeout(1000);
        expect((await this.uIInvenstYearEdit.inputValue()).trim()).toBe('');
        expect((await this.uIInvestNumberEdit.inputValue()).trim()).toBe('');
    }

    async verifyNotificationIconIsDisplayed(): Promise<void> {
        await expect(this.uINotificationIcon).toBeVisible();
    }

    async ClickNotificationIcon(): Promise<void> {
        await this.uINotificationIcon.click();
    }

    async verifyNotificationIconIsNotDisplayed(): Promise<void> {
        await expect(this.uINotificationIcon).not.toBeVisible();
    }

    async verifyLeadEntryWindowNotExist(): Promise<void> {
        const pages = this.page.context().pages();
        const exists = pages.some(p => p.url().includes('frmAddressLead') || p.url().includes('Lead Entry'));
        expect(exists).toBe(false);
    }

    async verifyDispositionStatusAsClosedNoFurtherLeads(): Promise<void> {
        const text = await this.uIDispositionStatusTextView.innerText();
        expect(text.trim()).toBe('Closed - No Further Leads (CM)');
    }

    async verifyAssignmentAndQAFormTabOnlyAvailable(): Promise<void> {
        const tabs = this.page.locator("//span[contains(@class,'igtab_BlueThemeTHText')]");
        const count = await tabs.count();
        let qa = false;
        let assignment = false;
        for (let i = 0; i < count; i++) {
            const tab = tabs.nth(i);
            if (!await tab.isVisible()) continue;
            const name = (await tab.innerText()).trim();
            if (name.toLowerCase() === 'qa forms' || name.toLowerCase() === 'assignment') {
                await expect(tab).toBeEnabled();
                if (name.toLowerCase() === 'qa forms') qa = true;
                else assignment = true;
            } else {
                expect(false).toBe(true);
            }
        }
        expect(qa && assignment).toBe(true);
    }

    async verifyAllRequiredTabs(): Promise<void> {
        const expectedTabs = [
            'Assignment', 'Investigator(s)', 'Review', 'Efforts', 'Task',
            'Reporting', 'UCR', 'MO', 'Attachment', 'Names', 'Vehicle',
            'CAD Data', 'Property', 'NIBRS', 'History', 'Leads',
            'Victim', 'QA Forms'
        ];
        const tabs = this.page.locator("//span[contains(@class,'igtab_BlueThemeTHText')]");
        const count = await tabs.count();
        const actualTabs: string[] = [];
        for (let i = 0; i < count; i++) {
            const tab = tabs.nth(i);
            if (!await tab.isVisible()) continue;
            const name = (await tab.innerText()).trim();
            actualTabs.push(name);
            await expect(tab).toBeEnabled();
        }
        for (const exp of expectedTabs) {
            expect(actualTabs).toContain(exp);
        }
    }
}

export class CaseFolderAssignmentTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIDivisionComboBox: Locator;
    readonly uISectionComboBox: Locator;
    readonly uISupervisorCodeEdit: Locator;
    readonly uISupervisorDesEdit: Locator;
    readonly uISupervisorSearchImageButton: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIPrimeInvestigatorCodeEdit: Locator;
    readonly uIPrimeInvestigatorDesEdit: Locator;
    readonly uIPrimeInvestigatorSearchButton: Locator;
    readonly uISolvabilityFactorEdit: Locator;
    readonly uINextReviewDateEdit: Locator;
    readonly uINextReportDateEdit: Locator;
    readonly uICommentsEdit: Locator;
    readonly uICommentsRichTextEdit: Locator;
    readonly uITemplateComboBox: Locator;
    readonly uILoadButton: Locator;
    readonly uICaseStatusTextView: Locator;
    readonly uISupervisorLabel: Locator;
    readonly uIPrimeInvestigatorLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIDivisionComboBox = page.locator('#tabCaseMgmt_tmpl0_usrCMAssign1_cddDivision_DropDown');
        this.uISectionComboBox = page.locator('#tabCaseMgmt_tmpl0_usrCMAssign1_cddSection_DropDown');
        this.uISupervisorCodeEdit = page.locator('#tabCaseMgmt_tmpl0_usrCMAssign1_lupSupervisor_CodeValue');
        this.uISupervisorDesEdit = page.locator('#tabCaseMgmt_tmpl0_usrCMAssign1_lupSupervisor_CodeDescription');
        this.uISupervisorSearchImageButton = page.locator('#tabCaseMgmt_tmpl0_usrCMAssign1_lupSupervisor_imgBtn');
        this.uIDateEdit = page.locator('#tabCaseMgmt_tmpl0_usrCMAssign1_dttmAssigned_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id = 'tabCaseMgmt_tmpl0_usrCMAssign1_dttmAssigned_Time']//input");
        this.uIPrimeInvestigatorCodeEdit = page.locator('#tabCaseMgmt_tmpl0_usrCMAssign1_lupPrime_CodeValue');
        this.uIPrimeInvestigatorDesEdit = page.locator('#tabCaseMgmt_tmpl0_usrCMAssign1_lupPrime_CodeDescription');
        this.uIPrimeInvestigatorSearchButton = page.locator('#tabCaseMgmt_tmpl0_usrCMAssign1_lupPrime_imgBtn');
        this.uISolvabilityFactorEdit = page.locator('#tabCaseMgmt_tmpl0_usrCMAssign1_txtSF');
        this.uINextReviewDateEdit = page.locator('#tabCaseMgmt_tmpl0_usrCMAssign1_dtcReview_KPIDttmCtrl');
        this.uINextReportDateEdit = page.locator('#tabCaseMgmt_tmpl0_usrCMAssign1_dtcReport_KPIDttmCtrl');
        this.uICommentsEdit = page.locator('#tabCaseMgmt_tmpl0_usrCMAssign1_txtComments');
        this.uICommentsRichTextEdit = page.locator('#tabCaseMgmt_tmpl0_usrCMAssign1_rteKPITxt_contentIframe');
        this.uITemplateComboBox = page.locator('#tabCaseMgmt_tmpl0_usrCMAssign1_cddTemplate');
        this.uILoadButton = page.locator('#tabCaseMgmt_tmpl0_usrCMAssign1_btnLoad');
        this.uICaseStatusTextView = page.locator('#tabCaseMgmt_tmpl0_usrCMAssign1_txtStatus');
        this.uISupervisorLabel = page.locator('#tabCaseMgmt_tmpl0_usrCMAssign1_lblSupervisor');
        this.uIPrimeInvestigatorLabel = page.locator('#tabCaseMgmt_tmpl0_usrCMAssign1_lblPrimeInvs');
    }

    async selectSectionAsPatrol(): Promise<void> {
        await this.uISectionComboBox.fill('Patrol');
    }

    async tabOutSupervisor(): Promise<void> {
        await this.uISupervisorCodeEdit.press('Tab');
    }

    async verifyLoggedSupervisor(): Promise<void> {
        const val = await this.uISupervisorCodeEdit.inputValue();
        expect(val).toBe(BaseData.getCMModuleValue('UserName'));
    }

    async verify8022DivisionIsMandatoryAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8022) Division is mandatory');
        await this.popup.acknowledgeOkButton.click();
    }

    async verify8004SupervisorIsNotAssignedAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8004) Supervisor is not assigned');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyAtSupervisorPFCode(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const val = await this.uISupervisorCodeEdit.inputValue();
        expect(val).toBe(BaseData.getCMModuleValue('PFCode'));
    }

    async tabOutDateAssignedTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async enterAtPrimeInvestigator(): Promise<void> {
        await this.uIPrimeInvestigatorCodeEdit.clear();
        await this.uIPrimeInvestigatorCodeEdit.fill(BaseData.getCMModuleValue('PrimeInvestigator'));
        await this.uIPrimeInvestigatorCodeEdit.press('Tab');
    }

    async clearAndTabPrimeInvestigator(): Promise<void> {
        await this.uIPrimeInvestigatorCodeEdit.clear();
        await this.uIPrimeInvestigatorCodeEdit.press('Tab');
    }

    async enterPrimeInvestigator(): Promise<void> {
        await this.uIPrimeInvestigatorSearchButton.click();
        await this.page.waitForTimeout(1000);
    }

    async enterPrimeInvestigatorAtPFCode(): Promise<void> {
        await this.uIPrimeInvestigatorCodeEdit.fill(BaseData.getCMModuleValue('PFCode'));
    }

    async tabOutNextReviewDate(): Promise<void> {
        await this.uINextReviewDateEdit.press('Tab');
    }

    async verifyNextReviewDateAs7DayFutureFromCurrentDate(): Promise<void> {
        const nextReview = await this.uINextReviewDateEdit.inputValue();
        expect(nextReview).toBe(DateHelpers.getFutureDate(7));
    }

    async verifyNextReviewDateAs5DayFutureFromCurrentDate(): Promise<void> {
        const nextReview = await this.uINextReviewDateEdit.inputValue();
        expect(nextReview).toBe(DateHelpers.getFutureDate(5));
    }

    async verifyNextReviewDateAs14DayFutureFromCurrentDate(): Promise<void> {
        const nextReview = await this.uINextReviewDateEdit.inputValue();
        expect(nextReview).toBe(DateHelpers.getFutureDate(14));
    }

    async tabOutNextReportDate(): Promise<void> {
        await this.uINextReportDateEdit.press('Tab');
    }

    async verifyNextReportDateAs7DayFutureFromCurrentDate(): Promise<void> {
        const nextReport = await this.uINextReportDateEdit.inputValue();
        expect(nextReport).toBe(DateHelpers.getFutureDate(7));
    }

    async verifyNextReportDateAs10DayFutureFromCurrentDate(): Promise<void> {
        const nextReport = await this.uINextReportDateEdit.inputValue();
        expect(nextReport).toBe(DateHelpers.getFutureDate(10));
    }

    async verifyNextReportDateAs14DayFutureFromCurrentDate(): Promise<void> {
        const nextReport = await this.uINextReportDateEdit.inputValue();
        expect(nextReport).toBe(DateHelpers.getFutureDate(14));
    }

    async enterComments(): Promise<void> {
        await this.uICommentsRichTextEdit.fill(RandomHelpers.randomString(9));
    }

    async selectTemplate(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITemplateComboBox, 1);
    }

    async clickLoadButton(): Promise<void> {
        await this.uILoadButton.click();
    }

    async verifyAtDivision(i?: number): Promise<void> {
        const expected = i !== undefined ? BaseData.getCMModuleValue('Division' + i) : BaseData.getCMModuleValue('Division');
        const selected = await this.uIDivisionComboBox.inputValue();
        expect(selected).toBe(expected);
    }

    async verifyAtSection(i?: number): Promise<void> {
        const expected = i !== undefined ? BaseData.getCMModuleValue('Section' + i) : BaseData.getCMModuleValue('Section');
        const selected = await this.uISectionComboBox.inputValue();
        expect(selected).toBe(expected);
    }

    async verifyNextReviewDateAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8011) Next Review Date Is Mandatory');
        await this.popup.acknowledgeOkButton.click();
    }

    async enterAtSupervisor(i?: number): Promise<void> {
        const sup = i !== undefined ? BaseData.getCMModuleValue('Supervisor' + i) : BaseData.getCMModuleValue('Supervisor');
        await this.uISupervisorCodeEdit.click();
        await this.uISupervisorCodeEdit.clear();
        await this.uISupervisorCodeEdit.fill(sup);
        await this.uISupervisorCodeEdit.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async enterSolvabilityFactor(): Promise<void> {
        await this.uISolvabilityFactorEdit.fill(RandomHelpers.randomNumberString(3));
    }

    async selectAtDivision(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIDivisionComboBox, BaseData.getCMModuleValue('Division'));
    }

    async selectAtSection(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uISectionComboBox, BaseData.getCMModuleValue('Section'));
    }

    async selectDivision(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIDivisionComboBox, 1);
    }

    async selectSection(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uISectionComboBox, 1);
    }

    async selectAtDivision1(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIDivisionComboBox, BaseData.getCMModuleValue('Division1'));
    }

    async selectAtSection1(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uISectionComboBox, BaseData.getCMModuleValue('Section1'));
    }

    async enterAtSupervisor1(): Promise<void> {
        await this.uISupervisorCodeEdit.fill(BaseData.getCMModuleValue('Supervisor1'));
        await this.uISupervisorCodeEdit.press('Tab');
    }

    async enterAtPrimeInvestigator1(): Promise<void> {
        await this.uIPrimeInvestigatorCodeEdit.fill(BaseData.getCMModuleValue('PrimeInvestigator1'));
        await this.uIPrimeInvestigatorCodeEdit.press('Tab');
    }

    async tabOutPrimeInvestigator(): Promise<void> {
        await this.uIPrimeInvestigatorCodeEdit.press('Tab');
    }

    async clickPrimeInvestigatorSearchButton(): Promise<void> {
        await this.uIPrimeInvestigatorSearchButton.click();
    }

    async clickSupervisorSearchButton(): Promise<void> {
        await this.uISupervisorSearchImageButton.click();
    }

    async verifyAtPrimeInvestigatorName(): Promise<void> {
        const prime = await this.uIPrimeInvestigatorDesEdit.inputValue();
        expect(prime).toBe(BaseData.getCMModuleValue('PrimeInvestigatorName'));
    }

    async verifyAtSupervisorName(): Promise<void> {
        const sup = await this.uISupervisorDesEdit.inputValue();
        expect(sup).toBe(BaseData.getCMModuleValue('SupervisorName'));
    }

    async selectTemplateAsAutomation(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITemplateComboBox, 1);
    }

    async verify8023SectionIsMandatoryAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8023) Section is mandatory');
        await this.popup.acknowledgeOkButton.click();
    }

    async enterDateAssignedAsFutureDate(noOfDays: number): Promise<void> {
        await this.uIDateEdit.fill(DateHelpers.getFutureDate(noOfDays));
        await this.uITimeEdit.press('Tab');
    }

    async verifyNextReportDateAsPerSystemParameter902(noOfDaysInSysPar: number, noOfDays: number): Promise<void> {
        const actualDate = await this.uINextReportDateEdit.inputValue();
        expect(actualDate).toBe(DateHelpers.getFutureDate(noOfDays + noOfDaysInSysPar));
    }

    async clearDateAssigned(): Promise<void> {
        await this.uIDateEdit.click();
        await this.uIDateEdit.clear();
    }

    async verifyAtCaseStatus(i?: number): Promise<void> {
        const expected = i !== undefined ? BaseData.getCMModuleValue('CMCaseStatus' + i) : BaseData.getCMModuleValue('CaseStatus');
        const val = await this.uICaseStatusTextView.inputValue();
        expect(val).toBe(expected);
    }

    async verifyAtDivisionIsDisable(): Promise<void> {
        await expect(this.uIDivisionComboBox).toBeDisabled();
    }

    async verifyAtDivisionValuesIsListed(): Promise<void> {
        const options = await this.uIDivisionComboBox.locator('option').allInnerTexts();
        expect(options).toContain(BaseData.getCMModuleValue('Division'));
    }

    async verifyAtSectionIsDisable(): Promise<void> {
        await expect(this.uISectionComboBox).toBeDisabled();
    }

    async verifyAtSectionValuesIsListed(): Promise<void> {
        const options = await this.uISectionComboBox.locator('option').allInnerTexts();
        expect(options).toContain(BaseData.getCMModuleValue('Section'));
    }

    async verifyAtDivisionIsEnabled(): Promise<void> {
        await expect(this.uIDivisionComboBox).toBeEnabled();
    }

    async verifyAtSectionIsEnabled(): Promise<void> {
        await expect(this.uISectionComboBox).toBeEnabled();
    }

    async verifySupervisorFieldIsBlank(): Promise<void> {
        const val = await this.uISupervisorCodeEdit.inputValue();
        expect(val.trim()).toBe('');
    }

    async verifyDateAssignedFieldIsBlank(): Promise<void> {
        expect((await this.uIDateEdit.inputValue()).trim()).toBe('');
        expect((await this.uITimeEdit.inputValue()).trim()).toBe('');
    }

    async verifySectionDropdownIsBlank(): Promise<void> {
        const selected = await this.uISectionComboBox.inputValue();
        expect(selected.trim()).toBe('--Select--');
    }

    async verifyPrimeInvestigatorFieldIsBlank(): Promise<void> {
        const val = await this.uIPrimeInvestigatorCodeEdit.inputValue();
        expect(val.trim()).toBe('');
    }

    async verifySupervisorIsBlank(): Promise<void> {
        expect((await this.uISupervisorCodeEdit.inputValue()).trim()).toBe('');
    }

    async verifyDivisionAsAdministration(): Promise<void> {
        const selected = await this.uIDivisionComboBox.inputValue();
        expect(selected).toBe('Administration');
    }

    async verifySectionAsAdministration(): Promise<void> {
        const selected = await this.uISectionComboBox.inputValue();
        expect(selected).toBe('Administration');
    }

    async verifySupervisorFieldAsMandatory(): Promise<void> {
        const color = await this.uISupervisorLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(153, 0, 0, 1)');
    }

    async verifyPrimeInvestigatorFieldAsNonMandatory(): Promise<void> {
        const color = await this.uIPrimeInvestigatorLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(0, 0, 0, 1)');
    }
}

export class CaseFolderTasksTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIAddNewTaskButton: Locator;
    readonly uIAssignedSupervisorCodeEdit: Locator;
    readonly uIAssignedSupervisorDescriptionEdit: Locator;
    readonly uIAssignedToPFEdit: Locator;
    readonly uIAssignedToPFDescriptionEdit: Locator;
    readonly uITaskCodeComboBox: Locator;
    readonly uITaskDetailsEdit: Locator;
    readonly uIAssignedDateEdit: Locator;
    readonly uIAssignedTimeEdit: Locator;
    readonly uIDueByDateEdit: Locator;
    readonly uIDueByTimeEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uICancelButton: Locator;
    readonly uITasksTabTable: Locator;
    readonly uICompletedDateEdit: Locator;
    readonly uICompletedFinishDateEdit: Locator;
    readonly uIFinishedTimeEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIAddNewTaskButton = page.locator('#CmdAddNew');
        this.uIAssignedSupervisorCodeEdit = page.locator('#lupAssignsuper_CodeValue');
        this.uIAssignedSupervisorDescriptionEdit = page.locator('#lupAssignsuper_CodeDescription');
        this.uIAssignedToPFEdit = page.locator('#lupAssignTo_CodeValue');
        this.uIAssignedToPFDescriptionEdit = page.locator('#lupAssignTo_CodeDescription');
        this.uITaskCodeComboBox = page.locator('#cddTaskcode_DropDown');
        this.uITaskDetailsEdit = page.locator('#txttaskDetails');
        this.uIAssignedDateEdit = page.locator('#AssignedDttm_Date_KPIDttmCtrl');
        this.uIAssignedTimeEdit = page.locator("//table[@id = 'AssignedDttm_Time']//input");
        this.uIDueByDateEdit = page.locator('#DueDttm_Date_KPIDttmCtrl');
        this.uIDueByTimeEdit = page.locator("//table[@id = 'DueDttm_Time']//input");
        this.uIAddButton = page.locator('#cmdAdd');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uICancelButton = page.locator('#cmdClear');
        this.uITasksTabTable = page.locator('#grdCFSTask');
        this.uICompletedDateEdit = page.locator('#Completeddttm_Date_KPIDttmCtrl');
        this.uICompletedFinishDateEdit = page.locator('#dttmTo_KPIDttmCtrl');
        this.uIFinishedTimeEdit = page.locator("//table[@id='dttmToTime_Time']//input");
    }

    async clickAddNewTaskButton(): Promise<void> {
        await this.uIAddNewTaskButton.click();
    }

    async taboutAssignedSupervisor(): Promise<void> {
        await this.uIAssignedSupervisorCodeEdit.click();
        await this.uIAssignedSupervisorCodeEdit.press('Tab');
    }

    async enterAtAssignedSupervisor(): Promise<void> {
        await this.uIAssignedSupervisorCodeEdit.fill(BaseData.getCMModuleValue('AssignedSupervisor'));
        await this.uIAssignedSupervisorCodeEdit.press('Tab');
    }

    async enterAtAssignPFNo(): Promise<void> {
        await this.uIAssignedToPFEdit.fill(BaseData.getCMModuleValue('AssignToPFNo'));
        await this.uIAssignedToPFEdit.press('Tab');
    }

    async selectAtTaskCode(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITaskCodeComboBox, BaseData.getCMModuleValue('TaskCode'));
    }

    async selectAtTaskCodeInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uITasksTabTable, BaseData.getCMModuleValue('TaskCode'));
    }

    async enterTaskAsEvidenceDocument(): Promise<void> {
        await this.uITaskDetailsEdit.fill('Evidence Document');
    }

    async enterTaskDetails(): Promise<void> {
        await this.uITaskDetailsEdit.fill(RandomHelpers.randomString(15));
    }

    async verifyAtTaskCodeRowAppearRedColor(rowIndex: number): Promise<void> {
        const row = this.uITasksTabTable.locator('tbody tr').nth(rowIndex);
        const classAttr = await row.getAttribute('class') || '';
        expect(classAttr).toContain('gridrowclr_Red');
    }

    async verifyLoggedPFCode(): Promise<void> {
        const val = await this.uIAssignedSupervisorCodeEdit.inputValue();
        expect(val).toBe(BaseData.getCMModuleValue('PFCode'));
    }

    async tabOutAssignedDateTime(): Promise<void> {
        await this.uIAssignedDateEdit.press('Tab');
        await this.uIAssignedTimeEdit.press('Tab');
    }

    async tabOutDueByDateTime(): Promise<void> {
        await this.uIDueByDateEdit.press('Tab');
        await this.uIDueByTimeEdit.press('Tab');
    }

    async enterCompletedDateAsFutureDate(): Promise<void> {
        await this.uICompletedFinishDateEdit.fill(DateHelpers.getFutureDate(2));
    }

    async enterCompletedDateAsCurrentDate(): Promise<void> {
        await this.uICompletedDateEdit.fill(DateHelpers.getCurrentDate());
    }

    async clickAddbutton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async clickSavebutton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async clickSaveAndClosebutton(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        await this.popup.confirmYesButton.click();
    }

    async verifyAtTaskCodeDescription(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uITasksTabTable, 'Description', rowIndex);
        expect(text).toBe(BaseData.getCMModuleValue('TaskCode'));
    }

    async verifyInvestigatorAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8053) Investigator not assigned to this case. Do you want to continue?');
        await this.popup.confirmYesButton.click();
    }

    async verify1037FutureDateAndTimeNotAllowedAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1037) Future Date and Time not allowed');
        await this.popup.acknowledgeOkButton.click();
    }

    async selectTaskCode(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITaskCodeComboBox, 1);
    }

    async enterTaskDetailsAS3000words(): Promise<void> {
        await this.uITaskDetailsEdit.fill(RandomHelpers.randomString(1500) + RandomHelpers.randomString(1500));
    }

    async enterAssignedDateAspreviousDateAndTabTime(): Promise<void> {
        await this.uIAssignedDateEdit.fill(DateHelpers.getPreviousDate(1, 'MM/dd/yyyy'));
        await this.uIAssignedTimeEdit.press('Tab');
    }

    async enterDueDateAspreviousDateAndTabTime(): Promise<void> {
        await this.uIDueByDateEdit.fill(DateHelpers.getPreviousDate(1, 'MM/dd/yyyy'));
        await this.uIDueByTimeEdit.press('Tab');
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async verifyDateAsPrevioudDateInFirstRow(rowIndex: number): Promise<void> {
        const dueDate = await this.grid.getGridCellInnerText(this.uITasksTabTable, 'Due Date', rowIndex);
        expect(dueDate).toContain(DateHelpers.getPreviousDate(1, 'MM/dd/yyyy'));
    }

    async verifyDateAsTodayDate(rowIndex: number): Promise<void> {
        const dueDate = await this.grid.getGridCellInnerText(this.uITasksTabTable, 'Due Date', rowIndex);
        expect(dueDate).toContain(DateHelpers.getCurrentDate());
    }

    async verifyDueByDateNotPriorAcknowledgeMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('Due By Date should not prior to Assigned Date');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyFinishedDateNotPriorAcknowledgeMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('Date/Time Finished should not prior to Assigned Date');
        await this.popup.acknowledgeOkButton.click();
    }

    async enterAtDueByDateAndTime(): Promise<void> {
        await this.uIDueByDateEdit.fill(BaseData.getCMModuleValue('DueByDate'));
        await this.uIDueByDateEdit.press('Tab');
        await this.uIDueByTimeEdit.press('Tab');
    }

    async enterDueByDateAndTimeAsCurrentDate(): Promise<void> {
        await this.uIDueByDateEdit.click();
        await this.uIDueByDateEdit.clear();
        await this.uIDueByDateEdit.press('Tab');
        await this.uIDueByTimeEdit.press('Tab');
    }

    async enterAtFinishedDateAndTime(): Promise<void> {
        await this.uICompletedFinishDateEdit.fill(BaseData.getCMModuleValue('FinishedDate'));
        await this.uICompletedFinishDateEdit.press('Tab');
        await this.uIFinishedTimeEdit.press('Tab');
    }

    async enterFinishedDateAndTimeAsCurrentDate(): Promise<void> {
        await this.uICompletedFinishDateEdit.click();
        await this.uICompletedFinishDateEdit.clear();
        await this.uICompletedFinishDateEdit.fill(DateHelpers.getCurrentDate());
        await this.uICompletedFinishDateEdit.press('Tab');
        await this.uIFinishedTimeEdit.press('Tab');
    }

    async enterAtAssignedTime(): Promise<void> {
        await this.uIAssignedTimeEdit.click();
        await this.uIAssignedTimeEdit.clear();
        await this.uIAssignedTimeEdit.fill(BaseData.getCMModuleValue('AssignedTime'));
    }

    async enterAtDueByDateTime(): Promise<void> {
        await this.uIDueByTimeEdit.click();
        await this.uIDueByTimeEdit.clear();
        await this.uIDueByTimeEdit.fill(BaseData.getCMModuleValue('DueByDateTime'));
    }

    async enterFinishedDateandTimeAsPrevious(): Promise<void> {
        await this.uICompletedFinishDateEdit.fill(DateHelpers.getPreviousDateByMonth(1, 'MM/dd/yyyy'));
        await this.uICompletedFinishDateEdit.press('Tab');
        await this.uIFinishedTimeEdit.click();
        await this.uIFinishedTimeEdit.press('Tab');
    }
}

export class TaskUpdatePage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIAddNewTaskButton: Locator;
    readonly uIAssignedSupervisorCodeEdit: Locator;
    readonly uIAssignedSupervisorDescriptionEdit: Locator;
    readonly uIAssignedToPFEdit: Locator;
    readonly uIAssignedToPFDescriptionEdit: Locator;
    readonly uITaskCodeComboBox: Locator;
    readonly uITaskDetailsEdit: Locator;
    readonly uIAssignedDateEdit: Locator;
    readonly uIAssignedTimeEdit: Locator;
    readonly uIDueByDateEdit: Locator;
    readonly uIDueByTimeEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uICancelButton: Locator;
    readonly uITasksTabTable: Locator;
    readonly uICompletedDateEdit: Locator;
    readonly uICompletedFinishDateEdit: Locator;
    readonly uIStartedDateEdit: Locator;
    readonly uIStartedTimeEdit: Locator;
    readonly uIFinishedTimeEdit: Locator;
    readonly uICategoryComboBox: Locator;
    readonly uIActivityCodeComboBox: Locator;
    readonly uITemplateComboBox: Locator;
    readonly uILoadButton: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uICallTaskCodeComboBox: Locator;
    readonly uICaseTaskCodeComboBox: Locator;
    readonly uIHoursEdit: Locator;
    readonly uIMinutesEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIAddNewTaskButton = page.locator('#CmdAddNew');
        this.uIAssignedSupervisorCodeEdit = page.locator('#lupAssignsuper_CodeValue');
        this.uIAssignedSupervisorDescriptionEdit = page.locator('#lupAssignsuper_CodeDescription');
        this.uIAssignedToPFEdit = page.locator('#lupAssignTo_CodeValue');
        this.uIAssignedToPFDescriptionEdit = page.locator('#lupAssignTo_CodeDescription');
        this.uITaskCodeComboBox = page.locator('#cddTaskcode_DropDown');
        this.uITaskDetailsEdit = page.locator('#txttaskDetails');
        this.uIAssignedDateEdit = page.locator('#AssignedDttm_Date_KPIDttmCtrl');
        this.uIAssignedTimeEdit = page.locator("//table[@id = 'AssignedDttm_Time']//input");
        this.uIDueByDateEdit = page.locator('#DueDttm_Date_KPIDttmCtrl');
        this.uIDueByTimeEdit = page.locator("//table[@id = 'DueDttm_Time']//input");
        this.uIAddButton = page.locator('#cmdAdd');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uICancelButton = page.locator('#cmdClear');
        this.uITasksTabTable = page.locator('#grdCFSTask');
        this.uICompletedDateEdit = page.locator('#Completeddttm_Date_KPIDttmCtrl');
        this.uICompletedFinishDateEdit = page.locator('#dttmTo_KPIDttmCtrl');
        this.uIStartedDateEdit = page.locator('#dttmFrom_KPIDttmCtrl');
        this.uIStartedTimeEdit = page.locator("(//input[@class='igte_BlueThemeEditInContainer'])[1]");
        this.uIFinishedTimeEdit = page.locator("//table[@id='dttmToTime_Time']//input");
        this.uICategoryComboBox = page.locator('#lupCategory_DropDown');
        this.uIActivityCodeComboBox = page.locator('#lupActivity');
        this.uITemplateComboBox = page.locator('#cddTemplate');
        this.uILoadButton = page.locator('#btnLoad');
        this.uILeftSideStatusBar = page.locator("//td[@class='statusBar']//b");
        this.uICallTaskCodeComboBox = page.locator('#cddCallTaskcode_DropDown');
        this.uICaseTaskCodeComboBox = page.locator('#cddCaseTaskcode_DropDown');
        this.uIHoursEdit = page.locator('#txtCTime');
        this.uIMinutesEdit = page.locator('#txtMinitus');
    }

    async taboutAssignedSupervisor(): Promise<void> {
        await this.uIAssignedSupervisorCodeEdit.click();
        await this.uIAssignedSupervisorCodeEdit.press('Tab');
    }

    async enterAtAssignedSupervisor(): Promise<void> {
        await this.uIAssignedSupervisorCodeEdit.fill(BaseData.getCMModuleValue('AssignedSupervisor'));
        await this.uIAssignedSupervisorCodeEdit.press('Tab');
    }

    async enterAtAssignPFNo(): Promise<void> {
        await this.uIAssignedToPFEdit.fill(BaseData.getCMModuleValue('AssignToPFNo'));
        await this.uIAssignedToPFEdit.press('Tab');
    }

    async selectAtTaskCode(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITaskCodeComboBox, BaseData.getCMModuleValue('TaskCode'));
    }

    async selectAtTaskCodeInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uITasksTabTable, BaseData.getCMModuleValue('TaskCode'));
    }

    async enterTaskAsEvidenceDocument(): Promise<void> {
        await this.uITaskDetailsEdit.fill('Evidence Document');
    }

    async enterTaskDetails(): Promise<void> {
        await this.uITaskDetailsEdit.fill(RandomHelpers.randomString(15));
    }

    async verifyAtTaskCodeRowAppearRedColor(rowIndex: number): Promise<void> {
        const row = this.uITasksTabTable.locator('tbody tr').nth(rowIndex);
        const classAttr = await row.getAttribute('class') || '';
        expect(classAttr).toContain('gridrowclr_Red');
    }

    async verifyLoggedPFCode(): Promise<void> {
        const val = await this.uIAssignedSupervisorCodeEdit.inputValue();
        expect(val).toBe(BaseData.getCMModuleValue('PFCode'));
    }

    async tabOutAssignedDateTime(): Promise<void> {
        await this.uIAssignedDateEdit.press('Tab');
        await this.uIAssignedTimeEdit.press('Tab');
    }

    async tabOutDueByDateTime(): Promise<void> {
        await this.uIDueByDateEdit.press('Tab');
        await this.uIDueByTimeEdit.press('Tab');
    }

    async enterFinishedDateAsFutureDate(): Promise<void> {
        await this.uICompletedFinishDateEdit.fill(DateHelpers.getFutureDate(2));
    }

    async enterCompletedDateAsCurrentDate(): Promise<void> {
        await this.uICompletedDateEdit.fill(DateHelpers.getCurrentDate());
    }

    async clickAddbutton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async clickSavebutton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async clickSaveAndClosebutton(): Promise<void> {
        await this.uISaveAndCloseButton.click();
    }

    async verifyAtTaskCodeDescription(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uITasksTabTable, 'Description', rowIndex);
        expect(text).toBe(BaseData.getCMModuleValue('TaskCode'));
    }

    async verifyInvestigatorAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8053) Investigator not assigned to this case. Do you want to continue?');
        await this.popup.confirmYesButton.click();
    }

    async verify1037FutureDateAndTimeNotAllowedAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1037) Future Date and Time not allowed');
        await this.popup.acknowledgeOkButton.click();
    }

    async selectTaskCode(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITaskCodeComboBox, 1);
    }

    async enterTaskDetailsAS3000words(): Promise<void> {
        await this.uITaskDetailsEdit.fill(RandomHelpers.randomString(1500) + RandomHelpers.randomString(1500));
    }

    async enterAssignedDateAspreviousDateAndTabTime(): Promise<void> {
        await this.uIAssignedDateEdit.fill(DateHelpers.getPreviousDate(1, 'MM/dd/yyyy'));
        await this.uIAssignedTimeEdit.press('Tab');
    }

    async enterDueDateAspreviousDateAndTabTime(): Promise<void> {
        await this.uIDueByDateEdit.fill(DateHelpers.getPreviousDate(1, 'MM/dd/yyyy'));
        await this.uIDueByTimeEdit.press('Tab');
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async SaveNClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        await this.popup.confirmYesButton.click();
    }

    async verifyDateAsPrevioudDateInFirstRow(rowIndex: number): Promise<void> {
        const dueDate = await this.grid.getGridCellInnerText(this.uITasksTabTable, 'Due Date', rowIndex);
        expect(DateHelpers.getPreviousDate(1, 'MM/dd/yyyy')).toContain(dueDate);
    }

    async verifyDateAsTodayDate(rowIndex: number): Promise<void> {
        const dueDate = await this.grid.getGridCellInnerText(this.uITasksTabTable, 'Due Date', rowIndex);
        expect(DateHelpers.getCurrentDate()).toContain(dueDate);
    }

    async enterStartedDateAsCurrentDate(): Promise<void> {
        await this.uIStartedDateEdit.fill(DateHelpers.getCurrentDate());
    }

    async enterStartedTimeAsCurrentTime(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIStartedTimeEdit.click();
        await this.uIStartedTimeEdit.fill(DateHelpers.getCurrentTime());
    }

    async enterFinishedTimeAsCurrentTime(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIFinishedTimeEdit.click();
        await this.uIFinishedTimeEdit.fill(DateHelpers.getCurrentTime());
        await this.uIFinishedTimeEdit.press('Tab');
    }

    async selectCategoryAsAdministrative(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uICategoryComboBox, 'Administrative');
        await this.uICategoryComboBox.press('Tab');
    }

    async selectActivityCodeAsAdminstrative(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.elementHelpers.selectDropDownOption(this.uIActivityCodeComboBox, 'Adminstrative');
    }

    async selectTemplateAsAutomation(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITemplateComboBox, 'Automation CM');
    }

    async clickLoadButton(): Promise<void> {
        await this.uILoadButton.click();
    }

    async verifyUpdateSuccessfulStatusMessage(): Promise<void> {
        const msg = await this.uILeftSideStatusBar.innerText();
        expect(msg.trim()).toBe('1003 - Update Successful');
    }

    async enterDueDateAsFutureDateAndTabTime(): Promise<void> {
        await this.uIDueByDateEdit.fill(DateHelpers.getFutureDate(1, 'MM/dd/yyyy'));
        await this.uIDueByTimeEdit.press('Tab');
    }

    async enterDueDateAsCurrenteDateAndTabTime(): Promise<void> {
        await this.uIDueByDateEdit.click();
        await this.uIDueByDateEdit.clear();
        await this.uIDueByTimeEdit.press('Tab');
    }

    async selectAtCallTaskCode(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uICallTaskCodeComboBox, BaseData.getCMModuleValue('TaskCode'));
    }

    async selectAtCaseTaskCode(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uICaseTaskCodeComboBox, BaseData.getCMModuleValue('TaskCode'));
    }

    async enterFinishedDateAsCurrentDate(): Promise<void> {
        await this.uICompletedFinishDateEdit.fill(DateHelpers.getCurrentDate());
    }

    async enterAtHours(): Promise<void> {
        await this.uIHoursEdit.clear();
        await this.uIHoursEdit.fill(BaseData.getCMModuleValue('Hours'));
        await this.uIHoursEdit.press('Tab');
    }

    async enterAtMinutes(): Promise<void> {
        await this.uIMinutesEdit.clear();
        await this.uIMinutesEdit.fill(BaseData.getCMModuleValue('Minutes'));
        await this.uIMinutesEdit.press('Tab');
    }
}

export class CaseFolderHistoryTabPage {
    readonly page: Page;
    readonly uIHistoryTabTable: Locator;
    readonly uIInvestigatorRadioButton: Locator;
    readonly uIEffortsRadioButton: Locator;
    readonly uICaseStudiesRadioButton: Locator;
    readonly uITasksRadioButton: Locator;
    readonly uIShowAllRadioButton: Locator;
    readonly uIHistory1DateTextView: Locator;
    readonly uIHistory2DateTextView: Locator;
    readonly uIHistory3DateTextView: Locator;
    readonly uIPFEdit: Locator;
    readonly uIPFDescriptionEdit: Locator;
    readonly uILoadButton: Locator;
    readonly uIEnteredByPF1TextView: Locator;
    readonly uIEnteredByPF2TextView: Locator;
    readonly uIEffortsTable: Locator;
    readonly uITasksTable: Locator;
    readonly uIInvestigatorName2TextView: Locator;
    readonly uIInvestigatorName1TextView: Locator;
    readonly uIInvestigatorNameTextView: Locator;
    readonly uICaseStatusTextView: Locator;
    readonly uICaseStatusTextViewNew: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIHistoryTabTable = page.locator('#grdHistory1');
        this.uIInvestigatorRadioButton = page.locator('#rdoHistory_0');
        this.uIEffortsRadioButton = page.locator('#rdoHistory_1');
        this.uICaseStudiesRadioButton = page.locator('#rdoHistory_2');
        this.uITasksRadioButton = page.locator('#rdoHistory_3');
        this.uIShowAllRadioButton = page.locator('#rdoHistory_4');
        this.uIHistory1DateTextView = page.locator('#grdHistory1_ctl00_lblDttm');
        this.uIHistory2DateTextView = page.locator('#grdHistory1_ctl01_lblDttm');
        this.uIHistory3DateTextView = page.locator('#grdHistory1_ctl02_lblDttm');
        this.uIPFEdit = page.locator('#lupPF_CodeValue');
        this.uIPFDescriptionEdit = page.locator('#lupPF_CodeDescription');
        this.uILoadButton = page.locator('#btnFilter');
        this.uIEnteredByPF1TextView = page.locator('#grdHistory1_ctl00_lblEnteredBy');
        this.uIEnteredByPF2TextView = page.locator('#grdHistory1_ctl00_lblEnteredBy');
        this.uIEffortsTable = page.locator("//table[@id = 'grdHistory1']//td");
        this.uITasksTable = page.locator("//table[@id = 'grdHistory1']//td");
        this.uIInvestigatorName2TextView = page.locator('#grdHistory1_ctl00_lblC1');
        this.uIInvestigatorName1TextView = page.locator('#grdHistory1_ctl02_lblC1');
        this.uIInvestigatorNameTextView = page.locator('#grdHistory1_ctl03_lblC1');
        this.uICaseStatusTextView = page.locator('#grdHistory1_ctl00_lblC1');
        this.uICaseStatusTextViewNew = page.locator("//td[contains(text(),'Case Status Changed to :')]");
    }

    async clickTaskRadioButton(): Promise<void> {
        await this.uITasksRadioButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickInvestigatorRadioButton(): Promise<void> {
        await this.uIInvestigatorRadioButton.click();
    }

    async clickEffortsRadioButton(): Promise<void> {
        await this.uIEffortsRadioButton.click();
    }

    async verify24HrsTime(): Promise<void> {
        const text = await this.uIHistory1DateTextView.innerText();
        expect(text).toContain(DateHelpers.getCurrentTime('HH'));
    }

    async verifyDateAsCurrentDate(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const text = await this.uIHistory1DateTextView.innerText();
        expect(text).toContain(DateHelpers.getCurrentDate());
    }

    async enterAtPFNo(): Promise<void> {
        await this.uIPFEdit.fill(BaseData.getCMModuleValue('PFNo'));
        await this.uIPFEdit.press('Tab');
    }

    async clickLoadButton(): Promise<void> {
        await this.uILoadButton.click();
    }

    async verifyAtEnteredBy(): Promise<void> {
        const text = await this.uIEnteredByPF1TextView.innerText();
        expect(text).toContain(BaseData.getCMModuleValue('PFName'));
    }

    async verifyAtInvestigatorName(): Promise<void> {
        const text = await this.uIEffortsTable.innerText();
        expect(text).toContain(BaseData.getCMModuleValue('InvestigatorName'));
    }

    async verifyAtActivityCode(jsonKey?: number): Promise<void> {
        const expected = jsonKey !== undefined ? BaseData.getCMModuleValue('ActivityCode' + jsonKey) : BaseData.getCMModuleValue('ActivityCode');
        const text = await this.uIEffortsTable.innerText();
        expect(text).toContain(expected);
    }

    async verifyAtInvestigator2(jsonKey?: number): Promise<void> {
        const expected = jsonKey !== undefined ? BaseData.getCMModuleValue('Investigators' + jsonKey) : BaseData.getCMModuleValue('Investigators2');
        const text = await this.uIInvestigatorName2TextView.innerText();
        expect(text).toContain(expected);
    }

    async verifyAtInvestigator1(): Promise<void> {
        const text = await this.uIInvestigatorName1TextView.innerText();
        expect(text).toContain('Prophoenix, Automation');
    }

    async verifyAtInvestigator(): Promise<void> {
        const text = await this.uIInvestigatorNameTextView.innerText();
        expect(text).toContain(BaseData.getCMModuleValue('Investigators'));
    }

    async verifyAtAssignedSupervisorName(): Promise<void> {
        const text = await this.uITasksTable.innerText();
        expect(text).toContain(BaseData.getCMModuleValue('AssignedSupervisorName'));
    }

    async verifyAtTaskCode(): Promise<void> {
        const text = await this.uITasksTable.innerText();
        expect(text).toContain(BaseData.getCMModuleValue('TaskCode'));
    }

    async verifyAtAssignToPFName(): Promise<void> {
        const text = await this.uITasksTable.innerText();
        expect(text).toContain(BaseData.getCMModuleValue('AssignToPFName'));
    }

    async clickShowAllRadioButton(): Promise<void> {
        await this.uIShowAllRadioButton.click();
    }

    async verifyContentInRemarksArea(status: string): Promise<void> {
        const elements = this.page.locator("//table[@id = 'grdHistory1']//td");
        const count = await elements.count();
        let found = false;
        for (let i = 0; i < count; i++) {
            const text = await elements.nth(i).innerText();
            if (text.startsWith('Case Folder Status Changed to :')) {
                expect(text).toContain('Case Folder Status Changed to : ' + status);
                found = true;
                break;
            }
        }
        expect(found).toBe(true);
    }

    async clickCaseStatusRadioButton(): Promise<void> {
        await this.uICaseStudiesRadioButton.click();
    }

    async verifyAtCaseStatusContentInRemarks(): Promise<void> {
        const content = await this.uICaseStatusTextViewNew.innerText();
        expect(content).toContain(BaseData.getCMModuleValue('CaseStatus'));
    }

    async verifyAssignedAsInvestigatorPF(): Promise<void> {
        const text = await this.uIHistoryTabTable.innerText();
        expect(text).toContain('Assigned as Investigator');
        expect(text).toContain(BaseData.getCMModuleValue('OfficerPF'));
    }

    async verifyRemovedFromInvestigatorPF(): Promise<void> {
        const text = await this.uIHistoryTabTable.innerText();
        expect(text).toContain('Removed from Investigator');
    }
}

export class CaseFolderCustomTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uICustomFieldsEdit: Locator;
    readonly uICustomTabSaveButton: Locator;
    readonly uICustomDropDown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uICustomFieldsEdit = page.locator('#txtTeam');
        this.uICustomTabSaveButton = page.locator('#cmdSave');
        this.uICustomDropDown = page.locator('#cddTeam_DropDown');
    }

    async FillCustomFields(): Promise<void> {
        await this.uICustomFieldsEdit.fill(RandomHelpers.randomString(10));
    }

    async clickInternalSave(): Promise<void> {
        await this.uICustomTabSaveButton.click();
        await this.popup.acknowledgeOkButton.click();
    }

    async selectAtCustomDropdown(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uICustomDropDown, BaseData.getCMModuleValue('CustomDropDown'));
    }

    async verifyUpdateSuccessfulAck(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('1003 - Update Successful');
        await this.popup.acknowledgeOkButton.click();
    }
}

export class CaseFolderInvestigatorsTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIInvestigatorsTabTable: Locator;
    readonly uISaveButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIOfficersCodeEdit: Locator;
    readonly uICustomFieldsEdit: Locator;
    readonly uIDateEdit: Locator;
    readonly uIAssignedTimeEdit: Locator;
    readonly uIActionComboBox: Locator;
    readonly uITaskCodeComboBox: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIUpdateButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIInvestigatorsTabTable = page.locator('#grdOfficers');
        this.uISaveButton = page.locator('#cmdInternalSave');
        this.uIResetButton = page.locator('#cmdInternalRefresh');
        this.uIOfficersCodeEdit = page.locator('#lupOfficers_CodeValue');
        this.uICustomFieldsEdit = page.locator('#txtTeam');
        this.uIDateEdit = page.locator('#dttmAssigned_Date_KPIDttmCtrl');
        this.uIAssignedTimeEdit = page.locator("//table[@id = 'dttmAssigned_Time']//input");
        this.uIActionComboBox = page.locator('#cddAction_DropDown');
        this.uITaskCodeComboBox = page.locator('#chkPrime');
        this.uIAddButton = page.locator('#cmdAddPF');
        this.uIClearButton = page.locator('#cmdClearPF');
        this.uIUpdateButton = page.locator('#cmdAddPF');
    }

    async enterAtOfficer(): Promise<void> {
        await this.uIOfficersCodeEdit.fill(BaseData.getCMModuleValue('Officer'));
        await this.uIOfficersCodeEdit.press('Tab');
    }

    async tabOutDate(): Promise<void> {
        await this.uIDateEdit.press('Tab');
    }

    async selectAction(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIActionComboBox, 1);
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifyAtInvestigator(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIInvestigatorsTabTable, BaseData.getCMModuleValue('Investigators'), 'Investigators');
        expect(await cell.innerText()).toBe(BaseData.getCMModuleValue('Investigators'));
    }

    async verifyAtInvestigator1(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIInvestigatorsTabTable, BaseData.getCMModuleValue('Investigators1'), 'Investigators');
        expect(await cell.innerText()).toBe(BaseData.getCMModuleValue('Investigators1'));
    }

    async verifyAtInvestigator2(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIInvestigatorsTabTable, BaseData.getCMModuleValue('Investigators2'), 'Investigators');
        expect(await cell.innerText()).toBe(BaseData.getCMModuleValue('Investigators2'));
    }

    async verifyPrimaryCheckBoxCheckedByAtInvestigatorsInGrid(): Promise<void> {
        const primeIsChecked = this.page.locator("//body[@class='masterfrm']//tr//tr//tr//tr//tr[1]//td[15]//img[1]");
        const alt = await primeIsChecked.getAttribute('alt') || '';
        expect(alt).toContain('Checked');
    }

    async DeleteAtInvestigator(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uIInvestigatorsTabTable, BaseData.getCMModuleValue('Investigators'));
        await this.page.waitForTimeout(1000);
    }

    async DeleteAtInvestigator1(): Promise<void> {
        await this.page.locator("//div[@id='grdOfficers']//table/tbody/tr[contains(@class,'ig_BlueThemeAlt igg_BlueThemeAlt')]//td[contains(@class,'Delete_Icon_Style')]").click();
        await this.page.waitForTimeout(1000);
    }

    async verifyPrimeInvestigatorAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8068) A Prime Investigator must be assigned before deleting this record');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyDeleteConfirmMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(4) Do you really want to delete?');
        await this.popup.confirmYesButton.click();
    }

    async saveInternal(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async saveInternalByNavigate(windowName: string, frameName: string): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async verifyInvestigatorTableRowCount(rowCount: number): Promise<void> {
        const count = await this.grid.getRowCount(this.uIInvestigatorsTabTable);
        expect(count).toBe(rowCount);
    }

    async verifySupervisorInvestigatorAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8083) A Supervisor cannot be deleted. Assign a new Supervisor in the Assignment tab before deleting this Investigator.');
        await this.popup.acknowledgeOkButton.click();
    }

    async verify1051UpdateDataExistsInInvestigatorTabAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1051) Updated data exists in the Investigator(s) Tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyAtInvertigator2NotAppearsInGrid(): Promise<void> {
        const isVisible = await this.page.locator(`td:has-text("${BaseData.getCMModuleValue('Investigators2')}")`).isVisible().catch(() => false);
        expect(isVisible).toBe(false);
    }

    async DeleteAtInvestigator2(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uIInvestigatorsTabTable, BaseData.getCMModuleValue('Investigators2'));
        await this.page.waitForTimeout(1000);
    }

    async clickOnPrimeCheckBoxByOfficerDescription(): Promise<void> {
        await this.grid.selectRowCheckboxByCellText(this.uIInvestigatorsTabTable, BaseData.getCMModuleValue('OfficerDescription'));
    }

    async verifyPrimeInvestigatorAssignedPopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8069)A Prime Investigator is already assigned. Do you want to assign this officer as the Prime Investigator?');
        await this.popup.confirmYesButton.click();
    }

    async selectAtAction(i?: number): Promise<void> {
        const action = i !== undefined ? BaseData.getCMModuleValue('Action' + i) : BaseData.getCMModuleValue('Action');
        await this.elementHelpers.selectDropDownOption(this.uIActionComboBox, action);
    }

    async clickYesOn8069Popup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8069) A Prime Investigator is already assigned. Do you want to assign this officer as the Prime Investigator?');
        await this.popup.confirmYesButton.click();
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }

    async selectInvestigatorsInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIInvestigatorsTabTable, BaseData.getCMModuleValue('InvestigatorPF'));
    }
}

export class CaseFolderReviewTabPage {
    readonly page: Page;
    readonly uIAddNewReviewButton: Locator;
    readonly uICaseStatusTextView: Locator;
    readonly uINextReviewDateTextView: Locator;
    readonly uINextReportDateTextView: Locator;
    readonly uIEditIcon: Locator;
    readonly uIDuplicateReview: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddNewReviewButton = page.locator('#btnAddReview');
        this.uICaseStatusTextView = page.locator('#grdHistory1_ctl00_lblC1');
        this.uINextReviewDateTextView = page.locator('#grdHistory1_ctl00_lblC3');
        this.uINextReportDateTextView = page.locator('#grdHistory1_ctl00_lblC4');
        this.uIEditIcon = page.locator("//a//img[@id='imgLoading']");
        this.uIDuplicateReview = page.locator("//table[@id='grdHistory1']");
    }

    async clickAddNewReviewButton(): Promise<void> {
        await this.uIAddNewReviewButton.click();
    }

    async verifyAtCaseStatus(): Promise<void> {
        const text = await this.uICaseStatusTextView.innerText();
        expect(text).toContain(BaseData.getCMModuleValue('CaseStatus'));
    }

    async verifyNextReviewDateAs5DayFutureFromCurrentDate(): Promise<void> {
        const text = await this.uINextReviewDateTextView.innerText();
        expect(text).toContain(DateHelpers.getFutureDate(5));
    }

    async verifyNextReportDateAs10DayFutureFromCurrentDate(): Promise<void> {
        const text = await this.uINextReportDateTextView.innerText();
        expect(text).toContain(DateHelpers.getFutureDate(10));
    }

    async clickEditIcon(): Promise<void> {
        await this.uIEditIcon.click();
    }

    async verifyAtCaseStatusContentInRemarks(): Promise<void> {
        const content = await this.uICaseStatusTextView.innerText();
        expect(content).toContain(BaseData.getCMModuleValue('CaseStatus'));
    }

    async verifyAtCaseStatus1ContentInRemarks(): Promise<void> {
        const content = await this.uICaseStatusTextView.innerText();
        expect(content).toContain(BaseData.getCMModuleValue('CaseStatus1'));
    }

    async verifyDuplicateReviewIsNotPresent(): Promise<void> {
        const count = await this.uIDuplicateReview.locator('tr tr').count();
        expect(count).toBe(14);
    }

    async verifyAtCaseStatus1(): Promise<void> {
        const text = await this.uICaseStatusTextView.innerText();
        expect(text).toContain(BaseData.getCMModuleValue('CaseStatus1'));
    }
}

export class CaseFolderEffortsTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIAddNewEffortsButton: Locator;
    readonly uIInvestogatorNameTextView: Locator;
    readonly uIActivityCodeTextView: Locator;
    readonly uICumulativeHoursTextView: Locator;
    readonly uIEditInfoIcon: Locator;
    readonly uIEffortsGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIAddNewEffortsButton = page.locator('#btnAddEffort');
        this.uIInvestogatorNameTextView = page.locator('#grdHistory1_ctl00_lblC1');
        this.uIActivityCodeTextView = page.locator('#grdHistory1_ctl00_lblC2');
        this.uICumulativeHoursTextView = page.locator('#grdHistory1_ctl00_lblC4');
        this.uIEditInfoIcon = page.locator("//a//img[@id='imgLoading']");
        this.uIEffortsGrid = page.locator('#grdHistory1');
    }

    async clickAddNewEffortsTab(): Promise<void> {
        await this.uIAddNewEffortsButton.click();
    }

    async verifyAtInvestigatorName(): Promise<void> {
        const text = await this.uIInvestogatorNameTextView.innerText();
        expect(text).toContain(BaseData.getCMModuleValue('InvestigatorName'));
    }

    async verifyAtActivityCode(): Promise<void> {
        const text = await this.uIActivityCodeTextView.innerText();
        expect(text).toContain(BaseData.getCMModuleValue('ActivityCode'));
    }

    async clickEditIcon(): Promise<void> {
        await this.uIEditInfoIcon.click();
    }

    async verifyCumulativeTimeHours(hours: string): Promise<void> {
        const text = await this.uICumulativeHoursTextView.innerText();
        expect(text).toContain(hours);
    }

    async verifyAtComments(): Promise<void> {
        const text = await this.uIEffortsGrid.innerText();
        expect(text).toContain(BaseData.getCMModuleValue('Comments'));
    }

    async clickEditIconByComments(): Promise<void> {
        const table = this.uIEffortsGrid.locator(`(//td[contains(text(),'${BaseData.getCMModuleValue('Comments')}')]//ancestor::table)[3]`);
        await table.locator('#imgLoading').click();
    }

    async verifyAtCommentsNotAvailableInGrid(): Promise<void> {
        const isVisible = await this.uIEffortsGrid.isVisible().catch(() => false);
        if (isVisible) {
            const text = await this.uIEffortsGrid.innerText();
            expect(text).not.toContain(BaseData.getCMModuleValue('Comments'));
        }
    }
}

export class CaseFolderMOTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uITypeComboBox: Locator;
    readonly uICategoryComboBox: Locator;
    readonly uIDetailComboBox: Locator;
    readonly uICommentEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIMOTable: Locator;
    readonly uISaveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uITypeComboBox = page.locator('#cddMOType_DropDown');
        this.uICategoryComboBox = page.locator('#LstCategory');
        this.uIDetailComboBox = page.locator('#LstDetail');
        this.uICommentEdit = page.locator('#txtComment');
        this.uIAddButton = page.locator('#imgAddMO');
        this.uIMOTable = page.locator('#grdCBEMO');
        this.uISaveButton = page.locator('#cmdInternalSave');
    }

    async selectAtType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITypeComboBox, BaseData.getCMModuleValue('Type'));
        await this.uITypeComboBox.press('Tab');
    }

    async selectAtCategory(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uICategoryComboBox, BaseData.getCMModuleValue('Category'));
        await this.uICategoryComboBox.press('Tab');
    }

    async selectAtDetail(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIDetailComboBox, BaseData.getCMModuleValue('Detail'));
    }

    async enterComment(): Promise<void> {
        await this.uICommentEdit.fill(RandomHelpers.randomString(15));
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifyAtTypeCategoryDetailInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIMOTable, BaseData.getCMModuleValue('TypeCategoryDetail'));
        expect(await cell.innerText()).toBe(BaseData.getCMModuleValue('TypeCategoryDetail'));
    }

    async verifyAtTypeInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIMOTable, BaseData.getCMModuleValue('Type'));
        expect(await cell.innerText()).toBe(BaseData.getCMModuleValue('Type'));
    }

    async verifyAtCategoryInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIMOTable, BaseData.getCMModuleValue('Category'));
        expect(await cell.innerText()).toBe(BaseData.getCMModuleValue('Category'));
    }

    async verify1051UpdateDataExistMoTabAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1051) Updated data exists in the MO Tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }
}

export class CaseFolderUCRTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIUCRDispositionCodeEdit: Locator;
    readonly uIUCRDispositionSearchButton: Locator;
    readonly uIDateEdit: Locator;
    readonly uITTemplateComboBox: Locator;
    readonly uILoadButton: Locator;
    readonly uISaveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIUCRDispositionCodeEdit = page.locator('#lupDisposition_CodeValue');
        this.uIUCRDispositionSearchButton = page.locator('#lupDisposition_imgBtn');
        this.uIDateEdit = page.locator('#dtcDisposition_Date_KPIDttmCtrl');
        this.uITTemplateComboBox = page.locator('#cddTemplate');
        this.uILoadButton = page.locator('#btnLoad');
        this.uISaveButton = page.locator('#btnInternalSave');
    }

    async selectUCRDisposition(): Promise<void> {
        await this.uIUCRDispositionSearchButton.click();
    }

    async selectDispositionFromCodedSearch(): Promise<void> {
        await this.page.waitForTimeout(1000);
    }

    async tabOutDate(): Promise<void> {
        await this.uIDateEdit.press('Tab');
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verify8005CaseRemarksAreRequiredAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8005) Case remarks are required');
        await this.popup.acknowledgeOkButton.click();
    }

    async verify8010DispositionFieldIsMandatoryAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8010) Disposition field is mandatory');
        await this.popup.acknowledgeOkButton.click();
    }

    async selectTemplate(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITTemplateComboBox, 1);
    }

    async clickLoadButton(): Promise<void> {
        await this.uILoadButton.click();
    }

    async verify1051UpdatedDataExistsInTheUCRTabAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1051) Updated data exists in the UCR Tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForLoadState('load');
        await this.popup.confirmYesButton.click();
    }
}

export class CaseFolderPropertyTabPage {
    readonly page: Page;
    readonly uIAddNewPropertyReportButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddNewPropertyReportButton = page.locator("//span[contains(text(), 'Add New Property Report')]");
    }

    async clickAddNewPropertyReport(): Promise<void> {
        await this.uIAddNewPropertyReportButton.click();
    }
}

export class CaseFolderReportingTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly uIReportingTable: Locator;
    readonly uIViewCaseFileButton: Locator;
    readonly uIViewCaseFilePopUpScreenSelectAllCheckbox: Locator;
    readonly uIViewCaseFilePopUpScreenIncludeProeprtyReportCheckbox: Locator;
    readonly uIViewCaseFilePopUpScreenShowPDFButton: Locator;
    readonly uIAddReportButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uISaveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIReportingTable = page.locator('#grdCBEReports');
        this.uIViewCaseFileButton = page.locator('#cmdPrintAll');
        this.uIViewCaseFilePopUpScreenSelectAllCheckbox = page.locator('#chkIncAll');
        this.uIViewCaseFilePopUpScreenIncludeProeprtyReportCheckbox = page.locator('#chkPrintRPT');
        this.uIViewCaseFilePopUpScreenShowPDFButton = page.locator('#cmdIncRpt');
        this.uIAddReportButton = page.locator('#cmdAddReport');
        this.uIRefreshButton = page.locator('#btnRefresh');
        this.uISaveButton = page.locator('#cmdSave');
    }

    async clickAddReportButton(): Promise<void> {
        await this.uIAddReportButton.click();
        await this.page.waitForTimeout(1000);
    }

    async saveInternalTab(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
        await this.page.waitForTimeout(1000);
    }

    async selectAtReportByType(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.grid.selectRowByCellText(this.uIReportingTable, BaseData.getRecordsModuleValue('Type'));
        await this.page.waitForTimeout(1000);
    }

    async verifyAtTypeInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIReportingTable, BaseData.getCMModuleValue('Type'));
        expect(await cell.innerText()).toBe(BaseData.getCMModuleValue('Type'));
    }

    async verifyAtSharedColumnByReportType(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIReportingTable, BaseData.getCMModuleValue('Type'), 'Shared');
        const val = await cell.innerText();
        expect(val.trim()).toBe(BaseData.getCMModuleValue('SharedColumnValue'));
    }

    async verifyAtSharedColumn(): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIReportingTable, 'Shared', 0);
        expect(text).toContain(BaseData.getCMModuleValue('SharedColumnValue'));
    }
}

export class CaseFolderLeadsTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIAddNewButton: Locator;
    readonly uILeadGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIAddNewButton = page.locator('#AddNew');
        this.uILeadGrid = page.locator('#grdLead');
    }

    async verifyAddNewButtonIsDisabled(): Promise<void> {
        await expect(this.uIAddNewButton).toBeDisabled();
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async verifyLeadNoInGrid(leadNo: string): Promise<void> {
        const cell = await this.grid.getGridCell(this.uILeadGrid, leadNo, 'Lead Status');
        expect(await cell.innerText()).toBe(BaseData.getCMModuleValue('LeadStatus'));
    }
}

export class MOSearchPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uISearchButton: Locator;
    readonly uITypeComboBox: Locator;
    readonly uICategoryComboBox: Locator;
    readonly uIDetailComboBox: Locator;
    readonly uIMOSearchTable: Locator;
    readonly uIFromDateEdit: Locator;
    readonly uIToTimeEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uISearchButton = page.locator('#cmdSearch');
        this.uITypeComboBox = page.locator('#cddMOType_DropDown');
        this.uICategoryComboBox = page.locator('#LstCategory');
        this.uIDetailComboBox = page.locator('#LstDetail');
        this.uIMOSearchTable = page.locator('#grdMO');
        this.uIFromDateEdit = page.locator('#DttmFrom_Date_KPIDttmCtrl');
        this.uIToTimeEdit = page.locator('#DttmEnd_Date_KPIDttmCtrl');
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async reloadMOSearchTab(): Promise<void> {
        await this.page.reload();
        await this.page.waitForTimeout(2000);
    }

    async oKWithWebPageAlertWindowReloadScreenMessage(): Promise<void> {
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toContain('Are you sure, you want to Reload the Screen?');
            await dialog.accept();
        });
    }

    async verifyAcknowledgeSelectType(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8082) Select Type');
        await this.popup.acknowledgeOkButton.click();
    }

    async selectAtType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITypeComboBox, BaseData.getCMModuleValue('Type'));
        await this.uITypeComboBox.press('Tab');
    }

    async selectAtCategory(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uICategoryComboBox, BaseData.getCMModuleValue('Category'));
        await this.uICategoryComboBox.press('Tab');
    }

    async selectAtDetail(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIDetailComboBox, BaseData.getCMModuleValue('Detail'));
        await this.uIDetailComboBox.press('Tab');
    }

    async verifyAtType(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIMOSearchTable, 'Type', rowIndex);
        expect(text).toBe(BaseData.getCMModuleValue('Type'));
    }

    async verifyAtCategory(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIMOSearchTable, 'Category', rowIndex);
        expect(text).toBe(BaseData.getCMModuleValue('Category'));
    }

    async verifyAtTypeByUsingCaseNoInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIMOSearchTable, BaseData.getCMModuleValue('CaseNo'), 'Type');
        expect(await cell.innerText()).toBe(BaseData.getCMModuleValue('Type'));
    }

    async verifyAtCategoryByUsingCaseNoInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIMOSearchTable, BaseData.getCMModuleValue('CaseNo'), 'Category');
        expect(await cell.innerText()).toBe(BaseData.getCMModuleValue('Category'));
    }

    async enterFromDateAsOneMonthBeforeCurrentDate(): Promise<string> {
        const fromDate = DateHelpers.getPreviousDateByMonth(1);
        await this.uIFromDateEdit.click();
        await this.uIFromDateEdit.fill(fromDate);
        return fromDate;
    }

    async enterToDateAsCurrentDate(): Promise<string> {
        const toDate = DateHelpers.getCurrentDate();
        await this.uIToTimeEdit.fill(toDate);
        await this.uIToTimeEdit.press('Tab');
        return toDate;
    }

    async getDateInGrid(): Promise<string[]> {
        return await this.grid.getGridTableColumnValues(this.uIMOSearchTable, 'Date');
    }
}

export class CaseReviewPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uISaveButton: Locator;
    readonly uICaseStatusComboBox: Locator;
    readonly uIDateEdit: Locator;
    readonly uINextReviewDateEdit: Locator;
    readonly uINextReportDateEdit: Locator;
    readonly uITemplateComboBox: Locator;
    readonly uILoadButton: Locator;
    readonly uIStatusLabel: Locator;
    readonly uITimeEdit: Locator;
    readonly uICaseStatusLabel: Locator;
    readonly uIDateTimeLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uISaveButton = page.locator('#btnInternalSave');
        this.uICaseStatusComboBox = page.locator('#lupStatusUpdate_DropDown');
        this.uIDateEdit = page.locator('#dtcDate_Date_KPIDttmCtrl');
        this.uINextReviewDateEdit = page.locator('#dtcNewRevDate_KPIDttmCtrl');
        this.uINextReportDateEdit = page.locator('#dtcNewRptDate_KPIDttmCtrl');
        this.uITemplateComboBox = page.locator('#cddTemplate');
        this.uILoadButton = page.locator('#btnLoad');
        this.uIStatusLabel = page.locator('#lblCaseDesc');
        this.uITimeEdit = page.locator("//input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uICaseStatusLabel = page.locator('#lblCaseStatus');
        this.uIDateTimeLabel = page.locator('#lblDate');
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verify8038StatusUpdateIsmandatoryAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8038) Status Update is mandatory');
        await this.popup.acknowledgeOkButton.click();
    }

    async selectAtCaseStatus(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uICaseStatusComboBox, BaseData.getCMModuleValue('CaseStatus'));
    }

    async selectCaseStatusAsOpenPending(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uICaseStatusComboBox, 'Open/Pending (CM)');
        await this.uICaseStatusComboBox.press('Tab');
    }

    async selectAtCaseStatus1(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uICaseStatusComboBox, BaseData.getCMModuleValue('CaseStatus1'));
        await this.uICaseStatusComboBox.press('Tab');
    }

    async verifyAtCaseStatus(): Promise<void> {
        const selected = await this.uICaseStatusComboBox.inputValue();
        expect(selected).toBe(BaseData.getCMModuleValue('CaseStatus'));
    }

    async tabOutDate(): Promise<void> {
        await this.uIDateEdit.press('Tab');
    }

    async verifyNextReviewDateAs5DayFutureFromCurrentDate(): Promise<void> {
        const nextReview = await this.uINextReviewDateEdit.inputValue();
        expect(nextReview).toBe(DateHelpers.getFutureDate(5));
    }

    async verifyNextReportDateAs10DayFutureFromCurrentDate(): Promise<void> {
        const nextReport = await this.uINextReportDateEdit.inputValue();
        expect(nextReport).toBe(DateHelpers.getFutureDate(10));
    }

    async selectTemplate(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITemplateComboBox, 1);
    }

    async clickLoadButton(): Promise<void> {
        await this.uILoadButton.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async selectCaseStatusAsClosed(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uICaseStatusComboBox, 'Closed - No Further Leads (CM)');
    }

    async tabOutDateAndTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.page.waitForTimeout(500);
        await this.uITimeEdit.press('Tab');
        await this.page.waitForTimeout(500);
    }

    async selectTemplateAsAutomation(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITemplateComboBox, 'Automation CM');
    }

    async verifyReviewDateIsMandatoryAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8008) Review Date is mandatory');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyAtStatusLabel(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const label = await this.uIStatusLabel.innerText();
        expect(label).toContain(BaseData.getCMModuleValue('StatusLabel'));
    }

    async verifyAtStatusLabel1(): Promise<void> {
        const label = await this.uIStatusLabel.innerText();
        expect(label).toContain(BaseData.getCMModuleValue('StatusLabel1'));
    }

    async selectAtTemplate(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITemplateComboBox, BaseData.getCMModuleValue('Template'));
    }

    async verifyTemplateisLoadedBySize(): Promise<void> {
        const iframe = this.page.frameLocator('#rteKPITxt_contentIframe');
        const elements = iframe.locator('body span');
        const count = await elements.count();
        expect(count).toBeGreaterThan(0);
    }

    async verifyTextFieldIsNull(): Promise<void> {
        const iframe = this.page.frameLocator('#rteKPITxt_contentIframe');
        const elements = iframe.locator('body p');
        const count = await elements.count();
        expect(count).toBe(0);
    }

    async verifyCaseStatusIsNull(): Promise<void> {
        const selected = await this.uICaseStatusComboBox.inputValue();
        expect(selected.trim()).toBe('--');
    }

    async verifyCaseStatusIsMandatory(): Promise<void> {
        const color = await this.uICaseStatusLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toContain('rgba(153, 0, 0, 1)');
    }

    async verifyDateTimeIsMandatory(): Promise<void> {
        const color = await this.uIDateTimeLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toContain('rgba(153, 0, 0, 1)');
    }
}

export class CaseEffortsPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uISaveButton: Locator;
    readonly uIInvestigatorCodeEdit: Locator;
    readonly uICategoryComboBox: Locator;
    readonly uIActivityCodeComboBox: Locator;
    readonly uIDateStartedEdit: Locator;
    readonly uITemplateComboBox: Locator;
    readonly uILoadButton: Locator;
    readonly uIDateFinishedEdit: Locator;
    readonly uICumulativeTimeHoursEdit: Locator;
    readonly uICumulativeTimeMinutesEdit: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uIRichTextTableFrame: Locator;
    readonly uIRichTextEdit: Locator;
    readonly uIDeleteIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uISaveButton = page.locator('#cmdInternalSave');
        this.uIInvestigatorCodeEdit = page.locator('#lupOfficers_CodeValue');
        this.uICategoryComboBox = page.locator('#lupCategory_DropDown');
        this.uIActivityCodeComboBox = page.locator('#lupActivity');
        this.uIDateStartedEdit = page.locator('#dttmStart_Date_KPIDttmCtrl');
        this.uITemplateComboBox = page.locator('#cddTemplate');
        this.uILoadButton = page.locator('#btnLoad');
        this.uIDateFinishedEdit = page.locator('#dttmFinished_Date_KPIDttmCtrl');
        this.uICumulativeTimeHoursEdit = page.locator("//td//table//tbody//tr//input[@id ='txtCTime']");
        this.uICumulativeTimeMinutesEdit = page.locator("//td//input[@id ='txtMinitus']");
        this.uILeftSideStatusBar = page.locator("//td[@class='statusBar']/b");
        this.uIRichTextTableFrame = page.locator('#rteKPITxt_contentIframe');
        this.uIRichTextEdit = page.locator('//body');
        this.uIDeleteIcon = page.locator('#cmdInternalDelete');
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verify8002RequiredEntriesAreMissingAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8002) Required entries are missing');
        await this.popup.acknowledgeOkButton.click();
    }

    async tabOutInvestigator(): Promise<void> {
        await this.uIInvestigatorCodeEdit.press('Tab');
    }

    async clearInvestigator(): Promise<void> {
        await this.uIInvestigatorCodeEdit.clear();
    }

    async clearOldInvestigator(): Promise<void> {
        await this.uIInvestigatorCodeEdit.click();
        await this.page.keyboard.press('Control+a');
        await this.page.keyboard.press('Backspace');
    }

    async closeCaseEffort(): Promise<void> {
        await this.page.close();
    }

    async enterAtInvestigator1(): Promise<void> {
        await this.uIInvestigatorCodeEdit.clear();
        await this.uIInvestigatorCodeEdit.click();
        await this.uIInvestigatorCodeEdit.fill(BaseData.getCMModuleValue('Investigator1'));
        await this.uIInvestigatorCodeEdit.press('Tab');
    }

    async verify8053InvestigatorNotAssignedToCaseConfirmMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8053) Investigator not assigned to this case. Do you want to continue?');
        await this.popup.confirmYesButton.click();
    }

    async selectAtCategory(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uICategoryComboBox, BaseData.getCMModuleValue('Category'));
        await this.uICategoryComboBox.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async selectAtActivityCode(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIActivityCodeComboBox, BaseData.getCMModuleValue('ActivityCode'));
        await this.uIActivityCodeComboBox.press('Tab');
    }

    async tabOutStartedDate(): Promise<void> {
        await this.uIDateStartedEdit.press('Tab');
    }

    async enterFinishedDateAs2DaysFutureFromCurrentDate(): Promise<void> {
        await this.uIDateFinishedEdit.click();
        await this.uIDateFinishedEdit.fill(DateHelpers.getFutureDate(2));
    }

    async selectTemplate(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITemplateComboBox, 1);
    }

    async clickLoadButton(): Promise<void> {
        await this.uILoadButton.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async getCumulativeTimeHours(): Promise<string> {
        return await this.uICumulativeTimeHoursEdit.inputValue();
    }

    async enterAtInvestigator(): Promise<void> {
        await this.uIInvestigatorCodeEdit.fill(BaseData.getCMModuleValue('Investigator'));
        await this.uIInvestigatorCodeEdit.press('Tab');
    }

    async enterAtRichTextComments(): Promise<void> {
        const iframe = this.page.frameLocator('#rteKPITxt_contentIframe');
        await iframe.locator('body').fill(BaseData.getCMModuleValue('Comments'));
    }

    async verifyDeleteIconIsDiplayed(): Promise<void> {
        await expect(this.uIDeleteIcon).toBeVisible();
    }

    async verifyDeleteIconIsEnabled(): Promise<void> {
        await expect(this.uIDeleteIcon).toBeEnabled();
    }

    async clickDeleteIconWithConfirmPopupMessage(): Promise<void> {
        await this.uIDeleteIcon.click();
        await expect(this.popup.modalBody).toContainText('(4)Do you really want to delete?');
        await this.popup.confirmYesButton.click();
    }
}

export class LeadManagementPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIAddNewButton: Locator;
    readonly uIBackButton: Locator;
    readonly uIResetButton: Locator;
    readonly uILeadOutComeDropDown: Locator;
    readonly uISearchButton: Locator;
    readonly uIleadManagementGrid: Locator;
    readonly uILeadYearEdit: Locator;
    readonly uILeadNumberEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIToTimeEdit: Locator;
    readonly uIPrintIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIAddNewButton = page.locator("//span[contains(text(), 'Add New')]");
        this.uIBackButton = page.locator("//span[text()='Back']");
        this.uIResetButton = page.locator("//span[text()='Reset']");
        this.uILeadOutComeDropDown = page.locator('#tabDOR_tmpl0_ctrlusrLeadMgmtSrchBasic_cddLeadOutCome_DropDown');
        this.uISearchButton = page.locator("//span[text()='Search']");
        this.uIleadManagementGrid = page.locator('#pnlSearchResults');
        this.uILeadYearEdit = page.locator('#tabDOR_tmpl0_ctrlusrLeadMgmtSrchBasic_NumberCtrl1_Year');
        this.uILeadNumberEdit = page.locator('#tabDOR_tmpl0_ctrlusrLeadMgmtSrchBasic_NumberCtrl1_Number');
        this.uIToDateEdit = page.locator('#tabDOR_tmpl0_ctrlusrLeadMgmtSrchBasic_dttTo_Date_KPIDttmCtrl');
        this.uIToTimeEdit = page.locator("//table[@id='tabDOR_tmpl0_ctrlusrLeadMgmtSrchBasic_dttTo_Time']//input");
        this.uIPrintIcon = page.locator("//img[contains(@src,'16_print.gif')]");
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickBackButton(): Promise<void> {
        await this.uIBackButton.click();
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async selectAtLeadOutCome(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uILeadOutComeDropDown, BaseData.getCMModuleValue('LeadOutCome'));
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async verifyLeadInGrid(lead: string): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIleadManagementGrid, lead);
        expect(await cell.innerText()).toBe(lead);
    }

    async clickLeadInGrid(lead: string): Promise<void> {
        await this.grid.selectRowByCellText(this.uIleadManagementGrid, lead);
    }

    async selectRandomRecordInGrid(): Promise<void> {
        await this.grid.selectRandomRow(this.uIleadManagementGrid);
    }

    async enterAtLeadNo(): Promise<void> {
        const leadNo = BaseData.getRecordsModuleValue('LeadNo');
        await this.uILeadYearEdit.click();
        await this.uILeadYearEdit.fill(leadNo.substring(0, 2));
        await this.uILeadNumberEdit.fill(leadNo.substring(3));
        await this.uILeadNumberEdit.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async selectAtLeadNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIleadManagementGrid, BaseData.getCMModuleValue('LeadNo'));
    }

    async enterToDateAsCurrentDate(): Promise<void> {
        const toDate = DateHelpers.getCurrentDate();
        await this.uIToDateEdit.fill(toDate);
        await this.uIToTimeEdit.click();
        await this.uIToTimeEdit.fill(DateHelpers.getCurrentTime());
        await this.uIToTimeEdit.press('Tab');
    }

    async getRowCount(): Promise<string> {
        const count = await this.grid.getRowCount(this.uIleadManagementGrid);
        return count.toString();
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async verifyLeadEntryWindowNotExist(): Promise<void> {
        const pages = this.page.context().pages();
        const exists = pages.some(p => p.url().includes('Lead Entry'));
        expect(exists).toBe(false);
    }
}

export class LeadEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIEnteredDateEdit: Locator;
    readonly uIEnteredTimeEdit: Locator;
    readonly uIByPFCodeEdit: Locator;
    readonly uILeadStatusDropdown: Locator;
    readonly uILeadTasksTab: Locator;
    readonly uISaveButton: Locator;
    readonly uIStatusBar: Locator;
    readonly uILocationTab: Locator;
    readonly uILeadSummaryTab: Locator;
    readonly uILeadYearEdit: Locator;
    readonly uILeadNumberEdit: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIALCIcon: Locator;
    readonly uIAttachmentTab: Locator;
    readonly uIPrintIcon: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uIResetIcon: Locator;
    readonly uIEffortsTab: Locator;
    readonly uINamesTab: Locator;
    readonly uIVehicleTab: Locator;
    readonly uIHistoryTab: Locator;
    readonly uILeadPriorityDropdown: Locator;
    readonly uILeadSourceDropdown: Locator;
    readonly uICustomizeIcon: Locator;
    readonly uIEnteredDateLabel: Locator;
    readonly uIEnteredByPFLabel: Locator;
    readonly uILeadStatusLabel: Locator;
    readonly uIQAFormsTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIEnteredDateEdit = page.locator('#dttEnteredDttm_Date_KPIDttmCtrl');
        this.uIEnteredTimeEdit = page.locator("//input[contains(@class,'textboxdatetime')]");
        this.uIByPFCodeEdit = page.locator('#lupPF_CodeValue');
        this.uILeadStatusDropdown = page.locator('#cddLeadStatus_DropDown');
        this.uILeadTasksTab = page.locator("//span[contains(text(), 'Lead Tasks')]");
        this.uISaveButton = page.locator('#cmdSave');
        this.uIStatusBar = page.locator("//td[@class='statusBar']/b");
        this.uILocationTab = page.locator("//span[text()='Location']");
        this.uILeadSummaryTab = page.locator("//span[text()='Lead Summary']");
        this.uILeadYearEdit = page.locator('#LeadNo_Year');
        this.uILeadNumberEdit = page.locator('#LeadNo_Number');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uIALCIcon = page.locator('#ALC');
        this.uIAttachmentTab = page.locator("//span[text()='Attachments']");
        this.uIPrintIcon = page.locator('#cmdPrint');
        this.uICaseYearEdit = page.locator('#nbrIncidentID_Year');
        this.uICaseNumberEdit = page.locator('#nbrIncidentID_Number');
        this.uIResetIcon = page.locator('#cmdRefresh');
        this.uIEffortsTab = page.locator("//span[contains(text(), 'Efforts')]");
        this.uINamesTab = page.locator("//span[text()= 'Names']");
        this.uIVehicleTab = page.locator("//span[contains(text(), 'Vehicle')]");
        this.uIHistoryTab = page.locator("//span[contains(text(), 'History')]");
        this.uILeadPriorityDropdown = page.locator('#cddLeadPriority_DropDown');
        this.uILeadSourceDropdown = page.locator('#cddLeadSource_DropDown');
        this.uICustomizeIcon = page.locator("//img[contains(@src,'Customize_1.png')]");
        this.uIEnteredDateLabel = page.locator('#lblEnteredDttm');
        this.uIEnteredByPFLabel = page.locator('#lblEnteredByPF');
        this.uILeadStatusLabel = page.locator('#lblLeadStatus');
        this.uIQAFormsTab = page.locator("//span[contains(text(), 'QA Forms')]");
    }

    async tabOutEnteredDateAndTime(): Promise<void> {
        await this.uIEnteredDateEdit.click();
        await this.uIEnteredDateEdit.press('Tab');
        await this.uIEnteredTimeEdit.press('Tab');
    }

    async tabOutByPF(): Promise<void> {
        await this.uIByPFCodeEdit.click();
        await this.uIByPFCodeEdit.press('Tab');
    }

    async enterAtByPFNo(): Promise<void> {
        await this.uIByPFCodeEdit.fill(BaseData.getCMModuleValue('PFCode'));
    }

    async selectAtLeadStatus(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uILeadStatusDropdown, BaseData.getCMModuleValue('LeadStatus'));
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verifyUpdatedDataExistsLocationTabAckPopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1051) Updated data exists in the Location tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async SaveNClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await this.popup.confirmYesButton.click();
    }

    async verifyAdditionSuccessfulStatusMessage(): Promise<void> {
        const text = await this.uIStatusBar.innerText();
        expect(text.toLowerCase()).toContain('1002 - addition successful');
    }

    async verifyUpdateSuccessfulStatusMessage(): Promise<void> {
        const text = await this.uIStatusBar.innerText();
        expect(text.trim()).toBe('1003 - Update Successful');
    }

    async switchToLeadTasksTab(): Promise<void> {
        await this.uILeadTasksTab.click();
    }

    async switchToLocationTab(): Promise<void> {
        await this.uILocationTab.click();
    }

    async verifyALCIconIsEnabled(): Promise<void> {
        await expect(this.uIALCIcon).toBeVisible();
        await expect(this.uIALCIcon).toBeEnabled();
    }

    async ClickALCIcon(): Promise<void> {
        await this.uIALCIcon.click();
    }

    async verifyAttachmentTabColorInBlue(): Promise<void> {
        const color = await this.uIAttachmentTab.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(0, 0, 255, 1)');
    }

    async verifyLocationTabColorInBlue(): Promise<void> {
        const color = await this.uILocationTab.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(0, 0, 255, 1)');
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async clickLeadSummaryTab(): Promise<void> {
        await this.uILeadSummaryTab.click();
    }

    async verifyLead(): Promise<void> {
        expect((await this.uILeadYearEdit.inputValue()).trim()).not.toBe('');
        expect((await this.uILeadNumberEdit.inputValue()).trim()).not.toBe('');
    }

    async readLeadNo(): Promise<string> {
        const year = await this.uILeadYearEdit.inputValue();
        const num = await this.uILeadNumberEdit.inputValue();
        return year + '-' + num;
    }

    async enterAtCaseNo(): Promise<void> {
        const caseNo = BaseData.getRecordsModuleValue('CaseNo');
        await this.uICaseYearEdit.click();
        await this.uICaseYearEdit.fill(caseNo.substring(0, 2));
        await this.uICaseNumberEdit.clear();
        await this.uICaseNumberEdit.fill(caseNo.substring(3));
        await this.uICaseNumberEdit.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async clickReset(): Promise<void> {
        await this.uIResetIcon.click();
    }

    async verifyAtTabIsEnabledByTabName(jsonkeyindex: number): Promise<void> {
        const tabName = BaseData.getCMModuleValue('TabName' + jsonkeyindex);
        const tab = this.page.locator(`//span[contains(text(),'${tabName}')]`);
        await expect(tab).toBeEnabled();
    }

    async verifyLeadSummaryTabIsEnabled(): Promise<void> {
        await expect(this.uILeadSummaryTab).toBeEnabled();
    }

    async verifyLeadTasksTabIsEnabled(): Promise<void> {
        await expect(this.uILeadTasksTab).toBeEnabled();
    }

    async verifyEffortsTabIsEnabled(): Promise<void> {
        await expect(this.uIEffortsTab).toBeEnabled();
    }

    async verifyAttachmentsTabIsEnabled(): Promise<void> {
        await expect(this.uIAttachmentTab).toBeEnabled();
    }

    async verifyNamesTabIsEnabled(): Promise<void> {
        await expect(this.uINamesTab).toBeEnabled();
    }

    async verifyVehicleTabIsEnabled(): Promise<void> {
        await expect(this.uIVehicleTab).toBeEnabled();
    }

    async verifyLocationTabIsEnabled(): Promise<void> {
        await expect(this.uILocationTab).toBeEnabled();
    }

    async verifyHistoryTabIsEnabled(): Promise<void> {
        await expect(this.uIHistoryTab).toBeEnabled();
    }

    async switchToEffortsTab(): Promise<void> {
        await this.uIEffortsTab.click();
    }

    async verifyLeadTaskTabAsRed(): Promise<void> {
        const color = await this.uILeadTasksTab.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(255, 0, 0, 1)');
    }

    async verifyLeadTaskTabAsGreen(): Promise<void> {
        const color = await this.uILeadTasksTab.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(0, 128, 0, 1)');
    }

    async selectAtLeadPriority(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uILeadPriorityDropdown, BaseData.getCMModuleValue('LeadPriority'));
    }

    async selectAtLeadSource(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uILeadSourceDropdown, BaseData.getCMModuleValue('LeadSource'));
    }

    async clickCustomizeIcon(): Promise<void> {
        await this.uICustomizeIcon.click();
    }

    async verifyCustomizeOptions(): Promise<void> {
        const contextMenu = this.page.locator('#tlbContextMenu_0');
        const elements = contextMenu.locator('li');
        const count = await elements.count();
        const menu: string[] = [];
        for (let i = 0; i < count; i++) {
            menu.push((await elements.nth(i).innerText()).trim());
        }
        expect(menu).toContain('Manage Custom Fields');
        expect(menu).toContain('Manage QA Form');
        expect(menu).toContain('Field Names for PDF/Word Form');
    }

    async SwitchToHistoryTab(): Promise<void> {
        await this.uIHistoryTab.click();
    }

    async switchToNamesTab(): Promise<void> {
        await this.uINamesTab.click();
    }

    async switchToVehicleTab(): Promise<void> {
        await this.uIVehicleTab.click();
    }

    async verifyLeadStatusIsMandatory(): Promise<void> {
        const color = await this.uILeadStatusLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(153, 0, 0, 1)');
    }

    async verifyEnteredDateIsMandatory(): Promise<void> {
        const color = await this.uIEnteredDateLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(153, 0, 0, 1)');
    }

    async verifyByPFIsMandatory(): Promise<void> {
        const color = await this.uIEnteredByPFLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(153, 0, 0, 1)');
    }

    async verifyLeadStatusContainsClosedOption(): Promise<void> {
        const options = await this.uILeadStatusDropdown.locator('option').allInnerTexts();
        expect(options).toContain('Closed');
    }

    async verifyLeadStatusContainsLowOption(): Promise<void> {
        const options = await this.uILeadStatusDropdown.locator('option').allInnerTexts();
        expect(options).toContain('Low');
    }

    async verifyLeadStatusContainsNewOption(): Promise<void> {
        const options = await this.uILeadStatusDropdown.locator('option').allInnerTexts();
        expect(options).toContain('New');
    }

    async verifyLeadStatusContainsPrankCallOption(): Promise<void> {
        const options = await this.uILeadStatusDropdown.locator('option').allInnerTexts();
        expect(options).toContain('Prank Call');
    }

    async verifyLeadPriorityContainsHighOption(): Promise<void> {
        const options = await this.uILeadPriorityDropdown.locator('option').allInnerTexts();
        expect(options).toContain('High');
    }

    async verifyLeadPriorityContainsLowOption(): Promise<void> {
        const options = await this.uILeadPriorityDropdown.locator('option').allInnerTexts();
        expect(options).toContain('Low');
    }

    async verifyLeadSourceContinsCitizenOption(): Promise<void> {
        const options = await this.uILeadSourceDropdown.locator('option').allInnerTexts();
        expect(options).toContain('Citizen');
    }

    async verifyLeadSourceContainsMediaOption(): Promise<void> {
        const options = await this.uILeadSourceDropdown.locator('option').allInnerTexts();
        expect(options).toContain('Media');
    }

    async verifyQAFormsTabIsEnabled(): Promise<void> {
        await expect(this.uIQAFormsTab).toBeEnabled();
    }

    async verifyEnteredDateIsBlank(): Promise<void> {
        expect((await this.uIEnteredDateEdit.inputValue()).trim()).toBe('');
    }

    async verifyByPFIsBlank(): Promise<void> {
        expect((await this.uIByPFCodeEdit.inputValue()).trim()).toBe('');
    }

    async verifyLeadStatusIsNull(): Promise<void> {
        const selected = await this.uILeadStatusDropdown.inputValue();
        expect(selected.trim()).toBe('--');
    }

    async close(): Promise<void> {
        await this.page.close();
    }
}

export class LeadTasksTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly uIAddNewTaskButton: Locator;
    readonly uIDeleteTaskButton: Locator;
    readonly uICFSTaskGrid: Locator;
    readonly uIUpdateDefaultTasks: Locator;
    readonly uIPopulateTasksFromDefault: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIAddNewTaskButton = page.locator('#CmdAddNew');
        this.uIDeleteTaskButton = page.locator('#cmdDeleteGrid');
        this.uICFSTaskGrid = page.locator('#grdCFSTask');
        this.uIUpdateDefaultTasks = page.locator('#AddDefaultTask');
        this.uIPopulateTasksFromDefault = page.locator('#PopulateTasks');
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNewTaskButton.click();
    }

    async verifyAtAssignedToPFBasedOnTaskCode(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uICFSTaskGrid, BaseData.getCMModuleValue('TaskCode'), 'Assigned To PF');
        expect(await cell.innerText()).toBe(BaseData.getCMModuleValue('PF'));
    }

    async clickAtCheckboxInGrid(): Promise<void> {
        await this.grid.selectRowCheckboxByCellText(this.uICFSTaskGrid, BaseData.getCMModuleValue('PF'));
    }

    async clickdeleteTaskButton(): Promise<void> {
        await this.uIDeleteTaskButton.click();
        await this.popup.confirmYesButton.click();
    }

    async verifyAtDeletedTaskInGrid(): Promise<void> {
        const tasks = await this.grid.getGridTableColumnValues(this.uICFSTaskGrid, 'Description');
        const taskCode = BaseData.getCMModuleValue('TaskCode');
        for (const t of tasks) {
            expect(t.trim()).not.toBe(taskCode);
        }
    }

    async verifyAddNewTaskIsdisplayed(): Promise<void> {
        await expect(this.uIAddNewTaskButton).toBeVisible();
    }

    async verifyUpdateDefaultTasksIsdisplayed(): Promise<void> {
        await expect(this.uIUpdateDefaultTasks).toBeVisible();
    }

    async verifyPopulateTasksFromDefaultIsdisplayed(): Promise<void> {
        await expect(this.uIUpdateDefaultTasks).toBeVisible();
    }

    async verifyDeleteTaskIsEnabled(): Promise<void> {
        await expect(this.uIDeleteTaskButton).toBeEnabled();
    }

    async clickUpdateDefaultTasks(): Promise<void> {
        await this.uIUpdateDefaultTasks.click();
    }

    async clickPopulateTasksFromDefault(): Promise<void> {
        await this.uIPopulateTasksFromDefault.click();
        await expect(this.popup.modalBody).toContainText('Task will be created. Do you want to continue?');
        await this.popup.confirmYesButton.click();
    }

    async verifyAtTaskCodeInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uICFSTaskGrid, BaseData.getCMModuleValue('Description'), 'Description');
        expect(await cell.innerText()).toBe(BaseData.getCMModuleValue('Description'));
    }

    async clickAtCheckboxInGridByPF(): Promise<void> {
        const targetCell = this.uICFSTaskGrid.locator(`xpath=.//table/tbody/tr/td[contains(text(), '${BaseData.getCMModuleValue('PF')}')]`);
        const targetRow = targetCell.locator('xpath=..');
        const targetCheckbox = targetRow.locator('input');
        await targetCheckbox.scrollIntoViewIfNeeded();
        await this.page.waitForTimeout(500);
        await targetCheckbox.click();
    }

    async verifyAtDescriptionAsRedInGrid(): Promise<void> {
        const row = await this.grid.getGridRowByCellInnerText(this.uICFSTaskGrid, BaseData.getCMModuleValue('Description'));
        const color = await row.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(255, 0, 0, 1)');
    }

    async selectAtDescriptionInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICFSTaskGrid, BaseData.getCMModuleValue('Description'));
    }

    async verifyAtDescriptionAsNotRedInGrid(): Promise<void> {
        const row = await this.grid.getGridRowByCellInnerText(this.uICFSTaskGrid, BaseData.getCMModuleValue('Description'));
        const color = await row.evaluate(el => getComputedStyle(el).color);
        expect(color).not.toBe('rgba(255, 0, 0, 1)');
    }

    async deleteTaskRowInGridByDescription(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uICFSTaskGrid, BaseData.getCMModuleValue('TaskCode'));
        await this.popup.confirmYesButton.click();
    }

    async clickAtCheckboxInGrid1(): Promise<void> {
        await this.grid.selectRowCheckboxByCellText(this.uICFSTaskGrid, BaseData.getCMModuleValue('PF'));
    }
}

export class LeadLocationTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly uIAddressEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIUpdateButton: Locator;
    readonly uIInternalSaveButton: Locator;
    readonly uIInternalResetButton: Locator;
    readonly uIAddressGrid: Locator;
    readonly uIAddressInfoIcon: Locator;
    readonly uIClearButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIAddressEdit = page.locator('#adrAdditionalAddr_txtFrom');
        this.uIAddButton = page.locator('#cmdAddAddress');
        this.uIUpdateButton = page.locator("//input[contains(@src,'UpdateData')]");
        this.uIInternalSaveButton = page.locator('#cmdInternalSave');
        this.uIInternalResetButton = page.locator('#cmdInternalRefresh');
        this.uIAddressGrid = page.locator('#grdLocation');
        this.uIAddressInfoIcon = page.locator('#adrAdditionalAddr_cmdIncOnAddr');
        this.uIClearButton = page.locator('#cmdClearAddress');
    }

    async enterAtAddress(i: number): Promise<void> {
        await this.uIAddressEdit.clear();
        await this.uIAddressEdit.fill(BaseData.getCMModuleValue('Address' + i));
        await this.uIAddressEdit.press('Tab');
    }

    async enterAtAddressAsalphabetsWithoutTab(): Promise<void> {
        await this.uIAddressEdit.fill(BaseData.getCMModuleValue('Alphabet'));
    }

    async verifyCommonNameWindowExist(): Promise<void> {
        const pages = this.page.context().pages();
        const exists = pages.some(p => p.url().includes('frmAddrCommonName.aspx'));
        expect(exists).toBe(true);
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }

    async selectGridRowByAddress(i: number): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAddressGrid, BaseData.getCMModuleValue('Address' + i));
    }

    async verifyAtAddressInGrid(i: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIAddressGrid, BaseData.getCMModuleValue('CSZ' + i), 'Address');
        expect(await cell.innerText()).toContain(BaseData.getCMModuleValue('Address' + i));
    }

    async verifyAtCSZInGrid(i: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIAddressGrid, BaseData.getCMModuleValue('Address' + i), 'CSZ');
        expect(await cell.innerText()).toContain(BaseData.getCMModuleValue('CSZ' + i));
    }

    async internalSaveScreen(): Promise<void> {
        await this.uIInternalSaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async verifyAtAddressEdit(i: number): Promise<void> {
        const val = await this.uIAddressEdit.inputValue();
        expect(val).toBe(BaseData.getCMModuleValue('Address' + i));
    }

    async verifyAdditionSuccessfulStatusMessage(): Promise<void> {
        await expect(this.page.locator("//td[@class='statusBar']/b")).toContainText('1002 - Addition Successful');
    }

    async tabOutAddressField(): Promise<void> {
        await this.uIAddressEdit.press('Tab');
    }

    async clickAddressInfoIcon(): Promise<void> {
        await this.uIAddressInfoIcon.click();
    }

    async clickClearButton(): Promise<void> {
        await this.uIClearButton.click();
    }

    async verifyAtAlphabetNotInTheGrid(): Promise<void> {
        const values = await this.grid.getGridTableColumnValues(this.uIAddressGrid, 'Address');
        for (const s of values) {
            if (s.startsWith(BaseData.getGeoModuleValue('Alphabet'))) {
                expect(s).not.toBe(BaseData.getGeoModuleValue('Alphabet'));
            }
        }
    }

    async verifyAtAdressNotPresentedInGrid(jsonkeyindex: number): Promise<void> {
        const values = await this.grid.getGridTableColumnValues(this.uIAddressGrid, 'Address');
        for (const s of values) {
            expect(s.trim()).not.toBe(BaseData.getCMModuleValue('Address' + jsonkeyindex));
        }
    }

    async deleteAtAddressInGrid(jsonkeyindex: number): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uIAddressGrid, BaseData.getCMModuleValue('Address' + jsonkeyindex));
        await this.popup.confirmYesButton.click();
    }
}

export class LeadSummaryTabPage {
    readonly page: Page;
    readonly elementHelpers: ElementHelpers;
    readonly uILeadOutcomeDropDown: Locator;
    readonly uILeadProvidedByNameType: Locator;
    readonly uILeadProvidedByNameID: Locator;
    readonly uIAdditionalDetailsEdit: Locator;
    readonly uIRichTextEdit: Locator;
    readonly uITemplateDropdown: Locator;
    readonly uILoadButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elementHelpers = new ElementHelpers(page);

        this.uILeadOutcomeDropDown = page.locator('#tabLead_tmpl0_usrLeadsummary_cddLeadCome_DropDown');
        this.uILeadProvidedByNameType = page.locator('#tabLead_tmpl0_usrLeadsummary_nmcIncident_NameType');
        this.uILeadProvidedByNameID = page.locator('#tabLead_tmpl0_usrLeadsummary_nmcIncident_NameTypeID');
        this.uIAdditionalDetailsEdit = page.locator('#tabLead_tmpl0_usrLeadsummary_txtComments');
        this.uIRichTextEdit = page.locator('//body');
        this.uITemplateDropdown = page.locator('#tabLead_tmpl0_usrLeadsummary_lstTextName');
        this.uILoadButton = page.locator('#tabLead_tmpl0_usrLeadsummary_cmdload');
    }

    async selectAtLeadOutcome(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uILeadOutcomeDropDown, BaseData.getCMModuleValue('LeadOutCome'));
    }

    async verifyAtLeadOutcome(): Promise<void> {
        const selected = await this.uILeadOutcomeDropDown.inputValue();
        expect(selected).toBe(BaseData.getCMModuleValue('LeadOutCome'));
    }

    async enterAtLeadProvidedBy(): Promise<void> {
        const nameId = BaseData.getCMModuleValue('NameID');
        await this.uILeadProvidedByNameType.fill(nameId.substring(0, 1));
        await this.uILeadProvidedByNameID.fill(nameId.substring(2));
        await this.uILeadProvidedByNameID.press('Tab');
    }

    async enterAdditionalDetails(): Promise<void> {
        await this.uIAdditionalDetailsEdit.fill(RandomHelpers.randomString(20));
    }

    async enterAtRichtext(): Promise<void> {
        const iframe = this.page.frameLocator('#tabLead_tmpl0_usrLeadsummary_rteKPITxt_contentIframe');
        await iframe.locator('body').fill(BaseData.getCMModuleValue('Text'));
    }

    async selectAtTemplate(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITemplateDropdown, BaseData.getCMModuleValue('Template'));
    }

    async clickLoad(): Promise<void> {
        await this.uILoadButton.click();
    }

    async verifyRichTextIsNotBlank(): Promise<void> {
        const iframe = this.page.frameLocator('#tabLead_tmpl0_usrLeadsummary_rteKPITxt_contentIframe');
        const text = await iframe.locator('body').innerText();
        expect(text.trim()).not.toBe('');
    }

    async verifyTemplateIsNotSelected(): Promise<void> {
        const selected = await this.uITemplateDropdown.inputValue();
        expect(selected.trim()).toBe('--');
    }

    async verifyRichTextIsBlank(): Promise<void> {
        const iframe = this.page.frameLocator('#tabLead_tmpl0_usrLeadsummary_rteKPITxt_contentIframe');
        const text = await iframe.locator('body').innerText();
        expect(text.trim()).toBe('');
    }
}

export class LeadTaskPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uITaskCodeDropdown: Locator;
    readonly uIAssignToPFNoEdit: Locator;
    readonly uIAssignByPFNoEdit: Locator;
    readonly uIAssignedDateEdit: Locator;
    readonly uIAssignedTimeEdit: Locator;
    readonly uIDueByDateEdit: Locator;
    readonly uIDueByTimeEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIDateStartedEdit: Locator;
    readonly uIDateFinishedEdit: Locator;
    readonly uITimeStartedEdit: Locator;
    readonly uITimeFinishedEdit: Locator;
    readonly uICategoryDropdown: Locator;
    readonly uIActivityCodeDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uITaskCodeDropdown = page.locator('#cddTaskcode_DropDown');
        this.uIAssignToPFNoEdit = page.locator('#lupAssignTo_CodeValue');
        this.uIAssignByPFNoEdit = page.locator('#lupAssignsuper_CodeValue');
        this.uIAssignedDateEdit = page.locator('#AssignedDttm_Date_KPIDttmCtrl');
        this.uIAssignedTimeEdit = page.locator("//table[@id='AssignedDttm_Time']//input");
        this.uIDueByDateEdit = page.locator('#cddTaskcode_DropDown');
        this.uIDueByTimeEdit = page.locator("//table[@id='DueDttm_Time']//input");
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIDateStartedEdit = page.locator('#dttmFrom_KPIDttmCtrl');
        this.uIDateFinishedEdit = page.locator('#dttmTo_KPIDttmCtrl');
        this.uITimeStartedEdit = page.locator("//table[@id='dttmFromTime_Time']//input");
        this.uITimeFinishedEdit = page.locator("//table[@id='dttmToTime_Time']//input");
        this.uICategoryDropdown = page.locator('#lupCategory_DropDown');
        this.uIActivityCodeDropdown = page.locator('#lupActivity');
    }

    async selectAtTaskCode(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITaskCodeDropdown, BaseData.getCMModuleValue('TaskCode'));
    }

    async enterAtAssignToPFNo(): Promise<void> {
        await this.uIAssignToPFNoEdit.fill(BaseData.getCMModuleValue('AssignedTo'));
    }

    async tabOutAssignedDateAndTime(): Promise<void> {
        await this.uIAssignedDateEdit.press('Tab');
        await this.uIAssignedTimeEdit.press('Tab');
    }

    async enterAtAssignByPFNo(): Promise<void> {
        await this.uIAssignByPFNoEdit.fill(BaseData.getCMModuleValue('AssignedBy'));
    }

    async enterDueByDateAsFutureDate(): Promise<void> {
        await this.uIDueByDateEdit.fill(DateHelpers.getFutureDate(5));
        await this.uIDueByTimeEdit.press('Tab');
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async enterDateTimeStartedAsPastDate(): Promise<void> {
        await this.uIDateStartedEdit.fill(DateHelpers.getPreviousDate(1, 'MM/dd/yyyy'));
        await this.uIDateStartedEdit.press('Tab');
    }

    async enterAtDateTimeFinishedAsCurrentDate(): Promise<void> {
        await this.uIDateFinishedEdit.fill(DateHelpers.getCurrentDate());
        await this.uITimeFinishedEdit.fill(DateHelpers.getCurrentTime());
        await this.uITimeFinishedEdit.press('Tab');
    }

    async enterAtCategory(): Promise<void> {
        await this.uICategoryDropdown.fill(BaseData.getCMModuleValue('Category'));
    }

    async enterAtActivityCode(): Promise<void> {
        await this.uIActivityCodeDropdown.fill(BaseData.getCMModuleValue('Category'));
    }
}

export class DefaultTaskPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uITaskCodeLabel: Locator;
    readonly uIDueWithinNumberOfLabel: Locator;
    readonly uITaskDetailsLabel: Locator;
    readonly uITaskCodeDropdown: Locator;
    readonly uIDueWithinNumberOfEdit: Locator;
    readonly uITaskDetailsEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIDefaultTaskGrid: Locator;
    readonly uISaveNClose: Locator;
    readonly uISaveIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uITaskCodeLabel = page.locator('#lblTaskcode');
        this.uIDueWithinNumberOfLabel = page.locator('#lblduenumber');
        this.uITaskDetailsLabel = page.locator('#lblTaskdtl');
        this.uITaskCodeDropdown = page.locator('#cddTaskcode_DropDown');
        this.uIDueWithinNumberOfEdit = page.locator('#txtDue');
        this.uITaskDetailsEdit = page.locator('#txttaskDetails');
        this.uIAddButton = page.locator('#imgAdd');
        this.uIDefaultTaskGrid = page.locator('#grdCFSTask');
        this.uISaveNClose = page.locator('#cmdSaveNClose');
        this.uISaveIcon = page.locator('#cmdSave');
    }

    async verifyTaskCodeIsMandatory(): Promise<void> {
        const color = await this.uITaskCodeLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toContain('rgba(153, 0, 0, 1)');
    }

    async verifyDueWithinNumberOfIsMandatory(): Promise<void> {
        const color = await this.uIDueWithinNumberOfLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toContain('rgba(153, 0, 0, 1)');
    }

    async verifyTaskDetailsIsMandatory(): Promise<void> {
        const color = await this.uITaskDetailsLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toContain('rgba(153, 0, 0, 1)');
    }

    async selectAtTaskCode(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITaskCodeDropdown, BaseData.getCMModuleValue('TaskCode1'));
    }

    async enterAtDueWithinNumberOf(): Promise<void> {
        await this.uIDueWithinNumberOfEdit.fill(BaseData.getCMModuleValue('DueWithinNumberOf'));
    }

    async enterAtTaskDetails(): Promise<void> {
        await this.uITaskDetailsEdit.fill(BaseData.getCMModuleValue('TaskDetails'));
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifyAtDescriptionInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIDefaultTaskGrid, BaseData.getCMModuleValue('Description'), 'Description');
        expect(await cell.innerText()).toBe(BaseData.getCMModuleValue('Description'));
    }

    async saveNClose(): Promise<void> {
        await this.uISaveNClose.click();
    }

    async save(): Promise<void> {
        await this.uISaveIcon.click();
    }
}

export class LeadEntryEffortsTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIAddNewEffort: Locator;
    readonly uIEditIcon: Locator;
    readonly uIEffortsGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIAddNewEffort = page.locator('#tabLead_tmpl2_usrLeadEffort_btnAddNotes');
        this.uIEditIcon = page.locator('#imgLoading');
        this.uIEffortsGrid = page.locator('#tabLead_tmpl2_usrLeadEffort_grdLog');
    }

    async clickAddNewEffortTab(): Promise<void> {
        await this.uIAddNewEffort.click();
    }

    async verifyAtInvestigatorPFInGrid(): Promise<void> {
        const text = await this.uIEffortsGrid.innerText();
        expect(text).toContain(BaseData.getCMModuleValue('PF'));
    }

    async clickEditIcon(): Promise<void> {
        await this.uIEditIcon.click();
    }

    async verifyAtActivityCodeInGrid(): Promise<void> {
        const text = await this.uIEffortsGrid.innerText();
        expect(text).toContain(BaseData.getCMModuleValue('ActivityCode'));
    }
}

export class LeadEffortPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIInvestigatorLabel: Locator;
    readonly uIEffortsCategoryLabel: Locator;
    readonly uIEffortsActivityLabel: Locator;
    readonly uIDateTimeStartedLabel: Locator;
    readonly uIInvestigatorEdit: Locator;
    readonly uIEffortsCategoryDropdown: Locator;
    readonly uIEffortsActivityDropdown: Locator;
    readonly uIDateStartedEdit: Locator;
    readonly uITimeStartedEdit: Locator;
    readonly uIDateFinishedEdit: Locator;
    readonly uITimeFinishedEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uIDeleteIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIInvestigatorLabel = page.locator('#lblInves');
        this.uIEffortsCategoryLabel = page.locator('#lblCategory');
        this.uIEffortsActivityLabel = page.locator('#lblActivity');
        this.uIDateTimeStartedLabel = page.locator('#lblStartTime');
        this.uIInvestigatorEdit = page.locator('#lupOfficers_CodeValue');
        this.uIEffortsCategoryDropdown = page.locator('#lupCategory_DropDown');
        this.uIEffortsActivityDropdown = page.locator('#CddActivity');
        this.uIDateStartedEdit = page.locator('#dttmStart_Date_KPIDttmCtrl');
        this.uITimeStartedEdit = page.locator("//table[@id='dttmStart_Time']//input");
        this.uIDateFinishedEdit = page.locator('#dttmFinished_Date_KPIDttmCtrl');
        this.uITimeFinishedEdit = page.locator("//table[@id='dttmFinished_Time']//input");
        this.uISaveButton = page.locator('#cmdInternalSave');
        this.uIDeleteIcon = page.locator('#DeleteLeadMgmtEffort');
    }

    async verifyInvestigatorIsMandatory(): Promise<void> {
        const color = await this.uIInvestigatorLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(153, 0, 0, 1)');
    }

    async verifyEffortsCategoryIsMandatory(): Promise<void> {
        const color = await this.uIEffortsCategoryLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(153, 0, 0, 1)');
    }

    async verifyEffortsActivityIsMandatory(): Promise<void> {
        const color = await this.uIEffortsActivityLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(153, 0, 0, 1)');
    }

    async verifyDateTimeStartedIsMandatory(): Promise<void> {
        const color = await this.uIDateTimeStartedLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(153, 0, 0, 1)');
    }

    async enterAtInvestigator(): Promise<void> {
        await this.uIInvestigatorEdit.fill(BaseData.getCMModuleValue('Investigator'));
    }

    async selectAtEffortsCategory(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIEffortsCategoryDropdown, BaseData.getCMModuleValue('EffortsCategory'));
        await this.uIEffortsCategoryDropdown.press('Tab');
    }

    async selectAtEffortsActivity(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIEffortsActivityDropdown, BaseData.getCMModuleValue('EffortsActivity'));
    }

    async tabDateTimeStarted(): Promise<void> {
        await this.uIDateStartedEdit.press('Tab');
        await this.uITimeStartedEdit.press('Tab');
    }

    async enterDateTimeFinished(): Promise<void> {
        await this.uIDateFinishedEdit.fill(DateHelpers.getCurrentDate());
        await this.uITimeFinishedEdit.fill(DateHelpers.getCurrentTime());
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
        await this.page.waitForTimeout(1000);
    }

    async deleteEffort(): Promise<void> {
        await this.uIDeleteIcon.click();
        await this.popup.confirmYesButton.click();
    }
}

export class LeadEntryHistoryTabPage {
    readonly page: Page;
    readonly uILeadRadiobutton: Locator;
    readonly uIEffortsRadiobutton: Locator;
    readonly uILocationRadiobutton: Locator;
    readonly uITaskRadiobutton: Locator;
    readonly uINamesRadiobutton: Locator;
    readonly uIVehicleRadiobutton: Locator;
    readonly uIShowAllRadiobutton: Locator;
    readonly uIHistoryTabGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uILeadRadiobutton = page.locator("//label[contains(text(),'Lead')]/preceding-sibling::input");
        this.uIEffortsRadiobutton = page.locator("//label[contains(text(),'Efforts')]/preceding-sibling::input");
        this.uILocationRadiobutton = page.locator("//label[contains(text(),'Location')]/preceding-sibling::input");
        this.uITaskRadiobutton = page.locator("//label[contains(text(),'Task')]/preceding-sibling::input");
        this.uINamesRadiobutton = page.locator("//label[contains(text(),'Names')]/preceding-sibling::input");
        this.uIVehicleRadiobutton = page.locator("//label[contains(text(),'Vehicle')]/preceding-sibling::input");
        this.uIShowAllRadiobutton = page.locator("//label[contains(text(),'Show All')]/preceding-sibling::input");
        this.uIHistoryTabGrid = page.locator('#grdHistory1');
    }

    async clickLeadRadioButton(): Promise<void> {
        await this.uILeadRadiobutton.click();
    }

    async verifyAtLeadOutcome(): Promise<void> {
        const text = await this.uIHistoryTabGrid.innerText();
        expect(text).toContain('Lead OutCome: ' + BaseData.getCMModuleValue('LeadOutcome'));
    }

    async clickEffortsRadioButton(): Promise<void> {
        await this.uIEffortsRadiobutton.click();
    }

    async clickLocationRadioButton(): Promise<void> {
        await this.uILocationRadiobutton.click();
    }

    async clickTaskRadioButton(): Promise<void> {
        await this.uITaskRadiobutton.click();
    }

    async clickNamesRadioButton(): Promise<void> {
        await this.uINamesRadiobutton.click();
    }

    async clickVehicleRadioButton(): Promise<void> {
        await this.uIVehicleRadiobutton.click();
    }

    async clickShowAllRadioButton(): Promise<void> {
        await this.uIShowAllRadiobutton.click();
    }

    async verifyAtLeadProvidedBy(): Promise<void> {
        const text = await this.uIHistoryTabGrid.innerText();
        expect(text).toContain('Lead Provided By: ' + BaseData.getCMModuleValue('LeadProvidedBy'));
    }

    async verifyAtAssignToPFInGrid(): Promise<void> {
        const text = await this.uIHistoryTabGrid.innerText();
        expect(text).toContain('Assign To PF: ' + BaseData.getCMModuleValue('AssignedToPF'));
    }

    async verifyAtTaskInGrid(): Promise<void> {
        const text = await this.uIHistoryTabGrid.innerText();
        expect(text).toContain('Task: ' + BaseData.getCMModuleValue('TaskCode'));
    }

    async verifyAtTaskDeletedInGrid(): Promise<void> {
        const text = await this.uIHistoryTabGrid.innerText();
        expect(text).toContain(BaseData.getCMModuleValue('TaskCode') + ' Deleted');
    }

    async verifyAtNameInGrid(): Promise<void> {
        const text = await this.uIHistoryTabGrid.innerText();
        expect(text).toContain(BaseData.getCMModuleValue('Name'));
    }

    async verifyNameDeletedInGrid(): Promise<void> {
        const text = await this.uIHistoryTabGrid.innerText();
        expect(text).toContain(BaseData.getCMModuleValue('Name') + ' Deleted');
    }

    async verifyAtAddressInGrid(): Promise<void> {
        const text = await this.uIHistoryTabGrid.innerText();
        expect(text).toContain(BaseData.getCMModuleValue('Address'));
    }

    async verifyAddressDeletedInGrid(): Promise<void> {
        const text = await this.uIHistoryTabGrid.innerText();
        expect(text).toContain('Address Deleted ' + BaseData.getCMModuleValue('Address'));
    }

    async verifyAtInvestigatorPFInGrid(): Promise<void> {
        const text = await this.uIHistoryTabGrid.innerText();
        expect(text).toContain('Investigator : ' + BaseData.getCMModuleValue('PF'));
    }

    async verifyAtActivityCodeInGrid(): Promise<void> {
        const text = await this.uIHistoryTabGrid.innerText();
        expect(text).toContain('Activity Code : ' + BaseData.getCMModuleValue('ActivityCode'));
    }

    async verifyEffortsDeletedInGrid(): Promise<void> {
        const text = await this.uIHistoryTabGrid.innerText();
        expect(text).toContain('Deleted By : ');
    }

    async verifyAtVehicleInGrid(): Promise<void> {
        const text = await this.uIHistoryTabGrid.innerText();
        expect(text).toContain('Vehicle : ' + BaseData.getCMModuleValue('Vehicle'));
    }

    async verifyPlateDeletedInGrid(): Promise<void> {
        const text = await this.uIHistoryTabGrid.innerText();
        expect(text).toContain(BaseData.getCMModuleValue('Vehicle') + ' Deleted');
    }
}

export class LeadEntryNamesTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uINameTypeEdit: Locator;
    readonly uINameIDEdit: Locator;
    readonly uINamesTabGrid: Locator;
    readonly uIActivityDropdown: Locator;
    readonly uIAddButton: Locator;
    readonly uISaveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uINameTypeEdit = page.locator('#nmcIncident_NameType');
        this.uINameIDEdit = page.locator('#nmcIncident_NameTypeID');
        this.uINamesTabGrid = page.locator('#grdCBENames');
        this.uIActivityDropdown = page.locator('#cddActivity_DropDown');
        this.uIAddButton = page.locator('#imgAddName');
        this.uISaveButton = page.locator('#cmdInternalSave');
    }

    async enterAtNameID(): Promise<void> {
        const nameId = BaseData.getCMModuleValue('NameID');
        await this.uINameTypeEdit.fill(nameId.substring(0, 1));
        await this.uINameIDEdit.fill(nameId.substring(2));
        await this.uINameIDEdit.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifyAtNameInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uINamesTabGrid, BaseData.getCMModuleValue('Name'));
        expect(await cell.innerText()).toBe(BaseData.getCMModuleValue('Name'));
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async deleteRowByNameInGrid(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uINamesTabGrid, BaseData.getCMModuleValue('Name'));
        await this.popup.confirmYesButton.click();
    }

    async verifyActivityIsDisabled(): Promise<void> {
        await expect(this.uIActivityDropdown).toBeDisabled();
    }

    async selectActivity(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIActivityDropdown, 1);
    }
}

export class LeadEntryVehicleTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIVehiclePlateNoEdit: Locator;
    readonly uIVehicleStateDropdown: Locator;
    readonly uIAddButton: Locator;
    readonly uISaveButton: Locator;
    readonly uIVehicleTabGrid: Locator;
    readonly uIActivityDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIVehiclePlateNoEdit = page.locator('#pltVehicle_PlateNumber');
        this.uIVehicleStateDropdown = page.locator('#pltVehicle_KPIState');
        this.uIAddButton = page.locator('#imgAdd');
        this.uISaveButton = page.locator('#cmdInternalSave');
        this.uIVehicleTabGrid = page.locator('#grdVehicle');
        this.uIActivityDropdown = page.locator('#cddActivity_DropDown');
    }

    async enterAtVehicleNo(): Promise<void> {
        await this.uIVehiclePlateNoEdit.fill(BaseData.getCMModuleValue('PlateNo'));
        await this.elementHelpers.selectDropDownOption(this.uIVehicleStateDropdown, BaseData.getCMModuleValue('VehicleState'));
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async verifyAtPlate(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIVehicleTabGrid, BaseData.getCMModuleValue('PlateNo'));
        expect(await cell.innerText()).toBe(BaseData.getCMModuleValue('Plate'));
    }

    async deleteRowByPlateInGrid(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uIVehicleTabGrid, BaseData.getCMModuleValue('PlateNo'));
        await this.popup.confirmYesButton.click();
    }

    async selectAtActivity(): Promise<void> {
        await this.uIActivityDropdown.fill(BaseData.getCMModuleValue('Activity'));
    }
}

export class CaseSrchNewPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uICaseSrchNewGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uICaseSrchNewGrid = page.locator('#grdCases');
    }

    async verifyAtInvestNoInGrid(investNo: string): Promise<void> {
        const cell = await this.grid.getGridCell(this.uICaseSrchNewGrid, investNo);
        expect(await cell.innerText()).toBe(investNo);
    }
}

export class CMPage {
    readonly page: Page;
    private browserHelpers: BrowserHelpers;

    constructor(page: Page) {
        this.page = page;
        this.browserHelpers = new BrowserHelpers(page);
    }

    async switchToCMSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmCaseSrchNew');
    }

    async switchToCMSearchWindow(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('CM Search');
    }

    async switchToCaseFolder(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Case Folder');
    }

    async switchToCaseReview(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Case Review');
    }

    async switchToCaseEfforts(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Case Efforts');
    }

    async switchToMOSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmMOSrch');
    }

    async switchToCaseFolderScreenTab(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Case Folder');
    }

    async switchToCMSchedulerScreenTab(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('CM Scheduler');
    }

    async switchToTaskUpadte(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Task Update');
    }

    async switchToLeadManagement(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Lead Management');
    }

    async switchToLeadEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Lead Entry');
    }

    async switchToLeadTask(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Lead Task');
    }

    async switchToLeadManagementSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('CaseMgmt/frmLeadMgmtSearch');
    }

    async switchToDefaultTask(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmDefaultTask.aspx');
    }

    async switchToLeadEffort(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Lead Effort');
    }

    async switchToCMSearchHelpWindow(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmCaseSrchNew.aspx');
    }
}
