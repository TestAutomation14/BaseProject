// @ts-nocheck
import { test, expect, withTestContext } from '../../src/fixtures/test-fixtures';

test.describe('Q2 Activity Defect @Q2ActivityDefect', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('CRM_168851_ToVerifyTheActivityIndividualSchedulingEnterAnyNameIdAndClickResetTheEnteredDataIsNotResetting_32680', async ({ testData, loaderPage, activity }) => {
    withTestContext(testData, '32680', 'Activity');

    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Individual Scheduling');
    await activity.module.switchToIndividualScheduling();
    await activity.individualScheduling.enterAtNameId(testData.activity('NameID'));
    await activity.individualScheduling.verifyAtLastName(testData.activity('LastName'));
    await activity.individualScheduling.verifyAtFirstName(testData.activity('FirstName'));
    await activity.individualScheduling.verifyAtSPN(testData.activity('SPN'));
    await activity.individualScheduling.clickResetButton();
    await activity.individualScheduling.verifySPNIsBlank();
    await activity.individualScheduling.verifyLastNameIsBlank();
    await activity.individualScheduling.verifyFirstNameIsBlank();
    await activity.module.switchToIndividualScheduling();
  });

  test('CRM171579ToVerifyTheActivityGroupMoveMentEnterAllMandatoryFeildsAndSaveTheScreen1005ErrorOccurs_34795', async ({ testData, loaderPage, activity, popupPage }) => {
    withTestContext(testData, '34795', 'Activity');

    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Group Movement');
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.selectAtEventType(testData.activity('EventType'));
    await activity.groupMovement.selectAtSubType(testData.activity('SubType'));
    await activity.groupMovement.tabOutStartDate();
    await activity.groupMovement.tabOutEndDate();
    await activity.groupMovement.enterAtSPN(testData.activity('SPN1'));
    await activity.groupMovement.clickAddButton();
    await activity.groupMovement.saveScreen();
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.verifyAdditionalSuccessfullAcknowledgeMessage();
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.verifyAtNameInGrid(0, testData.activity('Name0'));
  });

  test('CRM_173644_InconsistentResultsWithTheActivityScheduleSearch_50912', async ({ testData, loaderPage, activity }) => {
    withTestContext(testData, '50912', 'Activity');

    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Individual Scheduling');
    await activity.module.switchToIndividualScheduling();
    await activity.individualScheduling.enterAtSPN(testData.activity('SPN'));
    await activity.individualScheduling.clickAddNewButton();
    await activity.module.switchToInmateMovement();
    await activity.inmateMovement.selectAtEventType(testData.activity('EventType'));
    await activity.inmateMovement.selectAtSubType(testData.activity('SubType'));
    await activity.inmateMovement.tabOutStartDate();
    await activity.inmateMovement.tabOutEndDate();
    await activity.inmateMovement.tabOutStartAt();
    await activity.inmateMovement.tabOutEndAt();
    await activity.inmateMovement.saveScreen();
    await activity.inmateMovement.selectAtTypeInGrid(testData.activity('Type'));
    const startAt = await activity.inmateMovement.getStartAt();
    const endAt = await activity.inmateMovement.getEndAt();
    const startDate = await activity.inmateMovement.getStartDate();
    const endDate = await activity.inmateMovement.getEndDate();
    await activity.inmateMovement.verifyAtTypeInGrid(testData.activity('Type'));
    await activity.inmateMovement.verifyRowCountInGridAs1();
    await loaderPage.navigateToScreen('Schedule Search');
    await activity.module.switchToScheduleSearch();
    await activity.scheduleSearch.enterStartDate(startDate);
    await activity.scheduleSearch.enterStartTime(startAt);
    await activity.scheduleSearch.enterToDate(endDate);
    await activity.scheduleSearch.enterToTime(endAt);
    await activity.scheduleSearch.clickSearchButton();
    await activity.scheduleSearch.verifyAtSPNInGrid(testData.activity('SPN'));
    await activity.scheduleSearch.verifyAtEventSubType(testData.activity('EventSubType'));
    await activity.module.switchToScheduleSearch();
  });

  test('verifyActivityGroupMovementRepeatReschedule_60566', async ({ testData, loaderPage, activity }) => {
    withTestContext(testData, '60566', 'Activity');

    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Group Movement');
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.selectAtEventType(testData.activity('EventType'));
    await activity.groupMovement.selectAtSubType(testData.activity('SubType'));
    await activity.groupMovement.tabOutStartDate();
    await activity.groupMovement.tabOutEndDate();
    await activity.groupMovement.verifyRepeatDropdownIsDisabled();
    await activity.groupMovement.clickRepeatCheckbox();
    await activity.groupMovement.verifyRepeatDropdownIsEnabled();
    await activity.groupMovement.selectAtBuilding(testData.activity('Building'));
    await activity.groupMovement.doubleClickOnFloorLabel();
    await activity.groupMovement.verifyRepeatDropdownIsEnabled();
    await activity.groupMovement.verifyCancelRepeatFunctionalityAckMsgNotAppears();
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.clickSave();
    await activity.groupMovement.verifySelectRepeatValueAckMsg();
    await activity.module.switchToGroupMovement();
  });

  test('verifyActivityScheduleSearchInmateMovementWhileClickingSaveDataGetsVanished_63038', async ({ testData, loaderPage, activity, popupPage }) => {
    withTestContext(testData, '63038', 'Activity');

    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Schedule Search');
    await activity.module.switchToScheduleSearch();
    await activity.scheduleSearch.enterAtSPN(testData.activity('SPN'));
    await activity.scheduleSearch.enterStartDate(testData.activity('StartDate'));
    await activity.scheduleSearch.enterToDateAsCurrentDate();
    await activity.scheduleSearch.clickSearchButton();
    await activity.scheduleSearch.selectAtSPNNoInGrid(testData.activity('SPN'));
    await activity.module.switchToInmateMovement();
    await activity.inmateMovement.verifyAtEventType(testData.activity('EventType'));
    await activity.inmateMovement.verifyAtSubType(testData.activity('SubType'));
    await activity.inmateMovement.verifyAtSubject(testData.activity('Subject'));
    await activity.inmateMovement.verifyAtStartDate(testData.activity('StartDate'));
    await activity.inmateMovement.verifyStartTimeIsNotNull();
    await activity.inmateMovement.verifyAtEndDate(testData.activity('EndDate'));
    await activity.inmateMovement.verifyEndTimeIsNotNull();
    await activity.inmateMovement.save();
    await activity.module.switchToInmateMovement();
    await activity.inmateMovement.verifyAtEventType(testData.activity('EventType'));
    await activity.inmateMovement.verifyAtSubType(testData.activity('SubType'));
    await activity.inmateMovement.verifyAtSubject(testData.activity('Subject'));
    await activity.inmateMovement.verifyAtStartDate(testData.activity('StartDate'));
    await activity.inmateMovement.verifyStartTimeIsNotNull();
    await activity.inmateMovement.verifyAtEndDate(testData.activity('EndDate'));
    await activity.inmateMovement.verifyEndTimeIsNotNull();
    await activity.inmateMovement.clickCurrentAndFutureDates();
    await activity.inmateMovement.save();
    await activity.module.switchToInmateMovement();
    await activity.inmateMovement.verifyAtEventType(testData.activity('EventType'));
    await activity.inmateMovement.verifyAtSubType(testData.activity('SubType'));
    await activity.inmateMovement.verifyAtSubject(testData.activity('Subject'));
    await activity.inmateMovement.verifyAtStartDate(testData.activity('StartDate'));
    await activity.inmateMovement.verifyStartTimeIsNotNull();
    await activity.inmateMovement.verifyAtEndDate(testData.activity('EndDate'));
    await activity.inmateMovement.verifyEndTimeIsNotNull();
  });

  test('verifyActivityGroupMovementWhileClickingListinmatesSPNNoIsDisplayedInGrid_63580', async ({ testData, loaderPage, activity }) => {
    withTestContext(testData, '63580', 'Activity');

    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Group Movement');
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.selectAtEventType(testData.activity('EventType'));
    await activity.groupMovement.selectAtSubType(testData.activity('SubType'));
    await activity.groupMovement.tabOutStartDate();
    await activity.groupMovement.tabOutEndDate();
    await activity.groupMovement.selectAtBuilding(testData.activity('Building'));
    await activity.groupMovement.clickOnFloorChkBoxUsingPOD();
    await activity.groupMovement.clickListinmatesButton();
    await activity.groupMovement.verifyGroupMovementRowCountIsNotNull();
    await activity.groupMovement.saveScreen();
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.verifyAdditionalSuccessfullAcknowledgeMessage();
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.clickCheckboxUsingInmateName();
    await activity.groupMovement.clickSignOutButton();
    await activity.module.switchToOutSideOutIn();
    await activity.outsideSignOutIn.verifyAtNameInGrid(testData.activity('Name'));
    await activity.outsideSignOutIn.verifySignAsOutInGrid();
    await activity.module.switchToOutSideOutIn();
  });

  test('AdmissionGroupMovementAfterCreatingEntryEnterScanBarcodeClickSignOutClickScanNotMatchedButtonTheScreenOpensWith1006ValidationCRM178212_70001', async ({ testData, loaderPage, activity, popupPage }) => {
    withTestContext(testData, '70001', 'Activity');

    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Group Movement');
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.selectAtEventType(testData.activity('EventType'));
    await activity.groupMovement.selectAtSubType(testData.activity('SubType'));
    await activity.groupMovement.tabOutStartDate();
    await activity.groupMovement.tabOutEndDate();
    await activity.groupMovement.tabOutEndDate();
    await activity.groupMovement.enterAtScanBarcode(testData.activity('ScanBarcode'));
    await activity.groupMovement.verifyScanNotMatchedButtonIsDisplayed();
    await activity.groupMovement.clickScanNotMatchedButton();
    await activity.module.switchToGroupMovement();
  });

  test('CRM191147_schedulerIssues_69791', async ({ testData, loaderPage, activity }) => {
    withTestContext(testData, '69791', 'Activity');

    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Group Movement');
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.selectAtEventType(testData.activity('EventType'));
    await activity.groupMovement.selectAtSubType(testData.activity('SubType'));
    await activity.groupMovement.tabOutStartDate();
    await activity.groupMovement.tabOutEndDate();
    await activity.groupMovement.enterAtStartTime(testData.activity('StartTime0'));
    await activity.groupMovement.enterAtToTime(testData.activity('ToTime0'));
    await activity.groupMovement.enterAtSPN(testData.activity('SPN1'));
    await activity.groupMovement.clickAddButton();
    await activity.groupMovement.enterAtSPN(testData.activity('SPN2'));
    await activity.groupMovement.clickAddButton();
    await activity.groupMovement.saveScreen();
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.verifyAdditionalSuccessfullAcknowledgeMessage();
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.verifyAtNameInGrid(0, testData.activity('Name0'));
    await activity.groupMovement.verifyAtNameInGrid(1, testData.activity('Name1'));
    await loaderPage.navigateToScreen('Schedule Search');
    await activity.module.switchToScheduleSearch();
    await activity.scheduleSearch.enterStartDateAsCurrentDate();
    await activity.scheduleSearch.enterToDateAsCurrentDate();
    await activity.scheduleSearch.enterStartTime(testData.activity('StartTime'));
    await activity.scheduleSearch.enterToTime(testData.activity('ToTime'));
    await activity.scheduleSearch.clickSearchButton();
    await activity.scheduleSearch.verifyAtScheduleFromTimeIsAfterOrEqualToGivenTime(0);
    await activity.scheduleSearch.verifyAtScheduleToTimeIsBeforeOrEqualToGivenTime(1);
    await activity.scheduleSearch.clickBackButton();
    await activity.scheduleSearch.clickResetButton();
    await activity.scheduleSearch.enterStartDateAsCurrentDate();
    await activity.scheduleSearch.enterToDateAsCurrentDate();
    await activity.scheduleSearch.enterStartTime(testData.activity('StartTime1'));
    await activity.scheduleSearch.enterToTime(testData.activity('ToTime1'));
    await activity.scheduleSearch.clickSearchButton();
    await activity.scheduleSearch.verifyAtScheduleFromTimeIsAfterOrEqualToGivenTime(0);
    await activity.scheduleSearch.verifyAtScheduleToTimeIsBeforeOrEqualToGivenTime(1);
  });

  test('ActivityIndividualSchedulingResetAndAddNewNotWorkingAsExpectedCRM198386_74481', async ({ testData, loaderPage, activity }) => {
    withTestContext(testData, '74481', 'Activity');

    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Individual Scheduling');
    await activity.module.switchToIndividualScheduling();
    await activity.individualScheduling.verifySPNIsBlank();
    await activity.individualScheduling.verifyNameIDIsBlank();
    await activity.individualScheduling.verifyLastNameIsBlank();
    await activity.individualScheduling.verifyFirstNameIsBlank();
    await activity.individualScheduling.enterAtSPN(testData.activity('SPN'));
    await activity.individualScheduling.verifyAtLastName(testData.activity('LastName'));
    await activity.individualScheduling.verifyAtFirstName(testData.activity('FirstName'));
    await activity.individualScheduling.clickAddNewButton();
    await activity.module.switchToInmateMovement();
    await activity.inmateMovement.selectAtActivityBySubjectInGrid(testData.activity('Subject1'));
    await activity.inmateMovement.verifyAtEventNo(testData.activity('EventNo1'));
    await activity.inmateMovement.verifyAtEventType(testData.activity('EventType'));
    await activity.inmateMovement.verifyAtSubject(testData.activity('Subject'));
    await activity.inmateMovement.verifyAtLocation(testData.activity('Location1'));
    await activity.inmateMovement.verifyAtStartDate(testData.activity('StartDate'));
    await activity.inmateMovement.verifyAtEndDate(testData.activity('EndDate'));
    await activity.inmateMovement.verifyStartTimeIsNotNull();
    await activity.inmateMovement.verifyEndTimeIsNotNull();
    await activity.inmateMovement.verifyAtNotes(testData.activity('Notes1'));
    await activity.inmateMovement.verifyAtRepeat(testData.activity('Repeat1'));
    await activity.inmateMovement.verifyAtCustom(testData.activity('Custom'));
    await activity.inmateMovement.verifyAtCustom1(testData.activity('Custom1'));
    await activity.inmateMovement.clickResetIcon();
    await activity.inmateMovement.close();
    await activity.module.switchToIndividualScheduling();
    await activity.individualScheduling.verifyAtLastName(testData.activity('LastName'));
    await activity.individualScheduling.verifyAtFirstName(testData.activity('FirstName'));
    await activity.individualScheduling.clickResetButton();
    await activity.individualScheduling.verifySPNIsBlank();
    await activity.individualScheduling.verifyLastNameIsBlank();
    await activity.individualScheduling.verifyFirstNameIsBlank();
    await activity.individualScheduling.clickAddNewButton();
    await activity.module.switchToIndividualScheduling();
  });
});

test.describe('Activity Entry Smoke @ActivityEntrySmoke', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('screenNameSmokeScripts', async ({ testData, loaderPage, activity, popupPage }) => {
    withTestContext(testData, 'WorkRelease', 'Activity');

    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Schedule Search');
    await activity.module.switchToScheduleSearch();
    await activity.scheduleSearch.clickAddNewButton();
    await activity.module.switchToWorkRelease();
    await activity.workRelease.enterSPNNoAs10();
    await activity.workRelease.save();
    await activity.module.switchToWorkRelease();
    await activity.workRelease.verifyAdditionSuccessfulMessage();
  });
});

test.describe('Q4 Activity Sys Parameter 2024 @Q4ActivitySysParameter2024', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('ToVerifyTheActivityOutsideSignOutInScreenClickVerifyIDButtonVerifyNamesScreenOpensUnderVerifyNameScreenClickBypassReaderCRM173526_42223', async ({ testData, loaderPage, activity, settings }) => {
    withTestContext(testData, '42223', 'Activity');

    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4436AsTrue();
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4708AsTrue();
    await settings.module.switchToSystemParameter();
    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Group Movement');
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.selectAtEventType(testData.activity('EventType'));
    await activity.groupMovement.selectAtSubType(testData.activity('SubType'));
    await activity.groupMovement.tabOutStartDate();
    await activity.groupMovement.tabOutEndDate();
    await activity.groupMovement.tabOutEndDate();
    await activity.groupMovement.enterAtSPN(testData.activity('SPN1'));
    await activity.groupMovement.clickAddButton();
    await activity.groupMovement.enterAtSPN(testData.activity('SPN2'));
    await activity.groupMovement.clickAddButton();
    await activity.groupMovement.saveScreen();
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.verifyAdditionalSuccessfullAcknowledgeMessage();
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.clickSelectAllCheckbox();
    await activity.groupMovement.clickSignOutButton();
    await activity.groupMovement.verify31528SomeOfTheSelectedInmatesPopup();
    await activity.module.switchToOutSideOutIn();
    await activity.outsideSignOutIn.selectGridRowCheckboxByName(testData.activity('Name'));
    await activity.outsideSignOutIn.clickVerifyIDButton();
    await activity.module.switchToVerifyName();
    await activity.verifyName.clickBypassReaderButton();
    await activity.verifyName.enterAtOfficer(testData.activity('OfficerPF'));
    await activity.verifyName.clickOKButton();
    await activity.module.switchToOutSideOutIn();
    await activity.outsideSignOutIn.verifyTheVerifyIDButtonIsDisplayed();
  });

  test('ActivityGroupMovementInsideGroupMovement_74240', async ({ testData, loaderPage, activity, settings }) => {
    withTestContext(testData, '74240', 'Activity');

    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4709AsTrue();
    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Group Movement');
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.selectAtEventType(testData.activity('EventType'));
    await activity.groupMovement.selectAtSubType(testData.activity('SubType'));
    await activity.groupMovement.enterAtSubject(testData.activity('Subject1'));
    await activity.groupMovement.enterAtLocation(testData.activity('Location1'));
    await activity.groupMovement.enterPastStartDate(15);
    await activity.groupMovement.enterPastEndDate(15);
    await activity.groupMovement.clickSave();
    await activity.groupMovement.verify31506DateShouldNotBePriorToCurrentDateAcknowledgementPopup();
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.selectAtEventType(testData.activity('EventType'));
    await activity.groupMovement.selectAtSubType(testData.activity('SubType'));
    await activity.groupMovement.enterAtSubject(testData.activity('Subject1'));
    await activity.groupMovement.enterAtLocation(testData.activity('Location1'));
    await activity.groupMovement.tabOutStartDate();
    await activity.groupMovement.tabOutEndDate();
    await activity.groupMovement.enterAtNotes(testData.activity('Notes'));
    await activity.groupMovement.selectAtBuilding(testData.activity('Building'));
    await activity.groupMovement.clickOnFloorChkBoxUsingPOD();
    await activity.groupMovement.clickListinmatesButton();
    await activity.groupMovement.saveScreen();
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.clickSelectAllCheckbox();
    await activity.groupMovement.clickSignOutButton();
    await activity.module.switchToInsideSignOutIn();
    await activity.insideSignOutIn.verifyAtNameInGrid(1, testData.activity('InmateName1'));
    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4709AsFalse();
    await settings.module.switchToSystemParameter();
  });

  test('ActivityGroupMovementInsideGroupMovement_74240A', async ({ testData, loaderPage, activity, settings }) => {
    withTestContext(testData, '74240A', 'Activity');

    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4709AsFalse();
    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Group Movement');
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.selectAtEventType(testData.activity('EventType'));
    await activity.groupMovement.selectAtSubType(testData.activity('SubType'));
    await activity.groupMovement.enterAtSubject(testData.activity('Subject1'));
    await activity.groupMovement.enterAtLocation(testData.activity('Location1'));
    await activity.groupMovement.tabOutStartDate();
    await activity.groupMovement.tabOutEndDate();
    await activity.groupMovement.enterAtNotes(testData.activity('Notes'));
    await activity.groupMovement.selectAtBuilding(testData.activity('Building'));
    await activity.groupMovement.clickOnFloorChkBoxUsingPOD();
    await activity.groupMovement.clickListinmatesButton();
    await activity.groupMovement.saveScreen();
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.clickSelectAllCheckbox();
    await activity.groupMovement.clickSignOutButton();
    await activity.module.switchToInsideSignOutIn();
    await activity.insideSignOutIn.verifyAtNameIsNotPresentInGrid(1);
    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4709AsFalse();
    await settings.module.switchToSystemParameter();
  });

  test('ActivityGroupMovementRepeatInsideSignOut_74383', async ({ testData, loaderPage, activity, settings }) => {
    withTestContext(testData, '74383', 'Activity');

    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4709AsTrue();
    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Group Movement');
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.selectAtEventType(testData.activity('EventType'));
    await activity.groupMovement.selectAtSubType(testData.activity('SubType'));
    await activity.groupMovement.enterAtSubject(testData.activity('Subject1'));
    await activity.groupMovement.enterAtLocation(testData.activity('Location1'));
    await activity.groupMovement.tabOutStartDate();
    await activity.groupMovement.tabOutEndDate();
    await activity.groupMovement.clickRepeatCheckbox();
    await activity.groupMovement.selectAtBuilding(testData.activity('Building'));
    await activity.groupMovement.clickOnFloorChkBoxUsingPOD();
    await activity.groupMovement.clickListinmatesButton();
    await activity.groupMovement.saveScreen();
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.clickSelectAllCheckbox();
    await activity.groupMovement.clickSignOutButton();
    await activity.module.switchToInsideSignOutIn();
    await activity.insideSignOutIn.verifyAtNameInGrid(1, testData.activity('InmateName1'));
    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4709AsFalse();
    await settings.module.switchToSystemParameter();
  });

  test('ActivityGroupMovementRepeatInsideSignOut_74383A', async ({ testData, loaderPage, activity, settings }) => {
    withTestContext(testData, '74383A', 'Activity');

    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4709AsFalse();
    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Group Movement');
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.selectAtEventType(testData.activity('EventType'));
    await activity.groupMovement.selectAtSubType(testData.activity('SubType'));
    await activity.groupMovement.enterAtSubject(testData.activity('Subject1'));
    await activity.groupMovement.enterAtLocation(testData.activity('Location1'));
    await activity.groupMovement.tabOutStartDate();
    await activity.groupMovement.tabOutEndDate();
    await activity.groupMovement.clickRepeatCheckbox();
    await activity.groupMovement.selectAtBuilding(testData.activity('Building'));
    await activity.groupMovement.clickOnFloorChkBoxUsingPOD();
    await activity.groupMovement.clickListinmatesButton();
    await activity.groupMovement.saveScreen();
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.clickSelectAllCheckbox();
    await activity.groupMovement.clickSignOutButton();
    await activity.module.switchToInsideSignOutIn();
    await activity.insideSignOutIn.verifyAtNameIsNotPresentInGrid(1);
  });

  test('ActivityGroupMovementOutsideGroupMovement_74443', async ({ testData, loaderPage, activity, settings }) => {
    withTestContext(testData, '74443', 'Activity');

    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4707AsTrue();
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4708AsFalse();
    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Group Movement');
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.selectAtEventType(testData.activity('EventType'));
    await activity.groupMovement.selectAtSubType(testData.activity('SubType'));
    await activity.groupMovement.tabOutStartDate();
    await activity.groupMovement.tabOutEndDate();
    await activity.groupMovement.selectAtBuilding(testData.activity('Building'));
    await activity.groupMovement.clickOnFloorChkBoxUsingPOD();
    await activity.groupMovement.clickListinmatesButton();
    await activity.groupMovement.saveScreen();
    await activity.module.switchToGroupMovement();
    await loaderPage.navigateToScreenByScreenIDWithContains('8610');
    await activity.module.switchToOutSideOutIn();
    await activity.outsideSignOutIn.verifyAtNameInGrid(1, testData.activity('InmateName1'));
    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4707AsFalse();
    await settings.module.switchToSystemParameter();
  });

  test('ActivityGroupMovementOutsideGroupMovement_74443A', async ({ testData, loaderPage, activity, settings }) => {
    withTestContext(testData, '74443A', 'Activity');

    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4707AsFalse();
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4708AsTrue();
    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Group Movement');
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.selectAtEventType(testData.activity('EventType'));
    await activity.groupMovement.selectAtSubType(testData.activity('SubType'));
    await activity.groupMovement.tabOutStartDate();
    await activity.groupMovement.tabOutEndDate();
    await activity.groupMovement.selectAtBuilding(testData.activity('Building'));
    await activity.groupMovement.clickOnFloorChkBoxUsingPOD();
    await activity.groupMovement.clickListinmatesButton();
    await activity.groupMovement.saveScreen();
    await activity.module.switchToGroupMovement();
    await loaderPage.navigateToScreenByScreenIDWithContains('8610');
    await activity.module.switchToOutSideOutIn();
    await activity.outsideSignOutIn.verifyAtNameIsNotPresentInGrid(1);
    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4708AsFalse();
    await settings.module.switchToSystemParameter();
  });

  test('ActivityGroupMovementRepeatOutsideSignOut_74725', async ({ testData, loaderPage, activity, settings }) => {
    withTestContext(testData, '74725', 'Activity');

    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4707AsFalse();
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4708AsTrue();
    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Group Movement');
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.selectAtEventType(testData.activity('EventType'));
    await activity.groupMovement.selectAtSubType(testData.activity('SubType'));
    await activity.groupMovement.tabOutStartDate();
    await activity.groupMovement.tabOutEndDate();
    await activity.groupMovement.clickRepeatCheckbox();
    await activity.groupMovement.selectAtBuilding(testData.activity('Building'));
    await activity.groupMovement.clickOnFloorChkBoxUsingPOD();
    await activity.groupMovement.clickListinmatesButton();
    await activity.groupMovement.saveScreen();
    await activity.module.switchToGroupMovement();
    await loaderPage.navigateToScreenByScreenIDWithContains('8610');
    await activity.module.switchToOutSideOutIn();
    await activity.outsideSignOutIn.verifyAtNameIsNotPresentInGrid(1);
    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4708AsFalse();
    await settings.module.switchToSystemParameter();
  });

  test('ActivityGroupMovementRepeatOutsideSignOut_74725A', async ({ testData, loaderPage, activity, settings }) => {
    withTestContext(testData, '74725A', 'Activity');

    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4707AsTrue();
    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Group Movement');
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.selectAtEventType(testData.activity('EventType'));
    await activity.groupMovement.selectAtSubType(testData.activity('SubType'));
    await activity.groupMovement.tabOutStartDate();
    await activity.groupMovement.tabOutEndDate();
    await activity.groupMovement.clickRepeatCheckbox();
    await activity.groupMovement.selectAtBuilding(testData.activity('Building'));
    await activity.groupMovement.clickOnFloorChkBoxUsingPOD();
    await activity.groupMovement.clickListinmatesButton();
    await activity.groupMovement.saveScreen();
    await activity.module.switchToGroupMovement();
    await loaderPage.navigateToScreenByScreenIDWithContains('8610');
    await activity.module.switchToOutSideOutIn();
    await activity.outsideSignOutIn.verifyAtNameInGrid(1, testData.activity('InmateName1'));
    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4707AsFalse();
    await settings.module.switchToSystemParameter();
  });

  test('ActivityWorkRelease10008ErrorWhenTryingToAddAndSaveSubJuryEnabledCRM197575_77523', async ({ testData, loaderPage, activity, settings }) => {
    withTestContext(testData, '77523', 'Activity');

    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter266AsTrue();
    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Work Release');
    await activity.module.switchToWorkRelease();
    await activity.workRelease.enterAtSPN(testData.activity('SPN1'));
    await activity.workRelease.clickMainTab();
    await activity.workRelease.mainTab.selectAtWorkReleaseActivity(testData.activity('WorkReleaseActivity'));
    await activity.workRelease.mainTab.tabOutAssignDate();
    await activity.workRelease.mainTab.enterAtPF(testData.activity('PF'));
    await activity.workRelease.mainTab.clickAddButton();
    await activity.module.switchToEmployer();
    await activity.employer.enterAtBusinessNameID(testData.activity('BusinessNameID'));
    await activity.employer.enterAtOccupation(testData.activity('Occupation'));
    await activity.employer.enterHireDateAsCurrentDate();
    await activity.employer.enterAtWorkingHours(testData.activity('WorkingHours'));
    await activity.employer.enterAtTravelTime(testData.activity('TravelTime'));
    await activity.employer.enterAtVerifiedByPF(testData.activity('VerifiedByPF'));
    await activity.employer.saveAndCloseScreen();
    await activity.module.switchToWorkRelease();
    await activity.workRelease.verifySaveConfirmationPopup();
    await activity.module.switchToWorkRelease();
    await activity.workRelease.save();
    await activity.module.switchToWorkRelease();
    await activity.workRelease.verifyAdditionSuccessfulMessage();
    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter266AsFalse();
    await settings.module.switchToSystemParameter();
  });
});

test.describe('Q4 Activity Legacy 2025 @Q4ActivityLegacy2025', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('ActivityGroupMovementGroupMovement_74333', async ({ testData, loaderPage, activity }) => {
    withTestContext(testData, '74333', 'Activity');

    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Group Movement');
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.selectAtEventType(testData.activity('EventType'));
    await activity.groupMovement.selectAtSubType(testData.activity('SubType'));
    await activity.groupMovement.enterAtSubject(testData.activity('Subject1'));
    await activity.groupMovement.enterAtLocation(testData.activity('Location1'));
    await activity.groupMovement.tabOutStartDate();
    await activity.groupMovement.tabOutEndDate();
    await activity.groupMovement.enterAtNotes(testData.activity('Notes'));
    await activity.groupMovement.enterAtSPN(testData.activity('SPN1'));
    await activity.groupMovement.clickAddButton();
    await activity.groupMovement.enterAtSPN(testData.activity('SPN2'));
    await activity.groupMovement.clickAddButton();
    await activity.groupMovement.enterAtSPN(testData.activity('SPN3'));
    await activity.groupMovement.verify30055ThisNameDoesNotHaveAnOpenBookingPopup();
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.enterAtSPN(testData.activity('SPN4'));
    await activity.groupMovement.clickAddButton();
    await activity.groupMovement.saveScreen();
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.verifyAtInmateNameInGrid(1, testData.activity('InmateName1'));
    await activity.groupMovement.verifyAtInmateNameInGrid(2, testData.activity('InmateName2'));
    await activity.groupMovement.verifyAtInmateNameInGrid(3, testData.activity('InmateName3'));
    await activity.groupMovement.verifySignoutButtonIsEnabled();
    await activity.groupMovement.clickSelectAllCheckbox();
    await activity.groupMovement.clickSignOutButton();
    await activity.groupMovement.verify31604InmateIsNotActiveInStatusPopup();
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.verifyAtUnSelectedInmateInGrid(1);
    await activity.groupMovement.verifyAtUnSelectedInmateInGrid(3);
    await activity.groupMovement.verifyAtSelectedInmateInGrid(2);
    await activity.groupMovement.clickSignOutButton();
    await activity.groupMovement.verify31528SomeOfTheSelectedInmatesPopup();
    await activity.module.switchToInsideSignOutIn();
    await activity.insideSignOutIn.verifyNameColorAsGreenInGrid(2);
    await activity.insideSignOutIn.verifyAtNameInGrid(2, testData.activity('InmateName2'));
    await activity.insideSignOutIn.verifyAtSignInGrid(2, 1);
  });
});

test.describe('Q1 Activity Sys Parameter 2026 @Q1ActivitySysParameter2026', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('ActivityGroupMovementOutsideGroupMovement_76243A', async ({ testData, loaderPage, activity, settings }) => {
    withTestContext(testData, '76243A', 'Activity');

    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4707AsTrue();
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4708AsTrue();
    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Group Movement');
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.selectAtEventType(testData.activity('EventType'));
    await activity.groupMovement.selectAtSubType(testData.activity('SubType'));
    await activity.groupMovement.tabOutStartDate();
    await activity.groupMovement.tabOutEndDate();
    await activity.groupMovement.selectAtBuilding(testData.activity('Building'));
    await activity.groupMovement.clickOnFloorChkBoxUsingPOD();
    await activity.groupMovement.clickListinmatesButton();
    await activity.groupMovement.saveScreen();
    await activity.module.switchToGroupMovement();
    await loaderPage.navigateToScreenByScreenIDWithContains('8610');
    await activity.module.switchToOutSideOutIn();
    await activity.outsideSignOutIn.verifyAtNameInGrid(1, testData.activity('InmateName1'));
    await activity.outsideSignOutIn.selectAtNameCheckboxInGrid(1);
    await activity.outsideSignOutIn.clickBatchOut();
    await activity.outsideSignOutIn.verifyNameColorAsGreenInGrid(1);
    await activity.outsideSignOutIn.selectAtNameCheckboxInGrid(1);
    await activity.outsideSignOutIn.clickBatchInButton();
    await activity.outsideSignOutIn.verifyAtNameIsNotPresentInGrid(1);
    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4708AsFalse();
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4707AsFalse();
    await settings.module.switchToSystemParameter();
  });

  test('ActivityGroupMovementOutsideGroupMovement_76243B', async ({ testData, loaderPage, activity, settings }) => {
    withTestContext(testData, '76243B', 'Activity');

    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4707AsFalse();
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4708AsFalse();
    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Group Movement');
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.selectAtEventType(testData.activity('EventType'));
    await activity.groupMovement.selectAtSubType(testData.activity('SubType'));
    await activity.groupMovement.tabOutStartDate();
    await activity.groupMovement.tabOutEndDate();
    await activity.groupMovement.selectAtBuilding(testData.activity('Building'));
    await activity.groupMovement.clickOnFloorChkBoxUsingPOD();
    await activity.groupMovement.clickListinmatesButton();
    await activity.groupMovement.saveScreen();
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.clickSelectAllCheckbox();
    await activity.groupMovement.clickSignOutButton();
    await activity.module.switchToOutSideOutIn();
    await activity.outsideSignOutIn.selectAtNameInGrid(1);
    await activity.outsideSignOutIn.verifyAtLabel(1);
    await activity.outsideSignOutIn.clickUpdateButton();
    await activity.outsideSignOutIn.verifyNameColorAsGreenInGrid(1);
    await activity.outsideSignOutIn.selectAtNameInGrid(1);
    await activity.outsideSignOutIn.verifyAtLabel(2);
    await activity.outsideSignOutIn.clickUpdateButton();
    await activity.outsideSignOutIn.verifyAtNameIsNotPresentInGrid(1);
  });

  test('ActivityGroupMovementOutsideGroupMovement_76243C', async ({ testData, loaderPage, activity, settings }) => {
    withTestContext(testData, '76243C', 'Activity');

    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4707AsFalse();
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4708AsTrue();
    await loaderPage.navigateToModule('Activity');
    await loaderPage.navigateToScreen('Group Movement');
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.selectAtEventType(testData.activity('EventType'));
    await activity.groupMovement.selectAtSubType(testData.activity('SubType'));
    await activity.groupMovement.tabOutStartDate();
    await activity.groupMovement.tabOutEndDate();
    await activity.groupMovement.selectAtBuilding(testData.activity('Building'));
    await activity.groupMovement.clickOnFloorChkBoxUsingPOD();
    await activity.groupMovement.clickListinmatesButton();
    await activity.groupMovement.saveScreen();
    await activity.module.switchToGroupMovement();
    await loaderPage.navigateToScreenByScreenIDWithContains('8610');
    await activity.module.switchToOutSideOutIn();
    await activity.outsideSignOutIn.verifyAtNameIsNotPresentInGrid(1);
    await activity.groupMovement.clickAddInmatesButton();
    await activity.groupMovement.saveScreen();
    await activity.module.switchToGroupMovement();
    await activity.groupMovement.clickSelectAllCheckbox();
    await activity.groupMovement.clickSignOutButton();
    await activity.module.switchToOutSideOutIn();
    await activity.outsideSignOutIn.selectAtNameCheckboxInGrid(1);
    await activity.outsideSignOutIn.clickBatchOut();
    await activity.outsideSignOutIn.verifyNameColorAsGreenInGrid(1);
    await activity.outsideSignOutIn.selectAtNameCheckboxInGrid(1);
    await activity.outsideSignOutIn.clickBatchInButton();
    await activity.outsideSignOutIn.verifyAtNameIsNotPresentInGrid(1);
    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemParameter4708AsFalse();
    await settings.module.switchToSystemParameter();
  });
});
