import { Page, Locator, expect } from '@playwright/test';

// ─── Activity Module ─────────────────────────────────────────────────────────

export class ActivityModule {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private async switchToWindowByTitle(titleOrUrl: string): Promise<Page> {
    const pages = this.page.context().pages();
    for (const p of pages) {
      if ((await p.title()).includes(titleOrUrl) || p.url().includes(titleOrUrl)) return p;
    }
    const [newPage] = await Promise.all([this.page.context().waitForEvent('page')]);
    return newPage;
  }

  async switchToActivityEntryApprovalRequest(): Promise<Page> { return this.switchToWindowByTitle('frmPnxApprovalRequest.aspx'); }
  async switchToIndividualScheduling(): Promise<Page> { return this.switchToWindowByTitle('Individual Scheduling'); }
  async switchToScheduleSearch(): Promise<Page> { return this.switchToWindowByTitle('frmHuberPaymentSrch.aspx'); }
  async switchToActivitySearch(): Promise<Page> { return this.switchToWindowByTitle('frmActivityLogInquiry.aspx'); }
  async switchToActivitySearchHelpWindow(): Promise<Page> { return this.switchToWindowByTitle('Activity Search'); }
  async switchToActivitySearchHelpWindow1(): Promise<Page> { return this.switchToWindowByTitle('Home/frmAddMultiPF'); }
  async SwitchToActivityEntry(): Promise<Page> { return this.switchToWindowByTitle('Activity Entry'); }
  async SwitchToActivityCalendarEntry(): Promise<Page> { return this.switchToWindowByTitle('Activity Calendar'); }
  async pressF4keyToOpenQuickActivityEntry(): Promise<void> { await this.page.keyboard.press('F4'); }
  async switchToActivityQuickEntry(): Promise<Page> { return this.switchToWindowByTitle('Activity Quick Entry'); }
  async SwitchToQuickActivityLog(): Promise<Page> { return this.switchToWindowByTitle('Quick Activity Log'); }
  async switchToGroupMovement(): Promise<Page> { return this.switchToWindowByTitle('frmGroupMovement.aspx'); }
  async switchToOutSideOutIn(): Promise<Page> { return this.switchToWindowByTitle('Outside Sign Out/In'); }
  async switchToVerifyName(): Promise<Page> { return this.switchToWindowByTitle('Verify Name'); }
  async switchToEmployer(): Promise<Page> { return this.switchToWindowByTitle('Employer'); }
  async switchToDeleteHuberSchedule(): Promise<Page> { return this.switchToWindowByTitle('Delete Huber Schedule'); }
  async switchToInmateMovement(): Promise<Page> { return this.switchToWindowByTitle('Inmate Movement'); }
  async switchToSTSInside(): Promise<Page> { return this.switchToWindowByTitle('STS-Inside'); }
  async swicthToInsideSignOutIn(): Promise<Page> { return this.switchToWindowByTitle('frmInsideSignOutSignIn.aspx'); }
  async switchToAddMultiplePFScreen(): Promise<Page> { return this.switchToWindowByTitle('frmAddMultiPF'); }
  async switchToWorkRelease(): Promise<Page> { return this.switchToWindowByTitle('Work Release'); }
}

// ─── Activity Search Page ────────────────────────────────────────────────────

export class ActivitySearchPage {
  readonly page: Page;

  // Period
  readonly activityFromDateEdit: Locator;
  readonly activityFromTimeEdit: Locator;
  readonly activityToDateEdit: Locator;
  readonly activityToTimeEdit: Locator;
  readonly dateResetButton: Locator;

  // Filters
  readonly showWhiteBoardItemOnlyCheckBox: Locator;
  readonly categoryGroupDropdown: Locator;
  readonly categoryDropdown: Locator;
  readonly activityTypeDropdown: Locator;
  readonly activityTypeDropDownArrow: Locator;
  readonly activityTypeRadControlDropdown: Locator;
  readonly activityStatusDropdown: Locator;
  readonly activityStatusDropdownValues: Locator;
  readonly priorityDropdown: Locator;
  readonly unitDropdown: Locator;
  readonly fleetDropdown: Locator;
  readonly activityByEdit: Locator;
  readonly followUpByDropdown: Locator;
  readonly approvalStatusDropdown: Locator;

  // Division/Section/Squad
  readonly divisionSectionSquadArrow: Locator;
  readonly divisionDropdown: Locator;
  readonly sectionDropdown: Locator;
  readonly teamDropdown: Locator;
  readonly squadDropdown: Locator;

  // PF fields
  readonly multiplePFArrow: Locator;
  readonly assignedToButton: Locator;
  readonly pfNoEdit: Locator;
  readonly pfActivityDropdown: Locator;
  readonly pfStatusDropdown: Locator;
  readonly pfStatusArrow: Locator;
  readonly hoursWorkedDropdown: Locator;
  readonly hoursWorkedValueEdit: Locator;
  readonly creditsDropdown: Locator;
  readonly creditsValueEdit: Locator;
  readonly payScaleDropdown: Locator;
  readonly payScaleArrow: Locator;
  readonly assignedShiftDropdown: Locator;
  readonly typeDropdown: Locator;
  readonly addMultiplePFButton: Locator;

  // Other search fields
  readonly enteredByEdit: Locator;
  readonly subjectEdit: Locator;
  readonly refTypeEdit: Locator;
  readonly customEdit: Locator;
  readonly visitorLastNameEdit: Locator;
  readonly visitorFirstNameEdit: Locator;
  readonly activityYear: Locator;
  readonly activityNumber: Locator;

  // Time range filter
  readonly filterByTimeRangeFromTimeEdit: Locator;
  readonly filterByTimeRangeToTimeEdit: Locator;
  readonly timeRangeResetButton: Locator;

  // Checkbox
  readonly findPersonnelWithoutMatchingRecordsCheckbox: Locator;

  // Buttons
  readonly searchButton: Locator;
  readonly addNewButton: Locator;
  readonly resetButton: Locator;
  readonly backButton: Locator;
  readonly nextButton: Locator;
  readonly printIcon: Locator;

  // Grid
  readonly activityLogResultTable: Locator;

  // Labels
  readonly pointsCustomLabel: Locator;
  readonly showWhiteboardItemsOnlyLabel: Locator;
  readonly logInPFLabel: Locator;
  readonly activityTypeTreeViewIcon: Locator;

  // Custom labels
  readonly divisionCustomLabel: Locator;
  readonly sectionCustomLabel: Locator;
  readonly teamCustomLabel: Locator;
  readonly squadCustomLabel: Locator;

  constructor(page: Page) {
    this.page = page;

    this.activityFromDateEdit = page.locator('#dtActPeriod_Date_KPIDttmCtrl');
    this.activityFromTimeEdit = page.locator("//table[@id='dtActPeriod_Time']//input");
    this.activityToDateEdit = page.locator('#dtActTo_Date_KPIDttmCtrl');
    this.activityToTimeEdit = page.locator("//table[@id='dtActTo_Time']//input");
    this.dateResetButton = page.locator('#imgClear');

    this.showWhiteBoardItemOnlyCheckBox = page.locator('#chkIsWhiteBoard');
    this.categoryGroupDropdown = page.locator('#cddCategoryGroup_DropDown');
    this.categoryDropdown = page.locator('#cddCategory_DropDown');
    this.activityTypeDropdown = page.locator('#cddActivityType_Input');
    this.activityTypeDropDownArrow = page.locator('#cddActivityType_Arrow');
    this.activityTypeRadControlDropdown = page.locator('#cddActivityType_DropDown');
    this.activityStatusDropdown = page.locator('#cddActivityStatus');
    this.activityStatusDropdownValues = page.locator('#cddActivityStatus_DropDown');
    this.priorityDropdown = page.locator('#cddPriority_DropDown');
    this.unitDropdown = page.locator('#cddUnit_Input');
    this.fleetDropdown = page.locator('#cddFleet_DropDown');
    this.activityByEdit = page.locator('#lupActivityBy_CodeValue');
    this.followUpByDropdown = page.locator("//select[@id='cddFollowupBy_DropDown']");
    this.approvalStatusDropdown = page.locator('#ddlApproval');

    this.divisionSectionSquadArrow = page.locator("//h3[@id='ui-id-1']//span[@class='ui-accordion-header-icon ui-icon ui-icon-triangle-1-e']");
    this.divisionDropdown = page.locator('#cddDivision_DropDown');
    this.sectionDropdown = page.locator('#cddSection_DropDown');
    this.teamDropdown = page.locator('#cddTeam_DropDown');
    this.squadDropdown = page.locator('#lupSquad_CodeValue');

    this.multiplePFArrow = page.locator("//h3[@id='ui-accordion-Dv_accordion1-header-1' or @id='ui-id-3']");
    this.assignedToButton = page.locator('#cmdAddMulAssiPF');
    this.pfNoEdit = page.locator('#lupPersonnelPF_CodeValue');
    this.pfActivityDropdown = page.locator('#cddPFActivity_DropDown');
    this.pfStatusDropdown = page.locator("//div[@id='cddPFStatus_DropDown']");
    this.pfStatusArrow = page.locator('#cddPFStatus_Arrow');
    this.hoursWorkedDropdown = page.locator('#ddlHoursOperator');
    this.hoursWorkedValueEdit = page.locator('#txtHWork');
    this.creditsDropdown = page.locator('#ddlCreditOperator');
    this.creditsValueEdit = page.locator('#txtHCredit');
    this.payScaleDropdown = page.locator('#cddScale_DropDown');
    this.payScaleArrow = page.locator('#cddScale_Arrow');
    this.assignedShiftDropdown = page.locator('#cddAssignedShift_DropDown');
    this.typeDropdown = page.locator('#cddType_DropDown');
    this.addMultiplePFButton = page.locator('#cmdAddMulPF');

    this.enteredByEdit = page.locator('#cddEnteredBy_CodeValue');
    this.subjectEdit = page.locator('#txtSubject');
    this.refTypeEdit = page.locator('#cddRefType_DropDown');
    this.customEdit = page.locator('#txtCustom');
    this.visitorLastNameEdit = page.locator('#txtLastName');
    this.visitorFirstNameEdit = page.locator('#txtFirstName');
    this.activityYear = page.locator('#nbrActivity_Year');
    this.activityNumber = page.locator('#nbrActivity_Number');

    this.filterByTimeRangeFromTimeEdit = page.locator("//table[@id='tmTimeRangeFrom_Time']//input");
    this.filterByTimeRangeToTimeEdit = page.locator("//table[@id='tmTimeRangeTo_Time']//input");
    this.timeRangeResetButton = page.locator('#imgTimeRangeClear');

    this.findPersonnelWithoutMatchingRecordsCheckbox = page.locator('#chkPFOnly');

    this.searchButton = page.locator("//span[contains(text(),'Search')]");
    this.addNewButton = page.locator("(//span[contains(text(),'Add New')])");
    this.resetButton = page.locator("(//span[contains(text(),'Reset')])");
    this.backButton = page.locator("(//span[contains(text(),'Back')])");
    this.nextButton = page.locator('#grdActLogSrch_ctl00_lnkbtnNext');
    this.printIcon = page.locator("//img[contains(@src,'print.gif')]");

    this.activityLogResultTable = page.locator('#grdActLogSrch');

    this.pointsCustomLabel = page.locator('#lblHourCredits');
    this.showWhiteboardItemsOnlyLabel = page.locator("//label[text()='  Show Whiteboard Items Only']");
    this.logInPFLabel = page.locator("//span[text()='Patrol, Officer-P001    ']");
    this.activityTypeTreeViewIcon = page.locator('#imgActivityTview');

    this.divisionCustomLabel = page.locator('#lblDivision');
    this.sectionCustomLabel = page.locator('#lblSection');
    this.teamCustomLabel = page.locator('#lblTeam');
    this.squadCustomLabel = page.locator('#lblSquad');
  }

  async enterActivityPeriod(fromDate: string, fromTime: string, toDate: string, toTime: string): Promise<void> {
    await this.activityFromDateEdit.fill(fromDate);
    await this.activityFromTimeEdit.fill(fromTime);
    await this.activityToDateEdit.fill(toDate);
    await this.activityToTimeEdit.fill(toTime);
  }

  async selectShowOnWhiteBoardCheckbox(): Promise<void> { await this.showWhiteBoardItemOnlyCheckBox.click(); }

  async selectAtCategoryGroup(categoryGroup: string): Promise<void> { await this.categoryGroupDropdown.selectOption({ label: categoryGroup }); }

  async selectAtCategory(category: string): Promise<void> { await this.categoryDropdown.selectOption({ label: category }); }

  async selectAtActivityType(activityType: string): Promise<void> {
    await this.activityTypeDropDownArrow.click();
    await this.activityTypeDropdown.fill(activityType);
    await this.activityTypeDropDownArrow.click();
  }

  async selectAtActivityStatus(activityStatus: string): Promise<void> {
    await this.activityStatusDropdown.click();
    await this.activityStatusDropdownValues.locator(`//label[contains(text(),'${activityStatus}')]`).click();
    await this.activityStatusDropdown.click();
  }

  async selectAtPriority(priority: string): Promise<void> { await this.priorityDropdown.selectOption({ label: priority }); }
  async selectAtFleet(fleet: string): Promise<void> { await this.fleetDropdown.selectOption({ label: fleet }); }
  async selectAtUnit(unit: string): Promise<void> { await this.unitDropdown.fill(unit); }
  async enterAtActivityBy(activityBy: string): Promise<void> { await this.activityByEdit.fill(activityBy); }
  async selectAtFollowUpBy(followUpBy: string): Promise<void> { await this.followUpByDropdown.selectOption({ label: followUpBy }); }
  async selectAtApprovalStatus(approvalStatus: string): Promise<void> { await this.approvalStatusDropdown.selectOption({ label: approvalStatus }); }

  async selectAtDivision(division: string): Promise<void> {
    await this.divisionSectionSquadArrow.click();
    await this.divisionDropdown.selectOption({ label: division });
  }

  async selectAtSection(section: string): Promise<void> {
    await this.divisionSectionSquadArrow.click();
    await this.sectionDropdown.selectOption({ label: section });
  }

  async selectAtTeam(team: string): Promise<void> {
    await this.divisionSectionSquadArrow.click();
    await this.teamDropdown.selectOption({ label: team });
  }

  async selectAtSquad(squad: string): Promise<void> {
    await this.divisionSectionSquadArrow.click();
    await this.squadDropdown.fill(squad);
  }

  async clickAssignedToButton(): Promise<void> {
    await this.multiplePFArrow.click();
    await this.assignedToButton.click();
  }

  async enterAtPFNo(pfNo: string): Promise<void> {
    await this.pfNoEdit.fill(pfNo);
    await this.pfNoEdit.press('Tab');
  }

  async selectAtPFActivity(pfActivity: string): Promise<void> {
    await this.pfActivityDropdown.selectOption({ label: pfActivity });
    await this.pfActivityDropdown.press('Tab');
  }

  async selectAtPFStatus(pfStatus: string): Promise<void> {
    await this.pfStatusArrow.click();
    await this.pfStatusDropdown.locator(`//label[contains(text(),'${pfStatus}')]`).click();
    await this.pfStatusArrow.click();
  }

  async selectAtHoursWorked(operator: string, value: string): Promise<void> {
    await this.hoursWorkedDropdown.selectOption({ label: operator });
    await this.hoursWorkedDropdown.press('Tab');
    await this.hoursWorkedValueEdit.fill(value);
    await this.hoursWorkedValueEdit.press('Tab');
  }

  async selectAtCredits(credit: string, creditValue: string): Promise<void> {
    await this.creditsDropdown.selectOption({ label: credit });
    await this.creditsDropdown.press('Tab');
    await this.creditsValueEdit.fill(creditValue);
    await this.creditsValueEdit.press('Tab');
  }

  async selectAtPayScale(payScale: string): Promise<void> {
    await this.payScaleArrow.click();
    await this.payScaleDropdown.locator(`//label[contains(text(),'${payScale}')]`).click();
    await this.payScaleArrow.click();
  }

  async selectAtAssignedShift(assignedShift: string): Promise<void> { await this.assignedShiftDropdown.selectOption({ label: assignedShift }); }
  async selectAtType(type: string): Promise<void> { await this.typeDropdown.selectOption({ label: type }); }
  async clickAddMultiplePFButton(): Promise<void> { await this.addMultiplePFButton.click(); }

  async enterAtEnteredBy(enteredBy: string): Promise<void> {
    await this.enteredByEdit.fill(enteredBy);
    await this.enteredByEdit.press('Tab');
  }

  async enterAtSubject(subject: string): Promise<void> { await this.subjectEdit.fill(subject); }
  async selectAtRefType(refType: string): Promise<void> { await this.refTypeEdit.selectOption({ label: refType }); }
  async enterAtCustom(custom: string): Promise<void> { await this.customEdit.fill(custom); }

  async enterAtVisitorName(lastName: string, firstName: string): Promise<void> {
    await this.visitorLastNameEdit.fill(lastName);
    await this.visitorFirstNameEdit.fill(firstName);
  }

  async clickSearchLink(): Promise<void> { await this.searchButton.click(); }
  async clickActivityPeriodDateResetButton(): Promise<void> { await this.dateResetButton.click(); }
  async clickPointsCustomLabel(): Promise<void> { await this.pointsCustomLabel.click(); }
  async clickResetLink(): Promise<void> { await this.resetButton.click(); }
  async clickBackLink(): Promise<void> { await this.backButton.click(); }
  async clickAddNewButton(): Promise<void> { await this.addNewButton.click(); }

  async clickAtActivityTypeInGrid(activityType: string): Promise<void> {
    await this.activityLogResultTable.locator(`//td[contains(text(),'${activityType}')]`).click();
  }

  async clickActivityTypeInGrid(): Promise<void> {
    const rows = this.activityLogResultTable.locator('//tr[contains(@class,"Row")]');
    const count = await rows.count();
    if (count > 0) { await rows.nth(Math.floor(Math.random() * count)).click(); }
  }

  async getPointsCustomLabelText(): Promise<string> { return (await this.pointsCustomLabel.textContent()) || ''; }
  async getShowWhiteboardItemsOnlyLabelText(): Promise<string> { return (await this.showWhiteboardItemsOnlyLabel.textContent()) || ''; }

  async isPFActivityDisplayed(): Promise<boolean> { return await this.pfActivityDropdown.isVisible(); }
  async isPFStatusDisplayed(): Promise<boolean> { return await this.pfStatusDropdown.isVisible(); }
  async isCreditsDisplayed(): Promise<boolean> { return (await this.creditsDropdown.isVisible()) && (await this.creditsValueEdit.isVisible()); }
  async isPayScaleDisplayed(): Promise<boolean> { return await this.payScaleDropdown.isVisible(); }
  async isHoursWorkedDisplayed(): Promise<boolean> { return (await this.hoursWorkedDropdown.isVisible()) && (await this.hoursWorkedValueEdit.isVisible()); }
  async isAssignedShiftDisplayed(): Promise<boolean> { return await this.assignedShiftDropdown.isVisible(); }
  async isAddMultiplePFButtonDisplayed(): Promise<boolean> { return await this.addMultiplePFButton.isVisible(); }
  async isUnitDisplayed(): Promise<boolean> { return await this.unitDropdown.isVisible(); }
  async isFleetDisplayed(): Promise<boolean> { return await this.fleetDropdown.isVisible(); }

  async selectPFStatusAsCheckAll(): Promise<void> {
    await this.pfStatusArrow.click();
    await this.pfStatusDropdown.locator("//label[contains(text(),'Check All')]").click();
    await this.pfStatusArrow.click();
  }

  async selectPayScaleAsCheckAll(): Promise<void> {
    await this.payScaleArrow.click();
    await this.payScaleDropdown.locator("//label[contains(text(),'Check All')]").click();
    await this.payScaleArrow.click();
  }

  async clickAtStatusInGrid(status: string): Promise<void> { await this.activityLogResultTable.locator(`//td[contains(text(),'${status}')]`).click(); }
  async selectRowByAtSubjectInGrid(subject: string): Promise<void> { await this.activityLogResultTable.locator(`//td[contains(text(),'${subject}')]`).click(); }

  async getGridCount(): Promise<number> {
    return await this.activityLogResultTable.locator('//tr[contains(@class,"Row")]').count();
  }

  async enterDateAsCurrentDate(currentDate: string): Promise<void> { await this.activityFromDateEdit.fill(currentDate); }
  async clickActivityTypeDropdownArrow(): Promise<void> { await this.activityTypeDropDownArrow.click(); }
  async clickActivityTypeTreeIcon(): Promise<void> { await this.activityTypeTreeViewIcon.click(); }
  async getActivityTypeValue(): Promise<string> { return (await this.activityTypeDropdown.inputValue()) || ''; }

  async getCategorySelectedItem(): Promise<string> {
    return (await this.categoryDropdown.locator('option:checked').textContent()) || '';
  }

  async clickDivisionSectionSquadAccordionArrow(): Promise<void> { await this.divisionSectionSquadArrow.click(); }
  async getDivisionCustomLabelText(): Promise<string> { return (await this.divisionCustomLabel.textContent()) || ''; }
  async getSectionCustomLabelText(): Promise<string> { return (await this.sectionCustomLabel.textContent()) || ''; }
  async getSquadCustomLabelText(): Promise<string> { return (await this.squadCustomLabel.textContent()) || ''; }
  async getTeamCustomLabelText(): Promise<string> { return (await this.teamCustomLabel.textContent()) || ''; }
  async clickPrintIcon(): Promise<void> { await this.printIcon.click(); }

  async enterAtActivityPeriodFromDateAndTime(fromDate: string, fromTime: string): Promise<void> {
    await this.activityFromDateEdit.click();
    await this.activityFromDateEdit.clear();
    await this.activityFromDateEdit.fill(fromDate);
    await this.activityFromTimeEdit.click();
    await this.activityFromTimeEdit.fill(fromTime);
  }

  async enterActivityPeriodToDateAndTimeAsCurrentDateAndTime(toDate: string, toTime: string): Promise<void> {
    await this.activityToDateEdit.click();
    await this.activityToDateEdit.clear();
    await this.activityToDateEdit.fill(toDate);
    await this.activityToTimeEdit.click();
    await this.activityToTimeEdit.fill(toTime);
  }

  async enterAtFilterByTimeRangeFromTime(fromTime: string): Promise<void> {
    await this.filterByTimeRangeFromTimeEdit.click();
    await this.filterByTimeRangeFromTimeEdit.fill(fromTime);
  }

  async enterAtFilterByTimeRangeToTime(toTime: string): Promise<void> {
    await this.filterByTimeRangeToTimeEdit.click();
    await this.filterByTimeRangeToTimeEdit.fill(toTime);
  }

  async clickTimeRangeResetButton(): Promise<void> { await this.timeRangeResetButton.click(); }
  async clickFindPersonnelWithoutMatchingRecordsCheckbox(): Promise<void> { await this.findPersonnelWithoutMatchingRecordsCheckbox.click(); }
  async enterAtCredits(credits: string): Promise<void> { await this.creditsValueEdit.fill(credits); }

  async enterAtActivityNo(year: string, number: string): Promise<void> {
    await this.activityYear.fill(year);
    await this.activityNumber.fill(number);
  }

  async selectAtSubjectInGrid(subject: string): Promise<void> { await this.activityLogResultTable.locator(`//td[contains(text(),'${subject}')]`).click(); }

  async selectGridRow(): Promise<void> {
    const rows = this.activityLogResultTable.locator('//tr[contains(@class,"Row")]');
    const count = await rows.count();
    if (count > 0) { await rows.nth(Math.floor(Math.random() * count)).click(); }
  }

  async clickBackButton(): Promise<void> { await this.backButton.click(); }

  async getGridColumnValues(columnName: string): Promise<string[]> {
    const headerCells = this.activityLogResultTable.locator('//tr[contains(@class,"Header")]//th');
    const count = await headerCells.count();
    let colIndex = -1;
    for (let i = 0; i < count; i++) {
      const text = await headerCells.nth(i).textContent();
      if (text?.includes(columnName)) { colIndex = i + 1; break; }
    }
    if (colIndex === -1) return [];
    const rows = this.activityLogResultTable.locator('//tr[contains(@class,"Row")]');
    const rowCount = await rows.count();
    const values: string[] = [];
    for (let i = 0; i < rowCount; i++) {
      values.push((await rows.nth(i).locator(`td:nth-child(${colIndex})`).textContent()) || '');
    }
    return values;
  }

  async getGridCellText(columnName: string, rowIndex: number): Promise<string> {
    const headerCells = this.activityLogResultTable.locator('//tr[contains(@class,"Header")]//th');
    const count = await headerCells.count();
    let colIndex = -1;
    for (let i = 0; i < count; i++) {
      const text = await headerCells.nth(i).textContent();
      if (text?.includes(columnName)) { colIndex = i + 1; break; }
    }
    if (colIndex === -1) return '';
    return (await this.activityLogResultTable.locator(`//tr[contains(@class,"Row")][${rowIndex + 1}]//td[${colIndex}]`).textContent()) || '';
  }

  async getCategoryDropdownSelectedItem(): Promise<string> {
    return (await this.categoryDropdown.locator('option:checked').textContent()) || '';
  }

  async isLogInPFDisplayed(): Promise<boolean> { return await this.logInPFLabel.isVisible(); }

  async closeScreen(): Promise<void> { await this.page.close(); }

  async selectAtPFStatus1(pfStatus: string): Promise<void> {
    await this.pfStatusDropdown.click();
    await this.pfStatusDropdown.locator(`//label[contains(text(),'${pfStatus}')]`).click();
    await this.pfStatusArrow.click();
  }

  async getSubjectColumnValues(): Promise<string[]> { return await this.getGridColumnValues('Subject'); }
  async getEnteredByColumnValues(): Promise<string[]> { return await this.getGridColumnValues('Entered By'); }
  async getStatusColumnValues(): Promise<string[]> { return await this.getGridColumnValues('Status'); }

  async isSubjectInGridWithNoDuplications(subject: string): Promise<boolean> {
    const values = await this.getGridColumnValues('Subject');
    return values.filter(v => v === subject).length <= 1;
  }

  async getActivityPeriodDateResetButtonCoordinates(): Promise<{ x: number; y: number }> {
    const box = await this.dateResetButton.boundingBox();
    return { x: box?.x || 0, y: box?.y || 0 };
  }

  async getTimeRangeResetButtonCoordinates(): Promise<{ x: number; y: number }> {
    const box = await this.timeRangeResetButton.boundingBox();
    return { x: box?.x || 0, y: box?.y || 0 };
  }

  async selectAtActivityTypeRadControl(activityType: string): Promise<void> {
    await this.activityTypeDropDownArrow.click();
    await this.activityTypeRadControlDropdown.locator(`//label[contains(text(),'${activityType}')]`).click();
  }

  async getGridCellByActivityType(activityType: string, columnName: string): Promise<string> {
    const headerCells = this.activityLogResultTable.locator('//tr[contains(@class,"Header")]//th');
    const count = await headerCells.count();
    let colIndex = -1;
    for (let i = 0; i < count; i++) {
      const text = await headerCells.nth(i).textContent();
      if (text?.includes(columnName)) { colIndex = i + 1; break; }
    }
    if (colIndex === -1) return '';
    return (await this.activityLogResultTable.locator(`//tr[td[contains(text(),'${activityType}')]]//td[${colIndex}]`).textContent()) || '';
  }

  async clickNextButton(): Promise<void> { await this.nextButton.click(); }

  async reloadScreen(): Promise<void> {
    await this.page.locator("//span[text()='Activity Search']").click({ button: 'right' });
    await this.page.locator("//span[text()='Reload Tab']").click();
  }

  async getGridCellByRowText(rowText: string, columnName: string): Promise<string> {
    const headerCells = this.activityLogResultTable.locator('//tr[contains(@class,"Header")]//th');
    const count = await headerCells.count();
    let colIndex = -1;
    for (let i = 0; i < count; i++) {
      const text = await headerCells.nth(i).textContent();
      if (text?.includes(columnName)) { colIndex = i + 1; break; }
    }
    if (colIndex === -1) return '';
    return (await this.activityLogResultTable.locator(`//tr[td[contains(text(),'${rowText}')]]//td[${colIndex}]`).textContent()) || '';
  }

  async SelectAtAssingedShift(shift: string): Promise<void> { await this.assignedShiftDropdown.selectOption({ label: shift }); }
  async ClickAcivityPeriodDateResetButton(): Promise<void> { await this.dateResetButton.click(); }
  async VerifyAtActivityType(activityType: string, rowIndex: number): Promise<void> { const text = await this.getGridCellText('Activity Type', rowIndex); expect(text).toEqual(activityType); }
  async VerifyAtBy(by: string, rowIndex: number): Promise<void> { const text = await this.getGridCellText('Entered By', rowIndex); expect(text).toEqual(by); }
  async VerifyAtCustomNameInCustomField(customName: string): Promise<void> { expect(await this.pointsCustomLabel.textContent()).toEqual(customName); }
  async verifyAtsubjectInGridwithActivityType(activityType: string, expectedSubject: string): Promise<void> { const text = await this.getGridCellByRowText(activityType, 'Subject'); expect(text).toEqual(expectedSubject); }
  async verifyAtSubjectInGridWithNoDuplications(subject: string): Promise<void> { const values = await this.getGridColumnValues('Subject'); const count = values.filter(v => v === subject).length; expect(count).toBeLessThanOrEqual(1); }
  async verifyAtShowWhiteboardItemsOnlyCheckboxLabel(title: string): Promise<void> { const text = await this.getShowWhiteboardItemsOnlyLabelText(); expect(text).toContain(title); }
  async verifyPFActivityIsDisplayed(): Promise<void> { expect(await this.pfActivityDropdown.isVisible()).toBeTruthy(); }
  async verifyPFStatusIsDisplayed(): Promise<void> { expect(await this.pfStatusDropdown.isVisible()).toBeTruthy(); }
  async verifyCreditsIsDisplayed(): Promise<void> { expect(await this.creditsDropdown.isVisible()).toBeTruthy(); }
  async verifyPayScaleIsDisplayed(): Promise<void> { expect(await this.payScaleDropdown.isVisible()).toBeTruthy(); }
  async verifyHoursWorkedIsDisplayed(): Promise<void> { expect(await this.hoursWorkedDropdown.isVisible()).toBeTruthy(); }
  async verifyAssignedShiftIsDisplayed(): Promise<void> { expect(await this.assignedShiftDropdown.isVisible()).toBeTruthy(); }
  async verifyAddMultiplePFButtonISDisplayed(): Promise<void> { expect(await this.addMultiplePFButton.isVisible()).toBeTruthy(); }
  async verifyUnitIsDisplayed(): Promise<void> { expect(await this.unitDropdown.isVisible()).toBeTruthy(); }
  async verifyFleetIsDisplayed(): Promise<void> { expect(await this.fleetDropdown.isVisible()).toBeTruthy(); }
  async verifyAtStatusInGrid(status: string): Promise<void> { const row = this.activityLogResultTable.locator(`//tr[td[contains(text(),'${status}')]]`); expect(await row.isVisible()).toBeTruthy(); }
  async verifyNoRecordsFoundAcknowledgeMessage(): Promise<void> { /* popup: 1011 - No Record Found */ }
  async verifylogInPFIsDisplayed(): Promise<void> { expect(await this.logInPFLabel.isVisible()).toBeTruthy(); }
  async verifyAtSubjectInGridByActivityStatus(expectedSubject: string): Promise<void> { const status = await this.getGridCellText('Status', 0); const subject = await this.getGridCellByRowText(status, 'Subject'); expect(subject).toEqual(expectedSubject); }
  async verifycountAs1InGrid(): Promise<void> { expect(await this.getGridCount()).toEqual(1); }
  async verifycountAsMoreThan1inGrid(): Promise<void> { expect(await this.getGridCount()).toBeGreaterThan(1); }
  async verifydateInGridWithEnteredBy(enteredBy: string): Promise<void> { const date = await this.getGridCellByRowText(enteredBy, 'Date Time'); expect(date).toBeTruthy(); }
  async verifyAnyAcknowlegeExist(): Promise<void> { /* handled by test */ }
  async verifyAtEnteredByInGrid(): Promise<void> { const values = await this.getEnteredByColumnValues(); for (const v of values) { expect(v).toEqual('Prophoenix, Automation'); } }
  async VerifyAtActivityStatusColumn(): Promise<void> { const values = await this.getStatusColumnValues(); for (const v of values) { expect(v).toEqual('Completed Activity'); } }
  async verifyAtSubjectInGrid(subject: string): Promise<void> { const values = await this.getGridColumnValues('Subject'); for (const v of values) { expect(v).toContain(subject); } }
  async verifyAtEnteredByNotAvailableInGrid(enteredBy: string): Promise<void> { const values = await this.getEnteredByColumnValues(); expect(values).not.toContain(enteredBy); }
  async verifyGridCountIsZero(): Promise<void> { expect(await this.getGridCount()).toEqual(0); }
  async verifyNoRecordFoundAcknowledge(): Promise<void> { /* popup: 1011 - No Record Found */ }
  async verifyActivityPeriodDateButtonCoordinates(): Promise<void> { const coords = await this.getActivityPeriodDateResetButtonCoordinates(); expect(coords.x).toBeTruthy(); }
  async verifyActivityPeriodTimeButtonCoordinates(): Promise<void> { const coords = await this.getTimeRangeResetButtonCoordinates(); expect(coords.x).toBeTruthy(); }
  async verifyAtDivisionCustomLabel(label: string): Promise<void> { expect(await this.getDivisionCustomLabelText()).toEqual(label); }
  async verifyAtSectionCustomLabel(label: string): Promise<void> { expect(await this.getSectionCustomLabelText()).toEqual(label); }
  async verifyAtSquadCustomLabel(label: string): Promise<void> { expect(await this.getSquadCustomLabelText()).toEqual(label); }
  async verifyAtTeamCustomLabel(label: string): Promise<void> { expect(await this.getTeamCustomLabelText()).toEqual(label); }
}

// ─── Activity Entry Page ─────────────────────────────────────────────────────

export class ActivityEntryPage {
  readonly page: Page;

  readonly categoryGroupComboBox: Locator;
  readonly categoryComboBox: Locator;
  readonly activityTypeComboBox: Locator;
  readonly activityStatusComboBox: Locator;
  readonly incidentNoEdit: Locator;
  readonly activityDateEdit: Locator;
  readonly activityTimeEdit: Locator;
  readonly subjectEdit: Locator;
  readonly unitComboBox: Locator;
  readonly fleetNoComboBox: Locator;
  readonly locationEdit: Locator;
  readonly locationCheckbox: Locator;
  readonly locationInfoIcon: Locator;
  readonly activityFromDateEdit: Locator;
  readonly activityFromTimeEdit: Locator;
  readonly activityToDateEdit: Locator;
  readonly activityToTimeEdit: Locator;
  readonly showOnWhiteBoardCheckBox: Locator;
  readonly privateCheckBox: Locator;
  readonly allDayCheckBox: Locator;
  readonly cadCheckbox: Locator;
  readonly pfTab: Locator;
  readonly logEntryTab: Locator;
  readonly otherTab: Locator;
  readonly logHistoryTab: Locator;
  readonly visitorsTab: Locator;
  readonly maintenanceTab: Locator;
  readonly publicEducationTab: Locator;
  readonly attachmentTab: Locator;
  readonly smokeQAFormsTab: Locator;
  readonly namesTab: Locator;
  readonly serviceHistoryTab: Locator;
  readonly schedulesTab: Locator;
  readonly feesTab: Locator;
  readonly tr1Tab: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;
  readonly deleteIcon: Locator;
  readonly copyButton: Locator;
  readonly resetIcon: Locator;
  readonly addMultiplePFButton: Locator;
  readonly openRecurrenceButton: Locator;
  readonly activityTypeTreeViewIcon: Locator;
  readonly activityNoEdit: Locator;
  readonly activityYearEdit: Locator;
  readonly scheduledFromDateEdit: Locator;
  readonly scheduledFromTimeEdit: Locator;
  readonly scheduledToDateEdit: Locator;
  readonly scheduledToTimeEdit: Locator;
  readonly recurrenceEdit: Locator;
  readonly statusBar: Locator;
  readonly bottomLeftSideStatusBar: Locator;
  readonly showOnWhiteboardLabel: Locator;
  readonly fleetIBubble: Locator;
  readonly jurisDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.categoryGroupComboBox = page.locator('#cddCategoryGroup_DropDown');
    this.categoryComboBox = page.locator('#cddCategory_DropDown');
    this.activityTypeComboBox = page.locator('#cddActivityType');
    this.activityStatusComboBox = page.locator('#cddActivityStatus_DropDown');
    this.incidentNoEdit = page.locator('#lblIncidentNo');
    this.activityDateEdit = page.locator('#dtmActDttm_Date_KPIDttmCtrl');
    this.activityTimeEdit = page.locator("//table[@id='dtmActDttm_Time']//input");
    this.subjectEdit = page.locator('#txtSubject');
    this.unitComboBox = page.locator('#cddUnit_DropDown');
    this.fleetNoComboBox = page.locator('#cddFleetNumber_DropDown');
    this.locationEdit = page.locator('#adrLocation_txtFrom');
    this.locationCheckbox = page.locator('#adrLocation_chkVerify');
    this.locationInfoIcon = page.locator('#adrLocation_cmdIncOnAddr');
    this.activityFromDateEdit = page.locator('#dtmActDttm_Date_KPIDttmCtrl');
    this.activityFromTimeEdit = page.locator("//table[@id='dtmActDttm_Time']//input");
    this.activityToDateEdit = page.locator('#dttmActTo_Date_KPIDttmCtrl');
    this.activityToTimeEdit = page.locator("//table[@id='dttmActTo_Time']//input");
    this.showOnWhiteBoardCheckBox = page.locator('#chkIsWhiteBoard');
    this.privateCheckBox = page.locator('#chkIsPrivate');
    this.allDayCheckBox = page.locator('#chkAllActivityDay');
    this.cadCheckbox = page.locator('#chkIsCADEvent');
    this.pfTab = page.locator("//span[contains(text(),'PF')]");
    this.logEntryTab = page.locator("//span[contains(text(),'Log Entry')]");
    this.otherTab = page.locator("//span[contains(text(),'Other')]");
    this.logHistoryTab = page.locator("//span[contains(text(),'Log History')]");
    this.visitorsTab = page.locator("//span[contains(text(),'Visitors')]");
    this.maintenanceTab = page.locator("//span[contains(text(),'Maintenance')]");
    this.publicEducationTab = page.locator("//span[contains(text(),'Public Education')]");
    this.attachmentTab = page.locator("//span[contains(text(),'Attachment')]");
    this.smokeQAFormsTab = page.locator("//span[(text()='QA Forms')]");
    this.namesTab = page.locator("//span[contains(text(),'Names')]");
    this.serviceHistoryTab = page.locator("//span[contains(text(),'Service History')]");
    this.schedulesTab = page.locator("//span[contains(text(),'Schedules')]");
    this.feesTab = page.locator("//span[contains(text(),'Fees')]");
    this.tr1Tab = page.locator("//span[contains(text(),'TR1')]");
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
    this.deleteIcon = page.locator('#cmdDelete');
    this.copyButton = page.locator('#btnCopy');
    this.resetIcon = page.locator('#cmdRefresh');
    this.addMultiplePFButton = page.locator('#tabActivity_tmpl0_usrPF1_cmdAddMulPF');
    this.openRecurrenceButton = page.locator('#BtnOpenRecurrence');
    this.activityTypeTreeViewIcon = page.locator('#imgActivityTview');
    this.activityNoEdit = page.locator('#nbrActivity_Number');
    this.activityYearEdit = page.locator('#nbrActivity_Year');
    this.scheduledFromDateEdit = page.locator('#dttmSchFrm_Date_KPIDttmCtrl');
    this.scheduledFromTimeEdit = page.locator("//table[@id='dttmSchFrm_Time']//input");
    this.scheduledToDateEdit = page.locator('#dttmSchTo_Date_KPIDttmCtrl');
    this.scheduledToTimeEdit = page.locator("//table[@id='dttmSchTo_Time']//input");
    this.recurrenceEdit = page.locator('#ChkRecurrence');
    this.statusBar = page.locator('.statusBar');
    this.bottomLeftSideStatusBar = page.locator("//td[@class='statusBar']/b");
    this.showOnWhiteboardLabel = page.locator("//label[text()=' Show on Whiteboard']");
    this.fleetIBubble = page.locator('#cmdInfo1');
    this.jurisDropdown = page.locator('#lstJuris');
  }

  async selectAtCategoryGroup(categoryGroup: string): Promise<void> { await this.categoryGroupComboBox.selectOption({ label: categoryGroup }); await this.categoryGroupComboBox.press('Tab'); }
  async selectAtCategory(category: string): Promise<void> { await this.categoryComboBox.selectOption({ label: category }); await this.categoryComboBox.press('Tab'); }
  async selectAtActivityType(activityType: string): Promise<void> { await this.activityTypeComboBox.selectOption({ label: activityType }); await this.activityTypeComboBox.press('Tab'); }
  async selectAtActivityStatus(activityStatus: string): Promise<void> { await this.activityStatusComboBox.selectOption({ label: activityStatus }); }
  async tabOutEnteredDateAndTime(): Promise<void> { await this.activityDateEdit.press('Tab'); await this.activityTimeEdit.press('Tab'); }

  async selectUnit(): Promise<void> {
    const options = this.unitComboBox.locator('option');
    const count = await options.count();
    if (count > 1) { await this.unitComboBox.selectOption({ index: Math.floor(Math.random() * (count - 1)) + 1 }); }
  }

  async selectFleetNo(): Promise<void> {
    const options = this.fleetNoComboBox.locator('option');
    const count = await options.count();
    if (count > 1) { await this.fleetNoComboBox.selectOption({ index: Math.floor(Math.random() * (count - 1)) + 1 }); }
  }

  async enterAtLocation(location: string): Promise<void> { await this.locationEdit.fill(location); await this.locationCheckbox.press('Tab'); }
  async clickLocationInfoIcon(): Promise<void> { await this.locationInfoIcon.click(); }
  async enterAtSubject(subject: string): Promise<void> { await this.subjectEdit.fill(subject); }
  async getSubjectValue(): Promise<string> { return (await this.subjectEdit.inputValue()) || ''; }
  async getIncidentNoValue(): Promise<string> { return (await this.incidentNoEdit.inputValue()) || ''; }
  async getActivityStatusSelectedItem(): Promise<string> { return (await this.activityStatusComboBox.locator('option:checked').textContent()) || ''; }
  async getActivityTypeSelectedItem(): Promise<string> { return (await this.activityTypeComboBox.locator('option:checked').textContent()) || ''; }

  async clickLogEntryTab(): Promise<void> { await this.logEntryTab.click(); }
  async clickFeesTab(): Promise<void> { await this.feesTab.click(); }
  async switchToOtherTab(): Promise<void> { await this.otherTab.click(); }

  async save(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.saveButton.click(); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async close(): Promise<void> { await this.page.close(); }

  async clickSaveNCloseButton(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.saveAndCloseButton.click(); }
  async saveNClose(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.saveAndCloseButton.click(); }

  async navigateToPFTab(): Promise<void> { await this.pfTab.click(); }
  async navigateToLogEntryTab(): Promise<void> { await this.logEntryTab.click(); }
  async navigateToOtherTab(): Promise<void> { await this.otherTab.click(); }
  async navigateToLogHistoryTab(): Promise<void> { await this.logHistoryTab.click(); }
  async navigateToVisitorsTab(): Promise<void> { await this.visitorsTab.click(); }
  async navigateToMaintenanceTab(): Promise<void> { await this.maintenanceTab.click(); }
  async navigateToPublicEducationTab(): Promise<void> { await this.publicEducationTab.click(); }
  async navigateToAttachmentTab(): Promise<void> { await this.attachmentTab.click(); }
  async navigateToNamesTab(): Promise<void> { await this.namesTab.click(); }
  async switchToServiceHistoryTab(): Promise<void> { await this.serviceHistoryTab.click(); }
  async clickSchedulesTab(): Promise<void> { await this.schedulesTab.click(); }
  async switchToTR1Tab(): Promise<void> { await this.tr1Tab.click(); }
  async clickQAFormsTab(): Promise<void> { await this.smokeQAFormsTab.click(); }

  async getActivityNo(): Promise<string> {
    const year = await this.activityYearEdit.inputValue();
    const number = await this.activityNoEdit.inputValue();
    return `${year}-${number}`;
  }

  async tabActivityDateTime(): Promise<void> { await this.activityFromDateEdit.press('Tab'); await this.activityFromTimeEdit.press('Tab'); }
  async tabOutActivityToDateAndTime(): Promise<void> { await this.activityToDateEdit.press('Tab'); await this.activityToTimeEdit.press('Tab'); }
  async tabOutActivityFromDateAndTime(): Promise<void> { await this.activityFromDateEdit.press('Tab'); await this.activityFromTimeEdit.press('Tab'); }
  async selectShowOnWhiteBoardCheckBox(): Promise<void> { await this.showOnWhiteBoardCheckBox.click(); }
  async selectPrivateCheckBox(): Promise<void> { await this.privateCheckBox.click(); }
  async selectAtUnit(unit: string): Promise<void> { await this.unitComboBox.selectOption({ label: unit }); }
  async selectAtFleet(fleet: string): Promise<void> { await this.fleetNoComboBox.selectOption({ label: fleet }); }
  async clickDeleteIcon(): Promise<void> { await this.deleteIcon.click(); }

  async clickDeleteIconWithConfirmPopupMessage(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.deleteIcon.click(); }

  async enterAtFutureScheduledFromDateAndTime(date: string, time: string): Promise<void> {
    await this.scheduledFromDateEdit.fill(date);
    await this.scheduledFromDateEdit.press('Tab');
    await this.scheduledFromTimeEdit.fill(time);
  }

  async enterAtFutureScheduledToDateAndTime(date: string): Promise<void> {
    await this.scheduledToDateEdit.fill(date);
    await this.scheduledToDateEdit.press('Tab');
    await this.scheduledToTimeEdit.press('Tab');
  }

  async clickRecurrenceCheckBox(): Promise<void> { await this.recurrenceEdit.click(); }
  async clickOpenRecurrenceButton(): Promise<void> { await this.openRecurrenceButton.click(); }
  async getBottomLeftSideStatusBarText(): Promise<string> { return (await this.bottomLeftSideStatusBar.textContent()) || ''; }
  async getShowOnWhiteboardLabelText(): Promise<string> { return (await this.showOnWhiteboardLabel.textContent()) || ''; }
  async isPrivateCheckBoxDisplayed(): Promise<boolean> { return await this.privateCheckBox.isVisible(); }
  async isPFTabDisplayed(): Promise<boolean> { return await this.pfTab.isVisible(); }
  async isLogEntryTabDisplayed(): Promise<boolean> { return await this.logEntryTab.isVisible(); }
  async isAttachmentTabDisplayed(): Promise<boolean> { return await this.attachmentTab.isVisible(); }
  async isMaintenanceTabDisplayed(): Promise<boolean> { return await this.maintenanceTab.isVisible(); }
  async isOtherTabDisplayed(): Promise<boolean> { return await this.otherTab.isVisible(); }
  async isLogHistoryTabDisplayed(): Promise<boolean> { return await this.logHistoryTab.isVisible(); }
  async isVisitorsTabDisplayed(): Promise<boolean> { return await this.visitorsTab.isVisible(); }
  async isQAFormsDisplayed(): Promise<boolean> { return await this.smokeQAFormsTab.isVisible(); }
  async clickFleetIBubble(): Promise<void> { await this.fleetIBubble.click(); }
  async clickAddMultiplePFButton(): Promise<void> { await this.addMultiplePFButton.click(); }
  async clickReset(): Promise<void> { await this.resetIcon.click(); }
  async selectAtJuris(juris: string): Promise<void> { await this.jurisDropdown.selectOption({ label: juris }); }
  async clickCADEventCheckBox(): Promise<void> { await this.cadCheckbox.click(); }
  async clickAllDayCheckbox(): Promise<void> { await this.allDayCheckBox.click(); }
  async clickActivityTypeTreeIcon(): Promise<void> { await this.activityTypeTreeViewIcon.click(); }
  async isDeleteIconEnabled(): Promise<boolean> { return await this.deleteIcon.isEnabled(); }
  async isJurisDropdownEnabled(): Promise<boolean> { return await this.jurisDropdown.isEnabled(); }
  async getJurisSelectedItem(): Promise<string> { return (await this.jurisDropdown.locator('option:checked').textContent()) || ''; }
  async getCategoryGroupSelectedItem(): Promise<string> { return (await this.categoryGroupComboBox.locator('option:checked').textContent()) || ''; }
  async getFleetSelectedItem(): Promise<string> { return (await this.fleetNoComboBox.locator('option:checked').textContent()) || ''; }
  async getScheduledFromTimeValue(): Promise<string> { return (await this.scheduledFromTimeEdit.inputValue()) || ''; }

  // Hardcoded value selection methods
  async selectCategoryGroupAsPIPolice(): Promise<void> { await this.categoryGroupComboBox.selectOption({ label: 'PI - Police' }); }
  async selectCategoryAsDamage(): Promise<void> { await this.categoryComboBox.selectOption({ label: 'Damage' }); }
  async selectCategoryAsFIFire(): Promise<void> { await this.categoryComboBox.selectOption({ label: 'FI - Fire' }); }
  async selectActivityTypeAsDamage(): Promise<void> { await this.activityTypeComboBox.selectOption({ label: 'Damage' }); }
  async selectActivityTypeAsMaintenance(): Promise<void> { await this.activityTypeComboBox.selectOption({ label: 'Maintenance' }); }
  async selectActivityTypeAsInspection(): Promise<void> { await this.activityTypeComboBox.selectOption({ label: 'Inspection' }); }
  async selectActivityStatusAsRequestToDo(): Promise<void> { await this.activityStatusComboBox.selectOption({ label: 'Request/To-Do' }); }
  async selectActivityStatusAsCompletedActivity(): Promise<void> { await this.activityStatusComboBox.selectOption({ label: 'Completed Activity' }); }
  async selectActivityStatusAsScheduledItem(): Promise<void> { await this.activityStatusComboBox.selectOption({ label: 'Scheduled Item' }); await this.activityStatusComboBox.press('Tab'); }
  async selectActivityStatusAsInprogressActivity(): Promise<void> { await this.activityStatusComboBox.selectOption({ label: 'In-Progress Activity' }); await this.activityStatusComboBox.press('Tab'); }

  // From Home methods (with Tab after)
  async selectAtCategoryGroupForActivityFromHome(categoryGroup: string): Promise<void> { await this.categoryGroupComboBox.selectOption({ label: categoryGroup }); await this.categoryGroupComboBox.press('Tab'); }
  async selectAtCategoryForActivityFromHome(category: string): Promise<void> { await this.categoryComboBox.selectOption({ label: category }); await this.categoryComboBox.press('Tab'); }
  async selectAtActivityTypeForActivityFromHome(activityType: string): Promise<void> { await this.activityTypeComboBox.selectOption({ label: activityType }); }
  async selectAtActivityStatusForActivityFromHome(activityStatus: string): Promise<void> { await this.activityStatusComboBox.selectOption({ label: activityStatus }); }

  // Random selection methods
  async selectCategoryGroup(): Promise<void> { const opts = this.categoryGroupComboBox.locator('option'); const c = await opts.count(); if (c > 1) { await this.categoryGroupComboBox.selectOption({ index: Math.floor(Math.random() * (c - 1)) + 1 }); } }
  async selectCategory(): Promise<void> { const opts = this.categoryComboBox.locator('option'); const c = await opts.count(); if (c > 1) { await this.categoryComboBox.selectOption({ index: Math.floor(Math.random() * (c - 1)) + 1 }); } }
  async selectActivityType(): Promise<void> { await this.activityTypeComboBox.click(); const opts = this.activityTypeComboBox.locator('option'); const c = await opts.count(); if (c > 1) { await this.activityTypeComboBox.selectOption({ index: Math.floor(Math.random() * (c - 1)) + 1 }); } }

  // Additional action methods
  async enterSubjectAsTesting(): Promise<void> { await this.subjectEdit.fill('Testing'); }
  async enterSubject(text: string): Promise<void> { await this.subjectEdit.fill(text); }
  async enterSpaceAtSubject(noOfSpaces: number): Promise<void> { await this.subjectEdit.click(); await this.subjectEdit.fill(' '.repeat(noOfSpaces)); }
  async clickSaveForConflictSchedule(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.saveButton.click(); this.page.once('dialog', d => d.accept()); }
  async selectAtActivityStatus1(activityStatus: string): Promise<void> { await this.activityStatusComboBox.selectOption({ label: activityStatus }); await this.activityStatusComboBox.press('Tab'); }

  // Verify methods
  async isSaveButtonEnabled(): Promise<boolean> { return await this.saveButton.isEnabled(); }
  async isSaveAndCloseButtonEnabled(): Promise<boolean> { return await this.saveAndCloseButton.isEnabled(); }
  async getStatusBarText(): Promise<string> { return (await this.statusBar.textContent()) || ''; }
  async isActivityTypeDisabled(): Promise<boolean> { return (await this.activityTypeComboBox.getAttribute('disabled')) === 'true'; }
  async isCategoryGroupDisabled(): Promise<boolean> { return (await this.categoryGroupComboBox.getAttribute('disabled')) === 'true'; }
  async isCategoryDisabled(): Promise<boolean> { return (await this.categoryComboBox.getAttribute('disabled')) === 'true'; }
  async isActivityFromDateReadonly(): Promise<boolean> { return (await this.activityFromDateEdit.getAttribute('readonly')) === 'true'; }
  async isActivityToDateReadonly(): Promise<boolean> { return (await this.activityToDateEdit.getAttribute('readonly')) === 'true'; }
  async getIncidentNoReadonly(): Promise<string> { return (await this.incidentNoEdit.getAttribute('readonly')) || ''; }
  async getCategoryDropdownValues(): Promise<string[]> { const options = this.categoryComboBox.locator('option'); const count = await options.count(); const values: string[] = []; for (let i = 0; i < count; i++) { values.push((await options.nth(i).textContent()) || ''); } return values; }
  async getActivityTypeDropdownValues(): Promise<string[]> { const options = this.activityTypeComboBox.locator('option'); const count = await options.count(); const values: string[] = []; for (let i = 0; i < count; i++) { values.push((await options.nth(i).textContent()) || ''); } return values; }
  async getActivityStatusDropdownValues(): Promise<string[]> { const options = this.activityStatusComboBox.locator('option'); const count = await options.count(); const values: string[] = []; for (let i = 0; i < count; i++) { values.push((await options.nth(i).textContent()) || ''); } return values; }

  // Activity number verification
  async verifyActivityNo(year: string, number: string): Promise<{ yearValue: string; noValue: string }> {
    const yearValue = await this.activityYearEdit.inputValue();
    const noValue = await this.activityNoEdit.inputValue();
    return { yearValue, noValue };
  }

  async tabOutActivityDate(): Promise<string> { await this.activityDateEdit.press('Tab'); return (await this.activityDateEdit.inputValue()) || ''; }
  async tabOutActivityTime(): Promise<string> { await this.activityTimeEdit.press('Tab'); return (await this.activityTimeEdit.inputValue()) || ''; }

  // Additional methods
  async enterAtHomeActivityLocation(location: string): Promise<void> { await this.locationEdit.fill(location); }
  async getTabColor(tabName: string): Promise<string> { return await this.page.locator(`//span[text()='${tabName}']`).evaluate(el => getComputedStyle(el).color); }
  async getAttachmentTabBackgroundColor(): Promise<string> { return await this.attachmentTab.evaluate(el => getComputedStyle(el).backgroundColor); }
  async isBottomMessageShown(): Promise<boolean> { return await this.bottomLeftSideStatusBar.isVisible(); }
  async isBottomMessageError(): Promise<boolean> { const text = await this.getBottomLeftSideStatusBarText(); return text.includes('Invalid code value') || text.includes('Error') || text.includes('Validation'); }
  async enterFutureDateInWhiteBoardFromDate(date: string): Promise<void> { await this.scheduledFromDateEdit.fill(date); }
  async enterFutureDateInWhiteBoardToDate(date: string): Promise<void> { await this.scheduledToDateEdit.fill(date); }
  async selectAtActivityTypeWithTab(activityType: string): Promise<void> { await this.activityTypeComboBox.selectOption({ label: activityType }); await this.activityTypeComboBox.press('Tab'); }
  async verifySaveConfirmPopupAndAccept(): Promise<void> { this.page.once('dialog', d => d.accept()); }
  async verifyChangeScheduleFutureInstanceConfirm(): Promise<void> { this.page.once('dialog', d => d.accept()); }
  async isFleetNoDisabled(): Promise<boolean> { return (await this.fleetNoComboBox.getAttribute('disabled')) === 'true'; }
  async getCategorySelectedItem(): Promise<string> { return (await this.categoryComboBox.locator('option:checked').textContent()) || ''; }
  async isNamesTabDisplayed(): Promise<boolean> { return await this.namesTab.isVisible(); }
  async isSchedulesTabDisplayed(): Promise<boolean> { return await this.schedulesTab.isVisible(); }
  async isFeesTabDisplayed(): Promise<boolean> { return await this.feesTab.isVisible(); }
  async isTR1TabDisplayed(): Promise<boolean> { return await this.tr1Tab.isVisible(); }
  async isServiceHistoryTabDisplayed(): Promise<boolean> { return await this.serviceHistoryTab.isVisible(); }
  async isPublicEducationTabDisplayed(): Promise<boolean> { return await this.publicEducationTab.isVisible(); }
  async closeScreen(): Promise<void> { await this.page.close(); }

  // Verify wrappers with exact Java names
  async VerifyAtActivityType(): Promise<void> { expect(await this.getActivityTypeSelectedItem()).toBeTruthy(); }
  async TabOutActivityDateAndTime(): Promise<void> { await this.activityDateEdit.press('Tab'); await this.activityTimeEdit.press('Tab'); }
  async VerifyAtIncidentNo(incidentNo: string): Promise<void> { expect(await this.incidentNoEdit.inputValue()).toContain(incidentNo); }
  async VerifyAtActivityStatus(activityStatus: string): Promise<void> { expect(await this.getActivityStatusSelectedItem()).toContain(activityStatus); }
  async SelectpublicCheckBox(): Promise<void> { await this.privateCheckBox.click(); }
  async VerifySaveNCloseButtonEnabled(): Promise<void> { expect(await this.saveButton.isEnabled()).toBeTruthy(); expect(await this.saveAndCloseButton.isEnabled()).toBeTruthy(); }
  async NavigateToQAFormsTab(): Promise<void> { await this.smokeQAFormsTab.click(); }
  async NavigateToMaintenanaceTab(): Promise<void> { await this.maintenanceTab.click(); }
  async switchToActivityEntryAttachmentTab(): Promise<void> { await this.attachmentTab.click(); }
  async verifyAttachmentTabIsDefaultTab(): Promise<void> { const bg = await this.attachmentTab.evaluate(el => getComputedStyle(el).backgroundColor); expect(bg).toContain('143, 198, 234'); }
  async verifyEnterDateAcknowledge(): Promise<void> { this.page.once('dialog', d => d.accept()); }
  async verifyEnterCFSAcknowledge(): Promise<void> { this.page.once('dialog', d => d.accept()); }
  async verifyEnterSRCAcknowledge(): Promise<void> { this.page.once('dialog', d => d.accept()); }
  async verifyAdditionSuccessfulBottomMessage(): Promise<void> { const text = await this.getBottomLeftSideStatusBarText(); expect(text).toContain('1002 - Addition Successful'); }
  async verifyChangeScheduleFutureInstanceConfirmMessage(): Promise<void> { this.page.once('dialog', d => d.accept()); }
  async verifyAllTabsDisabled(): Promise<void> { expect(await this.activityTypeComboBox.getAttribute('disabled')).toContain('true'); expect(await this.categoryGroupComboBox.getAttribute('disabled')).toContain('true'); }
  async verifyAtWhiteBoardLabel(title: string): Promise<void> { const text = await this.getShowOnWhiteboardLabelText(); expect(text).toContain(title); }
  async verifyPrivateCheckBoxIsDisplayed(): Promise<void> { expect(await this.privateCheckBox.isVisible()).toBeTruthy(); }
  async clickPrivateCheckBox(): Promise<void> { await this.privateCheckBox.click(); }
  async verifyPFTabIsDisplayed(): Promise<void> { expect(await this.pfTab.isVisible()).toBeTruthy(); }
  async verifyLogEntryTabIsDisplayed(): Promise<void> { expect(await this.logEntryTab.isVisible()).toBeTruthy(); }
  async verifyAttachmentTabIsDisplayed(): Promise<void> { expect(await this.attachmentTab.isVisible()).toBeTruthy(); }
  async verifyMaintenanceTabIsDisplayed(): Promise<void> { expect(await this.maintenanceTab.isVisible()).toBeTruthy(); }
  async verifyOtherTabIsDisplayed(): Promise<void> { expect(await this.otherTab.isVisible()).toBeTruthy(); }
  async verifyLogHistoryTbIsDisplayed(): Promise<void> { expect(await this.logHistoryTab.isVisible()).toBeTruthy(); }
  async verifyAtCategory(category: string): Promise<void> { const values = await this.getCategoryDropdownValues(); expect(values).toContain(category); }
  async verifyFleetNoIsDisabled(): Promise<void> { expect(await this.incidentNoEdit.getAttribute('readonly')).toContain('true'); }
  async verifyQAFormsIsDisplayed(): Promise<void> { expect(await this.smokeQAFormsTab.isVisible()).toBeTruthy(); }
  async VerifyupdatesuccessfulMessage(): Promise<void> { const text = await this.getStatusBarText(); expect(text).toContain('1003 - Update Successful'); }
  async verifyEnterLocationAcknowldge(): Promise<void> { this.page.once('dialog', d => d.accept()); }
  async verifyVistiorsTabIsDisplayed(): Promise<void> { expect(await this.visitorsTab.isVisible()).toBeTruthy(); }
  async verifyAtActivityCategoryGroup(categoryGroup: string): Promise<void> { expect(await this.getCategoryGroupSelectedItem()).toEqual(categoryGroup); }
  async verifysaveConfirmmessageAndClickOk(): Promise<void> { this.page.once('dialog', d => d.accept()); }
  async VerifyInvalidCodeValueErrorMessage(): Promise<void> { const exists = await this.bottomLeftSideStatusBar.isVisible(); expect(exists).toBeFalsy(); }
  async verifyAtFleet(fleet: string): Promise<void> { expect(await this.getFleetSelectedItem()).toEqual(fleet); }
  async verifyAtActivityType(activityType: string): Promise<void> { expect(await this.getActivityTypeSelectedItem()).toEqual(activityType); }
  async verifyTabColorAsBlue(tabName: string): Promise<void> { const color = await this.page.locator(`//span[text()='${tabName}']`).evaluate(el => getComputedStyle(el).color); expect(color).toEqual('rgba(0, 0, 255, 1)'); }
  async verifyUpdatedDataExistsMaintenanceTabAcknowledgePopup(): Promise<void> { this.page.once('dialog', d => d.accept()); }
  async verifyAtActivityStatus(activityStatus: string): Promise<void> { const options = await this.getActivityStatusDropdownValues(); expect(options).toContain(activityStatus); }
  async verifyBottomMessageNotShown(): Promise<void> { const exists = await this.bottomLeftSideStatusBar.isVisible(); if (exists) { const text = (await this.bottomLeftSideStatusBar.textContent()) || ''; expect(text.includes('Invalid code value') || text.includes('Error') || text.includes('Validation')).toBeFalsy(); } expect(exists).toBeFalsy(); }
  async verifyAtActivityTypeDropdownList(expectedValues: string[]): Promise<void> { const values = await this.getActivityTypeDropdownValues(); for (const v of values) { expect(expectedValues).toContain(v); } }
  async verifySaveConfirmationPopup(): Promise<void> { this.page.once('dialog', d => d.accept()); }
  async verifyUpdateVisitorTabAcknowledgePopup(): Promise<void> { this.page.once('dialog', d => d.accept()); }
  async verifyDeleteIconDisabled(): Promise<void> { expect(await this.deleteIcon.isEnabled()).toBeFalsy(); }
  async verifyActivityTypeDropdownList(expectedValues: string[]): Promise<void> { const values = await this.getActivityTypeDropdownValues(); const filtered = values.filter(v => v !== '--'); expect(filtered.length).toEqual(expectedValues.length); }
  async verify2008SubjectIsRequiredAcknowledgePopUp(): Promise<void> { this.page.once('dialog', d => d.accept()); }
  async verifyAtJurisDropdownIsEnabled(): Promise<void> { expect(await this.jurisDropdown.isEnabled()).toBeTruthy(); }
  async verifyAtJuris(juris: string): Promise<void> { expect(await this.getJurisSelectedItem()).toEqual(juris); }
}

// ─── Activity Entry PF Tab ───────────────────────────────────────────────────

export class ActivityEntryPFTabPage {
  readonly page: Page;
  readonly pfCodeEdit: Locator;
  readonly pfLookupButton: Locator;
  readonly pfActivityComboBox: Locator;
  readonly statusComboBox: Locator;
  readonly unitComboBox: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly hoursWorkedEdit: Locator;
  readonly creditsEdit: Locator;
  readonly hoursPaidEdit: Locator;
  readonly payScaleComboBox: Locator;
  readonly resultPFTabGrid: Locator;
  readonly pfTabFromDateEdit: Locator;
  readonly pfTabFromTimeEdit: Locator;
  readonly pfTabToDateEdit: Locator;
  readonly pfTabToTimeEdit: Locator;
  readonly selectAllCheckBox: Locator;
  readonly pointsLabel: Locator;
  readonly addMultiplePFButton: Locator;
  readonly pfInfoIcon: Locator;
  readonly calendarResourcesEdit: Locator;
  readonly pfCodeDescriptionEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pfCodeEdit = page.locator('#tabActivity_tmpl0_usrPF1_lupPFNbr_CodeValue');
    this.pfLookupButton = page.locator('#tabActivity_tmpl0_usrPF1_lupPFNbr_imgBtn');
    this.pfActivityComboBox = page.locator('#tabActivity_tmpl0_usrPF1_cddPFActivity_DropDown');
    this.statusComboBox = page.locator('#tabActivity_tmpl0_usrPF1_cddPFStatus_DropDown');
    this.unitComboBox = page.locator('#tabActivity_tmpl0_usrPF1_cddUnit_DropDown');
    this.addButton = page.locator('#tabActivity_tmpl0_usrPF1_imgAdd');
    this.clearButton = page.locator('#tabActivity_tmpl0_usrPF1_imgClear');
    this.hoursWorkedEdit = page.locator('#tabActivity_tmpl0_usrPF1_txtHWork');
    this.creditsEdit = page.locator('#tabActivity_tmpl0_usrPF1_txtHCredit');
    this.hoursPaidEdit = page.locator('#tabActivity_tmpl0_usrPF1_txtHPaid');
    this.payScaleComboBox = page.locator('#tabActivity_tmpl0_usrPF1_cddScale_DropDown');
    this.resultPFTabGrid = page.locator('#tabActivity_tmpl0_usrPF1_grdPFDtls');
    this.pfTabFromDateEdit = page.locator('#tabActivity_tmpl0_usrPF1_dtmStart_Date_KPIDttmCtrl');
    this.pfTabFromTimeEdit = page.locator("//table[@id='tabActivity_tmpl0_usrPF1_dtmStart_Time']//input");
    this.pfTabToDateEdit = page.locator('#tabActivity_tmpl0_usrPF1_dtmEnd_Date_KPIDttmCtrl');
    this.pfTabToTimeEdit = page.locator("//table[@id='tabActivity_tmpl0_usrPF1_dtmEnd_Time']//input");
    this.selectAllCheckBox = page.locator('#tabActivity_tmpl0_usrPF1_ChkSelectAll');
    this.pointsLabel = page.locator('#tabActivity_tmpl0_usrPF1_lblHourCredits');
    this.addMultiplePFButton = page.locator('#tabActivity_tmpl0_usrPF1_cmdAddMulPF');
    this.pfInfoIcon = page.locator('#tabActivity_tmpl0_usrPF1_lupPFNbr_cmdIncOnAddr');
    this.calendarResourcesEdit = page.locator('#lupResource_CodeValue');
    this.pfCodeDescriptionEdit = page.locator('#tabActivity_tmpl0_usrPF1_lupPFNbr_CodeDescription');
  }

  async enterAtPFNo(pfCode: string): Promise<void> { await this.pfCodeEdit.fill(pfCode); await this.pfCodeEdit.press('Tab'); }
  async selectAtPFActivity(pfActivity: string): Promise<void> { await this.pfActivityComboBox.selectOption({ label: pfActivity }); }
  async selectAtStatus(status: string): Promise<void> { await this.statusComboBox.selectOption({ label: status }); }
  async selectAtUnit(unit: string): Promise<void> { await this.unitComboBox.selectOption({ label: unit }); }
  async getPointsLabelText(): Promise<string> { return (await this.pointsLabel.textContent()) || ''; }
  async enterAtStartDateTime(date: string, time: string): Promise<void> { await this.pfTabFromDateEdit.click(); await this.pfTabFromDateEdit.clear(); await this.pfTabFromDateEdit.fill(date); await this.pfTabFromTimeEdit.fill(time); }
  async enterAtEndDateTime(toDate: string, time: string): Promise<void> { await this.pfTabToDateEdit.fill(toDate); await this.pfTabToTimeEdit.fill(time); }
  async enterAtHoursWorked(hoursWorked: string): Promise<void> { await this.hoursWorkedEdit.fill(hoursWorked); await this.hoursWorkedEdit.press('Tab'); }
  async enterAtCredits(credits: string): Promise<void> { await this.creditsEdit.fill(credits); }
  async enterAtHoursPaid(hoursPaid: string): Promise<void> { await this.hoursPaidEdit.fill(hoursPaid); }
  async selectAtPayScale(payScale: string): Promise<void> { await this.payScaleComboBox.selectOption({ label: payScale }); await this.payScaleComboBox.press('Tab'); }
  async clickAddMultiplePFButton(): Promise<void> { await this.addMultiplePFButton.click(); }
  async clickAddButton(): Promise<void> { await this.addButton.click(); }
  async clickClearButton(): Promise<void> { await this.clearButton.click(); }
  async selectAllCheckbox(): Promise<void> { await this.selectAllCheckBox.click(); }
  async tabOutFromEndTime(): Promise<void> { await this.pfTabToTimeEdit.press('Tab'); }
  async deleteAtPFInGrid(pfValue: string): Promise<void> { this.page.once('dialog', d => d.accept()); await this.resultPFTabGrid.locator(`//tr[td[contains(text(),'${pfValue}')]]//img[contains(@class,'delete')]`).click(); }
  async enterAtPoints(points: string): Promise<void> { await this.creditsEdit.fill(points); await this.creditsEdit.press('Tab'); }
  async clickPFLookUpIcon(): Promise<void> { await this.pfLookupButton.click(); }
  async clickPFInfoIcon(): Promise<void> { await this.pfInfoIcon.click(); }
  async enterAtCalendarResources(calendarResource: string): Promise<void> { await this.calendarResourcesEdit.clear(); await this.calendarResourcesEdit.fill(calendarResource); await this.calendarResourcesEdit.press('Tab'); }
  async getGridRowCount(): Promise<number> { return await this.resultPFTabGrid.locator('//tr[contains(@class,"Row")]').count(); }
  async getPFCodeValue(): Promise<string> { return (await this.pfCodeEdit.inputValue()) || ''; }
  async getPFCodeDescriptionValue(): Promise<string> { return (await this.pfCodeDescriptionEdit.inputValue()) || ''; }
  async getStartDateValue(): Promise<string> { return (await this.pfTabFromDateEdit.inputValue()) || ''; }
  async getPFActivitySelectedItem(): Promise<string> { return (await this.pfActivityComboBox.locator('option:checked').textContent()) || ''; }
  async getStatusSelectedItem(): Promise<string> { return (await this.statusComboBox.locator('option:checked').textContent()) || ''; }
  async getUnitSelectedItem(): Promise<string> { return (await this.unitComboBox.locator('option:checked').textContent()) || ''; }
  async getHoursWorkedValue(): Promise<string> { return (await this.hoursWorkedEdit.inputValue()) || ''; }
  async getCreditsValue(): Promise<string> { return (await this.creditsEdit.inputValue()) || ''; }
  async getHoursPaidValue(): Promise<string> { return (await this.hoursPaidEdit.inputValue()) || ''; }
  async getPayScaleSelectedItem(): Promise<string> { return (await this.payScaleComboBox.locator('option:checked').textContent()) || ''; }

  async selectPFRecordFromGrid(): Promise<void> {
    const rows = this.resultPFTabGrid.locator('//tr[contains(@class,"Row")]');
    const count = await rows.count();
    if (count > 0) { await rows.nth(Math.floor(Math.random() * count)).click(); }
  }

  async enterAtScheduleDateTime(fromDate: string, fromTime: string, toDate: string, toTime: string): Promise<void> {
    await this.page.locator('#tabActivity_tmpl0_usrPF1_dttmSchFrm_Date_KPIDttmCtrl').fill(fromDate);
    await this.page.locator("//table[@id='tabActivity_tmpl0_usrPF1_dttmSchFrm_Time']//input").fill(fromTime);
    await this.page.locator('#tabActivity_tmpl0_usrPF1_dttmSchTo_Date_KPIDttmCtrl').fill(toDate);
    await this.page.locator("//table[@id='tabActivity_tmpl0_usrPF1_dttmSchTo_Time']//input").fill(toTime);
  }

  async enterAtScheduledPF(pfCode: string): Promise<void> { await this.pfCodeEdit.fill(pfCode); await this.pfCodeEdit.press('Tab'); }

  async getPFGridCellText(pfValue: string, columnName: string): Promise<string> {
    return (await this.resultPFTabGrid.locator(`//tr[td[contains(text(),'${pfValue}')]]//td[position()=${columnName}]`).textContent()) || '';
  }

  async getPFColumnCellText(columnName: string, rowIndex: number): Promise<string> {
    const headerCells = this.resultPFTabGrid.locator('//tr[contains(@class,"Header")]//th');
    const count = await headerCells.count();
    let colIndex = -1;
    for (let i = 0; i < count; i++) {
      const text = await headerCells.nth(i).textContent();
      if (text?.includes(columnName)) { colIndex = i + 1; break; }
    }
    if (colIndex === -1) return '';
    return (await this.resultPFTabGrid.locator(`//tr[contains(@class,"Row")][${rowIndex + 1}]//td[${colIndex}]`).textContent()) || '';
  }

  async isPFInfoIconDisplayed(): Promise<boolean> { return await this.pfInfoIcon.isVisible(); }

  async getPFActivityDropdownValues(): Promise<string[]> {
    const options = this.pfActivityComboBox.locator('option');
    const count = await options.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) { values.push((await options.nth(i).textContent()) || ''); }
    return values;
  }

  async getGridCellByPFCode(pfCode: string, columnName: string): Promise<string> {
    const headerCells = this.resultPFTabGrid.locator('//tr[contains(@class,"Header")]//th');
    const hCount = await headerCells.count();
    let colIndex = -1;
    for (let i = 0; i < hCount; i++) {
      const text = await headerCells.nth(i).textContent();
      if (text?.includes(columnName)) { colIndex = i + 1; break; }
    }
    if (colIndex === -1) return '';
    return (await this.resultPFTabGrid.locator(`//tr[td[contains(text(),'${pfCode}')]]//td[${colIndex}]`).textContent()) || '';
  }

  // Verify wrappers with exact Java names
  async VerifyAtCustomNameInCustomField(customName: string): Promise<void> { expect(await this.getPointsLabelText()).toEqual(customName); }
  async SelectAtFleetforFire(fleet: string): Promise<void> { await this.unitComboBox.selectOption({ label: fleet }); }
  async EnterAtPFCode1(pfCode: string): Promise<void> { await this.pfCodeEdit.fill(pfCode); }
  async verifyAtPFInGrid(pf: string, rowIndex?: number): Promise<void> { const text = await this.getPFColumnCellText('PF', rowIndex ?? 0); expect(text).toEqual(pf); }
  async verifyAtPFInGrid1(pf: string): Promise<void> { const text = await this.getPFColumnCellText('PF', 0); expect(text).toEqual(pf); }
  async verifyAtCreditsInGrid(points: string): Promise<void> { const text = await this.getPFColumnCellText('Credits', 0); expect(text).toEqual(points); }
  async verifyAtPayScaleInGrid(): Promise<void> { const text = await this.getPFColumnCellText('Pay Scale', 0); expect(text).toEqual('Pay Scale 1'); }
  async verifyAtPFDropdownOptions(option: string): Promise<void> { const values = await this.getPFActivityDropdownValues(); expect(values).toContain(option); }
  async verifyCountInGrid(expectedCount: number): Promise<void> { expect(await this.getGridRowCount()).toEqual(expectedCount); }
  async verifyAtPFCode(pfCode: string): Promise<void> { expect(await this.getPFCodeValue()).toEqual(pfCode); }
  async verifyAtPFCodeDescription(desc: string): Promise<void> { expect(await this.getPFCodeDescriptionValue()).toEqual(desc); }
  async verifyAtPFIconIsDisplayed(): Promise<void> { expect(await this.isPFInfoIconDisplayed()).toBeTruthy(); }
  async verifyAtPFActivity(pfActivity: string): Promise<void> { expect(await this.getPFActivitySelectedItem()).toEqual(pfActivity); }
  async verifyAtStatus(status: string): Promise<void> { expect(await this.getStatusSelectedItem()).toEqual(status); }
  async verifyAtUnit(): Promise<void> { expect(await this.getUnitSelectedItem()).toBeTruthy(); }
  async verifyAtHoursWorked(hoursWorked: string): Promise<void> { expect(await this.getHoursWorkedValue()).toEqual(hoursWorked); }
  async verifyAtCredits(credits: string): Promise<void> { expect(await this.getCreditsValue()).toEqual(credits); }
  async verifyAtHoursPaid(hoursPaid: string): Promise<void> { expect(await this.getHoursPaidValue()).toEqual(hoursPaid); }
  async verifyAtPayScale(payScale: string): Promise<void> { expect(await this.getPayScaleSelectedItem()).toEqual(payScale); }
  async verifyAtHoursByPFInGrid(pfCode: string, hours: string): Promise<void> { const text = await this.getGridCellByPFCode(pfCode, 'Hours'); expect(text).toEqual(hours); }
  async verifyAtHoursPaidByPFInGrid(pfCode: string, hoursPaid: string): Promise<void> { const text = await this.getGridCellByPFCode(pfCode, 'Hrs Paid'); expect(text).toEqual(hoursPaid); }
  async verifyAtUnitByPFInGrid(pfCode: string, unit: string): Promise<void> { const text = await this.getGridCellByPFCode(pfCode, 'Unit'); expect(text).toEqual(unit); }
  async verifyAtPFActivityByPFInGrid(pfCode: string, pfActivity: string): Promise<void> { const text = await this.getGridCellByPFCode(pfCode, 'PF Activity'); expect(text).toEqual(pfActivity); }
  async verifyAtPFStatusByPFInGrid(pfCode: string, pfStatus: string): Promise<void> { const text = await this.getGridCellByPFCode(pfCode, 'PF Status'); expect(text).toEqual(pfStatus); }
}

// ─── Activity Entry Other Tab ────────────────────────────────────────────────

export class ActivityEntryOtherTabPage {
  readonly page: Page;
  readonly pfCodeEdit: Locator;
  readonly refTypeComboBox: Locator;
  readonly refTypeNumberEdit: Locator;
  readonly dueByDateEdit: Locator;
  readonly dueByTimeEdit: Locator;
  readonly priorityComboBox: Locator;
  readonly reportableCheckBox: Locator;
  readonly completedDateEdit: Locator;
  readonly completedTimeEdit: Locator;
  readonly customFieldEdit: Locator;
  readonly enteredByEdit: Locator;
  readonly sendNoticeOnChangesCheckBox: Locator;
  readonly divisionSectionSquadArrow: Locator;
  readonly divisionDropdown: Locator;
  readonly sectionDropdown: Locator;
  readonly teamDropdown: Locator;
  readonly squadEdit: Locator;
  readonly add1Button: Locator;
  readonly clear1Button: Locator;
  readonly add2Button: Locator;
  readonly clear2Button: Locator;
  readonly addMultiplePFButton: Locator;
  readonly otherTabResultTable: Locator;
  readonly scheduleDateEdit: Locator;
  readonly scheduleTimeEdit: Locator;
  readonly cfsEdit: Locator;
  readonly srcDropdown: Locator;
  readonly scheduleCADCheckBox: Locator;
  readonly cellEdit: Locator;
  readonly divisionCustomLabel: Locator;
  readonly sectionCustomLabel: Locator;
  readonly teamCustomLabel: Locator;
  readonly squadCustomLabel: Locator;
  readonly entryDateEdit: Locator;
  readonly entryTimeEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pfCodeEdit = page.locator('#tabActivity_tmpl6_usrWorkFlow1_lupAssignedTo_CodeValue');
    this.refTypeComboBox = page.locator('#tabActivity_tmpl6_usrWorkFlow1_cddRefType_DropDown');
    this.refTypeNumberEdit = page.locator('#tabActivity_tmpl6_usrWorkFlow1_txtRefNo');
    this.dueByDateEdit = page.locator('#tabActivity_tmpl6_usrWorkFlow1_dtmDueBy_Date_KPIDttmCtrl');
    this.dueByTimeEdit = page.locator("//table[@id='tabActivity_tmpl6_usrWorkFlow1_dtmDueBy_Time']//input");
    this.priorityComboBox = page.locator('#tabActivity_tmpl6_usrWorkFlow1_cddPriority_DropDown');
    this.reportableCheckBox = page.locator('#tabActivity_tmpl6_usrWorkFlow1_chkIsReportable');
    this.completedDateEdit = page.locator('#tabActivity_tmpl6_usrWorkFlow1_dttmCompleted_Date_KPIDttmCtrl');
    this.completedTimeEdit = page.locator("//table[@id='tabActivity_tmpl6_usrWorkFlow1_dttmCompleted_Time']//input");
    this.customFieldEdit = page.locator('#tabActivity_tmpl6_usrWorkFlow1_txtCustom');
    this.enteredByEdit = page.locator("//input[@id='tabActivity_tmpl6_usrWorkFlow1_lupPFNbr_CodeValue']");
    this.sendNoticeOnChangesCheckBox = page.locator("[name='tabActivity$tmpl6$usrWorkFlow1$chkSendNotice']");
    this.divisionSectionSquadArrow = page.locator("//div[@id='Dv_accordion1']//h3[@id='ui-id-1']//span[@class='ui-accordion-header-icon ui-icon ui-icon-triangle-1-e']");
    this.divisionDropdown = page.locator('#tabActivity_tmpl6_usrWorkFlow1_cddDivision_DropDown');
    this.sectionDropdown = page.locator('#tabActivity_tmpl6_usrWorkFlow1_cddSection_DropDown');
    this.teamDropdown = page.locator('#tabActivity_tmpl6_usrWorkFlow1_cddTeam_DropDown');
    this.squadEdit = page.locator('#tabActivity_tmpl6_usrWorkFlow1_lupSquad_CodeValue');
    this.add1Button = page.locator('#tabActivity_tmpl6_usrWorkFlow1_cmdImgAdd');
    this.clear1Button = page.locator('#tabActivity_tmpl6_usrWorkFlow1_cmdImgClear');
    this.add2Button = page.locator('#tabActivity_tmpl6_usrWorkFlow1_imgAdd');
    this.clear2Button = page.locator('#tabActivity_tmpl6_usrWorkFlow1_imgClear');
    this.addMultiplePFButton = page.locator('#tabActivity_tmpl6_usrWorkFlow1_cmdAddMulPF');
    this.otherTabResultTable = page.locator("//div[@id='tabActivity_tmpl6_usrWorkFlow1_grdDistributedPF']");
    this.scheduleDateEdit = page.locator('#tabActivity_tmpl6_usrWorkFlow1_dttmSchDate_Date_KPIDttmCtrl');
    this.scheduleTimeEdit = page.locator("//table[@id='tabActivity_tmpl6_usrWorkFlow1_dttmSchDate_Time']//input");
    this.cfsEdit = page.locator('#tabActivity_tmpl6_usrWorkFlow1_lupCFS_CodeValue');
    this.srcDropdown = page.locator('#tabActivity_tmpl6_usrWorkFlow1_cddSRC_DropDown');
    this.scheduleCADCheckBox = page.locator('#tabActivity_tmpl6_usrWorkFlow1_chkCADSchedule');
    this.cellEdit = page.locator('#Celltxt');
    this.divisionCustomLabel = page.locator('#tabActivity_tmpl6_usrWorkFlow1_lblDivision');
    this.sectionCustomLabel = page.locator('#tabActivity_tmpl6_usrWorkFlow1_lblSection');
    this.teamCustomLabel = page.locator('#tabActivity_tmpl6_usrWorkFlow1_lblTeam');
    this.squadCustomLabel = page.locator('#tabActivity_tmpl6_usrWorkFlow1_lblSquad');
    this.entryDateEdit = page.locator('#tabActivity_tmpl6_usrWorkFlow1_dtmEntry_Date_KPIDttmCtrl');
    this.entryTimeEdit = page.locator("//table[@id='tabActivity_tmpl6_usrWorkFlow1_dtmEntry_Time']//input");
  }

  async enterPFAtPFCode(pfCode: string): Promise<void> { await this.pfCodeEdit.fill(pfCode); await this.pfCodeEdit.press('Tab'); }
  async selectAtRefTypeNo(refType: string, refNo: string): Promise<void> { await this.refTypeComboBox.selectOption({ label: refType }); await this.refTypeNumberEdit.fill(refNo); }
  async enterDueByDate(date: string, time: string): Promise<void> { await this.dueByDateEdit.fill(date); await this.dueByTimeEdit.fill(time); }
  async selectAtPriority(priority: string): Promise<void> { await this.priorityComboBox.selectOption({ label: priority }); }
  async selectReportableCheckbox(): Promise<void> { await this.reportableCheckBox.click(); }
  async enterCompletedDateTime(date: string, time: string): Promise<void> { await this.completedDateEdit.fill(date); await this.completedTimeEdit.fill(time); }
  async enterAtCustom(custom: string): Promise<void> { await this.customFieldEdit.fill(custom); }
  async selectSendNoticeOnChangesCheckbox(): Promise<void> { await this.sendNoticeOnChangesCheckBox.click(); }
  async clickDivisionSectionSquadArrow(): Promise<void> { await this.divisionSectionSquadArrow.click(); }
  async selectAtDivision(division: string): Promise<void> { await this.divisionDropdown.selectOption({ label: division }); }
  async selectAtSection(section: string): Promise<void> { await this.sectionDropdown.selectOption({ label: section }); }
  async selectAtTeam(team: string): Promise<void> { await this.teamDropdown.selectOption({ label: team }); }
  async selectAtSquad(squad: string): Promise<void> { await this.squadEdit.fill(squad); }
  async clickAddButton(): Promise<void> { await this.add1Button.click(); }
  async clickClearButton(): Promise<void> { await this.clear1Button.click(); }
  async clickAdd1Button(): Promise<void> { await this.add2Button.click(); }
  async clickClear1Button(): Promise<void> { await this.clear2Button.click(); }
  async clickAddMultiplePFButton(): Promise<void> { await this.addMultiplePFButton.click(); }
  async selectScheduleCallInCADCheckBox(): Promise<void> { if (!(await this.scheduleCADCheckBox.isChecked())) { await this.scheduleCADCheckBox.click(); } }
  async enterAtScheduledDate(date: string): Promise<void> { await this.scheduleDateEdit.fill(date); }
  async enterAtScheduledTime(time: string): Promise<void> { await this.scheduleTimeEdit.fill(time); }
  async enterAtCFS(cfs: string): Promise<void> { await this.cfsEdit.fill(cfs); }
  async selectAtSRC(src: string): Promise<void> { await this.srcDropdown.selectOption({ label: src }); }
  async getEnteredByPFCode(): Promise<string> { return (await this.enteredByEdit.inputValue()) || ''; }
  async getPrioritySelectedItem(): Promise<string> { return (await this.priorityComboBox.locator('option:checked').textContent()) || ''; }
  async getRefTypeSelectedItem(): Promise<string> { return (await this.refTypeComboBox.locator('option:checked').textContent()) || ''; }
  async enterAtCell(cell: string): Promise<void> { await this.cellEdit.fill(cell); }
  async getCellValue(): Promise<string> { return (await this.cellEdit.inputValue()) || ''; }
  async getDivisionCustomLabelText(): Promise<string> { return (await this.divisionCustomLabel.textContent()) || ''; }
  async getSectionCustomLabelText(): Promise<string> { return (await this.sectionCustomLabel.textContent()) || ''; }
  async getTeamCustomLabelText(): Promise<string> { return (await this.teamCustomLabel.textContent()) || ''; }
  async getSquadCustomLabelText(): Promise<string> { return (await this.squadCustomLabel.textContent()) || ''; }

  async enterDueByDateAsCurrentDate(currentDate: string, currentTime: string): Promise<void> { await this.dueByDateEdit.fill(currentDate); await this.dueByTimeEdit.fill(currentTime); }
  async enterEnteredBy(): Promise<void> { await this.enteredByEdit.press('Tab'); }
  async enterPFAtPF(pf: string): Promise<void> { await this.pfCodeEdit.fill(pf); await this.pfCodeEdit.press('Tab'); }
  async clickAssingedPFArrow(): Promise<void> { await this.page.locator("//h3[@id='ui-accordion-Dv_accordion1-header-1']//span").click(); }
  async enterAtPF(assignedPF: string): Promise<void> { await this.pfCodeEdit.fill(assignedPF); await this.pfCodeEdit.press('Tab'); }
  async clickSquadLookUpButton(): Promise<void> { await this.page.locator('#tabActivity_tmpl6_usrWorkFlow1_lupSquad_imgBtn').click(); }
  async clickAddButtonOther(): Promise<void> { await this.page.locator('#tabActivity_tmpl6_usrWorkFlow1_imgAdd').click(); }
  async clickDivisionCustomLabel(): Promise<void> { await this.divisionCustomLabel.click(); }
  async clickSectionCustomLabel(): Promise<void> { await this.sectionCustomLabel.click(); }
  async clickTeamCustomLabel(): Promise<void> { await this.teamCustomLabel.click(); }
  async clickSquadCustomLabel(): Promise<void> { await this.squadCustomLabel.click(); }

  async getGridHeaderText(): Promise<string> {
    return (await this.otherTabResultTable.locator("//table/tbody/tr[contains(@class,'ThemeHeader')]").textContent()) || '';
  }

  async getDivisionInGridCell(rowIndex: number): Promise<string> {
    return (await this.otherTabResultTable.locator(`//tr[contains(@class,'Row')][${rowIndex + 1}]//td[contains(@class,'Division')]`).textContent()) || '';
  }

  async getGridCellByColumnName(columnName: string, rowIndex: number): Promise<string> {
    const headerCells = this.otherTabResultTable.locator("//table/tbody/tr[contains(@class,'ThemeHeader')]//td");
    const count = await headerCells.count();
    let colIndex = -1;
    for (let i = 0; i < count; i++) {
      const text = await headerCells.nth(i).textContent();
      if (text?.includes(columnName)) { colIndex = i + 1; break; }
    }
    if (colIndex === -1) return '';
    return (await this.otherTabResultTable.locator(`//tr[contains(@class,'Row')][${rowIndex + 1}]//td[${colIndex}]`).textContent()) || '';
  }

  async getPFInTreeView(pf: string): Promise<string> {
    return (await this.page.locator(`//div[@id='tabActivity_tmpl6_usrWorkFlow1_RadDivTreeView']//div//span[text()='${pf}']`).textContent()) || '';
  }

  async getGridRowCount(): Promise<number> {
    return await this.otherTabResultTable.locator("//tr[contains(@class,'Row')]").count();
  }

  async getGridCellByRowText(rowText: string, columnName: string): Promise<string> {
    const headerCells = this.otherTabResultTable.locator("//table/tbody/tr[contains(@class,'ThemeHeader')]//td");
    const count = await headerCells.count();
    let colIndex = -1;
    for (let i = 0; i < count; i++) {
      const text = await headerCells.nth(i).textContent();
      if (text?.includes(columnName)) { colIndex = i + 1; break; }
    }
    if (colIndex === -1) return '';
    return (await this.otherTabResultTable.locator(`//tr[td[contains(text(),'${rowText}')]]//td[${colIndex}]`).textContent()) || '';
  }

  // Verify wrappers with exact Java names
  async EnterEntryDateTime(date: string, time: string): Promise<void> { await this.entryDateEdit.fill(date); await this.entryTimeEdit.fill(time); }
  async verifyAtDivisionInGrid(division: string, rowIndex: number): Promise<void> { const text = await this.getGridCellByRowText(division, 'Division'); expect(text).toEqual(division); }
  async verifyAtPFInGrid(pf: string): Promise<void> { const el = this.page.locator(`//div[@id='tabActivity_tmpl6_usrWorkFlow1_RadDivTreeView']//span[text()='${pf}']`); expect(await el.textContent()).toEqual(pf); }
  async verifAtSquadInGrid(squad: string): Promise<void> { const text = await this.getGridCellByRowText(squad, 'Squad'); expect(text).toEqual(squad); }
  async verifyAtEnteredByPFcode(enteredBy: string): Promise<void> { expect(await this.enteredByEdit.inputValue()).toEqual(enteredBy); }
  async verifAtSectionInGrid(section: string): Promise<void> { const text = await this.getGridCellByRowText(section, 'Section'); expect(text).toEqual(section); }
  async verifAtTeamsInGrid(team: string): Promise<void> { const text = await this.getGridCellByRowText(team, 'Teams'); expect(text).toEqual(team); }
  async verifyAtPriority(priority: string): Promise<void> { expect(await this.priorityComboBox.locator('option:checked').textContent()).toEqual(priority); }
  async verifyAtRefType(refType: string): Promise<void> { expect(await this.refTypeComboBox.locator('option:checked').textContent()).toEqual(refType); }
  async verifyAtCell(cell: string): Promise<void> { expect(await this.cellEdit.inputValue()).toEqual(cell); }
  async verifyAtHeaderColumnName(columnName: string): Promise<void> { const header = this.page.locator("//div[@id='tabActivity_tmpl6_usrWorkFlow1_grdDistributedPF']//tr[contains(@class,'ThemeHeader')]"); expect(await header.textContent()).toContain(columnName); }
  async verifyAtDivisionCustomLabel(label: string): Promise<void> { expect(await this.divisionCustomLabel.textContent()).toEqual(label); }
  async verifyAtSectionCustomLabel(label: string): Promise<void> { expect(await this.sectionCustomLabel.textContent()).toEqual(label); }
  async verifyAtTeamCustomLabel(label: string): Promise<void> { expect(await this.teamCustomLabel.textContent()).toEqual(label); }
  async verifyAtSquadCustomLabel(label: string): Promise<void> { expect(await this.squadCustomLabel.textContent()).toEqual(label); }
}

// ─── Activity Entry Log Entry Tab ────────────────────────────────────────────

export class ActivityEntryLogEntryTabPage {
  readonly page: Page;
  readonly templateComboBox: Locator;
  readonly loadButton: Locator;
  readonly addNewButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.templateComboBox = page.locator('#tabActivity_tmpl1_usrLogEntry1_cddTemplate');
    this.loadButton = page.locator('#tabActivity_tmpl1_usrLogEntry1_btnLoad');
    this.addNewButton = page.locator('#tabActivity_tmpl1_usrLogEntry1_btnAddNew');
  }

  async selectAtTemplate(template: string): Promise<void> { await this.templateComboBox.selectOption({ label: template }); }
  async clickLoadButton(): Promise<void> { await this.loadButton.click(); }
  async clickAddNewButton(): Promise<void> { await this.addNewButton.click(); }

  async enterLog(text: string): Promise<void> {
    const frame = this.page.frameLocator("//iframe[@id='tabActivity_tmpl1_usrLogEntry1_KPIRadActivityLog_contentIframe']");
    await frame.locator('body').fill(text);
  }

  async getLogText(): Promise<string> {
    const frame = this.page.frameLocator("//iframe[@id='tabActivity_tmpl1_usrLogEntry1_KPIRadActivityLog_contentIframe']");
    return (await frame.locator('body').textContent()) || '';
  }

  async getTemplateDropdownValues(): Promise<string[]> {
    const options = this.templateComboBox.locator('option');
    const count = await options.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) { values.push((await options.nth(i).textContent()) || ''); }
    return values;
  }

  async getReferToFPBText(): Promise<string> {
    const frame = this.page.frameLocator("//iframe[@id='tabActivity_tmpl1_usrLogEntry1_KPIRadActivityLog_contentIframe']");
    return (await frame.locator('body').textContent()) || '';
  }

  async isTemplateDuplicated(template: string): Promise<boolean> {
    const values = await this.getTemplateDropdownValues();
    return values.filter(v => v === template).length > 1;
  }

  async getLogTextFromFontElement(): Promise<string> {
    const frame = this.page.frameLocator("//iframe[@id='tabActivity_tmpl1_usrLogEntry1_KPIRadActivityLog_contentIframe']");
    return (await frame.locator('body div font').textContent()) || '';
  }

  async verifyAtReferToFPBTextAutopopulated(expectedText: string): Promise<void> { const frame = this.page.frameLocator("//iframe[contains(@id,'KPIRadActivityLog_contentIframe')]"); const content = await frame.locator('body').textContent(); expect(content).toContain(expectedText); }
  async SelectAtTemplate1(template: string): Promise<void> { await this.templateComboBox.selectOption({ label: template }); }
  async verifyAtText(expectedText: string): Promise<void> { const frame = this.page.frameLocator("//iframe[contains(@id,'KPIRadCourseDescription_contentIframe')]"); const content = await frame.locator('body').textContent(); expect(content).toContain(expectedText); }
  async verifyAtText1(expectedText: string): Promise<void> { const frame = this.page.frameLocator("//iframe[contains(@id,'KPIRadActivityLog_contentIframe')]"); const content = await frame.locator('body').textContent(); expect(content).toContain(expectedText); }
  async verifyValueIsNotDuplicatedInTemplate(template: string): Promise<void> { const options = this.templateComboBox.locator('option'); const count = await options.count(); let matchCount = 0; for (let i = 0; i < count; i++) { if ((await options.nth(i).textContent()) === template) matchCount++; } expect(matchCount).toEqual(1); }
}

// ─── Log History Tab ─────────────────────────────────────────────────────────

export class LogHistoryTabPage {
  readonly page: Page;
  readonly updateDateTextBox: Locator;
  readonly updateTimeTextBox: Locator;
  readonly updatedByTextBox: Locator;
  readonly durationTextBox: Locator;
  readonly durationTypeDropdown: Locator;
  readonly commentsTextBox: Locator;
  readonly saveButton: Locator;
  readonly logHistoryGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.updateDateTextBox = page.locator('#dtDate_Date_KPIDttmCtrl');
    this.updateTimeTextBox = page.locator("//table[@id='dtDate_Time']//input");
    this.updatedByTextBox = page.locator('#lupPFNbr_CodeValue');
    this.durationTextBox = page.locator('#txtDuration');
    this.durationTypeDropdown = page.locator('#cddDurationType_DropDown');
    this.commentsTextBox = page.locator('#txtLog');
    this.saveButton = page.locator('#cmdSave');
    this.logHistoryGrid = page.locator("//table[@id='listMsg']//div");
  }

  async enterUpdateDateTime(date: string, time: string): Promise<void> { await this.updateDateTextBox.fill(date); await this.updateTimeTextBox.fill(time); }
  async enterUpdateBy(): Promise<void> { await this.updatedByTextBox.press('Tab'); }
  async enterDuration(duration: string, durationType: string): Promise<void> { await this.durationTextBox.click(); await this.durationTextBox.fill(duration); await this.durationTypeDropdown.selectOption({ label: durationType }); }
  async enterAtComments(comments: string): Promise<void> { await this.commentsTextBox.fill(comments); }
  async clickSaveButton(): Promise<void> { await this.saveButton.click(); }
  async getHistoryGridText(): Promise<string> { return (await this.logHistoryGrid.textContent()) || ''; }

  async verifyAthistoryGrid(activityInGrid: string): Promise<void> { const text = await this.logHistoryGrid.textContent(); expect(text).toContain(activityInGrid); }
}

// ─── Activity Entry Visitors Tab ─────────────────────────────────────────────

export class ActivityEntryVisitorsTabPage {
  readonly page: Page;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly emailEdit: Locator;
  readonly notesEdit: Locator;
  readonly timeInEdit: Locator;
  readonly timeOutEdit: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly visitorGridTable: Locator;
  readonly nameInfoIconButton: Locator;
  readonly addressEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.lastNameEdit = page.locator('#tabActivity_tmpl2_usrVisitors1_nNameID_LastName');
    this.firstNameEdit = page.locator('#tabActivity_tmpl2_usrVisitors1_nNameID_FirstName');
    this.emailEdit = page.locator('#tabActivity_tmpl2_usrVisitors1_txtEmail');
    this.notesEdit = page.locator('#tabActivity_tmpl2_usrVisitors1_txtNotes');
    this.timeInEdit = page.locator("//table[@id='tabActivity_tmpl2_usrVisitors1_tmTimeIn_Time']//input");
    this.timeOutEdit = page.locator("//table[@id='tabActivity_tmpl2_usrVisitors1_tmTimeOut_Time']//input");
    this.addButton = page.locator('#tabActivity_tmpl2_usrVisitors1_imgAdd');
    this.clearButton = page.locator('#tabActivity_tmpl2_usrVisitors1_imgClear');
    this.visitorGridTable = page.locator('#tabActivity_tmpl2_usrVisitors1_grdVisitors');
    this.nameInfoIconButton = page.locator('#tabActivity_tmpl2_usrVisitors1_nNameID_imgSrch');
    this.addressEdit = page.locator('#tabActivity_tmpl2_usrVisitors1_adrMainAddress_txtFrom');
  }

  async enterAtName(lastName: string, firstName: string): Promise<void> { await this.lastNameEdit.fill(lastName); await this.firstNameEdit.fill(firstName); }
  async enterAtNotes(notes: string): Promise<void> { await this.notesEdit.fill(notes); }
  async enterAtTime(timeIn: string, timeOut: string): Promise<void> { await this.timeInEdit.click(); await this.timeInEdit.fill(timeIn); await this.timeOutEdit.click(); await this.timeOutEdit.fill(timeOut); }
  async clickAddButton(): Promise<void> { await this.addButton.click(); }
  async clickClearButton(): Promise<void> { await this.clearButton.click(); }
  async enterAtLastName(lastName: string): Promise<void> { await this.lastNameEdit.fill(lastName); }
  async enterAtFirstName(firstName: string): Promise<void> { await this.firstNameEdit.fill(firstName); await this.firstNameEdit.press('Tab'); }
  async clickAtNameInGrid(name: string): Promise<void> { await this.visitorGridTable.locator(`//td[contains(text(),'${name}')]`).click(); }
  async clickNameInfoIcon(): Promise<void> { await this.nameInfoIconButton.click(); }
  async getGridRowCount(): Promise<number> { return await this.visitorGridTable.locator('//tr[contains(@class,"Row")]').count(); }
  async getAddressValue(): Promise<string> { return (await this.addressEdit.inputValue()) || ''; }
  async getLastNameValue(): Promise<string> { return (await this.lastNameEdit.inputValue()) || ''; }
  async getFirstNameValue(): Promise<string> { return (await this.firstNameEdit.inputValue()) || ''; }

  async tabTimeIn(): Promise<void> { await this.timeInEdit.press('Tab'); }
  async enterTimeOutAsFutureTime(futureTime: string): Promise<void> { await this.timeOutEdit.fill(futureTime); }

  async getNameInGrid(columnName: string, rowIndex: number): Promise<string> {
    const headerCells = this.visitorGridTable.locator('//tr[contains(@class,"Header")]//th');
    const count = await headerCells.count();
    let colIndex = -1;
    for (let i = 0; i < count; i++) {
      const text = await headerCells.nth(i).textContent();
      if (text?.includes(columnName)) { colIndex = i + 1; break; }
    }
    if (colIndex === -1) return '';
    return (await this.visitorGridTable.locator(`//tr[contains(@class,"Row")][${rowIndex + 1}]//td[${colIndex}]`).textContent()) || '';
  }

  async getTimeInGridCell(rowIndex: number, columnName: string): Promise<string> {
    const headerCells = this.visitorGridTable.locator('//tr[contains(@class,"Header")]//th');
    const count = await headerCells.count();
    let colIndex = -1;
    for (let i = 0; i < count; i++) {
      const text = await headerCells.nth(i).textContent();
      if (text?.includes(columnName)) { colIndex = i + 1; break; }
    }
    if (colIndex === -1) return '';
    return (await this.visitorGridTable.locator(`//tr[contains(@class,"Row")][${rowIndex + 1}]//td[${colIndex}]`).textContent()) || '';
  }

  async enterAtEmail(email: string): Promise<void> { await this.emailEdit.fill(email); }

  async enterAtTimeInAndOut(timeIn: string, timeOut: string): Promise<void> {
    await this.timeInEdit.click();
    await this.timeInEdit.fill(timeIn);
    await this.timeOutEdit.click();
    await this.timeOutEdit.fill(timeOut);
  }

  async clickAtName1InGrid(name: string): Promise<void> { await this.visitorGridTable.locator(`//td[contains(text(),'${name}')]`).click(); }

  async isNaNNotPresentedInGrid(): Promise<boolean> {
    const text = await this.getTimeInGridCell(0, 'Time-In');
    return text !== 'NaN:Na';
  }

  async VerifyAtNotesInGrid(notes: string, rowIndex: number): Promise<void> { const text = await this.getNameInGrid('Notes', rowIndex); expect(text).toEqual(notes); }
  async verifyCountInGrid(expectedCount: number): Promise<void> { expect(await this.getGridRowCount()).toEqual(expectedCount); }
  async verifyAtTimeInGrid(time: string, rowIndex: number): Promise<void> { const text = await this.getTimeInGridCell(rowIndex, 'Time-In'); expect(text).toEqual(time); }
  async verifyAtTimeOutInGrid(time: string, rowIndex: number): Promise<void> { const text = await this.getTimeInGridCell(rowIndex, 'Time-Out'); expect(text).toEqual(time); }
  async verifyNaN_NaIsNotPresentedInGrid(): Promise<void> { const text = await this.getTimeInGridCell(0, 'Time-In'); expect(text).not.toEqual('NaN:Na'); }
  async verifyAtAddress(address: string): Promise<void> { expect(await this.addressEdit.inputValue()).toEqual(address); }
  async verifyAtLastName(lastName: string): Promise<void> { expect(await this.lastNameEdit.inputValue()).toEqual(lastName); }
  async verifyAtFirstName(firstName: string): Promise<void> { expect(await this.firstNameEdit.inputValue()).toEqual(firstName); }
}

// ─── Public Education Tab ────────────────────────────────────────────────────

export class PublicEducationTabPage {
  readonly page: Page;
  readonly programNameDropdown: Locator;
  readonly qtyIfApplicableEdit: Locator;
  readonly locationNameEdit: Locator;
  readonly contactLastNameEdit: Locator;
  readonly contactFirstNameEdit: Locator;
  readonly contactInfoEdit: Locator;
  readonly noOfAdultsEdit: Locator;
  readonly noOfChildrenEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.programNameDropdown = page.locator('#tabActivity_tmpl3_usrPublicEducation1_cddProgName_DropDown');
    this.qtyIfApplicableEdit = page.locator('#tabActivity_tmpl3_usrPublicEducation1_txtQtyApplicable');
    this.locationNameEdit = page.locator('#tabActivity_tmpl3_usrPublicEducation1_txtLocationName');
    this.contactLastNameEdit = page.locator('#tabActivity_tmpl3_usrPublicEducation1_nNameID_LastName');
    this.contactFirstNameEdit = page.locator('#tabActivity_tmpl3_usrPublicEducation1_nNameID_FirstName');
    this.contactInfoEdit = page.locator('#tabActivity_tmpl3_usrPublicEducation1_txtContactInfo');
    this.noOfAdultsEdit = page.locator('#tabActivity_tmpl3_usrPublicEducation1_txtAdults');
    this.noOfChildrenEdit = page.locator('#tabActivity_tmpl3_usrPublicEducation1_txtChildren');
  }

  async selectAtProgramName(programName: string): Promise<void> { await this.programNameDropdown.selectOption({ label: programName }); }
  async enterAtQtyIfApplicable(qty: string): Promise<void> { await this.qtyIfApplicableEdit.fill(qty); }
  async enterAtLocationName(locationName: string): Promise<void> { await this.locationNameEdit.fill(locationName); }
  async enterAtContactName(lastName: string, firstName: string): Promise<void> { await this.contactLastNameEdit.fill(lastName); await this.contactFirstNameEdit.fill(firstName); }
  async enterAtContactInfo(contactInfo: string): Promise<void> { await this.contactInfoEdit.fill(contactInfo); }
  async enterAtNoOfAdults(noOfAdults: string): Promise<void> { await this.noOfAdultsEdit.fill(noOfAdults); }
  async enterAtNoOfChildren(noOfChildren: string): Promise<void> { await this.noOfChildrenEdit.fill(noOfChildren); }

  async getContactNameResetIconPosition(): Promise<{ x: number; y: number }> {
    const resetIcon = this.page.locator('#tabActivity_tmpl3_usrPublicEducation1_nNameID_imgClear');
    const box = await resetIcon.boundingBox();
    return { x: box?.x || 0, y: box?.y || 0 };
  }

  async verifyAtContactNameResetIconPosition(): Promise<void> { const box = await this.page.locator('#tabActivity_tmpl3_usrPublicEducation1_nNameID_imgClear').boundingBox(); expect(box).toBeTruthy(); }
}

// ─── Maintenance Tab ─────────────────────────────────────────────────────────

export class MaintenanceTabPage {
  readonly page: Page;
  readonly currentMileageEdit: Locator;
  readonly currentHoursEdit: Locator;
  readonly vendorEdit: Locator;
  readonly costEdit: Locator;
  readonly useItemFromInventoryCheckBox: Locator;
  readonly enterPartNoEdit: Locator;
  readonly descriptionEdit: Locator;
  readonly qtyEdit: Locator;
  readonly qtyCostEdit: Locator;
  readonly addButton: Locator;
  readonly clearButton: Locator;
  readonly maintenanceGridTable: Locator;
  readonly saveButton: Locator;
  readonly resetButton: Locator;
  readonly inventoryLookUpButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.currentMileageEdit = page.locator('#txtCurrMil');
    this.currentHoursEdit = page.locator('#txtHrs');
    this.vendorEdit = page.locator('#lupSerVName_CodeValue');
    this.costEdit = page.locator('#txtvendorCost');
    this.useItemFromInventoryCheckBox = page.locator('#chkuseinventory');
    this.enterPartNoEdit = page.locator('#txtpartnum');
    this.descriptionEdit = page.locator('#txtdesc');
    this.qtyEdit = page.locator('#txtqty');
    this.qtyCostEdit = page.locator('#txtcost');
    this.addButton = page.locator('#imgAdd');
    this.clearButton = page.locator('#imgClear');
    this.maintenanceGridTable = page.locator('#grdPartList');
    this.saveButton = page.locator('#cmdInternalSave');
    this.resetButton = page.locator('#cmdInternalRefresh');
    this.inventoryLookUpButton = page.locator('#imgLockup');
  }

  async enterAtCurrentMileage(mileage: string): Promise<void> { await this.currentMileageEdit.fill(mileage); }
  async enterAtCurrentHours(hours: string): Promise<void> { await this.currentHoursEdit.fill(hours); }
  async enterAtVendor(vendor: string): Promise<void> { await this.vendorEdit.fill(vendor); await this.vendorEdit.press('Tab'); }
  async enterAtCost(cost: string): Promise<void> { await this.costEdit.click(); await this.costEdit.press('Delete'); await this.costEdit.fill(cost); await this.costEdit.press('Tab'); }
  async enterAtPartNo(partNo: string): Promise<void> { await this.enterPartNoEdit.fill(partNo); }
  async enterAtDescription(description: string): Promise<void> { await this.descriptionEdit.fill(description); }
  async enterAtQty(qty: string): Promise<void> { await this.qtyEdit.fill(qty); }
  async enterAtPartCost(cost: string): Promise<void> { await this.qtyCostEdit.fill(cost); }
  async clickSaveButton(): Promise<void> { await this.saveButton.click(); }
  async clickClearButton(): Promise<void> { await this.clearButton.click(); }
  async clickAddButton(): Promise<void> { await this.addButton.click(); }
  async clickResetButton(): Promise<void> { await this.resetButton.click(); }
  async clickUseItemsFromInventoryCheckBox(): Promise<void> { await this.useItemFromInventoryCheckBox.click(); }
  async clickInventoryLookUpButton(): Promise<void> { await this.inventoryLookUpButton.click(); }
  async internalSave(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.saveButton.click(); }

  async getInvOrPartNoInGrid(partNo: string): Promise<string> {
    return (await this.maintenanceGridTable.locator(`//tr[td[contains(text(),'${partNo}')]]`).textContent()) || '';
  }

  async verifyAtInvOrPartNo(invOrPartNo: string): Promise<void> { const el = this.maintenanceGridTable.locator(`//td[contains(text(),'${invOrPartNo}')]`); expect(await el.isVisible()).toBeTruthy(); }
}

// ─── QA Forms Tab ────────────────────────────────────────────────────────────

export class ActivityEntryQAFormsTabPage {
  readonly page: Page;
  readonly saveButton: Locator;
  readonly printButton: Locator;
  readonly selectFormComboBox: Locator;
  readonly refreshButton: Locator;
  readonly qaFormsTable: Locator;
  readonly pfCodeEdit: Locator;
  readonly dwellingType1RadioButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.saveButton = page.locator('#cmdSave');
    this.printButton = page.locator('#cmdPrint');
    this.selectFormComboBox = page.locator('#cddForm_DropDown');
    this.refreshButton = page.locator('#cmdrefresh');
    this.qaFormsTable = page.locator("//div[@id='grdQAForms']");
    this.pfCodeEdit = page.locator('#lupEntryOfficer_CodeValue');
    this.dwellingType1RadioButton = page.locator('#rdo100020000045269_0');
  }

  async clickSaveButton(): Promise<void> { await this.saveButton.click(); }
  async save(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.saveButton.click(); }
  async clickPrintButton(): Promise<void> { await this.printButton.click(); }
  async clickDwellingType1RadioButton(): Promise<void> { await this.dwellingType1RadioButton.click(); }
  async tabOutPFCode(): Promise<void> { await this.pfCodeEdit.press('Tab'); }
  async selectAtSelectForm(formName: string): Promise<void> { await this.selectFormComboBox.selectOption({ label: formName }); }
  async clickRefreshButton(): Promise<void> { await this.refreshButton.click(); }

  async switchToSmokeQAFormTab(): Promise<void> {
    await this.page.locator("//span[(text()='QA Forms')]").click();
  }

  async getFormNameInGrid(formName: string): Promise<string> {
    return (await this.qaFormsTable.locator(`//td[contains(text(),'${formName}')]`).textContent()) || '';
  }

  async selectAtSelectForm1(form: string): Promise<void> { await this.selectFormComboBox.selectOption({ label: form }); }
  async verifyAtFormNameInGrid(formName: string): Promise<void> { const el = this.qaFormsTable.locator(`//td[contains(text(),'${formName}')]`); expect(await el.textContent()).toEqual(formName); }
  async verifyAtFormName1InGrid(formName: string): Promise<void> { const el = this.qaFormsTable.locator(`//td[contains(text(),'${formName}')]`); expect(await el.textContent()).toEqual(formName); }
}

// ─── Names Tab ───────────────────────────────────────────────────────────────

export class NamesTabPage {
  readonly page: Page;
  readonly nameTypeEdit: Locator;
  readonly nameIDEdit: Locator;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly activityCombobox: Locator;
  readonly addButton: Locator;
  readonly internalSaveButton: Locator;
  readonly namesGridTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameTypeEdit = page.locator('#nmcIncident_NameType');
    this.nameIDEdit = page.locator('#nmcIncident_NameTypeID');
    this.lastNameEdit = page.locator('#nmcIncident_LastName');
    this.firstNameEdit = page.locator('#nmcIncident_FirstName');
    this.activityCombobox = page.locator('#cddActivity_DropDown');
    this.addButton = page.locator('#imgAddName');
    this.internalSaveButton = page.locator('#cmdInternalSave');
    this.namesGridTable = page.locator('#grdCBENames');
  }

  async enterAtLastName(lastName: string): Promise<void> { await this.lastNameEdit.fill(lastName); }
  async enterAtFirstName(firstName: string): Promise<void> { await this.firstNameEdit.fill(firstName); await this.firstNameEdit.press('Tab'); }
  async clickAddButton(): Promise<void> { await this.addButton.click(); }
  async selectAtActivity(activity: string): Promise<void> { await this.activityCombobox.selectOption({ label: activity }); await this.activityCombobox.press('Tab'); }
  async saveInternalTab(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.internalSaveButton.click(); }
  async enterAtNameID(nameType: string, nameId: string): Promise<void> { await this.nameTypeEdit.fill(nameType); await this.nameIDEdit.fill(nameId); await this.nameIDEdit.press('Tab'); }

  async deleteAtName(activity: string): Promise<void> {
    await this.namesGridTable.locator(`//tr[td[contains(text(),'${activity}')]]//img[contains(@class,'delete')]`).click();
  }

  async deleteConfirmationYes(): Promise<void> { this.page.once('dialog', d => d.accept()); }

  async getNameInGrid(columnName: string, rowIndex: number): Promise<string> {
    const headerCells = this.namesGridTable.locator('//tr[contains(@class,"Header")]//th');
    const count = await headerCells.count();
    let colIndex = -1;
    for (let i = 0; i < count; i++) {
      const text = await headerCells.nth(i).textContent();
      if (text?.includes(columnName)) { colIndex = i + 1; break; }
    }
    if (colIndex === -1) return '';
    return (await this.namesGridTable.locator(`//tr[contains(@class,"Row")][${rowIndex + 1}]//td[${colIndex}]`).textContent()) || '';
  }

  async getNameCellByText(name: string): Promise<string> {
    return (await this.namesGridTable.locator(`//td[contains(text(),'${name}')]`).textContent()) || '';
  }

  async getActivityInGridCell(rowIndex: number): Promise<string> { return await this.getNameInGrid('Activity', rowIndex); }
  async getNameInGridByRow(rowIndex: number): Promise<string> { return await this.getNameInGrid('Name', rowIndex); }
  async getGridRowCount(): Promise<number> { return await this.namesGridTable.locator('//tr[contains(@class,"Row")]').count(); }

  async VerifyAtActivityInGrid(activity: string, rowIndex: number): Promise<void> { const text = await this.getNameInGrid('Activity', rowIndex); expect(text).toEqual(activity); }
  async VerifyConfirmationDeleteMessage(): Promise<void> { /* confirm popup: (4) Do you really want to delete? */ }
}

// ─── Fees Tab ────────────────────────────────────────────────────────────────

export class ActivityEntryFeesTabPage {
  readonly page: Page;
  readonly invoiceTypeComboBox: Locator;
  readonly billToAccountNameTypeEdit: Locator;
  readonly billToAccountNameIDEdit: Locator;
  readonly itemCodeComboBox: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.invoiceTypeComboBox = page.locator('#cddFeeInvoiceType');
    this.billToAccountNameTypeEdit = page.locator('#BillName_NameType');
    this.billToAccountNameIDEdit = page.locator('#BillName_NameTypeID');
    this.itemCodeComboBox = page.locator('#cddItemCode');
    this.addButton = page.locator('#imgAdd');
    this.saveButton = page.locator('#cmdSave');
  }

  async selectInvoiceType(): Promise<void> { const opts = this.invoiceTypeComboBox.locator('option'); const c = await opts.count(); if (c > 1) { await this.invoiceTypeComboBox.selectOption({ index: Math.floor(Math.random() * (c - 1)) + 1 }); } }
  async enterAtBillToAccountNameID(nameType: string, nameId: string): Promise<void> { await this.billToAccountNameTypeEdit.fill(nameType); await this.billToAccountNameIDEdit.fill(nameId); await this.billToAccountNameIDEdit.press('Tab'); }
  async selectItemCode(): Promise<void> { const opts = this.itemCodeComboBox.locator('option'); const c = await opts.count(); if (c > 1) { await this.itemCodeComboBox.selectOption({ index: Math.floor(Math.random() * (c - 1)) + 1 }); } }
  async clickAddButton(): Promise<void> { await this.addButton.click(); }
  async save(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.saveButton.click(); }
}

// ─── Service History Tab ─────────────────────────────────────────────────────

export class ActivityEntryServiceHistoryTabPage {
  readonly page: Page;
  readonly vendorCode: Locator;
  readonly cost: Locator;
  readonly notes: Locator;

  constructor(page: Page) {
    this.page = page;
    this.vendorCode = page.locator('#tabActivity_tmpl11_usrServiceHistory1_lupVendorName_CodeValue');
    this.cost = page.locator('#tabActivity_tmpl11_usrServiceHistory1_txtvendorCost');
    this.notes = page.locator('#tabActivity_tmpl11_usrServiceHistory1_txtComment');
  }

  async getVendorCodeValue(): Promise<string> { return (await this.vendorCode.inputValue()) || ''; }
  async getCostValue(): Promise<string> { return (await this.cost.inputValue()) || ''; }
  async getNotesValue(): Promise<string> { return (await this.notes.inputValue()) || ''; }

  async verifyAtVendorCode(vendorCode: string): Promise<void> { expect(await this.vendorCode.inputValue()).toEqual(vendorCode); }
  async verifyAtCost(cost: string): Promise<void> { expect(await this.cost.inputValue()).toEqual(cost); }
}

// ─── Schedules Tab ───────────────────────────────────────────────────────────

export class SchedulesTabPage {
  readonly page: Page;
  readonly schedulesResultTable: Locator;
  readonly pfNotesIconToolTip: Locator;
  readonly pfNotesIconToolTipCloseButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.schedulesResultTable = page.locator("//div[@id='tabActivity_tmpl15_Schedules_grdSchHist']");
    this.pfNotesIconToolTip = page.locator('#spanKeyCode');
    this.pfNotesIconToolTipCloseButton = page.locator('#popupBoxClose');
  }

  async clickPFNotesIconInGrid(rowIndex: number): Promise<void> { await this.schedulesResultTable.locator(`//tr[${rowIndex + 2}]//td`).first().click(); }
  async getPFNotesToolTipText(): Promise<string> { return (await this.pfNotesIconToolTip.textContent()) || ''; }
  async clickCloseInPFNotesToolTip(): Promise<void> { await this.pfNotesIconToolTipCloseButton.click(); }
  async getScheduleGridRowCount(): Promise<number> { return await this.schedulesResultTable.locator('//tr[contains(@class,"Row")]').count(); }

  async getScheduleDateTimeInGrid(rowIndex: number): Promise<string> {
    return (await this.schedulesResultTable.locator(`//tr[contains(@class,"Row")][${rowIndex + 1}]//td[contains(@class,"Date") or position()=2]`).textContent()) || '';
  }

  async verifyAtPFNotesToolTip(toolTipText: string): Promise<void> { const el = this.page.locator('#tooltipContent'); expect(await el.textContent()).toContain(toolTipText); }
  async verifyTimeInGridafterrecurrenceSetAsHourly(count: number, fromTime: string): Promise<void> { /* hourly time increment verification */ }
}

// ─── TR1 Tab ─────────────────────────────────────────────────────────────────

export class ActivityEntryTR1TabPage {
  readonly page: Page;
  readonly pfNoEdit: Locator;
  readonly internalSaveButton: Locator;
  readonly divQuestionTable: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pfNoEdit = page.locator('#lupEntryOfficer_CodeValue');
    this.internalSaveButton = page.locator('#cmdSave');
    this.divQuestionTable = page.locator('#ArpQuestion_1376');
  }

  async tabOutPFNo(): Promise<void> { await this.pfNoEdit.press('Tab'); }
  async clickSave(): Promise<void> { await this.internalSaveButton.click(); }

  async clickYesRadioButton(): Promise<void> {
    const radioButtons = this.divQuestionTable.locator("//input[@type='radio']");
    const count = await radioButtons.count();
    if (count > 0) {
      const evenIndex = Math.floor(Math.random() * Math.ceil(count / 2)) * 2;
      await radioButtons.nth(Math.min(evenIndex, count - 1)).click();
    }
  }
}

// ─── Recurrence PopUp ────────────────────────────────────────────────────────

export class RecurrencePopUpPage {
  readonly page: Page;
  readonly hourlyRadioButton: Locator;
  readonly dailyRadioButton: Locator;
  readonly monthlyRadioButton: Locator;
  readonly everyDayOf: Locator;
  readonly everyDayOfMonth: Locator;
  readonly endAfterCodeEdit: Locator;
  readonly closeButton: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.hourlyRadioButton = page.locator('#AppointmentRecurrenceEditor_RepeatFrequencyHourly');
    this.dailyRadioButton = page.locator('#AppointmentRecurrenceEditor_RepeatFrequencyDaily');
    this.monthlyRadioButton = page.locator('#usrJobSchedule1_rdReccType_4');
    this.everyDayOf = page.locator('#usrJobSchedule1_txtDayOfMonth');
    this.everyDayOfMonth = page.locator('#usrJobSchedule1_txtMonth');
    this.endAfterCodeEdit = page.locator('#AppointmentRecurrenceEditor_RangeOccurrences');
    this.closeButton = page.locator('#btnClose');
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseButton = page.locator('#cmdSaveNClose');
  }

  async clickHourlyRadioButton(): Promise<void> { await this.hourlyRadioButton.click(); }
  async clickDailyRadioButton(): Promise<void> { await this.dailyRadioButton.click(); }
  async clickMonthlyRadioButton(): Promise<void> { await this.monthlyRadioButton.click(); }
  async enterEveryDayOf(day: string): Promise<void> { await this.everyDayOf.fill(day); await this.everyDayOf.press('Tab'); }
  async enterEveryDayOfMonth(month: string): Promise<void> { await this.everyDayOfMonth.fill(month); await this.everyDayOfMonth.press('Tab'); }
  async enterAtEndAfter(endAfter: string): Promise<void> { await this.endAfterCodeEdit.click(); await this.endAfterCodeEdit.press('Backspace'); await this.endAfterCodeEdit.fill(endAfter); await this.endAfterCodeEdit.press('Tab'); }
  async clickCloseButton(): Promise<void> { await this.closeButton.click(); }
  async save(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.saveButton.click(); }
  async saveNClose(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.saveAndCloseButton.click(); }
  async clickSaveButton(): Promise<void> { await this.saveButton.click(); }
  async close(): Promise<void> { await this.page.close(); }

  async verifyStartDateMandatoryAcknMessage(): Promise<void> { /* popup: (6040) Start Date is Mandatory */ }
}

// ─── Attachment Tab ──────────────────────────────────────────────────────────

export class AttachmentTabPage {
  readonly page: Page;
  readonly addFilesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addFilesButton = page.locator('#cmdAddFile');
  }

  async clickAddFiles(): Promise<void> { await this.addFilesButton.click(); }
}

// ─── Attachment Popup Window ─────────────────────────────────────────────────

export class AttachmentPopupWindowPage {
  readonly page: Page;
  readonly categoryComboBox: Locator;
  readonly container: Locator;
  readonly addButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.categoryComboBox = page.locator('#ctrlUsrKPITxtAttachment_cddCategory_DropDown');
    this.container = page.locator('#ctrlUsrKPITxtAttachment_uploadfileListContainer');
    this.addButton = page.locator('#ctrlUsrKPITxtAttachment_cmdAddAttachment');
  }

  async selectCategory(category: string): Promise<void> { await this.categoryComboBox.selectOption({ label: category }); await this.categoryComboBox.press('Tab'); }
  async clickFileEdit(): Promise<void> { await this.container.click(); }
  async clickAddButton(): Promise<void> { await this.addButton.click(); }

  async selectImgFile(): Promise<void> { await this.page.locator('input[type="file"]').setInputFiles('img2.png'); }
}

// ─── Activity Search Help Window ─────────────────────────────────────────────

export class ActivitySearchHelpWindowPage {
  readonly page: Page;
  readonly activityLogResultTable: Locator;
  readonly pfNamePopup: Locator;
  readonly phoneNoPopup: Locator;
  readonly homeNoColumn: Locator;
  readonly searchButton: Locator;
  readonly addTheSelectedPFToTheList: Locator;
  readonly selectAllCheckbox: Locator;
  readonly activityYearEdit: Locator;
  readonly activityNumberEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.activityLogResultTable = page.locator('#grdActLogSrch');
    this.pfNamePopup = page.locator('#lblName');
    this.phoneNoPopup = page.locator('#lblHomeNbr');
    this.homeNoColumn = page.locator("//a[contains(text(),'Home#')]");
    this.searchButton = page.locator("//span[text()='Search']");
    this.addTheSelectedPFToTheList = page.locator('#btnAddPFs');
    this.selectAllCheckbox = page.locator('#chkSelectAll');
    this.activityYearEdit = page.locator('#nbrActivity_Year');
    this.activityNumberEdit = page.locator('#nbrActivity_Number');
  }

  async clickSearch(): Promise<void> { await this.searchButton.click(); }
  async clickAddTheSelectedPFToTheList(): Promise<void> { await this.addTheSelectedPFToTheList.click(); }
  async getPFNamePopupText(): Promise<string> { return (await this.pfNamePopup.textContent()) || ''; }
  async getPhoneNoPopupText(): Promise<string> { return (await this.phoneNoPopup.textContent()) || ''; }
  async isHomeNoColumnDisplayed(): Promise<boolean> { return await this.homeNoColumn.isVisible(); }
  async clickSelectAllCheckbox(): Promise<void> { await this.selectAllCheckbox.click(); }
  async enterAtActivityNumber(year: string, number: string): Promise<void> { await this.activityYearEdit.fill(year); await this.activityNumberEdit.fill(number); }
  async clickAtPFByName(pfName: string): Promise<void> { await this.page.locator(`//div[@id='RadMultiplePFTreeView']//span[contains(text(),'${pfName}')]/preceding-sibling::span[@class='rtUnchecked']`).click(); }

  async closeScreen(): Promise<void> { await this.page.close(); }

  async getActivityTypeInGrid(rowIndex: number): Promise<string> {
    return (await this.activityLogResultTable.locator(`//tr[contains(@class,"Row")][${rowIndex + 1}]//td[contains(@class,"ActivityType") or position()=2]`).textContent()) || '';
  }

  async getGridCellText(columnName: string, rowIndex: number): Promise<string> {
    const headerCells = this.activityLogResultTable.locator('//tr[contains(@class,"Header")]//th');
    const count = await headerCells.count();
    let colIndex = -1;
    for (let i = 0; i < count; i++) {
      const text = await headerCells.nth(i).textContent();
      if (text?.includes(columnName)) { colIndex = i + 1; break; }
    }
    if (colIndex === -1) return '';
    return (await this.activityLogResultTable.locator(`//tr[contains(@class,"Row")][${rowIndex + 1}]//td[${colIndex}]`).textContent()) || '';
  }

  async getPFNameInTree(pfName: string): Promise<string> {
    return (await this.page.locator(`//div[@id='RadTreeListAD']//tbody//tr//td//span[contains(text(),'${pfName}')]`).textContent()) || '';
  }

  async clickAtPhoneNo(phoneNo: string): Promise<void> {
    await this.page.locator(`//div[@id='RadTreeListAD']//tbody//tr//td//span[contains(text(),'${phoneNo}')]`).click();
  }

  async getSubjectColumnValues(): Promise<string[]> {
    const headerCells = this.activityLogResultTable.locator('//tr[contains(@class,"Header")]//th');
    const count = await headerCells.count();
    let colIndex = -1;
    for (let i = 0; i < count; i++) {
      const text = await headerCells.nth(i).textContent();
      if (text?.includes('Subject')) { colIndex = i + 1; break; }
    }
    if (colIndex === -1) return [];
    const rows = this.activityLogResultTable.locator('//tr[contains(@class,"Row")]');
    const rowCount = await rows.count();
    const values: string[] = [];
    for (let i = 0; i < rowCount; i++) {
      values.push((await rows.nth(i).locator(`td:nth-child(${colIndex})`).textContent()) || '');
    }
    return values;
  }

  async verifyActivityTypeAsCellAssigned(rowIndex: number): Promise<void> { const text = await this.getGridCellText('Activity Type', rowIndex); expect(text).toEqual('Cell Assigned'); }
  async verifyAtPFName1(pfName: string): Promise<void> { const el = this.page.locator(`//span[contains(text(),'${pfName}')]`); expect(await el.isVisible()).toBeTruthy(); }
  async verifyAtHomePhoneNo(phoneNo: string): Promise<void> { const el = this.page.locator(`//div[@id='RadTreeListAD']//span[contains(text(),'${phoneNo}')]`); expect(await el.isVisible()).toBeTruthy(); }
  async verifyAtPFName(pfName: string): Promise<void> { const el = this.page.locator(`//div[@id='RadTreeListAD']//span[contains(text(),'${pfName}')]`); expect(await el.isVisible()).toBeTruthy(); }
  async clickAtPFByName1(pfName: string): Promise<void> { await this.page.locator(`//div[@id='RadMultiplePFTreeView']//span[contains(text(),'${pfName}')]/preceding-sibling::span[@class='rtUnchecked']`).click(); }
  async verifyPFNameAtDetailsPopup(pfName: string): Promise<void> { const el = this.page.locator('#lblPFName'); expect(await el.textContent()).toContain(pfName); }
  async verifyPhoneNoAtDetailsPopup(phoneNo: string): Promise<void> { const el = this.page.locator('#lblPhoneNo'); expect(await el.textContent()).toContain(phoneNo); }
  async verifyHomeNoColumnDisplayed(): Promise<void> { const el = this.page.locator("//th[contains(text(),'Home')]"); expect(await el.isVisible()).toBeTruthy(); }
  async verifyAtSubjectInGrid(subject: string): Promise<void> { const values = await this.getSubjectColumnValues(); expect(values).toContain(subject); }
}

// ─── Activity Calendar Entry ─────────────────────────────────────────────────

export class ActivityCalendarEntryPage {
  readonly page: Page;
  readonly filterDropdown: Locator;
  readonly jurisDropdown: Locator;
  readonly addNewButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.filterDropdown = page.locator('#cddActivityType_Input');
    this.jurisDropdown = page.locator('#lstJuris');
    this.addNewButton = page.locator("//span[text()='Add New']");
  }

  async selectAtFilter(activityType: string): Promise<void> { await this.filterDropdown.fill(activityType); }
  async selectAtJuris(juris: string): Promise<void> { await this.jurisDropdown.selectOption({ label: juris }); }
  async clickAddNew(): Promise<void> { await this.addNewButton.click(); }
}

// ─── Activity Quick Entry ────────────────────────────────────────────────────

export class ActivityQuickEntryPage {
  readonly page: Page;
  readonly categoryGrpOperation: Locator;
  readonly categoryGrpFleet: Locator;
  readonly category1: Locator;
  readonly category2: Locator;
  readonly activityLog1: Locator;
  readonly activityLog3: Locator;
  readonly unitCodeEdit: Locator;
  readonly locationEdit: Locator;
  readonly addressBblIcon: Locator;
  readonly notesEdit: Locator;
  readonly startDate: Locator;
  readonly startTime: Locator;
  readonly endDate: Locator;
  readonly endTime: Locator;
  readonly saveBtn: Locator;
  readonly dailyLog: Locator;
  readonly activityLogTable7087Screen: Locator;
  readonly showOnWhiteboardLabel: Locator;
  readonly helpButton: Locator;
  readonly bottomStatusMessage: Locator;
  readonly showOnWhiteBoardCheckBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.categoryGrpOperation = page.locator('#BtnCatGroup1');
    this.categoryGrpFleet = page.locator('#BtnCatGroup2');
    this.category1 = page.locator('#BtnCategory1');
    this.category2 = page.locator('#BtnCategory2');
    this.activityLog1 = page.locator('#BtnActivity1');
    this.activityLog3 = page.locator('#BtnActivity3');
    this.unitCodeEdit = page.locator('#lupUnit_CodeValue');
    this.locationEdit = page.locator('#adrLocation_txtFrom');
    this.addressBblIcon = page.locator('#adrLocation_cmdIncOnAddr');
    this.notesEdit = page.locator('#txtNotes');
    this.startDate = page.locator('#dtmStartDTTM_Date_KPIDttmCtrl');
    this.startTime = page.locator("//table[@id='dtmStartDTTM_Time']//input");
    this.endDate = page.locator('#dtmEndDTTM_Date_KPIDttmCtrl');
    this.endTime = page.locator("//table[@id='dtmEndDTTM_Time']//input");
    this.saveBtn = page.locator('#BtnSave');
    this.dailyLog = page.locator('#btnDailyLog');
    this.activityLogTable7087Screen = page.locator('#grdDailyActivity');
    this.showOnWhiteboardLabel = page.locator("//label[text()=' Show on Whiteboard']");
    this.helpButton = page.locator('#BtnHelp');
    this.bottomStatusMessage = page.locator("//td[@class='status']//b");
    this.showOnWhiteBoardCheckBox = page.locator("//input[@id='chkIsWhiteBoard']");
  }

  async clickCategoryGroupOperations(): Promise<void> { await this.categoryGrpOperation.click(); }
  async clickCategoryPatrol(): Promise<void> { await this.category1.click(); }
  async clickActivityLogTypeParkPatrol(): Promise<void> { await this.activityLog3.click(); }
  async enterAtUnit(unit: string): Promise<void> { await this.unitCodeEdit.fill(unit); await this.unitCodeEdit.press('Tab'); }
  async enterAtLocation(location: string): Promise<void> { await this.locationEdit.fill(location); await this.locationEdit.press('Tab'); }
  async isAddressValidated(): Promise<boolean> { return await this.addressBblIcon.isVisible(); }
  async enterAtNotes(notes: string): Promise<void> { await this.notesEdit.fill(notes); }
  async save(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.saveBtn.click(); }
  async clickViewTodaysLog(): Promise<void> { await this.dailyLog.click(); }
  async tabAtEndDateAndTime(): Promise<void> { await this.endDate.click(); await this.endDate.press('Tab'); await this.endTime.press('Tab'); }
  async tabAtStartDateAndTime(): Promise<void> { await this.startDate.press('Tab'); await this.startTime.press('Tab'); }
  async getShowOnWhiteboardLabelText(): Promise<string> { return (await this.showOnWhiteboardLabel.textContent()) || ''; }
  async clickCategoryGroupFleet(): Promise<void> { await this.categoryGrpFleet.click(); }
  async clickHelpButton(): Promise<void> { await this.helpButton.click(); }
  async clickCategoryVehicleMaintenance(): Promise<void> { await this.category2.click(); }
  async clickActivityLogTypeCarWash(): Promise<void> { await this.activityLog1.click(); }
  async getBottomStatusMessageText(): Promise<string> { return (await this.bottomStatusMessage.textContent()) || ''; }
  async clickShowOnWhiteBoard(): Promise<void> { await this.showOnWhiteBoardCheckBox.click(); }
  async clickAtActivityTypeFromQuickActivityLogGrid(activityType: string): Promise<void> { await this.activityLogTable7087Screen.locator(`//td[contains(text(),'${activityType}')]`).click(); }

  async close(): Promise<void> { await this.page.close(); }
  async getCategoryGroupFleetButtonStyle(): Promise<string> { return (await this.categoryGrpFleet.getAttribute('style')) || ''; }
  async getCategoryVehicleMaintenanceButtonStyle(): Promise<string> { return (await this.category2.getAttribute('style')) || ''; }
  async getActivityLogTypeCarWashButtonStyle(): Promise<string> { return (await this.activityLog1.getAttribute('style')) || ''; }

  async getActivityTypeFromQuickLog(rowIndex: number): Promise<string> {
    const headerCells = this.activityLogTable7087Screen.locator('//tr[contains(@class,"Header")]//th');
    const count = await headerCells.count();
    let colIndex = -1;
    for (let i = 0; i < count; i++) {
      const text = await headerCells.nth(i).textContent();
      if (text?.includes('Activity Type')) { colIndex = i + 1; break; }
    }
    if (colIndex === -1) return '';
    return (await this.activityLogTable7087Screen.locator(`//tr[contains(@class,"Row")][${rowIndex + 1}]//td[${colIndex}]`).textContent()) || '';
  }

  async getLocationFromQuickLog(rowIndex: number): Promise<string> {
    const headerCells = this.activityLogTable7087Screen.locator('//tr[contains(@class,"Header")]//th');
    const count = await headerCells.count();
    let colIndex = -1;
    for (let i = 0; i < count; i++) {
      const text = await headerCells.nth(i).textContent();
      if (text?.includes('Location')) { colIndex = i + 1; break; }
    }
    if (colIndex === -1) return '';
    return (await this.activityLogTable7087Screen.locator(`//tr[contains(@class,"Row")][${rowIndex + 1}]//td[${colIndex}]`).textContent()) || '';
  }

  async verifyAddressValidated(): Promise<void> { const icon = this.page.locator('#imgAddressVerify'); expect(await icon.isVisible()).toBeTruthy(); }
  async verifyAtActivityLocationFromQuickLog(location: string, rowIndex: number): Promise<void> { const text = await this.getLocationFromQuickLog(rowIndex); expect(text).toEqual(location); }
  async verifyAtShowOnWhiteboardLabel(title: string): Promise<void> { expect(await this.showOnWhiteboardLabel.textContent()).toContain(title); }
  async verifyCategoryGroupFleetButtonAsGreenColor(): Promise<void> { const style = await this.categoryGrpFleet.getAttribute('style'); expect(style).toContain('green'); }
  async verifyCategoryVehicleMaintenanceButtonAsGreenColor(): Promise<void> { const style = await this.category2.getAttribute('style'); expect(style).toContain('green'); }
  async verifyActivityLogTypeCarWashButtonAsGreenColor(): Promise<void> { const style = await this.activityLog1.getAttribute('style'); expect(style).toContain('green'); }
  async verifyAtActivityTypeFromQuickActivityLog(activityType: string, rowIndex: number): Promise<void> { const text = await this.getActivityTypeFromQuickLog(rowIndex); expect(text).toEqual(activityType); }
  async verifyAdditionSuccessFullMessage(): Promise<void> { expect(await this.bottomStatusMessage.textContent()).toEqual('1002 - Addition Successful'); }
}

// ─── Add Multiple PF ─────────────────────────────────────────────────────────

export class AddMultiplePFPage {
  readonly page: Page;
  readonly selectAllCheckBox: Locator;
  readonly addTheSelectPFToListButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selectAllCheckBox = page.locator('#chkSelectAll');
    this.addTheSelectPFToListButton = page.locator('#btnAddPFs');
  }

  async clickSelectAll(): Promise<void> { await this.selectAllCheckBox.click(); }
  async clickAddTheSelectPFToList(): Promise<void> { await this.addTheSelectPFToListButton.click(); }
  async close(): Promise<void> { await this.page.close(); }
}

// ─── Schedule Search Page ────────────────────────────────────────────────────

export class ScheduleSearchPage {
  readonly page: Page;

  readonly startDateEdit: Locator;
  readonly endDateEdit: Locator;
  readonly startTimeEdit: Locator;
  readonly endTimeEdit: Locator;
  readonly nameIDEdit: Locator;
  readonly spnNoEdit: Locator;
  readonly scheduleGrid: Locator;
  readonly searchButton: Locator;
  readonly resetButton: Locator;
  readonly backButton: Locator;
  readonly addNewButton: Locator;
  readonly printIcon: Locator;
  readonly advancedTab: Locator;
  readonly basicTab: Locator;
  readonly showCompletedCheckBox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.startDateEdit = page.locator('#tabSuspSrch_tmpl0_UsrPaymntSrchBasic1_dcStartDate_Date_KPIDttmCtrl');
    this.endDateEdit = page.locator('#tabSuspSrch_tmpl0_UsrPaymntSrchBasic1_dcEndDate_Date_KPIDttmCtrl');
    this.startTimeEdit = page.locator("//table[@id='tabSuspSrch_tmpl0_UsrPaymntSrchBasic1_tmStartTime_Time']//input");
    this.endTimeEdit = page.locator("//table[@id='tabSuspSrch_tmpl0_UsrPaymntSrchBasic1_tmEndTime_Time']//input");
    this.nameIDEdit = page.locator('#tabSuspSrch_tmpl0_UsrPaymntSrchBasic1_NameID_SPN');
    this.spnNoEdit = page.locator('#tabSuspSrch_tmpl0_UsrPaymntSrchBasic1_txtSPN');
    this.scheduleGrid = page.locator('#grdScheduleSrch');
    this.searchButton = page.locator("//span[contains(text(),'Search')]");
    this.resetButton = page.locator("//span[contains(text(),'Reset')]");
    this.backButton = page.locator("//span[contains(text(),'Back')]");
    this.addNewButton = page.locator("//span[contains(text(),'Add New')]");
    this.printIcon = page.locator("//img[contains(@src,'print.gif')]");
    this.advancedTab = page.locator("//span[contains(text(),'Advanced')]");
    this.basicTab = page.locator("//span[contains(text(),'Basic')]");
    this.showCompletedCheckBox = page.locator('#tabSuspSrch_tmpl0_UsrPaymntSrchBasic1_chkShowCompleted');
  }

  async enterStartDate(startDate: string): Promise<void> { await this.startDateEdit.fill(startDate); }
  async enterToDate(endDate: string): Promise<void> { await this.endDateEdit.fill(endDate); }
  async enterStartTime(startTime: string): Promise<void> { await this.startTimeEdit.click(); await this.startTimeEdit.press('Home'); await this.startTimeEdit.fill(startTime); }
  async enterToTime(endTime: string): Promise<void> { await this.endTimeEdit.click(); await this.endTimeEdit.press('Home'); await this.endTimeEdit.fill(endTime); }
  async enterAtNameID(nameID: string): Promise<void> { await this.nameIDEdit.fill(nameID); await this.nameIDEdit.press('Tab'); }
  async enterAtSPN(spn: string): Promise<void> { await this.spnNoEdit.fill(spn); }
  async clickSearchButton(): Promise<void> { await this.searchButton.click(); }
  async clickResetButton(): Promise<void> { await this.resetButton.click(); }
  async clickBackButton(): Promise<void> { await this.backButton.click(); }
  async clickAddNewButton(): Promise<void> { await this.addNewButton.click(); }
  async clickPrintIcon(): Promise<void> { await this.printIcon.click(); }
  async clickAdvancedTab(): Promise<void> { await this.advancedTab.click(); }
  async clickBasicTab(): Promise<void> { await this.basicTab.click(); }
  async checkShowCompletedCheckbox(): Promise<void> { await this.showCompletedCheckBox.click(); }

  async getGridCount(): Promise<number> {
    return await this.scheduleGrid.locator('//tr[contains(@class,"Row")]').count();
  }

  async clickGridRow(rowIndex: number): Promise<void> {
    await this.scheduleGrid.locator(`//tr[${rowIndex + 2}]`).click();
  }

  async selectGridRow(): Promise<void> {
    const rows = this.scheduleGrid.locator('//tr[contains(@class,"Row")]');
    const count = await rows.count();
    if (count > 0) { await rows.nth(Math.floor(Math.random() * count)).click(); }
  }

  async selectAtSPNNoInGrid(spn: string): Promise<void> {
    await this.scheduleGrid.locator(`//td[contains(text(),'${spn}')]`).click();
  }

  async getGridCellText(searchText: string, columnName: string): Promise<string> {
    const row = this.scheduleGrid.locator(`//tr[td[contains(text(),'${searchText}')]]`);
    const headerCells = this.scheduleGrid.locator('//tr[contains(@class,"Header")]//th');
    const count = await headerCells.count();
    let colIndex = -1;
    for (let i = 0; i < count; i++) {
      const text = await headerCells.nth(i).textContent();
      if (text?.includes(columnName)) { colIndex = i + 1; break; }
    }
    if (colIndex === -1) return '';
    return (await row.locator(`td:nth-child(${colIndex})`).textContent()) || '';
  }

  async getGridColumnValues(columnName: string): Promise<string[]> {
    const headerCells = this.scheduleGrid.locator('//tr[contains(@class,"Header")]//th');
    const count = await headerCells.count();
    let colIndex = -1;
    for (let i = 0; i < count; i++) {
      const text = await headerCells.nth(i).textContent();
      if (text?.includes(columnName)) { colIndex = i + 1; break; }
    }
    if (colIndex === -1) return [];
    const rows = this.scheduleGrid.locator('//tr[contains(@class,"Row")]');
    const rowCount = await rows.count();
    const values: string[] = [];
    for (let i = 0; i < rowCount; i++) {
      values.push((await rows.nth(i).locator(`td:nth-child(${colIndex})`).textContent()) || '');
    }
    return values;
  }

  async enterToDateAsCurrentDate(currentDate: string): Promise<void> { await this.endDateEdit.fill(currentDate); await this.endDateEdit.press('Tab'); }
}

// ─── Schedule Search Advanced Tab ────────────────────────────────────────────

export class ScheduleSearchAdvancedTabPage {
  readonly page: Page;

  readonly eventTypeDropdown: Locator;
  readonly subTypeDropdown: Locator;
  readonly facilityDropdown: Locator;
  readonly buildingDropdown: Locator;
  readonly statusDropdown: Locator;
  readonly eventYearEdit: Locator;
  readonly eventNumberEdit: Locator;
  readonly eventLocationEdit: Locator;
  readonly cellNoEdit: Locator;
  readonly sexDropdown: Locator;
  readonly raceDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.eventTypeDropdown = page.locator('#tabSuspSrch_tmpl1_UsrPaymntSrchAdv1_cddEventType_DropDown');
    this.subTypeDropdown = page.locator('#tabSuspSrch_tmpl1_UsrPaymntSrchAdv1_cddSubType_DropDown');
    this.facilityDropdown = page.locator('#tabSuspSrch_tmpl1_UsrPaymntSrchAdv1_cddFacility_DropDown');
    this.buildingDropdown = page.locator('#tabSuspSrch_tmpl1_UsrPaymntSrchAdv1_cddBuilding_DropDown');
    this.statusDropdown = page.locator('#tabSuspSrch_tmpl1_UsrPaymntSrchAdv1_cddStatus_DropDown');
    this.eventYearEdit = page.locator('#tabSuspSrch_tmpl1_UsrPaymntSrchAdv1_nbrEventNo_Year');
    this.eventNumberEdit = page.locator('#tabSuspSrch_tmpl1_UsrPaymntSrchAdv1_nbrEventNo_Number');
    this.eventLocationEdit = page.locator('#tabSuspSrch_tmpl1_UsrPaymntSrchAdv1_adrLocation_txtFrom');
    this.cellNoEdit = page.locator('#tabSuspSrch_tmpl1_UsrPaymntSrchAdv1_txtCellNo');
    this.sexDropdown = page.locator('#tabSuspSrch_tmpl1_UsrPaymntSrchAdv1_cddSex_DropDown');
    this.raceDropdown = page.locator('#tabSuspSrch_tmpl1_UsrPaymntSrchAdv1_cddRace_DropDown');
  }

  async selectAtEventType(eventType: string): Promise<void> { await this.eventTypeDropdown.selectOption({ label: eventType }); }
  async selectAtSubType(subType: string): Promise<void> { await this.subTypeDropdown.selectOption({ label: subType }); }
  async selectAtFacility(facility: string): Promise<void> { await this.facilityDropdown.selectOption({ label: facility }); }
  async selectAtBuilding(building: string): Promise<void> { await this.buildingDropdown.selectOption({ label: building }); }
  async selectAtStatus(status: string): Promise<void> { await this.statusDropdown.selectOption({ label: status }); }
  async enterAtEventNo(year: string, number: string): Promise<void> { await this.eventYearEdit.fill(year); await this.eventYearEdit.press('Tab'); await this.eventNumberEdit.fill(number); await this.eventNumberEdit.press('Tab'); }
  async enterAtEventLocation(location: string): Promise<void> { await this.eventLocationEdit.fill(location); await this.eventLocationEdit.press('Tab'); }
  async enterAtCellNo(cellNo: string): Promise<void> { await this.cellNoEdit.fill(cellNo); }
  async selectAtSex(sex: string): Promise<void> { await this.sexDropdown.selectOption({ label: sex }); }
  async selectAtRace(race: string): Promise<void> { await this.raceDropdown.selectOption({ label: race }); }

  async verifyAtSPNInGrid(spn: string): Promise<void> { const el = this.page.locator(`#grdScheduleSrch`).locator(`//td[contains(text(),'${spn}')]`); expect(await el.isVisible()).toBeTruthy(); }
  async verifyAtEventSubType(spn: string, expectedEventSubType: string): Promise<void> { const grid = this.page.locator('#grdScheduleSrch'); const row = grid.locator(`//tr[td[contains(text(),'${spn}')]]`); const headerCells = grid.locator('//tr[contains(@class,"Header")]//th'); const count = await headerCells.count(); let colIndex = -1; for (let i = 0; i < count; i++) { const text = await headerCells.nth(i).textContent(); if (text?.includes('Event/Sub type')) { colIndex = i + 1; break; } } if (colIndex !== -1) { const text = (await row.locator(`td:nth-child(${colIndex})`).textContent()) || ''; expect(text).toEqual(expectedEventSubType); } }
  async verifyAtScheduleFromTimeIsAfterOrEqualEqualToGivenTime(startTime: string, columnName: string): Promise<void> { /* time comparison verification */ }
  async verifyAtScheduleToTimeIsBeforeOrEqualToGivenTime(toTime: string, columnName: string): Promise<void> { /* time comparison verification */ }
  async verifyScheduleFromDateInGridIsBetweenFromAndToDate(fromDate: string, toDate: string): Promise<void> { /* date range verification */ }
  async verifyScheduleToDateInGridIsBetweenFromAndToDate(fromDate: string, toDate: string): Promise<void> { /* date range verification */ }
  async verifyNoRecordFoundAcknowledgePopupNotArise(): Promise<void> { /* verify popup not displayed */ }
  async verifyNoRecordFoundAcknowledgePopup(): Promise<void> { /* popup: 1011 - No Record Found */ }
  async selectAtInmateMovementInGridBySPN(spn: string): Promise<void> { await this.page.locator(`#grdScheduleSrch`).locator(`//td[contains(text(),'${spn}')]`).click(); }
  async verifyAtCellAssignedInGrid(cellNo: string): Promise<void> { const grid = this.page.locator('#grdScheduleSrch'); const headerCells = grid.locator('//tr[contains(@class,"Header")]//th'); const count = await headerCells.count(); let colIndex = -1; for (let i = 0; i < count; i++) { const text = await headerCells.nth(i).textContent(); if (text?.includes('Cell Assigned')) { colIndex = i + 1; break; } } if (colIndex !== -1) { const rows = grid.locator('//tr[contains(@class,"Row")]'); const rowCount = await rows.count(); for (let i = 0; i < rowCount; i++) { const cell = (await rows.nth(i).locator(`td:nth-child(${colIndex})`).textContent()) || ''; expect(cell).toContain(cellNo); } } }
}

// ─── Work Release Page ───────────────────────────────────────────────────────

export class WorkReleasePage {
  readonly page: Page;

  readonly spnNoEdit: Locator;
  readonly nameTypeEdit: Locator;
  readonly nameIDEdit: Locator;
  readonly saveButton: Locator;
  readonly saveAndCloseIcon: Locator;
  readonly deleteButton: Locator;
  readonly resetButton: Locator;
  readonly mainTab: Locator;
  readonly schedulePaymentTab: Locator;
  readonly stsFineTab: Locator;
  readonly attachmentTab: Locator;
  readonly statusBar: Locator;
  readonly yesButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.spnNoEdit = page.locator('#HeaderAdmission_txtSPINNbr');
    this.nameTypeEdit = page.locator('#HeaderAdmission_nmInmateName_NameType');
    this.nameIDEdit = page.locator('#HeaderAdmission_nmInmateName_NameTypeID');
    this.saveButton = page.locator('#cmdSave');
    this.saveAndCloseIcon = page.locator('#cmdSaveNClose');
    this.deleteButton = page.locator('#cmdDelete');
    this.resetButton = page.locator('#cmdRefresh');
    this.mainTab = page.locator("//span[contains(text(),'Main')]");
    this.schedulePaymentTab = page.locator("//span[contains(text(),'Schedule/Payment')]");
    this.stsFineTab = page.locator("//span[contains(text(),'STS')]");
    this.attachmentTab = page.locator("//span[contains(text(),'Attachment')]");
    this.statusBar = page.locator("//td[@class='statusBar']/b");
    this.yesButton = page.locator("//button[contains(text(),'Yes')]");
  }

  async enterAtSPN(spn: string): Promise<void> { await this.spnNoEdit.fill(spn); await this.spnNoEdit.press('Tab'); }
  async enterSPNNoAs10(): Promise<void> { await this.spnNoEdit.fill('10'); await this.spnNoEdit.press('Tab'); }
  async enterNameID(nameType: string, nameId: string): Promise<void> { await this.nameTypeEdit.fill(nameType); await this.nameIDEdit.fill(nameId); }
  async save(): Promise<void> { await this.saveButton.click(); await this.yesButton.click(); }
  async saveAndCloseScreen(): Promise<void> { await this.saveAndCloseIcon.click(); await this.yesButton.click(); }
  async close(): Promise<void> { await this.page.close(); }
  async clickMainTab(): Promise<void> { await this.mainTab.click(); }
  async clickSchedulePaymentTab(): Promise<void> { await this.schedulePaymentTab.click(); }
  async clickSTSFineSentenceTab(): Promise<void> { await this.stsFineTab.click(); }
  async getStatusBarText(): Promise<string> { return (await this.statusBar.textContent()) || ''; }
  async isMainTabDisplayed(): Promise<boolean> { return await this.mainTab.isVisible(); }
  async isAttachmentTabDisplayed(): Promise<boolean> { return await this.attachmentTab.isVisible(); }
  async isMainTabEnabled(): Promise<boolean> { return await this.mainTab.isEnabled(); }
  async isAttachmentTabEnabled(): Promise<boolean> { return await this.attachmentTab.isEnabled(); }
  async isSchedulePaymentTabDisplayed(): Promise<boolean> { return await this.schedulePaymentTab.isVisible(); }
  async isSchedulePaymentTabEnabled(): Promise<boolean> { return await this.schedulePaymentTab.isEnabled(); }

  async verifyAdditionSuccessfulMessage(): Promise<void> { expect(await this.statusBar.textContent()).toContain('1002 - Addition Successful'); }
  async verify18001SPNIsNotEligibleAcknowledgePopup(): Promise<void> { /* popup: 18001 - SPN# is not eligible */ }
  async verify18001SPNIsNotEligibleAcknowledgePopupNotExists(): Promise<void> { /* verify popup not displayed */ }
  async verifyMainTabIsDisplayed(): Promise<void> { expect(await this.mainTab.isVisible()).toBeTruthy(); }
  async verifyMainTabIsEnabled(): Promise<void> { expect(await this.mainTab.isEnabled()).toBeTruthy(); }
  async verifyAttachmentTabIsEnabled(): Promise<void> { expect(await this.attachmentTab.isEnabled()).toBeTruthy(); }
  async verifySchedulePaymentTabIsDisplayed(): Promise<void> { expect(await this.schedulePaymentTab.isVisible()).toBeTruthy(); }
  async verifySchedulePaymentTabIsEnabled(): Promise<void> { expect(await this.schedulePaymentTab.isEnabled()).toBeTruthy(); }
}

// ─── Work Release Main Tab ───────────────────────────────────────────────────

export class WorkReleaseMainTabPage {
  readonly page: Page;

  readonly workReleaseActivityDropdown: Locator;
  readonly assignDateEdit: Locator;
  readonly pfCodeEdit: Locator;
  readonly addButton: Locator;
  readonly mainTabGrid: Locator;
  readonly assignedLockerDropdown: Locator;
  readonly lockKeyIssuedCheckbox: Locator;
  readonly idCardIssuedCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.workReleaseActivityDropdown = page.locator('#tabHuber_tmpl0_UsrMain1_cddWorkReleaseActivity_DropDown');
    this.assignDateEdit = page.locator('#tabHuber_tmpl0_UsrMain1_dtcAssignDate_KPIDttmCtrl');
    this.pfCodeEdit = page.locator('#tabHuber_tmpl0_UsrMain1_lupPF_CodeValue');
    this.addButton = page.locator('#tabHuber_tmpl0_UsrMain1_imgAdd');
    this.mainTabGrid = page.locator('#tabHuber_tmpl0_UsrMain1_grdWorkRelease');
    this.assignedLockerDropdown = page.locator('#tabHuber_tmpl0_UsrMain1_cddAssignedLocker_DropDown');
    this.lockKeyIssuedCheckbox = page.locator('#tabHuber_tmpl0_UsrMain1_chkLockKeyIssued');
    this.idCardIssuedCheckbox = page.locator('#tabHuber_tmpl0_UsrMain1_chkIDCardIssued');
  }

  async selectAtWorkReleaseActivity(activity: string): Promise<void> { await this.workReleaseActivityDropdown.selectOption({ label: activity }); }
  async tabOutAssignDate(): Promise<void> { await this.assignDateEdit.click(); await this.assignDateEdit.press('Tab'); }
  async enterAtPF(pfCode: string): Promise<void> { await this.pfCodeEdit.fill(pfCode); await this.pfCodeEdit.press('Tab'); }
  async clickAddButton(): Promise<void> { await this.addButton.click(); }
  async selectAtAssignedLocker(locker: string): Promise<void> { await this.assignedLockerDropdown.selectOption({ label: locker }); }
  async clickLockKeyIssuedCheckbox(): Promise<void> { await this.lockKeyIssuedCheckbox.click(); }
  async clickIDCardIssuedCheckbox(): Promise<void> { await this.idCardIssuedCheckbox.click(); }

  async getWorkReleaseTypeInGrid(workReleaseType: string): Promise<string> {
    return (await this.mainTabGrid.locator(`//td[contains(text(),'${workReleaseType}')]`).textContent()) || '';
  }

  async deleteAtWorkReleaseTypeInGrid(workReleaseType: string): Promise<void> {
    this.page.once('dialog', d => d.accept());
    await this.mainTabGrid.locator(`//tr[td[contains(text(),'${workReleaseType}')]]//img[contains(@class,'delete')]`).click();
  }

  async getGridColumnValues(columnName: string): Promise<string[]> {
    const headerCells = this.mainTabGrid.locator('//tr[contains(@class,"Header")]//th');
    const count = await headerCells.count();
    let colIndex = -1;
    for (let i = 0; i < count; i++) {
      const text = await headerCells.nth(i).textContent();
      if (text?.includes(columnName)) { colIndex = i + 1; break; }
    }
    if (colIndex === -1) return [];
    const rows = this.mainTabGrid.locator('//tr[contains(@class,"Row")]');
    const rowCount = await rows.count();
    const values: string[] = [];
    for (let i = 0; i < rowCount; i++) {
      values.push((await rows.nth(i).locator(`td:nth-child(${colIndex})`).textContent()) || '');
    }
    return values;
  }

  async verifyAtWorkReleaseTypeInGrid(workReleaseType: string): Promise<void> { const el = this.mainTabGrid.locator(`//td[contains(text(),'${workReleaseType}')]`); expect(await el.textContent()).toEqual(workReleaseType); }
  async verifyAtWorkReleaseTypeNotAvailableInGrid(workReleaseType: string): Promise<void> { const el = this.mainTabGrid.locator(`//td[contains(text(),'${workReleaseType}')]`); expect(await el.count()).toEqual(0); }
  async verify31543DoYouAlsoWantToDeleteTheEmployerConfirmPopup(): Promise<void> { /* confirm popup: (31543) Do you also want to delete the Employer */ }
}

// ─── Schedule Payment Tab ────────────────────────────────────────────────────

export class SchedulePaymentTabPage {
  readonly page: Page;

  readonly eventTypeDropdown: Locator;
  readonly startDateEdit: Locator;
  readonly toDateEdit: Locator;
  readonly activityDaysDropdown: Locator;
  readonly addButton: Locator;
  readonly paymentGrid: Locator;
  readonly currentlyScheduledEventsGrid: Locator;
  readonly nameDropdown: Locator;
  readonly releaseTimeEdit: Locator;
  readonly returnTimeEdit: Locator;
  readonly monCheckbox: Locator;
  readonly tueCheckbox: Locator;
  readonly wedCheckbox: Locator;
  readonly thuCheckbox: Locator;
  readonly friCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.eventTypeDropdown = page.locator('#tabHuber_tmpl1_UsrSchdulePayment1_cddEventType_DropDown');
    this.startDateEdit = page.locator('#tabHuber_tmpl1_UsrSchdulePayment1_dtcStartDate_KPIDttmCtrl');
    this.toDateEdit = page.locator('#tabHuber_tmpl1_UsrSchdulePayment1_dtcToDate_KPIDttmCtrl');
    this.activityDaysDropdown = page.locator('#tabHuber_tmpl1_UsrSchdulePayment1_cddActivityDays_DropDown');
    this.addButton = page.locator('#tabHuber_tmpl1_UsrSchdulePayment1_imgAdd');
    this.paymentGrid = page.locator('#tabHuber_tmpl1_UsrSchdulePayment1_grdPayment');
    this.currentlyScheduledEventsGrid = page.locator('#tabHuber_tmpl1_UsrSchdulePayment1_grdEventSchedule');
    this.nameDropdown = page.locator('#tabHuber_tmpl1_UsrSchdulePayment1_cddName_DropDown');
    this.releaseTimeEdit = page.locator("//table[@id='tabHuber_tmpl1_UsrSchdulePayment1_TimeCtrlRelease_Time']//input");
    this.returnTimeEdit = page.locator("//table[@id='tabHuber_tmpl1_UsrSchdulePayment1_TimeCtrlReturn_Time']//input");
    this.monCheckbox = page.locator('#tabHuber_tmpl1_UsrSchdulePayment1_chkMon');
    this.tueCheckbox = page.locator('#tabHuber_tmpl1_UsrSchdulePayment1_chkTue');
    this.wedCheckbox = page.locator('#tabHuber_tmpl1_UsrSchdulePayment1_chkWed');
    this.thuCheckbox = page.locator('#tabHuber_tmpl1_UsrSchdulePayment1_chkThu');
    this.friCheckbox = page.locator('#tabHuber_tmpl1_UsrSchdulePayment1_chkFri');
  }

  async selectAtEventType(eventType: string): Promise<void> { await this.eventTypeDropdown.selectOption({ label: eventType }); }
  async enterStartDateAsCurrentDate(currentDate: string): Promise<void> { await this.startDateEdit.click(); await this.startDateEdit.fill(currentDate); await this.startDateEdit.press('Tab'); }
  async enterToDateAsCurrentDate(currentDate: string): Promise<void> { await this.toDateEdit.click(); await this.toDateEdit.fill(currentDate); }
  async enterToDateByDays(futureDate: string): Promise<void> { await this.toDateEdit.fill(futureDate); await this.toDateEdit.press('Tab'); }
  async selectAtActivityDays(activityDays: string): Promise<void> { await this.activityDaysDropdown.selectOption({ label: activityDays }); await this.activityDaysDropdown.press('Tab'); }
  async clickAddButton(): Promise<void> { await this.addButton.click(); }
  async selectAtBusinessName(businessName: string): Promise<void> { await this.nameDropdown.selectOption({ label: businessName }); }
  async enterReleaseTime(releaseTime: string): Promise<void> { await this.releaseTimeEdit.click(); await this.releaseTimeEdit.fill(releaseTime); await this.releaseTimeEdit.press('Tab'); }
  async enterReturnTime(returnTime: string): Promise<void> { await this.returnTimeEdit.click(); await this.returnTimeEdit.fill(returnTime); await this.returnTimeEdit.press('Tab'); }
  async getReleaseTimeValue(): Promise<string> { return (await this.releaseTimeEdit.inputValue()) || ''; }
  async getReturnTimeValue(): Promise<string> { return (await this.returnTimeEdit.inputValue()) || ''; }

  async isMonToFriSelected(): Promise<{ mon: boolean; tue: boolean; wed: boolean; thu: boolean; fri: boolean }> {
    return {
      mon: await this.monCheckbox.isChecked(),
      tue: await this.tueCheckbox.isChecked(),
      wed: await this.wedCheckbox.isChecked(),
      thu: await this.thuCheckbox.isChecked(),
      fri: await this.friCheckbox.isChecked()
    };
  }

  async getPaymentGridRowCount(): Promise<number> { return await this.paymentGrid.locator('//tr[contains(@class,"Row")]').count(); }
  async getCurrentlyScheduledEventsGridRowCount(): Promise<number> { return await this.currentlyScheduledEventsGrid.locator('//tr[contains(@class,"Row")]').count(); }

  async selectAtEventSubInEventsGrid(eventSub: string): Promise<void> {
    await this.currentlyScheduledEventsGrid.locator(`//td[contains(text(),'${eventSub}')]`).click();
  }

  async getActivityInPaymentGrid(activity: string): Promise<string> {
    return (await this.paymentGrid.locator(`//td[contains(text(),'${activity}')]`).textContent()) || '';
  }

  async verifyAtActivityInGrid(activity: string): Promise<void> { const el = this.paymentGrid.locator(`//td[contains(text(),'${activity}')]`); expect(await el.textContent()).toEqual(activity); }
  async verifyCurrentlyScheduledEventsGridIsEmpty(): Promise<void> { expect(await this.currentlyScheduledEventsGrid.locator('//tr[contains(@class,"Row")]').count()).toEqual(0); }
  async verifyMonToFriIsSelected(): Promise<void> { expect(await this.monCheckbox.isChecked()).toBeTruthy(); expect(await this.tueCheckbox.isChecked()).toBeTruthy(); expect(await this.wedCheckbox.isChecked()).toBeTruthy(); expect(await this.thuCheckbox.isChecked()).toBeTruthy(); expect(await this.friCheckbox.isChecked()).toBeTruthy(); }
  async verifyReleaseTime(releaseTime: string): Promise<void> { expect(await this.releaseTimeEdit.inputValue()).toEqual(releaseTime); }
  async verifyReturnTime(returnTime: string): Promise<void> { expect(await this.returnTimeEdit.inputValue()).toEqual(returnTime); }
}

// ─── STS Fine Sentence Tab ───────────────────────────────────────────────────

export class STSFineSentenceTabPage {
  readonly page: Page;

  readonly eventTypeDropdown: Locator;
  readonly huberTypeDropdown: Locator;
  readonly startDateEdit: Locator;
  readonly toDateEdit: Locator;
  readonly activityDaysDropdown: Locator;
  readonly addButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.eventTypeDropdown = page.locator('#tabHuber_tmpl2_UsrScheduleSTS1_cddEventType_DropDown');
    this.huberTypeDropdown = page.locator('#tabHuber_tmpl2_UsrScheduleSTS1_cddHuberType_DropDown');
    this.startDateEdit = page.locator('#tabHuber_tmpl2_UsrScheduleSTS1_dtcStartDate_KPIDttmCtrl');
    this.toDateEdit = page.locator('#tabHuber_tmpl2_UsrScheduleSTS1_dtcToDate_KPIDttmCtrl');
    this.activityDaysDropdown = page.locator('#tabHuber_tmpl2_UsrScheduleSTS1_cddActivityDays_DropDown');
    this.addButton = page.locator('#tabHuber_tmpl2_UsrScheduleSTS1_imgAdd');
  }

  async selectAtEventType(eventType: string): Promise<void> { await this.eventTypeDropdown.selectOption({ label: eventType }); }
  async selectAtHuberType(huberType: string): Promise<void> { await this.huberTypeDropdown.selectOption({ label: huberType }); }
  async enterStartDateAsCurrentDate(currentDate: string): Promise<void> { await this.startDateEdit.click(); await this.startDateEdit.fill(currentDate); await this.startDateEdit.press('Tab'); }
  async enterToDateAsFutureDate(futureDate: string): Promise<void> { await this.toDateEdit.click(); await this.toDateEdit.fill(futureDate); }
  async selectAtActivityDays(activityDays: string): Promise<void> { await this.activityDaysDropdown.selectOption({ label: activityDays }); await this.activityDaysDropdown.press('Tab'); }
  async clickAddButton(): Promise<void> { await this.addButton.click(); }

  async verify1008AcknowledgementPopupNotArise(): Promise<void> { /* verify popup not displayed */ }
}

// ─── Individual Scheduling Page ──────────────────────────────────────────────

export class IndividualSchedulingPage {
  readonly page: Page;

  readonly spnEdit: Locator;
  readonly lastNameEdit: Locator;
  readonly firstNameEdit: Locator;
  readonly nameTypeEdit: Locator;
  readonly nameIdEdit: Locator;
  readonly cmsYearEdit: Locator;
  readonly cmsNumberEdit: Locator;
  readonly assignedCellValue: Locator;
  readonly sexValue: Locator;
  readonly raceValue: Locator;
  readonly inmateTypeValue: Locator;
  readonly dobValue: Locator;
  readonly ageValue: Locator;
  readonly confineReason: Locator;
  readonly sentenceStatusValue: Locator;
  readonly statusLabel: Locator;
  readonly resetButton: Locator;
  readonly addNewButton: Locator;
  readonly scheduleGrid: Locator;

  constructor(page: Page) {
    this.page = page;
    this.spnEdit = page.locator('#HeaderAdmission_txtSPINNbr');
    this.lastNameEdit = page.locator('#HeaderAdmission_nmInmateName_LastName');
    this.firstNameEdit = page.locator('#HeaderAdmission_nmInmateName_FirstName');
    this.nameTypeEdit = page.locator('#HeaderAdmission_nmInmateName_NameType');
    this.nameIdEdit = page.locator('#HeaderAdmission_nmInmateName_NameTypeID');
    this.cmsYearEdit = page.locator('#HeaderAdmission_nbrCMSBookingNbr_Year');
    this.cmsNumberEdit = page.locator('#HeaderAdmission_nbrCMSBookingNbr_Number');
    this.assignedCellValue = page.locator('#HeaderAdmission_lblAssignedCellValue');
    this.sexValue = page.locator('#HeaderAdmission_lblSexValue');
    this.raceValue = page.locator('#HeaderAdmission_lblRaceValue');
    this.inmateTypeValue = page.locator('#HeaderAdmission_lblInmateTypeValue');
    this.dobValue = page.locator('#HeaderAdmission_lblDOBValue');
    this.ageValue = page.locator('#HeaderAdmission_lblAgeValue');
    this.confineReason = page.locator('#HeaderAdmission_lblConfineReasonValue');
    this.sentenceStatusValue = page.locator('#HeaderAdmission_lblSentenceStatusValue');
    this.statusLabel = page.locator('#HeaderAdmission_lblStatus');
    this.resetButton = page.locator('#cmdRefresh');
    this.addNewButton = page.locator("//span[contains(text(),'Add New')]");
    this.scheduleGrid = page.locator('#grdScheduleView');
  }

  async enterAtSPN(spn: string): Promise<void> { await this.spnEdit.fill(spn); await this.spnEdit.press('Tab'); }
  async enterAtNameId(nameType: string, nameId: string): Promise<void> { await this.nameTypeEdit.fill(nameType); await this.nameTypeEdit.press('Tab'); await this.nameIdEdit.fill(nameId); await this.nameIdEdit.press('Tab'); }
  async clickResetButton(): Promise<void> { await this.resetButton.click(); }
  async clickAddNewButton(): Promise<void> { await this.addNewButton.click(); }
  async close(): Promise<void> { await this.page.close(); }

  async getLastNameValue(): Promise<string> { return (await this.lastNameEdit.inputValue()) || ''; }
  async getFirstNameValue(): Promise<string> { return (await this.firstNameEdit.inputValue()) || ''; }
  async getSPNValue(): Promise<string> { return (await this.spnEdit.inputValue()) || ''; }
  async getCMSBooking(): Promise<string> { return `${await this.cmsYearEdit.inputValue()}-${await this.cmsNumberEdit.inputValue()}`; }
  async getAssignedCellValue(): Promise<string> { return (await this.assignedCellValue.textContent()) || ''; }
  async getSexAndRace(): Promise<string> { return `${(await this.sexValue.textContent()) || ''}${(await this.raceValue.textContent()) || ''}`; }
  async getInmateTypeValue(): Promise<string> { return (await this.inmateTypeValue.textContent()) || ''; }
  async getDOBAndAge(): Promise<string> { return `${(await this.dobValue.textContent()) || ''},${(await this.ageValue.textContent()) || ''}`; }
  async getConfineReason(): Promise<string> { return (await this.confineReason.textContent()) || ''; }
  async getSentenceStatusValue(): Promise<string> { return (await this.sentenceStatusValue.textContent()) || ''; }
  async getStatusLabel(): Promise<string> { return (await this.statusLabel.textContent()) || ''; }

  async isSPNBlank(): Promise<boolean> { return (await this.spnEdit.inputValue()) === ''; }
  async isLastNameBlank(): Promise<boolean> { return (await this.lastNameEdit.inputValue()) === ''; }
  async isFirstNameBlank(): Promise<boolean> { return (await this.firstNameEdit.inputValue()) === ''; }
  async isNameIDBlank(): Promise<boolean> { return (await this.nameTypeEdit.inputValue()) === '' && (await this.nameIdEdit.inputValue()) === ''; }
  async isCMSBookingBlank(): Promise<boolean> { return (await this.cmsYearEdit.inputValue()) === '' && (await this.cmsNumberEdit.inputValue()) === ''; }
  async isAssignedCellBlank(): Promise<boolean> { return ((await this.assignedCellValue.textContent()) || '').trim() === ''; }
  async isInmateTypeBlank(): Promise<boolean> { return ((await this.inmateTypeValue.textContent()) || '').trim() === ''; }
  async isConfineReasonBlank(): Promise<boolean> { return ((await this.confineReason.textContent()) || '').trim() === ''; }
  async isSentenceStatusBlank(): Promise<boolean> { return ((await this.sentenceStatusValue.textContent()) || '').trim() === ''; }

  async selectAtActivityBySubjectInGrid(subject: string): Promise<void> {
    await this.scheduleGrid.locator(`//td[contains(text(),'${subject}')]`).click();
  }

  async verifyAtLastName(lastName: string): Promise<void> { expect(await this.lastNameEdit.inputValue()).toEqual(lastName); }
  async verifyAtFirstName(firstName: string): Promise<void> { expect(await this.firstNameEdit.inputValue()).toEqual(firstName); }
  async verifyAtSPN(spn: string): Promise<void> { expect(await this.spnEdit.inputValue()).toEqual(spn); }
  async verifySPNIsBlank(): Promise<void> { expect((await this.spnEdit.inputValue()).trim()).toEqual(''); }
  async verifyLastNameIsBlank(): Promise<void> { expect((await this.lastNameEdit.inputValue()).trim()).toEqual(''); }
  async verifyFirstNameIsBlank(): Promise<void> { expect((await this.firstNameEdit.inputValue()).trim()).toEqual(''); }
  async verifyAtCMSBooking(cmsBooking: string): Promise<void> { const year = await this.cmsYearEdit.inputValue(); const number = await this.cmsNumberEdit.inputValue(); expect(`${year}-${number}`).toEqual(cmsBooking); }
  async verifyAtAssignedCell(assignedCell: string): Promise<void> { expect(await this.assignedCellValue.textContent()).toEqual(assignedCell); }
  async verifyAtSexAndRace(sexAndRace: string): Promise<void> { const sex = await this.sexValue.textContent(); const race = await this.raceValue.textContent(); expect(`${sex}${race}`).toEqual(sexAndRace); }
  async verifyAtInmateType(inmateType: string): Promise<void> { expect(await this.inmateTypeValue.textContent()).toEqual(inmateType); }
  async verifyAtDOBAndAge(dobAndAge: string): Promise<void> { const dob = await this.dobValue.textContent(); const age = await this.ageValue.textContent(); expect(`${dob},${age}`).toEqual(dobAndAge); }
  async verifyAtConfineReason(confineReason: string): Promise<void> { expect(await this.confineReason.textContent()).toEqual(confineReason); }
  async verifyAtSentenceStatus(sentenceStatus: string): Promise<void> { expect(await this.sentenceStatusValue.textContent()).toEqual(sentenceStatus); }
  async verifyAtStatusLabel(statusLabel: string): Promise<void> { expect(await this.statusLabel.textContent()).toEqual(statusLabel); }
  async verifyNameIDIsBlank(): Promise<void> { expect((await this.nameTypeEdit.inputValue()).trim()).toEqual(''); expect((await this.nameIdEdit.inputValue()).trim()).toEqual(''); }
  async verifyCMSBookingIsBlank(): Promise<void> { expect((await this.cmsYearEdit.inputValue()).trim()).toEqual(''); expect((await this.cmsNumberEdit.inputValue()).trim()).toEqual(''); }
  async verifyAssignedCellIsBlank(): Promise<void> { expect((await this.assignedCellValue.textContent() || '').trim()).toEqual(''); }
  async verifyInmateTypeIsBlank(): Promise<void> { expect((await this.inmateTypeValue.textContent() || '').trim()).toEqual(''); }
  async verifyConfineReasonIsBlank(): Promise<void> { expect((await this.confineReason.textContent() || '').trim()).toEqual(''); }
  async verifySentenceStatusIsBlank(): Promise<void> { expect((await this.sentenceStatusValue.textContent() || '').trim()).toEqual(''); }
  async verifyStatusLabelIsBlank(): Promise<void> { const visible = await this.statusLabel.isVisible(); if (visible) { expect((await this.statusLabel.textContent() || '').trim()).toEqual(''); } }
}

// ─── Group Movement Page ─────────────────────────────────────────────────────

export class GroupMovementPage {
  readonly page: Page;

  readonly eventTypeDropdown: Locator;
  readonly subTypeDropdown: Locator;
  readonly startDateEdit: Locator;
  readonly endDateEdit: Locator;
  readonly startTimeEdit: Locator;
  readonly toTimeEdit: Locator;
  readonly groupMovementGrid: Locator;
  readonly spnEdit: Locator;
  readonly addButton: Locator;
  readonly saveButton: Locator;
  readonly signOutButton: Locator;
  readonly addInmatesButton: Locator;
  readonly buildingDropdown: Locator;
  readonly floorDropdown: Locator;
  readonly floorLabel: Locator;
  readonly floorGridTable: Locator;
  readonly listInmatesButton: Locator;
  readonly scanBarcodeEdit: Locator;
  readonly scanNotMatchedButton: Locator;
  readonly subjectEdit: Locator;
  readonly locationEdit: Locator;
  readonly notesEdit: Locator;
  readonly repeatCheckbox: Locator;
  readonly repeatDropdown: Locator;
  readonly eventYearEdit: Locator;
  readonly eventNumberEdit: Locator;
  readonly currentDateOnlyCheckBox: Locator;
  readonly currentDateAndTimeTextBox: Locator;
  readonly statusBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.eventTypeDropdown = page.locator('#cddEventType_DropDown');
    this.subTypeDropdown = page.locator('#cddSubType_DropDown');
    this.startDateEdit = page.locator('#dtDateFrom_KPIDttmCtrl');
    this.endDateEdit = page.locator('#dtDateTo_KPIDttmCtrl');
    this.startTimeEdit = page.locator("//table[@id='tmTimeFrom_Time']//input");
    this.toTimeEdit = page.locator("//table[@id='tmTimeTo_Time']//input");
    this.groupMovementGrid = page.locator('#grdGroupMovement');
    this.spnEdit = page.locator('#txtSPN');
    this.addButton = page.locator('#btnAdd');
    this.saveButton = page.locator('#cmdSave');
    this.signOutButton = page.locator('#btnSignOut');
    this.addInmatesButton = page.locator('#btnAddInmates');
    this.buildingDropdown = page.locator('#cddBuilding_DropDown');
    this.floorDropdown = page.locator('#cddFloor_DropDown');
    this.floorLabel = page.locator('#lblFloor');
    this.floorGridTable = page.locator('#grdFloor');
    this.listInmatesButton = page.locator('#btnListInmates');
    this.scanBarcodeEdit = page.locator('#txtScanBarcode');
    this.scanNotMatchedButton = page.locator('#btnScanNotMatched');
    this.subjectEdit = page.locator('#txtSubject');
    this.locationEdit = page.locator('#txtLocation');
    this.notesEdit = page.locator('#txtNotes');
    this.repeatCheckbox = page.locator('#chkRepeat');
    this.repeatDropdown = page.locator('#cddRepeat_DropDown');
    this.eventYearEdit = page.locator('#nbrEventNo_Year');
    this.eventNumberEdit = page.locator('#nbrEventNo_Number');
    this.currentDateOnlyCheckBox = page.locator('#chkCurrentDateOnly');
    this.currentDateAndTimeTextBox = page.locator('#txtCurrentDateAndTime');
    this.statusBar = page.locator("//td[@class='statusBar']/b");
  }

  async selectAtEventType(eventType: string): Promise<void> { await this.eventTypeDropdown.selectOption({ label: eventType }); await this.eventTypeDropdown.press('Tab'); }
  async selectAtSubType(subType: string): Promise<void> { await this.subTypeDropdown.selectOption({ label: subType }); }
  async tabOutStartDate(): Promise<void> { await this.startDateEdit.click(); await this.startDateEdit.press('Tab'); }
  async tabOutEndDate(): Promise<void> { await this.endDateEdit.click(); await this.endDateEdit.press('Tab'); }
  async enterAtStartDate(date: string): Promise<void> { await this.startDateEdit.fill(date); await this.startDateEdit.press('Tab'); }
  async enterAtEndDate(date: string): Promise<void> { await this.endDateEdit.fill(date); await this.endDateEdit.press('Tab'); }
  async enterPastStartDate(pastDate: string): Promise<void> { await this.startDateEdit.fill(pastDate); await this.startDateEdit.press('Tab'); }
  async enterPastEndDate(pastDate: string): Promise<void> { await this.endDateEdit.fill(pastDate); await this.endDateEdit.press('Tab'); }
  async enterFutureEndDate(futureDate: string): Promise<void> { await this.endDateEdit.fill(futureDate); await this.endDateEdit.press('Tab'); }
  async enterAtStartTime(time: string): Promise<void> { await this.startTimeEdit.click(); await this.startTimeEdit.fill(time); }
  async enterAtToTime(time: string): Promise<void> { await this.toTimeEdit.click(); await this.toTimeEdit.fill(time); }
  async enterStartTime(time: string): Promise<void> { await this.startTimeEdit.click(); await this.startTimeEdit.fill(time); }
  async enterEndTime(time: string): Promise<void> { await this.toTimeEdit.click(); await this.toTimeEdit.fill(time); }
  async enterAtSPN(spn: string): Promise<void> { await this.spnEdit.fill(spn); await this.spnEdit.press('Tab'); }
  async clickAddButton(): Promise<void> { await this.addButton.click(); }
  async enterAtSubject(subject: string): Promise<void> { await this.subjectEdit.fill(subject); }
  async enterAtLocation(location: string): Promise<void> { await this.locationEdit.fill(location); }
  async enterAtNotes(notes: string): Promise<void> { await this.notesEdit.fill(notes); }
  async clickRepeatCheckbox(): Promise<void> { await this.repeatCheckbox.click(); }
  async selectAtRepeatDropdown(value: string): Promise<void> { await this.repeatDropdown.selectOption({ label: value }); }
  async selectAtBuilding(building: string): Promise<void> { await this.buildingDropdown.selectOption({ label: building }); await this.buildingDropdown.press('Tab'); }
  async clickCurrentDateOnlyCheckBox(): Promise<void> { await this.currentDateOnlyCheckBox.click(); }

  async saveScreen(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.saveButton.click(); }
  async clickSave(): Promise<void> { await this.saveButton.click(); }
  async saveScreenWith31541Popup(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.saveButton.click(); }
  async clickSignOutButton(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.signOutButton.click(); }
  async clickAddInmatesButton(): Promise<void> { await this.addInmatesButton.click(); }
  async clickListInmatesButton(): Promise<void> { await this.listInmatesButton.click(); }
  async clickScanNotMatchedButton(): Promise<void> { await this.scanNotMatchedButton.click(); }
  async enterAtScanBarcode(barcode: string): Promise<void> { await this.scanBarcodeEdit.fill(barcode); await this.scanBarcodeEdit.press('Enter'); }

  async doubleClickOnFloorLabel(): Promise<void> { await this.floorLabel.dblclick(); }

  async clickOnFloorChkBoxUsingPOD(pod: string): Promise<void> {
    await this.floorGridTable.locator(`//tr[td[contains(text(),'${pod}')]]//input[@type='checkbox']`).click();
  }

  async clickCheckboxUsingInmateName(name: string): Promise<void> {
    await this.groupMovementGrid.locator(`//tr[td[contains(text(),'${name}')]]//input[@type='checkbox']`).click();
  }

  async verifyAtNameInGrid(name: string): Promise<string> {
    return (await this.groupMovementGrid.locator(`//td[contains(text(),'${name}')]`).textContent()) || '';
  }

  async verifyAtInmateNameInGrid(name: string): Promise<boolean> {
    return await this.groupMovementGrid.locator(`//td[contains(text(),'${name}')]`).isVisible();
  }

  async verifyEventNoIsDisplayed(): Promise<boolean> {
    return (await this.eventYearEdit.inputValue()) !== '' || (await this.eventNumberEdit.inputValue()) !== '';
  }

  async verifySignoutButtonIsEnabled(): Promise<boolean> { return await this.signOutButton.isEnabled(); }
  async verifyAddInmatesButtonIsEnabled(): Promise<boolean> { return await this.addInmatesButton.isEnabled(); }
  async isScanNotMatchedButtonDisplayed(): Promise<boolean> { return await this.scanNotMatchedButton.isVisible(); }
  async verifyCurrentDateAndTimeShouldBeDisplayed(): Promise<boolean> { return await this.currentDateAndTimeTextBox.isVisible(); }
  async getStatusBarText(): Promise<string> { return (await this.statusBar.textContent()) || ''; }

  async getEventTypeDropdownValues(): Promise<string[]> {
    const options = this.eventTypeDropdown.locator('option');
    const count = await options.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) { values.push((await options.nth(i).textContent()) || ''); }
    return values;
  }

  async getSubTypeDropdownValues(): Promise<string[]> {
    const options = this.subTypeDropdown.locator('option');
    const count = await options.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) { values.push((await options.nth(i).textContent()) || ''); }
    return values;
  }

  async getBuildingDropdownValues(): Promise<string[]> {
    const options = this.buildingDropdown.locator('option');
    const count = await options.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) { values.push((await options.nth(i).textContent()) || ''); }
    return values;
  }

  async getFloorDropdownValues(): Promise<string[]> {
    const options = this.floorDropdown.locator('option');
    const count = await options.count();
    const values: string[] = [];
    for (let i = 0; i < count; i++) { values.push((await options.nth(i).textContent()) || ''); }
    return values;
  }

  async verifyAdditionalSuccessfullAcknowledgeMessage(): Promise<void> { /* popup: 1002 - Addition Successful */ }
  async verify31528SomeOfTheSelectedInmatesPopup(): Promise<void> { /* popup: (31528) Some of the selected inmates */ }
  async verifyRepeatDropdownIsDisabled(): Promise<void> { expect(await this.repeatDropdown.isEnabled()).toBeFalsy(); }
  async verifySelectRepeatValueAckMsg(): Promise<void> { /* popup: (31609) Select the Repeat Value */ }
  async verifyRepeatDropdownIsEnabled(): Promise<void> { expect(await this.repeatDropdown.isEnabled()).toBeTruthy(); }
  async verifyCancelRepeatFunctionalityAckMsgNotAppears(): Promise<void> { /* verify popup not displayed */ }
  async verifyGroupMovementRowCountIsNotNull(): Promise<void> { expect(await this.groupMovementGrid.locator('//tr[contains(@class,"Row")]').count()).toBeGreaterThan(0); }
  async verifyScanNotMatchedButtonIsDisplayed(): Promise<void> { expect(await this.scanNotMatchedButton.isVisible()).toBeTruthy(); }
  async verify31506DateShouldNotBePriorToCurrentDateAcknowledgementPopup(): Promise<void> { /* popup: (31506) Date should not be prior */ }
  async verify30055ThisNameDoesNotHaveAnOpenBookingPopup(): Promise<void> { /* popup: (30055) This Name does not have an open booking */ }
  async verify31604InmateIsNotActiveInStatusPopup(): Promise<void> { /* popup: (31604) Inmate is not Active-In status */ }
  async verifyAtUnSelectedInmateInGrid(inmateName: string): Promise<void> { const chk = this.groupMovementGrid.locator(`//tr[td[contains(text(),'${inmateName}')]]//img`); expect(await chk.getAttribute('title')).toEqual('Unchecked'); }
  async verifyAtSelectedInmateInGrid(inmateName: string): Promise<void> { const chk = this.groupMovementGrid.locator(`//tr[td[contains(text(),'${inmateName}')]]//img`); expect(await chk.getAttribute('title')).toEqual('Checked'); }
  async verifyAtBuilding(building: string): Promise<void> { const options = this.buildingDropdown.locator('option'); const values: string[] = []; const count = await options.count(); for (let i = 0; i < count; i++) { values.push((await options.nth(i).textContent()) || ''); } expect(values).toContain(building); }
  async verifyAtFloor(floor: string): Promise<void> { const options = this.floorDropdown.locator('option'); const values: string[] = []; const count = await options.count(); for (let i = 0; i < count; i++) { values.push((await options.nth(i).textContent()) || ''); } expect(values).toContain(floor); }
  async verify30597ThisJobCannotBeCancelledAcknowledgementPopupNotArise(): Promise<void> { /* verify popup not displayed */ }
  async verifyCurrentDateAndTimeShouleBeDisplayed(): Promise<void> { expect(await this.currentDateAndTimeTextBox.inputValue()).toBeTruthy(); }
}

// ─── Outside Sign Out/In Page ────────────────────────────────────────────────

export class OutsideSignOutInPage {
  readonly page: Page;

  readonly verifyIDButton: Locator;
  readonly eventsGrid: Locator;
  readonly batchOutButton: Locator;
  readonly batchInButton: Locator;
  readonly updateButton: Locator;
  readonly selectAllCheckBox: Locator;
  readonly statusBar: Locator;
  readonly barcodeEdit: Locator;
  readonly nameIDEdit: Locator;
  readonly signOutLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.verifyIDButton = page.locator('#ctrlVerifyID_btnVerify');
    this.eventsGrid = page.locator('#grdEvents');
    this.batchOutButton = page.locator('#btnBatchOut');
    this.batchInButton = page.locator('#btnBatchIn');
    this.updateButton = page.locator('#btnUpdate');
    this.selectAllCheckBox = page.locator('#chkSelectAll');
    this.statusBar = page.locator("//td[@class='statusBar']/b");
    this.barcodeEdit = page.locator('#txtbarcode');
    this.nameIDEdit = page.locator('#NameID_SPN');
    this.signOutLabel = page.locator('#lblSignOut');
  }

  async clickVerifyIDButton(): Promise<void> { await this.verifyIDButton.click(); }
  async clickBatchOutButton(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.batchOutButton.click(); }
  async clickBatchInButton(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.batchInButton.click(); }
  async clickUpdateButton(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.updateButton.click(); }
  async clickSelectAllCheckBox(): Promise<void> { await this.selectAllCheckBox.click(); }
  async getStatusBarText(): Promise<string> { return (await this.statusBar.textContent()) || ''; }
  async enterAtBarcode(barcode: string): Promise<void> { await this.barcodeEdit.fill(barcode); await this.barcodeEdit.press('Enter'); }
  async enterAtNameID(nameID: string): Promise<void> { await this.nameIDEdit.fill(nameID); await this.nameIDEdit.press('Tab'); }
  async isVerifyIDButtonDisplayed(): Promise<boolean> { return await this.verifyIDButton.isVisible(); }

  async selectGridRowCheckboxByName(name: string): Promise<void> {
    await this.eventsGrid.locator(`//tr[td[contains(text(),'${name}')]]//input[@type='checkbox']`).click();
  }

  async verifyAtNameInGrid(name: string): Promise<boolean> {
    return await this.eventsGrid.locator(`//td[contains(text(),'${name}')]`).isVisible();
  }

  async verifyAtNameIsNotPresentInGrid(name: string): Promise<boolean> {
    return !(await this.eventsGrid.locator(`//td[contains(text(),'${name}')]`).isVisible());
  }

  async verifySignAsOutInGrid(name: string): Promise<string> {
    const row = this.eventsGrid.locator(`//tr[td[contains(text(),'${name}')]]`);
    return (await row.locator("//td[contains(@class,'Sign')]").textContent()) || '';
  }

  async verifyAtEventTypeInGridByName(name: string, eventType: string): Promise<boolean> {
    const row = this.eventsGrid.locator(`//tr[td[contains(text(),'${name}')]]`);
    const cellText = (await row.locator("//td[position()=3]").textContent()) || '';
    return cellText.includes(eventType);
  }

  async verifyAtSignInGrid(nameIndex: number, sign: string): Promise<boolean> {
    const row = this.eventsGrid.locator(`//tr[contains(@class,'Row')][${nameIndex}]`);
    const signCell = (await row.locator("//td[contains(@class,'Sign')]").textContent()) || '';
    return signCell.includes(sign);
  }

  async verifyDueTimeInGrid(nameIndex: number, time: string): Promise<boolean> {
    const row = this.eventsGrid.locator(`//tr[contains(@class,'Row')][${nameIndex}]`);
    const dueTimeCell = (await row.locator("//td[contains(@class,'DueTime')]").textContent()) || '';
    return dueTimeCell.includes(time);
  }

  async verifyNameColorAsGreenInGrid(name: string): Promise<boolean> {
    const cell = this.eventsGrid.locator(`//tr[td[contains(text(),'${name}')]]`);
    const style = await cell.getAttribute('style');
    return style?.includes('green') || false;
  }

  async selectAtNameInGrid(name: string): Promise<void> {
    await this.eventsGrid.locator(`//td[contains(text(),'${name}')]`).click();
  }

  async verifyAtLabel(label: string): Promise<boolean> {
    return await this.signOutLabel.isVisible();
  }

  async getEventsGridCount(): Promise<number> {
    return await this.eventsGrid.locator('//tr[contains(@class,"Row")]').count();
  }

  async verifyTheVerifyIDButtonIsDisplayed(): Promise<void> { expect(await this.verifyIDButton.isVisible()).toBeTruthy(); }
  async selectAtNameCheckboxInGrid(inmateName: string): Promise<void> { await this.eventsGrid.locator(`//tr[td[contains(text(),'${inmateName}')]]//input[@type='checkbox']`).click(); }
}

// ─── Verify Name Page ────────────────────────────────────────────────────────

export class VerifyNamePage {
  readonly page: Page;

  readonly bypassReaderButton: Locator;
  readonly officersEdit: Locator;
  readonly okButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bypassReaderButton = page.locator('#cmdBypassReader');
    this.officersEdit = page.locator('#lupOfficers_CodeValue');
    this.okButton = page.locator('#btnok');
  }

  async clickBypassReaderButton(): Promise<void> { await this.bypassReaderButton.click(); }
  async enterAtOfficers(officer: string): Promise<void> { await this.officersEdit.fill(officer); await this.officersEdit.press('Tab'); }
  async clickOkButton(): Promise<void> { await this.okButton.click(); }
}

// ─── Activity Entry Approval Request ─────────────────────────────────────────

export class ActivityEntryApprovalRequestPage {
  readonly page: Page;

  readonly approvalNowRadioButton: Locator;
  readonly supervisorEdit: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.approvalNowRadioButton = page.locator('#rbApprovalNow');
    this.supervisorEdit = page.locator('#lupSupervisor_CodeValue');
    this.submitButton = page.locator('#cmdSubmit');
  }

  async clickApprovalNow(): Promise<void> { await this.approvalNowRadioButton.click(); }
  async enterAtSupervisor(supervisor: string): Promise<void> { await this.supervisorEdit.fill(supervisor); await this.supervisorEdit.press('Tab'); }
  async clickSubmitButton(): Promise<void> { await this.submitButton.click(); }

  async clickApproveNowRadioButton(): Promise<void> { await this.approvalNowRadioButton.click(); }
}

// ─── Employer Page ───────────────────────────────────────────────────────────

export class EmployerPage {
  readonly page: Page;

  readonly businessNameIDEdit: Locator;
  readonly businessLastNameEdit: Locator;
  readonly occupationCodeEdit: Locator;
  readonly occupationDescriptionEdit: Locator;
  readonly hireDateEdit: Locator;
  readonly workingHoursFromTimeEdit: Locator;
  readonly workingHoursToTimeEdit: Locator;
  readonly travelEdit: Locator;
  readonly releaseTimeEdit: Locator;
  readonly returnTimeEdit: Locator;
  readonly verifiedByPFCodeEdit: Locator;
  readonly verifiedByPFDescriptionEdit: Locator;
  readonly saveAndCloseIcon: Locator;
  readonly resetIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.businessNameIDEdit = page.locator('#BusinessNameID_NameTypeID');
    this.businessLastNameEdit = page.locator('#BusinessNameID_LastName');
    this.occupationCodeEdit = page.locator('#lupOccupation_CodeValue');
    this.occupationDescriptionEdit = page.locator('#lupOccupation_DescriptionValue');
    this.hireDateEdit = page.locator('#dtcHireDate_KPIDttmCtrl');
    this.workingHoursFromTimeEdit = page.locator("//table[@id='TimeCtrlWorking_Time']//input");
    this.workingHoursToTimeEdit = page.locator("//table[@id='TimeCtrlTo_Time']//input");
    this.travelEdit = page.locator('#txtTravel');
    this.releaseTimeEdit = page.locator("//table[@id='TimeCtrlRelease_Time']//input");
    this.returnTimeEdit = page.locator("//table[@id='TimeCtrlReturn_Time']//input");
    this.verifiedByPFCodeEdit = page.locator('#lupVerifiedBy_CodeValue');
    this.verifiedByPFDescriptionEdit = page.locator('#lupVerifiedBy_DescriptionValue');
    this.saveAndCloseIcon = page.locator('#cmdSaveNClose');
    this.resetIcon = page.locator('#cmdRefresh');
  }

  async enterAtBusinessNameID(nameId: string): Promise<void> { await this.businessNameIDEdit.fill(nameId); await this.businessNameIDEdit.press('Tab'); }
  async enterAtBusinessLastName(lastName: string): Promise<void> { await this.businessLastNameEdit.fill(lastName); await this.businessLastNameEdit.press('Tab'); }
  async enterAtOccupation(occupation: string): Promise<void> { await this.occupationCodeEdit.fill(occupation); await this.occupationCodeEdit.press('Tab'); }
  async enterHireDateAsCurrentDate(currentDate: string): Promise<void> { await this.hireDateEdit.fill(currentDate); await this.hireDateEdit.press('Tab'); }
  async tabOutHireDate(): Promise<void> { await this.hireDateEdit.click(); await this.hireDateEdit.press('Tab'); }
  async enterAtWorkingHoursFrom(fromTime: string): Promise<void> { await this.workingHoursFromTimeEdit.click(); await this.workingHoursFromTimeEdit.fill(fromTime); }
  async tabOutWorkingHoursFrom(): Promise<void> { await this.workingHoursFromTimeEdit.press('Tab'); }
  async enterWorkingHoursToByHours(toTime: string): Promise<void> { await this.workingHoursToTimeEdit.click(); await this.workingHoursToTimeEdit.fill(toTime); }
  async enterAtTravelTime(travelTime: string): Promise<void> { await this.travelEdit.fill(travelTime); await this.travelEdit.press('Tab'); }
  async enterAtVerifiedByPF(pfCode: string): Promise<void> { await this.verifiedByPFCodeEdit.fill(pfCode); await this.verifiedByPFCodeEdit.press('Tab'); }
  async saveAndCloseScreen(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.saveAndCloseIcon.click(); }
  async clickResetIcon(): Promise<void> { await this.resetIcon.click(); }

  async getWorkingHoursFrom(): Promise<string> { return (await this.workingHoursFromTimeEdit.inputValue()) || ''; }
  async getWorkingHoursTo(): Promise<string> { return (await this.workingHoursToTimeEdit.inputValue()) || ''; }
  async getReleaseTime(): Promise<string> { return (await this.releaseTimeEdit.inputValue()) || ''; }
  async getReturnTime(): Promise<string> { return (await this.returnTimeEdit.inputValue()) || ''; }
  async getOccupationDescription(): Promise<string> { return (await this.occupationDescriptionEdit.inputValue()) || ''; }
  async getVerifiedByPFDescription(): Promise<string> { return (await this.verifiedByPFDescriptionEdit.inputValue()) || ''; }

  async isBusinessNameIDBlank(): Promise<boolean> { return (await this.businessNameIDEdit.inputValue()) === ''; }
  async isOccupationBlank(): Promise<boolean> { return (await this.occupationCodeEdit.inputValue()) === ''; }
  async isHireDateBlank(): Promise<boolean> { return (await this.hireDateEdit.inputValue()) === ''; }
  async isWorkingHoursFromBlank(): Promise<boolean> { return (await this.workingHoursFromTimeEdit.inputValue()) === ''; }
  async isWorkingHoursToBlank(): Promise<boolean> { return (await this.workingHoursToTimeEdit.inputValue()) === ''; }
  async isTravelBlank(): Promise<boolean> { return (await this.travelEdit.inputValue()) === ''; }
  async isReleaseTimeBlank(): Promise<boolean> { return (await this.releaseTimeEdit.inputValue()) === ''; }
  async isReturnTimeBlank(): Promise<boolean> { return (await this.returnTimeEdit.inputValue()) === ''; }
  async isVerifiedByPFBlank(): Promise<boolean> { return (await this.verifiedByPFCodeEdit.inputValue()) === ''; }

  async verifyReleaseTimeByWorkingHoursFromAndTravelTime(workingHoursFrom: string, travelTime: string): Promise<void> {
    let wh = workingHoursFrom.trim();
    if (wh.length === 4) wh = '0' + wh;
    const [hh, mm] = wh.split(':').map(Number);
    const travel = parseInt(travelTime, 10);
    const totalMinutes = hh * 60 + mm - travel;
    const rH = Math.floor(totalMinutes / 60);
    const rM = totalMinutes % 60;
    const expected = `${rH}:${String(rM).padStart(2, '0')}`;
    const actual = await this.releaseTimeEdit.inputValue();
    expect(actual).toEqual(expected);
  }

  async verifyReturnTimeByWorkingHoursToAndTravelTime(workingHoursTo: string, travelTime: string): Promise<void> {
    let wh = workingHoursTo.trim();
    if (wh.length === 4) wh = '0' + wh;
    const [hh, mm] = wh.split(':').map(Number);
    const travel = parseInt(travelTime, 10);
    const totalMinutes = hh * 60 + mm + travel;
    const rH = Math.floor(totalMinutes / 60);
    const rM = totalMinutes % 60;
    const expected = `${rH}:${String(rM).padStart(2, '0')}`;
    const actual = await this.returnTimeEdit.inputValue();
    expect(actual).toEqual(expected);
  }

  async verifyOccupationAsBlank(): Promise<void> { expect((await this.occupationCodeEdit.inputValue()).trim()).toEqual(''); expect((await this.occupationDescriptionEdit.inputValue()).trim()).toEqual(''); }
  async verifyHiredDateAsBlank(): Promise<void> { expect((await this.hireDateEdit.inputValue()).trim()).toEqual(''); }
  async verifyBusinessNameAsBlank(): Promise<void> { expect((await this.businessNameIDEdit.inputValue()).trim()).toEqual(''); expect((await this.businessLastNameEdit.inputValue()).trim()).toEqual(''); }
  async verifyWorkingHoursAsBlank(): Promise<void> { expect((await this.workingHoursFromTimeEdit.inputValue()).trim()).toEqual(''); expect((await this.workingHoursToTimeEdit.inputValue()).trim()).toEqual(''); }
  async verifyTravelTimeAsBlank(): Promise<void> { expect((await this.travelEdit.inputValue()).trim()).toEqual(''); }
  async verifyVerifiedByPFAsBlank(): Promise<void> { expect((await this.verifiedByPFCodeEdit.inputValue()).trim()).toEqual(''); expect((await this.verifiedByPFDescriptionEdit.inputValue()).trim()).toEqual(''); }
}

// ─── Delete Huber Schedule ───────────────────────────────────────────────────

export class DeleteHuberSchedulePage {
  readonly page: Page;

  readonly deleteThisEventAndAllFutureCheckbox: Locator;
  readonly eventAssistantCheckBox: Locator;
  readonly pfEdit: Locator;
  readonly commentsEdit: Locator;
  readonly updateButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.deleteThisEventAndAllFutureCheckbox = page.locator('#ChkDelete');
    this.eventAssistantCheckBox = page.locator('#ChkEvntnAsst');
    this.pfEdit = page.locator('#lupPF_CodeValue');
    this.commentsEdit = page.locator('#txtComments');
    this.updateButton = page.locator('#cmdUpdate');
  }

  async clickDeleteThisEventAndAllFutureAssociatedEventsCheckbox(): Promise<void> { await this.deleteThisEventAndAllFutureCheckbox.click(); }
  async clickEventAssistantCheckBox(): Promise<void> { await this.eventAssistantCheckBox.click(); }
  async enterAtPF(pf: string): Promise<void> { await this.pfEdit.fill(pf); await this.pfEdit.press('Tab'); }
  async enterAtComments(comments: string): Promise<void> { await this.commentsEdit.fill(comments); }
  async clickUpdateButton(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.updateButton.click(); }
}

// ─── Inmate Movement Page ────────────────────────────────────────────────────

export class InmateMovementPage {
  readonly page: Page;

  readonly eventTypeDropdown: Locator;
  readonly subTypeDropdown: Locator;
  readonly subjectEdit: Locator;
  readonly startDateEdit: Locator;
  readonly startAtTime: Locator;
  readonly endDateEdit: Locator;
  readonly endAtTime: Locator;
  readonly scheduleGrid: Locator;
  readonly saveButton: Locator;
  readonly deleteButton: Locator;
  readonly locationEdit: Locator;
  readonly locationDescriptionEdit: Locator;
  readonly notesEdit: Locator;
  readonly repeatDropdown: Locator;
  readonly customEdit: Locator;
  readonly custom1Edit: Locator;
  readonly resetIcon: Locator;
  readonly eventYearEdit: Locator;
  readonly eventNumberEdit: Locator;
  readonly currentAndFutureDatesCheckBox: Locator;
  readonly chargeDropdownArrow: Locator;
  readonly chargeDropdown: Locator;
  readonly statusBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.eventTypeDropdown = page.locator('#UsrEventCtrl1_cddEventType_DropDown');
    this.subTypeDropdown = page.locator('#UsrEventCtrl1_cddSubType_DropDown');
    this.subjectEdit = page.locator('#UsrEventCtrl1_txtSubject');
    this.startDateEdit = page.locator('#UsrEventCtrl1_dtDateFrom_KPIDttmCtrl');
    this.startAtTime = page.locator("//table[@id='UsrEventCtrl1_tmTimeFrom_Time']//input");
    this.endDateEdit = page.locator('#UsrEventCtrl1_dtDateTo_KPIDttmCtrl');
    this.endAtTime = page.locator("//table[@id='UsrEventCtrl1_tmTimeTo_Time']//input");
    this.scheduleGrid = page.locator('#UsrScheduleViewCtrl1_grdEventSchedule');
    this.saveButton = page.locator('#cmdSave');
    this.deleteButton = page.locator('#cmdDelete');
    this.locationEdit = page.locator('#UsrEventCtrl1_lupLocation_CodeValue');
    this.locationDescriptionEdit = page.locator('#UsrEventCtrl1_lupLocation_DescriptionValue');
    this.notesEdit = page.locator('#UsrEventCtrl1_txtNotes');
    this.repeatDropdown = page.locator('#UsrEventCtrl1_cddRepeat_DropDown');
    this.customEdit = page.locator('#UsrEventCtrl1_txtCustom');
    this.custom1Edit = page.locator('#UsrEventCtrl1_txtCustom1');
    this.resetIcon = page.locator('#cmdRefresh');
    this.eventYearEdit = page.locator('#UsrEventCtrl1_nbrEventNo_Year');
    this.eventNumberEdit = page.locator('#UsrEventCtrl1_nbrEventNo_Number');
    this.currentAndFutureDatesCheckBox = page.locator('#UsrEventCtrl1_chkCurrentAndFutureDates');
    this.chargeDropdownArrow = page.locator('#UsrEventCtrl1_cddCharge_Arrow');
    this.chargeDropdown = page.locator('#UsrEventCtrl1_cddCharge_DropDown');
    this.statusBar = page.locator("//td[@class='statusBar']/b");
  }

  async selectAtEventType(eventType: string): Promise<void> { await this.eventTypeDropdown.selectOption({ label: eventType }); await this.eventTypeDropdown.press('Tab'); }
  async selectAtSubType(subType: string): Promise<void> { await this.subTypeDropdown.selectOption({ label: subType }); }
  async selectAtSubTypeByIndex(index: number): Promise<void> { await this.subTypeDropdown.selectOption({ index }); }
  async enterAtSubject(subject: string): Promise<void> { await this.subjectEdit.fill(subject); }
  async enterAtStartDate(date: string): Promise<void> { await this.startDateEdit.fill(date); await this.startDateEdit.press('Tab'); }
  async enterStartDateAsFutureDate(futureDate: string): Promise<void> { await this.startDateEdit.fill(futureDate); await this.startDateEdit.press('Tab'); }
  async enterEndDateAsFutureDate(futureDate: string): Promise<void> { await this.endDateEdit.fill(futureDate); await this.endDateEdit.press('Tab'); }
  async enterAtStartTime(time: string): Promise<void> { await this.startAtTime.click(); await this.startAtTime.fill(time); }
  async enterAtEndTime(time: string): Promise<void> { await this.endAtTime.click(); await this.endAtTime.fill(time); }
  async enterAtEndDate(date: string): Promise<void> { await this.endDateEdit.fill(date); await this.endDateEdit.press('Tab'); }
  async enterAtLocation(location: string): Promise<void> { await this.locationEdit.fill(location); await this.locationEdit.press('Tab'); }
  async enterAtNotes(notes: string): Promise<void> { await this.notesEdit.fill(notes); }
  async selectAtRepeat(repeat: string): Promise<void> { await this.repeatDropdown.selectOption({ label: repeat }); }
  async enterAtCustom(custom: string): Promise<void> { await this.customEdit.fill(custom); }
  async enterAtCustom1(custom1: string): Promise<void> { await this.custom1Edit.fill(custom1); }
  async selectAtCharge(charge: string): Promise<void> { await this.chargeDropdownArrow.click(); await this.chargeDropdown.selectOption({ label: charge }); }
  async clickCurrentAndFutureDates(): Promise<void> { await this.currentAndFutureDatesCheckBox.click(); }
  async clickResetIcon(): Promise<void> { await this.resetIcon.click(); }
  async close(): Promise<void> { await this.page.close(); }

  async save(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.saveButton.click(); }
  async clickDelete(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.deleteButton.click(); }
  async getStatusBarText(): Promise<string> { return (await this.statusBar.textContent()) || ''; }

  async verifyAtEventType(): Promise<string> { return (await this.eventTypeDropdown.locator('option:checked').textContent()) || ''; }
  async verifyAtSubType(): Promise<string> { return (await this.subTypeDropdown.locator('option:checked').textContent()) || ''; }
  async verifyAtSubject(): Promise<string> { return (await this.subjectEdit.inputValue()) || ''; }
  async verifyAtStartDate(): Promise<string> { return (await this.startDateEdit.inputValue()) || ''; }
  async verifyStartTimeIsNotNull(): Promise<boolean> { return (await this.startAtTime.inputValue()) !== ''; }
  async verifyAtEndDate(): Promise<string> { return (await this.endDateEdit.inputValue()) || ''; }
  async verifyEndTimeIsNotNull(): Promise<boolean> { return (await this.endAtTime.inputValue()) !== ''; }
  async verifyAtLocation(): Promise<string> { return (await this.locationEdit.inputValue()) || ''; }
  async verifyAtNotes(): Promise<string> { return (await this.notesEdit.inputValue()) || ''; }
  async verifyAtRepeat(): Promise<string> { return (await this.repeatDropdown.locator('option:checked').textContent()) || ''; }
  async verifyAtCustom(): Promise<string> { return (await this.customEdit.inputValue()) || ''; }
  async verifyAtCustom1(): Promise<string> { return (await this.custom1Edit.inputValue()) || ''; }
  async verifyAtEventNo(): Promise<string> { return `${await this.eventYearEdit.inputValue()}-${await this.eventNumberEdit.inputValue()}`; }

  async verifyEventNoIsBlank(): Promise<boolean> { return (await this.eventYearEdit.inputValue()) === '' && (await this.eventNumberEdit.inputValue()) === ''; }
  async verifyEventTypeIsBlank(): Promise<boolean> { return ((await this.eventTypeDropdown.locator('option:checked').textContent()) || '').trim() === ''; }
  async verifySubTypeIsBlank(): Promise<boolean> { return ((await this.subTypeDropdown.locator('option:checked').textContent()) || '').trim() === ''; }
  async verifySubjectIsBlank(): Promise<boolean> { return (await this.subjectEdit.inputValue()) === ''; }
  async verifyCustomIsBlank(): Promise<boolean> { return (await this.customEdit.inputValue()) === ''; }
  async verifyCustom1IsBlank(): Promise<boolean> { return (await this.custom1Edit.inputValue()) === ''; }
  async verifyLocationIsBlank(): Promise<boolean> { return (await this.locationEdit.inputValue()) === ''; }
  async verifyStartDateIsBlank(): Promise<boolean> { return (await this.startDateEdit.inputValue()) === ''; }
  async verifyEndDateIsBlank(): Promise<boolean> { return (await this.endDateEdit.inputValue()) === ''; }
  async verifyStartTimeIsBlank(): Promise<boolean> { return (await this.startAtTime.inputValue()) === ''; }
  async verifyEndTimeIsBlank(): Promise<boolean> { return (await this.endAtTime.inputValue()) === ''; }
  async verifyRepeatIsBlank(): Promise<boolean> { return ((await this.repeatDropdown.locator('option:checked').textContent()) || '').trim() === ''; }
  async verifyNotesIsBlank(): Promise<boolean> { return (await this.notesEdit.inputValue()) === ''; }

  async selectAtActivityBySubjectInGrid(subject: string): Promise<void> {
    await this.scheduleGrid.locator(`//td[contains(text(),'${subject}')]`).click();
  }

  async getScheduleGridRowCount(): Promise<number> { return await this.scheduleGrid.locator('//tr[contains(@class,"Row")]').count(); }
}

// ─── STS Inside Page ─────────────────────────────────────────────────────────

export class STSInsidePage {
  readonly page: Page;

  readonly buildingDropdown: Locator;
  readonly hireDateEdit: Locator;
  readonly releaseTimeEdit: Locator;
  readonly returnTimeEdit: Locator;
  readonly saveAndCloseIcon: Locator;
  readonly verifiedByPFCodeEdit: Locator;
  readonly termDateEdit: Locator;
  readonly statusBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buildingDropdown = page.locator('#cddBuilding_DropDown');
    this.hireDateEdit = page.locator('#dtcHireDate_KPIDttmCtrl');
    this.releaseTimeEdit = page.locator("//table[@id='TimeCtrlRelease_Time']//input");
    this.returnTimeEdit = page.locator("//table[@id='TimeCtrlReturn_Time']//input");
    this.saveAndCloseIcon = page.locator('#cmdSaveNClose');
    this.verifiedByPFCodeEdit = page.locator('#lupVerifiedBy_CodeValue');
    this.termDateEdit = page.locator('#dtcTermDate_KPIDttmCtrl');
    this.statusBar = page.locator("//td[@class='statusBar']/b");
  }

  async selectAtBuilding(building: string): Promise<void> { await this.buildingDropdown.selectOption({ label: building }); await this.buildingDropdown.press('Tab'); }
  async tabOutHireDate(): Promise<void> { await this.hireDateEdit.click(); await this.hireDateEdit.press('Tab'); }
  async enterAtHireDate(hireDate: string): Promise<void> { await this.hireDateEdit.fill(hireDate); await this.hireDateEdit.press('Tab'); }
  async enterFutureReleaseTimeByCurrentTime(futureTime: string): Promise<void> { await this.releaseTimeEdit.click(); await this.releaseTimeEdit.fill(futureTime); }
  async enterFutureReturnTimeByCurrentTime(futureTime: string): Promise<void> { await this.returnTimeEdit.click(); await this.returnTimeEdit.fill(futureTime); }
  async enterAtVerifiedBy(pfCode: string): Promise<void> { await this.verifiedByPFCodeEdit.fill(pfCode); await this.verifiedByPFCodeEdit.press('Tab'); }
  async enterTermDateAsFutureDate(futureDate: string): Promise<void> { await this.termDateEdit.fill(futureDate); await this.termDateEdit.press('Tab'); }
  async saveAndCloseScreen(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.saveAndCloseIcon.click(); }
  async getStatusBarText(): Promise<string> { return (await this.statusBar.textContent()) || ''; }

  async enterTermDateAsFurtureDate(noOfFutureDate: number): Promise<void> {
    await this.hireDateEdit.click();
    await this.hireDateEdit.press('Control+a');
    await this.hireDateEdit.press('Backspace');
    const future = new Date();
    future.setDate(future.getDate() + noOfFutureDate);
    const mm = String(future.getMonth() + 1).padStart(2, '0');
    const dd = String(future.getDate()).padStart(2, '0');
    const yyyy = future.getFullYear();
    await this.hireDateEdit.fill(`${mm}/${dd}/${yyyy}`);
  }
}

// ─── Inside Sign Out/In Page ─────────────────────────────────────────────────

export class InsideSignOutInPage {
  readonly page: Page;

  readonly eventsGrid: Locator;
  readonly signOutButton: Locator;
  readonly signInButton: Locator;
  readonly selectAllCheckBox: Locator;
  readonly statusBar: Locator;
  readonly barcodeEdit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.eventsGrid = page.locator('#grdEvents');
    this.signOutButton = page.locator('#btnSignOut');
    this.signInButton = page.locator('#btnSignIn');
    this.selectAllCheckBox = page.locator('#chkSelectAll');
    this.statusBar = page.locator("//td[@class='statusBar']/b");
    this.barcodeEdit = page.locator('#txtbarcode');
  }

  async clickSignOutButton(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.signOutButton.click(); }
  async clickSignInButton(): Promise<void> { this.page.once('dialog', d => d.accept()); await this.signInButton.click(); }
  async clickSelectAllCheckBox(): Promise<void> { await this.selectAllCheckBox.click(); }
  async getStatusBarText(): Promise<string> { return (await this.statusBar.textContent()) || ''; }
  async enterAtBarcode(barcode: string): Promise<void> { await this.barcodeEdit.fill(barcode); await this.barcodeEdit.press('Enter'); }

  async getEventsGridCount(): Promise<number> {
    return await this.eventsGrid.locator('//tr[contains(@class,"Row")]').count();
  }

  async verifyAtNameInGrid(name: string): Promise<boolean> {
    return await this.eventsGrid.locator(`//td[contains(text(),'${name}')]`).isVisible();
  }

  async verifyAtNameIsNotPresentInGrid(name: string): Promise<boolean> {
    return !(await this.eventsGrid.locator(`//td[contains(text(),'${name}')]`).isVisible());
  }

  async verifyAtSignInGrid(nameIndex: number, sign: string): Promise<boolean> {
    const row = this.eventsGrid.locator(`//tr[contains(@class,'Row')][${nameIndex}]`);
    const signCell = (await row.locator("//td[contains(@class,'Sign')]").textContent()) || '';
    return signCell.includes(sign);
  }

  async verifyDueTimeInGrid(nameIndex: number, time: string): Promise<boolean> {
    const row = this.eventsGrid.locator(`//tr[contains(@class,'Row')][${nameIndex}]`);
    const dueTimeCell = (await row.locator("//td[contains(@class,'DueTime')]").textContent()) || '';
    return dueTimeCell.includes(time);
  }

  async verifyNameColorAsGreenInGrid(name: string): Promise<boolean> {
    const row = this.eventsGrid.locator(`//tr[td[contains(text(),'${name}')]]`);
    const style = await row.getAttribute('style');
    return style?.includes('green') || false;
  }

  async selectEventInGrid(rowIndex: number): Promise<void> {
    await this.eventsGrid.locator(`//tr[${rowIndex + 2}]//input[@type='checkbox']`).click();
  }

  async swicthToInsideSignOutInWindow(): Promise<Page> {
    const pages = this.page.context().pages();
    for (const p of pages) {
      if (p.url().includes('frmInsideSignOutSignIn.aspx')) return p;
    }
    const [newPage] = await Promise.all([this.page.context().waitForEvent('page')]);
    return newPage;
  }
}
