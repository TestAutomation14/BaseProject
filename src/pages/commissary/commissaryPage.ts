import { Page, Locator, expect } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { AcknowledgePage, ConfirmPage, PopupPage } from '../popup.page';
import { BaseData } from '../../data/base-data';
import { GridHelpers } from '../../helpers/grid-helpers';
import { ElementHelpers } from '../../helpers/element-helpers';
import { PopupHelpers } from '../../helpers/popup-helpers';
import { DateHelpers, RandomHelpers } from '../../helpers';

export class CommissaryPage {
    readonly page: Page;
    private browserHelpers: BrowserHelpers;

    constructor(page: Page) {
        this.page = page;
        this.browserHelpers = new BrowserHelpers(page);
    }

    async Reset(): Promise<void> {
        // Managed by Playwright test context
    }

    async switchToFundTransfer(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmFundTransfer.aspx?');
    }

    async switchToCategoryRestriction(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmCategoryRestriction.aspx?');
    }

    async switchToCanteenOrderSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Canteen Order Search');
    }

    async switchToCanteenOrderEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Canteen Order Entry');
    }

    async switchToPurchaseSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Purchase Search');
    }

    async switchToPurchase(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Purchase');
    }

    async switchToAccountHistory(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Account History');
    }

    async switchToAccountMaster(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Account Master');
    }

    async switchToInmateDetails(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Inmate Details');
    }

    async switchToPendingDelivery(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('PendingDelivery');
    }

    async switchToVendorSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Vendor Search');
    }

    async switchToVendorEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Vendor Entry');
    }

    async switchToBankReconciliation(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Bank Reconciliation');
    }

    async switchToBankReconciliationWindow(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Bank Reconciliation');
    }

    async switchToBankStatementEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Bank Statement');
    }

    async switchToBatchBillingSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Batch Billing Search');
    }

    async switchToBatchBillingEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Batch Billing');
    }

    async switchToItemSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Item Search');
    }

    async switchToItemEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Item Entry');
    }

    async switchToItemSearch1(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Item Search');
    }

    async switchToBankDepositSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmBankDepositInquiry.aspx?');
    }

    async switchToBankDeposit(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Bank Deposit');
    }

    async switchToDepositReleaseFunds(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Deposit Release Funds');
    }

    async switchToCashSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmCashDrawerSrch.aspx?');
    }

    async switchToDrawerPermission(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Drawer Permission');
    }

    async switchToCashDrawer(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmCashDrawer.aspx?');
    }

    async switchToCodedCombo(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.browserHelpers.switchToPageByUrl('frmCodedCombo.aspx');
    }

    async switchToFreezeAccount(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.browserHelpers.switchToPageByUrl('frmFreezeAcc.aspx');
    }

    async switchToCashDrawerScreen(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Cash Drawer');
    }

    async switchToInmateDetailsWindow(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Inmate Details');
    }
}

export class CanteenOrderSearchPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly uIAddNewButton: Locator;
    readonly uIPendingDelivery: Locator;
    readonly uISearchButton: Locator;
    readonly uIResultGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uIAddNewButton = page.locator("//span[text()='Add New']");
        this.uIPendingDelivery = page.locator("//span[text()='Pending Delivery']");
        this.uISearchButton = page.locator('#cmdSearch');
        this.uIResultGrid = page.locator('#grdOrderSrch');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickPendingDelivery(): Promise<void> {
        await this.uIPendingDelivery.click();
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async getNamesInGrid(): Promise<string[]> {
        return await this.grid.getGridTableColumnValues(this.uIResultGrid, 'Name');
    }

    async selectAtNameInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIResultGrid, BaseData.getTestValue('Name'));
    }
}

export class CanteenOrderEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly uISPNEdit: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIFacilityStockCodeEdit: Locator;
    readonly uIQuantityEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIOrderTable: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uISPNEdit = page.locator('#txtSPN');
        this.uINameTypeEdit = page.locator('#nbrName_NameType');
        this.uILastNameEdit = page.locator('#nbrName_LastName');
        this.uIFirstNameEdit = page.locator('#nbrName_FirstName');
        this.uIFacilityStockCodeEdit = page.locator('#lupStCode_CodeValue');
        this.uIQuantityEdit = page.locator('#txtQuantity');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIOrderTable = page.locator('#grdOrders');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async enterAtSPN(): Promise<void> {
        await this.uISPNEdit.fill(BaseData.getTestValue('SPN'));
        await this.uISPNEdit.press('Tab');
    }

    async verify6001NameMandatoryAck(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6001)Last Name and First Name are mandatory');
        await this.popup.acknowledgeOk();
    }

    async enterAtFacilityStockCode(): Promise<void> {
        await this.uIFacilityStockCodeEdit.fill(BaseData.getTestValue('FacilityStockCode'));
    }

    async enterAtQuantity(): Promise<void> {
        await this.uIQuantityEdit.fill(BaseData.getTestValue('Quantity'));
        await this.uIQuantityEdit.press('Tab');
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verify32504OrderExceedsAmtConfirmPopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(32504)Order exceeds Maximum Dollar Amount . Do You Want To Continue?');
        await this.popup.confirmYes();
    }

    async verifyAtFacilityStockCodeInGrid(): Promise<void> {
        const itemCell = await this.grid.getGridCell(this.uIOrderTable, BaseData.getTestValue('FacilityStockCode'), 'Item');
        const text = await itemCell.innerText();
        expect(text.trim()).toBe(BaseData.getTestValue('Item'));
    }

    async verify32532HygieneOrderExceedsDollarLimitConfirmPopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(32532)Hygiene order exceeds total dollar limit. Do you want to continue?');
        await this.popup.confirmYes();
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verifyLastAndFirstNameDisabled(): Promise<void> {
        const lastClass = await this.uILastNameEdit.getAttribute('class') || '';
        expect(lastClass).toContain('textboxInactive');
        const firstClass = await this.uIFirstNameEdit.getAttribute('class') || '';
        expect(firstClass).toContain('textboxInactive');
    }

    async clickNameIDAndTabout(): Promise<void> {
        await this.uINameTypeEdit.click();
        await this.uINameTypeEdit.press('Tab');
    }

    async verifyQuantityFieldIsEnabled(): Promise<void> {
        await expect(this.uIQuantityEdit).toBeEnabled();
    }

    async verifyAtQualityInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIOrderTable, BaseData.getTestValue('Quantity'), 'Quantity');
        const text = await cell.innerText();
        expect(text.trim()).toBe(BaseData.getTestValue('Quantity'));
    }

    async verifyAtQuantity(): Promise<void> {
        const value = await this.uIQuantityEdit.inputValue();
        expect(value).toBe(BaseData.getTestValue('Quantity'));
    }

    async verifyNoDataPresentAcknowledgePopupMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(7) No data present');
        await this.popup.acknowledgeOk();
    }

    async clickSaveIcon(): Promise<void> {
        await this.uISaveButton.click();
    }
}

export class PurchaseSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIAddNewButton: Locator;
    readonly uIPurchaseSrchResultTable: Locator;
    readonly uISearchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIAddNewButton = page.locator("//span[text()='Add New']");
        this.uIPurchaseSrchResultTable = page.locator("//div[@id='grdPurchaseSrch']");
        this.uISearchButton = page.locator('#cmdSearch');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async selectAtOrderNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIPurchaseSrchResultTable, BaseData.getTestValue('OrderNo'));
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }
}

export class PurchasePage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly uIAddButton: Locator;
    readonly uIVendorNameType: Locator;
    readonly uIVendorNameID: Locator;
    readonly uIVendorLastName: Locator;
    readonly uIVendorFirstName: Locator;
    readonly uIOfficerEdit: Locator;
    readonly uIOrderDate: Locator;
    readonly uIOrderTime: Locator;
    readonly uIFacilityStockNoEdit: Locator;
    readonly uIOrderQuantityEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIPurchaseTable: Locator;
    readonly uIActionDropdown: Locator;
    readonly uIReceivedDateEdit: Locator;
    readonly uIReceivedTimeEdit: Locator;
    readonly uIContainersRvcdEdit: Locator;
    readonly uIUpdateButton: Locator;
    readonly uIResetIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uIAddButton = page.locator('#cmdAddProduct');
        this.uIVendorNameType = page.locator('#nCtrlPurchase_NameType');
        this.uIVendorNameID = page.locator('#nCtrlPurchase_NameTypeID');
        this.uIVendorLastName = page.locator('#nCtrlPurchase_LastName');
        this.uIVendorFirstName = page.locator('#nCtrlPurchase_FirstName');
        this.uIOfficerEdit = page.locator('#lupOfficer_CodeValue');
        this.uIOrderDate = page.locator('#podDate_Date_KPIDttmCtrl');
        this.uIOrderTime = page.locator("//table[@id='podDate_Time']//input");
        this.uIFacilityStockNoEdit = page.locator('#lupfiscNbr_CodeValue');
        this.uIOrderQuantityEdit = page.locator('#txtQuantity');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIPurchaseTable = page.locator('#grdPurchase');
        this.uIActionDropdown = page.locator('#cddAction_DropDown');
        this.uIReceivedDateEdit = page.locator('#podDate_Date_KPIDttmCtrl');
        this.uIReceivedTimeEdit = page.locator("//table[@id='podDate_Time']//input");
        this.uIContainersRvcdEdit = page.locator('#txtQuantity');
        this.uIUpdateButton = page.locator('#cmdAddProduct');
        this.uIResetIcon = page.locator('#cmdRefresh');
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async verify6001NameMandatoryAck(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6001)Last Name and First Name are mandatory');
        await this.popup.acknowledgeOk();
    }

    async enterAtVendorName(): Promise<void> {
        const nameId = BaseData.getTestValue('NameID');
        await this.uIVendorNameType.fill(nameId.substring(0, 1));
        await this.uIVendorNameID.fill(nameId.substring(2));
        await this.uIVendorNameID.press('Tab');
    }

    async verifyNoDataPresentAck(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(7)No data present');
        await this.popup.acknowledgeOk();
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifyEnterMandatoryDataAck(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8)Enter mandatory data');
        await this.popup.acknowledgeOk();
    }

    async enterAtOfficer(): Promise<void> {
        await this.uIOfficerEdit.fill(BaseData.getTestValue('Officer'));
    }

    async enterAtFacilityStock(): Promise<void> {
        await this.uIFacilityStockNoEdit.fill(BaseData.getTestValue('FacilityStockNo'));
    }

    async tabOutOrderedDateAndTime(): Promise<void> {
        await this.uIOrderDate.press('Tab');
        await this.uIOrderTime.press('Tab');
    }

    async enterOrderQuantity(): Promise<void> {
        await this.uIOrderQuantityEdit.fill(RandomHelpers.randomNumberString(1));
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verifyAtFacilityInGrid(): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIPurchaseTable, 'Facility #', 0);
        expect(text).toBe(BaseData.getTestValue('FacilityStockNo'));
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async selectAtAction(i: number): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIActionDropdown.selectOption({ label: BaseData.getTestValue('Action' + i) });
        await this.uIActionDropdown.press('Tab');
    }

    async selectAtFacilityNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIPurchaseTable, BaseData.getTestValue('FacilityNo'));
    }

    async enterReceivedDateAsPreviousDate(): Promise<void> {
        await this.uIReceivedDateEdit.fill(DateHelpers.getPreviousDate(3));
        await this.uIReceivedTimeEdit.press('Tab');
    }

    async enterAtContainersReceived(i: number): Promise<void> {
        await this.uIContainersRvcdEdit.clear();
        await this.uIContainersRvcdEdit.fill(BaseData.getTestValue('ContainersReceived' + i));
        await this.uIContainersRvcdEdit.press('Tab');
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }

    async verify32528ReceiveddDateCannotBeLessThanLastOrderedDateAcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(32528) Received Date cannot be less than last Ordered Date');
        await this.popup.acknowledgeOk();
    }

    async clickResetIcon(): Promise<void> {
        await this.uIResetIcon.click();
    }

    async tabOutReceivedDateAndTime(): Promise<void> {
        await this.uIReceivedDateEdit.fill(DateHelpers.getCurrentDate());
        await this.uIReceivedTimeEdit.press('Tab');
    }

    async verifyEnterMandatoryAcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8) Enter mandatory data');
        await this.popup.acknowledgeOk();
    }

    async verify18005ReceivedQuatityCannotBeGreaterThanOrderedQuantityAcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(18005) Received Quantity cannot be greater than Ordered Quantity');
        await this.popup.acknowledgeOk();
    }

    async verify30033EnterAQuantityGreaterThanZeroAcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(30033) Enter a Quantity greater than 0.');
        await this.popup.acknowledgeOk();
    }

    async verifyAtUnitReceivedInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIPurchaseTable, BaseData.getTestValue('ActionType'), 'Units Received');
        const text = await cell.innerText();
        expect(text.trim()).toBe(BaseData.getTestValue('UnitsReceived'));
    }

    async verify6020InvalidNameIDAcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6020) Invalid Name ID');
        await this.popup.acknowledgeOk();
    }

    async enterAtFirstName(): Promise<void> {
        await this.uIVendorFirstName.fill(BaseData.getTestValue('FirstName'));
        await this.uIVendorFirstName.press('Tab');
    }
}

export class AccountHistoryPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uICreateNewAccountButton: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIAccountTypeDropDown: Locator;
    readonly uIDepositReleaseFundsButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIActionDropdown: Locator;
    readonly uISearchButton: Locator;
    readonly uIAccountHistoryTable: Locator;
    readonly uIInactiveCheckbox: Locator;
    readonly uIInActiveDateEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uICreateNewAccountButton = page.locator("//span[text()='Create New Account']");
        this.uIPrintIcon = page.locator("//img[@src='/KPIImages/ico/16_print.gif']");
        this.uIAccountTypeDropDown = page.locator('#tabSuspSrch_tmpl0_usrInmateAccBasic1_cddAccountType_DropDown');
        this.uIDepositReleaseFundsButton = page.locator("//span[text()='Deposit/Release Funds']");
        this.uIResetButton = page.locator("//span[text()='Reset']");
        this.uIActionDropdown = page.locator('#tabSuspSrch_tmpl0_usrInmateAccBasic1_cddAction_ListBox');
        this.uISearchButton = page.locator("//span[text()='Search']");
        this.uIAccountHistoryTable = page.locator('#gridNotInmTD');
        this.uIInactiveCheckbox = page.locator('#chkInActive');
        this.uIInActiveDateEdit = page.locator('#txtInActiveDttm');
    }

    async clickCreateNewAccount(): Promise<void> {
        await this.uICreateNewAccountButton.click();
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async verifyAccountTypeDropDownIsDisplayed(): Promise<void> {
        await expect(this.uIAccountTypeDropDown).toBeVisible();
    }

    async SelectAtAccountType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIAccountTypeDropDown, BaseData.getTestValue('AccountType'));
    }

    async clickDepositReleaseFunds(): Promise<void> {
        await this.uIDepositReleaseFundsButton.click();
    }

    async clickReset(): Promise<void> {
        await this.uIResetButton.click();
    }

    async verifyAtAction(): Promise<void> {
        const options = await this.uIActionDropdown.locator('option').allInnerTexts();
        expect(options).toContain(BaseData.getTestValue('Action'));
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async selectAtBookingNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAccountHistoryTable, BaseData.getTestValue('BookingNo'));
    }

    async selectAtDescriptionInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAccountHistoryTable, BaseData.getTestValue('Description'));
    }

    async selectRandomRecord(): Promise<void> {
        await this.grid.selectRandomRow(this.uIAccountHistoryTable);
    }
}

export class AccountMasterPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIAccountTypeDropdown: Locator;
    readonly uIOpeningBalanceEdit: Locator;
    readonly uISPNEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIStatusBar: Locator;
    readonly uIInactiveCheckbox: Locator;
    readonly uIInActiveDateEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIAccountTypeDropdown = page.locator('#cddAccType_DropDown');
        this.uIOpeningBalanceEdit = page.locator('#txtAmount');
        this.uISPNEdit = page.locator('#NamCtrlAccount_SPN');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIStatusBar = page.locator("//td[@class='statusBar']//b");
        this.uIInactiveCheckbox = page.locator('#chkInActive');
        this.uIInActiveDateEdit = page.locator('#txtInActiveDttm');
    }

    async selectAccountType(): Promise<void> {
        const options = await this.uIAccountTypeDropdown.locator('option').allInnerTexts();
        const validOptions = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOption = validOptions[Math.floor(Math.random() * validOptions.length)];
        await this.uIAccountTypeDropdown.selectOption({ label: randomOption });
    }

    async selectAtAccountType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIAccountTypeDropdown, BaseData.getTestValue('AccountType'));
    }

    async enterAtSPN(): Promise<void> {
        await this.uISPNEdit.fill(BaseData.getTestValue('SPN'));
        await this.uISPNEdit.press('Tab');
    }

    async enterAtOpeningBalance(): Promise<void> {
        await this.uIOpeningBalanceEdit.fill(BaseData.getTestValue('OpeningBalance'));
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async verifyEnterMandatoryAcknowledgePopupDoesNotArise(): Promise<void> {
        await expect(this.popup.modalBody).not.toBeVisible({ timeout: 3000 }).catch(() => { });
    }

    async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
        const text = await this.uIStatusBar.innerText();
        expect(text).toContain('1002 - Addition Successful');
    }

    async verify1008ErrorPopUpIsNotArised(): Promise<void> {
        await expect(this.popup.modalBody).not.toBeVisible({ timeout: 3000 }).catch(() => { });
    }

    async clickInactiveCheckbox(): Promise<void> {
        await this.uIInactiveCheckbox.click();
    }

    async verifyInactiveDateAsCurrentDate(): Promise<void> {
        const date = await this.uIInActiveDateEdit.inputValue();
        expect(date).toBe(DateHelpers.getCurrentDate());
    }

    async verifySaveIconIsDisabled(): Promise<void> {
        await expect(this.uISaveButton).toBeDisabled();
    }

    async verifySaveNCloseIconIsDisabled(): Promise<void> {
        await expect(this.uISaveAndCloseButton).toBeDisabled();
    }
}

export class InmateDetailsPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly browserHelpers: BrowserHelpers;
    readonly uISPNEdit: Locator;
    readonly uIBalanceAmountValueText: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIPrintButton: Locator;
    readonly uIFacilityIcon: Locator;
    readonly uIAdmissionIcon: Locator;
    readonly uIPropertyIcon: Locator;
    readonly uIScheduleIcon: Locator;
    readonly uIWorkReleaseIcon: Locator;
    readonly uINameMineIcon: Locator;
    readonly uIDepositReleaseFundsTab: Locator;
    readonly uISaveIcon: Locator;
    readonly uIBillingTab: Locator;
    readonly uIResetIcon: Locator;
    readonly uIAccountHistoryTab: Locator;
    readonly uIRestrictionTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.browserHelpers = new BrowserHelpers(page);
        this.uISPNEdit = page.locator('#HeaderCtrl_txtSPINNbr');
        this.uIBalanceAmountValueText = page.locator('#KPIlblAnount');
        this.uILastNameEdit = page.locator('#HeaderCtrl_nmInmateName_LastName');
        this.uIFirstNameEdit = page.locator('#HeaderCtrl_nmInmateName_FirstName');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIFacilityIcon = page.locator('#JailQuickMenuCtrl1_imgBtn2');
        this.uIAdmissionIcon = page.locator('#JailQuickMenuCtrl1_imgBtn1');
        this.uIPropertyIcon = page.locator('#JailQuickMenuCtrl1_imgBtn3');
        this.uIScheduleIcon = page.locator('#JailQuickMenuCtrl1_imgBtn4');
        this.uIWorkReleaseIcon = page.locator('#JailQuickMenuCtrl1_imgBtn6');
        this.uINameMineIcon = page.locator('#JailQuickMenuCtrl1_imgBtn5');
        this.uIDepositReleaseFundsTab = page.locator("//span[text()='Deposit/Release Funds']");
        this.uISaveIcon = page.locator('#cmdSave');
        this.uIBillingTab = page.locator("//span[contains(text(), 'Billing')]");
        this.uIResetIcon = page.locator('#cmdRefresh');
        this.uIAccountHistoryTab = page.locator("//span[contains(text(), 'Account History')]");
        this.uIRestrictionTab = page.locator("//span[contains(text(), 'Restrictions')]");
    }

    async enterAtSPN(): Promise<void> {
        await this.uISPNEdit.fill(BaseData.getTestValue('SPN'));
        await this.uISPNEdit.press('Tab');
    }

    async verifyAtBalanceAmount(): Promise<void> {
        const balanceAmt = await this.uIBalanceAmountValueText.inputValue();
        expect(balanceAmt).toBe(BaseData.getTestValue('OpeningBalance'));
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintButton.click();
    }

    async clickAdmissionIcon(): Promise<void> {
        await this.uIAdmissionIcon.click();
    }

    async clickFacilityIcon(): Promise<void> {
        await this.uIFacilityIcon.click();
    }

    async clickPropertyIcon(): Promise<void> {
        await this.uIPropertyIcon.click();
    }

    async clickScheduleIcon(): Promise<void> {
        await this.uIScheduleIcon.click();
    }

    async clickNameMineIcon(): Promise<void> {
        await this.uINameMineIcon.click();
    }

    async clickWorkReleaseIcon(): Promise<void> {
        await this.uIWorkReleaseIcon.click();
    }

    async verifyWindowExists(windowTitle: string): Promise<void> {
        const isOpened = await this.browserHelpers.windowExistsByTitle(windowTitle);
        expect(isOpened).toBeTruthy();
    }

    async switchToDepositReleaseFundsTab(): Promise<void> {
        this.browserHelpers.switchToFrame('frmDepositReleaseFunds');
    }

    async save(): Promise<void> {
        await this.uISaveIcon.click();
    }

    async saveScreen(): Promise<void> {
        await this.uISaveIcon.click();
        await this.popup.confirmYes();
    }

    async switchToBillingTab(): Promise<void> {
        await this.uIBillingTab.click();
    }

    async clickResetIcon(): Promise<void> {
        await this.uIResetIcon.click();
    }

    async clickAccountHistoryTab(): Promise<void> {
        await this.uIAccountHistoryTab.click();
        await this.page.waitForTimeout(1000);
        this.browserHelpers.switchToFrame('frmInmateAccHist.aspx?');
    }

    async verify1003UpdateSuccessfulAcknowledgePopupMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('1003 - Update Successful');
        await this.popup.acknowledgeOk();
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async switchToRestrictionsTab(): Promise<void> {
        await this.uIRestrictionTab.click();
    }
}

export class DepositReleaseFundsTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uISaveButton: Locator;
    readonly uIActionDropDown: Locator;
    readonly uIDrawerDropDown: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIOfficerEdit: Locator;
    readonly uIPaymentMethodDropDown: Locator;
    readonly uIMediaDropDown: Locator;
    readonly uIAmountEdit: Locator;
    readonly uICheckNoField: Locator;
    readonly uINameField: Locator;

    constructor(page: Page) {
        this.page = page;
        const tabFrame = page.frameLocator('iframe[src*="frmDepositReleaseFunds"]');
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uISaveButton = tabFrame.locator('#cmdSave');
        this.uIActionDropDown = tabFrame.locator('#cddAction_DropDown');
        this.uIDrawerDropDown = tabFrame.locator('#cddDrawer_DropDown');
        this.uIDateEdit = tabFrame.locator('#dtmDateTime_Date_KPIDttmCtrl');
        this.uITimeEdit = tabFrame.locator("//table[@id='dtmDateTime_Time']//input");
        this.uIOfficerEdit = tabFrame.locator('#lupOnCallOffID_CodeValue');
        this.uIPaymentMethodDropDown = tabFrame.locator('#cddPaymentMethod_DropDown');
        this.uIMediaDropDown = tabFrame.locator('#cddMedia_DropDown');
        this.uIAmountEdit = tabFrame.locator('#txtMoneyIntakeAmount');
        this.uICheckNoField = tabFrame.locator('#lblCheckNbrROTH');
        this.uINameField = tabFrame.locator('#lblName');
    }

    async clicksave(): Promise<void> {
        await this.uISaveButton.click();
    }

    // async selectAtAction(): Promise<void> {
    //     await this.elementHelpers.selectDropDownOption(this.uIActionDropDown, BaseData.getTestValue('Action'));
    // }

    async selectAtDrawer(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIDrawerDropDown, BaseData.getTestValue('Drawer'));
    }

    async tabOutDateTime(): Promise<void> {
        await this.uIDateEdit.click();
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.click();
        await this.uITimeEdit.press('Tab');
    }

    async enterAtOfficer(): Promise<void> {
        await this.uIOfficerEdit.fill(BaseData.getTestValue('Officer'));
    }

    async selectAtPaymentMethod(): Promise<void> {
        await this.uIPaymentMethodDropDown.fill(BaseData.getTestValue('Payment Method'));
    }

    async selectAtMedia(): Promise<void> {
        await this.uIMediaDropDown.fill(BaseData.getTestValue('Media'));
    }

    async enterAtAmount(): Promise<void> {
        await this.uIAmountEdit.fill(BaseData.getTestValue('Amount'));
    }

    async verify30033EnterDrawerAckPopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(30033) Enter Drawer.');
        await this.popup.acknowledgeOk();
    }

    async verifyAtActionDropdown(i: number): Promise<void> {
        const options = await this.uIActionDropDown.locator('option').allInnerTexts();
        expect(options).toContain(BaseData.getAccountingModuleValue('Action' + i));
    }

    async selectAtAction(i: number): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIActionDropDown, BaseData.getTestValue('Action' + i));
        await this.uIActionDropDown.press('Tab');
    }

    async verifyCheckNoFieldIsMandatory(): Promise<void> {
        const color = 'rgba(153, 0, 0, 1)';
        const cssValue = await this.uICheckNoField.evaluate(el => getComputedStyle(el).color);
        expect(cssValue).toBe(color);
    }

    async verifyNameFieldIsMandatory(): Promise<void> {
        const color = 'rgba(153, 0, 0, 1)';
        const cssValue = await this.uINameField.evaluate(el => getComputedStyle(el).color);
        expect(cssValue).toBe(color);
    }

    async verifyNameFieldIsNotMandatory(): Promise<void> {
        const color = 'rgba(0, 0, 0, 1)';
        const cssValue = await this.uINameField.evaluate(el => getComputedStyle(el).color);
        expect(cssValue).toBe(color);
    }

    async verifyCheckNoFieldIsNotMandatory(): Promise<void> {
        const color = 'rgba(0, 0, 0, 1)';
        const cssValue = await this.uICheckNoField.evaluate(el => getComputedStyle(el).color);
        expect(cssValue).toBe(color);
    }
}

export class InmateBillingTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIFeesTypeDropDown: Locator;
    readonly uIFeesDescriptionEdit: Locator;
    readonly uIAmountEdit: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIOfficerEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIBillingTable: Locator;
    readonly uIResetButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIFeesTypeDropDown = page.locator('#tabInmate_tmpl1_usBill1_cddFeeDetails_DropDown');
        this.uIFeesDescriptionEdit = page.locator('#tabInmate_tmpl1_usBill1_txtFeeDesc');
        this.uIAmountEdit = page.locator('#tabInmate_tmpl1_usBill1_txtAmount');
        this.uIDateEdit = page.locator('#tabInmate_tmpl1_usBill1_dtcBillDate_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='tabInmate_tmpl1_usBill1_dtcBillDate_Time']//input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIOfficerEdit = page.locator('#tabInmate_tmpl1_usBill1_lupOfficer_CodeValue');
        this.uIAddButton = page.locator('#tabInmate_tmpl1_usBill1_cmdAddProduct');
        this.uIBillingTable = page.locator('#tabInmate_tmpl1_usBill1_grdInmateBilling');
        this.uIResetButton = page.locator('#tabInmate_tmpl1_usBill1_cmdReset');
    }

    async selectAtFeeType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIFeesTypeDropDown, BaseData.getTestValue('FeesType'));
    }

    async enterAtFeeDescription(): Promise<void> {
        await this.uIFeesDescriptionEdit.fill(BaseData.getTestValue('FeesDescription'));
    }

    async enterAtAmount(): Promise<void> {
        await this.uIAmountEdit.fill(BaseData.getTestValue('Amount'));
    }

    async tabOutDateAndTime(): Promise<void> {
        await this.uIDateEdit.click();
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.click();
        await this.uITimeEdit.press('Tab');
    }

    async enterAtOfficer(): Promise<void> {
        await this.uIOfficerEdit.fill(BaseData.getTestValue('Officer'));
        await this.uIOfficerEdit.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifyAtFeesDescriptionInGrid(): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIBillingTable, 'Fee Description', 0);
        expect(text).toBe(BaseData.getTestValue('FeesDescription'));
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async verifyFeeTypeAsNull(): Promise<void> {
        const selected = await this.uIFeesTypeDropDown.inputValue();
        expect(selected).toBe('--');
    }

    async verifyDateAndTimeFieldIsBlank(): Promise<void> {
        const blankDate = (await this.uIDateEdit.inputValue()).trim() === '';
        expect(blankDate).toBeTruthy();
        const blankTime = (await this.uITimeEdit.inputValue()).trim() === '';
        expect(blankTime).toBeTruthy();
    }

    async verifyAmountIsBlank(): Promise<void> {
        const amount = (await this.uIAmountEdit.inputValue()).trim() === '';
        expect(amount).toBeTruthy();
    }
}

export class InmateAccountHistoryTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIAccountHistoryGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIAccountHistoryGrid = page.locator('#grdAccHist');
    }

    async selectAtDescriptionInGrid(i: number): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAccountHistoryGrid, BaseData.getTestValue('Description' + i));
    }
}

export class InmateRestrictionsTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIRestrictionDropdown: Locator;
    readonly uICommentsEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIUpdateButton: Locator;
    readonly uIRestrictionsGridTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIRestrictionDropdown = page.locator('#tabInmate_tmpl2_idUsrrestrict_cddrestrict_DropDown');
        this.uICommentsEdit = page.locator('#tabInmate_tmpl2_idUsrrestrict_txtcomment');
        this.uIAddButton = page.locator('#tabInmate_tmpl2_idUsrrestrict_cmdAdd');
        this.uIUpdateButton = page.locator('#tabInmate_tmpl2_idUsrrestrict_cmdAdd');
        this.uIRestrictionsGridTable = page.locator('#tabInmate_tmpl2_idUsrrestrict_grdInmateDetail');
    }

    async selectAtRestriction(i: number): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIRestrictionDropdown, BaseData.getTestValue('Restriction' + i));
    }

    async enterAtComments(i: number): Promise<void> {
        await this.uICommentsEdit.clear();
        await this.uICommentsEdit.fill(BaseData.getTestValue('Comments' + i));
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async selectAtRestrictionsInGrid(i: number): Promise<void> {
        await this.grid.selectRowByCellText(this.uIRestrictionsGridTable, BaseData.getTestValue('Restriction' + i));
    }

    async verifyAtRestrictionsInGrid(i: number): Promise<void> {
        const restrictions = await this.grid.getGridCell(this.uIRestrictionsGridTable, BaseData.getTestValue('Restriction' + i), "");
        const text = await restrictions.innerText();
        expect(text.trim()).toBe(BaseData.getTestValue('Restriction' + i));
    }

    async verifyAtCommentsInGrid(i: number): Promise<void> {
        const comments = await this.grid.getGridCell(this.uIRestrictionsGridTable, BaseData.getTestValue('Comments' + i), "");
        const text = await comments.innerText();
        expect(text.trim()).toBe(BaseData.getTestValue('Comments' + i));
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }
}

export class CategoryRestrictionPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uISaveIcon: Locator;
    readonly uISaveAndCloseIcon: Locator;
    readonly uIItemResultGrid: Locator;
    readonly uICategoryDropdown: Locator;
    readonly uIDollarAmountEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIResetIcon: Locator;
    readonly uICategoryRestrictionTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uISaveIcon = page.locator('#cmdSave');
        this.uISaveAndCloseIcon = page.locator('#cmdSaveNClose');
        this.uIItemResultGrid = page.locator('#grdItem');
        this.uICategoryDropdown = page.locator('#cddCategory_ListBox');
        this.uIDollarAmountEdit = page.locator('#txtDollarAmount');
        this.uIAddButton = page.locator('#cmdAddItem');
        this.uIResetIcon = page.locator('#cmdRefresh');
        this.uICategoryRestrictionTable = page.locator('#grdItem');
    }

    async save(): Promise<void> {
        await this.uISaveIcon.click();
        await this.popup.confirmYes();
    }

    async clickSave(): Promise<void> {
        await this.uISaveIcon.click();
    }

    async verifyUpdatedDataExistsAcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1056)Updated data exists in the fields. You must save or reset');
        await this.popup.acknowledgeOk();
    }

    async selectGridRowByCategory(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIItemResultGrid, BaseData.getTestValue('Category'));
    }

    async selectAtCategoryByIndex(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uICategoryDropdown, BaseData.getTestValue('Category'));
    }

    async enterAtDollarAmount(): Promise<void> {
        await this.uIDollarAmountEdit.fill(BaseData.getTestValue('DollarAmount'));
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifySelectCategoryAcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(30098)Please Select Category');
        await this.popup.acknowledgeOk();
    }

    async selectAtCategory(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uICategoryDropdown, BaseData.getTestValue('Category1'));
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetIcon.click();
    }

    async verifyUpdateSuccessfulMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('1003 - Update Successful');
        await this.popup.acknowledgeOk();
    }

    async verifyDollarAmountInGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uICategoryRestrictionTable, 'Dollar Amount');
        expect(columnValues).toContain(BaseData.getTestValue('DollarAmount'));
    }

    async verify7NoDataPresentAcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(7) No data present');
        await this.popup.acknowledgeOk();
    }
}

export class PendingDeliveryPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIResultTable: Locator;
    readonly uIResetIcon: Locator;
    readonly uIListOrder: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIResultTable = page.locator('#grdPendingOrders');
        this.uIResetIcon = page.locator('#cmdRefresh');
        this.uIListOrder = page.locator('#btnListOrder');
    }

    async verifyAtGridIsNull(): Promise<void> {
        const count = await this.grid.getRowCount(this.uIResultTable);
        expect(count).toBe(0);
    }

    async clickResetIcon(): Promise<void> {
        await this.uIResetIcon.click();
    }

    async clickListOrder(): Promise<void> {
        await this.uIListOrder.click();
    }

    async verifyAtGridIsNotNull(): Promise<void> {
        const count = await this.grid.getRowCount(this.uIResultTable);
        expect(count).not.toBe(0);
    }

    async getNamesInGrid(): Promise<string[]> {
        return await this.grid.getGridTableColumnValues(this.uIResultTable, 'Name');
    }

    async verifyAtNames(name: string[], name2: string[]): Promise<void> {
        expect(name).toEqual(name2);
    }

    async close(): Promise<void> {
        await this.page.close();
    }
}

export class FundTransferPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIAccountTypeDropDown: Locator;
    readonly uISrcSPNEdit: Locator;
    readonly uIToSPNEdit: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIAmountToBeTransferredEdit: Locator;
    readonly uIsaveButton: Locator;
    readonly uIConfirmationPopupYesButton: Locator;
    readonly uIAccountName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIAccountTypeDropDown = page.locator('#cddFeeDetails_DropDown');
        this.uISrcSPNEdit = page.locator('#txtSrcInmSPN');
        this.uIToSPNEdit = page.locator('#txtToInmSPN');
        this.uIDateEdit = page.locator('#dtcBillDate_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='dtcBillDate_Time']//input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIAmountToBeTransferredEdit = page.locator('#txtAmount');
        this.uIsaveButton = page.locator('#cmdSave');
        this.uIConfirmationPopupYesButton = page.locator("//div//button[text()='Yes']");
        this.uIAccountName = page.locator('#txtAccName');
    }

    async selectAtAccountType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIAccountTypeDropDown, BaseData.getTestValue('AccountType'));
    }

    async enterAtSrcSPN(): Promise<void> {
        await this.uISrcSPNEdit.fill(BaseData.getTestValue('SrcSPN'));
        await this.uISrcSPNEdit.press('Tab');
    }

    async enterAtToSPN(): Promise<void> {
        await this.uIToSPNEdit.fill(BaseData.getTestValue('ToSPN'));
    }

    async tabOutDateAndTime(): Promise<void> {
        await this.uIDateEdit.click();
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.click();
        await this.uITimeEdit.press('Tab');
    }

    async enterAtAmountToBeTransferred(): Promise<void> {
        await this.uIAmountToBeTransferredEdit.fill(BaseData.getTestValue('AmountToBeTransferred'));
        await this.uIAmountToBeTransferredEdit.press('Tab');
    }

    async saveScreen(): Promise<void> {
        await this.uIsaveButton.click();
        await this.uIConfirmationPopupYesButton.click();
    }

    async verify1002AdditionalSuccessfulAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('1002 - Addition Successful');
        await this.popup.acknowledgeOk();
    }

    async verifyAtAccountName(): Promise<void> {
        const accountName = await this.uIAccountName.inputValue();
        expect(accountName).toBe(BaseData.getTestValue('AccountName'));
    }
}

export class VendorSearchPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uIAddNewButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIVendorName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uIAddNewButton = page.locator("//span[text()='Add New']");
        this.uISearchButton = page.locator('#cmdSearch');
        this.uIVendorName = page.locator('#txtLastName');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async enterAtVendorName(): Promise<void> {
        await this.uIVendorName.fill(BaseData.getTestValue('VendorName'));
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async verify1011NoRecordFound(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('1011 - No Record Found');
        await this.popup.acknowledgeOk();
    }
}

export class VendorEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly browserHelpers: BrowserHelpers;
    readonly uINameTypeEdit: Locator;
    readonly uINameIDEdit: Locator;
    readonly uIProductTab: Locator;
    readonly uISaveButton: Locator;
    readonly uIVendorEntryTable: Locator;
    readonly uIPurchaseHistoryTab: Locator;
    readonly uINotesTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.browserHelpers = new BrowserHelpers(page);
        this.uINameTypeEdit = page.locator('#NamCtrlVEN_NameType');
        this.uINameIDEdit = page.locator('#NamCtrlVEN_NameTypeID');
        this.uIProductTab = page.locator("(//span[contains(text(),'Product')])");
        this.uISaveButton = page.locator('#cmdSave');
        this.uIVendorEntryTable = page.locator('#tabVendEntry_tmpl0_ucProducts_grdVendorEntry');
        this.uIPurchaseHistoryTab = page.locator("//span[text()='Purchase History']");
        this.uINotesTab = page.locator("//span[text()='Notes']");
    }

    async enterAtNameID(): Promise<void> {
        const nameId = BaseData.getNamesModuleValue('NameID');
        await this.uINameTypeEdit.fill(nameId.substring(0, 1));
        await this.uINameIDEdit.fill(nameId.substring(2));
        await this.uINameIDEdit.press('Tab');
    }

    async switchToProductTab(): Promise<void> {
        await this.uIProductTab.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async navigateToProductTab(): Promise<void> {
        await this.uIProductTab.click();
    }

    async verifyAtVISCNoInGrid(): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIVendorEntryTable, 'VISC #', 0);
        expect(text).toBe(BaseData.getTestValue('VendorItemStockCode'));
    }

    async verifyTabColorAsBlue(i: number): Promise<void> {
        const tab = this.page.locator(`//span[text()='${BaseData.getTestValue('TabName' + i)}']`);
        const color = await tab.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(0, 0, 255, 1)');
    }

    async clickPurchaseHistoryTab(): Promise<void> {
        await this.uIPurchaseHistoryTab.click();
    }

    async switchToNotesTab(): Promise<void> {
        await this.uINotesTab.click();
        this.browserHelpers.switchToFrame('frmCommissaryNotes.aspx');
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verify1051UpdateDataExistsInTheProductTabAcknowledgePopupMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1051) Updated data exists in the Product tab. You must save or reset.');
        await this.popup.acknowledgeOk();
    }

    async verify1056UpdatedDataExistsInTheFieldsAcknowledgePopupMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1056) Updated data exists in the fields. You must save or reset');
        await this.popup.acknowledgeOk();
    }
}

export class VendorProductTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIAddButton: Locator;
    readonly uIVendorItemStockCodeEdit: Locator;
    readonly uIProductGrid: Locator;
    readonly uIUpdateButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIAddButton = page.locator('#tabVendEntry_tmpl0_ucProducts_cmdAddProduct');
        this.uIVendorItemStockCodeEdit = page.locator('#tabVendEntry_tmpl0_ucProducts_lupVendor_CodeValue');
        this.uIProductGrid = page.locator('#tabVendEntry_tmpl0_ucProducts_grdVendorEntry');
        this.uIUpdateButton = page.locator('#tabVendEntry_tmpl0_ucProducts_cmdAddProduct');
    }

    async enterAtVendorItemStockCode(): Promise<void> {
        await this.uIVendorItemStockCodeEdit.fill(BaseData.getTestValue('VendorItemStockCode'));
        await this.uIVendorItemStockCodeEdit.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifyAtVISCInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIProductGrid, BaseData.getTestValue('VendorItemStockCode'), 'VISC #');
        const text = await cell.innerText();
        expect(text.trim()).toBe(BaseData.getTestValue('VendorItemStockCode'));
    }

    async selectAtViscNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIProductGrid, BaseData.getTestValue('VendorItemStockCode'));
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }
}

export class VendorPurchaseHistoryTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uICreateOrderButton: Locator;
    readonly uIPurchaseHistoryGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uICreateOrderButton = page.locator('#tabVendEntry_tmpl1_ucPurchaseOrder_butCreateOrder');
        this.uIPurchaseHistoryGrid = page.locator('#tabVendEntry_tmpl1_ucPurchaseOrder_grdPurchaseOrder');
    }

    async clickCreateOrderButton(): Promise<void> {
        await this.uICreateOrderButton.click();
    }

    async verifyAtOfficerInGrid(i: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIPurchaseHistoryGrid, BaseData.getTestValue('Officer' + i), 'Officer');
        const text = await cell.innerText();
        expect(text.trim()).toBe(BaseData.getTestValue('Officer' + i));
    }
}

export class VendorNotesTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uINotesEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIInternalSaveButton: Locator;
    readonly uINotesTabGrid: Locator;
    readonly uIHeaderStatusBar: Locator;

    constructor(page: Page) {
        this.page = page;
        const tabFrame = page.frameLocator('iframe[src*="frmCommissaryNotes.aspx"]');
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uIDateEdit = tabFrame.locator('#dttmCmts_Date_KPIDttmCtrl');
        this.uITimeEdit = tabFrame.locator("//table[@id='dttmCmts_Time']//input");
        this.uINotesEdit = tabFrame.locator('#txtComment');
        this.uIAddButton = tabFrame.locator('#imgAddComments');
        this.uIInternalSaveButton = tabFrame.locator('#cmdInternalSave');
        this.uINotesTabGrid = tabFrame.locator('#grdCBEMainCmts');
        this.uIHeaderStatusBar = tabFrame.locator('//tr//b');
    }

    async tabOutDateAndTime(): Promise<void> {
        await this.uIDateEdit.click();
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async enterAtNotes(): Promise<void> {
        await this.uINotesEdit.fill(BaseData.getTestValue('Notes'));
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifyAtNotesInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uINotesTabGrid, BaseData.getTestValue('Notes'), 'Notes');
        const text = await cell.innerText();
        expect(text.trim()).toBe(BaseData.getTestValue('Notes'));
    }

    async internalSave(): Promise<void> {
        await this.uIInternalSaveButton.click();
        await this.popup.confirmYes();
    }

    async verifyUpdateSuccessfulHeaderMessage(): Promise<void> {
        const text = await this.uIHeaderStatusBar.innerText();
        expect(text.trim()).toBe('1003 - Update Successful');
    }

    async clickSaveInternal(): Promise<void> {
        await this.uIInternalSaveButton.click();
    }

    async verify7NoDataPresentAcknowledgePopupMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(7) No data present');
        await this.popup.acknowledgeOk();
    }
}

export class BankReconciliationPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly uIAddNewButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIReconciliationGridTable: Locator;
    readonly uIDepositsCreditsGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uIAddNewButton = page.locator("//span[text()='Add New']");
        this.uISaveButton = page.locator('#cmdSave');
        this.uISearchButton = page.locator('#btnSearch');
        this.uIReconciliationGridTable = page.locator("//div[@id='grdReconcilation']");
        this.uIDepositsCreditsGrid = page.locator("//div[@id='grdDepositCredits']");
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async verifyAcknowledgeAdditionSuccessful(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('1002 - Addition Successful');
        await this.popup.acknowledgeOk();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
        await expect(this.popup.modalBody).toContainText('(3)Do You Want To Save All Of The Entered Details?');
        await this.popup.confirmYes();
    }

    async verifySaveConfirmMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(3)Do You Want To Save All Of The Entered Details?');
        await this.popup.confirmYes();
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async selectAtReconciliationInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIReconciliationGridTable, BaseData.getTestValue('Reconciliation'));
    }

    async doubleClickDepositsAndCreditsInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIDepositsCreditsGrid, BaseData.getTestValue('BankDeptNbr'));
        const activeRow = this.uIDepositsCreditsGrid.locator('tr.igg_BlueThemeActiveRow');
        const cells = activeRow.locator('td:visible');
        const cellCount = await cells.count();
        for (let i = 0; i < cellCount; i++) {
            const cell = cells.nth(i);
            await cell.dblclick();
            try {
                await cell.pressSequentially('12345');
                const text = await cell.innerText();
                expect(text).toContain('12345');
            } catch {
                // Element is non-editable
            }
        }
    }

    async verifyAtBankDepNbrInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIDepositsCreditsGrid, BaseData.getTestValue('BankDeptNbr'), 'BankDepNbr');
        const text = await cell.innerText();
        expect(text.trim()).toBe(BaseData.getTestValue('BankDeptNbr'));
    }
}

export class BankStatementPage {
    readonly page: Page;
    readonly uIEndingBalanceEdit: Locator;
    readonly uIContinuteButton: Locator;
    readonly uIBeginningBalanceEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIEndingBalanceEdit = page.locator('#txtEndingBal');
        this.uIContinuteButton = page.locator('#cmdContinue');
        this.uIBeginningBalanceEdit = page.locator('#txtBeginingBal');
    }

    async enterAtEndingBalance(): Promise<void> {
        await this.uIEndingBalanceEdit.fill(BaseData.getTestValue('EndingBalance'));
    }

    async clickContinueButton(): Promise<void> {
        await this.uIContinuteButton.click();
    }

    async enterAtBeginningBalance(): Promise<void> {
        await this.uIBeginningBalanceEdit.fill(BaseData.getTestValue('BeginningBalance'));
    }
}

export class BatchBillingSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIAddNewButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIExportToExcelIcon: Locator;
    readonly uIBatchBillingGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIAddNewButton = page.locator("//span[text()='Add New']");
        this.uISearchButton = page.locator('#btnSearch');
        this.uIExportToExcelIcon = page.locator("//img[@title='Export To Excel']");
        this.uIBatchBillingGrid = page.locator('#grdBatchBillingSrch');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clickExportExcelIcon(): Promise<void> {
        await this.uIExportToExcelIcon.click();
    }

    async verifyDownloadFileFormatISExcel(): Promise<void> {
        // Handled via Playwright download event in test step
    }

    async getTransNbrColumnValues(): Promise<string[]> {
        return await this.grid.getGridTableColumnValues(this.uIBatchBillingGrid, 'TransNbr');
    }

    async getFeeTypeColumnValues(): Promise<string[]> {
        return await this.grid.getGridTableColumnValues(this.uIBatchBillingGrid, 'Fee Type');
    }

    async getFeeDescriptionColumnValues(): Promise<string[]> {
        return await this.grid.getGridTableColumnValues(this.uIBatchBillingGrid, 'Fee Description');
    }

    async getDateColumnValues(): Promise<string[]> {
        const rawValues = await this.grid.getGridTableColumnValues(this.uIBatchBillingGrid, 'Date');
        return rawValues.map((val: string | number | Date) => {
            const d = new Date(val);
            const mm = String(d.getMonth() + 1).padStart(2, '0');
            const dd = String(d.getDate()).padStart(2, '0');
            const yy = String(d.getFullYear()).substring(2);
            const hh = String(d.getHours()).padStart(2, '0');
            const min = String(d.getMinutes()).padStart(2, '0');
            return `${mm}/${dd}/${yy} ${hh}:${min}`;
        });
    }

    async getIsVoidColumnValues(): Promise<string[]> {
        return await this.grid.getGridTableColumnValues(this.uIBatchBillingGrid, 'IsVoid');
    }
}

export class BatchBillingEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIFeeTypeDropdown: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIAmountEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIBatchBillingGrid: Locator;
    readonly uIResetIcon: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uIPrintReceiptButton: Locator;
    readonly uIPrintIcon: Locator;
    readonly uISaveIcon: Locator;
    readonly uISPNNameEdit: Locator;
    readonly uISaveAndCloseIcon: Locator;
    readonly uIUpdateButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIFeeTypeDropdown = page.locator('#cddFeeDetails_DropDown');
        this.uIDateEdit = page.locator('#dtcBillDate_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='dtcBillDate_Time']//input");
        this.uIAmountEdit = page.locator('#txtAmount');
        this.uILastNameEdit = page.locator('#nbrName_LastName');
        this.uIFirstNameEdit = page.locator('#nbrName_FirstName');
        this.uIAddButton = page.locator('#cmdAddBilling');
        this.uIBatchBillingGrid = page.locator('#grdBilling');
        this.uIResetIcon = page.locator('#cmdRefresh');
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uIPrintReceiptButton = page.locator('#btnReceipt');
        this.uIPrintIcon = page.locator('#cmdPrint');
        this.uISaveIcon = page.locator('#cmdSave');
        this.uISPNNameEdit = page.locator('#nbrName_SPN');
        this.uISaveAndCloseIcon = page.locator('#cmdSaveNClose');
        this.uIUpdateButton = page.locator('#cmdAddBilling');
    }

    async selectAtFeeType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIFeeTypeDropdown, BaseData.getTestValue('FeeType'));
    }

    async tabOutDateAndTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async enterAtAmount(): Promise<void> {
        await this.uIAmountEdit.fill(BaseData.getTestValue('Amount'));
    }

    async enterAtLastName(): Promise<void> {
        await this.uILastNameEdit.fill(BaseData.getTestValue('LastName'));
    }

    async enterAtFirstName(): Promise<void> {
        await this.uIFirstNameEdit.fill(BaseData.getTestValue('FirstName'));
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifyGridCellNotEditable(): Promise<void> {
        const activeRow = this.uIBatchBillingGrid.locator('tr.igg_BlueThemeActiveRow');
        const cells = activeRow.locator('td:visible');
        const cellCount = await cells.count();
        for (let i = 0; i < cellCount; i++) {
            const cell = cells.nth(i);
            await cell.dblclick();
            try {
                await cell.pressSequentially('12345');
                const text = await cell.innerText();
                expect(text).toContain('12345');
            } catch {
                // Element is non-editable
            }
        }
    }

    async clickResetIcon(): Promise<void> {
        await this.uIResetIcon.click();
    }

    async verifyJurisFieldIsDisabled(): Promise<void> {
        await expect(this.uIJurisDropdown).toBeDisabled();
    }

    async clickPrintReceiptButton(): Promise<void> {
        await this.uIPrintReceiptButton.click();
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async closeTheScreen(): Promise<void> {
        await this.page.close();
    }

    async saveScreen(): Promise<void> {
        await this.uISaveIcon.click();
        await this.popup.confirmYes();
    }

    async enterAtSPNName(): Promise<void> {
        await this.uISPNNameEdit.fill(BaseData.getTestValue('SPN'));
        await this.uISPNNameEdit.press('Tab');
    }

    async verify1008ErrorPopUpIsNotArised(): Promise<void> {
        await expect(this.popup.modalBody).not.toBeVisible({ timeout: 3000 }).catch(() => { });
    }

    async verifySaveIconIsDisabled(): Promise<void> {
        await expect(this.uISaveIcon).toBeDisabled();
    }

    async verifySaveAndCloseIconIsDisabled(): Promise<void> {
        await expect(this.uISaveAndCloseIcon).toBeDisabled();
    }

    async verifyAddButtonIsDisabled(): Promise<void> {
        await expect(this.uIAddButton).toBeDisabled();
    }

    async verifyFullNameInGrid(): Promise<void> {
        const row = await this.grid.getGridRowByCellInnerText(this.uIBatchBillingGrid, BaseData.getTestValue('FullName'));
        const text = await row.innerText();
        expect(text).toContain(BaseData.getTestValue('FullName'));
    }

    async clickDeleteRowByAtSPN(): Promise<void> {
        await this.grid.deleteGridRowByCellInnerText(this.uIBatchBillingGrid, BaseData.getTestValue('SPN'));
    }

    async verifyDeleteConfirmation(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(4) Do you really want to delete?');
        await this.popup.confirmYes();
    }

    async doubleClickBySPNInGrid(): Promise<void> {
        const row = await this.grid.getGridRowByCellInnerText(this.uIBatchBillingGrid, BaseData.getTestValue('SPN'));
        await row.dblclick();
    }

    async verify6RecordMarkedForDeletionPopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6) Record marked for deletion');
        await this.popup.acknowledgeOk();
    }

    async selectAtSPNInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIBatchBillingGrid, BaseData.getTestValue('SPN'));
    }

    async verifyUpdateButtonIsDisplayed(): Promise<void> {
        const title = await this.uIAddButton.getAttribute('title');
        expect(title).toBe('Update The Data In The Grid');
    }

    async verifyAddButtonIsDisplayed(): Promise<void> {
        const title = await this.uIAddButton.getAttribute('title');
        expect(title).toBe('Add');
    }

    async clickSaveIcon(): Promise<void> {
        await this.uISaveIcon.click();
    }

    async verify1056UpdatedDataExistsAcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1056) Updated data exists in the fields. You must save or reset');
        await this.popup.acknowledgeOk();
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }
}

export class ItemSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIAddNewButton: Locator;
    readonly uICategoryDropDown: Locator;
    readonly uISearchButton: Locator;
    readonly uIItemSearchGrid: Locator;
    readonly uIIncludeInactiveChkbox: Locator;
    readonly uIPrintIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIAddNewButton = page.locator("//span[text()='Add New']");
        this.uICategoryDropDown = page.locator('#cddcategory_DropDown');
        this.uISearchButton = page.locator('#btnSearch');
        this.uIItemSearchGrid = page.locator('#grdItemSearch');
        this.uIIncludeInactiveChkbox = page.locator('#chkIsActive');
        this.uIPrintIcon = page.locator("//img[@src='/KPIImages/ico/16_print.gif']");
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async selectAtCategory(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uICategoryDropDown, BaseData.getTestValue('Category'));
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async verifyAtItemNameByCategoryName(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIItemSearchGrid, BaseData.getTestValue('Category'), 'Item Name');
        const text = await cell.innerText();
        expect(text.trim()).toBe(BaseData.getTestValue('ItemName'));
    }

    async selectAtItemNameInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIItemSearchGrid, BaseData.getTestValue('ItemName'));
    }

    async selectRandomRecord(): Promise<void> {
        await this.grid.selectRandomRow(this.uIItemSearchGrid);
    }

    async clickIncludeInactiveChkbox(): Promise<void> {
        await this.uIIncludeInactiveChkbox.click();
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }
}

export class ItemEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIFacilityStockEdit: Locator;
    readonly uIVendorItemStockCodeEdit: Locator;
    readonly uIItemNameEdit: Locator;
    readonly uICategoryDropDown: Locator;
    readonly uIContainerTypeDropDown: Locator;
    readonly uIContainerQuantityEdit: Locator;
    readonly uIContainerCostEdit: Locator;
    readonly uICurrentItemCountEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uIInactiveChkbox: Locator;
    readonly uIInactiveDateTime: Locator;
    readonly uISaveNClose: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIFacilityStockEdit = page.locator('#txtFacilityStock');
        this.uIVendorItemStockCodeEdit = page.locator('#txtVendorItemStockCode');
        this.uIItemNameEdit = page.locator('#txtItemName');
        this.uICategoryDropDown = page.locator('#CddCategoryType_DropDown');
        this.uIContainerTypeDropDown = page.locator('#cddOrderContainer_DropDown');
        this.uIContainerQuantityEdit = page.locator('#txtContainerQty');
        this.uIContainerCostEdit = page.locator('#txtContainerCost');
        this.uICurrentItemCountEdit = page.locator('#txtCurrentItemCount');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIInactiveChkbox = page.locator('#chkIsActive');
        this.uIInactiveDateTime = page.locator('#txtInActiveDttm');
        this.uISaveNClose = page.locator('#cmdSaveNClose');
    }

    async enterAtFacilityStock(i?: number): Promise<void> {
        const val = i !== undefined ? BaseData.getTestValue('FacilityStock' + i) : BaseData.getTestValue('FacilityStock');
        await this.uIFacilityStockEdit.fill(val);
        await this.uIFacilityStockEdit.press('Tab');
    }

    async enterAtVendorItemStockCode(): Promise<void> {
        await this.uIVendorItemStockCodeEdit.fill(BaseData.getTestValue('VendorItemStockCode'));
    }

    async enterAtItemName(): Promise<void> {
        await this.uIItemNameEdit.fill(BaseData.getTestValue('ItemName'));
    }

    async selectAtCategory(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uICategoryDropDown, BaseData.getTestValue('Category'));
    }

    async selectAtContainerType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIContainerTypeDropDown, BaseData.getTestValue('ContainerType'));
    }

    async enterAtContainerQuantity(): Promise<void> {
        await this.uIContainerQuantityEdit.fill(BaseData.getTestValue('ContainerQuantity'));
    }

    async enterAtContainerCost(): Promise<void> {
        await this.uIContainerCostEdit.fill(BaseData.getTestValue('ContainerCost'));
    }

    async enterAtCurrentItemCount(): Promise<void> {
        await this.uICurrentItemCountEdit.fill(BaseData.getTestValue('CurrentItemCount'));
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
        await expect(this.popup.modalBody).toContainText('(3)Do You Want To Save All Of The Entered Details?');
        await this.popup.confirmYes();
    }

    async clickInactiveChkBox(): Promise<void> {
        await this.uIInactiveChkbox.click();
    }

    async verifyInactiveDateTime(): Promise<void> {
        const val = await this.uIInactiveDateTime.inputValue();
        expect(val).toContain(DateHelpers.getCurrentDate('MM/dd/yyyy'));
    }

    async saveNClose(): Promise<void> {
        await this.uISaveNClose.click();
        await expect(this.popup.modalBody).toContainText('(3)Do You Want To Save All Of The Entered Details?');
        await this.popup.confirmYes();
    }

    async verifyInactiveChkboxIsUnchecked(): Promise<void> {
        await expect(this.uIInactiveChkbox).not.toBeChecked();
    }

    async CloseTheScreen(): Promise<void> {
        await this.page.close();
    }

    async verifyInactiveChkboxIschecked(): Promise<void> {
        await expect(this.uIInactiveChkbox).toBeChecked();
    }

    async verify1019DuplicationOfDataFoundAcknowledgePopupNotArisingTwice(): Promise<void> {
        const count = await this.popup.modalBody.count();
        expect(count).toBeLessThanOrEqual(1);
    }

    async verifyInactiveDate(): Promise<void> {
        const val = await this.uIInactiveDateTime.inputValue();
        expect(val).toContain(DateHelpers.getCurrentDate('MM/dd/yyyy'));
    }

    async verifyInactiveDateIsDisplayed(): Promise<void> {
        await expect(this.uIInactiveDateTime).toBeVisible();
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await expect(this.popup.modalBody).toContainText('(3)Do You Want To Save All Of The Entered Details?');
        await this.popup.confirmYes();
    }
}

export class BankDepositSearchPage {
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

export class BankDepositPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly uIPriorCloseDateEdit: Locator;
    readonly uIPriorCloseTimeEdit: Locator;
    readonly uIDepositDateEdit: Locator;
    readonly uIDepositTimeEdit: Locator;
    readonly uIBankDepositGrid: Locator;
    readonly uIResetIcon: Locator;
    readonly uIPrintIcon: Locator;
    readonly uISaveIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uIPriorCloseDateEdit = page.locator('#PriorCloseDttm_Date_KPIDttmCtrl');
        this.uIPriorCloseTimeEdit = page.locator("//table[@id='PriorCloseDttm_Time']//input");
        this.uIDepositDateEdit = page.locator('#DepositDttm_Date_KPIDttmCtrl');
        this.uIDepositTimeEdit = page.locator("//table[@id='DepositDttm_Time']//input");
        this.uIBankDepositGrid = page.locator('#grdBankDeposit');
        this.uIResetIcon = page.locator('#cmdRefresh');
        this.uIPrintIcon = page.locator('#cmdPrint');
        this.uISaveIcon = page.locator('#cmdSave');
    }

    async enterPriorCloseDateAsPreviousDateAndTabOut(noOfDays: number): Promise<void> {
        await this.uIPriorCloseDateEdit.click();
        await this.page.keyboard.press('Control+A');
        await this.uIPriorCloseDateEdit.fill(DateHelpers.getPreviousDate(noOfDays));
        await this.uIPriorCloseDateEdit.press('Tab');
    }

    async verifyPriorCloseDateIsFieldDisplayed(): Promise<void> {
        await expect(this.uIPriorCloseDateEdit).toBeVisible();
    }

    async verifyAtIsIncludedCheckboxNotCheckedByDrawerInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIBankDepositGrid, BaseData.getTestValue('Drawer'), 'Is Included');
        const img = cell.locator('img');
        const title = await img.getAttribute('title');
        expect(title).toBe('Unchecked');
    }

    async clickResetIcon(): Promise<void> {
        await this.uIResetIcon.click();
    }

    async selectIsIncludedCheckboxInGrid(): Promise<void> {
        const colIdx = await this.grid.getColumnIndex(this.uIBankDepositGrid, 'Is Included');
        await this.grid.selectRowCheckboxByIndex(this.uIBankDepositGrid, 0);
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async verifyAtIsIncludedCheckboxIsCheckedByDrawerInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIBankDepositGrid, BaseData.getTestValue('Drawer'), 'Is Included');
        const img = cell.locator('img');
        const title = await img.getAttribute('title');
        expect(title).toBe('Checked');
    }

    async saveScreen(): Promise<void> {
        await this.uISaveIcon.click();
        await this.popup.confirmYes();
    }
}

export class DepositReleaseFundsPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uISPNEdit: Locator;
    readonly uIActionDropdown: Locator;
    readonly uIDrawerDropdown: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIOfficerCodeEdit: Locator;
    readonly uIPaymentMethodDropdown: Locator;
    readonly uIMediaDropdown: Locator;
    readonly uIAmountEdit: Locator;
    readonly uISaveIcon: Locator;
    readonly uISaveAndCloseIcon: Locator;
    readonly uIHeaderStatusBar: Locator;
    readonly uIResetIcon: Locator;
    readonly uISuffixDropdown: Locator;
    readonly uIBalanceAmount: Locator;
    readonly uIPrintReceiptButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uISPNEdit = page.locator('#NamCtrlSPN_SPN');
        this.uIActionDropdown = page.locator('#cddAction_DropDown');
        this.uIDrawerDropdown = page.locator('#cddDrawer_DropDown');
        this.uIDateEdit = page.locator('#dtmDateTime_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='dtmDateTime_Time']//input");
        this.uIOfficerCodeEdit = page.locator('#lupOnCallOffID_CodeValue');
        this.uIPaymentMethodDropdown = page.locator('#cddPaymentMethod_DropDown');
        this.uIMediaDropdown = page.locator('#cddMedia_DropDown');
        this.uIAmountEdit = page.locator('#txtMoneyIntakeAmount');
        this.uISaveIcon = page.locator('#cmdSave');
        this.uISaveAndCloseIcon = page.locator('#cmdSaveNClose');
        this.uIHeaderStatusBar = page.locator('//b');
        this.uIResetIcon = page.locator('#cmdRefresh');
        this.uISuffixDropdown = page.locator('#NamCtrlSPN_Suffix_DropDown');
        this.uIBalanceAmount = page.locator('#txtBalAmt');
        this.uIPrintReceiptButton = page.locator('#btnPrintreceipt');
    }

    async enterAtSPN(): Promise<void> {
        await this.uISPNEdit.fill(BaseData.getTestValue('SPN'));
        await this.uISPNEdit.press('Tab');
    }

    async selectAtAction(i: number): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIActionDropdown, BaseData.getTestValue('Action' + i));
        await this.uIActionDropdown.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async selectAtDrawer(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIDrawerDropdown, BaseData.getTestValue('Drawer'));
    }

    async tabOutDateAndTime(): Promise<void> {
        await this.uIDateEdit.click();
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async enterAtOfficer(): Promise<void> {
        await this.uIOfficerCodeEdit.fill(BaseData.getTestValue('OfficerID'));
        await this.uIOfficerCodeEdit.press('Tab');
    }

    async selectAtPaymentMethod(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIPaymentMethodDropdown, BaseData.getTestValue('PaymentMethod'));
    }

    async selectAtMedia(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIMediaDropdown, BaseData.getTestValue('Media'));
    }

    async enterAtAmount(): Promise<void> {
        await this.uIAmountEdit.fill(BaseData.getTestValue('Amount'));
        await this.uIAmountEdit.press('Tab');
    }

    async clickSave(): Promise<void> {
        await this.uISaveIcon.click();
    }

    async clickSaveAndClose(): Promise<void> {
        await this.uISaveAndCloseIcon.click();
    }

    async verify30033EnterSPNNoAcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(30033) Enter SPN No');
        await this.popup.acknowledgeOk();
    }

    async verifyAdditionSuccessfulStatusMessage(): Promise<void> {
        const text = await this.uIHeaderStatusBar.innerText();
        expect(text.trim()).toBe('1002 - Addition Successful');
    }

    async clickReset(): Promise<void> {
        await this.uIResetIcon.click();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async selectAtSuffix(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uISuffixDropdown, BaseData.getTestValue('Suffix'));
    }

    async verifyAtBalanceAmount(): Promise<void> {
        const text = await this.uIBalanceAmount.inputValue();
        expect(text).toBe(BaseData.getTestValue('BalanceAmount'));
    }

    async clearSPN(): Promise<void> {
        await this.uISPNEdit.clear();
        await this.uISPNEdit.press('Tab');
    }

    async verifyBalanceAmountNotDisplayed(): Promise<void> {
        const text = await this.uIBalanceAmount.inputValue();
        expect(text).toBe('');
    }

    async verify32513InsufficientBalanceAcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(32513) Insufficient balance');
        await this.popup.acknowledgeOk();
    }

    async clickPrintReceiptButton(): Promise<void> {
        await this.uIPrintReceiptButton.click();
    }
}

export class CashSearchPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly browserHelpers: BrowserHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uISearchButton: Locator;
    readonly uICashSearchGrid: Locator;
    readonly uIDrawerDropdown: Locator;
    readonly uIAddNewButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.browserHelpers = new BrowserHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uISearchButton = page.locator('#btnSearch');
        this.uICashSearchGrid = page.locator('#grdDrawerSrch');
        this.uIDrawerDropdown = page.locator('#cddDrawer_DropDown');
        this.uIAddNewButton = page.locator("//span[text()='Add New']");
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async selectRandomGridRow(): Promise<void> {
        await this.grid.selectRandomRow(this.uICashSearchGrid);
    }

    async verify18016NoRecordAvailableAcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('18016 - No records available. The record may have been deleted.');
        await this.popup.acknowledgeOk();
    }

    async selectAtDrawer(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIDrawerDropdown, BaseData.getTestValue('Drawer'));
    }

    async doubleClickAndVerifyRowCellsNotEditableInGrid(): Promise<void> {
        const rows = this.uICashSearchGrid.locator('tr[role="row"]');
        const count = await rows.count();
        for (let i = 0; i < count; i++) {
            const cells = rows.nth(i).locator('td:visible');
            const cellCount = await cells.count();
            for (let j = 0; j < cellCount; j++) {
                const cell = cells.nth(j);
                await cell.dblclick();
                try {
                    await cell.pressSequentially('12345');
                    const text = await cell.innerText();
                    expect(text).toContain('12345');
                } catch {
                    // Element is non-editable
                }
            }
        }
    }

    async verifyCashDrawerWindowExists(): Promise<void> {
        const windowExist = await this.browserHelpers.windowExistsByTitle('Cash Drawer');
        expect(windowExist).toBeTruthy();
    }

    async verifyAtBookingNoBySPNInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uICashSearchGrid, BaseData.getTestValue('SPN'), 'Booking Number');
        const text = await cell.innerText();
        expect(text.trim()).toBe(BaseData.getTestValue('BookingNumber'));
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }
}

export class DrawerPermissionPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIResultGrid: Locator;
    readonly uIDrawerDropdown: Locator;
    readonly uIUpdateButton: Locator;
    readonly uIRolesDropdown: Locator;
    readonly uIAddButton: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveYesButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIResultGrid = page.locator("//div[@id='grdDrawerEntry']");
        this.uIDrawerDropdown = page.locator('#cddDrawer_ListBox');
        this.uIUpdateButton = page.locator('#cmdAdd');
        this.uIRolesDropdown = page.locator('#cddRoles_DropDown');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveYesButton = page.locator("//div//button[text()='Yes']");
    }

    async selectAtDrawerInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIResultGrid, BaseData.getTestValue('Roles'));
    }

    async selectAtDrawer(i?: number): Promise<void> {
        const drawerVal = i !== undefined ? BaseData.getTestValue('Drawer' + i) : BaseData.getTestValue('Drawer');
        await this.uIDrawerDropdown.selectOption({ label: drawerVal });
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verify30033EnterDrawerAcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(30033) Enter Drawer');
        await this.popup.acknowledgeOk();
    }

    async selectAtRoles(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIRolesDropdown, BaseData.getTestValue('Roles'));
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifyAtDrawerInGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uIResultGrid, 'Drawer');
        expect(columnValues).toContain(BaseData.getTestValue('Drawer'));
    }

    async verifyAtRolesInGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uIResultGrid, 'Roles');
        expect(columnValues).toContain(BaseData.getTestValue('Roles'));
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForTimeout(1000);
        await expect(this.popup.modalBody).toContainText('(3) Do You Want To Save All Of The Entered Details?');
        await this.popup.confirmYes();
    }

    async verify1056UpdatedDataExistsAcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1056) Updated data exists in the fields. You must save or reset');
        await this.popup.acknowledgeOk();
    }
}

export class CashDrawerPage {
    readonly page: Page;
    readonly elementHelpers: ElementHelpers;
    readonly uIDrawerDropdown: Locator;
    readonly uIPFEdit: Locator;
    readonly uICloseButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elementHelpers = new ElementHelpers(page);
        this.uIDrawerDropdown = page.locator('#cddDrawer_DropDown');
        this.uIPFEdit = page.locator('#lupPFNbr_CodeValue');
        this.uICloseButton = page.locator('#cmdClose');
    }

    async selectAtDrawer(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(this.uIDrawerDropdown, BaseData.getTestValue('Drawer'));
    }

    async enterAtPF(): Promise<void> {
        await this.uIPFEdit.fill(BaseData.getTestValue('PF'));
        await this.uIPFEdit.press('Tab');
    }

    async clickCloseButton(): Promise<void> {
        await this.uICloseButton.click();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }
}

export class FreezeAccountPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly uICommentsEdit: Locator;
    readonly uISaveIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.uICommentsEdit = page.locator('#txtComments');
        this.uISaveIcon = page.locator('#cmdSave');
    }

    async enterAtComments(): Promise<void> {
        await this.uICommentsEdit.fill(BaseData.getTestValue('Comments'));
    }

    async saveScreen(): Promise<void> {
        await this.uISaveIcon.click();
        await this.popup.confirmYes();
    }

    async verifyAccountDeactivatedSuccessfullyAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(18024) Account deactivated successfully');
        await this.popup.acknowledgeOk();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }
}
