// @ts-nocheck
import { Page, Locator, expect } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { BaseData } from '../../data/base-data';
import { GridHelpers } from '../../helpers/grid-helpers';
import { ElementHelpers } from '../../helpers/element-helpers';
import { PopupHelpers } from '../../helpers/popup-helpers';
import { DateHelpers, RandomHelpers } from '../../helpers';

export class BOTQAManagerPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIAddNewButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIExcelIcon: Locator;
    readonly uIViewExcelLink: Locator;
    readonly uIBotQAManagerGrid: Locator;
    readonly uIIncludeInactiveCheckbox: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uISearchTextEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIAddNewButton = page.locator("//span[text()='Add New']");
        this.uISearchButton = page.locator("//input[@id='cmdSearch']");
        this.uIExcelIcon = page.locator("//li[@title='Export to Excel']//img");
        this.uIViewExcelLink = page.locator('#lnkbtnDownloadExcel');
        this.uIBotQAManagerGrid = page.locator('#grdQASrchlist');
        this.uIIncludeInactiveCheckbox = page.locator('#chkInActive');
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uISearchTextEdit = page.locator('#txtSrchText');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickExcelIcon(): Promise<void> {
        await this.uIExcelIcon.click();
    }

    async clickViewExcelLink(): Promise<void> {
        await this.uIViewExcelLink.click();
    }

    async selectAtQuestionInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIBotQAManagerGrid, BaseData.getAIModuleValue('Question'));
    }

    async clickIncludeInactiveCheckbox(): Promise<void> {
        await this.uIIncludeInactiveCheckbox.click();
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async verifyAtQuestionInGridIsGreyedOut(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const row = await this.grid.getRowByCellText(this.uIBotQAManagerGrid, BaseData.getAIModuleValue('Question'));
        const color = await row.evaluate(el => getComputedStyle(el).color);
        expect(color).toContain('rgba(128, 128, 128, 1)');
    }

    async selectAtJuris(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIJurisDropdown, BaseData.getAIModuleValue('Juris'));
    }

    async enterAtSearchText(): Promise<void> {
        await this.uISearchTextEdit.fill(BaseData.getAIModuleValue('SearchText'));
    }

    async verifyAtJurisInGridByQuestion(): Promise<void> {
        const gridTableColumnValues = await this.grid.getGridTableColumnValues(this.uIBotQAManagerGrid, 'Juris');
        expect(gridTableColumnValues).toContain('BP');
        expect(gridTableColumnValues).toContain('BC');
        expect(gridTableColumnValues).toContain('SC');
        expect(gridTableColumnValues).toContain('GCP');
    }

    async verifyAtQuestionInGrid(): Promise<void> {
        const gridTableColumnValues = await this.grid.getGridTableColumnValues(this.uIBotQAManagerGrid, 'Question');
        const expectedQuestion = BaseData.getAIModuleValue('Question');
        for (const val of gridTableColumnValues) {
            expect(val.trim()).toBe(expectedQuestion);
        }
    }
}

export class BOTQAManagerEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIEffectiveFromDateEdit: Locator;
    readonly uIEffectiveToDateEdit: Locator;
    readonly uIQuestionsEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIAnswerEdit: Locator;
    readonly uIQuestionGrid: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uISharedCheckbox: Locator;
    readonly uIEnteredByPFEdit: Locator;
    readonly uIDeleteIcon: Locator;
    readonly uIInactiveCheckbox: Locator;
    readonly uIResetIcon: Locator;
    readonly uISaveNNewIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uISaveButton = page.locator("//input[@id='cmdSave']");
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIEffectiveFromDateEdit = page.locator('#Dtmstart_KPIDttmCtrl');
        this.uIEffectiveToDateEdit = page.locator('#DtmEnd_KPIDttmCtrl');
        this.uIQuestionsEdit = page.locator('#txtQuestions');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIAnswerEdit = page.locator('#txtAnswer');
        this.uIQuestionGrid = page.locator('#grdQuestion');
        this.uIPrintIcon = page.locator('#cmdPrint');
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uISharedCheckbox = page.locator('#chkShared');
        this.uIEnteredByPFEdit = page.locator('#lupFTOPF_CodeValue');
        this.uIDeleteIcon = page.locator('#cmdDelete');
        this.uIInactiveCheckbox = page.locator('#chkInActive');
        this.uIResetIcon = page.locator('#cmdRefresh');
        this.uISaveNNewIcon = page.locator('#cmdSaveNAddNew');
    }

    async enterAtEffectiveFromDateAsCurrentDate(): Promise<void> {
        await this.uIEffectiveFromDateEdit.fill(DateHelpers.getCurrentDate());
        await this.uIEffectiveFromDateEdit.press('Tab');
    }

    async enterAtEffectiveToDateAsFutureDate(): Promise<void> {
        await this.uIEffectiveToDateEdit.fill(DateHelpers.getFutureDate(5));
        await this.uIEffectiveToDateEdit.press('Tab');
    }

    async enterAtQuestion(): Promise<void> {
        await this.uIQuestionsEdit.fill(BaseData.getAIModuleValue('Question'));
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifyAtQuestionInGrid(): Promise<void> {
        const expected = BaseData.getAIModuleValue('Question');
        const cell = await this.grid.getGridCell(this.uIQuestionGrid, expected, 'Question');
        const questionText = await cell.innerText();
        expect(questionText.trim()).toBe(expected);
    }

    async enterAtAnswer(): Promise<void> {
        await this.uIAnswerEdit.fill(BaseData.getAIModuleValue('Answer'));
    }

    async clicksave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async verify6040QuestionAlreadyExistAckMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(6040) Question already exists');
        await this.popup.acknowledgeOkButton.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async clickShared(): Promise<void> {
        await this.uISharedCheckbox.click();
    }

    async verifyJurisEnabled(): Promise<void> {
        await expect(this.uIJurisDropdown).toBeEnabled();
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async verifyAtEnteredByPF(): Promise<void> {
        const attribute = await this.uIEnteredByPFEdit.inputValue();
        expect(attribute).toBe(BaseData.getAIModuleValue('EnteredByPF'));
    }

    async verify77004EnterAtleastOneQuestion(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(77004) Enter atleast one Question');
        await this.popup.acknowledgeOkButton.click();
    }

    async verify77004EnterAnswer(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(77004) Enter Answer');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyDeleteIconIsDisplayed(): Promise<void> {
        await expect(this.uIDeleteIcon).toBeVisible();
    }

    async verifyDeleteIconIsNotDisplayed(): Promise<void> {
        await expect(this.uIDeleteIcon).not.toBeVisible();
    }

    async saveNClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        await this.popup.confirmYes();
    }

    async clickInactiveCheckbox(): Promise<void> {
        await this.uIInactiveCheckbox.click();
    }

    async clickResetIcon(): Promise<void> {
        await this.uIResetIcon.click();
    }

    async verifyQuestionIsBlank(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const value = await this.uIQuestionsEdit.inputValue();
        expect(value.trim()).toBe('');
    }

    async SaveNNew(): Promise<void> {
        await this.uISaveNNewIcon.click();
        await this.popup.confirmYes();
    }

    async verifySharedCheckboxIsDisabled(): Promise<void> {
        await expect(this.uISharedCheckbox).toBeDisabled();
    }
}

export class AITranscriptionDashboardPage {
    readonly page: Page;
    readonly browserHelpers: BrowserHelpers;

    readonly uIViewUsageDetailsLink: Locator;
    readonly uICloseButton: Locator;
    readonly uIViewDemoButton: Locator;
    readonly uICancelButton: Locator;
    readonly uISubmitNewButton: Locator;
    readonly uISendRequest: Locator;

    constructor(page: Page) {
        this.page = page;
        this.browserHelpers = new BrowserHelpers(page);

        this.uIViewUsageDetailsLink = page.locator('text=View Usage Details');
        this.uICloseButton = page.locator('#cmdclose');
        this.uIViewDemoButton = page.locator('#Image12');
        this.uICancelButton = page.locator('#closebtnexpiry');
        this.uISubmitNewButton = page.locator('#cmdsubmit');
        this.uISendRequest = page.locator('#cmdsubmit');
    }

    async clickViewUsageDetails(): Promise<void> {
        await this.uIViewUsageDetailsLink.click();
    }

    async verifyCloseButtonIsDisplayed(): Promise<void> {
        await expect(this.uICloseButton).toBeVisible();
    }

    async clickViewDemoButton(): Promise<void> {
        await this.uIViewDemoButton.click();
    }

    async clickCancelButton(): Promise<void> {
        await this.uICancelButton.click();
    }

    async verifyViewUsageDetailsIsDisplayed(): Promise<void> {
        await expect(this.uIViewUsageDetailsLink).toBeVisible();
    }

    async verifySubmitNewButtonISEnabled(): Promise<void> {
        await expect(this.uISubmitNewButton).toBeVisible();
    }

    async clickSubmitNewButton(): Promise<void> {
        await this.uISubmitNewButton.click();
    }

    async verifyAIeRequestWindowExist(): Promise<void> {
        const exists = await this.browserHelpers.windowExistsByTitle('AI eRequest');
        expect(exists).toBeTruthy();
    }

    async verifyViewUsageButtonNotDisplayed(): Promise<void> {
        await expect(this.uIViewUsageDetailsLink).not.toBeVisible();
    }

    async clickClose(): Promise<void> {
        await this.page.close();
    }

    async verifyCancelButtonIsDisplayed(): Promise<void> {
        await expect(this.uICancelButton).toBeVisible();
    }

    async verifySendRequestIsNotShown(): Promise<void> {
        await this.uISendRequest.click();
    }
}

export class AITranscriptionStatusMsgPage {
    readonly page: Page;
    readonly elementHelpers: ElementHelpers;

    readonly uIJurisLabel: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uIShowSummaryLabel: Locator;
    readonly uIShowSummaryCheckbox: Locator;
    readonly uICurrentLicenseLabel: Locator;
    readonly uIValidUntilLabel: Locator;
    readonly uIMinutesLicensedLabel: Locator;
    readonly uIAvailableBalanceLabel: Locator;
    readonly uIDatesLabel: Locator;
    readonly uIFromLabel: Locator;
    readonly uIToLabel: Locator;
    readonly uIAIGrid: Locator;
    readonly uIDatesDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elementHelpers = new ElementHelpers(page);

        this.uIJurisLabel = page.locator('#lblJuris');
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uIShowSummaryLabel = page.locator('#lblShowSummary');
        this.uIShowSummaryCheckbox = page.locator('#chkSummary');
        this.uICurrentLicenseLabel = page.locator("//span[contains(text(),'Current License')]");
        this.uIValidUntilLabel = page.locator("//span[contains(text(),'Valid Until')]");
        this.uIMinutesLicensedLabel = page.locator("//span[contains(text(),'Minutes -> Licensed Total')]");
        this.uIAvailableBalanceLabel = page.locator("//span[contains(text(),'Available Balance')]");
        this.uIDatesLabel = page.locator("//span[contains(text(),'Dates')]");
        this.uIFromLabel = page.locator("//span[contains(text(),'From')]");
        this.uIToLabel = page.locator("//span[contains(text(),'To')]");
        this.uIAIGrid = page.locator('#grdAIUsage');
        this.uIDatesDropdown = page.locator('#cddDate_DropDown');
    }

    async verifyJurisLabel(): Promise<void> {
        await expect(this.uIJurisLabel).toBeVisible();
    }

    async verifyJurisDropdownIsDisplayed(): Promise<void> {
        await expect(this.uIJurisDropdown).toBeVisible();
    }

    async verifyJurisDropdownValueIsSelectedAsPX(): Promise<void> {
        const selected = await this.uIJurisDropdown.locator('option:checked').textContent();
        expect(selected?.trim()).toBe('PX - ProPhoenix');
    }

    async verifyShowSummaryByJurisCheckboxIsDisplayed(): Promise<void> {
        await expect(this.uIShowSummaryCheckbox).toBeVisible();
    }

    async verifyShowSummaryByJurisLabel(): Promise<void> {
        await expect(this.uIShowSummaryLabel).toBeVisible();
    }

    async verifyCurrentLicenseLabel(): Promise<void> {
        await expect(this.uICurrentLicenseLabel).toBeVisible();
    }

    async verifyValidUntilLabel(): Promise<void> {
        await expect(this.uIValidUntilLabel).toBeVisible();
    }

    async verifyMinutesLicensedTotalLabel(): Promise<void> {
        await expect(this.uIMinutesLicensedLabel).toBeVisible();
    }

    async verifyAvailableBalanceLabel(): Promise<void> {
        await expect(this.uIAvailableBalanceLabel).toBeVisible();
    }

    async verifyDatesLabel(): Promise<void> {
        await expect(this.uIDatesLabel).toBeVisible();
    }

    async verifyDatesDropdownValues(): Promise<void> {
        const expectedValues = ['--', 'Custom', 'Last Year', 'Month-to-date', 'Year-to-date', '--Inq 4570 --'];
        const options = await this.uIDatesDropdown.locator('option').allInnerTexts();
        const dropDownValues = options.map(o => o.trim()).filter(o => o !== '');
        expect(dropDownValues).toEqual(expectedValues);
    }

    async verifyFromLabel(): Promise<void> {
        await expect(this.uIFromLabel).toBeVisible();
    }

    async verifyToLabel(): Promise<void> {
        await expect(this.uIToLabel).toBeVisible();
    }

    async verifyAtColumnHeaders(): Promise<void> {
        const expectedValues = ['#', 'Juris', 'User Name', 'Used Minutes'];
        const elements = this.page.locator("//table[@id='grdAIUsage']//tbody/tr/th");
        const headersCount = await elements.count();
        const actualHeaders: string[] = [];
        for (let i = 0; i < headersCount; i++) {
            actualHeaders.push((await elements.nth(i).innerText()).trim());
        }
        expect(actualHeaders).toEqual(expectedValues);
    }

    async verifyAtJurisDropdownValues(): Promise<void> {
        const expectedValues = [
            '--',
            'PX - ProPhoenix',
            'BC - Brown County Police Department',
            'GCP - Gloucester County Police Dept',
            'TP - Tiffin Police Department',
            'SC - Seneca County Police Dept',
            'BP - Bloomville Police Dept'
        ];
        const options = await this.uIJurisDropdown.locator('option').allInnerTexts();
        const dropDownValues = options.map(o => o.trim()).filter(o => o !== '');
        expect(dropDownValues).toEqual(expectedValues);
    }
}

export class AIMugmatchPage {
    readonly page: Page;
    readonly browserHelpers: BrowserHelpers;

    readonly uIFindMatchButton: Locator;
    readonly uIAddToWatchListButton: Locator;
    readonly uIPurposeEdit: Locator;
    readonly uICloseButton: Locator;
    readonly uIPurposeLabelMandate: Locator;
    readonly uIUploadImageLink: Locator;
    readonly uIDatabaseRadioButton: Locator;
    readonly uINameIDLink: Locator;
    readonly uIName: Locator;
    readonly uISourceJurisdictionLabel: Locator;
    readonly uIBackButton: Locator;
    readonly uINoMatchesFoundTxt: Locator;

    constructor(page: Page) {
        this.page = page;
        this.browserHelpers = new BrowserHelpers(page);

        this.uIFindMatchButton = page.locator('#cmdFindMatch');
        this.uIAddToWatchListButton = page.locator('#cmdAddWatchlist');
        this.uIPurposeEdit = page.locator('#txtPurpose');
        this.uICloseButton = page.locator('#cmdclose');
        this.uIPurposeLabelMandate = page.locator("(//span[contains(text(),'Purpose')])[2]/span");
        this.uIUploadImageLink = page.locator('#imgUploadImgType');
        this.uIDatabaseRadioButton = page.locator('#rdbtnDatabase');
        this.uINameIDLink = page.locator('#lblNameID');
        this.uIName = page.locator('#lblName');
        this.uISourceJurisdictionLabel = page.locator("//span[text()= 'Source Jurisdiction']");
        this.uIBackButton = page.locator('#cmdback');
        this.uINoMatchesFoundTxt = page.locator("//p[text()='No Matches Found.']");
    }

    async verifyFindMatchButtonIsDisabled(): Promise<void> {
        await expect(this.uIFindMatchButton).toBeDisabled();
    }

    async verifyAddToWatchListButtonIsDisabled(): Promise<void> {
        await expect(this.uIAddToWatchListButton).toBeDisabled();
    }

    async verifyPurposeFieldMaxLengthAs400(): Promise<void> {
        const maxLength = await this.uIPurposeEdit.getAttribute('maxlength');
        expect(maxLength).toBe('400');
    }

    async verifyPurposeFieldIsMandatory(): Promise<void> {
        const text = await this.uIPurposeLabelMandate.innerText();
        expect(text.trim()).toBe('*');
        const style = await this.uIPurposeLabelMandate.getAttribute('style');
        expect(style).toContain('color: red;');
    }

    async clickUploadAnImageFromYourDevice(): Promise<void> {
        await this.uIUploadImageLink.click();
    }

    async enterAtPurpose(): Promise<void> {
        await this.uIPurposeEdit.fill(BaseData.getAIModuleValue('Purpose'));
    }

    async verifyFindMatchButtonIsEnabled(): Promise<void> {
        await expect(this.uIFindMatchButton).toBeEnabled();
    }

    async verifyAddToWatchListButtonIsEnabled(): Promise<void> {
        await expect(this.uIAddToWatchListButton).toBeEnabled();
    }

    async clearPurposeField(): Promise<void> {
        await this.uIPurposeEdit.click();
        await this.uIPurposeEdit.clear();
        await this.uIPurposeEdit.press('Tab');
    }

    async clickCloseButton(): Promise<void> {
        await this.uICloseButton.click();
    }

    async clickSearchOnlyMyDatabaseRadioButton(): Promise<void> {
        await this.uIDatabaseRadioButton.click();
    }

    async clickFindMatchButton(): Promise<void> {
        await this.uIFindMatchButton.click();
    }

    async clickAtUsingLastNameInImage(): Promise<void> {
        const lastname = BaseData.getAIModuleValue('Lastname');
        await this.page.locator(`//div[@id='imgAll']//tr//p[contains(text(), '${lastname}')]`).click();
    }

    async verifyAtNameID(): Promise<void> {
        const text = await this.uINameIDLink.innerText();
        expect(text.trim()).toBe(BaseData.getAIModuleValue('NameID'));
    }

    async clickNameID(): Promise<void> {
        await this.uINameIDLink.click();
    }

    async verifyNameEntryWindowExist(): Promise<void> {
        const windowExist = await this.browserHelpers.windowExistsByTitle('Name Entry');
        expect(windowExist).toBeTruthy();
    }

    async verifyAtName(): Promise<void> {
        const text = await this.uIName.innerText();
        expect(text.trim()).toBe(BaseData.getAIModuleValue('Name'));
    }

    async verifySourceJurisdictionIsDisplayed(): Promise<void> {
        await expect(this.uISourceJurisdictionLabel).toBeVisible();
    }

    async clickBackButton(): Promise<void> {
        await this.uIBackButton.click();
    }

    async verifyAIMugmatchWindowNotExist(): Promise<void> {
        const windowExist = await this.browserHelpers.windowExistsByTitle('AI Mugmatch');
        expect(windowExist).toBeFalsy();
    }

    async verifyNoMatchFoundIsDisplayed(): Promise<void> {
        await expect(this.uINoMatchesFoundTxt).toBeVisible();
    }
}

export class PlayVideoPage {
    readonly page: Page;

    readonly uIPlayButton: Locator;
    readonly uIVideoTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        const videoFrame = page.frameLocator('iframe[src*="player.vimeo.com/video"]');
        this.uIPlayButton = videoFrame.locator('.PlayButton_module_playIcon__d1afd73a');
        this.uIVideoTitle = videoFrame.locator('#title-text');
    }

    async verifyPlayButtonIsDisplayed(): Promise<void> {
        await expect(this.uIPlayButton).toBeVisible();
    }

    async verifyAtVideoTitle(i: number): Promise<void> {
        const expectedTitle = BaseData.getAIModuleValue(`VideoTitle${i}`);
        const text = await this.uIVideoTitle.innerText();
        expect(text).toContain(expectedTitle);
    }

    async verifyAtVideoTitleNotContains(i: number): Promise<void> {
        const expectedTitle = BaseData.getAIModuleValue(`VideoTitle${i}`);
        const text = await this.uIVideoTitle.innerText();
        expect(text).not.toContain(expectedTitle);
    }
}

export class AIeRequestPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uISelectSourceLanguage: Locator;
    readonly uISummaryCheckBox: Locator;
    readonly uITransalateToDropDown: Locator;
    readonly uINotesEdit: Locator;
    readonly uISendRequestButton: Locator;
    readonly uIPromptDropDown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uISelectSourceLanguage = page.locator('#cddTranslateFrom_DropDown');
        this.uISummaryCheckBox = page.locator('#chkSummary');
        this.uITransalateToDropDown = page.locator('#cddTranslateTo_DropDown');
        this.uINotesEdit = page.locator('#txtNotes');
        this.uISendRequestButton = page.locator('#cmdSendRequest');
        this.uIPromptDropDown = page.locator('#cddAIPrompt_DropDown');
    }

    async selectAtSelectSourceLanguage(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uISelectSourceLanguage, BaseData.getAIModuleValue('SelectSourceLanguage'));
    }

    async clickProductSummaryCheckBox(): Promise<void> {
        await this.uISummaryCheckBox.click();
    }

    async selectAtTransalateTo(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uITransalateToDropDown, BaseData.getAIModuleValue('TransalateTo'));
    }

    async enterAtNotes(): Promise<void> {
        await this.uINotesEdit.fill(BaseData.getAIModuleValue('Notes'));
    }

    async selectAtPrompt(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIPromptDropDown, BaseData.getAIModuleValue('PromptDropDown'));
    }

    async clickSendRequest(): Promise<void> {
        await this.uISendRequestButton.click();
    }

    async verifyJsErrorIsNotArised(): Promise<void> {
        const isAlertPresent = await this.popup.modalBody.isVisible().catch(() => false);
        expect(isAlertPresent).toBeFalsy();
    }
}

export class AIPage {
    readonly page: Page;
    private browserHelpers: BrowserHelpers;

    constructor(page: Page) {
        this.page = page;
        this.browserHelpers = new BrowserHelpers(page);
    }

    async switchToBOTQAManagerScreen(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmAIBOTSrch.aspx');
    }

    async switchtToBOTQAManagerEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('BOT Q&A Manager Entry');
    }

    async switchToAITranscription(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('AI Transcription');
    }

    async switchToAITranscriptionStatusMsg(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmAIStatusMsg');
    }

    async switchToAIMugmatch(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('AI Mugmatch');
    }

    async switchToPlayVideoWindow(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmPlayVideos');
    }

    async switchToAIeRequest(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('AI eRequest');
    }
}