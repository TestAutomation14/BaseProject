import { Page, Locator, expect } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { BaseData } from '../../data/base-data';
import { GridHelpers } from '../../helpers/grid-helpers';
import { ElementHelpers } from '../../helpers/element-helpers';
import { PopupHelpers } from '../../helpers/popup-helpers';

export class CameraViewConfigEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIAllCamerasList: Locator;
    readonly uIViewTypeDropDown: Locator;
    readonly uIViewNameEdit: Locator;
    readonly uIViewForValueEdit: Locator;
    readonly uICameraAddIcon: Locator;
    readonly uICameraRemoveIcon: Locator;
    readonly uICameraUpIcon: Locator;
    readonly uICameraDownIcon: Locator;
    readonly uISaveIcon: Locator;
    readonly uIConfiguredCamerasList: Locator;
    readonly uIDeleteIcon: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIAllCamerasList = page.locator('#lstAllColumns');
        this.uIViewTypeDropDown = page.locator('#cddViewType_DropDown');
        this.uIViewNameEdit = page.locator('#txtViewName');
        this.uIViewForValueEdit = page.locator('#luppf_CodeValue');
        this.uICameraAddIcon = page.locator('#cmdCamerasAdd');
        this.uICameraRemoveIcon = page.locator('#cmdCamerasRemove');
        this.uICameraUpIcon = page.locator('#cmdUP');
        this.uICameraDownIcon = page.locator('#cmdDown');
        this.uISaveIcon = page.locator('#cmdSave');
        this.uIConfiguredCamerasList = page.locator('#lstVisibleCols');
        this.uIDeleteIcon = page.locator('#cmdDelete');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
    }

    async selectAtAllCameraValue(jsonIndexValue?: number): Promise<void> {
        const key = jsonIndexValue !== undefined ? `AllCameras${jsonIndexValue}` : 'AllCameras';
        const cameraName = BaseData.getTestValue(key);
        const option = this.page.locator(`//select[@id='lstAllColumns']/option[text()='${cameraName}']`);
        await option.click();
    }

    async selectAtViewType(jsonKeyData: number): Promise<void> {
        await this.elementHelpers.selectDropDownOption(
            this.uIViewTypeDropDown,
            BaseData.getTestValue(`ViewType${jsonKeyData}`)
        );
    }

    async enterAtViewName(): Promise<void> {
        await this.uIViewNameEdit.fill(BaseData.getTestValue('ViewName'));
        await this.uIViewNameEdit.press('Tab');
    }

    async enterAtViewFor(): Promise<void> {
        await this.uIViewForValueEdit.fill(BaseData.getTestValue('ViewFor'));
        await this.uIViewForValueEdit.press('Tab');
    }

    async clickCameraAddIcon(): Promise<void> {
        await this.uICameraAddIcon.click();
        await this.page.waitForTimeout(1000);
    }

    async saveScreen(): Promise<void> {
        await this.uISaveIcon.click();
        await this.page.waitForTimeout(1000);
        await this.popup.confirmYes();
    }

    async selectAllCamera(): Promise<void> {
        await this.uIAllCamerasList.click();
        const options = await this.uIAllCamerasList.locator('option').all();
        if (options.length > 0) {
            const randomIndex = Math.floor(Math.random() * options.length);
            const value = await options[randomIndex].getAttribute('value');
            if (value) {
                await this.uIAllCamerasList.selectOption(value);
            }
        }
    }

    async verifyAddIconIsDisplayed(): Promise<void> {
        await expect(this.uICameraAddIcon).toBeVisible();
    }

    async verifyRemoveIconIsDisplayed(): Promise<void> {
        await expect(this.uICameraRemoveIcon).toBeVisible();
    }

    async verifyUpIconIsDisplayed(): Promise<void> {
        await expect(this.uICameraUpIcon).toBeVisible();
    }

    async verifyDownIconIsDisplayed(): Promise<void> {
        await expect(this.uICameraDownIcon).toBeVisible();
    }

    async verifyAtConfiguredCamerasValue(jsonIndexValue: number): Promise<void> {
        const expectedCamera = BaseData.getTestValue(`ConfiguredCameras${jsonIndexValue}`);
        const options = await this.uIConfiguredCamerasList.locator('option').allInnerTexts();
        expect(options).toContain(expectedCamera);
    }

    async clickSave(): Promise<void> {
        await this.uISaveIcon.click();
    }

    async verify1018RequiredEntriesAreMissingAcknowldgePopupAppears(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1018) Required Entries are Missing');
        await this.popup.acknowledgeOk();
    }

    async verifyDeleteIconIsDisplayed(): Promise<void> {
        await expect(this.uIDeleteIcon).toBeVisible();
    }

    async clickDeleteIcon(): Promise<void> {
        await this.uIDeleteIcon.click();
    }

    async verify4DoYouReallyWantToDeleteConfirmAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(4) Do you really want to delete?');
        await this.popup.confirmYes();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async verify1152ThisCameraNameAlreadyExistBottomMessageNotAppears(): Promise<void> {
        const statusText = (await this.uIBottomLeftSideStatusBar.innerText().catch(() => '')) || '';
        expect(statusText).not.toContain('1152 – This Camera Name Already Exists');
    }

    async verifyAtAllCamerasValueNotContains(jsonIndexValue: number): Promise<void> {
        const expectedCamera = BaseData.getTestValue(`AllCameras${jsonIndexValue}`);
        const options = await this.uIAllCamerasList.locator('option').allInnerTexts();
        expect(options).not.toContain(expectedCamera);
    }
}

export class CameraViewConfigSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIAddNew: Locator;
    readonly uICameraViewConfigSearchGridTable: Locator;
    readonly uIViewForValueEdit: Locator;
    readonly uISearchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIAddNew = page.locator("//span[contains(text(),'Add New')]");
        this.uICameraViewConfigSearchGridTable = page.locator('#grdViewManagementSrch_ctl00');
        this.uIViewForValueEdit = page.locator('#luppf_CodeValue');
        this.uISearchButton = page.locator('#cmdSearch');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNew.click();
        await this.page.waitForTimeout(1000);
    }

    // async verifyAtViewNameInGrid(jsonIndexValue: number): Promise<void> {
    //     const expectedViewName = BaseData.getTestValue(`ViewName${jsonIndexValue}`);
    //     const cell = await this.grid.getGridCell(this.uICameraViewConfigSearchGridTable, expectedViewName);
    //     const text = (await cell.innerText()).trim();
    //     expect(text).toBe(expectedViewName);
    // }

    async enterAtViewFor(): Promise<void> {
        await this.uIViewForValueEdit.fill(BaseData.getTestValue('ViewFor'));
        await this.uIViewForValueEdit.press('Tab');
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
        await this.page.waitForTimeout(1000);
    }

    async selectAtViewNameInGrid(jsonIndexValue: number): Promise<void> {
        const expectedViewName = BaseData.getTestValue(`ViewName${jsonIndexValue}`);
        await this.grid.selectRowByCellText(this.uICameraViewConfigSearchGridTable, expectedViewName);
    }

    async verifyAtViewNameRecordNotListedInGrid(jsonIndexValue: number): Promise<void> {
        const expectedViewName = BaseData.getTestValue(`ViewName${jsonIndexValue}`);
        const columnValues = await this.grid.getGridTableColumnValues(this.uICameraViewConfigSearchGridTable, 'View Name');
        expect(columnValues).not.toContain(expectedViewName);
    }
}

export class VideoInterviewSearchPage {
    readonly page: Page;
    readonly uIAddNew: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddNew = page.locator("//span[contains(text(),'Add New')]");
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNew.click();
        await this.page.waitForTimeout(1000);
    }
}

export class VideoInterviewEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIClearNameIcon: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameIDEdit: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNoEdit: Locator;
    readonly uIPrimeOfficerValueEdit: Locator;
    readonly uISaveIcon: Locator;
    readonly uIOfficersTab: Locator;
    readonly uISaveAndCloseIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIClearNameIcon = page.locator('#imgClear');
        this.uINameTypeEdit = page.locator('#txtNameID_NameType');
        this.uINameIDEdit = page.locator('#txtNameID_NameTypeID');
        this.uICaseYearEdit = page.locator('#nbrCase_Year');
        this.uICaseNoEdit = page.locator('#nbrCase_Number');
        this.uIPrimeOfficerValueEdit = page.locator('#lupPF1_CodeValue');
        this.uISaveIcon = page.locator('#cmdSave');
        this.uIOfficersTab = page.locator("//span[contains(text(),'Officer(s)')]");
        this.uISaveAndCloseIcon = page.locator('#cmdSaveNClose');
    }

    async verifyClearNameIconIsDisplayed(): Promise<void> {
        await expect(this.uIClearNameIcon).toBeVisible();
    }

    async enterAtInterviewNameID(): Promise<void> {
        const interviewNameID = BaseData.getTestValue('InterviewNameID');
        await this.uINameTypeEdit.fill(interviewNameID.substring(0, 2));
        await this.uINameIDEdit.fill(interviewNameID.substring(3));
        await this.uINameIDEdit.press('Tab');
    }

    async verifyAtNameID(): Promise<void> {
        const type = await this.uINameTypeEdit.inputValue();
        const id = await this.uINameIDEdit.inputValue();
        const combined = `${type}-${id}`;
        expect(combined).toBe(BaseData.getTestValue('NameID'));
    }

    async clickClearNameIcon(): Promise<void> {
        await this.uIClearNameIcon.click();
        await this.page.waitForTimeout(500);
    }

    async verifyNameIDIsBlank(): Promise<void> {
        const type = await this.uINameTypeEdit.inputValue();
        const id = await this.uINameIDEdit.inputValue();
        expect(type.trim()).toBe('');
        expect(id.trim()).toBe('');
    }

    async enterAtCaseID(jsonIndexValue: number): Promise<void> {
        const caseNo = BaseData.getTestValue(`CaseNo${jsonIndexValue}`);
        await this.uICaseYearEdit.fill(caseNo.substring(0, 2));
        await this.uICaseNoEdit.fill(caseNo.substring(3));
        await this.uICaseNoEdit.press('Tab');
    }

    async tabOutPrimaryOfficer(): Promise<void> {
        await this.uIPrimeOfficerValueEdit.press('Tab');
    }

    async saveScreen(): Promise<void> {
        await this.uISaveIcon.click();
        await this.page.waitForTimeout(1000);
        await this.popup.confirmYes();
    }

    async saveAndCloseScreen(): Promise<void> {
        await this.uISaveAndCloseIcon.click();
        await this.page.waitForTimeout(1000);
        await this.popup.confirmYes();
    }

    async clickSaveIcon(): Promise<void> {
        await this.uISaveIcon.click();
    }

    async clickOfficersTab(): Promise<void> {
        await this.uIOfficersTab.click();
        await this.page.waitForTimeout(1000);
    }

    async verify1051UpdatedDataExistsInTheOfficeAcknowledgePopupMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText(
            '(1051) Updated data exists in the Officer(s) tab. You must save or reset.'
        );
        await this.popup.acknowledgeOk();
    }

    async clickSaveAndCloseIcon(): Promise<void> {
        await this.uISaveAndCloseIcon.click();
    }
}

export class VideoInterviewOfficersTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly uIOfficerPFEdit: Locator;
    readonly uIPFValue: Locator;
    readonly uIAddButton: Locator;
    readonly uIOfficersTabGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIOfficerPFEdit = page.locator('#tabCE_tmpl5_UsrTraOfficer1_lupOffPFID_CodeValue');
        this.uIPFValue = page.locator('#TabVideoInterview_tmpl0_usrOfficer1_lupPFID_CodeValue');
        this.uIAddButton = page.locator('#TabVideoInterview_tmpl0_usrOfficer1_imgAdd');
        this.uIOfficersTabGrid = page.locator('#TabVideoInterview_tmpl0_usrOfficer1_grdItemDetails');
    }

    async enterAtPF(jsonIndexValue: number): Promise<void> {
        await this.uIPFValue.fill(BaseData.getTestValue(`PF${jsonIndexValue}`));
        await this.uIPFValue.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickDeleteCellByPF(jsonIndexValue: number): Promise<void> {
        const pfDescription = BaseData.getTestValue(`PFDescription${jsonIndexValue}`);
        await this.grid.deleteGridRowByCellInnerText(this.uIOfficersTabGrid, pfDescription);
    }

    async verifyDeleteConfirmationPopupNotAppears(): Promise<void> {
        const isVisible = await this.popup.modalBody.isVisible().catch(() => false);
        expect(isVisible).toBe(false);
    }

    async verifyPFDescriptionNotContainsInGrid(jsonIndexValue: number): Promise<void> {
        const pfDescription = BaseData.getTestValue(`PFDescription${jsonIndexValue}`);
        const pFDescriptions = await this.grid.getGridTableColumnValues(this.uIOfficersTabGrid, 'PF');
        expect(pFDescriptions).not.toContain(pfDescription);
    }

    async verifyAtPFNameInGrid(jsonIndexValue: number): Promise<void> {
        const pfName = BaseData.getTestValue(`PFName${jsonIndexValue}`);
        const row = await this.grid.getGridRowByCellInnerText(this.uIOfficersTabGrid, pfName);
        const rowText = await row.innerText();
        expect(rowText).toContain(pfName);
    }
}

export class VideoPage {
    readonly page: Page;
    private browserHelpers: BrowserHelpers;

    constructor(page: Page) {
        this.page = page;
        this.browserHelpers = new BrowserHelpers(page);
    }

    async reset(): Promise<void> {
        // Page state managed by Playwright
    }

    async switchToCameraViewConfigSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmCameraViewManagementInquiry.aspx?');
    }

    async switchToCameraViewConfigEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Camera View Config Entry');
    }

    async switchToVideoInterviewSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmVideoInterviewSrch.aspx?');
    }

    async switchToVideoInterviewEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Video Interview');
    }
}
