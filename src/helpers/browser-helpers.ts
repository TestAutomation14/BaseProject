import { Page, BrowserContext, FrameLocator, expect } from '@playwright/test';

/**
 * Browser and window management helpers (migrated from Browser.java + ObjectIdentification.WindowHandle)
 */
export class BrowserHelpers {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  getLatestPage(): Page {
    const allPages = this.page.context().pages();
    if (allPages.length === 0) throw new Error("No pages found in context.");
    return allPages[allPages.length - 1];
  }
  getLatestFrame(frameSrcName: string): FrameLocator {
    const latestPage = this.getLatestPage();
    return latestPage.frameLocator(`iframe[src*="${frameSrcName}"]`);
  }
  // ─── Navigation ────────────────────────────────────────────────────────────

  async navigateToLoginScreen(url: string) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async navigateToUrl(url: string) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async refreshPage() {
    await this.page.reload();
  }

  // ─── Tab/Window Management (WindowHandle) ──────────────────────────────────

  async openNewTab(url: string): Promise<Page> {
    const context = this.page.context();
    const newPage = await context.newPage();
    await newPage.goto(url, { waitUntil: 'domcontentloaded' });
    return newPage;
  }

  async switchToPageByTitle(titleSubstring: string): Promise<Page | null> {
    const context = this.page.context();

    // Retry loop to handle transient evaluate failures during ASP.NET postbacks
    for (let attempt = 0; attempt < 3; attempt++) {
      let pages = context.pages();
      for (const p of pages) {
        try {
          const title = await p.title();
          if (title.includes(titleSubstring)) {
            await p.bringToFront();
            (this.page as any).__lastSwitchedPopup = p;
            return p;
          }
        } catch {
          // evaluate failed - try URL-based fallback for this page
          const url = p.url().toLowerCase();
          const search = titleSubstring.toLowerCase().replace(/\s+/g, '');
          if (url.includes(search) || url.includes('frm' + search)) {
            await p.bringToFront();
            (this.page as any).__lastSwitchedPopup = p;
            return p;
          }
        }
      }
      // Wait before retry to let pending postbacks complete
      if (attempt < 2) {
        await new Promise(r => setTimeout(r, 2000));
      }
    }
    // If not found, wait for a new page to appear
    try {
      const newPage = await context.waitForEvent('page', { timeout: 10000 });
      await newPage.waitForLoadState('load');
      await newPage.bringToFront();
      (this.page as any).__lastSwitchedPopup = newPage;
      return newPage;
    } catch {
      return null;
    }
  }

  async switchToPageByUrl(urlSubstring: string): Promise<Page | null> {
    const context = this.page.context();
    // First check existing pages
    let pages = context.pages();
    for (const p of pages) {
      if (p.url().includes(urlSubstring)) {
        await p.bringToFront();
        await this.disableOverlay(p);
        (this.page as any).__lastSwitchedPopup = p;
        return p;
      }
    }
    // If not found, wait for a new page to appear
    try {
      const newPage = await context.waitForEvent('page', { timeout: 10000 });
      await newPage.waitForLoadState('load');
      await newPage.bringToFront();
      await this.disableOverlay(newPage);
      (this.page as any).__lastSwitchedPopup = newPage;
      return newPage;
    } catch {
      return null;
    }
  }

  private async disableOverlay(p: Page): Promise<void> {
    // No-op: overlay handled by context-level route interception
  }

  async switchToMainWindow(): Promise<Page | null> {
    return this.switchToPageByTitle('Public Safety Solution');
  }

  async windowExistsByTitle(expectedTitle: string, maxAttempts: number = 10): Promise<boolean> {
    // 1. Both must be trimmed and lowercased
    const cleanExpected = expectedTitle.trim().toLowerCase();

    if (!cleanExpected) {
      throw new Error("Expected title argument cannot be empty!");
    }

    // 2. Retry loop
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      const allPages = this.page.context().pages();

      for (const p of allPages) {
        try {
          const actualTitle = await p.title();

          // Compare lowercase with lowercase
          if (actualTitle.toLowerCase().includes(cleanExpected)) {
            console.log(`Verified: Window containing "${expectedTitle}" is open. (Full Title: "${actualTitle}")`);
            return true; // Return TRUE instead of empty return
          }
        } catch (error) {
          // Page is still initializing
        }
      }

      // Wait 500ms before retrying
      await this.page.waitForTimeout(500);
    }

    // 3. If not found after retries
    const openTitles = await Promise.all(
      this.page.context().pages().map(async (p) => {
        try { return await p.title(); } catch { return 'unknown'; }
      })
    );

    console.error(`FAILED: Window containing "${expectedTitle}" was NOT found. Open windows: [${openTitles.join(', ')}]`);
    return false; // Return FALSE if not found
  }

  async windowExistsByUrl(urlSubstring: string): Promise<boolean> {
    const context = this.page.context();
    const pages = context.pages();
    for (const p of pages) {
      if (p.url().includes(urlSubstring)) return true;
    }
    return false;
  }

  async waitForNewPage(action: () => Promise<void>): Promise<Page> {
    const context = this.page.context();
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      action(),
    ]);
    await newPage.waitForLoadState('domcontentloaded');
    return newPage;
  }

  async closeAllPagesExceptMain() {
    const context = this.page.context();
    const pages = context.pages();
    const mainPage = await this.switchToMainWindow();
    for (const p of pages) {
      if (p !== mainPage && p !== this.page) {
        await p.close();
      }
    }
  }

  async closeAllPopupScreens() {
    const context = this.page.context();
    const pages = context.pages();
    for (const p of pages) {
      const title = await p.title();
      if (!title.includes('Public Safety Solution')) {
        await p.close();
      }
    }
  }

  async getPageCount(): Promise<number> {
    return this.page.context().pages().length;
  }

  async closeCurrentPage() {
    await this.page.close();
  }

  // ─── Frame Operations ──────────────────────────────────────────────────────

  switchToFrame(frameSrcName: string): FrameLocator {
    return this.page.frameLocator(`iframe[src*="${frameSrcName}"]`);
  }

  switchToFrameById(frameId: string): FrameLocator {
    return this.page.frameLocator(`iframe[id*="${frameId}"]`);
  }

  async waitForFrame(frameSrcName: string): Promise<void> {
    await this.page.locator(`iframe[src*="${frameSrcName}"]`).contentFrame().locator('body').waitFor();
  }

  async checkFrameExist(frameSrcName: string): Promise<boolean> {
    return (await this.page.locator(`iframe[src*="${frameSrcName}"]`).count()) > 0;
  }

  switchToMainWindowScreenTab(frameSrcName: string): FrameLocator {
    return this.page.frameLocator(`iframe[src*="${frameSrcName}"]`);
  }

  // ─── Dialog/Alert Handling ─────────────────────────────────────────────────

  async handleDialogAccept() {
    this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });
  }

  async handleDialogDismiss() {
    this.page.once('dialog', async (dialog) => {
      await dialog.dismiss();
    });
  }

  async handleDialogWithText(inputText: string) {
    this.page.once('dialog', async (dialog) => {
      await dialog.accept(inputText);
    });
  }

  // ─── Window State ──────────────────────────────────────────────────────────

  async maximizeWindow() {
    await this.page.evaluate(() => {
      window.moveTo(0, 0);
      window.resizeTo(screen.availWidth, screen.availHeight);
    });
  }

  async setFocus() {
    await this.page.evaluate(() => window.focus());
  }

  async waitForNewWindow(): Promise<Page> {
    // Listens for popups on the active page context
    const popup = await this.page.waitForEvent('popup');
    await popup.waitForLoadState('domcontentloaded');
    return popup;
  }
}

/**
 * Creates a proxy around the Page object that routes .locator() calls
 * through a content iframe. This allows page objects that use page.locator(...)
 * to work with elements inside iframes without modification.
 */
export function createFrameProxy(page: Page, iframeSrc: string): Page {
  const frameLocator = page.frameLocator(`iframe[src*="${iframeSrc}"]`);
  return new Proxy(page, {
    get(target, prop) {
      if (prop === 'locator') {
        return (selector: string, options?: any) => frameLocator.locator(selector, options);
      }
      return (target as any)[prop];
    }
  }) as Page;
}

/**
 * Creates a proxy around the Page object that lazily resolves locator calls
 * against a popup window identified by URL substring. This allows page objects
 * that use page.locator(...) to work with elements in popup windows.
 */
export function createPopupProxy(page: Page, urlSubstring: string): Page {
  function getPopupPage(): Page {
    const pages = page.context().pages();
    // Try URL match first
    const byUrl = pages.find(p => p !== page && p.url().includes(urlSubstring));
    if (byUrl) return byUrl;
    // Try stored active popup from switchToPageByTitle/Url
    const stored = (page as any).__lastSwitchedPopup as Page | undefined;
    if (stored && pages.includes(stored) && stored !== page) return stored;
    // Fallback: return the most recently opened page that isn't the main page
    const otherPages = pages.filter(p => p !== page);
    if (otherPages.length > 0) return otherPages[otherPages.length - 1];
    return page;
  }

  function createLazyLocator(selector: string, options?: any): any {
    return new Proxy({} as any, {
      get(_, prop) {
        const realLocator = getPopupPage().locator(selector, options);
        const val = (realLocator as any)[prop];
        if (typeof val === 'function') {
          // Force bypass overlay for all interactive actions
          if (prop === 'click' || prop === 'check' || prop === 'uncheck') {
            return async (actionOptions?: any) => {
              return val.call(realLocator, { force: true, ...actionOptions });
            };
          }
          if (prop === 'fill' || prop === 'press' || prop === 'type') {
            return async (...args: any[]) => {
              return val.apply(realLocator, args);
            };
          }
          if (prop === 'selectOption') {
            return async (...args: any[]) => {
              // For ASP.NET dropdowns that might be temporarily disabled during AJAX calls
              // Wait a bit for any async operations to complete
              await realLocator.waitFor({ state: 'attached', timeout: 5000 }).catch(() => { });
              await getPopupPage().waitForTimeout(500);
              return val.apply(realLocator, args);
            };
          }
          if (prop === 'focus') {
            return async () => {
              // Use dispatchEvent for focus to bypass overlay
              await realLocator.dispatchEvent('focus');
            };
          }
          return val.bind(realLocator);
        }
        return val;
      }
    });
  }

  return new Proxy(page, {
    get(target, prop) {
      if (prop === 'locator') {
        return (selector: string, options?: any) => createLazyLocator(selector, options);
      }
      const popupPage = getPopupPage();
      const val = (popupPage as any)[prop];
      if (typeof val === 'function') {
        return val.bind(popupPage);
      }
      return val;
    }
  }) as Page;
}
/**
 * GLOBAL UTILITY: Wraps a Page Object class in a Proxy.
 * This version includes the fix for the TypeScript Proxy error.
 */
export function wrapWithAutoContext<T extends object>(page: Page, ClassRef: new (p: Page) => T): T {
  // We use 'any' as the target to satisfy the compiler's strictness about the Proxy target
  return new Proxy({} as any, {
    get: (target, prop: string | symbol) => {
      // 1. Get all open windows
      const allPages = page.context().pages();

      // 2. Pick the latest window that is still open
      const latestPage = allPages.filter(p => !p.isClosed()).pop() || page;

      // 3. Re-instantiate the class with the LATEST page context
      const instance = new ClassRef(latestPage) as any;

      // 4. Extract the value
      const value = instance[prop];

      // 5. If it's a function (method), bind it so 'this' inside the class works correctly
      return typeof value === 'function' ? value.bind(instance) : value;
    }
  }) as T; // Cast the final result back to T
}