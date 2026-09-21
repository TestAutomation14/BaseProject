
import { Page, Locator, expect } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { AcknowledgePage, ConfirmPage, PopupPage } from '../popup.page';
import { BaseData } from '../../data/base-data';
import { GridHelpers } from '../../helpers/grid-helpers';
import { ElementHelpers } from '../../helpers/element-helpers';
import { PopupHelpers } from '../../helpers/popup-helpers';
import { DateHelpers, RandomHelpers } from '../../helpers';

export class WarrantsPage {
    readonly page: Page;
    private browserHelpers: BrowserHelpers;

    constructor(page: Page) {
        this.page = page;
        this.browserHelpers = new BrowserHelpers(page);
    }

    async Reset(): Promise<void> {
        // Managed by Playwright runner
    }

    async switchToWarrantSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Warrants/frmWarrantsInquiry');
    }

    async switchToWarrantEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Warrant Entry - 2810');
    }

    async switchToWarrantDetails(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Warrant Details - 2851');
    }

    async switchToWarrantNamesSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Warrants/frmWarrantsNMInquiry');
    }

    async switchToBatchClearance(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmBatchClearance');
    }

    async switchToWarrantType(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmWarrantTypeSrch');
    }

    async switchToWarrantTypeEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Warrant Type Entry');
    }

    async switchToWarrantEntryAuthenticateWindow(): Promise<void> {
        await this.page.waitForTimeout(2000);
        await this.browserHelpers.switchToPageByUrl('frmTraPFAuthenticate.aspx');
    }
}

export class WarrentEntryAuthenticatorWindowPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uIUserNameEdit: Locator;
    readonly uIPasswordEdit: Locator;
    readonly uIAcceptButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uIUserNameEdit = page.locator('#txtUserName');
        this.uIPasswordEdit = page.locator('#txtPassWord');
        this.uIAcceptButton = page.locator('#cmdLogin');
    }

    async enterAtPassword(): Promise<void> {
        await this.uIPasswordEdit.fill(BaseData.getTestValue('Password'));
    }

    async clickAcceptButton(): Promise<void> {
        await this.page.waitForTimeout(500);
        await this.uIAcceptButton.click();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async enterAtInvalidPassword(): Promise<void> {
        await this.page.waitForTimeout(500);
        await this.uIPasswordEdit.fill(BaseData.getTestValue('InvalidPassword'));
        await this.uIPasswordEdit.press('Tab');
    }

    async verifyInvalidUserNamePassAckMsg(): Promise<void> {
        await this.page.waitForTimeout(500);
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('1049 - Invalid User Name Password');
        await this.popup.acknowledgeOkButton.click();
    }
}

export class WarrantEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly browserHelpers: BrowserHelpers;

    readonly uIWarrantYearEdit: Locator;
    readonly uIWarrantNumberEdit: Locator;
    readonly uIIssuedDateEdit: Locator;
    readonly uIExpiredDateEdit: Locator;
    readonly uITypeComboBox: Locator;
    readonly uIDetailsTextview: Locator;
    readonly uIStatusComboBox: Locator;
    readonly uICourtWarrantNoEdit: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameIDEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uICSZEdit: Locator;
    readonly uINameInfoIconButton: Locator;
    readonly uIWarrantIconButton: Locator;
    readonly uIPlateNumberEdit: Locator;
    readonly uIVehicleStateComboBox: Locator;
    readonly uIPlateNumberLookupButton: Locator;
    readonly uIMainTab: Locator;
    readonly uIChargesTab: Locator;
    readonly uINarrativeTab: Locator;
    readonly uICommentsTab: Locator;
    readonly uIStatusTab: Locator;
    readonly uIServiceTab: Locator;
    readonly uINotesTab: Locator;
    readonly uIClearTab: Locator;
    readonly uIAttachmentsTab: Locator;
    readonly uIHistoryTab: Locator;
    readonly uIReopenButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIWarrantImage: Locator;
    readonly uIALCIconButton: Locator;
    readonly uICourtWarrantNoTextView: Locator;
    readonly uIDocketNoTextView: Locator;
    readonly uIDocketNoEdit: Locator;
    readonly uICustom1TextView: Locator;
    readonly uICustom1Edit: Locator;
    readonly uICustom2TextView: Locator;
    readonly uICustom2Edit: Locator;
    readonly uINameShownInWarrantComboBox: Locator;
    readonly uIAddressShownInWarrantComboBox: Locator;
    readonly uIAuthorityLookUpDescription: Locator;
    readonly uIAuthorityLookUpEdit: Locator;
    readonly uIAuthorityLookUpIcon: Locator;
    readonly uIFooterStatusBar: Locator;
    readonly uIMapTab: Locator;
    readonly uIJurisComboBox: Locator;
    readonly uICustom3TextView: Locator;
    readonly uICustomTab: Locator;
    readonly uIQAFormsTab: Locator;
    readonly uISaveNAddNewButton: Locator;
    readonly uIAuthorityStateDropdown: Locator;
    readonly uIExpiredLabel: Locator;
    readonly uIORILocationStateDropdown: Locator;
    readonly uILocationCodeEdit: Locator;
    readonly uIComplainantEdit: Locator;
    readonly uIHeldByEdit: Locator;
    readonly uICustom3Edit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.browserHelpers = new BrowserHelpers(page);

        this.uIWarrantYearEdit = page.locator('#nbrWarrant_Year');
        this.uIWarrantNumberEdit = page.locator('#nbrWarrant_Number');
        this.uIIssuedDateEdit = page.locator('#dttmIssued_KPIDttmCtrl');
        this.uIExpiredDateEdit = page.locator('#dttmExpired_KPIDttmCtrl');
        this.uITypeComboBox = page.locator('#cddType_DropDown');
        this.uIDetailsTextview = page.locator('#txtPhysicalDesc');
        this.uIStatusComboBox = page.locator('#cddStatus_DropDown');
        this.uICourtWarrantNoEdit = page.locator('#txtCourtWarNo');
        this.uINameTypeEdit = page.locator('#nameWar_NameType');
        this.uINameIDEdit = page.locator('#nameWar_NameTypeID');
        this.uILastNameEdit = page.locator('#nameWar_LastName');
        this.uIFirstNameEdit = page.locator('#nameWar_FirstName');
        this.uIAddressEdit = page.locator('#txtAddress');
        this.uICSZEdit = page.locator('#txtCSZ');
        this.uINameInfoIconButton = page.locator('#nameWar_imgSrch');
        this.uIWarrantIconButton = page.locator('#nameWar_imgWant');
        this.uIPlateNumberEdit = page.locator('#txtPlateNbr_PlateNumber');
        this.uIVehicleStateComboBox = page.locator('#txtPlateNbr_KPIState');
        this.uIPlateNumberLookupButton = page.locator('#txtPlateNbr_imgBtn');
        this.uIMainTab = page.locator("//span[contains(text(),'Main')]");
        this.uIChargesTab = page.locator("//span[contains(text(),'Charges')]");
        this.uINarrativeTab = page.locator("//span[contains(text(),'Narrative')]");
        this.uICommentsTab = page.locator("//span[contains(text(),'Comments')]");
        this.uIStatusTab = page.locator("//div[@id='tabWarrants']//span[contains(text(),'Status')]");
        this.uIServiceTab = page.locator("//span[contains(text(),'Service')]");
        this.uINotesTab = page.locator("//span[contains(text(),'Notes')]");
        this.uIClearTab = page.locator("//span[contains(text(),'Clear')]");
        this.uIAttachmentsTab = page.locator("//span[contains(text(),'Attachments')]");
        this.uIHistoryTab = page.locator("//span[contains(text(),'History')]");
        this.uIReopenButton = page.locator('#cmdReopen');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIWarrantImage = page.locator('#imgWarrant');
        this.uIALCIconButton = page.locator('#alcName');
        this.uICourtWarrantNoTextView = page.locator('#lblCourtWarNo');
        this.uIDocketNoTextView = page.locator('#lblDocketNo');
        this.uIDocketNoEdit = page.locator('#txtDocketNo');
        this.uICustom1TextView = page.locator('#lblCustom1');
        this.uICustom1Edit = page.locator('#txtCustom1');
        this.uICustom2TextView = page.locator('#lblCustom2');
        this.uICustom2Edit = page.locator('#txtCustom2');
        this.uINameShownInWarrantComboBox = page.locator('#drpName');
        this.uIAddressShownInWarrantComboBox = page.locator('#drpAddress');
        this.uIAuthorityLookUpDescription = page.locator('#ORIAuthority_lupORI_CodeDescription');
        this.uIAuthorityLookUpEdit = page.locator('#ORIAuthority_lupORI_CodeValue');
        this.uIAuthorityLookUpIcon = page.locator('#ORIAuthority_lupORI_imgBtn');
        this.uIFooterStatusBar = page.locator("//td[@class='statusBar']//b");
        this.uIMapTab = page.locator("//span[contains(text(),'Map')]");
        this.uIJurisComboBox = page.locator('#lstJuris');
        this.uICustom3TextView = page.locator('#lblCustom3');
        this.uICustomTab = page.locator("//span[text()='Custom']");
        this.uIQAFormsTab = page.locator("//span[contains(text(),'QA Forms')]");
        this.uISaveNAddNewButton = page.locator('#cmdSaveNAddNew');
        this.uIAuthorityStateDropdown = page.locator('#ORIAuthority_KPIState');
        this.uIExpiredLabel = page.locator('#lblExpired');
        this.uIORILocationStateDropdown = page.locator('#ORILocation_KPIState');
        this.uILocationCodeEdit = page.locator('#ORILocation_lupORI_CodeValue');
        this.uIComplainantEdit = page.locator('#tabWarrants_tmpl0_UsrMain1_txtComplainant');
        this.uIHeldByEdit = page.locator('#tabWarrants_tmpl0_UsrMain1_txtHeldBy');
        this.uICustom3Edit = page.locator('#txtCustom3');
    }

    async EnterAtWarrantNumber(): Promise<void> {
        const currentYear = new Date().getFullYear().toString().substring(2, 4);
        await this.uIWarrantYearEdit.fill(currentYear);
        await this.uIWarrantNumberEdit.fill(BaseData.getTestValue('WarrantNo').substring(3));
        await this.uIWarrantNumberEdit.press('Tab');
    }

    async EnterAtWarrantLastName(): Promise<void> {
        await this.uILastNameEdit.fill(BaseData.getTestValue('WarrantLastName'));
    }

    async EnterAtWarrantFirstName(): Promise<void> {
        await this.uIFirstNameEdit.fill(BaseData.getTestValue('WarrantFirstName'));
        await this.uIFirstNameEdit.press('Tab');
        await this.page.waitForTimeout(500);
    }

    async SelectWarrantName(): Promise<void> {
        const resultTable = this.popup.nameSearchGrid;
        await this.grid.selectRandomRow(resultTable);
        await this.popup.selectNameButton.click();
        await this.page.waitForLoadState('load');
    }

    async VerfiyLastNameInNameEntry(): Promise<void> {
        const lastName = await this.uILastNameEdit.inputValue();
        await this.uINameInfoIconButton.click();
        await this.browserHelpers.switchToPageByUrl('frmName.aspx');
        const nameEntryLastName = this.page.locator('#custNames_LastName');
        await expect(nameEntryLastName).toHaveValue(lastName);
        await this.page.close();
    }

    async EnterIssuedDate(): Promise<void> {
        await this.uIIssuedDateEdit.click();
        await this.uIIssuedDateEdit.press('Tab');
    }

    async EnterExpiredDate(): Promise<void> {
        await this.uIExpiredDateEdit.fill(DateHelpers.getFutureDate(1));
    }

    async EnterAtPlateNumber(): Promise<void> {
        await this.uIPlateNumberEdit.fill(BaseData.getTestValue('PlateNumber'));
    }

    async EnterAtState(): Promise<void> {
        await this.uIVehicleStateComboBox.fill(BaseData.getTestValue('State'));
        await this.uIVehicleStateComboBox.press('Tab');
    }

    async SelectVehicle(): Promise<void> {
        const grid = this.page.locator('#grdBoat, #grdVehicle');
        await this.grid.selectRandomRow(grid);
    }

    async EnterLastName(): Promise<void> {
        await this.uILastNameEdit.fill('');
    }

    async EnterNameType(): Promise<void> {
        await this.uINameTypeEdit.fill('a');
    }

    async EnterAtNameID(): Promise<void> {
        const nameId = BaseData.getTestValue('NameID');
        await this.uINameTypeEdit.fill(nameId.substring(0, 1));
        await this.uINameIDEdit.fill(nameId.substring(2));
        await this.uINameIDEdit.press('Tab');
    }

    async enterNameID(NameID: string): Promise<void> {
        await this.uINameTypeEdit.fill(NameID.substring(0, 1));
        await this.uINameTypeEdit.press('Tab');
        await this.uINameIDEdit.fill(NameID.substring(2));
        await this.uINameIDEdit.press('Tab');
    }

    async SelectType(): Promise<void> {
        //  await this.elementHelpers.selectRandomDropDownOption(this.uITypeComboBox);
    }

    async SelectStatusType(): Promise<void> {
        // await this.elementHelpers.selectRandomDropDownOption(this.uIStatusComboBox);
    }

    async EnterCourtWarrantNo(): Promise<void> {
        await this.uICourtWarrantNoEdit.fill(RandomHelpers.randomNumberString(3));
    }

    async ClickWarrantIcon(): Promise<void> {
        await this.uIWarrantIconButton.click();
    }

    async ClickALCIcon(): Promise<void> {
        await this.uIALCIconButton.click();
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async ClickReopen(): Promise<void> {
        await this.uIReopenButton.click();
    }

    async CloseWarrantEntryScreen(): Promise<void> {
        await this.page.close();
    }

    async SaveandClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        await this.popup.confirmYes();
    }

    async SwitchToAllTabs(): Promise<void> {
        await this.uIMainTab.click();
        await this.uIChargesTab.click();
        await this.uIClearTab.click();
        await this.uIStatusTab.click();
        await this.uINotesTab.click();
        await this.uIAttachmentsTab.click();
    }

    async SwitchToClearTab(): Promise<void> {
        await this.uIClearTab.click();
        await this.page.waitForTimeout(1000);
        await this.browserHelpers.switchToFrame('frmClear');
    }

    async SwitchToStatusTab(): Promise<void> {
        await this.uIStatusTab.click();
        await this.page.waitForTimeout(1000);
        await this.browserHelpers.switchToFrame('frmStatus');
    }

    async SwitchToMainTab(): Promise<void> {
        await this.uIMainTab.click();
        await this.page.waitForTimeout(1000);
    }

    async SwitchToChargesTab(): Promise<void> {
        await this.uIChargesTab.click();
        await this.page.waitForTimeout(1000);
    }

    async SwitchToServiceTab(): Promise<void> {
        await this.uIServiceTab.click();
        await this.page.waitForTimeout(1000);
        await this.browserHelpers.switchToFrame('frmService');
    }

    async SwitchToNarrativeTab(): Promise<void> {
        await this.uINarrativeTab.click();
        await this.page.waitForTimeout(1000);
    }

    async SwitchToNotesTab(): Promise<void> {
        await this.uINotesTab.click();
        await this.page.waitForTimeout(1000);
        await this.browserHelpers.switchToFrame('frmNotes');
    }

    async clickRefreshButton(): Promise<void> {
        await this.uIResetButton.click();
        await this.page.waitForTimeout(1000);
    }

    async SwitchToHistoryTab(): Promise<void> {
        await this.uIHistoryTab.click();
        await this.page.waitForTimeout(1000);
    }

    async ClickCourtWarrantNoTextView(): Promise<void> {
        await this.uICourtWarrantNoTextView.click();
    }

    async ClickDocketNoTextView(): Promise<void> {
        await this.uIDocketNoTextView.click();
    }

    async ClickCustom1TextView(): Promise<void> {
        await this.uICustom1TextView.click();
    }

    async ClickCustom2TextView(): Promise<void> {
        await this.uICustom2TextView.click();
    }

    async ClickCustom3TextView(): Promise<void> {
        await this.uICustom3TextView.click();
    }

    async VerifyChargeTabAppears(): Promise<void> {
        const classAttr = await this.uIChargesTab.getAttribute('class') || '';
        expect(classAttr).toContain('igtab_BlueThemeTHTextSel');
    }

    async VerifyIssuedDateAsCurrentDate(): Promise<void> {
        const value = await this.uIIssuedDateEdit.inputValue();
        expect(value).toBe(DateHelpers.getCurrentDate());
    }

    async VerifyAcknowledgeDateRequired(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(1044) Date is Required');
        await this.popup.acknowledgeOkButton.click();
    }

    async VerifyTypeAsAnticipatoryBail(): Promise<void> {
        const selected = await this.uITypeComboBox.locator('option:checked').textContent();
        expect(selected?.trim()).toBe('Anticipatory Bail');
    }

    async VerifyStatusAsActiveOpen(): Promise<void> {
        const selected = await this.uIStatusComboBox.locator('option:checked').textContent();
        expect(selected?.trim()).toBe('Active/Open');
    }

    async VerifyWantOrWarrantNoEditable(): Promise<void> {
        const isReadOnly = await this.uIWarrantNumberEdit.getAttribute('readonly');
        expect(isReadOnly).toBeNull();
    }

    async VerifyWarrantIcon(): Promise<void> {
        const src = await this.uIWarrantIconButton.getAttribute('src') || '';
        expect(src).toContain('warrant.gif');
    }

    async VerifyReopenAppear(): Promise<void> {
        await expect(this.uIReopenButton).toBeVisible();
    }

    async VerifySaveIconDisabled(): Promise<void> {
        const classAttr = await this.uISaveButton.getAttribute('class') || '';
        expect(classAttr).toContain('DisabledImgMnuItem');
    }

    async VerifyConfirmReopenMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(8513) Do you really want to reopen?');
        await this.popup.confirmYesButton.click();
    }

    async VerifyAcknowlegeReopenMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(8529) To reopen the warrant, update the warrant status');
        await this.popup.acknowledgeOkButton.click();
    }

    async VerifyJnameDetailsRemoved(): Promise<void> {
        await expect(this.uINameTypeEdit).toHaveValue('');
        await expect(this.uINameIDEdit).toHaveValue('');
    }

    async VerifyAddressFieldRemoved(): Promise<void> {
        await expect(this.uIAddressEdit).toHaveValue('');
        await expect(this.uICSZEdit).toHaveValue('');
    }

    async VerifyJuvinalNameConfirmMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(6125)You have selected a Juvenile Name record');
        await this.popup.confirmNoButton.click();
    }

    async VerifyDocketNoFieldHide(): Promise<void> {
        const classAttr = await this.uIDocketNoEdit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async VerifyCustom1Hide(): Promise<void> {
        const classAttr = await this.uICustom1Edit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async VerifyCourtWarrantNoFieldHide(): Promise<void> {
        const classAttr = await this.uICourtWarrantNoEdit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async VerifyCustom2FieldHide(): Promise<void> {
        const classAttr = await this.uICustom2Edit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async VerifyCustom2AsMandatory(): Promise<void> {
        const attr = await this.uICustom2TextView.getAttribute('kpifieldusage') || '';
        expect(attr).toContain('Mandatory');
    }

    async VerifyCustom1AsMandatory(): Promise<void> {
        const attr = await this.uICustom1TextView.getAttribute('kpifieldusage') || '';
        expect(attr).toContain('Mandatory');
    }

    async VerifyDocketNoAsMandatory(): Promise<void> {
        const attr = await this.uIDocketNoTextView.getAttribute('kpifieldusage') || '';
        expect(attr).toContain('Mandatory');
    }

    async VerifyCourtWarrantNoAsMandatory(): Promise<void> {
        const attr = await this.uICourtWarrantNoTextView.getAttribute('kpifieldusage') || '';
        expect(attr).toContain('Mandatory');
    }

    async VerifyWarrantIconColorOrange(): Promise<void> {
        const src = await this.uIWarrantIconButton.getAttribute('src') || '';
        expect(src).toContain('warrantorange.png');
    }

    async VerifyWarrantIconColorGreen(): Promise<void> {
        const src = await this.uIWarrantIconButton.getAttribute('src') || '';
        expect(src).toContain('warrant.gif');
    }

    async VerifyAtExpiredDate(): Promise<void> {
        await expect(this.uIExpiredDateEdit).toHaveValue(BaseData.getTestValue('ExpiredDate'));
    }

    async VerifyAtExpiredDate1(): Promise<void> {
        await expect(this.uIExpiredDateEdit).toHaveValue(BaseData.getTestValue('ExpiredDate1'));
    }

    async VerifyExpiredDateBlank(): Promise<void> {
        await expect(this.uIExpiredDateEdit).toHaveValue('');
    }

    async verifyWarrantIconNotShowing(): Promise<void> {
        const src = await this.uIWarrantIconButton.getAttribute('src') || '';
        expect(src).toContain('16_L_remove.gif');
    }

    async selectAtType(i?: number): Promise<void> {
        const key = i !== undefined ? `Type${i}` : 'Type';
        await this.uITypeComboBox.selectOption({ label: BaseData.getTestValue(key) });
        await this.uITypeComboBox.press('Tab');
    }

    async verifyAtDetails(): Promise<void> {
        const actual = await this.uIDetailsTextview.inputValue();
        expect(actual).toBe(BaseData.getTestValue('Details'));
    }

    async verifyProfilePicNotDisplayed(): Promise<void> {
        const src = await this.uIWarrantImage.getAttribute('src') || await this.uIWarrantImage.getAttribute('value') || '';
        expect(src).toContain('RefSeqNo=-32');
    }

    async verifyProfilePicDisplayed(): Promise<void> {
        await this.page.waitForTimeout(500);
        const src = await this.uIWarrantImage.getAttribute('src') || '';
        expect(src).toContain('ImgID=10');
    }

    async selectAtStatus(): Promise<void> {
        await this.uIStatusComboBox.selectOption({ label: BaseData.getTestValue('Status') });
    }

    async verifyAtNameShownInWarrant(): Promise<void> {
        const selected = await this.uINameShownInWarrantComboBox.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(BaseData.getTestValue('NameShownInWarrant'));
    }

    async verifyAtAddressShownInWarrant(): Promise<void> {
        const selected = await this.uIAddressShownInWarrantComboBox.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(BaseData.getTestValue('AddressShownInWarrant'));
    }

    async verifyAdditionSuccessfulMessage(): Promise<void> {
        const message = await this.uIFooterStatusBar.innerText();
        expect(message.trim()).toBe('1002 - Addition Successful');
    }

    async verifyUpdatedSuccessfulMessage(): Promise<void> {
        const message = await this.uIFooterStatusBar.innerText();
        expect(message.trim()).toBe('1003 - Update Successful');
    }

    async enterAtAuthorityLookUpEdit(): Promise<void> {
        await this.uIAuthorityLookUpEdit.fill(BaseData.getTestValue('Authority'));
        await this.uIAuthorityLookUpEdit.press('Tab');
    }

    async clickAuthorityLookUpIcon(): Promise<void> {
        await this.uIAuthorityLookUpIcon.click();
    }

    async verifyAtAuthorityCodeDescription(): Promise<void> {
        const attribute = await this.uIAuthorityLookUpDescription.getAttribute('title');
        expect(attribute).toBe(BaseData.getTestValue('AuthorityDescription'));
    }

    async verifyAuthorityORINumberInCodedSearchGrid(): Promise<void> {
        const helpTable = this.page.locator('#grdSrch, #grdKPIHelp');
        const text = await this.grid.getGridCellInnerText(helpTable, 'ORINbr', 0);
        expect(text).toBe(BaseData.getTestValue('ORINumber'));
    }

    async verifyAuthorityTitleInCodedSearchGrid(): Promise<void> {
        const helpTable = this.page.locator('#grdSrch, #grdKPIHelp');
        const text = await this.grid.getGridCellInnerText(helpTable, 'Title', 0);
        expect(text).toBe(BaseData.getTestValue('AuthorityTitle'));
    }

    async clickNameInfoIcon(): Promise<void> {
        await this.page.waitForTimeout(500);
        await this.uINameInfoIconButton.click();
    }

    async verifyNameInfoIconIsDisplayed(): Promise<void> {
        await expect(this.uINameInfoIconButton).toBeVisible();
    }

    async confirm8527IssueYearAsWarrantNoControlYear(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(8527)Do you want to select the Issue date year as Warrant number control year?');
        await this.popup.confirmYesButton.click();
    }

    async changeWarrantYearToCurrentYear(): Promise<void> {
        await this.uIWarrantYearEdit.clear();
        await this.uIWarrantYearEdit.press('Tab');
        await this.uIWarrantNumberEdit.clear();
        await this.uIWarrantNumberEdit.fill(BaseData.getTestValue('Warrant').substring(3));
        await this.uIWarrantNumberEdit.press('Tab');
    }

    async veritfyStatusBarMessageAsEmpty(): Promise<void> {
        await expect(this.uIFooterStatusBar).not.toBeVisible();
    }

    async switchToMapTab(): Promise<void> {
        await this.uIMapTab.click();
        await this.page.waitForTimeout(1000);
        await this.browserHelpers.switchToFrame('GHydrantMap');
    }

    async selectAtJuris(): Promise<void> {
        await this.uIJurisComboBox.selectOption({ label: BaseData.getTestValue('Juris') });
        await this.page.waitForTimeout(3000);
    }

    async verifyChargeTabDisabled(): Promise<void> {
        const check = await this.uIChargesTab.getAttribute('class') || '';
        expect(check).toContain('Dis');
    }

    async EnterAtWarrantNo(): Promise<void> {
        const warrant = BaseData.getTestValue('Warrant');
        await this.uIWarrantYearEdit.fill(warrant.substring(0, 2));
        await this.uIWarrantNumberEdit.fill(warrant.substring(3));
        await this.uIWarrantNumberEdit.press('Tab');
    }

    async verifyNoErrorWindowsOpen(): Promise<void> {
        const pages = this.page.context().pages();
        expect(pages.length).toBe(1);
    }

    async reloadScreen(): Promise<void> {
        await this.page.reload();
    }

    async verifyAtWarrantNo(): Promise<void> {
        const warrantYear = await this.uIWarrantYearEdit.inputValue();
        const warrantNo = await this.uIWarrantNumberEdit.inputValue();
        expect(`${warrantYear}-${warrantNo}`).toBe(BaseData.getTestValue('Warrant'));
    }

    async verify8501AcknowledgePopup(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(8501) Enter Warrant No');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyChargeTabIsDisplayed(): Promise<void> {
        await expect(this.uIChargesTab).toBeVisible();
    }

    async switchToCustomTab(): Promise<void> {
        await this.uICustomTab.click();
    }

    async switchToQAFormsTab(): Promise<void> {
        await this.uIQAFormsTab.click();
    }

    async verifySaveNCloseIconIsDisabled(): Promise<void> {
        await expect(this.uISaveAndCloseButton).toBeDisabled();
    }

    async verifySaveNAddNewIconIsDisabled(): Promise<void> {
        await expect(this.uISaveNAddNewButton).toBeDisabled();
    }

    async verifyAtAuthority(jsonIndex?: number): Promise<void> {
        const stateKey = jsonIndex !== undefined ? `AuthState${jsonIndex}` : 'AuthState';
        const codeKey = jsonIndex !== undefined ? `AuthCode${jsonIndex}` : 'AuthCode';
        const selectedState = await this.uIAuthorityStateDropdown.locator('option:checked').textContent();
        expect(selectedState?.trim()).toBe(BaseData.getTestValue(stateKey));
        await expect(this.uIAuthorityLookUpEdit).toHaveValue(BaseData.getTestValue(codeKey));
    }

    async verifyMainTabIsDisplayed(): Promise<void> {
        await expect(this.uIMainTab).toBeVisible();
    }

    async verifyHistoryTabIsDisplayed(): Promise<void> {
        await expect(this.uIHistoryTab).toBeVisible();
    }

    async verifyMapTabIsDisplayed(): Promise<void> {
        await expect(this.uIMapTab).toBeVisible();
    }

    async verifyCustomTabIsDispalyed(): Promise<void> {
        await expect(this.uICustomTab).toBeVisible();
    }

    async verifyQAFormsTabIsDisplayed(): Promise<void> {
        await expect(this.uIQAFormsTab).toBeVisible();
    }

    async verifyExpiredLabelIsMandatory(): Promise<void> {
        const color = await this.uIExpiredLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(153, 0, 0, 1)');
    }

    async verifyExpiredDateIsEnabled(): Promise<void> {
        await expect(this.uIExpiredDateEdit).toBeEnabled();
    }

    async verifyExpiredLabelIsNonMandatory(): Promise<void> {
        const color = await this.uIExpiredLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(0, 0, 0, 1)');
    }

    async verifyExpiredDateIsDisabled(): Promise<void> {
        const classAttr = await this.uIExpiredDateEdit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async verifyAtFirstName(): Promise<void> {
        await expect(this.uIFirstNameEdit).toHaveValue(BaseData.getTestValue('FirstName'));
    }

    async verifyAtLastName(): Promise<void> {
        await expect(this.uILastNameEdit).toHaveValue(BaseData.getTestValue('LastName'));
    }

    async verifyWarrantYearIsNotBlank(): Promise<void> {
        const val = await this.uIWarrantYearEdit.inputValue();
        expect(val.trim()).not.toBe('');
    }

    async verifyWarrantNumberIsNotBlank(): Promise<void> {
        const val = await this.uIWarrantNumberEdit.inputValue();
        // expect(val.trim()).toBeGreaterThan('');
    }

    async verifyAtWantAndWarrant(jsonIndex: number): Promise<void> {
        const currentYear = new Date().getFullYear().toString().substring(2);
        await expect(this.uIWarrantYearEdit).toHaveValue(currentYear);
        await expect(this.uIWarrantNumberEdit).toHaveValue(BaseData.getTestValue(`WarrantNo${jsonIndex}`));
    }

    async verifyAtType(jsonIndex: number): Promise<void> {
        const selected = await this.uITypeComboBox.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(BaseData.getTestValue(`Type${jsonIndex}`));
    }

    async verifyAtLocation(jsonIndex: number): Promise<void> {
        const selectedState = await this.uIORILocationStateDropdown.locator('option:checked').textContent();
        expect(selectedState?.trim()).toBe(BaseData.getTestValue(`State${jsonIndex}`));
        await expect(this.uILocationCodeEdit).toHaveValue(BaseData.getTestValue(`LocationCode${jsonIndex}`));
    }

    async getWarrantNo(): Promise<string> {
        const year = await this.uIWarrantYearEdit.inputValue();
        const num = await this.uIWarrantNumberEdit.inputValue();
        return `${year}-${num}`;
    }

    async selectAtAuthorityState(jsonIndex: number): Promise<void> {
        await this.uIAuthorityStateDropdown.selectOption({ label: BaseData.getTestValue(`AuthorityState${jsonIndex}`) });
    }

    async selectAtLocationState(jsonIndex: number): Promise<void> {
        await this.uIORILocationStateDropdown.selectOption({ label: BaseData.getTestValue(`LocationState${jsonIndex}`) });
    }

    async enterAtLocation(jsonIndex: number): Promise<void> {
        await this.uILocationCodeEdit.fill(BaseData.getTestValue(`LocationCode${jsonIndex}`));
        await this.uILocationCodeEdit.press('Tab');
    }

    async enterAtCustom1(): Promise<void> {
        await this.uICustom1Edit.fill(BaseData.getTestValue('Custom1'));
    }

    async enterAtCustom2(): Promise<void> {
        await this.uICustom2Edit.fill(BaseData.getTestValue('Custom2'));
    }

    async enterAtCustom3(): Promise<void> {
        await this.uICustom3Edit.fill(BaseData.getTestValue('Custom3'));
    }

    async verifyAtCustom2(): Promise<void> {
        await expect(this.uICustom2Edit).toHaveValue(BaseData.getTestValue('Custom2'));
    }

    async verifyAtCustom3(): Promise<void> {
        await expect(this.uICustom3Edit).toHaveValue(BaseData.getTestValue('Custom3'));
    }

    async saveAndAddNew(): Promise<void> {
        await this.uISaveNAddNewButton.click();
        await this.popup.confirmYes();
    }
}

export class WarrantEntryMainTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIComplainantEdit: Locator;
    readonly uIHeldByEdit: Locator;
    readonly uIProtectionRestrainingComboBox: Locator;
    readonly uIJudgeNameTypeEdit: Locator;
    readonly uIJudgeNameTypeIDEdit: Locator;
    readonly uIJudgeLastNameEdit: Locator;
    readonly uIJudgeFirstNameEdit: Locator;
    readonly uIPetitionerNameTypeEdit: Locator;
    readonly uIPetitionerNameTypeIDEdit: Locator;
    readonly uIPetitionerLastNameEdit: Locator;
    readonly uIPetitionerFirstNameEdit: Locator;
    readonly uIServiceLimitComboBox: Locator;
    readonly uIwantChargeEdit: Locator;
    readonly uITotalBailEdit: Locator;
    readonly uIDetailChargesCheckBox: Locator;
    readonly uIProtectionRestrainingOrderTextView: Locator;
    readonly uIWantChargeTextView: Locator;
    readonly uICautionTextView: Locator;
    readonly uICautionComboBox: Locator;
    readonly uIViolationDateTextView: Locator;
    readonly uIViolationDateEdit: Locator;
    readonly uIGeoServiceLimitTextView: Locator;
    readonly uIGeoServiceLimitComboBox: Locator;
    readonly uICautionRemarksTextView: Locator;
    readonly uICautionRemarksEdit: Locator;
    readonly uIBailAmountTextView: Locator;
    readonly uIBailAmountEdit: Locator;
    readonly uIDateOfEmancipationTextView: Locator;
    readonly uIDateOfEmancipationEdit: Locator;
    readonly uITypeOfOrderComboBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIComplainantEdit = page.locator('#tabWarrants_tmpl0_UsrMain1_txtComplainant');
        this.uIHeldByEdit = page.locator('#tabWarrants_tmpl0_UsrMain1_txtHeldBy');
        this.uIProtectionRestrainingComboBox = page.locator('#tabWarrants_tmpl0_UsrMain1_cddRestraining_DropDown');
        this.uIJudgeNameTypeEdit = page.locator('#tabWarrants_tmpl0_UsrMain1_nameJudge_NameType');
        this.uIJudgeNameTypeIDEdit = page.locator('#tabWarrants_tmpl0_UsrMain1_nameJudge_NameTypeID');
        this.uIJudgeLastNameEdit = page.locator('#tabWarrants_tmpl0_UsrMain1_nameJudge_LastName');
        this.uIJudgeFirstNameEdit = page.locator('#tabWarrants_tmpl0_UsrMain1_nameJudge_FirstName');
        this.uIPetitionerNameTypeEdit = page.locator('#tabWarrants_tmpl0_UsrMain1_namePetitioner_NameType');
        this.uIPetitionerNameTypeIDEdit = page.locator('#tabWarrants_tmpl0_UsrMain1_namePetitioner_NameTypeID');
        this.uIPetitionerLastNameEdit = page.locator('#tabWarrants_tmpl0_UsrMain1_namePetitioner_LastName');
        this.uIPetitionerFirstNameEdit = page.locator('#tabWarrants_tmpl0_UsrMain1_namePetitioner_FirstName');
        this.uIServiceLimitComboBox = page.locator('#tabWarrants_tmpl0_UsrMain1_cddServiceLimit_DropDown');
        this.uIwantChargeEdit = page.locator('#tabWarrants_tmpl0_UsrMain1_txtChargeDesc');
        this.uITotalBailEdit = page.locator('#tabWarrants_tmpl0_UsrMain1_curBailAmt');
        this.uIDetailChargesCheckBox = page.locator('#tabWarrants_tmpl0_UsrMain1_chkDetailCharges');
        this.uIProtectionRestrainingOrderTextView = page.locator('#tabWarrants_tmpl0_UsrMain1_lblRestraining');
        this.uIWantChargeTextView = page.locator('#tabWarrants_tmpl0_UsrMain1_lblDataChargeDescription');
        this.uICautionTextView = page.locator('#tabWarrants_tmpl0_UsrMain1_lblCaution');
        this.uICautionComboBox = page.locator('#tabWarrants_tmpl0_UsrMain1_cddCaution_DropDown');
        this.uIViolationDateTextView = page.locator('#tabWarrants_tmpl0_UsrMain1_lblViolationDate');
        this.uIViolationDateEdit = page.locator('#tabWarrants_tmpl0_UsrMain1_dttmViolation_KPIDttmCtrl');
        this.uIGeoServiceLimitTextView = page.locator('#tabWarrants_tmpl0_UsrMain1_lblGeo');
        this.uIGeoServiceLimitComboBox = page.locator('#tabWarrants_tmpl0_UsrMain1_cddGeoSrv_DropDown');
        this.uICautionRemarksTextView = page.locator('#tabWarrants_tmpl0_UsrMain1_lblRemarks');
        this.uICautionRemarksEdit = page.locator('#tabWarrants_tmpl0_UsrMain1_txtRemarks');
        this.uIBailAmountTextView = page.locator('#tabWarrants_tmpl0_UsrMain1_lblChargesBail');
        this.uIBailAmountEdit = page.locator('#tabWarrants_tmpl0_UsrMain1_curBailAmt');
        this.uIDateOfEmancipationTextView = page.locator('#tabWarrants_tmpl0_UsrMain1_lblEmancipation');
        this.uIDateOfEmancipationEdit = page.locator('#tabWarrants_tmpl0_UsrMain1_dttmEmancipation_KPIDttmCtrl');
        this.uITypeOfOrderComboBox = page.locator('#tabWarrants_tmpl0_UsrMain1_cddTypofOrder_DropDown');
    }

    async EnterJudgeName(): Promise<void> {
        await this.uIJudgeNameTypeEdit.fill('a');
        await this.uIJudgeNameTypeIDEdit.fill('42');
        await this.uIJudgeNameTypeIDEdit.press('Tab');
    }

    async EnterPetitionerName(): Promise<void> {
        await this.uIPetitionerLastNameEdit.fill('a');
        await this.uIPetitionerFirstNameEdit.press('Tab');
        const grid = this.page.locator('#grdNames');
        await this.grid.selectRandomRow(grid);
        await this.popup.selectNameButton.click();
    }

    async SelectServiceLimitasStateWide(): Promise<void> {
        await this.uIServiceLimitComboBox.selectOption({ label: 'State Wide' });
    }

    async SelectServiceLimit(): Promise<void> {
        const options = await this.uIServiceLimitComboBox.locator('option').allInnerTexts();
        const validOptions = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOption = validOptions[Math.floor(Math.random() * validOptions.length)];
        await this.uIServiceLimitComboBox.selectOption({ label: randomOption });
    }

    async EnterWantCharge(): Promise<void> {
        await this.uIwantChargeEdit.fill('358');
    }

    async EnterAsWantCharge(): Promise<void> {
        await this.uIwantChargeEdit.fill('Aganist Law');
    }

    async SelectProtectionOrderRestrainingOrder(): Promise<void> {
        const options = await this.uIProtectionRestrainingComboBox.locator('option').allInnerTexts();
        const validOptions = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOption = validOptions[Math.floor(Math.random() * validOptions.length)];
        await this.uIProtectionRestrainingComboBox.selectOption({ label: randomOption });
    }

    async EnterBailAs100(): Promise<void> {
        await this.uITotalBailEdit.clear();
        await this.uITotalBailEdit.fill('100');
    }

    async ClickDetailedChargesCheckBox(): Promise<void> {
        await this.uIDetailChargesCheckBox.click();
    }

    async ClickProtectionRestrainingOrderTextView(): Promise<void> {
        await this.uIProtectionRestrainingOrderTextView.click();
    }

    async ClickBailAmountTextView(): Promise<void> {
        await this.uIBailAmountTextView.click();
    }

    async ClickCautionRemarksTextView(): Promise<void> {
        await this.uICautionRemarksTextView.click();
    }

    async ClickCautionTextView(): Promise<void> {
        await this.uICautionTextView.click();
    }

    async ClickDateOfEmancipationTextView(): Promise<void> {
        await this.uIDateOfEmancipationTextView.click();
    }

    async ClickGeoServiceLimitTextView(): Promise<void> {
        await this.uIGeoServiceLimitTextView.click();
    }

    async ClickViolationDateTextView(): Promise<void> {
        await this.uIViolationDateTextView.click();
    }

    async ClickWantChargeTextView(): Promise<void> {
        await this.uIWantChargeTextView.click();
    }

    async VerifyCompliantAsComplaint(): Promise<void> {
        await expect(this.uIComplainantEdit).toHaveValue('Complainant');
    }

    async VerifyHeldByAsDefault(): Promise<void> {
        await expect(this.uIHeldByEdit).toHaveValue('Default');
    }

    async VerifyProtectionRestrainingFieldHide(): Promise<void> {
        await expect(this.uIProtectionRestrainingComboBox).toBeDisabled();
    }

    async VerifyCautionFieldHide(): Promise<void> {
        await expect(this.uICautionComboBox).toBeDisabled();
    }

    async VerifyWantChargeNameChanged(): Promise<void> {
        const text = await this.uIWantChargeTextView.innerText();
        expect(text).toContain('Charge');
    }

    async VerifyViolationDateFieldHide(): Promise<void> {
        const classAttr = await this.uIViolationDateEdit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async VerifyGeoServiceLimitFieldHide(): Promise<void> {
        await expect(this.uIGeoServiceLimitComboBox).toBeDisabled();
    }

    async VerifyCautionRemarksFieldHide(): Promise<void> {
        const classAttr = await this.uICautionRemarksEdit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async VerifyBailAmountFieldHide(): Promise<void> {
        const classAttr = await this.uIBailAmountEdit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async VerifyDateOfEmancipationFieldHide(): Promise<void> {
        const classAttr = await this.uIDateOfEmancipationEdit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async VerifyProtectionRestrainingOrderAsMandatory(): Promise<void> {
        const attr = await this.uIProtectionRestrainingOrderTextView.getAttribute('kpifieldusage') || '';
        expect(attr).toContain('Mandatory');
    }

    async VerifyCautionAsMandatory(): Promise<void> {
        const attr = await this.uICautionTextView.getAttribute('kpifieldusage') || '';
        expect(attr).toContain('Mandatory');
    }

    async VerifyWantChargeAsMandatory(): Promise<void> {
        const attr = await this.uIWantChargeTextView.getAttribute('kpifieldusage') || '';
        expect(attr).toContain('Mandatory');
    }

    async VerifyViolationDateAsMandatory(): Promise<void> {
        const attr = await this.uIViolationDateTextView.getAttribute('kpifieldusage') || '';
        expect(attr).toContain('Mandatory');
    }

    async VerifyGeoServiceLimitAsMandatory(): Promise<void> {
        const attr = await this.uIGeoServiceLimitTextView.getAttribute('kpifieldusage') || '';
        expect(attr).toContain('Mandatory');
    }

    async VerifyCautionRemarksAsMandatory(): Promise<void> {
        const attr = await this.uICautionRemarksTextView.getAttribute('kpifieldusage') || '';
        expect(attr).toContain('Mandatory');
    }

    async VerifyBailAmountAsMandatory(): Promise<void> {
        const attr = await this.uIBailAmountTextView.getAttribute('kpifieldusage') || '';
        expect(attr).toContain('Mandatory');
    }

    async VerifyDateOfEmancipationAsMandatory(): Promise<void> {
        const attr = await this.uIDateOfEmancipationTextView.getAttribute('kpifieldusage') || '';
        expect(attr).toContain('Mandatory');
    }

    async enterAtWantCharge(): Promise<void> {
        await this.uIwantChargeEdit.fill(BaseData.getTestValue('WantCharge'));
    }

    async enterAtPetitionerNameID(): Promise<void> {
        const nameId = BaseData.getTestValue('PetitionerNameID');
        await this.uIPetitionerNameTypeEdit.fill(nameId.substring(0, 1));
        await this.uIPetitionerNameTypeEdit.press('Tab');
        await this.uIPetitionerNameTypeIDEdit.fill(nameId.substring(2));
        await this.uIPetitionerNameTypeIDEdit.press('Tab');
    }

    async verifyAtActiveDateOfEmancipation(birthDate: string): Promise<void> {
        const attribute = await this.uIDateOfEmancipationEdit.inputValue();
        const currentYear = new Date().getFullYear();
        const birthYear = parseInt(birthDate.substring(6));
        const age = 18 - (currentYear - birthYear);
        const ageOfEighteen = currentYear + age;
        expect(attribute).toBe(`${birthDate.substring(0, 6)}${ageOfEighteen}`);
    }

    async verifyAtDateOfEmancipation(): Promise<void> {
        const attribute = await this.uIDateOfEmancipationEdit.inputValue();
        expect(attribute).toContain(BaseData.getTestValue('DateOfEmancipation'));
    }

    async SelectAtProtectionOrderRestrainingOrder(): Promise<void> {
        await this.uIProtectionRestrainingComboBox.selectOption({ label: BaseData.getTestValue('ProtectionOrder') });
    }

    async selectAtTypeOfOrder(): Promise<void> {
        await this.uITypeOfOrderComboBox.selectOption({ label: BaseData.getTestValue('TypeOfOrder') });
        await this.uITypeOfOrderComboBox.press('Tab');
    }

    async verifyDetailedChargesCheckboxEnabled(): Promise<void> {
        await expect(this.uIDetailChargesCheckBox).toBeChecked();
    }

    async verifyDetailedChargesCheckboxDisabled(): Promise<void> {
        await expect(this.uIDetailChargesCheckBox).not.toBeChecked();
    }

    async deselectTypeOfOrder(): Promise<void> {
        await this.uITypeOfOrderComboBox.selectOption({ label: '--' });
        await this.uITypeOfOrderComboBox.press('Tab');
    }

    async verifyAtTypeOfOrder(): Promise<void> {
        const selected = await this.uITypeOfOrderComboBox.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(BaseData.getTestValue('TypeOfOrder'));
    }

    async verifyAtComplainant(jsonIndex: number): Promise<void> {
        await expect(this.uIComplainantEdit).toHaveValue(BaseData.getTestValue(`Complainant${jsonIndex}`));
    }

    async verifyAtHeldBy(jsonIndex: number): Promise<void> {
        await expect(this.uIHeldByEdit).toHaveValue(BaseData.getTestValue(`HeldBy${jsonIndex}`));
    }
}

export class ClearTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uIDispostionComboBox: Locator;
    readonly uISaveTabButton: Locator;
    readonly uIResetTabButton: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIRemarksEdit: Locator;
    readonly uIPFEdit: Locator;
    readonly uIPFLookupButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIByPfDescriptionEdit: Locator;
    readonly uIByPFlabel: Locator;
    readonly uIByORILabel: Locator;
    readonly uIByORIState: Locator;
    readonly uIByORICodeEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);

        this.uIDispostionComboBox = page.locator('#cddDisposition_DropDown');
        this.uISaveTabButton = page.locator('#cmdInternalSave');
        this.uIResetTabButton = page.locator('#cmdInternalRefresh');
        this.uIDateEdit = page.locator('#dtcClearDate_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='dtcClearDate_Time']//input");
        this.uIRemarksEdit = page.locator('#txtClearRemarks');
        this.uIPFEdit = page.locator('#lupByPF_CodeValue');
        this.uIPFLookupButton = page.locator('#lupByPF_imgBtn');
        this.uIClearButton = page.locator('#imgClear');
        this.uIByPfDescriptionEdit = page.locator('#lupByPF_CodeDescription');
        this.uIByPFlabel = page.locator('#lblByPF');
        this.uIByORILabel = page.locator('#lblByORI');
        this.uIByORIState = page.locator('#ORIAuthority_KPIState');
        this.uIByORICodeEdit = page.locator('#ORIAuthority_lupORI_CodeValue');
    }

    async SelectDispostionAsCancelled(): Promise<void> {
        await this.uIDispostionComboBox.fill('Cancelled');
    }

    async SelectDispostionAsWithdrawn(): Promise<void> {
        await this.uIDispostionComboBox.fill('Withdrawn');
    }

    async EnterCurrentDateAndTime(): Promise<void> {
        await this.uIDateEdit.click();
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.click();
        await this.uITimeEdit.press('Tab');
    }

    async EnterLoggedPF(): Promise<void> {
        await this.uIPFEdit.click();
        await this.uIPFEdit.press('Tab');
    }

    async EnterRemarks(): Promise<void> {
        await this.uIRemarksEdit.fill(RandomHelpers.randomString(56));
    }

    async EnterRemarksAsWithdrawn(): Promise<void> {
        await this.uIRemarksEdit.fill('Withdrawn');
    }

    async VerifyAcknowledgeUpdateClearTab(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(1051) Updated data exists in the Clear tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async VerifyCurrentDate(): Promise<void> {
        await expect(this.uIDateEdit).toHaveValue(DateHelpers.getCurrentDate());
    }

    async VerifyCurrentTime(): Promise<void> {
        await expect(this.uITimeEdit).not.toHaveValue('');
    }

    async VerifySaveAndResetButtonGrayedOut(): Promise<void> {
        const saveClass = await this.uISaveTabButton.getAttribute('class') || '';
        const resetClass = await this.uIResetTabButton.getAttribute('class') || '';
        expect(saveClass).toContain('DisabledImgMnuItem');
        expect(resetClass).toContain('DisabledImgMnuItem');
    }

    async VerifyDispositionGrayedOut(): Promise<void> {
        await expect(this.uIDispostionComboBox).toBeDisabled();
    }

    async VerifyDateGrayedOut(): Promise<void> {
        const classAttr = await this.uIDateEdit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async SaveClearTab(): Promise<void> {
        await this.uISaveTabButton.click();
        await this.popup.confirmYes();
    }

    async SelectAtDispostion(): Promise<void> {
        await this.uIDispostionComboBox.fill(BaseData.getTestValue('Disposition'));
    }

    async tabOutDisposition(): Promise<void> {
        await this.uIDispostionComboBox.press('Tab');
    }

    async verifyAtDisposition(): Promise<void> {
        const selected = await this.uIDispostionComboBox.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(BaseData.getTestValue('Disposition'));
    }

    async verifyAtByPFCode(): Promise<void> {
        await expect(this.uIPFEdit).toHaveValue(BaseData.getTestValue('ByPfCode'));
    }

    async verifyAtByPFDescription(): Promise<void> {
        await expect(this.uIByPfDescriptionEdit).toHaveValue(BaseData.getTestValue('ByPfDescription'));
    }

    async clickClearButton(): Promise<void> {
        await this.uIClearButton.click();
    }

    async verifyByPFIsMandatory(): Promise<void> {
        const color = await this.uIByPFlabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(153, 0, 0, 1)');
    }

    async verifyByORIIsMandatory(): Promise<void> {
        const color = await this.uIByORILabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(153, 0, 0, 1)');
    }

    async selectAtByORI(): Promise<void> {
        await this.uIByORIState.selectOption({ label: BaseData.getTestValue('ByORIState') });
    }

    async enterAtByORICode(): Promise<void> {
        await this.uIByORICodeEdit.fill(BaseData.getTestValue('ByORICode'));
        await this.uIByORICodeEdit.press('Tab');
    }

    async verifyByPFIsNonMandatory(): Promise<void> {
        const color = await this.uIByPFlabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(0, 0, 153, 1)');
    }
}

export class StatusTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uIStatusComboBox: Locator;
    readonly uINewLocationSateComboBox: Locator;
    readonly uINewLocationCodeEdit: Locator;
    readonly uINewLocationCodeLookupButton: Locator;
    readonly uIStatusDateEdit: Locator;
    readonly uIRemarksEdit: Locator;
    readonly uISaveTabButton: Locator;
    readonly uIResetTabButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);

        this.uIStatusComboBox = page.locator('#cddStatus_DropDown');
        this.uINewLocationSateComboBox = page.locator('#ORINewLocation_KPIState');
        this.uINewLocationCodeEdit = page.locator('#ORINewLocation_lupORI_CodeValue');
        this.uINewLocationCodeLookupButton = page.locator('#ORINewLocation_lupORI_imgBtn');
        this.uIStatusDateEdit = page.locator('#dtcStatusDate_KPIDttmCtrl');
        this.uIRemarksEdit = page.locator('#txtRemarks');
        this.uISaveTabButton = page.locator('#cmdInternalSave');
        this.uIResetTabButton = page.locator('#cmdInternalRefresh');
    }

    async SelectStatusasActiveOpen(): Promise<void> {
        await this.uIStatusComboBox.fill('Active/Open');
    }

    async SaveStatusTab(): Promise<void> {
        await this.uISaveTabButton.click();
        await this.popup.confirmYes();
    }

    async SelectStatusAsOther(): Promise<void> {
        await this.uIStatusComboBox.fill('Other');
    }

    async EnterDateAsCurrentDate(): Promise<void> {
        await this.uIStatusDateEdit.fill(DateHelpers.getCurrentDate());
    }

    async EnterRemarksAsReOpentheWarrant(): Promise<void> {
        await this.uIRemarksEdit.fill('ReOpen the Warrant');
    }

    async VerifyAcknowledgeUpdateStatus(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(1051) Updated data exists in the Status tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async VerifyAllFieldsGrayedOut(): Promise<void> {
        await expect(this.uIStatusComboBox).toBeDisabled();
        const dateClass = await this.uIStatusDateEdit.getAttribute('class') || '';
        expect(dateClass).toContain('textboxInactive');
        const remarksClass = await this.uIRemarksEdit.getAttribute('class') || '';
        expect(remarksClass).toContain('textboxInactive');
        const saveClass = await this.uISaveTabButton.getAttribute('class') || '';
        expect(saveClass).toContain('DisabledImgMnuItem');
    }

    async SelectAtStatus(): Promise<void> {
        await this.uIStatusComboBox.fill(BaseData.getTestValue('UpdateStatus'));
        await this.uIStatusComboBox.press('Tab');
    }
}

export class ChargesTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly browserHelpers: BrowserHelpers;

    readonly uIChargeLookupButton: Locator;
    readonly uIChargeEdit: Locator;
    readonly uIOCCCodeEdit: Locator;
    readonly uIOCCCodeLookupButton: Locator;
    readonly uICountEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIChargeGrid: Locator;
    readonly uIDeleteSymbol: Locator;
    readonly uICaseYearEditSP1009True: Locator;
    readonly uICaseNumberEditSP1009True: Locator;
    readonly uICaseInfoIcon: Locator;
    readonly uICaseYearEditSP1009False: Locator;
    readonly uICaseNumberEditSP1009False: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.browserHelpers = new BrowserHelpers(page);

        this.uIChargeLookupButton = page.locator('#tabWarrants_tmpl1_UsrCharges1_lupCharge_imgBtn');
        this.uIChargeEdit = page.locator('#tabWarrants_tmpl1_UsrCharges1_lupCharge_CodeValue');
        this.uIOCCCodeEdit = page.locator('#tabWarrants_tmpl1_UsrCharges1_lupNCIC_CodeValue');
        this.uIOCCCodeLookupButton = page.locator('#tabWarrants_tmpl1_UsrCharges1_lupNCIC_imgBtn');
        this.uICountEdit = page.locator('#tabWarrants_tmpl1_UsrCharges1_txtCount');
        this.uIAddButton = page.locator('#tabWarrants_tmpl1_UsrCharges1_imgAdd');
        this.uIClearButton = page.locator('#tabWarrants_tmpl1_UsrCharges1_imgClear');
        this.uIChargeGrid = page.locator('#tabWarrants_tmpl1_UsrCharges1_grdCharges');
        this.uIDeleteSymbol = page.locator("//div[@id='tabWarrants_tmpl1_UsrCharges1_grdCharges']//td[contains(@class,'Delete_Icon_Style')]");
        this.uICaseYearEditSP1009True = page.locator('#tabWarrants_tmpl1_UsrCharges1_nbrCase_Year');
        this.uICaseNumberEditSP1009True = page.locator('#tabWarrants_tmpl1_UsrCharges1_nbrCase_Number');
        this.uICaseInfoIcon = page.locator('#tabWarrants_tmpl1_UsrCharges1_nbrCase_imgBtn');
        this.uICaseYearEditSP1009False = page.locator('#tabWarrants_tmpl1_UsrCharges1_nbrNotCaseNo_Year');
        this.uICaseNumberEditSP1009False = page.locator('#tabWarrants_tmpl1_UsrCharges1_nbrNotCaseNo_Number');
    }

    async EnterAtCharge(): Promise<void> {
        await this.uIChargeEdit.fill(BaseData.getTestValue('charge'));
        await this.uIChargeEdit.press('Tab');
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifyAtCharge(): Promise<void> {
        await expect(this.uIChargeEdit).toHaveValue(BaseData.getTestValue('Charge'));
    }

    async clickChargeLookupIcon(): Promise<void> {
        await this.uIChargeLookupButton.click();
    }

    async verifyAtChargeInGrid(): Promise<void> {
        const charge = await this.grid.getGridCellInnerText(this.uIChargeGrid, 'Charge', 0);
        expect(charge).toContain(BaseData.getTestValue('Charge'));
        expect(charge).toContain(BaseData.getTestValue('Description').substring(3));
    }

    async enterCharge(c: number, count: number): Promise<void> {
        for (let i = c; i <= count; i++) {
            await this.page.waitForTimeout(600);
            await this.uIChargeLookupButton.click();
            await this.browserHelpers.switchToPageByTitle('Coded Search');
            await this.page.waitForTimeout(500);
            const helpTable = this.page.locator('#grdSrch, #grdKPIHelp');
            await this.grid.selectRowByIndex(helpTable, i);
            await this.browserHelpers.switchToPageByTitle('Warrant Entry');
            const chargesTab = this.page.locator("//span[contains(text(),'Charges')]");
            await chargesTab.click();
            await this.uIAddButton.click();
        }
    }

    async deleteAtChargeInGrid(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uIChargeGrid, BaseData.getTestValue('Charge'));
        await this.popup.confirmYes();
    }

    async deleteAtCharge1InGrid(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uIChargeGrid, BaseData.getTestValue('Charge1'));
        await this.popup.confirmYes();
    }

    async verifyDeleteIconPresentInTheGrid(): Promise<void> {
        await expect(this.uIDeleteSymbol).toBeVisible();
    }

    async verifyAtChargeIsDeleted(): Promise<void> {
        const values = await this.grid.getGridTableColumnValues(this.uIChargeGrid, 'X');
        for (const item of values) {
            expect(item).not.toBe(BaseData.getTestValue('Charge'));
            expect(item).not.toBe(BaseData.getTestValue('Charge1'));
        }
    }

    async tabOutCharge(): Promise<void> {
        await this.uIChargeEdit.press('Tab');
    }

    async enterAtCaseNoSP1009AsTrue(jsonIndex: number): Promise<void> {
        const caseNo = BaseData.getTestValue(`CaseNo${jsonIndex}`);
        await this.uICaseYearEditSP1009True.fill(caseNo.substring(0, 2));
        await this.uICaseYearEditSP1009True.press('Tab');
        await this.uICaseNumberEditSP1009True.fill(caseNo.substring(3));
        await this.uICaseNumberEditSP1009True.press('Tab');
    }

    async verify1040AcknowledgePopup(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(1040) Number Does Not Exist');
        await this.popup.acknowledgeOkButton.click();
    }

    async verify1040AcknowledgePopupNotOccurs(): Promise<void> {
        const modalVisible = await this.popup.modalBody.isVisible().catch(() => false);
        if (modalVisible) {
            const text = await this.popup.modalBody.innerText();
            expect(text).not.toContain('(1040) Number Does Not Exist');
        }
    }

    async verifyCaseInfoIconIsDisplayed(): Promise<void> {
        await expect(this.uICaseInfoIcon).toBeVisible();
    }

    async clickCaseInfoIcon(): Promise<void> {
        await this.uICaseInfoIcon.click();
    }

    async clearCaseNoSP1009AsTrue(): Promise<void> {
        await this.uICaseYearEditSP1009True.clear();
        await this.uICaseNumberEditSP1009True.clear();
    }

    async verifyCaseInfoIconIsNotDisplayed(): Promise<void> {
        await expect(this.uICaseInfoIcon).not.toBeVisible();
    }

    async enterAtCaseNoSP1009AsFalse(jsonIndex: number): Promise<void> {
        const caseNo = BaseData.getTestValue(`CaseNo${jsonIndex}`);
        await this.uICaseYearEditSP1009False.fill(caseNo.substring(0, 2));
        await this.uICaseYearEditSP1009False.press('Tab');
        await this.uICaseNumberEditSP1009False.fill(caseNo.substring(3));
        await this.uICaseNumberEditSP1009False.press('Tab');
    }

    async clearCaseNoSP1009AsFalse(): Promise<void> {
        await this.uICaseYearEditSP1009False.clear();
        await this.uICaseNumberEditSP1009False.clear();
    }
}

export class NarrativeTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly browserHelpers: BrowserHelpers;

    readonly uINarrativeEdit: Locator;
    readonly uILockEntryCheckBox: Locator;
    readonly uIEmplNoEdit: Locator;
    readonly uIEmplNoTextView: Locator;
    readonly uIEmplNoLookupButton: Locator;
    readonly uIDateEdit: Locator;
    readonly uITemplateComboBox: Locator;
    readonly uILoadButton: Locator;
    readonly uIAddNewOrEditButton: Locator;
    readonly uINarrativeRichTextEdit: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIlockEntryCheckBox: Locator;
    readonly uILockEntryLabel: Locator;
    readonly uIEmplNoDescriptionEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.browserHelpers = new BrowserHelpers(page);

        this.uINarrativeEdit = page.locator('#tabWarrants_tmpl2_UsrNarrative1_rteKPITxt_contentIframe');
        this.uILockEntryCheckBox = page.locator('#tabWarrants_tmpl2_UsrNarrative1_chkLock');
        this.uIEmplNoEdit = page.locator('#tabWarrants_tmpl2_UsrNarrative1_lupEmpPFID_CodeValue');
        this.uIEmplNoTextView = page.locator("//span[@id ='tabWarrants_tmpl2_UsrNarrative1_lblEmp']/ancestor::td[@align='right']");
        this.uIEmplNoLookupButton = page.locator('#tabWarrants_tmpl2_UsrNarrative1_lupEmpPFID_imgBtn');
        this.uIDateEdit = page.locator('#tabWarrants_tmpl2_UsrNarrative1_dtEmpDate_KPIDttmCtrl');
        this.uITemplateComboBox = page.locator('#tabWarrants_tmpl2_UsrNarrative1_cddTemplate');
        this.uILoadButton = page.locator('#tabWarrants_tmpl2_UsrNarrative1_btnLoad');
        this.uIAddNewOrEditButton = page.locator('#tabWarrants_tmpl2_UsrNarrative1_btnAddNew');
        this.uINarrativeRichTextEdit = page.locator('#tabWarrants_tmpl2_UsrNarrative1_rteKPITxt_contentIframe');
        this.uIAddNewButton = page.locator('#tabWarrants_tmpl2_UsrNarrative1_btnAddNew');
        this.uIlockEntryCheckBox = page.locator('#tabWarrants_tmpl2_UsrNarrative1_chkLock');
        this.uILockEntryLabel = page.locator("//label[text()='Lock Entry']");
        this.uIEmplNoDescriptionEdit = page.locator('#tabWarrants_tmpl2_UsrNarrative1_lupEmpPFID_CodeDescription');
    }

    async EnterGroupofString(): Promise<void> {
        const frame = this.page.frameLocator('#tabWarrants_tmpl2_UsrNarrative1_rteKPITxt_contentIframe');
        await frame.locator('body').fill(RandomHelpers.randomString(200));
    }

    async ClickLockEntryCheckBox(): Promise<void> {
        await this.uILockEntryCheckBox.click();
    }

    async EnterAtEmpl(jsonIndex?: number): Promise<void> {
        const key = jsonIndex !== undefined ? `Empl${jsonIndex}` : 'UserName';
        await this.uIEmplNoEdit.fill(BaseData.getTestValue(key));
        await this.uIEmplNoEdit.press('Tab');
        const popupExist = await this.browserHelpers.windowExistsByTitle('Coded Search');
        if (popupExist) {
            //await this.popup.switchToCodedSearch();
            // await this.popup.kPICodedLookup.selectAtPFCode();
        }
    }

    async VerifyNarativeTextNonEditable(): Promise<void> {
        const frame = this.page.frameLocator('#tabWarrants_tmpl2_UsrNarrative1_rteKPITxt_contentIframe');
        const isReadonly = await frame.locator('body').getAttribute('contenteditable');
        expect(isReadonly).toBe('false');
    }

    async VerifyEmplNoMandatory(): Promise<void> {
        const classAttr = await this.uIEmplNoTextView.getAttribute('class') || '';
        expect(classAttr).toContain('req');
    }

    async enterAtNarrativeEmplDate(): Promise<void> {
        await this.uIDateEdit.fill(DateHelpers.getCurrentDate());
    }

    async VerifyTemplateDisabled(): Promise<void> {
        await expect(this.uITemplateComboBox).toBeDisabled();
        await expect(this.uILoadButton).toBeDisabled();
    }

    async verifyAtLockEntryAndEmpFieldsDisplayed(): Promise<void> {
        await expect(this.uIEmplNoEdit).toBeVisible();
        await expect(this.uILockEntryCheckBox).toBeVisible();
    }

    async verifyAtLockEntryAndEmpFieldsNotDisplayed(): Promise<void> {
        await expect(this.uILockEntryCheckBox).not.toBeVisible();
        await expect(this.uIEmplNoEdit).not.toBeVisible();
    }

    async VerifyAtNarrativeText(jsonIndex?: number): Promise<void> {
        const key = jsonIndex !== undefined ? `TextData${jsonIndex}` : 'TextData';
        const frame = this.page.frameLocator('#tabWarrants_tmpl2_UsrNarrative1_rteKPITxt_contentIframe');
        const text = await frame.locator('body').innerText();
        expect(text.trim()).toBe(BaseData.getTestValue(key));
    }

    async VerifyAddNewOrEditDesabled(): Promise<void> {
        await expect(this.uIAddNewOrEditButton).toBeDisabled();
    }

    async selectAtTemplate(i: number): Promise<void> {
        await this.uITemplateComboBox.selectOption({ label: BaseData.getTestValue(`Template${i}`) });
    }

    async clickLoadButton(): Promise<void> {
        await this.uILoadButton.click();
    }

    async getRichText(): Promise<string> {
        const frame = this.page.frameLocator('#tabWarrants_tmpl2_UsrNarrative1_rteKPITxt_contentIframe');
        return await frame.locator('body').innerText();
    }

    async verifyRichTextIsDisplayed(richText: string): Promise<void> {
        const frame = this.page.frameLocator('#tabWarrants_tmpl2_UsrNarrative1_rteKPITxt_contentIframe');
        const text = await frame.locator('body').innerText();
        expect(text).toContain(richText);
    }

    async clickAddNewOrEditButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async EnterAtRichText(jsonIndex?: number): Promise<void> {
        const key = jsonIndex !== undefined ? `TextData${jsonIndex}` : 'TextData';
        const frame = this.page.frameLocator('#tabWarrants_tmpl2_UsrNarrative1_rteKPITxt_contentIframe');
        await frame.locator('body').fill(BaseData.getTestValue(key));
    }

    async verifyLockEntryCheckBoxIsNotDisplayed(): Promise<void> {
        await expect(this.uIlockEntryCheckBox).not.toBeVisible();
    }

    async verifyLockEntryLabelIsNotDisplayed(): Promise<void> {
        await expect(this.uILockEntryLabel).not.toBeVisible();
    }

    async verifyLockEntryCheckBoxIsDisplayed(): Promise<void> {
        await expect(this.uIlockEntryCheckBox).toBeVisible();
    }

    async verifyLockEntryLabelIsDisplayed(): Promise<void> {
        await expect(this.uILockEntryLabel).toBeVisible();
    }

    async enterAtEmpl(jsonIndex: number): Promise<void> {
        await this.uIEmplNoEdit.fill(BaseData.getTestValue(`Empl${jsonIndex}`));
        await this.uIEmplNoEdit.press('Tab');
    }

    async verifyEmplCodeIsDisabled(): Promise<void> {
        await expect(this.uIEmplNoEdit).toBeDisabled();
    }

    async verifyEmplCodeDescriptionIsDisabled(): Promise<void> {
        await expect(this.uIEmplNoDescriptionEdit).toBeDisabled();
    }

    async verifyEmplDateIsDisabled(): Promise<void> {
        await expect(this.uIDateEdit).toBeDisabled();
    }
}

export class ServiceTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly browserHelpers: BrowserHelpers;

    readonly uIServiceAttemptedDateEdit: Locator;
    readonly uIServiceAttemptedTimeEdit: Locator;
    readonly uIAttemptedByEdit: Locator;
    readonly uIAttemptedByLookupButton: Locator;
    readonly uINextAttemptedDateEdit: Locator;
    readonly uICommentsEdit: Locator;
    readonly uISaveTabButton: Locator;
    readonly uIResetTabButton: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.browserHelpers = new BrowserHelpers(page);

        this.uIServiceAttemptedDateEdit = page.locator('#dtServiceAttmd_Date_KPIDttmCtrl');
        this.uIServiceAttemptedTimeEdit = page.locator("//table[@id='dtServiceAttmd_Time']//input");
        this.uIAttemptedByEdit = page.locator('#lupAttemptedBy_CodeValue');
        this.uIAttemptedByLookupButton = page.locator('#lupAttemptedBy_imgBtn');
        this.uINextAttemptedDateEdit = page.locator('#dtcNextAttempt_KPIDttmCtrl');
        this.uICommentsEdit = page.locator('#txtRemarks');
        this.uISaveTabButton = page.locator('#cmdInternalSave');
        this.uIResetTabButton = page.locator('#cmdInternalRefresh');
        this.uIBottomLeftSideStatusBar = page.locator("//table[@class='layout']//td[@class = 'status']/table/tbody/tr/td/b");
    }

    async TabServiceAttemptedDate(): Promise<void> {
        await this.uIServiceAttemptedDateEdit.click();
        await this.uIServiceAttemptedDateEdit.press('Tab');
    }

    async EnterAtAttemptedBy(): Promise<void> {
        await this.uIAttemptedByEdit.fill(BaseData.getTestValue('UserName'));
        await this.uIAttemptedByEdit.press('Tab');
        const popupExist = await this.browserHelpers.windowExistsByTitle('Coded Search');
        if (popupExist) {
            // await this.popup.switchToCodedSearch();
            // await this.popup.kPICodedLookup.selectAtPFCode();
        }
    }

    async SaveServiceTab(): Promise<void> {
        await this.uISaveTabButton.click();
        await this.popup.confirmYes();
    }

    async VerifyCurrentDate(): Promise<void> {
        await expect(this.uIServiceAttemptedDateEdit).toHaveValue(DateHelpers.getCurrentDate());
    }

    async VerifyAcknowledgeUpdateServiceTab(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(1051) Updated data exists in the Service tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async VerifyUpdateSuccessful(): Promise<void> {
        const text = await this.uIBottomLeftSideStatusBar.innerText();
        expect(text).toContain('1003 - Update successful');
    }

    async VerifyAllFieldsGrayedOut(): Promise<void> {
        const dateClass = await this.uIServiceAttemptedDateEdit.getAttribute('class') || '';
        expect(dateClass).toContain('textboxInactive');
        const byClass = await this.uIAttemptedByEdit.getAttribute('class') || '';
        expect(byClass).toContain('textboxInactive');
        const commentsClass = await this.uICommentsEdit.getAttribute('class') || '';
        expect(commentsClass).toContain('textboxInactive');
        const saveClass = await this.uISaveTabButton.getAttribute('class') || '';
        expect(saveClass).toContain('DisabledImgMnuItem');
    }
}

export class MapTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uIUpdateLatLongButton: Locator;
    readonly uIResetButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uIUpdateLatLongButton = page.locator('#btnUpdateLatLong');
        this.uIResetButton = page.locator("//button[@class='CustomBtn']");
    }

    async dragAndDropPointerInMap(): Promise<void> {
        const canvas = this.page.locator("//div[@id='map_canvas']//canvas").first();
        const box = await canvas.boundingBox();
        if (box) {
            await this.page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
            await this.page.mouse.down();
            await this.page.mouse.move(box.x + box.width / 2 + 50, box.y + box.height / 2 + 50);
            await this.page.mouse.up();
        }
    }

    async clickUpdateLatLongButton(): Promise<void> {
        await this.uIUpdateLatLongButton.click();
    }

    async verifyNoMasterGeoOverWriteConfirmMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(5115) Master Geo already has Lat/Long. Do you want to overwrite?');
        await this.popup.confirmNoButton.click();
    }

    async verifyYesUpdateLatLongConfirmMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(5102) Are you sure you want to update the Latitude and Longitude to');
        await this.popup.confirmYesButton.click();
    }

    async clickResetButton(): Promise<void> {
        await this.page.waitForTimeout(500);
        await this.uIResetButton.click();
    }
}

export class WarrantEntryHistoryTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIHistoryTabResultsGrid: Locator;
    readonly uIHistoryTabResetButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIHistoryTabResultsGrid = page.locator('#tabWarrants_tmpl8_Usrhistory2_grdHistory');
        this.uIHistoryTabResetButton = page.locator('#tabWarrants_tmpl8_Usrhistory2_cmdInternalRefresh');
    }

    async VerifyHistoryTypeAsNarrativeLock(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIHistoryTabResultsGrid, 'History Type', rowIndex);
        expect(text).toBe('Narrative Lock');
    }

    async VerifyRemarksAsNarrativeLockedby(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIHistoryTabResultsGrid, 'Remarks', rowIndex);
        expect(text).toBe('Narrative Locked by');
    }

    async VerifyHistoryTypeAsStatusUpdate(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIHistoryTabResultsGrid, 'History Type', rowIndex);
        expect(text).toBe('Status Update');
    }

    async VerifyRemarksAsOther(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIHistoryTabResultsGrid, 'Remarks', rowIndex);
        expect(text).toBe('[ Other ]');
    }

    async VerifyHistoryTypeAsServiceUpdate(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIHistoryTabResultsGrid, 'History Type', rowIndex);
        expect(text).toBe('Service Update');
    }

    async VerifyAtByPF(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIHistoryTabResultsGrid, 'By PF', rowIndex);
        expect(text).toBe(BaseData.getTestValue('ByPF'));
    }

    async VerifyHistoryTypeAsNotes(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIHistoryTabResultsGrid, 'History Type', rowIndex);
        expect(text).toBe('Notes');
    }

    async ClickRemarkColumncell(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCellByIndex(this.uIHistoryTabResultsGrid, rowIndex, 'Remarks');
        await cell.click();
    }

    async ClickRemarksOkbutton(): Promise<void> {
        await this.popup.acknowledgeOk();
    }

    async VerifyHistoryTypeAsWarrantClearance(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIHistoryTabResultsGrid, 'History Type', rowIndex);
        expect(text).toBe('Warrant Clearance');
    }

    async VerifyHistoryTypeAsWarrantReopened(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIHistoryTabResultsGrid, 'History Type', rowIndex);
        expect(text).toBe('Warrant Reopened');
    }

    async VerifyRemarkAsActiveOpen(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIHistoryTabResultsGrid, 'Remarks', rowIndex);
        expect(text).toContain('[ Active/Open ]');
    }

    async verifyAtDateTimeInGrid(): Promise<void> {
        const values = await this.grid.getGridTableColumnValues(this.uIHistoryTabResultsGrid, 'Date/Time');
        const currentDate = DateHelpers.getCurrentDate('MM/dd/yy');
        for (const value of values) {
            expect(value).toContain(currentDate);
        }
    }

    async clickResetButton(): Promise<void> {
        await this.uIHistoryTabResetButton.click();
    }

    async selectAtRemarksInGrid(): Promise<void> {
        // const cell = await this.grid.getGridCell(this.uIHistoryTabResultsGrid, BaseData.getTestValue('Remarks'));
        // await cell.click();
    }

    async verifyAtRemarksAcknowledge(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText(BaseData.getTestValue('Notes'));
        await this.popup.acknowledgeOkButton.click();
    }
}

export class WarrantEntryNotesTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uIDateEdit: Locator;
    readonly uINotesEdit: Locator;
    readonly uISaveTabButton: Locator;
    readonly uIResetTabButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);

        this.uIDateEdit = page.locator('#dtcNotesDate_KPIDttmCtrl');
        this.uINotesEdit = page.locator('#txtRemarks');
        this.uISaveTabButton = page.locator('#cmdInternalSave');
        this.uIResetTabButton = page.locator('#cmdInternalRefresh');
    }

    async EnterNotes(): Promise<void> {
        await this.uINotesEdit.fill(RandomHelpers.randomString(10));
    }

    async SaveNotesTab(): Promise<void> {
        await this.uISaveTabButton.click();
        await this.popup.confirmYes();
    }

    async VerifyAcknowledgeUpdateNotesTab(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(1051) Updated data exists in the Notes tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async enterAtNotes(): Promise<void> {
        await this.uINotesEdit.fill(BaseData.getTestValue('Notes'));
    }
}

export class WarrantSearchPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uISearchButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIBackButton: Locator;
    readonly uIShowMapButton: Locator;
    readonly uIClearMapButton: Locator;
    readonly uIWarrantUpdateStatusButton: Locator;
    readonly uIWarrantUpdateButton: Locator;
    readonly uIWarNoCheckBox: Locator;
    readonly uIWarrantFromYearEdit: Locator;
    readonly uIWarrantFromNumberEdit: Locator;
    readonly uIWarrantToYearEdit: Locator;
    readonly uIWarrantToNumberEdit: Locator;
    readonly uIStatusComboBox: Locator;
    readonly uIClearanceComboBox: Locator;
    readonly uIWarrantResultTable: Locator;
    readonly uIClearButton: Locator;
    readonly uIPrintIcon: Locator;
    readonly uICourtWarrantNoTextView: Locator;
    readonly uICourtWarrantNoEdit: Locator;
    readonly uIDocketNoTextView: Locator;
    readonly uIDocketNoEdit: Locator;
    readonly uINCICIDTextView: Locator;
    readonly uINCICIDEdit: Locator;
    readonly uIStateIDTextView: Locator;
    readonly uIStateIDEdit: Locator;
    readonly uICustom1TextView: Locator;
    readonly uICustom1Edit: Locator;
    readonly uICustom2TextView: Locator;
    readonly uICustom2Edit: Locator;
    readonly uINameToolTip: Locator;
    readonly uIIncludeNameWhereAllWarrantCheckBox: Locator;
    readonly uIShowMapLink: Locator;
    readonly uIAddressEdit: Locator;
    readonly uIDateButton: Locator;
    readonly uIProtectionOrderComboBox: Locator;
    readonly uITypeOfOrderComboBox: Locator;
    readonly uIJurisComboBox: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uISelectionPeriodCheckbox: Locator;
    readonly uIDateFromEdit: Locator;
    readonly uITypeDropdown: Locator;
    readonly uIAuthorityStateDropdown: Locator;
    readonly uIAuthorityCode: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uISearchButton = page.locator("//span[contains(text(),'Search')]");
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uIShowMapButton = page.locator("//span[contains(text(),'Show Map')]");
        this.uIClearMapButton = page.locator("//span[contains(text(),'Clear Map')]");
        this.uIWarrantUpdateStatusButton = page.locator("//span[contains(text(),'Warrant Update Status')]");
        this.uIWarrantUpdateButton = page.locator("//span[contains(text(),'Warrant Update')]");
        this.uIWarNoCheckBox = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_chkWarNo');
        this.uIWarrantFromYearEdit = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_nbrWarfrm_Year');
        this.uIWarrantFromNumberEdit = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_nbrWarfrm_Number');
        this.uIWarrantToYearEdit = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_nbrWarTo_Year');
        this.uIWarrantToNumberEdit = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_nbrWarTo_Number');
        this.uIStatusComboBox = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_cddStatus_DropDown');
        this.uIClearanceComboBox = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_lstStatus_DropDown');
        this.uIWarrantResultTable = page.locator('#grdWarrants');
        this.uIClearButton = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_imgClear');
        this.uIPrintIcon = page.locator("//img[@src='/KPIImages/ico/16_print.gif']");
        this.uICourtWarrantNoTextView = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_lblCourtWarNo');
        this.uICourtWarrantNoEdit = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_txtCourtWarNo');
        this.uIDocketNoTextView = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_lblDocketNo');
        this.uIDocketNoEdit = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_txtDocketNo');
        this.uINCICIDTextView = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_lblNICID');
        this.uINCICIDEdit = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_txtNCIC');
        this.uIStateIDTextView = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_lblStateID');
        this.uIStateIDEdit = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_txtStateID');
        this.uICustom1TextView = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_lblCustom1');
        this.uICustom1Edit = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_txtCustom1');
        this.uICustom2TextView = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_lblCustom2');
        this.uICustom2Edit = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_txtCustom2');
        this.uINameToolTip = page.locator("(//span[@id='WzTtDiV']//table//tbody//tr//td//table//tbody//tr//td//table//tbody//tr//td//span//br)[1]");
        this.uIIncludeNameWhereAllWarrantCheckBox = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_chkIncludeName');
        this.uIShowMapLink = page.locator("//span[text()='Show Map']");
        this.uIAddressEdit = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_adrNameAddress_adrAddrsCtrl_txtFrom');
        this.uIDateButton = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_dttmDateTo_KPIDttmCtrl');
        this.uIProtectionOrderComboBox = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_cddRestraining_DropDown');
        this.uITypeOfOrderComboBox = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_cddTypofOrder_DropDown');
        this.uIJurisComboBox = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_lstJuris');
        this.uILastNameEdit = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_nWarrantNameID_LastName');
        this.uIFirstNameEdit = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_nWarrantNameID_FirstName');
        this.uISelectionPeriodCheckbox = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_chkDate');
        this.uIDateFromEdit = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_dttmDateStr_KPIDttmCtrl');
        this.uITypeDropdown = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_cddType_DropDown');
        this.uIAuthorityStateDropdown = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_ORIAuthority_KPIState');
        this.uIAuthorityCode = page.locator('#tabWarrant_tmpl0_UsrWarrantSrchBasic1_ORIAuthority_lupORI_CodeValue');
    }

    async ClickWarNoCheckBox(): Promise<void> {
        await this.uIWarNoCheckBox.click();
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async EnterAtWarrantNoInFromAndTo(): Promise<void> {
        const warrantNo = BaseData.getTestValue('WarrantNo');
        await this.uIWarrantFromYearEdit.fill(warrantNo.substring(0, 2));
        await this.uIWarrantFromNumberEdit.fill(warrantNo.substring(3));
        await this.uIWarrantFromNumberEdit.press('Tab');
        await this.uIWarrantToYearEdit.fill(warrantNo.substring(0, 2));
        await this.uIWarrantToNumberEdit.fill(warrantNo.substring(3));
        await this.uIWarrantToNumberEdit.press('Tab');
    }

    async EnterAtWarrantNoFrom(): Promise<void> {
        const warrantNo = BaseData.getTestValue('WarrantNo');
        await this.uIWarrantFromYearEdit.fill(warrantNo.substring(0, 2));
        await this.uIWarrantFromNumberEdit.fill(warrantNo.substring(3));
        await this.uIWarrantFromNumberEdit.press('Tab');
    }

    async EnterAtWarrantNoTo(): Promise<void> {
        const warrantNo1 = BaseData.getTestValue('WarrantNo1');
        await this.uIWarrantToYearEdit.fill(warrantNo1.substring(0, 2));
        await this.uIWarrantToNumberEdit.fill(warrantNo1.substring(3));
        await this.uIWarrantToNumberEdit.press('Tab');
    }

    async SelectStatusAsActiveOpen(): Promise<void> {
        await this.uIStatusComboBox.fill('Active/Open');
    }

    async SelectStatusAsOther(): Promise<void> {
        await this.uIStatusComboBox.fill('Other');
    }

    async SelectClearanceStatusAsClosed(): Promise<void> {
        await this.uIClearanceComboBox.fill('Closed');
    }

    async SelectClearanceStatusAsOpen(): Promise<void> {
        await this.uIClearanceComboBox.fill('Open');
    }

    async ClickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async ClickBackButton(): Promise<void> {
        await this.uIBackButton.click();
        await this.page.waitForTimeout(1000);
    }

    async ClickAtWarantNo(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIWarrantResultTable, BaseData.getTestValue('WarrantNo'));
    }

    async ClickClearButton(): Promise<void> {
        await this.uIClearButton.click();
    }

    async ClickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async ClickRowWithActiveOpen(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIWarrantResultTable, 'Active/Open');
    }

    async ClickCourtWarrantNoTextView(): Promise<void> {
        await this.uICourtWarrantNoTextView.click();
    }

    async ClickDocketNoTextView(): Promise<void> {
        await this.uIDocketNoTextView.click();
    }

    async ClickNICIDTextView(): Promise<void> {
        await this.uINCICIDTextView.click();
    }

    async ClickStateIDTextView(): Promise<void> {
        await this.uIStateIDTextView.click();
    }

    async ClickCustom1TextView(): Promise<void> {
        await this.uICustom1TextView.click();
    }

    async ClickCustom2TextView(): Promise<void> {
        await this.uICustom2TextView.click();
    }

    async VerifyWarrantLastNameWarrantFirstName(rowIndex: number): Promise<void> {
        const expected = `${BaseData.getTestValue('WarrantLastName')}, ${BaseData.getTestValue('WarrantFirstName')}`;
        const text = await this.grid.getGridCellInnerText(this.uIWarrantResultTable, 'Name', rowIndex);
        expect(text).toBe(expected);
    }

    async VerifyStatusAsWithdrawn(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIWarrantResultTable, 'Status', rowIndex);
        expect(text).toContain('Withdrawn');
    }

    async VerifyMouseOverNameColumn(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCellByIndex(this.uIWarrantResultTable, rowIndex, 'Name');
        await cell.hover();
        await this.page.waitForTimeout(1000);
    }

    async VerifyRecordInBlackColor(rowIndex: number): Promise<void> {
        const row = this.uIWarrantResultTable.locator('tbody tr').nth(rowIndex);
        const classAttr = await row.getAttribute('class') || '';
        expect(classAttr).not.toContain('gridrowclr');
    }

    async VerifyRecordInGrayColor(rowIndex: number): Promise<void> {
        const row = this.uIWarrantResultTable.locator('tbody tr').nth(rowIndex);
        const classAttr = await row.getAttribute('class') || '';
        expect(classAttr).toContain('gridrowclr');
    }

    async VerifyWarNoAtWarrant(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIWarrantResultTable, 'War#', rowIndex);
        expect(text).toBe(BaseData.getTestValue('WarrantNo'));
    }

    async VerifyAcknowledgeNoRecordFound(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('1011 - No Record Found');
        await this.popup.acknowledgeOkButton.click();
    }

    async VerifyCourtWarrantNoFieldHide(): Promise<void> {
        const classAttr = await this.uICourtWarrantNoEdit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async VerifyDocketNoFieldHide(): Promise<void> {
        const classAttr = await this.uIDocketNoEdit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async VerifyNICIDFieldHide(): Promise<void> {
        const classAttr = await this.uINCICIDEdit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async VerifyCustom1FieldHide(): Promise<void> {
        const classAttr = await this.uICustom1Edit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async VerifyCustom2FieldHide(): Promise<void> {
        const classAttr = await this.uICustom2Edit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async VerifyStateIDFieldHide(): Promise<void> {
        const classAttr = await this.uIStateIDEdit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async EnterAtWarNoInFromAndTo(): Promise<void> {
        const warNo = BaseData.getTestValue('WarNo');
        await this.uIWarrantFromYearEdit.fill(warNo.substring(0, 2));
        await this.uIWarrantFromNumberEdit.fill(warNo.substring(3));
        await this.uIWarrantFromNumberEdit.press('Tab');
        await this.uIWarrantToYearEdit.fill(warNo.substring(0, 2));
        await this.uIWarrantToNumberEdit.fill(warNo.substring(3));
        await this.uIWarrantToNumberEdit.press('Tab');
    }

    async ClickAtWarNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIWarrantResultTable, BaseData.getTestValue('WarNo'));
        await this.page.waitForTimeout(500);
    }

    async VerifyAtStatusUsingWarNo(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIWarrantResultTable, BaseData.getTestValue('WarNo'), 'Status');
        expect(await cell.innerText()).toBe(BaseData.getTestValue('Status'));
    }

    async verifyAtDateInGrid(): Promise<void> {
        const values = await this.grid.getGridTableColumnValues(this.uIWarrantResultTable, 'Date');
        expect(values).toContain(DateHelpers.getCurrentDate('MM/dd/yy'));
    }

    async clickIncludeNameWhereAllWarrantCheckBox(): Promise<void> {
        await this.uIIncludeNameWhereAllWarrantCheckBox.click();
    }

    async verifyShowMapButtonIsDisplayed(): Promise<void> {
        await expect(this.uIShowMapButton).toBeVisible();
    }

    async verifyMapColumnExist(): Promise<void> {
        // const header = await this.grid.getGridHeaderColumnCell(this.uIWarrantResultTable, 'Map');
        // expect(await header.innerText()).toBe('Map');
    }

    async verifyValidAndInvalidAddressInMapTab(): Promise<void> {
        // const cells = await this.grid.getGridTableColumnValues(this.uIWarrantResultTable, 'Map');
        // expect(cells.some(c => c.includes('✗'))).toBeTruthy();
        // expect(cells.some(c => c.includes('✓'))).toBeTruthy();
    }

    async enterAtAddress(): Promise<void> {
        await this.uIAddressEdit.fill(BaseData.getTestValue('Address'));
    }

    async clickShowMapButton(): Promise<void> {
        await this.uIShowMapLink.click();
    }

    async selectRowByAtWarrantNo(warrantNo?: string): Promise<void> {
        const target = warrantNo || BaseData.getTestValue('WarrantNo');
        await this.grid.selectRowByCellText(this.uIWarrantResultTable, target);
    }

    async verifyResetButtonIsDisplayed(): Promise<void> {
        await expect(this.uIResetButton).toBeVisible();
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async enterToDate(): Promise<void> {
        await this.uIDateButton.fill(DateHelpers.getCurrentDate());
        await this.uIDateButton.press('Tab');
    }

    async selectAtProtectionOrder(): Promise<void> {
        await this.uIProtectionOrderComboBox.selectOption({ label: BaseData.getTestValue('ProtectionOrder') });
    }

    async selectAtTypeOfOrder(): Promise<void> {
        await this.uITypeOfOrderComboBox.selectOption({ label: BaseData.getTestValue('TypeOfOrder') });
    }

    async selectRowByAtName(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIWarrantResultTable, BaseData.getTestValue('Name'));
    }

    async selectAtJuris(): Promise<void> {
        await this.uIJurisComboBox.selectOption({ label: BaseData.getTestValue('Juris') });
    }

    async selectAtJuris1(): Promise<void> {
        await this.uIJurisComboBox.selectOption({ label: BaseData.getTestValue('Juris1') });
    }

    async selectAtJuris2(): Promise<void> {
        await this.uIJurisComboBox.selectOption({ label: BaseData.getTestValue('Juris2') });
    }

    async verifyAllJurisDisplyedInGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uIWarrantResultTable, 'Juris');
        const juris = [' ', 'BC', 'PX', 'GCP', 'TP', 'SC'];
        for (const j of juris) {
            expect(columnValues).toContain(j);
        }
    }

    async verifyAtJuris1DisplyedInGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uIWarrantResultTable, 'Juris');
        expect(columnValues).toContain('BC');
    }

    async enterAtWarrantLastName(): Promise<void> {
        await this.uILastNameEdit.fill(BaseData.getTestValue('WarrantLastName'));
    }

    async verifySelectionPeriodCheckboxIsChecked(): Promise<void> {
        await expect(this.uISelectionPeriodCheckbox).toBeChecked();
    }

    async verifySelectionPeriodCheckboxIsUnchecked(): Promise<void> {
        await expect(this.uISelectionPeriodCheckbox).not.toBeChecked();
    }

    async selectAtGridRowCheckboxByWarrantNo(): Promise<void> {
        const warrantNo = BaseData.getTestValue('WarrantNo');
        const element = this.page.locator(`(//div[@id='grdWarrants']//table/tbody/tr/td[contains(text(),'${warrantNo}')]//..//img)[2]`);
        await element.click();
    }

    async verifyGridRowCheckboxesNotInBlueColor(): Promise<void> {
        const checkboxes = this.uIWarrantResultTable.locator('.//tbody//tr//td//img');
        const count = await checkboxes.count();
        for (let i = 0; i < count; i++) {
            const title = await checkboxes.nth(i).getAttribute('title') || '';
            expect(title).not.toContain('Partial');
        }
    }

    async enterAtWarrantFirstName(): Promise<void> {
        await this.uIFirstNameEdit.fill(BaseData.getTestValue('WarrantFirstName'));
    }

    async clickRowAtWarrantLastNameWarrantFirstName(): Promise<void> {
        const target = `${BaseData.getTestValue('WarrantLastName')}, ${BaseData.getTestValue('WarrantFirstName')}`;
        await this.grid.selectRowByCellText(this.uIWarrantResultTable, target);
    }

    async enterCurrentDate(): Promise<void> {
        await this.uIDateButton.fill(DateHelpers.getCurrentDate());
        await this.uIDateButton.press('Tab');
    }

    async selectWarrantInGrid(): Promise<void> {
        await this.grid.selectRandomRow(this.uIWarrantResultTable);
        await this.page.waitForTimeout(500);
    }

    async clickSelectionPeriodCheckbox(): Promise<void> {
        await this.uISelectionPeriodCheckbox.click();
    }

    async enterFromDate(): Promise<void> {
        await this.uIDateFromEdit.fill(BaseData.getTestValue('FromDate'));
        await this.uIDateFromEdit.press('Tab');
    }

    async selectAtType(): Promise<void> {
        await this.uITypeDropdown.selectOption({ label: BaseData.getTestValue('Type') });
    }

    async verifyAtTypeInGrid(): Promise<void> {
        const values = await this.grid.getGridTableColumnValues(this.uIWarrantResultTable, 'Type');
        for (const value of values) {
            expect(value).toBe(BaseData.getTestValue('Type'));
        }
    }

    async SelectAtStatus(): Promise<void> {
        await this.uIStatusComboBox.selectOption({ label: BaseData.getTestValue('Status') });
    }

    async VerifyAtStatusInGrid(): Promise<void> {
        const values = await this.grid.getGridTableColumnValues(this.uIWarrantResultTable, 'Status');
        for (const value of values) {
            expect(value).toBe(BaseData.getTestValue('Status'));
        }
    }

    async selectAtAuthority(): Promise<void> {
        await this.uIAuthorityStateDropdown.selectOption({ label: BaseData.getTestValue('AuthState') });
        await this.uIAuthorityCode.fill(BaseData.getTestValue('AuthCode'));
        await this.uIAuthorityCode.press('Tab');
    }

    async verifyAtDateInGridBetweenDates(): Promise<void> {
        const fromDateStr = BaseData.getTestValue('FromDate');
        const toDateStr = DateHelpers.getCurrentDate();
        const pfromDate = new Date(fromDateStr);
        const ptoDate = new Date(toDateStr);
        const values = await this.grid.getGridTableColumnValues(this.uIWarrantResultTable, 'Date');
        for (const value of values) {
            const pcolumndate = new Date(value);
            expect(pcolumndate >= pfromDate || pcolumndate <= ptoDate).toBeTruthy();
        }
    }

    async verifyWarrantNoInGrid(): Promise<void> {
        // const cell = await this.grid.getGridCell(this.uIWarrantResultTable, BaseData.getTestValue('WarrantNo'));
        // const text = await cell.innerText();
        // expect(text).toContain(BaseData.getTestValue('WarrantNo'));
    }

    async verifyWarrantUpdateStatusIsDisabled(): Promise<void> {
        const parentLi = this.uIWarrantUpdateStatusButton.locator('xpath=./..//parent::li');
        const classAttr = await parentLi.getAttribute('class') || '';
        expect(classAttr).toContain('Disabled');
    }

    async verifyWarrantUpdateIsDisabled(): Promise<void> {
        const parentLi = this.uIWarrantUpdateButton.locator('xpath=./..//parent::li');
        const classAttr = await parentLi.getAttribute('class') || '';
        expect(classAttr).toContain('Disabled');
    }

    async verifyWarrantUpdateIsEnabled(): Promise<void> {
        const classAttr = await this.uIWarrantUpdateButton.getAttribute('class') || '';
        expect(classAttr).not.toContain('Disabled');
    }

    async verifyWarrantUpdateStatusIsEnabled(): Promise<void> {
        const classAttr = await this.uIWarrantUpdateStatusButton.getAttribute('class') || '';
        expect(classAttr).not.toContain('Disabled');
    }

    async enterAtWarNoFromAndTo(warrantNo: string): Promise<void> {
        await this.uIWarrantFromYearEdit.fill(warrantNo.substring(0, 2));
        await this.uIWarrantFromNumberEdit.fill(warrantNo.substring(3));
        await this.uIWarrantToYearEdit.fill(warrantNo.substring(0, 2));
        await this.uIWarrantToNumberEdit.fill(warrantNo.substring(3));
    }
}

export class WarrantDetailsPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIWarrantCountEdit: Locator;
    readonly uIWarrantDetailsResultGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIWarrantCountEdit = page.locator('#txtWarCount');
        this.uIWarrantDetailsResultGrid = page.locator('#grdWarDtls');
    }

    async verifyWarrantCount(i: string): Promise<void> {
        const value = await this.uIWarrantCountEdit.inputValue();
        expect(value).toContain(i);
    }

    async VerifyWarrantCountAs0(): Promise<void> {
        const value = await this.uIWarrantCountEdit.inputValue();
        expect(value).toContain('0');
    }

    async VerifyAtWarrantNo(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIWarrantDetailsResultGrid, 'Warrant#', rowIndex);
        expect(text).toBe(BaseData.getTestValue('WarrantNo'));
    }

    async VerifyWarrantStatusAsExpired(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIWarrantDetailsResultGrid, 'Status', rowIndex);
        expect(text).toBe('Expired');
    }

    async VerifyWarrantStatusAsActiveOpen(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIWarrantDetailsResultGrid, 'Status', rowIndex);
        expect(text).toBe('Active/Open');
    }

    async CloseWarrantDetailsScreen(): Promise<void> {
        await this.page.close();
    }

    async ClickAtWarantNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIWarrantDetailsResultGrid, BaseData.getTestValue('WarrantNo'));
    }

    async VerifyRecordInRedColor(rowIndex: number): Promise<void> {
        const row = this.uIWarrantDetailsResultGrid.locator('tbody tr').nth(rowIndex);
        const classAttr = await row.getAttribute('class') || '';
        expect(classAttr).toContain('gridrowclr');
    }

    async ClickAtWarantNo1InGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIWarrantDetailsResultGrid, BaseData.getTestValue('WarrantNo1'));
    }

    async ClickAtWarantNo2InGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIWarrantDetailsResultGrid, BaseData.getTestValue('WarrantNo2'));
    }

    async ClickAtWarantNo3InGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIWarrantDetailsResultGrid, BaseData.getTestValue('WarrantNo3'));
    }
}

export class WarrantNamesSearchPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uISearchButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIBackButton: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uISoundalikeCheckBox: Locator;
    readonly uIIncludeNameCheckBox: Locator;
    readonly uIWarrantStatusComboBox: Locator;
    readonly uIWarrantNamesSearchResultGrid: Locator;
    readonly uINameToolTip: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uISearchButton = page.locator("//span[contains(text(),'Search')]");
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uILastNameEdit = page.locator('#tabNameSrch_tmpl0_UsrNameSrchBasic1_txtLastName');
        this.uIFirstNameEdit = page.locator('#tabNameSrch_tmpl0_UsrNameSrchBasic1_txtFirstName');
        this.uISoundalikeCheckBox = page.locator('#tabNameSrch_tmpl0_UsrNameSrchBasic1_chkSound');
        this.uIIncludeNameCheckBox = page.locator('#tabNameSrch_tmpl0_UsrNameSrchBasic1_chkIncludeName');
        this.uIWarrantStatusComboBox = page.locator('#tabNameSrch_tmpl0_UsrNameSrchBasic1_cddStatus_DropDown');
        this.uIWarrantNamesSearchResultGrid = page.locator('#grdNames');
        this.uINameToolTip = page.locator("//span[@id='WzTtDiV']//table//tbody//tr//td//table//tbody//tr//td//table//tbody//tr//td//span/br");
    }

    async EnterAtLastName(): Promise<void> {
        await this.uILastNameEdit.fill(BaseData.getTestValue('WarrantLastName'));
    }

    async EnterAtFirstName(): Promise<void> {
        await this.uIFirstNameEdit.fill(BaseData.getTestValue('WarrantFirstName'));
    }

    async SelectWarrantStatusAsActiveOpen(): Promise<void> {
        await this.uIWarrantStatusComboBox.fill('Active/Open');
    }

    async ClickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async VerifyWarrantLastNameWarrantFirstName(rowIndex: number): Promise<void> {
        const expected = `${BaseData.getTestValue('WarrantLastName')}, ${BaseData.getTestValue('WarrantFirstName')}`;
        const text = await this.grid.getGridCellInnerText(this.uIWarrantNamesSearchResultGrid, 'Name', rowIndex);
        expect(text).toBe(expected);
    }

    async VerifyMouseOverNameColumn(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCellByIndex(this.uIWarrantNamesSearchResultGrid, rowIndex, 'Name');
        await cell.hover();
        await this.page.waitForTimeout(1000);
    }

    async ClickRow(rowIndex: number): Promise<void> {
        await this.uIWarrantNamesSearchResultGrid.click();
        await this.grid.selectRowByIndex(this.uIWarrantNamesSearchResultGrid, rowIndex);
    }

    async ClickRowAtWarrantLastNameWarrantFirstName(): Promise<void> {
        const target = `${BaseData.getTestValue('WarrantLastName')}, ${BaseData.getTestValue('WarrantFirstName')}`;
        await this.grid.selectRowByCellText(this.uIWarrantNamesSearchResultGrid, target);
    }

    async VerifyAcknowledgeRecordFound(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('1011 - No Record Found');
        await this.popup.acknowledgeOkButton.click();
    }

    async ClickIncludeNameCheckBox(): Promise<void> {
        await this.uIIncludeNameCheckBox.click();
    }
}

export class BatchClearancePage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly browserHelpers: BrowserHelpers;

    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIDispositionComboBox: Locator;
    readonly uIDateEdit: Locator;
    readonly uIByPFEdit: Locator;
    readonly uIByPFLookupButton: Locator;
    readonly uIRemarksEdit: Locator;
    readonly uIWarrantYearEdit: Locator;
    readonly uIWarrantNoEdit: Locator;
    readonly uICourtNoEdit: Locator;
    readonly uIBatchClearanceResultGrid: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIDeleteIconGridButton: Locator;
    readonly uIORICodeDescriptionEdit: Locator;
    readonly uIORICodeValueEdit: Locator;
    readonly uICourtWarrantLabel: Locator;
    readonly uIWarrantLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.browserHelpers = new BrowserHelpers(page);

        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIDispositionComboBox = page.locator('#cddDisposition_DropDown');
        this.uIDateEdit = page.locator('#dtcClearDate_KPIDttmCtrl');
        this.uIByPFEdit = page.locator('#lupByPF_CodeValue');
        this.uIByPFLookupButton = page.locator('#lupByPF_imgBtn');
        this.uIRemarksEdit = page.locator('#txtClearRemarks');
        this.uIWarrantYearEdit = page.locator('#nbrWarrantNo_Year');
        this.uIWarrantNoEdit = page.locator('#nbrWarrantNo_Number');
        this.uICourtNoEdit = page.locator('#txtCourtNo');
        this.uIBatchClearanceResultGrid = page.locator('#grdClearance');
        this.uIAddButton = page.locator('#imgAdd');
        this.uIClearButton = page.locator('#imgClear');
        this.uIDeleteIconGridButton = page.locator("//div[@id='grdClearance']//td[@class='Delete_Icon_Style']");
        this.uIORICodeDescriptionEdit = page.locator('#ORIAuthority_lupORI_CodeDescription');
        this.uIORICodeValueEdit = page.locator('#ORIAuthority_lupORI_CodeValue');
        this.uICourtWarrantLabel = page.locator('#lblCourtNo');
        this.uIWarrantLabel = page.locator('#nbrWarrant');
    }

    async SelectDispositionAsWithdrawn(): Promise<void> {
        await this.uIDispositionComboBox.fill('Withdrawn');
    }

    async EnterDate(): Promise<void> {
        await this.uIDateEdit.click();
        await this.uIDateEdit.press('Tab');
    }

    async VerifyCurrentDate(): Promise<void> {
        await expect(this.uIDateEdit).toHaveValue(DateHelpers.getCurrentDate());
    }

    async EnterRemarkAsBatchClearance(): Promise<void> {
        await this.uIRemarksEdit.fill('Batch Clearance');
    }

    async EnterAtByPFCode(): Promise<void> {
        await this.uIByPFEdit.fill(BaseData.getTestValue('PFCode'));
        await this.uIByPFEdit.press('Tab');
        const popupExist = await this.browserHelpers.windowExistsByTitle('Coded Search');
        if (popupExist) {
            // await this.popup.switchToCodedSearch();
            // await this.popup.kPICodedLookup.selectAtPFCode();
        }
        await this.browserHelpers.switchToPageByUrl('frmBatchClearance');
    }

    async EnterAtWarrantNo(): Promise<void> {
        const warrantNo = BaseData.getTestValue('WarrantNo');
        await this.uIWarrantYearEdit.fill(warrantNo.substring(0, 2));
        await this.uIWarrantNoEdit.fill(warrantNo.substring(3));
        await this.uIWarrantNoEdit.press('Tab');
    }

    async EnterAtWarrantNo1(): Promise<void> {
        const warrantNo1 = BaseData.getTestValue('WarrantNo1');
        await this.uIWarrantYearEdit.fill(warrantNo1.substring(0, 2));
        await this.uIWarrantNoEdit.fill(warrantNo1.substring(3));
        await this.uIWarrantNoEdit.press('Tab');
    }

    async EnterAtCourtNo(): Promise<void> {
        await this.uICourtNoEdit.fill(BaseData.getTestValue('CourtNo'));
        await this.uICourtNoEdit.press('Tab');
    }

    async ClickAddButton(): Promise<void> {
        await this.uIAddButton.click();
        await this.page.waitForTimeout(500);
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async ClickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async VerifyRefreshADDClearbuttonEnabled(): Promise<void> {
        await expect(this.uIResetButton).toBeEnabled();
        await expect(this.uIAddButton).toBeEnabled();
        await expect(this.uIClearButton).toBeEnabled();
    }

    async VerifyRefreshADDClearbuttonDisabled(): Promise<void> {
        await expect(this.uIResetButton).toBeDisabled();
        await expect(this.uIAddButton).toBeDisabled();
        await expect(this.uIClearButton).toBeDisabled();
    }

    async VerifyAllFieldsGrayedOut(): Promise<void> {
        await expect(this.uIDispositionComboBox).toBeDisabled();
        const dateClass = await this.uIDateEdit.getAttribute('class') || '';
        expect(dateClass).toContain('textboxInactive');
        const pfClass = await this.uIByPFEdit.getAttribute('class') || '';
        expect(pfClass).toContain('textboxInactive');
        const remarksClass = await this.uIRemarksEdit.getAttribute('class') || '';
        expect(remarksClass).toContain('textboxInactive');
        const warClass = await this.uIWarrantNoEdit.getAttribute('class') || '';
        expect(warClass).toContain('textboxInactive');
        const courtClass = await this.uICourtNoEdit.getAttribute('class') || '';
        expect(courtClass).toContain('textboxInactive');
        const saveClass = await this.uISaveButton.getAttribute('class') || '';
        expect(saveClass).toContain('DisabledImgMnuItem');
    }

    async VerifyAckMessageSelectWarrantDisposition(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(8512) Select warrant disposition');
        await this.popup.acknowledgeOkButton.click();
    }

    async VerifyAckMessageEnterCourt(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(8516) Enter Court Warrant No or Warrant No');
        await this.popup.acknowledgeOkButton.click();
    }

    async VerifyAckMessageSelectPF(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(8514)');
        await this.popup.acknowledgeOkButton.click();
    }

    async VerifyAckMessageUpdatedDataExists(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(6040) Updated data exists in the fields.You must Add or Clear');
        await this.popup.acknowledgeOkButton.click();
    }

    async VerifyAckMessageWarrantCleared(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(8517) Warrant already cleared');
        await this.popup.acknowledgeOkButton.click();
    }

    async VerifyAtWarrantNo(rowIndex: number): Promise<void> {
        await this.page.waitForTimeout(500);
        const text = await this.grid.getGridCellInnerText(this.uIBatchClearanceResultGrid, 'Warrant#', rowIndex);
        expect(text).toBe(BaseData.getTestValue('WarrantNo'));
    }

    async VerifyAtCourtNo(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIBatchClearanceResultGrid, 'Court#', rowIndex);
        expect(text).toBe(BaseData.getTestValue('CourtNo'));
    }

    async VerifyAtDOB(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIBatchClearanceResultGrid, 'DOB', rowIndex);
        expect(text).toBe(BaseData.getTestValue('DOB'));
    }

    async VerifyAtAge(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIBatchClearanceResultGrid, 'Age', rowIndex);
        expect(text).toBe(BaseData.getTestValue('Age'));
    }

    async VerifyAtCharge(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIBatchClearanceResultGrid, 'Charge', rowIndex);
        expect(text).toBe(BaseData.getTestValue('Charge'));
    }

    async ClickDeleteIconInGrid(): Promise<void> {
        await this.uIDeleteIconGridButton.click();
        await this.popup.confirmYes();
    }

    async VerifyAddedRowDeleted(): Promise<void> {
        const count = await this.grid.getRowCount(this.uIBatchClearanceResultGrid);
        expect(count).toBe(0);
    }

    async VerifyAddedRowPresent(): Promise<void> {
        const count = await this.grid.getRowCount(this.uIBatchClearanceResultGrid);
        expect(count).toBe(1);
    }

    async selectAtDisposition(): Promise<void> {
        await this.uIDispositionComboBox.fill(BaseData.getTestValue('Disposition'));
    }

    async verifyByORIDisabled(): Promise<void> {
        await expect(this.uIORICodeDescriptionEdit).toBeDisabled();
    }

    async VerifyAckMessageAtleastOneWarrant(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(8515) At least one warrant must be added to the grid before the batch clearance can be saved.');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyAcknowledgeUpdateSuccessful(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('1003 - Update');
        await this.popup.acknowledgeOkButton.click();
    }

    async verify8522WarrantNoDoesNotExistAckMsg(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(8522)Warrant No does not exist');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyCourtWarrantFieldAsNonMandatory(): Promise<void> {
        const color = await this.uICourtWarrantLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe(BaseData.getTestValue('BlackColor'));
    }

    async verify8521CourtNoDoesNotExistAckMsg(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(8521)Court No does not exist');
        await this.popup.acknowledgeOkButton.click();
    }

    async clearWarrantNo(): Promise<void> {
        await this.uIWarrantYearEdit.clear();
        await this.uIWarrantNoEdit.clear();
        await this.uIWarrantNoEdit.press('Tab');
    }

    async verifyWarrantFieldAsMandatory(): Promise<void> {
        const color = await this.uIWarrantLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe(BaseData.getTestValue('RedColor'));
    }

    async verifyWarrantFieldAsNonMandatory(): Promise<void> {
        const color = await this.uIWarrantLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe(BaseData.getTestValue('BlackColor'));
    }

    async verifyCourtWarrantFieldAsMandatory(): Promise<void> {
        const color = await this.uICourtWarrantLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe(BaseData.getTestValue('RedColor'));
    }

    async EnterAtCourtNo1(): Promise<void> {
        await this.uICourtNoEdit.fill(BaseData.getTestValue('CourtNo1'));
        await this.uICourtNoEdit.press('Tab');
    }

    async VerifyAtWarrantNoInGrid(): Promise<void> {
        // await this.page.waitForTimeout(500);
        // const cell = await this.grid.getGridCell(this.uIBatchClearanceResultGrid, BaseData.getTestValue('WarrantNo'));
        // expect(await cell.innerText()).toBe(BaseData.getTestValue('WarrantNo'));
    }
}

export class WarrantTypePage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIWarrantTypeResultGrid: Locator;
    readonly uIAddNewButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIWarrantTypeResultGrid = page.locator('#grdWarType');
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
    }

    async VerifyWarrantTypeAsA(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIWarrantTypeResultGrid, 'Warrant Type', rowIndex);
        expect(text).toBe('A');
    }

    async VerifyDescriptionAsAnticipatoryBail(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIWarrantTypeResultGrid, 'Description', rowIndex);
        expect(text).toBe('Anticipatory Bail');
    }

    async VerifyExpirationRequiredAsMandatory(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIWarrantTypeResultGrid, 'Expiration Required?', rowIndex);
        expect(text).toBe('Mandatory');
    }

    async VerifyDefaultDispostionAsBailPosted(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIWarrantTypeResultGrid, 'Default Disposition', rowIndex);
        expect(text).toBe('Bail Posted');
    }

    async VerifyWarrantIsChecked(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCellByIndex(this.uIWarrantTypeResultGrid, rowIndex, 'Is Warrant?');
        const img = cell.locator('img');
        const alt = await img.getAttribute('alt') || '';
        expect(alt).toContain('Checked');
    }

    async ClickRow(rowIndex: number): Promise<void> {
        await this.grid.selectRowByIndex(this.uIWarrantTypeResultGrid, rowIndex);
    }

    async ClickEnterKey(): Promise<void> {
        await this.page.waitForTimeout(500);
        await this.uIWarrantTypeResultGrid.press('Enter');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
        await this.page.waitForTimeout(500);
    }

    async VerifyWarrantIsCheckedUsingWarrantType(): Promise<void> {
        const warrantType = BaseData.getTestValue('WarrantType');
        const row = await this.grid.getRowByCellText(this.uIWarrantTypeResultGrid, warrantType);
        const cell = row.locator("td[aria-describedby*='IsWarrant'], td:nth-child(3)");
        const img = cell.locator('img');
        const alt = await img.getAttribute('alt') || '';
        expect(alt).toContain('Checked');
    }

    async VerifyAtDescriptionUsingWarrantType(no: number): Promise<void> {
        const warrantType = BaseData.getTestValue(`WarrantType${no}`);
        const cell = await this.grid.getGridCell(this.uIWarrantTypeResultGrid, warrantType, 'Description');
        const text = await cell.innerText();
        expect(text.trim()).toBe(BaseData.getTestValue(`Description${no}`));
    }

    async VerifyAtDescriptionUsingWarrantType1(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIWarrantTypeResultGrid, BaseData.getTestValue('WarrantType1'), 'Description');
        const text = await cell.innerText();
        expect(text.trim()).toBe(BaseData.getTestValue('Description1'));
    }

    async verifyWarrantIsNotPresentInGrid(i?: number): Promise<void> {
        const values = await this.grid.getGridTableColumnValues(this.uIWarrantTypeResultGrid, 'Warrant Type');
        const target = i !== undefined ? BaseData.getTestValue(`WarrantType${i}`) : 'C';
        for (const letter of values) {
            expect(letter).not.toContain(target);
        }
    }

    async verifyWarrantIsPresentInGrid(): Promise<void> {
        // const cell = await this.grid.getGridCell(this.uIWarrantTypeResultGrid, BaseData.getTestContextData('WarrantType'));
        // const text = await cell.innerText();
        // expect(text.trim()).toBe(BaseData.getTestContextData('WarrantType'));
    }

    async selectRowByWarrantType(no: number): Promise<void> {
        await this.grid.selectRowByCellText(this.uIWarrantTypeResultGrid, BaseData.getTestValue(`WarrantType${no}`));
    }

    async getWarrantTypeIndex(): Promise<number> {
        // const rows = this.uIWarrantTypeResultGrid.locator('tbody tr');
        // const count = await rows.count();
        // const target = BaseData.getTestContextData('WarrantType');
        // for (let i = 0; i < count; i++) {
        //     const text = await rows.nth(i).innerText();
        //     if (text.includes(target)) {
        //         return i;
        //     }
        // }
        return -1;
    }

    async reloadScreen(): Promise<void> {
        await this.page.waitForTimeout(500);
        await this.page.reload();
    }
}

export class WarrantTypeEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIDescriptionEdit: Locator;
    readonly uIWarrantTypeEdit: Locator;
    readonly uIWarrantCheckBox: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIExpirationComboBox: Locator;
    readonly uIDefaultDispositionComboBox: Locator;
    readonly uINCICCategoryComboBox: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;
    readonly uIDeleteIcon: Locator;
    readonly uIExpirationLabel: Locator;
    readonly uISaveAndAddNew: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIDescriptionEdit = page.locator('#txtDescription');
        this.uIWarrantTypeEdit = page.locator('#txtWarrantType');
        this.uIWarrantCheckBox = page.locator('#chkIsActive');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIExpirationComboBox = page.locator('#cddExpiration_DropDown');
        this.uIDefaultDispositionComboBox = page.locator('#cddDisposition_DropDown');
        this.uINCICCategoryComboBox = page.locator('#cddNCIC_DropDown');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIDeleteIcon = page.locator('#cmdDelete');
        this.uIExpirationLabel = page.locator('#lblExpiration');
        this.uISaveAndAddNew = page.locator('#cmdSaveNAddNew');
    }

    async CloseWarrantTypeScreen(): Promise<void> {
        await this.page.close();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async enterAtWarrantType(i?: number): Promise<void> {
        const key = i !== undefined ? `WarrantType${i}` : 'WarrantType';
        await this.uIWarrantTypeEdit.fill(BaseData.getTestValue(key));
    }

    async enterAtDescription(i?: number): Promise<void> {
        const key = i !== undefined ? `Description${i}` : 'Description';
        await this.uIDescriptionEdit.fill(BaseData.getTestValue(key));
    }

    async clickWarrantCheckbox(): Promise<void> {
        await this.uIWarrantCheckBox.click();
    }

    async SelectExpiration(): Promise<void> {
        //await this.elementHelpers.selectRandomDropDownOption(this.uIExpirationComboBox);
        await this.uIExpirationComboBox.press('Tab');
    }

    async SelectDefaultDisposition(): Promise<void> {
        // await this.elementHelpers.selectRandomDropDownOption(this.uIDefaultDispositionComboBox);
        await this.uIDefaultDispositionComboBox.press('Tab');
    }

    async VerifyBottomStatusMessage(): Promise<void> {
        const text = await this.uIBottomLeftSideStatusBar.innerText();
        expect(text).toContain('1002 - Addition Successful');
    }

    async selectAtExpiration(i?: number): Promise<void> {
        const key = i !== undefined ? `Expiration${i}` : 'Expiration';
        await this.uIExpirationComboBox.selectOption({ label: BaseData.getTestValue(key) });
        await this.uIExpirationComboBox.press('Tab');
    }

    async VerifyWarrantTypeAcknowledgeMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(8519) Select warrant type');
        await this.popup.acknowledgeOkButton.click();
    }

    async SelectNCICCategory(): Promise<void> {
        //await this.elementHelpers.selectRandomDropDownOption(this.uINCICCategoryComboBox);
        await this.uIDefaultDispositionComboBox.press('Tab');
    }

    async clickDeleteIcon(): Promise<void> {
        await this.uIDeleteIcon.click();
    }

    async verify8536ThisWarrantTypecannotbedeleted(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(8536) This Warrant Type cannot be deleted because it is associated with a Warrant.');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyUpdatesucessFullMessage(): Promise<void> {
        const text = await this.uIBottomLeftSideStatusBar.innerText();
        expect(text).toContain('1003 - Update Successful');
    }

    async verifyDeleteConfirmMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(4)Do you really want to delete?');
        await this.popup.confirmYesButton.click();
    }

    async verifyAdditionSuccessfulMessage(): Promise<void> {
        const message = await this.uIBottomLeftSideStatusBar.innerText();
        expect(message.trim()).toBe('1002 - Addition Successful');
    }

    async verify8519EnterWarrantTypeAcknowledgeMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(8519) Enter the Want/Warrant Type');
        await this.popup.acknowledgeOkButton.click();
    }

    async selectAtDefaultDisposition(): Promise<void> {
        await this.uIDefaultDispositionComboBox.selectOption({ label: BaseData.getTestValue('DefaultDisposition') });
    }

    async verifyDeleteIconIsNotAvailable(): Promise<void> {
        await expect(this.uIDeleteIcon).not.toBeVisible();
    }

    async verifyDeleteIconIsAvailable(): Promise<void> {
        await expect(this.uIDeleteIcon).toBeVisible();
    }

    async verifyExpirationIsMandatory(): Promise<void> {
        const color = await this.uIExpirationLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(153, 0, 0, 1)');
    }

    async verifyAtExpirationOptions(i: number): Promise<void> {
        const options = await this.uIExpirationComboBox.locator('option').allInnerTexts();
        expect(options).toContain(BaseData.getHomeModuleValue(`expirationOptions${i}`));
    }

    async verify1046AcknowledgePopup(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('1046 - Record already exists');
        await this.popup.acknowledgeOkButton.click();
    }

    async clearWarrantType(): Promise<void> {
        await this.uIWarrantTypeEdit.clear();
    }

    async saveAndAddNew(): Promise<void> {
        await this.uISaveAndAddNew.click();
        await this.popup.confirmYes();
    }
}
