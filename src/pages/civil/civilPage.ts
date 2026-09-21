
import { Page, Locator, expect } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { AcknowledgePage, ConfirmPage, PopupPage } from '../popup.page';
import { BaseData } from '../../data/base-data';
import { GridHelpers } from '../../helpers/grid-helpers';
import { ElementHelpers } from '../../helpers/element-helpers';
import { PopupHelpers } from '../../helpers/popup-helpers';
import { DateHelpers, RandomHelpers } from '../../helpers';

export class CivilSearchPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uISearchButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uICivilProcessFromYearEdit: Locator;
    readonly uICivilProcessFromNumberEdit: Locator;
    readonly uICivilProcessToYearEdit: Locator;
    readonly uICivilProcessToNumberEdit: Locator;
    readonly uICourtCaseNumberEdit: Locator;
    readonly uICourtCaseLabelText: Locator;
    readonly uICustomEdit: Locator;
    readonly uICustomLabelText: Locator;
    readonly uICivilSearchResultGrid: Locator;
    readonly uICivilRefIDEdit: Locator;
    readonly uIPaperTypeComboBox: Locator;
    readonly uIDistrictNoComboBox: Locator;
    readonly uIServiceActionComboBox: Locator;
    readonly uIBackButton: Locator;
    readonly uIResetButton: Locator;
    readonly uICivilSearchExpandResultGrid: Locator;
    readonly uIServiceLocationEdit: Locator;
    readonly uIServiceLocationVerifyCheckBox: Locator;
    readonly uIShowMapButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uISearchButton = page.locator("//span[contains(text(),'Search')]");
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uICivilProcessFromYearEdit = page.locator('#tabCivilSrch_tmpl0_usrCivilSrchBasic1_txtCivilNbrFrm_Year');
        this.uICivilProcessFromNumberEdit = page.locator('#tabCivilSrch_tmpl0_usrCivilSrchBasic1_txtCivilNbrFrm_Number');
        this.uICivilProcessToYearEdit = page.locator('#tabCivilSrch_tmpl0_usrCivilSrchBasic1_txtCivilNbrTo_Year');
        this.uICivilProcessToNumberEdit = page.locator('#tabCivilSrch_tmpl0_usrCivilSrchBasic1_txtCivilNbrTo_Number');
        this.uICourtCaseNumberEdit = page.locator('#tabCivilSrch_tmpl0_usrCivilSrchBasic1_txtCourtCaseNo');
        this.uICourtCaseLabelText = page.locator('#tabCivilSrch_tmpl0_usrCivilSrchBasic1_Kpilabel2');
        this.uICustomEdit = page.locator('#tabCivilSrch_tmpl0_usrCivilSrchBasic1_txtDocketNo');
        this.uICustomLabelText = page.locator('#tabCivilSrch_tmpl0_usrCivilSrchBasic1_lblCustom');
        this.uICivilSearchResultGrid = page.locator('#grdInquiryResults');
        this.uICivilRefIDEdit = page.locator('#tabCivilSrch_tmpl0_usrCivilSrchBasic1_txtCivilID');
        this.uIPaperTypeComboBox = page.locator('#tabCivilSrch_tmpl0_usrCivilSrchBasic1_drpPaper');
        this.uIDistrictNoComboBox = page.locator('#tabCivilSrch_tmpl0_usrCivilSrchBasic1_cddDistrict');
        this.uIServiceActionComboBox = page.locator('#tabCivilSrch_tmpl0_usrCivilSrchBasic1_cddStatus');
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
        this.uICivilSearchExpandResultGrid = page.locator('#grdInquiryResults');
        this.uIServiceLocationEdit = page.locator('#tabCivilSrch_tmpl0_usrCivilSrchBasic1_adrLocation_adrAddrsCtrl_txtFrom');
        this.uIServiceLocationVerifyCheckBox = page.locator('#tabCivilSrch_tmpl0_usrCivilSrchBasic1_adrLocation_adrAddrsCtrl_chkVerify');
        this.uIShowMapButton = page.locator("//span[contains(text(),'Show Map')]");
    }

    async enterAtCivilProcessNo(): Promise<void> {
        const civilProcessNo = BaseData.getTestValue('CivilProcessNo');
        await this.uICivilProcessFromYearEdit.fill(civilProcessNo.substring(0, 2));
        await this.uICivilProcessFromNumberEdit.fill(civilProcessNo.substring(3));
        await this.uICivilProcessFromNumberEdit.press('Tab');
        await this.uICivilProcessToYearEdit.fill(civilProcessNo.substring(0, 2));
        await this.uICivilProcessToNumberEdit.fill(civilProcessNo.substring(3));
        await this.uICivilProcessToNumberEdit.press('Tab');
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
        await this.page.waitForTimeout(1000);
    }

    async enterAtCourtCase(): Promise<void> {
        await this.uICourtCaseNumberEdit.fill(BaseData.getTestValue('CourtCaseNo'));
    }

    async selectAtCivilIDInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICivilSearchResultGrid, BaseData.getTestValue('CivilID'));
    }

    async selectAtCivilNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICivilSearchResultGrid, BaseData.getTestValue('CivilNo'));
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickCourtCaseText(): Promise<void> {
        await this.uICourtCaseLabelText.click();
    }

    async clickCustomText(): Promise<void> {
        await this.uICustomLabelText.click();
    }


    async verifyAtStatus(rowIndex: number, columnIndex: number): Promise<void> {
        const cell = await this.grid.getGridCellByIndex(this.uICivilSearchResultGrid, rowIndex, "");
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getTestValue('Status'));
    }

    async verifyCourtCaseFieldEnabled(): Promise<void> {
        await expect(this.uICourtCaseNumberEdit).toBeEnabled();
    }

    async verifyCustomEnabled(): Promise<void> {
        await expect(this.uICustomEdit).toBeEnabled();
    }

    async verifyCourtCaseFieldHide(): Promise<void> {
        const classAttr = await this.uICourtCaseNumberEdit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async verifyCustomHide(): Promise<void> {
        const classAttr = await this.uICustomEdit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async enterAtCivilRefID(): Promise<void> {
        await this.uICivilRefIDEdit.fill(BaseData.getTestValue('CivilRefID'));
    }

    async verifyAtCivilID(rowIndex?: number): Promise<void> {
        if (rowIndex !== undefined) {
            const text = await this.grid.getGridCellInnerText(this.uICivilSearchResultGrid, 'Person', rowIndex);
            expect(text).toBe(BaseData.getTestValue('CivilID'));
        } else {
            const civilID = BaseData.getTestValue('CivilID');
            const cell = await this.grid.getGridCell(this.uICivilSearchResultGrid, civilID, 'Civil ID');
            const text = await cell.innerText();
            expect(text).toBe(civilID);
        }
    }

    async verifyAtCivilNo(rowIndex?: number): Promise<void> {
        if (rowIndex !== undefined) {
            const text = await this.grid.getGridCellInnerText(this.uICivilSearchResultGrid, 'Civil ID', rowIndex);
            expect(text).toBe(BaseData.getTestValue('CivilNo'));
        } else {
            const civilNo = BaseData.getTestValue('CivilNo');
            const cell = await this.grid.getGridCell(this.uICivilSearchResultGrid, civilNo, 'Civil#');
            const text = await cell.innerText();
            expect(text).toBe(civilNo);
        }
    }

    async selectAtPaperType(): Promise<void> {
        await this.uIPaperTypeComboBox.selectOption({ label: BaseData.getTestValue('PaperType') });
    }

    async verifyAtPaperType(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uICivilSearchResultGrid, 'Paper', rowIndex);
        expect(text).toBe(BaseData.getTestValue('PaperType'));
    }

    async selectAtPaperInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICivilSearchResultGrid, BaseData.getTestValue('Paper'));
    }

    async selectAtServiceAction(): Promise<void> {
        await this.uIServiceActionComboBox.selectOption({ label: BaseData.getTestValue('ServiceAction') });
    }

    async enterCivilProcessNo(civilProcessYear: string, civilProcessNo: string): Promise<void> {
        await this.uICivilProcessFromYearEdit.fill(civilProcessYear);
        await this.uICivilProcessFromNumberEdit.fill(civilProcessNo);
        await this.uICivilProcessFromNumberEdit.press('Tab');
        await this.uICivilProcessToYearEdit.fill(civilProcessYear);
        await this.uICivilProcessToNumberEdit.fill(civilProcessNo);
        await this.uICivilProcessToNumberEdit.press('Tab');
    }

    async selectCivilIDInGrid(civilID: string): Promise<void> {
        await this.grid.selectRowByCellText(this.uICivilSearchResultGrid, civilID);
    }

    async verifyAtPaperColumnValues(): Promise<void> {
        const cellValues = await this.grid.getGridTableColumnValues(this.uICivilSearchExpandResultGrid, 'Paper');
        for (const paper of cellValues) {
            if (paper && paper.trim() !== '') {
                expect(paper).toBe(BaseData.getTestValue('Paper'));
            }
        }
    }

    async verifyAtPaper1ColumnValues(): Promise<void> {
        const cellValues = await this.grid.getGridTableColumnValues(this.uICivilSearchExpandResultGrid, 'Paper');
        for (const paper of cellValues) {
            if (paper && paper.trim() !== '') {
                expect(paper).toBe(BaseData.getTestValue('Paper1'));
            }
        }
    }

    async clickBackButton(): Promise<void> {
        await this.uIBackButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
        await this.page.waitForTimeout(1000);
    }

    async enterAtServiceLocation(): Promise<void> {
        await this.uIServiceLocationEdit.fill(BaseData.getTestValue('ServiceLocation'));
        await this.uIServiceLocationVerifyCheckBox.press('Tab');
    }

    async reloadScreen(): Promise<void> {
        await this.page.reload();
        await this.page.waitForTimeout(1000);
    }

    async clickShowMap(): Promise<void> {
        await this.uIShowMapButton.click();
    }

    async selectRandomGridRow(): Promise<void> {
        await this.grid.selectRandomRow(this.uICivilSearchResultGrid);
    }

    async verifyAtCivilNumber(): Promise<void> {
        const civilNo = BaseData.getTestValue('CivilNo');
        const cell = await this.grid.getGridCell(this.uICivilSearchResultGrid, civilNo, 'Civil#');
        const text = await cell.innerText();
        expect(text).toBe(civilNo);
    }
}

export class CivilFormPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uICivilLableStatusText: Locator;
    readonly uICivilProcessYearEdit: Locator;
    readonly uICivilProcessNumberEdit: Locator;
    readonly uIReceivedDateEdit: Locator;
    readonly uIReceivedTimeEdit: Locator;
    readonly uICivilIDEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uINamesTab: Locator;
    readonly uIServiceTab: Locator;
    readonly uIPropertyTab: Locator;
    readonly uIFeesPaymentsTab: Locator;
    readonly uICommentsTab: Locator;
    readonly uICivilFormStatusTextView: Locator;
    readonly uICivilFormStatusLableTextView: Locator;
    readonly uIPaperButton: Locator;
    readonly uICourtCaseNoEdit: Locator;
    readonly uIExecutionEdit: Locator;
    readonly uIPaperDescriptionCombobox: Locator;
    readonly uIAttachmentTab: Locator;
    readonly uIPaperCountEdit: Locator;
    readonly uIFeesEdit: Locator;
    readonly uIAccompaningDocumentationCheckbox: Locator;
    readonly uIFeeWaivedCheckbox: Locator;
    readonly uIFeeWaivedCombobox: Locator;
    readonly uICourtDateEdit: Locator;
    readonly uIServeByDateEdit: Locator;
    readonly uIBondEdit: Locator;
    readonly uICustomEdit: Locator;
    readonly uITROButton: Locator;
    readonly uIIssuingDateEdit: Locator;
    readonly uIIssuingTimeEdit: Locator;
    readonly uIIssuingOfficalNameTypeEdit: Locator;
    readonly uIIssuingOfficalNameIDEdit: Locator;
    readonly uITROAddressEdit: Locator;
    readonly uIBottomStatusMessage: Locator;
    readonly uICustomizeButton: Locator;
    readonly uIFieldNameforPDFFormText: Locator;
    readonly uIStatusLabel: Locator;
    readonly uIShowMapButton: Locator;
    readonly uIClearMapButton: Locator;
    readonly uINarrativeTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uICivilLableStatusText = page.locator('#lblCvlStatus');
        this.uICivilProcessYearEdit = page.locator('#nbrCivilNbr_Year');
        this.uICivilProcessNumberEdit = page.locator('#nbrCivilNbr_Number');
        this.uIReceivedDateEdit = page.locator('#dttRecvDttm_Date_KPIDttmCtrl');
        this.uIReceivedTimeEdit = page.locator("//table[@id = 'dttRecvDttm_Time']//input");
        this.uICivilIDEdit = page.locator('#txtCivilRefID');
        this.uISaveButton = page.locator("//*[@id='cmdSave']");
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uINamesTab = page.locator("//span//span[contains(text(),'Names')]");
        this.uIServiceTab = page.locator("//div[@id = 'tabCivilDetails']//span[contains(text(),'Service')]");
        this.uIPropertyTab = page.locator("//div[@id = 'tabCivilDetails']//span[contains(text(),'Property')]");
        this.uIFeesPaymentsTab = page.locator("//span[contains(text(),'Fees/Payments')]");
        this.uICommentsTab = page.locator("//span[contains(text(),'Comments')]");
        this.uICivilFormStatusTextView = page.locator('#lblCvlStatus');
        this.uICivilFormStatusLableTextView = page.locator('#lblStatus');
        this.uIPaperButton = page.locator('#btnPaper');
        this.uICourtCaseNoEdit = page.locator('#txtCourtNbr');
        this.uIExecutionEdit = page.locator('#curExecutionAmt');
        this.uIPaperDescriptionCombobox = page.locator('#drpPaper');
        this.uIAttachmentTab = page.locator("//span[contains(text(),'Attachment')]");
        this.uIPaperCountEdit = page.locator('#txtNOP');
        this.uIFeesEdit = page.locator('#curFee');
        this.uIAccompaningDocumentationCheckbox = page.locator('#chkIsDocAccom');
        this.uIFeeWaivedCheckbox = page.locator('#chkIsFeeWaived');
        this.uIFeeWaivedCombobox = page.locator('#cddWaivedReason_DropDown');
        this.uICourtDateEdit = page.locator('#dttCourtDate_KPIDttmCtrl');
        this.uIServeByDateEdit = page.locator('#dtmServe_KPIDttmCtrl');
        this.uIBondEdit = page.locator('#curBondAmt');
        this.uICustomEdit = page.locator('#txtCustom1');
        this.uITROButton = page.locator('#btnTRO');
        this.uIIssuingDateEdit = page.locator('#dttmIssueDate_Date_KPIDttmCtrl');
        this.uIIssuingTimeEdit = page.locator("//table[@id = 'dttmIssueDate_Time']//input");
        this.uIIssuingOfficalNameTypeEdit = page.locator('#nmcName_NameType');
        this.uIIssuingOfficalNameIDEdit = page.locator('#nmcName_NameTypeID');
        this.uITROAddressEdit = page.locator('#txtcAddress');
        this.uIBottomStatusMessage = page.locator("//td[@class='statusBar']//b");
        this.uICustomizeButton = page.locator("//li[@title = 'Customize']");
        this.uIFieldNameforPDFFormText = page.locator("//span[contains(text(),'Field Names for PDF Form')]");
        this.uIStatusLabel = page.locator('#tdStatus1');
        this.uIShowMapButton = page.locator('#btnShowMap');
        this.uIClearMapButton = page.locator('#cmdDelete');
        this.uINarrativeTab = page.locator("//span[text()='Narrative']");
    }

    async clickFeesPaymentTab(): Promise<void> {
        await this.uIFeesPaymentsTab.click();
        await this.page.waitForTimeout(1000);
    }

    async clickNamesTab(): Promise<void> {
        await this.uINamesTab.click();
        await this.page.waitForTimeout(1000);
    }

    async clickServiceTab(): Promise<void> {
        await this.uIServiceTab.click();
        await this.page.waitForTimeout(1000);
    }

    async clickPropertyTab(): Promise<void> {
        await this.uIPropertyTab.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtCivilProcessNumber(): Promise<void> {
        const civilNo = BaseData.getTestValue('CivilNo');
        const yr = await this.uICivilProcessYearEdit.inputValue();
        const num = await this.uICivilProcessNumberEdit.inputValue();
        expect(yr).toBe(civilNo.substring(0, 2));
        expect(num).toBe(civilNo.substring(3));
    }

    async verifyStatusAsOpen(): Promise<void> {
        const text = await this.uICivilFormStatusTextView.innerText();
        expect(text.trim()).toBe('OPEN');
    }

    async verifyStatusAsServed(): Promise<void> {
        const text = await this.uICivilFormStatusLableTextView.innerText();
        expect(text).toContain('SERVED');
    }

    async verifyStatusAsClosed(): Promise<void> {
        const text = await this.uICivilFormStatusTextView.innerText();
        expect(text).toContain('CLOSED');
    }

    async verifyAtCivilID(): Promise<void> {
        const val = await this.uICivilIDEdit.inputValue();
        expect(val).toContain(BaseData.getTestValue('CivilID'));
    }

    async saveScreen(): Promise<void> {
        await this.elementHelpers.saveWithAccept(this.uISaveButton);
    }

    async verifySaveScreenConfirmMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        if (await modal.isVisible()) {
            await expect(modal).toContainText('(3) Do You Want To Save All Of The Entered Details?');
            await this.popup.confirmYesButton.click();
        }
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async clickPaperButton(): Promise<void> {
        await this.uIPaperButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtCourtCaseNo(): Promise<void> {
        const val = await this.uICourtCaseNoEdit.inputValue();
        expect(val).toContain(BaseData.getTestValue('CourtCaseNo'));
    }

    async verifyAtExecution(): Promise<void> {
        const val = await this.uIExecutionEdit.inputValue();
        expect(val).toContain(BaseData.getTestValue('Execution'));
    }

    async verifyAtPaperDescription(): Promise<void> {
        const val = await this.uIPaperDescriptionCombobox.inputValue();
        expect(val).toBe(BaseData.getTestValue('Description'));
    }

    async verifyAtOtherPaper(): Promise<void> {
        const val = await this.uIPaperDescriptionCombobox.inputValue();
        expect(val).toBe(BaseData.getTestValue('OtherPaper'));
    }

    async clickAllTabs(): Promise<void> {
        await this.uINamesTab.click();
        await this.uIServiceTab.click();
        await this.uIFeesPaymentsTab.click();
        await this.uICommentsTab.click();
        await this.uIAttachmentTab.click();
    }

    async verifyPaperCountAs4(): Promise<void> {
        const val = await this.uIPaperCountEdit.inputValue();
        expect(val).toBe('4');
    }

    async verifyAtPaperType(): Promise<void> {
        const val = await this.uIPaperDescriptionCombobox.inputValue();
        expect(val).toBe(BaseData.getTestValue('PaperType'));
    }

    async verifyPaperCountAs1(): Promise<void> {
        const val = await this.uIPaperCountEdit.inputValue();
        expect(val).toBe('1');
    }

    async verifyWaiveFeesFieldDisabled(): Promise<void> {
        const classAttr = await this.uIFeeWaivedCombobox.getAttribute('class') || '';
        expect(classAttr).toContain('SELECTInActive');
    }

    async clickAccompaningDocumentCheckbox(): Promise<void> {
        await this.uIAccompaningDocumentationCheckbox.click();
    }

    async enterAtCivilID(): Promise<void> {
        await this.uICivilIDEdit.clear();
        await this.uICivilIDEdit.fill(BaseData.getTestValue('CivilID'));
    }

    async enterAtCourtCase(): Promise<void> {
        await this.uICourtCaseNoEdit.clear();
        await this.uICourtCaseNoEdit.fill(BaseData.getTestValue('CourtCase'));
    }

    async clickWaivedReasonCheckbox(): Promise<void> {
        await this.uIFeeWaivedCheckbox.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyWaiveFeesConfirmMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(20010) Do you really want to waive the fees?');
        await this.popup.confirmYesButton.click();
    }

    async verifyWaiveFeesFieldEnabled(): Promise<void> {
        await expect(this.uIFeeWaivedCombobox).toBeEnabled();
    }

    async selectWaivedFees(): Promise<void> {
        await this.uIFeeWaivedCombobox.selectOption({ index: 1 });
        await this.uIFeeWaivedCombobox.press('Tab');
    }

    async enterCourtDateAsCurrentDate(): Promise<void> {
        await this.uICourtDateEdit.fill(DateHelpers.getCurrentDate());
        await this.uICourtDateEdit.press('Tab');
    }

    async enterServeByAsFutureDate(): Promise<void> {
        await this.uIServeByDateEdit.clear();
        await this.uIServeByDateEdit.fill(DateHelpers.getFutureDate(2));
        await this.uIServeByDateEdit.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async verifyServeFutureDateAcknowledgeMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(20024) Serve Date must be prior to Court Date');
        await this.popup.acknowledgeOkButton.click();
    }

    async enterServeByAsCurrentDate(): Promise<void> {
        await this.uIServeByDateEdit.click();
        await this.uIServeByDateEdit.clear();
        await this.uIServeByDateEdit.fill(DateHelpers.getCurrentDate());
        await this.uIServeByDateEdit.press('Tab');
    }

    async enterAtCustom(): Promise<void> {
        await this.uICustomEdit.fill(BaseData.getTestValue('Custom'));
    }

    async enterBond(): Promise<void> {
        await this.uIBondEdit.click();
        await this.uIBondEdit.fill(RandomHelpers.randomNumberString(2));
    }

    async enterExecutionAmountAs25(): Promise<void> {
        await this.uIExecutionEdit.fill('25');
    }

    async verifyStatusAsServiceAttempt(): Promise<void> {
        const text = await this.uICivilFormStatusLableTextView.innerText();
        expect(text).toContain('SERVICE ATTEMPT');
    }

    async clickCommentsTab(): Promise<void> {
        await this.uICommentsTab.click();
        await this.page.waitForTimeout(1000);
    }

    async clickTROButton(): Promise<void> {
        await this.uITROButton.click();
    }

    async verifyIssuedDateAscurrentDate(): Promise<void> {
        const val = await this.uIIssuingDateEdit.inputValue();
        expect(val).toBe(DateHelpers.getCurrentDate());
    }

    async veifyAtIssuingOfficial(): Promise<void> {
        const officialID = BaseData.getTestValue('IssuingOfficialID');
        const type = await this.uIIssuingOfficalNameTypeEdit.inputValue();
        const id = await this.uIIssuingOfficalNameIDEdit.inputValue();
        expect(type).toBe(officialID.substring(0, 1));
        expect(id).toBe(officialID.substring(2));
    }

    async clickSaveandClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
    }

    async getCivilProcessNo(): Promise<{ civilProcessYear: string; civilProcessNo: string }> {
        const civilProcessYear = await this.uICivilProcessYearEdit.inputValue();
        const civilProcessNo = await this.uICivilProcessNumberEdit.inputValue();
        return { civilProcessYear, civilProcessNo };
    }

    async getCivilID(): Promise<string> {
        return await this.uICivilIDEdit.inputValue();
    }

    async veifyIssuingOfficialAtPrimaryNameID(): Promise<void> {
        const primaryID = BaseData.getTestValue('PrimaryNameID');
        const type = await this.uIIssuingOfficalNameTypeEdit.inputValue();
        const id = await this.uIIssuingOfficalNameIDEdit.inputValue();
        expect(type).toBe(primaryID.substring(0, 1));
        expect(id).toBe(primaryID.substring(2));
    }

    async verifyAtAddressForTROScreen(): Promise<void> {
        const val = await this.uITROAddressEdit.inputValue();
        expect(val).toContain(BaseData.getTestValue('Address'));
    }

    async verifyUpdateSuccessfullMessage(): Promise<void> {
        const text = await this.uIBottomStatusMessage.innerText();
        expect(text).toContain('1003 - Update Successful');
    }

    async getRecvdDate(): Promise<string> {
        return await this.uIReceivedDateEdit.inputValue();
    }

    async clickRefreshButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async enterAtCourtDate(date: string): Promise<void> {
        await this.uICourtDateEdit.fill(date);
        await this.uICourtDateEdit.press('Tab');
    }

    async enterAtCourtDateAsPastDate(date: string): Promise<void> {
        const prev = DateHelpers.getPreviousDate(1, 'MM/dd/yyyy');
        await this.uICourtDateEdit.fill(prev);
        await this.uICourtDateEdit.press('Tab');
    }

    async enterCourtDateAsFutureDate(date: string): Promise<void> {
        const future = DateHelpers.getFutureDate(1);
        await this.uICourtDateEdit.fill(future);
    }

    async readCivilProcessNo(): Promise<string> {
        const cpy = await this.uICivilProcessYearEdit.inputValue();
        const cpn = await this.uICivilProcessNumberEdit.inputValue();
        return `${cpy}-${cpn}`;
    }

    async clickCustomizeIcon(): Promise<void> {
        await this.uICustomizeButton.click();
    }

    async clickFieldNameForPDF(): Promise<void> {
        await this.uIFieldNameforPDFFormText.click();
    }

    async saveAndCloseScreen(): Promise<void> {
        this.elementHelpers.saveAndCloseWithAccept(this.uISaveAndCloseButton);
    }

    async verifyAtStatusBackGroundColorAsYellow(): Promise<void> {
        const cssValue = await this.uIStatusLabel.evaluate(el => getComputedStyle(el).backgroundColor);
        expect(cssValue).toBe('rgba(255, 255, 0, 1)');
    }

    async verifyAtStatusTextColorAsGreen(): Promise<void> {
        const cssValue = await this.uICivilLableStatusText.evaluate(el => getComputedStyle(el).color);
        expect(cssValue).toBe('rgba(0, 128, 0, 1)');
    }

    async clickShowMap(): Promise<void> {
        await this.uIShowMapButton.click();
    }

    async clickClearMap(): Promise<void> {
        await this.uIClearMapButton.click();
    }

    async verifyConfirmationPopupIsArising(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toBeVisible();
    }

    async verifyAtTabIsDisplayedByTabName(i: number): Promise<void> {
        const tabName = BaseData.getTestValue('TabName' + i);
        const element = this.page.locator(`//span//span[contains(text(), '${tabName}')]`);
        await expect(element).toBeVisible();
    }

    async switchToNarrativeTab(): Promise<void> {
        await this.uINarrativeTab.click();
        await this.page.waitForLoadState('load');
        new BrowserHelpers(this.page).switchToFrame('frmTextMgrEx');
    }
}

export class CivilFeesPaymentsTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIPaperFeeEdit: Locator;
    readonly uIServiceFeeEdit: Locator;
    readonly uIHourlyEdit: Locator;
    readonly uIWriteOffCheckBox: Locator;
    readonly uIDateEdit: Locator;
    readonly uIDateLabelText: Locator;
    readonly uIMethodComboBox: Locator;
    readonly uIMethodLableText: Locator;
    readonly uIAuthByEdit: Locator;
    readonly uIAuthByLableTest: Locator;
    readonly uIAuthByLookupButton: Locator;
    readonly uIFeePaymentResultGrid: Locator;
    readonly uIFeesBalanceEdit: Locator;
    readonly uITransactionTypeComboBox: Locator;
    readonly uIMethod2ComboBox: Locator;
    readonly uIAmountEdit: Locator;
    readonly uINoteEdit: Locator;
    readonly uINamesComboBox: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uINotesEdit: Locator;
    readonly uIWriteMethodComboBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIPaperFeeEdit = page.locator('#tabCivilDetails_tmpl3_UsrFeesPayment1_txtPaper');
        this.uIServiceFeeEdit = page.locator('#tabCivilDetails_tmpl3_UsrFeesPayment1_txtPerAttempt');
        this.uIHourlyEdit = page.locator('#tabCivilDetails_tmpl3_UsrFeesPayment1_curHourly');
        this.uIWriteOffCheckBox = page.locator('#tabCivilDetails_tmpl3_UsrFeesPayment1_chkWriteOff');
        this.uIDateEdit = page.locator('#tabCivilDetails_tmpl3_UsrFeesPayment1_dttWrtDate_KPIDttmCtrl');
        this.uIDateLabelText = page.locator('#lblWrtDate');
        this.uIMethodComboBox = page.locator('#tabCivilDetails_tmpl3_UsrFeesPayment1_cddMethod1_DropDown');
        this.uIMethodLableText = page.locator('#lblWrtMth');
        this.uIAuthByEdit = page.locator('#tabCivilDetails_tmpl3_UsrFeesPayment1_lupAuthBy_CodeValue');
        this.uIAuthByLableTest = page.locator('#lblAuthBy');
        this.uIAuthByLookupButton = page.locator('#tabCivilDetails_tmpl3_UsrFeesPayment1_lupAuthBy_imgBtn');
        this.uIFeePaymentResultGrid = page.locator('#tabCivilDetails_tmpl3_UsrFeesPayment1_grdFeePayment');
        this.uIFeesBalanceEdit = page.locator('#tabCivilDetails_tmpl3_UsrFeesPayment1_curFeesBalance');
        this.uITransactionTypeComboBox = page.locator('#tabCivilDetails_tmpl3_UsrFeesPayment1_cddTransType_DropDown');
        this.uIMethod2ComboBox = page.locator('#tabCivilDetails_tmpl3_UsrFeesPayment1_cddMethod2_DropDown');
        this.uIAmountEdit = page.locator('#tabCivilDetails_tmpl3_UsrFeesPayment1_curAmount');
        this.uINoteEdit = page.locator('#tabCivilDetails_tmpl3_UsrFeesPayment1_txtReference');
        this.uINamesComboBox = page.locator('#tabCivilDetails_tmpl3_UsrFeesPayment1_drpDefendant');
        this.uIAddButton = page.locator('#tabCivilDetails_tmpl3_UsrFeesPayment1_cmdAdd');
        this.uIClearButton = page.locator('#tabCivilDetails_tmpl3_UsrFeesPayment1_cmdClear');
        this.uINotesEdit = page.locator('#tabCivilDetails_tmpl3_UsrFeesPayment1_txtNotes');
        this.uIWriteMethodComboBox = page.locator('#tabCivilDetails_tmpl3_UsrFeesPayment1_cddWrtMethod_DropDown');
    }

    async clickWriteOffCheckBox(): Promise<void> {
        await this.uIWriteOffCheckBox.click();
        await this.page.waitForTimeout(1000);
    }

    async selectMethod(): Promise<void> {
        await this.uIWriteMethodComboBox.selectOption({ label: '101 - Loan Wave Off' });
    }

    async enterAtAuthBy(): Promise<void> {
        await this.uIAuthByEdit.fill(BaseData.getTestValue('AuthBy'));
        await this.uIAuthByEdit.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async verifyCurrentDateInDate(): Promise<void> {
        const val = await this.uIDateEdit.inputValue();
        expect(val).toBe(DateHelpers.getCurrentDate());
    }

    async verifyDateMethodAuthByMandatory(): Promise<void> {
        const dClass = await this.uIDateLabelText.getAttribute('class') || '';
        const mClass = await this.uIMethodLableText.getAttribute('class') || '';
        const aClass = await this.uIAuthByLableTest.getAttribute('class') || '';
        expect(dClass).toContain('req');
        expect(mClass).toContain('req');
        expect(aClass).toContain('req');
    }

    async verifyAtPaperFee(): Promise<void> {
        const val = await this.uIPaperFeeEdit.inputValue();
        expect(val).toBe(BaseData.getTestValue('PaperFee'));
    }

    async verifyAtServiceFee(): Promise<void> {
        const val = await this.uIServiceFeeEdit.inputValue();
        expect(val).toBe(BaseData.getTestValue('ServiceFee'));
    }

    async verifyTransactionAsExecutionInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIFeePaymentResultGrid, 'Transaction', rowIndex);
        expect(text).toBe('Execution');
    }

    async verifyAtDebitInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIFeePaymentResultGrid, 'Debit', rowIndex);
        expect(text).toBe(BaseData.getTestValue('Debit'));
    }

    async verifyAtFeeBalance(): Promise<void> {
        const val = await this.uIFeesBalanceEdit.inputValue();
        expect(val).toBe(BaseData.getTestValue('FeeBalance'));
    }

    async selectTransactionTypeAsPaperFee(): Promise<void> {
        await this.uITransactionTypeComboBox.selectOption({ label: 'Paper Fee' });
        await this.uITransactionTypeComboBox.press('Tab');
    }

    async selectServiceMethodsAsCashCredit(): Promise<void> {
        await this.uIMethodComboBox.selectOption({ label: 'Cash' });
        await this.uIMethodComboBox.press('Tab');
        await this.uIMethod2ComboBox.selectOption({ label: 'Credit' });
        await this.uIMethod2ComboBox.press('Tab');
    }

    async enterAtAmount(): Promise<void> {
        await this.uIAmountEdit.fill(BaseData.getTestValue('Amount'));
    }

    async enterNote(): Promise<void> {
        await this.uINoteEdit.fill(RandomHelpers.randomString(25));
    }

    async selectAtName(): Promise<void> {
        await this.uINamesComboBox.selectOption({ label: BaseData.getTestValue('Name') });
        await this.uINamesComboBox.press('Tab');
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtNameInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIFeePaymentResultGrid, 'Name', rowIndex);
        expect(text).toBe(BaseData.getTestValue('Name'));
    }

    async verifyAtCreditInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIFeePaymentResultGrid, 'Credit', rowIndex);
        expect(text).toBe(BaseData.getTestValue('Credit'));
    }

    async selectServiceMethodsAsCashDebit(): Promise<void> {
        await this.uIMethodComboBox.selectOption({ label: 'Cash' });
        await this.uIMethodComboBox.press('Tab');
        await this.uIMethod2ComboBox.selectOption({ label: 'Debit' });
        await this.uIMethod2ComboBox.press('Tab');
    }

    async selectTransactionType(): Promise<void> {
        await this.uITransactionTypeComboBox.selectOption({ index: 1 });
        await this.uITransactionTypeComboBox.press('Tab');
    }

    async tabDate(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async enterNotes(): Promise<void> {
        await this.uINotesEdit.fill(RandomHelpers.randomString(25));
    }

    async selectWriteMethod(): Promise<void> {
        await this.uIWriteMethodComboBox.selectOption({ index: 1 });
        await this.uIWriteMethodComboBox.press('Tab');
    }
}

export class CivilNamesTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uITypeComboBox: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uIAssociatesEdit: Locator;
    readonly uIAssociatesLookupButton: Locator;
    readonly uICommentsEdit: Locator;
    readonly uIToServedCheckBox: Locator;
    readonly uIETAlCheckBox: Locator;
    readonly uIBillableCheckBox: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uINamesTabResultGrid: Locator;
    readonly uIDistrictLookupButton: Locator;
    readonly uIPrimaryContactCheckBox: Locator;
    readonly uIAddressDistrictLabel: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameTypeIDEdit: Locator;
    readonly uINameInfoIcon: Locator;
    readonly uIUpdateButton: Locator;
    readonly uIDistrictCodeValueEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uITypeComboBox = page.locator('#tabCivilDetails_tmpl0_UsrCvlNames1_cddType_DropDown');
        this.uILastNameEdit = page.locator('#tabCivilDetails_tmpl0_UsrCvlNames1_nmcName_LastName');
        this.uIFirstNameEdit = page.locator('#tabCivilDetails_tmpl0_UsrCvlNames1_nmcName_FirstName');
        this.uIAddressEdit = page.locator('#tabCivilDetails_tmpl0_UsrCvlNames1_txtcAddress');
        this.uIAssociatesEdit = page.locator('#tabCivilDetails_tmpl0_UsrCvlNames1_txtContact');
        this.uIAssociatesLookupButton = page.locator('#tabCivilDetails_tmpl0_UsrCvlNames1_imgLookUp');
        this.uICommentsEdit = page.locator('#tabCivilDetails_tmpl0_UsrCvlNames1_txtComment');
        this.uIToServedCheckBox = page.locator('#tabCivilDetails_tmpl0_UsrCvlNames1_chkToServed');
        this.uIETAlCheckBox = page.locator('#tabCivilDetails_tmpl0_UsrCvlNames1_chkIsAtEI');
        this.uIBillableCheckBox = page.locator('#tabCivilDetails_tmpl0_UsrCvlNames1_chkBillable');
        this.uIAddButton = page.locator('#tabCivilDetails_tmpl0_UsrCvlNames1_imgAddName');
        this.uIClearButton = page.locator('#tabCivilDetails_tmpl0_UsrCvlNames1_imgClearName');
        this.uINamesTabResultGrid = page.locator('#tabCivilDetails_tmpl0_UsrCvlNames1_grdCvlNames');
        this.uIDistrictLookupButton = page.locator('#tabCivilDetails_tmpl0_UsrCvlNames1_lupDist_imgBtn');
        this.uIPrimaryContactCheckBox = page.locator('#tabCivilDetails_tmpl0_UsrCvlNames1_chkIsPrmContact');
        this.uIAddressDistrictLabel = page.locator('#tdAddress');
        this.uINameTypeEdit = page.locator('#tabCivilDetails_tmpl0_UsrCvlNames1_nmcName_NameType');
        this.uINameTypeIDEdit = page.locator('#tabCivilDetails_tmpl0_UsrCvlNames1_nmcName_NameTypeID');
        this.uINameInfoIcon = page.locator('#tabCivilDetails_tmpl0_UsrCvlNames1_nmcName_imgSrch');
        this.uIUpdateButton = page.locator('#tabCivilDetails_tmpl0_UsrCvlNames1_imgAddName');
        this.uIDistrictCodeValueEdit = page.locator('#tabCivilDetails_tmpl0_UsrCvlNames1_lupDist_CodeValue');
    }

    async enterAtLastName(): Promise<void> {
        await this.uILastNameEdit.fill(BaseData.getTestValue('LastName'));
    }

    async enterAtFirstName(): Promise<void> {
        await this.uIFirstNameEdit.fill(BaseData.getTestValue('FirstName'));
        await this.uIFirstNameEdit.press('Tab');
    }

    async verifyAtAddressWithJuris(): Promise<void> {
        const val = await this.uIAddressEdit.inputValue();
        expect(val).toContain('PX');
    }

    async verifyAtAddressWithoutJuris(): Promise<void> {
        const val = await this.uIAddressEdit.inputValue();
        expect(val).not.toContain('PX');
    }

    async selectAtType(i?: number): Promise<void> {
        const key = i !== undefined ? `Type${i}` : 'Type';
        await this.uITypeComboBox.selectOption({ label: BaseData.getTestValue(key) });
    }

    async clickToBeServedCheckBox(): Promise<void> {
        await this.uIToServedCheckBox.click();
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyDistrictAcknowledgeMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(20040) District is Mandatory');
        await this.popup.acknowledgeOkButton.click();
    }

    async selectDistrict(): Promise<void> {
        await this.uIDistrictLookupButton.click();
        // await this.popup.kPICodedLookup.randomKPIHelpSelect();
    }

    async enterAtDistrict(): Promise<void> {
        await this.uIDistrictCodeValueEdit.fill(BaseData.getTestValue('DistrictCodeValue'));
    }

    async verifyAtTypeInGrid(rowIndex?: number): Promise<void> {
        if (rowIndex !== undefined) {
            const text = await this.grid.getGridCellInnerText(this.uINamesTabResultGrid, 'Type', rowIndex);
            expect(text).toBe(BaseData.getTestValue('Type'));
        } else {
            const cell = await this.grid.getGridCell(this.uINamesTabResultGrid, BaseData.getTestValue('Name'), 'Type');
            const text = await cell.innerText();
            expect(text).toBe(BaseData.getTestValue('Type'));
        }
    }

    async clickDistrictLookupButton(): Promise<void> {
        await this.uIDistrictLookupButton.click();
    }

    async verifyAtNameInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uINamesTabResultGrid, 'Name', rowIndex);
        expect(text).toBe(BaseData.getTestValue('Name'));
    }

    async selectAtNameInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uINamesTabResultGrid, BaseData.getTestValue('Name'));
        await this.page.waitForTimeout(1000);
    }

    async verifyPrimaryContactCheckBoxChecked(): Promise<void> {
        await expect(this.uIPrimaryContactCheckBox).toBeChecked();
    }

    async clickClearButton(): Promise<void> {
        await this.uIClearButton.click();
    }

    async clickPrimaryContactCheckBox(): Promise<void> {
        await this.uIPrimaryContactCheckBox.click();
    }

    async selectAtName1InGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uINamesTabResultGrid, BaseData.getTestValue('Name1'));
        await this.page.waitForTimeout(1000);
    }

    async selectTypeAsDefendant(): Promise<void> {
        await this.uITypeComboBox.selectOption({ label: 'Defendant' });
        await this.uITypeComboBox.press('Tab');
    }

    async selectTypeAsWitness(): Promise<void> {
        await this.uITypeComboBox.selectOption({ label: 'Witness' });
        await this.uITypeComboBox.press('Tab');
    }

    async verifyAddressDistrictLabelMandatory(): Promise<void> {
        const classAttr = await this.uIAddressDistrictLabel.getAttribute('class') || '';
        expect(classAttr).toContain('req');
    }

    async enterAtNameID(i: number): Promise<void> {
        const nameID = BaseData.getTestValue('NameID' + i);
        await this.uINameTypeEdit.fill(nameID.substring(0, 1));
        await this.uINameTypeIDEdit.fill(nameID.substring(2));
        await this.uINameTypeIDEdit.press('Tab');
    }

    async clickBillableCheckBox(): Promise<void> {
        await this.uIBillableCheckBox.click();
    }

    async enterComments(): Promise<void> {
        await this.uICommentsEdit.fill(RandomHelpers.randomString(25));
    }

    async verifyTypeAsDefendantInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uINamesTabResultGrid, 'Type', rowIndex);
        expect(text).toBe('Defendant');
    }

    async verifyBillableCheckboxCheckedInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uINamesTabResultGrid, 'Defendant', 'Billable');
        const img = cell.locator('img');
        const alt = await img.getAttribute('alt') || '';
        expect(alt).toContain('Checked');
    }

    async verifyToBeServedCheckboxCheckedInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uINamesTabResultGrid, 'Defendant', 'Served');
        const img = cell.locator('img');
        const alt = await img.getAttribute('alt') || '';
        expect(alt).toContain('Checked');
    }

    async verifyDefendantRowColor(): Promise<void> {
        const row = await this.grid.getRowByCellText(this.uINamesTabResultGrid, 'Defendant');
        const classAttr = await row.getAttribute('class') || '';
        expect(classAttr).toContain('gridrowclr_Red');
    }

    async verifyEtAlCheckboxDisabled(): Promise<void> {
        await expect(this.uIETAlCheckBox).toBeDisabled();
    }

    async verifyTypeAsWitnessInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uINamesTabResultGrid, 'Type', rowIndex);
        expect(text).toBe('Witness');
    }

    async clickAssociatesLookupIcon(): Promise<void> {
        await this.uIAssociatesLookupButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAssociatesIconInGrid(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCellByIndex(this.uINamesTabResultGrid, rowIndex, '');
        const classAttr = await cell.getAttribute('class') || '';
        expect(classAttr).toContain('gridrowclr_Contact');
    }

    async verifyAtNameRowColorAsBlack(): Promise<void> {
        const row = await this.grid.getRowByCellText(this.uINamesTabResultGrid, BaseData.getTestValue('Name'));
        const color = await row.evaluate(el => getComputedStyle(el).color);
        expect(color).toContain('0, 0, 0');
    }

    async clickAssociatesIconInGrid(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCellByIndex(this.uINamesTabResultGrid, rowIndex, '');
        await cell.click();
        await this.page.waitForTimeout(1000);
    }

    async clickNameInfoIcon(): Promise<void> {
        await this.uINameInfoIcon.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtAddressInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uINamesTabResultGrid, 'Address', rowIndex);
        expect(text).toContain(BaseData.getTestValue('Address'));
    }

    async verifyToBeServedCheckboxChecked(): Promise<void> {
        await expect(this.uIToServedCheckBox).toBeChecked();
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
        await this.page.waitForTimeout(1000);
    }

    async deleteRowByType(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uINamesTabResultGrid, BaseData.getTestValue('Type'));
    }

    async clickCancelOnDeleteConfirmPopup(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(4) Do you really want to delete?');
        await this.popup.confirmNoButton.click();
    }

    async clickDeleteHeaderInGrid(): Promise<void> {
        await this.uINamesTabResultGrid.locator("//th//span[text()='X'] | //th[text()='X']").first().click();
    }

    async verifyDeleteConfirmationPopupIsNotAppeared(): Promise<void> {
        const modalVisible = await this.popup.modalBody.isVisible().catch(() => false);
        expect(modalVisible).toBe(false);
    }

    async verifyAlreadyUnderBilableAcknPopup(): Promise<void> {
        const modal = this.popup.modalBody;
        const msg = `(20002) ${BaseData.getTestValue('LastName')}, ${BaseData.getTestValue('FirstName')} is already under billable`;
        await expect(modal).toContainText(msg);
        await this.popup.acknowledgeOkButton.click();
    }
}

export class CivilServiceTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIActionComboBox: Locator;
    readonly uIReasonComboBox: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uILocationEdit: Locator;
    readonly uIDistrictLookupButton: Locator;
    readonly uIServiceAttemptResultGrid: Locator;
    readonly uINameCombobox: Locator;
    readonly uIServiceFeeEdit: Locator;
    readonly uINarrativeEdit: Locator;
    readonly uINarrativeIconButton: Locator;
    readonly uINameTextView: Locator;
    readonly uILocationTextView: Locator;
    readonly uIReasonTextView: Locator;
    readonly uISeviceFeeTextView: Locator;
    readonly uICollectionTypeTextView: Locator;
    readonly uIPropertyInventoryButton: Locator;
    readonly uIActionTextView: Locator;
    readonly uIDateTimeTextView: Locator;
    readonly uIUpdateButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIDateEdit = page.locator('#tabCivilDetails_tmpl1_UsrCvlService1_dtmServiceDttm_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id = 'tabCivilDetails_tmpl1_UsrCvlService1_dtmServiceDttm_Time']//input");
        this.uIActionComboBox = page.locator('#tabCivilDetails_tmpl1_UsrCvlService1_cddServiceAction_DropDown');
        this.uIReasonComboBox = page.locator('#tabCivilDetails_tmpl1_UsrCvlService1_cddReason_DropDown');
        this.uIAddButton = page.locator('#tabCivilDetails_tmpl1_UsrCvlService1_cmdAdd');
        this.uIClearButton = page.locator('#tabCivilDetails_tmpl1_UsrCvlService1_cmdClear');
        this.uILocationEdit = page.locator('#tabCivilDetails_tmpl1_UsrCvlService1_addLocation_txtFrom');
        this.uIDistrictLookupButton = page.locator('#tabCivilDetails_tmpl1_UsrCvlService1_lupDistrict_imgBtn');
        this.uIServiceAttemptResultGrid = page.locator('#tabCivilDetails_tmpl1_UsrCvlService1_grdSeviceAttempt');
        this.uINameCombobox = page.locator('#tabCivilDetails_tmpl1_UsrCvlService1_drpDefendant');
        this.uIServiceFeeEdit = page.locator('#tabCivilDetails_tmpl1_UsrCvlService1_curAttemptAmt');
        this.uINarrativeEdit = page.locator('#tabCivilDetails_tmpl1_UsrCvlService1_txtComments');
        this.uINarrativeIconButton = page.locator('#tabCivilDetails_tmpl1_UsrCvlService1_imgEditor');
        this.uINameTextView = page.locator('#tdDefendant');
        this.uILocationTextView = page.locator('#tdLocation');
        this.uIReasonTextView = page.locator('#tdReturnReason');
        this.uISeviceFeeTextView = page.locator('#tdAttempt');
        this.uICollectionTypeTextView = page.locator('#tdCollection');
        this.uIPropertyInventoryButton = page.locator('#tabCivilDetails_tmpl1_UsrCvlService1_btnSeizedPro');
        this.uIActionTextView = page.locator("//span[@id='tabCivilDetails_tmpl1_UsrCvlService1_lblServiceAction']/..");
        this.uIDateTimeTextView = page.locator("//span[@id='tabCivilDetails_tmpl1_UsrCvlService1_lblDateTime']/..");
        this.uIUpdateButton = page.locator('#tabCivilDetails_tmpl1_UsrCvlService1_cmdAdd');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyServiceAcknowledgeMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(20040) ServiceAction is Mandatory');
        await this.popup.acknowledgeOkButton.click();
    }

    async selectActionAsServed(): Promise<void> {
        await this.uIActionComboBox.selectOption({ label: 'Served' });
        await this.uIActionComboBox.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async selectAction(): Promise<void> {
        await this.uIActionComboBox.selectOption({ label: BaseData.getTestValue('Action') });
        await this.uIActionComboBox.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async selectReason(): Promise<void> {
        await this.uIReasonComboBox.selectOption({ index: 1 });
        await this.uIReasonComboBox.press('Tab');
    }

    async enterDateandTimeAsPreviousDate(): Promise<void> {
        await this.uIDateEdit.click();
        await this.uIDateEdit.fill('02/02/2018');
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async verifyPriorDateConfirmMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(20015) The service date you selected is prior to the date received, do you want to continue?');
        await this.popup.confirmYesButton.click();
    }

    async enterLocation(): Promise<void> {
        await this.uILocationEdit.fill('6 Jefferson Ave');
        await this.uILocationEdit.press('Tab');
    }

    async selectDistrict(): Promise<void> {
        await this.uIDistrictLookupButton.click();
        // await this.popup.kPICodedLookup.randomKPIHelpSelect();
    }

    async enterServiceFee(): Promise<void> {
        await this.uIServiceFeeEdit.fill(RandomHelpers.getRandomNumber(2).toString());
    }

    async enterNarrative(): Promise<void> {
        await this.uINarrativeEdit.fill(RandomHelpers.randomString(20));
    }

    async verifyAtName(): Promise<void> {
        const expected = `${BaseData.getTestValue('LastName')}, ${BaseData.getTestValue('FirstName')}`;
        const selected = await this.uINameCombobox.inputValue();
        expect(selected).toContain(expected);
    }

    async verifyNamesMandatoryFields(): Promise<void> {
        const classAttr = await this.uINameTextView.getAttribute('class') || '';
        expect(classAttr).toContain('req');
    }

    async verifyServiceFeeMandatoryFields(): Promise<void> {
        const classAttr = await this.uISeviceFeeTextView.getAttribute('class') || '';
        expect(classAttr).toContain('req');
    }

    async selectActionAsServiceAttempt(): Promise<void> {
        await this.uIActionComboBox.selectOption({ label: 'Service Attempt' });
        await this.uIActionComboBox.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async selectActionAsServedNoCharge(): Promise<void> {
        await this.uIActionComboBox.selectOption({ label: 'Served No Charge' });
        await this.uIActionComboBox.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async verifyLocationDistrictMandantoryFields(): Promise<void> {
        const classAttr = await this.uILocationTextView.getAttribute('class') || '';
        expect(classAttr).toContain('req');
    }

    async VerifyLocationSelected(): Promise<void> {
        const val = await this.uILocationEdit.inputValue();
        expect(val).toBe(BaseData.getTestValue('Address'));
    }

    async verifyReasonMandantoryFields(): Promise<void> {
        const classAttr = await this.uIReasonTextView.getAttribute('class') || '';
        expect(classAttr).toContain('req');
    }

    async verifyCollectionTypeMandantoryFields(): Promise<void> {
        const classAttr = await this.uICollectionTypeTextView.getAttribute('class') || '';
        expect(classAttr).toContain('req');
    }

    async selectAtName(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uINameCombobox.selectOption({ label: BaseData.getTestValue('Name') });
        await this.uINameCombobox.press('Tab');
    }

    async enterAtLocation(): Promise<void> {
        await this.uILocationEdit.fill(BaseData.getTestValue('Location'));
        await this.uILocationEdit.press('Tab');
    }

    async tabDateandTime(): Promise<void> {
        await this.uIDateEdit.click();
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async selectAtName1(): Promise<void> {
        await this.uINameCombobox.selectOption({ label: BaseData.getTestValue('Name1') });
        await this.uINameCombobox.press('Tab');
    }

    async enterAtServiceFee(): Promise<void> {
        await this.uIServiceFeeEdit.clear();
        await this.uIServiceFeeEdit.fill(BaseData.getTestValue('ServiceFee'));
    }

    async verifyActionAsServedInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIServiceAttemptResultGrid, 'Service Action', rowIndex);
        expect(text).toBe('Served');
    }

    async selectAtNameInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIServiceAttemptResultGrid, BaseData.getTestValue('Name'));
    }

    async clickPropertyInventoryButton(): Promise<void> {
        await this.uIPropertyInventoryButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyActionAsMandatory(): Promise<void> {
        const classAttr = await this.uIActionTextView.getAttribute('class') || '';
        expect(classAttr).toContain('req');
    }

    async verifyDateTimeAsMandatory(): Promise<void> {
        const classAttr = await this.uIDateTimeTextView.getAttribute('class') || '';
        expect(classAttr).toContain('req');
    }

    async selectActionAsPosted(): Promise<void> {
        await this.uIActionComboBox.selectOption({ label: 'Posted' });
        await this.uIActionComboBox.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickCancelOnDeleteConfirmPopup(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(4) Do you really want to delete?');
        await this.popup.confirmNoButton.click();
    }

    async deleteGridRowByServiceAction(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uIServiceAttemptResultGrid, BaseData.getTestValue('ServiceAction'));
    }

    async clickDeleteHeaderInGrid(): Promise<void> {
        await this.uIServiceAttemptResultGrid.locator("//th//span[text()='X'] | //th[text()='X']").first().click();
    }

    async verifyDeleteConfirmationPopupIsNotAppeared(): Promise<void> {
        const modalVisible = await this.popup.modalBody.isVisible().catch(() => false);
        expect(modalVisible).toBe(false);
    }
}

export class CivilPropertyTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIPropertyTabResultGrid: Locator;
    readonly uIAddNewButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIPropertyTabResultGrid = page.locator('#grdCivilData');
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
    }

    async verifyAtLocation(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPropertyTabResultGrid, 'Property Location', rowIndex);
        expect(text).toBe(BaseData.getTestValue('Location'));
    }

    async verifyAtSaleDateAsCurrentDate(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPropertyTabResultGrid, 'Sale Date', rowIndex);
        expect(text).toBe(DateHelpers.getCurrentDate());
    }

    async verifyAtPropertyLocation(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPropertyTabResultGrid, 'Property Location', rowIndex);
        expect(text).toBe(BaseData.getTestValue('PropertyLocation'));
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtPropertyLocation1(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPropertyTabResultGrid, 'Property Location', rowIndex);
        expect(text).toBe(BaseData.getTestValue('PropertyLocation1'));
    }

    async verifyAtBuyerName(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPropertyTabResultGrid, 'Buyer Name', rowIndex);
        expect(text).toBe(BaseData.getTestValue('BuyerName'));
    }

    async verifySaleDateAsCurrentDate(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPropertyTabResultGrid, 'Sale Date', rowIndex);
        expect(text).toBe(DateHelpers.getCurrentDate());
    }

    async verifyAdjournedDateAsFutureDate(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPropertyTabResultGrid, 'Adjourned', rowIndex);
        expect(text).toBe(DateHelpers.getFutureDate(5));
    }
}

export class CivilCommentsTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uICodeEdit: Locator;
    readonly uICodeLookupButton: Locator;
    readonly uIHeadingEdit: Locator;
    readonly uIEnterCommentsButton: Locator;
    readonly uICommentsResultGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uICodeEdit = page.locator('#lupCode_CodeValue');
        this.uICodeLookupButton = page.locator('#lupCode_imgBtn');
        this.uIHeadingEdit = page.locator('#txtSubject');
        this.uIEnterCommentsButton = page.locator('#btnComments');
        this.uICommentsResultGrid = page.locator('#grdComments');
    }

    async selectCode(): Promise<void> {
        await this.uICodeLookupButton.click();
        //await this.popup.kPICodedLookup.randomKPIHelpSelect();
    }

    async enterAtHeading(): Promise<void> {
        await this.uIHeadingEdit.fill(BaseData.getTestValue('Heading'));
    }

    async enterAtCode(): Promise<void> {
        await this.uICodeEdit.fill(BaseData.getTestValue('Code'));
    }

    async clickEnterCommentsButton(): Promise<void> {
        await this.uIEnterCommentsButton.click();
        await this.page.waitForTimeout(2000);
    }

    async verifyDateAsCurrentDate(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uICommentsResultGrid, 'Date Time', rowIndex);
        expect(text).toContain(DateHelpers.getCurrentDate('MM/dd/yy'));
    }

    async verifyAtHeading(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uICommentsResultGrid, 'Heading', rowIndex);
        expect(text).toBe(BaseData.getTestValue('Heading'));
    }

    async deleteAtHeading1Row(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uICommentsResultGrid, BaseData.getTestValue('Heading1'));
    }

    async verifyConfirmDeleteMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(4) Do you really want to delete?');
        await this.popup.confirmYesButton.click();
    }

    async verifyRowCountInGrid(rowCount: number): Promise<void> {
        const count = await this.grid.getRowCount(this.uICommentsResultGrid);
        expect(count).toBe(rowCount);
    }
}

export class CivilNarrativeTabPage {
    readonly page: Page;
    readonly uICommentsEdit: Locator;
    readonly uIRichtextEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uICommentsEdit = page.locator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        this.uIRichtextEdit = page.frameLocator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe').locator('body');
    }

    async enterAtComments(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIRichtextEdit.click();
        await this.uIRichtextEdit.fill(BaseData.getTestValue('Richtext'));
        await this.page.waitForTimeout(1000);
    }

    async verifyAtComments(): Promise<void> {
        const richText = await this.uIRichtextEdit.innerText();
        expect(richText).toBe(BaseData.getTestValue('Richtext'));
    }
}

export class AuthenticationWindowPage {
    readonly page: Page;
    readonly uIUserNameEdit: Locator;
    readonly uIPasswordEdit: Locator;
    readonly uIAcceptButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIUserNameEdit = page.locator('#txtUserName');
        this.uIPasswordEdit = page.locator('#txtPassWord');
        this.uIAcceptButton = page.locator('#cmdLogin');
    }

    async enterAtPassword(): Promise<void> {
        await this.uIPasswordEdit.fill(BaseData.getTestValue('Password'));
    }

    async clickAcceptButton(): Promise<void> {
        await this.uIAcceptButton.click();
    }
}

export class PaperEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uICivilProcessYearEdit: Locator;
    readonly uICivilProcessNumberEdit: Locator;
    readonly uIReceivedDateEdit: Locator;
    readonly uIReceivedTimeEdit: Locator;
    readonly uICivilIDEdit: Locator;
    readonly uICourtNumberEdit: Locator;
    readonly uICourtCaseNumberText: Locator;
    readonly uIPaperTypeCodeEdit: Locator;
    readonly uIPaperTypeCodeDescriptionTextEdit: Locator;
    readonly uIPaperEntryResultGrid: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIPaperInfoLocationEdit: Locator;
    readonly uIPaperInfoDistrictCodeEdit: Locator;
    readonly uIPaperInfoDistrictLookupbutton: Locator;
    readonly uIPaperInfoSaleDateEdit: Locator;
    readonly uIPaperInfoSaleTimeEdit: Locator;
    readonly uIPaperInfoResultGrid: Locator;
    readonly uIPaperInfoSaveButton: Locator;
    readonly uIPaperInfoSaveAndCloseButton: Locator;
    readonly uIPaperInfoExecutionAmountEdit: Locator;
    readonly uIApplyCheckbox: Locator;
    readonly uITROIssuedDateEdit: Locator;
    readonly uITROTimeEdit: Locator;
    readonly uITROExpiredDateEdit: Locator;
    readonly uITROExpiredTimeEdit: Locator;
    readonly uITRORelationshipLookupbutton: Locator;
    readonly uITROIssuingOfficialNameTypeEdit: Locator;
    readonly uITROIssuingOfficialNameIDEdit: Locator;
    readonly uIFireArmsProhibtedCombobox: Locator;
    readonly uIOtherPaperEdit: Locator;
    readonly uITROLastNameEdit: Locator;
    readonly uITROFirstNameEdit: Locator;
    readonly uIPaperTypeLookUpIcon: Locator;
    readonly uIBottomStatusMessage: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIPaperTypeGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uICivilProcessYearEdit = page.locator('#nbrCivilNbr_Year');
        this.uICivilProcessNumberEdit = page.locator('#nbrCivilNbr_Number');
        this.uIReceivedDateEdit = page.locator('#dtmRcvDttm_Date_KPIDttmCtrl');
        this.uIReceivedTimeEdit = page.locator("//table[@id = 'dtmRcvDttm_Time']//input");
        this.uICivilIDEdit = page.locator('#txtCivilRefID');
        this.uICourtNumberEdit = page.locator('#txtCourtNbr');
        this.uICourtCaseNumberText = page.locator('#lblCourtCaseNo');
        this.uIPaperTypeCodeEdit = page.locator('#lupPaperType_CodeValue');
        this.uIPaperTypeCodeDescriptionTextEdit = page.locator('#lupPaperType_CodeDescription');
        this.uIPaperEntryResultGrid = page.locator('#grdPaperType');
        this.uIAddButton = page.locator('#btnAdd');
        this.uIClearButton = page.locator('#btnClear');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIPaperInfoLocationEdit = page.locator('#adrLocation_txtFrom');
        this.uIPaperInfoDistrictCodeEdit = page.locator('#cddDistrict_CodeValue');
        this.uIPaperInfoDistrictLookupbutton = page.locator('#cddDistrict_imgBtn');
        this.uIPaperInfoSaleDateEdit = page.locator('#dttmSale_Date_KPIDttmCtrl');
        this.uIPaperInfoSaleTimeEdit = page.locator("//table[@id = 'dttmSale_Time']//input");
        this.uIPaperInfoResultGrid = page.locator('#grdPostedAt');
        this.uIPaperInfoSaveButton = page.locator('#cmdSave');
        this.uIPaperInfoSaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPaperInfoExecutionAmountEdit = page.locator('#CurExeAmt');
        this.uIApplyCheckbox = page.locator('#chkApply');
        this.uITROIssuedDateEdit = page.locator('#dttmIssueDate_Date_KPIDttmCtrl');
        this.uITROTimeEdit = page.locator("//table[@id = 'dttmIssueDate_Time']//input");
        this.uITROExpiredDateEdit = page.locator('#dttmExpireDate_Date_KPIDttmCtrl');
        this.uITROExpiredTimeEdit = page.locator("//table[@id = 'dttmExpireDate_Time']//input");
        this.uITRORelationshipLookupbutton = page.locator('#lupRelation_imgBtn');
        this.uITROIssuingOfficialNameTypeEdit = page.locator('#nmcName_NameType');
        this.uITROIssuingOfficialNameIDEdit = page.locator('#nmcName_NameTypeID');
        this.uIFireArmsProhibtedCombobox = page.locator('#drpFireArms_DropDown');
        this.uIOtherPaperEdit = page.locator('#txtOtherPaper');
        this.uITROLastNameEdit = page.locator('#nmcName_LastName');
        this.uITROFirstNameEdit = page.locator('#nmcName_FirstName');
        this.uIPaperTypeLookUpIcon = page.locator('#lupPaperType_imgBtn');
        this.uIBottomStatusMessage = page.locator("//td[@class='statusBar']//b");
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIPaperTypeGrid = page.locator('#grdPaperType');
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async clickCourtCaseNumberText(): Promise<void> {
        await this.uICourtCaseNumberText.click();
    }

    async verifyCourtCaseFieldEnabled(): Promise<void> {
        await expect(this.uICourtNumberEdit).toBeEnabled();
    }

    async verifyCourtCaseFieldHide(): Promise<void> {
        const classAttr = await this.uICourtNumberEdit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async verifyCourtCaseMandatory(): Promise<void> {
        const attr = await this.uICourtCaseNumberText.getAttribute('kpifieldusage') || '';
        expect(attr).toContain('Mandatory');
    }

    async enterAtCivilID(): Promise<void> {
        await this.uICivilIDEdit.fill(BaseData.getTestValue('CivilID'));
    }

    async enterAtCourtCaseNo(): Promise<void> {
        await this.uICourtNumberEdit.fill(BaseData.getTestValue('CourtCaseNo'));
    }

    async enterAtPaperType(): Promise<void> {
        await this.uIPaperTypeCodeEdit.fill(BaseData.getTestValue('PaperType'));
        await this.uIPaperTypeCodeEdit.press('Tab');
    }

    async enterRecivedDateandTime(): Promise<void> {
        await this.uIReceivedDateEdit.click();
        await this.uIReceivedDateEdit.press('Tab');
        await this.uIReceivedTimeEdit.press('Tab');
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyRequiredAcknowledgeMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(1018) Required Entries are Missing');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyOneRowAcknowledgeMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(6040) At least one warrant must be added to the grid.');
        await this.popup.acknowledgeOkButton.click();
    }

    async enterPropertyTypeAsPRO(): Promise<void> {
        await this.uIPaperTypeCodeEdit.fill('Pro');
        await this.uIPaperTypeCodeEdit.press('Tab');
    }

    async enterAtPaperInfoLocation(): Promise<void> {
        await this.uIPaperInfoLocationEdit.fill(BaseData.getTestValue('Location'));
        await this.uIPaperInfoLocationEdit.press('Tab');
    }

    async selectPaperInfoDistrict(): Promise<void> {
        await this.uIPaperInfoDistrictLookupbutton.click();
        // await this.popup.kPICodedLookup.randomKPIHelpSelect();
    }

    async enterPaperInfoSaleDateandTime(): Promise<void> {
        await this.uIPaperInfoSaleDateEdit.click();
        await this.uIPaperInfoSaleDateEdit.fill(DateHelpers.getCurrentDate());
        await this.uIPaperInfoSaleTimeEdit.click();
        await this.uIPaperInfoSaleTimeEdit.fill(DateHelpers.getCurrentTime());
        await this.uIPaperInfoSaleTimeEdit.press('Tab');
    }

    async savePaperInfoScreen(): Promise<void> {
        await this.uIPaperInfoSaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async verifyPaperInfoLocationAddedInGrid(): Promise<void> {
        const count = await this.grid.getRowCount(this.uIPaperInfoResultGrid);
        expect(count).toBe(1);
    }

    async verifyPROaddedInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPaperEntryResultGrid, 'Code', rowIndex);
        expect(text).toContain('Pro');
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickAtCodeInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIPaperEntryResultGrid, BaseData.getTestValue('Code'));
    }

    async clickPaperInfoDistrictLookup(): Promise<void> {
        await this.uIPaperInfoDistrictLookupbutton.click();
    }

    async tabReceivedDateTime(): Promise<void> {
        await this.uIReceivedDateEdit.click();
        await this.uIReceivedDateEdit.press('Tab');
        await this.uIReceivedTimeEdit.press('Tab');
    }

    async enterAtPaperInfoExecutionAmount(): Promise<void> {
        await this.uIPaperInfoExecutionAmountEdit.fill(BaseData.getTestValue('ExecutionAmount'));
    }

    async saveClosePaperInfoScreen(): Promise<void> {
        await this.uIPaperInfoSaveAndCloseButton.click();
        await this.popup.confirmYesButton.click();
    }

    async verifyAtCodeInGrid(rowIndex?: number): Promise<void> {
        if (rowIndex !== undefined) {
            const text = await this.grid.getGridCellInnerText(this.uIPaperEntryResultGrid, 'Code', rowIndex);
            expect(text).toBe(BaseData.getTestValue('Code'));
        } else {
            const text = await this.grid.getGridCellInnerText(this.uIPaperTypeGrid, 'Code', 0);
            expect(text).toBe(BaseData.getTestValue('PaperType'));
        }
    }

    async clickPaperInfoApplyCheckBox(): Promise<void> {
        await this.uIApplyCheckbox.click();
    }

    async enterCourtCaseNo(): Promise<void> {
        await this.uICourtNumberEdit.fill(RandomHelpers.randomNumberString(4));
    }

    async enterAtPaperInfoDistrict(): Promise<void> {
        await this.uIPaperInfoDistrictCodeEdit.fill(BaseData.getTestValue('District'));
        await this.uIPaperInfoDistrictCodeEdit.press('Tab');
    }

    async tabIssuingDateTime(): Promise<void> {
        await this.uITROIssuedDateEdit.press('Tab');
        await this.uITROTimeEdit.press('Tab');
    }

    async enterExpireDateAsFutureDate(): Promise<void> {
        await this.uITROExpiredDateEdit.fill(DateHelpers.getFutureDate(2));
        await this.uITROExpiredTimeEdit.fill(DateHelpers.getCurrentTime());
    }

    async selectRelationship(): Promise<void> {
        await this.uITRORelationshipLookupbutton.click();
        // await this.popup.kPICodedLookup.randomKPIHelpSelect();
    }

    async enterAtIssuingOfficalNameID(): Promise<void> {
        const nameID = BaseData.getTestValue('NameID');
        await this.uITROIssuingOfficialNameTypeEdit.fill(nameID.substring(0, 1));
        await this.uITROIssuingOfficialNameIDEdit.fill(nameID.substring(2));
        await this.uITROIssuingOfficialNameIDEdit.press('Tab');
    }

    async selectFirearmsProhibted(): Promise<void> {
        await this.uIFireArmsProhibtedCombobox.selectOption({ index: 1 });
        await this.uIFireArmsProhibtedCombobox.press('Tab');
    }

    async enterAtOtherPaper(): Promise<void> {
        await this.uIOtherPaperEdit.clear();
        await this.uIOtherPaperEdit.fill(BaseData.getTestValue('OtherPaper'));
    }

    async verifyOtherPaperAtDescription(): Promise<void> {
        const val = await this.uIOtherPaperEdit.inputValue();
        expect(val).toBe(BaseData.getTestValue('Description'));
    }

    async verifyPaperTypeAcknowledgeMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(20043) Valid Paper Types include Property, TRO, Execution, and Other ONLY');
        await this.popup.acknowledgeOkButton.click();
    }

    async enterAtPaperType3(): Promise<void> {
        await this.uIPaperTypeCodeEdit.fill(BaseData.getTestValue('PaperType3'));
        await this.uIPaperTypeCodeEdit.press('Tab');
    }

    async enterAtPaperType1(): Promise<void> {
        await this.uIPaperTypeCodeEdit.fill(BaseData.getTestValue('PaperType1'));
        await this.uIPaperTypeCodeEdit.press('Tab');
    }

    async enterAtPaperType2(): Promise<void> {
        await this.uIPaperTypeCodeEdit.fill(BaseData.getTestValue('PaperType2'));
        await this.uIPaperTypeCodeEdit.press('Tab');
    }

    async verifyAtCode1InGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPaperEntryResultGrid, 'Code', rowIndex);
        expect(text).toBe(BaseData.getTestValue('Code1'));
    }

    async verifyAtCode2InGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPaperEntryResultGrid, 'Code', rowIndex);
        expect(text).toBe(BaseData.getTestValue('Code2'));
    }

    async verifyAtCode3InGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPaperEntryResultGrid, 'Code', rowIndex);
        expect(text).toBe(BaseData.getTestValue('Code3'));
    }

    async verifyAtPaperTypeInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPaperEntryResultGrid, 'Paper Type', rowIndex);
        expect(text).toBe(BaseData.getTestValue('PaperType'));
    }

    async verifyAtPaperTypeDescription(): Promise<void> {
        const title = await this.uIPaperTypeCodeDescriptionTextEdit.getAttribute('title') || '';
        expect(title).toBe(BaseData.getTestValue('PaperTypeDescription'));
    }

    async clickPaperTypeLookUpIcon(): Promise<void> {
        await this.uIPaperTypeLookUpIcon.click();
    }

    async verifyPaperTypeCodeValueInCodedSearchGrid(): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.page.locator('#grdSrch'), 'CodeValue', 0);
        expect(text).toBe(BaseData.getTestValue('CodeValue'));
    }

    async verifyPapertTypeDescriptionInCodedSearchGrid(): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.page.locator('#grdSrch'), 'Description', 0);
        expect(text).toBe(BaseData.getTestValue('Description'));
    }

    async verifyAdditionSuccessfullMessage(): Promise<void> {
        const text = await this.uIBottomStatusMessage.innerText();
        expect(text).toContain('1003 - Update Successful');
    }

    async verifyUpdateSuccessfullMessage(): Promise<void> {
        const text = await this.uIBottomStatusMessage.innerText();
        expect(text).toContain('1003 - Update Successful');
    }

    async enterCivilID(): Promise<void> {
        await this.uICivilIDEdit.fill(RandomHelpers.randomNumberString(2));
    }

    async enterPaperTypeAsOther(): Promise<void> {
        await this.uIPaperTypeCodeEdit.fill('OTH');
        await this.uIPaperTypeCodeEdit.press('Tab');
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintButton.click();
    }

    async verify1051UpdateDataExistAcknowledgeMsg(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(1051) Updated data exists in the tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async verify6040AtLeastOnePaperMustBeAddedToThegrid(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(6040) At least one paper must be added to the grid.');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyPaperInfoWindowExists(): Promise<void> {
        const isPresent = this.page.url().includes('frmPaperInfo.aspx');
        expect(isPresent).toBe(true);
    }

    async verifyOnePaperAckMsg(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(6040) At least one paper must be added to the grid.');
        await this.popup.acknowledgeOkButton.click();
    }
}

export class DistrictPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIDistrictEdit: Locator;
    readonly uICityEdit: Locator;
    readonly uIDistrictResultGrid: Locator;
    readonly uISearchButton: Locator;
    readonly uIAddNewLink: Locator;
    readonly uIInactiveCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIDistrictEdit = page.locator('#txtDistrict');
        this.uICityEdit = page.locator('#txtCity');
        this.uIDistrictResultGrid = page.locator('#grdCityCode');
        this.uISearchButton = page.locator('#cmdSearch');
        this.uIAddNewLink = page.locator("//span[contains(text(),'Add New')]");
        this.uIInactiveCheckbox = page.locator('#chkIsActive');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewLink.click();
    }

    async enterAtDistrict(): Promise<void> {
        await this.uIDistrictEdit.fill(BaseData.getTestValue('District'));
    }

    async enterAtCity(): Promise<void> {
        await this.uICityEdit.fill(BaseData.getTestValue('City'));
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtDistrict(rowIndex?: number): Promise<void> {
        if (rowIndex !== undefined) {
            const text = await this.grid.getGridCellInnerText(this.uIDistrictResultGrid, 'District', rowIndex);
            expect(text).toBe(BaseData.getTestValue('District'));
        } else {
            const values = await this.grid.getGridTableColumnValues(this.uIDistrictResultGrid, 'District');
            for (const val of values) {
                expect(val).not.toBe(BaseData.getTestValue('District'));
            }
        }
    }

    async verifyAtCity(rowIndex?: number): Promise<void> {
        if (rowIndex !== undefined) {
            const text = await this.grid.getGridCellInnerText(this.uIDistrictResultGrid, 'City', rowIndex);
            expect(text).toBe(BaseData.getTestValue('City'));
        } else {
            const row = await this.grid.getRowByCellText(this.uIDistrictResultGrid, BaseData.getTestValue('City'));
            const text = await row.innerText();
            expect(text).toContain(BaseData.getTestValue('City'));
        }
    }

    async verifyAtMileage(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIDistrictResultGrid, 'Mileage', rowIndex);
        expect(text).toContain(BaseData.getTestValue('Mileage'));
    }

    async clickAtDistrictinRow(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIDistrictResultGrid, BaseData.getTestValue('District'));
    }

    async verifyNoRecordAcknowledgeMessge(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('1011 - No Record Found');
        await this.popup.acknowledgeOkButton.click();
    }

    async clickInactiveCheckBox(): Promise<void> {
        await this.uIInactiveCheckbox.click();
    }

    async deleteAtDistrictRow(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uIDistrictResultGrid, BaseData.getTestValue('District'));
    }

    async verifyConfirmDeleteMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(4) Do you really want to delete?');
        await this.popup.confirmYesButton.click();
    }

    async verifyDistrictRowCount(): Promise<void> {
        const count = await this.grid.getRowCount(this.uIDistrictResultGrid);
        expect(count).toBe(1);
    }

    async verifyInactiveRowColor(rowIndex: number): Promise<void> {
        const row = this.uIDistrictResultGrid.locator('tbody tr').nth(rowIndex);
        const classAttr = await row.getAttribute('class') || '';
        expect(classAttr).toContain('gridrowclr');
    }

    async deleteAtDistrictSelectedRow(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uIDistrictResultGrid, BaseData.getTestValue('District'));
    }

    async selectAtDistrictInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIDistrictResultGrid, BaseData.getTestValue('District'));
    }

    async selectRandomGridRow(): Promise<void> {
        await this.grid.selectRandomRow(this.uIDistrictResultGrid);
    }
}

export class DistrictCodePage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIDistrictEdit: Locator;
    readonly uICityEdit: Locator;
    readonly uIMilesEdit: Locator;
    readonly uIPostLocationEdit: Locator;
    readonly uIDistrictCodeResultGrid: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIInactiveCheckbox: Locator;
    readonly uIInactiveDateTextView: Locator;
    readonly uIBottomStatusMessage: Locator;
    readonly uIPrintIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIDistrictEdit = page.locator('#txtDistrict');
        this.uICityEdit = page.locator('#txtCity');
        this.uIMilesEdit = page.locator('#txtMiles');
        this.uIPostLocationEdit = page.locator('#adrLocation_txtFrom');
        this.uIDistrictCodeResultGrid = page.locator('#grdCvlDistrictCode');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIClearButton = page.locator('#cmdClear');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIInactiveCheckbox = page.locator('#chkIsActive');
        this.uIInactiveDateTextView = page.locator('#txtInactiveDttm');
        this.uIBottomStatusMessage = page.locator("//td[@class='statusBar']//b");
        this.uIPrintIcon = page.locator('#cmdPrint');
    }

    async enterAtDistrict(): Promise<void> {
        await this.uIDistrictEdit.fill(BaseData.getTestValue('District'));
    }

    async enterAtCity(): Promise<void> {
        await this.uICityEdit.fill(BaseData.getTestValue('City'));
    }

    async enterAtMileage(): Promise<void> {
        await this.uIMilesEdit.fill(BaseData.getTestValue('Mileage'));
    }

    async enterAtMiles(): Promise<void> {
        await this.uIMilesEdit.fill(BaseData.getTestValue('Miles'));
    }

    async enterAtPostLocation(): Promise<void> {
        await this.uIPostLocationEdit.fill(BaseData.getTestValue('PostLocation'));
        await this.uIPostLocationEdit.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifyAtPostLocation(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIDistrictCodeResultGrid, 'Post Location', rowIndex);
        const expected = BaseData.getTestValue('PostLocation');
        expect(text.includes(expected)).toBe(true);
    }

    async verifyAcknowledgeMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(1018) Required Entries are Missing');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyDataExistsAcknowledgeMsg(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(6040) Updated data exists in the fields.You must Add/Update to grid or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async deleteAtPostLocation(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uIDistrictCodeResultGrid, BaseData.getTestValue('PostLocation'));
        await this.popup.confirmYesButton.click();
    }

    async verifyPostLocationDeleted(rowCount: number): Promise<void> {
        const count = await this.grid.getRowCount(this.uIDistrictCodeResultGrid);
        expect(count).toBe(rowCount);
    }

    async clickAtPostLocationInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIDistrictCodeResultGrid, BaseData.getTestValue('PostLocation'));
    }

    async verifyAtAddressInPostLocationField(): Promise<void> {
        const val = await this.uIPostLocationEdit.inputValue();
        expect(val).toBe(BaseData.getTestValue('PostLocation'));
    }

    async clickInactiveCheckBox(): Promise<void> {
        await this.uIInactiveCheckbox.click();
    }

    async verifyInactiveDateAsCurrentDate(): Promise<void> {
        const val = await this.uIInactiveDateTextView.inputValue();
        expect(val).toContain(DateHelpers.getCurrentDate());
    }

    async enterAtPostLocation1(): Promise<void> {
        await this.uIPostLocationEdit.fill(BaseData.getTestValue('PostLocation1'));
        await this.uIPostLocationEdit.press('Tab');
    }

    async enterAtPostLocation2(): Promise<void> {
        await this.uIPostLocationEdit.fill(BaseData.getTestValue('PostLocation2'));
        await this.uIPostLocationEdit.press('Tab');
    }

    async verifyAtPostLocation1(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIDistrictCodeResultGrid, 'Post Location', rowIndex);
        expect(text).toContain(BaseData.getTestValue('PostLocation1'));
    }

    async verifyAtPostLocation2(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIDistrictCodeResultGrid, 'Post Location', rowIndex);
        expect(text).toContain(BaseData.getTestValue('PostLocation2'));
    }

    async verifyAddtionSuccessfulMessage(): Promise<void> {
        const text = await this.uIBottomStatusMessage.innerText();
        expect(text).toContain('1002 - Addition successful');
    }

    async verifUpdateSuccessfulMessage(): Promise<void> {
        const text = await this.uIBottomStatusMessage.innerText();
        expect(text).toContain('1003 - Update Successful');
    }

    async enterDistrict(): Promise<void> {
        await this.uIDistrictEdit.fill(RandomHelpers.randomString(5));
    }

    async enterCity(): Promise<void> {
        await this.uICityEdit.fill(RandomHelpers.randomString(5));
    }

    async enterMiles(): Promise<void> {
        await this.uIMilesEdit.fill(RandomHelpers.randomNumberString(3));
    }

    async enterPostLocation(): Promise<void> {
        await this.uIPostLocationEdit.fill('10 Antrues St');
        await this.uIPostLocationEdit.press('Tab');
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async saveAndClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        await this.popup.confirmYesButton.click();
    }
}

export class PaymentPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIRefreshButton: Locator;
    readonly uIPFCodeEdit: Locator;
    readonly uITerminalEdit: Locator;
    readonly uIInvoiceNoYearEdit: Locator;
    readonly uIInvoiceNoEdit: Locator;
    readonly uIInvoiceNoIconButton: Locator;
    readonly uIDateEdit: Locator;
    readonly uINameEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uIPaymentGridTable: Locator;
    readonly uIPrintReceiptButton: Locator;
    readonly uIDatedEdit: Locator;
    readonly uIPopupPaymentMethodCombobox: Locator;
    readonly uIPopupAmountEdit: Locator;
    readonly uIPopupCivilIDTextView: Locator;
    readonly uIPopupCommentsEdit: Locator;
    readonly uIPopupSaveButton: Locator;
    readonly uIPopupCancelButton: Locator;
    readonly uIPopupCreditCardNoEdit: Locator;
    readonly uIPopupCheckNoEdit: Locator;
    readonly uIPopupCheckNoTextView: Locator;
    readonly uIPopupCreditCardNoTextView: Locator;
    readonly uIJurisComboBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIPFCodeEdit = page.locator('#lupPFNbr_CodeValue');
        this.uITerminalEdit = page.locator('#txtTerminal');
        this.uIInvoiceNoYearEdit = page.locator('#nbrInvoiceNo_Year');
        this.uIInvoiceNoEdit = page.locator('#nbrInvoiceNo_Number');
        this.uIInvoiceNoIconButton = page.locator('#ImgInvoice');
        this.uIDateEdit = page.locator("//input[@ID='dtInvoice_KPIDttmCtrl']");
        this.uINameEdit = page.locator('#txtName');
        this.uIAddressEdit = page.locator('#txtcAddress');
        this.uIPaymentGridTable = page.locator('#grdCvlPayment');
        this.uIPrintReceiptButton = page.locator('#cmdPrtRec');
        this.uIDatedEdit = page.locator('#dttmInvoice_KPIDttmCtrl');
        this.uIPopupPaymentMethodCombobox = page.locator('#drpPayment_DropDown');
        this.uIPopupAmountEdit = page.locator('#curAmtTen');
        this.uIPopupCivilIDTextView = page.locator('#lblActualCivil0');
        this.uIPopupCommentsEdit = page.locator('#txtDescriptionOTH');
        this.uIPopupSaveButton = page.locator('#cmdUpdateSave');
        this.uIPopupCancelButton = page.locator('#cmdCancel');
        this.uIPopupCreditCardNoEdit = page.locator('#txtAccountNo');
        this.uIPopupCheckNoEdit = page.locator('#txtCheckNo');
        this.uIPopupCheckNoTextView = page.locator('#lblCheck');
        this.uIPopupCreditCardNoTextView = page.locator('#lblCreditAccNo');
        this.uIJurisComboBox = page.locator('#lstJuris');
    }

    async clickReset(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async enterAtInvoiceID(): Promise<void> {
        const inv = BaseData.getTestValue('InvoiceNo');
        await this.uIInvoiceNoYearEdit.fill(inv.substring(0, 2));
        await this.uIInvoiceNoEdit.fill(inv.substring(3));
        await this.uIInvoiceNoEdit.press('Tab');
    }

    async verifyAtName(): Promise<void> {
        const val = await this.uINameEdit.inputValue();
        expect(val).toBe(BaseData.getTestValue('Name'));
    }

    async verifyAtAddress(): Promise<void> {
        const val = await this.uIAddressEdit.inputValue();
        expect(val).toBe(BaseData.getTestValue('Address'));
    }

    async verifyAtCivilIDInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPaymentGridTable, 'CivilID', rowIndex);
        expect(text).toBe(BaseData.getTestValue('CivilID'));
    }

    async clickPaymentMethodIconInGrid(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCellByIndex(this.uIPaymentGridTable, rowIndex, 'Payment Method');
        await cell.click();
        await this.page.waitForTimeout(1000);
    }

    async clickPrintReceiptButton(): Promise<void> {
        await this.uIPrintReceiptButton.click();
    }

    async selectPopupPaymentMethodAsCash(): Promise<void> {
        await this.uIPopupPaymentMethodCombobox.selectOption({ label: '1 - Cash' });
        await this.uIPopupPaymentMethodCombobox.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async enterAtPopupAmount(): Promise<void> {
        await this.uIPopupAmountEdit.fill(BaseData.getTestValue('Amount'));
    }

    async enterPopupAmountAs9999(): Promise<void> {
        await this.uIPopupAmountEdit.fill('9999');
        await this.uIPopupAmountEdit.press('Tab');
    }

    async enterPopupComments(): Promise<void> {
        await this.uIPopupCommentsEdit.fill(RandomHelpers.randomString(150));
    }

    async saveButton(): Promise<void> {
        await this.uIPopupSaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async clickSaveButton(): Promise<void> {
        await this.uIPopupSaveButton.click();
    }

    async selectPopupPaymentMethodAsCheck(): Promise<void> {
        await this.uIPopupPaymentMethodCombobox.selectOption({ label: '2 - Check' });
        await this.uIPopupPaymentMethodCombobox.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async selectPopupPaymentMethodAsCreditcard(): Promise<void> {
        await this.uIPopupPaymentMethodCombobox.selectOption({ label: '3 - Credit Card' });
        await this.uIPopupPaymentMethodCombobox.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async verifyCheckNoDisplayed(): Promise<void> {
        await expect(this.uIPopupCheckNoEdit).toBeVisible();
        await expect(this.uIPopupCheckNoTextView).toBeVisible();
    }

    async verifyCreditcardNoDisplayed(): Promise<void> {
        await expect(this.uIPopupCreditCardNoEdit).toBeVisible();
        await expect(this.uIPopupCreditCardNoTextView).toBeVisible();
    }

    async verifyAtPopupCivilID(): Promise<void> {
        const text = await this.uIPopupCivilIDTextView.innerText();
        expect(text).toBe(BaseData.getTestValue('CivilID'));
    }

    async verifyPaymentExceedAcknowledgeMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(11508) Payment amount cannot exceed the Balance amount');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyBalanceAs0InGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPaymentGridTable, 'Balance', rowIndex);
        expect(text).toBe('0');
    }

    async clickInvoiceNoInfoIcon(): Promise<void> {
        await this.uIInvoiceNoIconButton.click();
    }

    async verifyAtPFfieldDisabled(): Promise<void> {
        const val = await this.uIPFCodeEdit.inputValue();
        expect(val).toBe(BaseData.getTestValue('PF'));
    }

    async enterAtInvoiceYearas2002(): Promise<void> {
        await this.uIInvoiceNoYearEdit.fill('02');
    }

    async selectAtJuris(i: number): Promise<void> {
        await this.uIJurisComboBox.selectOption({ label: BaseData.getTestValue('Juris' + i) });
    }

    async verifyAtInvoiceYearisNotDisplayed(): Promise<void> {
        const val = await this.uIInvoiceNoYearEdit.inputValue();
        expect(val.trim()).toBe('');
    }

    async enterAtInvoiceYear(): Promise<void> {
        await this.uIInvoiceNoYearEdit.fill(BaseData.getTestValue('InvoiceYear'));
    }

    async verifyCurrentDate(): Promise<void> {
        const date = await this.uIDateEdit.inputValue();
        expect(date).toBe(DateHelpers.getCurrentDate());
    }
}

export class CivilStatementPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uICivilIDEdit: Locator;
    readonly uICourtCaseNoEdit: Locator;
    readonly uIDocketNoEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIFeeBalanceOperatorCombobox: Locator;
    readonly uIFeeBalanceEdit: Locator;
    readonly uICivilStatementTableGrid: Locator;
    readonly uISearchButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIStatusTextView: Locator;
    readonly uISelectAllCheckbox: Locator;
    readonly uICreateStatementButton: Locator;
    readonly uICivilStatementEntryTableGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uICivilIDEdit = page.locator('#txtCivilRefID');
        this.uICourtCaseNoEdit = page.locator('#txtCourtNbr');
        this.uIDocketNoEdit = page.locator('#txtDocketNbr');
        this.uILastNameEdit = page.locator('#txtLastName');
        this.uIFirstNameEdit = page.locator('#txtFirstName');
        this.uIFeeBalanceOperatorCombobox = page.locator('#ddOperator');
        this.uIFeeBalanceEdit = page.locator('#curFeeBalance');
        this.uICivilStatementTableGrid = page.locator('#grdAccount');
        this.uISearchButton = page.locator('#cmdSearch');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIStatusTextView = page.locator('#lblStatus');
        this.uISelectAllCheckbox = page.locator('#chkSelectAll');
        this.uICreateStatementButton = page.locator('#btnPrintInv');
        this.uICivilStatementEntryTableGrid = page.locator('#grdAccount');
    }

    async verifyStatusAsCompleted(): Promise<void> {
        const text = await this.uIStatusTextView.innerText();
        expect(text).toContain('Status : Completed');
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async clickCreateStatementButton(): Promise<void> {
        await this.uICreateStatementButton.click();
    }

    async verifySelectAllCheckboxChecked(): Promise<void> {
        await expect(this.uISelectAllCheckbox).toBeChecked();
    }

    async verifyStatusAsNew(): Promise<void> {
        const text = await this.uIStatusTextView.innerText();
        expect(text).toContain('Status : New');
    }

    async verifyFlagIconInApproveColumn(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCellByIndex(this.uICivilStatementTableGrid, rowIndex, 'Approve');
        const classAttr = await cell.getAttribute('class') || '';
        expect(classAttr).toContain('Flag');
    }

    async clickFlagIconInGrid(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCellByIndex(this.uICivilStatementTableGrid, rowIndex, 'Approve');
        await cell.click();
    }

    async verifyApprovedConfirmMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(9510) Do you want to approve this statement?');
        await this.popup.confirmYesButton.click();
    }

    async verifyStatusAsApprovedInProcess(): Promise<void> {
        const text = await this.uIStatusTextView.innerText();
        expect(text).toContain('Status : Approved & In-Progess');
    }

    async verifySearchButtonDisabled(): Promise<void> {
        await expect(this.uISearchButton).toBeDisabled();
    }
}

export class PaperTypePage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIPaperCodeEdit: Locator;
    readonly uIPaperTypeEdit: Locator;
    readonly uIIncludeInactiveCheckBox: Locator;
    readonly uISearchButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIPaperTypeResultGrid: Locator;
    readonly uIJurisComboBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIPaperCodeEdit = page.locator('#txtPaperCode');
        this.uIPaperTypeEdit = page.locator('#txtPaperType');
        this.uIIncludeInactiveCheckBox = page.locator('#chkIsActive');
        this.uISearchButton = page.locator('#cmdSearch');
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIPaperTypeResultGrid = page.locator('#grdPaperType');
        this.uIJurisComboBox = page.locator('#lstJuris');
    }

    async selectJurisAsSC(): Promise<void> {
        await this.uIJurisComboBox.selectOption({ label: 'SC - Seneca County Police Dept' });
    }

    async selectJurisAsPX(): Promise<void> {
        await this.uIJurisComboBox.selectOption({ label: 'PX - ProPhoenix Police Department' });
    }

    async selectJurisAsBC(): Promise<void> {
        await this.uIJurisComboBox.selectOption({ label: 'BC - Brown County Police Department' });
    }

    async selectJurisAsBP(): Promise<void> {
        await this.uIJurisComboBox.selectOption({ label: 'BP - Bloomville Police Dept' });
    }

    async selectPaperTypeInGrid(): Promise<void> {
        await this.grid.selectRandomRow(this.uIPaperTypeResultGrid);
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
        await this.page.waitForTimeout(1000);
    }

    async enterPaperCode(): Promise<void> {
        await this.uIPaperCodeEdit.fill('25');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async enterAtPaperCode(): Promise<void> {
        await this.uIPaperCodeEdit.fill(BaseData.getTestValue('PaperCode'));
    }

    async enterAtPaperType(): Promise<void> {
        await this.uIPaperTypeEdit.fill(BaseData.getTestValue('PaperType'));
    }

    async verifyAtPaperCode(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPaperTypeResultGrid, 'Paper Code', rowIndex);
        expect(text).toBe(BaseData.getTestValue('PaperCode'));
    }

    async verifyAtPaperType(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPaperTypeResultGrid, 'Paper Type', rowIndex);
        expect(text).toBe(BaseData.getTestValue('PaperType'));
    }

    async verifyAtPaperFee(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPaperTypeResultGrid, 'Paper Fee', rowIndex);
        expect(text).toContain(BaseData.getTestValue('PaperFee'));
    }

    async verifyAtServiceFee(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPaperTypeResultGrid, 'Service Fee', rowIndex);
        expect(text).toContain(BaseData.getTestValue('ServiceFee'));
    }

    async verifyExecutionCheckBoxCheckedInGrid(rowCount?: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIPaperTypeResultGrid, BaseData.getTestValue('PaperCode'), 'Execution');
        const img = cell.locator('img');
        const alt = await img.getAttribute('alt') || '';
        expect(alt).toContain('Checked');
    }

    async clickAtPaperCodeInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIPaperTypeResultGrid, BaseData.getTestValue('PaperCode'));
        await this.page.waitForTimeout(1000);
    }

    async verifyNoRecordAcknowledgeMessge(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('1011 - No Record Found');
        await this.popup.acknowledgeOkButton.click();
    }

    async clickInactiveCheckbox(): Promise<void> {
        await this.uIIncludeInactiveCheckBox.click();
    }

    async verifyInactiveRowColor(rowIndex: number): Promise<void> {
        const row = this.uIPaperTypeResultGrid.locator('tbody tr').nth(rowIndex);
        const classAttr = await row.getAttribute('class') || '';
        expect(classAttr).toContain('gridrowclr');
    }

    async verifyAtPaperCodeInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIPaperTypeResultGrid, BaseData.getTestValue('PaperCode'), '');
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getTestValue('PaperCode'));
    }

    async verifyPaperTypeSortOrderInGrid(): Promise<void> {
        const values = await this.grid.getGridTableColumnValues(this.uIPaperTypeResultGrid, 'Paper Type');
        const sorted = [...values].sort();
        expect(values).toEqual(sorted);
    }
}

export class PaperTypesEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uICodeEdit: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uIDaysToServeEdit: Locator;
    readonly uISortOrderEdit: Locator;
    readonly uIPropertyCheckBox: Locator;
    readonly uIExectionCheckBox: Locator;
    readonly uISeizedPropertyCheckBox: Locator;
    readonly uITROCheckBox: Locator;
    readonly uIOtherCheckBox: Locator;
    readonly uIPaperInactiveCheckBox: Locator;
    readonly uIPaperInactiveTextEdit: Locator;
    readonly uIFeeTypeComboBox: Locator;
    readonly uIPaperFeeEdit: Locator;
    readonly uIApplyCheckBox: Locator;
    readonly uIFeeInactiveCheckBox: Locator;
    readonly uIInactiveDateEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIPaperTypesResultGrid: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIBottomStatusMessage: Locator;
    readonly uIUpdateButton: Locator;
    readonly uIFeeTypeColumnGridHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uICodeEdit = page.locator('#txtPaperCode');
        this.uIDescriptionEdit = page.locator('#txtPaperType');
        this.uIDaysToServeEdit = page.locator('#txtDaysToServe');
        this.uISortOrderEdit = page.locator('#txtSortOrder');
        this.uIPropertyCheckBox = page.locator('#chkIsProperty');
        this.uIExectionCheckBox = page.locator('#chkIsExecution');
        this.uISeizedPropertyCheckBox = page.locator('#chkIsSeizedPro');
        this.uITROCheckBox = page.locator('#chkIsTRO');
        this.uIOtherCheckBox = page.locator('#chkIsOther');
        this.uIPaperInactiveCheckBox = page.locator('#chkPaperInact');
        this.uIPaperInactiveTextEdit = page.locator('#txtInPaperInActiveDTTM');
        this.uIFeeTypeComboBox = page.locator('#cddFeeType_DropDown');
        this.uIPaperFeeEdit = page.locator('#curFee');
        this.uIApplyCheckBox = page.locator('#chkApply');
        this.uIFeeInactiveCheckBox = page.locator('#chkIsActive');
        this.uIInactiveDateEdit = page.locator('#txtInactiveDttm');
        this.uIAddButton = page.locator('#btnAdd');
        this.uIClearButton = page.locator('#btnClear');
        this.uIPaperTypesResultGrid = page.locator('#grdPaperType');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIBottomStatusMessage = page.locator("//td[@class='statusBar']//b");
        this.uIUpdateButton = page.locator('#btnAdd');
        this.uIFeeTypeColumnGridHeader = page.locator('#grdPaperType_columnheader_4');
    }

    async enterAtCode(suffix?: string | number): Promise<void> {
        const key = suffix !== undefined ? `Code${suffix}` : 'Code';
        await this.uICodeEdit.fill(BaseData.getTestValue(key));
        await this.uICodeEdit.press('Tab');
    }

    async enterAtDescription(): Promise<void> {
        await this.uIDescriptionEdit.fill(BaseData.getTestValue('Description'));
    }

    async enterDaysToServeAs10(): Promise<void> {
        await this.uIDaysToServeEdit.fill('10');
    }

    async clickExecutionCheckBox(): Promise<void> {
        await this.uIExectionCheckBox.click();
        await this.page.waitForTimeout(1000);
    }

    async selectAtFeeType(i?: number): Promise<void> {
        const key = i !== undefined ? `FeeType${i}` : 'FeeType';
        await this.uIFeeTypeComboBox.selectOption({ label: BaseData.getTestValue(key) });
        await this.uIFeeTypeComboBox.press('Tab');
    }

    async selectAtFeeType1(): Promise<void> {
        await this.uIFeeTypeComboBox.selectOption({ label: BaseData.getTestValue('FeeType1') });
        await this.uIFeeTypeComboBox.press('Tab');
    }

    async enterAtPaperFee(): Promise<void> {
        await this.uIPaperFeeEdit.fill(BaseData.getTestValue('PaperFee'));
        await this.uIPaperFeeEdit.press('Tab');
    }

    async enterAtPaperFee1(): Promise<void> {
        await this.uIPaperFeeEdit.clear();
        await this.uIPaperFeeEdit.fill(BaseData.getTestValue('PaperFee1'));
        await this.uIPaperFeeEdit.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtFeeTypeInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPaperTypesResultGrid, 'Fee Type', rowIndex);
        expect(text).toBe(BaseData.getTestValue('FeeType'));
    }

    async verifyAtFeeInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPaperTypesResultGrid, 'Fee', rowIndex);
        expect(text).toBe(BaseData.getTestValue('Fee'));
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async verifyAtFeeType1InGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPaperTypesResultGrid, 'Fee Type', rowIndex);
        expect(text).toBe(BaseData.getTestValue('FeeType1'));
    }

    async verifyAtFee1InGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPaperTypesResultGrid, 'Fee', rowIndex);
        expect(text).toBe(BaseData.getTestValue('Fee1'));
    }

    async verifyFeeRequiredAcknowledgeMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(6040) Service Fee is required');
        await this.popup.acknowledgeOkButton.click();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async verifyPropertyCheckBoxDisabled(): Promise<void> {
        await expect(this.uIPropertyCheckBox).toBeDisabled();
    }

    async verifyExecutionCheckboxDisabled(): Promise<void> {
        await expect(this.uIExectionCheckBox).toBeDisabled();
    }

    async verifyTROCheckBoxDisabled(): Promise<void> {
        await expect(this.uITROCheckBox).toBeDisabled();
    }

    async verifyOtherCheckBoxDisabled(): Promise<void> {
        await expect(this.uIOtherCheckBox).toBeDisabled();
    }

    async verifySeziedPropertyCheckBoxEnabled(): Promise<void> {
        await expect(this.uISeizedPropertyCheckBox).toBeEnabled();
    }

    async verifyTROCheckBoxEnabled(): Promise<void> {
        await expect(this.uITROCheckBox).toBeEnabled();
    }

    async verifyOtherCheckBoxEnabled(): Promise<void> {
        await expect(this.uIOtherCheckBox).toBeEnabled();
    }

    async clickTROCheckBox(): Promise<void> {
        await this.uITROCheckBox.click();
        await this.page.waitForTimeout(1000);
    }

    async clickOtherCheckBox(): Promise<void> {
        await this.uIOtherCheckBox.click();
        await this.page.waitForTimeout(1000);
    }

    async clickPaperInactiveCheckBox(): Promise<void> {
        await this.uIPaperInactiveCheckBox.click();
    }

    async verifyPaperTypeCodeExistsAcknowledgePopup(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(20038) Paper Type Code already exists');
        await this.popup.acknowledgeOkButton.click();
    }

    async enterAtCode1(): Promise<void> {
        await this.uICodeEdit.fill(BaseData.getTestValue('Code1'));
        await this.uICodeEdit.press('Tab');
    }

    async enterAtCode2(): Promise<void> {
        await this.uICodeEdit.fill(BaseData.getTestValue('Code2'));
        await this.uICodeEdit.press('Tab');
    }

    async verifyFeeAmountIsMandatoryAcknowledgePopup(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(20040) FeeAmount is Mandatory');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyPaperFeeIsRequiredAcknowledgePopup(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(6040) Paper Fee is required');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyAdditionSuccessFullMessage(): Promise<void> {
        const text = await this.uIBottomStatusMessage.innerText();
        expect(text).toContain('1002 - Addition Successful');
    }

    async verifyUpdateSuccessfullMessage(): Promise<void> {
        const text = await this.uIBottomStatusMessage.innerText();
        expect(text).toContain('1003 - Update Successful');
    }

    async enterCode(): Promise<void> {
        await this.uICodeEdit.fill(RandomHelpers.randomNumberString(3));
        await this.uICodeEdit.press('Tab');
    }

    async enterDescription(): Promise<void> {
        await this.uIDescriptionEdit.fill(RandomHelpers.randomNumberString(10));
    }

    async selectFeeType(): Promise<void> {
        await this.uIFeeTypeComboBox.selectOption({ index: 1 });
        await this.uIFeeTypeComboBox.press('Tab');
    }

    async enterPaperFee(): Promise<void> {
        await this.uIPaperFeeEdit.fill(RandomHelpers.randomNumberString(3));
        await this.uIPaperFeeEdit.press('Tab');
    }

    async selectServiceFeeType(): Promise<void> {
        await this.uIFeeTypeComboBox.selectOption({ label: 'Service Fee' });
        await this.uIFeeTypeComboBox.press('Tab');
    }

    async selectPaperFeeType(): Promise<void> {
        await this.uIFeeTypeComboBox.selectOption({ label: 'Paper Fee' });
        await this.uIFeeTypeComboBox.press('Tab');
    }

    async selectAtFeeTypeInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIPaperTypesResultGrid, BaseData.getTestValue('FeeType'));
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }

    async clickHeaderInGrid(header: string): Promise<void> {
        await this.uIPaperTypesResultGrid.locator(`th:has-text("${header}")`).first().click();
    }

    async verifyAddButtonIsDisplayed(): Promise<void> {
        await expect(this.uIAddButton).toBeVisible();
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintButton.click();
    }

    async verifyAtCode(): Promise<void> {
        const val = await this.uICodeEdit.inputValue();
        expect(val).toBe(BaseData.getTestValue('Code'));
    }

    async verifyAtDescription(): Promise<void> {
        const val = await this.uIDescriptionEdit.inputValue();
        expect(val).toBe(BaseData.getTestValue('Description'));
    }
}

export class CivilContactPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uINameTypeEdit: Locator;
    readonly uINameIDEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uICivilStatementTableGrid: Locator;
    readonly uINameQuickEntryIcon: Locator;
    readonly uIAssociateIBubbleIcon: Locator;
    readonly uIBottomStatusMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uINameTypeEdit = page.locator('#nmcName_NameType');
        this.uINameIDEdit = page.locator('#nmcName_NameTypeID');
        this.uILastNameEdit = page.locator('#nmcName_LastName');
        this.uIFirstNameEdit = page.locator('#nmcName_FirstName');
        this.uIAddressEdit = page.locator('#txtAddress');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIClearButton = page.locator('#cmdClear');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uICivilStatementTableGrid = page.locator('#grdCvlContact');
        this.uINameQuickEntryIcon = page.locator('#nmcName_imgAdd');
        this.uIAssociateIBubbleIcon = page.locator('#nmcName_imgSrch');
        this.uIBottomStatusMessage = page.locator("//td[@class='statusBar']//b");
    }

    async enterAtLastName(): Promise<void> {
        await this.uILastNameEdit.fill(BaseData.getTestValue('LastName'));
    }

    async enterAtFirstName(): Promise<void> {
        await this.uIFirstNameEdit.fill(BaseData.getTestValue('FirstName'));
        await this.uIFirstNameEdit.press('Tab');
    }

    async clickNameQuickIcon(): Promise<void> {
        await this.uINameQuickEntryIcon.click();
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verifyAtAssociates(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uICivilStatementTableGrid, 'Associates', rowIndex);
        expect(text).toBe(BaseData.getTestValue('Associates'));
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async saveAndClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        await this.popup.confirmYesButton.click();
    }

    async enterAtNameID(): Promise<void> {
        const nameID = BaseData.getTestValue('NameID');
        await this.uINameTypeEdit.fill(nameID.substring(0, 1));
        await this.uINameIDEdit.fill(nameID.substring(2));
        await this.uINameIDEdit.press('Tab');
    }

    async verifyAssociateIBubbleIsDisplayed(): Promise<void> {
        await expect(this.uIAssociateIBubbleIcon).toBeVisible();
    }

    async verifyAtPhoneInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uICivilStatementTableGrid, 'Phone', 0);
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getTestValue('Phone'));
    }

    async selectAtPhoneInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICivilStatementTableGrid, BaseData.getTestValue('Phone'));
    }

    async enterAtNameType(): Promise<void> {
        await this.uINameTypeEdit.fill(BaseData.getTestValue('NameID').substring(0, 1));
        await this.uINameTypeEdit.press('Tab');
    }

    async selectAtName(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICivilStatementTableGrid, BaseData.getTestValue('ContactName'));
    }

    async verifyAtContactNameInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uICivilStatementTableGrid, BaseData.getTestValue('Phone'), 'Associates');
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getTestValue('ContactName'));
    }

    async verifyAdditionSuccessfulStatusMessage(): Promise<void> {
        const text = await this.uIBottomStatusMessage.innerText();
        expect(text).toContain('1002 - Addition Successful');
    }

    async verifyUpdateSuccessfulStatusMessage(): Promise<void> {
        const text = await this.uIBottomStatusMessage.innerText();
        expect(text).toContain('1003 - Update Successful');
    }
}

export class PropertyInventoryScreenPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIPropertyCombobox: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uINamesCombobox: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPropertyInventoryGrid: Locator;
    readonly uITotalItemSeziedEdit: Locator;
    readonly uIGunTypeCombobox: Locator;
    readonly uISerialNoEdit: Locator;
    readonly uIBottomStatusMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIPropertyCombobox = page.locator('#cddProp_DropDown');
        this.uIDescriptionEdit = page.locator('#txtDescription');
        this.uINamesCombobox = page.locator('#drpDefendant');
        this.uIAddButton = page.locator('#btnAdd');
        this.uIClearButton = page.locator('#btnClear');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPropertyInventoryGrid = page.locator('#grdPropInventory');
        this.uITotalItemSeziedEdit = page.locator('#txtItemsSeized');
        this.uIGunTypeCombobox = page.locator('#cddGunType_DropDown');
        this.uISerialNoEdit = page.locator('#txtSerial1');
        this.uIBottomStatusMessage = page.locator("//td[@class='statusBar']//b");
    }

    async selectAtProperty(): Promise<void> {
        await this.uIPropertyCombobox.selectOption({ label: BaseData.getTestValue('Property') });
        await this.uIPropertyCombobox.press('Tab');
    }

    async enterAtDescription(): Promise<void> {
        await this.uIDescriptionEdit.fill(BaseData.getTestValue('Description'));
    }

    async selectAtNames(): Promise<void> {
        await this.uINamesCombobox.selectOption({ label: BaseData.getTestValue('Names') });
        await this.uINamesCombobox.press('Tab');
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
        await this.page.waitForTimeout(1000);
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async verifyAtNameInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPropertyInventoryGrid, 'Defendant', rowIndex);
        expect(text).toBe(BaseData.getTestValue('Names'));
    }

    async verifyAtDescriptionInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPropertyInventoryGrid, 'Description', rowIndex);
        expect(text).toBe(BaseData.getTestValue('Description'));
    }

    async verifyTotalItemSeizedCountAs1(): Promise<void> {
        const val = await this.uITotalItemSeziedEdit.inputValue();
        expect(val).toBe('1');
    }

    async selectGunType(): Promise<void> {
        await this.uIGunTypeCombobox.selectOption({ index: 1 });
        await this.uIGunTypeCombobox.press('Tab');
    }

    async Clicksave(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async VerifyUpdateSuccessFullMessage(): Promise<void> {
        const text = await this.uIBottomStatusMessage.innerText();
        expect(text).toContain('1003 - Update Successful');
    }
}

export class CivilPropertyPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIPropertyLocationEdit: Locator;
    readonly uIDistrictLookupButton: Locator;
    readonly uIBuyerNameTypeEdit: Locator;
    readonly uIBuyerNameTypeIDEdit: Locator;
    readonly uIDateOfSaleEdit: Locator;
    readonly uITimeOfSaleEdit: Locator;
    readonly uIAdjournedDateEdit: Locator;
    readonly uIAdjournedTimeEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIDistrictCodeEdit: Locator;
    readonly uILocationResultGrid: Locator;
    readonly uIBottomStatusMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIPropertyLocationEdit = page.locator('#adrLocation_txtFrom');
        this.uIDistrictLookupButton = page.locator('#cddDistrict_imgBtn');
        this.uIBuyerNameTypeEdit = page.locator('#nmBuyer_NameType');
        this.uIBuyerNameTypeIDEdit = page.locator('#nmBuyer_NameTypeID');
        this.uIDateOfSaleEdit = page.locator('#dtnDateTime_Date_KPIDttmCtrl');
        this.uITimeOfSaleEdit = page.locator("//table[@id = 'dtnDateTime_Time']//input");
        this.uIAdjournedDateEdit = page.locator('#dttmAdj_Date_KPIDttmCtrl');
        this.uIAdjournedTimeEdit = page.locator("//table[@id = 'dttmAdj_Time']//input");
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIDistrictCodeEdit = page.locator('#cddDistrict_CodeValue');
        this.uILocationResultGrid = page.locator('#grdPostedAt');
        this.uIBottomStatusMessage = page.locator("//td[@class='statusBar']//b");
    }

    async enterAtPropertyLocation1(): Promise<void> {
        await this.uIPropertyLocationEdit.fill(BaseData.getTestValue('PropertyLocation1'));
        await this.uIPropertyLocationEdit.press('Tab');
    }

    async selectDistrict(): Promise<void> {
        await this.uIDistrictLookupButton.click();
        // await this.popup.kPICodedLookup.randomKPIHelpSelect();
    }

    async enterDateAndTimeOfSaleAsCurrentDate(): Promise<void> {
        await this.uIDateOfSaleEdit.click();
        await this.uIDateOfSaleEdit.fill(DateHelpers.getCurrentDate());
        await this.uITimeOfSaleEdit.fill(DateHelpers.getCurrentTime());
    }

    async enterAdjournedDateAndTimeAs5DaysFuture(): Promise<void> {
        await this.uIAdjournedDateEdit.click();
        await this.uIAdjournedDateEdit.fill(DateHelpers.getFutureDate(5));
        await this.uIAdjournedTimeEdit.fill(DateHelpers.getCurrentTime());
    }

    async enterAtBuyerID(): Promise<void> {
        const buyerID = BaseData.getTestValue('BuyerID');
        await this.uIBuyerNameTypeEdit.fill(buyerID.substring(0, 1));
        await this.uIBuyerNameTypeIDEdit.fill(buyerID.substring(2));
        await this.uIBuyerNameTypeIDEdit.press('Tab');
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async enterAtDistrict(): Promise<void> {
        await this.uIDistrictCodeEdit.fill(BaseData.getTestValue('District'));
        await this.uIDistrictCodeEdit.press('Tab');
    }

    async verifyAtLocationInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uILocationResultGrid, 'Location', rowIndex);
        expect(text).toBe(BaseData.getTestValue('Location'));
    }

    async verifyadditionSuccessFullMessage(): Promise<void> {
        const text = await this.uIBottomStatusMessage.innerText();
        expect(text).toContain('1002 - Addition Successful');
    }
}

export class CivilDetailsPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uICivilDetailsResultGrid: Locator;
    readonly uIFullNameEdit: Locator;
    readonly uILocationEdit: Locator;
    readonly uICivilCountEdit: Locator;
    readonly uIToolTipGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);

        this.uICivilDetailsResultGrid = page.locator('#grdCivilDtls');
        this.uIFullNameEdit = page.locator('#txtFullName');
        this.uILocationEdit = page.locator('#txtLocation');
        this.uICivilCountEdit = page.locator('#txtCivilCount');
        this.uIToolTipGrid = page.locator("//table[@id = 'History']//span[@id='SP1']");
    }

    async verifyAtFullName(): Promise<void> {
        const val = await this.uIFullNameEdit.inputValue();
        expect(val).toBe(BaseData.getTestValue('FullName'));
    }

    async verifyAtLocation(): Promise<void> {
        const val = await this.uILocationEdit.inputValue();
        expect(val).toBe(BaseData.getTestValue('Location'));
    }

    async verifyAtCivilCount(): Promise<void> {
        const val = await this.uICivilCountEdit.inputValue();
        expect(val).toBe(BaseData.getTestValue('CivilCount'));
    }

    async verifyAtPaperTypeUsingCivilNo(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uICivilDetailsResultGrid, BaseData.getTestValue('CivilNo'), 'Paper Type');
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getTestValue('PaperType'));
    }

    async verifyAtNameTypeUsingCivilNo(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uICivilDetailsResultGrid, BaseData.getTestValue('CivilNo'), 'NameType');
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getTestValue('NameType'));
    }

    async clickAtCivilNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICivilDetailsResultGrid, BaseData.getTestValue('CivilNo'));
        await this.page.waitForTimeout(1000);
    }

    async MouseHoverAtNameTypeAndVerify(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uICivilDetailsResultGrid, BaseData.getTestValue('NameType'), "");
        await cell.hover();
        await this.page.waitForTimeout(1000);
    }

    async MouseHoverAtPaperTypeAndVerify(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uICivilDetailsResultGrid, BaseData.getTestValue('PaperType'), "");
        await cell.hover();
        await this.page.waitForTimeout(1000);
    }
}

export class AssignmentPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uIAssignmentResultGrid: Locator;
    readonly uIPaperTypeCodeEdit: Locator;
    readonly uIServiceAreaCodeEdit: Locator;
    readonly uIDistrictCodeEdit: Locator;
    readonly uIIncludeAssignedCheckbox: Locator;
    readonly uISearchButton: Locator;
    readonly uIDistrictCodeLookup: Locator;
    readonly uIManServiceAreaCodeEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);

        this.uIAssignmentResultGrid = page.locator('#grdAssignment');
        this.uIPaperTypeCodeEdit = page.locator('#cddPaperType_CodeValue');
        this.uIServiceAreaCodeEdit = page.locator('#lupDistrict_CodeValue');
        this.uIDistrictCodeEdit = page.locator('#lupCvlDistrict_CodeValue');
        this.uIIncludeAssignedCheckbox = page.locator('#chkIsAssigned');
        this.uISearchButton = page.locator('#cmdSearch');
        this.uIDistrictCodeLookup = page.locator('#cddDistr_imgBtn');
        this.uIManServiceAreaCodeEdit = page.locator('#lupDistrict1_CodeValue');
    }

    async clickIncludeAssignedCheckbox(): Promise<void> {
        await this.uIIncludeAssignedCheckbox.click();
        await this.page.waitForTimeout(1000);
    }

    async enterAtDistrict(): Promise<void> {
        await this.uIDistrictCodeEdit.fill(BaseData.getTestValue('District'));
        await this.uIDistrictCodeEdit.press('Tab');
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtServiceAreaValues(): Promise<void> {
        const cellValues = await this.grid.getGridTableColumnValues(this.uIAssignmentResultGrid, 'Service Area');
        expect(cellValues).toContain(BaseData.getTestValue('ServiceArea'));
    }

    async enterAtServiceArea(): Promise<void> {
        await this.uIManServiceAreaCodeEdit.fill(BaseData.getTestValue('ServiceAreaCode1'));
    }

    async clickDistrictCodeIDLookup(): Promise<void> {
        await this.uIDistrictCodeLookup.click();
    }

    async verifyAddedCodevalueIsEqual(dist: string[], readCodeValue: string[]): Promise<void> {
        expect(dist).toEqual(readCodeValue);
    }
}

export class ServiceActionPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uICodeEdit: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uIIncludeInactiveCheckBox: Locator;
    readonly uISearchButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIServiceActionResultTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);

        this.uICodeEdit = page.locator('#txtSerCode');
        this.uIDescriptionEdit = page.locator('#txtSerDescription');
        this.uIIncludeInactiveCheckBox = page.locator('#chkIsActive');
        this.uISearchButton = page.locator('#cmdSearch');
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIServiceActionResultTable = page.locator('#grdServiceAction');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async selectAtDescriptionInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIServiceActionResultTable, BaseData.getTestValue('Description'));
    }

    async clickSearchbutton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async enterAtCode(): Promise<void> {
        await this.uICodeEdit.fill(BaseData.getTestValue('Code'));
    }

    async enterAtDescription(): Promise<void> {
        await this.uIDescriptionEdit.fill(BaseData.getTestValue('Description'));
    }

    async verifyCodeInGridByAtDescription(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIServiceActionResultTable, BaseData.getTestValue('Description'), 'Code');
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getTestValue('Code'));
    }
}

export class ServiceActionEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;

    readonly uICodeEdit: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uISortOrderEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIBottomStatusMessage: Locator;
    readonly uIInActiveCkeckBox: Locator;
    readonly uIInActiveDateEdit: Locator;
    readonly uIReasonCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);

        this.uICodeEdit = page.locator('#txtCode');
        this.uIDescriptionEdit = page.locator('#txtDescription');
        this.uISortOrderEdit = page.locator('#txtSortOrder');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIBottomStatusMessage = page.locator("//td[@class='statusBar']//b");
        this.uIInActiveCkeckBox = page.locator('#chkIsActive');
        this.uIInActiveDateEdit = page.locator('#txtInactiveDttm');
        this.uIReasonCheckbox = page.locator('#chkIsReason');
    }

    async enterAtCode(): Promise<void> {
        await this.uICodeEdit.click();
        await this.uICodeEdit.fill(BaseData.getTestValue('Code'));
        await this.uICodeEdit.press('Tab');
    }

    async enterAtCode1(): Promise<void> {
        await this.uICodeEdit.click();
        await this.uICodeEdit.fill(BaseData.getTestValue('Code1'));
        await this.uICodeEdit.press('Tab');
    }

    async enterAtDescription(): Promise<void> {
        await this.uIDescriptionEdit.fill(BaseData.getTestValue('Description'));
        await this.uIDescriptionEdit.press('Tab');
    }

    async enterAtSortOrder(): Promise<void> {
        await this.uISortOrderEdit.fill(BaseData.getTestValue('SortOrder'));
        await this.uISortOrderEdit.press('Tab');
    }

    async verifyServiceActionCodeAlreadyExistsAcknowledgePopup(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(20037) Service Action Code already exists');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyCodeIsMandatoryAcknowledgePopup(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(20040) Code is Mandatory');
        await this.popup.acknowledgeOkButton.click();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async enterCode(): Promise<void> {
        await this.uICodeEdit.click();
        await this.uICodeEdit.fill(RandomHelpers.getRandomBetween(21, 30).toString());
        await this.uICodeEdit.press('Tab');
    }

    async enterDescription(): Promise<void> {
        await this.uIDescriptionEdit.fill(RandomHelpers.randomAlphanumeric(10));
        await this.uIDescriptionEdit.press('Tab');
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async verifyAdditionSuccessfulStatusMessage(): Promise<void> {
        const text = await this.uIBottomStatusMessage.innerText();
        expect(text).toContain('1002 - Addition Successful');
    }

    async verifyAtCode(): Promise<void> {
        const val = await this.uICodeEdit.inputValue();
        expect(val).toBe(BaseData.getTestValue('Code'));
    }

    async verifyAtDescription(): Promise<void> {
        const val = await this.uIDescriptionEdit.inputValue();
        expect(val).toBe(BaseData.getTestValue('Description'));
    }

    async verifyUpdateSuccessfulStatusMessage(): Promise<void> {
        const text = await this.uIBottomStatusMessage.innerText();
        expect(text).toContain('1003 - Update Successful');
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verifyConfirmationPopupAppearsAndAccept(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(3) Do You Want To Save All Of The Entered Details?');
        await this.popup.confirmYesButton.click();
    }

    async saveAndClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await this.popup.confirmYesButton.click();
    }

    async clickInactiveCheckBox(): Promise<void> {
        await this.uIInActiveCkeckBox.click();
    }

    async verifyInActiveDateAsCurrentDate(): Promise<void> {
        const val = await this.uIInActiveDateEdit.inputValue();
        expect(val).toContain(DateHelpers.getCurrentDate());
    }

    async verifyInActiveDateIsEmpty(): Promise<void> {
        const val = await this.uIInActiveDateEdit.inputValue();
        expect(val.trim()).toBe('');
    }

    async clickCodeFieldAndTabout(): Promise<void> {
        await this.uICodeEdit.click();
        await this.uICodeEdit.press('Tab');
    }

    async verifyServiceActionCodeAlreadyExistsAcknowledgePopupNotAppears(): Promise<void> {
        const modalVisible = await this.popup.modalBody.isVisible().catch(() => false);
        expect(modalVisible).toBe(false);
    }

    async clickReasonCheckBox(): Promise<void> {
        await this.uIReasonCheckbox.click();
    }
}

export class ServiceAreaPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uISaveButton: Locator;
    readonly uIServiceAreaCombobox: Locator;
    readonly uIDistrictEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIDistrictLookUp: Locator;
    readonly uIServiceAreaTableGrid: Locator;
    readonly uIUpdateButton: Locator;
    readonly uIStatusBar: Locator;
    readonly uIPrintButton: Locator;
    readonly uISaveAndClose: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIDistrictColumnHeader: Locator;
    readonly uIServiceAreaGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uISaveButton = page.locator('#cmdSave');
        this.uIServiceAreaCombobox = page.locator('#cddServiceArea_DropDown');
        this.uIDistrictEdit = page.locator('#lupDistrict_CodeValue');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIDistrictLookUp = page.locator('#lupDistrict_imgBtn');
        this.uIServiceAreaTableGrid = page.locator('#Table4');
        this.uIUpdateButton = page.locator('#cmdAdd');
        this.uIStatusBar = page.locator("//td[@class='statusBar']/b");
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uISaveAndClose = page.locator('#cmdSaveNClose');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIDistrictColumnHeader = page.locator('#grdServiceArea_columnheader_6');
        this.uIServiceAreaGrid = page.locator('#grdServiceArea');
    }

    async selectServiceArea(): Promise<void> {
        await this.uIServiceAreaCombobox.selectOption({ index: 1 });
        await this.page.waitForTimeout(1000);
    }

    async enterDistrictAsMJ(): Promise<void> {
        await this.uIDistrictEdit.click();
        await this.uIDistrictEdit.fill('MJ');
        await this.uIDistrictEdit.press('Tab');
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async verifyUpdateSuccessfulacknowledge(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('1003 - Update successful');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyAdditionSuccessfulAcknowledge(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('1002 - Addition Successful');
        await this.popup.acknowledgeOkButton.click();
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async selectServiceAreaAsAdd(): Promise<void> {
        await this.uIServiceAreaCombobox.selectOption({ label: '  --Add 2803 --  ' });
    }

    async selectAtServiceArea(no: number): Promise<void> {
        await this.uIServiceAreaCombobox.selectOption({ index: no });
        await this.uIServiceAreaCombobox.press('Tab');
    }

    async enterAtDistrict(no: number): Promise<void> {
        await this.uIDistrictEdit.clear();
        await this.uIDistrictEdit.fill(BaseData.getTestValue('District' + no));
        await this.uIDistrictEdit.press('Tab');
    }

    async enterDistrict(c: number, count: number): Promise<void> {
        for (let i = c; i <= count; i++) {
            await this.uIDistrictLookUp.click();
            const codedTable = this.page.locator('#grdSrch');
            await this.grid.selectRowByIndex(codedTable, i);
            await this.uIAddButton.click();
            await this.page.waitForTimeout(600);
        }
    }

    async readServiceAreaDistrictsIngrid(): Promise<string[]> {
        return await this.grid.getGridTableColumnValues(this.uIServiceAreaTableGrid, 'District');
    }

    async verifyAtDistrictInGrid(i: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIServiceAreaTableGrid, BaseData.getTestValue('City' + i), 'District');
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getTestValue('District' + i));
    }

    async selectAtDistrictInGrid(i: number): Promise<void> {
        await this.grid.selectRowByCellText(this.uIServiceAreaTableGrid, BaseData.getTestValue('District' + i));
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }

    async verifyUpdateSuccessfulBottomMessage(): Promise<void> {
        const text = await this.uIStatusBar.innerText();
        expect(text).toBe('1003 - Update Successful');
    }

    async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
        const text = await this.uIStatusBar.innerText();
        expect(text.toLowerCase()).toBe('1002 - addition successful');
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async deleteAtDistrictInGrid(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uIServiceAreaTableGrid, BaseData.getTestValue('District'));
        await this.popup.confirmYesButton.click();
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintButton.click();
    }

    async selectAtServiceArea1(jsonKeyIndex: number): Promise<void> {
        await this.uIServiceAreaCombobox.selectOption({ label: BaseData.getTestValue('ServiceArea' + jsonKeyIndex) });
        await this.uIServiceAreaCombobox.press('Tab');
    }

    async saveAndClose(): Promise<void> {
        await this.uISaveAndClose.click();
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(3)Do You Want To Save All Of The Entered Details?');
        await this.popup.confirmYesButton.click();
    }

    async verifyServiceAreaWindowExist(): Promise<void> {
        const pages = this.page.context().pages();
        const isPresent = pages.some(p => p.url().includes('Service Area'));
        expect(isPresent).toBe(false);
    }

    async clickReFreshIcon(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async verifyRecordMarkedForDeletionAcknowldgeMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(6)Record marked for deletion');
        await this.popup.acknowledgeOkButton.click();
    }

    async clickHeaderInGrid(header: string): Promise<void> {
        await this.uIServiceAreaGrid.locator(`th:has-text("${header}")`).first().click();
    }

    async verifyAddButtonIsDisplayed(): Promise<void> {
        await expect(this.uIAddButton).toBeVisible();
    }

    async verifyDeletionSuccessfulStatusMessage(): Promise<void> {
        const text = await this.uIStatusBar.innerText();
        expect(text).toBe('1004 - Deletion Successful');
    }

    async verifyRequiredEntriesMissingAckMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(1018) Required Entries are Missing');
        await this.popup.acknowledgeOkButton.click();
    }
}

export class CCAPMapPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uICCAPCaseDropDown: Locator;
    readonly uICCAPClassEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIPrintIcon: Locator;
    readonly uICCAPMapTable: Locator;
    readonly uISaveButton: Locator;
    readonly uIResetIcon: Locator;
    readonly uIJurisDropDown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uICCAPCaseDropDown = page.locator('#drpCCAPCase_DropDown');
        this.uICCAPClassEdit = page.locator('#lupCCAP_CodeValue');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIPrintIcon = page.locator('#cmdPrint');
        this.uICCAPMapTable = page.locator('#grdServiceArea');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIResetIcon = page.locator('#cmdRefresh');
        this.uIJurisDropDown = page.locator('#lstJuris');
    }

    async selectAtCCAPCase(): Promise<void> {
        await this.uICCAPCaseDropDown.selectOption({ label: BaseData.getTestValue('CCAPCase') });
    }

    async enterAtCCAPClass(i: number): Promise<void> {
        await this.uICCAPClassEdit.click();
        await this.uICCAPClassEdit.fill(BaseData.getTestValue('CCAPClass' + i));
        await this.uICCAPClassEdit.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async verifyAtDescriptionInGrid(): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uICCAPMapTable, 'CCAP Class Description', 0);
        expect(text).toBe(BaseData.getTestValue('Description'));
    }

    async clickResetIcon(): Promise<void> {
        await this.uIResetIcon.click();
    }

    async selectAtDescriptionInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uICCAPMapTable, BaseData.getTestValue('Description'));
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async selectAtJuris(): Promise<void> {
        await this.uIJurisDropDown.click();
    }

    async verifySelectReportWindowIsPresent(): Promise<void> {
        const pages = this.page.context().pages();
        const found = pages.some(p => p.url().includes('Select Report'));
        expect(found).toBe(true);
    }

    async verifyAtCCAPCaseDropDown(): Promise<void> {
        const val = await this.uICCAPCaseDropDown.inputValue();
        expect(val).toBe(BaseData.getTestValue('CCAPCase'));
    }

    async verifyAtJurisDropDown(): Promise<void> {
        const val = await this.uIJurisDropDown.inputValue();
        expect(val).toBe(BaseData.getTestValue('Juris'));
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }
}

export class JobsPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uISearchButton: Locator;
    readonly uIMobileStatusGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);

        this.uISearchButton = page.locator('#btnSearch');
        this.uIMobileStatusGrid = page.locator('#grdMobileStatus');
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async selectRowByCivilProcess(civilID: string): Promise<void> {
        await this.grid.selectRowByCellText(this.uIMobileStatusGrid, civilID);
        await this.page.waitForTimeout(1000);
    }

    async selectRandomGridRow(): Promise<void> {
        await this.grid.selectRandomRow(this.uIMobileStatusGrid);
    }

    async selectAtCivilProcessInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIMobileStatusGrid, BaseData.getTestValue('CivilProcess'));
    }
}

export class MobileEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIServiceTab: Locator;
    readonly uISaveButton: Locator;
    readonly uINarrativeTab: Locator;
    readonly uICivilDetailInfoIcon: Locator;

    // Service Tab Locators
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIActionDropdown: Locator;
    readonly uIReasonDropdown: Locator;
    readonly uIAddButton: Locator;
    readonly uIGridServiceAttempt: Locator;
    readonly uIPersonServedResetButton: Locator;
    readonly uIServiceCommentsEdit: Locator;

    // Narrative Tab Locators
    readonly uINarrativeCommentsEdit: Locator;
    readonly uISaveIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIServiceTab = page.locator("//span[text()='Service']");
        this.uISaveButton = page.locator('#cmdSave');
        this.uINarrativeTab = page.locator("//span[text()='Narrative']");
        this.uICivilDetailInfoIcon = page.locator('#imgCivilDt');

        this.uIDateEdit = page.locator('#tabCivilDetails_tmpl0_usrCvlService1_dtmServiceDttm_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIActionDropdown = page.locator('#tabCivilDetails_tmpl0_usrCvlService1_cddServiceAction_DropDown');
        this.uIReasonDropdown = page.locator('#tabCivilDetails_tmpl0_usrCvlService1_cddReason_DropDown');
        this.uIAddButton = page.locator('#tabCivilDetails_tmpl0_usrCvlService1_cmdAdd');
        this.uIGridServiceAttempt = page.locator('#tabCivilDetails_tmpl0_usrCvlService1_grdSeviceAttempt');
        this.uIPersonServedResetButton = page.locator('#tabCivilDetails_tmpl0_usrCvlService1_imgClearPersonServedName');
        this.uIServiceCommentsEdit = page.locator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');

        this.uINarrativeCommentsEdit = page.locator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        this.uISaveIcon = page.locator('#cmdInternalSave');
    }

    async clickServiceTab(): Promise<void> {
        await this.uIServiceTab.click();
    }

    async switchToNarrativeTab(): Promise<void> {
        await this.uINarrativeTab.click();
        await this.page.waitForLoadState('load');
        new BrowserHelpers(this.page).switchToFrame('frmTextMgrEx');
    }

    async clickCivilDetailInfoIcon(): Promise<void> {
        await this.uICivilDetailInfoIcon.click();
    }

    async verifyCivilDetailInfoIconIsDisplayed(): Promise<void> {
        await expect(this.uICivilDetailInfoIcon).toBeVisible();
    }

    // Service Tab Actions
    async tabOutUpdatedDateTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async selectAtAction(): Promise<void> {
        await this.uIActionDropdown.click();
        await this.uIActionDropdown.selectOption({ label: BaseData.getTestValue('Action') });
    }

    async selectAtReason(): Promise<void> {
        await this.uIReasonDropdown.click();
        await this.uIReasonDropdown.selectOption({ label: BaseData.getTestValue('Reason') });
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForTimeout(1000);
        await this.popup.confirmYesButton.click();
    }

    async verifyAtServiceActionInGrid(): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIGridServiceAttempt, 'Service Action', 0);
        expect(text).toBe(BaseData.getTestValue('Action'));
    }

    async clickPersonServedResetButton(): Promise<void> {
        await this.uIPersonServedResetButton.click();
    }

    // Narrative Tab Actions
    async enterAtText(): Promise<void> {
        await this.uINarrativeCommentsEdit.click();
        await this.uINarrativeCommentsEdit.fill(BaseData.getTestValue('Text'));
    }

    async enterAtComments(): Promise<void> {
        await this.uINarrativeCommentsEdit.click();
        await this.uINarrativeCommentsEdit.fill(BaseData.getTestValue('Richtext'));
    }

    async saveInternal(): Promise<void> {
        await this.uISaveIcon.click();
        await this.popup.confirmYesButton.click();
    }

    async verifyAtComments(): Promise<void> {
        const text = BaseData.getHomeModuleValue('Richtext');
        const frameBody = this.page.frameLocator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe').locator('body');
        const bodyText = await frameBody.innerText();
        expect(bodyText).toContain(text);
    }
}

export class LevyCaseSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uISearchLink: Locator;
    readonly uIAddNewLink: Locator;
    readonly uIResetLink: Locator;
    readonly uIBackLink: Locator;
    readonly uIlevyCaseSearchResultGrid: Locator;
    readonly uILevyCaseTypeEdit: Locator;
    readonly uILevyCaseIDEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);

        this.uISearchLink = page.locator("//span[(text()='Search')]");
        this.uIAddNewLink = page.locator("//span[(text()='Add New')]");
        this.uIResetLink = page.locator("//span[(text()='Reset')]");
        this.uIBackLink = page.locator("//span[(text()='Back')]");
        this.uIlevyCaseSearchResultGrid = page.locator('#grdLevy');
        this.uILevyCaseTypeEdit = page.locator('#tabLevyCaseSrch_tmpl0_ctrlUsrLevyCaseSrchBasic_nbrLevyCaseNumber_Year');
        this.uILevyCaseIDEdit = page.locator('#tabLevyCaseSrch_tmpl0_ctrlUsrLevyCaseSrchBasic_nbrLevyCaseNumber_Number');
    }

    async clickSearch(): Promise<void> {
        await this.uISearchLink.click();
    }

    async verifyAddNewIsDisplayed(): Promise<void> {
        await expect(this.uIAddNewLink).toBeVisible();
    }

    async verifyAddNewIsEnabled(): Promise<void> {
        await expect(this.uIAddNewLink).toBeEnabled();
    }

    async verifyResetIsDisplayed(): Promise<void> {
        await expect(this.uIResetLink).toBeVisible();
    }

    async verifyResetIsEnabled(): Promise<void> {
        await expect(this.uIResetLink).toBeEnabled();
    }

    async verifySearchIsDisplayed(): Promise<void> {
        await expect(this.uISearchLink).toBeVisible();
    }

    async verifySearchIsEnabled(): Promise<void> {
        await expect(this.uISearchLink).toBeEnabled();
    }

    async verifyBackIsDisabled(): Promise<void> {
        const elem = this.uIBackLink.locator("xpath=.//ancestor::li[@title='Back to search parameter screen']");
        const classAttr = await elem.getAttribute('class') || '';
        expect(classAttr).toContain('RootDisabled');
    }

    async selectRandomGridRow(): Promise<void> {
        await this.grid.selectRandomRow(this.uIlevyCaseSearchResultGrid);
    }

    async selectAtLevyInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIlevyCaseSearchResultGrid, BaseData.getTestValue('LevyID'));
    }

    async enterAtLevyCaseID(i: number): Promise<void> {
        const id = BaseData.getTestValue('LevyCaseID' + i);
        await this.uILevyCaseTypeEdit.fill(id.substring(0, 2));
        await this.uILevyCaseIDEdit.fill(id.substring(3));
        await this.uILevyCaseIDEdit.press('Tab');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewLink.click();
    }
}

export class LevyCaseEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uISaveAndCloseIcon: Locator;
    readonly uIQAFormsTab: Locator;
    readonly uIAttachmentsTab: Locator;
    readonly uISaveIcon: Locator;
    readonly uIReceivedDateEdit: Locator;
    readonly uILevyCaseStatusDropdown: Locator;
    readonly uIStatusDateEdit: Locator;
    readonly uIPlaintiffEdit: Locator;
    readonly uIDefendantEdit: Locator;
    readonly uIMainTab: Locator;
    readonly uIPrintIcon: Locator;

    // QA Forms Tab
    readonly uISelectFormDropdown: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIQAFormsTable: Locator;

    // Main Tab
    readonly uIEnteredBy: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uISaveAndCloseIcon = page.locator('#cmdSaveNClose');
        this.uIQAFormsTab = page.locator("//span[contains(text(),'QA Forms')]");
        this.uIAttachmentsTab = page.locator("//span[contains(text(),'Attachments')]");
        this.uISaveIcon = page.locator('#cmdSave');
        this.uIReceivedDateEdit = page.locator('#dttmReceived_Date_KPIDttmCtrl');
        this.uILevyCaseStatusDropdown = page.locator('#cddLevyCaseStatus_DropDown');
        this.uIStatusDateEdit = page.locator('#dtcStatusDate_KPIDttmCtrl');
        this.uIPlaintiffEdit = page.locator('#txtPlaintiff');
        this.uIDefendantEdit = page.locator('#txtDefendant');
        this.uIMainTab = page.locator("//span[contains(text(),'Main')]");
        this.uIPrintIcon = page.locator('#cmdPrint');

        this.uISelectFormDropdown = page.locator('#cddForm_DropDown');
        this.uIRefreshButton = page.locator('#cmdrefresh');
        this.uIQAFormsTable = page.locator('#grdQAForms');

        this.uIEnteredBy = page.locator('#tabLevyCaseEntry_tmpl0_ctrlUsrLevyCaseEntryMain_lupClerkPF_CodeValue');
    }

    async saveAndClose(): Promise<void> {
        await this.uISaveAndCloseIcon.click();
        await this.popup.confirmYesButton.click();
    }

    async switchToQAFormsTab(): Promise<void> {
        await this.uIQAFormsTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmQuestionnaire.aspx?');
    }

    async switchToAttachmentsTab(): Promise<void> {
        await this.uIAttachmentsTab.click();
        await this.page.waitForLoadState('load');
        new BrowserHelpers(this.page).switchToFrame('frmTxtAttachMgrEx');
    }

    async saveScreen(): Promise<void> {
        await this.uISaveIcon.click();
        await this.popup.confirmYesButton.click();
    }

    async verifyAttachmentsTabInBlueColor(): Promise<void> {
        const cssValue = await this.uIAttachmentsTab.evaluate(el => getComputedStyle(el).color);
        expect(cssValue).toBe('rgba(0, 0, 255, 1)');
    }

    async verifyAttachmentsTabInBlackColor(): Promise<void> {
        const cssValue = await this.uIAttachmentsTab.evaluate(el => getComputedStyle(el).color);
        expect(cssValue).toBe('rgba(0, 0, 0, 1)');
    }

    async tabOutReceivedDate(): Promise<void> {
        await this.uIReceivedDateEdit.click();
        await this.uIReceivedDateEdit.press('Tab');
    }

    async selectAtLevyCaseStatus(i: number): Promise<void> {
        await this.uILevyCaseStatusDropdown.selectOption({ label: BaseData.getTestValue('LevyCaseStatus' + i) });
    }

    async tabOutStatusDate(): Promise<void> {
        await this.uIStatusDateEdit.click();
        await this.uIStatusDateEdit.press('Tab');
    }

    async enterAtPlaintiff(): Promise<void> {
        await this.uIPlaintiffEdit.fill(BaseData.getTestValue('Plaintiff'));
    }

    async enterAtDefendant(): Promise<void> {
        await this.uIDefendantEdit.fill(BaseData.getTestValue('Defendant'));
    }

    async clickMainTab(): Promise<void> {
        await this.uIMainTab.click();
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async selectAtSelectForm(): Promise<void> {
        await this.uISelectFormDropdown.selectOption({ label: BaseData.getTestValue('QAForm') });
    }

    async verifyAtSelectFormDropdownList(i: number): Promise<void> {
        await this.uISelectFormDropdown.click();
        const options = await this.uISelectFormDropdown.locator('option').allInnerTexts();
        expect(options).toContain(BaseData.getTestValue('SelectForm' + i));
    }

    async tabOutEnteredBy(): Promise<void> {
        await this.uIEnteredBy.click();
        await this.uIEnteredBy.press('Tab');
    }
}

export class LevyEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIMainTab: Locator;
    readonly uIFeesAndExpenseTab: Locator;
    readonly uISaveButton: Locator;
    readonly uIDebtorPaymentsAndInterestTab: Locator;
    readonly uIAccountingTab: Locator;

    // Main Tab
    readonly uISaleAmountEdit: Locator;

    // Fees & Expense Tab
    readonly uISheriffFeesAmountEdit: Locator;
    readonly uISheriffFeesTypeDropdown: Locator;
    readonly uISheriffFeesAddButton: Locator;
    readonly uISheriffFeesGrid: Locator;
    readonly uILevyExpensePaymentsDateEdit: Locator;
    readonly uILevyExpensePaymentsTypeDropdown: Locator;
    readonly uILevyExpensePaymentspayableToEdit: Locator;
    readonly uILevyExpensePaymentsAmountEdit: Locator;
    readonly uILevyExpensePaymentsCheckEdit: Locator;
    readonly uILevyExpensePaymentsAddButton: Locator;
    readonly uILevyExpensePaymentsGrid: Locator;

    // Debtor Payments & Interest Tab
    readonly uIInterestCalculationDateFromEdit: Locator;
    readonly uIInterestCalculationDateToEdit: Locator;
    readonly uIInterestCalculationAmountEdit: Locator;
    readonly uIInterestCalculationAddButton: Locator;
    readonly uIInterestCalculationAIREdit: Locator;
    readonly uIInterestCalculationGrid: Locator;
    readonly uIDebtorPaymentsDateEdit: Locator;
    readonly uIDebtorPaymentsAmountEdit: Locator;
    readonly uIDebtorPaymentsCheckEdit: Locator;
    readonly uIDebtorPaymentsReceiptEdit: Locator;
    readonly uIDebtorPaymentsAddButton: Locator;
    readonly uIDebtorPaymentGrid: Locator;

    // Accounting Tab
    readonly uIJudgementAmountEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIMainTab = page.locator("//span[text()='Main']");
        this.uIFeesAndExpenseTab = page.locator("//span[text()='Fees & Expense']");
        this.uISaveButton = page.locator('#cmdSave');
        this.uIDebtorPaymentsAndInterestTab = page.locator("//span[text()='Debtor Payments & Interest']");
        this.uIAccountingTab = page.locator("//span[text()='Accounting']");

        this.uISaleAmountEdit = page.locator('#tabLevyEntry_tmpl0_ctrlUsrLevyEntryMain_txtSaleAmount');

        this.uISheriffFeesAmountEdit = page.locator('#tabLevyEntry_tmpl3_CtrlUsrLevyFeesExpense_txtFeesAmount');
        this.uISheriffFeesTypeDropdown = page.locator('#tabLevyEntry_tmpl3_CtrlUsrLevyFeesExpense_cddFeesType_DropDown');
        this.uISheriffFeesAddButton = page.locator('#tabLevyEntry_tmpl3_CtrlUsrLevyFeesExpense_imgAddFeesAmt');
        this.uISheriffFeesGrid = page.locator('#tabLevyEntry_tmpl3_CtrlUsrLevyFeesExpense_grdFeesAmount');
        this.uILevyExpensePaymentsDateEdit = page.locator('#tabLevyEntry_tmpl3_CtrlUsrLevyFeesExpense_dtcPaymentsDate_KPIDttmCtrl');
        this.uILevyExpensePaymentsTypeDropdown = page.locator('#tabLevyEntry_tmpl3_CtrlUsrLevyFeesExpense_cddPaymentType_DropDown');
        this.uILevyExpensePaymentspayableToEdit = page.locator('#tabLevyEntry_tmpl3_CtrlUsrLevyFeesExpense_txtPaybleTo');
        this.uILevyExpensePaymentsAmountEdit = page.locator('#tabLevyEntry_tmpl3_CtrlUsrLevyFeesExpense_txtPaymentAmount');
        this.uILevyExpensePaymentsCheckEdit = page.locator('#tabLevyEntry_tmpl3_CtrlUsrLevyFeesExpense_txtPaymentCheckNo');
        this.uILevyExpensePaymentsAddButton = page.locator('#tabLevyEntry_tmpl3_CtrlUsrLevyFeesExpense_imgAddPaymentAmt');
        this.uILevyExpensePaymentsGrid = page.locator('#tabLevyEntry_tmpl3_CtrlUsrLevyFeesExpense_grdPayment');

        this.uIInterestCalculationDateFromEdit = page.locator('#tabLevyEntry_tmpl4_CtrlUsrLevyDPI_dtcIntrestDateFrom_KPIDttmCtrl');
        this.uIInterestCalculationDateToEdit = page.locator('#tabLevyEntry_tmpl4_CtrlUsrLevyDPI_dtcIntrestDateTo_KPIDttmCtrl');
        this.uIInterestCalculationAmountEdit = page.locator('#tabLevyEntry_tmpl4_CtrlUsrLevyDPI_txtAmount');
        this.uIInterestCalculationAddButton = page.locator('#tabLevyEntry_tmpl4_CtrlUsrLevyDPI_imgAddInterest');
        this.uIInterestCalculationAIREdit = page.locator('#tabLevyEntry_tmpl4_CtrlUsrLevyDPI_txtAIR');
        this.uIInterestCalculationGrid = page.locator('#tabLevyEntry_tmpl4_CtrlUsrLevyDPI_grdInterestPayment');
        this.uIDebtorPaymentsDateEdit = page.locator('#tabLevyEntry_tmpl4_CtrlUsrLevyDPI_dtcPaymentsDate_KPIDttmCtrl');
        this.uIDebtorPaymentsAmountEdit = page.locator('#tabLevyEntry_tmpl4_CtrlUsrLevyDPI_txtPaymentAmount');
        this.uIDebtorPaymentsCheckEdit = page.locator('#tabLevyEntry_tmpl4_CtrlUsrLevyDPI_txtPaymentCheckNo');
        this.uIDebtorPaymentsReceiptEdit = page.locator('#tabLevyEntry_tmpl4_CtrlUsrLevyDPI_txtReceiptNo');
        this.uIDebtorPaymentsAddButton = page.locator('#tabLevyEntry_tmpl4_CtrlUsrLevyDPI_imgAddPaymentAmt');
        this.uIDebtorPaymentGrid = page.locator('#tabLevyEntry_tmpl4_CtrlUsrLevyDPI_grdLevyDebtorPayments');

        this.uIJudgementAmountEdit = page.locator('#tabLevyEntry_tmpl2_CtrlUsrLevyAccounting_txtJudementAmount');
    }

    async clickMainTab(): Promise<void> {
        await this.uIMainTab.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async clickFeesAndExpenseTab(): Promise<void> {
        await this.uIFeesAndExpenseTab.click();
    }

    async clickDebtorPaymentsTabAndInterestTab(): Promise<void> {
        await this.uIDebtorPaymentsAndInterestTab.click();
    }

    async clickAccountingTab(): Promise<void> {
        await this.uIAccountingTab.click();
    }

    // Main Tab Actions
    async enterAtSaleAmount(jsonIndex: number): Promise<void> {
        await this.uISaleAmountEdit.fill(BaseData.getTestValue('SaleAmount' + jsonIndex));
        await this.uISaleAmountEdit.press('Tab');
    }

    async verifyAtSaleAmount(jsonIndex: number): Promise<void> {
        const val = await this.uISaleAmountEdit.inputValue();
        expect(val).toBe(BaseData.getTestValue('SaleAmount' + jsonIndex));
    }

    // Debtor Payments & Interest Tab Actions
    async enterAtInterestCalculationDateFrom(date: string): Promise<void> {
        await this.uIInterestCalculationDateFromEdit.fill(date);
        await this.uIInterestCalculationDateFromEdit.press('Tab');
    }

    async enterAtInterestCalculationDateTo(date: string): Promise<void> {
        await this.uIInterestCalculationDateToEdit.fill(date);
        await this.uIInterestCalculationDateToEdit.press('Tab');
    }

    async verifyAtInterestCalculationAmount(jsonIndex: number): Promise<void> {
        const amount = await this.uIInterestCalculationAmountEdit.inputValue();
        expect(amount).toBe(BaseData.getTestValue('Amount' + jsonIndex));
    }

    async clickInterestCalculationAddButton(): Promise<void> {
        await this.uIInterestCalculationAddButton.click();
    }

    async enterAtInterestCalculationAIR(jsonIndex: number): Promise<void> {
        await this.uIInterestCalculationAIREdit.fill(BaseData.getTestValue('AIR' + jsonIndex));
        await this.uIInterestCalculationAIREdit.press('Tab');
    }

    async verifyAtInterestCalculationDateFromInGridByBaseAmount(amountIndex: number, date: string): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIInterestCalculationGrid, BaseData.getTestValue('Amount' + amountIndex), 'Date From');
        const text = await cell.innerText();
        expect(text).toBe(date);
    }

    async verifyAtInterestCalculationDateToInGridByBaseAmount(amountIndex: number, date: string): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIInterestCalculationGrid, BaseData.getTestValue('Amount' + amountIndex), 'Date To');
        const text = await cell.innerText();
        expect(text).toBe(date);
    }

    async verifyAtInterestCalculationAIRInGridByBaseAmount(amountIndex: number, jsonIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIInterestCalculationGrid, BaseData.getTestValue('Amount' + amountIndex), 'AIR(%)');
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getTestValue('AIR' + jsonIndex));
    }

    async verifyAtInterestCalculationBaseAmountInGrid(amountIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIInterestCalculationGrid, BaseData.getTestValue('Amount' + amountIndex), 'Base Amount');
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getTestValue('Amount' + amountIndex));
    }

    async verifyAtInterestCalculationinterestAmountInGrid(amountIndex: number, jsonIndex: number, diffBetweenTwoDates: string): Promise<void> {
        const baseAmount = parseInt(BaseData.getTestValue('Amount' + jsonIndex));
        const air = parseInt(BaseData.getTestValue('AIR' + jsonIndex));
        const days = parseFloat(diffBetweenTwoDates) + 1;
        let interest = baseAmount * (air / 100) * (days / 365);
        interest = Math.round(interest * 100) / 100;
        const cell = await this.grid.getGridCell(this.uIInterestCalculationGrid, BaseData.getTestValue('Amount' + amountIndex), 'Interest Amount');
        const text = await cell.innerText();
        expect(text).toBe('$' + interest.toFixed(2));
    }

    async enterAtDebtorPaymentsDate(date: string): Promise<void> {
        await this.uIDebtorPaymentsDateEdit.fill(date);
        await this.uIDebtorPaymentsDateEdit.press('Tab');
    }

    async enterAtDebtorPaymentsAmount(jsonIndex: number): Promise<void> {
        await this.uIDebtorPaymentsAmountEdit.fill(BaseData.getTestValue('Amount' + jsonIndex));
        await this.uIDebtorPaymentsAmountEdit.press('Tab');
    }

    async enterAtDebtorPaymentsCheck(jsonIndex: number): Promise<void> {
        await this.uIDebtorPaymentsCheckEdit.fill(BaseData.getTestValue('Check' + jsonIndex));
        await this.uIDebtorPaymentsCheckEdit.press('Tab');
    }

    async enterAtDebtorPaymentsReceipt(jsonIndex: number): Promise<void> {
        await this.uIDebtorPaymentsReceiptEdit.fill(BaseData.getTestValue('Receipt' + jsonIndex));
        await this.uIDebtorPaymentsReceiptEdit.press('Tab');
    }

    async clickDebtorPaymentsAddButton(): Promise<void> {
        await this.uIDebtorPaymentsAddButton.click();
    }

    async verifyAtDebtorPaymentDateInGridByAmount(amountIndex: number, datestr: string): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIDebtorPaymentGrid, BaseData.getTestValue('Amount' + amountIndex), 'Date');
        const text = await cell.innerText();
        expect(text).toBe(datestr);
    }

    async verifyAtDebtorPaymentAmountInGrid(amountIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIDebtorPaymentGrid, BaseData.getTestValue('Amount' + amountIndex), 'Amount');
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getTestValue('Amount' + amountIndex));
    }

    async verifyAtDebtorPaymentCheckInGrid(checkIndex: number, amountIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIDebtorPaymentGrid, BaseData.getTestValue('Amount' + amountIndex), 'Check#');
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getTestValue('Check' + checkIndex));
    }

    async verifyAtDebtorPaymentReceiptInGrid(receiptIndex: number, amountIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIDebtorPaymentGrid, BaseData.getTestValue('Amount' + amountIndex), 'Receipt#');
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getTestValue('Receipt' + receiptIndex));
    }

    async verifyDateMustBePriorToFromDateAckPopup(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('Date must not be prior to the From date...');
        await this.popup.acknowledgeOkButton.click();
    }

    // Fees & Expense Tab Actions
    async enterAtSheriffFeesAmount(jsonIndex: number): Promise<void> {
        await this.uISheriffFeesAmountEdit.fill(BaseData.getTestValue('Amount' + jsonIndex));
        await this.uISheriffFeesAmountEdit.press('Tab');
    }

    async selectAtSheriffFeesType(jsonIndex: number): Promise<void> {
        await this.uISheriffFeesTypeDropdown.selectOption({ label: BaseData.getTestValue('Type' + jsonIndex) });
    }

    async ClickAddInSheriffFees(): Promise<void> {
        await this.uISheriffFeesAddButton.click();
    }

    async verifyAtSheriffFeesTypeInGridByAmount(amountIndex: number, typeIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uISheriffFeesGrid, BaseData.getTestValue('Amount' + amountIndex), 'Type');
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getTestValue('Type' + typeIndex));
    }

    async verifyAtSheriffFeesAmountInGrid(amountIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uISheriffFeesGrid, BaseData.getTestValue('Amount' + amountIndex), 'Amount');
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getTestValue('Amount' + amountIndex));
    }

    async enterAtLevyExpensePaymentsDate(date: string): Promise<void> {
        await this.uILevyExpensePaymentsDateEdit.fill(date);
        await this.uILevyExpensePaymentsDateEdit.press('Tab');
    }

    async enterAtLevyExpensePaymentsAmount(jsonIndex: number): Promise<void> {
        await this.uILevyExpensePaymentsAmountEdit.fill(BaseData.getTestValue('Amount' + jsonIndex));
        await this.uILevyExpensePaymentsAmountEdit.press('Tab');
    }

    async enterAtLevyExpensePaymentsCheck(jsonIndex: number): Promise<void> {
        await this.uILevyExpensePaymentsCheckEdit.fill(BaseData.getTestValue('Check' + jsonIndex));
    }

    async enterAtLevyExpensePaymentsPayableTo(jsonIndex: number): Promise<void> {
        await this.uILevyExpensePaymentspayableToEdit.fill(BaseData.getTestValue('PayableTo' + jsonIndex));
    }

    async clickAddInLevyExpensePayments(): Promise<void> {
        await this.uILevyExpensePaymentsAddButton.click();
    }

    async selectAtLevyExpensePaymentsType(jsonIndex: number): Promise<void> {
        await this.uILevyExpensePaymentsTypeDropdown.selectOption({ label: BaseData.getTestValue('Type' + jsonIndex) });
    }

    async verifyAtLevyExpensePaymentsDateInGridByAmount(jsonIndex: number, currentDate: string): Promise<void> {
        const cell = await this.grid.getGridCell(this.uILevyExpensePaymentsGrid, BaseData.getTestValue('Amount' + jsonIndex), 'Date');
        const text = await cell.innerText();
        expect(text).toBe(currentDate);
    }

    async verifyAtLevyExpensePaymentsAmountInGrid(jsonIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uILevyExpensePaymentsGrid, BaseData.getTestValue('Amount' + jsonIndex), 'Amount');
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getTestValue('Amount' + jsonIndex));
    }

    async verifyAtLevyExpensePaymentsTypeInGridByAmount(amountIndex: number, typeIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uILevyExpensePaymentsGrid, BaseData.getTestValue('Amount' + amountIndex), 'Type');
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getTestValue('Type' + typeIndex));
    }

    async verifyAtLevyExpensePaymentsPayableToInGridByAmount(amountIndex: number, payableToIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uILevyExpensePaymentsGrid, BaseData.getTestValue('Amount' + amountIndex), 'Payable To');
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getTestValue('PayableTo' + payableToIndex));
    }

    async verifyAtLevyExpensePaymentsCheckInGridByAmount(amountIndex: number, checkIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uILevyExpensePaymentsGrid, BaseData.getTestValue('Amount' + amountIndex), 'Check#');
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getTestValue('Check' + checkIndex));
    }

    // Accounting Tab Actions
    async enterAtJudgementAmount(jsonIndex: number): Promise<void> {
        await this.uIJudgementAmountEdit.click();
        await this.uIJudgementAmountEdit.fill(BaseData.getTestValue('Amount' + jsonIndex));
        await this.uIJudgementAmountEdit.press('Tab');
    }

    async verifyAtJudgementAmount(jsonIndex: number): Promise<void> {
        const judgementAmount = await this.uIJudgementAmountEdit.inputValue();
        expect(judgementAmount).toBe(BaseData.getTestValue('Amount' + jsonIndex));
    }
}

export class CivilPage {
    readonly page: Page;
    private browserHelpers: BrowserHelpers;

    constructor(page: Page) {
        this.page = page;
        this.browserHelpers = new BrowserHelpers(page);
    }

    async switchToCivilSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Civil Search');
    }

    async switchToCivilForm(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Civil Form');
    }

    async switchToPaperEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Paper Entry');
    }

    async switchToPaperInfoEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmPaperInfo');
    }

    async switchToAuthenticationWindow(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmCivilPFAuthentication');
    }

    async switchToDistrict(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('District');
    }

    async switchToDistrictCode(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('District Code');
    }

    async switchToPayment(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Payment');
    }

    async switchToCivilStatement(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Civil Statement');
    }

    async switchToCivilStatementEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Civil Statement');
    }

    async switchToPaperType(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Paper Type');
    }

    async switchToPaperTypeEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmPaperType');
    }

    async switchToCivilContact(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Civil Contact');
    }

    async switchToPropertyInventoryScreen(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmPropertyInventory');
    }

    async switchToCivilPropertyScreen(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Civil Property');
    }

    async switchToCivilDetailsScreen(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Civil Details');
    }

    async switchToCivilFormTROInfoEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmCvlTRO');
    }

    async switchToAssignment(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Assignment');
    }

    async switchToServiceAction(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Service Action');
    }

    async switchToServiceActionEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Service Action Entry');
    }

    async switchToCCAPMap(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('CCAP Map');
    }

    async switchToServiceArea(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Service Area');
    }

    async switchToServiceAreaWindow(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Service Area');
    }

    async switchToJobs(): Promise<void> {
        new BrowserHelpers(this.page).switchToFrame('frmmobilestatus.aspx');
    }

    async switchToMobileEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Mobile Entry');
    }

    async switchToLevyCaseSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Levy Case Search');
    }

    async switchToLevyCaseEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Levy Case Entry');
    }

    async switchToLevyEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Levy Entry');
    }
}
