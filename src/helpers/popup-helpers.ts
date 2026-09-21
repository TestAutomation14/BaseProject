import { Page, Locator, expect } from '@playwright/test';

/**
 * Common popup/modal locators and actions (migrated from Popup.java)
 * Centralizes confirm, acknowledge, and name search popup interactions.
 */
export class PopupHelpers {
  readonly page: Page;
  readonly confirmYesButton: Locator;
  readonly confirmNoButton: Locator;
  readonly acknowledgeOkButton: Locator;
  readonly acknowledgeCloseButton: Locator;
  readonly modalBody: Locator;
  readonly nameSearchGrid: Locator;
  readonly selectNameButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.confirmYesButton = page.locator("//button[text()='Yes']");
    this.confirmNoButton = page.locator("//button[text()='No']");
    this.acknowledgeOkButton = page.locator("//button[text()='Ok']");
    this.acknowledgeCloseButton = page.locator("//button[text()='Close']");
    this.modalBody = page.locator("//div[@class='modal-body']");
    this.nameSearchGrid = page.locator('#grdNames');
    this.selectNameButton = page.locator("//span[@title='SelectName']");
  }

  async confirmYes(): Promise<void> {
    await this.confirmYesButton.click();
  }

  async confirmNo(): Promise<void> {
    await this.confirmNoButton.click();
  }

  async acknowledgeOk(): Promise<void> {
    await this.acknowledgeOkButton.click();
  }

  async acknowledgeWithMessage(expectedMessage: string): Promise<void> {
    await expect(this.modalBody).toContainText(expectedMessage);
    await this.acknowledgeOkButton.click();
  }

}
