// @ts-nocheck
import { Locator, Page, expect } from '@playwright/test';

/**
 * Grid Helper - migrated from ObjectIdentification.ManualIdentify grid methods.
 *
 * Works with Infragistics/Telerik WebDataGrid structure:
 *   div#gridId > table > tbody.Item > tr > td
 *   div#gridId > table > tbody > tr.ThemeHeader > th
 */
export class GridHelpers {
    deleteGridRowByCellInnerText(uINamesTabResultGrid: Locator, arg1: string) {
        throw new Error('Method not implemented.');
    }
    private page: Page;
    getGridTableColumnValues: any;

    constructor(page: Page) {
        this.page = page;
    }

    // ─── Row Selection ───────────────────────────────────────────────────────

    /**
     * Click a grid row that contains the given text in any cell.
     * Equivalent to: objectIdentification.manualIdentify.selectGridRowByCellInnerText(table, text)
     */
    async selectRowByCellText(table: Locator, cellText: string): Promise<void> {
        const cell = table.locator('tr[type="row"]').locator('td', { hasText: cellText }).first();
        await cell.click();
    }


    async SelectArrestByAtCaseNo(): Promise<void> {
        await this.page.waitForTimeout(3000);
        const caseNo = BaseData.getTestValue('CaseNo');
        const row = this.page.locator(`//div[@id='grdBooking']//td[contains(text(),'${caseNo}')]`);
        await row.first().waitFor({ state: 'visible', timeout: 15000 });
        await row.first().click();
    }

    /**
     * Click a grid row at a specific index (0-based).
     * Equivalent to: objectIdentification.manualIdentify.selectGridRowByIndex(table, index)
     */
    async selectRowByIndex(table: Locator, rowIndex: number): Promise<void> {
        const row = table.locator('tbody tr').nth(rowIndex);
        await row.scrollIntoViewIfNeeded();
        await row.click();
    }

    /**
     * Click the checkbox in the row containing the given text.
     * Equivalent to: objectIdentification.manualIdentify.selectGridRowCheckBoxByCellInnerText(table, text)
     */
    async selectRowCheckboxByCellText(table: Locator, cellText: string): Promise<void> {
        const row = table.locator('tr[type="row"]').filter({ hasText: cellText }).first();
        const checkbox = row.locator('img').first();
        await checkbox.click({ force: true });
    }

    /**
     * Click the checkbox in a row at a specific index.
     * Equivalent to: objectIdentification.manualIdentify.selectGridRowCheckBoxByIndex(table, index)
     */
    async selectRowCheckboxByIndex(table: Locator, rowIndex: number): Promise<void> {
        const row = table.locator('tbody tr').nth(rowIndex);
        const checkbox = row.locator('img, input[type="checkbox"]').first();
        await checkbox.scrollIntoViewIfNeeded();
        await checkbox.click();
    }

    // ─── Cell Retrieval ──────────────────────────────────────────────────────

    /**
     * Get a specific cell locator by finding the row with uniqueRowValue and returning the cell at columnName.
     * Equivalent to: objectIdentification.manualIdentify.getGridCell(table, uniqueRowValue, columnName)
     */
    // async getGridCell(table: Locator, uniqueRowValue: string, columnName: string): Promise<Locator> {
    //     const colIndex = await this.getColumnIndex(table, columnName);
    //     const cell = table.locator(`td:has-text("${uniqueRowValue}")`).first();
    //     const row = cell.locator('..');
    //     const targetCell = row.locator('td').nth(colIndex);
    //     await targetCell.scrollIntoViewIfNeeded();
    //     return targetCell;
    // }
    // async getGridCell(table: Locator, uniqueRowValue: string, columnName: string): Promise<Locator> {
    //     const row = await this.getGridRowByCellInnerText(table, uniqueRowValue);
    //     const columnIndex = await this.getGridColumnIndex(table, columnName);
    //     const cell = row.locator('td').nth(columnIndex);
    //     return cell;
    // }

    // ── Signatures ──────────────────────────────────────────────────────────────

    // ── Signatures (Add these above the implementation) ─────────────────────────
    async getGridCell(table: Locator, columnName: string, rowIndex: number): Promise<Locator>;
    async getGridCell(table: Locator, uniqueRowValue: string, columnName: string): Promise<Locator>;
    async getGridCell(table: Locator, rowIndex: number, columnIndex: number): Promise<Locator>;

    // ── Implementation ──────────────────────────────────────────────────────────
    async getGridCell(table: Locator, arg1: any, arg2: any): Promise<Locator> {

        // Case 1: (table, "Aliases/Nicknames", 0) -> Java Style (Column Name + Row Index)
        // This is the specific case causing your error.
        if (typeof arg1 === 'string' && typeof arg2 === 'number') {
            const columnIndex = await this.getGridColumnIndex(table, arg1);
            const row = table.locator('tr[type="row"]').nth(arg2);
            const cell = row.locator('td').nth(columnIndex);
            return cell;
        }

        // Case 2: (table, 0, 4) -> Direct Indices (Row Index + Column Index)
        else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
            const row = table.locator('tr[type="row"]').nth(arg1);
            const cell = row.locator('td').nth(arg2);
            return cell;
        }

        // Case 3: (table, "David, Beckam", "Juris") -> Unique Text lookup
        else {
            const row = await this.getGridRowByCellInnerText(table, String(arg1));
            const columnIndex = await this.getGridColumnIndex(table, String(arg2));
            const cell = row.locator('td').nth(columnIndex);
            return cell;
        }
    }
    /**
     * Get a cell locator by row index and column name.
     * Equivalent to: objectIdentification.manualIdentify.getGridCell(table, rowIndex, columnName)
     */
    async getGridCellByIndex(table: Locator, rowIndex: number, columnName: string): Promise<Locator> {
        const colIndex = await this.getColumnIndex(table, columnName);
        // XPath uses 1-based indexing for position(), so we add 1 to 0-based indices
        const xpath = `.//tbody/tr[position()=${rowIndex + 1}]/td[position()=${colIndex + 1}]`;
        const targetCell = table.locator(`xpath=${xpath}`);
        return targetCell;
    }

    /**
     * Get the text content of a specific cell by row index and column name.
     * Equivalent to: objectIdentification.manualIdentify.getGridCellInnerText(table, columnName, rowIndex)
     */
    async getGridCellInnerText(table: Locator, columnName: string, rowIndex: number): Promise<string> {
        const cell = await this.getGridCellByIndex(table, rowIndex, columnName);
        const cellText = (await cell.innerText()).trim();
        console.log(`Retrieved cell text for column "${columnName}" at row index ${rowIndex}: "${cellText}"`);
        return cellText;
    }

    /**
     * Get the text content of a cell by unique row value and column name.
     * Equivalent to: getGridCell(table, uniqueRowValue, columnName).getText()
     */
    async getGridCellText(table: Locator, uniqueRowValue: string, columnName: string): Promise<string> {
        const cell = await this.getGridCell(table, uniqueRowValue, columnName);
        console.log("cell text: ", cell);
        return (await cell.innerText()).trim();
    }

    /**
     * Get a cell with an input element by unique row value and column name.
     * Equivalent to: objectIdentification.manualIdentify.getGridCellWithInput(table, uniqueRowValue, columnName)
     */
    async getGridCellWithInput(table: Locator, uniqueRowValue: string, columnName: string): Promise<Locator> {
        const cell = await this.getGridCell(table, uniqueRowValue, columnName);
        return cell.locator('input').first();
    }

    // ─── Row Retrieval ───────────────────────────────────────────────────────

    /**
     * Get the row locator that contains the given text.
     */
    async getRowByCellText(table: Locator, cellText: string): Promise<Locator> {
        const cell = table.locator(`td:has-text("${cellText}")`).first();
        return cell.locator('..');
    }

    /**
     * Get all data rows from a table.
     */
    async getAllRows(table: Locator): Promise<Locator[]> {
        return await table.locator('tbody tr').all();
    }

    /**
     * Get row count.
     */
    async getRowCount(table: Locator): Promise<number> {
        return await table.locator('tbody tr').count();
    }

    /**
     * Click a random row in the grid.
     * Equivalent to: objectIdentification.manualIdentify.selectRandomGridRow(table)
     */
    async selectRandomRow(table: Locator): Promise<void> {
        const rows = table.locator('tbody tr');
        const count = await rows.count();
        if (count > 0) {
            const row = rows.nth(Math.floor(Math.random() * count));
            await row.scrollIntoViewIfNeeded();
            await row.click();
        }
    }

    // ─── Column Index Resolution ─────────────────────────────────────────────

    /**
     * Get the column index by column header text.
     * Looks for th elements in header rows (ThemeHeader class or first tr with th).
     */
    async getColumnIndex(table: Locator, columnName: string): Promise<number> {
        // Try finding th elements with exact text
        const headers = table.locator('th');
        const count = await headers.count();
        for (let i = 0; i < count; i++) {
            const text = (await headers.nth(i).innerText()).trim();
            if (text.toLowerCase() === columnName.toLowerCase()) {
                // Check for idx attribute (Infragistics pattern)
                const idx = await headers.nth(i).getAttribute('idx');
                if (idx !== null) {
                    return parseInt(idx, 10);
                }
                return i;
            }
        }
        throw new Error(`Column '${columnName}' not found in grid`);
    }

    // ─── Delete Operations ───────────────────────────────────────────────────

    /**
     * Click the delete icon in the row containing the given text.
     * Equivalent to: objectIdentification.manualIdentify.deleteGridRowByCellInnerText(table, text)
     */
    async deleteRowByCellText(table: Locator, cellText: string): Promise<void> {
        const cell = table.locator(`td:has-text("${cellText}")`).first();
        const row = cell.locator('..');
        const deleteIcon = row.locator("td[class*='Delete_Icon']").first();
        await deleteIcon.scrollIntoViewIfNeeded();
        await deleteIcon.click();
    }

    // ─── Context Menu ────────────────────────────────────────────────────────

    /**
     * Right-click a cell and select a context menu item.
     * Equivalent to: objectIdentification.manualIdentify.selectContextMenuItemInTheGridRow(table, text, menuItem)
     */
    async selectContextMenuItem(table: Locator, cellText: string, menuItem: string): Promise<void> {
        const cell = table.locator(`td:has-text("${cellText}")`).first();
        await cell.scrollIntoViewIfNeeded();
        await cell.click({ button: 'right' });
        await this.page.locator(`div[id*='Menu'] >> text="${menuItem}"`).click();
    }

    // ─── Double Click ────────────────────────────────────────────────────────

    /**
     * Double-click a cell containing the given text.
     * Equivalent to: objectIdentification.manualIdentify.doubleClickGridRowByCellInnerText(table, text)
     */
    async doubleClickRowByCellText(table: Locator, cellText: string): Promise<void> {
        const cell = table.locator(`td:has-text("${cellText}")`).first();
        await cell.scrollIntoViewIfNeeded();
        await cell.dblclick();
    }

    // ─── Verification Helpers ────────────────────────────────────────────────

    /**
     * Verify a cell value in a row identified by unique text.
     */
    async verifyCellText(table: Locator, expectedValue: string, columnName: string,): Promise<void> {
        const text = await this.getGridCellText(table, expectedValue, columnName);
        expect(text).toEqual(expectedValue);
    }

    /**
     * Verify a cell contains specific text.
     */
    async verifyCellContains(table: Locator, uniqueRowValue: string, columnName: string, expectedText: string): Promise<void> {
        const text = await this.getGridCellText(table, uniqueRowValue, columnName);
        expect(text).toContain(expectedText);
    }

    /**
     * Verify row count in the grid.
     */
    async verifyRowCount(table: Locator, expectedCount: number): Promise<void> {
        const count = await this.getRowCount(table);
        expect(count).toEqual(expectedCount);
    }
    async getGridRowByCellInnerText(table: Locator, cellInnerText: string): Promise<Locator> {
        const tableBody = table.locator("xpath=.//table/tbody[contains(@class,'Item')]");
        const cell = tableBody.locator(`xpath=.//tr/td[contains(text(),'${cellInnerText}')]`);
        const row = cell.locator('xpath=..');
        return row;
    }
    async getGridColumnIndex(table: Locator, columnName: string): Promise<number> {
        // 1. SAFETY CHECK: If table is undefined, throw a clear error
        if (!table) {
            throw new Error(`getGridColumnIndex received an undefined table locator for column: "${columnName}"`);
        }

        const searchName = String(columnName).toLowerCase().trim();
        // Specific selector for your Infragistics grid headers
        const headerCells = table.locator("table tr.Header th, table tr[class*='Header'] th, [id*='columnheader'], .igg_HeaderCaption");

        await headerCells.first().waitFor({ state: 'attached', timeout: 10000 });
        const count = await headerCells.count();

        for (let i = 0; i < count; i++) {
            const text = (await headerCells.nth(i).innerText()).trim();
            if (text.toLowerCase().includes(searchName)) {
                return i;
            }
        }
        throw new Error(`Column '${columnName}' not found. Available: ${await headerCells.allInnerTexts()}`);
    }

    async getAllColumnValuesAcrossPages(
        page: Page,
        gridLocator: Locator,
        headerName: string,
        nextButton: Locator,
        previousButton?: Locator
    ): Promise<string[]> {
        const allColumnValues: string[] = [];

        if (previousButton) {
            while (!(await this.isPagerDisabled(previousButton))) {
                const currentPageValues = await this.extractSinglePageColumn(gridLocator, headerName);
                await previousButton.click({ force: true, noWaitAfter: true });
                await expect.poll(
                    () => this.extractSinglePageColumn(gridLocator, headerName)
                ).not.toEqual(currentPageValues);
            }
        }

        while (true) {
            // 1. Extract values from the target grid
            const currentPageValues = await this.extractSinglePageColumn(gridLocator, headerName);
            allColumnValues.push(...currentPageValues);

            if (await this.isPagerDisabled(nextButton)) {
                break;
            }

            // Click the pager and wait for its postback to replace the grid rows.
            await nextButton.click({ force: true, noWaitAfter: true });
            await expect.poll(
                () => this.extractSinglePageColumn(gridLocator, headerName)
            ).not.toEqual(currentPageValues);
        }

        return allColumnValues;
    }

    private async isPagerDisabled(button: Locator): Promise<boolean> {
        if (await button.count() === 0 || !(await button.isVisible())) {
            return true;
        }

        const isCustomDisabled = await button.evaluate((el) => {
            if (el.classList.contains('aspNetDisabled') || el.classList.contains('disabled')) return true;
            if (el.tagName === 'SPAN') {
                const action = el.closest('a, button, [role="button"]');
                if (!action || action.classList.contains('aspNetDisabled') || action.classList.contains('disabled')) {
                    return true;
                }
                if (action.tagName === 'A' && !action.hasAttribute('href')) return true;
            }
            if (el.tagName === 'A' && !el.hasAttribute('href')) return true;
            return false;
        });

        return isCustomDisabled || await button.isDisabled({ timeout: 1000 });
    }

    /**
     * Helper method: Extracts values for a specific column scoped to a single grid.
     */
    async extractSinglePageColumn(gridLocator: Locator, headerName: string): Promise<string[]> {
        // Search for the header INSIDE the specific grid (not the whole page)
        const headerLocator = gridLocator.getByRole('columnheader', { name: headerName, exact: true })
            .or(gridLocator.locator(`th[key="${headerName}"]`))
            .first();

        const headerId = await headerLocator.getAttribute('id');
        if (!headerId) throw new Error(`Could not find header matching "${headerName}" in the targeted grid.`);

        // Search for cells INSIDE the specific grid
        const cellsLocator = gridLocator.locator(`td[aria-describedby="${headerId}"]`);

        return await cellsLocator.evaluateAll((cells) => {
            return cells.map(cell => {
                let text = cell.innerText?.trim();
                if (!text) text = cell.getAttribute('val') || '';
                return text.trim();
            });
        });
    }



    //Try for new methods
    async getTable(page: Page, table: string | Locator): Promise<Locator> {
        return typeof table === 'string' ? page.locator(table) : table;
    }
    async getColumnHeader(page: Page, table: string | Locator, columnName: string): Promise<Locator> {
        // 1. Uses getTable
        const grid = await this.getTable(page, table);
        // 2. Finds header cell using XPath relative to the table
        return grid.locator(`xpath=.//th[normalize-space()='${columnName}'] | .//tr[1]//td[normalize-space()='${columnName}']`);
    }

    async getColumnValues(page: Page, table: string | Locator, columnName: string): Promise<string[]> {
        const grid = await this.getTable(page, table);

        const header = grid.getByRole('columnheader', { name: columnName, exact: true })
            .or(grid.locator(`th[key="${columnName}"]`))
            .first();
        if (await header.count() > 0) {
            return this.extractSinglePageColumn(grid, columnName);
        }

        // 1. Get all header texts
        const allHeaders = await grid.locator('xpath=.//th | .//tr[1]//td').allInnerTexts();

        // 2. Find the 1-based index
        const columnIndex = allHeaders.findIndex(h => h.trim() === columnName.trim()) + 1;

        if (columnIndex === 0) {
            throw new Error(`Column "${columnName}" not found in headers.`);
        }

        // 3. Get all cell values matching that column index
        const cells = grid.locator(`xpath=.//tr//td[${columnIndex}]`);
        const values = await cells.allInnerTexts();

        return values.map(val => val.trim());
    }
}
