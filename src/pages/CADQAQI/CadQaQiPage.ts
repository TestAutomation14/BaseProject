
import { Page, Locator, expect } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { AcknowledgePage, ConfirmPage, PopupPage } from '../popup.page';
import { BaseData } from '../../data/base-data';
import { GridHelpers } from '../../helpers/grid-helpers';
import { ElementHelpers } from '../../helpers/element-helpers';
import { PopupHelpers } from '../../helpers/popup-helpers';
import { createFrameProxy, createPopupProxy } from '../../helpers/browser-helpers';
import console from 'node:console';
import { DateHelpers, RandomHelpers } from '../../helpers';

export class CADQAEvalFormPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly browserHelpers: BrowserHelpers;

    readonly uISearchButton: Locator;
    readonly uIAddNewEvalationButton: Locator;
    readonly uIIncludeInactiveCheckBox: Locator;
    readonly uISampleCheckBox: Locator;
    readonly uIEvalForResultGrid: Locator;
    readonly uITrainingTypeDropdown: Locator;
    readonly uISearchResultGrid: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIExcelIcon: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uIFormName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.browserHelpers = new BrowserHelpers(page);

        this.uISearchButton = page.locator('#btnsrch');
        this.uIAddNewEvalationButton = page.locator('#cmdAddEvaluation');
        this.uIIncludeInactiveCheckBox = page.locator('#chkInActive');
        this.uISampleCheckBox = page.locator('#chkSample');
        this.uIEvalForResultGrid = page.locator('#grdTask');
        this.uITrainingTypeDropdown = page.locator('#Trainingtype_DropDown');
        this.uISearchResultGrid = page.locator('#grdTask');
        this.uIPrintIcon = page.locator("//img[contains(@src,'print')]");
        this.uIExcelIcon = page.locator("//img[contains(@src,'excel')]");
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uIFormName = page.locator('#txtFormname');
    }

    async selectAtTrainingType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITrainingTypeDropdown, BaseData.getTestValue('FormType'));
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async verifyAtTrainingTypeInGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uISearchResultGrid, 'Training Type');
        for (const value of columnValues) {
            expect(value).toBe('Police CAD QA');
        }
    }

    async clickIncludeInactiveCheckbox(): Promise<void> {
        await this.uIIncludeInactiveCheckBox.click();
    }

    async verifyAtFormNameIsGreyedOutInGrid(jsonKeyIndex: number): Promise<void> {
        const formNameKey = jsonKeyIndex === 0 ? 'FormName' : `FormName${jsonKeyIndex}`;
        const formName = BaseData.getTestValue(formNameKey);
        const cell = await this.grid.getGridCell(this.uISearchResultGrid, formName, 'Form Name');
        const color = await cell.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(128, 128, 128, 1)');
    }

    async clickSampleCheckbox(): Promise<void> {
        await this.uISampleCheckBox.click();
    }

    async verifyFormNameInGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uISearchResultGrid, 'Form Name');
        for (const value of columnValues) {
            expect(value).toContain('Sample');
        }
    }

    async clickAddNewEvaluationButton(): Promise<void> {
        await this.uIAddNewEvalationButton.click();
    }

    async selectAtFormNameInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIEvalForResultGrid, BaseData.getTestValue('FormName'));
    }

    async verifyEvaluationFormEntryOpens(): Promise<void> {
        const exists = await this.browserHelpers.windowExistsByTitle('Evaluation Form Entry');
        expect(exists).toBe(true);
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async clickExcelIcon(): Promise<void> {
        await this.uIExcelIcon.click();
    }

    async verifyPerformanceEvaluationEntryOpens(): Promise<void> {
        const exists = await this.browserHelpers.windowExistsByTitle('Performance Evaluation Entry');
        expect(exists).toBe(true);
    }

    async verifyAddNewEvaluationButtonIsNotDisplayed(): Promise<void> {
        await expect(this.uIAddNewEvalationButton).not.toBeVisible();
    }

    async selectAtJuris(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIJurisDropdown, BaseData.getTestValue('Juris'));
    }

    async verifyJurisColAsBlank(): Promise<void> {
        const gridTableColumnValues = await this.grid.getGridTableColumnValues(this.uIEvalForResultGrid, 'Juris');
        for (const value of gridTableColumnValues) {
            expect(value.trim()).toBe('');
        }
    }

    async enterAtFormName(i: number): Promise<void> {
        await this.uIFormName.fill(BaseData.getTestValue(`FormName${i}`));
    }

    async verifyAtFormNameInGrid(): Promise<void> {
        const gridTableColumnValues = await this.grid.getGridTableColumnValues(this.uIEvalForResultGrid, 'Form Name');
        const expectedFormName = BaseData.getTestValue('FormName');
        for (const value of gridTableColumnValues) {
            expect(value).toContain(expectedFormName);
        }
    }

    async clearFormName(): Promise<void> {
        await this.uIFormName.clear();
    }

    async verify1011NoRecordFoundAck(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('1011 - No Record Found');
        await this.popup.acknowledgeOkButton.click();
    }
}

export class EvaluationFormEntryPage {
    readonly page: Page;
    readonly elementHelpers: ElementHelpers;

    readonly uIEvaluationFormTypeDropdown: Locator;
    readonly uIEvaluationFormNameEdit: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uICopyAndCreateNewFormButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uICategoryTab: Locator;
    readonly uIColumnsTab: Locator;
    readonly uICategoryGroupTab: Locator;
    readonly uIGuidelinesTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elementHelpers = new ElementHelpers(page);

        this.uIEvaluationFormTypeDropdown = page.locator('#cddFtotriningType_DropDown');
        this.uIEvaluationFormNameEdit = page.locator('#txtEvaluationFormName');
        this.uIDescriptionEdit = page.locator('#txtDescription');
        this.uICopyAndCreateNewFormButton = page.locator('#cmdCopyAndCreateNewForm');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uICategoryTab = page.locator("//span[text()='Category']");
        this.uIColumnsTab = page.locator("//span[text()='Columns']");
        this.uICategoryGroupTab = page.locator("//span[text()='Category Group']");
        this.uIGuidelinesTab = page.locator("//span[text()='Guidelines']");
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
}

export class EvaluationSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uISearchButton: Locator;
    readonly uICADQAYearEdit: Locator;
    readonly uICADQANumberEdit: Locator;
    readonly uISearchResultGrid: Locator;
    readonly uIBackButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIServiceTypeDropdown: Locator;
    readonly uIResetButton: Locator;
    readonly uIEvaluationFormDropdown: Locator;
    readonly uIEvaluationForPF: Locator;
    readonly uIEvaluationByPF: Locator;
    readonly uISeeSupervisorCheckbox: Locator;
    readonly uIExceedStandardCheckbox: Locator;
    readonly uIRecommendedRemedialTrainingCheckbox: Locator;
    readonly uICommentsContain: Locator;
    readonly uIOverallScoreFromEdit: Locator;
    readonly uIOverallScoreToEdit: Locator;
    readonly uICallYearEdit: Locator;
    readonly uICallNumberEdit: Locator;
    readonly uICFSCodeDropdown: Locator;
    readonly uIPriorityEdit: Locator;
    readonly uIReceivedSourceEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uISearchButton = page.locator("//span[contains(text(),'Search')]");
        this.uICADQAYearEdit = page.locator('#txtCADQANumber_Year');
        this.uICADQANumberEdit = page.locator('#txtCADQANumber_Number');
        this.uISearchResultGrid = page.locator('#grdEvaluationSearch');
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIServiceTypeDropdown = page.locator('#cddServiceType_DropDown');
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
        this.uIEvaluationFormDropdown = page.locator('#DDLEvaluationForm');
        this.uIEvaluationForPF = page.locator('#lupEvaluatinForPF_CodeValue');
        this.uIEvaluationByPF = page.locator('#lupEvaluationByPF_CodeValue');
        this.uISeeSupervisorCheckbox = page.locator('#chkSeeSupervisor');
        this.uIExceedStandardCheckbox = page.locator('#chkExceedStandards');
        this.uIRecommendedRemedialTrainingCheckbox = page.locator('#chkRemedialTraining');
        this.uICommentsContain = page.locator('#txtCommentsContain');
        this.uIOverallScoreFromEdit = page.locator('#txtOverallScoreFrom');
        this.uIOverallScoreToEdit = page.locator('#txtOverallScoreTo');
        this.uICallYearEdit = page.locator('#txtCallNumber_Year');
        this.uICallNumberEdit = page.locator('#txtCallNumber_Number');
        this.uICFSCodeDropdown = page.locator('#rdCADCFSCode_Input');
        this.uIPriorityEdit = page.locator('#txtPriority');
        this.uIReceivedSourceEdit = page.locator('#lupReceivedSource_CodeValue');
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async enterAtCADQANo(): Promise<void> {
        const cadqaNo = BaseData.getTestValue('CADQAQINo');
        await this.uICADQAYearEdit.click();
        await this.uICADQAYearEdit.fill(cadqaNo.substring(0, 2));
        await this.uICADQANumberEdit.click();
        await this.uICADQANumberEdit.fill(cadqaNo.substring(3));
        await this.uICADQANumberEdit.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async selectAtCADQANo(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.grid.selectRowByCellText(this.uISearchResultGrid, BaseData.getTestValue('CADQAQINo'));
        await this.page.waitForTimeout(1000);
    }

    async clickBackLink(): Promise<void> {
        await this.uIBackButton.click();
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async selectAtServiceType(): Promise<void> {
        await this.uIServiceTypeDropdown.click();
    }

    async verifyAtServiceTypeColumnValues(): Promise<void> {
        const gridTableColumnValues = await this.grid.getGridTableColumnValues(this.uISearchResultGrid, 'Service Type');
        const expected = BaseData.getTestValue('ServiceType');
        for (const value of gridTableColumnValues) {
            expect(value).toBe(expected);
        }
    }

    async clickReset(): Promise<void> {
        await this.uIResetButton.click();
    }

    async verifyAtCADQANoInGrid(): Promise<void> {
        const actual = await this.grid.getGridCellInnerText(this.uISearchResultGrid, 'QA#', 0);
        expect(actual).toBe(BaseData.getTestValue('CADQAQINo'));
    }

    async selectAtEvaluationForm(): Promise<void> {
        await this.uIEvaluationFormDropdown.click();
        await this.elementHelpers.selectDropDownOption(this.uIEvaluationFormDropdown, BaseData.getTestValue('EvaluationForm'));
    }

    async verifyAtEvaluationFormColumnValues(): Promise<void> {
        const gridTableColumnValues = await this.grid.getGridTableColumnValues(this.uISearchResultGrid, 'Evaluation Form');
        const expected = BaseData.getTestValue('EvaluationForm');
        for (const value of gridTableColumnValues) {
            expect(value).toBe(expected);
        }
    }

    async enterAtEvaluationForPF(): Promise<void> {
        await this.uIEvaluationForPF.fill(BaseData.getTestValue('EvaluationForPF'));
    }

    async verifyAtEvaluationForColumnValues(): Promise<void> {
        const gridTableColumnValues = await this.grid.getGridTableColumnValues(this.uISearchResultGrid, 'Evaluation For');
        const expected = BaseData.getTestValue('EvaluationFor');
        for (const value of gridTableColumnValues) {
            expect(value).toBe(expected);
        }
    }

    async enterAtEvaluationByPF(): Promise<void> {
        await this.uIEvaluationByPF.fill(BaseData.getTestValue('EvaluationByPF'));
    }

    async verifyAtEvaluationByColumnValues(): Promise<void> {
        const gridTableColumnValues = await this.grid.getGridTableColumnValues(this.uISearchResultGrid, 'Evaluation By');
        const expected = BaseData.getTestValue('EvaluationBy');
        for (const value of gridTableColumnValues) {
            expect(value).toBe(expected);
        }
    }

    async clickSeeSupervisorCheckbox(): Promise<void> {
        await this.uISeeSupervisorCheckbox.click();
    }

    async clickRandomRecordInGrid(): Promise<void> {
        await this.grid.selectRandomRow(this.uISearchResultGrid);
    }

    async clickExceedStandardsCheckbox(): Promise<void> {
        await this.uIExceedStandardCheckbox.click();
    }

    async clickRecommendedRemedialTraingCheckbox(): Promise<void> {
        await this.uIRecommendedRemedialTrainingCheckbox.click();
    }

    async enterAtComments(): Promise<void> {
        await this.uICommentsContain.fill(BaseData.getTestValue('Comments'));
    }

    async enterAtOverallScoreFrom(): Promise<void> {
        await this.uIOverallScoreFromEdit.click();
    }

    async enterAtOverallScoreTo(): Promise<void> {
        await this.uIOverallScoreToEdit.click();
    }

    async enterAtCallNo(): Promise<void> {
        const callNo = BaseData.getTestValue('CallNo');
        await this.uICallYearEdit.click();
        await this.uICallYearEdit.fill(callNo.substring(0, 2));
        await this.uICallNumberEdit.click();
        await this.uICallNumberEdit.fill(callNo.substring(3));
        await this.uICallNumberEdit.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async verifyAtCallNoInGrid(): Promise<void> {
        const actual = await this.grid.getGridCellInnerText(this.uISearchResultGrid, 'Call#', 0);
        expect(actual).toBe(BaseData.getTestValue('CallNo'));
    }

    async selectAtCFSCode(): Promise<void> {
        await this.uICFSCodeDropdown.click();
    }

    async verifyAtCFSColumnValues(): Promise<void> {
        const gridTableColumnValues = await this.grid.getGridTableColumnValues(this.uISearchResultGrid, 'CFS');
        const expected = BaseData.getTestValue('CFS');
        for (const value of gridTableColumnValues) {
            expect(value).toBe(expected);
        }
    }

    async entetAtPrioriry(): Promise<void> {
        await this.uIPriorityEdit.fill(BaseData.getTestValue('Priority'));
    }

    async enterAtReceivedSource(): Promise<void> {
        await this.uIReceivedSourceEdit.fill(BaseData.getTestValue('ReceivedSource'));
    }

    async selectAtServiceType1(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIServiceTypeDropdown, BaseData.getTestValue('ServiceType'));
    }

    async verifyEvaluationFormColumnValuesNotUnique(): Promise<void> {
        const gridTableColumnValues = await this.grid.getGridTableColumnValues(this.uISearchResultGrid, 'Evaluation Form');
        const uniqueValues = new Set(gridTableColumnValues);
        expect(uniqueValues.size).toBeGreaterThan(1);
    }
}

export class EvaluationFinalizationTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIExceedsStandardsCheckbox: Locator;
    readonly uIRecommendRemedialTrainingCheckbox: Locator;
    readonly uIEvaluatorApprovalText: Locator;
    readonly uICommentsText: Locator;
    readonly uISeeSupervisorCheckbox: Locator;
    readonly uIPFNoLookupIcon: Locator;
    readonly uIEvaluatorApprovalSignCheckbox: Locator;
    readonly uIForwardToEvaluateeReviewCheckbox: Locator;
    readonly uIEvaluateeReviewSignCheckbox: Locator;
    readonly uIEvaluatorApprovalSignature: Locator;
    readonly uIEvaluateeReviewSignature: Locator;
    readonly uIScoreSummaryText: Locator;
    readonly uIEvaluatorApprovalSignField: Locator;
    readonly uIPFNoLabel: Locator;
    readonly uIEvaluatorApprovalLabel: Locator;
    readonly uICommentsTextEdit: Locator;
    readonly uIEraseIcon: Locator;
    readonly uIOverallScoreLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIExceedsStandardsCheckbox = page.locator('#tabEvaluationEntry_tmpl3_usrDorApproval_ChkExceedstrd');
        this.uIRecommendRemedialTrainingCheckbox = page.locator('#tabEvaluationEntry_tmpl3_usrDorApproval_ChkRecomtraining');
        this.uIEvaluatorApprovalText = page.locator('#tabEvaluationEntry_tmpl3_usrDorApproval_lblftoaproval');
        this.uICommentsText = page.locator('#tabEvaluationEntry_tmpl3_usrDorApproval_lblcomments');
        this.uISeeSupervisorCheckbox = page.locator('#tabEvaluationEntry_tmpl3_usrDorApproval_ChkSeeSupervisor');
        this.uIPFNoLookupIcon = page.locator('#tabEvaluationEntry_tmpl3_usrDorApproval_lupOffFt0Supfinal_imgBtn');
        this.uIEvaluatorApprovalSignCheckbox = page.locator('#tabEvaluationEntry_tmpl3_usrDorApproval_chkFTOSigntrainee');
        this.uIForwardToEvaluateeReviewCheckbox = page.locator('#tabEvaluationEntry_tmpl3_usrDorApproval_chktraineereview');
        this.uIEvaluateeReviewSignCheckbox = page.locator('#tabEvaluationEntry_tmpl3_usrDorApproval_chkSigntrainee');
        this.uIEvaluatorApprovalSignature = page.locator('#tabEvaluationEntry_tmpl3_usrDorApproval_imgFtoSign');
        this.uIEvaluateeReviewSignature = page.locator('#tabEvaluationEntry_tmpl3_usrDorApproval_imgsigntrainee');
        this.uIScoreSummaryText = page.locator('#tabEvaluationEntry_tmpl3_usrDorApproval_KPILabel3');
        this.uIEvaluatorApprovalSignField = page.locator('#tabEvaluationEntry_tmpl3_usrDorApproval_imgFtoSign');
        this.uIPFNoLabel = page.locator('#tabEvaluationEntry_tmpl3_usrDorApproval_lblPFfinal');
        this.uIEvaluatorApprovalLabel = page.locator('#tabEvaluationEntry_tmpl3_usrDorApproval_lblftoaproval');
        this.uICommentsTextEdit = page.locator('#tabEvaluationEntry_tmpl3_usrDorApproval_txtComments');
        this.uIEraseIcon = page.locator('#tabEvaluationEntry_tmpl3_usrDorApproval_imgFTOClear');
        this.uIOverallScoreLabel = page.locator("//tr[@class='OverallScore']/td[contains(text(),'Overall Score')]");
    }

    async clickExceedsStandardsCheckbox(): Promise<void> {
        await this.uIExceedsStandardsCheckbox.click();
    }

    async verifyExceedsStandardsCheckboxIsChecked(): Promise<void> {
        await expect(this.uIExceedsStandardsCheckbox).toBeChecked();
    }

    async clickRecommendRemedialTrainingCheckbox(): Promise<void> {
        await this.uIRecommendRemedialTrainingCheckbox.click();
    }

    async clickSeeSupervisorCheckbox(): Promise<void> {
        await this.uISeeSupervisorCheckbox.click();
    }

    async verifyRecommendRemedialTrainingCheckboxIsChecked(): Promise<void> {
        await expect(this.uIRecommendRemedialTrainingCheckbox).toBeChecked();
    }

    async verifySeeSupervisorCheckboxIsChecked(): Promise<void> {
        await expect(this.uISeeSupervisorCheckbox).toBeChecked();
    }

    async verifyPFNoLookUpIsDisplayed(): Promise<void> {
        await expect(this.uIPFNoLookupIcon).toBeVisible();
    }

    async selectPFNo(): Promise<void> {
        await this.uIPFNoLookupIcon.click();
        const popupPage = new PopupPage(this.page);
        await popupPage.switchToCodedSearch();
        await popupPage.kPICodedLookup.randomKPIHelpSelect();
    }

    async verifyEvaluatorApprovalIsDisplayed(): Promise<void> {
        await expect(this.uIEvaluatorApprovalText).toBeVisible();
    }

    async verifyCommentsIsDisplayed(): Promise<void> {
        await expect(this.uICommentsText).toBeVisible();
    }

    async clickEvaluatorApprovalSignCheckbox(): Promise<void> {
        await this.uIEvaluatorApprovalSignCheckbox.click();
    }

    async clickForwardToEvaluateeReviewCheckbox(): Promise<void> {
        await this.uIForwardToEvaluateeReviewCheckbox.click();
    }

    async verifyForwardToEvaluateeReviewCheckboxIsChecked(): Promise<void> {
        await expect(this.uIForwardToEvaluateeReviewCheckbox).toBeChecked();
    }

    async verifyEvaluateeReviewSignCheckBoxIsEnabled(): Promise<void> {
        await expect(this.uIEvaluateeReviewSignCheckbox).toBeEnabled();
    }

    async clickEvaluateeReviewSignCheckbox(): Promise<void> {
        await this.uIEvaluateeReviewSignCheckbox.click();
    }

    async verifyScoreSummaryFieldIsDisplayed(): Promise<void> {
        await expect(this.uIScoreSummaryText).toBeVisible();
    }

    async verifyEvaluatorApprovalSignatureIsDisplayed(): Promise<void> {
        const src = await this.uIEvaluatorApprovalSignature.getAttribute('src') || '';
        expect(src).not.toContain('NoSignature.jpg');
    }

    async verifyEvaluateeReviewSignatureIsDisplayed(): Promise<void> {
        const src = await this.uIEvaluateeReviewSignature.getAttribute('src') || '';
        expect(src).not.toContain('NoSignature.jpg');
    }

    async verifySignIsUploded(): Promise<void> {
        const text = await this.uIEvaluatorApprovalSignField.getAttribute('src') || '';
        expect(text).not.toContain('NoSignature');
    }

    async verifyPFNoIsMandatory(): Promise<void> {
        const color = await this.uIPFNoLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(153, 0, 0, 1)');
    }

    async verifySignIsRemoved(): Promise<void> {
        const text = await this.uIEvaluatorApprovalSignField.getAttribute('src') || '';
        expect(text).toContain('NoSignature');
    }

    async verifyColumnHeadersInScoreSummary(colHeaders: string[]): Promise<void> {
        expect(colHeaders).toContain('Category Group');
        expect(colHeaders).toContain('Possible Points');
        expect(colHeaders).toContain('Scored Points');
        expect(colHeaders).toContain('% Correct');
    }

    async verifyEvaluatorApprovalLabelIsDisplayed(): Promise<void> {
        await expect(this.uIEvaluatorApprovalLabel).toBeVisible();
    }

    async enterAtComments(): Promise<void> {
        await this.uICommentsTextEdit.fill(BaseData.getTestValue('Comments'));
    }

    async verifyAtComments(): Promise<void> {
        const actual = await this.uICommentsTextEdit.inputValue();
        expect(actual).toBe(BaseData.getTestValue('Comments'));
    }

    async verifyAtOverallScorePercentage(): Promise<void> {
        const allColumns = this.page.locator("//tr[@class='OverallScore']/td");
        const count = await allColumns.count();
        const displayedColumnNames: string[] = [];
        for (let i = 0; i < count; i++) {
            const col = allColumns.nth(i);
            if (await col.isVisible() || await col.isEnabled()) {
                const text = (await col.innerText()).trim();
                if (text) {
                    displayedColumnNames.push(text);
                }
            }
        }
        expect(displayedColumnNames).toContain('100%');
    }

    async clickEvaluateeReviewSignCheckBox(): Promise<void> {
        await this.uIEvaluateeReviewSignCheckbox.click();
    }

    async clickEraseIcon(): Promise<void> {
        await this.uIEraseIcon.click();
    }

    async getColumnHeadersInScoreSummary(): Promise<string[]> {
        const allColumns = this.page.locator("//div[@id='tabEvaluationEntry_tmpl3_usrDorApproval_grdfinalization']//table//tbody//tr/th");
        const count = await allColumns.count();
        const displayedColumnNames: string[] = [];
        for (let i = 0; i < count; i++) {
            const col = allColumns.nth(i);
            if (await col.isVisible() || await col.isEnabled()) {
                const text = (await col.innerText()).trim();
                if (text) {
                    displayedColumnNames.push(text);
                }
            }
        }
        return displayedColumnNames;
    }

    async verifyOverallScoreLabelIsDisplayed(): Promise<void> {
        await expect(this.uIOverallScoreLabel).toBeVisible();
    }
}

export class EvaluationApprovalTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIActionDropdown: Locator;
    readonly uIInternalSaveButton: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIActionDropdown = page.locator('#lstStatus');
        this.uIInternalSaveButton = page.locator('#cmdSave');
        this.uIDateEdit = page.locator('#dttStatusDttm_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id ='dttStatusDttm_Time']//input");
    }

    async verifyActionsListedInNewAction(): Promise<void> {
        const actions = await this.elementHelpers.getDropDownValues(this.uIActionDropdown);
        expect(actions).toContain('Send for Approval');
        expect(actions).toContain('Comment');
    }

    async selectAtNewAction(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIActionDropdown, BaseData.getTestValue('NewAction'));
    }

    async tabOutDateAndTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async clickInternalSave(): Promise<void> {
        await this.uIInternalSaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async selectActionAsApprove(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIActionDropdown, 'Approve');
    }
}

export class EvaluationTabPage {
    readonly page: Page;
    readonly browserHelpers: BrowserHelpers;

    readonly uIRatingInstruction: Locator;
    readonly uIScoreValue: Locator;
    readonly uIMaxValue: Locator;

    constructor(page: Page) {
        this.page = page;
        this.browserHelpers = new BrowserHelpers(page);

        this.uIRatingInstruction = page.locator('#tabEvaluationEntry_tmpl0_usrDOREvaluation_lnkRatingInstruction');
        this.uIScoreValue = page.locator("(//div[@id='grdSubCategory']//tr/td[@class='k-table-td'])[1]");
        this.uIMaxValue = page.locator("(//div[@id='grdSubCategory']//tr/td[@class='k-table-td'])[2]");
    }

    async verifyColumnHeadersInEvaluationForm(colHeader: string[]): Promise<void> {
        expect(colHeader).toContain('#');
        expect(colHeader).toContain('Category (Task/Skill/Behaviour)');
        expect(colHeader).toContain('Yes');
        expect(colHeader).toContain('Refused');
        expect(colHeader).toContain('No');
        expect(colHeader).toContain('NA');
        expect(colHeader).toContain('Cmt');
        expect(colHeader).toContain('Score');
        expect(colHeader).toContain('Max');
    }

    async clickYesColumnInEvaluationForm(): Promise<void> {
        for (let i = 1; i <= 125; i += 4) {
            const element = this.page.locator(`(//td[contains(@class,'UppercaseCss k-table-td')])[${i}]`);
            if (i === 65 || i === 77 || i === 125) {
                await this.page.waitForTimeout(500);
                await this.page.locator("(//td[contains(@class,'UppercaseCss k-table-td')])[65]").click();
                await this.page.locator("(//td[contains(@class,'UppercaseCss k-table-td')])[77]").click();
                await this.page.locator("(//td[contains(@class,'UppercaseCss k-table-td')])[125]").click();
            }
            await element.scrollIntoViewIfNeeded();
            await element.click();
        }
    }

    async clickRatingInstruction(): Promise<void> {
        await this.uIRatingInstruction.click();
    }

    async getColumnHeadersInEvaluationForm(): Promise<string[]> {
        const allColumns = this.page.locator("//div[@id='grdCategory']//table/thead/tr[@class='k-table-row']/th");
        const count = await allColumns.count();
        const displayedColumnNames: string[] = [];
        for (let i = 0; i < count; i++) {
            const col = allColumns.nth(i);
            if (await col.isVisible() || await col.isEnabled()) {
                const text = (await col.innerText()).trim();
                if (text) {
                    displayedColumnNames.push(text);
                }
            }
        }
        return displayedColumnNames;
    }

    async verifyScoreValueIsDisplayed(): Promise<void> {
        await expect(this.uIScoreValue).toBeVisible();
    }

    async verifyMaxValueIsDisplayed(): Promise<void> {
        await expect(this.uIMaxValue).toBeVisible();
    }

    async switchToCategoryFrame(): Promise<void> {
        await this.browserHelpers.switchToFrame('frmCategoryView');
    }
}

export class EvaluationNarrativeTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly browserHelpers: BrowserHelpers;

    readonly uITemplateDropdown: Locator;
    readonly uILoadButton: Locator;
    readonly uIInternalSaveButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uINarrativeRichTextEdit: Locator;
    readonly uINarrativeEditField: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.browserHelpers = new BrowserHelpers(page);

        this.uITemplateDropdown = page.locator('#ctrlUsrKPITxtEdit_lstTextName');
        this.uILoadButton = page.locator('#ctrlUsrKPITxtEdit_cmdload');
        this.uIInternalSaveButton = page.locator('#cmdInternalSave');
        this.uIAddNewButton = page.locator('#ctrlUsrKPITxtEdit_cmdAddnew');
        this.uINarrativeRichTextEdit = page.locator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        this.uINarrativeEditField = page.locator('body');
    }

    async selectAtTemplate(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITemplateDropdown, BaseData.getTestValue('Template'));
    }

    async clickLoadButton(): Promise<void> {
        await this.uILoadButton.click();
    }

    async verifyAtTextInRichTextEdit(): Promise<void> {
        const frame = this.page.frameLocator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        const text = await frame.locator('body').innerText();
        expect(text).toContain(BaseData.getTestValue('Text'));
    }

    async clickIntenalSave(): Promise<void> {
        await this.uIInternalSaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickTemplate(): Promise<void> {
        await this.uITemplateDropdown.click();
    }

    async verifyAtTemplate(i: number): Promise<void> {
        const templates = await this.elementHelpers.getDropDownValues(this.uITemplateDropdown);
        expect(templates).toContain(BaseData.getTestValue(`Template${i}`));
    }
}

export class EvaluationEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly browserHelpers: BrowserHelpers;

    readonly finalizationTab: EvaluationFinalizationTabPage;
    readonly approvalTab: EvaluationApprovalTabPage;
    readonly narrativeTab: EvaluationNarrativeTabPage;
    readonly evaluationTab: EvaluationTabPage;

    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uISaveAndAddNewButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uIServiceTypeDropdown: Locator;
    readonly uIEvaluationForPFDropdown: Locator;
    readonly uIEvalautionFormDropdown: Locator;
    readonly uIDateEdit: Locator;
    readonly uICallYearEdit: Locator;
    readonly uICallNumberEdit: Locator;
    readonly uIEvaluationTab: Locator;
    readonly uINarrativeTab: Locator;
    readonly uIAttachmentTab: Locator;
    readonly uIFinalizationTab: Locator;
    readonly uITrainingTab: Locator;
    readonly uIApprovalTab: Locator;
    readonly uIActiveCallView: Locator;
    readonly uIStackedCallView: Locator;
    readonly uIStatusBar: Locator;
    readonly uIApprovalStatusValue: Locator;
    readonly uIApprovalStatusText: Locator;
    readonly uIBottomStatusMessage: Locator;
    readonly uILocationLabel: Locator;
    readonly uICFSCodeLabel: Locator;
    readonly uICFSCodeValue: Locator;
    readonly uIDispositionLabel: Locator;
    readonly uIPriorityLabel: Locator;
    readonly uIPriorityValue: Locator;
    readonly uIReportedTimeLabel: Locator;
    readonly uIReportedTimeValue: Locator;
    readonly uIStackedTimeLabel: Locator;
    readonly uIStackedTimeValue: Locator;
    readonly uIDispatchTimeLabel: Locator;
    readonly uIDispatchTimeValue: Locator;
    readonly uIDayOfWeekLabel: Locator;
    readonly uIDayOfWeekValue: Locator;
    readonly uIStackedTimeDurationLabel: Locator;
    readonly uIAtTheTimeCallReceivedLabel: Locator;
    readonly uIActiveCallLabel: Locator;
    readonly uIActiveCallValue: Locator;
    readonly uIStackedCallLabel: Locator;
    readonly uIStackedCallValue: Locator;
    readonly uILawUnitsODLabel: Locator;
    readonly uILawUnitsValue: Locator;
    readonly uIShiftDurationElapsedLabel: Locator;
    readonly uIDispatchTimeDurationLabel: Locator;
    readonly uIStackedTimeDurationValue: Locator;
    readonly uIEvaluationForPFInfo: Locator;
    readonly uIEvaluationLabel: Locator;
    readonly uICompletedLabel: Locator;
    readonly uIScoreLabel: Locator;
    readonly uIScoreValue: Locator;
    readonly uIPercentageLabel: Locator;
    readonly uIPercentageValue: Locator;
    readonly uICallInfoIcon: Locator;
    readonly uICallReceiptIcon: Locator;
    readonly uILocationValue: Locator;
    readonly uIDispositionValue: Locator;
    readonly uIDispatchTimeDurationValue: Locator;
    readonly uIShiftDurationElapsedValue: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.browserHelpers = new BrowserHelpers(page);

        this.finalizationTab = new EvaluationFinalizationTabPage(page);
        this.approvalTab = new EvaluationApprovalTabPage(page);
        this.narrativeTab = new EvaluationNarrativeTabPage(page);
        this.evaluationTab = new EvaluationTabPage(page);

        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uISaveAndAddNewButton = page.locator('#cmdSaveNAddNew');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uIServiceTypeDropdown = page.locator('#cddServiceType_DropDown');
        this.uIEvaluationForPFDropdown = page.locator('#DDLEvaluationForPF');
        this.uIEvalautionFormDropdown = page.locator('#cddEvaluationForm');
        this.uIDateEdit = page.locator('#Date_KPIDttmCtrl');
        this.uICallYearEdit = page.locator('#txtCallNumber_Year');
        this.uICallNumberEdit = page.locator('#txtCallNumber_Number');
        this.uIEvaluationTab = page.locator("//span[text()='Evaluation']");
        this.uINarrativeTab = page.locator("//span[text()='Narrative']");
        this.uIAttachmentTab = page.locator("//span[text()='Attachment']");
        this.uIFinalizationTab = page.locator("//span[text()='Finalization']");
        this.uITrainingTab = page.locator("//span[text()='Training']");
        this.uIApprovalTab = page.locator("//span[text()='Approval']");
        this.uIActiveCallView = page.locator('#lbActiveView');
        this.uIStackedCallView = page.locator('#lbStackView');
        this.uIStatusBar = page.locator("//td[@class='statusBar']");
        this.uIApprovalStatusValue = page.locator('#lblApprovalStatus');
        this.uIApprovalStatusText = page.locator('#approvalStatus');
        this.uIBottomStatusMessage = page.locator("//td[@class='statusBar']//b");
        this.uILocationLabel = page.locator('#lblLocation');
        this.uICFSCodeLabel = page.locator('#lblCFSCode');
        this.uICFSCodeValue = page.locator('#lblCFSValue');
        this.uIDispositionLabel = page.locator('#lblDisposition');
        this.uIPriorityLabel = page.locator('#lblPri');
        this.uIPriorityValue = page.locator('#lblPriNo');
        this.uIReportedTimeLabel = page.locator('#lblReportedtime');
        this.uIReportedTimeValue = page.locator('#lblReportedDateTime');
        this.uIStackedTimeLabel = page.locator('#lblStackedTime');
        this.uIStackedTimeValue = page.locator('#lblStackedDateTime');
        this.uIDispatchTimeLabel = page.locator('#lblDispatchTime');
        this.uIDispatchTimeValue = page.locator('#lblDispatchDateTime');
        this.uIDayOfWeekLabel = page.locator('#lblDayOfWeek');
        this.uIDayOfWeekValue = page.locator('#lblDayOfWk');
        this.uIStackedTimeDurationLabel = page.locator('#lblstackedTimeDuration');
        this.uIAtTheTimeCallReceivedLabel = page.locator('#lblCall');
        this.uIActiveCallLabel = page.locator('#lblActiveCalls');
        this.uIActiveCallValue = page.locator('#lblActiveCallCount');
        this.uIStackedCallLabel = page.locator('#lblStackedCalls');
        this.uIStackedCallValue = page.locator('#lblStackedCallsCount');
        this.uILawUnitsODLabel = page.locator('#lblLawUnits');
        this.uILawUnitsValue = page.locator('#lblLawUnitsCount');
        this.uIShiftDurationElapsedLabel = page.locator('#lblShift');
        this.uIDispatchTimeDurationLabel = page.locator('#lblDispatchDuration');
        this.uIStackedTimeDurationValue = page.locator('#lblstackedTimeDurationSeconds');
        this.uIEvaluationForPFInfo = page.locator('#ImgIcon');
        this.uIEvaluationLabel = page.locator('#lblEvaluation');
        this.uICompletedLabel = page.locator('#lblprogress');
        this.uIScoreLabel = page.locator('#spnscore');
        this.uIScoreValue = page.locator('#lblScore');
        this.uIPercentageLabel = page.locator('#spnpercentage');
        this.uIPercentageValue = page.locator('#lblPercentage');
        this.uICallInfoIcon = page.locator('#txtCallNumber_imgBtn');
        this.uICallReceiptIcon = page.locator('#txtCallNumber_imgRcptBtn');
        this.uILocationValue = page.locator('#lbAddressLink');
        this.uIDispositionValue = page.locator('#lblDispostionValue');
        this.uIDispatchTimeDurationValue = page.locator('#lblDispatchDurationSeconds');
        this.uIShiftDurationElapsedValue = page.locator('#lblShifthrs');
    }

    async enterAtCallNo(): Promise<void> {
        const callNo = BaseData.getTestValue('CallNo');
        await this.uICallYearEdit.fill(callNo.substring(0, 2));
        await this.uICallNumberEdit.fill(callNo.substring(2));
        await this.uICallNumberEdit.press('Tab');
    }

    async selectAtServiceType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIServiceTypeDropdown, BaseData.getTestValue('ServiceType'));
    }

    async selectAtEvaluationForPF(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIEvaluationForPFDropdown, BaseData.getTestValue('EvaluationForPF'));
    }

    async selectAtEvaluationForm(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIEvalautionFormDropdown, BaseData.getTestValue('EvaluationForm'));
    }

    async switchToNarrativeTab(): Promise<void> {
        await this.uINarrativeTab.click();
        await this.browserHelpers.switchToFrameById('tabEvaluationEntry_tmpl1_Narrative');
    }

    async switchToNarrativeTabAfterSave(): Promise<void> {
        await this.uINarrativeTab.click();
        await this.browserHelpers.switchToFrame('Home/frmTextMgrEx.aspx?');
    }

    async switchToEvaluationTab(): Promise<void> {
        await this.uIEvaluationTab.click();
        await this.browserHelpers.switchToFrame('frmCategoryView.aspx');
    }

    async clickActiveCallViewLink(): Promise<void> {
        await this.uIActiveCallView.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verifyAlreadyExistCallAndPFAckMsg(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(6071) Already exist against the Call No and For PF');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyUpdateSuccessful(): Promise<void> {
        const text = await this.uIStatusBar.innerText();
        expect(text).toContain('1003 - Update Successful');
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async clickEvaluationTab(): Promise<void> {
        await this.uIEvaluationTab.click();
    }

    async switchToAttachmentTab(): Promise<void> {
        await this.uIAttachmentTab.click();
        await this.browserHelpers.switchToFrame('frmTxtAttachMgrEx.aspx');
    }

    async clickFinalizationTab(): Promise<void> {
        await this.uIFinalizationTab.click();
    }

    async clickTrainingTab(): Promise<void> {
        await this.uITrainingTab.click();
    }

    async switchToApprovalTab(): Promise<void> {
        await this.uIApprovalTab.click();
        await this.browserHelpers.switchToFrame('frmPnxGlobalApproval.aspx');
    }

    async verifyLocationLabelIsDisplayed(): Promise<void> {
        await expect(this.uILocationLabel).toBeVisible();
    }

    async verifyCFSCodeLabelIsDisplayed(): Promise<void> {
        await expect(this.uICFSCodeLabel).toBeVisible();
    }

    async verifyAtCFSCodeValue(): Promise<void> {
        const text = await this.uICFSCodeValue.innerText();
        console.log(text);
    }

    async verifyDispositionLabelIsDisplayed(): Promise<void> {
        await expect(this.uIDispositionLabel).toBeVisible();
    }

    async verifyPriorityLabelIsDisplayed(): Promise<void> {
        await expect(this.uIPriorityLabel).toBeVisible();
    }

    async verifyAtPriorityValue(): Promise<void> {
        const text = await this.uIPriorityValue.innerText();
        console.log(text);
    }

    async verifyReportedTimeLabelIsDisplayed(): Promise<void> {
        await expect(this.uIReportedTimeLabel).toBeVisible();
    }

    async verifyAtReportedTimeValue(): Promise<void> {
        const text = await this.uIReportedTimeValue.innerText();
        console.log(text);
    }

    async verifyStackedTimeLabelIsDisplayed(): Promise<void> {
        await expect(this.uIStackedTimeLabel).toBeVisible();
    }

    async verifyAtStackedTimeValue(): Promise<void> {
        const text = await this.uIStackedTimeValue.innerText();
        console.log(text);
    }

    async verifyDispatchTimeLabelIsDisplayed(): Promise<void> {
        await expect(this.uIDispatchTimeLabel).toBeVisible();
    }

    async verifyAtDispatchTimeValue(): Promise<void> {
        const text = await this.uIDispatchTimeValue.innerText();
        console.log(text);
    }

    async verifyDayOfWeekLabelIsDispalyed(): Promise<void> {
        await expect(this.uIDayOfWeekLabel).toBeVisible();
    }

    async verifyAtDayOfWeekValue(): Promise<void> {
        const text = await this.uIDayOfWeekValue.innerText();
        console.log(text);
    }

    async verifyStackedTimeDurationLabelIsDispalyed(): Promise<void> {
        await expect(this.uIStackedTimeDurationLabel).toBeVisible();
    }

    async verifyAtTheTimeOfTheCallReceivedLabelIsDisplayed(): Promise<void> {
        await expect(this.uIAtTheTimeCallReceivedLabel).toBeVisible();
    }

    async verifyNoOfActiveCallsLabelIsDisplayed(): Promise<void> {
        await expect(this.uIActiveCallLabel).toBeVisible();
    }

    async verifyAtActiveCallsValue(): Promise<void> {
        const text = await this.uIActiveCallValue.innerText();
        console.log(text);
    }

    async verifyNoOfStackedCallsLabelIsDisplayed(): Promise<void> {
        await expect(this.uIStackedCallLabel).toBeVisible();
    }

    async verifyAtNoOfStackedCallsValue(): Promise<void> {
        const text = await this.uIStackedCallValue.innerText();
        console.log(text);
    }

    async verifyNoOfLawUnitsODLabelIsDisplayed(): Promise<void> {
        await expect(this.uILawUnitsODLabel).toBeVisible();
    }

    async verifyAtNoOfLawUnitsODValue(): Promise<void> {
        const text = await this.uILawUnitsValue.innerText();
        console.log(text);
    }

    async verifyShiftDurationElapsedLabelIsDispalyed(): Promise<void> {
        await expect(this.uIShiftDurationElapsedLabel).toBeVisible();
    }

    async verifyDispatchTimeDurationLabelIsDisplayed(): Promise<void> {
        await expect(this.uIDispatchTimeDurationLabel).toBeVisible();
    }

    async verifyAtStackedTimeDurationValue(): Promise<void> {
        const text = await this.uIStackedTimeDurationValue.innerText();
        console.log(text);
    }

    async verifyActiveCallViewLinkIsDisplayed(): Promise<void> {
        await expect(this.uIActiveCallView).toBeVisible();
    }

    async verifyStackedCallViewLinkIsDisplayed(): Promise<void> {
        await expect(this.uIStackedCallView).toBeVisible();
    }

    async verifyDateAsCurrentDate(): Promise<void> {
        const dateVal = await this.uIDateEdit.inputValue();
        const currentDate = DateHelpers.getCurrentDate('MM/dd/yyyy');
        expect(dateVal).toBe(currentDate);
    }

    async verifyEvaluationForPFInfoIconIsDisplayed(): Promise<void> {
        await expect(this.uIEvaluationForPFInfo).toBeVisible();
    }

    async verifyEvaluationLabelIsDisplayed(): Promise<void> {
        await expect(this.uIEvaluationLabel).toBeVisible();
    }

    async verifyCompletedLabelIsDisplayed(): Promise<void> {
        const text = await this.uICompletedLabel.innerText();
        expect(text).toBe('Completed');
    }

    async verifyScoreLabelIsDisplayed(): Promise<void> {
        await expect(this.uIScoreLabel).toBeVisible();
    }

    async verifyAtScoreValue(): Promise<void> {
        const text = await this.uIScoreValue.innerText();
        console.log(text);
    }

    async verifyPercentageLabelIsDisplayed(): Promise<void> {
        await expect(this.uIPercentageLabel).toBeVisible();
    }

    async verifyAtPercentageValue(): Promise<void> {
        const text = await this.uIPercentageValue.innerText();
        console.log(text);
    }

    async clickNarrativeTab(): Promise<void> {
        await this.uINarrativeTab.click();
        await this.browserHelpers.switchToFrameById('tabEvaluationEntry_tmpl1_Narrative');
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async verifyApprovalTabIsDisplayed(): Promise<void> {
        await expect(this.uIApprovalTab).toBeVisible();
    }

    async verifyApprovalStatusAsSubmittedAndDisplayInGreenColor(): Promise<void> {
        await expect(this.uIApprovalStatusText).toBeVisible();
        expect(await this.uIApprovalStatusValue.innerText()).toBe('Submitted');
        const color = await this.uIApprovalStatusValue.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(0, 128, 0, 1)');
    }

    async verifyApprovalStatusAsApprovedndDisplayInGreenColor(): Promise<void> {
        await expect(this.uIApprovalStatusText).toBeVisible();
        expect(await this.uIApprovalStatusValue.innerText()).toBe('Approved');
        const color = await this.uIApprovalStatusValue.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(0, 128, 0, 1)');
    }

    async clickResetIcon(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async verifyAtEvaluationForPF(): Promise<void> {
        const pfName = await this.elementHelpers.getDropDownSelectedItem(this.uIEvaluationForPFDropdown);
        expect(pfName).toContain(BaseData.getTestValue('EvaluationForPF'));
    }

    async verifyAdditionSuccessful(): Promise<void> {
        const statusBar = this.page.locator("(//td[@class='statusBar' or @class='status']//b)[2]");
        const text = await statusBar.innerText();
        expect(text.toLowerCase()).toContain('1002 - addition successful');
    }

    async clickCallInfoIcon(): Promise<void> {
        await this.uICallInfoIcon.click();
    }

    async selectAtEvaluationForPFUsingIndex(i: number): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIEvaluationForPFDropdown, BaseData.getTestValue(`EvaluationForPF${i}`));
    }

    async verifyAtEvaluationForPFUsingIndex(i: number): Promise<void> {
        const pfName = await this.elementHelpers.getDropDownSelectedItem(this.uIEvaluationForPFDropdown);
        expect(pfName).toContain(BaseData.getTestValue(`EvaluationForPF${i}`));
    }

    async verifyEvaluationForPFDropdownValues(i: number): Promise<void> {
        await this.page.waitForTimeout(1000);
        const dropDownValues = await this.elementHelpers.getDropDownValues(this.uIEvaluationForPFDropdown);
        expect(dropDownValues).toContain(BaseData.getTestValue(`EvaluationForPFOption${i}`));
    }

    // async verifyEvaluationForPFWithSameCallTakerNDispatcher(): Promise<void> {
    //     const dropDownValues = await this.elementHelpers.getDropDownValues(this.uIEvaluationForPFDropdown);
    //     const expected = BaseData.getTestValue('CallTakerNDispatch');
    //     for (const value of dropDownValues) {
    //         if (value.includes('Call Taker') || value.includes('Dispatcher')) {
    //             expect(value).toContain(expected);
    //         }
    //     }
    // }

    async selectAtEvaluationFormUsingIndex(i: number): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIEvalautionFormDropdown, BaseData.getTestValue(`EvaluationForm${i}`));
    }

    async verifyAtEvaluationForm(i: number): Promise<void> {
        const evalForm = await this.elementHelpers.getDropDownSelectedItem(this.uIEvalautionFormDropdown);
        expect(evalForm).toContain(BaseData.getTestValue(`EvaluationForm${i}`));
    }

    async verifyEvaluationForPFDropdownValuesAsSame(valuesList: string[]): Promise<void> {
        const dropDownValues = await this.elementHelpers.getDropDownValues(this.uIEvaluationForPFDropdown);
        expect(dropDownValues).toEqual(valuesList);
    }

    // async getEvaluationForPFDropdownValues(): Promise<string[]> {
    //     //  return await this.elementHelpers.getDropDownValues(this.uIEvaluationForPFDropdown);
    // }

    async clickCallReceiptIcon(): Promise<void> {
        await this.uICallReceiptIcon.click();
    }

    async getCallNo(): Promise<string> {
        const callYear = await this.uICallYearEdit.inputValue();
        const callNumber = await this.uICallNumberEdit.inputValue();
        return `${callYear}.${callNumber}`;
    }

    async getLocationValue(): Promise<string> {
        return await this.uILocationValue.innerText();
    }

    async getCFSCodeValue(): Promise<string> {
        return await this.uICFSCodeValue.innerText();
    }

    async getDispositionValue(): Promise<string> {
        return await this.uIDispositionValue.innerText();
    }

    async getReportedTime(): Promise<string> {
        return await this.uIReportedTimeValue.innerText();
    }

    async getStackedTime(): Promise<string> {
        return await this.uIStackedTimeValue.innerText();
    }

    async getDispatchTime(): Promise<string> {
        return await this.uIDispatchTimeValue.innerText();
    }

    async getDayOfWeek(): Promise<string> {
        return await this.uIDayOfWeekValue.innerText();
    }

    async getDurationOfStackedTime(): Promise<string> {
        return await this.uIStackedTimeDurationValue.innerText();
    }

    async getDurationOfDispatchTime(): Promise<string> {
        return await this.uIDispatchTimeDurationValue.innerText();
    }

    async getNoOfActiveCalls(): Promise<string> {
        return await this.uIActiveCallValue.innerText();
    }

    async getNoOfStackedCalls(): Promise<string> {
        return await this.uIStackedCallValue.innerText();
    }

    async getNoOfLawUnits(): Promise<string> {
        return await this.uILawUnitsValue.innerText();
    }

    async getShiftDurationElapsed(): Promise<string> {
        return await this.uIShiftDurationElapsedValue.innerText();
    }

    async verifyCallNumberAsInCallEntry(callNo: string): Promise<void> {
        const callYear = await this.uICallYearEdit.inputValue();
        const callNumber = await this.uICallNumberEdit.inputValue();
        const callNo1 = `${callYear}.${callNumber}`;
        expect(callNo1).toBe(callNo);
    }

    async verifyStackedDateAsInCallEntry(stackedDate: string): Promise<void> {
        const text = await this.uIStackedTimeValue.innerText();
        expect(text).toContain(stackedDate);
    }

    async verifyDispatchedDateAsInCallEntry(dispatchedDate: string): Promise<void> {
        const text = await this.uIDispatchTimeValue.innerText();
        expect(text).toContain(dispatchedDate);
    }

    async verifyCFSCodeValueAsInCallEntry(finalCFSValue: string): Promise<void> {
        const text = await this.uICFSCodeValue.innerText();
        expect(text).toContain(finalCFSValue);
    }

    async verifyLocationValueAsInCallEntry(locationValue: string): Promise<void> {
        const text = await this.uILocationValue.innerText();
        expect(text).toBe(locationValue);
    }
}

export class SelectCallForQAPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIPrintIcon: Locator;
    readonly uIExcelIcon: Locator;
    readonly uIServiceTypeDropdown: Locator;
    readonly uIFromDateEdit: Locator;
    readonly uIFromTimeEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIToTimeEdit: Locator;
    readonly uINoOfCalls: Locator;
    readonly uIShowRandomCalls: Locator;
    readonly uIDescription: Locator;
    readonly uIAcceptButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIResultTable: Locator;
    readonly uICallCountOr: Locator;
    readonly uICancelButton: Locator;
    readonly uIDateFromTo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIPrintIcon = page.locator("//img[@src = '/KPIImages/ico/16_print.gif']");
        this.uIExcelIcon = page.locator("//img[@src = '/KPIImages/ico/16_excel.gif']");
        this.uIServiceTypeDropdown = page.locator('#cddServiceType_DropDown');
        this.uIFromDateEdit = page.locator('#dtmForm_Date_KPIDttmCtrl');
        this.uIFromTimeEdit = page.locator("//table[@id='dtmForm_Time']//input");
        this.uIToDateEdit = page.locator('#dtmTo_Date_KPIDttmCtrl');
        this.uIToTimeEdit = page.locator("//table[@id='dtmTo_Time']//input");
        this.uINoOfCalls = page.locator('#txtNoofCalls');
        this.uIShowRandomCalls = page.locator("//span[contains(text(),'Show Random Calls')]");
        this.uIDescription = page.locator('#txtDesc');
        this.uIAcceptButton = page.locator('#btnAccept');
        this.uISearchButton = page.locator("//span[@title='Search']");
        this.uIResultTable = page.locator('#grdSelectCalls');
        this.uICallCountOr = page.locator('#lblCnt');
        this.uICancelButton = page.locator('#btnCancel');
        this.uIDateFromTo = page.locator('#lblDate');
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async clickExcelIcon(): Promise<void> {
        await this.uIExcelIcon.click();
    }

    async VerifySelectReportScreenOpened(): Promise<void> {
        const pdfRadio = this.page.locator('#rdoPDF');
        await expect(pdfRadio).toBeChecked();
    }

    async verifyDocumentDownloaded(): Promise<void> {
        // Verification of downloaded file handled via context/page download helper
    }

    async selectAtServiceType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIServiceTypeDropdown, BaseData.getTestValue('ServiceType'));
    }

    async enterAtFromDateAndTimeAsPreviousMonth(): Promise<void> {
        const month = DateHelpers.getPreviousDateByMonth(1, 'MM/dd/yyyy');
        await this.uIFromDateEdit.fill(month);
        await this.uIFromTimeEdit.press('Tab');
    }

    async enterAtToDateAndTime(): Promise<void> {
        const month = DateHelpers.getCurrentDate('MM/dd/yyyy');
        await this.uIToDateEdit.fill(month);
        await this.uIToTimeEdit.press('Tab');
    }

    async enterAtNoOfCalls(): Promise<void> {
        await this.uINoOfCalls.fill(BaseData.getTestValue('NoOfCalls'));
    }

    async clickShowRandomCalls(): Promise<void> {
        await this.uIShowRandomCalls.click();
    }

    async enterAtDescription(): Promise<void> {
        await this.uIDescription.fill(BaseData.getTestValue('Description'));
    }

    async clickAcceptButton(): Promise<void> {
        await this.uIAcceptButton.click();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async enterAtFromDateAndTime(): Promise<void> {
        await this.uIFromDateEdit.fill(BaseData.getTestValue('FromDate'));
        await this.uIFromTimeEdit.press('Tab');
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async verifyRptDateAreBetweenFromAndToDate(): Promise<void> {
        const fromDate = new Date(BaseData.getTestValue('FromDate'));
        const toDate = new Date(DateHelpers.getCurrentDate('MM/dd/yyyy'));
        const gridTableColumnValues = await this.grid.getGridTableColumnValues(this.uIResultTable, 'Rpt Date');
        for (const value of gridTableColumnValues) {
            const rptDate = new Date(value.substring(0, 10));
            expect(rptDate.getTime()).toBeGreaterThanOrEqual(fromDate.getTime());
            expect(rptDate.getTime()).toBeLessThanOrEqual(toDate.getTime());
        }
    }

    async verifycallCountOr(): Promise<void> {
        const actual = await this.uICallCountOr.innerText();
        expect(actual).toBe(BaseData.getTestValue('CallCount'));
    }

    async verifyDateFromToAsCurrentDate(): Promise<void> {
        const text = await this.uIDateFromTo.innerText();
        const currentDate = DateHelpers.getCurrentDate('MM/dd/yy');
        expect(text).toContain(`${BaseData.getTestValue('FromDate1')} 00:00 to ${currentDate}`);
    }

    async verify6071DescriptionIsMandatoryAck(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(6071) Description is mandatory');
        await this.popup.acknowledgeOkButton.click();
    }

    async clickCancelButton(): Promise<void> {
        await this.uICancelButton.click();
    }

    async verify6071ServicetypeIsMandatoryAck(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(6071) Service Type is mandatory');
        await this.popup.acknowledgeOkButton.click();
    }

    async verify6071dateNTimeFormIsMandatoryAck(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(6071) Date & Time Form is mandatory');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyDateFromTo(): Promise<void> {
        const text = await this.uIDateFromTo.innerText();
        expect(text).toContain(BaseData.getTestValue('FromDate1'));
    }

    async verifyClosedDateIsInGivenRange(): Promise<void> {
        const fromDate = new Date(BaseData.getTestValue('FromDate'));
        const toDate = new Date(BaseData.getTestValue('ToDate'));
        const gridTableColumnValues = await this.grid.getGridTableColumnValues(this.uIResultTable, 'Rpt Date');
        for (const colDate of gridTableColumnValues) {
            const rptDate = new Date(colDate);
            expect(rptDate.getTime() >= fromDate.getTime() && rptDate.getTime() <= toDate.getTime()).toBe(true);
        }
    }

    async enterAtToDateAndTime1(): Promise<void> {
        await this.uIToDateEdit.fill(BaseData.getTestValue('ToDate'));
        await this.uIToTimeEdit.press('Tab');
    }
}

export class RandomListHistoryPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIServiceTypeDropdown: Locator;
    readonly uISearchButton: Locator;
    readonly uISearchResultGrid: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIFromDateEdit: Locator;
    readonly uIFromTimeEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIToTimeEdit: Locator;
    readonly uIListPreparedByEdit: Locator;
    readonly uIAddNewButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIServiceTypeDropdown = page.locator('#cddServiceType_DropDown');
        this.uISearchButton = page.locator('#cmdSearch');
        this.uISearchResultGrid = page.locator('#grdRandomCall');
        this.uIRefreshButton = page.locator("//span[contains(text(),'Refresh')]");
        this.uIFromDateEdit = page.locator('#dtFrom_Date_KPIDttmCtrl');
        this.uIFromTimeEdit = page.locator("//table[@id='dtFrom_Time']//input");
        this.uIToDateEdit = page.locator('#dtTo_Date_KPIDttmCtrl');
        this.uIToTimeEdit = page.locator("//table[@id='dtTo_Time']//input");
        this.uIListPreparedByEdit = page.locator('#lupListPreparedBy_CodeValue');
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
    }

    async selectAtServiceType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIServiceTypeDropdown, BaseData.getTestValue('ServiceType'));
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async verifyAtServiceTypeInGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uISearchResultGrid, 'Service Type');
        for (const value of columnValues) {
            expect(value).toBe('Police');
        }
    }

    async clickRefresh(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async enterAtFromDateAndTime(): Promise<void> {
        const month = DateHelpers.getPreviousDateByMonth(1, 'MM/dd/yyyy');
        await this.uIFromDateEdit.fill(month);
        await this.uIFromTimeEdit.press('Tab');
    }

    async enterAtToDateAndTime(): Promise<void> {
        const month = DateHelpers.getCurrentDate('MM/dd/yyyy');
        await this.uIToDateEdit.fill(month);
        await this.uIToTimeEdit.press('Tab');
    }

    async enterAtListPreparedBy(): Promise<void> {
        await this.uIListPreparedByEdit.fill(BaseData.getTestValue('ListPreparedBy'));
    }

    async selectAtRandomEvaluationListInGrid(): Promise<void> {
        await this.grid.selectRandomRow(this.uISearchResultGrid);
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async verifyAtEvaluationListNoInGrid(evaluationListNO: string): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uISearchResultGrid, 'Evaluation List#');
        expect(columnValues).toContain(evaluationListNO);
    }

    async verifyDatesInGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uISearchResultGrid, 'Date');
        const fromDate = new Date(DateHelpers.getPreviousDateByMonth(1, 'MM/dd/yyyy'));
        const toDate = new Date(DateHelpers.getCurrentDate('MM/dd/yyyy'));
        for (const value of columnValues) {
            const date = new Date(value.substring(0, 10));
            expect(date.getTime()).toBeGreaterThanOrEqual(fromDate.getTime());
            expect(date.getTime()).toBeLessThanOrEqual(toDate.getTime());
        }
    }

    async verifyAtDescriptionInGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uISearchResultGrid, 'Description');
        expect(columnValues).toContain(BaseData.getTestValue('Description'));
    }
}

export class RandomListHistoryScreenPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uIListPreparedBy: Locator;
    readonly uIEvaluationListYearEdit: Locator;
    readonly uIEvaluationListNumberEdit: Locator;
    readonly uIsearchResultGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);

        this.uIListPreparedBy = page.locator('#lupListPreparedBy_CodeValue');
        this.uIEvaluationListYearEdit = page.locator('#txtEvaluationListNo_Year');
        this.uIEvaluationListNumberEdit = page.locator('#txtEvaluationListNo_Number');
        this.uIsearchResultGrid = page.locator('#grdCallsList');
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async verifyAtListPreparedBy(): Promise<void> {
        const attribute = await this.uIListPreparedBy.inputValue();
        expect(attribute).toBe(BaseData.getTestValue('ListPreparedBy'));
    }

    async getEvaluationListNo(): Promise<string> {
        const evaluationYear = await this.uIEvaluationListYearEdit.inputValue();
        const evaluationNumber = await this.uIEvaluationListNumberEdit.inputValue();
        return `${evaluationYear}.${evaluationNumber}`;
    }

    async verifyAtRowCountInGrid(): Promise<void> {
        const count = await this.grid.getRowCount(this.uIsearchResultGrid);
        expect(String(count)).toBe(BaseData.getTestValue('NoOfCalls'));
    }

    async verifyEvaluationListNoIsNotBlank(): Promise<void> {
        const evaluationYear = await this.uIEvaluationListYearEdit.inputValue();
        const evaluationNumber = await this.uIEvaluationListNumberEdit.inputValue();
        expect(evaluationYear.trim()).not.toBe('');
        expect(evaluationNumber.trim()).not.toBe('');
    }
}

export class RatingInstructionPage {
    readonly page: Page;
    readonly uIRatingInstructionLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIRatingInstructionLabel = page.locator('#lblhead');
    }

    async verifyRatingInstructionIsDisplayed(): Promise<void> {
        await this.uIRatingInstructionLabel.click();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }
}

export class EvaluationCallReceiptPage {
    readonly page: Page;
    readonly browserHelpers: BrowserHelpers;

    readonly uICloseButton: Locator;
    readonly uICallYearEdit: Locator;
    readonly uICallNumberEdit: Locator;
    readonly uILocationValue: Locator;
    readonly uICFSCodeValue: Locator;
    readonly uIDispositionValue: Locator;
    readonly uICallTakerValue: Locator;
    readonly uIDispatcherValue: Locator;
    readonly uIReportedTimeValue: Locator;
    readonly uIStackedTimeValue: Locator;
    readonly uIDispatchTimeValue: Locator;
    readonly uIDayOfWeekValue: Locator;
    readonly uIStackedTimeDuration: Locator;
    readonly uIDispatchTimeDuration: Locator;
    readonly uINoOfActiveCalls: Locator;
    readonly uINoOfStackedCalls: Locator;
    readonly uINoOfLawUnitsOD: Locator;
    readonly uIShiftDurationElapsedValue: Locator;
    readonly uIWeatherLink: Locator;
    readonly uIViewOfActiveCalls: Locator;
    readonly uIViewOfStackedCalls: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNumberEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.browserHelpers = new BrowserHelpers(page);

        this.uICloseButton = page.locator('#btnClose');
        this.uICallYearEdit = page.locator('#NbrEvalCall_Year');
        this.uICallNumberEdit = page.locator('#NbrEvalCall_Number');
        this.uILocationValue = page.locator('#linkbtnLocation');
        this.uICFSCodeValue = page.locator('#linkbtnCFSCode');
        this.uIDispositionValue = page.locator('#lblEvalDispVal');
        this.uICallTakerValue = page.locator('#linkbtnCallTaker');
        this.uIDispatcherValue = page.locator('#linkbtnDispatcher');
        this.uIReportedTimeValue = page.locator('#lblEvalReportTimeValue');
        this.uIStackedTimeValue = page.locator('#lblEvalStTimeValue');
        this.uIDispatchTimeValue = page.locator('#lblEvalDispatchTimeValue');
        this.uIDayOfWeekValue = page.locator('#lblEvalDayofWeekValue');
        this.uIStackedTimeDuration = page.locator('#lblEvalStDurationVal');
        this.uIDispatchTimeDuration = page.locator('#lblDisTimeDurationValue');
        this.uINoOfActiveCalls = page.locator('#lblEvalActiveCallCount');
        this.uINoOfStackedCalls = page.locator('#lblEvalStackedCallsCount');
        this.uINoOfLawUnitsOD = page.locator('#lblEvalLawUnitsCount');
        this.uIShiftDurationElapsedValue = page.locator('#lblEvalShifthrs');
        this.uIWeatherLink = page.locator('#linkbtnevalweather');
        this.uIViewOfActiveCalls = page.locator('#lblEvalActiveView');
        this.uIViewOfStackedCalls = page.locator('#lblEvalStackView');
        this.uICaseYearEdit = page.locator('#NbrCaseNo_Year');
        this.uICaseNumberEdit = page.locator('#NbrCaseNo_Number');
    }

    async clickCloseButton(): Promise<void> {
        await this.uICloseButton.click();
    }

    async verifyCallNoAsInEvaluationEntry(callNo: string): Promise<void> {
        const callYear = await this.uICallYearEdit.inputValue();
        const callNumber = await this.uICallNumberEdit.inputValue();
        const callNo1 = `${callYear}.${callNumber}`;
        expect(callNo1).toBe(callNo);
    }

    async verifyLocationAsInEvaluationEntry(locationVal: string): Promise<void> {
        const text = await this.uILocationValue.innerText();
        expect(text).toBe(locationVal);
    }

    async verifyCFSCodeAsInEvaluationEntry(cfsCodeVal: string): Promise<void> {
        const text = await this.uICFSCodeValue.innerText();
        expect(text).toBe(cfsCodeVal);
    }

    async verifyDispositionAsInEvaluationEntry(dispValue: string): Promise<void> {
        const text = await this.uIDispositionValue.innerText();
        expect(text).toBe(dispValue);
    }

    async verifyCallTakerAsInEvaluationEntry(): Promise<void> {
        const text = await this.uICallTakerValue.innerText();
        expect(text).toBe(BaseData.getTestValue('CallTaker'));
    }

    async verifyDispatcherAsInEvaluationEntry(): Promise<void> {
        const text = await this.uIDispatcherValue.innerText();
        expect(text).toBe(BaseData.getTestValue('Dispatcher'));
    }

    async verifyReportedTimeAsInEvaluationEntry(reportedTime: string): Promise<void> {
        const text = await this.uIReportedTimeValue.innerText();
        expect(text).toBe(reportedTime);
    }

    async verifyStackedTimeAsInEvaluationEntry(stackedTime: string): Promise<void> {
        const text = await this.uIStackedTimeValue.innerText();
        expect(text).toBe(stackedTime);
    }

    async verifyDispatchTimeAsInEvaluationEntry(dispatchTime: string): Promise<void> {
        const text = await this.uIDispatchTimeValue.innerText();
        expect(text).toBe(dispatchTime);
    }

    async verifyDayOfWeekAsInEvaluationEntry(dayOfWeek: string): Promise<void> {
        const text = await this.uIDayOfWeekValue.innerText();
        expect(text).toBe(dayOfWeek);
    }

    async verifyDurationOfStackedtimeAsInEvaluationEntry(durOfStackedTime: string): Promise<void> {
        const text = await this.uIStackedTimeDuration.innerText();
        expect(text).toBe(durOfStackedTime);
    }

    async verifyDurationOfDispatchtimeAsInEvaluationEntry(durOfDispatchTime: string): Promise<void> {
        const text = await this.uIDispatchTimeDuration.innerText();
        expect(text).toBe(durOfDispatchTime);
    }

    async verifyNoOfActiveCallsAsInEvaluationEntry(noOfActiveCalls: string): Promise<void> {
        const text = await this.uINoOfActiveCalls.innerText();
        expect(text).toBe(noOfActiveCalls);
    }

    async verifyNoOfStackedCallsAsInEvaluationEntry(noOfStackedCalls: string): Promise<void> {
        const text = await this.uINoOfStackedCalls.innerText();
        expect(text).toBe(noOfStackedCalls);
    }

    async verifyNoOfLawUnitsAsInEvaluationEntry(noOfLawUnits: string): Promise<void> {
        const text = await this.uINoOfLawUnitsOD.innerText();
        expect(text).toBe(noOfLawUnits);
    }

    async verifyShiftDurationElapsedAsInEvaluationEntry(shiftDurationElapsed: string): Promise<void> {
        const text = await this.uIShiftDurationElapsedValue.innerText();
        expect(text).toBe(shiftDurationElapsed);
    }

    async clickLocationLink(): Promise<void> {
        await this.uILocationValue.click();
    }

    async clickCFSCodeLink(): Promise<void> {
        await this.uICFSCodeValue.click();
    }

    async clickCallTakerLink(): Promise<void> {
        await this.uICallTakerValue.click();
    }

    async clickDispatcherLink(): Promise<void> {
        await this.uIDispatcherValue.click();
    }

    async clickWeatherLink(): Promise<void> {
        await this.uIWeatherLink.click();
    }

    async clickViewOfActiveCallsLink(): Promise<void> {
        await this.uIViewOfActiveCalls.click();
    }

    async clickViewOfStackedCallsLink(): Promise<void> {
        await this.uIViewOfStackedCalls.click();
    }

    async verifyAddressSearchScreenExist(): Promise<void> {
        const exists = await this.browserHelpers.windowExistsByTitle('Address Search');
        expect(exists).toBe(true);
        await this.page.close();
    }

    async verifyCFSCodeEntryScreenExist(): Promise<void> {
        const exists = await this.browserHelpers.windowExistsByTitle('CFS Code Entry');
        expect(exists).toBe(true);
    }

    async verifyPersonelEntryScreenExist(): Promise<void> {
        const exists = await this.browserHelpers.windowExistsByTitle('Personnel Entry');
        expect(exists).toBe(true);
    }

    async verifyCBEWeatherWindowExists(): Promise<void> {
        const exists = await this.browserHelpers.windowExistsByUrl('frmCBEWeather.aspx');
        expect(exists).toBe(true);
    }

    async verifyCallSearchScreenExists(): Promise<void> {
        const exists = await this.browserHelpers.windowExistsByTitle('Call Search');
        expect(exists).toBe(true);
    }

    async verifyCaseNoAsInEvaluationEntry(caseNo: string): Promise<void> {
        const caseYear = await this.uICaseYearEdit.inputValue();
        const caseNumber = await this.uICaseNumberEdit.inputValue();
        const caseNo1 = `${caseYear}-${caseNumber}`;
        expect(caseNo1).toBe(caseNo);
    }

    async verifyCallTaker(callTaker: string): Promise<void> {
        const text = await this.uICallTakerValue.innerText();
        expect(text).toContain(callTaker);
    }

    async verifyDispatcher(dispatcher: string): Promise<void> {
        const text = await this.uIDispatcherValue.innerText();
        expect(text).toContain(dispatcher);
    }
}

export class QAEvaluationEntryPage {
    readonly page: Page;
    readonly elementHelpers: ElementHelpers;

    readonly uIFormTypeDropDown: Locator;
    readonly uIFormNameEdit: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uISaveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elementHelpers = new ElementHelpers(page);

        this.uIFormTypeDropDown = page.locator('#cddFtotriningType_DropDown');
        this.uIFormNameEdit = page.locator('#txtEvaluationFormName');
        this.uIDescriptionEdit = page.locator('#txtDescription');
        this.uISaveButton = page.locator('#cmdSave');
    }

    async selectAtFormType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIFormTypeDropDown, BaseData.getTestValue('FormType'));
    }

    async enterAtFormName(): Promise<void> {
        await this.uIFormNameEdit.fill(BaseData.getTestValue('FormName'));
    }

    async enterAtDescription(): Promise<void> {
        await this.uIDescriptionEdit.fill(BaseData.getTestValue('Description'));
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
    }
}

export class CADQAQIPage {
    readonly page: Page;
    readonly browserHelpers: BrowserHelpers;

    readonly cADQAEvalForm: CADQAEvalFormPage;
    readonly evaluationFormEntry: EvaluationFormEntryPage;
    readonly evaluationEntry: EvaluationEntryPage;
    readonly evaluationSearch: EvaluationSearchPage;
    readonly selectCallForQA: SelectCallForQAPage;
    readonly randomListHistory: RandomListHistoryPage;
    readonly randomListHistoryScreen: RandomListHistoryScreenPage;
    readonly ratingInstruction: RatingInstructionPage;
    readonly evaluationCallReceipt: EvaluationCallReceiptPage;
    readonly qAEvaluationEntry: QAEvaluationEntryPage;

    constructor(page: Page) {
        this.page = page;
        this.browserHelpers = new BrowserHelpers(page);

        this.cADQAEvalForm = new CADQAEvalFormPage(page);
        this.evaluationFormEntry = new EvaluationFormEntryPage(page);
        this.evaluationEntry = new EvaluationEntryPage(page);
        this.evaluationSearch = new EvaluationSearchPage(page);
        this.selectCallForQA = new SelectCallForQAPage(page);
        this.randomListHistory = new RandomListHistoryPage(page);
        this.randomListHistoryScreen = new RandomListHistoryScreenPage(page);
        this.ratingInstruction = new RatingInstructionPage(page);
        this.evaluationCallReceipt = new EvaluationCallReceiptPage(page);
        this.qAEvaluationEntry = new QAEvaluationEntryPage(page);
    }

    async Reset(): Promise<void> {
        // No-op in Playwright
    }

    async switchToEvaluationSearch(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('Evaluation Search');
    }

    async switchToEvaluationCallReceipt(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Evaluation Call Receipt');
    }

    async switchToEvaluationEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Evaluation Entry');
        await this.page.waitForTimeout(1000);
    }

    async switchToCallSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Call Search');
    }

    async switchToSelectCallsForQA(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('Select Calls for QA');
    }

    async switchToSelectCallsForQAScreen(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Select Calls for QA');
    }

    async switchToCADQAEvalForm(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('CAD QA Eval. Form');
    }

    async switchToRandomListEntry(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('Random List History');
    }

    async switchToRandomListEntryWindow(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Random List History');
    }

    async switchToRatingInstruction(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('FTO/frmShowGuideline.aspx?');
    }

    async switchPerfEvalForm(): Promise<void> {
        await this.browserHelpers.switchToMainWindowScreenTab('frmSetupFormSrch');
    }

    async saveScreen(): Promise<void> {
        await this.evaluationEntry.uISaveButton.click();
    }

    async verifyApprovalTabIsDisplayed(): Promise<void> {
        await expect(this.evaluationEntry.uIApprovalTab).toBeVisible();
    }

    async verifyApprovalStatusAsSubmittedAndDisplayInGreenColor(): Promise<void> {
        await expect(this.evaluationEntry.uIApprovalStatusText).toBeVisible();
        expect(await this.evaluationEntry.uIApprovalStatusValue.innerText()).toBe('Submitted');
        const color = await this.evaluationEntry.uIApprovalStatusValue.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(0, 128, 0, 1)');
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async verifyApprovalStatusAsApprovedndDisplayInGreenColor(): Promise<void> {
        await expect(this.evaluationEntry.uIApprovalStatusText).toBeVisible();
        expect(await this.evaluationEntry.uIApprovalStatusValue.innerText()).toBe('Approved');
        const color = await this.evaluationEntry.uIApprovalStatusValue.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(0, 128, 0, 1)');
    }

    async clickResetIcon(): Promise<void> {
        await this.evaluationEntry.uIRefreshButton.click();
    }

    async verifyAtEvaluationForPF(): Promise<void> {
        const pfName = await this.evaluationEntry.elementHelpers.getDropDownSelectedItem(this.evaluationEntry.uIEvaluationForPFDropdown);
        expect(pfName).toContain(BaseData.getTestValue('EvaluationForPF'));
    }

    async verifyUpdateSuccessful(): Promise<void> {
        const text = await this.evaluationEntry.uIBottomStatusMessage.innerText();
        expect(text).toContain('1003 - Update Successful');
    }
}
