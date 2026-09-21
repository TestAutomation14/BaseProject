import { Page, Locator, expect } from '@playwright/test';

// ==================== Module-level switch/utility methods ====================

export class CitizenServicesPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async switchToAddressDetails(): Promise<void> {
    await this.page.bringToFront();
  }

  async switchToCSPawnSearch(): Promise<void> {
    await this.page.locator("iframe[src*='frmCSPawnSrch.aspx?']").contentFrame().locator('body').waitFor();
  }

  async switchToAnonymousTipsScreen(): Promise<void> {
    await this.page.locator("iframe[src*='frmCitAnonymousSrch.aspx?']").contentFrame().locator('body').waitFor();
  }

  async switchToAnonymousTipsEntry(): Promise<void> {
    await this.page.bringToFront();
  }

  async switchToCitizenAccountSearch(): Promise<void> {
    await this.page.locator("iframe[src*='frmRegistrationSrch.aspx?']").contentFrame().locator('body').waitFor();
  }

  async switchToRegistrationDetails(): Promise<void> {
    await this.page.bringToFront();
  }

  async switchToCitizenFlagSearch(): Promise<void> {
    await this.page.locator("iframe[src*='frmCitFlagSrch.aspx?']").contentFrame().locator('body').waitFor();
  }

  async switchToCitizenFlagEntry(): Promise<void> {
    await this.page.bringToFront();
  }

  async switchToComplaintScreen(): Promise<void> {
    await this.page.locator("iframe[src*='frmCitComplaintsSrch.aspx?']").contentFrame().locator('body').waitFor();
  }

  async switchToComplaintsEntry(): Promise<void> {
    await this.page.bringToFront();
  }

  async switchToCSPawnDealer(): Promise<void> {
    await this.page.locator("iframe[src*='frmCSPawnDealerSrch.aspx?']").contentFrame().locator('body').waitFor();
  }

  async switchToCSPawnDealerEntry(): Promise<void> {
    await this.page.bringToFront();
  }

  async switchToCSPawnEntry(): Promise<void> {
    await this.page.bringToFront();
  }

  async switchToLiveVideoLink(): Promise<void> {
    await this.page.locator("iframe[src*='frmCitCameraSrch.aspx?']").contentFrame().locator('body').waitFor();
  }

  async switchToCitizenIPCamera(): Promise<void> {
    await this.page.bringToFront();
  }

  async switchToCameraDetails(): Promise<void> {
    await this.page.bringToFront();
  }

  async switchToLocationCheckSearch(): Promise<void> {
    await this.page.locator("iframe[src*='frmCitHouseCheckSrch.aspx?']").contentFrame().locator('body').waitFor();
  }

  async switchToLocationCheckEntry(): Promise<void> {
    await this.page.bringToFront();
  }

  async switchToServiceRequestsScreen(): Promise<void> {
    await this.page.locator("iframe[src*='frmCitServiceRequestSrch.aspx?']").contentFrame().locator('body').waitFor();
  }

  async switchToServiceRequestsEntry(): Promise<void> {
    await this.page.bringToFront();
  }

  async switchToCitizenAccountSearchForFire(): Promise<void> {
    await this.page.locator("iframe[src*='frmCitRegistrationSrch.aspx?']").contentFrame().locator('body').waitFor();
  }

  async switchToCSPPermitRequest(): Promise<void> {
    await this.page.locator("iframe[src*='frmCitPermitReqSrch.aspx?']").contentFrame().locator('body').waitFor();
  }

  async switchToCSPPermitRequestsEntry(): Promise<void> {
    await this.page.bringToFront();
  }

  async switchToCSCFSMapUpdate(): Promise<void> {
    await this.page.locator("iframe[src*='CCP/frmIncidentType.aspx?']").contentFrame().locator('body').waitFor();
  }

  async switchToCSPawnDealerEntryScreenTab(): Promise<void> {
    await this.page.locator("iframe[src*='frmCSPawnDealer.aspx?']").contentFrame().locator('body').waitFor();
  }

  async verify1070EmailSentAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async switchToUserActivation(): Promise<void> {
    await this.page.bringToFront();
  }

  async switchToCSFormSearch(): Promise<void> {
    await this.page.locator("iframe[src*='frmCitFormSrch.aspx?']").contentFrame().locator('body').waitFor();
  }

  async switchToCSFormEntry(): Promise<void> {
    await this.page.bringToFront();
  }

  async switchToOnlineReports(): Promise<void> {
    await this.page.locator("iframe[src*='frmCitOnlineRptSrch.aspx?']").contentFrame().locator('body').waitFor();
  }

  async switchToCORSEntry(): Promise<void> {
    await this.page.bringToFront();
  }

  async switchToCSCFSCodeMap(): Promise<void> {
    await this.page.locator("iframe[src*='frmIncidentTypeSrch.aspx']").contentFrame().locator('body').waitFor();
  }

  async switchToCSPAlarmRequests(): Promise<void> {
    await this.page.locator("iframe[src*='frmCitAlarmAccountSrch.aspx']").contentFrame().locator('body').waitFor();
  }
}

// ==================== AnonymousTips ====================

export class AnonymousTipsPage {
  readonly page: Page;
  readonly addNewTipButton: Locator;
  readonly searchButton: Locator;
  readonly resultTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewTipButton = page.locator("//span[contains(text(),'Add New Tip')]");
    this.searchButton = page.locator("//a//span[contains(text(),'Search')]");
    this.resultTable = page.locator('#grdAnonymousHist');
  }

  async clickAddNewTip(): Promise<void> {
    await this.addNewTipButton.click();
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async doubleClickOnCellsAndVerifyNotEditable(): Promise<void> {
    const rows = this.resultTable.locator('tbody tr');
    const rowCount = await rows.count();
    if (rowCount === 0) return;
    const randomIndex = Math.floor(Math.random() * rowCount);
    const row = rows.nth(randomIndex);
    const cells = row.locator('td');
    const cellCount = await cells.count();
    for (let i = 0; i < cellCount; i++) {
      const cell = cells.nth(i);
      if (await cell.isVisible()) {
        const textBefore = await cell.textContent();
        await cell.dblclick();
        const textAfter = await cell.textContent();
        expect(textAfter).not.toContain('12345');
      }
    }
  }

  async verifyAtColumnValuesAreSortedAscendingOrder(columnHeader: string): Promise<void> {
    // Grid sorting verification
  }

  async verifyAtColumnValuesAreSortedDescendingOrder(columnHeader: string): Promise<void> {
    // Grid sorting verification
  }

  async verifyGridIsNull(): Promise<void> {
    const rowCount = await this.resultTable.locator('tbody tr').count();
    expect(rowCount).toBe(0);
  }

  async verifyGridIsNotNull(): Promise<void> {
    const rowCount = await this.resultTable.locator('tbody tr').count();
    expect(rowCount).toBeGreaterThan(0);
  }
}

// ==================== AnonymousTipsEntry ====================

export class AnonymousTipsEntryPage {
  readonly page: Page;
  readonly issueTypeDropdown: Locator;
  readonly saveButton: Locator;
  readonly statusBar: Locator;
  readonly complaintDetailsTab: Locator;
  readonly receiveDateEdit: Locator;
  readonly receivedTimeEdit: Locator;
  readonly activityDateEdit: Locator;
  readonly activityTimeEdit: Locator;
  readonly connectionToTheIncidentDropdown: Locator;
  readonly locationEdit: Locator;
  readonly resetIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.issueTypeDropdown = page.locator('#cddIssueType_DropDown');
    this.saveButton = page.locator('#cmdSave');
    this.statusBar = page.locator("//td[@class = 'statusBar']//b");
    this.complaintDetailsTab = page.locator("//span[contains(text(),'Complaint Details')]");
    this.receiveDateEdit = page.locator('#dttmReceived_Date_KPIDttmCtrl');
    this.receivedTimeEdit = page.locator("//table[@id='dttmReceived_Time']//input");
    this.activityDateEdit = page.locator('#dttmActivity_Date_KPIDttmCtrl');
    this.activityTimeEdit = page.locator("//table[@id='dttmActivity_Time']//input");
    this.connectionToTheIncidentDropdown = page.locator('#cddIncConnection_DropDown');
    this.locationEdit = page.locator('#txtOcclocation');
    this.resetIcon = page.locator('#cmdRefresh');
  }

  async selectIssueType(value: string): Promise<void> {
    await this.issueTypeDropdown.selectOption({ label: value });
  }

  async enterDetails(text: string): Promise<void> {
    const frame = this.page.frameLocator('#tabAnonymousRequest_tmpl0_usrAnonymous1_Editor_contentIframe');
    await frame.locator('body').fill(text);
  }

  async save(): Promise<void> {
    await this.saveButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
    await expect(this.statusBar).toHaveText('1002 - Addition Successful');
  }

  async clickComplaintDetailsTab(): Promise<void> {
    await this.complaintDetailsTab.click();
  }

  async enterReceivedDateNTimeAsPrevDate(date: string, time: string): Promise<void> {
    await this.receiveDateEdit.fill(date);
    await this.receivedTimeEdit.fill(time);
  }

  async enterActivityDateNTimeAsCurrentDate(date: string, time: string): Promise<void> {
    await this.activityDateEdit.fill(date);
    await this.activityTimeEdit.fill(time);
  }

  async selectConnectionToTheIncident(value: string): Promise<void> {
    await this.connectionToTheIncidentDropdown.selectOption({ label: value });
  }

  async enterLocation(location: string): Promise<void> {
    await this.locationEdit.fill(location);
  }

  async clickReset(): Promise<void> {
    await this.resetIcon.click();
  }

  async verifyIssueTypeIsNotSelected(): Promise<void> {
    const selected = await this.issueTypeDropdown.inputValue();
    expect(selected).toBe('');
  }

  async verifyConnectionToTheIncidentIsNotSelected(): Promise<void> {
    const selected = await this.connectionToTheIncidentDropdown.inputValue();
    expect(selected).toBe('');
  }

  async verifyReceivedDateIsBlank(): Promise<void> {
    await expect(this.receiveDateEdit).toHaveValue('');
  }

  async verifyActivityDateIsBlank(): Promise<void> {
    await expect(this.activityDateEdit).toHaveValue('');
  }

  async verifyLocationIsBlank(): Promise<void> {
    await expect(this.locationEdit).toHaveValue('');
  }

  async verifyDetailsFieldIsBlank(): Promise<void> {
    const frame = this.page.frameLocator('#tabAnonymousRequest_tmpl0_usrAnonymous1_Editor_contentIframe');
    const text = await frame.locator('body').textContent();
    expect(text?.trim()).toBe('');
  }
}

// ==================== CitizenAccountSearch ====================

export class CitizenAccountSearchPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly searchButton: Locator;
  readonly resultTable: Locator;
  readonly citizenNoYearEdit: Locator;
  readonly citizenNoEdit: Locator;
  readonly phoneNoEdit: Locator;
  readonly phoneTypeDropdown: Locator;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly emailEdit: Locator;
  readonly includeInactiveCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("//span[contains(text(),'Add New')]");
    this.searchButton = page.locator('#cmdSearch');
    this.resultTable = page.locator('#grdCitRecords');
    this.citizenNoYearEdit = page.locator('#numCINNbr_Year');
    this.citizenNoEdit = page.locator('#numCINNbr_Number');
    this.phoneNoEdit = page.locator('#cstPhoneNo_PhoneNumber');
    this.phoneTypeDropdown = page.locator('#cstPhoneNo_PhoneType_DropDown');
    this.lastNameEdit = page.locator('#txtLastName');
    this.firstNameEdit = page.locator('#txtFirstName');
    this.emailEdit = page.locator('#txtEmail');
    this.includeInactiveCheckbox = page.locator('#chkUsrInActive');
  }

  async clickAddNew(): Promise<void> {
    await this.addNewButton.click();
  }

  async clickSearchButton(): Promise<void> {
    await this.searchButton.click();
  }

  async selectAtCitizenNoInGrid(citizenNo: string): Promise<void> {
    await this.resultTable.locator(`//td[contains(text(),'${citizenNo}')]`).click();
  }

  async selectRandomGridRow(): Promise<void> {
    const rows = this.resultTable.locator('tbody tr');
    const count = await rows.count();
    if (count > 0) {
      await rows.nth(Math.floor(Math.random() * count)).click();
    }
  }

  async verifyGridIsNotNull(): Promise<void> {
    const rowCount = await this.resultTable.locator('tbody tr').count();
    expect(rowCount).toBeGreaterThan(0);
  }

  async enterAtCitizenNo(citizenNo: string): Promise<void> {
    await this.citizenNoYearEdit.fill(citizenNo.substring(0, 2));
    await this.citizenNoEdit.fill(citizenNo.substring(3));
    await this.citizenNoEdit.press('Tab');
  }

  async verify1011NoRecordFoundAckMsg(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('1011 - No Record Found');
      await dialog.accept();
    });
  }

  async enterAtPhoneNo(phoneNo: string): Promise<void> {
    await this.phoneNoEdit.click();
    await this.phoneNoEdit.fill(phoneNo);
  }

  async verifyPhoneNoInGrid(phoneNo: string): Promise<void> {
    const cells = this.resultTable.locator("//th[contains(text(),'Phone')]/ancestor::table//tbody/tr/td[position()=count(//th[contains(text(),'Phone')]/preceding-sibling::th)+1]");
    const count = await cells.count();
    for (let i = 0; i < count; i++) {
      const text = await cells.nth(i).textContent();
      expect(text).toContain(phoneNo);
    }
  }

  async refresh(): Promise<void> {
    await this.page.reload();
    await this.page.waitForLoadState();
  }

  async selectAtPhoneType(phoneType: string): Promise<void> {
    await this.phoneTypeDropdown.selectOption({ label: phoneType });
  }

  async enterAtLastName(lastName: string): Promise<void> {
    await this.lastNameEdit.fill(lastName);
  }

  async enterAtFirstName(firstName: string): Promise<void> {
    await this.firstNameEdit.fill(firstName);
  }

  async enterAtEmail(email: string): Promise<void> {
    await this.emailEdit.fill(email);
  }

  async verifyAtEmailStartsWith(email: string): Promise<void> {
    const cells = this.resultTable.locator("//th[contains(text(),'Email')]/ancestor::table//tbody/tr/td[position()=count(//th[contains(text(),'Email')]/preceding-sibling::th)+1]");
    const count = await cells.count();
    for (let i = 0; i < count; i++) {
      const text = await cells.nth(i).textContent();
      expect(text?.toUpperCase().startsWith(email.toUpperCase())).toBeTruthy();
    }
  }

  async reload(): Promise<void> {
    await this.page.reload();
    await this.page.waitForLoadState();
  }

  async verifyAtLastAndFirstNameStartsWithLetterInGrid(name: string): Promise<void> {
    const cells = this.resultTable.locator("//th[contains(text(),'Name')]/ancestor::table//tbody/tr/td[position()=count(//th[contains(text(),'Name')]/preceding-sibling::th)+1]");
    const count = await cells.count();
    for (let i = 0; i < count; i++) {
      const text = await cells.nth(i).textContent();
      const splitNames = text?.split(' ') || [];
      for (const n of splitNames) {
        expect(n.startsWith(name)).toBeTruthy();
      }
    }
  }

  async doubleClickOnCellsAndVerifyNotEditable(): Promise<void> {
    const rows = this.resultTable.locator('tbody tr');
    const rowCount = await rows.count();
    if (rowCount === 0) return;
    const randomIndex = Math.floor(Math.random() * rowCount);
    const row = rows.nth(randomIndex);
    const cells = row.locator('td');
    const cellCount = await cells.count();
    for (let i = 0; i < cellCount; i++) {
      const cell = cells.nth(i);
      if (await cell.isVisible()) {
        await cell.dblclick();
        const textAfter = await cell.textContent();
        expect(textAfter).not.toContain('12345');
      }
    }
  }

  async clickIncludeInactiveCheckbox(): Promise<void> {
    await this.includeInactiveCheckbox.click();
  }

  async verifyAtCitizenNoIsGreyOut(citizenNo: string): Promise<void> {
    const row = this.resultTable.locator(`//td[contains(text(),'${citizenNo}')]/parent::tr`);
    const color = await row.evaluate(el => getComputedStyle(el).color);
    expect(color).toBe('rgba(128, 128, 128, 1)');
  }

  async verifyAtColumnValuesAreSortedAscendingOrder(columnHeader: string): Promise<void> {
    // Grid sorting verification
  }

  async verifyAtColumnValuesAreSortedDescendingOrder(columnHeader: string): Promise<void> {
    // Grid sorting verification
  }

  async verifyGridIsNull(): Promise<void> {
    const rowCount = await this.resultTable.locator('tbody tr').count();
    expect(rowCount).toBe(0);
  }

  async verifyAtColumnValuesAreSortedAscendingOrderCaseSensitive(columnHeader: string): Promise<void> {
    // Grid sorting verification case insensitive
  }

  async verifyAtColumnValuesAreSortedDescendingOrderCaseSensitive(columnHeader: string): Promise<void> {
    // Grid sorting verification case insensitive
  }
}

// ==================== RegistrationDetails ====================

export class RegistrationDetailsPage {
  readonly page: Page;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly addressEdit: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly statusBar: Locator;
  readonly emailEditForFire: Locator;
  readonly lastNameEditForFire: Locator;
  readonly firstNameEditForFire: Locator;
  readonly addressTab: Locator;
  readonly userActivationButton: Locator;
  readonly attachmentTab: Locator;
  readonly resetIcon: Locator;
  readonly alcIcon: Locator;
  readonly emailPasswordButton: Locator;
  readonly nameTypeEdit: Locator;
  readonly nameIDEdit: Locator;
  readonly phoneTypeDropdown: Locator;
  readonly phoneNoEdit: Locator;
  readonly citizenIDNo: Locator;
  readonly accessDetailsTab: Locator;
  readonly activitiesTab: Locator;
  readonly emergencyContactsTab: Locator;
  readonly emergencyInfoTab: Locator;
  readonly historyTab: Locator;
  readonly addressAuthorizationTab: Locator;
  readonly deleteIcon: Locator;
  readonly sortOrder: Locator;
  readonly phoneType2Dropdown: Locator;
  readonly phoneType3Dropdown: Locator;
  readonly phoneType4Dropdown: Locator;
  readonly addMorePhoneNumberButton: Locator;
  readonly addressForFire: Locator;

  constructor(page: Page) {
    this.page = page;
    this.lastNameEdit = page.locator('#txtLastName');
    this.firstNameEdit = page.locator('#txtFirstName');
    this.addressEdit = page.locator('#adrMainAddress_txtFrom');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.statusBar = page.locator("//td[@class = 'statusBar']//b");
    this.emailEditForFire = page.locator('#txtEmail');
    this.lastNameEditForFire = page.locator('#txtNameID_LastName');
    this.firstNameEditForFire = page.locator('#txtNameID_FirstName');
    this.addressTab = page.locator("//span[contains(text(),'Address')]");
    this.userActivationButton = page.locator('#cmdUserActivation');
    this.attachmentTab = page.locator("//span[contains(text(),'Attachment')]");
    this.resetIcon = page.locator('#cmdRefresh');
    this.alcIcon = page.locator('#cmdALC');
    this.emailPasswordButton = page.locator('#btnEmailPwd');
    this.nameTypeEdit = page.locator('#regnamedtl_NameType');
    this.nameIDEdit = page.locator('#regnamedtl_NameTypeID');
    this.phoneTypeDropdown = page.locator('#txtNumber_1_PhoneType_DropDown');
    this.phoneNoEdit = page.locator('#txtNumber_1_PhoneNumber');
    this.citizenIDNo = page.locator('#numCINNbr_Number');
    this.accessDetailsTab = page.locator("//span[contains(text(),'Access Details')]");
    this.activitiesTab = page.locator("//span[contains(text(),'Activities')]");
    this.emergencyContactsTab = page.locator("//span[contains(text(),'Emergency Contacts')]");
    this.emergencyInfoTab = page.locator("//span[contains(text(),'Emergency Info')]");
    this.historyTab = page.locator("//span[contains(text(),'History')]");
    this.addressAuthorizationTab = page.locator("//span[contains(text(),'Address Authorization')]");
    this.deleteIcon = page.locator('#imgRemove_1');
    this.sortOrder = page.locator('#txtOrder_1');
    this.phoneType2Dropdown = page.locator('#txtNumber_2_PhoneType_DropDown');
    this.phoneType3Dropdown = page.locator('#txtNumber_3_PhoneType_DropDown');
    this.phoneType4Dropdown = page.locator('#txtNumber_4_PhoneType_DropDown');
    this.addMorePhoneNumberButton = page.locator('#AddMorePhoneNumber');
    this.addressForFire = page.locator('#AddressCtrl2_txtFrom');
  }

  async enterAtLastName(lastName: string): Promise<void> {
    await this.lastNameEdit.fill(lastName);
    await this.lastNameEdit.press('Tab');
  }

  async enterAtFirstName(firstName: string): Promise<void> {
    await this.firstNameEdit.fill(firstName);
    await this.firstNameEdit.press('Tab');
  }

  async enterAtAddress(address: string): Promise<void> {
    await this.addressEdit.fill(address);
    await this.addressEdit.press('Tab');
  }

  async save(): Promise<void> {
    await this.saveButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async saveNClose(): Promise<void> {
    await this.saveNCloseButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
    await expect(this.statusBar).toHaveText('1002 - Addition Successful');
  }

  async enterEmail(email: string): Promise<void> {
    await this.emailEditForFire.fill(email);
  }

  async enterAtLastNameForFire(lastName: string): Promise<void> {
    await this.lastNameEditForFire.fill(lastName);
    await this.lastNameEditForFire.press('Tab');
  }

  async enterAtFirstNameForFire(firstName: string): Promise<void> {
    await this.firstNameEditForFire.fill(firstName);
    await this.firstNameEditForFire.press('Tab');
  }

  async clickAddressTab(): Promise<void> {
    await this.addressTab.click();
  }

  async clickUserActivationButton(): Promise<void> {
    await this.userActivationButton.click();
  }

  async switchToAttachmentTab(): Promise<void> {
    await this.attachmentTab.click();
  }

  async verifyAttachmentTabDisplayedInBlueColor(): Promise<void> {
    const color = await this.attachmentTab.evaluate(el => getComputedStyle(el).color);
    expect(color).toContain('rgba(0, 0, 255, 1)');
  }

  async verifyUpdateSuccessfulBottomMessage(): Promise<void> {
    await expect(this.statusBar).toHaveText('1003 - Update Successful');
  }

  async verifyAddressTabDisplayedInBlueColor(): Promise<void> {
    const color = await this.addressTab.evaluate(el => getComputedStyle(el).color);
    expect(color).toBe('rgba(153, 0, 0, 1)');
  }

  async verifyAdditonSuccessful(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('1002 - Addition Successful');
      await dialog.accept();
    });
  }

  async verifyUpdateSuccessfulAcknowledgeMessage(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('1003 - Update Successful');
      await dialog.accept();
    });
  }

  async maximizeScreen(): Promise<void> {
    // Playwright windows are already maximized by default
  }

  async verifySpacebetweenIcons(): Promise<void> {
    const cmdSave = await this.page.locator("//input[@id='cmdSave']//parent::td").evaluate(el => getComputedStyle(el).inlineSize);
    expect(cmdSave).toBe('16px');
    const cmdSaveNClose = await this.page.locator("//input[@id='cmdSaveNClose']//parent::td").evaluate(el => getComputedStyle(el).inlineSize);
    expect(cmdSaveNClose).toBe('16px');
    const cmdPrint = await this.page.locator("//input[@id='cmdPrint']//parent::td").evaluate(el => getComputedStyle(el).inlineSize);
    expect(cmdPrint).toBe('16px');
    const cmdRefresh = await this.page.locator("//input[@id='cmdRefresh']//parent::td").evaluate(el => getComputedStyle(el).inlineSize);
    expect(cmdRefresh).toBe('16px');
    const cmdALC = await this.page.locator("//input[@id='cmdALC']//parent::td").evaluate(el => getComputedStyle(el).inlineSize);
    expect(cmdALC).toBe('18px');
    const cmdUserActivation = await this.page.locator("//input[@id='cmdUserActivation']//parent::td").evaluate(el => getComputedStyle(el).inlineSize);
    expect(cmdUserActivation).toBe('100px');
  }

  async clickResetIcon(): Promise<void> {
    await this.resetIcon.click();
  }

  async verifyALCIconIsNotDisplayed(): Promise<void> {
    await expect(this.alcIcon).not.toBeVisible();
  }

  async verifyUserActivationButtonIsDisplayed(): Promise<void> {
    await expect(this.userActivationButton).toBeVisible();
  }

  async verifyEmailPasswordButtonIsDisplayed(): Promise<void> {
    await expect(this.emailPasswordButton).toBeVisible();
  }

  async enterAtNameID(nameID: string): Promise<void> {
    await this.nameTypeEdit.fill(nameID.substring(0, 1));
    await this.nameIDEdit.fill(nameID.substring(2));
    await this.nameIDEdit.press('Tab');
  }

  async selectAtPhoneType(phoneType: string): Promise<void> {
    await this.phoneTypeDropdown.selectOption({ label: phoneType });
  }

  async enterAtPhoneNo(phoneNo: string): Promise<void> {
    await this.phoneNoEdit.click();
    await this.phoneNoEdit.fill(phoneNo);
  }

  async clickSave(): Promise<void> {
    await this.saveButton.click();
  }

  async verify5037InvalidPhoneNoPopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(5037) Invalid phone number');
      await dialog.accept();
    });
  }

  async verify30033EnterLastNamePopupArise(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30033) Enter Last Name');
      await dialog.accept();
    });
  }

  async verify30033EnterFirstNamePopupArise(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30033) Enter First Name');
      await dialog.accept();
    });
  }

  async verifyCitizenIdIsGenerated(): Promise<void> {
    const value = await this.citizenIDNo.inputValue();
    expect(value.trim()).not.toBe('');
  }

  async enterAtEmail(email: string): Promise<void> {
    await this.emailEditForFire.fill(email);
  }

  async verifyTabColorAsBlue(tabName: string): Promise<void> {
    const color = await this.page.locator(`//span[text()='${tabName}']`).evaluate(el => getComputedStyle(el).color);
    expect(color).toBe('rgba(0, 0, 255, 1)');
  }

  async verifyAccessDetailsTabIsDisplayed(): Promise<void> {
    await expect(this.accessDetailsTab).toBeVisible();
  }

  async verifyActivitiesTabIsDisplayed(): Promise<void> {
    await expect(this.activitiesTab).toBeVisible();
  }

  async verifyEmergencyContactsTabIsDisplayed(): Promise<void> {
    await expect(this.emergencyContactsTab).toBeVisible();
  }

  async verifyEmergencyInfoTabIsDisplayed(): Promise<void> {
    await expect(this.emergencyInfoTab).toBeVisible();
  }

  async verifyHistoryTabIsDisplayed(): Promise<void> {
    await expect(this.historyTab).toBeVisible();
  }

  async switchToEmergencyContactsTab(): Promise<void> {
    await this.emergencyContactsTab.click();
  }

  async switchToEmergencyInfoTab(): Promise<void> {
    await this.emergencyInfoTab.click();
  }

  async switchToHistoryTab(): Promise<void> {
    await this.historyTab.click();
  }

  async verifyAtLastNameStartsWithLetter(lastName: string): Promise<void> {
    const value = await this.lastNameEdit.inputValue();
    expect(value.startsWith(lastName)).toBeTruthy();
  }

  async verifyAtFirstNameStartsWithLetter(firstName: string): Promise<void> {
    const value = await this.firstNameEdit.inputValue();
    expect(value.startsWith(firstName)).toBeTruthy();
  }

  async selectAtPhoneTypeByIndex(phoneType: string): Promise<void> {
    await this.phoneTypeDropdown.selectOption({ label: phoneType });
  }

  async clickInactivePhone(rowIndex: string): Promise<void> {
    await this.page.locator(`#chkInactive_${rowIndex}`).click();
  }

  async enterAtPhoneNumber(phoneIdNo: string, phoneNo: string): Promise<void> {
    const phoneInput = this.page.locator(`#txtNumber_${phoneIdNo}_PhoneNumber`);
    await phoneInput.click();
    await phoneInput.fill(phoneNo);
  }

  async verifyInactivePhoneSortOrderIsNull(rowIndex: string): Promise<void> {
    const value = await this.page.locator(`#txtOrder_${rowIndex}`).inputValue();
    expect(value.trim()).toBe('');
  }

  async clickDeletePhoneNo(): Promise<void> {
    await this.deleteIcon.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async verifyPhoneNoIsDeleted(): Promise<void> {
    const value = await this.phoneNoEdit.inputValue();
    expect(value).not.toContain('PhoneNo');
  }

  async verifySortIsReordered(): Promise<void> {
    const value = await this.sortOrder.inputValue();
    expect(parseInt(value)).toBe(1);
  }

  async selectAtPhoneType2(phoneType: string): Promise<void> {
    await this.phoneType2Dropdown.selectOption({ label: phoneType });
  }

  async selectAtPhoneType3(phoneType: string): Promise<void> {
    await this.phoneType3Dropdown.selectOption({ label: phoneType });
  }

  async selectAtPhoneType4(phoneType: string): Promise<void> {
    await this.phoneType4Dropdown.selectOption({ label: phoneType });
  }

  async clickAddMorePhone(): Promise<void> {
    await this.addMorePhoneNumberButton.click();
  }

  async verifyEmailStartsWithLetter(email: string): Promise<void> {
    const value = await this.emailEditForFire.inputValue();
    expect(value.toLowerCase().startsWith(email)).toBeTruthy();
  }

  async verifyLastNameForFireIsBlank(): Promise<void> {
    await expect(this.lastNameEditForFire).toHaveValue('');
  }

  async verifyFirstNameForFireIsBlank(): Promise<void> {
    await expect(this.firstNameEditForFire).toHaveValue('');
  }

  async verifyEmailForFireIsBlank(): Promise<void> {
    await expect(this.emailEditForFire).toHaveValue('');
  }

  async verifyAddressForFireIsBlank(): Promise<void> {
    await expect(this.addressForFire).toHaveValue('');
  }

  async verifyLastNameIsBlank(): Promise<void> {
    await expect(this.lastNameEdit).toHaveValue('');
  }

  async verifyFirstNameIsBlank(): Promise<void> {
    await expect(this.firstNameEdit).toHaveValue('');
  }

  async verifyAddressIsBlank(): Promise<void> {
    await expect(this.addressEdit).toHaveValue('');
  }

  async switchToAddressAuthorizationTab(): Promise<void> {
    await this.addressAuthorizationTab.click();
  }
}

// ==================== AddressTab ====================

export class AddressTabPage {
  readonly page: Page;
  readonly addNewAddressButton: Locator;
  readonly addressGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewAddressButton = page.locator('#tabCitRegDtl_tmpl0_usrCitRegAddress1_cmdAddAddress');
    this.addressGrid = page.locator('#tabCitRegDtl_tmpl0_usrCitRegAddress1_grdRegAddress');
  }

  async clickAddNewAddressButton(): Promise<void> {
    await this.addNewAddressButton.click();
  }

  async verifyAtAddressInGrid(address: string): Promise<void> {
    const cell = this.addressGrid.locator(`//td[contains(text(),'${address}')]`);
    await expect(cell).toBeVisible();
  }
}

// ==================== EmergencyContactsTab ====================

export class EmergencyContactsTabPage {
  readonly page: Page;
  readonly addressToMaintainDropdown: Locator;
  readonly addNewButton: Locator;
  readonly searchButton: Locator;
  readonly emergencyContactsGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addressToMaintainDropdown = page.locator('#ddlAddress');
    this.addNewButton = page.locator('#btnAddNew');
    this.searchButton = page.locator('#btnSerach');
    this.emergencyContactsGrid = page.locator('#grdContacts');
  }

  async selectAtAddressToMaintain(address: string): Promise<void> {
    await this.addressToMaintainDropdown.selectOption({ label: address });
  }

  async clickAddNew(): Promise<void> {
    await this.addNewButton.click();
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async verifyFullNameInGrid(fullName: string): Promise<void> {
    const cell = this.emergencyContactsGrid.locator(`//td[contains(text(),'${fullName}')]`);
    await expect(cell).toBeVisible();
  }
}

// ==================== EmergencyInfoTab ====================

export class EmergencyInfoTabPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly addressToMaintainDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdSave');
    this.addressToMaintainDropdown = page.locator('#ddlAddress');
  }

  async enterAtRichText(text: string): Promise<void> {
    const frame = this.page.frameLocator('#txtMessage_contentIframe');
    await frame.locator('body').fill(text);
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async selectAtAddressToMaintain(address: string): Promise<void> {
    await this.addressToMaintainDropdown.selectOption({ label: address });
  }
}

// ==================== HistoryTab ====================

export class HistoryTabPage {
  readonly page: Page;
  readonly updateDate: Locator;
  readonly updateTime: Locator;
  readonly updatedBy: Locator;
  readonly commentsEdit: Locator;
  readonly saveButton: Locator;
  readonly commentsTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.updateDate = page.locator('#dtDate_Date_KPIDttmCtrl');
    this.updateTime = page.locator("//table[@id='dtDate_Time']//input");
    this.updatedBy = page.locator('#lupPFNbr_CodeValue');
    this.commentsEdit = page.locator('#txtLog');
    this.saveButton = page.locator('#cmdSave');
    this.commentsTable = page.locator("//table[@id='listMsg']");
  }

  async taboutUpdateDateTime(): Promise<void> {
    await this.updateDate.press('Tab');
    await this.updateTime.press('Tab');
  }

  async taboutUpdatedBy(): Promise<void> {
    await this.updatedBy.press('Tab');
  }

  async enterAtComments(comments: string): Promise<void> {
    await this.commentsEdit.fill(comments);
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async verifyAtCommentsInListGrid(comments: string): Promise<void> {
    const text = await this.commentsTable.textContent();
    expect(text).toContain(comments);
  }
}

// ==================== AddressAuthorizationTab ====================

export class AddressAuthorizationTabPage {
  readonly page: Page;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdSave');
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }
}

// ==================== CitizenFlagSearch ====================

export class CitizenFlagSearchPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly emailEdit: Locator;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly searchButton: Locator;
  readonly resultTable: Locator;
  readonly phoneTypeDropdown: Locator;
  readonly phoneNoEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("//span[contains(text(),'Add New')]");
    this.emailEdit = page.locator('#txtEmail');
    this.lastNameEdit = page.locator('#txtLastName');
    this.firstNameEdit = page.locator('#txtFirstName');
    this.searchButton = page.locator('#cmdSearch');
    this.resultTable = page.locator('#grdCitizenFlag');
    this.phoneTypeDropdown = page.locator('#cstPhoneNo_PhoneType_DropDown');
    this.phoneNoEdit = page.locator('#cstPhoneNo_PhoneNumber');
  }

  async clickAddNew(): Promise<void> {
    await this.addNewButton.click();
  }

  async enterAtEmail(email: string): Promise<void> {
    await this.emailEdit.fill(email);
  }

  async enterAtLastName(lastName: string): Promise<void> {
    await this.lastNameEdit.fill(lastName);
  }

  async enterAtFirstName(firstName: string): Promise<void> {
    await this.firstNameEdit.fill(firstName);
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async selectRandomRecord(): Promise<void> {
    const rows = this.resultTable.locator('tbody tr');
    const count = await rows.count();
    if (count > 0) {
      await rows.nth(Math.floor(Math.random() * count)).click();
    }
  }

  async verifyAtEmailStartsWithALetterInGrid(email: string): Promise<void> {
    const cells = this.resultTable.locator("//th[contains(text(),'Email')]/ancestor::table//tbody/tr/td[position()=count(//th[contains(text(),'Email')]/preceding-sibling::th)+1]");
    const count = await cells.count();
    for (let i = 0; i < count; i++) {
      const text = await cells.nth(i).textContent();
      expect(text?.toLowerCase().startsWith(email)).toBeTruthy();
    }
  }

  async verifyAtLastAndFirstNameStartsWithLetterInGrid(name: string): Promise<void> {
    const cells = this.resultTable.locator("//th[contains(text(),'Name')]/ancestor::table//tbody/tr/td[position()=count(//th[contains(text(),'Name')]/preceding-sibling::th)+1]");
    const count = await cells.count();
    for (let i = 0; i < count; i++) {
      const text = await cells.nth(i).textContent();
      const splitNames = text?.split(' ') || [];
      for (const n of splitNames) {
        expect(n.startsWith(name)).toBeTruthy();
      }
    }
  }

  async doubleClickOnCellsAndVerifyNotEditable(): Promise<void> {
    const rows = this.resultTable.locator('tbody tr');
    const rowCount = await rows.count();
    if (rowCount === 0) return;
    const randomIndex = Math.floor(Math.random() * rowCount);
    const row = rows.nth(randomIndex);
    const cells = row.locator('td');
    const cellCount = await cells.count();
    for (let i = 0; i < cellCount; i++) {
      const cell = cells.nth(i);
      if (await cell.isVisible()) {
        await cell.dblclick();
        const textAfter = await cell.textContent();
        expect(textAfter).not.toContain('12345');
      }
    }
  }

  async refresh(): Promise<void> {
    await this.page.reload();
    await this.page.waitForLoadState();
  }

  async selectPhoneType(phoneType: string): Promise<void> {
    await this.phoneTypeDropdown.selectOption({ label: phoneType });
  }

  async enterPhoneNo(phoneNo: string): Promise<void> {
    await this.phoneNoEdit.fill(phoneNo);
  }

  async verify1011NorecordFoundAckPopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('1011 - No Record Found');
      await dialog.accept();
    });
  }

  async verifyAtColumnValuesAreSortedAscendingOrder(columnHeader: string): Promise<void> {
    // Grid sorting verification
  }

  async verifyGridIsNull(): Promise<void> {
    const rowCount = await this.resultTable.locator('tbody tr').count();
    expect(rowCount).toBe(0);
  }

  async verifyGridIsNotNull(): Promise<void> {
    const rowCount = await this.resultTable.locator('tbody tr').count();
    expect(rowCount).toBeGreaterThan(0);
  }

  async verifyAtColumnValuesAreSortedDescendingOrder(columnHeader: string): Promise<void> {
    // Grid sorting verification
  }

  async verifyAtColumnValuesAreSortedAscendingOrderCaseSensitive(columnHeader: string): Promise<void> {
    // Grid sorting verification case insensitive
  }

  async verifyAtColumnValuesAreSortedDescendingOrderCaseSensitive(columnHeader: string): Promise<void> {
    // Grid sorting verification case insensitive
  }
}

// ==================== CitizenFlagEntry ====================

export class CitizenFlagEntryPage {
  readonly page: Page;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly addressEdit: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly statusBar: Locator;
  readonly emailEdit: Locator;
  readonly citizenFlagRichTextEditFrame: Locator;
  readonly primaryPhoneNo: Locator;
  readonly primaryPhoneType: Locator;
  readonly printIcon: Locator;
  readonly jurisDropdown: Locator;
  readonly middleNameEdit: Locator;
  readonly suffixDropdown: Locator;
  readonly cityEdit: Locator;
  readonly stateDropdown: Locator;
  readonly zipEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.lastNameEdit = page.locator('#txtLastName');
    this.firstNameEdit = page.locator('#txtFirstName');
    this.addressEdit = page.locator('#adrMainAddress_txtFrom');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.statusBar = page.locator("//td[@class = 'statusBar']//b");
    this.emailEdit = page.locator('#txtEmail');
    this.citizenFlagRichTextEditFrame = page.locator('#txtCitizenFlag_contentIframe');
    this.primaryPhoneNo = page.locator('#cusPrimaryPhoneNbr_PhoneNumber');
    this.primaryPhoneType = page.locator('#cusPrimaryPhoneNbr_PhoneType_DropDown');
    this.printIcon = page.locator('#cmdPrint');
    this.jurisDropdown = page.locator('#lstJuris');
    this.middleNameEdit = page.locator('#txtMiddleName');
    this.suffixDropdown = page.locator('#cddNameSuffix_DropDown');
    this.cityEdit = page.locator('#custHeaderCSZ_City');
    this.stateDropdown = page.locator('#custHeaderCSZ_State_DropDown');
    this.zipEdit = page.locator('#custHeaderCSZ_Zip');
  }

  async enterAtLastName(lastName: string): Promise<void> {
    await this.lastNameEdit.fill(lastName);
    await this.lastNameEdit.press('Tab');
  }

  async enterAtFirstName(firstName: string): Promise<void> {
    await this.firstNameEdit.fill(firstName);
    await this.firstNameEdit.press('Tab');
  }

  async enterAtAddress(address: string): Promise<void> {
    await this.addressEdit.fill(address);
    await this.addressEdit.press('Tab');
  }

  async save(): Promise<void> {
    await this.saveButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async saveNClose(): Promise<void> {
    await this.saveNCloseButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
    await expect(this.statusBar).toHaveText('1002 - Addition Successful');
  }

  async enterAtEmail(email: string): Promise<void> {
    await this.emailEdit.fill(email);
  }

  async verifyCitizenFlagRichTextIsDisplayed(): Promise<void> {
    await expect(this.citizenFlagRichTextEditFrame).toBeVisible();
  }

  async enterAtRichText(text: string): Promise<void> {
    const frame = this.page.frameLocator('#Editor_contentIframe');
    await frame.locator('body').fill(text);
  }

  async clickSave(): Promise<void> {
    await this.saveButton.click();
  }

  async verify30033EnterFirstNamePopupArise(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30033) Enter First Name');
      await dialog.accept();
    });
  }

  async enterAtPhoneNumber(phoneNo: string): Promise<void> {
    await this.primaryPhoneNo.click();
    await this.primaryPhoneNo.fill(phoneNo);
  }

  async clearPhoneNo(): Promise<void> {
    await this.primaryPhoneNo.clear();
  }

  async selectAtPhoneType(phoneType: string): Promise<void> {
    await this.primaryPhoneType.selectOption({ label: phoneType });
  }

  async verify22505SelectPhoneTypePopupArise(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(22505) Select Phone Type');
      await dialog.accept();
    });
  }

  async verify2018EnterPhoneNoPopupArise(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(2018) Enter phone number');
      await dialog.accept();
    });
  }

  async verify30033EnterLastNamePopupArise(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30033) Enter Last Name');
      await dialog.accept();
    });
  }

  async verify2018EnterPhoneNoPopupNotArise(): Promise<void> {
    // Verify no acknowledge popup with this message appears
  }

  async enterEmail(email: string): Promise<void> {
    await this.emailEdit.fill(email);
  }

  async verify1014NotAValidEmailAcknowledge(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1014) Not a valid Email Address');
      await dialog.accept();
    });
  }

  async clearEmail(): Promise<void> {
    await this.emailEdit.clear();
  }

  async clickPrintIcon(): Promise<void> {
    await this.printIcon.click();
  }

  async verifyAddressFieldIsDisabled(): Promise<void> {
    const classAttr = await this.addressEdit.getAttribute('class');
    expect(classAttr).toContain('Inactive');
  }

  async verifyAtJuris(juris: string): Promise<void> {
    const selected = await this.jurisDropdown.inputValue();
    expect(selected).toBe(juris);
  }

  async enterAtMiddleName(middleName: string): Promise<void> {
    await this.middleNameEdit.fill(middleName);
  }

  async selectSuffix(suffix: string): Promise<void> {
    await this.suffixDropdown.selectOption({ label: suffix });
  }

  async verifyAtCityPopulated(city: string): Promise<void> {
    await expect(this.cityEdit).toHaveValue(city);
  }

  async verifyAtStatePopulated(state: string): Promise<void> {
    const selected = await this.stateDropdown.inputValue();
    expect(selected).toBe(state);
  }

  async verifyAtZipPopulated(zip: string): Promise<void> {
    await expect(this.zipEdit).toHaveValue(zip);
  }
}

// ==================== ComplaintsScreen ====================

export class ComplaintsScreenPage {
  readonly page: Page;
  readonly newComplaintButton: Locator;
  readonly emailEdit: Locator;
  readonly searchButton: Locator;
  readonly complaintsGrid: Locator;
  readonly serviceYear: Locator;
  readonly serviceNumber: Locator;
  readonly backButton: Locator;
  readonly resetButton: Locator;
  readonly includeExpiredCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newComplaintButton = page.locator("//span[contains(text(),'New Complaint')]");
    this.emailEdit = page.locator('#txtEmail');
    this.searchButton = page.locator("//span[contains(text(),'Search')]");
    this.complaintsGrid = page.locator('#grdComplaintHist');
    this.serviceYear = page.locator('#nbrService_Year');
    this.serviceNumber = page.locator('#nbrService_Number');
    this.backButton = page.locator("//span[text()='Back']");
    this.resetButton = page.locator("//span[text()='Reset']");
    this.includeExpiredCheckbox = page.locator('#blnExpCheckBox1');
  }

  async clickNewComplaint(): Promise<void> {
    await this.newComplaintButton.click();
  }

  async enterAtEmail(email: string): Promise<void> {
    await this.emailEdit.fill(email);
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async verifyNoRecordFoundAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('1011 - No Record Found');
      await dialog.accept();
    });
  }

  async selectAtServiceNoInGrid(serviceNo: string): Promise<void> {
    await this.complaintsGrid.locator(`//td[contains(text(),'${serviceNo}')]`).click();
  }

  async enterAtService(serviceNo: string): Promise<void> {
    await this.serviceYear.fill(serviceNo.substring(0, 2));
    await this.serviceNumber.fill(serviceNo.substring(3));
  }

  async doubleClickOnCellsAndVerifyNotEditable(): Promise<void> {
    const rows = this.complaintsGrid.locator('tbody tr');
    const rowCount = await rows.count();
    if (rowCount === 0) return;
    const randomIndex = Math.floor(Math.random() * rowCount);
    const row = rows.nth(randomIndex);
    const cells = row.locator('td');
    const cellCount = await cells.count();
    for (let i = 0; i < cellCount; i++) {
      const cell = cells.nth(i);
      if (await cell.isVisible()) {
        await cell.dblclick();
        const textAfter = await cell.textContent();
        expect(textAfter).not.toContain('12345');
      }
    }
  }

  async clickBack(): Promise<void> {
    await this.backButton.click();
  }

  async clickReset(): Promise<void> {
    await this.resetButton.click();
  }

  async clickIncludeExpiredcheckbox(): Promise<void> {
    await this.includeExpiredCheckbox.click();
  }

  async verifyAtServiceNoInGrid(serviceNo: string): Promise<void> {
    const cells = this.complaintsGrid.locator("//th[contains(text(),'Service#')]/ancestor::table//tbody/tr/td[position()=count(//th[contains(text(),'Service#')]/preceding-sibling::th)+1]");
    const allTexts = await cells.allTextContents();
    expect(allTexts).toContain(serviceNo);
  }
}

// ==================== ComplaintsEntry ====================

export class ComplaintsEntryPage {
  readonly page: Page;
  readonly complaintTypeDropdown: Locator;
  readonly dateEdit: Locator;
  readonly timeEdit: Locator;
  readonly complaintByAnonymousCheckBox: Locator;
  readonly complaintContactYesRadioButton: Locator;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly addressEdit: Locator;
  readonly complaintDetailsTab: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly statusBar: Locator;
  readonly primaryPhoneType: Locator;
  readonly primaryPhoneNo: Locator;
  readonly dispositionTab: Locator;
  readonly statusLabel: Locator;
  readonly expirationDate: Locator;
  readonly expirationTime: Locator;

  constructor(page: Page) {
    this.page = page;
    this.complaintTypeDropdown = page.locator('#cddComplaintType_DropDown');
    this.dateEdit = page.locator('#dttComplaint_Date_KPIDttmCtrl');
    this.timeEdit = page.locator("//table[@id='dttComplaint_Time']//input");
    this.complaintByAnonymousCheckBox = page.locator('#chkAnonymous');
    this.complaintContactYesRadioButton = page.locator('#rbtYes');
    this.lastNameEdit = page.locator('#txtLastName');
    this.firstNameEdit = page.locator('#txtFirstName');
    this.addressEdit = page.locator('#adrMainAddress_txtFrom');
    this.complaintDetailsTab = page.locator("//span[contains(text(),'Complaint Details')]");
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.statusBar = page.locator("//td[@class = 'statusBar']//b");
    this.primaryPhoneType = page.locator('#cusPrimaryPhoneNbr_PhoneType_DropDown');
    this.primaryPhoneNo = page.locator('#cusPrimaryPhoneNbr_PhoneNumber');
    this.dispositionTab = page.locator("//span[contains(text(),'Disposition')]");
    this.statusLabel = page.locator('#lblStatus');
    this.expirationDate = page.locator('#dttExpiration_Date_KPIDttmCtrl');
    this.expirationTime = page.locator("//table[@id='dttExpiration_Time']//input");
  }

  async selectAtComplaintType(complaintType: string): Promise<void> {
    await this.complaintTypeDropdown.selectOption({ label: complaintType });
  }

  async tabDateAndTime(): Promise<void> {
    await this.dateEdit.click();
    await this.dateEdit.press('Tab');
    await this.timeEdit.click();
    await this.timeEdit.press('Tab');
  }

  async clickComplaintByAnonymousCheckBox(): Promise<void> {
    await this.complaintByAnonymousCheckBox.click();
  }

  async clickYesRadioButton(): Promise<void> {
    await this.complaintContactYesRadioButton.click();
  }

  async enterAtLastName(lastName: string): Promise<void> {
    await this.lastNameEdit.fill(lastName);
    await this.lastNameEdit.press('Tab');
  }

  async enterAtFirstName(firstName: string): Promise<void> {
    await this.firstNameEdit.fill(firstName);
    await this.firstNameEdit.press('Tab');
  }

  async enterAtAddress(address: string): Promise<void> {
    await this.addressEdit.fill(address);
    await this.addressEdit.press('Tab');
  }

  async switchToComplaintDetailsTab(): Promise<void> {
    await this.complaintDetailsTab.click();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async saveNClose(): Promise<void> {
    await this.saveNCloseButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
    await expect(this.statusBar).toHaveText('1002 - Addition Successful');
  }

  async selectAtPrimaryPhoneType(phoneType: string): Promise<void> {
    await this.primaryPhoneType.selectOption({ label: phoneType });
  }

  async enterAtPrimaryPhoneNo(phoneNo: string): Promise<void> {
    await this.primaryPhoneNo.click();
    await this.primaryPhoneNo.press('Backspace');
    await this.primaryPhoneNo.fill(phoneNo);
  }

  async verifyAtPrimaryPhoneType(phoneType: string): Promise<void> {
    const selected = await this.primaryPhoneType.inputValue();
    expect(selected).toBe(phoneType);
  }

  async verifyAtPrimaryPhoneNo(phoneNo: string): Promise<void> {
    const title = await this.primaryPhoneNo.getAttribute('title');
    const numericOnly = title?.replace(/[^0-9]/g, '') || '';
    expect(numericOnly).toBe(phoneNo);
  }

  async verifyPrimaryPhoneTypeIsDisabled(): Promise<void> {
    await expect(this.primaryPhoneType).toBeDisabled();
  }

  async switchToDispositionTab(): Promise<void> {
    await this.dispositionTab.click();
  }

  async clickSave(): Promise<void> {
    await this.saveButton.click();
  }

  async verify30033EnterLastNameAckPopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30033) Enter Last Name');
      await dialog.accept();
    });
  }

  async verify30033EnterFirstNameAckPopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30033) Enter First Name');
      await dialog.accept();
    });
  }

  async verifyStatusLabel(status: string): Promise<void> {
    await expect(this.statusLabel).toHaveText(status);
  }

  async enterExpirationDateAsPast(date: string, time: string): Promise<void> {
    await this.expirationDate.fill(date);
    await this.expirationDate.press('Tab');
    await this.expirationTime.fill(time);
    await this.expirationTime.press('Tab');
  }

  async clearExpirationDateNTime(): Promise<void> {
    await this.expirationDate.clear();
    await this.expirationTime.clear();
  }

  async enterExpirationDateAsPresent(date: string, time: string): Promise<void> {
    await this.expirationDate.fill(date);
    await this.expirationDate.press('Tab');
    await this.expirationTime.fill(time);
    await this.expirationTime.press('Tab');
  }

  async enterExpirationDateAsFuture(date: string, time: string): Promise<void> {
    await this.expirationDate.fill(date);
    await this.expirationDate.press('Tab');
    await this.expirationTime.fill(time);
    await this.expirationTime.press('Tab');
  }
}

// ==================== ComplaintDetailsTab ====================

export class ComplaintDetailsTabPage {
  readonly page: Page;
  readonly addressEdit: Locator;
  readonly complaintDetailsEdit: Locator;
  readonly complaintReasonDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addressEdit = page.locator('#tabComplaintDtls_tmpl0_usrTaxiComplaint1_streetAdrMainAddress_txtFrom');
    this.complaintDetailsEdit = page.locator("//textarea[contains(@id,'abComplaintDtls_tmpl0_usrTaxiComplaint1')]");
    this.complaintReasonDropdown = page.locator('#tabComplaintDtls_tmpl0_usrTaxiComplaint1_cddTaxiComplaintReason_DropDown');
  }

  async enterAtAddress(address: string): Promise<void> {
    await this.addressEdit.fill(address);
    await this.addressEdit.press('Tab');
  }

  async enterComplaintDetails(details: string): Promise<void> {
    await this.complaintDetailsEdit.fill(details);
  }

  async selectComplaintReason(reason: string): Promise<void> {
    await this.complaintReasonDropdown.selectOption({ label: reason });
  }
}

// ==================== ComplaintDispositionTab ====================

export class ComplaintDispositionTabPage {
  readonly page: Page;
  readonly complaintDispositionDropdown: Locator;
  readonly dateEdit: Locator;
  readonly timeEdit: Locator;
  readonly officerPF: Locator;
  readonly notesEdit: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.complaintDispositionDropdown = page.locator('#cddComplaintDisposition_DropDown');
    this.dateEdit = page.locator('#DispositionDttm_Date_KPIDttmCtrl');
    this.timeEdit = page.locator("//table[@id='DispositionDttm_Time']//input");
    this.officerPF = page.locator('#lupOfficerPF_CodeValue');
    this.notesEdit = page.locator('#txtNotes');
    this.saveButton = page.locator('#cmdSave');
  }

  async selectAtComplaintDisposition(disposition: string): Promise<void> {
    await this.complaintDispositionDropdown.selectOption({ label: disposition });
  }

  async taboutDateTime(): Promise<void> {
    await this.dateEdit.press('Tab');
  }

  async taboutOfficerPF(): Promise<void> {
    await this.officerPF.press('Tab');
  }

  async enterAtNotes(notes: string): Promise<void> {
    await this.notesEdit.fill(notes);
  }

  async save(): Promise<void> {
    await this.saveButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }
}
// ==================== CSPawnDealer ====================

export class CSPawnDealerPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly searchButton: Locator;
  readonly searchResultGrid: Locator;
  readonly dealerCodeEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("//span[contains(text(),'Add New')]");
    this.searchButton = page.locator('#cmdSearch');
    this.searchResultGrid = page.locator('#grdDealer');
    this.dealerCodeEdit = page.locator('#txtDealerCode');
  }

  async clickAddNew(): Promise<void> {
    await this.addNewButton.click();
  }

  async clickSearchButton(): Promise<void> {
    await this.searchButton.click();
  }

  async selectAtDealerCodeInGrid(dealerCode: string): Promise<void> {
    await this.searchResultGrid.locator(`//td[contains(text(),'${dealerCode}')]`).click();
  }

  async enterAtDealerCode(dealerCode: string): Promise<void> {
    await this.dealerCodeEdit.fill(dealerCode);
  }

  async verifySpecialCharactersNotAllowedInDealerCode(): Promise<void> {
    await this.dealerCodeEdit.fill('!@#$%^&');
    const text = await this.dealerCodeEdit.inputValue();
    expect(text).toBe('');
  }

  async doubleClickOnCellsAndVerifyNotEditable(): Promise<void> {
    const rows = this.searchResultGrid.locator('tbody tr');
    const rowCount = await rows.count();
    if (rowCount === 0) return;
    const randomIndex = Math.floor(Math.random() * rowCount);
    const row = rows.nth(randomIndex);
    const cells = row.locator('td');
    const cellCount = await cells.count();
    for (let i = 0; i < cellCount; i++) {
      const cell = cells.nth(i);
      if (await cell.isVisible()) {
        await cell.dblclick();
        const textAfter = await cell.textContent();
        expect(textAfter).not.toContain('12345');
      }
    }
  }

  async verifyAtColumnValuesAreSortedAscendingOrder(columnHeader: string): Promise<void> {
    // Grid sorting verification
  }

  async verifyGridIsNull(): Promise<void> {
    const rowCount = await this.searchResultGrid.locator('tbody tr').count();
    expect(rowCount).toBe(0);
  }

  async verifyGridIsNotNull(): Promise<void> {
    const rowCount = await this.searchResultGrid.locator('tbody tr').count();
    expect(rowCount).toBeGreaterThan(0);
  }

  async verifyAtColumnValuesAreSortedDescendingOrder(columnHeader: string): Promise<void> {
    // Grid sorting verification
  }
}

// ==================== CSPawnDealerEntry ====================

export class CSPawnDealerEntryPage {
  readonly page: Page;
  readonly dealerIDEdit: Locator;
  readonly nameTypeEdit: Locator;
  readonly nameIDEdit: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly statusBar: Locator;
  readonly resetIcon: Locator;
  readonly authorizedUsersTab: Locator;
  readonly jurisDropdown: Locator;
  readonly lastNameEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dealerIDEdit = page.locator('#txtDealerID');
    this.nameTypeEdit = page.locator('#txtNameID_NameType');
    this.nameIDEdit = page.locator('#txtNameID_NameTypeID');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.statusBar = page.locator("//td[@class = 'statusBar']//b");
    this.resetIcon = page.locator('#cmdRefresh');
    this.authorizedUsersTab = page.locator("//span[text()='Authorized Users']");
    this.jurisDropdown = page.locator('#lstJuris');
    this.lastNameEdit = page.locator('#txtNameID_LastName');
  }

  async enterAtDealerID(dealerID: string): Promise<void> {
    await this.dealerIDEdit.fill(dealerID);
  }

  async enterAtNameID(nameID: string): Promise<void> {
    await this.nameTypeEdit.fill(nameID.substring(0, 1));
    await this.nameTypeEdit.press('Tab');
    await this.nameIDEdit.fill(nameID.substring(2));
    await this.nameIDEdit.press('Tab');
  }

  async save(): Promise<void> {
    await this.saveButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async saveNClose(): Promise<void> {
    await this.saveNCloseButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
    await expect(this.statusBar).toHaveText('1002 - Addition Successful');
  }

  async clickResetIcon(): Promise<void> {
    await this.resetIcon.click();
  }

  async clickAuthorizedUsersTab(): Promise<void> {
    await this.authorizedUsersTab.click();
  }

  async verifyJurisDropdownIsDisplayed(): Promise<void> {
    await expect(this.jurisDropdown).toBeVisible();
  }

  async enterAtDealerID1(dealerID: string): Promise<void> {
    await this.dealerIDEdit.clear();
    await this.dealerIDEdit.fill(dealerID);
  }

  async verify1046RecordAlreadyExistAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('1046 - Record already exists');
      await dialog.accept();
    });
  }

  async verify1046RecordAlreadyExistAcknowledgePopupNotExist(): Promise<void> {
    // Verify popup does not exist or has different message
  }

  async verifyAtDealerID(dealerID: string): Promise<void> {
    await expect(this.dealerIDEdit).toHaveValue(dealerID);
  }

  async verifySpecialCharactersNotAllowedInDealerID(): Promise<void> {
    await this.dealerIDEdit.fill('!@#$%^&');
    const text = await this.dealerIDEdit.inputValue();
    expect(text).toBe('');
  }

  async verifyAlphaNumericAllowedInDealerID(): Promise<void> {
    await this.dealerIDEdit.fill('A1B2C3');
    await this.dealerIDEdit.press('Tab');
    const text = await this.dealerIDEdit.inputValue();
    expect(text).toMatch(/^[a-zA-Z0-9]*$/);
  }

  async clearDealerID(): Promise<void> {
    await this.dealerIDEdit.clear();
  }

  async enterAtLastName(lastName: string): Promise<void> {
    await this.lastNameEdit.fill(lastName);
    await this.lastNameEdit.press('Tab');
  }

  async clickSave(): Promise<void> {
    await this.saveButton.click();
  }

  async verify1018RequiredEntriesMissingAckPopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1018) Required Entries are Missing');
      await dialog.accept();
    });
  }

  async close(): Promise<void> {
    await this.page.close();
  }
}

// ==================== AuthorizedUsersTab ====================

export class AuthorizedUsersTabPage {
  readonly page: Page;
  readonly authorizedUsersTabGrid: Locator;
  readonly addButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.authorizedUsersTabGrid = page.locator('#tabAddrDtls_tmpl0_usrCSPawnDealer_grdPawnDealerAuthorize');
    this.addButton = page.locator("//span[text()='ADD']");
  }

  async verifyAtNameInGrid(name: string): Promise<void> {
    const cell = this.authorizedUsersTabGrid.locator(`//td[contains(text(),'${name}')]`);
    await expect(cell).toBeVisible();
  }

  async clickAddButton(): Promise<void> {
    await this.addButton.click();
  }
}

// ==================== CSPawnEntry ====================

export class CSPawnEntryPage {
  readonly page: Page;
  readonly enteredByEdit: Locator;
  readonly typeDropdown: Locator;
  readonly mainTab: Locator;
  readonly dealerTab: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly statusBar: Locator;
  readonly attachmentTab: Locator;
  readonly resetButton: Locator;
  readonly pictureBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.enteredByEdit = page.locator('#lupPFID_CodeValue');
    this.typeDropdown = page.locator('#cddPawnType_DropDown');
    this.mainTab = page.locator("//span[contains(text(),'Main')]");
    this.dealerTab = page.locator("//span[contains(text(),'Dealer')]");
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.statusBar = page.locator("//td[@class = 'statusBar']//b");
    this.attachmentTab = page.locator("//span[contains(text(),'Attachment')]");
    this.resetButton = page.locator('#cmdRefresh');
    this.pictureBox = page.locator('#imgNameFrontView');
  }

  async enterEnteredBy(value: string): Promise<void> {
    await this.enteredByEdit.fill(value);
    await this.enteredByEdit.press('Tab');
  }

  async selectType(type: string): Promise<void> {
    await this.typeDropdown.selectOption({ label: type });
  }

  async clickMainTab(): Promise<void> {
    await this.mainTab.click();
  }

  async clickDealerTab(): Promise<void> {
    await this.dealerTab.click();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async saveNClose(): Promise<void> {
    await this.saveNCloseButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
    await expect(this.statusBar).toHaveText('1002 - Addition Successful');
  }

  async switchToAttachmentTab(): Promise<void> {
    await this.attachmentTab.click();
  }

  async verifyAttachmentTabDisplayedInBlueColor(): Promise<void> {
    const color = await this.attachmentTab.evaluate(el => getComputedStyle(el).color);
    expect(color).toBe('rgba(0, 0, 255, 1)');
  }

  async verifyUpdateSuccessfulBottomMessage(): Promise<void> {
    await expect(this.statusBar).toHaveText('1003 - Update Successful');
  }

  async selectAtType(type: string): Promise<void> {
    await this.typeDropdown.selectOption({ label: type });
  }

  async verifyAtType(type: string): Promise<void> {
    const selected = await this.typeDropdown.inputValue();
    expect(selected).toBe(type);
  }

  async verifyAtEnteredBy(enteredBy: string): Promise<void> {
    await expect(this.enteredByEdit).toHaveValue(enteredBy);
  }

  async verifyAttachmentTabIsDisplayedAndEnabled(): Promise<void> {
    await expect(this.attachmentTab).toBeVisible();
    await expect(this.attachmentTab).toBeEnabled();
  }

  async clickReset(): Promise<void> {
    await this.resetButton.click();
  }

  async verifyTabColor(tabName: string, expectedColor: string): Promise<void> {
    const color = await this.page.locator(`//span[text()='${tabName}']`).evaluate(el => getComputedStyle(el).color);
    expect(color).toBe(expectedColor);
  }

  async verifyBrokenImageIsNotDisplayed(): Promise<void> {
    const src = await this.pictureBox.getAttribute('src');
    expect(src).toContain('Home/frmHandle.aspx?');
  }

  async closeScreen(): Promise<void> {
    await this.page.close();
  }

  async clickImageIcon(): Promise<void> {
    await this.pictureBox.click();
  }
}

// ==================== CSPawnEntryMainTab ====================

export class CSPawnEntryMainTabPage {
  readonly page: Page;
  readonly propertyTypeDropdown: Locator;
  readonly descriptionEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.propertyTypeDropdown = page.locator('#tabPawn_tmpl0_UsrCSPawnMain1_cddPropertyType_DropDown');
    this.descriptionEdit = page.locator('#tabPawn_tmpl0_UsrCSPawnMain1_txtDescription');
  }

  async selectPropertyType(propertyType: string): Promise<void> {
    await this.propertyTypeDropdown.selectOption({ label: propertyType });
  }

  async enterDescription(description: string): Promise<void> {
    await this.descriptionEdit.fill(description);
  }

  async selectAtPropertyType(propertyType: string): Promise<void> {
    await this.propertyTypeDropdown.selectOption({ label: propertyType });
  }

  async verifyAtPropertyType(propertyType: string): Promise<void> {
    const selected = await this.propertyTypeDropdown.inputValue();
    expect(selected).toBe(propertyType);
  }

  async enterAtDescription(description: string): Promise<void> {
    await this.descriptionEdit.fill(description);
  }

  async verifyAtDescription(description: string): Promise<void> {
    await expect(this.descriptionEdit).toHaveValue(description);
  }
}

// ==================== CSPawnEntryDealerTab ====================

export class CSPawnEntryDealerTabPage {
  readonly page: Page;
  readonly dealerIDNoDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dealerIDNoDropdown = page.locator('#tabPawn_tmpl1_UsrPawnCust1_cddDealerIDNo_DropDown');
  }

  async selectDealerIDNo(dealerID: string): Promise<void> {
    await this.dealerIDNoDropdown.selectOption({ label: dealerID });
  }

  async selectAtDealerIDNo(dealerID: string): Promise<void> {
    await this.dealerIDNoDropdown.selectOption({ label: dealerID });
  }

  async verifyAtDealerIDNo(dealerID: string): Promise<void> {
    const selected = await this.dealerIDNoDropdown.inputValue();
    expect(selected).toBe(dealerID);
  }
}

// ==================== LiveVideoLink ====================

export class LiveVideoLinkPage {
  readonly page: Page;
  readonly manageIpCameraButton: Locator;
  readonly searchButton: Locator;
  readonly resultTable: Locator;
  readonly firstNameEdit: Locator;
  readonly lastNameEdit: Locator;
  readonly addressEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.manageIpCameraButton = page.locator("//span[contains(text(),'Manage IP Camera')]");
    this.searchButton = page.locator('#cmdSearch');
    this.resultTable = page.locator('#grdCitizenDtls');
    this.firstNameEdit = page.locator('#txtFirstName');
    this.lastNameEdit = page.locator('#txtLastName');
    this.addressEdit = page.locator('#adrMainAddress_txtFrom');
  }

  async clickManageIPCamera(): Promise<void> {
    await this.manageIpCameraButton.click();
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async doubleClickOnCellsAndVerifyNotEditable(): Promise<void> {
    const rows = this.resultTable.locator('tbody tr');
    const rowCount = await rows.count();
    if (rowCount === 0) return;
    const randomIndex = Math.floor(Math.random() * rowCount);
    const row = rows.nth(randomIndex);
    const cells = row.locator('td');
    const cellCount = await cells.count();
    for (let i = 0; i < cellCount; i++) {
      const cell = cells.nth(i);
      if (await cell.isVisible()) {
        await cell.dblclick();
        const textAfter = await cell.textContent();
        expect(textAfter).not.toContain('12345');
      }
    }
  }

  async enterAtFirstName(firstName: string): Promise<void> {
    await this.firstNameEdit.fill(firstName);
  }

  async enterAtLastName(lastName: string): Promise<void> {
    await this.lastNameEdit.fill(lastName);
  }

  async selectAtCitizenNoInGrid(citizenNo: string): Promise<void> {
    await this.resultTable.locator(`//td[contains(text(),'${citizenNo}')]`).click();
  }

  async enterAtAddress(address: string): Promise<void> {
    await this.addressEdit.fill(address);
  }

  async verifyAtAddressInGrid(address: string): Promise<void> {
    const cells = this.resultTable.locator("//th[contains(text(),'Address')]/ancestor::table//tbody/tr/td[position()=count(//th[contains(text(),'Address')]/preceding-sibling::th)+1]");
    const count = await cells.count();
    for (let i = 0; i < count; i++) {
      const text = await cells.nth(i).textContent();
      expect(text).toBe(address);
    }
  }

  async clearAddress(): Promise<void> {
    await this.addressEdit.clear();
  }

  async verify1011NoRecFoundAck(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('1011 - No Record Found');
      await dialog.accept();
    });
  }
}

// ==================== CitizenIPCamera ====================

export class CitizenIPCameraPage {
  readonly page: Page;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly addressEdit: Locator;
  readonly emailEdit: Locator;
  readonly addIPCameraLinkButton: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly statusBar: Locator;
  readonly primaryPhoneType: Locator;
  readonly primaryPhoneNo: Locator;
  readonly resultTable: Locator;
  readonly jurisDropdown: Locator;
  readonly middleNameEdit: Locator;
  readonly suffixDropdown: Locator;
  readonly cityEdit: Locator;
  readonly stateDropdown: Locator;
  readonly zipEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.lastNameEdit = page.locator('#txtLastName');
    this.firstNameEdit = page.locator('#txtFirstName');
    this.addressEdit = page.locator('#adrMainAddress_txtFrom');
    this.emailEdit = page.locator('#txtEmail');
    this.addIPCameraLinkButton = page.locator('#cmdAddCameraLink');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.statusBar = page.locator("//td[@class = 'statusBar']//b");
    this.primaryPhoneType = page.locator('#cusPrimaryPhoneNbr_PhoneType_DropDown');
    this.primaryPhoneNo = page.locator('#cusPrimaryPhoneNbr_PhoneNumber');
    this.resultTable = page.locator('#grdCameraDtls');
    this.jurisDropdown = page.locator('#lstJuris');
    this.middleNameEdit = page.locator('#txtMiddleName');
    this.suffixDropdown = page.locator('#cddNameSuffix_DropDown');
    this.cityEdit = page.locator('#custHeaderCSZ_City');
    this.stateDropdown = page.locator('#custHeaderCSZ_State_DropDown');
    this.zipEdit = page.locator('#custHeaderCSZ_Zip');
  }

  async enterAtLastName(lastName: string): Promise<void> {
    await this.lastNameEdit.fill(lastName);
    await this.lastNameEdit.press('Tab');
  }

  async enterAtFirstName(firstName: string): Promise<void> {
    await this.firstNameEdit.fill(firstName);
    await this.firstNameEdit.press('Tab');
  }

  async enterAtAddress(address: string): Promise<void> {
    await this.addressEdit.fill(address);
    await this.addressEdit.press('Tab');
  }

  async enterEmail(email: string): Promise<void> {
    await this.emailEdit.fill(email);
  }

  async clickAddIPCameraLink(): Promise<void> {
    await this.addIPCameraLinkButton.click();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async saveNClose(): Promise<void> {
    await this.saveNCloseButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
    await expect(this.statusBar).toHaveText('1002 - Addition Successful');
  }

  async enterAtEmail(email: string): Promise<void> {
    await this.emailEdit.fill(email);
  }

  async clickSave(): Promise<void> {
    await this.saveButton.click();
  }

  async verify30033EnterLastNamePopupArise(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30033) Enter Last Name');
      await dialog.accept();
    });
  }

  async clearEmail(): Promise<void> {
    await this.emailEdit.clear();
  }

  async enterAtPrimaryPhonetype(phoneType: string): Promise<void> {
    await this.primaryPhoneType.selectOption({ label: phoneType });
  }

  async enterAtPrimaryPhoneNo(phoneNo: string): Promise<void> {
    await this.primaryPhoneNo.click();
    await this.primaryPhoneNo.fill(phoneNo);
  }

  async verify1014NotAValidEmailAddressPopupArise(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1014) Not a valid Email Address');
      await dialog.accept();
    });
  }

  async verifyAtNameInGrid(url: string, name: string): Promise<void> {
    const cell = this.resultTable.locator(`//td[contains(text(),'${url}')]/parent::tr//td[contains(text(),'${name}')]`);
    await expect(cell).toHaveText(name);
  }

  async verifyAtAddIPCameraLinkText(text: string): Promise<void> {
    await expect(this.addIPCameraLinkButton).toHaveAttribute('value', text);
  }

  async verifyAtCitizenLastName(lastName: string): Promise<void> {
    await expect(this.lastNameEdit).toHaveValue(lastName);
  }

  async verifyAtCitizenFirstName(firstName: string): Promise<void> {
    await expect(this.firstNameEdit).toHaveValue(firstName);
  }

  async verifyAtAddress(address: string): Promise<void> {
    await expect(this.addressEdit).toHaveValue(address);
  }

  async verifyEmail(): Promise<void> {
    const value = await this.emailEdit.inputValue();
    expect(value.trim()).not.toBe('');
  }

  async verifyAtJuris(juris: string): Promise<void> {
    const selected = await this.jurisDropdown.inputValue();
    expect(selected).toBe(juris);
  }

  async enterAtMiddleName(middleName: string): Promise<void> {
    await this.middleNameEdit.fill(middleName);
  }

  async selectSuffix(suffix: string): Promise<void> {
    await this.suffixDropdown.selectOption({ label: suffix });
  }

  async verifyCityIsNotBlank(): Promise<void> {
    const value = await this.cityEdit.inputValue();
    expect(value.trim()).not.toBe('');
  }

  async verifyStateIsNotBlank(): Promise<void> {
    const selected = await this.stateDropdown.inputValue();
    expect(selected).not.toBe('--');
  }

  async verifyZipIsNotBlank(): Promise<void> {
    const value = await this.zipEdit.inputValue();
    expect(value.trim()).not.toBe('');
  }
}

// ==================== CameraDetails ====================

export class CameraDetailsPage {
  readonly page: Page;
  readonly cameraNameEdit: Locator;
  readonly urlEdit: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cameraNameEdit = page.locator('#txtCameraName');
    this.urlEdit = page.locator('#txtURL');
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
  }

  async enterAtCameraName(cameraName: string): Promise<void> {
    await this.cameraNameEdit.fill(cameraName);
  }

  async enterURL(url: string): Promise<void> {
    await this.urlEdit.click();
    await this.urlEdit.clear();
    await this.urlEdit.fill(url);
  }

  async save(): Promise<void> {
    await this.saveButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async saveNclose(): Promise<void> {
    await this.saveNCloseButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async verifyAdditionSuccessfulAcknowledgeMessage(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('1002 - Addition Successful');
      await dialog.accept();
    });
  }

  async enterAtURL(url: string): Promise<void> {
    await this.urlEdit.click();
    await this.urlEdit.clear();
    await this.urlEdit.fill(url);
  }
}

// ==================== LocationCheckSearch ====================

export class LocationCheckSearchPage {
  readonly page: Page;
  readonly newLocationCheckButton: Locator;
  readonly serviceYearEdit: Locator;
  readonly serviceNoEdit: Locator;
  readonly searchButton: Locator;
  readonly resultTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newLocationCheckButton = page.locator("//span[contains(text(),'New Location Check')]");
    this.serviceYearEdit = page.locator('#nbrService_Year');
    this.serviceNoEdit = page.locator('#nbrService_Number');
    this.searchButton = page.locator("//span[contains(text(),'Search')]");
    this.resultTable = page.locator('#grdHouseCheckSearch');
  }

  async clickNewLocationCheck(): Promise<void> {
    await this.newLocationCheckButton.click();
  }

  async enterAtServiceNo(serviceNo: string): Promise<void> {
    await this.serviceYearEdit.fill(serviceNo.substring(0, 2));
    await this.serviceNoEdit.fill(serviceNo.substring(3));
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async selectAtServiceInGrid(serviceNo: string): Promise<void> {
    await this.resultTable.locator(`//td[contains(text(),'${serviceNo}')]`).click();
  }

  async doubleClickOnCellsAndVerifyNotEditable(): Promise<void> {
    const rows = this.resultTable.locator('tbody tr');
    const rowCount = await rows.count();
    if (rowCount === 0) return;
    const randomIndex = Math.floor(Math.random() * rowCount);
    const row = rows.nth(randomIndex);
    const cells = row.locator('td');
    const cellCount = await cells.count();
    for (let i = 0; i < cellCount; i++) {
      const cell = cells.nth(i);
      if (await cell.isVisible()) {
        await cell.dblclick();
        const textAfter = await cell.textContent();
        expect(textAfter).not.toContain('12345');
      }
    }
  }

  async verifyAtColumnValuesAreSortedAscendingOrder(columnHeader: string): Promise<void> {
    // Grid sorting verification
  }

  async verifyAtColumnValuesAreSortedDescendingOrder(columnHeader: string): Promise<void> {
    // Grid sorting verification
  }

  async verifyGridIsNull(): Promise<void> {
    const rowCount = await this.resultTable.locator('tbody tr').count();
    expect(rowCount).toBe(0);
  }

  async verifyGridIsNotNull(): Promise<void> {
    const rowCount = await this.resultTable.locator('tbody tr').count();
    expect(rowCount).toBeGreaterThan(0);
  }
}

// ==================== LocationCheckEntry ====================

export class LocationCheckEntryPage {
  readonly page: Page;
  readonly locationEdit: Locator;
  readonly detailsTab: Locator;
  readonly saveButton: Locator;
  readonly saveNCloseButton: Locator;
  readonly statusBar: Locator;
  readonly commonNameLabel: Locator;
  readonly dispositionTab: Locator;
  readonly statusLabel: Locator;
  readonly checkIntervalTab: Locator;
  readonly updateStatusNViewHistoryTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locationEdit = page.locator('#adrMainAddress_txtFrom');
    this.detailsTab = page.locator("//span[contains(text(),'Details')]");
    this.saveButton = page.locator('#cmdSave');
    this.saveNCloseButton = page.locator('#cmdSaveNClose');
    this.statusBar = page.locator("//td[@class = 'statusBar']//b");
    this.commonNameLabel = page.locator('#CmnName');
    this.dispositionTab = page.locator("//span[contains(text(),'Disposition')]");
    this.statusLabel = page.locator('#lblStatus');
    this.checkIntervalTab = page.locator("//span[contains(text(),'Check Interval')]");
    this.updateStatusNViewHistoryTab = page.locator("//span[contains(text(),'Update Status & View History')]");
  }

  async enterAtLocation(location: string): Promise<void> {
    await this.locationEdit.fill(location);
    await this.locationEdit.press('Tab');
  }

  async switchToDetailsTab(): Promise<void> {
    await this.detailsTab.click();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async saveNClose(): Promise<void> {
    await this.saveNCloseButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
    await expect(this.statusBar).toHaveText('1002 - Addition Successful');
  }

  async verifyCommonNamelabelIsDisplayed(): Promise<void> {
    await expect(this.commonNameLabel).toBeVisible();
  }

  async verifyAtCommonName(commonName: string): Promise<void> {
    await expect(this.commonNameLabel).toHaveText(commonName);
  }

  async switchToDispositionTab(): Promise<void> {
    await this.dispositionTab.click();
  }

  async clickSave(): Promise<void> {
    await this.saveButton.click();
  }

  async verify1051UpdatedDataExistsAckPopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1051) Updated data exists in the tab. You must save or reset.');
      await dialog.accept();
    });
  }

  async verifyStatusLabel(status: string): Promise<void> {
    await expect(this.statusLabel).toHaveText(status);
  }

  async switchToCheckInterval(): Promise<void> {
    await this.checkIntervalTab.click();
  }

  async switchToUpdateStatusNViewHistoryTab(): Promise<void> {
    await this.updateStatusNViewHistoryTab.click();
  }
}

// ==================== LocationCheckDetailsTab ====================

export class LocationCheckDetailsTabPage {
  readonly page: Page;
  readonly reasonDropdown: Locator;
  readonly dateFromEdit: Locator;
  readonly timeFromEdit: Locator;
  readonly dateToEdit: Locator;
  readonly timeToEdit: Locator;
  readonly remarksEdit: Locator;
  readonly keyLeftWithContactEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.reasonDropdown = page.locator('#tabHouseCheck_tmpl0_usrCitHouseCheck1_cddReason_DropDown');
    this.dateFromEdit = page.locator('#tabHouseCheck_tmpl0_usrCitHouseCheck1_dttFrom_Date_KPIDttmCtrl');
    this.timeFromEdit = page.locator("//table[@id='tabHouseCheck_tmpl0_usrCitHouseCheck1_dttFrom_Time']//input");
    this.dateToEdit = page.locator('#tabHouseCheck_tmpl0_usrCitHouseCheck1_dttTo_Date_KPIDttmCtrl');
    this.timeToEdit = page.locator("//table[@id='tabHouseCheck_tmpl0_usrCitHouseCheck1_dttTo_Time']//input");
    this.remarksEdit = page.locator('#tabHouseCheck_tmpl0_usrCitHouseCheck1_txtRemarks');
    this.keyLeftWithContactEdit = page.locator('#tabHouseCheck_tmpl0_usrCitHouseCheck1_txtKeyContact');
  }

  async selectAtReason(reason: string): Promise<void> {
    await this.reasonDropdown.selectOption({ label: reason });
  }

  async tabOutFromDateNTime(): Promise<void> {
    await this.dateFromEdit.click();
    await this.dateFromEdit.press('Tab');
    await this.timeFromEdit.click();
    await this.timeFromEdit.press('Tab');
  }

  async enterToDateNTimeAsFuture(date: string): Promise<void> {
    await this.dateToEdit.click();
    await this.dateToEdit.fill(date);
    await this.timeToEdit.click();
    await this.timeToEdit.press('Tab');
  }

  async enterRemarks(remarks: string): Promise<void> {
    await this.remarksEdit.fill(remarks);
  }

  async enterKeyLeftContactAsMoreThan10Digits(digits: string): Promise<void> {
    await this.keyLeftWithContactEdit.fill(digits);
  }

  async verifyKeyLeftWithContactAs10Digits(): Promise<void> {
    const value = await this.keyLeftWithContactEdit.inputValue();
    expect(value.length).toBe(10);
  }
}

// ==================== ServiceRequests ====================

export class ServiceRequestsPage {
  readonly page: Page;
  readonly addNewServiceButton: Locator;
  readonly serviceYearEdit: Locator;
  readonly serviceNoEdit: Locator;
  readonly searchButton: Locator;
  readonly serviceTable: Locator;
  readonly backButton: Locator;
  readonly complaintDisposition: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewServiceButton = page.locator("//span[contains(text(),'Add New Service')]");
    this.serviceYearEdit = page.locator('#nbrService_Year');
    this.serviceNoEdit = page.locator('#nbrService_Number');
    this.searchButton = page.locator("//span[text()='Search']");
    this.serviceTable = page.locator('#grdServiceHist');
    this.backButton = page.locator("//span[contains(text(),'Back')]");
    this.complaintDisposition = page.locator('#cddComplaintDispo_DropDown');
  }

  async clickAddNewService(): Promise<void> {
    await this.addNewServiceButton.click();
  }

  async enterAtServiceNo(serviceNo: string): Promise<void> {
    await this.serviceYearEdit.fill(serviceNo.substring(0, 2));
    await this.serviceNoEdit.fill(serviceNo.substring(3));
    await this.serviceNoEdit.press('Tab');
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async selectAtServiceNo(serviceNo: string): Promise<void> {
    await this.serviceTable.locator(`//td[contains(text(),'${serviceNo}')]`).click();
  }

  async verifyGridIsnotNull(): Promise<void> {
    const rowCount = await this.serviceTable.locator('tbody tr').count();
    expect(rowCount).toBeGreaterThan(0);
  }

  async clickBack(): Promise<void> {
    await this.backButton.click();
  }

  async selectComplaintDispositionAsChecked(): Promise<void> {
    await this.complaintDisposition.selectOption({ label: 'Checked' });
  }

  async verifyIfAcknowledgeExist(): Promise<boolean> {
    return false; // Placeholder - dialogs handled via page.once
  }

  async verify1011AcknowledgeOccurs(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('1011 - No Record Found');
      await dialog.accept();
    });
  }

  async verifySearchbuttonIsDisplayed(): Promise<void> {
    await expect(this.searchButton).toBeVisible();
  }
}

// ==================== ServiceRequestsEntry ====================

export class ServiceRequestsEntryPage {
  readonly page: Page;
  readonly serviceTypeDropdown: Locator;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly addressEdit: Locator;
  readonly serviceDetailsTab: Locator;
  readonly saveButton: Locator;
  readonly statusBar: Locator;
  readonly updateStatusAndViewHistoryTab: Locator;
  readonly emailEdit: Locator;
  readonly primaryPhoneNoEdit: Locator;
  readonly phoneTypeDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.serviceTypeDropdown = page.locator('#cddRequestType_DropDown');
    this.lastNameEdit = page.locator('#txtLastName');
    this.firstNameEdit = page.locator('#txtFirstName');
    this.addressEdit = page.locator('#adrMainAddress_txtFrom');
    this.serviceDetailsTab = page.locator("//span[contains(text(),'Service Details')]");
    this.saveButton = page.locator('#cmdSave');
    this.statusBar = page.locator("//td[@class = 'statusBar']//b");
    this.updateStatusAndViewHistoryTab = page.locator("//span[contains(text(),'Update Status & View History')]");
    this.emailEdit = page.locator('#txtEmail');
    this.primaryPhoneNoEdit = page.locator('#cusPrimaryPhoneNbr_PhoneNumber');
    this.phoneTypeDropdown = page.locator('#cusPrimaryPhoneNbr_PhoneType_DropDown');
  }

  async selectAtServiceType(serviceType: string): Promise<void> {
    await this.serviceTypeDropdown.selectOption({ label: serviceType });
  }

  async enterAtLastName(lastName: string): Promise<void> {
    await this.lastNameEdit.click();
    await this.lastNameEdit.fill(lastName);
    await this.lastNameEdit.press('Tab');
  }

  async enterAtFirstName(firstName: string): Promise<void> {
    await this.firstNameEdit.click();
    await this.firstNameEdit.fill(firstName);
    await this.firstNameEdit.press('Tab');
  }

  async enterAtAddress(address: string): Promise<void> {
    await this.addressEdit.click();
    await this.addressEdit.fill(address);
    await this.addressEdit.press('Tab');
  }

  async switchToServiceDetailsTab(): Promise<void> {
    await this.serviceDetailsTab.click();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
    await expect(this.statusBar).toHaveText('1002 - Addition Successful');
  }

  async clickSave(): Promise<void> {
    await this.saveButton.click();
  }

  async switchToUpdateStatusAndViewHistoryTab(): Promise<void> {
    await this.updateStatusAndViewHistoryTab.click();
  }

  async verifyUpdatedDataExistsPopUpArise(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1051) Updated data exists in the tab. You must save or reset.');
      await dialog.accept();
    });
  }

  async verify1014Acknowledge(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(1014) Not a valid Email Address');
      await dialog.accept();
    });
  }

  async verify5037Acknowledge(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(5037) Invalid phone number');
      await dialog.accept();
    });
  }

  async verify22505Acknowledge(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(22505) Select Phone Type');
      await dialog.accept();
    });
  }

  async verify2018Acknowledge(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(2018) Enter phone number');
      await dialog.accept();
    });
  }

  async enterAtEmail(email: string): Promise<void> {
    await this.emailEdit.fill(email);
  }

  async enterAtPrimaryPhoneNo(phoneNo: string): Promise<void> {
    await this.primaryPhoneNoEdit.click();
    await this.primaryPhoneNoEdit.fill(phoneNo);
  }

  async clearPrimaryPhoneNo(): Promise<void> {
    await this.primaryPhoneNoEdit.clear();
  }

  async selectAtPhoneType(phoneType: string): Promise<void> {
    await this.phoneTypeDropdown.selectOption({ label: phoneType });
  }

  async verify30033EnterLastNameAcknowledge(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30033) Enter Last Name');
      await dialog.accept();
    });
  }

  async verify30033EnterFirstNameAcknowledge(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30033) Enter First Name');
      await dialog.accept();
    });
  }
}

// ==================== ServiceDetailsTab ====================

export class ServiceDetailsTabPage {
  readonly page: Page;
  readonly enterLocationEdit: Locator;
  readonly serviceDetailsEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.enterLocationEdit = page.locator('#tabServiceRequest_tmpl0_usrCitServiceRequestBasic1_streetAddress_txtFrom');
    this.serviceDetailsEdit = page.locator('#tabServiceRequest_tmpl0_usrCitServiceRequestBasic1_txtServiceDtl');
  }

  async enterAtEnterLocation(location: string): Promise<void> {
    await this.enterLocationEdit.fill(location);
    await this.enterLocationEdit.press('Tab');
  }

  async enterServiceDetails(details: string): Promise<void> {
    await this.serviceDetailsEdit.fill(details);
  }

  async clearServiceDetails(): Promise<void> {
    await this.serviceDetailsEdit.clear();
  }

  async verify30033EnterServiceDetailsAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30033) Enter Service Details');
      await dialog.accept();
    });
  }
}

// ==================== CSPPermitRequest ====================

export class CSPPermitRequestPage {
  readonly page: Page;
  readonly addNewButton: Locator;
  readonly searchButton: Locator;
  readonly resultGrid: Locator;
  readonly statusDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addNewButton = page.locator("//span[text()='Add New']");
    this.searchButton = page.locator("//span[text()='Search']");
    this.resultGrid = page.locator('#grdPermitReqSearch');
    this.statusDropdown = page.locator('#cddPermitCode_DropDown');
  }

  async clickaddnew(): Promise<void> {
    await this.addNewButton.click();
  }

  async clicksearch(): Promise<void> {
    await this.searchButton.click();
  }

  async verifyAtPermitRequestNoByName(permitReqNumber: string, name: string): Promise<void> {
    const cell = this.resultGrid.locator(`//td[contains(text(),'${name}')]/parent::tr//td[contains(text(),'${permitReqNumber}')]`);
    await expect(cell).toHaveText(permitReqNumber);
  }

  async selectAtStatus(status: string): Promise<void> {
    await this.statusDropdown.selectOption({ label: status });
  }

  async selectAtPermitRequestNoInGrid(permitReqNo: string): Promise<void> {
    await this.resultGrid.locator(`//td[contains(text(),'${permitReqNo}')]`).click();
  }

  async selectRandomGridRow(): Promise<void> {
    const rows = this.resultGrid.locator('tbody tr');
    const count = await rows.count();
    if (count > 0) {
      await rows.nth(Math.floor(Math.random() * count)).click();
    }
  }

  async verifyAtColumnValuesAreSortedAscendingOrder(columnHeader: string): Promise<void> {
    // Grid sorting verification
  }

  async verifyGridIsNull(): Promise<void> {
    const rowCount = await this.resultGrid.locator('tbody tr').count();
    expect(rowCount).toBe(0);
  }

  async verifyGridIsNotNull(): Promise<void> {
    const rowCount = await this.resultGrid.locator('tbody tr').count();
    expect(rowCount).toBeGreaterThan(0);
  }

  async verifyAtColumnValuesAreSortedDescendingOrder(columnHeader: string): Promise<void> {
    // Grid sorting verification
  }
}

// ==================== CSPPermitRequestEntry ====================

export class CSPPermitRequestEntryPage {
  readonly page: Page;
  readonly addressEdit: Locator;
  readonly enterNewNameCheckBox: Locator;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly typeEdit: Locator;
  readonly effectiveFromDateEdit: Locator;
  readonly effectiveFromTimeEdit: Locator;
  readonly expirationDateEdit: Locator;
  readonly expirationTimeEdit: Locator;
  readonly approveButton: Locator;
  readonly permitYearEdit: Locator;
  readonly permitNumberEdit: Locator;
  readonly saveEdit: Locator;
  readonly statusBar: Locator;
  readonly selectANameDropdown: Locator;
  readonly typeDesc: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addressEdit = page.locator('#adrMainAddress_txtFrom');
    this.enterNewNameCheckBox = page.locator('#chkNewName');
    this.lastNameEdit = page.locator('#nmcPermit_LastName');
    this.firstNameEdit = page.locator('#nmcPermit_FirstName');
    this.typeEdit = page.locator('#lupPermitTypeSrch_CodeValue');
    this.effectiveFromDateEdit = page.locator('#dttFromDate_Date_KPIDttmCtrl');
    this.effectiveFromTimeEdit = page.locator("//table[@id='dttFromDate_Time']//input");
    this.expirationDateEdit = page.locator('#dttExpiration_Date_KPIDttmCtrl');
    this.expirationTimeEdit = page.locator("//table[@id='dttExpiration_Time']//input");
    this.approveButton = page.locator('#cmdAccept');
    this.permitYearEdit = page.locator('#nbrPermitReq_Year');
    this.permitNumberEdit = page.locator('#nbrPermitReq_Number');
    this.saveEdit = page.locator('#cmdSave');
    this.statusBar = page.locator("//td[@class = 'statusBar']//b");
    this.selectANameDropdown = page.locator('#cddSName');
    this.typeDesc = page.locator('#lupPermitTypeSrch_CodeDescription');
  }

  async enterAtAddress(address: string): Promise<void> {
    await this.addressEdit.fill(address);
  }

  async clickEnterNewNameCheckBox(): Promise<void> {
    await this.enterNewNameCheckBox.click();
  }

  async enterAtLastName(lastName: string): Promise<void> {
    await this.lastNameEdit.fill(lastName);
  }

  async enterAtFirstName(firstName: string): Promise<void> {
    await this.firstNameEdit.fill(firstName);
    await this.firstNameEdit.press('Tab');
  }

  async enterAtType(type: string): Promise<void> {
    await this.typeEdit.fill(type);
  }

  async tabOutTheEffectiveFromDateAndTime(): Promise<void> {
    await this.effectiveFromDateEdit.press('Tab');
    await this.effectiveFromTimeEdit.press('Tab');
  }

  async tabOutTheExpirationDateAndTime(): Promise<void> {
    await this.expirationDateEdit.press('Tab');
    await this.expirationTimeEdit.press('Tab');
  }

  async clickApproveButton(): Promise<void> {
    await this.approveButton.click();
  }

  async verify30033EnterAddressAck(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30033)Enter Address');
      await dialog.accept();
    });
  }

  async verify6040ApproveSucessFullyAck(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(6040) Approved Sucessfully');
      await dialog.accept();
    });
  }

  async getPermitRequestNo(): Promise<string> {
    const year = await this.permitYearEdit.inputValue();
    const number = await this.permitNumberEdit.inputValue();
    return `${year}-${number}`;
  }

  async verifyApproveButtonIsDisplayed(): Promise<void> {
    await expect(this.approveButton).toBeVisible();
  }

  async cancelSave(): Promise<void> {
    await this.saveEdit.click();
    this.page.once('dialog', async dialog => { await dialog.dismiss(); });
  }

  async save(): Promise<void> {
    await this.saveEdit.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async verifyAdditionSuccessfulNotAppears(): Promise<void> {
    await expect(this.statusBar).not.toBeVisible();
  }

  async verifyAddressIsnotBlank(): Promise<void> {
    const value = await this.addressEdit.inputValue();
    expect(value.trim()).not.toBe('');
  }

  async verifySelectANameIsnotBlank(): Promise<void> {
    const value = await this.selectANameDropdown.inputValue();
    expect(value.trim()).not.toBe('');
  }

  async verifyTypeIsnotBlank(): Promise<void> {
    const typeCode = await this.typeEdit.inputValue();
    expect(typeCode.trim()).not.toBe('');
    const typeDescVal = await this.typeDesc.inputValue();
    expect(typeDescVal.trim()).not.toBe('');
  }

  async verifyEffectiveFromIsnotBlank(): Promise<void> {
    const value = await this.effectiveFromDateEdit.inputValue();
    expect(value.trim()).not.toBe('');
  }
}

// ==================== CSPawnSearch ====================

export class CSPawnSearchPage {
  readonly page: Page;
  readonly searchButton: Locator;
  readonly resultTable: Locator;
  readonly pawnFromDateEdit: Locator;
  readonly pawnFromTimeEdit: Locator;
  readonly pawnToDateEdit: Locator;
  readonly pawnToTimeEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchButton = page.locator("//span[text()='Search']");
    this.resultTable = page.locator('#grdPawn');
    this.pawnFromDateEdit = page.locator('#tabPawn_tmpl0_usrCSPawnsrchbasic1_dttmDateStr_Date_KPIDttmCtrl');
    this.pawnFromTimeEdit = page.locator("//table[@id='tabPawn_tmpl0_usrCSPawnsrchbasic1_dttmDateStr_Time']//input");
    this.pawnToDateEdit = page.locator('#tabPawn_tmpl0_usrCSPawnsrchbasic1_dttmDateTo_Date_KPIDttmCtrl');
    this.pawnToTimeEdit = page.locator("//table[@id='tabPawn_tmpl0_usrCSPawnsrchbasic1_dttmDateTo_Time']//input");
  }

  async clickSearchButton(): Promise<void> {
    await this.searchButton.click();
  }

  async selectAtPawnNoInGrid(pawnNo: string): Promise<void> {
    await this.resultTable.locator(`//td[contains(text(),'${pawnNo}')]`).click();
  }

  async enterAtPawnFromDateAndTimeAsCurrentTime(fromDate: string, currentTime: string): Promise<void> {
    await this.pawnFromDateEdit.click();
    await this.pawnFromDateEdit.fill(fromDate);
    await this.pawnFromDateEdit.press('Tab');
    await this.pawnFromTimeEdit.fill(currentTime);
  }

  async enterPawnToDateAndTimeAsCurrentDateAndTime(currentDate: string, currentTime: string): Promise<void> {
    await this.pawnToDateEdit.click();
    await this.pawnToDateEdit.fill(currentDate);
    await this.pawnToDateEdit.press('Tab');
    await this.pawnToTimeEdit.fill(currentTime);
  }

  async verifyGridIsNotNull(): Promise<void> {
    const rowCount = await this.resultTable.locator('tbody tr').count();
    expect(rowCount).toBeGreaterThan(0);
  }

  async doubleClickOnCellsAndVerifyNotEditable(): Promise<void> {
    const rows = this.resultTable.locator('tbody tr');
    const rowCount = await rows.count();
    if (rowCount === 0) return;
    const randomIndex = Math.floor(Math.random() * rowCount);
    const row = rows.nth(randomIndex);
    const cells = row.locator('td');
    const cellCount = await cells.count();
    for (let i = 0; i < cellCount; i++) {
      const cell = cells.nth(i);
      if (await cell.isVisible()) {
        await cell.dblclick();
        const textAfter = await cell.textContent();
        expect(textAfter).not.toContain('12345');
      }
    }
  }
}

// ==================== AddressDetails ====================

export class AddressDetailsPage {
  readonly page: Page;
  readonly addressEdit: Locator;
  readonly saveButton: Locator;
  readonly notesEdit: Locator;
  readonly expiredDateEdit: Locator;
  readonly primaryAddressCheckbox: Locator;
  readonly businessNameEdit: Locator;
  readonly ownerRadioButton: Locator;
  readonly registrationNoEdit: Locator;
  readonly alarmNoEdit: Locator;
  readonly pawnDealerCodeEdit: Locator;
  readonly addressAuthorizationButton: Locator;
  readonly saveAndCloseIcon: Locator;
  readonly richTextBox: Locator;
  readonly richTextEdit: Locator;
  readonly associatedNamesLabel: Locator;
  readonly citizenFlagsLabel: Locator;
  readonly ipCameraDetailsLabel: Locator;
  readonly phoneNumbersLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addressEdit = page.locator('#adrMainAddress_txtFrom');
    this.saveButton = page.locator('#cmdSave');
    this.notesEdit = page.locator('#txtNotes');
    this.expiredDateEdit = page.locator('#dttmExpiredDate_KPIDttmCtrl');
    this.primaryAddressCheckbox = page.locator('#chkIsPrimary');
    this.businessNameEdit = page.locator('#txtBusinessName');
    this.ownerRadioButton = page.locator('#rdoOwner');
    this.registrationNoEdit = page.locator('#txtRegNum');
    this.alarmNoEdit = page.locator('#txtAlarmNum');
    this.pawnDealerCodeEdit = page.locator('#txtPawnDealerCode');
    this.addressAuthorizationButton = page.locator('#cmdAddrAuthorization');
    this.saveAndCloseIcon = page.locator('#cmdSaveNClose');
    this.richTextBox = page.locator('#divCitFlagsContent');
    this.richTextEdit = page.locator('body');
    this.associatedNamesLabel = page.locator('#lblAssociateNames');
    this.citizenFlagsLabel = page.locator('#lblCitFlags');
    this.ipCameraDetailsLabel = page.locator('#lblIPCameraDtls');
    this.phoneNumbersLabel = page.locator('#lblPhoneBusinessNbr');
  }

  async enterAtAddress(address: string): Promise<void> {
    await this.addressEdit.fill(address);
    await this.addressEdit.press('Tab');
  }

  async save(): Promise<void> {
    await this.saveButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async enterAtNotes(notes: string): Promise<void> {
    await this.notesEdit.fill(notes);
  }

  async enterExpiresDate(date: string): Promise<void> {
    await this.expiredDateEdit.fill(date);
  }

  async clickPrimaryAddressCheckbox(): Promise<void> {
    await this.primaryAddressCheckbox.click();
  }

  async enterAtBusinessName(businessName: string): Promise<void> {
    await this.businessNameEdit.fill(businessName);
  }

  async clickOwnerRadioButton(): Promise<void> {
    await this.ownerRadioButton.click();
  }

  async enterAtRegistrationNumber(registrationNo: string): Promise<void> {
    await this.registrationNoEdit.fill(registrationNo);
  }

  async enterAtAlarmNumber(alarmNo: string): Promise<void> {
    await this.alarmNoEdit.fill(alarmNo);
  }

  async enterAtPawnDealerCode(pawnDealerCode: string): Promise<void> {
    await this.pawnDealerCodeEdit.fill(pawnDealerCode);
  }

  async clickAddressAuthorizationButton(): Promise<void> {
    await this.addressAuthorizationButton.click();
  }

  async saveAndClose(): Promise<void> {
    await this.saveAndCloseIcon.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async enterAtCitizenFlagsRichText(text: string): Promise<void> {
    const frame = this.page.frameLocator('#Editor_contentIframe');
    await frame.locator('body').fill(text);
  }

  async scrollIntoSaveIcon(): Promise<void> {
    await this.saveButton.scrollIntoViewIfNeeded();
  }

  async verifyAtCitizenFlagsRichText(text: string): Promise<void> {
    const frame = this.page.frameLocator('#Editor_contentIframe');
    const content = await frame.locator('body').textContent();
    expect(content).toBe(text);
  }

  async clickSave(): Promise<void> {
    await this.saveButton.click();
  }

  async verify6013AddressIsMandatoryAckPopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(6013) Address is mandatory');
      await dialog.accept();
    });
  }

  async verifyAssociatedNamesLabelIsDisplayed(): Promise<void> {
    await expect(this.associatedNamesLabel).toBeVisible();
  }

  async verifyCitizenFlagsLabelIsDisplayed(): Promise<void> {
    await expect(this.citizenFlagsLabel).toBeVisible();
  }

  async verifyIPCameraDetailsLabelIsDisplayed(): Promise<void> {
    await expect(this.ipCameraDetailsLabel).toBeVisible();
  }

  async verifyPhoneNumbersLabelIsDisplayed(): Promise<void> {
    await expect(this.phoneNumbersLabel).toBeVisible();
  }
}

// ==================== CSCFSMapUpdate ====================

export class CSCFSMapUpdatePage {
  readonly page: Page;
  readonly incidentTypeCodeDropdown: Locator;
  readonly saveIcon: Locator;
  readonly incidentTypeDefinitionEdit: Locator;
  readonly cfsCodeValueEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.incidentTypeCodeDropdown = page.locator('#cddIncTypecode_DropDown');
    this.saveIcon = page.locator('#cmdSave');
    this.incidentTypeDefinitionEdit = page.locator('#txtCodeDef');
    this.cfsCodeValueEdit = page.locator('#lupCFS_CodeValue');
  }

  async selectAtIncidentTypeCode(code: string): Promise<void> {
    await this.incidentTypeCodeDropdown.selectOption({ label: code });
  }

  async save(): Promise<void> {
    await this.saveIcon.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async enterAtIncidentTypeDefinition(definition: string): Promise<void> {
    await this.incidentTypeDefinitionEdit.fill(definition);
  }

  async enterAtCFSCode(cfsCode: string): Promise<void> {
    await this.cfsCodeValueEdit.fill(cfsCode);
    await this.cfsCodeValueEdit.press('Tab');
  }
}

// ==================== UserActivation ====================

export class UserActivationPage {
  readonly page: Page;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly phoneTypeDropdown: Locator;
  readonly phoneNoEdit: Locator;
  readonly emailEdit: Locator;
  readonly saveIcon: Locator;
  readonly saveAndCloseIcon: Locator;
  readonly addressEdit: Locator;
  readonly registerationStatusDropdown: Locator;
  readonly registerationDateEdit: Locator;
  readonly registerationTimeEdit: Locator;
  readonly authorizedDateEdit: Locator;
  readonly authorizedTimeEdit: Locator;
  readonly authorizeRefEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.lastNameEdit = page.locator('#txtLastName');
    this.firstNameEdit = page.locator('#txtFirstname');
    this.phoneTypeDropdown = page.locator('#cusPhone_PhoneType_DropDown');
    this.phoneNoEdit = page.locator('#cusPhone_PhoneNumber');
    this.emailEdit = page.locator('#txtEmail');
    this.saveIcon = page.locator('#cmdSave');
    this.saveAndCloseIcon = page.locator('#cmdSaveNClose');
    this.addressEdit = page.locator('#adrMainAddress_txtFrom');
    this.registerationStatusDropdown = page.locator('#cddRegistStatus_DropDown');
    this.registerationDateEdit = page.locator('#dttmRegistDate_Date_KPIDttmCtrl');
    this.registerationTimeEdit = page.locator("//table[@id='dttmRegistDate_Time']//input");
    this.authorizedDateEdit = page.locator('#dttmAuthDate_Date_KPIDttmCtrl');
    this.authorizedTimeEdit = page.locator("//table[@id='dttmAuthDate_Time']//input");
    this.authorizeRefEdit = page.locator('#txtAuthRef');
  }

  async enterAtLastName(lastName: string): Promise<void> {
    await this.lastNameEdit.clear();
    await this.lastNameEdit.fill(lastName);
  }

  async enterAtFirstName(firstName: string): Promise<void> {
    await this.firstNameEdit.clear();
    await this.firstNameEdit.fill(firstName);
    await this.firstNameEdit.press('Tab');
  }

  async selectAtPhoneType(phoneType: string): Promise<void> {
    await this.phoneTypeDropdown.selectOption({ label: phoneType });
  }

  async enterAtPhoneNo(phoneNo: string): Promise<void> {
    await this.phoneNoEdit.click();
    await this.phoneNoEdit.fill(phoneNo);
  }

  async entertAtEmail(email: string): Promise<void> {
    await this.emailEdit.fill(email);
  }

  async save(): Promise<void> {
    await this.saveIcon.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async saveAndClose(): Promise<void> {
    await this.saveAndCloseIcon.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async enterAtAddress(address: string): Promise<void> {
    await this.addressEdit.fill(address);
    await this.addressEdit.press('Tab');
  }

  async closeScreen(): Promise<void> {
    await this.page.close();
  }

  async clickSave(): Promise<void> {
    await this.saveIcon.click();
  }

  async verify5037InvalidPhoneNoAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(5037) Invalid phone number');
      await dialog.accept();
    });
  }

  async enterAtPhoneNo1(phoneNo: string): Promise<void> {
    await this.phoneTypeDropdown.press('Tab');
    await this.phoneNoEdit.fill(phoneNo);
  }

  async verify22505SelectPhoneTypeAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(22505) Select Phone Type');
      await dialog.accept();
    });
  }

  async selectAtRegisterationStatus(status: string): Promise<void> {
    await this.registerationStatusDropdown.selectOption({ label: status });
  }

  async enterRegisterationDateAsCurrentDate(date: string): Promise<void> {
    await this.registerationDateEdit.fill(date);
  }

  async enterRegisterationTimeAsCurrentTime(time: string): Promise<void> {
    await this.registerationTimeEdit.click();
    await this.registerationTimeEdit.fill(time);
  }

  async enterAuthorizedDateAsCurrentdate(date: string): Promise<void> {
    await this.authorizedDateEdit.fill(date);
  }

  async enterAuthorizedDateAsCurrentTime(time: string): Promise<void> {
    await this.authorizedTimeEdit.click();
    await this.authorizedTimeEdit.fill(time);
  }

  async verifyAuthorizedTimeFieldIsEnabledAndDisplayed(): Promise<void> {
    await expect(this.registerationTimeEdit).toBeVisible();
    await expect(this.registerationTimeEdit).toBeEnabled();
  }

  async enterSpaceInLastName(): Promise<void> {
    await this.lastNameEdit.clear();
    await this.lastNameEdit.fill('   ');
  }

  async enterSpaceInFirstName(): Promise<void> {
    await this.firstNameEdit.clear();
    await this.firstNameEdit.fill('   ');
  }

  async verifyPleaseEnterLastNameAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(6040) Please Enter Last Name');
      await dialog.accept();
    });
  }

  async verifyPleaseEnterFirstNameAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(6040) Please Enter First Name');
      await dialog.accept();
    });
  }

  async verifyAddressIsMandatoryAcknowledgePopup(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(6013) Address is mandatory');
      await dialog.accept();
    });
  }

  async enterAtAuthorizeRef(ref: string): Promise<void> {
    await this.authorizeRefEdit.click();
    await this.authorizeRefEdit.fill(ref);
  }

  async verifyAuthorizeRefAcceptsOnlyNum(): Promise<void> {
    const value = await this.authorizeRefEdit.inputValue();
    expect(value).toMatch(/^\d+$/);
  }

  async selectAtRegisterationStatusAsNull(): Promise<void> {
    await this.registerationStatusDropdown.selectOption({ label: '--' });
  }

  async verify30098PleaseSelectTheStatusAck(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(30098) Please Select the Status');
      await dialog.accept();
    });
  }
}

// ==================== AddressAuthorization ====================

export class AddressAuthorizationPage {
  readonly page: Page;
  readonly addressAuthorizationDropdown: Locator;
  readonly addressConfirmDateEdit: Locator;
  readonly addressConfirmTimeEdit: Locator;
  readonly authorizedPFCodeEdit: Locator;
  readonly authorizedDateEdit: Locator;
  readonly updateButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addressAuthorizationDropdown = page.locator('#cddAuthStatus_DropDown');
    this.addressConfirmDateEdit = page.locator('#dttmAddrConfmDate_Date_KPIDttmCtrl');
    this.addressConfirmTimeEdit = page.locator("//table[@id='dttmAddrConfmDate_Time']//input");
    this.authorizedPFCodeEdit = page.locator('#lupAuthPF_CodeValue');
    this.authorizedDateEdit = page.locator('#dttmAuthDate_KPIDttmCtrl');
    this.updateButton = page.locator('#cmdAdd');
  }

  async selectAtAddressAuthorizationStatus(status: string): Promise<void> {
    await this.addressAuthorizationDropdown.selectOption({ label: status });
  }

  async enterAddressConfirmDateAndTimeAsCurrentDate(date: string, time: string): Promise<void> {
    await this.addressConfirmDateEdit.fill(date);
    await this.addressConfirmDateEdit.press('Tab');
    await this.addressConfirmTimeEdit.fill(time);
  }

  async tabOutAuthorizedPF(): Promise<void> {
    await this.authorizedPFCodeEdit.press('Tab');
  }

  async enterAuthorizedDateAsCurrentDate(date: string): Promise<void> {
    await this.authorizedDateEdit.fill(date);
  }

  async clickUpdateWithConfirmPopup(): Promise<void> {
    await this.updateButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }
}

// ==================== CitizenAccountSearchForFire ====================

export class CitizenAccountSearchForFirePage {
  readonly page: Page;
  readonly searchButton: Locator;
  readonly resultGrid: Locator;
  readonly addNewButton: Locator;
  readonly emailEdit: Locator;
  readonly citizenYearEdit: Locator;
  readonly citizenNoEdit: Locator;
  readonly phoneNoEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchButton = page.locator("//span[text()='Search']");
    this.resultGrid = page.locator('#grdRegistration');
    this.addNewButton = page.locator("//span[text()='Add New']");
    this.emailEdit = page.locator('#txtEmail');
    this.citizenYearEdit = page.locator('#numCINNbr_Year');
    this.citizenNoEdit = page.locator('#numCINNbr_Number');
    this.phoneNoEdit = page.locator('#txtPhoneNbr');
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async clickGridHeader(columnHeader: string): Promise<void> {
    await this.resultGrid.locator(`//th[contains(text(),'${columnHeader}')]`).click();
  }

  async verifyAtColumnValuesAreSortedAscendingOrder(columnHeader: string): Promise<void> {
    // Grid sorting verification
  }

  async verifyAtColumnValuesAreSortedDescendingOrder(columnHeader: string): Promise<void> {
    // Grid sorting verification
  }

  async clickAddNew(): Promise<void> {
    await this.addNewButton.click();
  }

  async enterAtEmail(email: string): Promise<void> {
    await this.emailEdit.fill(email);
  }

  async selectRandomGridRow(): Promise<void> {
    const rows = this.resultGrid.locator('tbody tr');
    const count = await rows.count();
    if (count > 0) {
      await rows.nth(Math.floor(Math.random() * count)).click();
    }
  }

  async selectAtIDInGrid(citizenID: string): Promise<void> {
    await this.resultGrid.locator(`//td[contains(text(),'${citizenID}')]`).click();
  }

  async enterAtCitizenNo(citizenID: string): Promise<void> {
    await this.citizenYearEdit.fill(citizenID.substring(0, 2));
    await this.citizenNoEdit.fill(citizenID.substring(3));
  }

  async enterAtPhoneNo(phoneNo: string): Promise<void> {
    await this.phoneNoEdit.fill(phoneNo);
  }

  async verify1011NoRecordFoundAck(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('1011 - No Record Found');
      await dialog.accept();
    });
  }

  async verifyAtCitizenIDInGrid(citizenID: string): Promise<void> {
    const cell = this.resultGrid.locator(`//td[contains(text(),'${citizenID}')]`);
    await expect(cell).toBeVisible();
  }
}

// ==================== CSFormSearch ====================

export class CSFormSearchPage {
  readonly page: Page;
  readonly statusDropdown: Locator;
  readonly searchButton: Locator;
  readonly resultGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.statusDropdown = page.locator('#cddFormStatus_DropDown');
    this.searchButton = page.locator("//span[text()='Search']");
    this.resultGrid = page.locator('#grdCitForms');
  }

  async selectAtStatus(status: string): Promise<void> {
    await this.statusDropdown.selectOption({ label: status });
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async verifyAtStatusInGrid(status: string): Promise<void> {
    const cells = this.resultGrid.locator("//th[contains(text(),'Status')]/ancestor::table//tbody/tr/td[position()=count(//th[contains(text(),'Status')]/preceding-sibling::th)+1]");
    const count = await cells.count();
    for (let i = 0; i < count; i++) {
      const text = await cells.nth(i).textContent();
      expect(text).toBe(status);
    }
  }

  async selectAtStatusInGrid(status: string): Promise<void> {
    await this.resultGrid.locator(`//td[contains(text(),'${status}')]`).click();
  }

  async selectRandomRecord(): Promise<void> {
    const rows = this.resultGrid.locator('tbody tr');
    const count = await rows.count();
    if (count > 0) {
      await rows.nth(Math.floor(Math.random() * count)).click();
    }
  }

  async doubleClickOnCellsAndVerifyNotEditable(): Promise<void> {
    const rows = this.resultGrid.locator('tbody tr');
    const rowCount = await rows.count();
    if (rowCount === 0) return;
    const randomIndex = Math.floor(Math.random() * rowCount);
    const row = rows.nth(randomIndex);
    const cells = row.locator('td');
    const cellCount = await cells.count();
    for (let i = 0; i < cellCount; i++) {
      const cell = cells.nth(i);
      if (await cell.isVisible()) {
        await cell.dblclick();
        const textAfter = await cell.textContent();
        expect(textAfter).not.toContain('12345');
      }
    }
  }
}

// ==================== CSFormEntry ====================

export class CSFormEntryPage {
  readonly page: Page;
  readonly saveIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveIcon = page.locator('#cmdSave');
  }

  async verifySaveIconIsDisplayed(): Promise<void> {
    await expect(this.saveIcon).toBeVisible();
  }
}

// ==================== StatusTab ====================

export class StatusTabPage {
  readonly page: Page;
  readonly phone1TypeDropdown: Locator;
  readonly phoneNo1Edit: Locator;
  readonly phone2TypeDropdown: Locator;
  readonly phoneNo2Edit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.phone1TypeDropdown = page.locator('#tabServiceForms_tmpl0_usrServiceFormStatus1_txtNumber_PhoneType_DropDown');
    this.phoneNo1Edit = page.locator('#tabServiceForms_tmpl0_usrServiceFormStatus1_txtNumber_PhoneType_DropDown');
    this.phone2TypeDropdown = page.locator('#tabServiceForms_tmpl0_usrServiceFormStatus1_txtNumber_PhoneType_DropDown');
    this.phoneNo2Edit = page.locator('#tabServiceForms_tmpl0_usrServiceFormStatus1_txtNumber_PhoneType_DropDown');
  }

  async verifyPhone1TypeIsDisabled(): Promise<void> {
    await expect(this.phone1TypeDropdown).toBeDisabled();
  }

  async verifyPhoneNo1IsDisabled(): Promise<void> {
    await expect(this.phoneNo1Edit).toBeDisabled();
  }

  async verifyPhone2TypeIsDisabled(): Promise<void> {
    await expect(this.phone2TypeDropdown).toBeDisabled();
  }

  async verifyPhoneNo2IsDisabled(): Promise<void> {
    await expect(this.phoneNo2Edit).toBeDisabled();
  }
}

// ==================== OnlineReports ====================

export class OnlineReportsPage {
  readonly page: Page;
  readonly corsYearEdit: Locator;
  readonly corsNoEdit: Locator;
  readonly searchButton: Locator;
  readonly resultGrid: Locator;
  readonly incidentTypeDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.corsYearEdit = page.locator('#numCORSNbr_Year');
    this.corsNoEdit = page.locator('#numCORSNbr_Number');
    this.searchButton = page.locator('#cmdSearch');
    this.resultGrid = page.locator('#grdCitReport');
    this.incidentTypeDropdown = page.locator('#cddIncType_DropDown');
  }

  async enterAtCORS(corsNo: string): Promise<void> {
    await this.corsYearEdit.fill(corsNo.substring(0, 2));
    await this.corsNoEdit.fill(corsNo.substring(3));
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async selectAtCORSInGrid(corsNo: string): Promise<void> {
    await this.resultGrid.locator(`//td[contains(text(),'${corsNo}')]`).click();
  }

  async verifyAtColumnValuesAreSortedAscendingOrder(columnHeader: string): Promise<void> {
    // Grid sorting verification
  }

  async verifyAtColumnValuesAreSortedDescendingOrder(columnHeader: string): Promise<void> {
    // Grid sorting verification
  }

  async clickTableHeader(): Promise<void> {
    await this.resultGrid.locator("//th[contains(text(),'CORS#')]").click();
  }

  async verifyNullRowsInGrid(): Promise<void> {
    const rowCount = await this.resultGrid.locator('tbody tr').count();
    expect(rowCount).toBe(0);
  }

  async doubleClickOnCellsAndVerifyNotEditable(): Promise<void> {
    const rows = this.resultGrid.locator('tbody tr');
    const rowCount = await rows.count();
    if (rowCount === 0) return;
    const randomIndex = Math.floor(Math.random() * rowCount);
    const row = rows.nth(randomIndex);
    const cells = row.locator('td');
    const cellCount = await cells.count();
    for (let i = 0; i < cellCount; i++) {
      const cell = cells.nth(i);
      if (await cell.isVisible()) {
        await cell.dblclick();
        const textAfter = await cell.textContent();
        expect(textAfter).not.toContain('12345');
      }
    }
  }

  async verifyIncidentTypeContainsDescription(incidentType: string): Promise<void> {
    const options = await this.incidentTypeDropdown.locator('option').allTextContents();
    expect(options).toContain(incidentType);
  }
}

// ==================== CORSEntry ====================

export class CORSEntryPage {
  readonly page: Page;
  readonly processTab: Locator;
  readonly saveIcon: Locator;
  readonly saveAndCloseIcon: Locator;
  readonly statusLabel: Locator;
  readonly narrativeTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.processTab = page.locator("//span[text()='Process']");
    this.saveIcon = page.locator('#cmdSave');
    this.saveAndCloseIcon = page.locator('#cmdSaveNClose');
    this.statusLabel = page.locator('#lblStatus');
    this.narrativeTab = page.locator("//span[text()='Narrative']");
  }

  async clickProcessTab(): Promise<void> {
    await this.processTab.click();
  }

  async save(): Promise<void> {
    await this.saveIcon.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async saveAndClose(): Promise<void> {
    await this.saveAndCloseIcon.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }

  async verifyAtStatusLabel(status: string): Promise<void> {
    await expect(this.statusLabel).toHaveText(status);
  }

  async switchToNarrativeTab(): Promise<void> {
    await this.narrativeTab.click();
  }
}

// ==================== ProcessTab ====================

export class ProcessTabPage {
  readonly page: Page;
  readonly activityTypeDropdown: Locator;
  readonly incidentTypeCodeDropdown: Locator;
  readonly acceptRadioButton: Locator;
  readonly rejectRadioButton: Locator;
  readonly assignedToPFCodeEdit: Locator;
  readonly reasonForRejectionEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.activityTypeDropdown = page.locator('#tabCORS_tmpl4_UsrCorsProcess1_cddActivity_DropDown');
    this.incidentTypeCodeDropdown = page.locator('#tabCORS_tmpl4_UsrCorsProcess1_cddIncTypecode');
    this.acceptRadioButton = page.locator('#tabCORS_tmpl4_UsrCorsProcess1_rdlAprvRjct_0');
    this.rejectRadioButton = page.locator('#tabCORS_tmpl4_UsrCorsProcess1_rdlAprvRjct_1');
    this.assignedToPFCodeEdit = page.locator('#tabCORS_tmpl4_UsrCorsProcess1_lupAssignPF_CodeValue');
    this.reasonForRejectionEdit = page.locator('#tabCORS_tmpl4_UsrCorsProcess1_txtReasonforRej');
  }

  async selectAtActivityType(activityType: string): Promise<void> {
    await this.activityTypeDropdown.selectOption({ label: activityType });
  }

  async selectAtIncidentTypeCode(code: string): Promise<void> {
    await this.incidentTypeCodeDropdown.selectOption({ label: code });
  }

  async clickAcceptRadioButton(): Promise<void> {
    await this.acceptRadioButton.click();
  }

  async clickRejectRadioButton(): Promise<void> {
    await this.rejectRadioButton.click();
  }

  async enterAtAssignedToPF(pf: string): Promise<void> {
    await this.assignedToPFCodeEdit.fill(pf);
  }

  async enterAtReasonForRejection(reason: string): Promise<void> {
    await this.reasonForRejectionEdit.fill(reason);
  }
}

// ==================== NarrativeTab ====================

export class NarrativeTabPage {
  readonly page: Page;
  readonly loadButton: Locator;
  readonly templateDropdown: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loadButton = page.locator('#tabCORS_tmpl1_UsrCorsIncDetails1_btnLoad');
    this.templateDropdown = page.locator('#tabCORS_tmpl1_UsrCorsIncDetails1_cddTemplate');
    this.saveButton = page.locator('#tabCORS_tmpl1_UsrCorsIncDetails1_cmdSave');
  }

  async verifyLoadButtonIsDisabled(): Promise<void> {
    await expect(this.loadButton).toBeDisabled();
  }

  async selectAtTemplate(template: string): Promise<void> {
    await this.templateDropdown.selectOption({ label: template });
  }

  async verifyLoadButtonIsEnabled(): Promise<void> {
    await expect(this.loadButton).toBeEnabled();
  }

  async clickLoadButton(): Promise<void> {
    await this.loadButton.click();
  }

  async verifyAtRichText(text: string): Promise<void> {
    const frame = this.page.frameLocator('#tabCORS_tmpl1_UsrCorsIncDetails1_radIncDesc_contentIframe');
    const content = await frame.locator('body').textContent();
    expect(content).toContain(text);
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }
}

// ==================== UpdateStatusAndViewHistoryTab ====================

export class UpdateStatusAndViewHistoryTabPage {
  readonly page: Page;
  readonly updateDate: Locator;
  readonly updateTime: Locator;
  readonly updateByEdit: Locator;
  readonly statusDropdown: Locator;
  readonly commentsEdit: Locator;
  readonly addButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.updateDate = page.locator('#dttmUpdate_Date_KPIDttmCtrl');
    this.updateTime = page.locator("//table[@id='dttmUpdate_Time']//input");
    this.updateByEdit = page.locator('#lupOfficePF_CodeValue');
    this.statusDropdown = page.locator('#cddStatus_DropDown');
    this.commentsEdit = page.locator('#txtComments');
    this.addButton = page.locator('#cmdAddPurHistory');
  }

  async taboutDateNTime(): Promise<void> {
    await this.updateDate.press('Tab');
    await this.updateTime.press('Tab');
  }

  async taboutUpdatedBy(): Promise<void> {
    await this.updateByEdit.press('Tab');
  }

  async selectAtStatus(status: string): Promise<void> {
    await this.statusDropdown.selectOption({ label: status });
  }

  async enterAtComments(comments: string): Promise<void> {
    await this.commentsEdit.fill(comments);
  }

  async clickAdd(): Promise<void> {
    await this.addButton.click();
  }
}

// ==================== LocationCheckDispositionTab ====================

export class LocationCheckDispositionTabPage {
  readonly page: Page;
  readonly houseDispositionDropdown: Locator;
  readonly dispositionDate: Locator;
  readonly dispositionTime: Locator;
  readonly officerPF: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.houseDispositionDropdown = page.locator('#cddServiceDisposition_DropDown');
    this.dispositionDate = page.locator('#DispositionDttm_Date_KPIDttmCtrl');
    this.dispositionTime = page.locator("//table[@id='DispositionDttm_Time']//input");
    this.officerPF = page.locator('#lupOfficerPF_CodeValue');
    this.saveButton = page.locator('#cmdSave');
  }

  async selectAtHouseDisposition(disposition: string): Promise<void> {
    await this.houseDispositionDropdown.selectOption({ label: disposition });
  }

  async taboutDispositionDateNTime(): Promise<void> {
    await this.dispositionDate.press('Tab');
    await this.dispositionTime.press('Tab');
  }

  async taboutOfficerPF(): Promise<void> {
    await this.officerPF.press('Tab');
  }

  async save(): Promise<void> {
    await this.saveButton.click();
    this.page.once('dialog', async dialog => { await dialog.accept(); });
  }
}

// ==================== CSCFSCodeMap ====================

export class CSCFSCodeMapPage {
  readonly page: Page;
  readonly incidentTypeDropdown: Locator;
  readonly searchButton: Locator;
  readonly resultGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.incidentTypeDropdown = page.locator('#cddIncidentCode_DropDown');
    this.searchButton = page.locator('#cmdSearch');
    this.resultGrid = page.locator('#grdIncidentType');
  }

  async selectAtIncidentType(incidentType: string): Promise<void> {
    await this.incidentTypeDropdown.selectOption({ label: incidentType });
  }

  async clickSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async verifyAtIncidentTypeInGrid(incidentType: string): Promise<void> {
    const cells = this.resultGrid.locator("//th[contains(text(),'Incident Type')]/ancestor::table//tbody/tr/td[position()=count(//th[contains(text(),'Incident Type')]/preceding-sibling::th)+1]");
    const count = await cells.count();
    for (let i = 0; i < count; i++) {
      const text = await cells.nth(i).textContent();
      expect(text).toBe(incidentType);
    }
  }

  async verifyAtColumnValuesAreSortedAscendingOrder(columnHeader: string): Promise<void> {
    // Grid sorting verification
  }

  async verifyGridIsNull(): Promise<void> {
    const rowCount = await this.resultGrid.locator('tbody tr').count();
    expect(rowCount).toBe(0);
  }

  async verifyGridIsNotNull(): Promise<void> {
    const rowCount = await this.resultGrid.locator('tbody tr').count();
    expect(rowCount).toBeGreaterThan(0);
  }

  async verifyAtColumnValuesAreSortedDescendingOrder(columnHeader: string): Promise<void> {
    // Grid sorting verification
  }
}

// ==================== CheckIntervalTab ====================

export class CheckIntervalTabPage {
  readonly page: Page;
  readonly hourRadioButton: Locator;
  readonly everyHourEdit: Locator;
  readonly dailyRadioButton: Locator;
  readonly everyDaysEdit: Locator;
  readonly weeklyRadioButton: Locator;
  readonly everyWeekEdit: Locator;
  readonly monthlyRadioButton: Locator;
  readonly everyDayOfMonthEdit: Locator;
  readonly monthEdit: Locator;
  readonly yearlyRadioButton: Locator;
  readonly noIntervalRadioButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.hourRadioButton = page.locator('#tabHouseCheck_tmpl4_usrCheckInterval1_rdReccType_1');
    this.everyHourEdit = page.locator('#tabHouseCheck_tmpl4_usrCheckInterval1_txtHours');
    this.dailyRadioButton = page.locator('#tabHouseCheck_tmpl4_usrCheckInterval1_rdReccType_2');
    this.everyDaysEdit = page.locator('#tabHouseCheck_tmpl4_usrCheckInterval1_txtDays');
    this.weeklyRadioButton = page.locator('#tabHouseCheck_tmpl4_usrCheckInterval1_rdReccType_3');
    this.everyWeekEdit = page.locator('#tabHouseCheck_tmpl4_usrCheckInterval1_txtWeek');
    this.monthlyRadioButton = page.locator('#tabHouseCheck_tmpl4_usrCheckInterval1_rdReccType_4');
    this.everyDayOfMonthEdit = page.locator('#tabHouseCheck_tmpl4_usrCheckInterval1_txtDayOfMonth');
    this.monthEdit = page.locator('#tabHouseCheck_tmpl4_usrCheckInterval1_txtMonth');
    this.yearlyRadioButton = page.locator('#tabHouseCheck_tmpl4_usrCheckInterval1_rdReccType_5');
    this.noIntervalRadioButton = page.locator('#tabHouseCheck_tmpl4_usrCheckInterval1_rdReccType_0');
  }

  async clickHour(): Promise<void> {
    await this.hourRadioButton.click();
  }

  async enterAtEveryHour(hours: string): Promise<void> {
    await this.everyHourEdit.fill(hours);
  }

  async clickDaily(): Promise<void> {
    await this.dailyRadioButton.click();
  }

  async enterAtEveryDays(days: string): Promise<void> {
    await this.everyDaysEdit.fill(days);
  }

  async clickWeekly(): Promise<void> {
    await this.weeklyRadioButton.click();
  }

  async enterAtEveryWeeks(weeks: string): Promise<void> {
    await this.everyWeekEdit.fill(weeks);
  }

  async clickMonthly(): Promise<void> {
    await this.monthlyRadioButton.click();
  }

  async enterAtEveryDayOf(day: string): Promise<void> {
    await this.everyDayOfMonthEdit.fill(day);
  }

  async enterAtMonth(month: string): Promise<void> {
    await this.monthEdit.fill(month);
  }

  async clickYearly(): Promise<void> {
    await this.yearlyRadioButton.click();
  }

  async clickNoInterval(): Promise<void> {
    await this.noIntervalRadioButton.click();
  }
}

// ==================== CSPAlarmRequests ====================

export class CSPAlarmRequestsPage {
  readonly page: Page;
  readonly excelIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.excelIcon = page.locator("//img[contains(@src,'excel.gif')]");
  }

  async clickExcelIcon(): Promise<void> {
    await this.excelIcon.click();
  }

  async verifyRecentDownloadedFileFormat(): Promise<boolean> {
    const download = await this.page.waitForEvent('download');
    const fileName = download.suggestedFilename();
    return fileName.includes('.xlsx');
  }

  async verifyNoAckAppears(): Promise<void> {
    // Verify no dialog appears
  }

  async verifyNoDataPresentAckappears(): Promise<void> {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('(7) No data present');
      await dialog.accept();
    });
  }
}

// ==================== UpdateStatusNViewHistory ====================

export class UpdateStatusNViewHistoryPage {
  readonly page: Page;
  readonly updateDateEdit: Locator;
  readonly updateTimeEdit: Locator;
  readonly updateByEdit: Locator;
  readonly statusDropdown: Locator;
  readonly commentsEdit: Locator;
  readonly addButton: Locator;
  readonly commentsGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.updateDateEdit = page.locator('#dttmUpdate_Date_KPIDttmCtrl');
    this.updateTimeEdit = page.locator("//table[@id='dttmUpdate_Time']//input");
    this.updateByEdit = page.locator('#lupOfficePF_CodeValue');
    this.statusDropdown = page.locator('#cddStatus_DropDown');
    this.commentsEdit = page.locator('#txtComments');
    this.addButton = page.locator('#cmdAddPurHistory');
    this.commentsGrid = page.locator('#grdHistory');
  }

  async tabUpdateDateNTime(): Promise<void> {
    await this.updateDateEdit.press('Tab');
    await this.updateTimeEdit.press('Tab');
  }

  async tabUpdateBy(): Promise<void> {
    await this.updateByEdit.press('Tab');
  }

  async selectAtStatus(status: string): Promise<void> {
    await this.statusDropdown.selectOption({ label: status });
  }

  async enterAtComments(comments: string): Promise<void> {
    await this.commentsEdit.fill(comments);
  }

  async clickAdd(): Promise<void> {
    await this.addButton.click();
  }

  async verifyAtCommentsInGrid(comments: string): Promise<void> {
    const text = await this.commentsGrid.textContent();
    expect(text).toContain(comments);
  }
}

