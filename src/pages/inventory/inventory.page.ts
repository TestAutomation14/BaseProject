// @ts-nocheck
import { Page, Locator, expect } from '@playwright/test';

export class MileageEntryPage {
    readonly page: Page;
    readonly uIPopUpFleetIdComboBox: Locator;
    readonly uIPopupDateEdit: Locator;
    readonly uIPopupCurrentMileageEdit: Locator;
    readonly uIPopupSaveButton: Locator;
    readonly uIPopupFuelEdit: Locator;
    readonly uIPopupOilEdit: Locator;
    readonly uIPopupCancelButton: Locator;
    readonly uIPopupMileageEntryScreen: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIPopUpFleetIdComboBox = page.locator('#cddPFleetID_DropDown');
        this.uIPopupDateEdit = page.locator('#PGasDttm_Date_KPIDttmCtrl');
        this.uIPopupCurrentMileageEdit = page.locator('#txtMileage');
        this.uIPopupSaveButton = page.locator('#cmdSavePanel');
        this.uIPopupFuelEdit = page.locator('#txtQuan');
        this.uIPopupOilEdit = page.locator('#txtOil');
        this.uIPopupCancelButton = page.locator('#cmdcancel');
        this.uIPopupMileageEntryScreen = page.locator('#dvAddNew');
    }

    async selectFleetIDInPopup(): Promise<void> {
        await this.uIPopUpFleetIdComboBox.click();
    }

    async tabOutDateInPopup(): Promise<void> {
        await this.uIPopupDateEdit.press('Tab');
    }

    async enterCurrentMileageInPopup(): Promise<void> {
    }

    async clickSaveInPopup(): Promise<void> {
        await this.uIPopupSaveButton.click();
    }

    async verifyAdditionSuccessfulAcknowledge(): Promise<void> {
        // TODO: handle popup with expected message: "1002 - Addition Successful"
        // TODO: handle popup with expected message: "1002 - Addition successful"
    }

    async selectAtFleetIDInPopup(): Promise<void> {
        await this.uIPopUpFleetIdComboBox.selectOption({ label: PopUpFleetID });
    }

    async enterAtCurrentMileageInPopup(): Promise<void> {
        await this.uIPopupCurrentMileageEdit.fill(Mileage);
    }

    async enterAtFuelInPopup(): Promise<void> {
        await this.uIPopupFuelEdit.fill(Fuel);
    }

    async enterAtOilInPopup(): Promise<void> {
        await this.uIPopupOilEdit.fill(Oil);
    }

    async verify3032GreaterThanLastMileageAckMsg(): Promise<void> {
        // TODO: handle popup with expected message: "(3032) Enter greater than last mileage"
    }

    async clickCancelInPopup(): Promise<void> {
        await this.uIPopupCancelButton.click();
    }

    async verifyMileageEntryPopupScreenClosed(): Promise<void> {
        expect(await this.uIPopupMileageEntryScreen.getAttribute('style')).toContain("visibility: hidden");
    }

    async verify1018RequiredEntriesAreMissingAcknowledgePopupAppears(): Promise<void> {
        // TODO: handle popup with expected message: "(1018) Required Entries are Missing"
    }

}

export class InventorySearchPage {
    readonly page: Page;
    readonly uIInventoryYearEdit: Locator;
    readonly uIInventoryNumberEdit: Locator;
    readonly uISearchButton: Locator;
    readonly uIBatchScanButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIBackButton: Locator;
    readonly uIAssignButton: Locator;
    readonly uIPerformBatchServiceButton: Locator;
    readonly uIInventoryTable: Locator;
    readonly uICategoryComboBox: Locator;
    readonly uITypeComboBox: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uIMakeEdit: Locator;
    readonly uIModelEdit: Locator;
    readonly uIDateTypeComboBox: Locator;
    readonly uIFromDateEdit: Locator;
    readonly uIToDateEdit: Locator;
    readonly uIDeptTrackingNoEdit: Locator;
    readonly uIAssertOnlyCheckBox: Locator;
    readonly uIExpendableOnlyCheckbox: Locator;
    readonly uIEquipmentLogOnlyCheckBox: Locator;
    readonly uIScanBarCodeEdit: Locator;
    readonly uIShowDueCheckbox: Locator;
    readonly uICheckOutTypeComboBox: Locator;
    readonly uIVendorCodeEdit: Locator;
    readonly uIVendorCodeLookupButton: Locator;
    readonly uISerialNoEdit: Locator;
    readonly uIServiceDueByEdit: Locator;
    readonly uISelectCheckbox: Locator;
    readonly uIInventoryLocationComboBox: Locator;
    readonly uIPFNoCodeEdit: Locator;
    readonly uIFleetIDComboBox: Locator;
    readonly uILocationComboBox: Locator;
    readonly uIAssignedAssetsCheckbox: Locator;
    readonly uIUnassignedAssetsCheckbox: Locator;
    readonly uIAvailableForCheckoutCheckbox: Locator;
    readonly uICheckedOutItemsCheckbox: Locator;
    readonly uICheckedInItemsCheckbox: Locator;
    readonly uIDispositionDropdownArrow: Locator;
    readonly uIDispositionDropdownTray: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIInventoryIBubbleIcon: Locator;
    readonly uISelectAllCheckbox: Locator;
    readonly uIInventoryNameDropdown: Locator;
    readonly uIReturnButton: Locator;
    readonly uIInventoryLookupIcon: Locator;
    readonly uIBulkExportImportIcon: Locator;
    readonly uIIncludeInactiveCheckbox: Locator;
    readonly uITypeDropdownArrow: Locator;
    readonly uITypeDropdown: Locator;
    readonly uIDeptTrackLable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIInventoryYearEdit = page.locator('#numInvNo_Year');
        this.uIInventoryNumberEdit = page.locator('#numInvNo_Number');
        this.uISearchButton = page.locator("(//span[text()='Search'])");
        this.uIBatchScanButton = page.locator("(//span[contains(text(),'Batch Scan')])");
        this.uIAddNewButton = page.locator("(//span[contains(text(),'Add New')])");
        this.uIResetButton = page.locator("(//span[contains(text(),'Reset')])");
        this.uIBackButton = page.locator("(//span[contains(text(),'Back')])");
        this.uIAssignButton = page.locator("(//span[contains(text(),'Assign')])");
        this.uIPerformBatchServiceButton = page.locator("(//span[contains(text(),'Perform Batch Service')])");
        this.uIInventoryTable = page.locator('#grdInvSrch');
        this.uICategoryComboBox = page.locator('#cddCategory_DropDown');
        this.uITypeComboBox = page.locator('#cddType_DropDown');
        this.uIDescriptionEdit = page.locator('#txtDescription');
        this.uIMakeEdit = page.locator('#lupMake_CodeValue');
        this.uIModelEdit = page.locator('#txtModel');
        this.uIDateTypeComboBox = page.locator('#ddlDateTypes');
        this.uIFromDateEdit = page.locator('#dttmFrom_KPIDttmCtrl');
        this.uIToDateEdit = page.locator('#dttmTo_KPIDttmCtrl');
        this.uIDeptTrackingNoEdit = page.locator('#txtDeptTrack');
        this.uIAssertOnlyCheckBox = page.locator('#chkAsset');
        this.uIExpendableOnlyCheckbox = page.locator('#chkGeneral');
        this.uIEquipmentLogOnlyCheckBox = page.locator('#chkEquipLog');
        this.uIScanBarCodeEdit = page.locator('#txtScanBarcode');
        this.uIShowDueCheckbox = page.locator('#chkService');
        this.uICheckOutTypeComboBox = page.locator('#cddCheckOutType_DropDown');
        this.uIVendorCodeEdit = page.locator('#lupVName_CodeValue');
        this.uIVendorCodeLookupButton = page.locator('#lupVName_imgBtn');
        this.uISerialNoEdit = page.locator('#txtSerial');
        this.uIServiceDueByEdit = page.locator('#dttmService_KPIDttmCtrl');
        this.uISelectCheckbox = page.locator('#chkSelect');
        this.uIInventoryLocationComboBox = page.locator('#cddInvLoc');
        this.uIPFNoCodeEdit = page.locator('#lupEMPCode_CodeValue');
        this.uIFleetIDComboBox = page.locator('#cddFleetID_DropDown');
        this.uILocationComboBox = page.locator('#cddDLocation');
        this.uIAssignedAssetsCheckbox = page.locator('#chkAssignedAsset');
        this.uIUnassignedAssetsCheckbox = page.locator('#chkUnAssignedAsset');
        this.uIAvailableForCheckoutCheckbox = page.locator('#chkAvalForCheckout');
        this.uICheckedOutItemsCheckbox = page.locator('#ChkCheckedOutOk');
        this.uICheckedInItemsCheckbox = page.locator('#ChkCheckedInOk');
        this.uIDispositionDropdownArrow = page.locator('#cddDisposition_Arrow');
        this.uIDispositionDropdownTray = page.locator('#cddDisposition_DropDown');
        this.uIRefreshButton = page.locator("//span[contains(text(),'Refresh')]");
        this.uIInventoryIBubbleIcon = page.locator('#numInvNo_imgBtn');
        this.uISelectAllCheckbox = page.locator('#chkSelectAll');
        this.uIInventoryNameDropdown = page.locator('#cddInvName');
        this.uIReturnButton = page.locator("//span[contains(text(),'Return')]");
        this.uIInventoryLookupIcon = page.locator('#numInvNo_imgBtn');
        this.uIBulkExportImportIcon = page.locator("//li[@title='Bulk Export/Import']");
        this.uIIncludeInactiveCheckbox = page.locator('#chkInactive');
        this.uITypeDropdownArrow = page.locator('#cddmulInvType_Arrow');
        this.uITypeDropdown = page.locator('#cddmulInvType_DropDown');
        this.uIDeptTrackLable = page.locator('#lbldepttrack');
    }

    async enterAtInventoryNo(): Promise<void> {
        await this.uIInventoryYearEdit.fill(InventoryNo);
        await this.uIInventoryNumberEdit.fill(InventoryNo);
        await this.uIInventoryNumberEdit.press('Tab');
    }

    async enterNumberControlInventoryNo(): Promise<void> {
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async clickExpendableItemOnlyCheckbox(): Promise<void> {
        await this.uIExpendableOnlyCheckbox.click();
    }

    async selectAtCategory(): Promise<void> {
        await this.uICategoryComboBox.fill(Category);
        await this.uICategoryComboBox.press('Tab');
    }

    async selectAtType(): Promise<void> {
        await this.uITypeComboBox.fill(Type);
    }

    async selectAtInventoryLocation(): Promise<void> {
        await this.uIInventoryLocationComboBox.selectOption({ label: InventoryLocation });
    }

    async enterAtMake(): Promise<void> {
        await this.uIMakeEdit.fill(Make);
        await this.uIMakeEdit.press('Tab');
    }

    async enterAtModel(): Promise<void> {
        await this.uIModelEdit.fill(Model);
    }

    async enterAtDescription(): Promise<void> {
        await this.uIDescriptionEdit.fill(Description);
    }

    async enterAtScanBarCode(): Promise<void> {
        await this.uIScanBarCodeEdit.fill(ScanBarcode);
        await this.uIScanBarCodeEdit.press('Tab');
    }

    async enterAtSerialNo(): Promise<void> {
        await this.uISerialNoEdit.fill(Serial);
        await this.uISerialNoEdit.press('Tab');
    }

    async selectAtCheckoutType(): Promise<void> {
        await this.uICheckOutTypeComboBox.fill(CheckoutType);
        await this.uICheckOutTypeComboBox.press('Tab');
    }

    async enterAtVendor(): Promise<void> {
        await this.uIVendorCodeEdit.fill(Vendor);
        await this.uIVendorCodeEdit.press('Tab');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickBackButton(): Promise<void> {
        await this.uIBackButton.click();
    }

    async selectAtDateType(): Promise<void> {
        await this.uIDateTypeComboBox.selectOption({ label: DateType });
        await this.uIDateTypeComboBox.press('Tab');
    }

    async enterFromToAsCurrentDate(): Promise<void> {
        await this.uIFromDateEdit.fill(DateHelpers.getCurrentDate());
        await this.uIToDateEdit.fill(DateHelpers.getCurrentDate());
    }

    async enterAtDeptTrackingNo(): Promise<void> {
        await this.uIDeptTrackingNoEdit.fill(DeptTracking);
    }

    async clickAssertOnlyCheckBox(): Promise<void> {
        await this.uIAssertOnlyCheckBox.click();
    }

    async clickEquipmentLogOnlyCheckBox(): Promise<void> {
        await this.uIEquipmentLogOnlyCheckBox.click();
    }

    async selectRowByAtInventoryNo(): Promise<void> {
        await this.uIInventoryTable.locator(`td:has-text("${InventoryNo}")`).first().click();
    }

    async selectRowByAtInventoryNo1(): Promise<void> {
        await this.uIInventoryTable.locator(`td:has-text("${InventoryNo1}")`).first().click();
    }

    async selectRowByAtType(): Promise<void> {
        await this.uIInventoryTable.locator(`td:has-text("${Type}")`).first().click();
    }

    async selectRowByAtDescription(): Promise<void> {
        await this.uIInventoryTable.locator(`td:has-text("${Description}")`).first().click();
    }

    async RightclickRowByAtInventoryNoAndclickEquipmentServiceLink(): Promise<void> {
    }

    async selectRowByAtSerialNo(): Promise<void> {
        await this.uIInventoryTable.locator(`td:has-text("${Serial}")`).first().click();
    }

    async selectRowByAtQuantity(): Promise<void> {
        await this.uIInventoryTable.locator(`td:has-text("${Qty}")`).first().click();
    }

    async selectRowByAtDeptTracking(): Promise<void> {
        await this.uIInventoryTable.locator(`td:has-text("${DeptTracking}")`).first().click();
    }

    async clickRowByAtModel(): Promise<void> {
        await this.uIInventoryTable.locator(`td:has-text("${Model}")`).first().click();
    }

    async verifyAtInventoryNo(): Promise<void> {
        let uIInventoryRow: Locator;
        await this.uIInventoryTable.locator(`td:has-text("${InventoryNo}")`).first().click();
    }

    async verifyQuantityZeroAppearInRedByAtInventoryNo(): Promise<void> {
        let row: Locator;
        await this.uIInventoryTable.locator(`td:has-text("${InventoryNo}")`).first().click();
        let quantity: Locator;
    }

    async verifyQuantityOneAppearInGridByAtInventoryNo(): Promise<void> {
        const text = ''; // grid cell text
        expect(text).toEqual("1");
    }

    async verifyAtItemTypeByAtInventoryNo(): Promise<void> {
        let row: Locator;
        await this.uIInventoryTable.locator(`td:has-text("${InventoryNo}")`).first().click();
    }

    async verifyWarranteeReplacedAsCurrentDateByAtInventory(): Promise<void> {
        const str = DateHelpers.getCurrentDate();
        let row: Locator;
        await this.uIInventoryTable.locator(`td:has-text("${InventoryNo}")`).first().click();
    }

    async verifyAtInventoryLocationByAtInventoryNo(): Promise<void> {
        let row: Locator;
        await this.uIInventoryTable.locator(`td:has-text("${InventoryNo}")`).first().click();
    }

    async verifyAtPFNameInAssignedColumnByAtInventoryNo(): Promise<void> {
        let row: Locator;
        await this.uIInventoryTable.locator(`td:has-text("${InventoryNo}")`).first().click();
    }

    async verifyPurchaseDateAsCurrentDateByAtInventoryNo(): Promise<void> {
        const str = DateHelpers.getCurrentDate();
        let row: Locator;
        await this.uIInventoryTable.locator(`td:has-text("${InventoryNo}")`).first().click();
    }

    async verifyActivePurchaseDateByAtInventoryNo(Date: string): Promise<void> {
        const str = Date.substring(0, 6);
        const substring = Date.substring(8);
        const date = str +""+substring;
        let row: Locator;
        await this.uIInventoryTable.locator(`td:has-text("${InventoryNo}")`).first().click();
        // TODO: verify  equals grid cell value
    }

    async verifyActivePurchaseDateByAtInventoryNo1(Date: string): Promise<void> {
        const str = Date.substring(0, 6);
        const substring = Date.substring(8);
        const date = str +""+substring;
        let row: Locator;
        await this.uIInventoryTable.locator(`td:has-text("${InventoryNo1}")`).first().click();
        // TODO: verify  equals grid cell value
    }

    async verifyWarranteeReplacedAs30DayFutureFromCurrentDateAppearInYellowByAtInventoryNo(): Promise<void> {
        const str = DateHelpers.getFutureDate();
        let row: Locator;
        await this.uIInventoryTable.locator(`td:has-text("${InventoryNo}")`).first().click();
        let warrantDate: Locator;
    }

    async verifyWarranteeReplacedCurrentDateAppearInRedByAtInventoryNo(): Promise<void> {
        const str = DateHelpers.getCurrentDate();
        let row: Locator;
        await this.uIInventoryTable.locator(`td:has-text("${InventoryNo}")`).first().click();
        let warrantDate: Locator;
    }

    async verifyAtDeptTrackingByAtInventoryNo(): Promise<void> {
        let row: Locator;
        await this.uIInventoryTable.locator(`td:has-text("${InventoryNo}")`).first().click();
    }

    async selectCheckboxInGrid(): Promise<void> {
        // TODO: random element interaction
    }

    async clickAssignButton(): Promise<void> {
        await this.uIAssignButton.click();
    }

    async clickShowDueCheckbox(): Promise<void> {
        await this.uIShowDueCheckbox.click();
    }

    async enterServiceDueAsCurrentDate(): Promise<void> {
        await this.uIServiceDueByEdit.fill(DateHelpers.getCurrentDate());
    }

    async clickSelectCheckbox(): Promise<void> {
        let checkbox = false;
        let check: Locator;
        await this.uISelectCheckbox.click();
    }

    async verifyPerformBatchServiceLinkEnables(): Promise<void> {
        expect(await this.uIPerformBatchServiceButton.isEnabled()).toBeTruthy();
    }

    async clickSelectCheckboxByAtInventoryNo(): Promise<void> {
        const row = this.uIInventoryTable.locator(`td:has-text("${InventoryNo}")`).first().locator('..');
        await row.locator('img, input[type=checkbox]').first().click();
    }

    async clickPerformBatchServiceButton(): Promise<void> {
        await this.uIPerformBatchServiceButton.click();
    }

    async verifyNoRecordAcknowledgeMessage(): Promise<void> {
        // TODO: handle popup with expected message: "1011 - No Record Found"
        // TODO: handle popup with expected message: " 1011 - No Record Found"
    }

    async verifyAtAssigedUsingInventoryNo(): Promise<void> {
    }

    async enterAtPFNo(): Promise<void> {
        await this.uIPFNoCodeEdit.fill(PFNo);
        await this.uIPFNoCodeEdit.press('Tab');
    }

    async selectAtFleetID(): Promise<void> {
        await this.uIFleetIDComboBox.selectOption({ label: FleetID });
        await this.uIFleetIDComboBox.press('Tab');
    }

    async selectAtLocation(): Promise<void> {
        await this.uILocationComboBox.selectOption({ label: Location });
        await this.uILocationComboBox.press('Tab');
    }

    async verifyAtPurchaseDateAsCurrentDate(): Promise<void> {
        // TODO: verify date field matches current/future date
    }

    async clickSelectCheckboxByAtInventoryNo(rowNo: string): Promise<void> {
        const row = this.uIInventoryTable.locator(`td:has-text("${InventoryNo}")`).first().locator('..');
        await row.locator('img, input[type=checkbox]').first().click();
    }

    async VerifyPerformBatchServiceLinkEnables(): Promise<void> {
        expect(await this.uIPerformBatchServiceButton.isEnabled()).toBeTruthy();
    }

    async selectAtInventoryName(): Promise<void> {
        await this.uIInventoryNameComboBox.selectOption({ label: InventoryName });
    }

    async verifyAvailableQuantityIsZeroAcknowledgeMessage(): Promise<void> {
        // TODO: handle popup with expected message: "(11025) Available Quantity is 0"
    }

    async verifyAssignedAssetsCheckboxIsDisplayed(): Promise<void> {
        expect(await this.uIAssignedAssetsCheckbox.isVisible()).toBeTruthy();
    }

    async verifyUnassignedAssetsCheckboxIsDisplayed(): Promise<void> {
        expect(await this.uIUnassignedAssetsCheckbox.isVisible()).toBeTruthy();
    }

    async verifyAvailableForCheckoutCheckboxIsDisplayed(): Promise<void> {
        expect(await this.uIAvailableForCheckoutCheckbox.isVisible()).toBeTruthy();
    }

    async verifyCheckedOutItemsCheckboxIsDisplayed(): Promise<void> {
        expect(await this.uICheckedOutItemsCheckbox.isVisible()).toBeTruthy();
    }

    async verifyCheckedInItemsCheckboxIsDisplayed(): Promise<void> {
        expect(await this.uICheckedInItemsCheckbox.isVisible()).toBeTruthy();
    }

    async verifyColumnCheckedIsDisplayed(): Promise<void> {
        let ColumnName: Locator;
    }

    async selectInventory(): Promise<void> {
        // TODO: random element interaction
    }

    async clickAssignedAssetsCheckbox(): Promise<void> {
        await this.uIAssignedAssetsCheckbox.click();
    }

    async clickUnassignedAssetsCheckbox(): Promise<void> {
        await this.uIUnassignedAssetsCheckbox.click();
    }

    async verifyAvailableForCheckoutCheckboxIsNotDisplayed(): Promise<void> {
        expect(await this.uIAvailableForCheckoutCheckbox.isVisible()).toBeFalsy();
    }

    async verifyCheckedOutItemsCheckboxIsNotDisplayed(): Promise<void> {
        expect(await this.uICheckedOutItemsCheckbox.isVisible()).toBeFalsy();
    }

    async verifyCheckedInItemsCheckboxIsNotDisplayed(): Promise<void> {
        expect(await this.uICheckedInItemsCheckbox.isVisible()).toBeFalsy();
    }

    async verifyColumnCheckedIsNotDisplayed(): Promise<void> {
        let ColumnName: Locator;
    }

    async verifyValuesInAssignedColumnIsNotNull(): Promise<void> {
        const columnVal: string[] = [];
        // TODO: grid iteration loop
        expect(ele).not.toEqual('');
    }

    async verifyValuesInAssignedColumnIsNull(): Promise<void> {
        const columnVal: string[] = [];
        // TODO: grid iteration loop
        expect(ele).toEqual('');
    }

    async verifyRowCountIsNotEqualsToZero(): Promise<void> {
        let rowsCount: number;
    }

    async verifyAssignedColumnHavingPFName(): Promise<void> {
        const PFName = testData.inventory('PFName');
        const columnValues: string[] = [];
        // TODO: grid iteration loop
        expect(name).toContain(PFName);
    }

    async verifyDispositionDropdownAsRadicalDropdown(): Promise<void> {
        await this.uIDispositionDropdownArrow.click();
        const attribute = await this.uIDispositionDropdownTray.getAttribute('class');
        expect(attribute).toContain("RadComboBoxDropDown");
        await this.uIDispositionDropdownArrow.click();
    }

    async selectDispositionAsCheckAll(): Promise<void> {
        await this.uIDispositionDropdownArrow.click();
        await this.uIDispositionDropdownArrow.click();
    }

    async clickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async verifyAtPurchasedDateInGrid(): Promise<void> {
        // TODO: verify date field matches current/future date
    }

    async verifyNoDoesNotExistAcknowledge(): Promise<void> {
    }

    async verifyInventoryIBubbleIconIsNotDisplayed(): Promise<void> {
        const attribute = await this.uIInventoryIBubbleIcon.getAttribute('src');
        expect(attribute).toContain("ico/16_L_remove.gif");
    }

    async clickAvailableForCheckoutCheckbox(): Promise<void> {
        await this.uIAvailableForCheckoutCheckbox.click();
    }

    async clickSelectAllCheckbox(): Promise<void> {
        await this.uISelectAllCheckbox.click();
    }

    async selectAtInventoryNoInGrid(i: string): Promise<void> {
    }

    async verifyAtInventoryName(i: string): Promise<void> {
        const dropDownValues: string[] = [];
    }

    async selectRandomGridRow(): Promise<void> {
        // TODO: random element interaction
    }

    async verifyQuantityMoreThanZeroInGrid(): Promise<void> {
        const gridTableColumnValues: string[] = [];
        // TODO: grid iteration loop
    }

    async verifyAvailableForCheckOutCheckboxIsSelected(): Promise<void> {
    }

    async clickCheckedOutItemsCheckbox(): Promise<void> {
        await this.uICheckedOutItemsCheckbox.click();
    }

    async verifyCheckedColumnValueAsOutInGrid(): Promise<void> {
        const gridTableColumnValues: string[] = [];
        // TODO: grid iteration loop
        expect(value).toEqual("Out");
    }

    async verifyCheckedColumnValueAsInInGrid(): Promise<void> {
        const gridTableColumnValues: string[] = [];
        // TODO: grid iteration loop
        expect(value).toEqual("In");
    }

    async verifyCheckedOutItemsCheckboxIsSelected(): Promise<void> {
    }

    async clickCheckedInItemsCheckbox(): Promise<void> {
        await this.uICheckedInItemsCheckbox.click();
    }

    async verifyCheckedInItemsCheckboxIsSelected(): Promise<void> {
    }

    async verifyAtInventoryNoInGrid(i: string): Promise<void> {
        let gridRowByCellInnerText: Locator;
    }

    async verifyAtStatusByInventoryNoInGrid(i: string): Promise<void> {
        const text = ''; // grid cell text
    }

    async verifyInventorySearchWindowExist(): Promise<void> {
    }

    async clickSelectCheckboxByAtStatus(): Promise<void> {
        const row = this.uIInventoryTable.locator(`td:has-text("${Status}")`).first().locator('..');
        await row.locator('img, input[type=checkbox]').first().click();
    }

    async clickReturnButton(): Promise<void> {
        await this.uIReturnButton.click();
    }

    async verifyAtLocationColumnInGrid(): Promise<void> {
        const columnValues: string[] = [];
        // TODO: grid iteration loop
        expect(value).toEqual(testData.inventory('Location'));
    }

    async verifyInventoryIBubbleIconDisplayed(): Promise<void> {
        expect(await this.uIInventoryLookupIcon.isVisible()).toBeTruthy();
    }

    async clickInventoryIBubbleIcon(): Promise<void> {
        await this.uIInventoryLookupIcon.click();
    }

    async enterAtInventoryNo(i: string): Promise<void> {
        await this.uIInventoryNumberEdit.press('Tab');
    }

    async verifyInventryEntryScreenExist(): Promise<void> {
    }

    async selectRowByInventoryNo(inventoryNo: string): Promise<void> {
        await this.uIInventoryTable.locator(`td:has-text("${inventoryNo}")`).first().click();
    }

    async clickBulkExportImportIcon(): Promise<void> {
        await this.uIBulkExportImportIcon.click();
    }

    async clickIncludeInactiveCheckbox(): Promise<void> {
        await this.uIIncludeInactiveCheckbox.click();
    }

    async verifyAtRowAsGreyOut(): Promise<void> {
        let gridRowByCellInnerText: Locator;
        const Color = gridRowByCellInnerText.getCssValue("color");
        expect(Color).toEqual('rgba(128, 128, 128, 1)');
    }

    async RightclickRowByAtInventoryNoAndclickEquipmentServiceLink(i: string): Promise<void> {
    }

    async verify11033InvalidAssignmentRemovedFromSelectedListAcknowledgePopupAppears(): Promise<void> {
        // TODO: handle popup with expected message: "(11033) Invalid assignment is removed from Selected list"
    }

    async verify11034UnassignedInventoryRemovedFromSelectedListAcknowledgeAcknowledgePopupAppears(): Promise<void> {
        // TODO: handle popup with expected message: "(11034) Unassigned Inventory will be removed from Selected list"
    }

    async verifyAtDeptTrackCustomFieldAsChanged(): Promise<void> {
        const text = await this.uIDeptTrackLable.innerText();
    }

    async clickDeptTrackCustomFieldLabel(): Promise<void> {
        await this.uIDeptTrackLable.click();
    }

    async readQuantityValueByAtInventoryNo(): Promise<string> {
        const qty = await gridHelpers.getGridCellText(this.uIInventoryTable, testData.inventory('InventoryNo'), 'Qty');
        return qty;
    }

}

export class InventoryEntryPage {
    readonly page: Page;
    readonly uIMainTab: Locator;
    readonly uIPurchaseHistoryTab: Locator;
    readonly uIAssignedIssuedHistoryTab: Locator;
    readonly uIServiceHistoryTab: Locator;
    readonly uINotesTab: Locator;
    readonly uIAttachmentsTab: Locator;
    readonly uIDispositionTab: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uICustomizeButton: Locator;
    readonly uIStatusMenuBarTextView: Locator;
    readonly uIEntryDateEdit: Locator;
    readonly uIInventoryYearEdit: Locator;
    readonly uIInventoryNumberEdit: Locator;
    readonly uIBarcodeButton: Locator;
    readonly uICopyButton: Locator;
    readonly uICategoryComboBox: Locator;
    readonly uIExpendableItemButton: Locator;
    readonly uICategoryTextDisplayButton: Locator;
    readonly uITypeComboBox: Locator;
    readonly uIMakeComboBox: Locator;
    readonly uIModelEdit: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uIRestrictedCheckBox: Locator;
    readonly uIActivityLogTab: Locator;
    readonly uIInventoryNameComboBox: Locator;
    readonly uIBottomStatusMessage: Locator;
    readonly uICheckOutInTab: Locator;
    readonly uIPictureIcon: Locator;
    readonly uITextDisplayLabel: Locator;
    readonly uIInactiveCheckBox: Locator;
    readonly uIInactiveDateTime: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIMainTab = page.locator("//span[contains(text(),'Main')]");
        this.uIPurchaseHistoryTab = page.locator("//span[contains(text(),'Purchase History')]");
        this.uIAssignedIssuedHistoryTab = page.locator("//span[text()='Assigned/Issued History' or text()='History']");
        this.uIServiceHistoryTab = page.locator("//span[contains(text(),'Service History')]");
        this.uINotesTab = page.locator("//span[contains(text(),'Notes')]");
        this.uIAttachmentsTab = page.locator("//span[contains(text(),'Attachments')]");
        this.uIDispositionTab = page.locator("//span[contains(text(),'Disposition')]");
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uICustomizeButton = page.locator('#cmdCustomize');
        this.uIStatusMenuBarTextView = page.locator('#lblAssignTo');
        this.uIEntryDateEdit = page.locator("//input[@id='dttmPurchase_KPIDttmCtrl']");
        this.uIInventoryYearEdit = page.locator('#numInvNo_Year');
        this.uIInventoryNumberEdit = page.locator('#numInvNo_Number');
        this.uIBarcodeButton = page.locator('#cmdBarcode');
        this.uICopyButton = page.locator('#cmdCopy');
        this.uICategoryComboBox = page.locator('#cddInvCategory_DropDown');
        this.uIExpendableItemButton = page.locator('#txtDisplay');
        this.uICategoryTextDisplayButton = page.locator('#txtDisplay');
        this.uITypeComboBox = page.locator('#cddInvType_DropDown');
        this.uIMakeComboBox = page.locator('#cddInvMake');
        this.uIModelEdit = page.locator('#txtModel');
        this.uIDescriptionEdit = page.locator('#txtDescription');
        this.uIRestrictedCheckBox = page.locator('#chkIsRestricted');
        this.uIActivityLogTab = page.locator("//span[contains(text(),'Activity Log')]");
        this.uIInventoryNameComboBox = page.locator('#cddInvName');
        this.uIBottomStatusMessage = page.locator("//td[@class='status']//b");
        this.uICheckOutInTab = page.locator("//span[contains(text(),'Check Out/In')]");
        this.uIPictureIcon = page.locator('#imgNameFrontView');
        this.uITextDisplayLabel = page.locator('#lblDisplay');
        this.uIInactiveCheckBox = page.locator('#chkIsActive');
        this.uIInactiveDateTime = page.locator('#dttmInActive');
    }

    async enterEntryDate(): Promise<void> {
        await this.uIEntryDateEdit.press('Tab');
    }

    async selectAtInventoryName(): Promise<void> {
        await this.uIInventoryNameComboBox.selectOption({ label: InventoryName });
    }

    async selectAtInvName(): Promise<void> {
        await this.uIInventoryNameComboBox.selectOption({ label: InvName });
    }

    async selectAtCategory(): Promise<void> {
        await this.uICategoryComboBox.fill(Category);
        await this.uICategoryComboBox.press('Tab');
    }

    async selectAtCategory1(): Promise<void> {
        await this.uICategoryComboBox.fill(Category1);
        await this.uICategoryComboBox.press('Tab');
    }

    async selectAtType(): Promise<void> {
        await this.uITypeComboBox.fill(Type);
    }

    async selectAtMake(): Promise<void> {
        await this.uIMakeComboBox.fill(Make);
    }

    async selectAtMake1(): Promise<void> {
        await this.uIMakeComboBox.fill(Make1);
    }

    async enterAtModel(): Promise<void> {
        await this.uIModelEdit.fill(Model);
    }

    async enterAtDescription(): Promise<void> {
        await this.uIDescriptionEdit.fill(Description);
    }

    async clickMainTab(): Promise<void> {
        await this.uIMainTab.click();
    }

    async clickPurchaseHistoryTab(): Promise<void> {
        await this.uIPurchaseHistoryTab.click();
    }

    async clickAssignedIssuedHistoryTab(): Promise<void> {
        await this.uIAssignedIssuedHistoryTab.click();
    }

    async clickServiceHistoryTab(): Promise<void> {
        await this.uIServiceHistoryTab.click();
    }

    async clickNotesTab(): Promise<void> {
        await this.uINotesTab.click();
    }

    async clickAttachmentTab(): Promise<void> {
        await this.uIAttachmentsTab.click();
    }

    async switchToNotesTab(): Promise<void> {
        await this.uINotesTab.click();
    }

    async clickDispositionTab(): Promise<void> {
        await this.uIDispositionTab.click();
    }

    async verifyDispositionTabEnabled(): Promise<void> {
        const allTabs = await this.uIInventoryTable.locator('tbody tr').all();
        // TODO: grid iteration loop
        let displayed = false;
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.locator('.popup-confirm .btn-yes, [data-action=yes]').click();
    }

    async saveNClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        await this.page.locator('.popup-confirm .btn-yes, [data-action=yes]').click();
    }

    async verifyCopyButtonDisabled(): Promise<void> {
    }

    async clickCopyButton(): Promise<void> {
        await this.uICopyButton.click();
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async clickReset(): Promise<void> {
        await this.uIResetButton.click();
        await this.uIResetButton.click();
    }

    async TabEntryDate(): Promise<void> {
        await this.uIEntryDateEdit.press('Tab');
    }

    async verifyCurrentDateAutoPopulatesInEntryDate(): Promise<void> {
        await this.uIEntryDateEdit.getAttribute('value');
    }

    async verifyExpendableItemAppears(): Promise<void> {
        expect(await this.uIExpendableItemButton.isVisible()).toBeTruthy();
        await this.uIExpendableItemButton.getAttribute('value');
    }

    async clickBarCodeButton(): Promise<void> {
        await this.uIBarcodeButton.click();
    }

    async verifyBarCodeImage(): Promise<void> {
        const image = await this.uIBarcodeButton.getAttribute('src');
        expect(image).toContain("Barcode.png");
    }

    async verifyStatusAsQtyReceived(): Promise<void> {
        let totalQty: number;
        let qty: number;
        const ColumnValues: string[] = [];
        // TODO: grid iteration loop
        const qtyReceived = String.valueOf(totalQty);
        await this.uIStatusMenuBarTextView.innerText();
    }

    async verifyStatusAsGreenAndAvailableQuantity9(): Promise<void> {
        await this.uIStatusMenuBarTextView.innerText();
    }

    async verifyStatusAsGreenAndAvailableQuantity10(): Promise<void> {
        await this.uIStatusMenuBarTextView.innerText();
    }

    async verifyStatusAsRedAndAvailableQuantity8ReorderNow(): Promise<void> {
        await this.uIStatusMenuBarTextView.innerText();
    }

    async verifyStatusAsRedAndAvailableQuantity9ReorderNow(): Promise<void> {
        await this.uIStatusMenuBarTextView.innerText();
    }

    async verify11028InvalidReturnAckMessage(): Promise<void> {
        await this.page.locator('.popup-acknowledge .btn-ok, [data-action=ok]').click();
    }

    async verify11027AbleToReturnOnly2AckMessage(): Promise<void> {
        await this.page.locator('.popup-acknowledge .btn-ok, [data-action=ok]').click();
    }

    async verify11039ConfirmMessage(): Promise<void> {
        await this.page.locator('.popup-confirm .btn-yes, [data-action=yes]').click();
    }

    async verify3032EnterQtyAckMessage(): Promise<void> {
        await this.page.locator('.popup-acknowledge .btn-ok, [data-action=ok]').click();
    }

    async verify3032EnterDivisionAckMessage(): Promise<void> {
        // TODO: handle popup with expected message: "(3032) Enter Division"
    }

    async verify3032EnterStationAckMessage(): Promise<void> {
        // TODO: handle popup with expected message: "(3032) Enter Station"
    }

    async cancelPrintWindow(): Promise<void> {
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async verifyConfirmCopyMessage(): Promise<void> {
        await this.page.locator('.popup-confirm .btn-yes, [data-action=yes]').click();
    }

    async verifyCurrentDate(): Promise<void> {
        await this.uIEntryDateEdit.getAttribute('value');
    }

    async verifyCopyScreenTabs(): Promise<void> {
        expect(await this.uIPurchaseHistoryTab.isVisible()).toBeTruthy();
        expect(await this.uIMainTab.isVisible()).toBeTruthy();
        expect(await this.uINotesTab.isVisible()).toBeTruthy();
        expect(await this.uIAttachmentsTab.isVisible()).toBeTruthy();
    }

    async verifyAllTabEnabled(): Promise<void> {
        expect(await this.uIPurchaseHistoryTab.isEnabled()).toBeTruthy();
        expect(await this.uIAssignedIssuedHistoryTab.isEnabled()).toBeTruthy();
        expect(await this.uINotesTab.isEnabled()).toBeTruthy();
        expect(await this.uIDispositionTab.isEnabled()).toBeTruthy();
        expect(await this.uIAttachmentsTab.isEnabled()).toBeTruthy();
    }

    async verifyInventoryNoAutoPopulate(): Promise<void> {
        await this.uIInventoryYearEdit.getAttribute('value');
    }

    async verifyAcknowledgePurchaseHistory(): Promise<void> {
        await this.page.locator('.popup-acknowledge .btn-ok, [data-action=ok]').click();
    }

    async verifyStatusAsAvaliable(): Promise<void> {
        expect(await this.uIStatusMenuBarTextView.innerText()).toEqual("Available");
    }

    async verifyStatusAsPersonnelAssignedTo(): Promise<void> {
        await this.uIStatusMenuBarTextView.innerText();
    }

    async verifyStatusAsDivisionAssignedTo(): Promise<void> {
        await this.uIStatusMenuBarTextView.innerText();
    }

    async verifyStatusAsFleetAssignedTo(): Promise<void> {
        await this.uIStatusMenuBarTextView.innerText();
    }

    async verifyStatusAsStationAssignedTo(): Promise<void> {
        await this.uIStatusMenuBarTextView.innerText();
    }

    async verifyEntryDateFieldBlank(): Promise<void> {
    }

    async verifyAssertItemLableAppears(): Promise<void> {
        await this.uICategoryTextDisplayButton.getAttribute('value');
    }

    async verifyAllTabsEnabledAndDispositionTabDisabled(): Promise<void> {
        expect(await this.uIMainTab.isEnabled()).toBeTruthy();
        expect(await this.uIPurchaseHistoryTab.isEnabled()).toBeTruthy();
        expect(await this.uIAssignedIssuedHistoryTab.isEnabled()).toBeTruthy();
        expect(await this.uINotesTab.isEnabled()).toBeTruthy();
        expect(await this.uIAttachmentsTab.isEnabled()).toBeTruthy();
    }

    async verifyAtStatusInMenuBar(): Promise<void> {
    }

    async verifyStatusAsGreenAndAvailable(): Promise<void> {
        expect(await this.uIStatusMenuBarTextView.innerText()).toEqual("Available");
    }

    async clickActivityLogTab(): Promise<void> {
        await this.uIActivityLogTab.click();
    }

    async enterUnitCostAcknowledgeMessage(): Promise<void> {
        // TODO: handle popup with expected message: "(3032) Enter Unit Cost"
    }

    async VerifyUpdteSuccessfullMessage(): Promise<void> {
        await this.uIBottomStatusMessage.innerText();
    }

    async selectInvName(): Promise<void> {
        // TODO: random element interaction
    }

    async selectCategory(): Promise<void> {
        // TODO: random element interaction
    }

    async selectMake(): Promise<void> {
        await this.uIMakeComboBox.click();
        // TODO: random element interaction
    }

    async enterDescription(): Promise<void> {
    }

    async verifyAdditionSuccessFullMessage(): Promise<void> {
    }

    async verifyinInvNoISNotNull(): Promise<void> {
    }

    async verifyCheckOutAndCheckInTabIsDisplayed(): Promise<void> {
        expect(await this.uICheckOutInTab.isVisible()).toBeTruthy();
    }

    async verifyCheckOutAndCheckInTabIsNotDisplayed(): Promise<void> {
        expect(await this.uICheckOutInTab.isVisible()).toBeFalsy();
    }

    async verifyErrorAcknowledgePopupNotAvailable(windowExist: boolean): Promise<void> {
        const Message = uIMapPopup.acknowledgeWindow.uIErrorInfoTextEdit.getText();
    }

    async saveWithConfrim(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.locator('.popup-confirm .btn-yes, [data-action=yes]').click();
    }

    async clickPictureIcon(): Promise<void> {
        await this.uIPictureIcon.click();
    }

    async verifyAcknowledgeSaveTheRecordBeforeAddingAPhotoMsg(): Promise<void> {
        await this.page.locator('.popup-acknowledge .btn-ok, [data-action=ok]').click();
    }

    async verifyAtTypeDropdown(): Promise<void> {
        const dropDwonSelectedItem = ''; // grid cell text
        expect(dropDwonSelectedItem).toEqual(testData.inventory('Type'));
    }

    async verify6071SerialNoAlreadyExistAckPopUP(): Promise<void> {
        // TODO: handle popup with expected message: "(6071) Serial No is already exist"
    }

    async verifyStatusAsGreenAndAvailableQuantity(i: string): Promise<void> {
        await this.uIStatusMenuBarTextView.innerText();
    }

    async selectAtTypeDropDown(): Promise<void> {
        await this.uITypeComboBox.selectOption({ label: Type });
    }

    async verifyAtInventoryNo(i: string): Promise<void> {
    }

    async verifyTabColorAsBlue(tabName: string): Promise<void> {
    }

    async switchToAttchmentTab(): Promise<void> {
        await this.uIAttachmentsTab.click();
    }

    async clickCheckOutInTab(): Promise<void> {
        await this.uICheckOutInTab.click();
    }

    async verifyAtLabel(jsonIndex: string): Promise<void> {
        await this.uIStatusMenuBarTextView.innerText();
    }

    async verifyAtOutOfServiceLabel(JsonIndex: string, date: string, time: string): Promise<void> {
        await this.uIStatusMenuBarTextView.innerText();
    }

    async readInventoryNo(): Promise<string> {
        const year = await this.uIInventoryYearEdit.getAttribute('value');
        const no = await this.uIInventoryNumberEdit.getAttribute('value');
        return year + '-' + no;
    }

}

export class CheckOutInTabPage {
    readonly page: Page;
    readonly uICheckInDateEdit: Locator;
    readonly uICheckInTimeEdit: Locator;
    readonly uIProcessedByCodeEdit: Locator;
    readonly uIByCodeEdit: Locator;
    readonly uICheckInButton: Locator;
    readonly uICheckOutInGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uICheckInDateEdit = page.locator('#tabItemEntry_tmpl7_usrcheckinout1_dttmStatus_Date_KPIDttmCtrl');
        this.uICheckInTimeEdit = page.locator("//table[@id='tabItemEntry_tmpl7_usrcheckinout1_dttmStatus_Time']//input");
        this.uIProcessedByCodeEdit = page.locator('#tabItemEntry_tmpl7_usrcheckinout1_lupPFCode_CodeValue');
        this.uIByCodeEdit = page.locator('#tabItemEntry_tmpl7_usrcheckinout1_lupCheckPF_CodeValue');
        this.uICheckInButton = page.locator('#tabItemEntry_tmpl7_usrcheckinout1_btncheckin');
        this.uICheckOutInGrid = page.locator('#tabItemEntry_tmpl7_usrcheckinout1_grdCheckout');
    }

    async tabOutCheckInDateAndTime(): Promise<void> {
        await this.uICheckInDateEdit.click();
        await this.uICheckInDateEdit.press('Tab');
        await this.uICheckInTimeEdit.press('Tab');
    }

    async tabOutProcessedBy(): Promise<void> {
        await this.uIProcessedByCodeEdit.click();
        await this.uIProcessedByCodeEdit.press('Tab');
    }

    async enterAtByPF(): Promise<void> {
        await this.uIByCodeEdit.click();
        await this.uIByCodeEdit.fill(By);
        await this.uIByCodeEdit.press('Tab');
    }

    async clickCheckInButton(): Promise<void> {
        await this.uICheckInButton.click();
    }

    async verifyAtCategory(): Promise<void> {
        const radControlDropDownValue: string[] = [];
    }

    async verifyAtType(): Promise<void> {
        const radControlDropDownValue: string[] = [];
    }

    async verifyAssetItemLableAppears(): Promise<void> {
        await this.uITextDisplayLabel.innerText();
    }

    async verify1051UpdatedDataExistInTheNotesTabAcknowledgeMessage(): Promise<void> {
        await this.page.locator('.popup-acknowledge .btn-ok, [data-action=ok]').click();
    }

    async verifyExpendableItemLinkAppears(): Promise<void> {
        expect(await this.uITextDisplayLabel.isVisible()).toBeTruthy();
        await this.uITextDisplayLabel.innerText();
    }

    async verifyAcknowledgePopupNotAvailable(): Promise<void> {
    }

    async clickInactiveCheckbox(): Promise<void> {
        await this.uIInactiveCheckBox.click();
    }

    async verifyInactiveDateAsCurrentDate(): Promise<void> {
        const datetime = await this.uIInactiveDateTime.getAttribute('value');
    }

    async verifyNoRecordsFoundAcknowledgeMessage(): Promise<void> {
        // TODO: handle popup with expected message: "1011 - No Record Found"
    }

    async verifyAtMake(): Promise<void> {
        const dropDownOptionsElements: string[] = [];
    }

    async verifyAtMakeValueIsNotListed(): Promise<void> {
        const dropDownOptionsElements: string[] = [];
        // TODO: grid iteration loop
    }

    async verifySortOrderInMakeDropDown(): Promise<void> {
        const dropDownOptionsElements: string[] = [];
        const string = dropDownOptionsElements.get(5);
        expect(string).toEqual(testData.inventory('Make'));
    }

    async verifyMakeDropDownCount(count: string): Promise<void> {
        const dropDownOptionsElements: string[] = [];
        let size: number;
    }

    async verifyMakeDropDownCount(): Promise<void> {
        const dropDownOptionsElements: string[] = [];
        let size: number;
        let isValidSize = false;
    }

}

export class InventoryEntryMainTabPage {
    readonly page: Page;
    readonly uILadderLengthEdit: Locator;
    readonly uILadderTypeComboBox: Locator;
    readonly uINextDueDateEdit: Locator;
    readonly uICommentsEdit: Locator;
    readonly uICheckOutTypeComboBox: Locator;
    readonly uICheckOutEdit: Locator;
    readonly uIDeptTrackingEdit: Locator;
    readonly uIReorderQuantityEdit: Locator;
    readonly uILogEquipmentCheckBox: Locator;
    readonly uILastServiceDateEdit: Locator;
    readonly uIServiceCycleComboBox: Locator;
    readonly uIBaseMonthComboBox: Locator;
    readonly uIInServiceDateEdit: Locator;
    readonly uIColor1ComboBox: Locator;
    readonly uIColor2ComboBox: Locator;
    readonly uISerialNoEdit: Locator;
    readonly uIUPCEdit: Locator;
    readonly uICommentEdit: Locator;
    readonly uICustom1Edit: Locator;
    readonly uICustom2Edit: Locator;
    readonly uIWarrantyExpirationDateEdit: Locator;
    readonly uIReplaceByDateEdit: Locator;
    readonly uICheckOutNoEdit: Locator;
    readonly uIDeptTrackingNoEdit: Locator;
    readonly uIItemCodeComboBox: Locator;
    readonly uIDeptTrackCustomFieldLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uILadderLengthEdit = page.locator('#tabItemEntry_tmpl0_usrMain1_txtLadderLeng');
        this.uILadderTypeComboBox = page.locator('#tabItemEntry_tmpl0_usrMain1_cddLadderType_DropDown');
        this.uINextDueDateEdit = page.locator('#tabItemEntry_tmpl0_usrMain1_dttmServiceDate_KPIDttmCtrl');
        this.uICommentsEdit = page.locator('#tabItemEntry_tmpl0_usrMain1_txtComment');
        this.uICheckOutTypeComboBox = page.locator('#tabItemEntry_tmpl0_usrMain1_cddCheckOutType_DropDown');
        this.uICheckOutEdit = page.locator('#tabItemEntry_tmpl0_usrMain1_txtCheckOutNbr');
        this.uIDeptTrackingEdit = page.locator('#tabItemEntry_tmpl0_usrMain1_txtDeptTrack1');
        this.uIReorderQuantityEdit = page.locator('#tabItemEntry_tmpl0_usrMain1_txtReorderQty');
        this.uILogEquipmentCheckBox = page.locator('#tabItemEntry_tmpl0_usrMain1_chkLogEquipment');
        this.uILastServiceDateEdit = page.locator('#tabItemEntry_tmpl0_usrMain1_dttmLastServiceDttm_KPIDttmCtrl');
        this.uIServiceCycleComboBox = page.locator('#tabItemEntry_tmpl0_usrMain1_cddServiceSchedule_DropDown');
        this.uIBaseMonthComboBox = page.locator('#tabItemEntry_tmpl0_usrMain1_cddBaseMonth_DropDown');
        this.uIInServiceDateEdit = page.locator('#tabItemEntry_tmpl0_usrMain1_dttmNextDue_KPIDttmCtrl');
        this.uIColor1ComboBox = page.locator('#tabItemEntry_tmpl0_usrMain1_cddColor1_DropDown');
        this.uIColor2ComboBox = page.locator('#tabItemEntry_tmpl0_usrMain1_cddColor2_DropDown');
        this.uISerialNoEdit = page.locator('#tabItemEntry_tmpl0_usrMain1_txtSerial');
        this.uIUPCEdit = page.locator('#tabItemEntry_tmpl0_usrMain1_txtUPC');
        this.uICommentEdit = page.locator('#tabItemEntry_tmpl0_usrMain1_txtComment');
        this.uICustom1Edit = page.locator('#tabItemEntry_tmpl0_usrMain1_txtCustom1');
        this.uICustom2Edit = page.locator('#tabItemEntry_tmpl0_usrMain1_txtCustom2');
        this.uIWarrantyExpirationDateEdit = page.locator('#tabItemEntry_tmpl0_usrMain1_dttmExpire_KPIDttmCtrl');
        this.uIReplaceByDateEdit = page.locator('#tabItemEntry_tmpl0_usrMain1_dttmReplaced_KPIDttmCtrl');
        this.uICheckOutNoEdit = page.locator('#tabItemEntry_tmpl0_usrMain1_txtCheckOutNbr');
        this.uIDeptTrackingNoEdit = page.locator('#tabItemEntry_tmpl0_usrMain1_txtDeptTrack1');
        this.uIItemCodeComboBox = page.locator('#tabItemEntry_tmpl0_usrMain1_cddItemCode');
        this.uIDeptTrackCustomFieldLabel = page.locator('#tabItemEntry_tmpl0_usrMain1_lblDeptTracking1');
    }

    async EnterNextDueAs1DayFutureDateFromCurrentDate(): Promise<void> {
        await this.uINextDueDateEdit.clear();
        await this.uINextDueDateEdit.fill(DateHelpers.getFutureDate());
    }

    async EnterNextDueAsCurrentDate(): Promise<void> {
        await this.uINextDueDateEdit.click();
        await this.uINextDueDateEdit.clear();
        await this.uINextDueDateEdit.fill(DateHelpers.getCurrentDate());
    }

    async EnterReplaceByAsCurrentDate(): Promise<void> {
        await this.uIReplaceByDateEdit.fill(DateHelpers.getCurrentDate());
        await this.uIReplaceByDateEdit.press('Tab');
    }

    async VerifyCurrentDateAutopopulatesInReplaceBy(): Promise<void> {
        await this.uIReplaceByDateEdit.getAttribute('value');
    }

    async EnterWarrantyExpirationAsCurrentDate(): Promise<void> {
        await this.uIWarrantyExpirationDateEdit.fill(DateHelpers.getCurrentDate());
        await this.uIWarrantyExpirationDateEdit.press('Tab');
    }

    async EnterWarrantyExpirationAs30DayFutureFromCurrentDate(): Promise<void> {
        await this.uIWarrantyExpirationDateEdit.clear();
        await this.uIWarrantyExpirationDateEdit.fill(DateHelpers.getFutureDate());
        await this.uIWarrantyExpirationDateEdit.press('Tab');
    }

    async VerifyWarrantyExpirationAs30DayFutureFromCurrentDate(): Promise<void> {
    }

    async VerifyCurrentDateAutopopulatesInWarrantyExpiration(): Promise<void> {
        const date = uIMapInventory.inventoryEntry.inventoryEntryMainTab.uIWarrantyExpirationDateEdit;
    }

    async SelectAtLadderType(): Promise<void> {
        await this.uILadderTypeComboBox.fill(LadderType);
        await this.uILadderTypeComboBox.press('Tab');
    }

    async EnterLadderLength(): Promise<void> {
    }

    async SelectServiceAsMonth(): Promise<void> {
        await this.uIServiceCycleComboBox.selectOption({ label: "Monthly" });
        await this.uIServiceCycleComboBox.press('Tab');
    }

    async SelectColor(): Promise<void> {
        // TODO: random element interaction
        // TODO: random element interaction
    }

    async EnterAtSerialNo(): Promise<void> {
        await this.uISerialNoEdit.fill(Serial);
    }

    async EnterAtCustom1(): Promise<void> {
        await this.uICustom1Edit.fill(Custom1);
    }

    async SelectAtCheckoutType(): Promise<void> {
        await this.uICheckOutTypeComboBox.selectOption({ label: CheckoutType });
    }

    async SelectCheckoutType(): Promise<void> {
        // TODO: random element interaction
        await this.uICheckOutTypeComboBox.press('Tab');
    }

    async EnterAtCheckoutNo(): Promise<void> {
        await this.uICheckOutNoEdit.fill(Checkout);
        await this.uICheckOutNoEdit.press('Tab');
    }

    async EnterAtDeptTracking(): Promise<void> {
        await this.uIDeptTrackingNoEdit.fill(DeptTracking);
        await this.uIDeptTrackingNoEdit.press('Tab');
    }

    async clickLogEquipmentCheckBox(): Promise<void> {
        await this.uILogEquipmentCheckBox.click();
    }

    async EnterLastDateAsCurrentDate(): Promise<void> {
        await this.uILastServiceDateEdit.fill(DateHelpers.getCurrentDate());
        await this.uILastServiceDateEdit.press('Tab');
    }

    async SelectSelectServiceAsQuarterly(): Promise<void> {
        await this.uIServiceCycleComboBox.selectOption({ label: "Quarterly" });
        await this.uIServiceCycleComboBox.press('Tab');
    }

    async SelectSelectServiceAsSemiAnnual(): Promise<void> {
        await this.uIServiceCycleComboBox.selectOption({ label: "Semi Annually" });
        await this.uIServiceCycleComboBox.press('Tab');
    }

    async SelectSelectServiceAsAnnual(): Promise<void> {
        await this.uIServiceCycleComboBox.selectOption({ label: "Annually" });
        await this.uIServiceCycleComboBox.press('Tab');
    }

    async SelectBaseMonthAsCurrentMonth(): Promise<void> {
        await this.uIBaseMonthComboBox.press('Tab');
    }

    async VerifyNextDueDateAsMonthLater(): Promise<void> {
        const getFutureDate = DateHelpers.getFutureDate();
        const removeStr = getFutureDate.substring(2, 3);
        const getModifiedDate = getFutureDate.replace(removeStr, "/");
        await this.uINextDueDateEdit.getAttribute('value');
    }

    async VerifyNextDueAsNextYearCurrentMonthFirstDay(): Promise<void> {
        await this.uINextDueDateEdit.getAttribute('value');
    }

    async VerifyNextDueDateAsQuarterlyLater(): Promise<void> {
        await this.uINextDueDateEdit.getAttribute('value');
    }

    async VerifyNextDueDateAsSemiannualLater(): Promise<void> {
        await this.uINextDueDateEdit.getAttribute('value');
    }

    async VerifyNextDueDateAsMonthLaterwithFirstDate(): Promise<void> {
        await this.uINextDueDateEdit.getAttribute('value');
    }

    async VerifyNextDueDateAsQuarterlyLaterwithFirstDate(): Promise<void> {
        await this.uINextDueDateEdit.getAttribute('value');
    }

    async VerifyNextDueDateAsSemiannualLaterwithFirstDate(): Promise<void> {
        await this.uINextDueDateEdit.getAttribute('value');
    }

    async VerifyAcknowledgeDeptTrackingMessage(): Promise<void> {
        // TODO: handle popup with expected message: "(1046) Record already exists Please check the DeptTracking No"
    }

    async VerifyAcknowledgeCheckOutMessage(): Promise<void> {
        // TODO: handle popup with expected message: "(1046) Record already exists Please check the CheckOut No"
    }

    async VerifySerialNoEmpty(): Promise<void> {
    }

    async enterAtComment(): Promise<void> {
        await this.uICommentsEdit.fill(Comment);
    }

    async SelectAtCheckOutType(): Promise<void> {
        await this.uICheckOutTypeComboBox.selectOption({ label: CheckoutType });
    }

    async EnterCheckout(): Promise<void> {
    }

    async EnterAtExistingDeptTracking(): Promise<void> {
        await this.uIDeptTrackingEdit.fill(ExistingDeptTracking);
        await this.uIDeptTrackingEdit.press('Tab');
    }

    async EnterAtNewDeptTracking(): Promise<void> {
        await this.uIDeptTrackingEdit.fill(NewDeptTracking);
        await this.uIDeptTrackingEdit.press('Tab');
    }

    async Verify1046AcknowledgeMessage(): Promise<void> {
        // TODO: handle popup with expected message: "(1046) Record already exists Please check the DeptTracking No"
    }

    async clearReorderQuantity(): Promise<void> {
        await this.uIReorderQuantityEdit.clear();
    }

    async EnterAtReorderQuantity(): Promise<void> {
        await this.uIReorderQuantityEdit.fill(ReorderQty);
    }

    async clearLastServiceDate(): Promise<void> {
        await this.uILastServiceDateEdit.clear();
    }

    async clearNextDueDate(): Promise<void> {
        await this.uINextDueDateEdit.clear();
    }

    async EnterLastServiceDateAsLastMonthCurrentDate(): Promise<void> {
        await this.uILastServiceDateEdit.click();
        await this.uILastServiceDateEdit.clear();
        await this.uILastServiceDateEdit.press('Tab');
    }

    async selectAtItemCode(): Promise<void> {
        await this.uIItemCodeComboBox.selectOption({ label: ItemCode });
    }

    async SelectServiceCycleAs10Year(): Promise<void> {
        await this.uIServiceCycleComboBox.selectOption({ label: "10 Year" });
        await this.uIServiceCycleComboBox.press('Tab');
    }

    async VerifyNextDueAs10YearsCurrentMonthFirstDay(): Promise<void> {
        await this.uINextDueDateEdit.getAttribute('value');
    }

    async SelectBaseMonthAsJanuary(): Promise<void> {
        await this.uIBaseMonthComboBox.selectOption({ label: BaseMonth });
        await this.uIBaseMonthComboBox.press('Tab');
    }

    async selectAtBaseMonth(): Promise<void> {
        await this.uIBaseMonthComboBox.selectOption({ label: BaseMonth });
    }

    async verifyAtComment(): Promise<void> {
        await this.uICommentEdit.getAttribute('value');
    }

    async enterInServiceDateAsCurrentDate(): Promise<void> {
        await this.uIInServiceDateEdit.click();
        await this.uIInServiceDateEdit.clear();
        await this.uIInServiceDateEdit.fill(DateHelpers.getCurrentDate());
    }

    async verifyInServiceDateAsCurrentDate(): Promise<void> {
        const date = await this.uIInServiceDateEdit.getAttribute('value');
    }

    async verifyNextDueAsPreviousDate(): Promise<void> {
        const attribute = await this.uINextDueDateEdit.getAttribute('value');
    }

    async verifyLastDateAsCurrentDate(): Promise<void> {
        const attribute = await this.uILastServiceDateEdit.getAttribute('value');
        const currentDate = DateHelpers.getCurrentDate();
        expect(attribute).toEqual(currentDate);
    }

    async VerifyNextDueAs1MonthFutureDateFromCurrentDate(): Promise<void> {
        const futureDateByMonth = DateHelpers.getFutureDate();
    }

    async EnterNextDueAs1DayPreviousDateFromCurrentDate(): Promise<void> {
        await this.uINextDueDateEdit.clear();
    }

    async verifyAtServiceCycle(i: string): Promise<void> {
        const dropDwonSelectedItem = ''; // grid cell text
    }

    async clickDeptTrackCustomFieldLabel(): Promise<void> {
        await this.uIDeptTrackCustomFieldLabel.click();
    }

}

export class AssignedIssuedHistoryTabPage {
    readonly page: Page;
    readonly uIActionComboBox: Locator;
    readonly uIProcessedDateEdit: Locator;
    readonly uIProcessedTimeEdit: Locator;
    readonly uIByPFCodeEdit: Locator;
    readonly uIByPFCodeLookupButton: Locator;
    readonly uIPersonnelRadioButton: Locator;
    readonly uIFleetRadioButton: Locator;
    readonly uIDivisionRadioButton: Locator;
    readonly uIStationRadioButton: Locator;
    readonly uIAssignedIssuedHistoryTabResultTable: Locator;
    readonly uIPFCodeEdit: Locator;
    readonly uIPFCodeLookupButton: Locator;
    readonly uICommentEdit: Locator;
    readonly uIQuantityEdit: Locator;
    readonly uIFleetNoComboBox: Locator;
    readonly uIFleetLocationComboBox: Locator;
    readonly uIDivisionComboBox: Locator;
    readonly uISectionComboBox: Locator;
    readonly uISquadComboBox: Locator;
    readonly uIDivisionLocationComboBox: Locator;
    readonly uICurrentlyWithPFCodeEdit: Locator;
    readonly uIStationComboBox: Locator;
    readonly uIStationLocationComboBox: Locator;
    readonly uIFleetNoCodeEdit: Locator;
    readonly uIDispositionComboBox: Locator;
    readonly uIActionButton: Locator;
    readonly uISubmitButton: Locator;
    readonly uIInventoryLocationDropdown: Locator;
    readonly uIToCodeEdit: Locator;
    readonly uICheckedOutDate: Locator;
    readonly uICheckedOutTime: Locator;
    readonly uICheckedInDate: Locator;
    readonly uICheckedInTime: Locator;
    readonly uIFromEdit: Locator;
    readonly uIOutOfServiceDateEdit: Locator;
    readonly uIOutOfServiceTimeEdit: Locator;
    readonly uIServiceLocationDropdown: Locator;
    readonly uIDispositionDateEdit: Locator;
    readonly uIDispositionTimeEdit: Locator;
    readonly uIInServiceDateEdit: Locator;
    readonly uIInServiceTimeEdit: Locator;
    readonly uILocationDropDown: Locator;
    readonly uICheckedOutDateEdit: Locator;
    readonly uIToEdit: Locator;
    readonly uICheckedInDateEdit: Locator;
    readonly uIInventoryLocationDropDown: Locator;
    readonly uIOutOfServiceSinceEdit: Locator;
    readonly uIAssignedIssuedToLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIActionComboBox = page.locator('#tabItemEntry_tmpl2_usrAssigned1_cddAction');
        this.uIProcessedDateEdit = page.locator('#tabItemEntry_tmpl2_usrAssigned1_dttmStatus_Date_KPIDttmCtrl');
        this.uIProcessedTimeEdit = page.locator("//table[@id='tabItemEntry_tmpl2_usrAssigned1_dttmStatus_Time']//input");
        this.uIByPFCodeEdit = page.locator('#tabItemEntry_tmpl2_usrAssigned1_lupASGMTPFCode_CodeValue');
        this.uIByPFCodeLookupButton = page.locator('#tabItemEntry_tmpl2_usrAssigned1_lupASGMTPFCode_imgBtn');
        this.uIPersonnelRadioButton = page.locator('#tabItemEntry_tmpl2_usrAssigned1_radPersonal');
        this.uIFleetRadioButton = page.locator('#tabItemEntry_tmpl2_usrAssigned1_radFleet');
        this.uIDivisionRadioButton = page.locator('#tabItemEntry_tmpl2_usrAssigned1_radDivision');
        this.uIStationRadioButton = page.locator('#tabItemEntry_tmpl2_usrAssigned1_radStation');
        this.uIAssignedIssuedHistoryTabResultTable = page.locator('#tabItemEntry_tmpl2_usrAssigned1_grdAssignment');
        this.uIPFCodeEdit = page.locator('#tabItemEntry_tmpl2_usrAssigned1_lupEMPCode_CodeValue');
        this.uIPFCodeLookupButton = page.locator('#tabItemEntry_tmpl2_usrAssigned1_lupEMPCode_imgBtn');
        this.uICommentEdit = page.locator('#tabItemEntry_tmpl2_usrAssigned1_txtComment');
        this.uIQuantityEdit = page.locator('#tabItemEntry_tmpl2_usrAssigned1_txtQty');
        this.uIFleetNoComboBox = page.locator('#tabItemEntry_tmpl2_usrAssigned1_cddFleetID_DropDown');
        this.uIFleetLocationComboBox = page.locator('#tabItemEntry_tmpl2_usrAssigned1_cddFLocation');
        this.uIDivisionComboBox = page.locator('#tabItemEntry_tmpl2_usrAssigned1_cddDivision_DropDown');
        this.uISectionComboBox = page.locator('#tabItemEntry_tmpl2_usrAssigned1_cddSection_DropDown');
        this.uISquadComboBox = page.locator('#tabItemEntry_tmpl2_usrAssigned1_cddSquad_DropDown');
        this.uIDivisionLocationComboBox = page.locator('#tabItemEntry_tmpl2_usrAssigned1_cddDLocation');
        this.uICurrentlyWithPFCodeEdit = page.locator('#tabItemEntry_tmpl2_usrAssigned1_lupCurPF_CodeValue');
        this.uIStationComboBox = page.locator('#tabItemEntry_tmpl2_usrAssigned1_cddStation_DropDown');
        this.uIStationLocationComboBox = page.locator('#tabItemEntry_tmpl2_usrAssigned1_cddSLocation');
        this.uIFleetNoCodeEdit = page.locator('#tabItemEntry_tmpl2_usrAssigned1_cddFleetID_CodeValue');
        this.uIDispositionComboBox = page.locator('#tabItemEntry_tmpl2_usrAssigned1_cdddisposition_DropDown');
        this.uIActionButton = page.locator('#tabItemEntry_tmpl2_usrAssigned1_cmdAction');
        this.uISubmitButton = page.locator('#tabItemEntry_tmpl2_usrAssigned1_btnAssign');
        this.uIInventoryLocationDropdown = page.locator('#tabItemEntry_tmpl2_usrAssigned1_cddInvLocation');
        this.uIToCodeEdit = page.locator('#tabItemEntry_tmpl2_usrAssigned1_lupCheckOutTo_CodeValue');
        this.uICheckedOutDate = page.locator('#tabItemEntry_tmpl2_usrAssigned1_dttmStatus_Date_KPIDttmCtrl');
        this.uICheckedOutTime = page.locator("//table[@id='tabItemEntry_tmpl2_usrAssigned1_dttmStatus_Time']//input");
        this.uICheckedInDate = page.locator('#tabItemEntry_tmpl2_usrAssigned1_dttmStatus_Date_KPIDttmCtrl');
        this.uICheckedInTime = page.locator("//table[@id='tabItemEntry_tmpl2_usrAssigned1_dttmStatus_Time']//input");
        this.uIFromEdit = page.locator('#tabItemEntry_tmpl2_usrAssigned1_lupCheckOutTo_CodeValue');
        this.uIOutOfServiceDateEdit = page.locator('#tabItemEntry_tmpl2_usrAssigned1_dttmOutOfService_Date_KPIDttmCtrl');
        this.uIOutOfServiceTimeEdit = page.locator("//table[@id='tabItemEntry_tmpl2_usrAssigned1_dttmOutOfService_Time']//input");
        this.uIServiceLocationDropdown = page.locator('#tabItemEntry_tmpl2_usrAssigned1_drpServiceLocation');
        this.uIDispositionDateEdit = page.locator('#tabItemEntry_tmpl2_usrAssigned1_dttmStatus_Date_KPIDttmCtrl');
        this.uIDispositionTimeEdit = page.locator("//table[@id='tabItemEntry_tmpl2_usrAssigned1_dttmStatus_Time']//input");
        this.uIInServiceDateEdit = page.locator('#tabItemEntry_tmpl2_usrAssigned1_dttmOutOfService_Date_KPIDttmCtrl');
        this.uIInServiceTimeEdit = page.locator("//table[@id='tabItemEntry_tmpl2_usrAssigned1_dttmOutOfService_Time']//input");
        this.uILocationDropDown = page.locator('#tabItemEntry_tmpl2_usrAssigned1_drpServiceLocation');
        this.uICheckedOutDateEdit = page.locator('#tabItemEntry_tmpl2_usrAssigned1_dttmStatus_Date_KPIDttmCtrl');
        this.uIToEdit = page.locator('#tabItemEntry_tmpl2_usrAssigned1_lupCheckOutTo_CodeValue');
        this.uICheckedInDateEdit = page.locator('#tabItemEntry_tmpl2_usrAssigned1_dttmStatus_Date_KPIDttmCtrl');
        this.uIInventoryLocationDropDown = page.locator('#tabItemEntry_tmpl2_usrAssigned1_cddInvLocation');
        this.uIOutOfServiceSinceEdit = page.locator('#tabItemEntry_tmpl2_usrAssigned1_dttmOutOfService_Date_KPIDttmCtrl');
        this.uIAssignedIssuedToLabel = page.locator('#tabItemEntry_tmpl2_usrAssigned1_lblAssigned');
    }

    async SelectAtAction(): Promise<void> {
        await this.uIActionComboBox.selectOption({ label: Action });
    }

    async SelectActionAsAssigned(): Promise<void> {
        await this.uIActionComboBox.selectOption({ label: "Assigned" });
    }

    async SelectActionAsReturened(): Promise<void> {
        await this.uIActionComboBox.selectOption({ label: "Returned" });
        await this.uIActionComboBox.press('Tab');
    }

    async EnterProcessedDateTime(): Promise<void> {
        await this.uIProcessedDateEdit.press('Tab');
        await this.uIProcessedTimeEdit.press('Tab');
    }

    async TabOutBy(): Promise<void> {
        await this.uIByPFCodeEdit.press('Tab');
    }

    async EnterAtPFCode(): Promise<void> {
        await this.uIPFCodeEdit.fill(PFCode);
        await this.uIPFCodeEdit.press('Tab');
    }

    async clickFleetCheckBox(): Promise<void> {
        await this.uIFleetRadioButton.click();
    }

    async clickDivisionCheckBox(): Promise<void> {
        await this.uIDivisionRadioButton.click();
    }

    async clickStationCheckBox(): Promise<void> {
        await this.uIStationRadioButton.click();
    }

    async EnterAtFleetNo(): Promise<void> {
        await this.uIFleetNoCodeEdit.fill(Fleet);
        await this.uIFleetNoCodeEdit.press('Tab');
    }

    async SelectAtLocation(): Promise<void> {
        await this.uIFleetLocationComboBox.selectOption({ label: Location });
        await this.uIFleetLocationComboBox.press('Tab');
    }

    async SelectAtDivision(): Promise<void> {
        await this.uIDivisionComboBox.selectOption({ label: Division });
        await this.uIDivisionComboBox.press('Tab');
    }

    async SelectAtStation(): Promise<void> {
        await this.uIStationComboBox.selectOption({ label: Station });
        await this.uIStationComboBox.press('Tab');
    }

    async SelectAtStation1(): Promise<void> {
        await this.uIStationComboBox.selectOption({ label: Station1 });
        await this.uIStationComboBox.press('Tab');
    }

    async VerifyAsByPF(): Promise<void> {
        await this.uIByPFCodeEdit.getAttribute('value');
    }

    async VerifyCurrentDate(): Promise<void> {
        await this.uIProcessedDateEdit.getAttribute('value');
    }

    async VerifyFleetDivisionStationDisabled(): Promise<void> {
    }

    async VerifyAcknowledgeStationMessage(): Promise<void> {
        // TODO: handle popup with expected message: "(3032) Enter Station"
    }

    async VerifyAcknowledgePFMessage(): Promise<void> {
        // TODO: handle popup with expected message: "(3032) Enter PF No"
    }

    async TabOutProcessedDateTime(): Promise<void> {
        await this.uIProcessedDateEdit.press('Tab');
        await this.uIProcessedTimeEdit.press('Tab');
    }

    async EnterAtQuantity(): Promise<void> {
        await this.uIQuantityEdit.fill(Quantity);
        await this.uIQuantityEdit.press('Tab');
    }

    async clearQuantity(): Promise<void> {
        await this.uIQuantityEdit.clear();
    }

    async EnterQuantityAs3(): Promise<void> {
        await this.uIQuantityEdit.fill("3");
        await this.uIQuantityEdit.press('Tab');
    }

    async clickPersonnelRadioButton(): Promise<void> {
        await this.uIPersonnelRadioButton.click();
    }

    async clickFleetRadioButton(): Promise<void> {
        await this.uIFleetRadioButton.click();
    }

    async clickDivisionRadioButton(): Promise<void> {
        await this.uIDivisionRadioButton.click();
    }

    async clickStationRadioButton(): Promise<void> {
        await this.uIStationRadioButton.click();
    }

    async VerifyLoggedPFAutopopulates(): Promise<void> {
        await this.uIByPFCodeEdit.getAttribute('value');
    }

    async VerifyCurrentDateAutopopulatesInProcessedDateField(): Promise<void> {
        await this.uIProcessedDateEdit.getAttribute('value');
    }

    async clickActionDropDown(): Promise<void> {
        await this.uIActionComboBox.click();
    }

    async verifyValueInActionDropDown(): Promise<void> {
        const dropDownValues: string[] = [];
        // TODO: grid iteration loop
        expect(value).toEqual(testData.inventory('Action'));
    }

    async TabOutDispositionDateTime(): Promise<void> {
        await this.uIProcessedDateEdit.press('Tab');
        await this.uIProcessedTimeEdit.press('Tab');
    }

    async TabOutAuthorizeByPF(): Promise<void> {
        await this.uIByPFCodeEdit.press('Tab');
    }

    async selectAtDisposition(): Promise<void> {
        await this.uIDispositionComboBox.selectOption({ label: Disposition });
    }

    async enterAtComments(): Promise<void> {
        await this.uICommentEdit.fill(Comments);
    }

    async verifyAtCommentsToolTipByTitleInGrid(): Promise<void> {
        const Title = ''; // grid cell text
    }

    async clickActionButton(): Promise<void> {
        await this.uIActionButton.click();
    }

    async verify6071PleaseUpdateThePurchaseHistoryAcknowledgePopup(): Promise<void> {
    }

    async enterAtProcessDate(i: string): Promise<void> {
        await this.uIProcessedDateEdit.press('Tab');
    }

    async clickSubmitButton(): Promise<void> {
        await this.uISubmitButton.click();
    }

    async verifyAtStatusInGrid(jsonIndex: string): Promise<void> {
        const status = ''; // grid cell text
    }

    async SelectAtAction(jsonIndex: string): Promise<void> {
    }

    async enterAtTo(jsonIndex: string): Promise<void> {
    }

    async enterCheckedOutDateAndTimeAsFuture(noOfDays: string): Promise<void> {
        await this.uICheckedOutDate.fill(DateHelpers.getFutureDate());
        await this.uICheckedOutDate.press('Tab');
        await this.uICheckedOutTime.press('Tab');
    }

    async enterCheckedInDateAsFuture(noOfDays: string): Promise<void> {
        await this.uICheckedInDate.fill(DateHelpers.getFutureDate());
        await this.uICheckedInDate.press('Tab');
        await this.uICheckedInTime.press('Tab');
    }

    async enterAtFrom(jsonIndex: string): Promise<void> {
        await this.uIFromEdit.press('Tab');
    }

    async enterOutOfServiceSinceDateAndTimeAsFuture(days: string): Promise<void> {
        await this.uIOutOfServiceDateEdit.fill(DateHelpers.getFutureDate());
        await this.uIOutOfServiceDateEdit.press('Tab');
        await this.uIOutOfServiceTimeEdit.press('Tab');
    }

    async selectAtServiceLocation(jsonIndex: string): Promise<void> {
    }

    async enterDispositionDateAndTimeAsFuture(date: string): Promise<void> {
        await this.uIDispositionDateEdit.fill(DateHelpers.getFutureDate());
        await this.uIDispositionDateEdit.press('Tab');
        await this.uIDispositionTimeEdit.press('Tab');
    }

    async enterProcessedDateAndTimeAsFuture(days: string): Promise<void> {
        await this.uIProcessedDateEdit.fill(DateHelpers.getFutureDate());
        await this.uIProcessedDateEdit.press('Tab');
        await this.uIProcessedTimeEdit.press('Tab');
    }

    async enterInServiceDateAndTimeAsFuture(days: string): Promise<void> {
        await this.uIInServiceDateEdit.fill(DateHelpers.getFutureDate());
        await this.uIInServiceDateEdit.press('Tab');
        await this.uIInServiceTimeEdit.press('Tab');
    }

    async verifyAtDateByStatusInGrid(i: string): Promise<void> {
        const text = ''; // grid cell text
    }

    async selectAtAction(i: string): Promise<void> {
    }

    async enterAtOutOfServiceSince(): Promise<void> {
        await this.uIOutOfServiceSinceEdit.fill(OutOfServiceSince);
        await this.uIOutOfServiceSinceEdit.press('Tab');
    }

    async enterAtInServiceSince(i: string): Promise<void> {
        await this.uIOutOfServiceSinceEdit.press('Tab');
    }

    async verify6071InServiceSinceDateMustBeGreaterThanLastTransactionAcknowledgePopupAppears(): Promise<void> {
        // TODO: handle popup with expected message: "(6071) In-Service Since Date must be greater than last transaction"
    }

    async verify6071InServiceSinceDateMustBeGreaterThanLastTransactionAcknowledgePopupNotExist(): Promise<void> {
    }

    async selectAtLocation(i: string): Promise<void> {
        await this.uILocationDropDown.press('Tab');
    }

    async verifyAtToFromSinceDispByStatusInGrid(i: string): Promise<void> {
        const text = ''; // grid cell text
    }

    async enterAtCheckedOutDate(i: string): Promise<void> {
        await this.uICheckedOutDateEdit.press('Tab');
    }

    async enterAtTo(): Promise<void> {
        await this.uIToEdit.fill(To);
        await this.uIToEdit.press('Tab');
    }

    async enterAtCheckedInDate(i: string): Promise<void> {
        await this.uICheckedInDateEdit.press('Tab');
    }

    async verify6071CheckedInDateMustBeGreaterThanLastTransactionAcknowledgePopupAppears(): Promise<void> {
        // TODO: handle popup with expected message: "(6071) Checked In Date must be greater than last transaction"
    }

    async verify6071CheckedInDateMustBeGreaterThanLastTransactionAcknowledgePopupNotExist(): Promise<void> {
    }

    async doubleClickSubmitButton(): Promise<void> {
        await this.uISubmitButton.dblclick();
    }

    async verifyRowCountInGrid(i: string): Promise<void> {
        const gridTableColumnValues: string[] = [];
        const values: string[] = [];
        // TODO: grid iteration loop
    }

    async verifyAtStatusInGrid1(i: string): Promise<void> {
        const text = ''; // grid cell text
    }

    async selectAtInventoryLocation(i: string): Promise<void> {
    }

    async verifyAtDurationByStatusInGrid(i: string): Promise<void> {
        const text = ''; // grid cell text
    }

    async enterOutOfServiceDateAsPreviousDate(NoOfDays: string): Promise<void> {
        const previousDate = Randomized.getPreviousDate(NoOfDays, "MM/dd/yyyy");
        await this.uIOutOfServiceSinceEdit.fill(previousDate);
        await this.uIOutOfServiceSinceEdit.press('Tab');
    }

    async clickPFLookupIcon(): Promise<void> {
        await this.uIPFCodeLookupButton.click();
    }

    async verifyAtQualityByStatusInGrid(i: string): Promise<void> {
        const text = ''; // grid cell text
    }

    async verifyPersonnelRadioButtonChecked(): Promise<void> {
        const attribute = await this.uIPersonnelRadioButton.getAttribute('checked');
        expect(attribute).toEqual('true');
    }

    async verifyAssignedIssueToLabelIsDisplayed(): Promise<void> {
        await this.uIAssignedIssuedToLabel.innerText();
    }

    async verifyReturnedByLabelIsDisplayed(): Promise<void> {
        await this.uIAssignedIssuedToLabel.innerText();
    }

    async readOutOfServiceSinceDate(): Promise<string> {
        const date = await this.uIOutOfServiceDateEdit.getAttribute('value');
        return date || '';
    }

    async readOutOfServiceSinceTime(): Promise<string> {
        const time = await this.uIOutOfServiceTimeEdit.getAttribute('value');
        return time || '';
    }

}

export class PurchaseHistoryTabPage {
    readonly page: Page;
    readonly uIAssignedIssuedToLabel: Locator;
    readonly uIPurchaseDateEdit: Locator;
    readonly uIByPFCodeEdit: Locator;
    readonly uIByPFCodeLookupButton: Locator;
    readonly uIInventoryLocationComboBox: Locator;
    readonly uIVenderNameCodeEdit: Locator;
    readonly uIVenderNameCodeLookupButton: Locator;
    readonly uIHowAcquiredComboBox: Locator;
    readonly uIExpirationDateEdit: Locator;
    readonly uIPONoEdit: Locator;
    readonly uIUnitCostEdit: Locator;
    readonly uITotalCostEdit: Locator;
    readonly uIVenderRefEdit: Locator;
    readonly uIScanBarCodeRFIDEdit: Locator;
    readonly uIQtyReceivedEdit: Locator;
    readonly uIQtyReceivedTextView: Locator;
    readonly uIBatchScanItemButton: Locator;
    readonly uIPanelScanBarCodeRFIDEdit: Locator;
    readonly uISanBarCodeResultTable: Locator;
    readonly uIAddButton: Locator;
    readonly uIUpdateButton: Locator;
    readonly uICancelButton: Locator;
    readonly uITotalQuantityEdit: Locator;
    readonly uIPopupScanBarCodeRFIDEdit: Locator;
    readonly uIScanBarCodeResultTable: Locator;
    readonly uIPurchaseHistoryTable: Locator;
    readonly uIByPFDescriptionEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAssignedIssuedToLabel = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_dttmPdate_KPIDttmCtrl');
        this.uIPurchaseDateEdit = page.locator("//input[@id='tabItemEntry_tmpl1_usrPurchaseHistory1_dttmPdate_KPIDttmCtrl']");
        this.uIByPFCodeEdit = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_lupBy_CodeValue');
        this.uIByPFCodeLookupButton = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_lupBy_imgBtn');
        this.uIInventoryLocationComboBox = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_cddInvLoc');
        this.uIVenderNameCodeEdit = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_lupVName_CodeValue');
        this.uIVenderNameCodeLookupButton = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_lupVName_imgBtn');
        this.uIHowAcquiredComboBox = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_cddHAcq_DropDown');
        this.uIExpirationDateEdit = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_dttmExpiryDttm_KPIDttmCtrl');
        this.uIPONoEdit = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_txtPo');
        this.uIUnitCostEdit = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_txtUnitCost');
        this.uITotalCostEdit = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_txtTotColAmount');
        this.uIVenderRefEdit = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_txtVRef');
        this.uIScanBarCodeRFIDEdit = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_txtScanBarcode');
        this.uIQtyReceivedEdit = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_txtQtyReceived');
        this.uIQtyReceivedTextView = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_txtQtyReceived');
        this.uIBatchScanItemButton = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_cmdScan');
        this.uIPanelScanBarCodeRFIDEdit = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_txtPanelScanBarcode');
        this.uISanBarCodeResultTable = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_GrdScan');
        this.uIAddButton = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_cmdAddPurHistory');
        this.uIUpdateButton = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_cmdupdate');
        this.uICancelButton = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_cmdcancel');
        this.uITotalQuantityEdit = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_txtTotalQty');
        this.uIPopupScanBarCodeRFIDEdit = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_txtScanBarcode');
        this.uIScanBarCodeResultTable = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_GrdScan');
        this.uIPurchaseHistoryTable = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_grdPurchaseHistory');
        this.uIByPFDescriptionEdit = page.locator('#tabItemEntry_tmpl1_usrPurchaseHistory1_lupBy_CodeDescription');
    }

    async EnterPurchaseDate(): Promise<void> {
        await this.uIPurchaseDateEdit.press('Tab');
    }

    async EnterByPF(): Promise<void> {
        await this.uIByPFCodeEdit.click();
        await this.uIByPFCodeEdit.clear();
        await this.uIByPFCodeEdit.fill(By);
        await this.uIByPFCodeEdit.press('Tab');
    }

    async SelectAtInventoryLocation(): Promise<void> {
        await this.uIInventoryLocationComboBox.selectOption({ label: InventoryLocation });
    }

    async SelectInventoryLocation(): Promise<void> {
        await this.uIInventoryLocationComboBox.selectOption({ label: 1 });
    }

    async EnterAtVendorName(): Promise<void> {
        await this.uIVenderNameCodeEdit.click();
        await this.uIVenderNameCodeEdit.clear();
        await this.uIVenderNameCodeEdit.fill(VendorName);
        await this.uIVenderNameCodeEdit.press('Tab');
    }

    async SelectAtHowAccquired(): Promise<void> {
        await this.uIHowAcquiredComboBox.selectOption({ label: HowAcquired });
    }

    async EnterAtUnitCost(): Promise<void> {
        await this.uIUnitCostEdit.fill(UnitCost);
        await this.uIUnitCostEdit.press('Tab');
    }

    async clearScanBarCode(): Promise<void> {
        await this.uIScanBarCodeRFIDEdit.click();
        await this.uIScanBarCodeRFIDEdit.clear();
    }

    async clickBatchScanItemButton(): Promise<void> {
        await this.uIBatchScanItemButton.click();
    }

    async EnterAtScanBarCode(): Promise<void> {
        await this.uIScanBarCodeRFIDEdit.clear();
        await this.uIScanBarCodeRFIDEdit.fill(ScanBarcode);
        await this.uIScanBarCodeRFIDEdit.press('Tab');
    }

    async EnterScanBarCodeAs1000(): Promise<void> {
        await this.uIPanelScanBarCodeRFIDEdit.fill("1000");
        await this.uIPanelScanBarCodeRFIDEdit.press('Tab');
    }

    async EnterScanBarCodeAs2000(): Promise<void> {
        await this.uIPanelScanBarCodeRFIDEdit.fill("2000");
        await this.uIPanelScanBarCodeRFIDEdit.press('Tab');
    }

    async EnterScanBarCodeAs1001(): Promise<void> {
        await this.uIPanelScanBarCodeRFIDEdit.fill("1001");
        await this.uIPanelScanBarCodeRFIDEdit.press('Tab');
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }

    async VerifyBatchScanButtonGreen(): Promise<void> {
    }

    async VerifyTotalCostByMultiplyQtyAndUnitCost(): Promise<void> {
        let TotalUnit: number;
        await this.uITotalCostEdit.getAttribute('value');
    }

    async VerifyAtTotalCost(): Promise<void> {
        const str = await this.uITotalCostEdit.getAttribute('value');
    }

    async VerifyAcknowledgeDuplicateMessage(): Promise<void> {
        // TODO: handle popup with expected message: "(1019) Duplication Of Data Found"
    }

    async VerifyAcknowledgeCostMessage(): Promise<void> {
        // TODO: handle popup with expected message: "(3032) Enter Unit Cost"
    }

    async VerifyConfirmDuplicateScanBarcodeMessage(): Promise<void> {
        await this.page.locator('.popup-confirm .btn-yes, [data-action=yes]').click();
    }

    async SelectRandomRowInGrid(): Promise<void> {
        // TODO: random element interaction
    }

    async TabOutPurchaseDate(): Promise<void> {
        await this.uIPurchaseDateEdit.press('Tab');
    }

    async VerifyCurrentDateAutoPopulatesInPurchaseDate(): Promise<void> {
        await this.uIPurchaseDateEdit.getAttribute('value');
    }

    async VerifyDefaultLoggedPfAutoPopulatesInByField(): Promise<void> {
        await this.uIByPFCodeEdit.getAttribute('value');
    }

    async TabOutByPF(): Promise<void> {
        await this.uIByPFCodeEdit.press('Tab');
    }

    async EnterAtQtyReceived(): Promise<void> {
        await this.uIQtyReceivedEdit.fill(QtyReceived);
    }

    async EnterAtPopUpScanBarCode(): Promise<void> {
        await this.uIPanelScanBarCodeRFIDEdit.fill(ScanBarcode);
        await this.uIPanelScanBarCodeRFIDEdit.press('Tab');
    }

    async EnterAtPopUpScanBarCode2(): Promise<void> {
        await this.uIPanelScanBarCodeRFIDEdit.fill(ScanBarcode2);
        await this.uIPanelScanBarCodeRFIDEdit.press('Tab');
    }

    async EnterExpirationDateAsOneDayFutureFromCurrentDate(): Promise<void> {
        await this.uIExpirationDateEdit.fill(DateHelpers.getFutureDate());
    }

    async EnterExpirationDateAsCurrentDate(): Promise<void> {
        await this.uIExpirationDateEdit.fill(DateHelpers.getCurrentDate());
    }

    async VerifyExpirationDateAsCurrentDate(): Promise<void> {
        await this.uIExpirationDateEdit.getAttribute('value');
    }

    async VerifyExpirationDateAsOneDayFutureFromCurrentDate(): Promise<void> {
        await this.uIExpirationDateEdit.getAttribute('value');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async Verify3032EnterQtyReceivedAckMsg(): Promise<void> {
        await this.page.locator('.popup-acknowledge .btn-ok, [data-action=ok]').click();
    }

    async VerifyTotalQuantityAtQtyReceived(): Promise<void> {
        let totalQty: number;
        let qty: number;
        const ColumnValues: string[] = [];
        // TODO: grid iteration loop
        const qtyReceived = String.valueOf(totalQty);
        await this.uITotalQuantityEdit.getAttribute('value');
    }

    async clickRowByAtVendorName(): Promise<void> {
        await this.uIPurchaseHistoryTable.locator(`td:has-text("${VendorName}")`).first().click();
    }

    async VerifyQuantityReceivedFieldAsDisabledAndValueAs1(): Promise<void> {
        await this.uIQtyReceivedEdit.getAttribute('value');
    }

    async ClearExpirationDate(): Promise<void> {
        await this.uIExpirationDateEdit.clear();
    }

    async verifyAtBy(): Promise<void> {
        const attribute = await this.uIByPFCodeEdit.getAttribute('value');
    }

    async enterPreviousDateFromPurchaseDate(NoOfDays: string): Promise<void> {
        await this.uIPurchaseDateEdit.click();
        const date = await this.uIPurchaseDateEdit.getAttribute('value');
        let i: number;
        // TODO: grid iteration loop
        await this.uIPurchaseDateEdit.click();
        await this.uIPurchaseDateEdit.press('Backspace');
        // TODO: implement getPreviousDate logic
        const previousDate = '';
        await this.uIPurchaseDateEdit.fill(previousDate);
    }

    async verifyAtPurchaseDate(): Promise<void> {
        const attribute = uIMapInventory.inventoryEntry.purchaseHistoryTab.uIPurchaseDateEdit;
        expect(attribute).toEqual(testData.inventory('PurchaseDate'));
    }

    async verifyAtDateInGrid(): Promise<void> {
        let gridRowByCellInnerText: Locator;
    }

    async verifyAtDate1InGrid(): Promise<void> {
        let gridRowByCellInnerText: Locator;
    }

    async EnterAtPurchaseDate(): Promise<void> {
        await this.uIPurchaseDateEdit.fill(Date2);
        await this.uIUnitCostEdit.press('Tab');
    }

    async SelectRowByAtDate(): Promise<void> {
        await this.uIPurchaseHistoryTable.locator(`td:has-text("${Date1}")`).first().click();
    }

    async verifyAtByPFDescription(): Promise<void> {
        const attribute = await this.uIByPFDescriptionEdit.getAttribute('value');
    }

    async verifyAtQuantityInGrid(rowIndex: string): Promise<void> {
    }

    async readPreviousDate(): Promise<string> {
        const attribute = await this.uIPurchaseDateEdit.getAttribute('value');
        return attribute || '';
    }

    async readPurchaseDate(): Promise<string> {
        const attribute = await this.uIPurchaseDateEdit.getAttribute('value');
        return attribute || '';
    }

}

export class ServiceHistoryTabPage {
    readonly page: Page;
    readonly uIAddServiceHistoryButton: Locator;
    readonly uIServiceHistoryResultTable: Locator;
    readonly uIDateEdit: Locator;
    readonly uIServicedTestedByPFCodeEdit: Locator;
    readonly uIServicedTestedByPFCodeLookupButton: Locator;
    readonly uIConditionComboBox: Locator;
    readonly uINotesEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uICancelButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddServiceHistoryButton = page.locator('#tabItemEntry_tmpl3_usrServiceHistory1_btnAddNew');
        this.uIServiceHistoryResultTable = page.locator('#tabItemEntry_tmpl3_usrServiceHistory1_grdServiceHistory');
        this.uIDateEdit = page.locator('#tabItemEntry_tmpl3_usrServiceHistory1_dttmPdate_KPIDttmCtrl');
        this.uIServicedTestedByPFCodeEdit = page.locator('#tabItemEntry_tmpl3_usrServiceHistory1_lupBy_CodeValue');
        this.uIServicedTestedByPFCodeLookupButton = page.locator('#tabItemEntry_tmpl3_usrServiceHistory1_lupBy_imgBtn');
        this.uIConditionComboBox = page.locator('#tabItemEntry_tmpl3_usrServiceHistory1_cddCondition_DropDown');
        this.uINotesEdit = page.locator('#tabItemEntry_tmpl3_usrServiceHistory1_txtComment');
        this.uIAddButton = page.locator('#tabItemEntry_tmpl3_usrServiceHistory1_cmdOk');
        this.uICancelButton = page.locator('#tabItemEntry_tmpl3_usrServiceHistory1_cmdCancel');
    }

    async clickAddServiceHistoryButton(): Promise<void> {
        await this.uIAddServiceHistoryButton.click();
    }

    async EnterDate(): Promise<void> {
        await this.uIDateEdit.press('Tab');
    }

    async VerifyCurrentDate(): Promise<void> {
        await this.uIDateEdit.getAttribute('value');
    }

    async EnterAtServicedTestedBy(): Promise<void> {
        await this.uIServicedTestedByPFCodeEdit.fill(ServicedTestedBy);
        await this.uIServicedTestedByPFCodeEdit.press('Tab');
    }

    async SelectCondition(): Promise<void> {
        // TODO: random element interaction
    }

    async EnterNotes(): Promise<void> {
        await this.uINotesEdit.fill("To Test for Automation");
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async VerifyServiceAdded(rowIndex: string): Promise<void> {
    }

    async VerifyServiceHistoryNoData(): Promise<void> {
    }

}

export class InventoryEntryNotesTabPage {
    readonly page: Page;
    readonly uIUpdateDateEdit: Locator;
    readonly uIProcessedTimeEdit: Locator;
    readonly uIUpdatedByPFCodeEdit: Locator;
    readonly uIUpdatedByPFCodeLookupButton: Locator;
    readonly uICommentsEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uINotesResultTable: Locator;
    readonly uINotesGridDateText: Locator;
    readonly uINotesGridCommentsText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIUpdateDateEdit = page.locator('#dttmDate_Date_KPIDttmCtrl');
        this.uIProcessedTimeEdit = page.locator("//table[@id='dttmDate_Time']//input");
        this.uIUpdatedByPFCodeEdit = page.locator('#lupBy_CodeValue');
        this.uIUpdatedByPFCodeLookupButton = page.locator('#lupBy_imgBtn');
        this.uICommentsEdit = page.locator('#txtNotes');
        this.uISaveButton = page.locator('#cmdSave');
        this.uINotesResultTable = page.locator('#grdInvHistory');
        this.uINotesGridDateText = page.locator("//table[@id ='grdInvHistory']//table/tbody/tr/td");
        this.uINotesGridCommentsText = page.locator("//table[@id ='grdInvHistory']//div[@class='HistoryComments']");
    }

    async EnterUpdatedDateTime(): Promise<void> {
        await this.uIUpdateDateEdit.click();
        await this.uIProcessedTimeEdit.click();
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.locator('.popup-confirm .btn-yes, [data-action=yes]').click();
    }

    async EnterComments(): Promise<void> {
        await this.uICommentsEdit.fill("Automation Notes added");
    }

    async VerifyAcknowledgeRequiredMessage(): Promise<void> {
        await this.page.locator('.popup-acknowledge .btn-ok, [data-action=ok]').click();
    }

    async VerifyNotesAdded(): Promise<void> {
    }

    async enterAtUpdatedBy(): Promise<void> {
        await this.uIUpdatedByPFCodeEdit.fill(UpdatedBy);
        await this.uIUpdatedByPFCodeEdit.press('Tab');
    }

    async verifyUpdatedByAsNull(): Promise<void> {
        let UpdatedPfBlank = false;
    }

    async verifyUpdatedDateAndTimeAsNull(): Promise<void> {
        let Dateblank = false;
        let Timeblank = false;
    }

    async verifyCommentsAsNull(): Promise<void> {
        let commentblank = false;
    }

}

export class InventoryEntryDispositionTabPage {
    readonly page: Page;
    readonly uIAuthorizedByCodeEdit: Locator;
    readonly uIAuthorizedByCodeLookupButton: Locator;
    readonly uIDispositionDateEdit: Locator;
    readonly uIDispositionComboBox: Locator;
    readonly uIQuantitytoDispositionEdit: Locator;
    readonly uICommentsEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAuthorizedByCodeEdit = page.locator('#tabItemEntry_tmpl6_UsrDisposition1_lupDispPFCode_CodeValue');
        this.uIAuthorizedByCodeLookupButton = page.locator('#tabItemEntry_tmpl6_UsrDisposition1_lupDispPFCode_imgBtn');
        this.uIDispositionDateEdit = page.locator('#tabItemEntry_tmpl6_UsrDisposition1_dttmDisposition_KPIDttmCtrl');
        this.uIDispositionComboBox = page.locator('#tabItemEntry_tmpl6_UsrDisposition1_cddDisposition_DropDown');
        this.uIQuantitytoDispositionEdit = page.locator('#tabItemEntry_tmpl6_UsrDisposition1_txtQtyDispose');
        this.uICommentsEdit = page.locator('#tabItemEntry_tmpl6_UsrDisposition1_txtDispComments');
    }

    async VerifyAuthorizedByFieldEmpty(): Promise<void> {
    }

    async VerifyDispositionDateFieldEmpty(): Promise<void> {
    }

}

export class InventoryEntryActivityLogTabPage {
    readonly page: Page;
    readonly uIActivityResultTable: Locator;
    readonly uIAddServiceHistoryButton: Locator;
    readonly uIAddNewActivityButton: Locator;
    readonly uIActityTypeDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIActivityResultTable = page.locator('#tabItemEntry_tmpl3_usrActivityLog1_grdequipment');
        this.uIAddServiceHistoryButton = page.locator('#tabItemEntry_tmpl3_usrActivityLog1_cmdAddServiceHistory');
        this.uIAddNewActivityButton = page.locator('#tabItemEntry_tmpl3_usrActivityLog1_cmdaddnew');
        this.uIActityTypeDropdown = page.locator('#tabItemEntry_tmpl3_usrActivityLog1_cddActivityType');
    }

    async verifyAtActivityTypeInGrid(rowIndex: string): Promise<void> {
        const ActivityType = ''; // grid cell text
        expect(ActivityType).toEqual(testData.inventory('ActivityType'));
    }

    async verifyAtDateInGrid(rowIndex: string): Promise<void> {
        const Date = ''; // grid cell text
    }

    async verifyAtSubjectInGrid(rowIndex: string): Promise<void> {
        const InventorySub = ''; // grid cell text
    }

    async selectRowByActivityType(): Promise<void> {
        await this.uIActivityResultTable.locator(`td:has-text("${ActivityType}")`).first().click();
    }

    async clickAddServiceHistoryButton(): Promise<void> {
        await this.uIAddServiceHistoryButton.click();
    }

    async selectAtActivityType(i: string): Promise<void> {
    }

    async clickAddNewActivityButton(): Promise<void> {
        await this.uIAddNewActivityButton.click();
    }

    async verifyAtActivityTypeInGridBySubject(i: string): Promise<void> {
    }

}

export class BatchAssignReturnPage {
    readonly page: Page;
    readonly uISaveButton: Locator;
    readonly uILocationComboBox: Locator;
    readonly uIBatchAssignTable: Locator;
    readonly uIIssueByPFEdit: Locator;
    readonly uIPFEdit: Locator;
    readonly uIIssuedDateEdit: Locator;
    readonly uIIssuedTimeEdit: Locator;
    readonly uIInventoryLookUpIcon: Locator;
    readonly uIPersonnelRadioButton: Locator;
    readonly uICommentEdit: Locator;
    readonly uIResetButton: Locator;
    readonly uIFleetRadioButton: Locator;
    readonly uIDivisionRadioButton: Locator;
    readonly uIStationRadioButton: Locator;
    readonly uIScanInventoryOrPartNoEdit: Locator;
    readonly uIAssignedLabel: Locator;
    readonly uIAddButton: Locator;
    readonly uIQtyEdit: Locator;
    readonly uIScanInventoryLookUpIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISaveButton = page.locator('#cmdSave');
        this.uILocationComboBox = page.locator('#ddlLocation');
        this.uIBatchAssignTable = page.locator('#grdequipment');
        this.uIIssueByPFEdit = page.locator('#lupASGMTPFCode_CodeValue');
        this.uIPFEdit = page.locator('#lupEMPCode_CodeValue');
        this.uIIssuedDateEdit = page.locator('#dttmissueddate_Date_KPIDttmCtrl');
        this.uIIssuedTimeEdit = page.locator('#dttmissueddate_Time');
        this.uIInventoryLookUpIcon = page.locator('#imgLockup');
        this.uIPersonnelRadioButton = page.locator('#radPersonal');
        this.uICommentEdit = page.locator('#txtComments');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIFleetRadioButton = page.locator('#radFleet');
        this.uIDivisionRadioButton = page.locator('#radDivision');
        this.uIStationRadioButton = page.locator('#radStation');
        this.uIScanInventoryOrPartNoEdit = page.locator('#txtinventory');
        this.uIAssignedLabel = page.locator('#lblCurrentStatus');
        this.uIAddButton = page.locator('#imgAdd');
        this.uIQtyEdit = page.locator('#txtQty');
        this.uIScanInventoryLookUpIcon = page.locator('#lupInventoryCode_imgBtn');
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async SelectAtFleetLocation(): Promise<void> {
        await this.uILocationComboBox.selectOption({ label: FleetLocation });
    }

    async SelectAtLocation(): Promise<void> {
        await this.uILocationComboBox.selectOption({ label: Location });
    }

    async Verify3032EnterLocationAcknowledgeMessage(): Promise<void> {
        // TODO: handle popup with expected message: "(3032) Enter Location"
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.locator('.popup-confirm .btn-yes, [data-action=yes]').click();
    }

    async VerifyAtInventoryNoItemsSelectedInGrid(): Promise<void> {
    }

    async DoubleclickQuantityCellByAtInventoryNo(): Promise<void> {
        let row: Locator;
        await this.uIBatchAssignTable.locator(`td:has-text("${InventoryNo}")`).first().click();
        let quantityCell: Locator;
    }

    async EnterQuantityInGridByAtInventoryNo(quantity: string): Promise<void> {
        let row: Locator;
        await this.uIBatchAssignTable.locator(`td:has-text("${InventoryNo}")`).first().click();
        let quantityCell: Locator;
    }

    async enterAtIssueByPF(): Promise<void> {
        await this.uIIssueByPFEdit.fill(ByPF);
        await this.uIIssueByPFEdit.press('Tab');
    }

    async tabOutIssuedDateTime(): Promise<void> {
        await this.uIIssuedDateEdit.press('Tab');
        await this.page.keyboard.press('Tab');
    }

    async enterAtPF(): Promise<void> {
        await this.uIPFEdit.fill(PF);
        await this.uIPFEdit.press('Tab');
    }

    async selectPersonnelRadioButton(): Promise<void> {
        await this.uIPersonnelRadioButton.click();
    }

    async enterAtComment(): Promise<void> {
        await this.uICommentEdit.fill(Comment);
    }

    async clickInventoryLookupIcon(): Promise<void> {
        await this.uIInventoryLookUpIcon.click();
    }

    async verifyUpdateSuccessfulAck(): Promise<void> {
        // TODO: handle popup with expected message: "1003 - Update Successful"
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async verifyIssueByPfIsEmpty(): Promise<void> {
        const attribute = await this.uIIssueByPFEdit.getAttribute('value');
        let empty = false;
    }

    async verifyPfIsEmpty(): Promise<void> {
        const attribute = await this.uIPFEdit.getAttribute('value');
        let empty = false;
    }

    async verifyIssuedDateIsEmpty(): Promise<void> {
        const attribute = await this.uIIssuedDateEdit.getAttribute('value');
        const attribute2 = await this.uIIssuedTimeEdit.getAttribute('value');
        let empty = false;
        let empty2 = false;
    }

    async verify1018RequiredEntriesAcknowledgePopup(): Promise<void> {
        // TODO: handle popup with expected message: "(1018) Required Entries are Missing"
    }

    async verifyAtMakeColumnNameIsDisplayed(): Promise<void> {
        const text = ''; // grid cell text
        expect(text).toEqual(testData.inventory('ColumnName'));
    }

    async verifyAtAvailableQtyInGrid(rowIndex: string): Promise<void> {
        const gridCellInnerText = await gridHelpers.getGridCellInnerText(this.uIBatchAssignTable, 'Available Qty', rowIndex);
    }

    async verify11025AvailableQuantityAcknowledgePopupAppears(qty: string): Promise<void> {
        await this.page.locator('.popup-acknowledge .btn-ok, [data-action=ok]').click();
    }

    async DoubleclickQuantityCellByAtMakeAndEnterAtQuantity(i: string, j: string): Promise<void> {
        // TODO: implement grid cell double-click and fill
    }

    async verifyPersonnelRadioButtonChecked(): Promise<void> {
        const attribute = await this.uIPersonnelRadioButton.getAttribute('checked');
        expect(attribute).toEqual('true');
    }

    async verifyFleetRadioButtonIsDisabled(): Promise<void> {
    }

    async verifyDivisionRadioButtonIsDisabled(): Promise<void> {
    }

    async verifyStationRadioButtonIsDisabled(): Promise<void> {
    }

    async verify11027AbleToReturnOnlyAcknowledgePopupAppears(qty: string): Promise<void> {
        await this.page.locator('.popup-acknowledge .btn-ok, [data-action=ok]').click();
    }

    async verifyAtInventoryNoItemsSelectedInGrid(i: string): Promise<void> {
    }

    async verifyUpdateSuccessFulAcknowledge(): Promise<void> {
        // TODO: handle popup with expected message: "1003 - Update Successful"
    }

    async enterAtScanInventoryOrPartNo(): Promise<void> {
        await this.uIScanInventoryOrPartNoEdit.fill(ScanInventoryOrPartNo);
        await this.uIScanInventoryOrPartNoEdit.press('Tab');
    }

    async verifyAssignedLabelIsDisplayed(): Promise<void> {
        expect(await this.uIAssignedLabel.innerText()).toEqual("Assigned");
    }

    async verify6071AlreadyAssignedConfirmPopup(): Promise<void> {
        await this.page.locator('.popup-confirm .btn-yes, [data-action=yes]').click();
    }

    async verifyAtProcessedByPF(): Promise<void> {
        const IssueByPF = await this.uIIssueByPFEdit.getAttribute('value');
    }

    async verifyAtPF(): Promise<void> {
        const PF = await this.uIPFEdit.getAttribute('value');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async enterAtQty(): Promise<void> {
        await this.uIQtyEdit.fill(Qty);
    }

    async verifyAtTypeByMake(): Promise<void> {
        const Type = await gridHelpers.getGridCellText(this.uIBatchAssignTable, Make, 'Type');
    }

    async clickScanInventoryLookupIcon(): Promise<void> {
        await this.uIScanInventoryLookUpIcon.click();
    }

    async verifyAtAvailableQtyInGrid(): Promise<void> {
        const text = await this.uIBatchAssignTable.locator(`td:has-text("${AvailableQty}")`).first().innerText();
    }

    async verify3032EnterScanInventoryOrPartAcknowledgePopup(): Promise<void> {
        // TODO: handle popup with expected message: "(3032) Enter Scan Inventory Or Part#"
    }

}

export class StorageLocationPage {
    readonly page: Page;
    readonly uISearchButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIStorageLocationTable: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uILocationUseForDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISearchButton = page.locator('#cmdSearch');
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIStorageLocationTable = page.locator('#grdStorage');
        this.uIDescriptionEdit = page.locator('#txtDesc');
        this.uILocationUseForDropdown = page.locator('#cddLocUsed_DropDown');
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async EnterAtDescription(): Promise<void> {
        await this.uIDescriptionEdit.fill(Description);
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async VerifyAtDescriptionInGrid(): Promise<void> {
    }

    async selectAtDescriptionInGrid(i: string): Promise<void> {
    }

    async selectAtLocationUseFor(i: string): Promise<void> {
    }

    async verifyAtLocationUseForInGrid(i: string): Promise<void> {
        const gridTableColumnValues: string[] = [];
    }

    async selectAtLocationUseForInGrid(i: string): Promise<void> {
    }

    async selectRandomGridRow(): Promise<void> {
        // TODO: random element interaction
    }

    async verifyStorageLocationScreenExist(): Promise<void> {
    }

}

export class StorageLocationEntryPage {
    readonly page: Page;
    readonly uICodeEdit: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uILocationUseForComboBox: Locator;
    readonly uILockerCheckbox: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uICodeEdit = page.locator('#txtCode');
        this.uIDescriptionEdit = page.locator('#txtDescription');
        this.uILocationUseForComboBox = page.locator('#cddLocUsed_DropDown');
        this.uILockerCheckbox = page.locator('#chkWeaponLocker');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
    }

    async EnterAtDescription(): Promise<void> {
        await this.uIDescriptionEdit.fill(Description);
    }

    async SelectAtLocationUseFor(): Promise<void> {
        await this.uILocationUseForComboBox.selectOption({ label: LocationUseFor });
    }

    async clickLockerCheckbox(): Promise<void> {
        await this.uILockerCheckbox.click();
    }

    async Save(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.locator('.popup-confirm .btn-yes, [data-action=yes]').click();
    }

    async SaveNClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await this.page.locator('.popup-confirm .btn-yes, [data-action=yes]').click();
    }

    async CloseTheScreen(): Promise<void> {
    }

    async enterDescription(): Promise<void> {
    }

    async selectLocationUseFor(): Promise<void> {
        // TODO: random element interaction
    }

    async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
        await this.uIBottomLeftSideStatusBar.innerText();
    }

    async verifyAtDescription(i: string): Promise<void> {
        await this.uIDescriptionEdit.getAttribute('value');
    }

    async verifyAtLocationUseForDropdown(i: string): Promise<void> {
        const dropDwonSelectedItem = ''; // grid cell text
    }

    async verifyStorageLocationEntryScreenExist(): Promise<void> {
    }

}

export class CheckOutInEntryPage {
    readonly page: Page;
    readonly uIProcessedByPFEdit: Locator;
    readonly uIProcessDateEdit: Locator;
    readonly uIProcessTimeEdit: Locator;
    readonly uICheckOutForOrCheckInByPFEdit: Locator;
    readonly uINameIDEdit: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uIPhoneHomeEdit: Locator;
    readonly uIPhoneCellEdit: Locator;
    readonly uICheckedOutToOrCheckInByPfLookUpIcon: Locator;
    readonly uIScanInventoryOrPartLookUpIcon: Locator;
    readonly uIToCitizenLookupIcon: Locator;
    readonly uIToCitizenNameTypeEdit: Locator;
    readonly uIToCitizenNameIDEdit: Locator;
    readonly uIScanInventoryOrPartLookupIcon: Locator;
    readonly uIResultTable: Locator;
    readonly uICheckOutButton: Locator;
    readonly uICheckedOutToOrCheckInByPfEdit: Locator;
    readonly uIPrintIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIProcessedByPFEdit = page.locator('#lupPFCode_CodeValue');
        this.uIProcessDateEdit = page.locator('#dttmDate_Date_KPIDttmCtrl');
        this.uIProcessTimeEdit = page.locator("//table[@id='dttmDate_Time']//input");
        this.uICheckOutForOrCheckInByPFEdit = page.locator('#lupCheckPF_CodeValue');
        this.uINameIDEdit = page.locator('#nIssueToNameID_NameType');
        this.uINameTypeEdit = page.locator('#nIssueToNameID_NameTypeID');
        this.uILastNameEdit = page.locator('#nIssueToNameID_LastName');
        this.uIFirstNameEdit = page.locator('#nIssueToNameID_FirstName');
        this.uIAddressEdit = page.locator('#adrMainAddress_txtFrom');
        this.uIPhoneHomeEdit = page.locator('#cusPhone');
        this.uIPhoneCellEdit = page.locator('#cusAlt');
        this.uICheckedOutToOrCheckInByPfLookUpIcon = page.locator('#lupCheckPF_imgBtn');
        this.uIScanInventoryOrPartLookUpIcon = page.locator('#imgLockup');
        this.uIToCitizenLookupIcon = page.locator('#imgDetail');
        this.uIToCitizenNameTypeEdit = page.locator('#txtNID');
        this.uIToCitizenNameIDEdit = page.locator('#txtNameID');
        this.uIScanInventoryOrPartLookupIcon = page.locator('#imgLockup');
        this.uIResultTable = page.locator('#grdEquipSignLog');
        this.uICheckOutButton = page.locator('#btnSignOut');
        this.uICheckedOutToOrCheckInByPfEdit = page.locator('#lupCheckPF_CodeValue');
        this.uIPrintIcon = page.locator('#cmdPrint');
    }

    async CloseScreen(): Promise<void> {
        await this.page.close();
    }

    async EnterAtNameIDDetails(): Promise<void> {
        await this.uINameTypeEdit.fill(NameID);
        await this.uINameIDEdit.fill(NameID);
    }

    async EnterAtLastName(): Promise<void> {
        await this.uILastNameEdit.fill(LastName);
        await this.uILastNameEdit.press('Tab');
    }

    async EnterAtFirstName(): Promise<void> {
        await this.uIFirstNameEdit.fill(FirstName);
        await this.uIFirstNameEdit.press('Tab');
    }

    async SelectAtName(): Promise<void> {
    }

    async VerifyAtCellNumber(): Promise<void> {
        await this.uIPhoneCellEdit.getAttribute('value');
    }

    async VerifyAtHomeNumber(): Promise<void> {
        await this.uIPhoneHomeEdit.getAttribute('value');
    }

    async clickToCitizenLookupIcon(): Promise<void> {
        await this.uIToCitizenLookupIcon.click();
    }

    async verifyAtToCitizenNameID(): Promise<void> {
        const nameType = await this.uIToCitizenNameTypeEdit.getAttribute('value');
        const nameID = await this.uIToCitizenNameIDEdit.getAttribute('value');
    }

    async clickScanInventoryOrPartLookupIcon(): Promise<void> {
        await this.uIScanInventoryOrPartLookupIcon.click();
    }

    async verifyAtInventoryNoInGrid(rowIndex: string): Promise<void> {
        // TODO: implement grid cell verification
    }

    async clickCheckOutButton(): Promise<void> {
        await this.uICheckOutButton.click();
    }

    async verifyErrorPopupNotArised(): Promise<void> {
        let windowExist: boolean;
        const text = uIMapPopup.acknowledgeWindow.uIErrorInfoTextEdit.getText();
    }

    async clickCheckedOutToOrCheckInByPfLookUpIcon(): Promise<void> {
        await this.uICheckedOutToOrCheckInByPfLookUpIcon.click();
    }

    async clickScanInventoryOrPartLookUpIcon(): Promise<void> {
        await this.uIScanInventoryOrPartLookUpIcon.click();
    }

    async verifyAtInventoryNoInGrid1(i: string): Promise<void> {
    }

    async enterAtCheckedOutToOrCheckInByPF(): Promise<void> {
        await this.uICheckedOutToOrCheckInByPfEdit.fill(CheckOutInByPF);
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async verifyGridCountAsZero(): Promise<void> {
        let gridTableRowsCount: number;
    }

}

export class EquipmentServicePage {
    readonly page: Page;
    readonly uIJurisDropDown: Locator;
    readonly uIServiceDueDateBy: Locator;
    readonly uILocatedOnlyFleetIDropdown: Locator;
    readonly uIServicedOrTestedBy: Locator;
    readonly uITestedDate: Locator;
    readonly uISearchButton: Locator;
    readonly uIVendorCode: Locator;
    readonly uIVendorDescription: Locator;
    readonly uIVendorCost: Locator;
    readonly uITextNotes: Locator;
    readonly uIUnAssignInventoryToStorageTable: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveAndCloseButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIPrintButton: Locator;
    readonly uIEquipmentServiceGridTable: Locator;
    readonly uIEquipmentServiceScreenTabGrid: Locator;
    readonly uISelectAllCheckbox: Locator;
    readonly uIFleetGridTable: Locator;
    readonly uIEquipmentServiceGridTableWithColumnName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIJurisDropDown = page.locator('#lstJuris');
        this.uIServiceDueDateBy = page.locator('#dtServicedueby_KPIDttmCtrl');
        this.uILocatedOnlyFleetIDropdown = page.locator('#cddServiceType_DropDown');
        this.uIServicedOrTestedBy = page.locator('#lupEMPCode_CodeValue');
        this.uITestedDate = page.locator('#dtdate_KPIDttmCtrl');
        this.uISearchButton = page.locator('#cmdSearch');
        this.uIVendorCode = page.locator('#lupVendorName_CodeValue');
        this.uIVendorDescription = page.locator('#lupVendorName_CodeDescription');
        this.uIVendorCost = page.locator('#txtvendorCost');
        this.uITextNotes = page.locator('#txtNotes');
        this.uIUnAssignInventoryToStorageTable = page.locator('#grdequipment2_ctl00_3_0_32_0');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIEquipmentServiceGridTable = page.locator('#grdequipment2');
        this.uIEquipmentServiceScreenTabGrid = page.locator('#grdequipment2_ctl00');
        this.uISelectAllCheckbox = page.locator('#chkSelectAll');
        this.uIFleetGridTable = page.locator('#grdequipment2_ctl00_100020000260074_0_100020000260074100020000259910_0');
        this.uIEquipmentServiceGridTableWithColumnName = page.locator('#grdInvSrch');
    }

    async verifyServiceDueByAsCurrentDate(): Promise<void> {
        // TODO: verify date field matches current/future date
        await this.uIServiceDueDateBy.getAttribute('value');
    }

    async tabAtServicedBy(): Promise<void> {
        await this.uIServicedOrTestedBy.press('Tab');
    }

    async entratAtServicedBy(): Promise<void> {
        await this.uIServicedOrTestedBy.fill(ServicedBy);
        await this.uIServicedOrTestedBy.press('Tab');
    }

    async tabAtServiceDate(): Promise<void> {
        await this.uITestedDate.press('Tab');
    }

    async enterAtVendor(): Promise<void> {
        await this.uIVendorCode.fill(VendorCode);
        await this.uIVendorCode.press('Tab');
    }

    async verifyAtVendorDescription(): Promise<void> {
        await this.uIVendorDescription.fill(VendorDescription);
        await this.uIVendorDescription.press('Tab');
    }

    async enterAtCost(): Promise<void> {
        await this.uIVendorCost.fill(Cost);
        await this.uIVendorCost.press('Tab');
    }

    async selectAtSevicedCheckBoxByItemType(): Promise<void> {
        const row = this.uIUnAssignInventoryToStorageTable.locator(`td:has-text("${ItemType}")`).first().locator('..');
        await row.locator('img, input[type=checkbox]').first().click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.locator('.popup-confirm .btn-yes, [data-action=yes]').click();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async clickSaveNClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
    }

    async saveNClose(): Promise<void> {
        await this.uISaveAndCloseButton.click();
        await this.page.locator('.popup-confirm .btn-yes, [data-action=yes]').click();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async enterAtNotes(): Promise<void> {
        await this.uITextNotes.fill(Notes);
    }

    async verifyRowNotAvailableAfterSave(count: string): Promise<void> {
        let afterSave: number;
    }

    async verifyNoRecordFoundAcknowledgeNotArise(): Promise<void> {
    }

    async verifyAtMakeColumnNameIsDisplayed(): Promise<void> {
        const text = ''; // grid cell text
    }

    async verifyUnAssignedGridRowsAreNonEditable(): Promise<void> {
        const cells = await this.uIInventoryTable.locator('tbody tr').all();
        // TODO: grid iteration loop
        const text = cell.getText();
    }

    async enterAtServiceDueBy(i: string): Promise<void> {
        await this.uIServiceDueDateBy.clear();
        await this.uIServiceDueDateBy.press('Tab');
    }

    async verifyGridRowCountNotNull(): Promise<void> {
        let gridTableRowsCount: number;
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async doubleClickEnterCondition(): Promise<void> {
        // TODO: implement grid cell double-click and enter condition
    }

    async verifyGridRowCountNull(): Promise<void> {
        // TODO: implement grid row count verification
    }

    async doubleClickEnterConditionAsEAndTabout(): Promise<void> {
        // TODO: implement grid cell double-click, enter 'E', and tab out
    }

    async selectAtServicedCheckBoxByMake(): Promise<void> {
        const row = this.uIEquipmentServiceGridTableWithColumnName.locator(`td:has-text("${Make}")`).first().locator('..');
        await row.locator('img, input[type=checkbox]').first().click();
    }

    async verifyGridRowCountNotNullForWindow(): Promise<void> {
        let gridTableRowsCount: number;
    }

    async clickSelectAllCheckbox(): Promise<void> {
        await this.uISelectAllCheckbox.click();
    }

    async verifyAllCheckboxesAreCheckedInGrid(): Promise<void> {
        const checkBoxes = await this.uIInventoryTable.locator('tbody tr').all();
        let i: number;
        // TODO: grid iteration loop
    }

    async verifyAtLastTestDateIsLessOrEqualToDateInGrid(): Promise<void> {
        const lastTest: string[] = [];
    }

    async verifyAtLastTestDateIsLessOrEqualToDateInGridForFire(): Promise<void> {
        const lastTest: string[] = [];
    }

    async grtRowsCount(): Promise<number> {
        const rows = await this.uIUnAssignInventoryToStorageTable.locator('tbody tr').count();
        return rows;
    }

}

export class ItemEntrySearchPage {
    readonly page: Page;
    readonly uISearchButton: Locator;
    readonly uIItemEntrySearchResultTable: Locator;
    readonly uIAssignButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISearchButton = page.locator("//span[contains(text(),'Search')]");
        this.uIItemEntrySearchResultTable = page.locator('#grdInvSrch');
        this.uIAssignButton = page.locator(" //span[contains(text(),'Assign')]");
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async selectRowByAtInventoryNo(): Promise<void> {
        const row = this.uIItemEntrySearchResultTable.locator(`td:has-text("${InventoryNo}")`).first().locator('..');
        await row.locator('img, input[type=checkbox]').first().click();
        await this.uIAssignButton.click();
    }

}

export class InventoryAuditSearchPage {
    readonly page: Page;
    readonly uIAddNewButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIAuditYearEdit: Locator;
    readonly uIAuditNoEdit: Locator;
    readonly uIAInventoryAuditSearchTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddNewButton = page.locator("//span[text()='Add New']");
        this.uISearchButton = page.locator('#cmdSearch');
        this.uIAuditYearEdit = page.locator("//input[@id='ncAuditNo_Year']");
        this.uIAuditNoEdit = page.locator("//input[@id='ncAuditNo_Number']");
        this.uIAInventoryAuditSearchTable = page.locator("//div[@id='grdPropAudit']");
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async enterAuditNo(auditNo: string): Promise<void> {
        await this.uIAuditNoEdit.press('Tab');
    }

    async verifyNumberDoesNotExistsAcknowledgementMessage(): Promise<void> {
        // TODO: handle popup with expected message: "(1040) Number Does Not Exist"
    }

    async selectAtAuditInGrid(): Promise<void> {
        await this.uIAInventoryAuditSearchTable.locator('tr', { hasText: BaseData.getInventoryModuleValue("Audit") }).click();
    }

    async selectRandomGridRow(): Promise<void> {
        // TODO: random element interaction
    }

    async clickGridHeader(i: string): Promise<void> {
    }

    async verifyColumnsSortingAsAscending(ColumnName: string): Promise<void> {
    }

    async verifyColumnsSortingAsDescending(ColumnName: string): Promise<void> {
    }

    async verifyCountAsNullInGrid(): Promise<void> {
        let gridTableRowsCount: number;
    }

    async verifyCountNotNullInGrid(): Promise<void> {
        let gridTableRowsCount: number;
    }

}

export class InventoryAuditEntryPage {
    readonly page: Page;
    readonly uIAuditYearEdit: Locator;
    readonly uIAuditNoEdit: Locator;
    readonly uIAuditNameEdit: Locator;
    readonly uIAuditTypeComboBox: Locator;
    readonly uIAuditByLookUpEdit: Locator;
    readonly uIAuditDateEdit: Locator;
    readonly uIAuditTimeEdit: Locator;
    readonly uICreateAuditButton: Locator;
    readonly uIInventoryLocationComboBox: Locator;
    readonly uIDeleteIcon: Locator;
    readonly uISaveIcon: Locator;
    readonly uIAuditTab: Locator;
    readonly uIInventoryRoomRadioButton: Locator;
    readonly uIMainTab: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uIFleetRadioButton: Locator;
    readonly uIFleetIDEdit: Locator;
    readonly uIFleetIDLookup: Locator;
    readonly uIAuditNoHeadEdit: Locator;
    readonly uIDescriptionHeadEdit: Locator;
    readonly uIAuditTypeEdit: Locator;
    readonly uIAuditTypeHeadEdit: Locator;
    readonly uIAuditByHeadEdit: Locator;
    readonly uIAuditDateHeadEdit: Locator;
    readonly uIAuditTimeHeadEdit: Locator;
    readonly uIFleetIDHeadEdit: Locator;
    readonly uIIncludeNotInInventoryRoomItemsCheckbox: Locator;
    readonly uIStorageBuildingDropdown: Locator;
    readonly uIStorageRoomDropdown: Locator;
    readonly uIStorageRowDropdown: Locator;
    readonly uIStorageShelfDropdown: Locator;
    readonly uICategoryDropdown: Locator;
    readonly uITypeDropdown: Locator;
    readonly uIJurisHeadDropdown: Locator;
    readonly uIAuditYearHeadEdit: Locator;
    readonly uIAuditDescriptionHeadEdit: Locator;
    readonly uIApprovalTab: Locator;
    readonly uIStatusLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAuditYearEdit = page.locator("//input[@id='nmcAuditNo_Year']");
        this.uIAuditNoEdit = page.locator("//input[@id='nmcAuditNo_Number']");
        this.uIAuditNameEdit = page.locator('#txtAuditName');
        this.uIAuditTypeComboBox = page.locator('#cddAuditType_DropDown');
        this.uIAuditByLookUpEdit = page.locator('#lupAuditby_CodeValue');
        this.uIAuditDateEdit = page.locator("//input[@id='Auditdttm_Date_KPIDttmCtrl']");
        this.uIAuditTimeEdit = page.locator("//input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uICreateAuditButton = page.locator('#cmdAudit');
        this.uIInventoryLocationComboBox = page.locator('#cddInvLoc');
        this.uIDeleteIcon = page.locator('#cmdDelete');
        this.uISaveIcon = page.locator('#cmdSave');
        this.uIAuditTab = page.locator("//span[text()='Audit']");
        this.uIInventoryRoomRadioButton = page.locator('#rdbtnInvRoom');
        this.uIMainTab = page.locator("//span[text()='Main']");
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uIFleetRadioButton = page.locator('#rdbtnFleet');
        this.uIFleetIDEdit = page.locator('#lupFleetID_CodeValue');
        this.uIFleetIDLookup = page.locator('#lupFleetID_imgBtn');
        this.uIAuditNoHeadEdit = page.locator("//input[@id='nmcHeadAuditNo_Number']");
        this.uIDescriptionHeadEdit = page.locator('#txtHeadDesc');
        this.uIAuditTypeEdit = page.locator('#txtHeadAuditType');
        this.uIAuditTypeHeadEdit = page.locator('#txtHeadAuditType');
        this.uIAuditByHeadEdit = page.locator('#lupHeadAuditBy_CodeValue');
        this.uIAuditDateHeadEdit = page.locator("//input[@id='dttmHeadAuditDateTime_Date_KPIDttmCtrl']");
        this.uIAuditTimeHeadEdit = page.locator("//input[@class='textboxInactivedatetime igte_BlueThemeEditInContainer']");
        this.uIFleetIDHeadEdit = page.locator('#lupHeadFleetID_CodeValue');
        this.uIIncludeNotInInventoryRoomItemsCheckbox = page.locator('#chkIsNotInv');
        this.uIStorageBuildingDropdown = page.locator('#cddStorageBuilding_DropDown');
        this.uIStorageRoomDropdown = page.locator('#cddStorageRoom_DropDown');
        this.uIStorageRowDropdown = page.locator('#cddStorageRow_DropDown');
        this.uIStorageShelfDropdown = page.locator('#cddStorageShelf_DropDown');
        this.uICategoryDropdown = page.locator('#cddInvCategory_DropDown');
        this.uITypeDropdown = page.locator('#cddmulInvType_Input');
        this.uIJurisHeadDropdown = page.locator('#lstHeadJuris');
        this.uIAuditYearHeadEdit = page.locator("//input[@id='nmcHeadAuditNo_Year']");
        this.uIAuditDescriptionHeadEdit = page.locator('#txtHeadDesc');
        this.uIApprovalTab = page.locator("//span[text()='Approval']");
        this.uIStatusLabel = page.locator('#lblApprovalStatus');
    }

    async enterAtAuditName(): Promise<void> {
        await this.uIAuditNameEdit.fill(AuditName);
    }

    async selectAtAuditType(): Promise<void> {
        await this.uIAuditTypeComboBox.selectOption({ label: AuditType });
    }

    async taboutAuditByField(): Promise<void> {
        await this.uIAuditByLookUpEdit.click();
        await this.uIAuditByLookUpEdit.press('Tab');
    }

    async taboutAuditDateAndTime(): Promise<void> {
        await this.uIAuditDateEdit.press('Tab');
        await this.uIAuditTimeEdit.press('Tab');
    }

    async clickCreateAuditButton(): Promise<void> {
        await this.uICreateAuditButton.click();
    }

    async selectAtInventoryLocation(): Promise<void> {
        await this.uIInventoryLocationComboBox.selectOption({ label: InventoryLocation });
    }

    async clickDeleteIcon(): Promise<void> {
        await this.uIDeleteIcon.click();
    }

    async verifyDoYouReallyWantToDeleteConfirmPopup(): Promise<void> {
        await this.page.locator('.popup-confirm .btn-yes, [data-action=yes]').click();
    }

    async verifyAtAuditName(): Promise<void> {
        const AuditName = await this.uIAuditNameEdit.innerText();
    }

    async clearAuditName(): Promise<void> {
        await this.uIAuditNameEdit.click();
        await this.uIAuditNameEdit.clear();
    }

    async save(): Promise<void> {
        await this.uISaveIcon.click();
        await this.page.locator('.popup-confirm .btn-yes, [data-action=yes]').click();
    }

    async switchToAuditTab(): Promise<void> {
        await this.uIAuditTab.click();
    }

    async verifyAuditNoIsNotNull(): Promise<void> {
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async enterAtDescription(i: string): Promise<void> {
    }

    async clickInventoryRoomRadioButton(): Promise<void> {
        await this.uIInventoryRoomRadioButton.click();
    }

    async switchToMainTab(): Promise<void> {
        await this.uIMainTab.click();
    }

    async readAuditNo(): Promise<string> {
        const auditYear = await this.uIAuditYearEdit.getAttribute('value');
        const auditNumber = await this.uIAuditNoEdit.getAttribute('value');
        return auditYear + '-' + auditNumber;
    }

}

export class AuditTabPage {
    readonly page: Page;
    readonly uIShowDropdown: Locator;
    readonly uIAuditGrid: Locator;
    readonly uIAuditResultDropdown: Locator;
    readonly uITransmitButton: Locator;
    readonly uIDisplayFilterDropdown: Locator;
    readonly uITotalItemsEdit: Locator;
    readonly uIEnterInventoryOrScanEdit: Locator;
    readonly uIUpdateButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIShowDropdown = page.locator('#cddFilter');
        this.uIAuditGrid = page.locator('#grdAudit');
        this.uIAuditResultDropdown = page.locator('#cddAuditResult_DropDown');
        this.uITransmitButton = page.locator('#cmdTransmit');
        this.uIDisplayFilterDropdown = page.locator('#cddFilterType_DropDown');
        this.uITotalItemsEdit = page.locator('#txtTotalItems');
        this.uIEnterInventoryOrScanEdit = page.locator('#txtinventorynoorbarcode');
        this.uIUpdateButton = page.locator('#cmdTransmit');
    }

    async selectAtShow(i: string): Promise<void> {
    }

    async selectAtAuditResult(i: string): Promise<void> {
    }

    async clickTransmitButton(): Promise<void> {
        await this.uITransmitButton.click();
    }

    async verifyAtAuditedInGrid(i: string): Promise<void> {
        const auditedColumnValues: string[] = [];
    }

    async verifyAtAuditedNotContainsInGrid(i: string): Promise<void> {
        const auditedColumnValues: string[] = [];
    }

    async verifyAtAuditResultValueIsNotContains(i: string): Promise<void> {
    }

    async verifyAtShowNotContains(i: string): Promise<void> {
    }

    async verifyAtDisplayFilterNotContains(i: string): Promise<void> {
    }

    async verifyAtAuditResultDropDown(i: string): Promise<void> {
        const dropDwonSelectedItem = ''; // grid cell text
    }

    async verifyAuditResultIsEnabled(): Promise<void> {
        expect(await this.uIAuditResultDropdown.isEnabled()).toBeTruthy();
    }

    async verifyAtTotalItems(): Promise<void> {
        const attribute = await this.uITotalItemsEdit.getAttribute('value');
    }

    async verifyTotalItemsIsDisabled(): Promise<void> {
        const totalItems = await this.uITotalItemsEdit.getAttribute('readonly');
        expect(totalItems).toEqual('true');
    }

    async verifyAtAuditedColumnValueNotListed(i: string): Promise<void> {
        const gridTableColumnValues: string[] = [];
    }

    async selectAtTypeInGrid(i: string): Promise<void> {
    }

    async verifyAtEnterInventoryOrScan(): Promise<void> {
        const attribute = await this.uIEnterInventoryOrScanEdit.getAttribute('value');
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }

    async verifyAtAuditedByTypeInGrid(i: string): Promise<void> {
        const text = ''; // grid cell text
    }

}

export class MainTabPage {
    readonly page: Page;
    readonly uIAcceptedByEdit: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIAuditByEdit: Locator;
    readonly uIAuditDateEdit: Locator;
    readonly uIAuditTimeEdit: Locator;
    readonly uIStorageBuildingDropdown: Locator;
    readonly uIStorageRoomDropdown: Locator;
    readonly uIStorageRowDropdown: Locator;
    readonly uIStorageShelfDropdown: Locator;
    readonly uIIncludeNotInInventoryRoomItemsCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAcceptedByEdit = page.locator('#tabInvAudit_tmpl0_usrInvAuditMain1_lupAuditby_CodeValue');
        this.uIDateEdit = page.locator('#tabInvAudit_tmpl0_usrInvAuditMain1_KPIAppDateTime_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//input[@id='tabInvAudit_tmpl0_usrInvAuditMain1_KPIAppDateTime_Date_KPIDttmCtrl']");
        this.uIAuditByEdit = page.locator('#tabInvAudit_tmpl0_usrInvAuditMain1_lupusrAuditby_CodeValue');
        this.uIAuditDateEdit = page.locator("//input[@id='tabInvAudit_tmpl0_usrInvAuditMain1_usrAuditdttm_Date_KPIDttmCtrl']");
        this.uIAuditTimeEdit = page.locator("//input[@class='textboxInactivedatetime igte_BlueThemeEditInContainer']");
        this.uIStorageBuildingDropdown = page.locator('#tabInvAudit_tmpl0_usrInvAuditMain1_cddusrStorageBuilding_DropDown');
        this.uIStorageRoomDropdown = page.locator('#tabInvAudit_tmpl0_usrInvAuditMain1_cddusrStorageRoom_DropDown');
        this.uIStorageRowDropdown = page.locator('#tabInvAudit_tmpl0_usrInvAuditMain1_cddusrStorageRow_DropDown');
        this.uIStorageShelfDropdown = page.locator('#tabInvAudit_tmpl0_usrInvAuditMain1_cddStorageShelf_DropDown');
        this.uIIncludeNotInInventoryRoomItemsCheckbox = page.locator('#tabInvAudit_tmpl0_usrInvAuditMain1_chkIsNotInv');
    }

    async enterAtAcceptedBy(): Promise<void> {
        await this.uIAcceptedByEdit.fill(AcceptedBy);
        await this.uIAcceptedByEdit.press('Tab');
    }

    async taboutDateTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async verifyAuditByFieldIsDisabled(): Promise<void> {
        const auditby = await this.uIAuditByEdit.getAttribute('readonly');
        expect(auditby).toEqual('true');
    }

    async verifyAuditDateTimeFieldIsDisabled(): Promise<void> {
        const date = await this.uIAuditDateEdit.getAttribute('readonly');
        expect(date).toEqual('true');
        const time = await this.uIAuditTimeEdit.getAttribute('readonly');
        expect(time).toEqual('true');
    }

    async verifyStorageBuildingFieldIsDisabled(): Promise<void> {
    }

    async verifyStorageRoomFieldIsDisabled(): Promise<void> {
    }

    async verifyStorageRowFieldIsDisabled(): Promise<void> {
    }

    async verifyStorageShelfFieldIsDisabled(): Promise<void> {
    }

    async verifyIncludeNotInInventoryRoomItemsCheckboxIsChecked(): Promise<void> {
    }

    async verifyIncludeNotInInventoryRoomItemsCheckboxIsDisabled(): Promise<void> {
    }

    async verifyAtAuditBy(): Promise<void> {
        const attribute = await this.uIAuditByEdit.getAttribute('value');
    }

    async verifyAtAuditDateTime(): Promise<void> {
        const attribute = await this.uIAuditDateEdit.getAttribute('value');
    }

    async verifyAtStorageBuildingDropdown(): Promise<void> {
        const dropDwonSelectedItem = ''; // grid cell text
        expect(dropDwonSelectedItem).toEqual(testData.inventory('StorageBuilding'));
    }

    async verifyAtStorageRoomDropdown(): Promise<void> {
        const dropDwonSelectedItem = ''; // grid cell text
        expect(dropDwonSelectedItem).toEqual(testData.inventory('StorageRoom'));
    }

    async verifyAtStorageRowDropdown(): Promise<void> {
        const dropDwonSelectedItem = ''; // grid cell text
        expect(dropDwonSelectedItem).toEqual(testData.inventory('StorageRow'));
    }

    async verifyAtStorageShelfDropdown(): Promise<void> {
        const dropDwonSelectedItem = ''; // grid cell text
        expect(dropDwonSelectedItem).toEqual(testData.inventory('StorageShelf'));
    }

}

export class ApprovalTabPage {
    readonly page: Page;
    readonly uINewActionDropDown: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uITimeEditForFire: Locator;
    readonly uISaveButton: Locator;
    readonly uISupervisorEdit: Locator;
    readonly uISupervisorLookupIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINewActionDropDown = page.locator('#lstStatus');
        this.uIDateEdit = page.locator('#dttStatusDttm_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id = 'dttStatusDttm_Time']//input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uITimeEditForFire = page.locator("//table[@id = 'dttStatusDttm_Time']//input[@class='textboxdatetime igte_RedThemeEditInContainer']");
        this.uISaveButton = page.locator("//input[@id='cmdSave']");
        this.uISupervisorEdit = page.locator('#lupSupervisor_CodeValue');
        this.uISupervisorLookupIcon = page.locator('#lupSupervisor_imgBtn');
    }

    async selectAtNewAction(i: string): Promise<void> {
    }

    async taboutDateAndTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async saveInternal(): Promise<void> {
        await this.uISaveButton.click();
    }

    async enterAtSupervisor(): Promise<void> {
        await this.uISupervisorEdit.fill(Supervisor);
        await this.uISupervisorEdit.press('Tab');
    }

    async clickLookupIcon(): Promise<void> {
        await this.uISupervisorLookupIcon.click();
    }

    async verifyUpdateSuccessfulAckMessage(): Promise<void> {
        // TODO: handle popup with expected message: "1003 - Update Successful"
    }

    async verifyJurisFieldIsEnabled(): Promise<void> {
        const enabled = await this.uIJurisDropdown.isEnabled();
    }

    async clickFleetRadioButton(): Promise<void> {
        await this.uIFleetRadioButton.click();
    }

    async enterAtFleetID(): Promise<void> {
        await this.uIFleetIDEdit.fill(FleetID);
        await this.uIFleetIDEdit.press('Tab');
    }

    async verifyFleetIDLookUpIsDisplayed(): Promise<void> {
        const displayed = await this.uIFleetIDLookup.isVisible();
    }

    async verifyAuditTabIsEnabled(): Promise<void> {
        const enabled = await this.uIAuditTab.isEnabled();
    }

    async verifyJurisFieldIsDisabled(): Promise<void> {
    }

    async verifyAuditNoFieldIsDisabled(): Promise<void> {
        const attribute = await this.uIAuditNoHeadEdit.getAttribute('readonly');
        expect(attribute).toEqual('true');
    }

    async verifyAuditTypeFieldIsDisabled(): Promise<void> {
        const attribute = await this.uIAuditTypeHeadEdit.getAttribute('readonly');
        expect(attribute).toEqual('true');
    }

    async verifyAuditByIsDisabled(): Promise<void> {
        const attribute = await this.uIAuditByHeadEdit.getAttribute('readonly');
        expect(attribute).toEqual('true');
    }

    async verifyDateTimeFieldIsDisabled(): Promise<void> {
        const date = await this.uIAuditDateHeadEdit.getAttribute('readonly');
        expect(date).toEqual('true');
        const time = await this.uIAuditTimeHeadEdit.getAttribute('readonly');
        expect(time).toEqual('true');
    }

    async verifyDescriptionFieldIsDisabled(): Promise<void> {
        const attribute = await this.uIDescriptionHeadEdit.getAttribute('readonly');
        expect(attribute).toEqual('true');
    }

    async verifyFleetIDFieldIsDisabled(): Promise<void> {
        const attribute = await this.uIFleetIDHeadEdit.getAttribute('readonly');
        expect(attribute).toEqual('true');
    }

    async verifyAtJurisDropdown(): Promise<void> {
        const dropDwonSelectedItem = ''; // grid cell text
        expect(dropDwonSelectedItem).toEqual(testData.inventory('Juris'));
    }

    async clickInventoryRadioButton(): Promise<void> {
        await this.uIInventoryRoomRadioButton.click();
    }

    async verifyIncludeNotInInventoryRoomItemsCheckboxIsDisplayed(): Promise<void> {
        const displayed = await this.uIIncludeNotInInventoryRoomItemsCheckbox.isVisible();
    }

    async clickIncludeNotInInventoryRoomItemsCheckbox(): Promise<void> {
        await this.uIIncludeNotInInventoryRoomItemsCheckbox.click();
    }

    async verifyStorageBuildingIsDisplayed(): Promise<void> {
        const displayed = await this.uIStorageBuildingDropdown.isVisible();
    }

    async verifyStorageRoomIsDisplayed(): Promise<void> {
        const displayed = await this.uIStorageRoomDropdown.isVisible();
    }

    async verifyStorageRowIsDisplayed(): Promise<void> {
        const displayed = await this.uIStorageRowDropdown.isVisible();
    }

    async verifyStorageShelfIsDisplayed(): Promise<void> {
        const displayed = await this.uIStorageShelfDropdown.isVisible();
    }

    async verifyCategoryIsDisplayed(): Promise<void> {
        const displayed = await this.uICategoryDropdown.isVisible();
    }

    async verifyTypeIsDisplayed(): Promise<void> {
        const displayed = await this.uITypeDropdown.isVisible();
    }

    async selectAtStorageBuilding(): Promise<void> {
        await this.uIStorageBuildingDropdown.selectOption({ label: StorageBuilding });
    }

    async selectAtStorageRoom(): Promise<void> {
        await this.uIStorageRoomDropdown.selectOption({ label: StorageRoom });
    }

    async selectAtStorageRow(): Promise<void> {
        await this.uIStorageRowDropdown.selectOption({ label: StorageRow });
    }

    async selectAtStorageShelf(): Promise<void> {
        await this.uIStorageShelfDropdown.selectOption({ label: StorageShelf });
    }

    async selectAtCategory(): Promise<void> {
        await this.uICategoryDropdown.selectOption({ label: Category });
    }

    async selectTypeAsCheckAll(): Promise<void> {
        await this.uITypeDropdownArrow.click();
        await this.uITypeDropdownArrow.click();
    }

    async verifyAtAuditType(): Promise<void> {
        const attribute = await this.uIAuditTypeHeadEdit.getAttribute('value');
    }

    async verifyAtAuditBy(): Promise<void> {
        const attribute = await this.uIAuditByHeadEdit.getAttribute('value');
    }

    async verifyAtDateTime(): Promise<void> {
        const attribute = await this.uIAuditDateHeadEdit.getAttribute('value');
    }

    async verifyAtDescription(): Promise<void> {
        const attribute = await this.uIAuditDescriptionHeadEdit.getAttribute('value');
    }

    async verifyAtFleetID(): Promise<void> {
        const attribute = await this.uIFleetIDHeadEdit.getAttribute('value');
    }

    async verifyAtJurisHeadDropdown(): Promise<void> {
        const dropDwonSelectedItem = ''; // grid cell text
        expect(dropDwonSelectedItem).toEqual(testData.inventory('Juris'));
    }

    async selectAtType(i: string): Promise<void> {
        await this.uITypeDropdownArrow.click();
        await this.uITypeDropdownArrow.click();
    }

    async switchToApprovalTab(): Promise<void> {
        await this.uIApprovalTab.click();
    }

    async verifyApprovalTabEnabled(): Promise<void> {
        expect(await this.uIApprovalTab.isVisible()).toBeTruthy();
    }

    async verifyStatusAsSubmitted(): Promise<void> {
    }

}

export class MileageLogPage {
    readonly page: Page;
    readonly uIUpdateMileageButton: Locator;
    readonly uIMileageGrid: Locator;
    readonly uIFleetIDDropDown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIUpdateMileageButton = page.locator('#cmdUpdate');
        this.uIMileageGrid = page.locator('#grdGasUsage');
        this.uIFleetIDDropDown = page.locator('#cddFleetID_DropDown');
    }

    async clickUpdateMileage(): Promise<void> {
        await this.uIUpdateMileageButton.click();
    }

    async verifyAtMileageInGridWithFleet(): Promise<void> {
        const mileage = await gridHelpers.getGridCellText(this.uIMileageGrid, FleetID, 'Mileage');
    }

    async selectAtFleetID(): Promise<void> {
        await this.uIFleetIDDropDown.selectOption({ label: FleetID });
    }

    async selectAtFleetIDInGrid(): Promise<void> {
        await this.uIMileageGrid.locator(`td:has-text("${FleetID}")`).first().click();
    }

    async switchToMileageLog(): Promise<void> {
    }

    async switchToMileageLogEntry(): Promise<void> {
    }

    async switchToCheckOutInSearch(): Promise<void> {
    }

}

export class CheckOutInSearchPage {
    readonly page: Page;
    readonly uISearchButton: Locator;
    readonly uISearchGrid: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uIInvNameDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISearchButton = page.locator("//span[text()='Search']");
        this.uISearchGrid = page.locator('#grdChkSrch');
        this.uIDescriptionEdit = page.locator('#txtDescription');
        this.uIInvNameDropdown = page.locator('#ddlInvname_DropDown');
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async selectAtDescriptionInGrid(i: string): Promise<void> {
    }

    async enterAtDescription(i: string): Promise<void> {
    }

    async verifyAtInvName(i: string): Promise<void> {
        const dropDownValues: string[] = [];
    }

}

export class SelfCheckOutInPage {
    readonly page: Page;
    readonly uIPFNoEdit: Locator;
    readonly uIPFResetIcon: Locator;
    readonly uIKeyboardIcon: Locator;
    readonly uIScanInventoryEdit: Locator;
    readonly uICheckOutTypeComboBox: Locator;
    readonly uICheckOutNoEdit: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uIMakeEdit: Locator;
    readonly uISerialEdit: Locator;
    readonly uISignOutButton: Locator;
    readonly uIReturnAllButton: Locator;
    readonly uISelfCheckOutInTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIPFNoEdit = page.locator('#lupEmp_CodeValue');
        this.uIPFResetIcon = page.locator('#ImgRefresh');
        this.uIKeyboardIcon = page.locator('#imgKeyboard');
        this.uIScanInventoryEdit = page.locator('#txtInventoryNo');
        this.uICheckOutTypeComboBox = page.locator('#cddCheckOut_DropDown');
        this.uICheckOutNoEdit = page.locator('#txtCheckOutNbr');
        this.uIDescriptionEdit = page.locator('#txtDesc');
        this.uIMakeEdit = page.locator('#txtMake');
        this.uISerialEdit = page.locator('#txtSerial');
        this.uISignOutButton = page.locator('#cmdSign');
        this.uIReturnAllButton = page.locator('#cmdReturnAll');
        this.uISelfCheckOutInTable = page.locator('#grdEquipSignLog');
    }

    async enterAtPFNo(): Promise<void> {
        await this.uIPFNoEdit.fill(PFNo);
        await this.uIPFNoEdit.press('Tab');
    }

    async clickPFResetIcon(): Promise<void> {
        await this.uIPFResetIcon.click();
    }

    async clickKeyboardIcon(): Promise<void> {
        await this.uIKeyboardIcon.click();
    }

    async enterAtScanInventory(): Promise<void> {
        await this.uIScanInventoryEdit.fill(ScanInventory);
        await this.uIScanInventoryEdit.press('Tab');
    }

    async selectAtCheckOutType(): Promise<void> {
        await this.uICheckOutTypeComboBox.selectOption({ label: CheckOutType });
    }

    async clickSignOutButton(): Promise<void> {
        await this.uISignOutButton.click();
    }

    async clickReturnAllButton(): Promise<void> {
        await this.uIReturnAllButton.click();
    }

}

export class EquipmentPFAuthenticationPage {
    readonly page: Page;
    readonly uIKeyboardIcon: Locator;
    readonly uIUserNameEdit: Locator;
    readonly uIPasswordEdit: Locator;
    readonly uIAcceptButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIKeyboardIcon = page.locator('#imgKeyboard');
        this.uIUserNameEdit = page.locator('#txtUserName');
        this.uIPasswordEdit = page.locator('#txtPassword');
        this.uIAcceptButton = page.locator('#cmdLogin');
    }

    async clickKeyboardIcon(): Promise<void> {
        await this.uIKeyboardIcon.click();
    }

    async enterAtUserName(): Promise<void> {
        await this.uIUserNameEdit.fill(UserName);
    }

    async enterAtPassword(): Promise<void> {
        await this.uIPasswordEdit.fill(Password);
    }

    async clickAcceptButton(): Promise<void> {
        await this.uIAcceptButton.click();
    }

}

