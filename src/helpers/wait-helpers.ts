import { Page, Locator } from '@playwright/test';

/**
 * Wait helpers (migrated from Playback.java wait methods)
 * 
 * NOTE: Playwright has built-in auto-waiting for most actions.
 * Use these helpers only for special cases where explicit waits are needed.
 */
export class WaitHelpers {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Wait for page to fully load (replaces Playback.pageLoadThreadWait)
   * Prefer Playwright auto-wait over this.
   */
  async waitForPageLoad() {
    await this.page.waitForLoadState('load');
  }

  /**
   * Wait for DOM content loaded
   */
  async waitForDomContentLoaded() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Wait for network to be idle (no pending requests)
   */
  async waitForNetworkIdle() {
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Wait for element to be clickable/actionable (replaces Playback.WaitForElementPresent)
   */
  async waitForElementClickable(locator: Locator, timeout: number = 30000) {
    await locator.waitFor({ state: 'visible', timeout });
    await locator.isEnabled();
  }

  /**
   * Wait for element to appear (replaces WebDriverWait + ExpectedConditions.visibilityOf)
   */
  async waitForElementVisible(locator: Locator, timeout: number = 30000) {
    await locator.waitFor({ state: 'visible', timeout });
  }

  /**
   * Wait for element to disappear
   */
  async waitForElementHidden(locator: Locator, timeout: number = 30000) {
    await locator.waitFor({ state: 'hidden', timeout });
  }

  /**
   * Wait for element to be detached from DOM
   */
  async waitForElementDetached(locator: Locator, timeout: number = 30000) {
    await locator.waitFor({ state: 'detached', timeout });
  }

  /**
   * Wait for a specific URL pattern to load
   */
  async waitForUrl(urlPattern: string | RegExp, timeout: number = 30000) {
    await this.page.waitForURL(urlPattern, { timeout });
  }

  /**
   * Wait for a frame to appear by src attribute
   */
  async waitForFrame(frameSrcName: string, timeout: number = 30000) {
    await this.page.waitForSelector(`iframe[src*="${frameSrcName}"]`, { timeout });
  }

  /**
   * Wait for a specific number of pages/windows (replaces window handle polling)
   */
  async waitForPageCount(expectedCount: number, timeout: number = 30000) {
    const startTime = Date.now();
    while (Date.now() - startTime < timeout) {
      if (this.page.context().pages().length >= expectedCount) return;
      await this.page.waitForTimeout(200);
    }
    throw new Error(`Expected ${expectedCount} pages but got ${this.page.context().pages().length}`);
  }

  /**
   * Wait for a response matching a URL pattern
   */
  async waitForResponse(urlPattern: string | RegExp, timeout: number = 30000) {
    return await this.page.waitForResponse(urlPattern, { timeout });
  }

  /**
   * Wait for navigation to complete
   */
  async waitForNavigation(timeout: number = 60000) {
    await this.page.waitForLoadState('load', { timeout });
  }

  /**
   * Explicit static wait - USE SPARINGLY (replaces Thread.sleep)
   * Prefer auto-waiting or explicit conditions instead.
   */
  async staticWait(ms: number) {
    await this.page.waitForTimeout(ms);
  }

  /**
   * Wait for grid/table to load (replaces Playback.gridLoadThreadWait)
   */
  async waitForGridLoad(tableLocator: Locator, timeout: number = 15000) {
    await tableLocator.locator('tbody tr').first().waitFor({ state: 'visible', timeout });
  }

  /**
   * Wait until element text contains expected value
   */
  async waitForTextContent(locator: Locator, expectedText: string, timeout: number = 30000) {
    const startTime = Date.now();
    while (Date.now() - startTime < timeout) {
      const text = await locator.textContent();
      if (text?.includes(expectedText)) return;
      await this.page.waitForTimeout(200);
    }
    throw new Error(`Text "${expectedText}" not found within ${timeout}ms`);
  }

  /**
   * Wait for element attribute to have specific value
   */
  async waitForAttribute(locator: Locator, attribute: string, expectedValue: string, timeout: number = 30000) {
    const startTime = Date.now();
    while (Date.now() - startTime < timeout) {
      const value = await locator.getAttribute(attribute);
      if (value === expectedValue) return;
      await this.page.waitForTimeout(200);
    }
    throw new Error(`Attribute "${attribute}" did not become "${expectedValue}" within ${timeout}ms`);
  }
}
