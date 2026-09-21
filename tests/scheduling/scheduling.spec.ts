// @ts-nocheck
import { test } from '../../src/fixtures/test-fixtures';
import { withTestContext } from '../../src/data/test-context';

// ===================== Part 1 - eventCode =====================
test.describe('eventCode', () => {

  test('eventCode_187817', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '187817', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Event Code');
      await scheduling.module.switchToEventCode();
      await scheduling.eventCode.clickAddNew();
      await scheduling.module.switchToEventCodeEntryScreen();
      await scheduling.eventCodeEntry.clickSave();
      await scheduling.eventCodeEntry.verifyEventCodeAcknowledgeMessage();
      await scheduling.module.switchToEventCodeEntryScreen();
      await scheduling.eventCodeEntry.enterAtEventCode();
      await scheduling.eventCodeEntry.enterAtEventName();
      await scheduling.eventCodeEntry.enterDescription();
      await scheduling.eventCodeEntry.enterAtCustomName();
      await scheduling.eventCodeEntry.selectAtCustomColor();
      await scheduling.eventCodeEntry.save();
      await scheduling.module.switchToEventCodeEntryScreen();
      await scheduling.eventCodeEntry.verifyAdditionSuccessfullMessage();
      await scheduling.eventCodeEntry.close();
      await scheduling.module.switchToEventCode();
      await scheduling.eventCode.enterAtCustomName();
      await scheduling.eventCode.clickSearchButton();
      await scheduling.eventCode.verifyAtEventCodeUsingCustomName();
      await scheduling.eventCode.verifyAtEventColorUsingCustomName();
      await scheduling.eventCode.verifyAtEventNameUsingCustomName();
      await scheduling.eventCode.clickCustomNameInGrid();
      await scheduling.module.switchToEventCodeEntryScreen();
      await scheduling.eventCodeEntry.clickInactiveCheckbox();
      await scheduling.eventCodeEntry.save();
      await scheduling.module.switchToEventCodeEntryScreen();
      await scheduling.eventCodeEntry.verifyInactiveDateAsCurrentDate();
      await scheduling.eventCodeEntry.verifyUpdatesuccessfullMessage();
      // scheduling.switchToEventCodeEntryScreen(); //
      await scheduling.eventCodeEntry.close();
      await scheduling.module.switchToEventCode();
      await scheduling.eventCode.clickIncludeInactiveCheckbox();
      await scheduling.eventCode.clickSearchButton();
      await scheduling.eventCode.verifyAtEventCodeUsingCustomName();
      await scheduling.eventCode.verifyAtEventColorUsingCustomName();
      await scheduling.eventCode.verifyAtEventNameUsingCustomName();
      await scheduling.eventCode.verifyRowColorInActive(0);
    });
  });

  test('eventCode_187818', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '187818', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Event Resources');
      await scheduling.module.switchToEventResources();
      await scheduling.eventResources.clickAddNew();
      await scheduling.module.switchToEventResourcesEntryScreen();
      await scheduling.eventResourcesEntry.clickSave();
      await scheduling.eventResourcesEntry.verify8EnterMandatoryDataAckMsg();
      //		scheduling.switchToRotationCodeEntryScreen()
      await scheduling.module.switchToEventResourcesEntryScreen();
      await scheduling.eventResourcesEntry.enterAtPFCode();
      await scheduling.eventResourcesEntry.verifyResourcesNameFieldDisabled();
      await scheduling.eventResourcesEntry.clearPFCode();
      await scheduling.eventResourcesEntry.enterAtResourcesName();
      await scheduling.eventResourcesEntry.verifyPFCodeFieldDisabled();
      await scheduling.eventResourcesEntry.enterAtDisplayName();
      await scheduling.eventResourcesEntry.save();
      await scheduling.module.switchToEventResourcesEntryScreen();
      //		scheduling.eventResourcesEntry.verifyAtDisplayName();                                   //lines updated based on TC NO 48498
      await scheduling.eventResourcesEntry.verifyAdditionSuccessfullMessage();
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('1005-Error');//lines updated based on TC NO 48498
      await scheduling.eventResourcesEntry.close();
      await scheduling.module.switchToEventResources();
      await scheduling.eventResources.enterAtResourceName();
      await scheduling.eventResources.clickSearchButton();
      await scheduling.eventResources.verifyAtDisplayNameUsingResourceName();
      await scheduling.eventResources.clickResourceNameInGrid();
      await scheduling.module.switchToEventResourcesEntryScreen();
      await scheduling.eventResourcesEntry.clearResourceName();
      await scheduling.eventResourcesEntry.enterAtPFCode();
      await scheduling.eventResourcesEntry.clickInactiveCheckbox();
      await scheduling.eventResourcesEntry.save();
      await scheduling.eventResourcesEntry.verifyInactiveDateAsCurrentDate();
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('1005-Error');//lines updated based on TC NO 48498
      await scheduling.eventResourcesEntry.verifyUpdatesuccessFullMessage();
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('1005-Error');//lines updated based on TC NO 48498
      await scheduling.module.switchToEventResourcesEntryScreen();
      await scheduling.eventResourcesEntry.close();
      await scheduling.module.switchToEventResources();
      await scheduling.eventResources.clearResourceName();
      await scheduling.eventResources.enterAtPFCode();
      await scheduling.eventResources.clickIncludeInactiveCheckbox();
      await scheduling.eventResources.clickSearchButton();
      await scheduling.eventResources.verifyAtPFCodeInGrid(0);
      await scheduling.eventResources.verifyRowColorInActive(0);
    });
  });

});

// ===================== Part 2 - ScheduleSetting =====================
test.describe('ScheduleSetting', () => {

  test('ScheduleSetting_188779', async ({ scheduling, loginPage, loaderPage, testData, settings }) => {
    await withTestContext(testData, '188779', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Schedule Settings');
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.clickTourShiftHoursTab();
      await scheduling.scheduleSettings.scheduleSettingsTourTab.clickAddTourCodeButton();
      await scheduling.module.switchToTourEntryScreen();
      await scheduling.tourEntry.clickSave();
      await scheduling.tourEntry.verifyTourCodeAcknowledgeMessage();
      await scheduling.module.switchToTourEntryScreen();
      await scheduling.tourEntry.enterAtTourCode();
      await scheduling.tourEntry.enterAtDescription();
      const FromTime = await scheduling.tourEntry.tabTimeFromAndRead();
      const futureTime = await scheduling.tourEntry.enterTimeToAsFutureTimeandRead();
      await scheduling.tourEntry.enterNotes(50);
      await scheduling.tourEntry.saveScreen();
      await scheduling.module.switchToTourEntryScreen();
      await scheduling.tourEntry.verifyAdditionSuccessFullMessage();
      await scheduling.tourEntry.closeSCreen();
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.clickTourShiftHoursTab();
      await scheduling.scheduleSettings.scheduleSettingsTourTab.clickRefresh();
      await scheduling.scheduleSettings.scheduleSettingsTourTab.verifyAtDescriptionUsingCode();
      await scheduling.scheduleSettings.scheduleSettingsTourTab.verifyTimeFromCurrentDateUsingCode(FromTime);
      await scheduling.scheduleSettings.scheduleSettingsTourTab.verifyTimeToFutureDateUsingCode(futureTime);
      await scheduling.scheduleSettings.scheduleSettingsTourTab.selectAtCode1InGridRow();
      await scheduling.module.switchToTourEntryScreen();
      await scheduling.tourEntry.clickInactiveCheckbox();
      await scheduling.tourEntry.verifyInactiveDateAsCurrentDate();
      await scheduling.tourEntry.saveScreen();
      await scheduling.tourEntry.verifyUpdateSuccessFullMessage();
      await scheduling.module.switchToTourEntryScreen();
      await scheduling.tourEntry.closeSCreen();
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.clickTourShiftHoursTab();
      await scheduling.scheduleSettings.scheduleSettingsTourTab.clickIncludeInactiveCheckbox();
      await scheduling.scheduleSettings.scheduleSettingsTourTab.clickRefresh();
      await scheduling.scheduleSettings.scheduleSettingsTourTab.verifyInactiveRowColorUsingCode1();
    });
  });

  test('ScheduleSetting_188780', async ({ scheduling, loginPage, loaderPage, testData, settings }) => {
    await withTestContext(testData, '188780', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Schedule Settings');
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.clickRotationTab();
      await scheduling.scheduleSettings.scheduleSettingsRotationTab.clickAddRotationCodeButton();
      await scheduling.module.switchToRotationCodeEntryScreen();
      await scheduling.rotationCodeEntry.clickSave();
      await scheduling.rotationCodeEntry.verifyRotationCodeAcknowledgeMessage();
      await scheduling.module.switchToRotationCodeEntryScreen();
      await scheduling.rotationCodeEntry.enterAtRotationCode();
      await scheduling.rotationCodeEntry.enterAtDescription();
      await scheduling.rotationCodeEntry.selectAtTour();
      await scheduling.rotationCodeEntry.clickOnDutyRadioCheckbox();
      await scheduling.rotationCodeEntry.enterNotes(60);
      await scheduling.rotationCodeEntry.enterAtDayNo();
      await scheduling.rotationCodeEntry.clickAddButton();
      await scheduling.rotationCodeEntry.saveScreen();
      await scheduling.module.switchToRotationCodeEntryScreen();
      await scheduling.rotationCodeEntry.verifyadditionalSuccessfullMessage();
      await scheduling.rotationCodeEntry.closeSCreen();
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.clickRotationTab();
      await scheduling.scheduleSettings.scheduleSettingsRotationTab.verifyAtDescriptionUsingCode();
      await scheduling.scheduleSettings.scheduleSettingsRotationTab.selectAtCode1InGrid();
      await scheduling.module.switchToRotationCodeEntryScreen();
      await scheduling.rotationCodeEntry.selectAtTour1();
      await scheduling.rotationCodeEntry.clickOffDutyRadioCheckbox();
      await scheduling.rotationCodeEntry.enterAtDayNo();
      await scheduling.rotationCodeEntry.clickAddButton();
      await scheduling.rotationCodeEntry.verifyAtTour1AddedToGrid(1);
      await scheduling.rotationCodeEntry.clickInactiveCheckbox();
      await scheduling.rotationCodeEntry.verifyInactiveDateAsCurrentDate();
      await scheduling.rotationCodeEntry.saveScreen();
      await scheduling.rotationCodeEntry.verifyUpdateSuccessfullMessage();
      await scheduling.module.switchToRotationCodeEntryScreen();
      await scheduling.rotationCodeEntry.closeSCreen();
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.clickRotationTab();
      await scheduling.scheduleSettings.scheduleSettingsRotationTab.clickIncludeInactiveCheckbox();
      await scheduling.scheduleSettings.scheduleSettingsRotationTab.clickRefresh();
      await scheduling.scheduleSettings.scheduleSettingsRotationTab.verifyInactiveRowColorUsingCode1();
    });
  });

  test('ScheduleSetting_188781', async ({ scheduling, loginPage, loaderPage, testData, settings }) => {
    await withTestContext(testData, '188781', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Schedule Settings');
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.clickGroupTab();
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.clickAddGroupCodeButton();
      await scheduling.module.switchToGroupEntryScreen();
      await scheduling.groupEntry.clickSave();
      await scheduling.groupEntry.verifyGroupCodeAcknowledgeMessage();
      await scheduling.module.switchToGroupEntryScreen();
      await scheduling.groupEntry.enterAtGroupCode(0);
      await scheduling.groupEntry.enterAtDescription(0);
      await scheduling.groupEntry.selectAtShift(0);
      await scheduling.groupEntry.selectScheduleColor();
      await scheduling.groupEntry.selectAtRotationCode();
      await scheduling.groupEntry.tabStartDate();
      await scheduling.groupEntry.enterNotes();
      await scheduling.groupEntry.enterAtCalenderDisplayLabel(0);
      await scheduling.groupEntry.saveScreen();
      await scheduling.groupEntry.verifyadditionalSuccessfullMessage();
      await scheduling.groupEntry.closeScreen();
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.clickRefresh();
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.verifyAtDescriptionUsingGroup();
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.verifyAtDisplayNameUsingGroup();
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.verifyAtRotationUsingGroup();
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.verifyAtShiftUsingGroup();
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.selectAtGroup1InGrid();
      await scheduling.module.switchToGroupEntryScreen();
      await scheduling.groupEntry.clickInactiveCheckbox();
      await scheduling.groupEntry.verifyInactiveDateAsCurrentDate();
      await scheduling.groupEntry.saveScreen();
      await scheduling.groupEntry.closeScreen();
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.clickIncludeInactiveCheckbox();
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.clickRefresh();
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.verifyInactiveRowColorUsingGroup1();
    });
  });

  test('ScheduleSetting_13147', async ({ scheduling, loginPage, loaderPage, testData, settings, home }) => {
    await withTestContext(testData, '13147', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Schedule Settings');
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.clickTourShiftHoursTab();
      await scheduling.scheduleSettings.scheduleSettingsTourTab.clickAddTourCodeButton();
      await scheduling.module.switchToTourEntryScreen();
      await scheduling.tourEntry.selectAtJuris();
      await scheduling.tourEntry.enterAtTourCode();
      await scheduling.tourEntry.enterAtDescription();
      await scheduling.tourEntry.clickPrintIcon();
      await scheduling.tourEntry.verifyEnteredTourCodeIsNotVanishing();
      await scheduling.tourEntry.verifyEnteredDescriptionIsNotVanishing();
      await scheduling.tourEntry.saveScreen();
      await scheduling.module.switchToTourEntryScreen();
      await scheduling.tourEntry.verifyAdditionSuccessFullMessage();
      await scheduling.tourEntry.closeSCreen();
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.clickTourShiftHoursTab();
      await scheduling.scheduleSettings.scheduleSettingsTourTab.selectAtTourCodeInGrid();
      await scheduling.module.switchToTourEntryScreen();
      await scheduling.tourEntry.clickPrintIcon();
      await home.module.switchToSelectReport();
      await home.selectReport.VerifySelectReportScreenOpened();
      await scheduling.module.switchToTourEntryScreen();
    });
  });

});

// ===================== Part 3 - scheduleTime =====================
test.describe('scheduleTime', () => {

  test('scheduleTime_189977', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '189977', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Time Category');
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.clickAddTimeCategoryButton();
      await scheduling.module.switchToTimeCategoryEntryScreen();
      await scheduling.timeCategoryEntry.clickSave();
      await scheduling.timeCategoryEntry.verifyTimeCategoryCodeAcknowledgeMessage();
      await scheduling.module.switchToTimeCategoryEntryScreen();
      await scheduling.timeCategoryEntry.enterAtTimeCategoryCode();
      await scheduling.timeCategoryEntry.enterAtDescription();
      await scheduling.timeCategoryEntry.enterNotes();
      await scheduling.timeCategoryEntry.selectAtScheduleColor();
      await scheduling.timeCategoryEntry.save();
      await scheduling.module.switchToTimeCategoryEntryScreen();
      await scheduling.timeCategoryEntry.verifyAdditionSuccessFullMessage();
      await scheduling.timeCategoryEntry.closeScreen();
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.clickRefresh();
      await scheduling.timeCategory.verifyAtTimeCategoryInGrid();
      await scheduling.timeCategory.clickAtTimeCategory1InGrid();
      await scheduling.module.switchToTimeCategoryEntryScreen();
      await scheduling.timeCategoryEntry.clickInactiveCheckbox();
      await scheduling.timeCategoryEntry.verifyWarningConfirmMessage();
      await scheduling.timeCategoryEntry.clickYes();
      await scheduling.timeCategoryEntry.verifyInactiveDateAsCurrentDate();
      await scheduling.timeCategoryEntry.save();
      await scheduling.timeCategoryEntry.verifyUpdateSuccessFullMessage();
      await scheduling.module.switchToTimeCategoryEntryScreen();
      await scheduling.timeCategoryEntry.closeScreen();
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.clickRefresh();
      await scheduling.timeCategory.clickIncludeInactiveCheckBox();
      await scheduling.timeCategory.verifyAtTimeCategory1InactiveRowColor();
    });
  });

  test('scheduleTime_189978', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '189978', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Time Category');
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.clickAddTimeTypeButton();
      await scheduling.module.switchToTimeTypeEntryScreen();
      await scheduling.timeTypeEntry.clickSave();
      await scheduling.timeTypeEntry.verifyTimeTypeCodeAcknowledgeMessage();
      await scheduling.module.switchToTimeTypeEntryScreen();
      await scheduling.timeTypeEntry.enterAtTimeTypeCode();
      await scheduling.timeTypeEntry.enterAtDescription();
      await scheduling.timeTypeEntry.enterNotes();
      await scheduling.timeTypeEntry.clickSave();
      await scheduling.timeTypeEntry.verifyTimeCategoryAcknowledgeMessage();
      await scheduling.module.switchToTimeTypeEntryScreen();
      await scheduling.timeTypeEntry.selectAtTimeCategory();
      await scheduling.timeTypeEntry.enterAtMultiplicationFactor();
      await scheduling.timeTypeEntry.selectReportable();
      await scheduling.timeTypeEntry.selectCodePermission();
      await scheduling.timeTypeEntry.save();
      await scheduling.module.switchToTimeTypeEntryScreen();
      await scheduling.timeTypeEntry.verifyAdditionSuccessFullMessage();
      await scheduling.timeTypeEntry.close();
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.clickRefresh();
      await scheduling.timeCategory.clickExpandAllCheckBox();
      await scheduling.timeCategory.verifyAtTimeTypeInGrid();
      await scheduling.timeCategory.clickAtTimeType1InGrid();
      await scheduling.module.switchToTimeTypeEntryScreen();
      await scheduling.timeTypeEntry.clickInactiveCheckbox();
      await scheduling.timeTypeEntry.verifyInactiveDate();
      await scheduling.timeTypeEntry.save();
      await scheduling.timeTypeEntry.verifyUpdateSuccessFullMessage();
      await scheduling.module.switchToTimeTypeEntryScreen();
      await scheduling.timeTypeEntry.close();
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.clickRefresh();
      await scheduling.timeCategory.clickIncludeInactiveCheckBox();
      await scheduling.timeCategory.verifyAtTimeType1InactiveRowColor();
    });
  });

  test('scheduleTime_PoliceSprintScheduling_135730', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, 'PoliceSprintScheduling_135730', async () => {
      await loginPage.loginScreen.logon();
      await textContext.setAttribute('testID', '135730');
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Time Entry');
      await scheduling.module.switchToTimeEntryScreen();
      await scheduling.timeEntry.enterAtPF();
      await scheduling.timeEntry.selectAtTimeCategory(); // not able to select by value, instead of used index value;
      await scheduling.timeEntry.selectAtTimeType();
      await scheduling.timeEntry.enterRequestedForDate();
      await scheduling.timeEntry.enterRequestedForTime();
      await scheduling.timeEntry.enterRequestedToDate();
      await scheduling.timeEntry.enterHours();
      await scheduling.timeEntry.enterNotes();
      await scheduling.timeEntry.saveScreen();
      await scheduling.module.switchToTimeEntryScreen();
      await scheduling.timeEntry.closeScreen();
      await loaderPage.navigateToScreen('Time Search');
      await scheduling.module.switchToTimeSearch();
      await scheduling.timeSearch.enterAtPFCode();
      await scheduling.timeSearch.clickDateClearButton();
      await scheduling.timeSearch.clickSearchButton();
      await scheduling.timeSearch.verifyAtTimeCategory(0);
      await scheduling.timeSearch.verifyAtTimeType(0);
      await scheduling.timeSearch.selectAtPFCodeInGrid();
      await scheduling.module.switchToTimeEntryScreen();
      await scheduling.timeEntry.verifyAtPFCode();
      await scheduling.timeEntry.veifyAtTimeCategory();
      await scheduling.timeEntry.veifyAtTimeType();
      await scheduling.timeEntry.closeScreen();
    });
  });

  test('scheduleTime_Police2017Sprint1Scheduling_143759', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, 'Police2017Sprint1Scheduling_143759', async () => {
      await loginPage.loginScreen.logon();
      await textContext.setAttribute('testID', '143759');
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Time Entry');
      await scheduling.module.switchToTimeEntryScreen();
      await scheduling.timeEntry.enterAtPF();
      await scheduling.timeEntry.selectAtTimeCategory();
      await scheduling.timeEntry.selectAtTimeType();
      await scheduling.timeEntry.enterRequestedForDate();
      await scheduling.timeEntry.enterRequestedForTime();
      await scheduling.timeEntry.enterRequestedToDate();
      await scheduling.timeEntry.enterHours();
      await scheduling.timeEntry.enterNotes();
      await scheduling.timeEntry.saveScreen();
      await scheduling.module.switchToTimeEntryScreen();
      await scheduling.timeEntry.switchToCalenderTab();
      await scheduling.timeEntry.calenderTab.clickShowFullCalenderButton();
      await scheduling.module.switchToCalenderScreen();
      // need to add step
    });
  });

  test('scheduleTime_Police2017Sprint1Scheduling_143760', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, 'Police2017Sprint1Scheduling_143760', async () => {
      await loginPage.loginScreen.logon();
      await textContext.setAttribute('testID', '143760');
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Time Entry');
      await scheduling.module.switchToTimeEntryScreen();
      await scheduling.timeEntry.enterAtPF();
      await scheduling.timeEntry.selectAtTimeCategory();
      await scheduling.timeEntry.changeAtPF();
      await scheduling.timeEntry.selectTimeCategoryAsVaccation();
      await scheduling.timeEntry.verifyTimeResonCodeShow();
    });
  });

  test('scheduleTime_Police2017Sprint1Scheduling_144485', async ({ scheduling, loginPage, loaderPage, testData, settings }) => {
    await withTestContext(testData, 'Police2017Sprint1Scheduling_144485', async () => {
      await loginPage.loginScreen.logon();
      await textContext.setAttribute('testID', '144485');
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Time Search');
      await scheduling.module.switchToTimeSearch();
      await scheduling.timeSearch.clickDivisionText();
      await settings.module.switchToRepositoryEntry();
      await settings.repositoryEntry.selectFieldUsageAsHide();
      await settings.repositoryEntry.saveScreen();
      await settings.module.switchToRepositoryEntry();
      await settings.repositoryEntry.closeScreen();
      await scheduling.module.switchToTimeSearch();
      await scheduling.timeSearch.verifyDivisionFieldHide();
      await scheduling.timeSearch.clickSectionText();
      await settings.module.switchToRepositoryEntry();
      await settings.repositoryEntry.selectFieldUsageAsHide();
      await settings.repositoryEntry.saveScreen();
      await settings.module.switchToRepositoryEntry();
      await settings.repositoryEntry.closeScreen();
      await scheduling.module.switchToTimeSearch();
      await scheduling.timeSearch.verifySectionFieldHide();
      await scheduling.timeSearch.clickTeamText();
      await settings.module.switchToRepositoryEntry();
      await settings.repositoryEntry.selectFieldUsageAsHide();
      await settings.repositoryEntry.saveScreen();
      await settings.module.switchToRepositoryEntry();
      await settings.repositoryEntry.closeScreen();
      await scheduling.module.switchToTimeSearch();
      await scheduling.timeSearch.verifyTeamFieldHide();
      await scheduling.timeSearch.clickGroupText();
      await settings.module.switchToRepositoryEntry();
      await settings.repositoryEntry.selectFieldUsageAsHide();
      await settings.repositoryEntry.saveScreen();
      await settings.module.switchToRepositoryEntry();
      await settings.repositoryEntry.closeScreen();
      await scheduling.module.switchToTimeSearch();
      await scheduling.timeSearch.verifyGroupFieldHide();
      await loaderPage.navigateToScreen('Trade Swap Search');
      await scheduling.module.switchToTradeSwapSearchScreen();
      await scheduling.tradeSwapSearch.clickDivisionText();
      await settings.module.switchToRepositoryEntry();
      await settings.repositoryEntry.selectFieldUsageAsHide();
      await settings.repositoryEntry.saveScreen();
      await settings.module.switchToRepositoryEntry();
      await settings.repositoryEntry.closeScreen();
      await scheduling.module.switchToTradeSwapSearchScreen();
      await scheduling.tradeSwapSearch.verifyDivisionFieldHide();
      await scheduling.tradeSwapSearch.clickSectionText();
      await settings.module.switchToRepositoryEntry();
      await settings.repositoryEntry.selectFieldUsageAsHide();
      await settings.repositoryEntry.saveScreen();
      await settings.module.switchToRepositoryEntry();
      await settings.repositoryEntry.closeScreen();
      await scheduling.module.switchToTradeSwapSearchScreen();
      await scheduling.tradeSwapSearch.verifySectionFieldHide();
      await scheduling.tradeSwapSearch.clickTeamText();
      await settings.module.switchToRepositoryEntry();
      await settings.repositoryEntry.selectFieldUsageAsHide();
      await settings.repositoryEntry.saveScreen();
      await settings.module.switchToRepositoryEntry();
      await settings.repositoryEntry.closeScreen();
      await scheduling.module.switchToTradeSwapSearchScreen();
      await scheduling.tradeSwapSearch.verifyTeamFieldHide();
    });
  });

});

// ===================== Part 4 - Q2SchedulingDefect2025 =====================
test.describe('Q2SchedulingDefect2025', () => {

  test('Q2SchedulingDefect2025_200000', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '200000', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Calendar');
      await scheduling.module.switchToCalendarScreen();
      await scheduling.calendar.verifyErrorAcknowledgePopupNotAvailable();
      await scheduling.calendar.selectShowMyCalendarCheckbox();
      await scheduling.calendar.clickSearchAppointments();
    });
  });

  test('Q2SchedulingDefect2025_50916', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '50916', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Time Search');
      await scheduling.module.switchToTimeSearch();
      await scheduling.timeSearch.clickTimeSheetRadioButton();
      await scheduling.timeSearch.clickSearchButton();
      // objectIdentification.smokeTest.verifyAcknowledgeMessagesPopupsExistGlobal('Time Search')
    });
  });

  test('Q2SchedulingDefect2025_50916A', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '50916A', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Time Report');
      await scheduling.module.switchToTimeReport();
      await scheduling.timeReport.clickAddNewButton();
      await scheduling.module.switchToTimeEntryScreen();
      await scheduling.timeEntry.verifyNoRecordFoundPopupNotAvailable();
    });
  });

  test('Q2SchedulingDefect2025_50916B', async ({ scheduling, loginPage, loaderPage, testData, settings }) => {
    await withTestContext(testData, '50916B', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Schedule Settings');
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.clickGroupTab();
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.clickAddGroupCodeButton();
      await scheduling.module.switchToGroupEntryScreen();
      await scheduling.groupEntry.enterAtGroupCode(0);
      await scheduling.groupEntry.enterAtDescription(0);
      await scheduling.groupEntry.selectShift();
      await scheduling.groupEntry.selectRotationCode();
      await scheduling.groupEntry.tabStartDate();
      await scheduling.groupEntry.enterAtCalenderDisplayLabel(0);
      await scheduling.groupEntry.verifyCalenderDisplayLabelLength();
      await scheduling.groupEntry.saveScreen();
      await scheduling.groupEntry.verifyErrorAcknowledgePopupNotAvailable();
      await scheduling.module.switchToGroupEntryScreen();
      await scheduling.groupEntry.verifyadditionalSuccessfullMessage();
      await scheduling.groupEntry.verifyDeleteIconIsEnabled();
    });
  });

  test('Q2SchedulingDefect2025_50916C', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '50916C', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Job Grade');
      await scheduling.module.switchToJobGradeScreen();
      await scheduling.jobGrade.clickAddJobGradeButton();
      await scheduling.module.switchToJobGradeEntry();
      await scheduling.jobGradeEntry.enterAtJobGradeCode();
      await scheduling.jobGradeEntry.enterAtDescription();
      await scheduling.jobGradeEntry.save();
      await scheduling.module.switchToJobGradeEntry();
      await scheduling.jobGradeEntry.clickVacationCarryOverButton();
      await scheduling.module.switchToCarryOverAndAccrualEntry();
      await scheduling.carryOverAccrualEntry.clickYesToCanHoursBeCarriedOverToNextYear();
      await scheduling.carryOverAccrualEntry.selectAtTimeTypeCode(1);
      await scheduling.carryOverAccrualEntry.enterAtAnnualMaximumHoursCap(1);
      await scheduling.carryOverAccrualEntry.verifyAnnualMaximumHoursCapIsBlank();
      await scheduling.carryOverAccrualEntry.enterAtMaximumHoursCarryOver(1);
      await scheduling.carryOverAccrualEntry.verifyMaximumHoursCarryOverIsBlank();
      await scheduling.carryOverAccrualEntry.enterAtLifetimeMaxHoursCap(1);
      await scheduling.carryOverAccrualEntry.verifyLifetimeMaximumHoursCapIsBlank();
      await scheduling.carryOverAccrualEntry.enterAtAnnualMaximumHoursCap(2);
      await scheduling.carryOverAccrualEntry.enterAtMaximumHoursCarryOver(2);
      await scheduling.carryOverAccrualEntry.verify1146AcknowledgePopup();
      await scheduling.module.switchToCarryOverAndAccrualEntry();
      await scheduling.carryOverAccrualEntry.enterAtLifetimeMaxHoursCap(2);
      await scheduling.carryOverAccrualEntry.clickSave();
      await scheduling.module.switchToCarryOverAndAccrualEntry();
      await scheduling.carryOverAccrualEntry.verifyUpdateSuccessfulBottomMsg();
      await scheduling.carryOverAccrualEntry.verifyAtMaximumHoursCarryOver();
    });
  });

  test('Q2SchedulingDefect2025_74776', async ({ scheduling, loginPage, loaderPage, testData, home }) => {
    await withTestContext(testData, '74776', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.clickSchedulerIcon();
      await home.module.switchToCalendarScreen();
      await home.calendar.verifyScreenHeightAndWidth();
      await home.calendar.closeScreen();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Calendar');
      await home.module.switchToCalendarScreen();
      await home.calendar.verifyScreenHeightAndWidth();
    });
  });

  test('Q2SchedulingDefect2025_76340', async ({ scheduling, loginPage, loaderPage, testData, popupPage, settings }) => {
    await withTestContext(testData, '76340', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparamete4357('False');
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreenByScreenID('1058');
      await scheduling.module.switchToCalendarScreen();
      await scheduling.calendar.clickSearchAppointments();
      await scheduling.appointmentsPopup.selectAtShift(1);//;
      await scheduling.appointmentsPopup.selectAtGroup(1);//;
      await scheduling.appointmentsPopup.clickScheduleView();//;
      await scheduling.appointmentsPopup.clickShowButton();//;
      await scheduling.module.switchToCalendarScreen();
      await scheduling.module.switchToCalenderScheduledViewFrame();//;
      await scheduling.calendar.verifyAtPFInGrid(1);//;
    });
  });

});

// ===================== Part 5 - 2020DefectTestCases =====================
test.describe('2020DefectTestCases', () => {

  test('2020DefectTestCases_254467', async ({ scheduling, loginPage, loaderPage, testData, popupPage }) => {
    await withTestContext(testData, '254467', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Calendar');
      await scheduling.module.switchToCalendarScreen();
      await scheduling.calendar.doubleClickInCalendarByCurrentDate();
      await scheduling.appointmentsPopup.enterAtSubject();
      await scheduling.appointmentsPopup.enterStartTime();
      await scheduling.appointmentsPopup.verifyStartTimeAsCurrentDate();
      await scheduling.appointmentsPopup.enterAtEndTime();
      await scheduling.appointmentsPopup.selectAtEventType();
      await scheduling.appointmentsPopup.selectAtResource();
      await scheduling.appointmentsPopup.save();
      await scheduling.appointmentsPopup.verifyAppointmentSavedSuccessfully();
    });
  });

  test('2020DefectTestCases_256805', async ({ scheduling, loginPage, loaderPage, testData, settings }) => {
    await withTestContext(testData, '256805', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparameter4322AsTrue();
      await loaderPage.navigateToScreen('Trade Swap Search');
      await scheduling.module.switchToTradeSwapSearchScreen();
      /*;
      * scheduling.switchToTradeSwapEntry(); scheduling.tradeSwapEntry.enterAtPF1();
      * scheduling.tradeSwapEntry.enterAtPF2();
      */;
    });
  });

});

// ===================== Part 6 - SchedulingEntrySmoke =====================
test.describe('SchedulingEntrySmoke', () => {

  test('SchedulingEntrySmoke_EvntCdeEnt', async ({ scheduling, loginPage, loaderPage, testData, popupPage }) => {
    await withTestContext(testData, 'EvntCdeEnt', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Event Code');
      await scheduling.module.switchToEventCode();
      await scheduling.eventCode.clickAddNew();
      await scheduling.module.switchToEventCodeEntryScreen();
      await scheduling.eventCodeEntry.clickSave();
      await scheduling.eventCodeEntry.verifyEventCodeAcknowledgeMessage();
      await popupPage.acknowledge.okIfWindowExist('AfterClick Save');
      await scheduling.module.switchToEventCodeEntryScreen();
      await scheduling.eventCodeEntry.enterEventCode();
      await scheduling.eventCodeEntry.enterEventName();
      await scheduling.eventCodeEntry.save();
      await scheduling.module.switchToEventCodeEntryScreen();
      await popupPage.acknowledge.okIfWindowExist('AfterClick Save');
      await scheduling.eventCodeEntry.verifyAdditionSuccessfullMessage();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('EventCode Entry')
    });
  });

  test('SchedulingEntrySmoke_EvntResrce', async ({ scheduling, loginPage, loaderPage, testData, popupPage }) => {
    await withTestContext(testData, 'EvntResrce', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Event Resources');
      await scheduling.module.switchToEventResources();
      await scheduling.eventResources.clickAddNew();
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
      await scheduling.module.switchToEventResourcesEntryScreen();
      await scheduling.eventResourcesEntry.enterResourcesName();
      await scheduling.eventResourcesEntry.verifyPFCodeFieldDisabled();
      await scheduling.eventResourcesEntry.clickRefresh();
      await popupPage.acknowledge.okIfWindowExist('AfterClick Refresh');
      await scheduling.eventResourcesEntry.selectPfCode();
      await scheduling.module.switchToEventResourcesEntryScreen();
      await scheduling.eventResourcesEntry.verifyResourcesNameFieldDisabled();
      await scheduling.eventResourcesEntry.save();
      await scheduling.module.switchToEventResourcesEntryScreen();
      await popupPage.acknowledge.okIfWindowExist('AfterClick Save');
      await scheduling.eventResourcesEntry.verifyAdditionSuccessfullMessage();
      await scheduling.eventResourcesEntry.verifyDisplayNameIsNotNull();
      // objectIdentification.smokeTest.clickOnEntryScreensTabs('EventResources Entry')
    });
  });

  test('SchedulingEntrySmoke_TourEnt', async ({ scheduling, loginPage, loaderPage, testData, popupPage, settings }) => {
    await withTestContext(testData, 'TourEnt', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Schedule Settings');
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.clickTourShiftHoursTab();
      await scheduling.scheduleSettings.scheduleSettingsTourTab.clickAddTourCodeButton();
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
      await scheduling.module.switchToTourEntryScreen();
      await scheduling.tourEntry.enterTourCode();
      await scheduling.tourEntry.enterDescription();
      await scheduling.tourEntry.saveScreen();
      await scheduling.module.switchToTourEntryScreen();
      await popupPage.acknowledge.okIfWindowExist('AfterClick Save');
      await scheduling.module.switchToTourEntryScreen();
      await scheduling.tourEntry.verifyAdditionSuccessFullMessage();
    });
  });

  test('SchedulingEntrySmoke_RotatnCdeEnt', async ({ scheduling, loginPage, loaderPage, testData, popupPage, settings }) => {
    await withTestContext(testData, 'RotatnCdeEnt', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Schedule Settings');
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.clickRotationTab();
      await scheduling.scheduleSettings.scheduleSettingsRotationTab.clickAddRotationCodeButton();
      //         popup.acknowledge.okIfWindowExist('AfterClick RotationTab')
      //
      //         scheduling.scheduleSettings.scheduleSettingsRotationTab.clickAddRotationCodeButton()
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
      await scheduling.module.switchToRotationCodeEntryScreen();
      await scheduling.rotationCodeEntry.enterRotationCode(4);
      await scheduling.rotationCodeEntry.enterDescription(8);
      await scheduling.rotationCodeEntry.clickOnDutyRadioCheckbox();
      const SelectedTour = await scheduling.rotationCodeEntry.selectTour();
      await scheduling.rotationCodeEntry.enterDayNo(1);
      await scheduling.rotationCodeEntry.clickAddButton();
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddButton');
      await scheduling.rotationCodeEntry.verifyTourInGridForRandomByReasonCode(SelectedTour);
      await scheduling.rotationCodeEntry.saveScreen();
      await popupPage.acknowledge.okIfWindowExist('AfterClick Save');
      await scheduling.module.switchToRotationCodeEntryScreen();
      await scheduling.rotationCodeEntry.verifyadditionalSuccessfullMessage();
    });
  });

  test('SchedulingEntrySmoke_GrpEnt', async ({ scheduling, loginPage, loaderPage, testData, popupPage, settings }) => {
    await withTestContext(testData, 'GrpEnt', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Schedule Settings');
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.clickGroupTab();
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.clickAddGroupCodeButton();
      await popupPage.acknowledge.okIfWindowExist('AfterClick GroupTab');
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
      await scheduling.module.switchToGroupEntryScreen();
      await scheduling.groupEntry.enterGroupCode();
      await scheduling.groupEntry.enterDescription();
      await scheduling.groupEntry.selectShift();
      await scheduling.groupEntry.selectRotationCode();
      await scheduling.groupEntry.tabStartDate();
      await scheduling.groupEntry.enterCalenderDisplayLabel();
      await scheduling.groupEntry.saveScreen();
      await popupPage.acknowledge.okIfWindowExist('AfterClick Save');
      await scheduling.module.switchToGroupEntryScreen();
      await scheduling.groupEntry.verifyadditionalSuccessfullMessage();
    });
  });

  test('SchedulingEntrySmoke_CatgryEnt', async ({ scheduling, loginPage, loaderPage, testData, popupPage }) => {
    await withTestContext(testData, 'CatgryEnt', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Time Category');
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.clickAddTimeCategoryButton();
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
      await scheduling.module.switchToTimeCategoryEntryScreen();
      await scheduling.timeCategoryEntry.enterTimeCategoryCode();
      await scheduling.timeCategoryEntry.enterDescription();
      await scheduling.timeCategoryEntry.selectScheduleColor();
      await scheduling.timeCategoryEntry.save();
      await popupPage.acknowledge.okIfWindowExist('AfterClick Save');
      await scheduling.module.switchToTimeCategoryEntryScreen();
      await scheduling.timeCategoryEntry.verifyAdditionSuccessFullMessage();
    });
  });

  test('SchedulingEntrySmoke_TmetpeEnt', async ({ scheduling, loginPage, loaderPage, testData, popupPage }) => {
    await withTestContext(testData, 'TmetpeEnt', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Time Category');
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.clickAddTimeTypeButton();
      await popupPage.acknowledge.okIfWindowExist('AfterClick AddNew');
      await scheduling.module.switchToTimeTypeEntryScreen();
      await scheduling.timeTypeEntry.enterTimeTypeCode();
      await scheduling.timeTypeEntry.enterDescription();
      await scheduling.timeTypeEntry.selectTimeCategory();
      await scheduling.timeTypeEntry.enterMultiplicationFactor();
      await scheduling.timeTypeEntry.save();
      await popupPage.acknowledge.okIfWindowExist('AfterClick Save');
      await scheduling.module.switchToTimeTypeEntryScreen();
      await scheduling.timeTypeEntry.verifyAdditionSuccessFullMessage();
    });
  });

  test('SchedulingEntrySmoke_holiday', async ({ scheduling, loginPage, loaderPage, testData, popupPage }) => {
    await withTestContext(testData, 'holiday', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Holidays');
      await scheduling.module.switchToHolidaysScreen();
      const Date = await scheduling.holiday.enterHolidayDateasFutreDate();
      const Description = await scheduling.holiday.enterDescription();
      await scheduling.holiday.clickAdd();
      await popupPage.acknowledge.okIfWindowExist('AfterClick Add');//;
      await scheduling.holiday.saveScreen();
      await popupPage.acknowledge.okIfWindowExist('AfterClick Save');
      await scheduling.module.switchToHolidaysScreen();
      await scheduling.holiday.verifyDateByDescriptionInGrid(Date, Description);
      await scheduling.holiday.verifyAdditionSuccessFullMessage();
    });
  });

});

// ===================== Part 7 - Q1SchedulingDefect2024 =====================
test.describe('Q1SchedulingDefect2024', () => {

  test('Q1SchedulingDefect2024_21785', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '21785', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Time Category');
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.clickExpandAllCheckBox();
      await scheduling.timeCategory.clickAtTimeTypeInGrid();
      await scheduling.module.switchToTimeTypeEntryScreen();
      await scheduling.timeTypeEntry.verifyAtTimeTypeCode();
      await scheduling.timeTypeEntry.verifyAtTimeCategory();
      await scheduling.timeTypeEntry.clickInactiveCheckbox();
      await scheduling.timeTypeEntry.clickSave();
      await scheduling.timeTypeEntry.verifyUpdateSuccessFullMessage();
      await scheduling.timeTypeEntry.saveAndClose();
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.clickIncludeInactiveCheckBox();
      await scheduling.timeCategory.verifyAtTimeType1InactiveRowColor();
      await loaderPage.navigateToScreen('Time Entry');
      await scheduling.module.switchToTimeEntryScreen();
      await scheduling.timeEntry.enterAtPF();
      await scheduling.timeEntry.selectAtTimeCategory();
      await scheduling.timeEntry.clickTimeTypeDropdown();
      await scheduling.timeEntry.verifyAtTimeTypeNotListed();
    });
  });

  test('Q1SchedulingDefect2024_23192', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '23192', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Time Category');
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.clickAddTimeCategoryButton();
      await scheduling.module.switchToTimeCategoryEntryScreen();
      await scheduling.timeCategoryEntry.selectAtJuris();
      await scheduling.timeCategoryEntry.enterAtTimeCategoryCode();
      await scheduling.timeCategoryEntry.enterAtDescription();
      await scheduling.timeCategoryEntry.selectAtScheduleColor();
      await scheduling.timeCategoryEntry.save();
      await scheduling.timeCategoryEntry.verifyAdditionSuccessFullMessage();
      await scheduling.timeCategoryEntry.verifyAtJuris();
      await scheduling.timeCategoryEntry.verifyJurisFieldIsDisabled();
      await scheduling.timeCategoryEntry.verifyDeleteIconIsEnabled();//updated;
    });
  });

  test('Q1SchedulingDefect2024_18596', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '18596', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Job Grade');
      await scheduling.module.switchToJobGradeScreen();
      await scheduling.jobGrade.clickAddJobGradeButton();
      await scheduling.module.switchToJobGradeEntry();
      await scheduling.jobGradeEntry.selectAtCopyFromJobGrade();
      await scheduling.jobGradeEntry.enterAtJobGradeCode();
      await scheduling.jobGradeEntry.enterAtDescription();
      //scheduling.jobGradeEntry.tabEffectiveFromAndToDate()
      await scheduling.jobGradeEntry.save();
      await scheduling.module.switchToJobGradeEntry();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await scheduling.jobGradeEntry.clickVacationCarryOverButton();
      await scheduling.module.switchToCarryOverAndAccrualEntry();
      await scheduling.carryOverAccrualEntry.clickYesToCanHoursBeCarriedOverToNextYear();
      await scheduling.carryOverAccrualEntry.selectAtTimeTypeCode(1);
      await scheduling.carryOverAccrualEntry.clickSave();
      await scheduling.carryOverAccrualEntry.verifyEnterTimeReasonAcknowledgeMsg();
      await scheduling.module.switchToCarryOverAndAccrualEntry();
      await scheduling.carryOverAccrualEntry.selectAtTimeTypeCode(2);
      await scheduling.carryOverAccrualEntry.clickYesToApplyFiscalPeriod();
      await scheduling.carryOverAccrualEntry.selectAtBaseMonth();
      await scheduling.carryOverAccrualEntry.selectAtDay();
      await scheduling.carryOverAccrualEntry.clickSave();
      await scheduling.carryOverAccrualEntry.verifyEnterBaseDayAcknowledgeMsg();
      await scheduling.module.switchToCarryOverAndAccrualEntry();
    });
  });

  test('Q1SchedulingDefect2024_44320', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '44320', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Job Grade');
      await scheduling.module.switchToJobGradeScreen();
      await scheduling.jobGrade.selectRowByAtJobGrade();
      await scheduling.module.switchToJobGradeEntry();
      await scheduling.jobGradeEntry.save();//added;
      await scheduling.module.switchToJobGradeEntry();
      // objectIdentification.manualIdentify.verifyUpdateSuccessful();//added
      await scheduling.module.switchToJobGradeEntry();
      await scheduling.jobGradeEntry.clickVacationCarryOverButton();
      await scheduling.module.switchToCarryOverAndAccrualEntry();
      await scheduling.carryOverAccrualEntry.clickYesToAllowAutomaticAccrualForThisCategory();
      await scheduling.carryOverAccrualEntry.selectAtAccrueBy(1);
      await scheduling.carryOverAccrualEntry.verifyAtAccrueHoursByLevelInGrid(1);
      await scheduling.carryOverAccrualEntry.selectAtAccrueBy(2);
      await scheduling.carryOverAccrualEntry.verifyAtAccrueHoursByLevelInGrid(2);
      await scheduling.carryOverAccrualEntry.selectAtAccrueBy(3);
      await scheduling.carryOverAccrualEntry.verifyAtAccrueHoursByLevelInGrid(3);
      await scheduling.carryOverAccrualEntry.selectAtAccrueBy(4);
      await scheduling.carryOverAccrualEntry.verifyAtAccrueHoursByLevelInGrid(4);
      await scheduling.carryOverAccrualEntry.selectAtAccrueBy(5);
      await scheduling.carryOverAccrualEntry.verifyAtAccrueHoursByLevelInGrid(5);
      await scheduling.carryOverAccrualEntry.selectAtAccrueBy(6);
      await scheduling.carryOverAccrualEntry.verifyAtAccrueHoursByLevelInGrid(6);
      // objectIdentification.windowHandle.closeAllThePopupScreens();//added
      //verification method added below steps
      await scheduling.module.switchToJobGradeScreen();
      await scheduling.jobGrade.clickAddJobGradeButton();
      await scheduling.module.switchToJobGradeEntry();
      await scheduling.jobGradeEntry.enterAtJobGradeCode1();
      await scheduling.jobGradeEntry.enterAtDescription();
      await scheduling.jobGradeEntry.save();
      await scheduling.module.switchToJobGradeEntry();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
    });
  });

  test('Q1SchedulingDefect2024_48587', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '48587', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Time Entry');
      await scheduling.module.switchToTimeEntryScreen();
      await scheduling.timeEntry.clickTradesSwapsLink();
      await scheduling.module.switchToTradeSwapEntry();
      await scheduling.tradeSwapEntry.switchToCalenderTab();
      await scheduling.tradeSwapEntry.calenderTab.clickShowFullCalenderButton();
      await scheduling.module.switchToCalendarScreen();
      // objectIdentification.windowHandle.verifyWindowExists('Calendar')
      await scheduling.calendar.close();
      await scheduling.module.switchToTradeSwapEntry();
      await scheduling.tradeSwapEntry.close();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Time Report');
      await scheduling.module.switchToTimeReport();
      await scheduling.timeReport.clickAddNewButton();
      await scheduling.module.switchToTimeEntryScreen();
      await scheduling.timeEntry.clickTradesSwapsLink();
      await scheduling.module.switchToTradeSwapEntry();
      await scheduling.tradeSwapEntry.switchToCalenderTab();
      await scheduling.tradeSwapEntry.calenderTab.clickShowFullCalenderButton();
      await scheduling.module.switchToCalendarScreen();
      // objectIdentification.windowHandle.verifyWindowExists('Calendar')
      await scheduling.calendar.close();
      await scheduling.module.switchToTradeSwapEntry();
      await scheduling.tradeSwapEntry.close();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Time Search');
      await scheduling.module.switchToTimeSearch();
      await scheduling.timeSearch.clickAddNewButton();
      await scheduling.module.switchToTimeEntryScreen();
      await scheduling.timeEntry.clickTradesSwapsLink();
      await scheduling.module.switchToTradeSwapEntry();
      await scheduling.tradeSwapEntry.switchToCalenderTab();
      await scheduling.tradeSwapEntry.calenderTab.clickShowFullCalenderButton();
      await scheduling.module.switchToCalendarScreen();
      // objectIdentification.windowHandle.verifyWindowExists('Calendar')
      await scheduling.calendar.close();
      await scheduling.module.switchToTradeSwapEntry();
    });
  });

  test('Q1SchedulingDefect2024_48505', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '48505', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Event Code');
      await scheduling.module.switchToEventCode();
      await scheduling.eventCode.clickAddNew();
      await scheduling.module.switchToEventCodeEntryScreen();
      await scheduling.eventCodeEntry.enterAtEventCode();
      await scheduling.eventCodeEntry.enterAtEventName();
      await scheduling.eventCodeEntry.save();
      await scheduling.eventCodeEntry.verifyAdditionSuccessfullMessage();
      // objectIdentification.windowHandle.verifyWindowNotExists('Acknowledge')
      await scheduling.eventCodeEntry.close();
      await scheduling.module.switchToEventCode();
      await scheduling.eventCode.enterAtEventCode();
      await scheduling.eventCode.clickSearchButton();
      await scheduling.eventCode.selectAtEventCodeInGrid();
      await scheduling.module.switchToEventCodeEntryScreen();
      // objectIdentification.windowHandle.verifyWindowNotExists('Acknowledge')
      await scheduling.eventCodeEntry.save();
      await scheduling.eventCodeEntry.verifyUpdatesuccessfullMessage();
      // objectIdentification.windowHandle.verifyWindowNotExists('Acknowledge')
      await scheduling.module.switchToEventCodeEntryScreen();
    });
  });

  test('Q1SchedulingDefect2024_48414', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '48414', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Job Grade');
      await scheduling.module.switchToJobGradeScreen();
      await scheduling.jobGrade.selectRowByAtJobGrade();
      await scheduling.module.switchToJobGradeEntry();
      await scheduling.jobGradeEntry.clickVacationCarryOverButton();
      await scheduling.module.switchToCarryOverAndAccrualEntry();
      await scheduling.carryOverAccrualEntry.clickYesToCanHoursBeCarriedOverToNextYear();
      await scheduling.carryOverAccrualEntry.enterAtMaximumHoursCarryOver();
      await scheduling.carryOverAccrualEntry.verifyAtMaximumHoursCarryOver();
      await scheduling.carryOverAccrualEntry.selectAtTimeTypeCode(1);
      await scheduling.carryOverAccrualEntry.save();
      await scheduling.module.switchToCarryOverAndAccrualEntry();
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await scheduling.carryOverAccrualEntry.verifyAtMaximumHoursCarryOver();
      await scheduling.module.switchToCarryOverAndAccrualEntry();
    });
  });

  test('Q1SchedulingDefect2024_55882', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '55882', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Time Category');
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.clickAddTimeTypeButton();
      await scheduling.module.switchToTimeTypeEntryScreen();
      await scheduling.timeTypeEntry.enterAtTimeTypeCode();
      await scheduling.timeTypeEntry.enterAtDescription();
      await scheduling.timeTypeEntry.verifyValuesListedInTimeCategory();
      await scheduling.timeTypeEntry.selectAtTimeCategory();
      await scheduling.timeTypeEntry.enterAtMultiplicationFactor();
      await scheduling.timeTypeEntry.save();
      await scheduling.module.switchToTimeTypeEntryScreen();
      await scheduling.timeTypeEntry.verifyAdditionSuccessFullMessage();
      await scheduling.timeTypeEntry.close();
      // objectIdentification.windowHandle.phoenixMainWindow()
      await loaderPage.navigateToScreen('Time Entry');
      await scheduling.module.switchToTimeEntryScreen();
      await scheduling.timeEntry.enterAtPF();
      await scheduling.timeEntry.verifyValuesListedInTimeCategory();
      await scheduling.timeEntry.selectAtTimeCategory();
    });
  });

});

// ===================== Part 8 - Q2SchedulingFunctional2025 =====================
test.describe('Q2SchedulingFunctional2025', () => {

  test('Q2SchedulingFunctional2025_55652', async ({ scheduling, loginPage, loaderPage, testData, settings }) => {
    await withTestContext(testData, '55652', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Schedule Settings');
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.clickRotationTab();
      await scheduling.scheduleSettings.scheduleSettingsRotationTab.clickAddRotationCodeButton();
      await scheduling.module.switchToRotationCodeEntryScreen();
      await scheduling.rotationCodeEntry.enterAtRotationCode();
      await scheduling.rotationCodeEntry.enterAtDescription();
      await scheduling.rotationCodeEntry.selectAtTour();
      await scheduling.rotationCodeEntry.clickOnDutyRadioCheckbox();
      await scheduling.rotationCodeEntry.enterAtDayNo();
      await scheduling.rotationCodeEntry.clickAddButton();
      await scheduling.rotationCodeEntry.saveScreen();
      await scheduling.module.switchToRotationCodeEntryScreen();
      await scheduling.rotationCodeEntry.verifyadditionalSuccessfullMessage();
      await scheduling.rotationCodeEntry.selectAtTourInGrid();
      await scheduling.rotationCodeEntry.clickOffDutyRadioCheckbox();
      await scheduling.rotationCodeEntry.clickUpdateButton();
      await scheduling.rotationCodeEntry.verifyReasonCodeAsOffDutyInGrid();
      await scheduling.rotationCodeEntry.saveScreen();
      await scheduling.rotationCodeEntry.verifyUpdateSuccessfullMessage();
    });
  });

});

// ===================== Part 9 - PBQ2Scheduling2025 =====================
test.describe('PBQ2Scheduling2025', () => {

  test('PBQ2Scheduling2025_55990', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '55990', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Job Grade');
      await scheduling.module.switchToJobGradeScreen();
      await scheduling.jobGrade.selectRowByAtJobGrade();
      await scheduling.module.switchToJobGradeEntry();
      await scheduling.jobGradeEntry.clickAtTimeType();
      await scheduling.jobGradeEntry.enterAtMintimeInterval();
      await scheduling.jobGradeEntry.verifyMintimeIntervalLengthAs4();
      await scheduling.jobGradeEntry.enterAtMintimeForCalledIn();
      await scheduling.jobGradeEntry.verifyMintimeForCalledInlLengthAs4();
      await scheduling.jobGradeEntry.save();
      await scheduling.module.switchToJobGradeEntry();
      await scheduling.jobGradeEntry.verifyMintimeIntervalLengthAs4();
      await scheduling.jobGradeEntry.verifyMintimeForCalledInlLengthAs4();
    });
  });

});

// ===================== Part 10 - Q4SchedulingLegacy2025 =====================
test.describe('Q4SchedulingLegacy2025', () => {

  test('Q4SchedulingLegacy2025_70147', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '70147', async () => {
      await loginPage.loginScreen.logon();
      //70510 starts
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.verifyAtScreenIsDisplayed('Scheduling',1);
      await loaderPage.verifyAtScreenIsDisplayed('Scheduling',2);
      await loaderPage.verifyAtScreenIsDisplayed('Scheduling',3);
      await loaderPage.verifyAtScreenIsDisplayed('Scheduling',4);
      await loaderPage.verifyAtScreenIsDisplayed('Scheduling',5);
      await loaderPage.verifyAtScreenIsDisplayed('Scheduling',6);
      await loaderPage.verifyAtScreenIsDisplayed('Scheduling',7);
      await loaderPage.verifyAtScreenIsDisplayed('Scheduling',8);
      await loaderPage.verifyAtScreenIsDisplayed('Scheduling',9);
      await loaderPage.verifyAtScreenIsDisplayed('Scheduling',10);
      await loaderPage.verifyAtScreenIsDisplayed('Scheduling',11);
      await loaderPage.verifyAtScreenIsDisplayed('Scheduling',12);
      await loaderPage.verifyAtScreenIsDisplayed('Scheduling',13);
      //70147 Ends
      await loaderPage.navigateToScreen('Time Category');
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.verifyExpandAllCheckBoxIsDisplayed();
      await scheduling.timeCategory.verifyIncludeInactiveCheckboxIsDisplayed();
      await scheduling.timeCategory.verifyAddTimeCategoryButtonIsDisplayed();
      await scheduling.timeCategory.verifyAddTimeTypeButtonIsDisplayed();
      await scheduling.timeCategory.verifyRefreshIconIsDispalyed();
      await scheduling.timeCategory.verifyPrintIconIsDisplayed();
      await scheduling.timeCategory.clickAddTimeTypeButton();
      await scheduling.module.switchToTimeTypeEntryScreen();
      // objectIdentification.windowHandle.verifyWindowExists('Time Type Entry')
      await scheduling.timeTypeEntry.verifyTimeTypeCodeIsMandatory();
      await scheduling.timeTypeEntry.verifyDescriptionIsMandatory();
      await scheduling.timeTypeEntry.verifyTimeCategoryIsMandatory();
      await scheduling.timeTypeEntry.verifyMultiplicationFactorIsMandatory();
      await scheduling.timeTypeEntry.verifyNotesIsNonMandatory();
      await scheduling.timeTypeEntry.verifyDisPlaySortOrderIsNonMandatory();
      await scheduling.timeTypeEntry.verifyAccountingSeqIsNonMandatory();
      await scheduling.timeTypeEntry.verifyReportableIsNonMandatory();
      await scheduling.timeTypeEntry.verifyCodeUsedToIdentifyIsNonMandatory();
      await scheduling.timeTypeEntry.verifyCodePermissionIsNonMandatory();
      await scheduling.timeTypeEntry.verifyCustom1IsNonMandatory();
      await scheduling.timeTypeEntry.verifyCustom2IsNonMandatory();
      await scheduling.timeTypeEntry.verifyInactiveIsNonMandatory();
      await scheduling.timeTypeEntry.enterRandomTimeTypeCode(4,1);
      await scheduling.timeTypeEntry.verifyAtTimeType(1);
      await scheduling.timeTypeEntry.verifyAtLengthTimeTypeCode(4);
      await scheduling.timeTypeEntry.enterRandomDescription(60,1);
      await scheduling.timeTypeEntry.verifyLengthAtDescription(60);
      await scheduling.timeTypeEntry.verifyAtDescription(1);
      await scheduling.timeTypeEntry.enterRandomNotes(250);
      await scheduling.timeTypeEntry.verifyAtNotesLength(250);
      await scheduling.timeTypeEntry.verifyAtNotes();
      await scheduling.timeTypeEntry.selectAtTimeCategory();
      await scheduling.timeTypeEntry.verifyAtTimeCategory();
      await scheduling.timeTypeEntry.enterRandomMultiplicationFactor(9);
      await scheduling.timeTypeEntry.verifyAtLengthMultiplicationFactor(9);
      await scheduling.timeTypeEntry.verifyAtMultiplicationFactor();
      await scheduling.timeTypeEntry.enterRandomDisplaySortOrder(2);
      await scheduling.timeTypeEntry.verifyAtLengthRandomDisplaySortOrder(2);
      await scheduling.timeTypeEntry.verifyAtDisplaySortOrder();
      await scheduling.timeTypeEntry.enterAtRandomAccountSeq(2);
      await scheduling.timeTypeEntry.verifyAtLengthAccountSeq(2);
      await scheduling.timeTypeEntry.verifyAtAccountSeq();
      await scheduling.timeTypeEntry.verifyAtReportable(1);
      await scheduling.timeTypeEntry.verifyAtReportable(2);
      await scheduling.timeTypeEntry.verifyAtReportable(3);
      await scheduling.timeTypeEntry.verifyAtReportable(4);
      await scheduling.timeTypeEntry.selectAtReportable(1);
      await scheduling.timeTypeEntry.verifyAtCodeUsedToIdentify(1);
      await scheduling.timeTypeEntry.verifyAtCodeUsedToIdentify(2);
      await scheduling.timeTypeEntry.verifyAtCodeUsedToIdentify(3);
      await scheduling.timeTypeEntry.selectAtCodeUsedToIdentify(1);
      await scheduling.timeTypeEntry.verifyAtCodePermission(1);
      await scheduling.timeTypeEntry.verifyAtCodePermission(2);
      await scheduling.timeTypeEntry.verifyAtCodePermission(3);
      await scheduling.timeTypeEntry.verifyAtCodePermission(4);
      await scheduling.timeTypeEntry.selectAtCodePermission(1);
      await scheduling.timeTypeEntry.enterAtRandomCustom1(50);
      await scheduling.timeTypeEntry.verifyAtLengthCustom1(50);
      await scheduling.timeTypeEntry.verifyAtCustom1();
      await scheduling.timeTypeEntry.enterAtRandomCustom2(50);
      await scheduling.timeTypeEntry.enterAtRandomCustom2(50);
      await scheduling.timeTypeEntry.verifyAtCustom2();
      await scheduling.timeTypeEntry.clickInactiveCheckbox();
      await scheduling.timeTypeEntry.verifyInactiveDateAndTimeAsCurrentDateTime();
      await scheduling.timeTypeEntry.clickInactiveCheckbox();
      await scheduling.timeTypeEntry.verifyInactiveDateIsBlank();
      await scheduling.timeTypeEntry.clickSave();
      await scheduling.timeTypeEntry.clickNoInSavePopup();
      await scheduling.timeTypeEntry.save();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await scheduling.module.switchToTimeTypeEntryScreen();
      await scheduling.timeTypeEntry.close();
      await scheduling.module.switchToTimeTypeEntryScreen();
      //70510 ends
    });
  });

  test('Q4SchedulingLegacy2025_70159', async ({ scheduling, loginPage, loaderPage, testData, settings }) => {
    await withTestContext(testData, '70159', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Schedule Settings');
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.verifyJurisDropDownIsDisplayed();
      await scheduling.scheduleSettings.verifyTourTabIsDisplayed();
      await scheduling.scheduleSettings.verifyRotationTabIsDisplayed();
      await scheduling.scheduleSettings.verifyGroupTabIsDisplayed();
      await scheduling.scheduleSettings.verifyAtTabIsOpened(1);
    });
  });

  test('Q4SchedulingLegacy2025_70298', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '70298', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Time Category');
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.verifyExpandAllCheckBoxIsDisplayed();
      await scheduling.timeCategory.verifyIncludeInactiveCheckboxIsDisplayed();
      await scheduling.timeCategory.verifyAddTimeCategoryButtonIsDisplayed();
      await scheduling.timeCategory.verifyAddTimeTypeButtonIsDisplayed();
      await scheduling.timeCategory.verifyRefreshIconIsDispalyed();
      await scheduling.timeCategory.verifyPrintIconIsDisplayed();
      await scheduling.timeCategory.clickExpandAllCheckBox();
      await scheduling.timeCategory.verifyExpandAllCheckBoxIsSelected();
      await scheduling.timeCategory.verifyTimecategoryGridIsExpand();
      await scheduling.timeCategory.verifySubHeadersInGrid();
      await scheduling.timeCategory.clickExpandAllCheckBox();
      await scheduling.timeCategory.verifyTimecategoryGridIsCollapsed();
    });
  });

  test('Q4SchedulingLegacy2025_70337', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '70337', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Time Category');
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.verifyExpandAllCheckBoxIsDisplayed();
      await scheduling.timeCategory.verifyIncludeInactiveCheckboxIsDisplayed();
      await scheduling.timeCategory.verifyAddTimeCategoryButtonIsDisplayed();
      await scheduling.timeCategory.verifyAddTimeTypeButtonIsDisplayed();
      await scheduling.timeCategory.verifyRefreshIconIsDispalyed();
      await scheduling.timeCategory.verifyPrintIconIsDisplayed();
      await scheduling.timeCategory.clickIncludeInactiveCheckBox();
      await scheduling.timeCategory.clickExpandAllCheckBox();
      await scheduling.timeCategory.verifyInactiveRecordColorAsGreyByTimeTypeInGrid();
    });
  });

  test('Q4SchedulingLegacy2025_70423', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '70423', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Time Category');
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.verifyTimeCategoryGridIsNotEmpty();
      await scheduling.timeCategory.doubleClickItemInGrid(1);
      await scheduling.timeCategory.verifySameWindowOpenedTwice();
      // objectIdentification.windowHandle.closeAllTheWindowsApartFromMainWindow()
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.doubleClickItemInGrid(2);
      await scheduling.timeCategory.verifySameWindowOpenedTwice();
      // objectIdentification.windowHandle.closeAllTheWindowsApartFromMainWindow()
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.doubleClickItemInGrid(3);
      await scheduling.timeCategory.verifySameWindowOpenedTwice();
      // objectIdentification.windowHandle.closeAllTheWindowsApartFromMainWindow()
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.doubleClickItemInGrid(4);
      await scheduling.timeCategory.verifySameWindowOpenedTwice();
      // objectIdentification.windowHandle.closeAllTheWindowsApartFromMainWindow()
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.doubleClickItemInGrid(5);
      await scheduling.timeCategory.verifySameWindowOpenedTwice();
      // objectIdentification.windowHandle.closeAllTheWindowsApartFromMainWindow()
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.doubleClickItemInGrid(6);
      await scheduling.timeCategory.verifySameWindowOpenedTwice();
      // objectIdentification.windowHandle.closeAllTheWindowsApartFromMainWindow()
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.doubleClickItemInGrid(7);
      await scheduling.timeCategory.verifySameWindowOpenedTwice();
      // objectIdentification.windowHandle.closeAllTheWindowsApartFromMainWindow()
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.doubleClickItemInGrid(8);
      await scheduling.timeCategory.verifySameWindowOpenedTwice();
      // objectIdentification.windowHandle.closeAllTheWindowsApartFromMainWindow()
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.doubleClickItemInGrid(9);
      await scheduling.timeCategory.verifySameWindowOpenedTwice();
      // objectIdentification.windowHandle.closeAllTheWindowsApartFromMainWindow()
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.doubleClickItemInGrid(10);
      await scheduling.timeCategory.verifySameWindowOpenedTwice();
      // objectIdentification.windowHandle.closeAllTheWindowsApartFromMainWindow()
      await scheduling.module.switchToTimeCategory();
      await scheduling.timeCategory.clickExpandAllCheckBox();
      await scheduling.timeCategory.randomDoubleClickGridRowAndVerifyNotEditable(1);
      await scheduling.timeCategory.randomDoubleClickGridRowAndVerifyNotEditable(2);
      await scheduling.timeCategory.randomDoubleClickGridRowAndVerifyNotEditable(3);
      await scheduling.timeCategory.randomDoubleClickGridRowAndVerifyNotEditable(4);
      await scheduling.timeCategory.randomDoubleClickGridRowAndVerifyNotEditable(5);
      await scheduling.timeCategory.randomDoubleClickGridRowAndVerifyNotEditable(6);
      await scheduling.timeCategory.randomDoubleClickGridRowAndVerifyNotEditable(7);
      await scheduling.timeCategory.randomDoubleClickGridRowAndVerifyNotEditable(8);
      await scheduling.timeCategory.randomDoubleClickGridRowAndVerifyNotEditable(9);
      await scheduling.timeCategory.randomDoubleClickGridRowAndVerifyNotEditable(10);
    });
  });

  test('Q4SchedulingLegacy2025_70493', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '70493', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Event Code');
      await scheduling.module.switchToEventCode();
      await scheduling.eventCode.verifyEventCodeGridIsNotEmpty();
      await scheduling.eventCode.selectRandomRow();
      // objectIdentification.windowHandle.verifyWindowExists('Event Code Entry')
      await scheduling.module.switchToEventCodeEntryScreen();
      await scheduling.eventCodeEntry.close();
      await scheduling.module.switchToEventCode();
      await scheduling.eventCode.doubleClickRandomRowAndVerifyNonEditableInGrid();
      await scheduling.module.switchToEventCode();
    });
  });

  test('Q4SchedulingLegacy2025_70497', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '70497', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Event Resources');
      await scheduling.module.switchToEventResources();
      await scheduling.eventResources.verifyEventResourcesGridIsNotEmpty();
      await scheduling.eventResources.selectRandomRow();
      await scheduling.module.switchToEventResourcesEntryScreen();
      await scheduling.eventResourcesEntry.close();
      await scheduling.module.switchToEventResources();
      await scheduling.eventResources.doubleClickRandomRowAndVerifyNonEditableInGrid();
      await scheduling.module.switchToEventResources();
    });
  });

  test('Q4SchedulingLegacy2025_74391', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '74391', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Holidays');
      await scheduling.module.switchToHolidaysScreen();
      await scheduling.holiday.verifyTheGridColumnCellIsNotEditableInRandomRow();
      await scheduling.holiday.deleteAtGreyedOutPastHolidayByDescriptionInGrid();//Updated Tescases - 74609--Start;
      await scheduling.holiday.verifyDeleteConfirmationIsNotArised();
      await scheduling.module.switchToHolidaysScreen();//Updated Tescases - 74609---End;
      await scheduling.holiday.deleteAtHolidayByDescriptionInGrid();//Updated Tescases - 74606--Start;
      await scheduling.holiday.verifyDeleteConfirmationIsArised();
      await scheduling.holiday.saveScreen();
      // objectIdentification.manualIdentify.verifyUpdateSuccessful()
      await scheduling.holiday.verifyAtDescriptionIsNotPresentInGrid();//Updated Tescases - 74606---End;
    });
  });

  test('Q4SchedulingLegacy2025_74594', async ({ scheduling, loginPage, loaderPage, testData, settings }) => {
    await withTestContext(testData, '74594', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Schedule Settings');
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.clickRotationTab();
      await scheduling.scheduleSettings.scheduleSettingsRotationTab.verifyTheGridIsNotEditable();
    });
  });

});

// ===================== Part 11 - Q4SchedulingLegacySysParameter2025 =====================
test.describe('Q4SchedulingLegacySysParameter2025', () => {

  test('Q4SchedulingLegacySysParameter2025_74469', async ({ scheduling, loginPage, loaderPage, testData, popupPage, settings }) => {
    await withTestContext(testData, '74469', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparamete4357('True');
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Schedule Settings');
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.clickGroupTab();
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.clickAddGroupCodeButton();
      await scheduling.module.switchToGroupEntryScreen();
      await scheduling.groupEntry.verifyTheSaveIconIsDisplayedAndEnabled();
      await scheduling.groupEntry.verifyTheSaveAndCloseIconIsDisplayedAndEnabled();
      await scheduling.groupEntry.verifyTheSaveAndAddNewIconIsDisplayedAndEnabled();
      await scheduling.groupEntry.verifyTheRefreshIconIsDisplayedAndEnabled();
      await scheduling.groupEntry.verifyThePrintIconIsDisplayedAndEnabled();
      // objectIdentification.manualIdentify.verifyAtLabelIsMandatory(0)
      // objectIdentification.manualIdentify.verifyAtLabelIsMandatory(1)
      // objectIdentification.manualIdentify.verifyAtLabelIsMandatory(2)
      // objectIdentification.manualIdentify.verifyAtLabelIsMandatory(3)
      // objectIdentification.manualIdentify.verifyAtLabelIsMandatory(4)
      // objectIdentification.manualIdentify.verifyAtLabelIsMandatory(5)
      // objectIdentification.manualIdentify.verifyAtLabelIsMandatory(6)
      // objectIdentification.manualIdentify.verifyAtLabelIsNonMandatory(0)
      // objectIdentification.manualIdentify.verifyAtLabelIsNonMandatory(1)
      // objectIdentification.manualIdentify.verifyAtLabelIsNonMandatory(2)
      // objectIdentification.manualIdentify.verifyAtLabelIsNonMandatory(3)
      // objectIdentification.manualIdentify.verifyAtLabelIsNonMandatory(4)
      // objectIdentification.manualIdentify.verifyAtLabelIsNonMandatory(5)
      await scheduling.groupEntry.enterAtGroupCode(0);
      await scheduling.groupEntry.verifyAtGroupLength();
      await scheduling.groupEntry.verifySpecialCharactersAllowingInGroupField();
      await scheduling.groupEntry.enterAtGroupCode(1);
      await scheduling.groupEntry.verifyAtGroupCode(1);
      await scheduling.groupEntry.enterRandomDescription(70);
      await scheduling.groupEntry.verifyAtDescriptionLength();
      await scheduling.groupEntry.verifySpecialCharactersAllowingInDescriptionField();
      await scheduling.groupEntry.enterAtDescription(1);
      await scheduling.groupEntry.verifyAtDescription(1);
      await scheduling.groupEntry.selectAtShift(0);
      await settings.module.switchToSharedCodes();
      await settings.sharedCodes.verifyAddNewButtonIsEnable();
      await settings.sharedCodes.closeScreen();
      await scheduling.module.switchToGroupEntryScreen();
      await scheduling.groupEntry.selectAtShift(1);
      await scheduling.groupEntry.selectAtRotationCode();
      await scheduling.groupEntry.tabStartDate();
      await scheduling.groupEntry.verifySpecialCharactersNotAllowingInCalenderViewField();//only alphanum;
      await scheduling.groupEntry.enterAtCalenderDisplayLabel(1);//more length;
      await scheduling.groupEntry.verifyCalenderDisplayLabelLength();
      await scheduling.groupEntry.verifySpecialCharactersAllowingInScheduleViewField();//only alphanum;
      await scheduling.groupEntry.enterAtDisplayeLabelForScheduleView(0);
      await scheduling.groupEntry.verifyAtDisplayLabelForScheduleViewFieldLength();
      await scheduling.groupEntry.verifySpecialCharactersNotAllowingInDisplaySortSeqField();//only alphanum;
      await scheduling.groupEntry.enterAtDisplaySortSeq(0);
      await scheduling.groupEntry.verifyAtDisplaySortSeqFieldLength();
      await scheduling.groupEntry.selectAtBackGroundColor();
      await scheduling.groupEntry.clickWhiteRadioButton();
      await scheduling.groupEntry.verifySpecialCharactersNotAllowingInScheduleMinField();;//only number;
      await scheduling.groupEntry.enterAtScheduleMin(0);
      await scheduling.groupEntry.verifyAtScheduleMinFieldLength();
      //					scheduling.groupEntry.verifySpecialCharactersNotAllowingInDefualtTotalHoursWorkedField();//only number
      //					scheduling.groupEntry.enterAtDefaultTotalHoursWorked(0)
      //					scheduling.groupEntry.verifyAtDefualtTotalHoursWorkedFieldLength()
      await scheduling.groupEntry.verifySpecialCharactersAllowingInNotesField();
      await scheduling.groupEntry.enterRandomNotes();
      await scheduling.groupEntry.verifyAtNotesFieldLength();
      await scheduling.groupEntry.clickInactiveCheckbox();
      await scheduling.groupEntry.verifyInactiveDateAsCurrentDate();
      await scheduling.groupEntry.verifyInactiveDateFieldIsDisabled();
      await scheduling.groupEntry.clickSave();
      await popupPage.confirm.noWithExpectedMessage(BaseData.getSchedulingModuleValue('SaveMessage'));
      await scheduling.groupEntry.clickSave();
      await popupPage.confirm.yesWithExpectedMessage(BaseData.getSchedulingModuleValue('SaveMessage'));
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparamete4357('False');
    });
  });

  test('Q4SchedulingLegacySysParameter2025_74680', async ({ scheduling, loginPage, loaderPage, testData, settings }) => {
    await withTestContext(testData, '74680', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparamete4357('False');
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Schedule Settings');
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.clickRotationTab();
      await scheduling.scheduleSettings.scheduleSettingsRotationTab.verifyAtRoationDefinitionLabel();//Updated Tescases ID- 74679;
      await scheduling.scheduleSettings.scheduleSettingsRotationTab.clickAddRotationCodeButton();
      await scheduling.module.switchToRotationCodeEntryScreen();
      await scheduling.rotationCodeEntry.verifyAtColumnName(0);
      await scheduling.rotationCodeEntry.verifyAtColumnName(1);
      await scheduling.rotationCodeEntry.verifyAtColumnName(2);
      await scheduling.rotationCodeEntry.verifyAtColumnName(3);
      await scheduling.rotationCodeEntry.verifyAtColumnName(4);
      await scheduling.rotationCodeEntry.verifyRotationCodeIsDisplayedAndEnabled();
      await scheduling.rotationCodeEntry.verifyDescriptionIsDisplayedAndEnabled();
      await scheduling.rotationCodeEntry.verifyScheduleMinIsDisplayedAndEnabled();
      await scheduling.rotationCodeEntry.verifyInActiveCheckBoxIsDisplayedAndEnabled();
      await scheduling.rotationCodeEntry.verifyInActiveDateIsDisplayedAndDisabled();
      await scheduling.rotationCodeEntry.verifyTourIsDisplayedAndEnabled();
      await scheduling.rotationCodeEntry.verifyOnDutyIsDisplayedAndDisabled();
      await scheduling.rotationCodeEntry.verifyOffDutyIsDisplayedAndDisabled();
      await scheduling.rotationCodeEntry.verifyNotesIsDisplayedAndEnabled();
      await scheduling.rotationCodeEntry.verifyDayIsDisplayedAndEnabled();
      await scheduling.rotationCodeEntry.verifySpecialCharactersAllowingInRotationCodeField();
      await scheduling.rotationCodeEntry.enterRotationCode(5);
      await scheduling.rotationCodeEntry.verifyAtRotationCodeLength();
      await scheduling.rotationCodeEntry.enterAtRotationCode();
      await scheduling.rotationCodeEntry.verifySpecialCharactersAllowingInDescriptionField();
      await scheduling.rotationCodeEntry.enterDescription(70);
      await scheduling.rotationCodeEntry.verifyAtDescriptionLength();
      await scheduling.rotationCodeEntry.enterAtDescription();
      await scheduling.rotationCodeEntry.clickInactiveCheckbox();
      await scheduling.rotationCodeEntry.verifyInactiveDateAsCurrentDate();
      await scheduling.rotationCodeEntry.clickInactiveCheckbox();
      await scheduling.rotationCodeEntry.verifyInactiveDateIsBlank();
      await scheduling.rotationCodeEntry.clickOnDutyRadioCheckbox();
      await scheduling.rotationCodeEntry.verifySpecialCharactersAllowingInNotesField();
      await scheduling.rotationCodeEntry.enterNotes(250);
      await scheduling.rotationCodeEntry.verifyAtNotesLength();
      await scheduling.rotationCodeEntry.verifySpecialCharactersAndAlphabetsNotAllowingInDayField();
      await scheduling.rotationCodeEntry.enterDayNo(5);
      await scheduling.rotationCodeEntry.verifyAtDayNoLength();
      await scheduling.rotationCodeEntry.enterAtDayNo();
      await scheduling.rotationCodeEntry.verifySpecialCharactersAndAlphabetsNotAllowingInScheduleMinField();
      await scheduling.rotationCodeEntry.enterAtScheduleMin(0);
      await scheduling.rotationCodeEntry.selectAtTour();
      await scheduling.rotationCodeEntry.clickAddButton();
      await scheduling.rotationCodeEntry.verifyAtTourInGrid();
      await scheduling.rotationCodeEntry.verifyAtReasonCodeByTour(0);
      await scheduling.rotationCodeEntry.verifyAtTimeFromByTour(0);
      await scheduling.rotationCodeEntry.verifyAtTimeToByTour(0);
      await scheduling.rotationCodeEntry.saveScreen();
      // objectIdentification.manualIdentify.verifyAdditionSuccessful()
      await scheduling.rotationCodeEntry.saveAndNew();
      await scheduling.module.switchToRotationCodeEntryScreen();
      await scheduling.rotationCodeEntry.verifyAtTour(2);
      await scheduling.rotationCodeEntry.verifyRotationCodeIsBlank();
      await scheduling.rotationCodeEntry.verifyDescriptionIsBlank();
      await scheduling.rotationCodeEntry.verifyAtScheduleMin(3);
      await scheduling.rotationCodeEntry.verifyNotesIsBlank();
      await scheduling.rotationCodeEntry.verifyInactiveDateIsBlank();
      await scheduling.rotationCodeEntry.verifyAtDay(3);
      await scheduling.rotationCodeEntry.verifyAtGridRowCount();
      await scheduling.rotationCodeEntry.enterAtRotationCode(0);
      await scheduling.rotationCodeEntry.enterAtDescription(0);
      await scheduling.rotationCodeEntry.enterAtDayNo(0);
      await scheduling.rotationCodeEntry.clickOffDutyRadioCheckbox();
      await scheduling.rotationCodeEntry.enterAtScheduleMin(1);
      await scheduling.rotationCodeEntry.selectAtTour1();
      await scheduling.rotationCodeEntry.clickAddButton();
      await scheduling.rotationCodeEntry.verifyAtTour1AddedToGrid(0);
      await scheduling.rotationCodeEntry.verifyAtReasonCodeByTour(1);
      await scheduling.rotationCodeEntry.verifyAtTimeFromByTour(1);
      await scheduling.rotationCodeEntry.verifyAtTimeToByTour(1);
      await scheduling.rotationCodeEntry.saveAndClose();
      // objectIdentification.windowHandle.verifyWindowNotExists('Rotation Code Entry')
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.clickRotationTab();
      await scheduling.scheduleSettings.scheduleSettingsRotationTab.verifyAtDescriptionUsingCode();
      await scheduling.scheduleSettings.scheduleSettingsRotationTab.verifyAtDescriptionUsingCode(0);
    });
  });

  test('Q4SchedulingLegacySysParameter2025_74710', async ({ scheduling, loginPage, loaderPage, testData, settings }) => {
    await withTestContext(testData, '74710', async () => {
      await loginPage.loginScreen.logon();
      //					loader.navigateToModule('Settings')
      //					loader.navigateToScreen('System Parameter')
      //					settings.switchToSystemParamter()
      //					settings.sysParameter.setSystemparamete4357('True')
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Schedule Settings');
      await scheduling.module.switchToScheduleSettings();
      //					scheduling.scheduleSettings.clickTourShiftHoursTab()
      //					scheduling.scheduleSettings.scheduleSettingsTourTab.clickAddTourCodeButton()
      //					scheduling.switchToTourEntryScreen()
      //					scheduling.tourEntry.enterAtTourCode(0)
      //					scheduling.tourEntry.enterAtDescription()
      //					scheduling.tourEntry.enterAtTimeFrom()
      //					scheduling.tourEntry.enterAtTimeTo()
      //					scheduling.tourEntry.enterAtNotes()
      //					scheduling.tourEntry.enterAtDisplaySortSeq()
      //					scheduling.tourEntry.selectAtDisplayColor()
      //					scheduling.tourEntry.saveScreen()
      //					objectIdentification.manualIdentify.verifyAdditionSuccessful()
      //					scheduling.tourEntry.closeSCreen()
      //					scheduling.switchToScheduleSettings()
      //					scheduling.scheduleSettings.clickRotationTab()
      //					scheduling.scheduleSettings.scheduleSettingsRotationTab.clickAddRotationCodeButton()
      await scheduling.module.switchToRotationCodeEntryScreen();
      //					scheduling.rotationCodeEntry.enterAtRotationCode()
      //					scheduling.rotationCodeEntry.enterAtDescription()
      //					scheduling.rotationCodeEntry.enterAtScheduleMin(0)
      //					scheduling.rotationCodeEntry.enterDaysInRotation()
      await scheduling.rotationCodeEntry.clickRowByDayAndSelectTourCodeInContextMenu(0);
      await scheduling.rotationCodeEntry.clickRowByDayAndSelectTourCodeInContextMenu(1);
      await scheduling.rotationCodeEntry.clickRowByDayAndSelectTourCodeInContextMenu(2);
      await scheduling.rotationCodeEntry.clickRowByDayAndSelectTourCodeInContextMenu(3);
      await scheduling.rotationCodeEntry.clickRowByDayAndSelectTourCodeInContextMenu(4);
      await scheduling.rotationCodeEntry.clickRowByDayAndSelectTourCodeInContextMenu(5);
      await scheduling.rotationCodeEntry.clickRowByDayAndSelectTourCodeInContextMenu(6);
    });
  });

});

// ===================== Part 12 - Q4SchedulingLegacy12025 =====================
test.describe('Q4SchedulingLegacy12025', () => {

  test('Q4SchedulingLegacy12025_74597', async ({ scheduling, loginPage, loaderPage, testData, settings }) => {
    await withTestContext(testData, '74597', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Schedule Settings');
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.clickTourShiftHoursTab();
      await scheduling.scheduleSettings.scheduleSettingsTourTab.clickIncludeInactiveCheckbox();//Updated Testcase - 74700;
      await scheduling.scheduleSettings.scheduleSettingsTourTab.clickRefresh();//Updated Testcase - 74700;
      await scheduling.scheduleSettings.scheduleSettingsTourTab.verifyTheGridIsNotEditable();
    });
  });

  test('Q4SchedulingLegacy12025_74598', async ({ scheduling, loginPage, loaderPage, testData, settings }) => {
    await withTestContext(testData, '74598', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparamete4357('True');
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Schedule Settings');
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.clickGroupTab();
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.verifyTheGridIsNotEditable();
      await scheduling.module.switchToScheduleSettings();//Updated Testcase ID - 74600--Start;
      await scheduling.scheduleSettings.clickGroupTab();
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.verifyAtColumnName(BaseData.getPersonnelModuleValue('ColumnName1'));
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.verifyAtColumnName(BaseData.getPersonnelModuleValue('ColumnName2'));
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.verifyAtColumnName(BaseData.getPersonnelModuleValue('ColumnName3'));
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.verifyAtColumnName(BaseData.getPersonnelModuleValue('ColumnName4'));
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.verifyAtColumnName(BaseData.getPersonnelModuleValue('ColumnName5'));
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.verifyAtColumnName(BaseData.getPersonnelModuleValue('ColumnName6'));
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.verifyAtColumnName(BaseData.getPersonnelModuleValue('ColumnName7'));
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.verifyAtColumnName(BaseData.getPersonnelModuleValue('ColumnName8'));
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.verifyInactiveCheckBoxIsDisplayedAndEnabled();
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.verifyRefreshIsDisplayedAndEnabled();
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.verifyPersonnelBatchUpdateIsDisplayedAndEnabled();
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.verifyAddGroupCodeIsDisplayedAndEnabled();//Updated Testcase ID - 74600--End;
    });
  });

  test('Q4SchedulingLegacy12025_74616', async ({ scheduling, loginPage, loaderPage, testData, settings }) => {
    await withTestContext(testData, '74616', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparamete4357('True');
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Schedule Settings');
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.verifyAtTabIsOpened(0);//Updated testcases ID -74622--Start;
      await scheduling.scheduleSettings.clickTourShiftHoursTab();
      await scheduling.scheduleSettings.verifyAtColumnName(0);
      await scheduling.scheduleSettings.verifyAtColumnName(1);
      await scheduling.scheduleSettings.verifyAtColumnName(2);
      await scheduling.scheduleSettings.verifyAtColumnName(3);
      await scheduling.scheduleSettings.verifyAtColumnName(4);
      await scheduling.scheduleSettings.scheduleSettingsTourTab.verifyRefreshButtonIsDisplayedAndEnabled();
      await scheduling.scheduleSettings.scheduleSettingsTourTab.verifyInactiveCheckBoxIsDisplayedAndEnabled();
      await scheduling.scheduleSettings.scheduleSettingsTourTab.verifyAddTourCodeButtonIsDisplayedAndEnabled();//Updated testcases ID -74622--end;
      await scheduling.scheduleSettings.scheduleSettingsTourTab.clickAddTourCodeButton();
      await scheduling.module.switchToTourEntryScreen();
      await scheduling.tourEntry.verifySaveIconIsEnabledAndDisplayed();
      await scheduling.tourEntry.verifySaveAndCloseIconIsEnabledAndDisplayed();
      await scheduling.tourEntry.verifySaveAndAddNewIconIsEnabledAndDisplayed();
      await scheduling.tourEntry.verifyRefreshIconIsEnabledAndDisplayed();
      await scheduling.tourEntry.verifyPrintIconIsEnabledAndDisplayed();
      await scheduling.tourEntry.verifySpecialCharactersAllowingInTourCodeField();
      await scheduling.module.switchToTourEntryScreen();
      await scheduling.tourEntry.verifyAtTourDefinesLabel();
      await scheduling.tourEntry.enterAtTourCode(1);
      await scheduling.tourEntry.verifyAtTourCodeLength();
      await scheduling.tourEntry.verifySpecialCharactersAllowingInDescriptionField();
      await scheduling.tourEntry.enterDescription(60);
      await scheduling.tourEntry.verifyAtDescriptionLength();
      await scheduling.tourEntry.enterAtDescription();
      await scheduling.tourEntry.enterTimeFromAsCurrentTime();
      await scheduling.tourEntry.enterTimeToAsFutureTimeandRead();
      await scheduling.tourEntry.verifySpecialCharactersAllowingInNotesField();
      await scheduling.tourEntry.enterNotes(250);
      await scheduling.tourEntry.verifyAtNotesLength();
      await scheduling.tourEntry.enterAtNotes();
      await scheduling.tourEntry.verifySpecialCharactersNotAllowingInDisplaySortSeqField();
      await scheduling.tourEntry.enterAtDisplaySortSeq();
      await scheduling.tourEntry.verifyAtDisplaySeqLength();
      await scheduling.tourEntry.clickInactiveCheckbox();
      await scheduling.tourEntry.verifyInactiveDateAsCurrentDate();
      await scheduling.tourEntry.verifyInactiveDateIsDisabled();
      await scheduling.tourEntry.saveScreen();
      await scheduling.tourEntry.verifyAdditionSuccessFullMessage();
    });
  });

  test('Q4SchedulingLegacy12025_74705', async ({ scheduling, loginPage, loaderPage, testData }) => {
    await withTestContext(testData, '74705', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Job Grade');
      await scheduling.module.switchToJobGradeScreen();
      await scheduling.jobGrade.selectRowByAtJobGrade();
      await scheduling.module.switchToJobGradeEntry();
      await scheduling.jobGradeEntry.verifyExpandAllCheckBoxIsChecked();
      await scheduling.jobGradeEntry.verifyTheAllRowsAreExpanded();
      await scheduling.jobGradeEntry.clickExpandAllCheckBox();
      // Playback.threadWait()
      await scheduling.jobGradeEntry.verifyTheAllRowsAreNotExpanded();
    });
  });

});

// ===================== Part 13 - Q4SchedulingDefectSysParameter2025 =====================
test.describe('Q4SchedulingDefectSysParameter2025', () => {

  test('Q4SchedulingDefectSysParameter2025_74774', async ({ scheduling, loginPage, loaderPage, testData, settings }) => {
    await withTestContext(testData, '74774', async () => {
      await loginPage.loginScreen.logon();
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparamete4357('True');
      await loaderPage.navigateToModule('Scheduling');
      await loaderPage.navigateToScreen('Schedule Settings');
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.clickGroupTab();
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.clickAddGroupCodeButton();
      await scheduling.module.switchToGroupEntryScreen();
      await scheduling.groupEntry.enterAtGroupCode(0);
      await scheduling.groupEntry.enterAtDescription(0);
      await scheduling.groupEntry.selectAtShift(0);
      await scheduling.groupEntry.selectAtRotationCode();
      await scheduling.groupEntry.tabStartDate();
      await scheduling.groupEntry.enterAtCalenderDisplayLabel(0);
      await scheduling.groupEntry.enterAtDisplayeLabelForScheduleView(0);
      await scheduling.groupEntry.enterAtDisplaySortSeq(0);
      await scheduling.groupEntry.selectAtBackGroundColor();
      await scheduling.groupEntry.clickWhiteRadioButton();
      await scheduling.groupEntry.enterAtScheduleMin(0);
      await scheduling.groupEntry.enterAtDefaultTotalHoursWorked(0);
      await scheduling.groupEntry.enterNotes();
      await scheduling.groupEntry.clickInactiveCheckbox();
      await scheduling.groupEntry.verifyInactiveDateAsCurrentDate();
      await scheduling.groupEntry.clickInactiveCheckbox();
      await scheduling.groupEntry. saveAndClose();
      // objectIdentification.windowHandle.verifyWindowNotExists('Group Entry')
      await scheduling.module.switchToScheduleSettings();
      await scheduling.scheduleSettings.clickGroupTab();
      await scheduling.scheduleSettings.scheduleSettingsGroupTab.verifyAtDescriptionUsingGroup();
      // objectIdentification.smokeTest.checkAckExist()
      await loaderPage.navigateToModule('Settings');
      await loaderPage.navigateToScreen('System Parameter');
      await settings.module.switchToSystemParamter();
      await settings.sysParameter.setSystemparamete4357('False');
      await settings.module.switchToSystemParamter();
    });
  });

});
