// @ts-nocheck
import { test, expect, withTestContext } from '../../src/fixtures/test-fixtures';

test.describe('HelpDesk Functional @HelpDeskFunctional', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('TicketEntry_267553', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '267553', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickAddNewButton();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.clickSaveButton();
    await helpdesk.internalTicketEntry.verifyEnterHelpDeskClassAcknowledgeMessage();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass'));
    await helpdesk.internalTicketEntry.clickSaveButton();
    await helpdesk.internalTicketEntry.verifyEnterSubjectAcknowledgeMessage();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.enterSubject();
    await helpdesk.internalTicketEntry.clickSaveButton();
    await helpdesk.internalTicketEntry.verifyEnterCreatorAcknowledgeMessage();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.enterAtCreatorPF(testData.helpdesk('CreatorPF'));
    await helpdesk.internalTicketEntry.clickSaveButton();
    await helpdesk.internalTicketEntry.verifyEnterStatusAcknowledgeMessage();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.selectAtStatus(testData.helpdesk('Status'));
    await helpdesk.internalTicketEntry.clickSaveButton();
    await helpdesk.internalTicketEntry.verifyEnterPriorityAcknowledgeMessage();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.selectAtPriority(testData.helpdesk('Priority'));
    await helpdesk.internalTicketEntry.enterAtOwnerPF(testData.helpdesk('OwnerPF'));
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.save();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAdditionSuccessfulStatusMessage();
    await helpdesk.internalTicketEntry.verifyAtStatusInComboBox();
    await helpdesk.internalTicketEntry.verifyAtStatusInTicketStatus();
    await helpdesk.internalTicketEntry.verifyTicketNoIsGenerated();
    await helpdesk.internalTicketEntry.verifyActivitiesTabIsEnabledAndDisplayed();
    await helpdesk.internalTicketEntry.verifyAttachmentTabIsEnabledAndDisplayed();
    await helpdesk.internalTicketEntry.clickDetailTab();
    await helpdesk.internalTicketEntry.detailTab.selectAtProject(testData.helpdesk('Project'));
    await helpdesk.internalTicketEntry.detailTab.selectAtModule(testData.helpdesk('Module'));
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.save();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyUpdateSuccessfulStatusMessage();
  });

  test('verifyTicketSearchFunctionality_267555', async ({ testData, loaderPage, helpdesk, home, settings }) => {
    withTestContext(testData, '267555', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickAddNewButton();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass'));
    await helpdesk.internalTicketEntry.enterAtSubject(testData.helpdesk('Subject'));
    await helpdesk.internalTicketEntry.enterAtCreatorPF(testData.helpdesk('CreatorPF'));
    await helpdesk.internalTicketEntry.selectAtStatus(testData.helpdesk('Status'));
    await helpdesk.internalTicketEntry.selectAtPriority(testData.helpdesk('Priority'));
    await helpdesk.internalTicketEntry.enterAtOwnerPF(testData.helpdesk('OwnerPF'));
    await helpdesk.internalTicketEntry.save();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAdditionSuccessfulStatusMessage();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.clickPrintIcon();
    await home.module.switchToSelectReport();
    await home.selectReport.clickAddNewReportButton();
    await settings.module.switchToReportRepositoryEntry();
    await settings.reportRepositoryEntry.close();
    await home.module.switchToSelectReport();
    await home.selectReport.closeScreen();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.switchToActivitiesTab();
    await helpdesk.internalTicketEntry.activitiesTab.clickAddActivityButton();
    await helpdesk.internalTicketEntry.activitiesTab.switchToActivityEntry();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.tabFinishedDateTime();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.verifyAtStatus(testData.helpdesk('ActivityStatus'));
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.selectAtTemplate(testData.helpdesk('Template'));
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.clickLoadButton();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.clickSaveNClose();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.verifyAdditionSuccessfulAcknowledgeMessage();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.switchToActivitiesTab();
    await helpdesk.internalTicketEntry.activitiesTab.verifyAtSubject(testData.helpdesk('TemplateValue'));
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.clickDetailTab();
    await helpdesk.internalTicketEntry.detailTab.enterAtProblemDescription(testData.helpdesk('ProblemDescription'));
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.save();
    await helpdesk.internalTicketEntry.verifyUpdateSuccessfulStatusMessage();
  });

  test('TicketSearch_267564', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '267564', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickAddNewButton();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass'));
    await helpdesk.internalTicketEntry.enterAtSubject(testData.helpdesk('Subject'));
    await helpdesk.internalTicketEntry.enterAtCreatorPF(testData.helpdesk('CreatorPF'));
    await helpdesk.internalTicketEntry.selectAtStatus(testData.helpdesk('Status'));
    await helpdesk.internalTicketEntry.selectAtPriority(testData.helpdesk('Priority'));
    await helpdesk.internalTicketEntry.enterAtOwnerPF(testData.helpdesk('OwnerPF'));
    await helpdesk.internalTicketEntry.clickDetailTab();
    await helpdesk.internalTicketEntry.detailTab.selectAtCategory(testData.helpdesk('Category'));
    await helpdesk.internalTicketEntry.detailTab.selectAtType(testData.helpdesk('Type'));
    await helpdesk.internalTicketEntry.save();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAdditionSuccessfulStatusMessage();
    await helpdesk.internalTicketEntry.verifyTicketNoIsGenerated();
    const ticketNo = await helpdesk.internalTicketEntry.readTicketNo();
    await helpdesk.internalTicketEntry.verifyActivitiesTabIsEnabledAndDisplayed();
    await helpdesk.internalTicketEntry.verifyAttachmentTabIsEnabledAndDisplayed();
    await helpdesk.internalTicketEntry.verifyAtStatusInTicketStatus();
    await helpdesk.internalTicketEntry.verifyCreatedDateDisplayed();
    await helpdesk.internalTicketEntry.verifyCreatedDateValueAsCurrentDate();
    await helpdesk.internalTicketEntry.verifyUpdatedDateDisplayed();
    await helpdesk.internalTicketEntry.verifyUpdatedDateValueAsCurrentDate();
    await helpdesk.internalTicketEntry.clickSaveNClose();
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickBackButton();
    await helpdesk.internalTicketSearch.enterTicketNoByActiveData(ticketNo);
    await helpdesk.internalTicketSearch.verifyTicketNoInfoIconIsDisplayed();
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.verifyTicketNumberInGrid(ticketNo);
    await helpdesk.internalTicketSearch.verifyAtSubjectInGrid(1);
    await helpdesk.internalTicketSearch.verifyAtStatusInGrid();
  });

  test('verifyStatusFunctionalityInTicketEntryScreenAndTicketSearchScreen_294705', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '294705', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.enterAtTicketNo(testData.helpdesk('TicketNo'));
    await helpdesk.internalTicketSearch.verifyTicketNoInfoIconIsDisplayed();
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.verifyAtStatusInGrid();
    await helpdesk.internalTicketSearch.verifyAtStatusColorAsRedInGrid(0);
    await helpdesk.internalTicketSearch.selectRowByAtTicketNo(testData.helpdesk('TicketNo'));
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.selectAtStatus1(testData.helpdesk('Status1'));
    await helpdesk.internalTicketEntry.clickSaveButton();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyUpdateSuccessfulStatusMessage();
    await helpdesk.internalTicketEntry.verifyTotalDurationIsDisplayed();
    await helpdesk.internalTicketEntry.verifyCreatedDateDisplayed();
    await helpdesk.internalTicketEntry.verifyUpdatedDateDisplayed();
    await helpdesk.internalTicketEntry.close();
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickBackButton();
    await helpdesk.internalTicketSearch.clickResetButton();
    await helpdesk.internalTicketSearch.enterAtTicketNo(testData.helpdesk('TicketNo'));
    await helpdesk.internalTicketSearch.verifyTicketNoInfoIconIsDisplayed();
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.verifyAtStatus1InGrid();
    await helpdesk.internalTicketSearch.verifyAtStatusColorAsBlackInGrid();
  });

  test('verifySearchCriteriaBasedOnMandatoryFieldsInTicketEntryScreen_294706', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '294706', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.enterAtTicketNo(testData.helpdesk('TicketNo'));
    await helpdesk.internalTicketSearch.verifyTicketNoInfoIconIsDisplayed();
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.verifyAtTicketNumberInGrid();
    await helpdesk.internalTicketSearch.clickBackButton();
    await helpdesk.internalTicketSearch.clickResetButton();
    await helpdesk.internalTicketSearch.verifyTicketNoFieldIsEmpty();
    await helpdesk.internalTicketSearch.enterAtOwnerPF(testData.helpdesk('OwnerPF'));
    await helpdesk.internalTicketSearch.verifyOwnerInfoIconIsDisplayed();
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.verifyAtOwnerNameInGrid();
    await helpdesk.internalTicketSearch.clickBackButton();
    await helpdesk.internalTicketSearch.clickResetButton();
    await helpdesk.internalTicketSearch.verifyOwnerPFIsEmpty();
    await helpdesk.internalTicketSearch.selectAtStatus(testData.helpdesk('Status'));
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.verifyStatusColumnInGrid();
    await helpdesk.internalTicketSearch.clickBackButton();
    await helpdesk.internalTicketSearch.clickResetButton();
    await helpdesk.internalTicketSearch.verifyStatusComboBoxIsShowingDefaultValue();
    await helpdesk.internalTicketSearch.selectAtStatus1(testData.helpdesk('Status1'));
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.verifyStatus1ColumnInGrid();
    await helpdesk.internalTicketSearch.clickBackButton();
    await helpdesk.internalTicketSearch.clickResetButton();
    await helpdesk.internalTicketSearch.verifyStatusComboBoxIsShowingDefaultValue();
    await helpdesk.internalTicketSearch.selectAtPriority(testData.helpdesk('Priority'));
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.verifyPriorityColumnAsHighInGrid();
    await helpdesk.internalTicketSearch.selectRowByAtTicketNo(testData.helpdesk('TicketNo'));
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAtPriority(testData.helpdesk('Priority'));
    await helpdesk.internalTicketEntry.clickSaveButton();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyUpdateSuccessfulStatusMessage();
  });

  test('verifyDurationHoursBasedOnActivityAddedInTicketEntry_294712', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '294712', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.enterAtTicketNo(testData.helpdesk('TicketNo'));
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.selectRowByAtTicketNo(testData.helpdesk('TicketNo'));
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.switchToActivitiesTab();
    await helpdesk.internalTicketEntry.activitiesTab.clickAddActivityButton();
    await helpdesk.internalTicketEntry.activitiesTab.switchToActivityEntry();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.tabFinishedDateTime();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.clickSaveNClose();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.verifyAdditionSuccessfulAcknowledgeMessage();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyTotalDurationIsDisplayed();
  });

  test('verifyViewTicketFunctionalityInTicketEntryScreen_294729', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '294729', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickAddNewButton();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass'));
    await helpdesk.internalTicketEntry.enterAtSubject(testData.helpdesk('Subject'));
    await helpdesk.internalTicketEntry.enterAtCreatorPF(testData.helpdesk('CreatorPF'));
    await helpdesk.internalTicketEntry.selectAtStatus(testData.helpdesk('Status'));
    await helpdesk.internalTicketEntry.selectAtPriority(testData.helpdesk('Priority'));
    await helpdesk.internalTicketEntry.enterAtOwnerPF(testData.helpdesk('OwnerPF'));
    await helpdesk.internalTicketEntry.save();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAdditionSuccessfulStatusMessage();
    const ticketNo = await helpdesk.internalTicketEntry.readTicketNo();
    await helpdesk.internalTicketEntry.enterAtViewTicketNumber(ticketNo);
    await helpdesk.internalTicketEntry.clickViewTicketInfoIcon();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAtSubject(testData.helpdesk('Subject'));
  });

  test('verifyPriorityFieldFunctionalityInTicketSearchScreen_294731', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '294731', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.selectAtPriority(testData.helpdesk('Priority'));
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.verifyPriorityColumnAsHighInGrid();
    await helpdesk.internalTicketSearch.clickBackButton();
    await helpdesk.internalTicketSearch.clickResetButton();
    await helpdesk.internalTicketSearch.selectAtPriority1(testData.helpdesk('Priority1'));
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.verifyPriorityColumnAsMediumInGrid();
    await helpdesk.internalTicketSearch.clickBackButton();
    await helpdesk.internalTicketSearch.clickResetButton();
    await helpdesk.internalTicketSearch.selectAtPriority2(testData.helpdesk('Priority2'));
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.verifyPriorityColumnAsLowInGrid();
    await helpdesk.internalTicketSearch.clickBackButton();
    await helpdesk.internalTicketSearch.clickResetButton();
    await helpdesk.internalTicketSearch.selectAtPriority3(testData.helpdesk('Priority3'));
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.verifyPriorityColumnAsUrgentInGrid();
  });

  test('verifyPriorityAbleToChangeInTicketEntryscreen_294733', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '294733', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.enterAtTicketNo(testData.helpdesk('TicketNo'));
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.selectRowByAtTicketNo(testData.helpdesk('TicketNo'));
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAtPriority(testData.helpdesk('Priority'));
    await helpdesk.internalTicketEntry.selectAtPriority1(testData.helpdesk('Priority1'));
    await helpdesk.internalTicketEntry.save();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyUpdateSuccessfulStatusMessage();
    await helpdesk.internalTicketEntry.verifyAtPriority1(testData.helpdesk('Priority1'));
    await helpdesk.internalTicketEntry.close();
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickBackButton();
    await helpdesk.internalTicketSearch.clickResetButton();
    await helpdesk.internalTicketSearch.enterAtTicketNo(testData.helpdesk('TicketNo'));
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.verifyAtPriorityInGrid(testData.helpdesk('Priority1'));
  });

  test('verifyStatusFunctionality_294713', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '294713', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.enterAtTicketNo(testData.helpdesk('TicketNo'));
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.selectRowByAtTicketNo(testData.helpdesk('TicketNo'));
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.selectAtStatus(testData.helpdesk('Status'));
    await helpdesk.internalTicketEntry.save();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyUpdateSuccessfulStatusMessage();
    await helpdesk.internalTicketEntry.verifyAtStatusInTicketStatus();
    await helpdesk.internalTicketEntry.close();
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickBackButton();
    await helpdesk.internalTicketSearch.clickResetButton();
    await helpdesk.internalTicketSearch.enterAtTicketNo(testData.helpdesk('TicketNo'));
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.verifyAtStatusInGrid();
  });
});

test.describe('Helpdesk Entry Smoke @HelpdeskEntrySmoke', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('EmailSettingsEntrySmoke', async ({ testData, loaderPage, helpdesk, popupPage }) => {
    withTestContext(testData, 'ESEntry', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Email Settings');
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.clickAddNewButton();
    await popupPage.acknowledge.okIfWindowExist('After Add New');
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.selectAtJuris(testData.helpdesk('Juris'));
    await helpdesk.emailSettings.enterAtMailAddress(testData.helpdesk('MailAddress'));
    await helpdesk.emailSettings.enterAtSMTPServer(testData.helpdesk('SMTPServer'));
    await helpdesk.emailSettings.enterAtPort(testData.helpdesk('Port'));
    await helpdesk.emailSettings.save();
    await popupPage.acknowledge.okIfWindowExist('After Save');
    await helpdesk.emailSettings.verifyAdditionSuccessfulMessage();
  });

  test('InternalTicketEntrySmoke', async ({ testData, loaderPage, helpdesk, popupPage }) => {
    withTestContext(testData, 'ITSEntry', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickAddNewButton();
    await popupPage.acknowledge.okIfWindowExist('After Add New');
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass'));
    await helpdesk.internalTicketEntry.enterAtSubject(testData.helpdesk('Subject'));
    await helpdesk.internalTicketEntry.enterAtCreatorPF(testData.helpdesk('CreatorPF'));
    await helpdesk.internalTicketEntry.selectAtStatus(testData.helpdesk('Status'));
    await helpdesk.internalTicketEntry.selectAtPriority(testData.helpdesk('Priority'));
    await helpdesk.internalTicketEntry.enterAtOwnerPF(testData.helpdesk('OwnerPF'));
    await helpdesk.internalTicketEntry.save();
    await popupPage.acknowledge.okIfWindowExist('After Save');
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAdditionSuccessfulStatusMessage();
  });
});

test.describe('2023 HelpDesk Defect Test Cases @2023HelpDeskDefectTestCases', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('HelpDeskModuleRepositoryIdOfCustomFieldShownDiffersInVariousScreens_16991', async ({ testData, loaderPage, helpdesk, settings }) => {
    withTestContext(testData, '16991', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Email Settings');
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.clickTypeCustomText();
    await settings.module.switchToRepositoryEntry();
    await settings.repositoryEntry.verifyAtRepositoryID(testData.helpdesk('RepositoryID'));
    await settings.repositoryEntry.saveNClose();
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.selectRandomRow();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.clickDetailTab();
    await helpdesk.internalTicketEntry.detailTab.clickTypeCustomText();
    await settings.module.switchToRepositoryEntry();
    await settings.repositoryEntry.verifyAtRepositoryID(testData.helpdesk('RepositoryID'));
    await settings.repositoryEntry.saveNClose();
  });

  test('verifyInternalTicketStatusAndPriorityFieldDataAfterRefresh_17019', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '17019', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Entry');
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass'));
    await helpdesk.internalTicketEntry.verifyAtPriority(testData.helpdesk('Priority'));
    await helpdesk.internalTicketEntry.verifyAtStatusInComboBox();
    await helpdesk.internalTicketEntry.clickRefreshIcon();
    await helpdesk.internalTicketEntry.verifyHelpDeskClassAsNull();
    await helpdesk.internalTicketEntry.verifyAtStatus(testData.helpdesk('Status1'));
    await helpdesk.internalTicketEntry.verifyAtPriority1(testData.helpdesk('Priority1'));
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass'));
    await helpdesk.internalTicketEntry.verifyAtPriority(testData.helpdesk('Priority'));
    await helpdesk.internalTicketEntry.verifyAtStatusInComboBox();
  });

  test('HelpdeskInternalTicketEntrySearchIncludeActivitiesNotWorking_21773', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '21773', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.enterAtSubject(testData.helpdesk('Subject1'));
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.verifyAtSubjectInGrid(1);
    await helpdesk.internalTicketSearch.selectGridRowByAtSubject(1);
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAtSubject(testData.helpdesk('Subject1'));
    await helpdesk.internalTicketEntry.close();
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickBackButton();
    await helpdesk.internalTicketSearch.clickResetButton();
    await helpdesk.internalTicketSearch.enterAtSubject(testData.helpdesk('Subject2'));
    await helpdesk.internalTicketSearch.clickIncludeActivitiesCheckbox();
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.selectRowByAtTicketNo(testData.helpdesk('TicketNo'));
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.switchToActivitiesTab();
    await helpdesk.internalTicketEntry.activitiesTab.verifyAtSubject(testData.helpdesk('ActivitySubject'));
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.close();
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickBackButton();
    await helpdesk.internalTicketSearch.clickResetButton();
    await helpdesk.internalTicketSearch.selectAtCreatorJuris(testData.helpdesk('CreatorJuris'));
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.verifyAtSubjectInGrid(3);
  });

  test('ToVerifyTheTemplatesFunctionalitiesInInternalTicketEntry_41204', async ({ testData, loaderPage, helpdesk, home }) => {
    withTestContext(testData, '41204', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.selectGridRowByAtSubject(0);
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.switchToActivitiesTab();
    await helpdesk.internalTicketEntry.activitiesTab.clickAddActivityButton();
    await helpdesk.module.switchToActivityEntry();
    await helpdesk.activityEntry.verifyAtTemplateDropDown(testData.helpdesk('Template1'));
    await helpdesk.activityEntry.clickAddNewOrEditButton();
    await home.module.switchToTextMgmtScreen();
    await home.textMgmt.enterAtTextName(testData.helpdesk('TextName'));
    await home.textMgmt.enterAtRichText(testData.helpdesk('RichText'));
    await home.textMgmt.saveAndCloseScreen();
    await helpdesk.module.switchToActivityEntry();
    await helpdesk.activityEntry.clickResetIcon();
    await helpdesk.activityEntry.verifyAtTemplateDropDown(testData.helpdesk('Template2'));
    await helpdesk.activityEntry.selectAtTemplate(testData.helpdesk('Template'));
    await helpdesk.activityEntry.clickLoadButton();
    await helpdesk.activityEntry.verifyAtRichTextField(testData.helpdesk('RichTextExpected'));
    await helpdesk.activityEntry.clickSaveButton();
    await helpdesk.activityEntry.verifyAdditionSuccessfulAcknowledge();
    await helpdesk.module.switchToActivityEntry();
    await helpdesk.activityEntry.verifyAtRichTextField(testData.helpdesk('RichTextExpected'));
  });

  test('CRM173934ToVerifyTheDistributionListFunctionalitiesBasedOnEmailSettings_42348', async ({ testData, loaderPage, helpdesk, settings }) => {
    withTestContext(testData, '42348', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Email Settings');
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.verifyAtHelpDeskManagersDistributionList(testData.helpdesk('DistributionList'));
    await helpdesk.emailSettings.selectAtHelpDeskManagersDistributionList(testData.helpdesk('DistributionList'));
    await settings.module.switchToDistributionEntry();
    await settings.distributionEntry.enterAtDistributionListName(testData.helpdesk('DistributionListName'));
    await settings.distributionEntry.enterPFNo(testData.helpdesk('PFNo'));
    await settings.distributionEntry.clickAddButton();
    await settings.distributionEntry.saveScreen();
    await settings.distributionEntry.verifyAdditionSuccessfulMessage();
    await settings.distributionEntry.saveAndCloseScreen();
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.verifyAtHelpDeskManagersDistributionListInfoIconDisplayed();
    await helpdesk.emailSettings.clickHelpDeskManagersDistributionListInfoIcon();
    await settings.module.switchToDistributionEntry();
    await settings.distributionEntry.enterAtDistributionListName(testData.helpdesk('DistributionListName1'));
    await settings.distributionEntry.enterPFNo(testData.helpdesk('PFNo'));
    await settings.distributionEntry.clickAddButton();
    await settings.distributionEntry.saveScreen();
    await settings.distributionEntry.verifyAdditionSuccessfulMessage();
    await helpdesk.module.switchToEmailSettings();
  });

  test('CRM182753_CodedExpiredDateIssue_53081', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '53081', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Email Settings');
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.selectHelpDeskClassAsTestAutomation();
    await helpdesk.emailSettings.enterAtEmailAddressToWatch(testData.helpdesk('EmailAddress'));
    await helpdesk.emailSettings.enterAtUserName(testData.helpdesk('UserName'));
    await helpdesk.emailSettings.enterAtSmtpPassWord(testData.helpdesk('SmtpPassWord'));
    await helpdesk.emailSettings.save();
    await helpdesk.module.switchToEmailSettings();
    await loaderPage.navigateToScreen('Internal Ticket Entry');
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass'));
    await helpdesk.internalTicketEntry.enterAtSubject(testData.helpdesk('Subject'));
    await helpdesk.internalTicketEntry.enterAtCreatorPF(testData.helpdesk('CreatorPF'));
    await helpdesk.internalTicketEntry.selectAtStatus(testData.helpdesk('Status'));
    await helpdesk.internalTicketEntry.selectAtPriority(testData.helpdesk('Priority'));
    await helpdesk.internalTicketEntry.enterAtOwnerPF(testData.helpdesk('OwnerPF'));
    await helpdesk.internalTicketEntry.save();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAdditionSuccessfulStatusMessage();
    await helpdesk.internalTicketEntry.verify1006AcknowledgeIsNotArise();
  });

  test('CRM151469SaveSameEmailAddressForDifferentJurisInRMSEmailSettings_72314', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '72314', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Email Settings');
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.selectAtJuris(testData.helpdesk('Juris'));
    await helpdesk.emailSettings.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass'));
    await helpdesk.emailSettings.enterAtEmailAddressToWatch(testData.helpdesk('EmailAddress'));
    await helpdesk.emailSettings.enterAtUserName(testData.helpdesk('UserName'));
    await helpdesk.emailSettings.enterAtSmtpPassWord(testData.helpdesk('SmtpPassWord'));
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.enterAtSmtpServer(testData.helpdesk('SMTPServer'));
    await helpdesk.emailSettings.selectAtStatus(testData.helpdesk('Status'));
    await helpdesk.emailSettings.selectAtPriority(testData.helpdesk('Priority'));
    await helpdesk.emailSettings.save();
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.verify25762ThisEmailIDIsAlreadyInUseAcknowledgePopupNotAppears();
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.verifyAdditionSuccessfulStatusMessage();
  });
});

test.describe('HelpDesk CheckList @HelpDeskCheckList', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('VerifyTheDistributionList_48802', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '48802', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Email Settings');
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass'));
    await helpdesk.emailSettings.clickEnableModernAuthentication();
    await helpdesk.emailSettings.enterAtTenantId(testData.helpdesk('TenantId'));
    await helpdesk.emailSettings.enterAtApplicationID(testData.helpdesk('ApplicationID'));
    await helpdesk.emailSettings.enterAtClientSecretID(testData.helpdesk('ClientSecretID'));
    await helpdesk.emailSettings.enterAtEmailAddressToWatch(testData.helpdesk('EmailAddress'));
    await helpdesk.emailSettings.selectAtHelpDeskManagersDistributionList(testData.helpdesk('DistributionList'));
    await helpdesk.emailSettings.save();
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.verifyAdditionSuccessfulStatusMessage();
    await helpdesk.emailSettings.saveNClose();
  });

  test('VerifyAbleCreateAndUpdateTheValuesInEmailSettingsScreen_50643', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '50643', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Email Settings');
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass'));
    await helpdesk.emailSettings.enterAtEmailAddressToWatch(testData.helpdesk('EmailAddress'));
    await helpdesk.emailSettings.clickEnableModernAuthentication();
    await helpdesk.emailSettings.enterAtTenantId(testData.helpdesk('TenantId'));
    await helpdesk.emailSettings.enterAtApplicationID(testData.helpdesk('ApplicationID'));
    await helpdesk.emailSettings.enterAtClientSecretID(testData.helpdesk('ClientSecretID'));
    await helpdesk.emailSettings.save();
    await helpdesk.emailSettings.close();
    await loaderPage.navigateToScreen('Email Settings');
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.selectHelpDeskClassAsTestAutomation();
    await helpdesk.emailSettings.enterAtEmailAddressToWatch(testData.helpdesk('EmailAddress1'));
    await helpdesk.emailSettings.enterAtUserName(testData.helpdesk('UserName'));
    await helpdesk.emailSettings.enterAtSmtpPassWord(testData.helpdesk('SmtpPassWord'));
    await helpdesk.emailSettings.save();
    await helpdesk.module.switchToEmailSettings();
  });
});

test.describe('Daily Defect CRM HelpDesk @DailyDefectCRMHelpDesk', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('verifyDuplicateRecordIsNotCreatedByDoubleClickingOnSaveSaveNdCloseSaveNdAddNew_64298', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '64298', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Entry');
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyHelpDeskClassAsNull();
    await helpdesk.internalTicketEntry.verifySubjectAsNull();
    await helpdesk.internalTicketEntry.close();
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickAddNewButton();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass'));
    await helpdesk.internalTicketEntry.enterAtSubject(testData.helpdesk('Subject'));
    await helpdesk.internalTicketEntry.enterAtCreatorPF(testData.helpdesk('CreatorPF'));
    await helpdesk.internalTicketEntry.doubleClickTheSaveIcon();
    await helpdesk.module.switchToInternalTicketEntry();
    const ticketNo = await helpdesk.internalTicketEntry.readTicketNo();
    await helpdesk.internalTicketEntry.verifyAtTicketNo(ticketNo);
    await helpdesk.internalTicketEntry.doubleClickSaveAndCloseIcon();
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickBackButton();
    await helpdesk.internalTicketSearch.enterAtSubject(testData.helpdesk('Subject'));
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.verifyTicketNumberInGrid(ticketNo);
    await helpdesk.internalTicketSearch.verifyRowCountAsOne();
    await helpdesk.internalTicketSearch.verifyDuplicatesTicketNoIsNotListedInGrid();
    await helpdesk.internalTicketSearch.clickAddNewButton();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass'));
    await helpdesk.internalTicketEntry.enterAtSubject1(testData.helpdesk('Subject1'));
    await helpdesk.internalTicketEntry.enterAtCreatorPF(testData.helpdesk('CreatorPF'));
    await helpdesk.internalTicketEntry.save();
    await helpdesk.module.switchToInternalTicketEntry();
    const ticketNo1 = await helpdesk.internalTicketEntry.readTicketNo();
    await helpdesk.internalTicketEntry.doubleClickSaveNAddNew();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyHelpDeskClassAsNull();
    await helpdesk.internalTicketEntry.verifySubjectAsNull();
    await helpdesk.internalTicketEntry.close();
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickBackButton();
    await helpdesk.internalTicketSearch.enterAtSubject(testData.helpdesk('Subject1'));
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.verifyTicketNumberInGrid(ticketNo1);
    await helpdesk.internalTicketSearch.verifyRowCountAsOne();
    await helpdesk.internalTicketSearch.verifyDuplicatesTicketNoIsNotListedInGrid();
  });

  test('verifyTextIsFullyVisibleInDashboardTabInternalTicketSearch_64305', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '64305', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.switchToDashboardTab();
    await helpdesk.internalTicketSearch.dashBoardTab.verifyVisibleTextNotContainsDot();
  });

  test('verifyNewlyAddedVendorNameIsDisplayedInInternalTicketEntry_64309', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '64309', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.enterAtTicketNo(testData.helpdesk('TicketNo'));
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.selectRowByAtTicketNo(testData.helpdesk('TicketNo'));
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.clickDetailTab();
    await helpdesk.internalTicketEntry.detailTab.selectVendorNameAsAddVendor();
    await helpdesk.module.switchToNameEntry();
    await helpdesk.nameEntry.enterAtBusinessID(testData.helpdesk('BusinessID'));
    await helpdesk.nameEntry.enterAtName(testData.helpdesk('VendorName'));
    await helpdesk.nameEntry.save();
    await helpdesk.nameEntry.saveNdClose();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.clickRefreshIcon();
    await helpdesk.internalTicketEntry.clickDetailTab();
    await helpdesk.internalTicketEntry.detailTab.selectAtVendorName(testData.helpdesk('VendorName'));
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.save();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyUpdateSuccessfulStatusMessage();
    await helpdesk.internalTicketEntry.clickDetailTab();
    await helpdesk.internalTicketEntry.detailTab.verifyAtVendorName(testData.helpdesk('VendorName'));
  });

  test('verifyNewRestrictionHelpDeskClassByRoleIsNotWorking_65797', async ({ testData, loaderPage, helpdesk, loginPage, page, appConfig }) => {
    withTestContext(testData, '65797', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Email Settings');
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass'));
    await helpdesk.emailSettings.enterAtEmailAddressToWatch(testData.helpdesk('EmailAddress'));
    await helpdesk.emailSettings.enterAtUserName(testData.helpdesk('UserName'));
    await helpdesk.emailSettings.enterAtSmtpPassWord(testData.helpdesk('SmtpPassWord'));
    await helpdesk.emailSettings.enterAtSmtpServer(testData.helpdesk('SMTPServer'));
    await helpdesk.emailSettings.selectAtRole(testData.helpdesk('Role'));
    await helpdesk.emailSettings.save();
    await loaderPage.logout();
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Entry');
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass'));
    await helpdesk.internalTicketEntry.enterAtSubject(testData.helpdesk('Subject'));
    await helpdesk.internalTicketEntry.enterAtCreatorPF(testData.helpdesk('CreatorPF'));
    await helpdesk.internalTicketEntry.selectAtStatus(testData.helpdesk('Status'));
    await helpdesk.internalTicketEntry.selectAtPriority(testData.helpdesk('Priority'));
    await helpdesk.internalTicketEntry.save();
    await helpdesk.module.switchToInternalTicketEntry();
    const ticketNo = await helpdesk.internalTicketEntry.readTicketNo();
    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass'));
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.verifyAtTicketNumberInGrid(ticketNo);
    await loaderPage.logout();
    await loginPage.logonForOtherPF(testData.helpdesk('OtherPFUser'), testData.helpdesk('OtherPFPassword'));
    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.verifyAtHelpDeskClassValueNotContainsInDropdown(testData.helpdesk('HelpDeskClass'));
    await helpdesk.internalTicketSearch.enterTicketNoByActiveData(ticketNo);
    await helpdesk.internalTicketSearch.verifyYouDoNotAccessTicketAckMsg();
  });
});

test.describe('Q4S11 Legacy HelpDesk SP2025 @Q4S11LegacyHelpDeskSP2025', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('ToVerifyTheInProgressStatusByUsingParameterID6700InInternalTicketEntryBasedOnClosedCheckbox_72252', async ({ testData, loaderPage, helpdesk, settings }) => {
    withTestContext(testData, '72252', 'Helpdesk');

    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemparameter6700AsInprogress();
    await settings.module.switchToSystemParameter();
    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.enterAtTicketNo(testData.helpdesk('TicketNo'));
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.selectRowByAtTicketNo(testData.helpdesk('TicketNo'));
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAtStatusInTicketStatus(testData.helpdesk('Status1'));
    await helpdesk.internalTicketEntry.clickClosedCheckBox();
    await helpdesk.internalTicketEntry.verifyAtStatus(testData.helpdesk('Status2'));
    await helpdesk.internalTicketEntry.save();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAtStatusInTicketStatus(testData.helpdesk('Status2'));
    await helpdesk.internalTicketEntry.verifyUpdateSuccessfulStatusMessage();
    await helpdesk.internalTicketEntry.clickSaveNClose();
  });

  test('ToVerifyTheInProgressStatusByUsingParameterID6700InInternalTicketEntryBasedOnReopenedCheckbox_72257', async ({ testData, loaderPage, helpdesk, settings }) => {
    withTestContext(testData, '72257', 'Helpdesk');

    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.setSystemparameter6700AsReopened();
    await settings.module.switchToSystemParameter();
    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.enterAtTicketNo(testData.helpdesk('TicketNo'));
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.selectRowByAtTicketNo(testData.helpdesk('TicketNo'));
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAtStatusInTicketStatus(testData.helpdesk('Status1'));
    await helpdesk.internalTicketEntry.clickClosedCheckBox();
    await helpdesk.internalTicketEntry.verifyAtStatus(testData.helpdesk('Status2'));
    await helpdesk.internalTicketEntry.save();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAtStatusInTicketStatus(testData.helpdesk('Status2'));
    await helpdesk.internalTicketEntry.verifyUpdateSuccessfulStatusMessage();
    await helpdesk.internalTicketEntry.clickSaveNClose();
  });

  test('ToVerifyTheParameterID6702BasedOnNonPersonnel_72393', async ({ testData, loaderPage, helpdesk, settings }) => {
    withTestContext(testData, '72393', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Email Settings');
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.selectAtHelpDeskManagersDistributionList(testData.helpdesk('DistributionList'));
    await settings.module.switchToDistributionEntry();
    await settings.distributionEntry.enterAtDistributionListName(testData.helpdesk('DistributionListName'));
    await settings.distributionEntry.enterAtDescription(testData.helpdesk('Description'));
    await settings.distributionEntry.clickEmailRadioButton();
    await settings.distributionEntry.enterAtEmail(testData.helpdesk('Email1'));
    await settings.distributionEntry.enterAtName(testData.helpdesk('Name'));
    await settings.distributionEntry.clickAddButton();
    await settings.distributionEntry.verifyAtKeyByTypeInGrid(testData.helpdesk('KeyType'));
    await settings.distributionEntry.saveAndCloseScreen();
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.clickRefreshIcon();
    await helpdesk.emailSettings.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass'));
    await helpdesk.emailSettings.verifyAtHelpDeskManagersDistributionList(testData.helpdesk('DistributionList1'));
    await loaderPage.navigateToModule('Settings');
    await loaderPage.navigateToScreen('System Parameter');
    await settings.module.switchToSystemParameter();
    await settings.sysParameter.enterAtParameterID(testData.helpdesk('ParameterID'));
    await settings.sysParameter.clickSearchButton();
    await settings.sysParameter.verifyAtHelpDeskEmailAllowedList6702(testData.helpdesk('AllowedList'));
  });
});

test.describe('Q4S11 Legacy HelpDesk 2025 @Q4S11LegacyHelpDesk2025', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('ToVerifyTheSortOrderFunctionalitiesInInternalTicketSearchScreen_72298', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '72298', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.clickColumnHeaderByAtColumnName(testData.helpdesk('Column1'));
    await helpdesk.internalTicketSearch.verifyAtColumnValuesSortedAscendingOrder(testData.helpdesk('Column1'));
    await helpdesk.internalTicketSearch.clickColumnHeaderByAtColumnName(testData.helpdesk('Column1'));
    await helpdesk.internalTicketSearch.verifyAtColumnValuesSortedDescendingOrder(testData.helpdesk('Column1'));
  });

  test('ToVerifyTheViewTicketValidationPopupsFunctionalitiesInInternalTicketEntry_72326', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '72326', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.enterAtTicketNo(testData.helpdesk('TicketNo1'));
    await helpdesk.internalTicketSearch.verifyTicketNoInfoIconIsDisplayed();
    await helpdesk.internalTicketSearch.clickTicketNoInfoIcon();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAtTicketNo1(testData.helpdesk('TicketNo1'));
    await helpdesk.internalTicketEntry.close();
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickResetButton();
    await helpdesk.internalTicketSearch.enterAtTicketNo(testData.helpdesk('InvalidTicketNo'));
    await helpdesk.internalTicketSearch.verify1040NumberDoesNotExistAcknowledgePopupAppears();
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickResetButton();
    await helpdesk.internalTicketSearch.enterAtTicketNo(testData.helpdesk('FutureYearTicketNo'));
    await helpdesk.internalTicketSearch.verify1035FutureYearNotAllowedAcknowledgePopupAppears();
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickResetButton();
    await helpdesk.internalTicketSearch.enterAtTicketNo(testData.helpdesk('SpecialCharTicketNo'));
    await helpdesk.internalTicketSearch.verifyTicketNoFieldIsEmpty();
    await helpdesk.internalTicketSearch.clickResetButton();
    await helpdesk.internalTicketSearch.enterAtTicketNo(testData.helpdesk('AlphabetTicketNo'));
    await helpdesk.internalTicketSearch.verifyTicketNoFieldIsEmpty();
  });

  test('ToVerifyTheEmailSettingsScreenFunctionalitiesBasedOnBasicAuthentication_72349', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '72349', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Email Settings');
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass'));
    await helpdesk.emailSettings.verifyAtEmailAddressToWatch(testData.helpdesk('EmailAddress1'));
    await helpdesk.emailSettings.verifyAtEnableSSL(testData.helpdesk('EnableSSL1'));
    await helpdesk.emailSettings.verifyAtSMTPServer(testData.helpdesk('SMTPServer1'));
    await helpdesk.emailSettings.verifyAtDomain(testData.helpdesk('Domain1'));
    await helpdesk.emailSettings.verifyAtUserName(testData.helpdesk('UserName1'));
    await helpdesk.emailSettings.verifyAtPassword(testData.helpdesk('Password1'));
    await helpdesk.emailSettings.verifyAtNotificationEmail(testData.helpdesk('NotificationEmail1'));
    await helpdesk.emailSettings.selectAtCategory(testData.helpdesk('Category'));
    await helpdesk.emailSettings.selectAtStatus(testData.helpdesk('Status'));
    await helpdesk.emailSettings.selectAtPriority(testData.helpdesk('Priority'));
    await helpdesk.emailSettings.selectAtType(testData.helpdesk('Type'));
    await helpdesk.emailSettings.enterAtOwnerPF(testData.helpdesk('OwnerPF2'));
    await helpdesk.emailSettings.enterAtAutoEmailContent(testData.helpdesk('AutoEmailContent1'));
    await helpdesk.emailSettings.selectAtHelpDeskManagersDistributionList(testData.helpdesk('DistributionList'));
    await helpdesk.emailSettings.selectAtRole(testData.helpdesk('Role'));
    await helpdesk.emailSettings.clickRefreshIcon();
    await helpdesk.emailSettings.verifyAtEmailAddressToWatch(testData.helpdesk('EmailAddress1'));
    await helpdesk.emailSettings.verifyAtEnableSSL(testData.helpdesk('EnableSSL1'));
    await helpdesk.emailSettings.verifyAtSMTPServer(testData.helpdesk('SMTPServer1'));
    await helpdesk.emailSettings.verifyAtDomain(testData.helpdesk('Domain1'));
    await helpdesk.emailSettings.verifyAtUserName(testData.helpdesk('UserName1'));
    await helpdesk.emailSettings.verifyAtPassword(testData.helpdesk('Password1'));
    await helpdesk.emailSettings.verifyAtNotificationEmail(testData.helpdesk('NotificationEmail1'));
    await helpdesk.emailSettings.verifyAtCategory(testData.helpdesk('Category1'));
    await helpdesk.emailSettings.verifyAtStatus(testData.helpdesk('Status1'));
    await helpdesk.emailSettings.verifyAtPriority(testData.helpdesk('Priority1'));
    await helpdesk.emailSettings.verifyAtType(testData.helpdesk('Type1'));
    await helpdesk.emailSettings.verifyAtOwnerPF(testData.helpdesk('OwnerPF1'));
    await helpdesk.emailSettings.verifyAtAutoEmailContent(testData.helpdesk('AutoEmailContent1'));
    await helpdesk.emailSettings.verifyAtHelpDeskManagersDistributionList(testData.helpdesk('DistributionList1'));
    await helpdesk.emailSettings.verifyAtRole(testData.helpdesk('Role1'));
    await helpdesk.emailSettings.save();
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.verifyUpdateSuccessfulStatusMessage();
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.saveNClose();
    await loaderPage.navigateToScreen('Email Settings');
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass'));
    await helpdesk.emailSettings.clickDeleteIconWithConfirmationPopup();
    await helpdesk.emailSettings.verifyDeleteSuccessfulStatusMessage();
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.verifyAtEmailAddressToWatch(testData.helpdesk('EmailAddress2'));
    await helpdesk.emailSettings.verifyAtEnableSSL(testData.helpdesk('EnableSSL2'));
    await helpdesk.emailSettings.verifyAtSMTPServer(testData.helpdesk('SMTPServer2'));
    await helpdesk.emailSettings.verifyAtDomain(testData.helpdesk('Domain2'));
    await helpdesk.emailSettings.verifyAtUserName(testData.helpdesk('UserName2'));
    await helpdesk.emailSettings.verifyAtPassword(testData.helpdesk('Password2'));
  });

  test('ToVerifyTheEmailSettingsScreenFunctionalitiesBasedOnModernAuthentication_72369', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '72369', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Email Settings');
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass'));
    await helpdesk.emailSettings.verifyEnableModernAuthenticationCheckBoxChecked();
    await helpdesk.emailSettings.verifyAtEmailAddressToWatch(testData.helpdesk('EmailAddress1'));
    await helpdesk.emailSettings.verifyAtSMTPServer(testData.helpdesk('SMTPServer1'));
    await helpdesk.emailSettings.verifyAtTenantID(testData.helpdesk('TenantID1'));
    await helpdesk.emailSettings.verifyAtApplicationID(testData.helpdesk('ApplicationID1'));
    await helpdesk.emailSettings.verifyAtClientSecretID(testData.helpdesk('ClientSecretID1'));
    await helpdesk.emailSettings.verifyAtNotificationEmail(testData.helpdesk('NotificationEmail1'));
    await helpdesk.emailSettings.selectAtCategory(testData.helpdesk('Category'));
    await helpdesk.emailSettings.selectAtStatus(testData.helpdesk('Status'));
    await helpdesk.emailSettings.selectAtPriority(testData.helpdesk('Priority'));
    await helpdesk.emailSettings.selectAtType(testData.helpdesk('Type'));
    await helpdesk.emailSettings.enterAtOwnerPF(testData.helpdesk('OwnerPF2'));
    await helpdesk.emailSettings.enterAtAutoEmailContent(testData.helpdesk('AutoEmailContent1'));
    await helpdesk.emailSettings.selectAtHelpDeskManagersDistributionList(testData.helpdesk('DistributionList'));
    await helpdesk.emailSettings.selectAtRole(testData.helpdesk('Role'));
    await helpdesk.emailSettings.clickRefreshIcon();
    await helpdesk.emailSettings.verifyEnableModernAuthenticationCheckBoxChecked();
    await helpdesk.emailSettings.verifyAtEmailAddressToWatch(testData.helpdesk('EmailAddress1'));
    await helpdesk.emailSettings.verifyAtSMTPServer(testData.helpdesk('SMTPServer1'));
    await helpdesk.emailSettings.verifyAtTenantID(testData.helpdesk('TenantID1'));
    await helpdesk.emailSettings.verifyAtApplicationID(testData.helpdesk('ApplicationID1'));
    await helpdesk.emailSettings.verifyAtClientSecretID(testData.helpdesk('ClientSecretID1'));
    await helpdesk.emailSettings.verifyAtNotificationEmail(testData.helpdesk('NotificationEmail1'));
    await helpdesk.emailSettings.verifyAtCategory(testData.helpdesk('Category1'));
    await helpdesk.emailSettings.verifyAtStatus(testData.helpdesk('Status1'));
    await helpdesk.emailSettings.verifyAtPriority(testData.helpdesk('Priority1'));
    await helpdesk.emailSettings.verifyAtType(testData.helpdesk('Type1'));
    await helpdesk.emailSettings.verifyAtOwnerPF(testData.helpdesk('OwnerPF1'));
    await helpdesk.emailSettings.verifyAtAutoEmailContent(testData.helpdesk('AutoEmailContent2'));
    await helpdesk.emailSettings.verifyAtHelpDeskManagersDistributionList(testData.helpdesk('DistributionList1'));
    await helpdesk.emailSettings.verifyAtRole(testData.helpdesk('Role1'));
    await helpdesk.emailSettings.save();
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.verifyUpdateSuccessfulStatusMessage();
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.saveNClose();
    await loaderPage.navigateToScreen('Email Settings');
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass'));
    await helpdesk.emailSettings.clickDeleteIconWithConfirmationPopup();
    await helpdesk.emailSettings.verifyDeleteSuccessfulStatusMessage();
    await helpdesk.module.switchToEmailSettings();
    await helpdesk.emailSettings.verifyEnableModernAuthenticationCheckBoxNotChecked();
    await helpdesk.emailSettings.verifyAtEmailAddressToWatch(testData.helpdesk('EmailAddress2'));
    await helpdesk.emailSettings.verifyAtTenantID(testData.helpdesk('TenantID2'));
    await helpdesk.emailSettings.verifyAtApplicationID(testData.helpdesk('ApplicationID2'));
    await helpdesk.emailSettings.verifyAtClientSecretID(testData.helpdesk('ClientSecretID2'));
  });

  test('ToVerifyTheCreatedDateAndTimeFunctionalitiesInInternalTicketEntry_72399', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '72399', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickAddNewButton();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass1'));
    await helpdesk.internalTicketEntry.enterAtSubject(testData.helpdesk('Subject1'));
    await helpdesk.internalTicketEntry.enterAtCreatorPF(testData.helpdesk('CreatorPF'));
    await helpdesk.internalTicketEntry.selectAtStatus(testData.helpdesk('Status'));
    await helpdesk.internalTicketEntry.selectAtPriority(testData.helpdesk('Priority'));
    await helpdesk.internalTicketEntry.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass2'));
    await helpdesk.internalTicketEntry.verifyAtStatusInComboBox();
    await helpdesk.internalTicketEntry.verifyAtPriority(testData.helpdesk('Priority'));
    await helpdesk.internalTicketEntry.verifyAtOwner(testData.helpdesk('Owner1'));
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAtSubject(testData.helpdesk('Subject1'));
    await helpdesk.internalTicketEntry.verifyAtCreatorPF(testData.helpdesk('CreatorPF1'));
    await helpdesk.internalTicketEntry.save();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAdditionSuccessfulStatusMessage();
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickBackButton();
    await helpdesk.internalTicketSearch.clickResetButton();
    await helpdesk.internalTicketSearch.selectAtDateType(testData.helpdesk('DateType'));
    await helpdesk.internalTicketSearch.taboutDataTypeFrom();
    await helpdesk.internalTicketSearch.taboutDataTypeTo();
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.verifyAtSubjectInGrid(1);
    await helpdesk.internalTicketSearch.verifyAtPriorityInGrid();
    await helpdesk.internalTicketSearch.verifyAtStatusInGrid();
    await helpdesk.internalTicketSearch.verifyAtOwnerNameInGrid();
    await helpdesk.internalTicketSearch.verifyCreatedDateInGridAsCurrentDate();
    await helpdesk.internalTicketSearch.verifyAtCreatorInGrid(testData.helpdesk('Creator2'));
    await helpdesk.internalTicketSearch.selectGridRowByAtSubject(1);
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyCreatedDateValueAsCurrentDate();
  });

  test('ToVerifyTheUpdatedDateAndTimeFunctionalitiesInInternalTicketEntry_72423', async ({ testData, loaderPage, helpdesk, popupPage }) => {
    withTestContext(testData, '72423', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickAddNewButton();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass1'));
    await helpdesk.internalTicketEntry.enterAtSubject(testData.helpdesk('Subject2'));
    await helpdesk.internalTicketEntry.enterAtCreatorPF(testData.helpdesk('CreatorPF'));
    await helpdesk.internalTicketEntry.selectAtStatus(testData.helpdesk('Status'));
    await helpdesk.internalTicketEntry.selectAtPriority(testData.helpdesk('Priority'));
    await helpdesk.internalTicketEntry.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass2'));
    await helpdesk.internalTicketEntry.verifyAtStatusInComboBox();
    await helpdesk.internalTicketEntry.verifyAtPriority(testData.helpdesk('Priority'));
    await helpdesk.internalTicketEntry.verifyAtOwner(testData.helpdesk('Owner1'));
    await helpdesk.internalTicketEntry.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass2'));
    await helpdesk.internalTicketEntry.enterAtSubject(testData.helpdesk('Subject'));
    await helpdesk.internalTicketEntry.clearCreatorPFValue();
    await helpdesk.internalTicketEntry.clickCreatorPFLookUpIcon();
    await popupPage.kPICodedLookup.enterAtCode(testData.helpdesk('LookupCode'));
    await popupPage.kPICodedLookup.clickSearchIcon();
    await popupPage.kPICodedLookup.selectAtCodeValueInGrid(testData.helpdesk('LookupCode'));
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAtSubject(testData.helpdesk('Subject2'));
    await helpdesk.internalTicketEntry.verifyAtCreatorPF(testData.helpdesk('CreatorPF1'));
    await helpdesk.internalTicketEntry.save();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAdditionSuccessfulStatusMessage();
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickBackButton();
    await helpdesk.internalTicketSearch.clickResetButton();
    await helpdesk.internalTicketSearch.selectAtDateType(testData.helpdesk('DateType'));
    await helpdesk.internalTicketSearch.taboutDataTypeFrom();
    await helpdesk.internalTicketSearch.taboutDataTypeTo();
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.verifyAtSubjectInGrid(2);
    await helpdesk.internalTicketSearch.verifyAtPriorityInGrid();
    await helpdesk.internalTicketSearch.verifyAtStatusInGrid();
    await helpdesk.internalTicketSearch.verifyAtOwnerNameInGrid();
    await helpdesk.internalTicketSearch.verifyAtCreatorInGrid(testData.helpdesk('Creator2'));
    await helpdesk.internalTicketSearch.selectGridRowByAtSubject(2);
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.enterAtSubject(testData.helpdesk('Subject1'));
    await helpdesk.internalTicketEntry.save();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyUpdatedDateDisplayed();
    await helpdesk.internalTicketEntry.verifyUpdatedDateAsCurrentDate();
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.verifyAtSubjectInGrid(3);
  });

  test('ToVerifyTheDetailTabInInternalTicketSearchAddMode_72435', async ({ testData, loaderPage, helpdesk, popupPage }) => {
    withTestContext(testData, '72435', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickAddNewButton();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass1'));
    await helpdesk.internalTicketEntry.enterAtSubject(testData.helpdesk('Subject1'));
    await helpdesk.internalTicketEntry.enterAtCreatorPF(testData.helpdesk('CreatorPF'));
    await helpdesk.internalTicketEntry.selectAtStatus(testData.helpdesk('Status'));
    await helpdesk.internalTicketEntry.selectAtPriority(testData.helpdesk('Priority'));
    await helpdesk.internalTicketEntry.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass2'));
    await helpdesk.internalTicketEntry.clearCreatorPFValue();
    await helpdesk.internalTicketEntry.clickCreatorPFLookUpIcon();
    await popupPage.kPICodedLookup.enterAtCode(testData.helpdesk('LookupCode'));
    await popupPage.kPICodedLookup.clickSearchIcon();
    await popupPage.kPICodedLookup.selectAtCodeValueInGrid(testData.helpdesk('LookupCode'));
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.save();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAdditionSuccessfulStatusMessage();
    await helpdesk.internalTicketEntry.clickDetailTab();
    await helpdesk.internalTicketEntry.detailTab.enterAtProblemDescription(testData.helpdesk('ProblemDescription'));
    await helpdesk.internalTicketEntry.detailTab.selectAtCategory(testData.helpdesk('Category'));
    await helpdesk.internalTicketEntry.detailTab.selectAtProject(testData.helpdesk('Project'));
    await helpdesk.internalTicketEntry.detailTab.selectAtType(testData.helpdesk('Type'));
    await helpdesk.internalTicketEntry.detailTab.selectAtModule(testData.helpdesk('Module'));
    await helpdesk.internalTicketEntry.detailTab.tabDueByDateAndTime();
    await helpdesk.internalTicketEntry.detailTab.enterAtVersion(testData.helpdesk('Version'));
    await helpdesk.internalTicketEntry.detailTab.enterAtRelatedCRM(testData.helpdesk('RelatedCRM'));
    await helpdesk.internalTicketEntry.detailTab.verifyAtCreatorJuris(testData.helpdesk('CreatorJuris'));
    await helpdesk.internalTicketEntry.detailTab.selectAtVendorName(testData.helpdesk('VendorName'));
    await helpdesk.internalTicketEntry.detailTab.enterAtVendorNotes(testData.helpdesk('VendorNotes'));
    await helpdesk.internalTicketEntry.detailTab.enterAtRelatedTicket(testData.helpdesk('RelatedTicket'));
    await helpdesk.internalTicketEntry.detailTab.selectAtHowWasitClosed(testData.helpdesk('HowClosed'));
    await helpdesk.internalTicketEntry.detailTab.selectAtActionPlan(testData.helpdesk('ActionPlan'));
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.save();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyUpdateSuccessfulStatusMessage();
    await helpdesk.internalTicketEntry.clickDetailTab();
    await helpdesk.internalTicketEntry.detailTab.verifyAtProblemDescription(testData.helpdesk('ProblemDescription'));
    await helpdesk.internalTicketEntry.detailTab.verifyAtCategory(testData.helpdesk('Category'));
    await helpdesk.internalTicketEntry.detailTab.verifyAtProject(testData.helpdesk('Project'));
    await helpdesk.internalTicketEntry.detailTab.verifyAtType(testData.helpdesk('Type'));
    await helpdesk.internalTicketEntry.detailTab.verifyAtModule(testData.helpdesk('Module'));
    await helpdesk.internalTicketEntry.detailTab.verifyAtVersion(testData.helpdesk('Version'));
    await helpdesk.internalTicketEntry.detailTab.verifyAtRelatedCRM(testData.helpdesk('RelatedCRM'));
    await helpdesk.internalTicketEntry.detailTab.verifyAtVendorName(testData.helpdesk('VendorName'));
    await helpdesk.internalTicketEntry.detailTab.verifyAtVendorNotes(testData.helpdesk('VendorNotes'));
    await helpdesk.internalTicketEntry.detailTab.verifyAtRelatedTicket(testData.helpdesk('RelatedTicket'));
    await helpdesk.internalTicketEntry.detailTab.verifyAtHowWasitClosed(testData.helpdesk('HowClosed'));
    await helpdesk.internalTicketEntry.detailTab.verifyAtActionPlan(testData.helpdesk('ActionPlan'));
  });

  test('ToVerifyTheShowSystemEntriesCheckboxFunctionalitiesInInternalTicketEntryScreen_72526', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '72526', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickAddNewButton();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass1'));
    await helpdesk.internalTicketEntry.enterAtSubject(testData.helpdesk('Subject'));
    await helpdesk.internalTicketEntry.enterAtCreatorPF(testData.helpdesk('CreatorPF'));
    await helpdesk.internalTicketEntry.selectAtStatus(testData.helpdesk('Status'));
    await helpdesk.internalTicketEntry.selectAtPriority(testData.helpdesk('Priority'));
    await helpdesk.internalTicketEntry.save();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAdditionSuccessfulStatusMessage();
    await helpdesk.internalTicketEntry.switchToActivitiesTab();
    await helpdesk.internalTicketEntry.activitiesTab.clickAddActivityButton();
    await helpdesk.internalTicketEntry.activitiesTab.switchToActivityEntry();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.tabFinishedDateTime();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.selectAtStatus(testData.helpdesk('ActivityStatus1'));
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.verifyPrivateAdminUseOnlyCheckboxChecked();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.selectAtTemplate(testData.helpdesk('Template'));
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.clickLoadButton();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.verifyAtCommentInRichTextField(testData.helpdesk('RichTextExpected'));
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.clickSaveNClose();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.verifyAdditionSuccessfulAcknowledgeMessage();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.switchToActivitiesTab();
    await helpdesk.internalTicketEntry.activitiesTab.verifyShowSystemEntriesCheckBoxIsEnabled();
    await helpdesk.internalTicketEntry.activitiesTab.verifyShowSystemEntriesCheckBoxIsUnChecked();
    await helpdesk.internalTicketEntry.activitiesTab.clickShowSystemEntriesCheckBox();
    await helpdesk.internalTicketEntry.activitiesTab.verifyShowSystemEntriesCheckBoxIsChecked();
    await helpdesk.internalTicketEntry.activitiesTab.verifyPrivateLabelIsRedColor();
    await helpdesk.internalTicketEntry.activitiesTab.verifyPencilIconIsDisplayed();
    await helpdesk.internalTicketEntry.activitiesTab.clickPencilIcon();
    await helpdesk.internalTicketEntry.activitiesTab.switchToActivityEntry();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.verifyPrivateAdminUseOnlyCheckboxChecked();
  });

  test('ToVerifyTheShowUserViewCheckboxFunctionalitiesInInternalTicketEntryScreen_73997', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '73997', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickAddNewButton();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass1'));
    await helpdesk.internalTicketEntry.enterAtSubject(testData.helpdesk('Subject'));
    await helpdesk.internalTicketEntry.enterAtCreatorPF(testData.helpdesk('CreatorPF'));
    await helpdesk.internalTicketEntry.selectAtStatus(testData.helpdesk('Status'));
    await helpdesk.internalTicketEntry.selectAtPriority(testData.helpdesk('Priority'));
    await helpdesk.internalTicketEntry.save();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAdditionSuccessfulStatusMessage();
    await helpdesk.internalTicketEntry.switchToActivitiesTab();
    await helpdesk.internalTicketEntry.activitiesTab.clickAddActivityButton();
    await helpdesk.internalTicketEntry.activitiesTab.switchToActivityEntry();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.tabFinishedDateTime();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.verifyPrivateAdminUseOnlyCheckboxChecked();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.selectAtTemplate(testData.helpdesk('Template'));
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.clickLoadButton();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.clickSaveNClose();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.verifyAdditionSuccessfulAcknowledgeMessage();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.switchToActivitiesTab();
    await helpdesk.internalTicketEntry.activitiesTab.clickAddActivityButton();
    await helpdesk.internalTicketEntry.activitiesTab.switchToActivityEntry();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.tabFinishedDateTime();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.clickPrivateAdminUseOnlyCheckbox();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.verifyPrivateAdminUseOnlyCheckboxNotChecked();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.selectAtTemplate(testData.helpdesk('Template'));
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.clickLoadButton();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.clickSaveNClose();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.verifyAdditionSuccessfulAcknowledgeMessage();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.switchToActivitiesTab();
    await helpdesk.internalTicketEntry.activitiesTab.verifyShowUserViewCheckBoxIsEnabled();
    await helpdesk.internalTicketEntry.activitiesTab.verifyShowUserViewCheckBoxIsUnChecked();
    await helpdesk.internalTicketEntry.activitiesTab.clickShowUserViewCheckBox();
    await helpdesk.internalTicketEntry.activitiesTab.verifyShowUserViewCheckBoxIsChecked();
    await helpdesk.internalTicketEntry.activitiesTab.verifyPencilIconIsDisplayed();
    await helpdesk.internalTicketEntry.activitiesTab.clickPencilIcon();
    await helpdesk.internalTicketEntry.activitiesTab.switchToActivityEntry();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.verifyPrivateAdminUseOnlyCheckboxNotChecked();
  });
});

test.describe('2025 HelpDesk Enhancement @2025HelpDeskEnhancement', () => {
  test.beforeEach(async ({ page, appConfig, loginPage }) => {
    await page.goto(appConfig.baseUrl);
    await loginPage.login(appConfig.username, appConfig.password, appConfig.database);
  });

  test('ToVerifyTheUpdateOnFunctionalitiesInInternalTicketSearchScreenBasedOnActivity_72492', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '72492', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.enterAtSubject(testData.helpdesk('Subject1'));
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.selectGridRowByAtSubject(1);
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.switchToActivitiesTab();
    await helpdesk.internalTicketEntry.activitiesTab.clickAddActivityButton();
    await helpdesk.internalTicketEntry.activitiesTab.switchToActivityEntry();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.tabFinishedDateTime();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.verifyAtStatus(testData.helpdesk('ActivityStatus'));
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.enterAtRichText(testData.helpdesk('RichText'));
    await helpdesk.internalTicketEntry.activitiesTab.switchToActivityEntry();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.verifyAtCommentInRichTextField(testData.helpdesk('RichTextExpected'));
    await helpdesk.internalTicketEntry.activitiesTab.switchToActivityEntry();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.saveAndCloseScreen();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.clickSaveNClose();
  });

  test('CRM156166ToVerifyTheReportedOnDateTypeFunctionalitiesInInternalTicketSearch_73537', async ({ testData, loaderPage, helpdesk }) => {
    withTestContext(testData, '73537', 'Helpdesk');

    await loaderPage.navigateToModule('Help Desk');
    await loaderPage.navigateToScreen('Internal Ticket Search');
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickAddNewButton();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.selectAtHelpDeskClass(testData.helpdesk('HelpDeskClass1'));
    await helpdesk.internalTicketEntry.verifyAtOwnerPFCodeAndDescription(testData.helpdesk('OwnerPFCode'), testData.helpdesk('OwnerPFDescription'));
    await helpdesk.internalTicketEntry.enterAtSubject(testData.helpdesk('Subject1'));
    await helpdesk.internalTicketEntry.enterAtCreatorPF(testData.helpdesk('CreatorPF'));
    await helpdesk.internalTicketEntry.selectAtStatus(testData.helpdesk('Status'));
    await helpdesk.internalTicketEntry.selectAtPriority(testData.helpdesk('Priority'));
    await helpdesk.internalTicketEntry.save();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.verifyAdditionSuccessfulStatusMessage();
    await helpdesk.internalTicketEntry.switchToActivitiesTab();
    await helpdesk.internalTicketEntry.activitiesTab.clickAddActivityButton();
    await helpdesk.internalTicketEntry.activitiesTab.switchToActivityEntry();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.tabFinishedDateTime();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.enterAtRichText(testData.helpdesk('RichText'));
    await helpdesk.internalTicketEntry.activitiesTab.switchToActivityEntry();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.saveAndCloseScreen();
    await helpdesk.internalTicketEntry.activitiesTab.addActivityEntry.verifyAdditionSuccessfulAcknowledgeMessage();
    await helpdesk.module.switchToInternalTicketEntry();
    await helpdesk.internalTicketEntry.clickSaveNClose();
    await helpdesk.module.switchToInternalTicketSearchScreen();
    await helpdesk.internalTicketSearch.clickBackButton();
    await helpdesk.internalTicketSearch.clickResetButton();
    await helpdesk.internalTicketSearch.selectAtDateType(testData.helpdesk('DateType2'));
    await helpdesk.internalTicketSearch.taboutDataTypeFrom();
    await helpdesk.internalTicketSearch.taboutDataTypeTo();
    await helpdesk.internalTicketSearch.clickSearchButton();
    await helpdesk.internalTicketSearch.verifyCreatedDateInGridAsCurrentDate();
    await helpdesk.internalTicketSearch.clickBackButton();
    await helpdesk.internalTicketSearch.clickResetButton();
    await helpdesk.internalTicketSearch.enterDataTypeFromAsFutureDate(testData.helpdesk('FutureDays'));
    await helpdesk.internalTicketSearch.verify2559TheToDateCannotBePriorToTheFromDateAcknowledgePopup();
  });
});
