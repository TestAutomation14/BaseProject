import { Page, Locator, expect } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { AcknowledgePage, ConfirmPage, PopupPage } from '../popup.page';
import { BaseData } from '../../data/base-data';
// import { BaseData } from '../../data/police-data';
import { GridHelpers } from '../../helpers/grid-helpers';
import { ElementHelpers } from '../../helpers/element-helpers';
import { PopupHelpers } from '../../helpers/popup-helpers';
import { DateHelpers, RandomHelpers } from '../../helpers';

export class FTOPage {
    readonly page: Page;
    readonly browserHelpers: BrowserHelpers;

    constructor(page: Page) {
        this.page = page;
        this.browserHelpers = new BrowserHelpers(page);
    }

    async Reset(): Promise<void> {
        // State is managed by Playwright fixture lifecycle
    }

    async switchToTraineeSearch(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('Trainee Search');
    }

    async switchToFTOEvalForm(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('frmSetupFormLoaderSrch.aspx?');
    }

    async switchToEvaluationFormEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Evaluation Form Enrty');
    }

    async switchToFTOCritique(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('frmCritiqueSrch.aspx?');
    }

    async switchToFTOCritiqueEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('FTO Critique Entry');
    }

    async switchToTaskEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Task Enrty');
    }

    async switchToDOREntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('DOR Entry');
    }

    async switchToEvaluationFormCategoryEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmCategoryEntry.aspx?');
    }

    async switchToAddTaskEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmAddTask.aspx?');
    }

    async switchToActivityEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Activity Enrty');
    }

    async switchToComments(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmComments.aspx?');
    }

    async switchToFTOFormsConfig(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('frmSetupFormLoaderSrch.aspx?');
    }

    async switchToFTOTasksConfig(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('FTO/frmTaskSrch.aspx?');
    }

    async switchToFTOTasksConfigEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('FTO Tasks Config');
    }

    async switchToFTOActivityEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('FTO Activity Entry');
    }

    async switchToTraineeEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Trainee Entry');
    }

    async switchToChecklistEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Checklist Entry');
    }

    async switchToFtoTest(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('FTO Test');
    }
}

export class TraineeSearchPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIResetButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIBackButton: Locator;
    readonly uIUnlockButton: Locator;
    readonly uIMJRolesButton: Locator;
    readonly uISearchButton: Locator;
    readonly uITraineePFCodeValue: Locator;
    readonly uITraineePFCodeDescription: Locator;
    readonly uIFTOPFCodeValue: Locator;
    readonly uIFTOPFCodeDescription: Locator;
    readonly uITraineeSearchResultGrid: Locator;
    readonly uIFTOYearEdit: Locator;
    readonly uIFTONoEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIDateFromEdit: Locator;
    readonly uIDateToEdit: Locator;
    readonly uITrainingTypeDropdown: Locator;
    readonly uIEvaluationFormDropdown: Locator;
    readonly uIPendingReviewByCoordinatorCheckbox: Locator;
    readonly uIPendingReviewBySupervisorCheckbox: Locator;
    readonly uITerminatedCheckbox: Locator;
    readonly uIRetainedCheckbox: Locator;
    readonly uIApprovalStatusDropdown: Locator;
    readonly uIPrintIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIRefreshButton = page.locator("//span[contains(text(),'Refresh')]");
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uIUnlockButton = page.locator("//span[contains(text(),'Unlock')]");
        this.uIMJRolesButton = page.locator("//span[contains(text(),'MJ Roles')]");
        this.uISearchButton = page.locator("//span[contains(text(),'Search')]");
        this.uITraineePFCodeValue = page.locator('#lupOffTraineePF_CodeValue');
        this.uITraineePFCodeDescription = page.locator('#lupOffTraineePF_CodeDescription');
        this.uIFTOPFCodeValue = page.locator('#lupOffFTOPF_CodeValue');
        this.uIFTOPFCodeDescription = page.locator('#lupOffFTOPF_CodeDescription');
        this.uITraineeSearchResultGrid = page.locator('#grdTraineeSrch');
        this.uIFTOYearEdit = page.locator('#nbrFTONumber_Year');
        this.uIFTONoEdit = page.locator('#nbrFTONumber_Number');
        this.uIFirstNameEdit = page.locator('#txtFirstName');
        this.uILastNameEdit = page.locator('#txtLastName');
        this.uIDateFromEdit = page.locator('#dtmfrm_KPIDttmCtrl');
        this.uIDateToEdit = page.locator('#dtmTo_KPIDttmCtrl');
        this.uITrainingTypeDropdown = page.locator('#cmdTrainingType_DropDown');
        this.uIEvaluationFormDropdown = page.locator('#cddEvalform');
        this.uIPendingReviewByCoordinatorCheckbox = page.locator('#chkCoordinator');
        this.uIPendingReviewBySupervisorCheckbox = page.locator('#chkSupervisor');
        this.uITerminatedCheckbox = page.locator('#chkTerminated');
        this.uIRetainedCheckbox = page.locator('#chkRetained');
        this.uIApprovalStatusDropdown = page.locator('#cddApprovalStatus');
        this.uIPrintIcon = page.locator("//img[contains(@src, 'print.gif') and @Title='Print']");
    }

    async mouseOverBackButton(): Promise<void> {
        await this.uIBackButton.hover();
    }

    async mouseOverAddNewButton(): Promise<void> {
        await this.uIAddNewButton.hover();
    }

    async mouseOverResetButton(): Promise<void> {
        await this.uIResetButton.hover();
    }

    async mouseOverSearchButton(): Promise<void> {
        await this.uISearchButton.hover();
    }

    async verifyAtBackToolTip(): Promise<void> {
        const title = await this.uIBackButton.getAttribute('title') || '';
        expect(title).toContain(BaseData.getPersonnelModuleValue('Back'));
    }

    async verifyAtAddNewToolTip(): Promise<void> {
        const title = await this.uIAddNewButton.getAttribute('title') || '';
        expect(title).toContain(BaseData.getPersonnelModuleValue('AddNew'));
    }

    async verifyAtResetToolTip(): Promise<void> {
        const title = await this.uIResetButton.getAttribute('title') || '';
        expect(title).toContain(BaseData.getPersonnelModuleValue('Reset'));
    }

    async verifyAtSearchToolTip(): Promise<void> {
        const title = await this.uISearchButton.getAttribute('title') || '';
        expect(title).toContain(BaseData.getPersonnelModuleValue('Search'));
    }

    async verifyAtTraineePFAndDisabled(): Promise<void> {
        expect(await this.uITraineePFCodeValue.inputValue()).toBe(BaseData.getTestValue('TraineePF'));
        expect(await this.uITraineePFCodeDescription.inputValue()).toBe(BaseData.getTestValue('TraineePFName'));
        await expect(this.uITraineePFCodeValue).toHaveAttribute('readonly', /.*/);
        await expect(this.uITraineePFCodeDescription).toHaveAttribute('readonly', /.*/);
    }

    async verifyAtFTOPFAndDisabled(): Promise<void> {
        expect(await this.uIFTOPFCodeValue.inputValue()).toBe(BaseData.getTestValue('FTOPF'));
        expect(await this.uIFTOPFCodeDescription.inputValue()).toBe(BaseData.getTestValue('FTOPFName'));
        await expect(this.uIFTOPFCodeValue).toHaveAttribute('readonly', /.*/);
        await expect(this.uIFTOPFCodeDescription).toHaveAttribute('readonly', /.*/);
    }

    async verifyTraineePFIsEmptyAndNotDisabled(): Promise<void> {
        expect(await this.uITraineePFCodeValue.inputValue()).toBe('');
        expect(await this.uITraineePFCodeDescription.inputValue()).toBe('');
        await expect(this.uITraineePFCodeValue).toBeEnabled();
    }

    async verifyFTOPFIsEmptyAndNotDisabled(): Promise<void> {
        expect(await this.uIFTOPFCodeValue.inputValue()).toBe('');
        expect(await this.uIFTOPFCodeDescription.inputValue()).toBe('');
        await expect(this.uIFTOPFCodeValue).toBeEnabled();
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async verifyAtPFCodeAsTraineePFInGrid(i: number): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uITraineeSearchResultGrid, 'PF Code');
        expect(columnValues).toContain(BaseData.getTestValue(`TraineePF${i}`));
    }

    async verifyAtTraineeNameAsTraineePFNameInGrid(i: number): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uITraineeSearchResultGrid, 'Trainee Name');
        expect(columnValues).toContain(BaseData.getTestValue(`TraineePFName${i}`));
    }

    async verifyAtFTOPFNameInGrid(i: number): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uITraineeSearchResultGrid, 'FTO');
        expect(columnValues).toContain(BaseData.getTestValue(`FTOPFName${i}`));
    }

    async selectAtFTOInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uITraineeSearchResultGrid, BaseData.getTestValue('FTO'));
    }

    async selectAtFTONoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uITraineeSearchResultGrid, BaseData.getTestValue('FTONo'));
    }

    async enterAtFTONo(): Promise<void> {
        const ftoNo = BaseData.getTestValue('FTONo');
        await this.uIFTOYearEdit.fill(ftoNo.substring(0, 2));
        await this.uIFTONoEdit.fill(ftoNo.substring(2));
    }

    async verifyAtFTONoInGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uITraineeSearchResultGrid, 'FTO#');
        expect(columnValues).toContain(BaseData.getTestValue('FTONo'));
    }

    async clickBackButton(): Promise<void> {
        await this.uIBackButton.click();
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async enterAtTraineePF(): Promise<void> {
        await this.uITraineePFCodeValue.fill(BaseData.getTestValue('TraineePFCode'));
        await this.uITraineePFCodeValue.press('Tab');
    }

    async verifyAtTraineePFInGrid(): Promise<void> {
        const pfCode = await this.grid.getGridTableColumnValues(this.uITraineeSearchResultGrid, 'PF Code');
        expect(pfCode).toContain(BaseData.getTestValue('TraineePFCode'));
    }

    async enterAtFirstName(): Promise<void> {
        await this.uIFirstNameEdit.fill(BaseData.getTestValue('FirstName'));
        await this.uIFirstNameEdit.press('Tab');
    }

    async verifyAtTraineeNameContainsFirstNameInGrid(): Promise<void> {
        const traineeName = await this.grid.getGridTableColumnValues(this.uITraineeSearchResultGrid, 'Trainee Name');
        const expected = ` ${BaseData.getTestValue('FirstName')}-${BaseData.getTestValue('TraineePFCode')}`;
        expect(traineeName[0]).toContain(expected);
    }

    async enterAtLastName(): Promise<void> {
        await this.uILastNameEdit.fill(BaseData.getTestValue('LastName'));
        await this.uILastNameEdit.press('Tab');
    }

    async verifyAtTraineeNameContainsLastNameInGrid(): Promise<void> {
        const traineeName = await this.grid.getGridTableColumnValues(this.uITraineeSearchResultGrid, 'Trainee Name');
        expect(traineeName[0]).toContain(BaseData.getTestValue('LastName'));
    }

    async enterAtDateFrom(): Promise<void> {
        await this.uIDateFromEdit.fill(BaseData.getTestValue('DateFrom'));
        await this.uIDateFromEdit.press('Tab');
    }

    async verifyAtStartDateIsGreaterOrEqualFromDate(): Promise<void> {
        const startDates = await this.grid.getGridTableColumnValues(this.uITraineeSearchResultGrid, 'Start Date');
        const fromDate = new Date(BaseData.getTestValue('DateFrom')).getTime();
        for (const date of startDates.filter((d: string) => d.trim() !== '')) {
            expect(new Date(date).getTime()).toBeGreaterThanOrEqual(fromDate);
        }
    }

    async enterAtDateTo(): Promise<void> {
        await this.uIDateToEdit.fill(BaseData.getTestValue('DateTo'));
        await this.uIDateToEdit.press('Tab');
    }

    async verifyAtEndDateIsLessOrEqualToDate(): Promise<void> {
        const endDates = await this.grid.getGridTableColumnValues(this.uITraineeSearchResultGrid, 'End Date');
        const toDate = new Date(BaseData.getTestValue('DateTo')).getTime();
        for (const date of endDates.filter((d: string) => d.trim() !== '')) {
            expect(new Date(date).getTime()).toBeLessThanOrEqual(toDate);
        }
    }

    async enterAtDateFromAndDateTo(): Promise<void> {
        await this.uIDateFromEdit.fill(BaseData.getTestValue('DateFrom'));
        await this.uIDateFromEdit.press('Tab');
        await this.uIDateToEdit.fill(BaseData.getTestValue('DateTo'));
        await this.uIDateToEdit.press('Tab');
    }

    async verifyAtStartDateIsBetweenFromAndToDate(): Promise<void> {
        const startDates = await this.grid.getGridTableColumnValues(this.uITraineeSearchResultGrid, 'Start Date');
        const fromDate = new Date(BaseData.getTestValue('DateFrom')).getTime();
        const toDate = new Date(BaseData.getTestValue('DateTo')).getTime();
        for (const date of startDates.filter((d: string) => d.trim() !== '')) {
            const time = new Date(date).getTime();
            expect(time).toBeGreaterThanOrEqual(fromDate);
            expect(time).toBeLessThanOrEqual(toDate);
        }
    }

    async verifyAtToDateIsBetweenFromAndToDate(): Promise<void> {
        const endDates = await this.grid.getGridTableColumnValues(this.uITraineeSearchResultGrid, 'End Date');
        const fromDate = new Date(BaseData.getTestValue('DateFrom')).getTime();
        const toDate = new Date(BaseData.getTestValue('DateTo')).getTime();
        for (const date of endDates.filter((d: string) => d.trim() !== '')) {
            const time = new Date(date).getTime();
            expect(time).toBeGreaterThanOrEqual(fromDate);
            expect(time).toBeLessThanOrEqual(toDate);
        }
    }

    async selectAtTrainingType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITrainingTypeDropdown, BaseData.getTestValue('TrainingType'));
    }

    async verifyAtFTOTraningTypeInGrid(): Promise<void> {
        const trainingType = await this.grid.getGridTableColumnValues(this.uITraineeSearchResultGrid, 'FTO Training Type');
        expect(trainingType).toContain(BaseData.getTestValue('TrainingType'));
    }

    async selectAtEvaluationForm(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIEvaluationFormDropdown, BaseData.getTestValue('EvaluationForm'));
    }

    async clickPendingReviewBySupervisorCheckbox(): Promise<void> {
        await this.uIPendingReviewBySupervisorCheckbox.click();
    }

    async clickTerminatedCheckbox(): Promise<void> {
        await this.uITerminatedCheckbox.click();
    }

    async verifyTerminationListedInFinalColumnInGrid(): Promise<void> {
        const outcome = await this.grid.getGridTableColumnValues(this.uITraineeSearchResultGrid, 'Final');
        expect(outcome).toContain('Termination');
    }

    async clickRetainedCheckbox(): Promise<void> {
        await this.uIRetainedCheckbox.click();
    }

    async verifyRetainListedInFinalColumnInGrid(): Promise<void> {
        const outcome = await this.grid.getGridTableColumnValues(this.uITraineeSearchResultGrid, 'Final');
        expect(outcome).toContain('Retain');
    }

    async selectAtApprovalStatus(i: number): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIApprovalStatusDropdown, BaseData.getTestValue(`ApprovalStatus${i}`));
    }

    async verifyAtApprovalStatusInGrid(i: number): Promise<void> {
        const approvalStatus = await this.grid.getGridTableColumnValues(this.uITraineeSearchResultGrid, 'Status ');
        const expected = BaseData.getTestValue(`ApprovalStatus${i}`);
        if (expected.toLowerCase() === 'onhold') {
            expect(approvalStatus).toContain('');
        } else {
            expect(approvalStatus).toContain(expected);
        }
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async verifyAddNewIsDisabled(): Promise<void> {
        expect(await this.uIAddNewButton.getAttribute('unselectable')).toBe('on');
    }

    async verifyTraineeEntryWindowOpened(): Promise<void> {
        const isOpened = await new BrowserHelpers(this.page).windowExistsByTitle('Trainee Entry');
        expect(isOpened).toBe(true);
    }

    async verifyTraineeEntryWindownNotOpened(): Promise<void> {
        const isOpened = await new BrowserHelpers(this.page).windowExistsByTitle('Trainee Entry');
        expect(isOpened).toBe(false);
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }
}

export class FTOEvalFormPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uISearchButton: Locator;
    readonly uIAddNewEvaluationButton: Locator;
    readonly uIAddNewTaskButton: Locator;
    readonly uITaskResultGrid: Locator;
    readonly uIFormTypeDropDown: Locator;
    readonly uIEvaluationCheckBox: Locator;
    readonly uITaskCheckBox: Locator;
    readonly uISampleCheckBox: Locator;
    readonly uIIncludeInactiveCheckBox: Locator;
    readonly uIExcelIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uISearchButton = page.locator('#btnsrch');
        this.uIAddNewEvaluationButton = page.locator('#cmdAddEvaluation');
        this.uIAddNewTaskButton = page.locator('#btnTask');
        this.uITaskResultGrid = page.locator('#grdTask');
        this.uIFormTypeDropDown = page.locator('#Trainingtype_DropDown');
        this.uIEvaluationCheckBox = page.locator('#chkEvaluation');
        this.uITaskCheckBox = page.locator('#chkIsLocked');
        this.uISampleCheckBox = page.locator('#chkSample');
        this.uIIncludeInactiveCheckBox = page.locator('#chkInActive');
        this.uIExcelIcon = page.locator("//img[contains(@src,'excel.gif')]");
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async selectAtGridRowByFormName(i?: number): Promise<void> {
        const formName = i !== undefined ? BaseData.getTestValue(`FormName${i}`) : BaseData.getTestValue('EvaluationForm');
        await this.grid.selectRowByCellText(this.uITaskResultGrid, formName);
    }

    async selectAtFormType(i: number): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIFormTypeDropDown, BaseData.getTestValue(`FormType${i}`));
    }

    async verifyAtFormTypeInGrid(i: number): Promise<void> {
        const expected = BaseData.getTestValue(`FormType${i}`);
        const cell = await this.grid.getGridCell(this.uITaskResultGrid, expected, "");
        expect((await cell.innerText()).trim()).toBe(expected);
    }

    async clickEvaluationCheckBox(): Promise<void> {
        await this.uIEvaluationCheckBox.click();
    }

    async clickTaskCheckBox(): Promise<void> {
        await this.uITaskCheckBox.click();
    }

    async clickSampleCheckBox(): Promise<void> {
        await this.uISampleCheckBox.click();
    }

    async verifySampleInGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uITaskResultGrid, 'Sample');
        for (const sample of columnValues) {
            expect(sample).toContain('Yes');
        }
    }

    async clickIncludeInactiveCheckBox(): Promise<void> {
        await this.uIIncludeInactiveCheckBox.click();
    }

    async verifyAtInactiveRowIngrid(): Promise<void> {
        const row = await this.grid.getRowByCellText(this.uITaskResultGrid, BaseData.getTestValue('FormName'));
        const color = await row.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(128, 128, 128, 1)');
    }

    async clickAddNewEvaluationButton(): Promise<void> {
        await this.uIAddNewEvaluationButton.click();
    }

    async clickAddNewTaskButton(): Promise<void> {
        await this.uIAddNewTaskButton.click();
    }

    async verifyAtFormNameInGrid(i: number): Promise<void> {
        const expected = BaseData.getTestValue(`FormName${i}`);
        const cell = await this.grid.getGridCell(this.uITaskResultGrid, expected, "");
        expect((await cell.innerText()).trim()).toBe(expected);
    }

    async verifyAtInactiveRowInGridByDescription(): Promise<void> {
        const row = await this.grid.getRowByCellText(this.uITaskResultGrid, BaseData.getTestValue('Description'));
        const color = await row.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(128, 128, 128, 1)');
    }

    async clickExcelIcon(): Promise<void> {
        await this.uIExcelIcon.click();
    }
}

export class EvaluationFormEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIEvaluationFormTypeDropdown: Locator;
    readonly uIEvaluationFormNameEdit: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uICopyAndCreateNewFormButton: Locator;
    readonly uIUseForFTOCritiqueCheckbox: Locator;
    readonly uICategoryTab: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIColumnsTab: Locator;
    readonly uICategoryGroupTab: Locator;
    readonly uIGuidelinesTab: Locator;
    readonly uIInactivecheckbox: Locator;
    readonly uISaveAndAddNewButton: Locator;
    readonly uISampleNotesLabel: Locator;
    readonly uIUseScoringCheckBox: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIResetIcon: Locator;
    readonly uIAttachmentTab: Locator;
    readonly uIUseForDORCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIEvaluationFormTypeDropdown = page.locator('#cddFtotriningType_DropDown');
        this.uIEvaluationFormNameEdit = page.locator('#txtEvaluationFormName');
        this.uIDescriptionEdit = page.locator('#txtDescription');
        this.uICopyAndCreateNewFormButton = page.locator('#cmdCopyAndCreateNewForm');
        this.uIUseForFTOCritiqueCheckbox = page.locator('#chkCritique');
        this.uICategoryTab = page.locator("//span[text()='Category']");
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIColumnsTab = page.locator("//span[text()='Columns']");
        this.uICategoryGroupTab = page.locator("//span[text()='Category Group']");
        this.uIGuidelinesTab = page.locator("//span[text()='Guidelines']");
        this.uIInactivecheckbox = page.locator('#chkIsActive');
        this.uISaveAndAddNewButton = page.locator('#cmdSaveNAddNew');
        this.uISampleNotesLabel = page.locator('#lblSamplenotes');
        this.uIUseScoringCheckBox = page.locator('#chkScoring');
        this.uIPrintIcon = page.locator('#cmdPrint');
        this.uIResetIcon = page.locator('#cmdRefresh');
        this.uIAttachmentTab = page.locator("//span[text()='Attachments']");
        this.uIUseForDORCheckbox = page.locator('#chkDor');
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async clickUseForFTOCritique(): Promise<void> {
        await this.uIUseForFTOCritiqueCheckbox.click();
    }

    async switchToCategoryTab(): Promise<void> {
        await this.uICategoryTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmCategoryView.aspx');
    }

    async verifyAtEvaluationFormName(): Promise<void> {
        expect(await this.uIEvaluationFormNameEdit.inputValue()).toBe(BaseData.getTestValue('EvaluationForm'));
    }

    async saveScreen(): Promise<void> {
        await this.elementHelpers.saveWithAccept(this.uISaveButton);
    }

    async saveAndCloseScreen(): Promise<void> {
        await this.elementHelpers.saveAndCloseWithAccept(this.uISaveAndCloseButton);
    }

    async selectAtEvaluationFormType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIEvaluationFormTypeDropdown, BaseData.getTestValue('EvaluationFormType'));
    }

    async enterAtEvaluationFormName(): Promise<void> {
        await this.uIEvaluationFormNameEdit.fill(BaseData.getTestValue('EvaluationFormName'));
    }

    async enterAtDescription(): Promise<void> {
        await this.uIDescriptionEdit.fill(BaseData.getTestValue('Description'));
    }

    async clickColumnsTab(): Promise<void> {
        await this.uIColumnsTab.click();
    }

    async clickCategoryGroupTab(): Promise<void> {
        await this.uICategoryGroupTab.click();
    }

    async switchToGuideLines(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByUrl('frmShowGuideline.aspx?');
    }

    async clickGuidelinesTab(): Promise<void> {
        await this.uIGuidelinesTab.click();
    }

    async clickInactiveCheckbox(): Promise<void> {
        await this.uIInactivecheckbox.click();
    }

    async verifySaveIconIsDisabled(): Promise<void> {
        await expect(this.uISaveButton).toBeDisabled();
    }

    async verifySaveAndCloseIconIsDisabled(): Promise<void> {
        await expect(this.uISaveAndCloseButton).toBeDisabled();
    }

    async verifySaveAndAddNewIconIsDisabled(): Promise<void> {
        await expect(this.uISaveAndAddNewButton).toBeDisabled();
    }

    async verifySampleTextLabelIsDisplayed(): Promise<void> {
        await expect(this.uISampleNotesLabel).toBeVisible();
        expect(await this.uISampleNotesLabel.innerText()).toBe("To utilize this sample form, click 'Copy and Create New Form'");
    }

    async clickCopyAndCreateNewForm(): Promise<void> {
        await this.uICopyAndCreateNewFormButton.click();
    }

    async verifySaveIconIsEnabled(): Promise<void> {
        await expect(this.uISaveButton).toBeEnabled();
    }

    async verifySaveAndCloseIconIsEnabled(): Promise<void> {
        await expect(this.uISaveAndCloseButton).toBeEnabled();
    }

    async verifySaveAndAddNewIconIsEnabled(): Promise<void> {
        await expect(this.uISaveAndAddNewButton).toBeEnabled();
    }

    async clickUseScoringCheckBox(): Promise<void> {
        await this.uIUseScoringCheckBox.click();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verifyAlreadyExistsAcknowlegeMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('Already Exists');
        await this.popup.acknowledgeOk();
    }

    async enterAtEvaluationFormName1(): Promise<void> {
        await this.uIEvaluationFormNameEdit.fill(BaseData.getTestValue('EvaluationFormName1'));
    }

    async verifyFormNameIsNull(): Promise<void> {
        const val = await this.uIEvaluationFormNameEdit.inputValue();
        expect(val.trim()).toBe('');
    }

    async verifyUseForFTOCritiqueCheckboxIsDisabled(): Promise<void> {
        await expect(this.uIUseForFTOCritiqueCheckbox).toBeDisabled();
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async clickResetIcon(): Promise<void> {
        await this.uIResetIcon.click();
    }

    async verifyAtFormType(): Promise<void> {
        const selected = await this.elementHelpers.getDropDownSelectedItem(this.uIEvaluationFormTypeDropdown);
        expect(selected).toBe(BaseData.getTestValue('FormType'));
    }

    async switchToAttachmentTab(): Promise<void> {
        await this.uIAttachmentTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmTxtAttachMgrEx');
    }

    async clickUseForDORCheckbox(): Promise<void> {
        await this.uIUseForDORCheckbox.click();
    }
}

export class EvaluationFormCategoryTabPage {
    readonly page: Page;
    readonly uIAddCategoryButton: Locator;
    readonly uICategoryResultGrid: Locator;
    readonly uIColumnValueDropDown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddCategoryButton = page.locator('#cmdAddCategory');
        this.uICategoryResultGrid = page.locator('#grdCategory');
        this.uIColumnValueDropDown = page.locator("//div[@class='k-list-content k-list-scroller']//ul//li");
    }

    async getCategoriesFromGrid(): Promise<string[]> {
        const values = this.uICategoryResultGrid.locator(".//table//tr[contains(@class,'master-row')]/td/span");
        const count = await values.count();
        const categories: string[] = [];
        for (let i = 0; i < count; i++) {
            categories.push((await values.nth(i).innerText()).trim());
        }
        return categories;
    }

    async clickAddCategoryButton(): Promise<void> {
        await this.uIAddCategoryButton.click();
    }

    async verifyInfoIconToolTipAsViewGuideLines(): Promise<void> {
        const subcategory = this.uICategoryResultGrid.locator(`//div[@id='grdSubCategory']//span[text()='${BaseData.getTestValue('CategoryName')}']`);
        const img = subcategory.locator('..').locator('//img');
        expect(await img.getAttribute('title')).toBe('View Guidelines');
    }

    async clickInfoIconByCategoryName(): Promise<void> {
        const subcategory = this.uICategoryResultGrid.locator(`//div[@id='grdSubCategory']//span[text()='${BaseData.getTestValue('CategoryName')}']`);
        await subcategory.locator('..').locator('//img').click();
    }

    async verifyTheColumnIsGreyedOutByCategoryName(indexOfTheColumn: number): Promise<void> {
        const cell = this.uICategoryResultGrid.locator(`//div[@id='grdSubCategory']//span[text()='${BaseData.getTestValue('CategoryName')}']//ancestor::tr//td[contains(@class,'PointerEvent')][${indexOfTheColumn}]`);
        const bgColor = await cell.evaluate(el => getComputedStyle(el).backgroundColor);
        expect(bgColor).toBe('rgba(222, 223, 238, 1)');
    }

    async verifyAtCategoryInGrid(): Promise<void> {
        const expected = BaseData.getPersonnelModuleValue('Category');
        const category = await this.page.locator(`//span[text()='${expected}']`).innerText();
        expect(category).toBe(expected);
    }

    async verifyAtValueIsListedInGridDropDown(i: number): Promise<void> {
        const dropDownValues = this.page.locator("//div[@class='k-list-content k-list-scroller']//ul//li//span[@class='k-list-item-text']");
        const texts = await dropDownValues.allInnerTexts();
        expect(texts).toContain(BaseData.getTestValue(`AllowedValues${i}`));
    }

    async ClickAtColumnValueInGridUsingCategoryNameAndAllowedValues(categoryName: string, allowedValues: string): Promise<void> {
        const cell = this.uICategoryResultGrid.locator(`//div[@id='grdSubCategory']//span[text()='${categoryName}']//ancestor::tr//td[@title='${allowedValues}' and @class='UppercaseCss k-table-td']`);
        await cell.click();
    }

    async ClickColumnValueDropdownInGrid(): Promise<void> {
        const dropdown = this.page.locator("//span[@class='k-picker k-dropdownlist k-picker-solid k-picker-md k-rounded-md k-valid'] | //span[@class='k-svg-icon k-svg-i-caret-alt-down k-button-icon']");
        await dropdown.first().click();
    }

    async verifyInfoIconToolTipText(): Promise<void> {
        const subcategory = this.uICategoryResultGrid.locator(`//div[@id='grdSubCategory']//span[text()='${BaseData.getTestValue('CategoryName')}']`);
        const img = subcategory.locator('..').locator('//img');
        expect(await img.getAttribute('title')).toBe(BaseData.getTestValue('ToolTipText'));
    }
}

export class EvaluationFormColumnsTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIColumnEdit: Locator;
    readonly uIColumnHeadingEdit: Locator;
    readonly uIAllowedValuesEdit: Locator;
    readonly uIAllowEvaluatorDropdown: Locator;
    readonly uIAllowEvaluateeDropdown: Locator;
    readonly uIAddButton: Locator;
    readonly uIShowRTRemedialTrainingTimeColumnCheckbox: Locator;
    readonly uIShowCommentsAsLastColumnCheckbox: Locator;
    readonly uIWeightedScoreEdit: Locator;
    readonly uIWeightedScoreSaveAndCloseButton: Locator;
    readonly uIGradeGroupCheckbox: Locator;
    readonly uIColumnGrid: Locator;
    readonly uIColorEdit: Locator;
    readonly uIMandateCommentsIfValueEdit: Locator;
    readonly uICharForChartReportEdit: Locator;
    readonly uIColumnWidthEdit: Locator;
    readonly uINotesEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIColumnEdit = page.locator('#tabEvaluationForm_tmpl0_usrRating_txtColumn');
        this.uIColumnHeadingEdit = page.locator('#tabEvaluationForm_tmpl0_usrRating_txtHeading');
        this.uIAllowedValuesEdit = page.locator('#tabEvaluationForm_tmpl0_usrRating_txtAlwval');
        this.uIAllowEvaluatorDropdown = page.locator('#tabEvaluationForm_tmpl0_usrRating_cddallowfto_DropDown');
        this.uIAllowEvaluateeDropdown = page.locator('#tabEvaluationForm_tmpl0_usrRating_cddTraineelist_DropDown');
        this.uIAddButton = page.locator('#tabEvaluationForm_tmpl0_usrRating_cmdAdd');
        this.uIShowRTRemedialTrainingTimeColumnCheckbox = page.locator('#tabEvaluationForm_tmpl0_usrRating_KPICheckBox1');
        this.uIShowCommentsAsLastColumnCheckbox = page.locator('#tabEvaluationForm_tmpl0_usrRating_KPICheckBox2');
        this.uIWeightedScoreEdit = page.locator('#tabEvaluationForm_tmpl0_usrRating_txtScore');
        this.uIWeightedScoreSaveAndCloseButton = page.locator('#tabEvaluationForm_tmpl0_usrRating_btnSaveClose');
        this.uIGradeGroupCheckbox = page.locator('#tabEvaluationForm_tmpl0_usrRating_chkGrade');
        this.uIColumnGrid = page.locator('#tabEvaluationForm_tmpl0_usrRating_grdpanel');
        this.uIColorEdit = page.locator('#tabEvaluationForm_tmpl0_usrRating_txtfillColor');
        this.uIMandateCommentsIfValueEdit = page.locator('#tabEvaluationForm_tmpl0_usrRating_txtMandate');
        this.uICharForChartReportEdit = page.locator('#tabEvaluationForm_tmpl0_usrRating_txtReport');
        this.uIColumnWidthEdit = page.locator('#tabEvaluationForm_tmpl0_usrRating_ColumnWidthTextBox');
        this.uINotesEdit = page.locator('#tabEvaluationForm_tmpl0_usrRating_txtNotes');
    }

    async enterAtColumn(i: number): Promise<void> {
        await this.uIColumnEdit.fill(BaseData.getTestValue(`Column${i}`));
    }

    async enterAtColumnHeading(i: number): Promise<void> {
        await this.uIColumnHeadingEdit.fill(BaseData.getTestValue(`ColumnHeading${i}`));
    }

    async enterAtAllowedValues(i: number): Promise<void> {
        await this.uIAllowedValuesEdit.fill(BaseData.getTestValue(`AllowedValues${i}`));
    }

    async selectAllowEvaluaterAsYes(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIAllowEvaluatorDropdown, 'Yes');
    }

    async selectAllowEvaluaterAsNo(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIAllowEvaluatorDropdown, 'No');
    }

    async selectAllowEvaluateeAsYes(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIAllowEvaluateeDropdown, 'Yes');
    }

    async selectAllowEvaluateeAsNo(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIAllowEvaluateeDropdown, 'No');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async clickShowRTColumnCheckbox(): Promise<void> {
        await this.uIShowRTRemedialTrainingTimeColumnCheckbox.click();
    }

    async clickShowCommentsAsLastColumnCheckbox(): Promise<void> {
        await this.uIShowCommentsAsLastColumnCheckbox.click();
    }

    async tabOutAllowedVales(): Promise<void> {
        await this.uIAllowedValuesEdit.press('Tab');
    }

    async verifyMultipleLabelIsNotPresentInWeightedScoreFeild(): Promise<void> {
        const placeholder = await this.uIWeightedScoreEdit.getAttribute('placeholder') || '';
        expect(placeholder.trim()).toBe('');
    }

    async clearAllowingValuesField(): Promise<void> {
        await this.uIAllowedValuesEdit.clear();
    }

    async tabOutWeightageScoreField(): Promise<void> {
        await this.uIWeightedScoreEdit.press('Tab');
    }

    async verifyAtMultipleLabelInWeightedScorefeild(): Promise<void> {
        const placeholder = await this.uIWeightedScoreEdit.getAttribute('placeholder');
        expect(placeholder).toBe(BaseData.getTestValue('Label'));
    }

    async enterAtScorePercentage(value: string): Promise<void> {
        await this.page.locator(`#txt_${value}`).fill(BaseData.getTestValue('Score'));
    }

    async clickScoreWeightageSaveAndCloseButton(): Promise<void> {
        await this.uIWeightedScoreSaveAndCloseButton.click();
    }

    async selectAtAllowEvaluater(i: number): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIAllowEvaluatorDropdown, BaseData.getTestValue(`AllowEvaluater${i}`));
    }

    async selectAtAllowEvaluatee(i: number): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIAllowEvaluateeDropdown, BaseData.getTestValue(`AllowEvaluatee${i}`));
    }

    async verifyAlreadyAddedAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('Already Added');
        await this.popup.acknowledgeOk();
    }

    async verifyAtColumn(i: number): Promise<void> {
        expect(await this.uIColumnEdit.inputValue()).toBe(BaseData.getTestValue(`Column${i}`));
    }

    async verifyAtColumnHeading(i: number): Promise<void> {
        expect(await this.uIColumnHeadingEdit.inputValue()).toBe(BaseData.getTestValue(`ColumnHeading${i}`));
    }

    async verifyAllowEvaluateeAsYes(): Promise<void> {
        expect(await this.elementHelpers.getDropDownSelectedItem(this.uIAllowEvaluateeDropdown)).toBe('Yes');
    }

    async verifyAllowEvaluaterAsYes(): Promise<void> {
        expect(await this.elementHelpers.getDropDownSelectedItem(this.uIAllowEvaluatorDropdown)).toBe('Yes');
    }

    async clickGradeGroupCheckbox(): Promise<void> {
        await this.uIGradeGroupCheckbox.click();
    }

    async verifyAtColumnHeadingInGrid(): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIColumnGrid, 'Column Heading', 0);
        expect(text).toBe(BaseData.getTestValue('ColumnHeading1'));
    }

    async verifyGradeGroupCheckboxIsCheckedInGrid(): Promise<void> {
        const gridCell = await this.grid.getGridCell(this.uIColumnGrid, BaseData.getTestValue('ColumnHeading1'), 'Grade Grp?');
        const img = gridCell.locator('.//img');
        expect(await img.getAttribute('title')).toBe('Checked');
    }

    async verifyGradeGroupCheckboxNotSelectedAsPartial(): Promise<void> {
        const gridCell = await this.grid.getGridCell(this.uIColumnGrid, BaseData.getTestValue('ColumnHeading1'), 'Grade Grp?');
        const img = gridCell.locator('.//img');
        expect(await img.getAttribute('title')).not.toBe('Partial');
    }

    async enterAtColor(): Promise<void> {
        await this.uIColorEdit.click();
        await this.uIColorEdit.fill(BaseData.getTestValue('Color'));
    }

    async verifyAtColorInGrid(): Promise<void> {
        const gridCell = await this.grid.getGridCell(this.uIColumnGrid, 'Color', 0);
        const val = await gridCell.getAttribute('value') || await gridCell.innerText();
        expect(val).toContain(BaseData.getTestValue('Color'));
    }

    async enterAtMandateCommentsIfValue(): Promise<void> {
        await this.uIMandateCommentsIfValueEdit.fill(BaseData.getTestValue('MandateCommentsIfValue'));
    }

    async enterAtWeightageScoreField(): Promise<void> {
        await this.uIWeightedScoreEdit.fill(BaseData.getTestValue('WeightageScore'));
    }

    async enterAtCharForChartReport(): Promise<void> {
        await this.uICharForChartReportEdit.fill(BaseData.getTestValue('CharForChartReport'));
    }

    async enterAtColumnWidth(): Promise<void> {
        await this.uIColumnWidthEdit.fill(BaseData.getTestValue('ColumnWidth'));
    }

    async enterAtNotes(): Promise<void> {
        await this.uINotesEdit.fill(BaseData.getTestValue('Notes'));
    }

    async verifyAtColumnInGrid(i: number): Promise<void> {
        const gridCell = await this.grid.getGridCell(this.uIColumnGrid, BaseData.getTestValue(`ColumnHeading${i}`), 'Column#');
        expect(await gridCell.innerText()).toBe(BaseData.getTestValue(`Column${i}`));
    }

    async verifyAtAllowedValuesInGrid(i: number): Promise<void> {
        const gridCell = await this.grid.getGridCell(this.uIColumnGrid, BaseData.getTestValue(`ColumnHeading${i}`), 'Allowed Values');
        expect(await gridCell.innerText()).toBe(BaseData.getTestValue(`AllowedValues${i}`));
    }

    async verifyAtMandateCommentsInGrid(i: number): Promise<void> {
        const gridCell = await this.grid.getGridCell(this.uIColumnGrid, BaseData.getTestValue(`ColumnHeading${i}`), 'Mandate Comments');
        expect(await gridCell.innerText()).toBe(BaseData.getTestValue(`MandateComments${i}`));
    }

    async verifyAtWeightageInGrid(i: number): Promise<void> {
        const gridCell = await this.grid.getGridCell(this.uIColumnGrid, BaseData.getTestValue(`ColumnHeading${i}`), 'Weightage');
        expect(await gridCell.innerText()).toBe(BaseData.getTestValue(`Weightage${i}`));
    }

    async verifyAllowEvaluatorAsNoInGrid(i: number): Promise<void> {
        const gridCell = await this.grid.getGridCell(this.uIColumnGrid, BaseData.getTestValue(`ColumnHeading${i}`), 'Allow Evaluator');
        expect(await gridCell.innerText()).toBe('No');
    }

    async verifyAllowEvaluateeAsYesInGrid(i: number): Promise<void> {
        const gridCell = await this.grid.getGridCell(this.uIColumnGrid, BaseData.getTestValue(`ColumnHeading${i}`), 'Allow Evaluatee');
        expect(await gridCell.innerText()).toBe('Yes');
    }

    async verifyAtReportCharInGrid(i: number): Promise<void> {
        const gridCell = await this.grid.getGridCell(this.uIColumnGrid, BaseData.getTestValue(`ColumnHeading${i}`), 'Report Char');
        expect(await gridCell.innerText()).toBe(BaseData.getTestValue(`ReportChar${i}`));
    }

    async verifyAtWidthInGrid(i: number): Promise<void> {
        const gridCell = await this.grid.getGridCell(this.uIColumnGrid, BaseData.getTestValue(`ColumnHeading${i}`), 'Width %');
        expect(await gridCell.innerText()).toBe(BaseData.getTestValue(`Width${i}`));
    }

    async verifyAtNotesInGrid(i: number): Promise<void> {
        const gridCell = await this.grid.getGridCell(this.uIColumnGrid, BaseData.getTestValue(`ColumnHeading${i}`), 'Notes');
        expect(await gridCell.innerText()).toBe(BaseData.getTestValue(`Notes${i}`));
    }

    async verifyGradeGroupCheckboxIsUncheckedInGrid(): Promise<void> {
        const gridCell = await this.grid.getGridCell(this.uIColumnGrid, BaseData.getTestValue('ColumnHeading1'), 'Grade Grp?');
        const img = gridCell.locator('.//img');
        expect(await img.getAttribute('title')).toBe('UnChecked');
    }
}

export class EvaluationFormCategoryGroupTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly uICategoryGroupNameEdit: Locator;
    readonly uISortOrderEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uICategoryGroupResultGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uICategoryGroupNameEdit = page.locator('#tabEvaluationForm_tmpl1_usrCategoryGroup_txtCategoryGroupName');
        this.uISortOrderEdit = page.locator('#tabEvaluationForm_tmpl1_usrCategoryGroup_txtSortOrder');
        this.uIAddButton = page.locator('#tabEvaluationForm_tmpl1_usrCategoryGroup_imgAddCategoryGroupdata');
        this.uICategoryGroupResultGrid = page.locator('#tabEvaluationForm_tmpl1_usrCategoryGroup_grdCategoryGroup');
    }

    async enterAtCategoryGroupName(i: number): Promise<void> {
        await this.uICategoryGroupNameEdit.fill(BaseData.getTestValue(`CategoryGroupName${i}`));
    }

    async enterAtSortOrder(i: number): Promise<void> {
        await this.uISortOrderEdit.fill(BaseData.getTestValue(`SortOrder${i}`));
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifySaveConfirmationPopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(3)Do You Want To Save All Of The Entered Details?');
        await this.popup.confirmYes();
    }

    async clickAddButtonWithConfirmMessage(): Promise<void> {
        await this.uIAddButton.click();
        await this.popup.confirmYes();
    }

    async verifyAtCategoryGroupInGrid(): Promise<void> {
        const gridCell = await this.grid.getGridCell(this.uICategoryGroupResultGrid, BaseData.getPersonnelModuleValue('CategoryGroupName'), "");
        expect(await gridCell.innerText()).toBe(BaseData.getTestValue('CategoryGroupName'));
    }

    async verifyAtSortOrderInGrid(i: number): Promise<void> {
        const gridCell = await this.grid.getGridCell(this.uICategoryGroupResultGrid, BaseData.getPersonnelModuleValue('CategoryGroupName'), 'Sort Order');
        expect(await gridCell.innerText()).toBe(BaseData.getTestValue(`SortOrder${i}`));
    }
}

export class EvaluationFormGuidelinesWindowPage {
    readonly page: Page;
    readonly uITextBox: Locator;
    readonly uICloseButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uITextBox = page.locator('#txtGuidelines');
        this.uICloseButton = page.locator('#btnCloseGuidelines');
    }

    async verifyAtGuidelines(): Promise<void> {
        expect(await this.uITextBox.inputValue()).toBe(BaseData.getTestValue('EvaluationGuidelines'));
    }

    async clickCloseButton(): Promise<void> {
        await this.uICloseButton.click();
    }
}

export class EvaluationFormGuidelinesTabPage {
    readonly page: Page;
    readonly uIRatingInstructionsEdit: Locator;
    readonly uIEvaluatorConsentAndAcceptanceEdit: Locator;
    readonly uIEvaluateeConsentAndAcceptanceEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIRatingInstructionsEdit = page.locator('#tabEvaluationForm_tmpl4_usrGuideline_txtRatinginstruct');
        this.uIEvaluatorConsentAndAcceptanceEdit = page.locator('#tabEvaluationForm_tmpl4_usrGuideline_txtEvaluatorConsent');
        this.uIEvaluateeConsentAndAcceptanceEdit = page.locator('#tabEvaluationForm_tmpl4_usrGuideline_txtEvaluateeConsent');
    }

    async enterAtRatingInstructions(): Promise<void> {
        await this.uIRatingInstructionsEdit.fill(BaseData.getTestValue('RatingInstructions'));
    }

    async enterAtEvaluatorConsentAndAcceptance(): Promise<void> {
        await this.uIEvaluatorConsentAndAcceptanceEdit.fill(BaseData.getTestValue('EvaluatorConsentAndAcceptance'));
    }

    async enterAtEvaluateeConsentAndAcceptance(): Promise<void> {
        await this.uIEvaluateeConsentAndAcceptanceEdit.fill(BaseData.getTestValue('EvaluateeConsentAndAcceptance'));
    }

    async verifyAtRatingInstruction(): Promise<void> {
        expect(await this.uIRatingInstructionsEdit.inputValue()).toBe(BaseData.getTestValue('RatingInstructions'));
    }
}

export class FTOCritiquePage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIAddNewButton: Locator;
    readonly uICritiquePFCodeEdit: Locator;
    readonly uICritiquePFDescriptionEdit: Locator;
    readonly uISearchButton: Locator;
    readonly uIRefFTOYearEdit: Locator;
    readonly uIRefFTONumberEdit: Locator;
    readonly uIDOREdit: Locator;
    readonly uIFTOCritiqueResultGrid: Locator;
    readonly uIResultTable: Locator;
    readonly uIFTOPFCodeEdit: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIExcelIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIAddNewButton = page.locator("//span[text()='Add New']");
        this.uICritiquePFCodeEdit = page.locator('#lupTraineePF_CodeValue');
        this.uICritiquePFDescriptionEdit = page.locator('#lupTraineePF_CodeDescription');
        this.uISearchButton = page.locator('#btnSrch');
        this.uIRefFTOYearEdit = page.locator('#numFTONo_Year');
        this.uIRefFTONumberEdit = page.locator('#numFTONo_Number');
        this.uIDOREdit = page.locator('#Dornum');
        this.uIFTOCritiqueResultGrid = page.locator('#grdCritique');
        this.uIResultTable = page.locator('#grdCritique');
        this.uIFTOPFCodeEdit = page.locator('#lupFTOPF_CodeValue');
        this.uIPrintIcon = page.locator("//img[contains(@src,'print') and @class='igdm_BlueThemeMenuItemHorizontalIcon ']");
        this.uIExcelIcon = page.locator("//img[contains(@src,'excel')]");
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async verifyLoggedCritiquePFIsDisabled(): Promise<void> {
        const classAttr = await this.uICritiquePFCodeEdit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async verifyCritiquePFAsLoggedInPFAndDisabled(): Promise<void> {
        expect(await this.uICritiquePFCodeEdit.inputValue()).toBe(BaseData.getTestValue('UserName'));
        expect(await this.uICritiquePFDescriptionEdit.inputValue()).toBe(BaseData.getTestValue('PFName'));
        await expect(this.uICritiquePFCodeEdit).toHaveAttribute('readonly', /.*/);
        await expect(this.uICritiquePFDescriptionEdit).toHaveAttribute('readonly', /.*/);
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async verifyAtCritiquePFDescription(): Promise<void> {
        expect(await this.uICritiquePFDescriptionEdit.inputValue()).toBe(BaseData.getTestValue('CritiquePFDescription'));
    }

    async verifyAtLoggedCritiquePFInGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uIResultTable, 'Critique By');
        for (const value of columnValues) {
            expect(value).toBe(BaseData.getTestValue('CritiquePFDescription'));
        }
    }

    async verifyCritiquePFIsNotShown(): Promise<void> {
        await expect(this.uICritiquePFCodeEdit).not.toBeVisible();
    }

    async verifyLoggedFTOPFIsDisabled(): Promise<void> {
        const classAttr = await this.uIFTOPFCodeEdit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async verifyAtLoggedFTOPFInGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uIResultTable, 'FTO');
        for (const value of columnValues) {
            expect(value).toBe(BaseData.getTestValue('FTOPFDescription'));
        }
    }

    async verifyRefFTOIsNullInGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uIResultTable, 'Ref FTO#');
        for (const value of columnValues) {
            expect(value).toBe('');
        }
    }

    async verifyDORIsNullInGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uIResultTable, 'DOR#');
        for (const value of columnValues) {
            expect(value).toBe('');
        }
    }

    async verifyCritiqueByColumnNotShownInGrid(): Promise<void> {
        const headerText = await this.uIResultTable.locator('thead tr, tr.ThemeHeader').first().innerText();
        expect(headerText).not.toContain('Critique By');
    }

    async verifyCritiquePFIsEnabled(): Promise<void> {
        await expect(this.uICritiquePFCodeEdit).toBeEnabled();
    }

    async verifyFTOPFIsEnabled(): Promise<void> {
        await expect(this.uIFTOPFCodeEdit).toBeEnabled();
    }

    async verifyCritiqueByColumnIsShownInGrid(): Promise<void> {
        const headerText = await this.uIResultTable.locator('thead tr, tr.ThemeHeader').first().innerText();
        expect(headerText).toContain('Critique By');
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async clickExcelIcon(): Promise<void> {
        await this.uIExcelIcon.click();
    }

    async verifyDocumentDownloaded(): Promise<void> {
        // Handled via Playwright download event helpers
    }

    async verifyCritiquePFFieldIsNotDisplayed(): Promise<void> {
        await expect(this.uICritiquePFCodeEdit).not.toBeVisible();
        await expect(this.uICritiquePFDescriptionEdit).not.toBeVisible();
    }

    async verifyRefFTOFieldIsNotDispalyed(): Promise<void> {
        await expect(this.uIRefFTOYearEdit).not.toBeVisible();
        await expect(this.uIRefFTONumberEdit).not.toBeVisible();
    }

    async verifyDORFieldIsNotDisplayed(): Promise<void> {
        await expect(this.uIDOREdit).not.toBeVisible();
    }

    async verifyRefFTOCoulmnIsNull(): Promise<void> {
        const result = await this.grid.getGridTableColumnValues(this.uIFTOCritiqueResultGrid, 'Ref FTO#');
        for (const val of result) {
            expect(val.trim()).toBe('');
        }
    }

    async verifyRefDORColumnIsNull(): Promise<void> {
        const result = await this.grid.getGridTableColumnValues(this.uIFTOCritiqueResultGrid, 'DOR#');
        for (const val of result) {
            expect(val.trim()).toBe('');
        }
    }

    async selectAtFTOInGrid(critiqueNumber?: string): Promise<void> {
        const searchTarget = critiqueNumber || BaseData.getTestValue('FTO');
        await this.grid.selectRowByCellText(this.uIFTOCritiqueResultGrid, searchTarget);
    }
}

export class FTOCritiqueEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uICritiquePFCodeEdit: Locator;
    readonly uICritiquePFDescriptionEdit: Locator;
    readonly uITrainingTypeDropdown: Locator;
    readonly uIFTOPFCodeEdit: Locator;
    readonly uIDateEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIEvaluationTab: Locator;
    readonly uIEvaluationFormDropdown: Locator;
    readonly uIRefFTOYearEdit: Locator;
    readonly uIRefFTONumberEdit: Locator;
    readonly uIDOREdit: Locator;
    readonly uIApprovalTab: Locator;
    readonly uIQAFormsTab: Locator;
    readonly uIAttachmentsTab: Locator;
    readonly uIRefFTOInfoIcon: Locator;
    readonly uIDORInfoIcon: Locator;
    readonly uIProgressLabel: Locator;
    readonly uINarrativeTab: Locator;
    readonly uIStatusTextView: Locator;
    readonly uICritiqueNumberLabel: Locator;
    readonly uIPrintIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uICritiquePFCodeEdit = page.locator('#lupOffTrainee_CodeValue');
        this.uICritiquePFDescriptionEdit = page.locator('#lupOffTrainee_CodeDescription');
        this.uITrainingTypeDropdown = page.locator('#cddEvalFormType');
        this.uIFTOPFCodeEdit = page.locator('#lupOffFtopf_CodeValue');
        this.uIDateEdit = page.locator('#dtDate_KPIDttmCtrl');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIEvaluationTab = page.locator("//span[text()='Evaluation']");
        this.uIEvaluationFormDropdown = page.locator('#cddEvalform');
        this.uIRefFTOYearEdit = page.locator('#numFTONo_Year');
        this.uIRefFTONumberEdit = page.locator('#numFTONo_Number');
        this.uIDOREdit = page.locator('#Dornum');
        this.uIApprovalTab = page.locator("//span[text()='Approval']");
        this.uIQAFormsTab = page.locator("//span[text()='QA Forms']");
        this.uIAttachmentsTab = page.locator("//span[text()='Attachments']");
        this.uIRefFTOInfoIcon = page.locator('#numFTONo_imgBtn');
        this.uIDORInfoIcon = page.locator('#lupDornum');
        this.uIProgressLabel = page.locator('#lblApprovalStatus');
        this.uINarrativeTab = page.locator("//span[text()='Narrative']");
        this.uIStatusTextView = page.locator('#lblprogress');
        this.uICritiqueNumberLabel = page.locator('#lblnbrCritiqueNumber');
        this.uIPrintIcon = page.locator('#cmdPrint');
    }

    async verifyCritiquePFAsLoggedInPFAndDisabled(): Promise<void> {
        expect(await this.uICritiquePFCodeEdit.inputValue()).toBe(BaseData.getTestValue('UserName'));
        expect(await this.uICritiquePFDescriptionEdit.inputValue()).toBe(BaseData.getTestValue('PFName'));
        await expect(this.uICritiquePFCodeEdit).toHaveAttribute('readonly', /.*/);
        await expect(this.uICritiquePFDescriptionEdit).toHaveAttribute('readonly', /.*/);
    }

    async selectAtTrainingType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITrainingTypeDropdown, BaseData.getTestValue('TrainingType'));
    }

    async enterAtFTOPF(): Promise<void> {
        await this.uIFTOPFCodeEdit.fill(BaseData.getTestValue('FTOPF'));
        await this.uIFTOPFCodeEdit.press('Tab');
    }

    async enterDateAsCurrentDate(): Promise<void> {
        await this.uIDateEdit.click();
        await this.uIDateEdit.clear();
        await this.uIDateEdit.fill(DateHelpers.getCurrentDate());
    }

    async selectAtEvaluationForm(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIEvaluationFormDropdown, BaseData.getTestValue('EvaluationForm'));
    }

    async switchToEvaluationTab(): Promise<void> {
        await this.uIEvaluationTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmCategoryView.aspx');
    }

    async saveScreen(): Promise<void> {
        await this.elementHelpers.saveWithAccept(this.uISaveButton);
    }

    async readFTOCritiqueNo(): Promise<string> {
        return (await this.uICritiqueNumberLabel.innerText()).trim();
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async verifySaveButtonIsDisabled(): Promise<void> {
        await expect(this.uISaveButton).toBeDisabled();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verifyEnterTrainingTypeAckMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(30033)Enter Training Type.');
        await this.popup.acknowledgeOk();
    }

    async verifyDateAsCurrentDate(): Promise<void> {
        expect(await this.uIDateEdit.inputValue()).toBe(DateHelpers.getCurrentDate());
    }

    async verifyEnterFTOPFAckMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(30033)Enter FTO PF.');
        await this.popup.acknowledgeOk();
    }

    async enterAtRefFTO(): Promise<void> {
        const refFTO = BaseData.getTestValue('RefFTO');
        await this.uIRefFTOYearEdit.fill(refFTO.substring(0, 2));
        await this.uIRefFTONumberEdit.fill(refFTO.substring(3));
    }

    async enterAtDOR(): Promise<void> {
        await this.uIDOREdit.fill(BaseData.getTestValue('DOR'));
    }

    async clickRefFTOInfoIcon(): Promise<void> {
        await this.uIRefFTOInfoIcon.click();
    }

    async clickDORInfoIcon(): Promise<void> {
        await this.uIDORInfoIcon.click();
    }

    async verifyApprovalTabIsDisplayed(): Promise<void> {
        await expect(this.uIApprovalTab).toBeVisible();
        await expect(this.uIApprovalTab).toBeEnabled();
    }

    async verifyQAFormsTabIsDisplayed(): Promise<void> {
        await expect(this.uIQAFormsTab).toBeVisible();
        await expect(this.uIQAFormsTab).toBeEnabled();
    }

    async verifyAttachmentsTabIsDisplayed(): Promise<void> {
        await expect(this.uIAttachmentsTab).toBeVisible();
        await expect(this.uIAttachmentsTab).toBeEnabled();
    }

    async verifyProgressLabelAsCompleted(): Promise<void> {
        expect((await this.uIProgressLabel.innerText()).trim()).toBe('Completed');
    }

    async verifyStatusAsOnHold(): Promise<void> {
        expect((await this.uIStatusTextView.innerText()).trim()).toBe('On Hold');
    }

    async verifyStatusAsSubmitted(): Promise<void> {
        expect((await this.uIStatusTextView.innerText()).trim()).toBe('Submitted');
    }

    async switchToQAFormsTab(): Promise<void> {
        await this.uIQAFormsTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmQuestionnaire.aspx');
    }

    async switchToNarrativeTab(): Promise<void> {
        await this.uINarrativeTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmTextMgrEx');
    }

    async switchToAttachmentsTab(): Promise<void> {
        await this.uIAttachmentsTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmTxtAttachMgrEx.aspx');
    }

    async switchToApprovalTab(): Promise<void> {
        await this.uIApprovalTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmPnxGlobalApproval.aspx');
    }

    async verifySaveIconIsDisabled(): Promise<void> {
        await expect(this.uISaveButton).toBeDisabled();
    }

    async verifyAtFTOPF(): Promise<void> {
        expect(await this.uIFTOPFCodeEdit.inputValue()).toBe(BaseData.getTestValue('FTOPF'));
    }

    async saveAndcloseScreen(): Promise<void> {
        await this.elementHelpers.saveAndCloseWithAccept(this.uISaveAndCloseButton);
    }

    async getFTOCritiqueNumber(): Promise<string> {
        return (await this.uICritiqueNumberLabel.innerText()).trim();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }
}

export class FTOCritiqueEvaluationTabPage {
    readonly page: Page;
    readonly uIEvaluationResultGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIEvaluationResultGrid = page.locator('#grdCategory');
    }

    async verifyAtCategories(readedCategoryValues: string[]): Promise<void> {
        const values = this.uIEvaluationResultGrid.locator(".//table//tr[contains(@class,'master-row')]/td/span");
        const count = await values.count();
        const categoryValues: string[] = [];
        for (let i = 0; i < count; i++) {
            categoryValues.push((await values.nth(i).innerText()).trim());
        }
        for (const item of readedCategoryValues) {
            expect(categoryValues).toContain(item);
        }
    }

    async selectAtFTOInGrid(): Promise<void> {
        const element = this.page.locator(".//table//div//td[contains(@class,'UppercaseCss k-table-td k-dirty-cell')]").first();
        await element.click();
    }

    async verifyInfoIconAndToolTipText(): Promise<void> {
        const subcategory = this.uIEvaluationResultGrid.locator(`//div[@id='grdSubCategory']//span[text()='${BaseData.getTestValue('CategoryName')}']`);
        const img = subcategory.locator('..').locator('//img');
        expect(await img.getAttribute('title')).toBe(BaseData.getTestValue('ToolTipText'));
    }
}

export class FTOCritiqueNarrativeTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uINarrativeRichTextEdit: Locator;
    readonly uITemplateComboBox: Locator;
    readonly uILoadButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIInternalSaveButton: Locator;
    readonly uIResetButton: Locator;
    readonly uINarrativeEditField: Locator;
    readonly uIDictateUsingMobileLink: Locator;
    readonly uIStatusBar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uINarrativeRichTextEdit = page.locator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        this.uITemplateComboBox = page.locator('#ctrlUsrKPITxtEdit_lstTextName');
        this.uILoadButton = page.locator('#ctrlUsrKPITxtEdit_cmdload');
        this.uIAddNewButton = page.locator('#ctrlUsrKPITxtEdit_cmdAddnew');
        this.uIInternalSaveButton = page.locator('#cmdInternalSave');
        this.uIResetButton = page.locator('#cmdInternalRefresh');
        this.uINarrativeEditField = page.frameLocator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe').locator('body');
        this.uIDictateUsingMobileLink = page.locator("//span[contains(text(),'Dictate')]");
        this.uIStatusBar = page.locator("//td[@class='status']//b");
    }

    async enterNarativeAsAutomationTest(): Promise<void> {
        await this.uINarrativeEditField.click();
        await this.uINarrativeEditField.fill('Automation Test');
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async clickInternalSave(): Promise<void> {
        await this.uIInternalSaveButton.click();
        await this.popup.confirmYes();
    }

    async verifyAtTextInRichTextEdit(): Promise<void> {
        expect(await this.uINarrativeEditField.innerText()).toContain(BaseData.getTestValue('Narrative'));
    }

    async verifyNarrativeIsNull(): Promise<void> {
        const text = await this.uINarrativeEditField.innerText();
        expect(text.trim()).toBe('');
    }

    async verifyDictateUsingMobileIsDisabled(): Promise<void> {
        expect(await this.uIDictateUsingMobileLink.getAttribute('unselectable')).toBe('on');
    }

    async verifySaveButtonIsDisabled(): Promise<void> {
        await expect(this.uIInternalSaveButton).toBeDisabled();
    }

    async verifyResetButtonIsDisabled(): Promise<void> {
        await expect(this.uIResetButton).toBeDisabled();
    }

    async verifySaveButtonIsEnabled(): Promise<void> {
        await expect(this.uIInternalSaveButton).toBeEnabled();
    }

    async verifyResetButtonIsEnabled(): Promise<void> {
        await expect(this.uIResetButton).toBeEnabled();
    }

    async clickReset(): Promise<void> {
        await this.uIResetButton.click();
    }

    async verifyAdditionSuccessfulMsg(): Promise<void> {
        const text = (await this.uIStatusBar.innerText()).trim();
        expect(text).toBe('1002 - Addition Successful');
    }
}

export class FTOCritiqueApprovalTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uISaveButton: Locator;
    readonly uINewActionDropDown: Locator;
    readonly uIRejectionCodeDropDown: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uISupervisorCodeEdit: Locator;
    readonly uIRejectCountTextView: Locator;
    readonly uIHistoryTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uISaveButton = page.locator('#cmdSave');
        this.uINewActionDropDown = page.locator('#lstStatus');
        this.uIRejectionCodeDropDown = page.locator('#cddRejCode_DropDown');
        this.uIDateEdit = page.locator('#dttStatusDttm_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id ='dttStatusDttm_Time']//input");
        this.uISupervisorCodeEdit = page.locator('#lupSupervisor_CodeValue');
        this.uIRejectCountTextView = page.locator('#lblrejcountvalue');
        this.uIHistoryTable = page.locator("//table[@id='listMsg']");
    }

    async selectAtNewAction(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uINewActionDropDown, BaseData.getTestValue('NewAction'));
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async tabDateAndTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }
}

export class TraineeEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uITraineePFCodeValueEdit: Locator;
    readonly uIDORsTab: Locator;
    readonly uIFTOTrainingTypeDropDown: Locator;
    readonly uISaveAndContinueButton: Locator;
    readonly uIFTOPFNoEdit: Locator;
    readonly uIAnticipatedDurationEdit: Locator;
    readonly uITrainingStartDateEdit: Locator;
    readonly uIFTONo: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uITasksTab: Locator;
    readonly uIDeleteIcon: Locator;
    readonly uINarrativeTab: Locator;
    readonly uIFinalizationTab: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseIcon: Locator;
    readonly uISaveAndAddNewIcon: Locator;
    readonly uIPrintIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uITraineePFCodeValueEdit = page.locator('#lupOffPFID_CodeValue');
        this.uIDORsTab = page.locator("//span[text()='DORs']");
        this.uIFTOTrainingTypeDropDown = page.locator('#cddFtotriningType_DropDown');
        this.uISaveAndContinueButton = page.locator('#cmdAdd');
        this.uIFTOPFNoEdit = page.locator('#lupFTOPF_CodeValue');
        this.uIAnticipatedDurationEdit = page.locator('#txtDuration');
        this.uITrainingStartDateEdit = page.locator('#dtmstart_KPIDttmCtrl');
        this.uIFTONo = page.locator('#lblFTONumber');
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uITasksTab = page.locator("(//span[contains(text(),'Task')])[1]");
        this.uIDeleteIcon = page.locator('#cmdDelete');
        this.uINarrativeTab = page.locator("//span[text()='Narrative']");
        this.uIFinalizationTab = page.locator("//span[text()='Finalization']");
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseIcon = page.locator('#cmdSaveNClose');
        this.uISaveAndAddNewIcon = page.locator('#cmdSaveNAddNew');
        this.uIPrintIcon = page.locator('#cmdPrint');
    }

    async clickDORsTab(): Promise<void> {
        await this.uIDORsTab.click();
    }

    async verifyAtTraineePF(): Promise<void> {
        expect(await this.uITraineePFCodeValueEdit.inputValue()).toBe(BaseData.getTestValue('TraineePF'));
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async switchToDOREntry(): Promise<void> {
        await new BrowserHelpers(this.page).switchToPageByTitle('DOR Entry');
    }

    async clickTasksTab(): Promise<void> {
        await this.uITasksTab.click();
        await this.page.waitForTimeout(3000);
    }

    async switchToNarrativeTab(): Promise<void> {
        await this.uINarrativeTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmTextMgrEx');
    }

    async verifyTrainingStartDateIsDisabled(): Promise<void> {
        await expect(this.uITrainingStartDateEdit).toBeDisabled();
    }

    async verifyTrainingStartDateIsEnabled(): Promise<void> {
        await expect(this.uITrainingStartDateEdit).toBeEnabled();
    }

    async verifyTrainingStartDateAsCurrentDate(): Promise<void> {
        expect(await this.uITrainingStartDateEdit.inputValue()).toBe(DateHelpers.getCurrentDate('MM/dd/yyyy'));
    }

    async verifyDeleteConfirmationPopupWithNo(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(4) Do you really want to delete?');
        await this.popup.confirmNo();
    }

    async verifyDeleteConfirmationPopupWithYes(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(4) Do you really want to delete?');
        await this.popup.confirmYes();
    }

    async verifyDeleteAllConfirmationWithNo(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('Do you want to delete all of the details?');
        await this.popup.confirmNo();
    }

    async delete(): Promise<void> {
        await this.uIDeleteIcon.click();
        await expect(this.popup.modalBody).toContainText('(4) Do you really want to delete?');
        await this.popup.confirmYes();
        await expect(this.popup.modalBody).toContainText('Do you want to delete all of the details?');
        await this.popup.confirmYes();
    }

    async verifyDeleteIconIsEnabled(): Promise<void> {
        await expect(this.uIDeleteIcon).toBeEnabled();
    }

    async clickDeleteIcon(): Promise<void> {
        await this.uIDeleteIcon.click();
    }

    async enterAtTraineePf(): Promise<void> {
        await this.uITraineePFCodeValueEdit.fill(BaseData.getTestValue('TraineePF'));
    }

    async selectAtFTOTrainingType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIFTOTrainingTypeDropDown, BaseData.getTestValue('FTOTrainingType'));
    }

    async SaveAndContinue(): Promise<void> {
        await this.uISaveAndContinueButton.click();
        await this.popup.confirmYes();
    }

    async clickSaveAndContinue(): Promise<void> {
        await this.uISaveAndContinueButton.click();
    }

    async verifyEnterTraineeAcknowledgeMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(30033) Enter Trainee PF.');
        await this.popup.acknowledgeOk();
    }

    async verifyEnterTrainingTypeAcknowledgeMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(30033) Enter Training Type.');
        await this.popup.acknowledgeOk();
    }

    async verifyEnterFTOPFAcknowledgeMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(30033) Enter FTO PF.');
        await this.popup.acknowledgeOk();
    }

    async enterAtFTOPFNo(): Promise<void> {
        await this.uIFTOPFNoEdit.fill(BaseData.getTestValue('FTOPFNo'));
    }

    async enterAtAnticipatedDuration(): Promise<void> {
        await this.uIAnticipatedDurationEdit.fill(BaseData.getTestValue('AnticipatedDuration'));
    }

    async verifyFTONoIsGenerated(): Promise<void> {
        const text = await this.uIFTONo.innerText();
        expect(text.trim()).not.toBe('');
    }

    async verifyJurisFieldIsDisabled(): Promise<void> {
        await expect(this.uIJurisDropdown).toBeDisabled();
    }

    async verifyJurisAsPX(): Promise<void> {
        expect(await this.elementHelpers.getDropDownSelectedItem(this.uIJurisDropdown)).toBe('PX - ProPhoenix');
    }

    async verifyJurisAsPXInFire(): Promise<void> {
        expect(await this.elementHelpers.getDropDownSelectedItem(this.uIJurisDropdown)).toBe('PX - ProPhoenix Fire Department');
    }

    async switchToFinalizationTab(): Promise<void> {
        await this.uIFinalizationTab.click();
    }

    async save(): Promise<void> {
        await this.elementHelpers.saveWithAccept(this.uISaveButton);
    }

    async verifySaveIconIsDisabled(): Promise<void> {
        await expect(this.uISaveButton).toBeDisabled();
    }

    async verifySaveAndCloseIconIsDisabled(): Promise<void> {
        await expect(this.uISaveAndCloseIcon).toBeDisabled();
    }

    async verifySaveAndNewIconIsDisabled(): Promise<void> {
        await expect(this.uISaveAndAddNewIcon).toBeDisabled();
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }
}

export class TraineeEntryDORsTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly uIAddDORButton: Locator;
    readonly uIAddActivityButton: Locator;
    readonly uIDORResultGrid: Locator;
    readonly uIViewConsolidatedFormsButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uIAddDORButton = page.locator('#tabTraineeEntry_tmpl1_usrDOR_cmdAddDOR');
        this.uIAddActivityButton = page.locator('#tabTraineeEntry_tmpl1_usrDOR_cmdAddActivity');
        this.uIDORResultGrid = page.locator("//div[@id='tabTraineeEntry_tmpl1_usrDOR_grdDORs']");
        this.uIViewConsolidatedFormsButton = page.locator('#tabTraineeEntry_tmpl1_usrDOR_cmdConsolidatedForms');
    }

    async clickAddDORButton(): Promise<void> {
        await this.uIAddDORButton.click();
    }

    async clickAddActivityButton(): Promise<void> {
        await this.uIAddActivityButton.click();
    }

    async selectAtDORNoInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIDORResultGrid, BaseData.getTestValue('DORNo'), 'DOR#');
        await cell.click();
    }

    async verifyAtDORNoInGrid(i: number): Promise<void> {
        const values = await this.grid.getGridTableColumnValues(this.uIDORResultGrid, 'DOR#');
        expect(values).toContain(BaseData.getTestValue(`DORNo${i}`));
    }

    async selectAtDORNoInGridBasedOnEntryType(): Promise<void> {
        const dORNo = BaseData.getTestValue('DORNo');
        const entryType = BaseData.getTestValue('EntryType');
        const cell = this.uIDORResultGrid.locator(`.//table/tbody/tr/td[text()='${entryType}']/following-sibling::td[text()='${dORNo}']`);
        await cell.click();
    }

    async selectAtEntryTypeInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIDORResultGrid, BaseData.getTestValue('EntryType'), 'Entry Type');
        await cell.click();
    }

    async verifyAtStatusInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIDORResultGrid, BaseData.getTestValue('EntryType'), 'Status');
        expect(await cell.innerText()).toBe(BaseData.getTestValue('Status'));
    }

    async selectAtEntryTypeInGrid1(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIDORResultGrid, BaseData.getTestValue('EntryType1'), 'Entry Type');
        await cell.click();
    }

    async verifyAtDOREntryTypeInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIDORResultGrid, BaseData.getTestValue('DOREntryType'), 'Entry Type');
        expect(await cell.innerText()).toBe(BaseData.getTestValue('DOREntryType'));
    }

    async verifyAtActivityEntryTypeInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIDORResultGrid, BaseData.getTestValue('ActivityEntryType'), 'Entry Type');
        expect(await cell.innerText()).toBe(BaseData.getTestValue('ActivityEntryType'));
    }

    async selectAtActivityEntryTypeInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIDORResultGrid, BaseData.getTestValue('ActivityEntryType'), 'Entry Type');
        await cell.click();
    }

    async selectAtDOREntryTypeInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIDORResultGrid, BaseData.getTestValue('DOREntryType'), 'Entry Type');
        await cell.click();
    }

    async verifyStatusAsSubmittedUsingDOREntryType(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIDORResultGrid, BaseData.getTestValue('DOREntryType'), 'Status');
        expect(await cell.innerText()).toBe('Submitted');
    }

    async verifyStatusAsSubmittedUsingActivityEntryType(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIDORResultGrid, BaseData.getTestValue('ActivityEntryType'), 'Status');
        expect(await cell.innerText()).toBe('Submitted');
    }

    async verifyStatusAsApprovedUsingActivityEntryType(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIDORResultGrid, BaseData.getTestValue('ActivityEntryType'), 'Status');
        expect(await cell.innerText()).toBe('Approved');
    }

    async verifyStatusAsApprovedUsingDOREntryType(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIDORResultGrid, BaseData.getTestValue('DOREntryType'), 'Status');
        expect(await cell.innerText()).toBe('Approved');
    }

    async clickViewConsolidatedForms(): Promise<void> {
        await this.uIViewConsolidatedFormsButton.click();
    }

    async verifySetTheValueOfParam7746AckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('Please set the value of parameter id (7746) for Consolidated Report');
        await this.popup.acknowledgeOk();
    }

    async verifyInvalidReportAckMsgNotDisplayed(): Promise<void> {
        await expect(this.popup.modalBody).not.toContainText('Invalid Report --- ERR --- Not a valid id');
    }
}

export class TraineeEntryTasksTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly uIAddDORButton: Locator;
    readonly uIAddActivityButton: Locator;
    readonly uIAddChecklist: Locator;
    readonly uIAssignedToPFEdit: Locator;
    readonly uISaveIcon: Locator;
    readonly uIcloseIcon: Locator;
    readonly uITasksGrid: Locator;
    readonly uIDueByDateEdit: Locator;
    readonly uIDueByDateTimeEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uIAddDORButton = page.locator('#tabTraineeEntry_tmpl0_usrTraineeTask_cmdAddDOR');
        this.uIAddActivityButton = page.locator('#tabTraineeEntry_tmpl0_usrTraineeTask_cmdAddActivity');
        this.uIAddChecklist = page.locator('#tabTraineeEntry_tmpl0_usrTraineeTask_cmdChecklist');
        this.uIAssignedToPFEdit = page.locator('#lupAssignedToPF_CodeValue');
        this.uISaveIcon = page.locator('#cmdSaveTask');
        this.uIcloseIcon = page.locator("//span[text()='X']");
        this.uITasksGrid = page.locator('#grdTask');
        this.uIDueByDateEdit = page.locator('#dttDueDate_Date_KPIDttmCtrl');
        this.uIDueByDateTimeEdit = page.locator("//table[@id='dttDueDate_Time']//input");
    }

    async clickAddDORButton(): Promise<void> {
        await this.uIAddDORButton.click();
    }

    async clickAddActivityButton(): Promise<void> {
        await this.uIAddActivityButton.click();
    }

    async clickAddChecklist(): Promise<void> {
        await this.uIAddChecklist.click();
    }

    async clickAssignIconByTaskName(): Promise<void> {
        await this.grid.selectRowByCellText(this.uITasksGrid, BaseData.getTestValue('Tasktype'));
    }

    async enterAtAssignedToPF(): Promise<void> {
        await this.uIAssignedToPFEdit.fill(BaseData.getTestValue('AssignedToPF'));
        await this.uIAssignedToPFEdit.press('Tab');
    }

    async save(): Promise<void> {
        await this.uISaveIcon.click();
        await this.popup.confirmYes();
    }

    async close(): Promise<void> {
        await this.uIcloseIcon.click();
    }

    async verifyAtAssignedToPF(): Promise<void> {
        expect(await this.uIAssignedToPFEdit.inputValue()).toBe(BaseData.getTestValue('AssignedToPF'));
    }

    async enterDueByDateAsFuture(): Promise<void> {
        await this.uIDueByDateEdit.click();
        await this.uIDueByDateEdit.clear();
        await this.uIDueByDateEdit.fill(DateHelpers.getFutureDate(1, 'MM/dd/yyyy'));
        await this.uIDueByDateEdit.press('Tab');
        await this.uIDueByDateTimeEdit.fill(DateHelpers.getCurrentTime('HH:mm'));
    }
}

export class DOREntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uITraineePFCodeValueEdit: Locator;
    readonly uIEvaluationDropDown: Locator;
    readonly uITimeStartEdit: Locator;
    readonly uITimeEndEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uIEvaluationTab: Locator;
    readonly uITaskTab: Locator;
    readonly uICallsTab: Locator;
    readonly uIFinalizationTab: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIApprovalTab: Locator;
    readonly uIPhaseDropdown: Locator;
    readonly uIQAFormsTab: Locator;
    readonly uIEndDateEdit: Locator;
    readonly uIStatusLabel: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uITrainingTypeDropdown: Locator;
    readonly uIFTOPF: Locator;
    readonly uIDateEdit: Locator;
    readonly uIStatus: Locator;
    readonly uISaveAndCloseIcon: Locator;
    readonly uISaveAndAddNewIcon: Locator;
    readonly uIFTONo: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIStartDateEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uITraineePFCodeValueEdit = page.locator('#lupOffTrainee_CodeValue');
        this.uIEvaluationDropDown = page.locator('#cddEvalform');
        this.uITimeStartEdit = page.locator('#hrsStart');
        this.uITimeEndEdit = page.locator('#hrsEnd');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIEvaluationTab = page.locator("//span[text()='Evaluation']");
        this.uITaskTab = page.locator("//span[text()='Tasks']");
        this.uICallsTab = page.locator("//span[text()='Calls']");
        this.uIFinalizationTab = page.locator("//span[text()='Finalization']");
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIApprovalTab = page.locator("//span[text()='Approval']");
        this.uIPhaseDropdown = page.locator('#cddPhase_DropDown');
        this.uIQAFormsTab = page.locator("//span[text()='QA Forms']");
        this.uIEndDateEdit = page.locator("//input[@id='dtEndDate_KPIDttmCtrl']");
        this.uIStatusLabel = page.locator('#lblprogress');
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uITrainingTypeDropdown = page.locator('#cddtrainingtype_DropDown');
        this.uIFTOPF = page.locator('#lupOffFtopf_CodeValue');
        this.uIDateEdit = page.locator('#dtDate_KPIDttmCtrl');
        this.uIStatus = page.locator('#lblApprovalStatus');
        this.uISaveAndCloseIcon = page.locator('#cmdSaveNClose');
        this.uISaveAndAddNewIcon = page.locator('#cmdSaveNAddNew');
        this.uIFTONo = page.locator('#lblnbrDORNumber');
        this.uIPrintIcon = page.locator('#cmdPrint');
        this.uIStartDateEdit = page.locator('#dtDate_KPIDttmCtrl');
    }

    async verifyAtTraineePF(): Promise<void> {
        expect(await this.uITraineePFCodeValueEdit.inputValue()).toBe(BaseData.getTestValue('TraineePF'));
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async selectAtEvaluationForm(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIEvaluationDropDown, BaseData.getTestValue('EvaluationForm'));
    }

    async enterTimeStartAsPrevioustime(previousHours: number): Promise<void> {
        await this.uITimeStartEdit.click();
        await this.uITimeStartEdit.fill(DateHelpers.getPreviousTimeByHours(previousHours, 'HH:mm'));
    }

    async enterTimeEndAsFutureTime(futureHours: number): Promise<void> {
        await this.uITimeEndEdit.click();
        await this.uITimeEndEdit.fill(DateHelpers.getFutureTimeByHours(futureHours, 'HH:mm'));
        await this.uITimeEndEdit.press('Tab');
    }

    async saveScreen(): Promise<void> {
        await this.elementHelpers.saveWithAccept(this.uISaveButton);
    }

    async switchToEvaluationTab(): Promise<void> {
        await this.uIEvaluationTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmCategoryView.aspx');
    }

    async clickCallsTab(): Promise<void> {
        await this.uICallsTab.click();
    }

    async clickTasksTab(): Promise<void> {
        await this.uITaskTab.click();
    }

    async clickFinalizationTab(): Promise<void> {
        await this.uIFinalizationTab.click();
    }

    async verifyUpdatedDataExistsInTasksTabAck(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('Updated data exists in Task Tab. You must save or reset.');
        await this.popup.acknowledgeOk();
    }

    async verifyApprovalTabIsDisplayed(): Promise<void> {
        await expect(this.uIApprovalTab).toBeVisible();
    }

    async enterEndDateAsFutureDate(): Promise<void> {
        await this.uIEndDateEdit.click();
        await this.uIEndDateEdit.clear();
        await this.uIEndDateEdit.fill(DateHelpers.getFutureDate(1, 'MM/dd/yyyy'));
    }

    async enterTimeEndAsPrevioustime(previousHours: number): Promise<void> {
        await this.uITimeEndEdit.click();
        await this.uITimeEndEdit.fill(DateHelpers.getPreviousTimeByHours(previousHours, 'HH:mm'));
        await this.uITimeEndEdit.press('Tab');
    }

    async enterTimeStartAsCurrentTime(): Promise<void> {
        await this.uITimeStartEdit.click();
        await this.uITimeStartEdit.fill(DateHelpers.getCurrentTime('HH:mm'));
        await this.uITimeStartEdit.press('Tab');
    }

    async verifyEndTimeLaterThanStartTimeAcknowledgeMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6071) End Time must be later than Start Time');
        await this.popup.acknowledgeOk();
    }

    async verifyEnterEndTimeAcknowledgeMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6071) Please Enter End Time');
        await this.popup.acknowledgeOk();
    }

    async verifyStatusAsCompleted(): Promise<void> {
        expect((await this.uIStatusLabel.innerText()).trim()).toBe('Completed');
    }

    async verifyStatusAsProgress(): Promise<void> {
        expect((await this.uIStatusLabel.innerText()).trim()).toBe('Progress');
    }

    async verifyJurisDropdownIsDisabled(): Promise<void> {
        await expect(this.uIJurisDropdown).toBeDisabled();
    }

    async verifyTraineePFIsDisabled(): Promise<void> {
        await expect(this.uITraineePFCodeValueEdit).toHaveAttribute('readonly', /.*/);
    }

    async verifyAtTrainingType(): Promise<void> {
        expect(await this.elementHelpers.getDropDownSelectedItem(this.uITrainingTypeDropdown)).toBe(BaseData.getTestValue('TrainingType'));
    }

    async verifyTrainingTypeIsDisabled(): Promise<void> {
        await expect(this.uITrainingTypeDropdown).toBeDisabled();
    }

    async verifyAtFTOPF(): Promise<void> {
        expect(await this.uIFTOPF.inputValue()).toBe(BaseData.getTestValue('FTOPF'));
    }

    async verifyFTOPFIsEnabled(): Promise<void> {
        await expect(this.uIFTOPF).toBeEnabled();
    }

    async verifyJurisAsPx(): Promise<void> {
        expect(await this.elementHelpers.getDropDownSelectedItem(this.uIJurisDropdown)).toBe('PX - ProPhoenix');
    }

    async verifyTimeStartDateAsCurrentDate(): Promise<void> {
        expect(await this.uIDateEdit.inputValue()).toBe(DateHelpers.getCurrentDate('MM/dd/yyyy'));
    }

    async verifyTimeStartDateIsEnabled(): Promise<void> {
        await expect(this.uIDateEdit).toBeEnabled();
    }

    async enterAtTimeStartAsInvalid(): Promise<void> {
        await this.uITimeStartEdit.click();
        await this.uITimeStartEdit.fill('25:00');
        await this.uITimeStartEdit.press('Tab');
    }

    async verifyInvalidTimeAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6071) Invalid Time Format');
        await this.popup.acknowledgeOk();
    }

    async enterAtTimeStart(): Promise<void> {
        await this.uITimeStartEdit.click();
        await this.uITimeStartEdit.clear();
        await this.uITimeStartEdit.fill(BaseData.getTestValue('TimeStart'));
        await this.uITimeStartEdit.press('Tab');
    }

    async enterAtTimeEndAsInvalid(): Promise<void> {
        await this.uITimeEndEdit.clear();
        await this.uITimeEndEdit.click();
        await this.uITimeEndEdit.fill('25:00');
        await this.uITimeEndEdit.press('Tab');
    }

    async taboutEndDate(): Promise<void> {
        await this.uIEndDateEdit.click();
        await this.uIEndDateEdit.clear();
        await this.uIEndDateEdit.press('Tab');
    }

    async enterAtTimeEnd(): Promise<void> {
        await this.uITimeEndEdit.clear();
        await this.uITimeEndEdit.click();
        await this.uITimeEndEdit.fill(BaseData.getTestValue('TimeEnd'));
        await this.uITimeEndEdit.press('Tab');
    }

    async switchToApprovalTab(): Promise<void> {
        await this.uIApprovalTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmPnxGlobalApproval.aspx');
    }

    async verifyStatusAsSubmitted(): Promise<void> {
        expect((await this.uIStatus.innerText()).trim()).toBe('Submitted');
    }

    async verifySaveButtonIsDisabled(): Promise<void> {
        await expect(this.uISaveButton).toBeDisabled();
    }

    async verifySaveAndCloseButtonIsDisabled(): Promise<void> {
        await expect(this.uISaveAndCloseIcon).toBeDisabled();
    }

    async verifySaveAndAddNewButtonIsDisabled(): Promise<void> {
        await expect(this.uISaveAndAddNewIcon).toBeDisabled();
    }

    async verifyStatusAsApproved(): Promise<void> {
        expect((await this.uIStatus.innerText()).trim()).toBe('Approved');
    }

    async verifyAtFTONo(): Promise<void> {
        expect((await this.uIFTONo.innerText()).trim()).toBe(BaseData.getTestValue('FTONo'));
    }

    async verifyEndDateIsDisabled(): Promise<void> {
        const classAttr = await this.uIEndDateEdit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async saveAndCloseScreen(): Promise<void> {
        await this.elementHelpers.saveAndCloseWithAccept(this.uISaveAndCloseButton);
    }

    async selectAtPhase(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIPhaseDropdown, BaseData.getTestValue('Phase'));
        await this.uIPhaseDropdown.press('Tab');
    }

    async switchToQAFormsTab(): Promise<void> {
        await this.uIQAFormsTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmQuestionnaire.aspx?');
    }

    async enterAtEndDate(): Promise<void> {
        await this.uIEndDateEdit.fill(BaseData.getTestValue('EndDate'));
    }

    async enterAtTimeStartDate(): Promise<void> {
        await this.uIStartDateEdit.click();
        await this.uIStartDateEdit.clear();
        await this.uIStartDateEdit.fill(BaseData.getTestValue('StartDate'));
    }
}

export class DOREntryEvaluationTabPage {
    readonly page: Page;
    readonly uICategoryGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uICategoryGrid = page.locator("//div[@id='grdCategory']");
    }

    async verifyGridCellIsEnabledByCategoryName(columnIndex: number): Promise<void> {
        const columnCell = this.uICategoryGrid.locator(`.//div//tr//td//span[text()='${BaseData.getTestValue('CategoryName')}']//..//following-sibling::td[${columnIndex}]`);
        await columnCell.click();
        expect(await columnCell.getAttribute('data-role')).toBe('editable');
    }

    async verifyGridCellIsDisabledByCategoryName(columnIndex: number): Promise<void> {
        const columnCell = this.uICategoryGrid.locator(`.//div//tr//td//span[text()='${BaseData.getTestValue('CategoryName')}']//..//following-sibling::td[${columnIndex}]`);
        const classAttr = await columnCell.getAttribute('class') || '';
        expect(classAttr).toContain('non-editable-column');
    }

    async enterAtRTTimeByCategoryNameInGrid(i: number, columnIndex: number): Promise<void> {
        const columnCell = this.uICategoryGrid.locator(`.//div//tr//td//span[text()='${BaseData.getTestValue('CategoryName')}']//..//following-sibling::td[${columnIndex}]`);
        await columnCell.click();
        const input = columnCell.locator('//span/input');
        await input.fill(BaseData.getTestValue(`RT${i}`));
        await input.press('Tab');
    }

    async verifyAtRTTimeByCategoryNameInGrid(i: number, columnIndex: number): Promise<void> {
        const columnCell = this.uICategoryGrid.locator(`.//div//tr//td//span[text()='${BaseData.getTestValue('CategoryName')}']//..//following-sibling::td[${columnIndex}]`);
        expect((await columnCell.innerText()).trim()).toBe(BaseData.getTestValue(`RT${i}`));
    }

    async verifyRTTimeAsNullByCategoryNameInGrid(columnIndex: number): Promise<void> {
        const columnCell = this.uICategoryGrid.locator(`.//div//tr//td//span[text()='${BaseData.getTestValue('CategoryName')}']//..//following-sibling::td[${columnIndex}]`);
        expect((await columnCell.innerText()).trim()).toBe('');
    }

    async clickCommentCellByCategoryNameInGrid(): Promise<void> {
        const commentCell = this.uICategoryGrid.locator(`.//div//tr//td//span[text()='${BaseData.getTestValue('CategoryName')}']//..//following-sibling::td[contains(@class,'cell-comments')]`);
        await commentCell.click();
    }

    async verifyCommentIconIsDisplayedByCategoryNameInGrid(): Promise<void> {
        const commentCell = this.uICategoryGrid.locator(`.//div//tr//td//span[text()='${BaseData.getTestValue('CategoryName')}']//..//following-sibling::td[contains(@class,'cell-comments')]`);
        const img = commentCell.locator('//img');
        expect(await img.getAttribute('src')).toContain('CommentIcon.png');
    }

    async verifyRTCellIsDisabledByCategoryNameInGrid(): Promise<void> {
        const gridCell = this.uICategoryGrid.locator(`.//div//tr//td//span[text()='${BaseData.getTestValue('CategoryName')}']//..//following-sibling::td//td[@class='UppercaseCss k-table-td']`);
        expect((await gridCell.innerText()).trim()).toBe('');
    }

    async clickCellByCategoryNameInGridUsingIndex(columnIndex: number): Promise<void> {
        const columnCell = this.uICategoryGrid.locator(`.//div//tr//td//span[text()='${BaseData.getTestValue('CategoryName')}']//..//following-sibling::td[${columnIndex}]`);
        await columnCell.click();
    }

    async selectAtDropdownInGrid(): Promise<void> {
        const cells = this.uICategoryGrid.locator("//div[@id='grdRoster']//table//tr[contains(@class,'k-table-row')]//td[contains(@class, 'UppercaseCss') and contains(@class, 'k-table')]");
        const count = await cells.count();
        for (let i = 0; i < count; i++) {
            const ele = cells.nth(i);
            if (await ele.isVisible()) {
                await ele.click();
                const dropdownBtn = this.page.locator("//span[contains(@class, 'k-input-button') and contains(@class, 'k-icon-button')]");
                if (await dropdownBtn.isVisible()) {
                    await dropdownBtn.click();
                    const dropdownOption = this.page.locator("//div[contains(@class,'k-list-content')]//ul//li//span").first();
                    await dropdownOption.click();
                }
            }
        }
    }

    async deleteInEvaluationForm(): Promise<void> {
        const element = this.page.locator("//div[@id='grdCategory']//tr[contains(@class,'k-detail-row')]//td[@class='k-table-td']").first();
        await element.click();
        await this.page.keyboard.press('Control+a');
        await this.page.keyboard.press('Delete');
    }

    async clickInsideTheMissingDayReportForm(): Promise<void> {
        const element = this.page.locator("//div[@id='grdCategory']//div//tr//td//span[text()='selenium']//parent::td//following-sibling::td[1]");
        await element.click();
    }

    async verifyEvaluationFormColumnsAreDisabled(): Promise<void> {
        const classAttr = await this.page.locator("//div[@id='grdCategory']//div//tr//td//span[text()='selenium']//parent::td//following-sibling::td[1]").getAttribute('class') || '';
        expect(classAttr).toContain('non-editable');
    }

    async verifyEvaluationFormColumnsAreEnabled(): Promise<void> {
        const classAttr = await this.page.locator("//div[@id='grdCategory']//div//tr//td//span[text()='selenium']//parent::td//following-sibling::td[1]").getAttribute('class') || '';
        expect(classAttr).not.toContain('non-editable');
    }

    async deleteInsideTheMissingDayReportForm(): Promise<void> {
        const element = this.uICategoryGrid.locator(`.//div//tr//td//span[text()='${BaseData.getTestValue('CategoryName')}']//parent::td//following-sibling::td[1]`);
        await element.click();
        const input = this.uICategoryGrid.locator(`.//div//tr//td//span[text()='${BaseData.getTestValue('CategoryName')}']//parent::td//following-sibling::td[1]//input`);
        await input.clear();
    }

    async verifyInfoIconAndToolTipText(): Promise<void> {
        const subcategory = this.uICategoryGrid.locator(`//div[@id='grdSubCategory']//span[text()='${BaseData.getTestValue('CategoryName')}']`);
        const img = subcategory.locator('..').locator('//img');
        expect(await img.getAttribute('title')).toBe(BaseData.getTestValue('ToolTipText'));
    }

    async enterAtValueInColumnByCategoryInGrid(i: number, columnIndex: number): Promise<void> {
        const columnCell = this.uICategoryGrid.locator(`.//div//tr//td//span[text()='${BaseData.getTestValue('CategoryName')}']//..//following-sibling::td[${columnIndex}]`);
        await columnCell.click();
        const input = columnCell.locator('//span/input');
        await input.fill(BaseData.getTestValue(`value${i}`));
        await input.press('Tab');
    }

    async verifyAtValueInColumnByCategoryInGrid(i: number, columnIndex: number): Promise<void> {
        const columnCell = this.uICategoryGrid.locator(`.//div//tr//td//span[text()='${BaseData.getTestValue('CategoryName')}']//..//following-sibling::td[${columnIndex}]`);
        expect((await columnCell.innerText()).trim()).toBe(BaseData.getTestValue(`value${i}`));
    }

    async verifyValueInColumnByCategoryInGridIsBlank(columnIndex: number): Promise<void> {
        const columnCell = this.uICategoryGrid.locator(`.//div//tr//td//span[text()='${BaseData.getTestValue('CategoryName')}']//..//following-sibling::td[${columnIndex}]`);
        expect((await columnCell.innerText()).trim()).toBe('');
    }
}

export class DOREntryCallsTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uICallsTabGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uICallsTabGrid = page.locator("//div[@id='tabDOREntry_tmpl2_usrDORCall_grdDORCall' or @id='tabDOREntry_tmpl3_usrDORCall_grdDORCall']");
    }

    async verifyAtCallNoIngridByLocation(callNo: string): Promise<void> {
        const call = await this.grid.getGridCell(this.uICallsTabGrid, BaseData.getTestValue('Location'), 'Call#');
        expect(await call.innerText()).toBe(callNo);
    }

    async selectCallIngrid(callNo: string): Promise<void> {
        await this.grid.selectRowByCellText(this.uICallsTabGrid, callNo);
    }
}

export class DOREntryTasksTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIReferenceCallDropDown: Locator;
    readonly uITasksCompletedDropdown: Locator;
    readonly uIRatingDropdown: Locator;
    readonly uIFTORemarksEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIDORTaskGrid: Locator;
    readonly uIRequiredTotalValueText: Locator;
    readonly uICompletedValueText: Locator;
    readonly uIChecklistCompetencyDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIReferenceCallDropDown = page.locator("//select[@id='tabDOREntry_tmpl1_usrDORTask_cddrefcall' or @id='tabDOREntry_tmpl2_usrDORTask_cddrefcall']");
        this.uITasksCompletedDropdown = page.locator('#tabDOREntry_tmpl2_usrDORTask_cddTskCmplt');
        this.uIRatingDropdown = page.locator("//select[@id='tabDOREntry_tmpl2_usrDORTask_cddRating_DropDown']");
        this.uIFTORemarksEdit = page.locator('#tabDOREntry_tmpl1_usrDORTask_txtremarks');
        this.uIAddButton = page.locator('#tabDOREntry_tmpl2_usrDORTask_cmdAddTask');
        this.uIClearButton = page.locator('#tabDOREntry_tmpl1_usrDORTask_cmdClear');
        this.uIDORTaskGrid = page.locator("//div[@id='tabDOREntry_tmpl2_usrDORTask_grdDORTask']");
        this.uIRequiredTotalValueText = page.locator('#tabDOREntry_tmpl1_usrDORTask_lblReqTot');
        this.uICompletedValueText = page.locator('#tabDOREntry_tmpl1_usrDORTask_lblCompl');
        this.uIChecklistCompetencyDropdown = page.locator('#tabDOREntry_tmpl2_usrDORTask_cddTskCmplt');
    }

    async verifyvalueInReferenceCall(call: string): Promise<void> {
        const options = await this.uIReferenceCallDropDown.locator('option').allInnerTexts();
        expect(options).toContain(call);
    }

    async verifyPleaseEnterRatingAck(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('Please enter rating');
        await this.popup.acknowledgeOk();
    }

    async selectAtTaskCompleted(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITasksCompletedDropdown, BaseData.getTestValue('TaskCompleted'));
    }

    async selectAtReferenceCall(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIReferenceCallDropDown, BaseData.getTestValue('ReferenceCall'));
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
    }

    async selectAtRating(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIRatingDropdown, BaseData.getTestValue('Rating'));
    }

    async enterAtFTORemarks(): Promise<void> {
        await this.uIFTORemarksEdit.fill(BaseData.getTestValue('FTORemarks'));
    }

    async verifyAtTaskNameBasedOnRefernceCallInGrid(): Promise<void> {
        const taskName = await this.grid.getGridCell(this.uIDORTaskGrid, BaseData.getTestValue('ReferenceCall'), 'Task Name');
        expect(await taskName.innerText()).toBe(BaseData.getTestValue('TaskName'));
    }

    async verifyRequiredTotalAndCompleted(total: string, completed: string): Promise<void> {
        expect((await this.uIRequiredTotalValueText.innerText()).trim()).toBe(total);
        expect((await this.uICompletedValueText.innerText()).trim()).toBe(completed);
    }

    async verifyRequiredCountReachedAck(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('Required count reached');
        await this.popup.acknowledgeOk();
    }

    async verifyTaskCompletedIsDisabled(): Promise<void> {
        await expect(this.uITasksCompletedDropdown).toBeDisabled();
    }

    async verifyReferenceCallIsDisabled(): Promise<void> {
        await expect(this.uIReferenceCallDropDown).toBeDisabled();
    }

    async verifyRatingIsDisabled(): Promise<void> {
        await expect(this.uIRatingDropdown).toBeDisabled();
    }

    async verifyFTORemarksIsInReadOnlyMode(): Promise<void> {
        await expect(this.uIFTORemarksEdit).toHaveAttribute('readonly', /.*/);
    }

    async verifyTaskCompletedIsEnabled(): Promise<void> {
        await expect(this.uITasksCompletedDropdown).toBeEnabled();
    }

    async verifyReferenceCallIsEnabled(): Promise<void> {
        await expect(this.uIReferenceCallDropDown).toBeEnabled();
    }

    async verifyRatingIsEnabled(): Promise<void> {
        await expect(this.uIRatingDropdown).toBeEnabled();
    }

    async verifyFTORemarksIsEditable(): Promise<void> {
        await this.uIFTORemarksEdit.fill(BaseData.getTestValue('FTORemarks'));
        expect(await this.uIFTORemarksEdit.inputValue()).toBe(BaseData.getTestValue('FTORemarks'));
    }

    async selectAtReferenceCallInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIDORTaskGrid, BaseData.getTestValue('ReferenceCall'));
    }

    async verifyChecklistCompetencyDropdownIsNull(): Promise<void> {
        const options = await this.uITasksCompletedDropdown.locator('option').allInnerTexts();
        const valid = options.filter(o => o.trim() !== '');
        expect(valid.length).toBe(1);
        expect(valid[0]).toBe('--');
    }

    async selectChecklistCompetency(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIChecklistCompetencyDropdown, BaseData.getTestValue('ChecklistCompetency'));
    }

    async verifyAtReferenceCallInGrid(): Promise<void> {
        const gridCell = await this.grid.getGridCell(this.uIDORTaskGrid, BaseData.getTestValue('ReferenceCallNo'), "");
        expect(await gridCell.innerText()).toBe(BaseData.getTestValue('ReferenceCallNo'));
    }
}

export class DOREntryFinalizationTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uICommentsEdit: Locator;
    readonly uIFTOSignCheckbox: Locator;
    readonly uIForwardToTraineeReviewCheckbox: Locator;
    readonly uITraineeSignCheckbox: Locator;
    readonly uIEvaluatorApprovalSignField: Locator;
    readonly uIClearIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uICommentsEdit = page.locator('#tabDOREntry_tmpl5_usrDorApproval_txtComments');
        this.uIFTOSignCheckbox = page.locator('#tabDOREntry_tmpl5_usrDorApproval_chkFTOSigntrainee');
        this.uIForwardToTraineeReviewCheckbox = page.locator('#tabDOREntry_tmpl5_usrDorApproval_chktraineereview');
        this.uITraineeSignCheckbox = page.locator('#tabDOREntry_tmpl5_usrDorApproval_chkSigntrainee');
        this.uIEvaluatorApprovalSignField = page.locator("//input[@id='tabDOREntry_tmpl5_usrDorApproval_imgFtoSign']");
        this.uIClearIcon = page.locator('#tabDOREntry_tmpl5_usrDorApproval_imgFTOClear');
    }

    async clickFTOSignCheckbox(): Promise<void> {
        await this.uIFTOSignCheckbox.click();
    }

    async clickForwardToTraineeReviewCheckbox(): Promise<void> {
        await this.uIForwardToTraineeReviewCheckbox.click();
    }

    async verifySignIsUploaded(): Promise<void> {
        const src = await this.uIEvaluatorApprovalSignField.getAttribute('src') || '';
        expect(src).not.toContain('NoSignature');
    }

    async verifyUpdatedDataExistsInTasksTabAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('Updated data exists in Task Tab. You must save or reset.');
        await this.popup.acknowledgeOk();
    }

    async enterAtComments(): Promise<void> {
        await this.uICommentsEdit.fill(BaseData.getTestValue('Comments'));
    }

    async clickClearIcon(): Promise<void> {
        await this.uIClearIcon.click();
    }

    async verifySignIsCleared(): Promise<void> {
        const src = await this.uIEvaluatorApprovalSignField.getAttribute('src') || '';
        expect(src).toContain('NoSignature');
    }

    async verifyFTOSignCheckboxIsChecked(): Promise<void> {
        await expect(this.uIFTOSignCheckbox).toBeChecked();
    }

    async verifyFTOSignCheckboxIsUnChecked(): Promise<void> {
        await expect(this.uIFTOSignCheckbox).not.toBeChecked();
    }

    async clickTraineeSignCheckbox(): Promise<void> {
        await this.uITraineeSignCheckbox.click();
    }
}

export class DOREntryApprovalTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uINewActionComboBox: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uISupervisorEdit: Locator;
    readonly uIInternalSave: Locator;
    readonly uISupervisorPFText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uINewActionComboBox = page.locator('#lstStatus');
        this.uIDateEdit = page.locator('#dttStatusDttm_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='dttStatusDttm_Time']//input");
        this.uISupervisorEdit = page.locator('#lupSupervisor_CodeValue');
        this.uIInternalSave = page.locator('#cmdSave');
        this.uISupervisorPFText = page.locator("//table[@id='listMsg']//td[contains(text(),'Supervisor')]");
    }

    async selectAtNewAction(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uINewActionComboBox, BaseData.getTestValue('NewAction'));
    }

    async tabOutDateAndTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.click();
        await this.uITimeEdit.press('Tab');
    }

    async enterAtSupervisor(): Promise<void> {
        await this.uISupervisorEdit.fill(BaseData.getTestValue('Supervisor'));
    }

    async clickInternalSave(): Promise<void> {
        await this.uIInternalSave.click();
        await this.popup.confirmYes();
    }

    async verifyAtToSupervisorPF(): Promise<void> {
        expect((await this.uISupervisorPFText.innerText()).trim()).toBe(BaseData.getTestValue('SupervisorPF'));
    }
}

export class TaskEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIEvaluationFormTypeDropdown: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uITasksTab: Locator;
    readonly uISaveIcon: Locator;
    readonly uISaveAndCloseIcon: Locator;
    readonly uICopyAndCreateNewButton: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uITaskGroup: Locator;
    readonly uITaskNameEdit: Locator;
    readonly uIMainTab: Locator;
    readonly uIInactiveCheckbox: Locator;
    readonly uIFormDropdown: Locator;
    readonly uIDORTaskType: Locator;
    readonly uICompetencyTaskType: Locator;
    readonly uISaveAndNewIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIEvaluationFormTypeDropdown = page.locator('#ftotrainingtype_DropDown');
        this.uIDescriptionEdit = page.locator('#txtDescription');
        this.uITasksTab = page.locator("//span[text()='Tasks']");
        this.uISaveIcon = page.locator('#cmdSave');
        this.uISaveAndCloseIcon = page.locator('#cmdSaveNClose');
        this.uICopyAndCreateNewButton = page.locator('#btnCopySample');
        this.uIJurisDropdown = page.locator('#lstJurisID');
        this.uITaskGroup = page.locator('#radFrmCat_Input');
        this.uITaskNameEdit = page.locator('#txtTaskName');
        this.uIMainTab = page.locator("//span[text()='Main']");
        this.uIInactiveCheckbox = page.locator('#chkIsActive');
        this.uIFormDropdown = page.locator('#cddEvalform');
        this.uIDORTaskType = page.locator('#rdbtndor');
        this.uICompetencyTaskType = page.locator('#rdbtncompetency');
        this.uISaveAndNewIcon = page.locator('#cmdSaveNAddNew');
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async selectAtEvaluationFormType(i: number): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIEvaluationFormTypeDropdown, BaseData.getTestValue(`EvaluationFormType${i}`));
    }

    async enterAtDescription(): Promise<void> {
        await this.uIDescriptionEdit.fill(BaseData.getTestValue('Description'));
    }

    async save(): Promise<void> {
        await this.uISaveIcon.click();
        await this.popup.confirmYes();
    }

    async saveAndClose(): Promise<void> {
        await this.uISaveAndCloseIcon.click();
        await this.popup.confirmYes();
    }

    async clickTasksTab(): Promise<void> {
        await this.uITasksTab.click();
    }

    async clickCopyAndCreateNewButton(): Promise<void> {
        await this.uICopyAndCreateNewButton.click();
    }

    async verifyEvaluationFormTypeDropdownIsEmpty(): Promise<void> {
        expect(await this.elementHelpers.getDropDownSelectedItem(this.uIEvaluationFormTypeDropdown)).toBe('--');
    }

    async verifyJurisAsPx(): Promise<void> {
        expect(await this.elementHelpers.getDropDownSelectedItem(this.uIJurisDropdown)).toBe('PX - ProPhoenix');
    }

    async verifyJurisAsBC(): Promise<void> {
        expect(await this.elementHelpers.getDropDownSelectedItem(this.uIJurisDropdown)).toBe('BC - Brown County Police Department');
    }

    async enterAtTaskGroup(): Promise<void> {
        await this.uITaskGroup.fill(BaseData.getTestValue('TaskGroup'));
    }

    async enterAtTaskName(i?: number): Promise<void> {
        const val = i !== undefined ? BaseData.getTestValue(`TaskName${i}`) : BaseData.getTestValue('TaskName');
        await this.uITaskNameEdit.fill(val);
    }

    async clickMainTab(): Promise<void> {
        await this.uIMainTab.click();
    }

    async clickInactiveCheckbox(): Promise<void> {
        await this.uIInactiveCheckbox.click();
    }

    async selectAtFormAsAddNew(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIFormDropdown, '< Add New >');
    }

    async clickDorTaskType(): Promise<void> {
        await this.uIDORTaskType.click();
    }

    async saveAndNew(): Promise<void> {
        await this.uISaveAndNewIcon.click();
        await this.popup.confirmYes();
    }

    async clickCompetencyTaskType(): Promise<void> {
        await this.uICompetencyTaskType.click();
    }
}

export class TaskEntryMainTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIPhaseDropdown: Locator;
    readonly uICountEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIPhaseGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIPhaseDropdown = page.locator('#tabAddTask_tmpl0_usrAddTaskMain_cddPhase_DropDown');
        this.uICountEdit = page.locator('#tabAddTask_tmpl0_usrAddTaskMain_txtCount');
        this.uIAddButton = page.locator('#tabAddTask_tmpl0_usrAddTaskMain_cmdAdd');
        this.uIPhaseGrid = page.locator('#tabAddTask_tmpl0_usrAddTaskMain_grdPhase');
    }

    async selectAtPhase(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIPhaseDropdown, BaseData.getTestValue('Phase'));
    }

    async enterAtCount(): Promise<void> {
        await this.uICountEdit.fill(BaseData.getTestValue('Count'));
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
    }

    async selectPhase(phaseNo: number): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIPhaseDropdown, `Phase ${phaseNo}`);
    }

    async verifyPhaseInGrid(phaseNo: number): Promise<void> {
        const values = await this.grid.getGridTableColumnValues(this.uIPhaseGrid, 'Phase');
        expect(values).toContain(`Phase ${phaseNo}`);
    }
}

export class EvaluationFormCategoryEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uICategoryEdit: Locator;
    readonly uICategoryGroupDropdown: Locator;
    readonly uICategoryNameEdit: Locator;
    readonly uIDisallowEntriesForDropdownValues: Locator;
    readonly uIDisallowEntriesForDropdownArrow: Locator;
    readonly uIEvaluationGuidelinesEdit: Locator;
    readonly uISaveIcon: Locator;
    readonly uISaveAndCloseIcon: Locator;
    readonly uIScoreLabel: Locator;
    readonly uIDisallowEntriesForDropdown: Locator;
    readonly uIScoreEdit: Locator;
    readonly uISortOrderEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uICategoryEdit = page.locator('#txtCategory');
        this.uICategoryGroupDropdown = page.locator('#cddCateGroup');
        this.uICategoryNameEdit = page.locator('#txtCategoryName');
        this.uIDisallowEntriesForDropdownValues = page.locator('#rdratingcolumn_DropDown');
        this.uIDisallowEntriesForDropdownArrow = page.locator('#rdratingcolumn_Arrow');
        this.uIEvaluationGuidelinesEdit = page.locator('#txtEvaGuide');
        this.uISaveIcon = page.locator('#cmdSave');
        this.uISaveAndCloseIcon = page.locator('#cmdSaveNClose');
        this.uIScoreLabel = page.locator("//span[@id='lblScore']");
        this.uIDisallowEntriesForDropdown = page.locator('#rdratingcolumn_Input');
        this.uIScoreEdit = page.locator('#txtScore');
        this.uISortOrderEdit = page.locator('#txtSortOrder');
    }

    async enterAtCategory(i: number): Promise<void> {
        await this.uICategoryEdit.fill(BaseData.getTestValue(`Category${i}`));
    }

    async enterAtCategoryName(i: number): Promise<void> {
        await this.uICategoryNameEdit.fill(BaseData.getTestValue(`CategoryName${i}`));
    }

    async selectAtCategoryGroup(i: number): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uICategoryGroupDropdown, BaseData.getTestValue(`CategoryGroup${i}`));
    }

    async selectAtDisallowEntriesFor(): Promise<void> {
        await this.uIDisallowEntriesForDropdownArrow.click();
        await this.elementHelpers.selectRadMultiCheckboxValue(this.uIDisallowEntriesForDropdownArrow, this.uIDisallowEntriesForDropdown, BaseData.getTestValue('DisallowEntriesFor'));
        await this.uIDisallowEntriesForDropdownArrow.click();
    }

    async enterAtEvaluationGuidelines(): Promise<void> {
        await this.uIEvaluationGuidelinesEdit.fill(BaseData.getTestValue('EvaluationGuidelines'));
    }

    async saveScreen(): Promise<void> {
        await this.elementHelpers.saveWithAccept(this.uISaveIcon);
    }

    async saveAndCloseScreen(): Promise<void> {
        await this.elementHelpers.saveAndCloseWithAccept(this.uISaveAndCloseIcon);
    }

    async clickDisAllowEntriesDropDown(): Promise<void> {
        await this.uIDisallowEntriesForDropdown.click();
    }

    async verifyScoreFieldAsMandatory(): Promise<void> {
        const color = await this.uIScoreLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(153, 0, 0, 1)');
    }

    async verifyAtvaluesInDisallowsEntriesForDropDown(i: number): Promise<void> {
        const radValues = this.uIDisallowEntriesForDropdownValues.locator('li, div.rcbItem');
        const texts = await radValues.allInnerTexts();
        expect(texts).toContain(BaseData.getTestValue(`ColumnName${i}`));
    }

    async enterAtScore(i: number): Promise<void> {
        await this.uIScoreEdit.fill(BaseData.getTestValue(`Score${i}`));
    }

    async enterAtSortOrder(): Promise<void> {
        await this.uISortOrderEdit.fill(BaseData.getTestValue('SortOrder'));
    }
}

export class ActivityEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIDateEdit: Locator;
    readonly uIPhaseDropdown: Locator;
    readonly uITimeStartEdit: Locator;
    readonly uIEndEdit: Locator;
    readonly uIActivityDropdown: Locator;
    readonly uISaveIcon: Locator;
    readonly uISaveAndCloseIcon: Locator;
    readonly uITasksTab: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uITraineePF: Locator;
    readonly uITrainingTypeDropdown: Locator;
    readonly uIEvaluationFormDropdown: Locator;
    readonly uIFTOPF: Locator;
    readonly uIEvaluationTab: Locator;
    readonly uIStatusLabel: Locator;
    readonly uISaveButton: Locator;
    readonly uIFinalizationTab: Locator;
    readonly uIApprovalTab: Locator;
    readonly uIStatus: Locator;
    readonly uISaveAndAddNewIcon: Locator;
    readonly uIRefreshIcon: Locator;
    readonly uIEndDateEdit: Locator;
    readonly uIFTONo: Locator;
    readonly uIQAFormsTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIDateEdit = page.locator('#dtDate_KPIDttmCtrl');
        this.uIPhaseDropdown = page.locator('#cddPhase_DropDown');
        this.uITimeStartEdit = page.locator('#hrsStart');
        this.uIEndEdit = page.locator('#hrsEnd');
        this.uIActivityDropdown = page.locator('#cddReviewCode_DropDown');
        this.uISaveIcon = page.locator('#cmdSave');
        this.uISaveAndCloseIcon = page.locator('#cmdSaveNClose');
        this.uITasksTab = page.locator("//span[text()='Tasks']");
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uITraineePF = page.locator('#lupOffTrainee_CodeValue');
        this.uITrainingTypeDropdown = page.locator('#cddtrainingtype_DropDown');
        this.uIEvaluationFormDropdown = page.locator('#cddEvalform');
        this.uIFTOPF = page.locator('#lupOffFtopf_CodeValue');
        this.uIEvaluationTab = page.locator("//span[text()='Evaluation']");
        this.uIStatusLabel = page.locator('#lblprogress');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIFinalizationTab = page.locator("//span[text()='Finalization']");
        this.uIApprovalTab = page.locator("//span[text()='Approval']");
        this.uIStatus = page.locator('#lblApprovalStatus');
        this.uISaveAndAddNewIcon = page.locator('#cmdSaveNAddNew');
        this.uIRefreshIcon = page.locator('#cmdRefresh');
        this.uIEndDateEdit = page.locator('#dtEndDate_KPIDttmCtrl');
        this.uIFTONo = page.locator('#lblnbrDORNumber');
        this.uIQAFormsTab = page.locator("//span[text()='QA Forms']");
    }

    async enterAtDate(): Promise<void> {
        await this.uIDateEdit.click();
        await this.uIDateEdit.clear();
        await this.uIDateEdit.fill(BaseData.getTestValue('Date'));
    }

    async enterAtTimeStart(): Promise<void> {
        await this.uITimeStartEdit.click();
        await this.uITimeStartEdit.clear();
        await this.uITimeStartEdit.fill(BaseData.getTestValue('TimeStart'));
        await this.uITimeStartEdit.press('Tab');
    }

    async enterAtTimeEnd(): Promise<void> {
        await this.uIEndEdit.clear();
        await this.uIEndEdit.click();
        await this.uIEndEdit.fill(BaseData.getTestValue('TimeEnd'));
        await this.uIEndEdit.press('Tab');
    }

    async selectAtActivityType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIActivityDropdown, BaseData.getTestValue('Activity'));
        await this.uIActivityDropdown.press('Tab');
    }

    async selectAtPhase(i: number): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIPhaseDropdown, BaseData.getTestValue(`Phase${i}`));
    }

    async clickTasksTab(): Promise<void> {
        await this.uITasksTab.click();
    }

    async verifyInvalidTimeAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6071) Invalid Time Format');
        await this.popup.acknowledgeOk();
    }

    async verifyJurisDropdownIsDisabled(): Promise<void> {
        await expect(this.uIJurisDropdown).toBeDisabled();
    }

    async verifyAtTraineePF(): Promise<void> {
        expect(await this.uITraineePF.inputValue()).toBe(BaseData.getTestValue('TraineePF'));
    }

    async verifyTraineePFIsDisabled(): Promise<void> {
        await expect(this.uITraineePF).toHaveAttribute('readonly', /.*/);
    }

    async verifyAtTrainingType(): Promise<void> {
        expect(await this.elementHelpers.getDropDownSelectedItem(this.uITrainingTypeDropdown)).toBe(BaseData.getTestValue('TrainingType'));
    }

    async verifyTrainingTypeIsDisabled(): Promise<void> {
        await expect(this.uITrainingTypeDropdown).toBeDisabled();
    }

    async verifyAtEvaluationFormIsAutoPopulated(): Promise<void> {
        expect(await this.elementHelpers.getDropDownSelectedItem(this.uIEvaluationFormDropdown)).toBe(BaseData.getTestValue('Activity'));
    }

    async selectAtEvaluationForm(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIEvaluationFormDropdown, BaseData.getTestValue('EvaluationForm'));
    }

    async selectAtEvaluationForm1(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIEvaluationFormDropdown, BaseData.getTestValue('EvaluationForm1'));
    }

    async verifyAtEvaluationForm(): Promise<void> {
        expect(await this.elementHelpers.getDropDownSelectedItem(this.uIEvaluationFormDropdown)).toBe(BaseData.getTestValue('EvaluationForm'));
    }

    async verifyAtFTOPF(): Promise<void> {
        expect(await this.uIFTOPF.inputValue()).toBe(BaseData.getTestValue('FTOPF'));
    }

    async verifyFTOPFIsEnabled(): Promise<void> {
        await expect(this.uIFTOPF).toBeEnabled();
    }

    async verifyTimeStartDateAsCurrentDate(): Promise<void> {
        expect(await this.uIDateEdit.inputValue()).toBe(DateHelpers.getCurrentDate('MM/dd/yyyy'));
    }

    async verifyTimeStartDateIsEnabled(): Promise<void> {
        await expect(this.uIDateEdit).toBeEnabled();
    }

    async enterAtTimeStartAsInvalid(): Promise<void> {
        await this.uITimeStartEdit.click();
        await this.uITimeStartEdit.fill('25:00');
        await this.uITimeStartEdit.press('Tab');
    }

    async enterAtTimeEndAsInvalid(): Promise<void> {
        await this.uIEndEdit.clear();
        await this.uIEndEdit.click();
        await this.uIEndEdit.fill('25:00');
        await this.uIEndEdit.press('Tab');
    }

    async switchToEvaluationTab(): Promise<void> {
        await this.uIEvaluationTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmCategoryView.aspx');
    }

    async verifyStatusAsProgress(): Promise<void> {
        expect((await this.uIStatusLabel.innerText()).trim()).toBe('Progress');
    }

    async verifyStatusAsCompleted(): Promise<void> {
        expect((await this.uIStatusLabel.innerText()).trim()).toBe('Completed');
    }

    async save(): Promise<void> {
        await this.elementHelpers.saveWithAccept(this.uISaveButton);
    }

    async switchToFinalizationTab(): Promise<void> {
        await this.uIFinalizationTab.click();
    }

    async verifyApprovalTabIsDisplayed(): Promise<void> {
        await expect(this.uIApprovalTab).toBeVisible();
    }

    async switchToApprovalTab(): Promise<void> {
        await this.uIApprovalTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmPnxGlobalApproval.aspx');
    }

    async verifyStatusAsSubmitted(): Promise<void> {
        expect((await this.uIStatus.innerText()).trim()).toBe('Submitted');
    }

    async verifySaveButtonIsDisabled(): Promise<void> {
        await expect(this.uISaveButton).toBeDisabled();
    }

    async verifySaveAndCloseButtonIsDisabled(): Promise<void> {
        await expect(this.uISaveAndCloseIcon).toBeDisabled();
    }

    async verifySaveAndAddNewButtonIsDisabled(): Promise<void> {
        await expect(this.uISaveAndAddNewIcon).toBeDisabled();
    }

    async verifyStatusAsApproved(): Promise<void> {
        expect((await this.uIStatus.innerText()).trim()).toBe('Approved');
    }

    async verifyStartTimeAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6071) Enter Start Time');
        await this.popup.acknowledgeOk();
    }

    async clickRefreshIcon(): Promise<void> {
        await this.uIRefreshIcon.click();
    }

    async clickRefresh(): Promise<void> {
        await this.page.reload();
    }

    async taboutEndDate(): Promise<void> {
        await this.uIEndDateEdit.click();
        await this.uIEndDateEdit.clear();
        await this.uIEndDateEdit.press('Tab');
    }

    async enterTimeEndAsFutureDate(): Promise<void> {
        await this.uIEndDateEdit.click();
        await this.uIEndDateEdit.clear();
        await this.uIEndDateEdit.fill(DateHelpers.getFutureDate(1, 'MM/dd/yyyy'));
    }

    async saveAndCloseScreen(): Promise<void> {
        await this.elementHelpers.saveAndCloseWithAccept(this.uISaveAndCloseIcon);
    }

    async verifyAtFTONo(): Promise<void> {
        expect((await this.uIFTONo.innerText()).trim()).toBe(BaseData.getTestValue('FTONo'));
    }

    async verifyEndDateIsDisabled(): Promise<void> {
        const classAttr = await this.uIEndDateEdit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async switchToQAFormsTab(): Promise<void> {
        await this.uIQAFormsTab.click();
        new BrowserHelpers(this.page).switchToFrame('QA/frmQuestionnaire.aspx');
    }
}

export class ActivityEntryTasksTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uITaskCompletedDropdown: Locator;
    readonly uIReferenceCallDropdown: Locator;
    readonly uIRatingDropdown: Locator;
    readonly uIFTORemarksEdit: Locator;
    readonly uITasksResultGrid: Locator;
    readonly uIAddButton: Locator;
    readonly uIRequiredTotalValue: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uITaskCompletedDropdown = page.locator('#tabActivityEntry_tmpl1_usrDORTask_cddTskCmplt');
        this.uIReferenceCallDropdown = page.locator('#tabActivityEntry_tmpl1_usrDORTask_cddrefcall');
        this.uIRatingDropdown = page.locator('#tabActivityEntry_tmpl1_usrDORTask_cddRating_DropDown');
        this.uIFTORemarksEdit = page.locator('#tabActivityEntry_tmpl1_usrDORTask_txtremarks');
        this.uITasksResultGrid = page.locator('#tabActivityEntry_tmpl1_usrDORTask_grdDORTask');
        this.uIAddButton = page.locator('#tabActivityEntry_tmpl1_usrDORTask_cmdAddTask');
        this.uIRequiredTotalValue = page.locator('#tabActivityEntry_tmpl1_usrDORTask_lblReqTot');
    }

    async selectAtTaskCompleted(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITaskCompletedDropdown, BaseData.getTestValue('TaskCompleted'));
        await this.uITaskCompletedDropdown.press('Tab');
    }

    async selectAtReferenceCall(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIReferenceCallDropdown, BaseData.getTestValue('ReferenceCall'));
    }

    async selectAtRating(i?: number): Promise<void> {
        const val = i !== undefined ? BaseData.getTestValue(`Rating${i}`) : BaseData.getTestValue('Rating');
        await this.elementHelpers.selectDropDownOption(this.uIRatingDropdown, val);
    }

    async enterAtFTORemarks(): Promise<void> {
        await this.uIFTORemarksEdit.fill(BaseData.getTestValue('FTORemarks'));
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifyRequiredCountReachedAcknowledgePopuop(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('Required Count Reached');
        await this.popup.acknowledgeOk();
    }

    async verifyAtTaskCompletedDropdownValue(): Promise<void> {
        const values = await this.uITaskCompletedDropdown.locator('option').allInnerTexts();
        expect(values).toContain(BaseData.getTestValue('TaskCompleted'));
    }

    async verifyAtRequiredTotalCount(): Promise<void> {
        expect((await this.uIRequiredTotalValue.innerText()).trim()).toBe(BaseData.getTestValue('RequiredTotal'));
    }

    async verifyEnterRatingAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('Please enter rating');
        await this.popup.acknowledgeOk();
    }

    async verifyAtRatingInGrid(i?: number): Promise<void> {
        const expected = i !== undefined ? BaseData.getTestValue(`Rating${i}`) : BaseData.getTestValue('Rating');
        const cell = await this.grid.getGridCell(this.uITasksResultGrid, BaseData.getTestValue('Competency'), 'Rating');
        expect(await cell.innerText()).toBe(expected);
    }

    async selectAtRatingInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uITasksResultGrid, BaseData.getTestValue('Rating'));
    }

    async selectRatingAsAdd6059(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIRatingDropdown, '--Add 6059 --');
    }

    async verifyRatingAsAdd6059(): Promise<void> {
        expect(await this.elementHelpers.getDropDownSelectedItem(this.uIRatingDropdown)).toBe('--Add 6059 --');
    }
}

export class AddTaskEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uISaveIcon: Locator;
    readonly uISaveAndCloseIcon: Locator;
    readonly uITaskEdit: Locator;
    readonly uITaskGroupDropdown: Locator;
    readonly uITaskNameEdit: Locator;
    readonly uIAllPhasesCheckbox: Locator;
    readonly uIPhaseDropdown: Locator;
    readonly uICountEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIPhaseResultGrid: Locator;
    readonly uIGuidelinesEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uISaveIcon = page.locator('#cmdSave');
        this.uISaveAndCloseIcon = page.locator('#cmdSaveNClose');
        this.uITaskEdit = page.locator('#txttaskno');
        this.uITaskGroupDropdown = page.locator('#cddTaskGroup_DropDown');
        this.uITaskNameEdit = page.locator('#txtTaskName');
        this.uIAllPhasesCheckbox = page.locator('#chkAllphases');
        this.uIPhaseDropdown = page.locator('#cddPhase_DropDown');
        this.uICountEdit = page.locator('#txtCount');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIPhaseResultGrid = page.locator('#grdPhase');
        this.uIGuidelinesEdit = page.locator('#txtEvaGuide');
    }

    async enterAtTask(i: number): Promise<void> {
        await this.uITaskEdit.fill(BaseData.getTestValue(`Task${i}`));
    }

    async selectAtTaskGroup(i: number): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITaskGroupDropdown, BaseData.getTestValue(`TaskGroup${i}`));
    }

    async enterAtTaskName(): Promise<void> {
        await this.uITaskNameEdit.fill(BaseData.getTestValue('TaskName'));
    }

    async checkAllPhasesCheckbox(): Promise<void> {
        if (!await this.uIAllPhasesCheckbox.isChecked()) {
            await this.uIAllPhasesCheckbox.click();
        }
    }

    async uncheckAllPhasesCheckbox(): Promise<void> {
        if (await this.uIAllPhasesCheckbox.isChecked()) {
            await this.uIAllPhasesCheckbox.click();
        }
    }

    async selectAtPhase(i: number): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIPhaseDropdown, BaseData.getTestValue(`Phase${i}`));
    }

    async enterAtCount(i: number): Promise<void> {
        await this.uICountEdit.fill(BaseData.getTestValue(`Count${i}`));
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifyAddButtonNotDisplayed(): Promise<void> {
        await expect(this.uIAddButton).not.toBeVisible();
    }

    async verifyPhaseGridNotDisplayed(): Promise<void> {
        await expect(this.uIPhaseResultGrid).not.toBeVisible();
    }

    async verifyAllPhasesCheckboxIsDisabled(): Promise<void> {
        await expect(this.uIAllPhasesCheckbox).toBeDisabled();
    }

    async verify1019DuplicationAcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1019)Duplication Of Data Found');
        await this.popup.acknowledgeOk();
    }

    async verifyAtPhaseInGrid(i: number): Promise<void> {
        const values = await this.grid.getGridTableColumnValues(this.uIPhaseResultGrid, 'Phase');
        expect(values).toContain(BaseData.getTestValue(`Phase${i}`));
    }

    async enterAtGuidelines(): Promise<void> {
        await this.uIGuidelinesEdit.fill(BaseData.getTestValue('Guidelines'));
    }

    async verifyPhaseDropdownIsDisabled(): Promise<void> {
        await expect(this.uIPhaseDropdown).toBeDisabled();
    }

    async save(): Promise<void> {
        await this.elementHelpers.saveWithAccept(this.uISaveIcon);
    }

    async saveAndClose(): Promise<void> {
        await this.elementHelpers.saveAndCloseWithAccept(this.uISaveAndCloseIcon);
    }

    async verifyAlreadyAddedAcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('Already Added');
        await this.popup.acknowledgeOk();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }
}

export class FTOCommentsPage {
    readonly page: Page;
    readonly uISaveAndCloseButton: Locator;
    readonly uISaveButton: Locator;
    readonly uICloseButton: Locator;
    readonly uIDeleteButton: Locator;
    readonly uIRichTextEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISaveAndCloseButton = page.locator('#cmdAdd');
        this.uISaveButton = page.locator('#cmdSaveclck');
        this.uICloseButton = page.locator('#cmdClose');
        this.uIDeleteButton = page.locator('#cmdDelete');
        this.uIRichTextEdit = page.frameLocator('#rteKPITxt_contentIframe').locator('body');
    }

    async enterAtComment(): Promise<void> {
        await this.uIRichTextEdit.fill(BaseData.getTestValue('Comment'));
    }

    async clickSaveAndClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
    }

    async verifyAtComment(): Promise<void> {
        expect(await this.uIRichTextEdit.innerText()).toBe(BaseData.getTestValue('Comment'));
    }
}

export class FTOFormsConfigPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIFormNameEdit: Locator;
    readonly uISearchButton: Locator;
    readonly uIFTOFormsConfigTable: Locator;
    readonly uIAddNewEvaluationBtn: Locator;
    readonly uISampleCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIFormNameEdit = page.locator('#txtFormname');
        this.uISearchButton = page.locator('#btnsrch');
        this.uIFTOFormsConfigTable = page.locator('#grdTask');
        this.uIAddNewEvaluationBtn = page.locator('#cmdAddEvaluation');
        this.uISampleCheckbox = page.locator('#chkSample');
    }

    async enterAtFormName(): Promise<void> {
        await this.uIFormNameEdit.fill(BaseData.getTestValue('FormName'));
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async selectAtFormName(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIFTOFormsConfigTable, BaseData.getTestValue('FormName'));
    }

    async clickAddNewEvaluation(): Promise<void> {
        await this.uIAddNewEvaluationBtn.click();
    }

    async clickSampleCheckbox(): Promise<void> {
        await this.uISampleCheckbox.click();
    }

    async selectRandomInGrid(): Promise<void> {
        await this.grid.selectRandomRow(this.uIFTOFormsConfigTable);
    }
}

export class FTOTasksConfigPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIJurisDropdown: Locator;
    readonly uITaskConfigGrid: Locator;
    readonly uISampleCheckbox: Locator;
    readonly uISearchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uITaskConfigGrid = page.locator('#grdTaskConfig');
        this.uISampleCheckbox = page.locator('#chkSample');
        this.uISearchButton = page.locator('#btnsrch');
    }

    async verifyJurisAsPx(): Promise<void> {
        expect(await this.elementHelpers.getDropDownSelectedItem(this.uIJurisDropdown)).toBe('PX - ProPhoenix');
    }

    async selectAtTrainingType(): Promise<void> {
        await this.grid.selectRowByCellText(this.uITaskConfigGrid, BaseData.getTestValue('TrainingType'));
    }

    async verifyJurisAsBC(): Promise<void> {
        expect(await this.elementHelpers.getDropDownSelectedItem(this.uIJurisDropdown)).toBe('BC - Brown County Police Department');
    }

    async selectJurisAsBC(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIJurisDropdown, 'BC - Brown County Police Department');
    }

    async clickSampleCheckbox(): Promise<void> {
        await this.uISampleCheckbox.click();
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }
}

export class FTOTasksConfigEntryPage {
    readonly page: Page;
    readonly elementHelpers: ElementHelpers;
    readonly uIJurisDropdown: Locator;
    readonly uIAddNewTaskButton: Locator;
    readonly uITrainingTypeDropdown: Locator;
    readonly uIIncludeInactive: Locator;
    readonly uISaveIcon: Locator;
    readonly uISaveAndCloseIcon: Locator;
    readonly uIDeleteIcon: Locator;
    readonly uISampleCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elementHelpers = new ElementHelpers(page);
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uIAddNewTaskButton = page.locator('#btnTask');
        this.uITrainingTypeDropdown = page.locator('#Trainingtype_DropDown');
        this.uIIncludeInactive = page.locator('#chkInActive');
        this.uISaveIcon = page.locator('#cmdSave');
        this.uISaveAndCloseIcon = page.locator('#cmdSaveNClose');
        this.uIDeleteIcon = page.locator('#cmdDelete');
        this.uISampleCheckbox = page.locator('#chkSample');
    }

    async verifyAtTrainingType(): Promise<void> {
        expect(await this.elementHelpers.getDropDownSelectedItem(this.uITrainingTypeDropdown)).toBe(BaseData.getTestValue('TrainingType'));
    }

    async clickAddNewTask(): Promise<void> {
        await this.uIAddNewTaskButton.click();
    }

    async verifyAtTaskNameIsNotGreyedOut(): Promise<void> {
        const element = this.page.locator(`//div[@id='grdTask']//table//tbody//tr/td/span[contains(text(),'${BaseData.getTestValue('TaskName')}')]`);
        const color = await element.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(0, 0, 0, 1)');
    }

    async selectAtTaskName(i?: number): Promise<void> {
        const taskName = i !== undefined ? BaseData.getTestValue(`TaskName${i}`) : BaseData.getTestValue('TaskName');
        const element = this.page.locator(`//div[@id='grdTask']//table//tbody//tr/td/span[contains(text(),'${taskName}')]`);
        await element.click();
    }

    async clickIncludeInactiveCheckbox(): Promise<void> {
        await this.uIIncludeInactive.click();
    }

    async verifyAtTaskNameIsGreyedOut(): Promise<void> {
        const element = this.page.locator(`//div[@id='grdTask']//table//tbody//tr/td/span[contains(text(),'${BaseData.getTestValue('TaskName')}')]`);
        const color = await element.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(128, 128, 128, 1)');
    }

    async verifySaveIconIsDisabled(): Promise<void> {
        await expect(this.uISaveIcon).toBeDisabled();
    }

    async verifySaveAndCloseIconIsDisabled(): Promise<void> {
        await expect(this.uISaveAndCloseIcon).toBeDisabled();
    }

    async verifyDeleteIconIsDisabled(): Promise<void> {
        await expect(this.uIDeleteIcon).toBeDisabled();
    }

    async verifySampleCheckboxIsDisabled(): Promise<void> {
        await expect(this.uISampleCheckbox).toBeDisabled();
    }

    async verifySampleCheckboxIsChecked(): Promise<void> {
        await expect(this.uISampleCheckbox).toBeChecked();
    }
}

export class FTOActivityEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIActivityDropdown: Locator;
    readonly uITimeStartEdit: Locator;
    readonly uITimeEndEdit: Locator;
    readonly uISaveAndClose: Locator;
    readonly uISaveIcon: Locator;
    readonly uICallsTab: Locator;
    readonly uITasksTab: Locator;
    readonly uITimeStartDateEdit: Locator;
    readonly uITimeEndDateEdit: Locator;
    readonly uIPhaseDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIActivityDropdown = page.locator('#cddReviewCode_DropDown');
        this.uITimeStartEdit = page.locator('#hrsStart');
        this.uITimeEndEdit = page.locator('#hrsEnd');
        this.uISaveAndClose = page.locator('#cmdSaveNClose');
        this.uISaveIcon = page.locator('#cmdSave');
        this.uICallsTab = page.locator("//span[text()='Calls']");
        this.uITasksTab = page.locator("//span[text()='Tasks']");
        this.uITimeStartDateEdit = page.locator('#dtDate_KPIDttmCtrl');
        this.uITimeEndDateEdit = page.locator('#dtEndDate_KPIDttmCtrl');
        this.uIPhaseDropdown = page.locator('#cddPhase_DropDown');
    }

    async selectAtActivity(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIActivityDropdown, BaseData.getTestValue('Activity'));
    }

    async enterTimeStartAsCurrentTime(): Promise<void> {
        await this.uITimeStartEdit.click();
        await this.uITimeStartEdit.fill(DateHelpers.getCurrentTime('HH:mm'));
        await this.uITimeStartEdit.press('Tab');
    }

    async enterTimeEndAsFutureTime(futureHours: number): Promise<void> {
        await this.uITimeEndEdit.click();
        await this.uITimeEndEdit.fill(DateHelpers.getFutureTimeByHours(futureHours, 'HH:mm'));
        await this.uITimeEndEdit.press('Tab');
    }

    async saveAndCloseScreen(): Promise<void> {
        await this.elementHelpers.saveAndCloseWithAccept(this.uISaveAndClose);
    }

    async enterAtTimeStart(): Promise<void> {
        await this.uITimeStartEdit.click();
        await this.uITimeStartEdit.clear();
        await this.uITimeStartEdit.fill(BaseData.getTestValue('ActivityTimeStart'));
        await this.uITimeStartEdit.press('Tab');
    }

    async enterAtTimeEnd(): Promise<void> {
        await this.uITimeEndEdit.clear();
        await this.uITimeEndEdit.click();
        await this.uITimeEndEdit.fill(BaseData.getTestValue('ActivityTimeEnd'));
        await this.uITimeEndEdit.press('Tab');
    }

    async save(): Promise<void> {
        await this.elementHelpers.saveWithAccept(this.uISaveIcon);
    }

    async clickCallsTab(): Promise<void> {
        await this.uICallsTab.click();
    }

    async clickTasksTab(): Promise<void> {
        await this.uITasksTab.click();
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async enterAtTimeStartDate(): Promise<void> {
        await this.uITimeStartDateEdit.click();
        await this.uITimeStartDateEdit.clear();
        await this.uITimeStartDateEdit.fill(BaseData.getTestValue('ActivityStartDate'));
    }

    async enterAtTimeEndDate(): Promise<void> {
        await this.uITimeEndDateEdit.fill(BaseData.getTestValue('ActivityEndDate'));
    }

    async selectAtPhase(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIPhaseDropdown, BaseData.getTestValue('Phase'));
    }
}

export class ChecklistEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIChecklistDropdown: Locator;
    readonly uITimeStartEdit: Locator;
    readonly uIEndDateEdit: Locator;
    readonly uITimeEndEdit: Locator;
    readonly uIChecklistTab: Locator;
    readonly uIFormDropdown: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uITrainingTypeDropdown: Locator;
    readonly uITraineePFEdit: Locator;
    readonly uIFTOPFEdit: Locator;
    readonly uIHoursEdit: Locator;
    readonly uIPhaseDropdown: Locator;
    readonly uIShiftDropdown: Locator;
    readonly uIOtherEdit: Locator;
    readonly uISaveIcon: Locator;
    readonly uIQAFormsTab: Locator;
    readonly uINarrativeTab: Locator;
    readonly uIFinalizationTab: Locator;
    readonly uIApprovalTab: Locator;
    readonly uIStatusLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIChecklistDropdown = page.locator('#cddChecklist');
        this.uITimeStartEdit = page.locator("//input[@id='hrsStart']");
        this.uIEndDateEdit = page.locator("//input[@id='dtEndDate_KPIDttmCtrl']");
        this.uITimeEndEdit = page.locator("//input[@id='hrsEnd']");
        this.uIChecklistTab = page.locator("//span[contains(@class, 'igtab_BlueThemeTHText') and text()='Checklist']");
        this.uIFormDropdown = page.locator('#cddEvalform');
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uITrainingTypeDropdown = page.locator('#cddtrainingtype_DropDown');
        this.uITraineePFEdit = page.locator('#lupOffTrainee_CodeValue');
        this.uIFTOPFEdit = page.locator('#lupOffFtopf_CodeValue');
        this.uIHoursEdit = page.locator('#hrsCalculate');
        this.uIPhaseDropdown = page.locator('#cddPhase_DropDown');
        this.uIShiftDropdown = page.locator('#cddShift_DropDown');
        this.uIOtherEdit = page.locator('#txtOthers');
        this.uISaveIcon = page.locator('#cmdSave');
        this.uIQAFormsTab = page.locator("//span[contains(text(),'QA Forms')]");
        this.uINarrativeTab = page.locator("//span[contains(text(),'Narrative')]");
        this.uIFinalizationTab = page.locator("//span[contains(text(),'Finalization')]");
        this.uIApprovalTab = page.locator("//span[contains(text(),'Approval')]");
        this.uIStatusLabel = page.locator('#lblApprovalStatus');
    }

    async selectAtChecklist(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIChecklistDropdown, BaseData.getTestValue('Checklist'));
    }

    async enterTimeStartAsCurrentTime(): Promise<void> {
        await this.uITimeStartEdit.click();
        await this.uITimeStartEdit.fill(DateHelpers.getCurrentTime('HH:mm'));
        await this.uITimeStartEdit.press('Tab');
    }

    async enterEndDateAsFutureDate(): Promise<void> {
        await this.uIEndDateEdit.click();
        await this.uIEndDateEdit.clear();
        await this.uIEndDateEdit.fill(DateHelpers.getFutureDate(1, 'MM/dd/yyyy'));
    }

    async enterTimeEndAsFutureTime(futureHours: number): Promise<void> {
        await this.uITimeEndEdit.click();
        await this.uITimeEndEdit.fill(DateHelpers.getFutureTimeByHours(futureHours, 'HH:mm'));
        await this.uITimeEndEdit.press('Tab');
    }

    async switchToChecklistTab(): Promise<void> {
        await this.uIChecklistTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmCategoryView.aspx');
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async selectAtForm(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIFormDropdown, BaseData.getTestValue('FormName'));
    }

    async verifyAtJuris(): Promise<void> {
        expect(await this.elementHelpers.getDropDownSelectedItem(this.uIJurisDropdown)).toBe(BaseData.getTestValue('Juris'));
    }

    async verifyAtTraineePF(): Promise<void> {
        expect(await this.uITraineePFEdit.inputValue()).toBe(BaseData.getTestValue('TraineePF'));
    }

    async verifyTraineePFIsDisabled(): Promise<void> {
        await expect(this.uITraineePFEdit).toHaveAttribute('readonly', /.*/);
    }

    async verifyAtTrainingType(): Promise<void> {
        expect(await this.elementHelpers.getDropDownSelectedItem(this.uITrainingTypeDropdown)).toBe(BaseData.getTestValue('TrainingType'));
    }

    async verifyTrainingTypeIsDisabled(): Promise<void> {
        await expect(this.uITrainingTypeDropdown).toBeDisabled();
    }

    async verifyAtFTOPF(): Promise<void> {
        expect(await this.uIFTOPFEdit.inputValue()).toBe(BaseData.getTestValue('FTOPF'));
    }

    async verifyFTOPFIsEnabled(): Promise<void> {
        await expect(this.uIFTOPFEdit).toBeEnabled();
    }

    async verifyTimeStartIsNotBlank(): Promise<void> {
        expect((await this.uITimeStartEdit.inputValue()).trim()).not.toBe('');
    }

    async enterAtTimeStart(index: number): Promise<void> {
        await this.uITimeStartEdit.fill(BaseData.getTestValue(`StartTime${index}`));
        await this.uITimeStartEdit.press('Tab');
    }

    async verifyPleaseEnterValidTimeFormatAck(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('Please enter valid time format');
        await this.popup.acknowledgeOk();
    }

    async enterAtTimeEnd(index: number): Promise<void> {
        await this.uITimeEndEdit.click();
        await this.uITimeEndEdit.fill(BaseData.getTestValue(`EndTime${index}`));
        await this.uITimeEndEdit.press('Tab');
    }

    async verifyHoursNotBlank(): Promise<void> {
        expect(await this.uIHoursEdit.inputValue()).toBe(BaseData.getTestValue('Hours'));
    }

    async selectAtShift(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIShiftDropdown, BaseData.getTestValue('Shift'));
    }

    async selectAtPhase(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIPhaseDropdown, BaseData.getTestValue('Phase'));
    }

    async enterAtOther(): Promise<void> {
        await this.uIOtherEdit.fill(BaseData.getTestValue('Other'));
    }

    async save(): Promise<void> {
        await this.elementHelpers.saveWithAccept(this.uISaveIcon);
    }

    async switchToQAFormsTab(): Promise<void> {
        await this.uIQAFormsTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmQuestionnaire.aspx');
    }

    async switchToNarrativeTab(): Promise<void> {
        await this.uINarrativeTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmTextMgrEx.aspx');
    }

    async switchToFinalizationTab(): Promise<void> {
        await this.uIFinalizationTab.click();
    }

    async switchToApprovalTab(): Promise<void> {
        await this.uIApprovalTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmPnxGlobalApproval.aspx');
    }

    async verifyStatusAsSubmitted(): Promise<void> {
        expect((await this.uIStatusLabel.innerText()).trim()).toBe('Submitted');
    }

    async verifyStatusAsApproved(): Promise<void> {
        expect((await this.uIStatusLabel.innerText()).trim()).toBe('Approved');
    }

    async verify6071EnterStartTime(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6071) Enter Start Time');
        await this.popup.acknowledgeOk();
    }

    async verify6071EnterEndTime(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6071) Please Enter End Time');
        await this.popup.acknowledgeOk();
    }
}

export class FTOTestPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uITimeStartEdit: Locator;
    readonly uIEndDateEdit: Locator;
    readonly uITimeEndEdit: Locator;
    readonly uISaveNCloseIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uITimeStartEdit = page.locator('#hrsStart');
        this.uIEndDateEdit = page.locator('#dtEndDate_KPIDttmCtrl');
        this.uITimeEndEdit = page.locator('#hrsEnd');
        this.uISaveNCloseIcon = page.locator('#cmdSaveNClose');
    }

    async enterTimeStartAsCurrentTime(): Promise<void> {
        await this.uITimeStartEdit.click();
        await this.uITimeStartEdit.fill(DateHelpers.getCurrentTime('HH:mm'));
    }

    async enterEndDateAsFutureDate(): Promise<void> {
        await this.uIEndDateEdit.fill(DateHelpers.getFutureDate(1, 'MM/dd/yyyy'));
        await this.uIEndDateEdit.press('Tab');
        await this.uITimeEndEdit.fill(DateHelpers.getCurrentTime('HH:mm'));
        await this.uITimeEndEdit.press('Tab');
    }

    async saveAndClose(): Promise<void> {
        await this.elementHelpers.saveAndCloseWithAccept(this.uISaveNCloseIcon);
    }
}
