import { expect, Locator, Page } from '@playwright/test';

/**
 * Custom assertion/verification helpers (migrated from verify.java)
 * 
 * NOTE: Prefer Playwright's built-in `expect()` assertions when possible.
 * These helpers wrap common patterns from the original framework.
 */
export class VerifyHelpers {

  // ─── Value Assertions ──────────────────────────────────────────────────────

  static expectedValueIsEqual(expected: string, actual: string, message?: string) {
    expect(actual, message).toBe(expected);
  }

  static expectedValueIsNotEqual(expected: string, actual: string, message?: string) {
    expect(actual, message).not.toBe(expected);
  }

  static expectedIntegerIsEqual(expected: number, actual: number, message?: string) {
    expect(actual, message).toBe(expected);
  }

  static expectedIntegerIsNotEqual(expected: number, actual: number, message?: string) {
    expect(actual, message).not.toBe(expected);
  }

  static expectedValueIsTrue(actual: boolean, message?: string) {
    expect(actual, message).toBeTruthy();
  }

  static expectedValueIsFalse(actual: boolean, message?: string) {
    expect(actual, message).toBeFalsy();
  }

  // ─── Element Assertions ────────────────────────────────────────────────────

  static async expectElementVisible(locator: Locator, message?: string) {
    await expect(locator, message).toBeVisible();
  }

  static async expectElementHidden(locator: Locator, message?: string) {
    await expect(locator, message).toBeHidden();
  }

  static async expectElementEnabled(locator: Locator, message?: string) {
    await expect(locator, message).toBeEnabled();
  }

  static async expectElementDisabled(locator: Locator, message?: string) {
    await expect(locator, message).toBeDisabled();
  }

  static async expectElementText(locator: Locator, expectedText: string, message?: string) {
    await expect(locator, message).toHaveText(expectedText);
  }

  static async expectElementContainsText(locator: Locator, expectedText: string, message?: string) {
    await expect(locator, message).toContainText(expectedText);
  }

  static async expectElementValue(locator: Locator, expectedValue: string, message?: string) {
    await expect(locator, message).toHaveValue(expectedValue);
  }

  static async expectElementChecked(locator: Locator, message?: string) {
    await expect(locator, message).toBeChecked();
  }

  static async expectElementNotChecked(locator: Locator, message?: string) {
    await expect(locator, message).not.toBeChecked();
  }

  // ─── Page Assertions ───────────────────────────────────────────────────────

  static async expectPageTitle(page: Page, expectedTitle: string | RegExp) {
    await expect(page).toHaveTitle(expectedTitle);
  }

  static async expectPageUrl(page: Page, expectedUrl: string | RegExp) {
    await expect(page).toHaveURL(expectedUrl);
  }

  // ─── Collection Assertions ─────────────────────────────────────────────────

  static expectArrayContains(arr: string[], value: string, message?: string) {
    expect(arr, message).toContain(value);
  }

  static expectArrayNotContains(arr: string[], value: string, message?: string) {
    expect(arr, message).not.toContain(value);
  }

  static expectArraysEqual(actual: string[], expected: string[], message?: string) {
    expect(actual, message).toEqual(expected);
  }

  static expectArrayLength(arr: any[], expectedLength: number, message?: string) {
    expect(arr, message).toHaveLength(expectedLength);
  }

  // ─── String Assertions ─────────────────────────────────────────────────────

  static expectStringContains(actual: string, expected: string, message?: string) {
    expect(actual, message).toContain(expected);
  }

  static expectStringNotContains(actual: string, expected: string, message?: string) {
    expect(actual, message).not.toContain(expected);
  }

  static expectStringNotEmpty(actual: string, message?: string) {
    expect(actual.length, message).toBeGreaterThan(0);
  }

  // ─── Grid/Table Assertions ─────────────────────────────────────────────────

  static async expectGridRowCount(tableLocator: Locator, expectedCount: number, message?: string) {
    const rows = tableLocator.locator("table tbody[class*='Item'] tr");
    await expect(rows, message).toHaveCount(expectedCount);
  }

  static async expectGridContainsText(tableLocator: Locator, text: string, message?: string) {
    await expect(tableLocator, message).toContainText(text);
  }

  static async expectGridNotContainsText(tableLocator: Locator, text: string, message?: string) {
    await expect(tableLocator, message).not.toContainText(text);
  }

  // ─── Date Range Verification ───────────────────────────────────────────────

  static verifyDatesBetweenRange(dates: string[], fromDate: string, toDate: string, format: string = 'MM/dd/yyyy') {
    const parseDate = (s: string) => {
      const parts = s.split('/');
      return new Date(parseInt(parts[2]), parseInt(parts[0]) - 1, parseInt(parts[1])).getTime();
    };

    const from = parseDate(fromDate);
    const to = parseDate(toDate);

    for (const dateStr of dates) {
      const d = parseDate(dateStr);
      expect(d >= from && d <= to, `Date ${dateStr} not between ${fromDate} and ${toDate}`).toBeTruthy();
    }
  }
}
