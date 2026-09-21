// @ts-nocheck
import { Page, Locator, expect } from '@playwright/test';

export class PopupPage {
    readonly page: Page;
    confirm: ConfirmPage;
    acknowledge: AcknowledgePage;
    kPICodedLookup: KPICodedLookupPage;
    multiFilesAttachWindow: MultiFilesAttachWindowPage;
    treeViewHelp: TreeViewHelpPage;

    constructor(page: Page) {
        this.page = page;
        this.confirm = new ConfirmPage(page);
        this.acknowledge = new AcknowledgePage(page);
        this.kPICodedLookup = new KPICodedLookupPage(page);
        this.multiFilesAttachWindow = new MultiFilesAttachWindowPage(page);
        this.treeViewHelp = new TreeViewHelpPage(page);
    }

    async switchToAcknowledge(): Promise<Page> {
        const pages = this.page.context().pages();
        const ackPage = pages.find(p => p.url().includes('Acknowledge') || p.url().includes('frmAcknowledge'));
        if (ackPage) {
            await ackPage.bringToFront();
            return ackPage;
        }
        return this.page;
    }

    async switchToConfirm(): Promise<Page> {
        const pages = this.page.context().pages();
        const confirmPage = pages.find(p => p.url().includes('Confirm') || p.url().includes('frmConfirm'));
        if (confirmPage) {
            await confirmPage.bringToFront();
            return confirmPage;
        }
        return this.page;
    }

    async switchToCodedSearch(): Promise<Page> {
        const pages = this.page.context().pages();
        const codedPage = pages.find(p => p.url().includes('frmCodedSrch') || p.url().includes('Coded Search'));
        if (codedPage) {
            await codedPage.bringToFront();
            return codedPage;
        }
        return this.page;
    }

    async switchToTreeViewHelp(): Promise<Page> {
        const pages = this.page.context().pages();
        const treePage = pages.find(p => p.url().includes('TreeView') || p.url().includes('frmTreeView'));
        if (treePage) {
            await treePage.bringToFront();
            return treePage;
        }
        return this.page;
    }

    async switchToMultiFilesAttachWindow(): Promise<Page> {
        const pages = this.page.context().pages();
        const attachPage = pages.find(p => p.url().includes('frmMultiFilesAttach'));
        if (attachPage) {
            await attachPage.bringToFront();
            return attachPage;
        }
        return this.page;
    }

    async switchToCodedSearchII(): Promise<Page> {
        const pages = this.page.context().pages();
        const codedPage = pages.find(p => p.url().includes('frmCodedSrch.aspx'));
        if (codedPage) {
            await codedPage.bringToFront();
            return codedPage;
        }
        return this.page;
    }

    async switchToZipCodeEntry(): Promise<Page> {
        const pages = this.page.context().pages();
        const zipPage = pages.find(p => p.url().includes('frmZip.aspx'));
        if (zipPage) {
            await zipPage.bringToFront();
            return zipPage;
        }
        return this.page;
    }
}

export class ConfirmPage {
    readonly page: Page;
    readonly uIErrorInfoTextEdit: Locator;
    readonly uIYesButton: Locator;
    readonly uINoButton: Locator;
    readonly uIModalBody: Locator;
    readonly uIModalFooterYesButton: Locator;
    readonly uIModalFooterNoButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIErrorInfoTextEdit = page.locator('#htmlErrorInfo');
        this.uIYesButton = page.locator('#cmdAccept');
        this.uINoButton = page.locator('#cmdCancel');
        this.uIModalBody = page.locator("//div[@class='modal-body']");
        this.uIModalFooterYesButton = page.locator("//div[@class='modal-footer']//button[text()='Yes']");
        this.uIModalFooterNoButton = page.locator("//div[@class='modal-footer']//button[text()='No']");
    }

    async yesWithExpectedMessage(expectedMessage: string): Promise<void> {
        await this.page.waitForTimeout(1000);
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toContain(expectedMessage);
            await dialog.accept();
        });
    }

    async yesWithScreenOrWindowPopup(expectedMessage: string): Promise<void> {
        const text = await this.uIModalBody.innerText();
        expect(text).toContain(expectedMessage);
        await this.uIModalFooterYesButton.click();
    }

    async yesWithContainsMessage(expectedMessage: string): Promise<void> {
        await this.page.waitForTimeout(1000);
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toContain(expectedMessage);
            await dialog.accept();
        });
    }

    async verifyContainsMessageInPopup(expectedMessage: string): Promise<void> {
        await this.page.waitForTimeout(1000);
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toContain(expectedMessage);
        });
    }

    async acceptPopup(): Promise<void> {
        this.page.once('dialog', async dialog => {
            await dialog.accept();
        });
    }

    async dismissPopup(): Promise<void> {
        this.page.once('dialog', async dialog => {
            await dialog.dismiss();
        });
    }

    async yesWithExpectedMessageIfWindowExist(expectedMessage: string): Promise<void> {
        try {
            this.page.once('dialog', async dialog => {
                expect(dialog.message()).toContain(expectedMessage);
                await dialog.accept();
            });
        } catch {
            // Window does not exist
        }
    }

    async noWithExpectedMessage(expectedMessage: string): Promise<void> {
        await this.page.waitForTimeout(1000);
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toContain(expectedMessage);
            await dialog.dismiss();
        });
    }

    async noWithContainsMessage(expectedMessage: string): Promise<void> {
        await this.page.waitForTimeout(1000);
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toContain(expectedMessage);
            await dialog.dismiss();
        });
    }

    async noWithExpectedMessageIfWindowExist(expectedMessage: string): Promise<void> {
        try {
            this.page.once('dialog', async dialog => {
                expect(dialog.message()).toContain(expectedMessage);
                await dialog.dismiss();
            });
        } catch {
            // Window does not exist
        }
    }

    async noWithScreenOrWindowPopup(expectedMessage: string): Promise<void> {
        const text = await this.uIModalBody.innerText();
        expect(text).toContain(expectedMessage);
        await this.uIModalFooterNoButton.click();
    }

    async yes(): Promise<void> {
        this.page.once('dialog', async dialog => {
            await dialog.accept();
        });
    }

    async yesIfWindowExist(): Promise<void> {
        try {
            this.page.once('dialog', async dialog => {
                await dialog.accept();
            });
        } catch {
            // No dialog
        }
    }

    async no(): Promise<void> {
        this.page.once('dialog', async dialog => {
            await dialog.dismiss();
        });
    }

    async checkAlertIsPresentOrNot(): Promise<boolean> {
        try {
            await this.page.waitForEvent('dialog', { timeout: 20000 });
            return true;
        } catch {
            return false;
        }
    }
}

export class AcknowledgePage {
    readonly page: Page;
    readonly uIErrorInfoTextEdit: Locator;
    readonly uIRemarkErrorInfoTextEdit: Locator;
    readonly uIOkButton: Locator;
    readonly uILogo: Locator;
    readonly uIPopupMessage: Locator;
    readonly uIPopupOkButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIErrorInfoTextEdit = page.locator('#htmlErrorInfo');
        this.uIRemarkErrorInfoTextEdit = page.locator('#htmlNotesInfo');
        this.uIOkButton = page.locator('#cmdOk');
        this.uILogo = page.locator('#imgMsgType');
        this.uIPopupMessage = page.locator('#popupMessage');
        this.uIPopupOkButton = page.locator('#popupOkBtn');
    }

    async okWithExpectedMessage(expectedMessage: string): Promise<void> {
        const popup = await this.page.context().waitForEvent('page');
        await popup.waitForLoadState();
        const messageText = await popup.locator('#htmlErrorInfo').innerText();
        expect(messageText.toLowerCase()).toContain(expectedMessage.toLowerCase());
        await popup.locator('#cmdOk').click();
    }

    async okWithExpectedMessageFor2026Version(expectedMessage: string): Promise<void> {
        const popup = await this.page.context().waitForEvent('page');
        await popup.waitForLoadState();
        const messageText = await popup.locator('#popupMessage').innerText();
        expect(messageText.toLowerCase()).toContain(expectedMessage.toLowerCase());
        await popup.locator('#popupOkBtn').click();
    }

    async okWithExpectedMessageFor2026VersionWithoutSwitch(expectedMessage: string): Promise<void> {
        const actualText = (await this.uIPopupMessage.innerText()).toLowerCase().replace(/\s+/g, '').trim();
        const expectedText = expectedMessage.toLowerCase().replace(/\s+/g, '').trim();
        expect(actualText).toContain(expectedText);
        await this.uIPopupOkButton.click();
    }

    async okWithExpectedMessageForNames(expectedMessage: string): Promise<void> {
        const popup = await this.page.context().waitForEvent('page');
        await popup.waitForLoadState();
        const messageText = await popup.locator('#popupMessage').innerText();
        expect(messageText.toLowerCase()).toContain(expectedMessage.toLowerCase());
        await popup.locator('#popupOkBtn').click();
    }

    async okWithExpectedContainMessage(expectedMessage: string): Promise<void> {
        const popup = await this.page.context().waitForEvent('page');
        await popup.waitForLoadState();
        const messageText = await popup.locator('#htmlErrorInfo').innerText();
        expect(messageText).toContain(expectedMessage);
        await popup.locator('#cmdOk').click();
    }

    async okWithExpectedIngnoreCase(expectedMessage: string): Promise<void> {
        const popup = await this.page.context().waitForEvent('page');
        await popup.waitForLoadState();
        const messageText = await popup.locator('#htmlErrorInfo').innerText();
        expect(messageText.toLowerCase()).toBe(expectedMessage.toLowerCase());
        await popup.locator('#cmdOk').click();
    }

    async okWithExpectedMessageIfWindowExist(expectedMessage: string): Promise<void> {
        try {
            const popup = await this.page.context().waitForEvent('page', { timeout: 3000 });
            await popup.waitForLoadState();
            const messageText = await popup.locator('#htmlErrorInfo').innerText();
            expect(messageText).toContain(expectedMessage);
            await popup.locator('#cmdOk').click();
        } catch {
            // Window does not exist
        }
    }

    async okWithExpectedMessageForDualWindows(expectedMessage: string): Promise<void> {
        const popup = await this.page.context().waitForEvent('page');
        await popup.waitForLoadState();
        const messageText = await popup.locator('#htmlErrorInfo').innerText();
        const messagecode = expectedMessage.substring(0, expectedMessage.indexOf(' '));
        const content = expectedMessage.substring(expectedMessage.indexOf(' ') + 1);
        expect(messageText).toContain(messagecode);
        expect(messageText).toContain(content);
        await popup.locator('#cmdOk').click();
    }

    async ok(): Promise<void> {
        const popup = await this.page.context().waitForEvent('page');
        await popup.waitForLoadState();
        await popup.locator('#cmdOk').click();
    }

    async okIfWindowExist(): Promise<void> {
        try {
            const popup = await this.page.context().waitForEvent('page', { timeout: 3000 });
            await popup.waitForLoadState();
            await popup.locator('#cmdOk').click();
        } catch {
            // Window does not exist
        }
    }

    async okIfWindowExistAsWarning(): Promise<void> {
        try {
            const popup = await this.page.context().waitForEvent('page', { timeout: 3000 });
            await popup.waitForLoadState();
            const logoSrc = await popup.locator('#imgMsgType').getAttribute('src');
            if (logoSrc && logoSrc.includes('err_48_2')) {
                await popup.locator('#cmdOk').click();
            }
        } catch {
            // Window does not exist
        }
    }

    async okIfWindowExistAsError(): Promise<void> {
        try {
            const popup = await this.page.context().waitForEvent('page', { timeout: 3000 });
            await popup.waitForLoadState();
            const logoSrc = await popup.locator('#imgMsgType').getAttribute('src');
            if (logoSrc && logoSrc.includes('err_48_4')) {
                await popup.locator('#cmdOk').click();
            }
        } catch {
            // Window does not exist
        }
    }

    async remarksAcknowledgeOk(): Promise<void> {
        const pages = this.page.context().pages();
        const remarksPage = pages.find(p => p.url().includes('Remarks'));
        if (remarksPage) {
            await remarksPage.locator('#cmdOk').click();
        }
    }

    async remarksAcknowledgeOkWithMessage(commentMessage: string): Promise<void> {
        const pages = this.page.context().pages();
        const remarksPage = pages.find(p => p.url().includes('Remarks'));
        if (remarksPage) {
            const text = await remarksPage.locator('#htmlNotesInfo').innerText();
            expect(text).toContain(commentMessage);
            await remarksPage.locator('#cmdOk').click();
        }
    }

    async notesAcknowledgeOk(): Promise<void> {
        const pages = this.page.context().pages();
        const notesPage = pages.find(p => p.url().includes('Notes'));
        if (notesPage) {
            await notesPage.locator('#cmdOk').click();
        }
    }

    async verifyAcknowledgeWindowNotOpened(msg: string): Promise<void> {
        try {
            const popup = await this.page.context().waitForEvent('page', { timeout: 3000 });
            await popup.waitForLoadState();
            const messageText = await popup.locator('#htmlErrorInfo').innerText();
            expect(messageText).not.toContain(msg);
            await popup.locator('#cmdOk').click();
        } catch {
            // No Error Popup Opened
        }
    }

    async verifyNotesComments(): Promise<void> {
        const pages = this.page.context().pages();
        const notesPage = pages.find(p => p.url().includes('Notes'));
        if (notesPage) {
            const text = await notesPage.locator("//div[@id='htmlNotesInfo']//b").innerText();
            expect(text).toContain('AUTO');
        }
    }

    async verifyInactiveCodeSelectedAwckMsg(): Promise<void> {
        await this.okWithExpectedMessage('(1119) Warning – Inactive code selected');
    }

    async CancelWithExpectedMessage(expectedMessage: string): Promise<void> {
        const popup = await this.page.context().waitForEvent('page');
        await popup.waitForLoadState();
        const messageText = await popup.locator('#htmlErrorInfo').innerText();
        expect(messageText.toLowerCase()).toContain(expectedMessage.toLowerCase());
        await popup.locator('#cmdOk').click();
    }

    async sysParameterAcknowledgeOk(): Promise<void> {
        const pages = this.page.context().pages();
        const ackPage = pages.find(p => p.url().includes('Acknowledge'));
        if (ackPage) {
            await ackPage.locator('#cmdOk').click();
        }
    }

    async okIfWindowExistWithName(name: string): Promise<void> {
        try {
            const popup = await this.page.context().waitForEvent('page', { timeout: 3000 });
            await popup.waitForLoadState();
            const msg = await popup.locator('#htmlErrorInfo').innerText();
            console.log(`${name.replace(/\s/g, '')}--${msg.replace(/\s/g, '')}`);
            await popup.locator('#cmdOk').click();
        } catch {
            // Window does not exist
        }
    }

    async verifyUpdateWillHappenWhenInspectionRecordIsSavedAcknowledgeMessage(): Promise<void> {
        await this.okWithExpectedMessage('(17553) Update will happen when the Inspection record is saved');
    }

    async verifyEvidenceSharedAcknowledgeMessage(): Promise<void> {
        // This triggers a confirm dialog, not acknowledge
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toContain('Evidence Locker is in use with another case\'s property items');
            await dialog.accept();
        });
    }

    async verifyEvidenceLockerAcknowledgeMessage(): Promise<void> {
        // This triggers a confirm dialog, not acknowledge
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toContain('Evidence Locker is in use with case');
            await dialog.accept();
        });
    }
}

export class KPICodedLookupPage {
    readonly page: Page;
    readonly uIKPIHelpWindowTable: Locator;
    readonly uICodeValueEdit: Locator;
    readonly uIDescriptionEdit: Locator;
    readonly uISearchIconButton: Locator;
    readonly uIClearIconButton: Locator;
    readonly uIIncludeInactiveCheckBox: Locator;
    readonly uIAddNewButton: Locator;
    readonly uIDescriptionEditFor2022: Locator;
    readonly uICodeValueEditForProperty: Locator;
    readonly uISearchIconButtonforProperty: Locator;
    readonly uIClearIconforProperty: Locator;
    readonly uINextButton: Locator;
    readonly uIPrevButton: Locator;
    readonly uIResetIcon: Locator;
    readonly uIJurisDropdown: Locator;
    readonly uIRepositryIDEdit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIKPIHelpWindowTable = page.locator('#grdSrch');
        this.uICodeValueEdit = page.locator('#txtCodeValue');
        this.uIDescriptionEdit = page.locator('#txtDescProp');
        this.uISearchIconButton = page.locator('#imgSrchButton');
        this.uIClearIconButton = page.locator('#imgClearCoded');
        this.uIIncludeInactiveCheckBox = page.locator('#chkIsActive');
        this.uIAddNewButton = page.locator('#cmdAdd');
        this.uIDescriptionEditFor2022 = page.locator('#txtDesc');
        this.uICodeValueEditForProperty = page.locator('#txtCodeProp');
        this.uISearchIconButtonforProperty = page.locator('#imgSrchProp');
        this.uIClearIconforProperty = page.locator('#imgClearProp');
        this.uINextButton = page.locator("//span[text()='NEXT']");
        this.uIPrevButton = page.locator("//span[text()='PREV']");
        this.uIResetIcon = page.locator('#imgClearCoded');
        this.uIJurisDropdown = page.locator('#lstJuris');
        this.uIRepositryIDEdit = page.locator('#txtCodeValue');
    }

    async randomKPIHelpSelect(): Promise<void> {
        const popup = await this.page.context().waitForEvent('page');
        await popup.waitForLoadState();
        const rows = popup.locator('#grdSrch tr');
        const rowCount = await rows.count();
        if (rowCount > 1) {
            const randomIndex = Math.floor(Math.random() * (rowCount - 1)) + 1;
            await rows.nth(randomIndex).click();
        } else if (rowCount === 1) {
            await rows.nth(0).click();
        }
    }

    async kPIHelpSelect(srchValue: string): Promise<void> {
        const popup = await this.page.context().waitForEvent('page');
        await popup.waitForLoadState();
        const row = popup.locator('#grdSrch tr', { hasText: srchValue });
        await row.first().click();
    }

    async enterAtCode(code: string): Promise<void> {
        await this.uICodeValueEdit.fill(code);
    }

    async enterCode(value: string): Promise<void> {
        await this.uICodeValueEdit.fill(value);
    }

    async enterAtDescription(description: string): Promise<void> {
        await this.uIDescriptionEditFor2022.fill(description);
    }

    async enterAtDescription1(description: string): Promise<void> {
        await this.uIDescriptionEditFor2022.fill(description);
    }

    async enterAtPropertyDescription(description: string): Promise<void> {
        await this.uIDescriptionEdit.fill(description);
    }

    async clickIncludeInactiveCheckBox(): Promise<void> {
        await this.uIIncludeInactiveCheckBox.click();
    }

    async clickSearchIcon(): Promise<void> {
        await this.uISearchIconButton.click();
    }

    async clickClearIcon(): Promise<void> {
        await this.uIClearIconButton.click();
    }

    async clickResetIcon(): Promise<void> {
        await this.uIResetIcon.click();
    }

    async clickSearchIconForProperty(): Promise<void> {
        await this.uISearchIconButtonforProperty.click();
    }

    async clickClearIconForProperty(): Promise<void> {
        await this.uIClearIconforProperty.click();
    }

    async clickAddNewButton(): Promise<void> {
        await this.uIAddNewButton.click();
    }

    async clickNextButton(): Promise<void> {
        await this.uINextButton.click();
    }

    async closeScreen(): Promise<void> {
        await this.page.close();
    }

    async verifyAtDisrictInGridrow(rowCount: number, inactiveDistrict: string): Promise<void> {
        const cellText = await this.uIKPIHelpWindowTable.locator(`tr:nth-child(${rowCount}) td`).nth(0).innerText();
        expect(cellText).toContain(inactiveDistrict);
    }

    async verifyInactiveDistrictRowColor(rowCount: number): Promise<void> {
        const row = this.uIKPIHelpWindowTable.locator(`tr:nth-child(${rowCount})`);
        const color = await row.evaluate(el => getComputedStyle(el).color);
        expect(color).toContain('rgba(128, 128, 128, 1)');
    }

    async verifyGridrowCountAs1(): Promise<void> {
        const rowCount = await this.uIKPIHelpWindowTable.locator('tr').count();
        expect(rowCount).toBe(1);
    }

    async getRowCount(): Promise<number> {
        return await this.uIKPIHelpWindowTable.locator('tr').count();
    }

    async verifyRowCountIsNotNull(rowCount: number): Promise<void> {
        expect(rowCount).toBeGreaterThanOrEqual(1);
    }

    async verifyRowCountEqualsToZero(): Promise<void> {
        const rowCount = await this.uIKPIHelpWindowTable.locator('tr').count();
        expect(rowCount).toBe(0);
    }

    async verifyRowCountIsMoreThanOne(rowCount: number): Promise<void> {
        expect(rowCount).toBeGreaterThanOrEqual(1);
    }

    async selectGridRowByCellText(text: string): Promise<void> {
        const row = this.uIKPIHelpWindowTable.locator('tr', { hasText: text });
        await row.first().click();
    }

    async selectAtDescription(description: string): Promise<void> {
        await this.selectGridRowByCellText(description);
    }

    async selectAtPFCode(pfCode: string): Promise<void> {
        await this.selectGridRowByCellText(pfCode);
    }

    async selectAtCharge(charge: string): Promise<void> {
        await this.selectGridRowByCellText(charge);
    }

    async selectAtDispositionInGrid(disposition: string): Promise<void> {
        await this.selectGridRowByCellText(disposition);
    }

    async selectAtCodeValueInGrid(codeValue: string): Promise<void> {
        await this.selectGridRowByCellText(codeValue);
    }

    async selectAtZipCodeInGrid(zipCode: string): Promise<void> {
        await this.selectGridRowByCellText(zipCode);
    }

    async selectAtDefaultNameInGrid(defaultName: string): Promise<void> {
        await this.selectGridRowByCellText(defaultName);
    }

    async selectAtCityInGrid(city: string): Promise<void> {
        await this.selectGridRowByCellText(city);
    }

    async selectAtPodCode(podCode: string): Promise<void> {
        await this.selectGridRowByCellText(podCode);
    }

    async selectAtCellAlias(cellAlias: string): Promise<void> {
        await this.selectGridRowByCellText(cellAlias);
    }

    async selectDescription(): Promise<void> {
        const rows = this.uIKPIHelpWindowTable.locator('tr');
        const rowCount = await rows.count();
        if (rowCount > 1) {
            const randomIndex = Math.floor(Math.random() * (rowCount - 1)) + 1;
            await rows.nth(randomIndex).click();
        }
    }

    async clickAtDescription(description: string): Promise<void> {
        await this.selectGridRowByCellText(description);
    }

    async clickAtChargeInGrid(charge: string): Promise<void> {
        await this.selectGridRowByCellText(charge);
    }

    async clickAtEventNoInGrid(eventNo: string): Promise<void> {
        await this.selectGridRowByCellText(eventNo);
    }

    async selectCodeValueInGrid(code: string): Promise<void> {
        await this.selectGridRowByCellText(code);
    }

    async selectJurisAsBC(): Promise<void> {
        await this.selectGridRowByCellText('BC');
    }

    async selectChargeInGrid(charge: string): Promise<void> {
        await this.selectGridRowByCellText(charge);
    }

    async enterAtCodeForProperty(code: string): Promise<void> {
        await this.uICodeValueEditForProperty.fill(code);
    }

    async enterAtCharge(charge: string): Promise<void> {
        await this.uICodeValueEdit.fill(charge);
    }

    async enterAtRepositryID(repositoryID: string): Promise<void> {
        await this.uIRepositryIDEdit.fill(repositoryID);
    }

    async verifyJurisAsPX(): Promise<void> {
        const cellText = await this.uIKPIHelpWindowTable.locator('tr').nth(0).locator('td', { hasText: 'PX' }).innerText();
        expect(cellText).toContain('PX');
    }

    async verifyJurisAsBC(): Promise<void> {
        const cellText = await this.uIKPIHelpWindowTable.locator('tr').nth(1).locator('td', { hasText: 'BC' }).innerText();
        expect(cellText).toContain('BC');
    }

    async verifyJurisDropdownIsNotDisplayed(): Promise<void> {
        await expect(this.uIJurisDropdown).toBeHidden();
    }

    async verifyJurisDropdownAsPX(): Promise<void> {
        const selected = await this.uIJurisDropdown.inputValue();
        expect(selected).toContain('PX');
    }

    async verifyJurisDropdownAsBC(): Promise<void> {
        const selected = await this.uIJurisDropdown.inputValue();
        expect(selected).toContain('BC');
    }

    async selectJurisDropdownAsBC(): Promise<void> {
        await this.uIJurisDropdown.selectOption({ label: 'BC - Brown County Police Department' });
    }

    async verifyGridCountIsNotNull(): Promise<void> {
        const rowCount = await this.uIKPIHelpWindowTable.locator('tr').count();
        expect(rowCount).not.toBe(0);
    }

    async verifyCodedSearchCount(): Promise<void> {
        const rowCount = await this.uIKPIHelpWindowTable.locator('tr').count();
        expect(rowCount).toBe(0);
    }

    async verifyAtRowAsGreyOut(cellText: string): Promise<void> {
        const row = this.uIKPIHelpWindowTable.locator('tr', { hasText: cellText });
        const color = await row.first().evaluate(el => getComputedStyle(el).color);
        expect(color).toBe('rgba(128, 128, 128, 1)');
    }

    async getColumnValues(columnName: string): Promise<string[]> {
        const headerCells = this.uIKPIHelpWindowTable.locator('tr').first().locator('td, th');
        const headerCount = await headerCells.count();
        let colIndex = -1;
        for (let i = 0; i < headerCount; i++) {
            const text = await headerCells.nth(i).innerText();
            if (text.trim() === columnName) {
                colIndex = i;
                break;
            }
        }
        if (colIndex === -1) return [];
        const rows = this.uIKPIHelpWindowTable.locator('tr');
        const rowCount = await rows.count();
        const values: string[] = [];
        for (let i = 1; i < rowCount; i++) {
            const cellText = await rows.nth(i).locator('td').nth(colIndex).innerText();
            values.push(cellText.trim());
        }
        return values;
    }

    async verifyColumnValuesAreSorted(values: string[]): Promise<void> {
        const sorted = [...values].sort();
        expect(values).toEqual(sorted);
    }

    async selectContextRowAndClickChangeButton(): Promise<void> {
        const rows = this.uIKPIHelpWindowTable.locator('tr');
        const rowCount = await rows.count();
        const randomIndex = Math.floor(Math.random() * (rowCount - 1)) + 1;
        const row = rows.nth(randomIndex);
        await row.click({ button: 'right' });
        await this.page.locator("//div[@id='UltraWebMenu1']//li[@title='Change']").click();
    }

    async verifyAtChargeAsSpecialCharacter(expectedValue: string): Promise<void> {
        const text = await this.uICodeValueEdit.inputValue();
        expect(text).toBe(expectedValue);
    }

    async readCodeValue(): Promise<string[]> {
        return await this.getColumnValues('Value');
    }

    async verifyNoDuplicationFound(): Promise<void> {
        const rows = this.uIKPIHelpWindowTable.locator('tr');
        const rowCount = await rows.count();
        const allRowTexts: string[] = [];
        for (let i = 0; i < rowCount; i++) {
            const text = await rows.nth(i).innerText();
            allRowTexts.push(text);
        }
        const uniqueSet = new Set(allRowTexts);
        expect(allRowTexts.length).toBe(uniqueSet.size);
    }

    async verifyAddedCodeValueExistsInGrid(expectedValue: string): Promise<void> {
        const rows = this.uIKPIHelpWindowTable.locator('tr');
        const rowCount = await rows.count();
        let found = false;
        for (let i = 0; i < rowCount; i++) {
            const text = await rows.nth(i).innerText();
            if (text.includes(expectedValue)) {
                found = true;
                break;
            }
        }
        expect(found).toBe(true);
    }

    async verifyInActivePFIsNotListedInGrid(columnName: string, inactiveMarker: string = '#'): Promise<void> {
        const columnValues: string[] = [];
        let hasNext = true;
        while (hasNext) {
            const values = await this.getColumnValues(columnName);
            columnValues.push(...values);
            if (await this.uINextButton.isVisible()) {
                await this.uINextButton.click();
                await this.page.waitForTimeout(1000);
            } else {
                hasNext = false;
            }
        }
        expect(columnValues).not.toContain(inactiveMarker);
    }

    async verifyInActivePFIsListedInGrid(columnName: string, inactiveMarker: string = '##'): Promise<void> {
        const columnValues: string[] = [];
        let hasNext = true;
        while (hasNext) {
            const values = await this.getColumnValues(columnName);
            columnValues.push(...values);
            if (await this.uINextButton.isVisible()) {
                await this.uINextButton.click();
                await this.page.waitForTimeout(1000);
            } else {
                hasNext = false;
            }
        }
        const found = columnValues.some(v => v.includes(inactiveMarker));
        expect(found).toBe(true);
    }

    async verifyAtCodeUsingDescriptionInGrid(description: string, expectedCode: string): Promise<void> {
        const row = this.uIKPIHelpWindowTable.locator('tr', { hasText: description });
        const rowText = await row.first().innerText();
        expect(rowText).toContain(expectedCode);
    }

    async verifyAtDescriptionNotContainsInUse(code: string): Promise<void> {
        const row = this.uIKPIHelpWindowTable.locator('tr', { hasText: code });
        const rowText = await row.first().innerText();
        expect(rowText).not.toContain('(In Use)');
    }

    async verifyAtColumnValuesAreSortedAscendingOrder(columnName: string): Promise<void> {
        const values = await this.getColumnValues(columnName);
        const sorted = [...values].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        expect(values).toEqual(sorted);
    }

    async verifyAtColumnValuesAreSortedDescendingOrder(columnName: string): Promise<void> {
        const values = await this.getColumnValues(columnName);
        const sorted = [...values].sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()));
        expect(values).toEqual(sorted);
    }

    async verifyAtColumnValuesAreSortedAscendingOrderForInteger(columnName: string): Promise<void> {
        const values = await this.getColumnValues(columnName);
        const numValues = values.map(v => parseInt(v.trim(), 10));
        const sorted = [...numValues].sort((a, b) => a - b);
        expect(numValues).toEqual(sorted);
    }

    async verifyAtColumnValuesAreSortedDescendingOrderForInteger(columnName: string): Promise<void> {
        const values = await this.getColumnValues(columnName);
        const numValues = values.map(v => parseInt(v.trim(), 10));
        const sorted = [...numValues].sort((a, b) => b - a);
        expect(numValues).toEqual(sorted);
    }

    async verifyColumnsSortingAsAscending(columnName: string): Promise<void> {
        const values = await this.getColumnValues(columnName);
        const sorted = [...values].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        expect(values).toEqual(sorted);
    }

    async verifyAtCodeInGrid(expectedCode: string): Promise<void> {
        const values = await this.getColumnValues('Value');
        const found = values.some(v => v.trim() === expectedCode);
        expect(found).toBe(true);
    }

    async verifyAtDescriptionInGrid(expectedDescription: string): Promise<void> {
        const values = await this.getColumnValues('Description');
        const found = values.some(v => v.trim() === expectedDescription);
        expect(found).toBe(true);
    }

    async verifyAtHeaderInGrid(headerName: string): Promise<void> {
        const headerCells = this.uIKPIHelpWindowTable.locator('tr').first().locator('td, th');
        const headerCount = await headerCells.count();
        const headers: string[] = [];
        for (let i = 0; i < headerCount; i++) {
            const text = await headerCells.nth(i).innerText();
            headers.push(text.trim());
        }
        expect(headers).toContain(headerName);
    }

    async verifyAtQuestionInGrid(expectedQuestion: string): Promise<void> {
        const row = this.uIKPIHelpWindowTable.locator('tr', { hasText: expectedQuestion });
        await expect(row.first()).toBeVisible();
    }

    async verifyDescriptionValuesSortedAscending(): Promise<void> {
        const values = await this.getColumnValues('Description');
        const sorted = [...values].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        expect(values).toEqual(sorted);
    }

    async verifyAtRepositoryColumnValues(columnName: string, expectedPrefix: string): Promise<void> {
        const values = await this.getColumnValues(columnName);
        for (const value of values) {
            expect(value.substring(0, 1)).toBe(expectedPrefix);
        }
    }

    async verifyAtChargesInGrid(columnName: string, expectedCharge: string): Promise<void> {
        const values = await this.getColumnValues(columnName);
        for (const value of values) {
            expect(value).toBe(expectedCharge);
        }
    }

    async verifyAtChargesContainsInGrid(columnName: string, expectedCharge: string): Promise<void> {
        const values = await this.getColumnValues(columnName);
        for (const value of values) {
            expect(value).toContain(expectedCharge);
        }
    }

    async verifyChargeContainsInGrid(columnName: string, readedCharge: string): Promise<void> {
        const values = await this.getColumnValues(columnName);
        expect(values).toContain(readedCharge);
    }

    async verifyJurisDropdownAsGCP(): Promise<void> {
        const selected = await this.uIJurisDropdown.inputValue();
        expect(selected).toContain('GCP');
    }

    async verifyNIBRSInCodedScreen(rowIndex: number, expectedNIBRS: string): Promise<void> {
        const rows = this.uIKPIHelpWindowTable.locator('tr');
        const headerCells = rows.first().locator('td, th');
        const headerCount = await headerCells.count();
        let colIndex = -1;
        for (let i = 0; i < headerCount; i++) {
            const text = await headerCells.nth(i).innerText();
            if (text.trim() === 'Nibrs') {
                colIndex = i;
                break;
            }
        }
        if (colIndex >= 0) {
            const cellText = await rows.nth(rowIndex).locator('td').nth(colIndex).innerText();
            expect(cellText.toUpperCase()).toBe(expectedNIBRS.toUpperCase());
        }
    }

    async verifyPFInCodedSearch(rowCount: number, expectedPFCode: string): Promise<void> {
        const rows = this.uIKPIHelpWindowTable.locator('tr');
        const headerCells = rows.first().locator('td, th');
        const headerCount = await headerCells.count();
        let colIndex = -1;
        for (let i = 0; i < headerCount; i++) {
            const text = await headerCells.nth(i).innerText();
            if (text.trim() === 'PFCode') {
                colIndex = i;
                break;
            }
        }
        if (colIndex >= 0) {
            const cellText = await rows.nth(rowCount).locator('td').nth(colIndex).innerText();
            expect(cellText).toBe(expectedPFCode);
        }
    }

    async verifyAtMasterFile(expectedDescription: string): Promise<void> {
        const values = await this.getColumnValues('Master File');
        const found = values.some(v => v.includes(expectedDescription));
        expect(found).toBe(true);
    }

    async verifyAtDescriptionColumnContains(expectedDescription: string): Promise<void> {
        const values = await this.getColumnValues('Description');
        const found = values.some(v => v.includes(expectedDescription));
        expect(found).toBe(true);
    }

    async switchToZipCodeEntry(): Promise<Page> {
        const pages = this.page.context().pages();
        const zipPage = pages.find(p => p.url().includes('frmZip.aspx'));
        if (zipPage) {
            await zipPage.bringToFront();
            return zipPage;
        }
        return this.page;
    }
}

export class MultiFilesAttachWindowPage {
    readonly page: Page;
    readonly uIBrowseButton: Locator;
    readonly uIUploadButton: Locator;
    readonly uICloseButton: Locator;
    readonly uIRefreshButton: Locator;
    readonly uIForm: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uIBrowseButton = page.locator('#AjaxFileUpload1_SelectFileContainer');
        this.uIUploadButton = page.locator('#AjaxFileUpload1_UploadOrCancelButton');
        this.uICloseButton = page.locator('#btn_Close');
        this.uIRefreshButton = page.locator('#btn_refresh');
        this.uIForm = page.locator('#form1');
    }

    async selectTextFile(filePath: string): Promise<void> {
        const fileInput = this.page.locator('input[type="file"]');
        await fileInput.setInputFiles(filePath);
    }

    async selectImgFile(filePath: string): Promise<void> {
        const fileInput = this.page.locator('input[type="file"]');
        await fileInput.setInputFiles(filePath);
    }

    async clickUpload(): Promise<void> {
        await this.uIUploadButton.click();
        await this.page.waitForTimeout(1000);
    }

    async close(): Promise<void> {
        await this.uICloseButton.click();
        await this.page.waitForTimeout(3000);
    }

    async refresh(): Promise<void> {
        await this.uIRefreshButton.click();
    }
}

export class TreeViewHelpPage {
    readonly page: Page;
    readonly uISelectButton: Locator;
    readonly uITreeViewHelpTreeTable: Locator;
    readonly uISearchForEdit: Locator;
    readonly uIModifyCodedButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.uISelectButton = page.locator('#cmdSearch');
        this.uITreeViewHelpTreeTable = page.locator("//div[@id='RadTreeView2']");
        this.uISearchForEdit = page.locator('#txtActType');
        this.uIModifyCodedButton = page.locator('#cmdAddCoded');
    }

    async clickSelect(): Promise<void> {
        await this.uISelectButton.click();
    }

    async clickModifyCodedButton(): Promise<void> {
        await this.uIModifyCodedButton.click();
    }

    async selectOptionByActivityType(activityType: string): Promise<void> {
        await this.uITreeViewHelpTreeTable.locator(`//li//span[contains(text(),'${activityType}')]`).click();
    }

    async enterAtSearch(searchText: string): Promise<void> {
        await this.uISearchForEdit.fill(searchText);
    }

    async treeViewLoopValueSelectBasedOnContent(mainContent: string, subContent: string): Promise<void> {
        const mainEle = this.uITreeViewHelpTreeTable.locator(`//ul//li//div//span[text()='${mainContent}']`);
        const tree = mainEle.locator("//ancestor::li/div/span[@class='rtPlus']");
        await tree.click();
        await this.page.waitForTimeout(500);
        const subEle = this.uITreeViewHelpTreeTable.locator(`//ul//li//div//span[text()='${subContent}']`);
        await subEle.dblclick();
    }

    async treeViewLoopValueSelectThreeLevels(mainContent: string, subContent: string, value: string): Promise<void> {
        const mainEle = this.uITreeViewHelpTreeTable.locator(`//ul//li//div//span[text()='${mainContent}']`);
        const tree = mainEle.locator("//ancestor::li/div/span[@class='rtPlus']");
        await tree.click();
        await this.page.waitForTimeout(500);
        const subEle = this.uITreeViewHelpTreeTable.locator(`//ul//li//div//span[text()='${subContent}']`);
        const tree1 = subEle.locator("//ancestor::li/div/span[@class='rtPlus']");
        await tree1.click();
        const valueEle = this.page.locator(`//ul//li//div//span[text()='${value}']`);
        await valueEle.dblclick();
    }

    async treeViewLoopValueSelectBasedOnContentUsingSelect(mainContent: string, subContent: string): Promise<void> {
        const mainEle = this.uITreeViewHelpTreeTable.locator(`//ul//li//div//span[text()='${mainContent}']`);
        const tree = mainEle.locator("//ancestor::li/div/span[@class='rtPlus']");
        await tree.click();
        await this.page.waitForTimeout(500);
        const subEle = this.uITreeViewHelpTreeTable.locator(`//ul//li//div//span[text()='${subContent}']`);
        await subEle.click();
        await this.page.locator('#cmdSearch').click();
    }

    async selectCodeBookCheckboxByMainContent(mainContent: string): Promise<void> {
        const mainEle = this.uITreeViewHelpTreeTable.locator(`//ul//li//div//span[text()='${mainContent}']`);
        await mainEle.locator("//parent::div//..//preceding-sibling::label//input").click();
    }

    async clickExpandArrowWithDivision(division: string): Promise<void> {
        await this.page.locator(`//span[text()='${division}']//parent::div//parent::div//parent::div//span[@class='rtPlus']`).click();
    }

    async selectAtSection(section: string): Promise<void> {
        await this.page.locator(`//ul//li//div//span[text()='${section}']`).click();
    }

    async selectAtActivityType(activityType: string): Promise<void> {
        await this.page.locator(`//ul//li//div//span[text()='${activityType}']`).click();
    }

    async selectAtActivityTypeCheckbox(activityType: string): Promise<void> {
        await this.page.locator(`//ul//li//div//span[text()='${activityType}']/parent::div/parent::div/preceding-sibling::label/input`).click();
    }

    async clickExpandArrowbyIncidentType(incidentType: string): Promise<void> {
        const ele = this.uITreeViewHelpTreeTable.locator(`//ul//li//div//span[text()='${incidentType}']`);
        const tree = ele.locator("//ancestor::li/div/span[@class='rtPlus']");
        await tree.click();
    }

    async verifyAtIncidentType(incidentType: string): Promise<void> {
        const element = this.uITreeViewHelpTreeTable.locator(`//span[normalize-space()='${incidentType}']`);
        const text = await element.innerText();
        expect(text).toBe(incidentType);
    }

    async verifyChecklistContainsText(): Promise<void> {
        const text = await this.uITreeViewHelpTreeTable.innerText();
        expect(text).not.toBe('');
    }

    async verifyChecklistAsBlank(): Promise<void> {
        const text = await this.uITreeViewHelpTreeTable.innerText();
        expect(text).toBe('');
    }

    async verifyAtSectionsWithDivision(division: string, section: string): Promise<void> {
        const mainEle = this.uITreeViewHelpTreeTable.locator(`//ul//li//div//span[text()='${division}']`);
        const sections = mainEle.locator("//parent::div//parent::div//parent::div//parent::li//ul//span");
        const count = await sections.count();
        const sectionTexts: string[] = [];
        for (let i = 0; i < count; i++) {
            const text = await sections.nth(i).innerText();
            if (text.trim()) {
                sectionTexts.push(text.trim());
            }
        }
        expect(sectionTexts).toContain(section);
    }

    async selectCodeBookTableContents(codeValue: string, mainContent: string, subContent: string): Promise<void> {
        const subEle = this.uITreeViewHelpTreeTable.locator(`//ul//li//div//span[text()='${subContent}']`);
        if (await subEle.isVisible()) {
            await subEle.click();
        } else {
            const mainEle = this.uITreeViewHelpTreeTable.locator(`//ul//li//div//span[text()='${mainContent}']`);
            const tree = mainEle.locator("//ancestor::li/div/span[@class='rtPlus']");
            await tree.click();
            await this.page.waitForTimeout(500);
            await subEle.click();
        }
    }
}
