import { test, expect } from '../../src/fixtures/test-fixtures';

test.describe('Login Tests', () => {
  test.beforeEach(async ({ page, appConfig }) => {
    await page.goto(appConfig.baseUrl);
  });

  test('Successful Login', async ({ loginPage, homePage, appConfig }) => {
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
    expect(await homePage.page.locator('iframe[src*="frmMyHome"]').isVisible()).toBeTruthy();
  });

  test('Login with invalid credentials shows error', async ({ loginPage }) => {
    await loginPage.login('InvalidUser', 'InvalidPass', 'InvalidDB');
    const errorMsg = await loginPage.errorMessage.innerText();
    expect(errorMsg).not.toBe('');
  });

  test('Reset button clears fields', async ({ loginPage, appConfig }) => {
    await loginPage.usernameInput.fill(appConfig.username);
    await loginPage.passwordInput.fill(appConfig.password);
    await loginPage.clickResetButton();
    expect(await loginPage.usernameInput.inputValue()).toBe('');
  });
});
