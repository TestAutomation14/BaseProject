import { Page, Locator, FrameLocator, Dialog } from '@playwright/test';
import { test, expect } from '@playwright/test';
import { BrowserHelpers } from './browser-helpers';

/**
 * Element interaction helpers (migrated from ObjectIdentification.java)
 * Combines ManualIdentify, ActionBuilder, and grid utility methods.
 */
export class ElementHelpers {
  getDropDownValues(uIActionDropdown: Locator) {
    throw new Error('Method not implemented.');
  }
  readonly page: Page;

  public dialogPromise?: Promise<Dialog>;
  readonly browserHelpers: BrowserHelpers;

  readonly uIBottomLeftSideStatusBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.browserHelpers = new BrowserHelpers(page);
    this.uIBottomLeftSideStatusBar = page.locator("//td[@class='statusBar']//b");
  }

  // ─── Dropdown Operations (ManualIdentify) ──────────────────────────────────

  async selectDropDownOption(locator: Locator, optionText: string) {
    await locator.selectOption({ label: optionText });
  }

  async selectDropDownByValue(locator: Locator, value: string) {
    await locator.selectOption({ value });
  }

  async selectDropDownByIndex(locator: Locator, index: number) {
    await locator.selectOption({ index });
  }

  async getDropDownSelectedItem(locator: Locator): Promise<string> {
    return await locator.locator('option:checked').textContent() || '';
  }

  async getDropDownSelectedIndex(locator: Locator): Promise<number> {
    const options = await locator.locator('option').all();
    for (let i = 0; i < options.length; i++) {
      const selected = await options[i].getAttribute('selected');
      if (selected !== null) return i;
    }
    return await locator.evaluate((el: HTMLSelectElement) => el.selectedIndex);
  }

  async getDropDownOptionsCount(locator: Locator): Promise<number> {
    return await locator.locator('option').count();
  }

  async getDropdownOptions(locator: Locator): Promise<string[]> {
    return await locator.locator('option').allTextContents();
  }

  async selectRadControlDropDownCheckAll(locator: Locator, listItem: string) {
    const checkbox = locator.locator(`//div//label[contains(text(),'${listItem}')]`);
    await checkbox.click();
  }

  /**
   * Selects a value from a Telerik RadComboBox dropdown list.
   * Replicates Java: selectRadControlDropDownValueSelect(WebElement dropdownList, String listItem)
   * Finds the label inside the dropdown list that contains the text, scrolls to it, and clicks.
   */
  async selectRadControlDropDownValueSelect(dropdownListLocator: Locator, listItem: string) {
    const item = dropdownListLocator.locator(`//div/ul//li//label[contains(text(),'${listItem}')]`);
    await item.scrollIntoViewIfNeeded();
    await item.click();
  }


  // ─── Input Operations ──────────────────────────────────────────────────────

  async clearAndType(locator: Locator, text: string) {
    await locator.clear();
    await locator.fill(text);
  }

  async typeText(locator: Locator, text: string) {
    await locator.click();
    await locator.pressSequentially(text);
  }

  async tabOut(locator: Locator) {
    await locator.press('Tab');
  }

  async pressEnter(locator: Locator) {
    await locator.press('Enter');
  }

  async pressEscape(locator: Locator) {
    await locator.press('Escape');
  }

  async getText(locator: Locator): Promise<string> {
    return (await locator.textContent()) || '';
  }

  async getInputValue(locator: Locator): Promise<string> {
    return await locator.inputValue();
  }

  // ─── Element State ─────────────────────────────────────────────────────────

  async isVisible(locator: Locator): Promise<boolean> {
    return await locator.isVisible();
  }

  async isEnabled(locator: Locator): Promise<boolean> {
    return await locator.isEnabled();
  }

  async isChecked(locator: Locator): Promise<boolean> {
    return await locator.isChecked();
  }

  async controlExist(locator: Locator): Promise<boolean> {
    return (await locator.count()) > 0 && await locator.first().isVisible();
  }

  async getCheckboxCheckedStatus(locator: Locator): Promise<boolean> {
    const title = await locator.getAttribute('title');
    return title === 'Checked';
  }

  // ─── Wait Operations ───────────────────────────────────────────────────────

  async waitForVisible(locator: Locator, timeout: number = 30000) {
    await locator.waitFor({ state: 'visible', timeout });
  }

  async waitForHidden(locator: Locator, timeout: number = 30000) {
    await locator.waitFor({ state: 'hidden', timeout });
  }

  async waitToDisappear(locator: Locator, timeout: number = 30000) {
    await locator.waitFor({ state: 'detached', timeout });
  }

  // ─── Click Operations ──────────────────────────────────────────────────────

  async doubleClick(locator: Locator) {
    await locator.dblclick();
  }

  async rightClick(locator: Locator) {
    await locator.click({ button: 'right' });
  }

  async clickUsingJS(locator: Locator) {
    await locator.evaluate((el: HTMLElement) => el.click());
  }

  async forceClick(locator: Locator) {
    await locator.click({ force: true });
  }

  // ─── Mouse/Action Operations (ActionBuilder) ──────────────────────────────

  async hoverElement(locator: Locator) {
    await locator.hover();
  }

  async dragAndDrop(source: Locator, target: Locator) {
    await source.dragTo(target);
  }

  // ─── Scroll Operations ─────────────────────────────────────────────────────

  async scrollIntoView(locator: Locator) {
    await locator.scrollIntoViewIfNeeded();
  }

  async scrollHorizontally(pixels: number = 1000) {
    await this.page.evaluate((px) => window.scrollBy(px, 0), pixels);
  }

  async scrollVertically(pixels: number = 1000) {
    await this.page.evaluate((px) => window.scrollBy(0, px), pixels);
  }

  async scrollElementToBottom(locator: Locator) {
    await locator.evaluate((el) => { el.scrollTop = el.scrollHeight; });
  }

  // ─── JavaScript Execution ──────────────────────────────────────────────────

  async executeJS(script: string, locator?: Locator) {
    if (locator) {
      await locator.evaluate((el, s) => eval(s), script);
    } else {
      await this.page.evaluate(script);
    }
  }

  async highlightElement(locator: Locator) {
    await locator.evaluate((el: HTMLElement) => {
      el.style.border = '3px solid red';
    });
  }

  async setFocusElement(locator: Locator) {
    await locator.evaluate((el: HTMLElement) => el.focus());
  }

  // ─── Common Button Operations (ManualIdentify) ─────────────────────────────

  async clickAddOrUpdateButton() {
    await this.page.locator('#imgAdd').click();
  }

  async saveTheScreen() {
    await this.page.locator('#cmdSave').click();
  }

  async saveAndCloseTheScreen() {
    await this.page.locator('#cmdSaveNClose').click();
  }

  async saveAndOpenNewScreen() {
    await this.page.locator('#cmdSaveNAddNew').click();
  }

  async clickSearchButton() {
    try {
      await this.page.locator('#cmdSearch').click();
    } catch {
      await this.page.locator("//span[contains(text(),'Search')]").first().click();
    }
  }

  async openNewEntryScreen() {
    await this.page.locator("//span[contains(text(),'Add New')]").first().click();
  }

  async clickResetButton() {
    await this.page.locator('#cmdRefresh').click();
  }

  async clickPrintButton() {
    await this.page.locator('#cmdPrint').click();
  }

  async clickLink(linkText: string) {
    await this.page.locator(`//span[contains(text(),'${linkText}')]`).first().click();
  }

  async clickButtonById(id: string) {
    await this.page.locator(`#${id}`).click();
  }

  // ─── Frame Operations ──────────────────────────────────────────────────────

  getFrame(frameSrcName: string): FrameLocator {
    return this.page.frameLocator(`iframe[src*="${frameSrcName}"]`);
  }

  getFrameById(frameId: string): FrameLocator {
    return this.page.frameLocator(`iframe[id*="${frameId}"]`);
  }

  async checkFrameExist(frameSrcName: string): Promise<boolean> {
    return (await this.page.locator(`iframe[src*="${frameSrcName}"]`).count()) > 0;
  }

  getMainWindowScreenTab(frameSrcName: string): FrameLocator {
    return this.page.frameLocator(`iframe[src*="${frameSrcName}"]`);
  }

  // ─── Grid/Table Operations (ManualIdentify) ────────────────────────────────

  async getGridTableRowsCount(tableLocator: Locator): Promise<number> {
    return await tableLocator.locator("table tbody[class*='Item'] tr").count();
  }

  async selectGridTableRow(tableLocator: Locator, rowIndex: number) {
    const rows = tableLocator.locator("table tbody[class*='Item'] tr");
    await rows.nth(rowIndex).click();
  }

  async selectGridRowByCellText(tableLocator: Locator, cellText: string) {
    const cell = tableLocator.locator(`table tbody tr td:has-text("${cellText}")`).first();
    await cell.scrollIntoViewIfNeeded();
    await cell.click();
  }

  async doubleClickGridRowByCellText(tableLocator: Locator, cellText: string) {
    const cell = tableLocator.locator(`table tbody tr td:has-text("${cellText}")`).first();
    await cell.scrollIntoViewIfNeeded();
    await cell.dblclick();
  }

  async deleteGridRowByCellText(tableLocator: Locator, cellText: string) {
    const cell = tableLocator.locator(`table tbody tr td:has-text("${cellText}")`).first();
    const row = cell.locator('..');
    const deleteIcon = row.locator("td[class*='Delete_Icon']");
    await deleteIcon.click();
  }

  async selectGridRowCheckBoxByCellText(tableLocator: Locator, cellText: string) {
    const cell = tableLocator.locator(`table tbody tr td:text-is("${cellText}")`).first();
    const row = cell.locator('..');
    const checkbox = row.locator('img').first();
    await checkbox.scrollIntoViewIfNeeded();
    await checkbox.click();
  }

  async getGridRowCellsValues(tableLocator: Locator, rowIndex: number): Promise<string[]> {
    const rows = tableLocator.locator("table tbody[class*='Item'] tr");
    const cells = rows.nth(rowIndex).locator('td');
    return await cells.allTextContents();
  }

  async getGridColumnValues(tableLocator: Locator, columnName: string): Promise<string[]> {
    const headerCells = await tableLocator.locator('th').allTextContents();
    const colIndex = headerCells.findIndex((h) => h.trim().includes(columnName));
    if (colIndex === -1) return [];

    const rows = tableLocator.locator("table tbody[class*='Item'] tr");
    const count = await rows.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) {
      const cellText = await rows.nth(i).locator('td').nth(colIndex).textContent();
      values.push(cellText?.trim() || '');
    }
    return values;
  }

  async selectGridHeaderColumn(tableLocator: Locator, columnName: string) {
    const header = tableLocator.locator(`th:has-text("${columnName}")`).first();
    await header.click();
  }

  async selectContextMenuItem(locator: Locator, menuItem: string) {
    await locator.click({ button: 'right' });
    await this.page.locator(`text=${menuItem}`).first().click();
  }

  async getGridCell(tableLocator: Locator, cellText: string): Promise<Locator> {
    return tableLocator.locator(`td:has-text("${cellText}")`).first();
  }

  async getGridCellByRowAndColumn(tableLocator: Locator, rowIndex: number, colIndex: number): Promise<Locator> {
    const rows = tableLocator.locator("table tbody[class*='Item'] tr");
    return rows.nth(rowIndex).locator('td').nth(colIndex);
  }

  // ─── Screen Tab Operations ─────────────────────────────────────────────────

  async reloadScreenTab(tabName: string) {
    const tab = this.page.locator(`span.rtsTxt:has-text("${tabName}")`);
    await tab.click({ button: 'right' });
    await this.page.locator("span:has-text('Reload Tab')").click();
  }

  async rightClickTabMenu(tabName: string, menuItem: string) {
    const tab = this.page.locator(`span.rtsTxt:has-text("${tabName}")`);
    await tab.click({ button: 'right' });
    await this.page.locator(`span:has-text("${menuItem}")`).first().click();
  }

  async getEnabledScreenTabs(): Promise<string[]> {
    const tabs = this.page.locator('#pnxWindowStrip span.rtsTxt');
    const allTabs = await tabs.allTextContents();
    return allTabs.filter((t) => t.trim() !== '');
  }
  async selectRadMultiCheckboxValue(arrowLocator: Locator, dropdownContainer: Locator, values: string): Promise<void> {
    // Safety check to catch the error early
    if (!arrowLocator || !dropdownContainer) {
      throw new Error(`selectRadMultiCheckboxValue: One of the locators provided is undefined.
            arrowLocator: ${arrowLocator},
            dropdownContainer: ${dropdownContainer}`);
    }

    // 1. Click the arrow to open the dropdown
    await arrowLocator.click();

    // 2. Ensure the dropdown list is visible
    await dropdownContainer.waitFor({ state: 'visible' });

    const itemsToSelect = values.split(',').map(v => v.trim());

    for (const itemText of itemsToSelect) {
      // Find the specific list item
      const listItem = dropdownContainer.locator('li.rcbItem').filter({ hasText: new RegExp(`^${itemText}$`) });

      const checkbox = listItem.locator('input.rcbCheckBox');

      // Ensure it's ready to be clicked
      await checkbox.waitFor({ state: 'visible' });

      if (!(await checkbox.isChecked())) {
        await checkbox.check();
      }
    }

    // 4. Close the dropdown
    await arrowLocator.click();
  }
  // In src/helpers/element-helpers.ts

  async deselectRadMultiCheckboxValue(arrowLocator: Locator, dropdownContainer: Locator, value: string): Promise<void> {
    // Safety check to catch the error early
    if (!arrowLocator || !dropdownContainer) {
      throw new Error(`deselectRadMultiCheckboxValue: One of the locators provided is undefined.
            arrowLocator: ${arrowLocator},
            dropdownContainer: ${dropdownContainer}`);
    }

    // 1. Click the arrow to open the dropdown
    await arrowLocator.click();

    // 2. Ensure the dropdown list is visible
    await dropdownContainer.waitFor({ state: 'visible' });

    const itemToDeselect = value.trim();

    // Find the specific list item
    const listItem = dropdownContainer.locator('li.rcbItem').filter({ hasText: new RegExp(`^${itemToDeselect}$`) });

    const checkbox = listItem.locator('input.rcbCheckBox');

    // Ensure it's ready to be clicked
    await checkbox.waitFor({ state: 'visible' });

    // 3. Uncheck the checkbox if it is checked
    if (await checkbox.isChecked()) {
      await checkbox.uncheck();
    }

    // 4. Close the dropdown
    await arrowLocator.click();
  }
  async verifyUpdateSuccessfulInLastWindow(): Promise<void> {
    // 1. Get all open windows/tabs in the current browser context
    const allPages = this.page.context().pages();

    // 2. Identify the last (newest) window
    const lastWindow = allPages[allPages.length - 1];

    if (!lastWindow) {
      throw new Error("No windows are currently open.");
    }

    // Optional: Bring it to the front so you can see it during execution
    await lastWindow.bringToFront();

    // 3. Define the locator specifically for the LAST window
    const statusLocator = lastWindow.locator("//td[contains(@class,'status')]//b");

    // 4. Use a web-first assertion. 
    // This will wait up to 10 seconds for the message to appear in THAT specific window.
    await expect(statusLocator).toHaveText(/Update Successful/i, { timeout: 10000 });

    console.log(`Successfully verified message in the last window: ${await lastWindow.title()}`);
  }

 
  async verifyAdditionSuccessfulInLastWindow(): Promise<void> {
    const allPages = this.page.context().pages();

    // 2. Identify the last (newest) window
    const lastWindow = allPages[allPages.length - 1];

    if (!lastWindow) {
      throw new Error("No windows are currently open to verify addition.");
    }

    // 3. Bring the newest window to focus
    await lastWindow.bringToFront();

    // CRITICAL FIX: Wait for the new window to finish its navigation state.
    // This stops Playwright from hanging with "waiting for navigation to finish..."
    await lastWindow.waitForLoadState('domcontentloaded');

    // 4. Define the locator using the project standard for status messages
    const statusLocator = lastWindow.locator("//td[contains(@class,'status')]//b");

    // 5. Perform the assertion
    await expect(statusLocator).toHaveText(/1002\s*-\s*Addition Successful/i, { timeout: 10000 });

    console.log(`Successfully verified Addition message in window: ${await lastWindow.title()}`);
  }

  async checkAckExist(): Promise<void> {
    // 1. Get all open windows (pages) in the current browser context
    const allPages = this.page.context().pages();
    let isErrorPopupPresent = false;
    let foundErrorText = "";

    // 2. Loop through all open windows
    for (const currentPage of allPages) {
      const title = await currentPage.title();

      // 3. Check if the window is an "Acknowledge" popup
      if (title.includes("Acknowledge")) {
        // Target the error info text field 
        // (Adjust this selector if your 'uIErrorInfoTextEdit' uses a different ID)
        const errorInfoLocator = currentPage.locator("//*[@id='htmlErrorInfo']");

        // Check if the locator exists before grabbing text
        if (await errorInfoLocator.count() > 0) {
          const text = await errorInfoLocator.innerText();

          // 4. Look for the failure keywords
          const errorKeywords = ["Validation", "Failed", "error", "Invalid", "Error"];

          if (errorKeywords.some(keyword => text.includes(keyword))) {
            isErrorPopupPresent = true;
            foundErrorText = text;
            break; // Exit loop if an error is found
          }
        }
      }
    }

    // 5. Final Assertion: Fail the test if an error popup was found
    // Equivalent to Java's verify.ExpectedValueIsFalse
    expect(isErrorPopupPresent, `Validation error popup arose: "${foundErrorText}"`).toBe(false);
  }
  async verifyDropdownSelectedValue(dropdownLocator: Locator, expectedValue: string): Promise<void> {
    // 1. Retrieve the text of the currently selected option
    const dropdownSelectedItem = await dropdownLocator.locator('option:checked').textContent() ?? '';
    // 2. Perform the assertion with whitespace cleanup
    expect(dropdownSelectedItem.trim()).toBe(expectedValue.trim());
  }

  async verifyAndPrintRadComboBoxSelectedValues(
    dropdownMainWrapperLocator: Locator,
    expectedValues: string | string[]
  ): Promise<string[]> {
    const page = dropdownMainWrapperLocator.page();

    // 1. Get the ID from the wrapper element
    const mainId = await dropdownMainWrapperLocator.getAttribute('id');
    if (!mainId) {
      throw new Error('Could not retrieve "id" attribute from the provided dropdown locator.');
    }

    // 2. Normalize Dropdown ID (combobox ID -> dropdown ID)
    const dropdownId = mainId.endsWith('_DropDown') ? mainId : `${mainId}_DropDown`;

    // 3. XPath to locate all selected items (checks both @aria-checked='true' and checked input)
    const selectedItemsXPath = `//div[@id='${dropdownId}']//ul[contains(@class, 'rcbList')]//li[contains(@class, 'rcbItem') and (@aria-checked='true' or .//input[@type='checkbox' and @checked])]`;

    const selectedItemsLocator = page.locator(`xpath=${selectedItemsXPath}`);

    // 4. Extract titles or inner text from all matched selected items
    const actualSelectedValues: string[] = await selectedItemsLocator.evaluateAll((items: HTMLLIElement[]) => {
      return items.map((item) => {
        const title = item.getAttribute('title');
        return (title ? title.trim() : item.textContent?.trim()) || '';
      }).filter((text) => text.length > 0);
    });

    // 5. Print results to Console
    console.log(`\n================ RADCOMBOBOX SELECTED VALUES (XPATH) ================`);
    console.log(`Target XPath   : //div[@id='${dropdownId}']`);
    console.log(`Total Selected : ${actualSelectedValues.length}`);
    if (actualSelectedValues.length > 0) {
      console.table(actualSelectedValues.map((val, idx) => ({ Index: idx + 1, 'Selected Value': val })));
    } else {
      console.log('No items currently selected.');
    }
    console.log(`=====================================================================\n`);

    // 6. Assert against expected values
    const expectedArray = Array.isArray(expectedValues) ? expectedValues : [expectedValues];

    // Sort before comparison to avoid ordering mismatch errors
    expect(actualSelectedValues.slice().sort()).toEqual(expectedArray.slice().sort());

    return actualSelectedValues;
  }
  async saveWithAccept(buttonLocator: Locator): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept().catch(() => { }));
    await buttonLocator.click();
  }

  async verifyTabColor(element: Locator, expectedColor: string): Promise<void> {
    // Auto-waits and automatically normalizes color formats (e.g., hex/name vs rgb/rgba)
    await expect(element).toHaveCSS('color', expectedColor);
  }

  async saveAndCloseWithAccept(buttonLocator: Locator): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept().catch(() => { }));
    await buttonLocator.click();
  }

  async verifyWindowExistByTitle(title: string): Promise<void> {
    const isOpened = await this.browserHelpers.windowExistsByTitle(title);

    expect(
      isOpened,
      `Expected window with title "${title}" to be opened, but it was not found.`
    ).toBe(true);
  }

  async switchToCodedSearch(): Promise<void> {
    await this.browserHelpers.switchToPageByTitle('Coded Search');
  }

  async Clicksave(buttonLocator: Locator): Promise<void> {
    this.dialogPromise = this.page.waitForEvent('dialog');
    await buttonLocator.click();
  }

}
