import { Page, Locator, expect } from '@playwright/test';

/**
 * LoaderPage - Navigation utilities (migrated from Loader.java + UIMapLoader.java)
 *
 * Handles left navigation panel, module/screen navigation, header controls,
 * screen tab management, and logout.
 */
export class LoaderPage {
  readonly page: Page;

  // Left Navigation
  readonly leftNavDiv: Locator;
  readonly searchMenuInput: Locator;

  // Header Controls
  readonly screenTabStrip: Locator;
  readonly sysParameterButton: Locator;
  readonly textMessageSearchButton: Locator;
  readonly textMessageTextbox: Locator;
  readonly jobStatusButton: Locator;
  readonly messageCountLabel: Locator;
  readonly loginUserNameText: Locator;
  readonly pnxLogoButton: Locator;
  readonly pnxLogoImageButton: Locator;
  readonly pnxLogoImageButtonFire: Locator;
  readonly logoutText: Locator;
  readonly logoutTextView: Locator;
  readonly mouseOverLogTextView: Locator;
  readonly formsButton: Locator;
  readonly formsLinkElements: Locator;
  readonly toolsButton: Locator;
  readonly toolsLink: Locator;
  readonly reportsLink: Locator;
  readonly linksButton: Locator;
  readonly helpIcon: Locator;
  readonly helpLogoutText: Locator;
  readonly aboutLink: Locator;
  readonly userProfileIcon: Locator;
  readonly ncicQueryIcon: Locator;
  readonly aiMugmatchIcon: Locator;
  readonly phoenixBOTCallCenterAgentIcon: Locator;
  readonly kgisQueryIcon: Locator;
  readonly aiTranscriptionIcon: Locator;
  readonly schedulerIcon: Locator;
  readonly activityIcon: Locator;
  readonly messageIcon: Locator;
  readonly personnelLogoLink: Locator;
  readonly logOutLink: Locator;
  readonly myPersonnelFileLink: Locator;
  readonly settingsLink: Locator;
  readonly systemParameterLink: Locator;

  constructor(page: Page) {
    this.page = page;

    // Left Navigation
    this.leftNavDiv = page.locator('#LeftNav');
    this.searchMenuInput = page.locator('#input');

    // Header Controls
    this.screenTabStrip = page.locator('#pnxWindowStrip');
    this.sysParameterButton = page.locator('#btnSysParam');
    this.textMessageSearchButton = page.locator('#imgTxtSrch');
    this.textMessageTextbox = page.locator('#txtSearch');
    this.jobStatusButton = page.locator('#btnJobStatus');
    this.messageCountLabel = page.locator('#lblMsgCnt');
    this.loginUserNameText = page.locator('#lblUserName');
    this.pnxLogoButton = page.locator('#imageHelp');
    this.pnxLogoImageButton = page.locator("//*[@id='PnxLogo' and @title='Police RMS']");
    this.pnxLogoImageButtonFire = page.locator("//*[@id='PnxLogo' and @title='Fire RMS']");
    this.logoutText = page.locator("//span[contains(text(),'Logout')]");
    this.logoutTextView = page.locator("//div[@class='rmSlide']//ul/li/a/span[contains(text(), 'Logout')]");
    this.mouseOverLogTextView = page.locator("//div[@id='mnuPhoenix']//li[@class='rmItem rmFirst rmLast']");
    this.formsButton = page.locator("//div[@id='customMenu']//span[text()='Forms']");
    this.formsLinkElements = page.locator("//div[@class='rmSlide']//span[@class='rmText rmExpandRight']");
    this.toolsButton = page.locator("//div[@id='mnuPhoenix']//ul/li//a//span[text()='Tools']");
    this.toolsLink = page.locator("//div[@class='rmSlide']//span[text()='Tools']");
    this.reportsLink = page.locator("//div[@id='mnuPnxSec']//a/span[text()='Reports']");
    this.linksButton = page.locator("//div[@id='mnuPnxSec']//a/span[text()='Links']");
    this.helpIcon = page.locator('#imghelp');
    this.helpLogoutText = page.locator('#HelpLogoutPhoenix');
    this.aboutLink = page.locator("(//span[text()='About'])[2]");
    this.userProfileIcon = page.locator('#imgPersonnel');
    this.ncicQueryIcon = page.locator('#btnNCIC');
    this.aiMugmatchIcon = page.locator('#ImgAIMugMatch');
    this.phoenixBOTCallCenterAgentIcon = page.locator('#ImgAgentLoginURL');
    this.kgisQueryIcon = page.locator('#btnKGIS');
    this.aiTranscriptionIcon = page.locator('#ImgAI');
    this.schedulerIcon = page.locator('#btnSchduler');
    this.activityIcon = page.locator('#btnActivity');
    this.messageIcon = page.locator('#DivMsg');
    this.personnelLogoLink = page.locator('#imgPersonnel');
    this.logOutLink = page.locator('#A6Logout');
    this.myPersonnelFileLink = page.locator('#A6MyPersonnelFile');
    this.settingsLink = page.locator('#imgSettings');
    this.systemParameterLink = page.locator('#A4SystemParameter');
  }

  // ─── Module Navigation ─────────────────────────────────────────────────────

  async navigateToModule(moduleTitle: string): Promise<void> {
    await this.page.waitForTimeout(1000);
    const leftNavPane = this.page.locator('#RAD_SLIDING_PANE_CONTENT_Pane1');
    await leftNavPane.hover();

    const moduleElem = this.leftNavDiv.locator(
      `xpath=.//ul/li/div/span[contains(@class,'LeftNavModule') and contains(text(),'${moduleTitle}')]`
    );

    await moduleElem.scrollIntoViewIfNeeded();
    await moduleElem.click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async navigateToScreen(screenTitle: string): Promise<void> {
    await this.page.waitForTimeout(1000);

    const screenElems = this.leftNavDiv.locator(
      `xpath=.//ul/li/ul/li/div/span[text()='${screenTitle}']`
    );

    const count = await screenElems.count();
    for (let i = 0; i < count; i++) {
      const elem = screenElems.nth(i);
      if (await elem.isVisible()) {
        await elem.scrollIntoViewIfNeeded();
        await elem.click({ force: true });
        await this.page.waitForLoadState('domcontentloaded');
        break;
      }
    }
  }

  async navigateToScreenByScreenID(screenId: string): Promise<void> {
    await this.page.waitForLoadState('load');
    const screenElem = this.leftNavDiv.locator(
      `xpath=.//ul/li/ul/li/div/span[@title='${screenId}']`
    );
    await screenElem.click({ force: true });
    await this.page.waitForLoadState('load');
  }

  async navigateToScreenByScreenIDWithContains(screenId: string): Promise<void> {
    await this.page.waitForLoadState('load');
    const screenElem = this.leftNavDiv.locator(
      `//ul/li/ul/li/div/span[contains(@title,'${screenId}')]`
    );
    await screenElem.scrollIntoViewIfNeeded();
    await screenElem.click({ force: true });
    await this.page.waitForLoadState('load');
  }

  async navigateToScreenBasedOnScreenName(screenTitle: string): Promise<void> {
    const [screenPart, modulePart] = screenTitle.split('-');

    const module = this.leftNavDiv.locator(
      `xpath=.//ul/li/ul/li/div/span[text()='${screenPart}']//preceding::span[@class='rtIn LeftNavModule'][1][contains(text(),'${modulePart}')]`
    );
    await module.scrollIntoViewIfNeeded();
    await module.click();

    const screenElem = this.leftNavDiv.locator(
      `xpath=.//ul/li/ul/li/div/span[text()='${screenPart}']`
    );
    const count = await screenElem.count();
    for (let i = 0; i < count; i++) {
      const elem = screenElem.nth(i);
      if (await elem.isVisible()) {
        await elem.click({ force: true });
        await this.page.waitForTimeout(1000);
        break;
      }
    }
  }

  async navigateToModuleBasedOnScreenName(screenTitle: string): Promise<void> {
    const [screenPart, modulePart] = screenTitle.split('-');

    const module = this.leftNavDiv.locator(
      `xpath=.//ul/li/ul/li/div/span[text()='${screenPart}']//preceding::span[@class='rtIn LeftNavModule'][1][contains(text(),'${modulePart}')]`
    );
    await module.click();
  }

  async navigateToScreenByModuleName(module: string, screen: string): Promise<void> {
    const modscreen = this.page.locator(
      `//span[contains(text(),'${module}')]/parent::div/following-sibling::ul//li//div//span[contains(@title,'${screen}')]`
    );
    await modscreen.click();
    await this.page.waitForLoadState('load');
  }

  // ─── Screen Tab Operations ─────────────────────────────────────────────────

  async selectScreenTab(screenTabName: string): Promise<void> {
    await this.page.waitForTimeout(1000);
    const tab = this.screenTabStrip.locator(`//span[contains(text(),'${screenTabName}')]`);
    await tab.click();
  }

  async reloadScreenTab(screenTabName: string): Promise<void> {
    await this.page.waitForTimeout(1000);
    const tab = this.screenTabStrip.locator(`//span[contains(text(),'${screenTabName}')]`);
    await tab.click({ button: 'right' });
    await this.page.waitForTimeout(1000);
    await this.page.locator(
      "//div[@id='ContextMenu_ToRadTabstrip_detached']//span[contains(text(),'Reload Tab')]"
    ).click();
  }

  async closeScreenTab(screenTabName: string): Promise<void> {
    const tab = this.page.locator(`//span[contains(text(),'${screenTabName}')]`);
    await tab.waitFor({ state: 'visible', timeout: 10000 });
    await tab.click({ button: 'right' });
    const closeOption = this.page.locator(
      "//div[@id='ContextMenu_ToRadTabstrip_detached']//span[contains(text(),'Close Tab')]"
    );
    await closeOption.waitFor({ state: 'visible' });
    await closeOption.click();
  }

  // ─── Header Actions ────────────────────────────────────────────────────────

  async clickSystemParameterIcon(): Promise<void> {
    await this.sysParameterButton.click();
    await this.page.waitForTimeout(1000);
  }

  async clickJobStatusIcon(): Promise<void> {
    await this.jobStatusButton.click();
    await this.page.waitForTimeout(1000);
  }

  async clickMessageSearchIcon(): Promise<void> {
    await this.messageCountLabel.click();
  }

  async clickTextMessageSearchIcon(): Promise<void> {
    await this.textMessageSearchButton.click();
  }

  async enterTextMessageSearch(text: string): Promise<void> {
    await this.textMessageTextbox.fill(text);
  }

  async enterAutomationInTextMsgSearch(): Promise<void> {
    await this.textMessageTextbox.fill('automation');
  }

  async pressEnterInTextMessageSearch(): Promise<void> {
    await this.textMessageTextbox.press('Enter');
  }

  async clickSearchIconInToolbar(): Promise<void> {
    await this.textMessageTextbox.press('Enter');
  }

  async clickUserName(): Promise<void> {
    await this.loginUserNameText.click();
  }

  async clickLogginUserLink(): Promise<void> {
    await this.loginUserNameText.hover();
    await this.page.waitForTimeout(1000);
    await this.loginUserNameText.click();
    await this.page.waitForTimeout(1000);
  }

  async clickSchedulerIcon(): Promise<void> {
    await this.schedulerIcon.click();
  }

  async clickActivityIcon(): Promise<void> {
    await this.activityIcon.click();
  }

  async clickNCICQueryIcon(): Promise<void> {
    await this.ncicQueryIcon.click();
  }

  async clickOnPNXLogo(): Promise<void> {
    await this.page.waitForTimeout(1000);
    await this.pnxLogoImageButton.click();
    await this.mouseOverLogTextView.click();
  }

  async clickOnPNXLogoForFire(): Promise<void> {
    await this.page.waitForTimeout(1000);
    await this.pnxLogoImageButtonFire.click();
    await this.mouseOverLogTextView.click();
  }

  async mouseHoverOnTools(): Promise<void> {
    await this.toolsButton.hover();
    await this.page.waitForTimeout(1000);
  }

  async mouseHoverOnPnxLogoAction(action: string): Promise<void> {
    await this.page.waitForTimeout(500);
    const target = this.page.locator(
      `//div[@class='rmSlide']//ul/li/a/span[contains(text(), '${action}')]`
    );
    await target.hover();
  }

  async mouseHoverAndClickOnPnxLogoAction(action: string): Promise<void> {
    await this.page.waitForTimeout(500);
    const target = this.page.locator(
      `//div[@id='mnuPhoenix']//ul/li/a/span[contains(text(), '${action}')]`
    );
    await this.page.waitForTimeout(500);
    await target.hover();
    await target.click();
  }

  async mouseHoverOnScreenName(screenName: string): Promise<void> {
    const screens = this.page.locator(`//ul/li/ul/li/div/span[text()='${screenName}']`);
    const count = await screens.count();
    for (let i = 0; i < count; i++) {
      const elem = screens.nth(i);
      if (await elem.isVisible()) {
        await elem.hover();
        break;
      }
    }
  }

  async clickFavoriteIconUsingScreenName(screenName: string): Promise<void> {
    const screens = this.page.locator(`//ul/li/ul/li/div/span[text()='${screenName}']`);
    const count = await screens.count();
    for (let i = 0; i < count; i++) {
      const elem = screens.nth(i);
      if (await elem.isVisible()) {
        await elem.locator('input').click();
        break;
      }
    }
  }

  async verifyFavoriteIconStatus(screenName: string, status: string): Promise<void> {
    const screens = this.page.locator(`//ul/li/ul/li/div/span[text()='${screenName}']`);
    const count = await screens.count();
    for (let i = 0; i < count; i++) {
      const elem = screens.nth(i);
      if (await elem.isVisible()) {
        const title = await elem.locator('input').getAttribute('title');
        expect(title).toEqual(status);
        break;
      }
    }
  }

  async verifyAtScreenInFavorite(screenTitle: string): Promise<void> {
    const screenElem = this.leftNavDiv.locator(
      `xpath=.//ul/li/ul/li/div/span[text()='${screenTitle}']`
    );
    const count = await screenElem.count();
    expect(count).toEqual(2);
  }

  async verifyAtScreenNotInFavorite(screenTitle: string): Promise<void> {
    const screenElem = this.leftNavDiv.locator(
      `xpath=.//ul/li/ul/li/div/span[text()='${screenTitle}']`
    );
    const count = await screenElem.count();
    expect(count).toEqual(1);
  }

  async mouseOverFormsLink(): Promise<void> {
    await this.formsButton.hover();
    await this.formsButton.click();
    await this.page.waitForTimeout(1000);
  }

  async verifyAtFirstElementInFormsLink(expectedValue: string): Promise<void> {
    const elements = this.page.locator("//div[@class='rmSlide']//span[@class='rmText rmExpandRight']");
    const text = await elements.first().innerText();
    expect(text).toEqual(expectedValue);
  }

  async verifyFirstElementInFormsLinkIsNotAsTemplates(): Promise<void> {
    const elements = this.page.locator("//div[@class='rmSlide']//span[@class='rmText rmExpandRight']");
    const text = await elements.first().innerText();
    expect(text).not.toContain('Templates');
  }

  async mouseOverReportsLink(): Promise<void> {
    await this.reportsLink.hover();
    await this.reportsLink.click();
    await this.page.waitForTimeout(1000);
  }

  async mouseOverReports(): Promise<void> {
    const elements = this.page.locator("//div[@class='rmSlide']//span[@class='rmText rmExpandRight']");
    await elements.first().hover();
  }

  async verifyAtFirstElementInReportsLink(expectedValue: string): Promise<void> {
    const elements = this.page.locator("//div[@class='rmScrollWrap rmGroup rmLevel2']//span[@class='rmText']");
    const text = await elements.first().innerText();
    expect(text).toEqual(expectedValue);
  }

  async verifyFirstElementInReportsLinkIsNotAsCADToneLogList(): Promise<void> {
    const elements = this.page.locator("//div[@class='rmScrollWrap rmGroup rmLevel2']//span[@class='rmText']");
    const text = await elements.first().innerText();
    expect(text).not.toContain('CADToneLogList');
  }

  async verifyFirstElementInReportsLinkAsAccountabilityID(): Promise<void> {
    const elements = this.page.locator("//div[@class='rmScrollWrap rmGroup rmLevel2']//span[@class='rmText']");
    const text = await elements.first().innerText();
    expect(text).toEqual('Accountability ID');
  }

  async reloadMainWindow(): Promise<void> {
    await this.page.reload();
  }

  async selectAtLinks(linkName: string): Promise<void> {
    await this.linksButton.hover();
    await this.linksButton.click();
    await this.page.waitForTimeout(1000);
    const link = this.linksButton.locator(
      `.//parent::a//following-sibling::div[@class='rmSlide']//span[text()='${linkName}']`
    );
    await link.click();
  }

  async clickAndTaboutSearchMenuItem(): Promise<void> {
    await this.searchMenuInput.click();
    await this.searchMenuInput.press('Tab');
  }

  async mouseHoverOnPhoenixHelpIcon(): Promise<void> {
    await this.helpIcon.hover();
    await this.aboutLink.click();
    await this.page.waitForTimeout(1000);
  }

  // ─── Verify Methods ────────────────────────────────────────────────────────

  async verifyNCICQueryIconIsDisplayed(): Promise<void> {
    expect(await this.ncicQueryIcon.isVisible()).toBeTruthy();
  }

  async verifyAIMugmatchIconIsNotDisplayed(): Promise<void> {
    expect(await this.aiMugmatchIcon.isVisible().catch(() => false)).toBeFalsy();
  }

  async verifyAIMugmatchIconIsDisplayed(): Promise<void> {
    expect(await this.aiMugmatchIcon.isVisible()).toBeTruthy();
  }

  async verifySchedulerIconIsDisplayed(): Promise<void> {
    expect(await this.schedulerIcon.isVisible()).toBeTruthy();
  }

  async verifyActivityIconIsDisplayed(): Promise<void> {
    expect(await this.activityIcon.isVisible()).toBeTruthy();
  }

  async verifyMessageIconIsDisplayed(): Promise<void> {
    expect(await this.messageIcon.isVisible()).toBeTruthy();
  }

  async verifyKGISQueryIconIsDisplayed(): Promise<void> {
    expect(await this.kgisQueryIcon.isVisible()).toBeTruthy();
  }

  async verifyPhoenixBOTCallCenterAgentIconIsDisplayed(): Promise<void> {
    expect(await this.phoenixBOTCallCenterAgentIcon.isVisible()).toBeTruthy();
  }

  async verifyTextSearchIconIsDisplayed(): Promise<void> {
    expect(await this.textMessageSearchButton.isVisible()).toBeTruthy();
  }

  async verifySysParameterIconIsDisplayed(): Promise<void> {
    expect(await this.sysParameterButton.isVisible()).toBeTruthy();
  }

  async verifyAITranscriptionIconIsDisplayed(): Promise<void> {
    expect(await this.aiTranscriptionIcon.isVisible()).toBeTruthy();
  }

  async verifyJobStatusIconIsDisplayed(): Promise<void> {
    expect(await this.jobStatusButton.isVisible()).toBeTruthy();
  }

  async verifyPnxLogoIsDisplayed(): Promise<void> {
    expect(await this.pnxLogoImageButton.isVisible()).toBeTruthy();
  }

  async verifyTextbarIsNotDisplayedInToolbar(): Promise<void> {
    expect(await this.textMessageTextbox.isVisible()).toBeFalsy();
  }

  async verifyTextbarIsDisplayedInToolbar(): Promise<void> {
    expect(await this.textMessageTextbox.isVisible()).toBeTruthy();
  }

  async verifyScreenIsDisplayed(screenTitle: string): Promise<void> {
    const screen = this.page.locator(
      `//div[@id='LeftNav']/ul/li/ul/li/div/span[text()='${screenTitle}']`
    );
    expect(await screen.isVisible()).toBeTruthy();
  }

  async verifyAtScreenIsDisplayed(moduleName: string, screenTitle: string): Promise<void> {
    await this.page.waitForTimeout(2000);
    const screen = this.page.locator(
      `//div[@id='LeftNav']/ul/li/div/span[contains(text(),'${moduleName}')]//parent::div//parent::li//following-sibling::ul//span[contains(@title,'${screenTitle}')]`
    );
    expect(await screen.isVisible()).toBeTruthy();
  }

  async verifyAtScreenIsDisplayedForFire(screenName: string): Promise<void> {
    const screen = this.page.locator(
      `//div[@id='LeftNav']//ul//li//div//span[text()='${screenName}']`
    );
    expect(await screen.isVisible()).toBeTruthy();
  }

  async verifyAtScreenIsNotDisplayed(screenName: string): Promise<void> {
    const screen = this.page.locator(
      `//div[@id='LeftNav']//ul//li//div//span[text()='${screenName}']`
    );
    expect(await screen.isVisible().catch(() => false)).toBeFalsy();
  }

  async verifyModuleIsDisplayed(moduleTitle: string): Promise<void> {
    const leftNavPane = this.page.locator('#RAD_SLIDING_PANE_CONTENT_Pane1');
    await leftNavPane.hover();
    await this.page.waitForLoadState('load');
    const screen = this.leftNavDiv.locator(
      `xpath=.//ul/li/div/span[contains(text(),'${moduleTitle}')]`
    );
    expect(await screen.isVisible()).toBeTruthy();
  }

  async verifyURLAsLoginURL(): Promise<void> {
    const currentUrl = this.page.url();
    expect(currentUrl).toEqual(process.env.URL || '');
  }

  // ─── Logout ────────────────────────────────────────────────────────────────

  async logout(): Promise<void> {
    await this.page.waitForTimeout(500);
    await this.pnxLogoButton.click();
    await this.page.waitForTimeout(500);
    await this.helpLogoutText.click();
    await this.page.waitForTimeout(500);
    await this.page.locator("//input[@value='Yes']").click();
    await this.page.waitForTimeout(500);
  }

  async logoutLegacy(): Promise<void> {
    await this.pnxLogoImageButton.click();
    await this.mouseOverLogTextView.hover();
    await this.logoutTextView.click();
    await this.page.locator("//input[@value='Yes']").click();
  }

  async logoutFireRMS(): Promise<void> {
    await this.page.waitForTimeout(500);
    await this.pnxLogoImageButtonFire.click();
    await this.mouseOverLogTextView.click();
    await this.page.waitForTimeout(500);
    await this.logoutTextView.click();
    await this.page.locator("//input[@value='Yes']").click();
    await this.page.waitForTimeout(500);
  }

  async logoutFireRms2026(): Promise<void> {
    await this.page.waitForTimeout(500);
    await this.personnelLogoLink.click();
    await this.logOutLink.click();
    await this.page.locator("//input[@value='Yes']").click();
    await this.page.waitForTimeout(500);
  }

  async logoutRms2026(): Promise<void> {
    await this.page.waitForTimeout(500);
    await this.personnelLogoLink.click();
    await this.logOutLink.click();
    await this.page.locator("//input[@value='Yes']").click();
    await this.page.waitForTimeout(500);
  }

  // ─── 2026 Version Actions ──────────────────────────────────────────────────

  async clickSystemParameterLink2026(): Promise<void> {
    await this.page.waitForTimeout(500);
    await this.settingsLink.click();
    await this.systemParameterLink.click();
    await this.page.waitForTimeout(1000);
  }

  async clickLoginUserProfileIcon2026(): Promise<void> {
    await this.userProfileIcon.hover();
    await this.page.waitForTimeout(500);
    await this.userProfileIcon.click();
  }

  async clickMyPersonnelFileLink(): Promise<void> {
    await this.myPersonnelFileLink.click();
  }

  // ─── Search Menu ───────────────────────────────────────────────────────────

  async searchMenuItem(text: string): Promise<void> {
    await this.searchMenuInput.fill(text);
    await this.page.waitForTimeout(500);
  }
}
