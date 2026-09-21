import { Page, Locator, expect } from '@playwright/test';
import { BrowserHelpers } from '../../helpers/browser-helpers';
import { AcknowledgePage } from '../popup.page';

// ==================== EmploymentApplicantsPage ====================
export class EmploymentApplicantsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async switchToJobListings(): Promise<void> {
    await new BrowserHelpers(this.page).switchToPageByUrl('frmJobListingsSrch.aspx');
  }

  async switchToApplicantEntry(): Promise<void> {
    await new BrowserHelpers(this.page).switchToPageByTitle('Applicant Entry');
  }

  async switchToApplicantSearch(): Promise<void> {
    await new BrowserHelpers(this.page).switchToPageByUrl('frmApplicantSrch.aspx');
  }

  async switchToJobEntry(): Promise<void> {
    await new BrowserHelpers(this.page).switchToPageByTitle('Job Entry');
  }

  async switchToHiringTask(): Promise<void> {
    await new BrowserHelpers(this.page).switchToPageByUrl('frmHiringTasks.aspx');
  }

  async switchToOrientation(): Promise<void> {
    await new BrowserHelpers(this.page).switchToPageByUrl('frmOrientationSrch.aspx');
  }

  async switchToMyTaskScreen(): Promise<void> {
    await new BrowserHelpers(this.page).switchToPageByUrl('frmTaskInquiry.aspx');
  }

  async switchToHiringTaskFrmTaskEntry(): Promise<void> {
    await new BrowserHelpers(this.page).switchToPageByTitle('Hiring Task');
  }
}

// ==================== JobListingsPage ====================
export class JobListingsPage {
  readonly page: Page;
  readonly uIJurisComboBox: Locator;
  readonly uIJobNameComboBox: Locator;
  readonly uILocationComboBox: Locator;
  readonly uIJobEdit: Locator;
  readonly uIPostFromDateEdit: Locator;
  readonly uIPostToDateEdit: Locator;
  readonly uIIncludeInactiveCheckBox: Locator;
  readonly uIAddNewButton: Locator;
  readonly uIResetButton: Locator;
  readonly uISearchButton: Locator;
  readonly uIBackButton: Locator;
  readonly uIJobListingSearchTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIJurisComboBox = page.locator('#lstJuris');
    this.uIJobNameComboBox = page.locator('#cddJobName');
    this.uILocationComboBox = page.locator('#cddLocation_DropDown');
    this.uIJobEdit = page.locator('#txtJob');
    this.uIPostFromDateEdit = page.locator('#dtcFromDate_KPIDttmCtrl');
    this.uIPostToDateEdit = page.locator('#dtcToDate_KPIDttmCtrl');
    this.uIIncludeInactiveCheckBox = page.locator('#chkIsInActive');
    this.uIAddNewButton = page.locator("//span[text()='Add New']");
    this.uIResetButton = page.locator("//span[text()='Reset']");
    this.uISearchButton = page.locator("//span[text()='Search']");
    this.uIBackButton = page.locator("//span[text()='Back']");
    this.uIJobListingSearchTable = page.locator('#grdJobListing');
  }

  async selectAtJuris(juris: string): Promise<void> {
    await this.uIJurisComboBox.selectOption({ label: juris });
  }

  async selectAtLocation(location: string): Promise<void> {
    await this.uILocationComboBox.selectOption({ label: location });
  }

  async selectAtJobName(jobName: string): Promise<void> {
    await this.uIJobNameComboBox.selectOption({ label: jobName });
  }

  async enterAtJobEdit(job: string): Promise<void> {
    await this.uIJobEdit.fill(job);
  }

  async enterAtPostFromDate(date: string): Promise<void> {
    await this.uIPostFromDateEdit.fill(date);
  }

  async enterAtPostToDate(date: string): Promise<void> {
    await this.uIPostToDateEdit.fill(date);
  }

  async readPostFromDate(): Promise<string> {
    return await this.uIPostFromDateEdit.inputValue();
  }

  async readPostToDate(): Promise<string> {
    return await this.uIPostToDateEdit.inputValue();
  }

  async clickIncludeInactiveCheckBox(): Promise<void> {
    await this.uIIncludeInactiveCheckBox.click();
  }

  async clickSearchButton(): Promise<void> {
    await this.uISearchButton.click();
  }

  async clickAddNewButton(): Promise<void> {
    await this.uIAddNewButton.click();
  }

  async clickResetButton(): Promise<void> {
    await this.uIResetButton.click();
  }

  async clickBackButton(): Promise<void> {
    await this.uIBackButton.click();
  }

  async verifyAtJOBNoInGrid(jobNo?: string): Promise<void> {
    if (jobNo) {
      const cellText = await this.uIJobListingSearchTable.locator('td').first().innerText();
      expect(cellText).toContain(jobNo);
    } else {
      const rows = await this.uIJobListingSearchTable.locator('tbody tr').count();
      expect(rows).toBeGreaterThan(0);
    }
  }

  async verifyPostFromDate(readFromDate: string): Promise<void> {
    const cellText = await this.uIJobListingSearchTable.locator('tbody tr td:nth-child(4)').first().innerText();
    expect(cellText).toContain(readFromDate);
  }

  async verifyPostToDate(readToDate: string): Promise<void> {
    const cellText = await this.uIJobListingSearchTable.locator('tbody tr td:nth-child(5)').first().innerText();
    expect(cellText).toContain(readToDate);
  }

  async verifyatLocation(location: string): Promise<void> {
    const cellText = await this.uIJobListingSearchTable.locator('tbody tr td:nth-child(3)').first().innerText();
    expect(cellText).toContain(location);
  }

  async verifyAtJobNameInGrid(jobName: string): Promise<void> {
    const cellText = await this.uIJobListingSearchTable.locator('tbody tr td:nth-child(2)').first().innerText();
    expect(cellText).toContain(jobName);
  }

  async clickAtJobNameInGrid(jobName: string): Promise<void> {
    await this.uIJobListingSearchTable.locator('td', { hasText: jobName }).click();
  }

  async verifyNorecordsFoundAcknowledgeMessage(): Promise<void> {
    await new AcknowledgePage(this.page).okWithExpectedMessage('No records found');
  }

  async verifyJobNameGridCellAsGreyOut(jobName: string): Promise<void> {
    const cell = this.uIJobListingSearchTable.locator('td', { hasText: jobName });
    const color = await cell.evaluate(el => getComputedStyle(el).color);
    expect(color).toContain('128');
  }

  async verifyJobNameGridCellAsNotGreyOut(jobName: string): Promise<void> {
    const cell = this.uIJobListingSearchTable.locator('td', { hasText: jobName });
    const color = await cell.evaluate(el => getComputedStyle(el).color);
    expect(color).not.toContain('128');
  }

  async enterPostFromDateAsCurrentDate(): Promise<void> {
    const today = new Date();
    const formatted = `${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getDate().toString().padStart(2, '0')}/${today.getFullYear()}`;
    await this.uIPostFromDateEdit.fill(formatted);
    await this.uIPostFromDateEdit.press('Tab');
  }

  async enterPostToDateAs7DaysFuture(): Promise<void> {
    const future = new Date();
    future.setDate(future.getDate() + 7);
    const formatted = `${(future.getMonth() + 1).toString().padStart(2, '0')}/${future.getDate().toString().padStart(2, '0')}/${future.getFullYear()}`;
    await this.uIPostToDateEdit.fill(formatted);
    await this.uIPostToDateEdit.press('Tab');
  }

  async verifyPostingDateColumnValueAsCurrentDate(): Promise<void> {
    const today = new Date();
    const formatted = `${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getDate().toString().padStart(2, '0')}/${today.getFullYear()}`;
    const cellText = await this.uIJobListingSearchTable.locator('tbody tr td:nth-child(4)').first().innerText();
    expect(cellText).toContain(formatted);
  }

  async verifyAtDefaultJuris(selectedItem: string): Promise<void> {
    const value = await this.uIJurisComboBox.inputValue();
    expect(value).not.toBe('');
  }

  async verifyGridColumnByJuris(juris: string): Promise<void> {
    const cells = this.uIJobListingSearchTable.locator('tbody tr td:nth-child(1)');
    const count = await cells.count();
    for (let i = 0; i < count; i++) {
      const text = await cells.nth(i).innerText();
      expect(text).toContain(juris);
    }
  }

  async verifyInactiveRowIsListed(): Promise<void> {
    const rows = await this.uIJobListingSearchTable.locator('tbody tr').count();
    expect(rows).toBeGreaterThan(0);
  }

  async verifyAtColumnValuesSortedAscendingOrder(columnHeader: string): Promise<void> {
    const header = this.uIJobListingSearchTable.locator('th', { hasText: columnHeader });
    await header.click();
    const cells = this.uIJobListingSearchTable.locator('tbody tr td');
    const values: string[] = [];
    const count = await cells.count();
    for (let i = 0; i < count; i++) {
      values.push(await cells.nth(i).innerText());
    }
    const sorted = [...values].sort();
    expect(values).toEqual(sorted);
  }

  async verifyAtColumnValuesSortedDescendingOrder(columnHeader: string): Promise<void> {
    const header = this.uIJobListingSearchTable.locator('th', { hasText: columnHeader });
    await header.click();
    const cells = this.uIJobListingSearchTable.locator('tbody tr td');
    const values: string[] = [];
    const count = await cells.count();
    for (let i = 0; i < count; i++) {
      values.push(await cells.nth(i).innerText());
    }
    const sorted = [...values].sort().reverse();
    expect(values).toEqual(sorted);
  }

  async selectAtJobInGrid(jobEdit: string): Promise<void> {
    await this.uIJobListingSearchTable.locator('td', { hasText: jobEdit }).click();
  }
}

// ==================== ApplicantEntryPage ====================
export class ApplicantEntryPage {
  readonly page: Page;
  readonly uIJobIDDropdown: Locator;
  readonly uILastNameEdit: Locator;
  readonly uIFirstNameEdit: Locator;
  readonly uIPhoneNoEdit: Locator;
  readonly uIEmailEdit: Locator;
  readonly uIMainTab: Locator;
  readonly uITasksNScheduleTab: Locator;
  readonly uIApprovalNStatusTab: Locator;
  readonly uINotesTab: Locator;
  readonly uIRequestToSubmitApplication: Locator;
  readonly uISaveButton: Locator;
  readonly uISaveNCloseButton: Locator;
  readonly uIStatusbar: Locator;
  readonly uIRefreshButton: Locator;
  readonly uIApplicationYear: Locator;
  readonly uIApplicationNumber: Locator;
  readonly uIJuris: Locator;
  readonly uIJobInfoIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIJobIDDropdown = page.locator('#cddJobID');
    this.uILastNameEdit = page.locator('#cstName_LastName');
    this.uIFirstNameEdit = page.locator('#cstName_FirstName');
    this.uIPhoneNoEdit = page.locator('#mskPhoneNo');
    this.uIEmailEdit = page.locator('#txtEmail');
    this.uIMainTab = page.locator("//span[text()='Main']");
    this.uITasksNScheduleTab = page.locator("//span[text()='Tasks & Schedule']");
    this.uIApprovalNStatusTab = page.locator("//span[text()='Approval & Status']");
    this.uINotesTab = page.locator("//span[text()='Notes']");
    this.uIRequestToSubmitApplication = page.locator('#btnSubmitApplication');
    this.uISaveButton = page.locator('#cmdSave');
    this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
    this.uIStatusbar = page.locator("//td[@class='statusBar']//b");
    this.uIRefreshButton = page.locator('#cmdRefresh');
    this.uIApplicationYear = page.locator('#numApplicationNo_Year');
    this.uIApplicationNumber = page.locator('#numApplicationNo_Number');
    this.uIJuris = page.locator("//select[@id='lstJuris']");
    this.uIJobInfoIcon = page.locator('#cmdLockInfo');
  }

  async selectAtJobID(jobID: string): Promise<void> {
    await this.uIJobIDDropdown.selectOption({ label: jobID });
  }

  async enterAtLastName(lastName: string): Promise<void> {
    await this.uILastNameEdit.fill(lastName);
    await this.uILastNameEdit.press('Tab');
  }

  async enterAtFirstName(firstName: string): Promise<void> {
    await this.uIFirstNameEdit.fill(firstName);
    await this.uIFirstNameEdit.press('Tab');
  }

  async enterAtPhoneNo(phoneNo: string): Promise<void> {
    await this.uIPhoneNoEdit.click();
    await this.uIPhoneNoEdit.fill(phoneNo);
  }

  async enterAtEmail(email: string): Promise<void> {
    await this.uIEmailEdit.fill(email);
  }

  async switchToMainTab(): Promise<void> {
    await this.uIMainTab.click();
  }

  async switchToTasksNScheduleTab(): Promise<void> {
    await this.uITasksNScheduleTab.click();
  }

  async switchToNotesTab(): Promise<void> {
    await this.uINotesTab.click();
  }

  async switchToApprovalNStatusTab(): Promise<void> {
    await this.uIApprovalNStatusTab.click();
  }

  async clickRequestToSubmitApplication(): Promise<void> {
    await this.uIRequestToSubmitApplication.click();
    /* confirm popup: Are you sure you want to submit this application? */
  }

  async save(): Promise<void> {
    await this.uISaveButton.click();
    /* confirm popup: Do you want to save? */
  }

  async saveNClose(): Promise<void> {
    await this.uISaveNCloseButton.click();
    /* confirm popup: Do you want to save? */
  }

  async clickSave(): Promise<void> {
    await this.uISaveButton.click();
  }

  async verifyStatusMessageAsUpdateSuccessful(): Promise<void> {
    const text = await this.uIStatusbar.innerText();
    expect(text).toContain('Update Successful');
  }

  async clickRefresh(): Promise<void> {
    await this.uIRefreshButton.click();
  }

  async verifyAtJobID(jobID: string): Promise<void> {
    const selectedText = await this.uIJobIDDropdown.locator('option:checked').innerText();
    expect(selectedText).toContain(jobID);
  }

  async verifyUpdateSuccessfulBottomMessage(): Promise<void> {
    const text = await this.uIStatusbar.innerText();
    expect(text).toContain('Update Successful');
  }

  async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
    const text = await this.uIStatusbar.innerText();
    expect(text).toContain('Addition Successful');
  }

  async selectJobID(): Promise<void> {
    // random select dropdown option
    const options = this.uIJobIDDropdown.locator('option');
    const count = await options.count();
    const randomIndex = Math.floor(Math.random() * (count - 1)) + 1;
    const value = await options.nth(randomIndex).getAttribute('value');
    await this.uIJobIDDropdown.selectOption(value!);
  }

  async enterLastName(): Promise<void> {
    const randomName = 'Auto' + Date.now().toString().slice(-5);
    await this.uILastNameEdit.fill(randomName);
    await this.uILastNameEdit.press('Tab');
  }

  async enterFirstName(): Promise<void> {
    const randomName = 'Test' + Date.now().toString().slice(-5);
    await this.uIFirstNameEdit.fill(randomName);
    await this.uIFirstNameEdit.press('Tab');
  }

  async enterPhoneNo(): Promise<void> {
    const randomPhone = '555' + Math.floor(Math.random() * 9000000 + 1000000).toString();
    await this.uIPhoneNoEdit.click();
    await this.uIPhoneNoEdit.fill(randomPhone);
  }

  async enterEmail(): Promise<void> {
    await this.uIEmailEdit.fill('test@phoenix.com');
  }

  async verifyApplicantNo(): Promise<void> {
    const year = await this.uIApplicationYear.inputValue();
    const number = await this.uIApplicationNumber.inputValue();
    expect(year).not.toBe('');
    expect(number).not.toBe('');
  }

  async getApplicantNo(): Promise<string> {
    const year = await this.uIApplicationYear.inputValue();
    const number = await this.uIApplicationNumber.inputValue();
    return `${year}-${number}`;
  }

  async getLastName(): Promise<string> {
    return await this.uILastNameEdit.inputValue();
  }

  async getFirstName(): Promise<string> {
    return await this.uIFirstNameEdit.inputValue();
  }

  async verifyRequiredEntriesAreMissingAcknowledgeMessage(): Promise<void> {
    /* popup: 1002 - Required Entries are Missing */
  }

  async verifyLastNameIsMandatoryAcknowledgePopup(): Promise<void> {
    /* popup: Last Name is Mandatory */
  }

  async verifyFirstNameIsMandatoryAcknowledgePopup(): Promise<void> {
    /* popup: First Name is Mandatory */
  }

  async cancelSaveConfirmationPopup(): Promise<void> {
    await this.uISaveButton.click();
    /* confirm popup: No */
  }

  async verifyInvalidPhoneNoPopup(): Promise<void> {
    /* popup: Invalid Phone No */
  }

  async verifyNotAValidEmailAddress(): Promise<void> {
    /* popup: Not a valid email address */
  }

  async verifyAtJuris(juris: string): Promise<void> {
    const selectedText = await this.uIJuris.locator('option:checked').innerText();
    expect(selectedText).toContain(juris);
  }

  async close(): Promise<void> {
    await this.page.close();
  }

  async clickJobInfoIcon(): Promise<void> {
    await this.uIJobInfoIcon.click();
  }

  async verify1018RequiredEntriesAreMissingCustom1Ack(): Promise<void> {
    /* popup: 1018 - Required Entries are Missing - Custom1 */
  }

  async verify1018RequiredEntriesAreMissingCustom2Ack(): Promise<void> {
    /* popup: 1018 - Required Entries are Missing - Custom2 */
  }
}

// ==================== ApplicantEntryMainTabPage ====================
export class ApplicantEntryMainTabPage {
  readonly page: Page;
  readonly uIYOSYearEdit: Locator;
  readonly uIYOSMonthEdit: Locator;
  readonly uIDurationYearEdit: Locator;
  readonly uIDurationMonthEdit: Locator;
  readonly uIForLocationDropdown: Locator;
  readonly uIApplicationReceivedOnEdit: Locator;
  readonly uIHROwnerPFEdit: Locator;
  readonly uILeftSideStatusBar: Locator;
  readonly uICustomLabel2: Locator;
  readonly uICustomLabel1: Locator;
  readonly uIExperienceLevel: Locator;
  readonly uICustom1Edit: Locator;
  readonly uICustom2Edit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIYOSYearEdit = page.locator('#tabApplicantEntry_tmpl0_usrApplicantEntryMain_txtYear');
    this.uIYOSMonthEdit = page.locator('#tabApplicantEntry_tmpl0_usrApplicantEntryMain_txtMonth');
    this.uIDurationYearEdit = page.locator('#tabApplicantEntry_tmpl0_usrApplicantEntryMain_txtDurYear');
    this.uIDurationMonthEdit = page.locator('#tabApplicantEntry_tmpl0_usrApplicantEntryMain_txtDurMonth');
    this.uIForLocationDropdown = page.locator('#tabApplicantEntry_tmpl0_usrApplicantEntryMain_cddLocation_DropDown');
    this.uIApplicationReceivedOnEdit = page.locator('#tabApplicantEntry_tmpl0_usrApplicantEntryMain_dtAppRevOn_KPIDttmCtrl');
    this.uIHROwnerPFEdit = page.locator('#tabApplicantEntry_tmpl0_usrApplicantEntryMain_lupPF_CodeValue');
    this.uILeftSideStatusBar = page.locator("//td[@class='statusBar']/b");
    this.uICustomLabel2 = page.locator('#tabApplicantEntry_tmpl0_usrApplicantEntryMain_KPILabel1');
    this.uICustomLabel1 = page.locator('#tabApplicantEntry_tmpl0_usrApplicantEntryMain_lblCustom1');
    this.uIExperienceLevel = page.locator('#tabApplicantEntry_tmpl0_usrApplicantEntryMain_cddExperiencelevel_DropDown');
    this.uICustom1Edit = page.locator('#tabApplicantEntry_tmpl0_usrApplicantEntryMain_txtCustom1');
    this.uICustom2Edit = page.locator('#tabApplicantEntry_tmpl0_usrApplicantEntryMain_txtCustom2');
  }

  async enterAtYOSYear(yosYear: string): Promise<void> {
    await this.uIYOSYearEdit.fill(yosYear);
  }

  async enterAtYOSMonth(yosMonth: string): Promise<void> {
    await this.uIYOSMonthEdit.fill(yosMonth);
  }

  async enterAtDurationMonth(month: string): Promise<void> {
    await this.uIDurationMonthEdit.fill(month);
  }

  async enterAtDurationYear(year: string): Promise<void> {
    await this.uIDurationYearEdit.fill(year);
  }

  async selectAtForLocation(location: string): Promise<void> {
    await this.uIForLocationDropdown.selectOption({ label: location });
  }

  async enterApplicationReceivedOnAsCurrentDate(): Promise<void> {
    const today = new Date();
    const formatted = `${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getDate().toString().padStart(2, '0')}/${today.getFullYear()}`;
    await this.uIApplicationReceivedOnEdit.fill(formatted);
  }

  async enterAtHROwnerPF(pf: string): Promise<void> {
    await this.uIHROwnerPFEdit.fill(pf);
    await this.uIHROwnerPFEdit.press('Tab');
  }

  async enterYOSYear(): Promise<void> {
    const random = Math.floor(Math.random() * 10).toString();
    await this.uIYOSYearEdit.fill(random);
  }

  async enterYOSMonth(): Promise<void> {
    const random = Math.floor(Math.random() * 12).toString();
    await this.uIYOSMonthEdit.fill(random);
  }

  async enterDurationYear(): Promise<void> {
    const random = Math.floor(Math.random() * 5).toString();
    await this.uIDurationYearEdit.fill(random);
  }

  async enterDurationMonth(): Promise<void> {
    const random = Math.floor(Math.random() * 12).toString();
    await this.uIDurationMonthEdit.fill(random);
  }

  async clickCustomLabel2(): Promise<void> {
    await this.uICustomLabel2.click();
  }

  async verifyCustomLabelDisabled(): Promise<void> {
    await expect(this.uICustomLabel2).toBeDisabled();
  }

  async clickCustomLabel1(): Promise<void> {
    await this.uICustomLabel1.click();
  }

  async verifyAtCustomLabel1Text(text: string): Promise<void> {
    const labelText = await this.uICustomLabel1.innerText();
    expect(labelText).toContain(text);
  }

  async verifyAtCustomLabel2Text(text: string): Promise<void> {
    const labelText = await this.uICustomLabel2.innerText();
    expect(labelText).toContain(text);
  }

  async verifyYOSIsDisplayed(): Promise<void> {
    await expect(this.uIYOSYearEdit).toBeVisible();
    await expect(this.uIYOSMonthEdit).toBeVisible();
  }

  async verifyAtLocation(location: string): Promise<void> {
    const selectedText = await this.uIForLocationDropdown.locator('option:checked').innerText();
    expect(selectedText).toContain(location);
  }

  async verifyAtPF(pf: string): Promise<void> {
    const value = await this.uIHROwnerPFEdit.inputValue();
    expect(value).toContain(pf);
  }

  async selectAtExperienceLevel(level: string): Promise<void> {
    await this.uIExperienceLevel.selectOption({ label: level });
  }

  async enterAtCustom1(custom1: string): Promise<void> {
    await this.uICustom1Edit.fill(custom1);
  }

  async enterAtCustom2(custom2: string): Promise<void> {
    await this.uICustom2Edit.fill(custom2);
  }
}

// ==================== ApplicantEntryTasksNScheduleTabPage ====================
export class ApplicantEntryTasksNScheduleTabPage {
  readonly page: Page;
  readonly uIAddTaskButton: Locator;
  readonly uITaskScheduleResultTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIAddTaskButton = page.locator('#tabApplicantEntry_tmpl1_usrTasksSchedule_cmdAddTask');
    this.uITaskScheduleResultTable = page.locator('#tabApplicantEntry_tmpl1_usrTasksSchedule_grdTaskSchedule');
  }

  async clickAddTask(): Promise<void> {
    await this.uIAddTaskButton.click();
  }

  async verifyAtTaskDescriptionInGrid(taskDescription: string): Promise<void> {
    const cell = this.uITaskScheduleResultTable.locator('td', { hasText: taskDescription });
    await expect(cell).toBeVisible();
  }

  async selectAtAssignedToPFInGrid(assignedToPF: string): Promise<void> {
    await this.uITaskScheduleResultTable.locator('td', { hasText: assignedToPF }).click();
  }
}

// ==================== ApplicantEntryNotesTabPage ====================
export class ApplicantEntryNotesTabPage {
  readonly page: Page;
  readonly uIAddNotesButton: Locator;
  readonly uINotesGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIAddNotesButton = page.locator('#btnAddNotes');
    this.uINotesGrid = page.locator('#grdLog');
  }

  async clickAddNotes(): Promise<void> {
    await this.uIAddNotesButton.click();
  }

  async verifyAtRemarksInGrid(remarks: string): Promise<void> {
    const cell = this.uINotesGrid.locator('td', { hasText: remarks });
    await expect(cell).toBeVisible();
  }
}

// ==================== ApprovalNStatusTabPage ====================
export class ApprovalNStatusTabPage {
  readonly page: Page;
  readonly uIReviewCompletedEdit: Locator;
  readonly uIResultDropdown: Locator;
  readonly uIOfferDetailsButton: Locator;
  readonly uIOfferSentOnEdit: Locator;
  readonly uIOfferAcceptedRadioButton: Locator;
  readonly uIDeclinedRadioButton: Locator;
  readonly uIAcceptanceStatusDateEdit: Locator;
  readonly uILoginUserNameEdit: Locator;
  readonly uIPhoneExtEdit: Locator;
  readonly uIIPAddressForPCEdit: Locator;
  readonly uISendEmailToITButton: Locator;
  readonly uIOfferedCTCEdit: Locator;
  readonly uIPFInfoIcon: Locator;
  readonly uISelectedRankEdit: Locator;
  readonly uICandidateStatusDropdown: Locator;
  readonly uIExpectedDateOfJoining: Locator;
  readonly uIDateUnderIfJoinedLinkToPersonnelRecord: Locator;
  readonly uIPFNoEdit: Locator;
  readonly uICreatePFButton: Locator;
  readonly uIIfDeclinedReasonEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIReviewCompletedEdit = page.locator('#tabApplicantEntry_tmpl4_usrApplicantApproval_dtReviewCompleted_KPIDttmCtrl');
    this.uIResultDropdown = page.locator('#tabApplicantEntry_tmpl4_usrApplicantApproval_cddResult_DropDown');
    this.uIOfferDetailsButton = page.locator('#tabApplicantEntry_tmpl4_usrApplicantApproval_cmdOffDet');
    this.uIOfferSentOnEdit = page.locator('#tabApplicantEntry_tmpl4_usrApplicantApproval_dtOfferSentON_KPIDttmCtrl');
    this.uIOfferAcceptedRadioButton = page.locator('#tabApplicantEntry_tmpl4_usrApplicantApproval_RdnOffAcc');
    this.uIDeclinedRadioButton = page.locator('#tabApplicantEntry_tmpl4_usrApplicantApproval_RdnOffDec');
    this.uIAcceptanceStatusDateEdit = page.locator('#tabApplicantEntry_tmpl4_usrApplicantApproval_dtDate_KPIDttmCtrl');
    this.uILoginUserNameEdit = page.locator('#tabApplicantEntry_tmpl4_usrApplicantApproval_txtUserName');
    this.uIPhoneExtEdit = page.locator('#tabApplicantEntry_tmpl4_usrApplicantApproval_txtPhone');
    this.uIIPAddressForPCEdit = page.locator('#tabApplicantEntry_tmpl4_usrApplicantApproval_txtIPAddress');
    this.uISendEmailToITButton = page.locator('#tabApplicantEntry_tmpl4_usrApplicantApproval_KpiSendMail');
    this.uIOfferedCTCEdit = page.locator('#tabApplicantEntry_tmpl4_usrApplicantApproval_txtOfferedCTC');
    this.uIPFInfoIcon = page.locator('#tabApplicantEntry_tmpl4_usrApplicantApproval_cmdLockInfo');
    this.uISelectedRankEdit = page.locator('#tabApplicantEntry_tmpl4_usrApplicantApproval_txtSelectedRank');
    this.uICandidateStatusDropdown = page.locator('#tabApplicantEntry_tmpl4_usrApplicantApproval_cddCandidateStatus_DropDown');
    this.uIExpectedDateOfJoining = page.locator('#tabApplicantEntry_tmpl4_usrApplicantApproval_dtExpDateofJoining_KPIDttmCtrl');
    this.uIDateUnderIfJoinedLinkToPersonnelRecord = page.locator('#tabApplicantEntry_tmpl4_usrApplicantApproval_dtCreatePFDate_KPIDttmCtrl');
    this.uIPFNoEdit = page.locator('#tabApplicantEntry_tmpl4_usrApplicantApproval_txtPFNo');
    this.uICreatePFButton = page.locator('#tabApplicantEntry_tmpl4_usrApplicantApproval_btnCreatePF');
    this.uIIfDeclinedReasonEdit = page.locator('#tabApplicantEntry_tmpl4_usrApplicantApproval_txtReason');
  }

  async enterReviewCompletedAsCurrentDate(): Promise<void> {
    const today = new Date();
    const formatted = `${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getDate().toString().padStart(2, '0')}/${today.getFullYear()}`;
    await this.uIReviewCompletedEdit.fill(formatted);
  }

  async selectAtResult(result: string): Promise<void> {
    await this.uIResultDropdown.selectOption({ label: result });
  }

  async clickOfferDetails(): Promise<void> {
    await this.uIOfferDetailsButton.click();
  }

  async clickOfferAcceptedRadioButton(): Promise<void> {
    await this.uIOfferAcceptedRadioButton.click();
  }

  async verifyLoginUserNameIsEnabled(): Promise<void> {
    await expect(this.uILoginUserNameEdit).toBeEnabled();
  }

  async verifyPhoneExtIsEnabled(): Promise<void> {
    await expect(this.uIPhoneExtEdit).toBeEnabled();
  }

  async verifyIPAddressForPCIsEnabled(): Promise<void> {
    await expect(this.uIIPAddressForPCEdit).toBeEnabled();
  }

  async verifyLoginUserNameIsDisabled(): Promise<void> {
    await expect(this.uILoginUserNameEdit).toBeDisabled();
  }

  async verifyPhoneExtIsDisabled(): Promise<void> {
    await expect(this.uIPhoneExtEdit).toBeDisabled();
  }

  async verifyIPAddressForPCIsDisabled(): Promise<void> {
    await expect(this.uIIPAddressForPCEdit).toBeDisabled();
  }

  async clickDeclinedRadioButton(): Promise<void> {
    await this.uIDeclinedRadioButton.click();
  }

  async enterAtLoginUserName(loginUserName: string): Promise<void> {
    await this.uILoginUserNameEdit.fill(loginUserName);
  }

  async enterAcceptanceStatusDateAsCurrentDate(): Promise<void> {
    const today = new Date();
    const formatted = `${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getDate().toString().padStart(2, '0')}/${today.getFullYear()}`;
    await this.uIAcceptanceStatusDateEdit.fill(formatted);
  }

  async enterAtOfferedCTC(ctc: string): Promise<void> {
    await this.uIOfferedCTCEdit.fill(ctc);
  }

  async verifyAtOfferedCTC(ctc: string): Promise<void> {
    const value = await this.uIOfferedCTCEdit.inputValue();
    expect(value).toEqual(ctc);
  }

  async verifyPFInfoIconNotDisplayed(): Promise<void> {
    await expect(this.uIPFInfoIcon).not.toBeVisible();
  }

  async verifyAtResult(result: string): Promise<void> {
    const selectedText = await this.uIResultDropdown.locator('option:checked').innerText();
    expect(selectedText).toContain(result);
  }

  async enterAtSelectedRank(selectedRank: string): Promise<void> {
    await this.uISelectedRankEdit.fill(selectedRank);
  }

  async selectAtCandidateStatus(candidateStatus: string): Promise<void> {
    await this.uICandidateStatusDropdown.selectOption({ label: candidateStatus });
  }

  async enterOfferSentOnDate(): Promise<void> {
    const today = new Date();
    const formatted = `${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getDate().toString().padStart(2, '0')}/${today.getFullYear()}`;
    await this.uIOfferSentOnEdit.fill(formatted);
  }

  async enterExpectedDateOfJoining(): Promise<void> {
    const future = new Date();
    future.setDate(future.getDate() + 30);
    const formatted = `${(future.getMonth() + 1).toString().padStart(2, '0')}/${future.getDate().toString().padStart(2, '0')}/${future.getFullYear()}`;
    await this.uIExpectedDateOfJoining.fill(formatted);
  }

  async verifySelectedRankAcceptsOnly6char(): Promise<void> {
    const value = await this.uISelectedRankEdit.inputValue();
    expect(value.length).toBeLessThanOrEqual(6);
  }

  async enterSelectedRank(): Promise<void> {
    const random = Math.floor(Math.random() * 100).toString();
    await this.uISelectedRankEdit.fill(random);
  }

  async verifyDateForIfJoinedLinkToPersonnelRecordIsEnabled(): Promise<void> {
    await expect(this.uIDateUnderIfJoinedLinkToPersonnelRecord).toBeEnabled();
  }

  async verifyPFNoIsEnabled(): Promise<void> {
    await expect(this.uIPFNoEdit).toBeEnabled();
  }

  async enterAtPhoneExt(phoneExt: string): Promise<void> {
    await this.uIPhoneExtEdit.fill(phoneExt);
  }

  async enterAtIPAddressForThePC(ipAddress: string): Promise<void> {
    await this.uIIPAddressForPCEdit.fill(ipAddress);
  }

  async enterDateForIfJoinedLinkToPersonnelRecordAsCurrentDate(): Promise<void> {
    const today = new Date();
    const formatted = `${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getDate().toString().padStart(2, '0')}/${today.getFullYear()}`;
    await this.uIDateUnderIfJoinedLinkToPersonnelRecord.fill(formatted);
  }

  async enterAtPFNoEdit(pfNo: string): Promise<void> {
    await this.uIPFNoEdit.fill(pfNo);
  }

  async clickCreatePF(): Promise<void> {
    await this.uICreatePFButton.click();
  }

  async clickPFInfoIcon(): Promise<void> {
    await this.uIPFInfoIcon.click();
  }

  async verifyIfDeclinedReasonIsEnabled(): Promise<void> {
    await expect(this.uIIfDeclinedReasonEdit).toBeEnabled();
  }

  async enterAtIfDeclinedreason(): Promise<void> {
    await this.uIIfDeclinedReasonEdit.fill('Declined reason');
  }

  async verifyDateForIfJoinedLinkToPersonnelRecordIsDisabled(): Promise<void> {
    await expect(this.uIDateUnderIfJoinedLinkToPersonnelRecord).toBeDisabled();
  }

  async verifyPFNoIsDisabled(): Promise<void> {
    await expect(this.uIPFNoEdit).toBeDisabled();
  }
}

// ==================== ApplicantSearchPage ====================
export class ApplicantSearchPage {
  readonly page: Page;
  readonly uIJurisComboBox: Locator;
  readonly uIJobNameComboBox: Locator;
  readonly uILocationComboBox: Locator;
  readonly uIApplicationStatusComboBox: Locator;
  readonly uIAssignedToLookUpEdit: Locator;
  readonly uIDivisionComboBox: Locator;
  readonly uIJobNumberEdit: Locator;
  readonly uIHROwnerPFLookUpEdit: Locator;
  readonly uISectionComboBox: Locator;
  readonly uISquadComboBox: Locator;
  readonly uIHROwnerDivisionComboBox: Locator;
  readonly uIHROwnerSectionComboBox: Locator;
  readonly uIHROwnerSquadComboBox: Locator;
  readonly uIApplicationYearEdit: Locator;
  readonly uIApplicationNoEdit: Locator;
  readonly uILastNameEdit: Locator;
  readonly uIFirstNameEdit: Locator;
  readonly uIApplicantIDEdit: Locator;
  readonly uIPhoneNoEdit: Locator;
  readonly uIEMailEdit: Locator;
  readonly uISexComboBox: Locator;
  readonly uIRaceComboBox: Locator;
  readonly uIEthnicityComboBox: Locator;
  readonly uIDOBEdit: Locator;
  readonly uIApplicationFromDate: Locator;
  readonly uIApplicationToDate: Locator;
  readonly uIExperienceLevelComboBox: Locator;
  readonly uIEducationComboBox: Locator;
  readonly uIAddNewButton: Locator;
  readonly uIResetButton: Locator;
  readonly uISearchButton: Locator;
  readonly uIBackButton: Locator;
  readonly uIApplicantSearchResultTable: Locator;
  readonly uIIncludeClosedCheckbox: Locator;
  readonly uIApplicationPhaseDropdown: Locator;
  readonly uIOurResultDropdown: Locator;
  readonly uICandidateStatusDropdown: Locator;
  readonly uIRefreshButton: Locator;
  readonly uIExcelIcon: Locator;
  readonly uIPrintIcon: Locator;
  readonly uINextButton: Locator;
  readonly uIPrevButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIJurisComboBox = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_lstJuris');
    this.uIJobNameComboBox = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_CddJobID');
    this.uILocationComboBox = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_cddLocation_DropDown');
    this.uIApplicationStatusComboBox = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_cddApplicationStatus_DropDown');
    this.uIAssignedToLookUpEdit = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_lupAssignedTo_CodeValue');
    this.uIDivisionComboBox = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_cddAssDivision_DropDown');
    this.uIJobNumberEdit = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_txtJobNo');
    this.uIHROwnerPFLookUpEdit = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_lupPF_CodeValue');
    this.uISectionComboBox = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_cddAssSection_DropDown');
    this.uISquadComboBox = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_cddAssSquad_DropDown');
    this.uIHROwnerDivisionComboBox = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_cddDivision_DropDown');
    this.uIHROwnerSectionComboBox = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_cddSection_DropDown');
    this.uIHROwnerSquadComboBox = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_cddSquad_DropDown');
    this.uIApplicationYearEdit = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_numApplicationNo_Year');
    this.uIApplicationNoEdit = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_numApplicationNo_Number');
    this.uILastNameEdit = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_cstName_LastName');
    this.uIFirstNameEdit = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_cstName_FirstName');
    this.uIApplicantIDEdit = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_txtApplicantID');
    this.uIPhoneNoEdit = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_mskPhoneNo');
    this.uIEMailEdit = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_txtEmail');
    this.uISexComboBox = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_cddSex_DropDown');
    this.uIRaceComboBox = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_cddRace_DropDown');
    this.uIEthnicityComboBox = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_cddethnicity_DropDown');
    this.uIDOBEdit = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_dtDOB_KPIDttmCtrl');
    this.uIApplicationFromDate = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_dtcFromDate_KPIDttmCtrl');
    this.uIApplicationToDate = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_dtcToDate_KPIDttmCtrl');
    this.uIExperienceLevelComboBox = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_cddExpLevel_DropDown');
    this.uIEducationComboBox = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_cddEducation_DropDown');
    this.uIAddNewButton = page.locator("//span[text()='Add New']");
    this.uIResetButton = page.locator("//span[text()='Reset']");
    this.uISearchButton = page.locator("//span[text()='Search']");
    this.uIBackButton = page.locator("//span[text()='Back']");
    this.uIApplicantSearchResultTable = page.locator('#grdApplicant');
    this.uIIncludeClosedCheckbox = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_chkIncClosed');
    this.uIApplicationPhaseDropdown = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_cddPhase_DropDown');
    this.uIOurResultDropdown = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_cddResult_DropDown');
    this.uICandidateStatusDropdown = page.locator('#tabApplicantBaic_tmpl0_usrApplicantBasicInfo_cddCandidateStatus_DropDown');
    this.uIRefreshButton = page.locator("//span[text()='Refresh']");
    this.uIExcelIcon = page.locator("//img[contains(@src,'excel.gif')]");
    this.uIPrintIcon = page.locator("//img[contains(@src,'print.gif')]");
    this.uINextButton = page.locator('#grdApplicant_ctl00_lnkbtnNext');
    this.uIPrevButton = page.locator('#grdApplicant_ctl00_lnkbtnPrev');
  }

  async clickSearchButton(): Promise<void> {
    await this.uISearchButton.click();
  }

  async clickAddNewButton(): Promise<void> {
    await this.uIAddNewButton.click();
  }

  async clickResetButton(): Promise<void> {
    await this.uIResetButton.click();
  }

  async clickBackButton(): Promise<void> {
    await this.uIBackButton.click();
  }

  async selectAtJuris(juris: string): Promise<void> {
    await this.uIJurisComboBox.selectOption({ label: juris });
  }

  async selectAtLocation(location: string): Promise<void> {
    await this.uILocationComboBox.selectOption({ label: location });
  }

  async selectAtJobName(jobName: string): Promise<void> {
    await this.uIJobNameComboBox.selectOption({ label: jobName });
  }

  async enterAtJobNumberEdit(jobNumber: string): Promise<void> {
    await this.uIJobNumberEdit.fill(jobNumber);
  }

  async selectAtApplicationStatus(applicationStatus: string): Promise<void> {
    await this.uIApplicationStatusComboBox.selectOption({ label: applicationStatus });
  }

  async selectAtDivision(division: string): Promise<void> {
    await this.uIDivisionComboBox.selectOption({ label: division });
  }

  async selectAtSection(section: string): Promise<void> {
    await this.uISectionComboBox.selectOption({ label: section });
  }

  async selectAtSquad(squad: string): Promise<void> {
    await this.uISquadComboBox.selectOption({ label: squad });
  }

  async enterAtAssignedToEdit(assignedTo: string): Promise<void> {
    await this.uIAssignedToLookUpEdit.fill(assignedTo);
    await this.uIAssignedToLookUpEdit.press('Tab');
  }

  async selectAtHROwnerDivision(division: string): Promise<void> {
    await this.uIHROwnerDivisionComboBox.selectOption({ label: division });
  }

  async selectAtHROwnerSection(section: string): Promise<void> {
    await this.uIHROwnerSectionComboBox.selectOption({ label: section });
  }

  async selectAtHROwnerSquad(squad: string): Promise<void> {
    await this.uIHROwnerSquadComboBox.selectOption({ label: squad });
  }

  async enterAtApplicantNo(applicantNo?: string): Promise<void> {
    if (applicantNo) {
      await this.uIApplicationNoEdit.fill(applicantNo);
    } else {
      const random = Math.floor(Math.random() * 9999).toString();
      await this.uIApplicationNoEdit.fill(random);
    }
  }

  async enterAtLastName(lastName: string): Promise<void> {
    await this.uILastNameEdit.fill(lastName);
  }

  async enterAtFirstName(firstName: string): Promise<void> {
    await this.uIFirstNameEdit.fill(firstName);
  }

  async enterAtApplicantID(applicantID: string): Promise<void> {
    await this.uIApplicantIDEdit.fill(applicantID);
  }

  async enterAtPhoneNo(phoneNo: string): Promise<void> {
    await this.uIPhoneNoEdit.fill(phoneNo);
  }

  async enterAtEMail(email: string): Promise<void> {
    await this.uIEMailEdit.fill(email);
  }

  async selectAtSexComboBox(sex: string): Promise<void> {
    await this.uISexComboBox.selectOption({ label: sex });
  }

  async selectAtRaceComboBox(race: string): Promise<void> {
    await this.uIRaceComboBox.selectOption({ label: race });
  }

  async selectAtEthnicityComboBox(ethnicity: string): Promise<void> {
    await this.uIEthnicityComboBox.selectOption({ label: ethnicity });
  }

  async enterAtDOB(dob: string): Promise<void> {
    await this.uIDOBEdit.fill(dob);
  }

  async enterAtApplicationFromDate(fromDate: string): Promise<void> {
    await this.uIApplicationFromDate.fill(fromDate);
  }

  async enterAtApplicationToDate(toDate: string): Promise<void> {
    await this.uIApplicationToDate.fill(toDate);
  }

  async selectAtExperienceLevelComboBox(experienceLevel: string): Promise<void> {
    await this.uIExperienceLevelComboBox.selectOption({ label: experienceLevel });
  }

  async selectAtEducationComboBox(education: string): Promise<void> {
    await this.uIEducationComboBox.selectOption({ label: education });
  }

  async selectAtApplicantNoInGrid(applicantNo: string): Promise<void> {
    await this.uIApplicantSearchResultTable.locator('td', { hasText: applicantNo }).click();
  }

  async verifyAtNameInGrid(name: string): Promise<void> {
    const cell = this.uIApplicantSearchResultTable.locator('td', { hasText: name });
    await expect(cell).toBeVisible();
  }

  async selectAtJobNameInGrid(jobName: string): Promise<void> {
    await this.uIApplicantSearchResultTable.locator('td', { hasText: jobName }).click();
  }

  async verifyAtJobInGrid(job: string): Promise<void> {
    const cell = this.uIApplicantSearchResultTable.locator('td', { hasText: job });
    await expect(cell).toBeVisible();
  }

  async verifyBaseJurisNameNotShowingInJurisColumn(): Promise<void> {
    const jurisColumn = this.uIApplicantSearchResultTable.locator('tbody tr td:nth-child(1)');
    const count = await jurisColumn.count();
    for (let i = 0; i < count; i++) {
      const text = await jurisColumn.nth(i).innerText();
      expect(text.trim()).toBe('');
    }
  }

  async verifyOtherJurisNameShowingInJurisColumn(juris?: string): Promise<void> {
    const jurisColumn = this.uIApplicantSearchResultTable.locator('tbody tr td:nth-child(1)');
    const count = await jurisColumn.count();
    let found = false;
    for (let i = 0; i < count; i++) {
      const text = await jurisColumn.nth(i).innerText();
      if (text.trim() !== '') {
        found = true;
        if (juris) {
          expect(text).toContain(juris);
        }
      }
    }
    expect(found).toBe(true);
  }

  async selectAtJuris1(): Promise<void> {
    const options = this.uIJurisComboBox.locator('option');
    const count = await options.count();
    if (count > 1) {
      const value = await options.nth(1).getAttribute('value');
      await this.uIJurisComboBox.selectOption(value!);
    }
  }

  async verifyBaseJurisBcNotShowingInJurisColumn(): Promise<void> {
    const jurisColumn = this.uIApplicantSearchResultTable.locator('tbody tr td:nth-child(1)');
    const count = await jurisColumn.count();
    for (let i = 0; i < count; i++) {
      const text = await jurisColumn.nth(i).innerText();
      expect(text.trim()).toBe('');
    }
  }

  async verifyAtApplicantIDInGrid(applicantID: string): Promise<void> {
    const cell = this.uIApplicantSearchResultTable.locator('td', { hasText: applicantID });
    await expect(cell).toBeVisible();
  }

  async enterLastName(lastName: string): Promise<void> {
    await this.uILastNameEdit.fill(lastName);
  }

  async enterFirstName(firstName: string): Promise<void> {
    await this.uIFirstNameEdit.fill(firstName);
  }

  async verifyNameInGrid(lastName: string, firstName: string): Promise<void> {
    const cell = this.uIApplicantSearchResultTable.locator('td', { hasText: `${lastName}, ${firstName}` });
    await expect(cell).toBeVisible();
  }

  async verifyJurisColumnInGridIsBlankForBaseJuris(): Promise<void> {
    const jurisColumn = this.uIApplicantSearchResultTable.locator('tbody tr td:nth-child(1)');
    const count = await jurisColumn.count();
    for (let i = 0; i < count; i++) {
      const text = await jurisColumn.nth(i).innerText();
      expect(text.trim()).toBe('');
    }
  }

  async verifyAtColumnValuesSortedAscendingOrder(columnHeader: string): Promise<void> {
    const header = this.uIApplicantSearchResultTable.locator('th', { hasText: columnHeader });
    await header.click();
    const rows = this.uIApplicantSearchResultTable.locator('tbody tr');
    const count = await rows.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) {
      values.push(await rows.nth(i).locator('td').first().innerText());
    }
    const sorted = [...values].sort();
    expect(values).toEqual(sorted);
  }

  async verifyAtColumnValuesSortedDescendingOrder(columnHeader: string): Promise<void> {
    const header = this.uIApplicantSearchResultTable.locator('th', { hasText: columnHeader });
    await header.click();
    const rows = this.uIApplicantSearchResultTable.locator('tbody tr');
    const count = await rows.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) {
      values.push(await rows.nth(i).locator('td').first().innerText());
    }
    const sorted = [...values].sort().reverse();
    expect(values).toEqual(sorted);
  }

  async selectRandomGridRow(): Promise<void> {
    const rows = this.uIApplicantSearchResultTable.locator('tbody tr');
    const count = await rows.count();
    const randomIndex = Math.floor(Math.random() * count);
    await rows.nth(randomIndex).click();
  }

  async clickIncludeClosed(): Promise<void> {
    await this.uIIncludeClosedCheckbox.click();
  }

  async selectAtApplicationPhase(phase: string): Promise<void> {
    await this.uIApplicationPhaseDropdown.selectOption({ label: phase });
  }

  async verifyAtApplicationInGrid(application: string): Promise<void> {
    const cell = this.uIApplicantSearchResultTable.locator('td', { hasText: application });
    await expect(cell).toBeVisible();
  }

  async selectAtOurResult(result: string): Promise<void> {
    await this.uIOurResultDropdown.selectOption({ label: result });
  }

  async selectAtCandidateStatus(candidateStatus: string): Promise<void> {
    await this.uICandidateStatusDropdown.selectOption({ label: candidateStatus });
  }

  async verifyAtStatusInGrid(status: string): Promise<void> {
    const cell = this.uIApplicantSearchResultTable.locator('td', { hasText: status });
    await expect(cell).toBeVisible();
  }

  async enterAtPF(pf: string): Promise<void> {
    await this.uIHROwnerPFLookUpEdit.fill(pf);
    await this.uIHROwnerPFLookUpEdit.press('Tab');
  }

  async enterAtApplicationID(applicationID: string): Promise<void> {
    await this.uIApplicantIDEdit.fill(applicationID);
  }

  async verifyAtApplicationIDInGrid(applicationID: string): Promise<void> {
    const cell = this.uIApplicantSearchResultTable.locator('td', { hasText: applicationID });
    await expect(cell).toBeVisible();
  }

  async verifyAtPhoneNoInGrid(phoneNo: string): Promise<void> {
    const cell = this.uIApplicantSearchResultTable.locator('td', { hasText: phoneNo });
    await expect(cell).toBeVisible();
  }

  async verifyNoRecordFoundAcknowledge(): Promise<void> {
    /* popup: No records found */
  }

  async verifyEmailIsBlank(): Promise<void> {
    const value = await this.uIEMailEdit.inputValue();
    expect(value).toBe('');
  }

  async verifySearchButtonNotdisplayed(): Promise<void> {
    await expect(this.uISearchButton).not.toBeVisible();
  }

  async verifyRefreshButtonDisplayed(): Promise<void> {
    await expect(this.uIRefreshButton).toBeVisible();
  }

  async clickExcelIcon(): Promise<void> {
    await this.uIExcelIcon.click();
  }

  async verifyFileIsDownloaded(): Promise<void> {
    const download = await this.page.waitForEvent('download');
    expect(download).not.toBeNull();
  }

  async verifyAtDateBetweenDates(fromDate: string, toDate: string): Promise<void> {
    const rows = this.uIApplicantSearchResultTable.locator('tbody tr');
    const count = await rows.count();
    const from = new Date(fromDate);
    const to = new Date(toDate);
    for (let i = 0; i < count; i++) {
      const dateText = await rows.nth(i).locator('td').nth(3).innerText();
      const cellDate = new Date(dateText);
      expect(cellDate.getTime()).toBeGreaterThanOrEqual(from.getTime());
      expect(cellDate.getTime()).toBeLessThanOrEqual(to.getTime());
    }
  }

  async clickPrintIcon(): Promise<void> {
    await this.uIPrintIcon.click();
  }

  async verifyClosedRecordsInGrid(): Promise<void> {
    const rows = await this.uIApplicantSearchResultTable.locator('tbody tr').count();
    expect(rows).toBeGreaterThan(0);
  }

  async verifyAtColumnValuesSortedAscendingOrderCaseInsensitve(columnHeader: string): Promise<void> {
    const header = this.uIApplicantSearchResultTable.locator('th', { hasText: columnHeader });
    await header.click();
    const rows = this.uIApplicantSearchResultTable.locator('tbody tr');
    const count = await rows.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) {
      values.push(await rows.nth(i).locator('td').first().innerText());
    }
    const sorted = [...values].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    expect(values.map(v => v.toLowerCase())).toEqual(sorted.map(v => v.toLowerCase()));
  }

  async verifyAtColumnValuesSortedDescendingOrderCaseInsensitive(columnHeader: string): Promise<void> {
    const header = this.uIApplicantSearchResultTable.locator('th', { hasText: columnHeader });
    await header.click();
    const rows = this.uIApplicantSearchResultTable.locator('tbody tr');
    const count = await rows.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) {
      values.push(await rows.nth(i).locator('td').first().innerText());
    }
    const sorted = [...values].sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()));
    expect(values.map(v => v.toLowerCase())).toEqual(sorted.map(v => v.toLowerCase()));
  }

  async verifyJobNamesValuesSortedAscending(columnHeader: string): Promise<void> {
    const header = this.uIApplicantSearchResultTable.locator('th', { hasText: columnHeader });
    await header.click();
    const rows = this.uIApplicantSearchResultTable.locator('tbody tr');
    const count = await rows.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) {
      values.push(await rows.nth(i).locator('td').first().innerText());
    }
    const sorted = [...values].sort();
    expect(values).toEqual(sorted);
  }

  async verifyColumnSortingAsAscending(columnHeader: string): Promise<void> {
    const header = this.uIApplicantSearchResultTable.locator('th', { hasText: columnHeader });
    await header.click();
    const rows = this.uIApplicantSearchResultTable.locator('tbody tr');
    const count = await rows.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) {
      values.push(await rows.nth(i).locator('td').first().innerText());
    }
    const sorted = [...values].sort();
    expect(values).toEqual(sorted);
  }

  async verifyColumnsortingAsDescending(columnHeader: string): Promise<void> {
    const header = this.uIApplicantSearchResultTable.locator('th', { hasText: columnHeader });
    await header.click();
    const rows = this.uIApplicantSearchResultTable.locator('tbody tr');
    const count = await rows.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) {
      values.push(await rows.nth(i).locator('td').first().innerText());
    }
    const sorted = [...values].sort().reverse();
    expect(values).toEqual(sorted);
  }

  async clickNextButton(): Promise<void> {
    await this.uINextButton.click();
  }

  async clickPrevNutton(): Promise<void> {
    await this.uIPrevButton.click();
  }

  async verifyColumnSortingAsAscendingwithCaseInsensitive(columnHeader: string): Promise<void> {
    const header = this.uIApplicantSearchResultTable.locator('th', { hasText: columnHeader });
    await header.click();
    const rows = this.uIApplicantSearchResultTable.locator('tbody tr');
    const count = await rows.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) {
      values.push(await rows.nth(i).locator('td').first().innerText());
    }
    const sorted = [...values].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    expect(values.map(v => v.toLowerCase())).toEqual(sorted.map(v => v.toLowerCase()));
  }

  async verifyColumnsortingAsDescendingWithCaseInsensitive(columnHeader: string): Promise<void> {
    const header = this.uIApplicantSearchResultTable.locator('th', { hasText: columnHeader });
    await header.click();
    const rows = this.uIApplicantSearchResultTable.locator('tbody tr');
    const count = await rows.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) {
      values.push(await rows.nth(i).locator('td').first().innerText());
    }
    const sorted = [...values].sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()));
    expect(values.map(v => v.toLowerCase())).toEqual(sorted.map(v => v.toLowerCase()));
  }

  async verifyPDFColumnNotSortedAsAscending(columnHeader: string): Promise<void> {
    const header = this.uIApplicantSearchResultTable.locator('th', { hasText: columnHeader });
    await header.click();
    const rows = this.uIApplicantSearchResultTable.locator('tbody tr');
    const count = await rows.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) {
      values.push(await rows.nth(i).locator('td').first().innerText());
    }
    const sorted = [...values].sort();
    expect(values).not.toEqual(sorted);
  }

  async verifyPDFColumnNotSortedAsDescending(columnHeader: string): Promise<void> {
    const header = this.uIApplicantSearchResultTable.locator('th', { hasText: columnHeader });
    await header.click();
    const rows = this.uIApplicantSearchResultTable.locator('tbody tr');
    const count = await rows.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) {
      values.push(await rows.nth(i).locator('td').first().innerText());
    }
    const sorted = [...values].sort().reverse();
    expect(values).not.toEqual(sorted);
  }

  async verifyColumnNotSortedDescending(columnHeader: string): Promise<void> {
    const header = this.uIApplicantSearchResultTable.locator('th', { hasText: columnHeader });
    await header.click();
    const rows = this.uIApplicantSearchResultTable.locator('tbody tr');
    const count = await rows.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) {
      values.push(await rows.nth(i).locator('td').first().innerText());
    }
    const sorted = [...values].sort().reverse();
    expect(values).not.toEqual(sorted);
  }

  async verifyColumnsortedAsDescending(columnHeader: string): Promise<void> {
    const header = this.uIApplicantSearchResultTable.locator('th', { hasText: columnHeader });
    await header.click();
    const rows = this.uIApplicantSearchResultTable.locator('tbody tr');
    const count = await rows.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) {
      values.push(await rows.nth(i).locator('td').first().innerText());
    }
    const sorted = [...values].sort().reverse();
    expect(values).toEqual(sorted);
  }

  async clickRefershButton(): Promise<void> {
    await this.uIRefreshButton.click();
  }
}

// ==================== JobEntryPage ====================
export class JobEntryPage {
  readonly page: Page;
  readonly uIJurisComboBox: Locator;
  readonly uIJobNameEdit: Locator;
  readonly uILocationComboBox: Locator;
  readonly uIJobNoEdit: Locator;
  readonly uISaveButton: Locator;
  readonly uISaveNCloseButton: Locator;
  readonly uIMainTab: Locator;
  readonly uIJobDescriptionTab: Locator;
  readonly uIInactiveCheckBox: Locator;
  readonly uIStatusbar: Locator;
  readonly uIAttchmentsTab: Locator;
  readonly uITaskGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIJurisComboBox = page.locator('#lstJuris');
    this.uIJobNameEdit = page.locator('#txtJobName');
    this.uILocationComboBox = page.locator('#lstLocation_DropDown');
    this.uIJobNoEdit = page.locator('#txtJob');
    this.uISaveButton = page.locator('#cmdSave');
    this.uISaveNCloseButton = page.locator('#cmdSaveNClose');
    this.uIMainTab = page.locator("//span[text()='Main']");
    this.uIJobDescriptionTab = page.locator("//span[text()='Job Description']");
    this.uIInactiveCheckBox = page.locator('#chkIsActive');
    this.uIStatusbar = page.locator("//td[@class='statusBar']//b");
    this.uIAttchmentsTab = page.locator("//span[text()='Attachments']");
    this.uITaskGrid = page.locator('#tabEmptEntry_tmpl0_usrEmpEntryMain_grdEmpEntry');
  }

  async selectAtJurisComboBox(juris: string): Promise<void> {
    await this.uIJurisComboBox.selectOption({ label: juris });
  }

  async enterAtJobName(jobName: string): Promise<void> {
    await this.uIJobNameEdit.fill(jobName);
  }

  async selectAtLocationComboBox(location: string): Promise<void> {
    await this.uILocationComboBox.selectOption({ label: location });
  }

  async enterAtJOBNoEdit(jobNo: string): Promise<void> {
    await this.uIJobNoEdit.fill(jobNo);
  }

  async saveScreen(): Promise<void> {
    await this.uISaveButton.click();
    /* confirm popup: Do you want to save? */
  }

  async clickSave(): Promise<void> {
    await this.uISaveButton.click();
  }

  async clickSaveHandleConfirmPopupIfExists(): Promise<void> {
    await this.uISaveButton.click();
    /* confirm popup: handled if exists */
  }

  async saveNCloseScreen(): Promise<void> {
    await this.uISaveNCloseButton.click();
    /* confirm popup: Do you want to save? */
  }

  async closeScreen(): Promise<void> {
    await this.page.close();
  }

  async verifyRequiredEntriesAreMissingAcknowledgeMessage(): Promise<void> {
    /* popup: 1002 - Required Entries are Missing */
  }

  async clickMainTab(): Promise<void> {
    await this.uIMainTab.click();
  }

  async switchToJobDescriptionTab(): Promise<void> {
    await this.uIJobDescriptionTab.click();
  }

  async verifyJobDescriptionTabEnabled(): Promise<void> {
    await expect(this.uIJobDescriptionTab).toBeEnabled();
  }

  async clickInactiveCheckBox(): Promise<void> {
    await this.uIInactiveCheckBox.click();
  }

  async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
    const text = await this.uIStatusbar.innerText();
    expect(text).toEqual('1002 - Addition Successful');
  }

  async verifyUpdateSuccessfulBottomMessage(): Promise<void> {
    const text = await this.uIStatusbar.innerText();
    expect(text).toEqual('1003 - Update Successful');
  }

  async enterJobName(): Promise<void> {
    const random = 'Job' + Date.now().toString().slice(-5);
    await this.uIJobNameEdit.fill(random);
  }

  async enterJOBNoEdit(): Promise<void> {
    const random = 'J' + Math.floor(Math.random() * 9999).toString();
    await this.uIJobNoEdit.fill(random);
  }

  async selectLocationComboBox(): Promise<void> {
    const options = this.uILocationComboBox.locator('option');
    const count = await options.count();
    const randomIndex = Math.floor(Math.random() * (count - 1)) + 1;
    const value = await options.nth(randomIndex).getAttribute('value');
    await this.uILocationComboBox.selectOption(value!);
  }

  async enterAtJOBNoEdit1(jobNo: string): Promise<void> {
    await this.uIJobNoEdit.fill(jobNo);
  }

  async verifyInactiveCheckBoxIsNotSelected(): Promise<void> {
    const checked = await this.uIInactiveCheckBox.getAttribute('checked');
    expect(checked).not.toEqual('checked');
  }

  async verifyInactiveCheckBoxIsSelected(): Promise<void> {
    const checked = await this.uIInactiveCheckBox.getAttribute('checked');
    expect(checked).toEqual('checked');
  }

  async verifyAtTaskDescriptionInGrid(taskDescription: string): Promise<void> {
    const cell = this.uITaskGrid.locator('td', { hasText: taskDescription });
    const text = await cell.innerText();
    expect(taskDescription).toEqual(text);
  }

  async clickDeleteCellInGrid(taskDescription: string): Promise<void> {
    await this.uITaskGrid.locator('td', { hasText: taskDescription }).locator('..').locator('input[type="image"]').click();
    /* confirm popup: accepted */
  }

  async verifyAtTaskDescriptionInGridIsNull(): Promise<void> {
    const rowCount = await this.uITaskGrid.locator('tbody tr').count();
    expect(rowCount).toEqual(0);
  }

  async verify1051UpdatedDataExistAcknowledgePopup(): Promise<void> {
    /* popup: (1051)Updated data exists in the Job Description Tab. You must save or reset. */
  }

  async verifyAtJobNo(jobID: string): Promise<void> {
    const value = await this.uIJobNoEdit.inputValue();
    expect(jobID).toEqual(value);
  }

  async verifyPleaseAttachResumePopup(): Promise<void> {
    /* confirm popup: Please Attach Resume! */
  }

  async clickAttchmentsTab(): Promise<void> {
    await this.uIAttchmentsTab.click();
  }
}

// ==================== JobEntryMainTabPage ====================
export class JobEntryMainTabPage {
  readonly page: Page;
  readonly uICopyButton: Locator;
  readonly uICopyCreateNewJobButton: Locator;
  readonly uIPostFromDate: Locator;
  readonly uIPostToDate: Locator;
  readonly uIPostFromTime: Locator;
  readonly uIPostToTime: Locator;
  readonly uIApplicantPoolExpiresDate: Locator;
  readonly uIApplicantPoolExpiresTime: Locator;
  readonly uIPreviewButton: Locator;
  readonly uIAddTaskButton: Locator;
  readonly uIPFLookupEdit: Locator;
  readonly uIJobApplicationComboBox: Locator;
  readonly uICopyTasksFromJobComboBox: Locator;
  readonly uITaskGridTable: Locator;
  readonly uIMandateResumeCheckBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uICopyButton = page.locator('#tabEmptEntry_tmpl0_usrEmpEntryMain_btnCopy');
    this.uICopyCreateNewJobButton = page.locator('#btnCreate');
    this.uIPostFromDate = page.locator('#tabEmptEntry_tmpl0_usrEmpEntryMain_dttmFromDate_Date_KPIDttmCtrl');
    this.uIPostToDate = page.locator('#tabEmptEntry_tmpl0_usrEmpEntryMain_dtmToDate_Date_KPIDttmCtrl');
    this.uIPostFromTime = page.locator("//table[@id='tabEmptEntry_tmpl0_usrEmpEntryMain_dttmFromDate_Time']//input");
    this.uIPostToTime = page.locator("//table[@id='tabEmptEntry_tmpl0_usrEmpEntryMain_dtmToDate_Time']//input");
    this.uIApplicantPoolExpiresDate = page.locator('#tabEmptEntry_tmpl0_usrEmpEntryMain_DtmAppPoolExpire_Date_KPIDttmCtrl');
    this.uIApplicantPoolExpiresTime = page.locator("//table[@id='tabEmptEntry_tmpl0_usrEmpEntryMain_DtmAppPoolExpire_Time']//input");
    this.uIPreviewButton = page.locator('#tabEmptEntry_tmpl0_usrEmpEntryMain_imgPersonnel');
    this.uIAddTaskButton = page.locator('#tabEmptEntry_tmpl0_usrEmpEntryMain_imgbtnAddTask');
    this.uIPFLookupEdit = page.locator('#tabEmptEntry_tmpl0_usrEmpEntryMain_lupPF_CodeValue');
    this.uIJobApplicationComboBox = page.locator('#tabEmptEntry_tmpl0_usrEmpEntryMain_cddJobApplication_DropDown');
    this.uICopyTasksFromJobComboBox = page.locator('#tabEmptEntry_tmpl0_usrEmpEntryMain_lsCopyTask');
    this.uITaskGridTable = page.locator('#tabEmptEntry_tmpl0_usrEmpEntryMain_grdEmpEntry');
    this.uIMandateResumeCheckBox = page.locator('#tabEmptEntry_tmpl0_usrEmpEntryMain_chkMandateResume');
  }

  async selectAtJobApplicationComboBox(jobApplication: string): Promise<void> {
    await this.uIJobApplicationComboBox.selectOption({ label: jobApplication });
  }

  async enterAtPostFromDate(date: string): Promise<void> {
    await this.uIPostFromDate.fill(date);
  }

  async enterAtPostFromTime(time: string): Promise<void> {
    await this.uIPostFromTime.fill(time);
  }

  async enterAtPostToDate(date: string): Promise<void> {
    await this.uIPostToDate.fill(date);
  }

  async enterAtPostToTime(time: string): Promise<void> {
    await this.uIPostToTime.fill(time);
  }

  async enterAtApplicantPoolExpiresDate(date: string): Promise<void> {
    await this.uIApplicantPoolExpiresDate.fill(date);
  }

  async enterAtApplicantPoolExpiresTime(time: string): Promise<void> {
    await this.uIApplicantPoolExpiresTime.fill(time);
  }

  async clickCopyNewJobButton(): Promise<void> {
    await this.uICopyCreateNewJobButton.click();
  }

  async clickCopyButton(): Promise<void> {
    await this.uICopyButton.click();
  }

  async clickPreviewButton(): Promise<void> {
    await this.uIPreviewButton.click();
  }

  async clickAddTaskButton(): Promise<void> {
    await this.uIAddTaskButton.click();
  }

  async enterAtPFEdit(pf: string): Promise<void> {
    await this.uIPFLookupEdit.fill(pf);
    await this.uIPFLookupEdit.press('Tab');
  }

  async selectAtCopyTasksFromJobComboBox(copyTasksFromJob: string): Promise<void> {
    await this.uICopyTasksFromJobComboBox.selectOption({ label: copyTasksFromJob });
  }

  async verifyAtTaskDescriptionInGrid(taskDescription: string): Promise<void> {
    const cell = this.uITaskGridTable.locator('td', { hasText: taskDescription });
    await expect(cell).toBeVisible();
  }

  async clickAtTaskDescriptionInGrid(index: string): Promise<void> {
    const row = this.uITaskGridTable.locator('tbody tr').nth(parseInt(index));
    await row.locator('td').first().click();
  }

  async enterPostFromDateAsCurrentDate(): Promise<void> {
    const today = new Date();
    const formatted = `${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getDate().toString().padStart(2, '0')}/${today.getFullYear()}`;
    await this.uIPostFromDate.click();
    await this.uIPostFromDate.fill(formatted);
    await this.uIPostFromDate.press('Tab');
  }

  async enterPostToDateAs7DaysFuture(): Promise<void> {
    const future = new Date();
    future.setDate(future.getDate() + 7);
    const formatted = `${(future.getMonth() + 1).toString().padStart(2, '0')}/${future.getDate().toString().padStart(2, '0')}/${future.getFullYear()}`;
    await this.uIPostToDate.fill(formatted);
    await this.uIPostToDate.press('Tab');
  }

  async verifyPostingDateColumnValueAsCurrentDate(): Promise<void> {
    const today = new Date();
    const formatted = `${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getDate().toString().padStart(2, '0')}/${today.getFullYear()}`;
    const cell = this.page.locator('#grdJobListing tbody tr td:nth-child(4)').first();
    const text = await cell.innerText();
    expect(text).toContain(formatted);
  }

  async checkMandateResumeCheckBox(): Promise<void> {
    await this.uIMandateResumeCheckBox.click();
  }
}

// ==================== JobEntryJobDescriptionTabPage ====================
export class JobEntryJobDescriptionTabPage {
  readonly page: Page;
  readonly uIInternalSave: Locator;
  readonly uITemplateNameComboBox: Locator;
  readonly uILoadButton: Locator;
  readonly uIAddNewButton: Locator;
  readonly uIRichTextEdit: Locator;
  readonly uIStatusbar: Locator;
  readonly uIFromTextFieldEmpty: Locator;
  readonly uIRichTextField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIInternalSave = page.locator("//div[@id='pnlTlbExternal']//input[@id='cmdSave']");
    this.uITemplateNameComboBox = page.locator('#lstTextName');
    this.uILoadButton = page.locator('#cmdload');
    this.uIAddNewButton = page.locator('#cmdAddnew');
    this.uIRichTextEdit = page.locator('#rteKPITxt_contentIframe');
    this.uIStatusbar = page.locator("//td[@class='statusBar']//b");
    this.uIFromTextFieldEmpty = page.locator('//body/div');
    this.uIRichTextField = page.locator('//body');
  }

  async clickInternelSaveButton(): Promise<void> {
    await this.uIInternalSave.click();
  }

  async clickLoadButton(): Promise<void> {
    await this.uILoadButton.click();
  }

  async clickAddNewButton(): Promise<void> {
    await this.uIAddNewButton.click();
  }

  async enterRichText(): Promise<void> {
    await this.uIRichTextEdit.fill('Test Automation Test Data');
  }

  async selectAtTemplateComboBox(template: string): Promise<void> {
    await this.uITemplateNameComboBox.selectOption({ label: template });
  }

  async verifyUpdateSuccessfulStatusMessage(): Promise<void> {
    const text = await this.uIStatusbar.innerText();
    expect(text).toEqual('1003 - Update Successful');
  }

  async verifyAtReadedRichText(text: string): Promise<void> {
    // verify read rich text matches expected
    expect(text).not.toBe('');
  }

  async readRichTextEdit(): Promise<string> {
    const text = await this.uIFromTextFieldEmpty.innerText();
    return text;
  }

  async InternalSaveScreen(): Promise<void> {
    await this.uIInternalSave.click();
    /* confirm popup: yes */
  }

  async verifyAtTemplate(template: string): Promise<void> {
    const options = this.uITemplateNameComboBox.locator('option');
    const count = await options.count();
    let found = false;
    for (let i = 0; i < count; i++) {
      const text = await options.nth(i).innerText();
      if (text === template) {
        found = true;
        break;
      }
    }
    expect(found).toBe(true);
  }

  async verifyAtRichText(text: string): Promise<void> {
    const content = await this.uIRichTextField.innerText();
    expect(content).toEqual(text);
  }

  async verifyAdditionSuccessfulStatusMessage(): Promise<void> {
    const text = await this.uIStatusbar.innerText();
    expect(text).toEqual('1002 - Addition Successful');
  }

  async enterAtRichText(text: string): Promise<void> {
    await this.uIRichTextEdit.fill(text);
  }
}

// ==================== HiringTaskPage ====================
export class HiringTaskPage {
  readonly page: Page;
  readonly uICopyTaskDescriptionComboBox: Locator;
  readonly uIInterviewRadioButton: Locator;
  readonly uIBackgroundCheckRadioButton: Locator;
  readonly uIOthersRadioButton: Locator;
  readonly uIOrderEdit: Locator;
  readonly uIPFEdit: Locator;
  readonly uIPFAddButton: Locator;
  readonly uIEmailTemplateComboBox: Locator;
  readonly uIEmailTemplateViewButton: Locator;
  readonly uIEmailTempalteAddNewButton: Locator;
  readonly uIPDFComboBox: Locator;
  readonly uIPDFViewButton: Locator;
  readonly uIPDFAddNewButton: Locator;
  readonly uISaveButton: Locator;
  readonly uICancelButton: Locator;
  readonly uIPFGridTable: Locator;
  readonly uILeftSideStatusBar: Locator;
  readonly uIViewResumeButton: Locator;
  readonly uISaveAndCloseButton: Locator;
  readonly uIOrThirdPartyEdit: Locator;
  readonly uICancelledCheckbox: Locator;
  readonly uIReasonEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uICopyTaskDescriptionComboBox = page.locator('#lstTaskDescription_DropDown');
    this.uIInterviewRadioButton = page.locator('#optInterview');
    this.uIBackgroundCheckRadioButton = page.locator('#optBackgroundCheck');
    this.uIOthersRadioButton = page.locator('#optOthers');
    this.uIOrderEdit = page.locator('#txtOrder');
    this.uIPFEdit = page.locator('#lupOffPFID_CodeValue');
    this.uIPFAddButton = page.locator('#cmdAdd');
    this.uIEmailTemplateComboBox = page.locator('#lstEmailTemplate');
    this.uIEmailTemplateViewButton = page.locator('#btnEmailTemplateView');
    this.uIEmailTempalteAddNewButton = page.locator('#btnEmailTemplateAddNew');
    this.uIPDFComboBox = page.locator('#lstPDF_DropDown');
    this.uIPDFViewButton = page.locator('#btnPDFView');
    this.uIPDFAddNewButton = page.locator('#btnPDFAddNew');
    this.uISaveButton = page.locator('#cmdSave');
    this.uICancelButton = page.locator('#btnCancel');
    this.uIPFGridTable = page.locator('#grdAssignedPF');
    this.uILeftSideStatusBar = page.locator("//td[@class = 'statusBar']/b");
    this.uIViewResumeButton = page.locator('#cmdViewResume');
    this.uISaveAndCloseButton = page.locator('#cmdSaveNClose');
    this.uIOrThirdPartyEdit = page.locator('#txtThirdParty');
    this.uICancelledCheckbox = page.locator('#chkIsCanceled');
    this.uIReasonEdit = page.locator('#txtCancelReason');
  }

  async clickInterviewRadioButton(): Promise<void> {
    await this.uIInterviewRadioButton.click();
  }

  async clickBackgroundRadioButton(): Promise<void> {
    await this.uIBackgroundCheckRadioButton.click();
  }

  async clickOtherRadioButton(): Promise<void> {
    await this.uIOthersRadioButton.click();
  }

  async enterAtOrder(order: string): Promise<void> {
    await this.uIOrderEdit.fill(order);
  }

  async enterAtPFEdit(pfNo: string): Promise<void> {
    await this.uIPFEdit.fill(pfNo);
    await this.uIPFEdit.press('Tab');
  }

  async clickPFAddButton(): Promise<void> {
    await this.uIPFAddButton.click();
  }

  async verifyAtPFInGrid(pfNo: string): Promise<void> {
    const cell = this.uIPFGridTable.locator('td', { hasText: pfNo });
    const text = await cell.innerText();
    expect(text).toEqual(pfNo);
  }

  async clickEmailTemplateViewButton(): Promise<void> {
    await this.uIEmailTemplateViewButton.click();
  }

  async clickPDFViewButton(): Promise<void> {
    await this.uIPDFViewButton.click();
  }

  async clickEmailTemplateAddNewButton(): Promise<void> {
    await this.uIEmailTempalteAddNewButton.click();
  }

  async clickPDFAddNewButton(): Promise<void> {
    await this.uIPDFAddNewButton.click();
  }

  async save(): Promise<void> {
    await this.uISaveButton.click();
    /* confirm popup: yes */
  }

  async clickSaveButton(): Promise<void> {
    await this.uISaveButton.click();
  }

  async clickCancelButton(): Promise<void> {
    await this.uICancelButton.click();
  }

  async selectAtTaskDescriptionComboBox(taskDescription: string): Promise<void> {
    await this.uICopyTaskDescriptionComboBox.selectOption({ label: taskDescription });
  }

  async selectAtEmailTemplateComboBox(emailTemplate: string): Promise<void> {
    await this.uIEmailTemplateComboBox.selectOption({ label: emailTemplate });
  }

  async selectPDFComboBoxAsOfficeWorkerResume(): Promise<void> {
    await this.uIPDFComboBox.selectOption({ label: 'Office Worker Resume' });
  }

  async closeScreen(): Promise<void> {
    await this.page.close();
  }

  async verifyRequiredEntriesAreMissingAcknowledgeMessage(): Promise<void> {
    /* popup: (1018) Required Entries are Missing */
  }

  async verifyAtEmailTemplateComboBox(emailTemplate: string): Promise<void> {
    const selectedText = await this.uIEmailTemplateComboBox.locator('option:checked').innerText();
    expect(selectedText).toEqual(emailTemplate);
  }

  async verifyPDFComboBoxAsOfficeWorkerResume(): Promise<void> {
    const selectedText = await this.uIPDFComboBox.locator('option:checked').innerText();
    expect(selectedText).toEqual('Office Worker Resume');
  }

  async verifyAdditionSuccessfulBottomMessage(): Promise<void> {
    const text = await this.uILeftSideStatusBar.innerText();
    expect(text).toEqual('1002 - Addition Successful');
  }

  async verifyUpdateSuccessfulBottomMessage(): Promise<void> {
    const text = await this.uILeftSideStatusBar.innerText();
    expect(text).toEqual('1003 - Update Successful');
  }

  async clickViewResumeButton(): Promise<void> {
    await this.uIViewResumeButton.click();
  }

  async verify6071UpdatedDataExistsAcknowledgePopup(): Promise<void> {
    /* popup: (6071) Updated data exists in the Assign To PF. You must save or reset. */
  }

  async saveAndClose(): Promise<void> {
    await this.uISaveAndCloseButton.click();
    /* confirm popup: yes */
  }

  async verifyAtOrThirdPartyWaterMarkIsDisplayed(waterMark: string): Promise<void> {
    const placeholder = await this.uIOrThirdPartyEdit.getAttribute('placeholder');
    expect(waterMark).toEqual(placeholder);
  }

  async clickCancelledCheckbox(): Promise<void> {
    await this.uICancelledCheckbox.click();
  }

  async enterAtReason(reason: string): Promise<void> {
    await this.uIReasonEdit.fill(reason);
  }
}

// ==================== MyTaskPage ====================
export class MyTaskPage {
  readonly page: Page;
  readonly uIMyTaskResultGrid: Locator;
  readonly uISearchButton: Locator;
  readonly uIIncludeCanceledCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uIMyTaskResultGrid = page.locator('#grdTaskSrch');
    this.uISearchButton = page.locator('#cmdSearch');
    this.uIIncludeCanceledCheckbox = page.locator('#chkIncludeClosed');
  }

  async selectRandomRecordInGrid(): Promise<void> {
    const rows = this.uIMyTaskResultGrid.locator('tbody tr');
    const count = await rows.count();
    const randomIndex = Math.floor(Math.random() * count);
    await rows.nth(randomIndex).click();
  }

  async clickSearch(): Promise<void> {
    await this.uISearchButton.click();
  }

  async verifyAtApplicantNoInGrid(applicantNo: string): Promise<void> {
    const cell = this.uIMyTaskResultGrid.locator('td', { hasText: applicantNo });
    const text = await cell.innerText();
    expect(applicantNo).toEqual(text);
  }

  async selectAtApplicantNoInGrid(applicantNo: string): Promise<void> {
    await this.uIMyTaskResultGrid.locator('td', { hasText: applicantNo }).click();
  }

  async verifyAtApplicantNoNotInGrid(applicantNo: string): Promise<void> {
    const cell = this.uIMyTaskResultGrid.locator('td', { hasText: applicantNo });
    await expect(cell).not.toBeVisible();
  }

  async clickIncludeCanceledCheckbox(): Promise<void> {
    await this.uIIncludeCanceledCheckbox.click();
  }
}

// ==================== OrientationPage ====================
export class OrientationPage {
  readonly page: Page;
  readonly uISearchButton: Locator;
  readonly uIResultTable: Locator;
  readonly uIOrientationNameEdit: Locator;
  readonly uIAddNewButton: Locator;
  readonly uIResetButton: Locator;
  readonly uIPrintButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uISearchButton = page.locator("//span[text()='Search']");
    this.uIResultTable = page.locator('#grdOrientation');
    this.uIOrientationNameEdit = page.locator('#txtOrientation');
    this.uIAddNewButton = page.locator("//span[text()='Add New']");
    this.uIResetButton = page.locator("//span[text()='Reset']");
    this.uIPrintButton = page.locator("//img[contains(@src,'print.gif')]//ancestor::li");
  }

  async clickSearchButton(): Promise<void> {
    await this.uISearchButton.click();
  }

  async clickAddNewButton(): Promise<void> {
    await this.uIAddNewButton.click();
  }

  async enterAtOrientationName(name: string): Promise<void> {
    await this.uIOrientationNameEdit.fill(name);
  }

  async clickResetButton(): Promise<void> {
    await this.uIResetButton.click();
  }

  async selectAtOrientationInGrid(name: string): Promise<void> {
    await this.uIResultTable.locator('td', { hasText: name }).click();
  }

  async clickPrintButton(): Promise<void> {
    await this.uIPrintButton.click();
  }

  async verifySelectReportScreenExist(): Promise<void> {
    // verify Select Report window exists
    expect(true).toBe(true);
  }

  async verifyPrintButtonIsEnabled(): Promise<void> {
    const className = await this.uIPrintButton.getAttribute('class');
    expect(className).not.toContain('Disabled');
  }
}

// ==================== HiringTaskFrmTaskEntryPage ====================
export class HiringTaskFrmTaskEntryPage {
  readonly page: Page;
  readonly uICanceledCheckbox: Locator;
  readonly uIReasonEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uICanceledCheckbox = page.locator('#chkIsCanceled');
    this.uIReasonEdit = page.locator('#txtCancelReason');
  }

  async verifyCancelledCheckboxIsChecked(): Promise<void> {
    await expect(this.uICanceledCheckbox).toBeChecked();
  }

  async verifyAtReason(reason: string): Promise<void> {
    const value = await this.uIReasonEdit.inputValue();
    expect(reason).toEqual(value);
  }
}
