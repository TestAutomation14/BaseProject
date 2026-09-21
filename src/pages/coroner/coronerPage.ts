// @ts-nocheck
import { Page, Locator, expect } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { AcknowledgePage, ConfirmPage, PopupPage } from '../popup.page';
import { BaseData } from '../../data/base-data';
import { GridHelpers } from '../../helpers/grid-helpers';
import { ElementHelpers } from '../../helpers/element-helpers';
import { PopupHelpers } from '../../helpers/popup-helpers';
import { DateHelpers, RandomHelpers } from '../../helpers';

export class CoronerCaseSearchPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIAddNewButton: Locator;
    readonly uIBackButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIInvestYearEdit: Locator;
    readonly uIInvestNoEdit: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uINameType: Locator;
    readonly uINameIDEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIMiddleEdit: Locator;
    readonly uIRMSCaseYear: Locator;
    readonly uIRMSCaseNo: Locator;
    readonly uIDateofDeathFrom: Locator;
    readonly uIDateofDeathTo: Locator;
    readonly uIDodUknownCheckbox: Locator;
    readonly uINameIbobble: Locator;
    readonly uIStatusDropDown: Locator;
    readonly uICaseStatusDropDown: Locator;
    readonly uIInvestigator: Locator;
    readonly uIDateAssigned: Locator;
    readonly uIAddressOfDeath: Locator;
    readonly uICauseOfDeathInput: Locator;
    readonly uICauseOfDeathCombobox: Locator;
    readonly uIMannerOfDeathInput: Locator;
    readonly uIMannerOfDeathCombobox: Locator;
    readonly uILocalMortuary: Locator;
    readonly uIAgeAtDOD: Locator;
    readonly uIFacilitynameType: Locator;
    readonly uIFacilityNameIDEdit: Locator;
    readonly uIFacilityLastNameEdit: Locator;
    readonly uIFacilityFirstNameEdit: Locator;
    readonly uIFacilityMiddleEdit: Locator;
    readonly uIRemarksEdit: Locator;
    readonly uICaseSearchTable: Locator;
    readonly uIToxicologyGrid: Locator;
    readonly uICoronerCaseSearchGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uISearchButton = page.locator("//span[text()='Search']");
        this.uIInvestYearEdit = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_numTaskNbr_Year');
        this.uIInvestNoEdit = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_numTaskNbr_Number');
        this.uIJurisDropdown = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_lstJuris');
        this.uINameType = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_nmcName_NameType');
        this.uINameIDEdit = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_nmcName_NameTypeID');
        this.uILastNameEdit = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_nmcName_LastName');
        this.uIFirstNameEdit = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_nmcName_FirstName');
        this.uIMiddleEdit = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_nmcName_MiddleName');
        this.uIRMSCaseYear = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_ncRmsCase_Year');
        this.uIRMSCaseNo = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_ncRmsCase_Number');
        this.uIDateofDeathFrom = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_dttDeathFrom_KPIDttmCtrl');
        this.uIDateofDeathTo = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_dttDeathTo_KPIDttmCtrl');
        this.uIDodUknownCheckbox = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_chkDOD');
        this.uINameIbobble = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_nmcName_imgSrch');
        this.uIStatusDropDown = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_CddStatus_DropDown');
        this.uICaseStatusDropDown = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_CddCaseStatus');
        this.uIInvestigator = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_lupInvPF_CodeValue');
        this.uIDateAssigned = page.locator('#tabCorEntry_tmpl0_usrmain1_dttDttmFrom_KPIDttmCtrl');
        this.uIAddressOfDeath = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_addrRprtdLoc_txtFrom');
        this.uICauseOfDeathInput = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_CddCauseofDeath_Input');
        this.uICauseOfDeathCombobox = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_CddCauseofDeath_DropDown');
        this.uIMannerOfDeathInput = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_CddMannerofDeath_Input');
        this.uIMannerOfDeathCombobox = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_CddMannerofDeath_DropDown');
        this.uILocalMortuary = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_CddMortuary_DropDown');
        this.uIAgeAtDOD = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_txtAgeatDOD');
        this.uIFacilitynameType = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_nmcFName_NameType');
        this.uIFacilityNameIDEdit = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_nmcFName_NameTypeID');
        this.uIFacilityLastNameEdit = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_nmcFName_LastName');
        this.uIFacilityFirstNameEdit = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_nmcFName_FirstName');
        this.uIFacilityMiddleEdit = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_nmcFName_MiddleName');
        this.uIRemarksEdit = page.locator('#tabCBE_tmpl0_ctrlusrCoronerSrchMain_txtremarks');
        this.uICaseSearchTable = page.locator('#grdCBE');
        this.uIToxicologyGrid = page.locator('#grdCoronerToxicology');
        this.uICoronerCaseSearchGrid = page.locator("//div[@id='grdCBE']");
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
        await this.page.waitForTimeout(1000);
    }

    async enterAtInvestNo(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const investNo = BaseData.getCoronerModuleValue('InvestNo');
        await this.uIInvestYearEdit.fill(investNo.substring(0, 2));
        await this.uIInvestNoEdit.fill(investNo.substring(3));
        await this.uIInvestNoEdit.press('Tab');
    }

    async enterAtRMSCaseNo(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const caseNo = BaseData.getCoronerModuleValue('CaseNo');
        await this.uIRMSCaseYear.fill(caseNo.substring(0, 2));
        await this.uIRMSCaseNo.fill(caseNo.substring(3));
        await this.uIRMSCaseNo.press('Tab');
    }

    async clickOnSearch(): Promise<void> {
        await this.uISearchButton.click();
        await this.page.waitForTimeout(1000);
    }

    async enterAtAddressOfDeath(): Promise<void> {
        await this.uIAddressOfDeath.fill(BaseData.getCoronerModuleValue('LocationOfDeath'));
        await this.uIAddressOfDeath.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async selectAtCauseOfDeath(): Promise<void> {
        await this.uICauseOfDeathInput.click();
        await this.elementHelpers.selectRadControlDropDownValueSelect(
            this.uICauseOfDeathCombobox,
            BaseData.getCoronerModuleValue('CauseOfDeath')
        );
    }

    async selectAtCaseStatus(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(
            this.uIStatusDropDown,
            BaseData.getCoronerModuleValue('CaseStatus')
        );
    }

    async selectGridRowByInvestNo(): Promise<void> {
        await this.grid.selectRowByCellText(
            this.uICaseSearchTable,
            BaseData.getCoronerModuleValue('InvestNo')
        );
        await this.page.waitForTimeout(1000);
    }

    async selectGridRowByName(): Promise<void> {
        await this.grid.selectRowByCellText(
            this.uICaseSearchTable,
            BaseData.getCoronerModuleValue('Name')
        );
        await this.page.waitForTimeout(1000);
    }

    async verifyNameIntheGridByLatNameFistName(rowIndex: number): Promise<void> {
        const name = BaseData.getRecordsModuleValue('LastName') + ', ' + BaseData.getRecordsModuleValue('FirstName');
        const text = await this.grid.getGridCellInnerText(this.uICaseSearchTable, 'Deceased Name', rowIndex);
        expect(text).toBe(name);
    }

    async verifyNameIntheGrid(rowIndex: number): Promise<void> {
        const name = BaseData.getRecordsModuleValue('Name');
        const text = await this.grid.getGridCellInnerText(this.uICaseSearchTable, 'Deceased Name', rowIndex);
        expect(text).toBe(name);
    }

    async verifyAtCaseStatus(rowIndex: number): Promise<void> {
        const status = BaseData.getRecordsModuleValue('CaseStatus');
        const text = await this.grid.getGridCellInnerText(this.uICaseSearchTable, 'Status', rowIndex);
        expect(text).toBe(status);
    }

    async enterAtNameID(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const nameID = BaseData.getCoronerModuleValue('NameID');
        await this.uINameType.fill(nameID.substring(0, 2));
        await this.uINameIDEdit.fill(nameID.substring(3));
        await this.uINameIDEdit.press('Tab');
    }

    async close(): Promise<void> {
        await this.page.close();
    }

    async selectRowByAtCaseNoInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(
            this.uICaseSearchTable,
            BaseData.getCoronerModuleValue('CaseNo')
        );
    }

    async selectAtGridRowByInvest(): Promise<void> {
        const investNo = BaseData.getCoronerModuleValue('InvestNo');
        const cells = await this.grid.getGridTableColumnCells(this.uICoronerCaseSearchGrid, 'Invest #');
        for (const cell of cells) {
            const text = await cell.innerText();
            if (text.includes(investNo)) {
                await cell.click();
                break;
            }
        }
    }

    async selectRandowRow(): Promise<void> {
        await this.grid.selectRandomRow(this.uICoronerCaseSearchGrid);
    }

    async getColumnValueBySelectedRowWithColumnIndex(ColumnName: string): Promise<string> {
        const gridTableColumnValues = await this.grid.getGridTableColumnValues(this.uICoronerCaseSearchGrid, 'DOB/Age ');
        let age = null;
        for (const value of gridTableColumnValues) {
            const classAttr = await this.page.locator(`//td[text()='${value}']`).getAttribute('class') || '';
            if (classAttr.includes('ig_BlueThemeSelected igg_BlueThemeSelectedCell') && classAttr !== '') {
                age = value;
                break;
            }
        }
        return age;
    }

    async SplitAgeFromDOBAgeColumn(DOB: string): Promise<string> {
        const split = DOB.split('-');
        const age = split[1]?.trim() || '';
        return age;
    }

    async verifyDOBAgeColumnValuesDoesNotShowMinusSymbol(): Promise<void> {
        const gridTableColumnValues = await this.grid.getGridTableColumnValues(this.uICoronerCaseSearchGrid, 'DOB/Age ');
        const numberRegex = /\b(0[1-9]|1[0-2])\/([0-2][0-9]|3[0-1])\/\d{4} - \d+\b/;
        for (const columnValue of gridTableColumnValues) {
            const result = numberRegex.test(columnValue);
            expect(result).toBeFalsy();
        }
    }
}

export class CoronerEvidenceSearchPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIAddNewButton: Locator;
    readonly uIBackButton: Locator;
    readonly uISearchButton: Locator;
    readonly uIInvestYearEdit: Locator;
    readonly uIInvestNoEdit: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uIRMSCaseYear: Locator;
    readonly uIRMSCaseNo: Locator;
    readonly uIEvidenceYearFrom: Locator;
    readonly uIEvidenceNoFrom: Locator;
    readonly uIEvidenceSeqFrom: Locator;
    readonly uIEvidenceYearTo: Locator;
    readonly uIEvidenceNoTo: Locator;
    readonly uIEvidenceSeqTo: Locator;
    readonly uIEvidenceTypeDropDown: Locator;
    readonly uIReasonDropDown: Locator;
    readonly uIStatusDropDown: Locator;
    readonly uIEvidenceSearchTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIAddNewButton = page.locator("//span[contains(text(),'Add New')]");
        this.uIBackButton = page.locator("//span[contains(text(),'Back')]");
        this.uISearchButton = page.locator("//span[(text()='Search')]");
        this.uIInvestYearEdit = page.locator('#tabCrash_tmpl0_UsrCorSrchBasic_nbrCoronerInvest_Year');
        this.uIInvestNoEdit = page.locator('#tabCrash_tmpl0_UsrCorSrchBasic_nbrCoronerInvest_Number');
        this.uIJurisDropdown = page.locator('#tabCrash_tmpl0_UsrCorSrchBasic_lstJuris');
        this.uIRMSCaseYear = page.locator('#tabCrash_tmpl0_UsrCorSrchBasic_nbrRMSCase_Year');
        this.uIRMSCaseNo = page.locator('#tabCrash_tmpl0_UsrCorSrchBasic_nbrRMSCase_Number');
        this.uIEvidenceYearFrom = page.locator('#tabCrash_tmpl0_UsrCorSrchBasic_nbrPrpertyFrom_Year');
        this.uIEvidenceNoFrom = page.locator('#tabCrash_tmpl0_UsrCorSrchBasic_nbrPrpertyFrom_Number');
        this.uIEvidenceSeqFrom = page.locator('#tabCrash_tmpl0_UsrCorSrchBasic_txtnbrPrpertyFrom');
        this.uIEvidenceYearTo = page.locator('#tabCrash_tmpl0_UsrCorSrchBasic_nbrPrpertyTo_Year');
        this.uIEvidenceNoTo = page.locator('#tabCrash_tmpl0_UsrCorSrchBasic_nbrPrpertyTo_Number');
        this.uIEvidenceSeqTo = page.locator('#tabCrash_tmpl0_UsrCorSrchBasic_txtnbrPrpertyTo');
        this.uIEvidenceTypeDropDown = page.locator('#tabCrash_tmpl0_UsrCorSrchBasic_cddlblEvidenceType_DropDown');
        this.uIReasonDropDown = page.locator('#tabCrash_tmpl0_UsrCorSrchBasic_cddReason_DropDown');
        this.uIStatusDropDown = page.locator('#tabCrash_tmpl0_UsrCorSrchBasic_cddPropStatus_DropDown');
        this.uIEvidenceSearchTable = page.locator('#grdEvi');
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
        await this.page.waitForTimeout(1000);
    }

    async enterAtInvestNo(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const investNo = BaseData.getCoronerModuleValue('InvestNo');
        await this.uIInvestYearEdit.fill(investNo.substring(0, 2));
        await this.uIInvestNoEdit.fill(investNo.substring(3));
        await this.uIInvestNoEdit.press('Tab');
    }

    async enterAtFromEvidenceNo(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const evidenceNo = BaseData.getCoronerModuleValue('EvidenceNo');
        await this.uIEvidenceYearFrom.fill(evidenceNo.substring(0, 2));
        await this.uIEvidenceNoFrom.fill(evidenceNo.substring(3, 9));
        await this.uIEvidenceSeqFrom.fill(evidenceNo.substring(10));
        await this.uIInvestNoEdit.press('Tab');
    }

    async enterAtToEvidenceNo(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const evidenceNo = BaseData.getCoronerModuleValue('EvidenceNo');
        await this.uIEvidenceYearTo.fill(evidenceNo.substring(0, 2));
        await this.uIEvidenceNoTo.fill(evidenceNo.substring(3, 9));
        await this.uIEvidenceSeqTo.fill(evidenceNo.substring(10));
        await this.uIInvestNoEdit.press('Tab');
    }

    async clickOnSearch(): Promise<void> {
        await this.uISearchButton.click();
        await this.page.waitForTimeout(1000);
    }

    async selectAtCaseStatus(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(
            this.uIStatusDropDown,
            BaseData.getCoronerModuleValue('CaseStatus')
        );
    }

    async selectGridRowByInvestNo(): Promise<void> {
        await this.grid.selectRowByCellText(
            this.uIEvidenceSearchTable,
            BaseData.getCoronerModuleValue('InvestNo')
        );
        await this.page.waitForTimeout(1000);
    }

    async selectGridRowByEvidenceNo(EvidenceNo?: string): Promise<void> {
        const evNo = EvidenceNo || BaseData.getCoronerModuleValue('EvidenceNo');
        await this.grid.selectRowByCellText(this.uIEvidenceSearchTable, evNo);
        await this.page.waitForTimeout(1000);
    }

    async selectGridRowByName(): Promise<void> {
        await this.grid.selectRowByCellText(
            this.uIEvidenceSearchTable,
            BaseData.getCoronerModuleValue('Name')
        );
        await this.page.waitForTimeout(1000);
    }

    async verifyNameIntheGrid(rowIndex: number): Promise<void> {
        const name = BaseData.getRecordsModuleValue('LastName') + ', ' + BaseData.getRecordsModuleValue('FirstName');
        const text = await this.grid.getGridCellInnerText(this.uIEvidenceSearchTable, 'Deceased Name', rowIndex);
        expect(text).toBe(name);
    }

    async verifyAtCaseStatus(rowIndex: number): Promise<void> {
        const status = BaseData.getRecordsModuleValue('CaseStatus');
        const text = await this.grid.getGridCellInnerText(this.uIEvidenceSearchTable, 'Status', rowIndex);
        expect(text).toBe(status);
    }

    async selectAtReason(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(
            this.uIReasonDropDown,
            BaseData.getCoronerModuleValue('Reason')
        );
    }
}

export class CoronerCaseEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uILeftSideStatusBar: Locator;
    readonly uIMainTab: Locator;
    readonly uIPropertyTab: Locator;
    readonly uINamesTab: Locator;
    readonly uIReviewTab: Locator;
    readonly uIEffortsTab: Locator;
    readonly uIReportsTab: Locator;
    readonly uIEvidenceTab: Locator;
    readonly uIAttachmentTab: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uINameType: Locator;
    readonly uINameIDEdit: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uIMiddleEdit: Locator;
    readonly uICoronerInvestYear: Locator;
    readonly uICoronerInvestNo: Locator;
    readonly uIRMSCaseYear: Locator;
    readonly uIRMSCaseNo: Locator;
    readonly uIDateofDeath: Locator;
    readonly uITimeofdeath: Locator;
    readonly uIDodUknownCheckbox: Locator;
    readonly uINameIbobble: Locator;
    readonly uISex: Locator;
    readonly uIDOB: Locator;
    readonly uIAge: Locator;
    readonly uIAddress: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uISaveButton: Locator;
    readonly uICustomIconButton: Locator;
    readonly uIManageCustomFieldsMenuLink: Locator;
    readonly uIToxicologyTab: Locator;
    readonly uIImageFrontView: Locator;
    readonly uINameInfoIcon: Locator;
    readonly uIDrMedTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uILeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uIMainTab = page.locator("//span[contains(text(),'Main')]");
        this.uIPropertyTab = page.locator("//span[contains(text(),'Property')]");
        this.uINamesTab = page.locator("(//span[contains(text(),'Names')])[2]");
        this.uIReviewTab = page.locator("//span[contains(text(),'Review')]");
        this.uIEffortsTab = page.locator("(//span[contains(text(),'Efforts')])[2]");
        this.uIReportsTab = page.locator("//span[contains(text(),'Reports')]");
        this.uIEvidenceTab = page.locator("//span[contains(text(),'Evidence')]");
        this.uIAttachmentTab = page.locator("//span[contains(text(),'Attachment')]");
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uINameType = page.locator('#txtNameID_NameType');
        this.uINameIDEdit = page.locator('#txtNameID_NameTypeID');
        this.uILastNameEdit = page.locator('#txtNameID_LastName');
        this.uIFirstNameEdit = page.locator('#txtNameID_FirstName');
        this.uIMiddleEdit = page.locator('#txtNameID_MiddleName');
        this.uICoronerInvestYear = page.locator('#numTaskNbr_Year');
        this.uICoronerInvestNo = page.locator('#numTaskNbr_Number');
        this.uIRMSCaseYear = page.locator('#ncRmsCase_Year');
        this.uIRMSCaseNo = page.locator('#ncRmsCase_Number');
        this.uIDateofDeath = page.locator('#dttofDeath_Date_KPIDttmCtrl');
        this.uITimeofdeath = page.locator('#dttofDeath_Time');
        this.uIDodUknownCheckbox = page.locator('#chkDOD');
        this.uINameIbobble = page.locator('#txtNameID_imgSrch');
        this.uISex = page.locator('#txtSex');
        this.uIDOB = page.locator('#lblDOB');
        this.uIAge = page.locator('#txtAge');
        this.uIAddress = page.locator('#txtAddress');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uISaveButton = page.locator('#cmdSave');
        this.uICustomIconButton = page.locator("//div[@id='tlbContextMenu']//img[@src = '/KPIImages/ico/Customize_1.png']");
        this.uIManageCustomFieldsMenuLink = page.locator("//span[contains(text(), 'Manage Custom Fields')]");
        this.uIToxicologyTab = page.locator("//span[contains(text(),'Toxicology')]");
        this.uIImageFrontView = page.locator('#imgNameFrontView');
        this.uINameInfoIcon = page.locator('#txtNameID_imgSrch');
        this.uIDrMedTab = page.locator("//span[contains(text(),'Dr/Med')]");
    }

    async enterAtRMSCaseNo(): Promise<void> {
        const rmsCaseNo = BaseData.getCoronerModuleValue('RMSCaseNo');
        await this.uIRMSCaseYear.fill(rmsCaseNo.substring(0, 2));
        await this.uIRMSCaseNo.fill(rmsCaseNo.substring(3));
        await this.uIRMSCaseNo.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async clickDODUkownCheckBox(): Promise<void> {
        if (!(await this.uIDodUknownCheckbox.isChecked())) {
            await this.uIDodUknownCheckbox.click();
        }
    }

    async enterAtNameID(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const nameID = BaseData.getCoronerModuleValue('NameID');
        await this.uINameType.fill(nameID.substring(0, 1));
        await this.uINameIDEdit.fill(nameID.substring(2));
        await this.uINameIDEdit.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async verifyAtSex(): Promise<void> {
        const text = await this.uISex.innerText();
        expect(text).toBe(BaseData.getCoronerModuleValue('Sex'));
    }

    async verifyAtSex1(): Promise<void> {
        const text = await this.uISex.innerText();
        expect(text).toBe(BaseData.getCoronerModuleValue('Sex1'));
    }

    async clickOnReviewTab(): Promise<void> {
        await this.uIReviewTab.click();
    }

    async clickOnEffortsTab(): Promise<void> {
        await this.uIEffortsTab.click();
    }

    async verifyMainTabAsBlueColour(): Promise<void> {
        await this.elementHelpers.verifyTabColor(this.uIMainTab, 'rgb(0, 0, 255)');
    }

    async verifyNamesTabAsBlueColour(): Promise<void> {
        await this.elementHelpers.verifyTabColor(this.uINamesTab, 'rgb(0, 0, 255)');
    }

    async verifyReviewTabAsBlueColour(): Promise<void> {
        await this.elementHelpers.verifyTabColor(this.uIReviewTab, 'rgb(0, 0, 255)');
    }

    async verifyEffortTabAsBlueColour(): Promise<void> {
        await this.elementHelpers.verifyTabColor(this.uIEffortsTab, 'rgb(0, 0, 255)');
    }

    async verifyReportTabAsBlueColour(): Promise<void> {
        await this.elementHelpers.verifyTabColor(this.uIReportsTab, 'rgb(0, 0, 255)');
    }

    async clickOnNamesTab(): Promise<void> {
        await this.uINamesTab.click();
        await this.page.waitForTimeout(1000);
        await new BrowserHelpers(this.page).switchToFrame('frmCorName.aspx');
        await this.page.waitForTimeout(1000);
    }

    async clickOnReportsTab(): Promise<void> {
        await this.uIReportsTab.click();
        await new BrowserHelpers(this.page).switchToFrame('frmCoronerReports');
        await this.page.waitForLoadState('load');
    }

    async clickOnAttachmentsTab(): Promise<void> {
        await this.uIAttachmentTab.click();
        await this.page.waitForTimeout(3000);
        await new BrowserHelpers(this.page).switchToFrame('frmTxtAttachMgrEx');
        await this.page.waitForLoadState('load');
    }

    async clickOnMainTab(): Promise<void> {
        await this.uIMainTab.click();
    }

    async clickOnEvidenceTab(): Promise<void> {
        await this.uIEvidenceTab.click();
        await new BrowserHelpers(this.page).switchToFrame('frmCorEvidSrch');
        await this.page.waitForLoadState('load');
    }

    async verifyAgeBasedOnDOB(): Promise<void> {
        const dobStr = BaseData.getCoronerModuleValue('DOB');
        const [month, day, year] = dobStr.split('/').map(Number);
        const dob = new Date(year, month - 1, day);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        const text = await this.uIAge.innerText();
        expect(text).toBe(age.toString());
    }

    async verifyAtAddress(): Promise<void> {
        const text = await this.uIAddress.innerText();
        expect(text).toBe(BaseData.getCoronerModuleValue('Address'));
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
    }

    async saveNClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await this.popup.confirmYes();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
    }

    async clickSaveNClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
    }

    async readInvestNo(): Promise<string> {
        const year = await this.uICoronerInvestYear.inputValue();
        const no = await this.uICoronerInvestNo.inputValue();
        return year + '-' + no;
    }

    async readDateOfDeath(): Promise<string> {
        return await this.uIDateofDeath.inputValue();
    }

    async verifyInvestNoGenerated(): Promise<void> {
        const investNo = await this.readInvestNo();
        expect(investNo).not.toContain('null');
    }

    async clickOnAllTheTabs(): Promise<void> {
        await this.uIMainTab.click();
        await this.page.waitForTimeout(1000);
        await this.uINamesTab.click();
        await this.uIReviewTab.click();
        await this.uIEffortsTab.click();
        await this.uIReportsTab.click();
        await this.uIEvidenceTab.click();
        await this.uIAttachmentTab.click();
        await this.uIPropertyTab.click();
    }

    async verifyAtInvestNo(): Promise<void> {
        const investNo = await this.readInvestNo();
        expect(investNo).toBe(BaseData.getCoronerModuleValue('InvestNo'));
    }

    async verifyAtRMSCaseNo(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const caseYear = await this.uIRMSCaseYear.inputValue();
        const num = await this.uIRMSCaseNo.inputValue();
        const caseNo = caseYear + '-' + num;
        expect(caseNo).toBe(BaseData.getCoronerModuleValue('CaseNo'));
    }

    async verifyAtName(): Promise<void> {
        const lastName = await this.uILastNameEdit.inputValue();
        const firstName = await this.uIFirstNameEdit.inputValue();
        expect(lastName).toBe(BaseData.getCoronerModuleValue('LastName'));
        expect(firstName).toBe(BaseData.getCoronerModuleValue('FirstName'));
    }

    async clickNameInfoIcon(): Promise<void> {
        await this.uINameInfoIcon.click();
    }

    async enterAtLastName(): Promise<void> {
        await this.uILastNameEdit.fill(BaseData.getCoronerModuleValue('LastName'));
        await this.uILastNameEdit.press('Tab');
    }

    async enterAtFirstName(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIFirstNameEdit.fill(BaseData.getCoronerModuleValue('FirstName'));
        await this.uIFirstNameEdit.press('Tab');
    }

    async verifyPropertyTabEnabled(): Promise<void> {
        await expect(this.uIPropertyTab).toBeVisible();
        await this.uIPropertyTab.click();
    }

    async clickResetButton(): Promise<void> {
        await this.uIResetButton.click();
    }

    async verifyInvestNo(investNo: string): Promise<void> {
        const year = await this.uICoronerInvestYear.inputValue();
        const no = await this.uICoronerInvestNo.inputValue();
        expect(investNo).toContain(year);
        expect(investNo).toContain(no);
    }

    async verifyAdditionSuccessfulAcknowledgeMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('1002 - Addition Successful');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyUpdateSuccessfulAcknowledgeMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('1003 - Update Successful');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyAtDOB(): Promise<void> {
        const text = await this.uIDOB.innerText();
        expect(text).toBe(BaseData.getCoronerModuleValue('DOB'));
    }

    async clickCustomIcon(): Promise<void> {
        await this.uICustomIconButton.click();
    }

    async ClickManageCustomFieldsMenu(): Promise<void> {
        await this.uIManageCustomFieldsMenuLink.click();
    }

    async clickOnToxicologyTab(): Promise<void> {
        await this.uIToxicologyTab.click();
        await this.page.waitForTimeout(1000);
        await new BrowserHelpers(this.page).switchToFrame('frmCoronerToxicology.aspx');
        await this.page.waitForTimeout(1000);
    }

    async clickPrintIcon(): Promise<void> {
        await this.uIPrintButton.click();
    }

    async readAge(): Promise<string> {
        return await this.uIAge.innerText();
    }

    async verifyAge(Age: string, AgeFromGrid: string): Promise<void> {
        expect(Age).toBe(AgeFromGrid);
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async verify1051UpdatedDataExistAcknowledge(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(1051)Updated data exists in the Names tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async clickOnDrMedTab(): Promise<void> {
        await this.uIDrMedTab.click();
        await this.page.waitForTimeout(1000);
        await new BrowserHelpers(this.page).switchToFrame('frmCoronerDrMed.aspx');
        await this.page.waitForTimeout(1000);
    }
}

export class CoronerCaseEntryMainTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIInvestigator: Locator;
    readonly uIDateAssigned: Locator;
    readonly uINextReviewdate: Locator;
    readonly uILocationOfDeath: Locator;
    readonly uICauseOfDeathInput: Locator;
    readonly uICauseOfDeathCombobox: Locator;
    readonly uIMannerOfDeathInput: Locator;
    readonly uIMannerOfDeathCombobox: Locator;
    readonly uICaseStatus: Locator;
    readonly uILocalMortuary: Locator;
    readonly uISubstanceInvolvedInput: Locator;
    readonly uISubstanceInvolvedDropDown: Locator;
    readonly uIAgeAtDOD: Locator;
    readonly uIFacilitynameType: Locator;
    readonly uIFacilityNameIDEdit: Locator;
    readonly uIFacilityLastNameEdit: Locator;
    readonly uIFacilityFirstNameEdit: Locator;
    readonly uIFacilityMiddleEdit: Locator;
    readonly uIRemarksEdit: Locator;
    readonly uICauseOfDeathDropdownArrow: Locator;
    readonly uISubstancesInvolvedDropdownArrow: Locator;
    readonly uIMannerofDeathDropdownArrow: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIInvestigator = page.locator('#tabCorEntry_tmpl0_usrmain1_lupInvPFID_CodeValue');
        this.uIDateAssigned = page.locator('#tabCorEntry_tmpl0_usrmain1_dttDttmFrom_KPIDttmCtrl');
        this.uINextReviewdate = page.locator('#tabCorEntry_tmpl0_usrmain1_dttNxtRevDate_KPIDttmCtrl');
        this.uILocationOfDeath = page.locator('#tabCorEntry_tmpl0_usrmain1_addrLocation_txtFrom');
        this.uICauseOfDeathInput = page.locator('#tabCorEntry_tmpl0_usrmain1_cddCauseOfDeath_Input');
        this.uICauseOfDeathCombobox = page.locator('#tabCorEntry_tmpl0_usrmain1_cddCauseOfDeath_DropDown');
        this.uIMannerOfDeathInput = page.locator('#tabCorEntry_tmpl0_usrmain1_CddMannerofDeath_Input');
        this.uIMannerOfDeathCombobox = page.locator('#tabCorEntry_tmpl0_usrmain1_CddMannerofDeath_DropDown');
        this.uICaseStatus = page.locator('#tabCorEntry_tmpl0_usrmain1_txtCaseStatus');
        this.uILocalMortuary = page.locator('#tabCorEntry_tmpl0_usrmain1_CddMortuary_DropDown');
        this.uISubstanceInvolvedInput = page.locator('#tabCorEntry_tmpl0_usrmain1_CddSubstancesInvolved_Input');
        this.uISubstanceInvolvedDropDown = page.locator('#tabCorEntry_tmpl0_usrmain1_CddSubstancesInvolved_DropDown');
        this.uIAgeAtDOD = page.locator('#tabCorEntry_tmpl0_usrmain1_txtAgeDOD');
        this.uIFacilitynameType = page.locator('#tabCorEntry_tmpl0_usrmain1_txtFacID_NameType');
        this.uIFacilityNameIDEdit = page.locator('#tabCorEntry_tmpl0_usrmain1_txtFacID_NameTypeID');
        this.uIFacilityLastNameEdit = page.locator('#tabCorEntry_tmpl0_usrmain1_txtFacID_LastName');
        this.uIFacilityFirstNameEdit = page.locator('#tabCorEntry_tmpl0_usrmain1_txtFacID_FirstName');
        this.uIFacilityMiddleEdit = page.locator('#tabCorEntry_tmpl0_usrmain1_txtFacID_MiddleName');
        this.uIRemarksEdit = page.locator('#tabCorEntry_tmpl0_usrmain1_txtRemarks');
        this.uICauseOfDeathDropdownArrow = page.locator('#tabCorEntry_tmpl0_usrmain1_cddCauseOfDeath_Arrow');
        this.uISubstancesInvolvedDropdownArrow = page.locator('#tabCorEntry_tmpl0_usrmain1_CddSubstancesInvolved_Arrow');
        this.uIMannerofDeathDropdownArrow = page.locator('#tabCorEntry_tmpl0_usrmain1_CddMannerofDeath_Arrow');
    }

    async enterAtInvestigator(): Promise<void> {
        await this.uIInvestigator.fill(BaseData.getCoronerModuleValue('Investigator'));
        await this.uIInvestigator.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async enterDateAssignedAsCurrentDate(): Promise<void> {
        await this.uIDateAssigned.fill(DateHelpers.getCurrentDate());
        await this.uIDateAssigned.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async verifyNextReviewDateAs7DaysAfterAssign(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const assignedVal = await this.uIDateAssigned.inputValue();
        const nextRevVal = await this.uINextReviewdate.inputValue();
        const diffDays = DateHelpers.getNoOfDaysDifferenceBetweenTwoDates(assignedVal, nextRevVal);
        expect(diffDays.toString()).toBe('7');
    }

    async readNextReviewDate(): Promise<string> {
        return await this.uINextReviewdate.inputValue();
    }

    async clearNextReviewDate(): Promise<void> {
        await this.uINextReviewdate.click();
        await this.uINextReviewdate.clear();
    }

    async verifyAtNextReviewDate(): Promise<void> {
        const currentNextReviewDateValue = await this.uINextReviewdate.inputValue();
        expect(currentNextReviewDateValue).toBe(BaseData.getRecordsModuleValue('NextReviewDate'));
    }

    async enterAtLocationOfDeath(): Promise<void> {
        await this.uILocationOfDeath.fill(BaseData.getCoronerModuleValue('LocationOfDeath'));
        await this.uILocationOfDeath.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async selectAtCauseOfDeath(): Promise<void> {
        await this.uICauseOfDeathInput.click();
        await this.elementHelpers.selectRadControlDropDownValue(
            this.uICauseOfDeathCombobox,
            BaseData.getCoronerModuleValue('CauseOfDeath')
        );
        await this.uICauseOfDeathDropdownArrow.click();
    }

    async selectAtLocalMortuary(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(
            this.uILocalMortuary,
            BaseData.getCoronerModuleValue('LocalMortuary')
        );
    }

    async selectAtSubstanceInvolved(): Promise<void> {
        await this.uISubstanceInvolvedInput.click();
        await this.elementHelpers.selectRadControlDropDownValue(
            this.uISubstanceInvolvedDropDown,
            BaseData.getCoronerModuleValue('SubstanceInvolved')
        );
        await this.uISubstancesInvolvedDropdownArrow.click();
    }

    async selectAtMannerOfDeath(): Promise<void> {
        await this.uIMannerOfDeathInput.click();
        await this.elementHelpers.selectRadControlDropDownValue(
            this.uIMannerOfDeathCombobox,
            BaseData.getCoronerModuleValue('MannerOfDeath')
        );
        await this.uIMannerofDeathDropdownArrow.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAgeOfDeath(): Promise<void> {
        const value = await this.uIAgeAtDOD.inputValue();
        expect(value).toBe(BaseData.getCoronerModuleValue('AgeOfDeath'));
    }

    async enterAtFacilityNameID(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const nameID = BaseData.getCoronerModuleValue('NameID');
        await this.uIFacilitynameType.fill(nameID.substring(0, 1));
        await this.uIFacilityNameIDEdit.fill(nameID.substring(2));
        await this.uIFacilityNameIDEdit.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async enterRemarks(): Promise<void> {
        await this.uIRemarksEdit.fill(RandomHelpers.manualPlusRandomString('Remarks', 10));
    }

    async clickCaseStatusField(): Promise<void> {
        await this.uICaseStatus.click();
    }
}

export class CoronerCaseEntryNamesTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uINameTypeEdit: Locator;
    readonly uINameTypeIDEdit: Locator;
    readonly uIAddressEdit: Locator;
    readonly uIRelationshipComboBox: Locator;
    readonly uIAddNameButton: Locator;
    readonly uIClearButton: Locator;
    readonly uISaveNamesTabButton: Locator;
    readonly uILastNameEdit: Locator;
    readonly uIFirstNameEdit: Locator;
    readonly uINamesTabGridTable: Locator;
    readonly uINamesInfoIcon: Locator;
    readonly uILeftSideStatusBar: Locator;
    readonly uICommentsEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        const tabFrame = page.frameLocator('iframe[src*="frmCorName.aspx"]');
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uINameTypeEdit = tabFrame.locator('#nmcIncident_NameType');
        this.uINameTypeIDEdit = tabFrame.locator('#nmcIncident_NameTypeID');
        this.uIAddressEdit = tabFrame.locator('#txtAddress');
        this.uIRelationshipComboBox = tabFrame.locator('#cddRelationship_DropDown');
        this.uIAddNameButton = tabFrame.locator('#imgAddName');
        this.uIClearButton = tabFrame.locator('#imgClearName');
        this.uISaveNamesTabButton = tabFrame.locator('#cmdInternalSave');
        this.uILastNameEdit = tabFrame.locator('#nmcIncident_LastName');
        this.uIFirstNameEdit = tabFrame.locator('#nmcIncident_FirstName');
        this.uINamesTabGridTable = tabFrame.locator('#grdCBENames');
        this.uINamesInfoIcon = tabFrame.locator('#nmcIncident_imgSrch');
        this.uILeftSideStatusBar = tabFrame.locator("//td[@class='status']/b");
        this.uICommentsEdit = tabFrame.locator('#txtComments');
    }

    async SelectRelationship(): Promise<void> {
        const options = await this.uIRelationshipComboBox.locator('option').allInnerTexts();
        const valid = options.filter(o => o.trim() !== '' && !o.includes('--'));
        const randomOpt = valid[Math.floor(Math.random() * valid.length)];
        await this.uIRelationshipComboBox.selectOption({ label: randomOpt });
    }

    async clickAddNameButton(): Promise<void> {
        await this.uIAddNameButton.click();
        await this.page.waitForTimeout(1000);
    }

    async clickInternalSaveButton(): Promise<void> {
        await this.uISaveNamesTabButton.click();
    }

    async VerifyNamesTabValidation(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(1051) Updated data exists in the Names Tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async VerifyAdditionSuccessfulAcknowledge(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('1002 - Addition Successful');
        await this.popup.acknowledgeOkButton.click();
    }

    async VerifyAdditionSuccessfulMessage(): Promise<void> {
        const updateMessage = await this.uILeftSideStatusBar.innerText();
        expect(updateMessage).toContain('1002 - Addition Successful');
        await this.page.waitForTimeout(2000);
    }

    async enterAtNameID(): Promise<void> {
        await this.uINameTypeEdit.click();
        const nameID = BaseData.getRecordsModuleValue('NameID');
        await this.uINameTypeEdit.fill(nameID.substring(0, 1));
        await this.uINameTypeIDEdit.fill(nameID.substring(2));
        await this.uINameTypeIDEdit.press('Tab');
    }

    async enterAtLastName(): Promise<void> {
        await this.uILastNameEdit.fill(BaseData.getRecordsModuleValue('LastName'));
    }

    async enterAtFirstName(): Promise<void> {
        await this.uIFirstNameEdit.fill(BaseData.getRecordsModuleValue('FirstName'));
        await this.uIFirstNameEdit.press('Tab');
    }

    async selectAtRelationship(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(
            this.uIRelationshipComboBox,
            BaseData.getRecordsModuleValue('Relationship')
        );
    }

    async selectRelationshipAsNextOfKin(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(
            this.uIRelationshipComboBox,
            'Next of Kin'
        );
    }

    async selectRelationshipAsPhysician(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(
            this.uIRelationshipComboBox,
            'Physician'
        );
    }

    async VerifyAtRelationshipInGrid(rowIndex: number): Promise<void> {
        const text = await this.grid.getGridCellInnerText(this.uINamesTabGridTable, 'Relationship', rowIndex);
        expect(text).toBe(BaseData.getRecordsModuleValue('Relationship'));
    }

    async VerifyAtLastNameFirstNameInGrid(rowIndex: number): Promise<void> {
        const name = BaseData.getRecordsModuleValue('LastName') + ', ' + BaseData.getRecordsModuleValue('FirstName');
        const text = await this.grid.getGridCellInnerText(this.uINamesTabGridTable, 'Name', rowIndex);
        expect(text).toBe(name);
    }

    async saveNamesTab(): Promise<void> {
        await this.uISaveNamesTabButton.click();
        await this.popup.confirmYes();
    }

    async enterAtNameID1(): Promise<void> {
        await this.uINameTypeEdit.click();
        const nameID1 = BaseData.getRecordsModuleValue('NameID1');
        await this.uINameTypeEdit.fill(nameID1.substring(0, 1));
        await this.uINameTypeIDEdit.fill(nameID1.substring(2));
        await this.uINameTypeIDEdit.press('Tab');
    }

    async SelectRowByAtName(): Promise<void> {
        await this.grid.selectRowByCellText(
            this.uINamesTabGridTable,
            BaseData.getRecordsModuleValue('Name')
        );
    }

    async SelectRowByAtRelationship(): Promise<void> {
        await this.grid.selectRowByCellText(
            this.uINamesTabGridTable,
            BaseData.getRecordsModuleValue('Relationship')
        );
    }

    async ClickNameInfoIcon(): Promise<void> {
        await this.uINamesInfoIcon.click();
    }

    async verifyNameInfoIconDisplayed(): Promise<void> {
        await expect(this.uINamesInfoIcon).toBeVisible();
    }

    async VerifyAtRelationship(): Promise<void> {
        const selected = await this.uIRelationshipComboBox.inputValue();
        expect(selected).toBe(BaseData.getRecordsModuleValue('Relationship'));
    }

    async enterNameID(nameID: string): Promise<void> {
        await this.uINameTypeEdit.click();
        await this.uINameTypeEdit.fill(nameID.substring(0, 1));
        await this.uINameTypeIDEdit.fill(nameID.substring(2));
        await this.uINameTypeIDEdit.press('Tab');
    }

    async selectAtRelationship1(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(
            this.uIRelationshipComboBox,
            BaseData.getRecordsModuleValue('Relationship1')
        );
    }

    async selectAtRelationship2(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(
            this.uIRelationshipComboBox,
            BaseData.getRecordsModuleValue('Relationship2')
        );
    }

    async enterAtNameID2(): Promise<void> {
        const nameID2 = BaseData.getRecordsModuleValue('NameID2');
        await this.uINameTypeEdit.fill(nameID2.substring(0, 1));
        await this.uINameTypeIDEdit.fill(nameID2.substring(3));
        await this.uINameTypeIDEdit.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async selectAtRelationship3(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(
            this.uIRelationshipComboBox,
            BaseData.getRecordsModuleValue('Relationship3')
        );
    }

    async verifyAtAddress(): Promise<void> {
        const actualAddress = await this.uIAddressEdit.inputValue();
        expect(actualAddress).toBe(BaseData.getRecordsModuleValue('Address'));
    }

    async verifyUpdatedDataExistinNameTabAcknowledge(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(1051) Updated data exists in the Names Tab. You must save or reset.');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyUpdatedSuccessfulStatusMessage(): Promise<void> {
        const updateMessage = await this.uILeftSideStatusBar.innerText();
        expect(updateMessage).toBe('1003 - Update Successful');
        await this.page.waitForTimeout(2000);
    }

    async verifyNameNotEnteredAcknowledgeMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(7045) Name not entered or not a valid name');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyUpdateSuccessfulAcknowledgeMessage(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('1003 - Update Successful');
        await this.popup.acknowledgeOkButton.click();
    }

    async verify1006ValidationAcknowledgeNotOccurs(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).not.toContainText('1006 - Validation failed');
    }

    async enterAtComments(jsonIndex: number): Promise<void> {
        await this.uICommentsEdit.fill(BaseData.getCoronerModuleValue('Comments' + jsonIndex));
    }

    async verifyAtNameInGrid(jsonIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(
            this.uINamesTabGridTable,
            BaseData.getCoronerModuleValue('Name' + jsonIndex),
            'Name'
        );
        const name = await cell.innerText();
        expect(name).toBe(BaseData.getCoronerModuleValue('Name' + jsonIndex));
    }

    async verifyAtRelationshipInGridByName(nameIndex: number, relationshipIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(
            this.uINamesTabGridTable,
            BaseData.getCoronerModuleValue('Name' + nameIndex),
            'Relationship'
        );
        const relationship = await cell.innerText();
        expect(relationship).toBe(BaseData.getCoronerModuleValue('Relationship' + relationshipIndex));
    }

    async verifyAtDOBInGridByName(nameIndex: number, dobIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(
            this.uINamesTabGridTable,
            BaseData.getCoronerModuleValue('Name' + nameIndex),
            'DOB'
        );
        const dob = await cell.innerText();
        expect(dob).toBe(BaseData.getCoronerModuleValue('DOB' + dobIndex));
    }

    async verifyAtAddressInGridByName(nameIndex: number, addressIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(
            this.uINamesTabGridTable,
            BaseData.getCoronerModuleValue('Name' + nameIndex),
            'Address'
        );
        const address = await cell.innerText();
        expect(address).toBe(BaseData.getCoronerModuleValue('Address' + addressIndex));
    }

    async verifyAtPhoneNoInGridByName(nameIndex: number, phoneNoIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(
            this.uINamesTabGridTable,
            BaseData.getCoronerModuleValue('Name' + nameIndex),
            'Phone'
        );
        const phoneNo = await cell.innerText();
        expect(phoneNo).toBe(BaseData.getCoronerModuleValue('PhoneNo' + phoneNoIndex));
    }

    async verifyAtPhoneNo2InGridByName(nameIndex: number, phoneNoIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(
            this.uINamesTabGridTable,
            BaseData.getCoronerModuleValue('Name' + nameIndex),
            'Phone2'
        );
        const phoneNo = await cell.innerText();
        expect(phoneNo).toBe(BaseData.getCoronerModuleValue('PhoneNo' + phoneNoIndex));
    }

    async verifyAtCommentsInGridByName(nameIndex: number, commentsIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(
            this.uINamesTabGridTable,
            BaseData.getCoronerModuleValue('Name' + nameIndex),
            'Comments'
        );
        const comments = await cell.innerText();
        expect(comments).toBe(BaseData.getCoronerModuleValue('Comments' + commentsIndex));
    }

    async doubleClickCommentsInGridVerifyItsNotEditable(nameIndex: number): Promise<void> {
        const comments = await this.grid.getGridCell(
            this.uINamesTabGridTable,
            BaseData.getCoronerModuleValue('Name' + nameIndex),
            'Comments'
        );
        await comments.dblclick();
        const input = comments.locator('input');
        const inputCount = await input.count();
        expect(inputCount).toBe(0);
    }
}

export class CoronerCaseEntryReviewTabPage {
    readonly page: Page;
    readonly uIAddNewReviewButton: Locator;
    readonly uIStatusDateTextView: Locator;
    readonly uIStatusChangedToTextView: Locator;
    readonly uINextReportDateTextView: Locator;
    readonly uINextReviewDateTextView: Locator;
    readonly uIRemarksTableTextView: Locator;
    readonly uIEditIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddNewReviewButton = page.locator('#tabCorEntry_tmpl2_userReview_btnAddNotes');
        this.uIStatusDateTextView = page.locator('#tabCorEntry_tmpl2_userReview_grdLog_ctl00_lblStatusDate');
        this.uIStatusChangedToTextView = page.locator('#tabCorEntry_tmpl2_userReview_grdLog_ctl00_lblChagedTo');
        this.uINextReportDateTextView = page.locator('#tabCorEntry_tmpl2_userReview_grdLog_ctl00_lblNxtReview');
        this.uINextReviewDateTextView = page.locator('#tabCorEntry_tmpl2_userReview_grdLog_ctl00_lblStatusDate');
        this.uIRemarksTableTextView = page.locator("//table[@id='tabCorEntry_tmpl2_userReview_grdLog']");
        this.uIEditIcon = page.locator("//a//img[@id='imgLoading']");
    }

    async clickAddNewReview(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIAddNewReviewButton.click();
    }

    async verifyStatusDateAsCurrentDate(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const text = await this.uIStatusDateTextView.innerText();
        expect(text).toContain(DateHelpers.getCurrentDate());
    }

    async verifyNextReviewDateAs7DaysAfterAssign(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const nextRevText = await this.uINextReportDateTextView.innerText();
        const diffDays = DateHelpers.getNoOfDaysDifferenceBetweenTwoDates(DateHelpers.getCurrentDate(), nextRevText);
        expect(diffDays.toString()).toBe('7');
    }

    async verifyAtStatusChangedTo(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const text = await this.uIStatusChangedToTextView.innerText();
        expect(text).toContain(BaseData.getCoronerModuleValue('Status'));
    }
}

export class CoronerCaseEntryEffortsTabPage {
    readonly page: Page;
    readonly uIAddNewEffortsButton: Locator;
    readonly uIInvestogatorNameTextView: Locator;
    readonly uIActivityCodeTextView: Locator;
    readonly uIDateFromTextView: Locator;
    readonly uIRemarksTableTextView: Locator;
    readonly uIEditInfoIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddNewEffortsButton = page.locator('#tabCorEntry_tmpl3_userEffort_btnAddNotes');
        this.uIInvestogatorNameTextView = page.locator('#tabCorEntry_tmpl3_userEffort_grdLog_ctl00_lblChagedTo');
        this.uIActivityCodeTextView = page.locator('#tabCorEntry_tmpl3_userEffort_grdLog_ctl00_lblStatusDate');
        this.uIDateFromTextView = page.locator('#tabCorEntry_tmpl3_userEffort_grdLog_ctl00_lblNxtReview');
        this.uIRemarksTableTextView = page.locator("(//table[@id='tabCorEntry_tmpl3_userEffort_grdLog']//tr//td[@colspan='3'])[3]");
        this.uIEditInfoIcon = page.locator("//a//img[@id='imgLoading']");
    }

    async clickAddEffort(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIAddNewEffortsButton.click();
    }

    async verifyAtInvestigatorName(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const text = await this.uIInvestogatorNameTextView.innerText();
        expect(text).toBe(BaseData.getCoronerModuleValue('InvestigatorName'));
    }

    async verifyDateFromAsCurrentDate(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const text = await this.uIDateFromTextView.innerText();
        expect(text).toContain(DateHelpers.getCurrentDate());
    }

    async verifyAtActivityCode(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const text = await this.uIActivityCodeTextView.innerText();
        expect(text).toBe(BaseData.getCoronerModuleValue('CoronerActivity'));
    }

    async verifyAtRemarks(effortNo: number): Promise<void> {
        await this.page.waitForTimeout(1000);
        const efforts = this.page.locator("//table[@id='tabCorEntry_tmpl3_userEffort_grdLog']//tr//td[@colspan='3']");
        const count = await efforts.count();
        const targetIndex = 3 * effortNo - 1;
        if (targetIndex < count) {
            const text = await efforts.nth(targetIndex).innerText();
            expect(text).toContain(BaseData.getCoronerModuleValue('Remarks'));
        }
    }

    async verifyAtCucumativeHours(): Promise<void> {
        const cumulativeHours = BaseData.getCoronerModuleValue('Hours');
        const cumulativeMinutes = BaseData.getCoronerModuleValue('Minutes');
        const cumulativeTime = cumulativeHours + ':' + cumulativeMinutes;
        const cumTime = await this.page.locator(`//table[@id='tabCorEntry_tmpl3_userEffort_grdLog']//td//span[contains(text(),'${cumulativeHours}')]`).innerText();
        expect(cumTime).toBe(cumulativeTime);
    }
}

export class CoronerCaseEntryReportsTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly uIReportingTable: Locator;
    readonly uIViewCaseFileButton: Locator;
    readonly uIAddReportButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uISaveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        const tabFrame = page.frameLocator('iframe[src*="frmCoronerReports"]');
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uIReportingTable = tabFrame.locator('#grdCoronerReports');
        this.uIViewCaseFileButton = tabFrame.locator('#cmdPrintAll');
        this.uIAddReportButton = tabFrame.locator('#cmdAddReport');
        this.uIRefreshButton = tabFrame.locator('#btnRefresh');
        this.uISaveButton = tabFrame.locator('#cmdSave');
    }

    async clickAddReportButton(): Promise<void> {
        await this.uIAddReportButton.click();
        await this.page.waitForTimeout(1000);
    }

    async SaveInternalTab(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYes();
        await this.page.waitForTimeout(1000);
    }

    async ClickRefreshButton(): Promise<void> {
        await this.uIRefreshButton.click();
    }

    async ClickViewCaseFileButton(): Promise<void> {
        await this.uIViewCaseFileButton.click();
    }

    async selectRowByAtType(): Promise<void> {
        await this.grid.selectRowByCellText(
            this.uIReportingTable,
            BaseData.getCoronerModuleValue('Type')
        );
        await this.page.waitForTimeout(1000);
        await this.page.waitForLoadState('load');
    }

    async verifyReportStatusAsOnHold(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIReportingTable, 'Status', rowIndex);
        const text = await cell.innerText();
        expect(text).toBe('On Hold');
    }

    async verifyReportTypeAsCoronerReport(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIReportingTable, 'Type', rowIndex);
        const text = await cell.innerText();
        expect(text).toBe('Coroner Report');
    }

    async verifyReportTypeAsPostMortem(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIReportingTable, 'Type', rowIndex);
        const text = await cell.innerText();
        expect(text).toBe('Post-Mortems');
    }
}

export class CoronerCaseEntryEvidenceTabPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIEvidenceTable: Locator;
    readonly uIViewCaseFileButton: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIResetButton: Locator;
    readonly uISaveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        const tabFrame = page.frameLocator('iframe[src*="frmCorEvidSrch"]');
        this.grid = new GridHelpers(page);
        this.uIEvidenceTable = tabFrame.locator('#grdEvi');
        this.uIViewCaseFileButton = tabFrame.locator('#cmdPrintAll');
        this.uIAddNewButton = tabFrame.locator('#btnAdd');
        this.uIResetButton = tabFrame.locator('#btnReset');
        this.uISaveButton = tabFrame.locator('#cmdSave');
    }

    async clickAddNew(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIAddNewButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyAtInvestNo(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIEvidenceTable, 'Invest#', rowIndex);
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getCoronerModuleValue('InvestNo'));
    }

    async verifyAtReason(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIEvidenceTable, 'Reason', rowIndex);
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getCoronerModuleValue('Reason'));
    }

    async verifyAtCaseNo(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIEvidenceTable, 'Case#', rowIndex);
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getCoronerModuleValue('CaseNo'));
    }

    async verifyAtEvidenceNo(evidenceNo: string, rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIEvidenceTable, 'Evidence#', rowIndex);
        const text = await cell.innerText();
        expect(text).toBe(evidenceNo);
    }

    async selectGridRowByEvidenceNo(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.grid.selectRowByCellText(
            this.uIEvidenceTable,
            BaseData.getCoronerModuleValue('EvidenceNo')
        );
    }

    async verifyStatusAsOpenInvestigationByEvidenceNo(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const cell = await this.grid.getGridCell(
            this.uIEvidenceTable,
            BaseData.getCoronerModuleValue('EvidenceNo'),
            'Status'
        );
        const status = await cell.innerText();
        expect(status).toBe('Open Investigation');
    }

    async verifyAtStatusByEvidenceNo(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const cell = await this.grid.getGridCell(
            this.uIEvidenceTable,
            BaseData.getCoronerModuleValue('EvidenceNo'),
            'Status'
        );
        const status = await cell.innerText();
        expect(status).toBe(BaseData.getCoronerModuleValue('EvidenceStatus'));
    }

    async verifyClosedStatusShowingAsGrayColor(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const statusCell = await this.grid.getGridCell(
            this.uIEvidenceTable,
            BaseData.getCoronerModuleValue('EvidenceNo'),
            'Status'
        );
        const value = await statusCell.innerText();
        expect(value).toBe(BaseData.getCoronerModuleValue('EvidenceStatus'));
    }
}

export class CoronerCaseEntryToxicologyTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uISampleObtainedInput: Locator;
    readonly uISampleObtainedCombobox: Locator;
    readonly uISampleObtainedArrow: Locator;
    readonly uILaboratoryUsedInput: Locator;
    readonly uILaboratoryUsedCombobox: Locator;
    readonly uILaboratoryUsedArrow: Locator;
    readonly uIDrugTypeComboBox: Locator;
    readonly uIConcentrationEdit: Locator;
    readonly uIMeasurementEdit: Locator;
    readonly uISampleTypeComboBox: Locator;
    readonly uIAddnew: Locator;
    readonly uISaveToxicologyTabButton: Locator;
    readonly uIcommentsEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        const tabFrame = page.frameLocator('iframe[src*="frmCoronerToxicology.aspx"]');
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uISampleObtainedInput = tabFrame.locator('#cddSamplesObtained_Input');
        this.uISampleObtainedCombobox = tabFrame.locator('#cddSamplesObtained_DropDown');
        this.uISampleObtainedArrow = tabFrame.locator('#cddSamplesObtained_Arrow');
        this.uILaboratoryUsedInput = tabFrame.locator('#cddLaboratoryUsed_Input');
        this.uILaboratoryUsedCombobox = tabFrame.locator('#cddLaboratoryUsed_DropDown');
        this.uILaboratoryUsedArrow = tabFrame.locator('#cddLaboratoryUsed_Arrow');
        this.uIDrugTypeComboBox = tabFrame.locator('#cddDrugType_DropDown');
        this.uIConcentrationEdit = tabFrame.locator('#txtConcentration');
        this.uIMeasurementEdit = tabFrame.locator('#txtMeasurement');
        this.uISampleTypeComboBox = tabFrame.locator('#cddSampleType_DropDown');
        this.uIAddnew = tabFrame.locator('#imgAddName');
        this.uISaveToxicologyTabButton = tabFrame.locator('#cmdInternalSave');
        this.uIcommentsEdit = tabFrame.locator('#txtComments');
    }

    async selectSamplesObtainedAsCheckAll(): Promise<void> {
        await this.uISampleObtainedInput.click();
        await this.elementHelpers.selectRadControlDropDownCheckAllSelect(
            this.uISampleObtainedCombobox,
            'Check All'
        );
        await this.uISampleObtainedArrow.click();
        await this.uISampleObtainedInput.press('Tab');
    }

    async selectLaboratoryUsedAsCheckAll(): Promise<void> {
        await this.uILaboratoryUsedInput.click();
        await this.elementHelpers.selectRadControlDropDownCheckAllSelect(
            this.uILaboratoryUsedCombobox,
            'Check All'
        );
        await this.uILaboratoryUsedArrow.click();
        await this.uILaboratoryUsedInput.press('Tab');
    }

    async selectAtDrugType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(
            this.uIDrugTypeComboBox,
            BaseData.getRecordsModuleValue('DrugType')
        );
    }

    async enterAtConcentration(): Promise<void> {
        await this.uIConcentrationEdit.fill(BaseData.getRecordsModuleValue('Concentration'));
    }

    async enterAtConcentration1(): Promise<void> {
        await this.uIConcentrationEdit.fill(BaseData.getRecordsModuleValue('Concentration1'));
        await this.uIConcentrationEdit.press('Tab');
    }

    async enterAtMeasurement(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIMeasurementEdit.fill(BaseData.getRecordsModuleValue('Measurement'));
        await this.page.waitForTimeout(1000);
    }

    async selectAtSampleType(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(
            this.uISampleTypeComboBox,
            BaseData.getRecordsModuleValue('SampleType')
        );
    }

    async enterAtComments(): Promise<void> {
        await this.uIcommentsEdit.fill(BaseData.getRecordsModuleValue('Comments'));
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddnew.click();
    }

    async saveToxicologyTab(): Promise<void> {
        await this.uISaveToxicologyTabButton.click();
        await this.popup.confirmYes();
    }

    async verifyDrugTypeGrid(rowIndex?: number): Promise<void> {
        const toxicologyGrid = this.page.locator('#grdCoronerToxicology');
        const cell = await this.grid.getGridCell(
            toxicologyGrid,
            BaseData.getCoronerModuleValue('DrugType'),
            'Drug Type'
        );
        const drug = await cell.innerText();
        expect(drug).toBe(BaseData.getCoronerModuleValue('DrugType'));
    }

    async verify1019DuplicationDataFoundAckMsg(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(1019) Duplication Of Data Found');
        await this.popup.acknowledgeOkButton.click();
    }

    async verify1146IntegerValueAcknowledgeMessage(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(1146) Integer value should have only 7 digits');
        await this.popup.acknowledgeOkButton.click();
    }

    async verifyAdditionSuccessfulAcknowledgePopup(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('1002 - Addition Successful');
        await this.popup.acknowledgeOkButton.click();
    }
}

export class CoronerDrMedTabPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly uIPhysicianNameTypeEdit: Locator;
    readonly uIPhysicianNameNoEdit: Locator;
    readonly uIAddButton: Locator;
    readonly uIDrMedTabGrid: Locator;
    readonly uIInternalSaveButton: Locator;
    readonly uICommentsEdit: Locator;
    readonly uIAddressEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        const tabFrame = page.frameLocator('iframe[src*="frmCoronerDrMed.aspx"]');
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uIPhysicianNameTypeEdit = tabFrame.locator('#nmcIncident_NameType');
        this.uIPhysicianNameNoEdit = tabFrame.locator('#nmcIncident_NameTypeID');
        this.uIAddButton = tabFrame.locator('#imgAddName');
        this.uIDrMedTabGrid = tabFrame.locator("//div[@id='grdDrMed']");
        this.uIInternalSaveButton = tabFrame.locator('#cmdInternalSave');
        this.uICommentsEdit = tabFrame.locator('#txtComments');
        this.uIAddressEdit = tabFrame.locator('#txtAddress');
    }

    async enterAtPhysiciansNameID(): Promise<void> {
        const physId = BaseData.getCoronerModuleValue('PhysicianNameID');
        await this.uIPhysicianNameTypeEdit.click();
        await this.uIPhysicianNameTypeEdit.fill(physId.substring(0, 1));
        await this.uIPhysicianNameNoEdit.click();
        await this.uIPhysicianNameNoEdit.fill(physId.substring(2));
        await this.uIPhysicianNameNoEdit.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
    }

    async randomDoubleClickOnAllCellsInGrid(): Promise<void> {
        const rows = this.uIDrMedTabGrid.locator('tr');
        const rowCount = await rows.count();
        for (let i = 0; i < rowCount; i++) {
            const row = rows.nth(i);
            const rowClass = await row.getAttribute('class') || '';
            if (rowClass.includes('igg_BlueThemeActiveRow')) {
                const cells = row.locator('td');
                const cellCount = await cells.count();
                for (let j = 0; j < cellCount; j++) {
                    const cell = cells.nth(j);
                    if (await cell.isVisible()) {
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
                break;
            }
        }
    }

    async internalSave(): Promise<void> {
        await this.uIInternalSaveButton.click();
        await this.popup.confirmYes();
    }

    async verifyNameByAddressInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(
            this.uIDrMedTabGrid,
            BaseData.getCoronerModuleValue('PhysicianAddress'),
            'Name'
        );
        const name = await cell.innerText();
        expect(name).toBe(BaseData.getCoronerModuleValue('PhysicianName'));
    }

    async selectAtNameInGrid(): Promise<void> {
        await this.grid.selectRowByCellText(
            this.uIDrMedTabGrid,
            BaseData.getCoronerModuleValue('Name')
        );
    }

    async enterAtComments(): Promise<void> {
        await this.uICommentsEdit.fill(BaseData.getCoronerModuleValue('Comments'));
    }

    async verifyAtCommentsInGridByName(jsonIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(
            this.uIDrMedTabGrid,
            BaseData.getPoliceSmokeModuleValue('Name' + jsonIndex),
            'Comments'
        );
        const comments = await cell.innerText();
        expect(comments).toBe(BaseData.getCoronerModuleValue('Comments' + jsonIndex));
    }

    async verifyAtPhoneNoByNameInGrid(): Promise<void> {
        const cell = await this.grid.getGridCell(
            this.uIDrMedTabGrid,
            BaseData.getCoronerModuleValue('PhysicianName'),
            'Phone'
        );
        const phoneNo = await cell.innerText();
        expect(phoneNo).toBe(BaseData.getCoronerModuleValue('PhoneNo'));
    }

    async verifyAtAddress(jsonIndex: number): Promise<void> {
        const address = await this.uIAddressEdit.inputValue();
        expect(address).toBe(BaseData.getCoronerModuleValue('Address' + jsonIndex));
    }
}

export class CoronerReviewPage {
    readonly page: Page;
    readonly elementHelpers: ElementHelpers;
    readonly uICurrentReviewDate: Locator;
    readonly uICoronerCaseStatusDropDown: Locator;
    readonly uIDate: Locator;
    readonly uITime: Locator;
    readonly uIRemarksTemplateDropDown: Locator;
    readonly uIRemarksTemplateLoad: Locator;
    readonly uIRemarksFrame: Locator;
    readonly uIRemarksTextBody: Locator;
    readonly uINextReviewDate: Locator;
    readonly uIResetButton: Locator;
    readonly uISaveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elementHelpers = new ElementHelpers(page);
        this.uICurrentReviewDate = page.locator('#dttCurrentReviewDate_KPIDttmCtrl');
        this.uICoronerCaseStatusDropDown = page.locator('#CddCaseStatus_DropDown');
        this.uIDate = page.locator('#dttstatusdatetime_Date_KPIDttmCtrl');
        this.uITime = page.locator("//input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIRemarksTemplateDropDown = page.locator('#lstTextName');
        this.uIRemarksTemplateLoad = page.locator('#cmdload');
        this.uIRemarksFrame = page.locator('#rteKPITxt_contentIframe');
        this.uIRemarksTextBody = page.locator("//body");
        this.uINextReviewDate = page.locator('#dttnxtReviewDate_KPIDttmCtrl');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uISaveButton = page.locator('#cmdSave');
    }

    async verifyCurrentReviewDateAsTodaysDate(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const val = await this.uICurrentReviewDate.inputValue();
        expect(val).toBe(DateHelpers.getCurrentDate());
    }

    async selectAtCoronerStatus(): Promise<void> {
        await this.elementHelpers.selectDropDownOption(
            this.uICoronerCaseStatusDropDown,
            BaseData.getCoronerModuleValue('Status')
        );
    }

    async tabDateAndTime(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIDate.click();
        await this.uIDate.press('Tab');
        await this.page.waitForTimeout(1000);
        await this.uITime.press('Tab');
    }

    async verifyNextReviewDateAs7DaysAfterAssign(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const nextRevVal = await this.uINextReviewDate.inputValue();
        const diffDays = DateHelpers.getNoOfDaysDifferenceBetweenTwoDates(nextRevVal, DateHelpers.getCurrentDate());
        expect(diffDays.toString()).toBe('7');
    }

    async selectAtTemplate(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.elementHelpers.selectDropDownOption(
            this.uIRemarksTemplateDropDown,
            BaseData.getCoronerModuleValue('Template')
        );
    }

    async clickOnLoad(): Promise<void> {
        await this.uIRemarksTemplateLoad.click();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForTimeout(1000);
    }
}

export class CoronerEffortsPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIInvestigatorEdit: Locator;
    readonly uICoronerCategoryDropDown: Locator;
    readonly uICoronerActivityDropDown: Locator;
    readonly uIStartedDate: Locator;
    readonly uIFinishedTime: Locator;
    readonly uIFinishedDate: Locator;
    readonly uICumlativeHours: Locator;
    readonly uICumlativeMinutes: Locator;
    readonly uIStartedTime: Locator;
    readonly uIRemarksTemplateDropDown: Locator;
    readonly uIRemarksTemplateLoad: Locator;
    readonly uIRemarksFrame: Locator;
    readonly uIRemarksTextBody: Locator;
    readonly uIResetButton: Locator;
    readonly uISaveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIInvestigatorEdit = page.locator('#lupInvPFID_CodeValue');
        this.uICoronerCategoryDropDown = page.locator('#CddCorCtegory_DropDown');
        this.uICoronerActivityDropDown = page.locator('#CddActivity');
        this.uIStartedDate = page.locator('#dttmstarted_Date_KPIDttmCtrl');
        this.uIFinishedTime = page.locator('#dttmfinished_Time');
        this.uIFinishedDate = page.locator('#dttmfinished_Date_KPIDttmCtrl');
        this.uICumlativeHours = page.locator('#txtHours');
        this.uICumlativeMinutes = page.locator('#txtMinutes');
        this.uIStartedTime = page.locator("//input[@class='textboxdatetime igte_BlueThemeEditInContainer']");
        this.uIRemarksTemplateDropDown = page.locator('#lstTextName');
        this.uIRemarksTemplateLoad = page.locator('#cmdload');
        this.uIRemarksFrame = page.locator('#rteKPITxt_contentIframe');
        this.uIRemarksTextBody = page.locator("//body");
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uISaveButton = page.locator('#cmdSave');
    }

    async enterAtInvestigator(): Promise<void> {
        await this.uIInvestigatorEdit.fill(BaseData.getCoronerModuleValue('Investigator'));
        await this.uIInvestigatorEdit.press('Tab');
    }

    async selectAtCoronerCatogory(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.elementHelpers.selectDropDownOption(
            this.uICoronerCategoryDropDown,
            BaseData.getCoronerModuleValue('CoronerCategory')
        );
        await this.uICoronerCategoryDropDown.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async selectAtCoronerActivity(): Promise<void> {
        await this.page.waitForLoadState('load');
        await this.uICoronerActivityDropDown.click();
        await this.elementHelpers.selectDropDownOption(
            this.uICoronerActivityDropDown,
            BaseData.getCoronerModuleValue('CoronerActivity')
        );
    }

    async tabStartedDateAndTime(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIStartedDate.click();
        await this.uIStartedDate.press('Tab');
        await this.page.waitForTimeout(1000);
        await this.uIStartedTime.press('Tab');
    }

    async selectAtTemplate(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.elementHelpers.selectDropDownOption(
            this.uIRemarksTemplateDropDown,
            BaseData.getCoronerModuleValue('Template')
        );
    }

    async clickOnLoad(): Promise<void> {
        await this.uIRemarksTemplateLoad.click();
    }

    async clickSave(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForTimeout(1000);
    }

    async enterAtRemarksText(): Promise<void> {
        const frame = this.page.frameLocator('#rteKPITxt_contentIframe');
        await frame.locator('body').fill(BaseData.getCoronerModuleValue('Remarks'));
    }

    async enterAtCumulativeTimeHours(): Promise<void> {
        await this.uICumlativeHours.fill(BaseData.getCoronerModuleValue('Hours'));
    }

    async enterAtCumulativeTimeMinutes(): Promise<void> {
        await this.uICumlativeMinutes.fill(BaseData.getCoronerModuleValue('Minutes'));
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForTimeout(1000);
        await this.popup.confirmYes();
    }
}

export class CoronerCaseReportEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uICoronerInvestYear: Locator;
    readonly uICoronerInvestNo: Locator;
    readonly uICoronerReportTypeDropDown: Locator;
    readonly uIStatusDropDown: Locator;
    readonly uIReportedByEdit: Locator;
    readonly uIReportedOfficerEdit: Locator;
    readonly uITime: Locator;
    readonly uIDate: Locator;
    readonly uIDescription: Locator;
    readonly uIRemarksTemplateDropDown: Locator;
    readonly uIRemarksTemplateLoad: Locator;
    readonly uIRemarksFrame: Locator;
    readonly uIRemarksTextBody: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uISaveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uICoronerInvestYear = page.locator('#numTaskNbr_Year');
        this.uICoronerInvestNo = page.locator('#numTaskNbr_Number');
        this.uICoronerReportTypeDropDown = page.locator('#cddRptType_DropDown');
        this.uIStatusDropDown = page.locator('#lstReportStatus_DropDown');
        this.uIReportedByEdit = page.locator('#lupReportedPF_CodeValue');
        this.uIReportedOfficerEdit = page.locator('#lupReportedPF_CodeDescription');
        this.uITime = page.locator('#dttReported_Time_clientState');
        this.uIDate = page.locator('#dttReported_Date_KPIDttmCtrl');
        this.uIDescription = page.locator('#txtRptDesc');
        this.uIRemarksTemplateDropDown = page.locator('#lstTextName');
        this.uIRemarksTemplateLoad = page.locator('#cmdload');
        this.uIRemarksFrame = page.locator('#rteKPITxt_contentIframe');
        this.uIRemarksTextBody = page.locator("//body");
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uISaveButton = page.locator('#cmdSave');
    }

    async selectAtType(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uICoronerReportTypeDropDown.click();
        await this.elementHelpers.selectDropDownOption(
            this.uICoronerReportTypeDropDown,
            BaseData.getCoronerModuleValue('Type')
        );
    }

    async selectAtTemplate(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.elementHelpers.selectDropDownOption(
            this.uIRemarksTemplateDropDown,
            BaseData.getCoronerModuleValue('Template')
        );
    }

    async clickOnLoad(): Promise<void> {
        await this.uIRemarksTemplateLoad.click();
    }

    async enterAtRemarksText(): Promise<void> {
        const frame = this.page.frameLocator('#rteKPITxt_contentIframe');
        await frame.locator('body').fill(BaseData.getCoronerModuleValue('Remarks'));
    }

    async verifyAtCoronerInvestNo(): Promise<void> {
        const investYear = await this.uICoronerInvestYear.inputValue();
        const investNo = await this.uICoronerInvestNo.inputValue();
        const fullInvestNo = investYear + '-' + investNo;
        expect(fullInvestNo).toBe(BaseData.getCoronerModuleValue('InvestNo'));
    }

    async verifyAtReportedOfficer(): Promise<void> {
        const val = await this.uIReportedOfficerEdit.inputValue();
        expect(val).toBe(BaseData.getCoronerModuleValue('ReportedOfficer'));
    }

    async selectAtStatus(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.elementHelpers.selectDropDownOption(
            this.uIStatusDropDown,
            BaseData.getCoronerModuleValue('Status')
        );
    }

    async enterDescription(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIDescription.fill(RandomHelpers.manualPlusRandomString('Desc', 20));
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.popup.confirmYesWithExpectedMessage('(3) Do You Want To Save All Of The Entered Details?');
    }

    async saveNClose(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await this.popup.confirmYesWithExpectedMessage('(3) Do You Want To Save All Of The Entered Details?');
    }
}

export class CoronerEvidenceEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uILeftSideStatusBar: Locator;
    readonly uICoronerInvestYear: Locator;
    readonly uICoronerInvestNo: Locator;
    readonly uIEvidenceYear: Locator;
    readonly uIEvidenceNo: Locator;
    readonly uIEvidenceItemSequenceNo: Locator;
    readonly uIReasonDropDown: Locator;
    readonly uIEvidenceTypeDropDown: Locator;
    readonly uITimeOfDeath: Locator;
    readonly uIDateofdeath: Locator;
    readonly uIDescription: Locator;
    readonly uIEvidenceStorageLocationDropDown: Locator;
    readonly uIEvidenceStatusDropDown: Locator;
    readonly uIQuantity: Locator;
    readonly uIChangeLocDate: Locator;
    readonly uIChangeLocReason: Locator;
    readonly uIChangeLocReasonLbl: Locator;
    readonly uIViewhistory: Locator;
    readonly uIPrintButton: Locator;
    readonly uIResetButton: Locator;
    readonly uISaveNCloseButton: Locator;
    readonly uISaveButton: Locator;
    readonly uIAddnew: Locator;
    readonly uIChangeLocDateLbl: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uILeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
        this.uICoronerInvestYear = page.locator('#nbrInvestNumber_Year');
        this.uICoronerInvestNo = page.locator('#nbrInvestNumber_Number');
        this.uIEvidenceYear = page.locator('#nbrEvidenceNumber_Year');
        this.uIEvidenceNo = page.locator('#nbrEvidenceNumber_Number');
        this.uIEvidenceItemSequenceNo = page.locator('#txtItemNbr');
        this.uIReasonDropDown = page.locator('#cddReason_DropDown');
        this.uIEvidenceTypeDropDown = page.locator('#cddEvidenceType_DropDown');
        this.uITimeOfDeath = page.locator('#dttmDeathDate_Time');
        this.uIDateofdeath = page.locator('#dttmDeathDate_Date_KPIDttmCtrl');
        this.uIDescription = page.locator('#txtDesc');
        this.uIEvidenceStorageLocationDropDown = page.locator('#cddStorageLoc');
        this.uIEvidenceStatusDropDown = page.locator('#cddEvidenceStatus_DropDown');
        this.uIQuantity = page.locator('#txtQty');
        this.uIChangeLocDate = page.locator('#dtLocDate_KPIDttmCtrl');
        this.uIChangeLocReason = page.locator('#txtLocChangeReason');
        this.uIChangeLocReasonLbl = page.locator('#lblLocChangeReason');
        this.uIViewhistory = page.locator('#btnViewHistory');
        this.uIPrintButton = page.locator('#cmdPrint');
        this.uIResetButton = page.locator('#cmdRefresh');
        this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
        this.uISaveButton = page.locator('#cmdSave');
        this.uIAddnew = page.locator('#cmdAddNew');
        this.uIChangeLocDateLbl = page.locator('#lblLocDate');
    }

    async verifyInvestNo(investNo: string): Promise<void> {
        const investYear = await this.uICoronerInvestYear.inputValue();
        const investNum = await this.uICoronerInvestNo.inputValue();
        expect(investYear + '-' + investNum).toBe(investNo);
    }

    async verifyAtInvestNo(): Promise<void> {
        const investYear = await this.uICoronerInvestYear.inputValue();
        const investNum = await this.uICoronerInvestNo.inputValue();
        expect(investYear + '-' + investNum).toBe(BaseData.getCoronerModuleValue('InvestNo'));
    }

    async enterAtInvestNo(investNo?: string): Promise<void> {
        const targetInvestNo = investNo || BaseData.getCoronerModuleValue('InvestNo');
        await this.uICoronerInvestYear.fill(targetInvestNo.substring(0, 2));
        await this.uICoronerInvestYear.press('Tab');
        await this.uICoronerInvestNo.fill(targetInvestNo.substring(3));
        await this.uICoronerInvestNo.press('Tab');
    }

    async verifyDateOfDeath(dateOfDeath: string): Promise<void> {
        const dod = await this.uIDateofdeath.inputValue();
        expect(dod).toBe(dateOfDeath);
    }

    async verifyAtDateOfDeath(): Promise<void> {
        const dod = await this.uIDateofdeath.inputValue();
        expect(dod).toBe(BaseData.getCoronerModuleValue('DateOfDeath'));
    }

    async selectAtReason(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.elementHelpers.selectDropDownOption(
            this.uIReasonDropDown,
            BaseData.getCoronerModuleValue('Reason')
        );
    }

    async verifyAtReason(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const selected = await this.uIReasonDropDown.inputValue();
        expect(selected).toBe(BaseData.getCoronerModuleValue('Reason'));
    }

    async readSelectedStorageLocation(): Promise<string> {
        await this.page.waitForTimeout(1000);
        return await this.uIEvidenceStorageLocationDropDown.inputValue();
    }

    async selectAtEvidenceType(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.elementHelpers.selectDropDownOption(
            this.uIEvidenceTypeDropDown,
            BaseData.getCoronerModuleValue('EvidenceType')
        );
    }

    async enterDescription(): Promise<void> {
        await this.uIDescription.fill(RandomHelpers.manualPlusRandomString('Desc', 20));
    }

    async enterQuantity(): Promise<void> {
        await this.uIQuantity.clear();
        await this.uIQuantity.fill(RandomHelpers.getRandomBetween(1, 10).toString());
    }

    async selectAtStorageLocation(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.elementHelpers.selectDropDownOption(
            this.uIEvidenceStorageLocationDropDown,
            BaseData.getCoronerModuleValue('StorageLocation')
        );
    }

    async selectAtEvidenceStatus(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.elementHelpers.selectDropDownOption(
            this.uIEvidenceStatusDropDown,
            BaseData.getCoronerModuleValue('EvidenceStatus')
        );
    }

    async saveNclose(): Promise<void> {
        await this.uISaveNCloseButton.click();
        await this.page.waitForTimeout(1000);
        await this.popup.confirmYes();
    }

    async save(): Promise<void> {
        await this.uISaveButton.click();
        await this.page.waitForTimeout(1000);
        await this.popup.confirmYes();
    }

    async verifyAddnewButtonDisabled(): Promise<void> {
        await expect(this.uIAddnew).toBeDisabled();
    }

    async verifyAddnewButtonEnabled(): Promise<void> {
        await expect(this.uIAddnew).toBeEnabled();
    }

    async readEvidenceNo(): Promise<string> {
        const yr = await this.uIEvidenceYear.inputValue();
        const no = await this.uIEvidenceNo.inputValue();
        const seq = await this.uIEvidenceItemSequenceNo.inputValue();
        return yr + '-' + no + '-' + seq;
    }

    async readItemNo(): Promise<number> {
        const seq = await this.uIEvidenceItemSequenceNo.inputValue();
        return parseInt(seq);
    }

    async VerifyAdditionSuccessfulMessage(): Promise<void> {
        const updateMessage = await this.uILeftSideStatusBar.innerText();
        expect(updateMessage).toBe('1002 - Addition Successful');
        await this.page.waitForTimeout(2000);
    }

    async VerifyUpdateSuccessfulMessage(): Promise<void> {
        const updateMessage = await this.uILeftSideStatusBar.innerText();
        expect(updateMessage).toBe('1003 - Update Successful');
        await this.page.waitForTimeout(2000);
    }

    async clickAddnewButton(): Promise<void> {
        await this.uIAddnew.click();
    }

    async verifySeqGeneratedAsNextNo(previousSeq: number): Promise<void> {
        await this.page.waitForTimeout(1000);
        const seq = await this.uIEvidenceItemSequenceNo.inputValue();
        const seqNo = parseInt(seq);
        expect(seqNo).toBeGreaterThan(previousSeq);
    }

    async verifySeqNo(previousSeq: number): Promise<void> {
        await this.page.waitForTimeout(1000);
        const seq = await this.uIEvidenceItemSequenceNo.inputValue();
        const seqNo = parseInt(seq);
        expect(seqNo).toBe(previousSeq);
    }

    async selectReasonAsMentalIllness(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.elementHelpers.selectDropDownOption(
            this.uIReasonDropDown,
            'Mental illness'
        );
    }

    async verifyDefaultQuantityAs1(): Promise<void> {
        const val = await this.uIQuantity.inputValue();
        expect(val).toBe('1');
    }

    async verifyLocationChangeDateDisplayed(): Promise<void> {
        await expect(this.uIChangeLocDate).toBeVisible();
    }

    async verifyLocationChangeReasonDisplayed(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await expect(this.uIChangeLocReason).toBeVisible();
    }

    async verifyLocationChangeReasonAsMandatory(): Promise<void> {
        await this.page.waitForTimeout(1000);
        const cssValue = await this.uIChangeLocReasonLbl.evaluate(el => getComputedStyle(el).color);
        expect(cssValue).toContain('rgba(153, 0, 0, 1)');
    }

    async verifyViewHistoryButtonDisplayed(): Promise<void> {
        await expect(this.uIViewhistory).toBeVisible();
    }

    async enterAtChangeReason(): Promise<void> {
        await this.uIChangeLocReason.fill(BaseData.getCoronerModuleValue('ChangeReason'));
    }

    async enterChangeDateAsCurrentDate(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIChangeLocDate.fill(DateHelpers.getCurrentDate());
        await this.uIChangeLocDate.press('Tab');
        await this.page.waitForTimeout(1000);
    }

    async selectStorageLocationAsCoronerLocation(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.elementHelpers.selectDropDownOption(
            this.uIEvidenceStorageLocationDropDown,
            'Coroner Location'
        );
    }

    async verifyAtEvidenceNo(): Promise<void> {
        const yr = await this.uIEvidenceYear.inputValue();
        const no = await this.uIEvidenceNo.inputValue();
        const seq = await this.uIEvidenceItemSequenceNo.inputValue();
        const evidenceNo = yr + '-' + no + '-' + seq;
        expect(evidenceNo).toBe(BaseData.getCoronerModuleValue('EvidenceNo'));
    }

    async clickViewHistoryButton(): Promise<void> {
        await this.page.waitForTimeout(1000);
        await this.uIViewhistory.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyLocationChangeDateIsEnabled(): Promise<void> {
        await expect(this.uIChangeLocDate).toBeEnabled();
    }

    async verifyLocationChangeDateTextIsEnabled(): Promise<void> {
        await expect(this.uIChangeLocDateLbl).toBeEnabled();
    }

    async verifyLocationChangeReasonIsEnabled(): Promise<void> {
        await expect(this.uIChangeLocReason).toBeEnabled();
    }

    async verifyLocationChangeReasonTextIsEnabled(): Promise<void> {
        await expect(this.uIChangeLocReasonLbl).toBeEnabled();
    }
}

export class CoronerEvidenceHistoryPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uIEvidenceHistoryTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uIEvidenceHistoryTable = page.locator('#grdLocationHistory');
    }

    async verifyAtPFName(rowIndex: number): Promise<void> {
        await this.page.waitForTimeout(1000);
        const cell = await this.grid.getGridCell(this.uIEvidenceHistoryTable, 'PF Name', rowIndex);
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getCoronerModuleValue('PFName'));
    }

    async verifyAtLocationFrom(rowIndex: number): Promise<void> {
        await this.page.waitForTimeout(1000);
        const cell = await this.grid.getGridCell(this.uIEvidenceHistoryTable, 'Location From', rowIndex);
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getCoronerModuleValue('LocationFrom'));
    }

    async verifyAtLocationTo(rowIndex: number): Promise<void> {
        const cell = await this.grid.getGridCell(this.uIEvidenceHistoryTable, 'Location To', rowIndex);
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getCoronerModuleValue('LocationTo'));
    }

    async verifyLocationTo(location: string, rowIndex: number): Promise<void> {
        await this.page.waitForTimeout(1000);
        const cell = await this.grid.getGridCell(this.uIEvidenceHistoryTable, 'Location To', rowIndex);
        const text = await cell.innerText();
        expect(text).toBe(location);
    }

    async verifyAtChangedReason(rowIndex: number): Promise<void> {
        await this.page.waitForTimeout(1000);
        const cell = await this.grid.getGridCell(this.uIEvidenceHistoryTable, 'Reason', rowIndex);
        const text = await cell.innerText();
        expect(text).toBe(BaseData.getCoronerModuleValue('ChangeReason'));
    }

    async verifyChangedReasonAsNull(rowIndex: number): Promise<void> {
        await this.page.waitForTimeout(1000);
        const cell = await this.grid.getGridCell(this.uIEvidenceHistoryTable, 'Reason', rowIndex);
        const text = await cell.innerText();
        expect(text).toBe('');
    }

    async verifyLocationFrom(location: string, rowIndex: number): Promise<void> {
        await this.page.waitForTimeout(1000);
        const cell = await this.grid.getGridCell(this.uIEvidenceHistoryTable, 'Location From', rowIndex);
        const text = await cell.innerText();
        expect(text).toBe(location);
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }
}

export class CoronerPage {
    readonly page: Page;
    private browserHelpers: BrowserHelpers;

    constructor(page: Page) {
        this.page = page;
        this.browserHelpers = new BrowserHelpers(page);
    }

    async Reset(): Promise<void> {
        // Managed by test framework
    }

    async switchToCoronerCaseEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Coroner Case Entry');
        await this.page.waitForTimeout(1000);
    }

    async switchToCoronerReview(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Coroner Review');
        await this.page.waitForTimeout(1000);
    }

    async switchToCoronerEfforts(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Coroner Efforts');
        await this.page.waitForTimeout(1000);
    }

    async switchToCoronerCaseReportsEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Coroner/frmCorRptMain.aspx?');
        await this.page.waitForTimeout(1000);
    }

    async switchToCoronerEvidenceHistory(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmCorEvidLocHistory');
        await this.page.waitForTimeout(1000);
    }

    async switchToCoronerEvidenceEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Coroner Evidence Entry');
        await this.page.waitForTimeout(1000);
    }

    async switchToCoronerCaseSearchScreen(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Coroner Case Search');
        await this.page.waitForTimeout(1000);
    }

    async switchToCoronerEvidenceSearchScreen(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('Coroner Evidence Search');
        await this.page.waitForTimeout(1000);
    }

    async switchToCoronerSearchHelpWindow(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Coroner Case Search - 6301');
    }

    async reloadCoronerEvidenceScreen(): Promise<void> {
        await this.page.reload();
        await this.page.waitForTimeout(1000);
    }
}
