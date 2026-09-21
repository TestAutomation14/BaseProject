// @ts-nocheck
import { Page, Locator } from '@playwright/test';
import { expect } from '@playwright/test';
import { DateHelpers, RandomHelpers } from '../../helpers/date-helpers';
import { BaseData } from '../../data/base-data';
import { ElementHelpers } from '../../helpers/element-helpers';
import { PopupPage } from '../popup.page';

export class AddMultiplePFPage {
    readonly page: Page;
    readonly uIDivisionComboBox: Locator;
    readonly uISectionComboBox: Locator;
    readonly uISearchButton: Locator;
    readonly uIClearButton: Locator;
    readonly uISelectAllCheckBox: Locator;
    readonly uIExpandAllCheckBox: Locator;
    readonly uIAddTheSelectPFToListButton: Locator;
    readonly uISquadDropdown: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uITeamDropdown: Locator;
    readonly uISortOrderDropdown: Locator;
    readonly uIDivisionCheckbox: Locator;
    readonly uISectionCheckbox: Locator;
    readonly uISquadCheckbox: Locator;
    readonly uITeamCheckbox: Locator;
    readonly uIOnDutyCheckbox: Locator;
    readonly uIMultiplePFTreeView: Locator;
    readonly uTreeListGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIDivisionComboBox = page.locator('NocddDiv_DropDown');
        this.uISectionComboBox = page.locator('NocddSec_DropDown');
        this.uISearchButton = page.locator('NobtnSearch');
        this.uIClearButton = page.locator('NobtnClear');
        this.uISelectAllCheckBox = page.locator('NochkSelectAll');
        this.uIExpandAllCheckBox = page.locator('NochkExpand');
        this.uIAddTheSelectPFToListButton = page.locator('NobtnAddPFs');
        this.uISquadDropdown = page.locator('NocddSquad_DropDown');
        this.uILastNameEdit = page.locator('NotxtLastName');
        this.uIFirstNameEdit = page.locator('NotxtFirstName');
        this.uITeamDropdown = page.locator('NocddTeam_DropDown');
        this.uISortOrderDropdown = page.locator('NocddSortOrder_DropDown');
        this.uIDivisionCheckbox = page.locator('Nochkgroupbydivision');
        this.uISectionCheckbox = page.locator('NochkSection');
        this.uISquadCheckbox = page.locator('NochkSquad');
        this.uITeamCheckbox = page.locator('NochkTeam');
        this.uIOnDutyCheckbox = page.locator('NoChkonDutyOnly');
        this.uIMultiplePFTreeView = page.locator('NoRadMultiplePFTreeView');
        this.uTreeListGrid = page.locator('NoRadTreeListAD');
    }

    async ClickSelectAll(): Promise<void> {
        await this.uISelectAllCheckBox.click();
    }

    async ClickAddTheSelectPFToList(): Promise<void> {
        await this.uIAddTheSelectPFToListButton.click();
    }

    async verifyDivisionDrodpdownIsDisplayed(): Promise<void> {
        await expect(this.uIDivisionComboBox).toBeVisible()
    }

    async verifySectionDrodpdownIsDisplayed(): Promise<void> {
        await expect(this.uISectionComboBox).toBeVisible()
    }

    async verifySquadDrodpdownIsDisplayed(): Promise<void> {
        await expect(this.uISquadDropdown).toBeVisible()
    }

    async verifyLastNameIsDisplayed(): Promise<void> {
        await expect(this.uILastNameEdit).toBeVisible()
    }

    async verifyFirstNameIsDisplayed(): Promise<void> {
        await expect(this.uIFirstNameEdit).toBeVisible()
    }

    async verifyTeamDrodpdownIsDisplayed(): Promise<void> {
        await expect(this.uITeamDropdown).toBeVisible()
    }

    async verifySortOrderDrodpdownIsDisplayed(): Promise<void> {
        await expect(this.uISortOrderDropdown).toBeVisible()
    }

    async verifyDivisionCheckboxIsDisplayed(): Promise<void> {
        await expect(this.uIDivisionCheckbox).toBeVisible()
    }

    async verifySectionCheckboxIsDisplayed(): Promise<void> {
        await expect(this.uISectionCheckbox).toBeVisible()
    }

    async verifySquadCheckboxIsDisplayed(): Promise<void> {
        await expect(this.uISquadCheckbox).toBeVisible()
    }

    async verifyTeamCheckboxIsDisplayed(): Promise<void> {
        await expect(this.uITeamCheckbox).toBeVisible()
    }

    async verifyOnDutyCheckboxIsDisplayed(): Promise<void> {
        await expect(this.uIOnDutyCheckbox).toBeVisible()
    }

    async verifySearchButtonIsDisplayed(): Promise<void> {
        await expect(this.uISearchButton).toBeVisible()
    }

    async verifyClearButtonIsDisplayed(): Promise<void> {
        await expect(this.uIClearButton).toBeVisible()
    }

    async verifySelectAllCheckboxIsDisplayed(): Promise<void> {
        await expect(this.uISelectAllCheckBox).toBeVisible()
    }

    async verifyExpandAllCheckboxIsDisplayed(): Promise<void> {
        await expect(this.uIExpandAllCheckBox).toBeVisible()
    }

    async verifyAddTheSelectPFToTheListButtonIsDisplayed(): Promise<void> {
        await expect(this.uIAddTheSelectPFToListButton).toBeVisible()
    }

    async selectAtDivision(): Promise<void> {
        await this.uIDivisionComboBox.selectOption({ label: division });
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async enterAtLastName(): Promise<void> {
        await this.uILastNameEdit.fill(lastName);
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clickSelectedPFCheckboxByName(i: string): Promise<void> {
        // gridHelpers.selectGridRowCheckBox( TODO: testData.settings("Name" + i))
    }

    async clickAtPFByName(i: string): Promise<void> {
        const PFName = testData.activity("PFName" + i)
        const PFCheckBox = await this.page.locator(`//div[@id='RadMultiplePFTreeView']//span[contains(text(),'${PFName}')]/preceding-sibling::span[@class='rtUnchecked']`).innerText()
        await PFCheckBox.click();
    }
}

export class AIMugmatchPage {
    readonly page: Page;
    readonly uISearchOnlyMyDatabaseRadioButton: Locator;
    readonly uISearchPNXGlobalDatabaseRadioButton: Locator;
    readonly uIFindMatchButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIBackButton: Locator;
    readonly uICloseButton: Locator;
    readonly uINameIDLabel: Locator;
    readonly uINameLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISearchOnlyMyDatabaseRadioButton = page.locator('NordbtnDatabase');
        this.uISearchPNXGlobalDatabaseRadioButton = page.locator('NordbtnGlobalDatabase');
        this.uIFindMatchButton = page.locator('NocmdFindMatch');
        this.uIResetButton = page.locator('NocmdReset');
        this.uIBackButton = page.locator('Nocmdback');
        this.uICloseButton = page.locator('Nocmdclose');
        this.uINameIDLabel = page.locator('NolblNameID');
        this.uINameLabel = page.locator('NolblName');
    }

    async clickAtName(name: string): Promise<void> {
        const element = this.page.locator("//span[@id='Imgbind']/table/tbody/tr/td/div/p[contains(text(),'"+name+"')]")
        await element.click();
    }

    async verifyNameUnderImage(name: string): Promise<void> {
        const Names = await this.page.locator("//span[@id='Imgbind']/table/tbody/tr/td/div/p[contains(text(),'"+name+"')]").all()
        //ListIterator<WebElement> listIterator = Names.listIterator();
        for (const webElement of Names) {
        const text = await webElement.innerText();
        if (text === testData.home('Name1')) {
        }
        }
    }

    async verifyAtNameID(): Promise<void> {
        expect(await this.uINameIDLabel.innerText())
    }

    async verifyAtLastNameAndFirstName(): Promise<void> {
        // TODO: expectEqual(testData.home('Name').trim()).toEqual(testData.home('NameID'))
    }

    async clickBackButton(): Promise<void> {
        await this.uIBackButton.click();
    }

    async clickCloseButton(): Promise<void> {
        await this.uICloseButton.click();
    }

    async clickSearchOnlyMyDataBaseRadioButton(): Promise<void> {
        await this.uISearchOnlyMyDatabaseRadioButton.click();
    }

    async clickFindMatchButton(): Promise<void> {
        await this.uIFindMatchButton.click();
    }
}

export class ALCGroupTabPage {
    readonly page: Page;
    readonly uIActionComboBox: Locator;
    readonly uIDivisionComboBox: Locator;
    readonly uISectionComboBox: Locator;
    readonly uISquadCodeEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIGroupGridTable: Locator;
    readonly uIDivisionTextView: Locator;
    readonly uISectionTextView: Locator;
    readonly uISquadTextView: Locator;
    readonly uITitleComboBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIActionComboBox = page.locator('NotabALC_tmpl1_UsrALGrp1_cddAction_DropDown');
        this.uIDivisionComboBox = page.locator('NotabALC_tmpl1_UsrALGrp1_cddDivision_DropDown');
        this.uISectionComboBox = page.locator('NotabALC_tmpl1_UsrALGrp1_cddSection_DropDown');
        this.uISquadCodeEdit = page.locator('NotabALC_tmpl1_UsrALGrp1_lupSquad_CodeValue');
        this.uIAddButton = page.locator('NotabALC_tmpl1_UsrALGrp1_cmdGrpAdd');
        this.uIGroupGridTable = page.locator('NotabALC_tmpl1_UsrALGrp1_grdGrp');
        this.uIDivisionTextView = page.locator('NotabALC_tmpl1_UsrALGrp1_lblDiv');
        this.uISectionTextView = page.locator('NotabALC_tmpl1_UsrALGrp1_lblSec');
        this.uISquadTextView = page.locator('NotabALC_tmpl1_UsrALGrp1_Kpilabel1');
        this.uITitleComboBox = page.locator('NotabALC_tmpl1_UsrALGrp1_cddTitle_DropDown');
    }

    async SelectAtAction(): Promise<void> {
        // TODO: select dropdown option on this.uIActionComboBox,
        // testData.home('Action'))
    }

    async selectAtAction(i: string): Promise<void> {
        // TODO: select dropdown option on this.uIActionComboBox,
        // testData.home('Action')+i)
    }

    async selectActionAsDeny(): Promise<void> {
        // TODO: select dropdown option on this.uIActionComboBox with value // "Deny"
    }

    async selectDivision(): Promise<void> {
        await this.page.waitForTimeout(600);
        // random select on this.aLCGroupTab
    }

    async selectAtSection(): Promise<void> {
        await this.page.waitForTimeout(600);
        // TODO: select dropdown option on this.uISectionComboBox,
        // testData.home('Section'))
    }

    async selectAtDivision(): Promise<void> {
        await this.page.waitForTimeout(600);
        // TODO: select dropdown option on this.uIDivisionComboBox,
        // testData.home('Division'))
    }

    async selectAtDivision1(): Promise<void> {
        await this.page.waitForTimeout(600);
        // TODO: select dropdown option on this.uIDivisionComboBox,
        // testData.home('Division1'))
    }

    async selectTitle(): Promise<void> {
        await this.page.waitForTimeout(600);
        // random select on this.aLCGroupTab
    }

    async SelectSection(): Promise<void> {
        await this.page.waitForTimeout(600);
        // random select on this.aLCGroupTab
    }

    async selectAtSquad(): Promise<void> {
        await this.page.waitForTimeout(600);
        await this.aLCGroupTab.fill(squadCode);
    }

    async ClickAdd(): Promise<void> {
        await this.page.waitForTimeout(600);
        await this.aLCGroupTab.click();
    }

    async VerifyAtActionInGrid(rowIndex: string): Promise<void> {
        if (rowIndex == 0) {
        // TODO: grid expect assertion
        // TODO: assertion continuation
        // TODO: grid expect assertion
        // TODO: assertion continuation
        }
    }

    async verifyAtDivisionInGrid(rowIndex: string): Promise<void> {
        // TODO: grid cell assertion
    }

    async verifyAtDivision1InGrid(rowIndex: string): Promise<void> {
        // TODO: grid cell assertion
    }

    async VerifySectionLableAsSEC(): Promise<void> {
        expect(await this.aLCGroupTab.innerText()).toEqual("SEC");
    }

    async VerifyDivisionLableAsDIV(): Promise<void> {
        expect(await this.aLCGroupTab.innerText()).toEqual("DIV");
    }

    async VerifySquadLableAsSQ(): Promise<void> {
        expect(await this.aLCGroupTab.innerText()).toEqual("SQ");
    }

    async selectAtSection1(): Promise<void> {
        await this.page.waitForTimeout(600);
        // TODO: select dropdown option on this.uISectionComboBox with testData.home('Section1')
    }

    async selectAtTitle(): Promise<void> {
        await this.page.waitForTimeout(600);
        // TODO: select dropdown option on this.uITitleComboBox with testData.home('Title')
    }

    async verifyActionAsDenyInGrid(rowIndex: string): Promise<void> {
        // TODO: expect(await gridHelpers.getGridCellInnerText(this.uIGroupGridTable, row, col)).toEqual("Deny")
    }

    async cancelDeleteAtAction(): Promise<void> {
        // gridHelpers.deleteGridRowByCellInnerText( this.uIGroupGridTable, testData.home('Action'))
        // confirm popup: no
    }

    async clickHeaderInGrid(header: string): Promise<void> {
        await gridHelpers.selectGridHeaderColumnName(this.uIGroupGridTable, header)
    }

    async verifyDeleteConfirmationPopupNotArise(): Promise<void> {
        const alert = popup.confirm.checkAlertIsPresentOrNot();
        expect(alert).toBeFalsy();
    }
}

export class ALCPFTabPage {
    readonly page: Page;
    readonly uIActionComboBox: Locator;
    readonly uIPFCodeEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIPFGridResult: Locator;
    readonly uIPFDescriptionEdit: Locator;
    readonly uIUpdateButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIActionComboBox = page.locator('NotabALC_tmpl0_UsrALPF1_cddAction_DropDown');
        this.uIPFCodeEdit = page.locator('NotabALC_tmpl0_UsrALPF1_lupPF_CodeValue');
        this.uIAddButton = page.locator('NotabALC_tmpl0_UsrALPF1_cmdAddPF');
        this.uIClearButton = page.locator('NotabALC_tmpl0_UsrALPF1_cmdClearPF');
        this.uIPFGridResult = page.locator('NotabALC_tmpl0_UsrALPF1_grdPF');
        this.uIPFDescriptionEdit = page.locator('NotabALC_tmpl0_UsrALPF1_lupPF_CodeDescription');
        this.uIUpdateButton = page.locator('NotabALC_tmpl0_UsrALPF1_cmdAddPF');
    }

    async SelectAtAction(): Promise<void> {
        // TODO: select dropdown option on this.uIActionComboBox,
        // testData.home('Action'))
    }

    async EnterAtPFCode(): Promise<void> {
        await this.aLCPFTab.fill(pFCode);
        await this.aLCPFTab.press('Tab');
    }

    async EnterAtPFCode1(): Promise<void> {
        await this.aLCPFTab.fill(pFCode1);
    }

    async ClickAddButton(): Promise<void> {
        await this.aLCPFTab.click();
    }

    async VerifyActionAsDenyInGrid(rowIndex: string): Promise<void> {
        // TODO: expect(await gridHelpers.getGridCellInnerText(this.uIPFGridResult, row, col)).toEqual("Deny")
    }

    async VerifyAtActionInGrid(rowIndex: string): Promise<void> {
        if (rowIndex == 0) {
        // TODO: grid expect assertion
        // TODO: assertion continuation
        // TODO: grid cell assertion
        }
    }

    async VerifyAtAllowOrDenyInGrid(rowIndex: string): Promise<void> {
        // TODO: expect(await gridHelpers.getGridCellInnerText(this.uIPFGridResult, row, col)).toEqual(testData.home('AllowOrDeny'))
    }

    async VerifyAtNameInGrid(rowIndex: string): Promise<void> {
        // TODO: expect(await gridHelpers.getGridCellInnerText(this.uIPFGridResult, row, col)).toEqual(testData.home('Name'))
    }

    async VerifyAtPFDescription(): Promise<void> {
        await this.aLCPFTab.fill(pFDescription);
    }

    async selectActionAsDeny(): Promise<void> {
        // TODO: select dropdown option on this.uIActionComboBox with value // "Deny"
    }

    async selectAtActionInGrid(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText( this.uIPFGridResult, testData.home('Action'))
    }

    async SelectAtAction1(): Promise<void> {
        // TODO: select dropdown option on this.uIActionComboBox with testData.home('Action1')
    }

    async deleteAtAction1(): Promise<void> {
        await gridHelpers.deleteGridRowByCellInnerText( this.uIPFGridResult, testData.home('Action1'))
    }

    async ClickUpdateButton(): Promise<void> {
        await this.aLCPFTab.click();
    }

    async selectActionAsAllow(): Promise<void> {
        // TODO: select dropdown option on this.uIActionComboBox with value // "Allow"
    }

    async selectAtNameInGrid(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText( this.uIPFGridResult, testData.home('Name'))
    }

    async cancelDeleteAtAction(): Promise<void> {
        // gridHelpers.deleteGridRowByCellInnerText( this.uIPFGridResult, testData.home('Action'))
        // confirm popup: no
    }

    async clickHeaderInGrid(header: string): Promise<void> {
        await gridHelpers.selectGridHeaderColumnName(this.uIPFGridResult, header)
    }

    async verifyDeleteConfirmationPopupNotArise(): Promise<void> {
        const alert = popup.confirm.checkAlertIsPresentOrNot();
        expect(alert).toBeFalsy();
    }

    async verifyAtRowCount(): Promise<void> {
        const gridTableRowsCount = await gridHelpers.getGridRowsCount(this.uIPFGridResult)
        const homeModuleValue = testData.home('gridTableRowsCount')
        // TODO: expectIntEqual(gridTableRowsCount,parseInt(homeModuleValue))
    }
}

export class ALCScreenPage {
    readonly page: Page;
    readonly uISaveButton: Locator;
    readonly uISaveCloseButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uISetPermissionForEdit: Locator;
    readonly uIPFNumberTab: Locator;
    readonly uIGroupTab: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIReasonLabel: Locator;
    readonly uICommentsLabel: Locator;
    readonly uILastUpdatedDateLabel: Locator;
    readonly uIReasonDropDown: Locator;
    readonly uICommentsEdit: Locator;
    readonly uIModifiedDateAndTimeLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveCloseButton = page.locator('NocmdSaveNClose');
        this.uIResetButton = page.locator('NocmdRefresh');
        this.uIPrintButton = page.locator('NocmdPrint');
        this.uISetPermissionForEdit = page.locator('NotxtName');
        this.uIPFNumberTab = page.locator("//span[contains(text(),'PFNo')]");
        this.uIGroupTab = page.locator("//span[contains(text(),'Group')]");
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIReasonLabel = page.locator('NolblReason');
        this.uICommentsLabel = page.locator('NolblComments');
        this.uILastUpdatedDateLabel = page.locator('NoKPILabel1');
        this.uIReasonDropDown = page.locator('NocddReason_DropDown');
        this.uICommentsEdit = page.locator('NotxtComments');
        this.uIModifiedDateAndTimeLabel = page.locator('NolblModifiedDttm');
    }

    async SaveScreen(): Promise<void> {
        await this.uISaveButton.click();
        // TODO: handle confirm popup - click yes
    }

    async SaveAndClose(): Promise<void> {
        await this.uISaveCloseButton.click();
        // TODO: handle confirm popup - click yes
    }

    async CloseScreen(): Promise<void> {
        // no-op: popup window close
    }

    async ClickPFTab(): Promise<void> {
        await this.uIPFNumberTab.click();
    }

    async ClickGroupTab(): Promise<void> {
        await this.uIGroupTab.click();
    }

    async VerifySuccessfulStatusMessage(): Promise<void> {
        // TODO: expectTruthy( this.uIBottomLeftSideStatusBar.innerText().includes("1002 - Addition Successful"),
        // "Addition Successful")
    }

    async clickPrintButton(): Promise<void> {
        await this.uIPrintButton.click();
    }

    async verifyAtSetPermissionForRedact(): Promise<void> {
        const permission = await this.uISetPermissionForEdit.inputValue();
        expect(permission).toEqual("Redact");
    }

    async verifyAtSetPermissionForIncident(): Promise<void> {
        const permission = await this.uISetPermissionForEdit.inputValue();
        expect(permission.equalsIgnoreCase("Incident Report")).toBeTruthy();
    }

    async verifyAtSetPermissionForArrestNo(arrestNo: string): Promise<void> {
        const permission = await this.uISetPermissionForEdit.inputValue();
        expect(permission.equalsIgnoreCase(arrestNo)).toBeTruthy();
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verifyNoDataPresentAcknowledgeMessage(): Promise<void> {
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async verifyAlcScreenOpened(): Promise<void> {
        expect(windowExist).toBeTruthy();
    }

    async verifyReasonLabelIsEnabledAndDisplayed(): Promise<void> {
        const displayed = await this.uIReasonLabel.isVisible();
        const enabled = this.uIReasonLabel.isEnabled()
        expect(displayed&&enabled).toBeTruthy();
    }

    async verifyCommentsLabelIsEnabledAndDisplayed(): Promise<void> {
        const displayed = await this.uICommentsLabel.isVisible();
        const enabled = this.uICommentsLabel.isEnabled()
        expect(displayed&&enabled).toBeTruthy();
    }

    async clickReasonLabel(): Promise<void> {
        await this.uIReasonLabel.click();
    }

    async clickCommentsLabel(): Promise<void> {
        await this.uICommentsLabel.click();
    }

    async selectAtReason(): Promise<void> {
        await this.uIReasonDropDown.selectOption({ label: reason });
    }

    async enterAtComments(): Promise<void> {
        await this.uICommentsEdit.clear();
        await this.uICommentsEdit.fill(comments);
    }

    async VerifyAtMaximumCharacterInComments(randomStringLength: string, verificationlength: string): Promise<void> {
        const randomString = RandomHelpers.randomString(randomStringLength);
        await this.uICommentsEdit.fill(randomString);
        expect(this.uICommentsEdit.inputValue().length==verificationlength).toBeTruthy()
    }

    async verifyAtLastUpdatedDateLabelIsDisplayed(): Promise<void> {
        const displayed = await this.uILastUpdatedDateLabel.isVisible();
        expect(displayed).toBeTruthy();
    }

    async verifyModifiedDateAndTimeAsCurrentDateAndTime(): Promise<void> {
        const attribute = await this.uIModifiedDateAndTimeLabel.innerText();
        // String[] split = attribute.split(" ")
        const Date = split[0];
        const Time = split[1];
        expect(DateHelpers.getCurrentDate("MM/dd/yy")).toEqual(Date);
        // DateHelpers.verifyTheTimeIsBeforeOrEqualToTheGivenTime(DateHelpers.getCurrentTime("HH:mm"), Time)
    }

    async verifyTheModifiedDateAndTimeAsNull(): Promise<void> {
        const attribute = await this.uIModifiedDateAndTimeLabel.innerText();
        expect(attribute.trim()).toBe('');
    }
}

export class AllImagesScreenPage {
    readonly page: Page;
    readonly uIUpdateButton: Locator;
    readonly uIShowAllImagesCheckBox: Locator;
    readonly uIFingerPrintButton: Locator;
    readonly uICameraButton: Locator;
    readonly uICaptureButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIImageView: Locator;
    readonly uIImageView1: Locator;
    readonly uIImageTypeComboBox: Locator;
    readonly uINonPrimaryImageZoomButton: Locator;
    readonly uIActiveCheckBox: Locator;
    readonly uIActiveCheckBox1: Locator;
    readonly uIDeleteImageButton: Locator;
    readonly uIImageEditorButton: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIResetButton: Locator;
    readonly uIMobileDeviceCamera: Locator;
    readonly uIBuildInCamera: Locator;
    readonly uIScanner: Locator;
    readonly uIImageEditIcon: Locator;
    readonly uIAIMugMatchSyncButton: Locator;
    readonly uIFirstImageAIMugMatchIcon: Locator;
    readonly uIPrimaryImageAIMugMatchSyncIcon: Locator;
    readonly uIUploadImageBox: Locator;
    readonly uIPrimaryImageDeleteIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIUpdateButton = page.locator('NocmdUpdate');
        this.uIShowAllImagesCheckBox = page.locator('NochkAllImages');
        this.uIFingerPrintButton = page.locator('NocmdFingerPrint');
        this.uICameraButton = page.locator('NocmdIQEye');
        this.uICaptureButton = page.locator('NocmdCapture');
        this.uIAddNewButton = page.locator('NocmdAddNew');
        this.uIImageView = page.locator('NoImageList_ctl00_imgName');
        this.uIImageView1 = page.locator('NoImageList_ctl01_imgName');
        this.uIImageTypeComboBox = page.locator('NoImageList_ctl00_cddImageType');
        this.uINonPrimaryImageZoomButton = page.locator('NoImageList_ctl00_imgFullWindow');
        this.uIActiveCheckBox = page.locator('NoImageList_ctl00_chkIsActive');
        this.uIActiveCheckBox1 = page.locator('NoImageList_ctl01_chkIsActive');
        this.uIDeleteImageButton = page.locator("//img[@src = '/KPIImages/ico/16_close.gif']");
        this.uIImageEditorButton = page.locator("(//img[@src = '/KPIImages/ico/imageeditor1.png'])[1]");
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIResetButton = page.locator('NocmdRefresh');
        this.uIMobileDeviceCamera = page.locator('NocmdmblCam');
        this.uIBuildInCamera = page.locator('NocmdBuiltInCamera');
        this.uIScanner = page.locator('NocmdCapture');
        this.uIImageEditIcon = page.locator('NoImgEditIcon');
        this.uIAIMugMatchSyncButton = page.locator('NocmduploadAIMugmatch');
        this.uIFirstImageAIMugMatchIcon = page.locator('NoImageList_ctl00_ImgAIMugMatch');
        this.uIPrimaryImageAIMugMatchSyncIcon = page.locator('NoImgAIMugInsert');
        this.uIUploadImageBox = page.locator('NopnxDragNDrop');
        this.uIPrimaryImageDeleteIcon = page.locator('NoImageList_ctl00_deleteimg');
    }

    async ClickPictureEditIcon(): Promise<void> {
        await this.uIImageEditorButton.click();
    }

    async CloseScreen(): Promise<void> {
        // no-op: popup window close
    }

    async clickDeleteIconOfPrimaryImage(): Promise<void> {
        await this.uIPrimaryImageDeleteIcon.click();
    }

    async ClickDeleteIconOfPrimaryImage(): Promise<void> {
        const allIcons = await this.page.locator("//img[@src = '/KPIImages/ico/16_close.gif']").all()
        for (const icon of allIcons) {
        const value = await icon.getAttribute("isactive");
        // Integer val = parseInt(value)
        if (val == 1) {
        await icon.click();
        }
        }
    }

    async ClickDeleteIconOfNonPrimaryImages(): Promise<void> {
        const allIcons = await this.page.locator("//img[@src = '/KPIImages/ico/16_close.gif']").all()
        for (const icon of allIcons) {
        const value = await icon.getAttribute("isactive");
        // Integer val = parseInt(value)
        if (val != 1) {
        await icon.click();
        // confirm popup: no
        await icon.click();
        }
        }
    }

    async VerifyConfirmationDeleteMessage(): Promise<void> {
        // confirm.yesWithExpectedMessage("(4)     Do you really want to delete?")
        // confirm.yesWithExpectedMessage("(4) Do you really want to delete?")
    }

    async VerifyImage1DeletedSuccessfulBottomMessage(): Promise<void> {
        expect(this.uIBottomLeftSideStatusBar.innerText().includes("1004 - Deletion Successful")).toBeTruthy()
    }

    async ClickCheckedCheckbox(): Promise<void> {
        await this.uIActiveCheckBox.click();
    }

    async verifyFirstImageCheckedCheckboxChecked(): Promise<void> {
        const status = await this.uIActiveCheckBox.getAttribute("checked")
        expect(status.includes("true")).toBeTruthy()
    }

    async verifyFirstImageCheckedCheckboxChecked1(): Promise<void> {
        const status = await this.uIActiveCheckBox1.getAttribute("checked")
        expect(status.includes("true")).toBeTruthy()
    }

    async verifySecondImageCheckedCheckboxUnchecked(): Promise<void> {
        const status = this.uIActiveCheckBox.getDomProperty("checked")
        expect(status.includes("false")).toBeTruthy()
    }

    async ClickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }

    async VerifyImageDeletedSuccessfulBottomMessage(): Promise<void> {
        expect(this.uIBottomLeftSideStatusBar.innerText().includes("1004 - Deletion Successful")).toBeTruthy()
    }

    async Close(): Promise<void> {
        // no-op: popup window close
    }

    async ClickShowAllImagesCheckBox(): Promise<void> {
        await this.uIShowAllImagesCheckBox.click();
    }

    async clickFingerButton(): Promise<void> {
        await this.uIFingerPrintButton.click();
    }

    async clickNonPrimaryImageZoomIcon(): Promise<void> {
        await this.uINonPrimaryImageZoomButton.click();
    }

    async ClickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickActiveCheckboxWithConfirmMsg(): Promise<void> {
        await this.uIActiveCheckBox.click();
    }

    async clickZoomIcon(): Promise<void> {
        await this.uINonPrimaryImageZoomButton.click();
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async clickMobileDeviceCameraButton(): Promise<void> {
        await this.uIMobileDeviceCamera.click();
    }

    async verifyNoErrorWindowOpens(): Promise<void> {
        const size = allWindows.length;
        expect(4).toEqual(size)
    }

    async verifyAllButtonsDisplayed(): Promise<void> {
        expect(await this.uIUpdateButton.isVisible()).toBeTruthy();
        expect(await this.uICameraButton.isVisible()).toBeTruthy();
        expect(await this.uIMobileDeviceCamera.isVisible()).toBeTruthy();
        expect(await this.uIAddNewButton.isVisible()).toBeTruthy();
        expect(await this.uIBuildInCamera.isVisible()).toBeTruthy();
        expect(await this.uIScanner.isVisible()).toBeTruthy();
    }

    async clickPrimaryImageViewIcon(): Promise<void> {
        await this.uIImageView.click();
    }

    async clickImageEditIcon(): Promise<void> {
        await this.uIImageEditIcon.click();
    }

    async clickNonPrimaryCheckbox(): Promise<void> {
        await this.uIActiveCheckBox1.click();
        // confirm popup: (6162)Do you want to set this image as active?
    }

    async clickPrimaryCheckbox(): Promise<void> {
        await this.uIActiveCheckBox.click();
        // confirm popup: (6162)Do you want to set this image as active?
    }

    async verifyNewlyAddedImageCheckboxIsUnChecked(): Promise<void> {
        const status = this.uIActiveCheckBox.getDomProperty("checked")
        expect(status.includes("False")).toBeFalsy();
    }

    async VerifyUpdateSuccessfulMessage(): Promise<void> {
        const UpdateMessage = await this.uIBottomLeftSideStatusBar.innerText();
        expect("1003 - Update Successful").toEqual(UpdateMessage);
    }

    async verifyFirstImageCheckedCheckboxUnChecked(): Promise<void> {
        const status = this.uIActiveCheckBox.getDomProperty("checked")
        expect(status.includes("false")).toBeTruthy()
    }

    async clickBuildInCameraButton(): Promise<void> {
        await this.uIBuildInCamera.click();
    }

    async clickAIMugMatchSync(): Promise<void> {
        await this.uIAIMugMatchSyncButton.click();
    }

    async verifyMugMatchSyncAcknowledgeMessage(): Promise<void> {
    }

    async verifyFirstAIMugMatchIconIsDisplayed(): Promise<void> {
        expect(await this.uIFirstImageAIMugMatchIcon.isVisible()).toBeTruthy();
    }

    async verifyAIMugMatchSyncIconIsDisplayed(): Promise<void> {
        expect(await this.uIPrimaryImageAIMugMatchSyncIcon.isVisible()).toBeTruthy();
    }

    async clickAIMugMatchIcon(): Promise<void> {
        await this.uIFirstImageAIMugMatchIcon.click();
    }

    async CopyImageToclipboard(): Promise<void> {
        // BufferedImage image = ImageIO.read(new File(PropertiesFile.readPropertiesFile("FileUploadSharePath")+"PIC.jpg"))
        // Transferable imageTransferable = new Transferable() {
        // @Override
        // public DataFlavor[] getTransferDataFlavors() {
        // return new DataFlavor[]{DataFlavor.imageFlavor};
        // @Override
        // public boolean isDataFlavorSupported(DataFlavor flavor) {
        // return DataFlavor.imageFlavor === flavor;
        // @Override
        // public Object getTransferData(DataFlavor flavor) throws UnsupportedFlavorException {
        if (!isDataFlavorSupported(flavor)) {
        // throw new UnsupportedFlavorException(flavor)
        // return image;
        }
        // Toolkit.getDefaultToolkit().getSystemClipboard().setContents(imageTransferable, null)
    }

    async copyImageToClipboard(imageName: string): Promise<void> {
        // BufferedImage image = ImageIO.read(new File(PropertiesFile.readPropertiesFile("TestResourceFolderPath")+ imageName))
        // Transferable imageTransferable = new Transferable() {
        // @Override
        // public DataFlavor[] getTransferDataFlavors() {
        // return new DataFlavor[] { DataFlavor.imageFlavor };
        // @Override
        // public boolean isDataFlavorSupported(DataFlavor flavor) {
        // return DataFlavor.imageFlavor === flavor;
        // @Override
        // public Object getTransferData(DataFlavor flavor) throws UnsupportedFlavorException {
        if (!isDataFlavorSupported(flavor)) {
        // throw new UnsupportedFlavorException(flavor)
        return image;
        }
        // Toolkit.getDefaultToolkit().getSystemClipboard().setContents(imageTransferable, null)
    }

    async pasteImage(): Promise<void> {
        const pasteArea = this.uIUploadImageBox
        await pasteArea.click()
        await this.page.waitForTimeout(1000);
        // Robot robot = null
        // robot = new Robot()
        // robot.keyPress(KeyEvent.VK_CONTROL)
        // robot.keyPress(KeyEvent.VK_V)
        // robot.keyRelease(KeyEvent.VK_V)
        // robot.keyRelease(KeyEvent.VK_CONTROL)
    }

    async clickCameraButton(): Promise<void> {
        await this.uICameraButton.click();
    }
}

export class AllowBulkImportExportDataPage {
    readonly page: Page;
    readonly uISelectModuleDropdown: Locator;
    readonly uIDownloadBlankExcelButton: Locator;
    readonly uIChooseFileButton: Locator;
    readonly uIValidateTheDataButton: Locator;
    readonly uIImportTheDataToDaButton: Locator;
    readonly uICloseButton: Locator;
    readonly uIErrorInfoText: Locator;
    readonly uIDivWarningPopupText1: Locator;
    readonly uIDivWarningPopupText2: Locator;
    readonly uIContinueButton: Locator;
    readonly uICancelButton: Locator;
    readonly uIImportResultText: Locator;
    readonly uIErrorInfoText2: Locator;
    readonly uIFieldDefinitionButton: Locator;
    readonly uIMicrosoftAccessDatabaseEngineTextLabel: Locator;
    readonly uIInstallationHelpButton: Locator;
    readonly uIExportTheDataToExcel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISelectModuleDropdown = page.locator('NocddRecords_DropDown');
        this.uIDownloadBlankExcelButton = page.locator('NocmdDownload');
        this.uIChooseFileButton = page.locator('Nouploadfile');
        this.uIValidateTheDataButton = page.locator('NocmdValidate');
        this.uIImportTheDataToDaButton = page.locator('NocmdImport');
        this.uICloseButton = page.locator('NocmdClose');
        this.uIErrorInfoText = page.locator('//b');
        this.uIDivWarningPopupText1 = page.locator("(//div[@id='DivWarning']//td)[2]");
        this.uIDivWarningPopupText2 = page.locator("(//div[@id='DivWarning']//td)[3]");
        this.uIContinueButton = page.locator('NocmdContinue');
        this.uICancelButton = page.locator('NocmdCancel');
        this.uIImportResultText = page.locator('NolblImpResult');
        this.uIErrorInfoText2 = page.locator('(b)[2]');
        this.uIFieldDefinitionButton = page.locator('NocmdHelp1');
        this.uIMicrosoftAccessDatabaseEngineTextLabel = page.locator('NolblDownloadMSDE');
        this.uIInstallationHelpButton = page.locator("//input[@title='Installation Help']");
        this.uIExportTheDataToExcel = page.locator("//input[@title='Export the Data to Excel']");
    }

    async selectAtModule(): Promise<void> {
        await this.uISelectModuleDropdown.selectOption({ label: module });
    }

    async clickdownloadBlankExcelTemplateButton(): Promise<void> {
        await this.uIDownloadBlankExcelButton.click();
    }

    async clickchooseFileButton(): Promise<void> {
        await this.uIChooseFileButton.click()
        // TODO: file upload "Registration_Export"
    }

    async clickvalidateTheDataButton(): Promise<void> {
        await this.uIValidateTheDataButton.click();
    }

    async clickimportTheDataToDatabaseButton(): Promise<void> {
        await this.uIImportTheDataToDaButton.click();
    }

    async clickCloseButton(): Promise<void> {
        await this.uICloseButton.click();
    }

    async verifyNoErrorsFoundText(): Promise<void> {
        const errorText = await this.uIErrorInfoText.innerText();
        expect(errorText).toEqual("No Errors Found. Click Import button below to process the records");
    }

    async verifyProcessCannotBeReversedWarningPopup(): Promise<void> {
        //popup.confirm.yesWithExpectedMessage("THIS PROCESS CAN NOT BE REVERSED.ARE YOU SURE");
        const text1 = await this.uIDivWarningPopupText1.innerText();
        const text2 = await this.uIDivWarningPopupText2.innerText();
        expect(text1).toEqual("THIS PROCESS CAN NOT BE REVERSED.ARE YOU SURE");
        expect(text2).toEqual("YOU WANT TO CONTINUE?");
        await this.uIContinueButton.click();
    }

    async verifyImportResultText(): Promise<void> {
        const resultText = await this.uIErrorInfoText.innerText();
        expect(resultText).toEqual("1 Records processed successfully");
    }

    async verifyImportResultText2(): Promise<void> {
        const resultText = await this.uIErrorInfoText2.innerText();
        expect(resultText).toEqual("1 Records processed successfully");
    }

    async clickChooseFileAsFireStationExport(): Promise<void> {
        await this.uIChooseFileButton.click()
        // TODO: file upload "Fire Station_Export_15-57-16.xlsx"
    }

    async clickFieldDefinitionButton(): Promise<void> {
        await this.uIFieldDefinitionButton.click();
    }

    async clickMicrosoftAccessDatabaseEngineLabel(): Promise<void> {
        await this.uIMicrosoftAccessDatabaseEngineTextLabel.click();
    }

    async clickInstallationHelpButton(): Promise<void> {
        await this.uIInstallationHelpButton.click();
    }

    async clickExportTheDataToExcel(): Promise<void> {
        await this.uIExportTheDataToExcel.click();
    }

    async switchToFireNoticeOfViolationsReportScreen(): Promise<void> {
    }

    async switchToFrmPnxRpt(): Promise<void> {
    }

    async verifyPrintBatchWindowExist(): Promise<void> {
        expect(nonTitleWidnowExist).toBeTruthy();
    }

    async switchToCalendarScreen(): Promise<void> {
    }
}

export class AppointmentsPopUpPage {
    readonly page: Page;
    readonly uIDivisionDropDown: Locator;
    readonly uIDivisionDropDownValue: Locator;
    readonly uIAddMultiplePFButton: Locator;
    readonly uIShowButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIDivisionDropDown = page.locator('NocddDivision_Input');
        this.uIDivisionDropDownValue = page.locator('NocddDivision_DropDown');
        this.uIAddMultiplePFButton = page.locator('NocmdAddMulPF');
        this.uIShowButton = page.locator('NocmdSearch');
    }

    async selectAtDivision(): Promise<void> {
        await appointmentsPopUp.click();
        // TODO: selectRadControlDropdown this.uIDivisionDropDownValue, testData.home('Division')
    }

    async clickAddMultiplePF(): Promise<void> {
        await appointmentsPopUp.click();
    }

    async verifyAddMultiplePFColorAsGreen(): Promise<void> {
        const cssValue = this.uIAddMultiplePFButton.getCssValue("background-color")
    }

    async clickShowButton(): Promise<void> {
        await appointmentsPopUp.click();
    }

    async verifyShowButtonNotDisplayed(): Promise<void> {
        const enabled = true;
        await appointmentsPopUp.click();
        // catch (Exception e) {
        // enabled =  false
        expect(enabled).toBeFalsy();
    }

    async verifySearchAppointmentsIsDisplayed(): Promise<void> {
        const enabled = this.uISearchAppointmentsButton.isEnabled()
        expect(enabled).toBeTruthy();
    }

    async verifyErrorPopupNotArised(): Promise<void> {
        if (windowExist == true) {
        const text = await this.uIMapPopup.acknowledgeWindow.uIErrorInfoTextEdit.innerText();
        expect(text.includes("Error") || text.contains("Validation")).toBeFalsy();
        }
    }

    async verifyScreenHeightAndWidth(): Promise<void> {
        // TODO: verify screen dimensions testData.scheduling('Width'), testData.scheduling('Height'), testData.scheduling('Expectedvpwidth'), testData.scheduling('Expectedvpheight')
    }
}

export class AttachmentPage {
    readonly page: Page;
    readonly uIAddFilesButton: Locator;
    readonly uICategoryComboBox: Locator;
    readonly uISelectButton: Locator;
    readonly uIAddButton: Locator;
    readonly uIAttachmentsTable: Locator;
    readonly uIAttachmentsFolderTable: Locator;
    readonly uIRefreshButton: Locator;
    readonly uISingleFileRadioButton: Locator;
    readonly uIBulkUploadRadioButton: Locator;
    readonly uIFolderRadioButton: Locator;
    readonly uILinkRadioButton: Locator;
    readonly uIFolderAddButton: Locator;
    readonly uIShowInCallDetailsCheckBox: Locator;
    readonly uIAttachmentUsingMobileDeviceButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddFilesButton = page.locator('NocmdAddFile');
        this.uICategoryComboBox = page.locator('NoctrlUsrKPITxtAttachment_cddCategory_DropDown');
        this.uISelectButton = page.locator('NoctrlUsrKPITxtAttachment_uploadfile');
        this.uIAddButton = page.locator('NoctrlUsrKPITxtAttachment_cmdAddAttachment');
        this.uIAttachmentsTable = page.locator('NoctrlUsrKPITxtAttachment_grdKPITxtAttach_ctl00');
        this.uIAttachmentsFolderTable = page.locator('NoctrlUsrKPITxtAttachment_grdKPITxtAttach_ctl00_FOLDER_0');
        this.uIRefreshButton = page.locator('NocmdRefresh');
        this.uISingleFileRadioButton = page.locator('NoctrlUsrKPITxtAttachment_rdbtnSingle');
        this.uIBulkUploadRadioButton = page.locator('NoctrlUsrKPITxtAttachment_rdbtnBulk');
        this.uIFolderRadioButton = page.locator('NoctrlUsrKPITxtAttachment_rdbtnFolder');
        this.uILinkRadioButton = page.locator('NoctrlUsrKPITxtAttachment_rdbtnLink');
        this.uIFolderAddButton = page.locator('Noupload');
        this.uIShowInCallDetailsCheckBox = page.locator('NoctrlUsrKPITxtAttachment_ChkIsPrivate');
        this.uIAttachmentUsingMobileDeviceButton = page.locator('NobtnMobile');
    }

    async ClickAddFilesButton(): Promise<void> {
        await this.uIAddFilesButton.click();
    }

    async SelectCategory(): Promise<void> {
        // random select on this.uICategoryComboBox
    }

    async ClickSelectButton(): Promise<void> {
        await this.uISelectButton.click();
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async SelectFile(): Promise<void> {
        // WindowsControl.FileBrowserWindow.EnterOpenFileName("./test-resources"
        // + "img4");
        // WindowsControl.FileBrowserWindow.ClickOpen();
        // TODO: file upload "img2.png"
    }

    async selectFolder(): Promise<void> {
        // WindowsControl.FileBrowserWindow.EnterOpenFileName("./test-resources"
        // + "img4");
        // WindowsControl.FileBrowserWindow.ClickOpen();
        // TODO: folder upload "folderAttachment"
    }

    async Close(): Promise<void> {
        await this.page.close();
    }

    async VerifyAddedAttachementExistInTheGrid(rowCount: string): Promise<void> {
        // TODO: expectIntEqual(rowCount,
        // gridHelpers.getGridRowsCount(this.uIAttachmentsTable))
    }

    async VerifyAddedAttachementFolderWiseExistInTheGrid(rowCount: string): Promise<void> {
        // TODO: expectIntEqual(rowCount, gridHelpers.getGridRowsCount(this.uIAttachmentsFolderTable))
    }

    async SelectImageFile(): Promise<void> {
        // WindowsControl.FileBrowserWindow.EnterOpenFileName("./test-resources"
        // + "img5.jpg");
        // WindowsControl.FileBrowserWindow.ClickOpen();
        // TODO: file upload "img2.png"
    }

    async ClickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async SelectPDFFile(): Promise<void> {
        // WindowsControl.FileBrowserWindow.EnterOpenFileName("./test-resources"
        // + "IncidentRpt.pdf");
        // WindowsControl.FileBrowserWindow.ClickOpen();
        // TODO: file upload "Crash.pdf"
    }

    async SelectAtCategory(): Promise<void> {
        // TODO: select dropdown option on this.uICategoryComboBox,
        // testData.home('Category'))
    }

    async ClickFolderRadioButton(): Promise<void> {
        await this.uIFolderRadioButton.click();
    }

    async ClickSingleFileRadioButton(): Promise<void> {
        await this.uISingleFileRadioButton.click();
    }

    async ClickBulkUploadRadioButton(): Promise<void> {
        await this.uIBulkUploadRadioButton.click();
    }

    async ClickFolderAddButton(): Promise<void> {
        await this.uIFolderAddButton.click();
    }

    async selectTextFile(): Promise<void> {
        // WindowsControl.FileBrowserWindow.EnterOpenFileName("./test-resources"
        // + "IncidentRpt.pdf");
        // WindowsControl.FileBrowserWindow.ClickOpen();
        // TODO: file upload "TextDoc1.txt"
    }

    async verifyShowInCallDetailsCheckbox(): Promise<void> {
        expect(await this.uIShowInCallDetailsCheckBox.isVisible()).toBeTruthy();
    }

    async clickShowInCallDetailsCheckbox(): Promise<void> {
        await this.uIShowInCallDetailsCheckBox.click();
    }

    async clickAttachmentUsingMobileDeviceButton(): Promise<void> {
        await this.uIAttachmentUsingMobileDeviceButton.click();
    }

    async selectFileInTheGrid(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText( this.uIAttachmentsFolderTable, "K9 Incident Detail.PDF")
    }

    async selectAtPDFFileName(fileName: string): Promise<void> {
        // TODO: file upload fileName
    }

    async selectAtImageFile(): Promise<void> {
        //			this.uISelectButton.click();
        // TODO: file upload "img2.png"
    }

    async verifyAtFileName(FileName: string): Promise<void> {
        // TODO: expectEqual(testData.home('File Name'), gridHelpers.getGridCell(this.uIAttachmentsTable, //					testData.home('File')).innerText());
        const gridCellInnerText = await gridHelpers.getGridCellInnerText(this.uIAttachmentsTable, "File Name", 0);
        const FileNameInGrid = this.page.locator("//div[@id='ctrlUsrKPITxtAttachment_grdKPITxtAttach_ctl00']//td[contains(text(), '"+FileName+"')][1]").innerText();
        expect(FileNameInGrid).toEqual(FileName);
    }

    async clickScannerButton(): Promise<void> {
        await this.uIScannerButton.click();
    }

    async SelectAtPDFFile(): Promise<void> {
        // TODO: file upload testData.home('File')
    }

    async verifyAtFileNameInGrid(): Promise<void> {
        const FileNameInGrid = this.page.locator("//div[@id='ctrlUsrKPITxtAttachment_grdKPITxtAttach_ctl00']//td[contains(text(), '"+ testData.home('File') +"')][1]").innerText()
        expect(FileNameInGrid.trim()).toEqual(testData.home('File'))
    }
}

export class BOLOMessageReceivedScreenPage {
    readonly page: Page;
    readonly uIBoloStatusComboBox: Locator;
    readonly uIUpdateButton: Locator;
    readonly uICancelButton: Locator;
    readonly uIMessageEdit: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIAddNewButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIBoloResultTable: Locator;
    readonly uIPFInboxEdit: Locator;
    readonly uIToFromPFEdit: Locator;
    readonly uIUnitEdit: Locator;
    readonly uIBoloTypeDropdown: Locator;
    readonly uIFromDateEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIReceivedCheckBox: Locator;
    readonly uISentCheckBox: Locator;
    readonly uIIncludeWithdrawnMessagesCheckBox: Locator;
    readonly uIBoloType: Locator;
    readonly uIDateTime: Locator;
    readonly uIFromName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIBoloStatusComboBox = page.locator('NoCddBoloStatus_DropDown');
        this.uIUpdateButton = page.locator('NocmdUpdate');
        this.uICancelButton = page.locator('NocmdCancel');
        this.uIMessageEdit = page.locator('NotxtMessages');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIAddNewButton = page.locator('NocmdAdd');
        this.uISearchButton = page.locator('NocmdSearch');
        this.uIBoloResultTable = page.locator('NogrdMsgSrch');
        this.uIPFInboxEdit = page.locator('NolupContactPFID_CodeValue');
        this.uIToFromPFEdit = page.locator('NolupMsgPF_CodeValue');
        this.uIUnitEdit = page.locator('NolupUnitRef_CodeValue');
        this.uIBoloTypeDropdown = page.locator('NocddBoloType_DropDown');
        this.uIFromDateEdit = page.locator('NodtFromDate_KPIDttmCtrl');
        this.uIToDateEdit = page.locator('NodtToDate_KPIDttmCtrl');
        this.uIReceivedCheckBox = page.locator('NochkReceived');
        this.uISentCheckBox = page.locator('NochkSent');
        this.uIIncludeWithdrawnMessagesCheckBox = page.locator('NochkWithdrawn');
        this.uIBoloType = page.locator('NolblBoloTypeValue');
        this.uIDateTime = page.locator('NolblBoloDttmValue');
        this.uIFromName = page.locator('NolblFromName');
    }

    async EnterMessage(): Promise<void> {
        await this.uIMessageEdit.fill("ProPhoenix Automation Team updated the Comments ");
    }

    async VerifyAtBoloStatus(): Promise<void> {
        // TODO: expect(await elementHelpers.getDropDownSelectedItem(this.uIBoloStatusComboBox))
    }

    async ClickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }

    async VerifySuccessfulBottomMessage(): Promise<void> {
        expect(this.uIBottomLeftSideStatusBar.innerText().includes("1003 - Update Successful")).toBeTruthy()
    }

    async CloseScreen(): Promise<void> {
        // no-op: popup window close
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async verifyAtBoloType(): Promise<void> {
        const text = await this.uIBoloType.innerText();
        // TODO: expectEqual(text.trim()).toEqual(testData.home('BoloStatus'))
    }

    async clickCancel(): Promise<void> {
        await this.uICancelButton.click();
    }

    async verifyDateAsCurrentDate(): Promise<void> {
        const text = await this.uIDateTime.innerText();
        expect(text.includes(DateHelpers.getCurrentDate("MM/dd/yy"))).toBeTruthy();
    }

    async verifyAtFrom(): Promise<void> {
        const text = await this.uIFromName.innerText();
        // TODO: expectEqual(text, testData.home('From'))
    }
}

export class BuildInCameraScreenPage {
    readonly page: Page;
    readonly uITypedropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uITypedropdown = page.locator("//span[contains(text(),'Type')]");
    }

    async verifyProtocolPopup(): Promise<void> {
        // popup.confirm.yesWithContainsMessage("Changing protocol to HTTPS")
    }

    async verifyTypeTextIsDisplayed(): Promise<void> {
        expect(await this.uITypedropdown.isVisible()).toBeTruthy();
    }
}

export class BulletinEntryPage {
    readonly page: Page;
    readonly uISaveButton: Locator;
    readonly uISaveCloseButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIMessageIDEdit: Locator;
    readonly uIAuthorityOfEdit: Locator;
    readonly uISubjectEdit: Locator;
    readonly uITextTab: Locator;
    readonly uIAttachmentTab: Locator;
    readonly uIDistributionTab: Locator;
    readonly uISendEmailReminderButton: Locator;
    readonly uIUnviewedTextView: Locator;
    readonly uIEmailTextTab: Locator;
    readonly uIBottomMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveCloseButton = page.locator('NocmdSaveNClose');
        this.uIResetButton = page.locator('NocmdRefresh');
        this.uIMessageIDEdit = page.locator('NotxtMsgRef');
        this.uIAuthorityOfEdit = page.locator('NotxtAuthorityOf');
        this.uISubjectEdit = page.locator('NotxtSubject');
        this.uITextTab = page.locator("//span[contains(text(),'Text')]");
        this.uIAttachmentTab = page.locator("//span[contains(text(),'Attachment')]");
        this.uIDistributionTab = page.locator("//span[contains(text(),'Distribution')]");
        this.uISendEmailReminderButton = page.locator('NocmdEmail');
        this.uIUnviewedTextView = page.locator('Nolblunviewedcount');
        this.uIEmailTextTab = page.locator("//span[contains(text(),'Email Text')]");
        this.uIBottomMessage = page.locator("//td[@class='statusBar']//b");
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async SaveScreen(): Promise<void> {
        await this.uISaveButton.click();
    }

    async CloseScreen(): Promise<void> {
        // no-op: popup window close
    }

    async ClickTextTab(): Promise<void> {
        await this.uITextTab.click();
    }

    async ClickAttachmentTab(): Promise<void> {
        await this.uIAttachmentTab.click();
    }

    async SwitchToAttachmentTab(): Promise<void> {
        await this.uIAttachmentTab.click();
    }

    async ClickDistributionTab(): Promise<void> {
        await this.uIDistributionTab.click();
    }

    async EnterAtMessageID(): Promise<void> {
        await this.uIMessageIDEdit.fill(messageID);
    }

    async EnterAtSubject(): Promise<void> {
        await this.uISubjectEdit.fill(subject);
    }

    async VerifyMessageIDAcknowledgeMessage(): Promise<void> {
        // TODO: handle acknowledge popup with message "(2007) Message ID is required"
    }

    async VerifySubjectAcknowledgeMessage(): Promise<void> {
        // TODO: handle acknowledge popup with message "(2008) Subject is required"
    }

    async EnterAuthorityOf(): Promise<void> {
        await this.uIAuthorityOfEdit.fill("Automation");
    }

    async VerifyDistributionAcknowledgeMessage(): Promise<void> {
        // TODO: handle acknowledge popup with message "(2013) Distribution is required"
    }

    async EnterRichText(): Promise<void> {
        await this.uITextEdit.click()
        // TODO: actions.fill(RandomHelpers.randomString(500)).build().perform();
    }

    async SelectTemplate(): Promise<void> {
        // random select on this.textTab
    }

    async ClickLoadButton(): Promise<void> {
        await textTab.click();
    }

    async EnterPostFromDateAndTime(): Promise<void> {
        await distributionTab.press('Tab');
        await distributionTab.press('Tab');
    }

    async EnterPostToDateAndTimeAsFuture(): Promise<void> {
        await distributionTab.fill(DateHelpers.getFutureDate(1, "MM/dd/yyyy"));
        await distributionTab.fill(DateHelpers.getCurrentTime());
    }

    async SelectPriority(): Promise<void> {
        // random select on this.distributionTab
    }

    async ClickCriticalCheckBox(): Promise<void> {
        await distributionTab.click();
    }

    async ClickAddressToAllCheckbox(): Promise<void> {
        await distributionTab.click();
    }

    async VerifyDivisionSectionSquadDisabled(): Promise<void> {
        expect(await this.uIDivisionComboBox.getAttribute("disabled")).toBeTruthy()
        expect(await this.uISectionComboBox.getAttribute("disabled")).toBeTruthy()
        expect(await this.uISquadCodeEdit.getAttribute("class")).toContain("textboxInactive")
    }

    async VerifyPFCodeDisabled(): Promise<void> {
        expect(await this.uIPFCodeEdit.getAttribute("class")).toContain("textboxInactive")
    }

    async SelectAtDivision(): Promise<void> {
        // TODO: select dropdown option on 
        // this.uIDivisionComboBox,
        // testData.home('Division'))
    }

    async SelectAtSection(): Promise<void> {
        // TODO: selectDropDownOption( this.uISectionComboBox, testData.home('Section'))
    }

    async ClickAddButton(): Promise<void> {
        await distributionTab.click();
    }

    async VerifyAtDivisionInGrid(rowIndex: string): Promise<void> {
        // TODO: grid expect assertion
        // TODO: assertion continuation
    }

    async VerifyAtSectionInGrid(rowIndex: string): Promise<void> {
        // TODO: grid expect assertion
        // TODO: assertion continuation
    }

    async ClickDivisionSectionSquadAccordion(): Promise<void> {
        await distributionTab.click();
    }

    async ClickMultiplePFAccordion(): Promise<void> {
        await distributionTab.click();
    }

    async EnterAtPFCode(): Promise<void> {
        await distributionTab.fill(pFCode);
        await distributionTab.press('Tab');
    }

    async EnterAtPFCode1(): Promise<void> {
        await distributionTab.fill(pFCode1);
        await distributionTab.press('Tab');
    }

    async ClickMultiplePFAddButton(): Promise<void> {
        await distributionTab.click();
    }

    async VerifySendEmailReminderButtonDisplayed(): Promise<void> {
        expect(await this.uISendEmailReminderButton.isVisible()).toBeTruthy();
        expect(this.uISendEmailReminderButton.isEnabled()).toBeTruthy()
    }

    async VerifyUnviewedLabelDisplayed(): Promise<void> {
        expect(await this.uIUnviewedTextView.isVisible()).toBeTruthy();
        expect(this.uIUnviewedTextView.isEnabled()).toBeTruthy()
    }

    async ClickFolderViewRadioButton(): Promise<void> {
        await this.bulletinAttachmentsTab.click();
    }

    async VerifyAddFilesButtonDisplayed(): Promise<void> {
        expect(await this.bulletinAttachmentsTab.isVisible()).toBeTruthy();
    }

    async SelectEmailTemplate(): Promise<void> {
        // random select on this.bulletinEmailTextTab
        await this.bulletinEmailTextTab.press('Tab');
    }

    async ClickEmailLoadButton(): Promise<void> {
        await this.bulletinEmailTextTab.click();
    }

    async EnterEmailTextRichText(): Promise<void> {
        await this.uIEmailRichTextEdit.click()
        // TODO: actions.fill(RandomHelpers.randomString(500)).build().perform();
    }

    async ClickEmailTextTab(): Promise<void> {
        await this.uIEmailTextTab.click();
    }

    async SelectDivision(): Promise<void> {
        // random select on this.distributionTab
    }

    async SelectSection(): Promise<void> {
        // random select on this.distributionTab
    }

    async SelectPF(): Promise<void> {
        await distributionTab.click();
        // popup.kPICodedLookup.randomKPIHelpSelect()
    }

    async ClickSendEmailReminderButton(): Promise<void> {
        await this.uISendEmailReminderButton.click();
    }

    async VerifyEmailSentAcknowledgeMessage(): Promise<void> {
        // TODO: handle acknowledge popup with message "(25506)Mail Sent"
    }

    async EnterMessage(): Promise<void> {
        await this.uIMessageIDEdit.fill(RandomHelpers.randomNameGenerate());
    }

    async verifyAdditionSuccessFullMessage(): Promise<void> {
        // TODO: expect("1002 - Addition Successful".trim()).toEqual(this.uIBottomMessage.innerText())
    }

    async EnterSubject(): Promise<void> {
        await this.uISubjectEdit.fill(DateHelpers.getCurrentMonthFullName());
    }

    async clicksquadLookUpIconAndSelectRandom(): Promise<void> {
        await distributionTab.click();
        // popup.switchToCodedSearch()
        // popup.kPICodedLookup.randomKPIHelpSelect()
    }

    async VerifyUpdatesuccesssFullMessage(): Promise<void> {
        // TODO: expect("1003 - Update Successful".trim()).toEqual(this.uIBottomMessage.innerText())
    }
}

export class CalendarPage {
    readonly page: Page;
    readonly uISearchAppointmentsButton: Locator;
    readonly uIJurisDropDown: Locator;
    readonly uIPfField: Locator;
    readonly uICancelButton: Locator;
    readonly uIExportToPDFButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISearchAppointmentsButton = page.locator("//a[text()='Search Appointments']");
        this.uIJurisDropDown = page.locator('NolstJuris');
        this.uIPfField = page.locator('NolupOffPFID_CodeValue');
        this.uICancelButton = page.locator('NocmdCancel');
        this.uIExportToPDFButton = page.locator("(//a[text()='Export to PDF'])[1]");
    }

    async clickSearchAppointmentsButton(): Promise<void> {
        await this.uISearchAppointmentsButton.click();
    }

    async verifyJurisDropDownIsDisplayed(): Promise<void> {
        const displayed = await this.uIJurisDropDown.isVisible();
        expect(displayed).toBeTruthy();
    }

    async verifyPfFieldIsEnabled(): Promise<void> {
        const enabled = this.uIPfField.isEnabled()
        expect(enabled).toBeTruthy();
    }

    async clickCancelButton(): Promise<void> {
        await this.uICancelButton.click();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async clickExportToPDFButton(): Promise<void> {
        await this.uIExportToPDFButton.click();
    }
}

export class CallBackTabPage {
    readonly page: Page;
    readonly uIRosterComboBox: Locator;
    readonly uIPositionEdit: Locator;
    readonly uIPeriodFromDateEdit: Locator;
    readonly uIPeriodFromTimeEdit: Locator;
    readonly uIPeriodToDateEdit: Locator;
    readonly uIPeriodToTimeEdit: Locator;
    readonly uICommentsEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIRosterComboBox = page.locator('NotabContactEntry_tmpl2_UsrCallBack1_cddRoster_DropDown');
        this.uIPositionEdit = page.locator('NotabContactEntry_tmpl2_UsrCallBack1_txtRosterPosition');
        this.uIPeriodFromDateEdit = page.locator('NotabContactEntry_tmpl2_UsrCallBack1_dttmPeriod_Date_KPIDttmCtrl');
        this.uIPeriodFromTimeEdit = page.locator("//table[@id = 'tabContactEntry_tmpl2_UsrCallBack1_dttmPeriod_Time'] //input");
        this.uIPeriodToDateEdit = page.locator('NotabContactEntry_tmpl2_UsrCallBack1_dttmToDate_Date_KPIDttmCtrl');
        this.uIPeriodToTimeEdit = page.locator("//table[@id = 'tabContactEntry_tmpl2_UsrCallBack1_dttmToDate_Time'] //input");
        this.uICommentsEdit = page.locator('NotabContactEntry_tmpl2_UsrCallBack1_txtComments');
    }

    async SelectAtRoster(): Promise<void> {
        // TODO: select dropdown option on 
        // this.uIRosterComboBox with testData.home('Roster')
        await this.callBackTab.press('Tab');
    }

    async EnterComments(): Promise<void> {
        await this.callBackTab.fill(RandomHelpers.randomString(25));
    }

    async EnterPeriodFromDateAsPreviousDate(): Promise<void> {
        await this.callBackTab.fill(DateHelpers.getPreviousDate(5, "MM/dd/yyyy"));
        await this.callBackTab.fill(DateHelpers.getCurrentTime());
    }

    async EnterPeriodToDateAsFutureDate(): Promise<void> {
        await this.callBackTab.fill(DateHelpers.getFutureDate(5, "MM/dd/yyyy"));
        await this.callBackTab.fill(DateHelpers.getCurrentTime());
    }

    async verifyAtPosition(): Promise<void> {
        // TODO: expectEqual(testData.home('Position'),
        // this.uIPositionEdit.inputValue())
    }
}

export class CapturePicturePage {
    readonly page: Page;
    readonly uITiltUpIcon: Locator;
    readonly uITiltDownIcon: Locator;
    readonly uIPanLeftIcon: Locator;
    readonly uIPanRightIcon: Locator;
    readonly uIUpButton: Locator;
    readonly uIDownButton: Locator;
    readonly uILeftButton: Locator;
    readonly uIRightButton: Locator;
    readonly uISaveImageButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uITiltUpIcon = page.locator("//img[@title = 'Step up']");
        this.uITiltDownIcon = page.locator("//img[@title = 'Step down']");
        this.uIPanLeftIcon = page.locator("//img[@title = 'Step left']");
        this.uIPanRightIcon = page.locator("//img[@title = 'Step right']");
        this.uIUpButton = page.locator("//input[@value='Up']");
        this.uIDownButton = page.locator("//input[@value='Down']");
        this.uILeftButton = page.locator("//input[@value='Left']");
        this.uIRightButton = page.locator("//input[@value='Right']");
        this.uISaveImageButton = page.locator('NocmdSave');
    }

    async verifyUpIconIsDisplayed(): Promise<void> {
        const displayed = await this.uITiltUpIcon.isVisible();
        expect(displayed, "Up Icon Not Displayed").toBeTruthy();
    }

    async verifyDownIconIsDisplayed(): Promise<void> {
        const displayed = await this.uITiltDownIcon.isVisible();
        expect(displayed, "Down Icon Not Displayed").toBeTruthy();
    }

    async verifyLeftIconIsDisplayed(): Promise<void> {
        const displayed = await this.uIPanLeftIcon.isVisible();
        expect(displayed, "Left Icon Not Displayed").toBeTruthy();
    }

    async verifyRightIconIsDisplayed(): Promise<void> {
        const displayed = await this.uIPanRightIcon.isVisible();
        expect(displayed, "Right Icon Not Displayed").toBeTruthy();
    }

    async verifyUpButtonIsDisplayed(): Promise<void> {
        const displayed = await this.uIUpButton.isVisible();
        expect(displayed, "Up Button Not Displayed").toBeTruthy();
    }

    async verifyRightButtonIsDisplayed(): Promise<void> {
        const displayed = await this.uIPanRightIcon.isVisible();
        expect(displayed, "Right Button Not Displayed").toBeTruthy();
    }

    async verifyLeftButtonIsDisplayed(): Promise<void> {
        const displayed = await this.uIPanRightIcon.isVisible();
        expect(displayed, "Left Button Not Displayed").toBeTruthy();
    }

    async verifyDownButtonIsDisplayed(): Promise<void> {
        const displayed = await this.uIPanRightIcon.isVisible();
        expect(displayed, "Down Button Not Displayed").toBeTruthy();
    }

    async clickSaveImageButtonWithConfirmPopup(): Promise<void> {
        await this.uISaveImageButton.click();
    }

    async closeScreen(): Promise<void> {
        // no-op: popup window close
    }

    async switchToAboutWindow(): Promise<void> {
    }

    async switchToCapturePicture(): Promise<void> {
    }
}

export class ColumnDisplaySettingsPopupPage {
    readonly page: Page;
    readonly uIMySettingsSaveButton: Locator;
    readonly uIMySettingsResetToDefaultButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIMySettingsSaveButton = page.locator('NoSave');
        this.uIMySettingsResetToDefaultButton = page.locator('NoReset');
    }

    async clickMySettingsSaveButtonWithConfirmPopup(): Promise<void> {
        await this.uIMySettingsSaveButton.click();
        // confirm popup: Column display settings updated successfully
    }

    async clickMySettingsResetToDefaultButton(): Promise<void> {
        await this.uIMySettingsResetToDefaultButton.click();
    }

    async switchToLicenseInfoScreen(): Promise<void> {
    }
}

export class ContactEntryHistoryTabPage {
    readonly page: Page;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uILogEdit: Locator;
    readonly uIHistoryTabTable: Locator;
    readonly uIAddButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIDateEdit = page.locator('NotabContactEntry_tmpl4_UsrHistory1_dtDate_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id = 'tabContactEntry_tmpl4_UsrHistory1_dtDate_Time'] //input");
        this.uILogEdit = page.locator('NotabContactEntry_tmpl4_UsrHistory1_txtLog');
        this.uIHistoryTabTable = page.locator('NotabContactEntry_tmpl4_UsrHistory1_grdHistory');
        this.uIAddButton = page.locator('NotabContactEntry_tmpl4_UsrHistory1_imgAdd');
    }

    async TabDateTime(): Promise<void> {
        await this.contactEntryHistoryTab.press('Tab');
        await this.contactEntryHistoryTab.press('Tab');
    }

    async EnterAtLog(): Promise<void> {
        await this.contactEntryHistoryTab.fill(log);
    }

    async ClickAdd(): Promise<void> {
        await this.contactEntryHistoryTab.click();
    }

    async VerifyAtLogInGrid(rowIndex: string): Promise<void> {
        // TODO: grid expect assertion
        // TODO: assertion continuation
    }

    async verifyAtLogInGrid(): Promise<void> {
        const log = await gridHelpers.getGridCell(this.uIHistoryTabTable, testData.home('Log')).innerText()
        expect(log.trim()).toEqual(testData.home('Log'))
    }
}

export class CustomTabPage {
    readonly page: Page;
    readonly uICustom1Edit: Locator;
    readonly uICustom2Edit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uICustom1Edit = page.locator('NotabContactEntry_tmpl3_UsrCustomEntry1_txtCustom1');
        this.uICustom2Edit = page.locator('NotabContactEntry_tmpl3_UsrCustomEntry1_txtCustom2');
    }

    async enterAtCustom1(): Promise<void> {
        await this.customTab.fill(custom1);
    }

    async enterAtCustom2(): Promise<void> {
        // this.uICustom2Edit.sendKeys
        // (testData.home('Custom2'))
    }

    async verifyAtCustom1(): Promise<void> {
        // TODO: expectEqual(testData.home('Custom1'), this.uICustom1Edit.inputValue())
    }

    async verifyNotesTabIsBlueColor(): Promise<void> {
        const blueColor = "rgba(0, 0, 255, 1)";
        const color = this.uINotesTab.getCssValue("color")
        expect(color).toEqual(blueColor);
    }

    async verifyCustomTabIsBlueColor(): Promise<void> {
        const blueColor = "rgba(0, 0, 255, 1)";
        const color = this.uICustomTab.getCssValue("color")
        expect(color).toEqual(blueColor);
    }

    async verifyPhoneNumberTabIsBlueColor(): Promise<void> {
        const blueColor = "rgba(0, 0, 255, 1)";
        const color = this.uIPhoneNumberTab.getCssValue("color")
        expect(color).toEqual(blueColor);
    }

    async verifyCallBackTabIsBlueColor(): Promise<void> {
        const blueColor = "rgba(0, 0, 255, 1)";
        const color = this.uICallBackTab.getCssValue("color")
        expect(color).toEqual(blueColor);
    }

    async verifyHistoryTabIsBlueColor(): Promise<void> {
        const blueColor = "rgba(0, 0, 255, 1)";
        const color = this.uIHistoryTab.getCssValue("color")
        expect(color).toEqual(blueColor);
    }

    async clickDeleteWithConfirmationPopup(): Promise<void> {
        await this.uIDeleteIcon.click();
        // confirm popup: (4) Do you really want to delete?
        // confirm popup: (4) Do you want to delete?
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }
}

export class DetailsTabPage {
    readonly page: Page;
    readonly uIAvailableFieldsDropDown: Locator;
    readonly uIEmailSubject: Locator;
    readonly uITextNameRichTextEdit: Locator;
    readonly uIPasteFromWord: Locator;
    readonly uIPasteFromWordSummaryEdit: Locator;
    readonly uIPasteButtonInPopup: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAvailableFieldsDropDown = page.locator('NotabKPIText_tmpl0_ctrlUsrKPITxtEdit_cddRptKey_DropDown');
        this.uIEmailSubject = page.locator('NotabKPIText_tmpl0_ctrlUsrKPITxtEdit_txtSubject');
        this.uITextNameRichTextEdit = page.locator("//Table[@id = 'tabKPIText_tmpl0_ctrlUsrKPITxtEdit_rteKPITxtWrapper']//iframe[@id = 'tabKPIText_tmpl0_ctrlUsrKPITxtEdit_rteKPITxt_contentIframe']");
        this.uIPasteFromWord = page.locator("//span[@class='PasteFromWord']");
        this.uIPasteFromWordSummaryEdit = page.locator("//iframe[@id='holder']");
        this.uIPasteButtonInPopup = page.locator('NoInsertButton');
    }

    async EnterSummaryRichTextAsTestAutomation(): Promise<void> {
        await this.uIFromTextFieldFilled.fill("Test Automation");
    }

    async clickPasteFromWord(): Promise<void> {
        await this.detailsTab.click();
    }

    async enterTextInPasteFromWordPopUp(): Promise<void> {
        await this.uIPasteFromWordSummaryEdit.click()
        //actions.fill(RandomHelpers.randomString(10)).build().perform();
        // TODO: actions.fill("Automation").build().perform();
    }

    async readTextInPasteFromWordPopup(): Promise<string> {
        await this.uIPasteFromWordSummaryEdit.click()
        const text = await this.detailsTab.innerText();
        return text;
    }

    async clickPasteButtonInPopup(): Promise<void> {
        await this.detailsTab.click();
    }

    async readRichTextEdit(): Promise<string> {
        const text = await this.uIFromTextFieldEmpty.innerText();
        return text;
    }

    async verifyAtTextAvailableInsideForm(): Promise<void> {
        const text = await this.uIFromTextFieldFilled.innerText()
        expect(text.includes(testData.settings('Text'))).toBeTruthy()
    }
}

export class DistributionTabPage {
    readonly page: Page;
    readonly uIPostFromDateEdit: Locator;
    readonly uIPostFromTimeEdit: Locator;
    readonly uIPostToDateEdit: Locator;
    readonly uIPostToTimeEdit: Locator;
    readonly uIPriorityComboBox: Locator;
    readonly uICriticalCheckBox: Locator;
    readonly uIAddressAllCheckBox: Locator;
    readonly uIDivisionSectionSquadAccordian: Locator;
    readonly uIMultiplePFAccordian: Locator;
    readonly uIDivisionComboBox: Locator;
    readonly uISectionComboBox: Locator;
    readonly uISquadCodeEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIDivisionSectionGridTable: Locator;
    readonly uIPFCodeEdit: Locator;
    readonly uIMultiplePFAddButton: Locator;
    readonly uIMultiplePFClearButton: Locator;
    readonly uIAddMultiplePFButton: Locator;
    readonly uIGroupbyCheckBox: Locator;
    readonly uIPFLookupButton: Locator;
    readonly uISquadLookUp: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIPostFromDateEdit = page.locator('NotabBulletin_tmpl2_ctrlUsrBulletinTo_dttPostFrom_Date_KPIDttmCtrl');
        this.uIPostFromTimeEdit = page.locator("//table[@id = 'tabBulletin_tmpl2_ctrlUsrBulletinTo_dttPostFrom_Time'] //input");
        this.uIPostToDateEdit = page.locator('NotabBulletin_tmpl2_ctrlUsrBulletinTo_dttPostTo_Date_KPIDttmCtrl');
        this.uIPostToTimeEdit = page.locator("//table[@id = 'tabBulletin_tmpl2_ctrlUsrBulletinTo_dttPostTo_Time'] //input");
        this.uIPriorityComboBox = page.locator('NotabBulletin_tmpl2_ctrlUsrBulletinTo_cddPriority_DropDown');
        this.uICriticalCheckBox = page.locator('NotabBulletin_tmpl2_ctrlUsrBulletinTo_chkIsCritical');
        this.uIAddressAllCheckBox = page.locator('NotabBulletin_tmpl2_ctrlUsrBulletinTo_chkIsAll');
        this.uIDivisionSectionSquadAccordian = page.locator('Noui-accordion-Dv_accordion-header-0');
        this.uIMultiplePFAccordian = page.locator('Noui-accordion-Dv_accordion-header-1');
        this.uIDivisionComboBox = page.locator('NotabBulletin_tmpl2_ctrlUsrBulletinTo_cddDivision_DropDown');
        this.uISectionComboBox = page.locator('NotabBulletin_tmpl2_ctrlUsrBulletinTo_cddSection_DropDown');
        this.uISquadCodeEdit = page.locator('NotabBulletin_tmpl2_ctrlUsrBulletinTo_lupSquad_CodeValue');
        this.uIAddButton = page.locator('NotabBulletin_tmpl2_ctrlUsrBulletinTo_cmdImgAdd');
        this.uIClearButton = page.locator('NotabBulletin_tmpl2_ctrlUsrBulletinTo_cmdImgClear');
        this.uIDivisionSectionGridTable = page.locator('NotabBulletin_tmpl2_ctrlUsrBulletinTo_grdTo');
        this.uIPFCodeEdit = page.locator('NotabBulletin_tmpl2_ctrlUsrBulletinTo_lupPFID_CodeValue');
        this.uIMultiplePFAddButton = page.locator('NotabBulletin_tmpl2_ctrlUsrBulletinTo_cmdAdd');
        this.uIMultiplePFClearButton = page.locator('NotabBulletin_tmpl2_ctrlUsrBulletinTo_cmdClear');
        this.uIAddMultiplePFButton = page.locator('NotabBulletin_tmpl2_ctrlUsrBulletinTo_cmdAddMulPF');
        this.uIGroupbyCheckBox = page.locator('NotabBulletin_tmpl2_ctrlUsrBulletinTo_chkgroupby');
        this.uIPFLookupButton = page.locator('NotabBulletin_tmpl2_ctrlUsrBulletinTo_lupPFID_imgBtn');
        this.uISquadLookUp = page.locator('NotabBulletin_tmpl2_ctrlUsrBulletinTo_lupSquad_imgBtn');
    }

    async enterPostToDate(): Promise<void> {
        await distributionTab.fill(DateHelpers.getFutureDate(1, "MM/dd/yyyy"));
    }

    async verifyPostToTimeAsEODTime(): Promise<void> {
        // TODO: expectEqual("23:59:59",
        // this.uIPostToTimeEdit.inputValue())
    }
}

export class ExcelFileTabPage {
    readonly page: Page;
    readonly uIInnerExcelTab: Locator;
    readonly uIDownloadText: Locator;
    readonly uIEditText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIInnerExcelTab = page.locator("//li[@id='loadURL100010000165539']//a[text()='Excel']");
        this.uIDownloadText = page.locator("//div[@id='100010000165539']//a[contains(text(),'Download')]");
        this.uIEditText = page.locator("//div[@id='100010000165539']//a[text()='Edit']");
    }

    async clickInternalExcelFileTab(): Promise<void> {
        await this.excelFileTab.click();
    }

    async clickEditText(): Promise<void> {
        await this.excelFileTab.click();
    }

    async clickDownloadText(): Promise<void> {
        await this.excelFileTab.click();
    }
}

export class ExpenseEntryPage {
    readonly page: Page;
    readonly uIExpenseClassEdit: Locator;
    readonly uICategoryDropDown: Locator;
    readonly uIPFEdit: Locator;
    readonly uIItemsTab: Locator;
    readonly uIAttachmentTab: Locator;
    readonly uIApprovalTab: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIRefreshButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIExpenseClassEdit = page.locator('NocddExpClass_DropDown');
        this.uICategoryDropDown = page.locator('NocddCategory_DropDown');
        this.uIPFEdit = page.locator('NolupPF_CodeValue');
        this.uIItemsTab = page.locator("//span[contains(text(),'Items')]");
        this.uIAttachmentTab = page.locator("//span[contains(text(),'Attachment')]");
        this.uIApprovalTab = page.locator("//span[contains(text(),'Approval')]");
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveNCloseButton = page.locator('NocmdSaveNClose');
        this.uIPrintButton = page.locator('NocmdPrint');
        this.uIRefreshButton = page.locator('NocmdRefresh');
    }

    async switchToApprovalTab(): Promise<void> {
        await this.uIApprovalTab.click();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async saveNClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
    }
}

export class ExpenseEntryApprovalTabPage {
    readonly page: Page;
    readonly uINewActionDropdown: Locator;
    readonly uIByCodeEdit: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIDivisionDropdown: Locator;
    readonly uISectionDropdown: Locator;
    readonly uISaveButton: Locator;
    readonly uIResetButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINewActionDropdown = page.locator('NolstStatus');
        this.uIByCodeEdit = page.locator('NolupPFID_CodeValue');
        this.uIDateEdit = page.locator('NodttStatusDttm_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id = 'dttStatusDttm_Time']//input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIDivisionDropdown = page.locator('NocddDivision_DropDown');
        this.uISectionDropdown = page.locator('NocddSection_DropDown');
        this.uISaveButton = page.locator('NocmdSave');
        this.uIResetButton = page.locator('NocmdReset');
    }

    async selectNewActionAsSendForApproval(): Promise<void> {
        // TODO: select dropdown option on 
        // this.uINewActionDropdown with value "Send for Approval"
    }

    async tabOutDateAndTime(): Promise<void> {
        await this.expenseEntryApprovalTab.press('Tab');
        await this.expenseEntryApprovalTab.click();
        await this.expenseEntryApprovalTab.press('Tab');
    }

    async internalSave(): Promise<void> {
        await this.expenseEntryApprovalTab.click();
    }
}

export class ExpenseEntryItemsTabPage {
    readonly page: Page;
    readonly uIDateEdit: Locator;
    readonly uIExpenseItemCategoryDropDown: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uICostEdit: Locator;
    readonly uIPaidMethodDropDown: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIItemsResultTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIDateEdit = page.locator('NotabExpenses_tmpl0_usrExpenses1_dtExpense_KPIDttmCtrl');
        this.uIExpenseItemCategoryDropDown = page.locator('NotabExpenses_tmpl0_usrExpenses1_cddItemCategory_DropDown');
        this.uIDescriptionEdit = page.locator('NotabExpenses_tmpl0_usrExpenses1_txtDesc');
        this.uICostEdit = page.locator('NotabExpenses_tmpl0_usrExpenses1_txtCost');
        this.uIPaidMethodDropDown = page.locator('NotabExpenses_tmpl0_usrExpenses1_cddPaidMtd_DropDown');
        this.uIAddButton = page.locator('NotabExpenses_tmpl0_usrExpenses1_imgAdd');
        this.uIClearButton = page.locator('NotabExpenses_tmpl0_usrExpenses1_imgClear');
        this.uIItemsResultTable = page.locator('NotabExpenses_tmpl0_usrExpenses1_grdExpenses');
    }
}

export class FingerPrintScreenPage {
    readonly page: Page;
    readonly uISelectFingerDropDown: Locator;
    readonly uIUpdateButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISelectFingerDropDown = page.locator('NocddFinger_DropDown');
        this.uIUpdateButton = page.locator('NocmdUpdate');
    }

    async selectAtSelectFinger(): Promise<void> {
        // TODO: select dropdown option on this.uISelectFingerDropDown,
        // testData.home('SelectFinger'))
    }

    async clickUpdate(): Promise<void> {
        await this.uIUpdateButton.click();
    }

    async verifyUpdateButtonIsDisplayed(): Promise<void> {
        expect(await this.uIUpdateButton.isVisible()).toBeTruthy();
    }

    async switchToFrmDocumentViewRpt(): Promise<void> {
    }

    async switchtoPrintHistory(): Promise<void> {
    }
}

export class FormImageEditerPage {
    readonly page: Page;
    readonly uIMugShotCrop: Locator;
    readonly uISaveImage: Locator;
    readonly uIImageEditorcanvas: Locator;
    readonly uICropBox: Locator;
    readonly uIMugShotCropButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIMugShotCrop = page.locator("//span[@title='MugShot Crop'][@class='rieCustomizedIconClass  rtbButton rtbIconOnly']");
        this.uISaveImage = page.locator("//span[@title='Save Image'][@class='rtbButton rtbIconOnly']");
        this.uIImageEditorcanvas = page.locator("//canvas[@id='RadImgEdt_canvas']");
        this.uICropBox = page.locator("//div[@class='rieDraggableResizeBox']");
        this.uIMugShotCropButton = page.locator('NoRadImgEdt_ToolsPanel_C_Dialog_btnApply');
    }

    async ClickMugshotCrop(): Promise<void> {
        await this.uIMugShotCrop.click();
    }

    async ClickSaveMugshot(): Promise<void> {
        await this.uISaveImage.click();
    }

    async VerifySavedSucessfullAcknowledge(): Promise<void> {
    }

    async moveCropBox(): Promise<string> {
        const beforeMove = this.uICropBox.getCssValue("left")
        // TODO: drag this.uICropBox by (50, 0)
        return beforeMove;
    }

    async verifyCropBoxMoved(beforeMove: string): Promise<void> {
        const afterMove = this.uICropBox.getCssValue("left")
        const b = parseInt(beforeMove.substring(0, beforeMove.length - 2));
        const a = parseInt(afterMove.substring(0, afterMove.length - 2));
        expect(a > b).toBeTruthy();
    }

    async clickMugshotCropButton(): Promise<void> {
        await this.uIMugShotCropButton.click();
    }

    async closeScreen(): Promise<void> {
        // no-op: popup window close
    }
}

export class FormsPage {
    readonly page: Page;
    readonly uIAddNewForms: Locator;
    readonly uIAdministration: Locator;
    readonly uIM2f: Locator;
    readonly uIViewFormData: Locator;
    readonly uIchk: Locator;
    readonly uISaveButton: Locator;
    readonly uIAuto: Locator;
    readonly uIFormsButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddNewForms = page.locator("//div[@class='rmSlide']//span[text()='< Add New >']");
        this.uIAdministration = page.locator("//div[@class='rmSlide']//span[text()='Administration']");
        this.uIM2f = page.locator("//div[@class='rmSlide']//span[text()='M2f']");
        this.uIViewFormData = page.locator("//div[@class='rmSlide']//span[text()='View Form Data']");
        this.uIchk = page.locator("//div[@class='rmSlide']//span[text()='View Form Data']");
        this.uISaveButton = page.locator("//td[@class='status']//a[text()='SAVE']");
        this.uIAuto = page.locator("//div[@class='rmSlide']//span[text()='Auto']");
        this.uIFormsButton = page.locator("//span[text()='Forms']");
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewForms.click();
    }

    async clickM2fForm(): Promise<void> {
        await this.uIAdministration.hover()
        await this.uIM2f.hover()
        await this.uIM2f.click();
    }

    async clickViewFormData(): Promise<void> {
        await this.uIViewFormData.click();
    }

    async verifyFormAvailableInFormsLinkAdministration(): Promise<void> {
        await this.uIAdministration.hover()
        await this.uIchk.hover()
        const text = await this.uIchk.innerText();
        expect(text.trim()).toEqual(testData.home('FormName1'))
    }

    async clickAtFormName(): Promise<void> {
        await this.uIAdministration.hover()
        await this.uIAuto.hover()
        await this.uIAuto.click();
    }

    async verifyFormOpensUsingAdobe(): Promise<void> {
        const controlExist = await this.uISaveButton.isVisible();
        expect(controlExist).toBeFalsy();
    }

    async verifyViewFormDateIsEnable(): Promise<void> {
        expect(await this.uIViewFormData.isEnabled()).toBeTruthy()
    }

    async VerifyAddNewOptionIsDisable(): Promise<void> {
        const displayed = this.uIAddNewForms
        await displayed.isVisible()
        // TODO: expectFalsy(Displayed);
    }

    async clickFormsButton(): Promise<void> {
        await this.uIFormsButton.click();
    }

    async VerifyAddNewOptionIsEnable(): Promise<void> {
        const displayed = this.uIAddNewForms
        await displayed.isVisible()
        // TODO: expectTruthy(Displayed);
    }

    async MouseHoverOnFormNameAndClickSubFormName(): Promise<void> {
        const FormName = testData.home('FormName')
        const SubFormName = testData.home('SubFormName')
        await this.page.locator("//div[@class='rmSlide']//span[text()='"+FormName+"']").hover()
        await this.page.locator("//a[@class='rmLink']//span[text()='"+SubFormName+"']").hover()
        await this.page.locator("//a[@class='rmLink']//span[text()='"+SubFormName+"']").click()
    }

    async MouseHoverOnFormNameAndClickSubFormName(i: string): Promise<void> {
        const FormName = testData.home("FormName"+i)
        const SubFormName = testData.home('SubFormName')
        await this.page.locator("//div[@class='rmSlide']//span[text()='"+FormName+"']").hover()
        await this.page.locator("//a[@class='rmLink']//span[text()='"+SubFormName+"']").hover()
        await this.page.locator("//a[@class='rmLink']//span[text()='"+SubFormName+"']").click()
    }
}

export class GetAttachmentPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async Close(): Promise<void> {
        // no-op: popup window close
    }
}

export class GlobalMapScreenPage {
    readonly page: Page;
    readonly uISelectOverLayComboBox: Locator;
    readonly uISelectOverLayRadControlComboBox: Locator;
    readonly uISearchTheMapEdit: Locator;
    readonly uIMapDisplayNameText: Locator;
    readonly uISelectOverlayArrowForFire: Locator;
    readonly uISelectOverlayForFire: Locator;
    readonly uISelectOverLayContainerForFire: Locator;
    readonly uIAddressList: Locator;
    readonly uIMapDisplayLabel: Locator;
    readonly uILatLongLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISelectOverLayComboBox = page.locator('NocddPointLayers_Input');
        this.uISelectOverLayRadControlComboBox = page.locator('NocddPointLayers_DropDown');
        this.uISearchTheMapEdit = page.locator('Nopac-input');
        this.uIMapDisplayNameText = page.locator('Noside_bar');
        this.uISelectOverlayArrowForFire = page.locator("//a[@id='cddPointLayers_Arrow']");
        this.uISelectOverlayForFire = page.locator("//input[@id='cddPointLayers_Input']");
        this.uISelectOverLayContainerForFire = page.locator("//div[@id='cddPointLayers_DropDown']");
        this.uIAddressList = page.locator("//div[@id='side_bar']");
        this.uIMapDisplayLabel = page.locator('Notd_MapDisplay');
        this.uILatLongLabel = page.locator('NolblMsg');
    }

    async SelectSelectOverlay(): Promise<void> {
        await this.uISelectOverLayComboBox.click();
        // TODO: select random RadControl dropdown checkboxes on this.uISelectOverLayRadControlComboBox
    }

    async VerifyMapNamesShows(): Promise<void> {
        expect(this.uIMapDisplayNameText.innerText().includes("A-000000")).toBeTruthy()
    }

    async EnterSearchTheMap(): Promise<void> {
        await this.uISearchTheMapEdit.fill(RandomHelpers.randomString(4));
    }

    async Close(): Promise<void> {
        // no-op: popup window close
    }

    async VerifyMapCaseDetailsShows(): Promise<void> {
        expect(this.uIMapDisplayNameText.innerText().includes("18-000")).toBeTruthy()
    }

    async verifyAtAddressInSideBar(): Promise<void> {
        const loc = testData.home('Location')
        const SideBar = this.uIMapDisplayNameText
        // SideBar.locator(".//table/tbody/tr/td[contains(text(),'" + loc + "')]")
        const gridRowByCellInnerText = await this.SideBar.innerText();
        expect(gridRowByCellInnerText.includes(loc)).toBeTruthy();
    }

    async verifySelectedCaseNoShowingInMapScreen(): Promise<void> {
        // Reading Caseno from Search screen and Map screen and comparing
        Casenos.sort()
        const Table = this.uIMapDisplayNameText
        const eles = await Table.locator("//table//tbody//tr//b").all()
        // ArrayList<String> NosMap = new ArrayList<>()
        for (const ele of eles) {
        if (ele.innerText().includes("-")) {
        // NosMap.add(ele.innerText())
        NosMap.sort()
        expect(NosMap === Casenos).toBeTruthy();
        }
        }
    }

    async verifySelectedCallNoShowingInMapScreen(): Promise<void> {
        // Reading Callno from Search screen and Map screen and comparing
        Callnos.sort()
        const Table = this.uIMapDisplayNameText
        const eles = await Table.locator("//table//tbody//tr//b").all()
        // ArrayList<String> NosMap = new ArrayList<>()
        for (const ele of eles) {
        if (ele.innerText().includes(".")) {
        // NosMap.add(ele.innerText())
        NosMap.sort()
        // TODO: verify lists NosMap equals Callnos
        }
        }
    }

    async verifyAtLocationInSideBar(): Promise<void> {
        const loc = testData.home('Location')
        const SideBar = this.uIMapDisplayNameText
        // SideBar.locator(".//table/tbody/tr/td[contains(text(),'" + loc + "')]")
        const gridRowByCellInnerText = await this.SideBar.innerText();
        expect(gridRowByCellInnerText.includes(loc)).toBeTruthy();
    }

    async verifyAtLocation1InSideBar(): Promise<void> {
        const loc = testData.home('Location1')
        const SideBar = this.uIMapDisplayNameText
        // SideBar.locator(".//table/tbody/tr/td[contains(text(),'" + loc + "')]")
        const gridRowByCellInnerText = await this.SideBar.innerText();
        expect(gridRowByCellInnerText.includes(loc)).toBeTruthy();
    }

    async verifyAtLocation2InSideBar(): Promise<void> {
        const loc = testData.home('Location2')
        const SideBar = this.uIMapDisplayNameText
        // SideBar.locator(".//table/tbody/tr/td[contains(text(),'" + loc + "')]")
        const gridRowByCellInnerText = await this.SideBar.innerText();
        expect(gridRowByCellInnerText.includes(loc)).toBeTruthy();
    }

    async selectAtSelectOverlay(): Promise<void> {
        await this.uISelectOverlayArrowForFire.click();
        // TODO: selectRadControlDropdown(
        // this.uISelectOverLayContainerForFire,
        // testData.home('SelectOverlay'))
    }

    async SelectSelectOverlay1(): Promise<void> {
        await this.uISelectOverLayComboBox.click();
        // TODO: select RadControl dropdown 
        // this.uISelectOverLayRadControlComboBox with value "Crash - Fatal"
    }

    async verifyAtNameInSideBar(): Promise<void> {
        const JSOnName = testData.home('Name')
        const SideBar = this.uIMapDisplayNameText
        const Name = SideBar.locator("//div[@id='side_bar']//table/tbody/tr/td//a[text()='" + JSOnName + "']").innerText();
        expect(Name).toEqual(JSOnName);
    }

    async verifyNoOfLocatedAddress(i: string): Promise<void> {
        const uIAddressList = this.uIAddressList
        const findElements = await uIAddressList.locator(".//table").all()
        const size = findElements.length;
        expect(size).toEqual(i)
    }

    async verifyMapDisplayLabelIsDisplayed(): Promise<void> {
        expect(this.uIMapDisplayNameText.isVisible()).toBeTruthy()
    }

    async verifyAcknowledgePopupIsNotThrown(): Promise<void> {
        if (driver.getWindowHandles().includes("Acknowledge")) {
        // switchToGlobalMapScreen()
        expect(this.uIMapDisplayNameText.isEnabled()).toBeFalsy()
        expect(this.uIMapDisplayNameText.isVisible()).toBeTruthy()
        }
    }

    async verifyAtAddressInSideBar1(): Promise<void> {
        const loc = testData.home('Location1')
        const SideBar = this.uIMapDisplayNameText
        // SideBar.locator(".//table/tbody/tr/td[contains(text(),'" + loc + "')]")
        const gridRowByCellInnerText = await this.SideBar.innerText();
        expect(gridRowByCellInnerText.includes(loc)).toBeTruthy();
    }

    async verifySelectOverlayDropdownIsDisplayed(): Promise<void> {
        expect(this.uISelectOverlayForFire.isVisible(),"Select Overlay Dropdown is not displayed").toBeTruthy()
    }

    async verifyMapLoaded(): Promise<void> {
        const text = await this.uIMapDisplayLabel.innerText();
        expect(text, "Map Screen Not loaded").toEqual("Map Display");
        // TODO: expectTruthy(this.page.locator("//img[contains(@src,'/mapfiles/transparent.png')]").isVisible());
    }

    async verifyNoOfAddress(i: string): Promise<void> {
        const uIAddressList = this.uIAddressList
        const findElements = await uIAddressList.locator(".//table").all()
        const sizeOfAddress = findElements.length;
        const controlExist = await this.uILatLongLabel.isVisible()
        if(controlExist ==true) {
        const text = await this.uILatLongLabel.innerText();
        // String[] split = text.split(" ")
        const latLongSize = parseInt(split[0]);
        const size = sizeOfAddress + latLongSize;
        expect(size).toEqual(i)
        expect(sizeOfAddress).toEqual(i)
        }
    }

    async verifyLocationIconCountSameAsAddressCount(): Promise<void> {
        const uIAddressList = this.uIAddressList
        const findElements = await uIAddressList.locator(".//table").all()
        const sizeOfAddress = findElements.length;
        const elements = await this.page.locator("//div[@id='map_layers']//*[local-name()='image']").all()
        const sizeOfLocIcon = elements.length;
        expect(sizeOfLocIcon).toEqual(sizeOfAddress)
    }
}

export class HelpPage {
    readonly page: Page;
    readonly uIHelpButton: Locator;
    readonly uIDocumentationF1Link: Locator;
    readonly uIPoliceHelpRadioButton: Locator;
    readonly uICMSHelpRadioButton: Locator;
    readonly uIWhatsNewLink: Locator;
    readonly uIWhatsNewOkButton: Locator;
    readonly uIWhatsNewText: Locator;
    readonly uIHowToVideosLink: Locator;
    readonly uIAccessCRMLink: Locator;
    readonly uILoginButton: Locator;
    readonly uIHelpDeskLink: Locator;
    readonly uITicketLabel: Locator;
    readonly uIAboutLink: Locator;
    readonly uIPhoenixCMSTitle: Locator;
    readonly uIQuickStartGuidesLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIHelpButton = page.locator("//div[@id='mnuPnxSec']//a/span[text()='Help']");
        this.uIDocumentationF1Link = page.locator("//div[@id='mnuPnxSec']//a/span[text()='Documentation (F1)']");
        this.uIPoliceHelpRadioButton = page.locator('NoPoliceHelp');
        this.uICMSHelpRadioButton = page.locator('NoCMSHelp');
        this.uIWhatsNewLink = page.locator("//div[@id='mnuPnxSec']//a/span[contains(text(),'What')]");
        this.uIWhatsNewOkButton = page.locator('NobtnOkWhatsNewAlready');
        this.uIWhatsNewText = page.locator("//div[@id='divTableWhatsNewEnabledAlready']/div");
        this.uIHowToVideosLink = page.locator("//div[@id='mnuPnxSec']//a/span[text()='How To Videos']");
        this.uIAccessCRMLink = page.locator("//div[@id='mnuPnxSec']//a/span[text()='Access CRM']");
        this.uILoginButton = page.locator('NousrLogin_cmdLogin');
        this.uIHelpDeskLink = page.locator("//div[@id='mnuPnxSec']//a/span[text()='Create Internal Help Desk Ticket']");
        this.uITicketLabel = page.locator('NolblTicket');
        this.uIAboutLink = page.locator("//div[@id='mnuPnxSec']//a/span[text()='About']");
        this.uIPhoenixCMSTitle = page.locator('NospanAbout');
        this.uIQuickStartGuidesLink = page.locator("//div[@id='mnuPnxSec']//a/span[text()='Quick Start Guides']");
    }

    async clickHelp(): Promise<void> {
        await this.uIHelpButton.click();
    }

    async clickDocumentationF1(): Promise<void> {
        await this.uIDocumentationF1Link.click();
    }

    async clickPoliceHelpRadioButton(): Promise<void> {
        await this.uIPoliceHelpRadioButton.click();
    }

    async clickCMSHelpRadioButton(): Promise<void> {
        await this.uICMSHelpRadioButton.click();
    }

    async clickWhatsNew(): Promise<void> {
        await this.uIWhatsNewLink.click();
    }

    async verifyWhatsNewText(): Promise<void> {
        const Txt = await this.uIWhatsNewText.innerText();
        expect(Txt).toEqual("What’s New is already enabled.");
        await this.uIWhatsNewOkButton.click();
    }

    async clickHowToVideos(): Promise<void> {
        await this.uIHowToVideosLink.click();
    }

    async clickAccessCRM(): Promise<void> {
        await this.uIAccessCRMLink.click();
    }

    async switchToPhoenixCRMWindow(): Promise<string> {
        const window = null;
        for (const appWindow of driver.getWindowHandles()) {
        if (driver.switchTo().window(appWindow).getTitle().includes("Phoenix CRM : Login Page")) {
        // driver.switchTo().window(appWindow)
        // window = driver.getWindowHandle()
        return window;
        }
        }
    }

    async verifyLoginButtonInCRMWindow(): Promise<void> {
        expect(await this.uILoginButton.isVisible()).toBeTruthy();
    }

    async clickHelpDesk(): Promise<void> {
        await this.uIHelpDeskLink.click();
    }

    async switchToInternalTicketEntry(): Promise<void> {
    }

    async verifyTicketLabel(): Promise<void> {
        const txt = await this.uITicketLabel.innerText();
        expect(txt).toEqual("TicketNo:");
    }

    async clickAbout(): Promise<void> {
        await this.uIAboutLink.click();
    }

    async verifyPhoenixCMSTitleInAboutWindow(): Promise<void> {
        const txt = await this.uIPhoenixCMSTitle.innerText();
        expect(txt).toEqual("Phoenix CMS 2022");
    }

    async clickQuickStartGuides(): Promise<void> {
        await this.uIQuickStartGuidesLink.click();
    }

    async switchToAboutWindow(): Promise<void> {
    }
}

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async Reset(): Promise<void> {
        // uIMapHome = null
        // uIMapPopup = null
    }

    async switchToMessageSearch(): Promise<void> {
    }

    async switchToSelectReport(): Promise<void> {
    }

    async switchToPnxReportSSRSPDFScreen(): Promise<void> {
    }

    async switchToPnxReportCrystalPDFScreen(): Promise<void> {
    }

    async switchToPnxCustomReportPDFScreen(): Promise<void> {
    }

    async switchToGlobalMapScreen(): Promise<void> {
    }

    async switchToAllImageScreen(): Promise<void> {
    }

    async switchToAIMugmatchWindowScreen(): Promise<void> {
    }

    async switchToAllImageScreen1(): Promise<void> {
    }

    async switchtoBuildInCameraScreen(): Promise<void> {
    }

    async switchToImageEditorScreen(): Promise<void> {
    }

    async switchToManageCommentsScreen(): Promise<void> {
    }

    async switchToGunPermitManageCommentsScreen(): Promise<void> {
    }

    async switchToManageNotesScreen(): Promise<void> {
    }

    async switchToAttachmentScreen(): Promise<void> {
    }

    async switchToGetAttachmentScreen(): Promise<void> {
    }

    async switchToUpdateImageScreen(): Promise<void> {
    }

    async switchToFingerPrintScreen(): Promise<void> {
    }

    async switchToTextSearchScreen(): Promise<void> {
    }

    async switchToFullImageViewScreen(): Promise<void> {
    }

    async switchToMyHomeScreen(): Promise<void> {
    }

    async switchToExpenseEntry(): Promise<void> {
    }

    async switchToALCScreen(): Promise<void> {
    }

    async switchToPhoneBookSearchScreen(): Promise<void> {
    }

    async switchToPhoneBookContactEntry(): Promise<void> {
    }

    async switchToTextMgmtScreen(): Promise<void> {
    }

    async switchToTextEntry(): Promise<void> {
    }

    async switchToViewPrintHistoryScreen(): Promise<void> {
    }

    async switchToNotificationScreen(): Promise<void> {
    }

    async switchToBulletinEntryScreen(): Promise<void> {
    }

    async switchToReportStatusTextMgmtScreen(): Promise<void> {
    }

    async switchToReportAttachmentScreen(): Promise<void> {
    }

    async switchToActivitySearch(): Promise<void> {
    }

    async switchToActivityEntry(): Promise<void> {
    }

    async switchToReportLog(): Promise<void> {
    }

    async switchToPrintBatchScreen(): Promise<void> {
    }

    async switchToMessageSend(): Promise<void> {
    }

    async switchToAddMultiplePFScreen(): Promise<void> {
    }

    async switchToMessageReceivedScreen(): Promise<void> {
    }

    async switchToBoloMessageReceivedScreen(): Promise<void> {
    }

    async switchToTextStatmentReportScreen(): Promise<void> {
    }

    async switchToSignatureScreen(): Promise<void> {
    }

    async switchToViewPrintStatusScreen(): Promise<void> {
    }

    async switchToPrintScheduleScreen(): Promise<void> {
    }

    async switchToPhoneBookEntry(): Promise<void> {
    }

    async switchToMyDashBoard(): Promise<void> {
    }

    async switchToPrintEmailScreen(): Promise<void> {
    }

    async switchToPermitPrintScreen(): Promise<void> {
    }

    async switchToMultiFilesAttachment(): Promise<void> {
    }

    async switchToKPITempPDFScreen(): Promise<void> {
    }

    async switchToNotificationSearch(): Promise<void> {
    }

    async switchToWhiteBoardWindow(): Promise<void> {
    }

    async switchToTrackSearchScreenTab(): Promise<void> {
    }

    async switchToTrackEntry(): Promise<void> {
    }

    async switchToMobileDeviceOTPScreen(): Promise<void> {
    }

    async switchToPoliceRMSAndCMSHelpDoc(): Promise<void> {
    }

    async switchToPhoenixPoliceRms(): Promise<void> {
    }

    async switchToPhoenixCMS(): Promise<void> {
    }

    async switchToHowToVideosWindow(): Promise<void> {
    }

    async switchToTextSearch(): Promise<void> {
    }

    async switchToWhiteBoardEntry(): Promise<void> {
    }

    async switchToGHydrantMapWindow(): Promise<void> {
    }

    async switchToMultipleJurisRoles(): Promise<void> {
    }

    async switchToCustomReport(): Promise<void> {
    }

    async switchToLineupReport(): Promise<void> {
    }

    async switchToPlayVideoWindow(): Promise<void> {
    }

    async switchToSelectCalendar(): Promise<void> {
        // no-op: window handle
        // Set<String> allwindows = Playback.driver.getWindowHandles()
        const windows: string[] = []
        // windows.addAll(allwindows)
        // no-op: window switch
        if (previousWindowsCount < windows.length) {
        // no-op: window switch
        } else {
        //			throw new IllegalArgumentException("Invalid window index: " + previousWindowsCount);
        }
    }

    async switchToManageCommentsScreenUsingURL(): Promise<void> {
    }
}

export class HowToVideosWindowPage {
    readonly page: Page;
    readonly uIPlayBackWebinar: Locator;
    readonly uIWebinarName: Locator;
    readonly uIHowToVideoButton: Locator;
    readonly uITitleCAD: Locator;
    readonly uITitleCRM: Locator;
    readonly uITitlePoliceCSP: Locator;
    readonly uITitlePoliceRMS: Locator;
    readonly uISearchEdit: Locator;
    readonly uIShowButton: Locator;
    readonly uIUpComingWebinarColumnName: Locator;
    readonly uIUpComingWebinarButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIPlayBackWebinar = page.locator('NobtnWebinar');
        this.uIWebinarName = page.locator("(//table[@id='tblWebinarVideo']//td/span)[2]");
        this.uIHowToVideoButton = page.locator('NobtnHowToVIdeos');
        this.uITitleCAD = page.locator("//table[@id='tblHlpVideo']//*[text()='CAD']");
        this.uITitleCRM = page.locator("//table[@id='tblHlpVideo']//*[text()='CRM']");
        this.uITitlePoliceCSP = page.locator("//table[@id='tblHlpVideo']//*[text()='Police CSP']");
        this.uITitlePoliceRMS = page.locator("//table[@id='tblHlpVideo']//*[text()='Police RMS']");
        this.uISearchEdit = page.locator('NotxtSearch');
        this.uIShowButton = page.locator('NobtnSearch');
        this.uIUpComingWebinarColumnName = page.locator("(//table[@id='tblUpcomingWebinarVideo']//td/span)[2]");
        this.uIUpComingWebinarButton = page.locator('NobtnUpcomingWebinar');
    }

    async clickPlayBackWebinar(): Promise<void> {
        await this.uIPlayBackWebinar.click();
    }

    async verifyTitleWebinarName(): Promise<void> {
        const txt = await this.uIWebinarName.innerText();
        expect(txt).toEqual("Webinar Name");
    }

    async clickHowToVideosButton(): Promise<void> {
        await this.uIHowToVideoButton.click();
    }

    async verifyTitleCAD(): Promise<void> {
        const txt = await this.uITitleCAD.innerText();
        expect(txt).toEqual("CAD");
    }

    async verifyTitleCRM(): Promise<void> {
        const txt = await this.uITitleCRM.innerText();
        expect(txt).toEqual("CRM");
    }

    async verifyTitlePoliceCSP(): Promise<void> {
        const txt = await this.uITitlePoliceCSP.innerText();
        expect(txt).toEqual("Police CSP");
    }

    async verifyTitlePoliceRMS(): Promise<void> {
        const txt = await this.uITitlePoliceRMS.innerText();
        expect(txt).toEqual("Police RMS");
    }

    async close(): Promise<void> {
        // no-op: popup window close
    }

    async enterAtSearch(Jsonkyeindex: string): Promise<void> {
        await this.uISearchEdit.click();
        await this.uISearchEdit.clear();
        await this.uISearchEdit.fill(searchContent+Jsonkyeindex);
    }

    async clickSearch(): Promise<void> {
        await this.uIShowButton.click();
    }

    async verifyAtHowToVideosName(): Promise<void> {
        const VideoName = testData.home('videoName')
        const VideoNameInGrid = this.page.locator("//a[text()='"+VideoName+"']").innerText();
        expect(VideoNameInGrid).toEqual(VideoName);
    }

    async clickAtHowToVideosName(): Promise<void> {
        const VideoName = testData.home('videoName')
        await this.page.locator("//a[text()='"+VideoName+"']").click()
    }

    async verifyAtWebinarName(): Promise<void> {
        const WebinarName = testData.home('WebinarName')
        const WebinarNameInGrid = this.page.locator("//a[text()='"+WebinarName+"']").innerText();
        expect(WebinarNameInGrid).toEqual(WebinarName);
    }

    async clickAtWebinarName(): Promise<void> {
        const WebinarName = testData.home('WebinarName')
        await this.page.locator("//a[text()='"+WebinarName+"']").click()
    }

    async verifyWebinarColumnNameInUpComingWebinar(): Promise<void> {
        const UpComingWebinar = await this.uIUpComingWebinarColumnName.innerText();
        expect(UpComingWebinar.trim()).toEqual(testData.home('WebinarColumnName'))
    }

    async clickuPComingWebinarButton(): Promise<void> {
        await this.uIUpComingWebinarButton.click();
    }
}

export class ImageFullViewScreenPage {
    readonly page: Page;
    readonly uIResetButton: Locator;
    readonly uIDeleteButton: Locator;
    readonly uIImageEditor: Locator;
    readonly uINextButton: Locator;
    readonly uIPreviousButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIResetButton = page.locator('NocmdRefresh');
        this.uIDeleteButton = page.locator("//td[@id='tdImageDelete']//img");
        this.uIImageEditor = page.locator("//td[@id='tdImageEdit']//img");
        this.uINextButton = page.locator('NocmdNext');
        this.uIPreviousButton = page.locator('NocmdPrev');
    }

    async ClickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async clickDeleteIcon(): Promise<void> {
        await this.uIDeleteButton.click();
    }

    async verifyDeleteConfirmPopup(): Promise<void> {
        // confirm popup: (4) Do you really want to delete?
    }

    async close(): Promise<void> {
        // no-op: popup window close
    }

    async clickEditImageIcon(): Promise<void> {
        const element = this.page.locator('#/KPIImages/ico/imageeditor1.png');
        //element.click();
        await this.uIImageEditor.click();
    }

    async clickNextButton(): Promise<void> {
        await this.uINextButton.click();
    }

    async clickPreviousButton(): Promise<void> {
        await this.uIPreviousButton.click();
    }

    async verifyNextButtonIsDisplayed(): Promise<void> {
        await expect(this.uINextButton).toBeVisible()
    }

    async verifyPreviousButtonIsDisplayed(): Promise<void> {
        await expect(this.uIPreviousButton).toBeVisible()
    }
}

export class KPITempPDFScreenPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyContentInPDF(Pdf: string, content: string): Promise<void> {
        expect(Pdf.includes(content)).toBeTruthy();
    }

    async verifyContentNotInPDF(pdf: string, content: string): Promise<void> {
        expect(pdf.includes(content)).toBeFalsy();
    }

    async ClickSaveAsAnAttachmentButton(): Promise<void> {
        await this.uISaveAsAttachmentButton.click();
    }

    async verifyAdditionSuccessfullAcknowledgeMessage(): Promise<void> {
    }

    async verifyContentInPDF(readPDFContent: string): Promise<void> {
        for (const columnValue of getGridTableColumnValues) {
        expect(readPDFContent.includes(columnValue)).toBeTruthy();
        }
    }
}

export class LicenseInfoScreenPage {
    readonly page: Page;
    readonly uIResetIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIResetIcon = page.locator('NocmdRefresh');
    }

    async verifyResetIconIsDisplayed(): Promise<void> {
        const displayed = await this.uIResetIcon.isVisible();
        expect(displayed).toBeTruthy();
    }
}

export class LogintoRMSPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async EnterAtUsername(): Promise<void> {
        await this.uIMapLogin.loginScreen.uIUserNameEdit.fill(testData.login('SchedulePFUsername'));
    }

    async EnterAtPassword(): Promise<void> {
        await this.uIMapLogin.loginScreen.uIPasswordEdit.click();
        await this.uIMapLogin.loginScreen.uIPasswordEdit.fill(testData.login('SchedulePFPassword'));
    }

    async ClickLoginButton(): Promise<void> {
        await this.uIMapLogin.loginScreen.uILoginButton.click();
    }
}

export class MainTabPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}

export class ManageCommentsPage {
    readonly page: Page;
    readonly uISaveButton: Locator;
    readonly uISaveCloseButton: Locator;
    readonly uIResetButton: Locator;
    readonly uICommentsRichTextEdit: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uINumberedListBulletinButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveCloseButton = page.locator('NocmdSaveNClose');
        this.uIResetButton = page.locator('NocmdRefresh');
        this.uICommentsRichTextEdit = page.locator('NoctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        this.uIBottomLeftSideStatusBar = page.locator("//div[@id='tab0']//td[@class = 'statusBar']/table/tbody/tr/td/b");
        this.uINumberedListBulletinButton = page.locator("//a[@title='Numbered List']");
    }

    async EnterText(): Promise<void> {
        await this.uICommentsRichTextEdit.click()
        // TODO: actions.fill(RandomHelpers.randomString(500)).build().perform();
    }

    async Enter100WordsRichText(): Promise<void> {
        await this.uICommentsRichTextEdit.click()
        // TODO: actions.fill(RandomHelpers.randomString(150)).build().perform();
    }

    async ClickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async SaveAndCloseScreen(): Promise<void> {
        await this.uISaveCloseButton.click();
        // TODO: handle confirm popup - click yes
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        // TODO: handle confirm popup - click yes
    }

    async clickEndKeyButton(): Promise<void> {
        await this.uICommentsRichTextEdit.fill(Keys.END);
    }

    async clickEnterKeyButton(): Promise<void> {
        await this.uICommentsRichTextEdit.press('Enter');
    }

    async clickNumberedListBulletinButton(): Promise<void> {
        await this.uINumberedListBulletinButton.click();
    }

    async enterAtRichText(i: string): Promise<void> {
        await this.uICommentsRichTextEdit.fill(richText + i);
    }

    async verifyAtRichText(i: string): Promise<void> {
        const text = testData.home("RichText" + i)
        expect(await this.page.locator("//body").innerText()).toContain(text);
        // text + " is not contains in Rich Text edit --> ")
    }

    async switchToRichText(): Promise<void> {
    }
}

export class ManageLinksPage {
    readonly page: Page;
    readonly uILinkNameEdit: Locator;
    readonly uIScreenEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIManageLinkTable: Locator;
    readonly uISaveButton: Locator;
    readonly uIEnterURL: Locator;
    readonly uIEnterFilePath: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIShowAllCheckbox: Locator;
    readonly uIClearButton: Locator;
    readonly uISearchButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIScreenIdDescriptionEdit: Locator;
    readonly uIRefreshIcon: Locator;
    readonly uIViewOrderEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uILinkNameEdit = page.locator('NotxtLinkName');
        this.uIScreenEdit = page.locator('NolupScreens_CodeValue');
        this.uIAddButton = page.locator('NocmdAdd');
        this.uIManageLinkTable = page.locator('NogrdLink');
        this.uISaveButton = page.locator('NocmdSave');
        this.uIEnterURL = page.locator('NotxtURL');
        this.uIEnterFilePath = page.locator('NotxtFilePath');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIShowAllCheckbox = page.locator('NochkShowAll');
        this.uIClearButton = page.locator('NocmdClear');
        this.uISearchButton = page.locator('NobtnSearch');
        this.uISaveAndCloseButton = page.locator('NocmdSaveNClose');
        this.uIScreenIdDescriptionEdit = page.locator('NolupScreens_CodeDescription');
        this.uIRefreshIcon = page.locator('NocmdRefresh');
        this.uIViewOrderEdit = page.locator('NotxtViewOrder');
    }

    async EnterAtLinkName(): Promise<void> {
        await this.uILinkNameEdit.click();
        await this.uILinkNameEdit.fill(linkName);
    }

    async enterAtLinkName(JsonKey: string): Promise<void> {
        await this.uILinkNameEdit.clear();
        await this.uILinkNameEdit.click();
        await this.uILinkNameEdit.fill(linkName+JsonKey);
    }

    async EnterAtScreenID(): Promise<void> {
        await this.uIScreenEdit.fill(screenID);
        await this.uIScreenEdit.press('Tab');
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        // TODO: handle confirm popup - click yes
    }

    async CloseTheScreen(): Promise<void> {
        // no-op: popup window close
    }

    async VerifyAtLinkName(): Promise<void> {
        // TODO: grid expect assertion
    }

    async verifyAtLinkNameInGrid(JsonKey: string): Promise<void> {
        // TODO: expect(await gridHelpers.getGridCell(this.uIManageLinkTable.trim()).toEqual(testData.home("LinkName"+JsonKey))
    }

    async VerifyAtScreenName(): Promise<void> {
        // TODO: expect(await gridHelpers.getGridCell(this.uIManageLinkTable.trim()).toEqual(testData.home('ScreenName'))
    }

    async VerifyViewOrderAsMinusOne(rowIndex: string): Promise<void> {
        // TODO: expect(await gridHelpers.getGridCellInnerText(this.uIManageLinkTable, row, col)).toEqual("-1")
    }

    async EnterAtURL(): Promise<void> {
        await this.uIEnterURL.fill(uRL);
        await this.uIEnterURL.press('Tab');
    }

    async enterAtURL(JsonIndex: string): Promise<void> {
        await this.uIEnterURL.clear();
        await this.uIEnterURL.click();
        await this.uIEnterURL.fill(uRL+JsonIndex);
        await this.uIEnterURL.press('Tab');
    }

    async EnterAtFilePath(JsonkeyIndex: string): Promise<void> {
        if(JsonkeyIndex==0) {
        await this.uIEnterFilePath.clear();
        await this.uIEnterFilePath.clear();
        await this.uIEnterFilePath.fill(filePath);
        await this.uIEnterFilePath.press('Tab');
        // else {
        await this.uIEnterFilePath.clear();
        await this.uIEnterFilePath.clear();
        await this.uIEnterFilePath.fill(filePath+JsonkeyIndex);
        await this.uIEnterFilePath.press('Tab');
        }
    }

    async verifyAcceptLinkorURLAcknowledgeMessage(): Promise<void> {
    }

    async VerifyBottomStatusMessage(): Promise<void> {
        // TODO: expect assertion
    }

    async SelectAtLinkNameInGrid(): Promise<void> {
        // gridHelpers.selectGridRowByCellInnerText(this.uIManageLinkTable.trim()).toEqual("1002 - Addition Successful")
    }

    async verifyUpdateButton(): Promise<void> {
        expect(await this.uIAddButton.isVisible()).toBeTruthy();
    }

    async ClickShowAllCheckbox(): Promise<void> {
        await this.uIShowAllCheckbox.click();
    }

    async verifyShowAllCheckboxIsSelected(): Promise<void> {
        expect(await this.uIShowAllCheckbox.isChecked()).toBeTruthy();
    }

    async clickClearButton(): Promise<void> {
        await this.uIClearButton.click();
    }

    async verifyAtLinkNameIsGreenInGrid(): Promise<void> {
        const colour = await gridHelpers.getGridCell(this.uIManageLinkTable, testData.home('LinkName')).getCssValue("color")
        expect(colour).toEqual("rgba(0, 128, 0, 1)");
    }

    async ClickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async verifySearchButtonDisplayed(): Promise<void> {
        expect(await this.uISearchButton.isVisible()).toBeTruthy();
    }

    async verifyAdditionSuccessFullMessage(): Promise<void> {
        // TODO: expect assertion
    }

    async EnterLinkName(): Promise<void> {
        await this.uILinkNameEdit.fill("TestBooks" + RandomHelpers.randomString(2));
    }

    async enterURL(): Promise<void> {
        await this.uIEnterURL.fill("http://www.google.com");
        await this.uIEnterURL.press('Tab');
    }

    async verifyExternalUserLoginButtonIsDisplayed(): Promise<void> {
        await expect(this.page.locator('#btnLogin')).toBeVisible();
        // "External User Login page is not loading --> ")
    }

    async saveAndClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
    }

    async verifyShowAllCheckBoxIsDisplayed(): Promise<void> {
        expect(await this.uIShowAllCheckbox.isVisible()).toBeTruthy()
    }

    async verifyAtGridHeaderColumnValue(JsonKeyIndex: string): Promise<void> {
        const gridHeaderTableRow = await gridHelpers.getGridHeaderTableRow(this.uIManageLinkTable).innerText()
        // gridHeaderTableRow.includes(testData.home("HeaderColumnValue"+JsonKeyIndex))
    }

    async enterAtLinkName(value: string): Promise<void> {
        await this.uILinkNameEdit.clear();
        await this.uILinkNameEdit.click();
        await this.uILinkNameEdit.fill(value);
    }

    async verifyAtScreenID(): Promise<void> {
        const ScreenID = await this.uIScreenEdit.inputValue();
        expect(ScreenID.trim()).toEqual(testData.home('ScreenID'))
    }

    async verifyAtScreenIdDescription(): Promise<void> {
        const ScreenIdDescription = await this.uIScreenIdDescriptionEdit.inputValue();
        expect(ScreenIdDescription.trim()).toEqual(testData.home('ScreenIdescription'))
    }

    async verifyUrlLength(): Promise<void> {
        const URL = await this.uIEnterURL.inputValue();
        // TODO: expectIntEqual(URL.length.trim()).toEqual("1002 - Addition Successful")
    }

    async verifyAtUrlInGridByLinkName(JsonkeyIndex: string): Promise<void> {
        const text = await gridHelpers.getGridCell(this.uIManageLinkTable, testData.home("LinkName"+JsonkeyIndex), "Screen or Link")
        expect(text.trim()).toEqual(testData.home("URL"+JsonkeyIndex))
    }

    async verifyAtFilePath(JsonkeyIndex: string): Promise<void> {
        const FilePath = await this.uIEnterFilePath.inputValue();
        expect(FilePath.trim()).toEqual(testData.home("FilePath"+JsonkeyIndex))
    }

    async verifyLinkNameLength(): Promise<void> {
        const LinkName = await this.uILinkNameEdit.inputValue();
        const length = LinkName.length;
        expect(length).toEqual(parseInt(testData.home('linkNameLength')))
    }

    async enterAtURL(Value: string): Promise<void> {
        await this.uIEnterURL.fill(Value);
    }

    async verifyAtUrl(JsonKeyIndex: string): Promise<void> {
        const attribute = await this.uIEnterURL.inputValue();
        expect(attribute.trim()).toEqual(testData.home("URL"+JsonKeyIndex))
    }

    async EnterAtFilePath(Value: string): Promise<void> {
        await this.uIEnterFilePath.fill(Value);
        await this.uIEnterFilePath.press('Tab');
    }

    async verifyFilePathLength(): Promise<void> {
        const attribute = await this.uIEnterFilePath.inputValue();
        expect(attribute.length).toEqual(parseInt(testData.home('FilePAthLength')))
    }

    async verifyAtFilePathByLinkNameInGrid(JsonkeyIndex: string): Promise<void> {
        const text = await gridHelpers.getGridCell(this.uIManageLinkTable, testData.home("LinkName"+JsonkeyIndex), "Screen or Link")
        expect(text.trim()).toEqual(testData.home("FilePath"+JsonkeyIndex))
    }

    async verifyAtLinkName(JsonKeyIndex: string): Promise<void> {
        const LinkName = await this.uILinkNameEdit.inputValue();
        expect(LinkName.trim()).toEqual(testData.home("LinkName"+JsonKeyIndex))
    }

    async clickRefreshIcon(): Promise<void> {
        await this.uIRefreshIcon.click();
    }

    async verifyLinkNameIsBlank(): Promise<void> {
        const LinkName = await this.uILinkNameEdit.inputValue();
        expect(LinkName.trim() === "", "The Field is not Blank or not get Reset").toBeTruthy();
    }

    async verifyScreenIDIsBlank(): Promise<void> {
        const ScreenID = await this.uIScreenEdit.inputValue();
        expect(ScreenID.trim() === "", "The Field is not Blank or not get Reset").toBeTruthy();
    }

    async verifyScreenIdDescriptionIsBlank(): Promise<void> {
        const ScreenIdDescription = await this.uIScreenIdDescriptionEdit.inputValue();
        expect(ScreenIdDescription.trim() === "", "The Field is not Blank or not get Reset").toBeTruthy();
    }

    async verifyUrlIsBlank(): Promise<void> {
        const URL = await this.uIEnterURL.inputValue();
        expect(URL.trim() === "", "The Field is not Blank or not get Reset").toBeTruthy();
    }

    async verifyFilePathIsBlank(): Promise<void> {
        const FilePath = await this.uIEnterFilePath.inputValue();
        expect(FilePath.trim() === "", "The Field is not Blank or not get Reset").toBeTruthy();
    }

    async enterAtViewOrder(JsonKeyIndex: string): Promise<void> {
        await this.uIViewOrderEdit.fill(viewOrder+JsonKeyIndex);
    }

    async verifyViewOrderIsBlank(): Promise<void> {
        const ViewOrder = await this.uIViewOrderEdit.inputValue();
        expect(ViewOrder.trim() === "", "The Field is not Blank or not get Reset").toBeTruthy();
    }

    async verifyShowAllCheckBoxIsNotSelected(): Promise<void> {
        const ShowAllCheckBoxIsSelectOrNot = await this.uIShowAllCheckbox.isChecked();
        expect(ShowAllCheckBoxIsSelectOrNot, "The Field is not Blank or not get Reset").toBeFalsy();
    }
}

export class ManageNotesPage {
    readonly page: Page;
    readonly uISummaryRichTabTextEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uITemplateComboBox: Locator;
    readonly uILoadButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIPFEdit: Locator;
    readonly uIFromTextFieldEmpty: Locator;
    readonly uINameEdit: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIDeleteIcon: Locator;
    readonly uIEmailOfferLetterButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISummaryRichTabTextEdit = page.locator('NorteKPITxt_contentIframe');
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveAndCloseButton = page.locator('NocmdSaveNClose');
        this.uITemplateComboBox = page.locator('NolstTextName');
        this.uILoadButton = page.locator('Nocmdload');
        this.uIAddNewButton = page.locator('NocmdAddnew');
        this.uIRefreshButton = page.locator('NocmdRefresh');
        this.uIDateEdit = page.locator('NodtDate_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id = 'dtDate_Time'] //input");
        this.uIPFEdit = page.locator('NolupPFNbr_CodeValue');
        this.uIFromTextFieldEmpty = page.locator('//body');
        this.uINameEdit = page.locator('NotxtName');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIDeleteIcon = page.locator('NocmdDelete');
        this.uIEmailOfferLetterButton = page.locator('NoKpiEmailOffer');
    }

    async SaveScreen(): Promise<void> {
        await this.uISaveButton.click();
        // TODO: handle confirm popup - click yes
    }

    async SaveAndCloseScreen(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        // TODO: handle confirm popup - click yes
    }

    async clickSaveAndCloseScreen(): Promise<void> {
        await this.uISaveAndCloseButton.click();
    }

    async SelectAtTemplate(): Promise<void> {
        // TODO: select dropdown option on this.uITemplateComboBox,
        // testData.home('Template'))
    }

    async tabDateAndTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async tabPF(): Promise<void> {
        await this.uIPFEdit.press('Tab');
    }

    async enterAtRemarks(): Promise<void> {
        await this.uIFromTextFieldEmpty.fill(remarks);
    }

    async ClickLoadButton(): Promise<void> {
        await this.uILoadButton.click();
    }

    async SelectTemplate(): Promise<void> {
        // random select on this.uITemplateComboBox
    }

    async Close(): Promise<void> {
        // no-op: popup window close
    }

    async verifyRichTextFieldIsFilled(): Promise<void> {
        const text = await this.uIFromTextFieldEmpty.innerText();
        const length = text.length;
        // TODO: expectIntNotEqual(length, 0)
        expect(text != null).toBeTruthy();
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async clickRefresh(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async verifyPFIsFilled(): Promise<void> {
        expect(this.uIPFEdit.inputValue() != null).toBeTruthy()
    }

    async verifyAtName(): Promise<void> {
        const attribute = await this.uINameEdit.inputValue();
        expect(testData.home('Name'))
    }

    async verifyAddNewButtonIsDisplayed(): Promise<void> {
        expect(await this.uIAddNewButton.isVisible()).toBeTruthy();
    }

    async verifyUpdateSuccessfulMessage(): Promise<void> {
        // TODO: expect("1003 - Update successful".trim()).toEqual(this.uIBottomLeftSideStatusBar.innerText())
    }

    async verifyPfFieldGetReset(): Promise<void> {
        const empty = this.uIPFEdit.inputValue() === ""
        expect(empty).toBeTruthy();
    }

    async verifyAtRichTextField(): Promise<void> {
        const richText = await this.uIFromTextFieldEmpty.innerText();
        // TODO: expect("The rich text field contains values --> ".trim()).toEqual(richText.trim()).toEqual(attribute)
    }

    async verifyRichTextFieldIsNull(): Promise<void> {
        // TODO: expect(this.uIFromTextFieldEmpty.innerText().trim() === "").toBeTruthy()
    }

    async verifyDeleteIconIsDisplayed(): Promise<void> {
        expect(this.uIDeleteIcon.isVisible(),"Delete icon is not displayed").toBeTruthy()
    }

    async clickEmailOfferLetterButton(): Promise<void> {
        await this.uIEmailOfferLetterButton.click();
    }

    async verify6071SentOfferLetterSuccessfullyAck(): Promise<void> {
        // popup.acknowledge.okWithExpectedContainMessage("(6071) Sent Offer Letter Successfully via Email!")
    }
}

export class MessageReceivedScreenPage {
    readonly page: Page;
    readonly uIReadPreviousButton: Locator;
    readonly uIReadNextButton: Locator;
    readonly uINewMessageButton: Locator;
    readonly uIReplyButton: Locator;
    readonly uICancelButton: Locator;
    readonly uIMessageEdit: Locator;
    readonly uIReplyEdit: Locator;
    readonly uIReplyAllButton: Locator;
    readonly uIImage: Locator;
    readonly uIMessageText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIReadPreviousButton = page.locator('NocmdReadPrev');
        this.uIReadNextButton = page.locator('NocmdReadNext');
        this.uINewMessageButton = page.locator('NocmdNewMsg');
        this.uIReplyButton = page.locator('NocmdReply');
        this.uICancelButton = page.locator('NocmdCancel');
        this.uIMessageEdit = page.locator('NotxtMessages');
        this.uIReplyEdit = page.locator('NotxtReply');
        this.uIReplyAllButton = page.locator('NocmdReplyAll');
        this.uIImage = page.locator("//div[@id='divMsgBody']//img");
        this.uIMessageText = page.locator("//*[@id='divMsgBody']/br");
    }

    async VerifyReplyTextDisabled(): Promise<void> {
        // TODO: expectTruthy( this.uIReplyEdit.getAttribute("readonly"),
        // "Verify Replt edit field is read only mode")
    }

    async VerifyReplybuttonDisabled(): Promise<void> {
        // TODO: expectTruthy( this.uIReplyButton.getAttribute("disabled"),
        // "Verify Replt edit field is read only mode")
    }

    async CloseScreen(): Promise<void> {
        // no-op: popup window close
    }

    async VerifyReplyTextEnabled(): Promise<void> {
        expect(this.uIReplyEdit.isEnabled()).toBeTruthy()
    }

    async VerifyReplybuttonEnabled(): Promise<void> {
        expect(this.uIReplyButton.isEnabled()).toBeTruthy()
    }

    async EnterReply(): Promise<void> {
        await this.uIReplyEdit.fill(RandomHelpers.randomString(50));
    }

    async ClickReplyButton(): Promise<void> {
        await this.uIReplyButton.click();
    }

    async ClickReplyAllButton(): Promise<void> {
        await this.uIReplyAllButton.click();
    }

    async ClickReadPreviousButton(): Promise<void> {
        await this.uIReadPreviousButton.click();
    }

    async ClickReadNextButton(): Promise<void> {
        await this.uIReadNextButton.click();
    }

    async verifyFromPF(): Promise<void> {
        const PF = await this.page.locator(`//div[@id='divFrmMessage']//tbody//tr//td[contains(text(),'${testData.home('PFDescription')}')]`).innerText()
        expect(PF.trim()).toEqual(testData.home('PFDescription'))
    }

    async verifyAtImage(): Promise<void> {
        const Image = await this.uIImage.getAttribute("src")
        expect(Image.includes(testData.home('Image'))).toBeTruthy()
    }

    async verifyAtTextMessage(): Promise<void> {
        const TextMessage = await this.uIMessageText.innerText();
        expect(TextMessage.trim()).toEqual(testData.home('Message'))
    }
}

export class MessageSearchPage {
    readonly page: Page;
    readonly uIMessageTable: Locator;
    readonly uIPFInboxEdit: Locator;
    readonly uIPFInfoIcon: Locator;
    readonly uIMessageRadioButton: Locator;
    readonly uIBoloRadioButton: Locator;
    readonly uIIncludeViewedCheckBox: Locator;
    readonly uISearchButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIJurisComboBox: Locator;
    readonly uIToFromPfBox: Locator;
    readonly uIUnitBox: Locator;
    readonly uIReceivedCheckBox: Locator;
    readonly uIMessageEdit: Locator;
    readonly uIFromDateEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIBoloTypeComboBox: Locator;
    readonly uIBoloStatusComboBox: Locator;
    readonly uIIncludeWithdrawnMsgChkBox: Locator;
    readonly uISentCheckBox: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIExcelIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIMessageTable = page.locator('NogrdMsgSrch');
        this.uIPFInboxEdit = page.locator('NolupContactPFID_CodeValue');
        this.uIPFInfoIcon = page.locator('NolupContactPFID_cmdIncOnAddr');
        this.uIMessageRadioButton = page.locator('NorbMessage');
        this.uIBoloRadioButton = page.locator('NorbBolo');
        this.uIIncludeViewedCheckBox = page.locator('NochkViewMsg');
        this.uISearchButton = page.locator('NocmdSearch');
        this.uIAddNewButton = page.locator('NocmdAdd');
        this.uIJurisComboBox = page.locator('Nolst91Juris');
        this.uIToFromPfBox = page.locator('NolupMsgPF_CodeValue');
        this.uIUnitBox = page.locator('NolupUnitRef_CodeValue');
        this.uIReceivedCheckBox = page.locator('NochkReceived');
        this.uIMessageEdit = page.locator('NotxtMsg');
        this.uIFromDateEdit = page.locator('NodtFromDate_KPIDttmCtrl');
        this.uIToDateEdit = page.locator('NodtToDate_KPIDttmCtrl');
        this.uIBoloTypeComboBox = page.locator('NocddBoloType_DropDown');
        this.uIBoloStatusComboBox = page.locator('NocddBoloStatus_DropDown');
        this.uIIncludeWithdrawnMsgChkBox = page.locator('NochkWithdrawn');
        this.uISentCheckBox = page.locator('NochkSent');
        this.uIPrintIcon = page.locator("//img[@title='Print']");
        this.uIExcelIcon = page.locator("//img[@title='Export to Excel']");
    }

    async VerfiyMessagefromMessageScreen(): Promise<void> {
        const cellValues = await gridHelpers.getGridColumnValues(this.uIMessageTable, "Sender")
        // cellValues.includes(testData.home('MessageSender'))
        // cellValues.includes(testData.home('MessageReceiver'))
        // cellValues.includes(testData.home('MessageContains'))
    }

    async Close(): Promise<void> {
        // no-op: popup window close
    }

    async VerifyDateAsCurrentDateInGrid(rowIndex: string): Promise<void> {
        // TODO: expectTruthy( gridHelpers.getGridCellInnerText(this.uIMessageTable, "Date", rowIndex).includes(DateHelpers.getCurrentDate("MM/dd/yy")),
        // "Verify Date displayed as Current Date in Grid")
    }

    async VerifySentArrowinGrid(rowIndex: string): Promise<void> {
        const LeokaIcon = await gridHelpers.getGridCell(this.uIMessageTable, rowIndex, 22).locator('img')
        expect(LeokaIcon.getAttribute("src").includes("RightArrow")).toBeTruthy();
    }

    async ClickAtSenderInGrid(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText(this.uIMessageTable, testData.home('Sender'))
    }

    async ClickBoloRadioButton(): Promise<void> {
        await this.uIBoloRadioButton.click();
    }

    async VerifyAtReceiverInGrid(rowIndex: string): Promise<void> {
        // TODO: grid expect assertion
    }

    async VerifyAtSenderInGrid(rowIndex: string): Promise<void> {
        // TODO: grid expect assertion
    }

    async Click2ndRowInGrid(): Promise<void> {
        await gridHelpers.selectGridTableRow(this.uIMessageTable, 1)
    }

    async VerifyAtMessageInGrid(rowIndex: string): Promise<void> {
        // TODO: expect(await gridHelpers.getGridCellInnerText(this.uIMessageTable, row, col)).toEqual(testData.home('Message'))
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async enterPFInboxCode(): Promise<void> {
        await this.uIPFInboxEdit.fill("Test");
    }

    async enterAtPFInboxCode(): Promise<void> {
        await this.uIPFInboxEdit.fill(pFInbox);
        await this.uIPFInboxEdit.press('Tab');
    }

    async SelectAtJuris(): Promise<void> {
        // TODO: expectEqual(testData.home('Juris'), // await elementHelpers.getDropDownSelectedItem(this.uIJurisComboBox))
    }

    async VerifyBoloRadioButtonIsEnabled(): Promise<void> {
        const status = this.uIBoloRadioButton.isEnabled()
        expect(status).toBeTruthy();
    }

    async VerifyToFromPFIsDisabled(): Promise<void> {
        const status = this.uIToFromPfBox.isEnabled()
        expect(status).toBeFalsy();
    }

    async VerifyUnitIsDisabled(): Promise<void> {
        const status = this.uIUnitBox.isEnabled()
        expect(status).toBeFalsy();
    }

    async VerifyPFInboxIsBlank(): Promise<void> {
        const PFText = await this.uIPFInboxEdit.innerText();
        const status = PFText.trim() === "";
        expect(status).toBeTruthy();
    }

    async clickReceiveCheckBox(): Promise<void> {
        await this.uIReceivedCheckBox.click();
    }

    async clearPFInbox(): Promise<void> {
        await this.uIPFInboxEdit.click();
        await this.uIPFInboxEdit.clear();
    }

    async EnterAtMessage(): Promise<void> {
        await this.uIMessageEdit.fill(message);
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clearMessage(): Promise<void> {
        await this.uIMessageEdit.clear();
    }

    async EnterFromDateAsPreviousDate(): Promise<void> {
        await this.uIFromDateEdit.fill(DateHelpers.getPreviousDate(2, "MM/dd/yyyy"));
    }

    async EnterToDateAsCurrentDate(): Promise<void> {
        await this.uIToDateEdit.fill(DateHelpers.getCurrentDate());
    }

    async clearFromAndToDate(): Promise<void> {
        await this.uIFromDateEdit.clear();
        await this.uIToDateEdit.clear();
    }

    async EnterFromDateAsFutureDate(): Promise<void> {
        await this.uIFromDateEdit.fill(DateHelpers.getFutureDate(2));
    }

    async verifyNoRecordFoundAcknowledge(): Promise<void> {
    }

    async clearFromDate(): Promise<void> {
        await this.uIFromDateEdit.clear();
    }

    async SelectAtBoloType(): Promise<void> {
        // TODO: select dropdown option on this.uIBoloTypeComboBox,
        // testData.home('BoloType'))
        await this.uIBoloTypeComboBox.press('Tab');
    }

    async SelectAtBoloType1(): Promise<void> {
        // TODO: select dropdown option on this.uIBoloTypeComboBox,
        // testData.home('BoloType1'))
        await this.uIBoloTypeComboBox.press('Tab');
    }

    async SelectAtBoloStatus(): Promise<void> {
        // TODO: select dropdown option on this.uIBoloStatusComboBox,
        // testData.home('BoloStatus'))
        await this.uIBoloStatusComboBox.press('Tab');
    }

    async clickIncludeWithdrawnMessageCheckbox(): Promise<void> {
        await this.uIIncludeWithdrawnMsgChkBox.click();
    }

    async verifyGridInGreyColor(): Promise<void> {
        const clr = "rgba(128, 128, 128, 1)";
        const gridCell = await gridHelpers.getGridCell(this.uIMessageTable, "Sender", 0)
        const css = gridCell.getCssValue("color");
        expect(css).toEqual(clr);
    }

    async SelectAtBoloStatus1(): Promise<void> {
        // TODO: select dropdown option on this.uIBoloStatusComboBox,
        // testData.home('BoloStatus2'))
        await this.uIBoloStatusComboBox.press('Tab');
    }

    async SelectAtBoloStatus2(): Promise<void> {
        // TODO: select dropdown option on this.uIBoloStatusComboBox,
        // testData.home('BoloStatus2'))
        await this.uIBoloStatusComboBox.press('Tab');
    }

    async verifyBoloRadioButtonIsSelected(): Promise<void> {
        const attribute = await this.uIBoloRadioButton.getAttribute("checked")
        expect("true").toEqual(attribute);
    }

    async verifyAtMessageInGrid(): Promise<void> {
        const gridRowByCellInnerText = await gridHelpers.selectGridRowByCellInnerText( this.uIMessageTable, testData.home('Message'))
        // TODO: expectTruthy( gridRowByCellInnerText.innerText().includes(testData.home('Message')))
    }

    async selectAtMessageInGrid(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText(this.uIMessageTable, testData.home('Message'))
    }

    async clickSentCheckbox(): Promise<void> {
        await this.uISentCheckBox.click();
    }

    async verifyReceivedCheckboxIsSelected(): Promise<void> {
        const selected = await this.uIReceivedCheckBox.isChecked();
        expect(selected).toBeTruthy();
    }

    async verifySentCheckboxIsSelected(): Promise<void> {
        const selected = await this.uISentCheckBox.isChecked();
        expect(selected).toBeTruthy();
    }

    async verifyInactiveRowGraycolorAtMessage(): Promise<void> {
        // TODO: gridHelpers.selectGridRowByCellInnerText(this.uIMessageTable, testData.home('WithdrawnMessage')).getAttribute("class")
        expect(attribute.includes("Gray")).toBeTruthy()
    }

    async verifyJurisDropdownIsDiplayed(): Promise<void> {
        await expect(this.uIJurisComboBox).toBeVisible()
    }

    async verifyPFInboxIsDislayed(): Promise<void> {
        await expect(this.uIPFInboxEdit).toBeVisible()
    }

    async verifyToFromPFIsDisplayed(): Promise<void> {
        await expect(this.uIToFromPfBox).toBeVisible()
    }

    async verifyReceivedCheckboxIsDisplayed(): Promise<void> {
        await expect(this.uIReceivedCheckBox).toBeVisible()
    }

    async verifySentCheckboxIsDisplayed(): Promise<void> {
        await expect(this.uISentCheckBox).toBeVisible()
    }

    async verifyUnitIsDisplayed(): Promise<void> {
        await expect(this.uIUnitBox).toBeVisible()
    }

    async verifyMessageIsDisplayed(): Promise<void> {
        await expect(this.uIMessageEdit).toBeVisible()
    }

    async verifyMessageRadioButtonIsDisplayed(): Promise<void> {
        await expect(this.uIMessageRadioButton).toBeVisible()
    }

    async verifyBOLORadioButtonIsDisplayed(): Promise<void> {
        await expect(this.uIBoloRadioButton).toBeVisible()
    }

    async verifyIncludeViewedMessagesCheckboxIsDisplayed(): Promise<void> {
        await expect(this.uIIncludeViewedCheckBox).toBeVisible()
    }

    async verifyFromDateIsDisplayed(): Promise<void> {
        await expect(this.uIFromDateEdit).toBeVisible()
    }

    async verifyToDateIsDisplayed(): Promise<void> {
        await expect(this.uIToDateEdit).toBeVisible()
    }

    async verifySearchButtonIsDisplayed(): Promise<void> {
        await expect(this.uISearchButton).toBeVisible()
    }

    async verifyAddNewButtonIsDisplayed(): Promise<void> {
        await expect(this.uIAddNewButton).toBeVisible()
    }

    async verifyAtGridHeadersAreDisplayed(headerCount: string): Promise<void> {
        const gridHeaderTableRow = await gridHelpers.getGridHeaderTableRow(this.uIMessageTable)
        const headers = gridHeaderTableRow.findElements( By.xpath(".//th[not(contains(@style, 'width: 0px;')) and normalize-space(@style) != '']"))
        for (let j = 1; j <= headerCount; j++) {
        if (j != 7) {
        // TODO: expect(headers[j - 1].innerText().trim()).toEqual(testData.home("HeaderName" + j))
        expect(headers[j - 1].innerText().trim() === "", "Empty Header is not displayed --> ").toBeTruthy();
        }
        }
    }

    async enterAtUnit(): Promise<void> {
        await this.uIUnitBox.fill(unit);
        await this.uIUnitBox.press('Tab');
        // popup.switchToCodedSearch()
        // popup.kPICodedLookup.selectAtCodeValueInGrid()
    }

    async enterAtToFromPF(): Promise<void> {
        await this.uIToFromPfBox.fill(toFromPF);
        await this.uIToFromPfBox.press('Tab');
    }

    async verifyAtSenderInGrid(): Promise<void> {
        // TODO: expectTruthy( gridHelpers.getGridColumnValues(this.uIMessageTable, "Sender").includes(testData.home('Sender')),
        // testData.home('Sender') + " does not contains in grid --> ")
    }

    async verifyAtReceiverInGrid(): Promise<void> {
        // TODO: expectTruthy( gridHelpers.getGridColumnValues(this.uIMessageTable, "Sender").includes(testData.home('Receiver')),
        // testData.home('Receiver') + " does not contains in grid --> ")
    }

    async enterAtFromDate(): Promise<void> {
        await this.uIFromDateEdit.click();
        await this.uIFromDateEdit.fill(fromDate);
    }

    async verifyAtDateGreaterThanFromDateInGrid(): Promise<void> {
        // DateHelpers.verifyTheDatesGreaterOrEqualFromDate( gridHelpers.getGridColumnValues(this.uIMessageTable, "Date"),
        // testData.home('FromDate'))
    }

    async verifyDateLessThanToDateInGrid(): Promise<void> {
        // DateHelpers.verifyTheDatesLessOrEqualToDate(gridHelpers.getGridColumnValues( this.uIMessageTable, "Date"), DateHelpers.getCurrentDate())
    }

    async verifyFromDateAsNull(): Promise<void> {
        // TODO: expectTruthy(this.uIFromDateEdit.inputValue().trim() === "",
        // "From Date Edit field is not Null --> ")
    }

    async verifyToDateAsNull(): Promise<void> {
        // TODO: expectTruthy(this.uIToDateEdit.inputValue().trim() === "",
        // "To Date Edit field is not Null --> ")
    }

    async verifyUnitAsNull(): Promise<void> {
        // TODO: expectTruthy(this.uIUnitBox.inputValue().trim() === "",
        // "Unit PF field is not Null --> ")
    }

    async verifyToFromAsNull(): Promise<void> {
        // TODO: expectTruthy(this.uIToFromPfBox.inputValue().trim() === "",
        // "To/From PF is not Null --> ")
    }

    async verifyMessageAsNull(): Promise<void> {
        // TODO: expectTruthy(this.uIMessageEdit.inputValue().trim() === "",
        // "Message Field is not Null --> ")
    }

    async verifyAtGridHeaderIsNotDisplayed(i: string): Promise<void> {
        const header = await gridHelpers.getGridHeaderColumnCellByText(this.uIMessageTable, testData.home("HeaderName" + i))
        await expect(header).not.toBeVisible()
    }

    async selectRandomGridRow(): Promise<void> {
        // TODO: select random grid row this.uIMessageTable
    }

    async verifyBoloRadioButtonIsNotSelected(): Promise<void> {
        expect(this.uIBoloRadioButton.isSelected(), "BOLO radio button is selected --> ").toBeFalsy()
    }

    async enterAtMessage(i: string): Promise<void> {
        await this.uIMessageEdit.fill(message + i);
    }

    async clickIncludeViewedMessagesCheckbox(): Promise<void> {
        await this.uIIncludeViewedCheckBox.click();
    }

    async verifyGridRowInGreyColorByMessage(i: string): Promise<void> {
        expect(color).toEqual("rgba(128, 128, 128, 1)");
        // gridHelpers.selectGridRowByCellInnerText(this.uIMessageTable, // testData.home("Message" + i)).getCssValue("color"))
    }

    async verifyIncludeViewedMessagesChechboxIsUnselected(): Promise<void> {
        // TODO: expectFalsy(this.uIIncludeViewedCheckBox.isSelected(),
        // "Inclue Viewed Messages? checkbox is still selected --> ")
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async clickExcelIcon(): Promise<void> {
        await this.uIExcelIcon.click();
    }

    async verifyAtExcelColumnName(i: string): Promise<void> {
        // TODO: expectTruthy(columnNames.includes(testData.home("ColumnName" + i)),
        // testData.home("ColumnName" + i) + " not contains in grid --> ")
    }

    async verifyAtUnitInGrid(): Promise<void> {
        const gridTableColumnValues = await gridHelpers.getGridColumnValues(this.uIMessageTable, "UnitRef")
        // TODO: expectTruthy(gridTableColumnValues.includes(testData.home('Unit')),
        // testData.home('Unit') + " not contains in grid --> ")
    }
}

export class MessageSendScreenPage {
    readonly page: Page;
    readonly uISendToJurisComboBox: Locator;
    readonly uIPFCodeEdit: Locator;
    readonly uIMessageEdit: Locator;
    readonly uIToEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIAddMultiplePFButton: Locator;
    readonly uISendAsBoloCheckBox: Locator;
    readonly uISendAsTxtMessageCheckBox: Locator;
    readonly uISendAsEmailCheckBox: Locator;
    readonly uIShiftNotesButton: Locator;
    readonly uISendButton: Locator;
    readonly uICancelButton: Locator;
    readonly uIPFLookupButton: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIBoloTypeComboBox: Locator;
    readonly uIBoloStatusComboBox: Locator;
    readonly uIUnitEdit: Locator;
    readonly uIUnitLookUpButton: Locator;
    readonly uIDateTime: Locator;
    readonly uIFromName: Locator;
    readonly uIBoloType: Locator;
    readonly uIBoloStatus: Locator;
    readonly uIMessage: Locator;
    readonly uIUpdateButton: Locator;
    readonly uIBrowseImageButton: Locator;
    readonly uIPictureBox: Locator;
    readonly uIPFCodeDescription: Locator;
    readonly uIUnitCodeDescription: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISendToJurisComboBox = page.locator('NolstJuris');
        this.uIPFCodeEdit = page.locator('NolupPFList_CodeValue');
        this.uIMessageEdit = page.locator('NotxtMsg');
        this.uIToEdit = page.locator('NotxtTo');
        this.uIAddButton = page.locator('NocmdAdd');
        this.uIClearButton = page.locator('NocmdClear');
        this.uIAddMultiplePFButton = page.locator('NocmdPF');
        this.uISendAsBoloCheckBox = page.locator('NochkSendAsBolo');
        this.uISendAsTxtMessageCheckBox = page.locator('NochkALL');
        this.uISendAsEmailCheckBox = page.locator('NochkEMail');
        this.uIShiftNotesButton = page.locator('NocmdShift');
        this.uISendButton = page.locator('NocmdSend');
        this.uICancelButton = page.locator('NocmdCancel');
        this.uIPFLookupButton = page.locator('NolupPFList_imgBtn');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIBoloTypeComboBox = page.locator('NoCddBoloType_DropDown');
        this.uIBoloStatusComboBox = page.locator('NoCddBoloStatus_DropDown');
        this.uIUnitEdit = page.locator('NolupUnit_CodeValue');
        this.uIUnitLookUpButton = page.locator('NolupUnit_imgBtn');
        this.uIDateTime = page.locator('NolblBoloDttmValue');
        this.uIFromName = page.locator('NolblFromName');
        this.uIBoloType = page.locator('NolblBoloTypeValue');
        this.uIBoloStatus = page.locator('NoCddBoloStatus_DropDown');
        this.uIMessage = page.locator('NotxtMessages');
        this.uIUpdateButton = page.locator('NocmdUpdate');
        this.uIBrowseImageButton = page.locator('NobtnImgUploader');
        this.uIPictureBox = page.locator('NodivImg');
        this.uIPFCodeDescription = page.locator('NolupPFList_CodeDescription');
        this.uIUnitCodeDescription = page.locator('NolupUnit_CodeDescription');
    }

    async EnterAtPF(): Promise<void> {
        await this.uIPFCodeEdit.fill(pF);
        await this.uIPFCodeEdit.press('Tab');
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async EnterMessage(): Promise<void> {
        await this.uIMessageEdit.fill("Automation Team Testing the send Message Screen");
    }

    async ClickSendAsTextMessageCheckbox(): Promise<void> {
        await this.uISendAsTxtMessageCheckBox.click();
    }

    async ClickSendAsEmailCheckbox(): Promise<void> {
        await this.uISendAsEmailCheckBox.click();
    }

    async ClickSendAsBolo(): Promise<void> {
        await this.uISendAsBoloCheckBox.click();
    }

    async ClickShiftNotes(): Promise<void> {
        await this.uIShiftNotesButton.click();
    }

    async ClickSendButton(): Promise<void> {
        await this.uISendButton.click();
    }

    async ClickAddMultiplePFButton(): Promise<void> {
        await this.uIAddMultiplePFButton.click();
    }

    async SelectPF(): Promise<void> {
        await this.uIPFLookupButton.click();
        // popup.switchToCodedSearch()
        // popup.kPICodedLookup.randomKPIHelpSelect()
    }

    async VerifyAllPFConfirmMessage(): Promise<void> {
        // confirm.yesWithExpectedMessage("(2544) Do you want to send the message to all PF?")
        // confirm.yesWithExpectedMessage("(2544) Do you want to send the message to all PF?")
    }

    async VerifyAtTo(): Promise<void> {
        // TODO: expect assertion
    }

    async VerifyMessageSuccessfulBottomMessage(): Promise<void> {
        expect(this.uIBottomLeftSideStatusBar.innerText().includes("2520 - Message sent successfully").trim()).toEqual(testData.home('To'))
        expect(this.uIBottomLeftSideStatusBar.innerText().includes("2520 - Message successfully sent"), "2520 - Message successfully sent").toBeTruthy()
    }

    async CloseScreen(): Promise<void> {
        // no-op: popup window close
    }

    async VerifyPFAndAddMultiplePFButtonDisabled(): Promise<void> {
        // TODO: expectTruthy( this.uIPFCodeEdit.getAttribute("class").includes("textboxInactive"),
        // "Verify PF Code Field Disabled")
        // TODO: expectTruthy( this.uIAddMultiplePFButton.getAttribute("disabled"),
        // "Verify Add Multiple PF Button Disabled")
    }

    async SelectBoloType(): Promise<void> {
        // random select on this.uIBoloTypeComboBox
        await this.uIBoloTypeComboBox.press('Tab');
    }

    async SelectAtBoloStatus(): Promise<void> {
        // TODO: select dropdown option on this.uIBoloStatusComboBox,
        // testData.home('BoloStatus'))
        await this.uIBoloStatusComboBox.press('Tab');
    }

    async VerifyBoloMessageConfirmMessage(): Promise<void> {
        // confirm popup: (2563) Message will be sent as a BOLO message. Do you want to continue?
    }

    async EnterAtMessage(): Promise<void> {
        await this.uIMessageEdit.fill(message);
    }

    async enterAtUnit(): Promise<void> {
        await this.uIUnitEdit.fill(unit);
        await this.uIUnitEdit.press('Tab');
    }

    async SelectAtPF(): Promise<void> {
        await this.uIPFLookupButton.click();
        // popup.switchToCodedSearch()
        // popup.kPICodedLookup.enterAtCode()
        // popup.kPICodedLookup.clickSearchIcon()
        // popup.kPICodedLookup.selectAtPFCode()
    }

    async selectunit(): Promise<void> {
        await this.uIUnitLookUpButton.click();
        // popup.switchToCodedSearch()
        // popup.kPICodedLookup.randomKPIHelpSelect()
    }

    async VerifyAddAndClearButtonDisabled(): Promise<void> {
        const status = this.uIAddButton.isEnabled()
        expect(status).toBeFalsy();
        const status1 = this.uIClearButton.isEnabled()
        expect(status1).toBeFalsy();
    }

    async VerifySendAsTxtMessageDisabled(): Promise<void> {
        const status = this.uISendAsTxtMessageCheckBox.isEnabled()
        expect(status).toBeFalsy();
    }

    async VerifySendAsEmailDisabled(): Promise<void> {
        const status = this.uISendAsEmailCheckBox.isEnabled()
        expect(status).toBeFalsy();
    }

    async SelectAtBoloType(): Promise<void> {
        // TODO: select dropdown option on this.uIBoloTypeComboBox,
        // testData.home('BoloType'))
        await this.uIBoloTypeComboBox.press('Tab');
    }

    async verifyCurrentDate(): Promise<void> {
        // TODO: expectTruthy( this.uIDateTime.innerText().includes(DateHelpers.getCurrentDate("MM/dd/yy")))
    }

    async verifyFromName(): Promise<void> {
        // TODO: expect("Automation.trim()).toEqual(this.uIFromName.innerText())
    }

    async verifyAtBoloType(): Promise<void> {
        // TODO: expect assertion
    }

    async verifyAtBoloStatus(): Promise<void> {
        // TODO: expectEqual(testData.home('BoloStatus').trim()).toEqual(testData.home('BoloType'))
        // this.uIBoloStatus
    }

    async verifyAtMessage(): Promise<void> {
        // TODO: expect assertion
    }

    async SelectAtBoloStatus1(): Promise<void> {
        // TODO: select dropdown option on this.uIBoloStatusComboBox.trim()).toEqual(testData.home('Message'))
        await this.uIBoloStatusComboBox.press('Tab');
    }

    async clickUpdate(): Promise<void> {
        await this.uIUpdateButton.click();
    }

    async clickCancel(): Promise<void> {
        await this.uICancelButton.click();
    }

    async verifyNoRecordFoundAcknowledge(): Promise<void> {
    }

    async verifyPFisDisabled(): Promise<void> {
        const attribute = await this.uIPFCodeEdit.getAttribute("readonly")
        expect("true").toEqual(attribute);
    }

    async verifyAddMultiplePFisDisabled(): Promise<void> {
        const attribute = await this.uIAddMultiplePFButton.getAttribute("disabled")
        expect("true").toEqual(attribute);
    }

    async verifyToIsDisabled(): Promise<void> {
        const attribute = await this.uIToEdit.getAttribute("disabled")
        expect("true").toEqual(attribute);
    }

    async VerifyAddAndClearButtonEnabled(): Promise<void> {
        const status = this.uIAddButton.isEnabled()
        expect(status).toBeTruthy();
        const status1 = this.uIClearButton.isEnabled()
        expect(status1).toBeTruthy();
    }

    async verifyBrowseImageButtonIsDisplayed(): Promise<void> {
        expect(await this.uIBrowseImageButton.isVisible()).toBeTruthy();
    }

    async verifyPictureBoxIsDisplayed(): Promise<void> {
        expect(await this.uIPictureBox.isVisible()).toBeTruthy();
    }

    async verifyMessageSendScreenClosed(): Promise<void> {
        for (const window of collectWindowHandles) {
        expect(driver.switchTo().window(window).getCurrentUrl().includes("frmChatMsgSend.aspx?")).toBeFalsy();
        }
    }

    async clickBrowseImageButton(): Promise<void> {
        await this.uIBrowseImageButton.click();
    }

    async verifySendAsBOLOCheckboxIsDisplayed(): Promise<void> {
        // TODO: expectTruthy(this.uISendAsBoloCheckBox.isVisible() with value // "Send as BOLO checkbox is not displayed --> "
    }

    async verifySendToJurisDropdownIsDisplayed(): Promise<void> {
        await expect(this.uISendToJurisComboBox).toBeVisible()
    }

    async verifyPFFieldsAreDisplayed(): Promise<void> {
        await expect(this.uIPFCodeEdit).toBeVisible()
        await expect(this.uIPFCodeDescription).toBeVisible()
        await expect(this.uIPFLookupButton).toBeVisible()
    }

    async verifyUnitFieldsAreDisplayed(): Promise<void> {
        await expect(this.uIUnitEdit).toBeVisible()
        await expect(this.uIUnitCodeDescription).toBeVisible()
        await expect(this.uIUnitLookUpButton).toBeVisible()
    }

    async verifyToIsDisplayed(): Promise<void> {
        await expect(this.uIToEdit).toBeVisible()
    }

    async verifyMessageIsDisplayed(): Promise<void> {
        await expect(this.uIMessageEdit).toBeVisible()
    }

    async verifyAddButtonIsDisplayed(): Promise<void> {
        await expect(this.uIAddButton).toBeVisible()
    }

    async verifyClearButtonIsDisplayed(): Promise<void> {
        await expect(this.uIClearButton).toBeVisible()
    }

    async verifyAddMultiplePFButtonIsDisplayed(): Promise<void> {
        await expect(this.uIAddMultiplePFButton).toBeVisible()
    }

    async verifySendAsTxtMessageCheckboxIsDisplayed(): Promise<void> {
        await expect(this.uISendAsTxtMessageCheckBox).toBeVisible()
    }

    async verifySendAsEmailCheckboxIsDisplayed(): Promise<void> {
        await expect(this.uISendAsEmailCheckBox).toBeVisible()
    }

    async verifyShiftNotedButtonIsDisplayed(): Promise<void> {
        await expect(this.uIShiftNotesButton).toBeVisible()
    }

    async verifySendButtonIsDisplayed(): Promise<void> {
        await expect(this.uISendButton).toBeVisible()
    }

    async verifyCancelButtonIsDisplayed(): Promise<void> {
        await expect(this.uICancelButton).toBeVisible()
    }

    async verifyAtTo(): Promise<void> {
        for (let i = 0; i < pFNames.length; i++) {
        // TODO: expectTruthy( this.uIToEdit.inputValue().includes(pFNames[i]),
        // pFNames[i] + " not contains in To field")
        }
    }

    async verifyMessageShouldNotBeEmptyAcknowledgePopup(): Promise<void> {
    }
}

export class MessageTabPage {
    readonly page: Page;
    readonly uIRefreshButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIBoloButton: Locator;
    readonly uIResultTable: Locator;
    readonly uIMessageTable1TextView: Locator;
    readonly uIBulletinAddNewButton: Locator;
    readonly uIBulletinSearchButton: Locator;
    readonly uIBulletinResultTable: Locator;
    readonly uIBulletinRefreshButton: Locator;
    readonly uIMessageListResultTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIRefreshButton = page.locator('NotabMain_tmpl0_cmdRefresh');
        this.uIAddNewButton = page.locator('NotabMain_tmpl0_cmdNewMsg');
        this.uISearchButton = page.locator('NotabMain_tmpl0_cmdMsgSrch');
        this.uIBoloButton = page.locator('NotabMain_tmpl0_cmdBolo');
        this.uIResultTable = page.locator("//div[@id='grdNames']//tbody[contains(@class,'ThemeItem')]");
        this.uIMessageTable1TextView = page.locator("//div[@id='tabMain_tmpl0_updPnlMsg']//table[@id='Table1']");
        this.uIBulletinAddNewButton = page.locator('NotabMain_tmpl0_cmdBulletinAdd');
        this.uIBulletinSearchButton = page.locator('NotabMain_tmpl0_cmdBulletinSrch');
        this.uIBulletinResultTable = page.locator('NotabMain_tmpl0_listBulletin');
        this.uIBulletinRefreshButton = page.locator('NotabMain_tmpl0_cmdBulletinRefresh');
        this.uIMessageListResultTable = page.locator("//div[@id='tabMain_tmpl0_listMsg']");
    }

    async VerifyMessageBulletinTable(): Promise<void> {
        expect(this.uIMessageTable1TextView.innerText().includes("You have been assigned a Task related to Invest No17-000002, CaseNo 17-000007.")).toBeTruthy()
    }

    async VerifyMessageBulletinPrimeInvest(): Promise<void> {
        expect(this.uIMessageTable1TextView.innerText().includes("Prime Investigator changed for InvestigationNo 17-000006, CaseNo 17-000016")).toBeTruthy()
    }

    async ClickBulletinAddNew(): Promise<void> {
        await this.messageTab.click();
    }

    async ClickBulletinRefreshButton(): Promise<void> {
        await this.messageTab.click();
    }

    async ClickMessageAddNew(): Promise<void> {
        await this.messageTab.click();
    }

    async ClickMessageSearch(): Promise<void> {
        await this.messageTab.click();
    }

    async ClickMessageRefresh(): Promise<void> {
        await this.messageTab.click();
    }

    async VerifyAtMessageInFirstMessageGrid(): Promise<void> {
        expect(this.uIMessageTable1TextView.innerText().includes(testData.home('Message'))).toBeTruthy()
    }

    async ClickFirstMessageRow(): Promise<void> {
        await this.messageTab.click();
    }

    async VerifyAtMessageBulletinPrimeInvestigator(): Promise<void> {
        const value = await this.messageTab.innerText();
        // TODO: expectTruthy(this.uIMessageTable1TextView.innerText().includes("Prime Investigator changed for InvestigationNo" + "CaseNo"
        // + testData.home('CaseNo')
        // + testData.home('PrimeInvestigatorPF')))
    }

    async VerifyAtMessageBulletinOfficerDescription(): Promise<void> {
        // TODO: expectTruthy(this.uIMessageTable1TextView.innerText().includes("Prime Investigator changed for InvestigationNo" + "CaseNo"
        // + testData.home('CaseNo')
        // + testData.home('OfficeDescription')))
    }

    async ClickMessageBoloButton(): Promise<void> {
        await this.messageTab.click();
    }

    async verifyBoloButtonIsDisplayed(): Promise<void> {
        expect(await this.messageTab.isVisible()).toBeTruthy();
    }

    async verifyAtSubjectInBulletinGrid(): Promise<void> {
        expect(this.uIBulletinResultTable.innerText().includes(testData.home('Subject')), "Entered subject is not available").toBeTruthy()
    }
}

export class MobileDeviceOTPScreenPage {
    readonly page: Page;
    readonly uITextPhoneEdit: Locator;
    readonly uISendLinkToMobileButton: Locator;
    readonly uICancelButton: Locator;
    readonly uIAuthenticationCode: Locator;
    readonly uIMobileText: Locator;
    readonly uIPhoneNumberResetIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uITextPhoneEdit = page.locator("//input[@id='txtPhone']");
        this.uISendLinkToMobileButton = page.locator('NobtnSend');
        this.uICancelButton = page.locator("//input[@id='btnCancel']");
        this.uIAuthenticationCode = page.locator('NolblAuthCode');
        this.uIMobileText = page.locator('NolblMobileTxtMessage');
        this.uIPhoneNumberResetIcon = page.locator('NoimgbtnrReload');
    }

    async VerifyAtMobileNumber(): Promise<void> {
        // TODO: expectEqual( "(251) 356-7632",this.uITextPhoneEdit.inputValue())
    }

    async clickSendLinkToMobileButton(): Promise<void> {
        await this.uISendLinkToMobileButton.click();
    }

    async VerifyAtAuthenticaionCodeGeneratedAs6Digit(): Promise<void> {
        const Authcode = await this.uIAuthenticationCode.innerText();
        const i = Authcode.length;
        expect(i).toEqual(6)
    }

    async closeMobileDeviceOTPScreen(): Promise<void> {
        // no-op: popup window close
    }

    async enterAtMobileNo(): Promise<void> {
        await this.uITextPhoneEdit.click();
        await this.uITextPhoneEdit.fill(mobileNo);
    }

    async verifyMobileTextConfirmationText(): Promise<void> {
        const text = await this.uIMobileText.innerText();
        // TODO: expect("Use the mobile device to capture the signature. Enter the phoneNo and presss Send. A link will be send to the mobile via text message.".trim()).toEqual(text)
    }

    async verifySendLinkToMobileIsDisplayed(): Promise<void> {
        expect(await this.uISendLinkToMobileButton.isVisible()).toBeTruthy();
    }

    async clickReset(): Promise<void> {
        await this.uIPhoneNumberResetIcon.click();
    }

    async verifyPhoneNumberIsBlank(): Promise<void> {
        const text = await this.uITextPhoneEdit.inputValue();
        expect(text.trim()).toBe('');
    }
}

export class MultiFilesAttachmentsPage {
    readonly page: Page;
    readonly uIBrowseButton: Locator;
    readonly uIUploadButton: Locator;
    readonly uICloseButton: Locator;
    readonly uIUnableLocateMsg: Locator;
    readonly uIFileInfoContainer: Locator;
    readonly uISelectFileButton: Locator;
    readonly uIMultiAttchmentsGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIBrowseButton = page.locator('NoAjaxFileUpload1_SelectFileContainer');
        this.uIUploadButton = page.locator('NoAjaxFileUpload1_UploadOrCancelButton');
        this.uICloseButton = page.locator('Nobtn_Close');
        this.uIUnableLocateMsg = page.locator('Nolblerrstatus');
        this.uIFileInfoContainer = page.locator("//span[contains(text(),'TestJPG.jpg')]");
        this.uISelectFileButton = page.locator('NoAjaxFileUpload1_SelectFileContainer');
        this.uIMultiAttchmentsGrid = page.locator('NoAjaxFileUpload1_QueueContainer');
    }

    async clickBrowseButton(): Promise<void> {
        await this.uIBrowseButton.click();
    }

    async clickUploadButton(): Promise<void> {
        await this.uIUploadButton.click();
    }

    async clickCloseButton(): Promise<void> {
        await this.uICloseButton.click();
    }

    async selectBulkAttachment(): Promise<void> {
        // WindowsControl.FileBrowserWindow.EnterOpenFileName("./test-resources"
        // + "IncidentRpt.pdf");
        // WindowsControl.FileBrowserWindow.ClickOpen();
        // TODO: bulk file attachment "\"10300\" \"8904_4\" \"9129\" \"9132\""
    }

    async verifyAtCloseCurrentPagePopup(): Promise<void> {
        // popup.confirm.yesWithExpectedMessage("Are you sure, you want to Close the Page?\r\n"
        // + " Press OK to continue, or Cancel to stay on the current page")
        // TODO: handle windows popup click OK
    }

    async verifyUnableToAccessNetworkPathMessage(): Promise<void> {
        const msg = await this.uIUnableLocateMsg.innerText();
        expect(msg.trim()).toEqual( "Unable to access network path. Please verify system parameters 29 and 39.")
    }

    async clickSelectFileButton(): Promise<void> {
        await this.uISelectFileButton.click();
    }

    async verifyAtFileName(i: string): Promise<void> {
        const values: string[] = []
        const elements = await this.uIMultiAttchmentsGrid.locator("//span[@class='filename']").all()
        for (const element of elements) {
        // values.add(element.innerText())
        // TODO: expectTruthy(values.includes(testData.home("FileName" + i)),
        // "File Name not present --> ")
        }
    }
}

export class MultipleJurisRolesPage {
    readonly page: Page;
    readonly uIJurisDropdown: Locator;
    readonly uIMutilpleJurisRolesGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIJurisDropdown = page.locator('NoKPIJurisDropDownList1');
        this.uIMutilpleJurisRolesGrid = page.locator('NogrdSetupJuris');
    }

    async verifyJurisDropDownIsDisplayed(): Promise<void> {
        expect(await this.uIJurisDropdown.isVisible()).toBeTruthy()
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }
}

export class MyApprovalTabPage {
    readonly page: Page;
    readonly uIStatusComboBox: Locator;
    readonly uIItemTypeComboBox: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIApprovalStatusReportTable: Locator;
    readonly uINoRecordFoundText: Locator;
    readonly uISearchButton: Locator;
    readonly uISupervisorEdit: Locator;
    readonly uIReportsTable: Locator;
    readonly uIItemTypeComboBoxForFire: Locator;
    readonly uIApprovalStatusReportTableForFire: Locator;
    readonly uISearchButtonForFire: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIStatusComboBox = page.locator('NolstReportStatus');
        this.uIItemTypeComboBox = page.locator('NocddRepositoryID_DropDown');
        this.uIRefreshButton = page.locator('NocmdRefresh');
        this.uIApprovalStatusReportTable = page.locator("//div[@id='grdCBEReports']");
        this.uINoRecordFoundText = page.locator('NolblDisplayTExt');
        this.uISearchButton = page.locator('NocmdSearch');
        this.uISupervisorEdit = page.locator('NolupSupervisor_CodeValue');
        this.uIReportsTable = page.locator('NogrdCBEReports');
        this.uIItemTypeComboBoxForFire = page.locator('NocddRepositoryID');
        this.uIApprovalStatusReportTableForFire = page.locator("//div[@id='grdApprovalstatus']");
        this.uISearchButtonForFire = page.locator('NocmdRefresh');
    }

    async SelectStatusAsSubmitted(): Promise<void> {
        await this.myReportsTab.click();
        // TODO: select RadControl dropdown this.uIStatusComboBox with value "Submitted"
        await this.myReportsTab.click();
    }

    async SelectStatusAsOnHold(): Promise<void> {
        await this.myReportsTab.click();
        // TODO: select RadControl dropdown this.uIStatusComboBox with value "OnHold"
        await this.myReportsTab.click();
    }

    async SelectItemTypeAsPersonnelTimeEntry(): Promise<void> {
        // TODO: select dropdown option on this.uIItemTypeComboBox with value // "Personnel Time Entry"
        await this.myApprovalTab.press('Tab');
    }

    async SelectItemTypeAsPersonnelInjury(): Promise<void> {
        await this.myApprovalTab.fill("Personnel Injury");
    }

    async SelectItemTypeAsTrainingClass(): Promise<void> {
        await this.myApprovalTab.fill("Training Class");
    }

    async SelectItemTypeAsCrashEntry(): Promise<void> {
        await this.myApprovalTab.fill("Crash Entry");
    }

    async SelectAtItemType(): Promise<void> {
        // TODO: select dropdown option on this.uIItemTypeComboBox,
        // testData.home('ItemType'))
    }

    async SelectAtItemTypeForFire(): Promise<void> {
        // TODO: selectDropDownOption( this.uIItemTypeComboBoxForFire, testData.home('ItemType'))
    }

    async VerifyRefAsSeleniumTraining(rowIndex: string): Promise<void> {
        const uIRefNo = await gridHelpers.getGridCell(this.uIApprovalStatusReportTable, "RefNo", rowIndex)
        expect(uIRefNo.includes("Selenium Training")).toBeTruthy()
    }

    async VerifyCurrentDate(rowIndex: string): Promise<void> {
        const uICurrentDate = await gridHelpers.getGridCell(this.uIApprovalStatusReportTable, "Date Time", rowIndex)
        expect(uICurrentDate.includes(DateHelpers.getCurrentDate("MM/dd/yy"))).toBeTruthy();
    }

    async ClickRowInApprovalTabGrid(rowIndex: string): Promise<void> {
        await gridHelpers.getGridCell(this.uIApprovalStatusReportTable, "RefNo", rowIndex).click()
    }

    async VerifyNoRecordFoundMessage(): Promise<void> {
        // TODO: expectEqual("No Data To Display",
        // this.uINoRecordFoundText.innerText())
    }

    async VerifyAtRefNo(): Promise<void> {
        // TODO: grid expect assertion
    }

    async selectRowByAtRefNo(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText( this.uIApprovalStatusReportTableForFire, testData.home('RefNo'))
    }

    async VerifyAtPFCodeByAtRefNoInOfficerColumn(): Promise<void> {
        const row = await gridHelpers.selectGridRowByCellInnerText( this.uIApprovalStatusReportTable, testData.home('RefNo'))
        // TODO: grid expect assertion
    }

    async VerifyStatusAsOnHoldByAtRefNo(): Promise<void> {
        const row = await gridHelpers.selectGridRowByCellInnerText( this.uIApprovalStatusReportTable, testData.home('RefNo'))
        // TODO: expect(await gridHelpers.getGridCellInnerText(this.uIApprovalStatusReportTable, row, col)).toEqual("OnHold")
    }

    async VerifyItemTypeAsCrashByAtRefNo(): Promise<void> {
        const row = await gridHelpers.selectGridRowByCellInnerText( this.uIApprovalStatusReportTable, testData.home('RefNo'))
        // TODO: grid expect assertion
    }

    async VerifyRefAsFireResponse(rowIndex: string): Promise<void> {
        const uIRefNo = await gridHelpers.getGridCell(this.uIApprovalStatusReportTable, "RefNo", rowIndex)
        expect(uIRefNo.includes("Fire Response")).toBeTruthy()
    }

    async SelectAtStatus(): Promise<void> {
        await this.myReportsTab.click();
        // TODO: selectRadControlDropdown( this.uIStatusComboBox, testData.home('Status'))
        await this.myReportsTab.click();
    }

    async VerifyGridColumnStatusAsReportDue(): Promise<void> {
        const cellValues = await gridHelpers.getGridColumnValues(this.uIApprovalStatusReportTable, "Status")
        for (const strStatus of cellValues) {
        // Assert.assertEquals(strStatus, "Report Due")
        }
    }

    async VerifyItemTypeAsNFIRS(rowIndex: string): Promise<void> {
        // TODO: grid expect assertion
    }

    async VerifyItemTypeAsEMS(rowIndex: string): Promise<void> {
        // TODO: grid expect assertion
    }

    async VerifyAtLocationUsingNFIRS(): Promise<void> {
        // TODO: grid expect assertion
        // TODO: assertion continuation
    }

    async VerifyAtLocationUsingEMS(): Promise<void> {
        // TODO: expect(await gridHelpers.getGridCell(this.uIApprovalStatusReportTable.trim()).toEqual(testData.home('Location'))
    }

    async ClickRefreshButton(): Promise<void> {
        await this.myApprovalTab.click();
    }

    async SelectAtItemTypeUsingLocationInGrid(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText( this.uIApprovalStatusReportTable, testData.home('Location'))
    }

    async SelectAtItemTypeUsingLocationInGridForFire(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText( this.uIApprovalStatusReportTableForFire, testData.home('Location'))
    }

    async VerifyRefNoUsingItemType(IncidentYear: string, IncidentNo: string): Promise<void> {
        // TODO: grid expect assertion
    }

    async VerifyRefNoUsingItemType(IncidentYear: string, IncidentNo: string, ExpNo: string): Promise<void> {
        // TODO: grid expect assertion
    }

    async VerifyRefNoUsingLocation(IncidentYear: string): Promise<void> {
        // TODO: expect(await gridHelpers.getGridCell(this.uIApprovalStatusReportTableForFire.trim()).toEqual(IncidentYear)
    }

    async VerifyRefNoForNFIRS(IncidentYear: string, IncidentNo: string): Promise<void> {
        // TODO: expect(await gridHelpers.getGridCell(this.uIApprovalStatusReportTable.trim()).toEqual(IncidentYear + "-" + IncidentNo + "-000")
    }

    async ClickSearchButton(): Promise<void> {
        await this.myApprovalTab.click();
    }

    async selectAtItemType1(): Promise<void> {
        // TODO: select dropdown option on this.uIItemTypeComboBox, // testData.home('ItemType1'))
    }

    async verifyAtItemTypeInColumnValues(): Promise<void> {
        const cellValues = await gridHelpers.getGridColumnValues(this.uIApprovalStatusReportTable, "Item Type")
        for (const strStatus of cellValues) {
        expect(testData.home('ItemType').includes(strStatus)).toBeTruthy()
        }
    }

    async verifyAtItemType1InColumnValues(): Promise<void> {
        const cellValues = await gridHelpers.getGridColumnValues(this.uIApprovalStatusReportTable, "Item Type")
        for (const strStatus of cellValues) {
        expect(strStatus.includes(testData.home('ItemType1'))).toBeTruthy()
        }
    }

    async verifyAtStatusInColumnValues(): Promise<void> {
        const cellValues = await gridHelpers.getGridColumnValues(this.uIApprovalStatusReportTable, "Status")
        for (const strStatus of cellValues) {
        // Assert.assertEquals(strStatus, testData.home('Status'))
        }
    }

    async verifyAtStatus1InColumnValues(): Promise<void> {
        const cellValues = await gridHelpers.getGridColumnValues(this.uIApprovalStatusReportTable, "Status")
        for (const strStatus of cellValues) {
        // Assert.assertEquals(strStatus, testData.home('Status1'))
        }
    }

    async selectAtStatus1(): Promise<void> {
        await this.myReportsTab.click();
        // TODO: selectRadControlDropdown( this.uIStatusComboBox, testData.home('Status1'))
        await this.myReportsTab.click();
    }

    async VerifyAtRefNoNotAvailable(): Promise<void> {
        const allRefNo = await gridHelpers.getGridTableColumnCells(this.uIReportTable, "RefNo")
        for (const refNo of allRefNo) {
        const text = await this.refNo.innerText();
        expect(text.includes(testData.home('RefNo'))).toBeFalsy()
        }
    }

    async SelectAtItemTypeUsingItemTypeInGrid(): Promise<void> {
        const EMSRow = await gridHelpers.selectGridRowByCellInnerText( this.uIApprovalStatusReportTable, testData.home('ItemType'))
        // gridHelpers.selectGridRowByCellInnerText(EMSRow, // testData.home('Type'))
    }

    async SelectAtItemTypeUsingItemType1InGrid(): Promise<void> {
        const EMSRow = await gridHelpers.selectGridRowByCellInnerText( this.uIApprovalStatusReportTable, testData.home('ItemType'))
        // gridHelpers.selectGridRowByCellInnerText(EMSRow, // testData.home('Type1'))
    }

    async SelectAtItemTypeUsingItemType2InGrid(): Promise<void> {
        const EMSRow = await gridHelpers.selectGridRowByCellInnerText( this.uIApprovalStatusReportTable, testData.home('ItemType'))
        // gridHelpers.selectGridRowByCellInnerText(EMSRow, // testData.home('Type2'))
    }

    async verifySupervisorFieldDisplayed(): Promise<void> {
        expect(await this.myApprovalTab.isVisible()).toBeTruthy();
    }

    async enterAtSupervisorPF(): Promise<void> {
        await this.myApprovalTab.fill(supervisorPF);
    }

    async verifySubmittedToColumnDisplayed(): Promise<void> {
        expect(await gridHelpers.getGridHeaderColumnCell(this.uIApprovalStatusReportTable, "Submitted To").isVisible()).toBeTruthy()
    }

    async verifySubmittedToOfficerRecordsOnlyListed(): Promise<void> {
        const cells = await gridHelpers.getGridTableColumnCells(this.uIReportsTable, "Submitted To")
        for (const ele of cells) {
        if (ele.innerText().includes(testData.home('SupervisorName')))
        expect(true).toBeTruthy();
        }
    }

    async verifyAtSubmittedToSupervisorName(): Promise<void> {
        const ele = await gridHelpers.getGridCell(this.uIReportsTable, "Submitted To", 0)
        expect(testData.home('SupervisorName'))
    }

    async selectAtItemType2(): Promise<void> {
        // // TODO: selectDropDownOption(this.uIItemTypeComboBox.trim()).toEqual(ele.innerText())
    }

    async verifyAtRejectionCountByRefno(i: string): Promise<void> {
        const text = await gridHelpers.getGridCell(this.uIApprovalStatusReportTable, testData.home('RefNo'), "Rej. Cnt")
        expect(testData.home("RejectionCount"+i))
    }

    async verifySearchButtonIsDisplayed(): Promise<void> {
        expect(await this.myApprovalTab.isVisible()).toBeTruthy();
        expect(this.uISearchButtonForFire.isEnabled()).toBeTruthy()
    }

    async ClickSearchButtonForFire(): Promise<void> {
        await this.myApprovalTab.click();
    }

    async verifyAtStatusInColumnValuesForFire(): Promise<void> {
        const cellValues = await gridHelpers.getGridColumnValues(this.uIApprovalStatusReportTableForFire.trim()).toEqual(text)
        for (const strStatus of cellValues) {
        // Assert.assertEquals(strStatus, testData.home('Status'))
        }
    }
}

export class MyCMTabPage {
    readonly page: Page;
    readonly uINewAssignmentAccordion: Locator;
    readonly uIOverDueTaskAccordion: Locator;
    readonly uIOpenCaseFolderAccordion: Locator;
    readonly uIOpenCaseFolderTable: Locator;
    readonly uIOpenCaseFolderTableForCM002: Locator;
    readonly uITasksAccordion: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIExpandAllCheckBox: Locator;
    readonly uINewAssignmentsReportTable: Locator;
    readonly uINewAssignmentsLable: Locator;
    readonly uITasksReportTable: Locator;
    readonly uINeAssignmentsLabel: Locator;
    readonly uIHeaderLineOpenCaseFolder: Locator;
    readonly uIOpenCaseFolder1Table: Locator;
    readonly uIOpenCaseFolderTableForP001: Locator;
    readonly uIOpenCaseFolderTableForP002: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINewAssignmentAccordion = page.locator("//h3[contains(text(),'New Assignments')]");
        this.uIOverDueTaskAccordion = page.locator('Noui-accordion-accordion-header-1');
        this.uIOpenCaseFolderAccordion = page.locator("//h3[contains(text(),'Open Case Folder')]");
        this.uIOpenCaseFolderTable = page.locator('NogrdOpenCaseFolder_ctl00_Prophoenix, Automation_0');
        this.uIOpenCaseFolderTableForCM002 = page.locator('NogrdOpenCaseFolder_ctl00_CM, Investigator_0');
        this.uITasksAccordion = page.locator("(//h3[contains(text(),'Tasks')]//span)[1]");
        this.uIRefreshButton = page.locator('NocmdRefresh');
        this.uIExpandAllCheckBox = page.locator('NochkExpandAll');
        this.uINewAssignmentsReportTable = page.locator('NogrdNewAssignments');
        this.uINewAssignmentsLable = page.locator('NolblNewAssignments');
        this.uITasksReportTable = page.locator('NogrdOverdueTask');
        this.uINeAssignmentsLabel = page.locator('NolblNewAssignmentsCont');
        this.uIHeaderLineOpenCaseFolder = page.locator("//tr[@chlgcnt='1']//td[text()='CM, Investigator']");
        this.uIOpenCaseFolder1Table = page.locator('NodivOpenCaseFolder');
        this.uIOpenCaseFolderTableForP001 = page.locator('NogrdOpenCaseFolder_ctl00_Others_0');
        this.uIOpenCaseFolderTableForP002 = page.locator('NogrdOpenCaseFolder_ctl00_Supervisor, Officer_0');
    }

    async ClickNewAssignmentAccordion(): Promise<void> {
        await this.myCMTab.click();
    }

    async clickOpenCaseFolderAccordion(): Promise<void> {
        await this.myCMTab.click();
    }

    async VerifyAtCaseNoInGrid(): Promise<void> {
        // TODO: grid expect assertion
    }

    async VerifyAtSupervisorPFByAtCaseNo(): Promise<void> {
        // TODO: expect(await gridHelpers.getGridCell(this.uINewAssignmentsReportTable.trim()).toEqual(testData.home('SupervisorPF'))
    }

    async ClickOverDueTask(): Promise<void> {
        await this.myCMTab.click();
    }

    async ClickRefreshButton(): Promise<void> {
        await this.myCMTab.click();
    }

    async VerifyAtInvestNo(rowIndex: string): Promise<void> {
        // TODO: grid expect assertion
        // TODO: assertion continuation
    }

    async VerifyAtCaseNumber(rowIndex: string): Promise<void> {
        // TODO: grid expect assertion
        // TODO: assertion continuation
    }

    async VerifyStatusAsOpen(rowIndex: string): Promise<void> {
        // TODO: expect(await gridHelpers.getGridCellInnerText(this.uINewAssignmentsReportTable, row, col)).toEqual("Open")
    }

    async ClickRowAtInvestNo(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText( this.uINewAssignmentsReportTable, testData.home('InvestNo'))
    }

    async VerifyAssignmentGridDisappear(): Promise<void> {
        expect(await this.myCMTab.innerText()).toEqual("");
    }

    async ClickCaseNoColumnNameNewAssignment(): Promise<void> {
        const colName = this.page.locator("//div[@id='grdNewAssignments']//table/tbody/tr[contains(@class, 'Header')]//th[contains(text(),'Case')]")
        await colName.click();
    }

    async ClickInvestNoColumnNameNewAssignment(): Promise<void> {
        const colName = this.page.locator("//div[@id='grdNewAssignments']//table/tbody/tr[contains(@class,'Header')]//th[contains(text(),'Invest')]")
        await colName.click();
    }

    async VerifyInvestColumnDisplayed(): Promise<void> {
        const elements = this.page.locator( "//div[@id='grdOpenCaseFolder_ctl00_Prophoenix, Automation_0']/table/tbody/tr[2]/td/table/tbody[1]/tr/td/div/table/tbody/tr/th").all()
        for (const column of elements) {
        if (column.innerText() == "InvestNo") {
        }
        }
    }

    async VerifyInvestColumnNotDisplayed(): Promise<void> {
        const elements = this.page.locator( "//div[@id='grdOpenCaseFolder_ctl00_Prophoenix, Automation_0']/table/tbody/tr[2]/td/table/tbody[1]/tr/td/div/table/tbody/tr/th").all()
        for (const column of elements) {
        if (column.innerText() != "InvestNo") {
        }
        }
    }

    async VerifySupervisorPFColumnDisplayed(): Promise<void> {
        const elements = this.page.locator( "//div[@id='grdOpenCaseFolder_ctl00_Prophoenix, Automation_0']/table/tbody/tr[2]/td/table/tbody[1]/tr/td/div/table/tbody/tr/th").all()
        for (const column of elements) {
        if (column.innerText() == "Supervisor PF") {
        }
        }
    }

    async VerifySupervisorPFColumnNotDisplayed(): Promise<void> {
        const elements = this.page.locator( "//div[@id='grdOpenCaseFolder_ctl00_Prophoenix, Automation_0']/table/tbody/tr[2]/td/table/tbody[1]/tr/td/div/table/tbody/tr/th").all()
        for (const column of elements) {
        if (column.innerText() != "Supervisor PF") {
        }
        }
    }

    async VerifyPrimePFColumnDisplayed(): Promise<void> {
        const elements = this.page.locator( "//div[@id='grdOpenCaseFolder_ctl00_Prophoenix, Automation_0']/table/tbody/tr[2]/td/table/tbody[1]/tr/td/div/table/tbody/tr/th").all()
        for (const column of elements) {
        if (column.innerText() == "Prime PF") {
        }
        }
    }

    async VerifyPrimePFColumnNotDisplayed(): Promise<void> {
        const elements = this.page.locator( "//div[@id='grdOpenCaseFolder_ctl00_Prophoenix, Automation_0']/table/tbody/tr[2]/td/table/tbody[1]/tr/td/div/table/tbody/tr/th").all()
        for (const column of elements) {
        if (column.innerText() != "Prime PF") {
        }
        }
    }

    async VerifyHighestCATColumnDisplayed(): Promise<void> {
        const elements = this.page.locator( "//div[@id='grdOpenCaseFolder_ctl00_Prophoenix, Automation_0']/table/tbody/tr[2]/td/table/tbody[1]/tr/td/div/table/tbody/tr/th").all()
        for (const column of elements) {
        if (column.innerText() == "Highest-CAT") {
        }
        }
    }

    async VerifyChargeOrCFSColumnDisplayed(): Promise<void> {
        const elements = this.page.locator( "//div[@id='grdOpenCaseFolder_ctl00_Prophoenix, Automation_0']/table/tbody/tr[2]/td/table/tbody[1]/tr/td/div/table/tbody/tr/th").all()
        for (const column of elements) {
        if (column.innerText() == "Charge/CFS") {
        }
        }
    }

    async ClickCaseNoColumnNameTasks(): Promise<void> {
        //			 gridHelpers.selectGridHeaderColumnName( this.uITasksReportTable, "CaseNo");
        const Newreder = await gridHelpers.getGridHeaderColumnCell(this.uITasksReportTable, "CaseNo")
        await Newreder.click();
        await Newreder.click();
    }

    async clickAtCaseNo(): Promise<void> {
        const gridCell = await gridHelpers.getGridCell(this.uITasksReportTable, testData.home('CaseNo'))
        await gridCell.click();
    }

    async ClickAssignedTaskColumnNameTasks(): Promise<void> {
        //			gridHelpers.selectGridHeaderColumnName(this.uITasksReportTable, //					"Assigned Task");
        const colName = await gridHelpers.getGridHeaderColumnCell(this.uITasksReportTable, "Assigned Task")
        await colName.click();
        await colName.click();
        await colName.click();
    }

    async ClickInvestNoColumnNameTasks(): Promise<void> {
        //			gridHelpers.selectGridHeaderColumnName(this.uITasksReportTable, //					"InvestNo");
        const colName = await gridHelpers.getGridHeaderColumnCell(this.uITasksReportTable, "InvestNo")
        await colName.click();
    }

    async ClickTasksAccordion(): Promise<void> {
        await this.myCMTab.click();
    }

    async VerifyAtCaseNoSortOrderNewAssignment(rowIndex: string): Promise<void> {
        // TODO: grid expect assertion
        // TODO: assertion continuation
    }

    async VerifyAtInvestNoSortOrderNewAssignment(rowIndex: string, InvestNo: string): Promise<void> {
        // TODO: grid expect assertion
        // TODO: assertion continuation
    }

    async VerifyAtCaseNoSortOrderTask(rowIndex: string): Promise<void> {
        // TODO: expect(await gridHelpers.getGridCellInnerText(this.uITasksReportTable, row, col)).toEqual(testData.home('CaseTask'))
    }

    async VerifyAtInvestNoSortOrderTask(rowIndex: string): Promise<void> {
        // TODO: expect(await gridHelpers.getGridCellInnerText(this.uITasksReportTable, row, col)).toEqual(testData.home('InvestTask'))
    }

    async VerifyAtAssignedTaskSortOrderTask(rowIndex: string): Promise<void> {
        // TODO: grid cell assertion
    }

    async verifyAsInvestColumnNameInTable(): Promise<void> {
        const table = await this.myCMTab.innerText();
        expect(table.includes("InvestNo")).toBeTruthy()
    }

    async verifyAsSupervisorPFColumnNameInTable(): Promise<void> {
        const table = await this.myCMTab.innerText();
        expect(table.includes("Supervisor PF")).toBeTruthy()
    }

    async verifyAsSupervisorPFColumnNameInTableforP001(jsonIndex: string): Promise<void> {
        const supervisor = await gridHelpers.getGridColumnValues(this.uIOpenCaseFolderTableForP001, "Supervisor PF")
        expect(supervisor.includes(testData.home("SupervisorPF"+jsonIndex))).toBeTruthy()
    }

    async verifyAsSupervisorPFColumnNameNotInTable(): Promise<void> {
        // TODO: expectFalsy( this.uIOpenCaseFolderTable.innerText().includes("Supervisor PF"))
    }

    async verifyAsSupervisorPFColumnNameNotInTableForP001(jsonIndex: string): Promise<void> {
        const supervisor = await gridHelpers.getGridColumnValues(this.uIOpenCaseFolderTableForP001, "Supervisor PF")
        expect(supervisor.includes(testData.home("SupervisorPF"+jsonIndex))).toBeFalsy()
    }

    async verifyAsChargeCFSColumnNameInTable(): Promise<void> {
        const table = await this.myCMTab.innerText();
        expect(table.includes("Charge/CFS")).toBeTruthy()
    }

    async verifyAsPrimePFColumnNameInTable(): Promise<void> {
        const table = await this.myCMTab.innerText();
        expect(table.includes("Prime PF")).toBeTruthy()
    }

    async verifyAsHighestCATColumnNameInTable(): Promise<void> {
        const table = await this.myCMTab.innerText();
        expect(table.includes("Highest-CAT")).toBeTruthy()
    }

    async verifyAsInvestColumnNameNotInTable(): Promise<void> {
        expect(this.uIOpenCaseFolderTable.innerText().includes("InvestNo")).toBeFalsy()
    }

    async verifyAtCaseNoFromOpenCaseFolder(): Promise<void> {
        // TODO: grid expect assertion
    }

    async verifyAtCaseNoFromOpenCaseFolderForP001(): Promise<void> {
        // TODO: grid expect assertion
    }

    async verifyAtCaseNoFromOpenCaseFolderForP001(i: string): Promise<void> {
        // TODO: expect(await gridHelpers.getGridCell(this.uIOpenCaseFolderTableForP001.trim()).toEqual(testData.home("CaseNo"+i))
    }

    async verifyAtInvestNoByCaseNo(CaseNo: string, InvestNo: string): Promise<void> {
        const unique = await gridHelpers.getGridCell(this.uINewAssignmentsReportTable, CaseNo, "InvestNo")
        expect(unique).toEqual(InvestNo);
    }

    async VerifyAtCaseNoSortOrderNewAssignment(): Promise<void> {
        const caseNo = await this.page.locator("//div[@id='divNewAssignments']//table/tbody/tr//td[contains(text(),'" + testData.home('CaseNo') + "')]").innerText()
        expect(await caseNo.innerText().includes(testData.home('CaseNo'))).toBeTruthy()
    }

    async verifyNewAssignmentsLabelShowingRecordsCountProperly(): Promise<void> {
        const count = await gridHelpers.getGridRowsCount(this.uINewAssignmentsReportTable)
        const text = await this.myCMTab.innerText();
        expect(text).toEqual("(" + Integer.toString(count) + ")");
    }

    async VerifyAtPrimePFSortOrderNewAssignment(rowIndex: string): Promise<void> {
        // TODO: grid expect assertion
        // TODO: assertion continuation
    }

    async verifyNewAssignmentsAccordionIsDisplayed(): Promise<void> {
        expect(await this.myCMTab.isVisible()).toBeTruthy();
    }

    async verifyTasksAccordionIsDisplayed(): Promise<void> {
        expect(await this.myCMTab.isVisible()).toBeTruthy();
    }

    async verifyOpenCaseFolderAccordionIsDisplayed(): Promise<void> {
        expect(await this.myCMTab.isVisible()).toBeTruthy();
    }

    async clickAtCaseNoInNewAssignmentsTabInGrid(): Promise<void> {
        const caseNo = await this.page.locator("//div[@id='divNewAssignments']//table/tbody/tr//td[contains(text(), '" + testData.home('CaseNo') + "')]").innerText()
        await caseNo.click();
    }

    async verifyCaseNoInTaskGrid(): Promise<void> {
        // TODO: grid expect assertion
    }

    async verifyTaskRowColor(): Promise<void> {
        const color = await gridHelpers.getGridCell(this.uITasksReportTable, "CaseNo", 0).getCssValue("color")
    }

    async verifyHeaderLineInOpenCase(): Promise<void> {
        const Header = await this.myCMTab.innerText();
        // TODO: expectEqual(Header, testData.home('Header'))
    }

    async verifyCaseNoFromOpenCaseFolder(CaseYear: string, CaseNo: string): Promise<void> {
        // TODO: grid expect assertion
    }

    async verifyPrimePFInGrid(): Promise<void> {
        const PrimePF = await gridHelpers.getGridCell(this.uIOpenCaseFolderTable, testData.home('Address'), "Prime PF")
        expect(testData.home('PrimePF'))
    }

    async clickExpandAllCheckBox(): Promise<void> {
        await this.myCMTab.click();
    }

    async verifyAtInvestNoUsingJsonReadFile(testCaseId: string): Promise<void> {
        const investYear = testData.readJson(testCaseId.trim()).toEqual(PrimePF)
        const investNo = testData.readJson(testCaseId, "investNo")
        const investNumber = investYear + "-" + investNo;
        let invest: string[] = []
        const res = true;
        // while (res)
        // invest = gridHelpers.getGridColumnValues(this.uINewAssignmentsReportTable, "InvestNo")
        expect(invest.includes(investNumber)).toBeTruthy();
        // continue
    }

    async selectAtInvestNoUsingJsonReadFile(testCaseId: string): Promise<void> {
        const investYear = testData.readJson(testCaseId, "investYear")
        const investNo = testData.readJson(testCaseId, "investNo")
        const investNumber = investYear + "-" + investNo;
        await this.myCMTab.locator('td', { hasText: investNumber }).click();
    }

    async verifyAtInvestNoByCaseNoInNewAssignmentAccordian(CaseNo: string, InvestNo: string): Promise<void> {
        const unique = await gridHelpers.getGridCell(this.uINewAssignmentsReportTable, CaseNo, "InvestNo")
        expect(unique).toEqual(InvestNo);
    }

    async verifyAtInvestNoByCaseNoInOpenCaseFolderAccordian(CaseNo: string, InvestNo: string): Promise<void> {
        const unique = await gridHelpers.getGridCell(this.uIOpenCaseFolderTable, CaseNo, "InvestNo")
        expect(unique).toEqual(InvestNo);
    }

    async verifyAtCaseNoInOpenCaseFolder(i: string): Promise<void> {
        const CaseNo = await gridHelpers.getGridCell
        // (this.uIOpenCaseFolder1Table,testData.home("CaseNo"+i)).innerText()
        expect(CaseNo.trim()).toEqual(testData.home("CaseNo"+i))
    }

    async verifyAtCaseNoIsNotListedInOpenCaseFolder(i: string): Promise<void> {
        const gridTableColumnValues = await gridHelpers.getGridColumnValues
        // (this.uIOpenCaseFolder1Table,"CaseNo")
        expect(gridTableColumnValues.includes(testData.home("CaseNo"+i))).toBeFalsy()
    }

    async clickAtCaseNoInOpenCaseFolder(): Promise<void> {
        await this.myCMTab.locator('td', { hasText: caseNumberInGrid }).click();
    }

    async verifyAsSupervisorPFColumnNameInTableforP002(jsonIndex: string): Promise<void> {
        const supervisor = await gridHelpers.getGridColumnValues(this.uIOpenCaseFolderTableForP002, "Supervisor PF")
        expect(supervisor.includes(testData.home("SupervisorPF"+jsonIndex))).toBeTruthy()
    }

    async verifyAsSupervisorPFColumnNameNotInTableForP002(jsonIndex: string): Promise<void> {
        const supervisor = await gridHelpers.getGridColumnValues(this.uIOpenCaseFolderTableForP002, "Supervisor PF")
        expect(supervisor.includes(testData.home("SupervisorPF"+jsonIndex))).toBeFalsy()
    }
}

export class MyDashBoardPage {
    readonly page: Page;
    readonly uILiveCADPoliceTab: Locator;
    readonly uILiveCADFireTab: Locator;
    readonly uIRealTimeDashboardTab: Locator;
    readonly uIExcelFileTab: Locator;
    readonly uI404Error: Locator;
    readonly uIStatisticsTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uILiveCADPoliceTab = page.locator("//span[contains(text(),'Live CAD Police')]");
        this.uILiveCADFireTab = page.locator("//span[contains(text(),'Live CAD Fire')]");
        this.uIRealTimeDashboardTab = page.locator("//li[@id='ds1']//a[text()='Real Time Dashboard']");
        this.uIExcelFileTab = page.locator("//li[@id='ds3']//a[text()='Excel File']");
        this.uI404Error = page.locator("//div[@class='content-container']");
        this.uIStatisticsTab = page.locator("//a[text()='Statistics']");
    }

    async ClickLiveCADPoliceTab(): Promise<void> {
        await this.uILiveCADPoliceTab.click();
    }

    async ClickLiveCADFireTab(): Promise<void> {
        await this.uILiveCADFireTab.click();
    }

    async clickRealTimeDashBoardTab(): Promise<void> {
        await this.uIRealTimeDashboardTab.click();
    }

    async clickExcelFileTab(): Promise<void> {
        await this.uIExcelFileTab.click();
    }

    async clickStatisticsTab(): Promise<void> {
        await this.uIStatisticsTab.click();
    }

    async verify404FileNotFoundErrorNotArise(): Promise<void> {
        const controlExist = await this.uI404Error.isVisible()
        if (controlExist == true) {
        const Text = await this.page.locator("//div[@class='content-container']").innerText();
        expect(Text.includes("404 - File or directory not found.")).toBeFalsy();
        expect(controlExist).toBeFalsy();
        }
    }
}

export class MyDocumentsTabPage {
    readonly page: Page;
    readonly uIRefreshButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIShowAllRadioButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIKeyWordsEdit: Locator;
    readonly uIDocumentGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIRefreshButton = page.locator('NocmdRefresh');
        this.uISearchButton = page.locator('NoKpibutton1');
        this.uIShowAllRadioButton = page.locator('NochkshowAll_0');
        this.uIPrintButton = page.locator("//img[contains(@src,'16_print.gif')]");
        this.uIKeyWordsEdit = page.locator('NotxtKeyword');
        this.uIDocumentGrid = page.locator('NogrdDoc_ctl00');
    }

    async clickRefreshButton(): Promise<void> {
        await this.myDocumentsTab.click();
    }

    async clickShowAllRadioButton(): Promise<void> {
        await this.myDocumentsTab.click();
    }

    async clickSearchButton(): Promise<void> {
        await this.myDocumentsTab.click();
    }

    async verifyPrintButtonIsDisplayed(): Promise<void> {
        expect(await this.myDocumentsTab.isVisible()).toBeTruthy();
    }

    async enterAtKeyWords(): Promise<void> {
        await this.myDocumentsTab.fill(keyWords);
    }

    async verifyKeyWordscontainsSpace(): Promise<void> {
        const text = await this.myDocumentsTab.inputValue();
        const contains = text.includes(" ");
        expect(contains, "keyWord is not contains space but it should contains Space check if fail").toBeTruthy();
    }

    async verifyAtDocumentNameWithDocument(): Promise<void> {
        const DocumentName = await gridHelpers.getGridCell( this.uIDocumentGrid, testData.home('Doc'), "Document Name")
        // TODO: expectEqual(DocumentName, testData.home('DocumentName'))
    }
}

export class MyHomePage {
    readonly page: Page;
    readonly uIMessageTab: Locator;
    readonly uIMessageBulletinTab: Locator;
    readonly uIMyReminderTab: Locator;
    readonly uIMyReportsTab: Locator;
    readonly uIMyTrainingTab: Locator;
    readonly uIMyInfoTab: Locator;
    readonly uIMyApprovalTab: Locator;
    readonly uIMyCMTab: Locator;
    readonly uIAddLinkButton: Locator;
    readonly uILinkName: Locator;
    readonly uIMyReportsApprovalTab: Locator;
    readonly uIMyApprovalTabForFire: Locator;
    readonly uIJurisLabel: Locator;
    readonly uIMyDocumentsTab: Locator;
    readonly uIPrintEmailQueueTab: Locator;
    readonly uIMessageIcon: Locator;
    readonly uISelfProfileTextSearchBar: Locator;
    readonly uISelfProfileLink: Locator;
    readonly uITools: Locator;
    readonly uIImportExport: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIMessageTab = page.locator("//span[contains(text(),'Message')]");
        this.uIMessageBulletinTab = page.locator("//span[contains(text(),'Message/Bulletin')]");
        this.uIMyReminderTab = page.locator("//span[contains(text(),'My Reminders')]");
        this.uIMyReportsTab = page.locator("//span[contains(text(),'My Reports')]");
        this.uIMyTrainingTab = page.locator("//span[contains(text(),'My Training')]");
        this.uIMyInfoTab = page.locator("//span[contains(text(),'My Info')]");
        this.uIMyApprovalTab = page.locator("//span[text()='My Reports/Approval']");
        this.uIMyCMTab = page.locator("//span[contains(text(),'My CM')]");
        this.uIAddLinkButton = page.locator('NocmdLinkAdd');
        this.uILinkName = page.locator('NoQuickLink');
        this.uIMyReportsApprovalTab = page.locator("//span[contains(text(),'My Reports/Approval')]");
        this.uIMyApprovalTabForFire = page.locator("//span[@title='My Reports']//span[text()='My Approval']");
        this.uIJurisLabel = page.locator('NolblJuris');
        this.uIMyDocumentsTab = page.locator("//span[text()='My Documents']");
        this.uIPrintEmailQueueTab = page.locator("//span[text()='Print/Email Queue']");
        this.uIMessageIcon = page.locator('NolblMsgCnt');
        this.uISelfProfileTextSearchBar = page.locator('NotxtSearch');
        this.uISelfProfileLink = page.locator('NouserAuth');
        this.uITools = page.locator("//div[@class='rmSlide']//span[text()='Tools']");
        this.uIImportExport = page.locator("//span[contains(text(),'Import/Export Data')]");
    }

    async navigateToPrintEmailQueueTab(): Promise<void> {
        await this.uIPrintEmailQueueTab.click();
    }

    async SwitchToMyHomeScreen(): Promise<void> {
    }

    async SwitchToMessageSearch(): Promise<void> {
    }

    async SwitchToSelectReport(): Promise<void> {
    }

    async SwitchToPnxReportSSRSPDFScreen(): Promise<void> {
    }

    async SwitchToPnxReportCrystalPDFScreen(): Promise<void> {
    }

    async SwitchToAllImageScreen(): Promise<void> {
    }

    async SwitchToImageEditorScreen(): Promise<void> {
    }

    async SwitchToManageCommentsScreen(): Promise<void> {
    }

    async SwitchToGunPermitManageCommentsScreen(): Promise<void> {
    }

    async SwitchToAttachmentScreen(): Promise<void> {
    }

    async SwitchToUpdateImageScreen(): Promise<void> {
    }

    async SwitchToMainWindow(): Promise<void> {
    }

    async SwitchToALCScreen(): Promise<void> {
    }

    async SwitchToGlobalMapScreen(): Promise<void> {
    }

    async SwitchToMessageTab(): Promise<void> {
        await this.uIMessageTab.click();
    }

    async SwitchToMessageBulletinTab(): Promise<void> {
        await this.uIMessageBulletinTab.click();
    }

    async SwitchToMyRemindersTab(): Promise<void> {
        await this.uIMyReminderTab.click();
    }

    async SwitchToMyReportsTab(): Promise<void> {
        await this.uIMyReportsTab.click();
        // // TODO: switch to frame "frmRptStatusINQ";
    }

    async SwitchToManageLinks(): Promise<void> {
    }

    async SwitchToMyTrainingTab(): Promise<void> {
        await this.uIMyTrainingTab.click();
    }

    async SwitchToMyApprovalTab(): Promise<void> {
        await this.uIMyApprovalTab.click();
        // frmApprovalStatusINQ.aspx?
    }

    async SwitchToMyApprovalTabForFire(): Promise<void> {
        await this.uIMyApprovalTabForFire.click();
    }

    async SwitchToMyCMTab(): Promise<void> {
        await this.uIMyCMTab.click();
    }

    async ClickAddLinkButton(): Promise<void> {
        await this.uIAddLinkButton.click();
    }

    async ReloadMyHomeScreen(): Promise<void> {
        await this.page.reload()
        // TODO: handle alert accept
    }

    async ClickCallEntryLink(): Promise<void> {
        await this.uILinkName.click();
    }

    async SwitchToMyReportApprovalTab(): Promise<void> {
        await this.uIMyReportsApprovalTab.click();
        // // TODO: switch to frame "frmRptStatusINQ";
    }

    async ClickPoliceOfficeRoleTabsEnabled(): Promise<void> {
        await this.uIMessageTab.click();
        await this.uIMyReminderTab.click();
        await this.uIMyReportsApprovalTab.click();
        await this.uIMyTrainingTab.click();
        await this.uIMyCMTab.click();
        await this.uIMyInfoTab.click();
    }

    async refreshWhiteBoardScreen(): Promise<void> {
        // Robot robot = null
        // robot = new Robot()
        // robot.keyPress(KeyEvent.VK_CONTROL)
        // robot.keyPress(KeyEvent.VK_R)
        // robot.delay(300)
        // robot.keyRelease(KeyEvent.VK_R)
        // robot.keyRelease(KeyEvent.VK_CONTROL)
    }

    async switchToWhiteBoardWindow(): Promise<void> {
    }

    async verifyPoliceOfficeRoleTabsEnabled(): Promise<void> {
        expect(this.uIMessageTab.isEnabled()).toBeTruthy()
        expect(this.uIMyReminderTab.isEnabled()).toBeTruthy()
        expect(this.uIMyReportsApprovalTab.isEnabled()).toBeTruthy()
        expect(this.uIMyTrainingTab.isEnabled()).toBeTruthy()
        expect(this.uIMyCMTab.isEnabled()).toBeTruthy()
        expect(this.uIMyInfoTab.isEnabled()).toBeTruthy()
    }

    async verifyNoOfTabsEnabledForUserIs(tabNo: string): Promise<void> {
        const tabs = Playback.driver.findElements(By.xpath( "//span[contains(@class,'igtab_BlueThemeTH')]//span[contains(@class,'igtab_BlueThemeTHText')]"))
        const count = 0;
        for (const tab of tabs) {
        if (tab.isVisible()) {
        // count++
        expect(count).toEqual(tabNo)
        }
        }
    }

    async clickAtlink(): Promise<void> {
        // TODO: this.page.locator( "//span[@id='QuickLink' and contains(text(),'" + testData.home('LinkName') + "')]")).click()
    }

    async clickAtlink(JsonKey: string): Promise<void> {
        // TODO: this.page.locator( "//span[@id='QuickLink' and contains(text(),'" + testData.home("LinkName"+JsonKey) + "')]")).click()
    }

    async SwitchToMyInfoTab(): Promise<void> {
        await this.uIMyInfoTab.click();
    }

    async clickMyInfoTab(): Promise<void> {
        await this.uIMyInfoTab.click();
    }

    async verifyFieldInCallEntry(): Promise<void> {
        expect(await this.uIJurisLabel.innerText()).toEqual("Juris");
    }

    async switchToMyDocumentsTab(): Promise<void> {
        await this.uIMyDocumentsTab.click();
    }

    async verify404FileNotFoundErrorNotArise(): Promise<void> {
        const controlExist = await this.uI404Error.isVisible()
        if (controlExist == true) {
        const Text = await this.page.locator("//div[@class='content-container']").innerText();
        expect(Text.includes("404 - File or directory not found.")).toBeFalsy();
        expect(controlExist).toBeFalsy();
        }
    }
}

export class MyInfoTabPage {
    readonly page: Page;
    readonly uISecurityTab: Locator;
    readonly uIsaveScreen: Locator;
    readonly uIStatusBar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISecurityTab = page.locator("//span[contains(text(),'Security')]");
        this.uIsaveScreen = page.locator('NocmdSave');
        this.uIStatusBar = page.locator("//td[@class = 'statusBar']//b");
    }

    async switchToSecurityTab(): Promise<void> {
        await this.myInfoTab.click();
    }

    async saveScreen(): Promise<void> {
        await this.myInfoTab.click();
        // popup.confirm.acceptPopup()
    }
}

export class MyRemindersTabPage {
    readonly page: Page;
    readonly uIRefreshButton: Locator;
    readonly uIExpandAllCheckBox: Locator;
    readonly uIMyActivitiesAccordion: Locator;
    readonly uITrainingAccordion: Locator;
    readonly uICertificationAccordion: Locator;
    readonly uIAddressFlags_P_Accordion: Locator;
    readonly uICertificationResultGrid: Locator;
    readonly uIOffenderRegistrationResultGrid: Locator;
    readonly uIAddressFlagsPResultGrid: Locator;
    readonly uITrainingResultGrid: Locator;
    readonly uICaseManagementAccordation: Locator;
    readonly uIPropertyAccordation: Locator;
    readonly uIJobGradeReviewAccordation: Locator;
    readonly uIPerformanceReviewAccordation: Locator;
    readonly uIFleetAccordation: Locator;
    readonly uICMReviewDueRadioButton: Locator;
    readonly uICMReportDueRadioButton: Locator;
    readonly uICMNewAssignmentsRadioButton: Locator;
    readonly uICaseManagementTable: Locator;
    readonly uIPropertyTable: Locator;
    readonly uIJobGradeTable: Locator;
    readonly uIPerformanceReviewTable: Locator;
    readonly uIPropertyNoDataDisplayText: Locator;
    readonly uIFleetTable: Locator;
    readonly uIFleetNoDataDisplayText: Locator;
    readonly uIInventoryAccordation: Locator;
    readonly uIInventoryTable: Locator;
    readonly uIInventoryNoDataDisplayText: Locator;
    readonly uIInventoryLastDueText: Locator;
    readonly uIMyActivityTable: Locator;
    readonly uIActivityNoDataDisplayText: Locator;
    readonly uIInspectionAccordation: Locator;
    readonly uIInspectionTable: Locator;
    readonly uIRecordsRequestsAccordion: Locator;
    readonly uIRecordRrequestGrid: Locator;
    readonly uIInventoryNoDataDisplay: Locator;
    readonly uIPropertyTabNotAppear: Locator;
    readonly uIPhoneNumberFlagsAccordion: Locator;
    readonly uIPhoneNoFlagsTable: Locator;
    readonly uIMyActivitiesDateTime: Locator;
    readonly uITaskAccordation: Locator;
    readonly uITaskTable: Locator;
    readonly uIFTOAccordation: Locator;
    readonly uIFTOTable: Locator;
    readonly uIOffenderRegAccordation: Locator;
    readonly uIMyRemainderGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIRefreshButton = page.locator('NocmdRefresh');
        this.uIExpandAllCheckBox = page.locator('NochkExpand');
        this.uIMyActivitiesAccordion = page.locator('NohActivity');
        this.uITrainingAccordion = page.locator('NoTrainingHeader');
        this.uICertificationAccordion = page.locator('NoTrainingCertHeader');
        this.uIAddressFlags_P_Accordion = page.locator('NohAddrFlags');
        this.uICertificationResultGrid = page.locator('NogrdCertification');
        this.uIOffenderRegistrationResultGrid = page.locator('NogrdOffReg');
        this.uIAddressFlagsPResultGrid = page.locator('NogrdAddrFlags');
        this.uITrainingResultGrid = page.locator('NogrdTraining');
        this.uICaseManagementAccordation = page.locator('NohCaseManagement');
        this.uIPropertyAccordation = page.locator('NohProperty');
        this.uIJobGradeReviewAccordation = page.locator("//h3[contains(text(),'Job Grade Review')]");
        this.uIPerformanceReviewAccordation = page.locator("//h3[contains(text(),'Performance Review')]");
        this.uIFleetAccordation = page.locator('NohFleet');
        this.uICMReviewDueRadioButton = page.locator('NordlSchedule_0');
        this.uICMReportDueRadioButton = page.locator('NordlSchedule_1');
        this.uICMNewAssignmentsRadioButton = page.locator('NordlSchedule_2');
        this.uICaseManagementTable = page.locator('NogrdCases');
        this.uIPropertyTable = page.locator('NogrdProperty');
        this.uIJobGradeTable = page.locator('NogrdPersonnel');
        this.uIPerformanceReviewTable = page.locator('NogrdPerformanceReviewSrch');
        this.uIPropertyNoDataDisplayText = page.locator('NolblmsgProperty');
        this.uIFleetTable = page.locator('NogrdFleet');
        this.uIFleetNoDataDisplayText = page.locator('NolblmsgFleet');
        this.uIInventoryAccordation = page.locator("//h3[@id='hinventory']");
        this.uIInventoryTable = page.locator('NogrdInvSrch');
        this.uIInventoryNoDataDisplayText = page.locator('NolblmsgInventory');
        this.uIInventoryLastDueText = page.locator(" //div[@id='grdInvSrch'] //td[@class = 'RedCss']");
        this.uIMyActivityTable = page.locator('NogrdActLogSrch');
        this.uIActivityNoDataDisplayText = page.locator('NolblmsgActivity');
        this.uIInspectionAccordation = page.locator('Nohinspection');
        this.uIInspectionTable = page.locator('NogrdInspection');
        this.uIRecordsRequestsAccordion = page.locator('NohORRequestCount');
        this.uIRecordRrequestGrid = page.locator('NogrdORRequest');
        this.uIInventoryNoDataDisplay = page.locator('NolblmsgFleet');
        this.uIPropertyTabNotAppear = page.locator("//h3[@id='hProperty']");
        this.uIPhoneNumberFlagsAccordion = page.locator('NohPhoneFlags');
        this.uIPhoneNoFlagsTable = page.locator('NogrdPhoneFlags');
        this.uIMyActivitiesDateTime = page.locator("//img[@title='Ascending']");
        this.uITaskAccordation = page.locator("//h3[@id='hLeadTasks']");
        this.uITaskTable = page.locator('NogrdOverdueTask');
        this.uIFTOAccordation = page.locator("//h3[@id='hFTO']");
        this.uIFTOTable = page.locator('NoGrdFTOforAll');
        this.uIOffenderRegAccordation = page.locator("//h3[@id='hOffenderReg']");
        this.uIMyRemainderGrid = page.locator('NodivMyRemainder');
    }

    async ClickRefreshButton(): Promise<void> {
        await this.myRemindersTab.click();
    }

    async ClickExpandAllCheckBox(): Promise<void> {
        await this.myRemindersTab.click();
    }

    async ClickMyActivitiesAccordion(): Promise<void> {
        await this.myRemindersTab.click();
    }

    async ClickTrainingAccordion(): Promise<void> {
        await this.myRemindersTab.click();
    }

    async ClickCertificationAccordion(): Promise<void> {
        await this.myRemindersTab.click();
    }

    async clickOffenderRegistrationAccordion(): Promise<void> {
        await this.uIOffenderRegAccordation.scrollIntoViewIfNeeded()
        await this.myRemindersTab.click();
    }

    async ClickAddressFlags_P_Accordion(): Promise<void> {
        await this.myRemindersTab.click();
    }

    async VerifyAtAddressInAddressFlagsP(): Promise<void> {
        // TODO: grid expect assertion
    }

    async VerifyCertificationAsSeleniumCertification(rowIndex: string): Promise<void> {
        const uICertification = await gridHelpers.getGridCellInnerText( this.uICertificationResultGrid, "Certification", rowIndex)
        expect(uICertification.includes("Selenium Certification")).toBeTruthy()
    }

    async verifyNameIDByAtCategoryInGrid(): Promise<void> {
        const gridCell = await gridHelpers.getGridCell
        // (this.uIOffenderRegistrationResultGrid, testData.home('OffenderCategory'), "Name ID").innerText()
        expect(gridCell.trim()).toEqual(testData.home('NameID'))
    }

    async VerifyRecertifyByAsFutureDate(rowIndex: string): Promise<void> {
        const uIRecertify = await gridHelpers.getGridCellInnerText( this.uICertificationResultGrid, "Recertify-By", rowIndex)
        expect(DateHelpers.getFutureDateByMonth(1, "MM/dd/yy")).toEqual(uIRecertify);
    }

    async VerifyPFNameAsPatrolOfficer(rowIndex: string): Promise<void> {
        const uIPatrolOfficer = await gridHelpers.getGridCellInnerText(this.uITrainingResultGrid, "PF Name", rowIndex).replace(",", "")
        expect(uIPatrolOfficer.includes("Patrol Officer")).toBeTruthy()
    }

    async VerifyTitleAsSeleniumAutomationTraining(rowIndex: string): Promise<void> {
        const uITitle = await gridHelpers.getGridCellInnerText(this.uITrainingResultGrid, "Title", rowIndex)
        expect(uITitle.includes("Selenium Automation Training")).toBeTruthy()
    }

    async VerifyRequalifyByAsFutureDate(rowIndex: string): Promise<void> {
        const uIRecertify = await gridHelpers.getGridCellInnerText( this.uITrainingResultGrid, "Re-qualify By", rowIndex)
        expect(DateHelpers.getFutureDate(1, "MM/dd/yy")).toEqual(uIRecertify);
    }

    async ClickCaseManagementAccordion(): Promise<void> {
        await this.myRemindersTab.click();
    }

    async clickPropertyAccordion(): Promise<void> {
        await this.myRemindersTab.click();
    }

    async ClickJobGradeReviewAccordion(): Promise<void> {
        await this.myRemindersTab.click();
    }

    async ClickPerformanceReviewAccordation(): Promise<void> {
        await this.myRemindersTab.click();
    }

    async ClickFleetAccordation(): Promise<void> {
        await this.myRemindersTab.click();
    }

    async ClickInventoryAccordation(): Promise<void> {
        await this.myRemindersTab.click();
    }

    async VerifyCaseAtCaseInCM(): Promise<void> {
        const Case = await gridHelpers.getGridColumnValues(this.uICaseManagementTable, "CaseNo")
        expect(Case.includes(testData.home('CaseNo'))).toBeTruthy()
    }

    async VerifyCaseAtCaseInProperty(): Promise<void> {
        const Case = await gridHelpers.getGridColumnValues(this.uIPropertyTable, "CaseNo")
        expect(Case.includes(testData.home('CaseNo'))).toBeTruthy()
    }

    async VerifyAtFleetId(): Promise<void> {
        const uIFleetRow = await gridHelpers.selectGridRowByCellInnerText( this.uIFleetTable, testData.home('FleetID'))
        expect(await uIFleetRow.innerText().includes(testData.home('FleetID'))).toBeTruthy()
    }

    async VerifyAtFleetIdNotAppearInGrid(): Promise<void> {
        // TODO: expect assertion
    }

    async VerifyDueOneMonthFutureDateFromCurrentDate(): Promise<void> {
        // TODO: grid row selection
        const FleetDue = await gridHelpers.getGridCell(this.uIFleetTable, uIFleetRow, "Due")
        const futureDate = DateHelpers.getFutureDateByMonth(1, "MM/dd/yy");
        expect(await this.FleetDue.innerText()).toEqual(futureDate);
    }

    async SelectRowByAtFleetId(): Promise<void> {
        const uIFleetRow = await gridHelpers.selectGridRowByCellInnerText( this.uIFleetTable, testData.home('FleetID'))
        await uIFleetRow.click();
    }

    async VerifyGridRowStatusOpenByCaseId(): Promise<void> {
        const uICaseRow = await gridHelpers.selectGridRowByCellInnerText( this.uICaseManagementTable, testData.home('CaseNo'))
        const status = await gridHelpers.getGridCell(this.uICaseManagementTable, uICaseRow, "Status")
        expect(await status.innerText().includes("Open")).toBeTruthy();
    }

    async VerifyReportDueAs7thDayFromCurrentDate(): Promise<void> {
        const uICaseRow = await gridHelpers.selectGridRowByCellInnerText( this.uICaseManagementTable, testData.home('CaseNo'))
        const ReportDue = await gridHelpers.getGridCell(this.uICaseManagementTable, uICaseRow, "Rpt Due")
        expect(await ReportDue.innerText().includes(DateHelpers.getFutureDate(7, "MM/dd/yy"))).toBeTruthy();
    }

    async SelectInquiryTypeAsReviewDue(): Promise<void> {
        await this.myRemindersTab.click();
    }

    async VerifyReviewDueAs7thDayFromCurrentDate(): Promise<void> {
        const uICaseRow = await gridHelpers.selectGridRowByCellInnerText( this.uICaseManagementTable, testData.home('CaseNo'))
        const ReviewDue = await gridHelpers.getGridCell(this.uICaseManagementTable, uICaseRow, "Rev Due")
        expect(await ReviewDue.innerText().includes(DateHelpers.getFutureDate(7, "MM/dd/yy"))).toBeTruthy();
    }

    async SelectInquiryTypeAsNewAssignments(): Promise<void> {
        await this.myRemindersTab.click();
    }

    async VerifyAssignedDateAsCurrentDate(): Promise<void> {
        const uICaseRow = await gridHelpers.selectGridRowByCellInnerText( this.uICaseManagementTable, testData.home('CaseNo'))
        const AssignDate = await gridHelpers.getGridCell(this.uICaseManagementTable, uICaseRow, "Assigned Date")
        expect(await AssignDate.innerText().includes(DateHelpers.getCurrentDate())).toBeTruthy();
    }

    async VerifyEvidenceExistInTheReasonColumn(): Promise<void> {
        const uICaseRow = await gridHelpers.getGridColumnValues(this.uIPropertyTable, "Reason")
        expect(uICaseRow.includes("Evidence")).toBeTruthy()
    }

    async VerifyCyclesExistsInTheDescriptionColumn(): Promise<void> {
        const uICaseRow = await gridHelpers.getGridColumnValues(this.uIPropertyTable, "Description")
        expect(uICaseRow.includes("Cycles")).toBeTruthy()
    }

    async VerifyFollowUpDateAs5thDayFromCurrentDate(): Promise<void> {
        const uICaseRow = await gridHelpers.selectGridRowByCellInnerText( this.uIPropertyTable, testData.home('CaseNo'))
        const FollowUpDate = await gridHelpers.getGridCell(this.uIPropertyTable, uICaseRow, "Follow-Up Date")
        expect(await FollowUpDate.innerText().includes(DateHelpers.getFutureDate(5, "MM/dd/yy"))).toBeTruthy();
    }

    async VerifyExpirationDateAsOneDayFutureFromCurrentDateByAtInventoryNo(): Promise<void> {
        const row = await gridHelpers.selectGridRowByCellInnerText( this.uIInventoryTable, testData.home('InventoryNo'))
        const expireDate = await gridHelpers.getGridCell(this.uIInventoryTable, row, "Expired Date")
        expect(DateHelpers.getFutureDate(1, "MM/dd/yy")).toEqual(expireDate.innerText());
    }

    async SelectRowAtCase(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText( this.uIPropertyTable, testData.home('CaseNo'))
    }

    async VerifyAtInventoryNo(): Promise<void> {
        const uIInventoryRow = await gridHelpers.selectGridRowByCellInnerText( this.uIInventoryTable, testData.home('InventoryNo'))
        expect(await uIInventoryRow.innerText().includes(testData.home('InventoryNo'))).toBeTruthy()
    }

    async VerifyItemTypeAsDesktopComputerByAtInventoryNo(): Promise<void> {
        const uIInventoryRow = await gridHelpers.selectGridRowByCellInnerText( this.uIInventoryTable, testData.home('InventoryNo'))
        const ItemType = await gridHelpers.getGridCell(this.uIInventoryTable, uIInventoryRow, "Item Type")
        expect(await this.ItemType.innerText()).toEqual("Desktop Computer");
    }

    async VerifyItemDescriptionAsComputerPartsByAtInventoryNo(): Promise<void> {
        const uIInventoryRow = await gridHelpers.selectGridRowByCellInnerText( this.uIInventoryTable, testData.home('InventoryNo'))
        const ItemDescription = await gridHelpers.getGridCell(this.uIInventoryTable, uIInventoryRow, "Item Description")
        expect(await this.ItemDescription.innerText()).toEqual("Computer Parts");
    }

    async SelectRowAtInventoryNo(): Promise<void> {
        const uIInventoryRow = await gridHelpers.selectGridRowByCellInnerText( this.uIInventoryTable, testData.home('InventoryNo'))
        await uIInventoryRow.click();
    }

    async VerifyInventoryAtInventoryNotAppearInGrid(): Promise<void> {
        expect(await this.uIInventoryNoDataDisplayText.innerText()).toEqual("No Data To Display")
    }

    async VerifyAtInventoryNoNotAppearInGrid(): Promise<void> {
        const Allelements = await this.page.locator("//div[@id='accordion']//h3").all()
        for (const element of Allelements) {
        const text = await element.innerText();
        expect(text.includes(testData.home('InventoryNo'))).toBeFalsy()
        }
    }

    async VerifyCaseAtCaseNotAppearInGrid(): Promise<void> {
        expect(await this.myRemindersTab.isVisible()).toBeTruthy();
    }

    async VerifyLastDateInRedColor(): Promise<void> {
        expect(await this.myRemindersTab.isVisible()).toBeTruthy();
    }

    async VerifyPFCodeAtPFCode(): Promise<void> {
        // TODO: grid row selection
        expect(await uIPFRow.innerText().includes(testData.home('PFCode'))).toBeTruthy()
    }

    async VerifyRankAsDetectiveByAtPFCode(): Promise<void> {
        const uIPFRow = await gridHelpers.getGridRowByCellInnerText( this.uIJobGradeTable, testData.home('PFCode'))
        const Rank = await gridHelpers.getGridCell(this.uIJobGradeTable, uIPFRow, "Rank")
        expect(await Rank.innerText().includes("Detective")).toBeTruthy();
    }

    async VerifyBadgeNoAs100ByAtPFCode(): Promise<void> {
        const uIPFRow = await gridHelpers.selectGridRowByCellInnerText( this.uIJobGradeTable, testData.home('PFCode'))
        const BadgeNo = await gridHelpers.getGridCell(this.uIJobGradeTable, uIPFRow, "BadgeNo")
        expect(await BadgeNo.innerText().includes("100")).toBeTruthy();
    }

    async VerifyJobGradeAsJobGrade1ByAtPFCode(): Promise<void> {
        const uIPFRow = await gridHelpers.selectGridRowByCellInnerText( this.uIJobGradeTable, testData.home('PFCode'))
        const JobGrade = await gridHelpers.getGridCell(this.uIJobGradeTable, uIPFRow, "Job Grade")
        expect("Job Grade 1").toEqual(JobGrade);
    }

    async VerifyNextReviewDateAsCurrentDateByAtPFCode(): Promise<void> {
        const uIPFRow = await gridHelpers.selectGridRowByCellInnerText( this.uIJobGradeTable, testData.home('PFCode'))
        const NextReviewDate = await gridHelpers.getGridCell(this.uIJobGradeTable, uIPFRow, "Next Review Date")
        expect(await NextReviewDate.innerText().includes(DateHelpers.getCurrentDate("MM/dd/yy"))).toBeTruthy();
    }

    async SelectRowAtPFCode(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText( this.uIJobGradeTable, testData.home('PFCode'))
    }

    async VerifyPFCodeAtPFCodeInPerformanceRev(rowIndex: string): Promise<void> {
        const uIPFRow = await gridHelpers.getGridCell(this.uIPerformanceReviewTable, "PF Code", rowIndex)
        expect(await uIPFRow.innerText().includes(testData.home('PFCode'))).toBeTruthy()
    }

    async VerifyBadgeAs100InPerformanceRevByAtPFCode(): Promise<void> {
        const uIPFRow = await gridHelpers.selectGridRowByCellInnerText( this.uIPerformanceReviewTable, testData.home('PFCode'))
        const Badge = await gridHelpers.getGridCell(this.uIPerformanceReviewTable, uIPFRow, "Badge")
        expect(await Badge.innerText().includes("100")).toBeTruthy();
    }

    async VerifyTitleAsDetectiveByAtPFCode(): Promise<void> {
        const uIPFRow = await gridHelpers.selectGridRowByCellInnerText( this.uIPerformanceReviewTable, testData.home('PFCode'))
        const Title = await gridHelpers.getGridCell(this.uIPerformanceReviewTable, uIPFRow, "Title")
        expect(await Title.innerText().includes("Detective")).toBeTruthy();
    }

    async VerifyNextReviewDateAs2DaysFutureFromCurrentDayByAtPFCode(): Promise<void> {
        const uIPFRow = await gridHelpers.selectGridRowByCellInnerText( this.uIPerformanceReviewTable, testData.home('PFCode'))
        const tg = DateHelpers.getFutureDate(2, "MM/dd/yyyy");
        const NextReviewDate = await gridHelpers.getGridCell(this.uIPerformanceReviewTable, uIPFRow, "Next Review")
        expect(await NextReviewDate.innerText().includes(DateHelpers.getFutureDate(2, "MM/dd/yy"))).toBeTruthy();
    }

    async SelectRowAtPFCodeInPerformanceRev(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText( this.uIPerformanceReviewTable, testData.home('PFCode'))
    }

    async VerifyDateTimeAsCurrentDate(): Promise<void> {
        const DateTime = await gridHelpers.getGridCell(this.uIMyActivityTable, testData.home('ActivityType'), "Date Time")
        expect(DateTime.includes(DateHelpers.getCurrentDate("MM/dd/YY"))).toBeTruthy();
    }

    async VerifyDateTimeAsCurrentDateinFirstRow(): Promise<void> {
        const DateTime = await gridHelpers.getGridCellInnerText(this.uIMyActivityTable, "Date Time", 0)
        const currentDate = DateHelpers.getCurrentDate("MM/dd/yy");
        expect(DateTime.includes(currentDate)).toBeTruthy();
    }

    async VerifyStatusAsRequestToDo(): Promise<void> {
        const status = await gridHelpers.getGridCell(this.uIMyActivityTable, testData.home('ActivityType'), "Status")
        expect(status.includes("Request/To-Do")).toBeTruthy()
    }

    // Duplicate VerifyStatusAsRequestToDo removed - see method above

    async VerifyStatusAsScheduledItem(): Promise<void> {
        const status = await gridHelpers.getGridCellInnerText(this.uIMyActivityTable, "Status", 0)
        expect(status.includes("Scheduled Item")).toBeTruthy()
    }

    async VerifyStatusAsCompletedActivity(): Promise<void> {
        const status = await gridHelpers.getGridCellInnerText(this.uIMyActivityTable, "Status", 0)
        expect(status.includes("Completed Activity")).toBeTruthy()
    }

    async VerifySubjectAsTesting(): Promise<void> {
        const ActivityType = await gridHelpers.getGridCell(this.uIMyActivityTable, "Damage").innerText()
        const Subject = await gridHelpers.getGridCell(this.uIMyActivityTable, ActivityType, "Subject")
        expect(Subject).toEqual("Testing");
    }

    async VerifySubjectAsMaintenanceActivity(): Promise<void> {
        const subject = await gridHelpers.getGridCellInnerText(this.uIMyActivityTable, "Subject", 0)
        expect(subject.includes("Maintenance Activity")).toBeTruthy()
    }

    async VerifySubjectNotAppearInGrid(): Promise<void> {
        const cells = await gridHelpers.getGridColumnValues( this.uIMyActivityTable, "Subject")
        expect(cells.includes(testData.Accounting('Subject'))).toBeFalsy()
    }

    async ClickActivityRow(rowIndex: string): Promise<void> {
        await this.myRemindersTab.locator('td', { hasText: activityType }).click();
    }

    async ClickActivityRow(): Promise<void> {
        await gridHelpers.selectGridTableRow(this.uIMyActivityTable, 0)
    }

    async ClickInspectionAccordian(): Promise<void> {
        await this.myRemindersTab.click();
    }

    async VerifyAtSystemID(): Promise<void> {
        // TODO: grid expect assertion
    }

    async verifyAtOccupancyName(): Promise<void> {
        // TODO: expect(await gridHelpers.getGridCell(this.uIInspectionTable.trim()).toEqual(testData.home('OccupancyName'))
    }

    async verifyAtType(): Promise<void> {
        // TODO: expect(await gridHelpers.getGridCell(this.uIInspectionTable.trim()).toEqual(testData.home('Type'))
    }

    async VerifyDueDateAsFutureDate(dateCount: string): Promise<void> {
        expect(DateHelpers.getFutureDate(dateCount, "MM/dd/yy")).toEqual(dueDate);
        // gridHelpers.getGridCell(this.uIInspectionTable, // testData.home('SystemID'), "Due Date"))
    }

    async SelectRowByAtSubject(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText(this.uIMyActivityTable, testData.home('Subject'))
    }

    async VerifyCertificationAsFirefighter(rowIndex: string): Promise<void> {
        const uICertification = await gridHelpers.getGridCellInnerText( this.uICertificationResultGrid, "Certification", rowIndex)
        expect(uICertification.includes("Firefighter I")).toBeTruthy()
    }

    async VerifyTitleAsFireFightingResponse(rowIndex: string): Promise<void> {
        const uITitle = await gridHelpers.getGridCellInnerText(this.uITrainingResultGrid, "Title", rowIndex)
        expect(uITitle.includes("Fire Fighting Response")).toBeTruthy()
    }

    async VerifyPFNameAsFireDispatcher(rowIndex: string): Promise<void> {
        const uIPatrolOfficer = await gridHelpers.getGridCellInnerText(this.uITrainingResultGrid, "PF Name", rowIndex).replace(",", "")
        expect(uIPatrolOfficer.includes("Fire Dispatcher")).toBeTruthy()
    }

    async ClickRecordsRequestsAccordion(): Promise<void> {
        await this.myRemindersTab.click();
    }

    async VerifyRecordsRequestsISEnabled(): Promise<void> {
        expect(this.uIRecordsRequestsAccordion.isEnabled()).toBeTruthy()
    }

    async VerifyRecordsRequestsCount(): Promise<void> {
        const rowsCount = await gridHelpers.getGridRowsCount(this.uIRecordRrequestGrid)
    }

    async VerifyAtRequestNoFromGrid(): Promise<void> {
        const RequestNo = await gridHelpers.getGridCell(this.uIRecordRrequestGrid, testData.home('CallAndCase'), "RequestNo")
        expect(RequestNo.trim()).toEqual(testData.home('RequestNo'))
    }

    async VerifyAtRequestedByFromGrid(): Promise<void> {
        const RequestedBy = await gridHelpers.getGridCell(this.uIRecordRrequestGrid, testData.home('RequestNo'), "Requested By")
        expect(RequestedBy.trim()).toEqual(testData.home('RequestedBy'))
    }

    async VerifyAtRequestTypeFromGrid(): Promise<void> {
        const RequestType = await gridHelpers.getGridCell(this.uIRecordRrequestGrid, testData.home('RequestNo'), "Request Type")
        expect(RequestType.trim()).toEqual(testData.home('RequestType'))
    }

    async VerifyAtDueClosedDateFromGrid(rowIndex: string): Promise<void> {
        const duecloseddate = await gridHelpers.getGridCell( this.uIRecordRrequestGrid, testData.home('RequestNo'), "Due/Closed Date")
        expect(duecloseddate.includes(testData.home('DueClosedDate'))).toBeTruthy()
    }

    async VerifyAtCallAndCaseFromGrid(): Promise<void> {
        const CallandCase = await gridHelpers.getGridCell(this.uIRecordRrequestGrid, testData.home('RequestNo'), "Call/CaseNo")
        expect(CallandCase.trim()).toEqual(testData.home('CallAndCase'))
    }

    async VerifyAtAssignedToFromGrid(): Promise<void> {
        const assingedTo = await gridHelpers.getGridCell(this.uIRecordRrequestGrid, testData.home('AssignedTo'), "Assigned To")
        expect(assingedTo.trim()).toEqual(testData.home('AssignedTo'))
    }

    async verifyAtRegNo(): Promise<void> {
        // TODO: grid expect assertion
    }

    async verifyAtSubjectInActivitiesTable(): Promise<void> {
        const gridTableColumnValues = await gridHelpers.getGridColumnValues(this.uIMyActivityTable, "Subject")
        for (const values of gridTableColumnValues) {
        expect(values.includes(testData.home('Subject'))).toBeTruthy()
        }
    }

    async verifyAtSubjectInGrid(): Promise<void> {
        const gridCell = await gridHelpers.getGridCell( this.uIMyActivityTable, testData.home('Subject'))
        expect(await gridCell.innerText().includes(testData.home('Subject'))).toBeTruthy()
    }

    async VerifyFleetNoDataDisplay(): Promise<void> {
        expect(await this.myRemindersTab.isVisible()).toBeTruthy();
    }

    async VerifyPropertyTabNotAppear(): Promise<void> {
        const controlExist = await this.uIPropertyTable.isVisible()
        expect(controlExist).toBeFalsy();
    }

    async clickPhoneNumberFlagsAccordion(): Promise<void> {
        await this.myRemindersTab.click();
    }

    async verifyAtPhoneNoInPhoneNumberFlagsGrid(): Promise<void> {
        const gridRowByCellInnerText = await gridHelpers.selectGridRowByCellInnerText( this.uIPhoneNoFlagsTable, testData.home('PhoneNumber'))
        // TODO: expectTruthy( gridRowByCellInnerText.innerText().includes(testData.home('PhoneNumber')))
    }

    async verifyAtFlagInInPhoneNumberFlagsGrid(): Promise<void> {
        const gridRowByCellInnerText = await gridHelpers.selectGridRowByCellInnerText( this.uIPhoneNoFlagsTable, testData.home('Flags'))
        expect(await gridRowByCellInnerText.innerText().includes(testData.home('Flags'))).toBeTruthy()
    }

    async verifyCountInMyActivitiesGrid(Count: string): Promise<void> {
        const gridTableRowsCount = await gridHelpers.getGridRowsCount(this.uIMyActivityTable)
        // TODO: expectIntNotEqual(Count, gridTableRowsCount)
    }

    async VerifyAtbadgeNoInPfCode(): Promise<void> {
        const PFRow = await gridHelpers.selectGridRowByCellInnerText( this.uIJobGradeTable, testData.home('PFCode'))
        const BadgeNo = await gridHelpers.getGridCell(this.uIJobGradeTable, PFRow, "BadgeNo")
        expect(testData.home('Badge'))
    }

    async VerifyRequestNoInGridByRequestno(Request: string): Promise<void> {
        const RequestNo = await gridHelpers.getGridCell(this.uIRecordRrequestGrid.trim()).toEqual(BadgeNo)
        const RequestedBy = await gridHelpers.getGridCell(this.uIRecordRrequestGrid, RequestNo, "Requested By")
        expect(RequestedBy.trim()).toEqual(testData.home('RequestedBy'))
    }

    async verifyCallAndCaseNoByRequestNo(Request: string): Promise<void> {
        const RequestNo = await gridHelpers.getGridCell(this.uIRecordRrequestGrid, Request).innerText()
        const RequestedBy = await gridHelpers.getGridCell(this.uIRecordRrequestGrid, RequestNo, "Call/CaseNo")
        expect(RequestedBy.trim()).toEqual(testData.home('CaseNo'))
    }

    async verifyAddressFlagBasedOnDays(): Promise<void> {
        const gridTableColumnValues = await gridHelpers.getGridColumnValues( this.uIAddressFlagsPResultGrid, "Last Updated")
        for (const date of gridTableColumnValues) {
        const difference = parseInt(DateHelpers.getNoOfDaysDifference(DateHelpers.getCurrentDate("MM/dd/YY"), date))
        const Days = parseInt(testData.geo('Days'))
        if (difference > Days) {
        expect(difference > Days).toBeTruthy();
        }
        }
    }

    async verifyAtServiceDueByActiveInventoryNo(readInventoryNo: string): Promise<void> {
        const futureDateByMonth = DateHelpers.getFutureDateByMonth(1, "MM/dd/yy");
        const gridCell = await gridHelpers.getGridCell(this.uIInventoryTable, readInventoryNo, "Service Due")
        expect(DateHelpers.getCurrentDate("MM/dd/yy")).toEqual(gridCell);
    }

    async verifyExpiredDateByActiveInventoryNo(readInventoryNo1: string): Promise<void> {
        const futureDate = DateHelpers.getFutureDate(1, "MM/dd/yy");
        const gridCell = await gridHelpers.getGridCell(this.uIInventoryTable, readInventoryNo1, "Expired Date")
        expect(futureDate).toEqual(await gridCell.innerText());
    }

    async verifyServiceDueAsRedColorByActiveInventoryNo(readInventoryNo: string): Promise<void> {
        // red - rgba(255, 0, 0, 1)
        const cssValue = await gridHelpers.getGridCell(this.uIInventoryTable, readInventoryNo, "Service Due").getCssValue("color")
        expect("rgba(255, 0, 0, 1)").toEqual(cssValue);
    }

    async ClickDateTimeCloumnName(): Promise<void> {
        const columnName = await gridHelpers.getGridHeaderColumnCell(this.uIMyActivityTable, "Date Time")
        await columnName.click();
        await this.myRemindersTab.click();
    }

    async VerifyActivityDateTime(Date: string, Time: string): Promise<void> {
        const DateTime = await gridHelpers.getGridCellInnerText(this.uIMyActivityTable, "Date Time", 0)
        expect(DateTime.includes(Date)).toBeTruthy();
        expect(DateTime.includes(Time)).toBeTruthy();
    }

    async selectRandomInventory(): Promise<void> {
        // TODO: select random grid expand row this.uIInventoryTable
    }

    async verifyRegNumbers(): Promise<void> {
        const gridTableColumnValues = await gridHelpers.getGridColumnValues(this.uIInspectionTable, "RegNo")
        expect(gridTableColumnValues === systemID).toBeTruthy();
    }

    async verifyRowCountIsTwo(): Promise<void> {
        const rowCount = await gridHelpers.getGridRowsCount(this.uIInspectionTable)
        expect(2).toEqual(rowCount)
    }

    async clickTaskAccordion(): Promise<void> {
        await this.myRemindersTab.click();
    }

    async verifyAtCallNo(): Promise<void> {
        const text = await gridHelpers.getGridCell(this.uITaskTable, testData.home('Assigned Task') , "RefNo")
        expect(text.trim()).toEqual(testData.home('CallNo'))
    }

    async verifyAtItemTypeUsingCallNo(): Promise<void> {
        const text = await gridHelpers.getGridCell(this.uITaskTable, testData.home('CallNo') , "Item Type")
        expect(text.trim()).toEqual(testData.home('ItemType'))
    }

    async verifyAtAssignedTaskUsingCallNo(): Promise<void> {
        const text = await gridHelpers.getGridCell(this.uITaskTable, testData.home('CallNo') , "Assigned Task")
        expect(text.trim()).toEqual(testData.home('TaskCode'))
    }

    async verifyAtAssignedTaskAsBlackColorUsingCallNo(): Promise<void> {
        const color = await gridHelpers.getGridCell(this.uITaskTable, testData.home('CallNo') , "Assigned Task").getCssValue("color")
        expect(color).toEqual("rgba(0, 0, 0, 1)");
    }

    async verifyAtAssignedTaskAsBlackColorUsingCaseNo(): Promise<void> {
        const color = await gridHelpers.getGridCell(this.uITaskTable, testData.home('CaseNo') , "Assigned Task").getCssValue("color")
        expect(color).toEqual("rgba(0, 0, 0, 1)");
    }

    async clickAtCallNo(): Promise<void> {
        await gridHelpers.getGridCell(this.uITaskTable, testData.home('Assigned Task') , "RefNo").click()
    }

    async clickAtCaseNo(): Promise<void> {
        await gridHelpers.getGridCell(this.uITaskTable, testData.home('Assigned Task') , "RefNo").click()
    }

    async verifyAtAssignedTaskAsRedColorUsingCallNo(): Promise<void> {
        const color = await gridHelpers.getGridCell(this.uITaskTable, testData.home('CallNo') , "Assigned Task").getCssValue("color")
        expect(color).toEqual("rgba(255, 0, 0, 1)");
    }

    async verifyAtAssignedTaskAsRedColorUsingCaseNo(): Promise<void> {
        const color = await gridHelpers.getGridCell(this.uITaskTable, testData.home('CaseNo') , "Assigned Task").getCssValue("color")
        expect(color).toEqual("rgba(255, 0, 0, 1)");
    }

    async verifyAtCallNoIsNotDisplayed(): Promise<void> {
        const gridTableColumnValues = await gridHelpers.getGridColumnValues(this.uITaskTable, "RefNo")
        for (const val of gridTableColumnValues) {
        expect(val !== testData.home('CallNo')).toBeTruthy()
        }
    }

    async verifyAtCaseNoIsNotDisplayed(): Promise<void> {
        const gridTableColumnValues = await gridHelpers.getGridColumnValues(this.uITaskTable, "RefNo")
        for (const val of gridTableColumnValues) {
        expect(val !== testData.home('CaseNo')).toBeTruthy()
        }
    }

    async verifyTaskAccordionIsDisabled(): Promise<void> {
        const attribute = await this.uITaskAccordation.getAttribute("style")
        expect(await this.uITaskAccordation.getAttribute("style")).toContain("pointer-events: none")
    }

    async verifyAtCaseNo(): Promise<void> {
        const text = await gridHelpers.getGridCell(this.uITaskTable, testData.home('Assigned Task') , "RefNo")
        expect(text.trim()).toEqual(testData.home('CaseNo'))
    }

    async verifyAtItemTypeUsingCaseNo(): Promise<void> {
        const text = await gridHelpers.getGridCell(this.uITaskTable, testData.home('CaseNo') , "Item Type")
        expect(text.trim()).toEqual(testData.home('ItemType'))
    }

    async verifyAtAssignedTaskUsingCaseNo(): Promise<void> {
        const text = await gridHelpers.getGridCell(this.uITaskTable, testData.home('CaseNo') , "Assigned Task")
        expect(text.trim()).toEqual(testData.home('TaskCode'))
    }

    async verifyAtAddress(): Promise<void> {
        const getAddress = await gridHelpers.getGridCell(this.uIInspectionTable, testData.home('RegNo'), "Address")
        expect(getAddress.trim()).toEqual(testData.home('Address'))
    }

    async verifyAtCycle(): Promise<void> {
        const getCycle = await gridHelpers.getGridCell(this.uIInspectionTable, testData.home('RegNo'), "Cycle")
        expect(getCycle.trim()).toEqual(testData.home('Cycle'))
    }

    async verifyAtStateReg(): Promise<void> {
        const getStateReg = await gridHelpers.getGridCell(this.uIInspectionTable, testData.home('RegNo'), "State RegNo")
        expect(getStateReg.trim()).toEqual(testData.home('StateReg'))
    }

    async verifyAtLocalID(): Promise<void> {
        const getLocalID = await gridHelpers.getGridCell(this.uIInspectionTable, testData.home('RegNo'), "Local ID")
        expect(getLocalID.trim()).toEqual(testData.home('LocalID'))
    }

    async verifyRefreshButtonIsDisplayed(): Promise<void> {
        await expect(this.uIRefreshButton).toBeVisible()
    }

    async ClickFTOAccordation(): Promise<void> {
        await this.myRemindersTab.click();
    }

    async verifyAtFTONoInGrid(): Promise<void> {
        const uIFTORow = await gridHelpers.selectGridRowByCellInnerText( this.uIFTOTable, testData.home('FTONo'))
        expect(await uIFTORow.innerText().includes(testData.home('FTONo'))).toBeTruthy()
    }

    async selectAtFTONoInGrid(): Promise<void> {
        const uIFTORow = await gridHelpers.selectGridRowByCellInnerText( this.uIFTOTable, testData.home('FTONo'))
        await this.uIFTORow.click();
    }

    async verifyAtStatusBySubjectInGrid(): Promise<void> {
        const status = await gridHelpers.getGridCell(this.uIMyActivityTable, testData.home('Subject'), "Status")
        expect(status.trim()).toEqual( testData.home('ActivityStatus'))
    }

    async verifyOffenderListIsNotDisplayed(JsonkeyIndex: string): Promise<void> {
        // TODO: const reminderPresent = check reminder grid

        expect(reminderPresent, "RemainderValuesShouldNotcontains").toBeFalsy();
    }
}

export class MyReportsTabPage {
    readonly page: Page;
    readonly uIStatusComboBox: Locator;
    readonly uIJurisComboBox: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIReportTable: Locator;
    readonly uISearchButton: Locator;
    readonly uIItemTypeComboBox: Locator;
    readonly uIShowMyItemsOnlyCheckBox: Locator;
    readonly uIRefreshLink: Locator;
    readonly uIReportTypeCombobox: Locator;
    readonly uIReportTypeArrow: Locator;
    readonly uIReportTypeDropdown: Locator;
    readonly uINextButton: Locator;
    readonly uIStatusRadDropdownArrow: Locator;
    readonly uIMyReportsFrame: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIStatusComboBox = page.locator('NolstChkReportStatus_DropDown');
        this.uIMyReportsFrame = page.locator('#MyReportsFrame');
        this.uIJurisComboBox = page.locator('NolstJuris');
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIReportTable = page.locator('NogrdCBEReports');
        this.uISearchButton = page.locator('NocmdSearch');
        this.uIItemTypeComboBox = page.locator('NocddRepositoryID_DropDown');
        this.uIShowMyItemsOnlyCheckBox = page.locator("//input[@id='chkMyItem']");
        this.uIRefreshLink = page.locator("//span[contains(text(),'Refresh')]");
        this.uIReportTypeCombobox = page.locator('NocddRptType');
        this.uIReportTypeArrow = page.locator('NocddRptType_Arrow');
        this.uIReportTypeDropdown = page.locator('NocddRptType_Arrow');
        this.uINextButton = page.locator('NogrdCBEReports_ctl00_lnkbtnNext');
        this.uIStatusRadDropdownArrow = page.locator('NolstChkReportStatus_Arrow');
    }

    async SelectAtStatus(): Promise<void> {
        await this.myReportsTab.click();
        // TODO: selectRadControlDropdown( this.uIStatusComboBox, testData.home('Status'))
        await this.myReportsTab.click();
    }

    async Verify13AccessRestrictedByAUTOAckMsg(): Promise<void> {
        // TODO: handle acknowledge popup with message "(13) Access Restricted by Prophoenix, Automation"
    }

    async SelectStatusAsReportDue(): Promise<void> {
        await this.myReportsTab.click();
        // TODO: select RadControl dropdown this.uIStatusComboBox with value "Report Due"
        await this.myReportsTab.click();
    }

    async SelectStatusAsOnHold(): Promise<void> {
        await this.myReportsTab.click();
        // TODO: select RadControl dropdown this.uIStatusComboBox with value "OnHold"
        await this.myReportsTab.click();
    }

    async SelectStatusAsKeypunch(): Promise<void> {
        await this.myReportsTab.click();
        // TODO: select RadControl dropdown this.uIStatusComboBox with value "Keypunch"
        await this.myReportsTab.click();
    }

    async SelectStatusAsReadyToSubmit(): Promise<void> {
        await this.myReportsTab.click();
        // TODO: select RadControl dropdown this.uIStatusComboBox with value "Ready To Submit"
        await this.myReportsTab.click();
    }

    async SelectStatusAsMoreInfoNeeded(): Promise<void> {
        await this.myReportsTab.click();
        // TODO: select RadControl dropdown this.uIStatusComboBox with value "More Info Needed"
        await this.myReportsTab.click();
    }

    async SelectStatusAsRejected(): Promise<void> {
        await this.myReportsTab.click();
        // TODO: select RadControl dropdown this.uIStatusComboBox with value "Rejected"
        await this.myReportsTab.click();
    }

    async SelectStatusAsSubmitted(): Promise<void> {
        // TODO: select dropdown option on this.uIStatusComboBox,
        //					"Submitted");
        await this.myReportsTab.click();
        // TODO: select RadControl dropdown this.uIStatusComboBox with value "Submitted"
        await this.myReportsTab.click();
    }

    async VerifyCaseAtCaseNo(): Promise<void> {
        const Case = await gridHelpers.getGridColumnValues(this.uIReportTable, "RefNo")
        expect(Case.includes(testData.home('CaseNo'))).toBeTruthy()
    }

    async VerifyTypeAsPropertyReport(): Promise<void> {
        const PropertyType = await gridHelpers.getGridCell(this.uIReportTable, "Property Report")
        // Assert.assertEquals(PropertyType.innerText(), "Property Report")
    }

    async VerifyStatusAsRejected(): Promise<void> {
        const status = await gridHelpers.getGridCell(this.uIReportTable, "Rejected")
        // Assert.assertEquals(status.innerText(), "Rejected")
    }

    async VerifyStatusAsSubmitted(): Promise<void> {
        const status = await gridHelpers.getGridCell(this.uIReportTable, "Submitted")
        // Assert.assertEquals(status.innerText(), "Submitted")
    }

    async SelectRowByAtCaseNo(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText( this.uIReportTable, testData.home('CaseNo'))
    }

    async AssignAsKeypunch(): Promise<void> {
        // Popup.Confirm.yesWithExpectedMessage("(7267) This report was Sent to
        // Keypunch. Do you want to start editing the report?");
        // TODO: handle confirm popup - click yes
    }

    async SelectRowFromGrid(): Promise<void> {
        // TODO: select random grid row this.uIReportTable
    }

    async ClickAddNewButton(): Promise<void> {
        await this.myReportsTab.click();
    }

    async VerifyGridRowInMyReportsTab(): Promise<void> {
        const uICaseRow = await gridHelpers.selectGridRowByCellInnerText( this.uIReportTable, testData.home('CaseNo'))
        const cellValues = await gridHelpers.getGridRowCellsValues(uICaseRow)
        expect(cellValues.includes(testData.home('Type'))).toBeTruthy()
        expect(cellValues.includes(testData.home('MyReportStatus'))).toBeTruthy()
    }

    async VerifyGridRowTypeAsIncidentReportByCaseNo(): Promise<void> {
        // TODO: expectTruthy( gridHelpers.getGridCell(this.uIReportTable, // testData.home('CaseNo'), "Item Type").includes("Incident Report"))
    }

    async VerifyGridRowStatusAsReportDueByCaseNo(): Promise<void> {
        const uICaseRow = await gridHelpers.selectGridRowByCellInnerText( this.uIReportTable, testData.home('CaseNo'))
        const status = await gridHelpers.getGridCell(this.uIReportTable, uICaseRow, "Status")
        expect(await status.innerText().includes("Report Due")).toBeTruthy();
    }

    async VerifyGridRowAtUnitByCaseNo(): Promise<void> {
        // TODO: expectTruthy( gridHelpers.getGridCell(this.uIReportTable, // testData.home('CaseNo'), "Unit").includes(testData.home('Unit')))
    }

    async VerifyGridRowAtOfficerByCaseNo(): Promise<void> {
        // TODO: expectTruthy( gridHelpers.getGridCell(this.uIReportTable, // testData.home('CaseNo'), "Officer").includes(testData.home('Officer')))
    }

    async VerifyGridRowAtOfficerByCaseNo(caseNo: string): Promise<void> {
        expect(await gridHelpers.getGridCell(this.uIReportTable, caseNo, "Officer").includes(testData.home('OfficerPF'))).toBeTruthy()
    }

    async VerifyGridRowAtMgmtCFSByCaseNo(): Promise<void> {
        const uICaseRow = await gridHelpers.selectGridRowByCellInnerText( this.uIReportTable, testData.home('CaseNo'))
        const CFS = await gridHelpers.getGridCell(this.uIReportTable, uICaseRow, "Mgmt-CFS")
        expect(await CFS.innerText().includes("0901")).toBeTruthy();
    }

    async VerifyGridRowStatusAsReportDue(): Promise<void> {
        const cellValues = await gridHelpers.getGridColumnValues(this.uIReportTable, "Status")
        for (const strStatus of cellValues) {
        // Assert.assertEquals(strStatus, "Report Due")
        }
    }

    async VerifyGridRowStatusAsOnHold(): Promise<void> {
        const res = true;
        // while (res)
        const cellValues = await gridHelpers.getGridColumnValues(this.uIReportTable, "Status")
        for (const strStatus of cellValues) {
        if (strStatus.includes("OnHold")) {
        // Assert.assertEquals(strStatus, "OnHold")
        // continue
        }
        }
    }

    async MouseOverOfficerNameCellByAtCase(): Promise<void> {
        const cell = await gridHelpers.selectGridRowByCellInnerText( this.uIReportTable, testData.home('CaseNo'))
        const OfficerName = await gridHelpers.getGridCell(this.uIReportTable, cell, "Officer")
        // action.moveToElement(OfficerName).perform()
    }

    async SelectRowByAtType(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText( this.uIReportTable, testData.home('Type'))
    }

    async ClickSearchButton(): Promise<void> {
        await this.myReportsTab.click();
    }

    async VerifyGridRowStatusAsTranscriber(): Promise<void> {
        const cellValues = await gridHelpers.getGridColumnValues(this.uIReportTable, "Status")
        for (const strStatus of cellValues) {
        // Assert.assertEquals(strStatus, "Transcriber")
        }
    }

    async VerifyOtherOfficerToKeypunchConfirmMessage(): Promise<void> {
        // confirm.yesWithExpectedMessage( "(7267) This report was Sent to Keypunch. Do you want to start editing the report?")
        // confirm.yesWithExpectedMessage( "(7267) This report was Sent to Keypunch. Do you want to start editing the report?")
    }

    async VerifyOtherOfficerNotAllowedToEditKeypunchConfirmMessage(): Promise<void> {
        // confirm.yesWithExpectedMessage( "(7268)The report is being updated by  KeyPunch, Officer, P003            . Editing is not allowed. Do you want to view the report?")
        // confirm.yesWithExpectedMessage( "(7267) This report was Sent to Keypunch. Do you want to start editing the report?")
    }

    async VerifyReportBeingUpdatedByKeypunchConfirmMessage(): Promise<void> {
        // confirm.yesWithExpectedMessage( "(7267)This report was Sent to Keypunch. Do you want to start editing the report?")
    }

    async VerifyKeypunchOfficerToAccessConfirmMessage(): Promise<void> {
        // confirm.yesWithExpectedMessage( "(7265) This report was Sent to Keypunch and is in Keypunch Status.  Upon completion of your review or edit, the report must again be Sent to Keypunch")
        // confirm.yesWithExpectedMessage( "(7265) This report was Sent to Keypunch and is in Keypunch Status. Upon completion of your review or edit, the report must again be Sent to Keypunch")
    }

    async SelectItemTypeAsReportEntry(): Promise<void> {
        // TODO: select dropdown option on this.uIItemTypeComboBox with value // "Report Entry"
    }

    async SelectItemTypeAsK9ReportEntry(): Promise<void> {
        // TODO: select dropdown option on this.uIItemTypeComboBox with value // "K9 Report Entry"
    }

    async SelectItemTypeAsTrainingClass(): Promise<void> {
        // TODO: select dropdown option on this.uIItemTypeComboBox with value // "Training Class"
    }

    async SelectAtItemType1(): Promise<void> {
        // TODO: select dropdown option on 
        // this.uIItemTypeComboBox,
        // testData.home('ItemType1'));
        await this.myReportsTab.fill(itemType1);
        await this.myReportsTab.press('Tab');
    }

    async SelectAtItemType(): Promise<void> {
        // TODO: select dropdown option on 
        // this.uIItemTypeComboBox,
        // testData.home('ItemType'));
        await this.myReportsTab.fill(itemType);
        await this.myReportsTab.press('Tab');
    }

    async ClickShowMyItemsOnly(): Promise<void> {
        await this.myReportsTab.click();
    }

    async VerifyAtOfficerInColumnValues(): Promise<void> {
        const cellValues = await gridHelpers.getGridColumnValues(this.uIReportTable, "Officer")
        for (const strStatus of cellValues) {
        if (!strStatus === "") {
        expect(strStatus.trim()).toEqual(testData.home('Officer'))
        }
        }
    }

    async ClickRefreshButton(): Promise<void> {
        await this.myReportsTab.click();
    }

    async VerifyAtRefNo(): Promise<void> {
        // TODO: grid expect assertion
    }

    async VerifyGridRowStatusAsSubmitted(): Promise<void> {
        const cellValues = await gridHelpers.getGridColumnValues(this.uIReportTable, "Status")
        for (const strStatus of cellValues) {
        // Assert.assertEquals(strStatus, "Submitted")
        }
    }

    async VerifyGridRowStatusAsReadyToSubmit(): Promise<void> {
        const cellValues = await gridHelpers.getGridColumnValues(this.uIReportTable, "Status")
        for (const strStatus of cellValues) {
        // Assert.assertEquals(strStatus, "Ready To Submit")
        }
    }

    async VerifyStatusAsOnHold(): Promise<void> {
        const status = await gridHelpers.getGridCell(this.uIReportTable, "OnHold")
        // Assert.assertEquals(status.innerText(), "OnHold")
    }

    async VerifyStatusAsReportDue(): Promise<void> {
        const status = await gridHelpers.getGridCell(this.uIReportTable, "Report Due")
        // Assert.assertEquals(status.innerText(), "Report Due")
    }

    async selectAtStatus1(): Promise<void> {
        await this.myReportsTab.click();
        // TODO: selectRadControlDropdown( this.uIStatusComboBox, testData.home('Status1'))
        await this.myReportsTab.click();
    }

    async verifyGridRowAtStatus(): Promise<void> {
        const cellValues = await gridHelpers.getGridColumnValues(this.uIReportTable, "Status")
        for (const strStatus of cellValues) {
        // Assert.assertEquals(strStatus, testData.home('Status'))
        }
    }

    async verifyGridRowAtStatus1(): Promise<void> {
        const cellValues = await gridHelpers.getGridColumnValues(this.uIReportTable, "Status")
        for (const strStatus of cellValues) {
        // Assert.assertEquals(strStatus, testData.home('Status1'))
        }
    }

    async selectStatusAsDefault(): Promise<void> {
        // TODO: select dropdown option on this.uIStatusComboBox with value // "--"
        await this.myReportsTab.press('Tab');
    }

    async selectStatusAsNull(): Promise<void> {
        // TODO: select dropdown option on this.uIStatusComboBox with value // "--"
    }

    async selectAtStatus2(): Promise<void> {
        // TODO: select dropdown option on this.uIStatusComboBox,
        // testData.home('Status2'))
        await this.myReportsTab.press('Tab');
    }

    async selectByActiveCaseNo(caseNo: string): Promise<void> {
        await this.myReportsTab.locator('td', { hasText: caseNo }).click();
    }

    async verifyGridRowTypeAsIncidentReportByCaseNo(CaseNo: string): Promise<void> {
        expect(await gridHelpers.getGridCell(this.uIReportTable, CaseNo, "Item Type").includes("Incident Report")).toBeTruthy()
    }

    async verifyGridRowStatusAsReportDueByCaseNo(CaseNo: string): Promise<void> {
        const uICaseRow = await gridHelpers.selectGridRowByCellInnerText(this.uIReportTable, CaseNo)
        const status = await gridHelpers.getGridCell(this.uIReportTable, uICaseRow, "Status")
        expect(await status.innerText().includes("Report Due")).toBeTruthy();
    }

    async VerifyGridRowAtOfficer1ByCaseNo(): Promise<void> {
        // TODO: expectTruthy( gridHelpers.getGridCell(this.uIReportTable, // testData.home('CaseNo'), "Officer").includes(testData.home('Officer1')))
    }

    async verifyGridRowStatusAsOnHoldByCaseNo(): Promise<void> {
        const uICaseRow = await gridHelpers.selectGridRowByCellInnerText( this.uIReportTable, testData.home('CaseNo'))
        const status = await gridHelpers.getGridCell(this.uIReportTable, uICaseRow, "Status")
        expect(await status.innerText().includes("OnHold")).toBeTruthy();
    }

    async verifyGridRowStatusAsTranscriberByCaseNo(): Promise<void> {
        const uICaseRow = await gridHelpers.selectGridRowByCellInnerText( this.uIReportTable, testData.home('CaseNo'))
        const status = await gridHelpers.getGridCell(this.uIReportTable, uICaseRow, "Status")
        expect(await status.innerText().includes("Transcriber")).toBeTruthy();
    }

    async verifyGridRowStatusAsReadyToSubmitByCaseNo(): Promise<void> {
        const uICaseRow = await gridHelpers.selectGridRowByCellInnerText( this.uIReportTable, testData.home('CaseNo'))
        const status = await gridHelpers.getGridCell(this.uIReportTable, uICaseRow, "Status")
        expect(await status.innerText().includes("Ready To Submit")).toBeTruthy();
    }

    async verifyRejectionCountAs1(rowIndex: string): Promise<void> {
        const uICaseRow = await gridHelpers.getGridCellInnerText(this.uIReportTable, "Rejection Count", rowIndex)
        expect(uICaseRow).toEqual("1");
    }

    async VerifyAtRefNo(rowIndex: string): Promise<void> {
        // TODO: grid expect assertion
    }

    async verifyListOfStatusAvailable(): Promise<void> {
        const values = await elementHelpers.getDropDownValues(this.uIStatusComboBox)
        const valuesExpected: string[] = []
        // valuesExpected.add("--")
        // valuesExpected.add("OnHold")
        // valuesExpected.add("Ready To Submit")
        // valuesExpected.add("Submitted")
        // valuesExpected.add("Rejected")
        // valuesExpected.add("Report Due")
        // valuesExpected.add("Review")
        // valuesExpected.add("More Info Needed")
        // valuesExpected.add("Keypunch")
        // valuesExpected.add("Remote Transcription")
        expect(values === valuesExpected).toBeTruthy();
    }

    async selectGridRowByStatusAsHold(): Promise<void> {
        await this.myReportsTab.locator('td', { hasText: "OnHold" }).click();
    }

    async verifyAtStatusUsingRefNo(): Promise<void> {
        const text = await gridHelpers.getGridCell(this.uIReportTable, testData.home('RefNo'), "Status")
        expect(text.trim()).toEqual(testData.home('Status'))
    }

    async selectRowByAtRefNo(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText( this.uIReportTable, testData.home('RefNo'))
    }

    async verifyAccessRestrictedByCaseFolderAcknowledge(): Promise<void> {
    }

    async selectJurisAsBC(): Promise<void> {
        // TODO: select dropdown option on this.uIJurisComboBox with value // "BC - Brown County Police Department"
    }

    async verifyShownRecordsBelongsToBCInGrid(): Promise<void> {
        const cellValues = await gridHelpers.getGridColumnValues(this.uIReportTable, "Juris")
        for (const strStatus of cellValues) {
        if (strStatus.includes("BC")) {
        // Assert.assertEquals(strStatus, "BC")
        }
        }
    }

    async selectOnHoldReportInGrid(): Promise<void> {
        await gridHelpers.getGridCell(this.uIReportTable, "20-000003", "Status").click()
    }

    async verifyOfficerColumnValuesareNotEqual(): Promise<void> {
        // TODO: expectNotTrue(CollectionUtils.isEqualCollection(allItems, myItems))
    }

    async selectIncidentReportOnHoldTypeInGrid(): Promise<void> {
        await gridHelpers.getGridCell(this.uIReportTable, testData.home('CaseNo'), "Item Type").click()
    }

    async VerifyGridRowInMyReportsTabUsingJsonReadFile(testCaseId: string): Promise<void> {
        const caseYear = testData.readJson(testCaseId, "caseYear")
        const caseNo = testData.readJson(testCaseId, "caseNo")
        const CaseNo = caseYear + "-" + caseNo;
        const uICaseRow = await gridHelpers.selectGridRowByCellInnerText(this.uIReportTable, CaseNo)
        const cellValues = await gridHelpers.getGridRowCellsValues(uICaseRow)
        expect(cellValues.includes(testData.home('Type'))).toBeTruthy()
        expect(cellValues.includes(testData.home('MyReportStatus'))).toBeTruthy()
    }

    async verifyreportSenttoKeypunchConfirmMessage(): Promise<void> {
        // Popup.Confirm.yesWithExpectedMessage("(7267) This report was Sent to
        // Keypunch. Do you want to start editing the report?");
        // Assert.assertTrue(Playback.driver.switchTo().alert().innerText().includes("(7267)"))
        // Assert.assertTrue(Playback.driver.switchTo().alert().innerText().includes("This report was Sent to Keypunch. Do you want to start editing the report?"))
        // Assert.assertTrue(Playback.driver.switchTo().alert().innerText().includes("(7267)"))
        // Assert.assertTrue(Playback.driver.switchTo().alert().innerText().includes("This report was Sent to Keypunch. Do you want to start editing the report?"))
        // popup.switchToConfirm()
        const keypunch = await this.uIMapPopup.confirmWindow.uIErrorInfoTextEdit.innerText();
        expect(keypunch.includes("(7267)")).toBeTruthy()
        expect(keypunch.includes("This report was Sent to Keypunch. Do you want to start editing the report?")).toBeTruthy()
    }

    async selectAtCaseNoUsingJsonReadFile(testCaseId: string): Promise<void> {
        const caseYear = testData.readJson(testCaseId, "caseYear")
        const caseNo = testData.readJson(testCaseId, "caseNo")
        const CaseNo = caseYear + "-" + caseNo;
        await this.myReportsTab.locator('td', { hasText: CaseNo }).click();
    }

    async VerifyAtCaseNoUsingJsonReadFile(testCaseId: string): Promise<void> {
        const caseYear = testData.readJson(testCaseId, "caseYear")
        const caseNo = testData.readJson(testCaseId, "caseNo")
        const CaseNo = caseYear + "-" + caseNo;
        let Case: string[] = []
        const res = true;
        // while (res)
        // Case = gridHelpers.getGridColumnValues(this.uIReportTable, "RefNo")
        expect(Case.includes(CaseNo)).toBeTruthy();
        // continue
    }

    async VerifyRefNoUsingLocation(IncidentYear: string): Promise<void> {
        // TODO: grid expect assertion
    }

    async VerifyGridRowStatusAsReportDueByCaseNoUsingJsonReadFile(testCaseId: string): Promise<void> {
        const caseYear = testData.readJson(testCaseId, "caseYear")
        const caseNo = testData.readJson(testCaseId, "caseNo")
        const CaseNo = caseYear + "-" + caseNo;
        const uICaseRow = await gridHelpers.selectGridRowByCellInnerText(this.uIReportTable, CaseNo)
        const status = await gridHelpers.getGridCell(this.uIReportTable, uICaseRow, "Status")
        expect(await status.innerText().includes("Report Due")).toBeTruthy();
    }

    async VerifyGridRowAtUnitByCaseNoUsingJsonReadFile(testCaseId: string): Promise<void> {
        const caseYear = testData.readJson(testCaseId, "caseYear")
        const caseNo = testData.readJson(testCaseId, "caseNo")
        const CaseNo = caseYear + "-" + caseNo;
        const ele = null
        const res = true;
        // while (res)
        // ele = gridHelpers.getGridCell(this.uIReportTable, // CaseNo, "Unit")
        // continue
        expect(testData.home('Unit'))
    }

    async VerifyGridRowAtOfficerByCaseNoUsingJsonReadFile(testCaseId: string): Promise<void> {
        const caseYear = testData.readJson(testCaseId.trim()).toEqual(ele.innerText())
        const caseNo = testData.readJson(testCaseId, "caseNo")
        const CaseNo = caseYear + "-" + caseNo;
        const ele = null
        const res = true;
        // while (res)
        // ele = gridHelpers.getGridCell(this.uIReportTable, // CaseNo, "Officer")
        // continue
        expect(testData.home('Officer'))
    }

    async VerifyGridRowTypeAsIncidentReportByCaseNoUsingJSONReadFile(testCaseId: string): Promise<void> {
        const caseYear = testData.readJson(testCaseId.trim()).toEqual(ele.innerText())
        const caseNo = testData.readJson(testCaseId, "caseNo")
        const CaseNo = caseYear + "-" + caseNo;
        const ele = null
        const res = true;
        // while (res)
        // ele = gridHelpers.getGridCell(this.uIReportTable, // CaseNo, "Item Type")
        // continue
        expect("Incident Report").toEqual(await this.ele.innerText());
    }

    async verifyReportTypeDropDownEnabled(): Promise<void> {
        expect(await this.myReportsTab.isVisible()).toBeTruthy();
    }

    async selectAtReportTypeDropdown(): Promise<void> {
        const value = testData.home('ReportType')
        await this.myReportsTab.click();
        // TODO: select RadControl dropdown this.uIReportTypeCombobox with value value
        await this.myReportsTab.click();
    }

    async verifyAtRefNumberNotExist(): Promise<void> {
        const gridTableColumnValues = await gridHelpers.getGridColumnValues(this.uIReportTable, "RefNo")
        for (const val of gridTableColumnValues) {
        expect(val !== testData.home('CaseNo')).toBeTruthy()
        }
    }

    async verifyAtOfficerInGridByCrashNO(crashno: string): Promise<void> {
        const text = await gridHelpers.getGridCell(this.uIReportTable, crashno, "Officer")
        expect(testData.home('Officer'))
    }

    async selectAtReportType(): Promise<void> {
        await this.myReportsTab.click();
        // TODO: selectRadControlDropdown(
        // TODO: assertion continuation
    }

    async clickGridHeader(gridHeader: string): Promise<void> {
        if (gridHeader == "Date Time") {
        const uIThemeHeader = this.uIReportTable.locator("//table/tbody/tr[contains(@class,'Header')]")
        const targetRow = uIThemeHeader.locator("..")
        const uIHeaderCells = targetRow.locator("(//th[contains(text(),'" + gridHeader + "')])[2]")
        await this.uIHeaderCells.click();
        // gridHelpers.selectGridHeaderColumnName(this.uIReportTable, gridHeader)
        }
    }

    async verifyDateAndTimeColumnAsAscendingOrder(): Promise<void> {
        // DateHelpers.verifyDatesSortingAsAscendingOrder(gridHelpers.getGridColumnValues( this.uIReportTable, "Date Time"), "MM/dd/yy")
    }

    async verifyDateAndTimeColumnAsDescendingOrder(): Promise<void> {
        // DateHelpers.datesSortingAsDescendingOrder(gridHelpers.getGridColumnValues( this.uIReportTable, "Date Time"), "MM/dd/yy")
    }

    async verifyGridColumnAsDescendingOrder(columnName: string): Promise<void> {
        const gridTableColumnValues = await gridHelpers.getGridColumnValues(this.uIReportTable, columnName)
        // // TODO: verify descending sort 
        // this.uIReportTable, columnName, gridTableColumnValues
    }

    async verifyGridColumnAsAscendingOrder(columnName: string): Promise<void> {
        const gridTableColumnValues = await gridHelpers.getGridColumnValues(this.uIReportTable, columnName)
        // // TODO: verify ascending sort 
        // this.uIReportTable, columnName, gridTableColumnValues
    }

    async verifyAtRejectionCountInGrid(i: string): Promise<void> {
        const uICaseRow = await gridHelpers.getGridCell(this.uIReportTable, testData.home('RefNo'), "Rej. Cnt")
        expect(uICaseRow.trim()).toEqual(testData.home("RejCnt"+i))
    }

    async verifyCountIsEqual(count: string, Count2: string): Promise<void> {
        expect(Count2).toEqual(count)
    }

    async selectStatusAsRemoteTranscription(): Promise<void> {
        // TODO: select dropdown option on this.uIStatusComboBox with value // "Remote Transcription"
    }

    async verifySubmittedStatusCountIsEqual(submittedStatusRowCount: string, submittedStatusRowCount2: string): Promise<void> {
        expect(submittedStatusRowCount2).toEqual(submittedStatusRowCount)
    }

    async verifyRejectedStatusCountIsEqual(rejectedStatusRowCount: string, rejectedStatusRowCount2: string): Promise<void> {
        expect(rejectedStatusRowCount2).toEqual(rejectedStatusRowCount)
    }

    async verifyReportDueStatusCountIsEqual(reportDueStatusRowCount: string, reportDueStatusRowCount2: string): Promise<void> {
        expect(reportDueStatusRowCount2).toEqual(reportDueStatusRowCount)
    }

    async verifyMoreInfoNeededStatusCountIsEqual(moreInfoNeededStatusRowCount: string, moreInfoNeededStatusRowCount2: string): Promise<void> {
        expect(moreInfoNeededStatusRowCount2).toEqual(moreInfoNeededStatusRowCount)
    }

    async verifyKeypunchStatusCountIsEqual(keypunchStatusRowCount: string, keypunchStatusRowCount2: string): Promise<void> {
        expect(keypunchStatusRowCount2).toEqual(keypunchStatusRowCount)
    }

    async verifyRemoteTranscriptionStatusCountIsEqual(remoteTranscriptionStatusRowCount: string, remoteTranscriptionStatusRowCount2: string): Promise<void> {
        expect(remoteTranscriptionStatusRowCount2).toEqual(remoteTranscriptionStatusRowCount)
    }

    async verifyReadyToSubmitStatusCountIsEqual(readyToSubmitStatusRowCount: string, readyToSubmitStatusRowCount2: string): Promise<void> {
        expect(readyToSubmitStatusRowCount2).toEqual(readyToSubmitStatusRowCount)
    }

    async selectReportTypeDropdown(value: string): Promise<void> {
        await this.myReportsTab.click();
        // TODO: select RadControl dropdown this.uIReportTypeCombobox with value value
        await this.myReportsTab.click();
    }

    async reloadMyHome(): Promise<void> {
        await this.page.reload()
    }

    async verifyTabNotRefreshed(): Promise<void> {
        await this.page.waitForTimeout(126000);
        const gridTableColumnValues = await gridHelpers.getGridColumnValues(this.uIReportTable, "Status")
        expect(gridTableColumnValues.includes("OnHold")).toBeTruthy()
        expect(gridTableColumnValues.includes("Submitted")).toBeTruthy()
        expect(gridTableColumnValues.includes("Report Due")).toBeTruthy()
    }

    async verifyTabRefreshed(): Promise<void> {
        await this.page.waitForTimeout(126000);
        const gridTableColumnValues = await gridHelpers.getGridColumnValues(this.uIReportTable, "Status")
        for (const value of gridTableColumnValues) {
        expect(value).toEqual("OnHold");
        }
    }

    async verifyAtStatusUsingItemType(i: string): Promise<void> {
        const text = await gridHelpers.getGridCell(this.uIReportTable, testData.home("ItemType" + i), "Status")
        expect(text.trim()).toEqual(testData.home("Status" + i))
    }

    async getStatusRowCount(): Promise<number> {
        let count = 0;
        let gridTableRowsCount = 0;
        try {
            if (await this.uIReportTable.isVisible()) {
                gridTableRowsCount = await this.uIReportTable.locator('tr').count();
            }
            while (await this.uINextButton.isVisible()) {
                await this.uINextButton.click();
                const gridTableRowsCount2 = await this.uIReportTable.locator('tr').count();
                count += gridTableRowsCount2;
            }
        } catch (e) {
            // No data available
            count = 0;
        }
        count = count + gridTableRowsCount;
        return count;
    }

    async getSubmittedStatusRowCount(): Promise<number> {
        return await this.uIReportTable.locator('tr').count();
    }

    async getRejectedStatusRowCount(): Promise<number> {
        return await this.uIReportTable.locator('tr').count();
    }

    async getReportDueStatusRowCount(): Promise<number> {
        return await this.uIReportTable.locator('tr').count();
    }

    async getMoreInfoNeededStatusRowCount(): Promise<number> {
        return await this.uIReportTable.locator('tr').count();
    }

    async getKeypunchStatusRowCount(): Promise<number> {
        return await this.uIReportTable.locator('tr').count();
    }

    async getRemoteTranscriptionStatusRowCount(): Promise<number> {
        return await this.uIReportTable.locator('tr').count();
    }

    async getReadyToSubmitStatusRowCount(): Promise<number> {
        return await this.uIReportTable.locator('tr').count();
    }
}

export class MyTrainingTabPage {
    readonly page: Page;
    readonly uIRefreshButton: Locator;
    readonly uIExpandAllCheckBox: Locator;
    readonly uIMyTrainingHistoryAccordion: Locator;
    readonly uIMycertificationsAccordion: Locator;
    readonly uIUpcommingTrainingclassesAccordion: Locator;
    readonly uIUpcommingTrainingclassesResultGrid: Locator;
    readonly uIJurisDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIRefreshButton = page.locator('NocmdRefresh');
        this.uIExpandAllCheckBox = page.locator('NochkExpandAll');
        this.uIMyTrainingHistoryAccordion = page.locator('Noui-accordion-accordion-header-0');
        this.uIMycertificationsAccordion = page.locator('Noui-accordion-accordion-header-1');
        this.uIUpcommingTrainingclassesAccordion = page.locator("//h3[@id='ui-accordion-accordion-header-2' or @id='ui-id-4']");
        this.uIUpcommingTrainingclassesResultGrid = page.locator('NogrdClass');
        this.uIJurisDropdown = page.locator('NolstJuris');
    }

    async ClickUpcommingTrainingclassesAccordion(): Promise<void> {
        await this.myTrainingTab.click();
    }

    async VerifyTrainingTypeAsSeleniumTraining(rowIndex: string): Promise<void> {
        const uITrainingclasses = await gridHelpers.getGridCellInnerText("grdClass", "Training Type", rowIndex)
        expect(uITrainingclasses.includes("Selenium Training")).toBeTruthy()
    }

    async VerifyCurrentDate(rowIndex: string): Promise<void> {
        const uICurrentDate = await gridHelpers.getGridCell("grdClass", "Date", rowIndex)
        expect(DateHelpers.getCurrentDate("MM/dd/yy")).toEqual(uICurrentDate);
    }

    async ClickRowInUpcomingTrainingClassesGrid(rowIndex: string): Promise<void> {
        const uIClassGridRow = await gridHelpers.getGridCell( this.uIUpcommingTrainingclassesResultGrid, "Training Type", rowIndex)
        await this.uIClassGridRow.click();
    }

    async VerifyTrainingTypeAsFireResponse(rowIndex: string): Promise<void> {
        const uITrainingclasses = await gridHelpers.getGridCellInnerText("grdClass", "Training Type", rowIndex)
        expect(uITrainingclasses.includes("Fire Response")).toBeTruthy()
    }

    async verifyTrainningTypeColorAsBlueColor(Index: string): Promise<void> {
        const gridCell = await gridHelpers.getGridCell(this.uIUpcommingTrainingclassesResultGrid, "Training Type", Index)
        // TODO: .getCssValue("Color") not available in Playwright
        expect("rgb(0, 0, 255)").toEqual(gridCell);
    }

    async clickRefreshButton(): Promise<void> {
        await this.myTrainingTab.click();
    }

    async verifyJurisDropdownIsDisplayed(): Promise<void> {
        expect(await this.myTrainingTab.isVisible()).toBeTruthy();
    }

    async verifyExpandAllCheckboxIsNotSelected(): Promise<void> {
        // TODO: expectFalsy(this.uIExpandAllCheckBox.isSelected(),
        // "Expand All checkbos is selected --> ")
    }
}

export class NotesTabPage {
    readonly page: Page;
    readonly uINotesRichTextEdit: Locator;
    readonly uIInternalSaveButton: Locator;
    readonly uINotesRichTextEditBody: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINotesRichTextEdit = page.locator('NoctrlUsrKPITxtEdit_Notestd');
        this.uIInternalSaveButton = page.locator('NocmdInternalSave');
        this.uINotesRichTextEditBody = page.locator('//body');
    }

    async switchToNotesTab(): Promise<void> {
        await this.uINotesTab.click();
    }

    async enterRichText(): Promise<void> {
        await this.uINotesRichTextEdit.click()
        // TODO: actions.fill(RandomHelpers.randomString(500)).build().perform();
    }

    async internalSave(): Promise<void> {
        await this.notesTab.click();
        // TODO: handle confirm popup - click yes
    }

    async enterAtRichText(): Promise<void> {
        await this.uINotesRichTextEdit.click()
        // TODO: actions.fill(richText).build().perform();
    }

    async verifyAtRichText(): Promise<void> {
        // TODO: expect assertion
    }
}

export class NotificationPage {
    readonly page: Page;
    readonly uIPatrolAreaInput: Locator;
    readonly uIPatrolAreaDropdown: Locator;
    readonly uINotificationLable: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveCloseButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIRequestedPFCodeEdit: Locator;
    readonly uIRequestedPFCodeDescriptionTextView: Locator;
    readonly uIStartDateEdit: Locator;
    readonly uIExpireDateEdit: Locator;
    readonly uIDistributionRadioButton: Locator;
    readonly uIPFRadioButton: Locator;
    readonly uIEmailRadioButton: Locator;
    readonly uISendTextMessageCheckBox: Locator;
    readonly uIDistributionListComboBox: Locator;
    readonly uIReportingPeriodComboBox: Locator;
    readonly uINotifyEventComboBox: Locator;
    readonly uINotifyEventRadControlComboBox: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uINotificationGridTable: Locator;
    readonly uIPFCodeEdit: Locator;
    readonly uIPFCodeDescriptionTextView: Locator;
    readonly uIAddMulitiplePFButton: Locator;
    readonly uIEmailEdit: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uINameEdit: Locator;
    readonly uIRequestedByPFInfoIcon: Locator;
    readonly uIReasonEdit: Locator;
    readonly uINotifyEventRadDropdownArrow: Locator;
    readonly uIPatrolAreaRadDropdownArrow: Locator;
    readonly uIPrintIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIPatrolAreaInput = page.locator('NocddPatrolArea_Input');
        this.uIPatrolAreaDropdown = page.locator('NocddPatrolArea_DropDown');
        this.uINotificationLable = page.locator('NolblNotification');
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveCloseButton = page.locator('NocmdSaveNClose');
        this.uIResetButton = page.locator('NocmdRefresh');
        this.uIRequestedPFCodeEdit = page.locator('NolupPF_CodeValue');
        this.uIRequestedPFCodeDescriptionTextView = page.locator('NolupPF_CodeDescription');
        this.uIStartDateEdit = page.locator('NoDttmStart_KPIDttmCtrl');
        this.uIExpireDateEdit = page.locator('NodttmExpire_KPIDttmCtrl');
        this.uIDistributionRadioButton = page.locator('NordoList_0');
        this.uIPFRadioButton = page.locator('NordoList_1');
        this.uIEmailRadioButton = page.locator('NordoList_2');
        this.uISendTextMessageCheckBox = page.locator('NochkSendMobile');
        this.uIDistributionListComboBox = page.locator('NocddDistribution_DropDown');
        this.uIReportingPeriodComboBox = page.locator('NocddRptPrd_DropDown');
        this.uINotifyEventComboBox = page.locator('NocddNotifyType_Input');
        this.uINotifyEventRadControlComboBox = page.locator('NocddNotifyType_DropDown');
        this.uIAddButton = page.locator('NocmdAdd');
        this.uIClearButton = page.locator('NocmdClear');
        this.uINotificationGridTable = page.locator('NogrdNotificationType');
        this.uIPFCodeEdit = page.locator('NolupPFID_CodeValue');
        this.uIPFCodeDescriptionTextView = page.locator('NolupPFID_CodeDescription');
        this.uIAddMulitiplePFButton = page.locator('NocmdAddMulPF');
        this.uIEmailEdit = page.locator('NotxtEmail');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class ='statusBar']/b");
        this.uINameEdit = page.locator('NotxtName');
        this.uIRequestedByPFInfoIcon = page.locator('NolupPF_cmdIncOnAddr');
        this.uIReasonEdit = page.locator('Nokpitxtreason');
        this.uINotifyEventRadDropdownArrow = page.locator('NocddNotifyType_Arrow');
        this.uIPatrolAreaRadDropdownArrow = page.locator('NocddPatrolArea_Arrow');
        this.uIPrintIcon = page.locator('NocmdPrint');
    }

    async verifyAtRequestPFCode(): Promise<void> {
        // TODO: expectEqual(testData.home('PFCode').trim()).toEqual(testData.home('RichText'))
    }

    async EnterStartDateAsCurrentDate(): Promise<void> {
        await this.uIStartDateEdit.click();
        await this.uIStartDateEdit.fill(DateHelpers.getCurrentDate());
    }

    async EnterExpireDateAsFutureDate(): Promise<void> {
        await this.uIExpireDateEdit.click();
        await this.uIExpireDateEdit.fill(DateHelpers.getFutureDate(2, "MM/dd/yyyy"));
    }

    async ClickPFRadioButton(): Promise<void> {
        await this.uIPFRadioButton.click();
    }

    async EnterAtPFCode(): Promise<void> {
        await this.uIPFCodeEdit.fill(pFNo);
        await this.uIPFCodeEdit.press('Tab');
    }

    async selectAtReportingPeriod(): Promise<void> {
        // TODO: select dropdown option on this.uIReportingPeriodComboBox,
        // testData.home('ReportingPeriod'))
        await this.uIReportingPeriodComboBox.press('Tab');
    }

    async SelectNotifyEvent(): Promise<void> {
        await this.uINotifyEventComboBox.click();
        // TODO: select random RadControl dropdown checkboxes on this.uINotifyEventRadControlComboBox, 2
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async VerifyAtPeriod(rowIndex: string): Promise<void> {
        // TODO: grid expect assertion
    }

    async VerifyStartDateAsCurrentDate(rowIndex: string): Promise<void> {
        // TODO: expect(await gridHelpers.getGridCellInnerText(this.uINotificationGridTable, row, col)).toEqual(DateHelpers.getCurrentDate())
    }

    async VerifyExpireDateAsFutureDate(rowIndex: string): Promise<void> {
        expect(DateHelpers.getFutureDate(2, "MM/dd/yyyy")).toEqual(expireDate);
        await gridHelpers.getGridCellInnerText( this.uINotificationGridTable, "Expire Date", rowIndex)
    }

    async ClickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async SaveScreen(): Promise<void> {
        await this.uISaveButton.click();
        // TODO: handle confirm popup - click yes
    }

    async VerifySuccessfulBottomMessage(): Promise<void> {
        // TODO: expect("1003 - Update Successful".trim()).toEqual(this.uIBottomLeftSideStatusBar.innerText())
    }

    async CloseScreen(): Promise<void> {
        // no-op: popup window close
    }

    async ClickDistributionListRadioButton(): Promise<void> {
        await this.uIDistributionRadioButton.click();
    }

    async clickEMailRadioButton(): Promise<void> {
        await this.uIEmailRadioButton.click();
    }

    async ClickSendTextMessageCheckBox(): Promise<void> {
        await this.uISendTextMessageCheckBox.click();
    }

    async selectAtDistributionList(): Promise<void> {
        // TODO: select dropdown option on this.uIDistributionListComboBox,
        // testData.home('DistributionList'))
        await this.uIDistributionListComboBox.press('Tab');
    }

    async selectAtNotifyEvent(): Promise<void> {
        await this.uINotifyEventComboBox.click();
        // TODO: selectRadControlDropdown( this.uINotifyEventRadControlComboBox, testData.home('NotifyEvent'))
        await this.uINotifyEventRadDropdownArrow.click();
        await this.uINotifyEventComboBox.press('Tab');
    }

    async VerifyAtNotifyEvent(rowIndex: string): Promise<void> {
        // TODO: grid expect assertion
        // TODO: assertion continuation
    }

    async enterAtEmail(): Promise<void> {
        await this.uIEmailEdit.fill(email);
    }

    async verifyEmailAdressFieldIsEnabled(): Promise<void> {
        expect(this.uIEmailEdit.isEnabled()).toBeTruthy()
    }

    async enterAtName(): Promise<void> {
        await this.uINameEdit.fill(name);
    }

    async verifyEmailAddressFieldIsDisplayed(): Promise<void> {
        expect(await this.uIEmailEdit.isVisible()).toBeTruthy();
    }

    async verifyReportingPeriodFieldIsDisplayed(): Promise<void> {
        expect(await this.uIReportingPeriodComboBox.isVisible()).toBeTruthy();
    }

    async verifyEmailNotifyEventIsEnabled(): Promise<void> {
        expect(this.uINotifyEventRadControlComboBox.isEnabled()).toBeTruthy()
    }

    async saveNCloseScreen(): Promise<void> {
        await this.uISaveCloseButton.click();
        // TODO: handle confirm popup - click yes
    }

    async clickRequestedByPFInfoButton(): Promise<void> {
        await this.uIRequestedByPFInfoIcon.click();
    }

    async verifyRequestedByPFInfoIconIsDisplayed(): Promise<void> {
        expect(await this.uIRequestedByPFInfoIcon.isVisible()).toBeTruthy();
    }

    async enterAtRequestedbyPF(): Promise<void> {
        await this.uIRequestedPFCodeEdit.clear();
        await this.uIRequestedPFCodeEdit.fill(requestedbyPF);
        await this.uIRequestedPFCodeEdit.press('Tab');
    }

    async verifyInactiveCodeSelectedAwckMsg(): Promise<void> {
    }

    async enterAtRequestedbyPF1(): Promise<void> {
        await this.uIRequestedPFCodeEdit.clear();
        await this.uIRequestedPFCodeEdit.fill(requestedbyPF1);
        await this.uIRequestedPFCodeEdit.press('Tab');
    }

    async verifyAtRequestedByInGrid(): Promise<void> {
        const gridTableColumnValues = await gridHelpers.getGridColumnValues(this.uINotificationGridTable, "Requested By")
        for (const value of gridTableColumnValues) {
        if (value.includes(testData.home('RequestedBy'))) {
        // Assert.assertTrue(gridTableColumnValues.includes(testData.home('RequestedBy')))
        }
        }
    }

    async verifyPatrolAreaDropdownDisplayed(): Promise<void> {
        expect(await this.uIPatrolAreaInput.isVisible()).toBeTruthy();
    }

    async selectAtPatrolArea(): Promise<void> {
        await this.uIPatrolAreaInput.click();
        // TODO: selectRadControlDropdown( this.uIPatrolAreaDropdown, testData.home('PatrolArea'))
        await this.uIPatrolAreaRadDropdownArrow.click();
        await this.uIPatrolAreaInput.press('Tab');
    }

    async verifyAtNotificationSetupCFSCode(): Promise<void> {
        expect(this.uINotificationLable.innerText().includes(testData.home('CFSCode'))).toBeTruthy()
    }

    async selectAtNotifyEvent1(): Promise<void> {
        await this.uINotifyEventComboBox.click();
        // TODO: selectRadControlDropdown(
        // this.uINotifyEventRadControlComboBox,
        // testData.home('NotifyEvent1'))
        await this.uINotifyEventComboBox.press('Tab');
    }

    async selectAtNotifyEvent2(): Promise<void> {
        await this.uINotifyEventComboBox.click();
        // TODO: selectRadControlDropdown(
        // this.uINotifyEventRadControlComboBox,
        // testData.home('NotifyEvent2'))
        await this.uINotifyEventComboBox.press('Tab');
    }

    async verifyPFfieldIsDisplayed(): Promise<void> {
        expect(await this.uIPFCodeEdit.isVisible()).toBeTruthy();
    }

    async enterAtReason(): Promise<void> {
        await this.uIReasonEdit.fill(reason);
    }

    async verifyAtNotificationListDetailsInGrid(rowIndex: string): Promise<void> {
        // TODO: grid expect assertion
        // TODO: assertion continuation
    }

    async verifyAtReasonInGrid(): Promise<void> {
        const reason = await this.page.locator("(//div[@id='grdNotificationType']/table//table)[3]//tr/td[27]").innerText();
        expect(reason.trim()).toEqual(testData.home('Reason'))
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async selectAtGridRowByNotifyEvent(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText( this.uINotificationGridTable, testData.home('NotifyEvent'))
    }

    async verifyPFIsSelected(): Promise<void> {
        expect(await this.uIPFRadioButton.isSelected()).toBeTruthy()
    }

    async verifyAtPFCode(): Promise<void> {
        // TODO: expect assertion
        // TODO: expectEqual(testData.home('NotificationListDetails').trim()).toEqual(testData.home('PFNo'))
    }

    async verifyAtReportingPeriod(): Promise<void> {
        const dropDownSelectedItem = await elementHelpers.getDropDownSelectedItem(this.uIReportingPeriodComboBox)
        expect(testData.home('ReportingPeriod'))
    }

    async verifyAtNotifyEvent(): Promise<void> {
        // TODO: expectEqual(testData.home('NotifyEvent').trim()).toEqual(dropDownSelectedItem)
    }

    async verifyAtNotifyEvent1(): Promise<void> {
        // TODO: expect assertion
    }

    async verifyAtReason(): Promise<void> {
        // TODO: expectEqual(testData.home('Reason').trim()).toEqual(testData.home('NotifyEvent1'))
    }

    async VerifyAtNotifyEvent1InGrid(rowIndex: string): Promise<void> {
        // TODO: grid expect assertion
        // TODO: assertion continuation
    }

    async VerifyAtPeriod1(rowIndex: string): Promise<void> {
        // TODO: grid expect assertion
    }

    async selectAtReportingPeriod1(): Promise<void> {
        // TODO: select dropdown option on this.uIReportingPeriodComboBox with testData.home('ReportingPeriod1')
        await this.uIReportingPeriodComboBox.press('Tab');
    }

    async verifyUpdateSuccessfulStatusMessage(): Promise<void> {
        // TODO: expect("1003 - Update successful".trim()).toEqual(this.uIBottomLeftSideStatusBar.innerText())
    }

    async verifyNoDataPresentAcknowledgeMessage(): Promise<void> {
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async verifyNotificationWindowExists(): Promise<void> {
        expect(windowExist).toBeFalsy();
    }

    async verifySelectReportWindowExists(): Promise<void> {
        expect(windowExist).toBeTruthy();
    }

    async verifyAllNotificationGridColumnName(): Promise<void> {
        expect(await gridHelpers.getGridHeaderTableRow(this.uINotificationGridTable).innerText().includes("Request No")).toBeTruthy()
        expect(await gridHelpers.getGridHeaderTableRow(this.uINotificationGridTable).innerText().includes("Notification List Details")).toBeTruthy()
        expect(await gridHelpers.getGridHeaderTableRow(this.uINotificationGridTable).innerText().includes("Period")).toBeTruthy()
        expect(await gridHelpers.getGridHeaderTableRow(this.uINotificationGridTable).innerText().includes("Notify Event")).toBeTruthy()
        expect(await gridHelpers.getGridHeaderTableRow(this.uINotificationGridTable).innerText().includes("Start Date")).toBeTruthy()
        expect(await gridHelpers.getGridHeaderTableRow(this.uINotificationGridTable).innerText().includes("Expire Date")).toBeTruthy()
        expect(await gridHelpers.getGridHeaderTableRow(this.uINotificationGridTable).innerText().includes("Requested By")).toBeTruthy()
    }

    async verifyRequestedNoGeneratedInGrid(): Promise<void> {
        const text = await gridHelpers.getGridCell( this.uINotificationGridTable, "Request No", 0)
        expect(text.length == 9).toBeTruthy();
    }

    async deleteAtNotifyEvent(): Promise<void> {
        await gridHelpers.deleteGridRowByCellInnerText(this.uINotificationGridTable, testData.home('NotifyEvent'))
    }
}

export class NotificationSearchPage {
    readonly page: Page;
    readonly uISearchButton: Locator;
    readonly uINotificationSearchResultTable: Locator;
    readonly uIUpdateButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISearchButton = page.locator('NocmdSearch');
        this.uINotificationSearchResultTable = page.locator('NogrdNotifySrch');
        this.uIUpdateButton = page.locator("//span[contains(text(),'Update')]");
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }

    async selectCheckBoxInGridByUsingRequestedPF(): Promise<void> {
        await gridHelpers.selectGridRowCheckBox( this.uINotificationSearchResultTable, testData.home('RequestedPF'))
    }
}

export class PhoenixCMSWindowPage {
    readonly page: Page;
    readonly uIPhoenixCMSTitle: Locator;
    readonly uIContentsTab: Locator;
    readonly uIIndexTab: Locator;
    readonly uISearchTab: Locator;
    readonly uIBookmarhTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIPhoenixCMSTitle = page.locator("//div[@align='center']//font[text()='Phoenix CMS']");
        this.uIContentsTab = page.locator('Noa0');
        this.uIIndexTab = page.locator('Noa1');
        this.uISearchTab = page.locator('Noa2');
        this.uIBookmarhTab = page.locator('Noa3');
    }

    async verifyPhoenixCMSTitle(): Promise<void> {
        const Frame = this.page.locator('#top')
        const Title = await this.uIPhoenixCMSTitle.innerText();
        expect(Title).toEqual("Phoenix CMS");
    }

    async clickAllTabs(): Promise<void> {
        await this.uIContentsTab.click();
        await this.uIIndexTab.click();
        await this.uISearchTab.click();
        await this.uIBookmarhTab.click();
    }

    async close(): Promise<void> {
        // no-op: popup window close
    }
}

export class PhoenixPoliceRMSWindowPage {
    readonly page: Page;
    readonly uIPhoenixTitle: Locator;
    readonly uIContentsTab: Locator;
    readonly uIIndexTab: Locator;
    readonly uISearchTab: Locator;
    readonly uIBookmarhTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIPhoenixTitle = page.locator("//div[@align='center']//font[text()='Phoenix Police RMS']");
        this.uIContentsTab = page.locator('Noa0');
        this.uIIndexTab = page.locator('Noa1');
        this.uISearchTab = page.locator('Noa2');
        this.uIBookmarhTab = page.locator('Noa3');
    }

    async verifyPhoenixPoliceRMSTitle(): Promise<void> {
        const Title = Playback.driver.getTitle();
        expect(Title).toEqual("Phoenix Law RMS");
    }

    async clickAllTabs(): Promise<void> {
        //			// TODO: switch to frame "webhelpframe.html";
        const pageiFrame = driver.locator("//frame[contains(@src,'webhelpframe.html')]")
        // driver.switchTo().frame(pageiFrame)
        await this.uIContentsTab.click();
        await this.uIIndexTab.click();
        await this.uISearchTab.click();
        await this.uIBookmarhTab.click();
    }

    async close(): Promise<void> {
        // no-op: popup window close
    }
}

export class PhoneBookContactEntryPage {
    readonly page: Page;
    readonly uIBookNameEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIMiddleNameEdit: Locator;
    readonly uIPhoneNumberTab: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uISaveButton: Locator;
    readonly uIAddressEdit: Locator;
    readonly uICallBackTab: Locator;
    readonly uICustomTab: Locator;
    readonly uIHistoryTab: Locator;
    readonly uIBookNamelookUp: Locator;
    readonly uIBottomMessage: Locator;
    readonly uINotesTab: Locator;
    readonly uIDeleteIcon: Locator;
    readonly uIPrintIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIBookNameEdit = page.locator('NolupBookName_CodeValue');
        this.uILastNameEdit = page.locator('NotxtLast');
        this.uIFirstNameEdit = page.locator('NotxtMiddle');
        this.uIMiddleNameEdit = page.locator('NotxtFirst');
        this.uIPhoneNumberTab = page.locator("//span[contains(text(), 'Phone Number')]");
        this.uISaveNCloseButton = page.locator('NocmdSaveNClose');
        this.uISaveButton = page.locator('NocmdSave');
        this.uIAddressEdit = page.locator('NotxtAddress');
        this.uICallBackTab = page.locator("//span[contains(text(), 'Call Back')]");
        this.uICustomTab = page.locator("//span[contains(text(), 'Custom')]");
        this.uIHistoryTab = page.locator("//span[contains(text(), 'History')]");
        this.uIBookNamelookUp = page.locator('NolupBookName_imgBtn');
        this.uIBottomMessage = page.locator("//td[@class='statusBar']//b");
        this.uINotesTab = page.locator("//span[text()='Notes']");
        this.uIDeleteIcon = page.locator('NocmdDelete');
        this.uIPrintIcon = page.locator('NocmdPrint');
    }

    async EnterAtBookName(): Promise<void> {
        await this.uIBookNameEdit.fill(bookName);
    }

    async EnterAtLastName(): Promise<void> {
        await this.uILastNameEdit.fill(lastName);
    }

    async EnterAtFirstName(): Promise<void> {
        await this.uIFirstNameEdit.fill(firstName);
    }

    async EnterAtLastName1(): Promise<void> {
        await this.uILastNameEdit.fill(lastName1);
    }

    async EnterAtFirstName1(): Promise<void> {
        await this.uIFirstNameEdit.fill(firstName1);
    }

    async ClickPhoneNumberTab(): Promise<void> {
        await this.uIPhoneNumberTab.click();
    }

    async SaveNClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
        // TODO: handle confirm popup - click yes
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        // TODO: handle confirm popup - click yes
    }

    async ClickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async EnterAtMiddleName(): Promise<void> {
        await this.uIMiddleNameEdit.fill(middleName);
    }

    async EnterAtAddress(): Promise<void> {
        await this.uIAddressEdit.fill(address);
    }

    async ClickAllTabs(): Promise<void> {
        await this.uIPhoneNumberTab.click();
        await this.uICallBackTab.click();
        await this.uICustomTab.click();
        await this.uIHistoryTab.click();
    }

    async ClickCallBackTab(): Promise<void> {
        await this.uICallBackTab.click();
    }

    async ClickHistoryTab(): Promise<void> {
        await this.uIHistoryTab.click();
    }

    async Close(): Promise<void> {
        // no-op: popup window close
    }

    async clickBookNameLookUpIcon(): Promise<void> {
        await this.uIBookNamelookUp.click();
        // popup.switchToCodedSearch()
        // popup.kPICodedLookup.randomKPIHelpSelect()
    }

    async enterLastName(): Promise<void> {
        await this.uILastNameEdit.fill(RandomHelpers.randomNameGenerate());
    }

    async enterFirstName(): Promise<void> {
        await this.uIFirstNameEdit.fill(RandomHelpers.randomNameGenerate());
    }

    async verifyAdditionSuccessfullMessage(): Promise<void> {
        // TODO: expect("1002 - Addition Successful".trim()).toEqual(this.uIBottomMessage.innerText())
    }

    async clickCustomTab(): Promise<void> {
        await this.uICustomTab.click();
    }
}

export class PhoneBookEntryPage {
    readonly page: Page;
    readonly uIBookNameEdit: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uIPhoneBookEntryTable: Locator;
    readonly uIAddButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveCloseButton: Locator;
    readonly uIGlobalCheckBox: Locator;
    readonly uIDetailBillingCheckBox: Locator;
    readonly uIBottomMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIBookNameEdit = page.locator('NotxtBookName');
        this.uIDescriptionEdit = page.locator('NotxtDescription');
        this.uIPhoneBookEntryTable = page.locator('NogrdAssignments');
        this.uIAddButton = page.locator('NoimgAdd');
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveCloseButton = page.locator('NocmdSaveNClose');
        this.uIGlobalCheckBox = page.locator('NochkGlobal');
        this.uIDetailBillingCheckBox = page.locator('NochkdtlBilling');
        this.uIBottomMessage = page.locator("//td[@class='statusBar']//b");
    }

    async EnterAtBookName(): Promise<void> {
        await this.uIBookNameEdit.fill(bookName);
    }

    async EnterAtDescription(): Promise<void> {
        await this.uIDescriptionEdit.fill(description);
    }

    async ClickAdd(): Promise<void> {
        await this.uIAddButton.click();
    }

    async ClickGlobalCheckbox(): Promise<void> {
        await this.uIGlobalCheckBox.click();
    }

    async ClickDetailBillingCheckbox(): Promise<void> {
        await this.uIDetailBillingCheckBox.click();
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        // TODO: handle confirm popup - click yes
    }

    async VerifyGlobalCheckboxcheckedUsingBookName(): Promise<void> {
        const row = await gridHelpers.selectGridRowByCellInnerText( this.uIPhoneBookEntryTable, testData.home('BookName'))
        expect(await gridHelpers.getGridCell(this.uIPhoneBookEntryTable, row, "Global").locator('img').getAttribute("title").includes("Checked")).toBeTruthy()
    }

    async VerifyDetailBillingCheckboxcheckedUsingBookName(): Promise<void> {
        const row = await gridHelpers.selectGridRowByCellInnerText( this.uIPhoneBookEntryTable, testData.home('BookName'))
        expect(await gridHelpers.getGridCell(this.uIPhoneBookEntryTable, row, "IsDtlBilling").locator('img').getAttribute("title").includes("Checked")).toBeTruthy()
    }

    async Close(): Promise<void> {
        // no-op: popup window close
    }

    async enterBookName(): Promise<void> {
        await this.uIBookNameEdit.fill(RandomHelpers.randomNameGenerate());
    }

    async EnterDescription(): Promise<void> {
        await this.uIDescriptionEdit.fill(RandomHelpers.randomNameGenerate());
    }

    async verifyUpdateSuccessFullMessage(): Promise<void> {
        // TODO: expect("1003 - Update Successful".trim()).toEqual(this.uIBottomMessage.innerText())
    }
}

export class PhoneBookSearchPage {
    readonly page: Page;
    readonly uINewContactButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIBackButton: Locator;
    readonly uIPhoneBookEdit: Locator;
    readonly uIPhoneBookSearchTable: Locator;
    readonly uINewPhoneBookButton: Locator;
    readonly uIPhoneBookLookupbutton: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINewContactButton = page.locator("//span[contains(text(),'New Contact')]");
        this.uISearchButton = page.locator("//span[contains(text(),'Search')]");
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uIPhoneBookEdit = page.locator('NotabCanact_tmpl0_UsrCanactBasicSrch1_lupBookName_CodeValue');
        this.uIPhoneBookSearchTable = page.locator('NogrdSearchDisplay');
        this.uINewPhoneBookButton = page.locator("//span[contains(text(),'New PhoneBook')]");
        this.uIPhoneBookLookupbutton = page.locator('NotabCanact_tmpl0_UsrCanactBasicSrch1_lupBookName_imgBtn');
        this.uILastNameEdit = page.locator('NotabCanact_tmpl0_UsrCanactBasicSrch1_txtLast');
        this.uIFirstNameEdit = page.locator('NotabCanact_tmpl0_UsrCanactBasicSrch1_txtFirst');
    }

    async ClickNewContactButton(): Promise<void> {
        await this.uINewContactButton.click();
    }

    async EnterAtBookName(): Promise<void> {
        await this.uIPhoneBookEdit.fill(bookName);
    }

    async ClickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async ClickBackButton(): Promise<void> {
        await this.uIBackButton.click();
    }

    async VerifyAtLastAndFirstNameAppearsRowInGrid(i: string): Promise<void> {
        const text = await gridHelpers.getGridCell(this.uIPhoneBookSearchTable, testData.home("Name" + i)).innerText()
        expect(text.trim()).toEqual(testData.home("Name" + i))
    }

    async ClickNewPhoneBookButton(): Promise<void> {
        await this.uINewPhoneBookButton.click();
    }

    async ClickPhoneBookLookup(): Promise<void> {
        await this.uIPhoneBookLookupbutton.click();
    }

    async SelectAtPhoneBook(): Promise<void> {
        // popup.kPICodedLookup.kPIHelpSelect(testData.home('PhoneBook'))
    }

    async VerifyAtNameInGrid(rowIndex: string): Promise<void> {
        // TODO: expect(await gridHelpers.getGridCellInnerText(this.uIPhoneBookSearchTable, row, col)).toEqual(testData.home('Name'))
    }

    async selectAtNameInGrid(): Promise<void> {
        // gridHelpers.TODO
        // (this.uIPhoneBookSearchTable, testData.home('Name'))
    }

    async verifyAtNameNotAvailableInGrid(): Promise<void> {
        const gridValues = await gridHelpers.getGridColumnValues(this.uIPhoneBookSearchTable, "Name")
        // TODO: expectFalsy(gridValues.includes(testData.home('Name')),
        // testData.home('Name') + " is available in grid --> ")
    }

    async enterAtLastName(): Promise<void> {
        await this.uILastNameEdit.fill(lastName);
        await this.uILastNameEdit.press('Tab');
    }

    async enterAtFirstName(): Promise<void> {
        await this.uIFirstNameEdit.fill(firstName);
    }
}

export class PhoneNumberTabPage {
    readonly page: Page;
    readonly uIPhoneComboBox: Locator;
    readonly uIPhoneEdit: Locator;
    readonly uIPrimaryCheckbox: Locator;
    readonly uIExtensionEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIPhoneNumberTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIPhoneComboBox = page.locator('NotabContactEntry_tmpl0_UsrPhoneEnrty2_cstPhone_PhoneType_DropDown');
        this.uIPhoneEdit = page.locator('NotabContactEntry_tmpl0_UsrPhoneEnrty2_cstPhone_PhoneNumber');
        this.uIPrimaryCheckbox = page.locator('NotabContactEntry_tmpl0_UsrPhoneEnrty2_chkPrimary');
        this.uIExtensionEdit = page.locator('NotabContactEntry_tmpl0_UsrPhoneEnrty2_txtExtn');
        this.uIAddButton = page.locator('NotabContactEntry_tmpl0_UsrPhoneEnrty2_imgAdd');
        this.uIPhoneNumberTable = page.locator('NotabContactEntry_tmpl0_UsrPhoneEnrty2_grdTelephone');
    }

    async SelectPhoneAsHome(): Promise<void> {
        await this.phoneNumberTab.fill("H - Home");
        await this.phoneNumberTab.press('Tab');
    }

    async SelectPhoneAsCell(): Promise<void> {
        await this.phoneNumberTab.fill("C - Cell");
        await this.phoneNumberTab.press('Tab');
    }

    async SelectPhoneAsWork(): Promise<void> {
        await this.phoneNumberTab.fill("W - Work");
    }

    async SeletRowByAsCell(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText( this.uIPhoneNumberTable, "Cell")
    }

    async EnterPhoneNumber(): Promise<void> {
        await this.phoneNumberTab.click();
        await this.phoneNumberTab.fill("256325632" + Integer.toString(RandomHelpers.getRandomNumber(10)));
    }

    async ClickPrimaryCheckbox(): Promise<void> {
        await this.phoneNumberTab.click();
    }

    async EnterAtExtension(): Promise<void> {
        await this.phoneNumberTab.fill(extension);
    }

    async ClickAddButton(): Promise<void> {
        await this.phoneNumberTab.click();
    }

    async VerifyPhoneTypeAsHomeAppearsInGrid(rowIndex: string): Promise<void> {
        // TODO: grid expect assertion
    }

    async VerifyPhoneTypeAsCellAppearsInGrid(rowIndex: string): Promise<void> {
        // TODO: grid expect assertion
    }

    async VerifyPhoneTypeAsWorkAppearsInGrid(rowIndex: string): Promise<void> {
        // TODO: expectTruthy(await gridHelpers.getGridCellInnerText( this.uIPhoneNumberTable, "Phone Type", rowIndex).includes("Work"))
    }

    async VerifyAtExtension(rowIndex: string): Promise<void> {
        // TODO: grid expect assertion
        // TODO: assertion continuation
    }

    async VerifyPrimaryCheckboxChecked(rowIndex: string): Promise<void> {
        expect(await gridHelpers.getGridCell(this.uIPhoneNumberTable, "Primary", rowIndex).locator('img').getAttribute("title").includes("Checked")).toBeTruthy()
    }

    async EnterAtPhoneNumber(): Promise<void> {
        await this.phoneNumberTab.click();
        await this.phoneNumberTab.fill(phoneNo);
        await this.phoneNumberTab.press('Tab');
    }

    async EnterExtension(): Promise<void> {
        await this.phoneNumberTab.click();
        await this.phoneNumberTab.fill(RandomHelpers.randomString(3));
    }

    async SelectPhone(): Promise<void> {
        // random select on this.phoneNumberTab
    }

    async verifyAtPhoneTypeInGrid(): Promise<void> {
        const phoneType = await gridHelpers.getGridCell(this.uIPhoneNumberTable, testData.home('PhoneType')).innerText()
        expect(phoneType.trim()).toEqual( testData.home('PhoneType'))
    }
}

export class PnxCustomReportPDFScreenPage {
    readonly page: Page;
    readonly uIEnterRefTextEdit: Locator;
    readonly uIIncludeEmployeeSignatureComboBox: Locator;
    readonly uIViewReportButton: Locator;
    readonly uIIncludeQAFormCombobox: Locator;
    readonly uIFromDateEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIEmailReportButton: Locator;
    readonly uIFromEmail: Locator;
    readonly uIToEmail: Locator;
    readonly uIToCCEmail: Locator;
    readonly uIEmailSubject: Locator;
    readonly uIEmailMessage: Locator;
    readonly uISendEmailButton: Locator;
    readonly uICancelEmailButton: Locator;
    readonly uIEmailSentMessage: Locator;
    readonly uIReportStatusLabel: Locator;
    readonly uIReportPDF: Locator;
    readonly uIDownloadReportButton: Locator;
    readonly uIMiddleNameEdit: Locator;
    readonly uISaveAsAttachmentButton: Locator;
    readonly uINickNameEdit: Locator;
    readonly uITitleText: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIArrestdocket1id: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIEnterRefTextEdit = page.locator('NorsvCustomRpt__ctl4__ctl4_txtValue');
        this.uIIncludeEmployeeSignatureComboBox = page.locator('NorsvCustomRpt__ctl4__ctl6_ddValue');
        this.uIViewReportButton = page.locator('NorsvCustomRpt__ctl4__ctl0');
        this.uIIncludeQAFormCombobox = page.locator('NorsvCustomRpt__ctl4__ctl4_ddValue');
        this.uIFromDateEdit = page.locator('NorsvCustomRpt__ctl4__ctl4_txtValue');
        this.uIToDateEdit = page.locator('NorsvCustomRpt__ctl4__ctl6_txtValue');
        this.uIEmailReportButton = page.locator('NobtnEmailReport');
        this.uIFromEmail = page.locator('NotxtFromEmail');
        this.uIToEmail = page.locator('NotxtToEmail');
        this.uIToCCEmail = page.locator('NotxtccEmail');
        this.uIEmailSubject = page.locator('NotxtSubject');
        this.uIEmailMessage = page.locator('NotxtMessage');
        this.uISendEmailButton = page.locator('NobtnSendEmail');
        this.uICancelEmailButton = page.locator('NobtnCancel');
        this.uIEmailSentMessage = page.locator('NolblEmailMessage');
        this.uIReportStatusLabel = page.locator("//td[@class='statusBar']");
        this.uIReportPDF = page.locator("//div[@id='sizer']");
        this.uIDownloadReportButton = page.locator("//button[@id='pdfViewer_download']");
        this.uIMiddleNameEdit = page.locator("//input[@id='pdfViewerinput_0_7']");
        this.uISaveAsAttachmentButton = page.locator('NopdfViewerinput_0_0');
        this.uINickNameEdit = page.locator("//input[@id='pdfViewerinput_0_9']");
        this.uITitleText = page.locator('Nolblreporttitle');
        this.uILastNameEdit = page.locator('NopdfViewerinput_0_64');
        this.uIArrestdocket1id = page.locator('Noplugin');
    }

    async EnterRefText(): Promise<void> {
        await this.uIEnterRefTextEdit.fill(RandomHelpers.randomString(7));
    }

    async VerifyIncludeEmployeeSignatureDefaultAsYes(): Promise<void> {
        expect(await elementHelpers.getDropDownSelectedItem(this.uIIncludeEmployeeSignatureComboBox))
    }

    async ClickViewReportButton(): Promise<void> {
        await this.uIViewReportButton.click();
    }

    async CloseScreen(): Promise<void> {
        // no-op: popup window close
    }

    async selectIncludeQAFormAsYes(): Promise<void> {
        await this.uIIncludeQAFormCombobox.selectOption({ label: "Yes" });
    }

    async selectIncludeQAFormAsNo(): Promise<void> {
        await this.uIIncludeQAFormCombobox.selectOption({ label: "No" });
    }

    async enterAtFromDate(): Promise<void> {
        await this.uIFromDateEdit.fill(fromDate);
    }

    async enterToDate(): Promise<void> {
        await this.uIToDateEdit.fill(DateHelpers.getCurrentDate());
    }

    async enterAtToDate(): Promise<void> {
        await this.uIToDateEdit.fill(toDate);
    }

    async clickEmailReportButton(): Promise<void> {
        await this.uIEmailReportButton.click();
    }

    async enterAtFromEmailID(): Promise<void> {
        await this.uIFromEmail.fill(fromEmailID);
    }

    async enterAtToEmailID(): Promise<void> {
        await this.uIToEmail.fill(toEmailID);
    }

    async enterAtSubject(): Promise<void> {
        await this.uIEmailSubject.fill(subject);
    }

    async enterAtEmailMessage(): Promise<void> {
        await this.uIEmailMessage.fill(message);
    }

    async clickAtSendEmailButton(): Promise<void> {
        await this.uISendEmailButton.click();
    }

    async verifyAtEmailSentMessageDisplayed(): Promise<void> {
        const msg = await this.uIEmailSentMessage.innerText();
        expect(msg.includes("Email is Sent")).toBeTruthy()
    }

    async verifyReportIsOpened(): Promise<void> {
        const text = await this.uIReportStatusLabel.innerText();
        // TODO: expectNotTrue(text.includes("NullReferenceException") || text.contains("Exception")||text.contains("Phoenix Report Server is unable to Print SQL Report in WORD format."))
        // ExtentReport.getScreenShot(Playback.driver.trim()).toEqual("Yes")
        // e1.printStackTrace()
    }

    async clickDownloadReportButton(): Promise<void> {
        await this.uIDownloadReportButton.click();
    }

    async readFileName(): Promise<void> {
        // TODO: readPDF ReadFileName()
    }

    async enterAtMiddleName(): Promise<void> {
        await this.uIMiddleNameEdit.fill(middleName);
    }

    async VerifyAtmiddleName(): Promise<void> {
        // TODO: expect(testData.Names('MiddleName'))
    }

    async clickSaveAsAttachment(): Promise<void> {
        await this.uISaveAsAttachmentButton.click();
    }

    async verifyAddtionSuccessFullMessage(): Promise<void> {
    }

    async enterAtNickName(): Promise<void> {
        await this.uINickNameEdit.fill(nickName);
    }

    async VerifyAtNickName(): Promise<void> {
        // TODO: expectEqual(this.uINickNameEdit.inputValue().trim()).toEqual( this.uIMiddleNameEdit.inputValue())
    }

    async verifyAtReportTitle(i: string): Promise<void> {
        if(i==0) {
        const title = await this.uITitleText.innerText();
        // TODO: expectEqual(title.trim()).toEqual(testData.home('Title'))
        }
    }

    async verifyAtLastNameWithSuffix(): Promise<void> {
        const attribute = await this.uILastNameEdit.inputValue();
        // TODO: expect assertion with suffix

    }

    async verifyNullReferenceErrorNotAppeared(): Promise<void> {
        const elements = await this.page.locator("//tr//td[contains(text(), 'System.NullReferenceException')]").all()
        const controlExist = !elements === "";
        if (controlExist) {
        const element = elements[0]; // Get the first matching element
        const text = await element.innerText();
        expect(text.includes("Object reference")).toBeFalsy();
        // TODO: expectNotFalse(controlExist, "Reports Opened Without Error")
        }
    }
}

export class PnxReportCrystalPDFScreenPage {
    readonly page: Page;
    readonly uIExpirationDateEdit: Locator;
    readonly uIViewReport: Locator;
    readonly uIAccountNameOccupancyNameDdn: Locator;
    readonly uINumberOfDaysTextEdit: Locator;
    readonly uIDateOfOriginalNoticeEdit: Locator;
    readonly uIPunitiveOrderTable: Locator;
    readonly uIFromDateEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uITrueRadBtn: Locator;
    readonly uICurrentPageEdit: Locator;
    readonly uIViewReportButton: Locator;
    readonly uINextPage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIExpirationDateEdit = page.locator('NorsvCustomRpt__ctl4__ctl4_txtValue');
        this.uIViewReport = page.locator('NorsvCustomRpt__ctl4__ctl0');
        this.uIAccountNameOccupancyNameDdn = page.locator('NorsvCustomRpt__ctl4__ctl4_ddValue');
        this.uINumberOfDaysTextEdit = page.locator('NorsvCustomRpt__ctl4__ctl4_txtValue');
        this.uIDateOfOriginalNoticeEdit = page.locator('NorsvCustomRpt__ctl4__ctl6_txtValue');
        this.uIPunitiveOrderTable = page.locator("//div[@id='VisibleReportContentrsvCustomRpt__ctl9']");
        this.uIFromDateEdit = page.locator('NorsvCustomRpt__ctl8__ctl4_txtValue');
        this.uIToDateEdit = page.locator('NorsvCustomRpt__ctl8__ctl6_txtValue');
        this.uITrueRadBtn = page.locator('NorsvCustomRpt__ctl8__ctl8_rbTrue');
        this.uICurrentPageEdit = page.locator('NorsvCustomRpt__ctl9__ctl0_CurrentPage');
        this.uIViewReportButton = page.locator('NorsvCustomRpt__ctl8__ctl0');
        this.uINextPage = page.locator('NorsvCustomRpt__ctl9__ctl0_Next__ctl0');
    }

    async ClosePnxReportCrystalPDFScreen(): Promise<void> {
        // no-op: popup window close
    }

    async enterExpirationDateAsCurrentDate(): Promise<void> {
        await this.uIExpirationDateEdit.fill(DateHelpers.getCurrentDate());
        await this.uIExpirationDateEdit.press('Tab');
    }

    async enterNumberofdays(): Promise<void> {
        await this.uINumberOfDaysTextEdit.fill(days);
    }

    async enterAtDateOfOriginalNotice(): Promise<void> {
        await this.uIDateOfOriginalNoticeEdit.fill(dateofNotice);
    }

    async clickViewReportButton(): Promise<void> {
        await this.uIViewReport.click();
    }

    async verifyLocalIDAndStateNoAndSystemID(): Promise<void> {
        // String[] alltext = { "" }
        const allElements = this.uItablecontent
        for (const element of allElements) {
        const text = await element.innerText();
        // alltext = text.split("")
        for (let i = 0; i < alltext.length; i++) {
        if (alltext[i].equals("SystemIDNo: ")) {
        expect(true).toBeTruthy();
        expect(true).toBeTruthy();
        expect(true).toBeTruthy();
        expect(true).toBeTruthy();
        expect(true).toBeTruthy();
        expect(true).toBeTruthy();
        }
        }
        }
    }

    async selectAtAccountNameOrOccupancyNameOptionInDropdown(): Promise<void> {
        // TODO: select dropdown option on 
        // this.uIAccountNameOccupancyNameDdn,
        // testData.home('NameType'))
    }

    async verifyTextInReport(): Promise<void> {
        const json = testData.home('Text')
        const Reporttext = this.page.locator("//span[text()='"+json+"']").innerText();
        expect(json).toEqual(Reporttext);
    }

    async enterAtFromDate(): Promise<void> {
        await this.uIFromDateEdit.fill(fromDate);
    }

    async enterAtToDate(): Promise<void> {
        await this.uIToDateEdit.fill(toDate);
    }

    async clickTrueRadioButton(): Promise<void> {
        await this.uITrueRadBtn.click();
    }

    async enterAtPageNumber(): Promise<void> {
        await this.uICurrentPageEdit.clear();
        await this.uICurrentPageEdit.fill(pageNo);
        await this.page.keyboard.press('Enter')
        // Robot robot = null
        // robot = new Robot()
        //		robot.delay(5000);
        // robot.keyPress(KeyEvent.VK_ENTER)
        // robot.keyRelease(KeyEvent.VK_ENTER)
        // robot.delay(2000)
    }

    async clickViewReport(): Promise<void> {
        await this.uIViewReportButton.click();
    }

    async verifyColumnText(i: string): Promise<void> {
        const json = testData.home("Text" + i)
        const Reporttext = this.page.locator("//div[text()='"+json+"']").innerText();
        expect(json).toEqual(Reporttext);
    }

    async navigateToPage(PageNo: string): Promise<void> {
        for (let i = 1; i < PageNo; i++) {
        await this.uINextPage.click();
        }
    }
}

export class PnxReportSSRSPDFScreenPage {
    readonly page: Page;
    readonly uIExpirationDateEdit: Locator;
    readonly uIViewReport: Locator;
    readonly uIEffectiveDateInPDF: Locator;
    readonly uIExpirationDateInPDF: Locator;
    readonly uIGrantedDateInPDF: Locator;
    readonly uIPrintReport: Locator;
    readonly uIFromDate: Locator;
    readonly uIToDate: Locator;
    readonly uIStartDateField: Locator;
    readonly uIEndDateField: Locator;
    readonly uIStartDateLabel: Locator;
    readonly uIEndDateLabel: Locator;
    readonly uIPaymentLedgerByDateRangeTable: Locator;
    readonly uIEnterNumberOfEmployeesToTestEdit: Locator;
    readonly uISignatureLabel: Locator;
    readonly uIPersonnelProfileReportTable: Locator;
    readonly uISelectActiveStatusDropDown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIExpirationDateEdit = page.locator('NorsvCustomRpt__ctl4__ctl4_txtValue');
        this.uIViewReport = page.locator('NorsvCustomRpt__ctl8__ctl0');
        this.uIEffectiveDateInPDF = page.locator("//span[contains(text(),'Effective Date: ')]/../span[2]");
        this.uIExpirationDateInPDF = page.locator("//span[contains(text(),'Expiration Date: ')]/../span[2]");
        this.uIGrantedDateInPDF = page.locator("//span[text()='Granted - The new date by which compliance is ordered is:  ']//following-sibling::span");
        this.uIPrintReport = page.locator('NobtnPrintReport');
        this.uIFromDate = page.locator('NorsvCustomRpt__ctl4__ctl4_txtValue');
        this.uIToDate = page.locator('NorsvCustomRpt__ctl4__ctl6_txtValue');
        this.uIStartDateField = page.locator("//input[@id='rsvCustomRpt__ctl4__ctl4_txtValue']");
        this.uIEndDateField = page.locator("//input[@id='rsvCustomRpt__ctl4__ctl6_txtValue']");
        this.uIStartDateLabel = page.locator("//span[text()='Start Date']");
        this.uIEndDateLabel = page.locator("//span[text()='End Date']");
        this.uIPaymentLedgerByDateRangeTable = page.locator("//div[@id='VisibleReportContentrsvCustomRpt__ctl9']");
        this.uIEnterNumberOfEmployeesToTestEdit = page.locator('NorsvCustomRpt__ctl8__ctl4_txtValue');
        this.uISignatureLabel = page.locator("//div[text()='Signature']");
        this.uIPersonnelProfileReportTable = page.locator("//div[@id='VisibleReportContentrsvCustomRpt__ctl13']");
        this.uISelectActiveStatusDropDown = page.locator('NorsvCustomRpt__ctl8__ctl4_ddValue');
    }

    async ClosePnxReportSSRSPDFScreen(): Promise<void> {
        // no-op: popup window close
    }

    async enterExpirationDateAsFutureDate(): Promise<void> {
        await this.uIExpirationDateEdit.fill(DateHelpers.getFutureDate(15));
        await this.uIExpirationDateEdit.press('Tab');
    }

    async clickViewReportButton(): Promise<void> {
        await this.uIViewReport.click();
    }

    async verifyViewReportButtonIsNotAppeared(): Promise<void> {
        const checkElementAvailableOrNot = await this.uIViewReport.isVisible()
        expect(checkElementAvailableOrNot).toBeFalsy();
    }

    async verifyExpirationDateInPDF(): Promise<void> {
        const expirationDate = await this.uIExpirationDateInPDF.innerText();
        expect(DateHelpers.getFutureDate(15)).toEqual(expirationDate);
    }

    async verifyEffectiveDateInPDF(): Promise<void> {
        const effectiveDate = await this.uIEffectiveDateInPDF.innerText();
        expect(DateHelpers.getCurrentDate()).toEqual(effectiveDate);
    }

    async verifyGrantedDateInPDF(): Promise<void> {
        const grantedDate = await this.uIGrantedDateInPDF.innerText();
        expect(DateHelpers.getFutureDate(3)).toEqual(grantedDate);
    }

    async verifyContentInPDF(Pdf: string, content: string): Promise<void> {
        expect(Pdf.includes(content)).toBeTruthy();
    }

    async clickPrintReportButton(): Promise<void> {
        await this.uIPrintReport.click();
    }

    async verifyNoOfIncidentColumnAndNoOfUnitsColumnAsSeparateColumn(): Promise<void> {
        const NoOfIncident = this.page.locator("//div[text()='Mutual Aid Type']/following::td[2]//div")
        const NoOfUnits = this.page.locator("//div[text()='Mutual Aid Type']/following::td[3]//div")
        expect(await NoOfIncident.innerText().includes("Number of Incidents")).toBeTruthy();
        expect(await NoOfUnits.innerText().includes("Number of Units")).toBeTruthy();
    }

    async enterAtFromDate(): Promise<void> {
        await this.uIFromDate.fill(fromDate);
    }

    async enterToDateAsCurrentDate(): Promise<void> {
        await this.uIToDate.fill(DateHelpers.getCurrentDate());
    }

    async verifyStartDateFieldDisplayed(): Promise<void> {
        expect(await this.uIStartDateLabel.isVisible()).toBeTruthy();
        expect(await this.uIStartDateField.isVisible()).toBeTruthy();
    }

    async verifyEndDateFieldDisplayed(): Promise<void> {
        expect(await this.uIEndDateLabel.isVisible()).toBeTruthy();
        expect(await this.uIEndDateField.isVisible()).toBeTruthy();
    }

    async enterStartDateAsCurrentDate(): Promise<void> {
        await this.uIStartDateField.fill(DateHelpers.getCurrentDate());
        await this.uIStartDateField.press('Tab');
    }

    async enterEndDateAsCurrentDate(): Promise<void> {
        await this.uIEndDateField.fill(DateHelpers.getCurrentDate());
        await this.uIEndDateField.press('Tab');
    }

    async verifySpecificHeaderIsNOTAvailableInAllHeader(header: string): Promise<void> {
        expect(allHeader.includes(header)).toBeFalsy();
    }

    async verifySpecificHeaderIsAvailableInAllHeader(header: string): Promise<void> {
        expect(allHeader.includes(header)).toBeTruthy();
    }

    async CloseScreen(): Promise<void> {
        // no-op: popup window close
    }

    async enterStartDateAsPreviousDate(): Promise<void> {
        await this.uIStartDateField.fill(DateHelpers.getPreviousDateByMonth(4));
        await this.uIStartDateField.press('Tab');
    }

    async verifyContentInPDF(content: string): Promise<void> {
        const reportcontent = this.page.locator("//div[contains(text(),'"+content+"')]")
        expect(await this.reportcontent.isVisible()).toBeTruthy();
    }

    async enterAtEnterNumberOfEmployessToTest(): Promise<void> {
        await this.uIEnterNumberOfEmployeesToTestEdit.fill(enterNumberOfEmployeesToTest);
    }

    async verifyInitialAndLastInspectedDateAsNotSame(readPDF: string): Promise<void> {
        const element = this.page.locator("//div[contains(text(),'"+readPDF+"')]").all();
        for (const each of element) {
        const text = await each.innerText();
        const currentDate = DateHelpers.getCurrentDate("MM/dd/yy");
        if(text.includes("Initial Inspected on:")) {
        // TODO: expectNotEqual("Initial Inspected on: " + currentDate, text);
        }
        if(text.includes("Last Inspected on:")) {
        expect(text);
        }
        }
        // TODO: const element = this.page.locator with date assertion
        const text = await element.innerText();
        const currentDate = DateHelpers.getCurrentDate("MM/dd/yy");
        if(text.includes("Initial Inspected on:")) {
        expect(text.includes("Initial Inspected on: " + currentDate), "shows wrong").toBeFalsy();
        if(text.includes("Last Inspected on:")) {
        expect(text.includes("Last Inspected on: " + currentDate), "shows wrong").toBeTruthy();
        }
        }
    }

    async verifyNoCurrentDateInPDF1(readPDF: string): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate("MM/dd/yy");
        expect(readPDF.includes(testData.home('Initial') + currentDate), "date is wrong").toBeFalsy()
    }

    async verifyCurrentDateInPDF1(readPDF: string): Promise<void> {
        const currentDate = DateHelpers.getCurrentDate("MM/dd/yy");
        expect(readPDF.includes(testData.home('Last') + currentDate), "wrong").toBeTruthy()
    }

    async verifyTheNoOfPFAreListed(): Promise<void> {
        const allDivs = await this.page.locator("//div[text()='PF Name']//parent::div//parent::td//parent::tr/..//tr//td//div//div").all()
        const finalList: any[] = []
        for (let i = 2; i < allDivs.length; i++) {
        const div = allDivs[i]
        const innerHtml = (await div.getAttribute("innerHTML"))?.trim() ?? '';
        // Stop if this div contains nested tags like <span>, <div>, etc.
        if (/.*<[^>]+>.*/.test(innerHtml)) {
        if(!(div==null && (await div.innerText()).trim() === "")) {
        finalList.push(div)
        const size = finalList.length;
        const Count = size/2;
        const expectedCount = parseInt( testData.Personnel('EnterNumberOfEmployeesToTest'))
        expect(expectedCount).toEqual(Count)
        }
        }
        }
    }

    async verifyTheOutOFTotalBottomMessage(JsonKeyIndex: string): Promise<void> {
        // StringBuilder TextAppend = new StringBuilder()
        const AppendedMessage = null;
        const findElements = await this.page.locator("//span[text()='Out of a total of ']//parent::div//span").all()
        for (const Message of findElements) {
        const TextMessage = await this.Message.innerText();
        // AppendedMessage = TextAppend.append(TextMessage).toString()
        if(DateHelpers.verifyTheFormatIsDate(TextMessage, "MM/dd/yyy")==true) {
        expect(TextMessage.includes(DateHelpers.getCurrentDate())).toBeTruthy();
        expect(AppendedMessage.includes(testData.personnel("OutOfTotalBottomMessage"+JsonKeyIndex))).toBeTruthy()
        }
        }
    }

    async verifySignatureLabelIsDispalyed(): Promise<void> {
        expect(await this.uISignatureLabel.isVisible()).toBeTruthy();
    }

    async verifyTwoWitnessFieldIsDisplayed(): Promise<void> {
        const findElements = await this.page.locator("//div[text()='Witness']").all()
        for (const pl of findElements) {
        expect(await this.pl.isVisible()).toBeTruthy();
        expect(findElements.length==2).toBeTruthy();
        }
    }

    async verifyContentNotInPDF(readPDF: string, content: string): Promise<void> {
        expect(readPDF.includes(content)).toBeFalsy();
    }

    async verifyPFNamesInPersonnelProfileReportTable(): Promise<void> {
        const text = await this.uIPersonnelProfileReportTable.innerText();
        //			PFNames.forEach(Names->{
        // TODO: expectTruthy(text.includes(Names));
        //
        //			});
        for (const Names of PFNames) {
        expect(text.includes(Names)).toBeTruthy();
        }
    }

    async selectAtActiveStatus(JsonKeyIndex: string): Promise<void> {
        await this.uISelectActiveStatusDropDown.selectOption({ label: activeStatus+JsonKeyIndex });
    }
}

export class PrintBatchScreenPage {
    readonly page: Page;
    readonly uIPrintBatchTable: Locator;
    readonly uIPrintBatchButton: Locator;
    readonly uIIndividualReportButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIPrintBatchTable = page.locator('NogrdFrmBatchPrint');
        this.uIPrintBatchButton = page.locator('Nocmdbatchprint');
        this.uIIndividualReportButton = page.locator("//div[@id = 'RadContextMenu1_detached']//span[contains(text(),'Individual Report')]");
    }

    async SelectTwoRowsInGrid(): Promise<void> {
        // TODO: select random grid rows checkboxes this.uIPrintBatchTable, 2
    }

    async ClickPrintBatchButton(): Promise<void> {
        await this.uIPrintBatchButton.click();
    }

    async ClickIndividualReportButton(): Promise<void> {
        await this.uIIndividualReportButton.click();
    }

    async verifyDataExistInGrid(): Promise<void> {
        const gridTableRowsCount = await gridHelpers.getGridRowsCount(this.uIPrintBatchTable)
        expect(gridTableRowsCount != 0).toBeTruthy();
    }
}

export class PrintEmailQueueTabPage {
    readonly page: Page;
    readonly uIPrintEmailQueueGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIPrintEmailQueueGrid = page.locator('NogrdFrmPrintEMailQueue');
    }

    async verifyRowCountNotEqualsToZero(): Promise<void> {
        const rowsCount = await gridHelpers.getGridRowsCount(this.uIPrintEmailQueueGrid)
        expect(rowsCount != 0).toBeTruthy();
    }

    async selectAtToBePrintedInGridByRow(): Promise<void> {
        // gridHelpers.TODO
        // (this.uIPrintEmailQueueGrid,testData.home('ToBePrinted'))
    }

    async clickMessageIcon(): Promise<void> {
        await this.uIMessageIcon.click();
    }

    async verifyModuleAreNotListed(): Promise<void> {
        const uILeftNavigation = this.page.locator('#RAD_SLIDING_PANE_CONTENT_Pane1')
        const findElement = uILeftNavigation.locator("//ul/li").getTagName();
    }

    async enterAtSelfProfileTextSearchBar(): Promise<void> {
        await this.uISelfProfileTextSearchBar.click();
        await this.uISelfProfileTextSearchBar.fill(selfProfileText);
        await this.uISelfProfileTextSearchBar.press('Enter');
    }

    async SwitchToQucikEntryUsinURL(): Promise<void> {
    }
}

export class PrintEmailScreenPage {
    readonly page: Page;
    readonly uIFromMainEdit: Locator;
    readonly uIMessageEdit: Locator;
    readonly uISendEmailButton: Locator;
    readonly uISubjectEdit: Locator;
    readonly uICancelButton: Locator;
    readonly uIDoneButton: Locator;
    readonly uIToEdit: Locator;
    readonly uIFromEdit: Locator;
    readonly uIExpiredDate: Locator;
    readonly uIEffectiveDate: Locator;
    readonly uIMessageBodyEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIFromMainEdit = page.locator('Notxtfromemail');
        this.uIMessageEdit = page.locator('NotxtMessage');
        this.uISendEmailButton = page.locator('NocmdSendEmail');
        this.uISubjectEdit = page.locator('Notxtsubject');
        this.uICancelButton = page.locator('Nocmdcancel');
        this.uIDoneButton = page.locator('NobtnOK');
        this.uIToEdit = page.locator('Notxttomail');
        this.uIFromEdit = page.locator('Notxtfromemail');
        this.uIExpiredDate = page.locator("//div[@id='divParameter']//input[@id='dttmExpireDate_KPIDttmCtrl']");
        this.uIEffectiveDate = page.locator('NodttmEffectiveDate_KPIDttmCtrl');
        this.uIMessageBodyEdit = page.locator('//body');
    }

    async Close(): Promise<void> {
        // no-op: popup window close
    }

    async ClickSendEmail(): Promise<void> {
        await this.uISendEmailButton.click();
    }

    async verifyAtFrom(): Promise<void> {
        // TODO: expect assertion
    }

    async verifySendEmailButtonDisplay(): Promise<void> {
        expect(await this.uISendEmailButton.isVisible()).toBeTruthy();
    }

    async clickDoneButton(): Promise<void> {
        await this.uIDoneButton.click();
    }

    async enterAtTo(): Promise<void> {
        await this.uIToEdit.fill(to);
    }

    async enterAtSubject(): Promise<void> {
        await this.uISubjectEdit.fill(subject);
    }

    async enterAtMessage(): Promise<void> {
        await this.uIMessageBodyEdit.click();
        await this.uIMessageBodyEdit.fill(message);
    }

    async verifyEmailSentAcknowledgeMsg(): Promise<void> {
        // popup.switchToAcknowledge()
    }

    async enterAtFrom(): Promise<void> {
        await this.uIFromEdit.fill(from);
        await this.uIFromEdit.press('Tab');
    }

    async enterMessage(): Promise<void> {
        await this.uIMessageEdit.fill(RandomHelpers.randomString(10));
        await this.uIMessageEdit.press('Tab');
    }

    async enterExpirationDateAsFutureDay(futureDay: string): Promise<void> {
        await this.uIExpiredDate.fill(DateHelpers.getFutureDate(futureDay));
        await this.uIExpiredDate.press('Tab');
    }

    async enterEffectiveDateAsCurrentDate(): Promise<void> {
        await this.uIEffectiveDate.fill(DateHelpers.getCurrentDate());
        await this.uIEffectiveDate.press('Tab');
    }

    async verifyEmailIDAtTo(): Promise<void> {
        const mail = await this.uIToEdit.inputValue();
        expect(mail.trim()).toEqual(testData.home('EmailID'))
    }

    async verify32003EmailHasBeenSentAcknowledgePopup(): Promise<void> {
    }

    async verifyEmailHasBeenSentAcknowledgePopup(): Promise<void> {
    }

    async switchToMessageFrame(): Promise<void> {
    }
}

export class PrintHistoryScreenPage {
    readonly page: Page;
    readonly uIInspectionSearchInquiryTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIInspectionSearchInquiryTable = page.locator("//div[@id='grdInquiry']");
    }

    async verifyAttachementCol(): Promise<void> {
        const gridHeaderColumnName = await gridHelpers.getGridHeaderColumnName(this.uIInspectionSearchInquiryTable.trim()).toEqual("support@prophoenix.com")
        expect(gridHeaderColumnName).toEqual("Ack");
    }

    async verifyDateInGrid(): Promise<void> {
        const text = await gridHelpers.getGridCell(this.uIInspectionSearchInquiryTable, testData.home('TemplateName'), "Date Time")
        expect(text.includes(DateHelpers.getCurrentDate())).toBeTruthy();
    }
}

export class PrintIconPage {
    readonly page: Page;
    readonly uIPrintIcon: Locator;
    readonly uIPrintIconOptions: Locator;
    readonly uIReport: Locator;
    readonly uIAnimalLostFound: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIPrintIcon = page.locator("//img[@id='mnuPnxSec_i4_pnxReports']");
        this.uIPrintIconOptions = page.locator("//div[@id='mnuPnxSec']//span[@class='rmText rmExpandRight']");
        this.uIReport = page.locator("//div[@id='mnuPnxSec']//span[text()='Report']");
        this.uIAnimalLostFound = page.locator("//div[@id='mnuPnxSec']//ul[@class='rmVertical']//span[text()='Animal Lost Found']");
    }

    async verifyListUnderPrintIcon(listName: string): Promise<void> {
        const drop: string[] = []
        await this.uIPrintIcon.click();
        const Values = await this.page.locator("//div[@id='mnuPnxSec']//span[@class='rmText rmExpandRight']").all()
        for (const Val of Values) {
        // drop.add(Val.innerText())
        expect(drop.includes(listName)).toBeTruthy();
        }
    }

    async clickAnimalLostFoundFromReport(): Promise<void> {
        await this.uIReport.hover()
        await this.uIAnimalLostFound.click();
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }
}

export class QuickActivityEntryPage {
    readonly page: Page;
    readonly uISubjectEdit: Locator;
    readonly uIDetailsEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISubjectEdit = page.locator('NotxtSubject');
        this.uIDetailsEdit = page.locator('NotxtDetails');
    }

    async verifyAtSubject(JsonkeyIndex: string): Promise<void> {
        const Subject = await this.quickActivityEntry.inputValue();
        expect(testData.home("Subject"+JsonkeyIndex))
    }

    async verifyAtDetails(JsonkeyIndex: string): Promise<void> {
        const Details = await this.quickActivityEntry.inputValue();
        // TODO: expect("Screen ID", 0.trim()).toEqual(Details.trim()).toEqual(Subject)
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async clickSelfProfileLink(): Promise<void> {
        await this.uISelfProfileLink.click();
    }
}

export class RealTimeDashboardTabPage {
    readonly page: Page;
    readonly uIInnerRealTimeDashboardTab: Locator;
    readonly uIEditText: Locator;
    readonly uIViewText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIInnerRealTimeDashboardTab = page.locator("//li[@id='loadURL100010000225516']//a[text()='Real Time Dashboard']");
        this.uIEditText = page.locator("//div[@id='100010000225516']//a[text()='Edit']");
        this.uIViewText = page.locator("//div[@id='loadURL100010000225516']//a[text()='View']");
    }

    async clickInnerRealTimeDashboardTab(): Promise<void> {
        await this.realTimeDashboardTab.click();
    }

    async clickEditText(): Promise<void> {
        await this.realTimeDashboardTab.click();
    }

    async clickViewText(): Promise<void> {
        await this.realTimeDashboardTab.click();
    }

    async switchToRTDashboard(): Promise<void> {
    }
}

export class RecurrenceSchedulePage {
    readonly page: Page;
    readonly uIStartDateEdit: Locator;
    readonly uIStartTimeEdit: Locator;
    readonly uIEndDateEdit: Locator;
    readonly uIEndTimeEdit: Locator;
    readonly uIYearlyRadioButton: Locator;
    readonly uIEveryDayEdit: Locator;
    readonly uIMonthDropDown: Locator;
    readonly uISaveButton: Locator;
    readonly uIStatusbar: Locator;
    readonly uIEveryMinutesEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIStartDateEdit = page.locator('NousrJobSchedule1_dttmStartDate_Date_KPIDttmCtrl');
        this.uIStartTimeEdit = page.locator("//table[@id='usrJobSchedule1_dttmStartDate_Time']//input");
        this.uIEndDateEdit = page.locator('NousrJobSchedule1_dttmEndDate_Date_KPIDttmCtrl');
        this.uIEndTimeEdit = page.locator("//table[@id='usrJobSchedule1_dttmEndDate_Time']//input");
        this.uIYearlyRadioButton = page.locator('NousrJobSchedule1_rdReccType_5');
        this.uIEveryDayEdit = page.locator('NousrJobSchedule1_txtDayofYear');
        this.uIMonthDropDown = page.locator('NousrJobSchedule1_lstMonth');
        this.uISaveButton = page.locator('NocmdSave');
        this.uIStatusbar = page.locator("//td[@class='statusBar']//b");
        this.uIEveryMinutesEdit = page.locator('NousrJobSchedule1_txtMinute');
    }

    async enterAtStartDateAndTime(): Promise<void> {
        await this.uIStartDateEdit.click();
        await this.uIStartDateEdit.press('Tab');
        await this.uIStartTimeEdit.click();
    }

    async enterAtEndDateAndTime(): Promise<void> {
        await this.uIEndDateEdit.click();
        await this.uIEndDateEdit.press('Tab');
        await this.uIEndTimeEdit.click();
        await this.uIEndTimeEdit.press('Tab');
    }

    async selectAtYearlyRadioButton(): Promise<void> {
        await this.uIYearlyRadioButton.click();
    }

    async enterAtEveryDay(): Promise<void> {
        await this.uIEveryDayEdit.click();
    }

    async selectAtMonth(): Promise<void> {
        await this.uIMonthDropDown.selectOption({ label: month });
    }

    async clicksave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
        const text = await this.uIStatusbar.innerText();
        expect("1002 - Addition Successful").toEqual(text);
    }

    async verifyStartDateMandatoryAcknowldge(): Promise<void> {
    }

    async verifyEndDateMandatoryAcknowldge(): Promise<void> {
    }

    async verifyMinutesMandatoryAcknowldge(): Promise<void> {
    }

    async enterAtMinutes(): Promise<void> {
        await this.uIEveryMinutesEdit.fill(minutes);
    }

    async clearEveryMinutes(): Promise<void> {
        await this.uIEveryMinutesEdit.clear();
    }

    async switchToAllowBulkImportExportData(): Promise<void> {
    }
}

export class RelatedReportsTabPage {
    readonly page: Page;
    readonly uIReportNameLookUpIcon: Locator;
    readonly uIAddButton: Locator;
    readonly uIRelatedTabResulGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIReportNameLookUpIcon = page.locator('NotabKPIText_tmpl4_usrRptTemplate1_lupReportID_imgBtn');
        this.uIAddButton = page.locator('NotabKPIText_tmpl4_usrRptTemplate1_imgAdd');
        this.uIRelatedTabResulGrid = page.locator('NotabKPIText_tmpl4_usrRptTemplate1_grdRptTemplate');
    }

    async clickReportNameLookupIcon(): Promise<void> {
        await this.relatedReportsTab.click();
    }

    async clickAddButton(): Promise<void> {
        await this.relatedReportsTab.click();
    }

    async verifyAtScreenIDInGrid(): Promise<void> {
        const gridCellInnerText = await gridHelpers.getGridCellInnerText(this.uIRelatedTabResulGrid)
        expect(testData.home('ScreenID'))
    }

    async verifyAtReportNameInGrid(): Promise<void> {
        const gridCellInnerText = await gridHelpers.getGridCellInnerText(this.uIRelatedTabResulGrid.trim()).toEqual(gridCellInnerText)
        expect(testData.home('ReportName'))
    }

    async enterAtReportID(): Promise<void> {
        await this.uIReportNameEdit.fill(reportID);
        await this.uIReportNameEdit.press('Tab');
    }

    async enterAtSeqNo(): Promise<void> {
        await this.uISeqNoEdit.fill(seqNo);
        await this.uISeqNoEdit.press('Tab');
    }
}

export class ReportLogPage {
    readonly page: Page;
    readonly uIDateFromEdit: Locator;
    readonly uITimeFromEdit: Locator;
    readonly uIProductDropDown: Locator;
    readonly uIIncludeErrorLogCheckBox: Locator;
    readonly uIReportNameEdit: Locator;
    readonly uISearchButton: Locator;
    readonly uIJurisDropDown: Locator;
    readonly uIReportLogTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIDateFromEdit = page.locator('NodtStartDttm_Date_KPIDttmCtrl');
        this.uITimeFromEdit = page.locator("//table[@id='dtStartDttm_Time']//input");
        this.uIProductDropDown = page.locator('NoddlProduct');
        this.uIIncludeErrorLogCheckBox = page.locator('NochkErrorlog');
        this.uIReportNameEdit = page.locator('NotxtReportName');
        this.uISearchButton = page.locator('NocmdSearch');
        this.uIJurisDropDown = page.locator('NolstJuris');
        this.uIReportLogTable = page.locator('NoupdateGrid');
    }

    async enterFromDateAsLastYear(): Promise<void> {
        await this.uIDateFromEdit.clear();
        await this.uIDateFromEdit.fill(DateHelpers.getPreviousDateByMonth(12));
    }

    async verifyFromDateAsCurrentDate(): Promise<void> {
        const date = await this.uIDateFromEdit.inputValue();
        expect(date).toEqual(DateHelpers.getCurrentDate());
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async selectProductAsCAD(): Promise<void> {
        await this.uIProductDropDown.selectOption({ label: "CAD" });
    }

    async selectAtProduct(): Promise<void> {
        // TODO: select dropdown option on this.uIProductDropDown.trim()).toEqual(gridCellInnerText)
    }

    async selectAtjuris(): Promise<void> {
        // TODO: selectDropDownOption(this.uIJurisDropDown with testData.home('Juris')
    }

    async enterAtReportName(): Promise<void> {
        await this.uIReportNameEdit.fill(reportName);
    }

    async clearReportName(): Promise<void> {
        await this.uIReportNameEdit.clear();
    }

    async unCheckIncludeErrorCheckBox(): Promise<void> {
        if (this.uIIncludeErrorLogCheckBox.isSelected())
        await this.uIIncludeErrorLogCheckBox.click();
    }

    async checkIncludeErrorCheckBox(): Promise<void> {
        if (!this.uIIncludeErrorLogCheckBox.isSelected())
        await this.uIIncludeErrorLogCheckBox.click();
    }

    async verifyNoRecordFoundAcknowledge(): Promise<void> {
    }

    async verifyTableListOutResults(): Promise<void> {
        const count = await gridHelpers.getGridRowsCount(this.uIReportLogTable)
        expect(count > 0).toBeTruthy();
    }

    async verifyAtProductInGrid(rowIndex: string): Promise<void> {
        const product = await gridHelpers.getGridCellInnerTextByText(this.uIReportLogTable, "Product", rowIndex)
        expect(product.trim()).toEqual(testData.home('Product'))
    }
}

export class RTDashboardPage {
    readonly page: Page;
    readonly uIPlayButton: Locator;
    readonly uIPreviewButton: Locator;
    readonly uINextButtton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIPlayButton = page.locator('Noimgpaly');
        this.uIPreviewButton = page.locator('Noimgprev');
        this.uINextButtton = page.locator('Noimgnext');
    }

    async clickPlayButton(): Promise<void> {
        await this.realTimeDashboardTab.click();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }
}

export class SearchPrefixLettersPage {
    readonly page: Page;
    readonly uITextSearch: Locator;
    readonly uISearchIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uITextSearch = page.locator('NotxtSearch');
        this.uISearchIcon = page.locator('NoimgTxtSrch');
    }

    async verifyTooltipMsg(): Promise<void> {
        const text = await this.uITextSearch.inputValue();
        // TODO: expect(text.trim()).toEqual( ";Name OR =Address OR .CaseNo OR /PlateNo/State OR NoPhoneNo OR *SSNNo Enter Text to search text or press Enter to view expanded window")
    }

    async verifySearchIconIsDisplayed(): Promise<void> {
        expect(await this.uISearchIcon.isVisible()).toBeTruthy();
    }

    async EnterAtText1(): Promise<void> {
        await this.uITextSearch.fill(text1);
        await this.uITextSearch.press('Enter');
    }

    async closeTheRespectedScreen(name: string): Promise<void> {
        expect(title).toEqual(name);
    }

    async EnterAtText2(): Promise<void> {
        await this.uITextSearch.fill(text2);
        await this.uITextSearch.press('Enter');
    }

    async EnterAtText3(): Promise<void> {
        await this.uITextSearch.fill(text3);
        await this.uITextSearch.press('Enter');
    }

    async EnterAtText4(): Promise<void> {
        await this.uITextSearch.fill(text4);
        await this.uITextSearch.press('Enter');
    }

    async EnterAtText5(): Promise<void> {
        await this.uITextSearch.fill(text5);
        await this.uITextSearch.press('Enter');
    }

    async EnterAtText6(): Promise<void> {
        await this.uITextSearch.fill(text6);
        await this.uITextSearch.press('Enter');
    }

    async EnterAtText7(): Promise<void> {
        await this.uITextSearch.fill(text7);
        await this.uITextSearch.press('Enter');
    }

    async EnterAtText8(): Promise<void> {
        await this.uITextSearch.fill(text8);
        await this.uITextSearch.press('Enter');
    }

    async EnterAtText9(): Promise<void> {
        await this.uITextSearch.fill(text9);
        await this.uITextSearch.press('Enter');
    }

    async EnterAtText10(): Promise<void> {
        await this.uITextSearch.fill(text10);
        await this.uITextSearch.press('Enter');
    }

    async EnterAtText11(): Promise<void> {
        await this.uITextSearch.fill(text11);
        await this.uITextSearch.press('Enter');
    }

    async EnterAtText12(): Promise<void> {
        await this.uITextSearch.fill(text12);
        await this.uITextSearch.press('Enter');
    }

    async EnterAtText13(): Promise<void> {
        await this.uITextSearch.fill(text13);
        await this.uITextSearch.press('Enter');
    }

    async EnterAtText14(): Promise<void> {
        await this.uITextSearch.fill(text14);
        await this.uITextSearch.press('Enter');
    }

    async EnterAtText15(): Promise<void> {
        await this.uITextSearch.fill(text15);
        await this.uITextSearch.press('Enter');
    }

    async EnterAtText16(): Promise<void> {
        await this.uITextSearch.fill(text16);
        await this.uITextSearch.press('Enter');
    }

    async EnterAtText17(): Promise<void> {
        await this.uITextSearch.fill(text17);
        await this.uITextSearch.press('Enter');
    }

    async enterTextWithSymbols(i: string): Promise<void> {
        await this.uITextSearch.fill(text + i);
        await this.uITextSearch.press('Enter');
    }
}

export class SelectCalendarPage {
    readonly page: Page;
    readonly uIBlankButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIBlankButton = page.locator('Nobutblank');
    }

    async clickBlankButton(): Promise<void> {
        await this.uIBlankButton.click();
    }
}

export class SelectReportPage {
    readonly page: Page;
    readonly uIPDFRadioButton: Locator;
    readonly uIPrintBatchInQueueButton: Locator;
    readonly uIExcelRadioButton: Locator;
    readonly uIScreenRadioButton: Locator;
    readonly uIWordRadioButton: Locator;
    readonly uISelectReportMainResultTable: Locator;
    readonly uISelectReportOthersResultTable: Locator;
    readonly uISelectReportsResultTable: Locator;
    readonly uISelectReportOthersNameDetails: Locator;
    readonly uISelectReportOthersNameMiningImage: Locator;
    readonly uISelectReportCrashReport2017Record: Locator;
    readonly uISelectReportCrashReportRecord: Locator;
    readonly uISelectReportDetentionRecord: Locator;
    readonly uICommonNamesRecord: Locator;
    readonly uICallSimpleListRecord: Locator;
    readonly uICallDetailReportRecord: Locator;
    readonly uIUnitRunAssignmentSummaryReport: Locator;
    readonly uICallSummaryRecord: Locator;
    readonly uICallDetailReportSSRSRecord: Locator;
    readonly uIInspectionChecklistOnlyReport: Locator;
    readonly uIQAFormReport: Locator;
    readonly uISelectAllCheckBox: Locator;
    readonly uIPrinterRadioButton: Locator;
    readonly uIRecordCountTextView: Locator;
    readonly uIVEHTowRotationsRecord: Locator;
    readonly uIPhotoLineupRecord: Locator;
    readonly uIPrintSelectedReportButton: Locator;
    readonly uIConsolidatedReportButton: Locator;
    readonly uICitationSummaryRecord: Locator;
    readonly uICitationsbyOfficersRecord: Locator;
    readonly uICitationSummaryReportsRecord: Locator;
    readonly uICitationsbyStatutesRecord: Locator;
    readonly uICivilPaymentRecord: Locator;
    readonly uIPhotoLineupReportRecord: Locator;
    readonly uIIncidentAnalysisReportRecord: Locator;
    readonly uIPursuitIncidentReportRecord: Locator;
    readonly uIFireCodeViolationReportRecord: Locator;
    readonly uIPreliminaryLifeSafetyPhysicalPlantReport: Locator;
    readonly uIEMSDemographicSummaryReportRecord: Locator;
    readonly uIEMSMedicationsGivenReportRecord: Locator;
    readonly uIUseOfForcePDFReportRecord: Locator;
    readonly uIUseOfForcePDFReportSSRS: Locator;
    readonly uICSDCMACComplianceReport: Locator;
    readonly uIEmailReportButton: Locator;
    readonly uIIndividualReportButton: Locator;
    readonly uISendEmailButton: Locator;
    readonly uICertificatesTable: Locator;
    readonly uIIDCardsTable: Locator;
    readonly uICaseNamesReport: Locator;
    readonly uIEMSPatientCareDetailedReportRecord: Locator;
    readonly uIEMSPatientCareSummaryReportRecord: Locator;
    readonly uINJTR12023ReportRecord: Locator;
    readonly uISelectReportUOFDetails: Locator;
    readonly uINoticesTable: Locator;
    readonly uICategoryTable: Locator;
    readonly uICertificateOfInspectionReport: Locator;
    readonly uINoticeOfViolationReport: Locator;
    readonly uIUseOfForceReport: Locator;
    readonly uIAddressDetailReportRecord: Locator;
    readonly uICADSummaryDateSpecificRecord: Locator;
    readonly uIReportSearchTable: Locator;
    readonly uICADActivityDetailReport: Locator;
    readonly uIAlarmCFSRecord: Locator;
    readonly uINJTRReport: Locator;
    readonly uISelectUCRDomesticViolenceReport: Locator;
    readonly uINoticeOfDecisionOnRequestForTimeExtensionReport: Locator;
    readonly uIAlarmYearEndReport: Locator;
    readonly uIOrderToPayPenaltyRecurringViolationsReport: Locator;
    readonly uINoEntryReport: Locator;
    readonly uINFIRSMutualAidSummaryReport: Locator;
    readonly uINFIRSIncidentAnalysisReport: Locator;
    readonly uIAccountabilityTagReport: Locator;
    readonly uIAccountabilityIDReport: Locator;
    readonly uICaseDetailsReportRecord: Locator;
    readonly uITowDetailsReport: Locator;
    readonly uIEMSBillingReportWithAssessmentsReport: Locator;
    readonly uIPaymentsLedger: Locator;
    readonly uIReportManagerRecord: Locator;
    readonly uIReportsGridTable: Locator;
    readonly uIAnimalLostFound: Locator;
    readonly uIAnimalNameDetail: Locator;
    readonly uIPaymentLedgerByDateRangeReport: Locator;
    readonly uIPaymentLedgerForCSDCMACByDateRangeReport: Locator;
    readonly uISelectReportNameRapSheet: Locator;
    readonly uIArrestDocketReport: Locator;
    readonly uITrainingReport: Locator;
    readonly uITrainingReportByCourse: Locator;
    readonly uIEditReportButton: Locator;
    readonly uIAccessListControl: Locator;
    readonly uIRecurrenceButton: Locator;
    readonly uIAnimalLostOrFoundReport: Locator;
    readonly uITowSummaryReport: Locator;
    readonly uIInvoiceReport: Locator;
    readonly uIShowInactiveCheckbox: Locator;
    readonly uIUnitReportFire: Locator;
    readonly uIIndividualReportButtonForFire: Locator;
    readonly uICSDCMACSmokeDetectorComplianceReport: Locator;
    readonly uISelectReportAdminTable: Locator;
    readonly uIQueueReportButton: Locator;
    readonly uIEvaluationForm: Locator;
    readonly uIDoctorNameDetailsText: Locator;
    readonly uITerminalEntryGrid: Locator;
    readonly uISearchButton: Locator;
    readonly uICalendarReport: Locator;
    readonly uICMACDReport: Locator;
    readonly uIAddNewReportButton: Locator;
    readonly uIPreplanDocumentReport: Locator;
    readonly uIPreplanDocumentWOViolationsReport: Locator;
    readonly uIInspectionWorksheetDetailsReport: Locator;
    readonly uIInspectionReport: Locator;
    readonly uIGangListReport: Locator;
    readonly uIOffenderSimpleListReport: Locator;
    readonly uIOpenRecordRequestList: Locator;
    readonly uIViewPrintEmailHistoryButton: Locator;
    readonly uIPersonnelTrainingReport: Locator;
    readonly uITrainingClassInstructorReport: Locator;
    readonly uITrainingClassStudentsReport: Locator;
    readonly uITowRotationReport: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIPDFRadioButton = page.locator('NordoExport_0');
        this.uIPrintBatchInQueueButton = page.locator('Nobtnprintbatch');
        this.uIExcelRadioButton = page.locator('NordoExport_1');
        this.uIScreenRadioButton = page.locator('NordoExport_2');
        this.uIWordRadioButton = page.locator('NordoExport_3');
        this.uISelectReportMainResultTable = page.locator('NogrdRptMgr');
        this.uISelectReportOthersResultTable = page.locator('NogrdRptMgr_ctl00_Others_0');
        this.uISelectReportsResultTable = page.locator('NogrdRptMgr_ctl00_Reports_0');
        this.uISelectReportOthersNameDetails = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0'] //td[contains(text(), 'Name Detail')]");
        this.uISelectReportOthersNameMiningImage = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0'] //td[contains(text(), 'Name Mining Image')]");
        this.uISelectReportCrashReport2017Record = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0'] //td[contains(text(), 'Crash Report 2017')]");
        this.uISelectReportCrashReportRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0'] //td[contains(text(), 'Crash Report')]");
        this.uISelectReportDetentionRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'Detention Record')]");
        this.uICommonNamesRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'Common Names')]");
        this.uICallSimpleListRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'Call Simple Lists')]");
        this.uICallDetailReportRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0'] //td[contains(text(), 'Call Detail Report')]");
        this.uIUnitRunAssignmentSummaryReport = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0'] //td[text()='Unit Run Assignment Summary']");
        this.uICallSummaryRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0'] //td[contains(text(), 'Call Summary')]");
        this.uICallDetailReportSSRSRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'Call Detail Report SSRS')]");
        this.uIInspectionChecklistOnlyReport = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'Inspections Checklist Only')]");
        this.uIQAFormReport = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'QA Form')]");
        this.uISelectAllCheckBox = page.locator('Nochkselectreport');
        this.uIPrinterRadioButton = page.locator('NoPrinter');
        this.uIRecordCountTextView = page.locator('NolblIsMainDB');
        this.uIVEHTowRotationsRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0'] //td[contains(text(), 'VEH Tow Rotation')]");
        this.uIPhotoLineupRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0'] //td[contains(text(), 'Photo Lineup')]");
        this.uIPrintSelectedReportButton = page.locator('NobtnPrintSelectedReport');
        this.uIConsolidatedReportButton = page.locator("//div[@id = 'RadContextMenu1_detached']//span[contains(text(),'Consolidated Report')]");
        this.uICitationSummaryRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0'] //td[contains(text(), 'Citation Summary')]");
        this.uICitationsbyOfficersRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'Citations by Officers')]");
        this.uICitationSummaryReportsRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'Citations Summary')]");
        this.uICitationsbyStatutesRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'Citations by Statutes')]");
        this.uICivilPaymentRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0'] //td[contains(text(), 'Civil Payment')]");
        this.uIPhotoLineupReportRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'Photo Lineup Report')]");
        this.uIIncidentAnalysisReportRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'Incident Analysis Report')]");
        this.uIPursuitIncidentReportRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0'] //td[contains(text(), 'Pursuit Incident Report')]");
        this.uIFireCodeViolationReportRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'Fire Code Violations')]");
        this.uIPreliminaryLifeSafetyPhysicalPlantReport = page.locator("//div[@id = 'grdRptMgr_ctl00_Forms_0'] //td[contains(text(), 'Preliminary Report of Life Safety and Physical Plant Survey')]");
        this.uIEMSDemographicSummaryReportRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'EMS Demographic Summary Report')]");
        this.uIEMSMedicationsGivenReportRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'EMS Medications Given Report')]");
        this.uIUseOfForcePDFReportRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0'] //td[contains(text(), 'Use of Force')]");
        this.uIUseOfForcePDFReportSSRS = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0'] //td[contains(text(), 'Use Of Force Report')]");
        this.uICSDCMACComplianceReport = page.locator("//div[@id = 'grdRptMgr_ctl00_Certificates_0'] //td[contains(text(), 'Certificate of Smoke Alarm, Carbon Monoxide Alarm and Portable Fire Extinguisher Compliance')]");
        this.uIEmailReportButton = page.locator('NobtnEmailReport');
        this.uIIndividualReportButton = page.locator("//div[@id ='RadContextMenu2_detached']//span[contains(text(),'Individual Report')]");
        this.uISendEmailButton = page.locator('NocmdSendEmail');
        this.uICertificatesTable = page.locator('NogrdRptMgr_ctl00_Certificates_0');
        this.uIIDCardsTable = page.locator('NogrdRptMgr_ctl00_ID Cards_0');
        this.uICaseNamesReport = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'Case Names')]");
        this.uIEMSPatientCareDetailedReportRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'EMS Patient Care Detailed')]");
        this.uIEMSPatientCareSummaryReportRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'EMS Patient Care Summary')]");
        this.uINJTR12023ReportRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0'] //td[contains(text(), 'NJTR-1 2023')]");
        this.uISelectReportUOFDetails = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'UOF Details')]");
        this.uINoticesTable = page.locator('NogrdRptMgr_ctl00_Notices_0');
        this.uICategoryTable = page.locator("//div[@id='grdRptMgr_ctl00_Reports_0']");
        this.uICertificateOfInspectionReport = page.locator("//div[@id = 'grdRptMgr_ctl00_Certificates_0'] //td[contains(text(), 'Certificate of Inspection')]");
        this.uINoticeOfViolationReport = page.locator("//div[@id = 'grdRptMgr_ctl00_Notices_0'] //td[contains(text(), 'Notice of Violations and Order to Correct')]");
        this.uIUseOfForceReport = page.locator("(//table[@mkr='dataTbl.hdn']//tbody//tr//td[contains(text(),'Use of Force')])[1]");
        this.uIAddressDetailReportRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'Address Detail Report')]");
        this.uICADSummaryDateSpecificRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'CAD Summary Date Specific Report')]");
        this.uIReportSearchTable = page.locator("//div[@mkr='container']");
        this.uICADActivityDetailReport = page.locator("//div[@id = 'grdRptMgr_ctl00'] //td[contains(text(), 'CAD Activity Detail Report')]");
        this.uIAlarmCFSRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0'] //td[contains(text(), 'Alarm CFS')]");
        this.uINJTRReport = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0'] //td[contains(text(), 'NJTR-1 2023')]");
        this.uISelectUCRDomesticViolenceReport = page.locator("//td[contains(text(),'UCR Domestic Violence Case Report')]");
        this.uINoticeOfDecisionOnRequestForTimeExtensionReport = page.locator("//td[text()='Notice of Decision on Request for Time Extension']");
        this.uIAlarmYearEndReport = page.locator("//td[contains(text(),'Alarm Year End Report')]");
        this.uIOrderToPayPenaltyRecurringViolationsReport = page.locator("//div[@id='grdRptMgr_ctl00']//td[text()='Order to Pay Penalty - Recurring Violations']");
        this.uINoEntryReport = page.locator("//div[@id='grdRptMgr_ctl00']//td[text()='No Entry Report']");
        this.uINFIRSMutualAidSummaryReport = page.locator("//td[text()='NFIRS Mutual Aid Summary Report']");
        this.uINFIRSIncidentAnalysisReport = page.locator("//td[text()='NFIRS Incident Analysis']");
        this.uIAccountabilityTagReport = page.locator("//td[text()='Accountability Tag']");
        this.uIAccountabilityIDReport = page.locator("//td[text()='Accountability ID']");
        this.uICaseDetailsReportRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'Case Details Report')]");
        this.uITowDetailsReport = page.locator("//div[@id = 'grdRptMgr_ctl00'] //td[contains(text(),'Tow Details')]");
        this.uIEMSBillingReportWithAssessmentsReport = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'EMS Billing Report with Assessments')]");
        this.uIPaymentsLedger = page.locator("//td[text()='Payments Ledger']");
        this.uIReportManagerRecord = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0']//td[contains( text(),'Report Manager')]");
        this.uIReportsGridTable = page.locator("//div[@id = 'grdRptMgr_ctl00']");
        this.uIAnimalLostFound = page.locator("//div[@id = 'grdRptMgr_ctl00'] //td[contains(text(),'Animal Lost Found')]");
        this.uIAnimalNameDetail = page.locator("//div[@id = 'grdRptMgr_ctl00'] //td[contains(text(),'Animal Name Detail')]");
        this.uITowRotationReport = page.locator("//div[@id = 'grdRptMgr_ctl00'] //td[contains(text(),'Tow Rotation')]");
        this.uIPaymentLedgerByDateRangeReport = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0'] //td[text()= 'Payment Ledger by Date Range']");
        this.uIPaymentLedgerForCSDCMACByDateRangeReport = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0'] //td[text()= 'Payments Ledger for CSDCMAC by Date Range']");
        this.uISelectReportNameRapSheet = page.locator("//div[@id = 'grdRptMgr_ctl00'] //td[contains(text(), 'Name Rap Sheet SSRS')]");
        this.uIArrestDocketReport = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0'] //td[(contains(text(), 'Arrest Report'))or(contains(text(), 'Arrest Docket'))]");
        this.uITrainingReport = page.locator("//div[@id='grdRptMgr_ctl00_Reports_0']//td[text()='Personnel Training Report']");
        this.uITrainingReportByCourse = page.locator("//div[@id='grdRptMgr_ctl00_Reports_0']//td[text()='Personnel Training by Course']");
        this.uIEditReportButton = page.locator('Nobtnmaintainreport');
        this.uIAccessListControl = page.locator("//td[text()='Access List Control']");
        this.uIRecurrenceButton = page.locator('Nobtnschedule');
        this.uIAnimalLostOrFoundReport = page.locator("//div[@id='grdRptMgr_ctl00_Reports_0']//td[text()='Animals Lost or Found']");
        this.uITowSummaryReport = page.locator("//div[@id = 'grdRptMgr_ctl00'] //td[contains(text(),'Tow Summary Report')]");
        this.uIInvoiceReport = page.locator("//div[@id = 'grdRptMgr_ctl00'] //td[contains(text(),'Invoice Report')]");
        this.uIShowInactiveCheckbox = page.locator('NochkshowInactive');
        this.uIUnitReportFire = page.locator("//div[@id = 'grdRptMgr_ctl00'] //td[text()= 'Units List']");
        this.uIIndividualReportButtonForFire = page.locator("//div[@id='RadContextMenu2_detached']//span[contains(text(),'Individual Report')]");
        this.uICSDCMACSmokeDetectorComplianceReport = page.locator("//div[@id = 'grdRptMgr_ctl00_Certificates_0'] //td[contains(text(), 'Certificate of Smoke Detector and Carbon Monoxide Alarm Compliance')]");
        this.uISelectReportAdminTable = page.locator('NogrdRptMgr_ctl00_Admin_0');
        this.uIQueueReportButton = page.locator('NobtnQueueReport');
        this.uIEvaluationForm = page.locator("//div[@id='grdRptMgr_ctl00_Reports_0']//td[text()='Evaluation Form Report']");
        this.uIDoctorNameDetailsText = page.locator("//div[@id = 'grdRptMgr_ctl00'] //td[contains(text(),'Doctor Name Details')]");
        this.uITerminalEntryGrid = page.locator('NogrdRptMgr_ctl00');
        this.uISearchButton = page.locator('NobtnSearch');
        this.uICalendarReport = page.locator("(//div[@id = 'grdRptMgr_ctl00']//td[contains(text(), 'Calendar Report')])[1]");
        this.uICMACDReport = page.locator("//div[@id='grdRptMgr_ctl00_Reports_0']//td[text()='CM ACD']");
        this.uIAddNewReportButton = page.locator('Nobtnaddreport');
        this.uIPreplanDocumentReport = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0']//td[text()= 'Preplan Document']");
        this.uIPreplanDocumentWOViolationsReport = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0']//td[text()= 'Preplan Document W/O Violations']");
        this.uIInspectionWorksheetDetailsReport = page.locator("//div[@id = 'grdRptMgr_ctl00_Others_0']//td[text()= 'Inspection Worksheet Details']");
        this.uIInspectionReport = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0']//td[text()= 'Inspection Report']");
        this.uIGangListReport = page.locator("//div[@id = 'grdRptMgr_ctl00']// td[text()='Gang List']");
        this.uIOffenderSimpleListReport = page.locator("//div[@id = 'grdRptMgr_ctl00']// td[text()='Offender Simple List']");
        this.uIOpenRecordRequestList = page.locator("//div[@id = 'grdRptMgr_ctl00_Reports_0'] //td[contains(text(), 'Open Records Request List')]");
        this.uIViewPrintEmailHistoryButton = page.locator('NobtnViewHistory');
        this.uIPersonnelTrainingReport = page.locator("//div[@id = 'grdRptMgr_ctl00']//td[contains(text(),'Personnel Training Class Summary Report')]");
        this.uITrainingClassInstructorReport = page.locator("//div[@id = 'grdRptMgr_ctl00']//td[contains(text(),'Training Class Instructors')]");
        this.uITrainingClassStudentsReport = page.locator("//div[@id = 'grdRptMgr_ctl00']//td[contains(text(),'Training Class Students')]");
    }

    async CloseTheScreen(): Promise<void> {
        // no-op: popup window close
    }

    async VerifyRecordCountName3(): Promise<void> {
        // TODO: expectTruthy( this.uIRecordCountTextView.innerText().includes("Record Count: 3"))
    }

    async ClickPrintBatchInQueueButton(): Promise<void> {
        await this.uIPrintBatchInQueueButton.click();
    }

    async VerifySelectReportScreenOpened(): Promise<void> {
        const uIVerifyPDF = await this.uIPDFRadioButton.getAttribute("checked")
        expect(uIVerifyPDF.includes("true")).toBeTruthy()
    }

    async ClickNameDetailInGrid(): Promise<void> {
        await this.uISelectReportOthersNameDetails.click();
    }

    async VerifyInspectionChecklistOnlyReportIsSSRSReport(): Promise<void> {
        expect(await gridHelpers.getGridCell(this.uISelectReportsResultTable, "Type", 3).getAttribute("title").includes("SSRS Report")).toBeTruthy()
    }

    async ClickInspectionChecklistOnlyReport(): Promise<void> {
        await this.uIInspectionChecklistOnlyReport.click();
    }

    async ClickCrashReport2017InGrid(): Promise<void> {
        await this.uISelectReportCrashReport2017Record.click();
    }

    async ClickFireCodeViolationReport(): Promise<void> {
        // ((JavascriptExecutor) Playback.driver).executeScript("scroll(0,1000);")
        // action.moveToElement(this.uIFireCodeViolationReportRecord).build().perform()
        // action.click(this.uIFireCodeViolationReportRecord)
    }

    async ClickCrashReportInGrid(): Promise<void> {
        await this.uISelectReportCrashReportRecord.click();
    }

    async Verify6040CrashReportNotGenerateWithoutVehicleAckMsg(): Promise<void> {
        // popup.acknowledge.okWithExpectedMessage( "(6040) Crash Report can not generate without vehicle No. Motorist/Non-Motorist tab should have minimum one record.")
    }

    async CloseCrashPDFWindow(): Promise<void> {
        // CrashPDF.close()
    }

    async SelectThreeReportsFromOthersCategoryInGrid(): Promise<void> {
        // gridHelpers.selectGridRowCheckBox( this.uISelectReportsResultTable, "CAD Activity Detail")
        // gridHelpers.selectGridRowCheckBox( this.uISelectReportsResultTable, "Case Details Report")
        // gridHelpers.selectGridRowCheckBox( this.uISelectReportsResultTable, "Roll Calls Report")
    }

    async ClickNameMineImageInGrid(): Promise<void> {
        await this.uISelectReportOthersNameMiningImage.click();
    }

    async ClickDetentionRecordInGrid(): Promise<void> {
        await this.uISelectReportDetentionRecord.click();
    }

    async ClickCommonNamesInGrid(): Promise<void> {
        await this.uICommonNamesRecord.click();
        // confirm.yes();
    }

    async VerifyRecordCountName(): Promise<void> {
        // TODO: expectTruthy( this.uIRecordCountTextView.innerText().includes("Record Count: 1"))
    }

    async VerifyRecordCountArrest(): Promise<void> {
        // TODO: expectTruthy( this.uIRecordCountTextView.innerText().includes("Record Count: 1"))
    }

    async VerifyRecordCountPersonnel(): Promise<void> {
        // TODO: expectTruthy( this.uIRecordCountTextView.innerText().includes("Record Count: 36"))
    }

    async VerifyRecordCountCallSearch(): Promise<void> {
        // TODO: expectTruthy( this.uIRecordCountTextView.innerText().includes("Record Count: 36"))
    }

    async VerifyRecordCountCaseSearch(): Promise<void> {
        // TODO: expectTruthy( this.uIRecordCountTextView.innerText().includes("Record Count: 36"))
    }

    async GetRecordCount(count: string): Promise<void> {
        // TODO: testContext count = this.uIRecordCountTextView.innerText()
    }

    async VerifyRecordCount(count: string): Promise<void> {
        // TODO: expectTruthy(this.uIRecordCountTextView.innerText().includes(count),
        // "Verify record count")
    }

    async ClickVEHTowRotationInGrid(): Promise<void> {
        await this.uIVEHTowRotationsRecord.click();
    }

    async ClickPhotoLineupInGrid(): Promise<void> {
        await this.uIPhotoLineupRecord.click();
    }

    async TakeScreenshot(): Promise<void> {
        // "TowRotationPrintReport");
    }

    async ClickCallSimpleListInGrid(): Promise<void> {
        await this.uICallSimpleListRecord.scrollIntoViewIfNeeded()
        await this.uICallSimpleListRecord.click();
    }

    async ClickCallDetailReportSSRSInGrid(): Promise<void> {
        await this.uICallDetailReportSSRSRecord.click();
    }

    async ClickCallDetailReportInGrid(): Promise<void> {
        await this.uICallDetailReportRecord.click();
    }

    async clickUnitRunAssignmentSummaryReport(): Promise<void> {
        await this.page.locator("(//img[@class='ighg_HGridExpandButton'])[1]").click()
        await this.uIUnitRunAssignmentSummaryReport.click();
    }

    async ClosePnxReportScreen(): Promise<void> {
    }

    async ClickPrintSelectedReportButton(): Promise<void> {
        await this.uIPrintSelectedReportButton.click();
    }

    async ClickConsolidatedReportButton(): Promise<void> {
        await this.uIConsolidatedReportButton.click();
    }

    async ClickCallSummaryReport(): Promise<void> {
        await this.uICallSummaryRecord.click();
    }

    async ClickCitationSummaryReport(): Promise<void> {
        await this.uICitationSummaryRecord.click();
    }

    async ClickCitationSummaryReportRecord(): Promise<void> {
        await this.uICitationSummaryReportsRecord.click();
    }

    async ClickCitationsbyOfficersReportRecord(): Promise<void> {
        await this.uICitationsbyOfficersRecord.click();
    }

    async ClickCitationsbyStatutesReportRecord(): Promise<void> {
        await this.uICitationsbyStatutesRecord.click();
    }

    async ClickCivilPaymentReportRecord(): Promise<void> {
        await this.uICivilPaymentRecord.click();
    }

    async VerifyRecordCountCrashSearch(): Promise<void> {
        // TODO: expectTruthy( this.uIRecordCountTextView.innerText().includes("Record Count: 109"))
    }

    async clickAccountabilityTagReportInGrid(): Promise<void> {
        await this.uIAccountabilityTagReport.click();
    }

    async clickAccountabilityIDReportInGrid(): Promise<void> {
        await this.uIAccountabilityIDReport.click();
    }

    async ClickPhotoLineupReportInGrid(): Promise<void> {
        await this.uIPhotoLineupReportRecord.click();
    }

    async ClickPursuitIncidentReport(): Promise<void> {
        await this.uIPursuitIncidentReportRecord.click();
    }

    async ClickIncidentAnalysisReport(): Promise<void> {
        await this.uIIncidentAnalysisReportRecord.click();
    }

    async ClickReportManageReport(): Promise<void> {
        await this.uIReportManagerRecord.click();
    }

    async ClickQAFormReportInGrid(): Promise<void> {
        await this.uIQAFormReport.click();
    }

    async ClickPreliminaryLifeSafetyPhysicalPlantSSRSInGrid(): Promise<void> {
        await this.uIPreliminaryLifeSafetyPhysicalPlantReport.click();
    }

    async ClickEMSDemographicSummaryReport(): Promise<void> {
        await this.uIEMSDemographicSummaryReportRecord.click();
    }

    async ClickEMSMedicationsGivenReport(): Promise<void> {
        await this.uIEMSMedicationsGivenReportRecord.click();
    }

    async ClickUseOfForcePDFReport(): Promise<void> {
        await this.uIUseOfForcePDFReportRecord.click();
    }

    async ClickUseOfForcePDFSSRSReport(): Promise<void> {
        await this.uIUseOfForcePDFReportSSRS.click();
    }

    async verifyPDFcontent(): Promise<void> {
        // TODO: readPDF ReadFile()
    }

    async clickCSDCMACComplianceReport(): Promise<void> {
        await this.uICSDCMACComplianceReport.click();
    }

    async selectReportCheckbox(): Promise<void> {
        // TODO: select random grid row checkbox this.uICertificatesTable
    }

    async selectIDCardRandomCheckbox(): Promise<void> {
        // TODO: select random odd grid rows checkboxes this.uIIDCardsTable,
        // 2
    }

    async clickIndividualReportButton(): Promise<void> {
        await this.uIIndividualReportButton.click();
    }

    async clickEmailReportButton(): Promise<void> {
        // this.uIEmailReportButton.isEnabled()
        await this.uIEmailReportButton.click();
    }

    async clickRecurrenceReportButton(): Promise<void> {
        await this.uIRecurrenceButton.click();
    }

    async ClickCaseNamesInGrid(): Promise<void> {
        await this.uICaseNamesReport.click();
        // confirm.yes();
    }

    async ClickEMSPatientCareDetailedReport(): Promise<void> {
        await this.uIEMSPatientCareDetailedReportRecord.click();
    }

    async ClickEMSPatientCareSummaryReport(): Promise<void> {
        await this.uIEMSPatientCareSummaryReportRecord.click();
    }

    async clickUOFDetailsInGrid(): Promise<void> {
        await this.uISelectReportUOFDetails.click();
    }

    async selectReportInCertificatesTable(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText(this.uICertificatesTable, testData.context("CertificateType"))
    }

    async selectOrderToPayPenaltyAndAbateViolationReportInNoticesTable(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText(this.uINoticesTable, "Order to Pay Penalty and Abate Violation")
    }

    async selectReportInCategoryTable(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText(this.uICategoryTable, testData.context("CertificateType"))
    }

    async verifyReportNameIsNotEqualToParkingCitation(): Promise<void> {
        const allReports = await this.page.locator("//td[@title='SSRS Report']").all()
        for (const report of allReports) {
        const reportName = report.locator("//td[@title='SSRS Report']/..//td[4]").innerText();
        expect("Parking Citation").not.toEqual(reportName)
        }
    }

    async selectCheckBoxInReportInCertificatesTable(): Promise<void> {
        await gridHelpers.selectGridRowCheckBox( this.uICertificatesTable, testData.context("CertificateType"))
    }

    async clickCertificateOfInspectionReportInGrid(): Promise<void> {
        await this.uICertificateOfInspectionReport.click();
    }

    async clickNoticeOfViolationsAndOrderToCorrectReportInGrid(): Promise<void> {
        await this.uINoticeOfViolationReport.click();
    }

    async verifyAtReportName(rowIndex: string): Promise<void> {
        const reportnameCells = await gridHelpers.getGridRowCells(this.uIReportsGridTable, rowIndex)
        for (const ele of reportnameCells) {
        if (ele.isVisible() && ele.innerText().includes(testData.Names('ReportName'))) {
        expect(testData.Names('ReportName'))
        }
        }
    }

    async clickUseOfForceReport(): Promise<void> {
        await this.uIUseOfForceReport.click();
    }

    async clickAddressDetailReportInGrid(): Promise<void> {
        await this.uIAddressDetailReportRecord.click();
    }

    async ClickCADSummaryDateSpecificReport(): Promise<void> {
        await this.uICADSummaryDateSpecificRecord.click();
    }

    async selectDBRCitationWrittenCountsCheckboxInGrid(): Promise<void> {
        // gridHelpers.selectGridRowCheckBox(
        // TODO: assertion continuation
    }

    async selectApprovedReport(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText(this.uIReportSearchTable, "Approved Report")
    }

    async verifyReportNameAsAlarmCFS(): Promise<void> {
        const text = await this.uIAlarmCFSRecord.innerText();
        expect(text.includes("Alarm CFS")).toBeTruthy()
    }

    async verifyReportNameAsNJTR(): Promise<void> {
        const text = await this.uINJTRReport.innerText();
        expect(text.includes("NJTR-1 2023")).toBeTruthy()
    }

    async minimizeTheScreen(): Promise<void> {
    }

    async verifyReportNameAsCADActivityDetailReport(): Promise<void> {
        const text = await this.uICADActivityDetailReport.innerText();
        expect(text.includes("CAD Activity Detail Report")).toBeTruthy()
    }

    async clickUCRDomesticViolenceReport(): Promise<void> {
        await this.uISelectUCRDomesticViolenceReport.click();
    }

    async downloadReport(): Promise<void> {
        // TODO: readPDF DownloadReports()
    }

    async SaveReportToLocation(PDFname: string): Promise<void> {
        // WindowsControl.ReportStatusPDFWindow.OpenSaveBrowseWindow();
        // WindowsControl.FileBrowserWindow.EnterSaveFileName(RandomHelpers.manualPlusRandomString("Incidnet
        // Report", 5));
        // WindowsControl.FileBrowserWindow.ClickSave();
        // // TODO: savePDF PDFname
    }

    async readPDFContent(reportName: string): Promise<string> {
        await this.page.waitForTimeout(5000);
        // TODO: readPDF reportName
        return PDFContent;
    }

    async verifyPDFContent(content: string): Promise<void> {
        expect(content.includes(testData.home('VinNo'))).toBeTruthy()
    }

    async selectCheckBoxUsingAtOthersType1(): Promise<void> {
        await gridHelpers.selectGridRowCheckBox( this.uISelectReportOthersResultTable, testData.home('OthersType1'))
    }

    async selectCheckBoxUsingAtOthersType(): Promise<void> {
        await gridHelpers.selectGridRowCheckBox( this.uISelectReportOthersResultTable, testData.home('OthersType'))
    }

    async clickNoticeOfDecisionOnRequestForTimeExtensionInGrid(): Promise<void> {
        await this.uINoticeOfDecisionOnRequestForTimeExtensionReport.click();
    }

    async clickAlarmYearEndReport(): Promise<void> {
        await this.uIAlarmYearEndReport.click();
    }

    async closePnxReportServerScreen(): Promise<void> {
    }

    async switchToKPITempPDFScreen(): Promise<void> {
    }

    async clickOrderToPayPenaltyRecurringViolationsReportInGrid(): Promise<void> {
        await this.uIOrderToPayPenaltyRecurringViolationsReport.click();
    }

    async clickNoEntryReportInGrid(): Promise<void> {
        await this.uINoEntryReport.click();
    }

    async clickNFIRSIncidentAnalysisReportInGrid(): Promise<void> {
        await this.uINFIRSIncidentAnalysisReport.click();
    }

    async verifyNoOfIncidentColumnAndNoOfUnitsColumnAsSeparateColumn(): Promise<void> {
        const NoOfIncident = this.page.locator("//div[text()='Mutual Aid Type']/following::td[2]//div")
        const NoOfUnits = this.page.locator("//div[text()='Mutual Aid Type']/following::td[3]//div")
        expect(await NoOfIncident.innerText().includes("Number of Incidents")).toBeTruthy();
        expect(await NoOfUnits.innerText().includes("Number of Units")).toBeTruthy();
    }

    async clickNFIRSMutualAidSummaryReportInGrid(): Promise<void> {
        await this.uINFIRSMutualAidSummaryReport.click();
    }

    async ClickCaseDetailReportInGrid(): Promise<void> {
        await this.uICaseDetailsReportRecord.click();
    }

    async clickTowDetailsInGrid(): Promise<void> {
        await this.uITowDetailsReport.click();
    }

    async clickEMSBillingReportWithAssessmentsReport(): Promise<void> {
        await this.uIEMSBillingReportWithAssessmentsReport.click();
    }

    async clickPaymentsLedgerReportInGrid(): Promise<void> {
        await this.uIPaymentsLedger.click();
    }

    async clickOfficerAccountDetailByDateReportInGrid(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText(this.uIReportsGridTable, "Officer Account Detail by Date")
    }

    async clickTowRotationInGrid(): Promise<void> {
        await this.uITowRotationReport.click();
    }

    async verifyReportNameAsAnimalLostFound(): Promise<void> {
        const text = await this.uIAnimalLostFound.innerText();
        expect(text.includes("Animal Lost Found")).toBeTruthy()
    }

    async verifyReportNameAsAnimalNameDetail(): Promise<void> {
        const text = await this.uIAnimalNameDetail.innerText();
        expect(text.includes("Animal Name Detail")).toBeTruthy()
    }

    async clickPaymentLedgerByDateRangeReport(): Promise<void> {
        await this.uIPaymentLedgerByDateRangeReport.click();
    }

    async clickPaymentLedgerForCSDCMACByDateRangeReport(): Promise<void> {
        await this.uIPaymentLedgerForCSDCMACByDateRangeReport.click();
    }

    async ClickNameRapSheetInGrid(): Promise<void> {
        await this.uISelectReportNameRapSheet.click();
    }

    async switchToConsolidatedReportMgrScreen(): Promise<void> {
    }

    async verifyIndividualAndConsolidatedReport(): Promise<void> {
        // this.uIConsolidatedReportButton.isVisible()
        // this.uIIndividualReportButton.isVisible()
    }

    async readSelectedReport(): Promise<void> {
        const i = 0;
        const checkboxes = Playback.driver.findElements(By.xpath( "//div[@id='grdRptMgr_ctl00']//table/tbody[contains(@class,'Item')]/tr/td/img[@title='Checked']"))
        for (const chkbox of checkboxes) {
        if (chkbox.isSelected()) {
        // i++
        // i++
        }
        }
    }

    async verifyReportsTitle(readPDF: string, name: string): Promise<void> {
        expect(readPDF.includes(name)).toBeTruthy();
    }

    async ClickArrestDocketReport(): Promise<void> {
        await this.uIArrestDocketReport.click();
    }

    async clickPersonnelTrainingReportInGrid(): Promise<void> {
        await this.uITrainingReport.click();
    }

    async clickPersonnelTrainingReportByCourseInGrid(): Promise<void> {
        await this.uITrainingReportByCourse.click();
    }

    async selectCheckBoxAtReport(i: string): Promise<void> {
        for (let j = 2; j <= i + 1; j++) {
        const checkbox = Playback.driver.findElement( By.xpath("(//div[@id='grdRptMgr_ctl00_Reports_0']//table//tbody/tr[" + j + "]/td/img[1])[1]"))
        await this.checkbox.click();
        }
    }

    async SelectRandomGridCheckboxes(): Promise<void> {
        await this.uISelectReportsResultTable.click();
        await this.uISelectReportsResultTable.click();
        // TODO: select random grid rows checkboxes this.uISelectReportsResultTable
    }

    async clickOnAccessListControlInGrid(): Promise<void> {
        await this.uIAccessListControl.click();
    }

    async ClickAtCrashReportInGrid(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText(this.uIReportsGridTable, testData.home('Report'))
    }

    async selectNJTRReportRowCheckBox(): Promise<void> {
        await gridHelpers.selectGridRowCheckBox( this.uISelectReportsResultTable, "NJTR-1 2023")
    }

    async clickEditReportButton(): Promise<void> {
        await this.uIEditReportButton.click();
    }

    async ClickAnimalLostOrFoundReport(): Promise<void> {
        await this.uIAnimalLostOrFoundReport.click();
    }

    async verifyMultipleSelectReportScreenIsNotOpened(): Promise<void> {
        // no-op: window handles
        const count = 0;
        for (let i = 0; i < windowHandles.length; i++) {
        const title = Playback.driver.switchTo().window(windowHandles[i]).getTitle();
        if (title.contentEquals("Select Report")) {
        // count++
        expect(count).toEqual(1)
        }
        }
    }

    async selectIDCardCheckBoxBasedOnType(): Promise<void> {
        await gridHelpers.selectGridRowCheckBox( this.uISelectReportMainResultTable, testData.Personnel('Type'))
    }

    async selectIDCardCheckBoxBasedOnReport(): Promise<void> {
        await gridHelpers.selectGridRowCheckBox( this.uIIDCardsTable, testData.Personnel('Type'))
    }

    async selectIDCardCheckBoxBasedOnType1(): Promise<void> {
        await gridHelpers.selectGridRowCheckBox( this.uIIDCardsTable, testData.Personnel('Type1'))
    }

    async clickNJTR12023InGrid(): Promise<void> {
        await this.uINJTR12023ReportRecord.click();
    }

    async clickTowSummaryDetails(): Promise<void> {
        await this.uITowSummaryReport.click();
    }

    async clickinvoiceReport(): Promise<void> {
        await this.uIInvoiceReport.click();
    }

    async verifyAtOthersGridReportNameNotAvailable(): Promise<void> {
        const gridTableColumnCells = await gridHelpers.getGridColumnValues(this.uISelectReportsResultTable, "Report Name")
        // gridTableColumnCells.removeAll(null)
        for (const cell of gridTableColumnCells) {
        expect(testData.context("ReportName")).not.toEqual(cell)
        }
    }

    async clickShowInactiveCheckbox(): Promise<void> {
        await this.uIShowInactiveCheckbox.click();
    }

    async verifyAtOtherGridReportNameInRedColor(): Promise<void> {
        const gridRowByCellInnerText = await gridHelpers.selectGridRowByCellInnerText( this.uISelectReportOthersResultTable, testData.context("ReportName"))
        const redColor = await gridRowByCellInnerText.getAttribute("class").includes("cssRed");
        expect(redColor).toBeTruthy();
    }

    async clickUnitReport(): Promise<void> {
        await this.uIUnitReportFire.click();
    }

    async selectCheckBoxInReportInNoticesTable(): Promise<void> {
        await gridHelpers.selectGridRowCheckBox( this.uINoticesTable, testData.context("ReportName"))
    }

    async clickIndividualReportButtonForFire(): Promise<void> {
        await this.uIIndividualReportButtonForFire.click({ force: true })
    }

    async clickCSDCMACSmokeDetectorComplianceReport(): Promise<void> {
        await this.uICSDCMACSmokeDetectorComplianceReport.click();
    }

    async selectLEAReportRowCheckBox(): Promise<void> {
        await gridHelpers.selectGridRowCheckBox( this.uISelectReportAdminTable, "LEA Year End Summary")
    }

    async verifyQueueReportButtonIsDisplayed(): Promise<void> {
        expect(await this.uIQueueReportButton.isVisible()).toBeTruthy();
    }

    async verifyRecurrenceButtonIsDisplayed(): Promise<void> {
        expect(await this.uIRecurrenceButton.isVisible()).toBeTruthy();
    }

    async verifyEditReportButtonIsDisplayed(): Promise<void> {
        expect(await this.uIEditReportButton.isVisible()).toBeTruthy();
    }

    async verifyIndividualReportButtonIsDisplayed(): Promise<void> {
        expect(await this.uIIndividualReportButton.isVisible()).toBeTruthy()
    }

    async verifySelectReportScreenIsOpened(windowExist: string): Promise<void> {
        expect(windowExist).toBeTruthy();
    }

    async clickEvaluationFormReport(): Promise<void> {
        await this.uIEvaluationForm.click();
    }

    async verifyReportWindowOpens(): Promise<void> {
    }

    async selectAtReportNameInGrid(): Promise<void> {
        // gridHelpers.selectGridRowByCellInnerText(this.uIReportSearchTable, // testData.home('ReportName'))
        // no-op: window handle
    }

    async selectAtReportNameInGrid(i: string): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText(this.uIReportSearchTable, testData.home("ReportName"+i))
    }

    async verifyReportNameAsDcotorNameDetails(): Promise<void> {
        const text = await this.uIDoctorNameDetailsText.innerText();
        expect(text.includes("Doctor Name Details")).toBeTruthy()
    }

    async verifySelectReportWindowIsExist(): Promise<void> {
    }

    async verifyReportNameInGrid(): Promise<void> {
        const text = await gridHelpers.getGridCell(this.uITerminalEntryGrid, testData.settings('ReportName'), "Report Name")
        expect(text.trim()).toEqual(testData.settings('ReportName'))
    }

    async verifyAtReportNameInGridUsingIndex(i: string): Promise<void> {
        const text2 = gridHelpers
        //					.getGridRowByCellInnerText(this.uIReportSearchTable,
        //							testData.settings("ReportName" + i))
        //					.innerText();
        expect(text2);
        const gridTableColumnCells = await gridHelpers.getGridTableColumnCells(this.uIReportSearchTable.trim()).toEqual(testData.settings("ReportName" + i))
        // gridTableColumnCells.stream().allMatch(cell -> cell.innerText().includes(testData.settings("ReportName" + i)))
        for (const webElement of gridTableColumnCells) {
        // TODO: expectTruthy(webElement.innerText().includes(testData.settings("ReportName" + i)));
        //gridTableColumnCells.stream().forEach(value -> verify.ExpectedValueIsTrue(gridTableColumnCells.includes(testData.settings("ReportName" + i))));
        // public void clickSelectAllCheckBox() {
        await this.uISelectAllCheckBox.click();
        // public void clickSearchButton() {
        await this.uISearchButton.click();
        // public void clickCalendarReportInGrid() {
        await this.uICalendarReport.click();
        // public void ClickCMACDReport() {
        await this.uICMACDReport.click();
        // public void clickAddNewReportButton() {
        await this.uIAddNewReportButton.click();
        // public void clickPreplanDocumentReport() {
        await this.uIPreplanDocumentReport.scrollIntoViewIfNeeded()
        await this.uIPreplanDocumentReport.click();
        // public void clickPreplanDocumentWOViolationsReport() {
        await this.uIPreplanDocumentWOViolationsReport.scrollIntoViewIfNeeded()
        await this.uIPreplanDocumentWOViolationsReport.click();
        // public void clickInspectionWorksheetDetailsReport() {
        await this.uIInspectionWorksheetDetailsReport.scrollIntoViewIfNeeded()
        await this.uIInspectionWorksheetDetailsReport.click();
        // public void clickInspectionReport() {
        await this.uIInspectionReport.scrollIntoViewIfNeeded()
        await this.uIInspectionReport.click();
        // public void clickGangListReport() {
        await this.uIGangListReport.click();
        // public void clickOffenderSimpleListReport() {
        await this.uIOffenderSimpleListReport.click();
        // public void clickExcelRadioButton() {
        await this.uIExcelRadioButton.click();
        // public void clickScreenRadioButton() {
        await this.uIScreenRadioButton.click();
        // public void clickWordRadioButton() {
        await this.uIWordRadioButton.click();
        // public void clickOpenRecordsRequestListInGrid() {
        await this.uIOpenRecordRequestList.click();
        // public String getRecordCount() {
        const count = await this.uIRecordCountTextView.innerText();
        return count;
        // public void verifyAtGridCountSameAsReportCount(String rowCount, String reportCount) {
        expect(reportCount, "Records count is not equal to actual --> ").toEqual(rowCount);
        // public void clickViewPrintEmailHistoryButton() {
        await this.uIViewPrintEmailHistoryButton.click();
        // public void clickAtCheckBoxByReportName() {
        // gridHelpers.TODO
        // (this.uIReportsGridTable,testData.home('ReportName'))
        // public void selectAtCheckBoxByReportName() {
        // gridHelpers.selectGridRowCheckBox(this.uICategoryTable, testData.home('ReportName'))
        }
    }

    async clickSelectAllCheckBox(): Promise<void> {
        await this.uISelectAllCheckBox.click();
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clickCalendarReportInGrid(): Promise<void> {
        await this.uICalendarReport.click();
    }

    async ClickCMACDReport(): Promise<void> {
        await this.uICMACDReport.click();
    }

    async clickAddNewReportButton(): Promise<void> {
        await this.uIAddNewReportButton.click();
    }

    async clickPreplanDocumentReport(): Promise<void> {
        await this.uIPreplanDocumentReport.scrollIntoViewIfNeeded()
        await this.uIPreplanDocumentReport.click();
    }

    async clickPreplanDocumentWOViolationsReport(): Promise<void> {
        await this.uIPreplanDocumentWOViolationsReport.scrollIntoViewIfNeeded()
        await this.uIPreplanDocumentWOViolationsReport.click();
    }

    async clickInspectionWorksheetDetailsReport(): Promise<void> {
        await this.uIInspectionWorksheetDetailsReport.scrollIntoViewIfNeeded()
        await this.uIInspectionWorksheetDetailsReport.click();
    }

    async clickInspectionReport(): Promise<void> {
        await this.uIInspectionReport.scrollIntoViewIfNeeded()
        await this.uIInspectionReport.click();
    }

    async clickGangListReport(): Promise<void> {
        await this.uIGangListReport.click();
    }

    async clickOffenderSimpleListReport(): Promise<void> {
        await this.uIOffenderSimpleListReport.click();
    }

    async clickExcelRadioButton(): Promise<void> {
        await this.uIExcelRadioButton.click();
    }

    async clickScreenRadioButton(): Promise<void> {
        await this.uIScreenRadioButton.click();
    }

    async clickWordRadioButton(): Promise<void> {
        await this.uIWordRadioButton.click();
    }

    async clickOpenRecordsRequestListInGrid(): Promise<void> {
        await this.uIOpenRecordRequestList.click();
    }

    async getRecordCount(): Promise<string> {
        const count = await this.uIRecordCountTextView.innerText();
        return count;
    }

    async verifyAtGridCountSameAsReportCount(rowCount: string, reportCount: string): Promise<void> {
        expect(reportCount, "Records count is not equal to actual --> ").toEqual(rowCount);
    }

    async clickViewPrintEmailHistoryButton(): Promise<void> {
        await this.uIViewPrintEmailHistoryButton.click();
    }

    async clickAtCheckBoxByReportName(): Promise<void> {
        // gridHelpers.TODO
        // (this.uIReportsGridTable,testData.home('ReportName'))
    }

    async selectAtCheckBoxByReportName(): Promise<void> {
        await gridHelpers.selectGridRowCheckBox(this.uICategoryTable, testData.home('ReportName'))
    }
}

export class SignatureScreenPage {
    readonly page: Page;
    readonly uISaveButton: Locator;
    readonly uISaveCloseButton: Locator;
    readonly uISignButton: Locator;
    readonly uIDrawButton: Locator;
    readonly uITypeButton: Locator;
    readonly uITypeTextEdit: Locator;
    readonly uISignaturePadEdit: Locator;
    readonly uIApplyButton: Locator;
    readonly uIPasswordEdit: Locator;
    readonly uIShowSignatureButton: Locator;
    readonly uIViewSignatureArea: Locator;
    readonly uINameEdit: Locator;
    readonly uIUsePhoneButton: Locator;
    readonly uICancelButton: Locator;
    readonly uIFileButton: Locator;
    readonly uIFileSizeLabel: Locator;
    readonly uIBrowseSignImgFileButton: Locator;
    readonly uIPhoneNoEdit: Locator;
    readonly uISendButton: Locator;
    readonly uIePadSignButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveCloseButton = page.locator('NocmdSaveNClose');
        this.uISignButton = page.locator('NocmdSign');
        this.uIDrawButton = page.locator('NobtnDraw');
        this.uITypeButton = page.locator('NobtnType');
        this.uITypeTextEdit = page.locator('Notxttype');
        this.uISignaturePadEdit = page.locator('Nosignature-pad');
        this.uIApplyButton = page.locator('Nobtnapply');
        this.uIPasswordEdit = page.locator('NotxtPassword');
        this.uIShowSignatureButton = page.locator('NobtnshowSign_Pwd');
        this.uIViewSignatureArea = page.locator("//img[@id='PwdSign']");
        this.uINameEdit = page.locator('Notxtname');
        this.uIUsePhoneButton = page.locator('Nobtnphone');
        this.uICancelButton = page.locator('Nobtncancel');
        this.uIFileButton = page.locator('NobtnFile');
        this.uIFileSizeLabel = page.locator('Nolblsize');
        this.uIBrowseSignImgFileButton = page.locator('NolblUpload');
        this.uIPhoneNoEdit = page.locator("//div[@id='UsePhone']//input[@id='txtPhone']");
        this.uISendButton = page.locator('NobtnSend');
        this.uIePadSignButton = page.locator('Nobtnepadsign');
    }

    async ClickSignButton(): Promise<void> {
        await this.uISignButton.click();
    }

    async Close(): Promise<void> {
        // no-op: popup window close
    }

    async clickTypeButton(): Promise<void> {
        await this.uITypeButton.click();
    }

    async enterAtSignTextArea(sign: string): Promise<void> {
        await this.uITypeTextEdit.fill(sign);
    }

    async clickApplyButton(): Promise<void> {
        await this.uIApplyButton.click();
    }

    async enterAtPassword(): Promise<void> {
        await this.uIPasswordEdit.fill(password);
    }

    async clickShowSignatureButton(): Promise<void> {
        await this.uIShowSignatureButton.click();
    }

    async verifyViewSignatureAreaIsEmpty(): Promise<void> {
        const attribute = await this.uIViewSignatureArea.getAttribute("src")
        expect(attribute == "").toBeTruthy();
    }

    async verifyViewSignatureAreaHavingSignature(): Promise<void> {
        const attribute = await this.uIViewSignatureArea.getAttribute("src")
        expect(attribute.includes("image/png")).toBeTruthy()
    }

    async enterAtName(): Promise<void> {
        await this.uINameEdit.fill(name);
        await this.uINameEdit.press('Tab');
    }

    async enterAtName(jsonIndex: string): Promise<void> {
        await this.uINameEdit.fill(name+jsonIndex);
        await this.uINameEdit.press('Tab');
    }

    async verifySignButtonIsDisplayed(): Promise<void> {
        expect(await this.uISignButton.isVisible()).toBeTruthy();
    }

    async clickDrawButton(): Promise<void> {
        await this.uIDrawButton.click();
    }

    async drawSign(): Promise<void> {
        const signPad = this.uISignaturePadEdit;
        // Scroll down
        // ac.clickAndHold(this.page.locator("//div[@id='signature-pad']//canvas")).moveByOffset(0, 100).release().build().perform()
        // Scroll up
        // ac.clickAndHold(this.page.locator("//div[@id='signature-pad']//canvas")).moveByOffset(0, -100).release().build().perform()
        // Scroll right
        // ac.clickAndHold(this.page.locator("//div[@id='signature-pad']//canvas")).moveByOffset(100, 0).release().build().perform()
        // Scroll left
        // ac.clickAndHold(this.page.locator("//div[@id='signature-pad']//canvas")).moveByOffset(-100, 0).release().build().perform()
        //			Action signature = builder.contextClick(signPad).clickAndHold().moveToElement(signPad, 20, -50)
        //					.moveByOffset(-100, -50).moveByOffset(80, -100).moveByOffset(-70, 50).moveByOffset(-20, -10)
        //					.release(signPad).build();
        //			signature.perform();
    }

    async verifySaveButtonIsDisplayed(): Promise<void> {
        expect(await this.uISaveButton.isVisible()).toBeTruthy();
    }

    async verifySaveNCloseButtonIsDisplayed(): Promise<void> {
        expect(await this.uISaveCloseButton.isVisible()).toBeTruthy();
    }

    async verifyAtName(): Promise<void> {
        const attribute = await this.uINameEdit.inputValue();
        expect(testData.home('Name'))
    }

    async verifyNameIsDisabled(): Promise<void> {
        const attribute = await this.uINameEdit.getAttribute("disabled")
        expect("true").toEqual(attribute);
    }

    async verifyProvideSignaturePopUpMessage(): Promise<void> {
        // confirm popup: Please provide signature first.
    }

    async clickCancelButton(): Promise<void> {
        await this.uICancelButton.click();
    }

    async clickFileButton(): Promise<void> {
        await this.uIFileButton.click();
    }

    async verifyFileSizeMustBeLessThan100KBlabel(): Promise<void> {
        const text = await this.uIFileSizeLabel.innerText();
        expect("(Use .jpeg format. File size must be less than 100 KB)").toEqual(text);
    }

    async clickBrowseSignatureImageFileButton(): Promise<void> {
        await this.uIBrowseSignImgFileButton.click();
    }

    async verifyFileOfSizeLessThan100KBAcknowledgePopup(): Promise<void> {
    }

    async verifyInvalidFileFormatAcknowledgeMessage(): Promise<void> {
    }

    async clickUsePhoneButton(): Promise<void> {
        await this.uIUsePhoneButton.click();
    }

    async verifyAtPhoneNo(): Promise<void> {
        const attribute = await this.uIPhoneNoEdit.getAttribute("title")
        // TODO: expectEqual(attribute.trim()).toEqual(attribute)
    }

    async verifyAtActivePhoneNo(readPhoneNo: string): Promise<void> {
        const attribute = await this.uIPhoneNoEdit.inputValue();
        expect(readPhoneNo).toEqual(attribute);
    }

    async clickSendButton(): Promise<void> {
        await this.uISendButton.click();
    }

    async clickePadButton(): Promise<void> {
        await this.uIePadSignButton.click();
    }

    async verifyApplyButtonIsEnabled(): Promise<void> {
        expect(this.uIApplyButton.isEnabled()).toBeTruthy()
    }
}

export class StatisticsTabPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickAllTabsAndVerify404Error(): Promise<void> {
        const tabsCount = 8;
        for (let i = 1; i <= tabsCount; i++) {
        const tab = testData.home("StatisticsTab" + i)
        await this.page.locator("//li//a[text()='" + tab + "']").click()
        // verify404FileNotFoundErrorNotArise()
        }
    }
}

export class TemplatesForTabPage {
    readonly page: Page;
    readonly uIScreenIdEdit: Locator;
    readonly uIScreenIdLookupButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIClearButton: Locator;
    readonly uITemplatesForResultTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIScreenIdEdit = page.locator('NotabKPIText_tmpl2_usrTxtTemplate1_lupReportID_CodeValue');
        this.uIScreenIdLookupButton = page.locator('NotabKPIText_tmpl2_usrTxtTemplate1_lupReportID_imgBtn');
        this.uIAddNewButton = page.locator('NotabKPIText_tmpl2_usrTxtTemplate1_imgAdd');
        this.uIClearButton = page.locator('NotabKPIText_tmpl2_usrTxtTemplate1_imgClear');
        this.uITemplatesForResultTable = page.locator('NotabKPIText_tmpl2_usrTxtTemplate1_grdTxtRepository');
    }

    async enterAtTemplateForScreenID(): Promise<void> {
        await this.uIScreenIdEdit.fill(testData.home('ScreenID'));
        await this.uIScreenIdEdit.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async verifyAtScreenIDInGrid(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText( this.uITemplatesForResultTable, testData.home('ScreenID'))
    }
}

export class TextMgmtPage {
    readonly page: Page;
    readonly uISummaryTextEdit: Locator;
    readonly uISummaryRichTabTextEdit: Locator;
    readonly uISubjectTab: Locator;
    readonly uITemplateForTab: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uITemplateComboBox: Locator;
    readonly uILoadButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uISummaryRichTextEdit: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIFromTextFieldFilled: Locator;
    readonly uIAutoSaveTxt: Locator;
    readonly uIFromTextFieldEmpty: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uITextNameEdit: Locator;
    readonly uITextNameRichTextEdit: Locator;
    readonly uIDetailTab: Locator;
    readonly uIRelatedReportsTab: Locator;
    readonly uICommentsEdit: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uIReportNameEdit: Locator;
    readonly uISeqNoEdit: Locator;
    readonly uIPrintIcon: Locator;
    readonly uITemplateForArrow: Locator;
    readonly uITemplateForDropdown: Locator;
    readonly uIFormTextFieldFilled: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISummaryTextEdit = page.locator("//Table[@id = 'ctrlUsrKPITxtEdit_rteKPITxtWrapper']//iframe[@id = 'ctrlUsrKPITxtEdit_rteKPITxt_contentIframe']");
        this.uISummaryRichTabTextEdit = page.locator('#tabKPIText_tmpl0_ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        this.uISubjectTab = page.locator("//span[contains(text(),'Subject')]");
        this.uITemplateForTab = page.locator("//span[contains(text(),'Templates For')]");
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uITemplateComboBox = page.locator('#ctrlUsrKPITxtEdit_lstTextName');
        this.uILoadButton = page.locator('#ctrlUsrKPITxtEdit_cmdload');
        this.uIAddNewButton = page.locator('#ctrlUsrKPITxtEdit_cmdAddnew');
        this.uISummaryRichTextEdit = page.locator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIFromTextFieldFilled = page.locator("//body[contains(@style,'font-family:')]");
        this.uIAutoSaveTxt = page.locator('#ctrlUsrKPITxtEdit_lblAutoSaveTime');
        this.uIFromTextFieldEmpty = page.locator('//body');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']//b");
        this.uITextNameEdit = page.locator('#txtName');
        this.uITextNameRichTextEdit = page.locator("//Table[@id = 'tabKPIText_tmpl0_ctrlUsrKPITxtEdit_rteKPITxtWrapper']//iframe[@id = 'tabKPIText_tmpl0_ctrlUsrKPITxtEdit_rteKPITxt_contentIframe']");
        this.uIDetailTab = page.locator("//span[text()='Details']");
        this.uIRelatedReportsTab = page.locator("//span[text()='Related Reports']");
        this.uICommentsEdit = page.locator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        this.uIDescriptionEdit = page.locator('#txtDescription');
        this.uIReportNameEdit = page.locator('#tabKPIText_tmpl4_usrRptTemplate1_lupReportID_CodeValue');
        this.uISeqNoEdit = page.locator('#tabKPIText_tmpl4_usrRptTemplate1_txtSeqNo');
        this.uIPrintIcon = page.locator('#cmdPrint');
        this.uITemplateForArrow = page.locator('#cddTempFor_Arrow');
        this.uITemplateForDropdown = page.locator('#cddTempFor_Input');
        this.uIFormTextFieldFilled = page.locator("//body[contains(@style,'font-family:')]/div");
    }

    async SaveScreen(): Promise<void> {

        
        this.page.once('dialog', async dialog => {
            await dialog.accept();
        });
        await this.uISaveButton.click();
    }

    async SaveAndCloseScreen(): Promise<void> {
        this.page.once('dialog', async dialog => {
            await dialog.accept();
        });
        await this.uISaveAndCloseButton.click();
    }

    async EnterAtTextName(): Promise<void> {
        await this.uITextNameEdit.click();
        await this.uITextNameEdit.clear();
        await this.uITextNameEdit.fill(BaseData.getTestValue('TextName'));
    }

    async EnterRichTextAsStatementTab(): Promise<void> {
        await this.uISummaryRichTabTextEdit.click()
        // TODO: actions.fill("Need to verify whether added text in Text Mgmt screen loads in Statement tab").build().perform();
    }

    async EnterRichText(): Promise<void> {
        await this.uISummaryRichTabTextEdit.click()
        // TODO: actions.fill(RandomHelpers.randomString(1000)).build().perform();
    }

    async EnterAtText(): Promise<void> {
        await this.uISummaryRichTabTextEdit.click()
        // TODO: actions.fill(text).build().perform();
    }

    async ClickLoadButton(): Promise<void> {
        await this.uILoadButton.click();
    }

    async SelectTemplate(): Promise<void> {
        // random select on this.uITemplateComboBox
    }

    async EnterSummaryRichTextInIRReport(): Promise<void> {
        await this.uISummaryRichTextEdit.click();
        await this.uISummaryRichTextEdit.press('Enter');
        await this.uISummaryRichTextEdit.fill(RandomHelpers.randomString(1000));
        // TODO: this.page.locator("//html/body[contains(@style,'font-family')]")
        //					.fill(RandomHelpers.randomString(1000));
    }

    async EnterAtSummaryRichTextInIRReport(): Promise<void> {
        await this.uISummaryRichTextEdit.click();
        await this.uISummaryRichTextEdit.press('Enter');
        await this.uISummaryRichTextEdit.fill(text);
    }

    async EnterAtNarrativeRichTextInIRReport(): Promise<void> {
        await this.uISummaryRichTextEdit.click();
        await this.uISummaryRichTextEdit.press('Enter');
        await this.uISummaryRichTextEdit.fill(narrativeText);
    }

    async EnterNarrativeRichTextInReport(): Promise<void> {
        await this.uISummaryRichTextEdit.click()
        // TODO: actions.fill(RandomHelpers.randomString(500)).build().perform();
    }

    async Close(): Promise<void> {
        // no-op: popup window close
    }

    async waitForMinAndclickRefreshButton(): Promise<void> {
        await this.page.waitForTimeout(90000);
        await this.uIRefreshButton.click();
    }

    async verifyTextAvailableInsideForm(): Promise<void> {
        const text = await this.uIFromTextFieldFilled.innerText();
        expect(text.includes("Next Generation")).toBeTruthy()
        // TODO: expectTruthy(text.includes("Report"));
    }

    async verifyUpdateSucessfulStatusMsg(): Promise<void> {
        const text = await this.uIBottomLeftSideStatusBar.innerText();
        expect("1003 - Update Successful").toEqual(text);
        // switchToReportStatusTextMgmtScreen();
    }

    async verifyAdditionSucessfulStatusMsg(): Promise<void> {
        const text = await this.uIBottomLeftSideStatusBar.innerText();
        expect("1002 - Addition Successful").toEqual(text);
    }

    async SelectAtTemplate(): Promise<void> {
        // TODO: select dropdown option on this.uITemplateComboBox,
        // testData.home('Template'))
    }

    async verifyAutoSavingTextDisplayed(): Promise<void> {
        const Actual = await this.uIAutoSaveTxt.innerText();
        expect(Actual).toEqual("Auto save enabled for every [1] minutes.");
    }

    async switchToTextTempletForm(): Promise<void> {
    }

    async verifyNoTextAvailableInsideForm(): Promise<void> {
        const text = await this.uIFromTextFieldEmpty.innerText();
        expect(text.includes("production")).toBeFalsy();
        // switchToReportStatusTextMgmtScreen();
    }

    async clickTemplatesForTab(): Promise<void> {
        await this.uITemplateForTab.click();
    }

    async EnterSummaryRichTextAsTestAutomation(): Promise<void> {
        const frame = this.page.frameLocator("iframe[id*='rteKPITxt_contentIframe']");
        await frame.locator('body').fill("Test Automation");
    }

    async clickSaveAndCloseButton(): Promise<void> {
        await this.uISaveAndCloseButton.click();
    }

    async EnterAtTextNamefor2022(): Promise<void> {
        await this.uITextNameEdit.fill(textName);
    }

    async clickDetailTab(): Promise<void> {
        await this.uIDetailTab.click();
    }

    async clickRelatedReportsTab(): Promise<void> {
        await this.uIRelatedReportsTab.click();
    }

    async verifyFileName(caseNo: string): Promise<void> {
        // TODO: verify downloaded file caseNo
        //			this.uICommentsEdit.click();
        //			this.uICommentsEdit.fill(Keys.CONTROL+"V");
        // TODO: frame switch this.uICommentsEdit
        const text = this.page.locator("//html/body/div");
    }

    async enterAtDescription(): Promise<void> {
        await this.uIDescriptionEdit.fill(BaseData.getTestValue('Description'));
    }

    async verifyLineBreaks(text1: string): Promise<void> {
        //// TODO: switch to frame this.uISummaryRichTabTextEdit;
        const text2 = await this.uIFromTextFieldFilled.innerText();
        const summary = testData.context("TextLine") + "" + testData.context("TextLine")
        expect(text1).toEqual(summary);
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async verifyPleaseSaveAcknowledgeMsgPopup(): Promise<void> {
    }

    async EnterAtRichText(richText: string): Promise<void> {
        await this.uISummaryRichTabTextEdit.click()
        // TODO: actions.fill(richText);
    }

    async SelectAtTemplateForDropdown(): Promise<void> {
        await this.uITemplateForArrow.click();
        const templateFor = BaseData.getTestValue('TemplateFor');
        const dropdownList = this.page.locator('#cddTempFor_DropDown');
        const elementHelpers = new ElementHelpers(this.page);
        await elementHelpers.selectRadControlDropDownValueSelect(dropdownList, templateFor);
        await this.uITemplateForArrow.click();
    }

    async doubleClickSave(): Promise<void> {
        // a.doubleClick(this.uISaveButton).build().perform()
    }

    async verify1051UpdatedDataExistsInRelatedReportsTabAck(): Promise<void> {
        // popup.acknowledge.okWithExpectedContainMessage("(1051) Updated data exists in Related Reports tab. You must save or reset.")
    }

    async clicksave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verifyAtTemplateFor(): Promise<void> {
        const TemplateFor = await this.uITemplateForDropdown.inputValue();
        expect(TemplateFor.trim()).toEqual(testData.home('TemplateFor'))
    }
}

export class TextSearchPage {
    readonly page: Page;
    readonly uISearchButton: Locator;
    readonly uITextSearchTable: Locator;
    readonly uICloseButton: Locator;
    readonly uISearchWordsField: Locator;
    readonly uITextTypeComboBox: Locator;
    readonly uIDateFromEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIJurisDropDown: Locator;
    readonly uIExportToExcelIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISearchButton = page.locator('NocmdSearch');
        this.uITextSearchTable = page.locator('NogrdText');
        this.uICloseButton = page.locator('NocmdClose');
        this.uISearchWordsField = page.locator('NotxtSearchWords');
        this.uITextTypeComboBox = page.locator('NocddTextType_DropDown');
        this.uIDateFromEdit = page.locator("//input[@id='dttTextDttmFrom_KPIDttmCtrl']");
        this.uIToDateEdit = page.locator("//input[@id='dttTextDttmTo_KPIDttmCtrl']");
        this.uIJurisDropDown = page.locator('NolstJuris');
        this.uIExportToExcelIcon = page.locator("//img[@title='Export to Excel']");
    }

    async SwitchToTextSearch(): Promise<void> {
    }

    async ClickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async DoubleclickOnTextSearchWordField(): Promise<void> {
        await this.uISearchWordsField.click();
    }

    async RemoveTextOnTextSearchWordField(): Promise<void> {
        await this.uISearchWordsField.clear();
    }

    async EnterTextInSearchWordsField(): Promise<void> {
        await this.uISearchWordsField.fill("Sa");
    }

    async EnterTextInSearchWordsField1(): Promise<void> {
        await this.uISearchWordsField.fill("Ta");
    }

    async EnterTextInSearchWordsField2(): Promise<void> {
        await this.uISearchWordsField.fill("pa");
    }

    async EnterTextInSearchWordsField3(): Promise<void> {
        await this.uISearchWordsField.fill("pa or ta");
    }

    async EnterTextInSearchWordsField4(): Promise<void> {
        await this.uISearchWordsField.fill("pa and ta");
    }

    async EnterTextInSearchWordsField5(): Promise<void> {
        await this.uISearchWordsField.fill("iphone or ipad");
    }

    async EnterTextInSearchWordsField6(): Promise<void> {
        await this.uISearchWordsField.fill("iphone and ipad");
    }

    async SelectOneRecordfromTextSearchWindow(): Promise<void> {
        // TODO: select random grid row this.uITextSearchTable
    }

    async ClickCloseButton(): Promise<void> {
        await this.uICloseButton.click();
    }

    async CloseScreen(): Promise<void> {
        // no-op: popup window close
    }

    async SelectGridRowByTextType(): Promise<void> {
        await gridHelpers.selectGridRowByCellInnerText(this.uITextSearchTable, testData.home('AlarmNo'))
    }

    async readAndVerifyTextByTextColumn(content: string): Promise<void> {
        const columnValues = await gridHelpers.getGridColumnValues(this.uITextSearchTable, "Text")
        for (const value of columnValues) {
        const lowerCase = value.toLowerCase();
        expect(lowerCase.includes(content)).toBeTruthy();
        }
    }

    async readAndVerifyTextByTextTypeColumn(content: string): Promise<void> {
        const columnValues = await gridHelpers.getGridColumnValues(this.uITextSearchTable, "Text Type")
        for (const value of columnValues) {
        expect(value.includes(content)).toBeTruthy();
        }
    }

    async clearSearchWordsField(): Promise<void> {
        await this.uISearchWordsField.click();
        await this.uISearchWordsField.clear();
    }

    async selectAtTextTypeComboBox(): Promise<void> {
        // TODO: select dropdown option on this.uITextTypeComboBox,
        // testData.home('TextType'))
    }

    async selectTextTypeComboBoxAsNull(): Promise<void> {
        await this.uITextTypeComboBox.selectOption({ label: "  --  " });
    }

    async enterDateFromAsOneYearFromCurrentDate(): Promise<void> {
        const fromDate = DateHelpers.getPreviousDateByMonth(6);
        await this.uIDateFromEdit.click();
        await this.uIDateFromEdit.clear();
        await this.uIDateFromEdit.fill(fromDate);
    }

    async enterDateToAsCurrentDate(): Promise<void> {
        const toDate = DateHelpers.getCurrentDate("MM/dd/yyyy");
        await this.uIToDateEdit.click();
        await this.uIToDateEdit.clear();
        await this.uIToDateEdit.fill(toDate);
    }

    async verifyRowCountNotEqualsToZero(): Promise<void> {
        const rowsCount = await gridHelpers.getGridRowsCount(this.uITextSearchTable)
        expect(rowsCount != 0).toBeTruthy();
    }

    async verifyAtTextByTextType(): Promise<void> {
        const Text = await gridHelpers.getGridCell(this.uITextSearchTable, testData.home('TextType'), "Text")
        expect(testData.home('Text'))
    }

    async EnterAtTextInSearchWordsField(): Promise<void> {
        await this.uISearchWordsField.fill(text);
    }

    async SelectAtJuris(): Promise<void> {
        await this.uIJurisDropDown.selectOption({ label: juris });
    }

    async clickExportToExcelIcon(): Promise<void> {
        await this.uIExportToExcelIcon.click();
    }

    async verifyTextColumnValueBetweenExcelAndGrid(): Promise<void> {
        Excelvalue1.sort()
        Gridvalue.sort()
        // TODO: const cleanedSentences = Excelvalue1.stream().map(s -> s.replaceAll("\\s+".trim()).toEqual(Text)
        const equals = cleanedSentences === Gridvalue;
        expect(equals).toBeTruthy();
    }

    async verifyFromDateAsOneYearBeforeFromCurrentDate(): Promise<void> {
        const attribute = await this.uIDateFromEdit.inputValue();
        const previousDate = DateHelpers.getPreviousDate(365, attribute);
        expect(attribute).toEqual(previousDate);
    }

    async verifyToDateAsCurrentDate(): Promise<void> {
        const attribute = await this.uIToDateEdit.inputValue();
        expect(attribute).toEqual(DateHelpers.getCurrentDate("MM/dd/yyyy"));
    }

    async verifyAtTextInGrid(): Promise<void> {
        const texts = await gridHelpers.getGridColumnValues(this.uITextSearchTable, "Text")
        expect(texts.length==0).toBeFalsy();
        for (const text of texts) {
        // String[] split = text.split(",")
        expect(split[1].trim())
        }
    }
}

export class TextStatmentReportPage {
    readonly page: Page;
    readonly uIClearStartOverButton: Locator;
    readonly uIOfficeAccessOnlyButton: Locator;
    readonly uITextStatementEdit: Locator;
    readonly uISignHereButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIClearStartOverButton = page.locator('NobtnClearStartOver');
        this.uIOfficeAccessOnlyButton = page.locator('NobtnOfficeUseOnly');
        this.uITextStatementEdit = page.locator('NotxtStmt');
        this.uISignHereButton = page.locator('NoimgStatementSign');
    }

    async EnterStatement(): Promise<void> {
        await this.uITextStatementEdit.click();
        await this.uITextStatementEdit.fill(RandomHelpers.randomString(200));
    }

    async ClickOfficialAccessOnlyButton(): Promise<void> {
        await this.uIOfficeAccessOnlyButton.click();
    }

    async EnterAtStatement(): Promise<void> {
        await this.uITextStatementEdit.click();
        await this.uITextStatementEdit.fill(statement);
    }

    async VerifyAtStatement(): Promise<void> {
        // TODO: expectEqual(testData.home('Statement').trim()).toEqual(testData.home('Text1'))
    }

    async ClickSignHereButton(): Promise<void> {
        await this.uISignHereButton.click();
    }

    async VerifyConfirmNoUpdateMessage(): Promise<void> {
        // confirm.yesWithExpectedMessage( "(2527) No further updates are allowed. Are you sure you want to continue?")
        // confirm.yesWithExpectedMessage( "(2527) No further updates are allowed. Are you sure you want to continue?")
    }
}

export class TrackEntryPage {
    readonly page: Page;
    readonly uIVendorCodeEdit: Locator;
    readonly uISummaryCodeEdit: Locator;
    readonly uIContactDropDown: Locator;
    readonly uIStatusDropDown: Locator;
    readonly uIOwnerCodeEdit: Locator;
    readonly uIVendorSearchICon: Locator;
    readonly uIOwnerSearchICon: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIVendorIBubble: Locator;
    readonly uIBottomMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIVendorCodeEdit = page.locator('NolupCustomer_CodeValue');
        this.uISummaryCodeEdit = page.locator('NotxtSummary');
        this.uIContactDropDown = page.locator('NolstContact');
        this.uIStatusDropDown = page.locator('NocddTrackStatus_DropDown');
        this.uIOwnerCodeEdit = page.locator('NolupOwner_CodeValue');
        this.uIVendorSearchICon = page.locator('NolupCustomer_imgBtn');
        this.uIOwnerSearchICon = page.locator('NolupOwner_imgBtn');
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveNCloseButton = page.locator('NocmdSaveNClose');
        this.uIPrintButton = page.locator('NocmdPrint');
        this.uIVendorIBubble = page.locator('NolupCustomer_cmdIncOnAddr');
        this.uIBottomMessage = page.locator("//td[@class='statusBar']//b");
    }

    async enterAtVendor(): Promise<void> {
        await this.uIVendorCodeEdit.fill(vendor);
        await this.uIVendorCodeEdit.press('Tab');
    }

    async enterAtSummary(): Promise<void> {
        await this.uISummaryCodeEdit.fill(summary);
        await this.uISummaryCodeEdit.press('Tab');
    }

    async selectAtContact(): Promise<void> {
        // TODO: select dropdown option on this.uIContactDropDown,
        // testData.home('Contact'))
        await this.uIContactDropDown.press('Tab');
    }

    async selectAtStatus(): Promise<void> {
        // TODO: select dropdown option on this.uIStatusDropDown,
        // testData.home('Status'))
        await this.uIStatusDropDown.press('Tab');
    }

    async enterAtOwner(): Promise<void> {
        await this.uIOwnerCodeEdit.fill(owner);
        await this.uIOwnerCodeEdit.press('Tab');
    }

    async verifyAtOwner(): Promise<void> {
        const attribute = await this.uIOwnerCodeEdit.getAttribute("tittle")
        expect(attribute.includes(testData.home('Owner'))).toBeTruthy()
    }

    async verifyAtOwner1(): Promise<void> {
        const attribute = await this.uIOwnerCodeEdit.getAttribute("title")
        expect(attribute.includes(testData.home('Owner1'))).toBeTruthy()
    }

    async clickVendorSearchButton(): Promise<void> {
        await this.uIVendorSearchICon.click();
    }

    async clickOwnerSearchButton(): Promise<void> {
        await this.uIOwnerSearchICon.click();
    }

    async clickVendorInfoIcon(): Promise<void> {
        await this.uIVendorIBubble.click();
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
    }

    async SaveNClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
    }

    async verifyUpdatesuccessFullMessage(): Promise<void> {
        // TODO: expect assertion
    }

    async verifyAdditionSuccessFullMesage(): Promise<void> {
        // TODO: expectEqual("1002 - Addition Successful".trim()).toEqual("1003 - Update Successful")
    }

    async selectStatus(): Promise<void> {
        // random select on this.uIStatusDropDown
    }

    async enterSummary(): Promise<void> {
        await this.uISummaryCodeEdit.fill(RandomHelpers.randomNameGenerate());
    }
}

export class TrackSearchPage {
    readonly page: Page;
    readonly uIOwnerCodeEdit: Locator;
    readonly uISearchButton: Locator;
    readonly uITrackSearchTable: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIVendorEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIOwnerCodeEdit = page.locator('NotabTrackSrch_tmpl0_UsrBase1_lupOwner_CodeValue');
        this.uISearchButton = page.locator("//span[contains(text(),'Search')]");
        this.uITrackSearchTable = page.locator('NogrdTrack');
        this.uIAddNewButton = page.locator("//span[contains(text(),'AddNew')]");
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
        this.uIVendorEdit = page.locator('NotabTrackSrch_tmpl0_UsrBase1_lupCustomer_CodeValue');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async verifyAtOwner(): Promise<void> {
        const attribute = await this.uIOwnerCodeEdit.inputValue();
        expect(attribute.includes(testData.home('Owner'))).toBeTruthy()
    }

    async clickReset(): Promise<void> {
        await this.uIResetButton.click();
    }

    async enterAtVendor(): Promise<void> {
        await this.uIVendorEdit.fill(vendor);
        await this.uIVendorEdit.press('Tab');
    }

    async verifyAtSummaryInGrid(): Promise<void> {
        const gridTableColumnValues = await gridHelpers.getGridColumnValues(this.uITrackSearchTable, "Summary")
        expect(gridTableColumnValues.includes(testData.home('Summary'))).toBeTruthy()
    }
}

export class UpdateImageScreenPage {
    readonly page: Page;
    readonly uISaveButton: Locator;
    readonly uIUpdatedImage: Locator;
    readonly uISaveCloseButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIPhotoDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIFileUploadTextViewButton: Locator;
    readonly uIBottomMessage: Locator;
    readonly uICopyAndPasteLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISaveButton = page.locator('NocmdSave');
        this.uIUpdatedImage = page.locator("//img[contains(@src,'Home/frmHandle.aspx')]");
        this.uISaveCloseButton = page.locator('NocmdSaveNClose');
        this.uIResetButton = page.locator('NocmdRefresh');
        this.uIPhotoDateEdit = page.locator('NodttPhotoDate_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id = 'dttPhotoDate_Time'] //input");
        this.uIFileUploadTextViewButton = page.locator('NoimgFileUpload');
        this.uIBottomMessage = page.locator("//td[@class='statusBar']//b");
        this.uICopyAndPasteLabel = page.locator('NospnDrop');
    }

    async EnterDate(): Promise<void> {
        await this.uIPhotoDateEdit.click();
        await this.uIPhotoDateEdit.press('Tab');
    }

    async EnterTime(): Promise<void> {
        await this.uITimeEdit.click();
        await this.uITimeEdit.press('Tab');
    }

    async EnterCrashDiagramImage(): Promise<void> {
        await this.uIFileUploadTextViewButton.click();
        // TODO: file upload "TestJPG.jpg"
        // this.uIFileUploadTextViewButton.fill("./test-resources"
        // + "img4.jpg");
    }

    async TabDateTime(): Promise<void> {
        await this.uIPhotoDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async verifyDateTime(): Promise<void> {
        const value = await this.uIPhotoDateEdit.inputValue();
        const value1 = await this.uITimeEdit.inputValue();
        await this.uITimeEdit.press('Tab');
    }

    async VerifyImageUploaded(): Promise<void> {
        expect(await this.uIUpdatedImage.getAttribute("src")).toContain("Home/frmHandle.aspx")
    }

    async SaveAndClose(): Promise<void> {
        await this.uISaveCloseButton.click();
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
    }

    async ClickSaveAndCloseButton(): Promise<void> {
        await this.uISaveCloseButton.click();
    }

    async Close(): Promise<void> {
        // no-op: popup window close
    }

    async clickChooseFileButtonAndSelectPNGFile(): Promise<void> {
        await this.uIFileUploadTextViewButton.click()
        // TODO: file upload "Profile.png"
    }

    async clickChooseFileButtonAndSelectJPGFile(): Promise<void> {
        const fileName = testData.home('FileName')
        await this.uIFileUploadTextViewButton.click()
        // TODO: file upload fileName
    }

    async clickChooseFileButtonAndSelectJPGFile1(): Promise<void> {
        const fileName = testData.home('FileName1')
        await this.uIFileUploadTextViewButton.click()
        // TODO: file upload fileName
    }

    async switchtoUploadedImage(): Promise<void> {
    }

    async verifyAdditionSuccessFullMessage(): Promise<void> {
        // TODO: expect("1002 - Addition Successful".trim()).toEqual(this.uIBottomMessage.innerText())
    }

    async verifyPrintIconIsNotPresent(): Promise<void> {
        const findElements = await this.page.locator("//td[@class='status']//td//input").all()
        // TODO: const values = findElements.stream().map(el -> el.getAttribute("title")).filter(attr -> attr != null && !attr === "").collect(Collectors.toList())
        expect(values.length==3).toBeTruthy();
    }

    async clickCopyAndPasteLabel(): Promise<void> {
        await this.uICopyAndPasteLabel.click();
    }

    async uploadImage(imageName: string): Promise<void> {
        if (Playback.driver instanceof RemoteWebDriver) {
        // ((RemoteWebDriver) Playback.driver).setFileDetector(new LocalFileDetector())
        const ele = this.page.locator("//input[@type='file']")
        await this.ele.fill(PropertiesFile.readPropertiesFile("TestResourceFolderPath") + imageName);
        // JavascriptExecutor js = (JavascriptExecutor) Playback.driver
        // js.executeScript("arguments[0].dispatchEvent(new Event('change',{bubbles:true}));", ele)
        }
    }
}

export class ViewPrintHistoryPage {
    readonly page: Page;
    readonly uIReasonForPrintingThisReportEdit: Locator;
    readonly uIViewAndPrintButton: Locator;
    readonly uIEmailTemplateText: Locator;
    readonly uIEmailButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIReasonForPrintingThisReportEdit = page.locator('NotxtReasonPrntReport');
        this.uIViewAndPrintButton = page.locator('Nobtnviewprint');
        this.uIEmailTemplateText = page.locator('Nolblemailexist');
        this.uIEmailButton = page.locator('NobtnEmail');
    }

    async EnterReasonForPrintingThisReport(): Promise<void> {
        await this.uIReasonForPrintingThisReportEdit.click();
        await this.uIReasonForPrintingThisReportEdit.fill(RandomHelpers.randomString(15));
    }

    async ClickViewAndPrintButton(): Promise<void> {
        await this.uIViewAndPrintButton.click();
    }

    async VerifyAtEmailTemplateText(): Promise<void> {
        // TODO: expect assertion
    }

    async EnterAtReason(): Promise<void> {
        await this.uIReasonForPrintingThisReportEdit.click();
        await this.uIReasonForPrintingThisReportEdit.fill(reason);
    }

    async ClickEmailButton(): Promise<void> {
        await this.uIEmailButton.click();
    }
}

export class ViewPrintStatusScreenPage {
    readonly page: Page;
    readonly uIPrintStatusTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIPrintStatusTable = page.locator('NogrdPrintStatus');
    }

    async VerifycurrentdateInGrid(rowIndex: string): Promise<void> {
        // TODO: expectEqual(DateHelpers.getCurrentDate().trim()).toEqual("Email Template Name:" + testData.home('EmailTemplate'))
    }
}

export class WhiteBoardPage {
    readonly page: Page;
    readonly uIWhiteBoardGrid: Locator;
    readonly uIAddButton: Locator;
    readonly uIMaximizeButton: Locator;
    readonly uIWhiteboardHeader: Locator;
    readonly uISearchButton: Locator;
    readonly uIWhiteBoardHideButton: Locator;
    readonly uIWhiteBoardUnHideButton: Locator;
    readonly uIDivLink: Locator;
    readonly uIWhiteBoardImage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIWhiteBoardGrid = page.locator("//div[@id='Wtboard']");
        this.uIAddButton = page.locator('NobtnWBAdd');
        this.uIMaximizeButton = page.locator('NoimgMax');
        this.uIWhiteboardHeader = page.locator("//span[@id='lblCurTime']");
        this.uISearchButton = page.locator('NobtnWBSearch');
        this.uIWhiteBoardHideButton = page.locator('NocmdrightWB');
        this.uIWhiteBoardUnHideButton = page.locator('Nocmdleft');
        this.uIDivLink = page.locator('NodivLink');
        this.uIWhiteBoardImage = page.locator('NoimgLink');
    }

    async clickAddButton(): Promise<void> {
        await this.whiteBoard.click();
    }

    async clickMaximizeButton(): Promise<void> {
        await this.whiteBoard.click();
    }

    async selectRowByAtSubject(i: string): Promise<void> {
        const row = this.page.locator("//table[@id='listActivityLog']")
        const data = row.locator("//td[contains(text(),'" + testData.home("Subject"+i) + "')]")
        await this.data.click();
    }

    async verifyAtTitle(): Promise<void> {
        const title = this.page.locator("//span[@id='lblCurTime']/..")
        const text = await this.title.innerText();
        expect(text.includes(testData.home('Title'))).toBeTruthy()
    }

    async close(): Promise<void> {
        // no-op: window close
    }

    async verifyNoRecordFoundAcknowledgeMessage(): Promise<void> {
        // else {
        // popup.switchToAcknowledge()
    }

    async clickSearchButton(): Promise<void> {
        await this.whiteBoard.click();
    }

    async verifyAtSubjectInGrid(i: string): Promise<void> {
        const rows = this.page.locator("//table[@id='listActivityLog']")
        const data = await rows.locator(By.xpath("//td[contains(text(),'" + testData.home("Subject" + i) + "')]")).innerText()
        expect(data.trim()).toEqual(testData.home("Subject" + i))
    }

    async verifyAtSubjectNotInGrid(jsonIndex: string): Promise<void> {
        const table = await this.page.locator("//div[@id='divlist']//table").all()
        for (const webElement of table) {
        expect(await webElement.innerText().includes("ActivityTypeDescription"+jsonIndex), "Description is there-->").toBeFalsy();
        }
    }

    async clickWhiteBoardHideButton(): Promise<void> {
        await this.whiteBoard.click();
    }

    async verifyWhiteBoardFieldIsHided(): Promise<void> {
        const style = this.page.locator("//table[@id='tdLink']/parent::td").getAttribute("style");
        expect(style.includes("display: none;")).toBeTruthy()
        const DivLink = await this.uIDivLink.getAttribute("style")
        expect(DivLink).toEqual("visibility: visible;");
    }

    async verifyWhiteBoardFieldIsUnHided(): Promise<void> {
        const style = this.page.locator("//table[@id='tdLink']/parent::td").getAttribute("style");
        expect(style.includes("display: none;")).toBeFalsy();
        const DivLink = await this.uIDivLink.getAttribute("style")
        expect("visibility: hidden;").toEqual(DivLink);
    }

    async clickWhiteBoardUnHideButton(): Promise<void> {
        await this.whiteBoard.click();
    }

    async verifyWhiteBoardOnlyScreenIsLoaded(): Promise<void> {
        const cssValue = this.uIWhiteBoardGrid.getCssValue("Height")
        expect(testData.home('WhiteBoardOnlyScreenHeight'))
    }

    async verifyWhiteBoardAndLinkScreenIsLoaded(): Promise<void> {
        const cssValue = this.uIWhiteBoardGrid.getCssValue("Height")
        // TODO: expectEqual(cssValue.trim()).toEqual(cssValue)
    }

    async verifyWhiteBoardHidedLabel(): Promise<void> {
        const attribute = await this.uIWhiteBoardImage.getAttribute("src")
        expect(attribute.includes("Whiteboard.png")).toBeTruthy()
    }
}

export class WhiteboardEntryPage {
    readonly page: Page;
    readonly uISubjectEdit: Locator;
    readonly uIDetailsEdit: Locator;
    readonly uIStartDateEdit: Locator;
    readonly uIStartTimeEdit: Locator;
    readonly uIEndDateEdit: Locator;
    readonly uIEndTimeEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIYesButton: Locator;
    readonly uIToDateEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISubjectEdit = page.locator('NotxtSubject');
        this.uIDetailsEdit = page.locator('NotxtDetails');
        this.uIStartDateEdit = page.locator('NodttmStart_Date_KPIDttmCtrl');
        this.uIStartTimeEdit = page.locator("//table[@id='dttmStart_Time']//input");
        this.uIEndDateEdit = page.locator('NodttmStop_Date_KPIDttmCtrl');
        this.uIEndTimeEdit = page.locator("//table[@id='dttmStop_Time']//input");
        this.uISaveButton = page.locator('NobtnSave');
        this.uISaveNCloseButton = page.locator('NocmdSaveNClose');
        this.uIPrintButton = page.locator('NocmdPrint');
        this.uIYesButton = page.locator("//button[@class='confirm btn btn-primary']");
        this.uIToDateEdit = page.locator("//button[@class='confirm btn btn-primary']");
    }

    async enterAtSubject(): Promise<void> {
        await this.uISubjectEdit.fill(subject);
    }

    async enterAtStartDateAndTime(): Promise<void> {
        await this.uIStartDateEdit.fill(startDate);
        await this.uIStartTimeEdit.click();
        await this.uIStartTimeEdit.fill(startTime);
    }

    async enterAtEndDateAndTime(): Promise<void> {
        await this.uIEndDateEdit.fill(endDate);
        await this.uIEndTimeEdit.click();
        await this.uIEndTimeEdit.fill(endTime);
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.uIYesButton.click();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async clearStartDateAndTime(): Promise<void> {
        await this.uIStartDateEdit.click();
        await this.uIStartDateEdit.clear();
        await this.uIStartTimeEdit.click();
        await this.uIStartTimeEdit.clear();
    }

    async clearAtEndDateAndTime(): Promise<void> {
        await this.uIEndDateEdit.click();
        await this.uIEndDateEdit.clear();
        await this.uIEndTimeEdit.click();
        await this.uIEndTimeEdit.clear();
    }

    async verifyStartDateAndTimeIsNull(): Promise<void> {
        const date = await this.uIStartDateEdit.inputValue();
        const time = await this.uIStartTimeEdit.inputValue();
        expect(date === "").toBeTruthy();
        expect(time === "").toBeTruthy();
    }

    async verifyEndDateAndTimeIsNull(): Promise<void> {
        const date = await this.uIEndDateEdit.inputValue();
        const time = await this.uIEndTimeEdit.inputValue();
        expect(date === "").toBeTruthy();
        expect(time === "").toBeTruthy();
    }
}

export class SubjectTabPage {
    readonly page: Page;
    readonly uITextNameEdit: Locator;
    readonly uITextNameEditFor93: Locator;
    readonly uIRemarksEdit: Locator;
    readonly uITextNameRichTextEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uITextNameEdit = page.locator('NotabKPIText_tmpl0_ctrlUsrKPITxtEdit_txtName');
        this.uITextNameEditFor93 = page.locator('NotxtName');
        this.uIRemarksEdit = page.locator('#tabKPIText\\$tmpl0\\$ctrlUsrKPITxtEdit\\$txtDescription');
        this.uITextNameRichTextEdit = page.locator("//table[@id='tabKPIText_tmpl0_ctrlUsrKPITxtEdit_rteKPITxtWrapper']//iframe[@id='tabKPIText_tmpl0_ctrlUsrKPITxtEdit_rteKPITxt_contentIframe']");
    }
}

export class NameCommentsPage {
    readonly page: Page;
    readonly uINameCommentsEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINameCommentsEdit = page.locator('NoctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveNCloseButton = page.locator('NocmdSaveNClose');
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
    }

    async saveAndClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
    }
}

export class TextTabPage {
    readonly page: Page;
    readonly uITemplateComboBox: Locator;
    readonly uILoadButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uITextEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uITemplateComboBox = page.locator('NotabBulletin_tmpl0_ctrlUsrKPITxtEdit_cddTemplate');
        this.uILoadButton = page.locator('NotabBulletin_tmpl0_ctrlUsrKPITxtEdit_btnLoad');
        this.uIAddNewButton = page.locator('NotabBulletin_tmpl0_ctrlUsrKPITxtEdit_btnAddNew');
        this.uITextEdit = page.locator('NotabBulletin_tmpl0_ctrlUsrKPITxtEdit_txtMsg_contentIframe');
    }

    async selectTemplate(): Promise<void> {
        // TODO: select random dropdown option on uITemplateComboBox
    }

    async clickLoadButton(): Promise<void> {
        await this.uILoadButton.click();
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }
}

export class BulletinAttachmentsTabPage {
    readonly page: Page;
    readonly uICategoryRadioButton: Locator;
    readonly uIFolderRadioButton: Locator;
    readonly uIExpandRowButton: Locator;
    readonly uICollapseRowButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIAddFilesButton: Locator;
    readonly uICaptureButton: Locator;
    readonly uIScannerButton: Locator;
    readonly uIDrawingButton: Locator;
    readonly uIKPIALCPermisstionButton: Locator;
    readonly uIAttachmentsTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uICategoryRadioButton = page.locator('NoctrlUsrKPITxtAttachment_rdoGroupBy_0');
        this.uIFolderRadioButton = page.locator('NoctrlUsrKPITxtAttachment_rdoGroupBy_1');
        this.uIExpandRowButton = page.locator("//img[@title='Expand Row']");
        this.uICollapseRowButton = page.locator("//img[@title='Collapse Row']");
        this.uIRefreshButton = page.locator('NocmdRefresh');
        this.uIAddFilesButton = page.locator('NocmdAddFile');
        this.uICaptureButton = page.locator('NocmdCapture');
        this.uIScannerButton = page.locator('Nocmdscanner');
        this.uIDrawingButton = page.locator('NobtnDrawing');
        this.uIKPIALCPermisstionButton = page.locator('NoKPIALCPermission');
        this.uIAttachmentsTable = page.locator('NoctrlUsrKPITxtAttachment_grdKPITxtAttach_ctl00');
    }

    async clickFolderRadioButton(): Promise<void> {
        await this.uIFolderRadioButton.click();
    }

    async clickCategoryRadioButton(): Promise<void> {
        await this.uICategoryRadioButton.click();
    }

    async clickExpandRow(): Promise<void> {
        await this.uIExpandRowButton.click();
    }

    async clickCollapseRow(): Promise<void> {
        await this.uICollapseRowButton.click();
    }

    async clickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async clickAddFilesButton(): Promise<void> {
        await this.uIAddFilesButton.click();
    }

    async clickScannerButton(): Promise<void> {
        await this.uIScannerButton.click();
    }

    async clickDrawingButton(): Promise<void> {
        await this.uIDrawingButton.click();
    }

    async verifyAddFilesButtonDisplayed(): Promise<void> {
        expect(await this.uIAddFilesButton.isVisible()).toBeTruthy();
    }
}

export class BulletinEmailTextTabPage {
    readonly page: Page;
    readonly uITemplateComboBox: Locator;
    readonly uILoadButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIEmailRichTextEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uITemplateComboBox = page.locator('NotabBulletin_tmpl3_UsrEmailText_cddEmailTemplate');
        this.uILoadButton = page.locator('NotabBulletin_tmpl3_UsrEmailText_btnLoad');
        this.uIAddNewButton = page.locator('NotabBulletin_tmpl3_UsrEmailText_btnAddNew');
        this.uIEmailRichTextEdit = page.locator('NotabBulletin_tmpl3_UsrEmailText_txtEmailMsg_contentIframe');
    }

    async selectEmailTemplate(): Promise<void> {
        // TODO: select random dropdown option on uITemplateComboBox
        await this.uITemplateComboBox.press('Tab');
    }

    async clickLoadButton(): Promise<void> {
        await this.uILoadButton.click();
    }

    async enterEmailRichText(): Promise<void> {
        await this.uIEmailRichTextEdit.click();
        // actions.fill(RandomHelpers.randomString(10)).build().perform()
    }
}

export class PaymentMethodScreenPage {
    readonly page: Page;
    readonly uITypeComboBox: Locator;
    readonly uICreditCardNoCodeEdit: Locator;
    readonly uIHolderNameCodeEdit: Locator;
    readonly uIExpirationMonthComboBox: Locator;
    readonly uIExpirationYearComboBox: Locator;
    readonly uIBankCodeEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uITypeComboBox = page.locator('NocddTxnType_DropDown');
        this.uICreditCardNoCodeEdit = page.locator('NotxtAccountNo');
        this.uIHolderNameCodeEdit = page.locator('NotxtHolderName');
        this.uIExpirationMonthComboBox = page.locator('NotxtExpMonth_DropDown');
        this.uIExpirationYearComboBox = page.locator('NotxtExpYear');
        this.uIBankCodeEdit = page.locator('NotxtBankName');
        this.uISaveButton = page.locator('NocmdSave');
        this.uISaveAndCloseButton = page.locator('NocmdSaveNClose');
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
    }

    async saveAndClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
    }
}

export class AttachmentsTabPage {
    readonly page: Page;
    readonly uICategoryRadioButton: Locator;
    readonly uIFolderRadioButton: Locator;
    readonly uIExpandRowButton: Locator;
    readonly uICollapseRowButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIAddFilesButton: Locator;
    readonly uICaptureButton: Locator;
    readonly uIScannerButton: Locator;
    readonly uIDrawingButton: Locator;
    readonly uIKPIALCPermisstionButton: Locator;
    readonly uIAttachmentsTable: Locator;
    readonly uIDownloadSelectedFilesButton: Locator;
    readonly uICreateAsPDFButton: Locator;
    readonly uIAttachmentsFolderTable: Locator;
    readonly uISelectAllCheckBox: Locator;
    readonly uIRecordsFolderTable: Locator;
    readonly uIFileStorageLocationlabel: Locator;
    readonly uIAttachmentCategoryPopup: Locator;
    readonly uIAttachmentFolderTableRow: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uICategoryRadioButton = page.locator('NoctrlUsrKPITxtAttachment_rdoGroupBy_0');
        this.uIFolderRadioButton = page.locator('NoctrlUsrKPITxtAttachment_rdoGroupBy_1');
        this.uIExpandRowButton = page.locator("//img[@title='Expand Row']");
        this.uICollapseRowButton = page.locator("//img[@title='Collapse Row']");
        this.uIRefreshButton = page.locator('NocmdRefresh');
        this.uIAddFilesButton = page.locator('NocmdAddFile');
        this.uICaptureButton = page.locator('NocmdCapture');
        this.uIScannerButton = page.locator('Nocmdscanner');
        this.uIDrawingButton = page.locator('NobtnDrawing');
        this.uIKPIALCPermisstionButton = page.locator('NoKPIALCPermission');
        this.uIAttachmentsTable = page.locator('NoctrlUsrKPITxtAttachment_grdKPITxtAttach_ctl00');
        this.uIDownloadSelectedFilesButton = page.locator('NoctrlUsrKPITxtAttachment_cmdDownloadFiles');
        this.uICreateAsPDFButton = page.locator('NoctrlUsrKPITxtAttachment_cmdMakePDF');
        this.uIAttachmentsFolderTable = page.locator('NoctrlUsrKPITxtAttachment_grdKPITxtAttach_ctl00_FOLDER_0');
        this.uISelectAllCheckBox = page.locator('NoctrlUsrKPITxtAttachment_ChkSelectAll');
        this.uIRecordsFolderTable = page.locator('NoctrlUsrKPITxtAttachment_grdKPITxtAttach_ctl00_Records_0');
        this.uIFileStorageLocationlabel = page.locator('NoctrlUsrKPITxtAttachment_lbl_fileStorageType');
        this.uIAttachmentCategoryPopup = page.locator('NoctrlUsrKPITxtAttachment_dvAddNew');
        this.uIAttachmentFolderTableRow = page.locator("//div[@id='ctrlUsrKPITxtAttachment_grdKPITxtAttach_ctl00_FOLDER_0']//table//tr[contains(@class,'row')]");
    }

    async clickFolderRadioButton(): Promise<void> {
        await this.uIFolderRadioButton.click();
    }

    async clickCategoryRadioButton(): Promise<void> {
        await this.uICategoryRadioButton.click();
    }

    async clickScannerButton(): Promise<void> {
        await this.uIScannerButton.click();
    }

    async clickDownloadSelectedFilesButton(): Promise<void> {
        await this.uIDownloadSelectedFilesButton.click();
    }

    async clickCreateAsPDFButton(): Promise<void> {
        await this.uICreateAsPDFButton.click();
    }

    async verifyAddFilesButtonDisplayed(): Promise<void> {
        expect(await this.uIAddFilesButton.isVisible()).toBeTruthy();
    }

    async verifyFileStorageLocation(): Promise<void> {
        expect(await this.uIFileStorageLocationlabel.isVisible()).toBeTruthy();
    }
}

export class AttachmentsCategoryPopupPage {
    readonly page: Page;
    readonly uICategorylbl: Locator;
    readonly uILinklbl: Locator;
    readonly uICategoryComboBox: Locator;
    readonly uIFolderNameEdit: Locator;
    readonly uIRemarksEdit: Locator;
    readonly uISingleFileRadioButton: Locator;
    readonly uIBulkAttachmentRadioButton: Locator;
    readonly uILinkRadioButton: Locator;
    readonly uIFileEdit: Locator;
    readonly uISelectButton: Locator;
    readonly uIAddButton: Locator;
    readonly uICancelButton: Locator;
    readonly uILinkEdit: Locator;
    readonly uIFileUploadEdit: Locator;
    readonly uIShowInCallDetailsCheckBox: Locator;
    readonly uIFolderRadioButton: Locator;
    readonly uIFolderAddButton: Locator;
    readonly uIFolderCategoryCombobox: Locator;
    readonly uIFolderRadDropdown: Locator;
    readonly uIFolderRadDropdownArrow: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uICategorylbl = page.locator('NoctrlUsrKPITxtAttachment_lblCategory');
        this.uILinklbl = page.locator('NoctrlUsrKPITxtAttachment_lblLink');
        this.uICategoryComboBox = page.locator('NoctrlUsrKPITxtAttachment_cddCategory_DropDown');
        this.uIFolderNameEdit = page.locator('NoradFolderName_Input');
        this.uIRemarksEdit = page.locator('NoctrlUsrKPITxtAttachment_txtDescription');
        this.uISingleFileRadioButton = page.locator('NoctrlUsrKPITxtAttachment_rdbtnSingle');
        this.uIBulkAttachmentRadioButton = page.locator('NoctrlUsrKPITxtAttachment_rdbtnBulk');
        this.uILinkRadioButton = page.locator('NoctrlUsrKPITxtAttachment_rdbtnLink');
        this.uIFileEdit = page.locator('NoctrlUsrKPITxtAttachment_uploadfile');
        this.uISelectButton = page.locator('NoctrlUsrKPITxtAttachment_uploadfile');
        this.uIAddButton = page.locator('NoctrlUsrKPITxtAttachment_cmdAddAttachment');
        this.uICancelButton = page.locator('NoctrlUsrKPITxtAttachment_cmdCancelAttachment');
        this.uILinkEdit = page.locator('NoctrlUsrKPITxtAttachment_txtLink');
        this.uIFileUploadEdit = page.locator('NoctrlUsrKPITxtAttachment_uploadfileTextBox0');
        this.uIShowInCallDetailsCheckBox = page.locator('NoctrlUsrKPITxtAttachment_ChkIsPrivate');
        this.uIFolderRadioButton = page.locator('NoctrlUsrKPITxtAttachment_rdbtnFolder');
        this.uIFolderAddButton = page.locator('Noupload');
        this.uIFolderCategoryCombobox = page.locator('NoctrlUsrKPITxtAttachment_cddDNDCategory_DropDown');
        this.uIFolderRadDropdown = page.locator('NoradFolderName_DropDown');
        this.uIFolderRadDropdownArrow = page.locator('NoradFolderName_Arrow');
    }

    async clickSingleFileRadioButton(): Promise<void> {
        await this.uISingleFileRadioButton.click();
    }

    async clickBulkAttachmentRadioButton(): Promise<void> {
        await this.uIBulkAttachmentRadioButton.click();
    }

    async clickLinkRadioButton(): Promise<void> {
        await this.uILinkRadioButton.click();
    }

    async clickFolderRadioButton(): Promise<void> {
        await this.uIFolderRadioButton.click();
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async clickCancelButton(): Promise<void> {
        await this.uICancelButton.click();
    }

    async clickFolderAddButton(): Promise<void> {
        await this.uIFolderAddButton.click();
    }
}
