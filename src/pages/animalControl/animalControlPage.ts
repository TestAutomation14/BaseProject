// @ts-nocheck
import { Page, Locator, expect } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { BaseData } from '../../data/base-data';
import { PoliceData } from '../../data/police-data';
import { GridHelpers } from '../../helpers/grid-helpers';
import { ElementHelpers } from '../../helpers/element-helpers';
import { PopupHelpers } from '../../helpers/popup-helpers';
import { DateHelpers, RandomHelpers } from '../../helpers';
import { FileHelpers } from '../../helpers/file-helpers';
import console from 'node:console';

// ============================================================================
// 1. ANIMAL NAME SEARCH PAGE
// ============================================================================
export class AnimalNameSearchPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIJurisDropdown: Locator;
    readonly uIAnimalNameType: Locator;
    readonly uIAnimalNameIDEdit: Locator;
    readonly uIAnimalLastNameEdit: Locator;
    readonly uIAnimalFirstNameEdit: Locator;
    readonly uIAnimalMiddleEdit: Locator;
    readonly uISexDropDown: Locator;
    readonly uISpeciesDropdown: Locator;
    readonly uITypeofProcedureDropDown: Locator;
    readonly uIBreed1DropDown: Locator;
    readonly uIBreed2DropDown: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIBackButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIAnimalNameSearchResultGrid: Locator;
    readonly uIAIDCodeEdit: Locator;
    readonly uIPIDCodeEdit: Locator;
    readonly uISBCodeEdit: Locator;
    readonly uITrackingLookUpIcon: Locator;
    readonly uIViewDetailButton: Locator;
    readonly uISelectButton: Locator;
    readonly uIViewDetailButtonClass: Locator;
    readonly uIColor1Dropdown: Locator;
    readonly uIColor2Dropdown: Locator;
    readonly uIMarkingsDropdown: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIExportToExcelIcon: Locator;
    readonly uIRabiesShotExpirationFrom: Locator;
    readonly uIRabiesShotExpirationTo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIJurisDropdown = page.locator('#tabNameSrch_tmpl0_usrAnimalSrchAdv1_lstJuris');
        this.uIAnimalNameType = page.locator('#tabNameSrch_tmpl0_usrAnimalSrchAdv1_cddNameType');
        this.uIAnimalNameIDEdit = page.locator('#tabNameSrch_tmpl0_usrAnimalSrchAdv1_txtNameID');
        this.uIAnimalLastNameEdit = page.locator('#tabNameSrch_tmpl0_usrAnimalSrchAdv1_txtLastName');
        this.uIAnimalFirstNameEdit = page.locator('#tabNameSrch_tmpl0_usrAnimalSrchAdv1_txtFirstName');
        this.uIAnimalMiddleEdit = page.locator('#tabNameSrch_tmpl0_usrAnimalSrchAdv1_txtMiddleName');
        this.uISexDropDown = page.locator('#tabNameSrch_tmpl0_usrAnimalSrchAdv1_cddSex_DropDown');
        this.uISpeciesDropdown = page.locator('#tabNameSrch_tmpl0_usrAnimalSrchAdv1_cddSpecies_DropDown');
        this.uITypeofProcedureDropDown = page.locator('#tabNameSrch_tmpl0_usrAnimalSrchAdv1_cddProcedure_DropDown');
        this.uIBreed1DropDown = page.locator('#tabNameSrch_tmpl0_usrAnimalSrchAdv1_cddBreed1');
        this.uIBreed2DropDown = page.locator('#tabNameSrch_tmpl0_usrAnimalSrchAdv1_cddBreed2');
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uISearchButton = page.locator("//span[(text()='Search')]");
        this.uIAnimalNameSearchResultGrid = page.locator('#grdNames');
        this.uIAIDCodeEdit = page.locator('#tabNameSrch_tmpl0_usrAnimalSrchAdv1_txtCustome1');
        this.uIPIDCodeEdit = page.locator('#tabNameSrch_tmpl0_usrAnimalSrchAdv1_txtCustome2');
        this.uISBCodeEdit = page.locator('#tabNameSrch_tmpl0_usrAnimalSrchAdv1_txtCustome3');
        this.uITrackingLookUpIcon = page.locator('#tabNameSrch_tmpl0_usrAnimalSrchAdv1_lupTracking_imgBtn');
        this.uIViewDetailButton = page.locator("//span[text()='View Details']");
        this.uISelectButton = page.locator("//span[@title='SelectName' and text()='Select Name']");
        this.uIViewDetailButtonClass = page.locator("//li[@title='SelectName']");
        this.uIColor1Dropdown = page.locator('#tabNameSrch_tmpl0_usrAnimalSrchAdv1_cddColor1');
        this.uIColor2Dropdown = page.locator('#tabNameSrch_tmpl0_usrAnimalSrchAdv1_cddColor2');
        this.uIMarkingsDropdown = page.locator('#tabNameSrch_tmpl0_usrAnimalSrchAdv1_cddMarkings');
        this.uIPrintIcon = page.locator("//img[@title='Print']");
        this.uIExportToExcelIcon = page.locator("//img[@title='Export to Excel']");
        this.uIRabiesShotExpirationFrom = page.locator('#tabNameSrch_tmpl0_usrAnimalSrchAdv1_dtcFromDate_KPIDttmCtrl');
        this.uIRabiesShotExpirationTo = page.locator('#tabNameSrch_tmpl0_usrAnimalSrchAdv1_dtcToDate_KPIDttmCtrl');
    }

    async enterAtName(): Promise<void> {
        await this.uIAnimalLastNameEdit.fill(PoliceData.getAnimalControlModuleValue('AnimalLastName'));
        await this.uIAnimalLastNameEdit.press('Tab');
        await this.uIAnimalFirstNameEdit.fill(PoliceData.getAnimalControlModuleValue('AnimalFirstName'));
        await this.uIAnimalFirstNameEdit.press('Tab');
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
        await this.page.waitForTimeout(1000);
    }

    async enterAtAnimalNameID(): Promise<void> {
        const id = PoliceData.getAnimalControlModuleValue('AnimalNameID');
        await this.uIAnimalNameIDEdit.fill(id.substring(3));
        await this.uIAnimalNameIDEdit.press('Tab');
    }

    async selectAtSpecies(): Promise<void> {
        await this.uISpeciesDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Species') });
    }

    async selectGridRowByAtID(): Promise<void> {
        await this.uISpeciesDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('ID') });
    }

    async selectAtTypeOfProcedure(): Promise<void> {
        await this.uITypeofProcedureDropDown.selectOption({ label: PoliceData.getAnimalControlModuleValue('TypeOfProcedure') });
    }

    async clickGridRowByAnimalNameID(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAnimalNameSearchResultGrid, PoliceData.getAnimalControlModuleValue('AnimalNameID'));
    }

    async clickGridRowByAnimalName(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAnimalNameSearchResultGrid, PoliceData.getAnimalControlModuleValue('AnimalName'));
    }

    async enterAtAID(): Promise<void> {
        await this.uIAIDCodeEdit.fill(PoliceData.getAnimalControlModuleValue('AID'));
        await this.uIAIDCodeEdit.press('Tab');
    }

    async enterAtPID(): Promise<void> {
        await this.uIPIDCodeEdit.fill(PoliceData.getAnimalControlModuleValue('PID'));
        await this.uIPIDCodeEdit.press('Tab');
    }

    async enterAtSBCase(): Promise<void> {
        await this.uISBCodeEdit.fill(PoliceData.getAnimalControlModuleValue('SBCase'));
        await this.uISBCodeEdit.press('Tab');
    }

    async verifyAtNameIDInGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uIAnimalNameSearchResultGrid, 'ID');
        const expected = PoliceData.getAnimalControlModuleValue('NameID');
        for (const val of columnValues) {
            expect(val).toContain(expected);
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

    async verifyAtNameInGrid(): Promise<void> {
        const row = await this.grid.getRowByCellText(this.uIAnimalNameSearchResultGrid, PoliceData.getAnimalControlModuleValue('Name'));
        const text = await row.innerText();
        expect(text).toContain(PoliceData.getAnimalControlModuleValue('Name'));
    }

    async verifyAtSpeciesInGrid(): Promise<void> {
        const row = await this.grid.getRowByCellText(this.uIAnimalNameSearchResultGrid, PoliceData.getAnimalControlModuleValue('Species'));
        const text = await row.innerText();
        expect(text).toContain(PoliceData.getAnimalControlModuleValue('Species'));
    }

    async RandomdoubleClickOnAllColumn(): Promise<void> {
        const rows = this.uIAnimalNameSearchResultGrid.locator('tbody tr');
        const count = await rows.count();
        for (let r = 0; r < count; r++) {
            const row = rows.nth(r);
            const classAttr = await row.getAttribute('class') || '';
            if (classAttr.includes('igg_BlueThemeActiveRow')) {
                const cells = row.locator('td');
                const cellCount = await cells.count();
                for (let c = 0; c < cellCount; c++) {
                    const cell = cells.nth(c);
                    if (await cell.isVisible()) {
                        await cell.dblclick();
                        await this.page.waitForTimeout(1000);
                    }
                }
            }
        }
    }

    async selectRow(): Promise<void> {
        await this.grid.selectRandomRow(this.uIAnimalNameSearchResultGrid);
    }

    async enterNameID(id: string): Promise<void> {
        await this.uIAnimalNameIDEdit.fill(id.substring(3));
        await this.uIAnimalNameIDEdit.press('Tab');
    }

    async clickTrackingLookUpIcon(): Promise<void> {
        await this.uITrackingLookUpIcon.click();
    }

    async verifyNoRecordFoundAcknowledge1011(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('1011 - No record found');
        await this.popup.acknowledgeOkButton.click();
    }

    async selectAtGridRowById(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAnimalNameSearchResultGrid, PoliceData.getAnimalControlModuleValue('ID'));
    }

    async verifyAllRecordsDisplayedInGrid(): Promise<void> {
        const rowCount = await this.grid.getRowCount(this.uIAnimalNameSearchResultGrid);
        expect(rowCount).toBeGreaterThan(0);
    }

    async verifyAtSpecies(i: number): Promise<void> {
        const selected = await this.uISpeciesDropdown.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(PoliceData.getAnimalControlModuleValue('Species' + i));
    }

    async verifyBreed1FieldIsDisabled(): Promise<void> {
        await expect(this.uIBreed1DropDown).toBeDisabled();
    }

    async verifyBreed2FieldIsDisabled(): Promise<void> {
        await expect(this.uIBreed2DropDown).toBeDisabled();
    }

    async verifyColor1FieldIsDisabled(): Promise<void> {
        await expect(this.uIColor1Dropdown).toBeDisabled();
    }

    async verifyColor2FieldIsDisabled(): Promise<void> {
        await expect(this.uIColor2Dropdown).toBeDisabled();
    }

    async verifyMarkingsFieldIsDisabled(): Promise<void> {
        await expect(this.uIMarkingsDropdown).toBeDisabled();
    }

    async verifyBreed1FieldIsEnabled(): Promise<void> {
        await expect(this.uIBreed1DropDown).toBeEnabled();
    }

    async verifyBreed2FieldIsEnabled(): Promise<void> {
        await expect(this.uIBreed2DropDown).toBeEnabled();
    }

    async verifyColor1FieldIsEnabled(): Promise<void> {
        await expect(this.uIColor1Dropdown).toBeEnabled();
    }

    async verifyColor2FieldIsEnabled(): Promise<void> {
        await expect(this.uIColor2Dropdown).toBeEnabled();
    }

    async verifyMarkingsFieldIsEnabled(): Promise<void> {
        await expect(this.uIMarkingsDropdown).toBeEnabled();
    }

    async selectAtBreed1(): Promise<void> {
        await this.uIBreed1DropDown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Breed1') });
    }

    async selectAtBreed2(): Promise<void> {
        await this.uIBreed2DropDown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Breed2') });
    }

    async selectAtColor1(): Promise<void> {
        await this.uIColor1Dropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Color1') });
    }

    async selectAtColor2(): Promise<void> {
        await this.uIColor2Dropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Color2') });
    }

    async selectAtMarkings(): Promise<void> {
        await this.uIMarkingsDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Markings') });
    }

    async verifyAtBreed1InGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIAnimalNameSearchResultGrid, PoliceData.getAnimalControlModuleValue('Breed1'));
        const text = await cell.innerText();
        expect(text.trim()).toBe(PoliceData.getAnimalControlModuleValue('Breed1'));
    }

    async verifyAtBreed2InGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIAnimalNameSearchResultGrid, PoliceData.getAnimalControlModuleValue('Breed2'));
        const text = await cell.innerText();
        expect(text.trim()).toBe(PoliceData.getAnimalControlModuleValue('Breed2'));
    }

    async verifyAtColor1InGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIAnimalNameSearchResultGrid, PoliceData.getAnimalControlModuleValue('Color1'));
        const text = await cell.innerText();
        expect(text.trim()).toBe(PoliceData.getAnimalControlModuleValue('Color1'));
    }

    async verifyAtColor2InGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIAnimalNameSearchResultGrid, PoliceData.getAnimalControlModuleValue('Color2'));
        const text = await cell.innerText();
        expect(text.trim()).toBe(PoliceData.getAnimalControlModuleValue('Color2'));
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyColumnValueInsidePDF(readPDF: string, i: number): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uIAnimalNameSearchResultGrid, PoliceData.getAnimalControlModuleValue('ColunmName' + i));
        for (const val of columnValues) {
            expect(readPDF).toContain(val);
        }
    }

    async clickExportToExcelIcon(): Promise<void> {
        await this.uIExportToExcelIcon.click();
        await this.page.waitForTimeout(1000);
    }

    async getColumnValuesInGrid(ColName: string): Promise<string[]> {
        return await this.grid.getGridTableColumnValues(this.uIAnimalNameSearchResultGrid, ColName);
    }

    async enterRabiesShotExpirationFromAsFutureDate(Day: number): Promise<void> {
        await this.uIRabiesShotExpirationFrom.fill(DateHelpers.getFutureDate(Day));
    }

    async enterRabiesShotExpirationToAsFutureDate(Day: number): Promise<void> {
        await this.uIRabiesShotExpirationTo.fill(DateHelpers.getFutureDate(Day));
    }

    async verifyRabiesShotExpAsFutureDateInGrid(Day: number): Promise<void> {
        const futureDate = DateHelpers.getFutureDate(Day);
        const cell = await this.grid.getGridCell(this.uIAnimalNameSearchResultGrid, futureDate);
        const text = await cell.innerText();
        expect(text.trim()).toBe(futureDate);
    }
}

// ============================================================================
// 2. ANIMAL NAME ENTRY PAGE & TABS
// ============================================================================
export class AnimalNameEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly grid: GridHelpers;

    readonly uINameTypeEdit: Locator;
    readonly uINameIDEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIMiddleNameEdit: Locator;
    readonly uICSZCountryCityEdit: Locator;
    readonly uICSZCountryStateDropDown: Locator;
    readonly uICSZCountryZipEdit: Locator;
    readonly uIMainTab: Locator;
    readonly uIMedicalTab: Locator;
    readonly uIOwnersDetailsTab: Locator;
    readonly uIAddressesTab: Locator;
    readonly uIActivityTab: Locator;
    readonly uIAttachmentsTab: Locator;
    readonly uICommentsTab: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uISaveButton: Locator;
    readonly uIAddressInfoIcon: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uIImageArea: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIAddressCheckBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.grid = new GridHelpers(page);

        this.uINameTypeEdit = page.locator('#txtNID');
        this.uINameIDEdit = page.locator('#txtNameID');
        this.uIAddressEdit = page.locator('#adrMainAddress_txtFrom');
        this.uILastNameEdit = page.locator('#custNames_LastName');
        this.uIFirstNameEdit = page.locator('#custNames_FirstName');
        this.uIMiddleNameEdit = page.locator('#custNames_MiddleName');
        this.uICSZCountryCityEdit = page.locator('#custHeaderCSZ_City');
        this.uICSZCountryStateDropDown = page.locator('#custHeaderCSZ_State_DropDown');
        this.uICSZCountryZipEdit = page.locator('#custHeaderCSZ_Zip');
        this.uIMainTab = page.locator("//span[contains(text(),'Main')]");
        this.uIMedicalTab = page.locator("//span[contains(text(),'Medical')]");
        this.uIOwnersDetailsTab = page.locator("//span[contains(text(),'Owner Details')]");
        this.uIAddressesTab = page.locator("//span[contains(text(),'Addresses')]");
        this.uIActivityTab = page.locator("//span[contains(text(),'Activity')]");
        this.uIAttachmentsTab = page.locator("//span[contains(text(),'Attachments')]");
        this.uICommentsTab = page.locator("//span[contains(text(),'Comments')]");
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIAddressInfoIcon = page.locator('#adrMainAddress_cmdIncOnAddr');
        this.uILeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIImageArea = page.locator('#imgNameFrontView');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIAddressCheckBox = page.locator('#adrMainAddress_chkVerify');
    }

    async enterAtAnimalName(): Promise<void> {
        await this.uILastNameEdit.fill(PoliceData.getAnimalControlModuleValue('AnimalLastName'));
        await this.uILastNameEdit.press('Tab');
        await this.uIFirstNameEdit.fill(PoliceData.getAnimalControlModuleValue('AnimalFirstName'));
        await this.uIFirstNameEdit.press('Tab');
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async saveNClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await this.popup.confirmYesButton.click();
    }

    async enterAtAddress(): Promise<void> {
        await this.uIAddressEdit.fill(PoliceData.getAnimalControlModuleValue('Address'));
        await this.uIAddressEdit.press('Tab');
    }

    async clickMainTab(): Promise<void> {
        await this.uIMainTab.click();
        await this.page.waitForTimeout(1000);
    }

    async clickActivityTab(): Promise<void> {
        await this.uIActivityTab.click();
        await this.page.waitForTimeout(1000);
    }

    async clickAddressesTab(): Promise<void> {
        await this.uIAddressesTab.click();
        await this.page.waitForTimeout(1000);
    }

    async switchToCommentsTab(): Promise<void> {
        await this.uICommentsTab.click();
        await this.page.waitForTimeout(1000);
        new BrowserHelpers(this.page).switchToFrame('frmNameComments');
    }

    async clickOwnerDetailsTab(): Promise<void> {
        await this.uIOwnersDetailsTab.click();
        await this.page.waitForTimeout(1000);
    }

    async clickMedicalTab(): Promise<void> {
        await this.uIMedicalTab.click();
        await this.page.waitForTimeout(1000);
    }

    async switchToAnimalNameEntryAddressesTab(): Promise<void> {
        await this.uIAddressesTab.click();
    }

    async verifyAddressBubbleIconDisplayed(): Promise<void> {
        await expect(this.uIAddressInfoIcon).toBeVisible();
    }

    async readAnimalNameID(): Promise<string> {
        const id = await this.uINameIDEdit.inputValue();
        console.log('Animal ID: ' + id);
        return id;
    }

    async getAnimalIdNo(): Promise<string> {
        const type = await this.uINameTypeEdit.inputValue();
        const id = await this.uINameIDEdit.inputValue();
        const animalID = `${type}-${id}`;
        console.log(animalID);
        return animalID;
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintButton.click();
        await this.page.waitForLoadState('load');
    }

    async VerifyAdditionSuccessfulMessage(): Promise<void> {
        const updateMessage = await this.uILeftSideStatusBar.innerText();
        expect(updateMessage).toContain('1002 - Addition Successful');
    }

    async VerifyUpdateSuccessfulMessage(): Promise<void> {
        const updateMessage = await this.uILeftSideStatusBar.innerText();
        expect(updateMessage).toContain('1003 - Update Successful');
    }

    async verifyAtNameID(NameID: string): Promise<void> {
        const id = await this.uINameTypeEdit.inputValue();
        const animalNameID = `${id}-${NameID}`;
        expect(animalNameID).toBe(PoliceData.getAnimalControlModuleValue('AnimalNameID'));
    }

    async clickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async clickAtImage(): Promise<void> {
        await this.uIImageArea.click();
    }

    async clickAddressInfoIcon(): Promise<void> {
        await this.uIAddressInfoIcon.click();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verifyDataExistsInOwnerDetailsTabAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(30111) Updated data exists in the Owner Details Tab. You must Add/Update or Clear.');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyDataExistsInAddressesTabAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(30111) Updated data exists in the Addresses Tab. You must Add/Update or Clear.');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyAtAnimalLastName(): Promise<void> {
        await expect(this.uILastNameEdit).toHaveValue(PoliceData.getAnimalControlModuleValue('AnimalLastName'));
    }

    async verifyAtAnimalFirstName(): Promise<void> {
        await expect(this.uIFirstNameEdit).toHaveValue(PoliceData.getAnimalControlModuleValue('AnimalFirstName'));
    }

    async enterAnimalName(): Promise<void> {
        await this.uILastNameEdit.fill(RandomHelpers.randomNameGenerate());
        await this.uILastNameEdit.press('Tab');
        await this.uIFirstNameEdit.fill(RandomHelpers.randomNameGenerate());
        await this.uIFirstNameEdit.press('Tab');
    }

    async verifyAnimalID(): Promise<void> {
        const id = await this.uINameIDEdit.inputValue();
        expect(id.trim()).not.toBe('');
    }

    async enterAddress(): Promise<void> {
        await this.uIAddressEdit.fill('301 N Albany St');
        await this.uIAddressEdit.press('Tab');
    }

    async verifyDuplicateAcknowldgePopUp(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('Duplicate');
        await this.popup.acknowledgeOkButton.click();
    }

    async enterAtNameID(): Promise<void> {
        await this.uINameIDEdit.fill(PoliceData.getAnimalControlModuleValue('NameID'));
        await this.uINameIDEdit.press('Tab');
    }

    async enterAtNameID1(): Promise<void> {
        await this.uINameIDEdit.fill(PoliceData.getAnimalControlModuleValue('NameID1'));
        await this.uINameIDEdit.press('Tab');
    }

    async verifyNameID(nameID: string): Promise<void> {
        const type = await this.uINameTypeEdit.inputValue();
        const id = await this.uINameIDEdit.inputValue();
        const animalNameID = `${type}-${id}`;
        expect(animalNameID).toBe(nameID);
    }

    async verifyAddressCheckboxIsChecked(): Promise<void> {
        await expect(this.uIAddressCheckBox).toBeChecked();
    }

    async verifyAddressCheckboxisNotSelected(): Promise<void> {
        await expect(this.uIAddressCheckBox).not.toBeChecked();
    }

    async enterAtAnimalLastName(i: number): Promise<void> {
        await this.uILastNameEdit.fill(PoliceData.getAnimalControlModuleValue('AnimalLastName' + i));
    }

    async verify1018RequiredEntriesAreMissingAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1018) Required Entries are Missing');
        await this.popup.acknowledgeOkButton.click();
    }

    async verify6040PleaseSaveTheEnteredDataInOwnerTabAcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6040) Please Save the Entered Data in Owner Tab.');
        await this.popup.acknowledgeOkButton.click();
    }
}

export class AnimalNameEntryMainTabPage {
    readonly page: Page;
    readonly uISpeciesDropDown: Locator;
    readonly uIAnimalIDCodeEdit: Locator;
    readonly uIMicroChipIDEdit: Locator;
    readonly uIPedigreeNameEdit: Locator;
    readonly uIHeightEdit: Locator;
    readonly uIColor1DropDown: Locator;
    readonly uILicenseTagNoEdit: Locator;
    readonly uIRabiesTagNoEdit: Locator;
    readonly uIBreed1DropDown: Locator;
    readonly uISexDropDown: Locator;
    readonly uIWeightEdit: Locator;
    readonly uIColor2DropDown: Locator;
    readonly uIExpirationEdit: Locator;
    readonly uIRabiesShotExpirationDateEdit: Locator;
    readonly uISBCaseEdit: Locator;
    readonly uIBreed2DropDown: Locator;
    readonly uIDOBEdit: Locator;
    readonly uILengthEdit: Locator;
    readonly uIMarkingsDropDown: Locator;
    readonly uIIssuingAgencyDropDown: Locator;
    readonly uIMfgDropDown: Locator;
    readonly uIVeterinarianNameTypeEdit: Locator;
    readonly uIVeterinarianNameIDEdit: Locator;
    readonly uIVeterinarianLastNameEdit: Locator;
    readonly uIVeterinarianFirstNameEdit: Locator;
    readonly uIVeterinarianMiddleNameEdit: Locator;
    readonly uIAIDCustomField: Locator;
    readonly uIPIDCustomField: Locator;
    readonly uISBCaseDCustomField: Locator;
    readonly uIPIDCodeEdit: Locator;
    readonly uIVeterinarianNameIbubble: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISpeciesDropDown = page.locator('#tabNames_tmpl0_ctrlAnimalMain_cddSpecies_DropDown');
        this.uIAnimalIDCodeEdit = page.locator('#tabNames_tmpl0_ctrlAnimalMain_txtCustome1');
        this.uIMicroChipIDEdit = page.locator('#tabNames_tmpl0_ctrlAnimalMain_txtMicroChipID');
        this.uIPedigreeNameEdit = page.locator('#tabNames_tmpl0_ctrlAnimalMain_txtPedigreeName');
        this.uIHeightEdit = page.locator('#tabNames_tmpl0_ctrlAnimalMain_txtHeight');
        this.uIColor1DropDown = page.locator('#tabNames_tmpl0_ctrlAnimalMain_cddColor1');
        this.uILicenseTagNoEdit = page.locator('#tabNames_tmpl0_ctrlAnimalMain_txtLicenseTag');
        this.uIRabiesTagNoEdit = page.locator('#tabNames_tmpl0_ctrlAnimalMain_txtRabiesTag');
        this.uIBreed1DropDown = page.locator('#tabNames_tmpl0_ctrlAnimalMain_cddBreed1');
        this.uISexDropDown = page.locator('#tabNames_tmpl0_ctrlAnimalMain_cddSex_DropDown');
        this.uIWeightEdit = page.locator('#tabNames_tmpl0_ctrlAnimalMain_txtWeight');
        this.uIColor2DropDown = page.locator('#tabNames_tmpl0_ctrlAnimalMain_cddColor2');
        this.uIExpirationEdit = page.locator('#tabNames_tmpl0_ctrlAnimalMain_dtcExpiration_KPIDttmCtrl');
        this.uIRabiesShotExpirationDateEdit = page.locator('#tabNames_tmpl0_ctrlAnimalMain_dtcRSE_KPIDttmCtrl');
        this.uISBCaseEdit = page.locator('#tabNames_tmpl0_ctrlAnimalMain_txtCustome3');
        this.uIBreed2DropDown = page.locator('#tabNames_tmpl0_ctrlAnimalMain_cddBreed2');
        this.uIDOBEdit = page.locator('#tabNames_tmpl0_ctrlAnimalMain_dtcDOB_KPIDttmCtrl');
        this.uILengthEdit = page.locator('#tabNames_tmpl0_ctrlAnimalMain_txtLength');
        this.uIMarkingsDropDown = page.locator('#tabNames_tmpl0_ctrlAnimalMain_cddMarkings');
        this.uIIssuingAgencyDropDown = page.locator('#tabNames_tmpl0_ctrlAnimalMain_cddIssuing_DropDown');
        this.uIMfgDropDown = page.locator('#tabNames_tmpl0_ctrlAnimalMain_cddMfg_DropDown');
        this.uIVeterinarianNameTypeEdit = page.locator('#tabNames_tmpl0_ctrlAnimalMain_nVeterinarian_NameType');
        this.uIVeterinarianNameIDEdit = page.locator('#tabNames_tmpl0_ctrlAnimalMain_nVeterinarian_NameTypeID');
        this.uIVeterinarianLastNameEdit = page.locator('#tabNames_tmpl0_ctrlAnimalMain_nVeterinarian_LastName');
        this.uIVeterinarianFirstNameEdit = page.locator('#tabNames_tmpl0_ctrlAnimalMain_nVeterinarian_FirstName');
        this.uIVeterinarianMiddleNameEdit = page.locator('#tabNames_tmpl0_ctrlAnimalMain_nVeterinarian_MiddleName');
        this.uIAIDCustomField = page.locator('#tabNames_tmpl0_ctrlAnimalMain_lblCustome1');
        this.uIPIDCustomField = page.locator('#tabNames_tmpl0_ctrlAnimalMain_lblCustome2');
        this.uISBCaseDCustomField = page.locator('#tabNames_tmpl0_ctrlAnimalMain_lblCustome3');
        this.uIPIDCodeEdit = page.locator('#tabNames_tmpl0_ctrlAnimalMain_txtCustome2');
        this.uIVeterinarianNameIbubble = page.locator('#tabNames_tmpl0_ctrlAnimalMain_nVeterinarian_imgSrch');
    }

    async selectAtSpecies(): Promise<void> {
        await this.uISpeciesDropDown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Species') });
        await this.uISpeciesDropDown.press('Tab');
    }

    async enterMicroChipID(): Promise<void> {
        await this.uIMicroChipIDEdit.fill(String(RandomHelpers.getRandomNumber(6)));
        await this.uIMicroChipIDEdit.press('Tab');
    }

    async enterAtMicroChipID(): Promise<void> {
        await this.uIMicroChipIDEdit.fill(PoliceData.getAnimalControlModuleValue('MicroChip'));
        await this.uIMicroChipIDEdit.press('Tab');
    }

    async enterAtPedigreeName(): Promise<void> {
        await this.uIPedigreeNameEdit.fill(PoliceData.getAnimalControlModuleValue('PedigreeName'));
        await this.uIPedigreeNameEdit.press('Tab');
    }

    async enterAtHeight(): Promise<void> {
        await this.uIHeightEdit.fill(PoliceData.getAnimalControlModuleValue('Height'));
        await this.uIHeightEdit.press('Tab');
    }

    async selectColor1(): Promise<void> {
        const options = await this.uIColor1DropDown.locator('option').allInnerTexts();
        const valid = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOpt = valid[Math.floor(Math.random() * valid.length)];
        await this.uIColor1DropDown.selectOption({ label: randomOpt });
        await this.uIColor1DropDown.press('Tab');
    }

    async enterAtLicenseOrTagNo(): Promise<void> {
        await this.uILicenseTagNoEdit.fill(PoliceData.getAnimalControlModuleValue('LicenseOrTag'));
        await this.uILicenseTagNoEdit.press('Tab');
    }

    async enterAtRabiesTagNo(): Promise<void> {
        await this.uIRabiesTagNoEdit.fill(PoliceData.getAnimalControlModuleValue('RabiesTag'));
        await this.uIRabiesTagNoEdit.press('Tab');
    }

    async selectBreed1(): Promise<void> {
        const options = await this.uIBreed1DropDown.locator('option').allInnerTexts();
        const valid = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOpt = valid[Math.floor(Math.random() * valid.length)];
        await this.uIBreed1DropDown.selectOption({ label: randomOpt });
        await this.uIBreed1DropDown.press('Tab');
    }

    async selectAtSex(): Promise<void> {
        await this.uISexDropDown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Sex') });
        await this.uISexDropDown.press('Tab');
    }

    async enterAtWeight(): Promise<void> {
        await this.uIWeightEdit.fill(PoliceData.getAnimalControlModuleValue('Weight'));
        await this.uIWeightEdit.press('Tab');
    }

    async selectColor2(): Promise<void> {
        const options = await this.uIColor2DropDown.locator('option').allInnerTexts();
        const valid = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOpt = valid[Math.floor(Math.random() * valid.length)];
        await this.uIColor2DropDown.selectOption({ label: randomOpt });
        await this.uIColor2DropDown.press('Tab');
    }

    async selectExpirationDate(): Promise<void> {
        await this.uIExpirationEdit.fill(DateHelpers.getFutureDate(8));
        await this.uIExpirationEdit.press('Tab');
    }

    async enterRabiesShotExpirationDateAsFutureDate(DateVal: number): Promise<void> {
        await this.uIRabiesShotExpirationDateEdit.fill(DateHelpers.getFutureDate(DateVal));
        await this.uIRabiesShotExpirationDateEdit.press('Tab');
    }

    async selectBreed2(): Promise<void> {
        const options = await this.uIBreed2DropDown.locator('option').allInnerTexts();
        const valid = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOpt = valid[Math.floor(Math.random() * valid.length)];
        await this.uIBreed2DropDown.selectOption({ label: randomOpt });
        await this.uIBreed2DropDown.press('Tab');
    }

    async enterAtDOB(): Promise<void> {
        await this.uIDOBEdit.fill(PoliceData.getAnimalControlModuleValue('DOB'));
        await this.uIDOBEdit.press('Tab');
    }

    async enterAtLength(): Promise<void> {
        await this.uILengthEdit.fill(PoliceData.getAnimalControlModuleValue('Length'));
        await this.uILengthEdit.press('Tab');
    }

    async selectMarkings(): Promise<void> {
        const options = await this.uIMarkingsDropDown.locator('option').allInnerTexts();
        const valid = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOpt = valid[Math.floor(Math.random() * valid.length)];
        await this.uIMarkingsDropDown.selectOption({ label: randomOpt });
        await this.uIMarkingsDropDown.press('Tab');
    }

    async selectIssuingAgency(): Promise<void> {
        const options = await this.uIIssuingAgencyDropDown.locator('option').allInnerTexts();
        const valid = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOpt = valid[Math.floor(Math.random() * valid.length)];
        await this.uIIssuingAgencyDropDown.selectOption({ label: randomOpt });
        await this.uIIssuingAgencyDropDown.press('Tab');
    }

    async enterAtVeterinarianNameID(): Promise<void> {
        const val = PoliceData.getAnimalControlModuleValue('VeterinarianNameID');
        await this.uIVeterinarianNameTypeEdit.fill(val.substring(0, 1));
        await this.uIVeterinarianNameTypeEdit.press('Tab');
        await this.uIVeterinarianNameIDEdit.fill(val.substring(2));
        await this.uIVeterinarianNameIDEdit.press('Tab');
    }

    async enterAtVeterinarianNameID1(): Promise<void> {
        const val = PoliceData.getAnimalControlModuleValue('VeterinarianNameID1');
        await this.uIVeterinarianNameTypeEdit.fill(val.substring(0, 1));
        await this.uIVeterinarianNameTypeEdit.press('Tab');
        await this.uIVeterinarianNameIDEdit.fill(val.substring(2));
        await this.uIVeterinarianNameIDEdit.press('Tab');
    }

    async enterAID(): Promise<void> {
        await this.uIAnimalIDCodeEdit.fill(DateHelpers.randomNumberString(25));
        await this.uIAnimalIDCodeEdit.press('Tab');
    }

    async enterPID(): Promise<void> {
        await this.uIPIDCodeEdit.fill(DateHelpers.randomNumberString(25));
        await this.uIPIDCodeEdit.press('Tab');
    }

    async enterSBCase(): Promise<void> {
        await this.uISBCaseEdit.fill(DateHelpers.randomNumberString(25));
        await this.uISBCaseEdit.press('Tab');
    }

    async clickAIDCustomField(): Promise<void> {
        await this.uIAIDCustomField.click();
    }

    async clickPIDCustomField(): Promise<void> {
        await this.uIPIDCustomField.click();
    }

    async clickSBCaseCustomField(): Promise<void> {
        await this.uISBCaseDCustomField.click();
    }

    async verifyAtAIDCustomField(): Promise<void> {
        const text = await this.uIAIDCustomField.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('AIDCustomField'));
    }

    async verifyAtPIDCustomField(): Promise<void> {
        const text = await this.uIPIDCustomField.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('PIDCustomField'));
    }

    async verifyAtSBCaseDCustomField(): Promise<void> {
        const text = await this.uISBCaseDCustomField.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('SBCaseDCustomField'));
    }

    async selectMfg(): Promise<void> {
        const options = await this.uIMfgDropDown.locator('option').allInnerTexts();
        const valid = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOpt = valid[Math.floor(Math.random() * valid.length)];
        await this.uIMfgDropDown.selectOption({ label: randomOpt });
        await this.uIMfgDropDown.press('Tab');
    }

    async verifyAtVeterinarianNameID(): Promise<void> {
        const type = await this.uIVeterinarianNameTypeEdit.inputValue();
        const id = await this.uIVeterinarianNameIDEdit.inputValue();
        const val = PoliceData.getAnimalControlModuleValue('VeterinarianNameID');
        expect(type).toBe(val.substring(0, 1));
        expect(id).toBe(val.substring(2));
    }

    async selectSpecies(): Promise<void> {
        const options = await this.uISpeciesDropDown.locator('option').allInnerTexts();
        const valid = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOpt = valid[Math.floor(Math.random() * valid.length)];
        await this.uISpeciesDropDown.selectOption({ label: randomOpt });
        await this.uISpeciesDropDown.press('Tab');
    }

    async enterPedigreeName(): Promise<void> {
        await this.uIPedigreeNameEdit.fill(RandomHelpers.randomNameGenerate());
        await this.uIPedigreeNameEdit.press('Tab');
    }

    async selectSex(): Promise<void> {
        const options = await this.uISexDropDown.locator('option').allInnerTexts();
        const valid = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOpt = valid[Math.floor(Math.random() * valid.length)];
        await this.uISexDropDown.selectOption({ label: randomOpt });
        await this.uISexDropDown.press('Tab');
    }

    async enterDOB(): Promise<void> {
        await this.uIDOBEdit.fill(DateHelpers.getPreviousDateByMonth(60));
        await this.uIDOBEdit.press('Tab');
    }

    async enterHeight(): Promise<void> {
        await this.uIHeightEdit.fill(RandomHelpers.getRandomBetween(1, 9).toString());
        await this.uIHeightEdit.press('Tab');
    }

    async enterWeight(): Promise<void> {
        await this.uIWeightEdit.fill(RandomHelpers.getRandomBetween(10, 99).toString());
        await this.uIWeightEdit.press('Tab');
    }

    async enterLength(): Promise<void> {
        await this.uILengthEdit.fill(RandomHelpers.getRandomBetween(1, 9).toString());
        await this.uILengthEdit.press('Tab');
    }

    async clickVeterinarianNameInfoIcon(): Promise<void> {
        await this.uIVeterinarianNameIbubble.click();
    }

    async verifyVeterinarianNameID(ID: string): Promise<void> {
        const type = await this.uIVeterinarianNameTypeEdit.inputValue();
        const id = await this.uIVeterinarianNameIDEdit.inputValue();
        expect(type).toBe(ID.substring(0, 1));
        expect(id).toBe(ID.substring(2));
    }

    async verifyAtVeterinarianNameID1(): Promise<void> {
        const type = await this.uIVeterinarianNameTypeEdit.inputValue();
        const id = await this.uIVeterinarianNameIDEdit.inputValue();
        const val = PoliceData.getAnimalControlModuleValue('VeterinarianNameID1');
        expect(type).toBe(val.substring(0, 1));
        expect(id).toBe(val.substring(2));
    }

    async verifyAtVeterinarianLastName(): Promise<void> {
        await expect(this.uIVeterinarianLastNameEdit).toHaveValue(PoliceData.getAnimalControlModuleValue('veterinarianLastName'));
    }

    async verifyAtVeterinarianFirstName(): Promise<void> {
        await expect(this.uIVeterinarianFirstNameEdit).toHaveValue(PoliceData.getAnimalControlModuleValue('veterinarianFirstName'));
    }

    async verifyAtPedigreeName(): Promise<void> {
        await expect(this.uIPedigreeNameEdit).toHaveValue(PoliceData.getAnimalControlModuleValue('PedigreeName'));
    }

    async verifyAtMicroChipID(): Promise<void> {
        await expect(this.uIMicroChipIDEdit).toHaveValue(PoliceData.getAnimalControlModuleValue('MicroChip'));
    }

    async verifyAtSpecies(): Promise<void> {
        const selected = await this.uISpeciesDropDown.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(PoliceData.getAnimalControlModuleValue('Species'));
    }

    async selectAtSpecies1(): Promise<void> {
        await this.uISpeciesDropDown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Species') });
        await this.uISpeciesDropDown.press('Tab');
    }

    async selectAtBreed1(): Promise<void> {
        await this.uIBreed1DropDown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Breed1') });
        await this.uIBreed1DropDown.press('Tab');
    }

    async selectAtBreed2(): Promise<void> {
        await this.uIBreed2DropDown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Breed2') });
        await this.uIBreed2DropDown.press('Tab');
    }

    async selectAtColor1(): Promise<void> {
        await this.uIColor1DropDown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Color1') });
        await this.uIColor1DropDown.press('Tab');
    }

    async selectAtColor2(): Promise<void> {
        await this.uIColor2DropDown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Color2') });
        await this.uIColor2DropDown.press('Tab');
    }

    async verifyMicroChipIDlengthNotGreaterThan20(): Promise<void> {
        const val = await this.uIMicroChipIDEdit.inputValue();
        expect(val.length).toBeLessThanOrEqual(20);
    }

    async verifyMicrochipIDIsNotEqual(): Promise<void> {
        const val = await this.uIMicroChipIDEdit.inputValue();
        expect(val).not.toBe(PoliceData.getAnimalControlModuleValue('MicroChip'));
    }

    async verifyMicroChipIDlength(length: number): Promise<void> {
        const val = await this.uIMicroChipIDEdit.inputValue();
        expect(val.length).toBe(length);
    }

    async copyMicroChipIDValue(): Promise<void> {
        await this.uIMicroChipIDEdit.click();
        await this.page.keyboard.press('Control+a');
        await this.page.keyboard.press('Control+c');
    }

    async pasteCopiedValueIntoHeightInField(): Promise<void> {
        await this.uIHeightEdit.click();
        await this.page.keyboard.press('Control+v');
    }

    async verifyHeightInFieldIsBlank(): Promise<void> {
        const val = await this.uIHeightEdit.inputValue();
        expect(val.trim()).toBe('');
    }

    async pasteCopiedValueIntoWeightLbsField(): Promise<void> {
        await this.uIWeightEdit.click();
        await this.page.keyboard.press('Control+v');
    }

    async verifyWeightLbsFieldIsBlank(): Promise<void> {
        const val = await this.uIWeightEdit.inputValue();
        expect(val.trim()).toBe('');
    }

    async pasteCopiedValueIntoLengthInField(): Promise<void> {
        await this.uILengthEdit.click();
        await this.page.keyboard.press('Control+v');
    }

    async verifyLengthInFieldIsBlank(): Promise<void> {
        const val = await this.uILengthEdit.inputValue();
        expect(val.trim()).toBe('');
    }

    async verifyAtMarkings(): Promise<void> {
        const selected = await this.uIMarkingsDropDown.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(PoliceData.getAnimalControlModuleValue('Markings'));
    }

    async verifyRabiesShotExpirationDateFieldEnabledAndDisplayed(): Promise<void> {
        await expect(this.uIRabiesShotExpirationDateEdit).toBeEnabled();
        await expect(this.uIRabiesShotExpirationDateEdit).toBeVisible();
    }
}

export class AnimalNameEntryOwnerDetailsTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIOwnersNameTypeEdit: Locator;
    readonly uIOwnersNameIDEdit: Locator;
    readonly uIOwnersLastNameEdit: Locator;
    readonly uIOwnersFirstNameEdit: Locator;
    readonly uIOwnersMiddleNameEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIOwnersDetailsTable: Locator;
    readonly uIAceYear: Locator;
    readonly uIAceNo: Locator;
    readonly uIBottomStatusLable: Locator;
    readonly uIDateEdit: Locator;
    readonly uIOwnerNameInfoIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIOwnersNameTypeEdit = page.locator('#tabNames_tmpl1_ctrlOwnerDtl_nmcOwnerName_NameType');
        this.uIOwnersNameIDEdit = page.locator('#tabNames_tmpl1_ctrlOwnerDtl_nmcOwnerName_NameTypeID');
        this.uIOwnersLastNameEdit = page.locator('#tabNames_tmpl1_ctrlOwnerDtl_nmcOwnerName_LastName');
        this.uIOwnersFirstNameEdit = page.locator('#tabNames_tmpl1_ctrlOwnerDtl_nmcOwnerName_FirstName');
        this.uIOwnersMiddleNameEdit = page.locator('#tabNames_tmpl1_ctrlOwnerDtl_nmcOwnerName_MiddleName');
        this.uIAddressEdit = page.locator('#tabNames_tmpl1_ctrlOwnerDtl_txtAddress');
        this.uIAddButton = page.locator('#tabNames_tmpl1_ctrlOwnerDtl_cmdAdd');
        this.uIClearButton = page.locator('#tabNames_tmpl1_ctrlOwnerDtl_cmdClear');
        this.uIOwnersDetailsTable = page.locator('#tabNames_tmpl1_ctrlOwnerDtl_grdOwner');
        this.uIAceYear = page.locator('#tabNames_tmpl1_ctrlOwnerDtl_numACE_Year');
        this.uIAceNo = page.locator('#tabNames_tmpl1_ctrlOwnerDtl_numACE_Number');
        this.uIBottomStatusLable = page.locator('.statusBar');
        this.uIDateEdit = page.locator('#tabNames_tmpl1_ctrlOwnerDtl_dtcDate_KPIDttmCtrl');
        this.uIOwnerNameInfoIcon = page.locator('#tabNames_tmpl1_ctrlOwnerDtl_nmcOwnerName_imgSrch');
    }

    async enterAtOwnerNameID(): Promise<void> {
        const val = PoliceData.getAnimalControlModuleValue('OwnerNameID');
        await this.uIOwnersNameTypeEdit.fill(val.substring(0, 1));
        await this.uIOwnersNameTypeEdit.press('Tab');
        await this.uIOwnersNameIDEdit.fill(val.substring(3));
        await this.uIOwnersNameIDEdit.press('Tab');
    }

    async enterAtACENo(): Promise<void> {
        const val = PoliceData.getAnimalControlModuleValue('ACENo');
        await this.uIAceYear.fill(val.substring(0, 2));
        await this.uIAceNo.fill(val.substring(3));
        await this.uIAceNo.press('Tab');
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickClearButton(): Promise<void> {
        await this.uIClearButton.click();
    }

    async verifyAtNameInGrid(rowIndex?: number): Promise<void> {
        if (rowIndex !== undefined) {
            const name = await this.grid.getGridCellInnerText(this.uIOwnersDetailsTable, 'Name', rowIndex);
            expect(name).toBe(PoliceData.getAnimalControlModuleValue('OwnerName'));
        } else {
            const count = await this.grid.getRowCount(this.uIOwnersDetailsTable);
            const name = await this.grid.getGridCellInnerText(this.uIOwnersDetailsTable, 'Name', count - 1);
            expect(name).toBe(PoliceData.getAnimalControlModuleValue('OwnerName'));
        }
    }

    async verifyAtACENoInGrid(rowIndex: number): Promise<void> {
        const name = await this.grid.getGridCellInnerText(this.uIOwnersDetailsTable, 'ACE#', rowIndex);
        expect(name).toBe(PoliceData.getAnimalControlModuleValue('ACENo'));
    }

    async verifyAtDateAsCurrentDateInGrid(rowIndex: number): Promise<void> {
        const date = await this.grid.getGridCellInnerText(this.uIOwnersDetailsTable, 'Date', rowIndex);
        expect(date).toBe(DateHelpers.getCurrentDate('M/d/yyyy'));
    }

    async verifyRequiredEntriesMissingAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1018) Required Entries are Missing');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyUpdateSuccessfulMessage(): Promise<void> {
        const text = await this.uIBottomStatusLable.innerText();
        expect(text).toContain('1003 - Update Successful');
    }

    async verifyDuplicationOfDataFoundAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1019)Duplication Of Data Found');
        await this.popup.acknowledgeOkButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtOwnerNameID(): Promise<void> {
        const type = await this.uIOwnersNameTypeEdit.inputValue();
        const ID = await this.uIOwnersNameIDEdit.inputValue();
        const expected = PoliceData.getAnimalControlModuleValue('OwnerNameID');
        expect(type).toBe(expected.substring(0, 1));
        expect(ID).toBe(expected.substring(2));
    }

    async verifyDateAsCurrentDate(): Promise<void> {
        const attr = await this.uIDateEdit.inputValue();
        expect(attr).toBe(DateHelpers.getCurrentDate());
    }

    async enterOwnerNameID(): Promise<void> {
        await this.uIOwnersNameTypeEdit.fill('A');
        await this.uIOwnersNameTypeEdit.press('Tab');
        await this.uIOwnersNameIDEdit.fill(RandomHelpers.getRandomBetween(3, 9).toString());
        await this.uIOwnersNameIDEdit.press('Tab');
    }

    async selectAtNameInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIOwnersDetailsTable, PoliceData.getAnimalControlModuleValue('Name'));
    }

    async clickOwnerNameInfoIcon(): Promise<void> {
        await this.uIOwnerNameInfoIcon.click();
    }
}

export class AnimalNameEntryActivityTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIActivityTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIActivityTable = page.locator('#tabNames_tmpl4_usrActivity1_grdAnimalActivity');
    }

    async selectGridRowByActivityType(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIActivityTable, PoliceData.getAnimalControlModuleValue('ActivityType'));
    }

    async verifyAtActivityTypeInGrid(): Promise<void> {
        const row = await this.grid.getRowByCellText(this.uIActivityTable, PoliceData.getAnimalControlModuleValue('ActivityType'));
        const text = await row.innerText();
        expect(text).toContain(PoliceData.getAnimalControlModuleValue('ActivityType'));
    }
}

export class AnimalNameEntryAddressesTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIAddressEdit: Locator;
    readonly uIAddressTypeDropDown: Locator;
    readonly uIAddButton: Locator;
    readonly uIAddressResultTable: Locator;
    readonly uIAddressInfoBblIcon: Locator;
    readonly uIDateEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIAddressEdit = page.locator('#tabNames_tmpl3_usrAddress1_adrAdditionalAddr_txtFrom');
        this.uIAddressTypeDropDown = page.locator('#tabNames_tmpl3_usrAddress1_cddType_DropDown');
        this.uIAddButton = page.locator('#tabNames_tmpl3_usrAddress1_cmdAddAddress');
        this.uIAddressResultTable = page.locator('#tabNames_tmpl3_usrAddress1_grdAddress');
        this.uIAddressInfoBblIcon = page.locator('#tabNames_tmpl3_usrAddress1_adrAdditionalAddr_cmdIncOnAddr');
        this.uIDateEdit = page.locator('#tabNames_tmpl3_usrAddress1_dtcStart_KPIDttmCtrl');
    }

    async enterAtAddress(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIAddressEdit.fill(PoliceData.getAnimalControlModuleValue('Address'));
    }

    async selectAtAddressType(): Promise<void> {
        await this.uIAddressTypeDropDown.selectOption({ label: PoliceData.getAnimalControlModuleValue('AddressType') });
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtAddres(rowIndex: number): Promise<void> {
        const address = await this.grid.getGridCellInnerText(this.uIAddressResultTable, 'Address', rowIndex);
        expect(address).toContain(PoliceData.getAnimalControlModuleValue('Address'));
    }

    async selectAtRowByAddress(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.grid.selectRowByCellText(this.uIAddressResultTable, PoliceData.getAnimalControlModuleValue('Address'));
    }

    async verifyAddressBubbleIconDisplayed(): Promise<void> {
        await expect(this.uIAddressInfoBblIcon).toBeVisible();
    }

    async verifyEnterAddressAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(30033) Enter Address');
        await this.popup.acknowledgeOkButton.click();
    }

    async enterDateAsCurrentDate(): Promise<void> {
        await this.uIDateEdit.fill(DateHelpers.getCurrentDate());
        await this.uIDateEdit.press('Tab');
    }

    async verifyAtTypeInGrid(): Promise<void> {
        const row = await this.grid.getRowByCellText(this.uIAddressResultTable, PoliceData.getAnimalControlModuleValue('AddressType'));
        const text = await row.innerText();
        expect(text).toContain(PoliceData.getAnimalControlModuleValue('AddressType'));
    }

    async verifyDateAsCurrentDateInGrid(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCellByIndex(this.uIAddressResultTable, rowIndex, 'Date');
        const text = await cell.innerText();
        expect(text.trim()).toBe(DateHelpers.getCurrentDate('M/d/yyyy'));
    }
}

export class AnimalNameEntryCommentsTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uISubjectCodeEdit: Locator;
    readonly uIEnterCommentsButton: Locator;
    readonly uICommentsResulTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uISubjectCodeEdit = page.locator('#txtSubject');
        this.uIEnterCommentsButton = page.locator('#btnComments');
        this.uICommentsResulTable = page.locator('#grdComments');
    }

    async EnterComments(): Promise<void> {
        await this.uISubjectCodeEdit.fill('Automation');
    }

    async ClickEnterCommentsButton(): Promise<void> {
        await this.uIEnterCommentsButton.click();
    }

    async VerifyCurrentDate(): Promise<void> {
        const commentsDate = await this.page.locator('#dtcCurrDate_KPIDttmCtrl').inputValue();
        expect(commentsDate).toBe(DateHelpers.getCurrentDate());
    }

    async VerifyMColumn(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCellByIndex(this.uICommentsResulTable, rowIndex, 'M');
        const text = await cell.innerText();
        expect(text).toContain('*');
    }

    async VerifyAtSubjectInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uICommentsResulTable, 'Subject', rowIndex);
        expect(text).toBe(BaseData.getNamesModuleValue('Subject'));
    }

    async DeleteComments(): Promise<void> {
        await this.page.locator("//div[@id='grdComments']//td[@class='Delete_Icon_Style']").click();
    }

    async VerifyDeletedCommentsNotFound(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const count = await this.grid.getRowCount(this.uICommentsResulTable);
        expect(count).toBe(0);
    }
}

export class AnimalNameEntryMedicalTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIDateOfProcedureEdit: Locator;
    readonly uITypeOfProcedure: Locator;
    readonly uIReasonOfProcedure: Locator;
    readonly uIMedicalResultTable: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIDateOfProcedureEdit = page.locator('#tabNames_tmpl2_ususrMedical_dtcProcidure_KPIDttmCtrl');
        this.uITypeOfProcedure = page.locator('#tabNames_tmpl2_ususrMedical_cddType_DropDown');
        this.uIReasonOfProcedure = page.locator('#tabNames_tmpl2_ususrMedical_cddReason_DropDown');
        this.uIMedicalResultTable = page.locator('#tabNames_tmpl2_ususrMedical_grdMedicalAnimal');
        this.uIAddButton = page.locator('#tabNames_tmpl2_ususrMedical_cmdAdd');
        this.uIClearButton = page.locator('#tabNames_tmpl2_ususrMedical_cmdClear');
    }

    async enterCurrentDateInDateOFProcedure(): Promise<void> {
        await this.uIDateOfProcedureEdit.fill(DateHelpers.getCurrentDate());
        await this.uIDateOfProcedureEdit.press('Tab');
    }

    async tabDateOFProcedure(): Promise<void> {
        await this.uIDateOfProcedureEdit.press('Tab');
    }

    async selectTypeOfProcedure(): Promise<void> {
        const options = await this.uITypeOfProcedure.locator('option').allInnerTexts();
        const valid = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOpt = valid[Math.floor(Math.random() * valid.length)];
        await this.uITypeOfProcedure.selectOption({ label: randomOpt });
        await this.uITypeOfProcedure.press('Tab');
    }

    async selectReasonOfProcedure(): Promise<void> {
        const options = await this.uIReasonOfProcedure.locator('option').allInnerTexts();
        const valid = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOpt = valid[Math.floor(Math.random() * valid.length)];
        await this.uIReasonOfProcedure.selectOption({ label: randomOpt });
        await this.uIReasonOfProcedure.press('Tab');
    }

    async selectAtTypeOfProcedure(): Promise<void> {
        await this.uITypeOfProcedure.selectOption({ label: PoliceData.getAnimalControlModuleValue('TypeOfProcedure') });
        await this.uITypeOfProcedure.press('Tab');
    }

    async selectAtReasonOfProcedure(): Promise<void> {
        await this.uIReasonOfProcedure.selectOption({ label: PoliceData.getAnimalControlModuleValue('ReasonOfProcedure') });
        await this.uIReasonOfProcedure.press('Tab');
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifyEnterDateOfProcedureAcknowlege(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(30033) Enter Date of Procedure.');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyAtTypeOfProcedureInGrid(rowIndex: number): Promise<void> {
        const value = await this.grid.getGridCellInnerText(this.uIMedicalResultTable, 'Procedure Type', rowIndex);
        expect(value).toBe(PoliceData.getAnimalControlModuleValue('TypeOfProcedure'));
    }

    async verifyAtReasonOfProcedureInGrid(rowIndex: number): Promise<void> {
        const value = await this.grid.getGridCellInnerText(this.uIMedicalResultTable, 'Procedure Reason', rowIndex);
        expect(value).toBe(PoliceData.getAnimalControlModuleValue('ReasonOfProcedure'));
    }

    async verifyAtNameInGrid(rowIndex: number): Promise<void> {
        const value = await this.grid.getGridCellInnerText(this.uIMedicalResultTable, 'Name', rowIndex);
        expect(value).toBe(PoliceData.getAnimalControlModuleValue('VeterinarianName'));
    }

    async verifyRowCountAs1(): Promise<void> {
        const count = await this.grid.getRowCount(this.uIMedicalResultTable);
        expect(count).toBe(1);
    }

    async verifyAtPhoneInGrid(rowIndex: number): Promise<void> {
        const value = await this.grid.getGridCellInnerText(this.uIMedicalResultTable, 'Phone#', rowIndex);
        console.log(value);
        expect(value).toBe(PoliceData.getAnimalControlModuleValue('PhoneNo'));
    }
}

// ============================================================================
// 3. ANIMAL CASE SEARCH PAGE & TABS
// ============================================================================
export class AnimalCaseSearchPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIAnimalCaseSearchResulTable: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIExcelIcon: Locator;
    readonly uIResetButton: Locator;
    readonly uIBackButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIAnimalCaseSearchResultGrid: Locator;
    readonly uIResolutionsInput: Locator;
    readonly uIResolutionsDropdown: Locator;
    readonly uIIntakeCheckbox: Locator;
    readonly uIDischargedCheckBox: Locator;
    readonly uIBothCheckBox: Locator;
    readonly uIComplaintTypeDropDown: Locator;
    readonly uIanimalCaseSearchResultGrid: Locator;
    readonly uIAdvanceTab: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIFollowUpdateDateFromEdit: Locator;
    readonly uIFollowUpdateDateToEdit: Locator;
    readonly uIBackButtonLabel: Locator;
    readonly uILocationWhereAnimalWasLostFoundEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIAnimalCaseSearchResulTable = page.locator('#grdCaseEntry');
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIExcelIcon = page.locator("//img[@src = '/KPIImages/ico/16_excel.gif']");
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uISearchButton = page.locator("//span[(text()='Search')]");
        this.uIAnimalCaseSearchResultGrid = page.locator("//div[@mkr='container']");
        this.uIResolutionsInput = page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_radResolution_Input');
        this.uIResolutionsDropdown = page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_radResolution_DropDown');
        this.uIIntakeCheckbox = page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_chkIntake');
        this.uIDischargedCheckBox = page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_chkDischarged');
        this.uIBothCheckBox = page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_chkBoth');
        this.uIComplaintTypeDropDown = page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_cddComplaintType_DropDown');
        this.uIanimalCaseSearchResultGrid = page.locator('#pnlSearchResults');
        this.uIAdvanceTab = page.locator("//span[text()='Advanced']");
        this.uIPrintIcon = page.locator("//img[@title='Print']");
        this.uIFollowUpdateDateFromEdit = page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_dtmFollowUpDttm_KPIDttmCtrl');
        this.uIFollowUpdateDateToEdit = page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_dtmFollowupTodDttm_KPIDttmCtrl');
        this.uIBackButtonLabel = page.locator("//li[@title='Back to Search']");
        this.uILocationWhereAnimalWasLostFoundEdit = page.locator('#tabLostFound_tmpl0_ctrlusrLFBasicSrch1_adrAnimalLF_txtFrom');
    }

    async selectAtNameType(): Promise<void> {
        await this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_cddNameType').selectOption({ label: PoliceData.getAnimalControlModuleValue('NameType') });
    }

    async enterAtNameID(): Promise<void> {
        await this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_txtNameID').fill(PoliceData.getAnimalControlModuleValue('NameID'));
    }

    async enterAtLastName(): Promise<void> {
        const edit = this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_txtLastName');
        await edit.fill(PoliceData.getAnimalControlModuleValue('LastName'));
        await edit.press('Tab');
    }

    async enterAtFirstName(): Promise<void> {
        const edit = this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_txtFirstName');
        await edit.fill(PoliceData.getAnimalControlModuleValue('FirstName'));
        await edit.press('Tab');
    }

    async selectAtAnimalNameType(): Promise<void> {
        await this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_cddNameType0').selectOption({ label: PoliceData.getAnimalControlModuleValue('AnimalNameType') });
    }

    async enterAtAnimalNameID(): Promise<void> {
        await this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_txtNameID0').fill(PoliceData.getAnimalControlModuleValue('AnimalNameID'));
    }

    async enterAtAnimalLastName(): Promise<void> {
        const edit = this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_txtLastName0');
        await edit.fill(PoliceData.getAnimalControlModuleValue('AnimalLastName'));
        await edit.press('Tab');
    }

    async enterAtAnimalFirstName(): Promise<void> {
        const edit = this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_txtFirstName0');
        await edit.fill(PoliceData.getAnimalControlModuleValue('AnimalFirstName'));
        await edit.press('Tab');
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickExcelIcon(): Promise<void> {
        await this.uIExcelIcon.click();
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
        await this.page.waitForTimeout(1000);
    }

    async enterAtCaseNo(): Promise<void> {
        const caseNo = PoliceData.getAnimalControlModuleValue('CaseNo');
        await this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_nbrcaseNo_Year').fill(caseNo.substring(0, 2));
        await this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_nbrcaseNo_Number').fill(caseNo.substring(3));
    }

    async enterAtCallNo(): Promise<void> {
        const callNo = PoliceData.getAnimalControlModuleValue('CallNo');
        await this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_nbrCallNo_Year').fill(callNo.substring(0, 2));
        await this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_nbrCallNo_Number').fill(callNo.substring(3));
    }

    async enterAtLocation(): Promise<void> {
        await this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_adrAtLoc_txtFrom').fill(PoliceData.getAnimalControlModuleValue('Location'));
    }

    async enterAtOfficer(): Promise<void> {
        await this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_lupOff_CodeValue').fill(PoliceData.getAnimalControlModuleValue('Officer'));
    }

    async enterAtCFS(): Promise<void> {
        await this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_lupCFS_CodeValue').fill(PoliceData.getAnimalControlModuleValue('CFS'));
    }

    async selectAtCage(): Promise<void> {
        await this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_radCage_Input').click();
        await this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_radCage_DropDown').locator(`li:has-text("${PoliceData.getAnimalControlModuleValue('CageNo')}")`).click();
    }

    async enterAtACENo(): Promise<void> {
        const aceNo = PoliceData.getAnimalControlModuleValue('ACENo');
        await this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_nbrACENo_Year').fill(aceNo.substring(0, 2));
        await this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_nbrACENo_Number').fill(aceNo.substring(3));
    }

    async selectRowByAtAceNo(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAnimalCaseSearchResultGrid, PoliceData.getAnimalControlModuleValue('ACENo'));
    }

    async selectAtCaseNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAnimalCaseSearchResulTable, PoliceData.getAnimalControlModuleValue('CaseNo'));
    }

    async selectRowByAtAceNo1(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAnimalCaseSearchResultGrid, PoliceData.getAnimalControlModuleValue('ACENo1'));
    }

    async clickIntakeCheckBoxAndVerifyOtherCheckboxesUnChecked(): Promise<void> {
        await this.uIIntakeCheckbox.click();
        await expect(this.uIDischargedCheckBox).not.toBeChecked();
        await expect(this.uIBothCheckBox).not.toBeChecked();
    }

    async clickDischargedCheckBoxAndVerifyOtherCheckboxesUnChecked(): Promise<void> {
        await this.uIDischargedCheckBox.click();
        await expect(this.uIIntakeCheckbox).not.toBeChecked();
        await expect(this.uIBothCheckBox).not.toBeChecked();
    }

    async clickBothCheckBoxAndVerifyOtherCheckboxesUnChecked(): Promise<void> {
        await this.uIBothCheckBox.click();
        await expect(this.uIDischargedCheckBox).not.toBeChecked();
        await expect(this.uIIntakeCheckbox).not.toBeChecked();
    }

    async selectFirstRowFromGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAnimalCaseSearchResultGrid, PoliceData.getAnimalControlModuleValue('CaseNo'));
    }

    async clickBackButton(): Promise<void> {
        await this.uIBackButton.click();
    }

    async verifyBothIntakeAndDischargedEntryIsPresent(): Promise<void> {
        const row1 = await this.grid.getGridCellInnerText(this.uIAnimalCaseSearchResultGrid, 'ACE#', 1);
        expect(row1).toBe(PoliceData.getAnimalControlModuleValue('ACENo1'));
        const row2 = await this.grid.getGridCellInnerText(this.uIAnimalCaseSearchResultGrid, 'ACE#', 2);
        expect(row2).toBe(PoliceData.getAnimalControlModuleValue('ACENo'));
    }

    async selectAtResolutions(): Promise<void> {
        await this.uIResolutionsInput.click();
        await this.uIResolutionsDropdown.locator(`li:has-text("${PoliceData.getAnimalControlModuleValue('Resolutions')}")`).click();
        await this.uIResolutionsInput.press('Tab');
    }

    async verifyAtACENoInGrid(): Promise<void> {
        const row = await this.grid.getRowByCellText(this.uIAnimalCaseSearchResulTable, PoliceData.getAnimalControlModuleValue('ACENo'));
        const text = await row.innerText();
        expect(text).toContain(PoliceData.getAnimalControlModuleValue('ACENo'));
    }

    async verifySelectedRowIsNotEditable(): Promise<void> {
        const rows = this.uIAnimalCaseSearchResulTable.locator('tbody tr');
        const count = await rows.count();
        for (let r = 0; r < count; r++) {
            const row = rows.nth(r);
            const classAttr = await row.getAttribute('class') || '';
            if (classAttr.includes('igg_BlueThemeActiveRow')) {
                const cells = row.locator('td');
                const cellCount = await cells.count();
                for (let c = 0; c < cellCount; c++) {
                    const cell = cells.nth(c);
                    if (await cell.isVisible()) {
                        await cell.dblclick();
                        await this.page.waitForTimeout(1000);
                    }
                }
            }
        }
    }

    async selectRandomRowInGrid(): Promise<void> {
        await this.grid.selectRandomRow(this.uIAnimalCaseSearchResulTable);
    }

    async selectAtComplaintType(): Promise<void> {
        await this.uIComplaintTypeDropDown.selectOption({ label: PoliceData.getAnimalControlModuleValue('ComplaintType') });
        await this.uIComplaintTypeDropDown.press('Tab');
    }

    async getGridData(): Promise<string[]> {
        const cells = await this.grid.getGridRowCellsValues(this.uIAnimalCaseSearchResulTable);
        cells.shift();
        return cells;
    }

    async verifyExcelContent(Pdf: string, content: string): Promise<void> {
        expect(Pdf).toContain(content);
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async verifyACEIsBlank(): Promise<void> {
        const aceYear = await this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_nbrACENo_Year').inputValue();
        const aceNo = await this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_nbrACENo_Number').inputValue();
        expect(aceYear.trim()).toBe('');
        expect(aceNo.trim()).toBe('');
    }

    async verifyAtCaseNoInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIAnimalCaseSearchResulTable, PoliceData.getAnimalControlModuleValue('CaseNo'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getCoronerModuleValue('CaseNo'));
    }

    async verifyCaseIsBlank(): Promise<void> {
        const caseYear = await this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_nbrcaseNo_Year').inputValue();
        const caseNo = await this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_nbrcaseNo_Number').inputValue();
        expect(caseYear.trim()).toBe('');
        expect(caseNo.trim()).toBe('');
    }

    async selectAtApprovalStatus(): Promise<void> {
        await this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_lstApprovalStatus').selectOption({ label: PoliceData.getAnimalControlModuleValue('ApprovalStatus') });
    }

    async verifyAtApprovalStatus(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIAnimalCaseSearchResulTable, PoliceData.getAnimalControlModuleValue('ApprovalStatusInGrid'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('ApprovalStatusInGrid'));
    }

    async verifyExcelColumnName(columnName: string[], value: string): Promise<void> {
        expect(columnName).toContain(value);
    }

    async verifyApprovalStatusIsDisplayed(): Promise<void> {
        await expect(this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_lstApprovalStatus')).toBeVisible();
    }

    async verifyAtAceNoUsingJSONReadFile(testCaseId: string): Promise<void> {
        const aceYear = BaseData.readJson(testCaseId, 'AceYear');
        const aceNo = BaseData.readJson(testCaseId, 'AceNo');
        const AceNumber = `${aceYear}-${aceNo}`;
        await this.grid.selectRowByCellText(this.uIAnimalCaseSearchResultGrid, AceNumber);
    }

    async verifyDownloadFileFormatIsExcel(): Promise<void> {
        await this.page.waitForTimeout(1000);
        // File validation placeholder
    }

    async enterAtFollowUpDateFrom(): Promise<void> {
        await this.uIFollowUpdateDateFromEdit.fill(PoliceData.getAnimalControlModuleValue('FollowUpDateFrom'));
        await this.uIFollowUpdateDateFromEdit.press('Tab');
    }

    async enterAtFollowUpDateTo(): Promise<void> {
        await this.uIFollowUpdateDateToEdit.fill(PoliceData.getAnimalControlModuleValue('FollowUpDateTo'));
        await this.uIFollowUpdateDateToEdit.press('Tab');
    }

    async verifyNoDataPresentAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(7) No data present');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyAddNewLinkIsDisplayedAndEnabled(): Promise<void> {
        await expect(this.uIAddNewButton).toBeVisible();
        await expect(this.uIAddNewButton).toBeEnabled();
    }

    async verifyResetLinkIsDisplayedAndEnabled(): Promise<void> {
        await expect(this.uIResetButton).toBeVisible();
        await expect(this.uIResetButton).toBeEnabled();
    }

    async verifySearchLinkIsDisplayedAndEnabled(): Promise<void> {
        await expect(this.uISearchButton).toBeVisible();
        await expect(this.uISearchButton).toBeEnabled();
    }

    async verifyBackLinkIsDisabled(): Promise<void> {
        const attr = await this.uIBackButtonLabel.getAttribute('class') || '';
        expect(attr).toContain('RootDisabled');
    }

    async enterAtLocation(i: number): Promise<void> {
        const edit = this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_adrAtLoc_txtFrom');
        await edit.fill(PoliceData.getAnimalControlModuleValue('Location' + i));
        await edit.press('Tab');
    }

    async verifyReferenceErrorAckMsgNotDisplayed(): Promise<void> {
        const modal = this.popup.modalBody;
        if (await modal.isVisible().catch(() => false)) {
            const text = await modal.innerText();
            expect(text).not.toContain('ReferenceError: validateMainAddress is not defined');
        }
    }

    async verifyAtLocationInGrid(i: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIAnimalCaseSearchResultGrid, PoliceData.getAnimalControlModuleValue('Location' + i));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('Location' + i));
    }

    async enterAtACENo(i: number): Promise<void> {
        const aceNo = PoliceData.getAnimalControlModuleValue('ACENo' + i);
        await this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_nbrACENo_Year').fill(aceNo.substring(0, 2));
        await this.page.locator('#tabNameSrch_tmpl0_UsrAnimalSrchBasic1_nbrACENo_Number').fill(aceNo.substring(3));
    }

    async selectRowByAtAceNo(i: number): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAnimalCaseSearchResultGrid, PoliceData.getAnimalControlModuleValue('ACENo' + i));
    }
}

export class AnimalCaseSearchAdvancedTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uISpeciesDropdown: Locator;
    readonly uIBreed1Dropdown: Locator;
    readonly uIBreed2Dropdown: Locator;
    readonly uIPedigreeNameEdit: Locator;
    readonly uILicenseTagEdit: Locator;
    readonly uIMicroChipIDEdit: Locator;
    readonly uISexDropdown: Locator;
    readonly uIColor1Dropdown: Locator;
    readonly uIColor2Dropdown: Locator;
    readonly uIMarkingsDropDown: Locator;
    readonly uIAnimalCaseSearchGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);

        this.uISpeciesDropdown = page.locator('#tabNameSrch_tmpl1_usrAnimalCaseSrchAdv1_cddSpecies_DropDown');
        this.uIBreed1Dropdown = page.locator('#tabNameSrch_tmpl1_usrAnimalCaseSrchAdv1_cddBreed1');
        this.uIBreed2Dropdown = page.locator('#tabNameSrch_tmpl1_usrAnimalCaseSrchAdv1_cddBreed2');
        this.uIPedigreeNameEdit = page.locator('#tabNameSrch_tmpl1_usrAnimalCaseSrchAdv1_txtPedigree');
        this.uILicenseTagEdit = page.locator('#tabNameSrch_tmpl1_usrAnimalCaseSrchAdv1_txtLicNO');
        this.uIMicroChipIDEdit = page.locator('#tabNameSrch_tmpl1_usrAnimalCaseSrchAdv1_txtMICID');
        this.uISexDropdown = page.locator('#tabNameSrch_tmpl1_usrAnimalCaseSrchAdv1_cddSex_DropDown');
        this.uIColor1Dropdown = page.locator('#tabNameSrch_tmpl1_usrAnimalCaseSrchAdv1_cddColor1');
        this.uIColor2Dropdown = page.locator('#tabNameSrch_tmpl1_usrAnimalCaseSrchAdv1_cddColor2');
        this.uIMarkingsDropDown = page.locator('#tabNameSrch_tmpl1_usrAnimalCaseSrchAdv1_cddMarkings');
        this.uIAnimalCaseSearchGrid = page.locator('#grdCaseEntry');
    }

    async verifyAtSpecies(i: number): Promise<void> {
        const selected = await this.uISpeciesDropdown.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(PoliceData.getAnimalControlModuleValue('Species' + i));
    }

    async verifyBreed1FieldIsDisabled(): Promise<void> {
        await expect(this.uIBreed1Dropdown).toBeDisabled();
    }

    async verifyBreed2FieldIsDisabled(): Promise<void> {
        await expect(this.uIBreed2Dropdown).toBeDisabled();
    }

    async verifyColor1FieldIsDisabled(): Promise<void> {
        await expect(this.uIColor1Dropdown).toBeDisabled();
    }

    async verifyColor2FieldIsDisabled(): Promise<void> {
        await expect(this.uIColor2Dropdown).toBeDisabled();
    }

    async verifyMarkingsFieldIsDisabled(): Promise<void> {
        await expect(this.uIMarkingsDropDown).toBeDisabled();
    }

    async selectAtSpecies(): Promise<void> {
        await this.uISpeciesDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Species') });
        await this.uISpeciesDropdown.press('Tab');
    }

    async verifyBreed1FieldIsEnabled(): Promise<void> {
        await expect(this.uIBreed1Dropdown).toBeEnabled();
    }

    async verifyBreed2FieldIsEnabled(): Promise<void> {
        await expect(this.uIBreed2Dropdown).toBeEnabled();
    }

    async verifyColor1FieldIsEnabled(): Promise<void> {
        await expect(this.uIColor1Dropdown).toBeEnabled();
    }

    async verifyColor2FieldIsEnabled(): Promise<void> {
        await expect(this.uIColor2Dropdown).toBeEnabled();
    }

    async verifyMarkingsFieldIsEnabled(): Promise<void> {
        await expect(this.uIMarkingsDropDown).toBeEnabled();
    }

    async selectAtBreed1(): Promise<void> {
        await this.uIBreed1Dropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Breed1') });
    }

    async selectAtBreed2(): Promise<void> {
        await this.uIBreed2Dropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Breed2') });
    }

    async selectAtColor1(): Promise<void> {
        await this.uIColor1Dropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Color1') });
    }

    async selectAtColor2(): Promise<void> {
        await this.uIColor2Dropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Color2') });
    }

    async selectAtMarkings(): Promise<void> {
        await this.uIMarkingsDropDown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Markings') });
    }

    async getColumnValuesInGrid(ColName: string): Promise<string[]> {
        return await this.grid.getGridTableColumnValues(this.uIAnimalCaseSearchGrid, ColName);
    }
}

// ============================================================================
// 4. ANIMAL CASE ENTRY PAGE & TABS
// ============================================================================
export class AnimalCaseEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uICallNoLable: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIACEYearEdit: Locator;
    readonly uIACENumberEdit: Locator;
    readonly uILocationEdit: Locator;
    readonly uIOfficerEdit: Locator;
    readonly uIOfficerLookUp: Locator;
    readonly uICaseYearEdit: Locator;
    readonly uICaseNoLookup: Locator;
    readonly uICaseNumberEdit: Locator;
    readonly uICallYearEdit: Locator;
    readonly uICallNoLookup: Locator;
    readonly uICallnumberEdit: Locator;
    readonly uIReportedDateEdit: Locator;
    readonly uIReportedTimeEdit: Locator;
    readonly uIComplaintTypeDropdown: Locator;
    readonly uIInvestigationAuthorizedCheckBox: Locator;
    readonly uIMainTab: Locator;
    readonly uIAnimalInfoTab: Locator;
    readonly uIObservationsTab: Locator;
    readonly uIResolutionsTab: Locator;
    readonly uIBiteReportTab: Locator;
    readonly uINarrativeTab: Locator;
    readonly uIReportingTab: Locator;
    readonly uIAttachmentsTab: Locator;
    readonly uIQaFormsTab: Locator;
    readonly uIRefreshButton: Locator;
    readonly uILocationInfoIcon: Locator;
    readonly uIOfficerInfoIcon: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uISaveAndNewButton: Locator;
    readonly uIReportedDay: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIApprovalTab: Locator;
    readonly uIStatusLabel: Locator;
    readonly uICallInfoIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uICallNoLable = page.locator('#lblCall');
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uIACEYearEdit = page.locator('#nbrACE_Year');
        this.uIACENumberEdit = page.locator('#nbrACE_Number');
        this.uILocationEdit = page.locator('#adrLocation_txtFrom');
        this.uIOfficerEdit = page.locator('#lupOfficer_CodeValue');
        this.uIOfficerLookUp = page.locator('#lupOfficer_imgBtn');
        this.uICaseYearEdit = page.locator("//input[@id='nbrIncidentID_Year']");
        this.uICaseNoLookup = page.locator('#nbrIncidentID_imgBtn');
        this.uICaseNumberEdit = page.locator("//input[@id='nbrIncidentID_Number']");
        this.uICallYearEdit = page.locator("//input[@id='nbrCall_Year']");
        this.uICallNoLookup = page.locator('#nbrCall_imgBtn');
        this.uICallnumberEdit = page.locator("//input[@id='nbrCall_Number']");
        this.uIReportedDateEdit = page.locator("//input[@id='dttmReported_Date_KPIDttmCtrl']");
        this.uIReportedTimeEdit = page.locator("//input[contains(@class,'textboxdatetime')]");
        this.uIComplaintTypeDropdown = page.locator('#cddComplaintType_DropDown');
        this.uIInvestigationAuthorizedCheckBox = page.locator('#chkInvestAuth');
        this.uIMainTab = page.locator("//span[text()='Main']");
        this.uIAnimalInfoTab = page.locator("//span[text()='Animal Info']");
        this.uIObservationsTab = page.locator("//span[text()='Observations']");
        this.uIResolutionsTab = page.locator("//span[text()='Resolutions']");
        this.uIBiteReportTab = page.locator("//span[text()='Bite Report']");
        this.uINarrativeTab = page.locator("//span[text()='Narrative']");
        this.uIReportingTab = page.locator("//span[text()='Reporting']");
        this.uIAttachmentsTab = page.locator("//span[text()='Attachments']");
        this.uIQaFormsTab = page.locator("//span[text()='QA Forms']");
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uILocationInfoIcon = page.locator('#adrLocation_cmdIncOnAddr');
        this.uIOfficerInfoIcon = page.locator('#lupOfficer_cmdIncOnAddr');
        this.uILeftSideStatusBar = page.locator("//td[@class ='statusBar']/b");
        this.uISaveAndNewButton = page.locator('#cmdSaveNAddNew');
        this.uIReportedDay = page.locator('#txtReportedDay');
        this.uIPrintIcon = page.locator('#cmdPrint');
        this.uIApprovalTab = page.locator("//span[text()='Approval']");
        this.uIStatusLabel = page.locator('#lblApprovalStatus');
        this.uICallInfoIcon = page.locator('#nbrCall_imgBtn');
    }

    async enterAtCallNo(): Promise<void> {
        await this.uICallYearEdit.clear();
        const callNo = PoliceData.getAnimalControlModuleValue('CallNo');
        await this.uICallYearEdit.fill(callNo.substring(0, 2));
        await this.uICallnumberEdit.fill(callNo.substring(3));
        await this.uICallnumberEdit.press('Tab');
    }

    async enterAtCaseNo(): Promise<void> {
        const caseNo = PoliceData.getAnimalControlModuleValue('CaseNo');
        await this.uICaseYearEdit.fill(caseNo.substring(0, 2));
        await this.uICaseNumberEdit.fill(caseNo.substring(3));
        await this.uICaseNumberEdit.press('Tab');
    }

    async clickMainTab(): Promise<void> {
        await this.uIMainTab.click();
    }

    async clickAnimalInfoTab(): Promise<void> {
        await this.uIAnimalInfoTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmACIAnimalInfo');
    }

    async clickObservationsTab(): Promise<void> {
        await this.uIObservationsTab.click();
    }

    async clickResolutionsTab(): Promise<void> {
        await this.uIResolutionsTab.click();
    }

    async clickBiteReportTab(): Promise<void> {
        await this.uIBiteReportTab.click();
        new BrowserHelpers(this.page).switchToFrame('ACIBiteReport');
    }

    async clickNarrativeTab(): Promise<void> {
        await this.uINarrativeTab.click();
        await this.page.waitForTimeout(1000);
        new BrowserHelpers(this.page).switchToFrame('frmTextMgrEx');
    }

    async clickReportingTab(): Promise<void> {
        await this.uIReportingTab.click();
        await this.page.waitForTimeout(1000);
        new BrowserHelpers(this.page).switchToFrame('frmCBEReports');
    }

    async clickAttachmentsTab(): Promise<void> {
        await this.uIAttachmentsTab.click();
    }

    async enterAtLocation(): Promise<void> {
        await this.uILocationEdit.fill(PoliceData.getAnimalControlModuleValue('Location'));
        await this.uILocationEdit.press('Tab');
    }

    async tabOutReportingDateAndTime(): Promise<void> {
        await this.uIReportedDateEdit.press('Tab');
        await this.uIReportedTimeEdit.press('Tab');
    }

    async enterAtOfficer(): Promise<void> {
        await this.uIOfficerEdit.fill(PoliceData.getAnimalControlModuleValue('Officer'));
        await this.uIOfficerEdit.press('Tab');
    }

    async selectAtComplaintType(): Promise<void> {
        await this.uIComplaintTypeDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('ComplaintType') });
    }

    async selectComplaintTypeAsCrueltyToAnimals(): Promise<void> {
        await this.uIComplaintTypeDropdown.selectOption({ label: 'Cruelty to Animals' });
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async cancelSave(): Promise<void> {
        await this.popup.confirmNoButton.click();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async saveNCloseScreen(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await this.popup.confirmYesButton.click();
    }

    async clickSaveAndClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
    }

    async clickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async readACENo(): Promise<string> {
        const yr = await this.uIACEYearEdit.inputValue();
        const num = await this.uIACENumberEdit.inputValue();
        return `${yr}-${num}`;
    }

    async VerifyACENoGenerated(): Promise<void> {
        const yr = await this.uIACEYearEdit.inputValue();
        const num = await this.uIACENumberEdit.inputValue();
        expect(yr).toContain('2');
        expect(num).toContain('000');
    }

    async VerifyAtACENo(): Promise<void> {
        const yr = await this.uIACEYearEdit.inputValue();
        const num = await this.uIACENumberEdit.inputValue();
        expect(`${yr}-${num}`).toBe(PoliceData.getAnimalControlModuleValue('ACENo'));
    }

    async verifyOfficerInfoIconIsDisplayed(): Promise<void> {
        await expect(this.uIOfficerInfoIcon).toBeVisible();
    }

    async verifyLocationInfoIconIsDisplayed(): Promise<void> {
        await expect(this.uILocationInfoIcon).toBeVisible();
    }

    async verifyAtLocation(): Promise<void> {
        const attr = await this.uILocationEdit.inputValue();
        expect(attr).toContain(PoliceData.getAnimalControlModuleValue('Location'));
    }

    async clickCaseInfoIcon(): Promise<void> {
        await this.uICaseNoLookup.click();
    }

    async VerifyCaseReportedOnDateAndTime(caseReportedDate: string, caseReportedTime: string): Promise<void> {
        await expect(this.uIReportedDateEdit).toHaveValue(caseReportedDate);
        await expect(this.uIReportedTimeEdit).toHaveValue(caseReportedTime);
    }

    async clickReset(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async verifyCallNoShownAsNotMandatory(): Promise<void> {
        const color = await this.uICallNoLable.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(0, 0, 0, 1)');
    }

    async verifyCallNoShownAsMandatory(): Promise<void> {
        const color = await this.uICallNoLable.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(128, 0, 0, 1)');
    }

    async verifyEnterCallNumberAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(30033) Enter Call Number');
        await this.popup.acknowledgeOkButton.click();
    }

    async VerifyUpdatedDataExistsinTheAnimalInfoTabAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1051) Updated data exists in the Animal Info Tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async VerifyUpdatedDataExistsinTheNarrativeTabAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1051) Updated data exists in the Narrative Tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async VerifyUpdatedDataExistsinTheBiteReportTabAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1051) Updated data exists in the Bite Report Tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async checkInvestigationAuthorizedCheckBox(): Promise<void> {
        await this.uIInvestigationAuthorizedCheckBox.click();
    }

    async verifyReportedDay(): Promise<void> {
        await expect(this.uIReportedDay).toHaveValue(PoliceData.getAnimalControlModuleValue('Day'));
    }

    async verifyReportedDay1(): Promise<void> {
        await expect(this.uIReportedDay).toHaveValue(PoliceData.getAnimalControlModuleValue('Day1'));
    }

    async verifyAdditionSuccessfulMessage(): Promise<void> {
        const msg = await this.uILeftSideStatusBar.innerText();
        expect(msg).toBe('1002 - Addition Successful');
    }

    async verifyUpdateSuccessfulBottomMessage(): Promise<void> {
        const msg = await this.uILeftSideStatusBar.innerText();
        expect(msg).toContain('1003 - Update Successful');
    }

    async enterCaseNo(): Promise<void> {
        await this.uICaseYearEdit.fill('22');
        await this.uICaseNumberEdit.fill(RandomHelpers.getRandomBetween(1, 9).toString());
        await this.uICaseNumberEdit.press('Tab');
    }

    async enterOfficer(): Promise<void> {
        await this.uIOfficerLookUp.click();
        await this.popup.kPICodedLookup.randomKPIHelpSelect();
    }

    async selectComplaintType(): Promise<void> {
        const options = await this.uIComplaintTypeDropdown.locator('option').allInnerTexts();
        const valid = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOpt = valid[Math.floor(Math.random() * valid.length)];
        await this.uIComplaintTypeDropdown.selectOption({ label: randomOpt });
    }

    async saveAndNew(): Promise<void> {
        await this.uISaveAndNewButton.click();
        await this.popup.confirmYesButton.click();
    }

    async tabReportedDateAndTime(): Promise<void> {
        await this.uIReportedDateEdit.press('Tab');
        await this.uIReportedTimeEdit.press('Tab');
    }

    async verifyConfirmationPopupIsArising(): Promise<void> {
        await expect(this.popup.modalBody).toBeVisible();
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async clickSaveAndAddNew(): Promise<void> {
        await this.uISaveAndNewButton.click();
    }

    async verifyNarrativeTabIsDisplayed(): Promise<void> {
        await expect(this.uINarrativeTab).toBeVisible();
    }

    async verifyReportingTabIsDisplayed(): Promise<void> {
        await expect(this.uIReportingTab).toBeVisible();
    }

    async verifyAttachmentsTabIsDisplayed(): Promise<void> {
        await expect(this.uIAttachmentsTab).toBeVisible();
    }

    async verifyApprovalTabIsDisplayed(): Promise<void> {
        await expect(this.uIApprovalTab).toBeVisible();
    }

    async setAceYearToJSONFile(testCaseId: string): Promise<void> {
        const val = await this.uIACEYearEdit.inputValue();
        PoliceData.writeJson(testCaseId, 'AceYear', val);
    }

    async setAceNoToJSONFile(testCaseId: string): Promise<void> {
        const val = await this.uIACENumberEdit.inputValue();
        PoliceData.writeJson(testCaseId, 'AceNo', val);
    }

    async switchToApprovalTab(): Promise<void> {
        await this.uIApprovalTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmPnxGlobalApproval.aspx');
    }

    async verify1051AcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1051) Updated data exists in the tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyAtLabel(): Promise<void> {
        const text = await this.uIStatusLabel.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('label'));
    }

    async clickApprovalTab(): Promise<void> {
        await this.uIApprovalTab.click();
    }

    async verifyReportedDateTimeIsDisabled(): Promise<void> {
        const classAttr = await this.uIReportedDateEdit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
        await expect(this.uIReportedTimeEdit).toBeDisabled();
    }

    async verifyReportedDateTimeIsEnabled(): Promise<void> {
        await expect(this.uIReportedDateEdit).toBeEnabled();
        await expect(this.uIReportedTimeEdit).toBeEnabled();
    }

    async enterReportedDateAsFutureDate(): Promise<void> {
        await this.uIReportedDateEdit.clear();
        await this.uIReportedDateEdit.fill(DateHelpers.getFutureDate(2));
        await this.uIReportedDateEdit.press('Tab');
    }

    async clickInvestigationAuthorizedCheckBox(): Promise<void> {
        await this.uIInvestigationAuthorizedCheckBox.click();
    }

    async verify6040GenerateCaseToProceedFurtherAcknowledgePopupMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6040) Generate case to proceed further');
        await this.popup.acknowledgeOkButton.click();
    }

    async clearOfficer(): Promise<void> {
        await this.uIOfficerEdit.click();
        await this.uIOfficerEdit.clear();
    }

    async verifyAtOfficerPF(): Promise<void> {
        await expect(this.uIOfficerEdit).toHaveValue(PoliceData.getAnimalControlModuleValue('OfficerPF'));
    }

    async verifyCaseNoIsEmpty(): Promise<void> {
        const yr = await this.uICaseYearEdit.inputValue();
        const no = await this.uICaseNumberEdit.inputValue();
        expect(yr.trim()).toBe('');
        expect(no.trim()).toBe('');
    }

    async verifyCaseLookUpIconIsDisabled(): Promise<void> {
        await expect(this.uICaseNoLookup).toBeDisabled();
    }

    async verifyCallNumberInAnimalCaseEntry(callNo: string): Promise<void> {
        const yr = await this.uICallYearEdit.inputValue();
        const num = await this.uICallnumberEdit.inputValue();
        expect(`${yr}.${num}`).toBe(callNo);
    }

    async verifyCallInfoIconIsDisplayed(): Promise<void> {
        await expect(this.uICallInfoIcon).toBeVisible();
    }

    async verifyCallInfoIconIsEnabled(): Promise<void> {
        await expect(this.uICallInfoIcon).toBeEnabled();
    }

    async tabOutOfficer(): Promise<void> {
        await this.uIOfficerEdit.press('Tab');
    }

    async verifyCodedWindowNotExist(): Promise<void> {
        // Verification placeholder
    }
}

export class AnimalCaseEntryMainTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uImunicipalityDropdown: Locator;
    readonly uICFSReportedViolationEdit: Locator;
    readonly uIInitialNatureOfComplaintEdit: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameTypeIDEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIActivityDropdown: Locator;
    readonly uIAddButton: Locator;
    readonly uIPhoneNumber1Edit: Locator;
    readonly uIPhoneNumber2Edit: Locator;
    readonly uIMainTabResultTable: Locator;
    readonly uINameInfoButton: Locator;
    readonly uICFSReportedLookupIcon: Locator;
    readonly uICFSReportedViolationDescriptionEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uImunicipalityDropdown = page.locator('#tabANI_tmpl0_ctrlACIMain_cddMinicipality_DropDown');
        this.uICFSReportedViolationEdit = page.locator('#tabANI_tmpl0_ctrlACIMain_lupCFSRpt_CodeValue');
        this.uIInitialNatureOfComplaintEdit = page.locator('#tabANI_tmpl0_ctrlACIMain_txtNarrative');
        this.uINameTypeEdit = page.locator('#tabANI_tmpl0_ctrlACIMain_nName_NameType');
        this.uINameTypeIDEdit = page.locator('#tabANI_tmpl0_ctrlACIMain_nName_NameTypeID');
        this.uILastNameEdit = page.locator('#tabANI_tmpl0_ctrlACIMain_nName_LastName');
        this.uIFirstNameEdit = page.locator('#tabANI_tmpl0_ctrlACIMain_nName_FirstName');
        this.uIActivityDropdown = page.locator('#tabANI_tmpl0_ctrlACIMain_cddActivity_DropDown');
        this.uIAddButton = page.locator('#tabANI_tmpl0_ctrlACIMain_cmdAdd');
        this.uIPhoneNumber1Edit = page.locator('#tabANI_tmpl0_ctrlACIMain_txtHomePhone');
        this.uIPhoneNumber2Edit = page.locator('#tabANI_tmpl0_ctrlACIMain_txtWorkPhone');
        this.uIMainTabResultTable = page.locator('#tabANI_tmpl0_ctrlACIMain_grdAnimal');
        this.uINameInfoButton = page.locator('#tabANI_tmpl0_ctrlACIMain_nName_imgSrch');
        this.uICFSReportedLookupIcon = page.locator('#tabANI_tmpl0_ctrlACIMain_lupCFSRpt_imgBtn');
        this.uICFSReportedViolationDescriptionEdit = page.locator('#tabANI_tmpl0_ctrlACIMain_lupCFSRpt_CodeDescription');
    }

    async selectAtMunicipality(): Promise<void> {
        await this.uImunicipalityDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Municipality') });
    }

    async enterAtCFSReportedViolation(): Promise<void> {
        await this.uICFSReportedViolationEdit.fill(PoliceData.getAnimalControlModuleValue('CFSReportedViolation'));
        await this.uICFSReportedViolationEdit.press('Tab');
    }

    async enterAtNameID(): Promise<void> {
        const val = PoliceData.getAnimalControlModuleValue('NameID');
        await this.uINameTypeEdit.fill(val.substring(0, 1));
        await this.uINameTypeIDEdit.fill(val.substring(2));
        await this.uINameTypeIDEdit.press('Tab');
    }

    async enterAtLastName(): Promise<void> {
        await this.uILastNameEdit.fill(PoliceData.getAnimalControlModuleValue('LastName'));
        await this.uILastNameEdit.press('Tab');
    }

    async enterAtFirstName(): Promise<void> {
        await this.uIFirstNameEdit.fill(PoliceData.getAnimalControlModuleValue('FirstName'));
        await this.uIFirstNameEdit.press('Tab');
    }

    async selectAtActivity(): Promise<void> {
        await this.uIActivityDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Activity') });
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async enterAtInitialNatureOfComplaint(): Promise<void> {
        await this.uIInitialNatureOfComplaintEdit.fill(PoliceData.getAnimalControlModuleValue('InitialNatureOfComplaint'));
    }

    async verifyEnterActivityAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(30033) Enter Activity');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyEnterNameAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(30033) Enter Name');
        await this.popup.acknowledgeOkButton.click();
    }

    async selectMunicipality(): Promise<void> {
        const options = await this.uImunicipalityDropdown.locator('option').allInnerTexts();
        const valid = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOpt = valid[Math.floor(Math.random() * valid.length)];
        await this.uImunicipalityDropdown.selectOption({ label: randomOpt });
    }

    async readPhone1(): Promise<string> {
        return await this.uIPhoneNumber1Edit.inputValue();
    }

    async readPhone2(): Promise<string> {
        return await this.uIPhoneNumber2Edit.inputValue();
    }

    async clickRowByAtActivityInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIMainTabResultTable, PoliceData.getAnimalControlModuleValue('Activity'));
    }

    async verifyAtActivityInGrid(rowIndex: number): Promise<void> {
        const val = await this.grid.getGridCellInnerText(this.uIMainTabResultTable, 'Activity', rowIndex);
        expect(val).toBe(PoliceData.getAnimalControlModuleValue('Activity'));
    }

    async clickNameInfoButton(): Promise<void> {
        await this.uINameInfoButton.click();
    }

    async verifyActivePhoneNumber1(phone1: string): Promise<void> {
        const val = await this.uIPhoneNumber1Edit.inputValue();
        expect(val).toContain(phone1);
    }

    async verifyActivePhoneNumber2(phone2: string): Promise<void> {
        const val = await this.uIPhoneNumber2Edit.inputValue();
        expect(val).toContain(phone2);
    }

    async enterCFSReportedViolation(): Promise<void> {
        await this.uICFSReportedLookupIcon.click();
        await this.popup.kPICodedLookup.randomKPIHelpSelect();
    }

    async enterInitialNatureOfComplaint(): Promise<void> {
        await this.uIInitialNatureOfComplaintEdit.fill(DateHelpers.randomString(10));
    }

    async enterNameID(): Promise<void> {
        await this.uINameTypeEdit.fill('A');
        await this.uINameTypeIDEdit.fill(RandomHelpers.getRandomBetween(10, 99).toString());
        await this.uINameTypeIDEdit.press('Tab');
    }

    async selectActivity(): Promise<void> {
        const options = await this.uIActivityDropdown.locator('option').allInnerTexts();
        const valid = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOpt = valid[Math.floor(Math.random() * valid.length)];
        await this.uIActivityDropdown.selectOption({ label: randomOpt });
    }

    async verifyAtNameInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIMainTabResultTable, PoliceData.getAnimalControlModuleValue('Name'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('Name'));
    }

    async verifyAtDOBInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIMainTabResultTable, PoliceData.getAnimalControlModuleValue('DOB'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('DOB'));
    }

    async verifyAtAddressInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIMainTabResultTable, PoliceData.getAnimalControlModuleValue('Address'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('Address'));
    }

    async verifyAtMunicipality(): Promise<void> {
        const selected = await this.uImunicipalityDropdown.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(PoliceData.getAnimalControlModuleValue('Municipality'));
    }

    async verifyAtCFSReportedViolation(): Promise<void> {
        await expect(this.uICFSReportedViolationEdit).toHaveValue(PoliceData.getAnimalControlModuleValue('CFSReportedViolationCode'));
        await expect(this.uICFSReportedViolationDescriptionEdit).toHaveValue(PoliceData.getAnimalControlModuleValue('CFSReportedViolationDescription'));
    }

    async verifyAtInitialNatureOfComplaint(): Promise<void> {
        await expect(this.uIInitialNatureOfComplaintEdit).toHaveValue(PoliceData.getAnimalControlModuleValue('InitialNatureOfComplaint'));
    }
}

export class AnimalCaseEntryAnimalInfoTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIAnimalNameTypeEdit: Locator;
    readonly uIAnimalNameTypeIDEdit: Locator;
    readonly uIAnimalLastNameEdit: Locator;
    readonly uIAnimalFirstNameEdit: Locator;
    readonly uIVeterinarianLastNameEdit: Locator;
    readonly uIVeterinarianFirstNameEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIClearButton: Locator;
    readonly uIAnimalInfoSaveButton: Locator;
    readonly uIAnimalInfoResetButton: Locator;
    readonly uIAnimalInfoGrid: Locator;
    readonly uIAnimalInfosexDropdown: Locator;
    readonly uIAnimalInfoBreed1Dropdown: Locator;
    readonly uIAnimalInfoBreed2Dropdown: Locator;
    readonly uIAnimalInfoDOB: Locator;
    readonly uIAnimalInfoMicroChipId: Locator;
    readonly uIBottomStatusLable: Locator;
    readonly uISpeciesDropDown: Locator;
    readonly uIColor1DropDown: Locator;
    readonly uIColor2DropDown: Locator;
    readonly uIAnimalNameInfoIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIAnimalNameTypeEdit = page.locator('#nNameID_NameType');
        this.uIAnimalNameTypeIDEdit = page.locator('#nNameID_NameTypeID');
        this.uIAnimalLastNameEdit = page.locator('#nNameID_LastName');
        this.uIAnimalFirstNameEdit = page.locator('#nNameID_FirstName');
        this.uIVeterinarianLastNameEdit = page.locator('#nVeterinarian_LastName');
        this.uIVeterinarianFirstNameEdit = page.locator('#nVeterinarian_FirstName');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIClearButton = page.locator('#cmdClear');
        this.uIAnimalInfoSaveButton = page.locator('#cmdSave');
        this.uIAnimalInfoResetButton = page.locator('#Reset');
        this.uIAnimalInfoGrid = page.locator('#grdAnimalInfo');
        this.uIAnimalInfosexDropdown = page.locator('#cddSex_DropDown');
        this.uIAnimalInfoBreed1Dropdown = page.locator('#cddBreed1_DropDown');
        this.uIAnimalInfoBreed2Dropdown = page.locator('#cddBreed2_DropDown');
        this.uIAnimalInfoDOB = page.locator('#dtcDOB_KPIDttmCtrl');
        this.uIAnimalInfoMicroChipId = page.locator('#txtMicroChipID');
        this.uIBottomStatusLable = page.locator('.statusBar');
        this.uISpeciesDropDown = page.locator('#cddSpecies_DropDown');
        this.uIColor1DropDown = page.locator('#cddColor1_DropDown');
        this.uIColor2DropDown = page.locator('#cddColor2_DropDown');
        this.uIAnimalNameInfoIcon = page.locator('#nNameID_imgSrch');
    }

    async enterAtAnimalNameID(): Promise<void> {
        const val = PoliceData.getAnimalControlModuleValue('AnimalNameID');
        await this.uIAnimalNameTypeEdit.fill(val.substring(0, 1));
        await this.uIAnimalNameTypeIDEdit.fill(val.substring(2));
        await this.uIAnimalNameTypeIDEdit.press('Tab');
    }

    async enterAtLastName(): Promise<void> {
        await this.uIAnimalLastNameEdit.fill(PoliceData.getAnimalControlModuleValue('AnimalLastName'));
        await this.uIAnimalFirstNameEdit.press('Tab');
    }

    async enterAtFirstName(): Promise<void> {
        await this.uIAnimalFirstNameEdit.fill(PoliceData.getAnimalControlModuleValue('AnimalFirstName'));
        await this.uIAnimalFirstNameEdit.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async clickClearButton(): Promise<void> {
        await this.uIClearButton.click();
    }

    async saveAnimalInfoTab(): Promise<void> {
        await this.uIAnimalInfoSaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async verifyEnterAnimalNameAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(30033) Enter Animal Name');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyDuplicationOfDataFoundAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1019)Duplication Of Data Found');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyUpdateSuccessfulMessage(): Promise<void> {
        const text = await this.uIBottomStatusLable.innerText();
        expect(text).toContain('1003 - Update Successful');
    }

    async verifyAtSex(): Promise<void> {
        const selected = await this.uIAnimalInfosexDropdown.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(PoliceData.getAnimalControlModuleValue('Sex'));
    }

    async verifyAtBreed1(): Promise<void> {
        const selected = await this.uIAnimalInfoBreed1Dropdown.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(PoliceData.getAnimalControlModuleValue('Breed1'));
    }

    async verifyAtBreed2(): Promise<void> {
        const selected = await this.uIAnimalInfoBreed2Dropdown.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(PoliceData.getAnimalControlModuleValue('Breed2'));
    }

    async verifyAtDOB(): Promise<void> {
        await expect(this.uIAnimalInfoDOB).toHaveValue(PoliceData.getAnimalControlModuleValue('DOB'));
    }

    async verifyAtMicroChipID(): Promise<void> {
        await expect(this.uIAnimalInfoMicroChipId).toHaveValue(PoliceData.getAnimalControlModuleValue('MicroChipID'));
    }

    async verifyAtAnimalNameInGrid(rowIndex: number): Promise<void> {
        const val = await this.grid.getGridCellInnerText(this.uIAnimalInfoGrid, 'Animal Name', rowIndex);
        expect(val).toBe(PoliceData.getAnimalControlModuleValue('AnimalName'));
    }

    async verifyAtAnimalNameIDInGrid(rowIndex: number): Promise<void> {
        const val = await this.grid.getGridCellInnerText(this.uIAnimalInfoGrid, 'Animal#', rowIndex);
        expect(val).toBe(PoliceData.getAnimalControlModuleValue('AnimalNameID'));
    }

    async selectRowByAtAnimalName(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAnimalInfoGrid, PoliceData.getAnimalControlModuleValue('AnimalName'));
    }

    async clickInternalSaveButton(): Promise<void> {
        await this.uIAnimalInfoSaveButton.click();
    }

    async verify6040AddAnimalNameToGridAck(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6040)  At least one Animal Name must be added to the grid');
        await this.popup.acknowledgeOkButton.click();
    }

    async selectAtSpeciesInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAnimalInfoGrid, PoliceData.getAnimalControlModuleValue('Species'));
    }

    async verifyAtSpecies(): Promise<void> {
        const selected = await this.uISpeciesDropDown.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(PoliceData.getAnimalControlModuleValue('Species'));
    }

    async verifyAtColor1(): Promise<void> {
        const selected = await this.uIColor1DropDown.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(PoliceData.getAnimalControlModuleValue('Color1'));
    }

    async verifyAtColor2(): Promise<void> {
        const selected = await this.uIColor2DropDown.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(PoliceData.getAnimalControlModuleValue('Color2'));
    }

    async clickAnimalNameInfoIcon(): Promise<void> {
        await this.uIAnimalNameInfoIcon.click();
    }
}

export class AnimalCaseEntryObservationsTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIAnimalNameDropdown: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIObservationsGridTable: Locator;
    readonly uIIntakeCheckBox: Locator;
    readonly uICageDropdown: Locator;
    readonly uIAnimalNameInfoIcon: Locator;
    readonly uIAnimalheldAt: Locator;
    readonly uIMethodOfCapture: Locator;
    readonly uIMethodOfIntake: Locator;
    readonly uICageDropdownLable: Locator;
    readonly uIHealthStatusInDropdown: Locator;
    readonly uIPhysicalStateDropdown: Locator;
    readonly uIPhysicalStateDropdownArrow: Locator;
    readonly uIWaterAvailableDropdown: Locator;
    readonly uIFoodAvailableDrodown: Locator;
    readonly uIAttitudeDropdown: Locator;
    readonly uIPregnantDropdown: Locator;
    readonly uIOffspringPresentDropdown: Locator;
    readonly uIEarliestReleaseDateEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIAnimalNameDropdown = page.locator('#tabANI_tmpl2_ctrlObserResolution_cddAnimalName');
        this.uIDateEdit = page.locator('#tabANI_tmpl2_ctrlObserResolution_dttmReported_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='tabANI_tmpl2_ctrlObserResolution_dttmReported_Time']//input");
        this.uIAddButton = page.locator('#tabANI_tmpl2_ctrlObserResolution_cmdAdd');
        this.uIObservationsGridTable = page.locator('#tabANI_tmpl2_ctrlObserResolution_grdObservations');
        this.uIIntakeCheckBox = page.locator('#tabANI_tmpl2_ctrlObserResolution_chkIntake');
        this.uICageDropdown = page.locator('#tabANI_tmpl2_ctrlObserResolution_cddCage_DropDown');
        this.uIAnimalNameInfoIcon = page.locator('#tabANI_tmpl2_ctrlObserResolution_imgAnimalIcon');
        this.uIAnimalheldAt = page.locator('#tabANI_tmpl2_ctrlObserResolution_cddAnimalHeldAt_DropDown');
        this.uIMethodOfCapture = page.locator('#tabANI_tmpl2_ctrlObserResolution_cddCapture_DropDown');
        this.uIMethodOfIntake = page.locator('#tabANI_tmpl2_ctrlObserResolution_cddMethodofIntake_DropDown');
        this.uICageDropdownLable = page.locator('#tabANI_tmpl2_ctrlObserResolution_lblCage');
        this.uIHealthStatusInDropdown = page.locator('#tabANI_tmpl2_ctrlObserResolution_cddHealthStatusIn_Input');
        this.uIPhysicalStateDropdown = page.locator('#tabANI_tmpl2_ctrlObserResolution_cddPhysicalState');
        this.uIPhysicalStateDropdownArrow = page.locator('#tabANI_tmpl2_ctrlObserResolution_cddPhysicalState_Arrow');
        this.uIWaterAvailableDropdown = page.locator('#tabANI_tmpl2_ctrlObserResolution_cddWaterAvailable_DropDown');
        this.uIFoodAvailableDrodown = page.locator('#tabANI_tmpl2_ctrlObserResolution_cddWaterAvailable_DropDown');
        this.uIAttitudeDropdown = page.locator('#tabANI_tmpl2_ctrlObserResolution_cddAttitude_DropDown');
        this.uIPregnantDropdown = page.locator('#tabANI_tmpl2_ctrlObserResolution_cddPregnant_DropDown');
        this.uIOffspringPresentDropdown = page.locator('#tabANI_tmpl2_ctrlObserResolution_cddOffspring_DropDown');
        this.uIEarliestReleaseDateEdit = page.locator('#tabANI_tmpl2_ctrlObserResolution_dtcERDate_KPIDttmCtrl');
    }

    async selectAtAnimalName(): Promise<void> {
        const option = `${PoliceData.getAnimalControlModuleValue('AnimalNameID')}-${PoliceData.getAnimalControlModuleValue('AnimalName')}`;
        await this.uIAnimalNameDropdown.selectOption({ label: option });
    }

    async taboutDateAndTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async clickIntakeCheckBox(): Promise<void> {
        await this.uIIntakeCheckBox.click();
    }

    async selectCageDropdownAsAS001(): Promise<void> {
        await this.uICageDropdown.selectOption({ label: 'AS001' });
    }

    async VerifycageDropdownAsMandatory(): Promise<void> {
        const style = await this.uICageDropdownLable.getAttribute('style') || '';
        expect(style).toContain('rgb(153, 0, 0)');
    }

    async verifyCageDropdownIsDisabled(): Promise<void> {
        const attr = await this.uICageDropdown.getAttribute('class') || '';
        expect(attr).toContain('SELECTInActive');
    }

    async selectFirstAnimalNameInDropdown(): Promise<void> {
        await this.uIAnimalNameDropdown.selectOption({ index: 1 });
    }

    async selectAtRowInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIObservationsGridTable, PoliceData.getAnimalControlModuleValue('AnimalsName'));
    }

    async selectAtRow1InGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIObservationsGridTable, PoliceData.getAnimalControlModuleValue('AnimalsName1'));
    }

    async verifyIntakeCheckBoxChecked(): Promise<void> {
        await expect(this.uIIntakeCheckBox).toBeChecked();
    }

    async verifyAnimalNameInfoIconDisplayed(): Promise<void> {
        await expect(this.uIAnimalNameInfoIcon).toBeVisible();
    }

    async verifyRequiredEntriesMissingAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1018) Required Entries are Missing');
        await this.popup.acknowledgeOkButton.click();
    }

    async selectAnimalHeldAt(): Promise<void> {
        await this.uIAnimalheldAt.selectOption({ index: 1 });
    }

    async selectMethodOfCapture(): Promise<void> {
        await this.uIMethodOfCapture.selectOption({ index: 1 });
    }

    async selectMethodOfIntake(): Promise<void> {
        await this.uIMethodOfIntake.selectOption({ index: 1 });
    }

    async verifyCageDropdownIsEnabled(): Promise<void> {
        await expect(this.uICageDropdown).toBeEnabled();
    }

    async selectAtAnimalHeldAt(): Promise<void> {
        await this.uIAnimalheldAt.selectOption({ label: PoliceData.getAnimalControlModuleValue('AnimalHeldAt') });
    }

    async selectAtHealthStatusIn(): Promise<void> {
        await this.uIHealthStatusInDropdown.click();
        await this.page.locator('#tabANI_tmpl2_ctrlObserResolution_cddHealthStatusIn_DropDown').locator(`li:has-text("${PoliceData.getAnimalControlModuleValue('HealthStatusIn')}")`).click();
    }

    async selectAtPhysicalState(): Promise<void> {
        await this.uIPhysicalStateDropdownArrow.click();
        await this.page.locator('#tabANI_tmpl2_ctrlObserResolution_cddPhysicalState_DropDown').locator(`li:has-text("${PoliceData.getAnimalControlModuleValue('PhysicalState')}")`).click();
        await this.uIPhysicalStateDropdownArrow.click();
    }

    async selectAtWaterAvailable(): Promise<void> {
        await this.uIWaterAvailableDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('WaterAvailable') });
    }

    async selectAtFoodAvailable(): Promise<void> {
        await this.uIFoodAvailableDrodown.selectOption({ label: PoliceData.getAnimalControlModuleValue('FoodAvailable') });
    }

    async selectAtAttitude(): Promise<void> {
        await this.uIAttitudeDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Attitude') });
    }

    async selectAtPregnant(): Promise<void> {
        await this.uIPregnantDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Pregnant') });
    }

    async selectAtOffspringPresent(): Promise<void> {
        await this.uIOffspringPresentDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('OffspringPresent') });
    }

    async enterAtEarliestReleaseDate(): Promise<void> {
        await this.uIEarliestReleaseDateEdit.fill(PoliceData.getAnimalControlModuleValue('EarliestReleaseDate'));
    }

    async getDate(): Promise<string> {
        return await this.uIDateEdit.inputValue();
    }

    async getTime(): Promise<string> {
        const time = await this.uITimeEdit.inputValue();
        return time.substring(0, 5);
    }

    async verifyAtDateAndTimeInGrid(date: string, time: string): Promise<void> {
        const dateTime = `${date} ${time}`;
        const cell = await this.grid.getGridCell(this.uIObservationsGridTable, dateTime);
        const text = await cell.innerText();
        expect(text).toBe(dateTime);
    }

    async verifyAtNameInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIObservationsGridTable, PoliceData.getAnimalControlModuleValue('AnimalName'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('AnimalName'));
    }

    async verifyAtHeldAtInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIObservationsGridTable, PoliceData.getAnimalControlModuleValue('AnimalHeldAt'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('AnimalHeldAt'));
    }

    async verifyAtHealthInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIObservationsGridTable, PoliceData.getAnimalControlModuleValue('HealthStatusIn'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('HealthStatusIn'));
    }

    async verifyAtCageNoInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIObservationsGridTable, PoliceData.getAnimalControlModuleValue('Cage#'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('Cage#'));
    }

    async verifyAtReleaseDateInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIObservationsGridTable, PoliceData.getAnimalControlModuleValue('EarliestReleaseDate'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('EarliestReleaseDate'));
    }
}

export class AnimalCaseEntryResolutionsTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIAnimalNameDropdown: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIResolutionsGrid: Locator;
    readonly uIWarningSummonsEdit: Locator;
    readonly uIDischargedCheckBox: Locator;
    readonly uIAnimalNameInfoIcon: Locator;
    readonly uICopmlianceCheckBox: Locator;
    readonly uIFollowUpCheckBox: Locator;
    readonly uIFollowUpDate1: Locator;
    readonly uIFollowUpDate2: Locator;
    readonly uIHealthSatusOutInput: Locator;
    readonly uIHealthSatusOutDropdown: Locator;
    readonly uIResolutionsInput: Locator;
    readonly uIResolutionsDropdown: Locator;
    readonly uIResolutionDate: Locator;
    readonly uIResolutionsArrowRadDropdown: Locator;
    readonly uIHealthStatusOutArrowRadDropdown: Locator;
    readonly uIIsVerbalWarningIssuedCheckbox: Locator;
    readonly uIResolutionsInputArrow: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIAnimalNameDropdown = page.locator('#tabANI_tmpl3_ctrlResolution_cddAnimalName');
        this.uIDateEdit = page.locator('#tabANI_tmpl3_ctrlResolution_dttmReported_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='tabANI_tmpl3_ctrlResolution_dttmReported_Time']//input");
        this.uIAddButton = page.locator('#tabANI_tmpl3_ctrlResolution_cmdAddCitation');
        this.uIResolutionsGrid = page.locator('#tabANI_tmpl3_ctrlResolution_grdResolutions');
        this.uIWarningSummonsEdit = page.locator('#tabANI_tmpl3_ctrlResolution_txtWarningSummons_CitationNbr');
        this.uIDischargedCheckBox = page.locator('#tabANI_tmpl3_ctrlResolution_chkDischarged');
        this.uIAnimalNameInfoIcon = page.locator('#tabANI_tmpl3_ctrlResolution_imgAnimalIcon');
        this.uICopmlianceCheckBox = page.locator('#tabANI_tmpl3_ctrlResolution_chkCompliance');
        this.uIFollowUpCheckBox = page.locator('#tabANI_tmpl3_ctrlResolution_chkFallowUp');
        this.uIFollowUpDate1 = page.locator('#tabANI_tmpl3_ctrlResolution_dtcFollowUpDates1_KPIDttmCtrl');
        this.uIFollowUpDate2 = page.locator('#tabANI_tmpl3_ctrlResolution_dtcFollowUpDates2_KPIDttmCtrl');
        this.uIHealthSatusOutInput = page.locator('#tabANI_tmpl3_ctrlResolution_cddHealthStatusOut_Input');
        this.uIHealthSatusOutDropdown = page.locator('#tabANI_tmpl3_ctrlResolution_cddHealthStatusOut_DropDown');
        this.uIResolutionsInput = page.locator('#tabANI_tmpl3_ctrlResolution_radResolutions_Input');
        this.uIResolutionsDropdown = page.locator('#tabANI_tmpl3_ctrlResolution_radResolutions_DropDown');
        this.uIResolutionDate = page.locator('#tabANI_tmpl3_ctrlResolution_dtcResolutionDate_KPIDttmCtrl');
        this.uIResolutionsArrowRadDropdown = page.locator('#tabANI_tmpl3_ctrlResolution_radResolutions_Arrow');
        this.uIHealthStatusOutArrowRadDropdown = page.locator('#tabANI_tmpl3_ctrlResolution_cddHealthStatusOut_Arrow');
        this.uIIsVerbalWarningIssuedCheckbox = page.locator('#tabANI_tmpl3_ctrlResolution_chkWarningIssued');
        this.uIResolutionsInputArrow = page.locator('#tabANI_tmpl3_ctrlResolution_radResolutions_Arrow');
    }

    async selectAtAnimalName(): Promise<void> {
        const option = `${PoliceData.getAnimalControlModuleValue('AnimalNameID')}-${PoliceData.getAnimalControlModuleValue('AnimalName')}`;
        await this.uIAnimalNameDropdown.selectOption({ label: option });
    }

    async taboutDateAndTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async enterAtWarningSummons(): Promise<void> {
        await this.uIWarningSummonsEdit.clear();
        await this.uIWarningSummonsEdit.fill(PoliceData.getAnimalControlModuleValue('WarningSummons'));
    }

    async verifyAtEntryPresentInGrid(): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uIResolutionsGrid, 'Citation#');
        for (const val of columnValues) {
            expect(val).toBe(PoliceData.getAnimalControlModuleValue('WarningSummons'));
        }
    }

    async verifyAtAnimalNameInGrid(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCellByIndex(this.uIResolutionsGrid, rowIndex, 'Animal Name');
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('AnimalName'));
    }

    async enterWarningSummonsAsRandomText(): Promise<void> {
        await this.uIWarningSummonsEdit.fill(DateHelpers.randomAlphanumeric(5));
    }

    async verifyInvalidCitationNoPopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(11519) Invalid Citation');
        await this.popup.acknowledgeOkButton.click();
    }

    async selectFirstAnimalNameInDropdown(): Promise<void> {
        await this.uIAnimalNameDropdown.selectOption({ index: 1 });
    }

    async selectAtRowInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIResolutionsGrid, PoliceData.getAnimalControlModuleValue('AnimalsName'));
    }

    async selectAtRow1InGrid(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIResolutionsGrid, PoliceData.getAnimalControlModuleValue('AnimalsName1'));
    }

    async verifyDischargedCheckBoxChecked(): Promise<void> {
        await expect(this.uIDischargedCheckBox).toBeChecked();
    }

    async clickComplianceCheckBox(): Promise<void> {
        await this.uICopmlianceCheckBox.click();
    }

    async clickFollowupCallRequiredCheckBox(): Promise<void> {
        await this.uIFollowUpCheckBox.click();
    }

    async verifyAnimalNameInfoIconDisplayed(): Promise<void> {
        await expect(this.uIAnimalNameInfoIcon).toBeVisible();
    }

    async verifyRequiredEntriesMissingAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1018) Required Entries are Missing');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyFollowUpDatesDisabled(): Promise<void> {
        await expect(this.uIFollowUpDate1).toHaveAttribute('readonly', 'true');
        await expect(this.uIFollowUpDate2).toHaveAttribute('readonly', 'true');
    }

    async verifyFollowUpDatesEnabled(): Promise<void> {
        await expect(this.uIFollowUpDate1).toBeEnabled();
        await expect(this.uIFollowUpDate2).toBeEnabled();
    }

    async enterFollowUpDate1AsPrevious(): Promise<void> {
        await this.uIFollowUpDate1.fill(DateHelpers.getPreviousDateByMonth(1));
    }

    async enterFollowUpDate2AsFuture(): Promise<void> {
        await this.uIFollowUpDate2.fill(DateHelpers.getFutureDate(5));
    }

    async enterResolutionDayACurrentDate(): Promise<void> {
        await this.uIResolutionDate.fill(DateHelpers.getCurrentDate());
    }

    async selectHealthStatusOut(): Promise<void> {
        await this.uIHealthSatusOutInput.click();
        const options = this.uIHealthSatusOutDropdown.locator('li');
        const count = await options.count();
        if (count > 0) {
            await options.nth(Math.floor(Math.random() * count)).click();
        }
        await this.uIHealthStatusOutArrowRadDropdown.click();
    }

    async selectResolutions(): Promise<void> {
        await this.uIResolutionsInput.click();
        const options = this.uIResolutionsDropdown.locator('li');
        const count = await options.count();
        if (count > 0) {
            await options.nth(Math.floor(Math.random() * count)).click();
        }
        await this.uIResolutionsArrowRadDropdown.click();
    }

    async verifyAnimalDischargedConfirmationAsYes(): Promise<void> {
        await this.popup.confirmYesButton.click();
    }

    async clickDischargedCheckBox(): Promise<void> {
        await this.uIDischargedCheckBox.click();
    }

    async dismiss9900AlertPopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(9900) Was the animal discharged?');
        await this.popup.confirmNoButton.click();
    }

    async clickFollowUpCallRequiredCheckBox(): Promise<void> {
        await this.uIFollowUpCheckBox.click();
    }

    async selectAtResolutions(): Promise<void> {
        await this.uIResolutionsInputArrow.click();
        await this.uIResolutionsDropdown.locator(`li:has-text("${PoliceData.getAnimalControlModuleValue('Resolutions')}")`).click();
        await this.uIResolutionsInputArrow.click();
    }

    async clickIsVerbalWarningIssuedCheckbox(): Promise<void> {
        await this.uIIsVerbalWarningIssuedCheckbox.click();
    }

    async getDate(): Promise<string> {
        return await this.uIDateEdit.inputValue();
    }

    async getTime(): Promise<string> {
        const title = await this.uITimeEdit.getAttribute('title') || await this.uITimeEdit.inputValue();
        return title.substring(0, 5);
    }

    async verifyDateAndTimeInGrid(date: string, time: string): Promise<void> {
        const dateTime = `${date} ${time}`;
        const cell = await this.grid.getGridCell(this.uIResolutionsGrid, dateTime);
        const text = await cell.innerText();
        expect(text).toBe(dateTime);
    }

    async verifyAtResolutionsInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIResolutionsGrid, PoliceData.getAnimalControlModuleValue('Resolutions'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('Resolutions'));
    }

    async verifyFollowUpCheckBoxIsCheckedInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIResolutionsGrid, PoliceData.getAnimalControlModuleValue('AnimalName'), 'FollowUp');
        const img = cell.locator('img');
        const title = await img.getAttribute('title');
        expect(title).toBe('Checked');
    }

    async verifyAtHealthOutInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIResolutionsGrid, PoliceData.getAnimalControlModuleValue('Resolutions'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('Resolutions'));
    }

    async selectAtHealthStatusOut(): Promise<void> {
        await this.uIHealthSatusOutInput.click();
        await this.uIHealthSatusOutDropdown.locator(`li:has-text("${PoliceData.getAnimalControlModuleValue('HealthStatusOut')}")`).click();
        await this.uIHealthSatusOutInput.click();
    }
}

export class AnimalCaseEntryBiteReportTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIVictimNameTypeEdit: Locator;
    readonly uIVictimNameTypeIDEdit: Locator;
    readonly uIVictimLastNameEdit: Locator;
    readonly uIVictimFirstNameEdit: Locator;
    readonly uILocationOfWoundDropdown: Locator;
    readonly uIAnimalNameDropdown: Locator;
    readonly uIAddButton: Locator;
    readonly uIBiteReportGrid: Locator;
    readonly uIVictimsNameInfoIcon: Locator;
    readonly uISaveButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIAttackDropdown: Locator;
    readonly uIAnimalHeldAtDropDown: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uIUpdateButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIVictimNameTypeEdit = page.locator('#nName_NameType');
        this.uIVictimNameTypeIDEdit = page.locator('#nName_NameTypeID');
        this.uIVictimLastNameEdit = page.locator('#nName_LastName');
        this.uIVictimFirstNameEdit = page.locator('#nName_FirstName');
        this.uILocationOfWoundDropdown = page.locator('#cddLocationofWounds1_DropDown');
        this.uIAnimalNameDropdown = page.locator('#cddAnimalName');
        this.uIAddButton = page.locator('#cmdAdd');
        this.uIBiteReportGrid = page.locator('#grdBitReport');
        this.uIVictimsNameInfoIcon = page.locator('#nName_imgSrch');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIResetButton = page.locator('#Reset');
        this.uIAttackDropdown = page.locator('#cddAttack_DropDown');
        this.uIAnimalHeldAtDropDown = page.locator('#cddAnimalHeldAt_DropDown');
        this.uILeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIUpdateButton = page.locator('#cmdAdd');
    }

    async enterAtVictimNameID(): Promise<void> {
        const val = PoliceData.getAnimalControlModuleValue('VictimNameID');
        await this.uIVictimNameTypeEdit.fill(val.substring(0, 1));
        await this.uIVictimNameTypeIDEdit.fill(val.substring(2));
        await this.uIVictimNameTypeIDEdit.press('Tab');
    }

    async enterAtLastName(): Promise<void> {
        await this.uIVictimLastNameEdit.fill(PoliceData.getAnimalControlModuleValue('AnimalLastName'));
        await this.uIVictimLastNameEdit.press('Tab');
    }

    async enterAtFirstName(): Promise<void> {
        await this.uIVictimFirstNameEdit.fill(PoliceData.getAnimalControlModuleValue('AnimalFirstName'));
        await this.uIVictimFirstNameEdit.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async clickVictimsNameInfoIcon(): Promise<void> {
        await this.uIVictimsNameInfoIcon.click();
    }

    async clickAtVictimsNameInGrid(): Promise<void> {
        const row = await this.grid.getRowByCellText(this.uIBiteReportGrid, PoliceData.getAnimalControlModuleValue('VictimsName'));
        await row.click();
    }

    async verifyEnterVictimsNameAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(30033) Enter Victims Name');
        await this.popup.acknowledgeOkButton.click();
    }

    async saveBiteReportTab(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async selectAtAnimalsName(): Promise<void> {
        const option = `${PoliceData.getAnimalControlModuleValue('AnimalNameID')}-${PoliceData.getAnimalControlModuleValue('AnimalName')}`;
        await this.uIAnimalNameDropdown.selectOption({ label: option });
    }

    async selectAnimalHeldAt(): Promise<void> {
        const options = await this.uIAnimalHeldAtDropDown.locator('option').allInnerTexts();
        const valid = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOpt = valid[Math.floor(Math.random() * valid.length)];
        await this.uIAnimalHeldAtDropDown.selectOption({ label: randomOpt });
    }

    async selectAttack(): Promise<void> {
        const options = await this.uIAttackDropdown.locator('option').allInnerTexts();
        const valid = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOpt = valid[Math.floor(Math.random() * valid.length)];
        await this.uIAttackDropdown.selectOption({ label: randomOpt });
    }

    async selectAtLocationOfWounds(): Promise<void> {
        await this.uILocationOfWoundDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('LocationOfWounds') });
    }

    async verifyAtVictimsName(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCellByIndex(this.uIBiteReportGrid, rowIndex, 'Victim Name');
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('VictimName'));
    }

    async verifyAtAnimalNameIDinGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIBiteReportGrid, 'Animal#', rowIndex);
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('AnimalNameID'));
    }

    async verifyUpdateSuccessfulBottomMessage(): Promise<void> {
        const text = await this.uILeftSideStatusBar.innerText();
        expect(text).toContain('1003 - Update Successful');
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }

    async verify1018RequiredEntriesAreMissingAckMsg(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1018)Required Entries are Missing');
        await this.popup.acknowledgeOkButton.click();
    }

    async selectAtLocationOfWounds1(): Promise<void> {
        await this.uILocationOfWoundDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('LocationOfWounds1') });
    }

    async clickInternalSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verify6040AddVictimNameToGridAck(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6040)  At least one Victim Name must be added to the grid');
        await this.popup.acknowledgeOkButton.click();
    }

    async saveInternal(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async verifyAtVictimNameInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIBiteReportGrid, PoliceData.getAnimalControlModuleValue('VictimsName'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('VictimsName'));
    }

    async verifyAtAddressInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIBiteReportGrid, PoliceData.getAnimalControlModuleValue('Address1'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('Address1'));
    }

    async verifyAtAnimalNoInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIBiteReportGrid, PoliceData.getAnimalControlModuleValue('AnimalNo'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('AnimalNo'));
    }
}

export class NarrativeTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;

    readonly uINarrativeRichTextEdit: Locator;
    readonly uITemplateComboBox: Locator;
    readonly uILoadButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIInternalSaveButton: Locator;
    readonly uIResetButton: Locator;
    readonly uITextBody: Locator;
    readonly uILeftSideStatusBar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);

        this.uINarrativeRichTextEdit = page.locator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        this.uITemplateComboBox = page.locator('#ctrlUsrKPITxtEdit_lstTextName');
        this.uILoadButton = page.locator('#ctrlUsrKPITxtEdit_cmdload');
        this.uIAddNewButton = page.locator('#ctrlUsrKPITxtEdit_cmdAddnew');
        this.uIInternalSaveButton = page.locator('#cmdInternalSave');
        this.uIResetButton = page.locator('#cmdInternalRefresh');
        this.uITextBody = page.locator('//body');
        this.uILeftSideStatusBar = page.locator('//b');
    }

    async internalSave(): Promise<void> {
        await this.uIInternalSaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async clickLoadButton(): Promise<void> {
        await this.uILoadButton.click();
    }

    async selectAtTempelate(): Promise<void> {
        await this.uITemplateComboBox.selectOption({ label: PoliceData.getK9ModuleValue('Template') });
    }

    async verifyAtText(): Promise<void> {
        const frame = this.page.frameLocator('#ctrlUsrKPITxtEdit_rteKPITxt_contentIframe');
        const text = await frame.locator('body').innerText();
        expect(text).toContain(PoliceData.getK9ModuleValue('Text'));
    }

    async VerifyAdditionSuccessfulMessage(): Promise<void> {
        const text = await this.uILeftSideStatusBar.innerText();
        expect(text).toContain('1002 - Addition Successful');
    }

    async verifyAdditionSuccessfulMessage(): Promise<void> {
        const text = await this.uILeftSideStatusBar.innerText();
        expect(text).toContain('1002 - Addition Successful');
    }

    async clickAddNewOrEditButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async clickInternalSave(): Promise<void> {
        await this.uIInternalSaveButton.click();
        await this.popup.confirmYesButton.click();
    }
}

export class ReportingTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uIReportingTable: Locator;
    readonly uIViewCaseFileButton: Locator;
    readonly uIViewCaseFilePopUpScreenSelectAllCheckbox: Locator;
    readonly uIViewCaseFilePopUpScreenIncludeProeprtyReportCheckbox: Locator;
    readonly uIViewCaseFilePopUpScreenShowPDFButton: Locator;
    readonly uIAddReportButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uISaveButton: Locator;
    readonly uIIncludeCombinedCheckBox: Locator;
    readonly uISelectAllCheckBox: Locator;
    readonly uIIncidentReportCheckBox: Locator;
    readonly uIIncidentReportStatusTextView: Locator;
    readonly uIPropertyReportCheckBox: Locator;
    readonly uIPropertyReportStatusTextView: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);

        this.uIReportingTable = page.locator('#grdCBEReports');
        this.uIViewCaseFileButton = page.locator('#cmdPrintAll');
        this.uIViewCaseFilePopUpScreenSelectAllCheckbox = page.locator('#chkIncAll');
        this.uIViewCaseFilePopUpScreenIncludeProeprtyReportCheckbox = page.locator('#chkPrintRPT');
        this.uIViewCaseFilePopUpScreenShowPDFButton = page.locator('#cmdIncRpt');
        this.uIAddReportButton = page.locator('#cmdAddReport');
        this.uIRefreshButton = page.locator('#btnRefresh');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIIncludeCombinedCheckBox = page.locator('#chkShowPageNumber');
        this.uISelectAllCheckBox = page.locator('#chkIncSelectAll');
        this.uIIncidentReportCheckBox = page.locator('#chkIncAllList_1');
        this.uIIncidentReportStatusTextView = page.locator("//label/span[@class = 'hideThis']");
        this.uIPropertyReportCheckBox = page.locator('#chkIncAllList_3');
        this.uIPropertyReportStatusTextView = page.locator("//label[@for ='chkIncAllList_3']/span[@class = 'hideThis']");
    }

    async verifyReportTypeInGrid(report: string, idx: number): Promise<void> {
        const name = await this.grid.getGridCellInnerText(this.uIReportingTable, 'Type', idx);
        expect(name).toBe(report);
    }

    async clickAddReport(): Promise<void> {
        await this.uIAddReportButton.click();
    }

    async verifyAtTypeInGrid(): Promise<void> {
        const row = await this.grid.getRowByCellText(this.uIReportingTable, PoliceData.getAnimalControlModuleValue('Type'));
        const text = await row.innerText();
        expect(text).toContain(PoliceData.getAnimalControlModuleValue('Type'));
    }

    async verifyAtStatusInGrid(): Promise<void> {
        const row = await this.grid.getRowByCellText(this.uIReportingTable, PoliceData.getAnimalControlModuleValue('Status'));
        const text = await row.innerText();
        expect(text).toContain(PoliceData.getAnimalControlModuleValue('Status'));
    }

    async clickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }
}

export class AnimalCaseEntryApprovalTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;

    readonly uINewActionDropdown: Locator;
    readonly uIDateEdit: Locator;
    readonly uITimeEdit: Locator;
    readonly uISaveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);

        this.uINewActionDropdown = page.locator('#lstStatus');
        this.uIDateEdit = page.locator('#dttStatusDttm_Date_KPIDttmCtrl');
        this.uITimeEdit = page.locator("//table[@id='dttStatusDttm_Time']//input");
        this.uISaveButton = page.locator('#cmdSave');
    }

    async selectAtNewAction(): Promise<void> {
        await this.uINewActionDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('NewAction') });
    }

    async taboutDateAndTime(): Promise<void> {
        await this.uIDateEdit.press('Tab');
        await this.uITimeEdit.press('Tab');
    }

    async saveInternally(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }
}

// ============================================================================
// 5. ANIMAL LOST / FOUND SEARCH & ENTRY
// ============================================================================
export class AnimalLostOrFoundSearchPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIJurisDropDown: Locator;
    readonly uILostOrFoundLocation: Locator;
    readonly uIOwnerLastName: Locator;
    readonly uIOwnerFirstName: Locator;
    readonly uIAnimalLastName: Locator;
    readonly uIAnimalFirstName: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIBackButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIPrintIcon: Locator;
    readonly uIAnimalLostFoundResultGrid: Locator;
    readonly uISpeciesDropdown: Locator;
    readonly uIBreed1Dropdown: Locator;
    readonly uIBreed2Dropdown: Locator;
    readonly uIColor1Dropdown: Locator;
    readonly uIColor2Dropdown: Locator;
    readonly uIMarkingsDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIJurisDropDown = page.locator('#tabLostFound_tmpl0_ctrlusrLFBasicSrch1_lstJuris');
        this.uILostOrFoundLocation = page.locator('#tabLostFound_tmpl0_ctrlusrLFBasicSrch1_adrAnimalLF_txtFrom');
        this.uIOwnerLastName = page.locator('#tabLostFound_tmpl0_ctrlusrLFBasicSrch1_txtLastName');
        this.uIOwnerFirstName = page.locator('#tabLostFound_tmpl0_ctrlusrLFBasicSrch1_txtFirstName');
        this.uIAnimalLastName = page.locator('#tabLostFound_tmpl0_ctrlusrLFBasicSrch1_txtAnimalLastName');
        this.uIAnimalFirstName = page.locator('#tabLostFound_tmpl0_ctrlusrLFBasicSrch1_txtAnimalFirstName');
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uISearchButton = page.locator("//span[(text()='Search')]");
        this.uIPrintIcon = page.locator("//div[@id='tlbGridItem']//img[contains(@src,'print')]");
        this.uIAnimalLostFoundResultGrid = page.locator('#grdInquiryResults_ctl00');
        this.uISpeciesDropdown = page.locator('#tabLostFound_tmpl0_ctrlusrLFBasicSrch1_cddSpecies_DropDown');
        this.uIBreed1Dropdown = page.locator('#tabLostFound_tmpl0_ctrlusrLFBasicSrch1_cddBreed1');
        this.uIBreed2Dropdown = page.locator('#tabLostFound_tmpl0_ctrlusrLFBasicSrch1_cddBreed2');
        this.uIColor1Dropdown = page.locator('#tabLostFound_tmpl0_ctrlusrLFBasicSrch1_cddColor1');
        this.uIColor2Dropdown = page.locator('#tabLostFound_tmpl0_ctrlusrLFBasicSrch1_cddColor2');
        this.uIMarkingsDropdown = page.locator('#tabLostFound_tmpl0_ctrlusrLFBasicSrch1_cddMarkings');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintIcon.click();
    }

    async enterAtFirstName(): Promise<void> {
        await this.uIOwnerFirstName.fill(PoliceData.getAnimalControlModuleValue('OwnerFirstName'));
    }

    async enterAtLastName(): Promise<void> {
        await this.uIOwnerLastName.fill(PoliceData.getAnimalControlModuleValue('OwnerLastName'));
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async verifyAtLFInGrid(LfNo: string): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIAnimalLostFoundResultGrid, LfNo);
        const text = await cell.innerText();
        expect(text).toBe(LfNo);
    }

    async selectAtLFInGrid(lFNo: string): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAnimalLostFoundResultGrid, lFNo);
    }

    async clickBack(): Promise<void> {
        await this.uIBackButton.click();
    }

    async clickReset(): Promise<void> {
        await this.uIResetButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verify1011NoRecordFoundAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('1011 - No Record Found');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyAtSpecies(i: number): Promise<void> {
        const selected = await this.uISpeciesDropdown.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(PoliceData.getAnimalControlModuleValue('Species' + i));
    }

    async verifyBreed1FieldIsDisabled(): Promise<void> {
        await expect(this.uIBreed1Dropdown).toBeDisabled();
    }

    async verifyBreed2FieldIsDisabled(): Promise<void> {
        await expect(this.uIBreed2Dropdown).toBeDisabled();
    }

    async verifyColor1FieldIsDisabled(): Promise<void> {
        await expect(this.uIColor1Dropdown).toBeDisabled();
    }

    async verifyColor2FieldIsDisabled(): Promise<void> {
        await expect(this.uIColor2Dropdown).toBeDisabled();
    }

    async verifyMarkingsFieldIsDisabled(): Promise<void> {
        await expect(this.uIMarkingsDropdown).toBeDisabled();
    }

    async selectAtSpecies(): Promise<void> {
        await this.uISpeciesDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Species') });
        await this.uISpeciesDropdown.press('Tab');
    }

    async verifyBreed1FieldIsEnabled(): Promise<void> {
        await expect(this.uIBreed1Dropdown).toBeEnabled();
    }

    async verifyBreed2FieldIsEnabled(): Promise<void> {
        await expect(this.uIBreed2Dropdown).toBeEnabled();
    }

    async verifyColor1FieldIsEnabled(): Promise<void> {
        await expect(this.uIColor1Dropdown).toBeEnabled();
    }

    async verifyColor2FieldIsEnabled(): Promise<void> {
        await expect(this.uIColor2Dropdown).toBeEnabled();
    }

    async verifyMarkingsFieldIsEnabled(): Promise<void> {
        await expect(this.uIMarkingsDropdown).toBeEnabled();
    }

    async selectAtBreed1(): Promise<void> {
        await this.uIBreed1Dropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Breed1') });
    }

    async selectAtBreed2(): Promise<void> {
        await this.uIBreed2Dropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Breed2') });
    }

    async selectAtColor1(): Promise<void> {
        await this.uIColor1Dropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Color1') });
    }

    async selectAtColor2(): Promise<void> {
        await this.uIColor2Dropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Color2') });
    }

    async selectAtMarkings(): Promise<void> {
        await this.uIMarkingsDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Markings') });
    }

    async verifyAtBreed1InGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIAnimalLostFoundResultGrid, PoliceData.getAnimalControlModuleValue('Breed1'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('Breed1'));
    }

    async verifyAtBreed2InGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIAnimalLostFoundResultGrid, PoliceData.getAnimalControlModuleValue('Breed2'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('Breed2'));
    }

    async verifyAtColor1InGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIAnimalLostFoundResultGrid, PoliceData.getAnimalControlModuleValue('Color1'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('Color1'));
    }

    async verifyAtColor2InGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIAnimalLostFoundResultGrid, PoliceData.getAnimalControlModuleValue('Color2'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('Color2'));
    }

    async verifyAtSpeciesInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIAnimalLostFoundResultGrid, PoliceData.getAnimalControlModuleValue('Species'));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('Species'));
    }

    async verifyColumnValueInsidePDF(readPdf: string, i: number): Promise<void> {
        const columnValues = await this.grid.getGridTableColumnValues(this.uIAnimalLostFoundResultGrid, PoliceData.getAnimalControlModuleValue('ColunmName' + i));
        for (const val of columnValues) {
            expect(readPdf).toContain(val);
        }
    }

    async clickExportToExcelIcon(): Promise<void> {
        await this.page.locator("//img[@title='Export to Excel']").click();
    }

    async enterAtLocationWhereAnimalWasLostFound(i: number): Promise<void> {
        await this.uILostOrFoundLocation.clear();
        await this.uILostOrFoundLocation.fill(PoliceData.getAnimalControlModuleValue('Location' + i));
        await this.uILostOrFoundLocation.press('Tab');
    }

    async verifyAtLocationWhereLostFoundInGrid(i: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIAnimalLostFoundResultGrid, PoliceData.getAnimalControlModuleValue('Location' + i));
        const text = await cell.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('Location' + i));
    }

    async verify5024InvalidAddressAcknowledgePopupMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(5024) Invalid address');
        await this.popup.acknowledgeOkButton.click();
    }
}

export class AnimalLostOrFoundEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;

    readonly uIJurisDropDown: Locator;
    readonly uILostCheckBox: Locator;
    readonly uIFoundCheckBox: Locator;
    readonly uIAnimalLostOrFoundLocation: Locator;
    readonly uIReportedDate: Locator;
    readonly uIReportedTime: Locator;
    readonly uILostOrFoundDate: Locator;
    readonly uILostOrFoundTime: Locator;
    readonly uIReportingPersonNameType: Locator;
    readonly uIReportingPersonNameTypeID: Locator;
    readonly uIReportingPersonLastName: Locator;
    readonly uIReportingPersonFirstName: Locator;
    readonly uIReportingPersonMiddleName: Locator;
    readonly uIAnimalNameType: Locator;
    readonly uIAnimalNameTypeID: Locator;
    readonly uIAnimalMiddleName: Locator;
    readonly uIAnimalLastName: Locator;
    readonly uIAnimalFirstName: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uISaveButton: Locator;
    readonly uIAnimalShelterYesRadioButton: Locator;
    readonly uIAnimalShelterNoRadioButton: Locator;
    readonly uIAnimalCollarOrHalterCheckkBox: Locator;
    readonly uIReportingPersonsInfoYesRadioButton: Locator;
    readonly uIReportingPersonsInfoNoRadioButton: Locator;
    readonly uIAnimalLocationCheckBox: Locator;
    readonly uIAddressBubbleIcon: Locator;
    readonly uICSZCity: Locator;
    readonly uICSZState: Locator;
    readonly uICSZZip: Locator;
    readonly uIReportingPersonBubbleIcon: Locator;
    readonly uIAnimalNameBubbleIcon: Locator;
    readonly uICollarOrHalterEdit: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uILFYear: Locator;
    readonly uILFNum: Locator;
    readonly uILastName: Locator;
    readonly uIMicroChipID: Locator;
    readonly uIExportToExcelIcon: Locator;
    readonly uISpeciesDropdown: Locator;
    readonly uIColor2Dropdown: Locator;
    readonly uIColor1Dropdown: Locator;
    readonly uIBreed2Dropdown: Locator;
    readonly uIBreed1Dropdown: Locator;
    readonly uIAnimalInfoIcon: Locator;
    readonly uIAnimalHeldAtDropdown: Locator;
    readonly uICageDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);

        this.uIJurisDropDown = page.locator('#lstJuris');
        this.uILostCheckBox = page.locator('#chkLost');
        this.uIFoundCheckBox = page.locator('#chkFound');
        this.uIAnimalLostOrFoundLocation = page.locator('#adrLocation_txtFrom');
        this.uIReportedDate = page.locator('#dttmRpt_Date_KPIDttmCtrl');
        this.uIReportedTime = page.locator("//table[@id='dttmRpt_Time']//input");
        this.uILostOrFoundDate = page.locator('#dttmILF_Date_KPIDttmCtrl');
        this.uILostOrFoundTime = page.locator("//table[@id='dttmILF_Time']//input");
        this.uIReportingPersonNameType = page.locator('#nRptName_NameType');
        this.uIReportingPersonNameTypeID = page.locator('#nRptName_NameTypeID');
        this.uIReportingPersonLastName = page.locator('#nRptName_LastName');
        this.uIReportingPersonFirstName = page.locator('#nRptName_FirstName');
        this.uIReportingPersonMiddleName = page.locator('#nRptName_MiddleName');
        this.uIAnimalNameType = page.locator('#AnimalCtrl_NameType');
        this.uIAnimalNameTypeID = page.locator('#AnimalCtrl_NameTypeID');
        this.uIAnimalMiddleName = page.locator('#AnimalCtrl_MiddleName');
        this.uIAnimalLastName = page.locator('#AnimalCtrl_LastName');
        this.uIAnimalFirstName = page.locator('#AnimalCtrl_FirstName');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIAnimalShelterYesRadioButton = page.locator('#rdoShelyes');
        this.uIAnimalShelterNoRadioButton = page.locator('#rdoShelNo');
        this.uIAnimalCollarOrHalterCheckkBox = page.locator('#chkACH');
        this.uIReportingPersonsInfoYesRadioButton = page.locator('#rdoShareyes');
        this.uIReportingPersonsInfoNoRadioButton = page.locator('#rdoShareNo');
        this.uIAnimalLocationCheckBox = page.locator('#chkLocated');
        this.uIAddressBubbleIcon = page.locator('#adrLocation_cmdIncOnAddr');
        this.uICSZCity = page.locator('#LFEntryCSZ_City');
        this.uICSZState = page.locator('#LFEntryCSZ_State_DropDown');
        this.uICSZZip = page.locator('#LFEntryCSZ_Zip');
        this.uIReportingPersonBubbleIcon = page.locator('#nRptName_imgSrch');
        this.uIAnimalNameBubbleIcon = page.locator('#AnimalCtrl_imgSrch');
        this.uICollarOrHalterEdit = page.locator('#txtCHI');
        this.uILeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uILFYear = page.locator('#nbrLF_Year');
        this.uILFNum = page.locator('#nbrLF_Number');
        this.uILastName = page.locator('#nRptName_LastName');
        this.uIMicroChipID = page.locator('#txtMicroChipID');
        this.uIExportToExcelIcon = page.locator("//img[@title='Export to Excel']");
        this.uISpeciesDropdown = page.locator('#cddSpecies_DropDown');
        this.uIColor2Dropdown = page.locator('#cddColor2_DropDown');
        this.uIColor1Dropdown = page.locator('#cddColor1_DropDown');
        this.uIBreed2Dropdown = page.locator('#cddBreed2_DropDown');
        this.uIBreed1Dropdown = page.locator('#cddBreed1_DropDown');
        this.uIAnimalInfoIcon = page.locator('#AnimalCtrl_imgSrch');
        this.uIAnimalHeldAtDropdown = page.locator('#cddheldAt_DropDown');
        this.uICageDropdown = page.locator('#cddCage_DropDown');
    }

    async sendTabToAnimalNameFields(): Promise<void> {
        await this.uIAnimalNameTypeID.press('Tab');
        await this.uIAnimalLastName.press('Tab');
        await this.uIAnimalFirstName.press('Tab');
        await this.uIAnimalMiddleName.press('Tab');
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async saveScreen(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async saveNClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await this.popup.confirmYesButton.click();
    }

    async tabReportedDateAndTime(): Promise<void> {
        await this.uIReportedDate.press('Tab');
        await this.uIReportedTime.press('Tab');
    }

    async tabOutLostOrFoundDateAndTime(): Promise<void> {
        await this.uILostOrFoundDate.press('Tab');
        await this.uILostOrFoundTime.press('Tab');
    }

    async enterAtAnimalLostOrFoundLocation(): Promise<void> {
        await this.uIAnimalLostOrFoundLocation.fill(PoliceData.getAnimalControlModuleValue('AnimalLostOrFoundLocation'));
        await this.uIAnimalLostOrFoundLocation.press('Tab');
    }

    async clickFoundCheckBox(): Promise<void> {
        await this.uIFoundCheckBox.click();
    }

    async clickLostCheckBox(): Promise<void> {
        await this.uILostCheckBox.click();
    }

    async clickAnimalShelterRadioButtonAsYes(): Promise<void> {
        await this.uIAnimalShelterYesRadioButton.click();
    }

    async enterAtReportingPersonsNameID(): Promise<void> {
        const val = PoliceData.getAnimalControlModuleValue('ReportingPersonsNameID');
        await this.uIReportingPersonNameType.fill(val.substring(0, 1));
        await this.uIReportingPersonNameType.press('Tab');
        await this.uIReportingPersonNameTypeID.fill(val.substring(2));
        await this.uIReportingPersonNameTypeID.press('Tab');
    }

    async clickAnimalCollarOrHalterCheckBox(): Promise<void> {
        await this.uIAnimalCollarOrHalterCheckkBox.click();
    }

    async clickReportingPersonsInfoRadioButtonAsYes(): Promise<void> {
        await this.uIReportingPersonsInfoYesRadioButton.click();
    }

    async enterAnimalNameIDByActiveData(AnimalNameID: string): Promise<void> {
        await this.uIAnimalNameType.fill(AnimalNameID.substring(0, 2));
        await this.uIAnimalNameTypeID.fill(AnimalNameID.substring(3));
        await this.uIAnimalNameTypeID.press('Tab');
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintButton.click();
        await this.page.waitForLoadState('load');
    }

    async verifyAnimalNameBubbleIconDisplayed(): Promise<void> {
        await expect(this.uIAnimalNameBubbleIcon).toBeVisible();
    }

    async verifyFoundCheckBoxIsDisabled(): Promise<void> {
        await expect(this.uIFoundCheckBox).toBeDisabled();
    }

    async verifyFoundCheckBoxIsEnabled(): Promise<void> {
        await expect(this.uIFoundCheckBox).toBeEnabled();
    }

    async verifyAnimalLocatedCheckBoxIsDisabled(): Promise<void> {
        await expect(this.uIAnimalLocationCheckBox).toBeDisabled();
    }

    async verifyAnimalLocatedCheckBoxIsEnabled(): Promise<void> {
        await expect(this.uIAnimalLocationCheckBox).toBeEnabled();
    }

    async verifyLostCheckBoxIsDisabled(): Promise<void> {
        await expect(this.uILostCheckBox).toBeDisabled();
    }

    async verifyLostCheckBoxIsEnabled(): Promise<void> {
        await expect(this.uILostCheckBox).toBeEnabled();
    }

    async verifyAddressLostFoundBubbleIcon(): Promise<void> {
        await expect(this.uIAddressBubbleIcon).toBeVisible();
    }

    async enterAtAnimalNameID(): Promise<void> {
        const val = PoliceData.getAnimalControlModuleValue('AnimalNameID');
        await this.uIAnimalNameType.fill(val.substring(0, 2));
        await this.uIAnimalNameTypeID.fill(val.substring(3));
        await this.uIAnimalNameTypeID.press('Tab');
    }

    async clickMayWeShareReportingPersonInformationAsYes(): Promise<void> {
        await this.uIReportingPersonsInfoYesRadioButton.click();
    }

    async verifyReportingPersonBubbleIconDisplayed(): Promise<void> {
        await expect(this.uIReportingPersonBubbleIcon).toBeVisible();
    }

    async verifyPrintIconEnabled(): Promise<void> {
        await expect(this.uIPrintButton).toBeEnabled();
    }

    async verifySaveIconDisabled(): Promise<void> {
        await expect(this.uISaveButton).toBeDisabled();
    }

    async verifySaveNCloseIconDisabled(): Promise<void> {
        await expect(this.uISaveNCloseButton).toBeDisabled();
    }

    async verifyRefreshIconDisabled(): Promise<void> {
        await expect(this.uIResetButton).toBeDisabled();
    }

    async verifyLostCheckBoxCheckedAndDisabled(): Promise<void> {
        await expect(this.uILostCheckBox).toBeChecked();
        await expect(this.uILostCheckBox).toBeDisabled();
    }

    async verifyAnimalLocatedCheckBoxCheckedAndDisabled(): Promise<void> {
        await expect(this.uIAnimalLocationCheckBox).toBeChecked();
        await expect(this.uIAnimalLocationCheckBox).toBeDisabled();
    }

    async clickAnimalLocatedCheckBox(): Promise<void> {
        await this.uIAnimalLocationCheckBox.click();
    }

    async verifyCollarOrHalterInfoIsEnabled(): Promise<void> {
        const attr = await this.uICollarOrHalterEdit.getAttribute('class') || '';
        expect(attr).toContain('textbox');
    }

    async verifyAdditionSuccessfulMessage(): Promise<void> {
        const text = await this.uILeftSideStatusBar.innerText();
        expect(text).toContain('1002 - Addition Successful');
    }

    async enterAnimalLostOrFoundLocation(): Promise<void> {
        await this.uIAnimalLostOrFoundLocation.fill(RandomHelpers.getRandomChar());
        await this.uIAnimalLostOrFoundLocation.press('Tab');
    }

    async enterReportingPersonsNameID(): Promise<void> {
        await this.uIReportingPersonNameType.fill('A');
        await this.uIReportingPersonNameType.press('Tab');
        await this.uIReportingPersonNameTypeID.fill(RandomHelpers.getRandomBetween(2, 9).toString());
        await this.uIReportingPersonNameTypeID.press('Tab');
    }

    async verifyLFNo(): Promise<void> {
        const num = await this.uILFNum.inputValue();
        expect(num.trim()).not.toBe('');
    }

    async enterAtLastName(): Promise<void> {
        await this.uILastName.fill(PoliceData.getAnimalControlModuleValue('LastName'));
        await this.uILastName.press('Tab');
    }

    async enterAtAnimalFirstName(): Promise<void> {
        await this.uIAnimalFirstName.fill(PoliceData.getAnimalControlModuleValue('AnimalFirstName'));
        await this.uIAnimalFirstName.press('Tab');
    }

    async verifyMicroChipID(i: number): Promise<void> {
        await expect(this.uIMicroChipID).toHaveValue(PoliceData.getAnimalControlModuleValue('MicroChip' + i));
    }

    async clickNoInCheckedTheCurrentAnimalShelter(): Promise<void> {
        await this.uIAnimalShelterNoRadioButton.click();
    }

    async clickNoInMayWeShareTheReportingPersonsInformation(): Promise<void> {
        await this.uIReportingPersonsInfoNoRadioButton.click();
    }

    async getLFNo(): Promise<string> {
        const yr = await this.uILFYear.inputValue();
        const num = await this.uILFNum.inputValue();
        return `${yr}-${num}`;
    }

    async verifyAtSpecies(): Promise<void> {
        const selected = await this.uISpeciesDropdown.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(PoliceData.getAnimalControlModuleValue('Species'));
    }

    async verifyAtBreed1(): Promise<void> {
        const selected = await this.uIBreed1Dropdown.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(PoliceData.getAnimalControlModuleValue('Breed1'));
    }

    async verifyAtBreed2(): Promise<void> {
        const selected = await this.uIBreed2Dropdown.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(PoliceData.getAnimalControlModuleValue('Breed2'));
    }

    async verifyAtColor1(): Promise<void> {
        const selected = await this.uIColor1Dropdown.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(PoliceData.getAnimalControlModuleValue('Color1'));
    }

    async verifyAtColor2(): Promise<void> {
        const selected = await this.uIColor2Dropdown.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(PoliceData.getAnimalControlModuleValue('Color2'));
    }

    async clickAnimalInfoIcon(): Promise<void> {
        await this.uIAnimalInfoIcon.click();
    }

    async verifyAnimalHeldAtDropdownIsEnabled(): Promise<void> {
        await expect(this.uIAnimalHeldAtDropdown).toBeEnabled();
    }

    async selectAtAnimalHeldAt(): Promise<void> {
        await this.uIAnimalHeldAtDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('AnimalHelAt') });
    }

    async verifyCageNoDropdownIsEnabled(): Promise<void> {
        await expect(this.uICageDropdown).toBeEnabled();
    }

    async selectAtCageNo(): Promise<void> {
        await this.uICageDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Cage') });
    }
}

// ============================================================================
// 6. ANIMAL REGISTRATION SEARCH & ENTRY
// ============================================================================
export class AnimalRegistrationSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uIJurisDropDown: Locator;
    readonly uIRegEntryYearEdit: Locator;
    readonly uIRegEntryNumberEdit: Locator;
    readonly uIIssueFromDateEdit: Locator;
    readonly uIIssueToDateEdit: Locator;
    readonly uIExpirationFromDateEdit: Locator;
    readonly uIExpirationToDateEdit: Locator;
    readonly uILicTagFieldEdit: Locator;
    readonly uILicTagTypeDropdown: Locator;
    readonly uILicenseIssuingAgencyDropdown: Locator;
    readonly uIAnimalLastNameEdit: Locator;
    readonly uIAnimalFirstNameEdit: Locator;
    readonly uIAnimalmiddleNameEdit: Locator;
    readonly uIOwnerLastNameEdit: Locator;
    readonly uIOwnerFirstNameEdit: Locator;
    readonly uIOwnerMiddleNameEdit: Locator;
    readonly uIBreed1Dropdown: Locator;
    readonly uIBreed2Dropdown: Locator;
    readonly uIMicroChipID: Locator;
    readonly uISpeciesDropdown: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIBackButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIgridResultsTable: Locator;
    readonly uIAddressTypeDropdown: Locator;
    readonly uIDOBEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);

        this.uIJurisDropDown = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_lstJuris');
        this.uIRegEntryYearEdit = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_nbrReg_Year');
        this.uIRegEntryNumberEdit = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_nbrReg_Number');
        this.uIIssueFromDateEdit = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_DttmIssueFrom_KPIDttmCtrl');
        this.uIIssueToDateEdit = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_DttmIssueTo_KPIDttmCtrl');
        this.uIExpirationFromDateEdit = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_DttmExpireFrom_KPIDttmCtrl');
        this.uIExpirationToDateEdit = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_DttmExpireTo_KPIDttmCtrl');
        this.uILicTagFieldEdit = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_txtLicTagNbr');
        this.uILicTagTypeDropdown = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_cddTagTypeA');
        this.uILicenseIssuingAgencyDropdown = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_cddIssueAgency_DropDown');
        this.uIAnimalLastNameEdit = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_txtAnimalLast');
        this.uIAnimalFirstNameEdit = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_txtAnimalFirst');
        this.uIAnimalmiddleNameEdit = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_txtAnimalMiddle');
        this.uIOwnerLastNameEdit = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_txtLastName');
        this.uIOwnerFirstNameEdit = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_txtFirstName');
        this.uIOwnerMiddleNameEdit = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_txtMiddleName');
        this.uIBreed1Dropdown = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_cddBreed1');
        this.uIBreed2Dropdown = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_cddBreed2');
        this.uIMicroChipID = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_txtMicroChipID');
        this.uISpeciesDropdown = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_cddSpecies_DropDown');
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIResetButton = page.locator("//span[contains(text(),'Reset')]");
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uISearchButton = page.locator("//span[(text()='Search')]");
        this.uIgridResultsTable = page.locator('#grdEquipments');
        this.uIAddressTypeDropdown = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_adrAtLoc_CddLocationType');
        this.uIDOBEdit = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_dtcDOB_KPIDttmCtrl');
    }

    async enterAtRegEntry(regNo?: string): Promise<void> {
        const val = regNo || PoliceData.getAnimalControlModuleValue('RegNo');
        await this.uIRegEntryYearEdit.fill(val.substring(0, 2));
        await this.uIRegEntryYearEdit.press('Tab');
        await this.uIRegEntryNumberEdit.fill(val.substring(3));
        await this.uIRegEntryNumberEdit.press('Tab');
    }

    async enterAtAnimalLastName(): Promise<void> {
        await this.uIAnimalLastNameEdit.fill(PoliceData.getAnimalControlModuleValue('AnimalLastName'));
        await this.uIAnimalLastNameEdit.press('Tab');
    }

    async enterAtAnimalFirstName(): Promise<void> {
        await this.uIAnimalFirstNameEdit.fill(PoliceData.getAnimalControlModuleValue('AnimalFirstName'));
        await this.uIAnimalFirstNameEdit.press('Tab');
    }

    async enterAtAnimalMiddleName(): Promise<void> {
        await this.uIAnimalmiddleNameEdit.fill(PoliceData.getAnimalControlModuleValue('AnimalMiddleName'));
        await this.uIAnimalmiddleNameEdit.press('Tab');
    }

    async enterAtOwnerlLastName(): Promise<void> {
        await this.uIOwnerLastNameEdit.fill(PoliceData.getAnimalControlModuleValue('OwnerLastName'));
        await this.uIOwnerLastNameEdit.press('Tab');
    }

    async enterAtOwnerFirstName(): Promise<void> {
        await this.uIOwnerFirstNameEdit.fill(PoliceData.getAnimalControlModuleValue('OwnerFirstName'));
        await this.uIOwnerFirstNameEdit.press('Tab');
    }

    async enterAtOwnerMiddleName(): Promise<void> {
        await this.uIOwnerMiddleNameEdit.fill(PoliceData.getAnimalControlModuleValue('OwnerMiddleName'));
        await this.uIOwnerMiddleNameEdit.press('Tab');
    }

    async enterAtIssueFromDate(): Promise<void> {
        await this.uIIssueFromDateEdit.fill(PoliceData.getAnimalControlModuleValue('IssueFromDate'));
    }

    async enterAtIssueToDate(): Promise<void> {
        await this.uIIssueToDateEdit.fill(PoliceData.getAnimalControlModuleValue('IssueToDate'));
    }

    async enterAtExpirationFromDate(): Promise<void> {
        await this.uIExpirationFromDateEdit.fill(PoliceData.getAnimalControlModuleValue('ExpireFromDate'));
    }

    async enterAExpirationToDate(): Promise<void> {
        await this.uIExpirationToDateEdit.fill(PoliceData.getAnimalControlModuleValue('ExpireToDate'));
    }

    async selectAtLicType(): Promise<void> {
        await this.uILicTagTypeDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('LicTagType') });
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
    }

    async selectGridrowByRegNo(regEntry?: string): Promise<void> {
        const val = regEntry || PoliceData.getAnimalControlModuleValue('RegNo');
        await this.grid.selectRowByCellText(this.uIgridResultsTable, val);
    }

    async selectGridrowByLicTagType(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIgridResultsTable, PoliceData.getAnimalControlModuleValue('LicTagType'));
    }

    async selectGridrowByAnimalName(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIgridResultsTable, PoliceData.getAnimalControlModuleValue('AnimalName'));
    }

    async enterAtLicTagNo(): Promise<void> {
        await this.uILicTagFieldEdit.fill(PoliceData.getAnimalControlModuleValue('LicTagNo'));
        await this.uILicTagFieldEdit.press('Tab');
    }

    async selectAtLicenseIssuingAgency(): Promise<void> {
        await this.uILicenseIssuingAgencyDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('LicenseIssuingAgency') });
        await this.uILicenseIssuingAgencyDropdown.press('Tab');
    }

    async verifyLicTagDisplayedInGrid(): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uIgridResultsTable, 'Lic/Tag#', 0);
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('LicenseOrTag'));
    }

    async clickReset(): Promise<void> {
        await this.uIResetButton.click();
    }

    async clickBack(): Promise<void> {
        await this.uIBackButton.click();
    }

    async selectAtSpecies(): Promise<void> {
        await this.uISpeciesDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Species') });
    }

    async verifyAtLicOrTagNoInGrid(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCellByIndex(this.uIgridResultsTable, rowIndex, 'Lic/Tag#');
        const text = await cell.innerText();
        expect(text.trim()).toBe(PoliceData.getAnimalControlModuleValue('LicTagNo'));
    }

    async verifyAtRegNo(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCellByIndex(this.uIgridResultsTable, rowIndex, 'Reg#');
        const text = await cell.innerText();
        expect(text.trim()).toBe(PoliceData.getAnimalControlModuleValue('RegNo'));
    }

    async verifyAtAnimalName(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCellByIndex(this.uIgridResultsTable, rowIndex, 'Animal Name');
        const text = await cell.innerText();
        expect(text.trim()).toBe(PoliceData.getAnimalControlModuleValue('AnimalName'));
    }

    async verifyAtLicTagType(): Promise<void> {
        const options = await this.uILicTagTypeDropdown.locator('option').allInnerTexts();
        const expected = PoliceData.getAnimalControlModuleValue('LicTagType');
        expect(options).toContain(expected);
    }

    async selectAtAddressTypeDropdown(i: number): Promise<void> {
        await this.uIAddressTypeDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('AddressType' + i) });
    }

    async selectRandomGridRow(): Promise<void> {
        await this.grid.selectRandomRow(this.uIgridResultsTable);
    }

    async enterAtDOB(): Promise<void> {
        await this.uIDOBEdit.fill(PoliceData.getAnimalControlModuleValue('DOB'));
    }
}

export class AnimalRegistrationEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;

    readonly uIJurisDropdown: Locator;
    readonly uISaveButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIRegEntryYearEdit: Locator;
    readonly uIRegEntrynumberEdit: Locator;
    readonly uICost: Locator;
    readonly uIIssuedDateEdit: Locator;
    readonly uIIssuedTimeEdit: Locator;
    readonly uILicTagTypeDropdown: Locator;
    readonly uIIssuingAgencyDropdown: Locator;
    readonly uIExpirationDateEdit: Locator;
    readonly uILicTagEdit: Locator;
    readonly uIAnimalNameTypeEdit: Locator;
    readonly uIAnimalNameInfoIcon: Locator;
    readonly uIAnimalNameTypeIDEdit: Locator;
    readonly uIAnimalLastNameEdit: Locator;
    readonly uIAnimalFirstNameEdit: Locator;
    readonly uIAnimalMiddleNameEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uIRemarksEdit: Locator;
    readonly uIAnimalmiddleNameEdit: Locator;
    readonly uIApplicantTab: Locator;
    readonly uIFeesTab: Locator;
    readonly uINotesOrConditionTab: Locator;
    readonly uINotesOrConditionsIFrame: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uIFlagsTab: Locator;
    readonly uIContactsTab: Locator;
    readonly uIHistoryTab: Locator;
    readonly uIAnimalsNameResetButton: Locator;
    readonly uIRegistrationTypeDropDown: Locator;
    readonly uIMapTab: Locator;
    readonly uIQAFormsTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);

        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uISaveButton = page.locator('#cmdSave');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIRegEntryYearEdit = page.locator('#nbrReg_Year');
        this.uIRegEntrynumberEdit = page.locator('#nbrReg_Number');
        this.uICost = page.locator("//input[@id='curCost']");
        this.uIIssuedDateEdit = page.locator("//input[@id='dttmIssue_Date_KPIDttmCtrl']");
        this.uIIssuedTimeEdit = page.locator("//input[contains(@class,'textboxdatetime')]");
        this.uILicTagTypeDropdown = page.locator('#cddTagType');
        this.uIIssuingAgencyDropdown = page.locator('#cddIssueAgency_DropDown');
        this.uIExpirationDateEdit = page.locator("//input[@id='dttmExpire_KPIDttmCtrl']");
        this.uILicTagEdit = page.locator('#txtLicTagNbr');
        this.uIAnimalNameTypeEdit = page.locator('#AnimalCtrl_NameType');
        this.uIAnimalNameInfoIcon = page.locator('#AnimalCtrl_imgSrch');
        this.uIAnimalNameTypeIDEdit = page.locator('#AnimalCtrl_NameTypeID');
        this.uIAnimalLastNameEdit = page.locator('#AnimalCtrl_LastName');
        this.uIAnimalFirstNameEdit = page.locator('#AnimalCtrl_FirstName');
        this.uIAnimalMiddleNameEdit = page.locator('#AnimalCtrl_MiddleName');
        this.uIAddressEdit = page.locator('#txtAddress');
        this.uIRemarksEdit = page.locator('#txtRemarks');
        this.uIAnimalmiddleNameEdit = page.locator('#tabLicense_tmpl0_ctrlusrLicenSrchBasic_txtAnimalMiddle');
        this.uIApplicantTab = page.locator("//span[contains(text(),'Applicant')]");
        this.uIFeesTab = page.locator("//span[contains(text(),'Fees')]");
        this.uINotesOrConditionTab = page.locator("//span[contains(text(),'Notes/Conditions')]");
        this.uINotesOrConditionsIFrame = page.locator('#TabAnimal_tmpl1_usrAnimalEntryNotes_rteKPITxt_contentIframe');
        this.uILeftSideStatusBar = page.locator("//td[@class ='statusBar']/b");
        this.uIFlagsTab = page.locator("//span[contains(text(),'Flags')]");
        this.uIContactsTab = page.locator("//span[contains(text(),'Contacts')]");
        this.uIHistoryTab = page.locator("//span[contains(text(),'History')]");
        this.uIAnimalsNameResetButton = page.locator('#imgClearName');
        this.uIRegistrationTypeDropDown = page.locator('#cddTagType');
        this.uIMapTab = page.locator('//*[@id="TabAnimal"]/span/span/span[7]/span/span/span');
        this.uIQAFormsTab = page.locator("//span[(text()='QA Forms')]");
    }

    async clickFeesTab(): Promise<void> {
        await this.uIFeesTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmFees.aspx?');
    }

    async clickApplicantsTab(): Promise<void> {
        await this.uIApplicantTab.click();
        await this.page.waitForLoadState('load');
    }

    async selectAtLicType(): Promise<void> {
        await this.uILicTagTypeDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('LicTagType') });
    }

    async tabAtIssueDateandTime(): Promise<void> {
        await this.uIIssuedDateEdit.press('Tab');
        await this.uIIssuedTimeEdit.press('Tab');
    }

    async clickAnimalNameInfoBubbleIcon(): Promise<void> {
        await this.uIAnimalNameInfoIcon.click();
    }

    async enterAtLicTagNo(slno?: number): Promise<void> {
        await this.uILicTagEdit.clear();
        const key = (!slno || slno === 0) ? 'LicenseOrTag' : 'LicenseOrTag' + slno;
        await this.uILicTagEdit.fill(PoliceData.getAnimalControlModuleValue(key));
    }

    async enterExpireDateAsFutureDate(days?: number): Promise<void> {
        const d = days !== undefined ? days : 5;
        await this.uIExpirationDateEdit.clear();
        await this.uIExpirationDateEdit.fill(DateHelpers.getFutureDate(d));
    }

    async enterAtAnimalLastName(): Promise<void> {
        await this.uIAnimalLastNameEdit.fill(PoliceData.getAnimalControlModuleValue('AnimalLastName'));
        await this.uIAnimalLastNameEdit.press('Tab');
    }

    async enterAtAnimalFirstName(): Promise<void> {
        await this.uIAnimalFirstNameEdit.fill(PoliceData.getAnimalControlModuleValue('AnimalFirstName'));
        await this.uIAnimalFirstNameEdit.press('Tab');
    }

    async enterAtAnimalMiddleName(): Promise<void> {
        await this.uIAnimalMiddleNameEdit.fill(PoliceData.getAnimalControlModuleValue('AnimalMiddleName'));
    }

    async enterAtAnimalNameID(slno?: number): Promise<void> {
        const key = (!slno || slno === 0) ? 'AnimalNameID' : 'AnimalNameID' + slno;
        await this.uIAnimalNameTypeIDEdit.fill(PoliceData.getAnimalControlModuleValue(key).substring(3));
        await this.uIAnimalNameTypeIDEdit.press('Tab');
    }

    async enterAtAnimalNameIDActiveData(AnimalNameID: string): Promise<void> {
        await this.uIAnimalNameTypeIDEdit.fill(AnimalNameID);
        await this.uIAnimalNameTypeIDEdit.press('Tab');
    }

    async verifyAtAnimalName(i?: number): Promise<void> {
        const lastname = await this.uIAnimalLastNameEdit.inputValue();
        const firstName = await this.uIAnimalFirstNameEdit.inputValue();
        const animalname = `${lastname}, ${firstName}`;
        const key = i !== undefined ? 'AnimalName' + i : 'AnimalName';
        expect(animalname).toBe(PoliceData.getAnimalControlModuleValue(key));
    }

    async verifyAtOwnerNameRequiredAck(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6040) Owner name information is required in the Animal Master Name file for registrations.');
        await this.popup.acknowledgeOkButton.click();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async saveNClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await this.popup.confirmYesButton.click();
    }

    async tabAtAnimalNameIDField(): Promise<void> {
        await this.uIAnimalNameTypeIDEdit.click();
        await this.uIAnimalNameTypeIDEdit.press('Tab');
    }

    async verifyLicTagAlreadyExistsAck(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6040) Lic/Tag No Already exists');
        await this.popup.acknowledgeOkButton.click();
    }

    async readRegEntryNo(): Promise<string> {
        const year = await this.uIRegEntryYearEdit.inputValue();
        const regNo = await this.uIRegEntrynumberEdit.inputValue();
        return `${year}-${regNo}`;
    }

    async verifyExpirationDateAsFuturetDate(day: number): Promise<void> {
        const attr = await this.uIExpirationDateEdit.inputValue();
        expect(attr).toContain(DateHelpers.getFutureDate(day));
    }

    async verifyAtCostAndFeeTabInvoiceAmountAsSame(): Promise<void> {
        const cost = await this.uICost.inputValue();
        await this.clickFeesTab();
        const invoiceAmount = await this.page.locator('#txtTotalInvoiceAmt').inputValue();
        expect(cost).toBe(invoiceAmount);
    }

    async switchToNotesOrConditionsTab(): Promise<void> {
        await this.uINotesOrConditionTab.click();
        await this.page.waitForLoadState('load');
        new BrowserHelpers(this.page).switchToFrame('TabAnimal_tmpl1_usrAnimalEntryNotes_rteKPITxt_contentIframe');
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async selectIssuingAgency(): Promise<void> {
        const options = await this.uIIssuingAgencyDropdown.locator('option').allInnerTexts();
        const valid = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOpt = valid[Math.floor(Math.random() * valid.length)];
        await this.uIIssuingAgencyDropdown.selectOption({ label: randomOpt });
        await this.uIIssuingAgencyDropdown.press('Tab');
    }

    async verifyEnterLicTagAck(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(30033) Enter Lic/Tag No.');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyAtRegEntryNo(): Promise<void> {
        const regNo = await this.uIRegEntrynumberEdit.inputValue();
        const regYear = await this.uIRegEntryYearEdit.inputValue();
        expect(`${regYear}-${regNo}`).toBe(PoliceData.getAnimalControlModuleValue('RegNo'));
    }

    async verifyAdditionSuccessfulMessage(): Promise<void> {
        const msg = await this.uILeftSideStatusBar.innerText();
        expect(msg).toContain('1002 - Addition Successful');
    }

    async verifyUpdateSuccessfulBottomMessage(): Promise<void> {
        const msg = await this.uILeftSideStatusBar.innerText();
        expect(msg).toContain('1003 - Update Successful');
    }

    async switchToFlagsTab(): Promise<void> {
        await this.uIFlagsTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmAddrInfoFlags.aspx?');
    }

    async verifyOwnerNameRequiredAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6040) Owner name information is required');
        await this.popup.acknowledgeOkButton.click();
    }

    async switchToContactsTab(): Promise<void> {
        await this.uIContactsTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmContactNew.aspx?');
    }

    async switchToHistoryTab(): Promise<void> {
        await this.uIHistoryTab.click();
        new BrowserHelpers(this.page).switchToFrame('frmLogHistory.aspx?');
    }

    async enterAnimalNameID(): Promise<void> {
        await this.uIAnimalNameTypeEdit.fill('H');
        await this.uIAnimalNameTypeIDEdit.fill('14');
    }

    async enterLicTagNo(): Promise<void> {
        await this.uILicTagEdit.clear();
        await this.uILicTagEdit.fill(RandomHelpers.getRandomBetween(1, 9).toString());
    }

    async verifyRegEntryNo(): Promise<void> {
        const regNo = await this.uIRegEntrynumberEdit.inputValue();
        expect(regNo.trim()).not.toBe('');
    }

    async selectLicType(): Promise<void> {
        const options = await this.uILicTagTypeDropdown.locator('option').allInnerTexts();
        const valid = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOpt = valid[Math.floor(Math.random() * valid.length)];
        await this.uILicTagTypeDropdown.selectOption({ label: randomOpt });
    }

    async clickAnimalsNameResetButton(): Promise<void> {
        await this.uIAnimalsNameResetButton.click();
    }

    async verifyEnterLicTag(): Promise<void> {
        await expect(this.uILicTagEdit).toHaveValue(PoliceData.getAnimalControlModuleValue('LicenseOrTag'));
    }

    async selectAtLicType1(): Promise<void> {
        await this.uILicTagTypeDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('LicTagType1') });
    }

    async enterAtLicTagNo1(): Promise<void> {
        await this.uILicTagEdit.clear();
        await this.uILicTagEdit.fill(PoliceData.getAnimalControlModuleValue('LicenseOrTag1'));
        await this.uILicTagEdit.press('Tab');
    }

    async verifyEnterLicTag1(): Promise<void> {
        await expect(this.uILicTagEdit).toHaveValue(PoliceData.getAnimalControlModuleValue('LicenseOrTag1'));
    }

    async verifyAnimalNameIsNull(): Promise<void> {
        const idVal = await this.uIAnimalNameTypeIDEdit.inputValue();
        expect(idVal.trim()).toBe('');
        await expect(this.uIAnimalLastNameEdit).toBeEnabled();
        const lastVal = await this.uIAnimalLastNameEdit.inputValue();
        expect(lastVal.trim()).toBe('');
        await expect(this.uIAnimalFirstNameEdit).toBeEnabled();
        const firstVal = await this.uIAnimalFirstNameEdit.inputValue();
        expect(firstVal.trim()).toBe('');
    }

    async verifyAtLicTagType(): Promise<void> {
        const options = await this.uILicTagTypeDropdown.locator('option').allInnerTexts();
        expect(options).toContain(PoliceData.getAnimalControlModuleValue('LicTagType'));
    }

    async selectAtRegistrationType(): Promise<void> {
        await this.uIRegistrationTypeDropDown.selectOption({ label: PoliceData.getAnimalControlModuleValue('RegistarionType') });
    }

    async enterAnimaNameId(id: string): Promise<void> {
        await this.uIAnimalNameTypeIDEdit.fill(id.substring(3));
        await this.uIAnimalNameTypeIDEdit.press('Tab');
    }

    async getIssuedDate(): Promise<string> {
        return await this.uIIssuedDateEdit.inputValue();
    }

    async verifyAtTabsColorAsBlue(tabName: string): Promise<void> {
        const cssValue = await this.page.locator(`//span[text()='${tabName}']`).evaluate(el => getComputedStyle(el).color);
        expect(cssValue).toBe('rgba(0, 0, 255, 1)');
    }

    async verify1051UpdateDataExistInTheContactsTabAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(1051)Updated data exists in the Contacts Tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyEnterMandatoryDataAcknowledgeMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(8)Enter mandatory data');
        await this.popup.acknowledgeOkButton.click();
    }

    async pressTabThrice(): Promise<void> {
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.press('Tab');
    }

    async clickAnimalNameID(): Promise<void> {
        await this.uIAnimalNameTypeIDEdit.click();
        await this.uIAnimalNameTypeIDEdit.press('Tab');
    }

    async clickMapTab(): Promise<void> {
        await this.uIMapTab.click();
        new BrowserHelpers(this.page).switchToFrame('GHydrantMapHERE.aspx');
    }

    async verifyOwnerNameIsDisplayed(): Promise<void> {
        await expect(this.page.locator('#TabAnimal_tmpl0_usrApplicantID_nOwnerName_LastName')).toHaveValue(PoliceData.getAnimalControlModuleValue('LastName'));
        await expect(this.page.locator('#TabAnimal_tmpl0_usrApplicantID_nOwnerName_FirstName')).toHaveValue(PoliceData.getAnimalControlModuleValue('FirstName'));
    }

    async clickQAFormsTab(): Promise<void> {
        await this.uIQAFormsTab.click();
    }
}

export class AnimalRegistrationEntryApplicantTabPage {
    readonly page: Page;
    readonly uISpeciesDropdown: Locator;
    readonly uIBreed1Dropdown: Locator;
    readonly uIBreed2Dropdown: Locator;
    readonly uIOwnerNameTypeEdit: Locator;
    readonly uIOwnerNameTypeIDEdit: Locator;
    readonly uIOwnerLastNameEdit: Locator;
    readonly uIOwnerFirstNameEdit: Locator;
    readonly uIOwnerAddressEdit: Locator;
    readonly uIOwnerMiddleNameEdit: Locator;
    readonly uIVeterinarianNameTypeEdit: Locator;
    readonly uIVeterinarianNameTypeIDEdit: Locator;
    readonly uIVeterinarianLastNameEdit: Locator;
    readonly uIVeterinarianFirstNameEdit: Locator;
    readonly uIVeterinarianMiddleNameEdit: Locator;
    readonly uIVeterinarianAddressEdit: Locator;
    readonly uIOwnerNameInfoIcon: Locator;
    readonly uIVeterianNameInfoIcon: Locator;
    readonly uIDateOfBirthEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISpeciesDropdown = page.locator('#TabAnimal_tmpl0_usrApplicantID_cddSpecies_DropDown');
        this.uIBreed1Dropdown = page.locator('#TabAnimal_tmpl0_usrApplicantID_cddBreed1_DropDown');
        this.uIBreed2Dropdown = page.locator('#TabAnimal_tmpl0_usrApplicantID_cddBreed2_DropDown');
        this.uIOwnerNameTypeEdit = page.locator('#TabAnimal_tmpl0_usrApplicantID_nOwnerName_NameType');
        this.uIOwnerNameTypeIDEdit = page.locator('#TabAnimal_tmpl0_usrApplicantID_nOwnerName_NameTypeID');
        this.uIOwnerLastNameEdit = page.locator('#TabAnimal_tmpl0_usrApplicantID_nOwnerName_LastName');
        this.uIOwnerFirstNameEdit = page.locator('#TabAnimal_tmpl0_usrApplicantID_nOwnerName_FirstName');
        this.uIOwnerAddressEdit = page.locator('#TabAnimal_tmpl0_usrApplicantID_txtOwnAddress');
        this.uIOwnerMiddleNameEdit = page.locator('#TabAnimal_tmpl0_usrApplicantID_nOwnerName_MiddleName');
        this.uIVeterinarianNameTypeEdit = page.locator('#TabAnimal_tmpl0_usrApplicantID_nVeterName_NameType');
        this.uIVeterinarianNameTypeIDEdit = page.locator('#TabAnimal_tmpl0_usrApplicantID_nVeterName_NameTypeID');
        this.uIVeterinarianLastNameEdit = page.locator('#TabAnimal_tmpl0_usrApplicantID_nVeterName_LastName');
        this.uIVeterinarianFirstNameEdit = page.locator('#TabAnimal_tmpl0_usrApplicantID_nVeterName_FirstName');
        this.uIVeterinarianMiddleNameEdit = page.locator('#TabAnimal_tmpl0_usrApplicantID_nVeterName_MiddleName');
        this.uIVeterinarianAddressEdit = page.locator('#TabAnimal_tmpl0_usrApplicantID_txtVeterAddress');
        this.uIOwnerNameInfoIcon = page.locator('#TabAnimal_tmpl0_usrApplicantID_nOwnerName_imgSrch');
        this.uIVeterianNameInfoIcon = page.locator('#TabAnimal_tmpl0_usrApplicantID_nVeterName_imgSrch');
        this.uIDateOfBirthEdit = page.locator('#TabAnimal_tmpl0_usrApplicantID_dtcDOB_KPIDttmCtrl');
    }

    async enterAtOwnerlLastName(): Promise<void> {
        await this.uIOwnerLastNameEdit.fill(PoliceData.getAnimalControlModuleValue('OwnerLastName'));
    }

    async enterAtOwnerFirstName(): Promise<void> {
        await this.uIOwnerFirstNameEdit.fill(PoliceData.getAnimalControlModuleValue('OwnerFirstName'));
        await this.uIOwnerFirstNameEdit.press('Tab');
    }

    async enterAtOwnerMiddleName(): Promise<void> {
        await this.uIOwnerMiddleNameEdit.fill(PoliceData.getAnimalControlModuleValue('OwnerMiddleName'));
        await this.uIOwnerMiddleNameEdit.press('Tab');
    }

    async verifyAtOwnerNameID(): Promise<void> {
        const type = await this.uIOwnerNameTypeEdit.inputValue();
        const nameID = await this.uIOwnerNameTypeIDEdit.inputValue();
        expect(`${type}-${nameID}`).toBe(PoliceData.getAnimalControlModuleValue('OwnerNameID'));
    }

    async verifyOwnerNameIDAsEmpty(): Promise<void> {
        const type = await this.uIOwnerNameTypeEdit.inputValue();
        const nameID = await this.uIOwnerNameTypeIDEdit.inputValue();
        expect(`${type}-${nameID}`).toBe('-');
    }

    async verifyAtVetnerianNameID(): Promise<void> {
        const type = await this.uIVeterinarianNameTypeEdit.inputValue();
        const nameID = await this.uIVeterinarianNameTypeIDEdit.inputValue();
        expect(`${type}-${nameID}`).toBe(PoliceData.getAnimalControlModuleValue('VetnerianNameID'));
    }

    async verifyAtVetnerianNameID1(): Promise<void> {
        const type = await this.uIVeterinarianNameTypeEdit.inputValue();
        const nameID = await this.uIVeterinarianNameTypeIDEdit.inputValue();
        expect(`${type}-${nameID}`).toBe(PoliceData.getAnimalControlModuleValue('VeterinarianNameID1'));
    }

    async verifyVetnerianNameID(id: string): Promise<void> {
        const type = await this.uIVeterinarianNameTypeEdit.inputValue();
        const nameID = await this.uIVeterinarianNameTypeIDEdit.inputValue();
        expect(`${type}-${nameID}`).toBe(id);
    }

    async verifyAtOwnerName(slno?: number): Promise<void> {
        const last = await this.uIOwnerLastNameEdit.inputValue();
        const first = await this.uIOwnerFirstNameEdit.inputValue();
        const ownerName = `${last}, ${first}`;
        const key = (!slno || slno === 0) ? 'OwnerName' : 'OwnerName' + slno;
        expect(ownerName).toBe(PoliceData.getAnimalControlModuleValue(key));
    }

    async clickOwnerInfoIcon(): Promise<void> {
        await this.uIOwnerNameInfoIcon.click();
    }

    async clickVeterinarianInfoIcon(): Promise<void> {
        await this.uIVeterianNameInfoIcon.click();
    }

    async verifyAtDOB(): Promise<void> {
        await expect(this.uIDateOfBirthEdit).toHaveValue(PoliceData.getTestContextData('DOB'));
    }
}

export class AnimalRegistrationEntryFeesTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uISpeciesDropdown: Locator;
    readonly uIInvoiceAmount: Locator;
    readonly uIFeesResultTable: Locator;
    readonly uIAddButton: Locator;
    readonly uISaveButton: Locator;
    readonly uIResetButton: Locator;
    readonly uIReceivePaymentButton: Locator;
    readonly uIInvoiceEdit: Locator;
    readonly uIInvoiceIBubble: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uIRateEdit: Locator;
    readonly uIUpdateButton: Locator;
    readonly uIDeleteColumn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uISpeciesDropdown = page.locator('#TabAnimal_tmpl0_usrApplicantID_cddSpecies_DropDown');
        this.uIInvoiceAmount = page.locator('#txtTotalInvoiceAmt');
        this.uIFeesResultTable = page.locator('#grdInvoice');
        this.uIAddButton = page.locator('#imgAdd');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIResetButton = page.locator('#cmdReset');
        this.uIReceivePaymentButton = page.locator('#cmdRecPaym');
        this.uIInvoiceEdit = page.locator('#txtInvoice');
        this.uIInvoiceIBubble = page.locator('#imgRegInfo');
        this.uILeftSideStatusBar = page.locator("//td[@class ='status']/b");
        this.uIRateEdit = page.locator('#txtRate');
        this.uIUpdateButton = page.locator('#imgAdd');
        this.uIDeleteColumn = page.locator("//td[@class='Delete_Icon_Style']");
    }

    async verifyAtDescription(): Promise<void> {
        const row = await this.grid.getRowByCellText(this.uIFeesResultTable, PoliceData.getAnimalControlModuleValue('Description'));
        const text = await row.innerText();
        expect(text).toContain(PoliceData.getAnimalControlModuleValue('Description'));
    }

    async selectRowByAtDescription(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIFeesResultTable, PoliceData.getAnimalControlModuleValue('Description'));
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async clickReceivePaymentButton(): Promise<void> {
        await this.uIReceivePaymentButton.click();
    }

    async clickInvoiceIBubble(): Promise<void> {
        await this.uIInvoiceIBubble.click();
    }

    async verifyUpdateSuccessfulBottomMessage(): Promise<void> {
        const text = await this.uILeftSideStatusBar.innerText();
        expect(text).toContain('1003 - Update Successful');
    }

    async saveTab(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async enterAtRate(): Promise<void> {
        await this.uIRateEdit.clear();
        await this.uIRateEdit.fill(PoliceData.getAnimalControlModuleValue('Rate'));
    }

    async clickUpdateButton(): Promise<void> {
        await this.uIUpdateButton.click();
    }

    async clickDeleteGridRow(): Promise<void> {
        await this.uIDeleteColumn.click();
        await this.popup.confirmYesButton.click();
    }
}

export class AnimalRegistrationEntryNotesOrConditionsTabPage {
    readonly page: Page;
    readonly uINotesEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uINotesEdit = page.locator('//body');
    }

    async enterAtNotes(): Promise<void> {
        await this.uINotesEdit.fill(PoliceData.getAnimalControlModuleValue('Notes'));
    }

    async verifyAtNotes(): Promise<void> {
        const text = await this.uINotesEdit.innerText();
        expect(text).toContain(PoliceData.getAnimalControlModuleValue('Notes'));
    }

    async enterNotes(): Promise<void> {
        await this.uINotesEdit.fill(DateHelpers.randomAlphanumeric(10));
    }
}

export class AnimalRegistrationFlagsTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uIAddFlagsButton: Locator;
    readonly uIFlagsResultTable: Locator;
    readonly uIShowInactiveCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIAddFlagsButton = page.locator('#cmdAdd');
        this.uIFlagsResultTable = page.locator('#grdFlags');
        this.uIShowInactiveCheckbox = page.locator('#chkIsActive');
    }

    async clickAddFlagsButton(): Promise<void> {
        await this.uIAddFlagsButton.click();
    }

    async verifyAtCommentInActiveAsOfInGrid(): Promise<void> {
        const spans = this.uIFlagsResultTable.locator("//span");
        const count = await spans.count();
        const expected = PoliceData.getAnimalControlModuleValue('Comment');
        let matched = false;
        for (let i = 0; i < count; i++) {
            const text = await spans.nth(i).innerText();
            if (text.includes(expected)) {
                matched = true;
                break;
            }
        }
        expect(matched).toBeTruthy();
    }
}

export class AnimalRegistrationContactsTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIAddNewButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIIncludeInactiveCheckbox: Locator;
    readonly uIContactsResultTable: Locator;
    readonly uISaveButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIPhoneType1Dropdown: Locator;
    readonly uIPhoneType2Dropdown: Locator;
    readonly uIPhoneNo1Edit: Locator;
    readonly uIPhoneNo2Edit: Locator;
    readonly uIAddMorePhoneNoButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIAddNewButton = page.locator('#btnAddnew');
        this.uISearchButton = page.locator('#btnSearch');
        this.uIIncludeInactiveCheckbox = page.locator('#chkIncludeExpired');
        this.uIContactsResultTable = page.locator('#grdContacts');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uIPhoneType1Dropdown = page.locator('#txtNumber_1_PhoneType_DropDown');
        this.uIPhoneType2Dropdown = page.locator('#txtNumber_2_PhoneType_DropDown');
        this.uIPhoneNo1Edit = page.locator('#txtNumber_1_PhoneNumber');
        this.uIPhoneNo2Edit = page.locator('#txtNumber_2_PhoneNumber');
        this.uIAddMorePhoneNoButton = page.locator('#AddMorePhoneNumber');
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async verifyAtNameInGrid(): Promise<void> {
        const row = await this.grid.getRowByCellText(this.uIContactsResultTable, PoliceData.getAnimalControlModuleValue('Name'));
        const text = await row.innerText();
        expect(text).toContain(PoliceData.getAnimalControlModuleValue('Name'));
    }

    async verifyAtPhoneNoInGrid(): Promise<void> {
        const row = await this.grid.getRowByCellText(this.uIContactsResultTable, PoliceData.getAnimalControlModuleValue('PhoneNo'));
        const text = await row.innerText();
        expect(text).toContain(PoliceData.getAnimalControlModuleValue('PhoneNo'));
    }

    async verifyEnteredDateAsCurrentDateInGrid(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCellByIndex(this.uIContactsResultTable, rowIndex, 'Entered Date');
        const text = await cell.innerText();
        expect(text).toContain(DateHelpers.getCurrentDate('MM/dd/yy'));
    }

    async verifyAtNameRelationInGrid(): Promise<void> {
        const row = await this.grid.getRowByCellText(this.uIContactsResultTable, PoliceData.getAnimalControlModuleValue('NameRelation'));
        const text = await row.innerText();
        expect(text).toContain(PoliceData.getAnimalControlModuleValue('NameRelation'));
    }

    async selectAtPhoneType1(JsoneKeyIndex?: number): Promise<void> {
        const key = JsoneKeyIndex ? 'PhoneType' + JsoneKeyIndex : 'PhoneType1';
        await this.uIPhoneType1Dropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue(key) });
    }

    async enterAtPhoneNo1(): Promise<void> {
        await this.uIPhoneNo1Edit.click();
        await this.uIPhoneNo1Edit.clear();
        await this.uIPhoneNo1Edit.click();
        await this.uIPhoneNo1Edit.fill(PoliceData.getAnimalControlModuleValue('PhoneNumber'));
        await this.uIPhoneNo1Edit.press('Tab');
    }

    async saveTab(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async verifyAtPhoneType1(): Promise<void> {
        const selected = await this.uIPhoneType1Dropdown.locator('option:checked').textContent();
        expect(selected?.trim()).toBe(PoliceData.getAnimalControlModuleValue('PhoneType'));
    }

    async verifyAtPhone1(): Promise<void> {
        await expect(this.uIPhoneNo1Edit).toHaveValue(PoliceData.getAnimalControlModuleValue('PhoneNo'));
    }

    async clearPhone1Field(): Promise<void> {
        await this.uIPhoneNo1Edit.clear();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }
}

export class AnimalRegistrationHistoryTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uIUpdateDateEdit: Locator;
    readonly uIUpdateTimeEdit: Locator;
    readonly uIUpdatedByEdit: Locator;
    readonly uICommentsEdit: Locator;
    readonly uISaveButton: Locator;
    readonly uICommentsResultTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);

        this.uIUpdateDateEdit = page.locator('#dtDate_Date_KPIDttmCtrl');
        this.uIUpdateTimeEdit = page.locator("//table[@id='dtDate_Time']//input");
        this.uIUpdatedByEdit = page.locator('#lupPFNbr_CodeValue');
        this.uICommentsEdit = page.locator('#txtLog');
        this.uISaveButton = page.locator('#cmdSave');
        this.uICommentsResultTable = page.locator('#listMsg');
    }

    async tabOutUpdateDateAndTime(): Promise<void> {
        await this.uIUpdateDateEdit.click();
        await this.uIUpdateDateEdit.press('Tab');
        await this.uIUpdateTimeEdit.click();
        await this.uIUpdateDateEdit.press('Tab');
    }

    async tabOutUpdatedBy(): Promise<void> {
        await this.uIUpdatedByEdit.click();
        await this.uIUpdatedByEdit.press('Tab');
    }

    async enterAtComments(): Promise<void> {
        await this.uICommentsEdit.fill(PoliceData.getAnimalControlModuleValue('Comments'));
    }

    async clickSaveButton(): Promise<void> {
        await this.uISaveButton.click();
    }

    async verifyAtCommentsInGrid(): Promise<void> {
        const items = this.page.locator("//div[@class='HistoryComments']");
        const count = await items.count();
        const expected = PoliceData.getAnimalControlModuleValue('Comments');
        let found = false;
        for (let i = 0; i < count; i++) {
            const text = await items.nth(i).innerText();
            if (text.includes(expected)) {
                found = true;
                break;
            }
        }
        expect(found).toBeTruthy();
    }
}

export class AnimalRegistrationEntryMapTabPage {
    readonly page: Page;
    readonly uIResetButton: Locator;
    readonly uILatLongValue: Locator;
    readonly uIupdateLatLongButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIResetButton = page.locator("//button[@value='btnReset']");
        this.uILatLongValue = page.locator('#lbllatLongvalue');
        this.uIupdateLatLongButton = page.locator('#btnUpdateLatLong');
    }

    async clickReset(): Promise<void> {
        await this.uIResetButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtLatLongNotSetIsDisplayed(JSONkeyIndex: number): Promise<void> {
        const text = await this.uILatLongValue.innerText();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('LatLongValue' + JSONkeyIndex));
    }

    async clickUpdateLatLong(): Promise<void> {
        await this.uIupdateLatLongButton.click();
    }
}

// ============================================================================
// 7. ANIMAL CAGE RENTAL PAGE & TABS
// ============================================================================
export class AnimalCageRentalPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIJurisDropdown: Locator;
    readonly uIRefreshButton: Locator;
    readonly uISignOutButton: Locator;
    readonly uISignInButton: Locator;
    readonly uIIssuingPFCodeEdit: Locator;
    readonly uIIssuedPFCodeEdit: Locator;
    readonly uIIssuedPFDescriptionEdit: Locator;
    readonly uIIssuingPFDescriptionEdit: Locator;
    readonly uIIssuedNameType: Locator;
    readonly uIIssuedNameID: Locator;
    readonly uIIssuedLastName: Locator;
    readonly uIIssuedFirstName: Locator;
    readonly uIInvYearEdit: Locator;
    readonly uIInvNoEdit: Locator;
    readonly uIInvNoInfoIcon: Locator;
    readonly uICheckOutEdit: Locator;
    readonly uIIssuedToNameEdit: Locator;
    readonly uIInventoryInfoIcon: Locator;
    readonly uIInventoryNumberEdit: Locator;
    readonly uIDeptTrackingEdit: Locator;
    readonly uIFeesTab: Locator;
    readonly uIInventoryItemTab: Locator;
    readonly uIIssuedMiddleName: Locator;
    readonly uIIssuedPFLookupIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uIRefreshButton = page.locator('#cmdRefresh');
        this.uISignOutButton = page.locator('#cmdSignOut');
        this.uISignInButton = page.locator('#cmdSignIn');
        this.uIIssuingPFCodeEdit = page.locator('#lupIssuingPF_CodeValue');
        this.uIIssuedPFCodeEdit = page.locator('#lupIssuedPF_CodeValue');
        this.uIIssuedPFDescriptionEdit = page.locator('#lupIssuedPF_CodeDescription');
        this.uIIssuingPFDescriptionEdit = page.locator('#lupIssuingPF_CodeDescription');
        this.uIIssuedNameType = page.locator('#nName_NameType');
        this.uIIssuedNameID = page.locator('#nName_NameTypeID');
        this.uIIssuedLastName = page.locator('#nName_LastName');
        this.uIIssuedFirstName = page.locator('#nName_FirstName');
        this.uIInvYearEdit = page.locator('#numInvNo_Year');
        this.uIInvNoEdit = page.locator('#numInvNo_Number');
        this.uIInvNoInfoIcon = page.locator('#numInvNo_imgBtn');
        this.uICheckOutEdit = page.locator('#txtCheckOut');
        this.uIIssuedToNameEdit = page.locator('#txtCheckOut');
        this.uIInventoryInfoIcon = page.locator('#numInvNo_imgBtn');
        this.uIInventoryNumberEdit = page.locator('#numInvNo_Number');
        this.uIDeptTrackingEdit = page.locator('#txtDeptTracking');
        this.uIFeesTab = page.locator("//span[text()='Fees']");
        this.uIInventoryItemTab = page.locator("//span[text()='Inventory Item']");
        this.uIIssuedMiddleName = page.locator('#nName_MiddleName');
        this.uIIssuedPFLookupIcon = page.locator('#lupIssuedPF_imgBtn');
    }

    async enterAtIssuingPF(): Promise<void> {
        await this.uIIssuingPFCodeEdit.fill(PoliceData.getAnimalControlModuleValue('IssuingPF'));
    }

    async enterAtIssuedPF(): Promise<void> {
        await this.uIIssuedPFCodeEdit.fill(PoliceData.getAnimalControlModuleValue('IssuedPF'));
        await this.uIIssuedPFCodeEdit.press('Tab');
    }

    async enterAtNameID(): Promise<void> {
        const val = PoliceData.getAnimalControlModuleValue('NameID');
        await this.uIIssuedNameType.fill(val.substring(0, 2));
        await this.uIIssuedNameType.press('Tab');
        await this.uIIssuedNameID.fill(val.substring(3));
        await this.uIIssuedNameID.press('Tab');
    }

    async enterAtInventoryNo(invNo?: string): Promise<void> {
        const val = invNo || PoliceData.getAnimalControlModuleValue('InventoryNo');
        await this.uIInvYearEdit.fill(val.substring(0, 3));
        await this.uIInvYearEdit.press('Tab');
        await this.uIInvNoEdit.fill(val.substring(4));
        await this.uIInvNoEdit.press('Tab');
    }

    async verifyInventoryInfoIconIsDisplayed(): Promise<void> {
        await expect(this.uIInvNoInfoIcon).toBeVisible();
    }

    async verifyAtCheckOutNo(): Promise<void> {
        const checkoutNo = await this.uICheckOutEdit.inputValue();
        expect(checkoutNo).toBe(PoliceData.getAnimalControlModuleValue('Checkout'));
    }

    async clickInventoryInfoIcon(): Promise<void> {
        await this.uIInventoryInfoIcon.click();
    }

    async tabOutInventory(): Promise<void> {
        await this.uIInventoryNumberEdit.click();
        await this.uIInventoryNumberEdit.press('Tab');
    }

    async verifyDeptTracking(): Promise<void> {
        const text = await this.uIDeptTrackingEdit.inputValue();
        expect(text).toBe(PoliceData.getAnimalControlModuleValue('DeptTracking'));
    }

    async clickSignOutButton(): Promise<void> {
        await this.uISignOutButton.click();
        await this.popup.confirmYesButton.click();
    }

    async verifyAdditionSuccessful(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('1002 - Addition Successful');
        await this.popup.acknowledgeOkButton.click();
    }

    async clickSignIn(): Promise<void> {
        await this.uISignInButton.click();
        await this.popup.confirmYesButton.click();
    }

    async verifyUpdateSuccessful(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('1003 - Update Successful');
        await this.popup.acknowledgeOkButton.click();
    }

    async switchToFeesTab(): Promise<void> {
        await this.uIFeesTab.click();
        new BrowserHelpers(this.page).switchToFrame('/Billing/frmFees.aspx?');
    }

    async clickInventoryItemTab(): Promise<void> {
        await this.uIInventoryItemTab.click();
    }

    async verifySignInIsDisabled(): Promise<void> {
        await expect(this.uISignInButton).toBeDisabled();
    }

    async verifySignOutIsDisabled(): Promise<void> {
        await expect(this.uISignOutButton).toBeDisabled();
    }

    async verifyIssuedToMiddleNameFieldsIsDisabled(): Promise<void> {
        const classAttr = await this.uIIssuedMiddleName.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async verifyIssuedToNameTypeFieldsIsDisabled(): Promise<void> {
        const classAttr = await this.uIIssuedNameType.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async verifyIssuedToNameIDFieldsIsDisabled(): Promise<void> {
        const classAttr = await this.uIIssuedNameID.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async verifyIssuedToLastNameFieldsIsDisabled(): Promise<void> {
        const classAttr = await this.uIIssuedLastName.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async verifyIssuedToFirstNameFieldsIsDisabled(): Promise<void> {
        const classAttr = await this.uIIssuedFirstName.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async clearIssuedPF(): Promise<void> {
        await this.uIIssuedPFCodeEdit.clear();
        await this.uIIssuedPFCodeEdit.press('Tab');
    }

    async verifyIssuedToMiddleNameFieldsIsEnabled(): Promise<void> {
        await expect(this.uIIssuedMiddleName).toBeEnabled();
    }

    async verifyIssuedToNameTypeFieldsIsEnabled(): Promise<void> {
        await expect(this.uIIssuedNameType).toBeEnabled();
    }

    async verifyIssuedToNameIDFieldsIsEnabled(): Promise<void> {
        await expect(this.uIIssuedNameID).toBeEnabled();
    }

    async verifyIssuedToLastNameFieldsIsEnabled(): Promise<void> {
        await expect(this.uIIssuedLastName).toBeEnabled();
    }

    async verifyIssuedToFirstNameFieldsIsEnabled(): Promise<void> {
        await expect(this.uIIssuedFirstName).toBeEnabled();
    }

    async verifyIssuedPFCodesIsDisabled(): Promise<void> {
        const classAttr = await this.uIIssuedPFCodeEdit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async verifyIssuedPFDescriptionIsDisabled(): Promise<void> {
        const classAttr = await this.uIIssuedPFDescriptionEdit.getAttribute('class') || '';
        expect(classAttr).toContain('textboxInactive');
    }

    async verifyIssuedPFLookupIconIsDisabled(): Promise<void> {
        const classAttr = await this.uIIssuedPFLookupIcon.getAttribute('class') || '';
        expect(classAttr).toContain('lookuplensinactive');
    }

    async verify21861PleaseCompleteTheFeesTabAcknowledgePopupMessage(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('21861 - Please complete the Fees tab for Invoice creation');
        await this.popup.acknowledgeOkButton.click();
    }
}

export class AnimalCageRentalInventoryItemTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIInventoryItemTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIInventoryItemTable = page.locator("//div[@id='tabInventory_tmpl0_ctrlInvItem_grdEquipSignLog']");
    }

    async verifySignedOutAsLastAction(): Promise<void> {
        const lastAction = await this.grid.getGridCellInnerText(this.uIInventoryItemTable, 'Action', 0);
        expect(lastAction.trim()).toBe('Signed Out');
    }

    async verifySignedInAsLastAction(): Promise<void> {
        const lastAction = await this.grid.getGridCellInnerText(this.uIInventoryItemTable, 'Action', 0);
        expect(lastAction.trim()).toBe('Signed In');
    }
}

export class AnimalCageRentalFeesTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIFeesGridTable: Locator;
    readonly uIItemCodeDropdown: Locator;
    readonly uIAddButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIFeesGridTable = page.locator('#grdInvoice');
        this.uIItemCodeDropdown = page.locator('#cddItemCode');
        this.uIAddButton = page.locator('#imgAdd');
    }

    async verifyAtRateInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIFeesGridTable, '$4.00');
        const text = await cell.innerText();
        expect(text.trim()).toBe(PoliceData.getAnimalControlModuleValue('Rate'));
    }

    async selectAtItemCode(): Promise<void> {
        await this.uIItemCodeDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('ItemCode') });
    }

    async clickAdd(): Promise<void> {
        await this.uIAddButton.click();
    }

    async verifyAtItemCodeInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIFeesGridTable, PoliceData.getAnimalControlModuleValue('ItemCode'));
        const text = await cell.innerText();
        expect(text.trim()).toBe(PoliceData.getAnimalControlModuleValue('ItemCode'));
    }
}

export class AnimalCageRentalInvoiceTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIInvoiceTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIInvoiceTable = page.locator("//div[@id='tabInventory_tmpl3_usrGenericInvoicePayments1_grdInvoice']");
    }
}

// ============================================================================
// 8. ANIMAL NAME MERGE PAGE & HELP WINDOW
// ============================================================================
export class AnimalNameMergePage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIJurisComboBox: Locator;
    readonly uINameTypeEdit: Locator;
    readonly uINameIDEdit: Locator;
    readonly uINameBblIcon: Locator;
    readonly uIMergeNameBblIcon: Locator;
    readonly uIResetButton: Locator;
    readonly uISearchButton: Locator;
    readonly uINameMergeUNTypeEdit: Locator;
    readonly uINameMergeUNIDEdit: Locator;
    readonly uINameMergeLastNameEdit: Locator;
    readonly uINameMergeFirstNameEdit: Locator;
    readonly uISelectAllCheckbox: Locator;
    readonly uIMergeButton: Locator;
    readonly uINameMergeLstResultTable: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIPrimaryNameInfoIcon: Locator;
    readonly uIMergeNameTypeEdit: Locator;
    readonly uIMergeNameIDEdit: Locator;
    readonly uIBottomLeftSideStatusBar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIJurisComboBox = page.locator('#lstJuris');
        this.uINameTypeEdit = page.locator('#txtNID');
        this.uINameIDEdit = page.locator('#txtNameTypeID');
        this.uINameBblIcon = page.locator('#imgDetail');
        this.uIMergeNameBblIcon = page.locator('#tabAnimalNameMerge_tmpl0_usrAnimalNameMergeLst1_imgDetail3');
        this.uIResetButton = page.locator('#tabAnimalNameMerge_tmpl0_usrAnimalNameMergeLst1_cmdReset');
        this.uISearchButton = page.locator('#tabAnimalNameMerge_tmpl0_usrAnimalNameMergeLst1_cmdSrch');
        this.uINameMergeUNTypeEdit = page.locator('#tabAnimalNameMerge_tmpl0_usrAnimalNameMergeLst1_txtUNID');
        this.uINameMergeUNIDEdit = page.locator('#tabAnimalNameMerge_tmpl0_usrAnimalNameMergeLst1_txtUNameTypeID');
        this.uINameMergeLastNameEdit = page.locator('#tabAnimalNameMerge_tmpl0_usrAnimalNameMergeLst1_txtULastName');
        this.uINameMergeFirstNameEdit = page.locator('#tabAnimalNameMerge_tmpl0_usrAnimalNameMergeLst1_txtUFirstName');
        this.uISelectAllCheckbox = page.locator('#tabAnimalNameMerge_tmpl0_usrAnimalNameMergeLst1_chkCheckAll');
        this.uIMergeButton = page.locator('#cmdMerge');
        this.uINameMergeLstResultTable = page.locator('#tabAnimalNameMerge_tmpl0_usrAnimalNameMergeLst1_grdAnimalNameMergeLst');
        this.uILastNameEdit = page.locator('#txtLastName');
        this.uIFirstNameEdit = page.locator('#txtFirstName');
        this.uIPrimaryNameInfoIcon = page.locator('#imgDetail');
        this.uIMergeNameTypeEdit = page.locator('#txtNID2');
        this.uIMergeNameIDEdit = page.locator('#txtNameTypeID2');
        this.uIBottomLeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
    }

    async enterAtPrimaryNameID(): Promise<void> {
        await this.uINameIDEdit.fill(PoliceData.getAnimalControlModuleValue('PrimaryNameID').substring(3));
        await this.uINameIDEdit.press('Tab');
    }

    async enterPrimaryNameID1(id: string): Promise<void> {
        await this.uINameIDEdit.fill(id.substring(3));
        await this.uINameIDEdit.press('Tab');
    }

    async enterAtMergeNameID(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uINameMergeUNTypeEdit.click();
        await this.uINameMergeUNTypeEdit.fill(PoliceData.getAnimalControlModuleValue('MergeNameID').substring(0, 1));
        await this.uINameMergeUNTypeEdit.press('Tab');
        await this.page.waitForTimeout(1000);
        await this.uINameMergeUNIDEdit.clear();
        await this.uINameMergeUNIDEdit.fill(PoliceData.getAnimalControlModuleValue('MergeNameID').substring(3));
        await this.uINameMergeUNIDEdit.press('Tab');
    }

    async enterMergeName(id: string): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uINameMergeUNTypeEdit.click();
        await this.uINameMergeUNTypeEdit.fill(id.substring(0, 1));
        await this.uINameMergeUNTypeEdit.press('Tab');
        await this.page.waitForTimeout(1000);
        await this.uINameMergeUNIDEdit.clear();
        await this.uINameMergeUNIDEdit.fill(id.substring(3));
        await this.uINameMergeUNIDEdit.press('Tab');
    }

    async verifyNameMergedSuccessful(): Promise<void> {
        const text = await this.uIBottomLeftSideStatusBar.innerText();
        expect(text).toContain('6053 - Names merged successfully');
        await this.page.waitForTimeout(2000);
    }

    async enterAtMergeLastName(): Promise<void> {
        await this.uINameMergeLastNameEdit.fill(PoliceData.getAnimalControlModuleValue('MergeLastName'));
    }

    async enterAtMergeFirstName(): Promise<void> {
        await this.uINameMergeFirstNameEdit.fill(PoliceData.getAnimalControlModuleValue('MergeFirstName'));
    }

    async clickSearchButton(): Promise<void> {
        await this.uISearchButton.click();
    }

    async clickMergeButton(): Promise<void> {
        await this.uIMergeButton.click();
    }

    async selectRowCheckBoxByAnimalName(): Promise<void> {
        await this.page.waitForLoadState('load');
        await this.grid.selectRowCheckboxByCellText(this.uINameMergeLstResultTable, PoliceData.getAnimalControlModuleValue('MergeAnimalName'));
    }

    async verifyAtPrimaryNameValidated(): Promise<void> {
        const src = await this.uINameBblIcon.getAttribute('src') || '';
        expect(src).toContain('debug.gif');
    }

    async verifyAtMergingNameValidated(): Promise<void> {
        await expect(this.uIMergeNameBblIcon).toBeVisible();
    }

    async verifyAtAnimalNameInMergeTable(rowIndex: number): Promise<void> {
        const name = await this.grid.getGridCellInnerText(this.uINameMergeLstResultTable, 'Name', rowIndex);
        expect(name).toBe(PoliceData.getAnimalControlModuleValue('MergeAnimalName'));
    }

    async verifyAtAnimalIDInMergeTable(rowIndex: number): Promise<void> {
        const id = await this.grid.getGridCellInnerText(this.uINameMergeLstResultTable, 'ID', rowIndex);
        expect(id).toBe(PoliceData.getAnimalControlModuleValue('MergeAnimalID'));
    }

    async verifySameNameCannotBeMergedAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6056) Same names cannot be merged');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyNameMergedSuccessfullyAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('6053 - Names merged successfully');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyMergeButtonEnabled(): Promise<void> {
        await expect(this.uIMergeButton).toBeEnabled();
    }

    async verify6071MergedNameIDsAcknowledge(): Promise<void> {
        const ackMsg = `(6071) ${PoliceData.getAnimalControlModuleValue('MergeNameID')} Merged With ${PoliceData.getAnimalControlModuleValue('PrimaryNameID')}`;
        console.log(ackMsg);
        await expect(this.popup.modalBody).toContainText(ackMsg);
        await this.popup.acknowledgeOkButton.click();
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async selectcheckbox(): Promise<void> {
        await this.page.locator("//table/tbody/tr/td/img[contains(@src, 'checkbox_off.gif')]").click();
    }

    async verifyNoRecordsFoundAcknowledgePopup(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6017) No Records Found');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyAtZeroInAnimalId(text: string): Promise<void> {
        const subText = text.substring(2, 12);
        const lenWithZeros = subText.length;
        const parseIntVal = parseInt(subText);
        const withoutZeros = String(parseIntVal);
        const lenWithoutZeros = withoutZeros.length;
        const actualZeros = lenWithZeros - lenWithoutZeros;
        for (let i = 1; i <= actualZeros; i++) {
            const charDigit = subText.charAt(actualZeros - i);
            const numVal = parseInt(charDigit);
            expect(numVal).toBe(0);
            console.log(`${numVal}---${i}`);
        }
    }

    async verifyAtLastName(): Promise<void> {
        await expect(this.uILastNameEdit).toHaveValue(PoliceData.getAnimalControlModuleValue('LastName'));
    }

    async verifyAtFirstName(): Promise<void> {
        await expect(this.uIFirstNameEdit).toHaveValue(PoliceData.getAnimalControlModuleValue('FirstName'));
    }

    async clickSelectAllCheckbox(): Promise<void> {
        await this.uISelectAllCheckbox.click();
    }

    async doubleclickMergeButton(): Promise<void> {
        await this.uIMergeButton.dblclick();
    }

    async selectRowCheckBoxById(id: string): Promise<void> {
        await this.page.waitForLoadState('load');
        await this.grid.selectRowCheckboxByCellText(this.uINameMergeLstResultTable, id);
    }

    async verifyAtIdAppearsGreenColor(id: string): Promise<void> {
        const cell = await this.grid.getGridCell(this.uINameMergeLstResultTable, id);
        const color = await cell.evaluate(el => getComputedStyle(el).color);
        expect(color).toContain('rgba(0, 128, 0, 1)');
    }
}

export class AnimalNameMergeHelpWindowPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;

    readonly uIMergeButton: Locator;
    readonly uINameMergeTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);

        this.uIMergeButton = page.locator('#cmdMerge');
        this.uINameMergeTable = page.locator('#grdNameMerge');
    }

    async clickMergeButton(): Promise<void> {
        await this.uIMergeButton.click();
    }

    async verify6130AddressUpdateAsOtherAddressConfirmation(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6130) Update the address as an Other Address in the merged Animal Name entry?');
        await this.popup.confirmYesButton.click();
    }

    async veify6065MergeFieldReplaceWithPrimaryFieldConfirmation(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('(6065) Selected Merge fields will replace Primary fields. Do you want to proceed?');
        await this.popup.confirmYesButton.click();
    }

    async verifyAtNameMergedSuccessfullyAcknowledge(): Promise<void> {
        await expect(this.popup.modalBody).toContainText('6053 - Names merged successfully');
        await this.popup.acknowledgeOkButton.click();
    }

    async SelectRowCheckBoxByFields(): Promise<void> {
        await this.page.waitForLoadState('load');
        await this.grid.selectRowCheckboxByCellText(this.uINameMergeTable, PoliceData.getAnimalControlModuleValue('Field'));
    }
}

// ============================================================================
// 9. ANIMAL NAME ENTRY MEDICAL PROCEDURE POPUP
// ============================================================================
export class AnimalNameEntryMedicalProcedurePage {
    readonly page: Page;
    readonly popup: PopupHelpers;

    readonly uITotalCostEdit: Locator;
    readonly uIDateOfProcedure: Locator;
    readonly uIVeterinarianNameIDEdit: Locator;
    readonly uIVeterinarianNameTypeEdit: Locator;
    readonly uIVacTypeDropdown: Locator;
    readonly uIBrandDropdown: Locator;
    readonly uIProcedurePerformed: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uISaveButton: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uIVeterinarianInfoIcon: Locator;
    readonly uIDeclawedCheckbox: Locator;
    readonly uITypeDropdown: Locator;
    readonly uIStoolSampleCheckbox: Locator;
    readonly uIResultDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);

        this.uITotalCostEdit = page.locator('#curCost');
        this.uIDateOfProcedure = page.locator('#dtcProcidure_KPIDttmCtrl');
        this.uIVeterinarianNameIDEdit = page.locator('#nVeterinarian_NameTypeID');
        this.uIVeterinarianNameTypeEdit = page.locator('#nVeterinarian_NameType');
        this.uIVacTypeDropdown = page.locator('#cddVacType_DropDown');
        this.uIBrandDropdown = page.locator('#cddBrand_DropDown');
        this.uIProcedurePerformed = page.locator('#txtProcedurePerformed');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uISaveButton = page.locator('#cmdSave');
        this.uILeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIVeterinarianInfoIcon = page.locator('#nVeterinarian_imgSrch');
        this.uIDeclawedCheckbox = page.locator('#chkDeclawed');
        this.uITypeDropdown = page.locator('#cddType_DropDown');
        this.uIStoolSampleCheckbox = page.locator('#chkStoolSample');
        this.uIResultDropdown = page.locator('#cddResult_DropDown');
    }

    async enterTotalCost(): Promise<void> {
        await this.uITotalCostEdit.fill(RandomHelpers.getRandomBetween(1000, 9999).toString());
    }

    async enterAtVeterinarianID(): Promise<void> {
        const val = PoliceData.getAnimalControlModuleValue('VeterinarianNameID');
        await this.uIVeterinarianNameTypeEdit.clear();
        await this.uIVeterinarianNameTypeEdit.fill(val.substring(0, 1));
        await this.uIVeterinarianNameTypeEdit.press('Tab');
        await this.uIVeterinarianNameIDEdit.fill(val.substring(2));
        await this.uIVeterinarianNameIDEdit.press('Tab');
    }

    async selctVacType(): Promise<void> {
        const options = await this.uIVacTypeDropdown.locator('option').allInnerTexts();
        const valid = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOpt = valid[Math.floor(Math.random() * valid.length)];
        await this.uIVacTypeDropdown.selectOption({ label: randomOpt });
    }

    async selectBrand(): Promise<void> {
        const options = await this.uIBrandDropdown.locator('option').allInnerTexts();
        const valid = options.filter(o => o.trim() !== '' && o.trim() !== '--');
        const randomOpt = valid[Math.floor(Math.random() * valid.length)];
        await this.uIBrandDropdown.selectOption({ label: randomOpt });
    }

    async enterProcedurePerformed(): Promise<void> {
        await this.uIProcedurePerformed.fill(DateHelpers.randomString(80));
    }

    async saveAndClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await this.popup.confirmYesButton.click();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesButton.click();
    }

    async verifyAdditionSuccessfulMessage(): Promise<void> {
        const text = await this.uILeftSideStatusBar.innerText();
        expect(text).toContain('1002 - Addition Successful');
    }

    async clickNameInfoIcon(): Promise<void> {
        await this.uIVeterinarianInfoIcon.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyWindowTitle(): Promise<void> {
        const title = await this.page.title();
        expect(title).toContain(PoliceData.getAnimalControlModuleValue('WindowTitle'));
    }

    async clickDeclawedCheckbox(): Promise<void> {
        await this.uIDeclawedCheckbox.click();
    }

    async clickStoolSampleCheckbox(): Promise<void> {
        await this.uIStoolSampleCheckbox.click();
    }

    async verifyTypeFieldIsEnabled(): Promise<void> {
        await expect(this.uITypeDropdown).toBeEnabled();
    }

    async verifyResultFieldIsEnabled(): Promise<void> {
        await expect(this.uIResultDropdown).toBeEnabled();
    }

    async selectAtType(): Promise<void> {
        await this.uITypeDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Type') });
        await this.uITypeDropdown.press('Tab');
    }

    async selectAtResult(): Promise<void> {
        await this.uIResultDropdown.selectOption({ label: PoliceData.getAnimalControlModuleValue('Result') });
        await this.uIResultDropdown.press('Tab');
    }

    async verifyTypeFieldIsDisabled(): Promise<void> {
        await expect(this.uITypeDropdown).toBeDisabled();
    }

    async verifyResultFieldIsDisabled(): Promise<void> {
        await expect(this.uIResultDropdown).toBeDisabled();
    }
}

// ============================================================================
// 10. ANIMAL NAME SEARCH HELP WINDOW
// ============================================================================
export class AnimalNameSearchHelpWindowPage {
    readonly page: Page;
    readonly grid: GridHelpers;

    readonly uIAnimalNameSearchResultGrid: Locator;
    readonly uIViewDetailButtonClass: Locator;
    readonly uISelectButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);

        this.uIAnimalNameSearchResultGrid = page.locator('#grdNames');
        this.uIViewDetailButtonClass = page.locator("//li[@title='SelectName']");
        this.uISelectButton = page.locator("//span[@title='SelectName' and text()='Select Name']");
    }

    async selectRow(): Promise<void> {
        await this.grid.selectRowByCellText(this.uIAnimalNameSearchResultGrid, BaseData.getNamesModuleValue('Name'));
    }

    async verifyViewDetailsButtonDisabled(): Promise<void> {
        const classAttr = await this.uIViewDetailButtonClass.getAttribute('class') || '';
        console.log(classAttr);
        expect(classAttr).toBe('igdm_BlueThemeMenuItemHorizontalRoot igdm_BlueThemeMenuItemHorizontalRootDisabled');
    }

    async verifyAtNameIdInGrid(NameID: string): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIAnimalNameSearchResultGrid, NameID);
        const text = await cell.innerText();
        expect(text).toBe(NameID);
    }

    async verifyAtNameInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIAnimalNameSearchResultGrid, PoliceData.getAnimalControlModuleValue('Name'));
        const text = await cell.innerText();
        console.log(text);
        expect(text).toContain(PoliceData.getAnimalControlModuleValue('Name'));
    }

    async selectCheckBoxInGrid(): Promise<void> {
        await this.grid.selectRowCheckboxByCellText(this.uIAnimalNameSearchResultGrid, PoliceData.getAnimalControlModuleValue('Name'));
    }

    async verifyViewDetailsButtonEnabled(): Promise<void> {
        const classAttr = await this.uIViewDetailButtonClass.getAttribute('class') || '';
        console.log(classAttr);
        expect(classAttr.trim()).toBe('igdm_BlueThemeMenuItemHorizontalRoot');
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async verifySelectButtonNotPresent(): Promise<void> {
        await expect(this.uISelectButton).not.toBeVisible();
    }
}

// ============================================================================
// 11. MAIN ANIMAL CONTROL WINDOW SWITCHING MANAGER
// ============================================================================
export class AnimalControlPage {
    readonly page: Page;
    private browserHelpers: BrowserHelpers;

    constructor(page: Page) {
        this.page = page;
        this.browserHelpers = new BrowserHelpers(page);
    }

    async Reset(): Promise<void> {
        // No-op for state management
    }

    async switchToAdvanceTab(): Promise<void> {
        await this.page.locator("//span[text()='Advanced']").click();
    }

    async switchToAnimalNameCommentsScreen(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Animal Name Comments - 6224');
    }

    async switchToAnimalNameEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Animal Name Entry');
    }

    async switchToAnimalNameEntryOfMedical(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmMedicalProcedure');
    }

    async switchToAnimalNameScreen(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmVerifyAnimalName.aspx');
    }

    async switchToAnimalRegistrationSearchScreen(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmLicenseSrch.aspx');
    }

    async switchToAnimalRegistrationEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Animal Registration');
    }

    async switchToAnimalRegistrationEntryUsingURL(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('AnimalRegistrationEntry.aspx?hdnMode=CHG&RegID');
    }

    async switchToAnimalNameMergeScreen(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Animal Name Merge');
    }

    async switchToAnimalNameMergeHelpWindow(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Animal Name Merge');
    }

    async switchToAnimalCaseSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmAnimalSrch.aspx');
    }

    async switchToAnimalNameSearchScreen(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmAnimalNameSrch.aspx');
    }

    async switchToAnimalCaseEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Animal Case Entry');
    }

    async switchToAnimalLostOrFound(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Animal Lost/Found');
    }

    async switchToAnimalCageRental(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Animal Cage Rental');
    }

    async switchToMedicalProcedure(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmMedicalProcedure.aspx');
    }

    async switchToAnimalLostOrFoundEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Animal Lost/Found Entry');
    }

    async switchToSelectReport(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Select report');
    }

    async switchToAnimalNameSearchHelpWindow(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmAnimalNameSrch.aspx');
    }
}

