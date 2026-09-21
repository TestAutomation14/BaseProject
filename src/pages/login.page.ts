import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  // Login Screen Locators
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly databaseDropdown: Locator;
  readonly loginButton: Locator;
  readonly resetButton: Locator;
  readonly errorMessage: Locator;
  readonly capsLockDiv: Locator;
  readonly capsStatusMessage: Locator;
  readonly forgotPasswordLink: Locator;
  readonly forgotPasswordClickHereLink: Locator;
  readonly forgotPasswordInvisibleElement: Locator;
  readonly cjisCheckbox: Locator;
  readonly cjisOkButton: Locator;
  readonly cjisPopupOkButton: Locator;
  readonly cjisHeaderText: Locator;
  readonly tempPasswordInput: Locator;
  readonly newPasswordInput: Locator;
  readonly reenterPasswordInput: Locator;
  readonly newPasswordSaveButton: Locator;
  readonly createNewPasswordTitle: Locator;
  readonly loginFailedPopup: Locator;
  readonly tryAgainButton: Locator;
  readonly loginAuthenticationPopUp: Locator;

  // What's New Panel Locators
  readonly whatsNewPanelAccordion: Locator;
  readonly copyRightsFooter1: Locator;
  readonly copyRightsFooter2: Locator;
  readonly whatsNewHeader: Locator;
  readonly rmsTitleHeader: Locator;
  readonly rmsRlsVersionHeader: Locator;
  readonly whatsNewContent: Locator;
  readonly hideWhatsNewCheckbox: Locator;
  readonly showWhatsNewCheckbox: Locator;
  readonly whatsNewViewRMSFeaturesLinkText: Locator;
  readonly viewRMSFeaturesLinkText: Locator;

  // Navigation Locators
  readonly admissionBookingModuleArrow: Locator;
  readonly supervisorStatusScreenMenu: Locator;
  readonly supervisorStatusScreenMenu1: Locator;

  constructor(page: Page) {
    this.page = page;

    // Login Screen
    this.usernameInput = page.locator('#usrLogin_txtUserName');
    this.passwordInput = page.locator('#usrLogin_txtPassword');
    this.databaseDropdown = page.locator('#usrLogin_lstProductDB');
    this.loginButton = page.locator('#usrLogin_cmdLogin');
    this.resetButton = page.locator('#usrLogin_btnReset');
    this.errorMessage = page.locator('#lblErrorMessage');
    this.capsLockDiv = page.locator('#CapsDiv');
    this.capsStatusMessage = page.locator("//div[@id='CapsDiv']//span");
    this.forgotPasswordLink = page.locator('#usrLogin_lnkForgotPwd');
    this.forgotPasswordClickHereLink = page.locator("//a[text()='Click here...']");
    this.forgotPasswordInvisibleElement = page.locator('#usrLogin_upForgotPwd');
    this.cjisCheckbox = page.locator('#usrLogin_chkCJISPolicy');
    this.cjisOkButton = page.locator('#usrLogin_btnCIJSPolicy');
    this.cjisPopupOkButton = page.locator('#usrLogin_cmdPopupMsg');
    this.cjisHeaderText = page.locator('#lblErrorTitleOthers');
    this.tempPasswordInput = page.locator('#usrLogin_txtTempPassword');
    this.newPasswordInput = page.locator('#usrLogin_txtNewPassword');
    this.reenterPasswordInput = page.locator('#usrLogin_txtNewPassword1');
    this.newPasswordSaveButton = page.locator('#usrLogin_cmdTempPwdOK');
    this.createNewPasswordTitle = page.locator("//div[@class='cont-data for-password new-password']//h3");
    this.loginFailedPopup = page.locator("//div[@id='divPopupMsg']//span");
    this.tryAgainButton = page.locator('#usrLogin_cmdPopupMsg');
    this.loginAuthenticationPopUp = page.locator('#usrLogin_lblPopupMsg');

    // What's New Panel
    this.whatsNewPanelAccordion = page.locator('#usrWhatsNew_accordion');
    this.copyRightsFooter1 = page.locator("//p[@class='footertext'][1]");
    this.copyRightsFooter2 = page.locator("//p[@class='footertext'][2]");
    this.whatsNewHeader = page.locator('#usrwhatsnewheader');
    this.rmsTitleHeader = page.locator('#usrLogin_headRMSTitle');
    this.rmsRlsVersionHeader = page.locator('#usrLogin_headRMSRlsVersion');
    this.whatsNewContent = page.locator('#usrwhatsnewcontent');
    this.hideWhatsNewCheckbox = page.locator('#hideWhatsNewCheckbox');
    this.showWhatsNewCheckbox = page.locator('#showWhatsNewCheckbox');
    this.whatsNewViewRMSFeaturesLinkText = page.locator("//table[@id='tblview']//a[text()='View RMS features']");
    this.viewRMSFeaturesLinkText = page.locator("//td[@id='lblRMSfeatures']//a[text()='View RMS features']");

    // Navigation
    this.admissionBookingModuleArrow = page.locator("//span[text()=' Admission / Booking']//parent::div//span[@class='rtPlus']");
    this.supervisorStatusScreenMenu = page.locator("//span[contains(text(), 'Supervisor Status')]");
    this.supervisorStatusScreenMenu1 = page.locator("//div[@class= 'rtBot rtSelected']//span[contains(text(), 'Supervisor Status')]");
  }

  // Alias to support Java-style `loginPage.loginScreen.Logon()` pattern
  get loginScreen(): LoginPage {
    return this;
  }

  async Logon(): Promise<void> {
    await this.page.goto(process.env.BASE_URL || '/');
    await this.loginWithDefaults();
  }

  // ─── Login Actions ─────────────────────────────────────────────────────────

  async login(username: string, password: string, database: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    const databaseOption = this.databaseDropdown.locator('option').filter({ hasText: database }).first();
    if (await databaseOption.count()) {
      await this.databaseDropdown.selectOption({ label: database });
    } else {
      const fallbackValue = await this.databaseDropdown.locator('option').evaluateAll((options) => {
        const option = options.find((item) => (item as HTMLOptionElement).value);
        return option ? (option as HTMLOptionElement).value : '';
      });
      if (!fallbackValue) {
        throw new Error(`No selectable database options are available for "${database}".`);
      }
      await this.databaseDropdown.selectOption(fallbackValue);
    }
    await this.loginButton.click();
    await this.page.waitForFunction(() => {
      const homeFrame = document.querySelector('iframe[src*="frmMyHome"]');
      const errorMessage = document.querySelector('#lblErrorMessage');
      return Boolean(homeFrame) || Boolean(errorMessage?.textContent?.trim());
    }, undefined, { timeout: 60000 });
  }

  async loginWithDefaults(): Promise<void> {
    const username = process.env.USERNAME || '';
    const password = process.env.PASSWORD || '';
    const database = process.env.DATABASE || '';
    await this.login(username, password, database);
  }

  async smokeLogin(): Promise<void> {
    const username = process.env.SMOKE_USERNAME || '';
    const password = process.env.SMOKE_PASSWORD || '';
    const database = process.env.SMOKE_DATABASE || '';
    await this.login(username, password, database);
  }

  async logonUsingTestContext(username: string, password: string, database: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.databaseDropdown.selectOption({ label: database });
    await this.loginButton.click();
    await this.page.waitForSelector('iframe[src*="frmMyHome"]', { timeout: 60000 });
  }

  async logonUsingTestContextOtherDB(username: string, password: string, database: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.databaseDropdown.selectOption({ label: database });
    await this.loginButton.click();
    try {
      await this.cjisCheckbox.click({ timeout: 5000 });
      await this.cjisPopupOkButton.click();
    } catch {
      // CJIS may not appear
    }
    await this.page.waitForSelector('iframe[src*="frmMyHome"]', { timeout: 60000 });
  }

  async logonUsingTestContextOtherDBForSmoke(): Promise<void> {
    const username = process.env.SMOKE_USERNAME || '';
    const password = process.env.SMOKE_PASSWORD || '';
    const database = process.env.SMOKE_DATABASE || '';
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.databaseDropdown.selectOption({ label: database });
    await this.loginButton.click();
    try {
      await this.cjisCheckbox.click({ timeout: 5000 });
      await this.cjisPopupOkButton.click();
    } catch {
      // CJIS may not appear
    }
    await this.page.waitForSelector('iframe[src*="frmMyHome"]', { timeout: 60000 });
  }

  async loginToFireInNewTab(username: string, password: string, database: string, newUrl: string): Promise<Page> {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.evaluate(() => window.open()),
    ]);
    await newPage.goto(newUrl);
    await newPage.locator('#usrLogin_txtUserName').fill(username);
    await newPage.locator('#usrLogin_txtPassword').fill(password);
    await newPage.locator('#usrLogin_lstProductDB').selectOption({ label: database });
    await newPage.locator('#usrLogin_cmdLogin').click();
    return newPage;
  }

  async logonForFire(): Promise<void> {
    const username = process.env.USERNAME_FIRE || '';
    const password = process.env.PASSWORD || '';
    const database = process.env.DATABASE_FIRE || '';
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.databaseDropdown.selectOption({ label: database });
    await this.loginButton.click();
    await this.page.waitForSelector('iframe[src*="frmMyHome"]', { timeout: 60000 });
  }

  async logOnForNewPFByCreateNewPassword(tempPassword: string, username: string, newPassword: string, database: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(tempPassword);
    await this.databaseDropdown.selectOption({ label: database });
    await this.loginButton.click();
    await this.tempPasswordInput.fill(tempPassword);
    await this.newPasswordInput.fill(newPassword);
    await this.reenterPasswordInput.fill(newPassword);
    await this.newPasswordSaveButton.click();
    await this.page.waitForSelector('iframe[src*="frmMyHome"]', { timeout: 60000 });
  }

  async logOnToPFWithTempPasswordForTemporaryExpirePopUp(trimmedPassword: string, username: string, database: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(trimmedPassword);
    await this.databaseDropdown.selectOption({ label: database });
    await this.loginButton.click();
  }

  async logonForOtherPF(username: string, password: string, database: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.databaseDropdown.selectOption({ label: database });
    await this.loginButton.click();
    await this.page.waitForSelector('iframe[src*="frmMyHome"]', { timeout: 60000 });
  }

  async logonForOtherPFAndOtherDB(username: string, password: string, database: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.databaseDropdown.selectOption({ label: database });
    await this.loginButton.click();
    try {
      await this.cjisCheckbox.click({ timeout: 5000 });
      await this.cjisPopupOkButton.click();
    } catch {
      // CJIS may not appear
    }
    await this.page.waitForSelector('iframe[src*="frmMyHome"]', { timeout: 60000 });
  }

  // ─── Field Actions ─────────────────────────────────────────────────────────

  async enterAtUserName(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  async enterAtPassword(password: string): Promise<void> {
    await this.passwordInput.click();
    await this.passwordInput.fill(password);
  }

  async enterAtEmailID(emailId: string): Promise<void> {
    await this.usernameInput.click();
    await this.usernameInput.fill(emailId);
  }

  async selectAtDatabase(database: string): Promise<void> {
    await this.databaseDropdown.selectOption({ label: database });
  }

  async clearUserName(): Promise<void> {
    await this.usernameInput.clear();
  }

  async clearPassword(): Promise<void> {
    await this.passwordInput.clear();
  }

  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
    await this.page.waitForTimeout(1000);
  }

  async clickResetButton(): Promise<void> {
    await this.resetButton.click();
  }

  async clickForgotPasswordClickHere(): Promise<void> {
    await this.forgotPasswordClickHereLink.click();
  }

  async clickCJISPolicyCheckBox(): Promise<void> {
    await this.cjisCheckbox.click();
  }

  async clickCJISPolicyOK(): Promise<void> {
    await this.cjisOkButton.click();
    await this.page.waitForLoadState('load');
  }

  async clickCJISPolicyPopupOK(): Promise<void> {
    await this.cjisPopupOkButton.click();
    await this.page.waitForLoadState('load');
  }

  async clickTryAgainButton(): Promise<void> {
    await this.tryAgainButton.click();
  }

  // ─── Verify Methods ────────────────────────────────────────────────────────

  async verifyAuthenticationFailedMessage(): Promise<void> {
    const text = await this.errorMessage.innerText();
    expect(text).toEqual('Authentication failed - wrong username or password.');
  }

  async verifyCapsLockMessage(): Promise<void> {
    await this.page.waitForTimeout(1000);
    const text = await this.capsStatusMessage.innerText();
    expect(text).toEqual('Caps Lock is on');
  }

  async verifyUserNamePasswordMessage(): Promise<void> {
    const text = await this.errorMessage.innerText();
    expect(text).toEqual('Please enter your User Name and Password');
  }

  async verifyPasswordMessage(): Promise<void> {
    const text = await this.errorMessage.innerText();
    expect(text).toEqual('Please enter your Password');
  }

  async verifyUserNameMessage(): Promise<void> {
    const text = await this.errorMessage.innerText();
    expect(text).toEqual('Please enter your User Name');
  }

  async verifyUserNameFieldEmpty(): Promise<void> {
    const value = await this.usernameInput.getAttribute('value');
    expect(value).not.toEqual('');
  }

  async verifyPasswordFieldEmpty(): Promise<void> {
    const value = await this.passwordInput.getAttribute('value');
    expect(value).not.toEqual('');
  }

  async verifyForgotPasswordDisabled(): Promise<void> {
    await this.page.waitForLoadState('load');
    const display = await this.forgotPasswordInvisibleElement.evaluate(el => getComputedStyle(el).display);
    expect(display).toEqual('block');
  }

  async verifyForgotPasswordEnabled(): Promise<void> {
    await this.page.waitForLoadState('load');
    expect(await this.forgotPasswordLink.isEnabled()).toBeTruthy();
    expect(await this.forgotPasswordLink.isVisible()).toBeTruthy();
    const text = await this.forgotPasswordLink.innerText();
    expect(text).toEqual('Forgot Password?');
  }

  async verifyLoginFailedPopup(): Promise<void> {
    const text = await this.loginFailedPopup.innerText();
    expect(text).toEqual('Invalid User Name or Password');
    await this.tryAgainButton.click();
  }

  async verifyLoginFailedPopupForEmailLogin(): Promise<void> {
    const text = await this.loginFailedPopup.innerText();
    expect(text).toEqual('Invalid User Name (User Name should be a Email ID)');
    await this.tryAgainButton.click();
  }

  async verifyOneMoreAuthenticationFailPopUp(): Promise<void> {
    const message = await this.loginAuthenticationPopUp.innerText();
    expect(message).toEqual('Warning ï¿½ One more authentication failure will lock your access to this application');
  }

  async verifyAccountLockerPopUpMessage(): Promise<void> {
    const message = await this.loginAuthenticationPopUp.innerText();
    expect(message).toEqual('Account Locked, Please Contact Administrator');
  }

  async verifyTemporaryPasswordExpiredAcknowledgePopUp(): Promise<void> {
    const message = await this.loginAuthenticationPopUp.innerText();
    expect(message).toEqual('Temporary Password Expired, Contact Administrator');
    await this.tryAgainButton.click();
  }

  async verifyCJISSecurityPolicySystemUseNotificationAck(): Promise<void> {
    const text = await this.cjisHeaderText.innerText();
    expect(text).toEqual('CJIS Security Policy System Use Notification');
  }

  // ─── Reset Button / Copyright / RMS Title ──────────────────────────────────

  async verifyResetButtonIsDisplayed(): Promise<void> {
    expect(await this.resetButton.isVisible()).toBeTruthy();
  }

  async verifyCopyRightsTextIsDisplayed(): Promise<void> {
    expect(await this.copyRightsFooter1.isVisible()).toBeTruthy();
    expect(await this.copyRightsFooter2.isVisible()).toBeTruthy();
  }

  async verifyAtCopyRightsText(copyRights1: string, copyRights2: string): Promise<void> {
    const text1 = await this.copyRightsFooter1.innerText();
    const text2 = await this.copyRightsFooter2.innerText();
    expect(text1).toContain(copyRights1);
    expect(text2).toContain(copyRights2);
  }

  async verifyRMSTitleAndRlsVersionIsDisplayed(): Promise<void> {
    expect(await this.rmsTitleHeader.isVisible()).toBeTruthy();
    expect(await this.rmsRlsVersionHeader.isVisible()).toBeTruthy();
  }

  async verifyAtRMSTitleAndRlsVersionText(rmsTitle: string, rmsRlsVersion: string): Promise<void> {
    const title = await this.rmsTitleHeader.innerText();
    const version = await this.rmsRlsVersionHeader.innerText();
    expect(title).toEqual(rmsTitle);
    expect(version).toEqual(rmsRlsVersion);
  }

  // ─── What's New Panel ──────────────────────────────────────────────────────

  async verifyWhatsNewHeaderIsDisplayed(): Promise<void> {
    expect(await this.whatsNewHeader.isVisible()).toBeTruthy();
  }

  async verifyAtWhatsNewHeaderText(headerText1: string, headerText2: string): Promise<void> {
    const text = await this.whatsNewHeader.innerText();
    expect(text).toEqual(`${headerText1}\n${headerText2}`);
  }

  async verifyAtWhatsNewContentIsDisplayed(): Promise<void> {
    expect(await this.whatsNewContent.isVisible()).toBeTruthy();
  }

  async verifyAtWhatsNewContentText(content1: string, content2: string): Promise<void> {
    const text = await this.whatsNewContent.innerText();
    expect(text).toContain(content1);
    expect(text).toContain(content2);
  }

  async verifyHideWhatsNewCheckboxIsDisplayed(): Promise<void> {
    expect(await this.hideWhatsNewCheckbox.isVisible()).toBeTruthy();
  }

  async verifyShowWhatsNewCheckboxIsDisplayed(): Promise<void> {
    expect(await this.showWhatsNewCheckbox.isVisible()).toBeTruthy();
  }

  async clickHideWhatsNewCheckbox(): Promise<void> {
    await this.hideWhatsNewCheckbox.click();
  }

  async clickShowWhatsNewCheckbox(): Promise<void> {
    await this.showWhatsNewCheckbox.click();
  }

  async verifyWhatsNewFeaturesAreNotDisplayed(): Promise<void> {
    expect(await this.whatsNewPanelAccordion.isVisible()).toBeFalsy();
  }

  async verifyWhatsNewFeaturesAreDisplayed(): Promise<void> {
    expect(await this.whatsNewPanelAccordion.isVisible()).toBeTruthy();
  }

  async clickViewRMSFeaturesInWhatsNewFooter(): Promise<void> {
    await this.whatsNewViewRMSFeaturesLinkText.click();
  }

  async clickViewRMSFeatures(): Promise<void> {
    await this.viewRMSFeaturesLinkText.click();
  }

  async verifyViewRMSFeaturesLinkTextIsDisplayed(): Promise<void> {
    expect(await this.viewRMSFeaturesLinkText.isVisible()).toBeTruthy();
  }

  async verifyFeaturesWindowIsOpened(): Promise<void> {
    const pages = this.page.context().pages();
    const found = pages.some(p => p.url().includes('Law RMS') || p.url().includes('ProPhoenix'));
    expect(found).toBeTruthy();
  }

  async clickAtFeatureName(featureName: string): Promise<void> {
    const element = this.whatsNewPanelAccordion.locator(
      `.//span[contains(text(),'${featureName}')]`
    );
    await element.scrollIntoViewIfNeeded();
    await element.click();
    await this.page.waitForTimeout(1000);
  }

  async verifyAtFeatureDescription(featureName: string, expectedDescription: string): Promise<void> {
    const element = this.whatsNewPanelAccordion.locator(
      `.//span[contains(text(),'${featureName}')]`
    );
    const description = element.locator(
      ".//parent::div//following-sibling::div[@class='accordion-content']"
    );
    const text = await description.innerText();
    expect(text).toEqual(expectedDescription);
  }

  async verifyAtFeatureIconByFeatureName(featureName: string, expectedIconSrc: string): Promise<void> {
    const element = this.whatsNewPanelAccordion.locator(
      `.//span[contains(text(),'${featureName}')]`
    );
    const img = element.locator('.//preceding-sibling::img');
    const src = await img.getAttribute('src');
    expect(src).toContain(expectedIconSrc);
  }

  async verifyAtFeatureNameNotAvailable(featureName: string): Promise<void> {
    const elements = this.whatsNewPanelAccordion.locator('.//span');
    const allText = await elements.allInnerTexts();
    expect(allText).not.toContain(featureName);
  }

  async verifyAtFeatureNameIsAvailable(featureName: string): Promise<void> {
    const elements = this.whatsNewPanelAccordion.locator('.//span');
    const allText = await elements.allInnerTexts();
    expect(allText).toContain(featureName);
  }

  async clickPlayVideoIcon(featureName: string): Promise<void> {
    const element = this.whatsNewPanelAccordion.locator(
      `.//span[contains(text(),'${featureName}')]`
    );
    const playIcon = element.locator(
      ".//following-sibling::a//img[contains(@src,'circle-play-solid.png')]"
    );
    await playIcon.scrollIntoViewIfNeeded();
    await playIcon.click();
    await this.page.waitForTimeout(1000);
  }

  // ─── Admission / Supervisor Status ─────────────────────────────────────────

  async clickAdmissionBookingModuleArrow(): Promise<void> {
    await this.admissionBookingModuleArrow.click();
  }

  async verifyAtSupervisorStatusScreenMenu(expectedScreenName: string): Promise<void> {
    const text = await this.supervisorStatusScreenMenu.innerText();
    expect(text).toEqual(expectedScreenName);
  }

  async verifyAtSupervisorStatusScreenMenuColor(expectedColor: string): Promise<void> {
    const color = await this.supervisorStatusScreenMenu.evaluate(el => getComputedStyle(el).color);
    expect(color).toEqual(expectedColor);
  }

  async verifyAtSupervisorStatusScreenMenuCount(expectedCount: number): Promise<void> {
    const text = await this.supervisorStatusScreenMenu1.innerText();
    const digits = text.split(' ');
    const count = parseInt(digits[0], 10);
    expect(count).toEqual(expectedCount);
  }

  // ─── Forgot Password ──────────────────────────────────────────────────────

  async switchToForgotPasswordScreen(): Promise<void> {
    // Switch to the forgot password popup/window
    const pages = this.page.context().pages();
    const fpPage = pages.find(p => p.url().includes('frmForgetPassWord'));
    if (fpPage) {
      await fpPage.bringToFront();
    }
  }

  async changePassword(tempPassword: string, newPassword: string): Promise<void> {
    await this.tempPasswordInput.fill(tempPassword);
    await this.newPasswordInput.fill(newPassword);
    await this.reenterPasswordInput.fill(newPassword);
    await this.newPasswordSaveButton.click();
  }
}

export class ForgotPasswordPage {
  readonly page: Page;

  // Locators
  readonly usernameInput: Locator;
  readonly emailInput: Locator;
  readonly sendPasswordButton: Locator;
  readonly cancelButton: Locator;
  readonly closeButton: Locator;
  readonly messageText: Locator;
  readonly errorMessageText: Locator;
  readonly validateMessageText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#txtUserName');
    this.emailInput = page.locator('#txtEmail');
    this.sendPasswordButton = page.locator('#cmdSendPWD');
    this.cancelButton = page.locator('#cmdCancel');
    this.closeButton = page.locator('#btnClose');
    this.messageText = page.locator('#lblMessage');
    this.errorMessageText = page.locator('#lblErrorMsg');
    this.validateMessageText = page.locator('#lblValidateEmail');
  }

  async enterUserName(username: string): Promise<void> {
    await this.usernameInput.clear();
    await this.usernameInput.fill(username);
  }

  async enterAtEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async enterInvalidEmail(randomText: string): Promise<void> {
    await this.emailInput.fill(randomText);
    await this.emailInput.press('Tab');
  }

  async clickSendPasswordButton(): Promise<void> {
    await this.sendPasswordButton.click();
  }

  async clickCancelButton(): Promise<void> {
    await this.cancelButton.click();
    await this.page.waitForTimeout(1000);
  }

  async clickCloseButton(): Promise<void> {
    await this.closeButton.click();
    await this.page.waitForTimeout(1000);
  }

  async verifyInvalidUserNameEmailMessage(): Promise<void> {
    const text = await this.errorMessageText.innerText();
    expect(text).toEqual('Invalid User Name or Email');
  }

  async verifyValidEmailMessage(): Promise<void> {
    const text = await this.validateMessageText.innerText();
    expect(text).toEqual('Please Enter a Valid Email');
  }

  async verifyUserNameEmailMessage(): Promise<void> {
    const text = await this.messageText.innerText();
    expect(text).toEqual('Please Enter UserName or Email');
  }

  async verifyAtUserName(expectedUsername: string): Promise<void> {
    const value = await this.usernameInput.getAttribute('value');
    expect(value).toEqual(expectedUsername);
  }
}
