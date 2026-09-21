

// @ts-nocheck
import { Page, Locator, expect } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { AcknowledgePage, ConfirmPage, PopupPage } from '../popup.page';
import { BaseData } from '../../data/base-data';
import { GridHelpers } from '../../helpers/grid-helpers';
import { ElementHelpers } from '../../helpers/element-helpers';
import { PopupHelpers } from '../../helpers/popup-helpers';
import { createFrameProxy, createPopupProxy } from '../../helpers/browser-helpers';
import console from 'node:console';
import { DateHelpers } from '../../helpers';
import { RandomHelpers } from '../../helpers';

export class StateCodedPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uICodeCategoryDropdown: Locator;
    readonly uISearchButton: Locator;
    readonly uIStateCodedGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uICodeCategoryDropdown = page.locator('#lstcodecategory');
        this.uISearchButton = page.locator('#cmdSearch');
        this.uIStateCodedGrid = page.locator('#grdCodeType');
    }

    async selectAtCodeCategory(): Promise<void> {
        await this.uICodeCategoryDropdown.selectOption({ label: BaseData.getStateDemoModuleValue('CodeCategory') });
    }

    async selectRandomGridRow(): Promise<void> {
        await this.grid.selectRandomRow(this.uIStateCodedGrid);
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
        await this.page.waitForTimeout(1000);
    }
}

export class MaintainCodeValuePage {
    readonly page: Page;
    readonly uIHeaderLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIHeaderLabel = page.locator('#lblCodeStatus');
    }

    async verifyAtHeaderlabel(): Promise<void> {
        const text = await this.uIHeaderLabel.innerText();
        expect(text.trim()).toBe(BaseData.getStateDemoModuleValue('LabelText'));
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }
}

export class DemoSearchPage {
    readonly page: Page;
    readonly grid: GridHelpers;
    readonly uISearchButton: Locator;
    readonly uIDemoSearchGrid: Locator;

    constructor(page: Page) {
        this.page = page;
        this.grid = new GridHelpers(page);
        this.uISearchButton = page.locator('#btnSearch');
        this.uIDemoSearchGrid = page.locator('#grdDemo');
    }

    async clickSearch(): Promise<void> {
        await this.uISearchButton.click();
        await this.page.waitForTimeout(1000);
    }

    async selectRandomGridRow(): Promise<void> {
        await this.grid.selectRandomRow(this.uIDemoSearchGrid);
    }
}

export class DemoEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly grid: GridHelpers;
    readonly uIEnterAddressLabel: Locator;
    readonly uICSZLabel: Locator;
    readonly uIAddButton: Locator;
    readonly uICommonNameEdit: Locator;
    readonly uICSZLookupIcon: Locator;
    readonly uIDemoEntryGrid: Locator;
    readonly uIEnterAddressEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.grid = new GridHelpers(page);
        this.uIEnterAddressLabel = page.locator('#KPILabel11');
        this.uICSZLabel = page.locator('#KPILabel12');
        this.uIAddButton = page.locator('#imgAdd');
        this.uICommonNameEdit = page.locator('#txtCommonName');
        this.uICSZLookupIcon = page.locator('[name="KPICustomCSZ$ctl01"]');
        this.uIDemoEntryGrid = page.locator('#grdDemoEntryDetail');
        this.uIEnterAddressEdit = page.locator('#txtEnterAddress');
    }

    async verifyEnterAddressAsMandatory(): Promise<void> {
        const color = await this.uIEnterAddressLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(153, 0, 0, 1)');
    }

    async verifyCSZAsMandatory(): Promise<void> {
        const color = await this.uICSZLabel.evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(153, 0, 0, 1)');
    }

    async enterAtEnterAddress(): Promise<void> {
        await this.uIEnterAddressEdit.fill(BaseData.getStateDemoModuleValue('Address'));
        await this.uIEnterAddressEdit.press('Tab');
    }

    async enterAtCommonName(): Promise<void> {
        await this.uICommonNameEdit.fill(BaseData.getStateDemoModuleValue('CommonName'));
        await this.uICommonNameEdit.press('Tab');
    }

    async clickAddButton(): Promise<void> {
        await this.uIAddButton.click();
        await this.page.waitForTimeout(1000);
    }

    async verifyEnterAddressAcknowledgePopup(): Promise<void> {
        const modal = this.popup.modalBody;
        await expect(modal).toContainText('(1018) Required Entries are Missing - Enter Address');
        await this.popup.acknowledgeOkButton.click();
    }
}

export class StateORIPage {
    readonly page: Page;
    readonly uIAddNewButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIAddNewButton = page.locator("//span[text()='Add New']");
    }

    async clickAddNew(): Promise<void> {
        await this.uIAddNewButton.click();
        await this.page.waitForTimeout(1000);
    }
}

export class StateORIEntryPage {
    readonly page: Page;
    readonly popup: PopupHelpers;
    readonly elementHelpers: ElementHelpers;
    readonly uIStateDropdown: Locator;
    readonly uIORINumberEdit: Locator;
    readonly uITitleEdit: Locator;
    readonly uISaveIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.popup = new PopupHelpers(page);
        this.elementHelpers = new ElementHelpers(page);
        this.uIStateDropdown = page.locator('#cddState');
        this.uIORINumberEdit = page.locator('#txtORINbr');
        this.uITitleEdit = page.locator('#txtTitle');
        this.uISaveIcon = page.locator('#cmdSave');
    }

    async selectAtState(): Promise<void> {
        await this.uIStateDropdown.selectOption({ label: BaseData.getStateDemoModuleValue('State') });
    }

    async enterAtORINumber(): Promise<void> {
        await this.uIORINumberEdit.fill(BaseData.getStateDemoModuleValue('ORINumber'));
        await this.uIORINumberEdit.press('Tab');
    }

    async verifyORINumberHas9Digits(): Promise<void> {
        const value = await this.uIORINumberEdit.inputValue();
        expect(value.length, 'ORI number has less than 9 digits').toBe(9);
    }

    async enterAtTitle(): Promise<void> {
        await this.uITitleEdit.fill(BaseData.getStateDemoModuleValue('Title'));
        await this.uITitleEdit.press('Tab');
    }

    async save(): Promise<void> {
        await this.uISaveIcon.click();
        await this.popup.confirmYesButton.click();
        await this.page.waitForTimeout(1000);
    }
}

export class StateDemoPage {
    readonly page: Page;
    private browserHelpers: BrowserHelpers;

    constructor(page: Page) {
        this.page = page;
        this.browserHelpers = new BrowserHelpers(page);
    }

    async Reset(): Promise<void> {
        // No-op in Playwright - page state managed by test framework
    }

    async switchToStateCoded(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmCodedTypeSrch.aspx?');
    }

    async switchToMaintainCodeValue(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Maintain Code Value');
    }

    async switchToDemoSearch(): Promise<void> {
        await this.browserHelpers.switchToPageByUrl('frmDemoSrch.aspx?');
    }

    async switchToDemoEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('Demo Entry');
    }

    async switchToStateORI(): Promise<void> {
        await this.browserHelpers.switchToFrame('frmStateORISrch.aspx');
    }

    async switchToStateORIEntry(): Promise<void> {
        await this.browserHelpers.switchToPageByTitle('State ORI');
    }
}
